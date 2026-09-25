import * as fs from "node:fs";
import * as path from "node:path";
import type { MarkdownHeading } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { githubBlobUrl, repoRoot } from "./routes.mjs";

export type Page = CollectionEntry<"pages">;

/** Site-relative URL honoring the configured base path. */
export function url(slug = ""): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, "/");
  if (!slug || slug === "index") return base;
  return `${base}${encodeURI(slug)}/`;
}

/** Repo-relative path of the Markdown source of a page. */
export function sourcePath(page: Page): string {
  return path.relative(repoRoot, path.resolve(page.filePath ?? "")).split(path.sep).join("/");
}

export function sourceUrl(page: Page): string {
  return githubBlobUrl(sourcePath(page));
}

/** Text of the first `#` heading, falling back to the route. */
export function titleOf(page: Page): string {
  const headings = page.rendered?.metadata?.headings as MarkdownHeading[] | undefined;
  return headings?.find((h) => h.depth === 1)?.text ?? page.id;
}

export async function pagesUnder(prefix: string): Promise<Page[]> {
  return (await getCollection("pages", (p) => p.id.startsWith(prefix))).sort((a, b) => a.id.localeCompare(b.id));
}

export interface Release {
  rhdh: string;
  /** Backstage version as configured: a version, `latest` or `next`. */
  backstage: string;
  /** Backstage version the release resolved to; undefined when its folder was not generated (e.g. an unresolved `next`). */
  resolved: string | undefined;
}

/** RHDH releases from config.yaml, newest first. */
export function releases(): Release[] {
  const config = fs.readFileSync(path.join(repoRoot, "config.yaml"), "utf8");
  const result: Release[] = [];
  for (const [, rhdh, backstage] of config.matchAll(/-\s*rhdh:\s*"?([^"\n]+?)"?\s*\n\s*backstage:\s*"?([^"\n]+?)"?\s*$/gm)) {
    const readme = path.join(repoRoot, "releases", rhdh!, "README.md");
    // The README title names the resolved version: "# RHDH Release 1.10 (Backstage 1.49.4)".
    const title = fs.existsSync(readme) ? fs.readFileSync(readme, "utf8").split("\n", 1)[0]! : "";
    result.push({ rhdh: rhdh!, backstage: backstage!, resolved: /\(Backstage ([^)]+)\)/.exec(title)?.[1] });
  }
  return result.reverse();
}

/** Package name → description, from the generated descriptions table. */
export function packageDescriptions(): Map<string, string> {
  const csv = fs.readFileSync(path.join(repoRoot, "tables", "package-descriptions-all.csv"), "utf8");
  const [, ...rows] = parseCsv(csv);
  return new Map(rows.filter((r) => r[0]).map((r) => [r[0]!, r[2] ?? ""]));
}

function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') (field += '"'), i++;
      else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ",") row.push(field), (field = "");
    else if (c === "\n") row.push(field), rows.push(row), (row = []), (field = "");
    else if (c !== "\r") field += c;
  }
  if (field || row.length) row.push(field), rows.push(row);
  return rows;
}
