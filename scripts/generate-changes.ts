import * as path from "node:path";
import {
  countBreaking,
  type Diff,
  diffManifests,
  listRhdhReleases,
  manifestToMap,
  readUpstreamManifest,
  tablesDir,
  writeFileIfChanged,
} from "./lib.ts";

// RHDH releases in config.yaml order (oldest first); rows are emitted newest
// first, each compared with the direct previous RHDH release.
const releases = listRhdhReleases().map(({ rhdh, backstage }) => ({
  rhdh,
  backstage,
  packages: manifestToMap(readUpstreamManifest(backstage)),
}));

const HEADER = ["Release", "Backstage", "Compared to", "Added", "Removed", "Upgraded", "Unchanged", "Major ⚠️", "0.x Minor ⚠️", "0.0.x Patch ⚠️"];

function rowValues(index: number): string[] {
  const { rhdh, backstage, packages } = releases[index]!;
  const previous = index > 0 ? releases[index - 1]! : undefined;
  if (previous === undefined) {
    return [rhdh, backstage, "", "", "", "", "", "", "", ""];
  }
  const diff: Diff = diffManifests(previous.packages, packages);
  const breaking = countBreaking(diff);
  const upgraded = diff.majorBumps.length + diff.otherBumps.length;
  return [
    rhdh,
    backstage,
    previous.rhdh,
    `${diff.added.length}`,
    `${diff.removed.length}`,
    `${upgraded}`,
    `${diff.unchanged}`,
    `${breaking.major}`,
    `${breaking.minor}`,
    `${breaking.patch}`,
  ];
}

const mdCell = (value: string): string => value.replaceAll("|", "\\|");
const csvCell = (value: string): string =>
  /[",\n]/.test(value) ? `"${value.replaceAll('"', '""')}"` : value;

const rows = releases.map((_, index) => rowValues(index)).reverse();

const md: string[] = [];
md.push("# Number of changed packages", "");
md.push(
  `**${rows.length} RHDH releases**, newest to oldest — each row compares the Backstage packages of a release ` +
    "with those of the direct previous RHDH release from [config.yaml](../config.yaml).",
  "",
);
md.push(`| ${HEADER.map(mdCell).join(" | ")} |`);
md.push(`| ${HEADER.map(() => "---").join(" | ")} |`);
for (const row of rows) {
  md.push(`| ${row.map(mdCell).join(" | ")} |`);
}
md.push("");
writeFileIfChanged(path.join(tablesDir, "number-of-changed-packages.md"), md.join("\n"));

const csv = [HEADER, ...rows].map((row) => row.map(csvCell).join(",")).join("\n") + "\n";
writeFileIfChanged(path.join(tablesDir, "number-of-changed-packages.csv"), csv);

console.log(`Generated number-of-changed-packages.md/.csv (${rows.length} rows)`);
