import * as fs from "node:fs";
import * as path from "node:path";
import { buildChangelog } from "./changelog-lib.ts";
import {
  diffManifests,
  listRhdhReleases,
  type Manifest,
  manifestToMap,
  readUpstreamManifest,
  readUpstreamManifestRaw,
  repoRoot,
  writeFileIfChanged,
} from "./lib.ts";
import { renderComparisonSection } from "./readme-lib.ts";

const rhdhReleases = listRhdhReleases();

const manifests = new Map<string, Manifest>();
for (const { backstage } of rhdhReleases) {
  manifests.set(backstage, readUpstreamManifest(backstage));
}

// Each RHDH release gets a root folder named after it (e.g. 1.9/) with the
// manifest of its Backstage version and a README/CHANGELOG comparing against
// the Backstage version of the previous RHDH release from config.yaml.
for (const [index, { rhdh, backstage }] of rhdhReleases.entries()) {
  const previous = index > 0 ? rhdhReleases[index - 1]! : undefined;
  const targetDir = path.join(repoRoot, rhdh);

  writeFileIfChanged(path.join(targetDir, "manifest.json"), readUpstreamManifestRaw(backstage));

  const readme: string[] = [];
  readme.push(`# RHDH Release ${rhdh} (Backstage ${backstage})`, "");
  if (previous === undefined) {
    readme.push("This is the first RHDH release — there is no previous release to compare against.", "");
  } else {
    readme.push(
      renderComparisonSection(
        { version: previous.backstage, label: `RHDH ${previous.rhdh}` },
        backstage,
        diffManifests(manifestToMap(manifests.get(previous.backstage)!), manifestToMap(manifests.get(backstage)!)),
      ),
    );
  }
  writeFileIfChanged(path.join(targetDir, "README.md"), readme.join("\n"));

  const changelog =
    previous === undefined
      ? `# RHDH Release ${rhdh} changelog\n\n` +
        "This is the first RHDH release — there is no previous release to compare against.\n"
      : buildChangelog(manifests.get(previous.backstage)!, manifests.get(backstage)!, "exclude-backstage", {
          title: `RHDH Release ${rhdh} changelog`,
          fromLabel: `Backstage ${previous.backstage} (RHDH ${previous.rhdh})`,
          toLabel: `Backstage ${backstage} (RHDH ${rhdh})`,
        });
  writeFileIfChanged(path.join(targetDir, "CHANGELOG.md"), changelog);
}
console.log(`Generated ${rhdhReleases.length} RHDH release folders`);

// Remove root folders of RHDH releases that were dropped from config.yaml.
const known = new Set(rhdhReleases.map(({ rhdh }) => rhdh));
for (const entry of fs.readdirSync(repoRoot, { withFileTypes: true })) {
  if (entry.isDirectory() && /^\d+\.\d+$/.test(entry.name) && !known.has(entry.name)) {
    fs.rmSync(path.join(repoRoot, entry.name), { recursive: true });
    console.log(`Removed stale RHDH release folder ${entry.name}`);
  }
}
