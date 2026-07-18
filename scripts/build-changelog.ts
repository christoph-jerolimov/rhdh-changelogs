import * as fs from "node:fs";
import * as path from "node:path";
import { buildChangelog } from "./changelog-lib.ts";
import { releasesDir } from "./lib.ts";

const [from, to] = process.argv.slice(2);
if (from === undefined || to === undefined) {
  console.error("Usage: npm run changelog -- <from-release> <to-release>   (e.g. 1.52.1 1.53.0, or next)");
  process.exit(1);
}
for (const release of [from, to]) {
  if (!fs.existsSync(path.join(releasesDir, release, "manifest.json"))) {
    console.error(`Release ${release} not found under releases/`);
    process.exit(1);
  }
}

process.stdout.write(buildChangelog(from, to));
