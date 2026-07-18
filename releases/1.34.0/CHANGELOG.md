# Backstage Release 1.34.0 changelog

Changes between 1.33.6 and 1.34.0 — 167 changed and 0 added packages.

## Summary

- [Breaking changes](#breaking-changes): 5 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 8 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 1 package
- [Other minor version bumps](#other-minor-version-bumps): 11 packages
- [Other patch version bumps](#other-patch-version-bumps): 57 packages
- [Excluded dependency updates for packages](#excluded-dependency-updates-for-packages): 85 packages

## Table of contents

- [Breaking changes](#breaking-changes)
  - [`@backstage/backend-defaults` (0.5.3 → 0.6.0)](#backstagebackend-defaults-053--060)
  - [`@backstage/backend-test-utils` (1.1.0 → 1.2.0)](#backstagebackend-test-utils-110--120)
  - [`@backstage/plugin-devtools-backend` (0.4.2 → 0.5.0)](#backstageplugin-devtools-backend-042--050)
  - [`@backstage/plugin-notifications-backend` (0.4.3 → 0.5.0)](#backstageplugin-notifications-backend-043--050)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.6.2 → 0.7.0)](#backstageplugin-scaffolder-backend-module-gitlab-062--070)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/backend-openapi-utils` (0.3.0 → 0.4.0)](#backstagebackend-openapi-utils-030--040)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.2.4 → 0.3.0)](#backstageplugin-catalog-backend-module-azure-024--030)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.2.4 → 0.3.0)](#backstageplugin-catalog-backend-module-bitbucket-server-024--030)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.5.0 → 0.6.0)](#backstageplugin-catalog-backend-module-gitlab-050--060)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.10.1 → 0.11.0)](#backstageplugin-catalog-backend-module-ldap-0101--0110)
  - [`@backstage/plugin-events-backend` (0.3.16 → 0.4.0)](#backstageplugin-events-backend-0316--040)
  - [`@backstage/plugin-notifications` (0.4.1 → 0.5.0)](#backstageplugin-notifications-041--050)
  - [`@backstage/repo-tools` (0.11.1 → 0.12.0)](#backstagerepo-tools-0111--0120)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/release-manifests` (0.0.11 → 0.0.12)](#backstagerelease-manifests-0011--0012)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/backend-app-api` (1.0.2 → 1.1.0)](#backstagebackend-app-api-102--110)
  - [`@backstage/backend-plugin-api` (1.0.2 → 1.1.0)](#backstagebackend-plugin-api-102--110)
  - [`@backstage/catalog-client` (1.8.0 → 1.9.0)](#backstagecatalog-client-180--190)
  - [`@backstage/integration` (1.15.2 → 1.16.0)](#backstageintegration-1152--1160)
  - [`@backstage/plugin-catalog` (1.25.1 → 1.26.0)](#backstageplugin-catalog-1251--1260)
  - [`@backstage/plugin-catalog-backend` (1.28.0 → 1.29.0)](#backstageplugin-catalog-backend-1280--1290)
  - [`@backstage/plugin-catalog-node` (1.14.0 → 1.15.0)](#backstageplugin-catalog-node-1140--1150)
  - [`@backstage/plugin-catalog-react` (1.14.2 → 1.15.0)](#backstageplugin-catalog-react-1142--1150)
  - [`@backstage/plugin-scaffolder-backend` (1.27.2 → 1.28.0)](#backstageplugin-scaffolder-backend-1272--1280)
  - [`@backstage/plugin-search-backend` (1.7.0 → 1.8.0)](#backstageplugin-search-backend-170--180)
  - [`@backstage/plugin-techdocs` (1.11.2 → 1.12.0)](#backstageplugin-techdocs-1112--1120)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/cli` (0.29.3 → 0.29.4)](#backstagecli-0293--0294)
  - [`@backstage/cli-node` (0.2.10 → 0.2.11)](#backstagecli-node-0210--0211)
  - [`@backstage/config-loader` (1.9.2 → 1.9.3)](#backstageconfig-loader-192--193)
  - [`@backstage/core-app-api` (1.15.2 → 1.15.3)](#backstagecore-app-api-1152--1153)
  - [`@backstage/core-compat-api` (0.3.3 → 0.3.4)](#backstagecore-compat-api-033--034)
  - [`@backstage/core-components` (0.16.1 → 0.16.2)](#backstagecore-components-0161--0162)
  - [`@backstage/create-app` (0.5.22 → 0.5.23)](#backstagecreate-app-0522--0523)
  - [`@backstage/errors` (1.2.5 → 1.2.6)](#backstageerrors-125--126)
  - [`@backstage/frontend-plugin-api` (0.9.2 → 0.9.3)](#backstagefrontend-plugin-api-092--093)
  - [`@backstage/plugin-api-docs` (0.12.1 → 0.12.2)](#backstageplugin-api-docs-0121--0122)
  - [`@backstage/plugin-app` (0.1.3 → 0.1.4)](#backstageplugin-app-013--014)
  - [`@backstage/plugin-app-backend` (0.4.2 → 0.4.3)](#backstageplugin-app-backend-042--043)
  - [`@backstage/plugin-auth-backend` (0.24.0 → 0.24.1)](#backstageplugin-auth-backend-0240--0241)
  - [`@backstage/plugin-auth-backend-module-aws-alb-provider` (0.3.0 → 0.3.1)](#backstageplugin-auth-backend-module-aws-alb-provider-030--031)
  - [`@backstage/plugin-auth-backend-module-bitbucket-server-provider` (0.1.2 → 0.1.3)](#backstageplugin-auth-backend-module-bitbucket-server-provider-012--013)
  - [`@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.3.2 → 0.3.3)](#backstageplugin-auth-backend-module-cloudflare-access-provider-032--033)
  - [`@backstage/plugin-auth-backend-module-google-provider` (0.2.2 → 0.2.3)](#backstageplugin-auth-backend-module-google-provider-022--023)
  - [`@backstage/plugin-auth-backend-module-microsoft-provider` (0.2.2 → 0.2.3)](#backstageplugin-auth-backend-module-microsoft-provider-022--023)
  - [`@backstage/plugin-auth-node` (0.5.4 → 0.5.5)](#backstageplugin-auth-node-054--055)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (0.2.4 → 0.2.5)](#backstageplugin-catalog-backend-module-gerrit-024--025)
  - [`@backstage/plugin-catalog-backend-module-github` (0.7.7 → 0.7.8)](#backstageplugin-catalog-backend-module-github-077--078)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.6.0 → 0.6.1)](#backstageplugin-catalog-backend-module-incremental-ingestion-060--061)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.6.4 → 0.6.5)](#backstageplugin-catalog-backend-module-msgraph-064--065)
  - [`@backstage/plugin-catalog-backend-module-puppetdb` (0.2.4 → 0.2.5)](#backstageplugin-catalog-backend-module-puppetdb-024--025)
  - [`@backstage/plugin-config-schema` (0.1.62 → 0.1.63)](#backstageplugin-config-schema-0162--0163)
  - [`@backstage/plugin-events-node` (0.4.5 → 0.4.6)](#backstageplugin-events-node-045--046)
  - [`@backstage/plugin-home` (0.8.2 → 0.8.3)](#backstageplugin-home-082--083)
  - [`@backstage/plugin-home-react` (0.1.20 → 0.1.21)](#backstageplugin-home-react-0120--0121)
  - [`@backstage/plugin-kubernetes-backend` (0.19.0 → 0.19.1)](#backstageplugin-kubernetes-backend-0190--0191)
  - [`@backstage/plugin-notifications-node` (0.2.9 → 0.2.10)](#backstageplugin-notifications-node-029--0210)
  - [`@backstage/plugin-permission-backend` (0.5.51 → 0.5.52)](#backstageplugin-permission-backend-0551--0552)
  - [`@backstage/plugin-permission-node` (0.8.5 → 0.8.6)](#backstageplugin-permission-node-085--086)
  - [`@backstage/plugin-proxy-backend` (0.5.8 → 0.5.9)](#backstageplugin-proxy-backend-058--059)
  - [`@backstage/plugin-scaffolder` (1.27.1 → 1.27.2)](#backstageplugin-scaffolder-1271--1272)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket` (0.3.4 → 0.3.5)](#backstageplugin-scaffolder-backend-module-bitbucket-034--035)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.2.3 → 0.2.4)](#backstageplugin-scaffolder-backend-module-bitbucket-cloud-023--024)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.3 → 0.2.4)](#backstageplugin-scaffolder-backend-module-bitbucket-server-023--024)
  - [`@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.3 → 0.3.4)](#backstageplugin-scaffolder-backend-module-confluence-to-markdown-033--034)
  - [`@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.3 → 0.2.4)](#backstageplugin-scaffolder-backend-module-gerrit-023--024)
  - [`@backstage/plugin-scaffolder-backend-module-gitea` (0.2.3 → 0.2.4)](#backstageplugin-scaffolder-backend-module-gitea-023--024)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.5.3 → 0.5.4)](#backstageplugin-scaffolder-backend-module-github-053--054)
  - [`@backstage/plugin-scaffolder-backend-module-sentry` (0.2.3 → 0.2.4)](#backstageplugin-scaffolder-backend-module-sentry-023--024)
  - [`@backstage/plugin-scaffolder-common` (1.5.7 → 1.5.8)](#backstageplugin-scaffolder-common-157--158)
  - [`@backstage/plugin-scaffolder-node` (0.6.1 → 0.6.2)](#backstageplugin-scaffolder-node-061--062)
  - [`@backstage/plugin-scaffolder-react` (1.14.1 → 1.14.2)](#backstageplugin-scaffolder-react-1141--1142)
  - [`@backstage/plugin-search` (1.4.20 → 1.4.21)](#backstageplugin-search-1420--1421)
  - [`@backstage/plugin-search-backend-module-catalog` (0.2.5 → 0.2.6)](#backstageplugin-search-backend-module-catalog-025--026)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.6.2 → 1.6.3)](#backstageplugin-search-backend-module-elasticsearch-162--163)
  - [`@backstage/plugin-search-backend-module-explore` (0.2.5 → 0.2.6)](#backstageplugin-search-backend-module-explore-025--026)
  - [`@backstage/plugin-search-backend-module-stack-overflow-collator` (0.3.3 → 0.3.4)](#backstageplugin-search-backend-module-stack-overflow-collator-033--034)
  - [`@backstage/plugin-search-backend-module-techdocs` (0.3.3 → 0.3.4)](#backstageplugin-search-backend-module-techdocs-033--034)
  - [`@backstage/plugin-search-backend-node` (1.3.5 → 1.3.6)](#backstageplugin-search-backend-node-135--136)
  - [`@backstage/plugin-search-react` (1.8.3 → 1.8.4)](#backstageplugin-search-react-183--184)
  - [`@backstage/plugin-signals-backend` (0.2.3 → 0.2.4)](#backstageplugin-signals-backend-023--024)
  - [`@backstage/plugin-techdocs-backend` (1.11.3 → 1.11.4)](#backstageplugin-techdocs-backend-1113--1114)
  - [`@backstage/plugin-techdocs-node` (1.12.14 → 1.12.15)](#backstageplugin-techdocs-node-11214--11215)
  - [`@backstage/theme` (0.6.2 → 0.6.3)](#backstagetheme-062--063)
- [Excluded dependency updates for packages](#excluded-dependency-updates-for-packages)

## Breaking changes

### `@backstage/backend-defaults` (0.5.3 → 0.6.0)

#### 0.6.0

##### Minor Changes

- fd5d337: Added a new `backend.health.headers` configuration that can be used to set additional headers to include in health check responses.

  **BREAKING CONSUMERS**: As part of this change the `createHealthRouter` function exported from `@backstage/backend-defaults/rootHttpRouter` now requires the root config service to be passed through the `config` option.

- 3f34ea9: Throttles Bitbucket Server API calls
- de6f280: **BREAKING** Upgraded @keyv/redis and keyv packages to resolve a bug related to incorrect resolution of cache keys.

  This is a breaking change for clients using the `redis` store for cache with `useRedisSets` option set to false since cache keys will be calculated differently (without the sets:namespace: prefix). For clients with default configuration (or useRedisSets set to false) the cache keys will stay the same, but since @keyv/redis library no longer supports redis sets they won't be utilised anymore.

  If you were using `useRedisSets` option in configuration make sure to remove it from `app-config.yaml`:

  ```diff
  backend:
    cache:
      store: redis
      connection: redis://user:pass@cache.example.com:6379
  -   useRedisSets: false
  ```

- 29180ec: **BREAKING PRODUCERS**: The `LifecycleMiddlewareOptions.startupRequestPauseTimeout` has been removed. Use the `backend.lifecycle.startupRequestPauseTimeout` setting in your `app-config.yaml` file to customize how the `createLifecycleMiddleware` function should behave. Also the root config service is required as an option when calling the `createLifecycleMiddleware` function:

  ```diff
  - createLifecycleMiddleware({ lifecycle, startupRequestPauseTimeout })
  + createLifecycleMiddleware({ config,  lifecycle })
  ```

- 277092a: Implemented `AzureBlobStorageUrlReader` to read from the url of committed location from the entity provider
- 18a2c00: All middleware used by the default `coreServices.http` is now exported for use by custom implementations.

##### Patch Changes

- dfc8b41: Updated dependency `@opentelemetry/api` to `^1.9.0`.
- 5b1e68c: Immediately close all connections when shutting down in local development.
- 8863b38: Export `PluginTokenHandler` and `pluginTokenHandlerDecoratorServiceRef` to allow for custom decoration of the plugin token handler without having to re-implement the entire handler.
- 29180ec: Fix server response time by moving the lifecycle startup hooks back to the plugin lifecycle service.
- 57e0b11: The user and plugin token verification in the default `AuthService` implementation will no longer forward verification errors to the caller, and instead log them as warnings.
- 97c6837: Export `DefaultHttpAuthService` to allow for custom token extraction logic.
- e5255f1: Log request and response metadata so it can be used for filtering log messages.
  The format of the request date was also changed from `clf` to `utc`.
- 57e0b11: The default `authServiceFactory` now correctly depends on the plugin scoped `Logger` services rather than the root scoped one.
- fe87fbf: Add task metrics as two gauges that track the last start and end timestamps as epoch seconds.
- 1ac6b72: Support `connection.type: cloudsql` in database client for usage with `@google-cloud/cloud-sql-connector` and `iam` auth
- 0e9c9fa: Implements the `DefaultRootLifecycleService.addBeforeShutdownHook` method, and updates `DefaultRootHttpRouterService` and `DefaultRootHealthService` to listen to that event to stop accepting traffic and close service connections.
- d0cbd82: Remove use of the `stoppable` library on the `DefaultRootHttpRouterService` as Node's native http server [close](https://nodejs.org/api/http.html#serverclosecallback) method already drains requests.
- 5c9cc05: Use native fetch instead of node-fetch
- cf627c6: Fixed an issue in the WinstonLogger where Errors thrown and given to logger.error with field values that could not be cast to a string would throw a TypeError

### `@backstage/backend-test-utils` (1.1.0 → 1.2.0)

#### 1.2.0

##### Minor Changes

- de6f280: **BREAKING** Upgraded @keyv/redis and keyv packages to resolve a bug related to incorrect resolution of cache keys.

  This is a breaking change for clients using the `redis` store for cache with `useRedisSets` option set to false since cache keys will be calculated differently (without the sets:namespace: prefix). For clients with default configuration (or useRedisSets set to false) the cache keys will stay the same, but since @keyv/redis library no longer supports redis sets they won't be utilised anymore.

  If you were using `useRedisSets` option in configuration make sure to remove it from `app-config.yaml`:

  ```diff
  backend:
    cache:
      store: redis
      connection: redis://user:pass@cache.example.com:6379
  -   useRedisSets: false
  ```

##### Patch Changes

- 0e9c9fa: Mock the new `RootLifecycleService.addBeforeShutdownHook` method.

### `@backstage/plugin-devtools-backend` (0.4.2 → 0.5.0)

#### 0.5.0

##### Minor Changes

- c781a9a: **BREAKING** Removed support for what is known as the legacy backend, please use the New Backend System.

##### Patch Changes

- 1e624ca: Restrict `@types/express` version range from `*` to `^4.17.6`.
- 5c9cc05: Use native fetch instead of node-fetch

### `@backstage/plugin-notifications-backend` (0.4.3 → 0.5.0)

#### 0.5.0

##### Minor Changes

- fc15b77: **BREAKING**: Removed redundant `/health` endpoint, switch to using [the built-in endpoint instead](https://backstage.io/docs/backend-system/core-services/root-health).

##### Patch Changes

- fc15b77: Deprecated root '/' endpoints, moving them under `/notifications` instead.
- 5c9cc05: Use native fetch instead of node-fetch

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.6.2 → 0.7.0)

#### 0.7.0

##### Minor Changes

- c4ffd13: Added the autocomplete feature to GitlabRepoUrlPicker
- 32459d0: **BREAKING**: Upgraded the `gitbeaker` library to version 41. As part of this, the `scopes` parameter to the `gitlab:projectDeployToken:create` is no longer optional, so you will have to pass it a value (for example `['read_repository']`).

## 0.x minor version bumps

### `@backstage/backend-openapi-utils` (0.3.0 → 0.4.0)

#### 0.4.0

##### Minor Changes

- afcebea: Fixed a Typescript error when trying to use the new OpenAPI server-side generated code.

### `@backstage/plugin-catalog-backend-module-azure` (0.2.4 → 0.3.0)

#### 0.3.0

##### Minor Changes

- 277092a: Added the Azure Blob Storage as catalog entity provider to import all the desired entities from storage account provided in app-config.yaml

##### Patch Changes

- 5c9cc05: Use native fetch instead of node-fetch

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.2.4 → 0.3.0)

#### 0.3.0

##### Minor Changes

- 3f34ea9: Throttles Bitbucket Server API calls

##### Patch Changes

- 5c9cc05: Use native fetch instead of node-fetch

### `@backstage/plugin-catalog-backend-module-gitlab` (0.5.0 → 0.6.0)

#### 0.6.0

##### Minor Changes

- 99dce5c: Implemented discovery for top-level groups defined in config.group or if undefined global top-level group in Gitlab

##### Patch Changes

- 191e5bf: `restrictUsersToGroup` should use the entire group path when getting members
- 5c9cc05: Use native fetch instead of node-fetch

### `@backstage/plugin-catalog-backend-module-ldap` (0.10.1 → 0.11.0)

#### 0.11.0

##### Minor Changes

- 732700a: Updated fix for ldap entity mapping which doesn't require extra config setting of dnCaseSensitive
- 95ac4a2: Add new ldap vendor config 'LLDAP'

##### Patch Changes

- 5f04976: Fixed a bug that caused missing code in published packages.

### `@backstage/plugin-events-backend` (0.3.16 → 0.4.0)

#### 0.4.0

##### Minor Changes

- 384e494: Internal updates to generated code.

##### Patch Changes

- 1577511: Allow configuring a timeout for event bus polling requests. This can be set like so in your app-config:

  ```yaml
  events:
    notifyTimeoutMs: 30000
  ```

### `@backstage/plugin-notifications` (0.4.1 → 0.5.0)

#### 0.5.0

##### Minor Changes

- fc15b77: Switched to using the new `/notifications` endpoints. Be sure to update the `notifications` plugin backend before deploying this frontend plugin change.

### `@backstage/repo-tools` (0.11.1 → 0.12.0)

#### 0.12.0

##### Minor Changes

- c1eccd6: Fix invalid path and malformed flags bugs in api-reports.ts

##### Patch Changes

- 860e3b5: Generated OpenAPI clients now support paths with tags.
- 5f04976: Fixed a bug that caused missing code in published packages.
- 00058d0: The `generate-patch` command will now add a single resolution entry for all versions of the patched package, rather than separate entries for each version query.

## 0.0.x patch version bumps

### `@backstage/release-manifests` (0.0.11 → 0.0.12)

#### 0.0.12

##### Patch Changes

- 2e140dc: Switch to native fetch for loading release manifests
- b29eaea: Allow overriding the fetch function used inside getManifestByVersion

## Other minor version bumps

### `@backstage/backend-app-api` (1.0.2 → 1.1.0)

#### 1.1.0

##### Minor Changes

- ebf083d: Service factories added by feature loaders now have lower priority and will be ignored if a factory for the same service is added directly by `backend.add(serviceFactory)`.
- 12eac85: **EXPERIMENTAL**: Adds a new `instanceMetadataService` to hold information about a specific backend instance.

##### Patch Changes

- eef3ef1: Removed unused `express` dependencies.
- ae2408b: Add a `toString` on the default `BackendFeatureMeta` implementations
- 5c9cc05: Use native fetch instead of node-fetch
- 0e9c9fa: As soon as a backend termination signal is received, call before shutting down root lifecycle hooks.

### `@backstage/backend-plugin-api` (1.0.2 → 1.1.0)

#### 1.1.0

##### Minor Changes

- 12eac85: **EXPERIMENTAL**: Adds a new `instanceMetadataService` to hold information about a specific backend instance.

##### Patch Changes

- eef3ef1: Removed unused `express` dependencies.
- 0e9c9fa: The `RootLifecycleService` now has a new `addBeforeShutdownHook` method, and hooks added through this method will run immediately when a termination event is received.

  The backend will not proceed with the shutdown and run the `Shutdown` hooks until all `BeforeShutdown` hooks have completed.

### `@backstage/catalog-client` (1.8.0 → 1.9.0)

#### 1.9.0

##### Minor Changes

- 384e494: Internal updates to generated code.

##### Patch Changes

- d7e7836: Fixed a bug in the `queryEntities` method where errors were not being handled properly.

### `@backstage/integration` (1.15.2 → 1.16.0)

#### 1.16.0

##### Minor Changes

- 277092a: Add the integration for Azure blob storage to read the credentials to access the storage account and provide the default credential provider.

### `@backstage/plugin-catalog` (1.25.1 → 1.26.0)

#### 1.26.0

##### Minor Changes

- 25beb82: Adds an optional columns attribute to HasSubdomainsCardProps and changes its default columns
- 39f1abc: Consistent title behaviour across CatalogTable, CursorPaginatedCatalogTable, and OffsetPaginatedCatalogTable.
- 1ffb9f3: Update `CatalogTable` title to use properly capitalized Kind facets (e.g. 'Component' instead of 'component')

### `@backstage/plugin-catalog-backend` (1.28.0 → 1.29.0)

#### 1.29.0

##### Minor Changes

- 02bd2cb: Added a new `catalog.disableRelationsCompatibility` configuration option that avoids JSON deserialization and serialization if possible when reading entities. This significantly reduces the memory usage of the catalog, and slightly increases performance, but it removes the backwards compatibility processing that ensures that both `entity.relation[].target` and `entity.relation[].targetRef` are present in returned entities.
- c1307b4: Implement `/entities` in terms of `queryEntities` to not run into memory and performance problems on large catalogs
- 384e494: Internal updates to generated code.
- 1d0bc11: Fetch all facets in a single database query

##### Patch Changes

- dfc8b41: Updated dependency `@opentelemetry/api` to `^1.9.0`.
- 8013c9c: Perform the by-query count inlined with the main query
- feba9ee: Internal refactor of filter parsing logic.
- 1fdb48e: Use a faster count method on pg when computing some metrics
- e4aab10: Fix a bug where sometimes the `by-query` endpoint could return nulls for entities that were not yet stitched.
- f159b25: Compute deltas more efficiently, which generally leads to less wasted processing cycles
- 0c33465: Implement `/entities/by-name/:kind/:namespace/:name` using `getEntitiesByRefs`
- 56511ba: Be more aggressive in dequeueing entities for stitching
- 71152e3: Correctly report stitching queue length
- 5c9cc05: Use native fetch instead of node-fetch
- d93390d: When parsing filters, do not make redundant `anyOf` and `allOf` nodes when there's only a single entry within them
- 3ab57c6: Support changing location keys on existing entities, in delta mutations
- 24ecea8: Avoid extra ordering in by-query when the user doesn't ask for it
- 2924ffe: Compute some metrics using search table facet aggregations instead of reading the full refresh state

### `@backstage/plugin-catalog-node` (1.14.0 → 1.15.0)

#### 1.15.0

##### Minor Changes

- 8edc4cd: Updated the `catalogServiceMock` return type to match both `CatalogService` and `CatalogApi`

### `@backstage/plugin-catalog-react` (1.14.2 → 1.15.0)

#### 1.15.0

##### Minor Changes

- 1ffb9f3: Update `EntityKindFilter` to include a `label` field with the properly capitalized Kind facet string
- ceaf602: Sort EntityTypePicker by default

##### Patch Changes

- d97a2cd: Fixed an issue causing the `EntityOwnerPicker` to reset scrolling when more elements are loaded.
- c36bd35: Internal refactor to break potential circular imports
- f18c67d: Fix catalog filtering to allow searching entities by display name
- 95092a6: Fixed an issue where `<CatalogFilterLayout.Filters />` would re-render its children on page load for smaller screens, potentially leading to unnecessary additional backend requests.
- 4a43398: Fixed an issue where the `EntityOwnerPicker` component failed to load when the `mode` prop was set to `owners-only`. In this mode, the `EntityOwnerPicker` does not load details about the owners, such as `displayName` or `title`. To display these details, use `mode=all` instead.

### `@backstage/plugin-scaffolder-backend` (1.27.2 → 1.28.0)

#### 1.28.0

##### Minor Changes

- c05a343: Emit scaffolder events using the optional `EventsService`

##### Patch Changes

- dfc8b41: Updated dependency `@opentelemetry/api` to `^1.9.0`.
- 3c62a50: Experimental support for `formDecorators` to enable secret collection and mutations to the parameters for scaffolder tasks
- 6c326cf: The --no-node-snapshot check needs to be done against process.execArgv instead of process.argv
- e913fdf: Add github backend module to create-app and improve error messages
- 8f59dc5: Add fs:readdir to scaffolder startup
- 0851834: Resolved an issue where the `templateManagementPermission` was not being exposed through the `/permissions/metadata` endpoint.

### `@backstage/plugin-search-backend` (1.7.0 → 1.8.0)

#### 1.8.0

##### Minor Changes

- 384e494: Internal updates to generated code.

### `@backstage/plugin-techdocs` (1.11.2 → 1.12.0)

#### 1.12.0

##### Minor Changes

- e153ca6: Add pagination support to TechDocs Index Page and make it the default

##### Patch Changes

- 7d8777d: Added support for the Search bar in docs residing in the entity page tab, and not only the global "/docs" page.

## Other patch version bumps

### `@backstage/cli` (0.29.3 → 0.29.4)

#### 0.29.4

##### Patch Changes

- 2b6c1ea: If the Backstage yarn plugin is installed, it will now be automatically updated as part of `versions:bump`.
- 7dcff85: Remove special-casing for `@types` packages when generating dependency entries
  during templating
- 3c3a7e6: Revert `css-loader@v7` bump
- 0aff006: Bumped the version range for `html-webpack-plugin` to fix the `htmlPluginExports.getCompilationHooks is not a function` error when using experimental Rspack.
- 583f3d4: Added `@backstage/cli/config/prettier` as a replacement for `@spotify/prettier-config`, but with the same configuration.
- 62a9062: Updated dependency `@module-federation/enhanced` to `^0.8.0`.
- 5f04976: Update `rollup` to avoid issues with build output when running `backstage-cli package build`.
- 5f04976: Fixed a bug that caused missing code in published packages.
- a49030a: Add support for `--output-file` option from ESLint to `package lint` and `repo lint` commands.
- 96331fa: Enhance the behavior of the experimental support for module federation in the backstage CLI,
  by using the `package.json` exports (when present) to complete the list of exposed modules.
  This allows, for example, using exported `alpha` definitions through module federation.
- 5c9cc05: Use native fetch instead of node-fetch
- dcd99d2: added experimental RSPack support for build command in the repo scope

### `@backstage/cli-node` (0.2.10 → 0.2.11)

#### 0.2.11

##### Patch Changes

- af665ea: add PackageManager and Lockfile interfaces for future use
- cbfc69e: Internal refactor

### `@backstage/config-loader` (1.9.2 → 1.9.3)

#### 1.9.3

##### Patch Changes

- 5c9cc05: Use native fetch instead of node-fetch

### `@backstage/core-app-api` (1.15.2 → 1.15.3)

#### 1.15.3

##### Patch Changes

- e5fa018: The OAuth 2 client implementations will now attempt to refresh the session when the existing session doesn't have the required scopes. The previous behavior was to only try to refresh the session of it was missing, and otherwise directly request a new session. This fixes an issue where some auth providers will not return access tokens with certain scopes unless explicitly requested, leading to an auth popup even if the underlying session already had been granted the requested scopes.
- 2830689: Decrease OAuth2 token refresh grace period

### `@backstage/core-compat-api` (0.3.3 → 0.3.4)

#### 0.3.4

##### Patch Changes

- 1f30730: Updated dependency `@oriflame/backstage-plugin-score-card` to `^0.9.0`.

### `@backstage/core-components` (0.16.1 → 0.16.2)

#### 0.16.2

##### Patch Changes

- e47be38: Added data-testid to placeholder rendered by Progress component to simplify assertions in tests

### `@backstage/create-app` (0.5.22 → 0.5.23)

#### 0.5.23

##### Patch Changes

- 5819f8d: Updated Dockerfile to include `backstage.json` file
- 583f3d4: Updated the template to use `@backstage/cli/config/prettier` instead of `@spotify/prettier-config`.
- e913fdf: Add github backend module to create-app and improve error messages
- 5c9cc05: Use native fetch instead of node-fetch

### `@backstage/errors` (1.2.5 → 1.2.6)

#### 1.2.6

##### Patch Changes

- 1d4b5b9: Trim `error.cause.stack` in addition to `error.stack` when trimming stack traces from serialized errors.

### `@backstage/frontend-plugin-api` (0.9.2 → 0.9.3)

#### 0.9.3

##### Patch Changes

- 5f04976: Fixed a bug that caused missing code in published packages.

### `@backstage/plugin-api-docs` (0.12.1 → 0.12.2)

#### 0.12.2

##### Patch Changes

- 11babd9: Fix link styling in ProvidedApisCard component so it aligns with other card components.

### `@backstage/plugin-app` (0.1.3 → 0.1.4)

#### 0.1.4

##### Patch Changes

- e5fa018: The OAuth 2 client implementations will now attempt to refresh the session when the existing session doesn't have the required scopes. The previous behavior was to only try to refresh the session of it was missing, and otherwise directly request a new session. This fixes an issue where some auth providers will not return access tokens with certain scopes unless explicitly requested, leading to an auth popup even if the underlying session already had been granted the requested scopes.
- 5f04976: Fixed a bug that caused missing code in published packages.

### `@backstage/plugin-app-backend` (0.4.2 → 0.4.3)

#### 0.4.3

##### Patch Changes

- 74c3f2a: Fixed a bug where config would not be injected on the `/` and `/index.html` paths.
- 5c9cc05: Use native fetch instead of node-fetch
- d66fa80: Fix root route handling when query parameters are present

### `@backstage/plugin-auth-backend` (0.24.0 → 0.24.1)

#### 0.24.1

##### Patch Changes

- c907440: Improved error forwarding for OAuth refresh endpoints
- 40518ab: Fix issue with `jwks` endpoint returning invalid data with `firestore`
- 5c9cc05: Use native fetch instead of node-fetch

### `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.3.0 → 0.3.1)

#### 0.3.1

##### Patch Changes

- 5c9cc05: Use native fetch instead of node-fetch

### `@backstage/plugin-auth-backend-module-bitbucket-server-provider` (0.1.2 → 0.1.3)

#### 0.1.3

##### Patch Changes

- 5c9cc05: Use native fetch instead of node-fetch

### `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.3.2 → 0.3.3)

#### 0.3.3

##### Patch Changes

- 5c9cc05: Use native fetch instead of node-fetch

### `@backstage/plugin-auth-backend-module-google-provider` (0.2.2 → 0.2.3)

#### 0.2.3

##### Patch Changes

- 79b055a: Pass through `includeGrantedScopes` in order to persist scopes across refresh calls

### `@backstage/plugin-auth-backend-module-microsoft-provider` (0.2.2 → 0.2.3)

#### 0.2.3

##### Patch Changes

- 5c9cc05: Use native fetch instead of node-fetch

### `@backstage/plugin-auth-node` (0.5.4 → 0.5.5)

#### 0.5.5

##### Patch Changes

- c907440: Improved error forwarding for OAuth refresh endpoints
- 1e624ca: Restrict `@types/express` version range from `*` to `^4.17.6`.
- 5c9cc05: Use native fetch instead of node-fetch

### `@backstage/plugin-catalog-backend-module-gerrit` (0.2.4 → 0.2.5)

#### 0.2.5

##### Patch Changes

- 5c9cc05: Use native fetch instead of node-fetch

### `@backstage/plugin-catalog-backend-module-github` (0.7.7 → 0.7.8)

#### 0.7.8

##### Patch Changes

- 468bbcc: Pass in a default schedule to the `GithubEntityProvider` if none is provided
- 5c9cc05: Use native fetch instead of node-fetch

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.6.0 → 0.6.1)

#### 0.6.1

##### Patch Changes

- dfc8b41: Updated dependency `@opentelemetry/api` to `^1.9.0`.
- cce9cae: Deprecate old-backend-system `IncrementalCatalogBuilder`
- fe87fbf: Add task metrics as two gauges that track the last start and end timestamps as epoch seconds.
- 5aa44d2: Wire up the events together in the new backend system
- d42ecb0: Remove backend-common package from incremental-ingestion plugin and update related code
- cbfc69e: Create a `dev/index.ts` entrypoint for `yarn start`
- 3ca5f70: Ensure that the scheduled worker task doesn't run at an unreasonably high frequency

### `@backstage/plugin-catalog-backend-module-msgraph` (0.6.4 → 0.6.5)

#### 0.6.5

##### Patch Changes

- 5c9cc05: Use native fetch instead of node-fetch

### `@backstage/plugin-catalog-backend-module-puppetdb` (0.2.4 → 0.2.5)

#### 0.2.5

##### Patch Changes

- 5c9cc05: Use native fetch instead of node-fetch

### `@backstage/plugin-config-schema` (0.1.62 → 0.1.63)

#### 0.1.63

##### Patch Changes

- c36bd35: Internal refactor to break potential circular imports

### `@backstage/plugin-events-node` (0.4.5 → 0.4.6)

#### 0.4.6

##### Patch Changes

- 79a06f6: Clarified purpose of subscriber ID in TSDoc for `EventsServiceSubscribeOptions`.
- 1577511: Allow configuring a timeout for event bus polling requests. This can be set like so in your app-config:

  ```yaml
  events:
    notifyTimeoutMs: 30000
  ```

### `@backstage/plugin-home` (0.8.2 → 0.8.3)

#### 0.8.3

##### Patch Changes

- 7248f3b: Added a new Quick Start Card to `plugin-home`, which can display basic info to get users the info they need to onboard to the Catalog.

  ```
  import { QuickStartCard } from '@backstage/plugin-home';
  <QuickStartCard
    title="Onboarding to the Catalog"
    modalTitle="Onboarding Quick Start"
    docsLinkTitle="Learn more with getting started docs"
    docsLink="https://backstage.io/docs/getting-started"
    image={
      <img
        src={ContentImage}
        alt="quick start"
        width="100%"
        height="100%"
      />
    }
    cardDescription="Backstage system model will help you create new entities"
    video={
      <video
        controls
        preload="auto"
        poster={"./videoPoster.png"}
      >
        <source src={"OnboardingDemo.mp4"} type="video/mp4" />
      </video>
    }
    downloadImage={
      <Button
        href={QuickStartPDF}
        target={'_blank'}
        download={true}
      >
        Download infographic button
      </Button>
    }
  />
  ```

  See the [storybook examples](https://backstage.io/storybook/?path=/story/plugins-home-components-quickstartcard--default)

- 9951ba4: Updated dependency `@rjsf/utils` to `5.23.1`.
  Updated dependency `@rjsf/core` to `5.23.1`.
  Updated dependency `@rjsf/material-ui` to `5.23.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.23.1`.

### `@backstage/plugin-home-react` (0.1.20 → 0.1.21)

#### 0.1.21

##### Patch Changes

- 9951ba4: Updated dependency `@rjsf/utils` to `5.23.1`.
  Updated dependency `@rjsf/core` to `5.23.1`.
  Updated dependency `@rjsf/material-ui` to `5.23.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.23.1`.

### `@backstage/plugin-kubernetes-backend` (0.19.0 → 0.19.1)

#### 0.19.1

##### Patch Changes

- cbfc69e: Create a `dev/index.ts` entrypoint for `yarn start`
- 928db6a: Support fetch pod metrics with custom resources

### `@backstage/plugin-notifications-node` (0.2.9 → 0.2.10)

#### 0.2.10

##### Patch Changes

- 5c9cc05: Use native fetch instead of node-fetch

### `@backstage/plugin-permission-backend` (0.5.51 → 0.5.52)

#### 0.5.52

##### Patch Changes

- 1e624ca: Restrict `@types/express` version range from `*` to `^4.17.6`.
- 5c9cc05: Use native fetch instead of node-fetch

### `@backstage/plugin-permission-node` (0.8.5 → 0.8.6)

#### 0.8.6

##### Patch Changes

- b149e2a: The `createPermissionIntegrationRouter` function now detects and prevents the exposure of duplicate permissions.

### `@backstage/plugin-proxy-backend` (0.5.8 → 0.5.9)

#### 0.5.9

##### Patch Changes

- 5c9cc05: Use native fetch instead of node-fetch

### `@backstage/plugin-scaffolder` (1.27.1 → 1.27.2)

#### 1.27.2

##### Patch Changes

- 3c62a50: Experimental support for `formDecorators` to enable secret collection and mutations to the parameters for scaffolder tasks
- c4ffd13: Added the autocomplete feature to GitlabRepoUrlPicker
- 9951ba4: Updated dependency `@rjsf/utils` to `5.23.1`.
  Updated dependency `@rjsf/core` to `5.23.1`.
  Updated dependency `@rjsf/material-ui` to `5.23.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.23.1`.
- 184161f: Scaffolder field extensions registered with `FormFieldBlueprint` are now collected in the `useCustomFieldExtensions` hook, enabling them for use in the scaffolder.

### `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.3.4 → 0.3.5)

#### 0.3.5

##### Patch Changes

- 5f04976: Fixed a bug that caused missing code in published packages.
- 5c9cc05: Use native fetch instead of node-fetch

### `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.2.3 → 0.2.4)

#### 0.2.4

##### Patch Changes

- c4ffd13: Added the autocomplete feature to GitlabRepoUrlPicker
- 5c9cc05: Use native fetch instead of node-fetch

### `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.3 → 0.2.4)

#### 0.2.4

##### Patch Changes

- 5c9cc05: Use native fetch instead of node-fetch

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.3 → 0.3.4)

#### 0.3.4

##### Patch Changes

- 5c9cc05: Use native fetch instead of node-fetch

### `@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.3 → 0.2.4)

#### 0.2.4

##### Patch Changes

- 5c9cc05: Use native fetch instead of node-fetch

### `@backstage/plugin-scaffolder-backend-module-gitea` (0.2.3 → 0.2.4)

#### 0.2.4

##### Patch Changes

- 5c9cc05: Use native fetch instead of node-fetch

### `@backstage/plugin-scaffolder-backend-module-github` (0.5.3 → 0.5.4)

#### 0.5.4

##### Patch Changes

- 7df6179: adding requiredLinearHistory property for branch protection settings
- b5e002b: Change `github:environment:create` action to request and use a token when resolving reviewer entity refs from the Backstage catalog.
- e913fdf: Add github backend module to create-app and improve error messages
- 973dd6f: Minor spell fix in action parameters

### `@backstage/plugin-scaffolder-backend-module-sentry` (0.2.3 → 0.2.4)

#### 0.2.4

##### Patch Changes

- 5c9cc05: Use native fetch instead of node-fetch

### `@backstage/plugin-scaffolder-common` (1.5.7 → 1.5.8)

#### 1.5.8

##### Patch Changes

- 3c62a50: Experimental support for `formDecorators` to enable secret collection and mutations to the parameters for scaffolder tasks

### `@backstage/plugin-scaffolder-node` (0.6.1 → 0.6.2)

#### 0.6.2

##### Patch Changes

- c4ffd13: Added the autocomplete feature to GitlabRepoUrlPicker
- 1a23421: Make sure that isomorphic git push commands are not proxied.

### `@backstage/plugin-scaffolder-react` (1.14.1 → 1.14.2)

#### 1.14.2

##### Patch Changes

- 3c62a50: Experimental support for `formDecorators` to enable secret collection and mutations to the parameters for scaffolder tasks
- c4ffd13: Added the autocomplete feature to GitlabRepoUrlPicker
- 28e286f: Added test coverage selectors to TemplateCard and its sub-components
- c846d76: Updated dependency `flatted` to `3.3.2`.
- 9951ba4: Updated dependency `@rjsf/utils` to `5.23.1`.
  Updated dependency `@rjsf/core` to `5.23.1`.
  Updated dependency `@rjsf/material-ui` to `5.23.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.23.1`.
- 97a13ad: Improve performance of typing into scaffolder secret widget
- 184161f: Scaffolder field extensions registered with `FormFieldBlueprint` are now collected in the `useCustomFieldExtensions` hook, enabling them for use in the scaffolder.
- b21a5ae: Open links in the scaffolder entity and step descriptions in a new tab, to ensure consistency and improve user experience

### `@backstage/plugin-search` (1.4.20 → 1.4.21)

#### 1.4.21

##### Patch Changes

- d311c84: Use Select from core-components and update Lifecycle filter to use Select instead checkboxes.

### `@backstage/plugin-search-backend-module-catalog` (0.2.5 → 0.2.6)

#### 0.2.6

##### Patch Changes

- ed0aaec: Update README

### `@backstage/plugin-search-backend-module-elasticsearch` (1.6.2 → 1.6.3)

#### 1.6.3

##### Patch Changes

- 991c9fe: Update the ElasticSearchSearchEngine translator to handle phrase searches.

### `@backstage/plugin-search-backend-module-explore` (0.2.5 → 0.2.6)

#### 0.2.6

##### Patch Changes

- ed0aaec: Update README
- 5c9cc05: Use native fetch instead of node-fetch

### `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.3.3 → 0.3.4)

#### 0.3.4

##### Patch Changes

- 5c9cc05: Use native fetch instead of node-fetch

### `@backstage/plugin-search-backend-module-techdocs` (0.3.3 → 0.3.4)

#### 0.3.4

##### Patch Changes

- ed0aaec: Update README
- 5c9cc05: Use native fetch instead of node-fetch

### `@backstage/plugin-search-backend-node` (1.3.5 → 1.3.6)

#### 1.3.6

##### Patch Changes

- 5ae8a2c: Removed unnecessary dependency on `@backstage/backend-defaults`.

### `@backstage/plugin-search-react` (1.8.3 → 1.8.4)

#### 1.8.4

##### Patch Changes

- d311c84: Use Select from core-components and update Lifecycle filter to use Select instead checkboxes.

### `@backstage/plugin-signals-backend` (0.2.3 → 0.2.4)

#### 0.2.4

##### Patch Changes

- 1e624ca: Restrict `@types/express` version range from `*` to `^4.17.6`.
- 5c9cc05: Use native fetch instead of node-fetch

### `@backstage/plugin-techdocs-backend` (1.11.3 → 1.11.4)

#### 1.11.4

##### Patch Changes

- 5c9cc05: Use native fetch instead of node-fetch

### `@backstage/plugin-techdocs-node` (1.12.14 → 1.12.15)

#### 1.12.15

##### Patch Changes

- 5f04976: Fixed a bug that caused missing code in published packages.

### `@backstage/theme` (0.6.2 → 0.6.3)

#### 0.6.3

##### Patch Changes

- 5f04976: Fixed a bug that caused missing code in published packages.

## Excluded dependency updates for packages

- `@backstage/app-defaults`
- `@backstage/backend-dynamic-feature-service`
- `@backstage/catalog-model`
- `@backstage/config`
- `@backstage/core-plugin-api`
- `@backstage/dev-utils`
- `@backstage/frontend-app-api`
- `@backstage/frontend-defaults`
- `@backstage/frontend-test-utils`
- `@backstage/integration-aws-node`
- `@backstage/integration-react`
- `@backstage/plugin-app-node`
- `@backstage/plugin-app-visualizer`
- `@backstage/plugin-auth-backend-module-atlassian-provider`
- `@backstage/plugin-auth-backend-module-auth0-provider`
- `@backstage/plugin-auth-backend-module-azure-easyauth-provider`
- `@backstage/plugin-auth-backend-module-bitbucket-provider`
- `@backstage/plugin-auth-backend-module-gcp-iap-provider`
- `@backstage/plugin-auth-backend-module-github-provider`
- `@backstage/plugin-auth-backend-module-gitlab-provider`
- `@backstage/plugin-auth-backend-module-guest-provider`
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
- `@backstage/plugin-catalog-backend-module-backstage-openapi`
- `@backstage/plugin-catalog-backend-module-bitbucket-cloud`
- `@backstage/plugin-catalog-backend-module-gcp`
- `@backstage/plugin-catalog-backend-module-github-org`
- `@backstage/plugin-catalog-backend-module-gitlab-org`
- `@backstage/plugin-catalog-backend-module-logs`
- `@backstage/plugin-catalog-backend-module-openapi`
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model`
- `@backstage/plugin-catalog-backend-module-unprocessed`
- `@backstage/plugin-catalog-common`
- `@backstage/plugin-catalog-graph`
- `@backstage/plugin-catalog-import`
- `@backstage/plugin-catalog-unprocessed-entities`
- `@backstage/plugin-catalog-unprocessed-entities-common`
- `@backstage/plugin-devtools`
- `@backstage/plugin-devtools-common`
- `@backstage/plugin-events-backend-module-aws-sqs`
- `@backstage/plugin-events-backend-module-azure`
- `@backstage/plugin-events-backend-module-bitbucket-cloud`
- `@backstage/plugin-events-backend-module-gerrit`
- `@backstage/plugin-events-backend-module-github`
- `@backstage/plugin-events-backend-module-gitlab`
- `@backstage/plugin-events-backend-test-utils`
- `@backstage/plugin-kubernetes`
- `@backstage/plugin-kubernetes-cluster`
- `@backstage/plugin-kubernetes-common`
- `@backstage/plugin-kubernetes-node`
- `@backstage/plugin-kubernetes-react`
- `@backstage/plugin-notifications-backend-module-email`
- `@backstage/plugin-notifications-common`
- `@backstage/plugin-org`
- `@backstage/plugin-org-react`
- `@backstage/plugin-permission-backend-module-allow-all-policy`
- `@backstage/plugin-permission-common`
- `@backstage/plugin-permission-react`
- `@backstage/plugin-scaffolder-backend-module-azure`
- `@backstage/plugin-scaffolder-backend-module-cookiecutter`
- `@backstage/plugin-scaffolder-backend-module-gcp`
- `@backstage/plugin-scaffolder-backend-module-notifications`
- `@backstage/plugin-scaffolder-backend-module-rails`
- `@backstage/plugin-scaffolder-backend-module-yeoman`
- `@backstage/plugin-scaffolder-node-test-utils`
- `@backstage/plugin-search-backend-module-pg`
- `@backstage/plugin-search-common`
- `@backstage/plugin-signals`
- `@backstage/plugin-signals-node`
- `@backstage/plugin-signals-react`
- `@backstage/plugin-techdocs-addons-test-utils`
- `@backstage/plugin-techdocs-module-addons-contrib`
- `@backstage/plugin-techdocs-react`
- `@backstage/plugin-user-settings`
- `@backstage/plugin-user-settings-backend`
- `@backstage/test-utils`
- `@techdocs/cli`
