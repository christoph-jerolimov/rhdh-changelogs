import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import semver from "semver";
import { parse as parseYaml } from "yaml";

export const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const tablesDir = path.join(repoRoot, "tables");

export interface RhdhRelease {
  rhdh: string;
  backstage: string;
}

/** The RHDH releases from config.yaml with their Backstage versions, in file order. */
export function listRhdhReleases(): RhdhRelease[] {
  const file = path.join(repoRoot, "config.yaml");
  const config = parseYaml(fs.readFileSync(file, "utf8")) as { releases?: unknown };
  if (!Array.isArray(config.releases)) {
    throw new Error(`Expected a releases array in ${file}`);
  }
  return config.releases.map((entry, index) => {
    const { rhdh, backstage } = entry as Partial<RhdhRelease>;
    if (typeof rhdh !== "string" || typeof backstage !== "string" || semver.valid(backstage) === null) {
      throw new Error(`Invalid releases[${index}] in ${file}: ${JSON.stringify(entry)}`);
    }
    return { rhdh, backstage };
  });
}

export interface Manifest {
  releaseVersion: string;
  packages: { name: string; version: string }[];
}

export function upstreamDir(): string {
  const dir = path.resolve(process.env.VERSIONS_DIR ?? path.join(repoRoot, ".upstream", "versions"));
  if (!fs.existsSync(path.join(dir, "v1", "releases"))) {
    throw new Error(
      `Upstream clone not found at ${dir} (expected v1/releases inside). ` +
        `Clone https://github.com/backstage/versions there or set VERSIONS_DIR.`,
    );
  }
  return dir;
}

/** Raw manifest.json content of a Backstage release in the backstage/versions clone. */
export function readUpstreamManifestRaw(version: string): string {
  const file = path.join(upstreamDir(), "v1", "releases", version, "manifest.json");
  if (!fs.existsSync(file)) {
    throw new Error(`Backstage release ${version} not found in the backstage/versions clone (${file})`);
  }
  return fs.readFileSync(file, "utf8");
}

export function readUpstreamManifest(version: string): Manifest {
  return JSON.parse(readUpstreamManifestRaw(version)) as Manifest;
}

export function manifestToMap(manifest: Manifest): Map<string, string> {
  const map = new Map<string, string>();
  for (const pkg of manifest.packages) {
    if (map.has(pkg.name)) {
      console.warn(`Warning: duplicate package ${pkg.name} in manifest ${manifest.releaseVersion}`);
    }
    map.set(pkg.name, pkg.version);
  }
  return map;
}

/** Deterministic codepoint sort — deliberately not localeCompare (locale/ICU dependent). */
export function byCodepoint(a: string, b: string): number {
  return a < b ? -1 : a > b ? 1 : 0;
}

/** Write only when content changed, always LF with a single trailing newline guaranteed by callers. */
export function writeFileIfChanged(file: string, content: string): void {
  if (fs.existsSync(file) && fs.readFileSync(file, "utf8") === content) return;
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
}

export interface Diff {
  majorBumps: { name: string; from: string; to: string }[];
  otherBumps: { name: string; from: string; to: string }[];
  added: { name: string; version: string }[];
  removed: { name: string; version: string }[];
  unchanged: number;
}

export function diffManifests(base: Map<string, string>, current: Map<string, string>): Diff {
  const diff: Diff = { majorBumps: [], otherBumps: [], added: [], removed: [], unchanged: 0 };
  const names = [...new Set([...base.keys(), ...current.keys()])].sort(byCodepoint);
  for (const name of names) {
    const from = base.get(name);
    const to = current.get(name);
    if (from === undefined) {
      diff.added.push({ name, version: to! });
    } else if (to === undefined) {
      diff.removed.push({ name, version: from });
    } else if (from === to) {
      diff.unchanged += 1;
    } else if (semver.valid(from) && semver.valid(to) && semver.major(from) !== semver.major(to)) {
      diff.majorBumps.push({ name, from, to });
    } else {
      diff.otherBumps.push({ name, from, to });
    }
  }
  return diff;
}

/**
 * Major/Minor/Patch level of a bump; breaking marks bumps that need extra
 * attention (major, 0.x minor, and 0.0.x patch changes per semver-0 conventions).
 */
export function bumpLevel(from: string, to: string): { level: "Major" | "Minor" | "Patch"; breaking: boolean } | undefined {
  if (!semver.valid(from) || !semver.valid(to)) return undefined;
  const diff = semver.diff(from, to);
  const level =
    diff === "major" || diff === "premajor"
      ? "Major"
      : diff === "minor" || diff === "preminor"
        ? "Minor"
        : "Patch";
  const breaking =
    level === "Major" ||
    (level === "Minor" && semver.major(to) === 0) ||
    (level === "Patch" && semver.major(to) === 0 && semver.minor(to) === 0);
  return { level, breaking };
}

/** Counts of bumps that need extra attention, per level. */
export function countBreaking(diff: Diff): { major: number; minor: number; patch: number } {
  const counts = { major: 0, minor: 0, patch: 0 };
  for (const { from, to } of [...diff.majorBumps, ...diff.otherBumps]) {
    const bump = bumpLevel(from, to);
    if (bump?.breaking) {
      counts[bump.level === "Major" ? "major" : bump.level === "Minor" ? "minor" : "patch"] += 1;
    }
  }
  return counts;
}
