# Backstage Release 1.21.0 changelog

Changes between 1.20.4 and 1.21.0 — 220 changed and 10 added packages.

Newly added: `@backstage/core-compat-api`, `@backstage/frontend-test-utils`, `@backstage/plugin-auth-backend-module-atlassian-provider`, `@backstage/plugin-auth-backend-module-oauth2-proxy-provider`, `@backstage/plugin-auth-backend-module-okta-provider`, `@backstage/plugin-auth-backend-module-vmware-cloud-provider`, `@backstage/plugin-scaffolder-backend-module-azure`, `@backstage/plugin-scaffolder-backend-module-bitbucket`, `@backstage/plugin-scaffolder-backend-module-gerrit`, `@backstage/plugin-scaffolder-backend-module-github`.

## `@backstage/core-compat-api` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- cf5cc4c: Discover plugins and routes recursively beneath the root routes in `collectLecacyRoutes`
- af7bc3e: Switched all core extensions to instead use the namespace `'app'`.
- f63dd72: The `collectLegacyRoutes` has been removed and is replaced by `convertLegacyApp` now being able to convert a `FlatRoutes` element directly.

#### Patch Changes

- 03d0b6d: Added `convertLegacyRouteRef` utility to convert existing route refs to be used with the new experimental packages.
- a379243: Leverage the new `FrontendFeature` type to simplify interfaces
- 8226442: Added `compatWrapper`, which can be used to wrap any React element to provide bi-directional interoperability between the `@backstage/core-*-api` and `@backstage/frontend-*-api` APIs.
- 8f5d6c1: Updates to match the new extension input wrapping.
- c219b16: Made package public so it can be published
- b7adf24: Delete alpha DI compatibility helper for components, migrating components should be simple without a helper.
- 046e443: Updates for compatibility with the new extension IDs.

## `@backstage/frontend-test-utils` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- 59fabd5: New testing utility library for `@backstage/frontend-app-api` and `@backstage/frontend-plugin-api`.
- af7bc3e: Switched all core extensions to instead use the namespace `'app'`.

#### Patch Changes

- 59fabd5: Added `createExtensionTester` for rendering extensions in tests.
- 7e4b0db: The `createExtensionTester` helper is now able to render more than one route in the test app.
- 818eea4: Updates for compatibility with the new extension IDs.
- b9aa6e4: Migrate `renderInTestApp` to `@backstage/frontend-test-utils` for testing individual React components in an app.
- e539735: Updates for `core.router` addition.
- c21c9cf: Re-export mock API implementations as well as `TestApiProvider`, `TestApiRegistry`, `withLogCollector`, and `setupRequestMockHandlers` from `@backstage/test-utils`.

## `@backstage/plugin-auth-backend-module-atlassian-provider` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- 2a5891e: New module for `@backstage/plugin-auth-backend` that adds an atlassian auth provider

#### Patch Changes

- a62764b: Updated dependency `passport` to `^0.7.0`.

## `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- 271aa12: Release of `oauth2-proxy-provider` plugin

#### Patch Changes

- a6be465: Exported the provider as default so it gets discovered when using `featureDiscoveryServiceFactory()`
- 510dab4: Change provider id from `oauth2ProxyProvider` to `oauth2Proxy`
- cc4228e: Switched module ID to use kebab-case.

## `@backstage/plugin-auth-backend-module-okta-provider` (new, 0.0.1)

### 0.0.1

#### Patch Changes

- e1c189b: Adds okta-provider backend module for the auth plugin
- a62764b: Updated dependency `passport` to `^0.7.0`.

## `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- ed02c69: Add VMware Cloud auth backend module provider

## `@backstage/plugin-scaffolder-backend-module-azure` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- 219d7f0: Create new scaffolder module for external integrations

## `@backstage/plugin-scaffolder-backend-module-bitbucket` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- 219d7f0: Create new scaffolder module for external integrations

## `@backstage/plugin-scaffolder-backend-module-gerrit` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- 219d7f0: Create new scaffolder module for external integrations

#### Patch Changes

- d86cd98: Add dry run support for the `publish:gerrit` action.

## `@backstage/plugin-scaffolder-backend-module-github` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- 219d7f0: Create new scaffolder module for external integrations

#### Patch Changes

- cb6a65e: The `scaffolder.defaultCommitMessage` config value is now being used if provided and uses "initial commit" when it is not provided.
- 28949ea: Add a new action for creating github-autolink references for a repository: `github:autolinks:create`

## `@backstage/backend-app-api` (0.5.8 → 0.5.9)

### 0.5.9

#### Patch Changes

- 1da5f43: Ensure redaction of secrets that have accidental extra whitespace around them
- 9f8f266: Add redacting for secrets in stack traces of logs

## `@backstage/backend-common` (0.19.10 → 0.20.0)

### 0.20.0

#### Minor Changes

- 870db76: Implemented `readTree` for Gitea provider to support TechDocs functionality

#### Patch Changes

- 7f04128: Allow a default cache TTL to be set through the app config
- 1ad8906: Use `Readable.from` to fix some of the stream issues
- d86a007: Fixed the AwsS3UrlReader host regex and host to allow the S3 reading for CN AWS domain
- bc67498: Updated dependency `archiver` to `^6.0.0`.
  Updated dependency `@types/archiver` to `^6.0.0`.
- 706fc3a: Updated dependency `@kubernetes/client-node` to `0.20.0`.
- 2666675: Updated dependency `@google-cloud/storage` to `^7.0.0`.
- d15d483: Add command `--runAsDefaultUser` for `@techdocs/cli generate` to bypass running the docker builds as host user for macOS and Linux.
- d1e00aa: Expose an `onAuth` handler for `git` actions to provide custom credentials

## `@backstage/backend-openapi-utils` (0.1.0 → 0.1.1)

### 0.1.1

#### Patch Changes

- aaa6fb3: Minor updates for TypeScript 5.2.2+ compatibility

## `@backstage/backend-tasks` (0.5.12 → 0.5.13)

### 0.5.13

#### Patch Changes

- d8f488a: Allow tasks to run more often that the default work check interval, which is 5 seconds.
- 0cbb03b: Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617

## `@backstage/backend-test-utils` (0.2.8 → 0.2.9)

### 0.2.9

#### Patch Changes

- cc4228e: Switched module ID to use kebab-case.
- b7de76a: Added support for PostgreSQL versions 15 and 16

  Also introduced a new `setDefaults(options: { ids?: TestDatabaseId[] })` static method that can be added to the `setupTests.ts` file to define the default database ids you want to use throughout your package. Usage would look like this: `TestDatabases.setDefaults({ ids: ['POSTGRES_12','POSTGRES_16'] })` and would result in PostgreSQL versions 12 and 16 being used for your tests.

## `@backstage/catalog-client` (1.4.6 → 1.5.0)

### 1.5.0

#### Minor Changes

- 3834067: The internals of `CatalogClient` are now auto-generated using the `backstage-repo-tools schema openapi generate-client` command.

#### Patch Changes

- 82fa88b: Fixes a bug where some query parameters were double URL encoded.

## `@backstage/cli` (0.24.0 → 0.25.0)

### 0.25.0

#### Minor Changes

- 3834067: Updates the ESLint config to ignore issues created by generated files in `**/src/generated/**`.

#### Patch Changes

- 32018ff: Enable the `tsx` loader to work on Node 18.19 and up
- 0ffee55: Toned down the warning message when git is not found
- c6f3743: Added a warning when starting a standalone backend plugin that hasn't been updated to the new backend system.
- 3e358b0: Added deprecation warning for React Router v6 beta, please make sure you have migrated your apps to use React Router v6 stable as support for the beta version will be removed. See the [migration tutorial](https://backstage.io/docs/tutorials/react-router-stable-migration) for more information.
- 219d7f0: Updating template generation for scaffolder module
- 8cda3c7: Tweaked Node.js version check for when to use the new module register API with the new backend `package start` command.
- a3edc18: Updated dependency `vite-plugin-node-polyfills` to `^0.17.0`.
- 627554e: Updated dependency `@rollup/plugin-node-resolve` to `^15.0.0`.
- c07cee5: Updated dependency `@rollup/plugin-json` to `^6.0.0`.
- bd586a5: Updated dependency `bfj` to `^8.0.0`.
- 8056425: Updated dependency `@typescript-eslint/eslint-plugin` to `6.12.0`.
- 017c425: Updated dependency `@typescript-eslint/eslint-plugin` to `6.11.0`.
- 2565cc8: Updated dependency `@rollup/plugin-commonjs` to `^25.0.0`.
- 33e96e5: Switched the `@typescript-eslint/eslint-plugin` dependency back to using a `^` version range.
- 0cbb03b: Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617

## `@backstage/cli-node` (0.2.0 → 0.2.1)

### 0.2.1

#### Patch Changes

- 0cbb03b: Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617

## `@backstage/config-loader` (1.5.3 → 1.6.0)

### 1.6.0

#### Minor Changes

- 24f5a85: Add "path" to `TransformFunc` context

## `@backstage/core-app-api` (1.11.1 → 1.11.2)

### 1.11.2

#### Patch Changes

- 3e358b0: Added deprecation warning for React Router v6 beta, please make sure you have migrated your apps to use React Router v6 stable as support for the beta version will be removed. See the [migration tutorial](https://backstage.io/docs/tutorials/react-router-stable-migration) for more information.
- 0cbb03b: Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617

## `@backstage/core-components` (0.13.8 → 0.13.9)

### 0.13.9

#### Patch Changes

- e8f2ace: Added a new `/testUtils` sub-path that initially exports a `mockBreakpoint` helper.
- 381ed86: Add missing export for IconLinkVertical
- 5c8a3e3: Minor improvements to `Table` component.
- 752df93: Fixes a problem where the `LogViewer` was not able to handle very large logs
- 4d9e3b3: Register component overrides in the global `OverrideComponentNameToClassKeys` provided by `@backstage/theme`. This will in turn will provide component style override types for `createUnifiedTheme`.
- 07dfdf3: Updated dependency `linkifyjs` to `4.1.3`.
- a518c5a: Updated dependency `@react-hookz/web` to `^23.0.0`.
- f291757: Update `linkify-react` to version `4.1.3`
- 175d86b: Fixed an issue where the `onChange` prop within `HeaderTabs` was triggering twice upon tab-switching.
- 0cbb03b: Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617

## `@backstage/core-plugin-api` (1.8.0 → 1.8.1)

### 1.8.1

#### Patch Changes

- 03d0b6d: Removed the alpha `convertLegacyRouteRef` utility, which as been moved to `@backstage/core-compat-api`
- 0c93dc3: The `createTranslationRef` function from the `/alpha` subpath can now also accept a nested object structure of default translation messages, which will be flatted using `.` separators.

## `@backstage/create-app` (0.5.7 → 0.5.8)

### 0.5.8

#### Patch Changes

- 8ece804: Bumped create-app version.
- 0351e09: Bumped create-app version.
- 3f1192f: Bumped create-app version.
- a96c2d4: Include the `<EntityLinksCard />` for group entities by default
- 375b6f7: CircelCI plugin moved permanently

## `@backstage/eslint-plugin` (0.1.3 → 0.1.4)

### 0.1.4

#### Patch Changes

- 107dc46: The `no-undeclared-imports` rule will now prefer using version queries that already exist en the repo for the same dependency type when installing new packages.

## `@backstage/frontend-app-api` (0.3.0 → 0.4.0)

### 0.4.0

#### Minor Changes

- e539735: Updated core extension structure to make space for the sign-in page by adding `core.router`.
- 44735df: Removed `featureLoader` from `createApp`, `features` instead accepts both `FrontendFeature` and `CreateAppFeatureLoader`
- af7bc3e: Switched all core extensions to instead use the namespace `'app'`.
- ea06590: The app no longer provides the `AppContext` from `@backstage/core-plugin-api`. Components that require this context to be available should use the `compatWrapper` helper from `@backstage/core-compat-api`.

#### Patch Changes

- 5eb6b8a: Added the nav logo extension for customization of sidebar logo
- aeb8008: Add support for translation extensions.
- 1f12fb7: Create a core components extension that allows adopters to override core app components such as `Progress`, `BootErrorPage`, `NotFoundErrorPage` and `ErrorBoundaryFallback`.
- a379243: Leverage the new `FrontendFeature` type to simplify interfaces
- 60d6eb5: Removed `@backstage/plugin-graphiql` dependency.
- b7adf24: Use the new plugin type for error boundary components.
- 5970928: Collect and register feature flags from plugins and extension overrides.
- 9ad4039: Bringing over apis from core-plugin-api
- 8f5d6c1: Updates to match the new extension input wrapping.
- c35036b: A `configLoader` passed to `createApp` now returns an object, to make room for future expansion
- f27ee7d: Migrate analytics route tracker component.
- b8cb780: Added `createSpecializedApp`, which is a synchronous version of `createApp` where config and features already need to be loaded.
- c36e0b9: Renamed `AppRouteBinder` to `CreateAppRouteBinder`
- cb4197a: Forward ` node`` instead of  `extensionId` to resolved extension inputs.
- 8837a96: Updates to match the introduction of `ExtensionDefinition` and new extension ID naming patterns.
- a5a0473: Updates to provide `node` to extension factories instead of `id` and `source`.
- 5cdf2b3: Updated usage of `Extension` and `ExtensionDefinition` as they are now opaque.
- f9ef632: Updates to match the new `coreExtensionData` structure.
- f1183b7: Renamed the `component` option of `createComponentExtension` to `loader`.

## `@backstage/frontend-plugin-api` (0.3.0 → 0.4.0)

### 0.4.0

#### Minor Changes

- af7bc3e: Switched all core extensions to instead use the namespace `'app'`.
- 5cdf2b3: Changed `Extension` and `ExtensionDefinition` to use opaque types.
- 8f5d6c1: Extension inputs are now wrapped into an additional object when passed to the extension factory, with the previous values being available at the `output` property. The `ExtensionInputValues` type has also been replaced by `ResolvedExtensionInputs`.
- 8837a96: **BREAKING**: This version changes how extensions are created and how their IDs are determined. The `createExtension` function now accepts `kind`, `namespace` and `name` instead of `id`. All of the new options are optional, and are used to construct the final extension ID. By convention extension creators should set the `kind` to match their own name, for example `createNavItemExtension` sets the kind `nav-item`.

  The `createExtension` function as well as all extension creators now also return an `ExtensionDefinition` rather than an `Extension`, which in turn needs to be passed to `createPlugin` or `createExtensionOverrides` to be used.

- f9ef632: Moved several extension data references from `coreExtensionData` to their respective extension creators.
- a5a0473: The extension `factory` function now longer receives `id` or `source`, but instead now provides the extension's `AppNode` as `node`. The `ExtensionBoundary` component has also been updated to receive a `node` prop rather than `id` and `source`.

#### Patch Changes

- a379243: Add the `FrontendFeature` type, which is the union of `BackstagePlugin` and `ExtensionOverrides`
- b7adf24: Update alpha component ref type to be more specific than any, delete boot page component and use new plugin type for error boundary component extensions.
- 5eb6b8a: Added the nav logo extension for customization of sidebar logo
- 1f12fb7: Create factories for overriding default core components extensions.
- 5970928: Add feature flags to plugins and extension overrides.
- e539735: Added `createSignInPageExtension`.
- 73246ec: Added translation APIs as well as `createTranslationExtension`.
- cb4197a: Forward ` node`` instead of  `extensionId` to resolved extension inputs.
- f27ee7d: Migrate analytics api and context files.
- 0cbb03b: Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617
- f1183b7: Renamed the `component` option of `createComponentExtension` to `loader`.

## `@backstage/integration` (1.7.2 → 1.8.0)

### 1.8.0

#### Minor Changes

- 870db76: Implemented `readTree` for Gitea provider to support TechDocs functionality

#### Patch Changes

- 99fb541: Updated dependency `@azure/identity` to `^4.0.0`.

## `@backstage/plugin-adr` (0.6.10 → 0.6.11)

### 0.6.11

#### Patch Changes

- 5814122: Updated `/alpha` exports to fit new naming patterns.
- 36c94b8: Refactor of the alpha exports due to API change in how extension IDs are constructed.
- fb8f3bd: Updated alpha translation message keys to use nested format and camel case.

## `@backstage/plugin-analytics-module-ga4` (0.1.6 → 0.1.7)

### 0.1.7

#### Patch Changes

- af6f227: Disabled `send_page_view` to get rid of events duplication

## `@backstage/plugin-api-docs` (0.10.1 → 0.10.2)

### 0.10.2

#### Patch Changes

- 816d331: Add dependency on `graphql-config` to compensate for `graphql-language-service` needing it but not shipping the dep properly
- 615159e: Updated dependency `graphiql` to `3.0.10`.
- e16e7ce: Updated dependency `@asyncapi/react-component` to `1.2.2`.
- 82fb18b: Updated dependency `@asyncapi/react-component` to `1.2.6`.
- 53e2c06: Updated dependency `@asyncapi/react-component` to `1.1.0`.

## `@backstage/plugin-apollo-explorer` (0.1.17 → 0.1.18)

### 0.1.18

#### Patch Changes

- e296b94: Updated dependency `@apollo/explorer` to `^3.0.0`.

## `@backstage/plugin-auth-backend` (0.20.0 → 0.20.1)

### 0.20.1

#### Patch Changes

- 7ac2575: `oauth2-proxy` auth implementation has been moved to `@backstage/plugin-auth-backend-module-oauth2-proxy-provider`
- 2a5891e: Migrate the atlassian auth provider to be implemented using the new `@backstage/plugin-auth-backend-module-atlassian-provider` module
- 783797a: fix static token issuer not being able to initialize
- e1c189b: The Okta provider implementation is moved to the new module
- a62764b: Updated dependency `passport` to `^0.7.0`.
- bcbbf8e: Updated dependency `@google-cloud/firestore` to `^7.0.0`.

## `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.2.1 → 0.2.2)

### 0.2.2

#### Patch Changes

- cc4228e: Switched module ID to use kebab-case.

## `@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.4 → 0.1.5)

### 0.1.5

#### Patch Changes

- a62764b: Updated dependency `passport` to `^0.7.0`.

## `@backstage/plugin-auth-backend-module-google-provider` (0.1.4 → 0.1.5)

### 0.1.5

#### Patch Changes

- cc4228e: Switched module ID to use kebab-case.

## `@backstage/plugin-auth-backend-module-microsoft-provider` (0.1.2 → 0.1.3)

### 0.1.3

#### Patch Changes

- a62764b: Updated dependency `passport` to `^0.7.0`.

## `@backstage/plugin-auth-backend-module-oauth2-provider` (0.1.4 → 0.1.5)

### 0.1.5

#### Patch Changes

- a62764b: Updated dependency `passport` to `^0.7.0`.

## `@backstage/plugin-auth-backend-module-pinniped-provider` (0.1.1 → 0.1.2)

### 0.1.2

#### Patch Changes

- a62764b: Updated dependency `passport` to `^0.7.0`.

## `@backstage/plugin-auth-node` (0.4.1 → 0.4.2)

### 0.4.2

#### Patch Changes

- a62764b: Updated dependency `passport` to `^0.7.0`.
- 0cbb03b: Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617

## `@backstage/plugin-azure-devops` (0.3.9 → 0.3.10)

### 0.3.10

#### Patch Changes

- c70e4f5: Added multi-org support
- 7c9af0b: Added support for annotations that use a subpath for the host. Also validated that the annotations have the correct number of slashes.
- 043b724: Introduced new `AzureDevOpsAnnotatorProcessor` that adds the needed annotations automatically. Also, moved constants to common package so they can be shared more easily

## `@backstage/plugin-azure-devops-backend` (0.4.4 → 0.5.0)

### 0.5.0

#### Minor Changes

- 844969c: **BREAKING** New `fromConfig` static method must be used now when creating an instance of the `AzureDevOpsApi`

  Added support for using the `AzureDevOpsCredentialsProvider`

#### Patch Changes

- c70e4f5: Added multi-org support
- 646db72: Updated encoding of Org to use `encodeURIComponent` when building URL used to get credentials from credential provider
- 043b724: Introduced new `AzureDevOpsAnnotatorProcessor` that adds the needed annotations automatically. Also, moved constants to common package so they can be shared more easily

## `@backstage/plugin-azure-devops-common` (0.3.1 → 0.3.2)

### 0.3.2

#### Patch Changes

- c70e4f5: Added multi-org support
- 043b724: Introduced new `AzureDevOpsAnnotatorProcessor` that adds the needed annotations automatically. Also, moved constants to common package so they can be shared more easily

## `@backstage/plugin-azure-sites-backend` (0.1.17 → 0.1.18)

### 0.1.18

#### Patch Changes

- 99fb541: Updated dependency `@azure/identity` to `^4.0.0`.
- b7a13ed: Updated dependency `@azure/arm-appservice` to `^14.0.0`.

## `@backstage/plugin-bazaar` (0.2.19 → 0.2.20)

### 0.2.20

#### Patch Changes

- 5d79682: Internalize 'AboutField' to break catalog dependency

## `@backstage/plugin-bitbucket-cloud-common` (0.2.14 → 0.2.15)

### 0.2.15

#### Patch Changes

- acf9390: Updated dependency `ts-morph` to `^20.0.0`.

## `@backstage/plugin-catalog` (1.15.1 → 1.16.0)

### 1.16.0

#### Minor Changes

- e223f22: Properly support both function- and string-form visibility filter expressions in the new extensions exported via `/alpha`.
- b8e1eb2: The `columns` prop can be an array or a function that returns an array in order to override the default columns of the `CatalogIndexPage`.

#### Patch Changes

- bc7e6d3: Fix copy entity url function in http contexts.
- 5360097: Ensure that passed-in icons are taken advantage of in the presentation API
- 4785d05: Add permission check to catalog create and refresh button
- cd910c4: - Fixes bug where after unregistering an entity you are redirected to `/`.
  - Adds an optional external route `unregisterRedirect` to override this behaviour to another route.
- 03d0b6d: The `convertLegacyRouteRef` utility used by the alpha exports is now imported from `@backstage/core-compat-api`.
- 2d708d8: Internal naming updates for `/alpha` exports.
- a5a0473: Internal refactor of alpha exports due to a change in how extension factories are defined.
- 4d9e3b3: Register component overrides in the global `OverrideComponentNameToClassKeys` provided by `@backstage/theme`. This will in turn will provide component style override types for `createUnifiedTheme`.
- a1227cc: Wrap `/alpha` export extension elements in backwards compatibility wrapper.
- 78a10bb: Adding in spec.type chip to search results for clarity
- 8f5d6c1: Updates to the `/alpha` exports to match the extension input wrapping change.
- 36c94b8: Refactor of the alpha exports due to API change in how extension IDs are constructed.
- 8587f06: Added pagination support to `CatalogIndexPage`

  `CatalogIndexPage` now offers an optional pagination feature, designed to accommodate adopters managing extensive catalogs. This new capability allows for better handling of large amounts of data.

  To activate the pagination mode, simply update your `App.tsx` as follows:

  ```diff
    const routes = (
      <FlatRoutes>
        ...
  -     <Route path="/catalog" element={<CatalogIndexPage />} />
  +     <Route path="/catalog" element={<CatalogIndexPage pagination />} />
        ...
  ```

  In case you have a custom catalog page and you want to enable pagination, you need to pass the `pagination` prop to `EntityListProvider` instead.

- fb8f3bd: Updated alpha translation message keys to use nested format and camel case.
- 531e1a2: Updated alpha plugin to include the `unregisterRedirect` external route.

## `@backstage/plugin-catalog-backend` (1.15.0 → 1.16.0)

### 1.16.0

#### Minor Changes

- 7804597: Permission rules can now be added for the Catalog plugin through the `CatalogPermissionExtensionPoint` interface.

#### Patch Changes

- 3834067: Update the OpenAPI spec to support the use of `openapi-generator`.
- 50ee804: Wrap single `pipelineLoop` of TaskPipeline in a span for better traces
- 7123c58: Updated dependency `@types/glob` to `^8.0.0`.
- 0cbb03b: Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617
- a168507: Deprecated `EntitiesSearchFilter` and `EntityFilter`, which can now be imported from `@backstage/plugin-catalog-node` instead

## `@backstage/plugin-catalog-backend-module-aws` (0.3.1 → 0.3.2)

### 0.3.2

#### Patch Changes

- cc4228e: Switched module ID to use kebab-case.

## `@backstage/plugin-catalog-backend-module-azure` (0.1.26 → 0.1.27)

### 0.1.27

#### Patch Changes

- cc4228e: Switched module ID to use kebab-case.

## `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.1.0 → 0.1.1)

### 0.1.1

#### Patch Changes

- eb44e92: Support authenticated backends

## `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.22 → 0.1.23)

### 0.1.23

#### Patch Changes

- cc4228e: Switched module ID to use kebab-case.

## `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.20 → 0.1.21)

### 0.1.21

#### Patch Changes

- cc4228e: Switched module ID to use kebab-case.

## `@backstage/plugin-catalog-backend-module-gcp` (0.1.7 → 0.1.8)

### 0.1.8

#### Patch Changes

- 42c1aee: Updated dependency `@google-cloud/container` to `^5.0.0`.
- cc4228e: Switched module ID to use kebab-case.

## `@backstage/plugin-catalog-backend-module-gerrit` (0.1.23 → 0.1.24)

### 0.1.24

#### Patch Changes

- cc4228e: Switched module ID to use kebab-case.

## `@backstage/plugin-catalog-backend-module-github` (0.4.5 → 0.4.6)

### 0.4.6

#### Patch Changes

- cc4228e: Switched module ID to use kebab-case.

## `@backstage/plugin-catalog-backend-module-github-org` (0.1.1 → 0.1.2)

### 0.1.2

#### Patch Changes

- cc4228e: Switched module ID to use kebab-case.

## `@backstage/plugin-catalog-backend-module-gitlab` (0.3.4 → 0.3.5)

### 0.3.5

#### Patch Changes

- cc4228e: Switched module ID to use kebab-case.

## `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.11 → 0.4.12)

### 0.4.12

#### Patch Changes

- 43b2eb8: Ensure that cursors always come back as JSON on sqlite too
- cc4228e: Switched module ID to use kebab-case.

## `@backstage/plugin-catalog-backend-module-msgraph` (0.5.14 → 0.5.15)

### 0.5.15

#### Patch Changes

- 99fb541: Updated dependency `@azure/identity` to `^4.0.0`.

## `@backstage/plugin-catalog-backend-module-puppetdb` (0.1.12 → 0.1.13)

### 0.1.13

#### Patch Changes

- cc4228e: Switched module ID to use kebab-case.

## `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.4 → 0.1.5)

### 0.1.5

#### Patch Changes

- cc4228e: Switched module ID to use kebab-case.

## `@backstage/plugin-catalog-backend-module-unprocessed` (0.3.4 → 0.3.5)

### 0.3.5

#### Patch Changes

- cc4228e: Switched module ID to use kebab-case.

## `@backstage/plugin-catalog-import` (0.10.3 → 0.10.4)

### 0.10.4

#### Patch Changes

- 03d0b6d: The `convertLegacyRouteRef` utility used by the alpha exports is now imported from `@backstage/core-compat-api`.
- a1227cc: Wrap `/alpha` export extension elements in backwards compatibility wrapper.
- 5814122: Updated `/alpha` exports to fit new naming patterns.
- 36c94b8: Refactor of the alpha exports due to API change in how extension IDs are constructed.

## `@backstage/plugin-catalog-node` (1.5.0 → 1.6.0)

### 1.6.0

#### Minor Changes

- a168507: Added `EntitiesSearchFilter` and `EntityFilter` from `@backstage/plugin-catalog-backend`, for reuse
- 7804597: Permission rules can now be added for the Catalog plugin through the `CatalogPermissionExtensionPoint` interface.

## `@backstage/plugin-catalog-react` (1.9.1 → 1.9.2)

### 1.9.2

#### Patch Changes

- 8587f06: Added pagination support to `EntityListProvider`.
- 5360097: Ensure that passed-in icons are taken advantage of in the presentation API
- fd9863c: Grouped all `/alpha` extension data reference exports under `catalogExtensionData`.
- 08d9e67: Add default icon for kind resource.
- aaa6fb3: Minor updates for TypeScript 5.2.2+ compatibility
- a5a0473: Internal refactor of alpha exports due to a change in how extension factories are defined.
- 4d9e3b3: Register component overrides in the global `OverrideComponentNameToClassKeys` provided by `@backstage/theme`. This will in turn will provide component style override types for `createUnifiedTheme`.
- 8f5d6c1: Updates to the `/alpha` exports to match the extension input wrapping change.
- 36c94b8: Refactor of the alpha exports due to API change in how extension IDs are constructed.
- e223f22: Breaking alpha-API change to entity visibility filter functions to accept a bare entity as their first argument, instead of an object with an entity property.

  Functions that accept such filters now also support the string expression form of filters.

- eee0ff2: Fixed a issue where `CatalogPage` wasn't using the chosen `initiallySelectedFilter` as intended.

## `@backstage/plugin-circleci` (0.3.27 → 0.3.28)

### 0.3.28

#### Patch Changes

- 375b6f7: CircelCI plugin moved permanently

## `@backstage/plugin-entity-validation` (0.1.12 → 0.1.13)

### 0.1.13

#### Patch Changes

- a518c5a: Updated dependency `@react-hookz/web` to `^23.0.0`.

## `@backstage/plugin-events-backend` (0.2.16 → 0.2.17)

### 0.2.17

#### Patch Changes

- cc4228e: Switched module ID to use kebab-case.

## `@backstage/plugin-events-backend-module-aws-sqs` (0.2.10 → 0.2.11)

### 0.2.11

#### Patch Changes

- cc4228e: Switched module ID to use kebab-case.

## `@backstage/plugin-events-backend-module-azure` (0.1.17 → 0.1.18)

### 0.1.18

#### Patch Changes

- cc4228e: Switched module ID to use kebab-case.

## `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.17 → 0.1.18)

### 0.1.18

#### Patch Changes

- cc4228e: Switched module ID to use kebab-case.

## `@backstage/plugin-events-backend-module-gerrit` (0.1.17 → 0.1.18)

### 0.1.18

#### Patch Changes

- cc4228e: Switched module ID to use kebab-case.

## `@backstage/plugin-events-backend-module-github` (0.1.17 → 0.1.18)

### 0.1.18

#### Patch Changes

- cc4228e: Switched module ID to use kebab-case.

## `@backstage/plugin-events-backend-module-gitlab` (0.1.17 → 0.1.18)

### 0.1.18

#### Patch Changes

- cc4228e: Switched module ID to use kebab-case.

## `@backstage/plugin-explore` (0.4.13 → 0.4.14)

### 0.4.14

#### Patch Changes

- aac659e: Added option to set `Direction` for the graph in the `GroupsDiagram`
- 5814122: Updated `/alpha` exports to fit new naming patterns.
- 36c94b8: Refactor of the alpha exports due to API change in how extension IDs are constructed.

## `@backstage/plugin-gcp-projects` (0.3.43 → 0.3.44)

### 0.3.44

#### Patch Changes

- a518c5a: Updated dependency `@react-hookz/web` to `^23.0.0`.
- d2f5662: Fix query parameter for project details page which should point to projectId rather than project name

## `@backstage/plugin-github-actions` (0.6.8 → 0.6.9)

### 0.6.9

#### Patch Changes

- 08d7e46: Github Workflow Runs UI is modified to show in optional Card view instead of table, with branch selection option

## `@backstage/plugin-graphiql` (0.3.0 → 0.3.1)

### 0.3.1

#### Patch Changes

- 03d0b6d: The `convertLegacyRouteRef` utility used by the alpha exports is now imported from `@backstage/core-compat-api`.
- a1227cc: Wrap `/alpha` export extension elements in backwards compatibility wrapper.
- 5814122: Updated `/alpha` exports to fit new naming patterns.
- 8f5d6c1: Updates to the `/alpha` exports to match the extension input wrapping change.
- 36c94b8: Refactor of the alpha exports due to API change in how extension IDs are constructed.

## `@backstage/plugin-home` (0.5.11 → 0.6.0)

### 0.6.0

#### Minor Changes

- 5a317f5: Added view of entities grouped by kind to make it easier to distinguish entities with different kind but same name

#### Patch Changes

- 2633d64: Change user settings backend plugin id and fix when using user setting backend home page first will cause edit page loop render
- a1227cc: Wrap `/alpha` export extension elements in backwards compatibility wrapper.
- 5814122: Updated `/alpha` exports to fit new naming patterns.
- 8f5d6c1: Updates to the `/alpha` exports to match the extension input wrapping change.
- 2b72591: Updated dependency `@rjsf/utils` to `5.14.3`.
  Updated dependency `@rjsf/core` to `5.14.3`.
  Updated dependency `@rjsf/material-ui` to `5.14.3`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.3`.
- 6cd12f2: Updated dependency `@rjsf/utils` to `5.14.1`.
  Updated dependency `@rjsf/core` to `5.14.1`.
  Updated dependency `@rjsf/material-ui` to `5.14.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.1`.
- 64301d3: Updated dependency `@rjsf/utils` to `5.15.0`.
  Updated dependency `@rjsf/core` to `5.15.0`.
  Updated dependency `@rjsf/material-ui` to `5.15.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.15.0`.
- 63c494e: Updated dependency `@rjsf/utils` to `5.14.2`.
  Updated dependency `@rjsf/core` to `5.14.2`.
  Updated dependency `@rjsf/material-ui` to `5.14.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.2`.
- 36c94b8: Refactor of the alpha exports due to API change in how extension IDs are constructed.
- 54cef27: StarredEntities component calls `getEntitiesByRefs` instead of `getEntities` to improve performance since we have the `entityRefs`
- c8908d4: Use new option from RJSF 5.15
- 0cbb03b: Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617

## `@backstage/plugin-home-react` (0.1.5 → 0.1.6)

### 0.1.6

#### Patch Changes

- 2b72591: Updated dependency `@rjsf/utils` to `5.14.3`.
  Updated dependency `@rjsf/core` to `5.14.3`.
  Updated dependency `@rjsf/material-ui` to `5.14.3`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.3`.
- 6cd12f2: Updated dependency `@rjsf/utils` to `5.14.1`.
  Updated dependency `@rjsf/core` to `5.14.1`.
  Updated dependency `@rjsf/material-ui` to `5.14.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.1`.
- 64301d3: Updated dependency `@rjsf/utils` to `5.15.0`.
  Updated dependency `@rjsf/core` to `5.15.0`.
  Updated dependency `@rjsf/material-ui` to `5.15.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.15.0`.
- 63c494e: Updated dependency `@rjsf/utils` to `5.14.2`.
  Updated dependency `@rjsf/core` to `5.14.2`.
  Updated dependency `@rjsf/material-ui` to `5.14.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.2`.

## `@backstage/plugin-kubernetes` (0.11.2 → 0.11.3)

### 0.11.3

#### Patch Changes

- 899d71a: Change `formatClusterLink` to be an API and make it async for further customization possibilities.

  **BREAKING**
  If you have a custom k8s page and used `formatClusterLink` directly, you need to migrate to new `kubernetesClusterLinkFormatterApiRef`

- 706fc3a: Updated dependency `@kubernetes/client-node` to `0.20.0`.

## `@backstage/plugin-kubernetes-backend` (0.13.1 → 0.14.0)

### 0.14.0

#### Minor Changes

- 52050ad: You can now select `single` kubernetes cluster that the entity is part-of from all your defined kubernetes clusters, by passing `backstage.io/kubernetes-cluster` annotation with the defined cluster name.

  If you do not specify the annotation by `default it fetches all` defined kubernetes cluster.

  To apply

  catalog-info.yaml

  ```diff
  annotations:
    'backstage.io/kubernetes-id': dice-roller
    'backstage.io/kubernetes-namespace': dice-space
  + 'backstage.io/kubernetes-cluster': dice-cluster
    'backstage.io/kubernetes-label-selector': 'app=my-app,component=front-end'
  ```

#### Patch Changes

- 6010564: The `kubernetes-node` plugin has been modified to house a new extension points for Kubernetes backend plugin;
  `KubernetesClusterSupplierExtensionPoint` is introduced .
  `kubernetesAuthStrategyExtensionPoint` is introduced .
  `kubernetesFetcherExtensionPoint` is introduced .
  `kubernetesServiceLocatorExtensionPoint` is introduced .

  The `kubernetes-backend` plugin was modified to use this new extension point.

- 706fc3a: Updated dependency `@kubernetes/client-node` to `0.20.0`.
- ae94d3c: Updated dependency `@aws-crypto/sha256-js` to `^5.0.0`.
- 99fb541: Updated dependency `@azure/identity` to `^4.0.0`.
- 42c1aee: Updated dependency `@google-cloud/container` to `^5.0.0`.

## `@backstage/plugin-kubernetes-common` (0.7.1 → 0.7.2)

### 0.7.2

#### Patch Changes

- 706fc3a: Updated dependency `@kubernetes/client-node` to `0.20.0`.
- 5d79682: Remove unused dependency

## `@backstage/plugin-kubernetes-node` (0.1.1 → 0.1.2)

### 0.1.2

#### Patch Changes

- 6010564: The `kubernetes-node` plugin has been modified to house a new extension points for Kubernetes backend plugin;
  `KubernetesClusterSupplierExtensionPoint` is introduced .
  `kubernetesAuthStrategyExtensionPoint` is introduced .
  `kubernetesFetcherExtensionPoint` is introduced .
  `kubernetesServiceLocatorExtensionPoint` is introduced .

  The `kubernetes-backend` plugin was modified to use this new extension point.

## `@backstage/plugin-kubernetes-react` (0.1.1 → 0.2.0)

### 0.2.0

#### Minor Changes

- 899d71a: Change `formatClusterLink` to be an API and make it async for further customization possibilities.

  **BREAKING**
  If you have a custom k8s page and used `formatClusterLink` directly, you need to migrate to new `kubernetesClusterLinkFormatterApiRef`

#### Patch Changes

- b5ae2e5: Add ID property to the table displaying kubernetes pods to avoid closing the info sidebar when the data reloads and needs to rerender.
- 706fc3a: Updated dependency `@kubernetes/client-node` to `0.20.0`.

## `@backstage/plugin-lighthouse` (0.4.12 → 0.4.13)

### 0.4.13

#### Patch Changes

- ffbf656: Updated README

## `@backstage/plugin-lighthouse-backend` (0.3.4 → 0.4.0)

### 0.4.0

#### Minor Changes

- 7f0dbfd: Fixed crashes faced with custom schedule configuration. The configuration schema has been update to leverage the TaskScheduleDefinition interface. It is highly recommended to move the `lighthouse.shedule` and `lighthouse.timeout` respectively to `lighthouse.schedule.frequency` and `lighthouse.schedule.timeout`.

## `@backstage/plugin-org` (0.6.17 → 0.6.18)

### 0.6.18

#### Patch Changes

- 59c24b9: Fix issue where members inside of `<EntityMembersListCard>` would be rendered as squished when the card itself was shrunk down.
- 3a65d9c: Support member list scrollable when parent has specified height
- 4785d05: Add permission check to catalog create and refresh button

## `@backstage/plugin-pagerduty` (0.6.8 → 0.7.0)

### 0.7.0

#### Minor Changes

- 5fca16f: This package has been deprecated, consider using [@pagerduty/backstage-plugin](https://github.com/pagerduty/backstage-plugin) instead.

## `@backstage/plugin-permission-backend` (0.5.30 → 0.5.31)

### 0.5.31

#### Patch Changes

- 0cbb03b: Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617

## `@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.4 → 0.1.5)

### 0.1.5

#### Patch Changes

- cc4228e: Switched module ID to use kebab-case.

## `@backstage/plugin-permission-common` (0.7.10 → 0.7.11)

### 0.7.11

#### Patch Changes

- 0cbb03b: Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617

## `@backstage/plugin-permission-node` (0.7.18 → 0.7.19)

### 0.7.19

#### Patch Changes

- 0cbb03b: Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617

## `@backstage/plugin-playlist-backend` (0.3.11 → 0.3.12)

### 0.3.12

#### Patch Changes

- 0cbb03b: Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617

## `@backstage/plugin-scaffolder` (1.16.1 → 1.17.0)

### 1.17.0

#### Minor Changes

- df88d09: Add a new git repository url picker for `gitea`. This `GiteaRepoPicker` can be used in a template to scaffold a project to be cloned using gitea.
- 33edf50: Added support for dealing with user provided secrets using a new field extension `ui:field: Secret`

#### Patch Changes

- 6806d10: Added `headerOptions` to `TemplateListPage` to optionally override default values.
  Changed `themeId` of TemplateListPage from `website` to `home`.
- aaa6fb3: Minor updates for TypeScript 5.2.2+ compatibility
- 2b72591: Updated dependency `@rjsf/utils` to `5.14.3`.
  Updated dependency `@rjsf/core` to `5.14.3`.
  Updated dependency `@rjsf/material-ui` to `5.14.3`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.3`.
- 6cd12f2: Updated dependency `@rjsf/utils` to `5.14.1`.
  Updated dependency `@rjsf/core` to `5.14.1`.
  Updated dependency `@rjsf/material-ui` to `5.14.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.1`.
- a518c5a: Updated dependency `@react-hookz/web` to `^23.0.0`.
- 64301d3: Updated dependency `@rjsf/utils` to `5.15.0`.
  Updated dependency `@rjsf/core` to `5.15.0`.
  Updated dependency `@rjsf/material-ui` to `5.15.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.15.0`.
- 63c494e: Updated dependency `@rjsf/utils` to `5.14.2`.
  Updated dependency `@rjsf/core` to `5.14.2`.
  Updated dependency `@rjsf/material-ui` to `5.14.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.2`.
- b5fa691: Fixing `headerOptions` not being passed through the `TemplatePage` component
- c8908d4: Use new option from RJSF 5.15
- 0cbb03b: Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617

## `@backstage/plugin-scaffolder-backend` (1.19.1 → 1.19.2)

### 1.19.2

#### Patch Changes

- 219d7f0: Refactor some methods to `-node` instead and use the new external modules
- aff34fc: Fix issue with Circular JSON dependencies in templating
- 48667b4: Fix creating env secret in github:environment:create action
- 0cbb03b: Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617
- 28949ea: Add a new action for creating github-autolink references for a repository: `github:autolinks:create`

## `@backstage/plugin-scaffolder-backend-module-gitlab` (0.2.10 → 0.2.11)

### 0.2.11

#### Patch Changes

- 219d7f0: Extract some more actions to this library
- 0cbb03b: Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617

## `@backstage/plugin-scaffolder-backend-module-sentry` (0.1.15 → 0.1.16)

### 0.1.16

#### Patch Changes

- 7f8a801: Added examples for `sentry:project:create` scaffolder action and unit tests.

## `@backstage/plugin-scaffolder-node` (0.2.8 → 0.2.9)

### 0.2.9

#### Patch Changes

- 219d7f0: Refactor some methods to `-node` instead and use the new external modules
- 0cbb03b: Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617

## `@backstage/plugin-scaffolder-react` (1.6.1 → 1.7.0)

### 1.7.0

#### Minor Changes

- 33edf50: Added support for dealing with user provided secrets using a new field extension `ui:field: Secret`

#### Patch Changes

- 670c7cc: Fix bug where `properties` is set to empty object when it should be empty for schema dependencies
- fa66d1b: Fixed bug in `ReviewState` where `enum` value was displayed in step review instead of the corresponding label when using `enumNames`
- e516bf4: Step titles in the Stepper are now clickable and redirect the user to the corresponding step, as an alternative to using the back buttons.
- aaa6fb3: Minor updates for TypeScript 5.2.2+ compatibility
- 2aee53b: Add horizontal slider if stepper overflows
- 2b72591: Updated dependency `@rjsf/utils` to `5.14.3`.
  Updated dependency `@rjsf/core` to `5.14.3`.
  Updated dependency `@rjsf/material-ui` to `5.14.3`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.3`.
- 6cd12f2: Updated dependency `@rjsf/utils` to `5.14.1`.
  Updated dependency `@rjsf/core` to `5.14.1`.
  Updated dependency `@rjsf/material-ui` to `5.14.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.1`.
- a518c5a: Updated dependency `@react-hookz/web` to `^23.0.0`.
- 64301d3: Updated dependency `@rjsf/utils` to `5.15.0`.
  Updated dependency `@rjsf/core` to `5.15.0`.
  Updated dependency `@rjsf/material-ui` to `5.15.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.15.0`.
- 63c494e: Updated dependency `@rjsf/utils` to `5.14.2`.
  Updated dependency `@rjsf/core` to `5.14.2`.
  Updated dependency `@rjsf/material-ui` to `5.14.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.2`.
- c8908d4: Use new option from RJSF 5.15
- 0cbb03b: Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617
- 5bb5240: Fixed issue for showing undefined for hidden form items

## `@backstage/plugin-search` (1.4.3 → 1.4.4)

### 1.4.4

#### Patch Changes

- 03d0b6d: The `convertLegacyRouteRef` utility used by the alpha exports is now imported from `@backstage/core-compat-api`.
- a1227cc: Wrap `/alpha` export extension elements in backwards compatibility wrapper.
- 5814122: Updated `/alpha` exports to fit new naming patterns.
- 8f5d6c1: Updates to the `/alpha` exports to match the extension input wrapping change.
- 36c94b8: Refactor of the alpha exports due to API change in how extension IDs are constructed.

## `@backstage/plugin-search-backend` (1.4.7 → 1.4.8)

### 1.4.8

#### Patch Changes

- 0cbb03b: Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617

## `@backstage/plugin-search-backend-module-catalog` (0.1.11 → 0.1.12)

### 0.1.12

#### Patch Changes

- cc4228e: Switched module ID to use kebab-case.

## `@backstage/plugin-search-backend-module-elasticsearch` (1.3.10 → 1.3.11)

### 1.3.11

#### Patch Changes

- cc4228e: Switched module ID to use kebab-case.

## `@backstage/plugin-search-backend-module-explore` (0.1.11 → 0.1.12)

### 0.1.12

#### Patch Changes

- cc4228e: Switched module ID to use kebab-case.

## `@backstage/plugin-search-backend-module-pg` (0.5.16 → 0.5.17)

### 0.5.17

#### Patch Changes

- cc4228e: Switched module ID to use kebab-case.

## `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.1.0 → 0.1.1)

### 0.1.1

#### Patch Changes

- cc4228e: Switched module ID to use kebab-case.

## `@backstage/plugin-search-backend-module-techdocs` (0.1.11 → 0.1.12)

### 0.1.12

#### Patch Changes

- cc4228e: Switched module ID to use kebab-case.

## `@backstage/plugin-search-react` (1.7.3 → 1.7.4)

### 1.7.4

#### Patch Changes

- a5a0473: Internal refactor of alpha exports due to a change in how extension factories are defined.
- 84dabc5: Removed `@backstage/frontend-app-api` dependency.
- 5814122: Updated `/alpha` exports to fit new naming patterns.
- 6f280fa: Capture analytics even when number of results is not available, since the total result count is not something that is always available for all search engines and configurations.
- 36c94b8: Refactor of the alpha exports due to API change in how extension IDs are constructed.

## `@backstage/plugin-stack-overflow` (0.1.22 → 0.1.23)

### 0.1.23

#### Patch Changes

- 5814122: Updated `/alpha` exports to fit new naming patterns.
- 36c94b8: Refactor of the alpha exports due to API change in how extension IDs are constructed.

## `@backstage/plugin-tech-radar` (0.6.10 → 0.6.11)

### 0.6.11

#### Patch Changes

- 03d0b6d: The `convertLegacyRouteRef` utility used by the alpha exports is now imported from `@backstage/core-compat-api`.
- a1227cc: Wrap `/alpha` export extension elements in backwards compatibility wrapper.
- 5814122: Updated `/alpha` exports to fit new naming patterns.
- 36c94b8: Refactor of the alpha exports due to API change in how extension IDs are constructed.

## `@backstage/plugin-techdocs` (1.9.1 → 1.9.2)

### 1.9.2

#### Patch Changes

- 03d0b6d: The `convertLegacyRouteRef` utility used by the alpha exports is now imported from `@backstage/core-compat-api`.
- a1227cc: Wrap `/alpha` export extension elements in backwards compatibility wrapper.
- 5814122: Updated `/alpha` exports to fit new naming patterns.
- 36c94b8: Refactor of the alpha exports due to API change in how extension IDs are constructed.

## `@backstage/plugin-techdocs-addons-test-utils` (1.0.24 → 1.0.25)

### 1.0.25

#### Patch Changes

- 3f354e6: Move `@testing-library/react` to be a `peerDependency`
- 5d79682: Remove unnecessary catalog dependency

## `@backstage/plugin-techdocs-backend` (1.9.0 → 1.9.1)

### 1.9.1

#### Patch Changes

- a402644: Regenerates a fresh token for each call to the search index when collating techdocs.

## `@backstage/plugin-techdocs-module-addons-contrib` (1.1.2 → 1.1.3)

### 1.1.3

#### Patch Changes

- a518c5a: Updated dependency `@react-hookz/web` to `^23.0.0`.

## `@backstage/plugin-techdocs-node` (1.10.0 → 1.11.0)

### 1.11.0

#### Minor Changes

- d15d483: Add command `--runAsDefaultUser` for `@techdocs/cli generate` to bypass running the docker builds as host user for macOS and Linux.

#### Patch Changes

- 99fb541: Updated dependency `@azure/identity` to `^4.0.0`.
- 2666675: Updated dependency `@google-cloud/storage` to `^7.0.0`.
- 4f773c1: Bumped the default TechDocs docker image version to the latest which was released several month ago

## `@backstage/plugin-user-settings` (0.7.13 → 0.7.14)

### 0.7.14

#### Patch Changes

- 03d0b6d: The `convertLegacyRouteRef` utility used by the alpha exports is now imported from `@backstage/core-compat-api`.
- a1227cc: Wrap `/alpha` export extension elements in backwards compatibility wrapper.
- 5814122: Updated `/alpha` exports to fit new naming patterns.
- 8f5d6c1: Updates to the `/alpha` exports to match the extension input wrapping change.
- 36c94b8: Refactor of the alpha exports due to API change in how extension IDs are constructed.
- fb8f3bd: Updated alpha translation message keys to use nested format and camel case.

## `@backstage/plugin-user-settings-backend` (0.2.6 → 0.2.7)

### 0.2.7

#### Patch Changes

- 2633d64: Change user settings backend plugin id and fix when using user setting backend home page first will cause edit page loop render

## `@backstage/plugin-vault-backend` (0.4.0 → 0.4.1)

### 0.4.1

#### Patch Changes

- b7de76a: Updated to test using PostgreSQL 12 and 16

## `@backstage/repo-tools` (0.4.0 → 0.5.0)

### 0.5.0

#### Minor Changes

- aea8f8d: **BREAKING**: API Reports generated for sub-path exports now place the name as a suffix rather than prefix, for example `api-report-alpha.md` instead of `alpha-api-report.md`. When upgrading to this version you'll need to re-create any such API reports and delete the old ones.
- 3834067: Adds a new command `schema openapi generate-client` that creates a Typescript client with Backstage flavor, including the discovery API and fetch API. This command doesn't currently generate a complete client and needs to be wrapped or exported manually by a separate Backstage plugin. See `@backstage/catalog-client/src/generated` for example output.

#### Patch Changes

- f909e9d: Includes templates in @backstage/repo-tools package and use them in the CLI
- da3c4db: Updates the `schema openapi generate-client` command to export all generated types from the generated directory.
- 7959f23: The `api-reports` command now checks for api report files that no longer apply.
  If it finds such files, it's treated basically the same as report errors do, and
  the check fails.

  For example, if you had an `api-report-alpha.md` but then removed the alpha
  export, the reports generator would now report that this file needs to be
  deleted.

- f49e237: Fixed a bug where `schema openapi init` created an invalid test command.
- f91be2c: Updated dependency `@stoplight/types` to `^14.0.0`.
- 45bfb20: Execute `openapi-generator-cli` from `@backstage/repo-tools` directory to force it to use our openapitools.json config file.

## `@backstage/test-utils` (1.4.5 → 1.4.6)

### 1.4.6

#### Patch Changes

- e8f2ace: Deprecated `mockBreakpoint`, as it is now available from `@backstage/core-components/testUtils` instead.

## `@backstage/theme` (0.4.4 → 0.5.0)

### 0.5.0

#### Minor Changes

- 4d9e3b3: Added a global `OverrideComponentNameToClassKeys` for other plugins and packages to populate using module augmentation. This will in turn will provide component style override types for `createUnifiedTheme`.

#### Patch Changes

- cd0dd4c: Align Material UI v5 `Paper` component background color in dark mode to v4.

## `@techdocs/cli` (1.7.0 → 1.8.0)

### 1.8.0

#### Minor Changes

- d15d483: Add command `--runAsDefaultUser` for `@techdocs/cli generate` to bypass running the docker builds as host user for macOS and Linux.
- b2dccad: Support passing additional `mkdocs-server` CLI parameters (`--dirtyreload`, `--strict` and `--clean`) when run in containerized mode.

_Excluded dependency updates for packages: `@backstage/app-defaults`, `@backstage/backend-defaults`, `@backstage/backend-plugin-api`, `@backstage/dev-utils`, `@backstage/integration-react`, `@backstage/plugin-adr-backend`, `@backstage/plugin-adr-common`, `@backstage/plugin-airbrake`, `@backstage/plugin-airbrake-backend`, `@backstage/plugin-allure`, `@backstage/plugin-analytics-module-ga`, `@backstage/plugin-analytics-module-newrelic-browser`, `@backstage/plugin-apache-airflow`, `@backstage/plugin-app-backend`, `@backstage/plugin-app-node`, `@backstage/plugin-auth-backend-module-github-provider`, `@backstage/plugin-azure-sites`, `@backstage/plugin-badges`, `@backstage/plugin-badges-backend`, `@backstage/plugin-bazaar-backend`, `@backstage/plugin-bitrise`, `@backstage/plugin-catalog-backend-module-bitbucket`, `@backstage/plugin-catalog-backend-module-ldap`, `@backstage/plugin-catalog-backend-module-openapi`, `@backstage/plugin-catalog-common`, `@backstage/plugin-catalog-graph`, `@backstage/plugin-catalog-unprocessed-entities`, `@backstage/plugin-cicd-statistics`, `@backstage/plugin-cicd-statistics-module-gitlab`, `@backstage/plugin-cloudbuild`, `@backstage/plugin-code-climate`, `@backstage/plugin-code-coverage`, `@backstage/plugin-code-coverage-backend`, `@backstage/plugin-codescene`, `@backstage/plugin-config-schema`, `@backstage/plugin-cost-insights`, `@backstage/plugin-devtools`, `@backstage/plugin-devtools-backend`, `@backstage/plugin-devtools-common`, `@backstage/plugin-dynatrace`, `@backstage/plugin-entity-feedback`, `@backstage/plugin-entity-feedback-backend`, `@backstage/plugin-events-backend-test-utils`, `@backstage/plugin-events-node`, `@backstage/plugin-explore-backend`, `@backstage/plugin-explore-react`, `@backstage/plugin-firehydrant`, `@backstage/plugin-fossa`, `@backstage/plugin-gcalendar`, `@backstage/plugin-git-release-manager`, `@backstage/plugin-github-deployments`, `@backstage/plugin-github-issues`, `@backstage/plugin-github-pull-requests-board`, `@backstage/plugin-gitops-profiles`, `@backstage/plugin-gocd`, `@backstage/plugin-graphql-voyager`, `@backstage/plugin-ilert`, `@backstage/plugin-jenkins`, `@backstage/plugin-jenkins-backend`, `@backstage/plugin-jenkins-common`, `@backstage/plugin-kafka`, `@backstage/plugin-kafka-backend`, `@backstage/plugin-kubernetes-cluster`, `@backstage/plugin-linguist`, `@backstage/plugin-linguist-backend`, `@backstage/plugin-microsoft-calendar`, `@backstage/plugin-newrelic`, `@backstage/plugin-newrelic-dashboard`, `@backstage/plugin-nomad`, `@backstage/plugin-nomad-backend`, `@backstage/plugin-octopus-deploy`, `@backstage/plugin-opencost`, `@backstage/plugin-org-react`, `@backstage/plugin-periskop`, `@backstage/plugin-periskop-backend`, `@backstage/plugin-permission-react`, `@backstage/plugin-playlist`, `@backstage/plugin-playlist-common`, `@backstage/plugin-proxy-backend`, `@backstage/plugin-puppetdb`, `@backstage/plugin-rollbar`, `@backstage/plugin-rollbar-backend`, `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown`, `@backstage/plugin-scaffolder-backend-module-cookiecutter`, `@backstage/plugin-scaffolder-backend-module-rails`, `@backstage/plugin-scaffolder-backend-module-yeoman`, `@backstage/plugin-scaffolder-common`, `@backstage/plugin-search-backend-node`, `@backstage/plugin-search-common`, `@backstage/plugin-sentry`, `@backstage/plugin-shortcuts`, `@backstage/plugin-sonarqube`, `@backstage/plugin-sonarqube-backend`, `@backstage/plugin-sonarqube-react`, `@backstage/plugin-splunk-on-call`, `@backstage/plugin-stack-overflow-backend`, `@backstage/plugin-stackstorm`, `@backstage/plugin-tech-insights`, `@backstage/plugin-tech-insights-backend`, `@backstage/plugin-tech-insights-backend-module-jsonfc`, `@backstage/plugin-tech-insights-node`, `@backstage/plugin-techdocs-react`, `@backstage/plugin-todo`, `@backstage/plugin-todo-backend`, `@backstage/plugin-vault`, `@backstage/plugin-vault-node`, `@backstage/plugin-xcmetrics`._
