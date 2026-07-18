# Backstage Release 1.31.4 changelog

Changes between 1.31.3 and 1.31.4 — 19 changed and 0 added packages.

## Summary

- [Patch version bumps](#patch-version-bumps): 14 packages
- [Excluded dependency updates](#excluded-dependency-updates): 5 packages

## Table of contents

- [Patch version bumps](#patch-version-bumps)
  - [`@backstage/backend-dynamic-feature-service` (0.4.1 → 0.4.2)](#backstagebackend-dynamic-feature-service-041--042)
  - [`@backstage/plugin-scaffolder-backend` (1.25.0 → 1.25.1)](#backstageplugin-scaffolder-backend-1250--1251)
  - [`@backstage/plugin-scaffolder-backend-module-azure` (0.2.0 → 0.2.1)](#backstageplugin-scaffolder-backend-module-azure-020--021)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.0 → 0.2.1)](#backstageplugin-scaffolder-backend-module-bitbucket-server-020--021)
  - [`@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.0 → 0.3.1)](#backstageplugin-scaffolder-backend-module-confluence-to-markdown-030--031)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.0 → 0.3.1)](#backstageplugin-scaffolder-backend-module-cookiecutter-030--031)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.5.0 → 0.5.1)](#backstageplugin-scaffolder-backend-module-github-050--051)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.5.0 → 0.5.1)](#backstageplugin-scaffolder-backend-module-gitlab-050--051)
  - [`@backstage/plugin-scaffolder-backend-module-notifications` (0.1.0 → 0.1.1)](#backstageplugin-scaffolder-backend-module-notifications-010--011)
  - [`@backstage/plugin-scaffolder-backend-module-rails` (0.5.0 → 0.5.1)](#backstageplugin-scaffolder-backend-module-rails-050--051)
  - [`@backstage/plugin-scaffolder-backend-module-sentry` (0.2.0 → 0.2.1)](#backstageplugin-scaffolder-backend-module-sentry-020--021)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.0 → 0.4.1)](#backstageplugin-scaffolder-backend-module-yeoman-040--041)
  - [`@backstage/plugin-scaffolder-node` (0.4.11 → 0.4.12)](#backstageplugin-scaffolder-node-0411--0412)
  - [`@backstage/plugin-scaffolder-node-test-utils` (0.1.12 → 0.1.13)](#backstageplugin-scaffolder-node-test-utils-0112--0113)
- [Excluded dependency updates](#excluded-dependency-updates)

## Patch version bumps

### `@backstage/backend-dynamic-feature-service` (0.4.1 → [0.4.2](../../changelogs/@backstage/backend-dynamic-feature-service.md#042))

#### 0.4.2

##### Patch Changes

- [`d18d494`](https://github.com/backstage/backstage/commit/d18d494): Enhance and simplify the activation of the dynamic plugins feature:

  - The dynamic plugins service (which implements the `DynamicPluginsProvider`) is restored, since it is required for plugins to depend on it in order to get the details of loaded dynamic plugins (possibly with loading errors to be surfaced in some UI).
  - A new all-in-one feature loader (`dynamicPluginsFeatureLoader`) is provided that allows a 1-liner activation of both the dynamic features and additional services or plugins required to have the dynamic plugins work correctly with dynamic plugins config schemas. Previous service factories or feature loaders are deprecated.

- [`e6c0550`](https://github.com/backstage/backstage/commit/e6c0550): Enhance the API of the `DynamicPluginProvider` (available as a service) to:

  - expose the new `getScannedPackage()` method that returns the `ScannedPluginPackage` from which a given plugin has been loaded,
  - add an optional `includeFailed` argument in the plugins list retrieval methods, to include the plugins that could be successfully loaded (`false` by default).

- [`4c89e47`](https://github.com/backstage/backstage/commit/4c89e47): Allow passing an async module loader in the `DynamicPluginsFeatureLoaderOptions`.
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`2f88f88`](https://github.com/backstage/backstage/commit/2f88f88): Updated backend installation instructions.

### `@backstage/plugin-scaffolder-backend` (1.25.0 → [1.25.1](../../changelogs/@backstage/plugin-scaffolder-backend.md#1251))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-azure` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#021))

#### 0.2.1

##### Patch Changes

- [`b06aa48`](https://github.com/backstage/backstage/commit/b06aa48): Updated dependency `azure-devops-node-api` to `^14.0.0`.

### `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#021))

#### 0.2.1

##### Patch Changes

- [`db54c57`](https://github.com/backstage/backstage/commit/db54c57): Add `reviewers` input parameter to `publish:bitbucketServer:pull-request`
- [`66a6b45`](https://github.com/backstage/backstage/commit/66a6b45): Use protocol from Bitbucket Server apiBaseUrl config parameter instead of hard-coded https

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#031))

#### 0.3.1

##### Patch Changes

- [`bc71718`](https://github.com/backstage/backstage/commit/bc71718): Updated installation instructions in README to not include `/alpha`.
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`720a2f9`](https://github.com/backstage/backstage/commit/720a2f9): Updated dependency `git-url-parse` to `^15.0.0`.

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#031))

#### 0.3.1

##### Patch Changes

- [`bc71718`](https://github.com/backstage/backstage/commit/bc71718): Updated installation instructions in README to not include `/alpha`.
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

### `@backstage/plugin-scaffolder-backend-module-github` (0.5.0 → [0.5.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#051))

#### 0.5.1

##### Patch Changes

- [`8ce0c4c`](https://github.com/backstage/backstage/commit/8ce0c4c): Add `github:branch-protection:create` scaffolder action to set branch protection on an existing repository. Example usage:

  ```yaml
  - id: set-branch-protection
    name: Set Branch Protection
    action: github:branch-protection:create
    input:
      repoUrl: 'github.com?repo=backstage&owner=backstage'
      branch: master
      enforceAdmins: true # default
      requiredApprovingReviewCount: 1 # default
      requireBranchesToBeUpToDate: true # default
      requireCodeOwnerReviews: true
      dismissStaleReviews: true
      requiredConversationResolution: true
  ```

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.5.0 → [0.5.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#051))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-notifications` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-notifications.md#011))

#### 0.1.1

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

### `@backstage/plugin-scaffolder-backend-module-rails` (0.5.0 → [0.5.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#051))

#### 0.5.1

##### Patch Changes

- [`bc71718`](https://github.com/backstage/backstage/commit/bc71718): Updated installation instructions in README to not include `/alpha`.
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

### `@backstage/plugin-scaffolder-backend-module-sentry` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#021))

#### 0.2.1

##### Patch Changes

- [`bc71718`](https://github.com/backstage/backstage/commit/bc71718): Updated installation instructions in README to not include `/alpha`.

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.0 → [0.4.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#041))

#### 0.4.1

##### Patch Changes

- [`bc71718`](https://github.com/backstage/backstage/commit/bc71718): Updated installation instructions in README to not include `/alpha`.
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

### `@backstage/plugin-scaffolder-node` (0.4.11 → [0.4.12](../../changelogs/@backstage/plugin-scaffolder-node.md#0412))

_No changelog entries found._

### `@backstage/plugin-scaffolder-node-test-utils` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#0113))

#### 0.1.13

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

## Excluded dependency updates

- `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket.md#031))
- `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#021))
- `@backstage/plugin-scaffolder-backend-module-gcp` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-gcp.md#021))
- `@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#021))
- `@backstage/plugin-scaffolder-backend-module-gitea` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#021))
