import * as fs from "node:fs";
import * as path from "node:path";
import semver from "semver";
import { bumpLevel, byCodepoint, diffManifests, type Manifest, manifestToMap, repoRoot } from "./lib.ts";

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

/** Demote every markdown heading so sections nest under the package headings. */
const demoteHeadings = (lines: string[], levels: number): string[] =>
  lines.map((line) => (/^#{1,4} /.test(line) ? "#".repeat(levels) + line : line));

/** GitHub-compatible heading anchor: lowercase, strip punctuation, spaces to dashes. */
const slug = (heading: string): string =>
  heading.toLowerCase().replaceAll(/[^\p{L}\p{N} _-]/gu, "").replaceAll(" ", "-");

/** Link from a generated CHANGELOG.md to a version headline of a copied changelog. */
const changelogVersionLink = (changelogsPath: string, name: string, version: string): string =>
  `${changelogsPath}/${name}.md#${slug(version)}`;

/** Link the leading 7-char commit sha of changeset bullets to backstage/backstage. */
const linkCommitShas = (lines: string[]): string[] =>
  lines.map((line) =>
    line.replace(
      /^(\s*)- ([0-9a-f]{7,40}): /,
      (_match, indent: string, sha: string) =>
        `${indent}- [\`${sha}\`](https://github.com/backstage/backstage/commit/${sha}): `,
    ),
  );

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
    lines.push(`#### ${version}`, "", ...trimBlankEdges(linkCommitShas(demoteHeadings(content, 2))), "");
  }
  if (lines.length === 0) {
    if (sectionsFiltered > 0) return { kind: "filtered", lines: [] };
    return { kind: "none", lines: ["_No changelog entries found._"] };
  }
  return { kind: "content", lines: trimBlankEdges(lines) };
}

export interface ChangelogRenderOptions {
  /** H1 text; defaults to `Backstage Release <to> changelog`. */
  title?: string;
  /** Labels for the two releases in the summary line; default to the release versions. */
  fromLabel?: string;
  toLabel?: string;
  /** Relative path from the generated file to the changelogs/ folder. */
  changelogsPath?: string;
}

const DEFAULT_CHANGELOGS_PATH = "../changelogs";

/**
 * Build an aggregated changelog between two release manifests: all changed or
 * added packages with their changelog sections after the from version
 * (exclusive) up to the to version (inclusive).
 */
export function buildChangelog(
  fromManifest: Manifest,
  toManifest: Manifest,
  mode: DepUpdatesMode = "exclude-backstage",
  options: ChangelogRenderOptions = {},
): string {
  const changelogsPath = options.changelogsPath ?? DEFAULT_CHANGELOGS_PATH;
  const diff = diffManifests(manifestToMap(fromManifest), manifestToMap(toManifest));

  const changed = [...diff.majorBumps, ...diff.otherBumps].sort((a, b) => byCodepoint(a.name, b.name));
  const added = [...diff.added].sort((a, b) => byCodepoint(a.name, b.name));

  const versionLink = (name: string, version: string): string =>
    `[${version}](${changelogVersionLink(changelogsPath, name, version)})`;
  const candidates = [
    ...added.map(({ name, version }) => ({
      name,
      from: undefined as string | undefined,
      to: version,
      label: `new, ${version}`,
      linkedLabel: `new, ${versionLink(name, version)}`,
    })),
    ...changed.map(({ name, from, to }) => ({
      name,
      from: from as string | undefined,
      to,
      label: `${from} → ${to}`,
      linkedLabel: `${from} → ${versionLink(name, to)}`,
    })),
  ];

  // Assign every package to its first matching group (newly added packages
  // stay a dedicated first group so they never drown in a large document).
  const NEWLY_ADDED = 0, BREAKING = 1, MAJOR = 2, ZERO_MINOR = 3, ZERO_ZERO_PATCH = 4, ZERO_PATCH = 5, MINOR = 6, PATCH = 7;
  interface PackageEntry {
    name: string;
    label: string;
    linkedLabel: string;
    content: string[];
  }
  const groups: PackageEntry[][] = Array.from({ length: 8 }, () => []);
  const excluded: { name: string; linkedLabel: string }[] = [];
  for (const { name, from, to, label, linkedLabel } of candidates) {
    const sections = sectionsInRange(name, from, to, mode);
    if (sections.kind === "filtered") {
      excluded.push({ name, linkedLabel });
      continue;
    }
    const entry = { name, label, linkedLabel, content: sections.lines };
    if (from === undefined) {
      groups[NEWLY_ADDED]!.push(entry);
    } else if (sections.lines.some((line) => /breaking/i.test(line))) {
      groups[BREAKING]!.push(entry);
    } else {
      const bump = bumpLevel(from, to);
      const group =
        bump?.level === "Major"
          ? MAJOR
          : bump?.level === "Minor"
            ? (bump.breaking ? ZERO_MINOR : MINOR)
            : bump?.breaking
              ? ZERO_ZERO_PATCH
              : bump !== undefined && semver.major(to) === 0
                ? ZERO_PATCH
                : PATCH;
      groups[group]!.push(entry);
    }
  }
  for (const group of groups) group.sort((a, b) => byCodepoint(a.name, b.name));
  excluded.sort((a, b) => byCodepoint(a.name, b.name));
  const removed = [...diff.removed].sort((a, b) => byCodepoint(a.name, b.name));

  const titles = [
    "Newly added packages",
    "Breaking changes",
    "Major version bumps",
    "0.x minor version bumps",
    "0.0.x patch version bumps",
    "0.x patch version bumps",
    groups[ZERO_MINOR]!.length > 0 ? "Other minor version bumps" : "Minor version bumps",
    groups[ZERO_ZERO_PATCH]!.length > 0 || groups[ZERO_PATCH]!.length > 0
      ? "Other patch version bumps"
      : "Patch version bumps",
  ];
  // The plain heading text drives the anchor and ToC label; the rendered
  // heading links the "to" version to the copied changelog. Both render to the
  // same text, so GitHub's anchors match the plain-text slug.
  const packageHeading = (entry: { name: string; label: string }): string => `\`${entry.name}\` (${entry.label})`;
  const packageHeadingLinked = (entry: { name: string; linkedLabel: string }): string =>
    `\`${entry.name}\` (${entry.linkedLabel})`;

  // Summary, table of contents, and body all iterate the same ordered section
  // list; plain list sections (Removed, Excluded) get no per-package ToC items.
  interface DocSection {
    title: string;
    entries?: PackageEntry[];
    items?: string[];
  }
  const docSections: DocSection[] = [
    { title: titles[NEWLY_ADDED]!, entries: groups[NEWLY_ADDED]! },
    {
      title: "Removed packages",
      items: removed.map(({ name, version }) => `- \`${name}\` (${versionLink(name, version)})`),
    },
    ...groups.slice(BREAKING).map((entries, index) => ({ title: titles[BREAKING + index]!, entries })),
    {
      title: "Excluded dependency updates",
      items: excluded.map(({ name, linkedLabel }) => `- \`${name}\` (${linkedLabel})`),
    },
  ].filter(({ entries, items }) => (entries?.length ?? 0) > 0 || (items?.length ?? 0) > 0);

  const lines: string[] = [];
  lines.push(`# ${options.title ?? `Backstage Release ${toManifest.releaseVersion} changelog`}`, "");
  lines.push(
    `Changes between ${options.fromLabel ?? fromManifest.releaseVersion} and ` +
      `${options.toLabel ?? toManifest.releaseVersion} — ` +
      `${added.length} added, ${removed.length} removed, ${changed.length} upgraded, ` +
      `${diff.unchanged} unchanged packages.`,
    "",
  );

  const count = (length: number): string => `${length} ${length === 1 ? "package" : "packages"}`;
  if (docSections.length > 0) {
    lines.push("## Summary", "");
    for (const { title, entries, items } of docSections) {
      lines.push(`- [${title}](#${slug(title)}): ${count(entries?.length ?? items?.length ?? 0)}`);
    }
    lines.push("", "## Table of contents", "");
    for (const { title, entries } of docSections) {
      lines.push(`- [${title}](#${slug(title)})`);
      for (const entry of entries ?? []) {
        const heading = packageHeading(entry);
        lines.push(`  - [${heading}](#${slug(heading)})`);
      }
    }
    lines.push("");
  }

  for (const { title, entries, items } of docSections) {
    lines.push(`## ${title}`, "");
    for (const entry of entries ?? []) {
      lines.push(`### ${packageHeadingLinked(entry)}`, "");
      lines.push(...entry.content, "");
    }
    if (items !== undefined) {
      lines.push(...items, "");
    }
  }
  return trimBlankEdges(lines).join("\n") + "\n";
}
