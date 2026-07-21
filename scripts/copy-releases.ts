import * as fs from "node:fs";
import * as path from "node:path";
import semver from "semver";
import { isStableRelease, NEXT, releasesDir, upstreamDir } from "./lib.ts";

const RELEASE_FILES = ["manifest.json"];

function copyReleaseFiles(sourceDir: string, targetDir: string): void {
  fs.mkdirSync(targetDir, { recursive: true });
  for (const file of RELEASE_FILES) {
    const source = path.join(sourceDir, file);
    if (fs.existsSync(source)) {
      fs.copyFileSync(source, path.join(targetDir, file));
    }
  }
}

const upstreamReleasesDir = path.join(upstreamDir(), "v1", "releases");
const allVersions = fs.readdirSync(upstreamReleasesDir).filter((v) => semver.valid(v) !== null);

const stableVersions = allVersions.filter(isStableRelease).sort(semver.compare);
if (stableVersions.length === 0) {
  throw new Error(`No stable releases found in ${upstreamReleasesDir}`);
}
for (const version of stableVersions) {
  copyReleaseFiles(path.join(upstreamReleasesDir, version), path.join(releasesDir, version));
}
console.log(`Copied ${stableVersions.length} stable releases (latest: ${stableVersions.at(-1)})`);

// A "next" folder exists only while there is a -next prerelease newer than the latest stable release.
const nextVersions = allVersions
  .filter((v) => semver.prerelease(v)?.[0] === "next")
  .sort(semver.compare);
const latestNext = nextVersions.at(-1);
const latestStable = stableVersions.at(-1)!;
const nextDir = path.join(releasesDir, NEXT);

// Wipe first in both cases so stale files (e.g. an old README) never survive.
fs.rmSync(nextDir, { recursive: true, force: true });
if (latestNext !== undefined && semver.gt(latestNext, latestStable)) {
  copyReleaseFiles(path.join(upstreamReleasesDir, latestNext), nextDir);
  console.log(`Copied next release ${latestNext}`);
} else {
  console.log(`No next release newer than ${latestStable} (latest next: ${latestNext ?? "none"})`);
}
