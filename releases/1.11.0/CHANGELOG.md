# Backstage Release 1.11.0 changelog

Changes between 1.10.1 and 1.11.0 — 167 changed and 14 added packages.

## `@backstage/app-defaults` (1.1.0 → 1.2.0)

### 1.2.0

#### Minor Changes

- db10b6ef65: Added a Bitbucket Server Auth Provider and added its API to the app defaults

## `@backstage/backend-app-api` (0.3.1 → 0.4.0)

### 0.4.0

#### Minor Changes

- 01a075ec1d: **BREAKING**: Renamed `RootHttpRouterConfigureOptions` to `RootHttpRouterConfigureContext`, and removed the unused type `ServiceOrExtensionPoint`.
- 4ae71b7f2e: **BREAKING** Renaming `*Factory` exports to `*ServiceFactory` instead. For example `configFactory` now is exported as `configServiceFactory`.
- d31d8e00b3: **BREAKING** `HttpServerCertificateOptions` when specified with a `key` and `cert` should also have the `type: 'pem'` instead of `type: 'plain'`

#### Patch Changes

- a18da2f8b5: Fixed an issue were the log redaction didn't properly escape RegExp characters.
- 5febb216fe: Updated to match the new `CacheService` interface.
- e716946103: Updated usage of the lifecycle service.
- f60cca9da1: Updated database factory to pass service deps required for restoring database state during development.
- 610d65e143: Updates to match new `BackendFeature` type.
- 725383f69d: Tweaked messaging in the README.
- b86efa2d04: Updated usage of `ServiceFactory`.
- ab22515647: The shutdown signal handlers are now installed as part of the backend instance rather than the lifecycle service, and explicitly cause the process to exit.
- b729f9f31f: Moved the options of the `config` and `rootHttpRouter` services out to the factories themselves, where they belong
- ed8b5967d7: `HttpRouterFactoryOptions.getPath` is now optional as a default value is always provided in the factory.
- 71a5ec0f06: Updated usages of `LogMeta`.

## `@backstage/backend-common` (0.18.1 → 0.18.2)

### 0.18.2

#### Patch Changes

- 5febb216fe: **BREAKING**: The `CacheClient` interface must now also implement the `withOptions` method. The `.get()` method has also received a type parameter that helps ensure that `undefined` in the event of a cache miss is handled.

  Added a `cacheToPluginCacheManager` helper that converts a `CacheService` into a legacy `PluginCacheManager` instance.

- 5febb216fe: Updated to match the new `CacheService` interface.
- e716946103: Updated usage of the lifecycle service.
- d31d8e00b3: Updated to work with the new `type: 'pem'` with `createHttpServer` from `@backstage/backend-app-api`
- 0ff03319be: Updated usage of `createBackendPlugin`.
- f60cca9da1: The `DatabaseManager.forPlugin` method now accepts additional service dependencies. There is no need to update existing code to pass these dependencies.
- 628e2bd89a: Updated dependency `@kubernetes/client-node` to `0.18.1`.

## `@backstage/backend-defaults` (0.1.6 → 0.1.7)

### 0.1.7

#### Patch Changes

- 725383f69d: Tweaked messaging in the README.
- e412d33025: Use the new `*ServiceFactory` exports from `@backstage/backend-app-api`

## `@backstage/backend-plugin-api` (0.3.1 → 0.4.0)

### 0.4.0

#### Minor Changes

- e716946103: **BREAKING**: Split out the hook for both lifecycle services so that the first parameter of `addShutdownHook` is the hook function, and the second is the options.
- 0ff03319be: **BREAKING**: The plugin ID option passed to `createBackendPlugin` is now `pluginId`, rather than just `id`. This is to make it match `createBackendModule` more closely.
- 71a5ec0f06: **BREAKING**: Switched out `LogMeta` type for `JsonObject`.
- 5febb216fe: **BREAKING**: The `CacheService` has been changed to remove the indirection of `getClient`, instead making the `CacheClient` methods directly available on the `CacheService`. In order to allow for the creation of clients with default options, there is now a new `.withOptions` method that must be implemented as part of the service interface.
- b86efa2d04: Switch `ServiceFactory` to be an opaque type, keeping only the `service` field as public API, but also adding a type parameter for the service scope.
- 610d65e143: Switched `BackendFeature` to be an opaque type.

#### Patch Changes

- 9c9456fd33: Removed the unused `TypesToServiceRef` type
- 181c03edb5: Aligned opaque type markers to all use a `$type` property with namespacing.
- 725383f69d: Tweaked messaging in the README.
- ae88f61e00: The `register` methods passed to `createBackendPlugin` and `createBackendModule`
  now have dedicated `BackendPluginRegistrationPoints` and
  `BackendModuleRegistrationPoints` arguments, respectively. This lets us make it
  clear on a type level that it's not possible to pass in extension points as
  dependencies to plugins (should only ever be done for modules). This has no
  practical effect on code that was already well behaved.

## `@backstage/backend-test-utils` (0.1.33 → 0.1.34)

### 0.1.34

#### Patch Changes

- baf6e4c96a: Removed unnecessary `@backstage/cli` dependency.
- c51efce2a0: Update docs to always use `yarn add --cwd` for app & backend
- 1835311713: Added explicit return type signature for `mockServices.config()`.
- e716946103: Updated usage of the lifecycle service.
- 7e7557a2be: Updated the `mockServices.rootLogger` options to accept a single level option instead.
- 610d65e143: Updates to match new `BackendFeature` type.
- e412d33025: Use the new `*ServiceFactory` exports from `@backstage/backend-app-api`
- b86efa2d04: Updated usage of `ServiceFactory`.
- 17b573e4be: The new backend system testing utilities have now been marked as stable API.
- f1adb2e36b: Removed the `ref` from all `mockServices`.
- d0901c9ba4: All mock service factories and mock service implementations are now available via the new experimental `mockServices` export.
- 71a5ec0f06: Updated usages of `LogMeta`.

## `@backstage/catalog-model` (1.1.5 → 1.2.0)

### 1.2.0

#### Minor Changes

- d51668882d: Adds the tRPC API type to the catalog.

#### Patch Changes

- aece6c57d2: Add additional validation for location references.
- 2518ef5b8a: Add deprecation tag to kubernetes constants in catalog, constants are now defined in plugin-kubernetes-common

## `@backstage/cli` (0.22.1 → 0.22.2)

### 0.22.2

#### Patch Changes

- 561df21ea3: The `backstage-cli repo test` command now sets a default Jest `--workerIdleMemoryLimit` of 1GB. If needed to ensure that tests are not run in band, `--maxWorkers=2` is set as well. This is the recommended workaround for dealing with Jest workers leaking memory and eventually hitting the heap limit.
- 2815981057: Show module name causing error during build
- dd8a9afe66: Replaced several monorepo lint rules with new rules from `@backstage/eslint-plugin`. See the [README](https://github.com/import-js/eslint-plugin-import/blob/main/packages/eslint-plugin/README.md) for a full list of rules.
- a9c50af76b: Fixed Webpack loader patterns so that they properly match the file suffix only.
- 66cf22fdc4: Updated dependency `esbuild` to `^0.17.0`.
- 6d3abfded1: Switch to inline source maps for test transpilation, simplifying editor setups.
- 90616df9a8: Added an experimental mode for the `package start` command for backend packages. Enabled by setting `EXPERIMENTAL_BACKEND_START`.

## `@backstage/codemods` (0.1.42 → 0.1.43)

### 0.1.43

#### Patch Changes

- 02f1316e57: Moved `commander` to being a regular dependency.

## `@backstage/core-app-api` (1.4.0 → 1.5.0)

### 1.5.0

#### Minor Changes

- db10b6ef65: Added a Bitbucket Server Auth Provider and added its API to the app defaults

#### Patch Changes

- dff4d8ddb1: Fixed an issue where an explicit port the frontend base URL could break the app.

## `@backstage/core-components` (0.12.3 → 0.12.4)

### 0.12.4

#### Patch Changes

- 68ce7d0417: Added aria labels on the support button and sidebar
- 5637ebed92: Added a global override for `window.open` that helps prevent security vulnerabilities.
- 910015f5b7: The Button component has been deprecated in favor of the LinkButton component
- 20840b36b4: Adds new type, TableOptions, extending Material Table Options.
- e81a6e0ab5: Updated Link URL validation to be more strict.
- 85b04f659a: Internal refactor to not use deprecated `substr`
- 66e2aab4c4: Navigation items in mobile sidebar now have aria label.

## `@backstage/core-plugin-api` (1.3.0 → 1.4.0)

### 1.4.0

#### Minor Changes

- db10b6ef65: Added a Bitbucket Server Auth Provider and added its API to the app defaults

## `@backstage/create-app` (0.4.36 → 0.4.37)

### 0.4.37

#### Patch Changes

- 12a7b316ee: Bumped create-app version.
- 86a8dfd7b0: Added a check to ensure that Yarn v1 is used when creating new projects.
- 0eaa579f89: Update `SearchPage` template to use `SearchResult` extensions.
- 02f1316e57: Updated `packages/app/cypress/.eslintrc.json` to remove the unnecessary `import/no-extraneous-dependencies` rule.

## `@backstage/plugin-adr` (0.3.0 → 0.4.0)

### 0.4.0

#### Minor Changes

- 0a32911d8a: Display title, status and date in ADR navigation, sourced from ADR content and reverse order.
- ec34b535c0: The `AdrSearchResultListItem` component is now a search result extension. This means that when rendered as a child of components that render search extensions, the `result`, `rank`, and `highlight` properties are optional. See the [documentation](https://backstage.io/docs/features/search/how-to-guides#how-to-render-search-results-using-extensions) for more details.

#### Patch Changes

- ec34b535c0: Support displaying an icon on `AdrSearchResultListItem`
- 496cf6aff0: Render the common `<MissingAnnotationEmptyState />` component when the `backstage.io/adr-location` annotation is missing from the component

## `@backstage/plugin-adr-backend` (0.2.6 → 0.3.0)

### 0.3.0

#### Minor Changes

- 0a32911d8a: Display title, status and date in ADR navigation, sourced from ADR content and reverse order.

#### Patch Changes

- c51efce2a0: Update docs to always use `yarn add --cwd` for app & backend

## `@backstage/plugin-airbrake` (0.3.14 → 0.3.15)

### 0.3.15

#### Patch Changes

- 41377156d0: Adds a boolean helper function to airbrake plugin for use on the EntityPage to show/hide airbrake tab depending on whether the entity's `catalog-info.yaml` has an airbrake id set in the metadata

## `@backstage/plugin-allure` (0.1.30 → 0.1.31)

### 0.1.31

#### Patch Changes

- c51efce2a0: Update docs to always use `yarn add --cwd` for app & backend

## `@backstage/plugin-analytics-module-ga` (0.1.25 → 0.1.26)

### 0.1.26

#### Patch Changes

- c51efce2a0: Update docs to always use `yarn add --cwd` for app & backend

## `@backstage/plugin-apache-airflow` (0.2.7 → 0.2.8)

### 0.2.8

#### Patch Changes

- 85b04f659a: Internal refactor to not use deprecated `substr`
- 4bdd6bcb3c: Prefer Link over plain anchors

## `@backstage/plugin-api-docs` (0.8.14 → 0.9.0)

### 0.9.0

#### Minor Changes

- 9ed53218a5: Adds a new tRPC API definition widget which users can utilize to integrate their tRPC API definitions into Backstage.

#### Patch Changes

- 60996f8aba: Updating the readme with better `csp` instructions
- 6856ab98f4: Updated dependency `@asyncapi/react-component` to `1.0.0-next.47`.

## `@backstage/plugin-api-docs-module-protoc-gen-doc` (0.1.0 → 0.1.1)

### 0.1.1

#### Patch Changes

- c51efce2a0: Update docs to always use `yarn add --cwd` for app & backend

## `@backstage/plugin-apollo-explorer` (0.1.7 → 0.1.8)

### 0.1.8

#### Patch Changes

- d950d3e217: Depend on `@material-ui/core` version `^4.12.2` like all other in-repo packages

## `@backstage/plugin-app-backend` (0.3.41 → 0.3.42)

### 0.3.42

#### Patch Changes

- 0ff03319be: Updated usage of `createBackendPlugin`.

## `@backstage/plugin-auth-backend` (0.17.4 → 0.18.0)

### 0.18.0

#### Minor Changes

- db10b6ef65: Added a Bitbucket Server Auth Provider and added its API to the app defaults

## `@backstage/plugin-azure-devops` (0.2.5 → 0.2.6)

### 0.2.6

#### Patch Changes

- 347b16ecea: Fixed `AssignedToCurrentUsersTeams` & `CreatedByCurrentUsersTeams` filter in `AzurePullRequestsPage` component.

## `@backstage/plugin-azure-devops-backend` (0.3.20 → 0.3.21)

### 0.3.21

#### Patch Changes

- c51efce2a0: Update docs to always use `yarn add --cwd` for app & backend
- cc926a59bd: Fixed a bug where the azure devops host in URLs on the readme card was being URL encoded, breaking hosts with ports.
- 85b04f659a: Internal refactor to not use deprecated `substr`

## `@backstage/plugin-azure-sites` (0.1.3 → 0.1.4)

### 0.1.4

#### Patch Changes

- c51efce2a0: Update docs to always use `yarn add --cwd` for app & backend
- 98a00a09d5: Fixed `AzureSites` plugin start and stop issue #15904
  Fixed `AzureSites` UI load issue #15907
- 4bdd6bcb3c: Prefer Link over plain anchors

## `@backstage/plugin-azure-sites-backend` (0.1.3 → 0.1.4)

### 0.1.4

#### Patch Changes

- c51efce2a0: Update docs to always use `yarn add --cwd` for app & backend

## `@backstage/plugin-bazaar-backend` (0.2.4 → 0.2.5)

### 0.2.5

#### Patch Changes

- 0ff03319be: Updated usage of `createBackendPlugin`.
- 5b7cd5580d: Moving the backend-test-utils to devDependencies.
- 4a6f38a535: Added a Backend System plugin feature

## `@backstage/plugin-bitrise` (0.1.41 → 0.1.42)

### 0.1.42

#### Patch Changes

- 85b04f659a: Internal refactor to not use deprecated `substr`

## `@backstage/plugin-catalog` (1.7.2 → 1.8.0)

### 1.8.0

#### Minor Changes

- 0c1fc3986c: Added Markdown support in the `AboutCard` description section
- 0eaa579f89: The `CatalogSearchResultListItem` component is now a search result extension. This means that when rendered as a child of components that render search extensions, the `result`, `rank`, and `highlight` properties are optional. See the [documentation](https://backstage.io/docs/features/search/how-to-guides#how-to-render-search-results-using-extensions) for more details.

#### Patch Changes

- d7f55f6bd2: The list of entities takes into account the title when its different from the name to sort the entities.
- 66e2aab4c4: `ListItem` wrapper component moved to `SearchResultListItemExtension` for all `*SearchResultListItems` that are exported as extensions. This is to make sure the list only contains list elements.

  Note: If you have implemented a custom result list item, we recommend you to remove the list item wrapper to avoid nested `<li>` elements.

- 7d46ca2f68: Make catalog search result list a bit more customizable

## `@backstage/plugin-catalog-backend` (1.7.1 → 1.7.2)

### 1.7.2

#### Patch Changes

- 071354eb7d: Add additional validation as security precations for output entities.
- b977c2e69f: Minor improvements to the descriptions provided with permission rules schemas
- 2380506364: The process of adding or modifying fields in the software-catalog search index has been simplified. For more details, see [how to customize fields in the Software Catalog index](https://backstage.io/docs/features/search/how-to-guides#how-to-customize-fields-in-the-software-catalog-index).
- 9573651919: The previous migration that adds the `search.original_value` column may leave some of the entities not updated. Add a migration script to trigger a reprocessing of the entities.
- 9f71a2fd20: Location rule target patterns now also match hidden files, i.e. path components with a leading dot.
- e716946103: Updated usage of the lifecycle service.
- 1aec041c34: Fixed an issue where entities sometimes were not properly deleted during a full mutation.
- 0ff03319be: Updated usage of `createBackendPlugin`.
- fc73f6aae5: Switched the order of reprocessing statements retroactively in migrations. This only improves the experience for those who at a later time perform a large upgrade of an old Backstage installation.

## `@backstage/plugin-catalog-backend-module-aws` (0.1.14 → 0.1.15)

### 0.1.15

#### Patch Changes

- 671c6af700: Update to import `LocationSpec` from the correct package.
- 8e025f1347: Added support for `externalId` when assuming role in `AwsS3EntityProvider`

## `@backstage/plugin-catalog-backend-module-azure` (0.1.12 → 0.1.13)

### 0.1.13

#### Patch Changes

- 2890f47517: This will add the ability to use Azure DevOps with multi project with a single value which is a new feature as previously this had to be done manually for each project that you wanted to add.

  Right now you would have to fill in multiple values in the config to use multiple projects:

  ```
  yourFirstProviderId: # identifies your dataset / provider independent of config changes
      organization: myorg
      project: 'firstProject' # this will match the firstProject project
      repository: '*' # this will match all repos
      path: /catalog-info.yaml
  yourSecondProviderId: # identifies your dataset / provider independent of config changes
      organization: myorg
      project: 'secondProject' # this will match the secondProject project
      repository: '*' # this will match all repos
      path: /catalog-info.yaml
  ```

  With this change you can actually have all projects available where your PAT determines which you have access to, so that includes multiple projects:

  ```
  yourFirstProviderId: # identifies your dataset / provider independent of config changes
      organization: myorg
      project: '*' # this will match all projects where your PAT has access to
      repository: '*' # this will match all repos
      path: /catalog-info.yaml
  ```

- 85b04f659a: Internal refactor to not use deprecated `substr`

## `@backstage/plugin-catalog-backend-module-bitbucket` (0.2.8 → 0.2.9)

### 0.2.9

#### Patch Changes

- 85b04f659a: Internal refactor to not use deprecated `substr`

## `@backstage/plugin-catalog-backend-module-github` (0.2.4 → 0.2.5)

### 0.2.5

#### Patch Changes

- 66158754b4: Add support for filtering out forks
- 80afd5ff8b: Use github team slug and login annotations rather than entity name to infer location annotations
- 85b04f659a: Internal refactor to not use deprecated `substr`

## `@backstage/plugin-catalog-backend-module-gitlab` (0.1.12 → 0.1.13)

### 0.1.13

#### Patch Changes

- 49948f644f: The config now consistently uses the term 'instance' to refer to a single GitLab API host.
- 85b04f659a: Internal refactor to not use deprecated `substr`
- 52c5685ceb: Implement Group and User Catalog Provider

## `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.1.2 → 0.2.0)

### 0.2.0

#### Minor Changes

- 1ba120faa3: Added new mechanism to handle deltas in incremental providers

#### Patch Changes

- c51efce2a0: Update docs to always use `yarn add --cwd` for app & backend
- 407dc01fc9: Removing extra imports for `run` script as `TestBackend` auto loads the default factories
- b7e36660d5: Return `EventSubscriber` from `addIncrementalEntityProvider` to hook up to `EventsBackend`
- 5b7cd5580d: Moving the backend-test-utils to devDependencies.
- 77c41b6924: Updated README to include newer API options for incremental entity providers

## `@backstage/plugin-catalog-backend-module-msgraph` (0.4.7 → 0.5.0)

### 0.5.0

#### Minor Changes

- fb568e2683: Improve performance when loading users via group membership.
  Users data is now loaded from a paged query, rather than having to make an extra call per user to load each user's profiles.

  Note, there are still additional per user calls made to load user avatars

#### Patch Changes

- 4c86436fdf: Fix MS Graph provider to use target URL for fetching access token
- 0daa328c3a: Extract default transformers to their own file
- 28f9883440: Fixed a bug reading the `user.select` field expected from the `app-config.yaml` configuration
- c5b119ad9c: Increased default page size to 999 (from 100) to reduce the number of calls made to the Microsoft Graph API.

## `@backstage/plugin-catalog-graph` (0.2.26 → 0.2.27)

### 0.2.27

#### Patch Changes

- c51efce2a0: Update docs to always use `yarn add --cwd` for app & backend
- fe19058b74: Fix #16245: The CatalogGraphCard has parameter naming errors for CatalogGraphPage
- 1827710136: Expose additional props on the `CatalogGraphCard` to allow for custom node & label rendering or kind/relation filtering.

## `@backstage/plugin-catalog-react` (1.2.4 → 1.3.0)

### 1.3.0

#### Minor Changes

- 929e1afe1b: Add `initialFilter` prop to EntityLifecyclePicker. This allows you to set an initial lifecycle for the catalog.
- fab93c2fe8: Aligned buttons on "Unregister entity" dialog to keep them on the same line

## `@backstage/plugin-cicd-statistics` (0.1.16 → 0.1.17)

### 0.1.17

#### Patch Changes

- d950d3e217: Depend on `@material-ui/core` version `^4.12.2` like all other in-repo packages

## `@backstage/plugin-circleci` (0.3.14 → 0.3.15)

### 0.3.15

#### Patch Changes

- 85b04f659a: Internal refactor to not use deprecated `substr`
- 1616e06047: Making workflow a link

## `@backstage/plugin-code-coverage` (0.2.7 → 0.2.8)

### 0.2.8

#### Patch Changes

- c51efce2a0: Update docs to always use `yarn add --cwd` for app & backend

## `@backstage/plugin-code-coverage-backend` (0.2.7 → 0.2.8)

### 0.2.8

#### Patch Changes

- c51efce2a0: Update docs to always use `yarn add --cwd` for app & backend

## `@backstage/plugin-codescene` (0.1.9 → 0.1.10)

### 0.1.10

#### Patch Changes

- d950d3e217: Depend on `@material-ui/core` version `^4.12.2` like all other in-repo packages

## `@backstage/plugin-cost-insights` (0.12.3 → 0.12.4)

### 0.12.4

#### Patch Changes

- dfa0bb737e: Fix bug in EntityCostsCard if cost aggregation array is empty. Allow title override on the Cost Insights Page

## `@backstage/plugin-dynatrace` (1.0.4 → 2.0.0)

### 2.0.0

#### Patch Changes

- d950d3e217: Depend on `@material-ui/core` version `^4.12.2` like all other in-repo packages

## `@backstage/plugin-events-backend` (0.2.2 → 0.2.3)

### 0.2.3

#### Patch Changes

- 0ff03319be: Updated usage of `createBackendPlugin`.

## `@backstage/plugin-events-node` (0.2.2 → 0.2.3)

### 0.2.3

#### Patch Changes

- 19d4abf72c: Make `EventParams` typed for implementing tidier event handling.

## `@backstage/plugin-explore` (0.3.45 → 0.4.0)

### 0.4.0

#### Minor Changes

- 0eaa579f89: The `ToolSearchResultListItem` component is now a search result extension. This means that when rendered as a child of components that render search extensions, the `result`, `rank`, and `highlight` properties are optional. See the [documentation](https://backstage.io/docs/features/search/how-to-guides#how-to-render-search-results-using-extensions) for more details.

#### Patch Changes

- 66e2aab4c4: `ListItem` wrapper component moved to `SearchResultListItemExtension` for all `*SearchResultListItems` that are exported as extensions. This is to make sure the list only contains list elements.

  Note: If you have implemented a custom result list item, we recommend you to remove the list item wrapper to avoid nested `<li>` elements.

## `@backstage/plugin-git-release-manager` (0.3.27 → 0.3.28)

### 0.3.28

#### Patch Changes

- 85b04f659a: Internal refactor to not use deprecated `substr`

## `@backstage/plugin-github-issues` (0.2.3 → 0.2.4)

### 0.2.4

#### Patch Changes

- 3f88ae9d0a: Updated README.md examples to use correct components and fixed some syntax errors.

## `@backstage/plugin-home` (0.4.30 → 0.4.31)

### 0.4.31

#### Patch Changes

- c51efce2a0: Update docs to always use `yarn add --cwd` for app & backend
- 3d1d867d42: Fixed regression that caused the `WelcomeTitle` to not be the right size when passed to the `title` property of the `<Header>` component. A Storybook entry was also added for the `WelcomeTitle`
- c553a625d2: remove unused plugin-stack-overflow dependency

## `@backstage/plugin-ilert` (0.2.3 → 0.2.4)

### 0.2.4

#### Patch Changes

- c51efce2a0: Update docs to always use `yarn add --cwd` for app & backend

## `@backstage/plugin-kafka-backend` (0.2.34 → 0.2.35)

### 0.2.35

#### Patch Changes

- 0ff03319be: Updated usage of `createBackendPlugin`.
- 4a6f38a535: Added a Backend System plugin feature

## `@backstage/plugin-kubernetes` (0.7.7 → 0.7.8)

### 0.7.8

#### Patch Changes

- 145a79a15b: Condenses kubernetes ui plugin to fit more onscreen and increase visibility
- 628e2bd89a: Updated dependency `@kubernetes/client-node` to `0.18.1`.

## `@backstage/plugin-kubernetes-backend` (0.9.2 → 0.9.3)

### 0.9.3

#### Patch Changes

- 2518ef5b8a: Adding new Cluster detail fields to catalogClusterLocator. Replace deprecated imports with k8s annotations from plugin-kubernetes-common.
- 7ff81f7692: Kubernetes proxy endpoint now accepts content types that are not json
- 5b7cd5580d: Moving the backend-test-utils to devDependencies.
- 628e2bd89a: Updated dependency `@kubernetes/client-node` to `0.18.1`.
- a53d06afe5: The name of the header used to specify a cluster to the proxy endpoint is now visible in the API reference.

## `@backstage/plugin-kubernetes-common` (0.5.1 → 0.6.0)

### 0.6.0

#### Minor Changes

- 1728c1ef01: **BREAKING**: Renamed misspelled `LimitRangeFetchReponse` to `LimitRangeFetchResponse`.

#### Patch Changes

- 2518ef5b8a: New K8s catalog entity annotations added that will replace now deprecated k8s annotations in the catalog-model package. K8s annotation imports should now be made from plugin-kubernetes-common.
- 628e2bd89a: Updated dependency `@kubernetes/client-node` to `0.18.1`.

## `@backstage/plugin-lighthouse` (0.3.14 → 0.4.0)

### 0.4.0

#### Minor Changes

- eef62546ce: Require @backstage/plugin-lighthouse-common package where API implementation moved to.

  **BREAKING**: the following types have been moved to @backstage/plugin-lighthouse-common:

  - `Audit`
  - `AuditBase`
  - `AuditCompleted`
  - `AuditFailed`
  - `AuditRunning`
  - `FetchError`
  - `LASListRequest`
  - `LASListResponse`
  - `LighthouseApi`
  - `LighthouseCategoryAbbr`
  - `LighthouseCategoryId`
  - `LighthouseConfigSettings`
  - `LighthouseRestApi`
  - `TriggerAuditPayload`
  - `Website`
  - `WebsiteListResponse`

#### Patch Changes

- c51efce2a0: Update docs to always use `yarn add --cwd` for app & backend
- 4bdd6bcb3c: Prefer Link over plain anchors

## `@backstage/plugin-org` (0.6.4 → 0.6.5)

### 0.6.5

#### Patch Changes

- 5a4fa8859b: Updated `LinksGroup` to use `Link` over `ListItem` as this makes the links more obvious and follows the pattern already used in the `GroupProfileCard`. Also updated the `GroupProfileCard` `ExtraDetails` story in Storybook to enable the `showLinks` feature with this off there is no difference between it and the `default` story.

## `@backstage/plugin-org-react` (0.1.3 → 0.1.4)

### 0.1.4

#### Patch Changes

- d950d3e217: Depend on `@material-ui/core` version `^4.12.2` like all other in-repo packages

## `@backstage/plugin-pagerduty` (0.5.7 → 0.5.8)

### 0.5.8

#### Patch Changes

- 804746dd58: The PagerDutyCard now supports an optional `readOnly` property (`<PagerDutyCard readOnly />`) for suppressing the rendering of the "Create Incident" button from the Backstage UI.

## `@backstage/plugin-periskop-backend` (0.1.12 → 0.1.13)

### 0.1.13

#### Patch Changes

- 0ff03319be: Updated usage of `createBackendPlugin`.
- 4a6f38a535: Added a Backend System plugin feature

## `@backstage/plugin-playlist` (0.1.5 → 0.1.6)

### 0.1.6

#### Patch Changes

- d950d3e217: Depend on `@material-ui/core` version `^4.12.2` like all other in-repo packages

## `@backstage/plugin-playlist-backend` (0.2.4 → 0.2.5)

### 0.2.5

#### Patch Changes

- b977c2e69f: Minor improvements to the descriptions provided with permission rules schemas
- 5b7cd5580d: Moving the backend-test-utils to devDependencies.
- 85b04f659a: Internal refactor to not use deprecated `substr`

## `@backstage/plugin-proxy-backend` (0.2.35 → 0.2.36)

### 0.2.36

#### Patch Changes

- 0ff03319be: Updated usage of `createBackendPlugin`.
- 4a6f38a535: Added a Backend System plugin feature

## `@backstage/plugin-scaffolder` (1.10.1 → 1.11.0)

### 1.11.0

#### Minor Changes

- d6bb12a2e7: - **Deprecation** - Deprecated the following exports, please import them directly from `@backstage/plugin-scaffolder-react` instead

  ```
  createScaffolderLayout
  ScaffolderLayouts
  LayoutOptions
  LayoutTemplate
  ```

- a521379688: Migrating the `TemplateEditorPage` to work with the new components from `@backstage/plugin-scaffolder-react`
- 074f7e81b5: Added a missing validator check for items in an array
- 8c2966536b: Embed scaffolder workflow in other components

#### Patch Changes

- 04f717a8e1: `scaffolder/next`: bump `react-jsonschema-form` libraries to `v5-stable`
- b46f385eff: scaffolder/next: Implementing a simple `OngoingTask` page
- cbab8ac107: lock versions of `@rjsf/*-beta` packages
- 346d6b6630: Upgrade `@rjsf` version 5 dependencies to `beta.18`
- ccbf91051b: bump `@rjsf` `v5` dependencies to 5.1.0
- d2ddde2108: Add `ScaffolderLayouts` to `NextScaffolderPage`
- 0f0da2f256: Prefer schema ordering of template properties during review content generation.
- 38992bdbaf: Fixed bug in review step refactor that caused schema-based display settings for individual property values to be discarded.

## `@backstage/plugin-scaffolder-backend` (1.10.1 → 1.11.0)

### 1.11.0

#### Minor Changes

- 0b2952ee4b: Added the option to overwrite files in the `targetPath` of the `template:fetch` action
- 127154930f: Renamed the export `scaffolderCatalogModule` to `catalogModuleTemplateKind` in order to follow the new recommended naming patterns of backend system items. This is technically a breaking change but in an alpha export, so take care to change your imports if you have already migrated to the new backend system.

#### Patch Changes

- 0ff03319be: Updated usage of `createBackendPlugin`.
- ad3edc402d: **Deprecations**: The following are deprecated and should instead be imported from the new package `@backstage/plugin-scaffolder-node`:

  - `ActionContext`
  - `createTemplateAction`
  - `TaskSecrets`
  - `TemplateAction`

- 6c70919f1a: Provide better error messaging when GitHub fails due to missing team definitions
- 66cf22fdc4: Updated dependency `esbuild` to `^0.17.0`.

## `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.16 → 0.2.17)

### 0.2.17

#### Patch Changes

- d72866f0cc: Internal refactor to use the new `@backstage/plugin-scaffolder-node` package for some functionality

## `@backstage/plugin-scaffolder-backend-module-rails` (0.4.9 → 0.4.10)

### 0.4.10

#### Patch Changes

- d72866f0cc: Internal refactor to use the new `@backstage/plugin-scaffolder-node` package for some functionality

## `@backstage/plugin-scaffolder-backend-module-sentry` (0.1.1 → 0.1.2)

### 0.1.2

#### Patch Changes

- da418c89e4: Fix broken module exports and dependencies to match a backend module, rather than a frontend plugin.
- d72866f0cc: Internal refactor to use the new `@backstage/plugin-scaffolder-node` package for some functionality

## `@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.14 → 0.2.15)

### 0.2.15

#### Patch Changes

- d72866f0cc: Internal refactor to use the new `@backstage/plugin-scaffolder-node` package for some functionality

## `@backstage/plugin-scaffolder-react` (1.0.1 → 1.1.0)

### 1.1.0

#### Minor Changes

- a07750745b: Added `DescriptionField` field override to the `next/scaffolder`
- a521379688: Migrating the `TemplateEditorPage` to work with the new components from `@backstage/plugin-scaffolder-react`
- 8c2966536b: Embed scaffolder workflow in other components
- 5555e17313: refactor `createAsyncValidators` to be recursive to ensure validators are called in nested schemas.

#### Patch Changes

- 04f717a8e1: `scaffolder/next`: bump `react-jsonschema-form` libraries to `v5-stable`
- b46f385eff: scaffolder/next: Implementing a simple `OngoingTask` page
- cbab8ac107: lock versions of `@rjsf/*-beta` packages
- 346d6b6630: Upgrade `@rjsf` version 5 dependencies to `beta.18`
- ccbf91051b: bump `@rjsf` `v5` dependencies to 5.1.0
- d2ddde2108: Add `ScaffolderLayouts` to `NextScaffolderPage`

## `@backstage/plugin-search` (1.0.7 → 1.1.0)

### 1.1.0

#### Minor Changes

- 0eaa579f89: Update `SearchModal` component to use `SearchResult` extensions.

#### Patch Changes

- 26fb21aa8b: Implement a `showCounts` option to display result counts per type in `SearchType.Accordion`
- 66e2aab4c4: Updated colors for each tab used on search modal, to improve color contrast. Aria label added to tabs wrapper component. `disableRipple` property on the `Tab` component removed to improve keyboard navigation indicator.

## `@backstage/plugin-search-backend` (1.2.2 → 1.2.3)

### 1.2.3

#### Patch Changes

- 1b30c9a0f7: Change the router's response to include the error message instead of its object type in case it fails during a search query because the messages have more info.

## `@backstage/plugin-search-backend-module-elasticsearch` (1.1.2 → 1.1.3)

### 1.1.3

#### Patch Changes

- 896566906b: Export `decodeElasticSearchPageCursor` utility function

## `@backstage/plugin-search-react` (1.4.0 → 1.5.0)

### 1.5.0

#### Minor Changes

- 0eaa579f89: - Create the search results extensions, for more details see the documentation [here](https://backstage.io/docs/features/search/how-to-guides#how-to-render-search-results-using-extensions);
  - Update the `SearchResult`, `SearchResultList` and `SearchResultGroup` components to use extensions and default their props to optionally accept a query, when the query is not passed, the component tries to get it from the search context.

#### Patch Changes

- 66e2aab4c4: `ListItem` wrapper component moved to `SearchResultListItemExtension` for all `*SearchResultListItems` that are exported as extensions. This is to make sure the list only contains list elements.

  Note: If you have implemented a custom result list item, we recommend you to remove the list item wrapper to avoid nested `<li>` elements.

## `@backstage/plugin-sentry` (0.4.7 → 0.5.0)

### 0.5.0

#### Minor Changes

- 6a8d6b9a0c: Add option to filter issues based on the time it was triggered

#### Patch Changes

- 85b04f659a: Internal refactor to not use deprecated `substr`

## `@backstage/plugin-shortcuts` (0.3.6 → 0.3.7)

### 0.3.7

#### Patch Changes

- c51efce2a0: Update docs to always use `yarn add --cwd` for app & backend

## `@backstage/plugin-sonarqube` (0.6.2 → 0.6.3)

### 0.6.3

#### Patch Changes

- 6310eacc11: Additional export added in order to bind SonarQubeClient to its apiref

## `@backstage/plugin-splunk-on-call` (0.4.3 → 0.4.4)

### 0.4.4

#### Patch Changes

- 3598136ac7: Refactor plugin Card component to not rerender contents unnecessarily.

## `@backstage/plugin-tech-insights` (0.3.6 → 0.3.7)

### 0.3.7

#### Patch Changes

- 4024b37449: TechInsightsApi interface now has getFactSchemas() method.
  TechInsightsClient now implements method getFactSchemas().

  **BREAKING** FactSchema type moved from @backstage/plugin-tech-insights-node into @backstage/plugin-tech-insights-common

  These changes are **required** if you were importing this type directly.

  ```diff
  - import { FactSchema } from '@backstage/plugin-tech-insights-node';
  + import { FactSchema } from '@backstage/plugin-tech-insights-common';
  ```

## `@backstage/plugin-tech-insights-backend` (0.5.7 → 0.5.8)

### 0.5.8

#### Patch Changes

- 4024b37449: TechInsightsApi interface now has getFactSchemas() method.
  TechInsightsClient now implements method getFactSchemas().

  **BREAKING** FactSchema type moved from @backstage/plugin-tech-insights-node into @backstage/plugin-tech-insights-common

  These changes are **required** if you were importing this type directly.

  ```diff
  - import { FactSchema } from '@backstage/plugin-tech-insights-node';
  + import { FactSchema } from '@backstage/plugin-tech-insights-common';
  ```

## `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.25 → 0.1.26)

### 0.1.26

#### Patch Changes

- d6b912f963: Surface the cause of the json rules engine

## `@backstage/plugin-tech-insights-common` (0.2.9 → 0.2.10)

### 0.2.10

#### Patch Changes

- 4024b37449: TechInsightsApi interface now has getFactSchemas() method.
  TechInsightsClient now implements method getFactSchemas().

  **BREAKING** FactSchema type moved from @backstage/plugin-tech-insights-node into @backstage/plugin-tech-insights-common

  These changes are **required** if you were importing this type directly.

  ```diff
  - import { FactSchema } from '@backstage/plugin-tech-insights-node';
  + import { FactSchema } from '@backstage/plugin-tech-insights-common';
  ```

## `@backstage/plugin-tech-insights-node` (0.3.9 → 0.4.0)

### 0.4.0

#### Minor Changes

- 4024b37449: TechInsightsApi interface now has getFactSchemas() method.
  TechInsightsClient now implements method getFactSchemas().

  **BREAKING** FactSchema type moved from @backstage/plugin-tech-insights-node into @backstage/plugin-tech-insights-common

  These changes are **required** if you were importing this type directly.

  ```diff
  - import { FactSchema } from '@backstage/plugin-tech-insights-node';
  + import { FactSchema } from '@backstage/plugin-tech-insights-common';
  ```

## `@backstage/plugin-tech-radar` (0.6.0 → 0.6.1)

### 0.6.1

#### Patch Changes

- acf6c8c10b: Deprecate `RadarEntry.url` - use `RadarEntry.links` instead

  ```diff
  - url: 'https://www.javascript.com/',
    key: 'javascript',
    id: 'javascript',
    title: 'JavaScript',
    quadrant: 'languages',
    links: [
  +    {
  +      url: 'https://www.javascript.com/',
  +      title: 'Learn more',
  +    },
    ],
  ```

- 18024a231c: Allow to set additional links to the entry description.

## `@backstage/plugin-techdocs` (1.4.3 → 1.5.0)

### 1.5.0

#### Minor Changes

- 20840b36b4: Update DocsTable and EntityListDocsTable to accept overrides for Material Table options.
- 0eaa579f89: The `TechDocsSearchResultListItem` component is now a search result extension. This means that when rendered as a child of components that render search extensions, the `result`, `rank`, and `highlight` properties are optional. See the [documentation](https://backstage.io/docs/features/search/how-to-guides#how-to-render-search-results-using-extensions) for more details.

#### Patch Changes

- c8e09cc383: Fixed bug in Techdocs reader where a techdocs page with a hash in the URL did not always jump to the document anchor.
- cad5607411: Improve view: remove footer overlay on large screen
- 66e2aab4c4: `ListItem` wrapper component moved to `SearchResultListItemExtension` for all `*SearchResultListItems` that are exported as extensions. This is to make sure the list only contains list elements.

  Note: If you have implemented a custom result list item, we recommend you to remove the list item wrapper to avoid nested `<li>` elements.

- 4660b63947: Create a TechDocs `<LightBox/>` addon that allows users to open images in a light-box on documentation pages, they can navigate between images if there are several on one page.

  Here's an example on how to use it in a Backstage app:

  ```diff
  import {
    DefaultTechDocsHome,
    TechDocsIndexPage,
    TechDocsReaderPage,
  } from '@backstage/plugin-techdocs';
  import { TechDocsAddons } from '@backstage/plugin-techdocs-react/alpha';
  +import { LightBox } from '@backstage/plugin-techdocs-module-addons-contrib';

  const AppRoutes = () => {
    <FlatRoutes>
      // other plugin routes
      <Route path="/docs" element={<TechDocsIndexPage />}>
        <DefaultTechDocsHome />
      </Route>
      <Route
        path="/docs/:namespace/:kind/:name/*"
        element={<TechDocsReaderPage />}
      >
        <TechDocsAddons>
  +       <LightBox />
        </TechDocsAddons>
      </Route>
    </FlatRoutes>;
  };
  ```

## `@backstage/plugin-techdocs-addons-test-utils` (1.0.9 → 1.0.10)

### 1.0.10

#### Patch Changes

- d950d3e217: Depend on `@material-ui/core` version `^4.12.2` like all other in-repo packages

## `@backstage/plugin-techdocs-backend` (1.5.2 → 1.5.3)

### 1.5.3

#### Patch Changes

- 6f097023fc: Keep the tech docs sync event stream alive even if it is taking a while to build.
- 339d9a5b5c: Added support for using a default `mkdocs.yml` configuration file when none is provided

## `@backstage/plugin-techdocs-module-addons-contrib` (1.0.9 → 1.0.10)

### 1.0.10

#### Patch Changes

- d950d3e217: Depend on `@material-ui/core` version `^4.12.2` like all other in-repo packages
- 4660b63947: Create a TechDocs `<LightBox/>` addon that allows users to open images in a light-box on documentation pages, they can navigate between images if there are several on one page.

  Here's an example on how to use it in a Backstage app:

  ```diff
  import {
    DefaultTechDocsHome,
    TechDocsIndexPage,
    TechDocsReaderPage,
  } from '@backstage/plugin-techdocs';
  import { TechDocsAddons } from '@backstage/plugin-techdocs-react/alpha';
  +import { LightBox } from '@backstage/plugin-techdocs-module-addons-contrib';

  const AppRoutes = () => {
    <FlatRoutes>
      // other plugin routes
      <Route path="/docs" element={<TechDocsIndexPage />}>
        <DefaultTechDocsHome />
      </Route>
      <Route
        path="/docs/:namespace/:kind/:name/*"
        element={<TechDocsReaderPage />}
      >
        <TechDocsAddons>
  +       <LightBox />
        </TechDocsAddons>
      </Route>
    </FlatRoutes>;
  };
  ```

## `@backstage/plugin-techdocs-node` (1.4.5 → 1.5.0)

### 1.5.0

#### Minor Changes

- dd1e37649f: Deprecated getMkDocsYml in favor of getMkdocsYml (lowercase 'd')

#### Patch Changes

- 87ab76e55c: Fixed bug caused by recent migration to AWS SDK V3 for techdocs-node. Instead of s3ForcePathStyle, forcePathStyle should be passed.
- 339d9a5b5c: Added support for using a default `mkdocs.yml` configuration file when none is provided

## `@backstage/plugin-user-settings` (0.6.2 → 0.7.0)

### 0.7.0

#### Minor Changes

- db10b6ef65: Added a Bitbucket Server Auth Provider and added its API to the app defaults

#### Patch Changes

- c4940b6322: Added a message to advise a page reload when toggling feature flags

## `@backstage/plugin-user-settings-backend` (0.1.5 → 0.1.6)

### 0.1.6

#### Patch Changes

- 0ff03319be: Updated usage of `createBackendPlugin`.
- 4a6f38a535: Added a Backend System plugin feature

## `@backstage/plugin-vault` (0.1.8 → 0.1.9)

### 0.1.9

#### Patch Changes

- fd7a77b9c4: Surface additional context and details to the Backstage UI when the Vault plugin encounters non-successful HTTP responses from the Vault API.

## `@backstage/plugin-vault-backend` (0.2.7 → 0.2.8)

### 0.2.8

#### Patch Changes

- 5b7cd5580d: Moving the backend-test-utils to devDependencies.

## `@backstage/plugin-xcmetrics` (0.2.34 → 0.2.35)

### 0.2.35

#### Patch Changes

- c51efce2a0: Update docs to always use `yarn add --cwd` for app & backend

## `@backstage/repo-tools` (0.1.1 → 0.1.2)

### 0.1.2

#### Patch Changes

- ff63acf30a: Packages without a declared `backstage.role` are now ignored.

## `@backstage/theme` (0.2.16 → 0.2.17)

### 0.2.17

#### Patch Changes

- b7705e176c: Use same table header color as @backstage/core-components Table to meet accessibility color contrast requirements. This change affects material-ui tables.

## `@techdocs/cli` (1.3.1 → 1.3.2)

### 1.3.2

#### Patch Changes

- dd1e37649f: Deprecated getMkDocsYml in favor of getMkdocsYml (lowercase 'd')
- dcacf94912: Fix proxying to mkdocs

  The domain localhost may point to both 127.0.0.1 and ::1, ipv4 and ipv6
  and when node tries to lookup localhost it might prefer ipv6 while mkdocs
  is only listening on ipv4. This tells node-proxy to target the ipv4 address
  instead of relying on localhost hostname lookup.

- 339d9a5b5c: Added support for using a default `mkdocs.yml` configuration file when none is provided
- 6e0b6a0d50: Fixed publish command missing awsBucketRootPath option.
  Fixed publish command having the gcsBucketRootPath option misconfigured, previously returning a boolean vs a string.

## `@backstage/backend-dev-utils` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- 9d9cdea117: Introduced a new package for backend development utilities. Similar to how `@backstage/dev-utils` is used in the frontend.

#### Patch Changes

- 725383f69d: Tweaked messaging in the README.

## `@backstage/eslint-plugin` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- 179d301518: Added a new ESLint plugin with common rules for Backstage projects. See the [README](https://github.com/import-js/eslint-plugin-import/blob/main/packages/eslint-plugin/README.md) for more details.

## `@backstage/plugin-entity-feedback` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- a3c86a7ed2: Implement entity feedback plugin, check out the `README.md` for more details!

## `@backstage/plugin-entity-feedback-backend` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- a3c86a7ed2: Implement entity feedback plugin, check out the `README.md` for more details!

## `@backstage/plugin-entity-feedback-common` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- a3c86a7ed2: Implement entity feedback plugin, check out the `README.md` for more details!

## `@backstage/plugin-entity-validation` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- d34b3267f9: First implementation for the entity validation UI. For more information refer to its `README.md`.

## `@backstage/plugin-graphql-voyager` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- d1fb4b7bf1: Add the new GraphQL Voyager tool as a plugin for backstage, expose necessary API and components needed for it.

  For more information on how to use this plugin and configure it, please navigate to the [README](https://github.com/backstage/backstage/tree/master/plugins/graphql-voyager/README.md) of the plugin.

## `@backstage/plugin-lighthouse-backend` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- eef62546ce: Introduce Lighthouse Backend Plugin to run scheduled Lighthouse Audits

## `@backstage/plugin-lighthouse-common` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- eef62546ce: Introduce @backstage/plugin-lighthouse-common with the API implementation

## `@backstage/plugin-linguist` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- 75cfee5688: Introduced the Linguist plugin, checkout the plugin's `README.md` for more details!

## `@backstage/plugin-linguist-backend` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- 75cfee5688: Introduced the Linguist plugin, checkout the plugin's `README.md` for more details!

## `@backstage/plugin-linguist-common` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- 75cfee5688: Introduced the Linguist plugin, checkout the plugin's `README.md` for more details!

## `@backstage/plugin-microsoft-calendar` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- 44412375bb: Created a new plugin `@backstage/plugin-microsoft-calendar` to display events from a Microsoft Calendar.

  please refer to the [README.md](https://github.com/backstage/backstage/blob/master/plugins/microsoft-calendar/README.md) for step-by-step instructions to setup the plugin in your Backstage instance.

#### Patch Changes

- c51efce2a0: Update docs to always use `yarn add --cwd` for app & backend

## `@backstage/plugin-scaffolder-node` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- d72866f0cc: New package that takes over some of the types and functionality from `@backstage/plugin-scaffolder-backend` that are shared with other modules

_Excluded dependency updates for packages: `@backstage/backend-tasks`, `@backstage/catalog-client`, `@backstage/dev-utils`, `@backstage/integration-react`, `@backstage/plugin-adr-common`, `@backstage/plugin-airbrake-backend`, `@backstage/plugin-auth-node`, `@backstage/plugin-badges`, `@backstage/plugin-badges-backend`, `@backstage/plugin-bazaar`, `@backstage/plugin-catalog-backend-module-bitbucket-cloud`, `@backstage/plugin-catalog-backend-module-bitbucket-server`, `@backstage/plugin-catalog-backend-module-gerrit`, `@backstage/plugin-catalog-backend-module-ldap`, `@backstage/plugin-catalog-backend-module-openapi`, `@backstage/plugin-catalog-common`, `@backstage/plugin-catalog-graphql`, `@backstage/plugin-catalog-import`, `@backstage/plugin-catalog-node`, `@backstage/plugin-cicd-statistics-module-gitlab`, `@backstage/plugin-cloudbuild`, `@backstage/plugin-code-climate`, `@backstage/plugin-config-schema`, `@backstage/plugin-events-backend-module-aws-sqs`, `@backstage/plugin-events-backend-module-azure`, `@backstage/plugin-events-backend-module-bitbucket-cloud`, `@backstage/plugin-events-backend-module-gerrit`, `@backstage/plugin-events-backend-module-github`, `@backstage/plugin-events-backend-module-gitlab`, `@backstage/plugin-events-backend-test-utils`, `@backstage/plugin-explore-backend`, `@backstage/plugin-explore-react`, `@backstage/plugin-firehydrant`, `@backstage/plugin-fossa`, `@backstage/plugin-gcalendar`, `@backstage/plugin-gcp-projects`, `@backstage/plugin-github-actions`, `@backstage/plugin-github-deployments`, `@backstage/plugin-github-pull-requests-board`, `@backstage/plugin-gitops-profiles`, `@backstage/plugin-gocd`, `@backstage/plugin-graphiql`, `@backstage/plugin-graphql-backend`, `@backstage/plugin-jenkins`, `@backstage/plugin-jenkins-backend`, `@backstage/plugin-jenkins-common`, `@backstage/plugin-kafka`, `@backstage/plugin-newrelic`, `@backstage/plugin-newrelic-dashboard`, `@backstage/plugin-periskop`, `@backstage/plugin-permission-backend`, `@backstage/plugin-permission-node`, `@backstage/plugin-permission-react`, `@backstage/plugin-rollbar`, `@backstage/plugin-rollbar-backend`, `@backstage/plugin-scaffolder-common`, `@backstage/plugin-search-backend-module-pg`, `@backstage/plugin-search-backend-node`, `@backstage/plugin-sonarqube-backend`, `@backstage/plugin-sonarqube-react`, `@backstage/plugin-stack-overflow`, `@backstage/plugin-stack-overflow-backend`, `@backstage/plugin-techdocs-react`, `@backstage/plugin-todo`, `@backstage/plugin-todo-backend`, `@backstage/test-utils`._
