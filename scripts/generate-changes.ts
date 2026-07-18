import * as path from "node:path";
import semver from "semver";
import {
  countBreaking,
  type Diff,
  diffManifests,
  hasNextRelease,
  listLocalStableReleases,
  manifestToMap,
  NEXT,
  readManifest,
  releasesDir,
  repoRoot,
  writeFileIfChanged,
} from "./lib.ts";

const stableDescending = listLocalStableReleases().sort(semver.rcompare);

/** Latest patch release of each major.minor line, descending. */
const minorDescending = [
  ...stableDescending
    .reduce((lines, version) => {
      const line = `${semver.major(version)}.${semver.minor(version)}`;
      if (!lines.has(line)) lines.set(line, version);
      return lines;
    }, new Map<string, string>())
    .values(),
];

const withNext = hasNextRelease();

interface Variant {
  name: string;
  title: string;
  releases: string[];
  minorNote?: boolean;
}

// Each row compares a release with the direct previous release of its variant;
// the next release (if any) is compared against the latest stable release.
const variants: Variant[] = [
  {
    name: "number-of-changed-packages-all-releases",
    title: "Number of changed packages — all releases",
    releases: stableDescending,
  },
  {
    name: "number-of-changed-packages-minor-releases",
    title: "Number of changed packages — minor releases",
    releases: minorDescending,
    minorNote: true,
  },
].map((variant) => ({ ...variant, releases: withNext ? [NEXT, ...variant.releases] : variant.releases }));

const manifestCache = new Map<string, Map<string, string>>();
function manifest(release: string): Map<string, string> {
  let map = manifestCache.get(release);
  if (map === undefined) {
    map = manifestToMap(readManifest(release));
    manifestCache.set(release, map);
  }
  return map;
}

const HEADER = ["Release", "Compared to", "Added", "Removed", "Upgraded", "Unchanged", "Major ⚠️", "0.x Minor ⚠️", "0.0.x Patch ⚠️"];

function rowValues(release: string, previous: string | undefined): string[] {
  const label = release === NEXT ? readManifest(NEXT).releaseVersion : release;
  if (previous === undefined) {
    return [label, "", "", "", "", "", "", "", ""];
  }
  const diff: Diff = diffManifests(manifest(previous), manifest(release));
  const breaking = countBreaking(diff);
  const upgraded = diff.majorBumps.length + diff.otherBumps.length;
  return [
    label,
    previous,
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

for (const variant of variants) {
  const rows = variant.releases.map((release, index) => rowValues(release, variant.releases[index + 1]));

  const md: string[] = [];
  md.push(`# ${variant.title}`, "");
  md.push(
    `**${rows.length} releases**, newest to oldest — each row compares a release with the direct previous ` +
      `${variant.minorNote ? "minor " : ""}release.` +
      (variant.minorNote ? " Each minor release is represented by the latest patch of its minor line." : "") +
      (withNext ? " The `next` release is compared against the latest stable release." : ""),
    "",
  );
  md.push(`| ${HEADER.map(mdCell).join(" | ")} |`);
  md.push(`| ${HEADER.map(() => "---").join(" | ")} |`);
  for (const row of rows) {
    md.push(`| ${row.map(mdCell).join(" | ")} |`);
  }
  md.push("");
  writeFileIfChanged(path.join(repoRoot, `${variant.name}.md`), md.join("\n"));

  const csv = [HEADER, ...rows].map((row) => row.map(csvCell).join(",")).join("\n") + "\n";
  writeFileIfChanged(path.join(repoRoot, `${variant.name}.csv`), csv);

  console.log(`Generated ${variant.name}.md/.csv (${rows.length} rows)`);
}
