import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import semver from "semver";

export const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const releasesDir = path.join(repoRoot, "releases");
export const NEXT = "next";

export interface Manifest {
  releaseVersion: string;
  packages: { name: string; version: string }[];
}

export function upstreamDir(): string {
  const dir = path.resolve(
    process.env.UPSTREAM_DIR ?? process.argv[2] ?? path.join(repoRoot, ".upstream", "versions"),
  );
  if (!fs.existsSync(path.join(dir, "v1", "releases"))) {
    throw new Error(
      `Upstream clone not found at ${dir} (expected v1/releases inside). ` +
        `Clone https://github.com/backstage/versions there or set UPSTREAM_DIR.`,
    );
  }
  return dir;
}

export function isStableRelease(version: string): boolean {
  return semver.valid(version) !== null && semver.major(version) >= 1 && semver.prerelease(version) === null;
}

/** Stable (>=1.0.0, non-prerelease) versions in this repo's releases/ folder, sorted ascending. */
export function listLocalStableReleases(): string[] {
  if (!fs.existsSync(releasesDir)) return [];
  return fs.readdirSync(releasesDir).filter(isStableRelease).sort(semver.compare);
}

export function hasNextRelease(): boolean {
  return fs.existsSync(path.join(releasesDir, NEXT, "manifest.json"));
}

export function readManifest(release: string): Manifest {
  const file = path.join(releasesDir, release, "manifest.json");
  return JSON.parse(fs.readFileSync(file, "utf8")) as Manifest;
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

export function toJson(value: unknown): string {
  return JSON.stringify(value, null, 2) + "\n";
}
