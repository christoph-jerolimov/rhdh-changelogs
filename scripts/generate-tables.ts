import * as path from "node:path";
import semver from "semver";
import {
  byCodepoint,
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
}

// The next column is prepended to every variant and does not consume a "last 10" slot.
const variants: Variant[] = [
  { name: "package-versions-all-releases", title: "All Backstage releases", releases: stableDescending },
  {
    name: "package-versions-minor-releases",
    title: "Backstage minor releases (latest patch per minor)",
    releases: minorDescending,
  },
  {
    name: "package-versions-last-10-releases",
    title: "Last 10 Backstage releases",
    releases: stableDescending.slice(0, 10),
  },
  {
    name: "package-versions-last-10-minor-releases",
    title: "Last 10 Backstage minor releases (latest patch per minor)",
    releases: minorDescending.slice(0, 10),
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

const mdCell = (value: string): string => value.replaceAll("|", "\\|");
const csvCell = (value: string): string =>
  /[",\n]/.test(value) ? `"${value.replaceAll('"', '""')}"` : value;

for (const variant of variants) {
  // Read all shown manifests first to learn which packages exist in this variant.
  const shown = variant.releases.map((release) => ({ release, packages: manifest(release) }));
  const packageNames = [...new Set(shown.flatMap(({ packages }) => [...packages.keys()]))].sort(byCodepoint);

  const md: string[] = [];
  md.push(`# ${variant.title}`, "");
  md.push(`| Package | ${shown.map(({ release }) => mdCell(release)).join(" | ")} |`);
  md.push(`| --- | ${shown.map(() => "---").join(" | ")} |`);
  for (const name of packageNames) {
    const cells = shown.map(({ packages }) => mdCell(packages.get(name) ?? ""));
    md.push(`| \`${mdCell(name)}\` | ${cells.join(" | ")} |`);
  }
  md.push("");
  writeFileIfChanged(path.join(repoRoot, `${variant.name}.md`), md.join("\n"));

  const csv: string[] = [];
  csv.push(["Package", ...shown.map(({ release }) => release)].map(csvCell).join(","));
  for (const name of packageNames) {
    csv.push([name, ...shown.map(({ packages }) => packages.get(name) ?? "")].map(csvCell).join(","));
  }
  csv.push("");
  writeFileIfChanged(path.join(repoRoot, `${variant.name}.csv`), csv.join("\n"));

  console.log(`Generated ${variant.name}.md/.csv (${shown.length} columns, ${packageNames.length} packages)`);
}
