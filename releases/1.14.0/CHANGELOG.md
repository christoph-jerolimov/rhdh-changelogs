# Backstage Release 1.14.0 changelog

Changes between 1.13.2 and 1.14.0 — 178 changed and 4 added packages.

## Summary

- [Newly added packages](#newly-added-packages): 4 packages
- [Breaking changes](#breaking-changes): 7 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 8 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 1 package
- [Other minor version bumps](#other-minor-version-bumps): 10 packages
- [Other patch version bumps](#other-patch-version-bumps): 38 packages
- [Excluded dependency updates](#excluded-dependency-updates): 114 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/plugin-analytics-module-ga4` (new, 0.1.0)](#backstageplugin-analytics-module-ga4-new-010)
  - [`@backstage/plugin-devtools` (new, 0.1.0)](#backstageplugin-devtools-new-010)
  - [`@backstage/plugin-devtools-backend` (new, 0.1.0)](#backstageplugin-devtools-backend-new-010)
  - [`@backstage/plugin-devtools-common` (new, 0.1.0)](#backstageplugin-devtools-common-new-010)
- [Breaking changes](#breaking-changes)
  - [`@backstage/plugin-badges` (0.2.41 → 0.2.42)](#backstageplugin-badges-0241--0242)
  - [`@backstage/plugin-badges-backend` (0.1.38 → 0.2.0)](#backstageplugin-badges-backend-0138--020)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.1.18 → 0.2.0)](#backstageplugin-catalog-backend-module-aws-0118--020)
  - [`@backstage/plugin-catalog-backend-module-github` (0.2.7 → 0.3.0)](#backstageplugin-catalog-backend-module-github-027--030)
  - [`@backstage/plugin-kubernetes` (0.8.0 → 0.9.0)](#backstageplugin-kubernetes-080--090)
  - [`@backstage/plugin-kubernetes-backend` (0.10.0 → 0.11.0)](#backstageplugin-kubernetes-backend-0100--0110)
  - [`@backstage/repo-tools` (0.2.0 → 0.3.0)](#backstagerepo-tools-020--030)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/plugin-adr` (0.5.0 → 0.6.0)](#backstageplugin-adr-050--060)
  - [`@backstage/plugin-azure-devops` (0.2.8 → 0.3.0)](#backstageplugin-azure-devops-028--030)
  - [`@backstage/plugin-events-backend-module-aws-sqs` (0.1.6 → 0.2.0)](#backstageplugin-events-backend-module-aws-sqs-016--020)
  - [`@backstage/plugin-jenkins` (0.7.16 → 0.8.0)](#backstageplugin-jenkins-0716--080)
  - [`@backstage/plugin-jenkins-backend` (0.1.34 → 0.2.0)](#backstageplugin-jenkins-backend-0134--020)
  - [`@backstage/plugin-octopus-deploy` (0.1.1 → 0.2.0)](#backstageplugin-octopus-deploy-011--020)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.1.0 → 0.2.0)](#backstageplugin-scaffolder-backend-module-gitlab-010--020)
  - [`@backstage/theme` (0.2.19 → 0.3.0)](#backstagetheme-0219--030)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/backend-openapi-utils` (0.0.1 → 0.0.2)](#backstagebackend-openapi-utils-001--002)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/config-loader` (1.2.0 → 1.3.0)](#backstageconfig-loader-120--130)
  - [`@backstage/core-app-api` (1.7.0 → 1.8.0)](#backstagecore-app-api-170--180)
  - [`@backstage/plugin-catalog` (1.10.0 → 1.11.0)](#backstageplugin-catalog-1100--1110)
  - [`@backstage/plugin-catalog-react` (1.5.0 → 1.6.0)](#backstageplugin-catalog-react-150--160)
  - [`@backstage/plugin-scaffolder-backend` (1.13.1 → 1.14.0)](#backstageplugin-scaffolder-backend-1131--1140)
  - [`@backstage/plugin-scaffolder-common` (1.2.7 → 1.3.0)](#backstageplugin-scaffolder-common-127--130)
  - [`@backstage/plugin-scaffolder-react` (1.3.0 → 1.4.0)](#backstageplugin-scaffolder-react-130--140)
  - [`@backstage/plugin-search` (1.2.0 → 1.3.0)](#backstageplugin-search-120--130)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.2.0 → 1.3.0)](#backstageplugin-search-backend-module-elasticsearch-120--130)
  - [`@backstage/plugin-search-react` (1.5.2 → 1.6.0)](#backstageplugin-search-react-152--160)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/app-defaults` (1.3.0 → 1.3.1)](#backstageapp-defaults-130--131)
  - [`@backstage/backend-app-api` (0.4.2 → 0.4.3)](#backstagebackend-app-api-042--043)
  - [`@backstage/backend-common` (0.18.4 → 0.18.5)](#backstagebackend-common-0184--0185)
  - [`@backstage/backend-test-utils` (0.1.36 → 0.1.37)](#backstagebackend-test-utils-0136--0137)
  - [`@backstage/cli` (0.22.6 → 0.22.7)](#backstagecli-0226--0227)
  - [`@backstage/core-components` (0.13.0 → 0.13.1)](#backstagecore-components-0130--0131)
  - [`@backstage/create-app` (0.5.0 → 0.5.1)](#backstagecreate-app-050--051)
  - [`@backstage/integration` (1.4.4 → 1.4.5)](#backstageintegration-144--145)
  - [`@backstage/integration-aws-node` (0.1.2 → 0.1.3)](#backstageintegration-aws-node-012--013)
  - [`@backstage/plugin-auth-backend` (0.18.2 → 0.18.3)](#backstageplugin-auth-backend-0182--0183)
  - [`@backstage/plugin-azure-sites-backend` (0.1.6 → 0.1.7)](#backstageplugin-azure-sites-backend-016--017)
  - [`@backstage/plugin-bazaar` (0.2.7 → 0.2.8)](#backstageplugin-bazaar-027--028)
  - [`@backstage/plugin-catalog-backend` (1.9.0 → 1.9.1)](#backstageplugin-catalog-backend-190--191)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.2.0 → 0.2.1)](#backstageplugin-catalog-backend-module-gitlab-020--021)
  - [`@backstage/plugin-catalog-backend-module-openapi` (0.1.10 → 0.1.11)](#backstageplugin-catalog-backend-module-openapi-0110--0111)
  - [`@backstage/plugin-catalog-backend-module-puppetdb` (0.1.1 → 0.1.2)](#backstageplugin-catalog-backend-module-puppetdb-011--012)
  - [`@backstage/plugin-catalog-graph` (0.2.29 → 0.2.30)](#backstageplugin-catalog-graph-0229--0230)
  - [`@backstage/plugin-circleci` (0.3.17 → 0.3.18)](#backstageplugin-circleci-0317--0318)
  - [`@backstage/plugin-explore` (0.4.2 → 0.4.3)](#backstageplugin-explore-042--043)
  - [`@backstage/plugin-gcalendar` (0.3.13 → 0.3.14)](#backstageplugin-gcalendar-0313--0314)
  - [`@backstage/plugin-github-pull-requests-board` (0.1.11 → 0.1.12)](#backstageplugin-github-pull-requests-board-0111--0112)
  - [`@backstage/plugin-home` (0.5.1 → 0.5.2)](#backstageplugin-home-051--052)
  - [`@backstage/plugin-kubernetes-common` (0.6.2 → 0.6.3)](#backstageplugin-kubernetes-common-062--063)
  - [`@backstage/plugin-org` (0.6.7 → 0.6.8)](#backstageplugin-org-067--068)
  - [`@backstage/plugin-permission-node` (0.7.7 → 0.7.8)](#backstageplugin-permission-node-077--078)
  - [`@backstage/plugin-scaffolder` (1.13.0 → 1.13.1)](#backstageplugin-scaffolder-1130--1131)
  - [`@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.1.1 → 0.1.2)](#backstageplugin-scaffolder-backend-module-confluence-to-markdown-011--012)
  - [`@backstage/plugin-scaffolder-node` (0.1.2 → 0.1.3)](#backstageplugin-scaffolder-node-012--013)
  - [`@backstage/plugin-search-backend` (1.3.0 → 1.3.1)](#backstageplugin-search-backend-130--131)
  - [`@backstage/plugin-shortcuts` (0.3.9 → 0.3.10)](#backstageplugin-shortcuts-039--0310)
  - [`@backstage/plugin-stack-overflow` (0.1.14 → 0.1.15)](#backstageplugin-stack-overflow-0114--0115)
  - [`@backstage/plugin-tech-insights` (0.3.9 → 0.3.10)](#backstageplugin-tech-insights-039--0310)
  - [`@backstage/plugin-tech-radar` (0.6.3 → 0.6.4)](#backstageplugin-tech-radar-063--064)
  - [`@backstage/plugin-techdocs` (1.6.1 → 1.6.2)](#backstageplugin-techdocs-161--162)
  - [`@backstage/plugin-techdocs-module-addons-contrib` (1.0.12 → 1.0.13)](#backstageplugin-techdocs-module-addons-contrib-1012--1013)
  - [`@backstage/plugin-techdocs-node` (1.7.0 → 1.7.1)](#backstageplugin-techdocs-node-170--171)
  - [`@backstage/plugin-todo-backend` (0.1.41 → 0.1.42)](#backstageplugin-todo-backend-0141--0142)
  - [`@backstage/plugin-user-settings` (0.7.2 → 0.7.3)](#backstageplugin-user-settings-072--073)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/plugin-analytics-module-ga4` (new, [0.1.0](../../changelogs/@backstage/plugin-analytics-module-ga4.md#010))

#### 0.1.0

##### Minor Changes

- [`22b46f7f562`](https://github.com/backstage/backstage/commit/22b46f7f562): Plugin provides Backstage Analytics API for Google Analytics 4. Once installed and configured, analytics events will be sent to GA4 as your users navigate and use your Backstage instance

### `@backstage/plugin-devtools` (new, [0.1.0](../../changelogs/@backstage/plugin-devtools.md#010))

#### 0.1.0

##### Minor Changes

- [`347aeca204c`](https://github.com/backstage/backstage/commit/347aeca204c): Introduced the DevTools plugin, checkout the plugin's [`README.md`](https://github.com/backstage/backstage/tree/master/plugins/devtools) for more details!

### `@backstage/plugin-devtools-backend` (new, [0.1.0](../../changelogs/@backstage/plugin-devtools-backend.md#010))

#### 0.1.0

##### Minor Changes

- [`347aeca204c`](https://github.com/backstage/backstage/commit/347aeca204c): Introduced the DevTools plugin, checkout the plugin's [`README.md`](https://github.com/backstage/backstage/tree/master/plugins/devtools) for more details!

### `@backstage/plugin-devtools-common` (new, [0.1.0](../../changelogs/@backstage/plugin-devtools-common.md#010))

#### 0.1.0

##### Minor Changes

- [`347aeca204c`](https://github.com/backstage/backstage/commit/347aeca204c): Introduced the DevTools plugin, checkout the plugin's [`README.md`](https://github.com/backstage/backstage/tree/master/plugins/devtools) for more details!

## Breaking changes

### `@backstage/plugin-badges` (0.2.41 → [0.2.42](../../changelogs/@backstage/plugin-badges.md#0242))

#### 0.2.42

##### Patch Changes

- [`a0108c49774`](https://github.com/backstage/backstage/commit/a0108c49774): Fixing badges-backend plugin to get a token from the TokenManager instead of parsing the request header. Hence, it's now possible to disable the authMiddleware for the badges-backend plugin to expose publicly the badges.

  Implementing an obfuscation feature to protect an open badges endpoint from being enumerated. The feature is disabled by default and the change is compatible with the previous version.

  **BREAKING**: `createRouter` now require that `tokenManager`, `logger`, and `identityApi`, are passed in as options.

### `@backstage/plugin-badges-backend` (0.1.38 → [0.2.0](../../changelogs/@backstage/plugin-badges-backend.md#020))

#### 0.2.0

##### Minor Changes

- [`a0108c49774`](https://github.com/backstage/backstage/commit/a0108c49774): Fixing badges-backend plugin to get a token from the TokenManager instead of parsing the request header. Hence, it's now possible to disable the authMiddleware for the badges-backend plugin to expose publicly the badges.

  Implementing an obfuscation feature to protect an open badges endpoint from being enumerated. The feature is disabled by default and the change is compatible with the previous version.

  **BREAKING**: `createRouter` now require that `tokenManager`, `logger`, and `identityApi`, are passed in as options.

##### Patch Changes

- [`0cd552c28d8`](https://github.com/backstage/backstage/commit/0cd552c28d8): Removed some unused dependencies

### `@backstage/plugin-catalog-backend-module-aws` (0.1.18 → [0.2.0](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#020))

#### 0.2.0

##### Minor Changes

- [`1a3b5f1e390`](https://github.com/backstage/backstage/commit/1a3b5f1e390): **BREAKING**: AwsOrganizationCloudAccountProcessor.fromConfig now returns a promise instead of the instance directly.

### `@backstage/plugin-catalog-backend-module-github` (0.2.7 → [0.3.0](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#030))

#### 0.3.0

##### Minor Changes

- [`970678adbe2`](https://github.com/backstage/backstage/commit/970678adbe2): Implement events support for `GithubMultiOrgEntityProvider`

  **BREAKING:** Passing in a custom `teamTransformer` will now correctly completely override the default transformer behavior

##### Patch Changes

- [`78bb674a713`](https://github.com/backstage/backstage/commit/78bb674a713): Fixed bug in queryWithPaging that caused secondary rate limit errors in GitHub with organizations having more than 1000 repositories. This change makes one request per second to avoid concurrency issues.
- [`bd101cefd37`](https://github.com/backstage/backstage/commit/bd101cefd37): Updated the `team.edited` event emitted from `GithubOrgEntityProvider` to also include teams description.

### `@backstage/plugin-kubernetes` (0.8.0 → [0.9.0](../../changelogs/@backstage/plugin-kubernetes.md#090))

#### 0.9.0

##### Minor Changes

- [`280ec10c18e`](https://github.com/backstage/backstage/commit/280ec10c18e): Added Pod logs components for Kubernetes plugin

  **BREAKING**: `kubernetesProxyApi` for custom plugins built with components from the Kubernetes plugin apis, `kubernetesProxyApi` should be added to the plugin's API list.

  ```
  ...
  export const kubernetesPlugin = createPlugin({
    id: 'kubernetes',
    apis: [
  ...
      createApiFactory({
          api: kubernetesProxyApiRef,
          deps: {
          kubernetesApi: kubernetesApiRef,
          },
          factory: ({ kubernetesApi }) =>
          new KubernetesProxyClient({
              kubernetesApi,
          }),
      }),
  ```

  **BREAKING**: `KubernetesDrawer` is now called `KubernetesStructuredMetadataTableDrawer` so that we can do more than just show `StructuredMetadataTable`

  `import { KubernetesDrawer } from "@backstage/plugin-kubernetes"`

  should now be:

  `import { KubernetesStructuredMetadataTableDrawer } from "@backstage/plugin-kubernetes"`

##### Patch Changes

- [`c7bad1005ba`](https://github.com/backstage/backstage/commit/c7bad1005ba): The Kubernetes plugin now requests AKS access tokens from Azure when retrieving
  objects from clusters configured with `authProvider: aks` and sets `auth.aks` in
  its request bodies appropriately.
- [`a160e02c3d7`](https://github.com/backstage/backstage/commit/a160e02c3d7): Omit managed fields in the Kubernetes resource YAML display.

### `@backstage/plugin-kubernetes-backend` (0.10.0 → [0.11.0](../../changelogs/@backstage/plugin-kubernetes-backend.md#0110))

#### 0.11.0

##### Minor Changes

- [`f4114f02d49`](https://github.com/backstage/backstage/commit/f4114f02d49): Allow fetching pod metrics limited by a `labelSelector`.

  This is used by the Kubernetes tab on a components' page and leads to much smaller responses being received from Kubernetes, especially with larger Kubernetes clusters.

- [`890988341e9`](https://github.com/backstage/backstage/commit/890988341e9): Update `aws-sdk` client from v2 to v3.

  **BREAKING**: The `AwsIamKubernetesAuthTranslator` class no longer exposes the following methods `awsGetCredentials`, `getBearerToken`, `getCredentials` and `validCredentials`. There is no replacement for these methods.

##### Patch Changes

- [`05f1d74539d`](https://github.com/backstage/backstage/commit/05f1d74539d): Kubernetes clusters now support `authProvider: aks`. When configured this way,
  the `retrieveObjectsByServiceId` action will use the `auth.aks` value in the
  request body as a bearer token to authenticate with Kubernetes.
- [`3659c71c5d9`](https://github.com/backstage/backstage/commit/3659c71c5d9): Standardize `@aws-sdk` v3 versions
- [`a341129b754`](https://github.com/backstage/backstage/commit/a341129b754): Fixed a bug in the Kubernetes proxy endpoint where requests to clusters configured with client-side auth providers would always fail with a 500 status.

### `@backstage/repo-tools` (0.2.0 → [0.3.0](../../changelogs/@backstage/repo-tools.md#030))

#### 0.3.0

##### Minor Changes

- [`799c33047ed`](https://github.com/backstage/backstage/commit/799c33047ed): **BREAKING**: The OpenAPI commands are now found within the `schema openapi` sub-command. For example `yarn backstage-repo-tools schema:openapi:verify` is now `yarn backstage-repo-tools schema openapi verify`.
- [`27956d78671`](https://github.com/backstage/backstage/commit/27956d78671): Generated OpenAPI files now have a `.generated.ts` file name and a warning header at the top, to highlight that they should not be edited by hand.

## 0.x minor version bumps

### `@backstage/plugin-adr` (0.5.0 → [0.6.0](../../changelogs/@backstage/plugin-adr.md#060))

#### 0.6.0

##### Minor Changes

- [`b12cd5dc221`](https://github.com/backstage/backstage/commit/b12cd5dc221): render SupportButton only if config is set

### `@backstage/plugin-azure-devops` (0.2.8 → [0.3.0](../../changelogs/@backstage/plugin-azure-devops.md#030))

#### 0.3.0

##### Minor Changes

- [`877df261085`](https://github.com/backstage/backstage/commit/877df261085): The getBuildRuns function now checks contains multiple comma-separated builds and splits them to send multiple requests for each and concatenates the results.

### `@backstage/plugin-events-backend-module-aws-sqs` (0.1.6 → [0.2.0](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#020))

#### 0.2.0

##### Minor Changes

- [`2c5661f3899`](https://github.com/backstage/backstage/commit/2c5661f3899): Allow endpoint configuration for sqs, enabling use of localstack for testing.

##### Patch Changes

- [`3659c71c5d9`](https://github.com/backstage/backstage/commit/3659c71c5d9): Standardize `@aws-sdk` v3 versions

### `@backstage/plugin-jenkins` (0.7.16 → [0.8.0](../../changelogs/@backstage/plugin-jenkins.md#080))

#### 0.8.0

##### Minor Changes

- [`cf95c5137c9`](https://github.com/backstage/backstage/commit/cf95c5137c9): Updated rebuild to use Jenkins API replay build, which works for Jenkins jobs that have required parameters. Jenkins SDK could not be used for this request because it does not have support for replay.

  Added link to view build in Jenkins CI/CD table action column.

### `@backstage/plugin-jenkins-backend` (0.1.34 → [0.2.0](../../changelogs/@backstage/plugin-jenkins-backend.md#020))

#### 0.2.0

##### Minor Changes

- [`cf95c5137c9`](https://github.com/backstage/backstage/commit/cf95c5137c9): Updated rebuild to use Jenkins API replay build, which works for Jenkins jobs that have required parameters. Jenkins SDK could not be used for this request because it does not have support for replay.

  Added link to view build in Jenkins CI/CD table action column.

##### Patch Changes

- [`670a2dd6f4e`](https://github.com/backstage/backstage/commit/670a2dd6f4e): Fix handling of slashes in branch names

### `@backstage/plugin-octopus-deploy` (0.1.1 → [0.2.0](../../changelogs/@backstage/plugin-octopus-deploy.md#020))

#### 0.2.0

##### Minor Changes

- [`87211bc2873`](https://github.com/backstage/backstage/commit/87211bc2873): Added support for Octopus Deploy spaces. The octopus.com/project-id annotation can now (optionally) be prefixed by a space identifier, for example. Spaces-1/Projects-102.
  Also note that some of this plugins exported API's have changed to accommodate this change, changing from separate arguments to a single object.

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.1.0 → [0.2.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#020))

#### 0.2.0

##### Minor Changes

- [`439e2986be1`](https://github.com/backstage/backstage/commit/439e2986be1): Add a new scaffolder action for gitlab to ensure a group exists

##### Patch Changes

- [`f1496d4ab6f`](https://github.com/backstage/backstage/commit/f1496d4ab6f): Fix input schema validation issue for gitlab actions:

  - gitlab:group:ensureExists
  - gitlab:projectAccessToken:create
  - gitlab:projectDeployToken:create
  - gitlab:projectVariable:create

### `@backstage/theme` (0.2.19 → [0.3.0](../../changelogs/@backstage/theme.md#030))

#### 0.3.0

##### Minor Changes

- [`98c0c199b15`](https://github.com/backstage/backstage/commit/98c0c199b15): Updates light theme's primary foreground and `running` status indicator colours to meet WCAG. Previously #2E77D0 changed to #1F5493.

##### Patch Changes

- [`83b45f9df50`](https://github.com/backstage/backstage/commit/83b45f9df50): Fix accessibility issue with Backstage Table's header style

## 0.0.x patch version bumps

### `@backstage/backend-openapi-utils` (0.0.1 → [0.0.2](../../changelogs/@backstage/backend-openapi-utils.md#002))

#### 0.0.2

##### Patch Changes

- [`fe16bd39e83`](https://github.com/backstage/backstage/commit/fe16bd39e83): Use permalinks for links including a line number reference
- [`27956d78671`](https://github.com/backstage/backstage/commit/27956d78671): Adjusted README accordingly after the generated output now has a `.generated.ts` extension
- [`021cfbb5152`](https://github.com/backstage/backstage/commit/021cfbb5152): Corrected resolution of parameter nested schema to use central schemas.
- [`799c33047ed`](https://github.com/backstage/backstage/commit/799c33047ed): Updated README to reflect changes in `@backstage/repo-tools`.

## Other minor version bumps

### `@backstage/config-loader` (1.2.0 → [1.3.0](../../changelogs/@backstage/config-loader.md#130))

#### 1.3.0

##### Minor Changes

- [`201206132da`](https://github.com/backstage/backstage/commit/201206132da): Introduced a new config source system to replace `loadConfig`. There is a new `ConfigSource` interface along with utilities provided by `ConfigSources`, as well as a number of built-in configuration source implementations. The new system is more flexible and makes it easier to create new and reusable sources of configuration, such as loading configuration from secret providers.

  The following is an example of how to load configuration using the default behavior:

  ```ts
  const source = ConfigSources.default({
    argv: options?.argv,
    remote: options?.remote,
  });
  const config = await ConfigSources.toConfig(source);
  ```

  The `ConfigSource` interface looks like this:

  ```ts
  export interface ConfigSource {
    readConfigData(options?: ReadConfigDataOptions): AsyncConfigSourceIterator;
  }
  ```

  It is best implemented using an async iterator:

  ```ts
  class MyConfigSource implements ConfigSource {
    async *readConfigData() {
      yield {
        config: [
          {
            context: 'example',
            data: { backend: { baseUrl: 'http://localhost' } },
          },
        ],
      };
    }
  }
  ```

##### Patch Changes

- [`7c116bcac7f`](https://github.com/backstage/backstage/commit/7c116bcac7f): Fixed the way that some request errors are thrown
- [`473db605a4f`](https://github.com/backstage/backstage/commit/473db605a4f): Added a new `noUndeclaredProperties` option to `SchemaLoader` to support enforcing that there are no extra keys when verifying config.

### `@backstage/core-app-api` (1.7.0 → [1.8.0](../../changelogs/@backstage/core-app-api.md#180))

#### 1.8.0

##### Minor Changes

- [`c89437db899`](https://github.com/backstage/backstage/commit/c89437db899): The analytics' `navigate` event will now include the route parameters as attributes of the navigate event

##### Patch Changes

- [`b645d70034a`](https://github.com/backstage/backstage/commit/b645d70034a): Fixed a bug in the Azure auth provider which prevented getting access tokens with multiple scopes for one resource
- [`42d817e76ab`](https://github.com/backstage/backstage/commit/42d817e76ab): Added `FrontendHostDiscovery` for config driven discovery implementation

### `@backstage/plugin-catalog` (1.10.0 → [1.11.0](../../changelogs/@backstage/plugin-catalog.md#1110))

#### 1.11.0

##### Minor Changes

- [`2258dcae970`](https://github.com/backstage/backstage/commit/2258dcae970): Added an entity namespace filter and column on the default catalog page.

  If you have a custom version of the catalog page, you can add this filter in your CatalogPage code:

  ```ts
  <CatalogFilterLayout>
    <CatalogFilterLayout.Filters>
      <EntityTypePicker />
      <UserListPicker initialFilter={initiallySelectedFilter} />
      <EntityTagPicker />
      /* if you want namespace picker */
      <EntityNamespacePicker />
    </CatalogFilterLayout.Filters>
    <CatalogFilterLayout.Content>
      <CatalogTable columns={columns} actions={actions} />
    </CatalogFilterLayout.Content>
  </CatalogFilterLayout>
  ```

  The namespace column can be added using `createNamespaceColumn();`. This is only needed if you customized the columns for CatalogTable.

### `@backstage/plugin-catalog-react` (1.5.0 → [1.6.0](../../changelogs/@backstage/plugin-catalog-react.md#160))

#### 1.6.0

##### Minor Changes

- [`2258dcae970`](https://github.com/backstage/backstage/commit/2258dcae970): Added an entity namespace filter and column on the default catalog page.

  If you have a custom version of the catalog page, you can add this filter in your CatalogPage code:

  ```ts
  <CatalogFilterLayout>
    <CatalogFilterLayout.Filters>
      <EntityTypePicker />
      <UserListPicker initialFilter={initiallySelectedFilter} />
      <EntityTagPicker />
      /* if you want namespace picker */
      <EntityNamespacePicker />
    </CatalogFilterLayout.Filters>
    <CatalogFilterLayout.Content>
      <CatalogTable columns={columns} actions={actions} />
    </CatalogFilterLayout.Content>
  </CatalogFilterLayout>
  ```

  The namespace column can be added using `createNamespaceColumn();`. This is only needed if you customized the columns for CatalogTable.

### `@backstage/plugin-scaffolder-backend` (1.13.1 → [1.14.0](../../changelogs/@backstage/plugin-scaffolder-backend.md#1140))

#### 1.14.0

##### Minor Changes

- [`67115f532b8`](https://github.com/backstage/backstage/commit/67115f532b8): Expose both types of scaffolder permissions and rules through the metadata endpoint.

  The metadata endpoint now correctly exposes both types of scaffolder permissions and rules (for both the template and action resource types) through the metadata endpoint.

- [`a73b3c0b097`](https://github.com/backstage/backstage/commit/a73b3c0b097): Add ability to use `defaultNamespace` and `defaultKind` for scaffolder action `catalog:fetch`

##### Patch Changes

- [`1a48b84901c`](https://github.com/backstage/backstage/commit/1a48b84901c): Bump minimum required version of `vm2` to be 3.9.18
- [`d20c87966a4`](https://github.com/backstage/backstage/commit/d20c87966a4): Bump minimum required version of `vm2` to be 3.9.17
- [`6d954de4b06`](https://github.com/backstage/backstage/commit/6d954de4b06): Update typing for `RouterOptions::actions` and `ScaffolderActionsExtensionPoint::addActions` to allow any kind of action being assigned to it.

### `@backstage/plugin-scaffolder-common` (1.2.7 → [1.3.0](../../changelogs/@backstage/plugin-scaffolder-common.md#130))

#### 1.3.0

##### Minor Changes

- [`82e10a6939c`](https://github.com/backstage/backstage/commit/82e10a6939c): Add support for Markdown text blob outputs from templates
- [`67115f532b8`](https://github.com/backstage/backstage/commit/67115f532b8): Expose scaffolder permissions in new sub-aggregations.

  In addition to exporting a list of all scaffolder permissions in `scaffolderPermissions`, scaffolder-common now exports `scaffolderTemplatePermissions` and `scaffolderActionPermissions`, which contain subsets of the scaffolder permissions separated by resource type.

### `@backstage/plugin-scaffolder-react` (1.3.0 → [1.4.0](../../changelogs/@backstage/plugin-scaffolder-react.md#140))

#### 1.4.0

##### Minor Changes

- [`82e10a6939c`](https://github.com/backstage/backstage/commit/82e10a6939c): Add support for Markdown text blob outputs from templates

##### Patch Changes

- [`ad1a1429de4`](https://github.com/backstage/backstage/commit/ad1a1429de4): Improvements to the `scaffolder/next` buttons UX:

  - Added padding around the "Create" button in the `Stepper` component
  - Added a button bar that includes the "Cancel" and "Start Over" buttons to the `OngoingTask` component. The state of these buttons match their existing counter parts in the Context Menu
  - Added a "Show Button Bar"/"Hide Button Bar" item to the `ContextMenu` component

### `@backstage/plugin-search` (1.2.0 → [1.3.0](../../changelogs/@backstage/plugin-search.md#130))

#### 1.3.0

##### Minor Changes

- [`750e45539ad`](https://github.com/backstage/backstage/commit/750e45539ad): Add close button & improve search input.

  Material UI's Paper wrapping the SearchBar in the SearchPage was removed, we recommend users update their apps accordingly.

  SearchBarBase's TextField's label support added & aria-label uses label string if present, tests relying on the default placeholder value should still work unless custom placeholder was given.

##### Patch Changes

- [`0e3d8d69318`](https://github.com/backstage/backstage/commit/0e3d8d69318): Fixed 404 Error when fetching search results due to URL encoding changes

### `@backstage/plugin-search-backend-module-elasticsearch` (1.2.0 → [1.3.0](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#130))

#### 1.3.0

##### Minor Changes

- [`3d72bdb41c7`](https://github.com/backstage/backstage/commit/3d72bdb41c7): Upgrade to aws-sdk v3 and include OpenSearch Serverless support

### `@backstage/plugin-search-react` (1.5.2 → [1.6.0](../../changelogs/@backstage/plugin-search-react.md#160))

#### 1.6.0

##### Minor Changes

- [`750e45539ad`](https://github.com/backstage/backstage/commit/750e45539ad): Add close button & improve search input.

  Material UI's Paper wrapping the SearchBar in the SearchPage was removed, we recommend users update their apps accordingly.

  SearchBarBase's TextField's label support added & aria-label uses label string if present, tests relying on the default placeholder value should still work unless custom placeholder was given.

- [`1ce7f84b2e8`](https://github.com/backstage/backstage/commit/1ce7f84b2e8): <SearchBar/> accepts InputProp property that can override keys from default

##### Patch Changes

- [`f785f0804cd`](https://github.com/backstage/backstage/commit/f785f0804cd): `SearchPagination` now automatically resets the page cursor when the page limit is changed
- [`adb31096bc2`](https://github.com/backstage/backstage/commit/adb31096bc2): Fix text-overflow UI issue for Lifecycle spans in SearchFilter checkbox labels.

## Other patch version bumps

### `@backstage/app-defaults` (1.3.0 → [1.3.1](../../changelogs/@backstage/app-defaults.md#131))

#### 1.3.1

##### Patch Changes

- [`575d9178eff`](https://github.com/backstage/backstage/commit/575d9178eff): Added a System Icon for resource entities.
  This can be obtained using:

  ```ts
  useApp().getSystemIcon('kind:resource');
  ```

### `@backstage/backend-app-api` (0.4.2 → [0.4.3](../../changelogs/@backstage/backend-app-api.md#043))

#### 0.4.3

##### Patch Changes

- [`cf13b482f9e`](https://github.com/backstage/backstage/commit/cf13b482f9e): Switch `configServiceFactory` to use `ConfigSources` from `@backstage/config-loader` to load config.

### `@backstage/backend-common` (0.18.4 → [0.18.5](../../changelogs/@backstage/backend-common.md#0185))

#### 0.18.5

##### Patch Changes

- [`0297f7a54af`](https://github.com/backstage/backstage/commit/0297f7a54af): Remove the direct dependency on deprecated "request" library
- [`284db225083`](https://github.com/backstage/backstage/commit/284db225083): Updated the `DatabaseManager` to include the plugin id in the Postgres application name of the database connections created for each plugin.
- [`3659c71c5d9`](https://github.com/backstage/backstage/commit/3659c71c5d9): Standardize `@aws-sdk` v3 versions
- [`42d817e76ab`](https://github.com/backstage/backstage/commit/42d817e76ab): Added `HostDiscovery` to supersede deprecated `SingleHostDiscovery` (deprecated due to name)

### `@backstage/backend-test-utils` (0.1.36 → [0.1.37](../../changelogs/@backstage/backend-test-utils.md#0137))

#### 0.1.37

##### Patch Changes

- [`63af7f6d53f`](https://github.com/backstage/backstage/commit/63af7f6d53f): Allow specifying custom Docker registry for database tests
- [`b1eb268bf9d`](https://github.com/backstage/backstage/commit/b1eb268bf9d): Added `POSTGRES_11` and `POSTGRES_12` as supported test database IDs.

### `@backstage/cli` (0.22.6 → [0.22.7](../../changelogs/@backstage/cli.md#0227))

#### 0.22.7

##### Patch Changes

- [`473db605a4f`](https://github.com/backstage/backstage/commit/473db605a4f): Enable strict config checking during `backstage-cli config:check` with the new `--strict` option which will surface schema errors.
- [`d548886872d`](https://github.com/backstage/backstage/commit/d548886872d): Deprecated the use of React 16

### `@backstage/core-components` (0.13.0 → [0.13.1](../../changelogs/@backstage/core-components.md#0131))

#### 0.13.1

##### Patch Changes

- [`83b45f9df50`](https://github.com/backstage/backstage/commit/83b45f9df50): Fix accessibility issue with Backstage Table's header style
- [`e97769f7c0b`](https://github.com/backstage/backstage/commit/e97769f7c0b): Fix accessibility issue on controlled select input on tab navigation + keyboard enter/space action.
- [`b1f13cb38aa`](https://github.com/backstage/backstage/commit/b1f13cb38aa): Fix accessibility issue with Edit Metadata Link on screen readers missing notice about opening in a new tab.
- [`26cff1a5dfb`](https://github.com/backstage/backstage/commit/26cff1a5dfb): Start capturing sidebar click events in analytics by default.

### `@backstage/create-app` (0.5.0 → [0.5.1](../../changelogs/@backstage/create-app.md#051))

#### 0.5.1

##### Patch Changes

- [`1d5e42655cd`](https://github.com/backstage/backstage/commit/1d5e42655cd): Correct command to create new plugins
- [`e04bb20bdc4`](https://github.com/backstage/backstage/commit/e04bb20bdc4): Bumped create-app version.

### `@backstage/integration` (1.4.4 → [1.4.5](../../changelogs/@backstage/integration.md#145))

#### 1.4.5

##### Patch Changes

- [`b026275bcc8`](https://github.com/backstage/backstage/commit/b026275bcc8): Fixed a bug where the wrong credentials would be selected when using multiple GitHub app integrations.

### `@backstage/integration-aws-node` (0.1.2 → [0.1.3](../../changelogs/@backstage/integration-aws-node.md#013))

#### 0.1.3

##### Patch Changes

- [`3659c71c5d9`](https://github.com/backstage/backstage/commit/3659c71c5d9): Standardize `@aws-sdk` v3 versions

### `@backstage/plugin-auth-backend` (0.18.2 → [0.18.3](../../changelogs/@backstage/plugin-auth-backend.md#0183))

#### 0.18.3

##### Patch Changes

- [`7c116bcac7f`](https://github.com/backstage/backstage/commit/7c116bcac7f): Fixed the way that some request errors are thrown
- [`473db605a4f`](https://github.com/backstage/backstage/commit/473db605a4f): Fix config schema definition.
- [`3ffcdac7d07`](https://github.com/backstage/backstage/commit/3ffcdac7d07): Added a persistent session store through the database

### `@backstage/plugin-azure-sites-backend` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-azure-sites-backend.md#017))

#### 0.1.7

##### Patch Changes

- [`d66d4f916aa`](https://github.com/backstage/backstage/commit/d66d4f916aa): Updated URL to `/health` and corrected typos in the `README.md`

### `@backstage/plugin-bazaar` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-bazaar.md#028))

#### 0.2.8

##### Patch Changes

- [`900880ab7c3`](https://github.com/backstage/backstage/commit/900880ab7c3): Fixed `validateDOMNesting` warnings

### `@backstage/plugin-catalog-backend` (1.9.0 → [1.9.1](../../changelogs/@backstage/plugin-catalog-backend.md#191))

#### 1.9.1

##### Patch Changes

- [`ce8d203235b`](https://github.com/backstage/backstage/commit/ce8d203235b): Ensure that entity cache state is only written to the database when actually changed
- [`485a6c5f7b5`](https://github.com/backstage/backstage/commit/485a6c5f7b5): Internal refactoring for performance in the service handlers
- [`3587a968dcd`](https://github.com/backstage/backstage/commit/3587a968dcd): Fixed a bug in the `queryEntities` endpoint that was causing filtered entities to be included in cursor requests.
- [`ce335df9d1c`](https://github.com/backstage/backstage/commit/ce335df9d1c): Improve the query for orphan pruning
- [`27956d78671`](https://github.com/backstage/backstage/commit/27956d78671): Adjusted the OpenAPI schema file name according to the new structure
- [`51064e6e5ee`](https://github.com/backstage/backstage/commit/51064e6e5ee): Change orphan cleanup task to only log a message if it deleted entities.
- [`12a345317ab`](https://github.com/backstage/backstage/commit/12a345317ab): Remove unnecessary join in the entity facets endpoint, exclude nulls

### `@backstage/plugin-catalog-backend-module-gitlab` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#021))

#### 0.2.1

##### Patch Changes

- [`b12c41fafc4`](https://github.com/backstage/backstage/commit/b12c41fafc4): Fix a corner case where returned users are null for bots

### `@backstage/plugin-catalog-backend-module-openapi` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0111))

#### 0.1.11

##### Patch Changes

- [`accaceadffa`](https://github.com/backstage/backstage/commit/accaceadffa): Fixed bug in `jsonSchemaRefPlaceholderResolver` where relative $ref files were resolved through file system instead of base URL of file

### `@backstage/plugin-catalog-backend-module-puppetdb` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#012))

#### 0.1.2

##### Patch Changes

- [`95b2168d71b`](https://github.com/backstage/backstage/commit/95b2168d71b): Fixes import paths and updates documentation

### `@backstage/plugin-catalog-graph` (0.2.29 → [0.2.30](../../changelogs/@backstage/plugin-catalog-graph.md#0230))

#### 0.2.30

##### Patch Changes

- [`d446f8fb0a8`](https://github.com/backstage/backstage/commit/d446f8fb0a8): Expose all `EntityRelationsGraphProps` to Catalog Graph Page

### `@backstage/plugin-circleci` (0.3.17 → [0.3.18](../../changelogs/@backstage/plugin-circleci.md#0318))

#### 0.3.18

##### Patch Changes

- [`451b3cadb3d`](https://github.com/backstage/backstage/commit/451b3cadb3d): Fixes row display for in progress jobs to not display trailing "took"
- [`1c4958d905f`](https://github.com/backstage/backstage/commit/1c4958d905f): Hide empty time field data for queued builds which haven't started yet

### `@backstage/plugin-explore` (0.4.2 → [0.4.3](../../changelogs/@backstage/plugin-explore.md#043))

#### 0.4.3

##### Patch Changes

- [`1996920782b`](https://github.com/backstage/backstage/commit/1996920782b): Make sure that the first support button row does not break across lines
- [`4851581deb6`](https://github.com/backstage/backstage/commit/4851581deb6): Display the title of the entity on the explore card if present, otherwise stick to the name
- [`a6025e25d99`](https://github.com/backstage/backstage/commit/a6025e25d99): Updated the example code in the "Customization" section of the README to make the imports match the components used.

### `@backstage/plugin-gcalendar` (0.3.13 → [0.3.14](../../changelogs/@backstage/plugin-gcalendar.md#0314))

#### 0.3.14

##### Patch Changes

- [`f493ccb9589`](https://github.com/backstage/backstage/commit/f493ccb9589): Pass user info email scope on auth refresh to resolve invalid credentials error

### `@backstage/plugin-github-pull-requests-board` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-github-pull-requests-board.md#0112))

#### 0.1.12

##### Patch Changes

- [`cf125c36569`](https://github.com/backstage/backstage/commit/cf125c36569): The `EntityTeamPullRequestsContent` and `EntityTeamPullRequestsCard` support the ability to view the labels/tags added to each PR

### `@backstage/plugin-home` (0.5.1 → [0.5.2](../../changelogs/@backstage/plugin-home.md#052))

#### 0.5.2

##### Patch Changes

- [`acca8966465`](https://github.com/backstage/backstage/commit/acca8966465): Remove object-hash dependency
- [`957cd9b8958`](https://github.com/backstage/backstage/commit/957cd9b8958): Use the semantic time tag for rendering world clocks on homepage headers.
- [`0e19e7b0f3a`](https://github.com/backstage/backstage/commit/0e19e7b0f3a): Bump to using the later v5 versions of `@rjsf/*`
- [`5272cfabc3b`](https://github.com/backstage/backstage/commit/5272cfabc3b): Add missing @rjsf/core dependency

### `@backstage/plugin-kubernetes-common` (0.6.2 → [0.6.3](../../changelogs/@backstage/plugin-kubernetes-common.md#063))

#### 0.6.3

##### Patch Changes

- [`05f1d74539d`](https://github.com/backstage/backstage/commit/05f1d74539d): AKS access tokens can now be sent over the wire to the Kubernetes backend.

### `@backstage/plugin-org` (0.6.7 → [0.6.8](../../changelogs/@backstage/plugin-org.md#068))

#### 0.6.8

##### Patch Changes

- [`6e387c077a4`](https://github.com/backstage/backstage/commit/6e387c077a4): Changed the MembersListCard component to allow displaying aggregated members when viewing a group. Now, a toggle switch can be displayed that lets you switch between showing direct members and aggregated members.

  To enable this new feature, set the showAggregateMembersToggle prop on EntityMembersListCard:

  ```jsx
  // In packages/app/src/components/catalog/EntityPage.tsx
  const groupPage = (
    // ...
    <EntityMembersListCard showAggregateMembersToggle />
    // ...
  );
  ```

### `@backstage/plugin-permission-node` (0.7.7 → [0.7.8](../../changelogs/@backstage/plugin-permission-node.md#078))

#### 0.7.8

##### Patch Changes

- [`a788e715cfc`](https://github.com/backstage/backstage/commit/a788e715cfc): `createPermissionIntegrationRouter` now accepts rules and permissions for multiple resource types. Example:

  ```typescript
  createPermissionIntegrationRouter({
    resources: [
      {
        resourceType: 'resourceType-1',
        permissions: permissionsResourceType1,
        rules: rulesResourceType1,
      },
      {
        resourceType: 'resourceType-2',
        permissions: permissionsResourceType2,
        rules: rulesResourceType2,
      },
    ],
  });
  ```

### `@backstage/plugin-scaffolder` (1.13.0 → [1.13.1](../../changelogs/@backstage/plugin-scaffolder.md#1131))

#### 1.13.1

##### Patch Changes

- [`d560d457c98`](https://github.com/backstage/backstage/commit/d560d457c98): Fix case GitLab workspace is a nested subgroup
- [`ad1a1429de4`](https://github.com/backstage/backstage/commit/ad1a1429de4): Improvements to the `scaffolder/next` buttons UX:

  - Added padding around the "Create" button in the `Stepper` component
  - Added a button bar that includes the "Cancel" and "Start Over" buttons to the `OngoingTask` component. The state of these buttons match their existing counter parts in the Context Menu
  - Added a "Show Button Bar"/"Hide Button Bar" item to the `ContextMenu` component

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#012))

#### 0.1.2

##### Patch Changes

- [`7c116bcac7f`](https://github.com/backstage/backstage/commit/7c116bcac7f): Fixed the way that some request errors are thrown

### `@backstage/plugin-scaffolder-node` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-scaffolder-node.md#013))

#### 0.1.3

##### Patch Changes

- [`6d954de4b06`](https://github.com/backstage/backstage/commit/6d954de4b06): Update typing for `RouterOptions::actions` and `ScaffolderActionsExtensionPoint::addActions` to allow any kind of action being assigned to it.

### `@backstage/plugin-search-backend` (1.3.0 → [1.3.1](../../changelogs/@backstage/plugin-search-backend.md#131))

#### 1.3.1

##### Patch Changes

- [`021cfbb5152`](https://github.com/backstage/backstage/commit/021cfbb5152): Added an OpenAPI 3.0 spec and enforced schema-first model on the router.

### `@backstage/plugin-shortcuts` (0.3.9 → [0.3.10](../../changelogs/@backstage/plugin-shortcuts.md#0310))

#### 0.3.10

##### Patch Changes

- [`8a7174e297c`](https://github.com/backstage/backstage/commit/8a7174e297c): Marked `LocalStoredShortcuts` as deprecated, replacing it with `DefaultShortcutsApi` whose naming more clearly suggests that the shortcuts aren't necessarily stored locally (it depends on the storage implementation).

### `@backstage/plugin-stack-overflow` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-stack-overflow.md#0115))

#### 0.1.15

##### Patch Changes

- [`c1ff65f315a`](https://github.com/backstage/backstage/commit/c1ff65f315a): StackOverflowSearchResultListItem can now accept an empty result prop so that it can be rendered in the suggested SearchResultListItem pattern.

### `@backstage/plugin-tech-insights` (0.3.9 → [0.3.10](../../changelogs/@backstage/plugin-tech-insights.md#0310))

#### 0.3.10

##### Patch Changes

- [`22963209d23`](https://github.com/backstage/backstage/commit/22963209d23): Added the possibility to customize the check description in the scorecard component.

  - The `CheckResultRenderer` type now exposes an optional `description` method that allows to overwrite the description with a different string or a React component for a provided check result.

  Until now only the `BooleanCheck` element could be overridden, but from now on it's also possible to override the description for a check.
  As an example, the description could change depending on the check result. Refer to the [README](https://github.com/backstage/backstage/blob/master/plugins/tech-insights/README.md#adding-custom-rendering-components) file for more details

### `@backstage/plugin-tech-radar` (0.6.3 → [0.6.4](../../changelogs/@backstage/plugin-tech-radar.md#064))

#### 0.6.4

##### Patch Changes

- [`be4fa53fab8`](https://github.com/backstage/backstage/commit/be4fa53fab8): Fix description links when clicking entry in radar.
- Added the ability to display a timeline to each entry in the details box

### `@backstage/plugin-techdocs` (1.6.1 → [1.6.2](../../changelogs/@backstage/plugin-techdocs.md#162))

#### 1.6.2

##### Patch Changes

- [`863beb49498`](https://github.com/backstage/backstage/commit/863beb49498): Re-add the possibility to have trailing slashes in Techdocs navigation.

### `@backstage/plugin-techdocs-module-addons-contrib` (1.0.12 → [1.0.13](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1013))

#### 1.0.13

##### Patch Changes

- [`6afc7f052ca`](https://github.com/backstage/backstage/commit/6afc7f052ca): Show cursor pointer when hovering on lightbox

### `@backstage/plugin-techdocs-node` (1.7.0 → [1.7.1](../../changelogs/@backstage/plugin-techdocs-node.md#171))

#### 1.7.1

##### Patch Changes

- [`3659c71c5d9`](https://github.com/backstage/backstage/commit/3659c71c5d9): Standardize `@aws-sdk` v3 versions

### `@backstage/plugin-todo-backend` (0.1.41 → [0.1.42](../../changelogs/@backstage/plugin-todo-backend.md#0142))

#### 0.1.42

##### Patch Changes

- [`901f1ada325`](https://github.com/backstage/backstage/commit/901f1ada325): Added OpenAPI schema

### `@backstage/plugin-user-settings` (0.7.2 → [0.7.3](../../changelogs/@backstage/plugin-user-settings.md#073))

#### 0.7.3

##### Patch Changes

- [`473db605a4f`](https://github.com/backstage/backstage/commit/473db605a4f): Fix config schema definition.

## Excluded dependency updates

- `@backstage/backend-defaults` (0.1.9 → [0.1.10](../../changelogs/@backstage/backend-defaults.md#0110))
- `@backstage/backend-plugin-api` (0.5.1 → [0.5.2](../../changelogs/@backstage/backend-plugin-api.md#052))
- `@backstage/backend-tasks` (0.5.1 → [0.5.2](../../changelogs/@backstage/backend-tasks.md#052))
- `@backstage/dev-utils` (1.0.14 → [1.0.15](../../changelogs/@backstage/dev-utils.md#1015))
- `@backstage/integration-react` (1.1.12 → [1.1.13](../../changelogs/@backstage/integration-react.md#1113))
- `@backstage/plugin-adr-backend` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-adr-backend.md#033))
- `@backstage/plugin-adr-common` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-adr-common.md#029))
- `@backstage/plugin-airbrake` (0.3.17 → [0.3.18](../../changelogs/@backstage/plugin-airbrake.md#0318))
- `@backstage/plugin-airbrake-backend` (0.2.17 → [0.2.18](../../changelogs/@backstage/plugin-airbrake-backend.md#0218))
- `@backstage/plugin-allure` (0.1.33 → [0.1.34](../../changelogs/@backstage/plugin-allure.md#0134))
- `@backstage/plugin-analytics-module-ga` (0.1.28 → [0.1.29](../../changelogs/@backstage/plugin-analytics-module-ga.md#0129))
- `@backstage/plugin-apache-airflow` (0.2.10 → [0.2.11](../../changelogs/@backstage/plugin-apache-airflow.md#0211))
- `@backstage/plugin-api-docs` (0.9.2 → [0.9.3](../../changelogs/@backstage/plugin-api-docs.md#093))
- `@backstage/plugin-apollo-explorer` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-apollo-explorer.md#0111))
- `@backstage/plugin-app-backend` (0.3.44 → [0.3.45](../../changelogs/@backstage/plugin-app-backend.md#0345))
- `@backstage/plugin-auth-node` (0.2.13 → [0.2.14](../../changelogs/@backstage/plugin-auth-node.md#0214))
- `@backstage/plugin-azure-devops-backend` (0.3.23 → [0.3.24](../../changelogs/@backstage/plugin-azure-devops-backend.md#0324))
- `@backstage/plugin-azure-sites` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-azure-sites.md#017))
- `@backstage/plugin-bazaar-backend` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-bazaar-backend.md#028))
- `@backstage/plugin-bitbucket-cloud-common` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#026))
- `@backstage/plugin-bitrise` (0.1.44 → [0.1.45](../../changelogs/@backstage/plugin-bitrise.md#0145))
- `@backstage/plugin-catalog-backend-module-azure` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0116))
- `@backstage/plugin-catalog-backend-module-bitbucket` (0.2.11 → [0.2.12](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket.md#0212))
- `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#0112))
- `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#0110))
- `@backstage/plugin-catalog-backend-module-gerrit` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0113))
- `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#032))
- `@backstage/plugin-catalog-backend-module-ldap` (0.5.11 → [0.5.12](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0512))
- `@backstage/plugin-catalog-backend-module-msgraph` (0.5.3 → [0.5.4](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#054))
- `@backstage/plugin-catalog-import` (0.9.7 → [0.9.8](../../changelogs/@backstage/plugin-catalog-import.md#098))
- `@backstage/plugin-catalog-node` (1.3.5 → [1.3.6](../../changelogs/@backstage/plugin-catalog-node.md#136))
- `@backstage/plugin-cicd-statistics` (0.1.19 → [0.1.20](../../changelogs/@backstage/plugin-cicd-statistics.md#0120))
- `@backstage/plugin-cicd-statistics-module-gitlab` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-cicd-statistics-module-gitlab.md#0114))
- `@backstage/plugin-cloudbuild` (0.3.17 → [0.3.18](../../changelogs/@backstage/plugin-cloudbuild.md#0318))
- `@backstage/plugin-code-climate` (0.1.17 → [0.1.18](../../changelogs/@backstage/plugin-code-climate.md#0118))
- `@backstage/plugin-code-coverage` (0.2.10 → [0.2.11](../../changelogs/@backstage/plugin-code-coverage.md#0211))
- `@backstage/plugin-code-coverage-backend` (0.2.10 → [0.2.11](../../changelogs/@backstage/plugin-code-coverage-backend.md#0211))
- `@backstage/plugin-codescene` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-codescene.md#0113))
- `@backstage/plugin-config-schema` (0.1.40 → [0.1.41](../../changelogs/@backstage/plugin-config-schema.md#0141))
- `@backstage/plugin-cost-insights` (0.12.6 → [0.12.7](../../changelogs/@backstage/plugin-cost-insights.md#0127))
- `@backstage/plugin-dynatrace` (4.0.0 → [5.0.0](../../changelogs/@backstage/plugin-dynatrace.md#500))
- `@backstage/plugin-entity-feedback` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-entity-feedback.md#021))
- `@backstage/plugin-entity-feedback-backend` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-entity-feedback-backend.md#013))
- `@backstage/plugin-entity-validation` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-entity-validation.md#013))
- `@backstage/plugin-events-backend` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-events-backend.md#026))
- `@backstage/plugin-events-backend-module-azure` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-events-backend-module-azure.md#017))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#017))
- `@backstage/plugin-events-backend-module-gerrit` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#017))
- `@backstage/plugin-events-backend-module-github` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-events-backend-module-github.md#017))
- `@backstage/plugin-events-backend-module-gitlab` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#017))
- `@backstage/plugin-events-backend-test-utils` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-events-backend-test-utils.md#017))
- `@backstage/plugin-events-node` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-events-node.md#026))
- `@backstage/plugin-explore-backend` (0.0.6 → [0.0.7](../../changelogs/@backstage/plugin-explore-backend.md#007))
- `@backstage/plugin-firehydrant` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-firehydrant.md#022))
- `@backstage/plugin-fossa` (0.2.49 → [0.2.50](../../changelogs/@backstage/plugin-fossa.md#0250))
- `@backstage/plugin-gcp-projects` (0.3.36 → [0.3.37](../../changelogs/@backstage/plugin-gcp-projects.md#0337))
- `@backstage/plugin-git-release-manager` (0.3.30 → [0.3.31](../../changelogs/@backstage/plugin-git-release-manager.md#0331))
- `@backstage/plugin-github-actions` (0.5.17 → [0.5.18](../../changelogs/@backstage/plugin-github-actions.md#0518))
- `@backstage/plugin-github-deployments` (0.1.48 → [0.1.49](../../changelogs/@backstage/plugin-github-deployments.md#0149))
- `@backstage/plugin-github-issues` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-github-issues.md#027))
- `@backstage/plugin-gitops-profiles` (0.3.35 → [0.3.36](../../changelogs/@backstage/plugin-gitops-profiles.md#0336))
- `@backstage/plugin-gocd` (0.1.23 → [0.1.24](../../changelogs/@backstage/plugin-gocd.md#0124))
- `@backstage/plugin-graphiql` (0.2.49 → [0.2.50](../../changelogs/@backstage/plugin-graphiql.md#0250))
- `@backstage/plugin-graphql-backend` (0.1.34 → [0.1.35](../../changelogs/@backstage/plugin-graphql-backend.md#0135))
- `@backstage/plugin-graphql-voyager` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-graphql-voyager.md#013))
- `@backstage/plugin-ilert` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-ilert.md#027))
- `@backstage/plugin-kafka` (0.3.17 → [0.3.18](../../changelogs/@backstage/plugin-kafka.md#0318))
- `@backstage/plugin-kafka-backend` (0.2.37 → [0.2.38](../../changelogs/@backstage/plugin-kafka-backend.md#0238))
- `@backstage/plugin-lighthouse` (0.4.2 → [0.4.3](../../changelogs/@backstage/plugin-lighthouse.md#043))
- `@backstage/plugin-lighthouse-backend` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-lighthouse-backend.md#021))
- `@backstage/plugin-linguist` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-linguist.md#013))
- `@backstage/plugin-linguist-backend` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-linguist-backend.md#022))
- `@backstage/plugin-microsoft-calendar` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-microsoft-calendar.md#013))
- `@backstage/plugin-newrelic` (0.3.35 → [0.3.36](../../changelogs/@backstage/plugin-newrelic.md#0336))
- `@backstage/plugin-newrelic-dashboard` (0.2.10 → [0.2.11](../../changelogs/@backstage/plugin-newrelic-dashboard.md#0211))
- `@backstage/plugin-org-react` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-org-react.md#017))
- `@backstage/plugin-pagerduty` (0.5.10 → [0.5.11](../../changelogs/@backstage/plugin-pagerduty.md#0511))
- `@backstage/plugin-periskop` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-periskop.md#0116))
- `@backstage/plugin-periskop-backend` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-periskop-backend.md#0116))
- `@backstage/plugin-permission-backend` (0.5.19 → [0.5.20](../../changelogs/@backstage/plugin-permission-backend.md#0520))
- `@backstage/plugin-playlist` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-playlist.md#019))
- `@backstage/plugin-playlist-backend` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-playlist-backend.md#031))
- `@backstage/plugin-proxy-backend` (0.2.38 → [0.2.39](../../changelogs/@backstage/plugin-proxy-backend.md#0239))
- `@backstage/plugin-puppetdb` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-puppetdb.md#011))
- `@backstage/plugin-rollbar` (0.4.17 → [0.4.18](../../changelogs/@backstage/plugin-rollbar.md#0418))
- `@backstage/plugin-rollbar-backend` (0.1.41 → [0.1.42](../../changelogs/@backstage/plugin-rollbar-backend.md#0142))
- `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.20 → [0.2.21](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0221))
- `@backstage/plugin-scaffolder-backend-module-rails` (0.4.13 → [0.4.14](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0414))
- `@backstage/plugin-scaffolder-backend-module-sentry` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#015))
- `@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.17 → [0.2.18](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0218))
- `@backstage/plugin-search-backend-module-catalog` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#011))
- `@backstage/plugin-search-backend-module-explore` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-search-backend-module-explore.md#011))
- `@backstage/plugin-search-backend-module-pg` (0.5.5 → [0.5.6](../../changelogs/@backstage/plugin-search-backend-module-pg.md#056))
- `@backstage/plugin-search-backend-module-techdocs` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#011))
- `@backstage/plugin-search-backend-node` (1.2.0 → [1.2.1](../../changelogs/@backstage/plugin-search-backend-node.md#121))
- `@backstage/plugin-sentry` (0.5.2 → [0.5.3](../../changelogs/@backstage/plugin-sentry.md#053))
- `@backstage/plugin-sonarqube` (0.6.6 → [0.6.7](../../changelogs/@backstage/plugin-sonarqube.md#067))
- `@backstage/plugin-sonarqube-backend` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-sonarqube-backend.md#0110))
- `@backstage/plugin-splunk-on-call` (0.4.6 → [0.4.7](../../changelogs/@backstage/plugin-splunk-on-call.md#047))
- `@backstage/plugin-stack-overflow-backend` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-stack-overflow-backend.md#021))
- `@backstage/plugin-stackstorm` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-stackstorm.md#012))
- `@backstage/plugin-tech-insights-backend` (0.5.10 → [0.5.11](../../changelogs/@backstage/plugin-tech-insights-backend.md#0511))
- `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.28 → [0.1.29](../../changelogs/@backstage/plugin-tech-insights-backend-module-jsonfc.md#0129))
- `@backstage/plugin-tech-insights-node` (0.4.2 → [0.4.3](../../changelogs/@backstage/plugin-tech-insights-node.md#043))
- `@backstage/plugin-techdocs-addons-test-utils` (1.0.12 → [1.0.13](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#1013))
- `@backstage/plugin-techdocs-backend` (1.6.1 → [1.6.2](../../changelogs/@backstage/plugin-techdocs-backend.md#162))
- `@backstage/plugin-techdocs-react` (1.1.5 → [1.1.6](../../changelogs/@backstage/plugin-techdocs-react.md#116))
- `@backstage/plugin-todo` (0.2.19 → [0.2.20](../../changelogs/@backstage/plugin-todo.md#0220))
- `@backstage/plugin-user-settings-backend` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-user-settings-backend.md#019))
- `@backstage/plugin-vault` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-vault.md#0112))
- `@backstage/plugin-vault-backend` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-vault-backend.md#031))
- `@backstage/plugin-xcmetrics` (0.2.37 → [0.2.38](../../changelogs/@backstage/plugin-xcmetrics.md#0238))
- `@backstage/test-utils` (1.3.0 → [1.3.1](../../changelogs/@backstage/test-utils.md#131))
- `@techdocs/cli` (1.4.1 → [1.4.2](../../changelogs/@techdocs/cli.md#142))
