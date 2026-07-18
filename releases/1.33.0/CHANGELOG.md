# Backstage Release 1.33.0 changelog

Changes between 1.32.6 and 1.33.0 — 153 changed and 0 added packages.

## `@backstage/backend-app-api` (1.0.1 → 1.0.2)

### 1.0.2

#### Patch Changes

- 4e58bc7: Upgrade to uuid v11 internally
- 5d74716: Remove unused backend-common dependency

## `@backstage/backend-defaults` (0.5.2 → 0.5.3)

### 0.5.3

#### Patch Changes

- bf306cb: Removed dependency `@backstage/backend-common`.
- e30bb46: Disabling database migrations now correctly uses the `backend.default.skipMigrations` config value.
- d52d7f9: Support ISO and ms string forms of durations in config too
- f6eaec2: Link to proper package in `rootLoggerServiceFactory` doc string.
- ecf6b39: Use `node-fetch` instead of native fetch, as per https://backstage.io/docs/architecture-decisions/adrs-adr013
- 4e58bc7: Upgrade to uuid v11 internally

## `@backstage/backend-dynamic-feature-service` (0.4.4 → 0.5.0)

### 0.5.0

#### Minor Changes

- e939cd7: **BREAKING** The `dynamicPluginsFeatureLoader` options related to the root logger behavior (`transports`, `level`, `format`) are now gathered under a single `logger` option which is a function taking an optional `Config` argument and returning the logger options.

  This breaking change is required for 2 reasons:

  - it's totally possible that the current `Config` would be required to provide the logger options,
  - the logger-related options should be gathered under a common `logger` option because, when the root auditing service is introduced, distinct but similarly-named options would be required for the auditor as well.

#### Patch Changes

- 1aeec12: Enhance the `CommonJSModuleLoader` to add support for `resolvePackagePath` calls from backend dynamic plugins, with customizable package resolution, and make the `CommonJSModuleLoader` public API.
  Fixing this backend dynamic plugin limitation related to `resolvePackagePath` is important for backend dynamic plugins which use the database, since database migration scripts systematically use `resolvePackagePath`.
- 8593dfa: Improve the way alpha packages are supported when loading dynamic backend plugins.
  The `ScannedPluginPackage` descriptor of dynamic backend plugins loaded from their alpha `package.json` now contain both the main package manifest and the alpha manifest. Previously it used to contain only the content of the alpha `package.json`, which is nearly empty.
  This will make it easier to use or display metadata of loaded dynamic backend plugins, which is contained in the main manifest.

## `@backstage/backend-openapi-utils` (0.2.0 → 0.3.0)

### 0.3.0

#### Minor Changes

- 1440232: Adds a new `createValidatedOpenApiRouterFromGeneratedEndpointMap` function that uses the new static server generation in `backstage-cli package schema openapi generate --server` to create a typed express router.

#### Patch Changes

- f01787a: Moves msw from dependencies to devDependencies

## `@backstage/backend-plugin-api` (1.0.1 → 1.0.2)

### 1.0.2

#### Patch Changes

- d52d7f9: Support ISO and ms string forms of durations in config too

## `@backstage/backend-test-utils` (1.0.2 → 1.1.0)

### 1.1.0

#### Minor Changes

- 5064827: Made it possible to construct `mockServices.database` with a given knex instance

#### Patch Changes

- 7aae8e3: The `mockServices.discovery.factory()` factory now uses the mocked discovery service as its implementation, avoid the need for configuration.
- eb82994: Removed unused `msw` dependency.
- 4e58bc7: Upgrade to uuid v11 internally

## `@backstage/catalog-client` (1.7.1 → 1.8.0)

### 1.8.0

#### Minor Changes

- 656d1ef: Internal update to use the updated generated code from `backstage-cli package schema openapi generate --client-package ...`.
- 31c4fe0: The client now automatically splits up very large `getEntitiesByRefs` calls into several smaller requests behind the scenes when needed. This ensures that each individual request does not exceed common Express.js request body limits or overload the server.

#### Patch Changes

- 873f89a: Fix for certain filter fields in the `catalogApiMock` being case sensitive.

## `@backstage/cli` (0.28.2 → 0.29.0)

### 0.29.0

#### Minor Changes

- bc47b17: **BREAKING**: Updates ESLint config to ignore all generated source code under `src/**/generated/**/*.ts`.
- 6819f8c: Added a new optimization to the `repo test` command that will filter out unused packages in watch mode if all provide filters are paths that point from the repo root. This significantly speeds up running individual tests from the repo root in a large workspace, for example:

  ```sh
  yarn test packages/app/src/App.test.tsx
  ```

- d849865: The package packing now populates `typesVersions` for additional entry points rather than using additional `package.json` files for type resolution. This improves auto completion of separate entry points when consuming published packages.
- bc71665: **BREAKING**: The `LEGACY_BACKEND_START` flag has been removed, along with support for `src/run.ts` as the development entry point.

#### Patch Changes

- 4046d53: Fixed an issue where the `--successCache` option for the `repo test` and `repo lint` commands would be include the workspace path in generated cache keys. This previously broke caching in environments where the workspace path varies across builds.
- 4a378d3: Fix dev server reloads of plugin discovery for new frontend system.
- 28b60ad: The check for `react-dom/client` in the Jest configuration will now properly always run from the target directory.
- 6b2888c: Fixed an issue with the `--successCache` flag for `repo test` where the tree hash for the wrong package directory would sometimes be used to generate the cache key.
- e30b65d: Added `--alwaysPack` as a replacement for the now hidden `--alwaysYarnPack` flag for the `build-workspace` command.
- be0278e: Removed circular import
- a7f97e4: Added a new `"rejectFrontendNetworkRequests"` configuration flag that can be set in the `"jest"` field in the root `package.json`:

  ```json
  {
    "jest": {
      "rejectFrontendNetworkRequests": true
    }
  }
  ```

  This flag causes rejection of any form of network requests that are attempted to be made in frontend or common package tests. This flag can only be set in the root `package.json` and can not be overridden in individual package configurations.

- 6c48ebd: Add `--max-warnings -1` support to `backstage-cli package lint`
- 04297a0: The `--successCache` option for the `repo test` and `repo lint` commands now use an additive store that keeps old entries around for a week before they are cleaned up automatically.
- a2f0559: When using the experimental Rspack flag the app build and dev server now injects configuration via a `<script type="backstage.io/config">...</script>` tag in `index.html` rather than the `process.env.APP_CONFIG` definition, which will now be defined as an empty array instead.

  This requires the app to be using the config loader from the 1.31 release of Backstage. Make sure your app is using at least that version if you are upgrading to this version of the CLI.

  If you have copied the implementation of the `defaultConfigLoader`, make sure to update it to the new implementation. In particular the config loader needs to be able to read configuration from `script` tags with the type `backstage.io/config`.

- b4627f2: Fixed an issue where the `raw-loader` for loading HTML templates was not resolved from the context of the CLI package.
- cd1ef2b: Updated dependency `vite` to `^5.0.0`.
- 23f1da2: Updated dependency `ts-morph` to `^24.0.0`.
- b533056: Updated dependency `css-loader` to `^7.0.0`.
- be008c3: Updated dependency `@module-federation/enhanced` to `^0.7.0`.
- 6266ed3: Updated dependency `del` to `^8.0.0`.
- 4046d53: Fixed an issue with the `repo lint` command where the cache key for the `--successCache` option would not properly ignore files that should be ignored according to `.eslintignore`s.
- e19c53c: Fix for the `--link` flag for `package start` to deduplicate `react-router` and `react-router-dom`.
- 17850a5: Update upgrade-helper link in `versions:bump` command to include `yarnPlugin` parameter when the yarn plugin is installed
- 09ea093: Fixed an issue where `.css` style injection would fail for published packages.
- 702f41d: Bumped dev dependencies `@types/node`
- 5d74716: Remove unused backend-common dependency
- b084f5a: Bump the Webpack dependency range to `^5.94.0`, as our current configuration is not compatible with some older versions.
- e565f73: Added support for `.webp` files in the frontend tooling.
- 946fa34: Added a new `--link <workspace-path>` option for frontend builds that allow you to override module resolution to link in an external workspace at runtime.

  As part of this change the Webpack linked workspace resolution plugin for frontend builds has been removed. It was in place to support the old workspace linking where it was done by Yarn, which is no longer a working option.

## `@backstage/cli-common` (0.1.14 → 0.1.15)

### 0.1.15

#### Patch Changes

- 702f41d: Bumped dev dependencies `@types/node`

## `@backstage/codemods` (0.1.51 → 0.1.52)

### 0.1.52

#### Patch Changes

- 702f41d: Bumped dev dependencies `@types/node`

## `@backstage/config` (1.2.0 → 1.3.0)

### 1.3.0

#### Minor Changes

- d52d7f9: Make `readDurationFromConfig` support both ISO and ms formats as well, to make it easier to enter time as an end user

## `@backstage/config-loader` (1.9.1 → 1.9.2)

### 1.9.2

#### Patch Changes

- c5e39e7: Internal refactor to use the deferred from the types package

## `@backstage/core-app-api` (1.15.1 → 1.15.2)

### 1.15.2

#### Patch Changes

- 44b82da: The default config loader no longer requires `process.env.APP_CONFIG` to be set, allowing config to be read from other sources instead.

## `@backstage/core-components` (0.15.1 → 0.16.0)

### 0.16.0

#### Minor Changes

- dc409c5: The SupportButton component will now be hidden if no support config is specified in app-config

#### Patch Changes

- 0f18340: Change core component Table tool bar search box to the a appropriate Search icon and text
- af9097e: Adds the ability to mock a media query per break point and to change the active break point during a test. Usage example:

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

## `@backstage/create-app` (0.5.21 → 0.5.22)

### 0.5.22

#### Patch Changes

- 7907e3b: Bumped create-app version.
- 42386c2: Bumped create-app version.
- 702f41d: Updated engines to support Node 20 or 22
- a917f86: This update adds the @backstage/repo-tools package to the versions.ts file, enabling proper version resolution for templates. The {{version '@backstage/repo-tools'}} placeholder now works as expected in the create-app process.
- 5872964: Use the main entrypoint for `create-app` installs
- 702f41d: Bumped dev dependencies `@types/node`

## `@backstage/frontend-defaults` (0.1.1 → 0.1.2)

### 0.1.2

#### Patch Changes

- 44b82da: The default config loader no longer requires `process.env.APP_CONFIG` to be set, allowing config to be read from other sources instead.

## `@backstage/integration-aws-node` (0.1.12 → 0.1.13)

### 0.1.13

#### Patch Changes

- 52ae92d: The `getDefaultCredentialsChain` function now accepts and applies a `region` parameter, preventing it from defaulting to `us-east-1` when no region is specified.

## `@backstage/plugin-api-docs` (0.11.11 → 0.12.0)

### 0.12.0

#### Minor Changes

- 6836522: Added support for pagination in api-docs plugin - DefaultApiExplorerPage

#### Patch Changes

- 11f57de: bump `@asyncapi/react-component` to latest `2.x`
- 3cd1dee: Uses theme values to style the API definition schema so that theme overrides apply.

## `@backstage/plugin-app-backend` (0.3.76 → 0.4.0)

### 0.4.0

#### Minor Changes

- 815b702: Configuration is no longer injected into static assets if a `index.html.tmpl` file is present.

#### Patch Changes

- 815b702: The `index.html` templating is now done and served from memory rather than written to the filesystem. This means that you can now use config injection with a read-only filesystem, and you no longer need to use the `app.disableConfigInjection` flag.

## `@backstage/plugin-app-visualizer` (0.1.11 → 0.1.12)

### 0.1.12

#### Patch Changes

- e586e77: New `devDependency` for local development setup.

## `@backstage/plugin-auth-backend` (0.23.1 → 0.24.0)

### 0.24.0

#### Minor Changes

- 75168e3: **BREAKING**: The AWS ALB `fullProfile` will no longer have the its username or email converted to lowercase. This is to ensure unique handling of the users. You may need to update and configure a custom sign-in resolver or profile transform as a result.

#### Patch Changes

- d52d7f9: Support ISO and ms string forms of durations in config too
- 4e58bc7: Upgrade to uuid v11 internally

## `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.2.1 → 0.3.0)

### 0.3.0

#### Minor Changes

- 75168e3: **BREAKING**: The AWS ALB `fullProfile` will no longer have the its username or email converted to lowercase. This is to ensure unique handling of the users. You may need to update and configure a custom sign-in resolver or profile transform as a result.

#### Patch Changes

- 5d74716: Remove unused backend-common dependency

## `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.3.1 → 0.3.2)

### 0.3.2

#### Patch Changes

- d52d7f9: Support ISO and ms string forms of durations in config too
- 4e58bc7: Upgrade to uuid v11 internally

## `@backstage/plugin-auth-backend-module-google-provider` (0.2.1 → 0.2.2)

### 0.2.2

#### Patch Changes

- b833660: Fix visibility of config for use in front end code

## `@backstage/plugin-auth-backend-module-guest-provider` (0.2.1 → 0.2.2)

### 0.2.2

#### Patch Changes

- 5d74716: Remove unused backend-common dependency

## `@backstage/plugin-auth-backend-module-oidc-provider` (0.3.1 → 0.3.2)

### 0.3.2

#### Patch Changes

- 5d74716: Remove unused backend-common dependency

## `@backstage/plugin-auth-node` (0.5.3 → 0.5.4)

### 0.5.4

#### Patch Changes

- a0a9a4a: Browsers silently drop cookies that exceed 4KB, which can be problematic for refresh tokens and other large cookies.This update ensures that large cookies, like refresh tokens, are not dropped by browsers, maintaining the integrity of the authentication process. The changes include both the implementation of the cookie splitting logic and corresponding tests to validate the new functionality.
- 4e58bc7: Upgrade to uuid v11 internally

## `@backstage/plugin-bitbucket-cloud-common` (0.2.24 → 0.2.25)

### 0.2.25

#### Patch Changes

- 23f1da2: Updated dependency `ts-morph` to `^24.0.0`.

## `@backstage/plugin-catalog` (1.24.0 → 1.25.0)

### 1.25.0

#### Minor Changes

- 50df3c8: - Updated EntityLayout component to implement breadcrumb navigation based on the entity relations.

  - Added parentEntityRelations prop to EntityLayoutProps to specify relation types for parent entities.

- 79e9631: Allow `OffsetPaginatedCatalogTable` to configure Table options and `CursorPaginatedCatalogTable` to configure `paginationPosition`.

#### Patch Changes

- 2a67594: Fixed an issue causing the `CatalogIndexPage` to not properly filter results when using offset pagination.

## `@backstage/plugin-catalog-backend` (1.27.1 → 1.28.0)

### 1.28.0

#### Minor Changes

- 39fd704: Internal update to use the new generated server types from `backstage-cli package schema openapi generate --server`.
- 76857da: Added `entity_ref` column to `final_entities` in order to move `refresh_state` away from the read path
- 34d4360: Drop redundant indices from the database.

  The following redundant indices are removed in this version:

  - `final_entities_entity_id_idx` - overlaps with `final_entities_pkey`
  - `refresh_state_entity_id_idx` - overlaps with `refresh_state_pkey`
  - `refresh_state_entity_ref_idx` - overlaps with `refresh_state_entity_ref_uniq`
  - `search_key_idx` and `search_value_idx` - these were replaced by the composite index `search_key_value_idx` in #22594

  No negative end user impact is expected, but rather that performance should increase due to less index churn.

#### Patch Changes

- d52d7f9: Support ISO and ms string forms of durations in config too
- b89834b: Fixed an issue where entities would not be marked for restitching if only the target of a relationship changed.
- 1bf02cc: Fixed bug when searching an entity by `spec.profile.displayName` in the catalog on the frontend. Text filter fields were not applied correctly to the database query resulting in empty results.
- 4e58bc7: Upgrade to uuid v11 internally
- 5efde17: Internal refactor to slightly speed up the processing loop

## `@backstage/plugin-catalog-backend-module-aws` (0.4.4 → 0.4.5)

### 0.4.5

#### Patch Changes

- 4e58bc7: Upgrade to uuid v11 internally

## `@backstage/plugin-catalog-backend-module-azure` (0.2.3 → 0.2.4)

### 0.2.4

#### Patch Changes

- 4e58bc7: Upgrade to uuid v11 internally

## `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.4.1 → 0.4.2)

### 0.4.2

#### Patch Changes

- 4e58bc7: Upgrade to uuid v11 internally

## `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.4.1 → 0.4.2)

### 0.4.2

#### Patch Changes

- 4e58bc7: Upgrade to uuid v11 internally
- f6b4b8a: Implemented discovery on project-level to shift Bitbucket Cloud API limits

## `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.2.3 → 0.2.4)

### 0.2.4

#### Patch Changes

- 4e58bc7: Upgrade to uuid v11 internally

## `@backstage/plugin-catalog-backend-module-gerrit` (0.2.3 → 0.2.4)

### 0.2.4

#### Patch Changes

- 4e58bc7: Upgrade to uuid v11 internally

## `@backstage/plugin-catalog-backend-module-github` (0.7.6 → 0.7.7)

### 0.7.7

#### Patch Changes

- 9790c02: Fixed an issue in `GithubOrgEntityProvider` that caused an error when processing teams without a parent.
- 4e58bc7: Upgrade to uuid v11 internally

## `@backstage/plugin-catalog-backend-module-gitlab` (0.4.4 → 0.5.0)

### 0.5.0

#### Minor Changes

- 1b5fdd9: Extended the configuration with the `includeArchivedRepos` property, which allows including repositories when the project is archived.

#### Patch Changes

- 4e58bc7: Upgrade to uuid v11 internally

## `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.5.6 → 0.6.0)

### 0.6.0

#### Minor Changes

- 6cf91c5: Use `HumanDuration` for all duration needs in the public API, instead of `luxon` types. These are generally compatible, with a few caveats:

  - If you scheduled things to run quarterly (`quarter` or `quarters`), you can use `{ months: 3 }` instead.
  - If you used the singular nouns such as `year: 1`, use plurals instead (e.g. `years: 1`).

#### Patch Changes

- c5e39e7: Internal refactor to use the deferred from the types package
- 4e58bc7: Upgrade to uuid v11 internally

## `@backstage/plugin-catalog-backend-module-ldap` (0.9.1 → 0.10.0)

### 0.10.0

#### Minor Changes

- 415aeb3: Add Support for Google LDAP Vendor

#### Patch Changes

- 884a86c: Added a `dnCaseSensitive` flag to support LDAP servers with mixed-case attributes.
- 4e58bc7: Upgrade to uuid v11 internally

## `@backstage/plugin-catalog-backend-module-msgraph` (0.6.3 → 0.6.4)

### 0.6.4

#### Patch Changes

- 4e58bc7: Upgrade to uuid v11 internally

## `@backstage/plugin-catalog-backend-module-openapi` (0.2.3 → 0.2.4)

### 0.2.4

#### Patch Changes

- 5f058e2: Updated dependency `@apidevtools/json-schema-ref-parser` to `^11.0.0`.

## `@backstage/plugin-catalog-backend-module-puppetdb` (0.2.3 → 0.2.4)

### 0.2.4

#### Patch Changes

- 4e58bc7: Upgrade to uuid v11 internally

## `@backstage/plugin-catalog-import` (0.12.5 → 0.12.6)

### 0.12.6

#### Patch Changes

- ea5b7f3: Fixed parsing of catalog-info.yaml when creating a PR to register a repository if the file contains more than one document

## `@backstage/plugin-catalog-node` (1.13.1 → 1.14.0)

### 1.14.0

#### Minor Changes

- bc13b42: The `catalogServiceRef` now has its own accompanying `CatalogService` interface that requires Backstage `credentials` objects to be passed. This new version of the `catalogServiceRef` has been promoted and is now available via the main `@backstage/plugin-catalog-node` entry point.

  The old `catalogServiceRef` with the old `CatalogApi` type is still available from the `/alpha` entry point.

## `@backstage/plugin-catalog-react` (1.14.0 → 1.14.1)

### 1.14.1

#### Patch Changes

- 9cc82c0: Fixed bug in `EntityDisplayName` where text was overflowing.
- 6fcbb3b: Ensure EntityDisplayName component link receives underline on hover.
- 9670906: Improve UI consistency of default catalog filters

## `@backstage/plugin-events-backend` (0.3.15 → 0.3.16)

### 0.3.16

#### Patch Changes

- e02a02b: Fix `events.useEventBus` by propagating config to `DefaultEventsService`
- 9816f51: Add raw body information to `RequestDetails`
  and use the raw body when validating incoming event requests.
- b7d0334: Cleaning up event subscriptions after the max age window

## `@backstage/plugin-events-backend-module-aws-sqs` (0.4.4 → 0.4.5)

### 0.4.5

#### Patch Changes

- d52d7f9: Support ISO and ms string forms of durations in config too

## `@backstage/plugin-events-backend-module-github` (0.2.13 → 0.2.14)

### 0.2.14

#### Patch Changes

- 9816f51: Fix the event request validation for incoming requests for GitHub webhook events
  by using the raw body when verifying the signature.
- 9816f51: Add raw body information to `RequestDetails`
  and use the raw body when validating incoming event requests.

## `@backstage/plugin-events-node` (0.4.4 → 0.4.5)

### 0.4.5

#### Patch Changes

- 4501631: Fixed an issue where subscribing to events threw an error and gave up too easily. Calling the subscribe method will cause the background polling loop to keep trying to connect to the events backend, even if the initial request fails.

  By default the events service will attempt to publish and subscribe to events from the events bus API in the events backend, but if it fails due to the events backend not being installed, it will bail and never try calling the API again. There is now a new `events.useEventBus` configuration and option for the `DefaultEventsService` that lets you control this behavior. You can set it to `'never'` to disabled API calls to the events backend completely, or `'always'` to never allow it to be disabled.

- e02a02b: Fix `events.useEventBus` by propagating config to `DefaultEventsService`
- 9816f51: Add raw body information to `RequestDetails`
  and use the raw body when validating incoming event requests.
- 5d74716: Remove unused backend-common dependency
- 0b57aa1: Fixed an issue where the event bus polling would duplicate and increase exponentially over time.

## `@backstage/plugin-home` (0.8.0 → 0.8.1)

### 0.8.1

#### Patch Changes

- 8b1b2cf: Improve Starred Entities UI to reduce whitespace and provide more context on the entities:

  - Use the Entity Presentation API (via `<EntityDisplayName>`) to display the entity's name
  - Component's `kind` and `spec.type` are displayed as a secondary text
  - List items are condensed to reduce unnecessary spacing

## `@backstage/plugin-kubernetes` (0.11.16 → 0.12.0)

### 0.12.0

#### Minor Changes

- 71b8704: Bumping @kubernetes/client-node to 1.0.0-rc7 to mitigate CVEs related to the request and tough-cookie packages

## `@backstage/plugin-kubernetes-backend` (0.18.7 → 0.19.0)

### 0.19.0

#### Minor Changes

- 71b8704: Bumping @kubernetes/client-node to 1.0.0-rc7 to mitigate CVEs related to the request and tough-cookie packages

#### Patch Changes

- bee9664: Adapted the config.d.ts for custom k8s cluster authProvider implementations

## `@backstage/plugin-kubernetes-cluster` (0.0.17 → 0.0.18)

### 0.0.18

#### Patch Changes

- 702f41d: Bumped dev dependencies `@types/node`

## `@backstage/plugin-kubernetes-common` (0.8.3 → 0.9.0)

### 0.9.0

#### Minor Changes

- 71b8704: Bumping @kubernetes/client-node to 1.0.0-rc7 to mitigate CVEs related to the request and tough-cookie packages

## `@backstage/plugin-kubernetes-node` (0.1.20 → 0.2.0)

### 0.2.0

#### Minor Changes

- 71b8704: Bumping @kubernetes/client-node to 1.0.0-rc7 to mitigate CVEs related to the request and tough-cookie packages

## `@backstage/plugin-kubernetes-react` (0.4.4 → 0.5.0)

### 0.5.0

#### Minor Changes

- 71b8704: Bumping @kubernetes/client-node to 1.0.0-rc7 to mitigate CVEs related to the request and tough-cookie packages

#### Patch Changes

- 0b729da: add the pod delete feature to the kubernetes react plugin

## `@backstage/plugin-notifications` (0.3.2 → 0.4.0)

### 0.4.0

#### Minor Changes

- 87ffc1c: Rephrasing labels of the View filter to be more clear. Based on the received users' feedback.

#### Patch Changes

- 4186105: Added title to the Notifications' table. The title clearly states the filter selection and total count of messages. This change aligns the look and feel closer to other tables.
- 3a0731e: The "Created after" filter renamed to the "Sent out" based on the received users' feedback.
- 3e135f2: The notification's title is emphasized to be clearly distinguished from the description.
- 97ba58f: Add support for user specific notification settings
- 1d87c43: Show count of unread notifications in the left-side MenuItem. This replaces the simple true/false bullet.

## `@backstage/plugin-notifications-backend` (0.4.2 → 0.4.3)

### 0.4.3

#### Patch Changes

- 97ba58f: Add support for user specific notification settings
- 4e58bc7: Upgrade to uuid v11 internally

## `@backstage/plugin-notifications-backend-module-email` (0.3.2 → 0.3.3)

### 0.3.3

#### Patch Changes

- d52d7f9: Support ISO and ms string forms of durations in config too
- 5d74716: Remove unused backend-common dependency

## `@backstage/plugin-notifications-common` (0.0.5 → 0.0.6)

### 0.0.6

#### Patch Changes

- 97ba58f: Add support for user specific notification settings

## `@backstage/plugin-notifications-node` (0.2.8 → 0.2.9)

### 0.2.9

#### Patch Changes

- 4e58bc7: Upgrade to uuid v11 internally
- 5d74716: Remove unused backend-common dependency

## `@backstage/plugin-org` (0.6.31 → 0.6.32)

### 0.6.32

#### Patch Changes

- a278fdd: Fix rendering of description in MembersListCard. Add guardrails for potential long texts to prevent it from breaking the UI.

## `@backstage/plugin-permission-common` (0.8.1 → 0.8.2)

### 0.8.2

#### Patch Changes

- 4e58bc7: Upgrade to uuid v11 internally

## `@backstage/plugin-proxy-backend` (0.5.7 → 0.5.8)

### 0.5.8

#### Patch Changes

- 4e58bc7: Upgrade to uuid v11 internally

## `@backstage/plugin-scaffolder` (1.26.2 → 1.27.0)

### 1.27.0

#### Minor Changes

- f61d4cc: Add scaffolder permission `scaffolder.template.management` for accessing the template management features
- 69fb6e7: Fix `contextMenu` not being disabled bug in new scaffolder pages

#### Patch Changes

- 99471cd: fix(scaffolder): use `onInputChange` in `RepoUrlPicker` to fix issue with the value not updating properly
- 8e4bed4: Updated dependency `idb-keyval` to `5.1.5`.
- 7669af3: Revert the change of the option label for `EntityPicker`

## `@backstage/plugin-scaffolder-backend` (1.26.3 → 1.27.0)

### 1.27.0

#### Minor Changes

- 0587633: Bumped the `isolated-vm` dependency from v4 to v5, which drops support for Node.js v16.
- e61d5ef: BREAKING EXPERIMENTAL: The `checkpoint` method now takes an object instead of previous arguments.

  ```ts
  await ctx.checkpoint({ key: 'repo.create', fn: () => ockokit.repo.create({...})})
  ```

  You can also now return `void` from the checkpoint if the method returns `void` inside the `checkpoint` handler.

#### Patch Changes

- 6aa5b98: Fix tasks listing with postgres
- 59137ff: Fix issue with token not being available because it's now non-enumerable
- c5e39e7: Internal refactor to use the deferred from the types package
- e4f5d95: Align with type declaration of template filter/global function by supporting undefined as return value.
- d52d7f9: Support ISO and ms string forms of durations in config too
- 7ab3371: Modified `createDryRunner` and corresponding route to include `templateMetaData` inside the `templateInfo`. This allows custom action writers to access things like `templateInfo.entity.metadata.name` via the action context while executing templates using the dry run framework.
- 4e58bc7: Upgrade to uuid v11 internally
- 2dae341: Add new `fs:readdir` action to list current content of the workspace
- 97ba58f: Add example template for notification sending

## `@backstage/plugin-scaffolder-common` (1.5.6 → 1.5.7)

### 1.5.7

#### Patch Changes

- f61d4cc: Add scaffolder permission `scaffolder.template.management` for accessing the template management features

## `@backstage/plugin-scaffolder-node` (0.5.1 → 0.6.0)

### 0.6.0

#### Minor Changes

- e61d5ef: BREAKING EXPERIMENTAL: The `checkpoint` method now takes an object instead of previous arguments.

  ```ts
  await ctx.checkpoint({ key: 'repo.create', fn: () => ockokit.repo.create({...})})
  ```

  You can also now return `void` from the checkpoint if the method returns `void` inside the `checkpoint` handler.

## `@backstage/plugin-scaffolder-react` (1.13.2 → 1.14.0)

### 1.14.0

#### Minor Changes

- 69fb6e7: Fix `contextMenu` not being disabled bug in new scaffolder pages

#### Patch Changes

- 8b5ff7e: Fix issue with form state not refreshing when updating
- ade301c: Fix issue with `Stepper` and trying to trim additional properties. This is now all behind `liveOmit` and `omitExtraData` instead.
- f61d4cc: Add scaffolder permission `scaffolder.template.management` for accessing the template management features

## `@backstage/plugin-search` (1.4.18 → 1.4.19)

### 1.4.19

#### Patch Changes

- a4ccc82: Removes the card UI from the search results type filter for a cleaner UI consistent with other filters

## `@backstage/plugin-search-backend` (1.6.1 → 1.7.0)

### 1.7.0

#### Minor Changes

- 39fd704: Internal update to use the new generated server types from `backstage-cli package schema openapi generate --server`.

## `@backstage/plugin-search-backend-module-catalog` (0.2.4 → 0.2.5)

### 0.2.5

#### Patch Changes

- 0b8f344: Fixed a bug where the `filter` setting of the collator was not permitted to be an array.
- 1a1e2f4: Fix search collator text formatting for catalog entities without description

## `@backstage/plugin-search-backend-module-elasticsearch` (1.6.1 → 1.6.2)

### 1.6.2

#### Patch Changes

- dae59c1: Updated dependency `@short.io/opensearch-mock` to `^0.4.0`.
- 4e58bc7: Upgrade to uuid v11 internally

## `@backstage/plugin-search-backend-module-explore` (0.2.4 → 0.2.5)

### 0.2.5

#### Patch Changes

- a9a7c7c: Updated dependency `@backstage-community/plugin-explore-common` to `^0.0.7`.

## `@backstage/plugin-search-backend-module-pg` (0.5.37 → 0.5.38)

### 0.5.38

#### Patch Changes

- 4e58bc7: Upgrade to uuid v11 internally

## `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.3.2 → 0.3.3)

### 0.3.3

#### Patch Changes

- 5d74716: Remove unused backend-common dependency

## `@backstage/plugin-search-backend-node` (1.3.4 → 1.3.5)

### 1.3.5

#### Patch Changes

- 4e58bc7: Upgrade to uuid v11 internally

## `@backstage/plugin-signals` (0.0.11 → 0.0.12)

### 0.0.12

#### Patch Changes

- 4e58bc7: Upgrade to uuid v11 internally

## `@backstage/plugin-signals-backend` (0.2.2 → 0.2.3)

### 0.2.3

#### Patch Changes

- a1e01ff: The signals backend now supports scaled deployments where clients may be connecting to one of many signal backend instances.
- 4e58bc7: Upgrade to uuid v11 internally

## `@backstage/plugin-signals-node` (0.1.13 → 0.1.14)

### 0.1.14

#### Patch Changes

- 4e58bc7: Upgrade to uuid v11 internally
- 5d74716: Remove unused backend-common dependency

## `@backstage/plugin-techdocs` (1.11.0 → 1.11.1)

### 1.11.1

#### Patch Changes

- 37a7810: Fixed an issue where `<TechDocsReaderPageContent />` would re-render infinitely under certain conditions.
- e937ae7: Fix an issue with index page of documentation site being re-rendered.
- 90246a9: Fix techdocs config schema for custom elements sanitizer
- 605bdc0: Avoid page re-rendering when clicking on anchor links in the same documentation page.
- 4f0cb89: Added DomPurify sanitizer configuration for custom elements implementing RFC https://github.com/backstage/backstage/issues/26988.
  See https://backstage.io/docs/features/techdocs/how-to-guides#how-to-enable-custom-elements-in-techdocs for how to enable it in the configuration.
- f246178: Removed `canvas` dev dependency.
- 4a2f73a: Fix an issue that caused the current documentation page to be re-rendered when navigating to
  another one.

## `@backstage/plugin-techdocs-react` (1.2.9 → 1.2.10)

### 1.2.10

#### Patch Changes

- 4a2f73a: Fix an issue that caused the current documentation page to be re-rendered when navigating to
  another one.

## `@backstage/repo-tools` (0.10.0 → 0.11.0)

### 0.11.0

#### Minor Changes

- 1440232: `backstage-repo-tools package schema openapi generate --server` now generates complete TS interfaces for all request/response objects in your OpenAPI schema. This fixes an edge case around recursive schemas and standardizes both the generated client and server to have similar generated types.
- 47fdbb4: Adds a `--watch` mode to the `schema openapi generate` command for a better local schema writing experience.

#### Patch Changes

- 95401a8: The `generate-patch` command now properly includes newly created files in the patch.
- 23f1da2: Updated dependency `ts-morph` to `^24.0.0`.
- 3f1fb21: The `generate-patch` command will now fall back to always adding a `resolutions` entry, even if no matching descriptors are found.
- dde85ee: Added a new `generate-patch` command that can be used to generate patches for current changes in a source workspace to be installed it a target workspace.
- 702f41d: Bumped dev dependencies `@types/node`

## `@backstage/theme` (0.6.0 → 0.6.1)

### 0.6.1

#### Patch Changes

- ea75c37: Internal refactor to avoid top-level imports from MUI.

## `@backstage/types` (1.1.1 → 1.2.0)

### 1.2.0

#### Minor Changes

- c5e39e7: Introduce `createDeferred` and `DeferredPromise`.

## `@techdocs/cli` (1.8.21 → 1.8.22)

### 1.8.22

#### Patch Changes

- 702f41d: Bumped dev dependencies `@types/node`

_Excluded dependency updates for packages: `@backstage/app-defaults`, `@backstage/catalog-model`, `@backstage/cli-node`, `@backstage/core-compat-api`, `@backstage/core-plugin-api`, `@backstage/dev-utils`, `@backstage/errors`, `@backstage/frontend-app-api`, `@backstage/frontend-plugin-api`, `@backstage/frontend-test-utils`, `@backstage/integration`, `@backstage/integration-react`, `@backstage/plugin-app`, `@backstage/plugin-app-node`, `@backstage/plugin-auth-backend-module-atlassian-provider`, `@backstage/plugin-auth-backend-module-auth0-provider`, `@backstage/plugin-auth-backend-module-azure-easyauth-provider`, `@backstage/plugin-auth-backend-module-bitbucket-provider`, `@backstage/plugin-auth-backend-module-bitbucket-server-provider`, `@backstage/plugin-auth-backend-module-gcp-iap-provider`, `@backstage/plugin-auth-backend-module-github-provider`, `@backstage/plugin-auth-backend-module-gitlab-provider`, `@backstage/plugin-auth-backend-module-microsoft-provider`, `@backstage/plugin-auth-backend-module-oauth2-provider`, `@backstage/plugin-auth-backend-module-oauth2-proxy-provider`, `@backstage/plugin-auth-backend-module-okta-provider`, `@backstage/plugin-auth-backend-module-onelogin-provider`, `@backstage/plugin-auth-backend-module-pinniped-provider`, `@backstage/plugin-auth-backend-module-vmware-cloud-provider`, `@backstage/plugin-auth-react`, `@backstage/plugin-catalog-backend-module-gcp`, `@backstage/plugin-catalog-backend-module-github-org`, `@backstage/plugin-catalog-backend-module-gitlab-org`, `@backstage/plugin-catalog-backend-module-logs`, `@backstage/plugin-catalog-backend-module-scaffolder-entity-model`, `@backstage/plugin-catalog-backend-module-unprocessed`, `@backstage/plugin-catalog-common`, `@backstage/plugin-catalog-graph`, `@backstage/plugin-catalog-unprocessed-entities`, `@backstage/plugin-catalog-unprocessed-entities-common`, `@backstage/plugin-config-schema`, `@backstage/plugin-devtools`, `@backstage/plugin-devtools-backend`, `@backstage/plugin-devtools-common`, `@backstage/plugin-events-backend-module-azure`, `@backstage/plugin-events-backend-module-bitbucket-cloud`, `@backstage/plugin-events-backend-module-gerrit`, `@backstage/plugin-events-backend-module-gitlab`, `@backstage/plugin-events-backend-test-utils`, `@backstage/plugin-home-react`, `@backstage/plugin-org-react`, `@backstage/plugin-permission-backend`, `@backstage/plugin-permission-backend-module-allow-all-policy`, `@backstage/plugin-permission-node`, `@backstage/plugin-permission-react`, `@backstage/plugin-search-backend-module-techdocs`, `@backstage/plugin-search-common`, `@backstage/plugin-search-react`, `@backstage/plugin-signals-react`, `@backstage/plugin-techdocs-addons-test-utils`, `@backstage/plugin-techdocs-backend`, `@backstage/plugin-techdocs-module-addons-contrib`, `@backstage/plugin-techdocs-node`, `@backstage/plugin-user-settings`, `@backstage/plugin-user-settings-backend`, `@backstage/test-utils`._
