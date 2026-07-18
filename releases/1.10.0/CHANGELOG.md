# Backstage Release 1.10.0 changelog

Changes between 1.9.1 and 1.10.0 — 169 changed and 2 added packages.

## Summary

- [Newly added packages](#newly-added-packages): 2 packages
- [Breaking changes](#breaking-changes): 3 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 2 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 1 package
- [Other minor version bumps](#other-minor-version-bumps): 9 packages
- [Other patch version bumps](#other-patch-version-bumps): 69 packages

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

## Newly added packages

### `@backstage/plugin-scaffolder-backend-module-sentry` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- 66ff367af6: Add Sentry "Create Project" Scaffolder as new package

### `@backstage/plugin-scaffolder-react` (new, 1.0.0)

#### 1.0.0

##### Major Changes

- b4955ed7b9: Re-home some of the common types, components, hooks and `scaffolderApiRef` for the `@backstage/plugin-scaffolder` to this package for easy re-use across things that want to interact with the `scaffolder`.

## Breaking changes

### `@backstage/backend-app-api` (0.2.4 → 0.3.0)

#### 0.3.0

##### Minor Changes

- 02b119ff93: **BREAKING**: The `httpRouterFactory` now accepts a `getPath` option rather than `indexPlugin`. To set up custom index path, configure the new `rootHttpRouterFactory` with a custom `indexPath` instead.

  Added an implementation for the new `rootHttpRouterServiceRef`.

##### Patch Changes

- ecc6bfe4c9: Use new `ServiceFactoryOrFunction` type.
- b99c030f1b: Moved over implementation of the root HTTP service from `@backstage/backend-common`, and replaced the `middleware` option with a `configure` callback option.
- 170282ece6: Fixed a bug in the default token manager factory where it created multiple incompatible instances.
- 843a0a158c: Added service factory for the new core identity service.
- 150a7dd790: An error will now be thrown if attempting to override the plugin metadata service.
- 483e907eaf: Internal updates of `createServiceFactory` from `@backstage/backend-plugin-api`.
- 015a6dced6: The `createSpecializedBackend` function will now throw an error if duplicate service implementations are provided.
- e3fca10038: Tweaked the plugin logger to use `plugin` as the label for the plugin ID, rather than `pluginId`.
- ecbec4ec4c: Internal refactor to match new options pattern in the experimental backend system.
- 51b7a7ed07: Exported the default root HTTP router implementation as `DefaultRootHttpRouter`. It only implements the routing layer and needs to be exposed via an HTTP server similar to the built-in setup in the `rootHttpRouterFactory`.
- 0e63aab311: Moved over logging and configuration loading implementations from `@backstage/backend-common`. There is a now `WinstonLogger` which implements the `RootLoggerService` through Winston with accompanying utilities. For configuration the `loadBackendConfig` function has been moved over, but it now instead returns an object with a `config` property.
- 8e06f3cf00: Switched imports of `loggerToWinstonLogger` to `@backstage/backend-common`.
- 3b8fd4169b: Internal folder structure refactor.
- 6cfd4d7073: Updated implementations for the new `RootLifecycleService`.

### `@backstage/backend-common` (0.17.0 → 0.18.0)

#### 0.18.0

##### Minor Changes

- 5e2cebe9a3: **BREAKING**: Removed deprecated `read` method from the `UrlReader` interface. All implementations should use the `readUrl` method instead.

  Migrated `UrlReader` and related types to `backend/backend-plugin-api`, types remain re-exported from `backend-common` for now.

##### Patch Changes

- 0e63aab311: Internal refactor of the logger and configuration loading implementations.
- 31e2309c8c: Added `legacyPlugin` and the lower level `makeLegacyPlugin` wrappers that convert legacy plugins to the new backend system. This will be used to ease the future migration to the new backend system, but we discourage use of it for now.
- 8e06f3cf00: Added `loggerToWinstonLogger`, which was moved from `@backstage/backend-plugin-api`.
- 2b1554cebf: Replaced dependencies on the `Logger` type from `winston` with `LoggerService` from `@backstage/backend-plugin-api`. This is not a breaking change as the `LoggerService` is a subset of the `Logger` interface.
- 5437fe488f: Migrated types related to `TokenManagerService`, `CacheService` and `DatabaseService` into backend-plugin-api.
- 6f02d23b01: Moved `PluginEndpointDiscovery` type from backend-common to backend-plugin-api.
- d592ec4f51: Updated the logger created by `createRootLogger` to make it possible to override the default `service` log label.
- b99c030f1b: Refactor to rely on `@backstage/backend-app-api` for the implementation of `createServiceBuilder`.
- f23eef3aa2: Updated dependency `better-sqlite3` to `^8.0.0`.

### `@backstage/plugin-adr` (0.2.5 → 0.3.0)

#### 0.3.0

##### Minor Changes

- e4469d0ec1: The ADR plugin can now work with sites other than GitHub. Expanded the ADR backend plugin to provide endpoints to facilitate this.

  **BREAKING** The ADR plugin now requires the `@backstage/plugin-adr-backend` plugin to be installed by using the `createRouter` method to add into your `backend`. You read more in the [install instructions](https://github.com/backstage/backstage/blob/master/plugins/adr-backend/README.md#install)

##### Patch Changes

- 21ffbdd5ee: Clarify that default ADR parsers support MADR specification v2.x
- 80ce4e8c29: Small updates to some components to ensure theme typography properties are inherited correctly.

## 0.x minor version bumps

### `@backstage/backend-plugin-api` (0.2.0 → 0.3.0)

#### 0.3.0

##### Minor Changes

- 8e06f3cf00: Moved `loggerToWinstonLogger` to `@backstage/backend-common`.
- ecbec4ec4c: Updated all factory function creators to accept options as a top-level callback rather than extra parameter to the main factory function.

##### Patch Changes

- 6cfd4d7073: Added `RootLifecycleService` and `rootLifecycleServiceRef`, as well as added a `logger` option to the existing `LifecycleServiceShutdownHook`.
- ecc6bfe4c9: Added `ServiceFactoryOrFunction` type, for use when either a `ServiceFactory` or `() => ServiceFactory` can be used.
- 5b7bcd3c5e: Added `createSharedEnvironment` for creating a shared environment containing commonly used services in a split backend setup of the backend.
- 02b119ff93: Added a new `rootHttpRouterServiceRef` and `RootHttpRouterService` interface.
- 5e2cebe9a3: Migrate `UrlReader` into this package to gradually remove the dependency on backend-common.
- 843a0a158c: Added new core identity service.
- 5437fe488f: Migrated types related to `TokenManagerService`, `CacheService` and `DatabaseService` into backend-plugin-api.
- 6f02d23b01: Moved `PluginEndpointDiscovery` type from backend-common to backend-plugin-api.
- 483e907eaf: The `createServiceFactory` function has been updated to no longer use a duplicate callback pattern for plugin scoped services. The outer callback is now replaced by an optional `createRootContext` method. This change was made in order to support TypeScript 4.9, but it also simplifies the API surface a bit, especially for plugin scoped service factories that don't need to create a root context. In addition, the factory and root context functions can now be synchronous.

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

- 16054afdec: Documented `coreServices` an all of its members.
- 0e63aab311: Updated the `RootLoggerService` to also have an `addRedactions` method.
- 62b04bb865: Updates all `create*` methods to simplify their type definitions and ensure they all have configuration interfaces.

### `@backstage/plugin-tech-radar` (0.5.20 → 0.6.0)

#### 0.6.0

##### Minor Changes

- 38fd519fc1: Add highlighting of legend item and show bubble on hover within the Tech Radar

##### Patch Changes

- 27a5e90e97: Small updates to some paragraph components to ensure theme typography properties are inherited correctly.
- 80ce4e8c29: Small updates to some components to ensure theme typography properties are inherited correctly.

## 0.0.x patch version bumps

### `@backstage/plugin-explore-backend` (0.0.1 → 0.0.2)

#### 0.0.2

##### Patch Changes

- 358554ff3c: Bump `msw` to `^0.49.0`
- 9f9d279bd1: Updated `README.md` examples

## Other minor version bumps

### `@backstage/app-defaults` (1.0.10 → 1.1.0)

#### 1.1.0

##### Minor Changes

- bca8e8b393: Allow defining application level feature flags. See [Feature Flags documentation](https://backstage.io/docs/plugins/feature-flags#in-the-application) for reference.

### `@backstage/catalog-client` (1.2.0 → 1.3.0)

#### 1.3.0

##### Minor Changes

- f75bf76330: Implemented support for the `order` directive on `getEntities`

##### Patch Changes

- e23f13a573: Enable the `by-refs` endpoint to receive `fields` through the POST body as well as through query parameters.

### `@backstage/core-app-api` (1.3.0 → 1.4.0)

#### 1.4.0

##### Minor Changes

- bca8e8b393: Allow defining application level feature flags. See [Feature Flags documentation](https://backstage.io/docs/plugins/feature-flags#in-the-application) for reference.

### `@backstage/core-plugin-api` (1.2.0 → 1.3.0)

#### 1.3.0

##### Minor Changes

- bca8e8b393: Allow defining application level feature flags. See [Feature Flags documentation](https://backstage.io/docs/plugins/feature-flags#in-the-application) for reference.

### `@backstage/plugin-catalog-backend` (1.6.0 → 1.7.0)

#### 1.7.0

##### Minor Changes

- f75bf76330: Implemented server side ordering in the entities endpoint

##### Patch Changes

- e23f13a573: Enable the `by-refs` endpoint to receive `fields` through the POST body as well as through query parameters.
- f23eef3aa2: Updated dependency `better-sqlite3` to `^8.0.0`.
- d136793ff0: Fixed an issue where internal references in the catalog would stick around for longer than expected, causing entities to not be deleted or orphaned as expected.
- 8e06f3cf00: Switched imports of `loggerToWinstonLogger` to `@backstage/backend-common`.

### `@backstage/plugin-scaffolder` (1.9.1 → 1.10.0)

#### 1.10.0

##### Minor Changes

- e4c0240445: Added `catalogFilter` field to OwnerPicker and EntityPicker components to support filtering options by any field(s) of an entity.

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

- b4955ed7b9: - **Deprecation** - Deprecated the following exports, please import them directly from `@backstage/plugin-scaffolder-react` instead

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

- 3c112f6967: rollback `@rjsf/validator-ajv8` to `@rjsf/validator-v6`
- 2fadff2a25: Render the scaffolder action description using the `MarkdownContent` component. This will allow the page to show richer content to describe scaffolder actions.
- 27a5e90e97: Small updates to some paragraph components to ensure theme typography properties are inherited correctly.
- 223e2c5f03: add `onChange` handler to`Stepper` component
- 659c92a1dc: Updated dependency `use-immer` to `^0.8.0`.
- 489935d625: Show action example yaml on the scaffolder actions documentation page.
- b8269de9f1: Explicitly declaring children as optional props to facilitate react 18 changes

### `@backstage/plugin-scaffolder-backend` (1.9.0 → 1.10.0)

#### 1.10.0

##### Minor Changes

- a6808b67a7: Implement `Required approving review count`, `Restrictions`, and `Required commit signing` support for `publish:github` action
- 04a2048fb8: Allow custom repository roles to be configured on github repos
- c0ad7341f7: Add Scaffolder action `catalog:fetch` to get entity by entity reference from catalog
- b44eb68bcb: This change adds changes to provide examples alongside scaffolder task actions.

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

- 72d6b9f4e2: Added ability to override the commit message and author details for the `publish:bitbucketServer` action.
- a69664faee: Add Github repository support for squash merge commit title and message options

##### Patch Changes

- 2fadff2a25: Change scaffolder task actions to include markdown to demonstrate the new `ActionsPage` markdown feature.
- ecbec4ec4c: Internal refactor to match new options pattern in the experimental backend system.
- e4c0240445: Added `catalogFilter` field to OwnerPicker and EntityPicker components to support filtering options by any field(s) of an entity.

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

- 8e06f3cf00: Switched imports of `loggerToWinstonLogger` to `@backstage/backend-common`.

### `@backstage/plugin-search-react` (1.3.1 → 1.4.0)

#### 1.4.0

##### Minor Changes

- 6d9a93def8: Allow customizing empty state component through `noResultsComponent` property.

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

- 80ce4e8c29: Small updates to some components to ensure theme typography properties are inherited correctly.

### `@techdocs/cli` (1.2.4 → 1.3.0)

#### 1.3.0

##### Minor Changes

- bc18c902a2: Add `--preview-app-bundle-path` and `--preview-app-port` options to the `serve` command enabling previewing with apps other than the provided one

##### Patch Changes

- 9f2b786fc9: Provide context for logged errors.

## Other patch version bumps

### `@backstage/backend-defaults` (0.1.4 → 0.1.5)

#### 0.1.5

##### Patch Changes

- 6cfd4d7073: Include implementations for the new `rootLifecycleServiceRef`.
- ecc6bfe4c9: Use new `ServiceFactoryOrFunction` type.
- 015a6dced6: Updated to make sure that service implementations replace default service implementations.
- 843a0a158c: Added factory for the new core identity service to the set of default service factories.
- 5b7bcd3c5e: Added support to supply a shared environment to `createBackend`, which can be created using `createSharedEnvironment` from `@backstage/backend-plugin-api`.
- 02b119ff93: The new root HTTP router service is now installed by default.

### `@backstage/backend-tasks` (0.4.0 → 0.4.1)

#### 0.4.1

##### Patch Changes

- 3fad4ed40a: Added a new static `TaskScheduler.forPlugin` method.
- b99c030f1b: Minor internal refactor to avoid import cycle issue.

### `@backstage/backend-test-utils` (0.1.31 → 0.1.32)

#### 0.1.32

##### Patch Changes

- 6cfd4d7073: Include implementations for the new `rootLifecycleServiceRef`.
- 015a6dced6: Updated to make sure that service implementations replace default service implementations.
- a3ec2f32ea: The `startTestBackend` setup now includes default implementations for all core services.
- 483e907eaf: Internal updates of `createServiceFactory` from `@backstage/backend-plugin-api`.
- 51b7a7ed07: The backend started by `startTestBackend` now has default implementations of all core services. It now also returns a `TestBackend` instance, which provides access to the underlying `server` that can be used with testing libraries such as `supertest`.
- f23eef3aa2: Updated dependency `better-sqlite3` to `^8.0.0`.

### `@backstage/catalog-model` (1.1.4 → 1.1.5)

#### 1.1.5

##### Patch Changes

- 011bd518b7: Fixed spelling mistakes in documentation.

### `@backstage/cli` (0.22.0 → 0.22.1)

#### 0.22.1

##### Patch Changes

- db2e137744: Removed unnecessary usage of `ThemeProvider` from the `ExampleComponent` test in the plugin template.
- 47c10706df: Fixed an issue where the CLI would fail to function when there was a mix of workspace and non-workspace versions of the same package in `yarn.lock` when using Yarn 3.
- 2b435be4cf: Updated backend plugin ID during creation to match user-entered input.
- 4b572126f1: Add experimental environment variable to enable caching for production builds.
- 7b407b303b: Slightly improve readability of "base URL conflict" error handling code
- a62a1f9dca: The frontend serve task now filters out allowed package duplicates during its package check, just like `versions:bump` and `versions:check`.
- d06a7890c6: Removed unused package `type-fest`
- 7c8a974515: The `repo test`, `repo lint`, and `repo build` commands will now analyze `yarn.lock` for dependency changes when searching for changed packages. This allows you to use the `--since <ref>` flag even if you have `yarn.lock` changes.
- e1b71e142e: Workspace ranges are no longer considered invalid by version commands.

### `@backstage/config` (1.0.5 → 1.0.6)

#### 1.0.6

##### Patch Changes

- ba2d69ee17: Adds the ability to coerce values to their boolean representatives.
  Values such as `"true"` `1` `on` and `y` will become `true` when using `getBoolean` and the opposites `false`.
  This happens particularly when such parameters are used with environmental substitution as environment variables are always strings.

### `@backstage/core-components` (0.12.2 → 0.12.3)

#### 0.12.3

##### Patch Changes

- f2ea446de0: Applied fix from v1.9.1
- 80ce4e8c29: Small updates to some components to ensure theme typography properties are inherited correctly.
- f23146520e: Ensure that the "Custom User" sign-in makes use of supplied custom tokens, if any

### `@backstage/create-app` (0.4.35 → 0.4.36)

#### 0.4.36

##### Patch Changes

- f834622f56: Bumped create-app version.
- 724b55689b: Avoid potential temporary directory conflict.
- a2a70504e3: Remove deprecated `create-plugin` script from the `default-app` template's `package.json.hbs`.
  Also, update the documentation to not mention the `create-plugin` script and instead mention
  the `new` script.
- 016a52c28f: Bumped the minimum version of `better-sqlite3`. You can make the following change to your `packages/backend/package.json` to keep your instance of Backstage updated.

  ```diff
  - "better-sqlite3": "^7.5.0",
  + "better-sqlite3": "^8.0.0",
  ```

### `@backstage/integration-aws-node` (0.1.0 → 0.1.1)

#### 0.1.1

##### Patch Changes

- 89062b8ba0: Skip STS API calls where not needed, to support Minio use cases

### `@backstage/plugin-adr-backend` (0.2.4 → 0.2.5)

#### 0.2.5

##### Patch Changes

- aa17643a06: This plugin now exports a `createRouter` method which uses `UrlReaders` to make requests to your SCM. Please make sure you read the [install instructions](https://github.com/backstage/backstage/blob/master/plugins/adr-backend/README.md#install)
- 21ffbdd5ee: Clarify that default ADR parsers support MADR specification v2.x

### `@backstage/plugin-api-docs` (0.8.13 → 0.8.14)

#### 0.8.14

##### Patch Changes

- 80ce4e8c29: Small updates to some components to ensure theme typography properties are inherited correctly.

### `@backstage/plugin-apollo-explorer` (0.1.6 → 0.1.7)

#### 0.1.7

##### Patch Changes

- e8269bca15: Updated dependency `@apollo/explorer` to `^2.0.0`.

### `@backstage/plugin-app-backend` (0.3.39 → 0.3.40)

#### 0.3.40

##### Patch Changes

- b4ffa3bd91: The warning for missing app contents is now logged as an error instead, but only in production.
- ecbec4ec4c: Internal refactor to match new options pattern in the experimental backend system.
- 8e06f3cf00: Switched imports of `loggerToWinstonLogger` to `@backstage/backend-common`.

### `@backstage/plugin-azure-devops` (0.2.4 → 0.2.5)

#### 0.2.5

##### Patch Changes

- 80ce4e8c29: Small updates to some components to ensure theme typography properties are inherited correctly.

### `@backstage/plugin-azure-sites` (0.1.2 → 0.1.3)

#### 0.1.3

##### Patch Changes

- 80ce4e8c29: Small updates to some components to ensure theme typography properties are inherited correctly.

### `@backstage/plugin-bazaar` (0.2.2 → 0.2.3)

#### 0.2.3

##### Patch Changes

- 0bf734dbac: Created soft cut on `ProjectCard` to indicate more content.
- 41d0b0a24a: Added `isBazaarAvailable` helper to be used with the `EntitySwitch`.
- 92a33f0ae3: Updated README.md to include instructions of installing the Bazaar Backend
- 99d52523c7: Allow customisation of title and subtitle on bazaar page.
- 27a5e90e97: Small updates to some paragraph components to ensure theme typography properties are inherited correctly.
- 80ce4e8c29: Small updates to some components to ensure theme typography properties are inherited correctly.

### `@backstage/plugin-bitbucket-cloud-common` (0.2.2 → 0.2.3)

#### 0.2.3

##### Patch Changes

- 0358d399ad: Updated dependency `ts-morph` to `^17.0.0`.

### `@backstage/plugin-catalog` (1.7.1 → 1.7.2)

#### 1.7.2

##### Patch Changes

- cebe24ef1d: Add `EntityLabelsCard` to show the labels for an entity.
- 5353b4df61: There is now tooltip in the entity context menu

### `@backstage/plugin-catalog-backend-module-aws` (0.1.12 → 0.1.13)

#### 0.1.13

##### Patch Changes

- 9f2b786fc9: Provide context for logged errors.
- 8e06f3cf00: Switched imports of `loggerToWinstonLogger` to `@backstage/backend-common`.

### `@backstage/plugin-catalog-backend-module-azure` (0.1.10 → 0.1.11)

#### 0.1.11

##### Patch Changes

- 9f2b786fc9: Provide context for logged errors.
- 8e06f3cf00: Switched imports of `loggerToWinstonLogger` to `@backstage/backend-common`.

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.6 → 0.1.7)

#### 0.1.7

##### Patch Changes

- 9f2b786fc9: Provide context for logged errors.
- 8e06f3cf00: Switched imports of `loggerToWinstonLogger` to `@backstage/backend-common`.

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.4 → 0.1.5)

#### 0.1.5

##### Patch Changes

- 9f2b786fc9: Provide context for logged errors.
- 8e06f3cf00: Switched imports of `loggerToWinstonLogger` to `@backstage/backend-common`.

### `@backstage/plugin-catalog-backend-module-gerrit` (0.1.7 → 0.1.8)

#### 0.1.8

##### Patch Changes

- 9f2b786fc9: Provide context for logged errors.
- 8e06f3cf00: Switched imports of `loggerToWinstonLogger` to `@backstage/backend-common`.

### `@backstage/plugin-catalog-backend-module-github` (0.2.2 → 0.2.3)

#### 0.2.3

##### Patch Changes

- 427d8f4411: Added support for event based updates in the `GithubOrgEntityProvider`!
  Based on webhook events from GitHub the affected `User` or `Group` entity will be refreshed.
  This includes adding new entities, refreshing existing ones, and removing obsolete ones.

  Please find more information at
  https://backstage.io/docs/integrations/github/org#installation-with-events-support

- f8d91a8810: fixed `catalogPath` option to properly glob match on received GitHub events.
- 9f2b786fc9: Provide context for logged errors.
- 8e06f3cf00: Switched imports of `loggerToWinstonLogger` to `@backstage/backend-common`.

### `@backstage/plugin-catalog-backend-module-gitlab` (0.1.10 → 0.1.11)

#### 0.1.11

##### Patch Changes

- 9f2b786fc9: Provide context for logged errors.
- 8e06f3cf00: Switched imports of `loggerToWinstonLogger` to `@backstage/backend-common`.

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.1.0 → 0.1.1)

#### 0.1.1

##### Patch Changes

- ecbec4ec4c: Internal refactor to match new options pattern in the experimental backend system.
- 045b66ce02: Fixed issue with sometimes trying to commit an empty array of references
- 9f2b786fc9: Provide context for logged errors.
- 8e06f3cf00: Switched imports of `loggerToWinstonLogger` to `@backstage/backend-common`.

### `@backstage/plugin-catalog-backend-module-ldap` (0.5.6 → 0.5.7)

#### 0.5.7

##### Patch Changes

- 9f2b786fc9: Provide context for logged errors.

### `@backstage/plugin-catalog-backend-module-msgraph` (0.4.5 → 0.4.6)

#### 0.4.6

##### Patch Changes

- 9f2b786fc9: Provide context for logged errors.
- 8e06f3cf00: Switched imports of `loggerToWinstonLogger` to `@backstage/backend-common`.

### `@backstage/plugin-catalog-backend-module-openapi` (0.1.5 → 0.1.6)

#### 0.1.6

##### Patch Changes

- f9abdb64fc: Updated internal usage of UrlReader interface.

### `@backstage/plugin-catalog-graph` (0.2.25 → 0.2.26)

#### 0.2.26

##### Patch Changes

- 99f05cbc70: The link from the `CatalogGraphCard` to the `CatalogGraphPage` no longer includes an explicit `maxDepth` parameter, letting the `CatalogGraphPage` choose the initial `maxDepth` instead.

### `@backstage/plugin-catalog-node` (1.3.0 → 1.3.1)

#### 1.3.1

##### Patch Changes

- 483e907eaf: Internal updates of `createServiceFactory` from `@backstage/backend-plugin-api`.

### `@backstage/plugin-catalog-react` (1.2.3 → 1.2.4)

#### 1.2.4

##### Patch Changes

- 37426f6f5e: Fixed bug in `EntityTagPicker` that filtered on unavailable tags for the selected kind.
- 516b2039b6: Add a reusable pop over `EntityPeekAheadPopover` component. It shows more details about the associated entity. See the playbook here https://backstage.io/storybook/?path=/story/catalog-entitypeekaheadpopover--default
- 0e33627996: Remove usage of raw span

### `@backstage/plugin-cicd-statistics` (0.1.15 → 0.1.16)

#### 0.1.16

##### Patch Changes

- 80ce4e8c29: Small updates to some components to ensure theme typography properties are inherited correctly.

### `@backstage/plugin-cloudbuild` (0.3.13 → 0.3.14)

#### 0.3.14

##### Patch Changes

- 1188407632: Fixed bug in the CloudbuildClient reRunWorkflow fetch call. The method in the fetch request was not specified and defaulted to a GET. Method is now explicitly set to POST with this change.

### `@backstage/plugin-code-coverage-backend` (0.2.5 → 0.2.6)

#### 0.2.6

##### Patch Changes

- dcfdaeccd3: `RouterOptions` now accepts an optional `catalogApi` argument, allowing custom catalog clients to be used. This is leveraged in the local standalone development runner to pass in a catalog client that returns fake data.

### `@backstage/plugin-cost-insights` (0.12.2 → 0.12.3)

#### 0.12.3

##### Patch Changes

- 6a41175d70: Removed @backstage/test-utils dependency, since it was already in the devDependencies where it belongs. The main benefit is that this will exclude better-sqlite3 from the production build.
- 80ce4e8c29: Small updates to some components to ensure theme typography properties are inherited correctly.

### `@backstage/plugin-events-backend` (0.2.0 → 0.2.1)

#### 0.2.1

##### Patch Changes

- 217149ae98: The default event broker will now catch and log errors thrown by the `onEvent` method of subscribers. The returned promise from `publish` method will also not resolve until all subscribers have handled the event.
- 8e06f3cf00: Switched imports of `loggerToWinstonLogger` to `@backstage/backend-common`.

### `@backstage/plugin-events-backend-module-aws-sqs` (0.1.1 → 0.1.2)

#### 0.1.2

##### Patch Changes

- 9f2b786fc9: Provide context for logged errors.
- 8e06f3cf00: Switched imports of `loggerToWinstonLogger` to `@backstage/backend-common`.

### `@backstage/plugin-explore` (0.3.44 → 0.3.45)

#### 0.3.45

##### Patch Changes

- 9f9d279bd1: Updated `README.md` examples
- d318d4f659: Makes the `GroupsDiagram` not grown on screen on its own.

### `@backstage/plugin-firehydrant` (0.1.30 → 0.1.31)

#### 0.1.31

##### Patch Changes

- 80ce4e8c29: Small updates to some components to ensure theme typography properties are inherited correctly.

### `@backstage/plugin-fossa` (0.2.45 → 0.2.46)

#### 0.2.46

##### Patch Changes

- 27a5e90e97: Small updates to some paragraph components to ensure theme typography properties are inherited correctly.
- 80ce4e8c29: Small updates to some components to ensure theme typography properties are inherited correctly.

### `@backstage/plugin-gcp-projects` (0.3.32 → 0.3.33)

#### 0.3.33

##### Patch Changes

- 80ce4e8c29: Small updates to some components to ensure theme typography properties are inherited correctly.

### `@backstage/plugin-git-release-manager` (0.3.26 → 0.3.27)

#### 0.3.27

##### Patch Changes

- 8024341620: add exports to clear api-report messages
- 80ce4e8c29: Small updates to some components to ensure theme typography properties are inherited correctly.

### `@backstage/plugin-github-actions` (0.5.13 → 0.5.14)

#### 0.5.14

##### Patch Changes

- 27a5e90e97: Small updates to some paragraph components to ensure theme typography properties are inherited correctly.

### `@backstage/plugin-home` (0.4.29 → 0.4.30)

#### 0.4.30

##### Patch Changes

- 27a5e90e97: Small updates to some paragraph components to ensure theme typography properties are inherited correctly.
- 80ce4e8c29: Small updates to some components to ensure theme typography properties are inherited correctly.

### `@backstage/plugin-ilert` (0.2.2 → 0.2.3)

#### 0.2.3

##### Patch Changes

- b1279d396d: fixed error on service page not showing if historical uptime was disabled on a service

### `@backstage/plugin-jenkins` (0.7.12 → 0.7.13)

#### 0.7.13

##### Patch Changes

- 27a5e90e97: Small updates to some paragraph components to ensure theme typography properties are inherited correctly.

### `@backstage/plugin-kubernetes` (0.7.6 → 0.7.7)

#### 0.7.7

##### Patch Changes

- 27a5e90e97: Small updates to some paragraph components to ensure theme typography properties are inherited correctly.

### `@backstage/plugin-kubernetes-backend` (0.9.0 → 0.9.1)

#### 0.9.1

##### Patch Changes

- 083bf1b9fa: fixes a bug affecting clusters that have a base path in the URL. The base path was being replaced with the resource path instead of being appended
- c6f29bfcdc: Added the missing auth provider googleServiceAccount in config schema.

### `@backstage/plugin-lighthouse` (0.3.13 → 0.3.14)

#### 0.3.14

##### Patch Changes

- 2f1b283de2: Fixed bug in Lighthouse Plugin where audit list item and create audit button navigated to a wrong URL.
- 80ce4e8c29: Small updates to some components to ensure theme typography properties are inherited correctly.

### `@backstage/plugin-permission-react` (0.4.8 → 0.4.9)

#### 0.4.9

##### Patch Changes

- 1a53a735b7: Updated dependency `swr` to `^2.0.0`.

### `@backstage/plugin-playlist` (0.1.4 → 0.1.5)

#### 0.1.5

##### Patch Changes

- 1a53a735b7: Updated dependency `swr` to `^2.0.0`.

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.14 → 0.2.15)

#### 0.2.15

##### Patch Changes

- e4c0240445: Added `catalogFilter` field to OwnerPicker and EntityPicker components to support filtering options by any field(s) of an entity.

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

### `@backstage/plugin-scaffolder-backend-module-rails` (0.4.7 → 0.4.8)

#### 0.4.8

##### Patch Changes

- 268b8634f9: handle skipActiveRecord rails new argument
- 2fadff2a25: Change scaffolder task actions to include markdown to demonstrate the new `ActionsPage` markdown feature.
- e4c0240445: Added `catalogFilter` field to OwnerPicker and EntityPicker components to support filtering options by any field(s) of an entity.

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

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.12 → 0.2.13)

#### 0.2.13

##### Patch Changes

- e4c0240445: Added `catalogFilter` field to OwnerPicker and EntityPicker components to support filtering options by any field(s) of an entity.

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

### `@backstage/plugin-scaffolder-common` (1.2.3 → 1.2.4)

#### 1.2.4

##### Patch Changes

- 011bd518b7: Fixed spelling mistakes in documentation.

### `@backstage/plugin-search` (1.0.6 → 1.0.7)

#### 1.0.7

##### Patch Changes

- a24387c6de: When the search modal is opened, the focus is placed on the search bar input field.
- 80ce4e8c29: Small updates to some components to ensure theme typography properties are inherited correctly.

### `@backstage/plugin-search-backend` (1.2.0 → 1.2.1)

#### 1.2.1

##### Patch Changes

- bfd66b0478: Allow max page limit for search results to be configurable

### `@backstage/plugin-search-backend-module-elasticsearch` (1.1.0 → 1.1.1)

#### 1.1.1

##### Patch Changes

- 011bd518b7: Fixed spelling mistakes in documentation.
- 1e1a9fe979: Fixed a bug that could cause an indexing process to silently fail, timeout, and accumulate stale indices.
- 2a49ffbcb3: Improved documentation on the `ElasticSearchSearchEngine.newClient()` method.
- 56633804dd: Fixed a bug that could cause the backstage backend to unexpectedly terminate when client errors were encountered during the indexing process.
- aa33a06894: Improved index throughput by optimizing when and how many documents were made available to the bulk client.

### `@backstage/plugin-search-backend-node` (1.1.0 → 1.1.1)

#### 1.1.1

##### Patch Changes

- 011bd518b7: Fixed spelling mistakes in documentation.

### `@backstage/plugin-sonarqube` (0.6.1 → 0.6.2)

#### 0.6.2

##### Patch Changes

- 80ce4e8c29: Small updates to some components to ensure theme typography properties are inherited correctly.

### `@backstage/plugin-stack-overflow` (0.1.9 → 0.1.10)

#### 0.1.10

##### Patch Changes

- 27a5e90e97: Small updates to some paragraph components to ensure theme typography properties are inherited correctly.

### `@backstage/plugin-stack-overflow-backend` (0.1.8 → 0.1.9)

#### 0.1.9

##### Patch Changes

- 06f6a4f0f1: Enable configuration override for StackOverflow backend plugin when instantiating the search indexer. This makes it possible to set different configuration for frontend and backend of the plugin.

### `@backstage/plugin-tech-insights-backend` (0.5.5 → 0.5.6)

#### 0.5.6

##### Patch Changes

- 7a38a31699: Complete check results run when a single check errors so that we don't block other checks from working due to an error in a single check
- 44c18b4d3f: Expose optional `persistenceContext` on `TechInsights` construction to enable integrators to provide their own database implementations for fact handling.
- b48317cfc6: Modifies database cleanup to remove all facts for entities instead of hand-picked ones only. Improves query execution a lot in large datasets.
  Changes semantics of the lifecycle deletion logic slightly for cases were historical entities/facts, that are , not present in the application anymore, were kept forever instead of being cleaned up. The new implementation is more along the expected lines.

### `@backstage/plugin-techdocs` (1.4.2 → 1.4.3)

#### 1.4.3

##### Patch Changes

- a74dd61534: Fix sizing of build log component to render all lines
- 80ce4e8c29: Small updates to some components to ensure theme typography properties are inherited correctly.
- 7115c7389b: Updated dependency `jss` to `~10.9.0`.

### `@backstage/plugin-techdocs-react` (1.1.1 → 1.1.2)

#### 1.1.2

##### Patch Changes

- 7115c7389b: Updated dependency `jss` to `~10.9.0`.
- b8269de9f1: Explicitly declaring children as optional props to facilitate react 18 changes

### `@backstage/plugin-user-settings` (0.6.1 → 0.6.2)

#### 0.6.2

##### Patch Changes

- a942f70435: Minor update to the `UserSettingsIdentityCard` to have clickable entity refs
- d61f622db8: Refactor for the feature flag filter functionality
- 80ce4e8c29: Small updates to some components to ensure theme typography properties are inherited correctly.
- bca8e8b393: Feature flags now accept a description property.

### `@backstage/plugin-xcmetrics` (0.2.33 → 0.2.34)

#### 0.2.34

##### Patch Changes

- 27a5e90e97: Small updates to some paragraph components to ensure theme typography properties are inherited correctly.

### `@backstage/repo-tools` (0.1.0 → 0.1.1)

#### 0.1.1

##### Patch Changes

- c447a5221b: Use the project tsconfig in case of selection all packages
- 93cff3053e: Move some dependencies as `peerDependencies` because we need to always use same version as in `api-extractor`
- d48cf39f2a: fix glob on windows os
- 75275b0b0b: Updated dependency `@microsoft/tsdoc-config` to `0.16.2`.
- 76fc6f7ec8: Updates Api-extractor and api-documenter version

_Excluded dependency updates for packages: `@backstage/config-loader`, `@backstage/dev-utils`, `@backstage/integration`, `@backstage/integration-react`, `@backstage/plugin-adr-common`, `@backstage/plugin-airbrake`, `@backstage/plugin-airbrake-backend`, `@backstage/plugin-allure`, `@backstage/plugin-analytics-module-ga`, `@backstage/plugin-apache-airflow`, `@backstage/plugin-auth-backend`, `@backstage/plugin-auth-node`, `@backstage/plugin-azure-devops-backend`, `@backstage/plugin-azure-sites-backend`, `@backstage/plugin-badges`, `@backstage/plugin-badges-backend`, `@backstage/plugin-bazaar-backend`, `@backstage/plugin-bitrise`, `@backstage/plugin-catalog-backend-module-bitbucket`, `@backstage/plugin-catalog-common`, `@backstage/plugin-catalog-graphql`, `@backstage/plugin-catalog-import`, `@backstage/plugin-cicd-statistics-module-gitlab`, `@backstage/plugin-circleci`, `@backstage/plugin-code-climate`, `@backstage/plugin-code-coverage`, `@backstage/plugin-codescene`, `@backstage/plugin-config-schema`, `@backstage/plugin-dynatrace`, `@backstage/plugin-events-backend-module-azure`, `@backstage/plugin-events-backend-module-bitbucket-cloud`, `@backstage/plugin-events-backend-module-gerrit`, `@backstage/plugin-events-backend-module-github`, `@backstage/plugin-events-backend-module-gitlab`, `@backstage/plugin-events-backend-test-utils`, `@backstage/plugin-events-node`, `@backstage/plugin-explore-react`, `@backstage/plugin-gcalendar`, `@backstage/plugin-github-deployments`, `@backstage/plugin-github-issues`, `@backstage/plugin-github-pull-requests-board`, `@backstage/plugin-gitops-profiles`, `@backstage/plugin-gocd`, `@backstage/plugin-graphiql`, `@backstage/plugin-graphql-backend`, `@backstage/plugin-jenkins-backend`, `@backstage/plugin-jenkins-common`, `@backstage/plugin-kafka`, `@backstage/plugin-kafka-backend`, `@backstage/plugin-kubernetes-common`, `@backstage/plugin-newrelic`, `@backstage/plugin-newrelic-dashboard`, `@backstage/plugin-org`, `@backstage/plugin-org-react`, `@backstage/plugin-pagerduty`, `@backstage/plugin-periskop`, `@backstage/plugin-periskop-backend`, `@backstage/plugin-permission-backend`, `@backstage/plugin-permission-common`, `@backstage/plugin-permission-node`, `@backstage/plugin-playlist-backend`, `@backstage/plugin-playlist-common`, `@backstage/plugin-proxy-backend`, `@backstage/plugin-rollbar`, `@backstage/plugin-rollbar-backend`, `@backstage/plugin-search-backend-module-pg`, `@backstage/plugin-search-common`, `@backstage/plugin-sentry`, `@backstage/plugin-shortcuts`, `@backstage/plugin-sonarqube-backend`, `@backstage/plugin-sonarqube-react`, `@backstage/plugin-splunk-on-call`, `@backstage/plugin-tech-insights`, `@backstage/plugin-tech-insights-backend-module-jsonfc`, `@backstage/plugin-tech-insights-node`, `@backstage/plugin-techdocs-addons-test-utils`, `@backstage/plugin-techdocs-backend`, `@backstage/plugin-techdocs-module-addons-contrib`, `@backstage/plugin-techdocs-node`, `@backstage/plugin-todo`, `@backstage/plugin-todo-backend`, `@backstage/plugin-user-settings-backend`, `@backstage/plugin-vault`, `@backstage/plugin-vault-backend`, `@backstage/test-utils`._
