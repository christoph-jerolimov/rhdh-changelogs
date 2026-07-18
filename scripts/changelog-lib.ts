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

/**
 * Changelog sections of a package for versions in (from, to]. Prerelease
 * sections are skipped unless the target itself is a prerelease: Backstage's
 * stable sections aggregate the changes of their -next iterations, so
 * including both would duplicate content.
 */
function sectionsInRange(name: string, from: string | undefined, to: string): string[] {
  const sections = parseChangelog(name);
  if (sections === undefined) return [`_No changelog available for \`${name}\`._`];
  const includePrereleases = semver.prerelease(to) !== null;
  const lines: string[] = [];
  for (const [version, body] of sections) {
    if (semver.gt(version, to) || (from !== undefined && semver.lte(version, from))) continue;
    if (!includePrereleases && semver.prerelease(version) !== null) continue;
    lines.push(`### ${version}`, "", ...trimBlankEdges(demoteHeadings(body)), "");
  }
  if (lines.length === 0) return ["_No changelog entries found._"];
  return trimBlankEdges(lines);
}

/**
 * Build an aggregated changelog between two releases (folder names under
 * releases/, e.g. "1.52.1", "1.53.0", or "next"): all changed or added
 * packages with their changelog sections after the from version (exclusive)
 * up to the to version (inclusive).
 */
export function buildChangelog(fromRelease: string, toRelease: string): string {
  const fromManifest = readManifest(fromRelease);
  const toManifest = readManifest(toRelease);
  const diff = diffManifests(manifestToMap(fromManifest), manifestToMap(toManifest));

  const changed = [...diff.majorBumps, ...diff.otherBumps].sort((a, b) => byCodepoint(a.name, b.name));
  const added = [...diff.added].sort((a, b) => byCodepoint(a.name, b.name));

  const lines: string[] = [];
  lines.push(`# Backstage Release ${toManifest.releaseVersion} changelog`, "");
  lines.push(
    `Changes between ${fromManifest.releaseVersion} and ${toManifest.releaseVersion} — ` +
      `${changed.length} changed and ${added.length} added packages.`,
    "",
  );
  for (const { name, from, to } of changed) {
    lines.push(`## \`${name}\` (${from} → ${to})`, "");
    lines.push(...sectionsInRange(name, from, to), "");
  }
  for (const { name, version } of added) {
    lines.push(`## \`${name}\` (new, ${version})`, "");
    lines.push(...sectionsInRange(name, undefined, version), "");
  }
  return trimBlankEdges(lines).join("\n") + "\n";
}
