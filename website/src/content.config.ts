import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { slugForFile } from "./lib/routes.mjs";

// Every generated Markdown file of the repository, keyed by its site route.
const pages = defineCollection({
  loader: glob({
    base: "..",
    pattern: ["README.md", "releases/*/*.md", "tables/*.md", "changelogs/**/*.md"],
    generateId: ({ entry }) => slugForFile(entry) || "index",
  }),
});

export const collections = { pages };
