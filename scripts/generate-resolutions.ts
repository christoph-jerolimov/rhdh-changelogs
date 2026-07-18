import * as path from "node:path";
import {
  byCodepoint,
  hasNextRelease,
  listLocalStableReleases,
  manifestToMap,
  NEXT,
  readManifest,
  releasesDir,
  toJson,
  writeFileIfChanged,
} from "./lib.ts";

const releases = listLocalStableReleases();
if (hasNextRelease()) releases.push(NEXT);

for (const release of releases) {
  const packages = manifestToMap(readManifest(release));
  const resolutions: Record<string, string> = {};
  for (const name of [...packages.keys()].sort(byCodepoint)) {
    resolutions[name] = packages.get(name)!;
  }
  writeFileIfChanged(path.join(releasesDir, release, "resolutions.json"), toJson({ resolutions }));
}
console.log(`Generated resolutions.json for ${releases.length} releases`);
