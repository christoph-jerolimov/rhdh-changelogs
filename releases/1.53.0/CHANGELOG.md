# Backstage Release 1.53.0 changelog

Changes between 1.52.1 and 1.53.0 — 185 changed and 1 added packages.

## Summary

- [Newly added packages](#newly-added-packages): 1 package
- [Breaking changes](#breaking-changes): 8 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 2 packages
- [Other minor version bumps](#other-minor-version-bumps): 1 package
- [Patch version bumps](#patch-version-bumps): 30 packages
- [Excluded dependency updates for packages](#excluded-dependency-updates-for-packages): 144 packages

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
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/config-loader` (1.10.12 → 1.11.0)](#backstageconfig-loader-11012--1110)
- [Patch version bumps](#patch-version-bumps)
  - [`@backstage/backend-defaults` (0.17.4 → 0.17.5)](#backstagebackend-defaults-0174--0175)
  - [`@backstage/backend-test-utils` (1.11.4 → 1.11.5)](#backstagebackend-test-utils-1114--1115)
  - [`@backstage/cli` (0.36.3 → 0.36.4)](#backstagecli-0363--0364)
  - [`@backstage/cli-module-build` (0.1.4 → 0.1.5)](#backstagecli-module-build-014--015)
  - [`@backstage/cli-module-new` (0.1.4 → 0.1.5)](#backstagecli-module-new-014--015)
  - [`@backstage/core-app-api` (1.20.2 → 1.20.3)](#backstagecore-app-api-1202--1203)
  - [`@backstage/core-components` (0.18.11 → 0.18.12)](#backstagecore-components-01811--01812)
  - [`@backstage/filter-predicates` (0.1.3 → 0.1.4)](#backstagefilter-predicates-013--014)
  - [`@backstage/frontend-app-api` (0.16.5 → 0.16.6)](#backstagefrontend-app-api-0165--0166)
  - [`@backstage/frontend-dynamic-feature-loader` (0.1.13 → 0.1.14)](#backstagefrontend-dynamic-feature-loader-0113--0114)
  - [`@backstage/frontend-plugin-api` (0.17.2 → 0.17.3)](#backstagefrontend-plugin-api-0172--0173)
  - [`@backstage/plugin-app` (0.5.0 → 0.5.1)](#backstageplugin-app-050--051)
  - [`@backstage/plugin-auth-backend` (0.29.1 → 0.29.2)](#backstageplugin-auth-backend-0291--0292)
  - [`@backstage/plugin-auth-backend-module-auth0-provider` (0.4.2 → 0.4.3)](#backstageplugin-auth-backend-module-auth0-provider-042--043)
  - [`@backstage/plugin-auth-node` (0.7.2 → 0.7.3)](#backstageplugin-auth-node-072--073)
  - [`@backstage/plugin-catalog-backend` (3.8.0 → 3.8.1)](#backstageplugin-catalog-backend-380--381)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.10.3 → 0.10.4)](#backstageplugin-catalog-backend-module-msgraph-0103--0104)
  - [`@backstage/plugin-events-backend-module-azure` (0.2.32 → 0.2.33)](#backstageplugin-events-backend-module-azure-0232--0233)
  - [`@backstage/plugin-home` (0.9.7 → 0.9.8)](#backstageplugin-home-097--098)
  - [`@backstage/plugin-kubernetes-react` (0.5.21 → 0.5.22)](#backstageplugin-kubernetes-react-0521--0522)
  - [`@backstage/plugin-notifications` (0.5.18 → 0.5.19)](#backstageplugin-notifications-0518--0519)
  - [`@backstage/plugin-notifications-node` (0.2.27 → 0.2.28)](#backstageplugin-notifications-node-0227--0228)
  - [`@backstage/plugin-org` (0.7.5 → 0.7.6)](#backstageplugin-org-075--076)
  - [`@backstage/plugin-scaffolder` (1.38.0 → 1.38.1)](#backstageplugin-scaffolder-1380--1381)
  - [`@backstage/plugin-scaffolder-backend` (4.0.1 → 4.0.2)](#backstageplugin-scaffolder-backend-401--402)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.23 → 0.4.24)](#backstageplugin-scaffolder-backend-module-yeoman-0423--0424)
  - [`@backstage/plugin-search` (1.7.5 → 1.7.6)](#backstageplugin-search-175--176)
  - [`@backstage/plugin-techdocs` (1.17.7 → 1.17.8)](#backstageplugin-techdocs-1177--1178)
  - [`@backstage/plugin-techdocs-node` (1.15.1 → 1.15.2)](#backstageplugin-techdocs-node-1151--1152)
  - [`@backstage/plugin-techdocs-react` (1.3.12 → 1.3.13)](#backstageplugin-techdocs-react-1312--1313)
- [Excluded dependency updates for packages](#excluded-dependency-updates-for-packages)

## Newly added packages

### `@backstage/plugin-app-module-user-settings` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- c8a06d5: Added new frontend module that provides database-backed user settings storage. When installed, it overrides the default browser local storage with the user settings backend, enabling settings to persist across devices and sessions.

## Breaking changes

### `@backstage/backend-openapi-utils` (0.6.10 → 0.7.0)

#### 0.7.0

##### Minor Changes

- 84171b3: **BREAKING**: Removed `wrapInOpenApiTestServer`. This function redirected test traffic through the Optic `capture` proxy via the `OPTIC_PROXY` environment variable. Since the Optic dependency has been removed, this function no longer serves a purpose. Use `wrapServer` instead for OpenAPI spec validation in tests.

### `@backstage/cli-common` (0.2.2 → 0.3.0)

#### 0.3.0

##### Minor Changes

- 39deda4: **BREAKING**: Removed the deprecated `bootstrapEnvProxyAgents` export along with the `global-agent` and `undici` dependencies. Use Node.js built-in proxy support by setting `NODE_USE_ENV_PROXY=1` alongside your `HTTP_PROXY`/`HTTPS_PROXY`/`NO_PROXY` environment variables instead. See the [corporate proxy guide](https://backstage.io/docs/tutorials/corporate-proxy/) for details.

### `@backstage/cli-module-migrate` (0.1.3 → 0.2.0)

#### 0.2.0

##### Minor Changes

- 39deda4: **BREAKING**: The `versions:bump` command no longer bootstraps legacy proxy agents. Use Node.js built-in proxy support by setting `NODE_USE_ENV_PROXY=1` alongside your `HTTP_PROXY`/`HTTPS_PROXY`/`NO_PROXY` environment variables instead.

### `@backstage/create-app` (0.8.4 → 0.9.0)

#### 0.9.0

##### Minor Changes

- 39deda4: **BREAKING**: No longer bootstraps legacy proxy agents. Use Node.js built-in proxy support by setting `NODE_USE_ENV_PROXY=1` alongside your `HTTP_PROXY`/`HTTPS_PROXY`/`NO_PROXY` environment variables instead.

##### Patch Changes

- fc4cae1: Added the user settings backend plugin to the create-app templates, enabling database-backed user settings persistence for newly created Backstage apps out of the box. The frontend storage API is also wired up to use backend-persisted storage instead of browser local storage, via the new `@backstage/plugin-app-module-user-settings` module.
- a5bddd1: Bumped create-app version.
- e2b3472: Updated generated app configurations to use the stable Client ID Metadata Documents setting and stop advertising deprecated Dynamic Client Registration.
- 3acdf87: Pinned `@types/node` to `22.20.0` in the seed lockfile to prevent yarn from resolving the `*` wildcard (from `@jest/environment-jsdom-abstract`) to `@types/node@26.0.0`, which breaks `tsc:full` due to incompatible `EventEmitter` types in `tarn`.
- 3a9ab3f: Fixed an issue where two "Notifications" links were displayed in the sidebar.

### `@backstage/plugin-catalog` (2.0.6 → 2.0.7)

#### 2.0.7

##### Patch Changes

- ba49e37: Migrated the new frontend system Catalog entity context menu to BUI and switched its built-in action icons to Remix icons. The old frontend system Catalog context menu remains unchanged.

  **BREAKING ALPHA**: The new frontend system Catalog entity page now consumes data-driven context menu item extensions. Its `contextMenuItems` input expects the `EntityContextMenuItemBlueprint` data output rather than a rendered React element.

  The default English value of the `entityContextMenu.moreButtonAriaLabel` translation changed from `more` to `More actions`. If you provide localized Catalog messages, update this label as appropriate for your locale.

- 15719cc: **BREAKING ALPHA**: Migrated the new frontend system Catalog entity page to the automatic Catalog plugin header and a BUI page header with entity tags, title, metadata, favorite and context-menu actions, and Catalog-composed navigation.

  Existing alpha opaque entity header customizations continue to render through a temporary per-entity legacy fallback with the previous MUI tabs and page shell. Migrate those customizations to the new BUI-ready entity header layout extension point to receive composed tabs and the active tab ID. The new extension point wins when both customization types match an entity.

  The default BUI navigation does not render entity-content tab icons because the BUI Header tab API does not expose an icon slot. Legacy fallback pages retain their existing tab-icon behavior.

  Added the translation keys `entityLabels.systemLabel`, `entityLabels.domainLabel`, and `entityLabels.partOfLabel`. Apps that provide Catalog translations should add translations for these new messages.

- a00547f: Fix crash when exporting the catalog with unset filters.
- 1217673: Fixed a crash in the catalog export when an entity list filter is `undefined`, which could occur if optional filters were not set.

### `@backstage/plugin-catalog-react` (3.1.0 → 3.2.0)

#### 3.2.0

##### Minor Changes

- ba49e37: **BREAKING ALPHA**: The `EntityContextMenuItemBlueprint` now outputs menu item data instead of a rendered MUI element. The Catalog entity page consumes this data and renders BUI menu items.

  The source-level `icon`, `useProps`, and filter authoring model remains, with `icon` now typed as `IconElement`. We recommend using Remix icons and checking that custom icons follow the standard icon sizing requirements.

  Menu items close immediately when selected, including while asynchronous actions are pending.

- 15719cc: Added an alpha BUI-ready entity header layout extension point. Its loaded component receives Catalog-composed tabs and the active tab ID, allowing custom entity headers to preserve or customize entity-page navigation.

  **DEPRECATED ALPHA**: The existing opaque entity header extension point is deprecated. It continues to work through a temporary Catalog legacy-layout fallback so adopters can migrate custom entity headers incrementally.

##### Patch Changes

- 8a500d5: Fixed a regression where `EntityTypePicker`'s `initialFilter` prop was being cleared when used alongside `EntityKindPicker` inside `EntityListProvider`. The type filter is now correctly preserved after the available types load for the selected kind.

### `@backstage/plugin-mcp-actions-backend` (0.1.14 → 0.2.0)

#### 0.2.0

##### Minor Changes

- 567bc4c: **BREAKING**: Removed the deprecated Server-Sent Events (SSE) MCP transport. MCP clients must use the Streamable HTTP endpoint at `/api/mcp-actions/v1` or a configured named-server endpoint.

##### Patch Changes

- e2b3472: Updated OAuth discovery to use the stable `auth.clientIdMetadataDocuments` configuration while retaining compatibility with the deprecated experimental key.

### `@backstage/repo-tools` (0.17.3 → 0.18.0)

#### 0.18.0

##### Minor Changes

- 84171b3: **BREAKING**: Replaced `@useoptic/optic` and `@useoptic/openapi-utilities` with `oasdiff` for OpenAPI breaking change detection.

  To migrate, remove `@useoptic/optic` from your root `package.json` and install the `oasdiff` CLI on your system — see https://github.com/oasdiff/oasdiff#installation for instructions.

  The `package schema openapi diff` command now uses `oasdiff` under the hood. The `--since`, `--json`, and `--ignore` flags continue to work, but the JSON and text output formats have changed to match `oasdiff`'s native output.

  The `repo schema openapi diff` command now automatically detects all packages with a changed `src/schema/openapi.yaml` and runs `oasdiff` against them directly. Packages no longer need a `"diff"` script in their `package.json` to be included in the check.

  Removed the `package schema openapi init` and `repo schema openapi test` commands, which depended on the Optic `capture` workflow and have no equivalent with `oasdiff`. Runtime validation of your API against its OpenAPI spec is still available via `wrapServer` from `@backstage/backend-openapi-utils/testUtils`.

##### Patch Changes

- 120e7c3: chore(deps): bump `js-yaml` from 4.1.1 to 4.2.0

## 0.x minor version bumps

### `@backstage/connections` (0.1.0 → 0.2.0)

#### 0.2.0

##### Minor Changes

- 58c53b1: Added a `title` field to connection auth methods, providing a human-readable display name for each configured authentication option. Connection type authors must now provide a `title` for each auth method definition, while connection configuration may optionally override the title per auth entry. When not explicitly configured, the auth entry title defaults to the auth method title defined by the connection type.

##### Patch Changes

- ec96761: Added a default implementation for the connections service so backend modules can depend on it without requiring apps to explicitly install the connections service factory.

### `@backstage/ui` (0.16.0 → 0.17.0)

#### 0.17.0

##### Minor Changes

- 503ba32: Added re-exports from `react-aria-components`. The types `Selection`, `SortDirection`, and `Key` are available as type-only exports (use `import type`), while `Focusable` is a runtime export. Consumers can now import these directly from `@backstage/ui` instead of depending on `react-aria-components`, avoiding version mismatches.

##### Patch Changes

- 2341682: Make PluginHeader > Breadcrumbs separator align with rest of text

  **Affected components:** PluginHeader

- 791703e: Add `breadcrumbs` prop & breadcrumbs to `PluginHeader`. When passed `breadcrumbs`, `PluginHeader` renders a `nav` with breadcrumbs & visually hides the plugin title.

  These breadcrumbs:

  - Collapses middle segments if 5 or more segments
  - Shows tooltip if text is truncated

  **Affected components:** PluginHeader

- 066c7ac: Added a new `TextAreaField` component for multi-line text input, following the same conventions as `TextField` with support for a label, secondary label, and description.

## Other minor version bumps

### `@backstage/config-loader` (1.10.12 → 1.11.0)

#### 1.11.0

##### Minor Changes

- 4a7240b: Configuration schemas declared in TypeScript now resolve and validate imported types instead of treating them as unconstrained values. Invalid imports now cause schema loading to fail.

##### Patch Changes

- 005458a: Added support for comma-separated values in the `BACKSTAGE_ENV` environment variable, allowing multiple environment-specific configuration files to be loaded and stacked at startup. For example, setting `BACKSTAGE_ENV=e2e-test,production` will load `app-config.e2e-test.yaml` and `app-config.production.yaml` in addition to the base `app-config.yaml`, with later environments taking priority. Local override files (`.local.yaml`) are always loaded after all non-local files.

## Patch version bumps

### `@backstage/backend-defaults` (0.17.4 → 0.17.5)

#### 0.17.5

##### Patch Changes

- aaa7d65: Improved readability of the AWS S3 URL parser by splitting the single monolithic regex into two separate patterns (standard S3 and VPC PrivateLink) with named capture groups. Also made the VPC endpoint region mandatory in the regex, fixing a potential mis-parse when the region segment was absent.
- d62c384: Fixed a bug where scheduled tasks that were initially registered with a manual trigger and later re-registered with a duration or cron cadence would never be scheduled to run.
- 8419f51: Added support for AWS PrivateLink for Amazon S3.
- a624fa3: The `connection` config option for the Redis cache store now accepts either a string URL or an object with additional connection options that are passed directly to the underlying client. The object form is only supported when `backend.cache.store` is `redis`; other stores require a plain string. This allows configuring options like `pingInterval` without needing dedicated config fields. For clustered Redis, the connection object properties are merged into cluster defaults. Fixes https://github.com/backstage/backstage/issues/31813, https://github.com/backstage/backstage/issues/31742.

### `@backstage/backend-test-utils` (1.11.4 → 1.11.5)

#### 1.11.5

##### Patch Changes

- 41c56b3: Fixed MySQL test database failures by pinning the Docker image from the floating `mysql:8` tag to `mysql:8.4` and replacing a startup flag that was removed in MySQL 8.4. Connection pool reduced from 50 to 5 per test database, idle connections are now reaped after 5 seconds, and container connection limits raised to 1000 for both MySQL and Postgres to handle parallel Jest workers on high-core machines.

### `@backstage/cli` (0.36.3 → 0.36.4)

#### 0.36.4

##### Patch Changes

- 61d4881: The shared ESLint configuration now reports unused imports in `config.d.ts` configuration schema files. These declaration files are not covered by the TypeScript compiler's unused-variable checks, which previously allowed a stray import to slip through. Such an import can resolve during local development but break configuration schema loading for consumers of the published package, so it is now caught at lint time.

### `@backstage/cli-module-build` (0.1.4 → 0.1.5)

#### 0.1.5

##### Patch Changes

- 87af6ce: Package preparation now converts TypeScript configuration schemas to separate JSON files. Backend builds compile schemas together before assembling the distribution workspace, while package publishing compiles each schema independently.
- 853bcba: Improved caching for Module Federation remote builds by extracting dependencies into separate content-hashed chunks.
- 3cce70f: Increase generated frontend static asset filename hashes to 12 characters to reduce the chance of collisions across long-lived cached builds.
- da820d1: Added support for passing custom flags to the embedded postgres processes via `backend.database.connection.flags.postgres` and `backend.database.connection.flags.initdb` configuration properties.

### `@backstage/cli-module-new` (0.1.4 → 0.1.5)

#### 0.1.5

##### Patch Changes

- 28c1c1c: Synced zod-validation-error versions between packages

### `@backstage/core-app-api` (1.20.2 → 1.20.3)

#### 1.20.3

##### Patch Changes

- 3ef5974: Added support for wildcard plugin entries in frontend discovery endpoints, matching the backend discovery behavior.
- 6172725: Fixed the default fetch API to support discovery endpoints that only define an internal target.

### `@backstage/core-components` (0.18.11 → 0.18.12)

#### 0.18.12

##### Patch Changes

- 120e7c3: chore(deps): bump `js-yaml` from 4.1.1 to 4.2.0
- 9efce7d: Fixed the table filters sidebar rendering a stray `0` when no filters are configured.
- 7ceeaad: Migrated CopyTextButton component from Material-UI to Backstage UI (BUI). Replaced MUI IconButton and Tooltip with BUI ButtonIcon and TooltipTrigger/Tooltip components. This is an internal refactoring that maintains backward compatibility - the component API remains unchanged.

### `@backstage/filter-predicates` (0.1.3 → 0.1.4)

#### 0.1.4

##### Patch Changes

- 28c1c1c: Synced zod-validation-error versions between packages

### `@backstage/frontend-app-api` (0.16.5 → 0.16.6)

#### 0.16.6

##### Patch Changes

- 74fbcd7: Extension `if` predicates now support specifying an `action` attribute in the permission reference. When a permission name contains a `#` separator (e.g. `catalog.entity.read#read`), the part after `#` is used as `attributes.action` when evaluating the permission. This removes the need to configure action attributes separately for basic permissions.
- 6ea6d31: Internal refactor of the specialized app sign-in runtime to initialize it once instead of reassigning it.

### `@backstage/frontend-dynamic-feature-loader` (0.1.13 → 0.1.14)

#### 0.1.14

##### Patch Changes

- a5e35e9: Added package installation and import instructions to the README file.

### `@backstage/frontend-plugin-api` (0.17.2 → 0.17.3)

#### 0.17.3

##### Patch Changes

- a5b2811: Adds `useBreadcrumbEntries` hook, `BreadcrumbEntry` component, and `BreadcrumbsRegistryProvider` for managing breadcrumb trails across the component tree for plugins using new frontend system. Completes wiring so that new frontend system plugin `Pages` and `SubPages` get automatic-population of `PluginHeader` breadcrumbs.

  - The app plugin's `PageLayout` registers a root breadcrumb for each plugin page and passes the breadcrumb trail to `PluginHeader`
  - `PageBlueprint` automatically wraps each sub-page route element with `BreadcrumbEntry`, so sub-pages contribute to the PluginHeader breadcrumb trail without extra wiring.
  - Plugin authors who need breadcrumbs for internal routes within a sub-page can wrap their route content with `BreadcrumbEntry` manually.
    - `plugin-scaffolder` internal routes have been wrapped as an example

### `@backstage/plugin-app` (0.5.0 → 0.5.1)

#### 0.5.1

##### Patch Changes

- a5b2811: Adds `useBreadcrumbEntries` hook, `BreadcrumbEntry` component, and `BreadcrumbsRegistryProvider` for managing breadcrumb trails across the component tree for plugins using new frontend system. Completes wiring so that new frontend system plugin `Pages` and `SubPages` get automatic-population of `PluginHeader` breadcrumbs.

  - The app plugin's `PageLayout` registers a root breadcrumb for each plugin page and passes the breadcrumb trail to `PluginHeader`
  - `PageBlueprint` automatically wraps each sub-page route element with `BreadcrumbEntry`, so sub-pages contribute to the PluginHeader breadcrumb trail without extra wiring.
  - Plugin authors who need breadcrumbs for internal routes within a sub-page can wrap their route content with `BreadcrumbEntry` manually.
    - `plugin-scaffolder` internal routes have been wrapped as an example

- 3ef5974: Added support for wildcard plugin entries in frontend discovery endpoints, matching the backend discovery behavior.
- 6172725: Fixed the default fetch API to support discovery endpoints that only define an internal target.

### `@backstage/plugin-auth-backend` (0.29.1 → 0.29.2)

#### 0.29.2

##### Patch Changes

- e2b3472: Promoted Client ID Metadata Documents (CIMD) to the stable `auth.clientIdMetadataDocuments` configuration. The previous `auth.experimentalClientIdMetadataDocuments` key remains supported as a deprecated alias. Dynamic Client Registration now logs a deprecation warning when enabled and users should migrate to CIMD.
- 2aeb246: Added token revocation support for clients using client ID metadata documents (CIMD). The `/v1/revoke` endpoint is now available whenever dynamic client registration or client ID metadata documents are enabled, and is advertised through `revocation_endpoint` in the OpenID provider configuration.

### `@backstage/plugin-auth-backend-module-auth0-provider` (0.4.2 → 0.4.3)

#### 0.4.3

##### Patch Changes

- 5446838: Added an optional `prompt` setting for Auth0 authorization requests. Set it to
  `auto` to let Auth0 determine whether the user needs to be prompted. Existing
  configurations continue to use `consent` by default.
- 9a07306: Added `screen_hint` and `login_hint` parameter forwarding for the Auth0 authentication provider.
  When these parameters are present in the OAuth start request query string, they
  are forwarded to Auth0's `/authorize` endpoint. This allows callers to guide
  users to the signup or login screen (`screen_hint=signup`) and pre-fill the
  email field (`login_hint=user@example.com`) during invitation flows.

### `@backstage/plugin-auth-node` (0.7.2 → 0.7.3)

#### 0.7.3

##### Patch Changes

- 28c1c1c: Synced zod-validation-error versions between packages

### `@backstage/plugin-catalog-backend` (3.8.0 → 3.8.1)

#### 3.8.1

##### Patch Changes

- 28c1c1c: Synced zod-validation-error versions between packages

### `@backstage/plugin-catalog-backend-module-msgraph` (0.10.3 → 0.10.4)

#### 0.10.4

##### Patch Changes

- 06bf22e: Configuring `userGroupMember.path` together with `user.filter` is now rejected with a configuration error, as the two options are mutually exclusive. This matches the existing validation for `userGroupMember.filter` and `userGroupMember.search`.

### `@backstage/plugin-events-backend-module-azure` (0.2.32 → 0.2.33)

#### 0.2.33

##### Patch Changes

- 9d23b9e: Added HTTP POST webhook ingress endpoint for Azure DevOps events, matching the pattern established by the GitHub events module. The ingress endpoint is only registered when `events.modules.azureDevOps.webhookSecret` is configured; without it, no route is exposed. Incoming requests are validated against the `x-ado-webhook-secret` custom header using timing-safe comparison.

### `@backstage/plugin-home` (0.9.7 → 0.9.8)

#### 0.9.8

##### Patch Changes

- e9776b0: Optionally prevent duplicate widget additions via prop and added empty state for Add Widget dialog

### `@backstage/plugin-kubernetes-react` (0.5.21 → 0.5.22)

#### 0.5.22

##### Patch Changes

- 120e7c3: chore(deps): bump `js-yaml` from 4.1.1 to 4.2.0
- 2ed90cd: Fixed the published configuration schema so that it no longer references a file that is excluded from the package. This previously caused configuration schema extraction to fail in apps that depend on this plugin.

### `@backstage/plugin-notifications` (0.5.18 → 0.5.19)

#### 0.5.19

##### Patch Changes

- 73ea4d7: Migrated tests to msw version 2.

### `@backstage/plugin-notifications-node` (0.2.27 → 0.2.28)

#### 0.2.28

##### Patch Changes

- 73ea4d7: Migrated tests to msw version 2.

### `@backstage/plugin-org` (0.7.5 → 0.7.6)

#### 0.7.6

##### Patch Changes

- 9585e44: Fixed the ownership card emitting duplicate React key warnings when different entity kinds share the same type.

### `@backstage/plugin-scaffolder` (1.38.0 → 1.38.1)

#### 1.38.1

##### Patch Changes

- a5b2811: Adds `useBreadcrumbEntries` hook, `BreadcrumbEntry` component, and `BreadcrumbsRegistryProvider` for managing breadcrumb trails across the component tree for plugins using new frontend system. Completes wiring so that new frontend system plugin `Pages` and `SubPages` get automatic-population of `PluginHeader` breadcrumbs.

  - The app plugin's `PageLayout` registers a root breadcrumb for each plugin page and passes the breadcrumb trail to `PluginHeader`
  - `PageBlueprint` automatically wraps each sub-page route element with `BreadcrumbEntry`, so sub-pages contribute to the PluginHeader breadcrumb trail without extra wiring.
  - Plugin authors who need breadcrumbs for internal routes within a sub-page can wrap their route content with `BreadcrumbEntry` manually.
    - `plugin-scaffolder` internal routes have been wrapped as an example

- c32e636: Fixed an issue where Bitbucket Cloud and Bitbucket Server hosts would not render the correct repository and branch picker fields in the Scaffolder.

### `@backstage/plugin-scaffolder-backend` (4.0.1 → 4.0.2)

#### 4.0.2

##### Patch Changes

- 55902bb: Fixed `DatabaseTaskStore.list` returning `totalTasks` as a string on PostgreSQL. knex returns a `COUNT(*)` aggregate as a string on PostgreSQL (the column is a bigint) while better-sqlite3 returns a number, so the count is now coerced with `Number(...)` and guarded with `Number.isSafeInteger(...)`. This in turn fixes the `list-scaffolder-tasks` action, whose output schema declares `totalTasks: z.number()` and previously failed validation in production with `Invalid output ... totalTasks: Expected number, received string`.

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.23 → 0.4.24)

#### 0.4.24

##### Patch Changes

- 5e92512: Fixed compatibility with yeoman-environment v4+, which is ESM-only. The previous require() call throws ERR_REQUIRE_ESM; replaced with dynamic import() and updated registration to match the v4+ API.

### `@backstage/plugin-search` (1.7.5 → 1.7.6)

#### 1.7.6

##### Patch Changes

- b8db4fe: The Search page no longer shows the Documentation result type unless it is provided by an installed plugin.
- 0103d8e: Include custom catalog entity kinds in the search page kind filter.

### `@backstage/plugin-techdocs` (1.17.7 → 1.17.8)

#### 1.17.8

##### Patch Changes

- 34bda9e: chore(deps): bump `dompurify` from 3.4.5 to 3.4.9
- f2aa036: chore(deps): bump `dompurify` from 3.4.9 to 3.4.11
- b8db4fe: The TechDocs plugin now adds the Documentation result type to the Search page when it is installed.
- 65c7f98: Fixed duplicate React key warnings when documentation entities share a name across different namespaces or kinds.
- 9459c14: Fixed TechDocs pages sometimes rendering blank due to sanitizer hooks registered by other plugins.

### `@backstage/plugin-techdocs-node` (1.15.1 → 1.15.2)

#### 1.15.2

##### Patch Changes

- 120e7c3: chore(deps): bump `js-yaml` from 4.1.1 to 4.2.0

### `@backstage/plugin-techdocs-react` (1.3.12 → 1.3.13)

#### 1.3.13

##### Patch Changes

- 0b02d4c: Fixed the TechDocs reader requesting the documentation metadata in a tight loop when the request fails permanently (for example when the metadata returns a 404). The reader now stops after a failed request, which previously flooded the backend with requests and caused the page to flicker.

## Excluded dependency updates for packages

- `@backstage/app-defaults`
- `@backstage/backend-app-api`
- `@backstage/backend-dynamic-feature-service`
- `@backstage/backend-plugin-api`
- `@backstage/catalog-client`
- `@backstage/cli-defaults`
- `@backstage/cli-module-actions`
- `@backstage/cli-module-auth`
- `@backstage/cli-module-config`
- `@backstage/cli-module-github`
- `@backstage/cli-module-info`
- `@backstage/cli-module-lint`
- `@backstage/cli-module-maintenance`
- `@backstage/cli-module-test-jest`
- `@backstage/cli-module-translations`
- `@backstage/cli-node`
- `@backstage/codemods`
- `@backstage/core-compat-api`
- `@backstage/core-plugin-api`
- `@backstage/dev-utils`
- `@backstage/frontend-defaults`
- `@backstage/frontend-dev-utils`
- `@backstage/frontend-test-utils`
- `@backstage/integration-react`
- `@backstage/plugin-api-docs`
- `@backstage/plugin-app-backend`
- `@backstage/plugin-app-node`
- `@backstage/plugin-app-react`
- `@backstage/plugin-app-visualizer`
- `@backstage/plugin-auth`
- `@backstage/plugin-auth-backend-module-atlassian-provider`
- `@backstage/plugin-auth-backend-module-aws-alb-provider`
- `@backstage/plugin-auth-backend-module-azure-easyauth-provider`
- `@backstage/plugin-auth-backend-module-bitbucket-provider`
- `@backstage/plugin-auth-backend-module-bitbucket-server-provider`
- `@backstage/plugin-auth-backend-module-cloudflare-access-provider`
- `@backstage/plugin-auth-backend-module-gcp-iap-provider`
- `@backstage/plugin-auth-backend-module-github-provider`
- `@backstage/plugin-auth-backend-module-gitlab-provider`
- `@backstage/plugin-auth-backend-module-google-provider`
- `@backstage/plugin-auth-backend-module-guest-provider`
- `@backstage/plugin-auth-backend-module-microsoft-provider`
- `@backstage/plugin-auth-backend-module-oauth2-provider`
- `@backstage/plugin-auth-backend-module-oauth2-proxy-provider`
- `@backstage/plugin-auth-backend-module-oidc-provider`
- `@backstage/plugin-auth-backend-module-okta-provider`
- `@backstage/plugin-auth-backend-module-onelogin-provider`
- `@backstage/plugin-auth-backend-module-openshift-provider`
- `@backstage/plugin-auth-backend-module-pinniped-provider`
- `@backstage/plugin-auth-backend-module-vmware-cloud-provider`
- `@backstage/plugin-auth-react`
- `@backstage/plugin-catalog-backend-module-ai-model`
- `@backstage/plugin-catalog-backend-module-aws`
- `@backstage/plugin-catalog-backend-module-azure`
- `@backstage/plugin-catalog-backend-module-backstage-openapi`
- `@backstage/plugin-catalog-backend-module-bitbucket-cloud`
- `@backstage/plugin-catalog-backend-module-bitbucket-server`
- `@backstage/plugin-catalog-backend-module-gcp`
- `@backstage/plugin-catalog-backend-module-gerrit`
- `@backstage/plugin-catalog-backend-module-gitea`
- `@backstage/plugin-catalog-backend-module-github`
- `@backstage/plugin-catalog-backend-module-github-org`
- `@backstage/plugin-catalog-backend-module-gitlab`
- `@backstage/plugin-catalog-backend-module-gitlab-org`
- `@backstage/plugin-catalog-backend-module-incremental-ingestion`
- `@backstage/plugin-catalog-backend-module-ldap`
- `@backstage/plugin-catalog-backend-module-logs`
- `@backstage/plugin-catalog-backend-module-msgraph-incremental`
- `@backstage/plugin-catalog-backend-module-openapi`
- `@backstage/plugin-catalog-backend-module-puppetdb`
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model`
- `@backstage/plugin-catalog-backend-module-unprocessed`
- `@backstage/plugin-catalog-graph`
- `@backstage/plugin-catalog-import`
- `@backstage/plugin-catalog-node`
- `@backstage/plugin-catalog-unprocessed-entities`
- `@backstage/plugin-config-schema`
- `@backstage/plugin-devtools`
- `@backstage/plugin-devtools-backend`
- `@backstage/plugin-devtools-react`
- `@backstage/plugin-events-backend`
- `@backstage/plugin-events-backend-module-aws-sqs`
- `@backstage/plugin-events-backend-module-bitbucket-cloud`
- `@backstage/plugin-events-backend-module-bitbucket-server`
- `@backstage/plugin-events-backend-module-gerrit`
- `@backstage/plugin-events-backend-module-github`
- `@backstage/plugin-events-backend-module-gitlab`
- `@backstage/plugin-events-backend-module-google-pubsub`
- `@backstage/plugin-events-backend-module-kafka`
- `@backstage/plugin-events-backend-test-utils`
- `@backstage/plugin-events-node`
- `@backstage/plugin-gateway-backend`
- `@backstage/plugin-home-react`
- `@backstage/plugin-kubernetes`
- `@backstage/plugin-kubernetes-backend`
- `@backstage/plugin-kubernetes-cluster`
- `@backstage/plugin-kubernetes-node`
- `@backstage/plugin-mui-to-bui`
- `@backstage/plugin-notifications-backend`
- `@backstage/plugin-notifications-backend-module-email`
- `@backstage/plugin-notifications-backend-module-slack`
- `@backstage/plugin-org-react`
- `@backstage/plugin-permission-backend`
- `@backstage/plugin-permission-backend-module-allow-all-policy`
- `@backstage/plugin-permission-node`
- `@backstage/plugin-permission-react`
- `@backstage/plugin-proxy-backend`
- `@backstage/plugin-proxy-node`
- `@backstage/plugin-scaffolder-backend-module-azure`
- `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud`
- `@backstage/plugin-scaffolder-backend-module-bitbucket-server`
- `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown`
- `@backstage/plugin-scaffolder-backend-module-cookiecutter`
- `@backstage/plugin-scaffolder-backend-module-gcp`
- `@backstage/plugin-scaffolder-backend-module-gerrit`
- `@backstage/plugin-scaffolder-backend-module-gitea`
- `@backstage/plugin-scaffolder-backend-module-github`
- `@backstage/plugin-scaffolder-backend-module-gitlab`
- `@backstage/plugin-scaffolder-backend-module-notifications`
- `@backstage/plugin-scaffolder-backend-module-rails`
- `@backstage/plugin-scaffolder-backend-module-sentry`
- `@backstage/plugin-scaffolder-node`
- `@backstage/plugin-scaffolder-node-test-utils`
- `@backstage/plugin-scaffolder-react`
- `@backstage/plugin-search-backend`
- `@backstage/plugin-search-backend-module-catalog`
- `@backstage/plugin-search-backend-module-elasticsearch`
- `@backstage/plugin-search-backend-module-explore`
- `@backstage/plugin-search-backend-module-pg`
- `@backstage/plugin-search-backend-module-stack-overflow-collator`
- `@backstage/plugin-search-backend-module-techdocs`
- `@backstage/plugin-search-backend-node`
- `@backstage/plugin-search-react`
- `@backstage/plugin-signals`
- `@backstage/plugin-signals-backend`
- `@backstage/plugin-signals-node`
- `@backstage/plugin-signals-react`
- `@backstage/plugin-techdocs-addons-test-utils`
- `@backstage/plugin-techdocs-backend`
- `@backstage/plugin-techdocs-module-addons-contrib`
- `@backstage/plugin-user-settings`
- `@backstage/plugin-user-settings-backend`
- `@backstage/test-utils`
- `@techdocs/cli`
