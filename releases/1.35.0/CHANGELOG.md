# Backstage Release 1.35.0 changelog

Changes between 1.34.2 and 1.35.0 — 166 changed and 1 added packages.

## Summary

- [Newly added packages](#newly-added-packages): 1 package
- [Breaking changes](#breaking-changes): 1 package
- [0.x minor version bumps](#0x-minor-version-bumps): 2 packages
- [Other minor version bumps](#other-minor-version-bumps): 2 packages
- [Patch version bumps](#patch-version-bumps): 42 packages
- [Excluded dependency updates](#excluded-dependency-updates): 119 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/plugin-proxy-node` (new, 0.1.0)](#backstageplugin-proxy-node-new-010)
- [Breaking changes](#breaking-changes)
  - [`@backstage/plugin-search-backend-module-catalog` (0.2.6 → 0.3.0)](#backstageplugin-search-backend-module-catalog-026--030)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/backend-defaults` (0.6.2 → 0.7.0)](#backstagebackend-defaults-062--070)
  - [`@backstage/plugin-signals-backend` (0.2.4 → 0.3.0)](#backstageplugin-signals-backend-024--030)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/plugin-catalog-backend` (1.29.0 → 1.30.0)](#backstageplugin-catalog-backend-1290--1300)
  - [`@backstage/plugin-scaffolder-backend` (1.28.0 → 1.29.0)](#backstageplugin-scaffolder-backend-1280--1290)
- [Patch version bumps](#patch-version-bumps)
  - [`@backstage/backend-app-api` (1.1.0 → 1.1.1)](#backstagebackend-app-api-110--111)
  - [`@backstage/backend-dynamic-feature-service` (0.5.2 → 0.5.3)](#backstagebackend-dynamic-feature-service-052--053)
  - [`@backstage/cli` (0.29.4 → 0.29.5)](#backstagecli-0294--0295)
  - [`@backstage/config-loader` (1.9.4 → 1.9.5)](#backstageconfig-loader-194--195)
  - [`@backstage/core-components` (0.16.2 → 0.16.3)](#backstagecore-components-0162--0163)
  - [`@backstage/core-plugin-api` (1.10.2 → 1.10.3)](#backstagecore-plugin-api-1102--1103)
  - [`@backstage/create-app` (0.5.23 → 0.5.24)](#backstagecreate-app-0523--0524)
  - [`@backstage/frontend-plugin-api` (0.9.3 → 0.9.4)](#backstagefrontend-plugin-api-093--094)
  - [`@backstage/integration` (1.16.0 → 1.16.1)](#backstageintegration-1160--1161)
  - [`@backstage/plugin-api-docs` (0.12.2 → 0.12.3)](#backstageplugin-api-docs-0122--0123)
  - [`@backstage/plugin-app-backend` (0.4.3 → 0.4.4)](#backstageplugin-app-backend-043--044)
  - [`@backstage/plugin-auth-backend` (0.24.1 → 0.24.2)](#backstageplugin-auth-backend-0241--0242)
  - [`@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.3.3 → 0.3.4)](#backstageplugin-auth-backend-module-cloudflare-access-provider-033--034)
  - [`@backstage/plugin-auth-node` (0.5.5 → 0.5.6)](#backstageplugin-auth-node-055--056)
  - [`@backstage/plugin-catalog` (1.26.0 → 1.26.1)](#backstageplugin-catalog-1260--1261)
  - [`@backstage/plugin-catalog-backend-module-backstage-openapi` (0.4.3 → 0.4.4)](#backstageplugin-catalog-backend-module-backstage-openapi-043--044)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.3.0 → 0.3.1)](#backstageplugin-catalog-backend-module-bitbucket-server-030--031)
  - [`@backstage/plugin-catalog-backend-module-github` (0.7.8 → 0.7.9)](#backstageplugin-catalog-backend-module-github-078--079)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.6.1 → 0.6.2)](#backstageplugin-catalog-backend-module-gitlab-061--062)
  - [`@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.4 → 0.2.5)](#backstageplugin-catalog-backend-module-gitlab-org-024--025)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.6.1 → 0.6.2)](#backstageplugin-catalog-backend-module-incremental-ingestion-061--062)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.6.5 → 0.6.6)](#backstageplugin-catalog-backend-module-msgraph-065--066)
  - [`@backstage/plugin-catalog-backend-module-openapi` (0.2.5 → 0.2.6)](#backstageplugin-catalog-backend-module-openapi-025--026)
  - [`@backstage/plugin-catalog-react` (1.15.0 → 1.15.1)](#backstageplugin-catalog-react-1150--1151)
  - [`@backstage/plugin-devtools-backend` (0.5.0 → 0.5.1)](#backstageplugin-devtools-backend-050--051)
  - [`@backstage/plugin-events-backend` (0.4.0 → 0.4.1)](#backstageplugin-events-backend-040--041)
  - [`@backstage/plugin-home` (0.8.3 → 0.8.4)](#backstageplugin-home-083--084)
  - [`@backstage/plugin-home-react` (0.1.21 → 0.1.22)](#backstageplugin-home-react-0121--0122)
  - [`@backstage/plugin-notifications-backend` (0.5.0 → 0.5.1)](#backstageplugin-notifications-backend-050--051)
  - [`@backstage/plugin-notifications-backend-module-email` (0.3.4 → 0.3.5)](#backstageplugin-notifications-backend-module-email-034--035)
  - [`@backstage/plugin-permission-backend` (0.5.52 → 0.5.53)](#backstageplugin-permission-backend-0552--0553)
  - [`@backstage/plugin-permission-node` (0.8.6 → 0.8.7)](#backstageplugin-permission-node-086--087)
  - [`@backstage/plugin-proxy-backend` (0.5.9 → 0.5.10)](#backstageplugin-proxy-backend-059--0510)
  - [`@backstage/plugin-scaffolder` (1.27.3 → 1.27.4)](#backstageplugin-scaffolder-1273--1274)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.5.4 → 0.5.5)](#backstageplugin-scaffolder-backend-module-github-054--055)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.7.0 → 0.7.1)](#backstageplugin-scaffolder-backend-module-gitlab-070--071)
  - [`@backstage/plugin-scaffolder-node` (0.6.2 → 0.6.3)](#backstageplugin-scaffolder-node-062--063)
  - [`@backstage/plugin-scaffolder-react` (1.14.2 → 1.14.3)](#backstageplugin-scaffolder-react-1142--1143)
  - [`@backstage/plugin-techdocs` (1.12.0 → 1.12.1)](#backstageplugin-techdocs-1120--1121)
  - [`@backstage/plugin-techdocs-backend` (1.11.4 → 1.11.5)](#backstageplugin-techdocs-backend-1114--1115)
  - [`@backstage/plugin-techdocs-module-addons-contrib` (1.1.19 → 1.1.20)](#backstageplugin-techdocs-module-addons-contrib-1119--1120)
  - [`@backstage/types` (1.2.0 → 1.2.1)](#backstagetypes-120--121)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/plugin-proxy-node` (new, [0.1.0](../../changelogs/@backstage/plugin-proxy-node.md#010))

#### 0.1.0

##### Minor Changes

- [`11b001c`](https://github.com/backstage/backstage/commit/11b001c): Added `proxyEndpointsExtensionPoint` to allow addition of proxy configuration through an extension point in the new backend system.

## Breaking changes

### `@backstage/plugin-search-backend-module-catalog` (0.2.6 → [0.3.0](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#030))

#### 0.3.0

##### Minor Changes

- [`dd515e3`](https://github.com/backstage/backstage/commit/dd515e3): **BREAKING**: Removed support for the old backend system. Please [migrate to the new backend system](https://backstage.io/docs/backend-system/) and enable [the catalog collator](https://backstage.io/docs/features/search/collators#catalog) there.

  As part of this, the `/alpha` export path is gone too. Just import the module from the root of the package as usual instead.

##### Patch Changes

- [`1e09b06`](https://github.com/backstage/backstage/commit/1e09b06): Internal refactor to use cursor based pagination

## 0.x minor version bumps

### `@backstage/backend-defaults` (0.6.2 → [0.7.0](../../changelogs/@backstage/backend-defaults.md#070))

#### 0.7.0

##### Minor Changes

- [`ec547b8`](https://github.com/backstage/backstage/commit/ec547b8): Ensure that an error handler middleware exists at the end of each plugin `httpRouter` handler chain. This makes it so that exceptions thrown by plugin routes are caught and encoded in the standard error format.

  If you were using the standard `MiddlewareFactory` just to put an `error` middleware in you router, you can now remove that at your earliest convenience since it's redundant. If you have custom error handlers in your plugin router, those will continue to function as previously. If you were relying on thrown errors propagating all the way down to the root HTTP router, you will find that they no longer do that, and may want to hoist your error handling up to the plugin level instead.

##### Patch Changes

- [`575613f`](https://github.com/backstage/backstage/commit/575613f): Go back to using `node-fetch` for gitlab
- [`d2b16db`](https://github.com/backstage/backstage/commit/d2b16db): The `GerritUrlReader` can now read content from a commit and not only from the top of a branch. The
  Gitiles URL must contain the full commit `SHA` hash like: `https://gerrit.com/gitiles/repo/+/2846e8dc327ae2f60249983b1c3b96f42f205bae/catalog-info.yaml`.
- [`8ecf8cb`](https://github.com/backstage/backstage/commit/8ecf8cb): Exclude `@backstage/backend-common` from schema collection if `@backstage/backend-defaults` is present
- [`8379bf4`](https://github.com/backstage/backstage/commit/8379bf4): Remove usages of `PluginDatabaseManager` and `PluginEndpointDiscovery` and replace with their equivalent service types

### `@backstage/plugin-signals-backend` (0.2.4 → [0.3.0](../../changelogs/@backstage/plugin-signals-backend.md#030))

#### 0.3.0

##### Minor Changes

- [`f59ea1d`](https://github.com/backstage/backstage/commit/f59ea1d): Removed support for the old backend system. If you were using the old `createRouter` export, please migrate to [the new backend system](https://backstage.io/docs/backend-system/).

## Other minor version bumps

### `@backstage/plugin-catalog-backend` (1.29.0 → [1.30.0](../../changelogs/@backstage/plugin-catalog-backend.md#1300))

#### 1.30.0

##### Patch Changes

- [`d9d62ef`](https://github.com/backstage/backstage/commit/d9d62ef): Remove some internal usages of the backend-common package
- [`8379bf4`](https://github.com/backstage/backstage/commit/8379bf4): Remove usages of `PluginDatabaseManager` and `PluginEndpointDiscovery` and replace with their equivalent service types
- [`be0aae7`](https://github.com/backstage/backstage/commit/be0aae7): Improved concurrency of the `entities` endpoint when using the streamed query mode behind the `catalog.disableRelationsCompatibility` flag.
- [`dd515e3`](https://github.com/backstage/backstage/commit/dd515e3): Internalize the deprecated collator types since they were removed from the collator itself during new-backend-system migration.
- [`3d475a0`](https://github.com/backstage/backstage/commit/3d475a0): Updated condition in `resolveCodeOwner` to fix a bug where `normalizeCodeOwner` could potentially be called with an invalid argument causing an error in `CodeOwnersProcessor`

### `@backstage/plugin-scaffolder-backend` (1.28.0 → [1.29.0](../../changelogs/@backstage/plugin-scaffolder-backend.md#1290))

#### 1.29.0

##### Minor Changes

- [`5d9e5c8`](https://github.com/backstage/backstage/commit/5d9e5c8): Added the ability to use `${{ context.task.id }}` in nunjucks templating, as well as `ctx.task.id` in actions to get the current task ID.

##### Patch Changes

- [`8379bf4`](https://github.com/backstage/backstage/commit/8379bf4): Remove usages of `PluginDatabaseManager` and `PluginEndpointDiscovery` and replace with their equivalent service types

## Patch version bumps

### `@backstage/backend-app-api` (1.1.0 → [1.1.1](../../changelogs/@backstage/backend-app-api.md#111))

#### 1.1.1

##### Patch Changes

- [`02534c7`](https://github.com/backstage/backstage/commit/02534c7): Corrected spelling mistake in error message

### `@backstage/backend-dynamic-feature-service` (0.5.2 → [0.5.3](../../changelogs/@backstage/backend-dynamic-feature-service.md#053))

#### 0.5.3

##### Patch Changes

- [`8379bf4`](https://github.com/backstage/backstage/commit/8379bf4): Remove usages of `PluginDatabaseManager` and `PluginEndpointDiscovery` and replace with their equivalent service types

### `@backstage/cli` (0.29.4 → [0.29.5](../../changelogs/@backstage/cli.md#0295))

#### 0.29.5

##### Patch Changes

- [`e937ce0`](https://github.com/backstage/backstage/commit/e937ce0): Fixed incompatible `@typescript-eslint` versions with current `eslint@8.x.x`
- [`8557e09`](https://github.com/backstage/backstage/commit/8557e09): Removed the `EXPERIMENTAL_VITE` flag for using Vite as a dev server. If you were using this feature, we recommend switching to Rspack via the `EXPERIMENTAL_RSPACK` flag.

### `@backstage/config-loader` (1.9.4 → [1.9.5](../../changelogs/@backstage/config-loader.md#195))

#### 1.9.5

##### Patch Changes

- [`8ecf8cb`](https://github.com/backstage/backstage/commit/8ecf8cb): Exclude `@backstage/backend-common` from schema collection if `@backstage/backend-defaults` is present

### `@backstage/core-components` (0.16.2 → [0.16.3](../../changelogs/@backstage/core-components.md#0163))

#### 0.16.3

##### Patch Changes

- [`4ec6f7b`](https://github.com/backstage/backstage/commit/4ec6f7b): Allow passing component for `ContentHeader` description

### `@backstage/core-plugin-api` (1.10.2 → [1.10.3](../../changelogs/@backstage/core-plugin-api.md#1103))

#### 1.10.3

##### Patch Changes

- [`b40eb41`](https://github.com/backstage/backstage/commit/b40eb41): Move `Expand` and `ExpandRecursive` to `@backstage/types`

### `@backstage/create-app` (0.5.23 → [0.5.24](../../changelogs/@backstage/create-app.md#0524))

#### 0.5.24

##### Patch Changes

- [`2e3fbc1`](https://github.com/backstage/backstage/commit/2e3fbc1): Bumped create-app version.
- [`0980e40`](https://github.com/backstage/backstage/commit/0980e40): Bumped create-app version.
- [`828c993`](https://github.com/backstage/backstage/commit/828c993): Added `--jobs unlimited` to `dev` script to help cases where the backend does not start up during local development

### `@backstage/frontend-plugin-api` (0.9.3 → [0.9.4](../../changelogs/@backstage/frontend-plugin-api.md#094))

#### 0.9.4

##### Patch Changes

- [`b40eb41`](https://github.com/backstage/backstage/commit/b40eb41): Move `Expand` and `ExpandRecursive` to `@backstage/types`

### `@backstage/integration` (1.16.0 → [1.16.1](../../changelogs/@backstage/integration.md#1161))

#### 1.16.1

##### Patch Changes

- [`d2b16db`](https://github.com/backstage/backstage/commit/d2b16db): A new Gerrit helper function (`buildGerritGitilesArchiveUrlFromLocation`) has been added. This
  constructs a Gitiles URL to download an archive. It is similar to the existing
  `buildGerritGitilesArchiveUrl` but also support content referenced by a full commit `SHA`.

  **DEPRECATIONS**: The function `buildGerritGitilesArchiveUrl` is deprecated, use the
  `buildGerritGitilesArchiveUrlFromLocation` function instead.

  **DEPRECATIONS**: The function `parseGerritGitilesUrl` is deprecated, use the
  `parseGitilesUrlRef` function instead.

### `@backstage/plugin-api-docs` (0.12.2 → [0.12.3](../../changelogs/@backstage/plugin-api-docs.md#0123))

#### 0.12.3

##### Patch Changes

- [`dcf6e72`](https://github.com/backstage/backstage/commit/dcf6e72): Fix typo in default path of api docs definition route

### `@backstage/plugin-app-backend` (0.4.3 → [0.4.4](../../changelogs/@backstage/plugin-app-backend.md#044))

#### 0.4.4

##### Patch Changes

- [`d9d62ef`](https://github.com/backstage/backstage/commit/d9d62ef): Remove some internal usages of the backend-common package
- [`8379bf4`](https://github.com/backstage/backstage/commit/8379bf4): Remove usages of `PluginDatabaseManager` and `PluginEndpointDiscovery` and replace with their equivalent service types

### `@backstage/plugin-auth-backend` (0.24.1 → [0.24.2](../../changelogs/@backstage/plugin-auth-backend.md#0242))

#### 0.24.2

##### Patch Changes

- [`8379bf4`](https://github.com/backstage/backstage/commit/8379bf4): Remove usages of `PluginDatabaseManager` and `PluginEndpointDiscovery` and replace with their equivalent service types

### `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-auth-backend-module-cloudflare-access-provider.md#034))

#### 0.3.4

##### Patch Changes

- [`d4a8246`](https://github.com/backstage/backstage/commit/d4a8246): Use the email from `cfIdentity` instead of `claims` when constructing user profile in order to support Cloudflare Service Tokens.

### `@backstage/plugin-auth-node` (0.5.5 → [0.5.6](../../changelogs/@backstage/plugin-auth-node.md#056))

#### 0.5.6

##### Patch Changes

- [`d9d62ef`](https://github.com/backstage/backstage/commit/d9d62ef): Remove some internal usages of the backend-common package
- [`8379bf4`](https://github.com/backstage/backstage/commit/8379bf4): Remove usages of `PluginDatabaseManager` and `PluginEndpointDiscovery` and replace with their equivalent service types

### `@backstage/plugin-catalog` (1.26.0 → [1.26.1](../../changelogs/@backstage/plugin-catalog.md#1261))

#### 1.26.1

##### Patch Changes

- [`208e53b`](https://github.com/backstage/backstage/commit/208e53b): Fixing spelling mistake in translation

### `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.4.3 → [0.4.4](../../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#044))

#### 0.4.4

##### Patch Changes

- [`12ba80f`](https://github.com/backstage/backstage/commit/12ba80f): docs: Use a valid configuration as example

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#031))

#### 0.3.1

##### Patch Changes

- [`8c04d7a`](https://github.com/backstage/backstage/commit/8c04d7a): Updated the `getFile` method in `BitbucketServerClient` to use `this.config.apiBaseUrl` directly for constructing the API request URL, removing the creation of an unnecessary `URL` object. The method now relies on REST API paths for accessing resources instead of direct access, ensuring better alignment with Bitbucket's API conventions.

### `@backstage/plugin-catalog-backend-module-github` (0.7.8 → [0.7.9](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#079))

#### 0.7.9

##### Patch Changes

- [`8379bf4`](https://github.com/backstage/backstage/commit/8379bf4): Remove usages of `PluginDatabaseManager` and `PluginEndpointDiscovery` and replace with their equivalent service types
- [`64dd0b8`](https://github.com/backstage/backstage/commit/64dd0b8): Added rate limiting and throttling to `GithubOrgEntityProvider`
- [`4ab00e4`](https://github.com/backstage/backstage/commit/4ab00e4): Fixes an issue in `GithubMultiOrgEntityProvider` that caused an error when processing teams without a parent.

### `@backstage/plugin-catalog-backend-module-gitlab` (0.6.1 → [0.6.2](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#062))

#### 0.6.2

##### Patch Changes

- [`575613f`](https://github.com/backstage/backstage/commit/575613f): Go back to using `node-fetch` for gitlab

### `@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab-org.md#025))

#### 0.2.5

##### Patch Changes

- [`d9d62ef`](https://github.com/backstage/backstage/commit/d9d62ef): Remove some internal usages of the backend-common package

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.6.1 → [0.6.2](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#062))

#### 0.6.2

##### Patch Changes

- [`ec547b8`](https://github.com/backstage/backstage/commit/ec547b8): Remove the error handler middleware, since that is now provided by the framework

### `@backstage/plugin-catalog-backend-module-msgraph` (0.6.5 → [0.6.6](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#066))

#### 0.6.6

##### Patch Changes

- [`29a4aa8`](https://github.com/backstage/backstage/commit/29a4aa8): fix(config): add missing parameters in config schema

### `@backstage/plugin-catalog-backend-module-openapi` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#026))

#### 0.2.6

##### Patch Changes

- [`57e794a`](https://github.com/backstage/backstage/commit/57e794a): Refactor to no longer use backend-common

### `@backstage/plugin-catalog-react` (1.15.0 → [1.15.1](../../changelogs/@backstage/plugin-catalog-react.md#1151))

#### 1.15.1

##### Patch Changes

- [`aaf6508`](https://github.com/backstage/backstage/commit/aaf6508): Creates new CatalogAutocomplete component in catalog-react that aligns with Select component UI for consistent a dropdown UI for all catalog filters.
- [`cbfc0a4`](https://github.com/backstage/backstage/commit/cbfc0a4): Fixed an issue where the `<EntityListProvider />` in `offset` mode would unnecessarily re-fetch data when the filter didn't change, causing a flicker effect.

### `@backstage/plugin-devtools-backend` (0.5.0 → [0.5.1](../../changelogs/@backstage/plugin-devtools-backend.md#051))

#### 0.5.1

##### Patch Changes

- [`ec547b8`](https://github.com/backstage/backstage/commit/ec547b8): Remove the error handler middleware, since that is now provided by the framework

### `@backstage/plugin-events-backend` (0.4.0 → [0.4.1](../../changelogs/@backstage/plugin-events-backend.md#041))

#### 0.4.1

##### Patch Changes

- [`d9d62ef`](https://github.com/backstage/backstage/commit/d9d62ef): Remove some internal usages of the backend-common package

### `@backstage/plugin-home` (0.8.3 → [0.8.4](../../changelogs/@backstage/plugin-home.md#084))

#### 0.8.4

##### Patch Changes

- [`7932f1e`](https://github.com/backstage/backstage/commit/7932f1e): Exported `QuickStartCard` component.
- [`d8f9079`](https://github.com/backstage/backstage/commit/d8f9079): Updated dependency `@rjsf/utils` to `5.23.2`.
  Updated dependency `@rjsf/core` to `5.23.2`.
  Updated dependency `@rjsf/material-ui` to `5.23.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.23.2`.

### `@backstage/plugin-home-react` (0.1.21 → [0.1.22](../../changelogs/@backstage/plugin-home-react.md#0122))

#### 0.1.22

##### Patch Changes

- [`d8f9079`](https://github.com/backstage/backstage/commit/d8f9079): Updated dependency `@rjsf/utils` to `5.23.2`.
  Updated dependency `@rjsf/core` to `5.23.2`.
  Updated dependency `@rjsf/material-ui` to `5.23.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.23.2`.

### `@backstage/plugin-notifications-backend` (0.5.0 → [0.5.1](../../changelogs/@backstage/plugin-notifications-backend.md#051))

#### 0.5.1

##### Patch Changes

- [`cbc0e63`](https://github.com/backstage/backstage/commit/cbc0e63): Remove `@backstage/backend-common` dependency

### `@backstage/plugin-notifications-backend-module-email` (0.3.4 → [0.3.5](../../changelogs/@backstage/plugin-notifications-backend-module-email.md#035))

#### 0.3.5

##### Patch Changes

- [`bed5f35`](https://github.com/backstage/backstage/commit/bed5f35): Added more examples of the plugin configuration

### `@backstage/plugin-permission-backend` (0.5.52 → [0.5.53](../../changelogs/@backstage/plugin-permission-backend.md#0553))

#### 0.5.53

##### Patch Changes

- [`d9d62ef`](https://github.com/backstage/backstage/commit/d9d62ef): Remove some internal usages of the backend-common package

### `@backstage/plugin-permission-node` (0.8.6 → [0.8.7](../../changelogs/@backstage/plugin-permission-node.md#087))

#### 0.8.7

##### Patch Changes

- [`d9d62ef`](https://github.com/backstage/backstage/commit/d9d62ef): Remove some internal usages of the backend-common package

### `@backstage/plugin-proxy-backend` (0.5.9 → [0.5.10](../../changelogs/@backstage/plugin-proxy-backend.md#0510))

#### 0.5.10

##### Patch Changes

- [`11b001c`](https://github.com/backstage/backstage/commit/11b001c): Added `proxyEndpointsExtensionPoint` to allow addition of proxy configuration through an extension point in the new backend system.

### `@backstage/plugin-scaffolder` (1.27.3 → [1.27.4](../../changelogs/@backstage/plugin-scaffolder.md#1274))

#### 1.27.4

##### Patch Changes

- [`d8f9079`](https://github.com/backstage/backstage/commit/d8f9079): Updated dependency `@rjsf/utils` to `5.23.2`.
  Updated dependency `@rjsf/core` to `5.23.2`.
  Updated dependency `@rjsf/material-ui` to `5.23.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.23.2`.
- [`4756287`](https://github.com/backstage/backstage/commit/4756287): Added support for `FormDecoratorBlueprint` to create form decorators in the Scaffolder plugin
- [`3f09ef4`](https://github.com/backstage/backstage/commit/3f09ef4): Fix issue with `secrets` not being forwarded properly to the backend when creating a task

### `@backstage/plugin-scaffolder-backend-module-github` (0.5.4 → [0.5.5](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#055))

#### 0.5.5

##### Patch Changes

- [`edaf925`](https://github.com/backstage/backstage/commit/edaf925): Updates to allow users to subscribe to the newly created repository within GitHub to mimic similar functionality found within the GitHub UI.

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.7.0 → [0.7.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#071))

#### 0.7.1

##### Patch Changes

- [`8fb529a`](https://github.com/backstage/backstage/commit/8fb529a): Added `reviewerIds` to the Gitlab Merge Request action.
- [`a913beb`](https://github.com/backstage/backstage/commit/a913beb): Added action `gitlab:group:migrate` to migrate projects using `bulk_import`
- [`7b62987`](https://github.com/backstage/backstage/commit/7b62987): Updated the path field in the `gitlab:group:ensureExists` action to accept an array of either strings or objects with name and slug fields.

### `@backstage/plugin-scaffolder-node` (0.6.2 → [0.6.3](../../changelogs/@backstage/plugin-scaffolder-node.md#063))

#### 0.6.3

##### Patch Changes

- [`5d9e5c8`](https://github.com/backstage/backstage/commit/5d9e5c8): Added the ability to use `${{ context.task.id }}` in nunjucks templating, as well as `ctx.task.id` in actions to get the current task ID.
- [`7dd0013`](https://github.com/backstage/backstage/commit/7dd0013): Deprecate the `logStream` option in `executeShellCommand`, replacing it with a logger instance.

### `@backstage/plugin-scaffolder-react` (1.14.2 → [1.14.3](../../changelogs/@backstage/plugin-scaffolder-react.md#1143))

#### 1.14.3

##### Patch Changes

- [`91bb99a`](https://github.com/backstage/backstage/commit/91bb99a): Fix field extension validation not working when field is in dependencies in an array field
- [`d8f9079`](https://github.com/backstage/backstage/commit/d8f9079): Updated dependency `@rjsf/utils` to `5.23.2`.
  Updated dependency `@rjsf/core` to `5.23.2`.
  Updated dependency `@rjsf/material-ui` to `5.23.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.23.2`.
- [`37421bc`](https://github.com/backstage/backstage/commit/37421bc): Fixed scaffolder form fields not resolving correctly in the `useCustomFieldExtensions` hook.
- [`4756287`](https://github.com/backstage/backstage/commit/4756287): Added support for `FormDecoratorBlueprint` to create form decorators in the Scaffolder plugin

### `@backstage/plugin-techdocs` (1.12.0 → [1.12.1](../../changelogs/@backstage/plugin-techdocs.md#1121))

#### 1.12.1

##### Patch Changes

- [`3710b35`](https://github.com/backstage/backstage/commit/3710b35): Allow passing down `withSearch` prop to `EntityTechdocsContent` component since it was `true` by default, now user can use the `EntityTechdocsContent` component _without_ showing the search field on top of the content.

### `@backstage/plugin-techdocs-backend` (1.11.4 → [1.11.5](../../changelogs/@backstage/plugin-techdocs-backend.md#1115))

#### 1.11.5

##### Patch Changes

- [`29a4aa8`](https://github.com/backstage/backstage/commit/29a4aa8): fix(config): add missing parameters in config schema

### `@backstage/plugin-techdocs-module-addons-contrib` (1.1.19 → [1.1.20](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1120))

#### 1.1.20

##### Patch Changes

- [`b664b2a`](https://github.com/backstage/backstage/commit/b664b2a): Internal refactor for safer handling of possible null value.

### `@backstage/types` (1.2.0 → [1.2.1](../../changelogs/@backstage/types.md#121))

#### 1.2.1

##### Patch Changes

- [`b40eb41`](https://github.com/backstage/backstage/commit/b40eb41): Move `Expand` and `ExpandRecursive` to `@backstage/types`

## Excluded dependency updates

- `@backstage/app-defaults` (1.5.15 → [1.5.16](../../changelogs/@backstage/app-defaults.md#1516))
- `@backstage/backend-openapi-utils` (0.4.0 → [0.4.1](../../changelogs/@backstage/backend-openapi-utils.md#041))
- `@backstage/backend-plugin-api` (1.1.0 → [1.1.1](../../changelogs/@backstage/backend-plugin-api.md#111))
- `@backstage/backend-test-utils` (1.2.0 → [1.2.1](../../changelogs/@backstage/backend-test-utils.md#121))
- `@backstage/catalog-client` (1.9.0 → [1.9.1](../../changelogs/@backstage/catalog-client.md#191))
- `@backstage/catalog-model` (1.7.2 → [1.7.3](../../changelogs/@backstage/catalog-model.md#173))
- `@backstage/cli-node` (0.2.11 → [0.2.12](../../changelogs/@backstage/cli-node.md#0212))
- `@backstage/config` (1.3.1 → [1.3.2](../../changelogs/@backstage/config.md#132))
- `@backstage/core-app-api` (1.15.3 → [1.15.4](../../changelogs/@backstage/core-app-api.md#1154))
- `@backstage/core-compat-api` (0.3.4 → [0.3.5](../../changelogs/@backstage/core-compat-api.md#035))
- `@backstage/dev-utils` (1.1.5 → [1.1.6](../../changelogs/@backstage/dev-utils.md#116))
- `@backstage/errors` (1.2.6 → [1.2.7](../../changelogs/@backstage/errors.md#127))
- `@backstage/frontend-app-api` (0.10.3 → [0.10.4](../../changelogs/@backstage/frontend-app-api.md#0104))
- `@backstage/frontend-defaults` (0.1.4 → [0.1.5](../../changelogs/@backstage/frontend-defaults.md#015))
- `@backstage/frontend-test-utils` (0.2.4 → [0.2.5](../../changelogs/@backstage/frontend-test-utils.md#025))
- `@backstage/integration-aws-node` (0.1.14 → [0.1.15](../../changelogs/@backstage/integration-aws-node.md#0115))
- `@backstage/integration-react` (1.2.2 → [1.2.3](../../changelogs/@backstage/integration-react.md#123))
- `@backstage/plugin-app` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-app.md#015))
- `@backstage/plugin-app-node` (0.1.28 → [0.1.29](../../changelogs/@backstage/plugin-app-node.md#0129))
- `@backstage/plugin-app-visualizer` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-app-visualizer.md#0115))
- `@backstage/plugin-auth-backend-module-atlassian-provider` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#034))
- `@backstage/plugin-auth-backend-module-auth0-provider` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-auth-backend-module-auth0-provider.md#014))
- `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#032))
- `@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-auth-backend-module-azure-easyauth-provider.md#024))
- `@backstage/plugin-auth-backend-module-bitbucket-provider` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-provider.md#024))
- `@backstage/plugin-auth-backend-module-bitbucket-server-provider` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-server-provider.md#014))
- `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#034))
- `@backstage/plugin-auth-backend-module-github-provider` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#024))
- `@backstage/plugin-auth-backend-module-gitlab-provider` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#024))
- `@backstage/plugin-auth-backend-module-google-provider` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#024))
- `@backstage/plugin-auth-backend-module-guest-provider` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-auth-backend-module-guest-provider.md#024))
- `@backstage/plugin-auth-backend-module-microsoft-provider` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#024))
- `@backstage/plugin-auth-backend-module-oauth2-provider` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#034))
- `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#024))
- `@backstage/plugin-auth-backend-module-oidc-provider` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#034))
- `@backstage/plugin-auth-backend-module-okta-provider` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#014))
- `@backstage/plugin-auth-backend-module-onelogin-provider` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-auth-backend-module-onelogin-provider.md#024))
- `@backstage/plugin-auth-backend-module-pinniped-provider` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#024))
- `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.4.2 → [0.4.3](../../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#043))
- `@backstage/plugin-auth-react` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-auth-react.md#0111))
- `@backstage/plugin-bitbucket-cloud-common` (0.2.26 → [0.2.27](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#0227))
- `@backstage/plugin-catalog-backend-module-aws` (0.4.6 → [0.4.7](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#047))
- `@backstage/plugin-catalog-backend-module-azure` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#031))
- `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.4.3 → [0.4.4](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#044))
- `@backstage/plugin-catalog-backend-module-gcp` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#034))
- `@backstage/plugin-catalog-backend-module-gerrit` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#026))
- `@backstage/plugin-catalog-backend-module-github-org` (0.3.5 → [0.3.6](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#036))
- `@backstage/plugin-catalog-backend-module-ldap` (0.11.0 → [0.11.1](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0111))
- `@backstage/plugin-catalog-backend-module-logs` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-catalog-backend-module-logs.md#016))
- `@backstage/plugin-catalog-backend-module-puppetdb` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#026))
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#024))
- `@backstage/plugin-catalog-backend-module-unprocessed` (0.5.3 → [0.5.4](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#054))
- `@backstage/plugin-catalog-common` (1.1.2 → [1.1.3](../../changelogs/@backstage/plugin-catalog-common.md#113))
- `@backstage/plugin-catalog-graph` (0.4.14 → [0.4.15](../../changelogs/@backstage/plugin-catalog-graph.md#0415))
- `@backstage/plugin-catalog-import` (0.12.8 → [0.12.9](../../changelogs/@backstage/plugin-catalog-import.md#0129))
- `@backstage/plugin-catalog-node` (1.15.0 → [1.15.1](../../changelogs/@backstage/plugin-catalog-node.md#1151))
- `@backstage/plugin-catalog-unprocessed-entities` (0.2.12 → [0.2.13](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#0213))
- `@backstage/plugin-catalog-unprocessed-entities-common` (0.0.6 → [0.0.7](../../changelogs/@backstage/plugin-catalog-unprocessed-entities-common.md#007))
- `@backstage/plugin-config-schema` (0.1.63 → [0.1.64](../../changelogs/@backstage/plugin-config-schema.md#0164))
- `@backstage/plugin-devtools` (0.1.22 → [0.1.23](../../changelogs/@backstage/plugin-devtools.md#0123))
- `@backstage/plugin-devtools-common` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-devtools-common.md#0115))
- `@backstage/plugin-events-backend-module-aws-sqs` (0.4.6 → [0.4.7](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#047))
- `@backstage/plugin-events-backend-module-azure` (0.2.15 → [0.2.16](../../changelogs/@backstage/plugin-events-backend-module-azure.md#0216))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.15 → [0.2.16](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0216))
- `@backstage/plugin-events-backend-module-gerrit` (0.2.15 → [0.2.16](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0216))
- `@backstage/plugin-events-backend-module-github` (0.2.15 → [0.2.16](../../changelogs/@backstage/plugin-events-backend-module-github.md#0216))
- `@backstage/plugin-events-backend-module-gitlab` (0.2.15 → [0.2.16](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#0216))
- `@backstage/plugin-events-backend-test-utils` (0.1.39 → [0.1.40](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0140))
- `@backstage/plugin-events-node` (0.4.6 → [0.4.7](../../changelogs/@backstage/plugin-events-node.md#047))
- `@backstage/plugin-kubernetes` (0.12.2 → [0.12.3](../../changelogs/@backstage/plugin-kubernetes.md#0123))
- `@backstage/plugin-kubernetes-backend` (0.19.1 → [0.19.2](../../changelogs/@backstage/plugin-kubernetes-backend.md#0192))
- `@backstage/plugin-kubernetes-cluster` (0.0.20 → [0.0.21](../../changelogs/@backstage/plugin-kubernetes-cluster.md#0021))
- `@backstage/plugin-kubernetes-common` (0.9.1 → [0.9.2](../../changelogs/@backstage/plugin-kubernetes-common.md#092))
- `@backstage/plugin-kubernetes-node` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-kubernetes-node.md#022))
- `@backstage/plugin-kubernetes-react` (0.5.2 → [0.5.3](../../changelogs/@backstage/plugin-kubernetes-react.md#053))
- `@backstage/plugin-notifications` (0.5.0 → [0.5.1](../../changelogs/@backstage/plugin-notifications.md#051))
- `@backstage/plugin-notifications-common` (0.0.7 → [0.0.8](../../changelogs/@backstage/plugin-notifications-common.md#008))
- `@backstage/plugin-notifications-node` (0.2.10 → [0.2.11](../../changelogs/@backstage/plugin-notifications-node.md#0211))
- `@backstage/plugin-org` (0.6.34 → [0.6.35](../../changelogs/@backstage/plugin-org.md#0635))
- `@backstage/plugin-org-react` (0.1.33 → [0.1.34](../../changelogs/@backstage/plugin-org-react.md#0134))
- `@backstage/plugin-permission-backend-module-allow-all-policy` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#024))
- `@backstage/plugin-permission-common` (0.8.3 → [0.8.4](../../changelogs/@backstage/plugin-permission-common.md#084))
- `@backstage/plugin-permission-react` (0.4.29 → [0.4.30](../../changelogs/@backstage/plugin-permission-react.md#0430))
- `@backstage/plugin-scaffolder-backend-module-azure` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#025))
- `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.3.5 → [0.3.6](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket.md#036))
- `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#025))
- `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#025))
- `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.4 → [0.3.5](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#035))
- `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.5 → [0.3.6](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#036))
- `@backstage/plugin-scaffolder-backend-module-gcp` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-scaffolder-backend-module-gcp.md#025))
- `@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#025))
- `@backstage/plugin-scaffolder-backend-module-gitea` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#025))
- `@backstage/plugin-scaffolder-backend-module-notifications` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-scaffolder-backend-module-notifications.md#016))
- `@backstage/plugin-scaffolder-backend-module-rails` (0.5.4 → [0.5.5](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#055))
- `@backstage/plugin-scaffolder-backend-module-sentry` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#025))
- `@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.5 → [0.4.6](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#046))
- `@backstage/plugin-scaffolder-common` (1.5.8 → [1.5.9](../../changelogs/@backstage/plugin-scaffolder-common.md#159))
- `@backstage/plugin-scaffolder-node-test-utils` (0.1.17 → [0.1.18](../../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#0118))
- `@backstage/plugin-search` (1.4.21 → [1.4.22](../../changelogs/@backstage/plugin-search.md#1422))
- `@backstage/plugin-search-backend` (1.8.0 → [1.8.1](../../changelogs/@backstage/plugin-search-backend.md#181))
- `@backstage/plugin-search-backend-module-elasticsearch` (1.6.3 → [1.6.4](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#164))
- `@backstage/plugin-search-backend-module-explore` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-search-backend-module-explore.md#027))
- `@backstage/plugin-search-backend-module-pg` (0.5.39 → [0.5.40](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0540))
- `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.3.4 → [0.3.5](../../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#035))
- `@backstage/plugin-search-backend-module-techdocs` (0.3.4 → [0.3.5](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#035))
- `@backstage/plugin-search-backend-node` (1.3.6 → [1.3.7](../../changelogs/@backstage/plugin-search-backend-node.md#137))
- `@backstage/plugin-search-common` (1.2.16 → [1.2.17](../../changelogs/@backstage/plugin-search-common.md#1217))
- `@backstage/plugin-search-react` (1.8.4 → [1.8.5](../../changelogs/@backstage/plugin-search-react.md#185))
- `@backstage/plugin-signals` (0.0.14 → [0.0.15](../../changelogs/@backstage/plugin-signals.md#0015))
- `@backstage/plugin-signals-node` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-signals-node.md#0116))
- `@backstage/plugin-signals-react` (0.0.8 → [0.0.9](../../changelogs/@backstage/plugin-signals-react.md#009))
- `@backstage/plugin-techdocs-addons-test-utils` (1.0.43 → [1.0.44](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#1044))
- `@backstage/plugin-techdocs-node` (1.12.15 → [1.12.16](../../changelogs/@backstage/plugin-techdocs-node.md#11216))
- `@backstage/plugin-techdocs-react` (1.2.12 → [1.2.13](../../changelogs/@backstage/plugin-techdocs-react.md#1213))
- `@backstage/plugin-user-settings` (0.8.17 → [0.8.18](../../changelogs/@backstage/plugin-user-settings.md#0818))
- `@backstage/plugin-user-settings-backend` (0.2.28 → [0.2.29](../../changelogs/@backstage/plugin-user-settings-backend.md#0229))
- `@backstage/repo-tools` (0.12.0 → [0.12.1](../../changelogs/@backstage/repo-tools.md#0121))
- `@backstage/test-utils` (1.7.3 → [1.7.4](../../changelogs/@backstage/test-utils.md#174))
- `@techdocs/cli` (1.8.24 → [1.8.25](../../changelogs/@techdocs/cli.md#1825))
