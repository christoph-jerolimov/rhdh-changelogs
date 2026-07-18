# Backstage Release 1.44.0 changelog

Changes between 1.43.4 and 1.44.0 — 175 changed and 1 added packages.

## Summary

- [Newly added packages](#newly-added-packages): 1 package
- [Breaking changes](#breaking-changes): 5 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 3 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 2 packages
- [Other minor version bumps](#other-minor-version-bumps): 1 package
- [Other patch version bumps](#other-patch-version-bumps): 56 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/plugin-mui-to-bui` (new, 0.2.0)](#backstageplugin-mui-to-bui-new-020)
- [Breaking changes](#breaking-changes)
  - [`@backstage/frontend-test-utils` (0.3.6 → 0.4.0)](#backstagefrontend-test-utils-036--040)
  - [`@backstage/plugin-scaffolder-backend` (2.2.2 → 3.0.0)](#backstageplugin-scaffolder-backend-222--300)
  - [`@backstage/plugin-scaffolder-node` (0.11.2 → 0.12.0)](#backstageplugin-scaffolder-node-0112--0120)
  - [`@backstage/theme` (0.6.8 → 0.7.0)](#backstagetheme-068--070)
  - [`@backstage/ui` (0.7.1 → 0.8.0)](#backstageui-071--080)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/backend-defaults` (0.12.2 → 0.13.0)](#backstagebackend-defaults-0122--0130)
  - [`@backstage/plugin-api-docs` (0.12.11 → 0.13.0)](#backstageplugin-api-docs-01211--0130)
  - [`@backstage/plugin-notifications-backend-module-slack` (0.1.5 → 0.2.0)](#backstageplugin-notifications-backend-module-slack-015--020)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-kubernetes-cluster` (0.0.29 → 0.0.30)](#backstageplugin-kubernetes-cluster-0029--0030)
  - [`@backstage/plugin-signals` (0.0.23 → 0.0.24)](#backstageplugin-signals-0023--0024)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@techdocs/cli` (1.9.8 → 1.10.0)](#techdocscli-198--1100)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-app-api` (1.2.7 → 1.2.8)](#backstagebackend-app-api-127--128)
  - [`@backstage/cli` (0.34.3 → 0.34.4)](#backstagecli-0343--0344)
  - [`@backstage/config` (1.3.4 → 1.3.5)](#backstageconfig-134--135)
  - [`@backstage/config-loader` (1.10.4 → 1.10.5)](#backstageconfig-loader-1104--1105)
  - [`@backstage/core-components` (0.18.1 → 0.18.2)](#backstagecore-components-0181--0182)
  - [`@backstage/create-app` (0.7.4 → 0.7.5)](#backstagecreate-app-074--075)
  - [`@backstage/eslint-plugin` (0.1.11 → 0.1.12)](#backstageeslint-plugin-0111--0112)
  - [`@backstage/frontend-plugin-api` (0.12.0 → 0.12.1)](#backstagefrontend-plugin-api-0120--0121)
  - [`@backstage/integration` (1.18.0 → 1.18.1)](#backstageintegration-1180--1181)
  - [`@backstage/plugin-app` (0.3.0 → 0.3.1)](#backstageplugin-app-030--031)
  - [`@backstage/plugin-app-visualizer` (0.1.23 → 0.1.24)](#backstageplugin-app-visualizer-0123--0124)
  - [`@backstage/plugin-bitbucket-cloud-common` (0.3.2 → 0.3.3)](#backstageplugin-bitbucket-cloud-common-032--033)
  - [`@backstage/plugin-catalog-backend` (3.1.1 → 3.1.2)](#backstageplugin-catalog-backend-311--312)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.4.15 → 0.4.16)](#backstageplugin-catalog-backend-module-aws-0415--0416)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.3.9 → 0.3.10)](#backstageplugin-catalog-backend-module-azure-039--0310)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.5.3 → 0.5.4)](#backstageplugin-catalog-backend-module-bitbucket-cloud-053--054)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.5.3 → 0.5.4)](#backstageplugin-catalog-backend-module-bitbucket-server-053--054)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (0.3.6 → 0.3.7)](#backstageplugin-catalog-backend-module-gerrit-036--037)
  - [`@backstage/plugin-catalog-backend-module-github` (0.11.0 → 0.11.1)](#backstageplugin-catalog-backend-module-github-0110--0111)
  - [`@backstage/plugin-catalog-backend-module-github-org` (0.3.14 → 0.3.15)](#backstageplugin-catalog-backend-module-github-org-0314--0315)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.7.3 → 0.7.4)](#backstageplugin-catalog-backend-module-gitlab-073--074)
  - [`@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.13 → 0.2.14)](#backstageplugin-catalog-backend-module-gitlab-org-0213--0214)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.8.0 → 0.8.1)](#backstageplugin-catalog-backend-module-msgraph-080--081)
  - [`@backstage/plugin-catalog-backend-module-puppetdb` (0.2.14 → 0.2.15)](#backstageplugin-catalog-backend-module-puppetdb-0214--0215)
  - [`@backstage/plugin-catalog-graph` (0.5.1 → 0.5.2)](#backstageplugin-catalog-graph-051--052)
  - [`@backstage/plugin-catalog-react` (1.21.1 → 1.21.2)](#backstageplugin-catalog-react-1211--1212)
  - [`@backstage/plugin-home` (0.8.12 → 0.8.13)](#backstageplugin-home-0812--0813)
  - [`@backstage/plugin-kubernetes` (0.12.11 → 0.12.12)](#backstageplugin-kubernetes-01211--01212)
  - [`@backstage/plugin-kubernetes-common` (0.9.6 → 0.9.7)](#backstageplugin-kubernetes-common-096--097)
  - [`@backstage/plugin-kubernetes-react` (0.5.11 → 0.5.12)](#backstageplugin-kubernetes-react-0511--0512)
  - [`@backstage/plugin-notifications` (0.5.9 → 0.5.10)](#backstageplugin-notifications-059--0510)
  - [`@backstage/plugin-notifications-backend` (0.5.10 → 0.5.11)](#backstageplugin-notifications-backend-0510--0511)
  - [`@backstage/plugin-notifications-backend-module-email` (0.3.13 → 0.3.14)](#backstageplugin-notifications-backend-module-email-0313--0314)
  - [`@backstage/plugin-org` (0.6.44 → 0.6.45)](#backstageplugin-org-0644--0645)
  - [`@backstage/plugin-scaffolder` (1.34.1 → 1.34.2)](#backstageplugin-scaffolder-1341--1342)
  - [`@backstage/plugin-scaffolder-backend-module-azure` (0.2.13 → 0.2.14)](#backstageplugin-scaffolder-backend-module-azure-0213--0214)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket` (0.3.14 → 0.3.15)](#backstageplugin-scaffolder-backend-module-bitbucket-0314--0315)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.2.13 → 0.2.14)](#backstageplugin-scaffolder-backend-module-bitbucket-cloud-0213--0214)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.13 → 0.2.14)](#backstageplugin-scaffolder-backend-module-bitbucket-server-0213--0214)
  - [`@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.13 → 0.3.14)](#backstageplugin-scaffolder-backend-module-confluence-to-markdown-0313--0314)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.15 → 0.3.16)](#backstageplugin-scaffolder-backend-module-cookiecutter-0315--0316)
  - [`@backstage/plugin-scaffolder-backend-module-gcp` (0.2.13 → 0.2.14)](#backstageplugin-scaffolder-backend-module-gcp-0213--0214)
  - [`@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.13 → 0.2.14)](#backstageplugin-scaffolder-backend-module-gerrit-0213--0214)
  - [`@backstage/plugin-scaffolder-backend-module-gitea` (0.2.13 → 0.2.14)](#backstageplugin-scaffolder-backend-module-gitea-0213--0214)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.9.0 → 0.9.1)](#backstageplugin-scaffolder-backend-module-github-090--091)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.9.5 → 0.9.6)](#backstageplugin-scaffolder-backend-module-gitlab-095--096)
  - [`@backstage/plugin-scaffolder-backend-module-notifications` (0.1.14 → 0.1.15)](#backstageplugin-scaffolder-backend-module-notifications-0114--0115)
  - [`@backstage/plugin-scaffolder-backend-module-rails` (0.5.13 → 0.5.14)](#backstageplugin-scaffolder-backend-module-rails-0513--0514)
  - [`@backstage/plugin-scaffolder-backend-module-sentry` (0.2.13 → 0.2.14)](#backstageplugin-scaffolder-backend-module-sentry-0213--0214)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.14 → 0.4.15)](#backstageplugin-scaffolder-backend-module-yeoman-0414--0415)
  - [`@backstage/plugin-scaffolder-react` (1.19.1 → 1.19.2)](#backstageplugin-scaffolder-react-1191--1192)
  - [`@backstage/plugin-search` (1.4.30 → 1.4.31)](#backstageplugin-search-1430--1431)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.48 → 0.5.49)](#backstageplugin-search-backend-module-pg-0548--0549)
  - [`@backstage/plugin-search-react` (1.9.4 → 1.9.5)](#backstageplugin-search-react-194--195)
  - [`@backstage/plugin-user-settings` (0.8.26 → 0.8.27)](#backstageplugin-user-settings-0826--0827)
  - [`@backstage/repo-tools` (0.15.2 → 0.15.3)](#backstagerepo-tools-0152--0153)

## Newly added packages

### `@backstage/plugin-mui-to-bui` (new, 0.2.0)

#### 0.2.0

##### Minor Changes

- d5cbdba: This is the first release of the Material UI to Backstage UI migration helper plugin. It adds a new page at `/mui-to-bui` that converts an existing MUI v5 theme into Backstage UI (BUI) CSS variables, with live preview and copy/download.

##### Patch Changes

- 28ee81c: Fix invalid conversion for `--bui-bg` variable

## Breaking changes

### `@backstage/frontend-test-utils` (0.3.6 → 0.4.0)

#### 0.4.0

##### Minor Changes

- c41dd80: **BREAKING**: Removed the `extensions` option from `renderInTestApp`. If you need to pass extensions to the test app, use the new `renderTestApp` utility instead.

### `@backstage/plugin-scaffolder-backend` (2.2.2 → 3.0.0)

#### 3.0.0

##### Major Changes

- 9b81a90: **BREAKING** - Removing the deprecated types and interfaces, there's no replacement for these types, and hopefully not currently used as they offer no value with the plugin being on the new backend system and no way to consume them.

  Affected types: `CreateWorkerOptions`, `CurrentClaimedTask`, `DatabaseTaskStore`, `DatabaseTaskStoreOptions`, `TaskManager`, `TaskStore`, `TaskStoreCreateTaskOptions`, `TaskStoreCreateTaskResult`, `TaskStoreEmitOptions`, `TaskStoreListEventsOptions`, `TaskStoreRecoverTaskOptions`, `TaskStoreShutDownTaskOptions`, `TaskWorker` and `TemplateActionRegistry`.

##### Patch Changes

- f222a2e: Fixed distributed actions not being visible in the scaffolder template actions.

  Depending on the plugin startup order, some of the distributed actions were not being registered correctly,
  causing them to be invisible in the scaffolder template actions list.

### `@backstage/plugin-scaffolder-node` (0.11.2 → 0.12.0)

#### 0.12.0

##### Minor Changes

- 9b81a90: **BREAKING** - Marking optional fields as required in the `TaskBroker`, these can be fixed with a no-op `() => void` if you don't want to implement the functions.

  - `cancel`, `recoverTasks` and `retry` are the required methods on the `TaskBroker` interface.

  **NOTE**: If you're affected by this breaking change, please reach out to us in an issue as we're thinking about completely removing the `TaskBroker` extension point soon and would like to hear your use cases for the upcoming re-architecture of the `scaffolder-backend` plugin.

##### Patch Changes

- c8aa210: **BREAKING ALPHA**: We've moved the `scaffolderActionsExtensionPoint` from `/alpha` to the main export.

  ```tsx
  // before
  import { scaffolderActionsExtensionPoint } from '@backstage/plugin-scaffolder-node/alpha';

  // after
  import { scaffolderActionsExtensionPoint } from '@backstage/plugin-scaffolder-node';
  ```

- 6e2bda7: **DEPRECATION**: We're going to be working on refactoring a lot of the internals of the Scaffolder backend plugin, and with that comes a lot of deprecations and removals for public types that are making these things hard.

  If you're using these types, please reach out to us either on Discord or a GitHub issue with your use cases.

  - `SerializedTask`, `SerializedTaskEvent`, `TaskBroker`, `TaskContext`, `TaskBrokerDispatchOptions`, `TaskBrokerDispatchResult`, `TaskCompletionState`, `TaskEventType`, `TaskFilter`, `TaskFilters`, `TaskStatus` are the types that have now been marked as deprecated, and will be removed in a future release.

### `@backstage/theme` (0.6.8 → 0.7.0)

#### 0.7.0

##### Minor Changes

- 865bce8: **BREAKING**: Removed the built-in `CssBaseline` from `UnifiedThemeProvider`. If your Backstage instance looks broken after this update, you likely forgot to add our new Backstage UI global CSS. To do that, please import `@backstage/ui/css/styles.css` in `packages/app/src/index.tsx`:

  ```tsx
  import '@backstage/ui/css/styles.css';
  ```

  This change also removes the `noCssBaseline` prop, which became redundant.

##### Patch Changes

- d5cbdba: The `UnifiedThemeProvider` now coordinates theme attributes on the document `body` in case multiple theme providers are rendered.

### `@backstage/ui` (0.7.1 → 0.8.0)

#### 0.8.0

##### Minor Changes

- 9acc1d6: **BREAKING**: Added a new `PasswordField` component. As part of this change, the `password` and `search` types have been removed from `TextField`.
- b0d11b5: **BREAKING** Restructure Backstage UI component styling to use CSS Modules instead of pure CSS. We don't expect this to be an issue in practice but it is important to call out that all styles are now loaded through CSS modules with generated class names. We are still providing fixed class names for all components to allow anyone to style their Backstage instance.
- 0c53517: **BREAKING** The ScrollArea component has been removed from Backstage UI because it did not meet our accessibility standards.
- 7b319c5: **BREAKING** Remove Icon component in Backstage UI. This component was creating issue for tree-shaking. It is recommended to use icons from @remixicon/react until we found a better alternative in Backstage UI.

##### Patch Changes

- 2591b42: Adding a new Dialog component to Backstage UI.
- 827340f: remove default selection of tab
- 5dc17cc: Fix margin utility classes in Backstage UI.
- 85faee0: Fix scroll jumping when opening menu in Backstage UI.
- 3c921c5: Making href mandatory in tabs that are part of a Header component
- df7d2cf: Update react-aria-components to version 1.13.0
- 507ee55: Fix table sorting icon position in Backstage UI.
- 8b7c3c9: Add new `virtualized`, `maxWidth` and `maxHeight` props to `Menu`, `MenuListBox`, `MenuAutocomplete` and `MenuAutocompleteListBox` to allow for virtalization of long lists inside menus.
- b940062: Added support for data attributes in `<Box />`, `<Container />`, `<Flex />`, and `<Grid />` components, ensuring they are correctly applied to the rendered elements.
- 206c801: Cleaning up Backstage UI props definitions as well as removing ScrollArea in Card to improve accessibility.
- 5c21e45: Add react router for internal routing for ButtonLinks
- 865bce8: Added a background color default on the body
- af4d9b4: We are restructuring our CSS to have a better layer structure.
- 9a47125: Improved SearchField component flex layout and animations. Fixed SearchField behavior in Header components by switching from width-based transitions to flex-basis transitions for better responsive behavior. Added new Storybook stories to test SearchField integration with Header component.
- 9781815: Remove auto selection of tabs for tabs that all have href defined
- 4adbb03: Avoid overriding onChange when spreading props
- f6dff5b: Using react router for internal links in the Menu component

## 0.x minor version bumps

### `@backstage/backend-defaults` (0.12.2 → 0.13.0)

#### 0.13.0

##### Minor Changes

- 2d3e2b2: implement support for direct url for AzureBlobStorageUrlReader search function
- 8b91238: Adds support for configuring server-level HTTP options through the
  `app-config.yaml` file under the `backend.server` key. Supported options
  include `headersTimeout`, `keepAliveTimeout`, `requestTimeout`, `timeout`,
  `maxHeadersCount`, and `maxRequestsPerSocket`.

  These are passed directly to the underlying Node.js HTTP server.
  If omitted, Node.js defaults are used.

- 8495b18: Add a new `externalTokenHandlersServiceRef` to allow custom external token validations

### `@backstage/plugin-api-docs` (0.12.11 → 0.13.0)

#### 0.13.0

##### Minor Changes

- b8a381e: Remove explicit dependency on `isomorphic-form-data`.

  This explicit dependency was added to address [an issue](https://github.com/swagger-api/swagger-ui/issues/7436) in the
  dependency `swagger-ui-react`. That [issue has since been resolved](https://github.com/swagger-api/swagger-ui/issues/7436#issuecomment-889792304),
  and `isomorphic-form-data` no longer needs to be declared.

  Additionally, this changeset updates the `swagger-ui-react` dependency to version `5.19.0` or higher, which includes
  [compatibility](https://github.com/swagger-api/swagger-ui?tab=readme-ov-file#compatibility) with the latest versions of
  the OpenAPI specification.

### `@backstage/plugin-notifications-backend-module-slack` (0.1.5 → 0.2.0)

#### 0.2.0

##### Minor Changes

- 3d09bb2: Adds username as optional config in order to send Slack notifications with a specific username in the case when using one Slack App for more than just Backstage.

## 0.0.x patch version bumps

### `@backstage/plugin-kubernetes-cluster` (0.0.29 → 0.0.30)

#### 0.0.30

##### Patch Changes

- 99fcf98: Removed unused dependencies

### `@backstage/plugin-signals` (0.0.23 → 0.0.24)

#### 0.0.24

##### Patch Changes

- 7b41d9d: Remove `app-root-element:signals/signals-display` which was not doing anything useful

## Other minor version bumps

### `@techdocs/cli` (1.9.8 → 1.10.0)

#### 1.10.0

##### Minor Changes

- 43afbe5: Techdocs CLI serve supports automatic refresh, relying on `mkdocs` `watch` feature.

## Other patch version bumps

### `@backstage/backend-app-api` (1.2.7 → 1.2.8)

#### 1.2.8

##### Patch Changes

- dd69cf6: Moved up registration of unhandled rejections and errors listeners to be done as early as possible, avoiding flakiness in backend startups and instead always logging these failures rather than sometimes crashing the process.

### `@backstage/cli` (0.34.3 → 0.34.4)

#### 0.34.4

##### Patch Changes

- f2cf564: Removed the script transform cache from the default Jest configuration. The script cache provided a moderate performance boost, but it is incompatible with Jest 30.
- 33faad2: Allow using custom manifest location in the yarn plugin and version bump.

  The Backstage yarn plugin and version bump allows two new environment variables to configure custom manifest location:

  - `BACKSTAGE_VERSIONS_BASE_URL`: The base URL for fetching the Backstage version
    manifest. Defaults to `https://versions.backstage.io/v1/releases/VERSION/manifest.json`.
    Useful for running the plugin in environment without direct access to the internet,
    for example by using a mirror of the versions API or a proxy.
    Note that the environment variable is just the host name, and the path is appended by
    the plugin. If you are using the yarn plugin, bump version command will also try
    to fetch the new version of the yarn plugin from the same base URL (defaults to
    `https://versions.backstage.io/v1/releases/RELEASE/yarn-plugin`)
  - `BACKSTAGE_MANIFEST_FILE`: Path to a local manifest file. If set, the plugin
    will not attempt to fetch the manifest from the network. Useful for running
    the plugin in environment without internet access and without mirror of the
    versions API.

- 6ebc1ea: Fixed module federation config by only setting `import: false` on shared libraries for remote.
- ab96bb7: Added a new `--entrypoint` option to the `package start` command, which allows you to specify a custom entry directory/file for development applications. This is particularly useful when maintaining separate dev apps for different versions of your plugin (e.g., stable and alpha).

  **Example usage:**

  Consider the following plugin dev folder structure:

  ```
  dev/
    index.tsx
    alpha/
      index.ts
  ```

  - The default `yarn package start` command uses the `dev/` folder as the entry point and executes `dev/index.tsx` file;
  - Running `yarn package start --entrypoint dev/alpha` will instead use `dev/alpha/` as the entry point and execute `dev/alpha/index.ts` file.

- 024645e: Remove unused @octokit modules from cli package

  - @octokit/graphql
  - @octokit/graphql-schema
  - @octokit/oauth-app

- d14ef24: Added automatic detection and support for the Backstage Yarn plugin when generating new packages with `yarn new`. When the plugin is installed, new packages will automatically use `backstage:^` ranges for `@backstage/*` dependencies.

### `@backstage/config` (1.3.4 → 1.3.5)

#### 1.3.5

##### Patch Changes

- b45b094: Allow colon to be used as config key.

### `@backstage/config-loader` (1.10.4 → 1.10.5)

#### 1.10.5

##### Patch Changes

- b45b094: Allow colon to be used as config key.

### `@backstage/core-components` (0.18.1 → 0.18.2)

#### 0.18.2

##### Patch Changes

- d493126: Swap base token for semantic token in ItemCardHeader to ensure readability in light mode.
- 431130c: Added `renderEdge` prop to `<DependencyGraph />` component in `@backstage/core-components` to allow custom rendering of graph edges.
- 6981ae6: Fixed DependencyGraph `svg` size not adapting to the container size
- 95935fb: Fixed dependency graph automatically scrolling forever

### `@backstage/create-app` (0.7.4 → 0.7.5)

#### 0.7.5

##### Patch Changes

- c73bfa4: Bumped create-app version.
- c2c6054: Bumped create-app version.
- ffb5b44: Bumped create-app version.
- 316d077: Bumped create-app version.
- 7dcedff: Bump `better-sqlite3` to the latest version

### `@backstage/eslint-plugin` (0.1.11 → 0.1.12)

#### 0.1.12

##### Patch Changes

- 5e98e61: Minor doc updates
- a1dae71: Allow frontend plugin to import from another frontend plugin with same plugin id.

  This prevents the ESLint rule from incorrectly flagging these imports in the new frontend system
  where plugin override requires cross-plugin imports.

### `@backstage/frontend-plugin-api` (0.12.0 → 0.12.1)

#### 0.12.1

##### Patch Changes

- 8ed53eb: Added `coreExtensionData.title`, especially useful for creating extensible layout with tabbed pages, but available for use for other cases too.

### `@backstage/integration` (1.18.0 → 1.18.1)

#### 1.18.1

##### Patch Changes

- d772b51: remove host from azure blob storage integration type
- 84443f1: Adds config definitions for Azure Blob Storage.

### `@backstage/plugin-app` (0.3.0 → 0.3.1)

#### 0.3.1

##### Patch Changes

- ae1dad0: Fixed an issue that caused the `NotFound` page to not render correctly when a Page was mounted at `/`.

### `@backstage/plugin-app-visualizer` (0.1.23 → 0.1.24)

#### 0.1.24

##### Patch Changes

- 4406144: Ensure that the text rendering has react keys for all elements

### `@backstage/plugin-bitbucket-cloud-common` (0.3.2 → 0.3.3)

#### 0.3.3

##### Patch Changes

- 2aded73: Allow for passing a `pagelen` parameter to configure the `pagelength` property of the `BitbucketCloudEntityProvider` `searchCode` pagination to resolve [bug](https://jira.atlassian.com/browse/BCLOUD-23644) pertaining to duplicate results being returned.

### `@backstage/plugin-catalog-backend` (3.1.1 → 3.1.2)

#### 3.1.2

##### Patch Changes

- 9890488: Internal refactor to remove remnants of the old backend system
- 6493c98: Log before provider-orphaning eviction happens
- 2aaf01a: Fix for duplicate search results in entity-facets API call
- e489661: Moved catalog processor and provider disabling and priorities under own config objects.

  This is due to issue with some existing providers, such as GitHub, using array syntax for the provider configuration.

  The new config format is not backwards compatible, so users will need to update their config files. The new format
  is as follows:

  ```yaml
  catalog:
    providerOptions:
      providerA:
        disabled: false
      providerB:
        disabled: true
    processorOptions:
      processorA:
        disabled: false
        priority: 10
      processorB:
        disabled: true
  ```

- 77516c5: Added new `catalog:validate-entity` action to actions registry.

  This action can be used to validate entities against the software catalog.
  This is useful for validating `catalog-info.yaml` file changes locally using the
  Backstage MCP server.

### `@backstage/plugin-catalog-backend-module-aws` (0.4.15 → 0.4.16)

#### 0.4.16

##### Patch Changes

- 99fcf98: Removed unused dependencies

### `@backstage/plugin-catalog-backend-module-azure` (0.3.9 → 0.3.10)

#### 0.3.10

##### Patch Changes

- 84443f1: Adds config definitions for Azure Blob Storage.
- 99fcf98: Removed unused dependencies

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.5.3 → 0.5.4)

#### 0.5.4

##### Patch Changes

- 2aded73: Allow for passing a `pagelen` parameter to configure the `pagelength` property of the `BitbucketCloudEntityProvider` `searchCode` pagination to resolve [bug](https://jira.atlassian.com/browse/BCLOUD-23644) pertaining to duplicate results being returned.
- 99fcf98: Removed unused dependencies

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.5.3 → 0.5.4)

#### 0.5.4

##### Patch Changes

- 99fcf98: Removed unused dependencies

### `@backstage/plugin-catalog-backend-module-gerrit` (0.3.6 → 0.3.7)

#### 0.3.7

##### Patch Changes

- 99fcf98: Removed unused dependencies

### `@backstage/plugin-catalog-backend-module-github` (0.11.0 → 0.11.1)

#### 0.11.1

##### Patch Changes

- 99fcf98: Removed unused dependencies

### `@backstage/plugin-catalog-backend-module-github-org` (0.3.14 → 0.3.15)

#### 0.3.15

##### Patch Changes

- 99fcf98: Removed unused dependencies

### `@backstage/plugin-catalog-backend-module-gitlab` (0.7.3 → 0.7.4)

#### 0.7.4

##### Patch Changes

- 0443119: Fixed an issue in `GitlabDiscoveryEntityProvider` where entity fetching could fail for projects with special characters or that had been renamed or moved.
- 99fcf98: Removed unused dependencies

### `@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.13 → 0.2.14)

#### 0.2.14

##### Patch Changes

- 99fcf98: Removed unused dependencies

### `@backstage/plugin-catalog-backend-module-msgraph` (0.8.0 → 0.8.1)

#### 0.8.1

##### Patch Changes

- 99fcf98: Removed unused dependencies

### `@backstage/plugin-catalog-backend-module-puppetdb` (0.2.14 → 0.2.15)

#### 0.2.15

##### Patch Changes

- 99fcf98: Removed unused dependencies

### `@backstage/plugin-catalog-graph` (0.5.1 → 0.5.2)

#### 0.5.2

##### Patch Changes

- 87b5e6e: Add missing API implementation for catalog graph plugin in NFS apps.
- 431130c: Added `renderEdge` prop to `<DependencyGraph />` component in `@backstage/core-components` to allow custom rendering of graph edges.
- 6981ae6: Fixed DependencyGraph `svg` size not adapting to the container size

### `@backstage/plugin-catalog-react` (1.21.1 → 1.21.2)

#### 1.21.2

##### Patch Changes

- 2a3704d: Correct translation key from "type" to "owner" for owner column in entity table to ensure the right translation is loaded.
- ace202e: Update `material-ui-popup-state` to latest available version.

### `@backstage/plugin-home` (0.8.12 → 0.8.13)

#### 0.8.13

##### Patch Changes

- e7d59d3: fix(home): correct `clearAll` logic to properly handle `deletable` flag

### `@backstage/plugin-kubernetes` (0.12.11 → 0.12.12)

#### 0.12.12

##### Patch Changes

- 99fcf98: Removed unused dependencies

### `@backstage/plugin-kubernetes-common` (0.9.6 → 0.9.7)

#### 0.9.7

##### Patch Changes

- bdd7f95: Make SERVICEACCOUNT_CA_PATH public so it can be imported by external modules.

### `@backstage/plugin-kubernetes-react` (0.5.11 → 0.5.12)

#### 0.5.12

##### Patch Changes

- ac405f2: The configmaps added to be rendered
- f7a4144: Fixes calculation of CPU utilization in the PodTable

### `@backstage/plugin-notifications` (0.5.9 → 0.5.10)

#### 0.5.10

##### Patch Changes

- f5e0963: Removed unused dependencies

### `@backstage/plugin-notifications-backend` (0.5.10 → 0.5.11)

#### 0.5.11

##### Patch Changes

- f5e0963: Removed unused dependencies
- 3b8e156: Fixed exclude entity reference not working in notification sending

### `@backstage/plugin-notifications-backend-module-email` (0.3.13 → 0.3.14)

#### 0.3.14

##### Patch Changes

- b8cf31a: chore(deps): bump `nodemailer` from 6.9.16 to 7.0.7
- f5e0963: Removed unused dependencies

### `@backstage/plugin-org` (0.6.44 → 0.6.45)

#### 0.6.45

##### Patch Changes

- 8b7351f: Add `initialRelationAggregation` and `showAggregateMembersToggle` options to `EntityMembersListCard` as well to `EntityOwnershipCard`

### `@backstage/plugin-scaffolder` (1.34.1 → 1.34.2)

#### 1.34.2

##### Patch Changes

- e0ffe84: Add missing `templatingExtensions` option to RouterProps.contextMenu to allow global control across scaffolder pages
- d9aed74: Forward `ui:disabled` in `OwnedEntityPicker` to allow disabling it
- 075e064: Added missing form fields for the new frontend system.

### `@backstage/plugin-scaffolder-backend-module-azure` (0.2.13 → 0.2.14)

#### 0.2.14

##### Patch Changes

- c8aa210: Updating import for the `scaffolderActionsExtensionPoint` to be the main export

### `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.3.14 → 0.3.15)

#### 0.3.15

##### Patch Changes

- c8aa210: Updating import for the `scaffolderActionsExtensionPoint` to be the main export

### `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.2.13 → 0.2.14)

#### 0.2.14

##### Patch Changes

- c8aa210: Updating import for the `scaffolderActionsExtensionPoint` to be the main export

### `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.13 → 0.2.14)

#### 0.2.14

##### Patch Changes

- c8aa210: Updating import for the `scaffolderActionsExtensionPoint` to be the main export
- f5e0963: Removed unused dependencies

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.13 → 0.3.14)

#### 0.3.14

##### Patch Changes

- c8aa210: Updating import for the `scaffolderActionsExtensionPoint` to be the main export

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.15 → 0.3.16)

#### 0.3.16

##### Patch Changes

- c8aa210: Updating import for the `scaffolderActionsExtensionPoint` to be the main export

### `@backstage/plugin-scaffolder-backend-module-gcp` (0.2.13 → 0.2.14)

#### 0.2.14

##### Patch Changes

- baf1cab: Fix documentation strings to mention GCP instead of Azure

### `@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.13 → 0.2.14)

#### 0.2.14

##### Patch Changes

- c8aa210: Updating import for the `scaffolderActionsExtensionPoint` to be the main export

### `@backstage/plugin-scaffolder-backend-module-gitea` (0.2.13 → 0.2.14)

#### 0.2.14

##### Patch Changes

- c8aa210: Updating import for the `scaffolderActionsExtensionPoint` to be the main export

### `@backstage/plugin-scaffolder-backend-module-github` (0.9.0 → 0.9.1)

#### 0.9.1

##### Patch Changes

- c8aa210: Updating import for the `scaffolderActionsExtensionPoint` to be the main export

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.9.5 → 0.9.6)

#### 0.9.6

##### Patch Changes

- c8aa210: Updating import for the `scaffolderActionsExtensionPoint` to be the main export
- f5e0963: Removed unused dependencies

### `@backstage/plugin-scaffolder-backend-module-notifications` (0.1.14 → 0.1.15)

#### 0.1.15

##### Patch Changes

- c8aa210: Updating import for the `scaffolderActionsExtensionPoint` to be the main export

### `@backstage/plugin-scaffolder-backend-module-rails` (0.5.13 → 0.5.14)

#### 0.5.14

##### Patch Changes

- c8aa210: Updating import for the `scaffolderActionsExtensionPoint` to be the main export

### `@backstage/plugin-scaffolder-backend-module-sentry` (0.2.13 → 0.2.14)

#### 0.2.14

##### Patch Changes

- c8aa210: Updating import for the `scaffolderActionsExtensionPoint` to be the main export
- eea5360: Add sentry:fetch:dsn action to retrieve a Sentry project's DSN

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.14 → 0.4.15)

#### 0.4.15

##### Patch Changes

- c8aa210: Updating import for the `scaffolderActionsExtensionPoint` to be the main export

### `@backstage/plugin-scaffolder-react` (1.19.1 → 1.19.2)

#### 1.19.2

##### Patch Changes

- e61f89e: Don't change loading to false until we've actually got some log state

### `@backstage/plugin-search` (1.4.30 → 1.4.31)

#### 1.4.31

##### Patch Changes

- 67a3e1a: Implemented AbortController request cancellation for overlapping search requests. This change ensures that when users type quickly, previous search requests are properly canceled before new ones start.

### `@backstage/plugin-search-backend-module-pg` (0.5.48 → 0.5.49)

#### 0.5.49

##### Patch Changes

- a919ca3: Truncate long docs to fit PG index size limit
- 8d15a51: Added the < character to the query filter regexp

### `@backstage/plugin-search-react` (1.9.4 → 1.9.5)

#### 1.9.5

##### Patch Changes

- 67a3e1a: Implemented AbortController request cancellation for overlapping search requests. This change ensures that when users type quickly, previous search requests are properly canceled before new ones start.

### `@backstage/plugin-user-settings` (0.8.26 → 0.8.27)

#### 0.8.27

##### Patch Changes

- 52fa068: Added user settings storage API blueprint

### `@backstage/repo-tools` (0.15.2 → 0.15.3)

#### 0.15.3

##### Patch Changes

- 1359279: Fixed an issue with the OpenAPI generated client and server where import/export statements were duplicated.

_Excluded dependency updates for packages: `@backstage/app-defaults`, `@backstage/backend-dynamic-feature-service`, `@backstage/backend-openapi-utils`, `@backstage/backend-plugin-api`, `@backstage/backend-test-utils`, `@backstage/core-app-api`, `@backstage/core-compat-api`, `@backstage/core-plugin-api`, `@backstage/dev-utils`, `@backstage/frontend-app-api`, `@backstage/frontend-defaults`, `@backstage/frontend-dynamic-feature-loader`, `@backstage/integration-aws-node`, `@backstage/integration-react`, `@backstage/plugin-app-backend`, `@backstage/plugin-app-node`, `@backstage/plugin-auth`, `@backstage/plugin-auth-backend`, `@backstage/plugin-auth-backend-module-atlassian-provider`, `@backstage/plugin-auth-backend-module-auth0-provider`, `@backstage/plugin-auth-backend-module-aws-alb-provider`, `@backstage/plugin-auth-backend-module-azure-easyauth-provider`, `@backstage/plugin-auth-backend-module-bitbucket-provider`, `@backstage/plugin-auth-backend-module-bitbucket-server-provider`, `@backstage/plugin-auth-backend-module-cloudflare-access-provider`, `@backstage/plugin-auth-backend-module-gcp-iap-provider`, `@backstage/plugin-auth-backend-module-github-provider`, `@backstage/plugin-auth-backend-module-gitlab-provider`, `@backstage/plugin-auth-backend-module-google-provider`, `@backstage/plugin-auth-backend-module-guest-provider`, `@backstage/plugin-auth-backend-module-microsoft-provider`, `@backstage/plugin-auth-backend-module-oauth2-provider`, `@backstage/plugin-auth-backend-module-oauth2-proxy-provider`, `@backstage/plugin-auth-backend-module-oidc-provider`, `@backstage/plugin-auth-backend-module-okta-provider`, `@backstage/plugin-auth-backend-module-onelogin-provider`, `@backstage/plugin-auth-backend-module-openshift-provider`, `@backstage/plugin-auth-backend-module-pinniped-provider`, `@backstage/plugin-auth-backend-module-vmware-cloud-provider`, `@backstage/plugin-auth-node`, `@backstage/plugin-auth-react`, `@backstage/plugin-catalog`, `@backstage/plugin-catalog-backend-module-backstage-openapi`, `@backstage/plugin-catalog-backend-module-gcp`, `@backstage/plugin-catalog-backend-module-gitea`, `@backstage/plugin-catalog-backend-module-incremental-ingestion`, `@backstage/plugin-catalog-backend-module-ldap`, `@backstage/plugin-catalog-backend-module-logs`, `@backstage/plugin-catalog-backend-module-openapi`, `@backstage/plugin-catalog-backend-module-scaffolder-entity-model`, `@backstage/plugin-catalog-backend-module-unprocessed`, `@backstage/plugin-catalog-common`, `@backstage/plugin-catalog-import`, `@backstage/plugin-catalog-node`, `@backstage/plugin-catalog-unprocessed-entities`, `@backstage/plugin-catalog-unprocessed-entities-common`, `@backstage/plugin-config-schema`, `@backstage/plugin-devtools`, `@backstage/plugin-devtools-backend`, `@backstage/plugin-devtools-common`, `@backstage/plugin-events-backend`, `@backstage/plugin-events-backend-module-aws-sqs`, `@backstage/plugin-events-backend-module-azure`, `@backstage/plugin-events-backend-module-bitbucket-cloud`, `@backstage/plugin-events-backend-module-bitbucket-server`, `@backstage/plugin-events-backend-module-gerrit`, `@backstage/plugin-events-backend-module-github`, `@backstage/plugin-events-backend-module-gitlab`, `@backstage/plugin-events-backend-module-google-pubsub`, `@backstage/plugin-events-backend-module-kafka`, `@backstage/plugin-events-backend-test-utils`, `@backstage/plugin-events-node`, `@backstage/plugin-gateway-backend`, `@backstage/plugin-home-react`, `@backstage/plugin-kubernetes-backend`, `@backstage/plugin-kubernetes-node`, `@backstage/plugin-mcp-actions-backend`, `@backstage/plugin-notifications-common`, `@backstage/plugin-notifications-node`, `@backstage/plugin-org-react`, `@backstage/plugin-permission-backend`, `@backstage/plugin-permission-backend-module-allow-all-policy`, `@backstage/plugin-permission-common`, `@backstage/plugin-permission-node`, `@backstage/plugin-permission-react`, `@backstage/plugin-proxy-backend`, `@backstage/plugin-proxy-node`, `@backstage/plugin-scaffolder-common`, `@backstage/plugin-scaffolder-node-test-utils`, `@backstage/plugin-search-backend`, `@backstage/plugin-search-backend-module-catalog`, `@backstage/plugin-search-backend-module-elasticsearch`, `@backstage/plugin-search-backend-module-explore`, `@backstage/plugin-search-backend-module-stack-overflow-collator`, `@backstage/plugin-search-backend-module-techdocs`, `@backstage/plugin-search-backend-node`, `@backstage/plugin-search-common`, `@backstage/plugin-signals-backend`, `@backstage/plugin-signals-node`, `@backstage/plugin-signals-react`, `@backstage/plugin-techdocs`, `@backstage/plugin-techdocs-addons-test-utils`, `@backstage/plugin-techdocs-backend`, `@backstage/plugin-techdocs-module-addons-contrib`, `@backstage/plugin-techdocs-node`, `@backstage/plugin-techdocs-react`, `@backstage/plugin-user-settings-backend`, `@backstage/test-utils`._
