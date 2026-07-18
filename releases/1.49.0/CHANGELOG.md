# Backstage Release 1.49.0 changelog

Changes between 1.48.6 and 1.49.0 — 176 changed and 14 added packages.

## Summary

- [Newly added packages](#newly-added-packages): 14 packages
- [Breaking changes](#breaking-changes): 15 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 7 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 1 package
- [Other minor version bumps](#other-minor-version-bumps): 11 packages
- [Other patch version bumps](#other-patch-version-bumps): 67 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/cli-defaults` (new, 0.1.0)](#backstagecli-defaults-new-010)
  - [`@backstage/cli-module-actions` (new, 0.0.1)](#backstagecli-module-actions-new-001)
  - [`@backstage/cli-module-auth` (new, 0.1.0)](#backstagecli-module-auth-new-010)
  - [`@backstage/cli-module-build` (new, 0.1.0)](#backstagecli-module-build-new-010)
  - [`@backstage/cli-module-config` (new, 0.1.0)](#backstagecli-module-config-new-010)
  - [`@backstage/cli-module-github` (new, 0.1.0)](#backstagecli-module-github-new-010)
  - [`@backstage/cli-module-info` (new, 0.1.0)](#backstagecli-module-info-new-010)
  - [`@backstage/cli-module-lint` (new, 0.1.0)](#backstagecli-module-lint-new-010)
  - [`@backstage/cli-module-maintenance` (new, 0.1.0)](#backstagecli-module-maintenance-new-010)
  - [`@backstage/cli-module-migrate` (new, 0.1.0)](#backstagecli-module-migrate-new-010)
  - [`@backstage/cli-module-new` (new, 0.1.0)](#backstagecli-module-new-new-010)
  - [`@backstage/cli-module-test-jest` (new, 0.1.0)](#backstagecli-module-test-jest-new-010)
  - [`@backstage/cli-module-translations` (new, 0.1.0)](#backstagecli-module-translations-new-010)
  - [`@backstage/frontend-dev-utils` (new, 0.1.0)](#backstagefrontend-dev-utils-new-010)
- [Breaking changes](#breaking-changes)
  - [`@backstage/backend-defaults` (0.15.2 → 0.16.0)](#backstagebackend-defaults-0152--0160)
  - [`@backstage/cli` (0.35.4 → 0.36.0)](#backstagecli-0354--0360)
  - [`@backstage/create-app` (0.7.9 → 0.8.0)](#backstagecreate-app-079--080)
  - [`@backstage/frontend-app-api` (0.15.0 → 0.16.0)](#backstagefrontend-app-api-0150--0160)
  - [`@backstage/frontend-defaults` (0.4.0 → 0.5.0)](#backstagefrontend-defaults-040--050)
  - [`@backstage/frontend-plugin-api` (0.14.1 → 0.15.0)](#backstagefrontend-plugin-api-0141--0150)
  - [`@backstage/integration` (1.20.1 → 2.0.0)](#backstageintegration-1201--200)
  - [`@backstage/plugin-catalog` (1.33.1 → 2.0.0)](#backstageplugin-catalog-1331--200)
  - [`@backstage/plugin-catalog-backend` (3.4.0 → 3.5.0)](#backstageplugin-catalog-backend-340--350)
  - [`@backstage/plugin-catalog-graph` (0.5.7 → 0.6.0)](#backstageplugin-catalog-graph-057--060)
  - [`@backstage/plugin-notifications-backend-module-slack` (0.3.1 → 0.4.0)](#backstageplugin-notifications-backend-module-slack-031--040)
  - [`@backstage/plugin-org` (0.6.49 → 0.7.0)](#backstageplugin-org-0649--070)
  - [`@backstage/plugin-scaffolder-common` (1.7.6 → 2.0.0)](#backstageplugin-scaffolder-common-176--200)
  - [`@backstage/plugin-scaffolder-node` (0.12.5 → 0.13.0)](#backstageplugin-scaffolder-node-0125--0130)
  - [`@backstage/ui` (0.12.1 → 0.13.0)](#backstageui-0121--0130)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/backend-dynamic-feature-service` (0.7.9 → 0.8.0)](#backstagebackend-dynamic-feature-service-079--080)
  - [`@backstage/cli-common` (0.1.18 → 0.2.0)](#backstagecli-common-0118--020)
  - [`@backstage/cli-node` (0.2.18 → 0.3.0)](#backstagecli-node-0218--030)
  - [`@backstage/plugin-catalog-backend-module-github` (0.12.2 → 0.13.0)](#backstageplugin-catalog-backend-module-github-0122--0130)
  - [`@backstage/plugin-devtools-react` (0.1.1 → 0.2.0)](#backstageplugin-devtools-react-011--020)
  - [`@backstage/plugin-events-backend` (0.5.11 → 0.6.0)](#backstageplugin-events-backend-0511--060)
  - [`@backstage/repo-tools` (0.16.5 → 0.17.0)](#backstagerepo-tools-0165--0170)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-kubernetes-cluster` (0.0.34 → 0.0.35)](#backstageplugin-kubernetes-cluster-0034--0035)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/backend-app-api` (1.5.0 → 1.6.0)](#backstagebackend-app-api-150--160)
  - [`@backstage/backend-plugin-api` (1.7.0 → 1.8.0)](#backstagebackend-plugin-api-170--180)
  - [`@backstage/catalog-client` (1.13.0 → 1.14.0)](#backstagecatalog-client-1130--1140)
  - [`@backstage/plugin-catalog-node` (2.0.0 → 2.1.0)](#backstageplugin-catalog-node-200--210)
  - [`@backstage/plugin-catalog-react` (2.0.0 → 2.1.0)](#backstageplugin-catalog-react-200--210)
  - [`@backstage/plugin-scaffolder` (1.35.4 → 1.36.0)](#backstageplugin-scaffolder-1354--1360)
  - [`@backstage/plugin-scaffolder-backend` (3.1.5 → 3.2.0)](#backstageplugin-scaffolder-backend-315--320)
  - [`@backstage/plugin-scaffolder-react` (1.19.7 → 1.20.0)](#backstageplugin-scaffolder-react-1197--1200)
  - [`@backstage/plugin-search` (1.6.1 → 1.7.0)](#backstageplugin-search-161--170)
  - [`@backstage/plugin-search-backend` (2.0.12 → 2.1.0)](#backstageplugin-search-backend-2012--210)
  - [`@backstage/plugin-search-react` (1.10.4 → 1.11.0)](#backstageplugin-search-react-1104--1110)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-test-utils` (1.11.0 → 1.11.1)](#backstagebackend-test-utils-1110--1111)
  - [`@backstage/catalog-model` (1.7.6 → 1.7.7)](#backstagecatalog-model-176--177)
  - [`@backstage/codemods` (0.1.54 → 0.1.55)](#backstagecodemods-0154--0155)
  - [`@backstage/config-loader` (1.10.8 → 1.10.9)](#backstageconfig-loader-1108--1109)
  - [`@backstage/core-app-api` (1.19.5 → 1.19.6)](#backstagecore-app-api-1195--1196)
  - [`@backstage/core-compat-api` (0.5.8 → 0.5.9)](#backstagecore-compat-api-058--059)
  - [`@backstage/core-components` (0.18.7 → 0.18.8)](#backstagecore-components-0187--0188)
  - [`@backstage/core-plugin-api` (1.12.3 → 1.12.4)](#backstagecore-plugin-api-1123--1124)
  - [`@backstage/eslint-plugin` (0.2.1 → 0.2.2)](#backstageeslint-plugin-021--022)
  - [`@backstage/filter-predicates` (0.1.0 → 0.1.1)](#backstagefilter-predicates-010--011)
  - [`@backstage/frontend-dynamic-feature-loader` (0.1.9 → 0.1.10)](#backstagefrontend-dynamic-feature-loader-019--0110)
  - [`@backstage/frontend-test-utils` (0.5.0 → 0.5.1)](#backstagefrontend-test-utils-050--051)
  - [`@backstage/module-federation-common` (0.1.1 → 0.1.2)](#backstagemodule-federation-common-011--012)
  - [`@backstage/plugin-api-docs` (0.13.4 → 0.13.5)](#backstageplugin-api-docs-0134--0135)
  - [`@backstage/plugin-app` (0.4.0 → 0.4.1)](#backstageplugin-app-040--041)
  - [`@backstage/plugin-app-react` (0.2.0 → 0.2.1)](#backstageplugin-app-react-020--021)
  - [`@backstage/plugin-app-visualizer` (0.2.0 → 0.2.1)](#backstageplugin-app-visualizer-020--021)
  - [`@backstage/plugin-auth` (0.1.5 → 0.1.6)](#backstageplugin-auth-015--016)
  - [`@backstage/plugin-auth-backend` (0.27.1 → 0.27.2)](#backstageplugin-auth-backend-0271--0272)
  - [`@backstage/plugin-auth-backend-module-atlassian-provider` (0.4.12 → 0.4.13)](#backstageplugin-auth-backend-module-atlassian-provider-0412--0413)
  - [`@backstage/plugin-auth-backend-module-aws-alb-provider` (0.4.13 → 0.4.14)](#backstageplugin-auth-backend-module-aws-alb-provider-0413--0414)
  - [`@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.2.17 → 0.2.18)](#backstageplugin-auth-backend-module-azure-easyauth-provider-0217--0218)
  - [`@backstage/plugin-auth-backend-module-bitbucket-provider` (0.3.12 → 0.3.13)](#backstageplugin-auth-backend-module-bitbucket-provider-0312--0313)
  - [`@backstage/plugin-auth-backend-module-bitbucket-server-provider` (0.2.12 → 0.2.13)](#backstageplugin-auth-backend-module-bitbucket-server-provider-0212--0213)
  - [`@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.4.12 → 0.4.13)](#backstageplugin-auth-backend-module-cloudflare-access-provider-0412--0413)
  - [`@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.4.12 → 0.4.13)](#backstageplugin-auth-backend-module-gcp-iap-provider-0412--0413)
  - [`@backstage/plugin-auth-backend-module-github-provider` (0.5.0 → 0.5.1)](#backstageplugin-auth-backend-module-github-provider-050--051)
  - [`@backstage/plugin-auth-backend-module-gitlab-provider` (0.4.0 → 0.4.1)](#backstageplugin-auth-backend-module-gitlab-provider-040--041)
  - [`@backstage/plugin-auth-backend-module-google-provider` (0.3.12 → 0.3.13)](#backstageplugin-auth-backend-module-google-provider-0312--0313)
  - [`@backstage/plugin-auth-backend-module-microsoft-provider` (0.3.12 → 0.3.13)](#backstageplugin-auth-backend-module-microsoft-provider-0312--0313)
  - [`@backstage/plugin-auth-backend-module-oauth2-provider` (0.4.12 → 0.4.13)](#backstageplugin-auth-backend-module-oauth2-provider-0412--0413)
  - [`@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.2.17 → 0.2.18)](#backstageplugin-auth-backend-module-oauth2-proxy-provider-0217--0218)
  - [`@backstage/plugin-auth-backend-module-oidc-provider` (0.4.13 → 0.4.14)](#backstageplugin-auth-backend-module-oidc-provider-0413--0414)
  - [`@backstage/plugin-auth-backend-module-okta-provider` (0.2.12 → 0.2.13)](#backstageplugin-auth-backend-module-okta-provider-0212--0213)
  - [`@backstage/plugin-auth-backend-module-onelogin-provider` (0.3.12 → 0.3.13)](#backstageplugin-auth-backend-module-onelogin-provider-0312--0313)
  - [`@backstage/plugin-auth-backend-module-openshift-provider` (0.1.4 → 0.1.5)](#backstageplugin-auth-backend-module-openshift-provider-014--015)
  - [`@backstage/plugin-auth-node` (0.6.13 → 0.6.14)](#backstageplugin-auth-node-0613--0614)
  - [`@backstage/plugin-catalog-backend-module-github-org` (0.3.19 → 0.3.20)](#backstageplugin-catalog-backend-module-github-org-0319--0320)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.8.0 → 0.8.1)](#backstageplugin-catalog-backend-module-gitlab-080--081)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.7.9 → 0.7.10)](#backstageplugin-catalog-backend-module-incremental-ingestion-079--0710)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.9.0 → 0.9.1)](#backstageplugin-catalog-backend-module-msgraph-090--091)
  - [`@backstage/plugin-catalog-import` (0.13.10 → 0.13.11)](#backstageplugin-catalog-import-01310--01311)
  - [`@backstage/plugin-catalog-unprocessed-entities` (0.2.26 → 0.2.27)](#backstageplugin-catalog-unprocessed-entities-0226--0227)
  - [`@backstage/plugin-devtools` (0.1.36 → 0.1.37)](#backstageplugin-devtools-0136--0137)
  - [`@backstage/plugin-devtools-common` (0.1.22 → 0.1.23)](#backstageplugin-devtools-common-0122--0123)
  - [`@backstage/plugin-home` (0.9.2 → 0.9.3)](#backstageplugin-home-092--093)
  - [`@backstage/plugin-home-react` (0.1.35 → 0.1.36)](#backstageplugin-home-react-0135--0136)
  - [`@backstage/plugin-kubernetes` (0.12.16 → 0.12.17)](#backstageplugin-kubernetes-01216--01217)
  - [`@backstage/plugin-kubernetes-backend` (0.21.1 → 0.21.2)](#backstageplugin-kubernetes-backend-0211--0212)
  - [`@backstage/plugin-kubernetes-react` (0.5.16 → 0.5.17)](#backstageplugin-kubernetes-react-0516--0517)
  - [`@backstage/plugin-mcp-actions-backend` (0.1.9 → 0.1.10)](#backstageplugin-mcp-actions-backend-019--0110)
  - [`@backstage/plugin-mui-to-bui` (0.2.4 → 0.2.5)](#backstageplugin-mui-to-bui-024--025)
  - [`@backstage/plugin-notifications` (0.5.14 → 0.5.15)](#backstageplugin-notifications-0514--0515)
  - [`@backstage/plugin-permission-backend` (0.7.9 → 0.7.10)](#backstageplugin-permission-backend-079--0710)
  - [`@backstage/plugin-permission-common` (0.9.6 → 0.9.7)](#backstageplugin-permission-common-096--097)
  - [`@backstage/plugin-permission-node` (0.10.10 → 0.10.11)](#backstageplugin-permission-node-01010--01011)
  - [`@backstage/plugin-permission-react` (0.4.40 → 0.4.41)](#backstageplugin-permission-react-0440--0441)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.3.3 → 0.3.4)](#backstageplugin-scaffolder-backend-module-bitbucket-cloud-033--034)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.9.6 → 0.9.7)](#backstageplugin-scaffolder-backend-module-github-096--097)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.11.3 → 0.11.4)](#backstageplugin-scaffolder-backend-module-gitlab-0113--0114)
  - [`@backstage/plugin-techdocs` (1.17.0 → 1.17.1)](#backstageplugin-techdocs-1170--1171)
  - [`@backstage/plugin-techdocs-backend` (2.1.5 → 2.1.6)](#backstageplugin-techdocs-backend-215--216)
  - [`@backstage/plugin-techdocs-module-addons-contrib` (1.1.33 → 1.1.34)](#backstageplugin-techdocs-module-addons-contrib-1133--1134)
  - [`@backstage/plugin-techdocs-node` (1.14.3 → 1.14.4)](#backstageplugin-techdocs-node-1143--1144)
  - [`@backstage/plugin-user-settings` (0.9.0 → 0.9.1)](#backstageplugin-user-settings-090--091)
  - [`@backstage/plugin-user-settings-backend` (0.4.0 → 0.4.1)](#backstageplugin-user-settings-backend-040--041)
  - [`@techdocs/cli` (1.10.5 → 1.10.6)](#techdocscli-1105--1106)

## Newly added packages

### `@backstage/cli-defaults` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- 7781ae5: Introduced `@backstage/cli-defaults`, a convenience package that bundles all standard Backstage CLI modules. Install this single package as a `devDependency` to get the full default set of CLI commands without listing each module individually.

##### Patch Changes

- 42960f1: Added `@backstage/cli-module-actions` to the default set of CLI modules.

### `@backstage/cli-module-actions` (new, 0.0.1)

#### 0.0.1

##### Patch Changes

- 42960f1: Added `actions` CLI module for listing and executing actions from the distributed actions registry. Includes `actions list`, `actions execute`, and `actions sources` commands for managing plugin sources.

### `@backstage/cli-module-auth` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- 329f394: Initial release of the CLI module packages. Each module provides a set of commands that can be discovered automatically by `@backstage/cli` or executed standalone.

##### Patch Changes

- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/cli-module-build` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- 62d0849: Added `package bundle` command to create self-contained plugin bundles for dynamic loading, to be used by the `backend-dynamic-feature-service`. Supports backend and frontend plugins, with optional `--pre-packed-dir` for batch bundling from a pre-built workspace.
- 329f394: Initial release of the CLI module packages. Each module provides a set of commands that can be discovered automatically by `@backstage/cli` or executed standalone.

### `@backstage/cli-module-config` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- 329f394: Initial release of the CLI module packages. Each module provides a set of commands that can be discovered automatically by `@backstage/cli` or executed standalone.

### `@backstage/cli-module-github` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- 329f394: Initial release of the CLI module packages. Each module provides a set of commands that can be discovered automatically by `@backstage/cli` or executed standalone.

### `@backstage/cli-module-info` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- 329f394: Initial release of the CLI module packages. Each module provides a set of commands that can be discovered automatically by `@backstage/cli` or executed standalone.

### `@backstage/cli-module-lint` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- 329f394: Initial release of the CLI module packages. Each module provides a set of commands that can be discovered automatically by `@backstage/cli` or executed standalone.

### `@backstage/cli-module-maintenance` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- 329f394: Initial release of the CLI module packages. Each module provides a set of commands that can be discovered automatically by `@backstage/cli` or executed standalone.

##### Patch Changes

- f189d8f: Added auto-fill of `backstage.pluginPackage` metadata for known plugins during `repo fix`.

### `@backstage/cli-module-migrate` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- 329f394: Initial release of the CLI module packages. Each module provides a set of commands that can be discovered automatically by `@backstage/cli` or executed standalone.

### `@backstage/cli-module-new` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- 329f394: Initial release of the CLI module packages. Each module provides a set of commands that can be discovered automatically by `@backstage/cli` or executed standalone.

##### Patch Changes

- edf2b77: Added support for the `cli-module` template role for scaffolding new CLI module packages.
- ea90ab0: The built-in `yarn new` templates have been moved to this package from `@backstage/cli`. The default template references have been updated from `@backstage/cli/templates/*` to `@backstage/cli-module-new/templates/*`. Existing references to `@backstage/cli/templates/*` in your root `package.json` will continue to work through a backwards compatibility rewrite.
- ebeb0d4: Updated the new frontend plugin template to use `@backstage/frontend-dev-utils` in its `dev/` entry point instead of wiring `createApp` manually. Generated plugins now get the same dev app helper setup as the built-in examples.
- 971cc94: The `new` command now prompts for the plugin package name when creating plugin modules, in order to properly populate the `package.json` file.
- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/cli-module-test-jest` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- 329f394: Initial release of the CLI module packages. Each module provides a set of commands that can be discovered automatically by `@backstage/cli` or executed standalone.

### `@backstage/cli-module-translations` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- 329f394: Initial release of the CLI module packages. Each module provides a set of commands that can be discovered automatically by `@backstage/cli` or executed standalone.

### `@backstage/frontend-dev-utils` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- c25532a: Added `@backstage/frontend-dev-utils`, a new package that provides a minimal helper for wiring up a development app for frontend plugins using the new frontend system. It exports a `createDevApp` function that handles creating and rendering a development app from a `dev/` entry point. The dev app automatically bypasses the sign-in page and loads the `@backstage/ui` CSS. The options interface accepts `features` together with route bindings through `bindRoutes`.

## Breaking changes

### `@backstage/backend-defaults` (0.15.2 → 0.16.0)

#### 0.16.0

##### Minor Changes

- 42960f1: The actions registry invoke endpoint now accepts direct user credentials in addition to service principals, enabling CLI and other direct user clients to invoke actions.
- 0e7d8f9: The scheduler service now uses the metrics service to create metrics, providing plugin-scoped attribution.
- 527cf88: **BREAKING** Removed deprecated `BitbucketUrlReader`. Use the `BitbucketCloudUrlReader` or the `BitbucketServerUrlReader` instead.

##### Patch Changes

- cc8348e: Added permissions integration to the actions registry. Actions registered with a `visibilityPermission` field are now checked against the permissions framework when listing and invoking. Denied actions are filtered from list results, and invoking a denied action returns a `404 Not Found` as if the action does not exist. Permissions are automatically registered with the `PermissionsRegistryService` so they appear in the permission policy system.
- dee4283: Added `pluginId` field to `ActionsServiceAction` type, populated from the registering plugin's metadata.
- 015668c: Added `cancelTask` method to the `SchedulerService` interface and implementation, allowing cancellation of currently running scheduled tasks. For global tasks, the database lock is released and a periodic liveness check aborts the running task function. For local tasks, the task's abort signal is triggered directly. A new `POST /.backstage/scheduler/v1/tasks/:id/cancel` endpoint is also available.
- 638e6c7: chore(deps): bump `yauzl` from 3.2.0 to 3.2.1
- 6738cf0: build(deps): bump `minimatch` from 9.0.5 to 10.2.1
- 62f0a53: Fixed error forwarding in the actions registry so that known errors like `InputError` and `NotFoundError` thrown by actions preserve their original status codes and messages instead of being wrapped in `ForwardedError` and coerced to 500.
- d933f62: Add configurable throttling and retry mechanism for GitLab integration.
- b99158a: Fixed `yarn backstage-cli config:check --strict --config app-config.yaml` config validation error by adding
  an optional `default` type discriminator to PostgreSQL connection configuration,
  allowing `config:check` to properly validate `default` connection configurations.
- 1ee5b28: Adds an alpha `MetricsService` to provide a unified interface for metrics instrumentation across Backstage plugins.
- 5fcbef2: Updated dependency `express-rate-limit` to `^8.0.0`.
- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/cli` (0.35.4 → 0.36.0)

#### 0.36.0

##### Minor Changes

- d0f4cd2: Added new `auth` command group for authenticating the CLI with Backstage instances using OAuth 2.0 with a pre-registered client metadata document. Commands include `login`, `logout`, `list`, `show`, `print-token`, and `select` for managing multiple authenticated instances.
- d806b0c: The CLI now automatically discovers CLI modules from the project root's `dependencies` and `devDependencies`. Any installed package with the `cli-module` Backstage role will be loaded automatically without needing to be hardcoded in the CLI itself.

  If no CLI modules are found in the project dependencies, the CLI falls back to the built-in set of modules and prints a deprecation warning. This fallback will be removed in a future release. To prepare for this, add `@backstage/cli-defaults` as a `devDependency` in your root `package.json`:

  ```json
  {
    "devDependencies": {
      "@backstage/cli-defaults": "backstage:^"
    }
  }
  ```

  If you are not using the Backstage Yarn plugin, run the following instead:

  ```sh
  yarn workspace root add --dev @backstage/cli-defaults
  ```

  For fine-grained control you can instead install individual CLI modules:

  ```json
  {
    "devDependencies": {
      "@backstage/cli-module-auth": "backstage:^",
      "@backstage/cli-module-build": "backstage:^",
      "@backstage/cli-module-config": "backstage:^",
      "@backstage/cli-module-github": "backstage:^",
      "@backstage/cli-module-info": "backstage:^",
      "@backstage/cli-module-lint": "backstage:^",
      "@backstage/cli-module-maintenance": "backstage:^",
      "@backstage/cli-module-migrate": "backstage:^",
      "@backstage/cli-module-new": "backstage:^",
      "@backstage/cli-module-test-jest": "backstage:^",
      "@backstage/cli-module-translations": "backstage:^"
    }
  }
  ```

- 08d9770: **BREAKING**: The CLI templates for frontend plugins have been renamed:

  - `new-frontend-plugin` → `frontend-plugin`
  - `new-frontend-plugin-module` → `frontend-plugin-module`
  - `frontend-plugin` (legacy) → `legacy-frontend-plugin`

  To smooth out this breaking change, the CLI now auto-detects which frontend system your app uses based on the dependencies in `packages/app/package.json`. When using the default templates (no explicit `templates` configuration):

  - Apps using `@backstage/frontend-defaults` will see the new frontend system templates (`frontend-plugin`, `frontend-plugin-module`)
  - Apps using `@backstage/app-defaults` will see the legacy template (displayed as `frontend-plugin`)

  This means existing projects that haven't migrated to the new frontend system will continue to create legacy plugins by default, while new projects will get the new frontend system templates. If you have explicit template configuration in your `package.json`, it will be used as-is without any auto-detection.

- b36a60d: **BREAKING**: The `migrate package-exports` command has been removed. Use `repo fix` instead.

##### Patch Changes

- edf2b77: Added a new `cli-module` template for creating CLI module packages.
- 246877a: Updated dependency `bfj` to `^9.0.2`.
- 0d2d0f2: Internal refactor of CLI modularization, moving individual commands to be implemented with cleye.
- a4e5902: Internal refactor of the CLI command registration
- bba2e49: Internal refactor to use new concurrency utilities from `@backstage/cli-node`.
- 2fcba39: Internal refactor to move shared utilities into their consuming modules, reducing cross-module dependencies.
- c85ac86: Internal refactor to split `loadCliConfig` into separate implementations for the build and config CLI modules, removing a cross-module dependency.
- 94a885a: Added support for the new `cli-module` package role in the build system, ESLint configuration, Jest configuration, and maintenance commands.
- fd50cb3: Added `translations export` and `translations import` commands for managing translation files.

  The `translations export` command discovers all `TranslationRef` definitions across frontend plugin dependencies and exports their default messages as JSON files. The `translations import` command generates `TranslationResource` wiring code from translated JSON files, ready to be plugged into the app.

  Both commands support a `--pattern` option for controlling the message file layout, for example `--pattern '{lang}/{id}.json'` for language-based directory grouping.

- 0be3eab: Migrated CLI plugin modules to use `createCliModule` from `@backstage/cli-node`.
- 61cb976: Migrated internal versioning utilities to use `@backstage/cli-node` instead of a local implementation.
- 6738cf0: build(deps): bump `minimatch` from 9.0.5 to 10.2.1
- ff4a45a: Migrated remaining CLI command handlers from `commander` to `cleye` for argument parsing. Several camelCase CLI flags have been deprecated in favor of their kebab-case equivalents (e.g. `--successCache` → `--success-cache`). The old camelCase forms still work but will now log a deprecation warning. Please update any scripts or CI configurations to use the kebab-case versions.
- 70fc178: Migrated from deprecated `findPaths` to `targetPaths` and `findOwnPaths` from `@backstage/cli-common`.
- 825c81d: Internal refactor of CLI command modules.
- ea90ab0: The built-in `yarn new` templates have been moved to `@backstage/cli-module-new`. Existing references to `@backstage/cli/templates/*` in your root `package.json` will continue to work through a backwards compatibility rewrite in the `new` command.
- ebeb0d4: Updated the new frontend plugin template to use `@backstage/frontend-dev-utils` in its `dev/` entry point instead of wiring `createApp` manually. Generated plugins now get the same dev app helper setup as the built-in examples.
- 971cc94: The `new` command now prompts for the plugin package name when creating plugin modules, in order to properly populate the `package.json` file.
- de62a9d: Upgraded `commander` dependency from `^12.0.0` to `^14.0.3` across all CLI packages.
- 092b41f: Updated dependency `webpack` to `~5.105.0`.
- 4a75544: Updated dependency `react-refresh` to `^0.18.0`.
- a9d23c4: Properly support `package.json` `workspaces` field

### `@backstage/create-app` (0.7.9 → 0.8.0)

#### 0.8.0

##### Minor Changes

- a6735c3: **BREAKING**: The new frontend system is now the default template when creating a new Backstage app. The previous `--next` flag has been replaced with a `--legacy` flag that can be used to create an app using the old frontend system instead.

##### Patch Changes

- d806b0c: The create-app templates now include `@backstage/cli-defaults` as a `devDependency`, enabling the CLI's automatic module discovery for newly created projects.
- d14b6e0: **BREAKING**: Migrated `MembersListCard`, `OwnershipCard`, and `CatalogGraphCard` to use BUI card primitives via `EntityInfoCard`.

  - `OwnershipCard`: Removed `variant` and `maxScrollHeight` props. Card height and scrolling are now controlled by the parent container — the card fills its container and the body scrolls automatically when content overflows.
  - `CatalogGraphCard`: Removed `variant` prop.
  - `MembersListCard`: Translation keys `subtitle`, `paginationLabel`, `aggregateMembersToggle.directMembers`, `aggregateMembersToggle.aggregatedMembers`, and `aggregateMembersToggle.ariaLabel` have been removed. The `title` key now includes `{{groupName}}`. New keys added: `cardLabel`, `noSearchResult`, `aggregateMembersToggle.label`.
  - `OwnershipCard`: Translation keys `aggregateRelationsToggle.directRelations`, `aggregateRelationsToggle.aggregatedRelations`, and `aggregateRelationsToggle.ariaLabel` have been removed. New key added: `aggregateRelationsToggle.label`.
  - Removed `MemberComponentClassKey` export, and `root` and `cardContent` from `MembersListCardClassKey`, `card` from `OwnershipCardClassKey`, and `card` from `CatalogGraphCardClassKey`.

  **Migration:**

  ```diff
  - <EntityOwnershipCard variant="gridItem" />
  + <EntityOwnershipCard />
  ```

  ```diff
  - <EntityCatalogGraphCard variant="gridItem" height={400} />
  + <EntityCatalogGraphCard height={400} />
  ```

- 70fc178: Migrated from deprecated `findPaths` to `targetPaths` and `findOwnPaths` from `@backstage/cli-common`.
- ea90ab0: Updated the `next-app` template to reference `@backstage/cli-module-new/templates/*` instead of `@backstage/cli/templates/*` for the built-in `yarn new` templates.
- de62a9d: Upgraded `commander` dependency from `^12.0.0` to `^14.0.3` across all CLI packages.
- a9d23c4: Properly support `package.json` `workspaces` field
- ebd4630: Replace deprecated `workspaces.packages` with `workspaces` in `package.json`

  This change is **not** required, but you can edit your main `package.json`, to fit the more modern & more common pattern:

  ```diff
  -  "workspaces": {
  -    "packages": [
     "workspaces": [
       "packages/*",
       "plugins/*"
  -     ]
  -   },
    ],
  ```

### `@backstage/frontend-app-api` (0.15.0 → 0.16.0)

#### 0.16.0

##### Minor Changes

- 92af1ae: **BREAKING**: Removed the `allowUnknownExtensionConfig` option from `createSpecializedApp`. This flag had no effect and was a no-op, so no behavioral changes are expected.

##### Patch Changes

- d911b72: Frontend apps now respect an explicit `pluginId` on `ApiRef`s when deciding which plugin owns an API factory.
- 0452d02: Add optional `description` field to plugin-level feature flags.
- 5fd78ba: Removed `@backstage/core-plugin-api` leakage from the public API surface. All types such as `ApiHolder` and `ConfigApi` are now imported from `@backstage/frontend-plugin-api`.
- dab6c46: Added the `ExtensionFactoryMiddleware` type as a public export.
- 3f36ce1: Clarified the `IconElement` sizing contract for the new frontend system and aligned legacy system icon rendering with the new icon API.
- 5b160f9: Added `prepareSpecializedApp` for two-phase app wiring so apps can render a bootstrap tree before full app finalization. The bootstrap phase now supports deferred `app/root.elements`, predicate-gated APIs, reusable `sessionState`, and warnings for bootstrap-visible predicates or bootstrap code that accessed APIs that only became available after finalization. Utility APIs that are materialized during bootstrap are also frozen for the lifetime of the app instance, causing deferred overrides of those APIs to be ignored and reported as app errors.
- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/frontend-defaults` (0.4.0 → 0.5.0)

#### 0.5.0

##### Minor Changes

- 92af1ae: **BREAKING**: Removed the `allowUnknownExtensionConfig` option from `createApp`. This flag had no effect and was a no-op, so no behavioral changes are expected.
- 33de79d: **BREAKING**: Removed the deprecated `createPublicSignInApp` function. Use `createApp` from `@backstage/frontend-defaults` with `appModulePublicSignIn` from `@backstage/plugin-app/alpha` instead.

##### Patch Changes

- 5b160f9: Updated `createApp` to use the phased `prepareSpecializedApp` flow, allowing apps to render a bootstrap tree before the full app is finalized.

### `@backstage/frontend-plugin-api` (0.14.1 → 0.15.0)

#### 0.15.0

##### Minor Changes

- 5fd78ba: Renamed `PluginOptions` to `CreateFrontendPluginOptions` and deprecated the old name. Removed `ResolvedExtensionInputs` from the main entry point; it is still available as an inline type in extension factory signatures.
- 72991a5: Removed the `ResolvedExtensionInput` and `ExtensionDataRefToValue` helper types from the public API surface to reduce top-level API clutter. These types were internal plumbing that are not needed by plugin authors. If you were relying on `ResolvedExtensionInput`, use the `ResolvedExtensionInputs` type instead, which maps a full set of inputs. If you were using `ExtensionDataRefToValue`, replace it with `ExtensionDataValue` combined with inferred types from your `ExtensionDataRef`.
- 9508514: **BREAKING**: Promoted `PluginWrapperApi`, `pluginWrapperApiRef`, `PluginWrapperBlueprint`, and the new `PluginWrapperDefinition` type from `@alpha` to `@public`. These are now available from the main package entry point rather than only through `/alpha`.

  The `PluginWrapperApi` type now has a required `getRootWrapper()` method that returns a root wrapper component. The `pluginWrapperApiRef` ID changed from `core.plugin-wrapper.alpha` to `core.plugin-wrapper`.

  The `PluginWrapperBlueprint` now accepts `PluginWrapperDefinition` as the loader return type, which supports an optional `useWrapperValue` hook that allows sharing state between wrapper instances.

- 6573901: **BREAKING**: Removed the deprecated `AnyExtensionDataRef` type. Use `ExtensionDataRef` without type parameters instead.
- a9440f0: **BREAKING**: Simplified the `ExtensionAttachTo` type to only support a single attachment target. The array form for attaching to multiple extension points has been removed. Also removed the deprecated `ExtensionAttachToSpec` type alias.

##### Patch Changes

- e26e3de: The `icon` field on `AuthProviderInfo` now accepts `IconElement` in addition to `IconComponent`, letting you pass `<MyIcon />` instead of `MyIcon`.
- eea95b8: Deprecated `AlertApi` in favor of the new `ToastApi`.

  `AlertApi` is now deprecated and will be removed in a future release. Please migrate to `ToastApi` which provides richer notification features.

  **Why migrate?**

  `ToastApi` offers enhanced capabilities over `AlertApi`:

  - **Title and Description**: Display a prominent title with optional description text
  - **Action Links**: Include clickable links within notifications
  - **Status Variants**: Support for neutral, info, success, warning, and danger statuses
  - **Per-toast Timeout**: Control auto-dismiss timing for each notification individually
  - **Programmatic Dismiss**: Close notifications via the `close()` handle returned from `post()`

  **Migration Guide**

  | AlertApi                                     | ToastApi                                   |
  | -------------------------------------------- | ------------------------------------------ |
  | `message: string`                            | `title: ReactNode`                         |
  | `severity: 'error'`                          | `status: 'danger'`                         |
  | `severity: 'success' \| 'info' \| 'warning'` | `status: 'success' \| 'info' \| 'warning'` |
  | `display: 'transient'`                       | `timeout: 5000` (or custom ms)             |
  | `display: 'permanent'`                       | omit `timeout`                             |
  | `post()` returns `void`                      | `post()` returns `{ close(): void }`       |

  **Example Migration**

  ```typescript
  // Before (AlertApi)
  import { alertApiRef, useApi } from '@backstage/core-plugin-api';

  const alertApi = useApi(alertApiRef);
  alertApi.post({
    message: 'Entity saved successfully',
    severity: 'success',
    display: 'transient',
  });

  // After (ToastApi)
  import { toastApiRef, useApi } from '@backstage/frontend-plugin-api';

  const toastApi = useApi(toastApiRef);
  const toast = toastApi.post({
    title: 'Entity saved successfully',
    status: 'success',
    timeout: 5000,
  });
  // Later: toast.close() to dismiss programmatically
  ```

  **Note**: During the migration period, both APIs work simultaneously. The `ToastDisplay` component subscribes to both `AlertApi` and `ToastApi`, so existing code continues to work while you migrate incrementally.

- 8a3a906: Deprecated `NavItemBlueprint`. Nav items are now automatically inferred from `PageBlueprint` extensions based on their `title` and `icon` params.
- b15a685: Deprecated `withApis`, use the `withApis` export from `@backstage/core-compat-api` instead.
- 0452d02: Add optional `description` field to plugin-level feature flags.
- 1bec049: Fixed inconsistent `JSX.Element` type reference in the `DialogApiDialog.update` method signature.
- 9c81af9: Made the `pluginId` property optional in the `FrontendFeature` type, allowing plugins published against older versions of the framework to be used without type errors.
- 2c383b5: Deprecated `AnalyticsImplementationBlueprint` and `AnalyticsImplementationFactory` in favor of the exports from `@backstage/plugin-app-react`.
- dab6c46: Deprecated the `ExtensionFactoryMiddleware` type, which has been moved to `@backstage/frontend-app-api`.
- aa29b50: Pages created with `PageBlueprint` now render the plugin header by default in the new frontend system.
- 3f36ce1: Clarified the `IconElement` sizing contract for the new frontend system and aligned legacy system icon rendering with the new icon API.
- cc459f7: Added a builder form for `createApiRef` in the new frontend system and deprecated the direct `createApiRef({ ... })` call in favor of `createApiRef().with({ ... })`. The builder form now also preserves literal API ref IDs in the resulting `ApiRef` type.

  The `createApiRef().with({ ... })` form can also use an explicit `pluginId` to declare API ownership without encoding the plugin ID into the API ref ID, while keeping that metadata internal to runtime handling.

- 5b160f9: Added support for `if` predicates on `createFrontendPlugin` and `createFrontendModule`, applying shared conditions to every extension in the feature. Plugin and extension overrides can now also replace or remove existing `if` predicates.
- d0206c4: Removed the deprecated `defaultPath` migration helper from `PageBlueprint` params.
- edb872c: Renamed the `PageTab` type to `PageLayoutTab`. The old `PageTab` name is now a deprecated type alias.
- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.
- 7e743f4: Introduced a new `ToastApi` for displaying rich toast notifications in the new frontend system.

  The new `ToastApi` provides enhanced notification capabilities compared to the existing `AlertApi`:

  - **Title and Description**: Toasts support both a title and an optional description
  - **Custom Timeouts**: Each toast can specify its own timeout duration
  - **Links**: Toasts can include action links
  - **Status Variants**: Support for neutral, info, success, warning, and danger statuses
  - **Programmatic Dismiss**: Toasts can be dismissed programmatically using the `close()` handle returned from `post()`

  **Usage:**

  ```typescript
  import { toastApiRef, useApi } from '@backstage/frontend-plugin-api';

  const toastApi = useApi(toastApiRef);

  // Full-featured toast
  toastApi.post({
    title: 'Entity saved',
    description: 'Your changes have been saved successfully.',
    status: 'success',
    timeout: 5000,
    links: [{ label: 'View entity', href: '/catalog/entity' }],
  });

  // Programmatic dismiss
  const { close } = toastApi.post({ title: 'Uploading...', status: 'info' });
  // Later...
  close();
  ```

  The `ToastDisplay` component subscribes to both `ToastApi` and `AlertApi`, providing a migration path where both systems work side by side until `AlertApi` is fully deprecated.

- fe848e0: Changed `useApiHolder` to return an empty `ApiHolder` instead of throwing when used outside of an API context.

### `@backstage/integration` (1.20.1 → 2.0.0)

#### 2.0.0

##### Major Changes

- 527cf88: **BREAKING** Removed deprecated Azure DevOps, Bitbucket, Gerrit and GitHub code:

  - For Azure DevOps, the long deprecated `token` string and `credential` object have been removed from the `config.d.ts`. Use the `credentials` array object instead.
  - For Bitbucket, the long deprecated `bitbucket` object has been removed from the `config.d.ts`. Use the `bitbucketCloud` or `bitbucketServer` objects instead.
  - For Gerrit, the `parseGerritGitilesUrl` function has been removed, use `parseGitilesUrlRef` instead. The `buildGerritGitilesArchiveUrl` function has also been removed, use `buildGerritGitilesArchiveUrlFromLocation` instead.
  - For GitHub, the `getGitHubRequestOptions` function has been removed.

##### Minor Changes

- d933f62: Add configurable throttling and retry mechanism for GitLab integration.

##### Patch Changes

- 1513a0b: Fixed a security vulnerability where path traversal sequences in SCM URLs could be used to access unintended API endpoints using server-side integration credentials.
- 993a598: Fixed Azure integration config schema visibility annotations to use per-field `@visibility secret` instead of `@deepVisibility secret` on parent objects, so that non-secret fields like `clientId`, `tenantId`, `organizations`, and `managedIdentityClientId` are no longer incorrectly marked as secret.

### `@backstage/plugin-catalog` (1.33.1 → 2.0.0)

#### 2.0.0

##### Major Changes

- 5fc35bb: Migrated `EntityAboutCard`, `EntityLinksCard`, `EntityLabelsCard`, `GroupProfileCard`, and `UserProfileCard` from MUI/InfoCard to use the new BUI card layout and BUI components where possible.

  **BREAKING**: Removed `variant` prop from EntityAboutCard, EntityUserProfileCard, EntityGroupProfileCard, EntityLabelsCard, EntityLinksCard. Removed `gridSizes` prop from `AboutField`.

  **Migration:**

  Simply delete the obsolete `variant` and `gridSizes` props, e.g:

  ```diff
  -      <EntityAboutCard variant="gridItem" />
  +      <EntityAboutCard />
  ```

  ```diff
  -      <AboutField label="Owner" gridSizes={{ xs: 12, sm: 6, lg: 4 }} />
  +      <AboutField label="Owner" />
  ```

##### Minor Changes

- 4d58894: Added support for group alias IDs and configurable content ordering on the entity page. Groups can now declare `aliases` so that content targeting an aliased group is included in the group. A new `defaultContentOrder` option (default `title`) controls how content items within each group are sorted, with support for both a page-level default and per-group overrides.
- c548a0f: Migrated entity table cards (`HasComponentsCard`, `HasResourcesCard`, `HasSubcomponentsCard`, `HasSubdomainsCard`, `HasSystemsCard`, `DependsOnComponentsCard`, `DependsOnResourcesCard`, `DependencyOfComponentsCard`) to use BUI when no legacy props are passed. The old `variant`, `columns`, and `tableOptions` props are deprecated but still supported — passing any of them triggers the legacy MUI-based rendering. The new `columnConfig` prop accepts `EntityColumnConfig[]` for BUI-based rendering.

  `RelatedEntitiesCard` is deprecated — use `EntityRelationCard` from `@backstage/plugin-catalog-react/alpha` instead.

- 0be2541: Promoted the plugin's translation ref to the stable package entry point. It was previously only available through the alpha entry point.

##### Patch Changes

- 538c985: Updated installation documentation to use feature discovery as the default.
- 07ba746: Fixed entity page tab groups not respecting the ordering from the `groups` configuration.
- aa29b50: New frontend system pages now use the default plugin header together with `HeaderPage` instead of the legacy core page header pattern.
- 3f36ce1: Updated alpha plugin icons to follow the new frontend icon sizing rules when rendered in plugin and navigation surfaces.

### `@backstage/plugin-catalog-backend` (3.4.0 → 3.5.0)

#### 3.5.0

##### Minor Changes

- a6b2819: Added `query-catalog-entities` action to the catalog backend actions registry. Supports predicate-based filtering with `$all`, `$any`, `$not`, `$exists`, `$in`, `$contains`, and `$hasPrefix` operators.
- 972f686: Added support for predicate-based filtering on the `/entities/by-refs` endpoint via the `query` field in the request body. Supports `$all`, `$any`, `$not`, `$exists`, `$in`, `$contains`, and `$hasPrefix` operators.
- 5d95e8e: Add an `onConflict` option to location creation that can refresh an existing location instead of throwing a conflict error.
- 56c908e: Added support for predicate-based filtering on the `/entity-facets` endpoint via a new `POST` method. Supports `$all`, `$any`, `$not`, `$exists`, `$in`, `$contains`, and `$hasPrefix` operators.
- 0fbcf23: Migrated OpenAPI schemas to 3.1.
- bf71677: Added opentelemetry metrics for SCM events:

  - `catalog.events.scm.messages` with attribute `eventType`: Counter for the number of SCM events actually received by the catalog backend. The `eventType` is currently either `location` or `repository`.

- 51e23eb: Added predicate-based entity filtering via POST /entities/by-query endpoint.

  Supports `$all`, `$any`, `$not`, `$exists`, `$in`, `$hasPrefix`, and (partially) `$contains` operators for expressive entity queries. Integrated into the existing `queryEntities` flow with full cursor-based pagination, permission enforcement, and `totalItems` support.

  The catalog client's `queryEntities()` method automatically routes to the POST endpoint when a `query` predicate is provided.

##### Patch Changes

- a91bd1b: Improved catalog entity deletion so parent invalidation and deferred relation restitch scheduling are coordinated more safely.
- 6738cf0: build(deps): bump `minimatch` from 9.0.5 to 10.2.1
- 7416e8b: Moved stitch queue concerns out of `refresh_state` and `final_entities` into a dedicated `stitch_queue` table with `entity_ref` as the primary key. The `stitch_ticket` is used for optimistic concurrency control. When a stitch completes successfully and the ticket hasn't changed, the corresponding row is deleted from the queue. The migration handles existing data and is fully reversible.
- fbf382f: Minor internal optimisation
- 1ee5b28: Migrates existing catalog metrics to use the alpha MetricsService. This release is a 1:1 migration with no breaking changes.
- 72747b4: Deprecated two processors as they have been moved to the Community Plugins repo with their own backend modules:

  - `AnnotateScmSlugEntityProcessor`: Use `@backstage-community/plugin-catalog-backend-module-annotate-scm-slug` instead
  - `CodeOwnersProcessor`: Use `@backstage-community/plugin-catalog-backend-module-codeowners` instead

- 3644b72: Make the `search` foreign key catalog migration non-blocking on large tables by using batch deletes and PostgreSQL `NOT VALID`/`VALIDATE` to reduce lock duration
- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.
- 3181973: Changed the `search` table foreign key to point to `final_entities` instead of `refresh_state`

### `@backstage/plugin-catalog-graph` (0.5.7 → 0.6.0)

#### 0.6.0

##### Minor Changes

- d14b6e0: **BREAKING**: Migrated `MembersListCard`, `OwnershipCard`, and `CatalogGraphCard` to use BUI card primitives via `EntityInfoCard`.

  - `OwnershipCard`: Removed `variant` and `maxScrollHeight` props. Card height and scrolling are now controlled by the parent container — the card fills its container and the body scrolls automatically when content overflows.
  - `CatalogGraphCard`: Removed `variant` prop.
  - `MembersListCard`: Translation keys `subtitle`, `paginationLabel`, `aggregateMembersToggle.directMembers`, `aggregateMembersToggle.aggregatedMembers`, and `aggregateMembersToggle.ariaLabel` have been removed. The `title` key now includes `{{groupName}}`. New keys added: `cardLabel`, `noSearchResult`, `aggregateMembersToggle.label`.
  - `OwnershipCard`: Translation keys `aggregateRelationsToggle.directRelations`, `aggregateRelationsToggle.aggregatedRelations`, and `aggregateRelationsToggle.ariaLabel` have been removed. New key added: `aggregateRelationsToggle.label`.
  - Removed `MemberComponentClassKey` export, and `root` and `cardContent` from `MembersListCardClassKey`, `card` from `OwnershipCardClassKey`, and `card` from `CatalogGraphCardClassKey`.

  **Migration:**

  ```diff
  - <EntityOwnershipCard variant="gridItem" />
  + <EntityOwnershipCard />
  ```

  ```diff
  - <EntityCatalogGraphCard variant="gridItem" height={400} />
  + <EntityCatalogGraphCard height={400} />
  ```

##### Patch Changes

- 538c985: Updated installation documentation to use feature discovery as the default.
- 0be2541: Promoted the plugin's translation ref to the stable package entry point. It was previously only available through the alpha entry point.

### `@backstage/plugin-notifications-backend-module-slack` (0.3.1 → 0.4.0)

#### 0.4.0

##### Minor Changes

- cd62d78: **BREAKING**: Only send direct messages to user entity recipients. Notifications sent to non-user entities no longer send Slack direct messages to resolved users.
- 749ba60: Add an extension for custom Slack message layouts

##### Patch Changes

- e7c6c32: The Slack notification processor now uses the `MetricsService` to create metrics, providing plugin-scoped attribution. `{message}` unit has also been added.

### `@backstage/plugin-org` (0.6.49 → 0.7.0)

#### 0.7.0

##### Minor Changes

- d14b6e0: **BREAKING**: Migrated `MembersListCard`, `OwnershipCard`, and `CatalogGraphCard` to use BUI card primitives via `EntityInfoCard`.

  - `OwnershipCard`: Removed `variant` and `maxScrollHeight` props. Card height and scrolling are now controlled by the parent container — the card fills its container and the body scrolls automatically when content overflows.
  - `CatalogGraphCard`: Removed `variant` prop.
  - `MembersListCard`: Translation keys `subtitle`, `paginationLabel`, `aggregateMembersToggle.directMembers`, `aggregateMembersToggle.aggregatedMembers`, and `aggregateMembersToggle.ariaLabel` have been removed. The `title` key now includes `{{groupName}}`. New keys added: `cardLabel`, `noSearchResult`, `aggregateMembersToggle.label`.
  - `OwnershipCard`: Translation keys `aggregateRelationsToggle.directRelations`, `aggregateRelationsToggle.aggregatedRelations`, and `aggregateRelationsToggle.ariaLabel` have been removed. New key added: `aggregateRelationsToggle.label`.
  - Removed `MemberComponentClassKey` export, and `root` and `cardContent` from `MembersListCardClassKey`, `card` from `OwnershipCardClassKey`, and `card` from `CatalogGraphCardClassKey`.

  **Migration:**

  ```diff
  - <EntityOwnershipCard variant="gridItem" />
  + <EntityOwnershipCard />
  ```

  ```diff
  - <EntityCatalogGraphCard variant="gridItem" height={400} />
  + <EntityCatalogGraphCard height={400} />
  ```

- 5fc35bb: Migrated `EntityAboutCard`, `EntityLinksCard`, `EntityLabelsCard`, `GroupProfileCard`, and `UserProfileCard` from MUI/InfoCard to use the new BUI card layout and BUI components where possible.

  **BREAKING**: Removed `variant` prop from EntityAboutCard, EntityUserProfileCard, EntityGroupProfileCard, EntityLabelsCard, EntityLinksCard. Removed `gridSizes` prop from `AboutField`.

  **Migration:**

  Simply delete the obsolete `variant` and `gridSizes` props, e.g:

  ```diff
  -      <EntityAboutCard variant="gridItem" />
  +      <EntityAboutCard />
  ```

  ```diff
  -      <AboutField label="Owner" gridSizes={{ xs: 12, sm: 6, lg: 4 }} />
  +      <AboutField label="Owner" />
  ```

##### Patch Changes

- 538c985: Updated installation documentation to use feature discovery as the default.
- 0be2541: Promoted the plugin's translation ref to the stable package entry point. It was previously only available through the alpha entry point.

### `@backstage/plugin-scaffolder-common` (1.7.6 → 2.0.0)

#### 2.0.0

##### Major Changes

- 527cf88: **BREAKING** Removed deprecated `bitbucket` integration from being registered in the `ScaffolderClient`. Use the `bitbucketCloud` or `bitbucketServer` integrations instead.

##### Minor Changes

- f598909: **BREAKING PRODUCERS**: Made `retry`, `listTasks`, `listTemplatingExtensions`, `dryRun`, and `autocomplete` required methods on the `ScaffolderApi` interface. Implementations of `ScaffolderApi` must now provide these methods.
- e8736ea: Added an optional `secrets` field to `TemplateEntityV1beta3` for configuring secrets validation. The schema for validating secrets is defined under `secrets.schema` as a JSON Schema object.

### `@backstage/plugin-scaffolder-node` (0.12.5 → 0.13.0)

#### 0.13.0

##### Minor Changes

- e27bd4e: **BREAKING** Removed deprecated `bitbucket` integration from being used in the `parseRepoUrl` function. It will use the `bitbucketCloud` or `bitbucketServer` integrations instead.

##### Patch Changes

- cd0ecc5: Added `removeFiles` helper function for staging file removals in Git.
- f598909: Added `scaffolderServiceRef` and `ScaffolderService` interface for backend plugins that need to interact with the scaffolder API using `BackstageCredentials` instead of raw tokens.
- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/ui` (0.12.1 → 0.13.0)

#### 0.13.0

##### Minor Changes

- 768f09d: **BREAKING**: Simplified the neutral background prop API for container components. The explicit `neutral-1`, `neutral-2`, `neutral-3`, and `neutral-auto` values have been removed from `ProviderBg`. They are replaced by a single `'neutral'` value that always auto-increments from the parent context, making it impossible to skip or pin to an explicit neutral level.

  **Migration:**

  Replace any explicit `bg="neutral-1"`, `bg="neutral-2"`, `bg="neutral-3"`, or `bg="neutral-auto"` props with `bg="neutral"`. To achieve a specific neutral level in stories or tests, use nested containers — each additional `bg="neutral"` wrapper increments by one level.

  ```tsx
  // Before
  <Box bg="neutral-2">...</Box>

  // After
  <Box bg="neutral">
    <Box bg="neutral">...</Box>
  </Box>
  ```

  **Affected components:** Box, Flex, Grid, Card, Accordion, Popover, Tooltip, Dialog, Menu

- b42fcdc: **BREAKING**: Removed `--bui-bg-popover` CSS token. Popover, Tooltip, Menu, and Dialog now use `--bui-bg-app` for their outer shell and `Box bg="neutral-1"` for content areas, providing better theme consistency and eliminating a redundant token.

  **Migration:**

  Replace any usage of `--bui-bg-popover` with `--bui-bg-neutral-1` (for content surfaces) or `--bui-bg-app` (for outer shells):

  ```diff
  - background: var(--bui-bg-popover);
  + background: var(--bui-bg-neutral-1);
  ```

  **Affected components:** Popover, Tooltip, Menu, Dialog

- bd3a76e: **BREAKING**: Data attributes rendered by components are now always lowercase. This affects CSS selectors targeting camelCase data attributes.

  **Migration:**

  Update any custom CSS selectors that target camelCase data attributes to use lowercase instead:

  ```diff
  - [data-startCollapsed='true'] { ... }
  + [data-startcollapsed='true'] { ... }
  ```

  **Affected components:** SearchField

- 95702ab: **BREAKING**: Removed deprecated types `ComponentDefinition`, `ClassNamesMap`, `DataAttributeValues`, and `DataAttributesMap` from the public API. These were internal styling infrastructure types that have been replaced by the `defineComponent` system.

  **Migration:**

  Remove any direct usage of these types. Component definitions now use `defineComponent()` and their shapes are not part of the public API contract.

  ```diff
  - import type { ComponentDefinition, ClassNamesMap } from '@backstage/ui';
  ```

  If you were reading `definition.dataAttributes`, use `definition.propDefs` instead — props with `dataAttribute: true` in `propDefs` are the equivalent.

- 42f8c9b: **BREAKING**: Centralized client-side routing in `BUIProvider`. Components like Link, ButtonLink, Tabs, Menu, TagGroup, and Table now require a `BUIProvider` rendered inside a React Router context for client-side navigation to work.

  **Migration:**

  This change requires updating `@backstage/plugin-app` and `@backstage/core-app-api` alongside `@backstage/ui`. If you only upgrade `@backstage/ui`, BUI components will fall back to full-page navigation.

  If you cannot upgrade all packages together, or if you have a custom app shell, add a `BUIProvider` inside your Router:

  ```diff
  + import { BUIProvider } from '@backstage/ui';

    <BrowserRouter>
  +   <BUIProvider>
        <AppContent />
  +   </BUIProvider>
    </BrowserRouter>
  ```

  **Affected components:** Link, ButtonLink, Tabs, Menu, TagGroup, Table

- 17d6398: **BREAKING**: Renamed internal CSS classes to match the `Header` component name.

  **Migration:**: If you are targeting these classes directly in your styles, update the following:

  - `bui-HeaderPage` → `bui-Header`
  - `bui-HeaderPageContent` → `bui-HeaderContent`
  - `bui-HeaderPageBreadcrumbs` → `bui-HeaderBreadcrumbs`
  - `bui-HeaderPageTabsWrapper` → `bui-HeaderTabsWrapper`
  - `bui-HeaderPageControls` → `bui-HeaderControls`

  **Affected components:**: Header

- 9d5f3ba: Removed redundant `selected` and `indeterminate` props from the `Checkbox` component. Use the `isSelected` and `isIndeterminate` props instead, which are the standard React Aria props and already handle both the checkbox behaviour and the corresponding CSS data attributes.

  **Migration:**
  Replace any usage of the `selected` and `indeterminate` props on `Checkbox` with the `isSelected` and `isIndeterminate` props. Note that the checked state and related CSS data attributes (such as `data-selected` and `data-indeterminate`) are now driven by React Aria, so any custom logic that previously inspected or set these via the old props should instead rely on the React Aria-managed state and attributes exposed through the new props.

  **Affected components:** Checkbox

##### Patch Changes

- 04d9d8d: Added `List` and `ListRow` components. These provide a standalone, accessible list of interactive rows built on top of React Aria's `GridList` and `GridListItem` primitives. Rows support icons, descriptions, actions, menus, and single or multiple selection modes.

  **Affected components:** List, ListRow

- a1f4bee: Made Accordion a `bg` provider so nested components like Button auto-increment their background level. Updated `useDefinition` to resolve `bg` `propDef` defaults for provider components.
- db92751: Added interactive support to the `Card` component. Pass `onPress` to make the entire card surface pressable, or `href` to make it navigate to a URL. A transparent overlay handles the interaction while nested buttons and links remain independently clickable.
- 12d8afe: Added analytics capabilities to the component library. Components with navigation behavior (Link, ButtonLink, Tab, MenuItem, Tag, Row) now fire analytics events on click when a `BUIProvider` is present.

  New exports: `BUIProvider`, `useAnalytics`, `getNodeText`, and associated types (`AnalyticsTracker`, `UseAnalyticsFn`, `BUIProviderProps`, `AnalyticsEventAttributes`).

  Components with analytics support now accept a `noTrack` prop to suppress event firing.

  **Affected components:** Link, ButtonLink, Tab, MenuItem, Tag, Row

- b838cc9: Added a `loading` prop and `data-loading` data attribute to `TableRoot`, allowing consumers to distinguish between stale data and initial loading states. Both `stale` and `loading` set `aria-busy` on the table.

  Affected components: TableRoot

- 690786f: Improved the `Table` component loading state to show a skeleton UI with visible headers instead of plain "Loading..." text. The table now renders its full structure during loading, with animated skeleton rows in place of data. The loading state includes proper accessibility support with `aria-busy` on the table and screen reader announcements.

  Affected components: Table

- 58224d3: Fixed neutral-1 hover & pressed state in light mode.
- 95702ab: Migrated all components from `useStyles` to `useDefinition` hook. Exported `OwnProps` types for each component, enabling better type composition for consumers.

  **Affected components:** Avatar, Checkbox, Container, Dialog, FieldError, FieldLabel, Flex, FullPage, Grid, HeaderPage, Link, Menu, PasswordField, PluginHeader, Popover, RadioGroup, SearchField, Select, Skeleton, Switch, Table, TablePagination, Tabs, TagGroup, Text, TextField, ToggleButton, ToggleButtonGroup, Tooltip, VisuallyHidden

- 430d5ed: Fixed interactive cards so that CardBody can scroll when the card has a constrained height. Previously, the overlay element blocked scroll events.

  **Affected components:** Card

- 4c2c350: Removed the `transition` on `Container` padding to prevent an unwanted animation when the viewport is resized.

  Affected components: Container

- e0b7eb0: Fixed --bui-fg-success token in light mode to be more accessible.
- ad7c883: Deprecated the `HeaderPage` component name in favor of `Header`. The old `HeaderPage`, `HeaderPageProps`, `HeaderPageOwnProps`, `HeaderPageBreadcrumb`, and `HeaderPageDefinition` exports are still available as deprecated aliases.
- 0ebde15: Added documentation for the table cell wrapper requirement to TSDoc comments for `Cell`, `CellText`, `CellProfile`, `ColumnConfig`, and `RowRenderFn`.
- d9d2dd6: Added `SearchAutocomplete` and `SearchAutocompleteItem` components for building accessible search-with-results patterns. Built on React Aria's Autocomplete with keyboard navigation and screen reader support. Designed for async/external search results with a configurable popover width.

  **Affected components:** SearchAutocomplete, SearchAutocompleteItem

- a6b84e1: Made Checkbox `children` optional and added a dev warning when neither a visible label, `aria-label`, nor `aria-labelledby` is provided. The label wrapper div is no longer rendered when there are no children, removing the unnecessary gap.

  **Affected components:** Checkbox

- b99f6d5: Fixed `Dialog` content overflowing when no `height` prop is set. The dialog now grows with its content and scrolls when content exceeds the viewport height.

  **Affected components**: Dialog

- 2f581de: Fixed focus ring styles to use React Aria's `[data-focus-visible]` data attribute instead of the native CSS `:focus-visible` pseudo-class. This ensures keyboard focus rings render reliably when focus is managed programmatically by React Aria (e.g. inside a GridList, Menu, or Select).

  **Affected components:** Accordion, Button, ButtonIcon, ButtonLink, Card, List, Menu, Select, ToggleButtonGroup

- 17d6398: Fixed incorrect bottom spacing caused by `Container` using `padding-bottom` for its default bottom spacing. Changed to `margin-bottom` and prevented it from applying when `Container` is used as the `Header` root element.

  **Affected components:** Container, Header

- 2e5c651: Fixed `PluginHeader` to avoid triggering `ResizeObserver loop completed with undelivered notifications` warnings when used in layouts that react to the header height, such as pages that use `FullPage`.

  **Affected components:** PluginHeader

- d4fa5b4: Fixed tab `matchStrategy` matching to ignore query parameters and hash fragments in tab `href` values. Previously, tabs with query params in their `href` (e.g., `/page?group=foo`) would never show as active since matching compared the full `href` string against `location.pathname` which never includes query params.

  **Affected components:** Tabs, PluginHeader

- bc42b60: Fixed Table component to use current `--bui-bg-neutral-1` tokens instead of the removed `--bui-bg-tint` tokens, restoring row hover, selected, pressed, and disabled background colors.
- 9314ff5: Fixed a bug in the `useTable` hook where the loading skeleton was never shown for `complete` mode when using `getData`. The initial data state was an empty array instead of `undefined`, causing the `Table` component to skip the loading state.
- f42f4cc: Fixed Table column headers overflowing and wrapping when there is not enough space. Headers now truncate with ellipsis instead.

  **Affected components:** Table

- 1f9682b: Fixed Table row hover, selected, pressed, and disabled background states to use the correct neutral token level based on the container background.

  **Affected components:** Table

- fbd5c5a: Fixed Table rows showing a pointer cursor when not interactive. Rows now only show `cursor: pointer` when they have an `href`, are selectable, or are pressable.

  **Affected components:** Table

- 612c217: Fixed `Table` rows with external `href` values to open in a new tab by automatically applying `target="_blank"` and `rel="noopener noreferrer"`.

  **Affected components**: Table

- 545129a: Updated Table selection checkboxes to use `aria-label` instead of empty fragment children, improving accessibility and removing the unnecessary label gap in the selection cells.

  **Affected components:** Table

- 36987db: Fixed handling of the `style` prop on `Button`, `ButtonIcon`, and `ButtonLink` so that it is now correctly forwarded to the underlying element instead of being silently dropped.

  **Affected components:** Button, ButtonIcon, ButtonLink

- 95702ab: Fixed Link variant default from `'body'` to `'body-medium'` to match actual CSS selectors. The previous default did not correspond to a valid variant value.

  **Affected components:** Link

- 9027b10: Fixed scroll overflow in Menu and Select popover content when constrained by viewport height.

  **Affected components:** Menu, Select

- 7960d54: Added support for native HTML div attributes on the `Flex`, `Grid`, and `Grid.Item` components.

  **Affected components:** Flex, Grid, Grid.Item

- 0559408: Added `virtualized` prop to `Table` component for virtualized rendering of large datasets. Accepts `true` for default row height, `{ rowHeight: number }` for fixed height, or `{ estimatedRowHeight: number }` for variable height rows.
- 8909359: Fixed focus-visible outline styles for Menu and Select components.

  **Affected components:** Menu, Select

- 12d8afe: Fixed MenuItem `onAction` prop ordering so user-provided `onAction` handlers are chained rather than silently overwritten.
- aa29b50: Pages created with `PageBlueprint` now render the plugin header by default in the new frontend system.
- bb66b86: The `Select` trigger now automatically adapts its background colour based on the parent background context.

  **Affected components:** Select

- 4105a78: Merged the internal `PluginHeaderToolbar` component into `PluginHeader`, removing the separate component and its associated types (`PluginHeaderToolbarOwnProps`, `PluginHeaderToolbarProps`) and definition (`PluginHeaderToolbarDefinition`). This is an internal refactor with no changes to the public API of `PluginHeader`.

  **Affected components:** PluginHeader

- 9599697: Updated dependency `globals` to `^17.0.0`.
- 0f462f8: Improved type safety in `useDefinition` by centralizing prop resolution and strengthening the `BgPropsConstraint` to require that `bg` provider components declare `children` as a required prop in their OwnProps type.
- 8909359: Added proper cursor styles for RadioGroup items.

  **Affected components:** RadioGroup

- fcaac3b: Fixed `Card` interactive cards not firing the `onPress` handler when clicking the card surface.

  **Affected components**: Card

- b303857: Fixed `isRequired` prop not being passed to the underlying React Aria field components in TextField, SearchField, and PasswordField. Previously, `isRequired` was consumed locally for the secondary label text but never forwarded, which meant the input elements lacked `aria-required="true"` and React Aria's built-in required validation was not activated.

  **Affected components:** TextField, SearchField, PasswordField

- 934ac03: `SearchField` and `TextField` now automatically adapt their background color based on the parent bg context, stepping up one neutral level (e.g. neutral-1 → neutral-2) when placed on a neutral background. `TextField` also gains a focus ring using the `--bui-ring` token.

  **Affected components:** SearchField, TextField

- cd3cb0f: Improved `useBreakpoint` performance by sharing a single set of `matchMedia` listeners across all component instances instead of creating independent listeners per hook call.
- 36987db: Extended `AlertProps`, `ContainerProps`, `DialogBodyProps`, and `FieldLabelProps` with native div element props to allow passing attributes like `aria-*` and `data-*`.

  **Affected components:** Alert, Container, DialogBody, FieldLabel

## 0.x minor version bumps

### `@backstage/backend-dynamic-feature-service` (0.7.9 → 0.8.0)

#### 0.8.0

##### Minor Changes

- 0fbcf23: Migrated OpenAPI schemas to 3.1.

##### Patch Changes

- 4074a22: Fixed `resolvePackagePath` resolution for bundled dynamic plugins. When a plugin bundles its own copy of `@backstage/backend-plugin-api` inside `node_modules`, the `CommonJSModuleLoader` fallback now correctly resolves the plugin's `package.json` by name. Previously the fallback only applied when the resolution originated from the host application; it now also applies when originating from a bundled dependency, which is the case for plugins produced by the `backstage-cli package bundle` command.
- 70fc178: Migrated from deprecated `findPaths` to `targetPaths` and `findOwnPaths` from `@backstage/cli-common`.

### `@backstage/cli-common` (0.1.18 → 0.2.0)

#### 0.2.0

##### Minor Changes

- 56bd494: Added `targetPaths` and `findOwnPaths` as replacements for `findPaths`, with a cleaner separation between target project paths and package-relative paths.

  To migrate existing `findPaths` usage:

  ```ts
  // Before
  import { findPaths } from '@backstage/cli-common';
  const paths = findPaths(__dirname);

  // After — for target project paths (cwd-based):
  import { targetPaths } from '@backstage/cli-common';
  // paths.targetDir    → targetPaths.dir
  // paths.targetRoot   → targetPaths.rootDir
  // paths.resolveTarget('src')      → targetPaths.resolve('src')
  // paths.resolveTargetRoot('yarn.lock') → targetPaths.resolveRoot('yarn.lock')

  // After — for package-relative paths:
  import { findOwnPaths } from '@backstage/cli-common';
  const own = findOwnPaths(__dirname);
  // paths.ownDir       → own.dir
  // paths.ownRoot      → own.rootDir
  // paths.resolveOwn('config/jest.js')    → own.resolve('config/jest.js')
  // paths.resolveOwnRoot('tsconfig.json') → own.resolveRoot('tsconfig.json')
  ```

##### Patch Changes

- e44b6a9: The `findOwnRootDir` utility now searches for the monorepo root by traversing up the directory tree looking for a `package.json` with `workspaces`, instead of assuming a fixed `../..` relative path. If no workspaces root is found during this traversal, `findOwnRootDir` now throws to enforce stricter validation of the repository layout.
- 9361965: Fixed `runCheck` to ignore stdio of the spawned process, preventing unwanted output from leaking to the terminal.

### `@backstage/cli-node` (0.2.18 → 0.3.0)

#### 0.3.0

##### Minor Changes

- 7d055ef: Added `createCliModule` API and related types for building Backstage CLI plugins.

##### Patch Changes

- 94a885a: Added a new `cli-module` package role for packages that provide CLI plugin extensions.
- 12fa965: Added `CliAuth` class for managing CLI authentication state. This provides a class-based API with a static `create` method that resolves the currently selected (or explicitly named) auth instance, transparently refreshes expired access tokens, and exposes helpers for other CLI modules to authenticate with a Backstage backend.
- 61cb976: Added `toString()` method to `Lockfile` for serializing lockfiles back to string format.
- 06c2015: Added `runConcurrentTasks` and `runWorkerQueueThreads` utilities, moved from the `@backstage/cli` internal code.
- 70fc178: Migrated from deprecated `findPaths` to `targetPaths` and `findOwnPaths` from `@backstage/cli-common`.
- 3c811bf: Added `hasBackstageYarnPlugin` and `SuccessCache` exports, moved from `@backstage/cli`.
- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.
- a9d23c4: Properly support `package.json` `workspaces` field

### `@backstage/plugin-catalog-backend-module-github` (0.12.2 → 0.13.0)

#### 0.13.0

##### Minor Changes

- b11c2cd: The default user transformer now prefers organization verified domain emails over the user's public GitHub email when populating the user entity profile. It also strips plus-addressed routing tags that GitHub adds to these emails.

  If you want to retain the old behavior, you can do so with a custom user transformer using the `githubOrgEntityProviderTransformsExtensionPoint`:

  ```ts
  import { createBackendModule } from '@backstage/backend-plugin-api';
  import { githubOrgEntityProviderTransformsExtensionPoint } from '@backstage/plugin-catalog-backend-module-github-org';
  import { defaultUserTransformer } from '@backstage/plugin-catalog-backend-module-github';

  export default createBackendModule({
    pluginId: 'catalog',
    moduleId: 'github-org-custom-transforms',
    register(env) {
      env.registerInit({
        deps: {
          transforms: githubOrgEntityProviderTransformsExtensionPoint,
        },
        async init({ transforms }) {
          transforms.setUserTransformer(async (item, ctx) => {
            const entity = await defaultUserTransformer(item, ctx);
            if (entity && item.email) {
              entity.spec.profile!.email = item.email;
            }
            return entity;
          });
        },
      });
    },
  });
  ```

##### Patch Changes

- 6738cf0: build(deps): bump `minimatch` from 9.0.5 to 10.2.1
- 106d1b2: Added a `defaultUserTransformer.useVerifiedEmails` config option for the `githubOrg` provider. When set to `true`, the default user transformer prefers organization verified domain emails over the user's public GitHub email. Defaults to `false`, which uses only the public GitHub email.

  This option has no effect when a custom user transformer is set via the `githubOrgEntityProviderTransformsExtensionPoint`.

  ```yaml
  catalog:
    providers:
      githubOrg:
        production:
          githubUrl: https://github.com
          orgs:
            - my-org
          defaultUserTransformer:
            useVerifiedEmails: true
  ```

### `@backstage/plugin-devtools-react` (0.1.1 → 0.2.0)

#### 0.2.0

##### Minor Changes

- f4a1edd: Removed the deprecated `DevToolsContentBlueprint` from `@backstage/plugin-devtools-react`. DevTools pages in the new frontend system now use `SubPageBlueprint` tabs instead, and the catalog unprocessed entities alpha extension now attaches to DevTools as a subpage.

### `@backstage/plugin-events-backend` (0.5.11 → 0.6.0)

#### 0.6.0

##### Minor Changes

- 0fbcf23: Migrated OpenAPI schemas to 3.1.

### `@backstage/repo-tools` (0.16.5 → 0.17.0)

#### 0.17.0

##### Minor Changes

- 0fbcf23: Added support for OpenAPI 3.1 to all `schema openapi` commands. The commands now auto-detect the OpenAPI version from the spec file and use the appropriate generator, supporting both OpenAPI 3.0.x and 3.1.x specifications.

##### Patch Changes

- 426edbe: Fixed `generate-catalog-info` command failing with "too many arguments" when invoked by lint-staged via the pre-commit hook.
- d5779e5: Updated the CLI report parser to support cleye-style help output, and strip ANSI escape codes from captured output.
- 6738cf0: build(deps): bump `minimatch` from 9.0.5 to 10.2.1
- 2a51546: Fixed prettier existence checks in OpenAPI commands to use `fs.pathExists` instead of checking the resolved path string, which was always truthy.
- 70fc178: Migrated from deprecated `findPaths` to `targetPaths` and `findOwnPaths` from `@backstage/cli-common`.
- de62a9d: Upgraded `commander` dependency from `^12.0.0` to `^14.0.3` across all CLI packages.
- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.
- 18a946c: Updated `@microsoft/api-extractor` to `7.57.3` and added tests for `getTsDocConfig`

## 0.0.x patch version bumps

### `@backstage/plugin-kubernetes-cluster` (0.0.34 → 0.0.35)

#### 0.0.35

##### Patch Changes

- 0be2541: Promoted the plugin's translation ref to the stable package entry point. It was previously only available through the alpha entry point.

## Other minor version bumps

### `@backstage/backend-app-api` (1.5.0 → 1.6.0)

#### 1.6.0

##### Minor Changes

- 545557a: Registration errors should be forwarded as BackendStartupResult

### `@backstage/backend-plugin-api` (1.7.0 → 1.8.0)

#### 1.8.0

##### Minor Changes

- cc8348e: Added optional `visibilityPermission` field to `ActionsRegistryActionOptions`, allowing actions to declare a `BasicPermission` that controls visibility and access.

  ```typescript
  import { createPermission } from '@backstage/plugin-permission-common';

  const myPermission = createPermission({
    name: 'myPlugin.myAction.use',
    attributes: {},
  });

  actionsRegistry.register({
    name: 'my-action',
    title: 'My Action',
    description: 'An action that requires permission',
    visibilityPermission: myPermission,
    schema: {
      input: z => z.object({ name: z.string() }),
      output: z => z.object({ ok: z.boolean() }),
    },
    action: async ({ input }) => {
      return { output: { ok: true } };
    },
  });
  ```

  Actions without a `visibilityPermission` field continue to work as before.

- 015668c: Added `cancelTask` method to the `SchedulerService` interface and implementation, allowing cancellation of currently running scheduled tasks. For global tasks, the database lock is released and a periodic liveness check aborts the running task function. For local tasks, the task's abort signal is triggered directly. A new `POST /.backstage/scheduler/v1/tasks/:id/cancel` endpoint is also available.

##### Patch Changes

- dee4283: Added `pluginId` field to `ActionsServiceAction` type, populated from the registering plugin's metadata.
- 1ee5b28: Adds an alpha `MetricsService` to provide a unified interface for metrics instrumentation across Backstage plugins.
- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/catalog-client` (1.13.0 → 1.14.0)

#### 1.14.0

##### Minor Changes

- 972f686: Added support for the `query` field in `getEntitiesByRefs` requests, enabling predicate-based filtering with `$all`, `$any`, `$not`, `$exists`, `$in`, `$contains`, and `$hasPrefix` operators.
- 5d95e8e: Add an `onConflict` option to location creation that can refresh an existing location instead of throwing a conflict error.
- 56c908e: Added support for the `query` field in `getEntityFacets` requests, enabling predicate-based filtering with `$all`, `$any`, `$not`, `$exists`, `$in`, `$contains`, and `$hasPrefix` operators.
- 0fbcf23: Migrated OpenAPI schemas to 3.1.
- 51e23eb: Added predicate-based entity filtering via POST /entities/by-query endpoint.

  Supports `$all`, `$any`, `$not`, `$exists`, `$in`, `$hasPrefix`, and (partially) `$contains` operators for expressive entity queries. Integrated into the existing `queryEntities` flow with full cursor-based pagination, permission enforcement, and `totalItems` support.

  The catalog client's `queryEntities()` method automatically routes to the POST endpoint when a `query` predicate is provided.

##### Patch Changes

- d2494d6: Minor update to catalog client docs

### `@backstage/plugin-catalog-node` (2.0.0 → 2.1.0)

#### 2.1.0

##### Minor Changes

- bf71677: Added the ability for SCM events subscribers to mark the fact that they have taken actions based on events, which produces output metrics:

  - `catalog.events.scm.actions` with attribute `action`: Counter for the number of actions actually taken by catalog internals or other subscribers, based on SCM events. The `action` is currently either `create`, `delete`, `refresh`, or `move`.

### `@backstage/plugin-catalog-react` (2.0.0 → 2.1.0)

#### 2.1.0

##### Minor Changes

- c548a0f: Added `EntityDataTable`, `EntityRelationCard`, `entityDataTableColumns`, `entityColumnPresets`, and related types as alpha exports. These replace `EntityTable` and `RelatedEntitiesCard` (from `@backstage/plugin-catalog`) respectively, providing a unified BUI-based pattern for entity table cards.
- 4d58894: Added `aliases` and `contentOrder` fields to `EntityContentGroupDefinition`, allowing groups to declare alias IDs and control the sort order of their content items.
- d14b6e0: Exported `useEntityRefLink` hook that returns a function for generating entity page URLs from entity references.
- 0be2541: Promoted the plugin's translation ref to the stable package entry point. It was previously only available through the alpha entry point.
- c6080eb: Added `EntityInfoCard` component to `@backstage/plugin-catalog-react` as a BUI-based card wrapper for entity page cards.

##### Patch Changes

- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/plugin-scaffolder` (1.35.4 → 1.36.0)

#### 1.36.0

##### Minor Changes

- 0be2541: Promoted the plugin's translation ref to the stable package entry point. It was previously only available through the alpha entry point.

##### Patch Changes

- e27bd4e: Removed check for deprecated `bitbucket` integration from `repoPickerValidation` function used by the `RepoUrlPicker`, it now validates the `bitbucketServer` and `bitbucketCloud` integrations instead.
- 538c985: Updated installation documentation to use feature discovery as the default.
- bd5b842: Added a new `ui:autoSelect` option to the EntityPicker field that controls whether an entity is automatically selected when the field loses focus. When set to `false`, the field will remain empty if the user closes it without explicitly selecting an entity, preventing unintentional selections. Defaults to `true` for backward compatibility.
- 3f36ce1: Updated alpha plugin icons to follow the new frontend icon sizing rules when rendered in plugin and navigation surfaces.
- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/plugin-scaffolder-backend` (3.1.5 → 3.2.0)

#### 3.2.0

##### Minor Changes

- c9b11eb: Added a new `list-scaffolder-tasks` action that allows querying scaffolder tasks with optional ownership filtering and pagination support
- 1b42218: Adds a new `get-scaffolder-task-logs` action to `@backstage/plugin-scaffolder-backend` that retrieves log events for a given scaffolder task, with optional support for retrieving only new events after a given event ID.
- 0fbcf23: Migrated OpenAPI schemas to 3.1.
- 7695dd2: Added a new `list-scaffolder-actions` action that returns all installed scaffolder actions with their schemas and examples
- e8736ea: Added secrets schema validation for task creation, retry, and dry-run endpoints. When a template defines `spec.secrets.schema`, the API validates provided secrets against the schema and returns a `400` error if validation fails.

##### Patch Changes

- e27bd4e: Removed `@backstage/plugin-scaffolder-backend-module-bitbucket` from `package.json` as the package itself has been deprecated and the code deleted.
- 4f5ed06: Fixed a security vulnerability where server-configured environment secrets were exposed through the scaffolder dry-run endpoint.
- 30ff981: Fixed a security vulnerability where secrets could bypass log redaction when transformed through Nunjucks filters in scaffolder templates.
- 4e39e63: Removed unused dependencies
- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.
- ccc20cf: create scaffolder MCP action to dry run a provided scaffolder template

### `@backstage/plugin-scaffolder-react` (1.19.7 → 1.20.0)

#### 1.20.0

##### Minor Changes

- 0be2541: Promoted the plugin's translation ref to the stable package entry point. It was previously only available through the alpha entry point.
- 470f72d: The `LogViewer` component from `@backstage/core-components` now supports downloading logs if a callback is passed to `onDownloadLogs`

##### Patch Changes

- 004b5c1: Added back `formFieldsApiRef` and `ScaffolderFormFieldsApi` as alpha exports.
- bd31ddd: Updated dependency `flatted` to `3.3.4`.
- f598909: Added `scaffolderApiMock` test utility, exported from `@backstage/plugin-scaffolder-react/testUtils`.
- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/plugin-search` (1.6.1 → 1.7.0)

#### 1.7.0

##### Minor Changes

- 0be2541: Promoted the plugin's translation ref to the stable package entry point. It was previously only available through the alpha entry point.

##### Patch Changes

- d5eb954: Fixes the search component not registering the first search on navigate to the search page.
- aa29b50: New frontend system pages now use the default plugin header together with `HeaderPage` instead of the legacy core page header pattern.
- 3f36ce1: Updated alpha plugin icons to follow the new frontend icon sizing rules when rendered in plugin and navigation surfaces.

### `@backstage/plugin-search-backend` (2.0.12 → 2.1.0)

#### 2.1.0

##### Minor Changes

- 0fbcf23: Migrated OpenAPI schemas to 3.1.

##### Patch Changes

- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/plugin-search-react` (1.10.4 → 1.11.0)

#### 1.11.0

##### Minor Changes

- 0be2541: Promoted the plugin's translation ref to the stable package entry point. It was previously only available through the alpha entry point.

##### Patch Changes

- d5eb954: Fixes the search component not registering the first search on navigate to the search page.

## Other patch version bumps

### `@backstage/backend-test-utils` (1.11.0 → 1.11.1)

#### 1.11.1

##### Patch Changes

- dee4283: Added `pluginId` field to `ActionsServiceAction` type, populated from the registering plugin's metadata.
- 164711a: Added `cancelTask` to `MockSchedulerService` and mock scheduler service factory.
- 62f0a53: Fixed error forwarding in the actions registry so that known errors like `InputError` and `NotFoundError` thrown by actions preserve their original status codes and messages instead of being wrapped in `ForwardedError` and coerced to 500.
- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.
- 1ee5b28: Adds a new metrics service mock to be leveraged in tests

### `@backstage/catalog-model` (1.7.6 → 1.7.7)

#### 1.7.7

##### Patch Changes

- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/codemods` (0.1.54 → 0.1.55)

#### 0.1.55

##### Patch Changes

- 70fc178: Migrated from deprecated `findPaths` to `targetPaths` and `findOwnPaths` from `@backstage/cli-common`.
- de62a9d: Upgraded `commander` dependency from `^12.0.0` to `^14.0.3` across all CLI packages.

### `@backstage/config-loader` (1.10.8 → 1.10.9)

#### 1.10.9

##### Patch Changes

- 70fc178: Migrated from deprecated `findPaths` to `targetPaths` and `findOwnPaths` from `@backstage/cli-common`.

### `@backstage/core-app-api` (1.19.5 → 1.19.6)

#### 1.19.6

##### Patch Changes

- 12d8afe: Added `BUIProvider` from `@backstage/ui` to the app shell provider tree, enabling BUI components to fire analytics events through the Backstage analytics system.
- 59752a2: Deprecated `AlertApiForwarder` in favor of the new `ToastApi`. The `AlertApiForwarder` now emits a console warning on first use, guiding developers to migrate to `ToastApi` from `@backstage/frontend-plugin-api`.
- 0452d02: Add optional `description` field to plugin-level feature flags.
- 42f8c9b: Added `BUIProvider` inside the legacy app router to enable client-side routing for all BUI components.
- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/core-compat-api` (0.5.8 → 0.5.9)

#### 0.5.9

##### Patch Changes

- b15a685: Added `withApis`, which is a Higher-Order Component for providing APIs as props to a component via `useApiHolder`.
- 8e09233: Added a missing dependency on `@backstage/filter-predicates` to `@backstage/core-compat-api`. This fixes package metadata for consumers that use compatibility helpers relying on filter predicate support.
- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/core-components` (0.18.7 → 0.18.8)

#### 0.18.8

##### Patch Changes

- e26e3de: The login request dialog now handles auth provider icons passed as `IconElement` in addition to `IconComponent`.
- 8e09233: Fixed the shared `Progress` component to provide an accessible name for its loading indicator by default.
- 8b1a847: Fixed Table component layout when both `filters` and `title` props are used together. The filter controls now use a dedicated CSS class (`filterControls`) instead of incorrectly reusing the root container class.
- 3f36ce1: Clarified the `IconElement` sizing contract for the new frontend system and aligned legacy system icon rendering with the new icon API.
- 0be2541: Promoted the plugin's translation ref to the stable package entry point. It was previously only available through the alpha entry point.
- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.
- 470f72d: The `LogViewer` component from `@backstage/core-components` now supports downloading logs if a callback is passed to `onDownloadLogs`

### `@backstage/core-plugin-api` (1.12.3 → 1.12.4)

#### 1.12.4

##### Patch Changes

- d911b72: Updated `createApiRef` to preserve the direct config call without deprecation warnings while staying compatible with the new frontend API ref typing.
- 59752a2: Deprecated `AlertApi`, `AlertMessage`, and `alertApiRef` in favor of the new `ToastApi` from `@backstage/frontend-plugin-api`.
- 0452d02: Add optional `description` field to plugin-level feature flags.
- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.
- fe848e0: Changed `useApiHolder` to return an empty `ApiHolder` instead of throwing when used outside of an API context.

### `@backstage/eslint-plugin` (0.2.1 → 0.2.2)

#### 0.2.2

##### Patch Changes

- 6738cf0: build(deps): bump `minimatch` from 9.0.5 to 10.2.1

### `@backstage/filter-predicates` (0.1.0 → 0.1.1)

#### 0.1.1

##### Patch Changes

- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/frontend-dynamic-feature-loader` (0.1.9 → 0.1.10)

#### 0.1.10

##### Patch Changes

- e8ba654: Update the README of the `frontend-dynamic-feature-loader` package to mention the new `backstage-cli package bundle` command.

### `@backstage/frontend-test-utils` (0.5.0 → 0.5.1)

#### 0.5.1

##### Patch Changes

- b56f573: Deprecated standalone mock API exports in favor of the `mockApis` namespace. This includes the mock classes (`MockAlertApi`, `MockAnalyticsApi`, `MockConfigApi`, `MockErrorApi`, `MockFetchApi`, `MockFeatureFlagsApi`, `MockPermissionApi`, `MockStorageApi`, `MockTranslationApi`), their option types (`MockErrorApiOptions`, `MockFeatureFlagsApiOptions`), and the `ErrorWithContext` type. `MockFetchApiOptions` is kept as a non-deprecated export. Use the `mockApis` namespace instead, for example `mockApis.alert()` or `mockApis.alert.mock()`.
- 479282f: Fixed type inference of `TestApiPair` when using tuple syntax by wrapping `MockWithApiFactory` in `NoInfer`.
- 8e09233: Added a missing dependency on `@backstage/filter-predicates` to `@backstage/frontend-test-utils`. This fixes package metadata for consumers using the frontend test app helpers with predicate-based behavior.
- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.
- 909c742: Switched `MockTranslationApi` and related test utility imports from `@backstage/core-plugin-api/alpha` to the stable `@backstage/frontend-plugin-api` export. The `TranslationApi` type in the API report is now sourced from a single package. This has no effect on runtime behavior.

### `@backstage/module-federation-common` (0.1.1 → 0.1.2)

#### 0.1.2

##### Patch Changes

- 0cb5646: Fixed the `@mui/material/styles` shared dependency key by removing a trailing slash that caused module resolution failures with MUI package exports.

### `@backstage/plugin-api-docs` (0.13.4 → 0.13.5)

#### 0.13.5

##### Patch Changes

- 9c9d425: Fixed invisible text in parameter input fields when using dark mode in OpenAPI definition pages
- 538c985: Updated installation documentation to use feature discovery as the default.
- 30e08df: Added default entity content groups for the API docs entity content tabs. The API definition tab defaults to the `documentation` group and the APIs tab defaults to the `development` group.
- c548a0f: Migrated entity table cards (`ConsumedApisCard`, `ProvidedApisCard`, `HasApisCard`, `ConsumingComponentsCard`, `ProvidingComponentsCard`) to use BUI when no legacy props are passed. The old `variant`, `columns`, and `tableOptions` props are deprecated but still supported — passing any of them triggers the legacy MUI-based rendering. The new `columnConfig` prop accepts `EntityColumnConfig[]` for BUI-based rendering.
- aa29b50: New frontend system pages now use the default plugin header together with `HeaderPage` instead of the legacy core page header pattern.
- 3f36ce1: Updated alpha plugin icons to follow the new frontend icon sizing rules when rendered in plugin and navigation surfaces.
- 0be2541: Promoted the plugin's translation ref to the stable package entry point. It was previously only available through the alpha entry point.
- ca277ef: Updated dependency `graphiql` to `3.9.0` to address security vulnerability in `markdown-it` package.
  Updated dependency `@graphiql/react` to `0.29.0` to match the version used by `graphiql`.
  Moved dependency `graphql-config` to `devDependencies` as it is needed only for types.

### `@backstage/plugin-app` (0.4.0 → 0.4.1)

#### 0.4.1

##### Patch Changes

- 5f3f5d2: `NavContentBlueprint` nav item collections now keep previously collected `rest()` results in sync when additional items are taken later in the same render, making it easier to place items across multiple sidebar sections.
- aa29b50: Pages created with `PageBlueprint` now render the plugin header by default in the new frontend system.
- c0ab376: The app nav now falls back to `plugin.icon` for navigation items that don't have an explicit icon set.
- 12d8afe: Added `BUIProvider` from `@backstage/ui` to the app root, enabling BUI components to fire analytics events through the Backstage analytics system.
- 5fec07d: Updated the default app root to better support phased app preparation by allowing the app layout to be absent during bootstrap, routing bootstrap failures through the app root boundary, and avoiding installation of a guest identity in protected apps that do not provide a sign-in page.
- 9508514: Updated the default `PluginWrapperApi` implementation to support the new `useWrapperValue` hook and root wrapper. The root wrapper is now rendered in the app root to manage shared hook state across plugin wrapper instances.
- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.
- 42f8c9b: Moved `BUIProvider` inside the app router to enable automatic client-side routing for all BUI components.
- 909c742: Switched translation API imports (`translationApiRef`, `appLanguageApiRef`) from the alpha `@backstage/core-plugin-api/alpha` path to the stable `@backstage/frontend-plugin-api` export. This has no effect on runtime behavior.
- 7e743f4: Introduced a new `ToastApi` for displaying rich toast notifications in the new frontend system.

  The new `ToastApi` provides enhanced notification capabilities compared to the existing `AlertApi`:

  - **Title and Description**: Toasts support both a title and an optional description
  - **Custom Timeouts**: Each toast can specify its own timeout duration
  - **Links**: Toasts can include action links
  - **Status Variants**: Support for neutral, info, success, warning, and danger statuses
  - **Programmatic Dismiss**: Toasts can be dismissed programmatically using the `close()` handle returned from `post()`

  **Usage:**

  ```typescript
  import { toastApiRef, useApi } from '@backstage/frontend-plugin-api';

  const toastApi = useApi(toastApiRef);

  // Full-featured toast
  toastApi.post({
    title: 'Entity saved',
    description: 'Your changes have been saved successfully.',
    status: 'success',
    timeout: 5000,
    links: [{ label: 'View entity', href: '/catalog/entity' }],
  });

  // Programmatic dismiss
  const { close } = toastApi.post({ title: 'Uploading...', status: 'info' });
  // Later...
  close();
  ```

  The `ToastDisplay` component subscribes to both `ToastApi` and `AlertApi`, providing a migration path where both systems work side by side until `AlertApi` is fully deprecated.

### `@backstage/plugin-app-react` (0.2.0 → 0.2.1)

#### 0.2.1

##### Patch Changes

- 5f3f5d2: `NavContentBlueprint` nav item collections now keep previously collected `rest()` results in sync when additional items are taken later in the same render, making it easier to place items across multiple sidebar sections.
- 2c383b5: Added `AnalyticsImplementationBlueprint` and `AnalyticsImplementationFactory`, migrated from `@backstage/frontend-plugin-api`.

### `@backstage/plugin-app-visualizer` (0.2.0 → 0.2.1)

#### 0.2.1

##### Patch Changes

- c25532a: Switched dev entry point to use `createDevApp` from `@backstage/frontend-dev-utils`.

### `@backstage/plugin-auth` (0.1.5 → 0.1.6)

#### 0.1.6

##### Patch Changes

- 06294aa: Migrated the ConsentPage UI from Material-UI and `@backstage/core-components` to `@backstage/ui`.
- aa29b50: New frontend system pages now use the default plugin header together with `HeaderPage` instead of the legacy core page header pattern.

### `@backstage/plugin-auth-backend` (0.27.1 → 0.27.2)

#### 0.27.2

##### Patch Changes

- 1ccad86: Added `who-am-i` action to the auth backend actions registry. Returns the catalog entity and user info for the currently authenticated user.
- d0f4cd2: Added optional client metadata document endpoint at `/.well-known/oauth-client/cli.json` relative to the auth backend base URL for CLI authentication. Enabled when `auth.experimentalClientIdMetadataDocuments.enabled` is set to `true`.
- 6738cf0: build(deps): bump `minimatch` from 9.0.5 to 10.2.1
- e9b6e97: Fixed a security vulnerability where the CIMD metadata fetch could follow HTTP redirects to internal hosts, bypassing SSRF protections.
- 0f9d673: Improved redirect URI validation in the experimental OIDC provider to match against normalized URLs rather than raw strings.
- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.
- 634eded: Fixed a foreign key constraint violation when issuing refresh tokens for CIMD clients, and
  prevented a failed refresh token issuance from failing the entire token exchange.
  Fixed AWS ALB auth provider incorrectly returning HTTP 500 instead of 401 for JWT validation failures,
  which caused retry loops and memory pressure under load.
- 619be54: Update migrations to be reversible

### `@backstage/plugin-auth-backend-module-atlassian-provider` (0.4.12 → 0.4.13)

#### 0.4.13

##### Patch Changes

- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.4.13 → 0.4.14)

#### 0.4.14

##### Patch Changes

- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.
- 634eded: Fixed a foreign key constraint violation when issuing refresh tokens for CIMD clients, and
  prevented a failed refresh token issuance from failing the entire token exchange.
  Fixed AWS ALB auth provider incorrectly returning HTTP 500 instead of 401 for JWT validation failures,
  which caused retry loops and memory pressure under load.

### `@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.2.17 → 0.2.18)

#### 0.2.18

##### Patch Changes

- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/plugin-auth-backend-module-bitbucket-provider` (0.3.12 → 0.3.13)

#### 0.3.13

##### Patch Changes

- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/plugin-auth-backend-module-bitbucket-server-provider` (0.2.12 → 0.2.13)

#### 0.2.13

##### Patch Changes

- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.4.12 → 0.4.13)

#### 0.4.13

##### Patch Changes

- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.4.12 → 0.4.13)

#### 0.4.13

##### Patch Changes

- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/plugin-auth-backend-module-github-provider` (0.5.0 → 0.5.1)

#### 0.5.1

##### Patch Changes

- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/plugin-auth-backend-module-gitlab-provider` (0.4.0 → 0.4.1)

#### 0.4.1

##### Patch Changes

- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/plugin-auth-backend-module-google-provider` (0.3.12 → 0.3.13)

#### 0.3.13

##### Patch Changes

- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/plugin-auth-backend-module-microsoft-provider` (0.3.12 → 0.3.13)

#### 0.3.13

##### Patch Changes

- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/plugin-auth-backend-module-oauth2-provider` (0.4.12 → 0.4.13)

#### 0.4.13

##### Patch Changes

- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.2.17 → 0.2.18)

#### 0.2.18

##### Patch Changes

- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/plugin-auth-backend-module-oidc-provider` (0.4.13 → 0.4.14)

#### 0.4.14

##### Patch Changes

- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/plugin-auth-backend-module-okta-provider` (0.2.12 → 0.2.13)

#### 0.2.13

##### Patch Changes

- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/plugin-auth-backend-module-onelogin-provider` (0.3.12 → 0.3.13)

#### 0.3.13

##### Patch Changes

- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/plugin-auth-backend-module-openshift-provider` (0.1.4 → 0.1.5)

#### 0.1.5

##### Patch Changes

- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/plugin-auth-node` (0.6.13 → 0.6.14)

#### 0.6.14

##### Patch Changes

- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/plugin-catalog-backend-module-github-org` (0.3.19 → 0.3.20)

#### 0.3.20

##### Patch Changes

- 106d1b2: Added a `defaultUserTransformer.useVerifiedEmails` config option for the `githubOrg` provider. When set to `true`, the default user transformer prefers organization verified domain emails over the user's public GitHub email. Defaults to `false`, which uses only the public GitHub email.

  This option has no effect when a custom user transformer is set via the `githubOrgEntityProviderTransformsExtensionPoint`.

  ```yaml
  catalog:
    providers:
      githubOrg:
        production:
          githubUrl: https://github.com
          orgs:
            - my-org
          defaultUserTransformer:
            useVerifiedEmails: true
  ```

### `@backstage/plugin-catalog-backend-module-gitlab` (0.8.0 → 0.8.1)

#### 0.8.1

##### Patch Changes

- d933f62: Add configurable throttling and retry mechanism for GitLab integration.

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.7.9 → 0.7.10)

#### 0.7.10

##### Patch Changes

- 5f1e7b8: Migrated metrics from direct `@opentelemetry/api` usage to the alpha `MetricsService`, providing plugin-scoped metric attribution. The `@opentelemetry/api` dependency has been removed.

### `@backstage/plugin-catalog-backend-module-msgraph` (0.9.0 → 0.9.1)

#### 0.9.1

##### Patch Changes

- 97eaecf: Fixed scheduler task remaining stuck in running state after pod termination by propagating AbortSignal into MicrosoftGraphOrgEntityProvider.read()

### `@backstage/plugin-catalog-import` (0.13.10 → 0.13.11)

#### 0.13.11

##### Patch Changes

- 538c985: Updated installation documentation to use feature discovery as the default.
- 0be2541: Promoted the plugin's translation ref to the stable package entry point. It was previously only available through the alpha entry point.

### `@backstage/plugin-catalog-unprocessed-entities` (0.2.26 → 0.2.27)

#### 0.2.27

##### Patch Changes

- 538c985: Updated installation documentation to use feature discovery as the default.
- aa29b50: New frontend system pages now use the default plugin header together with `HeaderPage` instead of the legacy core page header pattern.
- 3f36ce1: Updated alpha plugin icons to follow the new frontend icon sizing rules when rendered in plugin and navigation surfaces.
- f4a1edd: Removed the deprecated `DevToolsContentBlueprint` from `@backstage/plugin-devtools-react`. DevTools pages in the new frontend system now use `SubPageBlueprint` tabs instead, and the catalog unprocessed entities alpha extension now attaches to DevTools as a subpage.

### `@backstage/plugin-devtools` (0.1.36 → 0.1.37)

#### 0.1.37

##### Patch Changes

- afabb37: Fixed URL encoding of task IDs for the trigger feature (tasks that contained a "/" in their ID were not triggered)
- f80195e: Added `cancelScheduledTask` to the DevTools API and a cancel button to the scheduled tasks UI.
- 538c985: Updated installation documentation to use feature discovery as the default.
- aa29b50: New frontend system pages now use the default plugin header together with `HeaderPage` instead of the legacy core page header pattern.
- 3f36ce1: Updated alpha plugin icons to follow the new frontend icon sizing rules when rendered in plugin and navigation surfaces.
- f4a1edd: Removed the deprecated `DevToolsContentBlueprint` from `@backstage/plugin-devtools-react`. DevTools pages in the new frontend system now use `SubPageBlueprint` tabs instead, and the catalog unprocessed entities alpha extension now attaches to DevTools as a subpage.

### `@backstage/plugin-devtools-common` (0.1.22 → 0.1.23)

#### 0.1.23

##### Patch Changes

- f80195e: Added `cancelScheduledTask` to the DevTools API and a cancel button to the scheduled tasks UI.

### `@backstage/plugin-home` (0.9.2 → 0.9.3)

#### 0.9.3

##### Patch Changes

- 538c985: Updated installation documentation to use feature discovery as the default.
- 0be2541: Promoted the plugin's translation ref to the stable package entry point. It was previously only available through the alpha entry point.
- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/plugin-home-react` (0.1.35 → 0.1.36)

#### 0.1.36

##### Patch Changes

- 0be2541: Promoted the plugin's translation ref to the stable package entry point. It was previously only available through the alpha entry point.

### `@backstage/plugin-kubernetes` (0.12.16 → 0.12.17)

#### 0.12.17

##### Patch Changes

- 538c985: Updated installation documentation to use feature discovery as the default.
- 0be2541: Promoted the plugin's translation ref to the stable package entry point. It was previously only available through the alpha entry point.

### `@backstage/plugin-kubernetes-backend` (0.21.1 → 0.21.2)

#### 0.21.2

##### Patch Changes

- 6b6b5de: Added `endpointType` config option to the GKE cluster locator, allowing use of DNS-based control plane endpoints instead of public IP endpoints. Set `endpointType: 'dns'` to use GKE DNS endpoints (e.g. `gke-<uid>.<region>.gke.goog`) which provide proper TLS certificates and IAM-based access control.

### `@backstage/plugin-kubernetes-react` (0.5.16 → 0.5.17)

#### 0.5.17

##### Patch Changes

- 0be2541: Promoted the plugin's translation ref to the stable package entry point. It was previously only available through the alpha entry point.

### `@backstage/plugin-mcp-actions-backend` (0.1.9 → 0.1.10)

#### 0.1.10

##### Patch Changes

- 62f0a53: Fixed error forwarding in the actions registry so that known errors like `InputError` and `NotFoundError` thrown by actions preserve their original status codes and messages instead of being wrapped in `ForwardedError` and coerced to 500.
- dee4283: Added `mcpActions.name` and `mcpActions.description` config options to customize the MCP server identity. Namespaced tool names now use dot separator to align with the MCP spec convention.
- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.
- c74b697: Added support for splitting MCP actions into multiple servers via `mcpActions.servers` configuration. Each server gets its own endpoint at `/api/mcp-actions/v1/{key}` with actions scoped using include/exclude filter rules. Tool names are now namespaced with the plugin ID by default, configurable via `mcpActions.namespacedToolNames`. When `mcpActions.servers` is not configured, the plugin continues to serve a single server at `/api/mcp-actions/v1`.
- dc81af1: Adds two new metrics to track MCP server operations and sessions.

  - `mcp.server.operation.duration`: The duration taken to process an individual MCP operation
  - `mcp.server.session.duration`: The duration of the MCP session from the perspective of the server

### `@backstage/plugin-mui-to-bui` (0.2.4 → 0.2.5)

#### 0.2.5

##### Patch Changes

- 538c985: Updated installation documentation to use feature discovery as the default.
- ad7c883: Updated the MUI to BUI theme converter page to use the renamed `Header` component from `@backstage/ui`.

### `@backstage/plugin-notifications` (0.5.14 → 0.5.15)

#### 0.5.15

##### Patch Changes

- aa29b50: New frontend system pages now use the default plugin header together with `HeaderPage` instead of the legacy core page header pattern.
- 0be2541: Promoted the plugin's translation ref to the stable package entry point. It was previously only available through the alpha entry point.

### `@backstage/plugin-permission-backend` (0.7.9 → 0.7.10)

#### 0.7.10

##### Patch Changes

- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/plugin-permission-common` (0.9.6 → 0.9.7)

#### 0.9.7

##### Patch Changes

- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/plugin-permission-node` (0.10.10 → 0.10.11)

#### 0.10.11

##### Patch Changes

- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/plugin-permission-react` (0.4.40 → 0.4.41)

#### 0.4.41

##### Patch Changes

- 5fec07d: Permission checks made in the same tick are now batched into a single call to the permission backend.

### `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.3.3 → 0.3.4)

#### 0.3.4

##### Patch Changes

- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/plugin-scaffolder-backend-module-github` (0.9.6 → 0.9.7)

#### 0.9.7

##### Patch Changes

- a761a48: Added optional `returnWorkflowRunDetails` input to `github:actions:dispatch` action. When true, exposes `workflowRunId`, `workflowRunUrl`, and `workflowRunHtmlUrl` as outputs using the GitHub API `return_run_details` parameter.
- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.
- b2591f6: Fixed environment `waitTime` description incorrectly asking for milliseconds instead of minutes.

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.11.3 → 0.11.4)

#### 0.11.4

##### Patch Changes

- 5730c8e: Added `maskedAndHidden` option to `gitlab:projectVariable:create` and `publish:gitlab` action to support creating GitLab project variables that are both masked and hidden. Updated gitbeaker to version 43.8.0 for proper type support.
- 0c1726a: Added new `gitlab:group:access` scaffolder action to add or remove users and groups as members of GitLab groups. The action supports specifying members via `userIds` and/or `groupIds` array parameters, configurable access levels (Guest, Reporter, Developer, Maintainer, Owner), and defaults to the 'add' action when not specified.
- 4b8fcf0: Added two optional inputs to the `publish:gitlab` action:

  - `settings.name`: set a custom human-readable project title that differs from the repository slug.
  - `ownerUsername`: add a specific GitLab user as project owner (access level 50) of the newly created repository. Requires a privileged token in the integration configuration.

- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/plugin-techdocs` (1.17.0 → 1.17.1)

#### 1.17.1

##### Patch Changes

- 9795d30: chore(deps): bump `dompurify` from 3.3.1 to 3.3.2
- 30e08df: Added `documentation` as the default entity content group for the TechDocs entity content tab.
- 3f36ce1: Updated alpha plugin icons to follow the new frontend icon sizing rules when rendered in plugin and navigation surfaces.

### `@backstage/plugin-techdocs-backend` (2.1.5 → 2.1.6)

#### 2.1.6

##### Patch Changes

- cb7c6b1: Added `techdocs.generator.mkdocs.dangerouslyAllowAdditionalKeys` configuration option to explicitly bypass MkDocs configuration key restrictions. This enables support for additional MkDocs configuration keys beyond the default safe allow list, such as the `hooks` key which some MkDocs plugins require.

### `@backstage/plugin-techdocs-module-addons-contrib` (1.1.33 → 1.1.34)

#### 1.1.34

##### Patch Changes

- 895563a: Avoid enabling the TechDocs LightBox addon for images wrapped in links, so image links keep working.

### `@backstage/plugin-techdocs-node` (1.14.3 → 1.14.4)

#### 1.14.4

##### Patch Changes

- cb7c6b1: Added `techdocs.generator.mkdocs.dangerouslyAllowAdditionalKeys` configuration option to explicitly bypass MkDocs configuration key restrictions. This enables support for additional MkDocs configuration keys beyond the default safe allow list, such as the `hooks` key which some MkDocs plugins require.
- e96f6d9: Removed `INHERIT` from the `ALLOWED_MKDOCS_KEYS` set to address a security concern with MkDocs configuration inheritance.

### `@backstage/plugin-user-settings` (0.9.0 → 0.9.1)

#### 0.9.1

##### Patch Changes

- e26e3de: The `ProviderSettingsItem` `icon` prop now accepts `IconElement` in addition to `IconComponent`.
- 538c985: Updated installation documentation to use feature discovery as the default.
- aa29b50: New frontend system pages now use the default plugin header together with `HeaderPage` instead of the legacy core page header pattern.
- 3f36ce1: Updated alpha plugin icons to follow the new frontend icon sizing rules when rendered in plugin and navigation surfaces.
- 0be2541: Promoted the plugin's translation ref to the stable package entry point. It was previously only available through the alpha entry point.

### `@backstage/plugin-user-settings-backend` (0.4.0 → 0.4.1)

#### 0.4.1

##### Patch Changes

- a49a40d: Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@techdocs/cli` (1.10.5 → 1.10.6)

#### 1.10.6

##### Patch Changes

- 70fc178: Migrated from deprecated `findPaths` to `targetPaths` and `findOwnPaths` from `@backstage/cli-common`.
- de62a9d: Upgraded `commander` dependency from `^12.0.0` to `^14.0.3` across all CLI packages.

_Excluded dependency updates for packages: `@backstage/app-defaults`, `@backstage/backend-openapi-utils`, `@backstage/dev-utils`, `@backstage/integration-react`, `@backstage/plugin-app-backend`, `@backstage/plugin-app-node`, `@backstage/plugin-auth-backend-module-auth0-provider`, `@backstage/plugin-auth-backend-module-guest-provider`, `@backstage/plugin-auth-backend-module-pinniped-provider`, `@backstage/plugin-auth-backend-module-vmware-cloud-provider`, `@backstage/plugin-auth-react`, `@backstage/plugin-bitbucket-cloud-common`, `@backstage/plugin-catalog-backend-module-aws`, `@backstage/plugin-catalog-backend-module-azure`, `@backstage/plugin-catalog-backend-module-backstage-openapi`, `@backstage/plugin-catalog-backend-module-bitbucket-cloud`, `@backstage/plugin-catalog-backend-module-bitbucket-server`, `@backstage/plugin-catalog-backend-module-gcp`, `@backstage/plugin-catalog-backend-module-gerrit`, `@backstage/plugin-catalog-backend-module-gitea`, `@backstage/plugin-catalog-backend-module-gitlab-org`, `@backstage/plugin-catalog-backend-module-ldap`, `@backstage/plugin-catalog-backend-module-logs`, `@backstage/plugin-catalog-backend-module-openapi`, `@backstage/plugin-catalog-backend-module-puppetdb`, `@backstage/plugin-catalog-backend-module-scaffolder-entity-model`, `@backstage/plugin-catalog-backend-module-unprocessed`, `@backstage/plugin-config-schema`, `@backstage/plugin-devtools-backend`, `@backstage/plugin-events-backend-module-aws-sqs`, `@backstage/plugin-events-backend-module-azure`, `@backstage/plugin-events-backend-module-bitbucket-cloud`, `@backstage/plugin-events-backend-module-bitbucket-server`, `@backstage/plugin-events-backend-module-gerrit`, `@backstage/plugin-events-backend-module-github`, `@backstage/plugin-events-backend-module-gitlab`, `@backstage/plugin-events-backend-module-google-pubsub`, `@backstage/plugin-events-backend-module-kafka`, `@backstage/plugin-events-backend-test-utils`, `@backstage/plugin-events-node`, `@backstage/plugin-gateway-backend`, `@backstage/plugin-kubernetes-node`, `@backstage/plugin-notifications-backend`, `@backstage/plugin-notifications-backend-module-email`, `@backstage/plugin-notifications-node`, `@backstage/plugin-org-react`, `@backstage/plugin-permission-backend-module-allow-all-policy`, `@backstage/plugin-proxy-backend`, `@backstage/plugin-proxy-node`, `@backstage/plugin-scaffolder-backend-module-azure`, `@backstage/plugin-scaffolder-backend-module-bitbucket-server`, `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown`, `@backstage/plugin-scaffolder-backend-module-cookiecutter`, `@backstage/plugin-scaffolder-backend-module-gcp`, `@backstage/plugin-scaffolder-backend-module-gerrit`, `@backstage/plugin-scaffolder-backend-module-gitea`, `@backstage/plugin-scaffolder-backend-module-notifications`, `@backstage/plugin-scaffolder-backend-module-rails`, `@backstage/plugin-scaffolder-backend-module-sentry`, `@backstage/plugin-scaffolder-backend-module-yeoman`, `@backstage/plugin-scaffolder-node-test-utils`, `@backstage/plugin-search-backend-module-catalog`, `@backstage/plugin-search-backend-module-elasticsearch`, `@backstage/plugin-search-backend-module-explore`, `@backstage/plugin-search-backend-module-pg`, `@backstage/plugin-search-backend-module-stack-overflow-collator`, `@backstage/plugin-search-backend-module-techdocs`, `@backstage/plugin-search-backend-node`, `@backstage/plugin-signals`, `@backstage/plugin-signals-backend`, `@backstage/plugin-signals-node`, `@backstage/plugin-signals-react`, `@backstage/plugin-techdocs-addons-test-utils`, `@backstage/plugin-techdocs-react`, `@backstage/test-utils`._
