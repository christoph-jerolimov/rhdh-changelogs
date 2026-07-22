# RHDH Release latest changelog

Changes between Backstage 1.52.1 (RHDH milestone1) and Backstage 1.53.0 (RHDH latest) — 1 added, 0 removed, 185 upgraded, 25 unchanged packages.

## Summary

- [Newly added packages](#newly-added-packages): 1 package
- [Breaking changes](#breaking-changes): 8 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 2 packages
- [0.x patch version bumps](#0x-patch-version-bumps): 21 packages
- [Other minor version bumps](#other-minor-version-bumps): 1 package
- [Other patch version bumps](#other-patch-version-bumps): 9 packages
- [Excluded dependency updates](#excluded-dependency-updates): 144 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/plugin-app-module-user-settings` (new, 0.1.0)](#backstageplugin-app-module-user-settings-new-010)
- [Breaking changes](#breaking-changes)
  - [`@backstage/backend-openapi-utils` (0.6.10 → 0.7.0)](#backstagebackend-openapi-utils-0610--070)
  - [`@backstage/cli-common` (0.2.2 → 0.3.0)](#backstagecli-common-022--030)
  - [`@backstage/cli-module-migrate` (0.1.3 → 0.2.0)](#backstagecli-module-migrate-013--020)
  - [`@backstage/create-app` (0.8.4 → 0.9.0)](#backstagecreate-app-084--090)
  - [`@backstage/plugin-catalog` (2.0.6 → 2.0.7)](#backstageplugin-catalog-206--207)
  - [`@backstage/plugin-catalog-react` (3.1.0 → 3.2.0)](#backstageplugin-catalog-react-310--320)
  - [`@backstage/plugin-mcp-actions-backend` (0.1.14 → 0.2.0)](#backstageplugin-mcp-actions-backend-0114--020)
  - [`@backstage/repo-tools` (0.17.3 → 0.18.0)](#backstagerepo-tools-0173--0180)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/connections` (0.1.0 → 0.2.0)](#backstageconnections-010--020)
  - [`@backstage/ui` (0.16.0 → 0.17.0)](#backstageui-0160--0170)
- [0.x patch version bumps](#0x-patch-version-bumps)
  - [`@backstage/backend-defaults` (0.17.4 → 0.17.5)](#backstagebackend-defaults-0174--0175)
  - [`@backstage/cli` (0.36.3 → 0.36.4)](#backstagecli-0363--0364)
  - [`@backstage/cli-module-build` (0.1.4 → 0.1.5)](#backstagecli-module-build-014--015)
  - [`@backstage/cli-module-new` (0.1.4 → 0.1.5)](#backstagecli-module-new-014--015)
  - [`@backstage/core-components` (0.18.11 → 0.18.12)](#backstagecore-components-01811--01812)
  - [`@backstage/filter-predicates` (0.1.3 → 0.1.4)](#backstagefilter-predicates-013--014)
  - [`@backstage/frontend-app-api` (0.16.5 → 0.16.6)](#backstagefrontend-app-api-0165--0166)
  - [`@backstage/frontend-dynamic-feature-loader` (0.1.13 → 0.1.14)](#backstagefrontend-dynamic-feature-loader-0113--0114)
  - [`@backstage/frontend-plugin-api` (0.17.2 → 0.17.3)](#backstagefrontend-plugin-api-0172--0173)
  - [`@backstage/plugin-app` (0.5.0 → 0.5.1)](#backstageplugin-app-050--051)
  - [`@backstage/plugin-auth-backend` (0.29.1 → 0.29.2)](#backstageplugin-auth-backend-0291--0292)
  - [`@backstage/plugin-auth-backend-module-auth0-provider` (0.4.2 → 0.4.3)](#backstageplugin-auth-backend-module-auth0-provider-042--043)
  - [`@backstage/plugin-auth-node` (0.7.2 → 0.7.3)](#backstageplugin-auth-node-072--073)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.10.3 → 0.10.4)](#backstageplugin-catalog-backend-module-msgraph-0103--0104)
  - [`@backstage/plugin-events-backend-module-azure` (0.2.32 → 0.2.33)](#backstageplugin-events-backend-module-azure-0232--0233)
  - [`@backstage/plugin-home` (0.9.7 → 0.9.8)](#backstageplugin-home-097--098)
  - [`@backstage/plugin-kubernetes-react` (0.5.21 → 0.5.22)](#backstageplugin-kubernetes-react-0521--0522)
  - [`@backstage/plugin-notifications` (0.5.18 → 0.5.19)](#backstageplugin-notifications-0518--0519)
  - [`@backstage/plugin-notifications-node` (0.2.27 → 0.2.28)](#backstageplugin-notifications-node-0227--0228)
  - [`@backstage/plugin-org` (0.7.5 → 0.7.6)](#backstageplugin-org-075--076)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.23 → 0.4.24)](#backstageplugin-scaffolder-backend-module-yeoman-0423--0424)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/config-loader` (1.10.12 → 1.11.0)](#backstageconfig-loader-11012--1110)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-test-utils` (1.11.4 → 1.11.5)](#backstagebackend-test-utils-1114--1115)
  - [`@backstage/core-app-api` (1.20.2 → 1.20.3)](#backstagecore-app-api-1202--1203)
  - [`@backstage/plugin-catalog-backend` (3.8.0 → 3.8.1)](#backstageplugin-catalog-backend-380--381)
  - [`@backstage/plugin-scaffolder` (1.38.0 → 1.38.1)](#backstageplugin-scaffolder-1380--1381)
  - [`@backstage/plugin-scaffolder-backend` (4.0.1 → 4.0.2)](#backstageplugin-scaffolder-backend-401--402)
  - [`@backstage/plugin-search` (1.7.5 → 1.7.6)](#backstageplugin-search-175--176)
  - [`@backstage/plugin-techdocs` (1.17.7 → 1.17.8)](#backstageplugin-techdocs-1177--1178)
  - [`@backstage/plugin-techdocs-node` (1.15.1 → 1.15.2)](#backstageplugin-techdocs-node-1151--1152)
  - [`@backstage/plugin-techdocs-react` (1.3.12 → 1.3.13)](#backstageplugin-techdocs-react-1312--1313)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/plugin-app-module-user-settings` (new, [0.1.0](../../changelogs/@backstage/plugin-app-module-user-settings.md#010))

#### 0.1.0

##### Minor Changes

- [`c8a06d5`](https://github.com/backstage/backstage/commit/c8a06d5): Added new frontend module that provides database-backed user settings storage. When installed, it overrides the default browser local storage with the user settings backend, enabling settings to persist across devices and sessions.

## Breaking changes

### `@backstage/backend-openapi-utils` (0.6.10 → [0.7.0](../../changelogs/@backstage/backend-openapi-utils.md#070))

#### 0.7.0

##### Minor Changes

- [`84171b3`](https://github.com/backstage/backstage/commit/84171b3): **BREAKING**: Removed `wrapInOpenApiTestServer`. This function redirected test traffic through the Optic `capture` proxy via the `OPTIC_PROXY` environment variable. Since the Optic dependency has been removed, this function no longer serves a purpose. Use `wrapServer` instead for OpenAPI spec validation in tests.

### `@backstage/cli-common` (0.2.2 → [0.3.0](../../changelogs/@backstage/cli-common.md#030))

#### 0.3.0

##### Minor Changes

- [`39deda4`](https://github.com/backstage/backstage/commit/39deda4): **BREAKING**: Removed the deprecated `bootstrapEnvProxyAgents` export along with the `global-agent` and `undici` dependencies. Use Node.js built-in proxy support by setting `NODE_USE_ENV_PROXY=1` alongside your `HTTP_PROXY`/`HTTPS_PROXY`/`NO_PROXY` environment variables instead. See the [corporate proxy guide](https://backstage.io/docs/tutorials/corporate-proxy/) for details.

### `@backstage/cli-module-migrate` (0.1.3 → [0.2.0](../../changelogs/@backstage/cli-module-migrate.md#020))

#### 0.2.0

##### Minor Changes

- [`39deda4`](https://github.com/backstage/backstage/commit/39deda4): **BREAKING**: The `versions:bump` command no longer bootstraps legacy proxy agents. Use Node.js built-in proxy support by setting `NODE_USE_ENV_PROXY=1` alongside your `HTTP_PROXY`/`HTTPS_PROXY`/`NO_PROXY` environment variables instead.

### `@backstage/create-app` (0.8.4 → [0.9.0](../../changelogs/@backstage/create-app.md#090))

#### 0.9.0

##### Minor Changes

- [`39deda4`](https://github.com/backstage/backstage/commit/39deda4): **BREAKING**: No longer bootstraps legacy proxy agents. Use Node.js built-in proxy support by setting `NODE_USE_ENV_PROXY=1` alongside your `HTTP_PROXY`/`HTTPS_PROXY`/`NO_PROXY` environment variables instead.

##### Patch Changes

- [`fc4cae1`](https://github.com/backstage/backstage/commit/fc4cae1): Added the user settings backend plugin to the create-app templates, enabling database-backed user settings persistence for newly created Backstage apps out of the box. The frontend storage API is also wired up to use backend-persisted storage instead of browser local storage, via the new `@backstage/plugin-app-module-user-settings` module.
- [`a5bddd1`](https://github.com/backstage/backstage/commit/a5bddd1): Bumped create-app version.
- [`e2b3472`](https://github.com/backstage/backstage/commit/e2b3472): Updated generated app configurations to use the stable Client ID Metadata Documents setting and stop advertising deprecated Dynamic Client Registration.
- [`3acdf87`](https://github.com/backstage/backstage/commit/3acdf87): Pinned `@types/node` to `22.20.0` in the seed lockfile to prevent yarn from resolving the `*` wildcard (from `@jest/environment-jsdom-abstract`) to `@types/node@26.0.0`, which breaks `tsc:full` due to incompatible `EventEmitter` types in `tarn`.
- [`3a9ab3f`](https://github.com/backstage/backstage/commit/3a9ab3f): Fixed an issue where two "Notifications" links were displayed in the sidebar.

### `@backstage/plugin-catalog` (2.0.6 → [2.0.7](../../changelogs/@backstage/plugin-catalog.md#207))

#### 2.0.7

##### Patch Changes

- [`ba49e37`](https://github.com/backstage/backstage/commit/ba49e37): Migrated the new frontend system Catalog entity context menu to BUI and switched its built-in action icons to Remix icons. The old frontend system Catalog context menu remains unchanged.

  **BREAKING ALPHA**: The new frontend system Catalog entity page now consumes data-driven context menu item extensions. Its `contextMenuItems` input expects the `EntityContextMenuItemBlueprint` data output rather than a rendered React element.

  The default English value of the `entityContextMenu.moreButtonAriaLabel` translation changed from `more` to `More actions`. If you provide localized Catalog messages, update this label as appropriate for your locale.

- [`15719cc`](https://github.com/backstage/backstage/commit/15719cc): **BREAKING ALPHA**: Migrated the new frontend system Catalog entity page to the automatic Catalog plugin header and a BUI page header with entity tags, title, metadata, favorite and context-menu actions, and Catalog-composed navigation.

  Existing alpha opaque entity header customizations continue to render through a temporary per-entity legacy fallback with the previous MUI tabs and page shell. Migrate those customizations to the new BUI-ready entity header layout extension point to receive composed tabs and the active tab ID. The new extension point wins when both customization types match an entity.

  The default BUI navigation does not render entity-content tab icons because the BUI Header tab API does not expose an icon slot. Legacy fallback pages retain their existing tab-icon behavior.

  Added the translation keys `entityLabels.systemLabel`, `entityLabels.domainLabel`, and `entityLabels.partOfLabel`. Apps that provide Catalog translations should add translations for these new messages.

- [`a00547f`](https://github.com/backstage/backstage/commit/a00547f): Fix crash when exporting the catalog with unset filters.
- [`1217673`](https://github.com/backstage/backstage/commit/1217673): Fixed a crash in the catalog export when an entity list filter is `undefined`, which could occur if optional filters were not set.

### `@backstage/plugin-catalog-react` (3.1.0 → [3.2.0](../../changelogs/@backstage/plugin-catalog-react.md#320))

#### 3.2.0

##### Minor Changes

- [`ba49e37`](https://github.com/backstage/backstage/commit/ba49e37): **BREAKING ALPHA**: The `EntityContextMenuItemBlueprint` now outputs menu item data instead of a rendered MUI element. The Catalog entity page consumes this data and renders BUI menu items.

  The source-level `icon`, `useProps`, and filter authoring model remains, with `icon` now typed as `IconElement`. We recommend using Remix icons and checking that custom icons follow the standard icon sizing requirements.

  Menu items close immediately when selected, including while asynchronous actions are pending.

- [`15719cc`](https://github.com/backstage/backstage/commit/15719cc): Added an alpha BUI-ready entity header layout extension point. Its loaded component receives Catalog-composed tabs and the active tab ID, allowing custom entity headers to preserve or customize entity-page navigation.

  **DEPRECATED ALPHA**: The existing opaque entity header extension point is deprecated. It continues to work through a temporary Catalog legacy-layout fallback so adopters can migrate custom entity headers incrementally.

##### Patch Changes

- [`8a500d5`](https://github.com/backstage/backstage/commit/8a500d5): Fixed a regression where `EntityTypePicker`'s `initialFilter` prop was being cleared when used alongside `EntityKindPicker` inside `EntityListProvider`. The type filter is now correctly preserved after the available types load for the selected kind.

### `@backstage/plugin-mcp-actions-backend` (0.1.14 → [0.2.0](../../changelogs/@backstage/plugin-mcp-actions-backend.md#020))

#### 0.2.0

##### Minor Changes

- [`567bc4c`](https://github.com/backstage/backstage/commit/567bc4c): **BREAKING**: Removed the deprecated Server-Sent Events (SSE) MCP transport. MCP clients must use the Streamable HTTP endpoint at `/api/mcp-actions/v1` or a configured named-server endpoint.

##### Patch Changes

- [`e2b3472`](https://github.com/backstage/backstage/commit/e2b3472): Updated OAuth discovery to use the stable `auth.clientIdMetadataDocuments` configuration while retaining compatibility with the deprecated experimental key.

### `@backstage/repo-tools` (0.17.3 → [0.18.0](../../changelogs/@backstage/repo-tools.md#0180))

#### 0.18.0

##### Minor Changes

- [`84171b3`](https://github.com/backstage/backstage/commit/84171b3): **BREAKING**: Replaced `@useoptic/optic` and `@useoptic/openapi-utilities` with `oasdiff` for OpenAPI breaking change detection.

  To migrate, remove `@useoptic/optic` from your root `package.json` and install the `oasdiff` CLI on your system — see https://github.com/oasdiff/oasdiff#installation for instructions.

  The `package schema openapi diff` command now uses `oasdiff` under the hood. The `--since`, `--json`, and `--ignore` flags continue to work, but the JSON and text output formats have changed to match `oasdiff`'s native output.

  The `repo schema openapi diff` command now automatically detects all packages with a changed `src/schema/openapi.yaml` and runs `oasdiff` against them directly. Packages no longer need a `"diff"` script in their `package.json` to be included in the check.

  Removed the `package schema openapi init` and `repo schema openapi test` commands, which depended on the Optic `capture` workflow and have no equivalent with `oasdiff`. Runtime validation of your API against its OpenAPI spec is still available via `wrapServer` from `@backstage/backend-openapi-utils/testUtils`.

##### Patch Changes

- [`120e7c3`](https://github.com/backstage/backstage/commit/120e7c3): chore(deps): bump `js-yaml` from 4.1.1 to 4.2.0

## 0.x minor version bumps

### `@backstage/connections` (0.1.0 → [0.2.0](../../changelogs/@backstage/connections.md#020))

#### 0.2.0

##### Minor Changes

- [`58c53b1`](https://github.com/backstage/backstage/commit/58c53b1): Added a `title` field to connection auth methods, providing a human-readable display name for each configured authentication option. Connection type authors must now provide a `title` for each auth method definition, while connection configuration may optionally override the title per auth entry. When not explicitly configured, the auth entry title defaults to the auth method title defined by the connection type.

##### Patch Changes

- [`ec96761`](https://github.com/backstage/backstage/commit/ec96761): Added a default implementation for the connections service so backend modules can depend on it without requiring apps to explicitly install the connections service factory.

### `@backstage/ui` (0.16.0 → [0.17.0](../../changelogs/@backstage/ui.md#0170))

#### 0.17.0

##### Minor Changes

- [`503ba32`](https://github.com/backstage/backstage/commit/503ba32): Added re-exports from `react-aria-components`. The types `Selection`, `SortDirection`, and `Key` are available as type-only exports (use `import type`), while `Focusable` is a runtime export. Consumers can now import these directly from `@backstage/ui` instead of depending on `react-aria-components`, avoiding version mismatches.

##### Patch Changes

- [`2341682`](https://github.com/backstage/backstage/commit/2341682): Make PluginHeader > Breadcrumbs separator align with rest of text

  **Affected components:** PluginHeader

- [`791703e`](https://github.com/backstage/backstage/commit/791703e): Add `breadcrumbs` prop & breadcrumbs to `PluginHeader`. When passed `breadcrumbs`, `PluginHeader` renders a `nav` with breadcrumbs & visually hides the plugin title.

  These breadcrumbs:

  - Collapses middle segments if 5 or more segments
  - Shows tooltip if text is truncated

  **Affected components:** PluginHeader

- [`066c7ac`](https://github.com/backstage/backstage/commit/066c7ac): Added a new `TextAreaField` component for multi-line text input, following the same conventions as `TextField` with support for a label, secondary label, and description.

## 0.x patch version bumps

### `@backstage/backend-defaults` (0.17.4 → [0.17.5](../../changelogs/@backstage/backend-defaults.md#0175))

#### 0.17.5

##### Patch Changes

- [`aaa7d65`](https://github.com/backstage/backstage/commit/aaa7d65): Improved readability of the AWS S3 URL parser by splitting the single monolithic regex into two separate patterns (standard S3 and VPC PrivateLink) with named capture groups. Also made the VPC endpoint region mandatory in the regex, fixing a potential mis-parse when the region segment was absent.
- [`d62c384`](https://github.com/backstage/backstage/commit/d62c384): Fixed a bug where scheduled tasks that were initially registered with a manual trigger and later re-registered with a duration or cron cadence would never be scheduled to run.
- [`8419f51`](https://github.com/backstage/backstage/commit/8419f51): Added support for AWS PrivateLink for Amazon S3.
- [`a624fa3`](https://github.com/backstage/backstage/commit/a624fa3): The `connection` config option for the Redis cache store now accepts either a string URL or an object with additional connection options that are passed directly to the underlying client. The object form is only supported when `backend.cache.store` is `redis`; other stores require a plain string. This allows configuring options like `pingInterval` without needing dedicated config fields. For clustered Redis, the connection object properties are merged into cluster defaults. Fixes https://github.com/backstage/backstage/issues/31813, https://github.com/backstage/backstage/issues/31742.

### `@backstage/cli` (0.36.3 → [0.36.4](../../changelogs/@backstage/cli.md#0364))

#### 0.36.4

##### Patch Changes

- [`61d4881`](https://github.com/backstage/backstage/commit/61d4881): The shared ESLint configuration now reports unused imports in `config.d.ts` configuration schema files. These declaration files are not covered by the TypeScript compiler's unused-variable checks, which previously allowed a stray import to slip through. Such an import can resolve during local development but break configuration schema loading for consumers of the published package, so it is now caught at lint time.

### `@backstage/cli-module-build` (0.1.4 → [0.1.5](../../changelogs/@backstage/cli-module-build.md#015))

#### 0.1.5

##### Patch Changes

- [`87af6ce`](https://github.com/backstage/backstage/commit/87af6ce): Package preparation now converts TypeScript configuration schemas to separate JSON files. Backend builds compile schemas together before assembling the distribution workspace, while package publishing compiles each schema independently.
- [`853bcba`](https://github.com/backstage/backstage/commit/853bcba): Improved caching for Module Federation remote builds by extracting dependencies into separate content-hashed chunks.
- [`3cce70f`](https://github.com/backstage/backstage/commit/3cce70f): Increase generated frontend static asset filename hashes to 12 characters to reduce the chance of collisions across long-lived cached builds.
- [`da820d1`](https://github.com/backstage/backstage/commit/da820d1): Added support for passing custom flags to the embedded postgres processes via `backend.database.connection.flags.postgres` and `backend.database.connection.flags.initdb` configuration properties.

### `@backstage/cli-module-new` (0.1.4 → [0.1.5](../../changelogs/@backstage/cli-module-new.md#015))

#### 0.1.5

##### Patch Changes

- [`28c1c1c`](https://github.com/backstage/backstage/commit/28c1c1c): Synced zod-validation-error versions between packages

### `@backstage/core-components` (0.18.11 → [0.18.12](../../changelogs/@backstage/core-components.md#01812))

#### 0.18.12

##### Patch Changes

- [`120e7c3`](https://github.com/backstage/backstage/commit/120e7c3): chore(deps): bump `js-yaml` from 4.1.1 to 4.2.0
- [`9efce7d`](https://github.com/backstage/backstage/commit/9efce7d): Fixed the table filters sidebar rendering a stray `0` when no filters are configured.
- [`7ceeaad`](https://github.com/backstage/backstage/commit/7ceeaad): Migrated CopyTextButton component from Material-UI to Backstage UI (BUI). Replaced MUI IconButton and Tooltip with BUI ButtonIcon and TooltipTrigger/Tooltip components. This is an internal refactoring that maintains backward compatibility - the component API remains unchanged.

### `@backstage/filter-predicates` (0.1.3 → [0.1.4](../../changelogs/@backstage/filter-predicates.md#014))

#### 0.1.4

##### Patch Changes

- [`28c1c1c`](https://github.com/backstage/backstage/commit/28c1c1c): Synced zod-validation-error versions between packages

### `@backstage/frontend-app-api` (0.16.5 → [0.16.6](../../changelogs/@backstage/frontend-app-api.md#0166))

#### 0.16.6

##### Patch Changes

- [`74fbcd7`](https://github.com/backstage/backstage/commit/74fbcd7): Extension `if` predicates now support specifying an `action` attribute in the permission reference. When a permission name contains a `#` separator (e.g. `catalog.entity.read#read`), the part after `#` is used as `attributes.action` when evaluating the permission. This removes the need to configure action attributes separately for basic permissions.
- [`6ea6d31`](https://github.com/backstage/backstage/commit/6ea6d31): Internal refactor of the specialized app sign-in runtime to initialize it once instead of reassigning it.

### `@backstage/frontend-dynamic-feature-loader` (0.1.13 → [0.1.14](../../changelogs/@backstage/frontend-dynamic-feature-loader.md#0114))

#### 0.1.14

##### Patch Changes

- [`a5e35e9`](https://github.com/backstage/backstage/commit/a5e35e9): Added package installation and import instructions to the README file.

### `@backstage/frontend-plugin-api` (0.17.2 → [0.17.3](../../changelogs/@backstage/frontend-plugin-api.md#0173))

#### 0.17.3

##### Patch Changes

- [`a5b2811`](https://github.com/backstage/backstage/commit/a5b2811): Adds `useBreadcrumbEntries` hook, `BreadcrumbEntry` component, and `BreadcrumbsRegistryProvider` for managing breadcrumb trails across the component tree for plugins using new frontend system. Completes wiring so that new frontend system plugin `Pages` and `SubPages` get automatic-population of `PluginHeader` breadcrumbs.

  - The app plugin's `PageLayout` registers a root breadcrumb for each plugin page and passes the breadcrumb trail to `PluginHeader`
  - `PageBlueprint` automatically wraps each sub-page route element with `BreadcrumbEntry`, so sub-pages contribute to the PluginHeader breadcrumb trail without extra wiring.
  - Plugin authors who need breadcrumbs for internal routes within a sub-page can wrap their route content with `BreadcrumbEntry` manually.
    - `plugin-scaffolder` internal routes have been wrapped as an example

### `@backstage/plugin-app` (0.5.0 → [0.5.1](../../changelogs/@backstage/plugin-app.md#051))

#### 0.5.1

##### Patch Changes

- [`a5b2811`](https://github.com/backstage/backstage/commit/a5b2811): Adds `useBreadcrumbEntries` hook, `BreadcrumbEntry` component, and `BreadcrumbsRegistryProvider` for managing breadcrumb trails across the component tree for plugins using new frontend system. Completes wiring so that new frontend system plugin `Pages` and `SubPages` get automatic-population of `PluginHeader` breadcrumbs.

  - The app plugin's `PageLayout` registers a root breadcrumb for each plugin page and passes the breadcrumb trail to `PluginHeader`
  - `PageBlueprint` automatically wraps each sub-page route element with `BreadcrumbEntry`, so sub-pages contribute to the PluginHeader breadcrumb trail without extra wiring.
  - Plugin authors who need breadcrumbs for internal routes within a sub-page can wrap their route content with `BreadcrumbEntry` manually.
    - `plugin-scaffolder` internal routes have been wrapped as an example

- [`3ef5974`](https://github.com/backstage/backstage/commit/3ef5974): Added support for wildcard plugin entries in frontend discovery endpoints, matching the backend discovery behavior.
- [`6172725`](https://github.com/backstage/backstage/commit/6172725): Fixed the default fetch API to support discovery endpoints that only define an internal target.

### `@backstage/plugin-auth-backend` (0.29.1 → [0.29.2](../../changelogs/@backstage/plugin-auth-backend.md#0292))

#### 0.29.2

##### Patch Changes

- [`e2b3472`](https://github.com/backstage/backstage/commit/e2b3472): Promoted Client ID Metadata Documents (CIMD) to the stable `auth.clientIdMetadataDocuments` configuration. The previous `auth.experimentalClientIdMetadataDocuments` key remains supported as a deprecated alias. Dynamic Client Registration now logs a deprecation warning when enabled and users should migrate to CIMD.
- [`2aeb246`](https://github.com/backstage/backstage/commit/2aeb246): Added token revocation support for clients using client ID metadata documents (CIMD). The `/v1/revoke` endpoint is now available whenever dynamic client registration or client ID metadata documents are enabled, and is advertised through `revocation_endpoint` in the OpenID provider configuration.

### `@backstage/plugin-auth-backend-module-auth0-provider` (0.4.2 → [0.4.3](../../changelogs/@backstage/plugin-auth-backend-module-auth0-provider.md#043))

#### 0.4.3

##### Patch Changes

- [`5446838`](https://github.com/backstage/backstage/commit/5446838): Added an optional `prompt` setting for Auth0 authorization requests. Set it to
  `auto` to let Auth0 determine whether the user needs to be prompted. Existing
  configurations continue to use `consent` by default.
- [`9a07306`](https://github.com/backstage/backstage/commit/9a07306): Added `screen_hint` and `login_hint` parameter forwarding for the Auth0 authentication provider.
  When these parameters are present in the OAuth start request query string, they
  are forwarded to Auth0's `/authorize` endpoint. This allows callers to guide
  users to the signup or login screen (`screen_hint=signup`) and pre-fill the
  email field (`login_hint=user@example.com`) during invitation flows.

### `@backstage/plugin-auth-node` (0.7.2 → [0.7.3](../../changelogs/@backstage/plugin-auth-node.md#073))

#### 0.7.3

##### Patch Changes

- [`28c1c1c`](https://github.com/backstage/backstage/commit/28c1c1c): Synced zod-validation-error versions between packages

### `@backstage/plugin-catalog-backend-module-msgraph` (0.10.3 → [0.10.4](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#0104))

#### 0.10.4

##### Patch Changes

- [`06bf22e`](https://github.com/backstage/backstage/commit/06bf22e): Configuring `userGroupMember.path` together with `user.filter` is now rejected with a configuration error, as the two options are mutually exclusive. This matches the existing validation for `userGroupMember.filter` and `userGroupMember.search`.

### `@backstage/plugin-events-backend-module-azure` (0.2.32 → [0.2.33](../../changelogs/@backstage/plugin-events-backend-module-azure.md#0233))

#### 0.2.33

##### Patch Changes

- [`9d23b9e`](https://github.com/backstage/backstage/commit/9d23b9e): Added HTTP POST webhook ingress endpoint for Azure DevOps events, matching the pattern established by the GitHub events module. The ingress endpoint is only registered when `events.modules.azureDevOps.webhookSecret` is configured; without it, no route is exposed. Incoming requests are validated against the `x-ado-webhook-secret` custom header using timing-safe comparison.

### `@backstage/plugin-home` (0.9.7 → [0.9.8](../../changelogs/@backstage/plugin-home.md#098))

#### 0.9.8

##### Patch Changes

- [`e9776b0`](https://github.com/backstage/backstage/commit/e9776b0): Optionally prevent duplicate widget additions via prop and added empty state for Add Widget dialog

### `@backstage/plugin-kubernetes-react` (0.5.21 → [0.5.22](../../changelogs/@backstage/plugin-kubernetes-react.md#0522))

#### 0.5.22

##### Patch Changes

- [`120e7c3`](https://github.com/backstage/backstage/commit/120e7c3): chore(deps): bump `js-yaml` from 4.1.1 to 4.2.0
- [`2ed90cd`](https://github.com/backstage/backstage/commit/2ed90cd): Fixed the published configuration schema so that it no longer references a file that is excluded from the package. This previously caused configuration schema extraction to fail in apps that depend on this plugin.

### `@backstage/plugin-notifications` (0.5.18 → [0.5.19](../../changelogs/@backstage/plugin-notifications.md#0519))

#### 0.5.19

##### Patch Changes

- [`73ea4d7`](https://github.com/backstage/backstage/commit/73ea4d7): Migrated tests to msw version 2.

### `@backstage/plugin-notifications-node` (0.2.27 → [0.2.28](../../changelogs/@backstage/plugin-notifications-node.md#0228))

#### 0.2.28

##### Patch Changes

- [`73ea4d7`](https://github.com/backstage/backstage/commit/73ea4d7): Migrated tests to msw version 2.

### `@backstage/plugin-org` (0.7.5 → [0.7.6](../../changelogs/@backstage/plugin-org.md#076))

#### 0.7.6

##### Patch Changes

- [`9585e44`](https://github.com/backstage/backstage/commit/9585e44): Fixed the ownership card emitting duplicate React key warnings when different entity kinds share the same type.

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.23 → [0.4.24](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0424))

#### 0.4.24

##### Patch Changes

- [`5e92512`](https://github.com/backstage/backstage/commit/5e92512): Fixed compatibility with yeoman-environment v4+, which is ESM-only. The previous require() call throws ERR_REQUIRE_ESM; replaced with dynamic import() and updated registration to match the v4+ API.

## Other minor version bumps

### `@backstage/config-loader` (1.10.12 → [1.11.0](../../changelogs/@backstage/config-loader.md#1110))

#### 1.11.0

##### Minor Changes

- [`4a7240b`](https://github.com/backstage/backstage/commit/4a7240b): Configuration schemas declared in TypeScript now resolve and validate imported types instead of treating them as unconstrained values. Invalid imports now cause schema loading to fail.

##### Patch Changes

- [`005458a`](https://github.com/backstage/backstage/commit/005458a): Added support for comma-separated values in the `BACKSTAGE_ENV` environment variable, allowing multiple environment-specific configuration files to be loaded and stacked at startup. For example, setting `BACKSTAGE_ENV=e2e-test,production` will load `app-config.e2e-test.yaml` and `app-config.production.yaml` in addition to the base `app-config.yaml`, with later environments taking priority. Local override files (`.local.yaml`) are always loaded after all non-local files.

## Other patch version bumps

### `@backstage/backend-test-utils` (1.11.4 → [1.11.5](../../changelogs/@backstage/backend-test-utils.md#1115))

#### 1.11.5

##### Patch Changes

- [`41c56b3`](https://github.com/backstage/backstage/commit/41c56b3): Fixed MySQL test database failures by pinning the Docker image from the floating `mysql:8` tag to `mysql:8.4` and replacing a startup flag that was removed in MySQL 8.4. Connection pool reduced from 50 to 5 per test database, idle connections are now reaped after 5 seconds, and container connection limits raised to 1000 for both MySQL and Postgres to handle parallel Jest workers on high-core machines.

### `@backstage/core-app-api` (1.20.2 → [1.20.3](../../changelogs/@backstage/core-app-api.md#1203))

#### 1.20.3

##### Patch Changes

- [`3ef5974`](https://github.com/backstage/backstage/commit/3ef5974): Added support for wildcard plugin entries in frontend discovery endpoints, matching the backend discovery behavior.
- [`6172725`](https://github.com/backstage/backstage/commit/6172725): Fixed the default fetch API to support discovery endpoints that only define an internal target.

### `@backstage/plugin-catalog-backend` (3.8.0 → [3.8.1](../../changelogs/@backstage/plugin-catalog-backend.md#381))

#### 3.8.1

##### Patch Changes

- [`28c1c1c`](https://github.com/backstage/backstage/commit/28c1c1c): Synced zod-validation-error versions between packages

### `@backstage/plugin-scaffolder` (1.38.0 → [1.38.1](../../changelogs/@backstage/plugin-scaffolder.md#1381))

#### 1.38.1

##### Patch Changes

- [`a5b2811`](https://github.com/backstage/backstage/commit/a5b2811): Adds `useBreadcrumbEntries` hook, `BreadcrumbEntry` component, and `BreadcrumbsRegistryProvider` for managing breadcrumb trails across the component tree for plugins using new frontend system. Completes wiring so that new frontend system plugin `Pages` and `SubPages` get automatic-population of `PluginHeader` breadcrumbs.

  - The app plugin's `PageLayout` registers a root breadcrumb for each plugin page and passes the breadcrumb trail to `PluginHeader`
  - `PageBlueprint` automatically wraps each sub-page route element with `BreadcrumbEntry`, so sub-pages contribute to the PluginHeader breadcrumb trail without extra wiring.
  - Plugin authors who need breadcrumbs for internal routes within a sub-page can wrap their route content with `BreadcrumbEntry` manually.
    - `plugin-scaffolder` internal routes have been wrapped as an example

- [`c32e636`](https://github.com/backstage/backstage/commit/c32e636): Fixed an issue where Bitbucket Cloud and Bitbucket Server hosts would not render the correct repository and branch picker fields in the Scaffolder.

### `@backstage/plugin-scaffolder-backend` (4.0.1 → [4.0.2](../../changelogs/@backstage/plugin-scaffolder-backend.md#402))

#### 4.0.2

##### Patch Changes

- [`55902bb`](https://github.com/backstage/backstage/commit/55902bb): Fixed `DatabaseTaskStore.list` returning `totalTasks` as a string on PostgreSQL. knex returns a `COUNT(*)` aggregate as a string on PostgreSQL (the column is a bigint) while better-sqlite3 returns a number, so the count is now coerced with `Number(...)` and guarded with `Number.isSafeInteger(...)`. This in turn fixes the `list-scaffolder-tasks` action, whose output schema declares `totalTasks: z.number()` and previously failed validation in production with `Invalid output ... totalTasks: Expected number, received string`.

### `@backstage/plugin-search` (1.7.5 → [1.7.6](../../changelogs/@backstage/plugin-search.md#176))

#### 1.7.6

##### Patch Changes

- [`b8db4fe`](https://github.com/backstage/backstage/commit/b8db4fe): The Search page no longer shows the Documentation result type unless it is provided by an installed plugin.
- [`0103d8e`](https://github.com/backstage/backstage/commit/0103d8e): Include custom catalog entity kinds in the search page kind filter.

### `@backstage/plugin-techdocs` (1.17.7 → [1.17.8](../../changelogs/@backstage/plugin-techdocs.md#1178))

#### 1.17.8

##### Patch Changes

- [`34bda9e`](https://github.com/backstage/backstage/commit/34bda9e): chore(deps): bump `dompurify` from 3.4.5 to 3.4.9
- [`f2aa036`](https://github.com/backstage/backstage/commit/f2aa036): chore(deps): bump `dompurify` from 3.4.9 to 3.4.11
- [`b8db4fe`](https://github.com/backstage/backstage/commit/b8db4fe): The TechDocs plugin now adds the Documentation result type to the Search page when it is installed.
- [`65c7f98`](https://github.com/backstage/backstage/commit/65c7f98): Fixed duplicate React key warnings when documentation entities share a name across different namespaces or kinds.
- [`9459c14`](https://github.com/backstage/backstage/commit/9459c14): Fixed TechDocs pages sometimes rendering blank due to sanitizer hooks registered by other plugins.

### `@backstage/plugin-techdocs-node` (1.15.1 → [1.15.2](../../changelogs/@backstage/plugin-techdocs-node.md#1152))

#### 1.15.2

##### Patch Changes

- [`120e7c3`](https://github.com/backstage/backstage/commit/120e7c3): chore(deps): bump `js-yaml` from 4.1.1 to 4.2.0

### `@backstage/plugin-techdocs-react` (1.3.12 → [1.3.13](../../changelogs/@backstage/plugin-techdocs-react.md#1313))

#### 1.3.13

##### Patch Changes

- [`0b02d4c`](https://github.com/backstage/backstage/commit/0b02d4c): Fixed the TechDocs reader requesting the documentation metadata in a tight loop when the request fails permanently (for example when the metadata returns a 404). The reader now stops after a failed request, which previously flooded the backend with requests and caused the page to flicker.

## Excluded dependency updates

- `@backstage/app-defaults` (1.7.9 → [1.7.10](../../changelogs/@backstage/app-defaults.md#1710))
- `@backstage/backend-app-api` (1.7.1 → [1.7.2](../../changelogs/@backstage/backend-app-api.md#172))
- `@backstage/backend-dynamic-feature-service` (0.8.3 → [0.8.4](../../changelogs/@backstage/backend-dynamic-feature-service.md#084))
- `@backstage/backend-plugin-api` (1.9.2 → [1.9.3](../../changelogs/@backstage/backend-plugin-api.md#193))
- `@backstage/catalog-client` (1.16.0 → [1.16.1](../../changelogs/@backstage/catalog-client.md#1161))
- `@backstage/cli-defaults` (0.1.3 → [0.1.4](../../changelogs/@backstage/cli-defaults.md#014))
- `@backstage/cli-module-actions` (0.1.2 → [0.1.3](../../changelogs/@backstage/cli-module-actions.md#013))
- `@backstage/cli-module-auth` (0.1.3 → [0.1.4](../../changelogs/@backstage/cli-module-auth.md#014))
- `@backstage/cli-module-config` (0.1.3 → [0.1.4](../../changelogs/@backstage/cli-module-config.md#014))
- `@backstage/cli-module-github` (0.1.3 → [0.1.4](../../changelogs/@backstage/cli-module-github.md#014))
- `@backstage/cli-module-info` (0.1.3 → [0.1.4](../../changelogs/@backstage/cli-module-info.md#014))
- `@backstage/cli-module-lint` (0.1.3 → [0.1.4](../../changelogs/@backstage/cli-module-lint.md#014))
- `@backstage/cli-module-maintenance` (0.1.3 → [0.1.4](../../changelogs/@backstage/cli-module-maintenance.md#014))
- `@backstage/cli-module-test-jest` (0.1.3 → [0.1.4](../../changelogs/@backstage/cli-module-test-jest.md#014))
- `@backstage/cli-module-translations` (0.1.3 → [0.1.4](../../changelogs/@backstage/cli-module-translations.md#014))
- `@backstage/cli-node` (0.3.3 → [0.3.4](../../changelogs/@backstage/cli-node.md#034))
- `@backstage/codemods` (0.1.57 → [0.1.58](../../changelogs/@backstage/codemods.md#0158))
- `@backstage/core-compat-api` (0.5.12 → [0.5.13](../../changelogs/@backstage/core-compat-api.md#0513))
- `@backstage/core-plugin-api` (1.12.7 → [1.12.8](../../changelogs/@backstage/core-plugin-api.md#1128))
- `@backstage/dev-utils` (1.1.24 → [1.1.25](../../changelogs/@backstage/dev-utils.md#1125))
- `@backstage/frontend-defaults` (0.5.3 → [0.5.4](../../changelogs/@backstage/frontend-defaults.md#054))
- `@backstage/frontend-dev-utils` (0.1.3 → [0.1.4](../../changelogs/@backstage/frontend-dev-utils.md#014))
- `@backstage/frontend-test-utils` (0.6.1 → [0.6.2](../../changelogs/@backstage/frontend-test-utils.md#062))
- `@backstage/integration-react` (1.2.19 → [1.2.20](../../changelogs/@backstage/integration-react.md#1220))
- `@backstage/plugin-api-docs` (0.14.2 → [0.14.3](../../changelogs/@backstage/plugin-api-docs.md#0143))
- `@backstage/plugin-app-backend` (0.5.15 → [0.5.16](../../changelogs/@backstage/plugin-app-backend.md#0516))
- `@backstage/plugin-app-node` (0.1.46 → [0.1.47](../../changelogs/@backstage/plugin-app-node.md#0147))
- `@backstage/plugin-app-react` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-app-react.md#025))
- `@backstage/plugin-app-visualizer` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-app-visualizer.md#026))
- `@backstage/plugin-auth` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-auth.md#0110))
- `@backstage/plugin-auth-backend-module-atlassian-provider` (0.4.16 → [0.4.17](../../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#0417))
- `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.4.17 → [0.4.18](../../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#0418))
- `@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.2.21 → [0.2.22](../../changelogs/@backstage/plugin-auth-backend-module-azure-easyauth-provider.md#0222))
- `@backstage/plugin-auth-backend-module-bitbucket-provider` (0.3.16 → [0.3.17](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-provider.md#0317))
- `@backstage/plugin-auth-backend-module-bitbucket-server-provider` (0.2.16 → [0.2.17](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-server-provider.md#0217))
- `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.4.16 → [0.4.17](../../changelogs/@backstage/plugin-auth-backend-module-cloudflare-access-provider.md#0417))
- `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.4.16 → [0.4.17](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#0417))
- `@backstage/plugin-auth-backend-module-github-provider` (0.5.4 → [0.5.5](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#055))
- `@backstage/plugin-auth-backend-module-gitlab-provider` (0.4.4 → [0.4.5](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#045))
- `@backstage/plugin-auth-backend-module-google-provider` (0.3.16 → [0.3.17](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#0317))
- `@backstage/plugin-auth-backend-module-guest-provider` (0.2.20 → [0.2.21](../../changelogs/@backstage/plugin-auth-backend-module-guest-provider.md#0221))
- `@backstage/plugin-auth-backend-module-microsoft-provider` (0.3.16 → [0.3.17](../../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#0317))
- `@backstage/plugin-auth-backend-module-oauth2-provider` (0.4.16 → [0.4.17](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#0417))
- `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#031))
- `@backstage/plugin-auth-backend-module-oidc-provider` (0.4.17 → [0.4.18](../../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#0418))
- `@backstage/plugin-auth-backend-module-okta-provider` (0.2.16 → [0.2.17](../../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#0217))
- `@backstage/plugin-auth-backend-module-onelogin-provider` (0.3.16 → [0.3.17](../../changelogs/@backstage/plugin-auth-backend-module-onelogin-provider.md#0317))
- `@backstage/plugin-auth-backend-module-openshift-provider` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-auth-backend-module-openshift-provider.md#019))
- `@backstage/plugin-auth-backend-module-pinniped-provider` (0.3.15 → [0.3.16](../../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#0316))
- `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.5.15 → [0.5.16](../../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#0516))
- `@backstage/plugin-auth-react` (0.1.28 → [0.1.29](../../changelogs/@backstage/plugin-auth-react.md#0129))
- `@backstage/plugin-catalog-backend-module-ai-model` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-catalog-backend-module-ai-model.md#012))
- `@backstage/plugin-catalog-backend-module-aws` (0.4.24 → [0.4.25](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#0425))
- `@backstage/plugin-catalog-backend-module-azure` (0.3.18 → [0.3.19](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0319))
- `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.5.15 → [0.5.16](../../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#0516))
- `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.5.12 → [0.5.13](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#0513))
- `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.5.12 → [0.5.13](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#0513))
- `@backstage/plugin-catalog-backend-module-gcp` (0.3.20 → [0.3.21](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#0321))
- `@backstage/plugin-catalog-backend-module-gerrit` (0.3.15 → [0.3.16](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0316))
- `@backstage/plugin-catalog-backend-module-gitea` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-catalog-backend-module-gitea.md#0114))
- `@backstage/plugin-catalog-backend-module-github` (0.13.3 → [0.13.4](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#0134))
- `@backstage/plugin-catalog-backend-module-github-org` (0.3.23 → [0.3.24](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#0324))
- `@backstage/plugin-catalog-backend-module-gitlab` (0.8.4 → [0.8.5](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#085))
- `@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.22 → [0.2.23](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab-org.md#0223))
- `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.7.13 → [0.7.14](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#0714))
- `@backstage/plugin-catalog-backend-module-ldap` (0.12.6 → [0.12.7](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0127))
- `@backstage/plugin-catalog-backend-module-logs` (0.1.23 → [0.1.24](../../changelogs/@backstage/plugin-catalog-backend-module-logs.md#0124))
- `@backstage/plugin-catalog-backend-module-msgraph-incremental` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph-incremental.md#012))
- `@backstage/plugin-catalog-backend-module-openapi` (0.2.23 → [0.2.24](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0224))
- `@backstage/plugin-catalog-backend-module-puppetdb` (0.2.23 → [0.2.24](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0224))
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.2.21 → [0.2.22](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#0222))
- `@backstage/plugin-catalog-backend-module-unprocessed` (0.6.13 → [0.6.14](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#0614))
- `@backstage/plugin-catalog-graph` (0.6.5 → [0.6.6](../../changelogs/@backstage/plugin-catalog-graph.md#066))
- `@backstage/plugin-catalog-import` (0.13.14 → [0.13.15](../../changelogs/@backstage/plugin-catalog-import.md#01315))
- `@backstage/plugin-catalog-node` (2.2.2 → [2.2.3](../../changelogs/@backstage/plugin-catalog-node.md#223))
- `@backstage/plugin-catalog-unprocessed-entities` (0.2.32 → [0.2.33](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#0233))
- `@backstage/plugin-config-schema` (0.1.81 → [0.1.82](../../changelogs/@backstage/plugin-config-schema.md#0182))
- `@backstage/plugin-devtools` (0.1.40 → [0.1.41](../../changelogs/@backstage/plugin-devtools.md#0141))
- `@backstage/plugin-devtools-backend` (0.5.18 → [0.5.19](../../changelogs/@backstage/plugin-devtools-backend.md#0519))
- `@backstage/plugin-devtools-react` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-devtools-react.md#024))
- `@backstage/plugin-events-backend` (0.6.3 → [0.6.4](../../changelogs/@backstage/plugin-events-backend.md#064))
- `@backstage/plugin-events-backend-module-aws-sqs` (0.4.23 → [0.4.24](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#0424))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.32 → [0.2.33](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0233))
- `@backstage/plugin-events-backend-module-bitbucket-server` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-server.md#0114))
- `@backstage/plugin-events-backend-module-gerrit` (0.2.32 → [0.2.33](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0233))
- `@backstage/plugin-events-backend-module-github` (0.4.13 → [0.4.14](../../changelogs/@backstage/plugin-events-backend-module-github.md#0414))
- `@backstage/plugin-events-backend-module-gitlab` (0.3.13 → [0.3.14](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#0314))
- `@backstage/plugin-events-backend-module-google-pubsub` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-events-backend-module-google-pubsub.md#025))
- `@backstage/plugin-events-backend-module-kafka` (0.3.5 → [0.3.6](../../changelogs/@backstage/plugin-events-backend-module-kafka.md#036))
- `@backstage/plugin-events-backend-test-utils` (0.1.56 → [0.1.57](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0157))
- `@backstage/plugin-events-node` (0.4.23 → [0.4.24](../../changelogs/@backstage/plugin-events-node.md#0424))
- `@backstage/plugin-gateway-backend` (1.1.6 → [1.1.7](../../changelogs/@backstage/plugin-gateway-backend.md#117))
- `@backstage/plugin-home-react` (0.1.39 → [0.1.40](../../changelogs/@backstage/plugin-home-react.md#0140))
- `@backstage/plugin-kubernetes` (0.12.20 → [0.12.21](../../changelogs/@backstage/plugin-kubernetes.md#01221))
- `@backstage/plugin-kubernetes-backend` (0.21.5 → [0.21.6](../../changelogs/@backstage/plugin-kubernetes-backend.md#0216))
- `@backstage/plugin-kubernetes-cluster` (0.0.38 → [0.0.39](../../changelogs/@backstage/plugin-kubernetes-cluster.md#0039))
- `@backstage/plugin-kubernetes-node` (0.4.5 → [0.4.6](../../changelogs/@backstage/plugin-kubernetes-node.md#046))
- `@backstage/plugin-mui-to-bui` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-mui-to-bui.md#029))
- `@backstage/plugin-notifications-backend` (0.6.6 → [0.6.7](../../changelogs/@backstage/plugin-notifications-backend.md#067))
- `@backstage/plugin-notifications-backend-module-email` (0.3.22 → [0.3.23](../../changelogs/@backstage/plugin-notifications-backend-module-email.md#0323))
- `@backstage/plugin-notifications-backend-module-slack` (0.4.3 → [0.4.4](../../changelogs/@backstage/plugin-notifications-backend-module-slack.md#044))
- `@backstage/plugin-org-react` (0.1.51 → [0.1.52](../../changelogs/@backstage/plugin-org-react.md#0152))
- `@backstage/plugin-permission-backend` (0.7.13 → [0.7.14](../../changelogs/@backstage/plugin-permission-backend.md#0714))
- `@backstage/plugin-permission-backend-module-allow-all-policy` (0.2.20 → [0.2.21](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#0221))
- `@backstage/plugin-permission-node` (0.11.1 → [0.11.2](../../changelogs/@backstage/plugin-permission-node.md#0112))
- `@backstage/plugin-permission-react` (0.5.2 → [0.5.3](../../changelogs/@backstage/plugin-permission-react.md#053))
- `@backstage/plugin-proxy-backend` (0.6.14 → [0.6.15](../../changelogs/@backstage/plugin-proxy-backend.md#0615))
- `@backstage/plugin-proxy-node` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-proxy-node.md#0117))
- `@backstage/plugin-scaffolder-backend-module-azure` (0.2.22 → [0.2.23](../../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#0223))
- `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.3.7 → [0.3.8](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#038))
- `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.22 → [0.2.23](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#0223))
- `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.22 → [0.3.23](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#0323))
- `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.24 → [0.3.25](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0325))
- `@backstage/plugin-scaffolder-backend-module-gcp` (0.2.22 → [0.2.23](../../changelogs/@backstage/plugin-scaffolder-backend-module-gcp.md#0223))
- `@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.22 → [0.2.23](../../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#0223))
- `@backstage/plugin-scaffolder-backend-module-gitea` (0.2.22 → [0.2.23](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#0223))
- `@backstage/plugin-scaffolder-backend-module-github` (0.9.10 → [0.9.11](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#0911))
- `@backstage/plugin-scaffolder-backend-module-gitlab` (0.11.7 → [0.11.8](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#0118))
- `@backstage/plugin-scaffolder-backend-module-notifications` (0.1.23 → [0.1.24](../../changelogs/@backstage/plugin-scaffolder-backend-module-notifications.md#0124))
- `@backstage/plugin-scaffolder-backend-module-rails` (0.5.22 → [0.5.23](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0523))
- `@backstage/plugin-scaffolder-backend-module-sentry` (0.3.5 → [0.3.6](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#036))
- `@backstage/plugin-scaffolder-node` (0.13.4 → [0.13.5](../../changelogs/@backstage/plugin-scaffolder-node.md#0135))
- `@backstage/plugin-scaffolder-node-test-utils` (0.3.12 → [0.3.13](../../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#0313))
- `@backstage/plugin-scaffolder-react` (2.0.1 → [2.0.2](../../changelogs/@backstage/plugin-scaffolder-react.md#202))
- `@backstage/plugin-search-backend` (2.1.3 → [2.1.4](../../changelogs/@backstage/plugin-search-backend.md#214))
- `@backstage/plugin-search-backend-module-catalog` (0.3.16 → [0.3.17](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#0317))
- `@backstage/plugin-search-backend-module-elasticsearch` (1.8.4 → [1.8.5](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#185))
- `@backstage/plugin-search-backend-module-explore` (0.3.15 → [0.3.16](../../changelogs/@backstage/plugin-search-backend-module-explore.md#0316))
- `@backstage/plugin-search-backend-module-pg` (0.5.56 → [0.5.57](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0557))
- `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.3.21 → [0.3.22](../../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#0322))
- `@backstage/plugin-search-backend-module-techdocs` (0.4.15 → [0.4.16](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#0416))
- `@backstage/plugin-search-backend-node` (1.4.5 → [1.4.6](../../changelogs/@backstage/plugin-search-backend-node.md#146))
- `@backstage/plugin-search-react` (1.11.5 → [1.11.6](../../changelogs/@backstage/plugin-search-react.md#1116))
- `@backstage/plugin-signals` (0.0.32 → [0.0.33](../../changelogs/@backstage/plugin-signals.md#0033))
- `@backstage/plugin-signals-backend` (0.3.16 → [0.3.17](../../changelogs/@backstage/plugin-signals-backend.md#0317))
- `@backstage/plugin-signals-node` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-signals-node.md#023))
- `@backstage/plugin-signals-react` (0.0.23 → [0.0.24](../../changelogs/@backstage/plugin-signals-react.md#0024))
- `@backstage/plugin-techdocs-addons-test-utils` (2.0.6 → [2.0.7](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#207))
- `@backstage/plugin-techdocs-backend` (2.2.1 → [2.2.2](../../changelogs/@backstage/plugin-techdocs-backend.md#222))
- `@backstage/plugin-techdocs-module-addons-contrib` (1.1.37 → [1.1.38](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1138))
- `@backstage/plugin-user-settings` (0.9.4 → [0.9.5](../../changelogs/@backstage/plugin-user-settings.md#095))
- `@backstage/plugin-user-settings-backend` (0.4.4 → [0.4.5](../../changelogs/@backstage/plugin-user-settings-backend.md#045))
- `@backstage/test-utils` (1.7.19 → [1.7.20](../../changelogs/@backstage/test-utils.md#1720))
- `@techdocs/cli` (1.11.1 → [1.11.2](../../changelogs/@techdocs/cli.md#1112))
