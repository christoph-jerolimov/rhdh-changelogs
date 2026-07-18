# Backstage Release 1.43.0 changelog

Changes between 1.42.5 and 1.43.0 — 161 changed and 2 added packages.

## `@backstage/app-defaults` (1.6.5 → 1.7.0)

### 1.7.0

#### Minor Changes

- 9956704: Add and configure the OpenShift authentication provider to the default APIs.

## `@backstage/backend-defaults` (0.12.0 → 0.12.1)

### 0.12.1

#### Patch Changes

- 33bd4d0: Deduplicate discovered features discovered with discoveryFeatureLoader
- 4eda590: Fixed cache namespace and key prefix separator configuration to properly use configured values instead of hardcoded plugin ID. The cache manager now correctly combines the configured namespace with plugin IDs using the configured separator for Redis and Valkey. Memcache and memory store continue to use plugin ID as namespace.
- f244e61: Add `backend.logger` config options to configure the `RootLoggerService`.

  Read more about the new configuration options in the
  [Root Logger Service](https://backstage.io/docs/backend-system/core-services/root-logger/)
  documentation.

## `@backstage/backend-test-utils` (1.8.0 → 1.9.0)

### 1.9.0

#### Minor Changes

- 4e2c237: The `mockServices.rootConfig()` instance now has an `update` method that can be used to test configuration subscriptions and updates.

## `@backstage/catalog-client` (1.11.0 → 1.12.0)

### 1.12.0

#### Minor Changes

- 0e9ec44: Introduced new `streamEntities` async generator method for the catalog.

  Catalog API and Catalog Service now includes a `streamEntities` method that allows for streaming entities from the catalog.
  This method is designed to handle large datasets efficiently by processing entities in a stream rather than loading them
  all into memory at once. This is useful when you need to fetch a large number of entities but do not want to use pagination
  or fetch all entities at once.

  Example usage:

  ```ts
  const pageStream = catalogClient.streamEntities({ pageSize: 100 }, { token });
  for await (const page of pageStream) {
    // Handle page of entities
    for (const entity of page) {
      console.log(entity);
    }
  }
  ```

#### Patch Changes

- 0efcc97: Updated generated schemas

## `@backstage/cli` (0.34.1 → 0.34.2)

### 0.34.2

#### Patch Changes

- e6f45dc: Updated the WebPack configuration to use `contenthash`. This fixes an issue were builds would sometimes generate output files with the same name but different content across builds, leading to breakages when loading the frontend app.
- fffd434: Disallow import fallback of critical shared dependencies in module federation.
- 080f252: Fixed the `new-frontend-plugin` template that was incorrectly passing `id` instead of `pluginId` to `createFrontendPlugin` and unnecessarily importing `React`.
- e0db9b8: Modify the `backstage.json` also for custom patterns if it extends the default pattern.

  Examples:

  - `@backstage/*` (default pattern)
  - `@{backstage,backstage-community}/*`
  - `@{extra1,backstage,extra2}/*`

- 275bda8: Fixed an issue that could cause conflicts of detected modules in workspaces with multiple apps.
- e1adce4: Updated the backend plugin template to use a new pattern for the `TodoListService` that reduces boilerplate.

## `@backstage/config-loader` (1.10.2 → 1.10.3)

### 1.10.3

#### Patch Changes

- a73f495: Allow using `BACKSTAGE_ENV` for loading environment specific config files

## `@backstage/core-app-api` (1.18.0 → 1.19.0)

### 1.19.0

#### Minor Changes

- 3fca906: Add `OpenShiftAuth` helper to create default OAuth flow for OpenShift.

#### Patch Changes

- 5ae6d9d: feat: support no en languages

## `@backstage/core-compat-api` (0.5.1 → 0.5.2)

### 0.5.2

#### Patch Changes

- dc01d6f: Fix for `compatWrapper` creating many wrapping `Providers` when they should not

## `@backstage/core-components` (0.17.5 → 0.18.0)

### 0.18.0

#### Minor Changes

- b9a87f4: Add optional `distance` property to `DependencyEdge` to reflect the distance to a root.

#### Patch Changes

- 1ad3d94: Dependency graph can now be opened in full screen mode
- e409bec: Fixes for rendering initials in the avatar component.
- ae7d426: update about card links style for pretty display with other language

## `@backstage/core-plugin-api` (1.10.9 → 1.11.0)

### 1.11.0

#### Minor Changes

- 5114627: Make `openshiftAuthApiRef` available in `@backstage/core-plugin-api`.

## `@backstage/create-app` (0.7.3 → 0.7.4)

### 0.7.4

#### Patch Changes

- b2d9fc1: Creates a plugin that redirects from the Home page to the Catalog index page to avoid seeing a not found page error when starting the app.
- 020d484: Bumped create-app version.
- 02dbe8e: Add missing dependency to `@backstage/cli`, `@backstage/core-plugin-api` and `@backstage/integration-react`

## `@backstage/frontend-app-api` (0.12.0 → 0.13.0)

### 0.13.0

#### Minor Changes

- 6516c3d: The `createSpecializedApp` no longer throws when encountering many common errors when starting up the app. It will instead return them through the `errors` property so that they can be handled more gracefully in the app.

## `@backstage/frontend-defaults` (0.3.0 → 0.3.1)

### 0.3.1

#### Patch Changes

- 6516c3d: The default app now leverages the new error reporting functionality from `@backstage/frontend-app-api`. If there are critical errors during startup, an error screen that shows a summary of all errors will now be shown, rather than leaving the screen blank. Other errors will be logged as warnings in the console.

## `@backstage/frontend-plugin-api` (0.11.0 → 0.12.0)

### 0.12.0

#### Minor Changes

- 894d514: Make `openshiftApiRef` available to the new frontend system.

#### Patch Changes

- 2fb8b04: Improved the types of `createFrontendPlugin` and `createFrontendModule` so that errors due to incompatible options are indicated more clearly.

## `@backstage/frontend-test-utils` (0.3.5 → 0.3.6)

### 0.3.6

#### Patch Changes

- 6516c3d: Internal update to use and throw app errors.

## `@backstage/integration` (1.17.1 → 1.18.0)

### 1.18.0

#### Minor Changes

- 03bdc68: Added support for limiting GithubAppCredentialsMux to specific apps

#### Patch Changes

- 56897d7: Fixes issue with Github credentials provider which fails to match organization name if using allowedInstallationOwners

## `@backstage/plugin-app` (0.2.0 → 0.3.0)

### 0.3.0

#### Minor Changes

- 99790db: Add implementation of OpenShift authentication provider.

## `@backstage/plugin-app-backend` (0.5.5 → 0.5.6)

### 0.5.6

#### Patch Changes

- afd368e: Internal update to not expose the old `createRouter`.

## `@backstage/plugin-auth-backend` (0.25.3 → 0.25.4)

### 0.25.4

#### Patch Changes

- 1d47bf3: Implementing Dynamic Client Registration with the OIDC server. You can enable this by setting `auth.experimentalDynamicClientRegistration.enabled` in `app-config.yaml`. This is highly experimental, but feedback welcome.
- 54ddfef: Updating plugin metadata

## `@backstage/plugin-auth-node` (0.6.6 → 0.6.7)

### 0.6.7

#### Patch Changes

- 54ddfef: Updating plugin metadata
- 3aff9e1: Changes OAuth cookies from domain-scoped to host-only by avoid setting the domain attribute in the default cookie configurer.

## `@backstage/plugin-auth-react` (0.1.18 → 0.1.19)

### 0.1.19

#### Patch Changes

- 54ddfef: Updating plugin metadata

## `@backstage/plugin-catalog` (1.31.2 → 1.31.3)

### 1.31.3

#### Patch Changes

- 4316c11: Catalog table columns support i18n
- ce1239e: Auto-focus the first menu item in `EntityContextMenu`, and do not render a divider if an empty array is passed to `UNSTABLE_extraContextMenuItems`.
- 85c5e04: Fix incorrect `defaultTarget` on `createComponentRouteRef`.

## `@backstage/plugin-catalog-backend` (3.0.1 → 3.1.0)

### 3.1.0

#### Minor Changes

- 9b40a55: Add support for specifying an entity `spec.type` in `catalog.rules` and `catalog.locations.rules` within the catalog configuration.

  For example, this enables allowing all `Template` entities with the type `website`:

  ```diff
    catalog:
      rules:
        - allow:
            - Component
            - API
            - Resource
            - System
            - Domain
            - Location
  +     - allow:
  +         - kind: Template
  +           spec.type: website
          locations:
            - type: url
              pattern: https://github.com/org/*\/blob/master/*.yaml
  ```

#### Patch Changes

- 37b4eaf: The 'get-catalog-entity' action now throws a ConflictError instead of generic Error if multiple entities are found, so MCP call doesn't fail with 500.
- 2bbd24f: Order catalog processors by priority.

  This change enables the ordering of catalog processors by their priority,
  allowing for more control over the catalog processing sequence.
  The default priority is set to 20, and processors can be assigned a custom
  priority to influence their execution order. Lower number indicates higher priority.
  The priority can be set by implementing the `getPriority` method in the processor class
  or by adding a `catalog.processors.<processorName>.priority` configuration
  in the `app-config.yaml` file. The configuration takes precedence over the method.

- e934a27: Updating `catalog:get-catalog-entity` action to be `readOnly` and non destructive
- 0efcc97: Updated generated schemas
- 2204f5b: Prevent deadlock in catalog deferred stitching
- 58874c4: Add support to disable catalog providers and processors via configuration
- a4c82ad: Only run provider orphan cleanup if the engine is started in the first place

## `@backstage/plugin-catalog-backend-module-github` (0.10.2 → 0.11.0)

### 0.11.0

#### Minor Changes

- 03bdc68: Added support for discovery by app

## `@backstage/plugin-catalog-backend-module-gitlab` (0.7.2 → 0.7.3)

### 0.7.3

#### Patch Changes

- ea80e76: When possible, requests a more limited set of results from the Gitlab projects API, which can reduce the amount of network traffic required to sync with Gitlab.

## `@backstage/plugin-catalog-backend-module-msgraph` (0.7.3 → 0.8.0)

### 0.8.0

#### Minor Changes

- 577f0ed: **BREAKING**: Encode query filters for requests made to msgraph. If you currently have manually encoded characters in a filter, this is a breaking change and must be updated to avoid requests being double encoded.

  ```diff
  user:
  -    filter: department in('MARKETING', 'RESEARCH %26 DEVELOPMENT')
  +    filter: department in('MARKETING', 'RESEARCH & DEVELOPMENT')
  ```

#### Patch Changes

- 7597781: Ensure that msgraph parent group stays same in case the group has multiple parents

## `@backstage/plugin-catalog-backend-module-puppetdb` (0.2.13 → 0.2.14)

### 0.2.14

#### Patch Changes

- afd368e: **BREAKING ALPHA**: The module has been moved from the `/alpha` export to the root of the package.

## `@backstage/plugin-catalog-graph` (0.4.22 → 0.5.0)

### 0.5.0

#### Minor Changes

- ae6b606: Support custom relations by using an API to define known relations and which to show by default
  Fixes "simplified" bug (#30121) which caused graphs not to be simplified

## `@backstage/plugin-catalog-node` (1.18.0 → 1.19.0)

### 1.19.0

#### Minor Changes

- 0e9ec44: Introduced new `streamEntities` async generator method for the catalog.

  Catalog API and Catalog Service now includes a `streamEntities` method that allows for streaming entities from the catalog.
  This method is designed to handle large datasets efficiently by processing entities in a stream rather than loading them
  all into memory at once. This is useful when you need to fetch a large number of entities but do not want to use pagination
  or fetch all entities at once.

  Example usage:

  ```ts
  const pageStream = catalogClient.streamEntities({ pageSize: 100 }, { token });
  for await (const page of pageStream) {
    // Handle page of entities
    for (const entity of page) {
      console.log(entity);
    }
  }
  ```

#### Patch Changes

- 2bbd24f: Order catalog processors by priority.

  This change enables the ordering of catalog processors by their priority,
  allowing for more control over the catalog processing sequence.
  The default priority is set to 20, and processors can be assigned a custom
  priority to influence their execution order. Lower number indicates higher priority.
  The priority can be set by implementing the `getPriority` method in the processor class
  or by adding a `catalog.processors.<processorName>.priority` configuration
  in the `app-config.yaml` file. The configuration takes precedence over the method.

## `@backstage/plugin-catalog-react` (1.20.1 → 1.21.0)

### 1.21.0

#### Minor Changes

- 0e9ec44: Introduced new `streamEntities` async generator method for the catalog.

  Catalog API and Catalog Service now includes a `streamEntities` method that allows for streaming entities from the catalog.
  This method is designed to handle large datasets efficiently by processing entities in a stream rather than loading them
  all into memory at once. This is useful when you need to fetch a large number of entities but do not want to use pagination
  or fetch all entities at once.

  Example usage:

  ```ts
  const pageStream = catalogClient.streamEntities({ pageSize: 100 }, { token });
  for await (const page of pageStream) {
    // Handle page of entities
    for (const entity of page) {
      console.log(entity);
    }
  }
  ```

#### Patch Changes

- 0174799: Fix a potential race condition in EntityListProvider when selecting filters
- 4316c11: Catalog table columns support i18n
- 79ff318: Removed the deprecation warning when not passing an explicit type to `EntityCardBlueprint`. Omitting the type is now intended, allowing the layout to pick the default type instead, typically `content`.
- ad0f58d: Support `default*` for older packages as this package is in range for breaking `/alpha` changes

## `@backstage/plugin-events-backend` (0.5.5 → 0.5.6)

### 0.5.6

#### Patch Changes

- 0efcc97: Updated generated schemas

## `@backstage/plugin-events-node` (0.4.14 → 0.4.15)

### 0.4.15

#### Patch Changes

- 0efcc97: Updated generated schemas

## `@backstage/plugin-home` (0.8.11 → 0.8.12)

### 0.8.12

#### Patch Changes

- 929c55a: Fixed race condition in CustomHomepageGrid by waiting for storage to load before rendering custom layout to prevent
  rendering of the default content.

## `@backstage/plugin-kubernetes-backend` (0.20.1 → 0.20.2)

### 0.20.2

#### Patch Changes

- dd7b6d2: Fix a bug where `getDefault` in the `kubernetesFetcherExtensionPoint` had the wrong `this` value
- 80cf8c9: Fix issue with default objects not being loaded properly

## `@backstage/plugin-mcp-actions-backend` (0.1.2 → 0.1.3)

### 0.1.3

#### Patch Changes

- 1d47bf3: Proxy `/.well-known/oauth-authorization-server` to `/.well-known/openid-configuration` on `auth-backend` when `auth.experimentalDynamicClientRegistration.enabled` is enabled.
- 7f2a4a0: Updating docs
- d08b0c9: The MCP backend will now convert known Backstage errors into textual responses with `isError: true`.
  The error message can be useful for an LLM to understand and maybe give back to the user.
  Previously all errors where thrown out to `@modelcontextprotocol/sdk` which causes a generic 500.

## `@backstage/plugin-notifications` (0.5.8 → 0.5.9)

### 0.5.9

#### Patch Changes

- 4815b12: Fixed missing app context when rendering the notifications view

## `@backstage/plugin-notifications-backend` (0.5.9 → 0.5.10)

### 0.5.10

#### Patch Changes

- a95cebd: Internal refactoring for better type support
- 7e7ed57: A new extension point was added that can be used to modify how the users receiving notifications
  are resolved. The interface passed to the extension point should only return complete user entity references
  based on the notification target references and the excluded entity references. Note that the inputs are lists
  of entity references that can be any entity kind, not just user entities.

  Using this extension point will override the default behavior of resolving users with the
  `DefaultNotificationRecipientResolver`.

## `@backstage/plugin-notifications-backend-module-slack` (0.1.4 → 0.1.5)

### 0.1.5

#### Patch Changes

- a95cebd: Internal refactoring for better type support

## `@backstage/plugin-notifications-node` (0.2.18 → 0.2.19)

### 0.2.19

#### Patch Changes

- 7e7ed57: A new extension point was added that can be used to modify how the users receiving notifications
  are resolved. The interface passed to the extension point should only return complete user entity references
  based on the notification target references and the excluded entity references. Note that the inputs are lists
  of entity references that can be any entity kind, not just user entities.

  Using this extension point will override the default behavior of resolving users with the
  `DefaultNotificationRecipientResolver`.

## `@backstage/plugin-org` (0.6.43 → 0.6.44)

### 0.6.44

#### Patch Changes

- 22b69f2: Fixing issue with extra slash in the routing

## `@backstage/plugin-scaffolder` (1.34.0 → 1.34.1)

### 1.34.1

#### Patch Changes

- 0d415ae: Render a TechDocs link on the Scaffolder Template List page when templates include either `backstage.io/techdocs-ref` or `backstage.io/techdocs-entity` annotations, using the shared `buildTechDocsURL` helper. Also adds tests to verify both annotations and optional `backstage.io/techdocs-entity-path` are respected.
- 7151260: Prevent the MultiEntityPicker from removing options present in form state when new options are selected

## `@backstage/plugin-scaffolder-backend` (2.2.0 → 2.2.1)

### 2.2.1

#### Patch Changes

- a57185f: Added support for executing actions from the `ActionsRegistry` in the `scaffolder-backend`
- c3405db: Fixed a regression that prevented uploads greater than 100KB. Uploads up to 10MB are supported again.

## `@backstage/plugin-scaffolder-backend-module-github` (0.8.2 → 0.9.0)

### 0.9.0

#### Minor Changes

- f0f06b4: Adding a new scaffolder action `github:issues:create` following the reference of `github:issues:label` with `dryRun` testing possibility

  It can be used like this

  ```
    steps:
      - id: create-simple-issue
        name: Create Simple Issue
        action: github:issues:create
        input:
          repoUrl: ${{ parameters.repoUrl }}
          title: "[${{ parameters.projectName }}] Simple Bug Report"
          body: |
            ## Bug Description
            This is a simple bug report created by the scaffolder template.

            ### Steps to Reproduce
            1. Run the application
            2. Navigate to the main page
            3. Click on the problematic button

            ### Expected Behavior
            The button should work correctly.

            ### Actual Behavior
            The button does not respond to clicks.
    output:
      links:
        - title: Simple Issue
          url: ${{ steps['create-simple-issue'].output.issueUrl }}
  ```

#### Patch Changes

- aee107b: Add `auto_init` option to `github:repo:create` action to create repository with an initial commit containing a README.md file

  This initial commit is created by GitHub itself and the commit is signed, so the repository will not be empty after creation.

  ```diff
    - action: github:repo:create
      id: init-new-repo
      input:
        repoUrl: 'github.com?repo=repo&owner=owner'
        description: This is the description
        visibility: private
  +     autoInit: true

  ```

- 6393b78: Add block creations field in github branch protection scaffolder actions

## `@backstage/plugin-scaffolder-backend-module-gitlab` (0.9.4 → 0.9.5)

### 0.9.5

#### Patch Changes

- a84ddea: The log message now indicates that the pipeline trigger token was deleted and not pipeline itself.

## `@backstage/plugin-scaffolder-react` (1.19.0 → 1.19.1)

### 1.19.1

#### Patch Changes

- 58fc108: Fix scaffolder task log stream not having a minimum height

## `@backstage/plugin-search-backend` (2.0.5 → 2.0.6)

### 2.0.6

#### Patch Changes

- 0efcc97: Updated generated schemas

## `@backstage/plugin-search-backend-module-elasticsearch` (1.7.5 → 1.7.6)

### 1.7.6

#### Patch Changes

- cde70ca: Added support for batchKeyField in the Elasticsearch indexer to allow consistent document IDs during bulk uploads.

## `@backstage/plugin-search-backend-module-explore` (0.3.6 → 0.3.7)

### 0.3.7

#### Patch Changes

- 9a93520: Deprecate and mark explore collator as moved

## `@backstage/plugin-techdocs` (1.14.1 → 1.15.0)

### 1.15.0

#### Minor Changes

- a0b604c: Adding redirect handling for TechDocs URLs that reference entities that now reference an external entity for TechDocs. Including tests and documentation.

#### Patch Changes

- 313cec7: Updated dependency `dompurify` to `^3.2.4`.
- 8d18d23: TechDocs page titles have been improved, especially for deeply nested pages.
- 1dfee19: Reverts a change in CSS layout that shifted the content of the Techdocs too far to the left.
- 4ce5831: Support Techdocs redirect with dompurify 3.2.6+

## `@backstage/plugin-techdocs-addons-test-utils` (1.0.52 → 1.1.0)

### 1.1.0

#### Minor Changes

- 72543e9: Adding catalogApiRef to test-utils to support catalog API usage by TechDocs reader page.

## `@backstage/plugin-techdocs-backend` (2.0.5 → 2.1.0)

### 2.1.0

#### Minor Changes

- 063cdc5: Techdocs: support HumanDuration for cache TTL and timeout configuration
- a0b604c: Adding new entity that specifies an external entity in the techdocs-entity annotation and updates to documentation regarding TechDocs redirects.

## `@backstage/plugin-techdocs-react` (1.3.2 → 1.3.3)

### 1.3.3

#### Patch Changes

- a0b604c: Update to documentation regarding TechDocs redirects.

## `@backstage/plugin-user-settings` (0.8.25 → 0.8.26)

### 0.8.26

#### Patch Changes

- 320a9ac: Add the OpenShift authenticator provider to the default `user-settings` providers page.
- b713b54: Tool-tip text correction for the Theme selection in settings page

## `@backstage/repo-tools` (0.15.1 → 0.15.2)

### 0.15.2

#### Patch Changes

- 133ac7a: Fixed knip-reports command failing when workspace path contains spaces and process termination issues by replacing `execFile` with `spawn` and removing `shell` option.

## `@backstage/types` (1.2.1 → 1.2.2)

### 1.2.2

#### Patch Changes

- a95cebd: Internal refactoring for better type support

## `@backstage/ui` (0.7.0 → 0.7.1)

### 0.7.1

#### Patch Changes

- 7307930: Add missing class for flex: baseline
- 89da341: Fix Select component to properly attach aria-label and aria-labelledby props to the rendered element for improved accessibility.
- 0ffa4c7: Removed the need to mock `window.matchMedia` in tests, falling back to default breakpoint values instead.

## `@techdocs/cli` (1.9.7 → 1.9.8)

### 1.9.8

#### Patch Changes

- db63208: Fixed an issue where `@techdocs/cli serve` command did not pick up the latest changes to TechDocs.

## `@backstage/plugin-auth` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- 54ddfef: Initial publish of the `auth` frontend package

## `@backstage/plugin-auth-backend-module-openshift-provider` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- 5a84253: Add new `auth-backend-module-openshift-provider`. This authentication provider enables Backstage to sign in with OpenShift.

_Excluded dependency updates for packages: `@backstage/backend-app-api`, `@backstage/backend-dynamic-feature-service`, `@backstage/backend-openapi-utils`, `@backstage/backend-plugin-api`, `@backstage/dev-utils`, `@backstage/frontend-dynamic-feature-loader`, `@backstage/integration-react`, `@backstage/plugin-api-docs`, `@backstage/plugin-app-node`, `@backstage/plugin-app-visualizer`, `@backstage/plugin-auth-backend-module-atlassian-provider`, `@backstage/plugin-auth-backend-module-auth0-provider`, `@backstage/plugin-auth-backend-module-aws-alb-provider`, `@backstage/plugin-auth-backend-module-azure-easyauth-provider`, `@backstage/plugin-auth-backend-module-bitbucket-provider`, `@backstage/plugin-auth-backend-module-bitbucket-server-provider`, `@backstage/plugin-auth-backend-module-cloudflare-access-provider`, `@backstage/plugin-auth-backend-module-gcp-iap-provider`, `@backstage/plugin-auth-backend-module-github-provider`, `@backstage/plugin-auth-backend-module-gitlab-provider`, `@backstage/plugin-auth-backend-module-google-provider`, `@backstage/plugin-auth-backend-module-guest-provider`, `@backstage/plugin-auth-backend-module-microsoft-provider`, `@backstage/plugin-auth-backend-module-oauth2-provider`, `@backstage/plugin-auth-backend-module-oauth2-proxy-provider`, `@backstage/plugin-auth-backend-module-oidc-provider`, `@backstage/plugin-auth-backend-module-okta-provider`, `@backstage/plugin-auth-backend-module-onelogin-provider`, `@backstage/plugin-auth-backend-module-pinniped-provider`, `@backstage/plugin-auth-backend-module-vmware-cloud-provider`, `@backstage/plugin-bitbucket-cloud-common`, `@backstage/plugin-catalog-backend-module-aws`, `@backstage/plugin-catalog-backend-module-azure`, `@backstage/plugin-catalog-backend-module-backstage-openapi`, `@backstage/plugin-catalog-backend-module-bitbucket-cloud`, `@backstage/plugin-catalog-backend-module-bitbucket-server`, `@backstage/plugin-catalog-backend-module-gcp`, `@backstage/plugin-catalog-backend-module-gerrit`, `@backstage/plugin-catalog-backend-module-gitea`, `@backstage/plugin-catalog-backend-module-github-org`, `@backstage/plugin-catalog-backend-module-gitlab-org`, `@backstage/plugin-catalog-backend-module-incremental-ingestion`, `@backstage/plugin-catalog-backend-module-ldap`, `@backstage/plugin-catalog-backend-module-logs`, `@backstage/plugin-catalog-backend-module-openapi`, `@backstage/plugin-catalog-backend-module-scaffolder-entity-model`, `@backstage/plugin-catalog-backend-module-unprocessed`, `@backstage/plugin-catalog-import`, `@backstage/plugin-catalog-unprocessed-entities`, `@backstage/plugin-config-schema`, `@backstage/plugin-devtools`, `@backstage/plugin-devtools-backend`, `@backstage/plugin-events-backend-module-aws-sqs`, `@backstage/plugin-events-backend-module-azure`, `@backstage/plugin-events-backend-module-bitbucket-cloud`, `@backstage/plugin-events-backend-module-bitbucket-server`, `@backstage/plugin-events-backend-module-gerrit`, `@backstage/plugin-events-backend-module-github`, `@backstage/plugin-events-backend-module-gitlab`, `@backstage/plugin-events-backend-module-google-pubsub`, `@backstage/plugin-events-backend-module-kafka`, `@backstage/plugin-events-backend-test-utils`, `@backstage/plugin-gateway-backend`, `@backstage/plugin-home-react`, `@backstage/plugin-kubernetes`, `@backstage/plugin-kubernetes-cluster`, `@backstage/plugin-kubernetes-node`, `@backstage/plugin-kubernetes-react`, `@backstage/plugin-notifications-backend-module-email`, `@backstage/plugin-org-react`, `@backstage/plugin-permission-backend`, `@backstage/plugin-permission-backend-module-allow-all-policy`, `@backstage/plugin-permission-node`, `@backstage/plugin-proxy-backend`, `@backstage/plugin-proxy-node`, `@backstage/plugin-scaffolder-backend-module-azure`, `@backstage/plugin-scaffolder-backend-module-bitbucket`, `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud`, `@backstage/plugin-scaffolder-backend-module-bitbucket-server`, `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown`, `@backstage/plugin-scaffolder-backend-module-cookiecutter`, `@backstage/plugin-scaffolder-backend-module-gcp`, `@backstage/plugin-scaffolder-backend-module-gerrit`, `@backstage/plugin-scaffolder-backend-module-gitea`, `@backstage/plugin-scaffolder-backend-module-notifications`, `@backstage/plugin-scaffolder-backend-module-rails`, `@backstage/plugin-scaffolder-backend-module-sentry`, `@backstage/plugin-scaffolder-backend-module-yeoman`, `@backstage/plugin-scaffolder-common`, `@backstage/plugin-scaffolder-node`, `@backstage/plugin-scaffolder-node-test-utils`, `@backstage/plugin-search`, `@backstage/plugin-search-backend-module-catalog`, `@backstage/plugin-search-backend-module-pg`, `@backstage/plugin-search-backend-module-stack-overflow-collator`, `@backstage/plugin-search-backend-module-techdocs`, `@backstage/plugin-search-backend-node`, `@backstage/plugin-search-react`, `@backstage/plugin-signals`, `@backstage/plugin-signals-backend`, `@backstage/plugin-signals-node`, `@backstage/plugin-techdocs-module-addons-contrib`, `@backstage/plugin-techdocs-node`, `@backstage/plugin-user-settings-backend`._
