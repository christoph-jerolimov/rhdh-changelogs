# Backstage Release 1.32.6 changelog

Changes between 1.32.5 and 1.32.6 — 19 changed and 0 added packages.

## Summary

- [Patch version bumps](#patch-version-bumps): 9 packages

## Table of contents

- [Patch version bumps](#patch-version-bumps)
  - [`@backstage/backend-dynamic-feature-service` (0.4.3 → 0.4.4)](#backstagebackend-dynamic-feature-service-043--044)
  - [`@backstage/plugin-scaffolder-backend` (1.26.2 → 1.26.3)](#backstageplugin-scaffolder-backend-1262--1263)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.2.1 → 0.2.2)](#backstageplugin-scaffolder-backend-module-bitbucket-cloud-021--022)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.1 → 0.2.2)](#backstageplugin-scaffolder-backend-module-bitbucket-server-021--022)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.6.0 → 0.6.1)](#backstageplugin-scaffolder-backend-module-gitlab-060--061)
  - [`@backstage/plugin-scaffolder-backend-module-notifications` (0.1.2 → 0.1.3)](#backstageplugin-scaffolder-backend-module-notifications-012--013)
  - [`@backstage/plugin-scaffolder-backend-module-rails` (0.5.1 → 0.5.2)](#backstageplugin-scaffolder-backend-module-rails-051--052)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.2 → 0.4.3)](#backstageplugin-scaffolder-backend-module-yeoman-042--043)
  - [`@backstage/plugin-scaffolder-node` (0.5.0 → 0.5.1)](#backstageplugin-scaffolder-node-050--051)

## Patch version bumps

### `@backstage/backend-dynamic-feature-service` (0.4.3 → 0.4.4)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend` (1.26.2 → 1.26.3)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.2.1 → 0.2.2)

#### 0.2.2

##### Patch Changes

- 9cf827c: Fix double branch creation in `public:bitbucket{Cloud,Server}:pull-request`
  This resulted in the following error when using the actions:

  ```
  AlreadyExistsError: Failed to create branch at create-test because it already exists.
  ```

  The issue was original introduced in d103a48fa306d745599dc0c793668c9e6a479d32

### `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.1 → 0.2.2)

#### 0.2.2

##### Patch Changes

- 9cf827c: Fix double branch creation in `public:bitbucket{Cloud,Server}:pull-request`
  This resulted in the following error when using the actions:

  ```
  AlreadyExistsError: Failed to create branch at create-test because it already exists.
  ```

  The issue was original introduced in d103a48fa306d745599dc0c793668c9e6a479d32

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.6.0 → 0.6.1)

#### 0.6.1

##### Patch Changes

- cdc8b4c: Improve error messages from Gitlab
- 2dbdccb: Removed circular import

### `@backstage/plugin-scaffolder-backend-module-notifications` (0.1.2 → 0.1.3)

#### 0.1.3

##### Patch Changes

- 5d74716: Remove unused backend-common dependency

### `@backstage/plugin-scaffolder-backend-module-rails` (0.5.1 → 0.5.2)

#### 0.5.2

##### Patch Changes

- 702f41d: Bumped dev dependencies `@types/node`

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.2 → 0.4.3)

#### 0.4.3

##### Patch Changes

- 5d74716: Remove unused backend-common dependency

### `@backstage/plugin-scaffolder-node` (0.5.0 → 0.5.1)

_No changelog entries found._

_Excluded dependency updates for packages: `@backstage/plugin-scaffolder-backend-module-azure`, `@backstage/plugin-scaffolder-backend-module-bitbucket`, `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown`, `@backstage/plugin-scaffolder-backend-module-cookiecutter`, `@backstage/plugin-scaffolder-backend-module-gcp`, `@backstage/plugin-scaffolder-backend-module-gerrit`, `@backstage/plugin-scaffolder-backend-module-gitea`, `@backstage/plugin-scaffolder-backend-module-github`, `@backstage/plugin-scaffolder-backend-module-sentry`, `@backstage/plugin-scaffolder-node-test-utils`._
