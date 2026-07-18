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
  writeFileIfChanged,
} from "./lib.ts";

interface Baseline {
  version: string;
  label: string;
}

interface Diff {
  majorBumps: { name: string; from: string; to: string }[];
  otherBumps: { name: string; from: string; to: string }[];
  added: { name: string; version: string }[];
  removed: { name: string; version: string }[];
  unchanged: number;
}

function diffManifests(base: Map<string, string>, current: Map<string, string>): Diff {
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

const cell = (value: string): string => value.replaceAll("|", "\\|");
const pkg = (name: string): string => `\`${cell(name)}\``;

function renderSection(baseline: Baseline, current: string, diff: Diff): string {
  const lines: string[] = [];
  lines.push(`## Compared to ${baseline.version} (${baseline.label})`, "");
  const summary = [
    `${diff.majorBumps.length} major bumps`,
    `${diff.added.length} added`,
    `${diff.removed.length} removed`,
    `${diff.otherBumps.length} upgraded`,
    `${diff.unchanged} unchanged`,
  ];
  lines.push(summary.join(", ") + ".", "");

  if (diff.majorBumps.length > 0) {
    lines.push("### ⚠️ Major version bumps", "");
    lines.push(`| Package | ${cell(baseline.version)} | ${cell(current)} |`, "| --- | --- | --- |");
    for (const { name, from, to } of diff.majorBumps) {
      lines.push(`| ${pkg(name)} | **${cell(from)}** | **${cell(to)}** |`);
    }
    lines.push("");
  }
  if (diff.added.length > 0) {
    lines.push("### 🆕 Added packages", "");
    lines.push("| Package | Version |", "| --- | --- |");
    for (const { name, version } of diff.added) {
      lines.push(`| ${pkg(name)} | ${cell(version)} |`);
    }
    lines.push("");
  }
  if (diff.removed.length > 0) {
    lines.push("### ❌ Removed packages", "");
    lines.push("| Package | Last version |", "| --- | --- |");
    for (const { name, version } of diff.removed) {
      lines.push(`| ${pkg(name)} | ${cell(version)} |`);
    }
    lines.push("");
  }
  if (diff.otherBumps.length > 0) {
    lines.push("### Version bumps", "");
    lines.push(`| Package | ${cell(baseline.version)} | ${cell(current)} |`, "| --- | --- | --- |");
    for (const { name, from, to } of diff.otherBumps) {
      lines.push(`| ${pkg(name)} | ${cell(from)} | ${cell(to)} |`);
    }
    lines.push("");
  }
  return lines.join("\n");
}

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
    const prevMinor = previousMinor(release);
    if (prevMinor !== undefined) baselines.push({ version: prevMinor, label: "previous minor release" });
  }

  if (baselines.length === 0) {
    lines.push("This is the first stable Backstage release — there is no previous release to compare against.", "");
  } else {
    const current = release === NEXT ? readManifest(NEXT).releaseVersion : release;
    for (const baseline of baselines) {
      lines.push(renderSection(baseline, current, diffManifests(manifests.get(baseline.version)!, manifests.get(release)!)));
    }
  }

  writeFileIfChanged(path.join(releasesDir, release, "README.md"), lines.join("\n"));
}
console.log(`Generated README.md for ${releases.length} releases`);
