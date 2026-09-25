// Maps repository paths of the generated Markdown files to site routes and
// rewrites the relative links between them. Plain JS so astro.config.mjs can
// import it as well as the pages.
import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

// The site is built from website/ (npm scripts run there), so the repository
// root is its parent. import.meta.url would point into the bundled output.
export const repoRoot = path.resolve(process.cwd(), "..");
export const repoSlug = process.env.GITHUB_REPOSITORY ?? "christoph-jerolimov/rhdh-change-monitor";
export const githubUrl = `https://github.com/${repoSlug}`;

/** Repo-relative Markdown path (e.g. `releases/1.9/CHANGELOG.md`) → route slug without slashes around it. */
export function slugForFile(file) {
  const dir = path.posix.dirname(file);
  const name = path.posix.basename(file, ".md");
  const leaf = name === "README" ? "" : name === "CHANGELOG" ? "changelog" : name;
  return [dir === "." ? "" : dir, leaf].filter(Boolean).join("/");
}

/** Repo-relative path of a file or folder → GitHub URL, used for everything the site does not render. */
export function githubBlobUrl(repoPath, isDir = false) {
  return `${githubUrl}/${isDir ? "tree" : "blob"}/main/${repoPath}`;
}

/** Folders the site has pages for. */
const SECTIONS = ["changelogs", "releases", "tables"];

const SCHEME = /^[a-z][a-z0-9+.-]*:/i;

/**
 * Rewrite a link found in a repo Markdown file: Markdown files and folders
 * become site links, other files (CSV, JSON, YAML) GitHub links. Absolute,
 * anchor-only and external links are returned unchanged.
 */
export function rewriteLink(url, sourceFile, base = "/") {
  if (!url || SCHEME.test(url) || url.startsWith("#") || url.startsWith("/")) return url;
  const source = path.relative(repoRoot, sourceFile).split(path.sep).join("/");
  if (source.startsWith("..")) return url;
  const [target = "", hash] = url.split("#");
  const repoPath = path.posix.normalize(path.posix.join(path.posix.dirname(source), decodeURIComponent(target)));
  if (repoPath.startsWith("..")) return url;
  const anchor = hash ? `#${hash}` : "";
  const abs = path.join(repoRoot, repoPath);
  const prefix = base.endsWith("/") ? base : `${base}/`;
  // Upstream changelogs may link to files of their source repo; leave those as they are.
  if (!fs.existsSync(abs)) return url;
  if (fs.statSync(abs).isDirectory()) {
    const dir = repoPath.replace(/\/$/, "");
    const onSite = SECTIONS.some((s) => dir === s || dir.startsWith(`${s}/`));
    return (onSite ? routeUrl(prefix, dir) : githubBlobUrl(dir, true)) + anchor;
  }
  if (repoPath.endsWith(".md")) return routeUrl(prefix, slugForFile(repoPath)) + anchor;
  return githubBlobUrl(repoPath) + anchor;
}

function routeUrl(prefix, slug) {
  return slug && slug !== "." ? `${prefix}${encodeURI(slug)}/` : prefix;
}

/** Sätteri mdast plugin applying {@link rewriteLink} to all links and link definitions. */
export function repoLinksPlugin(base) {
  const rewrite = (node, ctx) => {
    if (!ctx.fileURL) return;
    const url = rewriteLink(node.url, fileURLToPath(ctx.fileURL), base);
    if (url !== node.url) ctx.setProperty(node, "url", url);
  };
  return { name: "repo-links", link: rewrite, definition: rewrite };
}

const ALERT = /^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/;

/** Sätteri mdast plugin rendering GitHub alerts (`> [!WARNING]`) as styled callouts. */
export const githubAlertsPlugin = {
  name: "github-alerts",
  blockquote(node, ctx) {
    const paragraph = node.children[0];
    const first = paragraph?.type === "paragraph" ? paragraph.children[0] : undefined;
    const match = first?.type === "text" ? ALERT.exec(first.value) : null;
    if (!match) return;
    const kind = match[1].toLowerCase();
    ctx.setProperty(first, "value", first.value.slice(match[0].length));
    ctx.setProperty(node, "data", { hProperties: { className: ["alert", `alert-${kind}`] } });
    ctx.prependChild(node, {
      type: "paragraph",
      data: { hProperties: { className: ["alert-title"] } },
      children: [{ type: "text", value: kind[0].toUpperCase() + kind.slice(1) }],
    });
  },
};
