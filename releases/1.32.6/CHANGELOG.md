# Backstage Release 1.32.6 changelog

Changes between 1.32.5 and 1.32.6 — 19 changed and 0 added packages.

## `@backstage/backend-dynamic-feature-service` (0.4.3 → 0.4.4)

_No changelog entries found._

## `@backstage/plugin-scaffolder-backend` (1.26.2 → 1.26.3)

_No changelog entries found._

## `@backstage/plugin-scaffolder-backend-module-azure` (0.2.1 → 0.2.2)

### 0.2.2

#### Patch Changes

- Updated dependencies
  - @backstage/config@1.3.0
  - @backstage/backend-plugin-api@1.0.2
  - @backstage/plugin-scaffolder-node@0.6.0
  - @backstage/errors@1.2.5
  - @backstage/integration@1.15.2

## `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.3.1 → 0.3.2)

### 0.3.2

#### Patch Changes

- Updated dependencies
  - @backstage/config@1.3.0
  - @backstage/backend-plugin-api@1.0.2
  - @backstage/plugin-scaffolder-backend-module-bitbucket-server@0.2.2
  - @backstage/plugin-scaffolder-backend-module-bitbucket-cloud@0.2.2
  - @backstage/plugin-scaffolder-node@0.6.0
  - @backstage/errors@1.2.5
  - @backstage/integration@1.15.2

## `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.2.1 → 0.2.2)

### 0.2.2

#### Patch Changes

- 9cf827c: Fix double branch creation in `public:bitbucket{Cloud,Server}:pull-request`
  This resulted in the following error when using the actions:

  ```
  AlreadyExistsError: Failed to create branch at create-test because it already exists.
  ```

  The issue was original introduced in d103a48fa306d745599dc0c793668c9e6a479d32

- Updated dependencies
  - @backstage/config@1.3.0
  - @backstage/plugin-bitbucket-cloud-common@0.2.25
  - @backstage/backend-plugin-api@1.0.2
  - @backstage/plugin-scaffolder-node@0.6.0
  - @backstage/errors@1.2.5
  - @backstage/integration@1.15.2

## `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.1 → 0.2.2)

### 0.2.2

#### Patch Changes

- 9cf827c: Fix double branch creation in `public:bitbucket{Cloud,Server}:pull-request`
  This resulted in the following error when using the actions:

  ```
  AlreadyExistsError: Failed to create branch at create-test because it already exists.
  ```

  The issue was original introduced in d103a48fa306d745599dc0c793668c9e6a479d32

- Updated dependencies
  - @backstage/config@1.3.0
  - @backstage/backend-plugin-api@1.0.2
  - @backstage/plugin-scaffolder-node@0.6.0
  - @backstage/errors@1.2.5
  - @backstage/integration@1.15.2

## `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.1 → 0.3.2)

### 0.3.2

#### Patch Changes

- Updated dependencies
  - @backstage/config@1.3.0
  - @backstage/backend-plugin-api@1.0.2
  - @backstage/plugin-scaffolder-node@0.6.0
  - @backstage/errors@1.2.5
  - @backstage/integration@1.15.2

## `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.2 → 0.3.3)

### 0.3.3

#### Patch Changes

- Updated dependencies
  - @backstage/config@1.3.0
  - @backstage/backend-defaults@0.5.3
  - @backstage/types@1.2.0
  - @backstage/backend-plugin-api@1.0.2
  - @backstage/plugin-scaffolder-node@0.6.0
  - @backstage/errors@1.2.5
  - @backstage/integration@1.15.2

## `@backstage/plugin-scaffolder-backend-module-gcp` (0.2.1 → 0.2.2)

### 0.2.2

#### Patch Changes

- Updated dependencies
  - @backstage/config@1.3.0
  - @backstage/backend-plugin-api@1.0.2
  - @backstage/plugin-scaffolder-node@0.6.0
  - @backstage/errors@1.2.5
  - @backstage/integration@1.15.2

## `@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.1 → 0.2.2)

### 0.2.2

#### Patch Changes

- Updated dependencies
  - @backstage/config@1.3.0
  - @backstage/backend-plugin-api@1.0.2
  - @backstage/plugin-scaffolder-node@0.6.0
  - @backstage/errors@1.2.5
  - @backstage/integration@1.15.2

## `@backstage/plugin-scaffolder-backend-module-gitea` (0.2.1 → 0.2.2)

### 0.2.2

#### Patch Changes

- Updated dependencies
  - @backstage/config@1.3.0
  - @backstage/backend-plugin-api@1.0.2
  - @backstage/plugin-scaffolder-node@0.6.0
  - @backstage/errors@1.2.5
  - @backstage/integration@1.15.2

## `@backstage/plugin-scaffolder-backend-module-github` (0.5.1 → 0.5.2)

### 0.5.2

#### Patch Changes

- Updated dependencies
  - @backstage/catalog-client@1.8.0
  - @backstage/config@1.3.0
  - @backstage/backend-plugin-api@1.0.2
  - @backstage/plugin-scaffolder-node@0.6.0
  - @backstage/catalog-model@1.7.1
  - @backstage/errors@1.2.5
  - @backstage/integration@1.15.2

## `@backstage/plugin-scaffolder-backend-module-gitlab` (0.6.0 → 0.6.1)

### 0.6.1

#### Patch Changes

- cdc8b4c: Improve error messages from Gitlab
- 2dbdccb: Removed circular import
- Updated dependencies
  - @backstage/config@1.3.0
  - @backstage/backend-plugin-api@1.0.2
  - @backstage/plugin-scaffolder-node@0.6.0
  - @backstage/errors@1.2.5
  - @backstage/integration@1.15.2

## `@backstage/plugin-scaffolder-backend-module-notifications` (0.1.2 → 0.1.3)

### 0.1.3

#### Patch Changes

- 5d74716: Remove unused backend-common dependency
- Updated dependencies
  - @backstage/backend-plugin-api@1.0.2
  - @backstage/plugin-notifications-common@0.0.6
  - @backstage/plugin-notifications-node@0.2.9
  - @backstage/plugin-scaffolder-node@0.6.0

## `@backstage/plugin-scaffolder-backend-module-rails` (0.5.1 → 0.5.2)

### 0.5.2

#### Patch Changes

- 702f41d: Bumped dev dependencies `@types/node`
- Updated dependencies
  - @backstage/config@1.3.0
  - @backstage/types@1.2.0
  - @backstage/backend-plugin-api@1.0.2
  - @backstage/plugin-scaffolder-node@0.6.0
  - @backstage/errors@1.2.5
  - @backstage/integration@1.15.2

## `@backstage/plugin-scaffolder-backend-module-sentry` (0.2.1 → 0.2.2)

### 0.2.2

#### Patch Changes

- Updated dependencies
  - @backstage/config@1.3.0
  - @backstage/backend-plugin-api@1.0.2
  - @backstage/plugin-scaffolder-node@0.6.0
  - @backstage/errors@1.2.5

## `@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.2 → 0.4.3)

### 0.4.3

#### Patch Changes

- 5d74716: Remove unused backend-common dependency
- Updated dependencies
  - @backstage/types@1.2.0
  - @backstage/backend-plugin-api@1.0.2
  - @backstage/plugin-scaffolder-node@0.6.0
  - @backstage/plugin-scaffolder-node-test-utils@0.1.15

## `@backstage/plugin-scaffolder-node` (0.5.0 → 0.5.1)

_No changelog entries found._

## `@backstage/plugin-scaffolder-node-test-utils` (0.1.14 → 0.1.15)

### 0.1.15

#### Patch Changes

- Updated dependencies
  - @backstage/types@1.2.0
  - @backstage/backend-test-utils@1.1.0
  - @backstage/plugin-scaffolder-node@0.6.0
