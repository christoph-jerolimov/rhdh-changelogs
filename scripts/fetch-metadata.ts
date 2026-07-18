import { execFileSync } from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";
import semver from "semver";
import { byCodepoint, hasNextRelease, listLocalStableReleases, NEXT, readManifest, repoRoot, writeFileIfChanged } from "./lib.ts";

interface PackageJson {
  name?: string;
  description?: string;
  backstage?: { role?: string };
}

interface PackageMeta {
  role: string;
  description: string;
}

const changelogsDir = path.join(repoRoot, "changelogs");

const backstageDir = path.resolve(
  process.env.BACKSTAGE_DIR ?? process.argv[2] ?? path.join(repoRoot, ".upstream", "backstage"),
);
if (!fs.existsSync(path.join(backstageDir, ".git"))) {
  throw new Error(
    `Backstage clone not found at ${backstageDir}. ` +
      `Clone https://github.com/backstage/backstage there or set BACKSTAGE_DIR.`,
  );
}

function git(args: string[]): string {
  return execFileSync("git", ["-C", backstageDir, ...args], {
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
    stdio: ["ignore", "pipe", "ignore"],
  });
}

function gitTry(args: string[]): string | undefined {
  try {
    return git(args);
  } catch {
    return undefined;
  }
}

const targetFile = (name: string): string => path.join(changelogsDir, `${name}.md`);

function writeChangelog(name: string, content: string): void {
  const file = targetFile(name);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
}

function toMeta(pkg: PackageJson | undefined): PackageMeta {
  return { role: pkg?.backstage?.role ?? "", description: pkg?.description ?? "" };
}

// Phase 1: copy the changelog of every package on the main branch (always
// overwritten — main is the source of truth for packages that still exist)
// and collect its package.json metadata.
const mainPackages = new Set<string>();
const metadata = new Map<string, PackageMeta>();
let fromMain = 0;
for (const group of ["packages", "plugins"]) {
  const groupDir = path.join(backstageDir, group);
  if (!fs.existsSync(groupDir)) continue;
  for (const entry of fs.readdirSync(groupDir).sort()) {
    const packageJson = path.join(groupDir, entry, "package.json");
    const changelog = path.join(groupDir, entry, "CHANGELOG.md");
    if (!fs.existsSync(packageJson)) continue;
    const pkg = JSON.parse(fs.readFileSync(packageJson, "utf8")) as PackageJson;
    if (pkg.name === undefined) continue;
    mainPackages.add(pkg.name);
    metadata.set(pkg.name, toMeta(pkg));
    if (!fs.existsSync(changelog)) continue;
    writeChangelog(pkg.name, fs.readFileSync(changelog, "utf8"));
    fromMain += 1;
  }
}
console.log(`Copied ${fromMain} changelogs from the main branch`);

// Phase 2: packages from the release manifests that are gone from main are
// picked up from the release tag of the newest release that still listed them.
const fetchedTags = new Set<string>();
const tagMaps = new Map<string, Map<string, string>>();

function ensureTag(tag: string): boolean {
  if (fetchedTags.has(tag)) return true;
  const present =
    gitTry(["rev-parse", "--verify", "--quiet", `refs/tags/${tag}`]) !== undefined ||
    gitTry(["fetch", "--depth", "1", "--no-tags", "origin", `refs/tags/${tag}:refs/tags/${tag}`]) !== undefined;
  if (present) fetchedTags.add(tag);
  return present;
}

const showAtTag = (tag: string, file: string): string | undefined => gitTry(["show", `${tag}:${file}`]);

function parsePackageJson(packageJson: string | undefined): PackageJson | undefined {
  if (packageJson === undefined) return undefined;
  try {
    return JSON.parse(packageJson) as PackageJson;
  } catch {
    return undefined;
  }
}

const packageNameIn = (packageJson: string | undefined): string | undefined =>
  parsePackageJson(packageJson)?.name;

/** Likely directories for a package, checked before falling back to a full scan. */
function candidateDirs(name: string): string[] {
  const [scope, bare] = name.split("/") as [string, string];
  return [
    ...(bare.startsWith("plugin-") ? [`plugins/${bare.slice("plugin-".length)}`] : []),
    `packages/${bare}`,
    ...(scope !== "@backstage" ? [`packages/${scope.slice(1)}-${bare}`] : []),
  ];
}

function findDirAtTag(tag: string, name: string): string | undefined {
  for (const dir of candidateDirs(name)) {
    if (packageNameIn(showAtTag(tag, `${dir}/package.json`)) === name) return dir;
  }
  let map = tagMaps.get(tag);
  if (map === undefined) {
    map = new Map();
    for (const group of ["packages", "plugins"]) {
      const listing = gitTry(["ls-tree", "--name-only", tag, `${group}/`]);
      for (const dir of listing?.trim().split("\n").filter(Boolean) ?? []) {
        const dirName = packageNameIn(showAtTag(tag, `${dir}/package.json`));
        if (dirName !== undefined) map.set(dirName, dir);
      }
    }
    tagMaps.set(tag, map);
  }
  return map.get(name);
}

const releases = [...(hasNextRelease() ? [NEXT] : []), ...listLocalStableReleases().sort(semver.rcompare)];
// Newest release that lists each package (releases are iterated newest first).
const lastRelease = new Map<string, string>();
let fromTags = 0;
for (const release of releases) {
  const manifest = readManifest(release);
  for (const pkg of manifest.packages) {
    if (!lastRelease.has(pkg.name)) lastRelease.set(pkg.name, manifest.releaseVersion);
  }
  const missing = manifest.packages.map((pkg) => pkg.name).filter((name) => !fs.existsSync(targetFile(name)));
  if (missing.length === 0) continue;
  const tag = `v${manifest.releaseVersion}`;
  if (!ensureTag(tag)) {
    console.warn(`Warning: tag ${tag} not found in backstage/backstage`);
    continue;
  }
  for (const name of missing) {
    const dir = findDirAtTag(tag, name);
    const content = dir === undefined ? undefined : showAtTag(tag, `${dir}/CHANGELOG.md`);
    if (content !== undefined) {
      writeChangelog(name, content);
      fromTags += 1;
      console.log(`Fetched ${name} from tag ${tag}`);
    }
  }
}
console.log(`Fetched ${fromTags} changelogs from release tags`);

// Packages that are gone from main carry a DEPRECATED warning below their H1.
// Applied on every run (not just at fetch time) so already-committed files get
// it too, and phase 1 naturally clears it if a package ever returns to main.
const WARNING_MARKER = "> [!WARNING]";

function withDeprecationWarning(content: string, last: string): string {
  const warning = [
    WARNING_MARKER,
    "> **DEPRECATED**: This package is no longer part of the Backstage `main` branch.",
    `> The last Backstage release that included it was **${last}**.`,
  ];
  const lines = content.split("\n");
  const h1 = lines.findIndex((line) => line.startsWith("# "));
  const insertAt = h1 === -1 ? 0 : h1 + 1;
  const rest = lines.slice(insertAt);
  while (rest.length > 0 && rest[0]!.trim() === "") rest.shift();
  if (rest[0]?.startsWith(WARNING_MARKER)) {
    while (rest.length > 0 && rest[0]!.startsWith(">")) rest.shift();
    while (rest.length > 0 && rest[0]!.trim() === "") rest.shift();
  }
  const head = lines.slice(0, insertAt);
  return [...head, ...(head.length > 0 ? [""] : []), ...warning, "", ...rest].join("\n");
}

let deprecatedCount = 0;
for (const [name, last] of lastRelease) {
  if (mainPackages.has(name)) continue;
  const file = targetFile(name);
  if (!fs.existsSync(file)) continue; // reported by the verification below
  writeFileIfChanged(file, withDeprecationWarning(fs.readFileSync(file, "utf8"), last));
  deprecatedCount += 1;
}
console.log(`Ensured deprecation warnings on ${deprecatedCount} changelogs`);

// Metadata of dropped packages is re-read from their last release tag on every
// run (immutable, so this stays deterministic without extra state files).
for (const [name, last] of lastRelease) {
  if (metadata.has(name)) continue;
  const tag = `v${last}`;
  if (!ensureTag(tag)) continue;
  const dir = findDirAtTag(tag, name);
  metadata.set(name, toMeta(parsePackageJson(dir === undefined ? undefined : showAtTag(tag, `${dir}/package.json`))));
}

// Overview of every package that ever appeared in a release manifest.
const TABLE_HEADER = ["Package", "Backstage role", "Description", "Last included in"];
const mdCell = (value: string): string => value.replaceAll("|", "\\|");
const csvCell = (value: string): string =>
  /[",\n]/.test(value) ? `"${value.replaceAll('"', '""')}"` : value;
const oneLine = (value: string): string => value.replaceAll(/\s+/g, " ").trim();

const tableRows = [...lastRelease.keys()].sort(byCodepoint).map((name) => {
  const meta = metadata.get(name);
  return [
    name,
    meta?.role ?? "",
    oneLine(meta?.description ?? ""),
    mainPackages.has(name) ? "" : lastRelease.get(name)!,
  ];
});

const activeCount = [...lastRelease.keys()].filter((name) => mainPackages.has(name)).length;
const removedCount = lastRelease.size - activeCount;

const md: string[] = [];
md.push("# Backstage packages", "");
md.push(
  `**${lastRelease.size} packages** overall — **${activeCount} active** on the \`main\` branch, **${removedCount} removed**.`,
  "",
  "All packages that ever appeared in a release manifest. *Last included in* is only set for removed packages.",
  "",
);
md.push(`| ${TABLE_HEADER.map(mdCell).join(" | ")} |`);
md.push(`| ${TABLE_HEADER.map(() => "---").join(" | ")} |`);
for (const [name, role, description, last] of tableRows) {
  md.push(`| \`${mdCell(name!)}\` | ${mdCell(role!)} | ${mdCell(description!)} | ${mdCell(last!)} |`);
}
md.push("");
writeFileIfChanged(path.join(repoRoot, "packages-overview.md"), md.join("\n"));

const csv = [TABLE_HEADER, ...tableRows].map((row) => row.map(csvCell).join(",")).join("\n") + "\n";
writeFileIfChanged(path.join(repoRoot, "packages-overview.csv"), csv);
console.log(`Generated packages-overview.md/.csv (${tableRows.length} packages)`);

// Every package that ever appeared in a release manifest must have a changelog.
const listedIn = new Map<string, string[]>();
for (const release of releases) {
  const manifest = readManifest(release);
  for (const pkg of manifest.packages) {
    if (!fs.existsSync(targetFile(pkg.name))) {
      listedIn.set(pkg.name, [...(listedIn.get(pkg.name) ?? []), manifest.releaseVersion]);
    }
  }
}
if (listedIn.size > 0) {
  console.error(`Missing changelogs for ${listedIn.size} packages:`);
  for (const [name, versions] of listedIn) {
    console.error(`  ${name} (listed in ${versions[0]}${versions.length > 1 ? ` and ${versions.length - 1} more` : ""})`);
  }
  process.exit(1);
}
console.log("All packages from all release manifests have a changelog");
