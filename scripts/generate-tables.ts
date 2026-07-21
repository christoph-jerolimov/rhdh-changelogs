import * as path from "node:path";
import { byCodepoint, listRhdhReleases, manifestToMap, readUpstreamManifest, tablesDir, writeFileIfChanged } from "./lib.ts";

// Newest RHDH release first; each column shows the package versions of the
// Backstage release mapped in config.yaml.
const shownAll = listRhdhReleases()
  .reverse()
  .map(({ rhdh, backstage }) => ({ rhdh, backstage, packages: manifestToMap(readUpstreamManifest(backstage)) }));

interface Variant {
  name: string;
  title: string;
  releases: typeof shownAll;
}

const variants: Variant[] = [
  { name: "package-versions-all-releases", title: "Package versions — all releases", releases: shownAll },
  { name: "package-versions-last-3-releases", title: "Package versions — last 3 releases", releases: shownAll.slice(0, 3) },
];

const mdCell = (value: string): string => value.replaceAll("|", "\\|");
const csvCell = (value: string): string =>
  /[",\n]/.test(value) ? `"${value.replaceAll('"', '""')}"` : value;

for (const variant of variants) {
  const shown = variant.releases;
  const packageNames = [...new Set(shown.flatMap(({ packages }) => [...packages.keys()]))].sort(byCodepoint);

  const md: string[] = [];
  md.push(`# ${variant.title}`, "");
  md.push(
    `Versions of **${packageNames.length} packages** across **${shown.length} RHDH releases** — columns ordered newest to oldest. ` +
      "Each column shows the package versions of the Backstage release mapped in [config.yaml](../config.yaml): " +
      shown.map(({ rhdh, backstage }) => `RHDH ${rhdh} = Backstage ${backstage}`).join(", ") +
      ".",
    "",
  );
  md.push(`| Package | ${shown.map(({ rhdh }) => mdCell(rhdh)).join(" | ")} |`);
  md.push(`| --- | ${shown.map(() => "---").join(" | ")} |`);
  for (const name of packageNames) {
    const cells = shown.map(({ packages }) => mdCell(packages.get(name) ?? ""));
    md.push(`| \`${mdCell(name)}\` | ${cells.join(" | ")} |`);
  }
  md.push("");
  writeFileIfChanged(path.join(tablesDir, `${variant.name}.md`), md.join("\n"));

  const csv: string[] = [];
  csv.push(["Package", ...shown.map(({ rhdh }) => rhdh)].map(csvCell).join(","));
  for (const name of packageNames) {
    csv.push([name, ...shown.map(({ packages }) => packages.get(name) ?? "")].map(csvCell).join(","));
  }
  csv.push("");
  writeFileIfChanged(path.join(tablesDir, `${variant.name}.csv`), csv.join("\n"));

  console.log(`Generated ${variant.name}.md/.csv (${shown.length} columns, ${packageNames.length} packages)`);
}
