import * as path from "node:path";
import semver from "semver";
import { buildChangelog } from "./changelog-lib.ts";
import { hasNextRelease, listLocalStableReleases, NEXT, releasesDir, writeFileIfChanged } from "./lib.ts";

const stableReleases = listLocalStableReleases().sort(semver.compare);
const releases = [...stableReleases, ...(hasNextRelease() ? [NEXT] : [])];

// Each release's changelog covers the span from its direct previous release —
// the same baseline as the number-of-changed-packages tables; next is compared
// against the latest stable release.
for (const [index, release] of releases.entries()) {
  const previous = index > 0 ? releases[index - 1]! : undefined;
  const content =
    previous === undefined
      ? `# Backstage Release ${release} changelog\n\n` +
        "This is the first stable Backstage release — there is no previous release to compare against.\n"
      : buildChangelog(previous, release);
  writeFileIfChanged(path.join(releasesDir, release, "CHANGELOG.md"), content);
}
console.log(`Generated CHANGELOG.md for ${releases.length} releases`);
