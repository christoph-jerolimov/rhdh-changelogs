# Backstage Release 1.22.0 changelog

Changes between 1.21.1 and 1.22.0 — 226 changed and 2 added packages.

## `@backstage/app-defaults` (1.4.6 → 1.4.7)

### 1.4.7

#### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-permission-react@0.4.19
  - @backstage/core-app-api@1.11.3
  - @backstage/theme@0.5.0

## `@backstage/backend-app-api` (0.5.9 → 0.5.10)

### 0.5.10

#### Patch Changes

- 516fd3e: Updated README to reflect release status
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/config-loader@1.6.1
  - @backstage/cli-node@0.2.2
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-permission-node@0.7.20
  - @backstage/backend-tasks@0.5.14
  - @backstage/plugin-auth-node@0.4.3
  - @backstage/cli-common@0.1.13
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1

## `@backstage/backend-common` (0.20.0 → 0.20.1)

### 0.20.1

#### Patch Changes

- 3b24eae: Adding support for removing file from git index
- 454d17c: Do not call fetch directly but rather use `fetchResponse` facility
- b6b15b2: Use sha256 instead of md5 for hash key calculation in caches

  This can have a side effect of invalidating caches (when cache key was >250 characters)
  This improves compliance with FIPS nodejs

- Updated dependencies
  - @backstage/config-loader@1.6.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/backend-dev-utils@0.1.3
  - @backstage/backend-app-api@0.5.10
  - @backstage/cli-common@0.1.13
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/integration@1.8.0
  - @backstage/integration-aws-node@0.1.8
  - @backstage/types@1.1.1

## `@backstage/backend-defaults` (0.2.8 → 0.2.9)

### 0.2.9

#### Patch Changes

- 516fd3e: Updated README to reflect release status
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/backend-app-api@0.5.10

## `@backstage/backend-dev-utils` (0.1.2 → 0.1.3)

### 0.1.3

#### Patch Changes

- 516fd3e: Updated README to reflect release status

## `@backstage/backend-openapi-utils` (0.1.1 → 0.1.2)

### 0.1.2

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/errors@1.2.3

## `@backstage/backend-plugin-api` (0.6.8 → 0.6.9)

### 0.6.9

#### Patch Changes

- 516fd3e: Updated README to reflect release status
- Updated dependencies
  - @backstage/plugin-permission-common@0.7.12
  - @backstage/backend-tasks@0.5.14
  - @backstage/plugin-auth-node@0.4.3
  - @backstage/config@1.1.1
  - @backstage/types@1.1.1

## `@backstage/backend-tasks` (0.5.13 → 0.5.14)

### 0.5.14

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1

## `@backstage/backend-test-utils` (0.2.9 → 0.2.10)

### 0.2.10

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/backend-app-api@0.5.10
  - @backstage/plugin-auth-node@0.4.3
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1

## `@backstage/catalog-client` (1.5.1 → 1.5.2)

### 1.5.2

#### Patch Changes

- 883782e: Fix a bug in `getLocationByRef` that led to invalid backend calls
- Updated dependencies
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3

## `@backstage/cli` (0.25.0 → 0.25.1)

### 0.25.1

#### Patch Changes

- b6b15b2: Use sha256 instead of md5 in build script cache key calculation

  Makes it possible to build on FIPS nodejs.

- Updated dependencies
  - @backstage/config-loader@1.6.1
  - @backstage/cli-node@0.2.2
  - @backstage/catalog-model@1.4.3
  - @backstage/cli-common@0.1.13
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/eslint-plugin@0.1.4
  - @backstage/integration@1.8.0
  - @backstage/release-manifests@0.0.11
  - @backstage/types@1.1.1

## `@backstage/cli-node` (0.2.1 → 0.2.2)

### 0.2.2

#### Patch Changes

- 7acbb5a: Removed `mock-fs` dev dependency.
- Updated dependencies
  - @backstage/cli-common@0.1.13
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1

## `@backstage/config-loader` (1.6.0 → 1.6.1)

### 1.6.1

#### Patch Changes

- 7acbb5a: Removed `mock-fs` dev dependency.
- Updated dependencies
  - @backstage/cli-common@0.1.13
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1

## `@backstage/core-app-api` (1.11.2 → 1.11.3)

### 1.11.3

#### Patch Changes

- Updated dependencies
  - @backstage/core-plugin-api@1.8.2
  - @backstage/config@1.1.1
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7

## `@backstage/core-compat-api` (0.1.0 → 0.1.1)

### 0.1.1

#### Patch Changes

- 4c1f50c: Make `convertLegacyApp` wrap discovered routes with `compatWrapper`.
- Updated dependencies
  - @backstage/frontend-plugin-api@0.5.0
  - @backstage/core-plugin-api@1.8.2
  - @backstage/core-app-api@1.11.3
  - @backstage/version-bridge@1.0.7

## `@backstage/core-components` (0.13.9 → 0.13.10)

### 0.13.10

#### Patch Changes

- d625f66: Fixed bug in Link where it was possible to select and copy a hidden element into clipboard
- 6878b1d: Removed unnecessary `history` and `immer` dependencies.
- Updated dependencies
  - @backstage/core-plugin-api@1.8.2
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/theme@0.5.0
  - @backstage/version-bridge@1.0.7

## `@backstage/core-plugin-api` (1.8.1 → 1.8.2)

### 1.8.2

#### Patch Changes

- 6878b1d: Removed unnecessary `i18next` dependency.
- Updated dependencies
  - @backstage/config@1.1.1
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7

## `@backstage/create-app` (0.5.8 → 0.5.9)

### 0.5.9

#### Patch Changes

- c9f71fb: Bumped create-app version.
- ac277f3: Bumped create-app version.
- 7acbb5a: Removed `mock-fs` dev dependency.
- Updated dependencies
  - @backstage/cli-common@0.1.13

## `@backstage/dev-utils` (1.0.25 → 1.0.26)

### 1.0.26

#### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/app-defaults@1.4.7
  - @backstage/integration-react@1.1.23
  - @backstage/catalog-model@1.4.3
  - @backstage/core-app-api@1.11.3
  - @backstage/theme@0.5.0

## `@backstage/frontend-app-api` (0.4.0 → 0.5.0)

### 0.5.0

#### Minor Changes

- d4149bf: **BREAKING**: Renamed the `app/router` extension to `app/root`.
- 074dfe3: Attaching extensions to an input that does not exist is now a warning rather than an error.

#### Patch Changes

- 7d63b32: Accepts sub route refs on the new `createPlugin` routes map.
- 516fd3e: Updated README to reflect release status
- c97fa1c: Added `elements`, `wrappers`, and `router` inputs to `app/root`, that let you add things to the root of the React tree above the layout. You can use the `createAppRootElementExtension`, `createAppRootWrapperExtension`, and `createRouterExtension` extension creator, respectively, to conveniently create such extensions. These are all optional, and if you do not supply a router a default one will be used (`BrowserRouter` in regular runs, `MemoryRouter` in tests/CI).
- 5fe6600: add oauth dialog and alert display to the root elements
- Updated dependencies
  - @backstage/frontend-plugin-api@0.5.0
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/config@1.1.1
  - @backstage/core-app-api@1.11.3
  - @backstage/errors@1.2.3
  - @backstage/theme@0.5.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7

## `@backstage/frontend-plugin-api` (0.4.0 → 0.5.0)

### 0.5.0

#### Minor Changes

- d4149bf: **BREAKING**: Renamed the `app/router` extension to `app/root`.

#### Patch Changes

- b2d370e: Exposed `createComponentRef`, and ensured that produced refs and feature bits have a `toString` for easier debugging
- 7d63b32: Accepts sub route refs on the new `createPlugin` routes map.
- 516fd3e: Updated README to reflect release status
- 4016f21: Remove some unused dependencies
- c97fa1c: Added `elements`, `wrappers`, and `router` inputs to `app/root`, that let you add things to the root of the React tree above the layout. You can use the `createAppRootElementExtension`, `createAppRootWrapperExtension`, and `createRouterExtension` extension creator, respectively, to conveniently create such extensions. These are all optional, and if you do not supply a router a default one will be used (`BrowserRouter` in regular runs, `MemoryRouter` in tests/CI).
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7

## `@backstage/frontend-test-utils` (0.1.0 → 0.1.1)

### 0.1.1

#### Patch Changes

- f7566f9: Updates to reflect the `app/router` extension having been renamed to `app/root`.
- 516fd3e: Updated README to reflect release status
- c97fa1c: Added `elements`, `wrappers`, and `router` inputs to `app/root`, that let you add things to the root of the React tree above the layout. You can use the `createAppRootElementExtension`, `createAppRootWrapperExtension`, and `createRouterExtension` extension creator, respectively, to conveniently create such extensions. These are all optional, and if you do not supply a router a default one will be used (`BrowserRouter` in regular runs, `MemoryRouter` in tests/CI).
- Updated dependencies
  - @backstage/frontend-plugin-api@0.5.0
  - @backstage/frontend-app-api@0.5.0
  - @backstage/test-utils@1.4.7
  - @backstage/types@1.1.1

## `@backstage/integration-react` (1.1.22 → 1.1.23)

### 1.1.23

#### Patch Changes

- Updated dependencies
  - @backstage/core-plugin-api@1.8.2
  - @backstage/config@1.1.1
  - @backstage/integration@1.8.0

## `@backstage/plugin-adr` (0.6.11 → 0.6.12)

### 0.6.12

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/frontend-plugin-api@0.5.0
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/plugin-search-react@1.7.5
  - @backstage/integration-react@1.1.23
  - @backstage/catalog-model@1.4.3
  - @backstage/plugin-adr-common@0.2.19
  - @backstage/plugin-search-common@1.2.10

## `@backstage/plugin-adr-backend` (0.4.5 → 0.4.6)

### 0.4.6

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/catalog-client@1.5.2
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/catalog-model@1.4.3
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/integration@1.8.0
  - @backstage/plugin-adr-common@0.2.19
  - @backstage/plugin-search-common@1.2.10

## `@backstage/plugin-adr-common` (0.2.18 → 0.2.19)

### 0.2.19

#### Patch Changes

- Updated dependencies
  - @backstage/catalog-model@1.4.3
  - @backstage/integration@1.8.0
  - @backstage/plugin-search-common@1.2.10

## `@backstage/plugin-airbrake` (0.3.28 → 0.3.29)

### 0.3.29

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/dev-utils@1.0.26
  - @backstage/catalog-model@1.4.3
  - @backstage/test-utils@1.4.7

## `@backstage/plugin-airbrake-backend` (0.3.5 → 0.3.6)

### 0.3.6

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/config@1.1.1

## `@backstage/plugin-allure` (0.1.44 → 0.1.45)

### 0.1.45

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3

## `@backstage/plugin-analytics-module-ga` (0.1.36 → 0.1.37)

### 0.1.37

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/config@1.1.1

## `@backstage/plugin-analytics-module-ga4` (0.1.7 → 0.1.8)

### 0.1.8

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/config@1.1.1

## `@backstage/plugin-analytics-module-newrelic-browser` (0.0.5 → 0.0.6)

### 0.0.6

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/config@1.1.1

## `@backstage/plugin-apache-airflow` (0.2.18 → 0.2.19)

### 0.2.19

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2

## `@backstage/plugin-api-docs` (0.10.2 → 0.10.3)

### 0.10.3

#### Patch Changes

- 8a69cc9: Fix custom http resolvers for AsyncAPI widget.
- 062b8f2: Add permission check to Register Existing API button
- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-permission-react@0.4.19
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/plugin-catalog@1.16.1
  - @backstage/catalog-model@1.4.3
  - @backstage/plugin-catalog-common@1.0.20

## `@backstage/plugin-apollo-explorer` (0.1.18 → 0.1.19)

### 0.1.19

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2

## `@backstage/plugin-app-backend` (0.3.56 → 0.3.57)

### 0.3.57

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/config-loader@1.6.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/config@1.1.1
  - @backstage/types@1.1.1
  - @backstage/plugin-app-node@0.1.9

## `@backstage/plugin-app-node` (0.1.8 → 0.1.9)

### 0.1.9

#### Patch Changes

- Updated dependencies
  - @backstage/backend-plugin-api@0.6.9

## `@backstage/plugin-auth-backend` (0.20.2 → 0.20.3)

### 0.20.3

#### Patch Changes

- 004499c: Fixed an issue where some Okta's resolvers were missing
- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/catalog-client@1.5.2
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-auth-backend-module-oauth2-proxy-provider@0.1.1
  - @backstage/plugin-auth-backend-module-atlassian-provider@0.1.1
  - @backstage/plugin-auth-backend-module-gcp-iap-provider@0.2.3
  - @backstage/plugin-auth-backend-module-github-provider@0.1.6
  - @backstage/plugin-auth-backend-module-gitlab-provider@0.1.6
  - @backstage/plugin-auth-backend-module-google-provider@0.1.6
  - @backstage/plugin-auth-backend-module-oauth2-provider@0.1.6
  - @backstage/plugin-auth-backend-module-okta-provider@0.0.2
  - @backstage/plugin-catalog-node@1.6.1
  - @backstage/plugin-auth-node@0.4.3
  - @backstage/catalog-model@1.4.3
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3

## `@backstage/plugin-auth-backend-module-atlassian-provider` (0.1.0 → 0.1.1)

### 0.1.1

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-auth-node@0.4.3

## `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.2.2 → 0.2.3)

### 0.2.3

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-auth-node@0.4.3
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1

## `@backstage/plugin-auth-backend-module-github-provider` (0.1.5 → 0.1.6)

### 0.1.6

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-auth-node@0.4.3

## `@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.5 → 0.1.6)

### 0.1.6

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-auth-node@0.4.3

## `@backstage/plugin-auth-backend-module-google-provider` (0.1.5 → 0.1.6)

### 0.1.6

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-auth-node@0.4.3

## `@backstage/plugin-auth-backend-module-microsoft-provider` (0.1.3 → 0.1.4)

### 0.1.4

#### Patch Changes

- 928efbc: Deprecated the `authModuleMicrosoftProvider` export. A default export is now available and should be used like this in your backend: `backend.add(import('@backstage/plugin-auth-backend-module-microsoft-provider'));`
- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-auth-node@0.4.3

## `@backstage/plugin-auth-backend-module-oauth2-provider` (0.1.5 → 0.1.6)

### 0.1.6

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-auth-node@0.4.3

## `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.1.0 → 0.1.1)

### 0.1.1

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-auth-node@0.4.3
  - @backstage/errors@1.2.3

## `@backstage/plugin-auth-backend-module-okta-provider` (0.0.1 → 0.0.2)

### 0.0.2

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-auth-node@0.4.3

## `@backstage/plugin-auth-backend-module-pinniped-provider` (0.1.2 → 0.1.3)

### 0.1.3

#### Patch Changes

- 928efbc: Deprecated the `authModulePinnipedProvider` export. A default export is now available and should be used like this in your backend: `backend.add(import('@backstage/plugin-auth-backend-module-pinniped-provider'));`
- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-auth-node@0.4.3
  - @backstage/config@1.1.1

## `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.1.0 → 0.1.1)

### 0.1.1

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-auth-node@0.4.3
  - @backstage/catalog-model@1.4.3

## `@backstage/plugin-auth-node` (0.4.2 → 0.4.3)

### 0.4.3

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/catalog-client@1.5.2
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/catalog-model@1.4.3
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1

## `@backstage/plugin-azure-devops` (0.3.10 → 0.3.11)

### 0.3.11

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/plugin-azure-devops-common@0.3.2

## `@backstage/plugin-azure-devops-backend` (0.5.0 → 0.5.1)

### 0.5.1

#### Patch Changes

- d076ee4: Updated dependency `azure-devops-node-api` to `^12.0.0`.
- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-catalog-node@1.6.1
  - @backstage/catalog-model@1.4.3
  - @backstage/config@1.1.1
  - @backstage/integration@1.8.0
  - @backstage/plugin-azure-devops-common@0.3.2
  - @backstage/plugin-catalog-common@1.0.20

## `@backstage/plugin-azure-sites` (0.1.17 → 0.1.18)

### 0.1.18

#### Patch Changes

- a31f688: Show Azure site tags in `EntityAzureSitesOverviewWidget`.
- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3
  - @backstage/plugin-azure-sites-common@0.1.1

## `@backstage/plugin-azure-sites-backend` (0.1.18 → 0.1.19)

### 0.1.19

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/config@1.1.1
  - @backstage/plugin-azure-sites-common@0.1.1

## `@backstage/plugin-badges` (0.2.52 → 0.2.53)

### 0.2.53

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3

## `@backstage/plugin-badges-backend` (0.3.5 → 0.3.6)

### 0.3.6

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/catalog-client@1.5.2
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-auth-node@0.4.3
  - @backstage/catalog-model@1.4.3
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3

## `@backstage/plugin-bazaar` (0.2.20 → 0.2.21)

### 0.2.21

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/catalog-client@1.5.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3

## `@backstage/plugin-bazaar-backend` (0.3.6 → 0.3.7)

### 0.3.7

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-auth-node@0.4.3
  - @backstage/config@1.1.1

## `@backstage/plugin-bitrise` (0.1.55 → 0.1.56)

### 0.1.56

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3

## `@backstage/plugin-catalog` (1.16.0 → 1.16.1)

### 1.16.1

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-compat-api@0.1.1
  - @backstage/frontend-plugin-api@0.5.0
  - @backstage/core-components@0.13.10
  - @backstage/plugin-scaffolder-common@1.4.5
  - @backstage/core-plugin-api@1.8.2
  - @backstage/catalog-client@1.5.2
  - @backstage/plugin-permission-react@0.4.19
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/plugin-search-react@1.7.5
  - @backstage/integration-react@1.1.23
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1
  - @backstage/plugin-catalog-common@1.0.20
  - @backstage/plugin-search-common@1.2.10

## `@backstage/plugin-catalog-backend` (1.16.0 → 1.16.1)

### 1.16.1

#### Patch Changes

- c3249d6: Parse the URL using a different method rather than `git-url-parse` to support wildcards for URLs which are not VCS providers
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/catalog-client@1.5.2
  - @backstage/plugin-search-backend-module-catalog@0.1.13
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/backend-openapi-utils@0.1.2
  - @backstage/plugin-catalog-node@1.6.1
  - @backstage/plugin-permission-common@0.7.12
  - @backstage/plugin-permission-node@0.7.20
  - @backstage/backend-tasks@0.5.14
  - @backstage/plugin-auth-node@0.4.3
  - @backstage/catalog-model@1.4.3
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/integration@1.8.0
  - @backstage/types@1.1.1
  - @backstage/plugin-catalog-common@1.0.20
  - @backstage/plugin-events-node@0.2.18

## `@backstage/plugin-catalog-backend-module-aws` (0.3.2 → 0.3.3)

### 0.3.3

#### Patch Changes

- 4016f21: Remove some unused dependencies
- 22e88d0: Added status and e-mail as labels to the AWS Account Resource
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-kubernetes-common@0.7.3
  - @backstage/plugin-catalog-node@1.6.1
  - @backstage/backend-tasks@0.5.14
  - @backstage/catalog-model@1.4.3
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/integration@1.8.0
  - @backstage/integration-aws-node@0.1.8
  - @backstage/plugin-catalog-common@1.0.20

## `@backstage/plugin-catalog-backend-module-azure` (0.1.27 → 0.1.28)

### 0.1.28

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-catalog-node@1.6.1
  - @backstage/backend-tasks@0.5.14
  - @backstage/config@1.1.1
  - @backstage/integration@1.8.0
  - @backstage/plugin-catalog-common@1.0.20

## `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.1.1 → 0.1.2)

### 0.1.2

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/backend-openapi-utils@0.1.2
  - @backstage/plugin-catalog-node@1.6.1
  - @backstage/backend-tasks@0.5.14
  - @backstage/catalog-model@1.4.3
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3

## `@backstage/plugin-catalog-backend-module-bitbucket` (0.2.23 → 0.2.24)

### 0.2.24

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/plugin-catalog-node@1.6.1
  - @backstage/config@1.1.1
  - @backstage/integration@1.8.0
  - @backstage/plugin-bitbucket-cloud-common@0.2.15

## `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.23 → 0.1.24)

### 0.1.24

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/catalog-client@1.5.2
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-catalog-node@1.6.1
  - @backstage/backend-tasks@0.5.14
  - @backstage/catalog-model@1.4.3
  - @backstage/config@1.1.1
  - @backstage/integration@1.8.0
  - @backstage/plugin-bitbucket-cloud-common@0.2.15
  - @backstage/plugin-catalog-common@1.0.20
  - @backstage/plugin-events-node@0.2.18

## `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.21 → 0.1.22)

### 0.1.22

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-catalog-node@1.6.1
  - @backstage/backend-tasks@0.5.14
  - @backstage/catalog-model@1.4.3
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/integration@1.8.0

## `@backstage/plugin-catalog-backend-module-gcp` (0.1.8 → 0.1.9)

### 0.1.9

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-kubernetes-common@0.7.3
  - @backstage/plugin-catalog-node@1.6.1
  - @backstage/backend-tasks@0.5.14
  - @backstage/catalog-model@1.4.3
  - @backstage/config@1.1.1

## `@backstage/plugin-catalog-backend-module-gerrit` (0.1.24 → 0.1.25)

### 0.1.25

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-catalog-node@1.6.1
  - @backstage/backend-tasks@0.5.14
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/integration@1.8.0

## `@backstage/plugin-catalog-backend-module-github` (0.4.6 → 0.4.7)

### 0.4.7

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/catalog-client@1.5.2
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-catalog-node@1.6.1
  - @backstage/plugin-catalog-backend@1.16.1
  - @backstage/backend-tasks@0.5.14
  - @backstage/catalog-model@1.4.3
  - @backstage/config@1.1.1
  - @backstage/integration@1.8.0
  - @backstage/plugin-catalog-common@1.0.20
  - @backstage/plugin-events-node@0.2.18

## `@backstage/plugin-catalog-backend-module-github-org` (0.1.2 → 0.1.3)

### 0.1.3

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-catalog-node@1.6.1
  - @backstage/backend-tasks@0.5.14
  - @backstage/plugin-catalog-backend-module-github@0.4.7
  - @backstage/config@1.1.1

## `@backstage/plugin-catalog-backend-module-gitlab` (0.3.5 → 0.3.6)

### 0.3.6

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-catalog-node@1.6.1
  - @backstage/backend-tasks@0.5.14
  - @backstage/catalog-model@1.4.3
  - @backstage/config@1.1.1
  - @backstage/integration@1.8.0

## `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.12 → 0.4.13)

### 0.4.13

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-catalog-node@1.6.1
  - @backstage/plugin-permission-common@0.7.12
  - @backstage/plugin-catalog-backend@1.16.1
  - @backstage/backend-tasks@0.5.14
  - @backstage/catalog-model@1.4.3
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/plugin-events-node@0.2.18

## `@backstage/plugin-catalog-backend-module-ldap` (0.5.23 → 0.5.24)

### 0.5.24

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-node@1.6.1
  - @backstage/backend-tasks@0.5.14
  - @backstage/catalog-model@1.4.3
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1
  - @backstage/plugin-catalog-common@1.0.20

## `@backstage/plugin-catalog-backend-module-msgraph` (0.5.15 → 0.5.16)

### 0.5.16

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-catalog-node@1.6.1
  - @backstage/backend-tasks@0.5.14
  - @backstage/catalog-model@1.4.3
  - @backstage/config@1.1.1
  - @backstage/plugin-catalog-common@1.0.20

## `@backstage/plugin-catalog-backend-module-openapi` (0.1.25 → 0.1.26)

### 0.1.26

#### Patch Changes

- 4ebf99b: Add support for the new backend system.

  A new backend module for the catalog backend
  was added and exported as `default`.

  You can use it with the new backend system like

  ```ts title="packages/backend/src/index.ts"
  backend.add(import('@backstage/plugin-catalog-backend-module-openapi'));
  ```

- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-catalog-node@1.6.1
  - @backstage/plugin-catalog-backend@1.16.1
  - @backstage/catalog-model@1.4.3
  - @backstage/config@1.1.1
  - @backstage/integration@1.8.0
  - @backstage/types@1.1.1
  - @backstage/plugin-catalog-common@1.0.20

## `@backstage/plugin-catalog-backend-module-puppetdb` (0.1.13 → 0.1.14)

### 0.1.14

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-catalog-node@1.6.1
  - @backstage/backend-tasks@0.5.14
  - @backstage/catalog-model@1.4.3
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1

## `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.5 → 0.1.6)

### 0.1.6

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/plugin-scaffolder-common@1.4.5
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-catalog-node@1.6.1
  - @backstage/catalog-model@1.4.3
  - @backstage/plugin-catalog-common@1.0.20

## `@backstage/plugin-catalog-backend-module-unprocessed` (0.3.5 → 0.3.6)

### 0.3.6

#### Patch Changes

- Updated dependencies
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-auth-node@0.4.3
  - @backstage/catalog-model@1.4.3

## `@backstage/plugin-catalog-common` (1.0.19 → 1.0.20)

### 1.0.20

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-permission-common@0.7.12
  - @backstage/catalog-model@1.4.3
  - @backstage/plugin-search-common@1.2.10

## `@backstage/plugin-catalog-graph` (0.3.2 → 0.3.3)

### 0.3.3

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/catalog-client@1.5.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3
  - @backstage/types@1.1.1

## `@backstage/plugin-catalog-import` (0.10.4 → 0.10.5)

### 0.10.5

#### Patch Changes

- Updated dependencies
  - @backstage/core-compat-api@0.1.1
  - @backstage/frontend-plugin-api@0.5.0
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/catalog-client@1.5.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/integration-react@1.1.23
  - @backstage/catalog-model@1.4.3
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/integration@1.8.0
  - @backstage/plugin-catalog-common@1.0.20

## `@backstage/plugin-catalog-node` (1.6.0 → 1.6.1)

### 1.6.1

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/catalog-client@1.5.2
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-permission-common@0.7.12
  - @backstage/plugin-permission-node@0.7.20
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1
  - @backstage/plugin-catalog-common@1.0.20

## `@backstage/plugin-catalog-react` (1.9.2 → 1.9.3)

### 1.9.3

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/frontend-plugin-api@0.5.0
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/catalog-client@1.5.2
  - @backstage/plugin-permission-react@0.4.19
  - @backstage/plugin-permission-common@0.7.12
  - @backstage/integration-react@1.1.23
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-catalog-common@1.0.20

## `@backstage/plugin-catalog-unprocessed-entities` (0.1.6 → 0.1.7)

### 0.1.7

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3

## `@backstage/plugin-cicd-statistics` (0.1.30 → 0.1.31)

### 0.1.31

#### Patch Changes

- Updated dependencies
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3

## `@backstage/plugin-cicd-statistics-module-gitlab` (0.1.24 → 0.1.25)

### 0.1.25

#### Patch Changes

- Updated dependencies
  - @backstage/core-plugin-api@1.8.2
  - @backstage/catalog-model@1.4.3
  - @backstage/plugin-cicd-statistics@0.1.31

## `@backstage/plugin-circleci` (0.3.28 → 0.3.29)

### 0.3.29

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3

## `@backstage/plugin-cloudbuild` (0.3.28 → 0.3.29)

### 0.3.29

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3

## `@backstage/plugin-code-climate` (0.1.28 → 0.1.29)

### 0.1.29

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3

## `@backstage/plugin-code-coverage` (0.2.21 → 0.2.22)

### 0.2.22

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3

## `@backstage/plugin-code-coverage-backend` (0.2.22 → 0.2.23)

### 0.2.23

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/catalog-client@1.5.2
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-auth-node@0.4.3
  - @backstage/catalog-model@1.4.3
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/integration@1.8.0

## `@backstage/plugin-codescene` (0.1.20 → 0.1.21)

### 0.1.21

#### Patch Changes

- d5eda61: Updated Readme document in codescene plugin
- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3

## `@backstage/plugin-config-schema` (0.1.48 → 0.1.49)

### 0.1.49

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1

## `@backstage/plugin-cost-insights` (0.12.17 → 0.12.18)

### 0.12.18

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3
  - @backstage/config@1.1.1
  - @backstage/theme@0.5.0
  - @backstage/plugin-cost-insights-common@0.1.2

## `@backstage/plugin-devtools` (0.1.7 → 0.1.8)

### 0.1.8

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-permission-react@0.4.19
  - @backstage/errors@1.2.3
  - @backstage/plugin-devtools-common@0.1.8

## `@backstage/plugin-devtools-backend` (0.2.5 → 0.2.6)

### 0.2.6

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/config-loader@1.6.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-permission-common@0.7.12
  - @backstage/plugin-permission-node@0.7.20
  - @backstage/plugin-auth-node@0.4.3
  - @backstage/cli-common@0.1.13
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1
  - @backstage/plugin-devtools-common@0.1.8

## `@backstage/plugin-devtools-common` (0.1.7 → 0.1.8)

### 0.1.8

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-permission-common@0.7.12
  - @backstage/types@1.1.1

## `@backstage/plugin-dynatrace` (8.0.2 → 8.0.3)

### 8.0.3

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3

## `@backstage/plugin-entity-feedback` (0.2.11 → 0.2.12)

### 0.2.12

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/plugin-entity-feedback-common@0.1.3

## `@backstage/plugin-entity-feedback-backend` (0.2.5 → 0.2.6)

### 0.2.6

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/catalog-client@1.5.2
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-auth-node@0.4.3
  - @backstage/catalog-model@1.4.3
  - @backstage/config@1.1.1
  - @backstage/plugin-entity-feedback-common@0.1.3

## `@backstage/plugin-entity-validation` (0.1.13 → 0.1.14)

### 0.1.14

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/catalog-client@1.5.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/plugin-catalog-common@1.0.20

## `@backstage/plugin-events-backend` (0.2.17 → 0.2.18)

### 0.2.18

#### Patch Changes

- 92ea615: Update `README.md`
- d5ddc4e: Add documentation on how to install the plugins with the new backend system.
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/config@1.1.1
  - @backstage/plugin-events-node@0.2.18

## `@backstage/plugin-events-backend-module-aws-sqs` (0.2.11 → 0.2.12)

### 0.2.12

#### Patch Changes

- 7b8e551: Fix errors when deleting SQS messages:

  - If zero messages were received, skip deletion to avoid `EmptyBatchRequest` error from the SQS client.
  - If zero failures were returned from the SQS client during deletion, skip error logging.

- d5ddc4e: Add documentation on how to install the plugins with the new backend system.
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/backend-tasks@0.5.14
  - @backstage/config@1.1.1
  - @backstage/types@1.1.1
  - @backstage/plugin-events-node@0.2.18

## `@backstage/plugin-events-backend-module-azure` (0.1.18 → 0.1.19)

### 0.1.19

#### Patch Changes

- af76a95: Add default exports for the new backend system and documentation.
- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-events-node@0.2.18

## `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.18 → 0.1.19)

### 0.1.19

#### Patch Changes

- af76a95: Add default exports for the new backend system and documentation.
- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-events-node@0.2.18

## `@backstage/plugin-events-backend-module-gerrit` (0.1.18 → 0.1.19)

### 0.1.19

#### Patch Changes

- af76a95: Add default exports for the new backend system and documentation.
- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-events-node@0.2.18

## `@backstage/plugin-events-backend-module-github` (0.1.18 → 0.1.19)

### 0.1.19

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/config@1.1.1
  - @backstage/plugin-events-node@0.2.18

## `@backstage/plugin-events-backend-module-gitlab` (0.1.18 → 0.1.19)

### 0.1.19

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/config@1.1.1
  - @backstage/plugin-events-node@0.2.18

## `@backstage/plugin-events-backend-test-utils` (0.1.18 → 0.1.19)

### 0.1.19

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-events-node@0.2.18

## `@backstage/plugin-events-node` (0.2.17 → 0.2.18)

### 0.2.18

#### Patch Changes

- Updated dependencies
  - @backstage/backend-plugin-api@0.6.9

## `@backstage/plugin-explore` (0.4.14 → 0.4.15)

### 0.4.15

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/frontend-plugin-api@0.5.0
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/plugin-explore-react@0.0.35
  - @backstage/plugin-search-react@1.7.5
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/plugin-explore-common@0.0.2
  - @backstage/plugin-search-common@1.2.10

## `@backstage/plugin-explore-backend` (0.0.18 → 0.0.19)

### 0.0.19

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/plugin-search-backend-module-explore@0.1.13
  - @backstage/config@1.1.1
  - @backstage/types@1.1.1
  - @backstage/plugin-explore-common@0.0.2

## `@backstage/plugin-explore-react` (0.0.34 → 0.0.35)

### 0.0.35

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-explore-common@0.0.2

## `@backstage/plugin-firehydrant` (0.2.12 → 0.2.13)

### 0.2.13

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3

## `@backstage/plugin-fossa` (0.2.60 → 0.2.61)

### 0.2.61

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3

## `@backstage/plugin-gcalendar` (0.3.21 → 0.3.22)

### 0.3.22

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/errors@1.2.3

## `@backstage/plugin-gcp-projects` (0.3.44 → 0.3.45)

### 0.3.45

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2

## `@backstage/plugin-git-release-manager` (0.3.40 → 0.3.41)

### 0.3.41

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/integration@1.8.0

## `@backstage/plugin-github-actions` (0.6.9 → 0.6.10)

### 0.6.10

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/integration-react@1.1.23
  - @backstage/catalog-model@1.4.3
  - @backstage/integration@1.8.0

## `@backstage/plugin-github-deployments` (0.1.59 → 0.1.60)

### 0.1.60

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/integration-react@1.1.23
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/integration@1.8.0

## `@backstage/plugin-github-issues` (0.2.17 → 0.2.18)

### 0.2.18

#### Patch Changes

- bf92ae3: Updated dependency `octokit` to `^3.0.0`.
- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/integration@1.8.0

## `@backstage/plugin-github-pull-requests-board` (0.1.22 → 0.1.23)

### 0.1.23

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3
  - @backstage/integration@1.8.0

## `@backstage/plugin-gitops-profiles` (0.3.43 → 0.3.44)

### 0.3.44

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2

## `@backstage/plugin-gocd` (0.1.34 → 0.1.35)

### 0.1.35

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3

## `@backstage/plugin-graphiql` (0.3.1 → 0.3.2)

### 0.3.2

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-compat-api@0.1.1
  - @backstage/frontend-plugin-api@0.5.0
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2

## `@backstage/plugin-graphql-voyager` (0.1.10 → 0.1.11)

### 0.1.11

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2

## `@backstage/plugin-home` (0.6.0 → 0.6.1)

### 0.6.1

#### Patch Changes

- 98ac5ab: Updated dependency `@rjsf/utils` to `5.15.1`.
  Updated dependency `@rjsf/core` to `5.15.1`.
  Updated dependency `@rjsf/material-ui` to `5.15.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.15.1`.
- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-compat-api@0.1.1
  - @backstage/frontend-plugin-api@0.5.0
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/catalog-client@1.5.2
  - @backstage/plugin-home-react@0.1.7
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3
  - @backstage/core-app-api@1.11.3
  - @backstage/theme@0.5.0

## `@backstage/plugin-home-react` (0.1.6 → 0.1.7)

### 0.1.7

#### Patch Changes

- 98ac5ab: Updated dependency `@rjsf/utils` to `5.15.1`.
  Updated dependency `@rjsf/core` to `5.15.1`.
  Updated dependency `@rjsf/material-ui` to `5.15.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.15.1`.
- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2

## `@backstage/plugin-ilert` (0.2.17 → 0.2.18)

### 0.2.18

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3

## `@backstage/plugin-jenkins` (0.9.3 → 0.9.4)

### 0.9.4

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/plugin-jenkins-common@0.1.23

## `@backstage/plugin-jenkins-backend` (0.3.2 → 0.3.3)

### 0.3.3

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/catalog-client@1.5.2
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-catalog-node@1.6.1
  - @backstage/plugin-permission-common@0.7.12
  - @backstage/plugin-permission-node@0.7.20
  - @backstage/plugin-auth-node@0.4.3
  - @backstage/catalog-model@1.4.3
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/plugin-jenkins-common@0.1.23

## `@backstage/plugin-jenkins-common` (0.1.22 → 0.1.23)

### 0.1.23

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-permission-common@0.7.12
  - @backstage/plugin-catalog-common@1.0.20

## `@backstage/plugin-kafka` (0.3.28 → 0.3.29)

### 0.3.29

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3

## `@backstage/plugin-kafka-backend` (0.3.6 → 0.3.7)

### 0.3.7

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3

## `@backstage/plugin-kubernetes` (0.11.3 → 0.11.4)

### 0.11.4

#### Patch Changes

- d5d2c67: Add `authuser` search parameter to GKE cluster link formatter in k8s plugin

  Thanks to this, people with multiple simultaneously logged-in accounts in their GCP console will automatically view objects with the same email as the one signed in to the Google auth provider in Backstage.

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-kubernetes-react@0.2.1
  - @backstage/plugin-kubernetes-common@0.7.3
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3

## `@backstage/plugin-kubernetes-backend` (0.14.0 → 0.14.1)

### 0.14.1

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/catalog-client@1.5.2
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-kubernetes-common@0.7.3
  - @backstage/plugin-catalog-node@1.6.1
  - @backstage/plugin-permission-common@0.7.12
  - @backstage/plugin-permission-node@0.7.20
  - @backstage/plugin-auth-node@0.4.3
  - @backstage/catalog-model@1.4.3
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/integration-aws-node@0.1.8
  - @backstage/types@1.1.1
  - @backstage/plugin-kubernetes-node@0.1.3

## `@backstage/plugin-kubernetes-cluster` (0.0.4 → 0.0.5)

### 0.0.5

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-kubernetes-react@0.2.1
  - @backstage/plugin-kubernetes-common@0.7.3
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3

## `@backstage/plugin-kubernetes-common` (0.7.2 → 0.7.3)

### 0.7.3

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/plugin-permission-common@0.7.12
  - @backstage/catalog-model@1.4.3
  - @backstage/types@1.1.1

## `@backstage/plugin-kubernetes-node` (0.1.2 → 0.1.3)

### 0.1.3

#### Patch Changes

- Updated dependencies
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-kubernetes-common@0.7.3
  - @backstage/catalog-model@1.4.3
  - @backstage/types@1.1.1

## `@backstage/plugin-kubernetes-react` (0.2.0 → 0.2.1)

### 0.2.1

#### Patch Changes

- d5d2c67: Add `authuser` search parameter to GKE cluster link formatter in k8s plugin

  Thanks to this, people with multiple simultaneously logged-in accounts in their GCP console will automatically view objects with the same email as the one signed in to the Google auth provider in Backstage.

- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-kubernetes-common@0.7.3
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1

## `@backstage/plugin-lighthouse` (0.4.13 → 0.4.14)

### 0.4.14

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3
  - @backstage/plugin-lighthouse-common@0.1.4

## `@backstage/plugin-lighthouse-backend` (0.4.0 → 0.4.1)

### 0.4.1

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/catalog-client@1.5.2
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-catalog-node@1.6.1
  - @backstage/backend-tasks@0.5.14
  - @backstage/catalog-model@1.4.3
  - @backstage/config@1.1.1
  - @backstage/types@1.1.1
  - @backstage/plugin-lighthouse-common@0.1.4

## `@backstage/plugin-linguist` (0.1.13 → 0.1.14)

### 0.1.14

#### Patch Changes

- 4016f21: Remove some unused dependencies
- 4f42918: Added alpha support for the New Frontend System (Declarative Integration)
- Updated dependencies
  - @backstage/core-compat-api@0.1.1
  - @backstage/frontend-plugin-api@0.5.0
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/plugin-linguist-common@0.1.2

## `@backstage/plugin-linguist-backend` (0.5.5 → 0.5.6)

### 0.5.6

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/catalog-client@1.5.2
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-catalog-node@1.6.1
  - @backstage/backend-tasks@0.5.14
  - @backstage/plugin-auth-node@0.4.3
  - @backstage/catalog-model@1.4.3
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1
  - @backstage/plugin-linguist-common@0.1.2

## `@backstage/plugin-microsoft-calendar` (0.1.10 → 0.1.11)

### 0.1.11

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/errors@1.2.3

## `@backstage/plugin-newrelic` (0.3.43 → 0.3.44)

### 0.3.44

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2

## `@backstage/plugin-newrelic-dashboard` (0.3.3 → 0.3.4)

### 0.3.4

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3

## `@backstage/plugin-nomad` (0.1.9 → 0.1.10)

### 0.1.10

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3

## `@backstage/plugin-nomad-backend` (0.1.10 → 0.1.11)

### 0.1.11

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3

## `@backstage/plugin-octopus-deploy` (0.2.10 → 0.2.11)

### 0.2.11

#### Patch Changes

- 7d96ba8: added install path and fixed import on plugin-octopus-deploy
- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3

## `@backstage/plugin-opencost` (0.2.3 → 0.2.4)

### 0.2.4

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2

## `@backstage/plugin-org` (0.6.18 → 0.6.19)

### 0.6.19

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3
  - @backstage/plugin-catalog-common@1.0.20

## `@backstage/plugin-org-react` (0.1.17 → 0.1.18)

### 0.1.18

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/catalog-client@1.5.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3

## `@backstage/plugin-pagerduty` (0.7.0 → 0.7.1)

### 0.7.1

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-home-react@0.1.7
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3

## `@backstage/plugin-periskop` (0.1.26 → 0.1.27)

### 0.1.27

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3

## `@backstage/plugin-periskop-backend` (0.2.6 → 0.2.7)

### 0.2.7

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/config@1.1.1

## `@backstage/plugin-permission-backend` (0.5.31 → 0.5.32)

### 0.5.32

#### Patch Changes

- b1acd9b: Updated README
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-permission-common@0.7.12
  - @backstage/plugin-permission-node@0.7.20
  - @backstage/plugin-auth-node@0.4.3
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3

## `@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.5 → 0.1.6)

### 0.1.6

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-permission-common@0.7.12
  - @backstage/plugin-permission-node@0.7.20
  - @backstage/plugin-auth-node@0.4.3

## `@backstage/plugin-permission-common` (0.7.11 → 0.7.12)

### 0.7.12

#### Patch Changes

- b1acd9b: Updated README
- Updated dependencies
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1

## `@backstage/plugin-permission-node` (0.7.19 → 0.7.20)

### 0.7.20

#### Patch Changes

- b1acd9b: Updated README
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-permission-common@0.7.12
  - @backstage/plugin-auth-node@0.4.3
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3

## `@backstage/plugin-permission-react` (0.4.18 → 0.4.19)

### 0.4.19

#### Patch Changes

- 4016f21: Remove some unused dependencies
- b1acd9b: Updated README
- Updated dependencies
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-permission-common@0.7.12
  - @backstage/config@1.1.1

## `@backstage/plugin-playlist` (0.2.2 → 0.2.3)

### 0.2.3

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-permission-react@0.4.19
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/plugin-permission-common@0.7.12
  - @backstage/plugin-search-react@1.7.5
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/plugin-catalog-common@1.0.20
  - @backstage/plugin-playlist-common@0.1.14

## `@backstage/plugin-playlist-backend` (0.3.12 → 0.3.13)

### 0.3.13

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/catalog-client@1.5.2
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-permission-common@0.7.12
  - @backstage/plugin-permission-node@0.7.20
  - @backstage/plugin-auth-node@0.4.3
  - @backstage/catalog-model@1.4.3
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/plugin-playlist-common@0.1.14

## `@backstage/plugin-playlist-common` (0.1.13 → 0.1.14)

### 0.1.14

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-permission-common@0.7.12

## `@backstage/plugin-proxy-backend` (0.4.6 → 0.4.7)

### 0.4.7

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/config@1.1.1

## `@backstage/plugin-puppetdb` (0.1.11 → 0.1.12)

### 0.1.12

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3

## `@backstage/plugin-rollbar` (0.4.28 → 0.4.29)

### 0.4.29

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3

## `@backstage/plugin-rollbar-backend` (0.1.53 → 0.1.54)

### 0.1.54

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/config@1.1.1

## `@backstage/plugin-scaffolder` (1.17.0 → 1.17.1)

### 1.17.1

#### Patch Changes

- 98ac5ab: Updated dependency `@rjsf/utils` to `5.15.1`.
  Updated dependency `@rjsf/core` to `5.15.1`.
  Updated dependency `@rjsf/material-ui` to `5.15.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.15.1`.
- 4016f21: Remove some unused dependencies
- df4bc9d: Minor internal refactor
- Updated dependencies
  - @backstage/plugin-scaffolder-react@1.7.1
  - @backstage/core-components@0.13.10
  - @backstage/plugin-scaffolder-common@1.4.5
  - @backstage/core-plugin-api@1.8.2
  - @backstage/catalog-client@1.5.2
  - @backstage/plugin-permission-react@0.4.19
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/integration-react@1.1.23
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/integration@1.8.0
  - @backstage/types@1.1.1
  - @backstage/plugin-catalog-common@1.0.20

## `@backstage/plugin-scaffolder-backend` (1.19.2 → 1.20.0)

### 1.20.0

#### Minor Changes

- a694f71: The Scaffolder builtin actions now contains an action for running pipelines from Bitbucket Cloud Rest API
- 7c522c5: Add `gitlab:repo:push` scaffolder action to push files to arbitrary branch without creating a Merge Request

#### Patch Changes

- e9ab1c4: Fixed an issue where not passing a `value` to any of the action's permission conditions caused an error.
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/plugin-scaffolder-backend-module-github@0.1.1
  - @backstage/plugin-scaffolder-backend-module-gitlab@0.2.12
  - @backstage/plugin-scaffolder-common@1.4.5
  - @backstage/plugin-scaffolder-backend-module-bitbucket@0.1.1
  - @backstage/catalog-client@1.5.2
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-scaffolder-backend-module-azure@0.1.1
  - @backstage/plugin-catalog-backend-module-scaffolder-entity-model@0.1.6
  - @backstage/plugin-catalog-node@1.6.1
  - @backstage/plugin-permission-common@0.7.12
  - @backstage/plugin-permission-node@0.7.20
  - @backstage/backend-tasks@0.5.14
  - @backstage/plugin-auth-node@0.4.3
  - @backstage/plugin-scaffolder-backend-module-gerrit@0.1.1
  - @backstage/plugin-scaffolder-node@0.2.10
  - @backstage/catalog-model@1.4.3
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/integration@1.8.0
  - @backstage/types@1.1.1

## `@backstage/plugin-scaffolder-backend-module-azure` (0.1.0 → 0.1.1)

### 0.1.1

#### Patch Changes

- d076ee4: Updated dependency `azure-devops-node-api` to `^12.0.0`.
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/plugin-scaffolder-node@0.2.10
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/integration@1.8.0

## `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.1.0 → 0.1.1)

### 0.1.1

#### Patch Changes

- a694f71: The Scaffolder builtin actions now contains an action for running pipelines from Bitbucket Cloud Rest API
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/plugin-scaffolder-node@0.2.10
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/integration@1.8.0

## `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.9 → 0.2.10)

### 0.2.10

#### Patch Changes

- 7acbb5a: Removed `mock-fs` dev dependency.
- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/plugin-scaffolder-node@0.2.10
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/integration@1.8.0

## `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.32 → 0.2.33)

### 0.2.33

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/plugin-scaffolder-node@0.2.10
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/integration@1.8.0
  - @backstage/types@1.1.1

## `@backstage/plugin-scaffolder-backend-module-gerrit` (0.1.0 → 0.1.1)

### 0.1.1

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-scaffolder-node@0.2.10
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/integration@1.8.0

## `@backstage/plugin-scaffolder-backend-module-github` (0.1.0 → 0.1.1)

### 0.1.1

#### Patch Changes

- 5470300: Ensure `teamReviewers` list is unique before calling API
- bf92ae3: Updated dependency `octokit` to `^3.0.0`.
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/plugin-scaffolder-node@0.2.10
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/integration@1.8.0

## `@backstage/plugin-scaffolder-backend-module-gitlab` (0.2.11 → 0.2.12)

### 0.2.12

#### Patch Changes

- 604c9dd: Add Scaffolder custom action that creates GitLab issues called `gitlab:issues:create`
- 7c522c5: Add `gitlab:repo:push` scaffolder action to push files to arbitrary branch without creating a Merge Request
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/plugin-scaffolder-node@0.2.10
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/integration@1.8.0

## `@backstage/plugin-scaffolder-backend-module-rails` (0.4.25 → 0.4.26)

### 0.4.26

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/plugin-scaffolder-node@0.2.10
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/integration@1.8.0
  - @backstage/types@1.1.1

## `@backstage/plugin-scaffolder-backend-module-sentry` (0.1.16 → 0.1.17)

### 0.1.17

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-scaffolder-node@0.2.10
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3

## `@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.29 → 0.2.30)

### 0.2.30

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/plugin-scaffolder-node@0.2.10
  - @backstage/types@1.1.1

## `@backstage/plugin-scaffolder-common` (1.4.4 → 1.4.5)

### 1.4.5

#### Patch Changes

- 178b8d8: Updated Template.v1beta3.schema.json, added a missing "presentation" field
- Updated dependencies
  - @backstage/plugin-permission-common@0.7.12
  - @backstage/catalog-model@1.4.3
  - @backstage/types@1.1.1

## `@backstage/plugin-scaffolder-node` (0.2.9 → 0.2.10)

### 0.2.10

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/plugin-scaffolder-common@1.4.5
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/integration@1.8.0
  - @backstage/types@1.1.1

## `@backstage/plugin-scaffolder-react` (1.7.0 → 1.7.1)

### 1.7.1

#### Patch Changes

- c28f281: Scaffolder form now shows a list of errors at the top of the form.
- 0b9ce2b: Fix for a step with no properties
- 98ac5ab: Updated dependency `@rjsf/utils` to `5.15.1`.
  Updated dependency `@rjsf/core` to `5.15.1`.
  Updated dependency `@rjsf/material-ui` to `5.15.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.15.1`.
- 4016f21: Remove some unused dependencies
- d16f85f: Show first scaffolder output text by default
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/plugin-scaffolder-common@1.4.5
  - @backstage/core-plugin-api@1.8.2
  - @backstage/catalog-client@1.5.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3
  - @backstage/theme@0.5.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7

## `@backstage/plugin-search` (1.4.4 → 1.4.5)

### 1.4.5

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-compat-api@0.1.1
  - @backstage/frontend-plugin-api@0.5.0
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/plugin-search-react@1.7.5
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-search-common@1.2.10

## `@backstage/plugin-search-backend` (1.4.8 → 1.4.9)

### 1.4.9

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/backend-openapi-utils@0.1.2
  - @backstage/plugin-permission-common@0.7.12
  - @backstage/plugin-permission-node@0.7.20
  - @backstage/plugin-auth-node@0.4.3
  - @backstage/plugin-search-backend-node@1.2.13
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1
  - @backstage/plugin-search-common@1.2.10

## `@backstage/plugin-search-backend-module-catalog` (0.1.12 → 0.1.13)

### 0.1.13

#### Patch Changes

- 2e6c56b: Update wording to show that the backend system no longer is in alpha
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/catalog-client@1.5.2
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-catalog-node@1.6.1
  - @backstage/plugin-permission-common@0.7.12
  - @backstage/backend-tasks@0.5.14
  - @backstage/plugin-search-backend-node@1.2.13
  - @backstage/catalog-model@1.4.3
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/plugin-catalog-common@1.0.20
  - @backstage/plugin-search-common@1.2.10

## `@backstage/plugin-search-backend-module-elasticsearch` (1.3.11 → 1.3.12)

### 1.3.12

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-search-backend-node@1.2.13
  - @backstage/config@1.1.1
  - @backstage/integration-aws-node@0.1.8
  - @backstage/plugin-search-common@1.2.10

## `@backstage/plugin-search-backend-module-explore` (0.1.12 → 0.1.13)

### 0.1.13

#### Patch Changes

- 2e6c56b: Update wording to show that the backend system no longer is in alpha
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/backend-tasks@0.5.14
  - @backstage/plugin-search-backend-node@1.2.13
  - @backstage/config@1.1.1
  - @backstage/plugin-explore-common@0.0.2
  - @backstage/plugin-search-common@1.2.10

## `@backstage/plugin-search-backend-module-pg` (0.5.17 → 0.5.18)

### 0.5.18

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-search-backend-node@1.2.13
  - @backstage/config@1.1.1
  - @backstage/plugin-search-common@1.2.10

## `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.1.1 → 0.1.2)

### 0.1.2

#### Patch Changes

- 2e6c56b: Update wording to show that the backend system no longer is in alpha
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/backend-tasks@0.5.14
  - @backstage/plugin-search-backend-node@1.2.13
  - @backstage/config@1.1.1
  - @backstage/plugin-search-common@1.2.10

## `@backstage/plugin-search-backend-module-techdocs` (0.1.12 → 0.1.13)

### 0.1.13

#### Patch Changes

- 2e6c56b: Update wording to show that the backend system no longer is in alpha
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/catalog-client@1.5.2
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-catalog-node@1.6.1
  - @backstage/plugin-permission-common@0.7.12
  - @backstage/backend-tasks@0.5.14
  - @backstage/plugin-search-backend-node@1.2.13
  - @backstage/plugin-techdocs-node@1.11.1
  - @backstage/catalog-model@1.4.3
  - @backstage/config@1.1.1
  - @backstage/plugin-catalog-common@1.0.20
  - @backstage/plugin-search-common@1.2.10

## `@backstage/plugin-search-backend-node` (1.2.12 → 1.2.13)

### 1.2.13

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-permission-common@0.7.12
  - @backstage/backend-tasks@0.5.14
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/plugin-search-common@1.2.10

## `@backstage/plugin-search-common` (1.2.9 → 1.2.10)

### 1.2.10

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-permission-common@0.7.12
  - @backstage/types@1.1.1

## `@backstage/plugin-search-react` (1.7.4 → 1.7.5)

### 1.7.5

#### Patch Changes

- Updated dependencies
  - @backstage/frontend-plugin-api@0.5.0
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/theme@0.5.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-search-common@1.2.10

## `@backstage/plugin-sentry` (0.5.13 → 0.5.14)

### 0.5.14

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3

## `@backstage/plugin-shortcuts` (0.3.17 → 0.3.18)

### 0.3.18

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/theme@0.5.0
  - @backstage/types@1.1.1

## `@backstage/plugin-sonarqube` (0.7.10 → 0.7.11)

### 0.7.11

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3
  - @backstage/plugin-sonarqube-react@0.1.12

## `@backstage/plugin-sonarqube-backend` (0.2.10 → 0.2.11)

### 0.2.11

#### Patch Changes

- 53445cd: Updated README
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3

## `@backstage/plugin-sonarqube-react` (0.1.11 → 0.1.12)

### 0.1.12

#### Patch Changes

- Updated dependencies
  - @backstage/core-plugin-api@1.8.2
  - @backstage/catalog-model@1.4.3

## `@backstage/plugin-splunk-on-call` (0.4.17 → 0.4.18)

### 0.4.18

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3

## `@backstage/plugin-stack-overflow` (0.1.23 → 0.1.24)

### 0.1.24

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/frontend-plugin-api@0.5.0
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-home-react@0.1.7
  - @backstage/plugin-search-react@1.7.5
  - @backstage/config@1.1.1
  - @backstage/plugin-search-common@1.2.10

## `@backstage/plugin-stack-overflow-backend` (0.2.12 → 0.2.13)

### 0.2.13

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/plugin-search-backend-module-stack-overflow-collator@0.1.2

## `@backstage/plugin-stackstorm` (0.1.9 → 0.1.10)

### 0.1.10

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/errors@1.2.3

## `@backstage/plugin-tech-insights` (0.3.20 → 0.3.21)

### 0.3.21

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1
  - @backstage/plugin-tech-insights-common@0.2.12

## `@backstage/plugin-tech-insights-backend` (0.5.22 → 0.5.23)

### 0.5.23

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/catalog-client@1.5.2
  - @backstage/plugin-tech-insights-node@0.4.15
  - @backstage/backend-tasks@0.5.14
  - @backstage/catalog-model@1.4.3
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1
  - @backstage/plugin-tech-insights-common@0.2.12

## `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.40 → 0.1.41)

### 0.1.41

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/plugin-tech-insights-node@0.4.15
  - @backstage/errors@1.2.3
  - @backstage/plugin-tech-insights-common@0.2.12

## `@backstage/plugin-tech-insights-node` (0.4.14 → 0.4.15)

### 0.4.15

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/config@1.1.1
  - @backstage/types@1.1.1
  - @backstage/plugin-tech-insights-common@0.2.12

## `@backstage/plugin-tech-radar` (0.6.11 → 0.6.12)

### 0.6.12

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-compat-api@0.1.1
  - @backstage/frontend-plugin-api@0.5.0
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2

## `@backstage/plugin-techdocs` (1.9.2 → 1.9.3)

### 1.9.3

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-compat-api@0.1.1
  - @backstage/frontend-plugin-api@0.5.0
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-techdocs-react@1.1.15
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/plugin-search-react@1.7.5
  - @backstage/integration-react@1.1.23
  - @backstage/catalog-model@1.4.3
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/integration@1.8.0
  - @backstage/theme@0.5.0
  - @backstage/plugin-search-common@1.2.10

## `@backstage/plugin-techdocs-addons-test-utils` (1.0.25 → 1.0.26)

### 1.0.26

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-techdocs-react@1.1.15
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/plugin-techdocs@1.9.3
  - @backstage/plugin-catalog@1.16.1
  - @backstage/plugin-search-react@1.7.5
  - @backstage/integration-react@1.1.23
  - @backstage/core-app-api@1.11.3
  - @backstage/test-utils@1.4.7

## `@backstage/plugin-techdocs-backend` (1.9.1 → 1.9.2)

### 1.9.2

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/catalog-client@1.5.2
  - @backstage/plugin-search-backend-module-techdocs@0.1.13
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-permission-common@0.7.12
  - @backstage/plugin-techdocs-node@1.11.1
  - @backstage/catalog-model@1.4.3
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/integration@1.8.0
  - @backstage/plugin-catalog-common@1.0.20

## `@backstage/plugin-techdocs-module-addons-contrib` (1.1.3 → 1.1.4)

### 1.1.4

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-techdocs-react@1.1.15
  - @backstage/integration-react@1.1.23
  - @backstage/integration@1.8.0

## `@backstage/plugin-techdocs-node` (1.11.0 → 1.11.1)

### 1.11.1

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/catalog-model@1.4.3
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/integration@1.8.0
  - @backstage/integration-aws-node@0.1.8
  - @backstage/plugin-search-common@1.2.10

## `@backstage/plugin-techdocs-react` (1.1.14 → 1.1.15)

### 1.1.15

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/catalog-model@1.4.3
  - @backstage/config@1.1.1
  - @backstage/version-bridge@1.0.7

## `@backstage/plugin-todo` (0.2.32 → 0.2.33)

### 0.2.33

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3

## `@backstage/plugin-todo-backend` (0.3.6 → 0.3.7)

### 0.3.7

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/catalog-client@1.5.2
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/backend-openapi-utils@0.1.2
  - @backstage/plugin-catalog-node@1.6.1
  - @backstage/catalog-model@1.4.3
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/integration@1.8.0

## `@backstage/plugin-user-settings` (0.7.14 → 0.8.0)

### 0.8.0

#### Minor Changes

- 56b2fb0: Updated the user settings selector to use a select component that displays native language names instead of language codes if possible.

#### Patch Changes

- eea0849: add user-settings declarative integration core nav item
- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-compat-api@0.1.1
  - @backstage/frontend-plugin-api@0.5.0
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/core-app-api@1.11.3
  - @backstage/errors@1.2.3
  - @backstage/theme@0.5.0
  - @backstage/types@1.1.1

## `@backstage/plugin-user-settings-backend` (0.2.7 → 0.2.8)

### 0.2.8

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-auth-node@0.4.3
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1

## `@backstage/plugin-vault` (0.1.23 → 0.1.24)

### 0.1.24

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3

## `@backstage/plugin-vault-backend` (0.4.1 → 0.4.2)

### 0.4.2

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/backend-tasks@0.5.14
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/plugin-vault-node@0.1.2

## `@backstage/plugin-vault-node` (0.1.1 → 0.1.2)

### 0.1.2

#### Patch Changes

- Updated dependencies
  - @backstage/backend-plugin-api@0.6.9

## `@backstage/plugin-xcmetrics` (0.2.46 → 0.2.47)

### 0.2.47

#### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
  - @backstage/errors@1.2.3

## `@backstage/repo-tools` (0.5.1 → 0.5.2)

### 0.5.2

#### Patch Changes

- 883782e: Updated the OpenAPI template to export the `TypedResponse` interface so that client code can leverage it
- 7acbb5a: Removed `mock-fs` dev dependency.
- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/cli-node@0.2.2
  - @backstage/catalog-model@1.4.3
  - @backstage/cli-common@0.1.13
  - @backstage/errors@1.2.3

## `@backstage/test-utils` (1.4.6 → 1.4.7)

### 1.4.7

#### Patch Changes

- Updated dependencies
  - @backstage/core-plugin-api@1.8.2
  - @backstage/plugin-permission-react@0.4.19
  - @backstage/plugin-permission-common@0.7.12
  - @backstage/config@1.1.1
  - @backstage/core-app-api@1.11.3
  - @backstage/theme@0.5.0
  - @backstage/types@1.1.1

## `@techdocs/cli` (1.8.0 → 1.8.1)

### 1.8.1

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/plugin-techdocs-node@1.11.1
  - @backstage/catalog-model@1.4.3
  - @backstage/cli-common@0.1.13
  - @backstage/config@1.1.1

## `@backstage/backend-dynamic-feature-service` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- eb81f42: New `backend-dynamic-feature-service` package, for the discovery of dynamic frontend and backend plugins (and modules) and the loading of the backend ones inside the backend application.

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.20.1
  - @backstage/cli-node@0.2.2
  - @backstage/plugin-events-backend@0.2.18
  - @backstage/backend-plugin-api@0.6.9
  - @backstage/plugin-permission-common@0.7.12
  - @backstage/plugin-permission-node@0.7.20
  - @backstage/plugin-catalog-backend@1.16.1
  - @backstage/backend-tasks@0.5.14
  - @backstage/plugin-auth-node@0.4.3
  - @backstage/plugin-scaffolder-node@0.2.10
  - @backstage/plugin-search-backend-node@1.2.13
  - @backstage/cli-common@0.1.13
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1
  - @backstage/plugin-events-node@0.2.18
  - @backstage/plugin-search-common@1.2.10

### 0.0.4

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.20.0
  - @backstage/plugin-catalog-backend@1.16.0
  - @backstage/plugin-scaffolder-node@0.2.9
  - @backstage/backend-tasks@0.5.13
  - @backstage/plugin-auth-node@0.4.2
  - @backstage/plugin-permission-common@0.7.11
  - @backstage/plugin-permission-node@0.7.19
  - @backstage/cli-node@0.2.1
  - @backstage/plugin-events-backend@0.2.17
  - @backstage/plugin-search-backend-node@1.2.12
  - @backstage/backend-plugin-api@0.6.8
  - @backstage/cli-common@0.1.13
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1
  - @backstage/plugin-events-node@0.2.17
  - @backstage/plugin-search-common@1.2.9

### 0.0.3

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-backend@1.15.0
  - @backstage/cli-node@0.2.0
  - @backstage/plugin-search-backend-node@1.2.11
  - @backstage/backend-common@0.19.9
  - @backstage/backend-plugin-api@0.6.7
  - @backstage/backend-tasks@0.5.12
  - @backstage/plugin-permission-common@0.7.10
  - @backstage/plugin-scaffolder-node@0.2.8
  - @backstage/cli-common@0.1.13
  - @backstage/config@1.1.1
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1
  - @backstage/plugin-auth-node@0.4.1
  - @backstage/plugin-events-backend@0.2.16
  - @backstage/plugin-events-node@0.2.16
  - @backstage/plugin-permission-node@0.7.18
  - @backstage/plugin-search-common@1.2.8

### 0.0.2

#### Patch Changes

- Updated dependencies
  - @backstage/backend-tasks@0.5.11
  - @backstage/backend-common@0.19.8
  - @backstage/plugin-catalog-backend@1.14.0
  - @backstage/plugin-auth-node@0.4.0
  - @backstage/errors@1.2.3
  - @backstage/cli-common@0.1.13
  - @backstage/backend-plugin-api@0.6.6
  - @backstage/plugin-search-backend-node@1.2.10
  - @backstage/plugin-events-backend@0.2.15
  - @backstage/plugin-permission-node@0.7.17
  - @backstage/plugin-scaffolder-node@0.2.6
  - @backstage/cli-node@0.1.5
  - @backstage/config@1.1.1
  - @backstage/types@1.1.1
  - @backstage/plugin-events-node@0.2.15
  - @backstage/plugin-permission-common@0.7.9
  - @backstage/plugin-search-common@1.2.7

### 0.0.1

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-backend@1.13.0
  - @backstage/plugin-events-backend@0.2.12
  - @backstage/backend-tasks@0.5.8
  - @backstage/backend-common@0.19.5
  - @backstage/plugin-auth-node@0.3.0
  - @backstage/config@1.1.0
  - @backstage/errors@1.2.2
  - @backstage/plugin-permission-common@0.7.8
  - @backstage/plugin-search-common@1.2.6
  - @backstage/types@1.1.1
  - @backstage/plugin-permission-node@0.7.14
  - @backstage/backend-plugin-api@0.6.3
  - @backstage/cli-common@0.1.12
  - @backstage/cli-node@0.1.4
  - @backstage/plugin-events-node@0.2.12
  - @backstage/plugin-scaffolder-node@0.2.3
  - @backstage/plugin-search-backend-node@1.2.7

## `@backstage/plugin-app-visualizer` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- e57cc9f: Initial release of the app visualizer plugin.

#### Patch Changes

- Updated dependencies
  - @backstage/frontend-plugin-api@0.5.0
  - @backstage/core-components@0.13.10
  - @backstage/core-plugin-api@1.8.2
