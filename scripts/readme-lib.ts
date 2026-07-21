import { bumpLevel, byCodepoint, countBreaking, type Diff } from "./lib.ts";

export interface Baseline {
  version: string;
  label: string;
}

const cell = (value: string): string => value.replaceAll("|", "\\|");
const pkg = (name: string): string => `\`${cell(name)}\``;

function releaseType(from: string, to: string): string {
  const bump = bumpLevel(from, to);
  if (bump === undefined) return "";
  return bump.breaking ? `${bump.level} ⚠️` : bump.level;
}

/** A "## Compared to <baseline>" README section with summary and diff tables. */
export function renderComparisonSection(baseline: Baseline, current: string, diff: Diff): string {
  const lines: string[] = [];
  lines.push(`## Compared to ${baseline.version} (${baseline.label})`, "");
  const bumps = [
    ...diff.majorBumps.map((bump) => ({ ...bump, major: true })),
    ...diff.otherBumps.map((bump) => ({ ...bump, major: false })),
  ].sort((a, b) => byCodepoint(a.name, b.name));
  const attention = countBreaking(diff);
  const attentionParts = [
    ...(attention.major > 0 ? [`${attention.major} major`] : []),
    ...(attention.minor > 0 ? [`${attention.minor} 0.x minor`] : []),
    ...(attention.patch > 0 ? [`${attention.patch} 0.0.x patch`] : []),
  ];
  const summary = [
    `${diff.added.length} added`,
    `${diff.removed.length} removed`,
    `${bumps.length} upgraded`,
    `${diff.unchanged} unchanged`,
  ];
  lines.push(summary.join(", ") + ".", "");
  if (attentionParts.length > 0) {
    lines.push(`⚠️ Need extra attention: ${attentionParts.join(", ")}.`, "");
  }

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
  if (bumps.length > 0) {
    lines.push("### Version bumps", "");
    lines.push(`| Package | ${cell(baseline.version)} | ${cell(current)} | Type |`, "| --- | --- | --- | --- |");
    for (const { name, from, to, major } of bumps) {
      const version = (value: string): string => (major ? `**${cell(value)}**` : cell(value));
      lines.push(`| ${pkg(name)} | ${version(from)} | ${version(to)} | ${releaseType(from, to)} |`);
    }
    lines.push("");
  }
  return lines.join("\n");
}
