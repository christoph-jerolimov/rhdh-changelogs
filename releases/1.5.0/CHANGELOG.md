# Backstage Release 1.5.0 changelog

Changes between 1.4.0 and 1.5.0 — 139 changed and 4 added packages.

## Summary

- [Newly added packages](#newly-added-packages): 4 packages
- [Breaking changes](#breaking-changes): 5 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 4 packages
- [Other minor version bumps](#other-minor-version-bumps): 6 packages
- [Patch version bumps](#patch-version-bumps): 41 packages
- [Excluded dependency updates](#excluded-dependency-updates): 83 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/backend-defaults` (new, 0.1.0)](#backstagebackend-defaults-new-010)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (new, 0.1.0)](#backstageplugin-catalog-backend-module-bitbucket-server-new-010)
  - [`@backstage/plugin-github-issues` (new, 0.1.0)](#backstageplugin-github-issues-new-010)
  - [`@backstage/plugin-sonarqube-backend` (new, 0.1.0)](#backstageplugin-sonarqube-backend-new-010)
- [Breaking changes](#breaking-changes)
  - [`@backstage/core-plugin-api` (1.0.4 → 1.0.5)](#backstagecore-plugin-api-104--105)
  - [`@backstage/plugin-adr` (0.1.2 → 0.2.0)](#backstageplugin-adr-012--020)
  - [`@backstage/plugin-adr-backend` (0.1.2 → 0.2.0)](#backstageplugin-adr-backend-012--020)
  - [`@backstage/plugin-adr-common` (0.1.2 → 0.2.0)](#backstageplugin-adr-common-012--020)
  - [`@backstage/plugin-sonarqube` (0.3.7 → 0.4.0)](#backstageplugin-sonarqube-037--040)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/backend-app-api` (0.1.0 → 0.2.0)](#backstagebackend-app-api-010--020)
  - [`@backstage/backend-common` (0.14.1 → 0.15.0)](#backstagebackend-common-0141--0150)
  - [`@backstage/core-components` (0.10.0 → 0.11.0)](#backstagecore-components-0100--0110)
  - [`@backstage/plugin-shortcuts` (0.2.8 → 0.3.0)](#backstageplugin-shortcuts-028--030)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/integration` (1.2.2 → 1.3.0)](#backstageintegration-122--130)
  - [`@backstage/plugin-catalog` (1.4.0 → 1.5.0)](#backstageplugin-catalog-140--150)
  - [`@backstage/plugin-scaffolder` (1.4.0 → 1.5.0)](#backstageplugin-scaffolder-140--150)
  - [`@backstage/plugin-scaffolder-backend` (1.4.0 → 1.5.0)](#backstageplugin-scaffolder-backend-140--150)
  - [`@backstage/plugin-techdocs-node` (1.2.0 → 1.3.0)](#backstageplugin-techdocs-node-120--130)
  - [`@techdocs/cli` (1.1.3 → 1.2.0)](#techdocscli-113--120)
- [Patch version bumps](#patch-version-bumps)
  - [`@backstage/backend-plugin-api` (0.1.0 → 0.1.1)](#backstagebackend-plugin-api-010--011)
  - [`@backstage/backend-tasks` (0.3.3 → 0.3.4)](#backstagebackend-tasks-033--034)
  - [`@backstage/backend-test-utils` (0.1.26 → 0.1.27)](#backstagebackend-test-utils-0126--0127)
  - [`@backstage/cli` (0.18.0 → 0.18.1)](#backstagecli-0180--0181)
  - [`@backstage/create-app` (0.4.29 → 0.4.30)](#backstagecreate-app-0429--0430)
  - [`@backstage/plugin-api-docs` (0.8.7 → 0.8.8)](#backstageplugin-api-docs-087--088)
  - [`@backstage/plugin-auth-backend` (0.15.0 → 0.15.1)](#backstageplugin-auth-backend-0150--0151)
  - [`@backstage/plugin-catalog-backend` (1.3.0 → 1.3.1)](#backstageplugin-catalog-backend-130--131)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.1.7 → 0.1.8)](#backstageplugin-catalog-backend-module-aws-017--018)
  - [`@backstage/plugin-catalog-backend-module-github` (0.1.5 → 0.1.6)](#backstageplugin-catalog-backend-module-github-015--016)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.1.5 → 0.1.6)](#backstageplugin-catalog-backend-module-gitlab-015--016)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.4.0 → 0.4.1)](#backstageplugin-catalog-backend-module-msgraph-040--041)
  - [`@backstage/plugin-catalog-backend-module-openapi` (0.1.0 → 0.1.1)](#backstageplugin-catalog-backend-module-openapi-010--011)
  - [`@backstage/plugin-catalog-common` (1.0.4 → 1.0.5)](#backstageplugin-catalog-common-104--105)
  - [`@backstage/plugin-catalog-graphql` (0.3.11 → 0.3.12)](#backstageplugin-catalog-graphql-0311--0312)
  - [`@backstage/plugin-catalog-node` (1.0.0 → 1.0.1)](#backstageplugin-catalog-node-100--101)
  - [`@backstage/plugin-catalog-react` (1.1.2 → 1.1.3)](#backstageplugin-catalog-react-112--113)
  - [`@backstage/plugin-cicd-statistics` (0.1.9 → 0.1.10)](#backstageplugin-cicd-statistics-019--0110)
  - [`@backstage/plugin-code-climate` (0.1.7 → 0.1.8)](#backstageplugin-code-climate-017--018)
  - [`@backstage/plugin-cost-insights` (0.11.29 → 0.11.30)](#backstageplugin-cost-insights-01129--01130)
  - [`@backstage/plugin-cost-insights-common` (0.1.0 → 0.1.1)](#backstageplugin-cost-insights-common-010--011)
  - [`@backstage/plugin-github-pull-requests-board` (0.1.1 → 0.1.2)](#backstageplugin-github-pull-requests-board-011--012)
  - [`@backstage/plugin-gocd` (0.1.13 → 0.1.14)](#backstageplugin-gocd-0113--0114)
  - [`@backstage/plugin-graphiql` (0.2.39 → 0.2.40)](#backstageplugin-graphiql-0239--0240)
  - [`@backstage/plugin-graphql-backend` (0.1.24 → 0.1.25)](#backstageplugin-graphql-backend-0124--0125)
  - [`@backstage/plugin-home` (0.4.23 → 0.4.24)](#backstageplugin-home-0423--0424)
  - [`@backstage/plugin-kafka` (0.3.7 → 0.3.8)](#backstageplugin-kafka-037--038)
  - [`@backstage/plugin-kubernetes` (0.7.0 → 0.7.1)](#backstageplugin-kubernetes-070--071)
  - [`@backstage/plugin-kubernetes-backend` (0.7.0 → 0.7.1)](#backstageplugin-kubernetes-backend-070--071)
  - [`@backstage/plugin-kubernetes-common` (0.4.0 → 0.4.1)](#backstageplugin-kubernetes-common-040--041)
  - [`@backstage/plugin-periskop` (0.1.5 → 0.1.6)](#backstageplugin-periskop-015--016)
  - [`@backstage/plugin-sentry` (0.4.0 → 0.4.1)](#backstageplugin-sentry-040--041)
  - [`@backstage/plugin-splunk-on-call` (0.3.31 → 0.3.32)](#backstageplugin-splunk-on-call-0331--0332)
  - [`@backstage/plugin-stack-overflow-backend` (0.1.3 → 0.1.4)](#backstageplugin-stack-overflow-backend-013--014)
  - [`@backstage/plugin-tech-insights-common` (0.2.5 → 0.2.6)](#backstageplugin-tech-insights-common-025--026)
  - [`@backstage/plugin-tech-insights-node` (0.3.2 → 0.3.3)](#backstageplugin-tech-insights-node-032--033)
  - [`@backstage/plugin-tech-radar` (0.5.14 → 0.5.15)](#backstageplugin-tech-radar-0514--0515)
  - [`@backstage/plugin-techdocs` (1.3.0 → 1.3.1)](#backstageplugin-techdocs-130--131)
  - [`@backstage/plugin-techdocs-module-addons-contrib` (1.0.2 → 1.0.3)](#backstageplugin-techdocs-module-addons-contrib-102--103)
  - [`@backstage/plugin-techdocs-react` (1.0.2 → 1.0.3)](#backstageplugin-techdocs-react-102--103)
  - [`@backstage/plugin-xcmetrics` (0.2.27 → 0.2.28)](#backstageplugin-xcmetrics-0227--0228)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/backend-defaults` (new, [0.1.0](../../changelogs/@backstage/backend-defaults.md#010))

#### 0.1.0

##### Minor Changes

- [`5df230d48c`](https://github.com/backstage/backstage/commit/5df230d48c): Introduced a new `backend-defaults` package carrying `createBackend` which was previously exported from `backend-app-api`.
  The `backend-app-api` package now exports the `createSpecializedBacked` that does not add any service factories by default.

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (new, [0.1.0](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#010))

#### 0.1.0

##### Minor Changes

- [`f7607f9d85`](https://github.com/backstage/backstage/commit/f7607f9d85): Add new plugin catalog-backend-module-bitbucket-server which adds the `BitbucketServerEntityProvider`.

  The entity provider is meant as a replacement for the `BitbucketDiscoveryProcessor` to be used with Bitbucket Server (Bitbucket Cloud already has a replacement).

  **Before:**

  ```typescript
  // packages/backend/src/plugins/catalog.ts
  builder.addProcessor(
    BitbucketDiscoveryProcessor.fromConfig(env.config, { logger: env.logger }),
  );
  ```

  ```yaml
  # app-config.yaml
  catalog:
    locations:
      - type: bitbucket-discovery
        target: 'https://bitbucket.mycompany.com/projects/*/repos/*/catalog-info.yaml
  ```

  **After:**

  ```typescript
  // packages/backend/src/plugins/catalog.ts
  builder.addEntityProvider(
    BitbucketServerEntityProvider.fromConfig(env.config, {
      logger: env.logger,
      schedule: env.scheduler.createScheduledTaskRunner({
        frequency: { minutes: 30 },
        timeout: { minutes: 3 },
      }),
    }),
  );
  ```

  ```yaml
  # app-config.yaml
  catalog:
    providers:
      bitbucketServer:
        yourProviderId: # identifies your ingested dataset
          catalogPath: /catalog-info.yaml # default value
          filters: # optional
            projectKey: '.*' # optional; RegExp
            repoSlug: '.*' # optional; RegExp
  ```

### `@backstage/plugin-github-issues` (new, [0.1.0](../../changelogs/@backstage/plugin-github-issues.md#010))

#### 0.1.0

##### Minor Changes

- [`ffd5e47fb5`](https://github.com/backstage/backstage/commit/ffd5e47fb5): New plugin for displaying GitHub Issues added

##### Patch Changes

- [`347ea327c2`](https://github.com/backstage/backstage/commit/347ea327c2): Moved communication with GitHub graphql API to the dedicated plugin API.
  Fixes issue when no GitHub Issues are rendered when partial failure is returned from GitHub API.
- [`b522f49403`](https://github.com/backstage/backstage/commit/b522f49403): Updated dependency `@spotify/prettier-config` to `^14.0.0`.

### `@backstage/plugin-sonarqube-backend` (new, [0.1.0](../../changelogs/@backstage/plugin-sonarqube-backend.md#010))

#### 0.1.0

##### Minor Changes

- [`e2be9ab3a4`](https://github.com/backstage/backstage/commit/e2be9ab3a4): Initial creation of the plugin

## Breaking changes

### `@backstage/core-plugin-api` (1.0.4 → [1.0.5](../../changelogs/@backstage/core-plugin-api.md#105))

#### 1.0.5

##### Patch Changes

- [`80da5162c7`](https://github.com/backstage/backstage/commit/80da5162c7): Introduced a new experimental feature that allows you to declare plugin-wide options for your plugin by defining
  `__experimentalConfigure` in your `createPlugin` options. See https://backstage.io/docs/plugins/customization.md for more information.

  This is an experimental feature and it will have breaking changes in the future.

- [`87649a06bf`](https://github.com/backstage/backstage/commit/87649a06bf): Add a note that the `fetchApi` utility should not be used on sign-in page implementations and similar.

### `@backstage/plugin-adr` (0.1.2 → [0.2.0](../../changelogs/@backstage/plugin-adr.md#020))

#### 0.2.0

##### Minor Changes

- [`bfc7c50a09`](https://github.com/backstage/backstage/commit/bfc7c50a09): Display associated entity as a chip in `AdrSearchResultListItem`

  BREAKING: `AdrDocument` now includes a `entityRef` property, if you have a custom `AdrParser` you will have to supply this property in your returned documents

### `@backstage/plugin-adr-backend` (0.1.2 → [0.2.0](../../changelogs/@backstage/plugin-adr-backend.md#020))

#### 0.2.0

##### Minor Changes

- [`bfc7c50a09`](https://github.com/backstage/backstage/commit/bfc7c50a09): Display associated entity as a chip in `AdrSearchResultListItem`

  BREAKING: `AdrDocument` now includes a `entityRef` property, if you have a custom `AdrParser` you will have to supply this property in your returned documents

### `@backstage/plugin-adr-common` (0.1.2 → [0.2.0](../../changelogs/@backstage/plugin-adr-common.md#020))

#### 0.2.0

##### Minor Changes

- [`bfc7c50a09`](https://github.com/backstage/backstage/commit/bfc7c50a09): Display associated entity as a chip in `AdrSearchResultListItem`

  BREAKING: `AdrDocument` now includes a `entityRef` property, if you have a custom `AdrParser` you will have to supply this property in your returned documents

### `@backstage/plugin-sonarqube` (0.3.7 → [0.4.0](../../changelogs/@backstage/plugin-sonarqube.md#040))

#### 0.4.0

##### Minor Changes

- [`619b515172`](https://github.com/backstage/backstage/commit/619b515172): **BREAKING** This plugin now call the `sonarqube-backend` plugin instead of relying on the proxy plugin

  The whole proxy's `'/sonarqube':` key can be removed from your configuration files.

  Then head to the [README in sonarqube-backend plugin page](https://github.com/backstage/backstage/tree/master/plugins/sonarqube-backend/README.md) to learn how to set-up the link to your Sonarqube instances.

##### Patch Changes

- [`f9c310a439`](https://github.com/backstage/backstage/commit/f9c310a439): Add ability to provide an optional Sonarqube instance into the annotation in the `catalog-info.yaml` file

## 0.x minor version bumps

### `@backstage/backend-app-api` (0.1.0 → [0.2.0](../../changelogs/@backstage/backend-app-api.md#020))

#### 0.2.0

##### Minor Changes

- [`5df230d48c`](https://github.com/backstage/backstage/commit/5df230d48c): Introduced a new `backend-defaults` package carrying `createBackend` which was previously exported from `backend-app-api`.
  The `backend-app-api` package now exports the `createSpecializedBacked` that does not add any service factories by default.

##### Patch Changes

- [`0599732ec0`](https://github.com/backstage/backstage/commit/0599732ec0): Refactored experimental backend system with new type names.

### `@backstage/backend-common` (0.14.1 → [0.15.0](../../changelogs/@backstage/backend-common.md#0150))

#### 0.15.0

##### Minor Changes

- [`12e9b54f0e`](https://github.com/backstage/backstage/commit/12e9b54f0e): Added back support for when no branch is provided to the `UrlReader` for Bitbucket Server
- [`30012e7d8c`](https://github.com/backstage/backstage/commit/30012e7d8c): - Added `force` and `remoteRef` option to `push` method in `git` actions
  - Added `addRemote` and `deleteRemote` methods to `git` actions

##### Patch Changes

- [`fc8a5f797b`](https://github.com/backstage/backstage/commit/fc8a5f797b): Improve `scm/git` wrapper around `isomorphic-git` library :

  - Add `checkout` function,
  - Add optional `remoteRef` parameter in the `push` function.

- [`5e4dc173f7`](https://github.com/backstage/backstage/commit/5e4dc173f7): Added a second validation to the `dir()` method of ZIP archive responses returned from `readTree()` that ensures that extracted files do not fall outside the target directory.
- [`1732a18a7a`](https://github.com/backstage/backstage/commit/1732a18a7a): Exported `redactLogLine` function to be able to use it in custom loggers and renamed it to `redactWinstonLogLine`.
- [`3b7930b3e5`](https://github.com/backstage/backstage/commit/3b7930b3e5): Add support for Bearer Authorization header / token-based auth at Git commands.
- [`cfa078e255`](https://github.com/backstage/backstage/commit/cfa078e255): The `ZipArchiveResponse` now correctly handles corrupt ZIP archives.

  Before this change, certain corrupt ZIP archives either cause the inflater to throw (as expected), or will hang the parser indefinitely.

  By switching out the `zip` parsing library, we now write to a temporary directory, and load from disk which should ensure that the parsing of the `.zip` files are done correctly because `streaming` of `zip` paths is technically impossible without being able to parse the headers at the end of the file.

- [`770d3f92c4`](https://github.com/backstage/backstage/commit/770d3f92c4): The config prop `ensureExists` now applies to schema creation when `pluginDivisionMode` is set to `schema`. This means schemas will no longer accidentally be automatically created when `ensureExists` is set to `false`.
- [`29f782eb37`](https://github.com/backstage/backstage/commit/29f782eb37): Updated dependency `@types/luxon` to `^3.0.0`.

### `@backstage/core-components` (0.10.0 → [0.11.0](../../changelogs/@backstage/core-components.md#0110))

#### 0.11.0

##### Minor Changes

- [`d0eefc499a`](https://github.com/backstage/backstage/commit/d0eefc499a): Made the `to` prop of `Button` and `Link` more strict, only supporting plain strings. It used to be the case that this prop was unexpectedly too liberal, making it look like we supported the complex `react-router-dom` object form of the parameter as well, which led to unexpected results at runtime.

##### Patch Changes

- [`a22af3edc8`](https://github.com/backstage/backstage/commit/a22af3edc8): Adding a `className` prop to the `MarkdownContent` component

### `@backstage/plugin-shortcuts` (0.2.8 → [0.3.0](../../changelogs/@backstage/plugin-shortcuts.md#030))

#### 0.3.0

##### Minor Changes

- [`5b769fddb5`](https://github.com/backstage/backstage/commit/5b769fddb5): Internal observable replaced with a mapping from the storage API. This fixes shortcuts initialization when using firestore.

  `ShortcutApi.get` method, that returns an immediate snapshot of shortcuts, made public.

  Example of how to get and observe `shortcuts`:

  ```typescript
  const shortcutApi = useApi(shortcutsApiRef);
  const shortcuts = useObservable(shortcutApi.shortcut$(), shortcutApi.get());
  ```

## Other minor version bumps

### `@backstage/integration` (1.2.2 → [1.3.0](../../changelogs/@backstage/integration.md#130))

#### 1.3.0

##### Minor Changes

- [`593dea6710`](https://github.com/backstage/backstage/commit/593dea6710): Add support for Basic Auth for Bitbucket Server.
- [`ad35364e97`](https://github.com/backstage/backstage/commit/ad35364e97): feat(techdocs): add edit button support for bitbucketServer

##### Patch Changes

- [`163243a4d1`](https://github.com/backstage/backstage/commit/163243a4d1): Handle incorrect return type from Octokit paginate plugin to resolve reading URLs from GitHub
- [`c4b460a47d`](https://github.com/backstage/backstage/commit/c4b460a47d): Avoid double encoding of the file path in `getBitbucketDownloadUrl`
- [`29f782eb37`](https://github.com/backstage/backstage/commit/29f782eb37): Updated dependency `@types/luxon` to `^3.0.0`.
- [`1f27d83933`](https://github.com/backstage/backstage/commit/1f27d83933): Fixed bug in getGitLabFileFetchUrl where a target whose path did not contain the
  `/-/` scope would result in a fetch URL that did not support
  private-token-based authentication.

### `@backstage/plugin-catalog` (1.4.0 → [1.5.0](../../changelogs/@backstage/plugin-catalog.md#150))

#### 1.5.0

##### Minor Changes

- [`80da5162c7`](https://github.com/backstage/backstage/commit/80da5162c7): Plugin catalog has been modified to use an experimental feature where you can customize the title of the create button.

  You can modify it by doing:

  ```typescript jsx
  import { catalogPlugin } from '@backstage/plugin-catalog';

  catalogPlugin.__experimentalReconfigure({
    createButtonTitle: 'New',
  });
  ```

- [`fe94398418`](https://github.com/backstage/backstage/commit/fe94398418): Allow changing the subtitle of the `CatalogTable` component

### `@backstage/plugin-scaffolder` (1.4.0 → [1.5.0](../../changelogs/@backstage/plugin-scaffolder.md#150))

#### 1.5.0

##### Minor Changes

- [`c4b452e16a`](https://github.com/backstage/backstage/commit/c4b452e16a): Starting the implementation of the Wizard page for the `next` scaffolder plugin

### `@backstage/plugin-scaffolder-backend` (1.4.0 → [1.5.0](../../changelogs/@backstage/plugin-scaffolder-backend.md#150))

#### 1.5.0

##### Minor Changes

- [`c4b452e16a`](https://github.com/backstage/backstage/commit/c4b452e16a): Starting the implementation of the Wizard page for the `next` scaffolder plugin
- [`593dea6710`](https://github.com/backstage/backstage/commit/593dea6710): Add support for Basic Auth for Bitbucket Server.
- [`3b7930b3e5`](https://github.com/backstage/backstage/commit/3b7930b3e5): Add support for Bearer Authorization header / token-based auth at Git commands.
- [`3f1316f1c5`](https://github.com/backstage/backstage/commit/3f1316f1c5): User Bearer Authorization header at Git commands with token-based auth at Bitbucket Server.
- [`eeff5046ae`](https://github.com/backstage/backstage/commit/eeff5046ae): Updated `publish:gitlab:merge-request` action to allow commit updates and deletes
- [`692d5d3405`](https://github.com/backstage/backstage/commit/692d5d3405): Added `reviewers` and `teamReviewers` parameters to `publish:github:pull-request` action to add reviewers on the pull request created by the action

##### Patch Changes

- [`fc8a5f797b`](https://github.com/backstage/backstage/commit/fc8a5f797b): Add a `publish:gerrit:review` scaffolder action
- [`c971afbf21`](https://github.com/backstage/backstage/commit/c971afbf21): The `publish:file` action has been deprecated in favor of testing templates using the template editor instead. Note that this action is not and was never been installed by default.
- [`b10b6c4aa4`](https://github.com/backstage/backstage/commit/b10b6c4aa4): Fix issue on Windows where templated files where not properly skipped as intended.
- [`56e1b4b89c`](https://github.com/backstage/backstage/commit/56e1b4b89c): Fixed typos in alpha types.
- [`dad0f65494`](https://github.com/backstage/backstage/commit/dad0f65494): Fail gracefully if an invalid `Authorization` header is passed to `POST /v2/tasks`
- [`014b3b7776`](https://github.com/backstage/backstage/commit/014b3b7776): Add missing `res.end()` in scaffolder backend `EventStream` usage

### `@backstage/plugin-techdocs-node` (1.2.0 → [1.3.0](../../changelogs/@backstage/plugin-techdocs-node.md#130))

#### 1.3.0

##### Minor Changes

- [`ad35364e97`](https://github.com/backstage/backstage/commit/ad35364e97): feat(techdocs): add edit button support for bitbucketServer

##### Patch Changes

- [`c8196bd37d`](https://github.com/backstage/backstage/commit/c8196bd37d): Fix AWS S3 404 NotFound error

  When reading an object from the S3 bucket through a stream, the aws-sdk getObject() API may throw a 404 NotFound Error with no error message or, in fact, any sort of HTTP-layer error responses. These fail the @backstage/error's assertError() checks, so they must be wrapped. The test for this case was also updated to match the wrapped error message.

- [`f833344611`](https://github.com/backstage/backstage/commit/f833344611): Bump default `TechDocs` image to `v1.1.0`, see the release [here](https://github.com/backstage/techdocs-container/releases/tag/v1.1.0).

### `@techdocs/cli` (1.1.3 → [1.2.0](../../changelogs/@techdocs/cli.md#120))

#### 1.2.0

##### Minor Changes

- [`855952db53`](https://github.com/backstage/backstage/commit/855952db53): Added CLI option `--docker-option` to allow passing additional options to the `docker run` command executed my `serve` and `serve:mkdocs`.

## Patch version bumps

### `@backstage/backend-plugin-api` (0.1.0 → [0.1.1](../../changelogs/@backstage/backend-plugin-api.md#011))

#### 0.1.1

##### Patch Changes

- [`0599732ec0`](https://github.com/backstage/backstage/commit/0599732ec0): Refactored experimental backend system with new type names.
- [`34c2f5aca1`](https://github.com/backstage/backstage/commit/34c2f5aca1): The factory returned by `createBackendPlugin` and `createBackendModule` no longer require a parameter to be passed if the options are optional.

### `@backstage/backend-tasks` (0.3.3 → [0.3.4](../../changelogs/@backstage/backend-tasks.md#034))

#### 0.3.4

##### Patch Changes

- [`29f782eb37`](https://github.com/backstage/backstage/commit/29f782eb37): Updated dependency `@types/luxon` to `^3.0.0`.

### `@backstage/backend-test-utils` (0.1.26 → [0.1.27](../../changelogs/@backstage/backend-test-utils.md#0127))

#### 0.1.27

##### Patch Changes

- [`0599732ec0`](https://github.com/backstage/backstage/commit/0599732ec0): Refactored experimental backend system with new type names.
- [`56e1b4b89c`](https://github.com/backstage/backstage/commit/56e1b4b89c): Added alpha test helpers for the new experimental backend system.

### `@backstage/cli` (0.18.0 → [0.18.1](../../changelogs/@backstage/cli.md#0181))

#### 0.18.1

##### Patch Changes

- [`d45bbfeb69`](https://github.com/backstage/backstage/commit/d45bbfeb69): Linting is now ignored for any `.eslintrc.*` files, not just `.eslintrc.js`.
- [`72c228fdb8`](https://github.com/backstage/backstage/commit/72c228fdb8): Fixed a bug where `NODE_ENV` was not set in the environment when starting the backend in development mode. It has always been the case that Webpack transformed `NODE_ENV` when running in development mode, but this did not affect dependencies in `node_modules` as they are treated as external.
- [`a539564c0d`](https://github.com/backstage/backstage/commit/a539564c0d): Added Backstage version to output of `yarn backstage-cli info` command
- [`fd68d6f138`](https://github.com/backstage/backstage/commit/fd68d6f138): Added resolution of `.json` and `.wasm` files to the Webpack configuration in order to match defaults.
- [`94155a41e0`](https://github.com/backstage/backstage/commit/94155a41e0): Updated dependencies `@svgr/*` to `6.3.x`.

### `@backstage/create-app` (0.4.29 → [0.4.30](../../changelogs/@backstage/create-app.md#0430))

#### 0.4.30

##### Patch Changes

- [`73cee58fc2`](https://github.com/backstage/backstage/commit/73cee58fc2): Bumped create-app version.
- [`f762386d48`](https://github.com/backstage/backstage/commit/f762386d48): Bumped create-app version.
- [`b162bbf464`](https://github.com/backstage/backstage/commit/b162bbf464): Bumped create-app version.
- [`db76fc6255`](https://github.com/backstage/backstage/commit/db76fc6255): The `better-sqlite3` dependency has been moved back to production `"dependencies"` in `packages/backend/package.json`, with instructions in the Dockerfile to move it to `"devDependencies"` if desired. There is no need to apply this change to existing apps, unless you want your production image to have SQLite available as a database option.
- [`ab9edd8b58`](https://github.com/backstage/backstage/commit/ab9edd8b58): Updated backend to write stack trace when the backend fails to start up.

  To apply this change to your Backstage installation, make the following change to `packages/backend/src/index.ts`

  ```diff
      cors:
      origin: http://localhost:3000
  -    console.error(`Backend failed to start up, ${error}`);
  +    console.error('Backend failed to start up', error);
  ```

- [`0174a0a022`](https://github.com/backstage/backstage/commit/0174a0a022): Add `PATCH` and `HEAD` to the `Access-Control-Allow-Methods`.

  To apply this change to your Backstage installation make the following change to your `app-config.yaml`

  ```diff
     cors:
       origin: http://localhost:3000
  -    methods: [GET, POST, PUT, DELETE]
  +    methods: [GET, POST, PUT, DELETE, PATCH, HEAD]
  ```

### `@backstage/plugin-api-docs` (0.8.7 → [0.8.8](../../changelogs/@backstage/plugin-api-docs.md#088))

#### 0.8.8

##### Patch Changes

- [`dae12c71cf`](https://github.com/backstage/backstage/commit/dae12c71cf): Updated dependency `@asyncapi/react-component` to `1.0.0-next.40`.

### `@backstage/plugin-auth-backend` (0.15.0 → [0.15.1](../../changelogs/@backstage/plugin-auth-backend.md#0151))

#### 0.15.1

##### Patch Changes

- [`c676a9e07b`](https://github.com/backstage/backstage/commit/c676a9e07b): Fixed a bug in auth plugin on the backend where it ignores the skip migration database options when using the database provider.
- [`2d7d6028e1`](https://github.com/backstage/backstage/commit/2d7d6028e1): Updated dependency `@google-cloud/firestore` to `^6.0.0`.

### `@backstage/plugin-catalog-backend` (1.3.0 → [1.3.1](../../changelogs/@backstage/plugin-catalog-backend.md#131))

#### 1.3.1

##### Patch Changes

- [`56e1b4b89c`](https://github.com/backstage/backstage/commit/56e1b4b89c): Fixed typos in alpha types.
- [`e3d3018531`](https://github.com/backstage/backstage/commit/e3d3018531): Fix issue for conditional decisions based on properties stored as arrays, like tags.

  Before this change, having a permission policy returning conditional decisions based on metadata like tags, such like `createCatalogConditionalDecision(permission, catalogConditions.hasMetadata('tags', 'java'),)`, was producing wrong results. The issue occurred when authorizing entities already loaded from the database, for example when authorizing `catalogEntityDeletePermission`.

- [`059ae348b4`](https://github.com/backstage/backstage/commit/059ae348b4): Use the non-deprecated form of table.unique in knex

### `@backstage/plugin-catalog-backend-module-aws` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#018))

#### 0.1.8

##### Patch Changes

- [`17d45dbf10`](https://github.com/backstage/backstage/commit/17d45dbf10): Deprecate `AwsS3DiscoveryProcessor` in favor of `AwsS3EntityProvider` (since v0.1.4).

  You can find a migration guide at
  [the release notes for v0.1.4](https://github.com/backstage/backstage/blob/master/plugins/catalog-backend-module-aws/CHANGELOG.md#014).

### `@backstage/plugin-catalog-backend-module-github` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#016))

#### 0.1.6

##### Patch Changes

- [`f48950e34b`](https://github.com/backstage/backstage/commit/f48950e34b): Github Entity Provider functionality for adding entities to the catalog.

  This provider replaces the GithubDiscoveryProcessor functionality as providers offer more flexibility with scheduling ingestion, removing and preventing orphaned entities.

  More information can be found on the [GitHub Discovery](https://backstage.io/docs/integrations/github/discovery) page.

- [`c59d1ce487`](https://github.com/backstage/backstage/commit/c59d1ce487): Fixed bug where repository filter was including all archived repositories
- [`97f0a37378`](https://github.com/backstage/backstage/commit/97f0a37378): Improved support for wildcards in `catalogPath`

### `@backstage/plugin-catalog-backend-module-gitlab` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#016))

#### 0.1.6

##### Patch Changes

- [`24979413a4`](https://github.com/backstage/backstage/commit/24979413a4): Enhancing GitLab provider with filtering projects by pattern RegExp

  ```yaml
  providers:
    gitlab:
      stg:
        host: gitlab.stg.company.io
        branch: main
        projectPattern: 'john/' # new option
        entityFilename: template.yaml
  ```

  With the aforementioned parameter you can filter projects, and keep only who belongs to the namespace "john".

### `@backstage/plugin-catalog-backend-module-msgraph` (0.4.0 → [0.4.1](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#041))

#### 0.4.1

##### Patch Changes

- [`b1995df9f3`](https://github.com/backstage/backstage/commit/b1995df9f3): Adjust references in deprecation warnings to point to stable URL/document.

### `@backstage/plugin-catalog-backend-module-openapi` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#011))

#### 0.1.1

##### Patch Changes

- [`b50e8e533b`](https://github.com/backstage/backstage/commit/b50e8e533b): Add an `$openapi` placeholder resolver that supports more use cases for resolving `$ref` instances. This means that the quite recently added `OpenApiRefProcessor` has been deprecated in favor of the `openApiPlaceholderResolver`.

  An example of how to use it can be seen below.

  ```yaml
  apiVersion: backstage.io/v1alpha1
  kind: API
  metadata:
    name: example
    description: Example API
  spec:
    type: openapi
    lifecycle: production
    owner: team
    definition:
      $openapi: ./spec/openapi.yaml # by using $openapi Backstage will now resolve all $ref instances
  ```

### `@backstage/plugin-catalog-common` (1.0.4 → [1.0.5](../../changelogs/@backstage/plugin-catalog-common.md#105))

#### 1.0.5

##### Patch Changes

- [`92103db537`](https://github.com/backstage/backstage/commit/92103db537): Export aggregated list of all catalog permissions

### `@backstage/plugin-catalog-graphql` (0.3.11 → [0.3.12](../../changelogs/@backstage/plugin-catalog-graphql.md#0312))

#### 0.3.12

##### Patch Changes

- [`fa3eeee92d`](https://github.com/backstage/backstage/commit/fa3eeee92d): Updated dependency `@graphql-tools/schema` to `^9.0.0`.

### `@backstage/plugin-catalog-node` (1.0.0 → [1.0.1](../../changelogs/@backstage/plugin-catalog-node.md#101))

#### 1.0.1

##### Patch Changes

- [`0599732ec0`](https://github.com/backstage/backstage/commit/0599732ec0): Refactored experimental backend system with new type names.
- [`56e1b4b89c`](https://github.com/backstage/backstage/commit/56e1b4b89c): Fixed typos in alpha types.

### `@backstage/plugin-catalog-react` (1.1.2 → [1.1.3](../../changelogs/@backstage/plugin-catalog-react.md#113))

#### 1.1.3

##### Patch Changes

- [`44e691a7f9`](https://github.com/backstage/backstage/commit/44e691a7f9): Modify description column to not use auto width.

### `@backstage/plugin-cicd-statistics` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-cicd-statistics.md#0110))

#### 0.1.10

##### Patch Changes

- [`29f782eb37`](https://github.com/backstage/backstage/commit/29f782eb37): Updated dependency `@types/luxon` to `^3.0.0`.

### `@backstage/plugin-code-climate` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-code-climate.md#018))

#### 0.1.8

##### Patch Changes

- [`29f782eb37`](https://github.com/backstage/backstage/commit/29f782eb37): Updated dependency `@types/luxon` to `^3.0.0`.
- [`831a8fee86`](https://github.com/backstage/backstage/commit/831a8fee86): Send Authorization headers in fetch requests using FetchApi in Code Climate plugin to fix unauthorized requests to Backstage backends with authentication enabled.

### `@backstage/plugin-cost-insights` (0.11.29 → [0.11.30](../../changelogs/@backstage/plugin-cost-insights.md#01130))

#### 0.11.30

##### Patch Changes

- [`b746eca638`](https://github.com/backstage/backstage/commit/b746eca638): Make `products` field optional in the config
- [`daf4b33e34`](https://github.com/backstage/backstage/commit/daf4b33e34): Add name property to Group
- [`08562ebe11`](https://github.com/backstage/backstage/commit/08562ebe11): Display minus sign in trends in `CostOverviewCard`

### `@backstage/plugin-cost-insights-common` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-cost-insights-common.md#011))

#### 0.1.1

##### Patch Changes

- [`daf4b33e34`](https://github.com/backstage/backstage/commit/daf4b33e34): Add name property to Group

### `@backstage/plugin-github-pull-requests-board` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-github-pull-requests-board.md#012))

#### 0.1.2

##### Patch Changes

- [`73268a67ff`](https://github.com/backstage/backstage/commit/73268a67ff): Fixed rendering when PR contains references to deleted Github accounts

### `@backstage/plugin-gocd` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-gocd.md#0114))

#### 0.1.14

##### Patch Changes

- [`29f782eb37`](https://github.com/backstage/backstage/commit/29f782eb37): Updated dependency `@types/luxon` to `^3.0.0`.

### `@backstage/plugin-graphiql` (0.2.39 → [0.2.40](../../changelogs/@backstage/plugin-graphiql.md#0240))

#### 0.2.40

##### Patch Changes

- [`3a8ab72248`](https://github.com/backstage/backstage/commit/3a8ab72248): Minor internal tweak to lazy loading in order to improve module compatibility.

### `@backstage/plugin-graphql-backend` (0.1.24 → [0.1.25](../../changelogs/@backstage/plugin-graphql-backend.md#0125))

#### 0.1.25

##### Patch Changes

- [`fa3eeee92d`](https://github.com/backstage/backstage/commit/fa3eeee92d): Updated dependency `@graphql-tools/schema` to `^9.0.0`.

### `@backstage/plugin-home` (0.4.23 → [0.4.24](../../changelogs/@backstage/plugin-home.md#0424))

#### 0.4.24

##### Patch Changes

- [`df7b9158b8`](https://github.com/backstage/backstage/commit/df7b9158b8): Add wrap-around for the listing of tools to prevent increasing width with name length.

### `@backstage/plugin-kafka` (0.3.7 → [0.3.8](../../changelogs/@backstage/plugin-kafka.md#038))

#### 0.3.8

##### Patch Changes

- [`bde245f0bf`](https://github.com/backstage/backstage/commit/bde245f0bf): Add dashboard URL feature and fix minor styling issues.

### `@backstage/plugin-kubernetes` (0.7.0 → [0.7.1](../../changelogs/@backstage/plugin-kubernetes.md#071))

#### 0.7.1

##### Patch Changes

- [`860ed68343`](https://github.com/backstage/backstage/commit/860ed68343): Fixed bug in CronJobsAccordions component that causes an error when cronjobs use a kubernetes alias, such as `@hourly` or `@daily` instead of standard cron syntax.
- [`f563b86a5b`](https://github.com/backstage/backstage/commit/f563b86a5b): Adds namespace column to Kubernetes error reporting table

### `@backstage/plugin-kubernetes-backend` (0.7.0 → [0.7.1](../../changelogs/@backstage/plugin-kubernetes-backend.md#071))

#### 0.7.1

##### Patch Changes

- [`0297da83c0`](https://github.com/backstage/backstage/commit/0297da83c0): Added `DaemonSets` to the default kubernetes resources.
- [`0cd87cf30d`](https://github.com/backstage/backstage/commit/0cd87cf30d): Added a new `customResources` field to the ClusterDetails interface, in order to specify (override) custom resources per cluster
- [`29f782eb37`](https://github.com/backstage/backstage/commit/29f782eb37): Updated dependency `@types/luxon` to `^3.0.0`.

### `@backstage/plugin-kubernetes-common` (0.4.0 → [0.4.1](../../changelogs/@backstage/plugin-kubernetes-common.md#041))

#### 0.4.1

##### Patch Changes

- [`0297da83c0`](https://github.com/backstage/backstage/commit/0297da83c0): Added `DaemonSets` to the default kubernetes resources.

### `@backstage/plugin-periskop` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-periskop.md#016))

#### 0.1.6

##### Patch Changes

- [`29f782eb37`](https://github.com/backstage/backstage/commit/29f782eb37): Updated dependency `@types/luxon` to `^3.0.0`.

### `@backstage/plugin-sentry` (0.4.0 → [0.4.1](../../changelogs/@backstage/plugin-sentry.md#041))

#### 0.4.1

##### Patch Changes

- [`29f782eb37`](https://github.com/backstage/backstage/commit/29f782eb37): Updated dependency `@types/luxon` to `^3.0.0`.

### `@backstage/plugin-splunk-on-call` (0.3.31 → [0.3.32](../../changelogs/@backstage/plugin-splunk-on-call.md#0332))

#### 0.3.32

##### Patch Changes

- [`29f782eb37`](https://github.com/backstage/backstage/commit/29f782eb37): Updated dependency `@types/luxon` to `^3.0.0`.

### `@backstage/plugin-stack-overflow-backend` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-stack-overflow-backend.md#014))

#### 0.1.4

##### Patch Changes

- [`ea5631a8b2`](https://github.com/backstage/backstage/commit/ea5631a8b2): Added API key as separate configuration

### `@backstage/plugin-tech-insights-common` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-tech-insights-common.md#026))

#### 0.2.6

##### Patch Changes

- [`29f782eb37`](https://github.com/backstage/backstage/commit/29f782eb37): Updated dependency `@types/luxon` to `^3.0.0`.

### `@backstage/plugin-tech-insights-node` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-tech-insights-node.md#033))

#### 0.3.3

##### Patch Changes

- [`29f782eb37`](https://github.com/backstage/backstage/commit/29f782eb37): Updated dependency `@types/luxon` to `^3.0.0`.

### `@backstage/plugin-tech-radar` (0.5.14 → [0.5.15](../../changelogs/@backstage/plugin-tech-radar.md#0515))

#### 0.5.15

##### Patch Changes

- [`a641f79dcb`](https://github.com/backstage/backstage/commit/a641f79dcb): Move CSS overflow property to quadrant block element (i.e. to a div element) in RadarLegend component.

### `@backstage/plugin-techdocs` (1.3.0 → [1.3.1](../../changelogs/@backstage/plugin-techdocs.md#131))

#### 1.3.1

##### Patch Changes

- [`e924d2d013`](https://github.com/backstage/backstage/commit/e924d2d013): Added back reduction in size, this fixes the extremely large TeachDocs headings
- [`b86ed4d990`](https://github.com/backstage/backstage/commit/b86ed4d990): Add highlight to active navigation item and navigation parents.
- [`7a98c73dc8`](https://github.com/backstage/backstage/commit/7a98c73dc8): Fixed techdocs sidebar layout bug for medium devices.
- [`8acb22205c`](https://github.com/backstage/backstage/commit/8acb22205c): Scroll techdocs navigation into focus and expand any nested navigation items.

### `@backstage/plugin-techdocs-module-addons-contrib` (1.0.2 → [1.0.3](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#103))

#### 1.0.3

##### Patch Changes

- [`ad35364e97`](https://github.com/backstage/backstage/commit/ad35364e97): feat(techdocs): add edit button support for bitbucketServer

### `@backstage/plugin-techdocs-react` (1.0.2 → [1.0.3](../../changelogs/@backstage/plugin-techdocs-react.md#103))

#### 1.0.3

##### Patch Changes

- [`29d6cf0147`](https://github.com/backstage/backstage/commit/29d6cf0147): Add `toLowerEntityRefMaybe()` helper function for handling `techdocs.legacyUseCaseSensitiveTripletPaths` flag.
  Pass modified `entityRef` to `TechDocsReaderPageContext` to handle the `techdocs.legacyUseCaseSensitiveTripletPaths` flag.

### `@backstage/plugin-xcmetrics` (0.2.27 → [0.2.28](../../changelogs/@backstage/plugin-xcmetrics.md#0228))

#### 0.2.28

##### Patch Changes

- [`29f782eb37`](https://github.com/backstage/backstage/commit/29f782eb37): Updated dependency `@types/luxon` to `^3.0.0`.

## Excluded dependency updates

- `@backstage/app-defaults` (1.0.4 → [1.0.5](../../changelogs/@backstage/app-defaults.md#105))
- `@backstage/core-app-api` (1.0.4 → [1.0.5](../../changelogs/@backstage/core-app-api.md#105))
- `@backstage/dev-utils` (1.0.4 → [1.0.5](../../changelogs/@backstage/dev-utils.md#105))
- `@backstage/integration-react` (1.1.2 → [1.1.3](../../changelogs/@backstage/integration-react.md#113))
- `@backstage/plugin-airbrake` (0.3.7 → [0.3.8](../../changelogs/@backstage/plugin-airbrake.md#038))
- `@backstage/plugin-airbrake-backend` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-airbrake-backend.md#028))
- `@backstage/plugin-allure` (0.1.23 → [0.1.24](../../changelogs/@backstage/plugin-allure.md#0124))
- `@backstage/plugin-analytics-module-ga` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-analytics-module-ga.md#0119))
- `@backstage/plugin-apache-airflow` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-apache-airflow.md#021))
- `@backstage/plugin-apollo-explorer` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-apollo-explorer.md#011))
- `@backstage/plugin-app-backend` (0.3.34 → [0.3.35](../../changelogs/@backstage/plugin-app-backend.md#0335))
- `@backstage/plugin-auth-node` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-auth-node.md#024))
- `@backstage/plugin-azure-devops` (0.1.23 → [0.1.24](../../changelogs/@backstage/plugin-azure-devops.md#0124))
- `@backstage/plugin-azure-devops-backend` (0.3.13 → [0.3.14](../../changelogs/@backstage/plugin-azure-devops-backend.md#0314))
- `@backstage/plugin-badges` (0.2.31 → [0.2.32](../../changelogs/@backstage/plugin-badges.md#0232))
- `@backstage/plugin-badges-backend` (0.1.28 → [0.1.29](../../changelogs/@backstage/plugin-badges-backend.md#0129))
- `@backstage/plugin-bazaar` (0.1.22 → [0.1.23](../../changelogs/@backstage/plugin-bazaar.md#0123))
- `@backstage/plugin-bazaar-backend` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-bazaar-backend.md#0119))
- `@backstage/plugin-bitbucket-cloud-common` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#012))
- `@backstage/plugin-bitrise` (0.1.34 → [0.1.35](../../changelogs/@backstage/plugin-bitrise.md#0135))
- `@backstage/plugin-catalog-backend-module-azure` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#016))
- `@backstage/plugin-catalog-backend-module-bitbucket` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket.md#022))
- `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#012))
- `@backstage/plugin-catalog-backend-module-gerrit` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#013))
- `@backstage/plugin-catalog-backend-module-ldap` (0.5.1 → [0.5.2](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#052))
- `@backstage/plugin-catalog-graph` (0.2.19 → [0.2.20](../../changelogs/@backstage/plugin-catalog-graph.md#0220))
- `@backstage/plugin-catalog-import` (0.8.10 → [0.8.11](../../changelogs/@backstage/plugin-catalog-import.md#0811))
- `@backstage/plugin-cicd-statistics-module-gitlab` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-cicd-statistics-module-gitlab.md#014))
- `@backstage/plugin-circleci` (0.3.7 → [0.3.8](../../changelogs/@backstage/plugin-circleci.md#038))
- `@backstage/plugin-cloudbuild` (0.3.7 → [0.3.8](../../changelogs/@backstage/plugin-cloudbuild.md#038))
- `@backstage/plugin-code-coverage` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-code-coverage.md#021))
- `@backstage/plugin-code-coverage-backend` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-code-coverage-backend.md#021))
- `@backstage/plugin-codescene` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-codescene.md#013))
- `@backstage/plugin-config-schema` (0.1.30 → [0.1.31](../../changelogs/@backstage/plugin-config-schema.md#0131))
- `@backstage/plugin-dynatrace` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-dynatrace.md#012))
- `@backstage/plugin-explore` (0.3.38 → [0.3.39](../../changelogs/@backstage/plugin-explore.md#0339))
- `@backstage/plugin-explore-react` (0.0.19 → [0.0.20](../../changelogs/@backstage/plugin-explore-react.md#0020))
- `@backstage/plugin-firehydrant` (0.1.24 → [0.1.25](../../changelogs/@backstage/plugin-firehydrant.md#0125))
- `@backstage/plugin-fossa` (0.2.39 → [0.2.40](../../changelogs/@backstage/plugin-fossa.md#0240))
- `@backstage/plugin-gcalendar` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-gcalendar.md#034))
- `@backstage/plugin-gcp-projects` (0.3.26 → [0.3.27](../../changelogs/@backstage/plugin-gcp-projects.md#0327))
- `@backstage/plugin-git-release-manager` (0.3.20 → [0.3.21](../../changelogs/@backstage/plugin-git-release-manager.md#0321))
- `@backstage/plugin-github-actions` (0.5.7 → [0.5.8](../../changelogs/@backstage/plugin-github-actions.md#058))
- `@backstage/plugin-github-deployments` (0.1.38 → [0.1.39](../../changelogs/@backstage/plugin-github-deployments.md#0139))
- `@backstage/plugin-gitops-profiles` (0.3.25 → [0.3.26](../../changelogs/@backstage/plugin-gitops-profiles.md#0326))
- `@backstage/plugin-ilert` (0.1.33 → [0.1.34](../../changelogs/@backstage/plugin-ilert.md#0134))
- `@backstage/plugin-jenkins` (0.7.6 → [0.7.7](../../changelogs/@backstage/plugin-jenkins.md#077))
- `@backstage/plugin-jenkins-backend` (0.1.24 → [0.1.25](../../changelogs/@backstage/plugin-jenkins-backend.md#0125))
- `@backstage/plugin-jenkins-common` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-jenkins-common.md#017))
- `@backstage/plugin-kafka-backend` (0.2.27 → [0.2.28](../../changelogs/@backstage/plugin-kafka-backend.md#0228))
- `@backstage/plugin-lighthouse` (0.3.7 → [0.3.8](../../changelogs/@backstage/plugin-lighthouse.md#038))
- `@backstage/plugin-newrelic` (0.3.25 → [0.3.26](../../changelogs/@backstage/plugin-newrelic.md#0326))
- `@backstage/plugin-newrelic-dashboard` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-newrelic-dashboard.md#021))
- `@backstage/plugin-org` (0.5.7 → [0.5.8](../../changelogs/@backstage/plugin-org.md#058))
- `@backstage/plugin-pagerduty` (0.5.0 → [0.5.1](../../changelogs/@backstage/plugin-pagerduty.md#051))
- `@backstage/plugin-periskop-backend` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-periskop-backend.md#016))
- `@backstage/plugin-permission-backend` (0.5.9 → [0.5.10](../../changelogs/@backstage/plugin-permission-backend.md#0510))
- `@backstage/plugin-permission-node` (0.6.3 → [0.6.4](../../changelogs/@backstage/plugin-permission-node.md#064))
- `@backstage/plugin-permission-react` (0.4.3 → [0.4.4](../../changelogs/@backstage/plugin-permission-react.md#044))
- `@backstage/plugin-proxy-backend` (0.2.28 → [0.2.29](../../changelogs/@backstage/plugin-proxy-backend.md#0229))
- `@backstage/plugin-rollbar` (0.4.7 → [0.4.8](../../changelogs/@backstage/plugin-rollbar.md#048))
- `@backstage/plugin-rollbar-backend` (0.1.31 → [0.1.32](../../changelogs/@backstage/plugin-rollbar-backend.md#0132))
- `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0210))
- `@backstage/plugin-scaffolder-backend-module-rails` (0.4.2 → [0.4.3](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#043))
- `@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#028))
- `@backstage/plugin-search` (1.0.0 → [1.0.1](../../changelogs/@backstage/plugin-search.md#101))
- `@backstage/plugin-search-backend` (1.0.0 → [1.0.1](../../changelogs/@backstage/plugin-search-backend.md#101))
- `@backstage/plugin-search-backend-module-elasticsearch` (1.0.0 → [1.0.1](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#101))
- `@backstage/plugin-search-backend-module-pg` (0.3.5 → [0.3.6](../../changelogs/@backstage/plugin-search-backend-module-pg.md#036))
- `@backstage/plugin-search-backend-node` (1.0.0 → [1.0.1](../../changelogs/@backstage/plugin-search-backend-node.md#101))
- `@backstage/plugin-search-react` (1.0.0 → [1.0.1](../../changelogs/@backstage/plugin-search-react.md#101))
- `@backstage/plugin-stack-overflow` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-stack-overflow.md#014))
- `@backstage/plugin-tech-insights` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-tech-insights.md#024))
- `@backstage/plugin-tech-insights-backend` (0.5.0 → [0.5.1](../../changelogs/@backstage/plugin-tech-insights-backend.md#051))
- `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-tech-insights-backend-module-jsonfc.md#0119))
- `@backstage/plugin-techdocs-addons-test-utils` (1.0.2 → [1.0.3](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#103))
- `@backstage/plugin-techdocs-backend` (1.2.0 → [1.2.1](../../changelogs/@backstage/plugin-techdocs-backend.md#121))
- `@backstage/plugin-todo` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-todo.md#0210))
- `@backstage/plugin-todo-backend` (0.1.31 → [0.1.32](../../changelogs/@backstage/plugin-todo-backend.md#0132))
- `@backstage/plugin-user-settings` (0.4.6 → [0.4.7](../../changelogs/@backstage/plugin-user-settings.md#047))
- `@backstage/plugin-vault` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-vault.md#012))
- `@backstage/plugin-vault-backend` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-vault-backend.md#021))
- `@backstage/test-utils` (1.1.2 → [1.1.3](../../changelogs/@backstage/test-utils.md#113))
