import * as path from "node:path";
import semver from "semver";
import {
  diffManifests,
  hasNextRelease,
  listLocalStableReleases,
  manifestToMap,
  NEXT,
  readManifest,
  releasesDir,
  writeFileIfChanged,
} from "./lib.ts";
import { type Baseline, renderComparisonSection } from "./readme-lib.ts";

const stableReleases = listLocalStableReleases();
const latestStable = stableReleases.at(-1);
const manifests = new Map<string, Map<string, string>>();
const releases = [...stableReleases];
if (hasNextRelease()) releases.push(NEXT);
for (const release of releases) {
  manifests.set(release, manifestToMap(readManifest(release)));
}

/** Highest stable release with the same major.minor and a lower patch than the given version. */
function previousPatch(version: string): string | undefined {
  return stableReleases
    .filter(
      (v) =>
        semver.major(v) === semver.major(version) &&
        semver.minor(v) === semver.minor(version) &&
        semver.patch(v) < semver.patch(version),
    )
    .at(-1);
}

/** Highest stable release from a lower minor (or major) line than the given version. */
function previousMinor(version: string): string | undefined {
  return stableReleases
    .filter(
      (v) =>
        semver.major(v) < semver.major(version) ||
        (semver.major(v) === semver.major(version) && semver.minor(v) < semver.minor(version)),
    )
    .at(-1);
}

for (const release of releases) {
  const lines: string[] = [];
  const baselines: Baseline[] = [];

  if (release === NEXT) {
    const nextVersion = readManifest(NEXT).releaseVersion;
    lines.push(`# Backstage Release ${nextVersion} (next)`, "");
    if (latestStable !== undefined) {
      baselines.push({ version: latestStable, label: "latest release" });
    }
  } else {
    lines.push(`# Backstage Release ${release}`, "");
    const prevPatch = previousPatch(release);
    if (prevPatch !== undefined) baselines.push({ version: prevPatch, label: "previous patch release" });
    const firstOfMinor = `${semver.major(release)}.${semver.minor(release)}.0`;
    if (semver.patch(release) > 0 && firstOfMinor !== prevPatch && stableReleases.includes(firstOfMinor)) {
      baselines.push({ version: firstOfMinor, label: "first release of this minor" });
    }
    const prevMinor = previousMinor(release);
    if (prevMinor !== undefined) baselines.push({ version: prevMinor, label: "previous minor release" });
  }

  if (baselines.length === 0) {
    lines.push("This is the first stable Backstage release — there is no previous release to compare against.", "");
  } else {
    const current = release === NEXT ? readManifest(NEXT).releaseVersion : release;
    for (const baseline of baselines) {
      lines.push(
        renderComparisonSection(baseline, current, diffManifests(manifests.get(baseline.version)!, manifests.get(release)!)),
      );
    }
  }

  writeFileIfChanged(path.join(releasesDir, release, "README.md"), lines.join("\n"));
}
console.log(`Generated README.md for ${releases.length} releases`);
