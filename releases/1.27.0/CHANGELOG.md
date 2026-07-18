# Backstage Release 1.27.0 changelog

Changes between 1.26.5 and 1.27.0 — 146 changed and 3 added packages.

## Summary

- [Newly added packages](#newly-added-packages): 3 packages
- [Breaking changes](#breaking-changes): 3 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 3 packages
- [Other minor version bumps](#other-minor-version-bumps): 6 packages
- [Patch version bumps](#patch-version-bumps): 66 packages
- [Excluded dependency updates](#excluded-dependency-updates): 68 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/plugin-catalog-backend-module-gitlab-org` (new, 0.0.1)](#backstageplugin-catalog-backend-module-gitlab-org-new-001)
  - [`@backstage/plugin-notifications-backend-module-email` (new, 0.0.1)](#backstageplugin-notifications-backend-module-email-new-001)
  - [`@backstage/plugin-scaffolder-backend-module-notifications` (new, 0.0.1)](#backstageplugin-scaffolder-backend-module-notifications-new-001)
- [Breaking changes](#breaking-changes)
  - [`@backstage/backend-common` (0.21.7 → 0.22.0)](#backstagebackend-common-0217--0220)
  - [`@backstage/plugin-catalog-node` (1.11.1 → 1.12.0)](#backstageplugin-catalog-node-1111--1120)
  - [`@backstage/repo-tools` (0.8.0 → 0.9.0)](#backstagerepo-tools-080--090)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/frontend-app-api` (0.6.4 → 0.7.0)](#backstagefrontend-app-api-064--070)
  - [`@backstage/plugin-catalog-import` (0.10.10 → 0.11.0)](#backstageplugin-catalog-import-01010--0110)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.3.3 → 0.4.0)](#backstageplugin-scaffolder-backend-module-gitlab-033--040)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/catalog-model` (1.4.5 → 1.5.0)](#backstagecatalog-model-145--150)
  - [`@backstage/integration` (1.10.0 → 1.11.0)](#backstageintegration-1100--1110)
  - [`@backstage/plugin-catalog` (1.19.0 → 1.20.0)](#backstageplugin-catalog-1190--1200)
  - [`@backstage/plugin-catalog-backend` (1.21.1 → 1.22.0)](#backstageplugin-catalog-backend-1211--1220)
  - [`@backstage/plugin-catalog-react` (1.11.3 → 1.12.0)](#backstageplugin-catalog-react-1113--1120)
  - [`@backstage/plugin-scaffolder` (1.19.3 → 1.20.0)](#backstageplugin-scaffolder-1193--1200)
- [Patch version bumps](#patch-version-bumps)
  - [`@backstage/backend-app-api` (0.7.2 → 0.7.3)](#backstagebackend-app-api-072--073)
  - [`@backstage/backend-defaults` (0.2.17 → 0.2.18)](#backstagebackend-defaults-0217--0218)
  - [`@backstage/backend-dynamic-feature-service` (0.2.9 → 0.2.10)](#backstagebackend-dynamic-feature-service-029--0210)
  - [`@backstage/backend-plugin-api` (0.6.17 → 0.6.18)](#backstagebackend-plugin-api-0617--0618)
  - [`@backstage/backend-tasks` (0.5.22 → 0.5.23)](#backstagebackend-tasks-0522--0523)
  - [`@backstage/backend-test-utils` (0.3.7 → 0.3.8)](#backstagebackend-test-utils-037--038)
  - [`@backstage/cli` (0.26.4 → 0.26.5)](#backstagecli-0264--0265)
  - [`@backstage/core-app-api` (1.12.4 → 1.12.5)](#backstagecore-app-api-1124--1125)
  - [`@backstage/core-compat-api` (0.2.4 → 0.2.5)](#backstagecore-compat-api-024--025)
  - [`@backstage/core-components` (0.14.6 → 0.14.7)](#backstagecore-components-0146--0147)
  - [`@backstage/create-app` (0.5.14 → 0.5.15)](#backstagecreate-app-0514--0515)
  - [`@backstage/eslint-plugin` (0.1.7 → 0.1.8)](#backstageeslint-plugin-017--018)
  - [`@backstage/plugin-api-docs` (0.11.4 → 0.11.5)](#backstageplugin-api-docs-0114--0115)
  - [`@backstage/plugin-app-backend` (0.3.65 → 0.3.66)](#backstageplugin-app-backend-0365--0366)
  - [`@backstage/plugin-auth-backend` (0.22.4 → 0.22.5)](#backstageplugin-auth-backend-0224--0225)
  - [`@backstage/plugin-auth-backend-module-aws-alb-provider` (0.1.9 → 0.1.10)](#backstageplugin-auth-backend-module-aws-alb-provider-019--0110)
  - [`@backstage/plugin-auth-backend-module-github-provider` (0.1.14 → 0.1.15)](#backstageplugin-auth-backend-module-github-provider-0114--0115)
  - [`@backstage/plugin-auth-backend-module-guest-provider` (0.1.3 → 0.1.4)](#backstageplugin-auth-backend-module-guest-provider-013--014)
  - [`@backstage/plugin-auth-backend-module-oidc-provider` (0.1.8 → 0.1.9)](#backstageplugin-auth-backend-module-oidc-provider-018--019)
  - [`@backstage/plugin-auth-node` (0.4.12 → 0.4.13)](#backstageplugin-auth-node-0412--0413)
  - [`@backstage/plugin-auth-react` (0.1.1 → 0.1.2)](#backstageplugin-auth-react-011--012)
  - [`@backstage/plugin-bitbucket-cloud-common` (0.2.18 → 0.2.19)](#backstageplugin-bitbucket-cloud-common-0218--0219)
  - [`@backstage/plugin-catalog-backend-module-backstage-openapi` (0.2.0 → 0.2.1)](#backstageplugin-catalog-backend-module-backstage-openapi-020--021)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.31 → 0.1.32)](#backstageplugin-catalog-backend-module-bitbucket-server-0131--0132)
  - [`@backstage/plugin-catalog-backend-module-github` (0.6.0 → 0.6.1)](#backstageplugin-catalog-backend-module-github-060--061)
  - [`@backstage/plugin-catalog-backend-module-github-org` (0.1.12 → 0.1.13)](#backstageplugin-catalog-backend-module-github-org-0112--0113)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.3.15 → 0.3.16)](#backstageplugin-catalog-backend-module-gitlab-0315--0316)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.22 → 0.4.23)](#backstageplugin-catalog-backend-module-incremental-ingestion-0422--0423)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.5.33 → 0.5.34)](#backstageplugin-catalog-backend-module-ldap-0533--0534)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.5.25 → 0.5.26)](#backstageplugin-catalog-backend-module-msgraph-0525--0526)
  - [`@backstage/plugin-catalog-backend-module-unprocessed` (0.4.4 → 0.4.5)](#backstageplugin-catalog-backend-module-unprocessed-044--045)
  - [`@backstage/plugin-catalog-graph` (0.4.4 → 0.4.5)](#backstageplugin-catalog-graph-044--045)
  - [`@backstage/plugin-devtools-backend` (0.3.3 → 0.3.4)](#backstageplugin-devtools-backend-033--034)
  - [`@backstage/plugin-events-node` (0.3.3 → 0.3.4)](#backstageplugin-events-node-033--034)
  - [`@backstage/plugin-home` (0.7.3 → 0.7.4)](#backstageplugin-home-073--074)
  - [`@backstage/plugin-home-react` (0.1.12 → 0.1.13)](#backstageplugin-home-react-0112--0113)
  - [`@backstage/plugin-kubernetes-react` (0.3.4 → 0.3.5)](#backstageplugin-kubernetes-react-034--035)
  - [`@backstage/plugin-notifications` (0.2.0 → 0.2.1)](#backstageplugin-notifications-020--021)
  - [`@backstage/plugin-notifications-backend` (0.2.0 → 0.2.1)](#backstageplugin-notifications-backend-020--021)
  - [`@backstage/plugin-notifications-node` (0.1.3 → 0.1.4)](#backstageplugin-notifications-node-013--014)
  - [`@backstage/plugin-org` (0.6.24 → 0.6.25)](#backstageplugin-org-0624--0625)
  - [`@backstage/plugin-scaffolder-backend` (1.22.5 → 1.22.6)](#backstageplugin-scaffolder-backend-1225--1226)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.1.7 → 0.1.8)](#backstageplugin-scaffolder-backend-module-bitbucket-server-017--018)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.41 → 0.2.42)](#backstageplugin-scaffolder-backend-module-cookiecutter-0241--0242)
  - [`@backstage/plugin-scaffolder-backend-module-gitea` (0.1.7 → 0.1.8)](#backstageplugin-scaffolder-backend-module-gitea-017--018)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.2.7 → 0.2.8)](#backstageplugin-scaffolder-backend-module-github-027--028)
  - [`@backstage/plugin-scaffolder-common` (1.5.1 → 1.5.2)](#backstageplugin-scaffolder-common-151--152)
  - [`@backstage/plugin-scaffolder-node` (0.4.3 → 0.4.4)](#backstageplugin-scaffolder-node-043--044)
  - [`@backstage/plugin-scaffolder-react` (1.8.4 → 1.8.5)](#backstageplugin-scaffolder-react-184--185)
  - [`@backstage/plugin-search` (1.4.10 → 1.4.11)](#backstageplugin-search-1410--1411)
  - [`@backstage/plugin-search-backend` (1.5.7 → 1.5.8)](#backstageplugin-search-backend-157--158)
  - [`@backstage/plugin-search-backend-module-catalog` (0.1.23 → 0.1.24)](#backstageplugin-search-backend-module-catalog-0123--0124)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.4.0 → 1.4.1)](#backstageplugin-search-backend-module-elasticsearch-140--141)
  - [`@backstage/plugin-search-backend-module-explore` (0.1.23 → 0.1.24)](#backstageplugin-search-backend-module-explore-0123--0124)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.26 → 0.5.27)](#backstageplugin-search-backend-module-pg-0526--0527)
  - [`@backstage/plugin-search-backend-module-techdocs` (0.1.22 → 0.1.23)](#backstageplugin-search-backend-module-techdocs-0122--0123)
  - [`@backstage/plugin-search-backend-node` (1.2.21 → 1.2.22)](#backstageplugin-search-backend-node-1221--1222)
  - [`@backstage/plugin-signals-backend` (0.1.3 → 0.1.4)](#backstageplugin-signals-backend-013--014)
  - [`@backstage/plugin-techdocs` (1.10.4 → 1.10.5)](#backstageplugin-techdocs-1104--1105)
  - [`@backstage/plugin-techdocs-addons-test-utils` (1.0.31 → 1.0.32)](#backstageplugin-techdocs-addons-test-utils-1031--1032)
  - [`@backstage/plugin-techdocs-backend` (1.10.4 → 1.10.5)](#backstageplugin-techdocs-backend-1104--1105)
  - [`@backstage/plugin-techdocs-node` (1.12.3 → 1.12.4)](#backstageplugin-techdocs-node-1123--1124)
  - [`@backstage/plugin-user-settings` (0.8.5 → 0.8.6)](#backstageplugin-user-settings-085--086)
  - [`@backstage/plugin-user-settings-backend` (0.2.16 → 0.2.17)](#backstageplugin-user-settings-backend-0216--0217)
  - [`@backstage/theme` (0.5.3 → 0.5.4)](#backstagetheme-053--054)
  - [`@techdocs/cli` (1.8.10 → 1.8.11)](#techdocscli-1810--1811)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/plugin-catalog-backend-module-gitlab-org` (new, [0.0.1](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab-org.md#001))

#### 0.0.1

##### Patch Changes

- [`a70377d`](https://github.com/backstage/backstage/commit/a70377d): Added a new `catalog-backend-module-gitlab-org` module which adds the `GitlabOrgDiscoveryEntityProvider` to the catalog's providers using the new backend system.

### `@backstage/plugin-notifications-backend-module-email` (new, [0.0.1](../../changelogs/@backstage/plugin-notifications-backend-module-email.md#001))

#### 0.0.1

##### Patch Changes

- [`d541ff6`](https://github.com/backstage/backstage/commit/d541ff6): Fixed email processor `esm` issue and config reading
- [`e538b10`](https://github.com/backstage/backstage/commit/e538b10): Support relative links in notifications sent via email
- [`dbf2696`](https://github.com/backstage/backstage/commit/dbf2696): Allow sending notifications by email with the new notifications module

### `@backstage/plugin-scaffolder-backend-module-notifications` (new, [0.0.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-notifications.md#001))

#### 0.0.1

##### Patch Changes

- [`503d769`](https://github.com/backstage/backstage/commit/503d769): Add a new scaffolder action to allow sending notifications from templates

## Breaking changes

### `@backstage/backend-common` (0.21.7 → [0.22.0](../../changelogs/@backstage/backend-common.md#0220))

#### 0.22.0

##### Minor Changes

- [`ed83f85`](https://github.com/backstage/backstage/commit/ed83f85): Internal refactor of the database code.

  **BREAKING**: The helper functions `createDatabaseClient` and `ensureDatabaseExists` have been removed from the public interface, since they have no usage within the repository and never were suitable for calling from the outside. Please consider using `coreServices.database` or `DatabaseManager` directly wherever possible instead.

##### Patch Changes

- [`2cc750d`](https://github.com/backstage/backstage/commit/2cc750d): Added `HarnessURLReader` with `readUrl` support.
- [`57f692e`](https://github.com/backstage/backstage/commit/57f692e): Preparing for a stable new backend system release, we are deprecating utilities in the `backend-common` that are not used by the core framework, such as the isomorphic `Git` class. As we will no longer support the isomorphic `Git` utility in the framework packages, we recommend plugins that start maintaining their own implementation of this class.
- [`0ec0796`](https://github.com/backstage/backstage/commit/0ec0796): Plugins created through the `legacyPlugin` helper are now able to authenticate requests from plugins that are fully implemented using the new backend system. This fixes the `Key for the ES256 algorithm must be one of type KeyObject or CryptoKey. Received an instance of Uint8Array` error.
- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.
- [`ccc8851`](https://github.com/backstage/backstage/commit/ccc8851): Added config prop `ensureSchemaExists` to support postgres instances where user can create schemas but not databases.
- [`f66bbb4`](https://github.com/backstage/backstage/commit/f66bbb4): Only create a single actual connection to memcache/redis, even in cases where many `CacheService` instances are made
- [`ba0b8b4`](https://github.com/backstage/backstage/commit/ba0b8b4): Added option to `ServerTokenManager.fromConfig` that allows it to be instantiated in production without any configured keys.

### `@backstage/plugin-catalog-node` (1.11.1 → [1.12.0](../../changelogs/@backstage/plugin-catalog-node.md#1120))

#### 1.12.0

##### Minor Changes

- [`f2a2a83`](https://github.com/backstage/backstage/commit/f2a2a83): Added `LocationAnalyzer` type, moved from `@backstage/plugin-catalog-backend`.
- [`f2a2a83`](https://github.com/backstage/backstage/commit/f2a2a83): Breaking change to `/alpha` API where the `catalogAnalysisExtensionPoint` has been reworked. The `addLocationAnalyzer` method has been renamed to `addScmLocationAnalyzer`, and a new `setLocationAnalyzer` method has been added which allows the full `LocationAnalyzer` implementation to be overridden.

### `@backstage/repo-tools` (0.8.0 → [0.9.0](../../changelogs/@backstage/repo-tools.md#090))

#### 0.9.0

##### Minor Changes

- [`683870a`](https://github.com/backstage/backstage/commit/683870a): Adds 2 new commands `repo schema openapi diff` and `package schema openapi diff`. `repo schema openapi diff` is intended to power a new breaking changes check on pull requests and the package level command allows plugin developers to quickly see new API breaking changes. They're intended to be used in complement with the existing `repo schema openapi verify` command to validate your OpenAPI spec against a variety of things.

##### Patch Changes

- [`9ae9bb2`](https://github.com/backstage/backstage/commit/9ae9bb2): Update the paths logic in the api reports command to support complex subpaths
- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.

## 0.x minor version bumps

### `@backstage/frontend-app-api` (0.6.4 → [0.7.0](../../changelogs/@backstage/frontend-app-api.md#070))

#### 0.7.0

##### Minor Changes

- [`ddddecb`](https://github.com/backstage/backstage/commit/ddddecb): Extensions in app-config now always affect ordering. Previously, only when enabling disabled extensions did they rise to the top.

### `@backstage/plugin-catalog-import` (0.10.10 → [0.11.0](../../changelogs/@backstage/plugin-catalog-import.md#0110))

#### 0.11.0

##### Minor Changes

- [`e1174b0`](https://github.com/backstage/backstage/commit/e1174b0): `EntityListComponent` uses `entityPresentationApi` instead of `humanizeEntityRef` to display Entity

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.3.3 → [0.4.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#040))

#### 0.4.0

##### Minor Changes

- [`18f736f`](https://github.com/backstage/backstage/commit/18f736f): Add examples for `gitlab:projectVariable:create` scaffolder action & improve related tests

##### Patch Changes

- [`8fa8a00`](https://github.com/backstage/backstage/commit/8fa8a00): Add merge method and squash option for project creation
- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.
- [`ffc73ec`](https://github.com/backstage/backstage/commit/ffc73ec): Add examples for `gitlab:repo:push` scaffolder action & improve related tests

## Other minor version bumps

### `@backstage/catalog-model` (1.4.5 → [1.5.0](../../changelogs/@backstage/catalog-model.md#150))

#### 1.5.0

##### Minor Changes

- [`79025f3`](https://github.com/backstage/backstage/commit/79025f3): Introduce a domain attribute to the domain entity to allow a hierarchy of domains to exist.

### `@backstage/integration` (1.10.0 → [1.11.0](../../changelogs/@backstage/integration.md#1110))

#### 1.11.0

##### Minor Changes

- [`2cc750d`](https://github.com/backstage/backstage/commit/2cc750d): Added `HarnessIntegration` via the `ScmIntegrations` interface.

### `@backstage/plugin-catalog` (1.19.0 → [1.20.0](../../changelogs/@backstage/plugin-catalog.md#1200))

#### 1.20.0

##### Minor Changes

- [`8834daf`](https://github.com/backstage/backstage/commit/8834daf): Updated the presentation API to return a promise, in addition to the snapshot and observable that were there before. This makes it much easier to consume the API in a non-React context.

##### Patch Changes

- [`131e5cb`](https://github.com/backstage/backstage/commit/131e5cb): Fix broken links in README.
- [`5d99272`](https://github.com/backstage/backstage/commit/5d99272): Update local development dependencies.
- [`4118530`](https://github.com/backstage/backstage/commit/4118530): Avoiding pre-loading display total count undefined for table counts

### `@backstage/plugin-catalog-backend` (1.21.1 → [1.22.0](../../changelogs/@backstage/plugin-catalog-backend.md#1220))

#### 1.22.0

##### Minor Changes

- [`f2a2a83`](https://github.com/backstage/backstage/commit/f2a2a83): Deprecated the `LocationAnalyzer` type, which has been moved to `@backstage/plugin-catalog-node`.
- [`f2a2a83`](https://github.com/backstage/backstage/commit/f2a2a83): The `/alpha` plugin export has had its implementation of the `catalogAnalysisExtensionPoint` updated to reflect the new API.
- [`8d14475`](https://github.com/backstage/backstage/commit/8d14475): Emit well known relationships for the Domain entity kind.

##### Patch Changes

- [`131e5cb`](https://github.com/backstage/backstage/commit/131e5cb): Fix broken links in README.
- [`c6cb568`](https://github.com/backstage/backstage/commit/c6cb568): Add lifecycle monitoring for the catalog processing
- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.
- [`8479a0b`](https://github.com/backstage/backstage/commit/8479a0b): Fixed bug in stitching queue gauge that included entities that are scheduled in the future.

### `@backstage/plugin-catalog-react` (1.11.3 → [1.12.0](../../changelogs/@backstage/plugin-catalog-react.md#1120))

#### 1.12.0

##### Minor Changes

- [`8834daf`](https://github.com/backstage/backstage/commit/8834daf): Updated the presentation API to return a promise, in addition to the snapshot and observable that were there before. This makes it much easier to consume the API in a non-React context.

### `@backstage/plugin-scaffolder` (1.19.3 → [1.20.0](../../changelogs/@backstage/plugin-scaffolder.md#1200))

#### 1.20.0

##### Minor Changes

- [`4268696`](https://github.com/backstage/backstage/commit/4268696): `MultiEntityPicker` uses `EntityDisplayName` instead of `humanizeEntityRef` to display entity.

##### Patch Changes

- [`9156654`](https://github.com/backstage/backstage/commit/9156654): Capturing more event clicks for scaffolder
- [`131e5cb`](https://github.com/backstage/backstage/commit/131e5cb): Fix broken links in README.
- [`0040ec2`](https://github.com/backstage/backstage/commit/0040ec2): Updated dependency `@rjsf/utils` to `5.18.2`.
  Updated dependency `@rjsf/core` to `5.18.2`.
  Updated dependency `@rjsf/material-ui` to `5.18.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.18.2`.
- [`762141c`](https://github.com/backstage/backstage/commit/762141c): Fixed a bug where the `MultiEntityPicker` was not able to be set as required

## Patch version bumps

### `@backstage/backend-app-api` (0.7.2 → [0.7.3](../../changelogs/@backstage/backend-app-api.md#073))

#### 0.7.3

##### Patch Changes

- [`4cd5ff0`](https://github.com/backstage/backstage/commit/4cd5ff0): Add ability to configure the Node.js HTTP Server when configuring the root HTTP Router service
- [`e8199b1`](https://github.com/backstage/backstage/commit/e8199b1): Move the JWKS registration outside of the lifecycle middleware
- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.
- [`dc8c5dd`](https://github.com/backstage/backstage/commit/dc8c5dd): The default `TokenManager` implementation no longer requires keys to be configured in production, but it will throw an errors when generating or authenticating tokens. The default `AuthService` implementation will now also provide additional context if such an error is throw when falling back to using the `TokenManager` service to generate tokens for outgoing requests.
- [`025641b`](https://github.com/backstage/backstage/commit/025641b): Redact `meta` fields too with the logger
- [`09f8988`](https://github.com/backstage/backstage/commit/09f8988): Remove explicit `alg` check for user tokens in `verifyToken`
- [`5863e02`](https://github.com/backstage/backstage/commit/5863e02): Internal refactor to only create one external token handler
- [`a1dc547`](https://github.com/backstage/backstage/commit/a1dc547): Added support for camel case CSP directives in app-config. For example:

  ```yaml
  backend:
    csp:
      upgradeInsecureRequests: false
  ```

- [`329cc34`](https://github.com/backstage/backstage/commit/329cc34): Added logging of all plugins being initialized, periodic status, and completion.

### `@backstage/backend-defaults` (0.2.17 → [0.2.18](../../changelogs/@backstage/backend-defaults.md#0218))

#### 0.2.18

##### Patch Changes

- [`7e5a50d`](https://github.com/backstage/backstage/commit/7e5a50d): added `eventsServiceFactory` to `defaultServiceFactories` to resolve issue where different instances of the EventsServices could be used

### `@backstage/backend-dynamic-feature-service` (0.2.9 → [0.2.10](../../changelogs/@backstage/backend-dynamic-feature-service.md#0210))

#### 0.2.10

##### Patch Changes

- [`b192752`](https://github.com/backstage/backstage/commit/b192752): Updated `README.md` to point to `packages/backend` instead of `packages/backend-next`.
- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.
- [`b611fd0`](https://github.com/backstage/backstage/commit/b611fd0): Updates the `scanRoot` method in the `PluginScanner` class to specifically ignore the `lost+found` directory, which is a system-generated directory used for file recovery on Unix-like systems. Skipping this directory avoids unnecessary errors.

### `@backstage/backend-plugin-api` (0.6.17 → [0.6.18](../../changelogs/@backstage/backend-plugin-api.md#0618))

#### 0.6.18

##### Patch Changes

- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.
- [`1fedf0c`](https://github.com/backstage/backstage/commit/1fedf0c): Removed explicit `toString()` method from `ServiceRef` type.

### `@backstage/backend-tasks` (0.5.22 → [0.5.23](../../changelogs/@backstage/backend-tasks.md#0523))

#### 0.5.23

##### Patch Changes

- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.

### `@backstage/backend-test-utils` (0.3.7 → [0.3.8](../../changelogs/@backstage/backend-test-utils.md#038))

#### 0.3.8

##### Patch Changes

- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.
- [`7e5a50d`](https://github.com/backstage/backstage/commit/7e5a50d): added `eventsServiceFactory` to `defaultServiceFactories` to resolve issue where different instances of the EventsServices could be used

### `@backstage/cli` (0.26.4 → [0.26.5](../../changelogs/@backstage/cli.md#0265))

#### 0.26.5

##### Patch Changes

- [`b8f1fc2`](https://github.com/backstage/backstage/commit/b8f1fc2): The `build-workspace` command no longer manually runs `yarn postpack`, relying instead on the fact that running `yarn pack` will automatically invoke the `postpack` script. No action is necessary if you are running the latest version of yarn 1, 3, or 4.
- [`fcd3462`](https://github.com/backstage/backstage/commit/fcd3462): Both the target and types library have been bumped from ES2021 to ES2022 in `@backstage/cli/config/tsconfig.json`.
- [`0cc5ed3`](https://github.com/backstage/backstage/commit/0cc5ed3): Add support for `versions:migrate` to do code changes. Can be skipped with `--no-code-changes`
- [`f97ad04`](https://github.com/backstage/backstage/commit/f97ad04): Add preserveModules to rollup, which allows better async loading and tree-shaking in webpack
- [`2a6f10d`](https://github.com/backstage/backstage/commit/2a6f10d): The `versions:bump` command will no longer exit with a non-zero status if the version bump fails due to forbidden duplicate package installations. It will now also provide more information about how to troubleshoot such an error. The set of forbidden duplicates has also been expanded to include all `@backstage/*-app-api` packages.
- [`c5d7b40`](https://github.com/backstage/backstage/commit/c5d7b40): Allow passing a `--require` argument through to the Node process during `package start`
- [`cc3c518`](https://github.com/backstage/backstage/commit/cc3c518): Fixed an issue causing the `repo fix` command to set an incorrect `workspace` property using Windows
- [`812dff0`](https://github.com/backstage/backstage/commit/812dff0): Add previously-missing semicolon in file templated by `backstage-cli new --select plugin`.
- [`f185603`](https://github.com/backstage/backstage/commit/f185603): Fixed the dynamic import of vite.

### `@backstage/core-app-api` (1.12.4 → [1.12.5](../../changelogs/@backstage/core-app-api.md#1125))

#### 1.12.5

##### Patch Changes

- [`1bed9a3`](https://github.com/backstage/backstage/commit/1bed9a3): The Backstage identity session expiration check will no longer fall back to using the provider expiration. This was introduced to smooth out the rollout of Backstage release 1.18, and is no longer needed.

### `@backstage/core-compat-api` (0.2.4 → [0.2.5](../../changelogs/@backstage/core-compat-api.md#025))

#### 0.2.5

##### Patch Changes

- [`5d99272`](https://github.com/backstage/backstage/commit/5d99272): Update local development dependencies.

### `@backstage/core-components` (0.14.6 → [0.14.7](../../changelogs/@backstage/core-components.md#0147))

#### 0.14.7

##### Patch Changes

- [`e42779e`](https://github.com/backstage/backstage/commit/e42779e): Properly log the `errorInfo` in `ErrorBoundary`
- [`5223c4c`](https://github.com/backstage/backstage/commit/5223c4c): Fixed an internal circular import that broke Jest mocks.
- [`71e4229`](https://github.com/backstage/backstage/commit/71e4229): Added optional `initialShowDropDown` prop to `SidebarSubmenuItem` to internally manage the initial display state of the dropdown items.
- [`a2ee4df`](https://github.com/backstage/backstage/commit/a2ee4df): Add `alignGauge` prop to the `GaugeCard`, and a small size version. When `alignGauge` is `'bottom'` the gauge will vertically align the gauge in the cards, even when the card titles span across multiple lines.
  Add `alignContent` prop to the `InfoCard`, defaulting to `'normal'` with the option of `'bottom'` which vertically aligns the content to the bottom of the card.
- [`5b7b49b`](https://github.com/backstage/backstage/commit/5b7b49b): The `SignInPage` guest provider will now fall back to legacy guest auth if the backend request fails, allowing guest auth without a running backend.
- [`359376a`](https://github.com/backstage/backstage/commit/359376a): Removing react-text-truncate with css styles.

### `@backstage/create-app` (0.5.14 → [0.5.15](../../changelogs/@backstage/create-app.md#0515))

#### 0.5.15

##### Patch Changes

- [`c066c88`](https://github.com/backstage/backstage/commit/c066c88): Removed `packages/backend/src/types.ts` from the template as it is unused. It was mistakenly left in after moving the template to the new backend system.
- [`5d99272`](https://github.com/backstage/backstage/commit/5d99272): Update local development dependencies.
- [`0478509`](https://github.com/backstage/backstage/commit/0478509): Bumped create-app version.
- [`d85dd88`](https://github.com/backstage/backstage/commit/d85dd88): Bumped create-app version.
- [`8105aad`](https://github.com/backstage/backstage/commit/8105aad): Removed the Tech Radar and GitHub Actions plugins from the template, which have been moved to the community plugins repository.

### `@backstage/eslint-plugin` (0.1.7 → [0.1.8](../../changelogs/@backstage/eslint-plugin.md#018))

#### 0.1.8

##### Patch Changes

- [`65ec043`](https://github.com/backstage/backstage/commit/65ec043): add some `pickers` fixes

### `@backstage/plugin-api-docs` (0.11.4 → [0.11.5](../../changelogs/@backstage/plugin-api-docs.md#0115))

#### 0.11.5

##### Patch Changes

- [`5d99272`](https://github.com/backstage/backstage/commit/5d99272): Update local development dependencies.
- [`725ff0b`](https://github.com/backstage/backstage/commit/725ff0b): Fix dark mode text color inside tables in `description:` from OpenAPI definitions

### `@backstage/plugin-app-backend` (0.3.65 → [0.3.66](../../changelogs/@backstage/plugin-app-backend.md#0366))

#### 0.3.66

##### Patch Changes

- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.

### `@backstage/plugin-auth-backend` (0.22.4 → [0.22.5](../../changelogs/@backstage/plugin-auth-backend.md#0225))

#### 0.22.5

##### Patch Changes

- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.
- [`4a0577e`](https://github.com/backstage/backstage/commit/4a0577e): fix: Move config declarations to appropriate auth backend modules
- [`ea9262b`](https://github.com/backstage/backstage/commit/ea9262b): Allow overriding default ownership resolving with the new `AuthOwnershipResolutionExtensionPoint`

### `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#0110))

#### 0.1.10

##### Patch Changes

- [`4a0577e`](https://github.com/backstage/backstage/commit/4a0577e): fix: Move config declarations to appropriate auth backend modules

### `@backstage/plugin-auth-backend-module-github-provider` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#0115))

#### 0.1.15

##### Patch Changes

- [`4a0577e`](https://github.com/backstage/backstage/commit/4a0577e): fix: Move config declarations to appropriate auth backend modules

### `@backstage/plugin-auth-backend-module-guest-provider` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-auth-backend-module-guest-provider.md#014))

#### 0.1.4

##### Patch Changes

- [`07d8cca`](https://github.com/backstage/backstage/commit/07d8cca): Error if used outside of a development environment without explicit allowance

### `@backstage/plugin-auth-backend-module-oidc-provider` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#019))

#### 0.1.9

##### Patch Changes

- [`dd53bf3`](https://github.com/backstage/backstage/commit/dd53bf3): Add nonce to authorize request to be added in ID token

### `@backstage/plugin-auth-node` (0.4.12 → [0.4.13](../../changelogs/@backstage/plugin-auth-node.md#0413))

#### 0.4.13

##### Patch Changes

- [`ea9262b`](https://github.com/backstage/backstage/commit/ea9262b): Allow overriding default ownership resolving with the new `AuthOwnershipResolutionExtensionPoint`

### `@backstage/plugin-auth-react` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-auth-react.md#012))

#### 0.1.2

##### Patch Changes

- [`c297afd`](https://github.com/backstage/backstage/commit/c297afd): When using `CookieAuthRefreshProvider` or `useCookieAuthRefresh`, a 404 response from the cookie endpoint will now be treated as if cookie auth is disabled and is not needed.

### `@backstage/plugin-bitbucket-cloud-common` (0.2.18 → [0.2.19](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#0219))

#### 0.2.19

##### Patch Changes

- [`d76cb29`](https://github.com/backstage/backstage/commit/d76cb29): Updated dependency `ts-morph` to `^22.0.0`.

### `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#021))

#### 0.2.1

##### Patch Changes

- [`f3f0281`](https://github.com/backstage/backstage/commit/f3f0281): Fix incorrect dependency import.

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.31 → [0.1.32](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#0132))

#### 0.1.32

##### Patch Changes

- [`062ffb1`](https://github.com/backstage/backstage/commit/062ffb1): Allow skipping archived repositories (`skipArchivedRepos` flag) on Bitbucket.

### `@backstage/plugin-catalog-backend-module-github` (0.6.0 → [0.6.1](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#061))

#### 0.6.1

##### Patch Changes

- [`0b50143`](https://github.com/backstage/backstage/commit/0b50143): GitHub push events now schedule a refresh on entities that have a `refresh_key` matching the `catalogPath` config itself.
  This allows to support a `catalogPath` configuration that uses glob patterns.
- [`f2a2a83`](https://github.com/backstage/backstage/commit/f2a2a83): Updated to use the new `catalogAnalysisExtensionPoint` API.
- [`5bdeaa7`](https://github.com/backstage/backstage/commit/5bdeaa7): Added `alwaysUseDefaultNamespace` option to `GithubMultiOrgEntityProvider`.

  If set to true, the provider will use `default` as the namespace for all group entities. Groups with the same name across different orgs will be considered the same group.

### `@backstage/plugin-catalog-backend-module-github-org` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#0113))

#### 0.1.13

##### Patch Changes

- [`5bdeaa7`](https://github.com/backstage/backstage/commit/5bdeaa7): Fixed an issue where the `catalog-backend-module-github-org` would not correctly create groups using `default` as namespace in case a single organization was configured.

### `@backstage/plugin-catalog-backend-module-gitlab` (0.3.15 → [0.3.16](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#0316))

#### 0.3.16

##### Patch Changes

- [`a70377d`](https://github.com/backstage/backstage/commit/a70377d): Added events support for `GitlabDiscoveryEntityProvider` and `GitlabOrgDiscoveryEntityProvider`.

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.22 → [0.4.23](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#0423))

#### 0.4.23

##### Patch Changes

- [`8c1ab9e`](https://github.com/backstage/backstage/commit/8c1ab9e): Fix plugin/incremental-ingestion 'Maximum call stack size exceeded' error when ingest large entities.
- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.

### `@backstage/plugin-catalog-backend-module-ldap` (0.5.33 → [0.5.34](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0534))

#### 0.5.34

##### Patch Changes

- [`7699967`](https://github.com/backstage/backstage/commit/7699967): Remove dependency to Winston Logger and use Backstage LoggerService instead

### `@backstage/plugin-catalog-backend-module-msgraph` (0.5.25 → [0.5.26](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#0526))

#### 0.5.26

##### Patch Changes

- [`49eab29`](https://github.com/backstage/backstage/commit/49eab29): Fixed disabling of user photo fetching. Previously, the config value wasn't propagated properly, so user photos was still being fetched despite disabled by config.
- [`6e370e6`](https://github.com/backstage/backstage/commit/6e370e6): Handle fetching huge amounts of users from Azure without crashing

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.4.4 → [0.4.5](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#045))

#### 0.4.5

##### Patch Changes

- [`b192752`](https://github.com/backstage/backstage/commit/b192752): Updated `README.md` to point to `packages/backend` instead of `packages/backend-next`.
- [`6f5a3a3`](https://github.com/backstage/backstage/commit/6f5a3a3): Correctly convert owner to string in case owner has not been provided

### `@backstage/plugin-catalog-graph` (0.4.4 → [0.4.5](../../changelogs/@backstage/plugin-catalog-graph.md#045))

#### 0.4.5

##### Patch Changes

- [`39564b3`](https://github.com/backstage/backstage/commit/39564b3): Allow multiple edges with different type (e.g. `ownedBy` and `applicationOwnerBy`) to have the same source and target node.

### `@backstage/plugin-devtools-backend` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-devtools-backend.md#034))

#### 0.3.4

##### Patch Changes

- [`036feca`](https://github.com/backstage/backstage/commit/036feca): Added discovery property to the readme documentation to ensure that it will build when setting it up as new to a Backstage instance

### `@backstage/plugin-events-node` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-events-node.md#034))

#### 0.3.4

##### Patch Changes

- [`7e5a50d`](https://github.com/backstage/backstage/commit/7e5a50d): added `eventsServiceFactory` to `defaultServiceFactories` to resolve issue where different instances of the EventsServices could be used

### `@backstage/plugin-home` (0.7.3 → [0.7.4](../../changelogs/@backstage/plugin-home.md#074))

#### 0.7.4

##### Patch Changes

- [`2196d3e`](https://github.com/backstage/backstage/commit/2196d3e): Use relative time when displaying visits from the same day
- [`0040ec2`](https://github.com/backstage/backstage/commit/0040ec2): Updated dependency `@rjsf/utils` to `5.18.2`.
  Updated dependency `@rjsf/core` to `5.18.2`.
  Updated dependency `@rjsf/material-ui` to `5.18.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.18.2`.

### `@backstage/plugin-home-react` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-home-react.md#0113))

#### 0.1.13

##### Patch Changes

- [`0040ec2`](https://github.com/backstage/backstage/commit/0040ec2): Updated dependency `@rjsf/utils` to `5.18.2`.
  Updated dependency `@rjsf/core` to `5.18.2`.
  Updated dependency `@rjsf/material-ui` to `5.18.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.18.2`.

### `@backstage/plugin-kubernetes-react` (0.3.4 → [0.3.5](../../changelogs/@backstage/plugin-kubernetes-react.md#035))

#### 0.3.5

##### Patch Changes

- [`3102a99`](https://github.com/backstage/backstage/commit/3102a99): add the namespace label to CronJobDrawer & IngressDrawer.

### `@backstage/plugin-notifications` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-notifications.md#021))

#### 0.2.1

##### Patch Changes

- [`e6bf85f`](https://github.com/backstage/backstage/commit/e6bf85f): Allow overriding `NotificationsPage` page properties
- [`f730c0b`](https://github.com/backstage/backstage/commit/f730c0b): The user can newly mark all unread messages as read at one click.
- [`bfcb2f1`](https://github.com/backstage/backstage/commit/bfcb2f1): Allow showing notifications as snackbars in the UI
- [`e49a810`](https://github.com/backstage/backstage/commit/e49a810): Show all notifications by default to match the sidebar item status
- [`42eaf63`](https://github.com/backstage/backstage/commit/42eaf63): Increase default and allow modifying notification snackbar auto hide duration
- [`a42a19b`](https://github.com/backstage/backstage/commit/a42a19b): Empty descriptions are not rendered to improve the look&feel.
- [`1bc3b86`](https://github.com/backstage/backstage/commit/1bc3b86): Fix to show web notifications even when browser is on foreground. Fix duplicate notifications with multiple tabs.
- [`f793112`](https://github.com/backstage/backstage/commit/f793112): Allow defining `className` and additional properties for `NotificationsSideBarItem`
- [`e1c7d6e`](https://github.com/backstage/backstage/commit/e1c7d6e): Fix infinite loop in the notification title counter
- [`fcda449`](https://github.com/backstage/backstage/commit/fcda449): The rendered size of a notification is limited for very long descriptions.
- [`f6633ca`](https://github.com/backstage/backstage/commit/f6633ca): Add option to set the notification as read automatically when the notification link is opened

### `@backstage/plugin-notifications-backend` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-notifications-backend.md#021))

#### 0.2.1

##### Patch Changes

- [`d541ff6`](https://github.com/backstage/backstage/commit/d541ff6): Fixed email processor `esm` issue and config reading
- [`295c05d`](https://github.com/backstage/backstage/commit/295c05d): Support for filtering entities from notification recipients after resolving them from the recipients
- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.
- [`cba628a`](https://github.com/backstage/backstage/commit/cba628a): Add possibility to generate random notifications on the fly in local development
- [`ee09dfc`](https://github.com/backstage/backstage/commit/ee09dfc): Updated documentation for sending messages by external services.

### `@backstage/plugin-notifications-node` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-notifications-node.md#014))

#### 0.1.4

##### Patch Changes

- [`295c05d`](https://github.com/backstage/backstage/commit/295c05d): Support for filtering entities from notification recipients after resolving them from the recipients

### `@backstage/plugin-org` (0.6.24 → [0.6.25](../../changelogs/@backstage/plugin-org.md#0625))

#### 0.6.25

##### Patch Changes

- [`99e6105`](https://github.com/backstage/backstage/commit/99e6105): Fix ownership card sometimes locking up for complex org structures

### `@backstage/plugin-scaffolder-backend` (1.22.5 → [1.22.6](../../changelogs/@backstage/plugin-scaffolder-backend.md#1226))

#### 1.22.6

##### Patch Changes

- [`131e5cb`](https://github.com/backstage/backstage/commit/131e5cb): Fix broken links in README.
- [`025641b`](https://github.com/backstage/backstage/commit/025641b): Fix issue with the log format not being respected when logging from actions
- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.
- [`e4b50ab`](https://github.com/backstage/backstage/commit/e4b50ab): Scaffolder workspace serialization
- [`025641b`](https://github.com/backstage/backstage/commit/025641b): Redact `meta` fields too with the logger

### `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#018))

#### 0.1.8

##### Patch Changes

- [`24dd655`](https://github.com/backstage/backstage/commit/24dd655): Add examples for `publish:bitbucketServer:pull-request` scaffolder action & improve related tests

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.41 → [0.2.42](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0242))

#### 0.2.42

##### Patch Changes

- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.

### `@backstage/plugin-scaffolder-backend-module-gitea` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#018))

#### 0.1.8

##### Patch Changes

- [`554af73`](https://github.com/backstage/backstage/commit/554af73): Allow defining `repoVisibility` field for the action `publish:gitea`

### `@backstage/plugin-scaffolder-backend-module-github` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#028))

#### 0.2.8

##### Patch Changes

- [`5d99272`](https://github.com/backstage/backstage/commit/5d99272): Update local development dependencies.
- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.
- [`52ab241`](https://github.com/backstage/backstage/commit/52ab241): Adding support to change the default commit author for `publish:github:pull-request`

### `@backstage/plugin-scaffolder-common` (1.5.1 → [1.5.2](../../changelogs/@backstage/plugin-scaffolder-common.md#152))

#### 1.5.2

##### Patch Changes

- [`9156654`](https://github.com/backstage/backstage/commit/9156654): Capturing more event clicks for scaffolder

### `@backstage/plugin-scaffolder-node` (0.4.3 → [0.4.4](../../changelogs/@backstage/plugin-scaffolder-node.md#044))

#### 0.4.4

##### Patch Changes

- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.
- [`e4b50ab`](https://github.com/backstage/backstage/commit/e4b50ab): Scaffolder workspace serialization
- [`f633efa`](https://github.com/backstage/backstage/commit/f633efa): To remove the dependency on the soon-to-be-deprecated `backend-common` package, this package now maintains its own isomorphic Git class implementation.

### `@backstage/plugin-scaffolder-react` (1.8.4 → [1.8.5](../../changelogs/@backstage/plugin-scaffolder-react.md#185))

#### 1.8.5

##### Patch Changes

- [`9156654`](https://github.com/backstage/backstage/commit/9156654): Capturing more event clicks for scaffolder
- [`0040ec2`](https://github.com/backstage/backstage/commit/0040ec2): Updated dependency `@rjsf/utils` to `5.18.2`.
  Updated dependency `@rjsf/core` to `5.18.2`.
  Updated dependency `@rjsf/material-ui` to `5.18.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.18.2`.

### `@backstage/plugin-search` (1.4.10 → [1.4.11](../../changelogs/@backstage/plugin-search.md#1411))

#### 1.4.11

##### Patch Changes

- [`0501243`](https://github.com/backstage/backstage/commit/0501243): Added `aria-label` attribute to DialogTitle element and set `aria-modal` attribute to `true` for improved accessibility in the search modal.

### `@backstage/plugin-search-backend` (1.5.7 → [1.5.8](../../changelogs/@backstage/plugin-search-backend.md#158))

#### 1.5.8

##### Patch Changes

- [`c6cb568`](https://github.com/backstage/backstage/commit/c6cb568): Add lifecycle monitoring for the search index registry

### `@backstage/plugin-search-backend-module-catalog` (0.1.23 → [0.1.24](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#0124))

#### 0.1.24

##### Patch Changes

- [`b192752`](https://github.com/backstage/backstage/commit/b192752): Updated `README.md` to point to `packages/backend` instead of `packages/backend-next`.
- [`d5fff66`](https://github.com/backstage/backstage/commit/d5fff66): Fix wiring of the module exported at the `/alpha` path, which was causing authentication failures.
- [`5dc5f4f`](https://github.com/backstage/backstage/commit/5dc5f4f): Allow the `tokenManager` parameter to be optional when instantiating collator

### `@backstage/plugin-search-backend-module-elasticsearch` (1.4.0 → [1.4.1](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#141))

#### 1.4.1

##### Patch Changes

- [`5252ee1`](https://github.com/backstage/backstage/commit/5252ee1): Fix never resolved indexer promise.

### `@backstage/plugin-search-backend-module-explore` (0.1.23 → [0.1.24](../../changelogs/@backstage/plugin-search-backend-module-explore.md#0124))

#### 0.1.24

##### Patch Changes

- [`ca6e2e0`](https://github.com/backstage/backstage/commit/ca6e2e0): Migrate search collator to use the new auth services.
- [`5d99272`](https://github.com/backstage/backstage/commit/5d99272): Update README.md to point to explore plugin in community-plugins repository.

### `@backstage/plugin-search-backend-module-pg` (0.5.26 → [0.5.27](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0527))

#### 0.5.27

##### Patch Changes

- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.

### `@backstage/plugin-search-backend-module-techdocs` (0.1.22 → [0.1.23](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#0123))

#### 0.1.23

##### Patch Changes

- [`5dc5f4f`](https://github.com/backstage/backstage/commit/5dc5f4f): Allow the `tokenManager` parameter to be optional when instantiating collator

### `@backstage/plugin-search-backend-node` (1.2.21 → [1.2.22](../../changelogs/@backstage/plugin-search-backend-node.md#1222))

#### 1.2.22

##### Patch Changes

- [`c6cb568`](https://github.com/backstage/backstage/commit/c6cb568): Add lifecycle monitoring for the search index registry

### `@backstage/plugin-signals-backend` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-signals-backend.md#014))

#### 0.1.4

##### Patch Changes

- [`845d56a`](https://github.com/backstage/backstage/commit/845d56a): Improved signal lifecycle management and added server side pinging of connections

### `@backstage/plugin-techdocs` (1.10.4 → [1.10.5](../../changelogs/@backstage/plugin-techdocs.md#1105))

#### 1.10.5

##### Patch Changes

- [`d2cc139`](https://github.com/backstage/backstage/commit/d2cc139): Update path in Readme for Plugin Techdocs to show the correct setup information.
- [`5863cf7`](https://github.com/backstage/backstage/commit/5863cf7): The `techdocs.builder` config is now optional and it will default to `local`.

### `@backstage/plugin-techdocs-addons-test-utils` (1.0.31 → [1.0.32](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#1032))

#### 1.0.32

##### Patch Changes

- [`2f13862`](https://github.com/backstage/backstage/commit/2f13862): Fix bug in TechDocsAddonTester when jest.resetAllMocks is called between tests

### `@backstage/plugin-techdocs-backend` (1.10.4 → [1.10.5](../../changelogs/@backstage/plugin-techdocs-backend.md#1105))

#### 1.10.5

##### Patch Changes

- [`5863cf7`](https://github.com/backstage/backstage/commit/5863cf7): The `techdocs.builder` config is now optional and it will default to `local`.

### `@backstage/plugin-techdocs-node` (1.12.3 → [1.12.4](../../changelogs/@backstage/plugin-techdocs-node.md#1124))

#### 1.12.4

##### Patch Changes

- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.

### `@backstage/plugin-user-settings` (0.8.5 → [0.8.6](../../changelogs/@backstage/plugin-user-settings.md#086))

#### 0.8.6

##### Patch Changes

- [`131e5cb`](https://github.com/backstage/backstage/commit/131e5cb): Fix broken links in README.

### `@backstage/plugin-user-settings-backend` (0.2.16 → [0.2.17](../../changelogs/@backstage/plugin-user-settings-backend.md#0217))

#### 0.2.17

##### Patch Changes

- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.

### `@backstage/theme` (0.5.3 → [0.5.4](../../changelogs/@backstage/theme.md#054))

#### 0.5.4

##### Patch Changes

- [`f1462df`](https://github.com/backstage/backstage/commit/f1462df): Fixed bug where scrollbars don't pick up the theme when in dark mode

### `@techdocs/cli` (1.8.10 → [1.8.11](../../changelogs/@techdocs/cli.md#1811))

#### 1.8.11

##### Patch Changes

- [`1a0e009`](https://github.com/backstage/backstage/commit/1a0e009): Fix cookie endpoint mock for `serve`

## Excluded dependency updates

- `@backstage/app-defaults` (1.5.4 → [1.5.5](../../changelogs/@backstage/app-defaults.md#155))
- `@backstage/backend-openapi-utils` (0.1.10 → [0.1.11](../../changelogs/@backstage/backend-openapi-utils.md#0111))
- `@backstage/catalog-client` (1.6.4 → [1.6.5](../../changelogs/@backstage/catalog-client.md#165))
- `@backstage/dev-utils` (1.0.31 → [1.0.32](../../changelogs/@backstage/dev-utils.md#1032))
- `@backstage/frontend-plugin-api` (0.6.4 → [0.6.5](../../changelogs/@backstage/frontend-plugin-api.md#065))
- `@backstage/frontend-test-utils` (0.1.6 → [0.1.7](../../changelogs/@backstage/frontend-test-utils.md#017))
- `@backstage/integration-react` (1.1.26 → [1.1.27](../../changelogs/@backstage/integration-react.md#1127))
- `@backstage/plugin-app-node` (0.1.17 → [0.1.18](../../changelogs/@backstage/plugin-app-node.md#0118))
- `@backstage/plugin-app-visualizer` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-app-visualizer.md#016))
- `@backstage/plugin-auth-backend-module-atlassian-provider` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#0110))
- `@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-auth-backend-module-azure-easyauth-provider.md#011))
- `@backstage/plugin-auth-backend-module-bitbucket-provider` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-provider.md#011))
- `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-auth-backend-module-cloudflare-access-provider.md#011))
- `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.2.12 → [0.2.13](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#0213))
- `@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#0115))
- `@backstage/plugin-auth-backend-module-google-provider` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#0115))
- `@backstage/plugin-auth-backend-module-microsoft-provider` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#0113))
- `@backstage/plugin-auth-backend-module-oauth2-provider` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#0115))
- `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#0111))
- `@backstage/plugin-auth-backend-module-okta-provider` (0.0.10 → [0.0.11](../../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#0011))
- `@backstage/plugin-auth-backend-module-pinniped-provider` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#0112))
- `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#0110))
- `@backstage/plugin-catalog-backend-module-aws` (0.3.12 → [0.3.13](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#0313))
- `@backstage/plugin-catalog-backend-module-azure` (0.1.37 → [0.1.38](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0138))
- `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#025))
- `@backstage/plugin-catalog-backend-module-gcp` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#0119))
- `@backstage/plugin-catalog-backend-module-gerrit` (0.1.34 → [0.1.35](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0135))
- `@backstage/plugin-catalog-backend-module-openapi` (0.1.35 → [0.1.36](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0136))
- `@backstage/plugin-catalog-backend-module-puppetdb` (0.1.23 → [0.1.24](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0124))
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#0116))
- `@backstage/plugin-catalog-common` (1.0.22 → [1.0.23](../../changelogs/@backstage/plugin-catalog-common.md#1023))
- `@backstage/plugin-catalog-unprocessed-entities` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#024))
- `@backstage/plugin-config-schema` (0.1.54 → [0.1.55](../../changelogs/@backstage/plugin-config-schema.md#0155))
- `@backstage/plugin-devtools` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-devtools.md#0114))
- `@backstage/plugin-events-backend` (0.3.4 → [0.3.5](../../changelogs/@backstage/plugin-events-backend.md#035))
- `@backstage/plugin-events-backend-module-aws-sqs` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#034))
- `@backstage/plugin-events-backend-module-azure` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-events-backend-module-azure.md#024))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#024))
- `@backstage/plugin-events-backend-module-gerrit` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#024))
- `@backstage/plugin-events-backend-module-github` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-events-backend-module-github.md#024))
- `@backstage/plugin-events-backend-module-gitlab` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#024))
- `@backstage/plugin-events-backend-test-utils` (0.1.27 → [0.1.28](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0128))
- `@backstage/plugin-kubernetes` (0.11.9 → [0.11.10](../../changelogs/@backstage/plugin-kubernetes.md#01110))
- `@backstage/plugin-kubernetes-backend` (0.17.0 → [0.17.1](../../changelogs/@backstage/plugin-kubernetes-backend.md#0171))
- `@backstage/plugin-kubernetes-cluster` (0.0.10 → [0.0.11](../../changelogs/@backstage/plugin-kubernetes-cluster.md#0011))
- `@backstage/plugin-kubernetes-common` (0.7.5 → [0.7.6](../../changelogs/@backstage/plugin-kubernetes-common.md#076))
- `@backstage/plugin-kubernetes-node` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-kubernetes-node.md#0112))
- `@backstage/plugin-org-react` (0.1.23 → [0.1.24](../../changelogs/@backstage/plugin-org-react.md#0124))
- `@backstage/plugin-permission-backend` (0.5.41 → [0.5.42](../../changelogs/@backstage/plugin-permission-backend.md#0542))
- `@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#0115))
- `@backstage/plugin-permission-node` (0.7.28 → [0.7.29](../../changelogs/@backstage/plugin-permission-node.md#0729))
- `@backstage/plugin-proxy-backend` (0.4.15 → [0.4.16](../../changelogs/@backstage/plugin-proxy-backend.md#0416))
- `@backstage/plugin-scaffolder-backend-module-azure` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#0110))
- `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket.md#028))
- `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#018))
- `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.18 → [0.2.19](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#0219))
- `@backstage/plugin-scaffolder-backend-module-gerrit` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#0110))
- `@backstage/plugin-scaffolder-backend-module-rails` (0.4.34 → [0.4.35](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0435))
- `@backstage/plugin-scaffolder-backend-module-sentry` (0.1.25 → [0.1.26](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#0126))
- `@backstage/plugin-scaffolder-backend-module-yeoman` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#031))
- `@backstage/plugin-scaffolder-node-test-utils` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#014))
- `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#0111))
- `@backstage/plugin-search-react` (1.7.10 → [1.7.11](../../changelogs/@backstage/plugin-search-react.md#1711))
- `@backstage/plugin-signals` (0.0.5 → [0.0.6](../../changelogs/@backstage/plugin-signals.md#006))
- `@backstage/plugin-signals-node` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-signals-node.md#014))
- `@backstage/plugin-techdocs-module-addons-contrib` (1.1.9 → [1.1.10](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1110))
- `@backstage/plugin-techdocs-react` (1.2.3 → [1.2.4](../../changelogs/@backstage/plugin-techdocs-react.md#124))
- `@backstage/test-utils` (1.5.4 → [1.5.5](../../changelogs/@backstage/test-utils.md#155))
