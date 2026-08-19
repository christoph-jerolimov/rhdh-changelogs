# RHDH Release 1.11-m2 changelog

Changes between Backstage 1.52.1 (RHDH 1.11-m1) and Backstage 1.54.0 (RHDH 1.11-m2) — 1 added, 1 removed, 192 upgraded, 17 unchanged packages.

## Summary

- [Newly added packages](#newly-added-packages): 1 package
- [Removed packages](#removed-packages): 1 package
- [Breaking changes](#breaking-changes): 11 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 1 package
- [0.0.x patch version bumps](#00x-patch-version-bumps): 1 package
- [0.x patch version bumps](#0x-patch-version-bumps): 52 packages
- [Other minor version bumps](#other-minor-version-bumps): 6 packages
- [Other patch version bumps](#other-patch-version-bumps): 12 packages
- [Excluded dependency updates](#excluded-dependency-updates): 109 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/plugin-app-module-user-settings` (new, 0.1.1)](#backstageplugin-app-module-user-settings-new-011)
- [Removed packages](#removed-packages)
- [Breaking changes](#breaking-changes)
  - [`@backstage/backend-openapi-utils` (0.6.10 → 0.7.1)](#backstagebackend-openapi-utils-0610--071)
  - [`@backstage/cli-common` (0.2.2 → 0.3.0)](#backstagecli-common-022--030)
  - [`@backstage/cli-module-migrate` (0.1.3 → 0.2.1)](#backstagecli-module-migrate-013--021)
  - [`@backstage/connections` (0.1.0 → 0.3.0)](#backstageconnections-010--030)
  - [`@backstage/create-app` (0.8.4 → 0.9.1)](#backstagecreate-app-084--091)
  - [`@backstage/frontend-plugin-api` (0.17.2 → 0.18.0)](#backstagefrontend-plugin-api-0172--0180)
  - [`@backstage/plugin-auth-backend` (0.29.1 → 0.30.0)](#backstageplugin-auth-backend-0291--0300)
  - [`@backstage/plugin-catalog` (2.0.6 → 2.0.8)](#backstageplugin-catalog-206--208)
  - [`@backstage/plugin-catalog-react` (3.1.0 → 3.2.1)](#backstageplugin-catalog-react-310--321)
  - [`@backstage/plugin-mcp-actions-backend` (0.1.14 → 0.2.1)](#backstageplugin-mcp-actions-backend-0114--021)
  - [`@backstage/repo-tools` (0.17.3 → 0.19.0)](#backstagerepo-tools-0173--0190)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/ui` (0.16.0 → 0.17.1)](#backstageui-0160--0171)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/release-manifests` (0.0.13 → 0.0.14)](#backstagerelease-manifests-0013--0014)
- [0.x patch version bumps](#0x-patch-version-bumps)
  - [`@backstage/backend-defaults` (0.17.4 → 0.17.7)](#backstagebackend-defaults-0174--0177)
  - [`@backstage/backend-dynamic-feature-service` (0.8.3 → 0.8.6)](#backstagebackend-dynamic-feature-service-083--086)
  - [`@backstage/cli` (0.36.3 → 0.36.5)](#backstagecli-0363--0365)
  - [`@backstage/cli-module-build` (0.1.4 → 0.1.7)](#backstagecli-module-build-014--017)
  - [`@backstage/cli-module-config` (0.1.3 → 0.1.6)](#backstagecli-module-config-013--016)
  - [`@backstage/cli-module-lint` (0.1.3 → 0.1.5)](#backstagecli-module-lint-013--015)
  - [`@backstage/cli-module-new` (0.1.4 → 0.1.6)](#backstagecli-module-new-014--016)
  - [`@backstage/cli-module-test-jest` (0.1.3 → 0.1.5)](#backstagecli-module-test-jest-013--015)
  - [`@backstage/core-components` (0.18.11 → 0.18.13)](#backstagecore-components-01811--01813)
  - [`@backstage/eslint-plugin` (0.3.1 → 0.3.2)](#backstageeslint-plugin-031--032)
  - [`@backstage/filter-predicates` (0.1.3 → 0.1.4)](#backstagefilter-predicates-013--014)
  - [`@backstage/frontend-app-api` (0.16.5 → 0.16.7)](#backstagefrontend-app-api-0165--0167)
  - [`@backstage/frontend-dynamic-feature-loader` (0.1.13 → 0.1.15)](#backstagefrontend-dynamic-feature-loader-0113--0115)
  - [`@backstage/frontend-test-utils` (0.6.1 → 0.6.3)](#backstagefrontend-test-utils-061--063)
  - [`@backstage/integration-aws-node` (0.2.0 → 0.2.1)](#backstageintegration-aws-node-020--021)
  - [`@backstage/plugin-api-docs` (0.14.2 → 0.14.4)](#backstageplugin-api-docs-0142--0144)
  - [`@backstage/plugin-app` (0.5.0 → 0.5.2)](#backstageplugin-app-050--052)
  - [`@backstage/plugin-app-react` (0.2.4 → 0.2.6)](#backstageplugin-app-react-024--026)
  - [`@backstage/plugin-auth-backend-module-auth0-provider` (0.4.2 → 0.4.4)](#backstageplugin-auth-backend-module-auth0-provider-042--044)
  - [`@backstage/plugin-auth-backend-module-microsoft-provider` (0.3.16 → 0.3.18)](#backstageplugin-auth-backend-module-microsoft-provider-0316--0318)
  - [`@backstage/plugin-auth-node` (0.7.2 → 0.7.4)](#backstageplugin-auth-node-072--074)
  - [`@backstage/plugin-catalog-backend-module-backstage-openapi` (0.5.15 → 0.5.17)](#backstageplugin-catalog-backend-module-backstage-openapi-0515--0517)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.7.13 → 0.7.15)](#backstageplugin-catalog-backend-module-incremental-ingestion-0713--0715)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.10.3 → 0.10.5)](#backstageplugin-catalog-backend-module-msgraph-0103--0105)
  - [`@backstage/plugin-catalog-graph` (0.6.5 → 0.6.7)](#backstageplugin-catalog-graph-065--067)
  - [`@backstage/plugin-catalog-import` (0.13.14 → 0.13.16)](#backstageplugin-catalog-import-01314--01316)
  - [`@backstage/plugin-catalog-unprocessed-entities` (0.2.32 → 0.2.34)](#backstageplugin-catalog-unprocessed-entities-0232--0234)
  - [`@backstage/plugin-events-backend-module-azure` (0.2.32 → 0.2.34)](#backstageplugin-events-backend-module-azure-0232--0234)
  - [`@backstage/plugin-home` (0.9.7 → 0.9.9)](#backstageplugin-home-097--099)
  - [`@backstage/plugin-home-react` (0.1.39 → 0.1.41)](#backstageplugin-home-react-0139--0141)
  - [`@backstage/plugin-kubernetes-backend` (0.21.5 → 0.21.7)](#backstageplugin-kubernetes-backend-0215--0217)
  - [`@backstage/plugin-kubernetes-react` (0.5.21 → 0.5.23)](#backstageplugin-kubernetes-react-0521--0523)
  - [`@backstage/plugin-notifications` (0.5.18 → 0.5.20)](#backstageplugin-notifications-0518--0520)
  - [`@backstage/plugin-notifications-backend` (0.6.6 → 0.6.8)](#backstageplugin-notifications-backend-066--068)
  - [`@backstage/plugin-notifications-backend-module-email` (0.3.22 → 0.3.24)](#backstageplugin-notifications-backend-module-email-0322--0324)
  - [`@backstage/plugin-notifications-backend-module-slack` (0.4.3 → 0.4.5)](#backstageplugin-notifications-backend-module-slack-043--045)
  - [`@backstage/plugin-notifications-node` (0.2.27 → 0.2.29)](#backstageplugin-notifications-node-0227--0229)
  - [`@backstage/plugin-org` (0.7.5 → 0.7.7)](#backstageplugin-org-075--077)
  - [`@backstage/plugin-permission-backend` (0.7.13 → 0.7.15)](#backstageplugin-permission-backend-0713--0715)
  - [`@backstage/plugin-permission-common` (0.9.9 → 0.9.10)](#backstageplugin-permission-common-099--0910)
  - [`@backstage/plugin-permission-node` (0.11.1 → 0.11.3)](#backstageplugin-permission-node-0111--0113)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.3.7 → 0.3.9)](#backstageplugin-scaffolder-backend-module-bitbucket-cloud-037--039)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.22 → 0.2.24)](#backstageplugin-scaffolder-backend-module-bitbucket-server-0222--0224)
  - [`@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.22 → 0.3.24)](#backstageplugin-scaffolder-backend-module-confluence-to-markdown-0322--0324)
  - [`@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.22 → 0.2.24)](#backstageplugin-scaffolder-backend-module-gerrit-0222--0224)
  - [`@backstage/plugin-scaffolder-backend-module-gitea` (0.2.22 → 0.2.24)](#backstageplugin-scaffolder-backend-module-gitea-0222--0224)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.23 → 0.4.25)](#backstageplugin-scaffolder-backend-module-yeoman-0423--0425)
  - [`@backstage/plugin-scaffolder-node` (0.13.4 → 0.13.6)](#backstageplugin-scaffolder-node-0134--0136)
  - [`@backstage/plugin-search-backend-module-explore` (0.3.15 → 0.3.17)](#backstageplugin-search-backend-module-explore-0315--0317)
  - [`@backstage/plugin-search-backend-module-stack-overflow-collator` (0.3.21 → 0.3.23)](#backstageplugin-search-backend-module-stack-overflow-collator-0321--0323)
  - [`@backstage/plugin-search-backend-module-techdocs` (0.4.15 → 0.4.17)](#backstageplugin-search-backend-module-techdocs-0415--0417)
  - [`@backstage/plugin-user-settings` (0.9.4 → 0.9.6)](#backstageplugin-user-settings-094--096)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/backend-plugin-api` (1.9.2 → 1.10.0)](#backstagebackend-plugin-api-192--1100)
  - [`@backstage/catalog-model` (1.9.0 → 1.10.0)](#backstagecatalog-model-190--1100)
  - [`@backstage/config-loader` (1.10.12 → 1.11.2)](#backstageconfig-loader-11012--1112)
  - [`@backstage/integration` (2.0.3 → 2.1.0)](#backstageintegration-203--210)
  - [`@backstage/plugin-catalog-backend` (3.8.0 → 3.9.0)](#backstageplugin-catalog-backend-380--390)
  - [`@backstage/plugin-techdocs` (1.17.7 → 1.18.0)](#backstageplugin-techdocs-1177--1180)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-app-api` (1.7.1 → 1.7.3)](#backstagebackend-app-api-171--173)
  - [`@backstage/backend-test-utils` (1.11.4 → 1.11.6)](#backstagebackend-test-utils-1114--1116)
  - [`@backstage/core-app-api` (1.20.2 → 1.20.4)](#backstagecore-app-api-1202--1204)
  - [`@backstage/core-plugin-api` (1.12.7 → 1.12.9)](#backstagecore-plugin-api-1127--1129)
  - [`@backstage/plugin-gateway-backend` (1.1.6 → 1.1.8)](#backstageplugin-gateway-backend-116--118)
  - [`@backstage/plugin-scaffolder` (1.38.0 → 1.38.2)](#backstageplugin-scaffolder-1380--1382)
  - [`@backstage/plugin-scaffolder-backend` (4.0.1 → 4.0.3)](#backstageplugin-scaffolder-backend-401--403)
  - [`@backstage/plugin-scaffolder-common` (2.2.1 → 2.2.2)](#backstageplugin-scaffolder-common-221--222)
  - [`@backstage/plugin-search` (1.7.5 → 1.7.7)](#backstageplugin-search-175--177)
  - [`@backstage/plugin-techdocs-node` (1.15.1 → 1.15.3)](#backstageplugin-techdocs-node-1151--1153)
  - [`@backstage/plugin-techdocs-react` (1.3.12 → 1.3.14)](#backstageplugin-techdocs-react-1312--1314)
  - [`@backstage/test-utils` (1.7.19 → 1.7.21)](#backstagetest-utils-1719--1721)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/plugin-app-module-user-settings` (new, [0.1.1](../../changelogs/@backstage/plugin-app-module-user-settings.md#011))

#### 0.1.0

##### Minor Changes

- [`c8a06d5`](https://github.com/backstage/backstage/commit/c8a06d5): Added new frontend module that provides database-backed user settings storage. When installed, it overrides the default browser local storage with the user settings backend, enabling settings to persist across devices and sessions.

## Removed packages

- `@backstage/codemods` ([0.1.57](../../changelogs/@backstage/codemods.md#0157))

## Breaking changes

### `@backstage/backend-openapi-utils` (0.6.10 → [0.7.1](../../changelogs/@backstage/backend-openapi-utils.md#071))

#### 0.7.0

##### Minor Changes

- [`84171b3`](https://github.com/backstage/backstage/commit/84171b3): **BREAKING**: Removed `wrapInOpenApiTestServer`. This function redirected test traffic through the Optic `capture` proxy via the `OPTIC_PROXY` environment variable. Since the Optic dependency has been removed, this function no longer serves a purpose. Use `wrapServer` instead for OpenAPI spec validation in tests.

### `@backstage/cli-common` (0.2.2 → [0.3.0](../../changelogs/@backstage/cli-common.md#030))

#### 0.3.0

##### Minor Changes

- [`39deda4`](https://github.com/backstage/backstage/commit/39deda4): **BREAKING**: Removed the deprecated `bootstrapEnvProxyAgents` export along with the `global-agent` and `undici` dependencies. Use Node.js built-in proxy support by setting `NODE_USE_ENV_PROXY=1` alongside your `HTTP_PROXY`/`HTTPS_PROXY`/`NO_PROXY` environment variables instead. See the [corporate proxy guide](https://backstage.io/docs/tutorials/corporate-proxy/) for details.

### `@backstage/cli-module-migrate` (0.1.3 → [0.2.1](../../changelogs/@backstage/cli-module-migrate.md#021))

#### 0.2.1

##### Patch Changes

- [`cf59370`](https://github.com/backstage/backstage/commit/cf59370): Migrated tests from MSW v1 to MSW v2.

#### 0.2.0

##### Minor Changes

- [`39deda4`](https://github.com/backstage/backstage/commit/39deda4): **BREAKING**: The `versions:bump` command no longer bootstraps legacy proxy agents. Use Node.js built-in proxy support by setting `NODE_USE_ENV_PROXY=1` alongside your `HTTP_PROXY`/`HTTPS_PROXY`/`NO_PROXY` environment variables instead.

### `@backstage/connections` (0.1.0 → [0.3.0](../../changelogs/@backstage/connections.md#030))

#### 0.3.0

##### Minor Changes

- [`64cea29`](https://github.com/backstage/backstage/commit/64cea29): **BREAKING**: Changed `@backstage/connections` into a common library so its connection types, schemas, and service contract can be used by isomorphic packages. The Node.js service implementation is now internal. Backend-only APIs and configuration types, including `connectionsServiceRef`, `connectionsServiceFactory`, `DefaultConnectionsService`, `declareConnection`, `RootConnection`, and `AnyRootConnection`, are no longer exported from this package.
- [`dba1eed`](https://github.com/backstage/backstage/commit/dba1eed): **BREAKING**: Connection lookups now take a `query` object instead of a `url`. Every connection type declares which query it accepts, so types that are not identified by a URL can be looked up by other identifiers. All built-in connection types are still matched by URL, so existing lookups just move the URL into the query:

  ```ts
  const connection = await connections.find({
    type: 'github',
    query: { url },
    authMethods: ['app', 'token'],
  });
  ```

  Connections returned from a lookup now also include their `type`.

- [`1bfed76`](https://github.com/backstage/backstage/commit/1bfed76): **BREAKING**: Changed connection types to use portable configuration schemas as the source of root connection types, with JSON Schema generation and strongly typed parsing that do not expose the underlying Zod schemas.
- [`0733a78`](https://github.com/backstage/backstage/commit/0733a78): Added `buildConnectionsFromConfig`, which reads legacy `integrations` configuration together with `connections` configuration and returns the fully validated and merged list of connections. This makes it possible to implement a custom connections service without duplicating the built-in conversion of legacy integrations configuration. The shape of the returned connections is described by the new `ConfiguredConnection` type.

  **BREAKING**: The `RootConnectionAuth` type has been renamed to `ConfiguredConnectionAuth`.

##### Patch Changes

- [`b9e11d2`](https://github.com/backstage/backstage/commit/b9e11d2): Updated GitHub authentication selection to prefer an organization-specific App, then an unrestricted App, and finally the only configured App before falling back to token or anonymous authentication.
- [`a4b6efa`](https://github.com/backstage/backstage/commit/a4b6efa): Added a new `aws` connection type for AWS account credentials, looked up by AWS account number or ARN rather than by URL. A single `account` auth method covers all accounts: one entry per account with static keys, a profile, or IAM role assumption, and at most one entry marked `mainAccount: true` that acts as the fallback for the environment's own account. A connection-level `roleName` (with optional `partition`, `region`, `externalId`, and `webIdentityTokenFile`) describes a role to assume in any account that has no entry of its own. Configurations with duplicate account IDs or multiple main account entries are rejected at startup, and legacy top-level `aws` configuration is converted automatically, with explicit `connections` config taking precedence.

  Connection types can now declare a whole-connection validation step that runs after the configuration schemas have parsed, enabling rules that span multiple auth entries or combine connection settings with auth entries. Each auth entry includes its plugin `match`, allowing rules to take plugin scoping into account. Connection types also expose a type-level `auth` accessor describing the shape of their configured auth entries, mirroring the existing `query` accessor.

- [`f60a23a`](https://github.com/backstage/backstage/commit/f60a23a): Require every connection to configure at least one auth method. Use the `none` auth method for unauthenticated connections.
- [`c0f9a7d`](https://github.com/backstage/backstage/commit/c0f9a7d): Removed the unsupported unauthenticated AWS CodeCommit auth option. AWS CodeCommit connections now only expose access key or assume role authentication.

#### 0.2.0

##### Minor Changes

- [`58c53b1`](https://github.com/backstage/backstage/commit/58c53b1): Added a `title` field to connection auth methods, providing a human-readable display name for each configured authentication option. Connection type authors must now provide a `title` for each auth method definition, while connection configuration may optionally override the title per auth entry. When not explicitly configured, the auth entry title defaults to the auth method title defined by the connection type.

##### Patch Changes

- [`ec96761`](https://github.com/backstage/backstage/commit/ec96761): Added a default implementation for the connections service so backend modules can depend on it without requiring apps to explicitly install the connections service factory.

### `@backstage/create-app` (0.8.4 → [0.9.1](../../changelogs/@backstage/create-app.md#091))

#### 0.9.1

##### Patch Changes

- [`943687f`](https://github.com/backstage/backstage/commit/943687f): Generated backend Dockerfiles no longer disable the Node.js snapshot or install native build dependencies for the Scaffolder.
- [`97bd51f`](https://github.com/backstage/backstage/commit/97bd51f): Bumped create-app version.
- [`9138f34`](https://github.com/backstage/backstage/commit/9138f34): Added a GitHub Actions CI workflow to the default app template. New Backstage instances created with `create-app` now include a `.github/workflows/ci.yml` that runs lint, type checking, tests, configuration validation, and a Docker image build on every pull request.
- [`a178067`](https://github.com/backstage/backstage/commit/a178067): Added a pre-configured Home page with a customizable widget grid to the default create-app template.
- [`0b8573f`](https://github.com/backstage/backstage/commit/0b8573f): Clarified that the host build steps must use the same Node version as the Docker base image in the Dockerfile.
- [`2828e31`](https://github.com/backstage/backstage/commit/2828e31): Added a prerequisites check when creating a new app that validates Node.js LTS version and Yarn availability before proceeding, and warns if Python is not found.
- [`ee4a9f6`](https://github.com/backstage/backstage/commit/ee4a9f6): Fixed the example scaffolder template so the component name field validates against the allowed entity-name format, preventing names with spaces that would fail catalog registration.

#### 0.9.0

##### Minor Changes

- [`39deda4`](https://github.com/backstage/backstage/commit/39deda4): **BREAKING**: No longer bootstraps legacy proxy agents. Use Node.js built-in proxy support by setting `NODE_USE_ENV_PROXY=1` alongside your `HTTP_PROXY`/`HTTPS_PROXY`/`NO_PROXY` environment variables instead.

##### Patch Changes

- [`fc4cae1`](https://github.com/backstage/backstage/commit/fc4cae1): Added the user settings backend plugin to the create-app templates, enabling database-backed user settings persistence for newly created Backstage apps out of the box. The frontend storage API is also wired up to use backend-persisted storage instead of browser local storage, via the new `@backstage/plugin-app-module-user-settings` module.
- [`a5bddd1`](https://github.com/backstage/backstage/commit/a5bddd1): Bumped create-app version.
- [`e2b3472`](https://github.com/backstage/backstage/commit/e2b3472): Updated generated app configurations to use the stable Client ID Metadata Documents setting and stop advertising deprecated Dynamic Client Registration.
- [`3acdf87`](https://github.com/backstage/backstage/commit/3acdf87): Pinned `@types/node` to `22.20.0` in the seed lockfile to prevent yarn from resolving the `*` wildcard (from `@jest/environment-jsdom-abstract`) to `@types/node@26.0.0`, which breaks `tsc:full` due to incompatible `EventEmitter` types in `tarn`.
- [`3a9ab3f`](https://github.com/backstage/backstage/commit/3a9ab3f): Fixed an issue where two "Notifications" links were displayed in the sidebar.

### `@backstage/frontend-plugin-api` (0.17.2 → [0.18.0](../../changelogs/@backstage/frontend-plugin-api.md#0180))

#### 0.18.0

##### Minor Changes

- [`907793c`](https://github.com/backstage/backstage/commit/907793c): **BREAKING**: Removed the deprecated `config.schema` option for extensions and extension blueprints. Use the top-level `configSchema` option with Standard Schema-compatible schema values, such as Zod v4.

##### Patch Changes

- [`e156f1e`](https://github.com/backstage/backstage/commit/e156f1e): Added support for using a `SubRouteRef` as the parent of another `SubRouteRef`. Child paths are combined with ancestor paths at creation, and nested sub-routes inherit parameters from their complete ancestor chain.

#### 0.17.3

##### Patch Changes

- [`a5b2811`](https://github.com/backstage/backstage/commit/a5b2811): Adds `useBreadcrumbEntries` hook, `BreadcrumbEntry` component, and `BreadcrumbsRegistryProvider` for managing breadcrumb trails across the component tree for plugins using new frontend system. Completes wiring so that new frontend system plugin `Pages` and `SubPages` get automatic-population of `PluginHeader` breadcrumbs.

  - The app plugin's `PageLayout` registers a root breadcrumb for each plugin page and passes the breadcrumb trail to `PluginHeader`
  - `PageBlueprint` automatically wraps each sub-page route element with `BreadcrumbEntry`, so sub-pages contribute to the PluginHeader breadcrumb trail without extra wiring.
  - Plugin authors who need breadcrumbs for internal routes within a sub-page can wrap their route content with `BreadcrumbEntry` manually.
    - `plugin-scaffolder` internal routes have been wrapped as an example

### `@backstage/plugin-auth-backend` (0.29.1 → [0.30.0](../../changelogs/@backstage/plugin-auth-backend.md#0300))

#### 0.30.0

##### Minor Changes

- [`274acc5`](https://github.com/backstage/backstage/commit/274acc5): **BREAKING**: The OAuth redirect URI and client ID metadata document allowlists now match patterns against each URL component separately instead of against the full URL string. Wildcards no longer match across the host and path boundary, patterns must include an explicit protocol and are otherwise rejected as invalid configuration instead of being silently ignored, and redirect URIs that contain embedded credentials are always rejected.

  A wildcard port also no longer implicitly matches every path: a pattern such as `http://localhost:*` now only matches the root path. Use `http://localhost:*/*` to allow any port and any path. The built-in loopback defaults have been updated accordingly, so this only affects explicitly configured patterns.

##### Patch Changes

- [`4e884d2`](https://github.com/backstage/backstage/commit/4e884d2): Skip SSRF protection for CIMD metadata fetches when the `client_id` matches an exact (non-wildcard) entry in `allowedClientIdPatterns`. Exact patterns mean the administrator explicitly listed a specific URL, so the DNS resolution is trusted. Wildcard patterns still enforce the SSRF check to protect against attacker-controlled subdomains resolving to internal addresses.
- [`a995892`](https://github.com/backstage/backstage/commit/a995892): Allow ChatGPT Codex clients to use Client ID Metadata Documents by default.
- [`827989d`](https://github.com/backstage/backstage/commit/827989d): Fixed the built-in CLI client being rejected when `allowedClientIdPatterns` is configured for Client ID Metadata Documents.

#### 0.29.2

##### Patch Changes

- [`e2b3472`](https://github.com/backstage/backstage/commit/e2b3472): Promoted Client ID Metadata Documents (CIMD) to the stable `auth.clientIdMetadataDocuments` configuration. The previous `auth.experimentalClientIdMetadataDocuments` key remains supported as a deprecated alias. Dynamic Client Registration now logs a deprecation warning when enabled and users should migrate to CIMD.
- [`2aeb246`](https://github.com/backstage/backstage/commit/2aeb246): Added token revocation support for clients using client ID metadata documents (CIMD). The `/v1/revoke` endpoint is now available whenever dynamic client registration or client ID metadata documents are enabled, and is advertised through `revocation_endpoint` in the OpenID provider configuration.

### `@backstage/plugin-catalog` (2.0.6 → [2.0.8](../../changelogs/@backstage/plugin-catalog.md#208))

#### 2.0.8

##### Patch Changes

- [`80b37b3`](https://github.com/backstage/backstage/commit/80b37b3): Fixed the `AboutField` label in the About card using `variant="inherit"` instead of `variant="h2"` to prevent theme typography overrides from changing the intended 10px label size.
- [`05aed2e`](https://github.com/backstage/backstage/commit/05aed2e): Fixed a brief "Entity not found" flash when navigating between catalog entity pages.
- [`1d026b0`](https://github.com/backstage/backstage/commit/1d026b0): Added explicit type annotations to `FilterContainer` and `EntityListContainer` re-exports for forward-compatibility with TypeScript 7.

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

### `@backstage/plugin-catalog-react` (3.1.0 → [3.2.1](../../changelogs/@backstage/plugin-catalog-react.md#321))

#### 3.2.1

##### Patch Changes

- [`9fcfbc9`](https://github.com/backstage/backstage/commit/9fcfbc9): Fixed a performance issue where all components reading the entity context on an entity page would rerender unnecessarily whenever the page rendered again without the entity data having changed, for example when a URL query parameter changed. This was particularly noticeable when switching tabs in the entity inspector dialog, which caused the entire underlying page to rerender.
- [`e766061`](https://github.com/backstage/backstage/commit/e766061): Fixed an issue where the "Owned" count in `UserListPicker` would display the total number of catalog entities instead of 0 when the logged-in user has no ownership entity refs. The empty `relations.ownedBy` filter was being silently dropped by the catalog client, causing the backend to return all entities with no ownership filter applied.

  This was a regression introduced in #22131, which removed an explicit `ownershipEntityRefs?.length === 0` guard that had been present since #20339.

- [`ed462ad`](https://github.com/backstage/backstage/commit/ed462ad): Fixed `EntityOwnerPicker` in `owners-only` mode to display human-readable entity titles (from `metadata.title` or `spec.profile.displayName`) instead of opaque internal names, both in the dropdown list and in the selected owner chips. The owner list is now virtualized, keeping the picker responsive for catalogs with large numbers of owner entities.

#### 3.2.0

##### Minor Changes

- [`ba49e37`](https://github.com/backstage/backstage/commit/ba49e37): **BREAKING ALPHA**: The `EntityContextMenuItemBlueprint` now outputs menu item data instead of a rendered MUI element. The Catalog entity page consumes this data and renders BUI menu items.

  The source-level `icon`, `useProps`, and filter authoring model remains, with `icon` now typed as `IconElement`. We recommend using Remix icons and checking that custom icons follow the standard icon sizing requirements.

  Menu items close immediately when selected, including while asynchronous actions are pending.

- [`15719cc`](https://github.com/backstage/backstage/commit/15719cc): Added an alpha BUI-ready entity header layout extension point. Its loaded component receives Catalog-composed tabs and the active tab ID, allowing custom entity headers to preserve or customize entity-page navigation.

  **DEPRECATED ALPHA**: The existing opaque entity header extension point is deprecated. It continues to work through a temporary Catalog legacy-layout fallback so adopters can migrate custom entity headers incrementally.

##### Patch Changes

- [`8a500d5`](https://github.com/backstage/backstage/commit/8a500d5): Fixed a regression where `EntityTypePicker`'s `initialFilter` prop was being cleared when used alongside `EntityKindPicker` inside `EntityListProvider`. The type filter is now correctly preserved after the available types load for the selected kind.

### `@backstage/plugin-mcp-actions-backend` (0.1.14 → [0.2.1](../../changelogs/@backstage/plugin-mcp-actions-backend.md#021))

#### 0.2.1

##### Patch Changes

- [`ec2b90f`](https://github.com/backstage/backstage/commit/ec2b90f): Added support for configuring MCP server instructions for both default and named servers.
- [`d7d03d9`](https://github.com/backstage/backstage/commit/d7d03d9): Replaced duplicated documentation in the README with a link to the full docs on `backstage.io`.
- [`e4983fd`](https://github.com/backstage/backstage/commit/e4983fd): Added audit logging for MCP server operations using the Backstage Auditor Service. The plugin now emits `connection`, `tool-discovery`, and `tool-execution` audit events, allowing adopters to monitor and audit MCP server activity.
- [`9937a99`](https://github.com/backstage/backstage/commit/9937a99): Added `scopes_supported` to the OAuth 2.0 Protected Resource Metadata (RFC 9728) response. Without this field, RFC-compliant MCP clients did not know which scope to request and never received a refresh token, causing sessions to expire with the short-lived access token. The field now includes `openid`, and also `offline_access` when `auth.experimentalRefreshToken` is enabled.

#### 0.2.0

##### Minor Changes

- [`567bc4c`](https://github.com/backstage/backstage/commit/567bc4c): **BREAKING**: Removed the deprecated Server-Sent Events (SSE) MCP transport. MCP clients must use the Streamable HTTP endpoint at `/api/mcp-actions/v1` or a configured named-server endpoint.

##### Patch Changes

- [`e2b3472`](https://github.com/backstage/backstage/commit/e2b3472): Updated OAuth discovery to use the stable `auth.clientIdMetadataDocuments` configuration while retaining compatibility with the deprecated experimental key.

### `@backstage/repo-tools` (0.17.3 → [0.19.0](../../changelogs/@backstage/repo-tools.md#0190))

#### 0.19.0

##### Minor Changes

- [`0804116`](https://github.com/backstage/backstage/commit/0804116): **BREAKING**: Renamed the `repo schema openapi verify` command to `repo schema openapi validate`. Added a new `package schema openapi validate` command to validate that an OpenAPI spec is a valid OpenAPI 3.x document.

##### Patch Changes

- [`226817d`](https://github.com/backstage/backstage/commit/226817d): chore(deps): bump `js-yaml` from 4.2.0 to 4.3.0
- [`78bf918`](https://github.com/backstage/backstage/commit/78bf918): chore(deps): bump `tar` from 7.5.15 to 7.5.21

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

### `@backstage/ui` (0.16.0 → [0.17.1](../../changelogs/@backstage/ui.md#0171))

#### 0.17.1

##### Patch Changes

- [`52a58be`](https://github.com/backstage/backstage/commit/52a58be): Fixed Table not filling container width in Firefox when using `TableRoot` directly inside `ResizableTableContainer`. Changed `overflow: hidden` to `overflow: auto` on the resizable container so it handles scrolling for direct `TableRoot` usages.

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

## 0.0.x patch version bumps

### `@backstage/release-manifests` (0.0.13 → [0.0.14](../../changelogs/@backstage/release-manifests.md#0014))

#### 0.0.14

##### Patch Changes

- [`0ebb1f9`](https://github.com/backstage/backstage/commit/0ebb1f9): Migrated tests from MSW v1 to MSW v2.

## 0.x patch version bumps

### `@backstage/backend-defaults` (0.17.4 → [0.17.7](../../changelogs/@backstage/backend-defaults.md#0177))

#### 0.17.7

##### Patch Changes

- [`79c1d58`](https://github.com/backstage/backstage/commit/79c1d58): Fixed a bug in the Azure DevOps URL reader where the abort signal was not forwarded to the commits API fetch, causing the fetch to hang indefinitely when a build timeout or cancellation was triggered.
- [`b1b6c80`](https://github.com/backstage/backstage/commit/b1b6c80): Read-only actions now default to non-destructive when the destructive attribute is omitted.
- [`78bf918`](https://github.com/backstage/backstage/commit/78bf918): chore(deps): bump `tar` from 7.5.15 to 7.5.21
- [`bb98419`](https://github.com/backstage/backstage/commit/bb98419): TypeScript configuration schema warnings discovered while setting up secret redaction are now reported through the Backstage logger.
- [`74d8cbf`](https://github.com/backstage/backstage/commit/74d8cbf): Added a new public `@backstage/backend-defaults/rootSystemMetadata` entrypoint, exporting `rootSystemMetadataServiceFactory` and `DefaultRootSystemMetadataService`. The system metadata service is now registered automatically as a default service, so backends no longer need to add it manually.
- [`e56d23c`](https://github.com/backstage/backstage/commit/e56d23c): Throw an error when `payload.uip` is missing in `createLimitedUserToken` instead of constructing an invalid limited token with an undefined signature.

#### 0.17.5

##### Patch Changes

- [`aaa7d65`](https://github.com/backstage/backstage/commit/aaa7d65): Improved readability of the AWS S3 URL parser by splitting the single monolithic regex into two separate patterns (standard S3 and VPC PrivateLink) with named capture groups. Also made the VPC endpoint region mandatory in the regex, fixing a potential mis-parse when the region segment was absent.
- [`d62c384`](https://github.com/backstage/backstage/commit/d62c384): Fixed a bug where scheduled tasks that were initially registered with a manual trigger and later re-registered with a duration or cron cadence would never be scheduled to run.
- [`8419f51`](https://github.com/backstage/backstage/commit/8419f51): Added support for AWS PrivateLink for Amazon S3.
- [`a624fa3`](https://github.com/backstage/backstage/commit/a624fa3): The `connection` config option for the Redis cache store now accepts either a string URL or an object with additional connection options that are passed directly to the underlying client. The object form is only supported when `backend.cache.store` is `redis`; other stores require a plain string. This allows configuring options like `pingInterval` without needing dedicated config fields. For clustered Redis, the connection object properties are merged into cluster defaults. Fixes https://github.com/backstage/backstage/issues/31813, https://github.com/backstage/backstage/issues/31742.

### `@backstage/backend-dynamic-feature-service` (0.8.3 → [0.8.6](../../changelogs/@backstage/backend-dynamic-feature-service.md#086))

#### 0.8.6

##### Patch Changes

- [`bb98419`](https://github.com/backstage/backstage/commit/bb98419): TypeScript configuration schema warnings discovered while setting up secret redaction are now reported through the Backstage logger.

### `@backstage/cli` (0.36.3 → [0.36.5](../../changelogs/@backstage/cli.md#0365))

#### 0.36.4

##### Patch Changes

- [`61d4881`](https://github.com/backstage/backstage/commit/61d4881): The shared ESLint configuration now reports unused imports in `config.d.ts` configuration schema files. These declaration files are not covered by the TypeScript compiler's unused-variable checks, which previously allowed a stray import to slip through. Such an import can resolve during local development but break configuration schema loading for consumers of the published package, so it is now caught at lint time.

### `@backstage/cli-module-build` (0.1.4 → [0.1.7](../../changelogs/@backstage/cli-module-build.md#017))

#### 0.1.7

##### Patch Changes

- [`943687f`](https://github.com/backstage/backstage/commit/943687f): Stopped disabling the Node.js snapshot by default when starting backends or running tests.
- [`4d7b153`](https://github.com/backstage/backstage/commit/4d7b153): chore(deps): bump `shell-quote` from 1.8.4 to 1.9.0
- [`78bf918`](https://github.com/backstage/backstage/commit/78bf918): chore(deps): bump `tar` from 7.5.15 to 7.5.21
- [`bb98419`](https://github.com/backstage/backstage/commit/bb98419): Package preparation for publishing validates TypeScript configuration schemas strictly, preventing invalid schemas from being published. Other build and bundle paths report schema errors as warnings.

#### 0.1.5

##### Patch Changes

- [`87af6ce`](https://github.com/backstage/backstage/commit/87af6ce): Package preparation now converts TypeScript configuration schemas to separate JSON files. Backend builds compile schemas together before assembling the distribution workspace, while package publishing compiles each schema independently.
- [`853bcba`](https://github.com/backstage/backstage/commit/853bcba): Improved caching for Module Federation remote builds by extracting dependencies into separate content-hashed chunks.
- [`3cce70f`](https://github.com/backstage/backstage/commit/3cce70f): Increase generated frontend static asset filename hashes to 12 characters to reduce the chance of collisions across long-lived cached builds.
- [`da820d1`](https://github.com/backstage/backstage/commit/da820d1): Added support for passing custom flags to the embedded postgres processes via `backend.database.connection.flags.postgres` and `backend.database.connection.flags.initdb` configuration properties.

### `@backstage/cli-module-config` (0.1.3 → [0.1.6](../../changelogs/@backstage/cli-module-config.md#016))

#### 0.1.6

##### Patch Changes

- [`bb98419`](https://github.com/backstage/backstage/commit/bb98419): The `--strict` flag for `config:check` now treats TypeScript configuration schema errors as fatal. The same flag is now also available for `config:schema`.

### `@backstage/cli-module-lint` (0.1.3 → [0.1.5](../../changelogs/@backstage/cli-module-lint.md#015))

#### 0.1.5

##### Patch Changes

- [`4d7b153`](https://github.com/backstage/backstage/commit/4d7b153): chore(deps): bump `shell-quote` from 1.8.4 to 1.9.0

### `@backstage/cli-module-new` (0.1.4 → [0.1.6](../../changelogs/@backstage/cli-module-new.md#016))

#### 0.1.6

##### Patch Changes

- [`90ef477`](https://github.com/backstage/backstage/commit/90ef477): Added a new `permission-policy-module` template for scaffolding custom permission policies via `backstage-cli new`. The template generates a backend module that wires a `PermissionPolicy` implementation into the permission backend using the `policyExtensionPoint`, along with a test example.
- [`88b2bbf`](https://github.com/backstage/backstage/commit/88b2bbf): Added a `search-collator-module` template for scaffolding new search collator modules via `backstage-cli new`.
- [`2c7cc55`](https://github.com/backstage/backstage/commit/2c7cc55): Added a new `catalog-processor-module` template for scaffolding catalog processor modules via `backstage-cli new`.
- [`8ccc09b`](https://github.com/backstage/backstage/commit/8ccc09b): Fixed `yarn new` failing with "No version available" for several templates by adding missing packages to the version map.
- [`0e6007f`](https://github.com/backstage/backstage/commit/0e6007f): Updated the `plugin-web-library` template to use `toastApiRef` from `@backstage/frontend-plugin-api` instead of the deprecated `alertApiRef` from `@backstage/core-plugin-api`.
- [`90bbc2e`](https://github.com/backstage/backstage/commit/90bbc2e): Added `UserInfoService` to the `permission-policy-module` template so that scaffolded permission policies have the service already wired up for ownership lookups.
- [`10887f4`](https://github.com/backstage/backstage/commit/10887f4): Fixed generated frontend plugin tables to identify their row header, and added the associated backend plugin package as a development dependency of generated backend plugin modules.

#### 0.1.5

##### Patch Changes

- [`28c1c1c`](https://github.com/backstage/backstage/commit/28c1c1c): Synced zod-validation-error versions between packages

### `@backstage/cli-module-test-jest` (0.1.3 → [0.1.5](../../changelogs/@backstage/cli-module-test-jest.md#015))

#### 0.1.5

##### Patch Changes

- [`943687f`](https://github.com/backstage/backstage/commit/943687f): Stopped disabling the Node.js snapshot by default when starting backends or running tests.

### `@backstage/core-components` (0.18.11 → [0.18.13](../../changelogs/@backstage/core-components.md#01813))

#### 0.18.13

##### Patch Changes

- [`226817d`](https://github.com/backstage/backstage/commit/226817d): chore(deps): bump `js-yaml` from 4.2.0 to 4.3.0
- [`a4759e6`](https://github.com/backstage/backstage/commit/a4759e6): Migrated tests from MSW v1 to MSW v2.
- [`96cd953`](https://github.com/backstage/backstage/commit/96cd953): Fixed the `DependencyGraph` component to avoid a jarring initial render where nodes briefly pile up at overlapping positions before animating into place. The graph content is now hidden until node measurements are complete and the layout has fully settled, then revealed at the correct positions with transitions suppressed for the first frame.

  Also fixed a `containerRef` recreation chain where every graph dimension change caused the container measurement callback to be recreated and re-triggered, producing unnecessary re-renders during initial layout.

#### 0.18.12

##### Patch Changes

- [`120e7c3`](https://github.com/backstage/backstage/commit/120e7c3): chore(deps): bump `js-yaml` from 4.1.1 to 4.2.0
- [`9efce7d`](https://github.com/backstage/backstage/commit/9efce7d): Fixed the table filters sidebar rendering a stray `0` when no filters are configured.
- [`7ceeaad`](https://github.com/backstage/backstage/commit/7ceeaad): Migrated CopyTextButton component from Material-UI to Backstage UI (BUI). Replaced MUI IconButton and Tooltip with BUI ButtonIcon and TooltipTrigger/Tooltip components. This is an internal refactoring that maintains backward compatibility - the component API remains unchanged.

### `@backstage/eslint-plugin` (0.3.1 → [0.3.2](../../changelogs/@backstage/eslint-plugin.md#032))

#### 0.3.2

##### Patch Changes

- [`1d026b0`](https://github.com/backstage/backstage/commit/1d026b0): Fixed `visitImports` to return an empty object instead of `undefined` for forward-compatibility with TypeScript 7's stricter return type checking.

### `@backstage/filter-predicates` (0.1.3 → [0.1.4](../../changelogs/@backstage/filter-predicates.md#014))

#### 0.1.4

##### Patch Changes

- [`28c1c1c`](https://github.com/backstage/backstage/commit/28c1c1c): Synced zod-validation-error versions between packages

### `@backstage/frontend-app-api` (0.16.5 → [0.16.7](../../changelogs/@backstage/frontend-app-api.md#0167))

#### 0.16.7

##### Patch Changes

- [`6497d0f`](https://github.com/backstage/backstage/commit/6497d0f): Respect explicit API reference plugin ownership when resolving conflicting API factories.
- [`a8b5ba6`](https://github.com/backstage/backstage/commit/a8b5ba6): Updated dependencies.

#### 0.16.6

##### Patch Changes

- [`74fbcd7`](https://github.com/backstage/backstage/commit/74fbcd7): Extension `if` predicates now support specifying an `action` attribute in the permission reference. When a permission name contains a `#` separator (e.g. `catalog.entity.read#read`), the part after `#` is used as `attributes.action` when evaluating the permission. This removes the need to configure action attributes separately for basic permissions.
- [`6ea6d31`](https://github.com/backstage/backstage/commit/6ea6d31): Internal refactor of the specialized app sign-in runtime to initialize it once instead of reassigning it.

### `@backstage/frontend-dynamic-feature-loader` (0.1.13 → [0.1.15](../../changelogs/@backstage/frontend-dynamic-feature-loader.md#0115))

#### 0.1.15

##### Patch Changes

- [`6ea4a2d`](https://github.com/backstage/backstage/commit/6ea4a2d): Updated documentation link to point to the new per-module CLI command pages.
- [`a4759e6`](https://github.com/backstage/backstage/commit/a4759e6): Migrated tests from MSW v1 to MSW v2.

#### 0.1.14

##### Patch Changes

- [`a5e35e9`](https://github.com/backstage/backstage/commit/a5e35e9): Added package installation and import instructions to the README file.

### `@backstage/frontend-test-utils` (0.6.1 → [0.6.3](../../changelogs/@backstage/frontend-test-utils.md#063))

#### 0.6.3

##### Patch Changes

- [`bd435c3`](https://github.com/backstage/backstage/commit/bd435c3): Identity mocks passed to `renderInTestApp` (for example via `mockApis.identity(...)`) are now applied before the app's built-in guest fallback, so the configured `userEntityRef` reliably takes effect in tests instead of being silently overwritten by the default guest user.

### `@backstage/integration-aws-node` (0.2.0 → [0.2.1](../../changelogs/@backstage/integration-aws-node.md#021))

#### 0.2.1

##### Patch Changes

- [`4ce59cc`](https://github.com/backstage/backstage/commit/4ce59cc): Added an alpha `createAwsCredentialsManagerFromConnection` export that creates an `AwsCredentialsManager` backed by the connections system, allowing AWS credential resolution through the new `aws` connection type. The existing configuration-based setup is unchanged.

### `@backstage/plugin-api-docs` (0.14.2 → [0.14.4](../../changelogs/@backstage/plugin-api-docs.md#0144))

#### 0.14.4

##### Patch Changes

- [`b7085d1`](https://github.com/backstage/backstage/commit/b7085d1): Fixed deep linking in OpenAPI definition widget.
- [`a8b5ba6`](https://github.com/backstage/backstage/commit/a8b5ba6): Updated dependencies.

### `@backstage/plugin-app` (0.5.0 → [0.5.2](../../changelogs/@backstage/plugin-app.md#052))

#### 0.5.2

##### Patch Changes

- [`2dd51e6`](https://github.com/backstage/backstage/commit/2dd51e6): Fixed config-driven route redirects to preserve the query string and fragment from the original URL. Previously, redirects declared under `app.extensions[].app/routes.config.redirects` silently dropped everything after `?` or `#` in the incoming URL.

#### 0.5.1

##### Patch Changes

- [`a5b2811`](https://github.com/backstage/backstage/commit/a5b2811): Adds `useBreadcrumbEntries` hook, `BreadcrumbEntry` component, and `BreadcrumbsRegistryProvider` for managing breadcrumb trails across the component tree for plugins using new frontend system. Completes wiring so that new frontend system plugin `Pages` and `SubPages` get automatic-population of `PluginHeader` breadcrumbs.

  - The app plugin's `PageLayout` registers a root breadcrumb for each plugin page and passes the breadcrumb trail to `PluginHeader`
  - `PageBlueprint` automatically wraps each sub-page route element with `BreadcrumbEntry`, so sub-pages contribute to the PluginHeader breadcrumb trail without extra wiring.
  - Plugin authors who need breadcrumbs for internal routes within a sub-page can wrap their route content with `BreadcrumbEntry` manually.
    - `plugin-scaffolder` internal routes have been wrapped as an example

- [`3ef5974`](https://github.com/backstage/backstage/commit/3ef5974): Added support for wildcard plugin entries in frontend discovery endpoints, matching the backend discovery behavior.
- [`6172725`](https://github.com/backstage/backstage/commit/6172725): Fixed the default fetch API to support discovery endpoints that only define an internal target.

### `@backstage/plugin-app-react` (0.2.4 → [0.2.6](../../changelogs/@backstage/plugin-app-react.md#026))

#### 0.2.6

##### Patch Changes

- [`a8b5ba6`](https://github.com/backstage/backstage/commit/a8b5ba6): Updated dependencies.

### `@backstage/plugin-auth-backend-module-auth0-provider` (0.4.2 → [0.4.4](../../changelogs/@backstage/plugin-auth-backend-module-auth0-provider.md#044))

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

### `@backstage/plugin-auth-backend-module-microsoft-provider` (0.3.16 → [0.3.18](../../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#0318))

#### 0.3.18

##### Patch Changes

- [`7ccaf9d`](https://github.com/backstage/backstage/commit/7ccaf9d): Fixed an issue where acquiring tokens with non-Graph scopes (such as Azure Management API) would crash the sign-in resolver because the user profile was unavailable. This affected both the initial sign-in and later token refreshes. The Microsoft authenticator now makes a separate Graph API call to fetch the profile when the primary token targets a different resource. Setting the `skipUserProfile` configuration option to true disables this extra call.

### `@backstage/plugin-auth-node` (0.7.2 → [0.7.4](../../changelogs/@backstage/plugin-auth-node.md#074))

#### 0.7.4

##### Patch Changes

- [`7ca2955`](https://github.com/backstage/backstage/commit/7ca2955): Fix OAuth start handler crashing with a 500 error on malformed origins, now returns a 400 error.

#### 0.7.3

##### Patch Changes

- [`28c1c1c`](https://github.com/backstage/backstage/commit/28c1c1c): Synced zod-validation-error versions between packages

### `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.5.15 → [0.5.17](../../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#0517))

#### 0.5.17

##### Patch Changes

- [`74d8cbf`](https://github.com/backstage/backstage/commit/74d8cbf): The internal OpenAPI documentation provider now automatically discovers installed plugins via the system metadata service. The `catalog.providers.backstageOpenapi.plugins` configuration option is now optional and deprecated; when omitted, all installed plugins are discovered dynamically.

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.7.13 → [0.7.15](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#0715))

#### 0.7.15

##### Patch Changes

- [`870acb3`](https://github.com/backstage/backstage/commit/870acb3): Moved detailed documentation from the README to the Backstage docs site. The README now contains installation instructions and links to the full documentation.

### `@backstage/plugin-catalog-backend-module-msgraph` (0.10.3 → [0.10.5](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#0105))

#### 0.10.4

##### Patch Changes

- [`06bf22e`](https://github.com/backstage/backstage/commit/06bf22e): Configuring `userGroupMember.path` together with `user.filter` is now rejected with a configuration error, as the two options are mutually exclusive. This matches the existing validation for `userGroupMember.filter` and `userGroupMember.search`.

### `@backstage/plugin-catalog-graph` (0.6.5 → [0.6.7](../../changelogs/@backstage/plugin-catalog-graph.md#067))

#### 0.6.7

##### Patch Changes

- [`8babce3`](https://github.com/backstage/backstage/commit/8babce3): Fixed the catalog graph page so configured filter and graph defaults are applied when the page opens.

### `@backstage/plugin-catalog-import` (0.13.14 → [0.13.16](../../changelogs/@backstage/plugin-catalog-import.md#01316))

#### 0.13.16

##### Patch Changes

- [`74fb85d`](https://github.com/backstage/backstage/commit/74fb85d): Remove obsolete location import error handling in StepReviewLocation.

### `@backstage/plugin-catalog-unprocessed-entities` (0.2.32 → [0.2.34](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#0234))

#### 0.2.34

##### Patch Changes

- [`531495a`](https://github.com/backstage/backstage/commit/531495a): Migrated the Unprocessed Entities UI to the Backstage UI component library. The page, dialogs, and action buttons now use the new design system, and the raw entity definition and delete confirmation dialogs have an updated look and feel. The pending entities tab now also has a search box, matching the failed entities tab.

### `@backstage/plugin-events-backend-module-azure` (0.2.32 → [0.2.34](../../changelogs/@backstage/plugin-events-backend-module-azure.md#0234))

#### 0.2.33

##### Patch Changes

- [`9d23b9e`](https://github.com/backstage/backstage/commit/9d23b9e): Added HTTP POST webhook ingress endpoint for Azure DevOps events, matching the pattern established by the GitHub events module. The ingress endpoint is only registered when `events.modules.azureDevOps.webhookSecret` is configured; without it, no route is exposed. Incoming requests are validated against the `x-ado-webhook-secret` custom header using timing-safe comparison.

### `@backstage/plugin-home` (0.9.7 → [0.9.9](../../changelogs/@backstage/plugin-home.md#099))

#### 0.9.9

##### Patch Changes

- [`a178067`](https://github.com/backstage/backstage/commit/a178067): Added new frontend system widget blueprints for Most Visited, Recently Visited, World Clocks, and a configurable Toolkit. The home page now supports a `defaultConfig` for defining the initial grid layout via app-config.

#### 0.9.8

##### Patch Changes

- [`e9776b0`](https://github.com/backstage/backstage/commit/e9776b0): Optionally prevent duplicate widget additions via prop and added empty state for Add Widget dialog

### `@backstage/plugin-home-react` (0.1.39 → [0.1.41](../../changelogs/@backstage/plugin-home-react.md#0141))

#### 0.1.41

##### Patch Changes

- [`a178067`](https://github.com/backstage/backstage/commit/a178067): Added `HomePageDefaultConfigItem` type and optional `defaultConfig` prop to `HomePageLayoutProps`.

### `@backstage/plugin-kubernetes-backend` (0.21.5 → [0.21.7](../../changelogs/@backstage/plugin-kubernetes-backend.md#0217))

#### 0.21.7

##### Patch Changes

- [`684c9b9`](https://github.com/backstage/backstage/commit/684c9b9): Fixed `AwsIamStrategy` to resolve account-specific AWS credentials when an assume role ARN is configured, enabling support for `webIdentityTokenFile` and `accountDefaults` in environments without default AWS credentials.
- [`c6af8ac`](https://github.com/backstage/backstage/commit/c6af8ac): Added audit logging for kubernetes-backend routes. The plugin now emits auditor events for cluster list, cluster proxy, entity workload queries, custom resource queries, and the deprecated services endpoint. Administrators can filter audit logs by `eventId` values `cluster-fetch` and `resource-fetch`, and by `queryType` in event metadata.

  `KubernetesProxyOptions` accepts an optional `auditor` for adopters that construct the proxy directly. When omitted, proxy requests are handled as before without audit events.

- [`bac00a5`](https://github.com/backstage/backstage/commit/bac00a5): The Kubernetes API proxy now refreshes cached middleware when cluster details change, after a configurable TTL, or when the cache reaches its size limit. At startup, the backend logs a warning for each cluster configured with `skipTLSVerify: true`. Invalid cache configuration values fall back to defaults. Optional configuration is available under `kubernetes.proxy.middlewareCache`.
- [`f0834bd`](https://github.com/backstage/backstage/commit/f0834bd): Added a `kubernetes.clusterLocatorContinueOnError` configuration option. When set to `true`, a failing cluster locator no longer causes the entire cluster list request to fail — errors are logged and clusters from the remaining successful locators are still returned. The default is `false`, preserving the existing behavior.

### `@backstage/plugin-kubernetes-react` (0.5.21 → [0.5.23](../../changelogs/@backstage/plugin-kubernetes-react.md#0523))

#### 0.5.23

##### Patch Changes

- [`226817d`](https://github.com/backstage/backstage/commit/226817d): chore(deps): bump `js-yaml` from 4.2.0 to 4.3.0

#### 0.5.22

##### Patch Changes

- [`120e7c3`](https://github.com/backstage/backstage/commit/120e7c3): chore(deps): bump `js-yaml` from 4.1.1 to 4.2.0
- [`2ed90cd`](https://github.com/backstage/backstage/commit/2ed90cd): Fixed the published configuration schema so that it no longer references a file that is excluded from the package. This previously caused configuration schema extraction to fail in apps that depend on this plugin.

### `@backstage/plugin-notifications` (0.5.18 → [0.5.20](../../changelogs/@backstage/plugin-notifications.md#0520))

#### 0.5.19

##### Patch Changes

- [`73ea4d7`](https://github.com/backstage/backstage/commit/73ea4d7): Migrated tests to msw version 2.

### `@backstage/plugin-notifications-backend` (0.6.6 → [0.6.8](../../changelogs/@backstage/plugin-notifications-backend.md#068))

#### 0.6.8

##### Patch Changes

- [`3222945`](https://github.com/backstage/backstage/commit/3222945): Fixed notification recipient resolution to safely handle cyclic group relationships during group traversal, preventing endless recursion.

### `@backstage/plugin-notifications-backend-module-email` (0.3.22 → [0.3.24](../../changelogs/@backstage/plugin-notifications-backend-module-email.md#0324))

#### 0.3.24

##### Patch Changes

- [`a4e7831`](https://github.com/backstage/backstage/commit/a4e7831): Updated `nodemailer` from v8 to v9. The new major version validates TLS certificates by default when fetching remote content such as attachments or OAuth2 tokens. If your SMTP relay or OAuth2 endpoint uses a self-signed or otherwise untrusted certificate, email delivery may start failing. You can opt out per transport by setting `tls: { rejectUnauthorized: false }` in your nodemailer transport options.

### `@backstage/plugin-notifications-backend-module-slack` (0.4.3 → [0.4.5](../../changelogs/@backstage/plugin-notifications-backend-module-slack.md#045))

#### 0.4.5

##### Patch Changes

- [`4956d7f`](https://github.com/backstage/backstage/commit/4956d7f): Added support for routing notifications to a specific Slack channel via `payload.metadata.slackChannel`, with the existing entity annotation lookup as a fallback.

### `@backstage/plugin-notifications-node` (0.2.27 → [0.2.29](../../changelogs/@backstage/plugin-notifications-node.md#0229))

#### 0.2.28

##### Patch Changes

- [`73ea4d7`](https://github.com/backstage/backstage/commit/73ea4d7): Migrated tests to msw version 2.

### `@backstage/plugin-org` (0.7.5 → [0.7.7](../../changelogs/@backstage/plugin-org.md#077))

#### 0.7.6

##### Patch Changes

- [`9585e44`](https://github.com/backstage/backstage/commit/9585e44): Fixed the ownership card emitting duplicate React key warnings when different entity kinds share the same type.

### `@backstage/plugin-permission-backend` (0.7.13 → [0.7.15](../../changelogs/@backstage/plugin-permission-backend.md#0715))

#### 0.7.15

##### Patch Changes

- [`b754e32`](https://github.com/backstage/backstage/commit/b754e32): Migrated tests from MSW v1 to MSW v2.

### `@backstage/plugin-permission-common` (0.9.9 → [0.9.10](../../changelogs/@backstage/plugin-permission-common.md#0910))

#### 0.9.10

##### Patch Changes

- [`b754e32`](https://github.com/backstage/backstage/commit/b754e32): Migrated tests from MSW v1 to MSW v2.

### `@backstage/plugin-permission-node` (0.11.1 → [0.11.3](../../changelogs/@backstage/plugin-permission-node.md#0113))

#### 0.11.3

##### Patch Changes

- [`b754e32`](https://github.com/backstage/backstage/commit/b754e32): Migrated tests from MSW v1 to MSW v2.
- [`2c99b29`](https://github.com/backstage/backstage/commit/2c99b29): Permission rule parameter schemas now accept JSON Schema-compatible Standard Schema implementations, such as Zod v4. Zod v3 schemas remain supported but are deprecated.

### `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.3.7 → [0.3.9](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#039))

#### 0.3.9

##### Patch Changes

- [`4e8d763`](https://github.com/backstage/backstage/commit/4e8d763): Migrated tests from MSW v1 to MSW v2.

### `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.22 → [0.2.24](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#0224))

#### 0.2.24

##### Patch Changes

- [`4e8d763`](https://github.com/backstage/backstage/commit/4e8d763): Migrated tests from MSW v1 to MSW v2.

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.22 → [0.3.24](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#0324))

#### 0.3.24

##### Patch Changes

- [`4e8d763`](https://github.com/backstage/backstage/commit/4e8d763): Migrated tests from MSW v1 to MSW v2.

### `@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.22 → [0.2.24](../../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#0224))

#### 0.2.24

##### Patch Changes

- [`4e8d763`](https://github.com/backstage/backstage/commit/4e8d763): Migrated tests from MSW v1 to MSW v2.
- [`f83a652`](https://github.com/backstage/backstage/commit/f83a652): Made `description` parameter optional in `publish:gerrit` action.

### `@backstage/plugin-scaffolder-backend-module-gitea` (0.2.22 → [0.2.24](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#0224))

#### 0.2.24

##### Patch Changes

- [`4e8d763`](https://github.com/backstage/backstage/commit/4e8d763): Migrated tests from MSW v1 to MSW v2.

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.23 → [0.4.25](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0425))

#### 0.4.24

##### Patch Changes

- [`5e92512`](https://github.com/backstage/backstage/commit/5e92512): Fixed compatibility with yeoman-environment v4+, which is ESM-only. The previous require() call throws ERR_REQUIRE_ESM; replaced with dynamic import() and updated registration to match the v4+ API.

### `@backstage/plugin-scaffolder-node` (0.13.4 → [0.13.6](../../changelogs/@backstage/plugin-scaffolder-node.md#0136))

#### 0.13.6

##### Patch Changes

- [`78bf918`](https://github.com/backstage/backstage/commit/78bf918): chore(deps): bump `tar` from 7.5.15 to 7.5.21
- [`4e8d763`](https://github.com/backstage/backstage/commit/4e8d763): Migrated tests from MSW v1 to MSW v2.

### `@backstage/plugin-search-backend-module-explore` (0.3.15 → [0.3.17](../../changelogs/@backstage/plugin-search-backend-module-explore.md#0317))

#### 0.3.17

##### Patch Changes

- [`0dee0e6`](https://github.com/backstage/backstage/commit/0dee0e6): Migrated tests from MSW v1 to MSW v2.

### `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.3.21 → [0.3.23](../../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#0323))

#### 0.3.23

##### Patch Changes

- [`0dee0e6`](https://github.com/backstage/backstage/commit/0dee0e6): Migrated tests from MSW v1 to MSW v2.

### `@backstage/plugin-search-backend-module-techdocs` (0.4.15 → [0.4.17](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#0417))

#### 0.4.17

##### Patch Changes

- [`0dee0e6`](https://github.com/backstage/backstage/commit/0dee0e6): Migrated tests from MSW v1 to MSW v2.

### `@backstage/plugin-user-settings` (0.9.4 → [0.9.6](../../changelogs/@backstage/plugin-user-settings.md#096))

#### 0.9.6

##### Patch Changes

- [`4e8d763`](https://github.com/backstage/backstage/commit/4e8d763): Migrated tests from MSW v1 to MSW v2.

## Other minor version bumps

### `@backstage/backend-plugin-api` (1.9.2 → [1.10.0](../../changelogs/@backstage/backend-plugin-api.md#1100))

#### 1.10.0

##### Minor Changes

- [`74d8cbf`](https://github.com/backstage/backstage/commit/74d8cbf): Added `coreServices.rootSystemMetadata`, a new stable public service for reading metadata about the running Backstage system, including a list of installed plugins. Previously only available as an alpha API, it is now part of the standard `coreServices` namespace.

##### Patch Changes

- [`b1b6c80`](https://github.com/backstage/backstage/commit/b1b6c80): Documented the default destructive and read-only action attribute values.

### `@backstage/catalog-model` (1.9.0 → [1.10.0](../../changelogs/@backstage/catalog-model.md#1100))

#### 1.10.0

##### Minor Changes

- [`ad18743`](https://github.com/backstage/backstage/commit/ad18743): Added `marketplace` spec type to the `@alpha` AiResource kind, representing a curated registry of plugins for discovery and distribution. Marketplaces reference their contained plugins via `spec.plugins` entity references, generating `hasPart` catalog relations.
- [`f501302`](https://github.com/backstage/backstage/commit/f501302): Added `plugin` spec type to the `@alpha` AiResource kind, representing a packaged collection of skills distributed as a unit. Plugins reference their contained skills via `spec.skills` entity references, generating `hasPart` catalog relations.
- [`0b9b3bf`](https://github.com/backstage/backstage/commit/0b9b3bf): Added optional `allowedTools`, `license`, and `compatibility` fields to the `@alpha` AiResource skill spec, aligned with the agentskills.io specification.

##### Patch Changes

- [`9a6955c`](https://github.com/backstage/backstage/commit/9a6955c): Corrected catalog relation generation to honor declared kind combinations, and completed reverse relations for existing `AiResource` fields.

### `@backstage/config-loader` (1.10.12 → [1.11.2](../../changelogs/@backstage/config-loader.md#1112))

#### 1.11.2

##### Patch Changes

- [`0c67dbc`](https://github.com/backstage/backstage/commit/0c67dbc): Fix issue where `backstage-cli config:check --strict` would incorrectly reject valid configuration for open-ended object schemas, such as plain objects or map-like structures.
- [`bb98419`](https://github.com/backstage/backstage/commit/bb98419): Added an `onSchemaError` callback that allows callers to report TypeScript configuration schema errors and continue loading. The callback receives a `ConfigSchemaError` containing the source package and underlying cause. Without a handler, schema errors are thrown.

#### 1.11.0

##### Minor Changes

- [`4a7240b`](https://github.com/backstage/backstage/commit/4a7240b): Configuration schemas declared in TypeScript now resolve and validate imported types instead of treating them as unconstrained values. Invalid imports now cause schema loading to fail.

##### Patch Changes

- [`005458a`](https://github.com/backstage/backstage/commit/005458a): Added support for comma-separated values in the `BACKSTAGE_ENV` environment variable, allowing multiple environment-specific configuration files to be loaded and stacked at startup. For example, setting `BACKSTAGE_ENV=e2e-test,production` will load `app-config.e2e-test.yaml` and `app-config.production.yaml` in addition to the base `app-config.yaml`, with later environments taking priority. Local override files (`.local.yaml`) are always loaded after all non-local files.

### `@backstage/integration` (2.0.3 → [2.1.0](../../changelogs/@backstage/integration.md#210))

#### 2.1.0

##### Minor Changes

- [`dc951d4`](https://github.com/backstage/backstage/commit/dc951d4): Added support for creating a GitHub credentials provider backed by the connections service.

##### Patch Changes

- [`87bfe22`](https://github.com/backstage/backstage/commit/87bfe22): GitHub integrations now cache the list of app installations for a short period, avoiding a full `GET /app/installations` pagination on every token fetch. This significantly reduces API usage against the 15k/hour GitHub App rate limit for organizations with many installations or frequent credential refreshes.

  The cache is refreshed on a 10-minute TTL, and is additionally invalidated when a lookup for a previously-unseen owner occurs (throttled to once per minute) or when GitHub reports that a cached installation is no longer available, so newly added or removed installations are still picked up promptly.

### `@backstage/plugin-catalog-backend` (3.8.0 → [3.9.0](../../changelogs/@backstage/plugin-catalog-backend.md#390))

#### 3.9.0

##### Minor Changes

- [`c7c0ec3`](https://github.com/backstage/backstage/commit/c7c0ec3): Added a `refresh-catalog-entity` action so agents and MCP clients can re-queue a single entity for processing after creating or updating it — useful for reading back fresh data immediately after a scaffolder run without waiting for the next scheduled processing loop.

##### Patch Changes

- [`aa318d0`](https://github.com/backstage/backstage/commit/aa318d0): Migrated internal query filter handling from `EntityFilter` to `FilterPredicate`, simplifying the filter parsing and query application pipeline.
- [`10f0713`](https://github.com/backstage/backstage/commit/10f0713): Replaced the delete-all and reinsert pattern for the `relations` table with a diff-based sync that only touches rows that actually changed. In steady state (the common case), zero writes occur, eliminating write churn, dead tuples, and WAL traffic from the processing path. Stitching is now also skipped for relation neighbors that did not change.
- [`ee40136`](https://github.com/backstage/backstage/commit/ee40136): Fixed a missing promise return in a database migration rollback function.
- [`eb6dff2`](https://github.com/backstage/backstage/commit/eb6dff2): Fixed an issue where PostgreSQL deadlock errors during entity provider mutations were silently swallowed, causing entities to be dropped until the next full refresh. Transactions are now automatically retried on deadlock with exponential back-off.
- [`dd562f0`](https://github.com/backstage/backstage/commit/dd562f0): Fixed a potential MySQL deadlock during concurrent entity processing by retrying the `updateProcessedEntity` transaction on deadlock errors.
- [`b031a48`](https://github.com/backstage/backstage/commit/b031a48): Fixed an issue where SCM `location.moved` events would generate new locations in the database for files that were not actively tracked.
- [`b7650ad`](https://github.com/backstage/backstage/commit/b7650ad): Simplified internal router setup by removing unnecessary conditional guards around route registrations.

#### 3.8.1

##### Patch Changes

- [`28c1c1c`](https://github.com/backstage/backstage/commit/28c1c1c): Synced zod-validation-error versions between packages

### `@backstage/plugin-techdocs` (1.17.7 → [1.18.0](../../changelogs/@backstage/plugin-techdocs.md#1180))

#### 1.18.0

##### Minor Changes

- [`4f9ce5e`](https://github.com/backstage/backstage/commit/4f9ce5e): Add `initialFilter` config for `page:techdocs`. Valid options are `all`, `owned` and `starred`. Defaults to `owned`.

##### Patch Changes

- [`e06a951`](https://github.com/backstage/backstage/commit/e06a951): chore(deps): bump `dompurify` from 3.4.11 to 3.4.12

#### 1.17.8

##### Patch Changes

- [`34bda9e`](https://github.com/backstage/backstage/commit/34bda9e): chore(deps): bump `dompurify` from 3.4.5 to 3.4.9
- [`f2aa036`](https://github.com/backstage/backstage/commit/f2aa036): chore(deps): bump `dompurify` from 3.4.9 to 3.4.11
- [`b8db4fe`](https://github.com/backstage/backstage/commit/b8db4fe): The TechDocs plugin now adds the Documentation result type to the Search page when it is installed.
- [`65c7f98`](https://github.com/backstage/backstage/commit/65c7f98): Fixed duplicate React key warnings when documentation entities share a name across different namespaces or kinds.
- [`9459c14`](https://github.com/backstage/backstage/commit/9459c14): Fixed TechDocs pages sometimes rendering blank due to sanitizer hooks registered by other plugins.

## Other patch version bumps

### `@backstage/backend-app-api` (1.7.1 → [1.7.3](../../changelogs/@backstage/backend-app-api.md#173))

#### 1.7.3

##### Patch Changes

- [`64cea29`](https://github.com/backstage/backstage/commit/64cea29): Updated the backend runtime to use the internal connection service implementation after the shared connection contract moved into `@backstage/connections`.
- [`03133fc`](https://github.com/backstage/backstage/commit/03133fc): Hardened backend startup against malformed installed backend features, with contextual input errors and configured boot-failure handling when invalid registrations can be attributed to a plugin or module.

### `@backstage/backend-test-utils` (1.11.4 → [1.11.6](../../changelogs/@backstage/backend-test-utils.md#1116))

#### 1.11.6

##### Patch Changes

- [`b1b6c80`](https://github.com/backstage/backstage/commit/b1b6c80): Aligned mocked action attributes so read-only actions default to non-destructive.
- [`5ae46fc`](https://github.com/backstage/backstage/commit/5ae46fc): Added `mockServices.rootSystemMetadata` mock implementation to support the new stable `coreServices.rootSystemMetadata` service in tests.

#### 1.11.5

##### Patch Changes

- [`41c56b3`](https://github.com/backstage/backstage/commit/41c56b3): Fixed MySQL test database failures by pinning the Docker image from the floating `mysql:8` tag to `mysql:8.4` and replacing a startup flag that was removed in MySQL 8.4. Connection pool reduced from 50 to 5 per test database, idle connections are now reaped after 5 seconds, and container connection limits raised to 1000 for both MySQL and Postgres to handle parallel Jest workers on high-core machines.

### `@backstage/core-app-api` (1.20.2 → [1.20.4](../../changelogs/@backstage/core-app-api.md#1204))

#### 1.20.4

##### Patch Changes

- [`bd435c3`](https://github.com/backstage/backstage/commit/bd435c3): Identity mocks passed to `renderInTestApp` (for example via `mockApis.identity(...)`) are now applied before the app's built-in guest fallback, so the configured `userEntityRef` reliably takes effect in tests instead of being silently overwritten by the default guest user.
- [`a4759e6`](https://github.com/backstage/backstage/commit/a4759e6): Migrated tests from MSW v1 to MSW v2.

#### 1.20.3

##### Patch Changes

- [`3ef5974`](https://github.com/backstage/backstage/commit/3ef5974): Added support for wildcard plugin entries in frontend discovery endpoints, matching the backend discovery behavior.
- [`6172725`](https://github.com/backstage/backstage/commit/6172725): Fixed the default fetch API to support discovery endpoints that only define an internal target.

### `@backstage/core-plugin-api` (1.12.7 → [1.12.9](../../changelogs/@backstage/core-plugin-api.md#1129))

#### 1.12.9

##### Patch Changes

- [`9fcfbc9`](https://github.com/backstage/backstage/commit/9fcfbc9): Fixed a performance issue where all components using analytics, including every link, would rerender unnecessarily whenever a surrounding analytics context rendered again without its attributes having changed, for example when a URL query parameter changed on an entity page.

### `@backstage/plugin-gateway-backend` (1.1.6 → [1.1.8](../../changelogs/@backstage/plugin-gateway-backend.md#118))

#### 1.1.8

##### Patch Changes

- [`fa72461`](https://github.com/backstage/backstage/commit/fa72461): Updated dependency `@opentelemetry/core` to `^2.0.0`.
- [`9da01b6`](https://github.com/backstage/backstage/commit/9da01b6): chore(deps): bump `http-proxy-middleware` from 3.0.5 to 3.0.7

### `@backstage/plugin-scaffolder` (1.38.0 → [1.38.2](../../changelogs/@backstage/plugin-scaffolder.md#1382))

#### 1.38.2

##### Patch Changes

- [`9e773ee`](https://github.com/backstage/backstage/commit/9e773ee): Improves scaffolder entity pickers by using the catalog POST endpoint so large template filters are sent in the request body instead of the URL, helping avoid 431 errors and empty option lists.

#### 1.38.1

##### Patch Changes

- [`a5b2811`](https://github.com/backstage/backstage/commit/a5b2811): Adds `useBreadcrumbEntries` hook, `BreadcrumbEntry` component, and `BreadcrumbsRegistryProvider` for managing breadcrumb trails across the component tree for plugins using new frontend system. Completes wiring so that new frontend system plugin `Pages` and `SubPages` get automatic-population of `PluginHeader` breadcrumbs.

  - The app plugin's `PageLayout` registers a root breadcrumb for each plugin page and passes the breadcrumb trail to `PluginHeader`
  - `PageBlueprint` automatically wraps each sub-page route element with `BreadcrumbEntry`, so sub-pages contribute to the PluginHeader breadcrumb trail without extra wiring.
  - Plugin authors who need breadcrumbs for internal routes within a sub-page can wrap their route content with `BreadcrumbEntry` manually.
    - `plugin-scaffolder` internal routes have been wrapped as an example

- [`c32e636`](https://github.com/backstage/backstage/commit/c32e636): Fixed an issue where Bitbucket Cloud and Bitbucket Server hosts would not render the correct repository and branch picker fields in the Scaffolder.

### `@backstage/plugin-scaffolder-backend` (4.0.1 → [4.0.3](../../changelogs/@backstage/plugin-scaffolder-backend.md#403))

#### 4.0.3

##### Patch Changes

- [`4bbc088`](https://github.com/backstage/backstage/commit/4bbc088): Fixed the stale task janitor not being set up by passing the scheduler service to the router.
- [`943687f`](https://github.com/backstage/backstage/commit/943687f): Removed the native addon requirement from scaffolder template rendering. Templates now run through a TypeScript interpreter, and the backend no longer needs the `--no-node-snapshot` Node.js option.
- [`7ca434e`](https://github.com/backstage/backstage/commit/7ca434e): Scaffolder tasks now wait for recovery checkpoint state to be persisted before continuing, preventing later execution from racing ahead of stored recovery state. Restored checkpoints also preserve falsy values without re-running their callbacks.

#### 4.0.2

##### Patch Changes

- [`55902bb`](https://github.com/backstage/backstage/commit/55902bb): Fixed `DatabaseTaskStore.list` returning `totalTasks` as a string on PostgreSQL. knex returns a `COUNT(*)` aggregate as a string on PostgreSQL (the column is a bigint) while better-sqlite3 returns a number, so the count is now coerced with `Number(...)` and guarded with `Number.isSafeInteger(...)`. This in turn fixes the `list-scaffolder-tasks` action, whose output schema declares `totalTasks: z.number()` and previously failed validation in production with `Invalid output ... totalTasks: Expected number, received string`.

### `@backstage/plugin-scaffolder-common` (2.2.1 → [2.2.2](../../changelogs/@backstage/plugin-scaffolder-common.md#222))

#### 2.2.2

##### Patch Changes

- [`4e8d763`](https://github.com/backstage/backstage/commit/4e8d763): Migrated tests from MSW v1 to MSW v2.

### `@backstage/plugin-search` (1.7.5 → [1.7.7](../../changelogs/@backstage/plugin-search.md#177))

#### 1.7.7

##### Patch Changes

- [`a178067`](https://github.com/backstage/backstage/commit/a178067): Added a Home page search bar widget blueprint for the new frontend system.

#### 1.7.6

##### Patch Changes

- [`b8db4fe`](https://github.com/backstage/backstage/commit/b8db4fe): The Search page no longer shows the Documentation result type unless it is provided by an installed plugin.
- [`0103d8e`](https://github.com/backstage/backstage/commit/0103d8e): Include custom catalog entity kinds in the search page kind filter.

### `@backstage/plugin-techdocs-node` (1.15.1 → [1.15.3](../../changelogs/@backstage/plugin-techdocs-node.md#1153))

#### 1.15.3

##### Patch Changes

- [`226817d`](https://github.com/backstage/backstage/commit/226817d): chore(deps): bump `js-yaml` from 4.2.0 to 4.3.0

#### 1.15.2

##### Patch Changes

- [`120e7c3`](https://github.com/backstage/backstage/commit/120e7c3): chore(deps): bump `js-yaml` from 4.1.1 to 4.2.0

### `@backstage/plugin-techdocs-react` (1.3.12 → [1.3.14](../../changelogs/@backstage/plugin-techdocs-react.md#1314))

#### 1.3.13

##### Patch Changes

- [`0b02d4c`](https://github.com/backstage/backstage/commit/0b02d4c): Fixed the TechDocs reader requesting the documentation metadata in a tight loop when the request fails permanently (for example when the metadata returns a 404). The reader now stops after a failed request, which previously flooded the backend with requests and caused the page to flicker.

### `@backstage/test-utils` (1.7.19 → [1.7.21](../../changelogs/@backstage/test-utils.md#1721))

#### 1.7.21

##### Patch Changes

- [`a4759e6`](https://github.com/backstage/backstage/commit/a4759e6): Migrated tests from MSW v1 to MSW v2.

## Excluded dependency updates

- `@backstage/app-defaults` (1.7.9 → [1.7.11](../../changelogs/@backstage/app-defaults.md#1711))
- `@backstage/catalog-client` (1.16.0 → [1.16.1](../../changelogs/@backstage/catalog-client.md#1161))
- `@backstage/cli-defaults` (0.1.3 → [0.1.5](../../changelogs/@backstage/cli-defaults.md#015))
- `@backstage/cli-module-actions` (0.1.2 → [0.1.3](../../changelogs/@backstage/cli-module-actions.md#013))
- `@backstage/cli-module-auth` (0.1.3 → [0.1.4](../../changelogs/@backstage/cli-module-auth.md#014))
- `@backstage/cli-module-github` (0.1.3 → [0.1.4](../../changelogs/@backstage/cli-module-github.md#014))
- `@backstage/cli-module-info` (0.1.3 → [0.1.4](../../changelogs/@backstage/cli-module-info.md#014))
- `@backstage/cli-module-maintenance` (0.1.3 → [0.1.4](../../changelogs/@backstage/cli-module-maintenance.md#014))
- `@backstage/cli-module-translations` (0.1.3 → [0.1.4](../../changelogs/@backstage/cli-module-translations.md#014))
- `@backstage/cli-node` (0.3.3 → [0.3.4](../../changelogs/@backstage/cli-node.md#034))
- `@backstage/core-compat-api` (0.5.12 → [0.5.14](../../changelogs/@backstage/core-compat-api.md#0514))
- `@backstage/dev-utils` (1.1.24 → [1.1.26](../../changelogs/@backstage/dev-utils.md#1126))
- `@backstage/frontend-defaults` (0.5.3 → [0.5.5](../../changelogs/@backstage/frontend-defaults.md#055))
- `@backstage/frontend-dev-utils` (0.1.3 → [0.1.5](../../changelogs/@backstage/frontend-dev-utils.md#015))
- `@backstage/integration-react` (1.2.19 → [1.2.21](../../changelogs/@backstage/integration-react.md#1221))
- `@backstage/plugin-app-backend` (0.5.15 → [0.5.17](../../changelogs/@backstage/plugin-app-backend.md#0517))
- `@backstage/plugin-app-node` (0.1.46 → [0.1.48](../../changelogs/@backstage/plugin-app-node.md#0148))
- `@backstage/plugin-app-visualizer` (0.2.5 → [0.2.7](../../changelogs/@backstage/plugin-app-visualizer.md#027))
- `@backstage/plugin-auth` (0.1.9 → [0.1.11](../../changelogs/@backstage/plugin-auth.md#0111))
- `@backstage/plugin-auth-backend-module-atlassian-provider` (0.4.16 → [0.4.18](../../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#0418))
- `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.4.17 → [0.4.19](../../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#0419))
- `@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.2.21 → [0.2.23](../../changelogs/@backstage/plugin-auth-backend-module-azure-easyauth-provider.md#0223))
- `@backstage/plugin-auth-backend-module-bitbucket-provider` (0.3.16 → [0.3.18](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-provider.md#0318))
- `@backstage/plugin-auth-backend-module-bitbucket-server-provider` (0.2.16 → [0.2.18](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-server-provider.md#0218))
- `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.4.16 → [0.4.18](../../changelogs/@backstage/plugin-auth-backend-module-cloudflare-access-provider.md#0418))
- `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.4.16 → [0.4.18](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#0418))
- `@backstage/plugin-auth-backend-module-github-provider` (0.5.4 → [0.5.6](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#056))
- `@backstage/plugin-auth-backend-module-gitlab-provider` (0.4.4 → [0.4.6](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#046))
- `@backstage/plugin-auth-backend-module-google-provider` (0.3.16 → [0.3.18](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#0318))
- `@backstage/plugin-auth-backend-module-guest-provider` (0.2.20 → [0.2.22](../../changelogs/@backstage/plugin-auth-backend-module-guest-provider.md#0222))
- `@backstage/plugin-auth-backend-module-oauth2-provider` (0.4.16 → [0.4.18](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#0418))
- `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.3.0 → [0.3.2](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#032))
- `@backstage/plugin-auth-backend-module-oidc-provider` (0.4.17 → [0.4.19](../../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#0419))
- `@backstage/plugin-auth-backend-module-okta-provider` (0.2.16 → [0.2.18](../../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#0218))
- `@backstage/plugin-auth-backend-module-onelogin-provider` (0.3.16 → [0.3.18](../../changelogs/@backstage/plugin-auth-backend-module-onelogin-provider.md#0318))
- `@backstage/plugin-auth-backend-module-openshift-provider` (0.1.8 → [0.1.10](../../changelogs/@backstage/plugin-auth-backend-module-openshift-provider.md#0110))
- `@backstage/plugin-auth-backend-module-pinniped-provider` (0.3.15 → [0.3.17](../../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#0317))
- `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.5.15 → [0.5.17](../../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#0517))
- `@backstage/plugin-auth-react` (0.1.28 → [0.1.30](../../changelogs/@backstage/plugin-auth-react.md#0130))
- `@backstage/plugin-bitbucket-cloud-common` (0.3.11 → [0.3.12](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#0312))
- `@backstage/plugin-catalog-backend-module-ai-model` (0.1.1 → [0.1.3](../../changelogs/@backstage/plugin-catalog-backend-module-ai-model.md#013))
- `@backstage/plugin-catalog-backend-module-aws` (0.4.24 → [0.4.26](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#0426))
- `@backstage/plugin-catalog-backend-module-azure` (0.3.18 → [0.3.20](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0320))
- `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.5.12 → [0.5.14](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#0514))
- `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.5.12 → [0.5.14](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#0514))
- `@backstage/plugin-catalog-backend-module-gcp` (0.3.20 → [0.3.22](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#0322))
- `@backstage/plugin-catalog-backend-module-gerrit` (0.3.15 → [0.3.17](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0317))
- `@backstage/plugin-catalog-backend-module-gitea` (0.1.13 → [0.1.15](../../changelogs/@backstage/plugin-catalog-backend-module-gitea.md#0115))
- `@backstage/plugin-catalog-backend-module-github` (0.13.3 → [0.13.5](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#0135))
- `@backstage/plugin-catalog-backend-module-github-org` (0.3.23 → [0.3.25](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#0325))
- `@backstage/plugin-catalog-backend-module-gitlab` (0.8.4 → [0.8.6](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#086))
- `@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.22 → [0.2.24](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab-org.md#0224))
- `@backstage/plugin-catalog-backend-module-ldap` (0.12.6 → [0.12.8](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0128))
- `@backstage/plugin-catalog-backend-module-logs` (0.1.23 → [0.1.25](../../changelogs/@backstage/plugin-catalog-backend-module-logs.md#0125))
- `@backstage/plugin-catalog-backend-module-msgraph-incremental` (0.1.1 → [0.1.3](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph-incremental.md#013))
- `@backstage/plugin-catalog-backend-module-openapi` (0.2.23 → [0.2.25](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0225))
- `@backstage/plugin-catalog-backend-module-puppetdb` (0.2.23 → [0.2.25](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0225))
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.2.21 → [0.2.23](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#0223))
- `@backstage/plugin-catalog-backend-module-unprocessed` (0.6.13 → [0.6.15](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#0615))
- `@backstage/plugin-catalog-node` (2.2.2 → [2.2.4](../../changelogs/@backstage/plugin-catalog-node.md#224))
- `@backstage/plugin-config-schema` (0.1.81 → [0.1.83](../../changelogs/@backstage/plugin-config-schema.md#0183))
- `@backstage/plugin-devtools` (0.1.40 → [0.1.42](../../changelogs/@backstage/plugin-devtools.md#0142))
- `@backstage/plugin-devtools-backend` (0.5.18 → [0.5.20](../../changelogs/@backstage/plugin-devtools-backend.md#0520))
- `@backstage/plugin-devtools-react` (0.2.3 → [0.2.5](../../changelogs/@backstage/plugin-devtools-react.md#025))
- `@backstage/plugin-events-backend` (0.6.3 → [0.6.5](../../changelogs/@backstage/plugin-events-backend.md#065))
- `@backstage/plugin-events-backend-module-aws-sqs` (0.4.23 → [0.4.25](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#0425))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.32 → [0.2.34](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0234))
- `@backstage/plugin-events-backend-module-bitbucket-server` (0.1.13 → [0.1.15](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-server.md#0115))
- `@backstage/plugin-events-backend-module-gerrit` (0.2.32 → [0.2.34](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0234))
- `@backstage/plugin-events-backend-module-github` (0.4.13 → [0.4.15](../../changelogs/@backstage/plugin-events-backend-module-github.md#0415))
- `@backstage/plugin-events-backend-module-gitlab` (0.3.13 → [0.3.15](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#0315))
- `@backstage/plugin-events-backend-module-google-pubsub` (0.2.4 → [0.2.6](../../changelogs/@backstage/plugin-events-backend-module-google-pubsub.md#026))
- `@backstage/plugin-events-backend-module-kafka` (0.3.5 → [0.3.7](../../changelogs/@backstage/plugin-events-backend-module-kafka.md#037))
- `@backstage/plugin-events-backend-test-utils` (0.1.56 → [0.1.58](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0158))
- `@backstage/plugin-events-node` (0.4.23 → [0.4.25](../../changelogs/@backstage/plugin-events-node.md#0425))
- `@backstage/plugin-kubernetes` (0.12.20 → [0.12.22](../../changelogs/@backstage/plugin-kubernetes.md#01222))
- `@backstage/plugin-kubernetes-cluster` (0.0.38 → [0.0.40](../../changelogs/@backstage/plugin-kubernetes-cluster.md#0040))
- `@backstage/plugin-kubernetes-node` (0.4.5 → [0.4.7](../../changelogs/@backstage/plugin-kubernetes-node.md#047))
- `@backstage/plugin-mui-to-bui` (0.2.8 → [0.2.10](../../changelogs/@backstage/plugin-mui-to-bui.md#0210))
- `@backstage/plugin-org-react` (0.1.51 → [0.1.53](../../changelogs/@backstage/plugin-org-react.md#0153))
- `@backstage/plugin-permission-backend-module-allow-all-policy` (0.2.20 → [0.2.22](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#0222))
- `@backstage/plugin-permission-react` (0.5.2 → [0.5.4](../../changelogs/@backstage/plugin-permission-react.md#054))
- `@backstage/plugin-proxy-backend` (0.6.14 → [0.6.16](../../changelogs/@backstage/plugin-proxy-backend.md#0616))
- `@backstage/plugin-proxy-node` (0.1.16 → [0.1.18](../../changelogs/@backstage/plugin-proxy-node.md#0118))
- `@backstage/plugin-scaffolder-backend-module-azure` (0.2.22 → [0.2.24](../../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#0224))
- `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.24 → [0.3.26](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0326))
- `@backstage/plugin-scaffolder-backend-module-gcp` (0.2.22 → [0.2.24](../../changelogs/@backstage/plugin-scaffolder-backend-module-gcp.md#0224))
- `@backstage/plugin-scaffolder-backend-module-github` (0.9.10 → [0.9.12](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#0912))
- `@backstage/plugin-scaffolder-backend-module-gitlab` (0.11.7 → [0.11.9](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#0119))
- `@backstage/plugin-scaffolder-backend-module-notifications` (0.1.23 → [0.1.25](../../changelogs/@backstage/plugin-scaffolder-backend-module-notifications.md#0125))
- `@backstage/plugin-scaffolder-backend-module-rails` (0.5.22 → [0.5.24](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0524))
- `@backstage/plugin-scaffolder-backend-module-sentry` (0.3.5 → [0.3.7](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#037))
- `@backstage/plugin-scaffolder-node-test-utils` (0.3.12 → [0.3.14](../../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#0314))
- `@backstage/plugin-scaffolder-react` (2.0.1 → [2.0.3](../../changelogs/@backstage/plugin-scaffolder-react.md#203))
- `@backstage/plugin-search-backend` (2.1.3 → [2.1.5](../../changelogs/@backstage/plugin-search-backend.md#215))
- `@backstage/plugin-search-backend-module-catalog` (0.3.16 → [0.3.18](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#0318))
- `@backstage/plugin-search-backend-module-elasticsearch` (1.8.4 → [1.8.6](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#186))
- `@backstage/plugin-search-backend-module-pg` (0.5.56 → [0.5.58](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0558))
- `@backstage/plugin-search-backend-node` (1.4.5 → [1.4.7](../../changelogs/@backstage/plugin-search-backend-node.md#147))
- `@backstage/plugin-search-react` (1.11.5 → [1.11.7](../../changelogs/@backstage/plugin-search-react.md#1117))
- `@backstage/plugin-signals` (0.0.32 → [0.0.34](../../changelogs/@backstage/plugin-signals.md#0034))
- `@backstage/plugin-signals-backend` (0.3.16 → [0.3.18](../../changelogs/@backstage/plugin-signals-backend.md#0318))
- `@backstage/plugin-signals-node` (0.2.2 → [0.2.4](../../changelogs/@backstage/plugin-signals-node.md#024))
- `@backstage/plugin-signals-react` (0.0.23 → [0.0.25](../../changelogs/@backstage/plugin-signals-react.md#0025))
- `@backstage/plugin-techdocs-addons-test-utils` (2.0.6 → [2.0.8](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#208))
- `@backstage/plugin-techdocs-backend` (2.2.1 → [2.2.3](../../changelogs/@backstage/plugin-techdocs-backend.md#223))
- `@backstage/plugin-techdocs-module-addons-contrib` (1.1.37 → [1.1.39](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1139))
- `@backstage/plugin-user-settings-backend` (0.4.4 → [0.4.6](../../changelogs/@backstage/plugin-user-settings-backend.md#046))
- `@techdocs/cli` (1.11.1 → [1.11.3](../../changelogs/@techdocs/cli.md#1113))
