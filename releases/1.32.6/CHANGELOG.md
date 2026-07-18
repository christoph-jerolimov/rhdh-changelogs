# Backstage Release 1.32.6 changelog

Changes between 1.32.5 and 1.32.6 — 19 changed and 0 added packages.

## Summary

- [Patch version bumps](#patch-version-bumps): 9 packages
- [Excluded dependency updates](#excluded-dependency-updates): 10 packages

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
- [Excluded dependency updates](#excluded-dependency-updates)

## Patch version bumps

### `@backstage/backend-dynamic-feature-service` (0.4.3 → [0.4.4](../../changelogs/@backstage/backend-dynamic-feature-service.md#044))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend` (1.26.2 → [1.26.3](../../changelogs/@backstage/plugin-scaffolder-backend.md#1263))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#022))

#### 0.2.2

##### Patch Changes

- [`9cf827c`](https://github.com/backstage/backstage/commit/9cf827c): Fix double branch creation in `public:bitbucket{Cloud,Server}:pull-request`
  This resulted in the following error when using the actions:

  ```
  AlreadyExistsError: Failed to create branch at create-test because it already exists.
  ```

  The issue was original introduced in d103a48fa306d745599dc0c793668c9e6a479d32

### `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#022))

#### 0.2.2

##### Patch Changes

- [`9cf827c`](https://github.com/backstage/backstage/commit/9cf827c): Fix double branch creation in `public:bitbucket{Cloud,Server}:pull-request`
  This resulted in the following error when using the actions:

  ```
  AlreadyExistsError: Failed to create branch at create-test because it already exists.
  ```

  The issue was original introduced in d103a48fa306d745599dc0c793668c9e6a479d32

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.6.0 → [0.6.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#061))

#### 0.6.1

##### Patch Changes

- [`cdc8b4c`](https://github.com/backstage/backstage/commit/cdc8b4c): Improve error messages from Gitlab
- [`2dbdccb`](https://github.com/backstage/backstage/commit/2dbdccb): Removed circular import

### `@backstage/plugin-scaffolder-backend-module-notifications` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-scaffolder-backend-module-notifications.md#013))

#### 0.1.3

##### Patch Changes

- [`5d74716`](https://github.com/backstage/backstage/commit/5d74716): Remove unused backend-common dependency

### `@backstage/plugin-scaffolder-backend-module-rails` (0.5.1 → [0.5.2](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#052))

#### 0.5.2

##### Patch Changes

- [`702f41d`](https://github.com/backstage/backstage/commit/702f41d): Bumped dev dependencies `@types/node`

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.2 → [0.4.3](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#043))

#### 0.4.3

##### Patch Changes

- [`5d74716`](https://github.com/backstage/backstage/commit/5d74716): Remove unused backend-common dependency

### `@backstage/plugin-scaffolder-node` (0.5.0 → [0.5.1](../../changelogs/@backstage/plugin-scaffolder-node.md#051))

_No changelog entries found._

## Excluded dependency updates

- `@backstage/plugin-scaffolder-backend-module-azure` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#022))
- `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket.md#032))
- `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#032))
- `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#033))
- `@backstage/plugin-scaffolder-backend-module-gcp` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-scaffolder-backend-module-gcp.md#022))
- `@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#022))
- `@backstage/plugin-scaffolder-backend-module-gitea` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#022))
- `@backstage/plugin-scaffolder-backend-module-github` (0.5.1 → [0.5.2](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#052))
- `@backstage/plugin-scaffolder-backend-module-sentry` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#022))
- `@backstage/plugin-scaffolder-node-test-utils` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#0115))
