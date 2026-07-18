# Backstage Release 1.35.0 changelog

Changes between 1.34.2 and 1.35.0 — 166 changed and 1 added packages.

## Summary

- [Newly added packages](#newly-added-packages): 1 package
- [Breaking changes](#breaking-changes): 1 package
- [0.x minor version bumps](#0x-minor-version-bumps): 2 packages
- [Other minor version bumps](#other-minor-version-bumps): 2 packages
- [Patch version bumps](#patch-version-bumps): 42 packages
- [Excluded dependency updates for packages](#excluded-dependency-updates-for-packages): 119 packages

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
- [Excluded dependency updates for packages](#excluded-dependency-updates-for-packages)

## Newly added packages

### `@backstage/plugin-proxy-node` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- 11b001c: Added `proxyEndpointsExtensionPoint` to allow addition of proxy configuration through an extension point in the new backend system.

## Breaking changes

### `@backstage/plugin-search-backend-module-catalog` (0.2.6 → 0.3.0)

#### 0.3.0

##### Minor Changes

- dd515e3: **BREAKING**: Removed support for the old backend system. Please [migrate to the new backend system](https://backstage.io/docs/backend-system/) and enable [the catalog collator](https://backstage.io/docs/features/search/collators#catalog) there.

  As part of this, the `/alpha` export path is gone too. Just import the module from the root of the package as usual instead.

##### Patch Changes

- 1e09b06: Internal refactor to use cursor based pagination

## 0.x minor version bumps

### `@backstage/backend-defaults` (0.6.2 → 0.7.0)

#### 0.7.0

##### Minor Changes

- ec547b8: Ensure that an error handler middleware exists at the end of each plugin `httpRouter` handler chain. This makes it so that exceptions thrown by plugin routes are caught and encoded in the standard error format.

  If you were using the standard `MiddlewareFactory` just to put an `error` middleware in you router, you can now remove that at your earliest convenience since it's redundant. If you have custom error handlers in your plugin router, those will continue to function as previously. If you were relying on thrown errors propagating all the way down to the root HTTP router, you will find that they no longer do that, and may want to hoist your error handling up to the plugin level instead.

##### Patch Changes

- 575613f: Go back to using `node-fetch` for gitlab
- d2b16db: The `GerritUrlReader` can now read content from a commit and not only from the top of a branch. The
  Gitiles URL must contain the full commit `SHA` hash like: `https://gerrit.com/gitiles/repo/+/2846e8dc327ae2f60249983b1c3b96f42f205bae/catalog-info.yaml`.
- 8ecf8cb: Exclude `@backstage/backend-common` from schema collection if `@backstage/backend-defaults` is present
- 8379bf4: Remove usages of `PluginDatabaseManager` and `PluginEndpointDiscovery` and replace with their equivalent service types

### `@backstage/plugin-signals-backend` (0.2.4 → 0.3.0)

#### 0.3.0

##### Minor Changes

- f59ea1d: Removed support for the old backend system. If you were using the old `createRouter` export, please migrate to [the new backend system](https://backstage.io/docs/backend-system/).

## Other minor version bumps

### `@backstage/plugin-catalog-backend` (1.29.0 → 1.30.0)

#### 1.30.0

##### Patch Changes

- d9d62ef: Remove some internal usages of the backend-common package
- 8379bf4: Remove usages of `PluginDatabaseManager` and `PluginEndpointDiscovery` and replace with their equivalent service types
- be0aae7: Improved concurrency of the `entities` endpoint when using the streamed query mode behind the `catalog.disableRelationsCompatibility` flag.
- dd515e3: Internalize the deprecated collator types since they were removed from the collator itself during new-backend-system migration.
- 3d475a0: Updated condition in `resolveCodeOwner` to fix a bug where `normalizeCodeOwner` could potentially be called with an invalid argument causing an error in `CodeOwnersProcessor`

### `@backstage/plugin-scaffolder-backend` (1.28.0 → 1.29.0)

#### 1.29.0

##### Minor Changes

- 5d9e5c8: Added the ability to use `${{ context.task.id }}` in nunjucks templating, as well as `ctx.task.id` in actions to get the current task ID.

##### Patch Changes

- 8379bf4: Remove usages of `PluginDatabaseManager` and `PluginEndpointDiscovery` and replace with their equivalent service types

## Patch version bumps

### `@backstage/backend-app-api` (1.1.0 → 1.1.1)

#### 1.1.1

##### Patch Changes

- 02534c7: Corrected spelling mistake in error message

### `@backstage/backend-dynamic-feature-service` (0.5.2 → 0.5.3)

#### 0.5.3

##### Patch Changes

- 8379bf4: Remove usages of `PluginDatabaseManager` and `PluginEndpointDiscovery` and replace with their equivalent service types

### `@backstage/cli` (0.29.4 → 0.29.5)

#### 0.29.5

##### Patch Changes

- e937ce0: Fixed incompatible `@typescript-eslint` versions with current `eslint@8.x.x`
- 8557e09: Removed the `EXPERIMENTAL_VITE` flag for using Vite as a dev server. If you were using this feature, we recommend switching to Rspack via the `EXPERIMENTAL_RSPACK` flag.

### `@backstage/config-loader` (1.9.4 → 1.9.5)

#### 1.9.5

##### Patch Changes

- 8ecf8cb: Exclude `@backstage/backend-common` from schema collection if `@backstage/backend-defaults` is present

### `@backstage/core-components` (0.16.2 → 0.16.3)

#### 0.16.3

##### Patch Changes

- 4ec6f7b: Allow passing component for `ContentHeader` description

### `@backstage/core-plugin-api` (1.10.2 → 1.10.3)

#### 1.10.3

##### Patch Changes

- b40eb41: Move `Expand` and `ExpandRecursive` to `@backstage/types`

### `@backstage/create-app` (0.5.23 → 0.5.24)

#### 0.5.24

##### Patch Changes

- 2e3fbc1: Bumped create-app version.
- 0980e40: Bumped create-app version.
- 828c993: Added `--jobs unlimited` to `dev` script to help cases where the backend does not start up during local development

### `@backstage/frontend-plugin-api` (0.9.3 → 0.9.4)

#### 0.9.4

##### Patch Changes

- b40eb41: Move `Expand` and `ExpandRecursive` to `@backstage/types`

### `@backstage/integration` (1.16.0 → 1.16.1)

#### 1.16.1

##### Patch Changes

- d2b16db: A new Gerrit helper function (`buildGerritGitilesArchiveUrlFromLocation`) has been added. This
  constructs a Gitiles URL to download an archive. It is similar to the existing
  `buildGerritGitilesArchiveUrl` but also support content referenced by a full commit `SHA`.

  **DEPRECATIONS**: The function `buildGerritGitilesArchiveUrl` is deprecated, use the
  `buildGerritGitilesArchiveUrlFromLocation` function instead.

  **DEPRECATIONS**: The function `parseGerritGitilesUrl` is deprecated, use the
  `parseGitilesUrlRef` function instead.

### `@backstage/plugin-api-docs` (0.12.2 → 0.12.3)

#### 0.12.3

##### Patch Changes

- dcf6e72: Fix typo in default path of api docs definition route

### `@backstage/plugin-app-backend` (0.4.3 → 0.4.4)

#### 0.4.4

##### Patch Changes

- d9d62ef: Remove some internal usages of the backend-common package
- 8379bf4: Remove usages of `PluginDatabaseManager` and `PluginEndpointDiscovery` and replace with their equivalent service types

### `@backstage/plugin-auth-backend` (0.24.1 → 0.24.2)

#### 0.24.2

##### Patch Changes

- 8379bf4: Remove usages of `PluginDatabaseManager` and `PluginEndpointDiscovery` and replace with their equivalent service types

### `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.3.3 → 0.3.4)

#### 0.3.4

##### Patch Changes

- d4a8246: Use the email from `cfIdentity` instead of `claims` when constructing user profile in order to support Cloudflare Service Tokens.

### `@backstage/plugin-auth-node` (0.5.5 → 0.5.6)

#### 0.5.6

##### Patch Changes

- d9d62ef: Remove some internal usages of the backend-common package
- 8379bf4: Remove usages of `PluginDatabaseManager` and `PluginEndpointDiscovery` and replace with their equivalent service types

### `@backstage/plugin-catalog` (1.26.0 → 1.26.1)

#### 1.26.1

##### Patch Changes

- 208e53b: Fixing spelling mistake in translation

### `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.4.3 → 0.4.4)

#### 0.4.4

##### Patch Changes

- 12ba80f: docs: Use a valid configuration as example

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.3.0 → 0.3.1)

#### 0.3.1

##### Patch Changes

- 8c04d7a: Updated the `getFile` method in `BitbucketServerClient` to use `this.config.apiBaseUrl` directly for constructing the API request URL, removing the creation of an unnecessary `URL` object. The method now relies on REST API paths for accessing resources instead of direct access, ensuring better alignment with Bitbucket's API conventions.

### `@backstage/plugin-catalog-backend-module-github` (0.7.8 → 0.7.9)

#### 0.7.9

##### Patch Changes

- 8379bf4: Remove usages of `PluginDatabaseManager` and `PluginEndpointDiscovery` and replace with their equivalent service types
- 64dd0b8: Added rate limiting and throttling to `GithubOrgEntityProvider`
- 4ab00e4: Fixes an issue in `GithubMultiOrgEntityProvider` that caused an error when processing teams without a parent.

### `@backstage/plugin-catalog-backend-module-gitlab` (0.6.1 → 0.6.2)

#### 0.6.2

##### Patch Changes

- 575613f: Go back to using `node-fetch` for gitlab

### `@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.4 → 0.2.5)

#### 0.2.5

##### Patch Changes

- d9d62ef: Remove some internal usages of the backend-common package

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.6.1 → 0.6.2)

#### 0.6.2

##### Patch Changes

- ec547b8: Remove the error handler middleware, since that is now provided by the framework

### `@backstage/plugin-catalog-backend-module-msgraph` (0.6.5 → 0.6.6)

#### 0.6.6

##### Patch Changes

- 29a4aa8: fix(config): add missing parameters in config schema

### `@backstage/plugin-catalog-backend-module-openapi` (0.2.5 → 0.2.6)

#### 0.2.6

##### Patch Changes

- 57e794a: Refactor to no longer use backend-common

### `@backstage/plugin-catalog-react` (1.15.0 → 1.15.1)

#### 1.15.1

##### Patch Changes

- aaf6508: Creates new CatalogAutocomplete component in catalog-react that aligns with Select component UI for consistent a dropdown UI for all catalog filters.
- cbfc0a4: Fixed an issue where the `<EntityListProvider />` in `offset` mode would unnecessarily re-fetch data when the filter didn't change, causing a flicker effect.

### `@backstage/plugin-devtools-backend` (0.5.0 → 0.5.1)

#### 0.5.1

##### Patch Changes

- ec547b8: Remove the error handler middleware, since that is now provided by the framework

### `@backstage/plugin-events-backend` (0.4.0 → 0.4.1)

#### 0.4.1

##### Patch Changes

- d9d62ef: Remove some internal usages of the backend-common package

### `@backstage/plugin-home` (0.8.3 → 0.8.4)

#### 0.8.4

##### Patch Changes

- 7932f1e: Exported `QuickStartCard` component.
- d8f9079: Updated dependency `@rjsf/utils` to `5.23.2`.
  Updated dependency `@rjsf/core` to `5.23.2`.
  Updated dependency `@rjsf/material-ui` to `5.23.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.23.2`.

### `@backstage/plugin-home-react` (0.1.21 → 0.1.22)

#### 0.1.22

##### Patch Changes

- d8f9079: Updated dependency `@rjsf/utils` to `5.23.2`.
  Updated dependency `@rjsf/core` to `5.23.2`.
  Updated dependency `@rjsf/material-ui` to `5.23.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.23.2`.

### `@backstage/plugin-notifications-backend` (0.5.0 → 0.5.1)

#### 0.5.1

##### Patch Changes

- cbc0e63: Remove `@backstage/backend-common` dependency

### `@backstage/plugin-notifications-backend-module-email` (0.3.4 → 0.3.5)

#### 0.3.5

##### Patch Changes

- bed5f35: Added more examples of the plugin configuration

### `@backstage/plugin-permission-backend` (0.5.52 → 0.5.53)

#### 0.5.53

##### Patch Changes

- d9d62ef: Remove some internal usages of the backend-common package

### `@backstage/plugin-permission-node` (0.8.6 → 0.8.7)

#### 0.8.7

##### Patch Changes

- d9d62ef: Remove some internal usages of the backend-common package

### `@backstage/plugin-proxy-backend` (0.5.9 → 0.5.10)

#### 0.5.10

##### Patch Changes

- 11b001c: Added `proxyEndpointsExtensionPoint` to allow addition of proxy configuration through an extension point in the new backend system.

### `@backstage/plugin-scaffolder` (1.27.3 → 1.27.4)

#### 1.27.4

##### Patch Changes

- d8f9079: Updated dependency `@rjsf/utils` to `5.23.2`.
  Updated dependency `@rjsf/core` to `5.23.2`.
  Updated dependency `@rjsf/material-ui` to `5.23.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.23.2`.
- 4756287: Added support for `FormDecoratorBlueprint` to create form decorators in the Scaffolder plugin
- 3f09ef4: Fix issue with `secrets` not being forwarded properly to the backend when creating a task

### `@backstage/plugin-scaffolder-backend-module-github` (0.5.4 → 0.5.5)

#### 0.5.5

##### Patch Changes

- edaf925: Updates to allow users to subscribe to the newly created repository within GitHub to mimic similar functionality found within the GitHub UI.

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.7.0 → 0.7.1)

#### 0.7.1

##### Patch Changes

- 8fb529a: Added `reviewerIds` to the Gitlab Merge Request action.
- a913beb: Added action `gitlab:group:migrate` to migrate projects using `bulk_import`
- 7b62987: Updated the path field in the `gitlab:group:ensureExists` action to accept an array of either strings or objects with name and slug fields.

### `@backstage/plugin-scaffolder-node` (0.6.2 → 0.6.3)

#### 0.6.3

##### Patch Changes

- 5d9e5c8: Added the ability to use `${{ context.task.id }}` in nunjucks templating, as well as `ctx.task.id` in actions to get the current task ID.
- 7dd0013: Deprecate the `logStream` option in `executeShellCommand`, replacing it with a logger instance.

### `@backstage/plugin-scaffolder-react` (1.14.2 → 1.14.3)

#### 1.14.3

##### Patch Changes

- 91bb99a: Fix field extension validation not working when field is in dependencies in an array field
- d8f9079: Updated dependency `@rjsf/utils` to `5.23.2`.
  Updated dependency `@rjsf/core` to `5.23.2`.
  Updated dependency `@rjsf/material-ui` to `5.23.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.23.2`.
- 37421bc: Fixed scaffolder form fields not resolving correctly in the `useCustomFieldExtensions` hook.
- 4756287: Added support for `FormDecoratorBlueprint` to create form decorators in the Scaffolder plugin

### `@backstage/plugin-techdocs` (1.12.0 → 1.12.1)

#### 1.12.1

##### Patch Changes

- 3710b35: Allow passing down `withSearch` prop to `EntityTechdocsContent` component since it was `true` by default, now user can use the `EntityTechdocsContent` component _without_ showing the search field on top of the content.

### `@backstage/plugin-techdocs-backend` (1.11.4 → 1.11.5)

#### 1.11.5

##### Patch Changes

- 29a4aa8: fix(config): add missing parameters in config schema

### `@backstage/plugin-techdocs-module-addons-contrib` (1.1.19 → 1.1.20)

#### 1.1.20

##### Patch Changes

- b664b2a: Internal refactor for safer handling of possible null value.

### `@backstage/types` (1.2.0 → 1.2.1)

#### 1.2.1

##### Patch Changes

- b40eb41: Move `Expand` and `ExpandRecursive` to `@backstage/types`

## Excluded dependency updates for packages

- `@backstage/app-defaults`
- `@backstage/backend-openapi-utils`
- `@backstage/backend-plugin-api`
- `@backstage/backend-test-utils`
- `@backstage/catalog-client`
- `@backstage/catalog-model`
- `@backstage/cli-node`
- `@backstage/config`
- `@backstage/core-app-api`
- `@backstage/core-compat-api`
- `@backstage/dev-utils`
- `@backstage/errors`
- `@backstage/frontend-app-api`
- `@backstage/frontend-defaults`
- `@backstage/frontend-test-utils`
- `@backstage/integration-aws-node`
- `@backstage/integration-react`
- `@backstage/plugin-app`
- `@backstage/plugin-app-node`
- `@backstage/plugin-app-visualizer`
- `@backstage/plugin-auth-backend-module-atlassian-provider`
- `@backstage/plugin-auth-backend-module-auth0-provider`
- `@backstage/plugin-auth-backend-module-aws-alb-provider`
- `@backstage/plugin-auth-backend-module-azure-easyauth-provider`
- `@backstage/plugin-auth-backend-module-bitbucket-provider`
- `@backstage/plugin-auth-backend-module-bitbucket-server-provider`
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
- `@backstage/plugin-auth-backend-module-pinniped-provider`
- `@backstage/plugin-auth-backend-module-vmware-cloud-provider`
- `@backstage/plugin-auth-react`
- `@backstage/plugin-bitbucket-cloud-common`
- `@backstage/plugin-catalog-backend-module-aws`
- `@backstage/plugin-catalog-backend-module-azure`
- `@backstage/plugin-catalog-backend-module-bitbucket-cloud`
- `@backstage/plugin-catalog-backend-module-gcp`
- `@backstage/plugin-catalog-backend-module-gerrit`
- `@backstage/plugin-catalog-backend-module-github-org`
- `@backstage/plugin-catalog-backend-module-ldap`
- `@backstage/plugin-catalog-backend-module-logs`
- `@backstage/plugin-catalog-backend-module-puppetdb`
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model`
- `@backstage/plugin-catalog-backend-module-unprocessed`
- `@backstage/plugin-catalog-common`
- `@backstage/plugin-catalog-graph`
- `@backstage/plugin-catalog-import`
- `@backstage/plugin-catalog-node`
- `@backstage/plugin-catalog-unprocessed-entities`
- `@backstage/plugin-catalog-unprocessed-entities-common`
- `@backstage/plugin-config-schema`
- `@backstage/plugin-devtools`
- `@backstage/plugin-devtools-common`
- `@backstage/plugin-events-backend-module-aws-sqs`
- `@backstage/plugin-events-backend-module-azure`
- `@backstage/plugin-events-backend-module-bitbucket-cloud`
- `@backstage/plugin-events-backend-module-gerrit`
- `@backstage/plugin-events-backend-module-github`
- `@backstage/plugin-events-backend-module-gitlab`
- `@backstage/plugin-events-backend-test-utils`
- `@backstage/plugin-events-node`
- `@backstage/plugin-kubernetes`
- `@backstage/plugin-kubernetes-backend`
- `@backstage/plugin-kubernetes-cluster`
- `@backstage/plugin-kubernetes-common`
- `@backstage/plugin-kubernetes-node`
- `@backstage/plugin-kubernetes-react`
- `@backstage/plugin-notifications`
- `@backstage/plugin-notifications-common`
- `@backstage/plugin-notifications-node`
- `@backstage/plugin-org`
- `@backstage/plugin-org-react`
- `@backstage/plugin-permission-backend-module-allow-all-policy`
- `@backstage/plugin-permission-common`
- `@backstage/plugin-permission-react`
- `@backstage/plugin-scaffolder-backend-module-azure`
- `@backstage/plugin-scaffolder-backend-module-bitbucket`
- `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud`
- `@backstage/plugin-scaffolder-backend-module-bitbucket-server`
- `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown`
- `@backstage/plugin-scaffolder-backend-module-cookiecutter`
- `@backstage/plugin-scaffolder-backend-module-gcp`
- `@backstage/plugin-scaffolder-backend-module-gerrit`
- `@backstage/plugin-scaffolder-backend-module-gitea`
- `@backstage/plugin-scaffolder-backend-module-notifications`
- `@backstage/plugin-scaffolder-backend-module-rails`
- `@backstage/plugin-scaffolder-backend-module-sentry`
- `@backstage/plugin-scaffolder-backend-module-yeoman`
- `@backstage/plugin-scaffolder-common`
- `@backstage/plugin-scaffolder-node-test-utils`
- `@backstage/plugin-search`
- `@backstage/plugin-search-backend`
- `@backstage/plugin-search-backend-module-elasticsearch`
- `@backstage/plugin-search-backend-module-explore`
- `@backstage/plugin-search-backend-module-pg`
- `@backstage/plugin-search-backend-module-stack-overflow-collator`
- `@backstage/plugin-search-backend-module-techdocs`
- `@backstage/plugin-search-backend-node`
- `@backstage/plugin-search-common`
- `@backstage/plugin-search-react`
- `@backstage/plugin-signals`
- `@backstage/plugin-signals-node`
- `@backstage/plugin-signals-react`
- `@backstage/plugin-techdocs-addons-test-utils`
- `@backstage/plugin-techdocs-node`
- `@backstage/plugin-techdocs-react`
- `@backstage/plugin-user-settings`
- `@backstage/plugin-user-settings-backend`
- `@backstage/repo-tools`
- `@backstage/test-utils`
- `@techdocs/cli`
