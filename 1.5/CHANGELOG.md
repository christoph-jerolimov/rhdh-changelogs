# RHDH Release 1.5 changelog

Changes between Backstage 1.32.6 (RHDH 1.4) and Backstage 1.35.1 (RHDH 1.5) — 1 added, 0 removed, 170 upgraded, 7 unchanged packages.

## Summary

- [Newly added packages](#newly-added-packages): 1 package
- [Breaking changes](#breaking-changes): 13 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 18 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 4 packages
- [0.x patch version bumps](#0x-patch-version-bumps): 54 packages
- [Other minor version bumps](#other-minor-version-bumps): 14 packages
- [Other patch version bumps](#other-patch-version-bumps): 14 packages
- [Excluded dependency updates](#excluded-dependency-updates): 53 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/plugin-proxy-node` (new, 0.1.0)](#backstageplugin-proxy-node-new-010)
- [Breaking changes](#breaking-changes)
  - [`@backstage/backend-defaults` (0.5.2 → 0.7.0)](#backstagebackend-defaults-052--070)
  - [`@backstage/backend-dynamic-feature-service` (0.4.4 → 0.5.3)](#backstagebackend-dynamic-feature-service-044--053)
  - [`@backstage/backend-test-utils` (1.0.2 → 1.2.1)](#backstagebackend-test-utils-102--121)
  - [`@backstage/cli` (0.28.2 → 0.29.6)](#backstagecli-0282--0296)
  - [`@backstage/plugin-auth-backend` (0.23.1 → 0.24.2)](#backstageplugin-auth-backend-0231--0242)
  - [`@backstage/plugin-auth-backend-module-aws-alb-provider` (0.2.1 → 0.3.2)](#backstageplugin-auth-backend-module-aws-alb-provider-021--032)
  - [`@backstage/plugin-devtools-backend` (0.4.1 → 0.5.1)](#backstageplugin-devtools-backend-041--051)
  - [`@backstage/plugin-notifications-backend` (0.4.2 → 0.5.1)](#backstageplugin-notifications-backend-042--051)
  - [`@backstage/plugin-org` (0.6.31 → 0.6.35)](#backstageplugin-org-0631--0635)
  - [`@backstage/plugin-scaffolder-backend` (1.26.3 → 1.29.0)](#backstageplugin-scaffolder-backend-1263--1290)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.6.1 → 0.7.1)](#backstageplugin-scaffolder-backend-module-gitlab-061--071)
  - [`@backstage/plugin-scaffolder-node` (0.5.1 → 0.6.3)](#backstageplugin-scaffolder-node-051--063)
  - [`@backstage/plugin-search-backend-module-catalog` (0.2.4 → 0.3.0)](#backstageplugin-search-backend-module-catalog-024--030)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/backend-openapi-utils` (0.2.0 → 0.4.1)](#backstagebackend-openapi-utils-020--041)
  - [`@backstage/core-components` (0.15.1 → 0.16.3)](#backstagecore-components-0151--0163)
  - [`@backstage/plugin-api-docs` (0.11.11 → 0.12.3)](#backstageplugin-api-docs-01111--0123)
  - [`@backstage/plugin-app-backend` (0.3.76 → 0.4.4)](#backstageplugin-app-backend-0376--044)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.2.3 → 0.3.1)](#backstageplugin-catalog-backend-module-azure-023--031)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.2.3 → 0.3.1)](#backstageplugin-catalog-backend-module-bitbucket-server-023--031)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.4.4 → 0.6.2)](#backstageplugin-catalog-backend-module-gitlab-044--062)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.5.6 → 0.6.2)](#backstageplugin-catalog-backend-module-incremental-ingestion-056--062)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.9.1 → 0.11.1)](#backstageplugin-catalog-backend-module-ldap-091--0111)
  - [`@backstage/plugin-events-backend` (0.3.15 → 0.4.1)](#backstageplugin-events-backend-0315--041)
  - [`@backstage/plugin-kubernetes` (0.11.16 → 0.12.3)](#backstageplugin-kubernetes-01116--0123)
  - [`@backstage/plugin-kubernetes-backend` (0.18.7 → 0.19.2)](#backstageplugin-kubernetes-backend-0187--0192)
  - [`@backstage/plugin-kubernetes-common` (0.8.3 → 0.9.2)](#backstageplugin-kubernetes-common-083--092)
  - [`@backstage/plugin-kubernetes-node` (0.1.20 → 0.2.2)](#backstageplugin-kubernetes-node-0120--022)
  - [`@backstage/plugin-kubernetes-react` (0.4.4 → 0.5.3)](#backstageplugin-kubernetes-react-044--053)
  - [`@backstage/plugin-notifications` (0.3.2 → 0.5.1)](#backstageplugin-notifications-032--051)
  - [`@backstage/plugin-signals-backend` (0.2.2 → 0.3.0)](#backstageplugin-signals-backend-022--030)
  - [`@backstage/repo-tools` (0.10.0 → 0.12.1)](#backstagerepo-tools-0100--0121)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-kubernetes-cluster` (0.0.17 → 0.0.21)](#backstageplugin-kubernetes-cluster-0017--0021)
  - [`@backstage/plugin-notifications-common` (0.0.5 → 0.0.8)](#backstageplugin-notifications-common-005--008)
  - [`@backstage/plugin-signals` (0.0.11 → 0.0.15)](#backstageplugin-signals-0011--0015)
  - [`@backstage/release-manifests` (0.0.11 → 0.0.12)](#backstagerelease-manifests-0011--0012)
- [0.x patch version bumps](#0x-patch-version-bumps)
  - [`@backstage/cli-common` (0.1.14 → 0.1.15)](#backstagecli-common-0114--0115)
  - [`@backstage/cli-node` (0.2.9 → 0.2.12)](#backstagecli-node-029--0212)
  - [`@backstage/codemods` (0.1.51 → 0.1.52)](#backstagecodemods-0151--0152)
  - [`@backstage/core-compat-api` (0.3.1 → 0.3.5)](#backstagecore-compat-api-031--035)
  - [`@backstage/create-app` (0.5.21 → 0.5.24)](#backstagecreate-app-0521--0524)
  - [`@backstage/frontend-defaults` (0.1.1 → 0.1.5)](#backstagefrontend-defaults-011--015)
  - [`@backstage/frontend-plugin-api` (0.9.0 → 0.9.4)](#backstagefrontend-plugin-api-090--094)
  - [`@backstage/integration-aws-node` (0.1.12 → 0.1.15)](#backstageintegration-aws-node-0112--0115)
  - [`@backstage/plugin-app` (0.1.1 → 0.1.5)](#backstageplugin-app-011--015)
  - [`@backstage/plugin-app-visualizer` (0.1.11 → 0.1.15)](#backstageplugin-app-visualizer-0111--0115)
  - [`@backstage/plugin-auth-backend-module-bitbucket-server-provider` (0.1.1 → 0.1.4)](#backstageplugin-auth-backend-module-bitbucket-server-provider-011--014)
  - [`@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.3.1 → 0.3.4)](#backstageplugin-auth-backend-module-cloudflare-access-provider-031--034)
  - [`@backstage/plugin-auth-backend-module-google-provider` (0.2.1 → 0.2.4)](#backstageplugin-auth-backend-module-google-provider-021--024)
  - [`@backstage/plugin-auth-backend-module-guest-provider` (0.2.1 → 0.2.4)](#backstageplugin-auth-backend-module-guest-provider-021--024)
  - [`@backstage/plugin-auth-backend-module-microsoft-provider` (0.2.1 → 0.2.4)](#backstageplugin-auth-backend-module-microsoft-provider-021--024)
  - [`@backstage/plugin-auth-backend-module-oidc-provider` (0.3.1 → 0.3.4)](#backstageplugin-auth-backend-module-oidc-provider-031--034)
  - [`@backstage/plugin-auth-node` (0.5.3 → 0.5.6)](#backstageplugin-auth-node-053--056)
  - [`@backstage/plugin-bitbucket-cloud-common` (0.2.24 → 0.2.27)](#backstageplugin-bitbucket-cloud-common-0224--0227)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.4.4 → 0.4.7)](#backstageplugin-catalog-backend-module-aws-044--047)
  - [`@backstage/plugin-catalog-backend-module-backstage-openapi` (0.4.1 → 0.4.4)](#backstageplugin-catalog-backend-module-backstage-openapi-041--044)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.4.1 → 0.4.4)](#backstageplugin-catalog-backend-module-bitbucket-cloud-041--044)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (0.2.3 → 0.2.6)](#backstageplugin-catalog-backend-module-gerrit-023--026)
  - [`@backstage/plugin-catalog-backend-module-github` (0.7.6 → 0.7.9)](#backstageplugin-catalog-backend-module-github-076--079)
  - [`@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.2 → 0.2.5)](#backstageplugin-catalog-backend-module-gitlab-org-022--025)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.6.3 → 0.6.6)](#backstageplugin-catalog-backend-module-msgraph-063--066)
  - [`@backstage/plugin-catalog-backend-module-openapi` (0.2.3 → 0.2.6)](#backstageplugin-catalog-backend-module-openapi-023--026)
  - [`@backstage/plugin-catalog-backend-module-puppetdb` (0.2.3 → 0.2.6)](#backstageplugin-catalog-backend-module-puppetdb-023--026)
  - [`@backstage/plugin-catalog-import` (0.12.5 → 0.12.9)](#backstageplugin-catalog-import-0125--0129)
  - [`@backstage/plugin-config-schema` (0.1.60 → 0.1.64)](#backstageplugin-config-schema-0160--0164)
  - [`@backstage/plugin-events-backend-module-aws-sqs` (0.4.4 → 0.4.7)](#backstageplugin-events-backend-module-aws-sqs-044--047)
  - [`@backstage/plugin-events-backend-module-github` (0.2.13 → 0.2.16)](#backstageplugin-events-backend-module-github-0213--0216)
  - [`@backstage/plugin-events-node` (0.4.4 → 0.4.7)](#backstageplugin-events-node-044--047)
  - [`@backstage/plugin-home` (0.8.0 → 0.8.4)](#backstageplugin-home-080--084)
  - [`@backstage/plugin-home-react` (0.1.18 → 0.1.22)](#backstageplugin-home-react-0118--0122)
  - [`@backstage/plugin-notifications-backend-module-email` (0.3.2 → 0.3.5)](#backstageplugin-notifications-backend-module-email-032--035)
  - [`@backstage/plugin-notifications-node` (0.2.8 → 0.2.11)](#backstageplugin-notifications-node-028--0211)
  - [`@backstage/plugin-permission-backend` (0.5.50 → 0.5.53)](#backstageplugin-permission-backend-0550--0553)
  - [`@backstage/plugin-permission-common` (0.8.1 → 0.8.4)](#backstageplugin-permission-common-081--084)
  - [`@backstage/plugin-permission-node` (0.8.4 → 0.8.7)](#backstageplugin-permission-node-084--087)
  - [`@backstage/plugin-proxy-backend` (0.5.7 → 0.5.10)](#backstageplugin-proxy-backend-057--0510)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket` (0.3.2 → 0.3.6)](#backstageplugin-scaffolder-backend-module-bitbucket-032--036)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.2.2 → 0.2.5)](#backstageplugin-scaffolder-backend-module-bitbucket-cloud-022--025)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.2 → 0.2.5)](#backstageplugin-scaffolder-backend-module-bitbucket-server-022--025)
  - [`@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.2 → 0.3.5)](#backstageplugin-scaffolder-backend-module-confluence-to-markdown-032--035)
  - [`@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.2 → 0.2.5)](#backstageplugin-scaffolder-backend-module-gerrit-022--025)
  - [`@backstage/plugin-scaffolder-backend-module-gitea` (0.2.2 → 0.2.5)](#backstageplugin-scaffolder-backend-module-gitea-022--025)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.5.2 → 0.5.5)](#backstageplugin-scaffolder-backend-module-github-052--055)
  - [`@backstage/plugin-scaffolder-backend-module-sentry` (0.2.2 → 0.2.5)](#backstageplugin-scaffolder-backend-module-sentry-022--025)
  - [`@backstage/plugin-search-backend-module-explore` (0.2.4 → 0.2.7)](#backstageplugin-search-backend-module-explore-024--027)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.37 → 0.5.40)](#backstageplugin-search-backend-module-pg-0537--0540)
  - [`@backstage/plugin-search-backend-module-stack-overflow-collator` (0.3.2 → 0.3.5)](#backstageplugin-search-backend-module-stack-overflow-collator-032--035)
  - [`@backstage/plugin-search-backend-module-techdocs` (0.3.1 → 0.3.5)](#backstageplugin-search-backend-module-techdocs-031--035)
  - [`@backstage/plugin-signals-node` (0.1.13 → 0.1.16)](#backstageplugin-signals-node-0113--0116)
  - [`@backstage/theme` (0.6.0 → 0.6.3)](#backstagetheme-060--063)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/backend-app-api` (1.0.1 → 1.1.1)](#backstagebackend-app-api-101--111)
  - [`@backstage/backend-plugin-api` (1.0.1 → 1.1.1)](#backstagebackend-plugin-api-101--111)
  - [`@backstage/catalog-client` (1.7.1 → 1.9.1)](#backstagecatalog-client-171--191)
  - [`@backstage/config` (1.2.0 → 1.3.2)](#backstageconfig-120--132)
  - [`@backstage/integration` (1.15.1 → 1.16.1)](#backstageintegration-1151--1161)
  - [`@backstage/plugin-catalog` (1.24.0 → 1.26.1)](#backstageplugin-catalog-1240--1261)
  - [`@backstage/plugin-catalog-backend` (1.27.1 → 1.30.0)](#backstageplugin-catalog-backend-1271--1300)
  - [`@backstage/plugin-catalog-node` (1.13.1 → 1.15.1)](#backstageplugin-catalog-node-1131--1151)
  - [`@backstage/plugin-catalog-react` (1.14.0 → 1.15.1)](#backstageplugin-catalog-react-1140--1151)
  - [`@backstage/plugin-scaffolder` (1.26.2 → 1.27.5)](#backstageplugin-scaffolder-1262--1275)
  - [`@backstage/plugin-scaffolder-react` (1.13.2 → 1.14.4)](#backstageplugin-scaffolder-react-1132--1144)
  - [`@backstage/plugin-search-backend` (1.6.1 → 1.8.1)](#backstageplugin-search-backend-161--181)
  - [`@backstage/plugin-techdocs` (1.11.0 → 1.12.2)](#backstageplugin-techdocs-1110--1122)
  - [`@backstage/types` (1.1.1 → 1.2.1)](#backstagetypes-111--121)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/config-loader` (1.9.1 → 1.9.5)](#backstageconfig-loader-191--195)
  - [`@backstage/core-app-api` (1.15.1 → 1.15.4)](#backstagecore-app-api-1151--1154)
  - [`@backstage/core-plugin-api` (1.10.0 → 1.10.3)](#backstagecore-plugin-api-1100--1103)
  - [`@backstage/errors` (1.2.4 → 1.2.7)](#backstageerrors-124--127)
  - [`@backstage/plugin-scaffolder-common` (1.5.6 → 1.5.9)](#backstageplugin-scaffolder-common-156--159)
  - [`@backstage/plugin-search` (1.4.18 → 1.4.22)](#backstageplugin-search-1418--1422)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.6.1 → 1.6.4)](#backstageplugin-search-backend-module-elasticsearch-161--164)
  - [`@backstage/plugin-search-backend-node` (1.3.4 → 1.3.7)](#backstageplugin-search-backend-node-134--137)
  - [`@backstage/plugin-search-react` (1.8.1 → 1.8.5)](#backstageplugin-search-react-181--185)
  - [`@backstage/plugin-techdocs-backend` (1.11.1 → 1.11.5)](#backstageplugin-techdocs-backend-1111--1115)
  - [`@backstage/plugin-techdocs-module-addons-contrib` (1.1.16 → 1.1.20)](#backstageplugin-techdocs-module-addons-contrib-1116--1120)
  - [`@backstage/plugin-techdocs-node` (1.12.12 → 1.12.16)](#backstageplugin-techdocs-node-11212--11216)
  - [`@backstage/plugin-techdocs-react` (1.2.9 → 1.2.13)](#backstageplugin-techdocs-react-129--1213)
  - [`@techdocs/cli` (1.8.21 → 1.8.25)](#techdocscli-1821--1825)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/plugin-proxy-node` (new, [0.1.0](../changelogs/@backstage/plugin-proxy-node.md#010))

#### 0.1.0

##### Minor Changes

- [`11b001c`](https://github.com/backstage/backstage/commit/11b001c): Added `proxyEndpointsExtensionPoint` to allow addition of proxy configuration through an extension point in the new backend system.

## Breaking changes

### `@backstage/backend-defaults` (0.5.2 → [0.7.0](../changelogs/@backstage/backend-defaults.md#070))

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

#### 0.6.0

##### Minor Changes

- [`fd5d337`](https://github.com/backstage/backstage/commit/fd5d337): Added a new `backend.health.headers` configuration that can be used to set additional headers to include in health check responses.

  **BREAKING CONSUMERS**: As part of this change the `createHealthRouter` function exported from `@backstage/backend-defaults/rootHttpRouter` now requires the root config service to be passed through the `config` option.

- [`3f34ea9`](https://github.com/backstage/backstage/commit/3f34ea9): Throttles Bitbucket Server API calls
- [`de6f280`](https://github.com/backstage/backstage/commit/de6f280): **BREAKING** Upgraded @keyv/redis and keyv packages to resolve a bug related to incorrect resolution of cache keys.

  This is a breaking change for clients using the `redis` store for cache with `useRedisSets` option set to false since cache keys will be calculated differently (without the sets:namespace: prefix). For clients with default configuration (or useRedisSets set to false) the cache keys will stay the same, but since @keyv/redis library no longer supports redis sets they won't be utilised anymore.

  If you were using `useRedisSets` option in configuration make sure to remove it from `app-config.yaml`:

  ```diff
  backend:
    cache:
      store: redis
      connection: redis://user:pass@cache.example.com:6379
  -   useRedisSets: false
  ```

- [`29180ec`](https://github.com/backstage/backstage/commit/29180ec): **BREAKING PRODUCERS**: The `LifecycleMiddlewareOptions.startupRequestPauseTimeout` has been removed. Use the `backend.lifecycle.startupRequestPauseTimeout` setting in your `app-config.yaml` file to customize how the `createLifecycleMiddleware` function should behave. Also the root config service is required as an option when calling the `createLifecycleMiddleware` function:

  ```diff
  - createLifecycleMiddleware({ lifecycle, startupRequestPauseTimeout })
  + createLifecycleMiddleware({ config,  lifecycle })
  ```

- [`277092a`](https://github.com/backstage/backstage/commit/277092a): Implemented `AzureBlobStorageUrlReader` to read from the url of committed location from the entity provider
- [`18a2c00`](https://github.com/backstage/backstage/commit/18a2c00): All middleware used by the default `coreServices.http` is now exported for use by custom implementations.

##### Patch Changes

- [`dfc8b41`](https://github.com/backstage/backstage/commit/dfc8b41): Updated dependency `@opentelemetry/api` to `^1.9.0`.
- [`5b1e68c`](https://github.com/backstage/backstage/commit/5b1e68c): Immediately close all connections when shutting down in local development.
- [`8863b38`](https://github.com/backstage/backstage/commit/8863b38): Export `PluginTokenHandler` and `pluginTokenHandlerDecoratorServiceRef` to allow for custom decoration of the plugin token handler without having to re-implement the entire handler.
- [`29180ec`](https://github.com/backstage/backstage/commit/29180ec): Fix server response time by moving the lifecycle startup hooks back to the plugin lifecycle service.
- [`57e0b11`](https://github.com/backstage/backstage/commit/57e0b11): The user and plugin token verification in the default `AuthService` implementation will no longer forward verification errors to the caller, and instead log them as warnings.
- [`97c6837`](https://github.com/backstage/backstage/commit/97c6837): Export `DefaultHttpAuthService` to allow for custom token extraction logic.
- [`e5255f1`](https://github.com/backstage/backstage/commit/e5255f1): Log request and response metadata so it can be used for filtering log messages.
  The format of the request date was also changed from `clf` to `utc`.
- [`57e0b11`](https://github.com/backstage/backstage/commit/57e0b11): The default `authServiceFactory` now correctly depends on the plugin scoped `Logger` services rather than the root scoped one.
- [`fe87fbf`](https://github.com/backstage/backstage/commit/fe87fbf): Add task metrics as two gauges that track the last start and end timestamps as epoch seconds.
- [`1ac6b72`](https://github.com/backstage/backstage/commit/1ac6b72): Support `connection.type: cloudsql` in database client for usage with `@google-cloud/cloud-sql-connector` and `iam` auth
- [`0e9c9fa`](https://github.com/backstage/backstage/commit/0e9c9fa): Implements the `DefaultRootLifecycleService.addBeforeShutdownHook` method, and updates `DefaultRootHttpRouterService` and `DefaultRootHealthService` to listen to that event to stop accepting traffic and close service connections.
- [`d0cbd82`](https://github.com/backstage/backstage/commit/d0cbd82): Remove use of the `stoppable` library on the `DefaultRootHttpRouterService` as Node's native http server [close](https://nodejs.org/api/http.html#serverclosecallback) method already drains requests.
- [`5c9cc05`](https://github.com/backstage/backstage/commit/5c9cc05): Use native fetch instead of node-fetch
- [`cf627c6`](https://github.com/backstage/backstage/commit/cf627c6): Fixed an issue in the WinstonLogger where Errors thrown and given to logger.error with field values that could not be cast to a string would throw a TypeError

#### 0.5.3

##### Patch Changes

- [`bf306cb`](https://github.com/backstage/backstage/commit/bf306cb): Removed dependency `@backstage/backend-common`.
- [`e30bb46`](https://github.com/backstage/backstage/commit/e30bb46): Disabling database migrations now correctly uses the `backend.default.skipMigrations` config value.
- [`d52d7f9`](https://github.com/backstage/backstage/commit/d52d7f9): Support ISO and ms string forms of durations in config too
- [`f6eaec2`](https://github.com/backstage/backstage/commit/f6eaec2): Link to proper package in `rootLoggerServiceFactory` doc string.
- [`ecf6b39`](https://github.com/backstage/backstage/commit/ecf6b39): Use `node-fetch` instead of native fetch, as per https://backstage.io/docs/architecture-decisions/adrs-adr013
- [`4e58bc7`](https://github.com/backstage/backstage/commit/4e58bc7): Upgrade to uuid v11 internally

### `@backstage/backend-dynamic-feature-service` (0.4.4 → [0.5.3](../changelogs/@backstage/backend-dynamic-feature-service.md#053))

#### 0.5.3

##### Patch Changes

- [`8379bf4`](https://github.com/backstage/backstage/commit/8379bf4): Remove usages of `PluginDatabaseManager` and `PluginEndpointDiscovery` and replace with their equivalent service types

#### 0.5.0

##### Minor Changes

- [`e939cd7`](https://github.com/backstage/backstage/commit/e939cd7): **BREAKING** The `dynamicPluginsFeatureLoader` options related to the root logger behavior (`transports`, `level`, `format`) are now gathered under a single `logger` option which is a function taking an optional `Config` argument and returning the logger options.

  This breaking change is required for 2 reasons:

  - it's totally possible that the current `Config` would be required to provide the logger options,
  - the logger-related options should be gathered under a common `logger` option because, when the root auditing service is introduced, distinct but similarly-named options would be required for the auditor as well.

##### Patch Changes

- [`1aeec12`](https://github.com/backstage/backstage/commit/1aeec12): Enhance the `CommonJSModuleLoader` to add support for `resolvePackagePath` calls from backend dynamic plugins, with customizable package resolution, and make the `CommonJSModuleLoader` public API.
  Fixing this backend dynamic plugin limitation related to `resolvePackagePath` is important for backend dynamic plugins which use the database, since database migration scripts systematically use `resolvePackagePath`.
- [`8593dfa`](https://github.com/backstage/backstage/commit/8593dfa): Improve the way alpha packages are supported when loading dynamic backend plugins.
  The `ScannedPluginPackage` descriptor of dynamic backend plugins loaded from their alpha `package.json` now contain both the main package manifest and the alpha manifest. Previously it used to contain only the content of the alpha `package.json`, which is nearly empty.
  This will make it easier to use or display metadata of loaded dynamic backend plugins, which is contained in the main manifest.

### `@backstage/backend-test-utils` (1.0.2 → [1.2.1](../changelogs/@backstage/backend-test-utils.md#121))

#### 1.2.0

##### Minor Changes

- [`de6f280`](https://github.com/backstage/backstage/commit/de6f280): **BREAKING** Upgraded @keyv/redis and keyv packages to resolve a bug related to incorrect resolution of cache keys.

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

- [`0e9c9fa`](https://github.com/backstage/backstage/commit/0e9c9fa): Mock the new `RootLifecycleService.addBeforeShutdownHook` method.

#### 1.1.0

##### Minor Changes

- [`5064827`](https://github.com/backstage/backstage/commit/5064827): Made it possible to construct `mockServices.database` with a given knex instance

##### Patch Changes

- [`7aae8e3`](https://github.com/backstage/backstage/commit/7aae8e3): The `mockServices.discovery.factory()` factory now uses the mocked discovery service as its implementation, avoid the need for configuration.
- [`eb82994`](https://github.com/backstage/backstage/commit/eb82994): Removed unused `msw` dependency.
- [`4e58bc7`](https://github.com/backstage/backstage/commit/4e58bc7): Upgrade to uuid v11 internally

### `@backstage/cli` (0.28.2 → [0.29.6](../changelogs/@backstage/cli.md#0296))

#### 0.29.5

##### Patch Changes

- [`e937ce0`](https://github.com/backstage/backstage/commit/e937ce0): Fixed incompatible `@typescript-eslint` versions with current `eslint@8.x.x`
- [`8557e09`](https://github.com/backstage/backstage/commit/8557e09): Removed the `EXPERIMENTAL_VITE` flag for using Vite as a dev server. If you were using this feature, we recommend switching to Rspack via the `EXPERIMENTAL_RSPACK` flag.

#### 0.29.4

##### Patch Changes

- [`2b6c1ea`](https://github.com/backstage/backstage/commit/2b6c1ea): If the Backstage yarn plugin is installed, it will now be automatically updated as part of `versions:bump`.
- [`7dcff85`](https://github.com/backstage/backstage/commit/7dcff85): Remove special-casing for `@types` packages when generating dependency entries
  during templating
- [`3c3a7e6`](https://github.com/backstage/backstage/commit/3c3a7e6): Revert `css-loader@v7` bump
- [`0aff006`](https://github.com/backstage/backstage/commit/0aff006): Bumped the version range for `html-webpack-plugin` to fix the `htmlPluginExports.getCompilationHooks is not a function` error when using experimental Rspack.
- [`583f3d4`](https://github.com/backstage/backstage/commit/583f3d4): Added `@backstage/cli/config/prettier` as a replacement for `@spotify/prettier-config`, but with the same configuration.
- [`62a9062`](https://github.com/backstage/backstage/commit/62a9062): Updated dependency `@module-federation/enhanced` to `^0.8.0`.
- [`5f04976`](https://github.com/backstage/backstage/commit/5f04976): Update `rollup` to avoid issues with build output when running `backstage-cli package build`.
- [`5f04976`](https://github.com/backstage/backstage/commit/5f04976): Fixed a bug that caused missing code in published packages.
- [`a49030a`](https://github.com/backstage/backstage/commit/a49030a): Add support for `--output-file` option from ESLint to `package lint` and `repo lint` commands.
- [`96331fa`](https://github.com/backstage/backstage/commit/96331fa): Enhance the behavior of the experimental support for module federation in the backstage CLI,
  by using the `package.json` exports (when present) to complete the list of exposed modules.
  This allows, for example, using exported `alpha` definitions through module federation.
- [`5c9cc05`](https://github.com/backstage/backstage/commit/5c9cc05): Use native fetch instead of node-fetch
- [`dcd99d2`](https://github.com/backstage/backstage/commit/dcd99d2): added experimental RSPack support for build command in the repo scope

#### 0.29.0

##### Minor Changes

- [`bc47b17`](https://github.com/backstage/backstage/commit/bc47b17): **BREAKING**: Updates ESLint config to ignore all generated source code under `src/**/generated/**/*.ts`.
- [`6819f8c`](https://github.com/backstage/backstage/commit/6819f8c): Added a new optimization to the `repo test` command that will filter out unused packages in watch mode if all provide filters are paths that point from the repo root. This significantly speeds up running individual tests from the repo root in a large workspace, for example:

  ```sh
  yarn test packages/app/src/App.test.tsx
  ```

- [`d849865`](https://github.com/backstage/backstage/commit/d849865): The package packing now populates `typesVersions` for additional entry points rather than using additional `package.json` files for type resolution. This improves auto completion of separate entry points when consuming published packages.
- [`bc71665`](https://github.com/backstage/backstage/commit/bc71665): **BREAKING**: The `LEGACY_BACKEND_START` flag has been removed, along with support for `src/run.ts` as the development entry point.

##### Patch Changes

- [`4046d53`](https://github.com/backstage/backstage/commit/4046d53): Fixed an issue where the `--successCache` option for the `repo test` and `repo lint` commands would be include the workspace path in generated cache keys. This previously broke caching in environments where the workspace path varies across builds.
- [`4a378d3`](https://github.com/backstage/backstage/commit/4a378d3): Fix dev server reloads of plugin discovery for new frontend system.
- [`28b60ad`](https://github.com/backstage/backstage/commit/28b60ad): The check for `react-dom/client` in the Jest configuration will now properly always run from the target directory.
- [`6b2888c`](https://github.com/backstage/backstage/commit/6b2888c): Fixed an issue with the `--successCache` flag for `repo test` where the tree hash for the wrong package directory would sometimes be used to generate the cache key.
- [`e30b65d`](https://github.com/backstage/backstage/commit/e30b65d): Added `--alwaysPack` as a replacement for the now hidden `--alwaysYarnPack` flag for the `build-workspace` command.
- [`be0278e`](https://github.com/backstage/backstage/commit/be0278e): Removed circular import
- [`a7f97e4`](https://github.com/backstage/backstage/commit/a7f97e4): Added a new `"rejectFrontendNetworkRequests"` configuration flag that can be set in the `"jest"` field in the root `package.json`:

  ```json
  {
    "jest": {
      "rejectFrontendNetworkRequests": true
    }
  }
  ```

  This flag causes rejection of any form of network requests that are attempted to be made in frontend or common package tests. This flag can only be set in the root `package.json` and can not be overridden in individual package configurations.

- [`6c48ebd`](https://github.com/backstage/backstage/commit/6c48ebd): Add `--max-warnings -1` support to `backstage-cli package lint`
- [`04297a0`](https://github.com/backstage/backstage/commit/04297a0): The `--successCache` option for the `repo test` and `repo lint` commands now use an additive store that keeps old entries around for a week before they are cleaned up automatically.
- [`a2f0559`](https://github.com/backstage/backstage/commit/a2f0559): When using the experimental Rspack flag the app build and dev server now injects configuration via a `<script type="backstage.io/config">...</script>` tag in `index.html` rather than the `process.env.APP_CONFIG` definition, which will now be defined as an empty array instead.

  This requires the app to be using the config loader from the 1.31 release of Backstage. Make sure your app is using at least that version if you are upgrading to this version of the CLI.

  If you have copied the implementation of the `defaultConfigLoader`, make sure to update it to the new implementation. In particular the config loader needs to be able to read configuration from `script` tags with the type `backstage.io/config`.

- [`b4627f2`](https://github.com/backstage/backstage/commit/b4627f2): Fixed an issue where the `raw-loader` for loading HTML templates was not resolved from the context of the CLI package.
- [`cd1ef2b`](https://github.com/backstage/backstage/commit/cd1ef2b): Updated dependency `vite` to `^5.0.0`.
- [`23f1da2`](https://github.com/backstage/backstage/commit/23f1da2): Updated dependency `ts-morph` to `^24.0.0`.
- [`b533056`](https://github.com/backstage/backstage/commit/b533056): Updated dependency `css-loader` to `^7.0.0`.
- [`be008c3`](https://github.com/backstage/backstage/commit/be008c3): Updated dependency `@module-federation/enhanced` to `^0.7.0`.
- [`6266ed3`](https://github.com/backstage/backstage/commit/6266ed3): Updated dependency `del` to `^8.0.0`.
- [`4046d53`](https://github.com/backstage/backstage/commit/4046d53): Fixed an issue with the `repo lint` command where the cache key for the `--successCache` option would not properly ignore files that should be ignored according to `.eslintignore`s.
- [`e19c53c`](https://github.com/backstage/backstage/commit/e19c53c): Fix for the `--link` flag for `package start` to deduplicate `react-router` and `react-router-dom`.
- [`17850a5`](https://github.com/backstage/backstage/commit/17850a5): Update upgrade-helper link in `versions:bump` command to include `yarnPlugin` parameter when the yarn plugin is installed
- [`09ea093`](https://github.com/backstage/backstage/commit/09ea093): Fixed an issue where `.css` style injection would fail for published packages.
- [`702f41d`](https://github.com/backstage/backstage/commit/702f41d): Bumped dev dependencies `@types/node`
- [`5d74716`](https://github.com/backstage/backstage/commit/5d74716): Remove unused backend-common dependency
- [`b084f5a`](https://github.com/backstage/backstage/commit/b084f5a): Bump the Webpack dependency range to `^5.94.0`, as our current configuration is not compatible with some older versions.
- [`e565f73`](https://github.com/backstage/backstage/commit/e565f73): Added support for `.webp` files in the frontend tooling.
- [`946fa34`](https://github.com/backstage/backstage/commit/946fa34): Added a new `--link <workspace-path>` option for frontend builds that allow you to override module resolution to link in an external workspace at runtime.

  As part of this change the Webpack linked workspace resolution plugin for frontend builds has been removed. It was in place to support the old workspace linking where it was done by Yarn, which is no longer a working option.

### `@backstage/plugin-auth-backend` (0.23.1 → [0.24.2](../changelogs/@backstage/plugin-auth-backend.md#0242))

#### 0.24.2

##### Patch Changes

- [`8379bf4`](https://github.com/backstage/backstage/commit/8379bf4): Remove usages of `PluginDatabaseManager` and `PluginEndpointDiscovery` and replace with their equivalent service types

#### 0.24.1

##### Patch Changes

- [`c907440`](https://github.com/backstage/backstage/commit/c907440): Improved error forwarding for OAuth refresh endpoints
- [`40518ab`](https://github.com/backstage/backstage/commit/40518ab): Fix issue with `jwks` endpoint returning invalid data with `firestore`
- [`5c9cc05`](https://github.com/backstage/backstage/commit/5c9cc05): Use native fetch instead of node-fetch

#### 0.24.0

##### Minor Changes

- [`75168e3`](https://github.com/backstage/backstage/commit/75168e3): **BREAKING**: The AWS ALB `fullProfile` will no longer have the its username or email converted to lowercase. This is to ensure unique handling of the users. You may need to update and configure a custom sign-in resolver or profile transform as a result.

##### Patch Changes

- [`d52d7f9`](https://github.com/backstage/backstage/commit/d52d7f9): Support ISO and ms string forms of durations in config too
- [`4e58bc7`](https://github.com/backstage/backstage/commit/4e58bc7): Upgrade to uuid v11 internally

### `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.2.1 → [0.3.2](../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#032))

#### 0.3.1

##### Patch Changes

- [`5c9cc05`](https://github.com/backstage/backstage/commit/5c9cc05): Use native fetch instead of node-fetch

#### 0.3.0

##### Minor Changes

- [`75168e3`](https://github.com/backstage/backstage/commit/75168e3): **BREAKING**: The AWS ALB `fullProfile` will no longer have the its username or email converted to lowercase. This is to ensure unique handling of the users. You may need to update and configure a custom sign-in resolver or profile transform as a result.

##### Patch Changes

- [`5d74716`](https://github.com/backstage/backstage/commit/5d74716): Remove unused backend-common dependency

### `@backstage/plugin-devtools-backend` (0.4.1 → [0.5.1](../changelogs/@backstage/plugin-devtools-backend.md#051))

#### 0.5.1

##### Patch Changes

- [`ec547b8`](https://github.com/backstage/backstage/commit/ec547b8): Remove the error handler middleware, since that is now provided by the framework

#### 0.5.0

##### Minor Changes

- [`c781a9a`](https://github.com/backstage/backstage/commit/c781a9a): **BREAKING** Removed support for what is known as the legacy backend, please use the New Backend System.

##### Patch Changes

- [`1e624ca`](https://github.com/backstage/backstage/commit/1e624ca): Restrict `@types/express` version range from `*` to `^4.17.6`.
- [`5c9cc05`](https://github.com/backstage/backstage/commit/5c9cc05): Use native fetch instead of node-fetch

### `@backstage/plugin-notifications-backend` (0.4.2 → [0.5.1](../changelogs/@backstage/plugin-notifications-backend.md#051))

#### 0.5.1

##### Patch Changes

- [`cbc0e63`](https://github.com/backstage/backstage/commit/cbc0e63): Remove `@backstage/backend-common` dependency

#### 0.5.0

##### Minor Changes

- [`fc15b77`](https://github.com/backstage/backstage/commit/fc15b77): **BREAKING**: Removed redundant `/health` endpoint, switch to using [the built-in endpoint instead](https://backstage.io/docs/backend-system/core-services/root-health).

##### Patch Changes

- [`fc15b77`](https://github.com/backstage/backstage/commit/fc15b77): Deprecated root '/' endpoints, moving them under `/notifications` instead.
- [`5c9cc05`](https://github.com/backstage/backstage/commit/5c9cc05): Use native fetch instead of node-fetch

#### 0.4.3

##### Patch Changes

- [`97ba58f`](https://github.com/backstage/backstage/commit/97ba58f): Add support for user specific notification settings
- [`4e58bc7`](https://github.com/backstage/backstage/commit/4e58bc7): Upgrade to uuid v11 internally

### `@backstage/plugin-org` (0.6.31 → [0.6.35](../changelogs/@backstage/plugin-org.md#0635))

#### 0.6.32

##### Patch Changes

- [`a278fdd`](https://github.com/backstage/backstage/commit/a278fdd): Fix rendering of description in MembersListCard. Add guardrails for potential long texts to prevent it from breaking the UI.

### `@backstage/plugin-scaffolder-backend` (1.26.3 → [1.29.0](../changelogs/@backstage/plugin-scaffolder-backend.md#1290))

#### 1.29.0

##### Minor Changes

- [`5d9e5c8`](https://github.com/backstage/backstage/commit/5d9e5c8): Added the ability to use `${{ context.task.id }}` in nunjucks templating, as well as `ctx.task.id` in actions to get the current task ID.

##### Patch Changes

- [`8379bf4`](https://github.com/backstage/backstage/commit/8379bf4): Remove usages of `PluginDatabaseManager` and `PluginEndpointDiscovery` and replace with their equivalent service types

#### 1.28.0

##### Minor Changes

- [`c05a343`](https://github.com/backstage/backstage/commit/c05a343): Emit scaffolder events using the optional `EventsService`

##### Patch Changes

- [`dfc8b41`](https://github.com/backstage/backstage/commit/dfc8b41): Updated dependency `@opentelemetry/api` to `^1.9.0`.
- [`3c62a50`](https://github.com/backstage/backstage/commit/3c62a50): Experimental support for `formDecorators` to enable secret collection and mutations to the parameters for scaffolder tasks
- [`6c326cf`](https://github.com/backstage/backstage/commit/6c326cf): The --no-node-snapshot check needs to be done against process.execArgv instead of process.argv
- [`e913fdf`](https://github.com/backstage/backstage/commit/e913fdf): Add github backend module to create-app and improve error messages
- [`8f59dc5`](https://github.com/backstage/backstage/commit/8f59dc5): Add fs:readdir to scaffolder startup
- [`0851834`](https://github.com/backstage/backstage/commit/0851834): Resolved an issue where the `templateManagementPermission` was not being exposed through the `/permissions/metadata` endpoint.

#### 1.27.0

##### Minor Changes

- [`0587633`](https://github.com/backstage/backstage/commit/0587633): Bumped the `isolated-vm` dependency from v4 to v5, which drops support for Node.js v16.
- [`e61d5ef`](https://github.com/backstage/backstage/commit/e61d5ef): BREAKING EXPERIMENTAL: The `checkpoint` method now takes an object instead of previous arguments.

  ```ts
  await ctx.checkpoint({ key: 'repo.create', fn: () => ockokit.repo.create({...})})
  ```

  You can also now return `void` from the checkpoint if the method returns `void` inside the `checkpoint` handler.

##### Patch Changes

- [`6aa5b98`](https://github.com/backstage/backstage/commit/6aa5b98): Fix tasks listing with postgres
- [`59137ff`](https://github.com/backstage/backstage/commit/59137ff): Fix issue with token not being available because it's now non-enumerable
- [`c5e39e7`](https://github.com/backstage/backstage/commit/c5e39e7): Internal refactor to use the deferred from the types package
- [`e4f5d95`](https://github.com/backstage/backstage/commit/e4f5d95): Align with type declaration of template filter/global function by supporting undefined as return value.
- [`d52d7f9`](https://github.com/backstage/backstage/commit/d52d7f9): Support ISO and ms string forms of durations in config too
- [`7ab3371`](https://github.com/backstage/backstage/commit/7ab3371): Modified `createDryRunner` and corresponding route to include `templateMetaData` inside the `templateInfo`. This allows custom action writers to access things like `templateInfo.entity.metadata.name` via the action context while executing templates using the dry run framework.
- [`4e58bc7`](https://github.com/backstage/backstage/commit/4e58bc7): Upgrade to uuid v11 internally
- [`2dae341`](https://github.com/backstage/backstage/commit/2dae341): Add new `fs:readdir` action to list current content of the workspace
- [`97ba58f`](https://github.com/backstage/backstage/commit/97ba58f): Add example template for notification sending

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.6.1 → [0.7.1](../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#071))

#### 0.7.1

##### Patch Changes

- [`8fb529a`](https://github.com/backstage/backstage/commit/8fb529a): Added `reviewerIds` to the Gitlab Merge Request action.
- [`a913beb`](https://github.com/backstage/backstage/commit/a913beb): Added action `gitlab:group:migrate` to migrate projects using `bulk_import`
- [`7b62987`](https://github.com/backstage/backstage/commit/7b62987): Updated the path field in the `gitlab:group:ensureExists` action to accept an array of either strings or objects with name and slug fields.

#### 0.7.0

##### Minor Changes

- [`c4ffd13`](https://github.com/backstage/backstage/commit/c4ffd13): Added the autocomplete feature to GitlabRepoUrlPicker
- [`32459d0`](https://github.com/backstage/backstage/commit/32459d0): **BREAKING**: Upgraded the `gitbeaker` library to version 41. As part of this, the `scopes` parameter to the `gitlab:projectDeployToken:create` is no longer optional, so you will have to pass it a value (for example `['read_repository']`).

### `@backstage/plugin-scaffolder-node` (0.5.1 → [0.6.3](../changelogs/@backstage/plugin-scaffolder-node.md#063))

#### 0.6.3

##### Patch Changes

- [`5d9e5c8`](https://github.com/backstage/backstage/commit/5d9e5c8): Added the ability to use `${{ context.task.id }}` in nunjucks templating, as well as `ctx.task.id` in actions to get the current task ID.
- [`7dd0013`](https://github.com/backstage/backstage/commit/7dd0013): Deprecate the `logStream` option in `executeShellCommand`, replacing it with a logger instance.

#### 0.6.2

##### Patch Changes

- [`c4ffd13`](https://github.com/backstage/backstage/commit/c4ffd13): Added the autocomplete feature to GitlabRepoUrlPicker
- [`1a23421`](https://github.com/backstage/backstage/commit/1a23421): Make sure that isomorphic git push commands are not proxied.

#### 0.6.0

##### Minor Changes

- [`e61d5ef`](https://github.com/backstage/backstage/commit/e61d5ef): BREAKING EXPERIMENTAL: The `checkpoint` method now takes an object instead of previous arguments.

  ```ts
  await ctx.checkpoint({ key: 'repo.create', fn: () => ockokit.repo.create({...})})
  ```

  You can also now return `void` from the checkpoint if the method returns `void` inside the `checkpoint` handler.

### `@backstage/plugin-search-backend-module-catalog` (0.2.4 → [0.3.0](../changelogs/@backstage/plugin-search-backend-module-catalog.md#030))

#### 0.3.0

##### Minor Changes

- [`dd515e3`](https://github.com/backstage/backstage/commit/dd515e3): **BREAKING**: Removed support for the old backend system. Please [migrate to the new backend system](https://backstage.io/docs/backend-system/) and enable [the catalog collator](https://backstage.io/docs/features/search/collators#catalog) there.

  As part of this, the `/alpha` export path is gone too. Just import the module from the root of the package as usual instead.

##### Patch Changes

- [`1e09b06`](https://github.com/backstage/backstage/commit/1e09b06): Internal refactor to use cursor based pagination

#### 0.2.6

##### Patch Changes

- [`ed0aaec`](https://github.com/backstage/backstage/commit/ed0aaec): Update README

#### 0.2.5

##### Patch Changes

- [`0b8f344`](https://github.com/backstage/backstage/commit/0b8f344): Fixed a bug where the `filter` setting of the collator was not permitted to be an array.
- [`1a1e2f4`](https://github.com/backstage/backstage/commit/1a1e2f4): Fix search collator text formatting for catalog entities without description

## 0.x minor version bumps

### `@backstage/backend-openapi-utils` (0.2.0 → [0.4.1](../changelogs/@backstage/backend-openapi-utils.md#041))

#### 0.4.0

##### Minor Changes

- [`afcebea`](https://github.com/backstage/backstage/commit/afcebea): Fixed a Typescript error when trying to use the new OpenAPI server-side generated code.

#### 0.3.0

##### Minor Changes

- [`1440232`](https://github.com/backstage/backstage/commit/1440232): Adds a new `createValidatedOpenApiRouterFromGeneratedEndpointMap` function that uses the new static server generation in `backstage-cli package schema openapi generate --server` to create a typed express router.

##### Patch Changes

- [`f01787a`](https://github.com/backstage/backstage/commit/f01787a): Moves msw from dependencies to devDependencies

### `@backstage/core-components` (0.15.1 → [0.16.3](../changelogs/@backstage/core-components.md#0163))

#### 0.16.3

##### Patch Changes

- [`4ec6f7b`](https://github.com/backstage/backstage/commit/4ec6f7b): Allow passing component for `ContentHeader` description

#### 0.16.2

##### Patch Changes

- [`e47be38`](https://github.com/backstage/backstage/commit/e47be38): Added data-testid to placeholder rendered by Progress component to simplify assertions in tests

#### 0.16.0

##### Minor Changes

- [`dc409c5`](https://github.com/backstage/backstage/commit/dc409c5): The SupportButton component will now be hidden if no support config is specified in app-config

##### Patch Changes

- [`0f18340`](https://github.com/backstage/backstage/commit/0f18340): Change core component Table tool bar search box to the a appropriate Search icon and text
- [`af9097e`](https://github.com/backstage/backstage/commit/af9097e): Adds the ability to mock a media query per break point and to change the active break point during a test. Usage example:

  ```ts
  const { set } = mockBreakpoint({
    initialBreakpoint: 'md',
    queryBreakpointMap: {
      '(min-width:1500px)': 'xl',
      '(min-width:1000px)': 'lg',
      '(min-width:700px)': 'md',
      '(min-width:400px)': 'sm',
      '(min-width:0px)': 'xs',
    },
  });
  // assertions for when the active break point is "md"
  set('lg');
  // assertions for when the active break point is "lg"
  ```

### `@backstage/plugin-api-docs` (0.11.11 → [0.12.3](../changelogs/@backstage/plugin-api-docs.md#0123))

#### 0.12.3

##### Patch Changes

- [`dcf6e72`](https://github.com/backstage/backstage/commit/dcf6e72): Fix typo in default path of api docs definition route

#### 0.12.2

##### Patch Changes

- [`11babd9`](https://github.com/backstage/backstage/commit/11babd9): Fix link styling in ProvidedApisCard component so it aligns with other card components.

#### 0.12.0

##### Minor Changes

- [`6836522`](https://github.com/backstage/backstage/commit/6836522): Added support for pagination in api-docs plugin - DefaultApiExplorerPage

##### Patch Changes

- [`11f57de`](https://github.com/backstage/backstage/commit/11f57de): bump `@asyncapi/react-component` to latest `2.x`
- [`3cd1dee`](https://github.com/backstage/backstage/commit/3cd1dee): Uses theme values to style the API definition schema so that theme overrides apply.

### `@backstage/plugin-app-backend` (0.3.76 → [0.4.4](../changelogs/@backstage/plugin-app-backend.md#044))

#### 0.4.4

##### Patch Changes

- [`d9d62ef`](https://github.com/backstage/backstage/commit/d9d62ef): Remove some internal usages of the backend-common package
- [`8379bf4`](https://github.com/backstage/backstage/commit/8379bf4): Remove usages of `PluginDatabaseManager` and `PluginEndpointDiscovery` and replace with their equivalent service types

#### 0.4.3

##### Patch Changes

- [`74c3f2a`](https://github.com/backstage/backstage/commit/74c3f2a): Fixed a bug where config would not be injected on the `/` and `/index.html` paths.
- [`5c9cc05`](https://github.com/backstage/backstage/commit/5c9cc05): Use native fetch instead of node-fetch
- [`d66fa80`](https://github.com/backstage/backstage/commit/d66fa80): Fix root route handling when query parameters are present

#### 0.4.0

##### Minor Changes

- [`815b702`](https://github.com/backstage/backstage/commit/815b702): Configuration is no longer injected into static assets if a `index.html.tmpl` file is present.

##### Patch Changes

- [`815b702`](https://github.com/backstage/backstage/commit/815b702): The `index.html` templating is now done and served from memory rather than written to the filesystem. This means that you can now use config injection with a read-only filesystem, and you no longer need to use the `app.disableConfigInjection` flag.

### `@backstage/plugin-catalog-backend-module-azure` (0.2.3 → [0.3.1](../changelogs/@backstage/plugin-catalog-backend-module-azure.md#031))

#### 0.3.0

##### Minor Changes

- [`277092a`](https://github.com/backstage/backstage/commit/277092a): Added the Azure Blob Storage as catalog entity provider to import all the desired entities from storage account provided in app-config.yaml

##### Patch Changes

- [`5c9cc05`](https://github.com/backstage/backstage/commit/5c9cc05): Use native fetch instead of node-fetch

#### 0.2.4

##### Patch Changes

- [`4e58bc7`](https://github.com/backstage/backstage/commit/4e58bc7): Upgrade to uuid v11 internally

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.2.3 → [0.3.1](../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#031))

#### 0.3.1

##### Patch Changes

- [`8c04d7a`](https://github.com/backstage/backstage/commit/8c04d7a): Updated the `getFile` method in `BitbucketServerClient` to use `this.config.apiBaseUrl` directly for constructing the API request URL, removing the creation of an unnecessary `URL` object. The method now relies on REST API paths for accessing resources instead of direct access, ensuring better alignment with Bitbucket's API conventions.

#### 0.3.0

##### Minor Changes

- [`3f34ea9`](https://github.com/backstage/backstage/commit/3f34ea9): Throttles Bitbucket Server API calls

##### Patch Changes

- [`5c9cc05`](https://github.com/backstage/backstage/commit/5c9cc05): Use native fetch instead of node-fetch

#### 0.2.4

##### Patch Changes

- [`4e58bc7`](https://github.com/backstage/backstage/commit/4e58bc7): Upgrade to uuid v11 internally

### `@backstage/plugin-catalog-backend-module-gitlab` (0.4.4 → [0.6.2](../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#062))

#### 0.6.2

##### Patch Changes

- [`575613f`](https://github.com/backstage/backstage/commit/575613f): Go back to using `node-fetch` for gitlab

#### 0.6.0

##### Minor Changes

- [`99dce5c`](https://github.com/backstage/backstage/commit/99dce5c): Implemented discovery for top-level groups defined in config.group or if undefined global top-level group in Gitlab

##### Patch Changes

- [`191e5bf`](https://github.com/backstage/backstage/commit/191e5bf): `restrictUsersToGroup` should use the entire group path when getting members
- [`5c9cc05`](https://github.com/backstage/backstage/commit/5c9cc05): Use native fetch instead of node-fetch

#### 0.5.0

##### Minor Changes

- [`1b5fdd9`](https://github.com/backstage/backstage/commit/1b5fdd9): Extended the configuration with the `includeArchivedRepos` property, which allows including repositories when the project is archived.

##### Patch Changes

- [`4e58bc7`](https://github.com/backstage/backstage/commit/4e58bc7): Upgrade to uuid v11 internally

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.5.6 → [0.6.2](../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#062))

#### 0.6.2

##### Patch Changes

- [`ec547b8`](https://github.com/backstage/backstage/commit/ec547b8): Remove the error handler middleware, since that is now provided by the framework

#### 0.6.1

##### Patch Changes

- [`dfc8b41`](https://github.com/backstage/backstage/commit/dfc8b41): Updated dependency `@opentelemetry/api` to `^1.9.0`.
- [`cce9cae`](https://github.com/backstage/backstage/commit/cce9cae): Deprecate old-backend-system `IncrementalCatalogBuilder`
- [`fe87fbf`](https://github.com/backstage/backstage/commit/fe87fbf): Add task metrics as two gauges that track the last start and end timestamps as epoch seconds.
- [`5aa44d2`](https://github.com/backstage/backstage/commit/5aa44d2): Wire up the events together in the new backend system
- [`d42ecb0`](https://github.com/backstage/backstage/commit/d42ecb0): Remove backend-common package from incremental-ingestion plugin and update related code
- [`cbfc69e`](https://github.com/backstage/backstage/commit/cbfc69e): Create a `dev/index.ts` entrypoint for `yarn start`
- [`3ca5f70`](https://github.com/backstage/backstage/commit/3ca5f70): Ensure that the scheduled worker task doesn't run at an unreasonably high frequency

#### 0.6.0

##### Minor Changes

- [`6cf91c5`](https://github.com/backstage/backstage/commit/6cf91c5): Use `HumanDuration` for all duration needs in the public API, instead of `luxon` types. These are generally compatible, with a few caveats:

  - If you scheduled things to run quarterly (`quarter` or `quarters`), you can use `{ months: 3 }` instead.
  - If you used the singular nouns such as `year: 1`, use plurals instead (e.g. `years: 1`).

##### Patch Changes

- [`c5e39e7`](https://github.com/backstage/backstage/commit/c5e39e7): Internal refactor to use the deferred from the types package
- [`4e58bc7`](https://github.com/backstage/backstage/commit/4e58bc7): Upgrade to uuid v11 internally

### `@backstage/plugin-catalog-backend-module-ldap` (0.9.1 → [0.11.1](../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0111))

#### 0.11.0

##### Minor Changes

- [`732700a`](https://github.com/backstage/backstage/commit/732700a): Updated fix for ldap entity mapping which doesn't require extra config setting of dnCaseSensitive
- [`95ac4a2`](https://github.com/backstage/backstage/commit/95ac4a2): Add new ldap vendor config 'LLDAP'

##### Patch Changes

- [`5f04976`](https://github.com/backstage/backstage/commit/5f04976): Fixed a bug that caused missing code in published packages.

#### 0.10.0

##### Minor Changes

- [`415aeb3`](https://github.com/backstage/backstage/commit/415aeb3): Add Support for Google LDAP Vendor

##### Patch Changes

- [`884a86c`](https://github.com/backstage/backstage/commit/884a86c): Added a `dnCaseSensitive` flag to support LDAP servers with mixed-case attributes.
- [`4e58bc7`](https://github.com/backstage/backstage/commit/4e58bc7): Upgrade to uuid v11 internally

### `@backstage/plugin-events-backend` (0.3.15 → [0.4.1](../changelogs/@backstage/plugin-events-backend.md#041))

#### 0.4.1

##### Patch Changes

- [`d9d62ef`](https://github.com/backstage/backstage/commit/d9d62ef): Remove some internal usages of the backend-common package

#### 0.4.0

##### Minor Changes

- [`384e494`](https://github.com/backstage/backstage/commit/384e494): Internal updates to generated code.

##### Patch Changes

- [`1577511`](https://github.com/backstage/backstage/commit/1577511): Allow configuring a timeout for event bus polling requests. This can be set like so in your app-config:

  ```yaml
  events:
    notifyTimeoutMs: 30000
  ```

#### 0.3.16

##### Patch Changes

- [`e02a02b`](https://github.com/backstage/backstage/commit/e02a02b): Fix `events.useEventBus` by propagating config to `DefaultEventsService`
- [`9816f51`](https://github.com/backstage/backstage/commit/9816f51): Add raw body information to `RequestDetails`
  and use the raw body when validating incoming event requests.
- [`b7d0334`](https://github.com/backstage/backstage/commit/b7d0334): Cleaning up event subscriptions after the max age window

### `@backstage/plugin-kubernetes` (0.11.16 → [0.12.3](../changelogs/@backstage/plugin-kubernetes.md#0123))

#### 0.12.0

##### Minor Changes

- [`71b8704`](https://github.com/backstage/backstage/commit/71b8704): Bumping @kubernetes/client-node to 1.0.0-rc7 to mitigate CVEs related to the request and tough-cookie packages

### `@backstage/plugin-kubernetes-backend` (0.18.7 → [0.19.2](../changelogs/@backstage/plugin-kubernetes-backend.md#0192))

#### 0.19.1

##### Patch Changes

- [`cbfc69e`](https://github.com/backstage/backstage/commit/cbfc69e): Create a `dev/index.ts` entrypoint for `yarn start`
- [`928db6a`](https://github.com/backstage/backstage/commit/928db6a): Support fetch pod metrics with custom resources

#### 0.19.0

##### Minor Changes

- [`71b8704`](https://github.com/backstage/backstage/commit/71b8704): Bumping @kubernetes/client-node to 1.0.0-rc7 to mitigate CVEs related to the request and tough-cookie packages

##### Patch Changes

- [`bee9664`](https://github.com/backstage/backstage/commit/bee9664): Adapted the config.d.ts for custom k8s cluster authProvider implementations

### `@backstage/plugin-kubernetes-common` (0.8.3 → [0.9.2](../changelogs/@backstage/plugin-kubernetes-common.md#092))

#### 0.9.0

##### Minor Changes

- [`71b8704`](https://github.com/backstage/backstage/commit/71b8704): Bumping @kubernetes/client-node to 1.0.0-rc7 to mitigate CVEs related to the request and tough-cookie packages

### `@backstage/plugin-kubernetes-node` (0.1.20 → [0.2.2](../changelogs/@backstage/plugin-kubernetes-node.md#022))

#### 0.2.0

##### Minor Changes

- [`71b8704`](https://github.com/backstage/backstage/commit/71b8704): Bumping @kubernetes/client-node to 1.0.0-rc7 to mitigate CVEs related to the request and tough-cookie packages

### `@backstage/plugin-kubernetes-react` (0.4.4 → [0.5.3](../changelogs/@backstage/plugin-kubernetes-react.md#053))

#### 0.5.0

##### Minor Changes

- [`71b8704`](https://github.com/backstage/backstage/commit/71b8704): Bumping @kubernetes/client-node to 1.0.0-rc7 to mitigate CVEs related to the request and tough-cookie packages

##### Patch Changes

- [`0b729da`](https://github.com/backstage/backstage/commit/0b729da): add the pod delete feature to the kubernetes react plugin

### `@backstage/plugin-notifications` (0.3.2 → [0.5.1](../changelogs/@backstage/plugin-notifications.md#051))

#### 0.5.0

##### Minor Changes

- [`fc15b77`](https://github.com/backstage/backstage/commit/fc15b77): Switched to using the new `/notifications` endpoints. Be sure to update the `notifications` plugin backend before deploying this frontend plugin change.

#### 0.4.0

##### Minor Changes

- [`87ffc1c`](https://github.com/backstage/backstage/commit/87ffc1c): Rephrasing labels of the View filter to be more clear. Based on the received users' feedback.

##### Patch Changes

- [`4186105`](https://github.com/backstage/backstage/commit/4186105): Added title to the Notifications' table. The title clearly states the filter selection and total count of messages. This change aligns the look and feel closer to other tables.
- [`3a0731e`](https://github.com/backstage/backstage/commit/3a0731e): The "Created after" filter renamed to the "Sent out" based on the received users' feedback.
- [`3e135f2`](https://github.com/backstage/backstage/commit/3e135f2): The notification's title is emphasized to be clearly distinguished from the description.
- [`97ba58f`](https://github.com/backstage/backstage/commit/97ba58f): Add support for user specific notification settings
- [`1d87c43`](https://github.com/backstage/backstage/commit/1d87c43): Show count of unread notifications in the left-side MenuItem. This replaces the simple true/false bullet.

### `@backstage/plugin-signals-backend` (0.2.2 → [0.3.0](../changelogs/@backstage/plugin-signals-backend.md#030))

#### 0.3.0

##### Minor Changes

- [`f59ea1d`](https://github.com/backstage/backstage/commit/f59ea1d): Removed support for the old backend system. If you were using the old `createRouter` export, please migrate to [the new backend system](https://backstage.io/docs/backend-system/).

#### 0.2.4

##### Patch Changes

- [`1e624ca`](https://github.com/backstage/backstage/commit/1e624ca): Restrict `@types/express` version range from `*` to `^4.17.6`.
- [`5c9cc05`](https://github.com/backstage/backstage/commit/5c9cc05): Use native fetch instead of node-fetch

#### 0.2.3

##### Patch Changes

- [`a1e01ff`](https://github.com/backstage/backstage/commit/a1e01ff): The signals backend now supports scaled deployments where clients may be connecting to one of many signal backend instances.
- [`4e58bc7`](https://github.com/backstage/backstage/commit/4e58bc7): Upgrade to uuid v11 internally

### `@backstage/repo-tools` (0.10.0 → [0.12.1](../changelogs/@backstage/repo-tools.md#0121))

#### 0.12.0

##### Minor Changes

- [`c1eccd6`](https://github.com/backstage/backstage/commit/c1eccd6): Fix invalid path and malformed flags bugs in api-reports.ts

##### Patch Changes

- [`860e3b5`](https://github.com/backstage/backstage/commit/860e3b5): Generated OpenAPI clients now support paths with tags.
- [`5f04976`](https://github.com/backstage/backstage/commit/5f04976): Fixed a bug that caused missing code in published packages.
- [`00058d0`](https://github.com/backstage/backstage/commit/00058d0): The `generate-patch` command will now add a single resolution entry for all versions of the patched package, rather than separate entries for each version query.

#### 0.11.0

##### Minor Changes

- [`1440232`](https://github.com/backstage/backstage/commit/1440232): `backstage-repo-tools package schema openapi generate --server` now generates complete TS interfaces for all request/response objects in your OpenAPI schema. This fixes an edge case around recursive schemas and standardizes both the generated client and server to have similar generated types.
- [`47fdbb4`](https://github.com/backstage/backstage/commit/47fdbb4): Adds a `--watch` mode to the `schema openapi generate` command for a better local schema writing experience.

##### Patch Changes

- [`95401a8`](https://github.com/backstage/backstage/commit/95401a8): The `generate-patch` command now properly includes newly created files in the patch.
- [`23f1da2`](https://github.com/backstage/backstage/commit/23f1da2): Updated dependency `ts-morph` to `^24.0.0`.
- [`3f1fb21`](https://github.com/backstage/backstage/commit/3f1fb21): The `generate-patch` command will now fall back to always adding a `resolutions` entry, even if no matching descriptors are found.
- [`dde85ee`](https://github.com/backstage/backstage/commit/dde85ee): Added a new `generate-patch` command that can be used to generate patches for current changes in a source workspace to be installed it a target workspace.
- [`702f41d`](https://github.com/backstage/backstage/commit/702f41d): Bumped dev dependencies `@types/node`

## 0.0.x patch version bumps

### `@backstage/plugin-kubernetes-cluster` (0.0.17 → [0.0.21](../changelogs/@backstage/plugin-kubernetes-cluster.md#0021))

#### 0.0.18

##### Patch Changes

- [`702f41d`](https://github.com/backstage/backstage/commit/702f41d): Bumped dev dependencies `@types/node`

### `@backstage/plugin-notifications-common` (0.0.5 → [0.0.8](../changelogs/@backstage/plugin-notifications-common.md#008))

#### 0.0.6

##### Patch Changes

- [`97ba58f`](https://github.com/backstage/backstage/commit/97ba58f): Add support for user specific notification settings

### `@backstage/plugin-signals` (0.0.11 → [0.0.15](../changelogs/@backstage/plugin-signals.md#0015))

#### 0.0.12

##### Patch Changes

- [`4e58bc7`](https://github.com/backstage/backstage/commit/4e58bc7): Upgrade to uuid v11 internally

### `@backstage/release-manifests` (0.0.11 → [0.0.12](../changelogs/@backstage/release-manifests.md#0012))

#### 0.0.12

##### Patch Changes

- [`2e140dc`](https://github.com/backstage/backstage/commit/2e140dc): Switch to native fetch for loading release manifests
- [`b29eaea`](https://github.com/backstage/backstage/commit/b29eaea): Allow overriding the fetch function used inside getManifestByVersion

## 0.x patch version bumps

### `@backstage/cli-common` (0.1.14 → [0.1.15](../changelogs/@backstage/cli-common.md#0115))

#### 0.1.15

##### Patch Changes

- [`702f41d`](https://github.com/backstage/backstage/commit/702f41d): Bumped dev dependencies `@types/node`

### `@backstage/cli-node` (0.2.9 → [0.2.12](../changelogs/@backstage/cli-node.md#0212))

#### 0.2.11

##### Patch Changes

- [`af665ea`](https://github.com/backstage/backstage/commit/af665ea): add PackageManager and Lockfile interfaces for future use
- [`cbfc69e`](https://github.com/backstage/backstage/commit/cbfc69e): Internal refactor

### `@backstage/codemods` (0.1.51 → [0.1.52](../changelogs/@backstage/codemods.md#0152))

#### 0.1.52

##### Patch Changes

- [`702f41d`](https://github.com/backstage/backstage/commit/702f41d): Bumped dev dependencies `@types/node`

### `@backstage/core-compat-api` (0.3.1 → [0.3.5](../changelogs/@backstage/core-compat-api.md#035))

#### 0.3.4

##### Patch Changes

- [`1f30730`](https://github.com/backstage/backstage/commit/1f30730): Updated dependency `@oriflame/backstage-plugin-score-card` to `^0.9.0`.

### `@backstage/create-app` (0.5.21 → [0.5.24](../changelogs/@backstage/create-app.md#0524))

#### 0.5.24

##### Patch Changes

- [`2e3fbc1`](https://github.com/backstage/backstage/commit/2e3fbc1): Bumped create-app version.
- [`0980e40`](https://github.com/backstage/backstage/commit/0980e40): Bumped create-app version.
- [`828c993`](https://github.com/backstage/backstage/commit/828c993): Added `--jobs unlimited` to `dev` script to help cases where the backend does not start up during local development

#### 0.5.23

##### Patch Changes

- [`5819f8d`](https://github.com/backstage/backstage/commit/5819f8d): Updated Dockerfile to include `backstage.json` file
- [`583f3d4`](https://github.com/backstage/backstage/commit/583f3d4): Updated the template to use `@backstage/cli/config/prettier` instead of `@spotify/prettier-config`.
- [`e913fdf`](https://github.com/backstage/backstage/commit/e913fdf): Add github backend module to create-app and improve error messages
- [`5c9cc05`](https://github.com/backstage/backstage/commit/5c9cc05): Use native fetch instead of node-fetch

#### 0.5.22

##### Patch Changes

- [`7907e3b`](https://github.com/backstage/backstage/commit/7907e3b): Bumped create-app version.
- [`42386c2`](https://github.com/backstage/backstage/commit/42386c2): Bumped create-app version.
- [`702f41d`](https://github.com/backstage/backstage/commit/702f41d): Updated engines to support Node 20 or 22
- [`a917f86`](https://github.com/backstage/backstage/commit/a917f86): This update adds the @backstage/repo-tools package to the versions.ts file, enabling proper version resolution for templates. The {{version '@backstage/repo-tools'}} placeholder now works as expected in the create-app process.
- [`5872964`](https://github.com/backstage/backstage/commit/5872964): Use the main entrypoint for `create-app` installs
- [`702f41d`](https://github.com/backstage/backstage/commit/702f41d): Bumped dev dependencies `@types/node`

### `@backstage/frontend-defaults` (0.1.1 → [0.1.5](../changelogs/@backstage/frontend-defaults.md#015))

#### 0.1.2

##### Patch Changes

- [`44b82da`](https://github.com/backstage/backstage/commit/44b82da): The default config loader no longer requires `process.env.APP_CONFIG` to be set, allowing config to be read from other sources instead.

### `@backstage/frontend-plugin-api` (0.9.0 → [0.9.4](../changelogs/@backstage/frontend-plugin-api.md#094))

#### 0.9.4

##### Patch Changes

- [`b40eb41`](https://github.com/backstage/backstage/commit/b40eb41): Move `Expand` and `ExpandRecursive` to `@backstage/types`

#### 0.9.3

##### Patch Changes

- [`5f04976`](https://github.com/backstage/backstage/commit/5f04976): Fixed a bug that caused missing code in published packages.

### `@backstage/integration-aws-node` (0.1.12 → [0.1.15](../changelogs/@backstage/integration-aws-node.md#0115))

#### 0.1.13

##### Patch Changes

- [`52ae92d`](https://github.com/backstage/backstage/commit/52ae92d): The `getDefaultCredentialsChain` function now accepts and applies a `region` parameter, preventing it from defaulting to `us-east-1` when no region is specified.

### `@backstage/plugin-app` (0.1.1 → [0.1.5](../changelogs/@backstage/plugin-app.md#015))

#### 0.1.4

##### Patch Changes

- [`e5fa018`](https://github.com/backstage/backstage/commit/e5fa018): The OAuth 2 client implementations will now attempt to refresh the session when the existing session doesn't have the required scopes. The previous behavior was to only try to refresh the session of it was missing, and otherwise directly request a new session. This fixes an issue where some auth providers will not return access tokens with certain scopes unless explicitly requested, leading to an auth popup even if the underlying session already had been granted the requested scopes.
- [`5f04976`](https://github.com/backstage/backstage/commit/5f04976): Fixed a bug that caused missing code in published packages.

### `@backstage/plugin-app-visualizer` (0.1.11 → [0.1.15](../changelogs/@backstage/plugin-app-visualizer.md#0115))

#### 0.1.12

##### Patch Changes

- [`e586e77`](https://github.com/backstage/backstage/commit/e586e77): New `devDependency` for local development setup.

### `@backstage/plugin-auth-backend-module-bitbucket-server-provider` (0.1.1 → [0.1.4](../changelogs/@backstage/plugin-auth-backend-module-bitbucket-server-provider.md#014))

#### 0.1.3

##### Patch Changes

- [`5c9cc05`](https://github.com/backstage/backstage/commit/5c9cc05): Use native fetch instead of node-fetch

### `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.3.1 → [0.3.4](../changelogs/@backstage/plugin-auth-backend-module-cloudflare-access-provider.md#034))

#### 0.3.4

##### Patch Changes

- [`d4a8246`](https://github.com/backstage/backstage/commit/d4a8246): Use the email from `cfIdentity` instead of `claims` when constructing user profile in order to support Cloudflare Service Tokens.

#### 0.3.3

##### Patch Changes

- [`5c9cc05`](https://github.com/backstage/backstage/commit/5c9cc05): Use native fetch instead of node-fetch

#### 0.3.2

##### Patch Changes

- [`d52d7f9`](https://github.com/backstage/backstage/commit/d52d7f9): Support ISO and ms string forms of durations in config too
- [`4e58bc7`](https://github.com/backstage/backstage/commit/4e58bc7): Upgrade to uuid v11 internally

### `@backstage/plugin-auth-backend-module-google-provider` (0.2.1 → [0.2.4](../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#024))

#### 0.2.3

##### Patch Changes

- [`79b055a`](https://github.com/backstage/backstage/commit/79b055a): Pass through `includeGrantedScopes` in order to persist scopes across refresh calls

#### 0.2.2

##### Patch Changes

- [`b833660`](https://github.com/backstage/backstage/commit/b833660): Fix visibility of config for use in front end code

### `@backstage/plugin-auth-backend-module-guest-provider` (0.2.1 → [0.2.4](../changelogs/@backstage/plugin-auth-backend-module-guest-provider.md#024))

#### 0.2.2

##### Patch Changes

- [`5d74716`](https://github.com/backstage/backstage/commit/5d74716): Remove unused backend-common dependency

### `@backstage/plugin-auth-backend-module-microsoft-provider` (0.2.1 → [0.2.4](../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#024))

#### 0.2.3

##### Patch Changes

- [`5c9cc05`](https://github.com/backstage/backstage/commit/5c9cc05): Use native fetch instead of node-fetch

### `@backstage/plugin-auth-backend-module-oidc-provider` (0.3.1 → [0.3.4](../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#034))

#### 0.3.2

##### Patch Changes

- [`5d74716`](https://github.com/backstage/backstage/commit/5d74716): Remove unused backend-common dependency

### `@backstage/plugin-auth-node` (0.5.3 → [0.5.6](../changelogs/@backstage/plugin-auth-node.md#056))

#### 0.5.6

##### Patch Changes

- [`d9d62ef`](https://github.com/backstage/backstage/commit/d9d62ef): Remove some internal usages of the backend-common package
- [`8379bf4`](https://github.com/backstage/backstage/commit/8379bf4): Remove usages of `PluginDatabaseManager` and `PluginEndpointDiscovery` and replace with their equivalent service types

#### 0.5.5

##### Patch Changes

- [`c907440`](https://github.com/backstage/backstage/commit/c907440): Improved error forwarding for OAuth refresh endpoints
- [`1e624ca`](https://github.com/backstage/backstage/commit/1e624ca): Restrict `@types/express` version range from `*` to `^4.17.6`.
- [`5c9cc05`](https://github.com/backstage/backstage/commit/5c9cc05): Use native fetch instead of node-fetch

#### 0.5.4

##### Patch Changes

- [`a0a9a4a`](https://github.com/backstage/backstage/commit/a0a9a4a): Browsers silently drop cookies that exceed 4KB, which can be problematic for refresh tokens and other large cookies.This update ensures that large cookies, like refresh tokens, are not dropped by browsers, maintaining the integrity of the authentication process. The changes include both the implementation of the cookie splitting logic and corresponding tests to validate the new functionality.
- [`4e58bc7`](https://github.com/backstage/backstage/commit/4e58bc7): Upgrade to uuid v11 internally

### `@backstage/plugin-bitbucket-cloud-common` (0.2.24 → [0.2.27](../changelogs/@backstage/plugin-bitbucket-cloud-common.md#0227))

#### 0.2.25

##### Patch Changes

- [`23f1da2`](https://github.com/backstage/backstage/commit/23f1da2): Updated dependency `ts-morph` to `^24.0.0`.

### `@backstage/plugin-catalog-backend-module-aws` (0.4.4 → [0.4.7](../changelogs/@backstage/plugin-catalog-backend-module-aws.md#047))

#### 0.4.5

##### Patch Changes

- [`4e58bc7`](https://github.com/backstage/backstage/commit/4e58bc7): Upgrade to uuid v11 internally

### `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.4.1 → [0.4.4](../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#044))

#### 0.4.4

##### Patch Changes

- [`12ba80f`](https://github.com/backstage/backstage/commit/12ba80f): docs: Use a valid configuration as example

#### 0.4.2

##### Patch Changes

- [`4e58bc7`](https://github.com/backstage/backstage/commit/4e58bc7): Upgrade to uuid v11 internally

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.4.1 → [0.4.4](../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#044))

#### 0.4.2

##### Patch Changes

- [`4e58bc7`](https://github.com/backstage/backstage/commit/4e58bc7): Upgrade to uuid v11 internally
- [`f6b4b8a`](https://github.com/backstage/backstage/commit/f6b4b8a): Implemented discovery on project-level to shift Bitbucket Cloud API limits

### `@backstage/plugin-catalog-backend-module-gerrit` (0.2.3 → [0.2.6](../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#026))

#### 0.2.5

##### Patch Changes

- [`5c9cc05`](https://github.com/backstage/backstage/commit/5c9cc05): Use native fetch instead of node-fetch

#### 0.2.4

##### Patch Changes

- [`4e58bc7`](https://github.com/backstage/backstage/commit/4e58bc7): Upgrade to uuid v11 internally

### `@backstage/plugin-catalog-backend-module-github` (0.7.6 → [0.7.9](../changelogs/@backstage/plugin-catalog-backend-module-github.md#079))

#### 0.7.9

##### Patch Changes

- [`8379bf4`](https://github.com/backstage/backstage/commit/8379bf4): Remove usages of `PluginDatabaseManager` and `PluginEndpointDiscovery` and replace with their equivalent service types
- [`64dd0b8`](https://github.com/backstage/backstage/commit/64dd0b8): Added rate limiting and throttling to `GithubOrgEntityProvider`
- [`4ab00e4`](https://github.com/backstage/backstage/commit/4ab00e4): Fixes an issue in `GithubMultiOrgEntityProvider` that caused an error when processing teams without a parent.

#### 0.7.8

##### Patch Changes

- [`468bbcc`](https://github.com/backstage/backstage/commit/468bbcc): Pass in a default schedule to the `GithubEntityProvider` if none is provided
- [`5c9cc05`](https://github.com/backstage/backstage/commit/5c9cc05): Use native fetch instead of node-fetch

#### 0.7.7

##### Patch Changes

- [`9790c02`](https://github.com/backstage/backstage/commit/9790c02): Fixed an issue in `GithubOrgEntityProvider` that caused an error when processing teams without a parent.
- [`4e58bc7`](https://github.com/backstage/backstage/commit/4e58bc7): Upgrade to uuid v11 internally

### `@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.2 → [0.2.5](../changelogs/@backstage/plugin-catalog-backend-module-gitlab-org.md#025))

#### 0.2.5

##### Patch Changes

- [`d9d62ef`](https://github.com/backstage/backstage/commit/d9d62ef): Remove some internal usages of the backend-common package

### `@backstage/plugin-catalog-backend-module-msgraph` (0.6.3 → [0.6.6](../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#066))

#### 0.6.6

##### Patch Changes

- [`29a4aa8`](https://github.com/backstage/backstage/commit/29a4aa8): fix(config): add missing parameters in config schema

#### 0.6.5

##### Patch Changes

- [`5c9cc05`](https://github.com/backstage/backstage/commit/5c9cc05): Use native fetch instead of node-fetch

#### 0.6.4

##### Patch Changes

- [`4e58bc7`](https://github.com/backstage/backstage/commit/4e58bc7): Upgrade to uuid v11 internally

### `@backstage/plugin-catalog-backend-module-openapi` (0.2.3 → [0.2.6](../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#026))

#### 0.2.6

##### Patch Changes

- [`57e794a`](https://github.com/backstage/backstage/commit/57e794a): Refactor to no longer use backend-common

#### 0.2.4

##### Patch Changes

- [`5f058e2`](https://github.com/backstage/backstage/commit/5f058e2): Updated dependency `@apidevtools/json-schema-ref-parser` to `^11.0.0`.

### `@backstage/plugin-catalog-backend-module-puppetdb` (0.2.3 → [0.2.6](../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#026))

#### 0.2.5

##### Patch Changes

- [`5c9cc05`](https://github.com/backstage/backstage/commit/5c9cc05): Use native fetch instead of node-fetch

#### 0.2.4

##### Patch Changes

- [`4e58bc7`](https://github.com/backstage/backstage/commit/4e58bc7): Upgrade to uuid v11 internally

### `@backstage/plugin-catalog-import` (0.12.5 → [0.12.9](../changelogs/@backstage/plugin-catalog-import.md#0129))

#### 0.12.6

##### Patch Changes

- [`ea5b7f3`](https://github.com/backstage/backstage/commit/ea5b7f3): Fixed parsing of catalog-info.yaml when creating a PR to register a repository if the file contains more than one document

### `@backstage/plugin-config-schema` (0.1.60 → [0.1.64](../changelogs/@backstage/plugin-config-schema.md#0164))

#### 0.1.63

##### Patch Changes

- [`c36bd35`](https://github.com/backstage/backstage/commit/c36bd35): Internal refactor to break potential circular imports

### `@backstage/plugin-events-backend-module-aws-sqs` (0.4.4 → [0.4.7](../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#047))

#### 0.4.5

##### Patch Changes

- [`d52d7f9`](https://github.com/backstage/backstage/commit/d52d7f9): Support ISO and ms string forms of durations in config too

### `@backstage/plugin-events-backend-module-github` (0.2.13 → [0.2.16](../changelogs/@backstage/plugin-events-backend-module-github.md#0216))

#### 0.2.14

##### Patch Changes

- [`9816f51`](https://github.com/backstage/backstage/commit/9816f51): Fix the event request validation for incoming requests for GitHub webhook events
  by using the raw body when verifying the signature.
- [`9816f51`](https://github.com/backstage/backstage/commit/9816f51): Add raw body information to `RequestDetails`
  and use the raw body when validating incoming event requests.

### `@backstage/plugin-events-node` (0.4.4 → [0.4.7](../changelogs/@backstage/plugin-events-node.md#047))

#### 0.4.6

##### Patch Changes

- [`79a06f6`](https://github.com/backstage/backstage/commit/79a06f6): Clarified purpose of subscriber ID in TSDoc for `EventsServiceSubscribeOptions`.
- [`1577511`](https://github.com/backstage/backstage/commit/1577511): Allow configuring a timeout for event bus polling requests. This can be set like so in your app-config:

  ```yaml
  events:
    notifyTimeoutMs: 30000
  ```

#### 0.4.5

##### Patch Changes

- [`4501631`](https://github.com/backstage/backstage/commit/4501631): Fixed an issue where subscribing to events threw an error and gave up too easily. Calling the subscribe method will cause the background polling loop to keep trying to connect to the events backend, even if the initial request fails.

  By default the events service will attempt to publish and subscribe to events from the events bus API in the events backend, but if it fails due to the events backend not being installed, it will bail and never try calling the API again. There is now a new `events.useEventBus` configuration and option for the `DefaultEventsService` that lets you control this behavior. You can set it to `'never'` to disabled API calls to the events backend completely, or `'always'` to never allow it to be disabled.

- [`e02a02b`](https://github.com/backstage/backstage/commit/e02a02b): Fix `events.useEventBus` by propagating config to `DefaultEventsService`
- [`9816f51`](https://github.com/backstage/backstage/commit/9816f51): Add raw body information to `RequestDetails`
  and use the raw body when validating incoming event requests.
- [`5d74716`](https://github.com/backstage/backstage/commit/5d74716): Remove unused backend-common dependency
- [`0b57aa1`](https://github.com/backstage/backstage/commit/0b57aa1): Fixed an issue where the event bus polling would duplicate and increase exponentially over time.

### `@backstage/plugin-home` (0.8.0 → [0.8.4](../changelogs/@backstage/plugin-home.md#084))

#### 0.8.4

##### Patch Changes

- [`7932f1e`](https://github.com/backstage/backstage/commit/7932f1e): Exported `QuickStartCard` component.
- [`d8f9079`](https://github.com/backstage/backstage/commit/d8f9079): Updated dependency `@rjsf/utils` to `5.23.2`.
  Updated dependency `@rjsf/core` to `5.23.2`.
  Updated dependency `@rjsf/material-ui` to `5.23.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.23.2`.

#### 0.8.3

##### Patch Changes

- [`7248f3b`](https://github.com/backstage/backstage/commit/7248f3b): Added a new Quick Start Card to `plugin-home`, which can display basic info to get users the info they need to onboard to the Catalog.

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

- [`9951ba4`](https://github.com/backstage/backstage/commit/9951ba4): Updated dependency `@rjsf/utils` to `5.23.1`.
  Updated dependency `@rjsf/core` to `5.23.1`.
  Updated dependency `@rjsf/material-ui` to `5.23.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.23.1`.

#### 0.8.1

##### Patch Changes

- [`8b1b2cf`](https://github.com/backstage/backstage/commit/8b1b2cf): Improve Starred Entities UI to reduce whitespace and provide more context on the entities:

  - Use the Entity Presentation API (via `<EntityDisplayName>`) to display the entity's name
  - Component's `kind` and `spec.type` are displayed as a secondary text
  - List items are condensed to reduce unnecessary spacing

### `@backstage/plugin-home-react` (0.1.18 → [0.1.22](../changelogs/@backstage/plugin-home-react.md#0122))

#### 0.1.22

##### Patch Changes

- [`d8f9079`](https://github.com/backstage/backstage/commit/d8f9079): Updated dependency `@rjsf/utils` to `5.23.2`.
  Updated dependency `@rjsf/core` to `5.23.2`.
  Updated dependency `@rjsf/material-ui` to `5.23.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.23.2`.

#### 0.1.21

##### Patch Changes

- [`9951ba4`](https://github.com/backstage/backstage/commit/9951ba4): Updated dependency `@rjsf/utils` to `5.23.1`.
  Updated dependency `@rjsf/core` to `5.23.1`.
  Updated dependency `@rjsf/material-ui` to `5.23.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.23.1`.

### `@backstage/plugin-notifications-backend-module-email` (0.3.2 → [0.3.5](../changelogs/@backstage/plugin-notifications-backend-module-email.md#035))

#### 0.3.5

##### Patch Changes

- [`bed5f35`](https://github.com/backstage/backstage/commit/bed5f35): Added more examples of the plugin configuration

#### 0.3.3

##### Patch Changes

- [`d52d7f9`](https://github.com/backstage/backstage/commit/d52d7f9): Support ISO and ms string forms of durations in config too
- [`5d74716`](https://github.com/backstage/backstage/commit/5d74716): Remove unused backend-common dependency

### `@backstage/plugin-notifications-node` (0.2.8 → [0.2.11](../changelogs/@backstage/plugin-notifications-node.md#0211))

#### 0.2.10

##### Patch Changes

- [`5c9cc05`](https://github.com/backstage/backstage/commit/5c9cc05): Use native fetch instead of node-fetch

#### 0.2.9

##### Patch Changes

- [`4e58bc7`](https://github.com/backstage/backstage/commit/4e58bc7): Upgrade to uuid v11 internally
- [`5d74716`](https://github.com/backstage/backstage/commit/5d74716): Remove unused backend-common dependency

### `@backstage/plugin-permission-backend` (0.5.50 → [0.5.53](../changelogs/@backstage/plugin-permission-backend.md#0553))

#### 0.5.53

##### Patch Changes

- [`d9d62ef`](https://github.com/backstage/backstage/commit/d9d62ef): Remove some internal usages of the backend-common package

#### 0.5.52

##### Patch Changes

- [`1e624ca`](https://github.com/backstage/backstage/commit/1e624ca): Restrict `@types/express` version range from `*` to `^4.17.6`.
- [`5c9cc05`](https://github.com/backstage/backstage/commit/5c9cc05): Use native fetch instead of node-fetch

### `@backstage/plugin-permission-common` (0.8.1 → [0.8.4](../changelogs/@backstage/plugin-permission-common.md#084))

#### 0.8.2

##### Patch Changes

- [`4e58bc7`](https://github.com/backstage/backstage/commit/4e58bc7): Upgrade to uuid v11 internally

### `@backstage/plugin-permission-node` (0.8.4 → [0.8.7](../changelogs/@backstage/plugin-permission-node.md#087))

#### 0.8.7

##### Patch Changes

- [`d9d62ef`](https://github.com/backstage/backstage/commit/d9d62ef): Remove some internal usages of the backend-common package

#### 0.8.6

##### Patch Changes

- [`b149e2a`](https://github.com/backstage/backstage/commit/b149e2a): The `createPermissionIntegrationRouter` function now detects and prevents the exposure of duplicate permissions.

### `@backstage/plugin-proxy-backend` (0.5.7 → [0.5.10](../changelogs/@backstage/plugin-proxy-backend.md#0510))

#### 0.5.10

##### Patch Changes

- [`11b001c`](https://github.com/backstage/backstage/commit/11b001c): Added `proxyEndpointsExtensionPoint` to allow addition of proxy configuration through an extension point in the new backend system.

#### 0.5.9

##### Patch Changes

- [`5c9cc05`](https://github.com/backstage/backstage/commit/5c9cc05): Use native fetch instead of node-fetch

#### 0.5.8

##### Patch Changes

- [`4e58bc7`](https://github.com/backstage/backstage/commit/4e58bc7): Upgrade to uuid v11 internally

### `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.3.2 → [0.3.6](../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket.md#036))

#### 0.3.5

##### Patch Changes

- [`5f04976`](https://github.com/backstage/backstage/commit/5f04976): Fixed a bug that caused missing code in published packages.
- [`5c9cc05`](https://github.com/backstage/backstage/commit/5c9cc05): Use native fetch instead of node-fetch

### `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.2.2 → [0.2.5](../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#025))

#### 0.2.4

##### Patch Changes

- [`c4ffd13`](https://github.com/backstage/backstage/commit/c4ffd13): Added the autocomplete feature to GitlabRepoUrlPicker
- [`5c9cc05`](https://github.com/backstage/backstage/commit/5c9cc05): Use native fetch instead of node-fetch

### `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.2 → [0.2.5](../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#025))

#### 0.2.4

##### Patch Changes

- [`5c9cc05`](https://github.com/backstage/backstage/commit/5c9cc05): Use native fetch instead of node-fetch

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.2 → [0.3.5](../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#035))

#### 0.3.4

##### Patch Changes

- [`5c9cc05`](https://github.com/backstage/backstage/commit/5c9cc05): Use native fetch instead of node-fetch

### `@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.2 → [0.2.5](../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#025))

#### 0.2.4

##### Patch Changes

- [`5c9cc05`](https://github.com/backstage/backstage/commit/5c9cc05): Use native fetch instead of node-fetch

### `@backstage/plugin-scaffolder-backend-module-gitea` (0.2.2 → [0.2.5](../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#025))

#### 0.2.4

##### Patch Changes

- [`5c9cc05`](https://github.com/backstage/backstage/commit/5c9cc05): Use native fetch instead of node-fetch

### `@backstage/plugin-scaffolder-backend-module-github` (0.5.2 → [0.5.5](../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#055))

#### 0.5.5

##### Patch Changes

- [`edaf925`](https://github.com/backstage/backstage/commit/edaf925): Updates to allow users to subscribe to the newly created repository within GitHub to mimic similar functionality found within the GitHub UI.

#### 0.5.4

##### Patch Changes

- [`7df6179`](https://github.com/backstage/backstage/commit/7df6179): adding requiredLinearHistory property for branch protection settings
- [`b5e002b`](https://github.com/backstage/backstage/commit/b5e002b): Change `github:environment:create` action to request and use a token when resolving reviewer entity refs from the Backstage catalog.
- [`e913fdf`](https://github.com/backstage/backstage/commit/e913fdf): Add github backend module to create-app and improve error messages
- [`973dd6f`](https://github.com/backstage/backstage/commit/973dd6f): Minor spell fix in action parameters

### `@backstage/plugin-scaffolder-backend-module-sentry` (0.2.2 → [0.2.5](../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#025))

#### 0.2.4

##### Patch Changes

- [`5c9cc05`](https://github.com/backstage/backstage/commit/5c9cc05): Use native fetch instead of node-fetch

### `@backstage/plugin-search-backend-module-explore` (0.2.4 → [0.2.7](../changelogs/@backstage/plugin-search-backend-module-explore.md#027))

#### 0.2.6

##### Patch Changes

- [`ed0aaec`](https://github.com/backstage/backstage/commit/ed0aaec): Update README
- [`5c9cc05`](https://github.com/backstage/backstage/commit/5c9cc05): Use native fetch instead of node-fetch

#### 0.2.5

##### Patch Changes

- [`a9a7c7c`](https://github.com/backstage/backstage/commit/a9a7c7c): Updated dependency `@backstage-community/plugin-explore-common` to `^0.0.7`.

### `@backstage/plugin-search-backend-module-pg` (0.5.37 → [0.5.40](../changelogs/@backstage/plugin-search-backend-module-pg.md#0540))

#### 0.5.38

##### Patch Changes

- [`4e58bc7`](https://github.com/backstage/backstage/commit/4e58bc7): Upgrade to uuid v11 internally

### `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.3.2 → [0.3.5](../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#035))

#### 0.3.4

##### Patch Changes

- [`5c9cc05`](https://github.com/backstage/backstage/commit/5c9cc05): Use native fetch instead of node-fetch

#### 0.3.3

##### Patch Changes

- [`5d74716`](https://github.com/backstage/backstage/commit/5d74716): Remove unused backend-common dependency

### `@backstage/plugin-search-backend-module-techdocs` (0.3.1 → [0.3.5](../changelogs/@backstage/plugin-search-backend-module-techdocs.md#035))

#### 0.3.4

##### Patch Changes

- [`ed0aaec`](https://github.com/backstage/backstage/commit/ed0aaec): Update README
- [`5c9cc05`](https://github.com/backstage/backstage/commit/5c9cc05): Use native fetch instead of node-fetch

### `@backstage/plugin-signals-node` (0.1.13 → [0.1.16](../changelogs/@backstage/plugin-signals-node.md#0116))

#### 0.1.14

##### Patch Changes

- [`4e58bc7`](https://github.com/backstage/backstage/commit/4e58bc7): Upgrade to uuid v11 internally
- [`5d74716`](https://github.com/backstage/backstage/commit/5d74716): Remove unused backend-common dependency

### `@backstage/theme` (0.6.0 → [0.6.3](../changelogs/@backstage/theme.md#063))

#### 0.6.3

##### Patch Changes

- [`5f04976`](https://github.com/backstage/backstage/commit/5f04976): Fixed a bug that caused missing code in published packages.

#### 0.6.1

##### Patch Changes

- [`ea75c37`](https://github.com/backstage/backstage/commit/ea75c37): Internal refactor to avoid top-level imports from MUI.

## Other minor version bumps

### `@backstage/backend-app-api` (1.0.1 → [1.1.1](../changelogs/@backstage/backend-app-api.md#111))

#### 1.1.1

##### Patch Changes

- [`02534c7`](https://github.com/backstage/backstage/commit/02534c7): Corrected spelling mistake in error message

#### 1.1.0

##### Minor Changes

- [`ebf083d`](https://github.com/backstage/backstage/commit/ebf083d): Service factories added by feature loaders now have lower priority and will be ignored if a factory for the same service is added directly by `backend.add(serviceFactory)`.
- [`12eac85`](https://github.com/backstage/backstage/commit/12eac85): **EXPERIMENTAL**: Adds a new `instanceMetadataService` to hold information about a specific backend instance.

##### Patch Changes

- [`eef3ef1`](https://github.com/backstage/backstage/commit/eef3ef1): Removed unused `express` dependencies.
- [`ae2408b`](https://github.com/backstage/backstage/commit/ae2408b): Add a `toString` on the default `BackendFeatureMeta` implementations
- [`5c9cc05`](https://github.com/backstage/backstage/commit/5c9cc05): Use native fetch instead of node-fetch
- [`0e9c9fa`](https://github.com/backstage/backstage/commit/0e9c9fa): As soon as a backend termination signal is received, call before shutting down root lifecycle hooks.

#### 1.0.2

##### Patch Changes

- [`4e58bc7`](https://github.com/backstage/backstage/commit/4e58bc7): Upgrade to uuid v11 internally
- [`5d74716`](https://github.com/backstage/backstage/commit/5d74716): Remove unused backend-common dependency

### `@backstage/backend-plugin-api` (1.0.1 → [1.1.1](../changelogs/@backstage/backend-plugin-api.md#111))

#### 1.1.0

##### Minor Changes

- [`12eac85`](https://github.com/backstage/backstage/commit/12eac85): **EXPERIMENTAL**: Adds a new `instanceMetadataService` to hold information about a specific backend instance.

##### Patch Changes

- [`eef3ef1`](https://github.com/backstage/backstage/commit/eef3ef1): Removed unused `express` dependencies.
- [`0e9c9fa`](https://github.com/backstage/backstage/commit/0e9c9fa): The `RootLifecycleService` now has a new `addBeforeShutdownHook` method, and hooks added through this method will run immediately when a termination event is received.

  The backend will not proceed with the shutdown and run the `Shutdown` hooks until all `BeforeShutdown` hooks have completed.

#### 1.0.2

##### Patch Changes

- [`d52d7f9`](https://github.com/backstage/backstage/commit/d52d7f9): Support ISO and ms string forms of durations in config too

### `@backstage/catalog-client` (1.7.1 → [1.9.1](../changelogs/@backstage/catalog-client.md#191))

#### 1.9.0

##### Minor Changes

- [`384e494`](https://github.com/backstage/backstage/commit/384e494): Internal updates to generated code.

##### Patch Changes

- [`d7e7836`](https://github.com/backstage/backstage/commit/d7e7836): Fixed a bug in the `queryEntities` method where errors were not being handled properly.

#### 1.8.0

##### Minor Changes

- [`656d1ef`](https://github.com/backstage/backstage/commit/656d1ef): Internal update to use the updated generated code from `backstage-cli package schema openapi generate --client-package ...`.
- [`31c4fe0`](https://github.com/backstage/backstage/commit/31c4fe0): The client now automatically splits up very large `getEntitiesByRefs` calls into several smaller requests behind the scenes when needed. This ensures that each individual request does not exceed common Express.js request body limits or overload the server.

##### Patch Changes

- [`873f89a`](https://github.com/backstage/backstage/commit/873f89a): Fix for certain filter fields in the `catalogApiMock` being case sensitive.

### `@backstage/config` (1.2.0 → [1.3.2](../changelogs/@backstage/config.md#132))

#### 1.3.0

##### Minor Changes

- [`d52d7f9`](https://github.com/backstage/backstage/commit/d52d7f9): Make `readDurationFromConfig` support both ISO and ms formats as well, to make it easier to enter time as an end user

### `@backstage/integration` (1.15.1 → [1.16.1](../changelogs/@backstage/integration.md#1161))

#### 1.16.1

##### Patch Changes

- [`d2b16db`](https://github.com/backstage/backstage/commit/d2b16db): A new Gerrit helper function (`buildGerritGitilesArchiveUrlFromLocation`) has been added. This
  constructs a Gitiles URL to download an archive. It is similar to the existing
  `buildGerritGitilesArchiveUrl` but also support content referenced by a full commit `SHA`.

  **DEPRECATIONS**: The function `buildGerritGitilesArchiveUrl` is deprecated, use the
  `buildGerritGitilesArchiveUrlFromLocation` function instead.

  **DEPRECATIONS**: The function `parseGerritGitilesUrl` is deprecated, use the
  `parseGitilesUrlRef` function instead.

#### 1.16.0

##### Minor Changes

- [`277092a`](https://github.com/backstage/backstage/commit/277092a): Add the integration for Azure blob storage to read the credentials to access the storage account and provide the default credential provider.

### `@backstage/plugin-catalog` (1.24.0 → [1.26.1](../changelogs/@backstage/plugin-catalog.md#1261))

#### 1.26.1

##### Patch Changes

- [`208e53b`](https://github.com/backstage/backstage/commit/208e53b): Fixing spelling mistake in translation

#### 1.26.0

##### Minor Changes

- [`25beb82`](https://github.com/backstage/backstage/commit/25beb82): Adds an optional columns attribute to HasSubdomainsCardProps and changes its default columns
- [`39f1abc`](https://github.com/backstage/backstage/commit/39f1abc): Consistent title behaviour across CatalogTable, CursorPaginatedCatalogTable, and OffsetPaginatedCatalogTable.
- [`1ffb9f3`](https://github.com/backstage/backstage/commit/1ffb9f3): Update `CatalogTable` title to use properly capitalized Kind facets (e.g. 'Component' instead of 'component')

#### 1.25.0

##### Minor Changes

- [`50df3c8`](https://github.com/backstage/backstage/commit/50df3c8): - Updated EntityLayout component to implement breadcrumb navigation based on the entity relations.

  - Added parentEntityRelations prop to EntityLayoutProps to specify relation types for parent entities.

- [`79e9631`](https://github.com/backstage/backstage/commit/79e9631): Allow `OffsetPaginatedCatalogTable` to configure Table options and `CursorPaginatedCatalogTable` to configure `paginationPosition`.

##### Patch Changes

- [`2a67594`](https://github.com/backstage/backstage/commit/2a67594): Fixed an issue causing the `CatalogIndexPage` to not properly filter results when using offset pagination.

### `@backstage/plugin-catalog-backend` (1.27.1 → [1.30.0](../changelogs/@backstage/plugin-catalog-backend.md#1300))

#### 1.30.0

##### Patch Changes

- [`d9d62ef`](https://github.com/backstage/backstage/commit/d9d62ef): Remove some internal usages of the backend-common package
- [`8379bf4`](https://github.com/backstage/backstage/commit/8379bf4): Remove usages of `PluginDatabaseManager` and `PluginEndpointDiscovery` and replace with their equivalent service types
- [`be0aae7`](https://github.com/backstage/backstage/commit/be0aae7): Improved concurrency of the `entities` endpoint when using the streamed query mode behind the `catalog.disableRelationsCompatibility` flag.
- [`dd515e3`](https://github.com/backstage/backstage/commit/dd515e3): Internalize the deprecated collator types since they were removed from the collator itself during new-backend-system migration.
- [`3d475a0`](https://github.com/backstage/backstage/commit/3d475a0): Updated condition in `resolveCodeOwner` to fix a bug where `normalizeCodeOwner` could potentially be called with an invalid argument causing an error in `CodeOwnersProcessor`

#### 1.29.0

##### Minor Changes

- [`02bd2cb`](https://github.com/backstage/backstage/commit/02bd2cb): Added a new `catalog.disableRelationsCompatibility` configuration option that avoids JSON deserialization and serialization if possible when reading entities. This significantly reduces the memory usage of the catalog, and slightly increases performance, but it removes the backwards compatibility processing that ensures that both `entity.relation[].target` and `entity.relation[].targetRef` are present in returned entities.
- [`c1307b4`](https://github.com/backstage/backstage/commit/c1307b4): Implement `/entities` in terms of `queryEntities` to not run into memory and performance problems on large catalogs
- [`384e494`](https://github.com/backstage/backstage/commit/384e494): Internal updates to generated code.
- [`1d0bc11`](https://github.com/backstage/backstage/commit/1d0bc11): Fetch all facets in a single database query

##### Patch Changes

- [`dfc8b41`](https://github.com/backstage/backstage/commit/dfc8b41): Updated dependency `@opentelemetry/api` to `^1.9.0`.
- [`8013c9c`](https://github.com/backstage/backstage/commit/8013c9c): Perform the by-query count inlined with the main query
- [`feba9ee`](https://github.com/backstage/backstage/commit/feba9ee): Internal refactor of filter parsing logic.
- [`1fdb48e`](https://github.com/backstage/backstage/commit/1fdb48e): Use a faster count method on pg when computing some metrics
- [`e4aab10`](https://github.com/backstage/backstage/commit/e4aab10): Fix a bug where sometimes the `by-query` endpoint could return nulls for entities that were not yet stitched.
- [`f159b25`](https://github.com/backstage/backstage/commit/f159b25): Compute deltas more efficiently, which generally leads to less wasted processing cycles
- [`0c33465`](https://github.com/backstage/backstage/commit/0c33465): Implement `/entities/by-name/:kind/:namespace/:name` using `getEntitiesByRefs`
- [`56511ba`](https://github.com/backstage/backstage/commit/56511ba): Be more aggressive in dequeueing entities for stitching
- [`71152e3`](https://github.com/backstage/backstage/commit/71152e3): Correctly report stitching queue length
- [`5c9cc05`](https://github.com/backstage/backstage/commit/5c9cc05): Use native fetch instead of node-fetch
- [`d93390d`](https://github.com/backstage/backstage/commit/d93390d): When parsing filters, do not make redundant `anyOf` and `allOf` nodes when there's only a single entry within them
- [`3ab57c6`](https://github.com/backstage/backstage/commit/3ab57c6): Support changing location keys on existing entities, in delta mutations
- [`24ecea8`](https://github.com/backstage/backstage/commit/24ecea8): Avoid extra ordering in by-query when the user doesn't ask for it
- [`2924ffe`](https://github.com/backstage/backstage/commit/2924ffe): Compute some metrics using search table facet aggregations instead of reading the full refresh state

#### 1.28.0

##### Minor Changes

- [`39fd704`](https://github.com/backstage/backstage/commit/39fd704): Internal update to use the new generated server types from `backstage-cli package schema openapi generate --server`.
- [`76857da`](https://github.com/backstage/backstage/commit/76857da): Added `entity_ref` column to `final_entities` in order to move `refresh_state` away from the read path
- [`34d4360`](https://github.com/backstage/backstage/commit/34d4360): Drop redundant indices from the database.

  The following redundant indices are removed in this version:

  - `final_entities_entity_id_idx` - overlaps with `final_entities_pkey`
  - `refresh_state_entity_id_idx` - overlaps with `refresh_state_pkey`
  - `refresh_state_entity_ref_idx` - overlaps with `refresh_state_entity_ref_uniq`
  - `search_key_idx` and `search_value_idx` - these were replaced by the composite index `search_key_value_idx` in #22594

  No negative end user impact is expected, but rather that performance should increase due to less index churn.

##### Patch Changes

- [`d52d7f9`](https://github.com/backstage/backstage/commit/d52d7f9): Support ISO and ms string forms of durations in config too
- [`b89834b`](https://github.com/backstage/backstage/commit/b89834b): Fixed an issue where entities would not be marked for restitching if only the target of a relationship changed.
- [`1bf02cc`](https://github.com/backstage/backstage/commit/1bf02cc): Fixed bug when searching an entity by `spec.profile.displayName` in the catalog on the frontend. Text filter fields were not applied correctly to the database query resulting in empty results.
- [`4e58bc7`](https://github.com/backstage/backstage/commit/4e58bc7): Upgrade to uuid v11 internally
- [`5efde17`](https://github.com/backstage/backstage/commit/5efde17): Internal refactor to slightly speed up the processing loop

### `@backstage/plugin-catalog-node` (1.13.1 → [1.15.1](../changelogs/@backstage/plugin-catalog-node.md#1151))

#### 1.15.0

##### Minor Changes

- [`8edc4cd`](https://github.com/backstage/backstage/commit/8edc4cd): Updated the `catalogServiceMock` return type to match both `CatalogService` and `CatalogApi`

#### 1.14.0

##### Minor Changes

- [`bc13b42`](https://github.com/backstage/backstage/commit/bc13b42): The `catalogServiceRef` now has its own accompanying `CatalogService` interface that requires Backstage `credentials` objects to be passed. This new version of the `catalogServiceRef` has been promoted and is now available via the main `@backstage/plugin-catalog-node` entry point.

  The old `catalogServiceRef` with the old `CatalogApi` type is still available from the `/alpha` entry point.

### `@backstage/plugin-catalog-react` (1.14.0 → [1.15.1](../changelogs/@backstage/plugin-catalog-react.md#1151))

#### 1.15.1

##### Patch Changes

- [`aaf6508`](https://github.com/backstage/backstage/commit/aaf6508): Creates new CatalogAutocomplete component in catalog-react that aligns with Select component UI for consistent a dropdown UI for all catalog filters.
- [`cbfc0a4`](https://github.com/backstage/backstage/commit/cbfc0a4): Fixed an issue where the `<EntityListProvider />` in `offset` mode would unnecessarily re-fetch data when the filter didn't change, causing a flicker effect.

#### 1.15.0

##### Minor Changes

- [`1ffb9f3`](https://github.com/backstage/backstage/commit/1ffb9f3): Update `EntityKindFilter` to include a `label` field with the properly capitalized Kind facet string
- [`ceaf602`](https://github.com/backstage/backstage/commit/ceaf602): Sort EntityTypePicker by default

##### Patch Changes

- [`d97a2cd`](https://github.com/backstage/backstage/commit/d97a2cd): Fixed an issue causing the `EntityOwnerPicker` to reset scrolling when more elements are loaded.
- [`c36bd35`](https://github.com/backstage/backstage/commit/c36bd35): Internal refactor to break potential circular imports
- [`f18c67d`](https://github.com/backstage/backstage/commit/f18c67d): Fix catalog filtering to allow searching entities by display name
- [`95092a6`](https://github.com/backstage/backstage/commit/95092a6): Fixed an issue where `<CatalogFilterLayout.Filters />` would re-render its children on page load for smaller screens, potentially leading to unnecessary additional backend requests.
- [`4a43398`](https://github.com/backstage/backstage/commit/4a43398): Fixed an issue where the `EntityOwnerPicker` component failed to load when the `mode` prop was set to `owners-only`. In this mode, the `EntityOwnerPicker` does not load details about the owners, such as `displayName` or `title`. To display these details, use `mode=all` instead.

#### 1.14.1

##### Patch Changes

- [`9cc82c0`](https://github.com/backstage/backstage/commit/9cc82c0): Fixed bug in `EntityDisplayName` where text was overflowing.
- [`6fcbb3b`](https://github.com/backstage/backstage/commit/6fcbb3b): Ensure EntityDisplayName component link receives underline on hover.
- [`9670906`](https://github.com/backstage/backstage/commit/9670906): Improve UI consistency of default catalog filters

### `@backstage/plugin-scaffolder` (1.26.2 → [1.27.5](../changelogs/@backstage/plugin-scaffolder.md#1275))

#### 1.27.4

##### Patch Changes

- [`d8f9079`](https://github.com/backstage/backstage/commit/d8f9079): Updated dependency `@rjsf/utils` to `5.23.2`.
  Updated dependency `@rjsf/core` to `5.23.2`.
  Updated dependency `@rjsf/material-ui` to `5.23.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.23.2`.
- [`4756287`](https://github.com/backstage/backstage/commit/4756287): Added support for `FormDecoratorBlueprint` to create form decorators in the Scaffolder plugin
- [`3f09ef4`](https://github.com/backstage/backstage/commit/3f09ef4): Fix issue with `secrets` not being forwarded properly to the backend when creating a task

#### 1.27.2

##### Patch Changes

- [`3c62a50`](https://github.com/backstage/backstage/commit/3c62a50): Experimental support for `formDecorators` to enable secret collection and mutations to the parameters for scaffolder tasks
- [`c4ffd13`](https://github.com/backstage/backstage/commit/c4ffd13): Added the autocomplete feature to GitlabRepoUrlPicker
- [`9951ba4`](https://github.com/backstage/backstage/commit/9951ba4): Updated dependency `@rjsf/utils` to `5.23.1`.
  Updated dependency `@rjsf/core` to `5.23.1`.
  Updated dependency `@rjsf/material-ui` to `5.23.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.23.1`.
- [`184161f`](https://github.com/backstage/backstage/commit/184161f): Scaffolder field extensions registered with `FormFieldBlueprint` are now collected in the `useCustomFieldExtensions` hook, enabling them for use in the scaffolder.

#### 1.27.0

##### Minor Changes

- [`f61d4cc`](https://github.com/backstage/backstage/commit/f61d4cc): Add scaffolder permission `scaffolder.template.management` for accessing the template management features
- [`69fb6e7`](https://github.com/backstage/backstage/commit/69fb6e7): Fix `contextMenu` not being disabled bug in new scaffolder pages

##### Patch Changes

- [`99471cd`](https://github.com/backstage/backstage/commit/99471cd): fix(scaffolder): use `onInputChange` in `RepoUrlPicker` to fix issue with the value not updating properly
- [`8e4bed4`](https://github.com/backstage/backstage/commit/8e4bed4): Updated dependency `idb-keyval` to `5.1.5`.
- [`7669af3`](https://github.com/backstage/backstage/commit/7669af3): Revert the change of the option label for `EntityPicker`

### `@backstage/plugin-scaffolder-react` (1.13.2 → [1.14.4](../changelogs/@backstage/plugin-scaffolder-react.md#1144))

#### 1.14.3

##### Patch Changes

- [`91bb99a`](https://github.com/backstage/backstage/commit/91bb99a): Fix field extension validation not working when field is in dependencies in an array field
- [`d8f9079`](https://github.com/backstage/backstage/commit/d8f9079): Updated dependency `@rjsf/utils` to `5.23.2`.
  Updated dependency `@rjsf/core` to `5.23.2`.
  Updated dependency `@rjsf/material-ui` to `5.23.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.23.2`.
- [`37421bc`](https://github.com/backstage/backstage/commit/37421bc): Fixed scaffolder form fields not resolving correctly in the `useCustomFieldExtensions` hook.
- [`4756287`](https://github.com/backstage/backstage/commit/4756287): Added support for `FormDecoratorBlueprint` to create form decorators in the Scaffolder plugin

#### 1.14.2

##### Patch Changes

- [`3c62a50`](https://github.com/backstage/backstage/commit/3c62a50): Experimental support for `formDecorators` to enable secret collection and mutations to the parameters for scaffolder tasks
- [`c4ffd13`](https://github.com/backstage/backstage/commit/c4ffd13): Added the autocomplete feature to GitlabRepoUrlPicker
- [`28e286f`](https://github.com/backstage/backstage/commit/28e286f): Added test coverage selectors to TemplateCard and its sub-components
- [`c846d76`](https://github.com/backstage/backstage/commit/c846d76): Updated dependency `flatted` to `3.3.2`.
- [`9951ba4`](https://github.com/backstage/backstage/commit/9951ba4): Updated dependency `@rjsf/utils` to `5.23.1`.
  Updated dependency `@rjsf/core` to `5.23.1`.
  Updated dependency `@rjsf/material-ui` to `5.23.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.23.1`.
- [`97a13ad`](https://github.com/backstage/backstage/commit/97a13ad): Improve performance of typing into scaffolder secret widget
- [`184161f`](https://github.com/backstage/backstage/commit/184161f): Scaffolder field extensions registered with `FormFieldBlueprint` are now collected in the `useCustomFieldExtensions` hook, enabling them for use in the scaffolder.
- [`b21a5ae`](https://github.com/backstage/backstage/commit/b21a5ae): Open links in the scaffolder entity and step descriptions in a new tab, to ensure consistency and improve user experience

#### 1.14.0

##### Minor Changes

- [`69fb6e7`](https://github.com/backstage/backstage/commit/69fb6e7): Fix `contextMenu` not being disabled bug in new scaffolder pages

##### Patch Changes

- [`8b5ff7e`](https://github.com/backstage/backstage/commit/8b5ff7e): Fix issue with form state not refreshing when updating
- [`ade301c`](https://github.com/backstage/backstage/commit/ade301c): Fix issue with `Stepper` and trying to trim additional properties. This is now all behind `liveOmit` and `omitExtraData` instead.
- [`f61d4cc`](https://github.com/backstage/backstage/commit/f61d4cc): Add scaffolder permission `scaffolder.template.management` for accessing the template management features

### `@backstage/plugin-search-backend` (1.6.1 → [1.8.1](../changelogs/@backstage/plugin-search-backend.md#181))

#### 1.8.0

##### Minor Changes

- [`384e494`](https://github.com/backstage/backstage/commit/384e494): Internal updates to generated code.

#### 1.7.0

##### Minor Changes

- [`39fd704`](https://github.com/backstage/backstage/commit/39fd704): Internal update to use the new generated server types from `backstage-cli package schema openapi generate --server`.

### `@backstage/plugin-techdocs` (1.11.0 → [1.12.2](../changelogs/@backstage/plugin-techdocs.md#1122))

#### 1.12.1

##### Patch Changes

- [`3710b35`](https://github.com/backstage/backstage/commit/3710b35): Allow passing down `withSearch` prop to `EntityTechdocsContent` component since it was `true` by default, now user can use the `EntityTechdocsContent` component _without_ showing the search field on top of the content.

#### 1.12.0

##### Minor Changes

- [`e153ca6`](https://github.com/backstage/backstage/commit/e153ca6): Add pagination support to TechDocs Index Page and make it the default

##### Patch Changes

- [`7d8777d`](https://github.com/backstage/backstage/commit/7d8777d): Added support for the Search bar in docs residing in the entity page tab, and not only the global "/docs" page.

#### 1.11.1

##### Patch Changes

- [`37a7810`](https://github.com/backstage/backstage/commit/37a7810): Fixed an issue where `<TechDocsReaderPageContent />` would re-render infinitely under certain conditions.
- [`e937ae7`](https://github.com/backstage/backstage/commit/e937ae7): Fix an issue with index page of documentation site being re-rendered.
- [`90246a9`](https://github.com/backstage/backstage/commit/90246a9): Fix techdocs config schema for custom elements sanitizer
- [`605bdc0`](https://github.com/backstage/backstage/commit/605bdc0): Avoid page re-rendering when clicking on anchor links in the same documentation page.
- [`4f0cb89`](https://github.com/backstage/backstage/commit/4f0cb89): Added DomPurify sanitizer configuration for custom elements implementing RFC https://github.com/backstage/backstage/issues/26988.
  See https://backstage.io/docs/features/techdocs/how-to-guides#how-to-enable-custom-elements-in-techdocs for how to enable it in the configuration.
- [`f246178`](https://github.com/backstage/backstage/commit/f246178): Removed `canvas` dev dependency.
- [`4a2f73a`](https://github.com/backstage/backstage/commit/4a2f73a): Fix an issue that caused the current documentation page to be re-rendered when navigating to
  another one.

### `@backstage/types` (1.1.1 → [1.2.1](../changelogs/@backstage/types.md#121))

#### 1.2.1

##### Patch Changes

- [`b40eb41`](https://github.com/backstage/backstage/commit/b40eb41): Move `Expand` and `ExpandRecursive` to `@backstage/types`

#### 1.2.0

##### Minor Changes

- [`c5e39e7`](https://github.com/backstage/backstage/commit/c5e39e7): Introduce `createDeferred` and `DeferredPromise`.

## Other patch version bumps

### `@backstage/config-loader` (1.9.1 → [1.9.5](../changelogs/@backstage/config-loader.md#195))

#### 1.9.5

##### Patch Changes

- [`8ecf8cb`](https://github.com/backstage/backstage/commit/8ecf8cb): Exclude `@backstage/backend-common` from schema collection if `@backstage/backend-defaults` is present

#### 1.9.3

##### Patch Changes

- [`5c9cc05`](https://github.com/backstage/backstage/commit/5c9cc05): Use native fetch instead of node-fetch

#### 1.9.2

##### Patch Changes

- [`c5e39e7`](https://github.com/backstage/backstage/commit/c5e39e7): Internal refactor to use the deferred from the types package

### `@backstage/core-app-api` (1.15.1 → [1.15.4](../changelogs/@backstage/core-app-api.md#1154))

#### 1.15.3

##### Patch Changes

- [`e5fa018`](https://github.com/backstage/backstage/commit/e5fa018): The OAuth 2 client implementations will now attempt to refresh the session when the existing session doesn't have the required scopes. The previous behavior was to only try to refresh the session of it was missing, and otherwise directly request a new session. This fixes an issue where some auth providers will not return access tokens with certain scopes unless explicitly requested, leading to an auth popup even if the underlying session already had been granted the requested scopes.
- [`2830689`](https://github.com/backstage/backstage/commit/2830689): Decrease OAuth2 token refresh grace period

#### 1.15.2

##### Patch Changes

- [`44b82da`](https://github.com/backstage/backstage/commit/44b82da): The default config loader no longer requires `process.env.APP_CONFIG` to be set, allowing config to be read from other sources instead.

### `@backstage/core-plugin-api` (1.10.0 → [1.10.3](../changelogs/@backstage/core-plugin-api.md#1103))

#### 1.10.3

##### Patch Changes

- [`b40eb41`](https://github.com/backstage/backstage/commit/b40eb41): Move `Expand` and `ExpandRecursive` to `@backstage/types`

### `@backstage/errors` (1.2.4 → [1.2.7](../changelogs/@backstage/errors.md#127))

#### 1.2.6

##### Patch Changes

- [`1d4b5b9`](https://github.com/backstage/backstage/commit/1d4b5b9): Trim `error.cause.stack` in addition to `error.stack` when trimming stack traces from serialized errors.

### `@backstage/plugin-scaffolder-common` (1.5.6 → [1.5.9](../changelogs/@backstage/plugin-scaffolder-common.md#159))

#### 1.5.8

##### Patch Changes

- [`3c62a50`](https://github.com/backstage/backstage/commit/3c62a50): Experimental support for `formDecorators` to enable secret collection and mutations to the parameters for scaffolder tasks

#### 1.5.7

##### Patch Changes

- [`f61d4cc`](https://github.com/backstage/backstage/commit/f61d4cc): Add scaffolder permission `scaffolder.template.management` for accessing the template management features

### `@backstage/plugin-search` (1.4.18 → [1.4.22](../changelogs/@backstage/plugin-search.md#1422))

#### 1.4.21

##### Patch Changes

- [`d311c84`](https://github.com/backstage/backstage/commit/d311c84): Use Select from core-components and update Lifecycle filter to use Select instead checkboxes.

#### 1.4.19

##### Patch Changes

- [`a4ccc82`](https://github.com/backstage/backstage/commit/a4ccc82): Removes the card UI from the search results type filter for a cleaner UI consistent with other filters

### `@backstage/plugin-search-backend-module-elasticsearch` (1.6.1 → [1.6.4](../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#164))

#### 1.6.3

##### Patch Changes

- [`991c9fe`](https://github.com/backstage/backstage/commit/991c9fe): Update the ElasticSearchSearchEngine translator to handle phrase searches.

#### 1.6.2

##### Patch Changes

- [`dae59c1`](https://github.com/backstage/backstage/commit/dae59c1): Updated dependency `@short.io/opensearch-mock` to `^0.4.0`.
- [`4e58bc7`](https://github.com/backstage/backstage/commit/4e58bc7): Upgrade to uuid v11 internally

### `@backstage/plugin-search-backend-node` (1.3.4 → [1.3.7](../changelogs/@backstage/plugin-search-backend-node.md#137))

#### 1.3.6

##### Patch Changes

- [`5ae8a2c`](https://github.com/backstage/backstage/commit/5ae8a2c): Removed unnecessary dependency on `@backstage/backend-defaults`.

#### 1.3.5

##### Patch Changes

- [`4e58bc7`](https://github.com/backstage/backstage/commit/4e58bc7): Upgrade to uuid v11 internally

### `@backstage/plugin-search-react` (1.8.1 → [1.8.5](../changelogs/@backstage/plugin-search-react.md#185))

#### 1.8.4

##### Patch Changes

- [`d311c84`](https://github.com/backstage/backstage/commit/d311c84): Use Select from core-components and update Lifecycle filter to use Select instead checkboxes.

### `@backstage/plugin-techdocs-backend` (1.11.1 → [1.11.5](../changelogs/@backstage/plugin-techdocs-backend.md#1115))

#### 1.11.5

##### Patch Changes

- [`29a4aa8`](https://github.com/backstage/backstage/commit/29a4aa8): fix(config): add missing parameters in config schema

#### 1.11.4

##### Patch Changes

- [`5c9cc05`](https://github.com/backstage/backstage/commit/5c9cc05): Use native fetch instead of node-fetch

### `@backstage/plugin-techdocs-module-addons-contrib` (1.1.16 → [1.1.20](../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1120))

#### 1.1.20

##### Patch Changes

- [`b664b2a`](https://github.com/backstage/backstage/commit/b664b2a): Internal refactor for safer handling of possible null value.

### `@backstage/plugin-techdocs-node` (1.12.12 → [1.12.16](../changelogs/@backstage/plugin-techdocs-node.md#11216))

#### 1.12.15

##### Patch Changes

- [`5f04976`](https://github.com/backstage/backstage/commit/5f04976): Fixed a bug that caused missing code in published packages.

### `@backstage/plugin-techdocs-react` (1.2.9 → [1.2.13](../changelogs/@backstage/plugin-techdocs-react.md#1213))

#### 1.2.10

##### Patch Changes

- [`4a2f73a`](https://github.com/backstage/backstage/commit/4a2f73a): Fix an issue that caused the current documentation page to be re-rendered when navigating to
  another one.

### `@techdocs/cli` (1.8.21 → [1.8.25](../changelogs/@techdocs/cli.md#1825))

#### 1.8.22

##### Patch Changes

- [`702f41d`](https://github.com/backstage/backstage/commit/702f41d): Bumped dev dependencies `@types/node`

## Excluded dependency updates

- `@backstage/app-defaults` (1.5.12 → [1.5.16](../changelogs/@backstage/app-defaults.md#1516))
- `@backstage/catalog-model` (1.7.0 → [1.7.3](../changelogs/@backstage/catalog-model.md#173))
- `@backstage/dev-utils` (1.1.2 → [1.1.6](../changelogs/@backstage/dev-utils.md#116))
- `@backstage/frontend-app-api` (0.10.0 → [0.10.4](../changelogs/@backstage/frontend-app-api.md#0104))
- `@backstage/frontend-test-utils` (0.2.1 → [0.2.5](../changelogs/@backstage/frontend-test-utils.md#025))
- `@backstage/integration-react` (1.2.0 → [1.2.3](../changelogs/@backstage/integration-react.md#123))
- `@backstage/plugin-app-node` (0.1.26 → [0.1.29](../changelogs/@backstage/plugin-app-node.md#0129))
- `@backstage/plugin-auth-backend-module-atlassian-provider` (0.3.1 → [0.3.4](../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#034))
- `@backstage/plugin-auth-backend-module-auth0-provider` (0.1.1 → [0.1.4](../changelogs/@backstage/plugin-auth-backend-module-auth0-provider.md#014))
- `@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.2.1 → [0.2.4](../changelogs/@backstage/plugin-auth-backend-module-azure-easyauth-provider.md#024))
- `@backstage/plugin-auth-backend-module-bitbucket-provider` (0.2.1 → [0.2.4](../changelogs/@backstage/plugin-auth-backend-module-bitbucket-provider.md#024))
- `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.3.1 → [0.3.4](../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#034))
- `@backstage/plugin-auth-backend-module-github-provider` (0.2.1 → [0.2.4](../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#024))
- `@backstage/plugin-auth-backend-module-gitlab-provider` (0.2.1 → [0.2.4](../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#024))
- `@backstage/plugin-auth-backend-module-oauth2-provider` (0.3.1 → [0.3.4](../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#034))
- `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.2.1 → [0.2.4](../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#024))
- `@backstage/plugin-auth-backend-module-okta-provider` (0.1.1 → [0.1.4](../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#014))
- `@backstage/plugin-auth-backend-module-onelogin-provider` (0.2.1 → [0.2.4](../changelogs/@backstage/plugin-auth-backend-module-onelogin-provider.md#024))
- `@backstage/plugin-auth-backend-module-pinniped-provider` (0.2.1 → [0.2.4](../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#024))
- `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.4.0 → [0.4.3](../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#043))
- `@backstage/plugin-auth-react` (0.1.7 → [0.1.11](../changelogs/@backstage/plugin-auth-react.md#0111))
- `@backstage/plugin-catalog-backend-module-gcp` (0.3.1 → [0.3.4](../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#034))
- `@backstage/plugin-catalog-backend-module-github-org` (0.3.3 → [0.3.6](../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#036))
- `@backstage/plugin-catalog-backend-module-logs` (0.1.3 → [0.1.6](../changelogs/@backstage/plugin-catalog-backend-module-logs.md#016))
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.2.1 → [0.2.4](../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#024))
- `@backstage/plugin-catalog-backend-module-unprocessed` (0.5.1 → [0.5.4](../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#054))
- `@backstage/plugin-catalog-common` (1.1.0 → [1.1.3](../changelogs/@backstage/plugin-catalog-common.md#113))
- `@backstage/plugin-catalog-graph` (0.4.11 → [0.4.15](../changelogs/@backstage/plugin-catalog-graph.md#0415))
- `@backstage/plugin-catalog-unprocessed-entities` (0.2.9 → [0.2.13](../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#0213))
- `@backstage/plugin-catalog-unprocessed-entities-common` (0.0.4 → [0.0.7](../changelogs/@backstage/plugin-catalog-unprocessed-entities-common.md#007))
- `@backstage/plugin-devtools` (0.1.19 → [0.1.23](../changelogs/@backstage/plugin-devtools.md#0123))
- `@backstage/plugin-devtools-common` (0.1.12 → [0.1.15](../changelogs/@backstage/plugin-devtools-common.md#0115))
- `@backstage/plugin-events-backend-module-azure` (0.2.13 → [0.2.16](../changelogs/@backstage/plugin-events-backend-module-azure.md#0216))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.13 → [0.2.16](../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0216))
- `@backstage/plugin-events-backend-module-gerrit` (0.2.13 → [0.2.16](../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0216))
- `@backstage/plugin-events-backend-module-gitlab` (0.2.13 → [0.2.16](../changelogs/@backstage/plugin-events-backend-module-gitlab.md#0216))
- `@backstage/plugin-events-backend-test-utils` (0.1.37 → [0.1.40](../changelogs/@backstage/plugin-events-backend-test-utils.md#0140))
- `@backstage/plugin-org-react` (0.1.30 → [0.1.34](../changelogs/@backstage/plugin-org-react.md#0134))
- `@backstage/plugin-permission-backend-module-allow-all-policy` (0.2.1 → [0.2.4](../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#024))
- `@backstage/plugin-permission-react` (0.4.27 → [0.4.30](../changelogs/@backstage/plugin-permission-react.md#0430))
- `@backstage/plugin-scaffolder-backend-module-azure` (0.2.2 → [0.2.5](../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#025))
- `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.3 → [0.3.6](../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#036))
- `@backstage/plugin-scaffolder-backend-module-gcp` (0.2.2 → [0.2.5](../changelogs/@backstage/plugin-scaffolder-backend-module-gcp.md#025))
- `@backstage/plugin-scaffolder-backend-module-notifications` (0.1.3 → [0.1.6](../changelogs/@backstage/plugin-scaffolder-backend-module-notifications.md#016))
- `@backstage/plugin-scaffolder-backend-module-rails` (0.5.2 → [0.5.5](../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#055))
- `@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.3 → [0.4.6](../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#046))
- `@backstage/plugin-scaffolder-node-test-utils` (0.1.15 → [0.1.18](../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#0118))
- `@backstage/plugin-search-common` (1.2.14 → [1.2.17](../changelogs/@backstage/plugin-search-common.md#1217))
- `@backstage/plugin-signals-react` (0.0.6 → [0.0.9](../changelogs/@backstage/plugin-signals-react.md#009))
- `@backstage/plugin-techdocs-addons-test-utils` (1.0.40 → [1.0.44](../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#1044))
- `@backstage/plugin-user-settings` (0.8.14 → [0.8.18](../changelogs/@backstage/plugin-user-settings.md#0818))
- `@backstage/plugin-user-settings-backend` (0.2.26 → [0.2.29](../changelogs/@backstage/plugin-user-settings-backend.md#0229))
- `@backstage/test-utils` (1.7.0 → [1.7.4](../changelogs/@backstage/test-utils.md#174))
