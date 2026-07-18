import * as fs from "node:fs";
import * as path from "node:path";
import semver from "semver";
import { byCodepoint, diffManifests, manifestToMap, readManifest, repoRoot } from "./lib.ts";

const changelogsDir = path.join(repoRoot, "changelogs");

/** Sections of a package changelog: version heading -> body lines, newest first. */
const sectionCache = new Map<string, Map<string, string[]> | undefined>();

function parseChangelog(name: string): Map<string, string[]> | undefined {
  if (sectionCache.has(name)) return sectionCache.get(name);
  const file = path.join(changelogsDir, `${name}.md`);
  let sections: Map<string, string[]> | undefined;
  if (fs.existsSync(file)) {
    sections = new Map();
    let current: string[] | undefined;
    for (const line of fs.readFileSync(file, "utf8").split("\n")) {
      const heading = /^## (.+)$/.exec(line);
      if (heading !== null) {
        const version = heading[1]!.trim();
        current = semver.valid(version) ? [] : undefined;
        if (current !== undefined) sections.set(version, current);
      } else {
        current?.push(line);
      }
    }
  }
  sectionCache.set(name, sections);
  return sections;
}

/** Demote every markdown heading by one level so sections nest under a package H2. */
const demoteHeadings = (lines: string[]): string[] =>
  lines.map((line) => (/^#{1,5} /.test(line) ? `#${line}` : line));

const trimBlankEdges = (lines: string[]): string[] => {
  const result = [...lines];
  while (result.length > 0 && result[0]!.trim() === "") result.shift();
  while (result.length > 0 && result.at(-1)!.trim() === "") result.pop();
  return result;
};

export type DepUpdatesMode = "include" | "exclude-backstage" | "exclude-all";

export const DEP_UPDATES_MODES: DepUpdatesMode[] = ["include", "exclude-backstage", "exclude-all"];

/** Drop headings that have no content left before the next heading. */
function removeEmptyHeadings(lines: string[]): string[] {
  const out: string[] = [];
  for (let i = 0; i < lines.length; i++) {
    if (/^#{1,6} /.test(lines[i]!)) {
      let j = i + 1;
      while (j < lines.length && lines[j]!.trim() === "") j++;
      if (j >= lines.length || /^#{1,6} /.test(lines[j]!)) {
        i = j - 1;
        continue;
      }
    }
    out.push(lines[i]!);
  }
  return out;
}

const collapseBlanks = (lines: string[]): string[] =>
  lines.filter((line, index, all) => line.trim() !== "" || all[index - 1]?.trim() !== "");

/**
 * Filter changesets "Updated dependencies" bullets from a version section
 * body: drop the @backstage/* child bumps (or all children for exclude-all),
 * then the bullet itself when nothing is left, then headings that lost all
 * their content. Other scopes (e.g. @backstage-community/*) are untouched.
 */
export function filterDependencyUpdates(
  body: string[],
  mode: DepUpdatesMode,
): { body: string[]; removedSomething: boolean } {
  if (mode === "include") return { body, removedSomething: false };
  const dropChild = (line: string): boolean =>
    mode === "exclude-all" ? /^\s+- /.test(line) : /^\s+- @backstage\//.test(line);

  const out: string[] = [];
  let removedSomething = false;
  for (let i = 0; i < body.length; i++) {
    const line = body[i]!;
    if (!/^- Updated dependencies/.test(line)) {
      out.push(line);
      continue;
    }
    const children: string[] = [];
    while (i + 1 < body.length && /^\s{2,}\S/.test(body[i + 1]!)) {
      children.push(body[++i]!);
    }
    const kept = children.filter((child) => !dropChild(child));
    if (kept.some((child) => /^\s+- /.test(child))) {
      if (kept.length < children.length) removedSomething = true;
      out.push(line, ...kept);
    } else {
      // The bullet has no dependency bumps left (or never had any) — drop it.
      removedSomething = true;
    }
  }
  return { body: collapseBlanks(removeEmptyHeadings(out)), removedSomething };
}

/**
 * Changelog sections of a package for versions in (from, to]. Prerelease
 * sections are skipped unless the target itself is a prerelease: Backstage's
 * stable sections aggregate the changes of their -next iterations, so
 * including both would duplicate content. A "filtered" result means every
 * in-range section was removed by the dependency-updates filter.
 */
function sectionsInRange(
  name: string,
  from: string | undefined,
  to: string,
  mode: DepUpdatesMode,
): { kind: "content" | "missing" | "none" | "filtered"; lines: string[] } {
  const sections = parseChangelog(name);
  if (sections === undefined) return { kind: "missing", lines: [`_No changelog available for \`${name}\`._`] };
  const includePrereleases = semver.prerelease(to) !== null;
  const lines: string[] = [];
  let sectionsFiltered = 0;
  for (const [version, body] of sections) {
    if (semver.gt(version, to) || (from !== undefined && semver.lte(version, from))) continue;
    if (!includePrereleases && semver.prerelease(version) !== null) continue;
    const filtered = filterDependencyUpdates(body, mode);
    const content = trimBlankEdges(filtered.body);
    if (content.length === 0) {
      if (filtered.removedSomething) sectionsFiltered += 1;
      continue;
    }
    lines.push(`### ${version}`, "", ...trimBlankEdges(demoteHeadings(content)), "");
  }
  if (lines.length === 0) {
    if (sectionsFiltered > 0) return { kind: "filtered", lines: [] };
    return { kind: "none", lines: ["_No changelog entries found._"] };
  }
  return { kind: "content", lines: trimBlankEdges(lines) };
}

/**
 * Build an aggregated changelog between two releases (folder names under
 * releases/, e.g. "1.52.1", "1.53.0", or "next"): all changed or added
 * packages with their changelog sections after the from version (exclusive)
 * up to the to version (inclusive).
 */
export function buildChangelog(
  fromRelease: string,
  toRelease: string,
  mode: DepUpdatesMode = "exclude-backstage",
): string {
  const fromManifest = readManifest(fromRelease);
  const toManifest = readManifest(toRelease);
  const diff = diffManifests(manifestToMap(fromManifest), manifestToMap(toManifest));

  const changed = [...diff.majorBumps, ...diff.otherBumps].sort((a, b) => byCodepoint(a.name, b.name));
  const added = [...diff.added].sort((a, b) => byCodepoint(a.name, b.name));

  const excluded: string[] = [];
  const lines: string[] = [];
  lines.push(`# Backstage Release ${toManifest.releaseVersion} changelog`, "");
  lines.push(
    `Changes between ${fromManifest.releaseVersion} and ${toManifest.releaseVersion} — ` +
      `${changed.length} changed and ${added.length} added packages.`,
    "",
  );
  if (added.length > 0) {
    lines.push(`Newly added: ${added.map(({ name }) => `\`${name}\``).join(", ")}.`, "");
  }
  // Added packages come first — they are the most notable and must not drown
  // at the bottom of a large document that GitHub may render truncated.
  const entries = [
    ...added.map(({ name, version }) => ({ name, from: undefined as string | undefined, to: version, label: `new, ${version}` })),
    ...changed.map(({ name, from, to }) => ({ name, from: from as string | undefined, to, label: `${from} → ${to}` })),
  ];
  for (const { name, from, to, label } of entries) {
    const sections = sectionsInRange(name, from, to, mode);
    if (sections.kind === "filtered") {
      excluded.push(name);
      continue;
    }
    lines.push(`## \`${name}\` (${label})`, "");
    lines.push(...sections.lines, "");
  }
  if (excluded.length > 0) {
    lines.push(
      `_Excluded dependency updates for packages: ${excluded.map((name) => `\`${name}\``).join(", ")}._`,
      "",
    );
  }
  return trimBlankEdges(lines).join("\n") + "\n";
}
