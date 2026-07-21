# RHDH and Backstage Changelogs 🎧

Automatically maintained mirror and analysis of the official Backstage package changelogs and metadata from [backstage/backstage](https://github.com/backstage/backstage), [backstage/community-plugins](https://github.com/backstage/community-plugins), and [redhat-developer/rhdh-plugins](https://github.com/redhat-developer/rhdh-plugins), and of the release manifests from [backstage/versions](https://github.com/backstage/versions).

A [GitHub workflow](.github/workflows/update.yml) runs daily at 06:17 UTC (and on demand via *Run workflow*), clones the upstream repositories, regenerates everything below, and commits changes to `main` in a single commit.

## RHDH releases

[`config.yaml`](config.yaml) maps each Red Hat Developer Hub (RHDH) release to the Backstage release it is based on. For every entry there is a folder named after the RHDH release (e.g. [`releases/1.9/`](releases/1.9), [`releases/1.10/`](releases/1.10)) containing:

- `manifest.json` — the manifest of the mapped Backstage release, copied verbatim from `backstage/versions` (`v1/releases/<backstage-version>/`)
- `README.md` — diff summary against the Backstage version of the **previous RHDH release** (e.g. `1.9/` compares Backstage 1.42.5 of RHDH 1.8 with Backstage 1.45.3 of RHDH 1.9), highlighting ⚠️ major version bumps, 🆕 added and ❌ removed packages
- `CHANGELOG.md` — the changelog sections of all packages changed or added over the same span, sliced from [`changelogs/`](changelogs) to the versions after the previous release's Backstage version (exclusive) up to this release's Backstage version (inclusive). `@backstage/*` dependency-update entries are excluded (packages that only had such updates are listed at the end)

New RHDH releases are picked up by adding an entry to `config.yaml`; folders of entries removed from the config are deleted on the next run.

## Package versions

One column per RHDH release with the version of every package of its mapped Backstage release, ordered newest to oldest. Note: the *all releases* files are large and GitHub may not render the Markdown version — use the last-3 files for browsing.

| Package versions | Markdown | CSV |
| --- | --- | --- |
| Last 3 releases | [package-versions-last-3-releases.md](tables/package-versions-last-3-releases.md) | [package-versions-last-3-releases.csv](tables/package-versions-last-3-releases.csv) |
| All releases | [package-versions-all-releases.md](tables/package-versions-all-releases.md) | [package-versions-all-releases.csv](tables/package-versions-all-releases.csv) |

## Number of changed packages

One row per RHDH release (newest to oldest), comparing the Backstage packages of each release with those of the direct previous RHDH release: counts of added, removed, upgraded, and unchanged packages, plus the bumps that need extra attention (major, `0.x` minor, `0.0.x` patch).

| Number of changed packages | Markdown | CSV |
| --- | --- | --- |
| All releases | [number-of-changed-packages.md](tables/number-of-changed-packages.md) | [number-of-changed-packages.csv](tables/number-of-changed-packages.csv) |

## Changelogs

The [`changelogs/`](changelogs) folder holds a `CHANGELOG.md` copy for **every package that appears in a mapped Backstage release manifest**, stored as `changelogs/<scope>/<name>.md` (e.g. `changelogs/@backstage/plugin-scaffolder.md`). They are refreshed on every workflow run:

- Packages still present on `backstage/backstage` `main` (in `packages/*` and `plugins/*`) are copied from there on every run.
- `@backstage-community/*` packages are copied from all workspaces of `backstage/community-plugins` (in `workspaces/*/plugins/*` and `workspaces/*/packages/*`) on every run.
- RHDH plugin packages (e.g. `@red-hat-developer-hub/*`) are copied from all workspaces of `redhat-developer/rhdh-plugins` (same `workspaces/*/plugins/*` and `workspaces/*/packages/*` layout) on every run.
- Packages that were removed from `main` (e.g. plugins moved to community repos) are fetched once from the release tag of the newest mapped release that still listed them; existing files are never re-fetched.
- The job fails if any package listed in any mapped release manifest ends up without a changelog.

## Package descriptions

The same workflow also reads each package's `package.json` and generates tables of every package that appears in a mapped Backstage release manifest with its Backstage role, description, and — for deprecated packages (no longer on `main`) — the last mapped release that included it.

| Package descriptions | Markdown | CSV |
| --- | --- | --- |
| Active packages | [package-descriptions.md](tables/package-descriptions.md) | [package-descriptions.csv](tables/package-descriptions.csv) |
| Deprecated packages | [package-descriptions-deprecated.md](tables/package-descriptions-deprecated.md) | [package-descriptions-deprecated.csv](tables/package-descriptions-deprecated.csv) |
| All packages | [package-descriptions-all.md](tables/package-descriptions-all.md) | [package-descriptions-all.csv](tables/package-descriptions-all.csv) |
