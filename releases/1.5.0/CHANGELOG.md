# Backstage Release 1.5.0 changelog

Changes between 1.4.0 and 1.5.0 — 139 changed and 4 added packages.

Newly added: `@backstage/backend-defaults`, `@backstage/plugin-catalog-backend-module-bitbucket-server`, `@backstage/plugin-github-issues`, `@backstage/plugin-sonarqube-backend`.

## `@backstage/backend-defaults` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- 5df230d48c: Introduced a new `backend-defaults` package carrying `createBackend` which was previously exported from `backend-app-api`.
  The `backend-app-api` package now exports the `createSpecializedBacked` that does not add any service factories by default.

## `@backstage/plugin-catalog-backend-module-bitbucket-server` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- f7607f9d85: Add new plugin catalog-backend-module-bitbucket-server which adds the `BitbucketServerEntityProvider`.

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

## `@backstage/plugin-github-issues` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- ffd5e47fb5: New plugin for displaying GitHub Issues added

#### Patch Changes

- 347ea327c2: Moved communication with GitHub graphql API to the dedicated plugin API.
  Fixes issue when no GitHub Issues are rendered when partial failure is returned from GitHub API.
- b522f49403: Updated dependency `@spotify/prettier-config` to `^14.0.0`.

## `@backstage/plugin-sonarqube-backend` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- e2be9ab3a4: Initial creation of the plugin

## `@backstage/backend-app-api` (0.1.0 → 0.2.0)

### 0.2.0

#### Minor Changes

- 5df230d48c: Introduced a new `backend-defaults` package carrying `createBackend` which was previously exported from `backend-app-api`.
  The `backend-app-api` package now exports the `createSpecializedBacked` that does not add any service factories by default.

#### Patch Changes

- 0599732ec0: Refactored experimental backend system with new type names.

## `@backstage/backend-common` (0.14.1 → 0.15.0)

### 0.15.0

#### Minor Changes

- 12e9b54f0e: Added back support for when no branch is provided to the `UrlReader` for Bitbucket Server
- 30012e7d8c: - Added `force` and `remoteRef` option to `push` method in `git` actions
  - Added `addRemote` and `deleteRemote` methods to `git` actions

#### Patch Changes

- fc8a5f797b: Improve `scm/git` wrapper around `isomorphic-git` library :

  - Add `checkout` function,
  - Add optional `remoteRef` parameter in the `push` function.

- 5e4dc173f7: Added a second validation to the `dir()` method of ZIP archive responses returned from `readTree()` that ensures that extracted files do not fall outside the target directory.
- 1732a18a7a: Exported `redactLogLine` function to be able to use it in custom loggers and renamed it to `redactWinstonLogLine`.
- 3b7930b3e5: Add support for Bearer Authorization header / token-based auth at Git commands.
- cfa078e255: The `ZipArchiveResponse` now correctly handles corrupt ZIP archives.

  Before this change, certain corrupt ZIP archives either cause the inflater to throw (as expected), or will hang the parser indefinitely.

  By switching out the `zip` parsing library, we now write to a temporary directory, and load from disk which should ensure that the parsing of the `.zip` files are done correctly because `streaming` of `zip` paths is technically impossible without being able to parse the headers at the end of the file.

- 770d3f92c4: The config prop `ensureExists` now applies to schema creation when `pluginDivisionMode` is set to `schema`. This means schemas will no longer accidentally be automatically created when `ensureExists` is set to `false`.
- 29f782eb37: Updated dependency `@types/luxon` to `^3.0.0`.

## `@backstage/backend-plugin-api` (0.1.0 → 0.1.1)

### 0.1.1

#### Patch Changes

- 0599732ec0: Refactored experimental backend system with new type names.
- 34c2f5aca1: The factory returned by `createBackendPlugin` and `createBackendModule` no longer require a parameter to be passed if the options are optional.

## `@backstage/backend-tasks` (0.3.3 → 0.3.4)

### 0.3.4

#### Patch Changes

- 29f782eb37: Updated dependency `@types/luxon` to `^3.0.0`.

## `@backstage/backend-test-utils` (0.1.26 → 0.1.27)

### 0.1.27

#### Patch Changes

- 0599732ec0: Refactored experimental backend system with new type names.
- 56e1b4b89c: Added alpha test helpers for the new experimental backend system.

## `@backstage/cli` (0.18.0 → 0.18.1)

### 0.18.1

#### Patch Changes

- d45bbfeb69: Linting is now ignored for any `.eslintrc.*` files, not just `.eslintrc.js`.
- 72c228fdb8: Fixed a bug where `NODE_ENV` was not set in the environment when starting the backend in development mode. It has always been the case that Webpack transformed `NODE_ENV` when running in development mode, but this did not affect dependencies in `node_modules` as they are treated as external.
- a539564c0d: Added Backstage version to output of `yarn backstage-cli info` command
- fd68d6f138: Added resolution of `.json` and `.wasm` files to the Webpack configuration in order to match defaults.
- 94155a41e0: Updated dependencies `@svgr/*` to `6.3.x`.

## `@backstage/core-components` (0.10.0 → 0.11.0)

### 0.11.0

#### Minor Changes

- d0eefc499a: Made the `to` prop of `Button` and `Link` more strict, only supporting plain strings. It used to be the case that this prop was unexpectedly too liberal, making it look like we supported the complex `react-router-dom` object form of the parameter as well, which led to unexpected results at runtime.

#### Patch Changes

- a22af3edc8: Adding a `className` prop to the `MarkdownContent` component

## `@backstage/core-plugin-api` (1.0.4 → 1.0.5)

### 1.0.5

#### Patch Changes

- 80da5162c7: Introduced a new experimental feature that allows you to declare plugin-wide options for your plugin by defining
  `__experimentalConfigure` in your `createPlugin` options. See https://backstage.io/docs/plugins/customization.md for more information.

  This is an experimental feature and it will have breaking changes in the future.

- 87649a06bf: Add a note that the `fetchApi` utility should not be used on sign-in page implementations and similar.

## `@backstage/create-app` (0.4.29 → 0.4.30)

### 0.4.30

#### Patch Changes

- 73cee58fc2: Bumped create-app version.
- f762386d48: Bumped create-app version.
- b162bbf464: Bumped create-app version.
- db76fc6255: The `better-sqlite3` dependency has been moved back to production `"dependencies"` in `packages/backend/package.json`, with instructions in the Dockerfile to move it to `"devDependencies"` if desired. There is no need to apply this change to existing apps, unless you want your production image to have SQLite available as a database option.
- ab9edd8b58: Updated backend to write stack trace when the backend fails to start up.

  To apply this change to your Backstage installation, make the following change to `packages/backend/src/index.ts`

  ```diff
      cors:
      origin: http://localhost:3000
  -    console.error(`Backend failed to start up, ${error}`);
  +    console.error('Backend failed to start up', error);
  ```

- 0174a0a022: Add `PATCH` and `HEAD` to the `Access-Control-Allow-Methods`.

  To apply this change to your Backstage installation make the following change to your `app-config.yaml`

  ```diff
     cors:
       origin: http://localhost:3000
  -    methods: [GET, POST, PUT, DELETE]
  +    methods: [GET, POST, PUT, DELETE, PATCH, HEAD]
  ```

## `@backstage/integration` (1.2.2 → 1.3.0)

### 1.3.0

#### Minor Changes

- 593dea6710: Add support for Basic Auth for Bitbucket Server.
- ad35364e97: feat(techdocs): add edit button support for bitbucketServer

#### Patch Changes

- 163243a4d1: Handle incorrect return type from Octokit paginate plugin to resolve reading URLs from GitHub
- c4b460a47d: Avoid double encoding of the file path in `getBitbucketDownloadUrl`
- 29f782eb37: Updated dependency `@types/luxon` to `^3.0.0`.
- 1f27d83933: Fixed bug in getGitLabFileFetchUrl where a target whose path did not contain the
  `/-/` scope would result in a fetch URL that did not support
  private-token-based authentication.

## `@backstage/plugin-adr` (0.1.2 → 0.2.0)

### 0.2.0

#### Minor Changes

- bfc7c50a09: Display associated entity as a chip in `AdrSearchResultListItem`

  BREAKING: `AdrDocument` now includes a `entityRef` property, if you have a custom `AdrParser` you will have to supply this property in your returned documents

## `@backstage/plugin-adr-backend` (0.1.2 → 0.2.0)

### 0.2.0

#### Minor Changes

- bfc7c50a09: Display associated entity as a chip in `AdrSearchResultListItem`

  BREAKING: `AdrDocument` now includes a `entityRef` property, if you have a custom `AdrParser` you will have to supply this property in your returned documents

## `@backstage/plugin-adr-common` (0.1.2 → 0.2.0)

### 0.2.0

#### Minor Changes

- bfc7c50a09: Display associated entity as a chip in `AdrSearchResultListItem`

  BREAKING: `AdrDocument` now includes a `entityRef` property, if you have a custom `AdrParser` you will have to supply this property in your returned documents

## `@backstage/plugin-api-docs` (0.8.7 → 0.8.8)

### 0.8.8

#### Patch Changes

- dae12c71cf: Updated dependency `@asyncapi/react-component` to `1.0.0-next.40`.

## `@backstage/plugin-auth-backend` (0.15.0 → 0.15.1)

### 0.15.1

#### Patch Changes

- c676a9e07b: Fixed a bug in auth plugin on the backend where it ignores the skip migration database options when using the database provider.
- 2d7d6028e1: Updated dependency `@google-cloud/firestore` to `^6.0.0`.

## `@backstage/plugin-catalog` (1.4.0 → 1.5.0)

### 1.5.0

#### Minor Changes

- 80da5162c7: Plugin catalog has been modified to use an experimental feature where you can customize the title of the create button.

  You can modify it by doing:

  ```typescript jsx
  import { catalogPlugin } from '@backstage/plugin-catalog';

  catalogPlugin.__experimentalReconfigure({
    createButtonTitle: 'New',
  });
  ```

- fe94398418: Allow changing the subtitle of the `CatalogTable` component

## `@backstage/plugin-catalog-backend` (1.3.0 → 1.3.1)

### 1.3.1

#### Patch Changes

- 56e1b4b89c: Fixed typos in alpha types.
- e3d3018531: Fix issue for conditional decisions based on properties stored as arrays, like tags.

  Before this change, having a permission policy returning conditional decisions based on metadata like tags, such like `createCatalogConditionalDecision(permission, catalogConditions.hasMetadata('tags', 'java'),)`, was producing wrong results. The issue occurred when authorizing entities already loaded from the database, for example when authorizing `catalogEntityDeletePermission`.

- 059ae348b4: Use the non-deprecated form of table.unique in knex

## `@backstage/plugin-catalog-backend-module-aws` (0.1.7 → 0.1.8)

### 0.1.8

#### Patch Changes

- 17d45dbf10: Deprecate `AwsS3DiscoveryProcessor` in favor of `AwsS3EntityProvider` (since v0.1.4).

  You can find a migration guide at
  [the release notes for v0.1.4](https://github.com/backstage/backstage/blob/master/plugins/catalog-backend-module-aws/CHANGELOG.md#014).

## `@backstage/plugin-catalog-backend-module-github` (0.1.5 → 0.1.6)

### 0.1.6

#### Patch Changes

- f48950e34b: Github Entity Provider functionality for adding entities to the catalog.

  This provider replaces the GithubDiscoveryProcessor functionality as providers offer more flexibility with scheduling ingestion, removing and preventing orphaned entities.

  More information can be found on the [GitHub Discovery](https://backstage.io/docs/integrations/github/discovery) page.

- c59d1ce487: Fixed bug where repository filter was including all archived repositories
- 97f0a37378: Improved support for wildcards in `catalogPath`

## `@backstage/plugin-catalog-backend-module-gitlab` (0.1.5 → 0.1.6)

### 0.1.6

#### Patch Changes

- 24979413a4: Enhancing GitLab provider with filtering projects by pattern RegExp

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

## `@backstage/plugin-catalog-backend-module-msgraph` (0.4.0 → 0.4.1)

### 0.4.1

#### Patch Changes

- b1995df9f3: Adjust references in deprecation warnings to point to stable URL/document.

## `@backstage/plugin-catalog-backend-module-openapi` (0.1.0 → 0.1.1)

### 0.1.1

#### Patch Changes

- b50e8e533b: Add an `$openapi` placeholder resolver that supports more use cases for resolving `$ref` instances. This means that the quite recently added `OpenApiRefProcessor` has been deprecated in favor of the `openApiPlaceholderResolver`.

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

## `@backstage/plugin-catalog-common` (1.0.4 → 1.0.5)

### 1.0.5

#### Patch Changes

- 92103db537: Export aggregated list of all catalog permissions

## `@backstage/plugin-catalog-graphql` (0.3.11 → 0.3.12)

### 0.3.12

#### Patch Changes

- fa3eeee92d: Updated dependency `@graphql-tools/schema` to `^9.0.0`.

## `@backstage/plugin-catalog-node` (1.0.0 → 1.0.1)

### 1.0.1

#### Patch Changes

- 0599732ec0: Refactored experimental backend system with new type names.
- 56e1b4b89c: Fixed typos in alpha types.

## `@backstage/plugin-catalog-react` (1.1.2 → 1.1.3)

### 1.1.3

#### Patch Changes

- 44e691a7f9: Modify description column to not use auto width.

## `@backstage/plugin-cicd-statistics` (0.1.9 → 0.1.10)

### 0.1.10

#### Patch Changes

- 29f782eb37: Updated dependency `@types/luxon` to `^3.0.0`.

## `@backstage/plugin-code-climate` (0.1.7 → 0.1.8)

### 0.1.8

#### Patch Changes

- 29f782eb37: Updated dependency `@types/luxon` to `^3.0.0`.
- 831a8fee86: Send Authorization headers in fetch requests using FetchApi in Code Climate plugin to fix unauthorized requests to Backstage backends with authentication enabled.

## `@backstage/plugin-cost-insights` (0.11.29 → 0.11.30)

### 0.11.30

#### Patch Changes

- b746eca638: Make `products` field optional in the config
- daf4b33e34: Add name property to Group
- 08562ebe11: Display minus sign in trends in `CostOverviewCard`

## `@backstage/plugin-cost-insights-common` (0.1.0 → 0.1.1)

### 0.1.1

#### Patch Changes

- daf4b33e34: Add name property to Group

## `@backstage/plugin-github-pull-requests-board` (0.1.1 → 0.1.2)

### 0.1.2

#### Patch Changes

- 73268a67ff: Fixed rendering when PR contains references to deleted Github accounts

## `@backstage/plugin-gocd` (0.1.13 → 0.1.14)

### 0.1.14

#### Patch Changes

- 29f782eb37: Updated dependency `@types/luxon` to `^3.0.0`.

## `@backstage/plugin-graphiql` (0.2.39 → 0.2.40)

### 0.2.40

#### Patch Changes

- 3a8ab72248: Minor internal tweak to lazy loading in order to improve module compatibility.

## `@backstage/plugin-graphql-backend` (0.1.24 → 0.1.25)

### 0.1.25

#### Patch Changes

- fa3eeee92d: Updated dependency `@graphql-tools/schema` to `^9.0.0`.

## `@backstage/plugin-home` (0.4.23 → 0.4.24)

### 0.4.24

#### Patch Changes

- df7b9158b8: Add wrap-around for the listing of tools to prevent increasing width with name length.

## `@backstage/plugin-kafka` (0.3.7 → 0.3.8)

### 0.3.8

#### Patch Changes

- bde245f0bf: Add dashboard URL feature and fix minor styling issues.

## `@backstage/plugin-kubernetes` (0.7.0 → 0.7.1)

### 0.7.1

#### Patch Changes

- 860ed68343: Fixed bug in CronJobsAccordions component that causes an error when cronjobs use a kubernetes alias, such as `@hourly` or `@daily` instead of standard cron syntax.
- f563b86a5b: Adds namespace column to Kubernetes error reporting table

## `@backstage/plugin-kubernetes-backend` (0.7.0 → 0.7.1)

### 0.7.1

#### Patch Changes

- 0297da83c0: Added `DaemonSets` to the default kubernetes resources.
- 0cd87cf30d: Added a new `customResources` field to the ClusterDetails interface, in order to specify (override) custom resources per cluster
- 29f782eb37: Updated dependency `@types/luxon` to `^3.0.0`.

## `@backstage/plugin-kubernetes-common` (0.4.0 → 0.4.1)

### 0.4.1

#### Patch Changes

- 0297da83c0: Added `DaemonSets` to the default kubernetes resources.

## `@backstage/plugin-periskop` (0.1.5 → 0.1.6)

### 0.1.6

#### Patch Changes

- 29f782eb37: Updated dependency `@types/luxon` to `^3.0.0`.

## `@backstage/plugin-scaffolder` (1.4.0 → 1.5.0)

### 1.5.0

#### Minor Changes

- c4b452e16a: Starting the implementation of the Wizard page for the `next` scaffolder plugin

## `@backstage/plugin-scaffolder-backend` (1.4.0 → 1.5.0)

### 1.5.0

#### Minor Changes

- c4b452e16a: Starting the implementation of the Wizard page for the `next` scaffolder plugin
- 593dea6710: Add support for Basic Auth for Bitbucket Server.
- 3b7930b3e5: Add support for Bearer Authorization header / token-based auth at Git commands.
- 3f1316f1c5: User Bearer Authorization header at Git commands with token-based auth at Bitbucket Server.
- eeff5046ae: Updated `publish:gitlab:merge-request` action to allow commit updates and deletes
- 692d5d3405: Added `reviewers` and `teamReviewers` parameters to `publish:github:pull-request` action to add reviewers on the pull request created by the action

#### Patch Changes

- fc8a5f797b: Add a `publish:gerrit:review` scaffolder action
- c971afbf21: The `publish:file` action has been deprecated in favor of testing templates using the template editor instead. Note that this action is not and was never been installed by default.
- b10b6c4aa4: Fix issue on Windows where templated files where not properly skipped as intended.
- 56e1b4b89c: Fixed typos in alpha types.
- dad0f65494: Fail gracefully if an invalid `Authorization` header is passed to `POST /v2/tasks`
- 014b3b7776: Add missing `res.end()` in scaffolder backend `EventStream` usage

## `@backstage/plugin-sentry` (0.4.0 → 0.4.1)

### 0.4.1

#### Patch Changes

- 29f782eb37: Updated dependency `@types/luxon` to `^3.0.0`.

## `@backstage/plugin-shortcuts` (0.2.8 → 0.3.0)

### 0.3.0

#### Minor Changes

- 5b769fddb5: Internal observable replaced with a mapping from the storage API. This fixes shortcuts initialization when using firestore.

  `ShortcutApi.get` method, that returns an immediate snapshot of shortcuts, made public.

  Example of how to get and observe `shortcuts`:

  ```typescript
  const shortcutApi = useApi(shortcutsApiRef);
  const shortcuts = useObservable(shortcutApi.shortcut$(), shortcutApi.get());
  ```

## `@backstage/plugin-sonarqube` (0.3.7 → 0.4.0)

### 0.4.0

#### Minor Changes

- 619b515172: **BREAKING** This plugin now call the `sonarqube-backend` plugin instead of relying on the proxy plugin

  The whole proxy's `'/sonarqube':` key can be removed from your configuration files.

  Then head to the [README in sonarqube-backend plugin page](https://github.com/backstage/backstage/tree/master/plugins/sonarqube-backend/README.md) to learn how to set-up the link to your Sonarqube instances.

#### Patch Changes

- f9c310a439: Add ability to provide an optional Sonarqube instance into the annotation in the `catalog-info.yaml` file

## `@backstage/plugin-splunk-on-call` (0.3.31 → 0.3.32)

### 0.3.32

#### Patch Changes

- 29f782eb37: Updated dependency `@types/luxon` to `^3.0.0`.

## `@backstage/plugin-stack-overflow-backend` (0.1.3 → 0.1.4)

### 0.1.4

#### Patch Changes

- ea5631a8b2: Added API key as separate configuration

## `@backstage/plugin-tech-insights-common` (0.2.5 → 0.2.6)

### 0.2.6

#### Patch Changes

- 29f782eb37: Updated dependency `@types/luxon` to `^3.0.0`.

## `@backstage/plugin-tech-insights-node` (0.3.2 → 0.3.3)

### 0.3.3

#### Patch Changes

- 29f782eb37: Updated dependency `@types/luxon` to `^3.0.0`.

## `@backstage/plugin-tech-radar` (0.5.14 → 0.5.15)

### 0.5.15

#### Patch Changes

- a641f79dcb: Move CSS overflow property to quadrant block element (i.e. to a div element) in RadarLegend component.

## `@backstage/plugin-techdocs` (1.3.0 → 1.3.1)

### 1.3.1

#### Patch Changes

- e924d2d013: Added back reduction in size, this fixes the extremely large TeachDocs headings
- b86ed4d990: Add highlight to active navigation item and navigation parents.
- 7a98c73dc8: Fixed techdocs sidebar layout bug for medium devices.
- 8acb22205c: Scroll techdocs navigation into focus and expand any nested navigation items.

## `@backstage/plugin-techdocs-module-addons-contrib` (1.0.2 → 1.0.3)

### 1.0.3

#### Patch Changes

- ad35364e97: feat(techdocs): add edit button support for bitbucketServer

## `@backstage/plugin-techdocs-node` (1.2.0 → 1.3.0)

### 1.3.0

#### Minor Changes

- ad35364e97: feat(techdocs): add edit button support for bitbucketServer

#### Patch Changes

- c8196bd37d: Fix AWS S3 404 NotFound error

  When reading an object from the S3 bucket through a stream, the aws-sdk getObject() API may throw a 404 NotFound Error with no error message or, in fact, any sort of HTTP-layer error responses. These fail the @backstage/error's assertError() checks, so they must be wrapped. The test for this case was also updated to match the wrapped error message.

- f833344611: Bump default `TechDocs` image to `v1.1.0`, see the release [here](https://github.com/backstage/techdocs-container/releases/tag/v1.1.0).

## `@backstage/plugin-techdocs-react` (1.0.2 → 1.0.3)

### 1.0.3

#### Patch Changes

- 29d6cf0147: Add `toLowerEntityRefMaybe()` helper function for handling `techdocs.legacyUseCaseSensitiveTripletPaths` flag.
  Pass modified `entityRef` to `TechDocsReaderPageContext` to handle the `techdocs.legacyUseCaseSensitiveTripletPaths` flag.

## `@backstage/plugin-xcmetrics` (0.2.27 → 0.2.28)

### 0.2.28

#### Patch Changes

- 29f782eb37: Updated dependency `@types/luxon` to `^3.0.0`.

## `@techdocs/cli` (1.1.3 → 1.2.0)

### 1.2.0

#### Minor Changes

- 855952db53: Added CLI option `--docker-option` to allow passing additional options to the `docker run` command executed my `serve` and `serve:mkdocs`.

_Excluded dependency updates for packages: `@backstage/app-defaults`, `@backstage/core-app-api`, `@backstage/dev-utils`, `@backstage/integration-react`, `@backstage/plugin-airbrake`, `@backstage/plugin-airbrake-backend`, `@backstage/plugin-allure`, `@backstage/plugin-analytics-module-ga`, `@backstage/plugin-apache-airflow`, `@backstage/plugin-apollo-explorer`, `@backstage/plugin-app-backend`, `@backstage/plugin-auth-node`, `@backstage/plugin-azure-devops`, `@backstage/plugin-azure-devops-backend`, `@backstage/plugin-badges`, `@backstage/plugin-badges-backend`, `@backstage/plugin-bazaar`, `@backstage/plugin-bazaar-backend`, `@backstage/plugin-bitbucket-cloud-common`, `@backstage/plugin-bitrise`, `@backstage/plugin-catalog-backend-module-azure`, `@backstage/plugin-catalog-backend-module-bitbucket`, `@backstage/plugin-catalog-backend-module-bitbucket-cloud`, `@backstage/plugin-catalog-backend-module-gerrit`, `@backstage/plugin-catalog-backend-module-ldap`, `@backstage/plugin-catalog-graph`, `@backstage/plugin-catalog-import`, `@backstage/plugin-cicd-statistics-module-gitlab`, `@backstage/plugin-circleci`, `@backstage/plugin-cloudbuild`, `@backstage/plugin-code-coverage`, `@backstage/plugin-code-coverage-backend`, `@backstage/plugin-codescene`, `@backstage/plugin-config-schema`, `@backstage/plugin-dynatrace`, `@backstage/plugin-explore`, `@backstage/plugin-explore-react`, `@backstage/plugin-firehydrant`, `@backstage/plugin-fossa`, `@backstage/plugin-gcalendar`, `@backstage/plugin-gcp-projects`, `@backstage/plugin-git-release-manager`, `@backstage/plugin-github-actions`, `@backstage/plugin-github-deployments`, `@backstage/plugin-gitops-profiles`, `@backstage/plugin-ilert`, `@backstage/plugin-jenkins`, `@backstage/plugin-jenkins-backend`, `@backstage/plugin-jenkins-common`, `@backstage/plugin-kafka-backend`, `@backstage/plugin-lighthouse`, `@backstage/plugin-newrelic`, `@backstage/plugin-newrelic-dashboard`, `@backstage/plugin-org`, `@backstage/plugin-pagerduty`, `@backstage/plugin-periskop-backend`, `@backstage/plugin-permission-backend`, `@backstage/plugin-permission-node`, `@backstage/plugin-permission-react`, `@backstage/plugin-proxy-backend`, `@backstage/plugin-rollbar`, `@backstage/plugin-rollbar-backend`, `@backstage/plugin-scaffolder-backend-module-cookiecutter`, `@backstage/plugin-scaffolder-backend-module-rails`, `@backstage/plugin-scaffolder-backend-module-yeoman`, `@backstage/plugin-search`, `@backstage/plugin-search-backend`, `@backstage/plugin-search-backend-module-elasticsearch`, `@backstage/plugin-search-backend-module-pg`, `@backstage/plugin-search-backend-node`, `@backstage/plugin-search-react`, `@backstage/plugin-stack-overflow`, `@backstage/plugin-tech-insights`, `@backstage/plugin-tech-insights-backend`, `@backstage/plugin-tech-insights-backend-module-jsonfc`, `@backstage/plugin-techdocs-addons-test-utils`, `@backstage/plugin-techdocs-backend`, `@backstage/plugin-todo`, `@backstage/plugin-todo-backend`, `@backstage/plugin-user-settings`, `@backstage/plugin-vault`, `@backstage/plugin-vault-backend`, `@backstage/test-utils`._
