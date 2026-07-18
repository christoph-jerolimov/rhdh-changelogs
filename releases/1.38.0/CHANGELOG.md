# Backstage Release 1.38.0 changelog

Changes between 1.37.1 and 1.38.0 — 154 changed and 4 added packages.

## `@backstage/app-defaults` (1.6.0 → 1.6.1)

### 1.6.1

#### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

## `@backstage/backend-defaults` (0.8.2 → 0.9.0)

### 0.9.0

#### Minor Changes

- 1daedce: Remove Throttle of Bitbucket Server API calls
- 01edf6e: Allow pass through of redis client and cluster options to Cache core service
- cf4eb13: Added `actor` property to `BackstageUserPrincipal` containing the subject of the last service (if any) who performed authentication on behalf of the user.

#### Patch Changes

- 7c6740e: Implemented SRV lookup support in the default `HostDiscovery`. You can now specify internal URLs on the form `http+srv://some-srv-name/api/{{pluginId}}` and they will be resolved in real time.
- 939116c: Added an optional `backend.trustProxy` app config value, which sets the
  corresponding [Express.js `trust proxy`](https://expressjs.com/en/guide/behind-proxies.html) setting. This lets
  you easily configure proxy trust without making a custom `configure` callback
  for the `rootHttpRouter` service.

  If you already are using a custom `configure` callback, and if that also _does not_ call `applyDefaults()`, you may want to add the following to it:

  ```ts
  const trustProxy = config.getOptional('backend.trustProxy');
  if (trustProxy !== undefined) {
    app.set('trust proxy', trustProxy);
  }
  ```

- 175528c: Adds `backend.auditor.severityLogLevelMappings` to map severity levels to log levels.

## `@backstage/backend-dynamic-feature-service` (0.6.1 → 0.6.2)

### 0.6.2

#### Patch Changes

- 3bee3c3: The new package `frontend-dynamic-features-loader` provides a frontend feature loader that dynamically
  loads frontend features based on the new frontend system and exposed as module federation remotes.
  This new frontend feature loader works hand-in-hand with a new server of frontend plugin module federation
  remotes, which is added as part of backend dynamic feature service in package `@backstage/backend-dynamic-feature-service`.

## `@backstage/backend-plugin-api` (1.2.1 → 1.3.0)

### 1.3.0

#### Minor Changes

- cf4eb13: Added `actor` property to `BackstageUserPrincipal` containing the subject of the last service (if any) who performed authentication on behalf of the user.

## `@backstage/backend-test-utils` (1.3.1 → 1.4.0)

### 1.4.0

#### Minor Changes

- cf4eb13: Added `actor` property to `BackstageUserPrincipal` containing the subject of the last service (if any) who performed authentication on behalf of the user.

## `@backstage/canon` (0.2.0 → 0.3.0)

### 0.3.0

#### Minor Changes

- df4e292: Improve class name structure using data attributes instead of class names.
- f038613: Updated TextField and Select component to work with React Hook Form.
- 1b0cf40: Add new Select component for Canon
- 5074d61: **BREAKING**: Added a new TextField component to replace the Field and Input component. After feedback, it became clear that we needed to build a more opinionated version to avoid any problem in the future.

#### Patch Changes

- 6af7b16: Updated styles for the Menu component in Canon.
- bcbc593: Fix Checkbox styles on dark theme in Canon.
- e7efb7d: Add new breakpoint helpers up(), down() and current breakpoint to help you use our breakpoints in your React components.
- f7cb538: Internal refactor and fixes to the prop extraction logic for layout components.
- 35b36ec: Add new Collapsible component for Canon.
- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- 513477f: Add global CSS reset for anchor tags.
- 24f0e08: Improved Container styles, changing our max-width to 120rem and improving padding on smaller screens.
- 851779d: Add new Avatar component to Canon.
- ec5ebd1: Add new TableCellProfile component for Table and DataTable in Canon.
- 5e80f0b: Fix types on the Icon component.
- 0e654bf: Add new DataTable component and update Table component styles.
- 7ae28ba: Move styles to the root of the TextField component.
- 4fe5b08: We added a render prop to the Link component to make sure it can work with React Router.
- 74d463c: Fix Select styles on small sizes + with long option names in Canon.
- f25a5be: Added a new gray scale for Canon for both light and dark theme.
- 5ee4fc2: Add support for column sizing in DataTable.
- 05a5003: Fix the Icon component when the name is not found to return null instead of an empty SVG.

## `@backstage/cli` (0.31.1 → 0.32.0)

### 0.32.0

#### Minor Changes

- a47fd39: Removes default React imports from template files, aligning with the requirements for the upcoming React 19 migration. Introduces a new ESLint rule to disallow `import React from 'react'` and `import * as React from 'react'`.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- 65b584c: Internal update to move the `new` and `create-github-app` to their own module.
- c7254ae: Internal update to move the `clean`, `pre/postpack` and `fix` commands into their own separate module.

#### Patch Changes

- 4ea76f7: Bump @module-federation/enhanced ^0.9.0 to fix GHSA-593f-38f6-jp5m
- 87a5cb4: Fixed an issue causing the `repo lint` command to fail when the `--max-warnings` option was used.
- 6969f79: Avoid trailing `/*` when automatically adding imports for package with multiple entry points.
- 98b7131: Update the `to do` plugin template to stop using the deprecated catalog alpha service reference.
  If you start seeing the `should create TODO item with catalog information` test failing, you have two options to fix this:
  Update the test to mock the legacy alpha catalog service, or migrate the `TODO` plugin backend to use the new catalog service reference.
  We recommend the second option, see [this](https://github.com/backstage/backstage/pull/29450/files/267115d0436009443ca68ac84e7dcc646c9c938d#diff-47e01aeb12dd55fab9e697f810be21a8d08d39c37df1b078f6d0894f9bad5a1b) pull request for an example of how to do the migration.
- d5c4fed: make certificate strings optional for Dev environments
- d83f3f4: Resolved a problem where the `start` command did not correctly handle multiple `--require` flags, ensuring all specified modules are now properly loaded.
- d2091c6: Added a new `repo start` command to replace the existing pattern of using `yarn dev` scripts. The `repo start` command runs the app and/or backend package in the repo by default, but will also fall back to running other individual frontend or backend packages or even plugin dev entry points if the can be uniquely selected.

  The goal of this change is to reduce the number of different necessary scripts and align on `yarn start` being the only command needed for local development, similar to how `repo test` handles testing in the repo. It also opens up for more powerful options, like the `--plugin <pluginId>` flag that runs the dev entry point of the selected plugin.

  The new script is installed as follows, replacing the existing `yarn start` script:

  ```json
  {
    "scripts": {
      "start": "backstage-cli repo start"
    }
  }
  ```

  In order to help users migrate in existing projects, it is recommended to add the following scripts to the root `package.json`:

  ```json
  {
    "scripts": {
      "dev": "echo \"Use 'yarn start' instead\"",
      "start-backend": "echo \"Use 'yarn start backend' instead\""
    }
  }
  ```

  For more information, run `yarn start --help` once the new command is installed.

- 918c883: Included a reference to the JSX transform guide in the warning about using the default React import.

## `@backstage/core-app-api` (1.16.0 → 1.16.1)

### 1.16.1

#### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

## `@backstage/core-compat-api` (0.4.0 → 0.4.1)

### 0.4.1

#### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

## `@backstage/core-components` (0.17.0 → 0.17.1)

### 0.17.1

#### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- 5d7bad4: Fixed the messaging in the `AlertDisplay` where it was claiming that there were older messages available rather than newer.

## `@backstage/core-plugin-api` (1.10.5 → 1.10.6)

### 1.10.6

#### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

## `@backstage/create-app` (0.6.0 → 0.6.1)

### 0.6.1

#### Patch Changes

- 5590536: Bumped create-app version.
- 2fc663a: Bumped create-app version.
- edabbd6: Updated the root `package.json` in the template to use the new `backstage-cli repo start` command.

  The `yarn dev` command is now redundant and has been removed from the template. We recommend existing projects to add these or similar scripts to help redirect users:

  ```json
  {
    "scripts": {
      "dev": "echo \"Use 'yarn start' instead\"",
      "start-backend": "echo \"Use 'yarn start backend' instead\""
    }
  }
  ```

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- c761cf5: **BREAKING** The `publish:github` scaffolder action now defaults to initializing with a branch named "main" instead of "master" when creating new repositories.

  If you or your organization have relied on all new github repositories having a default branch name of "master" you **must** set the `defaultBranch: 'master'` in your existing templates that feature the `publish:github` scaffolder action.

  To keep using the name "master" for your new github repos, these are the **required** changes:

  ```diff
      - id: publish
        name: Publish
        action: publish:github
        input:
          allowedHosts: ['github.com']
          description: This is ${{ parameters.name }}
          repoUrl: ${{ parameters.repoUrl }}
  +       defaultBranch: 'master'
  ```

## `@backstage/dev-utils` (1.1.8 → 1.1.9)

### 1.1.9

#### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

## `@backstage/frontend-app-api` (0.11.0 → 0.11.1)

### 0.11.1

#### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

## `@backstage/frontend-defaults` (0.2.0 → 0.2.1)

### 0.2.1

#### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- 3bee3c3: The new package `frontend-dynamic-features-loader` provides a frontend feature loader that dynamically
  loads frontend features based on the new frontend system and exposed as module federation remotes.
  This new frontend feature loader works hand-in-hand with a new server of frontend plugin module federation
  remotes, which is added as part of backend dynamic feature service in package `@backstage/backend-dynamic-feature-service`.

## `@backstage/frontend-plugin-api` (0.10.0 → 0.10.1)

### 0.10.1

#### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

## `@backstage/frontend-test-utils` (0.3.0 → 0.3.1)

### 0.3.1

#### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

## `@backstage/integration` (1.16.2 → 1.16.3)

### 1.16.3

#### Patch Changes

- 9768992: Mark GitHub `webhookSecret` config property as optional. A `webhookSecret` is not required when creating a GitHub App.

## `@backstage/integration-react` (1.2.5 → 1.2.6)

### 1.2.6

#### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- 5d10f99: Added scope `project` for Bitbucket Cloud.

## `@backstage/plugin-api-docs` (0.12.5 → 0.12.6)

### 0.12.6

#### Patch Changes

- 317bc3d: api-docs plugin support i18n
- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

## `@backstage/plugin-api-docs-module-protoc-gen-doc` (0.1.9 → 0.1.10)

### 0.1.10

#### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

## `@backstage/plugin-app` (0.1.7 → 0.1.8)

### 0.1.8

#### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

## `@backstage/plugin-app-visualizer` (0.1.17 → 0.1.18)

### 0.1.18

#### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

## `@backstage/plugin-auth-backend` (0.24.4 → 0.24.5)

### 0.24.5

#### Patch Changes

- 25d05f9: Slight update to the config schema

## `@backstage/plugin-auth-backend-module-bitbucket-provider` (0.3.1 → 0.3.2)

### 0.3.2

#### Patch Changes

- 5d10f99: Enabled persistency of scopes for Bitbucket Cloud.

## `@backstage/plugin-auth-backend-module-oidc-provider` (0.4.1 → 0.4.2)

### 0.4.2

#### Patch Changes

- 7495edf: Added custom timeout setting for oidc provider

  Here is an example of how to use a custom timeout with the configuration:

  ```yaml
  auth:
    oidc:
      production:
        clientId: ${AUTH_GOOGLE_CLIENT_ID}
        clientSecret: ${AUTH_GOOGLE_CLIENT_SECRET}
        timeout:
          seconds: 30
  ```

## `@backstage/plugin-auth-react` (0.1.13 → 0.1.14)

### 0.1.14

#### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

## `@backstage/plugin-catalog` (1.28.0 → 1.29.0)

### 1.29.0

#### Minor Changes

- 9454ef9: Added support of filtering based on system columns in catalog table
- 61d350f: **BREAKING ALPHA**: `CatalogFilterBlueprint`, used in the new frontend system, is now exported under plugin-catalog-react instead of plugin-catalog.

  ```diff
  + import { CatalogFilterBlueprint } from '@backstage/plugin-catalog-react/alpha';
  - import { CatalogFilterBlueprint } from '@backstage/plugin-catalog/alpha';
  ```

- 09afd67: Adds `EntityContextMenuItemBlueprint` to enable extending the entity page's context menu with user defined items.

  For example:

  ```ts
  import { EntityContextMenuItemBlueprint } from '@backstage/plugin-catalog-react/alpha';

  const myCustomHref = EntityContextMenuItemBlueprint.make({
    name: 'test-href',
    params: {
      icon: <span>Example Icon</span>,
      useProps: () => ({
        title: 'Example Href',
        href: '/example-path',
        disabled: false,
        component: 'a',
      }),
    },
  });

  const myCustomOnClick = EntityContextMenuItemBlueprint.make({
    name: 'test-click',
    params: {
      icon: <span>Test Icon</span>,
      useProps: () => ({
        title: 'Example onClick',
        onClick: () => window.alert('Hello world!'),
        disabled: false,
      }),
    },
  });
  ```

#### Patch Changes

- 3f7e4f1: Fixed the layout of summary cards in the new frontend system, ensuring that the horizontal scroll grid doesn't grow too large as well as tweaked its scrolling parameters.
- e655f62: Updated `README.md` to use `yarn start` instead of `yarn dev`.
- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- 3f7e4f1: The about, links, and labels card now all have the `info` card type by default in the new frontend system.
- 3f7e4f1: The overview content is now part of the overview group by default in the new frontend system.

## `@backstage/plugin-catalog-backend` (1.32.0 → 1.32.1)

### 1.32.1

#### Patch Changes

- 7cc4995: Fix for duplicate results in `queryEntities` when providing an `orderField` parameter

## `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.4.6 → 0.4.7)

### 0.4.7

#### Patch Changes

- 146e41b: Fixed bug in event-based discovery that caused unnecessary API calls to Bitbucket Cloud

## `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.3.3 → 0.4.0)

### 0.4.0

#### Minor Changes

- 1daedce: Remove Throttle of Bitbucket Server API calls
- 7b3ed9b: Added the ability for the plugin to receive events coming from Bitbucket Server push webhooks. It then performs a delta mutation on the catalog.

## `@backstage/plugin-catalog-backend-module-github` (0.7.11 → 0.8.0)

### 0.8.0

#### Minor Changes

- f0c22eb: **BREAKING**: Explicitly rejects branch names containing a slash character.

  The module now rejects any configuration that contains slashes in branch names. The reason for this is that the ingestion will run into downstream problems if they were let through. If you had configuration with a slash in the branch name in `filters.branch`, your application may fail to start up.

  If you are affected by this, please move over to using branches that do not have slashes in them.

#### Patch Changes

- 16648ef: Added `validateLocationsExist` to the config definition where it was missing.

## `@backstage/plugin-catalog-backend-module-gitlab` (0.6.4 → 0.6.5)

### 0.6.5

#### Patch Changes

- a568cda: add filter for repos by membership and topics
- 871a8db: fix: Add missing config options to config declaration file

## `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.6.4 → 0.6.5)

### 0.6.5

#### Patch Changes

- 27d1031: fixed misleading example location annotations in docs

## `@backstage/plugin-catalog-graph` (0.4.17 → 0.4.18)

### 0.4.18

#### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

## `@backstage/plugin-catalog-import` (0.12.12 → 0.12.13)

### 0.12.13

#### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- 5b9514f: Expose the `UnpackNestedValue` type as it's been removed from `react-hook-form`
- f1d9a64: adding translation for `Register an existing component` text

## `@backstage/plugin-catalog-node` (1.16.2 → 1.16.3)

### 1.16.3

#### Patch Changes

- 2c5598c: Adds documentation for the CatalogProcessingExtensionPoint functions.
- 98b7131: Use a different ID for the deprecated alpha version of the catalog service, as it has a different type definition and cannot be used interchangeably with the non-alpha version.

## `@backstage/plugin-catalog-react` (1.16.0 → 1.17.0)

### 1.17.0

#### Minor Changes

- 0f37fa8: `entityRouteParams` now also accepts entity refs, and can help with encoding the resulting parameters.
- 61d350f: **BREAKING ALPHA**: `CatalogFilterBlueprint`, used in the new frontend system, is now exported under plugin-catalog-react instead of plugin-catalog.

  ```diff
  + import { CatalogFilterBlueprint } from '@backstage/plugin-catalog-react/alpha';
  - import { CatalogFilterBlueprint } from '@backstage/plugin-catalog/alpha';
  ```

- 09afd67: Adds `EntityContextMenuItemBlueprint` to enable extending the entity page's context menu with user defined items.

  For example:

  ```ts
  import { EntityContextMenuItemBlueprint } from '@backstage/plugin-catalog-react/alpha';

  const myCustomHref = EntityContextMenuItemBlueprint.make({
    name: 'test-href',
    params: {
      icon: <span>Example Icon</span>,
      useProps: () => ({
        title: 'Example Href',
        href: '/example-path',
        disabled: false,
        component: 'a',
      }),
    },
  });

  const myCustomOnClick = EntityContextMenuItemBlueprint.make({
    name: 'test-click',
    params: {
      icon: <span>Test Icon</span>,
      useProps: () => ({
        title: 'Example onClick',
        onClick: () => window.alert('Hello world!'),
        disabled: false,
      }),
    },
  });
  ```

#### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- 3f7e4f1: Added a new `overview` entity content group for the new frontend system.
- 186d016: Add `operation` to alpha `defaultEntityContentGroups`.
- 221ddba: Fix offset pagination to reset when updating filters in `useEntityList`

## `@backstage/plugin-catalog-unprocessed-entities` (0.2.15 → 0.2.16)

### 0.2.16

#### Patch Changes

- ba88bfa: Added confirmation popup for delete entities in Catalog Unprocessed Entities plugin
- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- 2479827: Fixed the `convertTimeToLocalTimezone` function in the FailedEntities component to correctly parse ISO 8601 date strings and set the timezone to the current local timezone.

## `@backstage/plugin-config-schema` (0.1.66 → 0.1.67)

### 0.1.67

#### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

## `@backstage/plugin-devtools` (0.1.25 → 0.1.26)

### 0.1.26

#### Patch Changes

- e655f62: Updated `README.md` to use `yarn start` instead of `yarn dev`.
- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

## `@backstage/plugin-events-backend-module-github` (0.2.18 → 0.3.0)

### 0.3.0

#### Minor Changes

- 317ceb7: **BREAKING ALPHA**: Modules from `events-backend-module-github` and `events-backend-module-gitlab` are now exported as `default` instead of being a named export. In addition, they have been moved from `aplha` to `public`.

#### Patch Changes

- 735fe12: Don't hard fail for not configuring `webhookSecret` for the GitHub and GitLab events backend. Instead, we don't add the ingress.

## `@backstage/plugin-events-backend-module-gitlab` (0.2.18 → 0.3.0)

### 0.3.0

#### Minor Changes

- 317ceb7: **BREAKING ALPHA**: Modules from `events-backend-module-github` and `events-backend-module-gitlab` are now exported as `default` instead of being a named export. In addition, they have been moved from `aplha` to `public`.

#### Patch Changes

- 735fe12: Don't hard fail for not configuring `webhookSecret` for the GitHub and GitLab events backend. Instead, we don't add the ingress.

## `@backstage/plugin-home` (0.8.6 → 0.8.7)

### 0.8.7

#### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

## `@backstage/plugin-home-react` (0.1.24 → 0.1.25)

### 0.1.25

#### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- 2e4cb15: Fixes auto-hiding of content divider when title not specified

## `@backstage/plugin-kubernetes` (0.12.5 → 0.12.6)

### 0.12.6

#### Patch Changes

- b877e46: Added New Frontend System filter for the Kubernetes tab to use `isKubernetesAvailable` to control its visibility
- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

## `@backstage/plugin-kubernetes-cluster` (0.0.23 → 0.0.24)

### 0.0.24

#### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

## `@backstage/plugin-kubernetes-react` (0.5.5 → 0.5.6)

### 0.5.6

#### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

## `@backstage/plugin-notifications` (0.5.3 → 0.5.4)

### 0.5.4

#### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

## `@backstage/plugin-notifications-backend` (0.5.4 → 0.5.5)

### 0.5.5

#### Patch Changes

- 9a6080e: Allow throttling notification sending not to block the system with huge amount of receiving users

## `@backstage/plugin-org` (0.6.37 → 0.6.38)

### 0.6.38

#### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

## `@backstage/plugin-org-react` (0.1.36 → 0.1.37)

### 0.1.37

#### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

## `@backstage/plugin-permission-backend` (0.5.55 → 0.6.0)

### 0.6.0

#### Minor Changes

- 78eaa50: Improved validation for the `/authorize` endpoint when a `resourceRef` is provided alongside a basic permission. Additionally, introduced a clearer error message for cases where users attempt to directly evaluate conditional permissions.

## `@backstage/plugin-permission-react` (0.4.32 → 0.4.33)

### 0.4.33

#### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

## `@backstage/plugin-proxy-backend` (0.6.0 → 0.6.1)

### 0.6.1

#### Patch Changes

- 9b5b744: Fixed handling of proxied SSE connections when the upstream server closes the connection

## `@backstage/plugin-scaffolder` (1.29.0 → 1.30.0)

### 1.30.0

#### Minor Changes

- 76681a5: **BREAKING ALPHA**: Extract out schema rendering components into their own Component. This means that the translation keys have changed for `actionsPage.content.tableCell.*`. They have moved to their own root key `renderSchema.*` instead.

  ```diff
  ...
  -        tableCell: {
  -          name: 'Name',
  -          title: 'Title',
  -          description: 'Description',
  -          type: 'Type',
  -        },
  -        noRowsDescription: 'No schema defined',
  ...
  +    renderSchema: {
  +      tableCell: {
  +        name: 'Name',
  +        title: 'Title',
  +        description: 'Description',
  +        type: 'Type',
  +      },
  +      undefined: 'No schema defined',
  +    },
  ```

- 5890016: add api to retrieve template extensions info from scaffolder-backend

#### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- 407eba1: Tweaked template editor tooltip to mention HTTPS requirement.

## `@backstage/plugin-scaffolder-backend` (1.31.0 → 1.32.0)

### 1.32.0

#### Minor Changes

- 75e4db4: add template-extensions scaffolder service endpoint

#### Patch Changes

- 8685cab: Added `template` and `step` labels for scaffolder histogram metrics: `scaffolder_task_duration` and `scaffolder_step_duration`
- 497d47a: Document the internal built-in filters, and ensure that the types are validated when using `createTemplateFilter` and `createTemplateGlobalFunction` from the `zod` schema.

## `@backstage/plugin-scaffolder-backend-module-azure` (0.2.7 → 0.2.8)

### 0.2.8

#### Patch Changes

- 2bd41ce: Made "publish:azure" action idempotent

## `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.3.8 → 0.3.9)

### 0.3.9

#### Patch Changes

- adfceee: Made "publish:bitbucket" action idempotent

## `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.2.7 → 0.2.8)

### 0.2.8

#### Patch Changes

- 5266f1c: Made "publish:bitbucketCloud" action idempotent

## `@backstage/plugin-scaffolder-backend-module-github` (0.6.1 → 0.7.0)

### 0.7.0

#### Minor Changes

- c761cf5: **BREAKING** The `publish:github` scaffolder action now defaults to initializing with a branch named "main" instead of "master" when creating new repositories.

  If you or your organization have relied on all new github repositories having a default branch name of "master" you **must** set the `defaultBranch: 'master'` in your existing templates that feature the `publish:github` scaffolder action.

  To keep using the name "master" for your new github repos, these are the **required** changes:

  ```diff
      - id: publish
        name: Publish
        action: publish:github
        input:
          allowedHosts: ['github.com']
          description: This is ${{ parameters.name }}
          repoUrl: ${{ parameters.repoUrl }}
  +       defaultBranch: 'master'
  ```

#### Patch Changes

- 1af427a: Made "github:autolinks:create" action idempotent
- 79dc5ac: Made "github:deployKey:create" action idempotent
- 411c879: Add support to github:repo:create to allow branch updates
- 180ea6e: Made "github:branch-protection:create" action idempotent
- 0be1a1e: Made "publish:github" action idempotent
- a833f0f: Made "github:actions:dispatch" action idempotent

## `@backstage/plugin-scaffolder-backend-module-gitlab` (0.8.1 → 0.9.0)

### 0.9.0

#### Minor Changes

- d86ce21: Added additional feedback in case branch is already created

#### Patch Changes

- 003dc15: Updated the path field in the `gitlab:group:ensureExists` action to support also strings with multiple segments (e.g. `group/subgroup`)
- 19e23da: Adds more context to the `gitlab:repo:push` `commitAction` property for the installed actions section in the scaffolder

## `@backstage/plugin-scaffolder-backend-module-notifications` (0.1.8 → 0.1.9)

### 0.1.9

#### Patch Changes

- 25a7675: Made "notification:send" action idempotent

## `@backstage/plugin-scaffolder-backend-module-sentry` (0.2.7 → 0.2.8)

### 0.2.8

#### Patch Changes

- dcda66a: Made "sentry:project:create" action idempotent

## `@backstage/plugin-scaffolder-node` (0.8.0 → 0.8.1)

### 0.8.1

#### Patch Changes

- 497d47a: Document the internal built-in filters, and ensure that the types are validated when using `createTemplateFilter` and `createTemplateGlobalFunction` from the `zod` schema.

## `@backstage/plugin-scaffolder-react` (1.14.6 → 1.15.0)

### 1.15.0

#### Minor Changes

- 5890016: add api to retrieve template extensions info from scaffolder-backend

#### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- 6ed42b7: Scaffolding - Template card - button to show template entity detail
- 7ae9996: Fixes the detail icon in light theme to be visible in proper color (same as favorite star).

## `@backstage/plugin-search` (1.4.24 → 1.4.25)

### 1.4.25

#### Patch Changes

- e655f62: Updated `README.md` to use `yarn start` instead of `yarn dev`.
- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

## `@backstage/plugin-search-react` (1.8.7 → 1.8.8)

### 1.8.8

#### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

## `@backstage/plugin-techdocs` (1.12.4 → 1.12.5)

### 1.12.5

#### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

## `@backstage/plugin-techdocs-addons-test-utils` (1.0.46 → 1.0.47)

### 1.0.47

#### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

## `@backstage/plugin-techdocs-module-addons-contrib` (1.1.22 → 1.1.23)

### 1.1.23

#### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- 9c12a76: Fixed rendering issues in `ReportIssue` addon for unsupported repository types and improved shadow DOM event handling. The addon now properly prevents initialization when encountering unsupported repository types and correctly handles selection events within the shadow DOM.

## `@backstage/plugin-techdocs-node` (1.13.1 → 1.13.2)

### 1.13.2

#### Patch Changes

- 304a422: Update AWS file retrieval logic from storing file in buffer array to piping to res for better memory efficiency.
- 2d7a3b8: Update Azure file retrieval logic from storing file in buffer array to piping to res for better memory efficiency.

## `@backstage/plugin-techdocs-react` (1.2.15 → 1.2.16)

### 1.2.16

#### Patch Changes

- 0e9f7fe: Fix catalog entity docs page not loading due to multiple addons data attachment in the New Frontend System.
- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

## `@backstage/plugin-user-settings` (0.8.20 → 0.8.21)

### 0.8.21

#### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

## `@backstage/repo-tools` (0.13.1 → 0.13.2)

### 0.13.2

#### Patch Changes

- 18ce51c: Checking up the files where `createRouter` has been declared and check if `@deprecated` tag exists. If it does not exist then only the message will appear.

## `@backstage/test-utils` (1.7.6 → 1.7.7)

### 1.7.7

#### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

## `@backstage/theme` (0.6.4 → 0.6.5)

### 0.6.5

#### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

## `@backstage/frontend-dynamic-feature-loader` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- 3bee3c3: The new package `frontend-dynamic-features-loader` provides a frontend feature loader that dynamically
  loads frontend features based on the new frontend system and exposed as module federation remotes.
  This new frontend feature loader works hand-in-hand with a new server of frontend plugin module federation
  remotes, which is added as part of backend dynamic feature service in package `@backstage/backend-dynamic-feature-service`.

## `@backstage/plugin-events-backend-module-bitbucket-server` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- 7b3ed9b: Added the ability for the plugin to receive events coming from Bitbucket Server push webhooks. It then performs a delta mutation on the catalog.

## `@backstage/plugin-gateway-backend` (new, 1.0.0)

### 1.0.0

#### Major Changes

- 6b5681c: Initial release of `@backstage/plugin-gateway-backend`

## `@backstage/plugin-notifications-backend-module-slack` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- 552170d: Added a new Slack NotificationProcessor for use with the notifications plugin

_Excluded dependency updates for packages: `@backstage/backend-app-api`, `@backstage/backend-openapi-utils`, `@backstage/plugin-app-backend`, `@backstage/plugin-app-node`, `@backstage/plugin-auth-backend-module-atlassian-provider`, `@backstage/plugin-auth-backend-module-auth0-provider`, `@backstage/plugin-auth-backend-module-aws-alb-provider`, `@backstage/plugin-auth-backend-module-azure-easyauth-provider`, `@backstage/plugin-auth-backend-module-bitbucket-server-provider`, `@backstage/plugin-auth-backend-module-cloudflare-access-provider`, `@backstage/plugin-auth-backend-module-gcp-iap-provider`, `@backstage/plugin-auth-backend-module-github-provider`, `@backstage/plugin-auth-backend-module-gitlab-provider`, `@backstage/plugin-auth-backend-module-google-provider`, `@backstage/plugin-auth-backend-module-guest-provider`, `@backstage/plugin-auth-backend-module-microsoft-provider`, `@backstage/plugin-auth-backend-module-oauth2-provider`, `@backstage/plugin-auth-backend-module-oauth2-proxy-provider`, `@backstage/plugin-auth-backend-module-okta-provider`, `@backstage/plugin-auth-backend-module-onelogin-provider`, `@backstage/plugin-auth-backend-module-pinniped-provider`, `@backstage/plugin-auth-backend-module-vmware-cloud-provider`, `@backstage/plugin-auth-node`, `@backstage/plugin-bitbucket-cloud-common`, `@backstage/plugin-catalog-backend-module-aws`, `@backstage/plugin-catalog-backend-module-azure`, `@backstage/plugin-catalog-backend-module-backstage-openapi`, `@backstage/plugin-catalog-backend-module-gcp`, `@backstage/plugin-catalog-backend-module-gerrit`, `@backstage/plugin-catalog-backend-module-github-org`, `@backstage/plugin-catalog-backend-module-gitlab-org`, `@backstage/plugin-catalog-backend-module-ldap`, `@backstage/plugin-catalog-backend-module-logs`, `@backstage/plugin-catalog-backend-module-msgraph`, `@backstage/plugin-catalog-backend-module-openapi`, `@backstage/plugin-catalog-backend-module-puppetdb`, `@backstage/plugin-catalog-backend-module-scaffolder-entity-model`, `@backstage/plugin-catalog-backend-module-unprocessed`, `@backstage/plugin-devtools-backend`, `@backstage/plugin-events-backend`, `@backstage/plugin-events-backend-module-aws-sqs`, `@backstage/plugin-events-backend-module-azure`, `@backstage/plugin-events-backend-module-bitbucket-cloud`, `@backstage/plugin-events-backend-module-gerrit`, `@backstage/plugin-events-backend-test-utils`, `@backstage/plugin-events-node`, `@backstage/plugin-kubernetes-backend`, `@backstage/plugin-kubernetes-node`, `@backstage/plugin-notifications-backend-module-email`, `@backstage/plugin-notifications-node`, `@backstage/plugin-permission-backend-module-allow-all-policy`, `@backstage/plugin-permission-node`, `@backstage/plugin-proxy-node`, `@backstage/plugin-scaffolder-backend-module-bitbucket-server`, `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown`, `@backstage/plugin-scaffolder-backend-module-cookiecutter`, `@backstage/plugin-scaffolder-backend-module-gcp`, `@backstage/plugin-scaffolder-backend-module-gerrit`, `@backstage/plugin-scaffolder-backend-module-gitea`, `@backstage/plugin-scaffolder-backend-module-rails`, `@backstage/plugin-scaffolder-backend-module-yeoman`, `@backstage/plugin-scaffolder-node-test-utils`, `@backstage/plugin-search-backend`, `@backstage/plugin-search-backend-module-catalog`, `@backstage/plugin-search-backend-module-elasticsearch`, `@backstage/plugin-search-backend-module-explore`, `@backstage/plugin-search-backend-module-pg`, `@backstage/plugin-search-backend-module-stack-overflow-collator`, `@backstage/plugin-search-backend-module-techdocs`, `@backstage/plugin-search-backend-node`, `@backstage/plugin-signals`, `@backstage/plugin-signals-backend`, `@backstage/plugin-signals-node`, `@backstage/plugin-signals-react`, `@backstage/plugin-techdocs-backend`, `@backstage/plugin-user-settings-backend`, `@techdocs/cli`._
