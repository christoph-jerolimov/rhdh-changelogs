# Backstage Release Overview

Automatically maintained mirror and analysis of the official [Backstage release manifests](https://github.com/backstage/versions).

A [GitHub workflow](.github/workflows/update-versions.yml) runs daily (and on demand via *Run workflow*), clones `backstage/versions`, regenerates everything below, and commits changes to `main`.

## Version tables

| Table | Markdown | CSV |
| --- | --- | --- |
| Last 10 releases | [package-versions-last-10-releases.md](package-versions-last-10-releases.md) | [package-versions-last-10-releases.csv](package-versions-last-10-releases.csv) |
| Last 10 minor releases (latest patch per minor) | [package-versions-last-10-minor-releases.md](package-versions-last-10-minor-releases.md) | [package-versions-last-10-minor-releases.csv](package-versions-last-10-minor-releases.csv) |
| All minor releases (latest patch per minor) | [package-versions-minor-releases.md](package-versions-minor-releases.md) | [package-versions-minor-releases.csv](package-versions-minor-releases.csv) |
| All releases | [package-versions-all-releases.md](package-versions-all-releases.md) | [package-versions-all-releases.csv](package-versions-all-releases.csv) |

Columns are ordered `next` (if a next release exists), then newest to oldest release. Rows list every package that appears in any of the shown releases. Note: the *all releases* files are large and GitHub may not render the Markdown version — use the last-10 files for browsing.

## Release changes

One row per release (newest to oldest, incl. `next` if it exists), comparing each release with the direct previous one: counts of added, removed, upgraded, and unchanged packages, plus the bumps that need extra attention (major, `0.x` minor, `0.0.x` patch).

| Table | Markdown | CSV |
| --- | --- | --- |
| Changes per release | [number-of-changed-packages-all-releases.md](number-of-changed-packages-all-releases.md) | [number-of-changed-packages-all-releases.csv](number-of-changed-packages-all-releases.csv) |
| Changes per minor release (latest patch per minor) | [number-of-changed-packages-minor-releases.md](number-of-changed-packages-minor-releases.md) | [number-of-changed-packages-minor-releases.csv](number-of-changed-packages-minor-releases.csv) |

## Per-release folders

Each `releases/<version>/` folder contains:

- `manifest.json` — copied verbatim from `backstage/versions` (`v1/releases/<version>/`)
- `yarn-plugin` — copied verbatim, for releases that ship one
- `README.md` — generated diff against the previous patch release (if any) and the previous minor release (highest patch of the previous minor line), highlighting ⚠️ major version bumps, 🆕 added and ❌ removed packages
- `resolutions.json` — the manifest transformed into a package.json-style `{ "resolutions": { "<package>": "<version>" } }` map

`0.x` and prerelease versions are ignored. `releases/next/` exists only while `backstage/versions` has a `-next` release that is newer than the latest stable release; it is removed otherwise.

## Changelogs and package metadata

The [`changelogs/`](changelogs) folder holds a `CHANGELOG.md` copy for **every package that ever appeared in a release manifest**, stored as `changelogs/<scope>/<name>.md` (e.g. `changelogs/@backstage/plugin-scaffolder.md`). A second [GitHub workflow](.github/workflows/update-metadata.yml) refreshes them daily (and on demand):

- Packages still present on `backstage/backstage` `main` (in `packages/*` and `plugins/*`) are copied from there on every run.
- Packages that were removed from `main` (e.g. plugins moved to community repos) are fetched once from the release tag of the newest release that still listed them; existing files are never re-fetched.
- The job fails if any package listed in any release manifest ends up without a changelog.

The same workflow also reads each package's `package.json` and generates [package-descriptions.md](package-descriptions.md) / [package-descriptions.csv](package-descriptions.csv): every package that ever appeared in a release manifest with its Backstage role, description, and — for packages no longer on `main` — the last release that included it.

## Scripts

TypeScript scripts in [`scripts/`](scripts), run with `tsx` (Node 22):

```sh
npm ci
git clone --depth 1 https://github.com/backstage/versions.git .upstream/versions
npm run generate   # copy → readmes → resolutions → tables
```

The clone location can be overridden with the `UPSTREAM_DIR` environment variable. All output is deterministic: re-running without a new upstream release produces zero changes.
