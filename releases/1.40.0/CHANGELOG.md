# Backstage Release 1.40.0 changelog

Changes between 1.39.1 and 1.40.0 — 160 changed and 2 added packages.

## Summary

- [Newly added packages](#newly-added-packages): 2 packages
- [Breaking changes](#breaking-changes): 9 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 5 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 2 packages
- [Other minor version bumps](#other-minor-version-bumps): 8 packages
- [Other patch version bumps](#other-patch-version-bumps): 52 packages
- [Excluded dependency updates](#excluded-dependency-updates): 84 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/plugin-events-backend-module-kafka` (new, 0.1.0)](#backstageplugin-events-backend-module-kafka-new-010)
  - [`@backstage/plugin-mcp-actions-backend` (new, 0.1.0)](#backstageplugin-mcp-actions-backend-new-010)
- [Breaking changes](#breaking-changes)
  - [`@backstage/canon` (0.4.0 → 0.5.0)](#backstagecanon-040--050)
  - [`@backstage/cli` (0.32.1 → 0.33.0)](#backstagecli-0321--0330)
  - [`@backstage/plugin-catalog` (1.30.0 → 1.31.0)](#backstageplugin-catalog-1300--1310)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.4.8 → 0.5.0)](#backstageplugin-catalog-backend-module-bitbucket-cloud-048--050)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.6.6 → 0.7.0)](#backstageplugin-catalog-backend-module-gitlab-066--070)
  - [`@backstage/plugin-scaffolder-backend` (1.33.0 → 2.0.0)](#backstageplugin-scaffolder-backend-1330--200)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.7.1 → 0.8.0)](#backstageplugin-scaffolder-backend-module-github-071--080)
  - [`@backstage/plugin-scaffolder-node` (0.8.2 → 0.9.0)](#backstageplugin-scaffolder-node-082--090)
  - [`@backstage/plugin-scaffolder-node-test-utils` (0.2.2 → 0.3.0)](#backstageplugin-scaffolder-node-test-utils-022--030)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/backend-defaults` (0.10.0 → 0.11.0)](#backstagebackend-defaults-0100--0110)
  - [`@backstage/create-app` (0.6.2 → 0.7.0)](#backstagecreate-app-062--070)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.4.1 → 0.5.0)](#backstageplugin-catalog-backend-module-bitbucket-server-041--050)
  - [`@backstage/plugin-catalog-backend-module-github` (0.9.0 → 0.10.0)](#backstageplugin-catalog-backend-module-github-090--0100)
  - [`@backstage/repo-tools` (0.13.4 → 0.14.0)](#backstagerepo-tools-0134--0140)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-notifications-common` (0.0.8 → 0.0.9)](#backstageplugin-notifications-common-008--009)
  - [`@backstage/plugin-signals` (0.0.19 → 0.0.20)](#backstageplugin-signals-0019--0020)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/backend-plugin-api` (1.3.1 → 1.4.0)](#backstagebackend-plugin-api-131--140)
  - [`@backstage/backend-test-utils` (1.5.0 → 1.6.0)](#backstagebackend-test-utils-150--160)
  - [`@backstage/plugin-catalog-backend` (2.0.0 → 2.1.0)](#backstageplugin-catalog-backend-200--210)
  - [`@backstage/plugin-catalog-react` (1.18.0 → 1.19.0)](#backstageplugin-catalog-react-1180--1190)
  - [`@backstage/plugin-scaffolder` (1.31.0 → 1.32.0)](#backstageplugin-scaffolder-1310--1320)
  - [`@backstage/plugin-scaffolder-react` (1.16.0 → 1.17.0)](#backstageplugin-scaffolder-react-1160--1170)
  - [`@backstage/plugin-techdocs` (1.12.6 → 1.13.0)](#backstageplugin-techdocs-1126--1130)
  - [`@backstage/plugin-techdocs-react` (1.2.17 → 1.3.0)](#backstageplugin-techdocs-react-1217--130)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-app-api` (1.2.3 → 1.2.4)](#backstagebackend-app-api-123--124)
  - [`@backstage/backend-dynamic-feature-service` (0.7.0 → 0.7.1)](#backstagebackend-dynamic-feature-service-070--071)
  - [`@backstage/catalog-client` (1.10.0 → 1.10.1)](#backstagecatalog-client-1100--1101)
  - [`@backstage/core-components` (0.17.2 → 0.17.3)](#backstagecore-components-0172--0173)
  - [`@backstage/core-plugin-api` (1.10.7 → 1.10.8)](#backstagecore-plugin-api-1107--1108)
  - [`@backstage/eslint-plugin` (0.1.10 → 0.1.11)](#backstageeslint-plugin-0110--0111)
  - [`@backstage/frontend-app-api` (0.11.2 → 0.11.3)](#backstagefrontend-app-api-0112--0113)
  - [`@backstage/frontend-defaults` (0.2.2 → 0.2.3)](#backstagefrontend-defaults-022--023)
  - [`@backstage/frontend-plugin-api` (0.10.2 → 0.10.3)](#backstagefrontend-plugin-api-0102--0103)
  - [`@backstage/plugin-api-docs` (0.12.7 → 0.12.8)](#backstageplugin-api-docs-0127--0128)
  - [`@backstage/plugin-app` (0.1.9 → 0.1.10)](#backstageplugin-app-019--0110)
  - [`@backstage/plugin-app-visualizer` (0.1.19 → 0.1.20)](#backstageplugin-app-visualizer-0119--0120)
  - [`@backstage/plugin-auth-backend-module-aws-alb-provider` (0.4.3 → 0.4.4)](#backstageplugin-auth-backend-module-aws-alb-provider-043--044)
  - [`@backstage/plugin-auth-backend-module-okta-provider` (0.2.3 → 0.2.4)](#backstageplugin-auth-backend-module-okta-provider-023--024)
  - [`@backstage/plugin-auth-node` (0.6.3 → 0.6.4)](#backstageplugin-auth-node-063--064)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.11.5 → 0.11.6)](#backstageplugin-catalog-backend-module-ldap-0115--0116)
  - [`@backstage/plugin-catalog-graph` (0.4.19 → 0.4.20)](#backstageplugin-catalog-graph-0419--0420)
  - [`@backstage/plugin-catalog-import` (0.13.0 → 0.13.1)](#backstageplugin-catalog-import-0130--0131)
  - [`@backstage/plugin-catalog-node` (1.17.0 → 1.17.1)](#backstageplugin-catalog-node-1170--1171)
  - [`@backstage/plugin-catalog-unprocessed-entities` (0.2.17 → 0.2.18)](#backstageplugin-catalog-unprocessed-entities-0217--0218)
  - [`@backstage/plugin-devtools` (0.1.27 → 0.1.28)](#backstageplugin-devtools-0127--0128)
  - [`@backstage/plugin-devtools-backend` (0.5.5 → 0.5.6)](#backstageplugin-devtools-backend-055--056)
  - [`@backstage/plugin-events-backend` (0.5.2 → 0.5.3)](#backstageplugin-events-backend-052--053)
  - [`@backstage/plugin-events-backend-module-google-pubsub` (0.1.0 → 0.1.1)](#backstageplugin-events-backend-module-google-pubsub-010--011)
  - [`@backstage/plugin-home` (0.8.8 → 0.8.9)](#backstageplugin-home-088--089)
  - [`@backstage/plugin-home-react` (0.1.26 → 0.1.27)](#backstageplugin-home-react-0126--0127)
  - [`@backstage/plugin-kubernetes` (0.12.7 → 0.12.8)](#backstageplugin-kubernetes-0127--0128)
  - [`@backstage/plugin-kubernetes-react` (0.5.7 → 0.5.8)](#backstageplugin-kubernetes-react-057--058)
  - [`@backstage/plugin-notifications` (0.5.5 → 0.5.6)](#backstageplugin-notifications-055--056)
  - [`@backstage/plugin-notifications-backend` (0.5.6 → 0.5.7)](#backstageplugin-notifications-backend-056--057)
  - [`@backstage/plugin-notifications-backend-module-email` (0.3.9 → 0.3.10)](#backstageplugin-notifications-backend-module-email-039--0310)
  - [`@backstage/plugin-org` (0.6.39 → 0.6.40)](#backstageplugin-org-0639--0640)
  - [`@backstage/plugin-scaffolder-backend-module-azure` (0.2.9 → 0.2.10)](#backstageplugin-scaffolder-backend-module-azure-029--0210)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket` (0.3.10 → 0.3.11)](#backstageplugin-scaffolder-backend-module-bitbucket-0310--0311)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.2.9 → 0.2.10)](#backstageplugin-scaffolder-backend-module-bitbucket-cloud-029--0210)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.9 → 0.2.10)](#backstageplugin-scaffolder-backend-module-bitbucket-server-029--0210)
  - [`@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.9 → 0.3.10)](#backstageplugin-scaffolder-backend-module-confluence-to-markdown-039--0310)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.10 → 0.3.11)](#backstageplugin-scaffolder-backend-module-cookiecutter-0310--0311)
  - [`@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.9 → 0.2.10)](#backstageplugin-scaffolder-backend-module-gerrit-029--0210)
  - [`@backstage/plugin-scaffolder-backend-module-gitea` (0.2.9 → 0.2.10)](#backstageplugin-scaffolder-backend-module-gitea-029--0210)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.9.1 → 0.9.2)](#backstageplugin-scaffolder-backend-module-gitlab-091--092)
  - [`@backstage/plugin-scaffolder-backend-module-notifications` (0.1.10 → 0.1.11)](#backstageplugin-scaffolder-backend-module-notifications-0110--0111)
  - [`@backstage/plugin-scaffolder-backend-module-rails` (0.5.9 → 0.5.10)](#backstageplugin-scaffolder-backend-module-rails-059--0510)
  - [`@backstage/plugin-scaffolder-backend-module-sentry` (0.2.9 → 0.2.10)](#backstageplugin-scaffolder-backend-module-sentry-029--0210)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.10 → 0.4.11)](#backstageplugin-scaffolder-backend-module-yeoman-0410--0411)
  - [`@backstage/plugin-search` (1.4.26 → 1.4.27)](#backstageplugin-search-1426--1427)
  - [`@backstage/plugin-search-backend` (2.0.2 → 2.0.3)](#backstageplugin-search-backend-202--203)
  - [`@backstage/plugin-search-backend-module-techdocs` (0.4.2 → 0.4.3)](#backstageplugin-search-backend-module-techdocs-042--043)
  - [`@backstage/plugin-search-react` (1.9.0 → 1.9.1)](#backstageplugin-search-react-190--191)
  - [`@backstage/plugin-techdocs-common` (0.1.0 → 0.1.1)](#backstageplugin-techdocs-common-010--011)
  - [`@backstage/plugin-techdocs-module-addons-contrib` (1.1.24 → 1.1.25)](#backstageplugin-techdocs-module-addons-contrib-1124--1125)
  - [`@backstage/plugin-user-settings` (0.8.22 → 0.8.23)](#backstageplugin-user-settings-0822--0823)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/plugin-events-backend-module-kafka` (new, [0.1.0](../../changelogs/@backstage/plugin-events-backend-module-kafka.md#010))

#### 0.1.0

##### Minor Changes

- [`b034b9d`](https://github.com/backstage/backstage/commit/b034b9d): Adds a new module `kafka` for plugin-events-backend

  The module introduces the `KafkaConsumerClient` which creates a Kafka client used to establish consumer connections. It also provides the `KafkaConsumingEventPublisher`, a consumer that subscribes to configured Kafka topics and publishes received messages to the Event Service.

### `@backstage/plugin-mcp-actions-backend` (new, [0.1.0](../../changelogs/@backstage/plugin-mcp-actions-backend.md#010))

#### 0.1.0

##### Minor Changes

- [`4ed0fb6`](https://github.com/backstage/backstage/commit/4ed0fb6): Initial implementation of an `mcp-actions` backend

## Breaking changes

### `@backstage/canon` (0.4.0 → [0.5.0](../../changelogs/@backstage/canon.md#050))

#### 0.5.0

##### Minor Changes

- [`621fac9`](https://github.com/backstage/backstage/commit/621fac9): We are updating the default size of the Button component in Canon to be small instead of medium.
- [`a842554`](https://github.com/backstage/backstage/commit/a842554): We set the default size for IconButton in Canon to be small instead of medium.
- [`35fd51d`](https://github.com/backstage/backstage/commit/35fd51d): Move TextField component to use react Aria under the hood. Introducing a new FieldLabel component to help build custom fields.
- [`78204a2`](https://github.com/backstage/backstage/commit/78204a2): **Breaking** We are adding a new as prop on the Heading and Text component to make it easier to change the component tag. We are removing the render prop in favour of the as prop.
- [`c49e335`](https://github.com/backstage/backstage/commit/c49e335): TextField in Canon now has multiple label sizes as well as the capacity to hide label and description but still make them available for screen readers.
- [`24b45ef`](https://github.com/backstage/backstage/commit/24b45ef): Fixes spacing props on layout components and aligned on naming for the Grid component. You should now call the Grid root component using <Grid.Root /> instead of just <Grid />.

##### Patch Changes

- [`44df879`](https://github.com/backstage/backstage/commit/44df879): Add min-width: 0; by default on every Flex components in Canon to help support truncated texts inside flex elements.
- [`ee6ffe6`](https://github.com/backstage/backstage/commit/ee6ffe6): Fix styling for the title4 prop on the Heading component in Canon.
- [`f2f814a`](https://github.com/backstage/backstage/commit/f2f814a): Added a render prop to the Button component in Canon to use it as a link.
- [`98f02a6`](https://github.com/backstage/backstage/commit/98f02a6): Add new Switch component in Canon.
- [`c94f8e0`](https://github.com/backstage/backstage/commit/c94f8e0): The filter input in menu comboboxes should now always use the full width of the menu it's in.
- [`269316d`](https://github.com/backstage/backstage/commit/269316d): Remove leftover console.log from Container component.

### `@backstage/cli` (0.32.1 → [0.33.0](../../changelogs/@backstage/cli.md#0330))

#### 0.33.0

##### Minor Changes

- [`eef0e83`](https://github.com/backstage/backstage/commit/eef0e83): Internal update to promote the modular CLI entrypoint to stable.

##### Patch Changes

- [`d07fe35`](https://github.com/backstage/backstage/commit/d07fe35): Added user feedback when opening config docs in browser. The command now clearly indicates what it's doing and provides fallback instructions if the browser fails to open.
- [`ce70439`](https://github.com/backstage/backstage/commit/ce70439): The `BACKSTAGE_CLI_EXPERIMENTAL_BUILD_CACHE` flag has been removed. Existing users are encouraged to switch to `EXPERIMENTAL_RSPACK` instead.
- [`1d8f00b`](https://github.com/backstage/backstage/commit/1d8f00b): Switched to using the `ModuleFederationPlugin` from `@module-federation/enhanced/rspack` for Rspack, rather than the built-in one.
- [`2b9633f`](https://github.com/backstage/backstage/commit/2b9633f): The experimental `FORCE_REACT_DEVELOPMENT` flag has been removed.
- [`d8c4a54`](https://github.com/backstage/backstage/commit/d8c4a54): Only use the caching Jest module loader for frontend packages in order to avoid breaking real ESM module imports.
- [`d6d63c7`](https://github.com/backstage/backstage/commit/d6d63c7): Updating the scaffolder action boilerplate to use new `zod` schema
- [`e36e855`](https://github.com/backstage/backstage/commit/e36e855): Added `backstage.pluginId` field in `package.json` to all default plugin package templates for the `new` command.
- [`1bab255`](https://github.com/backstage/backstage/commit/1bab255): Internal refactor to combine alpha `build` and `start` modules.
- [`713e957`](https://github.com/backstage/backstage/commit/713e957): fix: merge eslint reports when using json format
- [`8a0164c`](https://github.com/backstage/backstage/commit/8a0164c): Fix an issue where some commands were not usable because of missing dist files

### `@backstage/plugin-catalog` (1.30.0 → [1.31.0](../../changelogs/@backstage/plugin-catalog.md#1310))

#### 1.31.0

##### Minor Changes

- [`406acb6`](https://github.com/backstage/backstage/commit/406acb6): Add support to customize the about card icon links via `EntityIconLinkBlueprint` and provide a default catalog view catalog source, launch scaffolder template and read techdocs docs icon links extensions.

  **BREAKING ALPHA**

  The `Scaffolder` launch template and `TechDocs` read documentation icons have been extracted from the default `Catalog` about card links and are now provided respectively by the `Scaffolder` and `TechDocs` plugins in the new frontend system. It means that they will not be available unless you install the `TechDocs` and `Scaffolder` plugins. Also If you are using translation for these icon link titles other than the default, you should now translate them using the scaffolder translation reference or the TechDocs translation reference (the translation keys are still the same, `aboutCard.viewTechdocs` and `aboutCard.launchTemplate`).

- [`ec7b35d`](https://github.com/backstage/backstage/commit/ec7b35d): Introduced `backstage.io/techdocs-entity-path` annotation which allows deep linking into another entities TechDocs in conjunction with `backstage.io/techdocs-entity`.

##### Patch Changes

- [`18c64e9`](https://github.com/backstage/backstage/commit/18c64e9): Added the `info.packageJson` option to the plugin instance for the new frontend system.

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.4.8 → [0.5.0](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#050))

#### 0.5.0

##### Minor Changes

- [`8a150bf`](https://github.com/backstage/backstage/commit/8a150bf): **BREAKING**: `BitbucketCloudEntityProvider` now accepts a `CatalogService` instead of a `CatalogApi`.

### `@backstage/plugin-catalog-backend-module-gitlab` (0.6.6 → [0.7.0](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#070))

#### 0.7.0

##### Minor Changes

- [`42bb3b8`](https://github.com/backstage/backstage/commit/42bb3b8): **BREAKING CHANGE**: User and Group discovery will default to ingesting all users in sub groups that belong to the specified root group in config. Disable by setting `restrictUsersToGroup: true` in app-config under your module settings.

##### Patch Changes

- [`57a0bad`](https://github.com/backstage/backstage/commit/57a0bad): Implement retry for GitLab API calls to handle rate limiting

### `@backstage/plugin-scaffolder-backend` (1.33.0 → [2.0.0](../../changelogs/@backstage/plugin-scaffolder-backend.md#200))

#### 2.0.0

##### Major Changes

- [`33394db`](https://github.com/backstage/backstage/commit/33394db): **BREAKING CHANGES**

  Removal of deprecated re-exports from module packages.

  The following functions have been re-exported from the `scaffolder-backend` plugin for quite some time, and now it's time to clean them up. They've been moved as follows:

  - `createPublishAzureAction` should be imported from `@backstage/plugin-scaffolder-backend-module-azure` instead.

  - `createPublishBitbucketCloudAction` should be imported from `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` instead.

  - `createPublishBitbucketServerAction` and `createPublishBitbucketServerPullRequestAction` can be imported from `@backstage/plugin-scaffolder-backend-module-bitbucket-server` instead.

  - `createPublishBitbucketAction` should be imported from `@backstage/plugin-scaffolder-backend-module-bitbucket` instead.

  - `createPublishGerritAction` and `createPublishGerritReviewAction` can be imported from `@backstage/plugin-scaffolder-backend-module-gerrit` instead.

  - `createGithubActionsDispatchAction`, `createGithubDeployKeyAction`, `createGithubEnvironmentAction`, `createGithubIssuesLabelAction`, `CreateGithubPullRequestActionOptions`, `createGithubRepoCreateAction`, `createGithubRepoPushAction`, `createGithubWebhookAction`, and `createPublishGithubAction` can be imported from `@backstage/plugin-scaffolder-backend-module-github` instead.

  - `createPublishGitlabAction` should be imported from `@backstage/plugin-scaffolder-backend-module-gitlab` instead.

  - `ActionContext`. `createTemplateAction`, `executeShellCommand`, `ExecuteShellCommandOptions`, `fetchContents`, `TaskSecrets`, and `TemplateAction` should be imported from `@backstage/plugin-scaffolder-node` instead.

  - `ScaffolderEntitiesProcessor` should be imported from `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` instead.

- [`a8fcf04`](https://github.com/backstage/backstage/commit/a8fcf04): **BREAKING ALPHA**: The `/alpha` export no longer exports the plugin. Please use `import('@backstage/plugin-scaffolder-backend')` instead as this has been removed.

  **BREAKING CHANGES**: The old `createRouter` function which was used in the old backend system has been removed along with the `RouterOptions` type.

- [`73b94d7`](https://github.com/backstage/backstage/commit/73b94d7): **BREAKING CHANGES**

  The following functions have been re-exported from the `scaffolder-backend` plugin for quite some time, and now it's time to clean them up. They've been moved as follows:

  - `SerializedTask`, `SerializedTaskEvent`, `TaskBroker`, `TaskBrokerDispatchOptions`, `TaskBrokerDispatchResult`, `TaskCompletionState`, `TaskContext`, `TaskEventType`, `TaskStatus`, `TemplateFilter`, and `TemplateGlobal` should be imported from `@backstage/plugin-scaffolder-node` instead.

  - The deprecated `copyWithoutRender` option has been removed from `fetch:template` action. You should rename the option to `copyWithoutTemplating` instead.

- [`5863b04`](https://github.com/backstage/backstage/commit/5863b04): **BREAKING CHANGES**

  - The `createBuiltinActions` method has been removed, as this should no longer be needed with the new backend system route, and was only useful when passing the default list of actions again in the old backend system. You should be able to rely on the default behaviour of the new backend system which is to merge the actions.

  - The `createCatalogRegisterAction` and `createFetchCatalogEntityAction` actions no longer require an `AuthService`, and now accepts a `CatalogService` instead of `CatalogClient`.

  Unless you're providing your own override action to the default, this should be a non-breaking change.

  You can migrate using the following if you're getting typescript errors:

  ```ts
  import { catalogServiceRef } from '@backstage/plugin-catalog-node';
  import { scaffolderActionsExtensionPoint } from '@backstage/plugin-scaffolder-node/alpha';

  export const myModule = createBackendModule({
    pluginId: 'scaffolder',
    moduleId: 'test',
    register({ registerInit }) {
      registerInit({
        deps: {
          scaffolder: scaffolderActionsExtensionPoint,
          catalog: catalogServiceRef,
        },
        async init({ scaffolder, catalog }) {
          scaffolder.addActions(
            createCatalogRegisterAction({
              catalog,
            }),
            createFetchCatalogEntityAction({
              catalog,
              integrations,
            }),
          );
        },
      });
    },
  });
  ```

##### Minor Changes

- [`73b94d7`](https://github.com/backstage/backstage/commit/73b94d7): **DEPRECATIONS**

  The following types and implementations have been deprecated, either because they're no longer relevant, or because upcoming changes to the `scaffolder-backend` after `2.0.0` will influence the changes to these API surfaces.

  - `CreateWorkerOptions`
  - `DatabaseTaskStore`
  - `DatabaseTaskStoreOptions`
  - `TaskManager`
  - `TaskStoreCreateTaskOptions`
  - `TaskStoreCreateTaskResult`
  - `TaskStoreEmitOptions`
  - `TaskStoreListEventsOptions`
  - `TaskStoreRecoverTaskOptions`
  - `TaskStoreShutDownTaskOptions`

  There is no current path off deprecation, these types are going to be removed and rethought with a better way to define workers in the new backend system.

##### Patch Changes

- [`89a941d`](https://github.com/backstage/backstage/commit/89a941d): Migrating to latest action format
- [`023629e`](https://github.com/backstage/backstage/commit/023629e): Enable usage of secrets within 'each' step of software templates. For example, you can now structure your `each` step like this:

  ```
  each:
    [
      { name: "Service1", token: "${{ secrets.token1 }}" },
      { name: "Service2", token: "${{ secrets.token2 }}" },
    ]
  ```

- [`e92e481`](https://github.com/backstage/backstage/commit/e92e481): Add tests for Scaffolder

### `@backstage/plugin-scaffolder-backend-module-github` (0.7.1 → [0.8.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#080))

#### 0.8.0

##### Minor Changes

- [`5863b04`](https://github.com/backstage/backstage/commit/5863b04): **BREAKING CHANGES**

  The `createGithubEnvironmentAction` action no longer requires an `AuthService`, and now accepts a `CatalogService` instead of `CatalogClient`.

  Unless you're providing your own override action to the default, this should be a non-breaking change.

  You can migrate using the following if you're getting typescript errors:

  ```ts
  import { catalogServiceRef } from '@backstage/plugin-catalog-node';
  import { scaffolderActionsExtensionPoint } from '@backstage/plugin-scaffolder-node/alpha';

  export const myModule = createBackendModule({
    pluginId: 'scaffolder',
    moduleId: 'test',
    register({ registerInit }) {
      registerInit({
        deps: {
          scaffolder: scaffolderActionsExtensionPoint,
          catalog: catalogServiceRef,
        },
        async init({ scaffolder, catalog }) {
          scaffolder.addActions(
            createGithubEnvironmentAction({
              catalog,
            }),
          );
        },
      });
    },
  });
  ```

##### Patch Changes

- [`575c76b`](https://github.com/backstage/backstage/commit/575c76b): Migrate to using new actions

### `@backstage/plugin-scaffolder-node` (0.8.2 → [0.9.0](../../changelogs/@backstage/plugin-scaffolder-node.md#090))

#### 0.9.0

##### Minor Changes

- [`5863b04`](https://github.com/backstage/backstage/commit/5863b04): **BREAKING CHANGES**

  The legacy methods to define `createTemplateActions` have been replaced with the new native `zod` approaches for defining input and output schemas.

  You can migrate actions that look like the following with the below examples:

  ```ts
  // really old legacy json schema
  createTemplateAction<{ repoUrl: string }, { repoOutput: string }>({
    id: 'test',
    schema: {
      input: {
        type: 'object'
        required: ['repoUrl']
        properties: {
          repoUrl: {
            type: 'string',
            description: 'repository url description'
          }
        }
      }
    }
  });

  // old zod method
  createTemplateAction({
    id: 'test'
    schema: {
      input: {
        repoUrl: z.string({ description: 'repository url description' })
      }
    }
  })

  // new method:
  createTemplateAction({
    id: 'test',
    schema: {
      input: {
        repoUrl: z => z.string({ description: 'repository url description' })
      }
    }
  })

  // or for more complex zod types like unions
  createTemplateAction({
    id: 'test',
    schema: {
      input: z => z.object({
        repoUrl: z.string({ description: 'repository url description' })
      })
    }
  })
  ```

  This breaking change also means that `logStream` has been removed entirely from `ActionsContext`, and that the `logger` is now just a `LoggerService` implementation instead. There is no replacement for the `logStream`, if you wish to still keep using a `logStream` we recommend that you create your own stream that writes to `ctx.logger` instead.

##### Patch Changes

- [`e89d7b6`](https://github.com/backstage/backstage/commit/e89d7b6): Use `LoggerService` instead of `Logger`. This is a non-breaking change, as the `LoggerService` is a subset of the `Logger` interface.
- [`9c8ff0c`](https://github.com/backstage/backstage/commit/9c8ff0c): Update pull request creation filter to include .gitignore files in the created pull request

### `@backstage/plugin-scaffolder-node-test-utils` (0.2.2 → [0.3.0](../../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#030))

#### 0.3.0

##### Minor Changes

- [`3cea7ee`](https://github.com/backstage/backstage/commit/3cea7ee): **BREAKING CHANGES**

  Because of the removal of the `logStream` property to the `ActionsContext` this has been removed from the `createMockActionContext` method.

  You can remove this as it's no longer supported in the scaffolder actions.

## 0.x minor version bumps

### `@backstage/backend-defaults` (0.10.0 → [0.11.0](../../changelogs/@backstage/backend-defaults.md#0110))

#### 0.11.0

##### Minor Changes

- [`3ccb7fc`](https://github.com/backstage/backstage/commit/3ccb7fc): Enhanced error handling in the auditor service factory to pass errors as objects. Aligned WinstonRootAuditorService with the default service factory's error handling.

##### Patch Changes

- [`1220cf8`](https://github.com/backstage/backstage/commit/1220cf8): Added new rate limit middleware to allow rate limiting requests to the backend

  If you are using the `configure` callback of the root HTTP router service and do NOT call `applyDefaults()` inside it, please see [the relevant changes](https://github.com/backstage/backstage/pull/28708/files#diff-86ad1b6a694dd250823aee39d410428dd837c9d9a04ca8c33bd1081fbe3f22af) that were made, to see if you want to apply them as well to your custom configuration.
  Rate limiting can be turned on by adding the following configuration to `app-config.yaml`:

  ```yaml
  backend:
    rateLimit:
      window: 6s
      incomingRequestLimit: 100
  ```

  Plugin specific rate limiting can be configured by adding the following configuration to `app-config.yaml`:

  ```yaml
  backend:
    rateLimit:
      global: false # This will disable the global rate limiting
      plugin:
        catalog:
          window: 6s
          incomingRequestLimit: 100
  ```

- [`c999c25`](https://github.com/backstage/backstage/commit/c999c25): Added some default implementations for the experimental `ActionsService` and `ActionsRegistryService` under `/alpha` that allow registration of actions for a particular plugin.

### `@backstage/create-app` (0.6.2 → [0.7.0](../../changelogs/@backstage/create-app.md#070))

#### 0.7.0

##### Minor Changes

- [`30474c4`](https://github.com/backstage/backstage/commit/30474c4): Add .cache directory to shipped gitignore.

##### Patch Changes

- [`d57a6f7`](https://github.com/backstage/backstage/commit/d57a6f7): Bumped create-app version.
- [`f628f44`](https://github.com/backstage/backstage/commit/f628f44): Bumped create-app version.
- [`9c9faf2`](https://github.com/backstage/backstage/commit/9c9faf2): Bumped create-app version.

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.4.1 → [0.5.0](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#050))

#### 0.5.0

##### Minor Changes

- [`eb8b3aa`](https://github.com/backstage/backstage/commit/eb8b3aa): Add validateLocationsExist option to avoid generating locations for catalog-info.yaml files that do not exist in the source repository.

### `@backstage/plugin-catalog-backend-module-github` (0.9.0 → [0.10.0](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#0100))

#### 0.10.0

##### Minor Changes

- [`7c0dfb0`](https://github.com/backstage/backstage/commit/7c0dfb0): GitHub organization now matches in a case-insensitive manner when processing events.

### `@backstage/repo-tools` (0.13.4 → [0.14.0](../../changelogs/@backstage/repo-tools.md#0140))

#### 0.14.0

##### Minor Changes

- [`bf9a173`](https://github.com/backstage/backstage/commit/bf9a173): Add support for caching the per-package output from the `package-docs` command.

##### Patch Changes

- [`4bff5d0`](https://github.com/backstage/backstage/commit/4bff5d0): Fixed a bug where linting would fail with the generated clients when defining top-level `enum` schema values.
- [`2d20024`](https://github.com/backstage/backstage/commit/2d20024): Fix an issue where errors were not printed to console when running `backstage-repo-tools schema openapi generate` without the `--watch` flag.
- [`e643ee4`](https://github.com/backstage/backstage/commit/e643ee4): Add missing highlight language for the `package-docs` command.
- [`c83cd8b`](https://github.com/backstage/backstage/commit/c83cd8b): Fixed some circular or otherwise unclear imports
- [`a372bf1`](https://github.com/backstage/backstage/commit/a372bf1): Updated dependency `@electric-sql/pglite` to `^0.3.0`.

## 0.0.x patch version bumps

### `@backstage/plugin-notifications-common` (0.0.8 → [0.0.9](../../changelogs/@backstage/plugin-notifications-common.md#009))

#### 0.0.9

##### Patch Changes

- [`1fb5f06`](https://github.com/backstage/backstage/commit/1fb5f06): Adds ability for user to turn on/off notifications for specific topics within an origin.

### `@backstage/plugin-signals` (0.0.19 → [0.0.20](../../changelogs/@backstage/plugin-signals.md#0020))

#### 0.0.20

##### Patch Changes

- [`18c64e9`](https://github.com/backstage/backstage/commit/18c64e9): Added the `info.packageJson` option to the plugin instance for the new frontend system.

## Other minor version bumps

### `@backstage/backend-plugin-api` (1.3.1 → [1.4.0](../../changelogs/@backstage/backend-plugin-api.md#140))

#### 1.4.0

##### Minor Changes

- [`664c07a`](https://github.com/backstage/backstage/commit/664c07a): Added `actionsRegistry` and `actions` experimental services to `/alpha` to allow registration of distributed actions from plugins, and the ability to invoke these actions. You can use these services by including them like the following:

  ```ts
  import {
    actionsRegistryServiceRef,
    actionsServiceRef,
  } from '@backstage/backend-plugin-api/alpha';

  createBackendPlugin({
    pluginId: 'test-plugin',
    register({ registerInit }) {
      registerInit({
        deps: {
          actions: actionsServiceRef,
          actionsRegistry: actionsRegistryServiceRef,
        },
        async init({ actions, actionsRegistry }) {
          actionsRegistry.register({
            ...,
          });

          await actions.invoke(...);
        },
      });
    },
  });
  ```

### `@backstage/backend-test-utils` (1.5.0 → [1.6.0](../../changelogs/@backstage/backend-test-utils.md#160))

#### 1.6.0

##### Minor Changes

- [`6dfb7be`](https://github.com/backstage/backstage/commit/6dfb7be): Added `mockServices.permissions()` that can return actual results.
- [`c999c25`](https://github.com/backstage/backstage/commit/c999c25): Added an `actionsRegistryServiceMock` and `actionsServiceMock` to `/alpha` export for the experimental services.

  This allows you to write tests for your actions by doing something similar to the following:

  ```ts
  import { actionsRegistryServiceMock } from '@backstage/backend-test-utils/alpha';

  const mockActionsRegistry = actionsRegistryServiceMock();
  const mockCatalog = catalogServiceMock({
    entities: [
     ...
    ],
  });

  createGetCatalogEntityAction({
    catalog: mockCatalog,
    actionsRegistry: mockActionsRegistry,
  });

  await expect(
    mockActionsRegistry.invoke({
      id: 'test:get-catalog-entity',
      input: { name: 'test' },
    }),
  ).resolves.toEqual(...)
  ```

##### Patch Changes

- [`12c1fd4`](https://github.com/backstage/backstage/commit/12c1fd4): Make the `user` credentials mock behave more like production

### `@backstage/plugin-catalog-backend` (2.0.0 → [2.1.0](../../changelogs/@backstage/plugin-catalog-backend.md#210))

#### 2.1.0

##### Minor Changes

- [`2e7adf0`](https://github.com/backstage/backstage/commit/2e7adf0): Implement the action `get-catalog-entity` with the `ActionsRegistry`

##### Patch Changes

- [`2cac8b0`](https://github.com/backstage/backstage/commit/2cac8b0): You can now specify an optional value when applying the `HAS_LABEL` permission rule, similar to the `HAS_ANNOTATION` permission rule.
- [`c83cd8b`](https://github.com/backstage/backstage/commit/c83cd8b): Fixed some circular or otherwise unclear imports
- [`4654a78`](https://github.com/backstage/backstage/commit/4654a78): Update `refresh_state_references.id` to be a big int

### `@backstage/plugin-catalog-react` (1.18.0 → [1.19.0](../../changelogs/@backstage/plugin-catalog-react.md#1190))

#### 1.19.0

##### Minor Changes

- [`406acb6`](https://github.com/backstage/backstage/commit/406acb6): Introduces a new `EntityIconLinkBlueprint` that customizes the `About` card icon links on the `Catalog` entity page.

  The blueprint currently accepts a `useProps` hook as `param` and this function returns the following props that will be passed to the icon link component:

  | Name       | Description                                         | Type          | Default Value |
  | ---------- | --------------------------------------------------- | ------------- | ------------- |
  | `icon`     | The icon to display.                                | `JSX.Element` | N/A           |
  | `label`    | The label for the element.                          | `string`      | N/A           |
  | `title`    | The title for the element.                          | `string`      | N/A           |
  | `disabled` | Whether the element is disabled.                    | `boolean`     | `false`       |
  | `href`     | The URL to navigate to when the element is clicked. | `string`      | N/A           |
  | `onClick`  | A function to call when the element is clicked.     | `() => void`  | N/A           |

  Here is an usage example:

  ```tsx
  import { EntityIconLinkBlueprint } from '@backstage/plugin-catalog-react/alpha';
  //...

  EntityIconLinkBlueprint.make({
    name: 'my-icon-link',
    params: {
      useProps() {
        const { t } = useTranslationRef(myIconLinkTranslationRef);
        return {
          label: t('myIconLink.label'),
          icon: <MyIconLinkIcon />,
          href: '/my-plugin',
        };
      },
    },
  });
  ```

  Additionally, the `app-config.yaml` file allows you to override some of the default icon link parameters, including `label` and `title` values. Here's how to set them:

  ```yaml
  app:
    extensions:
      - entity-icon-link:my-plugin/my-icon-link:
          config:
            label: 'My Custom Icon Link label'
  ```

  Finally, you can disable all links if you want to hide the About card header completely (useful, for example, when links are displayed on separate cards). The header is hidden when no icon links extensions are enabled.

### `@backstage/plugin-scaffolder` (1.31.0 → [1.32.0](../../changelogs/@backstage/plugin-scaffolder.md#1320))

#### 1.32.0

##### Minor Changes

- [`6c972fe`](https://github.com/backstage/backstage/commit/6c972fe): Added information about the `entityRef` and `taskId` to the analytics events whenever is possible.
- [`3c59ece`](https://github.com/backstage/backstage/commit/3c59ece): **New Frontend System Only:**
  The `Scaffolder` plugin is now responsible for providing an entity icon link extension to launch templates from the catalog entity page.

##### Patch Changes

- [`d781b33`](https://github.com/backstage/backstage/commit/d781b33): render details for composite property schemas
- [`18c64e9`](https://github.com/backstage/backstage/commit/18c64e9): Added the `info.packageJson` option to the plugin instance for the new frontend system.
- [`b00c160`](https://github.com/backstage/backstage/commit/b00c160): Remove React import form notification and scaffolder plugin
- [`95a1d72`](https://github.com/backstage/backstage/commit/95a1d72): Added appropriate message when global templating function metadata is absent.

### `@backstage/plugin-scaffolder-react` (1.16.0 → [1.17.0](../../changelogs/@backstage/plugin-scaffolder-react.md#1170))

#### 1.17.0

##### Minor Changes

- [`6c972fe`](https://github.com/backstage/backstage/commit/6c972fe): Added information about the `entityRef` and `taskId` to the analytics events whenever is possible.

### `@backstage/plugin-techdocs` (1.12.6 → [1.13.0](../../changelogs/@backstage/plugin-techdocs.md#1130))

#### 1.13.0

##### Minor Changes

- [`3c59ece`](https://github.com/backstage/backstage/commit/3c59ece): **New Frontend System Only:**
  The `TechDocs` plugin is now responsible for providing an entity icon link extension to read documentation from the catalog entity page.
- [`ec7b35d`](https://github.com/backstage/backstage/commit/ec7b35d): Introduced `backstage.io/techdocs-entity-path` annotation which allows deep linking into another entities TechDocs in conjunction with `backstage.io/techdocs-entity`.

##### Patch Changes

- [`18c64e9`](https://github.com/backstage/backstage/commit/18c64e9): Added the `info.packageJson` option to the plugin instance for the new frontend system.
- [`9dde3ba`](https://github.com/backstage/backstage/commit/9dde3ba): Improved Keyboard accessibility in techdocs.

### `@backstage/plugin-techdocs-react` (1.2.17 → [1.3.0](../../changelogs/@backstage/plugin-techdocs-react.md#130))

#### 1.3.0

##### Minor Changes

- [`ec7b35d`](https://github.com/backstage/backstage/commit/ec7b35d): Introduced `backstage.io/techdocs-entity-path` annotation which allows deep linking into another entities TechDocs in conjunction with `backstage.io/techdocs-entity`.

## Other patch version bumps

### `@backstage/backend-app-api` (1.2.3 → [1.2.4](../../changelogs/@backstage/backend-app-api.md#124))

#### 1.2.4

##### Patch Changes

- [`bb9a501`](https://github.com/backstage/backstage/commit/bb9a501): Fixed a bug where occasionally the initialization order of multiple modules consuming a single extension point could happen in the wrong order.

### `@backstage/backend-dynamic-feature-service` (0.7.0 → [0.7.1](../../changelogs/@backstage/backend-dynamic-feature-service.md#071))

#### 0.7.1

##### Patch Changes

- [`c83cd8b`](https://github.com/backstage/backstage/commit/c83cd8b): Fixed some circular or otherwise unclear imports

### `@backstage/catalog-client` (1.10.0 → [1.10.1](../../changelogs/@backstage/catalog-client.md#1101))

#### 1.10.1

##### Patch Changes

- [`22fad0d`](https://github.com/backstage/backstage/commit/22fad0d): Fixed `CatalogClient` error responses for `refreshEntity` and `addLocation`.

### `@backstage/core-components` (0.17.2 → [0.17.3](../../changelogs/@backstage/core-components.md#0173))

#### 0.17.3

##### Patch Changes

- [`6232160`](https://github.com/backstage/backstage/commit/6232160): table actions header support i18n

### `@backstage/core-plugin-api` (1.10.7 → [1.10.8](../../changelogs/@backstage/core-plugin-api.md#1108))

#### 1.10.8

##### Patch Changes

- [`c83cd8b`](https://github.com/backstage/backstage/commit/c83cd8b): Fixed some circular or otherwise unclear imports
- [`0169b23`](https://github.com/backstage/backstage/commit/0169b23): Internal tweak to avoid circular dependencies

### `@backstage/eslint-plugin` (0.1.10 → [0.1.11](../../changelogs/@backstage/eslint-plugin.md#0111))

#### 0.1.11

##### Patch Changes

- [`098ef95`](https://github.com/backstage/backstage/commit/098ef95): Fix custom rules package scanning performance.
- [`063b2d3`](https://github.com/backstage/backstage/commit/063b2d3): Added new eslint rule to restrict mixed plugin imports.

  New rule `@backstage/no-mixed-plugin-imports` disallows mixed imports between plugins that are mixing
  the backstage architecture. This rule forces that:

  - No imports from frontend plugins to backend plugins or other frontend plugins.
  - No imports from backend plugins to frontend plugins or other backend plugins.
  - No imports from common plugins to frontend or backend plugins.

  The current recommended configuration is giving a warning for mixed imports. This is to be changed in
  the future to an error so please adjust your workspace accordingly.

### `@backstage/frontend-app-api` (0.11.2 → [0.11.3](../../changelogs/@backstage/frontend-app-api.md#0113))

#### 0.11.3

##### Patch Changes

- [`0169b23`](https://github.com/backstage/backstage/commit/0169b23): Internal tweak to avoid circular dependencies
- [`c38c9e8`](https://github.com/backstage/backstage/commit/c38c9e8): Implemented support for the `plugin.info()` method in specialized apps with a default resolved for `package.json` and `catalog-info.yaml`. The default resolution logic can be overridden via the `pluginInfoResolver` option to `createSpecializedApp`, and plugin-specific overrides can be applied via the new `app.pluginOverrides` key in static configuration.

### `@backstage/frontend-defaults` (0.2.2 → [0.2.3](../../changelogs/@backstage/frontend-defaults.md#023))

#### 0.2.3

##### Patch Changes

- [`fa5650c`](https://github.com/backstage/backstage/commit/fa5650c): Forwarded the new `pluginInfoResolver` option for `createApp`.

### `@backstage/frontend-plugin-api` (0.10.2 → [0.10.3](../../changelogs/@backstage/frontend-plugin-api.md#0103))

#### 0.10.3

##### Patch Changes

- [`0169b23`](https://github.com/backstage/backstage/commit/0169b23): Internal tweak to avoid circular dependencies
- [`9e3868f`](https://github.com/backstage/backstage/commit/9e3868f): Added a new optional `info` option to `createFrontendPlugin` that lets you provide a loaders for different sources of metadata information about the plugin.

  There are two available loaders. The first one is `info.packageJson`, which can be used to point to a `package.json` file for the plugin. This is recommended for any plugin that is defined within its own package, especially all plugins that are published to a package registry. Typical usage looks like this:

  ```ts
  export default createFrontendPlugin({
    pluginId: '...',
    info: {
      packageJson: () => import('../package.json'),
    },
  });
  ```

  The second loader is `info.manifest`, which can be used to point to an opaque plugin manifest. This **MUST ONLY** be used by plugins that are intended for use within a single organization. Plugins that are published to an open package registry should **NOT** use this loader. The loader is useful for adding additional internal metadata associated with the plugin, and it is up to the Backstage app to decide how these manifests are parsed and used. The default manifest parser in an app created with `createApp` from `@backstage/frontend-defaults` is able to parse the default `catalog-info.yaml` format and built-in fields such as `spec.owner`.

  Typical usage looks like this:

  ```ts
  export default createFrontendPlugin({
    pluginId: '...',
    info: {
      manifest: () => import('../catalog-info.yaml'),
    },
  });
  ```

- [`6f48f71`](https://github.com/backstage/backstage/commit/6f48f71): Added a new `useAppNode` hook, which can be used to get a reference to the `AppNode` from by the closest `ExtensionBoundary`.

### `@backstage/plugin-api-docs` (0.12.7 → [0.12.8](../../changelogs/@backstage/plugin-api-docs.md#0128))

#### 0.12.8

##### Patch Changes

- [`18c64e9`](https://github.com/backstage/backstage/commit/18c64e9): Added the `info.packageJson` option to the plugin instance for the new frontend system.

### `@backstage/plugin-app` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-app.md#0110))

#### 0.1.10

##### Patch Changes

- [`18c64e9`](https://github.com/backstage/backstage/commit/18c64e9): Added the `info.packageJson` option to the plugin instance for the new frontend system.

### `@backstage/plugin-app-visualizer` (0.1.19 → [0.1.20](../../changelogs/@backstage/plugin-app-visualizer.md#0120))

#### 0.1.20

##### Patch Changes

- [`18c64e9`](https://github.com/backstage/backstage/commit/18c64e9): Added the `info.packageJson` option to the plugin instance for the new frontend system.

### `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.4.3 → [0.4.4](../../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#044))

#### 0.4.4

##### Patch Changes

- [`c83cd8b`](https://github.com/backstage/backstage/commit/c83cd8b): Fixed some circular or otherwise unclear imports

### `@backstage/plugin-auth-backend-module-okta-provider` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#024))

#### 0.2.4

##### Patch Changes

- [`b25977f`](https://github.com/backstage/backstage/commit/b25977f): Updated dependency `@davidzemon/passport-okta-oauth` to `^0.0.6`.

### `@backstage/plugin-auth-node` (0.6.3 → [0.6.4](../../changelogs/@backstage/plugin-auth-node.md#064))

#### 0.6.4

##### Patch Changes

- [`0169b23`](https://github.com/backstage/backstage/commit/0169b23): Internal tweak to avoid circular dependencies

### `@backstage/plugin-catalog-backend-module-ldap` (0.11.5 → [0.11.6](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0116))

#### 0.11.6

##### Patch Changes

- [`087d51d`](https://github.com/backstage/backstage/commit/087d51d): Export LDAP vendor types and instances for testing custom transformers
- [`f07b0ad`](https://github.com/backstage/backstage/commit/f07b0ad): Added the ability to configure disabling one side of the relations tree with LDAP.

  Groups have a `member` attribute and users have a `memberOf` attribute, however these can drift out of sync in some LDAP installations, leaving weird states in the Catalog as we collate these results together and deduplicate them.

  You can chose to optionally disable one side of these relationships, or even both by setting the respective mapping to `null` in your `app-config.yaml` for your groups and/or users:

  ```yaml
  catalog:
    providers:
      ldapOrg:
        default:
          target: ldaps://ds.example.net
          bind:
            dn: uid=ldap-reader-user,ou=people,ou=example,dc=example,dc=net
            secret: ${LDAP_SECRET}
          users:
            - dn: ou=people,ou=example,dc=example,dc=net
              options:
                filter: (uid=*)
              map:
                # this ensures that outgoing memberships from users is ignored
                memberOf: null
          groups:
            - dn: ou=access,ou=groups,ou=example,dc=example,dc=net
              options:
                filter: (&(objectClass=some-group-class)(!(groupType=email)))
              map:
                description: l
              set:
                metadata.customField: 'hello'
              map:
                # this ensures that outgoing memberships from groups is ignored
                members: null
  ```

### `@backstage/plugin-catalog-graph` (0.4.19 → [0.4.20](../../changelogs/@backstage/plugin-catalog-graph.md#0420))

#### 0.4.20

##### Patch Changes

- [`18c64e9`](https://github.com/backstage/backstage/commit/18c64e9): Added the `info.packageJson` option to the plugin instance for the new frontend system.

### `@backstage/plugin-catalog-import` (0.13.0 → [0.13.1](../../changelogs/@backstage/plugin-catalog-import.md#0131))

#### 0.13.1

##### Patch Changes

- [`18c64e9`](https://github.com/backstage/backstage/commit/18c64e9): Added the `info.packageJson` option to the plugin instance for the new frontend system.
- [`5d7c539`](https://github.com/backstage/backstage/commit/5d7c539): Catalog import plugin full support i18n

### `@backstage/plugin-catalog-node` (1.17.0 → [1.17.1](../../changelogs/@backstage/plugin-catalog-node.md#1171))

#### 1.17.1

##### Patch Changes

- [`0169b23`](https://github.com/backstage/backstage/commit/0169b23): Internal tweak to avoid circular dependencies

### `@backstage/plugin-catalog-unprocessed-entities` (0.2.17 → [0.2.18](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#0218))

#### 0.2.18

##### Patch Changes

- [`18c64e9`](https://github.com/backstage/backstage/commit/18c64e9): Added the `info.packageJson` option to the plugin instance for the new frontend system.

### `@backstage/plugin-devtools` (0.1.27 → [0.1.28](../../changelogs/@backstage/plugin-devtools.md#0128))

#### 0.1.28

##### Patch Changes

- [`18c64e9`](https://github.com/backstage/backstage/commit/18c64e9): Added the `info.packageJson` option to the plugin instance for the new frontend system.

### `@backstage/plugin-devtools-backend` (0.5.5 → [0.5.6](../../changelogs/@backstage/plugin-devtools-backend.md#056))

#### 0.5.6

##### Patch Changes

- [`9a99735`](https://github.com/backstage/backstage/commit/9a99735): Removed the usage of `permissionIntegrationRouter` in favor of using the new `coreServices.permissionsRegistry`

### `@backstage/plugin-events-backend` (0.5.2 → [0.5.3](../../changelogs/@backstage/plugin-events-backend.md#053))

#### 0.5.3

##### Patch Changes

- [`c83cd8b`](https://github.com/backstage/backstage/commit/c83cd8b): Fixed some circular or otherwise unclear imports

### `@backstage/plugin-events-backend-module-google-pubsub` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-events-backend-module-google-pubsub.md#011))

#### 0.1.1

##### Patch Changes

- [`f983e99`](https://github.com/backstage/backstage/commit/f983e99): Add an `EventConsumingGooglePubSubPublisher`, for pushing Backstage events to pubsub

### `@backstage/plugin-home` (0.8.8 → [0.8.9](../../changelogs/@backstage/plugin-home.md#089))

#### 0.8.9

##### Patch Changes

- [`18c64e9`](https://github.com/backstage/backstage/commit/18c64e9): Added the `info.packageJson` option to the plugin instance for the new frontend system.
- [`0ebad54`](https://github.com/backstage/backstage/commit/0ebad54): Fixed the `WelcomeTitle` to properly default to the previous value of `inherit`
- [`cef60db`](https://github.com/backstage/backstage/commit/cef60db): Home plugin support i18n

### `@backstage/plugin-home-react` (0.1.26 → [0.1.27](../../changelogs/@backstage/plugin-home-react.md#0127))

#### 0.1.27

##### Patch Changes

- [`c83cd8b`](https://github.com/backstage/backstage/commit/c83cd8b): Fixed some circular or otherwise unclear imports
- [`cef60db`](https://github.com/backstage/backstage/commit/cef60db): Home plugin support i18n

### `@backstage/plugin-kubernetes` (0.12.7 → [0.12.8](../../changelogs/@backstage/plugin-kubernetes.md#0128))

#### 0.12.8

##### Patch Changes

- [`18c64e9`](https://github.com/backstage/backstage/commit/18c64e9): Added the `info.packageJson` option to the plugin instance for the new frontend system.
- [`3ea5d1b`](https://github.com/backstage/backstage/commit/3ea5d1b): chore(deps): Update deprecated xterm to new package under @xterm

### `@backstage/plugin-kubernetes-react` (0.5.7 → [0.5.8](../../changelogs/@backstage/plugin-kubernetes-react.md#058))

#### 0.5.8

##### Patch Changes

- [`3ea5d1b`](https://github.com/backstage/backstage/commit/3ea5d1b): chore(deps): Update deprecated xterm to new package under @xterm

### `@backstage/plugin-notifications` (0.5.5 → [0.5.6](../../changelogs/@backstage/plugin-notifications.md#056))

#### 0.5.6

##### Patch Changes

- [`18c64e9`](https://github.com/backstage/backstage/commit/18c64e9): Added the `info.packageJson` option to the plugin instance for the new frontend system.
- [`b00c160`](https://github.com/backstage/backstage/commit/b00c160): Remove React import form notification and scaffolder plugin
- [`1fb5f06`](https://github.com/backstage/backstage/commit/1fb5f06): Adds ability for user to turn on/off notifications for specific topics within an origin.

### `@backstage/plugin-notifications-backend` (0.5.6 → [0.5.7](../../changelogs/@backstage/plugin-notifications-backend.md#057))

#### 0.5.7

##### Patch Changes

- [`41d4d6e`](https://github.com/backstage/backstage/commit/41d4d6e): Notifications are now automatically deleted after 1 year by default.

  There is a new scheduled task that runs every 24 hours to delete notifications older than 1 year.
  This can be configured by setting the `notifications.retention` in the `app-config.yaml` file.

  ```yaml
  notifications:
    retention: 1y
  ```

  If the retention is set to false, notifications will not be automatically deleted.

- [`8a150bf`](https://github.com/backstage/backstage/commit/8a150bf): Internal changes to switch to the non-alpha `catalogServiceRef`
- [`1fb5f06`](https://github.com/backstage/backstage/commit/1fb5f06): Adds ability for user to turn on/off notifications for specific topics within an origin.
- [`ef9ab82`](https://github.com/backstage/backstage/commit/ef9ab82): Notifications API will now return user as null always for broadcast notifications

### `@backstage/plugin-notifications-backend-module-email` (0.3.9 → [0.3.10](../../changelogs/@backstage/plugin-notifications-backend-module-email.md#0310))

#### 0.3.10

##### Patch Changes

- [`8a150bf`](https://github.com/backstage/backstage/commit/8a150bf): Internal changes to switch to the non-alpha `catalogServiceRef`

### `@backstage/plugin-org` (0.6.39 → [0.6.40](../../changelogs/@backstage/plugin-org.md#0640))

#### 0.6.40

##### Patch Changes

- [`18c64e9`](https://github.com/backstage/backstage/commit/18c64e9): Added the `info.packageJson` option to the plugin instance for the new frontend system.
- [`4fe364f`](https://github.com/backstage/backstage/commit/4fe364f): Org plugin support i18n

### `@backstage/plugin-scaffolder-backend-module-azure` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#0210))

#### 0.2.10

##### Patch Changes

- [`e89d7b6`](https://github.com/backstage/backstage/commit/e89d7b6): Migrating `azure` actions to using the new `zod` schema format

### `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.3.10 → [0.3.11](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket.md#0311))

#### 0.3.11

##### Patch Changes

- [`7f710d2`](https://github.com/backstage/backstage/commit/7f710d2): Migrating `bitbucket` actions to use the new `zod` format

### `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#0210))

#### 0.2.10

##### Patch Changes

- [`ca9fdc0`](https://github.com/backstage/backstage/commit/ca9fdc0): Migrate `bitbucket-cloud` to new actions format
- [`9c8ff0c`](https://github.com/backstage/backstage/commit/9c8ff0c): Update pull request creation filter to include .gitignore files in the created pull request
- [`280611d`](https://github.com/backstage/backstage/commit/280611d): Fix `bitbucketCloudBranchRestrictions` API calls to accept null to prevent 400 errors for some branch restriction kinds defined.

### `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#0210))

#### 0.2.10

##### Patch Changes

- [`d8169fc`](https://github.com/backstage/backstage/commit/d8169fc): Migrate the actions to the new format
- [`9c8ff0c`](https://github.com/backstage/backstage/commit/9c8ff0c): Update pull request creation filter to include .gitignore files in the created pull request

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.9 → [0.3.10](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#0310))

#### 0.3.10

##### Patch Changes

- [`4a86bca`](https://github.com/backstage/backstage/commit/4a86bca): Migrate actions to new format

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.10 → [0.3.11](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0311))

#### 0.3.11

##### Patch Changes

- [`0b2bbf1`](https://github.com/backstage/backstage/commit/0b2bbf1): Migrate using new actions format

### `@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#0210))

#### 0.2.10

##### Patch Changes

- [`e24b29b`](https://github.com/backstage/backstage/commit/e24b29b): Migrating to use new format for actions

### `@backstage/plugin-scaffolder-backend-module-gitea` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#0210))

#### 0.2.10

##### Patch Changes

- [`ed41017`](https://github.com/backstage/backstage/commit/ed41017): Migrate to new actions format

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.9.1 → [0.9.2](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#092))

#### 0.9.2

##### Patch Changes

- [`063b2d3`](https://github.com/backstage/backstage/commit/063b2d3): Fixed dependency to frontend package from tests
- [`a296637`](https://github.com/backstage/backstage/commit/a296637): Migrate to new action format
- [`3d6493a`](https://github.com/backstage/backstage/commit/3d6493a): Support merge request labels in publish:gitlab:merge-request

### `@backstage/plugin-scaffolder-backend-module-notifications` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-scaffolder-backend-module-notifications.md#0111))

#### 0.1.11

##### Patch Changes

- [`1fb5f06`](https://github.com/backstage/backstage/commit/1fb5f06): Adds ability for user to turn on/off notifications for specific topics within an origin.
- [`3f56115`](https://github.com/backstage/backstage/commit/3f56115): Removed `octokit` dependency as it was not being used

### `@backstage/plugin-scaffolder-backend-module-rails` (0.5.9 → [0.5.10](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0510))

#### 0.5.10

##### Patch Changes

- [`a579693`](https://github.com/backstage/backstage/commit/a579693): Migrate to new actions format

### `@backstage/plugin-scaffolder-backend-module-sentry` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#0210))

#### 0.2.10

##### Patch Changes

- [`6c6fb4a`](https://github.com/backstage/backstage/commit/6c6fb4a): Migrate to new actions format

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.10 → [0.4.11](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0411))

#### 0.4.11

##### Patch Changes

- [`b392a34`](https://github.com/backstage/backstage/commit/b392a34): Migrate to new actions format

### `@backstage/plugin-search` (1.4.26 → [1.4.27](../../changelogs/@backstage/plugin-search.md#1427))

#### 1.4.27

##### Patch Changes

- [`18c64e9`](https://github.com/backstage/backstage/commit/18c64e9): Added the `info.packageJson` option to the plugin instance for the new frontend system.

### `@backstage/plugin-search-backend` (2.0.2 → [2.0.3](../../changelogs/@backstage/plugin-search-backend.md#203))

#### 2.0.3

##### Patch Changes

- [`c83cd8b`](https://github.com/backstage/backstage/commit/c83cd8b): Fixed some circular or otherwise unclear imports

### `@backstage/plugin-search-backend-module-techdocs` (0.4.2 → [0.4.3](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#043))

#### 0.4.3

##### Patch Changes

- [`b47ec38`](https://github.com/backstage/backstage/commit/b47ec38): Exports the default document collator for use in document transformation during search indexing.

### `@backstage/plugin-search-react` (1.9.0 → [1.9.1](../../changelogs/@backstage/plugin-search-react.md#191))

#### 1.9.1

##### Patch Changes

- [`869fa46`](https://github.com/backstage/backstage/commit/869fa46): SearchBar clear button support i18n

### `@backstage/plugin-techdocs-common` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-techdocs-common.md#011))

#### 0.1.1

##### Patch Changes

- [`ec7b35d`](https://github.com/backstage/backstage/commit/ec7b35d): Introduced `backstage.io/techdocs-entity-path` annotation which allows deep linking into another entities TechDocs in conjunction with `backstage.io/techdocs-entity`.

### `@backstage/plugin-techdocs-module-addons-contrib` (1.1.24 → [1.1.25](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1125))

#### 1.1.25

##### Patch Changes

- [`9dde3ba`](https://github.com/backstage/backstage/commit/9dde3ba): Improved Keyboard accessibility in techdocs.

### `@backstage/plugin-user-settings` (0.8.22 → [0.8.23](../../changelogs/@backstage/plugin-user-settings.md#0823))

#### 0.8.23

##### Patch Changes

- [`18c64e9`](https://github.com/backstage/backstage/commit/18c64e9): Added the `info.packageJson` option to the plugin instance for the new frontend system.
- [`ab6d3dd`](https://github.com/backstage/backstage/commit/ab6d3dd): Add some translation to user-setting plugin
- [`c83cd8b`](https://github.com/backstage/backstage/commit/c83cd8b): Fixed some circular or otherwise unclear imports

## Excluded dependency updates

- `@backstage/app-defaults` (1.6.2 → [1.6.3](../../changelogs/@backstage/app-defaults.md#163))
- `@backstage/backend-openapi-utils` (0.5.3 → [0.5.4](../../changelogs/@backstage/backend-openapi-utils.md#054))
- `@backstage/core-app-api` (1.17.0 → [1.17.1](../../changelogs/@backstage/core-app-api.md#1171))
- `@backstage/core-compat-api` (0.4.2 → [0.4.3](../../changelogs/@backstage/core-compat-api.md#043))
- `@backstage/dev-utils` (1.1.10 → [1.1.11](../../changelogs/@backstage/dev-utils.md#1111))
- `@backstage/frontend-dynamic-feature-loader` (0.1.1 → [0.1.2](../../changelogs/@backstage/frontend-dynamic-feature-loader.md#012))
- `@backstage/frontend-test-utils` (0.3.2 → [0.3.3](../../changelogs/@backstage/frontend-test-utils.md#033))
- `@backstage/integration-react` (1.2.7 → [1.2.8](../../changelogs/@backstage/integration-react.md#128))
- `@backstage/plugin-app-backend` (0.5.2 → [0.5.3](../../changelogs/@backstage/plugin-app-backend.md#053))
- `@backstage/plugin-app-node` (0.1.33 → [0.1.34](../../changelogs/@backstage/plugin-app-node.md#0134))
- `@backstage/plugin-auth-backend` (0.25.0 → [0.25.1](../../changelogs/@backstage/plugin-auth-backend.md#0251))
- `@backstage/plugin-auth-backend-module-atlassian-provider` (0.4.3 → [0.4.4](../../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#044))
- `@backstage/plugin-auth-backend-module-auth0-provider` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-auth-backend-module-auth0-provider.md#024))
- `@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-auth-backend-module-azure-easyauth-provider.md#029))
- `@backstage/plugin-auth-backend-module-bitbucket-provider` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-provider.md#034))
- `@backstage/plugin-auth-backend-module-bitbucket-server-provider` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-server-provider.md#024))
- `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.4.3 → [0.4.4](../../changelogs/@backstage/plugin-auth-backend-module-cloudflare-access-provider.md#044))
- `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.4.3 → [0.4.4](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#044))
- `@backstage/plugin-auth-backend-module-github-provider` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#034))
- `@backstage/plugin-auth-backend-module-gitlab-provider` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#034))
- `@backstage/plugin-auth-backend-module-google-provider` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#034))
- `@backstage/plugin-auth-backend-module-guest-provider` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-auth-backend-module-guest-provider.md#029))
- `@backstage/plugin-auth-backend-module-microsoft-provider` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#034))
- `@backstage/plugin-auth-backend-module-oauth2-provider` (0.4.3 → [0.4.4](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#044))
- `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#029))
- `@backstage/plugin-auth-backend-module-oidc-provider` (0.4.3 → [0.4.4](../../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#044))
- `@backstage/plugin-auth-backend-module-onelogin-provider` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-auth-backend-module-onelogin-provider.md#034))
- `@backstage/plugin-auth-backend-module-pinniped-provider` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#034))
- `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.5.3 → [0.5.4](../../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#054))
- `@backstage/plugin-auth-react` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-auth-react.md#0116))
- `@backstage/plugin-catalog-backend-module-aws` (0.4.11 → [0.4.12](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#0412))
- `@backstage/plugin-catalog-backend-module-azure` (0.3.5 → [0.3.6](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#036))
- `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.5.2 → [0.5.3](../../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#053))
- `@backstage/plugin-catalog-backend-module-gcp` (0.3.8 → [0.3.9](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#039))
- `@backstage/plugin-catalog-backend-module-gerrit` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#033))
- `@backstage/plugin-catalog-backend-module-gitea` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-catalog-backend-module-gitea.md#011))
- `@backstage/plugin-catalog-backend-module-github-org` (0.3.10 → [0.3.11](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#0311))
- `@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab-org.md#0210))
- `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.7.0 → [0.7.1](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#071))
- `@backstage/plugin-catalog-backend-module-logs` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-catalog-backend-module-logs.md#0111))
- `@backstage/plugin-catalog-backend-module-msgraph` (0.7.0 → [0.7.1](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#071))
- `@backstage/plugin-catalog-backend-module-openapi` (0.2.10 → [0.2.11](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0211))
- `@backstage/plugin-catalog-backend-module-puppetdb` (0.2.10 → [0.2.11](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0211))
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#029))
- `@backstage/plugin-catalog-backend-module-unprocessed` (0.6.0 → [0.6.1](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#061))
- `@backstage/plugin-config-schema` (0.1.68 → [0.1.69](../../changelogs/@backstage/plugin-config-schema.md#0169))
- `@backstage/plugin-events-backend-module-aws-sqs` (0.4.11 → [0.4.12](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#0412))
- `@backstage/plugin-events-backend-module-azure` (0.2.20 → [0.2.21](../../changelogs/@backstage/plugin-events-backend-module-azure.md#0221))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.20 → [0.2.21](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0221))
- `@backstage/plugin-events-backend-module-bitbucket-server` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-server.md#012))
- `@backstage/plugin-events-backend-module-gerrit` (0.2.20 → [0.2.21](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0221))
- `@backstage/plugin-events-backend-module-github` (0.4.0 → [0.4.1](../../changelogs/@backstage/plugin-events-backend-module-github.md#041))
- `@backstage/plugin-events-backend-module-gitlab` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#032))
- `@backstage/plugin-events-backend-test-utils` (0.1.44 → [0.1.45](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0145))
- `@backstage/plugin-events-node` (0.4.11 → [0.4.12](../../changelogs/@backstage/plugin-events-node.md#0412))
- `@backstage/plugin-gateway-backend` (1.0.1 → [1.0.2](../../changelogs/@backstage/plugin-gateway-backend.md#102))
- `@backstage/plugin-kubernetes-backend` (0.19.6 → [0.19.7](../../changelogs/@backstage/plugin-kubernetes-backend.md#0197))
- `@backstage/plugin-kubernetes-cluster` (0.0.25 → [0.0.26](../../changelogs/@backstage/plugin-kubernetes-cluster.md#0026))
- `@backstage/plugin-kubernetes-node` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-kubernetes-node.md#031))
- `@backstage/plugin-notifications-backend-module-slack` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-notifications-backend-module-slack.md#012))
- `@backstage/plugin-notifications-node` (0.2.15 → [0.2.16](../../changelogs/@backstage/plugin-notifications-node.md#0216))
- `@backstage/plugin-org-react` (0.1.38 → [0.1.39](../../changelogs/@backstage/plugin-org-react.md#0139))
- `@backstage/plugin-permission-backend` (0.7.0 → [0.7.1](../../changelogs/@backstage/plugin-permission-backend.md#071))
- `@backstage/plugin-permission-backend-module-allow-all-policy` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#029))
- `@backstage/plugin-permission-node` (0.10.0 → [0.10.1](../../changelogs/@backstage/plugin-permission-node.md#0101))
- `@backstage/plugin-permission-react` (0.4.34 → [0.4.35](../../changelogs/@backstage/plugin-permission-react.md#0435))
- `@backstage/plugin-proxy-backend` (0.6.2 → [0.6.3](../../changelogs/@backstage/plugin-proxy-backend.md#063))
- `@backstage/plugin-proxy-node` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-proxy-node.md#015))
- `@backstage/plugin-scaffolder-backend-module-gcp` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-scaffolder-backend-module-gcp.md#0210))
- `@backstage/plugin-search-backend-module-catalog` (0.3.4 → [0.3.5](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#035))
- `@backstage/plugin-search-backend-module-elasticsearch` (1.7.2 → [1.7.3](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#173))
- `@backstage/plugin-search-backend-module-explore` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-search-backend-module-explore.md#033))
- `@backstage/plugin-search-backend-module-pg` (0.5.44 → [0.5.45](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0545))
- `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.3.9 → [0.3.10](../../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#0310))
- `@backstage/plugin-search-backend-node` (1.3.11 → [1.3.12](../../changelogs/@backstage/plugin-search-backend-node.md#1312))
- `@backstage/plugin-signals-backend` (0.3.4 → [0.3.5](../../changelogs/@backstage/plugin-signals-backend.md#035))
- `@backstage/plugin-signals-node` (0.1.20 → [0.1.21](../../changelogs/@backstage/plugin-signals-node.md#0121))
- `@backstage/plugin-signals-react` (0.0.13 → [0.0.14](../../changelogs/@backstage/plugin-signals-react.md#0014))
- `@backstage/plugin-techdocs-addons-test-utils` (1.0.48 → [1.0.49](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#1049))
- `@backstage/plugin-techdocs-backend` (2.0.2 → [2.0.3](../../changelogs/@backstage/plugin-techdocs-backend.md#203))
- `@backstage/plugin-techdocs-node` (1.13.3 → [1.13.4](../../changelogs/@backstage/plugin-techdocs-node.md#1134))
- `@backstage/plugin-user-settings-backend` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-user-settings-backend.md#033))
- `@backstage/test-utils` (1.7.8 → [1.7.9](../../changelogs/@backstage/test-utils.md#179))
- `@techdocs/cli` (1.9.3 → [1.9.4](../../changelogs/@techdocs/cli.md#194))
