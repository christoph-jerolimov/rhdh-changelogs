# Backstage Release 1.2.0 changelog

Changes between 1.1.1 and 1.2.0 — 132 changed and 7 added packages.

## Summary

- [Newly added packages](#newly-added-packages): 7 packages
- [Breaking changes](#breaking-changes): 4 packages
- [Major version bumps](#major-version-bumps): 1 package
- [0.x minor version bumps](#0x-minor-version-bumps): 1 package
- [0.0.x patch version bumps](#00x-patch-version-bumps): 1 package
- [Other minor version bumps](#other-minor-version-bumps): 8 packages
- [Other patch version bumps](#other-patch-version-bumps): 50 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/plugin-adr` (new, 0.1.0)](#backstageplugin-adr-new-010)
  - [`@backstage/plugin-adr-backend` (new, 0.1.0)](#backstageplugin-adr-backend-new-010)
  - [`@backstage/plugin-adr-common` (new, 0.1.0)](#backstageplugin-adr-common-new-010)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (new, 0.1.0)](#backstageplugin-catalog-backend-module-gerrit-new-010)
  - [`@backstage/plugin-codescene` (new, 0.1.0)](#backstageplugin-codescene-new-010)
  - [`@backstage/plugin-techdocs-addons-test-utils` (new, 1.0.0)](#backstageplugin-techdocs-addons-test-utils-new-100)
  - [`@backstage/plugin-techdocs-module-addons-contrib` (new, 1.0.0)](#backstageplugin-techdocs-module-addons-contrib-new-100)
- [Breaking changes](#breaking-changes)
  - [`@backstage/plugin-scaffolder-backend-module-rails` (0.3.6 → 0.4.0)](#backstageplugin-scaffolder-backend-module-rails-036--040)
  - [`@backstage/plugin-search-react` (0.1.0 → 0.2.0)](#backstageplugin-search-react-010--020)
  - [`@backstage/plugin-tech-insights-backend` (0.3.0 → 0.4.0)](#backstageplugin-tech-insights-backend-030--040)
  - [`@backstage/plugin-tech-insights-node` (0.2.9 → 0.3.0)](#backstageplugin-tech-insights-node-029--030)
- [Major version bumps](#major-version-bumps)
  - [`@backstage/plugin-techdocs-react` (0.1.0 → 1.0.0)](#backstageplugin-techdocs-react-010--100)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/plugin-auth-backend` (0.13.0 → 0.14.0)](#backstageplugin-auth-backend-0130--0140)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/release-manifests` (0.0.2 → 0.0.3)](#backstagerelease-manifests-002--003)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/integration` (1.1.0 → 1.2.0)](#backstageintegration-110--120)
  - [`@backstage/integration-react` (1.0.1 → 1.1.0)](#backstageintegration-react-101--110)
  - [`@backstage/plugin-catalog` (1.1.0 → 1.2.0)](#backstageplugin-catalog-110--120)
  - [`@backstage/plugin-catalog-react` (1.0.1 → 1.1.0)](#backstageplugin-catalog-react-101--110)
  - [`@backstage/plugin-scaffolder` (1.1.0 → 1.2.0)](#backstageplugin-scaffolder-110--120)
  - [`@backstage/plugin-scaffolder-backend` (1.1.0 → 1.2.0)](#backstageplugin-scaffolder-backend-110--120)
  - [`@backstage/plugin-scaffolder-common` (1.0.1 → 1.1.0)](#backstageplugin-scaffolder-common-101--110)
  - [`@backstage/test-utils` (1.0.1 → 1.1.0)](#backstagetest-utils-101--110)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-common` (0.13.2 → 0.13.3)](#backstagebackend-common-0132--0133)
  - [`@backstage/backend-tasks` (0.3.0 → 0.3.1)](#backstagebackend-tasks-030--031)
  - [`@backstage/cli` (0.17.0 → 0.17.1)](#backstagecli-0170--0171)
  - [`@backstage/cli-common` (0.1.8 → 0.1.9)](#backstagecli-common-018--019)
  - [`@backstage/codemods` (0.1.37 → 0.1.38)](#backstagecodemods-0137--0138)
  - [`@backstage/config` (1.0.0 → 1.0.1)](#backstageconfig-100--101)
  - [`@backstage/config-loader` (1.1.0 → 1.1.1)](#backstageconfig-loader-110--111)
  - [`@backstage/core-app-api` (1.0.1 → 1.0.2)](#backstagecore-app-api-101--102)
  - [`@backstage/core-components` (0.9.3 → 0.9.4)](#backstagecore-components-093--094)
  - [`@backstage/core-plugin-api` (1.0.1 → 1.0.2)](#backstagecore-plugin-api-101--102)
  - [`@backstage/create-app` (0.4.26 → 0.4.27)](#backstagecreate-app-0426--0427)
  - [`@backstage/dev-utils` (1.0.1 → 1.0.2)](#backstagedev-utils-101--102)
  - [`@backstage/plugin-api-docs` (0.8.4 → 0.8.5)](#backstageplugin-api-docs-084--085)
  - [`@backstage/plugin-app-backend` (0.3.31 → 0.3.32)](#backstageplugin-app-backend-0331--0332)
  - [`@backstage/plugin-auth-node` (0.2.0 → 0.2.1)](#backstageplugin-auth-node-020--021)
  - [`@backstage/plugin-azure-devops` (0.1.20 → 0.1.21)](#backstageplugin-azure-devops-0120--0121)
  - [`@backstage/plugin-azure-devops-backend` (0.3.10 → 0.3.11)](#backstageplugin-azure-devops-backend-0310--0311)
  - [`@backstage/plugin-azure-devops-common` (0.2.2 → 0.2.3)](#backstageplugin-azure-devops-common-022--023)
  - [`@backstage/plugin-bazaar` (0.1.19 → 0.1.20)](#backstageplugin-bazaar-0119--0120)
  - [`@backstage/plugin-catalog-backend` (1.1.1 → 1.1.2)](#backstageplugin-catalog-backend-111--112)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.1.4 → 0.1.5)](#backstageplugin-catalog-backend-module-aws-014--015)
  - [`@backstage/plugin-catalog-backend-module-github` (0.1.2 → 0.1.3)](#backstageplugin-catalog-backend-module-github-012--013)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.3.1 → 0.3.2)](#backstageplugin-catalog-backend-module-msgraph-031--032)
  - [`@backstage/plugin-catalog-graph` (0.2.16 → 0.2.17)](#backstageplugin-catalog-graph-0216--0217)
  - [`@backstage/plugin-gcalendar` (0.3.0 → 0.3.1)](#backstageplugin-gcalendar-030--031)
  - [`@backstage/plugin-graphiql` (0.2.36 → 0.2.37)](#backstageplugin-graphiql-0236--0237)
  - [`@backstage/plugin-home` (0.4.20 → 0.4.21)](#backstageplugin-home-0420--0421)
  - [`@backstage/plugin-jenkins-backend` (0.1.21 → 0.1.22)](#backstageplugin-jenkins-backend-0121--0122)
  - [`@backstage/plugin-kubernetes` (0.6.4 → 0.6.5)](#backstageplugin-kubernetes-064--065)
  - [`@backstage/plugin-kubernetes-backend` (0.5.0 → 0.5.1)](#backstageplugin-kubernetes-backend-050--051)
  - [`@backstage/plugin-kubernetes-common` (0.2.9 → 0.2.10)](#backstageplugin-kubernetes-common-029--0210)
  - [`@backstage/plugin-newrelic-dashboard` (0.1.12 → 0.1.13)](#backstageplugin-newrelic-dashboard-0112--0113)
  - [`@backstage/plugin-org` (0.5.4 → 0.5.5)](#backstageplugin-org-054--055)
  - [`@backstage/plugin-rollbar-backend` (0.1.28 → 0.1.29)](#backstageplugin-rollbar-backend-0128--0129)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.6 → 0.2.7)](#backstageplugin-scaffolder-backend-module-cookiecutter-026--027)
  - [`@backstage/plugin-search` (0.8.0 → 0.8.1)](#backstageplugin-search-080--081)
  - [`@backstage/plugin-search-backend` (0.5.1 → 0.5.2)](#backstageplugin-search-backend-051--052)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (0.1.3 → 0.1.4)](#backstageplugin-search-backend-module-elasticsearch-013--014)
  - [`@backstage/plugin-search-backend-module-pg` (0.3.2 → 0.3.3)](#backstageplugin-search-backend-module-pg-032--033)
  - [`@backstage/plugin-search-backend-node` (0.6.0 → 0.6.1)](#backstageplugin-search-backend-node-060--061)
  - [`@backstage/plugin-search-common` (0.3.3 → 0.3.4)](#backstageplugin-search-common-033--034)
  - [`@backstage/plugin-sonarqube` (0.3.4 → 0.3.5)](#backstageplugin-sonarqube-034--035)
  - [`@backstage/plugin-tech-insights` (0.2.0 → 0.2.1)](#backstageplugin-tech-insights-020--021)
  - [`@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.15 → 0.1.16)](#backstageplugin-tech-insights-backend-module-jsonfc-0115--0116)
  - [`@backstage/plugin-tech-radar` (0.5.11 → 0.5.12)](#backstageplugin-tech-radar-0511--0512)
  - [`@backstage/plugin-techdocs` (1.1.0 → 1.1.1)](#backstageplugin-techdocs-110--111)
  - [`@backstage/plugin-techdocs-backend` (1.1.0 → 1.1.1)](#backstageplugin-techdocs-backend-110--111)
  - [`@backstage/plugin-techdocs-node` (1.1.0 → 1.1.1)](#backstageplugin-techdocs-node-110--111)
  - [`@backstage/plugin-user-settings` (0.4.3 → 0.4.4)](#backstageplugin-user-settings-043--044)
  - [`@techdocs/cli` (1.1.0 → 1.1.1)](#techdocscli-110--111)

## Newly added packages

### `@backstage/plugin-adr` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- e73075a301: Implement ADR plugin

### `@backstage/plugin-adr-backend` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- e73075a301: Implement ADR plugin

### `@backstage/plugin-adr-common` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- e73075a301: Implement ADR plugin

### `@backstage/plugin-catalog-backend-module-gerrit` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- 566407bf8a: Initial version of the `plugin-catalog-backend-module-gerrit` plugin

##### Patch Changes

- 57f684f59c: Fix incorrect main path in `publishConfig`
- cfc0f19699: Updated dependency `fs-extra` to `10.1.0`.

### `@backstage/plugin-codescene` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- 9bc6e9493f: Add CodeScene plugin

##### Patch Changes

- 95598f4fd5: Updated dependency `@testing-library/user-event` to `^14.0.0`.
- e462112be5: Updated dependency `rc-progress` to `3.3.2`.

### `@backstage/plugin-techdocs-addons-test-utils` (new, 1.0.0)

#### 1.0.0

##### Major Changes

- 0ad901569f: The TechDocs Addon framework is now generally available.

##### Minor Changes

- 52fddad92d: Introducing a package with utilities to help test TechDocs Addons.

##### Patch Changes

- f84e0e2818: Fixed a bug preventing testing of TechDocs Addons whose dom contained `<img />` tags.
- 7c398c6473: The `TechDocsAddonTester` class may now be extended if custom test configuration is needed.
- 614bd96e2a: Fixed a type bug preventing `buildAddonsInTechDocs().withApis()` from being called with multiple partial API implementations.

### `@backstage/plugin-techdocs-module-addons-contrib` (new, 1.0.0)

#### 1.0.0

##### Major Changes

- 0ad901569f: The TechDocs Addon framework is now generally available.

##### Minor Changes

- 5f4dbd2b52: A package for contributed TechDocs addons.

  In this release it will introduce the ReportIssue addon, which lets you select text and open a GitHub/Gitlab issue.

##### Patch Changes

- 10d86dedc0: Improved inline/type documentation for the <ReportIssue /> addon.
- 52419be116: Create a TechDocs `<TextSize/>` addon that allows users to set a font size in the browser's local storage for the text of documentation pages.

  Here's an example on how to use it in a Backstage app:

  ```diff
  import {
    DefaultTechDocsHome,
    TechDocsIndexPage,
    TechDocsReaderPage,
  } from '@backstage/plugin-techdocs';
  import { TechDocsAddons } from '@backstage/plugin-techdocs-react/alpha';
  +import { TextSize } from '@backstage/plugin-techdocs-module-addons-contrib';

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
  +       <TextSize />
        </TechDocsAddons>
      </Route>
    </FlatRoutes>;
  };
  ```

- 075a9a067b: Updated the return type of `createTechDocsAddonExtension` to better reflect the fact that passing children to Addon components is not a valid use-case.
- c25e880e36: Introducing the Expandable Navigation addon, which lets you expand and collapse the TechDocs main navigation and store your preference in local storage.

## Breaking changes

### `@backstage/plugin-scaffolder-backend-module-rails` (0.3.6 → 0.4.0)

#### 0.4.0

##### Minor Changes

- 3d001a3bcf: **BREAKING**: Added a new `allowedImageNames` option, which needs to list any image name for it to be allowed as `imageName` input.

### `@backstage/plugin-search-react` (0.1.0 → 0.2.0)

#### 0.2.0

##### Minor Changes

- bdbe620797: **BREAKING**: `SearchContextProviderForStorybook` and `SearchApiProviderForStorybook` has been deleted. New mock implementation of the `SearchApi` introduced. If you need to mock the api we recommend you to do the following:

  ```tsx
  import {
    searchApiRef,
    MockSearchApi,
    SearchContextProvider,
  } from '@backstage/plugin-search-react';
  import { TestApiProvider } from '@backstage/test-utils';

  <TestApiProvider apis={[[searchApiRef, new MockSearchApi()]]}>
    <SearchContextProvider>
      <Component />
    </SearchContextProvider>
  </TestApiProvider>;
  ```

##### Patch Changes

- 11a46863de: Export `useSearchContextCheck` hook to check if the search context is available
- a307a14be0: Removed dependency on `@backstage/core-app-api`.
- 3a74e203a8: Updated search result components to support rendering content with highlighted matched terms

### `@backstage/plugin-tech-insights-backend` (0.3.0 → 0.4.0)

#### 0.4.0

##### Minor Changes

- 3333e20b27: **BREAKING**: The `buildTechInsightsContext` function now takes an additional
  field in its options argument: `tokenManager`. This is an instance of
  `TokenManager`, which can be found in your backend initialization code's
  `env`.

  ```diff
   const builder = buildTechInsightsContext({
     logger: env.logger,
     config: env.config,
     database: env.database,
     discovery: env.discovery,
     scheduler: env.scheduler,
  +  tokenManager: env.tokenManager,
     factRetrievers: [ /* ... */ ],
   });
  ```

### `@backstage/plugin-tech-insights-node` (0.2.9 → 0.3.0)

#### 0.3.0

##### Minor Changes

- 58e2c46151: **BREAKING**: The `FactRetrieverContext` type now contains an additional
  field: `tokenManager`.

## Major version bumps

### `@backstage/plugin-techdocs-react` (0.1.0 → 1.0.0)

#### 1.0.0

##### Major Changes

- 0ad901569f: The TechDocs Addon framework is now generally available.

##### Patch Changes

- 52419be116: Create a new addon location called "Settings", it is designed for addons that allow users to customize the reading experience in documentation pages.

  Usage example:

  ```tsx
  const TextSize = techdocsModuleAddonsContribPlugin.provide(
    createTechDocsAddonExtension({
      name: 'TextSize',
      location: TechDocsAddonLocations.Settings,
      component: TextSizeAddon,
    }),
  );
  ```

- c25e880e36: Added overload signatures for `createTechDocsAddonExtension` to handle TechDocs addons without props.
- 52fddad92d: The `TechDocsStorageApi` and its associated ref are now exported by `@backstage/plugin-techdocs-react`. The API interface, ref, and types are now deprecated in `@backstage/plugin-techdocs` and will be removed in a future release.
- 075a9a067b: Updated the return type of `createTechDocsAddonExtension` to better reflect the fact that passing children to Addon components is not a valid use-case.

## 0.x minor version bumps

### `@backstage/plugin-auth-backend` (0.13.0 → 0.14.0)

#### 0.14.0

##### Minor Changes

- 2df2f01a29: Removed the explicit `disableRefresh` option from `OAuthAdapter`. Refresh can still be disabled for a provider by not implementing the `refresh` method.

##### Patch Changes

- cac3ba68a2: Fixed a bug that was introduced in `0.13.1-next.0` which caused the `ent` claim of issued tokens to be dropped.
- 5d268623dd: Updates the OAuth2 Proxy provider to require less infrastructure configuration.

  The auth result object of the OAuth2 Proxy now provides access to the request headers, both through the `headers` object as well as `getHeader` method. The existing logic that parses and extracts the user information from ID tokens is deprecated and will be removed in a future release. See the OAuth2 Proxy provider documentation for more details.

  The OAuth2 Proxy provider now also has a default `authHandler` implementation that reads the display name and email from the incoming request headers.

- 2df2f01a29: The Auth0 adapter no longer disables session refreshing.
- cfc0f19699: Updated dependency `fs-extra` to `10.1.0`.
- 787ae0d541: Add more common predefined sign-in resolvers to auth providers.

  Add the existing resolver to more providers (already available at `google`):

  - `providers.microsoft.resolvers.emailLocalPartMatchingUserEntityName()`
  - `providers.okta.resolvers.emailLocalPartMatchingUserEntityName()`

  Add a new resolver for simple email-to-email matching:

  - `providers.google.resolvers.emailMatchingUserEntityProfileEmail()`
  - `providers.microsoft.resolvers.emailMatchingUserEntityProfileEmail()`
  - `providers.okta.resolvers.emailMatchingUserEntityProfileEmail()`

- 9ec4e0613e: Update to `jose` 4.6.0

## 0.0.x patch version bumps

### `@backstage/release-manifests` (0.0.2 → 0.0.3)

#### 0.0.3

##### Patch Changes

- 6e830352d4: Updated dependency `@types/node` to `^16.0.0`.

## Other minor version bumps

### `@backstage/integration` (1.1.0 → 1.2.0)

#### 1.2.0

##### Minor Changes

- e295ce87de: added the possibility to handle raw Gitlab URLs with nested namespaces
- 6673babab9: Gerrit UrlReader: Implemented `readTree`
- 1b4e1e2306: Split `bitbucket` integration into `bitbucketCloud` and `bitbucketServer`
  (backwards compatible).

  In order to migrate to the new integration configs,
  move your configs from `integrations.bitbucket`
  to `integrations.bitbucketCloud` or `integrations.bitbucketServer`.

  Migration example:

  **Before:**

  ```yaml
  integrations:
    bitbucket:
      - host: bitbucket.org
        username: bitbucket_user
        appPassword: app-password
      - host: bitbucket-server.company.com
        token: my-token
  ```

  **After:**

  ```yaml
  integrations:
    bitbucketCloud:
      - username: bitbucket_user
        appPassword: app-password
    bitbucketServer:
      - host: bitbucket-server.company.com
        token: my-token
  ```

- 566407bf8a: Gerrit Integration: Added the `getGerritProjectsApiUrl` function

### `@backstage/integration-react` (1.0.1 → 1.1.0)

#### 1.1.0

##### Minor Changes

- 1b4e1e2306: Split `bitbucket` integration into `bitbucketCloud` and `bitbucketServer`
  (backwards compatible).

  In order to migrate to the new integration configs,
  move your configs from `integrations.bitbucket`
  to `integrations.bitbucketCloud` or `integrations.bitbucketServer`.

  Migration example:

  **Before:**

  ```yaml
  integrations:
    bitbucket:
      - host: bitbucket.org
        username: bitbucket_user
        appPassword: app-password
      - host: bitbucket-server.company.com
        token: my-token
  ```

  **After:**

  ```yaml
  integrations:
    bitbucketCloud:
      - username: bitbucket_user
        appPassword: app-password
    bitbucketServer:
      - host: bitbucket-server.company.com
        token: my-token
  ```

### `@backstage/plugin-catalog` (1.1.0 → 1.2.0)

#### 1.2.0

##### Minor Changes

- 4274844a8c: Use InfoCardVariants on custom cards variant attribute
- ceca63d149: Added the prop `NotFoundComponent` to `EntityLayout` which can be used to include a custom component when an entity is not found in the catalog

##### Patch Changes

- 051fc60258: Lighthouse was reporting this button as having invalid aria- values, as the popover doesn't exist until clicked. This adds additional labels to the button to make it valid aria
- 2bcb0a0e2b: Sidebar NAV now includes aria-label. Component AboutField now uses h2 variant instead of subtitle2 (font properties unchanged)
- 3a74e203a8: Updated search result components to support rendering content with highlighted matched terms

### `@backstage/plugin-catalog-react` (1.0.1 → 1.1.0)

#### 1.1.0

##### Minor Changes

- 4274844a8c: Use InfoCardVariants on custom cards variant attribute

##### Patch Changes

- 0418447669: Added menu parent role for menu items accessibility
- b7514d19ff: Update the rendering of links in the entity inspector so that values starting with `https?://` are rendered as links as well.
- b880c0e092: Fix `EntityTypeFilter` so generating available types is case insensitive
- 57f41fb8d6: Make Menu item on filters accessible through keyboard

### `@backstage/plugin-scaffolder` (1.1.0 → 1.2.0)

#### 1.2.0

##### Minor Changes

- 06ab5218f9: Add new bitbucket(Cloud/Server) integrations to ScaffolderClient.

##### Patch Changes

- 8dce7d5244: Allow validation for custom field extension with type object
- 70817dafc0: Updated dependency `use-immer` to `^0.7.0`.
- ace230b599: Updated dependency `@codemirror/legacy-modes` to `^0.20.0`.

### `@backstage/plugin-scaffolder-backend` (1.1.0 → 1.2.0)

#### 1.2.0

##### Minor Changes

- 9818112d12: Update the `github:publish` action to allow passing required status check
  contexts before merging to the main branch.
- f8baf7df44: Added the ability to reference the user in the `template.yaml` manifest
- 8d5a2238a9: Split `publish:bitbucket` into `publish:bitbucketCloud` and `publish:bitbucketServer`.

  In order to migrate from the deprecated action, you need to replace the use of action
  `publish:bitbucket` in your templates with the use of either `publish:bitbucketCloud`
  or `publish:bitbucketServer` - depending on which destination SCM provider you use.

  Additionally, these actions will not utilize `integrations.bitbucket` anymore,
  but `integrations.bitbucketCloud` or `integrations.bitbucketServer` respectively.
  You may or may not have migrated to these already.

  As described in a previous changeset, using these two replacement integrations configs
  will not compromise use cases which still rely on `integrations.bitbucket` as this was
  set up in a backwards compatible way.

  Additionally, please mind that the option `enableLFS` is only available (and always was)
  for Bitbucket Server use cases and therefore, is not even part of the schema for
  `publish:bitbucketCloud` anymore.

##### Patch Changes

- 0fc65cbf89: Override default commit message and author details in GitHub, Azure, bitbucket
- cfc0f19699: Updated dependency `fs-extra` to `10.1.0`.

### `@backstage/plugin-scaffolder-common` (1.0.1 → 1.1.0)

#### 1.1.0

##### Minor Changes

- f8baf7df44: Added the ability to reference the user in the `template.yaml` manifest

### `@backstage/test-utils` (1.0.1 → 1.1.0)

#### 1.1.0

##### Minor Changes

- 1da8b248c2: Added the options parameter to `renderWithEffects`, which if forwarded to the `render` function from `@testling-library/react`. Initially only the `wrapper` option is supported.
- 1da8b248c2: Added `createTestAppWrapper`, which returns a component that can be used as the `wrapper` option for `render` or `renderWithEffects`.

##### Patch Changes

- 1da8b248c2: Fixed `renderInTestApp` so that it is able to re-render the result without removing the app wrapping.
- 7a5ddfd595: Added missing `Routes` element to wrap the `Route` elements of the test app wrapping.
- 7a5ddfd595: The internal elements created as part of the `mountedRoutes` implementation are now hidden during rendering.

## Other patch version bumps

### `@backstage/backend-common` (0.13.2 → 0.13.3)

#### 0.13.3

##### Patch Changes

- e0a6360b80: Added a `stream()` method to complement the `buffer()` method on `ReadUrlResponse`. A `ReadUrlResponseFactory` utility class is now also available, providing a simple, consistent way to provide a valid `ReadUrlResponse`.

  This method, though optional for now, will be required on the responses of `UrlReader.readUrl()` implementations in a future release.

- 4b811aafce: Implemented the `UrlReader.search()` method for Google Cloud Storage. Due to limitations in the underlying storage API, only prefix-based searches are supported right now (for example, `https://storage.cloud.google.com/your-bucket/some-path/*`).
- 6673babab9: Gerrit integration: Added optional `cloneUrl` string to config.
- 75bf9e1da9: Split BitbucketUrlReader into BitbucketCloudUrlReader and BitbucketServerUrlReader. Backwards compatible.
- 28b0e4ddef: Update types to match the new version of `@keyv/redis`
- 5fcbd86960: **DEPRECATION**: Server-to-server authentication tokens issued from a
  `TokenManager` (specifically, `ServerTokenManager`) now has an expiry time set,
  for one hour in the future from when issued. This improves security. The ability
  to pass in and validate tokens that either have a missing `exp` claim, or an
  `exp` claim that expired in the past, is now deprecated. Trying to do so will
  lead to logged warnings, and in a future release will instead lead to errors.

  It was always the case that users of this interface were expected to call its
  `getToken()` method for every outgoing call and never hold on to any given token
  for reuse. But this now has become even more important advice to heed, and you
  should verify that you do not hold on to and reuse tokens such as these in your
  own code.

- cfc0f19699: Updated dependency `fs-extra` to `10.1.0`.
- 9ec4e0613e: Update to `jose` 4.6.0

### `@backstage/backend-tasks` (0.3.0 → 0.3.1)

#### 0.3.1

##### Patch Changes

- 73480846dd: `TaskScheduleDefinition` has been updated to also accept an options object containing duration information in the form of days, hours, seconds and so on. This allows for scheduling without importing `luxon`.

  ```diff
  -import { Duration } from 'luxon';
  // omitted other code

  const schedule = env.scheduler.createScheduledTaskRunner({
  -  frequency: Duration.fromObject({ minutes: 10 }),
  -  timeout: Duration.fromObject({ minutes: 15 }),
  +  frequency: { minutes: 10 },
  +  timeout: { minutes: 15 },
     // omitted other code
  });
  ```

- cfd779a9bc: Scheduled tasks now have an optional `scope` field. If unset, or having the
  value `'global'`, the old behavior with cross-worker locking is retained. If
  having the value `'local'`, there is no coordination across workers and the
  behavior is more like `setInterval`. This can be used to replace usages of
  `runPeriodically` helpers.
- ebbec677e1: Correctly set next run time for tasks

### `@backstage/cli` (0.17.0 → 0.17.1)

#### 0.17.1

##### Patch Changes

- 52fb9920ac: Fixed coverage configuration when using `BACKSTAGE_NEXT_TESTS`.
- 6cd1f50ae1: Extended lint rule to prevents imports of stories or tests from production code.
- 97cce67ac7: Add instructions to `create-github-app` command.
- 08e12a3a14: Add package global-agent to support behind a proxy for backstage-cli commands like versions:bump.
- 4d8736eded: Changed Rollup configuration for TypeScript definition plugin to ignore `css`,
  `scss`, `sass`, `svg`, `eot`, `woff`, `woff2` and `ttf` files.
- cfc0f19699: Updated dependency `fs-extra` to `10.1.0`.
- 2737777e02: Added the ability to help a user get started with a new organization
- 344ea56acc: Bump `commander` to version 9.1.0
- 8ab2a8226b: Updated the `create-github-app` command to throw an error if the organization argument is a user or a non existing organization.
- 632be18bbc: Updated `create-github-app` command to prompt for read or write permissions to simplify setup.

### `@backstage/cli-common` (0.1.8 → 0.1.9)

#### 0.1.9

##### Patch Changes

- 6e830352d4: Updated dependency `@types/node` to `^16.0.0`.

### `@backstage/codemods` (0.1.37 → 0.1.38)

#### 0.1.38

##### Patch Changes

- 344ea56acc: Bump `commander` to version 9.1.0

### `@backstage/config` (1.0.0 → 1.0.1)

#### 1.0.1

##### Patch Changes

- 6e830352d4: Updated dependency `@types/node` to `^16.0.0`.

### `@backstage/config-loader` (1.1.0 → 1.1.1)

#### 1.1.1

##### Patch Changes

- cfc0f19699: Updated dependency `fs-extra` to `10.1.0`.
- 9e8ef53498: Handle empty config files gracefully

### `@backstage/core-app-api` (1.0.1 → 1.0.2)

#### 1.0.2

##### Patch Changes

- 1fae1f57c9: Fix SAML session schema to no longer require the (deprecated) id, to unbreak session data storage.

### `@backstage/core-components` (0.9.3 → 0.9.4)

#### 0.9.4

##### Patch Changes

- ac19f82936: Added ARIA landmark <main> to Page component and added ARIA landmark <nav> to DesktopSidebar and Sidebar components
- 55f68c386a: Enabled select component to be enabled by keyboard
- c0055ece91: Announce external links to screen readers
- e210c0cab8: Add ability to customize `Read More` destination with `readMoreUrl` prop for `MissingAnnotationEmptyState` component.
- 52c02ac02b: Don't set the background color on an Avatar component that has a picture.
- cfc0f2e5bd: Added optional anchorOrigin alignment prop to AlertDisplay
- f4380eb602: Add an aria-label to the support button to improve accessibility for screen readers
- ba97b80421: Updated dependency `@types/react-syntax-highlighter` to `^15.0.0`.
- e462112be5: Updated dependency `rc-progress` to `3.3.2`.
- 2bcb0a0e2b: Sidebar NAV now includes aria-label. Component AboutField now uses h2 variant instead of subtitle2 (font properties unchanged)
- c7f32b53a4: Fixed multiple scrolls appearing on Page when added InfoCard with external bottom link
- 3603014e0e: Add ARIA landmark( <main>), & label and a heading to OAuthRequestDialog. Removed nested interactive control (button).
- 2025d7c123: Properly highlight `SidebarSubmenuItem` dropdown items on hover, use ellipsis styling on long labels in `SidebarSubmenu`, allow `icon` and `to` properties to be optional on `SidebarSubmenuItem`, and fix `SidebarPage` padding to be responsive to pinned state
- 2295b4ab2b: Add controls to Storybook stories
- 521293b22e: Added a chevron Indicator when the sidebar is collapsed and has a sub-menu

### `@backstage/core-plugin-api` (1.0.1 → 1.0.2)

#### 1.0.2

##### Patch Changes

- b653a5595c: The authentication APIs are no longer `@alpha`. Since the `@backstage/core-plugin-api` has no `/alpha` entrypoint, the only effect of marking the APIs as `@alpha` was to hide them in documentation. They are still expected to be widely used and there will be a migration path if they are changed in the future.

### `@backstage/create-app` (0.4.26 → 0.4.27)

#### 0.4.27

##### Patch Changes

- 73480846dd: Simplified the search collator scheduling by removing the need for the `luxon` dependency.

  For existing installations the scheduling can be simplified by removing the `luxon` dependency and using the human friendly duration object instead.
  Please note that this only applies if luxon is not used elsewhere in your installation.

  `packages/backend/package.json`

  ```diff
       "express": "^4.17.1",
       "express-promise-router": "^4.1.0",
  -    "luxon": "^2.0.2",
  ```

  `packages/backend/src/plugins/search.ts`

  ```diff
   import { Router } from 'express';
  -import { Duration } from 'luxon';

   // omitted other code

     const schedule = env.scheduler.createScheduledTaskRunner({
  -    frequency: Duration.fromObject({ minutes: 10 }),
  -    timeout: Duration.fromObject({ minutes: 15 }),
  +    frequency: { minutes: 10 },
  +    timeout: { minutes: 15 },
       // A 3 second delay gives the backend server a chance to initialize before
       // any collators are executed, which may attempt requests against the API.
  -    initialDelay: Duration.fromObject({ seconds: 3 }),
  +    initialDelay: { seconds: 3 },
     });
  ```

- 7cda923c16: Tweaked the `.dockerignore` file so that it's easier to add additional backend packages if desired.

  To apply this change to an existing app, make the following change to `.dockerignore`:

  ```diff
   cypress
   microsite
   node_modules
  -packages
  -!packages/backend/dist
  +packages/*/src
  +packages/*/node_modules
   plugins
  ```

- 3983940a21: Optimized the command order in `packages/backend/Dockerfile` as well as added the `--no-install-recommends` to the `apt-get install` and tweaked the installed packages.

  To apply this change to an existing app, update your `packages/backend/Dockerfile` to match the documented `Dockerfile` at https://backstage.io/docs/deployment/docker#host-build.

- 28bbf5aff6: Added some instruction comments to the generated config files, to clarify the
  usage of `backend.baseUrl` and `backend.listen.host`. Importantly, it also per
  default now listens on all IPv4 interfaces, to make it easier to take the step
  over to production. If you want to do the same, update your
  `app-config.production.yaml` as follows:

  ```diff
   backend:
     listen:
       port: 7007
  +    host: 0.0.0.0
  ```

  Also, updated the builtin backend Dockerfile to honor the
  `app-config.production.yaml` file. If you want to do the same, change
  `packages/backend/Dockerfile` as follows:

  ```diff
  -COPY packages/backend/dist/bundle.tar.gz app-config.yaml ./
  +COPY packages/backend/dist/bundle.tar.gz app-config*.yaml ./
   RUN tar xzf bundle.tar.gz && rm bundle.tar.gz

  -CMD ["node", "packages/backend", "--config", "app-config.yaml"]
  +CMD ["node", "packages/backend", "--config", "app-config.yaml", "--config", "app-config.production.yaml"]
  ```

  If you look carefully, this adds a glob match on app-config files. For those
  that try out the build flows locally, you also want to make sure that the docker
  daemon does NOT pick up any local/private config files that might contain
  secrets. You should therefore also update your local `.dockerignore` file at the
  same time:

  ```diff
  +*.local.yaml
  ```

- 7b253072c6: Tweaked template to provide an example and guidance for how to configure sign-in in `packages/backend/src/plugins/auth.ts`. There is no need to add this to existing apps, but for more information about sign-in configuration, see https://backstage.io/docs/auth/identity-resolver.
- cfc0f19699: Updated dependency `fs-extra` to `10.1.0`.
- f55414f895: Added sample catalog data to the template under a top-level `examples` directory. This includes some simple entities, org data, and a template. You can find the sample data at https://github.com/backstage/backstage/tree/master/packages/create-app/templates/default-app/examples.
- 344ea56acc: Bump `commander` to version 9.1.0
- 00fa0dada0: Removed the database choice from the `create-app` command.

  This reduces the step from development to production by always installing the dependencies and templating the production configuration in `app-config.production.yaml`.

  Added `app-config.local.yaml` to allow for local configuration overrides.
  To replicate this behavior in an existing installation simply `touch app-config.local.yaml` in the project root and apply your local configuration.

  `better-sqlite3` has been moved to devDependencies, for existing installations using postgres in production and SQLite in development it's recommended to move SQLite into the devDependencies section to avoid unnecessary dependencies during builds.

  in `packages/backend/package.json`

  ```diff
    "dependencies": {
      ...
      "pg": "^8.3.0",
  -   "better-sqlite3": "^7.5.0",
      "winston": "^3.2.1"
    },
    "devDependencies": {
      ...
      "@types/luxon": "^2.0.4",
  +   "better-sqlite3": "^7.5.0"
    }
  ```

- 10d86dedc0: Integrates TechDocs add-ons with the app package so add-ons are configured when creating an app using the Backstage CLI. To apply these changes to an existing application do the following:

  1. Add the `@backstage/plugin-techdocs-react` and `@backstage/plugin-techdocs-module-addons-contrib` packages to your app's dependencies;
  2. And then register the `<ReportIssue/ >` Addon in your `packages/app/src/App.tsx` file, there where you define a route to `<TechDocsReaderPage />`:

  ```diff
  import {
    DefaultTechDocsHome,
    TechDocsIndexPage,
    TechDocsReaderPage,
  } from '@backstage/plugin-techdocs';
  + import { TechDocsAddons } from '@backstage/plugin-techdocs-react';
  + import { ReportIssue } from '@backstage/plugin-techdocs-module-addons-contrib';

  // ...

  const AppRoutes = () => {
    <FlatRoutes>
      // ... other plugin routes
      <Route path="/docs" element={<TechDocsIndexPage />}>
        <DefaultTechDocsHome />
      </Route>
      <Route
        path="/docs/:namespace/:kind/:name/*"
        element={<TechDocsReaderPage />}
      >
  +     <TechDocsAddons>
  +       <ReportIssue />
  +     </TechDocsAddons>
      </Route>
    </FlatRoutes>;
  };
  ```

- 806427545f: Added a link to the `${GITHUB_TOKEN}` to document how to generate a token
- 3a74e203a8: Implement highlighting matching terms in search results. To enable this for an existing app, make the following changes:

  ```diff
  // packages/app/src/components/search/SearchPage.tsx
  ...
  -  {results.map(({ type, document }) => {
  +  {results.map(({ type, document, highlight }) => {
       switch (type) {
         case 'software-catalog':
           return (
             <CatalogSearchResultListItem
               key={document.location}
               result={document}
  +            highlight={highlight}
             />
           );
         case 'techdocs':
           return (
             <TechDocsSearchResultListItem
               key={document.location}
               result={document}
  +            highlight={highlight}
             />
           );
         default:
           return (
             <DefaultResultListItem
               key={document.location}
               result={document}
  +            highlight={highlight}
             />
           );
       }
     })}
  ...
  ```

- d41f19ca2a: Bumped the `typescript` version in the template to `~4.6.4`.

  To apply this change to an existing app, make the following change to the root `package.json`:

  ```diff
     dependencies: {
       ...
  -    "typescript": "~4.5.4"
  +    "typescript": "~4.6.4"
     },
  ```

### `@backstage/dev-utils` (1.0.1 → 1.0.2)

#### 1.0.2

##### Patch Changes

- 6e830352d4: Updated dependency `@types/node` to `^16.0.0`.

### `@backstage/plugin-api-docs` (0.8.4 → 0.8.5)

#### 0.8.5

##### Patch Changes

- 2c279df4eb: Updated dependency `graphiql` to `^1.8.8`.
- 4274844a8c: Use InfoCardVariants on custom cards variant attribute
- 09fa05e5d7: Bumped @asyncapi/react-component > openapi-sampler > json-pointer to resolve security vulnerability CVE-2021-23820
- 165790975d: Updated dependency `@asyncapi/react-component` to `1.0.0-next.37`.
- 7f6f97d151: Updated dependency `@asyncapi/react-component` to `1.0.0-next.38`.
- 91d0c9d186: Add the dependency `graphql-ws` to fix the latest release of `@graphiql/toolkit` that has a missing dependency
- 433a609a15: Updated the rendering of AsyncApi definitions to be able to resolve absolute HTTP \$ref references.

### `@backstage/plugin-app-backend` (0.3.31 → 0.3.32)

#### 0.3.32

##### Patch Changes

- cfc0f19699: Updated dependency `fs-extra` to `10.1.0`.

### `@backstage/plugin-auth-node` (0.2.0 → 0.2.1)

#### 0.2.1

##### Patch Changes

- 9ec4e0613e: Update to `jose` 4.6.0

### `@backstage/plugin-azure-devops` (0.1.20 → 0.1.21)

#### 0.1.21

##### Patch Changes

- ac14fcaf38: Added entity view for Azure Git Tags, based on existing Pull Requests view

### `@backstage/plugin-azure-devops-backend` (0.3.10 → 0.3.11)

#### 0.3.11

##### Patch Changes

- ac14fcaf38: Added entity view for Azure Git Tags, based on existing Pull Requests view

### `@backstage/plugin-azure-devops-common` (0.2.2 → 0.2.3)

#### 0.2.3

##### Patch Changes

- ac14fcaf38: Added entity view for Azure Git Tags, based on existing Pull Requests view

### `@backstage/plugin-bazaar` (0.1.19 → 0.1.20)

#### 0.1.20

##### Patch Changes

- 84c9e35a2f: Exported the SortView component from the Bazaar plugin for use directly

### `@backstage/plugin-catalog-backend` (1.1.1 → 1.1.2)

#### 1.1.2

##### Patch Changes

- 16a40ac4c0: Fix wrong return type of the `isGroupEntity` function.
- 55e09b29dd: Fixing broken types for `knex` when checking returned rows
- 1ccbe081cc: Minor internal tweak to support TypeScript 4.6
- cfc0f19699: Updated dependency `fs-extra` to `10.1.0`.
- 2909746147: Updated parseEntityTransformParams to handle keys with '.' in them. This will allow for querying of entities based off annotations such as 'backstage.io/orgin-location' or other entity field keys that have '.' in them.
- 8cc75993a6: Fixed issue in `PermissionEvaluator` instance check that would cause unexpected "invalid union" errors.

### `@backstage/plugin-catalog-backend-module-aws` (0.1.4 → 0.1.5)

#### 0.1.5

##### Patch Changes

- bffec1c96a: Fix S3 object URL creation at AwsS3EntityProvider by

  - handle absence of region config,
  - handle regions with region-less URIs (us-east-1),
  - apply URI encoding,
  - and simplify the logic overall.

### `@backstage/plugin-catalog-backend-module-github` (0.1.2 → 0.1.3)

#### 0.1.3

##### Patch Changes

- a7de43f648: `GitHubOrgEntityProvider.fromConfig` now supports a `schedule` option like other
  entity providers, that makes it more convenient to leverage using the common
  task scheduler.

  If you want to use this in your own project, it is used something like the following:

  ```ts
  // In packages/backend/src/plugins/catalog.ts
  builder.addEntityProvider(
    GitHubOrgEntityProvider.fromConfig(env.config, {
      id: 'production',
      orgUrl: 'https://github.com/backstage',
      schedule: env.scheduler.createScheduledTaskRunner({
        frequency: { cron: '*/30 * * * *' },
        timeout: { minutes: 10 },
      }),
      logger: env.logger,
    }),
  );
  ```

### `@backstage/plugin-catalog-backend-module-msgraph` (0.3.1 → 0.3.2)

#### 0.3.2

##### Patch Changes

- 8d9f673106: Add annotation `microsoft.com/email` when using the `defaultUserTransformer`.

  This will allow users of the Microsoft auth provider to utilize the predefined
  SignIn resolver instead of maintaining their own.

  ```typescript
  // backend/plugins/auth.ts

  // [...]

  export default async function createPlugin(
    env: PluginEnvironment,
  ): Promise<Router> {
    return await createRouter({
      // [...]
      providerFactories: {
        microsoft: providers.microsoft.create({
          signIn: {
            resolver:
              providers.microsoft.resolvers.emailMatchingUserEntityAnnotation(),
          },
        }),
      },
    });
  }
  ```

### `@backstage/plugin-catalog-graph` (0.2.16 → 0.2.17)

#### 0.2.17

##### Patch Changes

- f2d4136b72: Fix kind filter error in the dev app

### `@backstage/plugin-gcalendar` (0.3.0 → 0.3.1)

#### 0.3.1

##### Patch Changes

- 1429dbbea9: fixed google API types dependencies

### `@backstage/plugin-graphiql` (0.2.36 → 0.2.37)

#### 0.2.37

##### Patch Changes

- e1f42a0e2c: Updated dependency `@types/codemirror` to `^5.0.0`.
- 8d4ecc30f1: Updated dependency `@types/codemirror` to `^0.0.109`.
- 91d0c9d186: Add the dependency `graphql-ws` to fix the latest release of `@graphiql/toolkit` that has a missing dependency

### `@backstage/plugin-home` (0.4.20 → 0.4.21)

#### 0.4.21

##### Patch Changes

- 2b733d9d39: star icons now have the same yellow color as the other star icons when a entity is favourite
- 69093c5f91: Display entity titles in `StarredEntities` home page card (if defined) and don't show entities which no longer exist

### `@backstage/plugin-jenkins-backend` (0.1.21 → 0.1.22)

#### 0.1.22

##### Patch Changes

- 8cc75993a6: Fixed issue in `PermissionEvaluator` instance check that would cause unexpected "invalid union" errors.

### `@backstage/plugin-kubernetes` (0.6.4 → 0.6.5)

#### 0.6.5

##### Patch Changes

- 1ef98cfe48: add Azure Identity auth provider and AKS dashboard formatter
- 447e060872: Add support for 'oidc' as authProvider for kubernetes authentication
  and adds optional 'oidcTokenProvider' config value. This will allow
  users to authenticate to kubernetes cluster using id tokens obtained
  from the configured auth provider in their backstage instance.

### `@backstage/plugin-kubernetes-backend` (0.5.0 → 0.5.1)

#### 0.5.1

##### Patch Changes

- 1ef98cfe48: add Azure Identity auth provider and AKS dashboard formatter
- b9f7ffb162: Add filtering to GKE cluster locator
- 447e060872: Add support for 'oidc' as authProvider for kubernetes authentication
  and adds optional 'oidcTokenProvider' config value. This will allow
  users to authenticate to kubernetes cluster using id tokens obtained
  from the configured auth provider in their backstage instance.
- cfc0f19699: Updated dependency `fs-extra` to `10.1.0`.

### `@backstage/plugin-kubernetes-common` (0.2.9 → 0.2.10)

#### 0.2.10

##### Patch Changes

- 1ef98cfe48: add Azure Identity auth provider and AKS dashboard formatter
- 447e060872: Add support for 'oidc' as authProvider for kubernetes authentication
  and adds optional 'oidcTokenProvider' config value. This will allow
  users to authenticate to kubernetes cluster using id tokens obtained
  from the configured auth provider in their backstage instance.

### `@backstage/plugin-newrelic-dashboard` (0.1.12 → 0.1.13)

#### 0.1.13

##### Patch Changes

- 5fa2fb2553: Add `FetchApi` and related `fetchApiRef` which implement fetch. in order to included the Authorization Token to New Relic Dashboard Plugin, so that frontend can send an authenticated proxy call to backend

### `@backstage/plugin-org` (0.5.4 → 0.5.5)

#### 0.5.5

##### Patch Changes

- dfee1002d7: Fixed overflow bug of name and email on EntitiyMembersListCard component which can occur on specific 'screen width' + ’character length' combinations
- cb0db62344: Fix linking ownership card to catalog owner filter when namespaces are used
- 8da4a207dd: Fix ref to filtered catalog table view when using aggregated relations.
- 2025d7c123: Include namespace in `MyGroupSidebarItem` if not default and remove root item routing if there are multiple groups

### `@backstage/plugin-rollbar-backend` (0.1.28 → 0.1.29)

#### 0.1.29

##### Patch Changes

- ab1435dcc9: Updated README to include clearer installation instructions on how to install and configure.
- cfc0f19699: Updated dependency `fs-extra` to `10.1.0`.

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.6 → 0.2.7)

#### 0.2.7

##### Patch Changes

- cfc0f19699: Updated dependency `fs-extra` to `10.1.0`.

### `@backstage/plugin-search` (0.8.0 → 0.8.1)

#### 0.8.1

##### Patch Changes

- 11a46863de: Fix issue with `HomePageSearchBar` requiring `SearchContext`
- bef56488ad: Introduced a `<SearchModalProvider>`, which can optionally be placed higher up in the react tree in order to allow control of search modal visibility from outside the modal itself.
- 3a74e203a8: Updated search result components to support rendering content with highlighted matched terms

### `@backstage/plugin-search-backend` (0.5.1 → 0.5.2)

#### 0.5.2

##### Patch Changes

- 8cc75993a6: Fixed issue in `PermissionEvaluator` instance check that would cause unexpected "invalid union" errors.

### `@backstage/plugin-search-backend-module-elasticsearch` (0.1.3 → 0.1.4)

#### 0.1.4

##### Patch Changes

- 9eef9c9db4: Fix issue where `nextPageCursor` is defined on the last page of results
- 71d3432710: Search Engines will now index documents in batches of 1000 instead of 100 (under the hood). This may result in your Backstage backend consuming slightly more memory during index runs, but should dramatically improve indexing performance for large document sets.
- a7f7a63d14: Prevent orphaned stale indices by permanently marking them for deletion so removal can be re-attempted if it failed previously
- 3a74e203a8: Support generating highlighted matched terms in search result data

### `@backstage/plugin-search-backend-module-pg` (0.3.2 → 0.3.3)

#### 0.3.3

##### Patch Changes

- 71d3432710: Search Engines will now index documents in batches of 1000 instead of 100 (under the hood). This may result in your Backstage backend consuming slightly more memory during index runs, but should dramatically improve indexing performance for large document sets.

### `@backstage/plugin-search-backend-node` (0.6.0 → 0.6.1)

#### 0.6.1

##### Patch Changes

- 71d3432710: Search Engines will now index documents in batches of 1000 instead of 100 (under the hood). This may result in your Backstage backend consuming slightly more memory during index runs, but should dramatically improve indexing performance for large document sets.
- 3a74e203a8: Support generating highlighted matched terms in search result data

### `@backstage/plugin-search-common` (0.3.3 → 0.3.4)

#### 0.3.4

##### Patch Changes

- 3a74e203a8: Support generating highlighted matched terms in search result data

### `@backstage/plugin-sonarqube` (0.3.4 → 0.3.5)

#### 0.3.5

##### Patch Changes

- e462112be5: Updated dependency `rc-progress` to `3.3.2`.

### `@backstage/plugin-tech-insights` (0.2.0 → 0.2.1)

#### 0.2.1

##### Patch Changes

- aa8db01acb: Add new component `EntityTechInsightsScorecardCard`, which can be used in the overview of the `EntityPage` page or display multiple individual `EntityTechInsightsScorecardCard` in `EntityLayout.Route`.

### `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.15 → 0.1.16)

#### 0.1.16

##### Patch Changes

- 58e2c46151: Updated usages of `buildTechInsightsContext` in README.

### `@backstage/plugin-tech-radar` (0.5.11 → 0.5.12)

#### 0.5.12

##### Patch Changes

- 3588a77994: Rename `use` to `adopt`, to reflect Zalando Tech Radar regarding quadrants and add link to Zalando explanation.

### `@backstage/plugin-techdocs` (1.1.0 → 1.1.1)

#### 1.1.1

##### Patch Changes

- 52419be116: Create a menu in the sub header of documentation pages, it is responsible for rendering TechDocs addons that allow users to customize their reading experience.
- a307a14be0: Removed dependency on `@backstage/core-app-api`.
- bed0d64ce9: Fixed bugs that prevented a 404 error from being shown when it should have been.
- 2efee91251: Add a `sub-route` path on the EntityDocs page to fix the blank screen error when navigating using sidebar links.
- 2dcb2c9678: Loading SVGs correctly with `bota` with extended characters
- 52fddad92d: The `TechDocsStorageApi` and its associated ref are now exported by `@backstage/plugin-techdocs-react`. The API interface, ref, and types are now deprecated in `@backstage/plugin-techdocs` and will be removed in a future release.
- 0ad901569f: Hidden exports related to experimental TechDocs reader functionality have been removed and can no longer be imported. In the unlikely event you were using these exports, you can now take advantage of the officially supported and generally available TechDocs Addon framework instead.
- 3a74e203a8: Updated search result components to support rendering content with highlighted matched terms

### `@backstage/plugin-techdocs-backend` (1.1.0 → 1.1.1)

#### 1.1.1

##### Patch Changes

- cfc0f19699: Updated dependency `fs-extra` to `10.1.0`.
- 1b3ba5d198: Fixed a bug that could cause TechDocs index generation to hang and fail when an underlying TechDocs site's `search_index.json` was empty.

### `@backstage/plugin-techdocs-node` (1.1.0 → 1.1.1)

#### 1.1.1

##### Patch Changes

- cfc0f19699: Updated dependency `fs-extra` to `10.1.0`.
- c2a1d8935e: Updated the default version of the `@spotify/techdocs` container used when `techdocs.generator.runIn` is `docker` to `v1.0.3`.
- b26f4cb6a1: Allow usage of custom tags with sequence node type (such as the !ENV tag) in the techdocs mkdocs config.

### `@backstage/plugin-user-settings` (0.4.3 → 0.4.4)

#### 0.4.4

##### Patch Changes

- ed075219aa: Added alternative text to profile picture

### `@techdocs/cli` (1.1.0 → 1.1.1)

#### 1.1.1

##### Patch Changes

- 344ea56acc: Bump `commander` to version 9.1.0
- 52fddad92d: The TechDocs CLI's embedded app now imports all API refs from the `@backstage/plugin-techdocs-react` package.
- c14e78a367: Update `techdocs-cli serve`'s `proxyEndpoint` to match the base URL of the embedded techdocs app.

_Excluded dependency updates for packages: `@backstage/app-defaults`, `@backstage/backend-test-utils`, `@backstage/catalog-client`, `@backstage/catalog-model`, `@backstage/plugin-airbrake`, `@backstage/plugin-airbrake-backend`, `@backstage/plugin-allure`, `@backstage/plugin-analytics-module-ga`, `@backstage/plugin-apache-airflow`, `@backstage/plugin-badges`, `@backstage/plugin-badges-backend`, `@backstage/plugin-bazaar-backend`, `@backstage/plugin-bitrise`, `@backstage/plugin-catalog-backend-module-azure`, `@backstage/plugin-catalog-backend-module-bitbucket`, `@backstage/plugin-catalog-backend-module-gitlab`, `@backstage/plugin-catalog-backend-module-ldap`, `@backstage/plugin-catalog-common`, `@backstage/plugin-catalog-graphql`, `@backstage/plugin-catalog-import`, `@backstage/plugin-cicd-statistics`, `@backstage/plugin-cicd-statistics-module-gitlab`, `@backstage/plugin-circleci`, `@backstage/plugin-cloudbuild`, `@backstage/plugin-code-climate`, `@backstage/plugin-code-coverage`, `@backstage/plugin-code-coverage-backend`, `@backstage/plugin-config-schema`, `@backstage/plugin-cost-insights`, `@backstage/plugin-explore`, `@backstage/plugin-explore-react`, `@backstage/plugin-firehydrant`, `@backstage/plugin-fossa`, `@backstage/plugin-gcp-projects`, `@backstage/plugin-git-release-manager`, `@backstage/plugin-github-actions`, `@backstage/plugin-github-deployments`, `@backstage/plugin-gitops-profiles`, `@backstage/plugin-gocd`, `@backstage/plugin-graphql-backend`, `@backstage/plugin-ilert`, `@backstage/plugin-jenkins`, `@backstage/plugin-jenkins-common`, `@backstage/plugin-kafka`, `@backstage/plugin-kafka-backend`, `@backstage/plugin-lighthouse`, `@backstage/plugin-newrelic`, `@backstage/plugin-pagerduty`, `@backstage/plugin-periskop`, `@backstage/plugin-periskop-backend`, `@backstage/plugin-permission-backend`, `@backstage/plugin-permission-common`, `@backstage/plugin-permission-node`, `@backstage/plugin-permission-react`, `@backstage/plugin-proxy-backend`, `@backstage/plugin-rollbar`, `@backstage/plugin-scaffolder-backend-module-yeoman`, `@backstage/plugin-sentry`, `@backstage/plugin-shortcuts`, `@backstage/plugin-splunk-on-call`, `@backstage/plugin-stack-overflow`, `@backstage/plugin-stack-overflow-backend`, `@backstage/plugin-todo`, `@backstage/plugin-todo-backend`, `@backstage/plugin-xcmetrics`, `@backstage/search-common`, `@backstage/techdocs-common`._
