# Backstage Release 1.43.0 changelog

Changes between 1.42.5 and 1.43.0 — 161 changed and 2 added packages.

## Summary

- [Newly added packages](#newly-added-packages): 2 packages
- [Breaking changes](#breaking-changes): 3 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 7 packages
- [Other minor version bumps](#other-minor-version-bumps): 11 packages
- [Patch version bumps](#patch-version-bumps): 36 packages
- [Excluded dependency updates](#excluded-dependency-updates): 104 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/plugin-auth` (new, 0.1.0)](#backstageplugin-auth-new-010)
  - [`@backstage/plugin-auth-backend-module-openshift-provider` (new, 0.1.0)](#backstageplugin-auth-backend-module-openshift-provider-new-010)
- [Breaking changes](#breaking-changes)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.7.3 → 0.8.0)](#backstageplugin-catalog-backend-module-msgraph-073--080)
  - [`@backstage/plugin-catalog-backend-module-puppetdb` (0.2.13 → 0.2.14)](#backstageplugin-catalog-backend-module-puppetdb-0213--0214)
  - [`@backstage/plugin-catalog-react` (1.20.1 → 1.21.0)](#backstageplugin-catalog-react-1201--1210)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/core-components` (0.17.5 → 0.18.0)](#backstagecore-components-0175--0180)
  - [`@backstage/frontend-app-api` (0.12.0 → 0.13.0)](#backstagefrontend-app-api-0120--0130)
  - [`@backstage/frontend-plugin-api` (0.11.0 → 0.12.0)](#backstagefrontend-plugin-api-0110--0120)
  - [`@backstage/plugin-app` (0.2.0 → 0.3.0)](#backstageplugin-app-020--030)
  - [`@backstage/plugin-catalog-backend-module-github` (0.10.2 → 0.11.0)](#backstageplugin-catalog-backend-module-github-0102--0110)
  - [`@backstage/plugin-catalog-graph` (0.4.22 → 0.5.0)](#backstageplugin-catalog-graph-0422--050)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.8.2 → 0.9.0)](#backstageplugin-scaffolder-backend-module-github-082--090)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/app-defaults` (1.6.5 → 1.7.0)](#backstageapp-defaults-165--170)
  - [`@backstage/backend-test-utils` (1.8.0 → 1.9.0)](#backstagebackend-test-utils-180--190)
  - [`@backstage/catalog-client` (1.11.0 → 1.12.0)](#backstagecatalog-client-1110--1120)
  - [`@backstage/core-app-api` (1.18.0 → 1.19.0)](#backstagecore-app-api-1180--1190)
  - [`@backstage/core-plugin-api` (1.10.9 → 1.11.0)](#backstagecore-plugin-api-1109--1110)
  - [`@backstage/integration` (1.17.1 → 1.18.0)](#backstageintegration-1171--1180)
  - [`@backstage/plugin-catalog-backend` (3.0.1 → 3.1.0)](#backstageplugin-catalog-backend-301--310)
  - [`@backstage/plugin-catalog-node` (1.18.0 → 1.19.0)](#backstageplugin-catalog-node-1180--1190)
  - [`@backstage/plugin-techdocs` (1.14.1 → 1.15.0)](#backstageplugin-techdocs-1141--1150)
  - [`@backstage/plugin-techdocs-addons-test-utils` (1.0.52 → 1.1.0)](#backstageplugin-techdocs-addons-test-utils-1052--110)
  - [`@backstage/plugin-techdocs-backend` (2.0.5 → 2.1.0)](#backstageplugin-techdocs-backend-205--210)
- [Patch version bumps](#patch-version-bumps)
  - [`@backstage/backend-defaults` (0.12.0 → 0.12.1)](#backstagebackend-defaults-0120--0121)
  - [`@backstage/cli` (0.34.1 → 0.34.2)](#backstagecli-0341--0342)
  - [`@backstage/config-loader` (1.10.2 → 1.10.3)](#backstageconfig-loader-1102--1103)
  - [`@backstage/core-compat-api` (0.5.1 → 0.5.2)](#backstagecore-compat-api-051--052)
  - [`@backstage/create-app` (0.7.3 → 0.7.4)](#backstagecreate-app-073--074)
  - [`@backstage/frontend-defaults` (0.3.0 → 0.3.1)](#backstagefrontend-defaults-030--031)
  - [`@backstage/frontend-test-utils` (0.3.5 → 0.3.6)](#backstagefrontend-test-utils-035--036)
  - [`@backstage/plugin-app-backend` (0.5.5 → 0.5.6)](#backstageplugin-app-backend-055--056)
  - [`@backstage/plugin-auth-backend` (0.25.3 → 0.25.4)](#backstageplugin-auth-backend-0253--0254)
  - [`@backstage/plugin-auth-node` (0.6.6 → 0.6.7)](#backstageplugin-auth-node-066--067)
  - [`@backstage/plugin-auth-react` (0.1.18 → 0.1.19)](#backstageplugin-auth-react-0118--0119)
  - [`@backstage/plugin-catalog` (1.31.2 → 1.31.3)](#backstageplugin-catalog-1312--1313)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.7.2 → 0.7.3)](#backstageplugin-catalog-backend-module-gitlab-072--073)
  - [`@backstage/plugin-events-backend` (0.5.5 → 0.5.6)](#backstageplugin-events-backend-055--056)
  - [`@backstage/plugin-events-node` (0.4.14 → 0.4.15)](#backstageplugin-events-node-0414--0415)
  - [`@backstage/plugin-home` (0.8.11 → 0.8.12)](#backstageplugin-home-0811--0812)
  - [`@backstage/plugin-kubernetes-backend` (0.20.1 → 0.20.2)](#backstageplugin-kubernetes-backend-0201--0202)
  - [`@backstage/plugin-mcp-actions-backend` (0.1.2 → 0.1.3)](#backstageplugin-mcp-actions-backend-012--013)
  - [`@backstage/plugin-notifications` (0.5.8 → 0.5.9)](#backstageplugin-notifications-058--059)
  - [`@backstage/plugin-notifications-backend` (0.5.9 → 0.5.10)](#backstageplugin-notifications-backend-059--0510)
  - [`@backstage/plugin-notifications-backend-module-slack` (0.1.4 → 0.1.5)](#backstageplugin-notifications-backend-module-slack-014--015)
  - [`@backstage/plugin-notifications-node` (0.2.18 → 0.2.19)](#backstageplugin-notifications-node-0218--0219)
  - [`@backstage/plugin-org` (0.6.43 → 0.6.44)](#backstageplugin-org-0643--0644)
  - [`@backstage/plugin-scaffolder` (1.34.0 → 1.34.1)](#backstageplugin-scaffolder-1340--1341)
  - [`@backstage/plugin-scaffolder-backend` (2.2.0 → 2.2.1)](#backstageplugin-scaffolder-backend-220--221)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.9.4 → 0.9.5)](#backstageplugin-scaffolder-backend-module-gitlab-094--095)
  - [`@backstage/plugin-scaffolder-react` (1.19.0 → 1.19.1)](#backstageplugin-scaffolder-react-1190--1191)
  - [`@backstage/plugin-search-backend` (2.0.5 → 2.0.6)](#backstageplugin-search-backend-205--206)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.7.5 → 1.7.6)](#backstageplugin-search-backend-module-elasticsearch-175--176)
  - [`@backstage/plugin-search-backend-module-explore` (0.3.6 → 0.3.7)](#backstageplugin-search-backend-module-explore-036--037)
  - [`@backstage/plugin-techdocs-react` (1.3.2 → 1.3.3)](#backstageplugin-techdocs-react-132--133)
  - [`@backstage/plugin-user-settings` (0.8.25 → 0.8.26)](#backstageplugin-user-settings-0825--0826)
  - [`@backstage/repo-tools` (0.15.1 → 0.15.2)](#backstagerepo-tools-0151--0152)
  - [`@backstage/types` (1.2.1 → 1.2.2)](#backstagetypes-121--122)
  - [`@backstage/ui` (0.7.0 → 0.7.1)](#backstageui-070--071)
  - [`@techdocs/cli` (1.9.7 → 1.9.8)](#techdocscli-197--198)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/plugin-auth` (new, [0.1.0](../../changelogs/@backstage/plugin-auth.md#010))

#### 0.1.0

##### Minor Changes

- [`54ddfef`](https://github.com/backstage/backstage/commit/54ddfef): Initial publish of the `auth` frontend package

### `@backstage/plugin-auth-backend-module-openshift-provider` (new, [0.1.0](../../changelogs/@backstage/plugin-auth-backend-module-openshift-provider.md#010))

#### 0.1.0

##### Minor Changes

- [`5a84253`](https://github.com/backstage/backstage/commit/5a84253): Add new `auth-backend-module-openshift-provider`. This authentication provider enables Backstage to sign in with OpenShift.

## Breaking changes

### `@backstage/plugin-catalog-backend-module-msgraph` (0.7.3 → [0.8.0](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#080))

#### 0.8.0

##### Minor Changes

- [`577f0ed`](https://github.com/backstage/backstage/commit/577f0ed): **BREAKING**: Encode query filters for requests made to msgraph. If you currently have manually encoded characters in a filter, this is a breaking change and must be updated to avoid requests being double encoded.

  ```diff
  user:
  -    filter: department in('MARKETING', 'RESEARCH %26 DEVELOPMENT')
  +    filter: department in('MARKETING', 'RESEARCH & DEVELOPMENT')
  ```

##### Patch Changes

- [`7597781`](https://github.com/backstage/backstage/commit/7597781): Ensure that msgraph parent group stays same in case the group has multiple parents

### `@backstage/plugin-catalog-backend-module-puppetdb` (0.2.13 → [0.2.14](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0214))

#### 0.2.14

##### Patch Changes

- [`afd368e`](https://github.com/backstage/backstage/commit/afd368e): **BREAKING ALPHA**: The module has been moved from the `/alpha` export to the root of the package.

### `@backstage/plugin-catalog-react` (1.20.1 → [1.21.0](../../changelogs/@backstage/plugin-catalog-react.md#1210))

#### 1.21.0

##### Minor Changes

- [`0e9ec44`](https://github.com/backstage/backstage/commit/0e9ec44): Introduced new `streamEntities` async generator method for the catalog.

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

##### Patch Changes

- [`0174799`](https://github.com/backstage/backstage/commit/0174799): Fix a potential race condition in EntityListProvider when selecting filters
- [`4316c11`](https://github.com/backstage/backstage/commit/4316c11): Catalog table columns support i18n
- [`79ff318`](https://github.com/backstage/backstage/commit/79ff318): Removed the deprecation warning when not passing an explicit type to `EntityCardBlueprint`. Omitting the type is now intended, allowing the layout to pick the default type instead, typically `content`.
- [`ad0f58d`](https://github.com/backstage/backstage/commit/ad0f58d): Support `default*` for older packages as this package is in range for breaking `/alpha` changes

## 0.x minor version bumps

### `@backstage/core-components` (0.17.5 → [0.18.0](../../changelogs/@backstage/core-components.md#0180))

#### 0.18.0

##### Minor Changes

- [`b9a87f4`](https://github.com/backstage/backstage/commit/b9a87f4): Add optional `distance` property to `DependencyEdge` to reflect the distance to a root.

##### Patch Changes

- [`1ad3d94`](https://github.com/backstage/backstage/commit/1ad3d94): Dependency graph can now be opened in full screen mode
- [`e409bec`](https://github.com/backstage/backstage/commit/e409bec): Fixes for rendering initials in the avatar component.
- [`ae7d426`](https://github.com/backstage/backstage/commit/ae7d426): update about card links style for pretty display with other language

### `@backstage/frontend-app-api` (0.12.0 → [0.13.0](../../changelogs/@backstage/frontend-app-api.md#0130))

#### 0.13.0

##### Minor Changes

- [`6516c3d`](https://github.com/backstage/backstage/commit/6516c3d): The `createSpecializedApp` no longer throws when encountering many common errors when starting up the app. It will instead return them through the `errors` property so that they can be handled more gracefully in the app.

### `@backstage/frontend-plugin-api` (0.11.0 → [0.12.0](../../changelogs/@backstage/frontend-plugin-api.md#0120))

#### 0.12.0

##### Minor Changes

- [`894d514`](https://github.com/backstage/backstage/commit/894d514): Make `openshiftApiRef` available to the new frontend system.

##### Patch Changes

- [`2fb8b04`](https://github.com/backstage/backstage/commit/2fb8b04): Improved the types of `createFrontendPlugin` and `createFrontendModule` so that errors due to incompatible options are indicated more clearly.

### `@backstage/plugin-app` (0.2.0 → [0.3.0](../../changelogs/@backstage/plugin-app.md#030))

#### 0.3.0

##### Minor Changes

- [`99790db`](https://github.com/backstage/backstage/commit/99790db): Add implementation of OpenShift authentication provider.

### `@backstage/plugin-catalog-backend-module-github` (0.10.2 → [0.11.0](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#0110))

#### 0.11.0

##### Minor Changes

- [`03bdc68`](https://github.com/backstage/backstage/commit/03bdc68): Added support for discovery by app

### `@backstage/plugin-catalog-graph` (0.4.22 → [0.5.0](../../changelogs/@backstage/plugin-catalog-graph.md#050))

#### 0.5.0

##### Minor Changes

- [`ae6b606`](https://github.com/backstage/backstage/commit/ae6b606): Support custom relations by using an API to define known relations and which to show by default
  Fixes "simplified" bug (#30121) which caused graphs not to be simplified

### `@backstage/plugin-scaffolder-backend-module-github` (0.8.2 → [0.9.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#090))

#### 0.9.0

##### Minor Changes

- [`f0f06b4`](https://github.com/backstage/backstage/commit/f0f06b4): Adding a new scaffolder action `github:issues:create` following the reference of `github:issues:label` with `dryRun` testing possibility

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

##### Patch Changes

- [`aee107b`](https://github.com/backstage/backstage/commit/aee107b): Add `auto_init` option to `github:repo:create` action to create repository with an initial commit containing a README.md file

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

- [`6393b78`](https://github.com/backstage/backstage/commit/6393b78): Add block creations field in github branch protection scaffolder actions

## Other minor version bumps

### `@backstage/app-defaults` (1.6.5 → [1.7.0](../../changelogs/@backstage/app-defaults.md#170))

#### 1.7.0

##### Minor Changes

- [`9956704`](https://github.com/backstage/backstage/commit/9956704): Add and configure the OpenShift authentication provider to the default APIs.

### `@backstage/backend-test-utils` (1.8.0 → [1.9.0](../../changelogs/@backstage/backend-test-utils.md#190))

#### 1.9.0

##### Minor Changes

- [`4e2c237`](https://github.com/backstage/backstage/commit/4e2c237): The `mockServices.rootConfig()` instance now has an `update` method that can be used to test configuration subscriptions and updates.

### `@backstage/catalog-client` (1.11.0 → [1.12.0](../../changelogs/@backstage/catalog-client.md#1120))

#### 1.12.0

##### Minor Changes

- [`0e9ec44`](https://github.com/backstage/backstage/commit/0e9ec44): Introduced new `streamEntities` async generator method for the catalog.

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

##### Patch Changes

- [`0efcc97`](https://github.com/backstage/backstage/commit/0efcc97): Updated generated schemas

### `@backstage/core-app-api` (1.18.0 → [1.19.0](../../changelogs/@backstage/core-app-api.md#1190))

#### 1.19.0

##### Minor Changes

- [`3fca906`](https://github.com/backstage/backstage/commit/3fca906): Add `OpenShiftAuth` helper to create default OAuth flow for OpenShift.

##### Patch Changes

- [`5ae6d9d`](https://github.com/backstage/backstage/commit/5ae6d9d): feat: support no en languages

### `@backstage/core-plugin-api` (1.10.9 → [1.11.0](../../changelogs/@backstage/core-plugin-api.md#1110))

#### 1.11.0

##### Minor Changes

- [`5114627`](https://github.com/backstage/backstage/commit/5114627): Make `openshiftAuthApiRef` available in `@backstage/core-plugin-api`.

### `@backstage/integration` (1.17.1 → [1.18.0](../../changelogs/@backstage/integration.md#1180))

#### 1.18.0

##### Minor Changes

- [`03bdc68`](https://github.com/backstage/backstage/commit/03bdc68): Added support for limiting GithubAppCredentialsMux to specific apps

##### Patch Changes

- [`56897d7`](https://github.com/backstage/backstage/commit/56897d7): Fixes issue with Github credentials provider which fails to match organization name if using allowedInstallationOwners

### `@backstage/plugin-catalog-backend` (3.0.1 → [3.1.0](../../changelogs/@backstage/plugin-catalog-backend.md#310))

#### 3.1.0

##### Minor Changes

- [`9b40a55`](https://github.com/backstage/backstage/commit/9b40a55): Add support for specifying an entity `spec.type` in `catalog.rules` and `catalog.locations.rules` within the catalog configuration.

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

##### Patch Changes

- [`37b4eaf`](https://github.com/backstage/backstage/commit/37b4eaf): The 'get-catalog-entity' action now throws a ConflictError instead of generic Error if multiple entities are found, so MCP call doesn't fail with 500.
- [`2bbd24f`](https://github.com/backstage/backstage/commit/2bbd24f): Order catalog processors by priority.

  This change enables the ordering of catalog processors by their priority,
  allowing for more control over the catalog processing sequence.
  The default priority is set to 20, and processors can be assigned a custom
  priority to influence their execution order. Lower number indicates higher priority.
  The priority can be set by implementing the `getPriority` method in the processor class
  or by adding a `catalog.processors.<processorName>.priority` configuration
  in the `app-config.yaml` file. The configuration takes precedence over the method.

- [`e934a27`](https://github.com/backstage/backstage/commit/e934a27): Updating `catalog:get-catalog-entity` action to be `readOnly` and non destructive
- [`0efcc97`](https://github.com/backstage/backstage/commit/0efcc97): Updated generated schemas
- [`2204f5b`](https://github.com/backstage/backstage/commit/2204f5b): Prevent deadlock in catalog deferred stitching
- [`58874c4`](https://github.com/backstage/backstage/commit/58874c4): Add support to disable catalog providers and processors via configuration
- [`a4c82ad`](https://github.com/backstage/backstage/commit/a4c82ad): Only run provider orphan cleanup if the engine is started in the first place

### `@backstage/plugin-catalog-node` (1.18.0 → [1.19.0](../../changelogs/@backstage/plugin-catalog-node.md#1190))

#### 1.19.0

##### Minor Changes

- [`0e9ec44`](https://github.com/backstage/backstage/commit/0e9ec44): Introduced new `streamEntities` async generator method for the catalog.

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

##### Patch Changes

- [`2bbd24f`](https://github.com/backstage/backstage/commit/2bbd24f): Order catalog processors by priority.

  This change enables the ordering of catalog processors by their priority,
  allowing for more control over the catalog processing sequence.
  The default priority is set to 20, and processors can be assigned a custom
  priority to influence their execution order. Lower number indicates higher priority.
  The priority can be set by implementing the `getPriority` method in the processor class
  or by adding a `catalog.processors.<processorName>.priority` configuration
  in the `app-config.yaml` file. The configuration takes precedence over the method.

### `@backstage/plugin-techdocs` (1.14.1 → [1.15.0](../../changelogs/@backstage/plugin-techdocs.md#1150))

#### 1.15.0

##### Minor Changes

- [`a0b604c`](https://github.com/backstage/backstage/commit/a0b604c): Adding redirect handling for TechDocs URLs that reference entities that now reference an external entity for TechDocs. Including tests and documentation.

##### Patch Changes

- [`313cec7`](https://github.com/backstage/backstage/commit/313cec7): Updated dependency `dompurify` to `^3.2.4`.
- [`8d18d23`](https://github.com/backstage/backstage/commit/8d18d23): TechDocs page titles have been improved, especially for deeply nested pages.
- [`1dfee19`](https://github.com/backstage/backstage/commit/1dfee19): Reverts a change in CSS layout that shifted the content of the Techdocs too far to the left.
- [`4ce5831`](https://github.com/backstage/backstage/commit/4ce5831): Support Techdocs redirect with dompurify 3.2.6+

### `@backstage/plugin-techdocs-addons-test-utils` (1.0.52 → [1.1.0](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#110))

#### 1.1.0

##### Minor Changes

- [`72543e9`](https://github.com/backstage/backstage/commit/72543e9): Adding catalogApiRef to test-utils to support catalog API usage by TechDocs reader page.

### `@backstage/plugin-techdocs-backend` (2.0.5 → [2.1.0](../../changelogs/@backstage/plugin-techdocs-backend.md#210))

#### 2.1.0

##### Minor Changes

- [`063cdc5`](https://github.com/backstage/backstage/commit/063cdc5): Techdocs: support HumanDuration for cache TTL and timeout configuration
- [`a0b604c`](https://github.com/backstage/backstage/commit/a0b604c): Adding new entity that specifies an external entity in the techdocs-entity annotation and updates to documentation regarding TechDocs redirects.

## Patch version bumps

### `@backstage/backend-defaults` (0.12.0 → [0.12.1](../../changelogs/@backstage/backend-defaults.md#0121))

#### 0.12.1

##### Patch Changes

- [`33bd4d0`](https://github.com/backstage/backstage/commit/33bd4d0): Deduplicate discovered features discovered with discoveryFeatureLoader
- [`4eda590`](https://github.com/backstage/backstage/commit/4eda590): Fixed cache namespace and key prefix separator configuration to properly use configured values instead of hardcoded plugin ID. The cache manager now correctly combines the configured namespace with plugin IDs using the configured separator for Redis and Valkey. Memcache and memory store continue to use plugin ID as namespace.
- [`f244e61`](https://github.com/backstage/backstage/commit/f244e61): Add `backend.logger` config options to configure the `RootLoggerService`.

  Read more about the new configuration options in the
  [Root Logger Service](https://backstage.io/docs/backend-system/core-services/root-logger/)
  documentation.

### `@backstage/cli` (0.34.1 → [0.34.2](../../changelogs/@backstage/cli.md#0342))

#### 0.34.2

##### Patch Changes

- [`e6f45dc`](https://github.com/backstage/backstage/commit/e6f45dc): Updated the WebPack configuration to use `contenthash`. This fixes an issue were builds would sometimes generate output files with the same name but different content across builds, leading to breakages when loading the frontend app.
- [`fffd434`](https://github.com/backstage/backstage/commit/fffd434): Disallow import fallback of critical shared dependencies in module federation.
- [`080f252`](https://github.com/backstage/backstage/commit/080f252): Fixed the `new-frontend-plugin` template that was incorrectly passing `id` instead of `pluginId` to `createFrontendPlugin` and unnecessarily importing `React`.
- [`e0db9b8`](https://github.com/backstage/backstage/commit/e0db9b8): Modify the `backstage.json` also for custom patterns if it extends the default pattern.

  Examples:

  - `@backstage/*` (default pattern)
  - `@{backstage,backstage-community}/*`
  - `@{extra1,backstage,extra2}/*`

- [`275bda8`](https://github.com/backstage/backstage/commit/275bda8): Fixed an issue that could cause conflicts of detected modules in workspaces with multiple apps.
- [`e1adce4`](https://github.com/backstage/backstage/commit/e1adce4): Updated the backend plugin template to use a new pattern for the `TodoListService` that reduces boilerplate.

### `@backstage/config-loader` (1.10.2 → [1.10.3](../../changelogs/@backstage/config-loader.md#1103))

#### 1.10.3

##### Patch Changes

- [`a73f495`](https://github.com/backstage/backstage/commit/a73f495): Allow using `BACKSTAGE_ENV` for loading environment specific config files

### `@backstage/core-compat-api` (0.5.1 → [0.5.2](../../changelogs/@backstage/core-compat-api.md#052))

#### 0.5.2

##### Patch Changes

- [`dc01d6f`](https://github.com/backstage/backstage/commit/dc01d6f): Fix for `compatWrapper` creating many wrapping `Providers` when they should not

### `@backstage/create-app` (0.7.3 → [0.7.4](../../changelogs/@backstage/create-app.md#074))

#### 0.7.4

##### Patch Changes

- [`b2d9fc1`](https://github.com/backstage/backstage/commit/b2d9fc1): Creates a plugin that redirects from the Home page to the Catalog index page to avoid seeing a not found page error when starting the app.
- [`020d484`](https://github.com/backstage/backstage/commit/020d484): Bumped create-app version.
- [`02dbe8e`](https://github.com/backstage/backstage/commit/02dbe8e): Add missing dependency to `@backstage/cli`, `@backstage/core-plugin-api` and `@backstage/integration-react`

### `@backstage/frontend-defaults` (0.3.0 → [0.3.1](../../changelogs/@backstage/frontend-defaults.md#031))

#### 0.3.1

##### Patch Changes

- [`6516c3d`](https://github.com/backstage/backstage/commit/6516c3d): The default app now leverages the new error reporting functionality from `@backstage/frontend-app-api`. If there are critical errors during startup, an error screen that shows a summary of all errors will now be shown, rather than leaving the screen blank. Other errors will be logged as warnings in the console.

### `@backstage/frontend-test-utils` (0.3.5 → [0.3.6](../../changelogs/@backstage/frontend-test-utils.md#036))

#### 0.3.6

##### Patch Changes

- [`6516c3d`](https://github.com/backstage/backstage/commit/6516c3d): Internal update to use and throw app errors.

### `@backstage/plugin-app-backend` (0.5.5 → [0.5.6](../../changelogs/@backstage/plugin-app-backend.md#056))

#### 0.5.6

##### Patch Changes

- [`afd368e`](https://github.com/backstage/backstage/commit/afd368e): Internal update to not expose the old `createRouter`.

### `@backstage/plugin-auth-backend` (0.25.3 → [0.25.4](../../changelogs/@backstage/plugin-auth-backend.md#0254))

#### 0.25.4

##### Patch Changes

- [`1d47bf3`](https://github.com/backstage/backstage/commit/1d47bf3): Implementing Dynamic Client Registration with the OIDC server. You can enable this by setting `auth.experimentalDynamicClientRegistration.enabled` in `app-config.yaml`. This is highly experimental, but feedback welcome.
- [`54ddfef`](https://github.com/backstage/backstage/commit/54ddfef): Updating plugin metadata

### `@backstage/plugin-auth-node` (0.6.6 → [0.6.7](../../changelogs/@backstage/plugin-auth-node.md#067))

#### 0.6.7

##### Patch Changes

- [`54ddfef`](https://github.com/backstage/backstage/commit/54ddfef): Updating plugin metadata
- [`3aff9e1`](https://github.com/backstage/backstage/commit/3aff9e1): Changes OAuth cookies from domain-scoped to host-only by avoid setting the domain attribute in the default cookie configurer.

### `@backstage/plugin-auth-react` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-auth-react.md#0119))

#### 0.1.19

##### Patch Changes

- [`54ddfef`](https://github.com/backstage/backstage/commit/54ddfef): Updating plugin metadata

### `@backstage/plugin-catalog` (1.31.2 → [1.31.3](../../changelogs/@backstage/plugin-catalog.md#1313))

#### 1.31.3

##### Patch Changes

- [`4316c11`](https://github.com/backstage/backstage/commit/4316c11): Catalog table columns support i18n
- [`ce1239e`](https://github.com/backstage/backstage/commit/ce1239e): Auto-focus the first menu item in `EntityContextMenu`, and do not render a divider if an empty array is passed to `UNSTABLE_extraContextMenuItems`.
- [`85c5e04`](https://github.com/backstage/backstage/commit/85c5e04): Fix incorrect `defaultTarget` on `createComponentRouteRef`.

### `@backstage/plugin-catalog-backend-module-gitlab` (0.7.2 → [0.7.3](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#073))

#### 0.7.3

##### Patch Changes

- [`ea80e76`](https://github.com/backstage/backstage/commit/ea80e76): When possible, requests a more limited set of results from the Gitlab projects API, which can reduce the amount of network traffic required to sync with Gitlab.

### `@backstage/plugin-events-backend` (0.5.5 → [0.5.6](../../changelogs/@backstage/plugin-events-backend.md#056))

#### 0.5.6

##### Patch Changes

- [`0efcc97`](https://github.com/backstage/backstage/commit/0efcc97): Updated generated schemas

### `@backstage/plugin-events-node` (0.4.14 → [0.4.15](../../changelogs/@backstage/plugin-events-node.md#0415))

#### 0.4.15

##### Patch Changes

- [`0efcc97`](https://github.com/backstage/backstage/commit/0efcc97): Updated generated schemas

### `@backstage/plugin-home` (0.8.11 → [0.8.12](../../changelogs/@backstage/plugin-home.md#0812))

#### 0.8.12

##### Patch Changes

- [`929c55a`](https://github.com/backstage/backstage/commit/929c55a): Fixed race condition in CustomHomepageGrid by waiting for storage to load before rendering custom layout to prevent
  rendering of the default content.

### `@backstage/plugin-kubernetes-backend` (0.20.1 → [0.20.2](../../changelogs/@backstage/plugin-kubernetes-backend.md#0202))

#### 0.20.2

##### Patch Changes

- [`dd7b6d2`](https://github.com/backstage/backstage/commit/dd7b6d2): Fix a bug where `getDefault` in the `kubernetesFetcherExtensionPoint` had the wrong `this` value
- [`80cf8c9`](https://github.com/backstage/backstage/commit/80cf8c9): Fix issue with default objects not being loaded properly

### `@backstage/plugin-mcp-actions-backend` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-mcp-actions-backend.md#013))

#### 0.1.3

##### Patch Changes

- [`1d47bf3`](https://github.com/backstage/backstage/commit/1d47bf3): Proxy `/.well-known/oauth-authorization-server` to `/.well-known/openid-configuration` on `auth-backend` when `auth.experimentalDynamicClientRegistration.enabled` is enabled.
- [`7f2a4a0`](https://github.com/backstage/backstage/commit/7f2a4a0): Updating docs
- [`d08b0c9`](https://github.com/backstage/backstage/commit/d08b0c9): The MCP backend will now convert known Backstage errors into textual responses with `isError: true`.
  The error message can be useful for an LLM to understand and maybe give back to the user.
  Previously all errors where thrown out to `@modelcontextprotocol/sdk` which causes a generic 500.

### `@backstage/plugin-notifications` (0.5.8 → [0.5.9](../../changelogs/@backstage/plugin-notifications.md#059))

#### 0.5.9

##### Patch Changes

- [`4815b12`](https://github.com/backstage/backstage/commit/4815b12): Fixed missing app context when rendering the notifications view

### `@backstage/plugin-notifications-backend` (0.5.9 → [0.5.10](../../changelogs/@backstage/plugin-notifications-backend.md#0510))

#### 0.5.10

##### Patch Changes

- [`a95cebd`](https://github.com/backstage/backstage/commit/a95cebd): Internal refactoring for better type support
- [`7e7ed57`](https://github.com/backstage/backstage/commit/7e7ed57): A new extension point was added that can be used to modify how the users receiving notifications
  are resolved. The interface passed to the extension point should only return complete user entity references
  based on the notification target references and the excluded entity references. Note that the inputs are lists
  of entity references that can be any entity kind, not just user entities.

  Using this extension point will override the default behavior of resolving users with the
  `DefaultNotificationRecipientResolver`.

### `@backstage/plugin-notifications-backend-module-slack` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-notifications-backend-module-slack.md#015))

#### 0.1.5

##### Patch Changes

- [`a95cebd`](https://github.com/backstage/backstage/commit/a95cebd): Internal refactoring for better type support

### `@backstage/plugin-notifications-node` (0.2.18 → [0.2.19](../../changelogs/@backstage/plugin-notifications-node.md#0219))

#### 0.2.19

##### Patch Changes

- [`7e7ed57`](https://github.com/backstage/backstage/commit/7e7ed57): A new extension point was added that can be used to modify how the users receiving notifications
  are resolved. The interface passed to the extension point should only return complete user entity references
  based on the notification target references and the excluded entity references. Note that the inputs are lists
  of entity references that can be any entity kind, not just user entities.

  Using this extension point will override the default behavior of resolving users with the
  `DefaultNotificationRecipientResolver`.

### `@backstage/plugin-org` (0.6.43 → [0.6.44](../../changelogs/@backstage/plugin-org.md#0644))

#### 0.6.44

##### Patch Changes

- [`22b69f2`](https://github.com/backstage/backstage/commit/22b69f2): Fixing issue with extra slash in the routing

### `@backstage/plugin-scaffolder` (1.34.0 → [1.34.1](../../changelogs/@backstage/plugin-scaffolder.md#1341))

#### 1.34.1

##### Patch Changes

- [`0d415ae`](https://github.com/backstage/backstage/commit/0d415ae): Render a TechDocs link on the Scaffolder Template List page when templates include either `backstage.io/techdocs-ref` or `backstage.io/techdocs-entity` annotations, using the shared `buildTechDocsURL` helper. Also adds tests to verify both annotations and optional `backstage.io/techdocs-entity-path` are respected.
- [`7151260`](https://github.com/backstage/backstage/commit/7151260): Prevent the MultiEntityPicker from removing options present in form state when new options are selected

### `@backstage/plugin-scaffolder-backend` (2.2.0 → [2.2.1](../../changelogs/@backstage/plugin-scaffolder-backend.md#221))

#### 2.2.1

##### Patch Changes

- [`a57185f`](https://github.com/backstage/backstage/commit/a57185f): Added support for executing actions from the `ActionsRegistry` in the `scaffolder-backend`
- [`c3405db`](https://github.com/backstage/backstage/commit/c3405db): Fixed a regression that prevented uploads greater than 100KB. Uploads up to 10MB are supported again.

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.9.4 → [0.9.5](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#095))

#### 0.9.5

##### Patch Changes

- [`a84ddea`](https://github.com/backstage/backstage/commit/a84ddea): The log message now indicates that the pipeline trigger token was deleted and not pipeline itself.

### `@backstage/plugin-scaffolder-react` (1.19.0 → [1.19.1](../../changelogs/@backstage/plugin-scaffolder-react.md#1191))

#### 1.19.1

##### Patch Changes

- [`58fc108`](https://github.com/backstage/backstage/commit/58fc108): Fix scaffolder task log stream not having a minimum height

### `@backstage/plugin-search-backend` (2.0.5 → [2.0.6](../../changelogs/@backstage/plugin-search-backend.md#206))

#### 2.0.6

##### Patch Changes

- [`0efcc97`](https://github.com/backstage/backstage/commit/0efcc97): Updated generated schemas

### `@backstage/plugin-search-backend-module-elasticsearch` (1.7.5 → [1.7.6](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#176))

#### 1.7.6

##### Patch Changes

- [`cde70ca`](https://github.com/backstage/backstage/commit/cde70ca): Added support for batchKeyField in the Elasticsearch indexer to allow consistent document IDs during bulk uploads.

### `@backstage/plugin-search-backend-module-explore` (0.3.6 → [0.3.7](../../changelogs/@backstage/plugin-search-backend-module-explore.md#037))

#### 0.3.7

##### Patch Changes

- [`9a93520`](https://github.com/backstage/backstage/commit/9a93520): Deprecate and mark explore collator as moved

### `@backstage/plugin-techdocs-react` (1.3.2 → [1.3.3](../../changelogs/@backstage/plugin-techdocs-react.md#133))

#### 1.3.3

##### Patch Changes

- [`a0b604c`](https://github.com/backstage/backstage/commit/a0b604c): Update to documentation regarding TechDocs redirects.

### `@backstage/plugin-user-settings` (0.8.25 → [0.8.26](../../changelogs/@backstage/plugin-user-settings.md#0826))

#### 0.8.26

##### Patch Changes

- [`320a9ac`](https://github.com/backstage/backstage/commit/320a9ac): Add the OpenShift authenticator provider to the default `user-settings` providers page.
- [`b713b54`](https://github.com/backstage/backstage/commit/b713b54): Tool-tip text correction for the Theme selection in settings page

### `@backstage/repo-tools` (0.15.1 → [0.15.2](../../changelogs/@backstage/repo-tools.md#0152))

#### 0.15.2

##### Patch Changes

- [`133ac7a`](https://github.com/backstage/backstage/commit/133ac7a): Fixed knip-reports command failing when workspace path contains spaces and process termination issues by replacing `execFile` with `spawn` and removing `shell` option.

### `@backstage/types` (1.2.1 → [1.2.2](../../changelogs/@backstage/types.md#122))

#### 1.2.2

##### Patch Changes

- [`a95cebd`](https://github.com/backstage/backstage/commit/a95cebd): Internal refactoring for better type support

### `@backstage/ui` (0.7.0 → [0.7.1](../../changelogs/@backstage/ui.md#071))

#### 0.7.1

##### Patch Changes

- [`7307930`](https://github.com/backstage/backstage/commit/7307930): Add missing class for flex: baseline
- [`89da341`](https://github.com/backstage/backstage/commit/89da341): Fix Select component to properly attach aria-label and aria-labelledby props to the rendered element for improved accessibility.
- [`0ffa4c7`](https://github.com/backstage/backstage/commit/0ffa4c7): Removed the need to mock `window.matchMedia` in tests, falling back to default breakpoint values instead.

### `@techdocs/cli` (1.9.7 → [1.9.8](../../changelogs/@techdocs/cli.md#198))

#### 1.9.8

##### Patch Changes

- [`db63208`](https://github.com/backstage/backstage/commit/db63208): Fixed an issue where `@techdocs/cli serve` command did not pick up the latest changes to TechDocs.

## Excluded dependency updates

- `@backstage/backend-app-api` (1.2.6 → [1.2.7](../../changelogs/@backstage/backend-app-api.md#127))
- `@backstage/backend-dynamic-feature-service` (0.7.3 → [0.7.4](../../changelogs/@backstage/backend-dynamic-feature-service.md#074))
- `@backstage/backend-openapi-utils` (0.6.0 → [0.6.1](../../changelogs/@backstage/backend-openapi-utils.md#061))
- `@backstage/backend-plugin-api` (1.4.2 → [1.4.3](../../changelogs/@backstage/backend-plugin-api.md#143))
- `@backstage/dev-utils` (1.1.13 → [1.1.14](../../changelogs/@backstage/dev-utils.md#1114))
- `@backstage/frontend-dynamic-feature-loader` (0.1.4 → [0.1.5](../../changelogs/@backstage/frontend-dynamic-feature-loader.md#015))
- `@backstage/integration-react` (1.2.9 → [1.2.10](../../changelogs/@backstage/integration-react.md#1210))
- `@backstage/plugin-api-docs` (0.12.10 → [0.12.11](../../changelogs/@backstage/plugin-api-docs.md#01211))
- `@backstage/plugin-app-node` (0.1.36 → [0.1.37](../../changelogs/@backstage/plugin-app-node.md#0137))
- `@backstage/plugin-app-visualizer` (0.1.22 → [0.1.23](../../changelogs/@backstage/plugin-app-visualizer.md#0123))
- `@backstage/plugin-auth-backend-module-atlassian-provider` (0.4.6 → [0.4.7](../../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#047))
- `@backstage/plugin-auth-backend-module-auth0-provider` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-auth-backend-module-auth0-provider.md#027))
- `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.4.6 → [0.4.7](../../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#047))
- `@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.2.11 → [0.2.12](../../changelogs/@backstage/plugin-auth-backend-module-azure-easyauth-provider.md#0212))
- `@backstage/plugin-auth-backend-module-bitbucket-provider` (0.3.6 → [0.3.7](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-provider.md#037))
- `@backstage/plugin-auth-backend-module-bitbucket-server-provider` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-server-provider.md#027))
- `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.4.6 → [0.4.7](../../changelogs/@backstage/plugin-auth-backend-module-cloudflare-access-provider.md#047))
- `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.4.6 → [0.4.7](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#047))
- `@backstage/plugin-auth-backend-module-github-provider` (0.3.6 → [0.3.7](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#037))
- `@backstage/plugin-auth-backend-module-gitlab-provider` (0.3.6 → [0.3.7](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#037))
- `@backstage/plugin-auth-backend-module-google-provider` (0.3.6 → [0.3.7](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#037))
- `@backstage/plugin-auth-backend-module-guest-provider` (0.2.11 → [0.2.12](../../changelogs/@backstage/plugin-auth-backend-module-guest-provider.md#0212))
- `@backstage/plugin-auth-backend-module-microsoft-provider` (0.3.6 → [0.3.7](../../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#037))
- `@backstage/plugin-auth-backend-module-oauth2-provider` (0.4.6 → [0.4.7](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#047))
- `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.2.11 → [0.2.12](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#0212))
- `@backstage/plugin-auth-backend-module-oidc-provider` (0.4.6 → [0.4.7](../../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#047))
- `@backstage/plugin-auth-backend-module-okta-provider` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#027))
- `@backstage/plugin-auth-backend-module-onelogin-provider` (0.3.6 → [0.3.7](../../changelogs/@backstage/plugin-auth-backend-module-onelogin-provider.md#037))
- `@backstage/plugin-auth-backend-module-pinniped-provider` (0.3.6 → [0.3.7](../../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#037))
- `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.5.6 → [0.5.7](../../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#057))
- `@backstage/plugin-bitbucket-cloud-common` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#032))
- `@backstage/plugin-catalog-backend-module-aws` (0.4.14 → [0.4.15](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#0415))
- `@backstage/plugin-catalog-backend-module-azure` (0.3.8 → [0.3.9](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#039))
- `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.5.5 → [0.5.6](../../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#056))
- `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.5.2 → [0.5.3](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#053))
- `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.5.2 → [0.5.3](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#053))
- `@backstage/plugin-catalog-backend-module-gcp` (0.3.11 → [0.3.12](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#0312))
- `@backstage/plugin-catalog-backend-module-gerrit` (0.3.5 → [0.3.6](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#036))
- `@backstage/plugin-catalog-backend-module-gitea` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-catalog-backend-module-gitea.md#014))
- `@backstage/plugin-catalog-backend-module-github-org` (0.3.13 → [0.3.14](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#0314))
- `@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.12 → [0.2.13](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab-org.md#0213))
- `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.7.3 → [0.7.4](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#074))
- `@backstage/plugin-catalog-backend-module-ldap` (0.11.8 → [0.11.9](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0119))
- `@backstage/plugin-catalog-backend-module-logs` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-catalog-backend-module-logs.md#0114))
- `@backstage/plugin-catalog-backend-module-openapi` (0.2.13 → [0.2.14](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0214))
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.2.11 → [0.2.12](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#0212))
- `@backstage/plugin-catalog-backend-module-unprocessed` (0.6.3 → [0.6.4](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#064))
- `@backstage/plugin-catalog-import` (0.13.4 → [0.13.5](../../changelogs/@backstage/plugin-catalog-import.md#0135))
- `@backstage/plugin-catalog-unprocessed-entities` (0.2.20 → [0.2.21](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#0221))
- `@backstage/plugin-config-schema` (0.1.71 → [0.1.72](../../changelogs/@backstage/plugin-config-schema.md#0172))
- `@backstage/plugin-devtools` (0.1.30 → [0.1.31](../../changelogs/@backstage/plugin-devtools.md#0131))
- `@backstage/plugin-devtools-backend` (0.5.8 → [0.5.9](../../changelogs/@backstage/plugin-devtools-backend.md#059))
- `@backstage/plugin-events-backend-module-aws-sqs` (0.4.14 → [0.4.15](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#0415))
- `@backstage/plugin-events-backend-module-azure` (0.2.23 → [0.2.24](../../changelogs/@backstage/plugin-events-backend-module-azure.md#0224))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.23 → [0.2.24](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0224))
- `@backstage/plugin-events-backend-module-bitbucket-server` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-server.md#015))
- `@backstage/plugin-events-backend-module-gerrit` (0.2.23 → [0.2.24](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0224))
- `@backstage/plugin-events-backend-module-github` (0.4.3 → [0.4.4](../../changelogs/@backstage/plugin-events-backend-module-github.md#044))
- `@backstage/plugin-events-backend-module-gitlab` (0.3.4 → [0.3.5](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#035))
- `@backstage/plugin-events-backend-module-google-pubsub` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-events-backend-module-google-pubsub.md#014))
- `@backstage/plugin-events-backend-module-kafka` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-events-backend-module-kafka.md#013))
- `@backstage/plugin-events-backend-test-utils` (0.1.47 → [0.1.48](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0148))
- `@backstage/plugin-gateway-backend` (1.0.4 → [1.0.5](../../changelogs/@backstage/plugin-gateway-backend.md#105))
- `@backstage/plugin-home-react` (0.1.29 → [0.1.30](../../changelogs/@backstage/plugin-home-react.md#0130))
- `@backstage/plugin-kubernetes` (0.12.10 → [0.12.11](../../changelogs/@backstage/plugin-kubernetes.md#01211))
- `@backstage/plugin-kubernetes-cluster` (0.0.28 → [0.0.29](../../changelogs/@backstage/plugin-kubernetes-cluster.md#0029))
- `@backstage/plugin-kubernetes-node` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-kubernetes-node.md#034))
- `@backstage/plugin-kubernetes-react` (0.5.10 → [0.5.11](../../changelogs/@backstage/plugin-kubernetes-react.md#0511))
- `@backstage/plugin-notifications-backend-module-email` (0.3.12 → [0.3.13](../../changelogs/@backstage/plugin-notifications-backend-module-email.md#0313))
- `@backstage/plugin-org-react` (0.1.41 → [0.1.42](../../changelogs/@backstage/plugin-org-react.md#0142))
- `@backstage/plugin-permission-backend` (0.7.3 → [0.7.4](../../changelogs/@backstage/plugin-permission-backend.md#074))
- `@backstage/plugin-permission-backend-module-allow-all-policy` (0.2.11 → [0.2.12](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#0212))
- `@backstage/plugin-permission-node` (0.10.3 → [0.10.4](../../changelogs/@backstage/plugin-permission-node.md#0104))
- `@backstage/plugin-proxy-backend` (0.6.5 → [0.6.6](../../changelogs/@backstage/plugin-proxy-backend.md#066))
- `@backstage/plugin-proxy-node` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-proxy-node.md#018))
- `@backstage/plugin-scaffolder-backend-module-azure` (0.2.12 → [0.2.13](../../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#0213))
- `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.3.13 → [0.3.14](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket.md#0314))
- `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.2.12 → [0.2.13](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#0213))
- `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.12 → [0.2.13](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#0213))
- `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.12 → [0.3.13](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#0313))
- `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.14 → [0.3.15](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0315))
- `@backstage/plugin-scaffolder-backend-module-gcp` (0.2.12 → [0.2.13](../../changelogs/@backstage/plugin-scaffolder-backend-module-gcp.md#0213))
- `@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.12 → [0.2.13](../../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#0213))
- `@backstage/plugin-scaffolder-backend-module-gitea` (0.2.12 → [0.2.13](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#0213))
- `@backstage/plugin-scaffolder-backend-module-notifications` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-scaffolder-backend-module-notifications.md#0114))
- `@backstage/plugin-scaffolder-backend-module-rails` (0.5.12 → [0.5.13](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0513))
- `@backstage/plugin-scaffolder-backend-module-sentry` (0.2.12 → [0.2.13](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#0213))
- `@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.13 → [0.4.14](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0414))
- `@backstage/plugin-scaffolder-common` (1.7.0 → [1.7.1](../../changelogs/@backstage/plugin-scaffolder-common.md#171))
- `@backstage/plugin-scaffolder-node` (0.11.0 → [0.11.1](../../changelogs/@backstage/plugin-scaffolder-node.md#0111))
- `@backstage/plugin-scaffolder-node-test-utils` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#033))
- `@backstage/plugin-search` (1.4.29 → [1.4.30](../../changelogs/@backstage/plugin-search.md#1430))
- `@backstage/plugin-search-backend-module-catalog` (0.3.7 → [0.3.8](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#038))
- `@backstage/plugin-search-backend-module-pg` (0.5.47 → [0.5.48](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0548))
- `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.3.12 → [0.3.13](../../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#0313))
- `@backstage/plugin-search-backend-module-techdocs` (0.4.5 → [0.4.6](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#046))
- `@backstage/plugin-search-backend-node` (1.3.14 → [1.3.15](../../changelogs/@backstage/plugin-search-backend-node.md#1315))
- `@backstage/plugin-search-react` (1.9.3 → [1.9.4](../../changelogs/@backstage/plugin-search-react.md#194))
- `@backstage/plugin-signals` (0.0.22 → [0.0.23](../../changelogs/@backstage/plugin-signals.md#0023))
- `@backstage/plugin-signals-backend` (0.3.7 → [0.3.8](../../changelogs/@backstage/plugin-signals-backend.md#038))
- `@backstage/plugin-signals-node` (0.1.23 → [0.1.24](../../changelogs/@backstage/plugin-signals-node.md#0124))
- `@backstage/plugin-techdocs-module-addons-contrib` (1.1.27 → [1.1.28](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1128))
- `@backstage/plugin-techdocs-node` (1.13.6 → [1.13.7](../../changelogs/@backstage/plugin-techdocs-node.md#1137))
- `@backstage/plugin-user-settings-backend` (0.3.5 → [0.3.6](../../changelogs/@backstage/plugin-user-settings-backend.md#036))
