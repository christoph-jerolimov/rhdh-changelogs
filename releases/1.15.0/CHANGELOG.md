# Backstage Release 1.15.0 changelog

Changes between 1.14.2 and 1.15.0 — 199 changed and 5 added packages.

## Summary

- [Newly added packages](#newly-added-packages): 5 packages
- [Breaking changes](#breaking-changes): 5 packages
- [Major version bumps](#major-version-bumps): 1 package
- [0.x minor version bumps](#0x-minor-version-bumps): 5 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 1 package
- [Other minor version bumps](#other-minor-version-bumps): 9 packages
- [Other patch version bumps](#other-patch-version-bumps): 70 packages
- [Excluded dependency updates](#excluded-dependency-updates): 108 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/plugin-catalog-backend-module-unprocessed` (new, 0.1.0)](#backstageplugin-catalog-backend-module-unprocessed-new-010)
  - [`@backstage/plugin-catalog-unprocessed-entities` (new, 0.1.0)](#backstageplugin-catalog-unprocessed-entities-new-010)
  - [`@backstage/plugin-home-react` (new, 0.1.0)](#backstageplugin-home-react-new-010)
  - [`@backstage/plugin-nomad` (new, 0.1.0)](#backstageplugin-nomad-new-010)
  - [`@backstage/plugin-nomad-backend` (new, 0.1.0)](#backstageplugin-nomad-backend-new-010)
- [Breaking changes](#breaking-changes)
  - [`@backstage/integration` (1.4.5 → 1.5.0)](#backstageintegration-145--150)
  - [`@backstage/plugin-catalog-backend-module-github` (0.3.0 → 0.3.1)](#backstageplugin-catalog-backend-module-github-030--031)
  - [`@backstage/plugin-github-actions` (0.5.18 → 0.6.0)](#backstageplugin-github-actions-0518--060)
  - [`@backstage/plugin-linguist-backend` (0.2.2 → 0.3.0)](#backstageplugin-linguist-backend-022--030)
  - [`@backstage/plugin-scaffolder-backend` (1.14.0 → 1.15.0)](#backstageplugin-scaffolder-backend-1140--1150)
- [Major version bumps](#major-version-bumps)
  - [`@backstage/plugin-dynatrace` (5.0.0 → 6.0.0)](#backstageplugin-dynatrace-500--600)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/backend-common` (0.18.5 → 0.19.0)](#backstagebackend-common-0185--0190)
  - [`@backstage/plugin-pagerduty` (0.5.11 → 0.6.0)](#backstageplugin-pagerduty-0511--060)
  - [`@backstage/plugin-sonarqube` (0.6.7 → 0.7.0)](#backstageplugin-sonarqube-067--070)
  - [`@backstage/plugin-sonarqube-backend` (0.1.10 → 0.2.0)](#backstageplugin-sonarqube-backend-0110--020)
  - [`@backstage/theme` (0.3.0 → 0.4.0)](#backstagetheme-030--040)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-explore-backend` (0.0.7 → 0.0.8)](#backstageplugin-explore-backend-007--008)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/app-defaults` (1.3.1 → 1.4.0)](#backstageapp-defaults-131--140)
  - [`@backstage/catalog-model` (1.3.0 → 1.4.0)](#backstagecatalog-model-130--140)
  - [`@backstage/errors` (1.1.5 → 1.2.0)](#backstageerrors-115--120)
  - [`@backstage/plugin-catalog-backend` (1.9.1 → 1.10.0)](#backstageplugin-catalog-backend-191--1100)
  - [`@backstage/plugin-catalog-react` (1.6.0 → 1.7.0)](#backstageplugin-catalog-react-160--170)
  - [`@backstage/plugin-scaffolder` (1.13.1 → 1.14.0)](#backstageplugin-scaffolder-1131--1140)
  - [`@backstage/plugin-scaffolder-react` (1.4.0 → 1.5.0)](#backstageplugin-scaffolder-react-140--150)
  - [`@backstage/test-utils` (1.3.1 → 1.4.0)](#backstagetest-utils-131--140)
  - [`@backstage/types` (1.0.2 → 1.1.0)](#backstagetypes-102--110)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-app-api` (0.4.3 → 0.4.4)](#backstagebackend-app-api-043--044)
  - [`@backstage/backend-plugin-api` (0.5.2 → 0.5.3)](#backstagebackend-plugin-api-052--053)
  - [`@backstage/backend-test-utils` (0.1.37 → 0.1.38)](#backstagebackend-test-utils-0137--0138)
  - [`@backstage/catalog-client` (1.4.1 → 1.4.2)](#backstagecatalog-client-141--142)
  - [`@backstage/cli` (0.22.7 → 0.22.8)](#backstagecli-0227--0228)
  - [`@backstage/config-loader` (1.3.0 → 1.3.1)](#backstageconfig-loader-130--131)
  - [`@backstage/core-app-api` (1.8.0 → 1.8.1)](#backstagecore-app-api-180--181)
  - [`@backstage/core-components` (0.13.1 → 0.13.2)](#backstagecore-components-0131--0132)
  - [`@backstage/core-plugin-api` (1.5.1 → 1.5.2)](#backstagecore-plugin-api-151--152)
  - [`@backstage/create-app` (0.5.1 → 0.5.2)](#backstagecreate-app-051--052)
  - [`@backstage/dev-utils` (1.0.15 → 1.0.16)](#backstagedev-utils-1015--1016)
  - [`@backstage/integration-aws-node` (0.1.3 → 0.1.4)](#backstageintegration-aws-node-013--014)
  - [`@backstage/plugin-adr` (0.6.1 → 0.6.2)](#backstageplugin-adr-061--062)
  - [`@backstage/plugin-adr-backend` (0.3.3 → 0.3.4)](#backstageplugin-adr-backend-033--034)
  - [`@backstage/plugin-adr-common` (0.2.9 → 0.2.10)](#backstageplugin-adr-common-029--0210)
  - [`@backstage/plugin-analytics-module-ga4` (0.1.0 → 0.1.1)](#backstageplugin-analytics-module-ga4-010--011)
  - [`@backstage/plugin-api-docs` (0.9.4 → 0.9.5)](#backstageplugin-api-docs-094--095)
  - [`@backstage/plugin-auth-backend` (0.18.3 → 0.18.4)](#backstageplugin-auth-backend-0183--0184)
  - [`@backstage/plugin-azure-sites-backend` (0.1.7 → 0.1.8)](#backstageplugin-azure-sites-backend-017--018)
  - [`@backstage/plugin-badges-backend` (0.2.0 → 0.2.1)](#backstageplugin-badges-backend-020--021)
  - [`@backstage/plugin-bitrise` (0.1.45 → 0.1.46)](#backstageplugin-bitrise-0145--0146)
  - [`@backstage/plugin-catalog` (1.11.1 → 1.11.2)](#backstageplugin-catalog-1111--1112)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.2.0 → 0.2.1)](#backstageplugin-catalog-backend-module-aws-020--021)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.1.16 → 0.1.17)](#backstageplugin-catalog-backend-module-azure-0116--0117)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.12 → 0.1.13)](#backstageplugin-catalog-backend-module-bitbucket-cloud-0112--0113)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.2.1 → 0.2.2)](#backstageplugin-catalog-backend-module-gitlab-021--022)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.3.2 → 0.3.3)](#backstageplugin-catalog-backend-module-incremental-ingestion-032--033)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.5.4 → 0.5.5)](#backstageplugin-catalog-backend-module-msgraph-054--055)
  - [`@backstage/plugin-catalog-import` (0.9.8 → 0.9.9)](#backstageplugin-catalog-import-098--099)
  - [`@backstage/plugin-cicd-statistics-module-gitlab` (0.1.14 → 0.1.15)](#backstageplugin-cicd-statistics-module-gitlab-0114--0115)
  - [`@backstage/plugin-code-coverage-backend` (0.2.11 → 0.2.12)](#backstageplugin-code-coverage-backend-0211--0212)
  - [`@backstage/plugin-devtools` (0.1.0 → 0.1.1)](#backstageplugin-devtools-010--011)
  - [`@backstage/plugin-devtools-backend` (0.1.0 → 0.1.1)](#backstageplugin-devtools-backend-010--011)
  - [`@backstage/plugin-devtools-common` (0.1.0 → 0.1.1)](#backstageplugin-devtools-common-010--011)
  - [`@backstage/plugin-entity-feedback` (0.2.1 → 0.2.2)](#backstageplugin-entity-feedback-021--022)
  - [`@backstage/plugin-entity-validation` (0.1.3 → 0.1.4)](#backstageplugin-entity-validation-013--014)
  - [`@backstage/plugin-events-backend-module-aws-sqs` (0.2.0 → 0.2.1)](#backstageplugin-events-backend-module-aws-sqs-020--021)
  - [`@backstage/plugin-events-backend-module-azure` (0.1.7 → 0.1.8)](#backstageplugin-events-backend-module-azure-017--018)
  - [`@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.7 → 0.1.8)](#backstageplugin-events-backend-module-bitbucket-cloud-017--018)
  - [`@backstage/plugin-events-backend-module-gerrit` (0.1.7 → 0.1.8)](#backstageplugin-events-backend-module-gerrit-017--018)
  - [`@backstage/plugin-events-backend-module-github` (0.1.7 → 0.1.8)](#backstageplugin-events-backend-module-github-017--018)
  - [`@backstage/plugin-events-backend-module-gitlab` (0.1.7 → 0.1.8)](#backstageplugin-events-backend-module-gitlab-017--018)
  - [`@backstage/plugin-explore` (0.4.4 → 0.4.5)](#backstageplugin-explore-044--045)
  - [`@backstage/plugin-home` (0.5.2 → 0.5.3)](#backstageplugin-home-052--053)
  - [`@backstage/plugin-jenkins` (0.8.0 → 0.8.1)](#backstageplugin-jenkins-080--081)
  - [`@backstage/plugin-jenkins-backend` (0.2.0 → 0.2.1)](#backstageplugin-jenkins-backend-020--021)
  - [`@backstage/plugin-jenkins-common` (0.1.15 → 0.1.16)](#backstageplugin-jenkins-common-0115--0116)
  - [`@backstage/plugin-kubernetes` (0.9.1 → 0.9.2)](#backstageplugin-kubernetes-091--092)
  - [`@backstage/plugin-kubernetes-backend` (0.11.0 → 0.11.1)](#backstageplugin-kubernetes-backend-0110--0111)
  - [`@backstage/plugin-octopus-deploy` (0.2.0 → 0.2.1)](#backstageplugin-octopus-deploy-020--021)
  - [`@backstage/plugin-org` (0.6.8 → 0.6.9)](#backstageplugin-org-068--069)
  - [`@backstage/plugin-playlist` (0.1.10 → 0.1.11)](#backstageplugin-playlist-0110--0111)
  - [`@backstage/plugin-proxy-backend` (0.2.39 → 0.2.40)](#backstageplugin-proxy-backend-0239--0240)
  - [`@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.1.2 → 0.1.3)](#backstageplugin-scaffolder-backend-module-confluence-to-markdown-012--013)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.2.0 → 0.2.1)](#backstageplugin-scaffolder-backend-module-gitlab-020--021)
  - [`@backstage/plugin-search` (1.3.1 → 1.3.2)](#backstageplugin-search-131--132)
  - [`@backstage/plugin-search-backend` (1.3.1 → 1.3.2)](#backstageplugin-search-backend-131--132)
  - [`@backstage/plugin-search-backend-module-explore` (0.1.1 → 0.1.2)](#backstageplugin-search-backend-module-explore-011--012)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.6 → 0.5.7)](#backstageplugin-search-backend-module-pg-056--057)
  - [`@backstage/plugin-search-react` (1.6.1 → 1.6.2)](#backstageplugin-search-react-161--162)
  - [`@backstage/plugin-shortcuts` (0.3.10 → 0.3.11)](#backstageplugin-shortcuts-0310--0311)
  - [`@backstage/plugin-stack-overflow` (0.1.16 → 0.1.17)](#backstageplugin-stack-overflow-0116--0117)
  - [`@backstage/plugin-tech-insights` (0.3.10 → 0.3.11)](#backstageplugin-tech-insights-0310--0311)
  - [`@backstage/plugin-techdocs` (1.6.3 → 1.6.4)](#backstageplugin-techdocs-163--164)
  - [`@backstage/plugin-techdocs-addons-test-utils` (1.0.14 → 1.0.15)](#backstageplugin-techdocs-addons-test-utils-1014--1015)
  - [`@backstage/plugin-techdocs-node` (1.7.1 → 1.7.2)](#backstageplugin-techdocs-node-171--172)
  - [`@backstage/plugin-techdocs-react` (1.1.6 → 1.1.7)](#backstageplugin-techdocs-react-116--117)
  - [`@backstage/plugin-user-settings` (0.7.3 → 0.7.4)](#backstageplugin-user-settings-073--074)
  - [`@backstage/repo-tools` (0.3.0 → 0.3.1)](#backstagerepo-tools-030--031)
  - [`@techdocs/cli` (1.4.2 → 1.4.3)](#techdocscli-142--143)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/plugin-catalog-backend-module-unprocessed` (new, [0.1.0](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#010))

#### 0.1.0

##### Minor Changes

- [`d44fcd9829c2`](https://github.com/backstage/backstage/commit/d44fcd9829c2): Added a new plugin to expose entities which are unprocessed or have errors processing

### `@backstage/plugin-catalog-unprocessed-entities` (new, [0.1.0](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#010))

#### 0.1.0

##### Minor Changes

- [`d44fcd9829c2`](https://github.com/backstage/backstage/commit/d44fcd9829c2): Added a new plugin to expose entities which are unprocessed or have errors processing

##### Patch Changes

- [`493eab8c577f`](https://github.com/backstage/backstage/commit/493eab8c577f): Use FetchApi instead of native fetch

### `@backstage/plugin-home-react` (new, [0.1.0](../../changelogs/@backstage/plugin-home-react.md#010))

#### 0.1.0

##### Minor Changes

- [`41e8037a8a6d`](https://github.com/backstage/backstage/commit/41e8037a8a6d): Extract new plugin-home-react package and deprecate createCardExtension in plugin-home

##### Patch Changes

- [`2ff94da135a4`](https://github.com/backstage/backstage/commit/2ff94da135a4): bump `rjsf` dependencies to 5.7.3

### `@backstage/plugin-nomad` (new, [0.1.0](../../changelogs/@backstage/plugin-nomad.md#010))

#### 0.1.0

##### Minor Changes

- [`05bf04ca6863`](https://github.com/backstage/backstage/commit/05bf04ca6863): Initialize Nomad plugin with frontend and backend. List jobs/allocations

### `@backstage/plugin-nomad-backend` (new, [0.1.0](../../changelogs/@backstage/plugin-nomad-backend.md#010))

#### 0.1.0

##### Minor Changes

- [`05bf04ca6863`](https://github.com/backstage/backstage/commit/05bf04ca6863): Initialize Nomad plugin with frontend and backend. List jobs/allocations

## Breaking changes

### `@backstage/integration` (1.4.5 → [1.5.0](../../changelogs/@backstage/integration.md#150))

#### 1.5.0

##### Minor Changes

- [`a316d226c780`](https://github.com/backstage/backstage/commit/a316d226c780): Add credential provider for GitLab.
- [`c7f848bcea3c`](https://github.com/backstage/backstage/commit/c7f848bcea3c): Support authentication with a service principal or managed identity for Azure DevOps

  Azure DevOps recently released support, in public preview, for authenticating with a service principal or managed identity instead of a personal access token (PAT): https://devblogs.microsoft.com/devops/introducing-service-principal-and-managed-identity-support-on-azure-devops/. With this change the Azure integration now supports service principals and managed identities for Azure AD backed Azure DevOps organizations. Service principal and managed identity authentication is not supported on Azure DevOps Server (on-premises) organizations.

##### Patch Changes

- [`3c83550fdb62`](https://github.com/backstage/backstage/commit/3c83550fdb62): Renamed ClientSecret to AzureClientSecretCredential and ManagedIdentity to AzureManagedIdentityCredential
- [`df8411779da1`](https://github.com/backstage/backstage/commit/df8411779da1): Add support for Repository Variables and Secrets to the `publish:github` and `github:repo:create` scaffolder actions. You will need to add `read/write` permissions to your GITHUB_TOKEN and/or Github Backstage App for Repository `Secrets` and `Variables`

  Upgrade octokit introduces some breaking changes.

### `@backstage/plugin-catalog-backend-module-github` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#031))

#### 0.3.1

##### Patch Changes

- [`b9a6d1348d96`](https://github.com/backstage/backstage/commit/b9a6d1348d96): Properly handle `async` event callback
- [`df8411779da1`](https://github.com/backstage/backstage/commit/df8411779da1): Add support for Repository Variables and Secrets to the `publish:github` and `github:repo:create` scaffolder actions. You will need to add `read/write` permissions to your GITHUB_TOKEN and/or Github Backstage App for Repository `Secrets` and `Variables`

  Upgrade octokit introduces some breaking changes.

### `@backstage/plugin-github-actions` (0.5.18 → [0.6.0](../../changelogs/@backstage/plugin-github-actions.md#060))

#### 0.6.0

##### Minor Changes

- [`96e1004e2a02`](https://github.com/backstage/backstage/commit/96e1004e2a02): Added support GitHub Enterprise hosted repositories.

  **BREAKING**: The `GithubActionsClient` is updated to take an `scmAuthApi` instead of the previous `githubAuthApi`. This does not require any code changes unless you construct your own `GithubActionsClient`

### `@backstage/plugin-linguist-backend` (0.2.2 → [0.3.0](../../changelogs/@backstage/plugin-linguist-backend.md#030))

#### 0.3.0

##### Minor Changes

- [`bbf91840a52a`](https://github.com/backstage/backstage/commit/bbf91840a52a): **BREAKING**: Removed public constructor from `LinguistBackendApi`. Removed export of `LinguistBackendDatabase` and `LinguistBackendStore`

  Several improvements to the Linguist backend have been made:

  - Added tests for the `LinguistBackendDatabase` and `LinguistBackendApi`
  - Added support for using SQLite as a database, helpful for local development
  - Removed the default from the `processes_date` column
  - Converted the `LinguistBackendApi` into an Interface
  - Added the `LinguistBackendClient` which implements the `LinguistBackendApi` Interface
  - Unprocessed entities will get processed before stale entities
  - Entities in the Linguist database but not in the Catalog anymore will be deleted
  - Improved the README's headings

##### Patch Changes

- [`e39c3829bbd4`](https://github.com/backstage/backstage/commit/e39c3829bbd4): Fix: CatalogClient call without token
- [`3d11596a72b5`](https://github.com/backstage/backstage/commit/3d11596a72b5): Update plugin installation docs to be more consistent across documentations

### `@backstage/plugin-scaffolder-backend` (1.14.0 → [1.15.0](../../changelogs/@backstage/plugin-scaffolder-backend.md#1150))

#### 1.15.0

##### Minor Changes

- [`84b0e47373db`](https://github.com/backstage/backstage/commit/84b0e47373db): Add `TargetBranchName` variable and output for the `publish:gitlab:merge-request` and `publish:github:pull-request` s'cascaffolder actions.
- [`6a694ce98e32`](https://github.com/backstage/backstage/commit/6a694ce98e32): Add a scaffolder action that pull-requests for bitbucket server
- [`1948845861b0`](https://github.com/backstage/backstage/commit/1948845861b0): Added `github:deployKey:create` and `github:environment:create` scaffolder actions. You will need to add `read/write` permissions to your GITHUB_TOKEN and/or Github Backstage App for Repository `Administration` (for deploy key functionality) and `Environments` (for Environment functionality)
- [`df8411779da1`](https://github.com/backstage/backstage/commit/df8411779da1): Add support for Repository Variables and Secrets to the `publish:github` and `github:repo:create` scaffolder actions. You will need to add `read/write` permissions to your GITHUB_TOKEN and/or Github Backstage App for Repository `Secrets` and `Variables`

  Upgrade octokit introduces some breaking changes.

##### Patch Changes

- [`cc936b529676`](https://github.com/backstage/backstage/commit/cc936b529676): Fix handling of `optional` property in `catalog:register` scaffolder action
- [`b269da39ac2d`](https://github.com/backstage/backstage/commit/b269da39ac2d): Clearer error messages for action `publish:gitlab:merge-request`
- [`11e0f625583f`](https://github.com/backstage/backstage/commit/11e0f625583f): Fix wrong gitlabUrl format in repoUrl input description
- [`a2c70cdda202`](https://github.com/backstage/backstage/commit/a2c70cdda202): Switch out the sandbox, from `vm2` to `isolated-vm`.

  This is a native dependency, which means that it will need to be compiled with the same version of node on the same OS. This could cause some issues when running in Docker for instance, as you will need to make sure that the dependency is installed and compiled inside the docker container that it will run on.

  This could mean adding in some dependencies to the container like `build-essential` to make sure that this compiles correctly.

  If you're having issues installing this dependency, there's some [install instructions](https://github.com/laverdet/isolated-vm#requirements) over on `isolated-vm`'s repo.

## Major version bumps

### `@backstage/plugin-dynatrace` (5.0.0 → [6.0.0](../../changelogs/@backstage/plugin-dynatrace.md#600))

#### 6.0.0

##### Patch Changes

- [`892debb87041`](https://github.com/backstage/backstage/commit/892debb87041): Updated the dynatrace plugin documentation with new minimum API token permission requirements.
- [`3d11596a72b5`](https://github.com/backstage/backstage/commit/3d11596a72b5): Update plugin installation docs to be more consistent across documentations

## 0.x minor version bumps

### `@backstage/backend-common` (0.18.5 → [0.19.0](../../changelogs/@backstage/backend-common.md#0190))

#### 0.19.0

##### Minor Changes

- [`c7f848bcea3c`](https://github.com/backstage/backstage/commit/c7f848bcea3c): Support authentication with a service principal or managed identity for Azure DevOps

  Azure DevOps recently released support, in public preview, for authenticating with a service principal or managed identity instead of a personal access token (PAT): https://devblogs.microsoft.com/devops/introducing-service-principal-and-managed-identity-support-on-azure-devops/. With this change the Azure integration now supports service principals and managed identities for Azure AD backed Azure DevOps organizations. Service principal and managed identity authentication is not supported on Azure DevOps Server (on-premises) organizations.

##### Patch Changes

- [`4ef91ab46732`](https://github.com/backstage/backstage/commit/4ef91ab46732): Updated the backend database connection configuration schema to set the password visibility to secret
- [`52d599817680`](https://github.com/backstage/backstage/commit/52d599817680): Changed the default backend CacheClient to an in-memory cache when not explicitly configured.

  Explicit configuration of an **in-memory cache** can be removed from `app-config.yaml`, as this is now the default:

  ```diff
  backend:
  -  cache:
  -    store: memory
  ```

- [`5f2c38c70f5b`](https://github.com/backstage/backstage/commit/5f2c38c70f5b): Fix SNYK-JS-FASTXMLPARSER-5668858 (`fast-xml-parser`) by upgrading aws-sdk to at least the current latest version.
- [`eeb3f801fddf`](https://github.com/backstage/backstage/commit/eeb3f801fddf): `HostDiscovery` now strips trailing slashes in the `backend.baseUrl` config.
- [`9f47a743632c`](https://github.com/backstage/backstage/commit/9f47a743632c): Fixed typo in HostDiscovery's JSDoc
- [`810c6de51604`](https://github.com/backstage/backstage/commit/810c6de51604): Remove unused dev dependency `aws-sdk-mock`.

### `@backstage/plugin-pagerduty` (0.5.11 → [0.6.0](../../changelogs/@backstage/plugin-pagerduty.md#060))

#### 0.6.0

##### Minor Changes

- [`64bc274a1ee6`](https://github.com/backstage/backstage/commit/64bc274a1ee6): Adds a config schema definition so the plugin will validate with the new Backstage CLI "--strict" flag

##### Patch Changes

- [`9512f13eb3af`](https://github.com/backstage/backstage/commit/9512f13eb3af): Add a homepage widget for the `Pagerduty` component.
- [`3d11596a72b5`](https://github.com/backstage/backstage/commit/3d11596a72b5): Update plugin installation docs to be more consistent across documentations

### `@backstage/plugin-sonarqube` (0.6.7 → [0.7.0](../../changelogs/@backstage/plugin-sonarqube.md#070))

#### 0.7.0

##### Minor Changes

- [`ce9bc94c15e1`](https://github.com/backstage/backstage/commit/ce9bc94c15e1): fix sonarqube case in config schema definition

##### Patch Changes

- [`1108f1c65d31`](https://github.com/backstage/backstage/commit/1108f1c65d31): fixed issued related #18259 now using luxon as adr102 asked

### `@backstage/plugin-sonarqube-backend` (0.1.10 → [0.2.0](../../changelogs/@backstage/plugin-sonarqube-backend.md#020))

#### 0.2.0

##### Minor Changes

- [`ce9bc94c15e1`](https://github.com/backstage/backstage/commit/ce9bc94c15e1): fix sonarqube case in config schema definition

##### Patch Changes

- [`0bb0b19b0da2`](https://github.com/backstage/backstage/commit/0bb0b19b0da2): Provide full schema definition for sonarqube plugin, especially to protect api keys.

### `@backstage/theme` (0.3.0 → [0.4.0](../../changelogs/@backstage/theme.md#040))

#### 0.4.0

##### Minor Changes

- [`1fd38bc4141a`](https://github.com/backstage/backstage/commit/1fd38bc4141a): **Material UI v5 Support:** Adding platform-wide support for Material UI v5 allowing a transition phase for migrating central plugins & components over. We still support v4 instances & plugins by adding a

  To allow the future support of plugins & components using Material UI v5 you want to upgrade your `AppTheme`'s to using the `UnifiedThemeProvider`

  ```diff
       Provider: ({ children }) => (
  -    <ThemeProvider theme={lightTheme}>
  -      <CssBaseline>{children}</CssBaseline>
  -    </ThemeProvider>
  +    <UnifiedThemeProvider theme={builtinThemes.light} children={children} />
       ),
  ```

##### Patch Changes

- [`5065a5e8ebd6`](https://github.com/backstage/backstage/commit/5065a5e8ebd6): Tweaked `UnifiedThemeProvider` to avoid overlapping JSS class names in production.

## 0.0.x patch version bumps

### `@backstage/plugin-explore-backend` (0.0.7 → [0.0.8](../../changelogs/@backstage/plugin-explore-backend.md#008))

#### 0.0.8

##### Patch Changes

- [`31616c1fc4e4`](https://github.com/backstage/backstage/commit/31616c1fc4e4): Allow to provide explore tools through config instead of data in code.

  ```yaml title="app-config.yaml"
  explore:
    tools:
      - title: New Relic
        description: Observability platform built to help engineers create and monitor their software
        url: /newrelic
        image: https://i.imgur.com/L37ikrX.jpg
        tags:
          - newrelic
          - performance
          - monitoring
          - errors
          - alerting
      - title: CircleCI
        description: Provides builds overview, detailed build info and retriggering functionality for CircleCI.
        url: /circleci
        image: https://miro.medium.com/max/1200/1*hkTBp22vLAqlIHkrkZHPnw.png
        tags:
          - circleci
          - ci
          - dev
      # [...]
  ```

  ```diff title="packages/backend/src/plugins/explore.ts"
  - import { ExploreTool } from '@backstage/plugin-explore-common';
  - const exploreTools: ExploreTool[] = [
  -   {
  -     title: 'New Relic',
  -     description: 'Observability platform built to help engineers create and monitor their software',
  -     url: '/newrelic',
  -     image: 'https://i.imgur.com/L37ikrX.jpg',
  -     tags: ['newrelic', 'performance', 'monitoring', 'errors', 'alerting'],
  -   },
  -   {
  -     title: 'CircleCI',
  -     description: 'Provides builds overview, detailed build info and retriggering functionality for CircleCI.',
  -     url: '/circleci',
  -     image: 'https://miro.medium.com/max/1200/1*hkTBp22vLAqlIHkrkZHPnw.png',
  -     tags: ['circleci', 'ci', 'dev'],
  -   },
  - ];
  -
  - StaticExploreToolProvider.fromData(tools)
  + StaticExploreToolProvider.fromConfig(env.config)
  ```

## Other minor version bumps

### `@backstage/app-defaults` (1.3.1 → [1.4.0](../../changelogs/@backstage/app-defaults.md#140))

#### 1.4.0

##### Minor Changes

- [`1fd38bc4141a`](https://github.com/backstage/backstage/commit/1fd38bc4141a): **Material UI v5 Support:** Adding platform-wide support for Material UI v5 allowing a transition phase for migrating central plugins & components over. We still support v4 instances & plugins by adding a

  To allow the future support of plugins & components using Material UI v5 you want to upgrade your `AppTheme`'s to using the `UnifiedThemeProvider`

  ```diff
       Provider: ({ children }) => (
  -    <ThemeProvider theme={lightTheme}>
  -      <CssBaseline>{children}</CssBaseline>
  -    </ThemeProvider>
  +    <UnifiedThemeProvider theme={builtinThemes.light} children={children} />
       ),
  ```

### `@backstage/catalog-model` (1.3.0 → [1.4.0](../../changelogs/@backstage/catalog-model.md#140))

#### 1.4.0

##### Minor Changes

- [`33eae4b39a95`](https://github.com/backstage/backstage/commit/33eae4b39a95): Deprecate target field and make targetRef required in common.schema.json

##### Patch Changes

- [`af748a148d52`](https://github.com/backstage/backstage/commit/af748a148d52): Add OpenAPI Specification (OAS) v3.1.0 examples.
- [`1df5fc954798`](https://github.com/backstage/backstage/commit/1df5fc954798): Remove requirement for 'target' property of EntityRelation

### `@backstage/errors` (1.1.5 → [1.2.0](../../changelogs/@backstage/errors.md#120))

#### 1.2.0

##### Minor Changes

- [`c4e8fefd9f13`](https://github.com/backstage/backstage/commit/c4e8fefd9f13): Added `ServiceUnavailableError`

### `@backstage/plugin-catalog-backend` (1.9.1 → [1.10.0](../../changelogs/@backstage/plugin-catalog-backend.md#1100))

#### 1.10.0

##### Minor Changes

- [`44c7ad6b8e11`](https://github.com/backstage/backstage/commit/44c7ad6b8e11): Adds an optional `EventBroker` that is used for sending an event when there are conflicts, with details of the conflict so that it can be handled elsewhere.

##### Patch Changes

- [`77e04a2d55be`](https://github.com/backstage/backstage/commit/77e04a2d55be): Replace getBearerToken with library function of same
- [`ee411e7c2623`](https://github.com/backstage/backstage/commit/ee411e7c2623): Update OpenAPI specs to be in line with linting standards.
- [`b8374d5d93b6`](https://github.com/backstage/backstage/commit/b8374d5d93b6): Add a base plate for performance testing of the catalog

### `@backstage/plugin-catalog-react` (1.6.0 → [1.7.0](../../changelogs/@backstage/plugin-catalog-react.md#170))

#### 1.7.0

##### Minor Changes

- [`cb4c15989b6b`](https://github.com/backstage/backstage/commit/cb4c15989b6b): The `EntityOwnerPicker` component has undergone improvements to enhance its performance.
  The previous implementation inferred users and groups displayed by the `EntityOwnerPicker` component based on the entities available in the `EntityListContext`. The updated version no longer relies on the `EntityListContext` for inference, allowing for better decoupling and improved performance.

  The component now loads entities asynchronously, resulting in improved performance and responsiveness. A new `mode` prop has been introduced which provides two different behaviours:

  - `<EntityOwnerPicker mode="owners-only" />`: loads the owners data asynchronously using the facets endpoint. The data is kept in memory and rendered asynchronously as the user scrolls. This is the default mode and is supposed to be retro-compatible with the previous implementation.

  - `<EntityOwnerPicker mode="all" />` loads all users and groups present in the catalog asynchronously. The data is loaded in batches as the user scrolls. This is more efficient than `owners-only`, but has the drawback of displaying users and groups who aren't owner of any entity.

##### Patch Changes

- [`d68692aee97e`](https://github.com/backstage/backstage/commit/d68692aee97e): Make `useRelatedEntities` use `getEntitiesByRefs` under the hood
- [`429319d080cd`](https://github.com/backstage/backstage/commit/429319d080cd): `EntityAutocompletePicker` add `initialSelectedOptions` prop
- [`429319d080cd`](https://github.com/backstage/backstage/commit/429319d080cd): `EntityLifecycleFilter` loads data using the facets endpoint

### `@backstage/plugin-scaffolder` (1.13.1 → [1.14.0](../../changelogs/@backstage/plugin-scaffolder.md#1140))

#### 1.14.0

##### Minor Changes

- [`464125e9b1ba`](https://github.com/backstage/backstage/commit/464125e9b1ba): Added `MyGroupsPicker` field extension that will display a dropdown of groups a user is part of.

##### Patch Changes

- [`cda753a797b5`](https://github.com/backstage/backstage/commit/cda753a797b5): Forward `Authorization` header for `EventSource` when credentials are available.
- [`2ff94da135a4`](https://github.com/backstage/backstage/commit/2ff94da135a4): bump `rjsf` dependencies to 5.7.3
- [`74b216ee4e50`](https://github.com/backstage/backstage/commit/74b216ee4e50): Add `PropsWithChildren` to usages of `ComponentType`, in preparation for React 18 where the children are no longer implicit.

### `@backstage/plugin-scaffolder-react` (1.4.0 → [1.5.0](../../changelogs/@backstage/plugin-scaffolder-react.md#150))

#### 1.5.0

##### Minor Changes

- [`6b571405f806`](https://github.com/backstage/backstage/commit/6b571405f806): `scaffolder/next`: Provide some default template components to `rjsf` to allow for standardization and markdown descriptions
- [`4505dc3b4598`](https://github.com/backstage/backstage/commit/4505dc3b4598): `scaffolder/next`: Don't render `TemplateGroups` when there's no results in with search query
- [`a452bda74d7a`](https://github.com/backstage/backstage/commit/a452bda74d7a): Fixed typescript casting bug for useTemplateParameterSchema hook
- [`6b571405f806`](https://github.com/backstage/backstage/commit/6b571405f806): `scaffolder/next`: provide a `ScaffolderField` component which is meant to replace some of the `FormControl` components from Material UI, making it easier to write `FieldExtensions`.

##### Patch Changes

- [`84a5c7724c7e`](https://github.com/backstage/backstage/commit/84a5c7724c7e): fixed refresh problem when backstage backend disconnects without any feedback to user. Now we send a generic message and try to reconnect after 15 seconds
- [`cf34311cdbe1`](https://github.com/backstage/backstage/commit/cf34311cdbe1): Extract `ui:*` fields from conditional `then` and `else` schema branches.
- [`2ff94da135a4`](https://github.com/backstage/backstage/commit/2ff94da135a4): bump `rjsf` dependencies to 5.7.3
- [`74b216ee4e50`](https://github.com/backstage/backstage/commit/74b216ee4e50): Add `PropsWithChildren` to usages of `ComponentType`, in preparation for React 18 where the children are no longer implicit.

### `@backstage/test-utils` (1.3.1 → [1.4.0](../../changelogs/@backstage/test-utils.md#140))

#### 1.4.0

##### Minor Changes

- [`1fd38bc4141a`](https://github.com/backstage/backstage/commit/1fd38bc4141a): Test App Wrapper is now using `UnifiedThemeProvider` for supporting Material UI v5 next to Material UI v4 in tests.

##### Patch Changes

- [`55853a367174`](https://github.com/backstage/backstage/commit/55853a367174): Add a `fetchApiRef` implementation by default

### `@backstage/types` (1.0.2 → [1.1.0](../../changelogs/@backstage/types.md#110))

#### 1.1.0

##### Minor Changes

- [`a5c5491ff50c`](https://github.com/backstage/backstage/commit/a5c5491ff50c): Added a `durationToMilliseconds` function to help with the conversion to a single duration number

## Other patch version bumps

### `@backstage/backend-app-api` (0.4.3 → [0.4.4](../../changelogs/@backstage/backend-app-api.md#044))

#### 0.4.4

##### Patch Changes

- [`3bb4158a8aa4`](https://github.com/backstage/backstage/commit/3bb4158a8aa4): Switched startup strategy to initialize all plugins in parallel, as well as hook into the new startup lifecycle hooks.
- [`68a21956ef52`](https://github.com/backstage/backstage/commit/68a21956ef52): Remove reference to deprecated import
- [`a5c5491ff50c`](https://github.com/backstage/backstage/commit/a5c5491ff50c): Use `durationToMilliseconds` from `@backstage/types` instead of our own
- [`2c9f67e6f166`](https://github.com/backstage/backstage/commit/2c9f67e6f166): Introduced built-in middleware into the default `HttpService` implementation that throws a `ServiceNotAvailable` error when plugins aren't able to serve request. Also introduced a request stalling mechanism that pauses incoming request until plugins have been fully initialized.
- [`c4e8fefd9f13`](https://github.com/backstage/backstage/commit/c4e8fefd9f13): Added handling of `ServiceUnavailableError` to error handling middleware.

### `@backstage/backend-plugin-api` (0.5.2 → [0.5.3](../../changelogs/@backstage/backend-plugin-api.md#053))

#### 0.5.3

##### Patch Changes

- [`3bb4158a8aa4`](https://github.com/backstage/backstage/commit/3bb4158a8aa4): Added startup hooks to the lifecycle services.

### `@backstage/backend-test-utils` (0.1.37 → [0.1.38](../../changelogs/@backstage/backend-test-utils.md#0138))

#### 0.1.38

##### Patch Changes

- [`68a21956ef52`](https://github.com/backstage/backstage/commit/68a21956ef52): Remove reference to deprecated import

### `@backstage/catalog-client` (1.4.1 → [1.4.2](../../changelogs/@backstage/catalog-client.md#142))

#### 1.4.2

##### Patch Changes

- [`cc936b529676`](https://github.com/backstage/backstage/commit/cc936b529676): Updated API docs

### `@backstage/cli` (0.22.7 → [0.22.8](../../changelogs/@backstage/cli.md#0228))

#### 0.22.8

##### Patch Changes

- [`314493fa32a0`](https://github.com/backstage/backstage/commit/314493fa32a0): Introduced the `--alwaysYarnPack` flag on `backstage-cli build-workspace`, which can be passed in cases where accuracy of workspace contents is more important than the
  speed with which the workspace is built. Useful in rare situations where `yarn pack` and `npm pack` produce different results.
- [`75540599124a`](https://github.com/backstage/backstage/commit/75540599124a): Updated example component for a newly scaffolded app.
- [`5d692f72ebfb`](https://github.com/backstage/backstage/commit/5d692f72ebfb): Make sure to include a `fetch` environment for `jsdom` in `jest` tests
- [`6816352500a7`](https://github.com/backstage/backstage/commit/6816352500a7): Add discovery feature to the onboard cli command.
- [`20b7da6f1311`](https://github.com/backstage/backstage/commit/20b7da6f1311): Enforcing Material UI v5 specific linting to minimize bundle size.

### `@backstage/config-loader` (1.3.0 → [1.3.1](../../changelogs/@backstage/config-loader.md#131))

#### 1.3.1

##### Patch Changes

- [`f25427f665f7`](https://github.com/backstage/backstage/commit/f25427f665f7): Fix a bug where config items with `/` in the key were incorrectly handled.
- [`a5c5491ff50c`](https://github.com/backstage/backstage/commit/a5c5491ff50c): Use `durationToMilliseconds` from `@backstage/types` instead of our own

### `@backstage/core-app-api` (1.8.0 → [1.8.1](../../changelogs/@backstage/core-app-api.md#181))

#### 1.8.1

##### Patch Changes

- [`12adfbc8fe2d`](https://github.com/backstage/backstage/commit/12adfbc8fe2d): Fixed a bug that prevented accurate plugin and route data from being applied to `navigate` analytics events when users visited pages constructed with `<EntityLayout>`, `<TabbedLayout>`, and similar components that are used to gather one or more routable extensions under a given path.
- [`ac677bc30ae0`](https://github.com/backstage/backstage/commit/ac677bc30ae0): Expose discovery.endpoints configuration to use FrontendHostDiscovery
- [`74b216ee4e50`](https://github.com/backstage/backstage/commit/74b216ee4e50): Add `PropsWithChildren` to usages of `ComponentType`, in preparation for React 18 where the children are no longer implicit.

### `@backstage/core-components` (0.13.1 → [0.13.2](../../changelogs/@backstage/core-components.md#0132))

#### 0.13.2

##### Patch Changes

- [`4e697e88f0e2`](https://github.com/backstage/backstage/commit/4e697e88f0e2): Add resource utilization to Pod Drawer
- [`78cbb8ef8aea`](https://github.com/backstage/backstage/commit/78cbb8ef8aea): Enhance the sidebar item accessibility by using appropriate header semantics.
- [`66ae4d8ca380`](https://github.com/backstage/backstage/commit/66ae4d8ca380): Added `exact` prop to `SidebarSubmenuItem` which causes it to only highlight if the current location is an exact match.
- [`83bdc3a555c1`](https://github.com/backstage/backstage/commit/83bdc3a555c1): Replaced usages of `theme.palette.theme.hint` with `theme.palette.text.secondary` as it has been removed in Material UI v5
- [`b4cc4b1415e9`](https://github.com/backstage/backstage/commit/b4cc4b1415e9): SupportButton auto focus first item when opened.
- [`e33beb1f2a8e`](https://github.com/backstage/backstage/commit/e33beb1f2a8e): Make the documentation pages printable (also handy for exporting to PDF)

### `@backstage/core-plugin-api` (1.5.1 → [1.5.2](../../changelogs/@backstage/core-plugin-api.md#152))

#### 1.5.2

##### Patch Changes

- [`12adfbc8fe2d`](https://github.com/backstage/backstage/commit/12adfbc8fe2d): Fixed a bug that prevented accurate plugin and route data from being applied to `navigate` analytics events when users visited pages constructed with `<EntityLayout>`, `<TabbedLayout>`, and similar components that are used to gather one or more routable extensions under a given path.
- [`74b216ee4e50`](https://github.com/backstage/backstage/commit/74b216ee4e50): Add `PropsWithChildren` to usages of `ComponentType`, in preparation for React 18 where the children are no longer implicit.

### `@backstage/create-app` (0.5.1 → [0.5.2](../../changelogs/@backstage/create-app.md#052))

#### 0.5.2

##### Patch Changes

- [`08f177b91084`](https://github.com/backstage/backstage/commit/08f177b91084): Add link from Template entity to the scaffolder launch page for the template in the AboutCard.
- [`75a1c93784fe`](https://github.com/backstage/backstage/commit/75a1c93784fe): Bumped create-app version.
- [`e37573d60e79`](https://github.com/backstage/backstage/commit/e37573d60e79): Bumped create-app version.
- [`320ed502747a`](https://github.com/backstage/backstage/commit/320ed502747a): Bumped create-app version.
- [`52d599817680`](https://github.com/backstage/backstage/commit/52d599817680): Changed the default backend CacheClient to an in-memory cache when not explicitly configured.

  Explicit configuration of an **in-memory cache** can be removed from `app-config.yaml`, as this is now the default:

  ```diff
  backend:
  -  cache:
  -    store: memory
  ```

- [`68a21956ef52`](https://github.com/backstage/backstage/commit/68a21956ef52): Remove reference to deprecated import

### `@backstage/dev-utils` (1.0.15 → [1.0.16](../../changelogs/@backstage/dev-utils.md#1016))

#### 1.0.16

##### Patch Changes

- [`74b216ee4e50`](https://github.com/backstage/backstage/commit/74b216ee4e50): Add `PropsWithChildren` to usages of `ComponentType`, in preparation for React 18 where the children are no longer implicit.

### `@backstage/integration-aws-node` (0.1.3 → [0.1.4](../../changelogs/@backstage/integration-aws-node.md#014))

#### 0.1.4

##### Patch Changes

- [`5f2c38c70f5b`](https://github.com/backstage/backstage/commit/5f2c38c70f5b): Fix SNYK-JS-FASTXMLPARSER-5668858 (`fast-xml-parser`) by upgrading aws-sdk to at least the current latest version.

### `@backstage/plugin-adr` (0.6.1 → [0.6.2](../../changelogs/@backstage/plugin-adr.md#062))

#### 0.6.2

##### Patch Changes

- [`58524588448c`](https://github.com/backstage/backstage/commit/58524588448c): Render table of front matter metadata when displaying MADR v3 formatted ADR

### `@backstage/plugin-adr-backend` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-adr-backend.md#034))

#### 0.3.4

##### Patch Changes

- [`58524588448c`](https://github.com/backstage/backstage/commit/58524588448c): Use front matter parser for MADR v3 formatted ADRs when indexing status/date

### `@backstage/plugin-adr-common` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-adr-common.md#0210))

#### 0.2.10

##### Patch Changes

- [`58524588448c`](https://github.com/backstage/backstage/commit/58524588448c): Add utility function for parsing MADR front matter

### `@backstage/plugin-analytics-module-ga4` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-analytics-module-ga4.md#011))

#### 0.1.1

##### Patch Changes

- [`99056db6169e`](https://github.com/backstage/backstage/commit/99056db6169e): Fixed configuration visibility settings for `allowedContexts` and `allowedAttributes`
- [`3d11596a72b5`](https://github.com/backstage/backstage/commit/3d11596a72b5): Update plugin installation docs to be more consistent across documentations

### `@backstage/plugin-api-docs` (0.9.4 → [0.9.5](../../changelogs/@backstage/plugin-api-docs.md#095))

#### 0.9.5

##### Patch Changes

- [`865267a6b934`](https://github.com/backstage/backstage/commit/865267a6b934): Updated dependency `@asyncapi/react-component` to `1.0.0-next.48`.
- [`83bdc3a555c1`](https://github.com/backstage/backstage/commit/83bdc3a555c1): Replaced usages of `theme.palette.theme.hint` with `theme.palette.text.secondary` as it has been removed in Material UI v5
- [`af748a148d52`](https://github.com/backstage/backstage/commit/af748a148d52): Add support for OpenAPI Specification (OAS) v3.1.0 using swagger-ui v5.0.0.

### `@backstage/plugin-auth-backend` (0.18.3 → [0.18.4](../../changelogs/@backstage/plugin-auth-backend.md#0184))

#### 0.18.4

##### Patch Changes

- [`d0f5b0c886c2`](https://github.com/backstage/backstage/commit/d0f5b0c886c2): Set the expiration time of oidc `idToken` to be less than backstage session expiration time.

### `@backstage/plugin-azure-sites-backend` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-azure-sites-backend.md#018))

#### 0.1.8

##### Patch Changes

- [`b43e030911f2`](https://github.com/backstage/backstage/commit/b43e030911f2): Upgrade `@azure/identity` to support using Workload Identity to authenticate against Azure.

### `@backstage/plugin-badges-backend` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-badges-backend.md#021))

#### 0.2.1

##### Patch Changes

- [`4474f44c5ee7`](https://github.com/backstage/backstage/commit/4474f44c5ee7): Adding migrations to the packages.json

### `@backstage/plugin-bitrise` (0.1.45 → [0.1.46](../../changelogs/@backstage/plugin-bitrise.md#0146))

#### 0.1.46

##### Patch Changes

- [`ed290e273086`](https://github.com/backstage/backstage/commit/ed290e273086): Remove `cross-fetch` dependency as it's not used

### `@backstage/plugin-catalog` (1.11.1 → [1.11.2](../../changelogs/@backstage/plugin-catalog.md#1112))

#### 1.11.2

##### Patch Changes

- [`08f177b91084`](https://github.com/backstage/backstage/commit/08f177b91084): Add link from Template entity to the scaffolder launch page for the template in the AboutCard.
- [`2e036369d83b`](https://github.com/backstage/backstage/commit/2e036369d83b): Updated `alertApi` usages with severity of `info` or `success` to use `display: transient`
- [`530b6f364c8c`](https://github.com/backstage/backstage/commit/530b6f364c8c): Adding in type and kind entity details to catalog table title for user clarity
- [`886055301abe`](https://github.com/backstage/backstage/commit/886055301abe): `CatalogIndexPage` now accepts an optional `ownerPickerMode` for toggling the behavior of the `EntityOwnerPicker`,
  exposing a new mode `<CatalogIndexPage ownerPickerMode="all" />` particularly suitable for larger catalogs. In this new mode, `EntityOwnerPicker` will display all the users and groups present in the catalog.
- [`47b01e4c5315`](https://github.com/backstage/backstage/commit/47b01e4c5315): Keyboard navigation to open EntityContextMenu now focus visible the first element.

### `@backstage/plugin-catalog-backend-module-aws` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#021))

#### 0.2.1

##### Patch Changes

- [`5f2c38c70f5b`](https://github.com/backstage/backstage/commit/5f2c38c70f5b): Fix SNYK-JS-FASTXMLPARSER-5668858 (`fast-xml-parser`) by upgrading aws-sdk to at least the current latest version.

### `@backstage/plugin-catalog-backend-module-azure` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0117))

#### 0.1.17

##### Patch Changes

- [`c7f848bcea3c`](https://github.com/backstage/backstage/commit/c7f848bcea3c): Support authentication with a service principal or managed identity for Azure DevOps

  Azure DevOps recently released support, in public preview, for authenticating with a service principal or managed identity instead of a personal access token (PAT): https://devblogs.microsoft.com/devops/introducing-service-principal-and-managed-identity-support-on-azure-devops/. With this change the Azure integration now supports service principals and managed identities for Azure AD backed Azure DevOps organizations. Service principal and managed identity authentication is not supported on Azure DevOps Server (on-premises) organizations.

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#0113))

#### 0.1.13

##### Patch Changes

- [`32ad816421de`](https://github.com/backstage/backstage/commit/32ad816421de): Fix missing repo slug in `repo:push` events.

### `@backstage/plugin-catalog-backend-module-gitlab` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#022))

#### 0.2.2

##### Patch Changes

- [`f31fd1f8fd98`](https://github.com/backstage/backstage/commit/f31fd1f8fd98): Fixed bug that caused ingestion errors when a user's name or profile picture is undefined.
- [`66261b4ab441`](https://github.com/backstage/backstage/commit/66261b4ab441): Added option to skip forked repos
- [`571f78ed0ea7`](https://github.com/backstage/backstage/commit/571f78ed0ea7): Fix getGroupMembers with token that don't have sufficient permissions

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#033))

#### 0.3.3

##### Patch Changes

- [`53309661cb5c`](https://github.com/backstage/backstage/commit/53309661cb5c): Update installation guide to fix inconsistency in type names

### `@backstage/plugin-catalog-backend-module-msgraph` (0.5.4 → [0.5.5](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#055))

#### 0.5.5

##### Patch Changes

- [`b43e030911f2`](https://github.com/backstage/backstage/commit/b43e030911f2): Upgrade `@azure/identity` to support using Workload Identity to authenticate against Azure.

### `@backstage/plugin-catalog-import` (0.9.8 → [0.9.9](../../changelogs/@backstage/plugin-catalog-import.md#099))

#### 0.9.9

##### Patch Changes

- [`2ef84c05aee7`](https://github.com/backstage/backstage/commit/2ef84c05aee7): Added analytics event for import entity button
- [`309d2973adb4`](https://github.com/backstage/backstage/commit/309d2973adb4): Swap `ImportStepper` and `InfoCard` order to fix tab order in `catalog-import`.

### `@backstage/plugin-cicd-statistics-module-gitlab` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-cicd-statistics-module-gitlab.md#0115))

#### 0.1.15

##### Patch Changes

- [`50c4457119ec`](https://github.com/backstage/backstage/commit/50c4457119ec): Fixed publish configuration.

### `@backstage/plugin-code-coverage-backend` (0.2.11 → [0.2.12](../../changelogs/@backstage/plugin-code-coverage-backend.md#0212))

#### 0.2.12

##### Patch Changes

- [`a83cb4e5624e`](https://github.com/backstage/backstage/commit/a83cb4e5624e): Updated dependency `xml2js` to `^0.6.0`.

### `@backstage/plugin-devtools` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-devtools.md#011))

#### 0.1.1

##### Patch Changes

- [`62d191f6c8b5`](https://github.com/backstage/backstage/commit/62d191f6c8b5): Updated DevTools documentation for Docker users
- [`bbe15f70c5cc`](https://github.com/backstage/backstage/commit/bbe15f70c5cc): Added note to README about how secrets are displayed in the Config tab of the DevTools plugin

### `@backstage/plugin-devtools-backend` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-devtools-backend.md#011))

#### 0.1.1

##### Patch Changes

- [`c312192e61dd`](https://github.com/backstage/backstage/commit/c312192e61dd): Expose permissions through the metadata endpoint.
- [`3d11596a72b5`](https://github.com/backstage/backstage/commit/3d11596a72b5): Update plugin installation docs to be more consistent across documentations

### `@backstage/plugin-devtools-common` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-devtools-common.md#011))

#### 0.1.1

##### Patch Changes

- [`459331f657ec`](https://github.com/backstage/backstage/commit/459331f657ec): Export the list of permissions

### `@backstage/plugin-entity-feedback` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-entity-feedback.md#022))

#### 0.2.2

##### Patch Changes

- [`5c0f095c7660`](https://github.com/backstage/backstage/commit/5c0f095c7660): Show user in feedback response table as link

### `@backstage/plugin-entity-validation` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-entity-validation.md#014))

#### 0.1.4

##### Patch Changes

- [`3d11596a72b5`](https://github.com/backstage/backstage/commit/3d11596a72b5): Update plugin installation docs to be more consistent across documentations

### `@backstage/plugin-events-backend-module-aws-sqs` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#021))

#### 0.2.1

##### Patch Changes

- [`5f2c38c70f5b`](https://github.com/backstage/backstage/commit/5f2c38c70f5b): Fix SNYK-JS-FASTXMLPARSER-5668858 (`fast-xml-parser`) by upgrading aws-sdk to at least the current latest version.

### `@backstage/plugin-events-backend-module-azure` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-events-backend-module-azure.md#018))

#### 0.1.8

##### Patch Changes

- [`807416a9ed39`](https://github.com/backstage/backstage/commit/807416a9ed39): fix Installation documentation

### `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#018))

#### 0.1.8

##### Patch Changes

- [`807416a9ed39`](https://github.com/backstage/backstage/commit/807416a9ed39): fix Installation documentation

### `@backstage/plugin-events-backend-module-gerrit` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#018))

#### 0.1.8

##### Patch Changes

- [`807416a9ed39`](https://github.com/backstage/backstage/commit/807416a9ed39): fix Installation documentation

### `@backstage/plugin-events-backend-module-github` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-events-backend-module-github.md#018))

#### 0.1.8

##### Patch Changes

- [`807416a9ed39`](https://github.com/backstage/backstage/commit/807416a9ed39): fix Installation documentation

### `@backstage/plugin-events-backend-module-gitlab` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#018))

#### 0.1.8

##### Patch Changes

- [`807416a9ed39`](https://github.com/backstage/backstage/commit/807416a9ed39): fix Installation documentation

### `@backstage/plugin-explore` (0.4.4 → [0.4.5](../../changelogs/@backstage/plugin-explore.md#045))

#### 0.4.5

##### Patch Changes

- [`78cbb8ef8aea`](https://github.com/backstage/backstage/commit/78cbb8ef8aea): Enhance the tools card accessibility by using appropriate header semantics.

### `@backstage/plugin-home` (0.5.2 → [0.5.3](../../changelogs/@backstage/plugin-home.md#053))

#### 0.5.3

##### Patch Changes

- [`d1cfb4e4c4cd`](https://github.com/backstage/backstage/commit/d1cfb4e4c4cd): Update set up documentation to export homepage as element instead of React component.
- [`2e4940e1a8f8`](https://github.com/backstage/backstage/commit/2e4940e1a8f8): Allow more customization for the CustomHomepageGrid
- [`2ff94da135a4`](https://github.com/backstage/backstage/commit/2ff94da135a4): bump `rjsf` dependencies to 5.7.3
- [`41e8037a8a6d`](https://github.com/backstage/backstage/commit/41e8037a8a6d): Extract new plugin-home-react package and deprecate createCardExtension in plugin-home

### `@backstage/plugin-jenkins` (0.8.0 → [0.8.1](../../changelogs/@backstage/plugin-jenkins.md#081))

#### 0.8.1

##### Patch Changes

- [`2e036369d83b`](https://github.com/backstage/backstage/commit/2e036369d83b): Updated `alertApi` usages with severity of `info` or `success` to use `display: transient`

### `@backstage/plugin-jenkins-backend` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-jenkins-backend.md#021))

#### 0.2.1

##### Patch Changes

- [`0f93b6707e04`](https://github.com/backstage/backstage/commit/0f93b6707e04): Don't expose username and authentication header if configured.
- [`6c244b42cb06`](https://github.com/backstage/backstage/commit/6c244b42cb06): Expose permissions through the metadata endpoint.

### `@backstage/plugin-jenkins-common` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-jenkins-common.md#0116))

#### 0.1.16

##### Patch Changes

- [`35e11314d7e9`](https://github.com/backstage/backstage/commit/35e11314d7e9): Export list of permissions

### `@backstage/plugin-kubernetes` (0.9.1 → [0.9.2](../../changelogs/@backstage/plugin-kubernetes.md#092))

#### 0.9.2

##### Patch Changes

- [`dc3cddf51ab5`](https://github.com/backstage/backstage/commit/dc3cddf51ab5): Fix cyclical dependency in built output
- [`4e697e88f0e2`](https://github.com/backstage/backstage/commit/4e697e88f0e2): Add resource utilization to Pod Drawer
- [`4b230b97660d`](https://github.com/backstage/backstage/commit/4b230b97660d): Add errors to PodDrawer
- [`73cc0deee48a`](https://github.com/backstage/backstage/commit/73cc0deee48a): Add proposed fix dialog for pod errors

### `@backstage/plugin-kubernetes-backend` (0.11.0 → [0.11.1](../../changelogs/@backstage/plugin-kubernetes-backend.md#0111))

#### 0.11.1

##### Patch Changes

- [`b43e030911f2`](https://github.com/backstage/backstage/commit/b43e030911f2): Upgrade `@azure/identity` to support using Workload Identity to authenticate against Azure.
- [`91f39df52d60`](https://github.com/backstage/backstage/commit/91f39df52d60): K8s proxy HEADER_KUBERNETES_CLUSTER is now optional in single-cluster setups.
- [`4249f4214f9f`](https://github.com/backstage/backstage/commit/4249f4214f9f): Fixed bug in KubernetesProxy where Host header was not propagated, leading to certificate issues
- [`5f2c38c70f5b`](https://github.com/backstage/backstage/commit/5f2c38c70f5b): Fix SNYK-JS-FASTXMLPARSER-5668858 (`fast-xml-parser`) by upgrading aws-sdk to at least the current latest version.
- [`eac59a3d0b11`](https://github.com/backstage/backstage/commit/eac59a3d0b11): Add ability for `configClusterLocator` to load cluster specific custom resources defined in your `app.config`.
- [`5e4879d80f4d`](https://github.com/backstage/backstage/commit/5e4879d80f4d): Fixed wrong `pluginID` in the `kubernetes` alpha backend support, that made the `kubernetes` plugin fail with the new experimental backend.
- [`73cc0deee48a`](https://github.com/backstage/backstage/commit/73cc0deee48a): Add proposed fix dialog for pod errors

### `@backstage/plugin-octopus-deploy` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-octopus-deploy.md#021))

#### 0.2.1

##### Patch Changes

- [`944a8ac6fcc0`](https://github.com/backstage/backstage/commit/944a8ac6fcc0): Improved getting started documentation

### `@backstage/plugin-org` (0.6.8 → [0.6.9](../../changelogs/@backstage/plugin-org.md#069))

#### 0.6.9

##### Patch Changes

- [`0151ed6ec37a`](https://github.com/backstage/backstage/commit/0151ed6ec37a): EntityOwnershipCard: Fix color to pick up from page theme for component type
- [`2e036369d83b`](https://github.com/backstage/backstage/commit/2e036369d83b): Updated `alertApi` usages with severity of `info` or `success` to use `display: transient`

### `@backstage/plugin-playlist` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-playlist.md#0111))

#### 0.1.11

##### Patch Changes

- [`2e036369d83b`](https://github.com/backstage/backstage/commit/2e036369d83b): Updated `alertApi` usages with severity of `info` or `success` to use `display: transient`

### `@backstage/plugin-proxy-backend` (0.2.39 → [0.2.40](../../changelogs/@backstage/plugin-proxy-backend.md#0240))

#### 0.2.40

##### Patch Changes

- [`95987388f26b`](https://github.com/backstage/backstage/commit/95987388f26b): Marked headers `Authorization` and `X-Api-Key` as secret in order to not show up in frontend configuration.

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#013))

#### 0.1.3

##### Patch Changes

- [`c59a4b2b9e0a`](https://github.com/backstage/backstage/commit/c59a4b2b9e0a): Added support for Confluence Cloud to the `confluence:transform:markdown` action in addition to the existing Confluence Server support, view the [README](https://github.com/backstage/backstage/tree/master/plugins/scaffolder-backend-module-confluence-to-markdown) for more details

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#021))

#### 0.2.1

##### Patch Changes

- [`50c4457119ec`](https://github.com/backstage/backstage/commit/50c4457119ec): Fixed publish configuration.
- [`30e6edd7f6a5`](https://github.com/backstage/backstage/commit/30e6edd7f6a5): Add support for dry run for `gitlab:group:ensureExists` action.
- [`f5a66052f04f`](https://github.com/backstage/backstage/commit/f5a66052f04f): Tweak README

### `@backstage/plugin-search` (1.3.1 → [1.3.2](../../changelogs/@backstage/plugin-search.md#132))

#### 1.3.2

##### Patch Changes

- [`e8c55c063b88`](https://github.com/backstage/backstage/commit/e8c55c063b88): Fixes `SearchModal` and `HomePageSearchBar` components to use search bar reference value when "enter" is pressed, avoiding waiting for query state debounce.
- [`2f660eb573cc`](https://github.com/backstage/backstage/commit/2f660eb573cc): Fix SearchBar styles & update StoryBook stories for custom styles for `notchedOutline` class.

### `@backstage/plugin-search-backend` (1.3.1 → [1.3.2](../../changelogs/@backstage/plugin-search-backend.md#132))

#### 1.3.2

##### Patch Changes

- [`ee411e7c2623`](https://github.com/backstage/backstage/commit/ee411e7c2623): Update OpenAPI specs to be in line with linting standards.

### `@backstage/plugin-search-backend-module-explore` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-search-backend-module-explore.md#012))

#### 0.1.2

##### Patch Changes

- [`a5baeea2cb87`](https://github.com/backstage/backstage/commit/a5baeea2cb87): Allows for an optional `tokenManager` to authenticate requests from the collator to the explore backend. For example:

  ```diff
    indexBuilder.addCollator({
      schedule: every10MinutesSchedule,
      factory: ToolDocumentCollatorFactory.fromConfig(env.config, {
        discovery: env.discovery,
        logger: env.logger,
      + tokenManager: env.tokenManager,
      }),
    });
  ```

### `@backstage/plugin-search-backend-module-pg` (0.5.6 → [0.5.7](../../changelogs/@backstage/plugin-search-backend-module-pg.md#057))

#### 0.5.7

##### Patch Changes

- [`3c09e8d3cb0c`](https://github.com/backstage/backstage/commit/3c09e8d3cb0c): Updated Postgres search query filter in DatabaseDocumentStore to support field value search in array.

### `@backstage/plugin-search-react` (1.6.1 → [1.6.2](../../changelogs/@backstage/plugin-search-react.md#162))

#### 1.6.2

##### Patch Changes

- [`0134c1aa4f36`](https://github.com/backstage/backstage/commit/0134c1aa4f36): Fix accessibility issue in `SearchCheckbox` component, making it possible to use the field via keyboard.
- [`2f660eb573cc`](https://github.com/backstage/backstage/commit/2f660eb573cc): Fix SearchBar styles & update StoryBook stories for custom styles for `notchedOutline` class.

### `@backstage/plugin-shortcuts` (0.3.10 → [0.3.11](../../changelogs/@backstage/plugin-shortcuts.md#0311))

#### 0.3.11

##### Patch Changes

- [`2e036369d83b`](https://github.com/backstage/backstage/commit/2e036369d83b): Updated `alertApi` usages with severity of `info` or `success` to use `display: transient`

### `@backstage/plugin-stack-overflow` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-stack-overflow.md#0117))

#### 0.1.17

##### Patch Changes

- [`41e8037a8a6d`](https://github.com/backstage/backstage/commit/41e8037a8a6d): Extract new plugin-home-react package and deprecate createCardExtension in plugin-home

### `@backstage/plugin-tech-insights` (0.3.10 → [0.3.11](../../changelogs/@backstage/plugin-tech-insights.md#0311))

#### 0.3.11

##### Patch Changes

- [`c03307ded3e6`](https://github.com/backstage/backstage/commit/c03307ded3e6): The check description is now rendered with markdown.

### `@backstage/plugin-techdocs` (1.6.3 → [1.6.4](../../changelogs/@backstage/plugin-techdocs.md#164))

#### 1.6.4

##### Patch Changes

- [`2f660eb573cc`](https://github.com/backstage/backstage/commit/2f660eb573cc): Fix SearchBar styles & update StoryBook stories for custom styles for `notchedOutline` class.
- [`956d09e8ea68`](https://github.com/backstage/backstage/commit/956d09e8ea68): Change deprecated local references to import from shared `plugin-techdocs-react` plugin
- [`e33beb1f2a8e`](https://github.com/backstage/backstage/commit/e33beb1f2a8e): Make the documentation pages printable (also handy for exporting to PDF)

### `@backstage/plugin-techdocs-addons-test-utils` (1.0.14 → [1.0.15](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#1015))

#### 1.0.15

##### Patch Changes

- [`1fd38bc4141a`](https://github.com/backstage/backstage/commit/1fd38bc4141a): Avoiding re-running tests on cleanup.

### `@backstage/plugin-techdocs-node` (1.7.1 → [1.7.2](../../changelogs/@backstage/plugin-techdocs-node.md#172))

#### 1.7.2

##### Patch Changes

- [`b43e030911f2`](https://github.com/backstage/backstage/commit/b43e030911f2): Upgrade `@azure/identity` to support using Workload Identity to authenticate against Azure.
- [`7d4a09304f67`](https://github.com/backstage/backstage/commit/7d4a09304f67): Use latest techdocs docker image by default. The latest image contains security updates.
- [`5f2c38c70f5b`](https://github.com/backstage/backstage/commit/5f2c38c70f5b): Fix SNYK-JS-FASTXMLPARSER-5668858 (`fast-xml-parser`) by upgrading aws-sdk to at least the current latest version.

### `@backstage/plugin-techdocs-react` (1.1.6 → [1.1.7](../../changelogs/@backstage/plugin-techdocs-react.md#117))

#### 1.1.7

##### Patch Changes

- [`3d11596a72b5`](https://github.com/backstage/backstage/commit/3d11596a72b5): Update plugin installation docs to be more consistent across documentations

### `@backstage/plugin-user-settings` (0.7.3 → [0.7.4](../../changelogs/@backstage/plugin-user-settings.md#074))

#### 0.7.4

##### Patch Changes

- [`7a8441b9a323`](https://github.com/backstage/backstage/commit/7a8441b9a323): Reflect the updated sign on status for a provider after signing out.
- [`5362a7c58eaa`](https://github.com/backstage/backstage/commit/5362a7c58eaa): Improved the user experience of the feature flags list. It now sorts the enabled flags to the top of the list to increase the visibilities of the toggled flags.

### `@backstage/repo-tools` (0.3.0 → [0.3.1](../../changelogs/@backstage/repo-tools.md#031))

#### 0.3.1

##### Patch Changes

- [`ee411e7c2623`](https://github.com/backstage/backstage/commit/ee411e7c2623): Adding a new command `schema openapi lint` to lint your OpenAPI specs and ensure consistent style across Backstage plugins.

### `@techdocs/cli` (1.4.2 → [1.4.3](../../changelogs/@techdocs/cli.md#143))

#### 1.4.3

##### Patch Changes

- [`68a21956ef52`](https://github.com/backstage/backstage/commit/68a21956ef52): Remove reference to deprecated import

## Excluded dependency updates

- `@backstage/backend-defaults` (0.1.10 → [0.1.11](../../changelogs/@backstage/backend-defaults.md#0111))
- `@backstage/backend-tasks` (0.5.2 → [0.5.3](../../changelogs/@backstage/backend-tasks.md#053))
- `@backstage/cli-node` (0.1.0 → [0.1.1](../../changelogs/@backstage/cli-node.md#011))
- `@backstage/config` (1.0.7 → [1.0.8](../../changelogs/@backstage/config.md#108))
- `@backstage/integration-react` (1.1.13 → [1.1.14](../../changelogs/@backstage/integration-react.md#1114))
- `@backstage/plugin-airbrake` (0.3.18 → [0.3.19](../../changelogs/@backstage/plugin-airbrake.md#0319))
- `@backstage/plugin-airbrake-backend` (0.2.18 → [0.2.19](../../changelogs/@backstage/plugin-airbrake-backend.md#0219))
- `@backstage/plugin-allure` (0.1.34 → [0.1.35](../../changelogs/@backstage/plugin-allure.md#0135))
- `@backstage/plugin-analytics-module-ga` (0.1.29 → [0.1.30](../../changelogs/@backstage/plugin-analytics-module-ga.md#0130))
- `@backstage/plugin-apache-airflow` (0.2.11 → [0.2.12](../../changelogs/@backstage/plugin-apache-airflow.md#0212))
- `@backstage/plugin-apollo-explorer` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-apollo-explorer.md#0112))
- `@backstage/plugin-app-backend` (0.3.45 → [0.3.46](../../changelogs/@backstage/plugin-app-backend.md#0346))
- `@backstage/plugin-auth-node` (0.2.14 → [0.2.15](../../changelogs/@backstage/plugin-auth-node.md#0215))
- `@backstage/plugin-azure-devops` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-azure-devops.md#031))
- `@backstage/plugin-azure-devops-backend` (0.3.24 → [0.3.25](../../changelogs/@backstage/plugin-azure-devops-backend.md#0325))
- `@backstage/plugin-azure-sites` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-azure-sites.md#018))
- `@backstage/plugin-badges` (0.2.42 → [0.2.43](../../changelogs/@backstage/plugin-badges.md#0243))
- `@backstage/plugin-bazaar` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-bazaar.md#0210))
- `@backstage/plugin-bazaar-backend` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-bazaar-backend.md#029))
- `@backstage/plugin-bitbucket-cloud-common` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#027))
- `@backstage/plugin-catalog-backend-module-bitbucket` (0.2.12 → [0.2.13](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket.md#0213))
- `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#0111))
- `@backstage/plugin-catalog-backend-module-gerrit` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0114))
- `@backstage/plugin-catalog-backend-module-ldap` (0.5.12 → [0.5.13](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0513))
- `@backstage/plugin-catalog-backend-module-openapi` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0112))
- `@backstage/plugin-catalog-backend-module-puppetdb` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#013))
- `@backstage/plugin-catalog-common` (1.0.13 → [1.0.14](../../changelogs/@backstage/plugin-catalog-common.md#1014))
- `@backstage/plugin-catalog-graph` (0.2.30 → [0.2.31](../../changelogs/@backstage/plugin-catalog-graph.md#0231))
- `@backstage/plugin-catalog-graphql` (0.3.20 → [0.3.21](../../changelogs/@backstage/plugin-catalog-graphql.md#0321))
- `@backstage/plugin-catalog-node` (1.3.6 → [1.3.7](../../changelogs/@backstage/plugin-catalog-node.md#137))
- `@backstage/plugin-cicd-statistics` (0.1.20 → [0.1.21](../../changelogs/@backstage/plugin-cicd-statistics.md#0121))
- `@backstage/plugin-circleci` (0.3.18 → [0.3.19](../../changelogs/@backstage/plugin-circleci.md#0319))
- `@backstage/plugin-cloudbuild` (0.3.18 → [0.3.19](../../changelogs/@backstage/plugin-cloudbuild.md#0319))
- `@backstage/plugin-code-climate` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-code-climate.md#0119))
- `@backstage/plugin-code-coverage` (0.2.11 → [0.2.12](../../changelogs/@backstage/plugin-code-coverage.md#0212))
- `@backstage/plugin-codescene` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-codescene.md#0114))
- `@backstage/plugin-config-schema` (0.1.41 → [0.1.42](../../changelogs/@backstage/plugin-config-schema.md#0142))
- `@backstage/plugin-cost-insights` (0.12.7 → [0.12.8](../../changelogs/@backstage/plugin-cost-insights.md#0128))
- `@backstage/plugin-entity-feedback-backend` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-entity-feedback-backend.md#014))
- `@backstage/plugin-events-backend` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-events-backend.md#027))
- `@backstage/plugin-events-backend-test-utils` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-events-backend-test-utils.md#018))
- `@backstage/plugin-events-node` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-events-node.md#027))
- `@backstage/plugin-explore-react` (0.0.28 → [0.0.29](../../changelogs/@backstage/plugin-explore-react.md#0029))
- `@backstage/plugin-firehydrant` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-firehydrant.md#023))
- `@backstage/plugin-fossa` (0.2.50 → [0.2.51](../../changelogs/@backstage/plugin-fossa.md#0251))
- `@backstage/plugin-gcalendar` (0.3.14 → [0.3.15](../../changelogs/@backstage/plugin-gcalendar.md#0315))
- `@backstage/plugin-gcp-projects` (0.3.37 → [0.3.38](../../changelogs/@backstage/plugin-gcp-projects.md#0338))
- `@backstage/plugin-git-release-manager` (0.3.31 → [0.3.32](../../changelogs/@backstage/plugin-git-release-manager.md#0332))
- `@backstage/plugin-github-deployments` (0.1.49 → [0.1.50](../../changelogs/@backstage/plugin-github-deployments.md#0150))
- `@backstage/plugin-github-issues` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-github-issues.md#028))
- `@backstage/plugin-github-pull-requests-board` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-github-pull-requests-board.md#0113))
- `@backstage/plugin-gitops-profiles` (0.3.36 → [0.3.37](../../changelogs/@backstage/plugin-gitops-profiles.md#0337))
- `@backstage/plugin-gocd` (0.1.24 → [0.1.25](../../changelogs/@backstage/plugin-gocd.md#0125))
- `@backstage/plugin-graphiql` (0.2.50 → [0.2.51](../../changelogs/@backstage/plugin-graphiql.md#0251))
- `@backstage/plugin-graphql-backend` (0.1.35 → [0.1.36](../../changelogs/@backstage/plugin-graphql-backend.md#0136))
- `@backstage/plugin-graphql-voyager` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-graphql-voyager.md#014))
- `@backstage/plugin-ilert` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-ilert.md#028))
- `@backstage/plugin-kafka` (0.3.18 → [0.3.19](../../changelogs/@backstage/plugin-kafka.md#0319))
- `@backstage/plugin-kafka-backend` (0.2.38 → [0.2.39](../../changelogs/@backstage/plugin-kafka-backend.md#0239))
- `@backstage/plugin-kubernetes-common` (0.6.3 → [0.6.4](../../changelogs/@backstage/plugin-kubernetes-common.md#064))
- `@backstage/plugin-lighthouse` (0.4.3 → [0.4.4](../../changelogs/@backstage/plugin-lighthouse.md#044))
- `@backstage/plugin-lighthouse-backend` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-lighthouse-backend.md#022))
- `@backstage/plugin-lighthouse-common` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-lighthouse-common.md#012))
- `@backstage/plugin-linguist` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-linguist.md#014))
- `@backstage/plugin-microsoft-calendar` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-microsoft-calendar.md#014))
- `@backstage/plugin-newrelic` (0.3.36 → [0.3.37](../../changelogs/@backstage/plugin-newrelic.md#0337))
- `@backstage/plugin-newrelic-dashboard` (0.2.11 → [0.2.12](../../changelogs/@backstage/plugin-newrelic-dashboard.md#0212))
- `@backstage/plugin-org-react` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-org-react.md#018))
- `@backstage/plugin-periskop` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-periskop.md#0117))
- `@backstage/plugin-periskop-backend` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-periskop-backend.md#0117))
- `@backstage/plugin-permission-backend` (0.5.20 → [0.5.21](../../changelogs/@backstage/plugin-permission-backend.md#0521))
- `@backstage/plugin-permission-common` (0.7.5 → [0.7.6](../../changelogs/@backstage/plugin-permission-common.md#076))
- `@backstage/plugin-permission-node` (0.7.8 → [0.7.9](../../changelogs/@backstage/plugin-permission-node.md#079))
- `@backstage/plugin-permission-react` (0.4.12 → [0.4.13](../../changelogs/@backstage/plugin-permission-react.md#0413))
- `@backstage/plugin-playlist-backend` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-playlist-backend.md#032))
- `@backstage/plugin-playlist-common` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-playlist-common.md#017))
- `@backstage/plugin-puppetdb` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-puppetdb.md#012))
- `@backstage/plugin-rollbar` (0.4.18 → [0.4.19](../../changelogs/@backstage/plugin-rollbar.md#0419))
- `@backstage/plugin-rollbar-backend` (0.1.42 → [0.1.43](../../changelogs/@backstage/plugin-rollbar-backend.md#0143))
- `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.21 → [0.2.22](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0222))
- `@backstage/plugin-scaffolder-backend-module-rails` (0.4.14 → [0.4.15](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0415))
- `@backstage/plugin-scaffolder-backend-module-sentry` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#016))
- `@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.18 → [0.2.19](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0219))
- `@backstage/plugin-scaffolder-common` (1.3.0 → [1.3.1](../../changelogs/@backstage/plugin-scaffolder-common.md#131))
- `@backstage/plugin-scaffolder-node` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-scaffolder-node.md#014))
- `@backstage/plugin-search-backend-module-catalog` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#012))
- `@backstage/plugin-search-backend-module-elasticsearch` (1.3.0 → [1.3.1](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#131))
- `@backstage/plugin-search-backend-module-techdocs` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#012))
- `@backstage/plugin-search-backend-node` (1.2.1 → [1.2.2](../../changelogs/@backstage/plugin-search-backend-node.md#122))
- `@backstage/plugin-search-common` (1.2.3 → [1.2.4](../../changelogs/@backstage/plugin-search-common.md#124))
- `@backstage/plugin-sentry` (0.5.3 → [0.5.4](../../changelogs/@backstage/plugin-sentry.md#054))
- `@backstage/plugin-sonarqube-react` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-sonarqube-react.md#016))
- `@backstage/plugin-splunk-on-call` (0.4.7 → [0.4.8](../../changelogs/@backstage/plugin-splunk-on-call.md#048))
- `@backstage/plugin-stack-overflow-backend` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-stack-overflow-backend.md#022))
- `@backstage/plugin-stackstorm` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-stackstorm.md#013))
- `@backstage/plugin-tech-insights-backend` (0.5.11 → [0.5.12](../../changelogs/@backstage/plugin-tech-insights-backend.md#0512))
- `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.29 → [0.1.30](../../changelogs/@backstage/plugin-tech-insights-backend-module-jsonfc.md#0130))
- `@backstage/plugin-tech-insights-common` (0.2.10 → [0.2.11](../../changelogs/@backstage/plugin-tech-insights-common.md#0211))
- `@backstage/plugin-tech-insights-node` (0.4.3 → [0.4.4](../../changelogs/@backstage/plugin-tech-insights-node.md#044))
- `@backstage/plugin-tech-radar` (0.6.4 → [0.6.5](../../changelogs/@backstage/plugin-tech-radar.md#065))
- `@backstage/plugin-techdocs-backend` (1.6.2 → [1.6.3](../../changelogs/@backstage/plugin-techdocs-backend.md#163))
- `@backstage/plugin-techdocs-module-addons-contrib` (1.0.13 → [1.0.14](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1014))
- `@backstage/plugin-todo` (0.2.20 → [0.2.21](../../changelogs/@backstage/plugin-todo.md#0221))
- `@backstage/plugin-todo-backend` (0.1.42 → [0.1.43](../../changelogs/@backstage/plugin-todo-backend.md#0143))
- `@backstage/plugin-user-settings-backend` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-user-settings-backend.md#0110))
- `@backstage/plugin-vault` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-vault.md#0113))
- `@backstage/plugin-vault-backend` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-vault-backend.md#032))
- `@backstage/plugin-xcmetrics` (0.2.38 → [0.2.39](../../changelogs/@backstage/plugin-xcmetrics.md#0239))
