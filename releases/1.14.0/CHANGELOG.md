# Backstage Release 1.14.0 changelog

Changes between 1.13.2 and 1.14.0 — 178 changed and 4 added packages.

## `@backstage/app-defaults` (1.3.0 → 1.3.1)

### 1.3.1

#### Patch Changes

- 575d9178eff: Added a System Icon for resource entities.
  This can be obtained using:

  ```ts
  useApp().getSystemIcon('kind:resource');
  ```

## `@backstage/backend-app-api` (0.4.2 → 0.4.3)

### 0.4.3

#### Patch Changes

- cf13b482f9e: Switch `configServiceFactory` to use `ConfigSources` from `@backstage/config-loader` to load config.

## `@backstage/backend-common` (0.18.4 → 0.18.5)

### 0.18.5

#### Patch Changes

- 0297f7a54af: Remove the direct dependency on deprecated "request" library
- 284db225083: Updated the `DatabaseManager` to include the plugin id in the Postgres application name of the database connections created for each plugin.
- 3659c71c5d9: Standardize `@aws-sdk` v3 versions
- 42d817e76ab: Added `HostDiscovery` to supersede deprecated `SingleHostDiscovery` (deprecated due to name)

## `@backstage/backend-openapi-utils` (0.0.1 → 0.0.2)

### 0.0.2

#### Patch Changes

- fe16bd39e83: Use permalinks for links including a line number reference
- 27956d78671: Adjusted README accordingly after the generated output now has a `.generated.ts` extension
- 021cfbb5152: Corrected resolution of parameter nested schema to use central schemas.
- 799c33047ed: Updated README to reflect changes in `@backstage/repo-tools`.

## `@backstage/backend-test-utils` (0.1.36 → 0.1.37)

### 0.1.37

#### Patch Changes

- 63af7f6d53f: Allow specifying custom Docker registry for database tests
- b1eb268bf9d: Added `POSTGRES_11` and `POSTGRES_12` as supported test database IDs.

## `@backstage/cli` (0.22.6 → 0.22.7)

### 0.22.7

#### Patch Changes

- 473db605a4f: Enable strict config checking during `backstage-cli config:check` with the new `--strict` option which will surface schema errors.
- d548886872d: Deprecated the use of React 16

## `@backstage/config-loader` (1.2.0 → 1.3.0)

### 1.3.0

#### Minor Changes

- 201206132da: Introduced a new config source system to replace `loadConfig`. There is a new `ConfigSource` interface along with utilities provided by `ConfigSources`, as well as a number of built-in configuration source implementations. The new system is more flexible and makes it easier to create new and reusable sources of configuration, such as loading configuration from secret providers.

  The following is an example of how to load configuration using the default behavior:

  ```ts
  const source = ConfigSources.default({
    argv: options?.argv,
    remote: options?.remote,
  });
  const config = await ConfigSources.toConfig(source);
  ```

  The `ConfigSource` interface looks like this:

  ```ts
  export interface ConfigSource {
    readConfigData(options?: ReadConfigDataOptions): AsyncConfigSourceIterator;
  }
  ```

  It is best implemented using an async iterator:

  ```ts
  class MyConfigSource implements ConfigSource {
    async *readConfigData() {
      yield {
        config: [
          {
            context: 'example',
            data: { backend: { baseUrl: 'http://localhost' } },
          },
        ],
      };
    }
  }
  ```

#### Patch Changes

- 7c116bcac7f: Fixed the way that some request errors are thrown
- 473db605a4f: Added a new `noUndeclaredProperties` option to `SchemaLoader` to support enforcing that there are no extra keys when verifying config.

## `@backstage/core-app-api` (1.7.0 → 1.8.0)

### 1.8.0

#### Minor Changes

- c89437db899: The analytics' `navigate` event will now include the route parameters as attributes of the navigate event

#### Patch Changes

- b645d70034a: Fixed a bug in the Azure auth provider which prevented getting access tokens with multiple scopes for one resource
- 42d817e76ab: Added `FrontendHostDiscovery` for config driven discovery implementation

## `@backstage/core-components` (0.13.0 → 0.13.1)

### 0.13.1

#### Patch Changes

- 83b45f9df50: Fix accessibility issue with Backstage Table's header style
- e97769f7c0b: Fix accessibility issue on controlled select input on tab navigation + keyboard enter/space action.
- b1f13cb38aa: Fix accessibility issue with Edit Metadata Link on screen readers missing notice about opening in a new tab.
- 26cff1a5dfb: Start capturing sidebar click events in analytics by default.

## `@backstage/create-app` (0.5.0 → 0.5.1)

### 0.5.1

#### Patch Changes

- 1d5e42655cd: Correct command to create new plugins
- e04bb20bdc4: Bumped create-app version.

## `@backstage/integration` (1.4.4 → 1.4.5)

### 1.4.5

#### Patch Changes

- b026275bcc8: Fixed a bug where the wrong credentials would be selected when using multiple GitHub app integrations.

## `@backstage/integration-aws-node` (0.1.2 → 0.1.3)

### 0.1.3

#### Patch Changes

- 3659c71c5d9: Standardize `@aws-sdk` v3 versions

## `@backstage/plugin-adr` (0.5.0 → 0.6.0)

### 0.6.0

#### Minor Changes

- b12cd5dc221: render SupportButton only if config is set

## `@backstage/plugin-auth-backend` (0.18.2 → 0.18.3)

### 0.18.3

#### Patch Changes

- 7c116bcac7f: Fixed the way that some request errors are thrown
- 473db605a4f: Fix config schema definition.
- 3ffcdac7d07: Added a persistent session store through the database

## `@backstage/plugin-azure-devops` (0.2.8 → 0.3.0)

### 0.3.0

#### Minor Changes

- 877df261085: The getBuildRuns function now checks contains multiple comma-separated builds and splits them to send multiple requests for each and concatenates the results.

## `@backstage/plugin-azure-sites-backend` (0.1.6 → 0.1.7)

### 0.1.7

#### Patch Changes

- d66d4f916aa: Updated URL to `/health` and corrected typos in the `README.md`

## `@backstage/plugin-badges` (0.2.41 → 0.2.42)

### 0.2.42

#### Patch Changes

- a0108c49774: Fixing badges-backend plugin to get a token from the TokenManager instead of parsing the request header. Hence, it's now possible to disable the authMiddleware for the badges-backend plugin to expose publicly the badges.

  Implementing an obfuscation feature to protect an open badges endpoint from being enumerated. The feature is disabled by default and the change is compatible with the previous version.

  **BREAKING**: `createRouter` now require that `tokenManager`, `logger`, and `identityApi`, are passed in as options.

## `@backstage/plugin-badges-backend` (0.1.38 → 0.2.0)

### 0.2.0

#### Minor Changes

- a0108c49774: Fixing badges-backend plugin to get a token from the TokenManager instead of parsing the request header. Hence, it's now possible to disable the authMiddleware for the badges-backend plugin to expose publicly the badges.

  Implementing an obfuscation feature to protect an open badges endpoint from being enumerated. The feature is disabled by default and the change is compatible with the previous version.

  **BREAKING**: `createRouter` now require that `tokenManager`, `logger`, and `identityApi`, are passed in as options.

#### Patch Changes

- 0cd552c28d8: Removed some unused dependencies

## `@backstage/plugin-bazaar` (0.2.7 → 0.2.8)

### 0.2.8

#### Patch Changes

- 900880ab7c3: Fixed `validateDOMNesting` warnings

## `@backstage/plugin-catalog` (1.10.0 → 1.11.0)

### 1.11.0

#### Minor Changes

- 2258dcae970: Added an entity namespace filter and column on the default catalog page.

  If you have a custom version of the catalog page, you can add this filter in your CatalogPage code:

  ```ts
  <CatalogFilterLayout>
    <CatalogFilterLayout.Filters>
      <EntityTypePicker />
      <UserListPicker initialFilter={initiallySelectedFilter} />
      <EntityTagPicker />
      /* if you want namespace picker */
      <EntityNamespacePicker />
    </CatalogFilterLayout.Filters>
    <CatalogFilterLayout.Content>
      <CatalogTable columns={columns} actions={actions} />
    </CatalogFilterLayout.Content>
  </CatalogFilterLayout>
  ```

  The namespace column can be added using `createNamespaceColumn();`. This is only needed if you customized the columns for CatalogTable.

## `@backstage/plugin-catalog-backend` (1.9.0 → 1.9.1)

### 1.9.1

#### Patch Changes

- ce8d203235b: Ensure that entity cache state is only written to the database when actually changed
- 485a6c5f7b5: Internal refactoring for performance in the service handlers
- 3587a968dcd: Fixed a bug in the `queryEntities` endpoint that was causing filtered entities to be included in cursor requests.
- ce335df9d1c: Improve the query for orphan pruning
- 27956d78671: Adjusted the OpenAPI schema file name according to the new structure
- 51064e6e5ee: Change orphan cleanup task to only log a message if it deleted entities.
- 12a345317ab: Remove unnecessary join in the entity facets endpoint, exclude nulls

## `@backstage/plugin-catalog-backend-module-aws` (0.1.18 → 0.2.0)

### 0.2.0

#### Minor Changes

- 1a3b5f1e390: **BREAKING**: AwsOrganizationCloudAccountProcessor.fromConfig now returns a promise instead of the instance directly.

## `@backstage/plugin-catalog-backend-module-github` (0.2.7 → 0.3.0)

### 0.3.0

#### Minor Changes

- 970678adbe2: Implement events support for `GithubMultiOrgEntityProvider`

  **BREAKING:** Passing in a custom `teamTransformer` will now correctly completely override the default transformer behavior

#### Patch Changes

- 78bb674a713: Fixed bug in queryWithPaging that caused secondary rate limit errors in GitHub with organizations having more than 1000 repositories. This change makes one request per second to avoid concurrency issues.
- bd101cefd37: Updated the `team.edited` event emitted from `GithubOrgEntityProvider` to also include teams description.

## `@backstage/plugin-catalog-backend-module-gitlab` (0.2.0 → 0.2.1)

### 0.2.1

#### Patch Changes

- b12c41fafc4: Fix a corner case where returned users are null for bots

## `@backstage/plugin-catalog-backend-module-openapi` (0.1.10 → 0.1.11)

### 0.1.11

#### Patch Changes

- accaceadffa: Fixed bug in `jsonSchemaRefPlaceholderResolver` where relative $ref files were resolved through file system instead of base URL of file

## `@backstage/plugin-catalog-backend-module-puppetdb` (0.1.1 → 0.1.2)

### 0.1.2

#### Patch Changes

- 95b2168d71b: Fixes import paths and updates documentation

## `@backstage/plugin-catalog-graph` (0.2.29 → 0.2.30)

### 0.2.30

#### Patch Changes

- d446f8fb0a8: Expose all `EntityRelationsGraphProps` to Catalog Graph Page

## `@backstage/plugin-catalog-react` (1.5.0 → 1.6.0)

### 1.6.0

#### Minor Changes

- 2258dcae970: Added an entity namespace filter and column on the default catalog page.

  If you have a custom version of the catalog page, you can add this filter in your CatalogPage code:

  ```ts
  <CatalogFilterLayout>
    <CatalogFilterLayout.Filters>
      <EntityTypePicker />
      <UserListPicker initialFilter={initiallySelectedFilter} />
      <EntityTagPicker />
      /* if you want namespace picker */
      <EntityNamespacePicker />
    </CatalogFilterLayout.Filters>
    <CatalogFilterLayout.Content>
      <CatalogTable columns={columns} actions={actions} />
    </CatalogFilterLayout.Content>
  </CatalogFilterLayout>
  ```

  The namespace column can be added using `createNamespaceColumn();`. This is only needed if you customized the columns for CatalogTable.

## `@backstage/plugin-circleci` (0.3.17 → 0.3.18)

### 0.3.18

#### Patch Changes

- 451b3cadb3d: Fixes row display for in progress jobs to not display trailing "took"
- 1c4958d905f: Hide empty time field data for queued builds which haven't started yet

## `@backstage/plugin-events-backend-module-aws-sqs` (0.1.6 → 0.2.0)

### 0.2.0

#### Minor Changes

- 2c5661f3899: Allow endpoint configuration for sqs, enabling use of localstack for testing.

#### Patch Changes

- 3659c71c5d9: Standardize `@aws-sdk` v3 versions

## `@backstage/plugin-explore` (0.4.2 → 0.4.3)

### 0.4.3

#### Patch Changes

- 1996920782b: Make sure that the first support button row does not break across lines
- 4851581deb6: Display the title of the entity on the explore card if present, otherwise stick to the name
- a6025e25d99: Updated the example code in the "Customization" section of the README to make the imports match the components used.

## `@backstage/plugin-gcalendar` (0.3.13 → 0.3.14)

### 0.3.14

#### Patch Changes

- f493ccb9589: Pass user info email scope on auth refresh to resolve invalid credentials error

## `@backstage/plugin-github-pull-requests-board` (0.1.11 → 0.1.12)

### 0.1.12

#### Patch Changes

- cf125c36569: The `EntityTeamPullRequestsContent` and `EntityTeamPullRequestsCard` support the ability to view the labels/tags added to each PR

## `@backstage/plugin-home` (0.5.1 → 0.5.2)

### 0.5.2

#### Patch Changes

- acca8966465: Remove object-hash dependency
- 957cd9b8958: Use the semantic time tag for rendering world clocks on homepage headers.
- 0e19e7b0f3a: Bump to using the later v5 versions of `@rjsf/*`
- 5272cfabc3b: Add missing @rjsf/core dependency

## `@backstage/plugin-jenkins` (0.7.16 → 0.8.0)

### 0.8.0

#### Minor Changes

- cf95c5137c9: Updated rebuild to use Jenkins API replay build, which works for Jenkins jobs that have required parameters. Jenkins SDK could not be used for this request because it does not have support for replay.

  Added link to view build in Jenkins CI/CD table action column.

## `@backstage/plugin-jenkins-backend` (0.1.34 → 0.2.0)

### 0.2.0

#### Minor Changes

- cf95c5137c9: Updated rebuild to use Jenkins API replay build, which works for Jenkins jobs that have required parameters. Jenkins SDK could not be used for this request because it does not have support for replay.

  Added link to view build in Jenkins CI/CD table action column.

#### Patch Changes

- 670a2dd6f4e: Fix handling of slashes in branch names

## `@backstage/plugin-kubernetes` (0.8.0 → 0.9.0)

### 0.9.0

#### Minor Changes

- 280ec10c18e: Added Pod logs components for Kubernetes plugin

  **BREAKING**: `kubernetesProxyApi` for custom plugins built with components from the Kubernetes plugin apis, `kubernetesProxyApi` should be added to the plugin's API list.

  ```
  ...
  export const kubernetesPlugin = createPlugin({
    id: 'kubernetes',
    apis: [
  ...
      createApiFactory({
          api: kubernetesProxyApiRef,
          deps: {
          kubernetesApi: kubernetesApiRef,
          },
          factory: ({ kubernetesApi }) =>
          new KubernetesProxyClient({
              kubernetesApi,
          }),
      }),
  ```

  **BREAKING**: `KubernetesDrawer` is now called `KubernetesStructuredMetadataTableDrawer` so that we can do more than just show `StructuredMetadataTable`

  `import { KubernetesDrawer } from "@backstage/plugin-kubernetes"`

  should now be:

  `import { KubernetesStructuredMetadataTableDrawer } from "@backstage/plugin-kubernetes"`

#### Patch Changes

- c7bad1005ba: The Kubernetes plugin now requests AKS access tokens from Azure when retrieving
  objects from clusters configured with `authProvider: aks` and sets `auth.aks` in
  its request bodies appropriately.
- a160e02c3d7: Omit managed fields in the Kubernetes resource YAML display.

## `@backstage/plugin-kubernetes-backend` (0.10.0 → 0.11.0)

### 0.11.0

#### Minor Changes

- f4114f02d49: Allow fetching pod metrics limited by a `labelSelector`.

  This is used by the Kubernetes tab on a components' page and leads to much smaller responses being received from Kubernetes, especially with larger Kubernetes clusters.

- 890988341e9: Update `aws-sdk` client from v2 to v3.

  **BREAKING**: The `AwsIamKubernetesAuthTranslator` class no longer exposes the following methods `awsGetCredentials`, `getBearerToken`, `getCredentials` and `validCredentials`. There is no replacement for these methods.

#### Patch Changes

- 05f1d74539d: Kubernetes clusters now support `authProvider: aks`. When configured this way,
  the `retrieveObjectsByServiceId` action will use the `auth.aks` value in the
  request body as a bearer token to authenticate with Kubernetes.
- 3659c71c5d9: Standardize `@aws-sdk` v3 versions
- a341129b754: Fixed a bug in the Kubernetes proxy endpoint where requests to clusters configured with client-side auth providers would always fail with a 500 status.

## `@backstage/plugin-kubernetes-common` (0.6.2 → 0.6.3)

### 0.6.3

#### Patch Changes

- 05f1d74539d: AKS access tokens can now be sent over the wire to the Kubernetes backend.

## `@backstage/plugin-octopus-deploy` (0.1.1 → 0.2.0)

### 0.2.0

#### Minor Changes

- 87211bc2873: Added support for Octopus Deploy spaces. The octopus.com/project-id annotation can now (optionally) be prefixed by a space identifier, for example. Spaces-1/Projects-102.
  Also note that some of this plugins exported API's have changed to accommodate this change, changing from separate arguments to a single object.

## `@backstage/plugin-org` (0.6.7 → 0.6.8)

### 0.6.8

#### Patch Changes

- 6e387c077a4: Changed the MembersListCard component to allow displaying aggregated members when viewing a group. Now, a toggle switch can be displayed that lets you switch between showing direct members and aggregated members.

  To enable this new feature, set the showAggregateMembersToggle prop on EntityMembersListCard:

  ```jsx
  // In packages/app/src/components/catalog/EntityPage.tsx
  const groupPage = (
    // ...
    <EntityMembersListCard showAggregateMembersToggle />
    // ...
  );
  ```

## `@backstage/plugin-permission-node` (0.7.7 → 0.7.8)

### 0.7.8

#### Patch Changes

- a788e715cfc: `createPermissionIntegrationRouter` now accepts rules and permissions for multiple resource types. Example:

  ```typescript
  createPermissionIntegrationRouter({
    resources: [
      {
        resourceType: 'resourceType-1',
        permissions: permissionsResourceType1,
        rules: rulesResourceType1,
      },
      {
        resourceType: 'resourceType-2',
        permissions: permissionsResourceType2,
        rules: rulesResourceType2,
      },
    ],
  });
  ```

## `@backstage/plugin-scaffolder` (1.13.0 → 1.13.1)

### 1.13.1

#### Patch Changes

- d560d457c98: Fix case GitLab workspace is a nested subgroup
- ad1a1429de4: Improvements to the `scaffolder/next` buttons UX:

  - Added padding around the "Create" button in the `Stepper` component
  - Added a button bar that includes the "Cancel" and "Start Over" buttons to the `OngoingTask` component. The state of these buttons match their existing counter parts in the Context Menu
  - Added a "Show Button Bar"/"Hide Button Bar" item to the `ContextMenu` component

## `@backstage/plugin-scaffolder-backend` (1.13.1 → 1.14.0)

### 1.14.0

#### Minor Changes

- 67115f532b8: Expose both types of scaffolder permissions and rules through the metadata endpoint.

  The metadata endpoint now correctly exposes both types of scaffolder permissions and rules (for both the template and action resource types) through the metadata endpoint.

- a73b3c0b097: Add ability to use `defaultNamespace` and `defaultKind` for scaffolder action `catalog:fetch`

#### Patch Changes

- 1a48b84901c: Bump minimum required version of `vm2` to be 3.9.18
- d20c87966a4: Bump minimum required version of `vm2` to be 3.9.17
- 6d954de4b06: Update typing for `RouterOptions::actions` and `ScaffolderActionsExtensionPoint::addActions` to allow any kind of action being assigned to it.

## `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.1.1 → 0.1.2)

### 0.1.2

#### Patch Changes

- 7c116bcac7f: Fixed the way that some request errors are thrown

## `@backstage/plugin-scaffolder-backend-module-gitlab` (0.1.0 → 0.2.0)

### 0.2.0

#### Minor Changes

- 439e2986be1: Add a new scaffolder action for gitlab to ensure a group exists

#### Patch Changes

- f1496d4ab6f: Fix input schema validation issue for gitlab actions:

  - gitlab:group:ensureExists
  - gitlab:projectAccessToken:create
  - gitlab:projectDeployToken:create
  - gitlab:projectVariable:create

## `@backstage/plugin-scaffolder-common` (1.2.7 → 1.3.0)

### 1.3.0

#### Minor Changes

- 82e10a6939c: Add support for Markdown text blob outputs from templates
- 67115f532b8: Expose scaffolder permissions in new sub-aggregations.

  In addition to exporting a list of all scaffolder permissions in `scaffolderPermissions`, scaffolder-common now exports `scaffolderTemplatePermissions` and `scaffolderActionPermissions`, which contain subsets of the scaffolder permissions separated by resource type.

## `@backstage/plugin-scaffolder-node` (0.1.2 → 0.1.3)

### 0.1.3

#### Patch Changes

- 6d954de4b06: Update typing for `RouterOptions::actions` and `ScaffolderActionsExtensionPoint::addActions` to allow any kind of action being assigned to it.

## `@backstage/plugin-scaffolder-react` (1.3.0 → 1.4.0)

### 1.4.0

#### Minor Changes

- 82e10a6939c: Add support for Markdown text blob outputs from templates

#### Patch Changes

- ad1a1429de4: Improvements to the `scaffolder/next` buttons UX:

  - Added padding around the "Create" button in the `Stepper` component
  - Added a button bar that includes the "Cancel" and "Start Over" buttons to the `OngoingTask` component. The state of these buttons match their existing counter parts in the Context Menu
  - Added a "Show Button Bar"/"Hide Button Bar" item to the `ContextMenu` component

## `@backstage/plugin-search` (1.2.0 → 1.3.0)

### 1.3.0

#### Minor Changes

- 750e45539ad: Add close button & improve search input.

  Material UI's Paper wrapping the SearchBar in the SearchPage was removed, we recommend users update their apps accordingly.

  SearchBarBase's TextField's label support added & aria-label uses label string if present, tests relying on the default placeholder value should still work unless custom placeholder was given.

#### Patch Changes

- 0e3d8d69318: Fixed 404 Error when fetching search results due to URL encoding changes

## `@backstage/plugin-search-backend` (1.3.0 → 1.3.1)

### 1.3.1

#### Patch Changes

- 021cfbb5152: Added an OpenAPI 3.0 spec and enforced schema-first model on the router.

## `@backstage/plugin-search-backend-module-elasticsearch` (1.2.0 → 1.3.0)

### 1.3.0

#### Minor Changes

- 3d72bdb41c7: Upgrade to aws-sdk v3 and include OpenSearch Serverless support

## `@backstage/plugin-search-react` (1.5.2 → 1.6.0)

### 1.6.0

#### Minor Changes

- 750e45539ad: Add close button & improve search input.

  Material UI's Paper wrapping the SearchBar in the SearchPage was removed, we recommend users update their apps accordingly.

  SearchBarBase's TextField's label support added & aria-label uses label string if present, tests relying on the default placeholder value should still work unless custom placeholder was given.

- 1ce7f84b2e8: <SearchBar/> accepts InputProp property that can override keys from default

#### Patch Changes

- f785f0804cd: `SearchPagination` now automatically resets the page cursor when the page limit is changed
- adb31096bc2: Fix text-overflow UI issue for Lifecycle spans in SearchFilter checkbox labels.

## `@backstage/plugin-shortcuts` (0.3.9 → 0.3.10)

### 0.3.10

#### Patch Changes

- 8a7174e297c: Marked `LocalStoredShortcuts` as deprecated, replacing it with `DefaultShortcutsApi` whose naming more clearly suggests that the shortcuts aren't necessarily stored locally (it depends on the storage implementation).

## `@backstage/plugin-stack-overflow` (0.1.14 → 0.1.15)

### 0.1.15

#### Patch Changes

- c1ff65f315a: StackOverflowSearchResultListItem can now accept an empty result prop so that it can be rendered in the suggested SearchResultListItem pattern.

## `@backstage/plugin-tech-insights` (0.3.9 → 0.3.10)

### 0.3.10

#### Patch Changes

- 22963209d23: Added the possibility to customize the check description in the scorecard component.

  - The `CheckResultRenderer` type now exposes an optional `description` method that allows to overwrite the description with a different string or a React component for a provided check result.

  Until now only the `BooleanCheck` element could be overridden, but from now on it's also possible to override the description for a check.
  As an example, the description could change depending on the check result. Refer to the [README](https://github.com/backstage/backstage/blob/master/plugins/tech-insights/README.md#adding-custom-rendering-components) file for more details

## `@backstage/plugin-tech-radar` (0.6.3 → 0.6.4)

### 0.6.4

#### Patch Changes

- be4fa53fab8: Fix description links when clicking entry in radar.
- Added the ability to display a timeline to each entry in the details box

## `@backstage/plugin-techdocs` (1.6.1 → 1.6.2)

### 1.6.2

#### Patch Changes

- 863beb49498: Re-add the possibility to have trailing slashes in Techdocs navigation.

## `@backstage/plugin-techdocs-module-addons-contrib` (1.0.12 → 1.0.13)

### 1.0.13

#### Patch Changes

- 6afc7f052ca: Show cursor pointer when hovering on lightbox

## `@backstage/plugin-techdocs-node` (1.7.0 → 1.7.1)

### 1.7.1

#### Patch Changes

- 3659c71c5d9: Standardize `@aws-sdk` v3 versions

## `@backstage/plugin-todo-backend` (0.1.41 → 0.1.42)

### 0.1.42

#### Patch Changes

- 901f1ada325: Added OpenAPI schema

## `@backstage/plugin-user-settings` (0.7.2 → 0.7.3)

### 0.7.3

#### Patch Changes

- 473db605a4f: Fix config schema definition.

## `@backstage/repo-tools` (0.2.0 → 0.3.0)

### 0.3.0

#### Minor Changes

- 799c33047ed: **BREAKING**: The OpenAPI commands are now found within the `schema openapi` sub-command. For example `yarn backstage-repo-tools schema:openapi:verify` is now `yarn backstage-repo-tools schema openapi verify`.
- 27956d78671: Generated OpenAPI files now have a `.generated.ts` file name and a warning header at the top, to highlight that they should not be edited by hand.

## `@backstage/theme` (0.2.19 → 0.3.0)

### 0.3.0

#### Minor Changes

- 98c0c199b15: Updates light theme's primary foreground and `running` status indicator colours to meet WCAG. Previously #2E77D0 changed to #1F5493.

#### Patch Changes

- 83b45f9df50: Fix accessibility issue with Backstage Table's header style

## `@backstage/plugin-analytics-module-ga4` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- 22b46f7f562: Plugin provides Backstage Analytics API for Google Analytics 4. Once installed and configured, analytics events will be sent to GA4 as your users navigate and use your Backstage instance

## `@backstage/plugin-devtools` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- 347aeca204c: Introduced the DevTools plugin, checkout the plugin's [`README.md`](https://github.com/backstage/backstage/tree/master/plugins/devtools) for more details!

## `@backstage/plugin-devtools-backend` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- 347aeca204c: Introduced the DevTools plugin, checkout the plugin's [`README.md`](https://github.com/backstage/backstage/tree/master/plugins/devtools) for more details!

## `@backstage/plugin-devtools-common` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- 347aeca204c: Introduced the DevTools plugin, checkout the plugin's [`README.md`](https://github.com/backstage/backstage/tree/master/plugins/devtools) for more details!

_Excluded dependency updates for packages: `@backstage/backend-defaults`, `@backstage/backend-plugin-api`, `@backstage/backend-tasks`, `@backstage/dev-utils`, `@backstage/integration-react`, `@backstage/plugin-adr-backend`, `@backstage/plugin-adr-common`, `@backstage/plugin-airbrake`, `@backstage/plugin-airbrake-backend`, `@backstage/plugin-allure`, `@backstage/plugin-analytics-module-ga`, `@backstage/plugin-apache-airflow`, `@backstage/plugin-api-docs`, `@backstage/plugin-apollo-explorer`, `@backstage/plugin-app-backend`, `@backstage/plugin-auth-node`, `@backstage/plugin-azure-devops-backend`, `@backstage/plugin-azure-sites`, `@backstage/plugin-bazaar-backend`, `@backstage/plugin-bitbucket-cloud-common`, `@backstage/plugin-bitrise`, `@backstage/plugin-catalog-backend-module-azure`, `@backstage/plugin-catalog-backend-module-bitbucket`, `@backstage/plugin-catalog-backend-module-bitbucket-cloud`, `@backstage/plugin-catalog-backend-module-bitbucket-server`, `@backstage/plugin-catalog-backend-module-gerrit`, `@backstage/plugin-catalog-backend-module-incremental-ingestion`, `@backstage/plugin-catalog-backend-module-ldap`, `@backstage/plugin-catalog-backend-module-msgraph`, `@backstage/plugin-catalog-import`, `@backstage/plugin-catalog-node`, `@backstage/plugin-cicd-statistics`, `@backstage/plugin-cicd-statistics-module-gitlab`, `@backstage/plugin-cloudbuild`, `@backstage/plugin-code-climate`, `@backstage/plugin-code-coverage`, `@backstage/plugin-code-coverage-backend`, `@backstage/plugin-codescene`, `@backstage/plugin-config-schema`, `@backstage/plugin-cost-insights`, `@backstage/plugin-dynatrace`, `@backstage/plugin-entity-feedback`, `@backstage/plugin-entity-feedback-backend`, `@backstage/plugin-entity-validation`, `@backstage/plugin-events-backend`, `@backstage/plugin-events-backend-module-azure`, `@backstage/plugin-events-backend-module-bitbucket-cloud`, `@backstage/plugin-events-backend-module-gerrit`, `@backstage/plugin-events-backend-module-github`, `@backstage/plugin-events-backend-module-gitlab`, `@backstage/plugin-events-backend-test-utils`, `@backstage/plugin-events-node`, `@backstage/plugin-explore-backend`, `@backstage/plugin-firehydrant`, `@backstage/plugin-fossa`, `@backstage/plugin-gcp-projects`, `@backstage/plugin-git-release-manager`, `@backstage/plugin-github-actions`, `@backstage/plugin-github-deployments`, `@backstage/plugin-github-issues`, `@backstage/plugin-gitops-profiles`, `@backstage/plugin-gocd`, `@backstage/plugin-graphiql`, `@backstage/plugin-graphql-backend`, `@backstage/plugin-graphql-voyager`, `@backstage/plugin-ilert`, `@backstage/plugin-kafka`, `@backstage/plugin-kafka-backend`, `@backstage/plugin-lighthouse`, `@backstage/plugin-lighthouse-backend`, `@backstage/plugin-linguist`, `@backstage/plugin-linguist-backend`, `@backstage/plugin-microsoft-calendar`, `@backstage/plugin-newrelic`, `@backstage/plugin-newrelic-dashboard`, `@backstage/plugin-org-react`, `@backstage/plugin-pagerduty`, `@backstage/plugin-periskop`, `@backstage/plugin-periskop-backend`, `@backstage/plugin-permission-backend`, `@backstage/plugin-playlist`, `@backstage/plugin-playlist-backend`, `@backstage/plugin-proxy-backend`, `@backstage/plugin-puppetdb`, `@backstage/plugin-rollbar`, `@backstage/plugin-rollbar-backend`, `@backstage/plugin-scaffolder-backend-module-cookiecutter`, `@backstage/plugin-scaffolder-backend-module-rails`, `@backstage/plugin-scaffolder-backend-module-sentry`, `@backstage/plugin-scaffolder-backend-module-yeoman`, `@backstage/plugin-search-backend-module-catalog`, `@backstage/plugin-search-backend-module-explore`, `@backstage/plugin-search-backend-module-pg`, `@backstage/plugin-search-backend-module-techdocs`, `@backstage/plugin-search-backend-node`, `@backstage/plugin-sentry`, `@backstage/plugin-sonarqube`, `@backstage/plugin-sonarqube-backend`, `@backstage/plugin-splunk-on-call`, `@backstage/plugin-stack-overflow-backend`, `@backstage/plugin-stackstorm`, `@backstage/plugin-tech-insights-backend`, `@backstage/plugin-tech-insights-backend-module-jsonfc`, `@backstage/plugin-tech-insights-node`, `@backstage/plugin-techdocs-addons-test-utils`, `@backstage/plugin-techdocs-backend`, `@backstage/plugin-techdocs-react`, `@backstage/plugin-todo`, `@backstage/plugin-user-settings-backend`, `@backstage/plugin-vault`, `@backstage/plugin-vault-backend`, `@backstage/plugin-xcmetrics`, `@backstage/test-utils`, `@techdocs/cli`._
