// @ts-check
import { satteri } from "@astrojs/markdown-satteri";
import { defineConfig } from "astro/config";
import { githubAlertsPlugin, repoLinksPlugin } from "./src/lib/routes.mjs";

// The deploy workflow passes the GitHub Pages origin and base path; locally
// the site is served from the root.
const site = process.env.SITE_URL || undefined;
const base = process.env.BASE_PATH || "/";

export default defineConfig({
  site,
  base,
  trailingSlash: "always",
  markdown: {
    processor: satteri({ mdastPlugins: [repoLinksPlugin(base), githubAlertsPlugin] }),
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark" },
    },
  },
});
