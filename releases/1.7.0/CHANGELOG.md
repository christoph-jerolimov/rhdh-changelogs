# Backstage Release 1.7.0 changelog

Changes between 1.6.0 and 1.7.0 — 155 changed and 0 added packages.

## Summary

- [Breaking changes](#breaking-changes): 11 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 1 package
- [Other minor version bumps](#other-minor-version-bumps): 9 packages
- [Patch version bumps](#patch-version-bumps): 47 packages
- [Excluded dependency updates](#excluded-dependency-updates): 87 packages

## Table of contents

- [Breaking changes](#breaking-changes)
  - [`@backstage/cli` (0.19.0 → 0.20.0)](#backstagecli-0190--0200)
  - [`@backstage/plugin-bazaar-backend` (0.1.20 → 0.2.0)](#backstageplugin-bazaar-backend-0120--020)
  - [`@backstage/plugin-bitbucket-cloud-common` (0.1.3 → 0.2.0)](#backstageplugin-bitbucket-cloud-common-013--020)
  - [`@backstage/plugin-catalog-backend` (1.4.0 → 1.5.0)](#backstageplugin-catalog-backend-140--150)
  - [`@backstage/plugin-catalog-import` (0.8.12 → 0.9.0)](#backstageplugin-catalog-import-0812--090)
  - [`@backstage/plugin-permission-common` (0.6.4 → 0.7.0)](#backstageplugin-permission-common-064--070)
  - [`@backstage/plugin-permission-node` (0.6.5 → 0.7.0)](#backstageplugin-permission-node-065--070)
  - [`@backstage/plugin-playlist-backend` (0.1.0 → 0.2.0)](#backstageplugin-playlist-backend-010--020)
  - [`@backstage/plugin-techdocs-node` (1.4.0 → 1.4.1)](#backstageplugin-techdocs-node-140--141)
  - [`@backstage/plugin-user-settings` (0.4.8 → 0.5.0)](#backstageplugin-user-settings-048--050)
  - [`@techdocs/cli` (1.2.1 → 1.2.2)](#techdocscli-121--122)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/plugin-auth-backend` (0.16.0 → 0.17.0)](#backstageplugin-auth-backend-0160--0170)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/plugin-catalog` (1.5.1 → 1.6.0)](#backstageplugin-catalog-151--160)
  - [`@backstage/plugin-catalog-node` (1.1.0 → 1.2.0)](#backstageplugin-catalog-node-110--120)
  - [`@backstage/plugin-catalog-react` (1.1.4 → 1.2.0)](#backstageplugin-catalog-react-114--120)
  - [`@backstage/plugin-scaffolder` (1.6.0 → 1.7.0)](#backstageplugin-scaffolder-160--170)
  - [`@backstage/plugin-scaffolder-backend` (1.6.0 → 1.7.0)](#backstageplugin-scaffolder-backend-160--170)
  - [`@backstage/plugin-search-backend` (1.0.2 → 1.1.0)](#backstageplugin-search-backend-102--110)
  - [`@backstage/plugin-search-common` (1.0.1 → 1.1.0)](#backstageplugin-search-common-101--110)
  - [`@backstage/plugin-search-react` (1.1.0 → 1.2.0)](#backstageplugin-search-react-110--120)
  - [`@backstage/plugin-techdocs-backend` (1.3.0 → 1.4.0)](#backstageplugin-techdocs-backend-130--140)
- [Patch version bumps](#patch-version-bumps)
  - [`@backstage/backend-app-api` (0.2.1 → 0.2.2)](#backstagebackend-app-api-021--022)
  - [`@backstage/backend-common` (0.15.1 → 0.15.2)](#backstagebackend-common-0151--0152)
  - [`@backstage/backend-defaults` (0.1.1 → 0.1.2)](#backstagebackend-defaults-011--012)
  - [`@backstage/backend-plugin-api` (0.1.2 → 0.1.3)](#backstagebackend-plugin-api-012--013)
  - [`@backstage/backend-tasks` (0.3.5 → 0.3.6)](#backstagebackend-tasks-035--036)
  - [`@backstage/backend-test-utils` (0.1.28 → 0.1.29)](#backstagebackend-test-utils-0128--0129)
  - [`@backstage/catalog-client` (1.1.0 → 1.1.1)](#backstagecatalog-client-110--111)
  - [`@backstage/catalog-model` (1.1.1 → 1.1.2)](#backstagecatalog-model-111--112)
  - [`@backstage/core-app-api` (1.1.0 → 1.1.1)](#backstagecore-app-api-110--111)
  - [`@backstage/core-components` (0.11.1 → 0.11.2)](#backstagecore-components-0111--0112)
  - [`@backstage/create-app` (0.4.31 → 0.4.32)](#backstagecreate-app-0431--0432)
  - [`@backstage/plugin-adr-backend` (0.2.1 → 0.2.2)](#backstageplugin-adr-backend-021--022)
  - [`@backstage/plugin-airbrake-backend` (0.2.9 → 0.2.10)](#backstageplugin-airbrake-backend-029--0210)
  - [`@backstage/plugin-api-docs` (0.8.9 → 0.8.10)](#backstageplugin-api-docs-089--0810)
  - [`@backstage/plugin-app-backend` (0.3.36 → 0.3.37)](#backstageplugin-app-backend-0336--0337)
  - [`@backstage/plugin-auth-node` (0.2.5 → 0.2.6)](#backstageplugin-auth-node-025--026)
  - [`@backstage/plugin-badges-backend` (0.1.30 → 0.1.31)](#backstageplugin-badges-backend-0130--0131)
  - [`@backstage/plugin-bazaar` (0.1.24 → 0.1.25)](#backstageplugin-bazaar-0124--0125)
  - [`@backstage/plugin-catalog-backend-module-bitbucket` (0.2.3 → 0.2.4)](#backstageplugin-catalog-backend-module-bitbucket-023--024)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.3 → 0.1.4)](#backstageplugin-catalog-backend-module-bitbucket-cloud-013--014)
  - [`@backstage/plugin-catalog-backend-module-github` (0.1.7 → 0.1.8)](#backstageplugin-catalog-backend-module-github-017--018)
  - [`@backstage/plugin-catalog-common` (1.0.6 → 1.0.7)](#backstageplugin-catalog-common-106--107)
  - [`@backstage/plugin-catalog-graph` (0.2.21 → 0.2.22)](#backstageplugin-catalog-graph-0221--0222)
  - [`@backstage/plugin-cicd-statistics` (0.1.11 → 0.1.12)](#backstageplugin-cicd-statistics-0111--0112)
  - [`@backstage/plugin-cost-insights` (0.11.31 → 0.11.32)](#backstageplugin-cost-insights-01131--01132)
  - [`@backstage/plugin-gcalendar` (0.3.5 → 0.3.6)](#backstageplugin-gcalendar-035--036)
  - [`@backstage/plugin-github-issues` (0.1.1 → 0.1.2)](#backstageplugin-github-issues-011--012)
  - [`@backstage/plugin-github-pull-requests-board` (0.1.3 → 0.1.4)](#backstageplugin-github-pull-requests-board-013--014)
  - [`@backstage/plugin-graphql-backend` (0.1.26 → 0.1.27)](#backstageplugin-graphql-backend-0126--0127)
  - [`@backstage/plugin-jenkins-backend` (0.1.26 → 0.1.27)](#backstageplugin-jenkins-backend-0126--0127)
  - [`@backstage/plugin-kubernetes` (0.7.2 → 0.7.3)](#backstageplugin-kubernetes-072--073)
  - [`@backstage/plugin-kubernetes-backend` (0.7.2 → 0.7.3)](#backstageplugin-kubernetes-backend-072--073)
  - [`@backstage/plugin-org` (0.5.9 → 0.5.10)](#backstageplugin-org-059--0510)
  - [`@backstage/plugin-periskop-backend` (0.1.7 → 0.1.8)](#backstageplugin-periskop-backend-017--018)
  - [`@backstage/plugin-permission-backend` (0.5.11 → 0.5.12)](#backstageplugin-permission-backend-0511--0512)
  - [`@backstage/plugin-rollbar-backend` (0.1.33 → 0.1.34)](#backstageplugin-rollbar-backend-0133--0134)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.0.2 → 1.0.3)](#backstageplugin-search-backend-module-elasticsearch-102--103)
  - [`@backstage/plugin-search-backend-module-pg` (0.4.0 → 0.4.1)](#backstageplugin-search-backend-module-pg-040--041)
  - [`@backstage/plugin-search-backend-node` (1.0.2 → 1.0.3)](#backstageplugin-search-backend-node-102--103)
  - [`@backstage/plugin-sonarqube-backend` (0.1.1 → 0.1.2)](#backstageplugin-sonarqube-backend-011--012)
  - [`@backstage/plugin-stack-overflow-backend` (0.1.5 → 0.1.6)](#backstageplugin-stack-overflow-backend-015--016)
  - [`@backstage/plugin-tech-insights` (0.3.0 → 0.3.1)](#backstageplugin-tech-insights-030--031)
  - [`@backstage/plugin-tech-insights-backend` (0.5.2 → 0.5.3)](#backstageplugin-tech-insights-backend-052--053)
  - [`@backstage/plugin-tech-insights-node` (0.3.4 → 0.3.5)](#backstageplugin-tech-insights-node-034--035)
  - [`@backstage/plugin-user-settings-backend` (0.1.0 → 0.1.1)](#backstageplugin-user-settings-backend-010--011)
  - [`@backstage/plugin-vault-backend` (0.2.2 → 0.2.3)](#backstageplugin-vault-backend-022--023)
  - [`@backstage/test-utils` (1.2.0 → 1.2.1)](#backstagetest-utils-120--121)
- [Excluded dependency updates](#excluded-dependency-updates)

## Breaking changes

### `@backstage/cli` (0.19.0 → [0.20.0](../../changelogs/@backstage/cli.md#0200))

#### 0.20.0

##### Minor Changes

- [`f368ad7279`](https://github.com/backstage/backstage/commit/f368ad7279): **BREAKING**: Bumped `jest`, `jest-runtime`, and `jest-environment-jsdom` to v29. This is up from v27, so check out both the [v28](https://jestjs.io/docs/28.x/upgrading-to-jest28) and [v29](https://jestjs.io/docs/upgrading-to-jest29) (later [here](https://jestjs.io/docs/29.x/upgrading-to-jest29)) migration guides.

  Particular changes that where encountered in the main Backstage repo are:

  - The updated snapshot format.
  - `jest.useFakeTimers('legacy')` is now `jest.useFakeTimers({ legacyFakeTimers: true })`.
  - Error objects collected by `withLogCollector` from `@backstage/test-utils` are now objects with a `detail` property rather than a string.

##### Patch Changes

- [`78d5eb299e`](https://github.com/backstage/backstage/commit/78d5eb299e): Tweak the Jest Caching loader to only operate when in `watch` mode
- [`9c595302cb`](https://github.com/backstage/backstage/commit/9c595302cb): Normalize on winston version ^3.2.1
- [`24b40140c4`](https://github.com/backstage/backstage/commit/24b40140c4): Treat files in `__testUtils__` and `__mocks__` directories as test files for linting
  purposes.

  Updates the parts of the eslint configuration generator that specify which files
  should be treated as test code to include any files under two additional
  directories:

  - `__mocks__`: this is the directory used by Jest[0] for mock code.
  - `__testUtils__`: a suggested location for utility code executed only when
    running tests.

  [0]: https://jestjs.io/docs/manual-mocks#mocking-user-modules

- [`3e309107ca`](https://github.com/backstage/backstage/commit/3e309107ca): Updated fallback versions of dependencies in all templates.
- [`292a088807`](https://github.com/backstage/backstage/commit/292a088807): Added a new `repo test` command.
- [`ba63cae41c`](https://github.com/backstage/backstage/commit/ba63cae41c): Updated lockfile parsing to have better support for Yarn 3.
- [`2d3a5f09ab`](https://github.com/backstage/backstage/commit/2d3a5f09ab): Use `response.json` rather than `response.send` where appropriate, as outlined in `SECURITY.md`
- [`2dddb32fea`](https://github.com/backstage/backstage/commit/2dddb32fea): Switched the Jest transform for YAML files to use a custom one available at `@backstage/cli/config/jestYamlTransform.js`.
- [`a541a3a78a`](https://github.com/backstage/backstage/commit/a541a3a78a): Switch to upfront resolution of `swc-loader` in Webpack config.
- [`cfb3598410`](https://github.com/backstage/backstage/commit/cfb3598410): Removed `tsx` and `jsx` as supported extensions in backend packages. For most
  repos, this will not have any effect. But if you inadvertently had added some
  `tsx`/`jsx` files to your backend package, you may now start to see `code: 'MODULE_NOT_FOUND'` errors when launching the backend locally. The reason for
  this is that the offending files get ignored during transpilation. Hence, the
  importing file can no longer find anything to import.

  The fix is to rename any `.tsx` files in your backend packages to `.ts` instead,
  or `.jsx` to `.js`.

### `@backstage/plugin-bazaar-backend` (0.1.20 → [0.2.0](../../changelogs/@backstage/plugin-bazaar-backend.md#020))

#### 0.2.0

##### Minor Changes

- [`8554533546`](https://github.com/backstage/backstage/commit/8554533546): **BREAKING** The bazaar-backend `createRouter` now requires that the `identityApi` is passed to the router.

  These changes are **required** to `packages/backend/src/plugins/bazaar.ts`

  The user entity ref is now added to the members table and is taken from the requesting user using the `identityApi`.

  ```diff
  import { PluginEnvironment } from '../types';
  import { createRouter } from '@backstage/plugin-bazaar-backend';
  import { Router } from 'express';

  export default async function createPlugin(
    env: PluginEnvironment,
  ): Promise<Router> {
    return await createRouter({
      logger: env.logger,
      config: env.config,
      database: env.database,
  +   identity: env.identity,
    });
  }
  ```

##### Patch Changes

- [`f7c2855d76`](https://github.com/backstage/backstage/commit/f7c2855d76): Router now also has endpoint `getLatestProjects` that takes a limit of projects as prop.

### `@backstage/plugin-bitbucket-cloud-common` (0.1.3 → [0.2.0](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#020))

#### 0.2.0

##### Minor Changes

- [`ad74723fbf`](https://github.com/backstage/backstage/commit/ad74723fbf): Update Bitbucket Cloud models to latest OAS version.

  The latest specification contained some BREAKING CHANGES
  due to removed fields.

  All of these fields are not used at other plugins, though.
  Therefore, this change has no impact on other modules here.

### `@backstage/plugin-catalog-backend` (1.4.0 → [1.5.0](../../changelogs/@backstage/plugin-catalog-backend.md#150))

#### 1.5.0

##### Minor Changes

- [`b2e6cb6acf`](https://github.com/backstage/backstage/commit/b2e6cb6acf): Added a new method `addLocationAnalyzers` to the `CatalogBuilder`. With this you can add location analyzers to your catalog. These analyzers will be used by the /analyze-location endpoint to decide if the provided URL contains any catalog-info.yaml files already or not.

  Moved the following types from this package to `@backstage/plugin-catalog-backend`.

  - AnalyzeLocationResponse
  - AnalyzeLocationRequest
  - AnalyzeLocationExistingEntity
  - AnalyzeLocationGenerateEntity
  - AnalyzeLocationEntityField

- [`eb25f7e12d`](https://github.com/backstage/backstage/commit/eb25f7e12d): The exported permission rules and the API of `createCatalogConditionalDecision` have changed to reflect the breaking changes made to the `PermissionRule` type. Note that all involved types are exported from `@backstage/plugin-catalog-backend/alpha`

##### Patch Changes

- [`8cb6e10105`](https://github.com/backstage/backstage/commit/8cb6e10105): Fixed a bug where entities provided without a location key would always replace existing entities, rather than updating them.
- [`2d3a5f09ab`](https://github.com/backstage/backstage/commit/2d3a5f09ab): Use `response.json` rather than `response.send` where appropriate, as outlined in `SECURITY.md`
- [`63296ebcd4`](https://github.com/backstage/backstage/commit/63296ebcd4): Allow Placeholder value to be any value, not only string.
- [`74022e0163`](https://github.com/backstage/backstage/commit/74022e0163): Make sure to stitch entities correctly after deletion, to ensure that their relations are updated.

### `@backstage/plugin-catalog-import` (0.8.12 → [0.9.0](../../changelogs/@backstage/plugin-catalog-import.md#090))

#### 0.9.0

##### Minor Changes

- [`b2e6cb6acf`](https://github.com/backstage/backstage/commit/b2e6cb6acf): **Breaking**
  Moved the code search for the existing catalog-info.yaml files to the backend from the frontend. It means it will use the configured GitHub integration's credentials.

  Add the following to your `CatalogBuilder` to have the repo URL ingestion working again.

  ```ts
  // catalog.ts
  import { GithubLocationAnalyzer } from '@backstage/plugin-catalog-backend-module-github';
  ...
    builder.addLocationAnalyzers(
      new GithubLocationAnalyzer({
        discovery: env.discovery,
        config: env.config,
      }),
    );
  ...
  ```

### `@backstage/plugin-permission-common` (0.6.4 → [0.7.0](../../changelogs/@backstage/plugin-permission-common.md#070))

#### 0.7.0

##### Minor Changes

- [`46b4a72cee`](https://github.com/backstage/backstage/commit/46b4a72cee): **BREAKING**: When defining permission rules, it's now necessary to provide a [ZodSchema](https://github.com/colinhacks/zod) that specifies the parameters the rule expects. This has been added to help better describe the parameters in the response of the metadata endpoint and to validate the parameters before a rule is executed.

  To help with this, we have also made a change to the API of permission rules. Before, the permission rules `toQuery` and `apply` signature expected parameters to be separate arguments, like so...

  ```ts
  createPermissionRule({
    apply: (resource, foo, bar) => true,
    toQuery: (foo, bar) => {},
  });
  ```

  The API has now changed to expect the parameters as a single object

  ```ts
  createPermissionRule({
    paramSchema: z.object({
      foo: z.string().describe('Foo value to match'),
      bar: z.string().describe('Bar value to match'),
    }),
    apply: (resource, { foo, bar }) => true,
    toQuery: ({ foo, bar }) => {},
  });
  ```

  One final change made is to limit the possible values for a parameter to primitives and arrays of primitives.

### `@backstage/plugin-permission-node` (0.6.5 → [0.7.0](../../changelogs/@backstage/plugin-permission-node.md#070))

#### 0.7.0

##### Minor Changes

- [`46b4a72cee`](https://github.com/backstage/backstage/commit/46b4a72cee): **BREAKING**: When defining permission rules, it's now necessary to provide a [ZodSchema](https://github.com/colinhacks/zod) that specifies the parameters the rule expects. This has been added to help better describe the parameters in the response of the metadata endpoint and to validate the parameters before a rule is executed.

  To help with this, we have also made a change to the API of permission rules. Before, the permission rules `toQuery` and `apply` signature expected parameters to be separate arguments, like so...

  ```ts
  createPermissionRule({
    apply: (resource, foo, bar) => true,
    toQuery: (foo, bar) => {},
  });
  ```

  The API has now changed to expect the parameters as a single object

  ```ts
  createPermissionRule({
    paramSchema: z.object({
      foo: z.string().describe('Foo value to match'),
      bar: z.string().describe('Bar value to match'),
    }),
    apply: (resource, { foo, bar }) => true,
    toQuery: ({ foo, bar }) => {},
  });
  ```

  One final change made is to limit the possible values for a parameter to primitives and arrays of primitives.

##### Patch Changes

- [`9335ad115e`](https://github.com/backstage/backstage/commit/9335ad115e): Exported types for the .metadata endpoint of the permission router

### `@backstage/plugin-playlist-backend` (0.1.0 → [0.2.0](../../changelogs/@backstage/plugin-playlist-backend.md#020))

#### 0.2.0

##### Minor Changes

- [`eb25f7e12d`](https://github.com/backstage/backstage/commit/eb25f7e12d): **BREAKING** The exported permission rules have changed to reflect the breaking changes made to the PermissionRule type.

  For example, the `playlistConditions.isOwner` API has changed from:

  ```ts
  playlistConditions.isOwner(['user:default/me', 'group:default/owner']);
  ```

  to:

  ```ts
  playlistConditions.isOwner({
    owners: ['user:default/me', 'group:default/owner'],
  });
  ```

### `@backstage/plugin-techdocs-node` (1.4.0 → [1.4.1](../../changelogs/@backstage/plugin-techdocs-node.md#141))

#### 1.4.1

##### Patch Changes

- [`0b2a30dead`](https://github.com/backstage/backstage/commit/0b2a30dead): fixing techdocs-cli Docker client creation

  Docker client does not need to be created when --no-docker
  option is provided.

  If you had DOCKER_CERT_PATH environment variable defined
  the Docker client was looking for certificates
  and breaking techdocs-cli generate command even with --no-docker
  option.

### `@backstage/plugin-user-settings` (0.4.8 → [0.5.0](../../changelogs/@backstage/plugin-user-settings.md#050))

#### 0.5.0

##### Minor Changes

- [`5543e86660`](https://github.com/backstage/backstage/commit/5543e86660): **BREAKING**: The `apiRef` passed to `ProviderSettingsItem` now needs to
  implement `ProfileInfoApi & SessionApi`, rather than just the latter. This is
  unlikely to have an effect on most users though, since the builtin auth
  providers generally implement both.

  Fixed settings page showing providers as logged out when the user is using more
  than one provider, and displayed some additional login information.

##### Patch Changes

- [`06d61d1266`](https://github.com/backstage/backstage/commit/06d61d1266): Handle errors that may occur when the user logs out
- [`44c9a95dcf`](https://github.com/backstage/backstage/commit/44c9a95dcf): Prevent `.set()` to execute a request to the StorageClient if the user is `guest`
- [`174f02a00a`](https://github.com/backstage/backstage/commit/174f02a00a): Update installation instructions

### `@techdocs/cli` (1.2.1 → [1.2.2](../../changelogs/@techdocs/cli.md#122))

#### 1.2.2

##### Patch Changes

- [`0b2a30dead`](https://github.com/backstage/backstage/commit/0b2a30dead): fixing techdocs-cli Docker client creation

  Docker client does not need to be created when --no-docker
  option is provided.

  If you had DOCKER_CERT_PATH environment variable defined
  the Docker client was looking for certificates
  and breaking techdocs-cli generate command even with --no-docker
  option.

## 0.x minor version bumps

### `@backstage/plugin-auth-backend` (0.16.0 → [0.17.0](../../changelogs/@backstage/plugin-auth-backend.md#0170))

#### 0.17.0

##### Minor Changes

- [`e2dc42e9f0`](https://github.com/backstage/backstage/commit/e2dc42e9f0): Google OAuth refresh tokens will now be revoked on logout by calling Google's API
- [`5fa831ce55`](https://github.com/backstage/backstage/commit/5fa831ce55): CookieConfigurer can optionally return the `SameSite` cookie attribute.
  CookieConfigurer now requires an additional argument `appOrigin` - the origin URL of the app - which is used to calculate the `SameSite` attribute.
  defaultCookieConfigurer returns the `SameSite` attribute which defaults to `Lax`. In cases where an auth-backend is running on a different domain than the App, `SameSite=None` is used - but only for secure contexts. This is so that cookies can be included in third-party requests.

  OAuthAdapterOptions has been modified to require additional arguments, `baseUrl`, and `cookieConfigurer`.
  OAuthAdapter now resolves cookie configuration using its supplied CookieConfigurer for each request to make sure that the proper attributes always are set.

##### Patch Changes

- [`b5c126010c`](https://github.com/backstage/backstage/commit/b5c126010c): Auth0 provider now supports optional `connection` and `connectionScope` parameters to configure social identity providers.
- [`8c6ec175bf`](https://github.com/backstage/backstage/commit/8c6ec175bf): Fix GitLab provider setup so that it supports GitLab installations with a path in the URL.

## Other minor version bumps

### `@backstage/plugin-catalog` (1.5.1 → [1.6.0](../../changelogs/@backstage/plugin-catalog.md#160))

#### 1.6.0

##### Minor Changes

- [`d558f41d3a`](https://github.com/backstage/backstage/commit/d558f41d3a): Added new column `Label` to `CatalogTable.columns`, this new column allows you make use of labels from metadata.
  For example: category and visibility are type of labels associated with API entity illustrated below.

  YAML code snippet for API entity

  ```yaml
  apiVersion: backstage.io/v1alpha1
  kind: API
  metadata:
    name: sample-api
    description: API for sample
    links:
      - url: http://localhost:8080/swagger-ui.html
        title: Swagger UI
    tags:
      - http
    labels:
      category: legacy
      visibility: protected
  ```

  Consumers can customise columns to include label column and show in api-docs list

  ```typescript
  const columns = [
    CatalogTable.columns.createNameColumn({ defaultKind: 'API' }),
    CatalogTable.columns.createLabelColumn('category', { title: 'Category' }),
    CatalogTable.columns.createLabelColumn('visibility', {
      title: 'Visibility',
      defaultValue: 'public',
    }),
  ];
  ```

##### Patch Changes

- [`4efadb6968`](https://github.com/backstage/backstage/commit/4efadb6968): Implemented the visual parts of `EntityKindPicker` so that it can be shown alongside the other filters on the left side of your catalog pages.
- [`182000c663`](https://github.com/backstage/backstage/commit/182000c663): Added `emptyContent` property to CatalogTable and DefaultCatalogPage to support customization of the Catalog Table.
- [`e89e1f614d`](https://github.com/backstage/backstage/commit/e89e1f614d): Added support for copy entity URL in entity page context menu

### `@backstage/plugin-catalog-node` (1.1.0 → [1.2.0](../../changelogs/@backstage/plugin-catalog-node.md#120))

#### 1.2.0

##### Minor Changes

- [`404366c853`](https://github.com/backstage/backstage/commit/404366c853): Deprecated the `LocationSpec` type. It got moved from this package to the `@backstage/plugin-catalog-common` so make sure imports are updated.

### `@backstage/plugin-catalog-react` (1.1.4 → [1.2.0](../../changelogs/@backstage/plugin-catalog-react.md#120))

#### 1.2.0

##### Minor Changes

- [`4efadb6968`](https://github.com/backstage/backstage/commit/4efadb6968): Implemented the visual parts of `EntityKindPicker` so that it can be shown alongside the other filters on the left side of your catalog pages.

##### Patch Changes

- [`7939e743f5`](https://github.com/backstage/backstage/commit/7939e743f5): Added two new `EntityRefLinks` props, the first being `getTitle` that allows for customization of the title used for each link. The second one is `fetchEntities`, which triggers a fetching of all entities so that the full entity definition is available in the `getTitle` callback.
- [`e9e532ebd8`](https://github.com/backstage/backstage/commit/e9e532ebd8): Fixed issue where the query kind parameter is not honored

### `@backstage/plugin-scaffolder` (1.6.0 → [1.7.0](../../changelogs/@backstage/plugin-scaffolder.md#170))

#### 1.7.0

##### Minor Changes

- [`f13d5f3f06`](https://github.com/backstage/backstage/commit/f13d5f3f06): Add support for link to TechDocs and other links defined in template entity specification metadata on TemplateCard
- [`05f22193c5`](https://github.com/backstage/backstage/commit/05f22193c5): EntityPickers now support flags to control when to include default namespace
  in result

##### Patch Changes

- [`e4f0a96424`](https://github.com/backstage/backstage/commit/e4f0a96424): Making the description of the GitLab repoUrl owner field more clearer by focusing it refers to the GitLab namespace.
- [`92e490d6b4`](https://github.com/backstage/backstage/commit/92e490d6b4): Make the `/next` scaffolder work end to end with the old `TaskPage` view
- [`8220f2fd83`](https://github.com/backstage/backstage/commit/8220f2fd83): Support custom layouts in dry run editor
- [`1047baa926`](https://github.com/backstage/backstage/commit/1047baa926): Bump to `react-jsonschema-form@v5-beta` for the `NextRouter` under `@alpha` exports
- [`98ae18b68f`](https://github.com/backstage/backstage/commit/98ae18b68f): Fixed a bug where the `allowed*` values for the `RepoUrlPicker` would be reset on render.
- [`8960d83013`](https://github.com/backstage/backstage/commit/8960d83013): Add support for `allowedOrganizations` and `allowedOwners` to the `AzureRepoPicker`.
- [`b681275e69`](https://github.com/backstage/backstage/commit/b681275e69): Ignore .git directories in Template Editor, increase upload limit for dry-runs to 10MB.

### `@backstage/plugin-scaffolder-backend` (1.6.0 → [1.7.0](../../changelogs/@backstage/plugin-scaffolder-backend.md#170))

#### 1.7.0

##### Minor Changes

- [`253453fa14`](https://github.com/backstage/backstage/commit/253453fa14): Added a new property called `additionalTemplateGlobals` which allows you to add global functions to the scaffolder nunjucks templates.
- [`17ff77154c`](https://github.com/backstage/backstage/commit/17ff77154c): Update the `github:publish` action to allow passing whether pull
  requests must be up to date with the default branch before merging.
- [`304305dd20`](https://github.com/backstage/backstage/commit/304305dd20): Add `allowAutoMerge` option for `publish:github` action
- [`694bfe2d61`](https://github.com/backstage/backstage/commit/694bfe2d61): Add functionality to shutdown scaffolder tasks if they are stale
- [`a8e9848479`](https://github.com/backstage/backstage/commit/a8e9848479): Added optional `sourcePath` parameter to `publish:gitlab:merge-request` action, `targetPath` is now optional and falls back to current workspace path.

##### Patch Changes

- [`489621f613`](https://github.com/backstage/backstage/commit/489621f613): Switching off duplicated timestamp in case of logging via task logger in a custom action
- [`4880d43e25`](https://github.com/backstage/backstage/commit/4880d43e25): Fixed setting default branch for Bitbucket Server
- [`b681275e69`](https://github.com/backstage/backstage/commit/b681275e69): Ignore .git directories in Template Editor, increase upload limit for dry-runs to 10MB.
- [`a35a27df70`](https://github.com/backstage/backstage/commit/a35a27df70): Updated the `moduleId` of the experimental module export.

### `@backstage/plugin-search-backend` (1.0.2 → [1.1.0](../../changelogs/@backstage/plugin-search-backend.md#110))

#### 1.1.0

##### Minor Changes

- [`16c853a6ed`](https://github.com/backstage/backstage/commit/16c853a6ed): Be less restrictive with unknown keys on query endpoint
- [`a799972bb1`](https://github.com/backstage/backstage/commit/a799972bb1): The query received by search engines now contains a property called `pageLimit`, it specifies how many results to return per page when sending a query request to the search backend.

  Example:
  _Returns up to 30 results per page_

  ```
  GET /query?pageLimit=30
  ```

  The search backend validates the page limit and this value must not exceed 100, but it doesn't set a default value for the page limit parameter, it leaves it up to each search engine to set this, so Lunr, Postgres and Elastic Search set 25 results per page as a default value.

##### Patch Changes

- [`2d3a5f09ab`](https://github.com/backstage/backstage/commit/2d3a5f09ab): Use `response.json` rather than `response.send` where appropriate, as outlined in `SECURITY.md`

### `@backstage/plugin-search-common` (1.0.1 → [1.1.0](../../changelogs/@backstage/plugin-search-common.md#110))

#### 1.1.0

##### Minor Changes

- [`a799972bb1`](https://github.com/backstage/backstage/commit/a799972bb1): There is a new property called `pageLimit` on the `SearchQuery` interface that specifies how many results should be returned per page.

### `@backstage/plugin-search-react` (1.1.0 → [1.2.0](../../changelogs/@backstage/plugin-search-react.md#120))

#### 1.2.0

##### Minor Changes

- [`4ed1fa2480`](https://github.com/backstage/backstage/commit/4ed1fa2480): The search query state now has an optional `pageLimit` property that determines how many results will be requested per page, it defaults to 25.

  Examples:
  _Basic_

  ```jsx
  <SearchResults query={{ pageLimit: 30 }}>
    {results => {
      // Item rendering logic is omitted
    }}
  </SearchResults>
  ```

  _With context_

  ```jsx
  <SearchContextProvider initialState={{ pageLimit: 30 }}>
    <SearchResults>
      {results => {
        // Item rendering logic is omitted
      }}
    </SearchResults>
  </SearchContextProvider>
  ```

- [`bed5a1dc6e`](https://github.com/backstage/backstage/commit/bed5a1dc6e): The `<SearchResultList />` component now accepts an optional property `disableRenderingWithNoResults` to disable rendering when no results are returned.
  Possibility to provide a custom no results component if needed through the `noResultsComponent` property.

  Examples:

  _Rendering a custom no results component_

  ```jsx
  <SearchResultList
    query={query}
    noResultsComponent={<ListItemText primary="No results were found" />}
  />
  ```

  _Disable rendering when there are no results_

  ```jsx
  <SearchResultList query={query} disableRenderingWithNoResults />
  ```

- [`3de4bd4f19`](https://github.com/backstage/backstage/commit/3de4bd4f19): A `<SearchPagination />` component was created for limiting the number of results shown per search page. Use this new component to give users options to select how many search results they want to display per page. The default options are 10, 25, 50, 100.

  See examples below:

  _Basic_

  ```jsx
  import React, { useState } from 'react';
  import { Grid } from '@material-ui/core';
  import { Page, Header, Content, Lifecycle } from '@backstage/core-components';
  import {
    SearchBarBase,
    SearchPaginationBase,
    SearchResultList,
  } from '@backstage/plugin-search-react';

  const SearchPage = () => {
    const [term, setTerm] = useState('');
    const [pageLimit, setPageLimit] = useState(25);
    const [pageCursor, setPageCursor] = useState<string>();

    return (
      <Page themeId="home">
        <Header title="Search" subtitle={<Lifecycle alpha />} />
        <Content>
          <Grid container direction="row">
            <Grid item xs={12}>
              <SearchBarBase value={term} onChange={setTerm} />
            </Grid>
            <Grid item xs={12}>
              <SearchPaginationBase
                limit={pageLimit}
                onLimitChange={setPageLimit}
                cursor={pageCursor}
                onCursorChange={setPageCursor}
              />
            </Grid>
            <Grid item xs={12}>
              <SearchResultList query={{ term, pageLimit }} />
            </Grid>
          </Grid>
        </Content>
      </Page>
    );
  };
  ```

  _With context_

  ```jsx
  import React from 'react';
  import { Grid } from '@material-ui/core';
  import { Page, Header, Content, Lifecycle } from '@backstage/core-components';
  import {
    SearchBar,
    SearchResult,
    SearchPagination,
    SearchResultListLayout,
    SearchContextProvider,
    DefaultResultListItem,
  } from '@backstage/plugin-search-react';

  const SearchPage = () => (
    <SearchContextProvider>
      <Page themeId="home">
        <Header title="Search" subtitle={<Lifecycle alpha />} />
        <Content>
          <Grid container direction="row">
            <Grid item xs={12}>
              <SearchBar />
            </Grid>
            <Grid item xs={12}>
              <SearchPagination />
            </Grid>
            <Grid item xs={12}>
              <SearchResult>
                {({ results }) => (
                  <SearchResultListLayout
                    resultItems={results}
                    renderResultItem={({ document }) => (
                      <DefaultResultListItem
                        key={document.location}
                        result={document}
                      />
                    )}
                  />
                )}
              </SearchResult>
            </Grid>
          </Grid>
        </Content>
      </Page>
    </SearchContextProvider>
  );
  ```

- [`6faaa05626`](https://github.com/backstage/backstage/commit/6faaa05626): The `<SearchResultGroup />` component now accepts an optional property `disableRenderingWithNoResults` to disable rendering when no results are returned.
  Possibility to provide a custom no results component if needed through the `noResultsComponent` property.

  Examples:

  _Rendering a custom no results component_

  ```jsx
  <SearchResultGroup
    query={query}
    icon={<DocsIcon />}
    title="Documentation"
    noResultsComponent={<ListItemText primary="No results were found" />}
  />
  ```

  _Disable rendering when there are no results_

  ```jsx
  <SearchResultGroup
    query={query}
    icon={<DocsIcon />}
    title="Documentation"
    disableRenderingWithNoResults
  />
  ```

### `@backstage/plugin-techdocs-backend` (1.3.0 → [1.4.0](../../changelogs/@backstage/plugin-techdocs-backend.md#140))

#### 1.4.0

##### Minor Changes

- [`7ced1b4076`](https://github.com/backstage/backstage/commit/7ced1b4076): Add optional `catalogClient` argument to `createRoute` parameters

##### Patch Changes

- [`8006f8a602`](https://github.com/backstage/backstage/commit/8006f8a602): In order to improve the debuggability of the search indexing process, messages logged during indexing are now tagged with a `documentType` whose value corresponds to the `type` being indexed.

## Patch version bumps

### `@backstage/backend-app-api` (0.2.1 → [0.2.2](../../changelogs/@backstage/backend-app-api.md#022))

#### 0.2.2

##### Patch Changes

- [`0027a749cd`](https://github.com/backstage/backstage/commit/0027a749cd): Added possibility to configure index plugin of the HTTP router service.
- [`45857bffae`](https://github.com/backstage/backstage/commit/45857bffae): Properly export `rootLoggerFactory`.

### `@backstage/backend-common` (0.15.1 → [0.15.2](../../changelogs/@backstage/backend-common.md#0152))

#### 0.15.2

##### Patch Changes

- [`e8d7976413`](https://github.com/backstage/backstage/commit/e8d7976413): Added back support for when no branch is provided for the Bitbucket Server `UrlReader`
- [`c44cf412de`](https://github.com/backstage/backstage/commit/c44cf412de): Fix BitBucket server integration
- [`c31f7cdfbc`](https://github.com/backstage/backstage/commit/c31f7cdfbc): Fixed an issue where `getClient()` for a `pluginId` would return different clients and not share them
- [`2d3a5f09ab`](https://github.com/backstage/backstage/commit/2d3a5f09ab): Use `response.json` rather than `response.send` where appropriate, as outlined in `SECURITY.md`

### `@backstage/backend-defaults` (0.1.1 → [0.1.2](../../changelogs/@backstage/backend-defaults.md#012))

#### 0.1.2

##### Patch Changes

- [`96d288a02d`](https://github.com/backstage/backstage/commit/96d288a02d): Added root logger service to the set of default services.

### `@backstage/backend-plugin-api` (0.1.2 → [0.1.3](../../changelogs/@backstage/backend-plugin-api.md#013))

#### 0.1.3

##### Patch Changes

- [`28377dc89f`](https://github.com/backstage/backstage/commit/28377dc89f): Allow interfaces to be used for inferred option types.
- [`a35a27df70`](https://github.com/backstage/backstage/commit/a35a27df70): Added documentation for `createBackendModule`, with guidelines for choosing a module ID.

### `@backstage/backend-tasks` (0.3.5 → [0.3.6](../../changelogs/@backstage/backend-tasks.md#036))

#### 0.3.6

##### Patch Changes

- [`d4fea86ea3`](https://github.com/backstage/backstage/commit/d4fea86ea3): Added new function `readTaskScheduleDefinitionFromConfig` to read `TaskScheduleDefinition` (aka. schedule) from the `Config`.

### `@backstage/backend-test-utils` (0.1.28 → [0.1.29](../../changelogs/@backstage/backend-test-utils.md#0129))

#### 0.1.29

##### Patch Changes

- [`72549952d1`](https://github.com/backstage/backstage/commit/72549952d1): Fixed handling of root scoped services in `startTestBackend`.
- [`e91e8e9c55`](https://github.com/backstage/backstage/commit/e91e8e9c55): Increased test database max connection pool size to reduce the risk of resource exhaustion.

### `@backstage/catalog-client` (1.1.0 → [1.1.1](../../changelogs/@backstage/catalog-client.md#111))

#### 1.1.1

##### Patch Changes

- [`4f2ac624b4`](https://github.com/backstage/backstage/commit/4f2ac624b4): Renamed argument in `validateEntity` from `location` to `locationRef`

### `@backstage/catalog-model` (1.1.1 → [1.1.2](../../changelogs/@backstage/catalog-model.md#112))

#### 1.1.2

##### Patch Changes

- [`6f3b8d0962`](https://github.com/backstage/backstage/commit/6f3b8d0962): Defer `ajv` compilation of schema validators to improve module-import performance

### `@backstage/core-app-api` (1.1.0 → [1.1.1](../../changelogs/@backstage/core-app-api.md#111))

#### 1.1.1

##### Patch Changes

- [`27e6404aba`](https://github.com/backstage/backstage/commit/27e6404aba): Fixed a bug where gathered index routes would fail to bind routable extensions. This would typically show up when placing a routable extension in the entity page overview tab.

### `@backstage/core-components` (0.11.1 → [0.11.2](../../changelogs/@backstage/core-components.md#0112))

#### 0.11.2

##### Patch Changes

- [`bde1e8c8e2`](https://github.com/backstage/backstage/commit/bde1e8c8e2): Added `curve` prop to the `DependencyGraph` component to select the type of layout
- [`882101cd9b`](https://github.com/backstage/backstage/commit/882101cd9b): Deep-import LightAsync component to improve module-import speed
- [`0d0f30d87e`](https://github.com/backstage/backstage/commit/0d0f30d87e): Fixed layout for core-components docs where table was broken by splitting with code sample

### `@backstage/create-app` (0.4.31 → [0.4.32](../../changelogs/@backstage/create-app.md#0432))

#### 0.4.32

##### Patch Changes

- [`58c2264325`](https://github.com/backstage/backstage/commit/58c2264325): Newly created Backstage repositories now use the stable version 6 of
  `react-router`, just like the main repo does. Please let us know if you find any
  issues with this.

  Migrating to the stable version of `react-router` is optional for the time
  being. But if you want to do the same for your existing repository, please
  follow [this guide](https://backstage.io/docs/tutorials/react-router-stable-migration).

- [`e05e0f021b`](https://github.com/backstage/backstage/commit/e05e0f021b): Update versions of packages used in the create-app template, to match those in the main repo
- [`01dff06be4`](https://github.com/backstage/backstage/commit/01dff06be4): Leverage cache mounts in Dockerfile during `yarn install ...` and `apt-get ...` commands to speed up repeated builds.
- [`90616bcaa6`](https://github.com/backstage/backstage/commit/90616bcaa6): Add the new search pagination component to the search page template.
- [`7c6306fc8a`](https://github.com/backstage/backstage/commit/7c6306fc8a): Initializes a git repository when creating an app using @packages/create-app
- [`52f25858a8`](https://github.com/backstage/backstage/commit/52f25858a8): Added `*.session.sql` Visual Studio Code database functionality files to `.gitignore` in the default template. This is optional but potentially helpful if your developers use Visual Studio Code; you can add a line with that exact value to your own root `.gitignore` if you want the same.
- [`6d00e80146`](https://github.com/backstage/backstage/commit/6d00e80146): Updated the root `test` scripts to use `backstage-cli repo test`.

  To apply this change to an existing app, make the following change to the root `package.json`:

  ```diff
  -    "test": "backstage-cli test",
  -    "test:all": "lerna run test -- --coverage",
  +    "test": "backstage-cli repo test",
  +    "test:all": "backstage-cli repo test --coverage",
  ```

### `@backstage/plugin-adr-backend` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-adr-backend.md#022))

#### 0.2.2

##### Patch Changes

- [`8006f8a602`](https://github.com/backstage/backstage/commit/8006f8a602): In order to improve the debuggability of the search indexing process, messages logged during indexing are now tagged with a `documentType` whose value corresponds to the `type` being indexed.

### `@backstage/plugin-airbrake-backend` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-airbrake-backend.md#0210))

#### 0.2.10

##### Patch Changes

- [`2d3a5f09ab`](https://github.com/backstage/backstage/commit/2d3a5f09ab): Use `response.json` rather than `response.send` where appropriate, as outlined in `SECURITY.md`

### `@backstage/plugin-api-docs` (0.8.9 → [0.8.10](../../changelogs/@backstage/plugin-api-docs.md#0810))

#### 0.8.10

##### Patch Changes

- [`50c6e14aee`](https://github.com/backstage/backstage/commit/50c6e14aee): Updated dependency `@asyncapi/react-component` to `1.0.0-next.43`.
- [`3d5bb521ee`](https://github.com/backstage/backstage/commit/3d5bb521ee): Updated dependency `@asyncapi/react-component` to `1.0.0-next.42`.

### `@backstage/plugin-app-backend` (0.3.36 → [0.3.37](../../changelogs/@backstage/plugin-app-backend.md#0337))

#### 0.3.37

##### Patch Changes

- [`11c9e0ad33`](https://github.com/backstage/backstage/commit/11c9e0ad33): Added alpha plugin implementation for the new backend system. Available at `@backstage/plugin-app-backend/alpha`.

### `@backstage/plugin-auth-node` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-auth-node.md#026))

#### 0.2.6

##### Patch Changes

- [`f3a3fefb96`](https://github.com/backstage/backstage/commit/f3a3fefb96): Ensure `getIdentity` throws an `AuthenticationError` instead of a `NotAllowed` error when authentication fails

### `@backstage/plugin-badges-backend` (0.1.30 → [0.1.31](../../changelogs/@backstage/plugin-badges-backend.md#0131))

#### 0.1.31

##### Patch Changes

- [`2d3a5f09ab`](https://github.com/backstage/backstage/commit/2d3a5f09ab): Use `response.json` rather than `response.send` where appropriate, as outlined in `SECURITY.md`

### `@backstage/plugin-bazaar` (0.1.24 → [0.1.25](../../changelogs/@backstage/plugin-bazaar.md#0125))

#### 0.1.25

##### Patch Changes

- [`f7c2855d76`](https://github.com/backstage/backstage/commit/f7c2855d76): Added a `Overview Card` for either latest or random projects. Changed `ProjectPreview.tsx` so it take `gridSize` and `useTablePagination` as props.
- [`c0352bbc69`](https://github.com/backstage/backstage/commit/c0352bbc69): Link to the user catalog entity of a member

### `@backstage/plugin-catalog-backend-module-bitbucket` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket.md#024))

#### 0.2.4

##### Patch Changes

- [`23f9199a0f`](https://github.com/backstage/backstage/commit/23f9199a0f): Deprecate `@backstage/plugin-catalog-backend-module-bitbucket`.

  Please migrate to `@backstage/plugin-catalog-backend-module-bitbucket-cloud`
  or `@backstage/plugin-catalog-backend-module-bitbucket-server` instead.

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#014))

#### 0.1.4

##### Patch Changes

- [`f66e696e7b`](https://github.com/backstage/backstage/commit/f66e696e7b): Bitbucket Cloud provider: Add option to configure schedule via `app-config.yaml` instead of in code.

  Please find how to configure the schedule at the config at
  https://backstage.io/docs/integrations/bitbucketCloud/discovery

- [`a9b91d39bb`](https://github.com/backstage/backstage/commit/a9b91d39bb): Add `bitbucketCloudCatalogModule` (new backend-plugin-api, alpha).

### `@backstage/plugin-catalog-backend-module-github` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#018))

#### 0.1.8

##### Patch Changes

- [`8749df3d02`](https://github.com/backstage/backstage/commit/8749df3d02): `GitHubEntityProvider`: Add option to configure schedule via `app-config.yaml` instead of in code.

  Please find how to configure the schedule at the config at
  https://backstage.io/docs/integrations/github/discovery

- [`7022aebf35`](https://github.com/backstage/backstage/commit/7022aebf35): Added `GithubLocationAnalyzer`. This can be used to add to the `CatalogBuilder`. When added this will be used by `RepoLocationAnalyzer` to figure out if the given URL that you are trying to import from the /catalog-import page already contains catalog-info.yaml files.
- [`51046b58b0`](https://github.com/backstage/backstage/commit/51046b58b0): Use schedule from config at backend module.

  Also, it removes `GithubEntityProviderCatalogModuleOptions`
  in favor of config-only for the backend module setup
  like at other similar modules.

- [`7edb5909e8`](https://github.com/backstage/backstage/commit/7edb5909e8): Add missing config schema for the `GitHubEntityProvider`.
- [`be9474b103`](https://github.com/backstage/backstage/commit/be9474b103): Replaces in-code uses of `GitHub` by `Github` and deprecates old versions.

  Deprecates

  - `GitHubEntityProvider` replaced by `GithubEntityProvider`
  - `GitHubLocationAnalyzer` replaced by `GithubLocationAnalyzer`
  - `GitHubLocationAnalyzerOptions` replaced by `GithubLocationAnalyzerOptions`
  - `GitHubOrgEntityProvider` replaced by `GithubOrgEntityProvider`
  - `GitHubOrgEntityProviderOptions` replaced by `GithubOrgEntityProviderOptions`

  Renames

  - `GitHubLocationAnalyzer` to `GithubLocationAnalyzer`
  - `GitHubLocationAnalyzerOptions` to `GithubLocationAnalyzerOptions`

- [`a35a27df70`](https://github.com/backstage/backstage/commit/a35a27df70): Updated the `moduleId` of the experimental module export.

### `@backstage/plugin-catalog-common` (1.0.6 → [1.0.7](../../changelogs/@backstage/plugin-catalog-common.md#107))

#### 1.0.7

##### Patch Changes

- [`823acaa88b`](https://github.com/backstage/backstage/commit/823acaa88b): Moved the following types from `@backstage/plugin-catalog-backend` to this package.

  - AnalyzeLocationResponse
  - AnalyzeLocationRequest
  - AnalyzeLocationExistingEntity
  - AnalyzeLocationGenerateEntity
  - AnalyzeLocationEntityField

### `@backstage/plugin-catalog-graph` (0.2.21 → [0.2.22](../../changelogs/@backstage/plugin-catalog-graph.md#0222))

#### 0.2.22

##### Patch Changes

- [`bde1e8c8e2`](https://github.com/backstage/backstage/commit/bde1e8c8e2): Added `curve` prop to the `DependencyGraph` component to select the type of layout

### `@backstage/plugin-cicd-statistics` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-cicd-statistics.md#0112))

#### 0.1.12

##### Patch Changes

- [`e05e0f021b`](https://github.com/backstage/backstage/commit/e05e0f021b): Align on the version of `@material-ui/icons` used, to `^4.9.1` like other packages in the main repo

### `@backstage/plugin-cost-insights` (0.11.31 → [0.11.32](../../changelogs/@backstage/plugin-cost-insights.md#01132))

#### 0.11.32

##### Patch Changes

- [`a94c2ed1b7`](https://github.com/backstage/backstage/commit/a94c2ed1b7): Fixed bug in `CostOverviewBreakdownChart` component where some datasets caused the cost overview breakdown chart to tear.

### `@backstage/plugin-gcalendar` (0.3.5 → [0.3.6](../../changelogs/@backstage/plugin-gcalendar.md#036))

#### 0.3.6

##### Patch Changes

- [`4c2ed7ecf1`](https://github.com/backstage/backstage/commit/4c2ed7ecf1): Fixed loader showing when user not signed in

### `@backstage/plugin-github-issues` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-github-issues.md#012))

#### 0.1.2

##### Patch Changes

- [`8c7bff2bb4`](https://github.com/backstage/backstage/commit/8c7bff2bb4): Updated the `luxon` dependency to 3.x
- [`719ccbb963`](https://github.com/backstage/backstage/commit/719ccbb963): Properly filter on relations instead of the spec, when finding by owner
- [`df226e124c`](https://github.com/backstage/backstage/commit/df226e124c): Add filtering and ordering to the graphql query

### `@backstage/plugin-github-pull-requests-board` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-github-pull-requests-board.md#014))

#### 0.1.4

##### Patch Changes

- [`80d75adf3a`](https://github.com/backstage/backstage/commit/80d75adf3a): Replace the momentjs dependency with luxon.
- [`719ccbb963`](https://github.com/backstage/backstage/commit/719ccbb963): Properly filter on relations instead of the spec, when finding by owner

### `@backstage/plugin-graphql-backend` (0.1.26 → [0.1.27](../../changelogs/@backstage/plugin-graphql-backend.md#0127))

#### 0.1.27

##### Patch Changes

- [`2d3a5f09ab`](https://github.com/backstage/backstage/commit/2d3a5f09ab): Use `response.json` rather than `response.send` where appropriate, as outlined in `SECURITY.md`

### `@backstage/plugin-jenkins-backend` (0.1.26 → [0.1.27](../../changelogs/@backstage/plugin-jenkins-backend.md#0127))

#### 0.1.27

##### Patch Changes

- [`b19ea927af`](https://github.com/backstage/backstage/commit/b19ea927af): Fixed a bug where `extraRequestHeaders` configuration was ignored.

### `@backstage/plugin-kubernetes` (0.7.2 → [0.7.3](../../changelogs/@backstage/plugin-kubernetes.md#073))

#### 0.7.3

##### Patch Changes

- [`51af8361de`](https://github.com/backstage/backstage/commit/51af8361de): Add useCustomResources react hook for fetching Kubernetes Custom Resources
- [`35a6cfe257`](https://github.com/backstage/backstage/commit/35a6cfe257): Fix infinite call bug in `useCustomResources` hook

### `@backstage/plugin-kubernetes-backend` (0.7.2 → [0.7.3](../../changelogs/@backstage/plugin-kubernetes-backend.md#073))

#### 0.7.3

##### Patch Changes

- [`de676888bc`](https://github.com/backstage/backstage/commit/de676888bc): Added missing cluster locator configuration schema entries, for the catalog and local proxy types
- [`d4a8c683be`](https://github.com/backstage/backstage/commit/d4a8c683be): kubernetes service locator now take request context parameters

### `@backstage/plugin-org` (0.5.9 → [0.5.10](../../changelogs/@backstage/plugin-org.md#0510))

#### 0.5.10

##### Patch Changes

- [`f2b4b55636`](https://github.com/backstage/backstage/commit/f2b4b55636): consistently show parent and child relations in group profile card

### `@backstage/plugin-periskop-backend` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-periskop-backend.md#018))

#### 0.1.8

##### Patch Changes

- [`2d3a5f09ab`](https://github.com/backstage/backstage/commit/2d3a5f09ab): Use `response.json` rather than `response.send` where appropriate, as outlined in `SECURITY.md`

### `@backstage/plugin-permission-backend` (0.5.11 → [0.5.12](../../changelogs/@backstage/plugin-permission-backend.md#0512))

#### 0.5.12

##### Patch Changes

- [`2d3a5f09ab`](https://github.com/backstage/backstage/commit/2d3a5f09ab): Use `response.json` rather than `response.send` where appropriate, as outlined in `SECURITY.md`

### `@backstage/plugin-rollbar-backend` (0.1.33 → [0.1.34](../../changelogs/@backstage/plugin-rollbar-backend.md#0134))

#### 0.1.34

##### Patch Changes

- [`2d3a5f09ab`](https://github.com/backstage/backstage/commit/2d3a5f09ab): Use `response.json` rather than `response.send` where appropriate, as outlined in `SECURITY.md`

### `@backstage/plugin-search-backend-module-elasticsearch` (1.0.2 → [1.0.3](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#103))

#### 1.0.3

##### Patch Changes

- [`a799972bb1`](https://github.com/backstage/backstage/commit/a799972bb1): The search engine has been updated to take advantage of the `pageLimit` property on search queries. If none is provided, the search engine will continue to use its default value of 25 results per page.
- [`8006f8a602`](https://github.com/backstage/backstage/commit/8006f8a602): In order to improve the debuggability of the search indexing process, messages logged during indexing are now tagged with a `documentType` whose value corresponds to the `type` being indexed.

### `@backstage/plugin-search-backend-module-pg` (0.4.0 → [0.4.1](../../changelogs/@backstage/plugin-search-backend-module-pg.md#041))

#### 0.4.1

##### Patch Changes

- [`a799972bb1`](https://github.com/backstage/backstage/commit/a799972bb1): The search engine has been updated to take advantage of the `pageLimit` property on search queries. If none is provided, the search engine will continue to use its default value of 25 results per page.

### `@backstage/plugin-search-backend-node` (1.0.2 → [1.0.3](../../changelogs/@backstage/plugin-search-backend-node.md#103))

#### 1.0.3

##### Patch Changes

- [`a799972bb1`](https://github.com/backstage/backstage/commit/a799972bb1): The search engine has been updated to take advantage of the `pageLimit` property on search queries. If none is provided, the search engine will continue to use its default value of 25 results per page.
- [`8006f8a602`](https://github.com/backstage/backstage/commit/8006f8a602): In order to improve the debuggability of the search indexing process, messages logged during indexing are now tagged with a `documentType` whose value corresponds to the `type` being indexed.

### `@backstage/plugin-sonarqube-backend` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-sonarqube-backend.md#012))

#### 0.1.2

##### Patch Changes

- [`9c595302cb`](https://github.com/backstage/backstage/commit/9c595302cb): Normalize on winston version ^3.2.1

### `@backstage/plugin-stack-overflow-backend` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-stack-overflow-backend.md#016))

#### 0.1.6

##### Patch Changes

- [`8006f8a602`](https://github.com/backstage/backstage/commit/8006f8a602): In order to improve the debuggability of the search indexing process, messages logged during indexing are now tagged with a `documentType` whose value corresponds to the `type` being indexed.

### `@backstage/plugin-tech-insights` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-tech-insights.md#031))

#### 0.3.1

##### Patch Changes

- [`f3d272cf57`](https://github.com/backstage/backstage/commit/f3d272cf57): Make sure to reload score card contents when props change
- [`a60a6807bd`](https://github.com/backstage/backstage/commit/a60a6807bd): making available the search for the last FACTS executed

### `@backstage/plugin-tech-insights-backend` (0.5.2 → [0.5.3](../../changelogs/@backstage/plugin-tech-insights-backend.md#053))

#### 0.5.3

##### Patch Changes

- [`296aea34da`](https://github.com/backstage/backstage/commit/296aea34da): The Tech Insights plugin supports running fact retrievers across multiple instances. Update the README to remove the stale instructions.
- [`2d3a5f09ab`](https://github.com/backstage/backstage/commit/2d3a5f09ab): Use `response.json` rather than `response.send` where appropriate, as outlined in `SECURITY.md`
- [`f7cbfb97ed`](https://github.com/backstage/backstage/commit/f7cbfb97ed): Modify router endpoint to handle singular and collections of request parameters similarly.

### `@backstage/plugin-tech-insights-node` (0.3.4 → [0.3.5](../../changelogs/@backstage/plugin-tech-insights-node.md#035))

#### 0.3.5

##### Patch Changes

- [`0963b4d5fb`](https://github.com/backstage/backstage/commit/0963b4d5fb): Updated package role to be `node-library`.

### `@backstage/plugin-user-settings-backend` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-user-settings-backend.md#011))

#### 0.1.1

##### Patch Changes

- [`f3463b176b`](https://github.com/backstage/backstage/commit/f3463b176b): Use `Response.status` instead of `.send(number)`
- [`2d3a5f09ab`](https://github.com/backstage/backstage/commit/2d3a5f09ab): Use `response.json` rather than `response.send` where appropriate, as outlined in `SECURITY.md`
- [`82ac9bcfe5`](https://github.com/backstage/backstage/commit/82ac9bcfe5): Fix wrong import statement in `README.md`.

### `@backstage/plugin-vault-backend` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-vault-backend.md#023))

#### 0.2.3

##### Patch Changes

- [`9c595302cb`](https://github.com/backstage/backstage/commit/9c595302cb): Normalize on winston version ^3.2.1
- [`dae0bbe522`](https://github.com/backstage/backstage/commit/dae0bbe522): VaultBuilder.tsx renamed to VaultBuilder in order for module to be correctly loaded.

### `@backstage/test-utils` (1.2.0 → [1.2.1](../../changelogs/@backstage/test-utils.md#121))

#### 1.2.1

##### Patch Changes

- [`e05e0f021b`](https://github.com/backstage/backstage/commit/e05e0f021b): Align on the version of `@material-ui/icons` used, to `^4.9.1` like other packages in the main repo

## Excluded dependency updates

- `@backstage/app-defaults` (1.0.6 → [1.0.7](../../changelogs/@backstage/app-defaults.md#107))
- `@backstage/codemods` (0.1.39 → [0.1.40](../../changelogs/@backstage/codemods.md#0140))
- `@backstage/config` (1.0.2 → [1.0.3](../../changelogs/@backstage/config.md#103))
- `@backstage/config-loader` (1.1.4 → [1.1.5](../../changelogs/@backstage/config-loader.md#115))
- `@backstage/core-plugin-api` (1.0.6 → [1.0.7](../../changelogs/@backstage/core-plugin-api.md#107))
- `@backstage/dev-utils` (1.0.6 → [1.0.7](../../changelogs/@backstage/dev-utils.md#107))
- `@backstage/errors` (1.1.1 → [1.1.2](../../changelogs/@backstage/errors.md#112))
- `@backstage/integration` (1.3.1 → [1.3.2](../../changelogs/@backstage/integration.md#132))
- `@backstage/integration-react` (1.1.4 → [1.1.5](../../changelogs/@backstage/integration-react.md#115))
- `@backstage/plugin-adr` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-adr.md#022))
- `@backstage/plugin-adr-common` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-adr-common.md#022))
- `@backstage/plugin-airbrake` (0.3.9 → [0.3.10](../../changelogs/@backstage/plugin-airbrake.md#0310))
- `@backstage/plugin-allure` (0.1.25 → [0.1.26](../../changelogs/@backstage/plugin-allure.md#0126))
- `@backstage/plugin-analytics-module-ga` (0.1.20 → [0.1.21](../../changelogs/@backstage/plugin-analytics-module-ga.md#0121))
- `@backstage/plugin-apache-airflow` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-apache-airflow.md#023))
- `@backstage/plugin-apollo-explorer` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-apollo-explorer.md#013))
- `@backstage/plugin-azure-devops` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-azure-devops.md#021))
- `@backstage/plugin-azure-devops-backend` (0.3.15 → [0.3.16](../../changelogs/@backstage/plugin-azure-devops-backend.md#0316))
- `@backstage/plugin-badges` (0.2.33 → [0.2.34](../../changelogs/@backstage/plugin-badges.md#0234))
- `@backstage/plugin-bitrise` (0.1.36 → [0.1.37](../../changelogs/@backstage/plugin-bitrise.md#0137))
- `@backstage/plugin-catalog-backend-module-aws` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#0110))
- `@backstage/plugin-catalog-backend-module-azure` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#018))
- `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#012))
- `@backstage/plugin-catalog-backend-module-gerrit` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#015))
- `@backstage/plugin-catalog-backend-module-gitlab` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#018))
- `@backstage/plugin-catalog-backend-module-ldap` (0.5.3 → [0.5.4](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#054))
- `@backstage/plugin-catalog-backend-module-msgraph` (0.4.2 → [0.4.3](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#043))
- `@backstage/plugin-catalog-backend-module-openapi` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#013))
- `@backstage/plugin-catalog-graphql` (0.3.13 → [0.3.14](../../changelogs/@backstage/plugin-catalog-graphql.md#0314))
- `@backstage/plugin-cicd-statistics-module-gitlab` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-cicd-statistics-module-gitlab.md#016))
- `@backstage/plugin-circleci` (0.3.9 → [0.3.10](../../changelogs/@backstage/plugin-circleci.md#0310))
- `@backstage/plugin-cloudbuild` (0.3.9 → [0.3.10](../../changelogs/@backstage/plugin-cloudbuild.md#0310))
- `@backstage/plugin-code-climate` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-code-climate.md#0110))
- `@backstage/plugin-code-coverage` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-code-coverage.md#023))
- `@backstage/plugin-code-coverage-backend` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-code-coverage-backend.md#023))
- `@backstage/plugin-codescene` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-codescene.md#015))
- `@backstage/plugin-config-schema` (0.1.32 → [0.1.33](../../changelogs/@backstage/plugin-config-schema.md#0133))
- `@backstage/plugin-dynatrace` (0.2.0 → [1.0.0](../../changelogs/@backstage/plugin-dynatrace.md#100))
- `@backstage/plugin-explore` (0.3.40 → [0.3.41](../../changelogs/@backstage/plugin-explore.md#0341))
- `@backstage/plugin-explore-react` (0.0.21 → [0.0.22](../../changelogs/@backstage/plugin-explore-react.md#0022))
- `@backstage/plugin-firehydrant` (0.1.26 → [0.1.27](../../changelogs/@backstage/plugin-firehydrant.md#0127))
- `@backstage/plugin-fossa` (0.2.41 → [0.2.42](../../changelogs/@backstage/plugin-fossa.md#0242))
- `@backstage/plugin-gcp-projects` (0.3.28 → [0.3.29](../../changelogs/@backstage/plugin-gcp-projects.md#0329))
- `@backstage/plugin-git-release-manager` (0.3.22 → [0.3.23](../../changelogs/@backstage/plugin-git-release-manager.md#0323))
- `@backstage/plugin-github-actions` (0.5.9 → [0.5.10](../../changelogs/@backstage/plugin-github-actions.md#0510))
- `@backstage/plugin-github-deployments` (0.1.40 → [0.1.41](../../changelogs/@backstage/plugin-github-deployments.md#0141))
- `@backstage/plugin-gitops-profiles` (0.3.27 → [0.3.28](../../changelogs/@backstage/plugin-gitops-profiles.md#0328))
- `@backstage/plugin-gocd` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-gocd.md#0116))
- `@backstage/plugin-graphiql` (0.2.41 → [0.2.42](../../changelogs/@backstage/plugin-graphiql.md#0242))
- `@backstage/plugin-home` (0.4.25 → [0.4.26](../../changelogs/@backstage/plugin-home.md#0426))
- `@backstage/plugin-ilert` (0.1.35 → [0.1.36](../../changelogs/@backstage/plugin-ilert.md#0136))
- `@backstage/plugin-jenkins` (0.7.8 → [0.7.9](../../changelogs/@backstage/plugin-jenkins.md#079))
- `@backstage/plugin-jenkins-common` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-jenkins-common.md#019))
- `@backstage/plugin-kafka` (0.3.9 → [0.3.10](../../changelogs/@backstage/plugin-kafka.md#0310))
- `@backstage/plugin-kafka-backend` (0.2.29 → [0.2.30](../../changelogs/@backstage/plugin-kafka-backend.md#0230))
- `@backstage/plugin-kubernetes-common` (0.4.2 → [0.4.3](../../changelogs/@backstage/plugin-kubernetes-common.md#043))
- `@backstage/plugin-lighthouse` (0.3.9 → [0.3.10](../../changelogs/@backstage/plugin-lighthouse.md#0310))
- `@backstage/plugin-newrelic` (0.3.27 → [0.3.28](../../changelogs/@backstage/plugin-newrelic.md#0328))
- `@backstage/plugin-newrelic-dashboard` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-newrelic-dashboard.md#023))
- `@backstage/plugin-pagerduty` (0.5.2 → [0.5.3](../../changelogs/@backstage/plugin-pagerduty.md#053))
- `@backstage/plugin-periskop` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-periskop.md#018))
- `@backstage/plugin-permission-react` (0.4.5 → [0.4.6](../../changelogs/@backstage/plugin-permission-react.md#046))
- `@backstage/plugin-playlist` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-playlist.md#011))
- `@backstage/plugin-playlist-common` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-playlist-common.md#011))
- `@backstage/plugin-proxy-backend` (0.2.30 → [0.2.31](../../changelogs/@backstage/plugin-proxy-backend.md#0231))
- `@backstage/plugin-rollbar` (0.4.9 → [0.4.10](../../changelogs/@backstage/plugin-rollbar.md#0410))
- `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.11 → [0.2.12](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0212))
- `@backstage/plugin-scaffolder-backend-module-rails` (0.4.4 → [0.4.5](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#045))
- `@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0210))
- `@backstage/plugin-scaffolder-common` (1.2.0 → [1.2.1](../../changelogs/@backstage/plugin-scaffolder-common.md#121))
- `@backstage/plugin-search` (1.0.2 → [1.0.3](../../changelogs/@backstage/plugin-search.md#103))
- `@backstage/plugin-sentry` (0.4.2 → [0.4.3](../../changelogs/@backstage/plugin-sentry.md#043))
- `@backstage/plugin-shortcuts` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-shortcuts.md#032))
- `@backstage/plugin-sonarqube` (0.4.1 → [0.4.2](../../changelogs/@backstage/plugin-sonarqube.md#042))
- `@backstage/plugin-splunk-on-call` (0.3.33 → [0.3.34](../../changelogs/@backstage/plugin-splunk-on-call.md#0334))
- `@backstage/plugin-stack-overflow` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-stack-overflow.md#016))
- `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.20 → [0.1.21](../../changelogs/@backstage/plugin-tech-insights-backend-module-jsonfc.md#0121))
- `@backstage/plugin-tech-insights-common` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-tech-insights-common.md#027))
- `@backstage/plugin-tech-radar` (0.5.16 → [0.5.17](../../changelogs/@backstage/plugin-tech-radar.md#0517))
- `@backstage/plugin-techdocs` (1.3.2 → [1.3.3](../../changelogs/@backstage/plugin-techdocs.md#133))
- `@backstage/plugin-techdocs-addons-test-utils` (1.0.4 → [1.0.5](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#105))
- `@backstage/plugin-techdocs-module-addons-contrib` (1.0.4 → [1.0.5](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#105))
- `@backstage/plugin-techdocs-react` (1.0.4 → [1.0.5](../../changelogs/@backstage/plugin-techdocs-react.md#105))
- `@backstage/plugin-todo` (0.2.11 → [0.2.12](../../changelogs/@backstage/plugin-todo.md#0212))
- `@backstage/plugin-todo-backend` (0.1.33 → [0.1.34](../../changelogs/@backstage/plugin-todo-backend.md#0134))
- `@backstage/plugin-vault` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-vault.md#014))
- `@backstage/plugin-xcmetrics` (0.2.29 → [0.2.30](../../changelogs/@backstage/plugin-xcmetrics.md#0230))
