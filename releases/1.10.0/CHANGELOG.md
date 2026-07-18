# Backstage Release 1.10.0 changelog

Changes between 1.9.1 and 1.10.0 — 169 changed and 2 added packages.

## Summary

- [Newly added packages](#newly-added-packages): 2 packages
- [Breaking changes](#breaking-changes): 3 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 2 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 1 package
- [Other minor version bumps](#other-minor-version-bumps): 9 packages
- [Other patch version bumps](#other-patch-version-bumps): 69 packages
- [Excluded dependency updates](#excluded-dependency-updates): 85 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/plugin-scaffolder-backend-module-sentry` (new, 0.1.0)](#backstageplugin-scaffolder-backend-module-sentry-new-010)
  - [`@backstage/plugin-scaffolder-react` (new, 1.0.0)](#backstageplugin-scaffolder-react-new-100)
- [Breaking changes](#breaking-changes)
  - [`@backstage/backend-app-api` (0.2.4 → 0.3.0)](#backstagebackend-app-api-024--030)
  - [`@backstage/backend-common` (0.17.0 → 0.18.0)](#backstagebackend-common-0170--0180)
  - [`@backstage/plugin-adr` (0.2.5 → 0.3.0)](#backstageplugin-adr-025--030)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/backend-plugin-api` (0.2.0 → 0.3.0)](#backstagebackend-plugin-api-020--030)
  - [`@backstage/plugin-tech-radar` (0.5.20 → 0.6.0)](#backstageplugin-tech-radar-0520--060)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-explore-backend` (0.0.1 → 0.0.2)](#backstageplugin-explore-backend-001--002)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/app-defaults` (1.0.10 → 1.1.0)](#backstageapp-defaults-1010--110)
  - [`@backstage/catalog-client` (1.2.0 → 1.3.0)](#backstagecatalog-client-120--130)
  - [`@backstage/core-app-api` (1.3.0 → 1.4.0)](#backstagecore-app-api-130--140)
  - [`@backstage/core-plugin-api` (1.2.0 → 1.3.0)](#backstagecore-plugin-api-120--130)
  - [`@backstage/plugin-catalog-backend` (1.6.0 → 1.7.0)](#backstageplugin-catalog-backend-160--170)
  - [`@backstage/plugin-scaffolder` (1.9.1 → 1.10.0)](#backstageplugin-scaffolder-191--1100)
  - [`@backstage/plugin-scaffolder-backend` (1.9.0 → 1.10.0)](#backstageplugin-scaffolder-backend-190--1100)
  - [`@backstage/plugin-search-react` (1.3.1 → 1.4.0)](#backstageplugin-search-react-131--140)
  - [`@techdocs/cli` (1.2.4 → 1.3.0)](#techdocscli-124--130)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-defaults` (0.1.4 → 0.1.5)](#backstagebackend-defaults-014--015)
  - [`@backstage/backend-tasks` (0.4.0 → 0.4.1)](#backstagebackend-tasks-040--041)
  - [`@backstage/backend-test-utils` (0.1.31 → 0.1.32)](#backstagebackend-test-utils-0131--0132)
  - [`@backstage/catalog-model` (1.1.4 → 1.1.5)](#backstagecatalog-model-114--115)
  - [`@backstage/cli` (0.22.0 → 0.22.1)](#backstagecli-0220--0221)
  - [`@backstage/config` (1.0.5 → 1.0.6)](#backstageconfig-105--106)
  - [`@backstage/core-components` (0.12.2 → 0.12.3)](#backstagecore-components-0122--0123)
  - [`@backstage/create-app` (0.4.35 → 0.4.36)](#backstagecreate-app-0435--0436)
  - [`@backstage/integration-aws-node` (0.1.0 → 0.1.1)](#backstageintegration-aws-node-010--011)
  - [`@backstage/plugin-adr-backend` (0.2.4 → 0.2.5)](#backstageplugin-adr-backend-024--025)
  - [`@backstage/plugin-api-docs` (0.8.13 → 0.8.14)](#backstageplugin-api-docs-0813--0814)
  - [`@backstage/plugin-apollo-explorer` (0.1.6 → 0.1.7)](#backstageplugin-apollo-explorer-016--017)
  - [`@backstage/plugin-app-backend` (0.3.39 → 0.3.40)](#backstageplugin-app-backend-0339--0340)
  - [`@backstage/plugin-azure-devops` (0.2.4 → 0.2.5)](#backstageplugin-azure-devops-024--025)
  - [`@backstage/plugin-azure-sites` (0.1.2 → 0.1.3)](#backstageplugin-azure-sites-012--013)
  - [`@backstage/plugin-bazaar` (0.2.2 → 0.2.3)](#backstageplugin-bazaar-022--023)
  - [`@backstage/plugin-bitbucket-cloud-common` (0.2.2 → 0.2.3)](#backstageplugin-bitbucket-cloud-common-022--023)
  - [`@backstage/plugin-catalog` (1.7.1 → 1.7.2)](#backstageplugin-catalog-171--172)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.1.12 → 0.1.13)](#backstageplugin-catalog-backend-module-aws-0112--0113)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.1.10 → 0.1.11)](#backstageplugin-catalog-backend-module-azure-0110--0111)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.6 → 0.1.7)](#backstageplugin-catalog-backend-module-bitbucket-cloud-016--017)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.4 → 0.1.5)](#backstageplugin-catalog-backend-module-bitbucket-server-014--015)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (0.1.7 → 0.1.8)](#backstageplugin-catalog-backend-module-gerrit-017--018)
  - [`@backstage/plugin-catalog-backend-module-github` (0.2.2 → 0.2.3)](#backstageplugin-catalog-backend-module-github-022--023)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.1.10 → 0.1.11)](#backstageplugin-catalog-backend-module-gitlab-0110--0111)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.1.0 → 0.1.1)](#backstageplugin-catalog-backend-module-incremental-ingestion-010--011)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.5.6 → 0.5.7)](#backstageplugin-catalog-backend-module-ldap-056--057)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.4.5 → 0.4.6)](#backstageplugin-catalog-backend-module-msgraph-045--046)
  - [`@backstage/plugin-catalog-backend-module-openapi` (0.1.5 → 0.1.6)](#backstageplugin-catalog-backend-module-openapi-015--016)
  - [`@backstage/plugin-catalog-graph` (0.2.25 → 0.2.26)](#backstageplugin-catalog-graph-0225--0226)
  - [`@backstage/plugin-catalog-node` (1.3.0 → 1.3.1)](#backstageplugin-catalog-node-130--131)
  - [`@backstage/plugin-catalog-react` (1.2.3 → 1.2.4)](#backstageplugin-catalog-react-123--124)
  - [`@backstage/plugin-cicd-statistics` (0.1.15 → 0.1.16)](#backstageplugin-cicd-statistics-0115--0116)
  - [`@backstage/plugin-cloudbuild` (0.3.13 → 0.3.14)](#backstageplugin-cloudbuild-0313--0314)
  - [`@backstage/plugin-code-coverage-backend` (0.2.5 → 0.2.6)](#backstageplugin-code-coverage-backend-025--026)
  - [`@backstage/plugin-cost-insights` (0.12.2 → 0.12.3)](#backstageplugin-cost-insights-0122--0123)
  - [`@backstage/plugin-events-backend` (0.2.0 → 0.2.1)](#backstageplugin-events-backend-020--021)
  - [`@backstage/plugin-events-backend-module-aws-sqs` (0.1.1 → 0.1.2)](#backstageplugin-events-backend-module-aws-sqs-011--012)
  - [`@backstage/plugin-explore` (0.3.44 → 0.3.45)](#backstageplugin-explore-0344--0345)
  - [`@backstage/plugin-firehydrant` (0.1.30 → 0.1.31)](#backstageplugin-firehydrant-0130--0131)
  - [`@backstage/plugin-fossa` (0.2.45 → 0.2.46)](#backstageplugin-fossa-0245--0246)
  - [`@backstage/plugin-gcp-projects` (0.3.32 → 0.3.33)](#backstageplugin-gcp-projects-0332--0333)
  - [`@backstage/plugin-git-release-manager` (0.3.26 → 0.3.27)](#backstageplugin-git-release-manager-0326--0327)
  - [`@backstage/plugin-github-actions` (0.5.13 → 0.5.14)](#backstageplugin-github-actions-0513--0514)
  - [`@backstage/plugin-home` (0.4.29 → 0.4.30)](#backstageplugin-home-0429--0430)
  - [`@backstage/plugin-ilert` (0.2.2 → 0.2.3)](#backstageplugin-ilert-022--023)
  - [`@backstage/plugin-jenkins` (0.7.12 → 0.7.13)](#backstageplugin-jenkins-0712--0713)
  - [`@backstage/plugin-kubernetes` (0.7.6 → 0.7.7)](#backstageplugin-kubernetes-076--077)
  - [`@backstage/plugin-kubernetes-backend` (0.9.0 → 0.9.1)](#backstageplugin-kubernetes-backend-090--091)
  - [`@backstage/plugin-lighthouse` (0.3.13 → 0.3.14)](#backstageplugin-lighthouse-0313--0314)
  - [`@backstage/plugin-permission-react` (0.4.8 → 0.4.9)](#backstageplugin-permission-react-048--049)
  - [`@backstage/plugin-playlist` (0.1.4 → 0.1.5)](#backstageplugin-playlist-014--015)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.14 → 0.2.15)](#backstageplugin-scaffolder-backend-module-cookiecutter-0214--0215)
  - [`@backstage/plugin-scaffolder-backend-module-rails` (0.4.7 → 0.4.8)](#backstageplugin-scaffolder-backend-module-rails-047--048)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.12 → 0.2.13)](#backstageplugin-scaffolder-backend-module-yeoman-0212--0213)
  - [`@backstage/plugin-scaffolder-common` (1.2.3 → 1.2.4)](#backstageplugin-scaffolder-common-123--124)
  - [`@backstage/plugin-search` (1.0.6 → 1.0.7)](#backstageplugin-search-106--107)
  - [`@backstage/plugin-search-backend` (1.2.0 → 1.2.1)](#backstageplugin-search-backend-120--121)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.1.0 → 1.1.1)](#backstageplugin-search-backend-module-elasticsearch-110--111)
  - [`@backstage/plugin-search-backend-node` (1.1.0 → 1.1.1)](#backstageplugin-search-backend-node-110--111)
  - [`@backstage/plugin-sonarqube` (0.6.1 → 0.6.2)](#backstageplugin-sonarqube-061--062)
  - [`@backstage/plugin-stack-overflow` (0.1.9 → 0.1.10)](#backstageplugin-stack-overflow-019--0110)
  - [`@backstage/plugin-stack-overflow-backend` (0.1.8 → 0.1.9)](#backstageplugin-stack-overflow-backend-018--019)
  - [`@backstage/plugin-tech-insights-backend` (0.5.5 → 0.5.6)](#backstageplugin-tech-insights-backend-055--056)
  - [`@backstage/plugin-techdocs` (1.4.2 → 1.4.3)](#backstageplugin-techdocs-142--143)
  - [`@backstage/plugin-techdocs-react` (1.1.1 → 1.1.2)](#backstageplugin-techdocs-react-111--112)
  - [`@backstage/plugin-user-settings` (0.6.1 → 0.6.2)](#backstageplugin-user-settings-061--062)
  - [`@backstage/plugin-xcmetrics` (0.2.33 → 0.2.34)](#backstageplugin-xcmetrics-0233--0234)
  - [`@backstage/repo-tools` (0.1.0 → 0.1.1)](#backstagerepo-tools-010--011)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/plugin-scaffolder-backend-module-sentry` (new, [0.1.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#010))

#### 0.1.0

##### Minor Changes

- [`66ff367af6`](https://github.com/backstage/backstage/commit/66ff367af6): Add Sentry "Create Project" Scaffolder as new package

### `@backstage/plugin-scaffolder-react` (new, [1.0.0](../../changelogs/@backstage/plugin-scaffolder-react.md#100))

#### 1.0.0

##### Major Changes

- [`b4955ed7b9`](https://github.com/backstage/backstage/commit/b4955ed7b9): Re-home some of the common types, components, hooks and `scaffolderApiRef` for the `@backstage/plugin-scaffolder` to this package for easy re-use across things that want to interact with the `scaffolder`.

## Breaking changes

### `@backstage/backend-app-api` (0.2.4 → [0.3.0](../../changelogs/@backstage/backend-app-api.md#030))

#### 0.3.0

##### Minor Changes

- [`02b119ff93`](https://github.com/backstage/backstage/commit/02b119ff93): **BREAKING**: The `httpRouterFactory` now accepts a `getPath` option rather than `indexPlugin`. To set up custom index path, configure the new `rootHttpRouterFactory` with a custom `indexPath` instead.

  Added an implementation for the new `rootHttpRouterServiceRef`.

##### Patch Changes

- [`ecc6bfe4c9`](https://github.com/backstage/backstage/commit/ecc6bfe4c9): Use new `ServiceFactoryOrFunction` type.
- [`b99c030f1b`](https://github.com/backstage/backstage/commit/b99c030f1b): Moved over implementation of the root HTTP service from `@backstage/backend-common`, and replaced the `middleware` option with a `configure` callback option.
- [`170282ece6`](https://github.com/backstage/backstage/commit/170282ece6): Fixed a bug in the default token manager factory where it created multiple incompatible instances.
- [`843a0a158c`](https://github.com/backstage/backstage/commit/843a0a158c): Added service factory for the new core identity service.
- [`150a7dd790`](https://github.com/backstage/backstage/commit/150a7dd790): An error will now be thrown if attempting to override the plugin metadata service.
- [`483e907eaf`](https://github.com/backstage/backstage/commit/483e907eaf): Internal updates of `createServiceFactory` from `@backstage/backend-plugin-api`.
- [`015a6dced6`](https://github.com/backstage/backstage/commit/015a6dced6): The `createSpecializedBackend` function will now throw an error if duplicate service implementations are provided.
- [`e3fca10038`](https://github.com/backstage/backstage/commit/e3fca10038): Tweaked the plugin logger to use `plugin` as the label for the plugin ID, rather than `pluginId`.
- [`ecbec4ec4c`](https://github.com/backstage/backstage/commit/ecbec4ec4c): Internal refactor to match new options pattern in the experimental backend system.
- [`51b7a7ed07`](https://github.com/backstage/backstage/commit/51b7a7ed07): Exported the default root HTTP router implementation as `DefaultRootHttpRouter`. It only implements the routing layer and needs to be exposed via an HTTP server similar to the built-in setup in the `rootHttpRouterFactory`.
- [`0e63aab311`](https://github.com/backstage/backstage/commit/0e63aab311): Moved over logging and configuration loading implementations from `@backstage/backend-common`. There is a now `WinstonLogger` which implements the `RootLoggerService` through Winston with accompanying utilities. For configuration the `loadBackendConfig` function has been moved over, but it now instead returns an object with a `config` property.
- [`8e06f3cf00`](https://github.com/backstage/backstage/commit/8e06f3cf00): Switched imports of `loggerToWinstonLogger` to `@backstage/backend-common`.
- [`3b8fd4169b`](https://github.com/backstage/backstage/commit/3b8fd4169b): Internal folder structure refactor.
- [`6cfd4d7073`](https://github.com/backstage/backstage/commit/6cfd4d7073): Updated implementations for the new `RootLifecycleService`.

### `@backstage/backend-common` (0.17.0 → [0.18.0](../../changelogs/@backstage/backend-common.md#0180))

#### 0.18.0

##### Minor Changes

- [`5e2cebe9a3`](https://github.com/backstage/backstage/commit/5e2cebe9a3): **BREAKING**: Removed deprecated `read` method from the `UrlReader` interface. All implementations should use the `readUrl` method instead.

  Migrated `UrlReader` and related types to `backend/backend-plugin-api`, types remain re-exported from `backend-common` for now.

##### Patch Changes

- [`0e63aab311`](https://github.com/backstage/backstage/commit/0e63aab311): Internal refactor of the logger and configuration loading implementations.
- [`31e2309c8c`](https://github.com/backstage/backstage/commit/31e2309c8c): Added `legacyPlugin` and the lower level `makeLegacyPlugin` wrappers that convert legacy plugins to the new backend system. This will be used to ease the future migration to the new backend system, but we discourage use of it for now.
- [`8e06f3cf00`](https://github.com/backstage/backstage/commit/8e06f3cf00): Added `loggerToWinstonLogger`, which was moved from `@backstage/backend-plugin-api`.
- [`2b1554cebf`](https://github.com/backstage/backstage/commit/2b1554cebf): Replaced dependencies on the `Logger` type from `winston` with `LoggerService` from `@backstage/backend-plugin-api`. This is not a breaking change as the `LoggerService` is a subset of the `Logger` interface.
- [`5437fe488f`](https://github.com/backstage/backstage/commit/5437fe488f): Migrated types related to `TokenManagerService`, `CacheService` and `DatabaseService` into backend-plugin-api.
- [`6f02d23b01`](https://github.com/backstage/backstage/commit/6f02d23b01): Moved `PluginEndpointDiscovery` type from backend-common to backend-plugin-api.
- [`d592ec4f51`](https://github.com/backstage/backstage/commit/d592ec4f51): Updated the logger created by `createRootLogger` to make it possible to override the default `service` log label.
- [`b99c030f1b`](https://github.com/backstage/backstage/commit/b99c030f1b): Refactor to rely on `@backstage/backend-app-api` for the implementation of `createServiceBuilder`.
- [`f23eef3aa2`](https://github.com/backstage/backstage/commit/f23eef3aa2): Updated dependency `better-sqlite3` to `^8.0.0`.

### `@backstage/plugin-adr` (0.2.5 → [0.3.0](../../changelogs/@backstage/plugin-adr.md#030))

#### 0.3.0

##### Minor Changes

- [`e4469d0ec1`](https://github.com/backstage/backstage/commit/e4469d0ec1): The ADR plugin can now work with sites other than GitHub. Expanded the ADR backend plugin to provide endpoints to facilitate this.

  **BREAKING** The ADR plugin now requires the `@backstage/plugin-adr-backend` plugin to be installed by using the `createRouter` method to add into your `backend`. You read more in the [install instructions](https://github.com/backstage/backstage/blob/master/plugins/adr-backend/README.md#install)

##### Patch Changes

- [`21ffbdd5ee`](https://github.com/backstage/backstage/commit/21ffbdd5ee): Clarify that default ADR parsers support MADR specification v2.x
- [`80ce4e8c29`](https://github.com/backstage/backstage/commit/80ce4e8c29): Small updates to some components to ensure theme typography properties are inherited correctly.

## 0.x minor version bumps

### `@backstage/backend-plugin-api` (0.2.0 → [0.3.0](../../changelogs/@backstage/backend-plugin-api.md#030))

#### 0.3.0

##### Minor Changes

- [`8e06f3cf00`](https://github.com/backstage/backstage/commit/8e06f3cf00): Moved `loggerToWinstonLogger` to `@backstage/backend-common`.
- [`ecbec4ec4c`](https://github.com/backstage/backstage/commit/ecbec4ec4c): Updated all factory function creators to accept options as a top-level callback rather than extra parameter to the main factory function.

##### Patch Changes

- [`6cfd4d7073`](https://github.com/backstage/backstage/commit/6cfd4d7073): Added `RootLifecycleService` and `rootLifecycleServiceRef`, as well as added a `logger` option to the existing `LifecycleServiceShutdownHook`.
- [`ecc6bfe4c9`](https://github.com/backstage/backstage/commit/ecc6bfe4c9): Added `ServiceFactoryOrFunction` type, for use when either a `ServiceFactory` or `() => ServiceFactory` can be used.
- [`5b7bcd3c5e`](https://github.com/backstage/backstage/commit/5b7bcd3c5e): Added `createSharedEnvironment` for creating a shared environment containing commonly used services in a split backend setup of the backend.
- [`02b119ff93`](https://github.com/backstage/backstage/commit/02b119ff93): Added a new `rootHttpRouterServiceRef` and `RootHttpRouterService` interface.
- [`5e2cebe9a3`](https://github.com/backstage/backstage/commit/5e2cebe9a3): Migrate `UrlReader` into this package to gradually remove the dependency on backend-common.
- [`843a0a158c`](https://github.com/backstage/backstage/commit/843a0a158c): Added new core identity service.
- [`5437fe488f`](https://github.com/backstage/backstage/commit/5437fe488f): Migrated types related to `TokenManagerService`, `CacheService` and `DatabaseService` into backend-plugin-api.
- [`6f02d23b01`](https://github.com/backstage/backstage/commit/6f02d23b01): Moved `PluginEndpointDiscovery` type from backend-common to backend-plugin-api.
- [`483e907eaf`](https://github.com/backstage/backstage/commit/483e907eaf): The `createServiceFactory` function has been updated to no longer use a duplicate callback pattern for plugin scoped services. The outer callback is now replaced by an optional `createRootContext` method. This change was made in order to support TypeScript 4.9, but it also simplifies the API surface a bit, especially for plugin scoped service factories that don't need to create a root context. In addition, the factory and root context functions can now be synchronous.

  A factory that previously would have looked like this:

  ```ts
  createServiceFactory({
    service: coreServices.cache,
    deps: {
      config: coreServices.config,
      plugin: coreServices.pluginMetadata,
    },
    async factory({ config }) {
      const cacheManager = CacheManager.fromConfig(config);
      return async ({ plugin }) => {
        return cacheManager.forPlugin(plugin.getId());
      };
    },
  });
  ```

  Now instead looks like this:

  ```ts
  createServiceFactory({
    service: coreServices.cache,
    deps: {
      config: coreServices.config,
      plugin: coreServices.pluginMetadata,
    },
    async createRootContext({ config }) {
      return CacheManager.fromConfig(config);
    },
    async factory({ plugin }, manager) {
      return manager.forPlugin(plugin.getId());
    },
  });
  ```

  Although in many cases the `createRootContext` isn't needed, for example:

  ```ts
  createServiceFactory({
    service: coreServices.logger,
    deps: {
      rootLogger: coreServices.rootLogger,
      plugin: coreServices.pluginMetadata,
    },
    factory({ rootLogger, plugin }) {
      return rootLogger.child({ plugin: plugin.getId() });
    },
  });
  ```

- [`16054afdec`](https://github.com/backstage/backstage/commit/16054afdec): Documented `coreServices` an all of its members.
- [`0e63aab311`](https://github.com/backstage/backstage/commit/0e63aab311): Updated the `RootLoggerService` to also have an `addRedactions` method.
- [`62b04bb865`](https://github.com/backstage/backstage/commit/62b04bb865): Updates all `create*` methods to simplify their type definitions and ensure they all have configuration interfaces.

### `@backstage/plugin-tech-radar` (0.5.20 → [0.6.0](../../changelogs/@backstage/plugin-tech-radar.md#060))

#### 0.6.0

##### Minor Changes

- [`38fd519fc1`](https://github.com/backstage/backstage/commit/38fd519fc1): Add highlighting of legend item and show bubble on hover within the Tech Radar

##### Patch Changes

- [`27a5e90e97`](https://github.com/backstage/backstage/commit/27a5e90e97): Small updates to some paragraph components to ensure theme typography properties are inherited correctly.
- [`80ce4e8c29`](https://github.com/backstage/backstage/commit/80ce4e8c29): Small updates to some components to ensure theme typography properties are inherited correctly.

## 0.0.x patch version bumps

### `@backstage/plugin-explore-backend` (0.0.1 → [0.0.2](../../changelogs/@backstage/plugin-explore-backend.md#002))

#### 0.0.2

##### Patch Changes

- [`358554ff3c`](https://github.com/backstage/backstage/commit/358554ff3c): Bump `msw` to `^0.49.0`
- [`9f9d279bd1`](https://github.com/backstage/backstage/commit/9f9d279bd1): Updated `README.md` examples

## Other minor version bumps

### `@backstage/app-defaults` (1.0.10 → [1.1.0](../../changelogs/@backstage/app-defaults.md#110))

#### 1.1.0

##### Minor Changes

- [`bca8e8b393`](https://github.com/backstage/backstage/commit/bca8e8b393): Allow defining application level feature flags. See [Feature Flags documentation](https://backstage.io/docs/plugins/feature-flags#in-the-application) for reference.

### `@backstage/catalog-client` (1.2.0 → [1.3.0](../../changelogs/@backstage/catalog-client.md#130))

#### 1.3.0

##### Minor Changes

- [`f75bf76330`](https://github.com/backstage/backstage/commit/f75bf76330): Implemented support for the `order` directive on `getEntities`

##### Patch Changes

- [`e23f13a573`](https://github.com/backstage/backstage/commit/e23f13a573): Enable the `by-refs` endpoint to receive `fields` through the POST body as well as through query parameters.

### `@backstage/core-app-api` (1.3.0 → [1.4.0](../../changelogs/@backstage/core-app-api.md#140))

#### 1.4.0

##### Minor Changes

- [`bca8e8b393`](https://github.com/backstage/backstage/commit/bca8e8b393): Allow defining application level feature flags. See [Feature Flags documentation](https://backstage.io/docs/plugins/feature-flags#in-the-application) for reference.

### `@backstage/core-plugin-api` (1.2.0 → [1.3.0](../../changelogs/@backstage/core-plugin-api.md#130))

#### 1.3.0

##### Minor Changes

- [`bca8e8b393`](https://github.com/backstage/backstage/commit/bca8e8b393): Allow defining application level feature flags. See [Feature Flags documentation](https://backstage.io/docs/plugins/feature-flags#in-the-application) for reference.

### `@backstage/plugin-catalog-backend` (1.6.0 → [1.7.0](../../changelogs/@backstage/plugin-catalog-backend.md#170))

#### 1.7.0

##### Minor Changes

- [`f75bf76330`](https://github.com/backstage/backstage/commit/f75bf76330): Implemented server side ordering in the entities endpoint

##### Patch Changes

- [`e23f13a573`](https://github.com/backstage/backstage/commit/e23f13a573): Enable the `by-refs` endpoint to receive `fields` through the POST body as well as through query parameters.
- [`f23eef3aa2`](https://github.com/backstage/backstage/commit/f23eef3aa2): Updated dependency `better-sqlite3` to `^8.0.0`.
- [`d136793ff0`](https://github.com/backstage/backstage/commit/d136793ff0): Fixed an issue where internal references in the catalog would stick around for longer than expected, causing entities to not be deleted or orphaned as expected.
- [`8e06f3cf00`](https://github.com/backstage/backstage/commit/8e06f3cf00): Switched imports of `loggerToWinstonLogger` to `@backstage/backend-common`.

### `@backstage/plugin-scaffolder` (1.9.1 → [1.10.0](../../changelogs/@backstage/plugin-scaffolder.md#1100))

#### 1.10.0

##### Minor Changes

- [`e4c0240445`](https://github.com/backstage/backstage/commit/e4c0240445): Added `catalogFilter` field to OwnerPicker and EntityPicker components to support filtering options by any field(s) of an entity.

  The `allowedKinds` field has been deprecated. Use `catalogFilter` instead. This field allows users to specify a filter on the shape of [EntityFilterQuery](https://github.com/backstage/backstage/blob/774c42003782121d3d6b2aa5f2865d53370c160e/packages/catalog-client/src/types/api.ts#L74), which can be passed into the CatalogClient. See examples below:

  - Get all entities of kind `Group`

    ```yaml
    owner:
      title: Owner
      type: string
      description: Owner of the component
      ui:field: OwnerPicker
      ui:options:
        catalogFilter:
          - kind: Group
    ```

  - Get entities of kind `Group` and spec.type `team`
    ```yaml
    owner:
      title: Owner
      type: string
      description: Owner of the component
      ui:field: OwnerPicker
      ui:options:
        catalogFilter:
          - kind: Group
            spec.type: team
    ```

- [`b4955ed7b9`](https://github.com/backstage/backstage/commit/b4955ed7b9): - **Deprecation** - Deprecated the following exports, please import them directly from `@backstage/plugin-scaffolder-react` instead

  ```
  createScaffolderFieldExtension
  ScaffolderFieldExtensions
  useTemplateSecrets
  scaffolderApiRef
  ScaffolderApi
  ScaffolderUseTemplateSecrets
  TemplateParameterSchema
  CustomFieldExtensionSchema
  CustomFieldValidator
  FieldExtensionOptions
  FieldExtensionComponentProps
  FieldExtensionComponent
  ListActionsResponse
  LogEvent
  ScaffolderDryRunOptions
  ScaffolderDryRunResponse
  ScaffolderGetIntegrationsListOptions
  ScaffolderGetIntegrationsListResponse
  ScaffolderOutputlink
  ScaffolderScaffoldOptions
  ScaffolderScaffoldResponse
  ScaffolderStreamLogsOptions
  ScaffolderTask
  ScaffolderTaskOutput
  ScaffolderTaskStatus
  ```

  - **Deprecation** - Deprecated the `rootRouteRef` export, this should now be used from `scaffolderPlugin.routes.root`

  - The following `/alpha` types have removed from this package and moved to the `@backstage/plugin-scaffolder-react/alpha` package

    ```
    createNextScaffolderFieldExtension
    FormProps
    NextCustomFieldValidator
    NextFieldExtensionComponentProps
    NextFieldExtensionOptions
    ```

##### Patch Changes

- [`3c112f6967`](https://github.com/backstage/backstage/commit/3c112f6967): rollback `@rjsf/validator-ajv8` to `@rjsf/validator-v6`
- [`2fadff2a25`](https://github.com/backstage/backstage/commit/2fadff2a25): Render the scaffolder action description using the `MarkdownContent` component. This will allow the page to show richer content to describe scaffolder actions.
- [`27a5e90e97`](https://github.com/backstage/backstage/commit/27a5e90e97): Small updates to some paragraph components to ensure theme typography properties are inherited correctly.
- [`223e2c5f03`](https://github.com/backstage/backstage/commit/223e2c5f03): add `onChange` handler to`Stepper` component
- [`659c92a1dc`](https://github.com/backstage/backstage/commit/659c92a1dc): Updated dependency `use-immer` to `^0.8.0`.
- [`489935d625`](https://github.com/backstage/backstage/commit/489935d625): Show action example yaml on the scaffolder actions documentation page.
- [`b8269de9f1`](https://github.com/backstage/backstage/commit/b8269de9f1): Explicitly declaring children as optional props to facilitate react 18 changes

### `@backstage/plugin-scaffolder-backend` (1.9.0 → [1.10.0](../../changelogs/@backstage/plugin-scaffolder-backend.md#1100))

#### 1.10.0

##### Minor Changes

- [`a6808b67a7`](https://github.com/backstage/backstage/commit/a6808b67a7): Implement `Required approving review count`, `Restrictions`, and `Required commit signing` support for `publish:github` action
- [`04a2048fb8`](https://github.com/backstage/backstage/commit/04a2048fb8): Allow custom repository roles to be configured on github repos
- [`c0ad7341f7`](https://github.com/backstage/backstage/commit/c0ad7341f7): Add Scaffolder action `catalog:fetch` to get entity by entity reference from catalog
- [`b44eb68bcb`](https://github.com/backstage/backstage/commit/b44eb68bcb): This change adds changes to provide examples alongside scaffolder task actions.

  The `createTemplateAction` function now takes a list of examples e.g.

  ```typescript
  const actionExamples = [
    {
      description: 'Example 1',
      example: yaml.stringify({
        steps: [
          {
            action: 'test:action',
            id: 'test',
            input: {
              input1: 'value',
            },
          },
        ],
      }),
    },
  ];

  export function createTestAction() {
    return createTemplateAction({
        id: 'test:action',
        examples: [
            {
                description: 'Example 1',
                examples: actionExamples
            }
        ],
        ...,
    });
  ```

  These examples can be retrieved later from the api.

  ```bash
  curl http://localhost:7007/api/scaffolder/v2/actions
  ```

  ```json
  [
    {
      "id": "test:action",
      "examples": [
        {
          "description": "Example 1",
          "example": "steps:\n  - action: test:action\n    id: test\n    input:\n      input1: value\n"
        }
      ],
      "schema": {
        "input": {
          "type": "object",
          "properties": {
            "input1": {
              "title": "Input 1",
              "type": "string"
            }
          }
        }
      }
    }
  ]
  ```

- [`72d6b9f4e2`](https://github.com/backstage/backstage/commit/72d6b9f4e2): Added ability to override the commit message and author details for the `publish:bitbucketServer` action.
- [`a69664faee`](https://github.com/backstage/backstage/commit/a69664faee): Add Github repository support for squash merge commit title and message options

##### Patch Changes

- [`2fadff2a25`](https://github.com/backstage/backstage/commit/2fadff2a25): Change scaffolder task actions to include markdown to demonstrate the new `ActionsPage` markdown feature.
- [`ecbec4ec4c`](https://github.com/backstage/backstage/commit/ecbec4ec4c): Internal refactor to match new options pattern in the experimental backend system.
- [`e4c0240445`](https://github.com/backstage/backstage/commit/e4c0240445): Added `catalogFilter` field to OwnerPicker and EntityPicker components to support filtering options by any field(s) of an entity.

  The `allowedKinds` field has been deprecated. Use `catalogFilter` instead. This field allows users to specify a filter on the shape of [EntityFilterQuery](https://github.com/backstage/backstage/blob/774c42003782121d3d6b2aa5f2865d53370c160e/packages/catalog-client/src/types/api.ts#L74), which can be passed into the CatalogClient. See examples below:

  - Get all entities of kind `Group`

    ```yaml
    owner:
      title: Owner
      type: string
      description: Owner of the component
      ui:field: OwnerPicker
      ui:options:
        catalogFilter:
          - kind: Group
    ```

  - Get entities of kind `Group` and spec.type `team`
    ```yaml
    owner:
      title: Owner
      type: string
      description: Owner of the component
      ui:field: OwnerPicker
      ui:options:
        catalogFilter:
          - kind: Group
            spec.type: team
    ```

- [`8e06f3cf00`](https://github.com/backstage/backstage/commit/8e06f3cf00): Switched imports of `loggerToWinstonLogger` to `@backstage/backend-common`.

### `@backstage/plugin-search-react` (1.3.1 → [1.4.0](../../changelogs/@backstage/plugin-search-react.md#140))

#### 1.4.0

##### Minor Changes

- [`6d9a93def8`](https://github.com/backstage/backstage/commit/6d9a93def8): Allow customizing empty state component through `noResultsComponent` property.

  Example:

  ```jsx
  <SearchResult noResultsComponent={<>No results were found</>}>
    {({ results }) => (
      <List>
        {results.map(({ type, document }) => {
          switch (type) {
            case 'custom-result-item':
              return (
                <CustomResultListItem
                  key={document.location}
                  result={document}
                />
              );
            default:
              return (
                <DefaultResultListItem
                  key={document.location}
                  result={document}
                />
              );
          }
        })}
      </List>
    )}
  </SearchResult>
  ```

##### Patch Changes

- [`80ce4e8c29`](https://github.com/backstage/backstage/commit/80ce4e8c29): Small updates to some components to ensure theme typography properties are inherited correctly.

### `@techdocs/cli` (1.2.4 → [1.3.0](../../changelogs/@techdocs/cli.md#130))

#### 1.3.0

##### Minor Changes

- [`bc18c902a2`](https://github.com/backstage/backstage/commit/bc18c902a2): Add `--preview-app-bundle-path` and `--preview-app-port` options to the `serve` command enabling previewing with apps other than the provided one

##### Patch Changes

- [`9f2b786fc9`](https://github.com/backstage/backstage/commit/9f2b786fc9): Provide context for logged errors.

## Other patch version bumps

### `@backstage/backend-defaults` (0.1.4 → [0.1.5](../../changelogs/@backstage/backend-defaults.md#015))

#### 0.1.5

##### Patch Changes

- [`6cfd4d7073`](https://github.com/backstage/backstage/commit/6cfd4d7073): Include implementations for the new `rootLifecycleServiceRef`.
- [`ecc6bfe4c9`](https://github.com/backstage/backstage/commit/ecc6bfe4c9): Use new `ServiceFactoryOrFunction` type.
- [`015a6dced6`](https://github.com/backstage/backstage/commit/015a6dced6): Updated to make sure that service implementations replace default service implementations.
- [`843a0a158c`](https://github.com/backstage/backstage/commit/843a0a158c): Added factory for the new core identity service to the set of default service factories.
- [`5b7bcd3c5e`](https://github.com/backstage/backstage/commit/5b7bcd3c5e): Added support to supply a shared environment to `createBackend`, which can be created using `createSharedEnvironment` from `@backstage/backend-plugin-api`.
- [`02b119ff93`](https://github.com/backstage/backstage/commit/02b119ff93): The new root HTTP router service is now installed by default.

### `@backstage/backend-tasks` (0.4.0 → [0.4.1](../../changelogs/@backstage/backend-tasks.md#041))

#### 0.4.1

##### Patch Changes

- [`3fad4ed40a`](https://github.com/backstage/backstage/commit/3fad4ed40a): Added a new static `TaskScheduler.forPlugin` method.
- [`b99c030f1b`](https://github.com/backstage/backstage/commit/b99c030f1b): Minor internal refactor to avoid import cycle issue.

### `@backstage/backend-test-utils` (0.1.31 → [0.1.32](../../changelogs/@backstage/backend-test-utils.md#0132))

#### 0.1.32

##### Patch Changes

- [`6cfd4d7073`](https://github.com/backstage/backstage/commit/6cfd4d7073): Include implementations for the new `rootLifecycleServiceRef`.
- [`015a6dced6`](https://github.com/backstage/backstage/commit/015a6dced6): Updated to make sure that service implementations replace default service implementations.
- [`a3ec2f32ea`](https://github.com/backstage/backstage/commit/a3ec2f32ea): The `startTestBackend` setup now includes default implementations for all core services.
- [`483e907eaf`](https://github.com/backstage/backstage/commit/483e907eaf): Internal updates of `createServiceFactory` from `@backstage/backend-plugin-api`.
- [`51b7a7ed07`](https://github.com/backstage/backstage/commit/51b7a7ed07): The backend started by `startTestBackend` now has default implementations of all core services. It now also returns a `TestBackend` instance, which provides access to the underlying `server` that can be used with testing libraries such as `supertest`.
- [`f23eef3aa2`](https://github.com/backstage/backstage/commit/f23eef3aa2): Updated dependency `better-sqlite3` to `^8.0.0`.

### `@backstage/catalog-model` (1.1.4 → [1.1.5](../../changelogs/@backstage/catalog-model.md#115))

#### 1.1.5

##### Patch Changes

- [`011bd518b7`](https://github.com/backstage/backstage/commit/011bd518b7): Fixed spelling mistakes in documentation.

### `@backstage/cli` (0.22.0 → [0.22.1](../../changelogs/@backstage/cli.md#0221))

#### 0.22.1

##### Patch Changes

- [`db2e137744`](https://github.com/backstage/backstage/commit/db2e137744): Removed unnecessary usage of `ThemeProvider` from the `ExampleComponent` test in the plugin template.
- [`47c10706df`](https://github.com/backstage/backstage/commit/47c10706df): Fixed an issue where the CLI would fail to function when there was a mix of workspace and non-workspace versions of the same package in `yarn.lock` when using Yarn 3.
- [`2b435be4cf`](https://github.com/backstage/backstage/commit/2b435be4cf): Updated backend plugin ID during creation to match user-entered input.
- [`4b572126f1`](https://github.com/backstage/backstage/commit/4b572126f1): Add experimental environment variable to enable caching for production builds.
- [`7b407b303b`](https://github.com/backstage/backstage/commit/7b407b303b): Slightly improve readability of "base URL conflict" error handling code
- [`a62a1f9dca`](https://github.com/backstage/backstage/commit/a62a1f9dca): The frontend serve task now filters out allowed package duplicates during its package check, just like `versions:bump` and `versions:check`.
- [`d06a7890c6`](https://github.com/backstage/backstage/commit/d06a7890c6): Removed unused package `type-fest`
- [`7c8a974515`](https://github.com/backstage/backstage/commit/7c8a974515): The `repo test`, `repo lint`, and `repo build` commands will now analyze `yarn.lock` for dependency changes when searching for changed packages. This allows you to use the `--since <ref>` flag even if you have `yarn.lock` changes.
- [`e1b71e142e`](https://github.com/backstage/backstage/commit/e1b71e142e): Workspace ranges are no longer considered invalid by version commands.

### `@backstage/config` (1.0.5 → [1.0.6](../../changelogs/@backstage/config.md#106))

#### 1.0.6

##### Patch Changes

- [`ba2d69ee17`](https://github.com/backstage/backstage/commit/ba2d69ee17): Adds the ability to coerce values to their boolean representatives.
  Values such as `"true"` `1` `on` and `y` will become `true` when using `getBoolean` and the opposites `false`.
  This happens particularly when such parameters are used with environmental substitution as environment variables are always strings.

### `@backstage/core-components` (0.12.2 → [0.12.3](../../changelogs/@backstage/core-components.md#0123))

#### 0.12.3

##### Patch Changes

- [`f2ea446de0`](https://github.com/backstage/backstage/commit/f2ea446de0): Applied fix from v1.9.1
- [`80ce4e8c29`](https://github.com/backstage/backstage/commit/80ce4e8c29): Small updates to some components to ensure theme typography properties are inherited correctly.
- [`f23146520e`](https://github.com/backstage/backstage/commit/f23146520e): Ensure that the "Custom User" sign-in makes use of supplied custom tokens, if any

### `@backstage/create-app` (0.4.35 → [0.4.36](../../changelogs/@backstage/create-app.md#0436))

#### 0.4.36

##### Patch Changes

- [`f834622f56`](https://github.com/backstage/backstage/commit/f834622f56): Bumped create-app version.
- [`724b55689b`](https://github.com/backstage/backstage/commit/724b55689b): Avoid potential temporary directory conflict.
- [`a2a70504e3`](https://github.com/backstage/backstage/commit/a2a70504e3): Remove deprecated `create-plugin` script from the `default-app` template's `package.json.hbs`.
  Also, update the documentation to not mention the `create-plugin` script and instead mention
  the `new` script.
- [`016a52c28f`](https://github.com/backstage/backstage/commit/016a52c28f): Bumped the minimum version of `better-sqlite3`. You can make the following change to your `packages/backend/package.json` to keep your instance of Backstage updated.

  ```diff
  - "better-sqlite3": "^7.5.0",
  + "better-sqlite3": "^8.0.0",
  ```

### `@backstage/integration-aws-node` (0.1.0 → [0.1.1](../../changelogs/@backstage/integration-aws-node.md#011))

#### 0.1.1

##### Patch Changes

- [`89062b8ba0`](https://github.com/backstage/backstage/commit/89062b8ba0): Skip STS API calls where not needed, to support Minio use cases

### `@backstage/plugin-adr-backend` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-adr-backend.md#025))

#### 0.2.5

##### Patch Changes

- [`aa17643a06`](https://github.com/backstage/backstage/commit/aa17643a06): This plugin now exports a `createRouter` method which uses `UrlReaders` to make requests to your SCM. Please make sure you read the [install instructions](https://github.com/backstage/backstage/blob/master/plugins/adr-backend/README.md#install)
- [`21ffbdd5ee`](https://github.com/backstage/backstage/commit/21ffbdd5ee): Clarify that default ADR parsers support MADR specification v2.x

### `@backstage/plugin-api-docs` (0.8.13 → [0.8.14](../../changelogs/@backstage/plugin-api-docs.md#0814))

#### 0.8.14

##### Patch Changes

- [`80ce4e8c29`](https://github.com/backstage/backstage/commit/80ce4e8c29): Small updates to some components to ensure theme typography properties are inherited correctly.

### `@backstage/plugin-apollo-explorer` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-apollo-explorer.md#017))

#### 0.1.7

##### Patch Changes

- [`e8269bca15`](https://github.com/backstage/backstage/commit/e8269bca15): Updated dependency `@apollo/explorer` to `^2.0.0`.

### `@backstage/plugin-app-backend` (0.3.39 → [0.3.40](../../changelogs/@backstage/plugin-app-backend.md#0340))

#### 0.3.40

##### Patch Changes

- [`b4ffa3bd91`](https://github.com/backstage/backstage/commit/b4ffa3bd91): The warning for missing app contents is now logged as an error instead, but only in production.
- [`ecbec4ec4c`](https://github.com/backstage/backstage/commit/ecbec4ec4c): Internal refactor to match new options pattern in the experimental backend system.
- [`8e06f3cf00`](https://github.com/backstage/backstage/commit/8e06f3cf00): Switched imports of `loggerToWinstonLogger` to `@backstage/backend-common`.

### `@backstage/plugin-azure-devops` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-azure-devops.md#025))

#### 0.2.5

##### Patch Changes

- [`80ce4e8c29`](https://github.com/backstage/backstage/commit/80ce4e8c29): Small updates to some components to ensure theme typography properties are inherited correctly.

### `@backstage/plugin-azure-sites` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-azure-sites.md#013))

#### 0.1.3

##### Patch Changes

- [`80ce4e8c29`](https://github.com/backstage/backstage/commit/80ce4e8c29): Small updates to some components to ensure theme typography properties are inherited correctly.

### `@backstage/plugin-bazaar` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-bazaar.md#023))

#### 0.2.3

##### Patch Changes

- [`0bf734dbac`](https://github.com/backstage/backstage/commit/0bf734dbac): Created soft cut on `ProjectCard` to indicate more content.
- [`41d0b0a24a`](https://github.com/backstage/backstage/commit/41d0b0a24a): Added `isBazaarAvailable` helper to be used with the `EntitySwitch`.
- [`92a33f0ae3`](https://github.com/backstage/backstage/commit/92a33f0ae3): Updated README.md to include instructions of installing the Bazaar Backend
- [`99d52523c7`](https://github.com/backstage/backstage/commit/99d52523c7): Allow customisation of title and subtitle on bazaar page.
- [`27a5e90e97`](https://github.com/backstage/backstage/commit/27a5e90e97): Small updates to some paragraph components to ensure theme typography properties are inherited correctly.
- [`80ce4e8c29`](https://github.com/backstage/backstage/commit/80ce4e8c29): Small updates to some components to ensure theme typography properties are inherited correctly.

### `@backstage/plugin-bitbucket-cloud-common` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#023))

#### 0.2.3

##### Patch Changes

- [`0358d399ad`](https://github.com/backstage/backstage/commit/0358d399ad): Updated dependency `ts-morph` to `^17.0.0`.

### `@backstage/plugin-catalog` (1.7.1 → [1.7.2](../../changelogs/@backstage/plugin-catalog.md#172))

#### 1.7.2

##### Patch Changes

- [`cebe24ef1d`](https://github.com/backstage/backstage/commit/cebe24ef1d): Add `EntityLabelsCard` to show the labels for an entity.
- [`5353b4df61`](https://github.com/backstage/backstage/commit/5353b4df61): There is now tooltip in the entity context menu

### `@backstage/plugin-catalog-backend-module-aws` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#0113))

#### 0.1.13

##### Patch Changes

- [`9f2b786fc9`](https://github.com/backstage/backstage/commit/9f2b786fc9): Provide context for logged errors.
- [`8e06f3cf00`](https://github.com/backstage/backstage/commit/8e06f3cf00): Switched imports of `loggerToWinstonLogger` to `@backstage/backend-common`.

### `@backstage/plugin-catalog-backend-module-azure` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0111))

#### 0.1.11

##### Patch Changes

- [`9f2b786fc9`](https://github.com/backstage/backstage/commit/9f2b786fc9): Provide context for logged errors.
- [`8e06f3cf00`](https://github.com/backstage/backstage/commit/8e06f3cf00): Switched imports of `loggerToWinstonLogger` to `@backstage/backend-common`.

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#017))

#### 0.1.7

##### Patch Changes

- [`9f2b786fc9`](https://github.com/backstage/backstage/commit/9f2b786fc9): Provide context for logged errors.
- [`8e06f3cf00`](https://github.com/backstage/backstage/commit/8e06f3cf00): Switched imports of `loggerToWinstonLogger` to `@backstage/backend-common`.

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#015))

#### 0.1.5

##### Patch Changes

- [`9f2b786fc9`](https://github.com/backstage/backstage/commit/9f2b786fc9): Provide context for logged errors.
- [`8e06f3cf00`](https://github.com/backstage/backstage/commit/8e06f3cf00): Switched imports of `loggerToWinstonLogger` to `@backstage/backend-common`.

### `@backstage/plugin-catalog-backend-module-gerrit` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#018))

#### 0.1.8

##### Patch Changes

- [`9f2b786fc9`](https://github.com/backstage/backstage/commit/9f2b786fc9): Provide context for logged errors.
- [`8e06f3cf00`](https://github.com/backstage/backstage/commit/8e06f3cf00): Switched imports of `loggerToWinstonLogger` to `@backstage/backend-common`.

### `@backstage/plugin-catalog-backend-module-github` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#023))

#### 0.2.3

##### Patch Changes

- [`427d8f4411`](https://github.com/backstage/backstage/commit/427d8f4411): Added support for event based updates in the `GithubOrgEntityProvider`!
  Based on webhook events from GitHub the affected `User` or `Group` entity will be refreshed.
  This includes adding new entities, refreshing existing ones, and removing obsolete ones.

  Please find more information at
  https://backstage.io/docs/integrations/github/org#installation-with-events-support

- [`f8d91a8810`](https://github.com/backstage/backstage/commit/f8d91a8810): fixed `catalogPath` option to properly glob match on received GitHub events.
- [`9f2b786fc9`](https://github.com/backstage/backstage/commit/9f2b786fc9): Provide context for logged errors.
- [`8e06f3cf00`](https://github.com/backstage/backstage/commit/8e06f3cf00): Switched imports of `loggerToWinstonLogger` to `@backstage/backend-common`.

### `@backstage/plugin-catalog-backend-module-gitlab` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#0111))

#### 0.1.11

##### Patch Changes

- [`9f2b786fc9`](https://github.com/backstage/backstage/commit/9f2b786fc9): Provide context for logged errors.
- [`8e06f3cf00`](https://github.com/backstage/backstage/commit/8e06f3cf00): Switched imports of `loggerToWinstonLogger` to `@backstage/backend-common`.

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#011))

#### 0.1.1

##### Patch Changes

- [`ecbec4ec4c`](https://github.com/backstage/backstage/commit/ecbec4ec4c): Internal refactor to match new options pattern in the experimental backend system.
- [`045b66ce02`](https://github.com/backstage/backstage/commit/045b66ce02): Fixed issue with sometimes trying to commit an empty array of references
- [`9f2b786fc9`](https://github.com/backstage/backstage/commit/9f2b786fc9): Provide context for logged errors.
- [`8e06f3cf00`](https://github.com/backstage/backstage/commit/8e06f3cf00): Switched imports of `loggerToWinstonLogger` to `@backstage/backend-common`.

### `@backstage/plugin-catalog-backend-module-ldap` (0.5.6 → [0.5.7](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#057))

#### 0.5.7

##### Patch Changes

- [`9f2b786fc9`](https://github.com/backstage/backstage/commit/9f2b786fc9): Provide context for logged errors.

### `@backstage/plugin-catalog-backend-module-msgraph` (0.4.5 → [0.4.6](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#046))

#### 0.4.6

##### Patch Changes

- [`9f2b786fc9`](https://github.com/backstage/backstage/commit/9f2b786fc9): Provide context for logged errors.
- [`8e06f3cf00`](https://github.com/backstage/backstage/commit/8e06f3cf00): Switched imports of `loggerToWinstonLogger` to `@backstage/backend-common`.

### `@backstage/plugin-catalog-backend-module-openapi` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#016))

#### 0.1.6

##### Patch Changes

- [`f9abdb64fc`](https://github.com/backstage/backstage/commit/f9abdb64fc): Updated internal usage of UrlReader interface.

### `@backstage/plugin-catalog-graph` (0.2.25 → [0.2.26](../../changelogs/@backstage/plugin-catalog-graph.md#0226))

#### 0.2.26

##### Patch Changes

- [`99f05cbc70`](https://github.com/backstage/backstage/commit/99f05cbc70): The link from the `CatalogGraphCard` to the `CatalogGraphPage` no longer includes an explicit `maxDepth` parameter, letting the `CatalogGraphPage` choose the initial `maxDepth` instead.

### `@backstage/plugin-catalog-node` (1.3.0 → [1.3.1](../../changelogs/@backstage/plugin-catalog-node.md#131))

#### 1.3.1

##### Patch Changes

- [`483e907eaf`](https://github.com/backstage/backstage/commit/483e907eaf): Internal updates of `createServiceFactory` from `@backstage/backend-plugin-api`.

### `@backstage/plugin-catalog-react` (1.2.3 → [1.2.4](../../changelogs/@backstage/plugin-catalog-react.md#124))

#### 1.2.4

##### Patch Changes

- [`37426f6f5e`](https://github.com/backstage/backstage/commit/37426f6f5e): Fixed bug in `EntityTagPicker` that filtered on unavailable tags for the selected kind.
- [`516b2039b6`](https://github.com/backstage/backstage/commit/516b2039b6): Add a reusable pop over `EntityPeekAheadPopover` component. It shows more details about the associated entity. See the playbook here https://backstage.io/storybook/?path=/story/catalog-entitypeekaheadpopover--default
- [`0e33627996`](https://github.com/backstage/backstage/commit/0e33627996): Remove usage of raw span

### `@backstage/plugin-cicd-statistics` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-cicd-statistics.md#0116))

#### 0.1.16

##### Patch Changes

- [`80ce4e8c29`](https://github.com/backstage/backstage/commit/80ce4e8c29): Small updates to some components to ensure theme typography properties are inherited correctly.

### `@backstage/plugin-cloudbuild` (0.3.13 → [0.3.14](../../changelogs/@backstage/plugin-cloudbuild.md#0314))

#### 0.3.14

##### Patch Changes

- [`1188407632`](https://github.com/backstage/backstage/commit/1188407632): Fixed bug in the CloudbuildClient reRunWorkflow fetch call. The method in the fetch request was not specified and defaulted to a GET. Method is now explicitly set to POST with this change.

### `@backstage/plugin-code-coverage-backend` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-code-coverage-backend.md#026))

#### 0.2.6

##### Patch Changes

- [`dcfdaeccd3`](https://github.com/backstage/backstage/commit/dcfdaeccd3): `RouterOptions` now accepts an optional `catalogApi` argument, allowing custom catalog clients to be used. This is leveraged in the local standalone development runner to pass in a catalog client that returns fake data.

### `@backstage/plugin-cost-insights` (0.12.2 → [0.12.3](../../changelogs/@backstage/plugin-cost-insights.md#0123))

#### 0.12.3

##### Patch Changes

- [`6a41175d70`](https://github.com/backstage/backstage/commit/6a41175d70): Removed @backstage/test-utils dependency, since it was already in the devDependencies where it belongs. The main benefit is that this will exclude better-sqlite3 from the production build.
- [`80ce4e8c29`](https://github.com/backstage/backstage/commit/80ce4e8c29): Small updates to some components to ensure theme typography properties are inherited correctly.

### `@backstage/plugin-events-backend` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-events-backend.md#021))

#### 0.2.1

##### Patch Changes

- [`217149ae98`](https://github.com/backstage/backstage/commit/217149ae98): The default event broker will now catch and log errors thrown by the `onEvent` method of subscribers. The returned promise from `publish` method will also not resolve until all subscribers have handled the event.
- [`8e06f3cf00`](https://github.com/backstage/backstage/commit/8e06f3cf00): Switched imports of `loggerToWinstonLogger` to `@backstage/backend-common`.

### `@backstage/plugin-events-backend-module-aws-sqs` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#012))

#### 0.1.2

##### Patch Changes

- [`9f2b786fc9`](https://github.com/backstage/backstage/commit/9f2b786fc9): Provide context for logged errors.
- [`8e06f3cf00`](https://github.com/backstage/backstage/commit/8e06f3cf00): Switched imports of `loggerToWinstonLogger` to `@backstage/backend-common`.

### `@backstage/plugin-explore` (0.3.44 → [0.3.45](../../changelogs/@backstage/plugin-explore.md#0345))

#### 0.3.45

##### Patch Changes

- [`9f9d279bd1`](https://github.com/backstage/backstage/commit/9f9d279bd1): Updated `README.md` examples
- [`d318d4f659`](https://github.com/backstage/backstage/commit/d318d4f659): Makes the `GroupsDiagram` not grown on screen on its own.

### `@backstage/plugin-firehydrant` (0.1.30 → [0.1.31](../../changelogs/@backstage/plugin-firehydrant.md#0131))

#### 0.1.31

##### Patch Changes

- [`80ce4e8c29`](https://github.com/backstage/backstage/commit/80ce4e8c29): Small updates to some components to ensure theme typography properties are inherited correctly.

### `@backstage/plugin-fossa` (0.2.45 → [0.2.46](../../changelogs/@backstage/plugin-fossa.md#0246))

#### 0.2.46

##### Patch Changes

- [`27a5e90e97`](https://github.com/backstage/backstage/commit/27a5e90e97): Small updates to some paragraph components to ensure theme typography properties are inherited correctly.
- [`80ce4e8c29`](https://github.com/backstage/backstage/commit/80ce4e8c29): Small updates to some components to ensure theme typography properties are inherited correctly.

### `@backstage/plugin-gcp-projects` (0.3.32 → [0.3.33](../../changelogs/@backstage/plugin-gcp-projects.md#0333))

#### 0.3.33

##### Patch Changes

- [`80ce4e8c29`](https://github.com/backstage/backstage/commit/80ce4e8c29): Small updates to some components to ensure theme typography properties are inherited correctly.

### `@backstage/plugin-git-release-manager` (0.3.26 → [0.3.27](../../changelogs/@backstage/plugin-git-release-manager.md#0327))

#### 0.3.27

##### Patch Changes

- [`8024341620`](https://github.com/backstage/backstage/commit/8024341620): add exports to clear api-report messages
- [`80ce4e8c29`](https://github.com/backstage/backstage/commit/80ce4e8c29): Small updates to some components to ensure theme typography properties are inherited correctly.

### `@backstage/plugin-github-actions` (0.5.13 → [0.5.14](../../changelogs/@backstage/plugin-github-actions.md#0514))

#### 0.5.14

##### Patch Changes

- [`27a5e90e97`](https://github.com/backstage/backstage/commit/27a5e90e97): Small updates to some paragraph components to ensure theme typography properties are inherited correctly.

### `@backstage/plugin-home` (0.4.29 → [0.4.30](../../changelogs/@backstage/plugin-home.md#0430))

#### 0.4.30

##### Patch Changes

- [`27a5e90e97`](https://github.com/backstage/backstage/commit/27a5e90e97): Small updates to some paragraph components to ensure theme typography properties are inherited correctly.
- [`80ce4e8c29`](https://github.com/backstage/backstage/commit/80ce4e8c29): Small updates to some components to ensure theme typography properties are inherited correctly.

### `@backstage/plugin-ilert` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-ilert.md#023))

#### 0.2.3

##### Patch Changes

- [`b1279d396d`](https://github.com/backstage/backstage/commit/b1279d396d): fixed error on service page not showing if historical uptime was disabled on a service

### `@backstage/plugin-jenkins` (0.7.12 → [0.7.13](../../changelogs/@backstage/plugin-jenkins.md#0713))

#### 0.7.13

##### Patch Changes

- [`27a5e90e97`](https://github.com/backstage/backstage/commit/27a5e90e97): Small updates to some paragraph components to ensure theme typography properties are inherited correctly.

### `@backstage/plugin-kubernetes` (0.7.6 → [0.7.7](../../changelogs/@backstage/plugin-kubernetes.md#077))

#### 0.7.7

##### Patch Changes

- [`27a5e90e97`](https://github.com/backstage/backstage/commit/27a5e90e97): Small updates to some paragraph components to ensure theme typography properties are inherited correctly.

### `@backstage/plugin-kubernetes-backend` (0.9.0 → [0.9.1](../../changelogs/@backstage/plugin-kubernetes-backend.md#091))

#### 0.9.1

##### Patch Changes

- [`083bf1b9fa`](https://github.com/backstage/backstage/commit/083bf1b9fa): fixes a bug affecting clusters that have a base path in the URL. The base path was being replaced with the resource path instead of being appended
- [`c6f29bfcdc`](https://github.com/backstage/backstage/commit/c6f29bfcdc): Added the missing auth provider googleServiceAccount in config schema.

### `@backstage/plugin-lighthouse` (0.3.13 → [0.3.14](../../changelogs/@backstage/plugin-lighthouse.md#0314))

#### 0.3.14

##### Patch Changes

- [`2f1b283de2`](https://github.com/backstage/backstage/commit/2f1b283de2): Fixed bug in Lighthouse Plugin where audit list item and create audit button navigated to a wrong URL.
- [`80ce4e8c29`](https://github.com/backstage/backstage/commit/80ce4e8c29): Small updates to some components to ensure theme typography properties are inherited correctly.

### `@backstage/plugin-permission-react` (0.4.8 → [0.4.9](../../changelogs/@backstage/plugin-permission-react.md#049))

#### 0.4.9

##### Patch Changes

- [`1a53a735b7`](https://github.com/backstage/backstage/commit/1a53a735b7): Updated dependency `swr` to `^2.0.0`.

### `@backstage/plugin-playlist` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-playlist.md#015))

#### 0.1.5

##### Patch Changes

- [`1a53a735b7`](https://github.com/backstage/backstage/commit/1a53a735b7): Updated dependency `swr` to `^2.0.0`.

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.14 → [0.2.15](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0215))

#### 0.2.15

##### Patch Changes

- [`e4c0240445`](https://github.com/backstage/backstage/commit/e4c0240445): Added `catalogFilter` field to OwnerPicker and EntityPicker components to support filtering options by any field(s) of an entity.

  The `allowedKinds` field has been deprecated. Use `catalogFilter` instead. This field allows users to specify a filter on the shape of [EntityFilterQuery](https://github.com/backstage/backstage/blob/774c42003782121d3d6b2aa5f2865d53370c160e/packages/catalog-client/src/types/api.ts#L74), which can be passed into the CatalogClient. See examples below:

  - Get all entities of kind `Group`

    ```yaml
    owner:
      title: Owner
      type: string
      description: Owner of the component
      ui:field: OwnerPicker
      ui:options:
        catalogFilter:
          - kind: Group
    ```

  - Get entities of kind `Group` and spec.type `team`
    ```yaml
    owner:
      title: Owner
      type: string
      description: Owner of the component
      ui:field: OwnerPicker
      ui:options:
        catalogFilter:
          - kind: Group
            spec.type: team
    ```

### `@backstage/plugin-scaffolder-backend-module-rails` (0.4.7 → [0.4.8](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#048))

#### 0.4.8

##### Patch Changes

- [`268b8634f9`](https://github.com/backstage/backstage/commit/268b8634f9): handle skipActiveRecord rails new argument
- [`2fadff2a25`](https://github.com/backstage/backstage/commit/2fadff2a25): Change scaffolder task actions to include markdown to demonstrate the new `ActionsPage` markdown feature.
- [`e4c0240445`](https://github.com/backstage/backstage/commit/e4c0240445): Added `catalogFilter` field to OwnerPicker and EntityPicker components to support filtering options by any field(s) of an entity.

  The `allowedKinds` field has been deprecated. Use `catalogFilter` instead. This field allows users to specify a filter on the shape of [EntityFilterQuery](https://github.com/backstage/backstage/blob/774c42003782121d3d6b2aa5f2865d53370c160e/packages/catalog-client/src/types/api.ts#L74), which can be passed into the CatalogClient. See examples below:

  - Get all entities of kind `Group`

    ```yaml
    owner:
      title: Owner
      type: string
      description: Owner of the component
      ui:field: OwnerPicker
      ui:options:
        catalogFilter:
          - kind: Group
    ```

  - Get entities of kind `Group` and spec.type `team`
    ```yaml
    owner:
      title: Owner
      type: string
      description: Owner of the component
      ui:field: OwnerPicker
      ui:options:
        catalogFilter:
          - kind: Group
            spec.type: team
    ```

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.12 → [0.2.13](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0213))

#### 0.2.13

##### Patch Changes

- [`e4c0240445`](https://github.com/backstage/backstage/commit/e4c0240445): Added `catalogFilter` field to OwnerPicker and EntityPicker components to support filtering options by any field(s) of an entity.

  The `allowedKinds` field has been deprecated. Use `catalogFilter` instead. This field allows users to specify a filter on the shape of [EntityFilterQuery](https://github.com/backstage/backstage/blob/774c42003782121d3d6b2aa5f2865d53370c160e/packages/catalog-client/src/types/api.ts#L74), which can be passed into the CatalogClient. See examples below:

  - Get all entities of kind `Group`

    ```yaml
    owner:
      title: Owner
      type: string
      description: Owner of the component
      ui:field: OwnerPicker
      ui:options:
        catalogFilter:
          - kind: Group
    ```

  - Get entities of kind `Group` and spec.type `team`
    ```yaml
    owner:
      title: Owner
      type: string
      description: Owner of the component
      ui:field: OwnerPicker
      ui:options:
        catalogFilter:
          - kind: Group
            spec.type: team
    ```

### `@backstage/plugin-scaffolder-common` (1.2.3 → [1.2.4](../../changelogs/@backstage/plugin-scaffolder-common.md#124))

#### 1.2.4

##### Patch Changes

- [`011bd518b7`](https://github.com/backstage/backstage/commit/011bd518b7): Fixed spelling mistakes in documentation.

### `@backstage/plugin-search` (1.0.6 → [1.0.7](../../changelogs/@backstage/plugin-search.md#107))

#### 1.0.7

##### Patch Changes

- [`a24387c6de`](https://github.com/backstage/backstage/commit/a24387c6de): When the search modal is opened, the focus is placed on the search bar input field.
- [`80ce4e8c29`](https://github.com/backstage/backstage/commit/80ce4e8c29): Small updates to some components to ensure theme typography properties are inherited correctly.

### `@backstage/plugin-search-backend` (1.2.0 → [1.2.1](../../changelogs/@backstage/plugin-search-backend.md#121))

#### 1.2.1

##### Patch Changes

- [`bfd66b0478`](https://github.com/backstage/backstage/commit/bfd66b0478): Allow max page limit for search results to be configurable

### `@backstage/plugin-search-backend-module-elasticsearch` (1.1.0 → [1.1.1](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#111))

#### 1.1.1

##### Patch Changes

- [`011bd518b7`](https://github.com/backstage/backstage/commit/011bd518b7): Fixed spelling mistakes in documentation.
- [`1e1a9fe979`](https://github.com/backstage/backstage/commit/1e1a9fe979): Fixed a bug that could cause an indexing process to silently fail, timeout, and accumulate stale indices.
- [`2a49ffbcb3`](https://github.com/backstage/backstage/commit/2a49ffbcb3): Improved documentation on the `ElasticSearchSearchEngine.newClient()` method.
- [`56633804dd`](https://github.com/backstage/backstage/commit/56633804dd): Fixed a bug that could cause the backstage backend to unexpectedly terminate when client errors were encountered during the indexing process.
- [`aa33a06894`](https://github.com/backstage/backstage/commit/aa33a06894): Improved index throughput by optimizing when and how many documents were made available to the bulk client.

### `@backstage/plugin-search-backend-node` (1.1.0 → [1.1.1](../../changelogs/@backstage/plugin-search-backend-node.md#111))

#### 1.1.1

##### Patch Changes

- [`011bd518b7`](https://github.com/backstage/backstage/commit/011bd518b7): Fixed spelling mistakes in documentation.

### `@backstage/plugin-sonarqube` (0.6.1 → [0.6.2](../../changelogs/@backstage/plugin-sonarqube.md#062))

#### 0.6.2

##### Patch Changes

- [`80ce4e8c29`](https://github.com/backstage/backstage/commit/80ce4e8c29): Small updates to some components to ensure theme typography properties are inherited correctly.

### `@backstage/plugin-stack-overflow` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-stack-overflow.md#0110))

#### 0.1.10

##### Patch Changes

- [`27a5e90e97`](https://github.com/backstage/backstage/commit/27a5e90e97): Small updates to some paragraph components to ensure theme typography properties are inherited correctly.

### `@backstage/plugin-stack-overflow-backend` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-stack-overflow-backend.md#019))

#### 0.1.9

##### Patch Changes

- [`06f6a4f0f1`](https://github.com/backstage/backstage/commit/06f6a4f0f1): Enable configuration override for StackOverflow backend plugin when instantiating the search indexer. This makes it possible to set different configuration for frontend and backend of the plugin.

### `@backstage/plugin-tech-insights-backend` (0.5.5 → [0.5.6](../../changelogs/@backstage/plugin-tech-insights-backend.md#056))

#### 0.5.6

##### Patch Changes

- [`7a38a31699`](https://github.com/backstage/backstage/commit/7a38a31699): Complete check results run when a single check errors so that we don't block other checks from working due to an error in a single check
- [`44c18b4d3f`](https://github.com/backstage/backstage/commit/44c18b4d3f): Expose optional `persistenceContext` on `TechInsights` construction to enable integrators to provide their own database implementations for fact handling.
- [`b48317cfc6`](https://github.com/backstage/backstage/commit/b48317cfc6): Modifies database cleanup to remove all facts for entities instead of hand-picked ones only. Improves query execution a lot in large datasets.
  Changes semantics of the lifecycle deletion logic slightly for cases were historical entities/facts, that are , not present in the application anymore, were kept forever instead of being cleaned up. The new implementation is more along the expected lines.

### `@backstage/plugin-techdocs` (1.4.2 → [1.4.3](../../changelogs/@backstage/plugin-techdocs.md#143))

#### 1.4.3

##### Patch Changes

- [`a74dd61534`](https://github.com/backstage/backstage/commit/a74dd61534): Fix sizing of build log component to render all lines
- [`80ce4e8c29`](https://github.com/backstage/backstage/commit/80ce4e8c29): Small updates to some components to ensure theme typography properties are inherited correctly.
- [`7115c7389b`](https://github.com/backstage/backstage/commit/7115c7389b): Updated dependency `jss` to `~10.9.0`.

### `@backstage/plugin-techdocs-react` (1.1.1 → [1.1.2](../../changelogs/@backstage/plugin-techdocs-react.md#112))

#### 1.1.2

##### Patch Changes

- [`7115c7389b`](https://github.com/backstage/backstage/commit/7115c7389b): Updated dependency `jss` to `~10.9.0`.
- [`b8269de9f1`](https://github.com/backstage/backstage/commit/b8269de9f1): Explicitly declaring children as optional props to facilitate react 18 changes

### `@backstage/plugin-user-settings` (0.6.1 → [0.6.2](../../changelogs/@backstage/plugin-user-settings.md#062))

#### 0.6.2

##### Patch Changes

- [`a942f70435`](https://github.com/backstage/backstage/commit/a942f70435): Minor update to the `UserSettingsIdentityCard` to have clickable entity refs
- [`d61f622db8`](https://github.com/backstage/backstage/commit/d61f622db8): Refactor for the feature flag filter functionality
- [`80ce4e8c29`](https://github.com/backstage/backstage/commit/80ce4e8c29): Small updates to some components to ensure theme typography properties are inherited correctly.
- [`bca8e8b393`](https://github.com/backstage/backstage/commit/bca8e8b393): Feature flags now accept a description property.

### `@backstage/plugin-xcmetrics` (0.2.33 → [0.2.34](../../changelogs/@backstage/plugin-xcmetrics.md#0234))

#### 0.2.34

##### Patch Changes

- [`27a5e90e97`](https://github.com/backstage/backstage/commit/27a5e90e97): Small updates to some paragraph components to ensure theme typography properties are inherited correctly.

### `@backstage/repo-tools` (0.1.0 → [0.1.1](../../changelogs/@backstage/repo-tools.md#011))

#### 0.1.1

##### Patch Changes

- [`c447a5221b`](https://github.com/backstage/backstage/commit/c447a5221b): Use the project tsconfig in case of selection all packages
- [`93cff3053e`](https://github.com/backstage/backstage/commit/93cff3053e): Move some dependencies as `peerDependencies` because we need to always use same version as in `api-extractor`
- [`d48cf39f2a`](https://github.com/backstage/backstage/commit/d48cf39f2a): fix glob on windows os
- [`75275b0b0b`](https://github.com/backstage/backstage/commit/75275b0b0b): Updated dependency `@microsoft/tsdoc-config` to `0.16.2`.
- [`76fc6f7ec8`](https://github.com/backstage/backstage/commit/76fc6f7ec8): Updates Api-extractor and api-documenter version

## Excluded dependency updates

- `@backstage/config-loader` (1.1.7 → [1.1.8](../../changelogs/@backstage/config-loader.md#118))
- `@backstage/dev-utils` (1.0.10 → [1.0.11](../../changelogs/@backstage/dev-utils.md#1011))
- `@backstage/integration` (1.4.1 → [1.4.2](../../changelogs/@backstage/integration.md#142))
- `@backstage/integration-react` (1.1.8 → [1.1.9](../../changelogs/@backstage/integration-react.md#119))
- `@backstage/plugin-adr-common` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-adr-common.md#025))
- `@backstage/plugin-airbrake` (0.3.13 → [0.3.14](../../changelogs/@backstage/plugin-airbrake.md#0314))
- `@backstage/plugin-airbrake-backend` (0.2.12 → [0.2.13](../../changelogs/@backstage/plugin-airbrake-backend.md#0213))
- `@backstage/plugin-allure` (0.1.29 → [0.1.30](../../changelogs/@backstage/plugin-allure.md#0130))
- `@backstage/plugin-analytics-module-ga` (0.1.24 → [0.1.25](../../changelogs/@backstage/plugin-analytics-module-ga.md#0125))
- `@backstage/plugin-apache-airflow` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-apache-airflow.md#027))
- `@backstage/plugin-auth-backend` (0.17.2 → [0.17.3](../../changelogs/@backstage/plugin-auth-backend.md#0173))
- `@backstage/plugin-auth-node` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-auth-node.md#029))
- `@backstage/plugin-azure-devops-backend` (0.3.18 → [0.3.19](../../changelogs/@backstage/plugin-azure-devops-backend.md#0319))
- `@backstage/plugin-azure-sites-backend` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-azure-sites-backend.md#012))
- `@backstage/plugin-badges` (0.2.37 → [0.2.38](../../changelogs/@backstage/plugin-badges.md#0238))
- `@backstage/plugin-badges-backend` (0.1.33 → [0.1.34](../../changelogs/@backstage/plugin-badges-backend.md#0134))
- `@backstage/plugin-bazaar-backend` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-bazaar-backend.md#023))
- `@backstage/plugin-bitrise` (0.1.40 → [0.1.41](../../changelogs/@backstage/plugin-bitrise.md#0141))
- `@backstage/plugin-catalog-backend-module-bitbucket` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket.md#027))
- `@backstage/plugin-catalog-common` (1.0.9 → [1.0.10](../../changelogs/@backstage/plugin-catalog-common.md#1010))
- `@backstage/plugin-catalog-graphql` (0.3.16 → [0.3.17](../../changelogs/@backstage/plugin-catalog-graphql.md#0317))
- `@backstage/plugin-catalog-import` (0.9.3 → [0.9.4](../../changelogs/@backstage/plugin-catalog-import.md#094))
- `@backstage/plugin-cicd-statistics-module-gitlab` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-cicd-statistics-module-gitlab.md#0110))
- `@backstage/plugin-circleci` (0.3.13 → [0.3.14](../../changelogs/@backstage/plugin-circleci.md#0314))
- `@backstage/plugin-code-climate` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-code-climate.md#0114))
- `@backstage/plugin-code-coverage` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-code-coverage.md#027))
- `@backstage/plugin-codescene` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-codescene.md#019))
- `@backstage/plugin-config-schema` (0.1.36 → [0.1.37](../../changelogs/@backstage/plugin-config-schema.md#0137))
- `@backstage/plugin-dynatrace` (1.0.3 → [1.0.4](../../changelogs/@backstage/plugin-dynatrace.md#104))
- `@backstage/plugin-events-backend-module-azure` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-events-backend-module-azure.md#012))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#012))
- `@backstage/plugin-events-backend-module-gerrit` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#012))
- `@backstage/plugin-events-backend-module-github` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-events-backend-module-github.md#012))
- `@backstage/plugin-events-backend-module-gitlab` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#012))
- `@backstage/plugin-events-backend-test-utils` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-events-backend-test-utils.md#012))
- `@backstage/plugin-events-node` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-events-node.md#021))
- `@backstage/plugin-explore-react` (0.0.24 → [0.0.25](../../changelogs/@backstage/plugin-explore-react.md#0025))
- `@backstage/plugin-gcalendar` (0.3.9 → [0.3.10](../../changelogs/@backstage/plugin-gcalendar.md#0310))
- `@backstage/plugin-github-deployments` (0.1.44 → [0.1.45](../../changelogs/@backstage/plugin-github-deployments.md#0145))
- `@backstage/plugin-github-issues` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-github-issues.md#023))
- `@backstage/plugin-github-pull-requests-board` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-github-pull-requests-board.md#018))
- `@backstage/plugin-gitops-profiles` (0.3.31 → [0.3.32](../../changelogs/@backstage/plugin-gitops-profiles.md#0332))
- `@backstage/plugin-gocd` (0.1.19 → [0.1.20](../../changelogs/@backstage/plugin-gocd.md#0120))
- `@backstage/plugin-graphiql` (0.2.45 → [0.2.46](../../changelogs/@backstage/plugin-graphiql.md#0246))
- `@backstage/plugin-graphql-backend` (0.1.29 → [0.1.30](../../changelogs/@backstage/plugin-graphql-backend.md#0130))
- `@backstage/plugin-jenkins-backend` (0.1.29 → [0.1.30](../../changelogs/@backstage/plugin-jenkins-backend.md#0130))
- `@backstage/plugin-jenkins-common` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-jenkins-common.md#0112))
- `@backstage/plugin-kafka` (0.3.13 → [0.3.14](../../changelogs/@backstage/plugin-kafka.md#0314))
- `@backstage/plugin-kafka-backend` (0.2.32 → [0.2.33](../../changelogs/@backstage/plugin-kafka-backend.md#0233))
- `@backstage/plugin-kubernetes-common` (0.5.0 → [0.5.1](../../changelogs/@backstage/plugin-kubernetes-common.md#051))
- `@backstage/plugin-newrelic` (0.3.31 → [0.3.32](../../changelogs/@backstage/plugin-newrelic.md#0332))
- `@backstage/plugin-newrelic-dashboard` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-newrelic-dashboard.md#027))
- `@backstage/plugin-org` (0.6.3 → [0.6.4](../../changelogs/@backstage/plugin-org.md#064))
- `@backstage/plugin-org-react` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-org-react.md#013))
- `@backstage/plugin-pagerduty` (0.5.6 → [0.5.7](../../changelogs/@backstage/plugin-pagerduty.md#057))
- `@backstage/plugin-periskop` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-periskop.md#0112))
- `@backstage/plugin-periskop-backend` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-periskop-backend.md#0111))
- `@backstage/plugin-permission-backend` (0.5.14 → [0.5.15](../../changelogs/@backstage/plugin-permission-backend.md#0515))
- `@backstage/plugin-permission-common` (0.7.2 → [0.7.3](../../changelogs/@backstage/plugin-permission-common.md#073))
- `@backstage/plugin-permission-node` (0.7.2 → [0.7.3](../../changelogs/@backstage/plugin-permission-node.md#073))
- `@backstage/plugin-playlist-backend` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-playlist-backend.md#023))
- `@backstage/plugin-playlist-common` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-playlist-common.md#014))
- `@backstage/plugin-proxy-backend` (0.2.33 → [0.2.34](../../changelogs/@backstage/plugin-proxy-backend.md#0234))
- `@backstage/plugin-rollbar` (0.4.13 → [0.4.14](../../changelogs/@backstage/plugin-rollbar.md#0414))
- `@backstage/plugin-rollbar-backend` (0.1.36 → [0.1.37](../../changelogs/@backstage/plugin-rollbar-backend.md#0137))
- `@backstage/plugin-search-backend-module-pg` (0.5.0 → [0.5.1](../../changelogs/@backstage/plugin-search-backend-module-pg.md#051))
- `@backstage/plugin-search-common` (1.2.0 → [1.2.1](../../changelogs/@backstage/plugin-search-common.md#121))
- `@backstage/plugin-sentry` (0.4.6 → [0.4.7](../../changelogs/@backstage/plugin-sentry.md#047))
- `@backstage/plugin-shortcuts` (0.3.5 → [0.3.6](../../changelogs/@backstage/plugin-shortcuts.md#036))
- `@backstage/plugin-sonarqube-backend` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-sonarqube-backend.md#015))
- `@backstage/plugin-sonarqube-react` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-sonarqube-react.md#011))
- `@backstage/plugin-splunk-on-call` (0.4.2 → [0.4.3](../../changelogs/@backstage/plugin-splunk-on-call.md#043))
- `@backstage/plugin-tech-insights` (0.3.5 → [0.3.6](../../changelogs/@backstage/plugin-tech-insights.md#036))
- `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.23 → [0.1.24](../../changelogs/@backstage/plugin-tech-insights-backend-module-jsonfc.md#0124))
- `@backstage/plugin-tech-insights-node` (0.3.7 → [0.3.8](../../changelogs/@backstage/plugin-tech-insights-node.md#038))
- `@backstage/plugin-techdocs-addons-test-utils` (1.0.8 → [1.0.9](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#109))
- `@backstage/plugin-techdocs-backend` (1.5.0 → [1.5.1](../../changelogs/@backstage/plugin-techdocs-backend.md#151))
- `@backstage/plugin-techdocs-module-addons-contrib` (1.0.8 → [1.0.9](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#109))
- `@backstage/plugin-techdocs-node` (1.4.3 → [1.4.4](../../changelogs/@backstage/plugin-techdocs-node.md#144))
- `@backstage/plugin-todo` (0.2.15 → [0.2.16](../../changelogs/@backstage/plugin-todo.md#0216))
- `@backstage/plugin-todo-backend` (0.1.36 → [0.1.37](../../changelogs/@backstage/plugin-todo-backend.md#0137))
- `@backstage/plugin-user-settings-backend` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-user-settings-backend.md#014))
- `@backstage/plugin-vault` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-vault.md#018))
- `@backstage/plugin-vault-backend` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-vault-backend.md#026))
- `@backstage/test-utils` (1.2.3 → [1.2.4](../../changelogs/@backstage/test-utils.md#124))
