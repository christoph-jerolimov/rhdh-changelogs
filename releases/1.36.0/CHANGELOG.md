# Backstage Release 1.36.0 changelog

Changes between 1.35.1 and 1.36.0 — 155 changed and 1 added packages.

## Summary

- [Newly added packages](#newly-added-packages): 1 package
- [Breaking changes](#breaking-changes): 6 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 22 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 3 packages
- [Other minor version bumps](#other-minor-version-bumps): 8 packages
- [Other patch version bumps](#other-patch-version-bumps): 66 packages
- [Excluded dependency updates for packages](#excluded-dependency-updates-for-packages): 50 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/canon` (new, 0.1.0)](#backstagecanon-new-010)
- [Breaking changes](#breaking-changes)
  - [`@backstage/backend-app-api` (1.1.1 → 1.2.0)](#backstagebackend-app-api-111--120)
  - [`@backstage/backend-dynamic-feature-service` (0.5.3 → 0.6.0)](#backstagebackend-dynamic-feature-service-053--060)
  - [`@backstage/backend-openapi-utils` (0.4.1 → 0.5.0)](#backstagebackend-openapi-utils-041--050)
  - [`@backstage/backend-plugin-api` (1.1.1 → 1.2.0)](#backstagebackend-plugin-api-111--120)
  - [`@backstage/cli` (0.29.6 → 0.30.0)](#backstagecli-0296--0300)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.5.5 → 0.6.0)](#backstageplugin-scaffolder-backend-module-github-055--060)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/backend-defaults` (0.7.0 → 0.8.0)](#backstagebackend-defaults-070--080)
  - [`@backstage/plugin-auth-backend-module-atlassian-provider` (0.3.4 → 0.4.0)](#backstageplugin-auth-backend-module-atlassian-provider-034--040)
  - [`@backstage/plugin-auth-backend-module-auth0-provider` (0.1.4 → 0.2.0)](#backstageplugin-auth-backend-module-auth0-provider-014--020)
  - [`@backstage/plugin-auth-backend-module-aws-alb-provider` (0.3.2 → 0.4.0)](#backstageplugin-auth-backend-module-aws-alb-provider-032--040)
  - [`@backstage/plugin-auth-backend-module-bitbucket-provider` (0.2.4 → 0.3.0)](#backstageplugin-auth-backend-module-bitbucket-provider-024--030)
  - [`@backstage/plugin-auth-backend-module-bitbucket-server-provider` (0.1.4 → 0.2.0)](#backstageplugin-auth-backend-module-bitbucket-server-provider-014--020)
  - [`@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.3.4 → 0.4.0)](#backstageplugin-auth-backend-module-cloudflare-access-provider-034--040)
  - [`@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.3.4 → 0.4.0)](#backstageplugin-auth-backend-module-gcp-iap-provider-034--040)
  - [`@backstage/plugin-auth-backend-module-github-provider` (0.2.4 → 0.3.0)](#backstageplugin-auth-backend-module-github-provider-024--030)
  - [`@backstage/plugin-auth-backend-module-gitlab-provider` (0.2.4 → 0.3.0)](#backstageplugin-auth-backend-module-gitlab-provider-024--030)
  - [`@backstage/plugin-auth-backend-module-google-provider` (0.2.4 → 0.3.0)](#backstageplugin-auth-backend-module-google-provider-024--030)
  - [`@backstage/plugin-auth-backend-module-microsoft-provider` (0.2.4 → 0.3.0)](#backstageplugin-auth-backend-module-microsoft-provider-024--030)
  - [`@backstage/plugin-auth-backend-module-oauth2-provider` (0.3.4 → 0.4.0)](#backstageplugin-auth-backend-module-oauth2-provider-034--040)
  - [`@backstage/plugin-auth-backend-module-oidc-provider` (0.3.4 → 0.4.0)](#backstageplugin-auth-backend-module-oidc-provider-034--040)
  - [`@backstage/plugin-auth-backend-module-okta-provider` (0.1.4 → 0.2.0)](#backstageplugin-auth-backend-module-okta-provider-014--020)
  - [`@backstage/plugin-auth-backend-module-onelogin-provider` (0.2.4 → 0.3.0)](#backstageplugin-auth-backend-module-onelogin-provider-024--030)
  - [`@backstage/plugin-auth-backend-module-pinniped-provider` (0.2.4 → 0.3.0)](#backstageplugin-auth-backend-module-pinniped-provider-024--030)
  - [`@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.4.3 → 0.5.0)](#backstageplugin-auth-backend-module-vmware-cloud-provider-043--050)
  - [`@backstage/plugin-auth-node` (0.5.6 → 0.6.0)](#backstageplugin-auth-node-056--060)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.7.1 → 0.8.0)](#backstageplugin-scaffolder-backend-module-gitlab-071--080)
  - [`@backstage/plugin-scaffolder-node` (0.6.3 → 0.7.0)](#backstageplugin-scaffolder-node-063--070)
  - [`@backstage/repo-tools` (0.12.1 → 0.13.0)](#backstagerepo-tools-0121--0130)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-kubernetes-cluster` (0.0.21 → 0.0.22)](#backstageplugin-kubernetes-cluster-0021--0022)
  - [`@backstage/plugin-signals` (0.0.15 → 0.0.16)](#backstageplugin-signals-0015--0016)
  - [`@backstage/plugin-signals-react` (0.0.9 → 0.0.10)](#backstageplugin-signals-react-009--0010)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/backend-test-utils` (1.2.1 → 1.3.0)](#backstagebackend-test-utils-121--130)
  - [`@backstage/plugin-catalog` (1.26.1 → 1.27.0)](#backstageplugin-catalog-1261--1270)
  - [`@backstage/plugin-catalog-backend` (1.30.0 → 1.31.0)](#backstageplugin-catalog-backend-1300--1310)
  - [`@backstage/plugin-catalog-node` (1.15.1 → 1.16.0)](#backstageplugin-catalog-node-1151--1160)
  - [`@backstage/plugin-scaffolder` (1.27.5 → 1.28.0)](#backstageplugin-scaffolder-1275--1280)
  - [`@backstage/plugin-scaffolder-backend` (1.29.0 → 1.30.0)](#backstageplugin-scaffolder-backend-1290--1300)
  - [`@backstage/plugin-techdocs-node` (1.12.16 → 1.13.0)](#backstageplugin-techdocs-node-11216--1130)
  - [`@techdocs/cli` (1.8.25 → 1.9.0)](#techdocscli-1825--190)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/app-defaults` (1.5.16 → 1.5.17)](#backstageapp-defaults-1516--1517)
  - [`@backstage/cli-node` (0.2.12 → 0.2.13)](#backstagecli-node-0212--0213)
  - [`@backstage/config-loader` (1.9.5 → 1.9.6)](#backstageconfig-loader-195--196)
  - [`@backstage/core-app-api` (1.15.4 → 1.15.5)](#backstagecore-app-api-1154--1155)
  - [`@backstage/core-compat-api` (0.3.5 → 0.3.6)](#backstagecore-compat-api-035--036)
  - [`@backstage/core-components` (0.16.3 → 0.16.4)](#backstagecore-components-0163--0164)
  - [`@backstage/core-plugin-api` (1.10.3 → 1.10.4)](#backstagecore-plugin-api-1103--1104)
  - [`@backstage/create-app` (0.5.24 → 0.5.25)](#backstagecreate-app-0524--0525)
  - [`@backstage/dev-utils` (1.1.6 → 1.1.7)](#backstagedev-utils-116--117)
  - [`@backstage/frontend-app-api` (0.10.4 → 0.10.5)](#backstagefrontend-app-api-0104--0105)
  - [`@backstage/frontend-defaults` (0.1.5 → 0.1.6)](#backstagefrontend-defaults-015--016)
  - [`@backstage/frontend-plugin-api` (0.9.4 → 0.9.5)](#backstagefrontend-plugin-api-094--095)
  - [`@backstage/frontend-test-utils` (0.2.5 → 0.2.6)](#backstagefrontend-test-utils-025--026)
  - [`@backstage/integration-react` (1.2.3 → 1.2.4)](#backstageintegration-react-123--124)
  - [`@backstage/plugin-api-docs` (0.12.3 → 0.12.4)](#backstageplugin-api-docs-0123--0124)
  - [`@backstage/plugin-api-docs-module-protoc-gen-doc` (0.1.8 → 0.1.9)](#backstageplugin-api-docs-module-protoc-gen-doc-018--019)
  - [`@backstage/plugin-app` (0.1.5 → 0.1.6)](#backstageplugin-app-015--016)
  - [`@backstage/plugin-app-visualizer` (0.1.15 → 0.1.16)](#backstageplugin-app-visualizer-0115--0116)
  - [`@backstage/plugin-auth-react` (0.1.11 → 0.1.12)](#backstageplugin-auth-react-0111--0112)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.4.7 → 0.4.8)](#backstageplugin-catalog-backend-module-aws-047--048)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.3.1 → 0.3.2)](#backstageplugin-catalog-backend-module-azure-031--032)
  - [`@backstage/plugin-catalog-backend-module-backstage-openapi` (0.4.4 → 0.4.5)](#backstageplugin-catalog-backend-module-backstage-openapi-044--045)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.4.4 → 0.4.5)](#backstageplugin-catalog-backend-module-bitbucket-cloud-044--045)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.3.1 → 0.3.2)](#backstageplugin-catalog-backend-module-bitbucket-server-031--032)
  - [`@backstage/plugin-catalog-backend-module-github` (0.7.9 → 0.7.10)](#backstageplugin-catalog-backend-module-github-079--0710)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.6.2 → 0.6.3)](#backstageplugin-catalog-backend-module-gitlab-062--063)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.11.1 → 0.11.2)](#backstageplugin-catalog-backend-module-ldap-0111--0112)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.6.6 → 0.6.7)](#backstageplugin-catalog-backend-module-msgraph-066--067)
  - [`@backstage/plugin-catalog-backend-module-openapi` (0.2.6 → 0.2.7)](#backstageplugin-catalog-backend-module-openapi-026--027)
  - [`@backstage/plugin-catalog-backend-module-unprocessed` (0.5.4 → 0.5.5)](#backstageplugin-catalog-backend-module-unprocessed-054--055)
  - [`@backstage/plugin-catalog-graph` (0.4.15 → 0.4.16)](#backstageplugin-catalog-graph-0415--0416)
  - [`@backstage/plugin-catalog-import` (0.12.9 → 0.12.10)](#backstageplugin-catalog-import-0129--01210)
  - [`@backstage/plugin-catalog-react` (1.15.1 → 1.15.2)](#backstageplugin-catalog-react-1151--1152)
  - [`@backstage/plugin-catalog-unprocessed-entities` (0.2.13 → 0.2.14)](#backstageplugin-catalog-unprocessed-entities-0213--0214)
  - [`@backstage/plugin-config-schema` (0.1.64 → 0.1.65)](#backstageplugin-config-schema-0164--0165)
  - [`@backstage/plugin-devtools` (0.1.23 → 0.1.24)](#backstageplugin-devtools-0123--0124)
  - [`@backstage/plugin-home` (0.8.4 → 0.8.5)](#backstageplugin-home-084--085)
  - [`@backstage/plugin-home-react` (0.1.22 → 0.1.23)](#backstageplugin-home-react-0122--0123)
  - [`@backstage/plugin-kubernetes` (0.12.3 → 0.12.4)](#backstageplugin-kubernetes-0123--0124)
  - [`@backstage/plugin-kubernetes-backend` (0.19.2 → 0.19.3)](#backstageplugin-kubernetes-backend-0192--0193)
  - [`@backstage/plugin-kubernetes-common` (0.9.2 → 0.9.3)](#backstageplugin-kubernetes-common-092--093)
  - [`@backstage/plugin-kubernetes-node` (0.2.2 → 0.2.3)](#backstageplugin-kubernetes-node-022--023)
  - [`@backstage/plugin-kubernetes-react` (0.5.3 → 0.5.4)](#backstageplugin-kubernetes-react-053--054)
  - [`@backstage/plugin-notifications` (0.5.1 → 0.5.2)](#backstageplugin-notifications-051--052)
  - [`@backstage/plugin-notifications-backend` (0.5.1 → 0.5.2)](#backstageplugin-notifications-backend-051--052)
  - [`@backstage/plugin-notifications-backend-module-email` (0.3.5 → 0.3.6)](#backstageplugin-notifications-backend-module-email-035--036)
  - [`@backstage/plugin-org` (0.6.35 → 0.6.36)](#backstageplugin-org-0635--0636)
  - [`@backstage/plugin-org-react` (0.1.34 → 0.1.35)](#backstageplugin-org-react-0134--0135)
  - [`@backstage/plugin-permission-node` (0.8.7 → 0.8.8)](#backstageplugin-permission-node-087--088)
  - [`@backstage/plugin-permission-react` (0.4.30 → 0.4.31)](#backstageplugin-permission-react-0430--0431)
  - [`@backstage/plugin-scaffolder-node-test-utils` (0.1.18 → 0.1.19)](#backstageplugin-scaffolder-node-test-utils-0118--0119)
  - [`@backstage/plugin-scaffolder-react` (1.14.4 → 1.14.5)](#backstageplugin-scaffolder-react-1144--1145)
  - [`@backstage/plugin-search` (1.4.22 → 1.4.23)](#backstageplugin-search-1422--1423)
  - [`@backstage/plugin-search-backend-module-catalog` (0.3.0 → 0.3.1)](#backstageplugin-search-backend-module-catalog-030--031)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.40 → 0.5.41)](#backstageplugin-search-backend-module-pg-0540--0541)
  - [`@backstage/plugin-search-backend-node` (1.3.7 → 1.3.8)](#backstageplugin-search-backend-node-137--138)
  - [`@backstage/plugin-search-react` (1.8.5 → 1.8.6)](#backstageplugin-search-react-185--186)
  - [`@backstage/plugin-techdocs` (1.12.2 → 1.12.3)](#backstageplugin-techdocs-1122--1123)
  - [`@backstage/plugin-techdocs-addons-test-utils` (1.0.44 → 1.0.45)](#backstageplugin-techdocs-addons-test-utils-1044--1045)
  - [`@backstage/plugin-techdocs-backend` (1.11.5 → 1.11.6)](#backstageplugin-techdocs-backend-1115--1116)
  - [`@backstage/plugin-techdocs-module-addons-contrib` (1.1.20 → 1.1.21)](#backstageplugin-techdocs-module-addons-contrib-1120--1121)
  - [`@backstage/plugin-techdocs-react` (1.2.13 → 1.2.14)](#backstageplugin-techdocs-react-1213--1214)
  - [`@backstage/plugin-user-settings` (0.8.18 → 0.8.19)](#backstageplugin-user-settings-0818--0819)
  - [`@backstage/test-utils` (1.7.4 → 1.7.5)](#backstagetest-utils-174--175)
  - [`@backstage/theme` (0.6.3 → 0.6.4)](#backstagetheme-063--064)
  - [`@backstage/version-bridge` (1.0.10 → 1.0.11)](#backstageversion-bridge-1010--1011)
- [Excluded dependency updates for packages](#excluded-dependency-updates-for-packages)

## Newly added packages

### `@backstage/canon` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- 72c9800: **BREAKING**: Merged the Stack and Inline component into a single component called Flex.
- 65f4acc: This is the first alpha release for Canon. As part of this release we are introducing 5 layout components and 7 components. All theming is done through CSS variables.
- 1e4ccce: **BREAKING**: Fixing css structure and making sure that props are applying the correct styles for all responsive values.
- 8309bdb: Updated core CSS tokens and fixing the Button component accordingly.

##### Patch Changes

- 989af25: Removed client directive as they are not needed in React 18.
- f44e5cf: Fix spacing props not being applied for custom values.
- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

## Breaking changes

### `@backstage/backend-app-api` (1.1.1 → 1.2.0)

#### 1.2.0

##### Minor Changes

- 92a56f6: **BREAKING ALPHA**: Removed the deprecated `featureDiscoveryServiceFactory`. Existing usage can be replaced with `discoveryFeatureLoader` from `@backstage/backend-defaults`.

##### Patch Changes

- ad9aba2: The log message written when plugins fail to initialize now includes the error that caused the plugin startup to fail.
- 5622362: Added a configuration to permit backend plugin failures on startup:

  ```yaml
  backend:
    ...
    startup:
      plugins:
        plugin-x:
          onPluginBootFailure: continue
  ```

  This configuration permits `plugin-x` to fail on startup. Omitting the
  `onPluginBootFailure` configuration matches the previous behavior, wherein any
  individual plugin failure aborts backend startup.

  The default can also be changed, so that continuing on failure is the default
  unless otherwise specified:

  ```yaml
  backend:
    startup:
      default:
        onPluginBootFailure: continue
      plugins:
        catalog:
          onPluginBootFailure: abort
  ```

### `@backstage/backend-dynamic-feature-service` (0.5.3 → 0.6.0)

#### 0.6.0

##### Minor Changes

- 92a56f6: **BREAKING**: removed the deprecated `dynamicPluginsFeatureDiscoveryServiceFactory`.

##### Patch Changes

- 96c20cd: Make sure changes are successfully tracked before starting up scanner.

### `@backstage/backend-openapi-utils` (0.4.1 → 0.5.0)

#### 0.5.0

##### Minor Changes

- 700d32b: **BREAKING**: The `wrapInOpenApiTestServer` and `wrapServer` functions are now exported via `/testUtils` subpath. If you were importing these functions directly from the root of the package, you will need to update your imports to use the `/testUtils` subpath:

  ```diff
  - import { wrapInOpenApiTestServer } from '@backstage/backend-openapi-utils';
  + import { wrapInOpenApiTestServer } from '@backstage/backend-openapi-utils/testUtils';
  ```

  or

  ```diff
  - import { wrapServer } from '@backstage/backend-openapi-utils';
  + import { wrapServer } from '@backstage/backend-openapi-utils/testUtils';
  ```

### `@backstage/backend-plugin-api` (1.1.1 → 1.2.0)

#### 1.2.0

##### Minor Changes

- 92a56f6: **BREAKING ALPHA**: Removed the deprecated `featureDiscoveryServiceRef` and `FeatureDiscoveryService`.
- a4aa244: This change introduces the `auditor` service definition.

##### Patch Changes

- 9ddfd94: Added new `PermissionsRegistryService` that is used by plugins to register permissions, resource types, and rules into the permission system. This replaces the existing `createPermissionIntegrationRouter` from `@backstage/plugin-permission-node`.
- 72cddf2: Updated `PermissionsRegistryService` to use `PermissionResourceRef`s and added the `getPermissionRuleset` method.

### `@backstage/cli` (0.29.6 → 0.30.0)

#### 0.30.0

##### Minor Changes

- cb76663: **BREAKING**: Add support for native ESM in Node.js code. This changes the behavior of dynamic import expressions in Node.js code. Typically this can be fixed by replacing `import(...)` with `require(...)`, with an `as typeof import(...)` cast if needed for types. This is because dynamic imports will no longer be transformed to `require(...)` calls, but instead be left as-is. This in turn allows you to load ESM modules from CommonJS code using `import(...)`.

  This change adds support for the following in Node.js packages, across type checking, package builds, runtime transforms and Jest tests:

  - Dynamic imports that load ESM modules from CommonJS code.
  - Both `.mjs` and `.mts` files as explicit ESM files, as well as `.cjs` and `.cts` as explicit CommonJS files.
  - Support for the `"type": "module"` field in `package.json` to indicate that the package is an ESM package.

  There are a few caveats to be aware of:

  - To enable support for native ESM in tests, you need to run the tests with the `--experimental-vm-modules` flag enabled, typically via `NODE_OPTIONS='--experimental-vm-modules'`.
  - Declaring a package as `"type": "module"` in `package.json` is supported, but in tests it will cause all local transitive dependencies to also be treated as ESM, regardless of whether they declare `"type": "module"` or not.
  - Node.js has an [ESM interoperability layer with CommonJS](https://nodejs.org/docs/latest-v22.x/api/esm.html#interoperability-with-commonjs) that allows for imports from ESM to identify named exports in CommonJS packages. This interoperability layer is **only** enabled when importing packages with a `.cts` or `.cjs` extension. This is because the interoperability layer is not fully compatible with the NPM ecosystem, and would break package if it was enabled for `.js` files.
  - Dynamic imports of CommonJS packages will vary in shape depending on the runtime, i.e. test vs local development, etc. It is therefore recommended to avoid dynamic imports of CommonJS packages and instead use `require`, or to use the explicit CommonJS extensions as mentioned above. If you do need to dynamically import CommonJS packages, avoid using `default` exports, as the shape of them vary across different environments and you would otherwise need to manually unwrap the import based on the shape of the module object.

- b30e788: The `new` command is now powered by a new template system that allows you to define your own templates in a declarative way, as well as import existing templates from external sources. See the [CLI templates documentation](https://backstage.io/docs/tooling/cli/templates) for more information.

  The following flags for the `new` command have been deprecated and will be removed in a future release:

  - `--license=<license>`: Configure the global `license` instead.
  - `--no-private`: Configure the global `private` instead.
  - `--baseVersion=<version>`: Configure the global `version` instead.
  - `--npmRegistry=<url>`: Configure the global `publishRegistry` instead.
  - `--scope=<scope>`: Configure the global `namePrefix` and/or `namePluginInfix` instead.

  As part of this change the template IDs and their options have changed. The following backwards compatibility mappings for the `--select` and `--option` flags are enabled when using the default set of templates, but they will also be removed in the future:

  - `--select=plugin` is mapped to `--select=frontend-plugin` instead.
  - `--option=id=<id>` is mapped to `--option=pluginId=<id>` instead.

##### Patch Changes

- f17ef61: The `versions:bump` command will now reject `*` as a pattern.
- 86c72c1: The packing process when running `build-workspace` with the `--alwaysYarnPack` flag now respects the `BACKSTAGE_CLI_BUILD_PARALLEL` environment variable, defaulting parallel work limits based on CPU availability.
- 2167afc: Treat static file assets as always being free from side effects in package builds.
- f54eed0: Fixed an issue where default feature type information wasn't being added to package.json/exports before publishing if exports didn't exist beforehand
- 90a1edf: Add check to make sure that the `--link` option for the `start` command is a valid workspace.
- 207f88f: Fixed the file path pattern of many static assets output as part of the frontend build process, where there was an extra `.` before the extension, leading to names like `image-af7946b..png`.
- 9638f6d: Only allow pass through of `.mjs` in Jest transform if static ESM is supported.
- 9d49e04: Replaced dependency `node-libs-browser` with `node-stdlib-browser`
- 2c14147: Corrected path when trying to add dependency to respective `package.json` when using `yarn new` templates
- f21b125: Ensure that both global-agent and undici agents are enabled when proxying is enabled.

### `@backstage/plugin-scaffolder-backend-module-github` (0.5.5 → 0.6.0)

#### 0.6.0

##### Minor Changes

- bb8302b: **BREAKING**: The `remoteUrl` output is no longer required, it can be empty only when using the new `createWhenEmpty` boolean flag.

##### Patch Changes

- 5c187f9: **DEPRECATION**: The `getOctokitOptions` function signature with `repoUrl` option has been deprecated in favour of a function signature with individual `host`, `owner`, and `repo` parameters:

  ```diff
    const octokitOptions = await getOctokitOptions({
      integrations,
      credentialsProvider,
      token,
  -   repoUrl,
  +   host,
  +   owner,
  +   repo,
    });
  ```

- b98d511: clean up github action schemas
- 5d469c9: Added support for autocompletion of GitHub branches in scaffolder
- 8e67e4a: Added support for autocompletion to GithubRepoPicker component

## 0.x minor version bumps

### `@backstage/backend-defaults` (0.7.0 → 0.8.0)

#### 0.8.0

##### Minor Changes

- a4aa244: This change introduces the `auditor` service implementation details.

##### Patch Changes

- f866b86: Internal refactor to use explicit `require` for lazy-loading dependency.
- 92a56f6: Internal refactor to stop importing the removed `FeatureDiscoveryService` from `@backstage/backend-plugin-api`.
- a19cb2b: Added default implementation for the new `PermissionsRegistryService`.
- 0d39029: Do not send `etag` or `If-Modified-Since` headers for gitlab artifact urls
- c7609de: Allow passing IP type to use with cloud-sql-connector
- 3740229: In the different `UrlReadersService`, the `search` method have been updated to use the `readUrl` if the given URL doesn't contain a pattern.
  For `UrlReaders` that didn't implement the `search` method, `readUrl` is now called internally and throws if the given URL doesn't contain a pattern.
- 72cddf2: Updated `PermissionsRegistryService` to use `PermissionResourceRef`s and added the `getPermissionRuleset` method.

### `@backstage/plugin-auth-backend-module-atlassian-provider` (0.3.4 → 0.4.0)

#### 0.4.0

##### Minor Changes

- 61f464e: Added `auth.providers.<providerId>.sessionDuration` config for auth providers to allow the lifespan of user sessions to be configured.

### `@backstage/plugin-auth-backend-module-auth0-provider` (0.1.4 → 0.2.0)

#### 0.2.0

##### Minor Changes

- 61f464e: Added `auth.providers.<providerId>.sessionDuration` config for auth providers to allow the lifespan of user sessions to be configured.

### `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.3.2 → 0.4.0)

#### 0.4.0

##### Minor Changes

- 61f464e: Added `auth.providers.<providerId>.sessionDuration` config for auth providers to allow the lifespan of user sessions to be configured.

### `@backstage/plugin-auth-backend-module-bitbucket-provider` (0.2.4 → 0.3.0)

#### 0.3.0

##### Minor Changes

- 61f464e: Added `auth.providers.<providerId>.sessionDuration` config for auth providers to allow the lifespan of user sessions to be configured.

### `@backstage/plugin-auth-backend-module-bitbucket-server-provider` (0.1.4 → 0.2.0)

#### 0.2.0

##### Minor Changes

- 61f464e: Added `auth.providers.<providerId>.sessionDuration` config for auth providers to allow the lifespan of user sessions to be configured.

### `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.3.4 → 0.4.0)

#### 0.4.0

##### Minor Changes

- 61f464e: Added `auth.providers.<providerId>.sessionDuration` config for auth providers to allow the lifespan of user sessions to be configured.

### `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.3.4 → 0.4.0)

#### 0.4.0

##### Minor Changes

- 61f464e: Added `auth.providers.<providerId>.sessionDuration` config for auth providers to allow the lifespan of user sessions to be configured.

### `@backstage/plugin-auth-backend-module-github-provider` (0.2.4 → 0.3.0)

#### 0.3.0

##### Minor Changes

- 61f464e: Added `auth.providers.<providerId>.sessionDuration` config for auth providers to allow the lifespan of user sessions to be configured.

##### Patch Changes

- b40af03: Fixed a bug where the requested scope was ignored when refreshing sessions for a GitHub OAuth App. This would lead to access tokens being returned that didn't have the requested scope, and in turn errors when trying to use these tokens.

  As part of this fix all existing sessions are being revoked in order to ensure that they receive the correct scope.

### `@backstage/plugin-auth-backend-module-gitlab-provider` (0.2.4 → 0.3.0)

#### 0.3.0

##### Minor Changes

- 61f464e: Added `auth.providers.<providerId>.sessionDuration` config for auth providers to allow the lifespan of user sessions to be configured.

### `@backstage/plugin-auth-backend-module-google-provider` (0.2.4 → 0.3.0)

#### 0.3.0

##### Minor Changes

- 61f464e: Added `auth.providers.<providerId>.sessionDuration` config for auth providers to allow the lifespan of user sessions to be configured.

### `@backstage/plugin-auth-backend-module-microsoft-provider` (0.2.4 → 0.3.0)

#### 0.3.0

##### Minor Changes

- 61f464e: Added `auth.providers.<providerId>.sessionDuration` config for auth providers to allow the lifespan of user sessions to be configured.

### `@backstage/plugin-auth-backend-module-oauth2-provider` (0.3.4 → 0.4.0)

#### 0.4.0

##### Minor Changes

- 61f464e: Added `auth.providers.<providerId>.sessionDuration` config for auth providers to allow the lifespan of user sessions to be configured.

### `@backstage/plugin-auth-backend-module-oidc-provider` (0.3.4 → 0.4.0)

#### 0.4.0

##### Minor Changes

- 61f464e: Added `auth.providers.<providerId>.sessionDuration` config for auth providers to allow the lifespan of user sessions to be configured.

##### Patch Changes

- 0afc4f2: Simplify the `start` method in the `authenticator` to just return the helper promise

### `@backstage/plugin-auth-backend-module-okta-provider` (0.1.4 → 0.2.0)

#### 0.2.0

##### Minor Changes

- 61f464e: Added `auth.providers.<providerId>.sessionDuration` config for auth providers to allow the lifespan of user sessions to be configured.

### `@backstage/plugin-auth-backend-module-onelogin-provider` (0.2.4 → 0.3.0)

#### 0.3.0

##### Minor Changes

- 61f464e: Added `auth.providers.<providerId>.sessionDuration` config for auth providers to allow the lifespan of user sessions to be configured.

### `@backstage/plugin-auth-backend-module-pinniped-provider` (0.2.4 → 0.3.0)

#### 0.3.0

##### Minor Changes

- 61f464e: Added `auth.providers.<providerId>.sessionDuration` config for auth providers to allow the lifespan of user sessions to be configured.

### `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.4.3 → 0.5.0)

#### 0.5.0

##### Minor Changes

- 61f464e: Added `auth.providers.<providerId>.sessionDuration` config for auth providers to allow the lifespan of user sessions to be configured.

### `@backstage/plugin-auth-node` (0.5.6 → 0.6.0)

#### 0.6.0

##### Minor Changes

- 61f464e: Added `auth.providers.<providerId>.sessionDuration` config for auth providers to allow the lifespan of user sessions to be configured.

##### Patch Changes

- 8699b79: Removed unused dependencies
- cb316fc: Add an `error` handler to the `strategy` to reject the `executeRedirectStrategy`
- ab9a6fb: Added `scopeAlreadyGranted` property to `OAuthAuthenticatorRefreshInput`, signaling to the provider whether the requested scope has already been granted when persisting session scope.

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.7.1 → 0.8.0)

#### 0.8.0

##### Minor Changes

- 06eee14: Support empty repository creation in gitlab without workspace pushing and conditionally skip if the repository already exists.

##### Patch Changes

- a0419a6: Made gitlab:group:ensureExists action idempotent
- 9d04e91: Fix automated assignment of reviewers for instances without premium/ultimate license (404). Introduce opt-in flag for automatic reviewer assignment based on approval rules
- 9545c5f: `createGitlabProjectMigrateAction` can now output the `migrationId`
- e52cee6: Made gitlab:issues:create action idempotent.
- fe44946: Fixed bug of passing wrong value to `onChange` handler when using `GitLab` autocomplete
- 66e392f: Making publish:gitlab:merge-request idempotent.
- a7b22eb: Fixed bug in gitlabRepoPush where it was looking in the wrong place in the exception response from gitbeaker when checking if the branch already exists

### `@backstage/plugin-scaffolder-node` (0.6.3 → 0.7.0)

#### 0.7.0

##### Minor Changes

- dc8dd4b: Added new `createTemplateFilter`, `createTemplateGlobalFunction`, `createTemplateGlobalValue` for template extensions.
- a4aa244: This change introduces an optional `taskId` property to `TaskContext`.

### `@backstage/repo-tools` (0.12.1 → 0.13.0)

#### 0.13.0

##### Minor Changes

- b78b2b0: Adds a new experimental hidden command `package-docs` for generating API documentation. This is currently only intended for use in the Backstage main repository.

##### Patch Changes

- 474b748: Improve knip reports by using a single workspace-based config
- 98ddf05: The `api-reports` command is now also able to generate SQL reports, enabled by the `--sql-reports` flag.
- cb76663: Internal refactor to support native ESM.
- ecd01a9: Internal refactor of API report generation.
- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

## 0.0.x patch version bumps

### `@backstage/plugin-kubernetes-cluster` (0.0.21 → 0.0.22)

#### 0.0.22

##### Patch Changes

- d80b08f: Improved rendering of Kubernetes resources' metadata.
- ca3da29: The `/clusters` endpoint is now protected by the `kubernetes.clusters.read` permission.
  The `/services/:serviceId` endpoint is now protected by the `kubernetes.resources.read` permission.
  The `/resources` endpoints are now protected by the `kubernetes.resources.read` permission.
- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/plugin-signals` (0.0.15 → 0.0.16)

#### 0.0.16

##### Patch Changes

- 005d241: Added support for the new frontend system via `/alpha` export.
- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/plugin-signals-react` (0.0.9 → 0.0.10)

#### 0.0.10

##### Patch Changes

- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

## Other minor version bumps

### `@backstage/backend-test-utils` (1.2.1 → 1.3.0)

#### 1.3.0

##### Minor Changes

- dd05a97: Added mocks for the new `PermissionsRegistryService`.
- a4aa244: This change introduces mocks for the `auditor` service.

##### Patch Changes

- f866b86: Internal refactor to use explicit `require` for lazy-loading dependency.
- fb051f2: Sync feature installation compatibility logic with `@backstage/backend-app-api`.
- 72cddf2: Added the new `getPermissionRuleset` method to `mockServices.permissionsRegistry`.

### `@backstage/plugin-catalog` (1.26.1 → 1.27.0)

#### 1.27.0

##### Minor Changes

- b07756e: The Entity Page now retains the visibility of the Inspect Dialog after a reload. This allows sharing the URL with the dialog open.

##### Patch Changes

- 7a15cff: Revert client side paginated catalog table to using built in Material Table toolbar component
- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/plugin-catalog-backend` (1.30.0 → 1.31.0)

#### 1.31.0

##### Minor Changes

- 9b9737c: Added support for emitting entities with an explicit location key during processing.
- 8805f93: The catalog backend now supports the new `PermissionsRegistryService`, which can be used to add custom permission rules.
- 5aebc13: The `UrlReaderProccessor` accepts a new config flag `catalog.useUrlReadersSearch` to always call the `search` method of `UrlReaders`.

  This flag currently defaults to `false`, but adopters are encouraged to enable it as this behavior will be the default in a future release.

  Previous behavior was to call the `search` method only if the parsed Git URL's filename contained a wildcard and use `readUrl` otherwise. `UrlReaderService` must implement this logic in the `search` method instead.

  This allows each `UrlReaderService` implementation to check whether it's a search URL (that contains a wildcard pattern) or not using logic that is specific to each provider.

- a4aa244: This change integrates the `auditor` service into the Catalog plugin.

##### Patch Changes

- c9139e1: Ignore benign database conflict errors during stitching, now logged with debug level instead.
- f178b12: Cleanup `refresh_state_references` for entity processors and providers that are no longer in control of a `refresh_state` row for entity
- cd372e4: Improved performance when applying conditional decisions to entities within the permission framework.
- 4ae6884: Fixed an bug in the entity processing caching that would prevent entities that were emitted during processing to be restored after being overridden.
- ef73f97: Updated permission integration to use new permission resource ref.

### `@backstage/plugin-catalog-node` (1.15.1 → 1.16.0)

#### 1.16.0

##### Minor Changes

- b4183ad: Added new `catalogEntityPermissionResourceRef` export via the `/alpha` sub-path.
- 9b9737c: Added the `locationKey` option to `processingResult.entity(...)`.

##### Patch Changes

- 4a941e7: Deprecated the alpha `catalogPermissionExtensionPoint` and related types, since the same functionality is now available via the new `PermissionsRegistryService`.

### `@backstage/plugin-scaffolder` (1.27.5 → 1.28.0)

#### 1.28.0

##### Minor Changes

- 17088d2: Updating the `TaskLogStream` to take up all space in a running task, and also show the last line of the log by default
- 5d469c9: Added support for autocompletion of GitHub branches in scaffolder
- 8e67e4a: Added support for autocompletion to GithubRepoPicker component

##### Patch Changes

- 82300ea: Added support for experimental form decorators when dry-running templates in the template editor.
- eb3d91a: Use the custom error page if provided for displaying errors instead of the default error page
- 3107f1f: Fixed a bug in the BitbucketRepoBranchPicker component that crashed the scaffolder
- fe44946: Fixed bug of passing wrong value to `onChange` handler when using `GitLab` autocomplete
- 3edf7e7: Add schema output return type to the `makeFieldSchema` function return
- 1e935f0: Added conditional rendering of `oneOf` output schemas on the Installed Actions page for scaffolder actions
- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.
- 65d7020: Use template title for ongoing task page header

### `@backstage/plugin-scaffolder-backend` (1.29.0 → 1.30.0)

#### 1.30.0

##### Minor Changes

- dc8dd4b: Added new `createTemplateFilter`, `createTemplateGlobalFunction`, `createTemplateGlobalValue` for template extensions.
- a4aa244: This change integrates the `auditor` service into the Scaffolder plugin.
- 3d6ef79: Support file globbing in fs:delete
- 91f3313: Added experimental flag for scaffolder to wait for running tasks to complete on shutdown

  Enabling the `EXPERIMENTAL_gracefulShutdown` flag in the scaffolder config will make the
  scaffolder block the shutdown process until all running tasks have completed. This is useful
  when there is a need to ensure that all tasks have completed before the scaffolder is shut down.

  Please note, that the `TaskWorker` `stop` method is now asynchronous and awaited for the
  tasks to complete when the experimental flag is enabled.

##### Patch Changes

- 37ab712: Fixed an issue where invalid expressions or non-object values in `step.each` caused an error.
- 1e935f0: Added conditional rendering of `oneOf` output schemas on the Installed Actions page for scaffolder actions

### `@backstage/plugin-techdocs-node` (1.12.16 → 1.13.0)

#### 1.13.0

##### Minor Changes

- 8de3d2d: Allow configurable optional retries for publisher AWS S3 operations.

### `@techdocs/cli` (1.8.25 → 1.9.0)

#### 1.9.0

##### Minor Changes

- 8de3d2d: Allow configurable optional retries for publisher AWS S3 operations.

##### Patch Changes

- 69f84ac: Internal update to work with dynamic imports.

## Other patch version bumps

### `@backstage/app-defaults` (1.5.16 → 1.5.17)

#### 1.5.17

##### Patch Changes

- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/cli-node` (0.2.12 → 0.2.13)

#### 0.2.13

##### Patch Changes

- cb76663: Added `type` field to `BackstagePackageJson` type.
- f54eed0: Fixed an issue where default feature type information wasn't being added to package.json/exports before publishing if exports didn't exist beforehand

### `@backstage/config-loader` (1.9.5 → 1.9.6)

#### 1.9.6

##### Patch Changes

- f866b86: Internal refactor to use explicit `require` for lazy-loading dependency.

### `@backstage/core-app-api` (1.15.4 → 1.15.5)

#### 1.15.5

##### Patch Changes

- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/core-compat-api` (0.3.5 → 0.3.6)

#### 0.3.6

##### Patch Changes

- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/core-components` (0.16.3 → 0.16.4)

#### 0.16.4

##### Patch Changes

- 9c9f4ff: Added `nestedValuesAsYaml` option to `StructuredMetadataTable` to render data as yaml.
- 47c27c2: Upgrade `dagre` to `@dagrejs/dagre`
- 17088d2: Updating the `TaskLogStream` to take up all space in a running task, and also show the last line of the log by default
- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/core-plugin-api` (1.10.3 → 1.10.4)

#### 1.10.4

##### Patch Changes

- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/create-app` (0.5.24 → 0.5.25)

#### 0.5.25

##### Patch Changes

- 132173b: Bumped create-app version.
- 84fdc40: Bumped create-app version.
- 5aa499b: Bumped create-app version.
- bfa4ea9: Enable `catalog.useUrlReadersSearch` configuration by default in newly created Backstage installations.

  This parameter makes `UrlReaderProcessor` always use the search method.
  New adopters are encouraged to enable it as this behavior will be the default in a future release.

### `@backstage/dev-utils` (1.1.6 → 1.1.7)

#### 1.1.7

##### Patch Changes

- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/frontend-app-api` (0.10.4 → 0.10.5)

#### 0.10.5

##### Patch Changes

- 3e21b8d: Added `getNodesByRoutePath` method to the `AppTreeApi`.
- f1efb47: Add support for defining multiple attachment points for extensions and blueprints.
- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/frontend-defaults` (0.1.5 → 0.1.6)

#### 0.1.6

##### Patch Changes

- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/frontend-plugin-api` (0.9.4 → 0.9.5)

#### 0.9.5

##### Patch Changes

- 3e21b8d: Added `getNodesByRoutePath` method to the `AppTreeApi`.
- f1efb47: Add support for defining multiple attachment points for extensions and blueprints.
- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.
- 9ff3322: Allow route references to be installed in multiple app instances as long as their name is the same.

### `@backstage/frontend-test-utils` (0.2.5 → 0.2.6)

#### 0.2.6

##### Patch Changes

- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/integration-react` (1.2.3 → 1.2.4)

#### 1.2.4

##### Patch Changes

- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/plugin-api-docs` (0.12.3 → 0.12.4)

#### 0.12.4

##### Patch Changes

- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/plugin-api-docs-module-protoc-gen-doc` (0.1.8 → 0.1.9)

#### 0.1.9

##### Patch Changes

- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/plugin-app` (0.1.5 → 0.1.6)

#### 0.1.6

##### Patch Changes

- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/plugin-app-visualizer` (0.1.15 → 0.1.16)

#### 0.1.16

##### Patch Changes

- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/plugin-auth-react` (0.1.11 → 0.1.12)

#### 0.1.12

##### Patch Changes

- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/plugin-catalog-backend-module-aws` (0.4.7 → 0.4.8)

#### 0.4.8

##### Patch Changes

- eb80a1a: Minor doc string update

### `@backstage/plugin-catalog-backend-module-azure` (0.3.1 → 0.3.2)

#### 0.3.2

##### Patch Changes

- eb80a1a: Minor doc string update

### `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.4.4 → 0.4.5)

#### 0.4.5

##### Patch Changes

- eb80a1a: Minor doc string update

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.4.4 → 0.4.5)

#### 0.4.5

##### Patch Changes

- eb80a1a: Minor doc string update

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.3.1 → 0.3.2)

#### 0.3.2

##### Patch Changes

- eb80a1a: Minor doc string update

### `@backstage/plugin-catalog-backend-module-github` (0.7.9 → 0.7.10)

#### 0.7.10

##### Patch Changes

- eb80a1a: Minor doc string update

### `@backstage/plugin-catalog-backend-module-gitlab` (0.6.2 → 0.6.3)

#### 0.6.3

##### Patch Changes

- 4db039a: Fix `GitlabOrgDiscoveryEntityProvider` group path not being encoded causing 404 when using a subgroup in `config.group`

### `@backstage/plugin-catalog-backend-module-ldap` (0.11.1 → 0.11.2)

#### 0.11.2

##### Patch Changes

- eb80a1a: Minor doc string update
- 636744a: Make `ldapOrg` config key optional

### `@backstage/plugin-catalog-backend-module-msgraph` (0.6.6 → 0.6.7)

#### 0.6.7

##### Patch Changes

- eb80a1a: Minor doc string update

### `@backstage/plugin-catalog-backend-module-openapi` (0.2.6 → 0.2.7)

#### 0.2.7

##### Patch Changes

- 7fc6f7c: Fix `resolveUrl` for split openapi definition relative path

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.5.4 → 0.5.5)

#### 0.5.5

##### Patch Changes

- 4e073c7: Use new `PermissionsRegistryService` instead of the deprecated `catalogPermissionExtensionPoint`.

### `@backstage/plugin-catalog-graph` (0.4.15 → 0.4.16)

#### 0.4.16

##### Patch Changes

- 719e48d: Fixed an issue causing the `CatalogGraphCard` to redraw its content whenever the parent component re-renders, resulting in flickering.
- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/plugin-catalog-import` (0.12.9 → 0.12.10)

#### 0.12.10

##### Patch Changes

- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/plugin-catalog-react` (1.15.1 → 1.15.2)

#### 1.15.2

##### Patch Changes

- b07756e: The Entity Page now retains the visibility of the Inspect Dialog after a reload. This allows sharing the URL with the dialog open.
- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/plugin-catalog-unprocessed-entities` (0.2.13 → 0.2.14)

#### 0.2.14

##### Patch Changes

- e09d3e8: Added alpha support for the New Frontend System
- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/plugin-config-schema` (0.1.64 → 0.1.65)

#### 0.1.65

##### Patch Changes

- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/plugin-devtools` (0.1.23 → 0.1.24)

#### 0.1.24

##### Patch Changes

- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/plugin-home` (0.8.4 → 0.8.5)

#### 0.8.5

##### Patch Changes

- aff6b47: feat: add cancel button for WidgetSettingsOverlay
- 8e86f96: Enable collision prevention by default in custom home page.

  This change ensures that items in the home page will not collide with each other
  making the user experience better.

- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/plugin-home-react` (0.1.22 → 0.1.23)

#### 0.1.23

##### Patch Changes

- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/plugin-kubernetes` (0.12.3 → 0.12.4)

#### 0.12.4

##### Patch Changes

- ca3da29: The `/clusters` endpoint is now protected by the `kubernetes.clusters.read` permission.
  The `/services/:serviceId` endpoint is now protected by the `kubernetes.resources.read` permission.
  The `/resources` endpoints are now protected by the `kubernetes.resources.read` permission.
- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/plugin-kubernetes-backend` (0.19.2 → 0.19.3)

#### 0.19.3

##### Patch Changes

- ac0e1ac: Fixed the lack of `secrets` to fetch from the kubernetes api by adding option to specify additional Objects which are not part of Default Objects
- ca3da29: The `/clusters` endpoint is now protected by the `kubernetes.clusters.read` permission.
  The `/services/:serviceId` endpoint is now protected by the `kubernetes.resources.read` permission.
  The `/resources` endpoints are now protected by the `kubernetes.resources.read` permission.

### `@backstage/plugin-kubernetes-common` (0.9.2 → 0.9.3)

#### 0.9.3

##### Patch Changes

- ac0e1ac: Fixed the lack of `secrets` to fetch from the kubernetes api by adding option to specify additional Objects which are not part of Default Objects
- ca3da29: The `/clusters` endpoint is now protected by the `kubernetes.clusters.read` permission.
  The `/services/:serviceId` endpoint is now protected by the `kubernetes.resources.read` permission.
  The `/resources` endpoints are now protected by the `kubernetes.resources.read` permission.

### `@backstage/plugin-kubernetes-node` (0.2.2 → 0.2.3)

#### 0.2.3

##### Patch Changes

- ac0e1ac: Fixed the lack of `secrets` to fetch from the kubernetes api by adding option to specify additional Objects which are not part of Default Objects

### `@backstage/plugin-kubernetes-react` (0.5.3 → 0.5.4)

#### 0.5.4

##### Patch Changes

- f35a754: Fixed bug in string-to-integer conversion to properly handle decimal values with BigInt.
- d80b08f: Improved rendering of Kubernetes resources' metadata.
- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/plugin-notifications` (0.5.1 → 0.5.2)

#### 0.5.2

##### Patch Changes

- 438c36c: added topic filter for notifications
- 005d241: Added support for the new frontend system via `/alpha` export.
- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/plugin-notifications-backend` (0.5.1 → 0.5.2)

#### 0.5.2

##### Patch Changes

- 438c36c: added topic filter for notifications

### `@backstage/plugin-notifications-backend-module-email` (0.3.5 → 0.3.6)

#### 0.3.6

##### Patch Changes

- 6259aa9: Add transport for Azure Communication Service

### `@backstage/plugin-org` (0.6.35 → 0.6.36)

#### 0.6.36

##### Patch Changes

- 9cf1260: Added support for `spec.profile.displayName` to be used in the `MyGroupsSidebarItem` component via the `EntityDisplayName` component when you are a member of multiple Groups.
- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/plugin-org-react` (0.1.34 → 0.1.35)

#### 0.1.35

##### Patch Changes

- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/plugin-permission-node` (0.8.7 → 0.8.8)

#### 0.8.8

##### Patch Changes

- 049d5d4: The returned router from `createPermissionIntegrationRouter` is now mutable, allowing for permissions and resources to be added after creation of the router.
- b71f634: Added a new `PermissionRuleset` type that encapsulates a lookup function for permission rules, which can be created by the new `PermissionsRegistryService` via the `getPermissionRuleset` method. The `createConditionTransformer` and `createConditionAuthorizer` functions have been adapted to receive these accessors as arguments, with their older counterparts being deprecated.
- a9621de: Added a new `createPermissionResourceRef` utility that encapsulates the constants and types related to a permission resource types. The `createConditionExports` and `createPermissionRule` functions have also been adapted to accept these references as arguments, deprecating their older counterparts.

### `@backstage/plugin-permission-react` (0.4.30 → 0.4.31)

#### 0.4.31

##### Patch Changes

- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/plugin-scaffolder-node-test-utils` (0.1.18 → 0.1.19)

#### 0.1.19

##### Patch Changes

- 7ec0a5a: Changing the default behaviour of the checkpoint in createMockActionContext. It will reduce the code boilerplate in the tests where checkpoint is used.
- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/plugin-scaffolder-react` (1.14.4 → 1.14.5)

#### 1.14.5

##### Patch Changes

- 656f67b: Reverted the validation in dependencies in scaffolder
- 2003fc2: Hide text output button if only one is present
- a35118f: build(deps): bump `immer` from 8.0.4 to 9.0.6
- 1283f06: Added missing `ajv` and `immer` dependencies to `@backstage/plugin-scaffolder-react`
- 3edf7e7: Add schema output return type to the `makeFieldSchema` function return
- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/plugin-search` (1.4.22 → 1.4.23)

#### 1.4.23

##### Patch Changes

- 63e1012: Added new extension points to extend search filters `SearchFilterBlueprint` and `SearchFilterResultTypeBlueprint`
- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/plugin-search-backend-module-catalog` (0.3.0 → 0.3.1)

#### 0.3.1

##### Patch Changes

- 8699b79: Removed unused dependencies
- eee8d76: Modified the logic for generating the location URL by encoding the entity property values with `encodeURIComponent`. This enhancement improves the safety and reliability of the URL.

### `@backstage/plugin-search-backend-module-pg` (0.5.40 → 0.5.41)

#### 0.5.41

##### Patch Changes

- 8699b79: Removed unused dependencies

### `@backstage/plugin-search-backend-node` (1.3.7 → 1.3.8)

#### 1.3.8

##### Patch Changes

- 8699b79: Removed unused dependencies

### `@backstage/plugin-search-react` (1.8.5 → 1.8.6)

#### 1.8.6

##### Patch Changes

- 63e1012: Added new extension points to extend search filters `SearchFilterBlueprint` and `SearchFilterResultTypeBlueprint`
- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/plugin-techdocs` (1.12.2 → 1.12.3)

#### 1.12.3

##### Patch Changes

- eb3d91a: Use the custom error page if provided for displaying errors instead of the default error page
- 524f0af: Add missing route ref to the `/alpha` entity content extension.
- f4be934: Changed the base URL in addLinkClickListener from window.location.origin to app.baseUrl for improved path handling. This fixes an issue where Backstage, when running on a subpath, was unable to handle non-Backstage URLs of the same origin correctly.
- 1f40e6b: Add optional props to `TechDocCustomHome` to allow for more flexibility:

  ```tsx
  import { TechDocsCustomHome } from '@backstage/plugin-techdocs';
  //...

  const options = { emptyRowsWhenPaging: false };
  const linkDestination = (entity: Entity): string | undefined => {
    return entity.metadata.annotations?.['external-docs'];
  };
  const techDocsTabsConfig = [
    {
      label: 'Recommended Documentation',
      panels: [
        {
          title: 'Golden Path',
          description: 'Documentation about standards to follow',
          panelType: 'DocsCardGrid',
          panelProps: { CustomHeader: () => <ContentHeader title='Golden Path'/> },
          filterPredicate: entity =>
            entity?.metadata?.tags?.includes('golden-path') ?? false,
        },
        {
          title: 'Recommended',
          description: 'Useful documentation',
          panelType: 'InfoCardGrid',
          panelProps: {
            CustomHeader: () => <ContentHeader title='Recommended' />
            linkDestination: linkDestination,
          },
          filterPredicate: entity =>
            entity?.metadata?.tags?.includes('recommended') ?? false,
        },
      ],
    },
    {
      label: 'Browse All',
      panels: [
        {
          description: 'Browse all docs',
          filterPredicate: filterEntity,
          panelType: 'TechDocsIndexPage',
          title: 'All',
          panelProps: { PageWrapper: React.Fragment, CustomHeader: React.Fragment, options: options },
        },
      ],
    },
  ];

  const AppRoutes = () => {
    <FlatRoutes>
      <Route
        path="/docs"
        element={
          <TechDocsCustomHome
            tabsConfig={techDocsTabsConfig}
            filter={{
              kind: ['Location', 'Resource', 'Component'],
              'metadata.annotations.featured-docs': CATALOG_FILTER_EXISTS,
            }}
            CustomPageWrapper={({ children }: React.PropsWithChildren<{}>) => (<PageWithHeader title="Docs" themeId="documentation">{children}</PageWithHeader>)}
          />
        }
      />
    </FlatRoutes>;
  };
  ```

  Add new Grid option called `InfoCardGrid` which is a more customizable card option for the Docs grid.

  ```tsx
  <InfoCardGrid
    entities={entities}
    linkContent="Learn more"
    linkDestination={entity => entity.metadata['external-docs']}
  />
  ```

  Expose existing `CustomDocsPanel` so that it can be used independently if desired.

  ```tsx
  const panels: PanelConfig[] = [
    {
      description: '',
      filterPredicate: entity => {},
      panelType: 'InfoCardGrid',
      title: 'Standards',
      panelProps: {
            CustomHeader: () => <ContentHeader title='Recommended' />
            linkDestination: linkDestination,
          },
    },
    {
      description: '',
      filterPredicate: entity => {},
      panelType: 'DocsCardGrid',
      title: 'Contribute',
    },
  ];
  {
    panels.map((config, index) => (
      <CustomDocsPanel
        key={index}
        config={config}
        entities={!!entities ? entities : []}
        index={index}
      />
    ));
  }
  ```

- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/plugin-techdocs-addons-test-utils` (1.0.44 → 1.0.45)

#### 1.0.45

##### Patch Changes

- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/plugin-techdocs-backend` (1.11.5 → 1.11.6)

#### 1.11.6

##### Patch Changes

- b78e3fd: Fixed issue `syncEntityDocs` that would cause the `/sync` endpoint to be continuously called if the request fails

### `@backstage/plugin-techdocs-module-addons-contrib` (1.1.20 → 1.1.21)

#### 1.1.21

##### Patch Changes

- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/plugin-techdocs-react` (1.2.13 → 1.2.14)

#### 1.2.14

##### Patch Changes

- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/plugin-user-settings` (0.8.18 → 0.8.19)

#### 0.8.19

##### Patch Changes

- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/test-utils` (1.7.4 → 1.7.5)

#### 1.7.5

##### Patch Changes

- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/theme` (0.6.3 → 0.6.4)

#### 0.6.4

##### Patch Changes

- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

### `@backstage/version-bridge` (1.0.10 → 1.0.11)

#### 1.0.11

##### Patch Changes

- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

## Excluded dependency updates for packages

- `@backstage/plugin-app-backend`
- `@backstage/plugin-app-node`
- `@backstage/plugin-auth-backend`
- `@backstage/plugin-auth-backend-module-azure-easyauth-provider`
- `@backstage/plugin-auth-backend-module-guest-provider`
- `@backstage/plugin-auth-backend-module-oauth2-proxy-provider`
- `@backstage/plugin-catalog-backend-module-gcp`
- `@backstage/plugin-catalog-backend-module-gerrit`
- `@backstage/plugin-catalog-backend-module-github-org`
- `@backstage/plugin-catalog-backend-module-gitlab-org`
- `@backstage/plugin-catalog-backend-module-incremental-ingestion`
- `@backstage/plugin-catalog-backend-module-logs`
- `@backstage/plugin-catalog-backend-module-puppetdb`
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model`
- `@backstage/plugin-devtools-backend`
- `@backstage/plugin-events-backend`
- `@backstage/plugin-events-backend-module-aws-sqs`
- `@backstage/plugin-events-backend-module-azure`
- `@backstage/plugin-events-backend-module-bitbucket-cloud`
- `@backstage/plugin-events-backend-module-gerrit`
- `@backstage/plugin-events-backend-module-github`
- `@backstage/plugin-events-backend-module-gitlab`
- `@backstage/plugin-events-backend-test-utils`
- `@backstage/plugin-events-node`
- `@backstage/plugin-notifications-node`
- `@backstage/plugin-permission-backend`
- `@backstage/plugin-permission-backend-module-allow-all-policy`
- `@backstage/plugin-proxy-backend`
- `@backstage/plugin-proxy-node`
- `@backstage/plugin-scaffolder-backend-module-azure`
- `@backstage/plugin-scaffolder-backend-module-bitbucket`
- `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud`
- `@backstage/plugin-scaffolder-backend-module-bitbucket-server`
- `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown`
- `@backstage/plugin-scaffolder-backend-module-cookiecutter`
- `@backstage/plugin-scaffolder-backend-module-gcp`
- `@backstage/plugin-scaffolder-backend-module-gerrit`
- `@backstage/plugin-scaffolder-backend-module-gitea`
- `@backstage/plugin-scaffolder-backend-module-notifications`
- `@backstage/plugin-scaffolder-backend-module-rails`
- `@backstage/plugin-scaffolder-backend-module-sentry`
- `@backstage/plugin-scaffolder-backend-module-yeoman`
- `@backstage/plugin-search-backend`
- `@backstage/plugin-search-backend-module-elasticsearch`
- `@backstage/plugin-search-backend-module-explore`
- `@backstage/plugin-search-backend-module-stack-overflow-collator`
- `@backstage/plugin-search-backend-module-techdocs`
- `@backstage/plugin-signals-backend`
- `@backstage/plugin-signals-node`
- `@backstage/plugin-user-settings-backend`
