import * as fs from "node:fs";
import * as path from "node:path";
import { buildChangelog, DEP_UPDATES_MODES, type DepUpdatesMode } from "./changelog-lib.ts";
import { releasesDir } from "./lib.ts";

const USAGE =
  "Usage: npm run changelog -- <from-release> <to-release> [--dep-updates <mode>]\n" +
  `  releases: e.g. 1.52.1 1.53.0, or next\n` +
  `  --dep-updates: ${DEP_UPDATES_MODES.join(" | ")} (default: exclude-backstage)`;

const positional: string[] = [];
let mode: DepUpdatesMode = "exclude-backstage";
const args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
  const arg = args[i]!;
  if (arg === "--dep-updates" || arg.startsWith("--dep-updates=")) {
    const value = arg.includes("=") ? arg.slice(arg.indexOf("=") + 1) : args[++i];
    if (!DEP_UPDATES_MODES.includes(value as DepUpdatesMode)) {
      console.error(`Invalid --dep-updates value: ${value ?? "(missing)"}\n${USAGE}`);
      process.exit(1);
    }
    mode = value as DepUpdatesMode;
  } else {
    positional.push(arg);
  }
}

const [from, to] = positional;
if (from === undefined || to === undefined || positional.length > 2) {
  console.error(USAGE);
  process.exit(1);
}
for (const release of [from, to]) {
  if (!fs.existsSync(path.join(releasesDir, release, "manifest.json"))) {
    console.error(`Release ${release} not found under releases/`);
    process.exit(1);
  }
}

process.stdout.write(buildChangelog(from, to, mode));
