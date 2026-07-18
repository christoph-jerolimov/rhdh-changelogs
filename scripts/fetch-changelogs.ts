import { execFileSync } from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";
import semver from "semver";
import { hasNextRelease, listLocalStableReleases, NEXT, readManifest, repoRoot } from "./lib.ts";

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

// Phase 1: copy the changelog of every package on the main branch (always
// overwritten — main is the source of truth for packages that still exist).
let fromMain = 0;
for (const group of ["packages", "plugins"]) {
  const groupDir = path.join(backstageDir, group);
  if (!fs.existsSync(groupDir)) continue;
  for (const entry of fs.readdirSync(groupDir).sort()) {
    const packageJson = path.join(groupDir, entry, "package.json");
    const changelog = path.join(groupDir, entry, "CHANGELOG.md");
    if (!fs.existsSync(packageJson) || !fs.existsSync(changelog)) continue;
    const name = (JSON.parse(fs.readFileSync(packageJson, "utf8")) as { name?: string }).name;
    if (name === undefined) continue;
    writeChangelog(name, fs.readFileSync(changelog, "utf8"));
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

function packageNameIn(packageJson: string | undefined): string | undefined {
  if (packageJson === undefined) return undefined;
  try {
    return (JSON.parse(packageJson) as { name?: string }).name;
  } catch {
    return undefined;
  }
}

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
let fromTags = 0;
for (const release of releases) {
  const manifest = readManifest(release);
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
