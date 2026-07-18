# Backstage Release 1.38.0 changelog

Changes between 1.37.1 and 1.38.0 — 154 changed and 4 added packages.

## Summary

- [Newly added packages](#newly-added-packages): 4 packages
- [Breaking changes](#breaking-changes): 9 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 5 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 1 package
- [Other minor version bumps](#other-minor-version-bumps): 4 packages
- [Other patch version bumps](#other-patch-version-bumps): 58 packages
- [Excluded dependency updates](#excluded-dependency-updates): 77 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/frontend-dynamic-feature-loader` (new, 0.1.0)](#backstagefrontend-dynamic-feature-loader-new-010)
  - [`@backstage/plugin-events-backend-module-bitbucket-server` (new, 0.1.0)](#backstageplugin-events-backend-module-bitbucket-server-new-010)
  - [`@backstage/plugin-gateway-backend` (new, 1.0.0)](#backstageplugin-gateway-backend-new-100)
  - [`@backstage/plugin-notifications-backend-module-slack` (new, 0.1.0)](#backstageplugin-notifications-backend-module-slack-new-010)
- [Breaking changes](#breaking-changes)
  - [`@backstage/canon` (0.2.0 → 0.3.0)](#backstagecanon-020--030)
  - [`@backstage/create-app` (0.6.0 → 0.6.1)](#backstagecreate-app-060--061)
  - [`@backstage/plugin-catalog` (1.28.0 → 1.29.0)](#backstageplugin-catalog-1280--1290)
  - [`@backstage/plugin-catalog-backend-module-github` (0.7.11 → 0.8.0)](#backstageplugin-catalog-backend-module-github-0711--080)
  - [`@backstage/plugin-catalog-react` (1.16.0 → 1.17.0)](#backstageplugin-catalog-react-1160--1170)
  - [`@backstage/plugin-events-backend-module-github` (0.2.18 → 0.3.0)](#backstageplugin-events-backend-module-github-0218--030)
  - [`@backstage/plugin-events-backend-module-gitlab` (0.2.18 → 0.3.0)](#backstageplugin-events-backend-module-gitlab-0218--030)
  - [`@backstage/plugin-scaffolder` (1.29.0 → 1.30.0)](#backstageplugin-scaffolder-1290--1300)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.6.1 → 0.7.0)](#backstageplugin-scaffolder-backend-module-github-061--070)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/backend-defaults` (0.8.2 → 0.9.0)](#backstagebackend-defaults-082--090)
  - [`@backstage/cli` (0.31.1 → 0.32.0)](#backstagecli-0311--0320)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.3.3 → 0.4.0)](#backstageplugin-catalog-backend-module-bitbucket-server-033--040)
  - [`@backstage/plugin-permission-backend` (0.5.55 → 0.6.0)](#backstageplugin-permission-backend-0555--060)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.8.1 → 0.9.0)](#backstageplugin-scaffolder-backend-module-gitlab-081--090)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-kubernetes-cluster` (0.0.23 → 0.0.24)](#backstageplugin-kubernetes-cluster-0023--0024)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/backend-plugin-api` (1.2.1 → 1.3.0)](#backstagebackend-plugin-api-121--130)
  - [`@backstage/backend-test-utils` (1.3.1 → 1.4.0)](#backstagebackend-test-utils-131--140)
  - [`@backstage/plugin-scaffolder-backend` (1.31.0 → 1.32.0)](#backstageplugin-scaffolder-backend-1310--1320)
  - [`@backstage/plugin-scaffolder-react` (1.14.6 → 1.15.0)](#backstageplugin-scaffolder-react-1146--1150)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/app-defaults` (1.6.0 → 1.6.1)](#backstageapp-defaults-160--161)
  - [`@backstage/backend-dynamic-feature-service` (0.6.1 → 0.6.2)](#backstagebackend-dynamic-feature-service-061--062)
  - [`@backstage/core-app-api` (1.16.0 → 1.16.1)](#backstagecore-app-api-1160--1161)
  - [`@backstage/core-compat-api` (0.4.0 → 0.4.1)](#backstagecore-compat-api-040--041)
  - [`@backstage/core-components` (0.17.0 → 0.17.1)](#backstagecore-components-0170--0171)
  - [`@backstage/core-plugin-api` (1.10.5 → 1.10.6)](#backstagecore-plugin-api-1105--1106)
  - [`@backstage/dev-utils` (1.1.8 → 1.1.9)](#backstagedev-utils-118--119)
  - [`@backstage/frontend-app-api` (0.11.0 → 0.11.1)](#backstagefrontend-app-api-0110--0111)
  - [`@backstage/frontend-defaults` (0.2.0 → 0.2.1)](#backstagefrontend-defaults-020--021)
  - [`@backstage/frontend-plugin-api` (0.10.0 → 0.10.1)](#backstagefrontend-plugin-api-0100--0101)
  - [`@backstage/frontend-test-utils` (0.3.0 → 0.3.1)](#backstagefrontend-test-utils-030--031)
  - [`@backstage/integration` (1.16.2 → 1.16.3)](#backstageintegration-1162--1163)
  - [`@backstage/integration-react` (1.2.5 → 1.2.6)](#backstageintegration-react-125--126)
  - [`@backstage/plugin-api-docs` (0.12.5 → 0.12.6)](#backstageplugin-api-docs-0125--0126)
  - [`@backstage/plugin-api-docs-module-protoc-gen-doc` (0.1.9 → 0.1.10)](#backstageplugin-api-docs-module-protoc-gen-doc-019--0110)
  - [`@backstage/plugin-app` (0.1.7 → 0.1.8)](#backstageplugin-app-017--018)
  - [`@backstage/plugin-app-visualizer` (0.1.17 → 0.1.18)](#backstageplugin-app-visualizer-0117--0118)
  - [`@backstage/plugin-auth-backend` (0.24.4 → 0.24.5)](#backstageplugin-auth-backend-0244--0245)
  - [`@backstage/plugin-auth-backend-module-bitbucket-provider` (0.3.1 → 0.3.2)](#backstageplugin-auth-backend-module-bitbucket-provider-031--032)
  - [`@backstage/plugin-auth-backend-module-oidc-provider` (0.4.1 → 0.4.2)](#backstageplugin-auth-backend-module-oidc-provider-041--042)
  - [`@backstage/plugin-auth-react` (0.1.13 → 0.1.14)](#backstageplugin-auth-react-0113--0114)
  - [`@backstage/plugin-catalog-backend` (1.32.0 → 1.32.1)](#backstageplugin-catalog-backend-1320--1321)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.4.6 → 0.4.7)](#backstageplugin-catalog-backend-module-bitbucket-cloud-046--047)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.6.4 → 0.6.5)](#backstageplugin-catalog-backend-module-gitlab-064--065)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.6.4 → 0.6.5)](#backstageplugin-catalog-backend-module-incremental-ingestion-064--065)
  - [`@backstage/plugin-catalog-graph` (0.4.17 → 0.4.18)](#backstageplugin-catalog-graph-0417--0418)
  - [`@backstage/plugin-catalog-import` (0.12.12 → 0.12.13)](#backstageplugin-catalog-import-01212--01213)
  - [`@backstage/plugin-catalog-node` (1.16.2 → 1.16.3)](#backstageplugin-catalog-node-1162--1163)
  - [`@backstage/plugin-catalog-unprocessed-entities` (0.2.15 → 0.2.16)](#backstageplugin-catalog-unprocessed-entities-0215--0216)
  - [`@backstage/plugin-config-schema` (0.1.66 → 0.1.67)](#backstageplugin-config-schema-0166--0167)
  - [`@backstage/plugin-devtools` (0.1.25 → 0.1.26)](#backstageplugin-devtools-0125--0126)
  - [`@backstage/plugin-home` (0.8.6 → 0.8.7)](#backstageplugin-home-086--087)
  - [`@backstage/plugin-home-react` (0.1.24 → 0.1.25)](#backstageplugin-home-react-0124--0125)
  - [`@backstage/plugin-kubernetes` (0.12.5 → 0.12.6)](#backstageplugin-kubernetes-0125--0126)
  - [`@backstage/plugin-kubernetes-react` (0.5.5 → 0.5.6)](#backstageplugin-kubernetes-react-055--056)
  - [`@backstage/plugin-notifications` (0.5.3 → 0.5.4)](#backstageplugin-notifications-053--054)
  - [`@backstage/plugin-notifications-backend` (0.5.4 → 0.5.5)](#backstageplugin-notifications-backend-054--055)
  - [`@backstage/plugin-org` (0.6.37 → 0.6.38)](#backstageplugin-org-0637--0638)
  - [`@backstage/plugin-org-react` (0.1.36 → 0.1.37)](#backstageplugin-org-react-0136--0137)
  - [`@backstage/plugin-permission-react` (0.4.32 → 0.4.33)](#backstageplugin-permission-react-0432--0433)
  - [`@backstage/plugin-proxy-backend` (0.6.0 → 0.6.1)](#backstageplugin-proxy-backend-060--061)
  - [`@backstage/plugin-scaffolder-backend-module-azure` (0.2.7 → 0.2.8)](#backstageplugin-scaffolder-backend-module-azure-027--028)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket` (0.3.8 → 0.3.9)](#backstageplugin-scaffolder-backend-module-bitbucket-038--039)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.2.7 → 0.2.8)](#backstageplugin-scaffolder-backend-module-bitbucket-cloud-027--028)
  - [`@backstage/plugin-scaffolder-backend-module-notifications` (0.1.8 → 0.1.9)](#backstageplugin-scaffolder-backend-module-notifications-018--019)
  - [`@backstage/plugin-scaffolder-backend-module-sentry` (0.2.7 → 0.2.8)](#backstageplugin-scaffolder-backend-module-sentry-027--028)
  - [`@backstage/plugin-scaffolder-node` (0.8.0 → 0.8.1)](#backstageplugin-scaffolder-node-080--081)
  - [`@backstage/plugin-search` (1.4.24 → 1.4.25)](#backstageplugin-search-1424--1425)
  - [`@backstage/plugin-search-react` (1.8.7 → 1.8.8)](#backstageplugin-search-react-187--188)
  - [`@backstage/plugin-techdocs` (1.12.4 → 1.12.5)](#backstageplugin-techdocs-1124--1125)
  - [`@backstage/plugin-techdocs-addons-test-utils` (1.0.46 → 1.0.47)](#backstageplugin-techdocs-addons-test-utils-1046--1047)
  - [`@backstage/plugin-techdocs-module-addons-contrib` (1.1.22 → 1.1.23)](#backstageplugin-techdocs-module-addons-contrib-1122--1123)
  - [`@backstage/plugin-techdocs-node` (1.13.1 → 1.13.2)](#backstageplugin-techdocs-node-1131--1132)
  - [`@backstage/plugin-techdocs-react` (1.2.15 → 1.2.16)](#backstageplugin-techdocs-react-1215--1216)
  - [`@backstage/plugin-user-settings` (0.8.20 → 0.8.21)](#backstageplugin-user-settings-0820--0821)
  - [`@backstage/repo-tools` (0.13.1 → 0.13.2)](#backstagerepo-tools-0131--0132)
  - [`@backstage/test-utils` (1.7.6 → 1.7.7)](#backstagetest-utils-176--177)
  - [`@backstage/theme` (0.6.4 → 0.6.5)](#backstagetheme-064--065)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/frontend-dynamic-feature-loader` (new, [0.1.0](../../changelogs/@backstage/frontend-dynamic-feature-loader.md#010))

#### 0.1.0

##### Minor Changes

- [`3bee3c3`](https://github.com/backstage/backstage/commit/3bee3c3): The new package `frontend-dynamic-features-loader` provides a frontend feature loader that dynamically
  loads frontend features based on the new frontend system and exposed as module federation remotes.
  This new frontend feature loader works hand-in-hand with a new server of frontend plugin module federation
  remotes, which is added as part of backend dynamic feature service in package `@backstage/backend-dynamic-feature-service`.

### `@backstage/plugin-events-backend-module-bitbucket-server` (new, [0.1.0](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-server.md#010))

#### 0.1.0

##### Minor Changes

- [`7b3ed9b`](https://github.com/backstage/backstage/commit/7b3ed9b): Added the ability for the plugin to receive events coming from Bitbucket Server push webhooks. It then performs a delta mutation on the catalog.

### `@backstage/plugin-gateway-backend` (new, [1.0.0](../../changelogs/@backstage/plugin-gateway-backend.md#100))

#### 1.0.0

##### Major Changes

- [`6b5681c`](https://github.com/backstage/backstage/commit/6b5681c): Initial release of `@backstage/plugin-gateway-backend`

### `@backstage/plugin-notifications-backend-module-slack` (new, [0.1.0](../../changelogs/@backstage/plugin-notifications-backend-module-slack.md#010))

#### 0.1.0

##### Minor Changes

- [`552170d`](https://github.com/backstage/backstage/commit/552170d): Added a new Slack NotificationProcessor for use with the notifications plugin

## Breaking changes

### `@backstage/canon` (0.2.0 → [0.3.0](../../changelogs/@backstage/canon.md#030))

#### 0.3.0

##### Minor Changes

- [`df4e292`](https://github.com/backstage/backstage/commit/df4e292): Improve class name structure using data attributes instead of class names.
- [`f038613`](https://github.com/backstage/backstage/commit/f038613): Updated TextField and Select component to work with React Hook Form.
- [`1b0cf40`](https://github.com/backstage/backstage/commit/1b0cf40): Add new Select component for Canon
- [`5074d61`](https://github.com/backstage/backstage/commit/5074d61): **BREAKING**: Added a new TextField component to replace the Field and Input component. After feedback, it became clear that we needed to build a more opinionated version to avoid any problem in the future.

##### Patch Changes

- [`6af7b16`](https://github.com/backstage/backstage/commit/6af7b16): Updated styles for the Menu component in Canon.
- [`bcbc593`](https://github.com/backstage/backstage/commit/bcbc593): Fix Checkbox styles on dark theme in Canon.
- [`e7efb7d`](https://github.com/backstage/backstage/commit/e7efb7d): Add new breakpoint helpers up(), down() and current breakpoint to help you use our breakpoints in your React components.
- [`f7cb538`](https://github.com/backstage/backstage/commit/f7cb538): Internal refactor and fixes to the prop extraction logic for layout components.
- [`35b36ec`](https://github.com/backstage/backstage/commit/35b36ec): Add new Collapsible component for Canon.
- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- [`513477f`](https://github.com/backstage/backstage/commit/513477f): Add global CSS reset for anchor tags.
- [`24f0e08`](https://github.com/backstage/backstage/commit/24f0e08): Improved Container styles, changing our max-width to 120rem and improving padding on smaller screens.
- [`851779d`](https://github.com/backstage/backstage/commit/851779d): Add new Avatar component to Canon.
- [`ec5ebd1`](https://github.com/backstage/backstage/commit/ec5ebd1): Add new TableCellProfile component for Table and DataTable in Canon.
- [`5e80f0b`](https://github.com/backstage/backstage/commit/5e80f0b): Fix types on the Icon component.
- [`0e654bf`](https://github.com/backstage/backstage/commit/0e654bf): Add new DataTable component and update Table component styles.
- [`7ae28ba`](https://github.com/backstage/backstage/commit/7ae28ba): Move styles to the root of the TextField component.
- [`4fe5b08`](https://github.com/backstage/backstage/commit/4fe5b08): We added a render prop to the Link component to make sure it can work with React Router.
- [`74d463c`](https://github.com/backstage/backstage/commit/74d463c): Fix Select styles on small sizes + with long option names in Canon.
- [`f25a5be`](https://github.com/backstage/backstage/commit/f25a5be): Added a new gray scale for Canon for both light and dark theme.
- [`5ee4fc2`](https://github.com/backstage/backstage/commit/5ee4fc2): Add support for column sizing in DataTable.
- [`05a5003`](https://github.com/backstage/backstage/commit/05a5003): Fix the Icon component when the name is not found to return null instead of an empty SVG.

### `@backstage/create-app` (0.6.0 → [0.6.1](../../changelogs/@backstage/create-app.md#061))

#### 0.6.1

##### Patch Changes

- [`5590536`](https://github.com/backstage/backstage/commit/5590536): Bumped create-app version.
- [`2fc663a`](https://github.com/backstage/backstage/commit/2fc663a): Bumped create-app version.
- [`edabbd6`](https://github.com/backstage/backstage/commit/edabbd6): Updated the root `package.json` in the template to use the new `backstage-cli repo start` command.

  The `yarn dev` command is now redundant and has been removed from the template. We recommend existing projects to add these or similar scripts to help redirect users:

  ```json
  {
    "scripts": {
      "dev": "echo \"Use 'yarn start' instead\"",
      "start-backend": "echo \"Use 'yarn start backend' instead\""
    }
  }
  ```

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- [`c761cf5`](https://github.com/backstage/backstage/commit/c761cf5): **BREAKING** The `publish:github` scaffolder action now defaults to initializing with a branch named "main" instead of "master" when creating new repositories.

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

### `@backstage/plugin-catalog` (1.28.0 → [1.29.0](../../changelogs/@backstage/plugin-catalog.md#1290))

#### 1.29.0

##### Minor Changes

- [`9454ef9`](https://github.com/backstage/backstage/commit/9454ef9): Added support of filtering based on system columns in catalog table
- [`61d350f`](https://github.com/backstage/backstage/commit/61d350f): **BREAKING ALPHA**: `CatalogFilterBlueprint`, used in the new frontend system, is now exported under plugin-catalog-react instead of plugin-catalog.

  ```diff
  + import { CatalogFilterBlueprint } from '@backstage/plugin-catalog-react/alpha';
  - import { CatalogFilterBlueprint } from '@backstage/plugin-catalog/alpha';
  ```

- [`09afd67`](https://github.com/backstage/backstage/commit/09afd67): Adds `EntityContextMenuItemBlueprint` to enable extending the entity page's context menu with user defined items.

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

##### Patch Changes

- [`3f7e4f1`](https://github.com/backstage/backstage/commit/3f7e4f1): Fixed the layout of summary cards in the new frontend system, ensuring that the horizontal scroll grid doesn't grow too large as well as tweaked its scrolling parameters.
- [`e655f62`](https://github.com/backstage/backstage/commit/e655f62): Updated `README.md` to use `yarn start` instead of `yarn dev`.
- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- [`3f7e4f1`](https://github.com/backstage/backstage/commit/3f7e4f1): The about, links, and labels card now all have the `info` card type by default in the new frontend system.
- [`3f7e4f1`](https://github.com/backstage/backstage/commit/3f7e4f1): The overview content is now part of the overview group by default in the new frontend system.

### `@backstage/plugin-catalog-backend-module-github` (0.7.11 → [0.8.0](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#080))

#### 0.8.0

##### Minor Changes

- [`f0c22eb`](https://github.com/backstage/backstage/commit/f0c22eb): **BREAKING**: Explicitly rejects branch names containing a slash character.

  The module now rejects any configuration that contains slashes in branch names. The reason for this is that the ingestion will run into downstream problems if they were let through. If you had configuration with a slash in the branch name in `filters.branch`, your application may fail to start up.

  If you are affected by this, please move over to using branches that do not have slashes in them.

##### Patch Changes

- [`16648ef`](https://github.com/backstage/backstage/commit/16648ef): Added `validateLocationsExist` to the config definition where it was missing.

### `@backstage/plugin-catalog-react` (1.16.0 → [1.17.0](../../changelogs/@backstage/plugin-catalog-react.md#1170))

#### 1.17.0

##### Minor Changes

- [`0f37fa8`](https://github.com/backstage/backstage/commit/0f37fa8): `entityRouteParams` now also accepts entity refs, and can help with encoding the resulting parameters.
- [`61d350f`](https://github.com/backstage/backstage/commit/61d350f): **BREAKING ALPHA**: `CatalogFilterBlueprint`, used in the new frontend system, is now exported under plugin-catalog-react instead of plugin-catalog.

  ```diff
  + import { CatalogFilterBlueprint } from '@backstage/plugin-catalog-react/alpha';
  - import { CatalogFilterBlueprint } from '@backstage/plugin-catalog/alpha';
  ```

- [`09afd67`](https://github.com/backstage/backstage/commit/09afd67): Adds `EntityContextMenuItemBlueprint` to enable extending the entity page's context menu with user defined items.

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

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- [`3f7e4f1`](https://github.com/backstage/backstage/commit/3f7e4f1): Added a new `overview` entity content group for the new frontend system.
- [`186d016`](https://github.com/backstage/backstage/commit/186d016): Add `operation` to alpha `defaultEntityContentGroups`.
- [`221ddba`](https://github.com/backstage/backstage/commit/221ddba): Fix offset pagination to reset when updating filters in `useEntityList`

### `@backstage/plugin-events-backend-module-github` (0.2.18 → [0.3.0](../../changelogs/@backstage/plugin-events-backend-module-github.md#030))

#### 0.3.0

##### Minor Changes

- [`317ceb7`](https://github.com/backstage/backstage/commit/317ceb7): **BREAKING ALPHA**: Modules from `events-backend-module-github` and `events-backend-module-gitlab` are now exported as `default` instead of being a named export. In addition, they have been moved from `aplha` to `public`.

##### Patch Changes

- [`735fe12`](https://github.com/backstage/backstage/commit/735fe12): Don't hard fail for not configuring `webhookSecret` for the GitHub and GitLab events backend. Instead, we don't add the ingress.

### `@backstage/plugin-events-backend-module-gitlab` (0.2.18 → [0.3.0](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#030))

#### 0.3.0

##### Minor Changes

- [`317ceb7`](https://github.com/backstage/backstage/commit/317ceb7): **BREAKING ALPHA**: Modules from `events-backend-module-github` and `events-backend-module-gitlab` are now exported as `default` instead of being a named export. In addition, they have been moved from `aplha` to `public`.

##### Patch Changes

- [`735fe12`](https://github.com/backstage/backstage/commit/735fe12): Don't hard fail for not configuring `webhookSecret` for the GitHub and GitLab events backend. Instead, we don't add the ingress.

### `@backstage/plugin-scaffolder` (1.29.0 → [1.30.0](../../changelogs/@backstage/plugin-scaffolder.md#1300))

#### 1.30.0

##### Minor Changes

- [`76681a5`](https://github.com/backstage/backstage/commit/76681a5): **BREAKING ALPHA**: Extract out schema rendering components into their own Component. This means that the translation keys have changed for `actionsPage.content.tableCell.*`. They have moved to their own root key `renderSchema.*` instead.

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

- [`5890016`](https://github.com/backstage/backstage/commit/5890016): add api to retrieve template extensions info from scaffolder-backend

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- [`407eba1`](https://github.com/backstage/backstage/commit/407eba1): Tweaked template editor tooltip to mention HTTPS requirement.

### `@backstage/plugin-scaffolder-backend-module-github` (0.6.1 → [0.7.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#070))

#### 0.7.0

##### Minor Changes

- [`c761cf5`](https://github.com/backstage/backstage/commit/c761cf5): **BREAKING** The `publish:github` scaffolder action now defaults to initializing with a branch named "main" instead of "master" when creating new repositories.

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

##### Patch Changes

- [`1af427a`](https://github.com/backstage/backstage/commit/1af427a): Made "github:autolinks:create" action idempotent
- [`79dc5ac`](https://github.com/backstage/backstage/commit/79dc5ac): Made "github:deployKey:create" action idempotent
- [`411c879`](https://github.com/backstage/backstage/commit/411c879): Add support to github:repo:create to allow branch updates
- [`180ea6e`](https://github.com/backstage/backstage/commit/180ea6e): Made "github:branch-protection:create" action idempotent
- [`0be1a1e`](https://github.com/backstage/backstage/commit/0be1a1e): Made "publish:github" action idempotent
- [`a833f0f`](https://github.com/backstage/backstage/commit/a833f0f): Made "github:actions:dispatch" action idempotent

## 0.x minor version bumps

### `@backstage/backend-defaults` (0.8.2 → [0.9.0](../../changelogs/@backstage/backend-defaults.md#090))

#### 0.9.0

##### Minor Changes

- [`1daedce`](https://github.com/backstage/backstage/commit/1daedce): Remove Throttle of Bitbucket Server API calls
- [`01edf6e`](https://github.com/backstage/backstage/commit/01edf6e): Allow pass through of redis client and cluster options to Cache core service
- [`cf4eb13`](https://github.com/backstage/backstage/commit/cf4eb13): Added `actor` property to `BackstageUserPrincipal` containing the subject of the last service (if any) who performed authentication on behalf of the user.

##### Patch Changes

- [`7c6740e`](https://github.com/backstage/backstage/commit/7c6740e): Implemented SRV lookup support in the default `HostDiscovery`. You can now specify internal URLs on the form `http+srv://some-srv-name/api/{{pluginId}}` and they will be resolved in real time.
- [`939116c`](https://github.com/backstage/backstage/commit/939116c): Added an optional `backend.trustProxy` app config value, which sets the
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

- [`175528c`](https://github.com/backstage/backstage/commit/175528c): Adds `backend.auditor.severityLogLevelMappings` to map severity levels to log levels.

### `@backstage/cli` (0.31.1 → [0.32.0](../../changelogs/@backstage/cli.md#0320))

#### 0.32.0

##### Minor Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes default React imports from template files, aligning with the requirements for the upcoming React 19 migration. Introduces a new ESLint rule to disallow `import React from 'react'` and `import * as React from 'react'`.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- [`65b584c`](https://github.com/backstage/backstage/commit/65b584c): Internal update to move the `new` and `create-github-app` to their own module.
- [`c7254ae`](https://github.com/backstage/backstage/commit/c7254ae): Internal update to move the `clean`, `pre/postpack` and `fix` commands into their own separate module.

##### Patch Changes

- [`4ea76f7`](https://github.com/backstage/backstage/commit/4ea76f7): Bump @module-federation/enhanced ^0.9.0 to fix GHSA-593f-38f6-jp5m
- [`87a5cb4`](https://github.com/backstage/backstage/commit/87a5cb4): Fixed an issue causing the `repo lint` command to fail when the `--max-warnings` option was used.
- [`6969f79`](https://github.com/backstage/backstage/commit/6969f79): Avoid trailing `/*` when automatically adding imports for package with multiple entry points.
- [`98b7131`](https://github.com/backstage/backstage/commit/98b7131): Update the `to do` plugin template to stop using the deprecated catalog alpha service reference.
  If you start seeing the `should create TODO item with catalog information` test failing, you have two options to fix this:
  Update the test to mock the legacy alpha catalog service, or migrate the `TODO` plugin backend to use the new catalog service reference.
  We recommend the second option, see [this](https://github.com/backstage/backstage/pull/29450/files/267115d0436009443ca68ac84e7dcc646c9c938d#diff-47e01aeb12dd55fab9e697f810be21a8d08d39c37df1b078f6d0894f9bad5a1b) pull request for an example of how to do the migration.
- [`d5c4fed`](https://github.com/backstage/backstage/commit/d5c4fed): make certificate strings optional for Dev environments
- [`d83f3f4`](https://github.com/backstage/backstage/commit/d83f3f4): Resolved a problem where the `start` command did not correctly handle multiple `--require` flags, ensuring all specified modules are now properly loaded.
- [`d2091c6`](https://github.com/backstage/backstage/commit/d2091c6): Added a new `repo start` command to replace the existing pattern of using `yarn dev` scripts. The `repo start` command runs the app and/or backend package in the repo by default, but will also fall back to running other individual frontend or backend packages or even plugin dev entry points if the can be uniquely selected.

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

- [`918c883`](https://github.com/backstage/backstage/commit/918c883): Included a reference to the JSX transform guide in the warning about using the default React import.

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.3.3 → [0.4.0](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#040))

#### 0.4.0

##### Minor Changes

- [`1daedce`](https://github.com/backstage/backstage/commit/1daedce): Remove Throttle of Bitbucket Server API calls
- [`7b3ed9b`](https://github.com/backstage/backstage/commit/7b3ed9b): Added the ability for the plugin to receive events coming from Bitbucket Server push webhooks. It then performs a delta mutation on the catalog.

### `@backstage/plugin-permission-backend` (0.5.55 → [0.6.0](../../changelogs/@backstage/plugin-permission-backend.md#060))

#### 0.6.0

##### Minor Changes

- [`78eaa50`](https://github.com/backstage/backstage/commit/78eaa50): Improved validation for the `/authorize` endpoint when a `resourceRef` is provided alongside a basic permission. Additionally, introduced a clearer error message for cases where users attempt to directly evaluate conditional permissions.

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.8.1 → [0.9.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#090))

#### 0.9.0

##### Minor Changes

- [`d86ce21`](https://github.com/backstage/backstage/commit/d86ce21): Added additional feedback in case branch is already created

##### Patch Changes

- [`003dc15`](https://github.com/backstage/backstage/commit/003dc15): Updated the path field in the `gitlab:group:ensureExists` action to support also strings with multiple segments (e.g. `group/subgroup`)
- [`19e23da`](https://github.com/backstage/backstage/commit/19e23da): Adds more context to the `gitlab:repo:push` `commitAction` property for the installed actions section in the scaffolder

## 0.0.x patch version bumps

### `@backstage/plugin-kubernetes-cluster` (0.0.23 → [0.0.24](../../changelogs/@backstage/plugin-kubernetes-cluster.md#0024))

#### 0.0.24

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

## Other minor version bumps

### `@backstage/backend-plugin-api` (1.2.1 → [1.3.0](../../changelogs/@backstage/backend-plugin-api.md#130))

#### 1.3.0

##### Minor Changes

- [`cf4eb13`](https://github.com/backstage/backstage/commit/cf4eb13): Added `actor` property to `BackstageUserPrincipal` containing the subject of the last service (if any) who performed authentication on behalf of the user.

### `@backstage/backend-test-utils` (1.3.1 → [1.4.0](../../changelogs/@backstage/backend-test-utils.md#140))

#### 1.4.0

##### Minor Changes

- [`cf4eb13`](https://github.com/backstage/backstage/commit/cf4eb13): Added `actor` property to `BackstageUserPrincipal` containing the subject of the last service (if any) who performed authentication on behalf of the user.

### `@backstage/plugin-scaffolder-backend` (1.31.0 → [1.32.0](../../changelogs/@backstage/plugin-scaffolder-backend.md#1320))

#### 1.32.0

##### Minor Changes

- [`75e4db4`](https://github.com/backstage/backstage/commit/75e4db4): add template-extensions scaffolder service endpoint

##### Patch Changes

- [`8685cab`](https://github.com/backstage/backstage/commit/8685cab): Added `template` and `step` labels for scaffolder histogram metrics: `scaffolder_task_duration` and `scaffolder_step_duration`
- [`497d47a`](https://github.com/backstage/backstage/commit/497d47a): Document the internal built-in filters, and ensure that the types are validated when using `createTemplateFilter` and `createTemplateGlobalFunction` from the `zod` schema.

### `@backstage/plugin-scaffolder-react` (1.14.6 → [1.15.0](../../changelogs/@backstage/plugin-scaffolder-react.md#1150))

#### 1.15.0

##### Minor Changes

- [`5890016`](https://github.com/backstage/backstage/commit/5890016): add api to retrieve template extensions info from scaffolder-backend

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- [`6ed42b7`](https://github.com/backstage/backstage/commit/6ed42b7): Scaffolding - Template card - button to show template entity detail
- [`7ae9996`](https://github.com/backstage/backstage/commit/7ae9996): Fixes the detail icon in light theme to be visible in proper color (same as favorite star).

## Other patch version bumps

### `@backstage/app-defaults` (1.6.0 → [1.6.1](../../changelogs/@backstage/app-defaults.md#161))

#### 1.6.1

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/backend-dynamic-feature-service` (0.6.1 → [0.6.2](../../changelogs/@backstage/backend-dynamic-feature-service.md#062))

#### 0.6.2

##### Patch Changes

- [`3bee3c3`](https://github.com/backstage/backstage/commit/3bee3c3): The new package `frontend-dynamic-features-loader` provides a frontend feature loader that dynamically
  loads frontend features based on the new frontend system and exposed as module federation remotes.
  This new frontend feature loader works hand-in-hand with a new server of frontend plugin module federation
  remotes, which is added as part of backend dynamic feature service in package `@backstage/backend-dynamic-feature-service`.

### `@backstage/core-app-api` (1.16.0 → [1.16.1](../../changelogs/@backstage/core-app-api.md#1161))

#### 1.16.1

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/core-compat-api` (0.4.0 → [0.4.1](../../changelogs/@backstage/core-compat-api.md#041))

#### 0.4.1

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/core-components` (0.17.0 → [0.17.1](../../changelogs/@backstage/core-components.md#0171))

#### 0.17.1

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- [`5d7bad4`](https://github.com/backstage/backstage/commit/5d7bad4): Fixed the messaging in the `AlertDisplay` where it was claiming that there were older messages available rather than newer.

### `@backstage/core-plugin-api` (1.10.5 → [1.10.6](../../changelogs/@backstage/core-plugin-api.md#1106))

#### 1.10.6

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/dev-utils` (1.1.8 → [1.1.9](../../changelogs/@backstage/dev-utils.md#119))

#### 1.1.9

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/frontend-app-api` (0.11.0 → [0.11.1](../../changelogs/@backstage/frontend-app-api.md#0111))

#### 0.11.1

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/frontend-defaults` (0.2.0 → [0.2.1](../../changelogs/@backstage/frontend-defaults.md#021))

#### 0.2.1

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- [`3bee3c3`](https://github.com/backstage/backstage/commit/3bee3c3): The new package `frontend-dynamic-features-loader` provides a frontend feature loader that dynamically
  loads frontend features based on the new frontend system and exposed as module federation remotes.
  This new frontend feature loader works hand-in-hand with a new server of frontend plugin module federation
  remotes, which is added as part of backend dynamic feature service in package `@backstage/backend-dynamic-feature-service`.

### `@backstage/frontend-plugin-api` (0.10.0 → [0.10.1](../../changelogs/@backstage/frontend-plugin-api.md#0101))

#### 0.10.1

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/frontend-test-utils` (0.3.0 → [0.3.1](../../changelogs/@backstage/frontend-test-utils.md#031))

#### 0.3.1

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/integration` (1.16.2 → [1.16.3](../../changelogs/@backstage/integration.md#1163))

#### 1.16.3

##### Patch Changes

- [`9768992`](https://github.com/backstage/backstage/commit/9768992): Mark GitHub `webhookSecret` config property as optional. A `webhookSecret` is not required when creating a GitHub App.

### `@backstage/integration-react` (1.2.5 → [1.2.6](../../changelogs/@backstage/integration-react.md#126))

#### 1.2.6

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- [`5d10f99`](https://github.com/backstage/backstage/commit/5d10f99): Added scope `project` for Bitbucket Cloud.

### `@backstage/plugin-api-docs` (0.12.5 → [0.12.6](../../changelogs/@backstage/plugin-api-docs.md#0126))

#### 0.12.6

##### Patch Changes

- [`317bc3d`](https://github.com/backstage/backstage/commit/317bc3d): api-docs plugin support i18n
- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/plugin-api-docs-module-protoc-gen-doc` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-api-docs-module-protoc-gen-doc.md#0110))

#### 0.1.10

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/plugin-app` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-app.md#018))

#### 0.1.8

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/plugin-app-visualizer` (0.1.17 → [0.1.18](../../changelogs/@backstage/plugin-app-visualizer.md#0118))

#### 0.1.18

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/plugin-auth-backend` (0.24.4 → [0.24.5](../../changelogs/@backstage/plugin-auth-backend.md#0245))

#### 0.24.5

##### Patch Changes

- [`25d05f9`](https://github.com/backstage/backstage/commit/25d05f9): Slight update to the config schema

### `@backstage/plugin-auth-backend-module-bitbucket-provider` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-provider.md#032))

#### 0.3.2

##### Patch Changes

- [`5d10f99`](https://github.com/backstage/backstage/commit/5d10f99): Enabled persistency of scopes for Bitbucket Cloud.

### `@backstage/plugin-auth-backend-module-oidc-provider` (0.4.1 → [0.4.2](../../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#042))

#### 0.4.2

##### Patch Changes

- [`7495edf`](https://github.com/backstage/backstage/commit/7495edf): Added custom timeout setting for oidc provider

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

### `@backstage/plugin-auth-react` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-auth-react.md#0114))

#### 0.1.14

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/plugin-catalog-backend` (1.32.0 → [1.32.1](../../changelogs/@backstage/plugin-catalog-backend.md#1321))

#### 1.32.1

##### Patch Changes

- [`7cc4995`](https://github.com/backstage/backstage/commit/7cc4995): Fix for duplicate results in `queryEntities` when providing an `orderField` parameter

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.4.6 → [0.4.7](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#047))

#### 0.4.7

##### Patch Changes

- [`146e41b`](https://github.com/backstage/backstage/commit/146e41b): Fixed bug in event-based discovery that caused unnecessary API calls to Bitbucket Cloud

### `@backstage/plugin-catalog-backend-module-gitlab` (0.6.4 → [0.6.5](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#065))

#### 0.6.5

##### Patch Changes

- [`a568cda`](https://github.com/backstage/backstage/commit/a568cda): add filter for repos by membership and topics
- [`871a8db`](https://github.com/backstage/backstage/commit/871a8db): fix: Add missing config options to config declaration file

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.6.4 → [0.6.5](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#065))

#### 0.6.5

##### Patch Changes

- [`27d1031`](https://github.com/backstage/backstage/commit/27d1031): fixed misleading example location annotations in docs

### `@backstage/plugin-catalog-graph` (0.4.17 → [0.4.18](../../changelogs/@backstage/plugin-catalog-graph.md#0418))

#### 0.4.18

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/plugin-catalog-import` (0.12.12 → [0.12.13](../../changelogs/@backstage/plugin-catalog-import.md#01213))

#### 0.12.13

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- [`5b9514f`](https://github.com/backstage/backstage/commit/5b9514f): Expose the `UnpackNestedValue` type as it's been removed from `react-hook-form`
- [`f1d9a64`](https://github.com/backstage/backstage/commit/f1d9a64): adding translation for `Register an existing component` text

### `@backstage/plugin-catalog-node` (1.16.2 → [1.16.3](../../changelogs/@backstage/plugin-catalog-node.md#1163))

#### 1.16.3

##### Patch Changes

- [`2c5598c`](https://github.com/backstage/backstage/commit/2c5598c): Adds documentation for the CatalogProcessingExtensionPoint functions.
- [`98b7131`](https://github.com/backstage/backstage/commit/98b7131): Use a different ID for the deprecated alpha version of the catalog service, as it has a different type definition and cannot be used interchangeably with the non-alpha version.

### `@backstage/plugin-catalog-unprocessed-entities` (0.2.15 → [0.2.16](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#0216))

#### 0.2.16

##### Patch Changes

- [`ba88bfa`](https://github.com/backstage/backstage/commit/ba88bfa): Added confirmation popup for delete entities in Catalog Unprocessed Entities plugin
- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- [`2479827`](https://github.com/backstage/backstage/commit/2479827): Fixed the `convertTimeToLocalTimezone` function in the FailedEntities component to correctly parse ISO 8601 date strings and set the timezone to the current local timezone.

### `@backstage/plugin-config-schema` (0.1.66 → [0.1.67](../../changelogs/@backstage/plugin-config-schema.md#0167))

#### 0.1.67

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/plugin-devtools` (0.1.25 → [0.1.26](../../changelogs/@backstage/plugin-devtools.md#0126))

#### 0.1.26

##### Patch Changes

- [`e655f62`](https://github.com/backstage/backstage/commit/e655f62): Updated `README.md` to use `yarn start` instead of `yarn dev`.
- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/plugin-home` (0.8.6 → [0.8.7](../../changelogs/@backstage/plugin-home.md#087))

#### 0.8.7

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/plugin-home-react` (0.1.24 → [0.1.25](../../changelogs/@backstage/plugin-home-react.md#0125))

#### 0.1.25

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- [`2e4cb15`](https://github.com/backstage/backstage/commit/2e4cb15): Fixes auto-hiding of content divider when title not specified

### `@backstage/plugin-kubernetes` (0.12.5 → [0.12.6](../../changelogs/@backstage/plugin-kubernetes.md#0126))

#### 0.12.6

##### Patch Changes

- [`b877e46`](https://github.com/backstage/backstage/commit/b877e46): Added New Frontend System filter for the Kubernetes tab to use `isKubernetesAvailable` to control its visibility
- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/plugin-kubernetes-react` (0.5.5 → [0.5.6](../../changelogs/@backstage/plugin-kubernetes-react.md#056))

#### 0.5.6

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/plugin-notifications` (0.5.3 → [0.5.4](../../changelogs/@backstage/plugin-notifications.md#054))

#### 0.5.4

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/plugin-notifications-backend` (0.5.4 → [0.5.5](../../changelogs/@backstage/plugin-notifications-backend.md#055))

#### 0.5.5

##### Patch Changes

- [`9a6080e`](https://github.com/backstage/backstage/commit/9a6080e): Allow throttling notification sending not to block the system with huge amount of receiving users

### `@backstage/plugin-org` (0.6.37 → [0.6.38](../../changelogs/@backstage/plugin-org.md#0638))

#### 0.6.38

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/plugin-org-react` (0.1.36 → [0.1.37](../../changelogs/@backstage/plugin-org-react.md#0137))

#### 0.1.37

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/plugin-permission-react` (0.4.32 → [0.4.33](../../changelogs/@backstage/plugin-permission-react.md#0433))

#### 0.4.33

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/plugin-proxy-backend` (0.6.0 → [0.6.1](../../changelogs/@backstage/plugin-proxy-backend.md#061))

#### 0.6.1

##### Patch Changes

- [`9b5b744`](https://github.com/backstage/backstage/commit/9b5b744): Fixed handling of proxied SSE connections when the upstream server closes the connection

### `@backstage/plugin-scaffolder-backend-module-azure` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#028))

#### 0.2.8

##### Patch Changes

- [`2bd41ce`](https://github.com/backstage/backstage/commit/2bd41ce): Made "publish:azure" action idempotent

### `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.3.8 → [0.3.9](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket.md#039))

#### 0.3.9

##### Patch Changes

- [`adfceee`](https://github.com/backstage/backstage/commit/adfceee): Made "publish:bitbucket" action idempotent

### `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#028))

#### 0.2.8

##### Patch Changes

- [`5266f1c`](https://github.com/backstage/backstage/commit/5266f1c): Made "publish:bitbucketCloud" action idempotent

### `@backstage/plugin-scaffolder-backend-module-notifications` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-scaffolder-backend-module-notifications.md#019))

#### 0.1.9

##### Patch Changes

- [`25a7675`](https://github.com/backstage/backstage/commit/25a7675): Made "notification:send" action idempotent

### `@backstage/plugin-scaffolder-backend-module-sentry` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#028))

#### 0.2.8

##### Patch Changes

- [`dcda66a`](https://github.com/backstage/backstage/commit/dcda66a): Made "sentry:project:create" action idempotent

### `@backstage/plugin-scaffolder-node` (0.8.0 → [0.8.1](../../changelogs/@backstage/plugin-scaffolder-node.md#081))

#### 0.8.1

##### Patch Changes

- [`497d47a`](https://github.com/backstage/backstage/commit/497d47a): Document the internal built-in filters, and ensure that the types are validated when using `createTemplateFilter` and `createTemplateGlobalFunction` from the `zod` schema.

### `@backstage/plugin-search` (1.4.24 → [1.4.25](../../changelogs/@backstage/plugin-search.md#1425))

#### 1.4.25

##### Patch Changes

- [`e655f62`](https://github.com/backstage/backstage/commit/e655f62): Updated `README.md` to use `yarn start` instead of `yarn dev`.
- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/plugin-search-react` (1.8.7 → [1.8.8](../../changelogs/@backstage/plugin-search-react.md#188))

#### 1.8.8

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/plugin-techdocs` (1.12.4 → [1.12.5](../../changelogs/@backstage/plugin-techdocs.md#1125))

#### 1.12.5

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/plugin-techdocs-addons-test-utils` (1.0.46 → [1.0.47](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#1047))

#### 1.0.47

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/plugin-techdocs-module-addons-contrib` (1.1.22 → [1.1.23](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1123))

#### 1.1.23

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- [`9c12a76`](https://github.com/backstage/backstage/commit/9c12a76): Fixed rendering issues in `ReportIssue` addon for unsupported repository types and improved shadow DOM event handling. The addon now properly prevents initialization when encountering unsupported repository types and correctly handles selection events within the shadow DOM.

### `@backstage/plugin-techdocs-node` (1.13.1 → [1.13.2](../../changelogs/@backstage/plugin-techdocs-node.md#1132))

#### 1.13.2

##### Patch Changes

- [`304a422`](https://github.com/backstage/backstage/commit/304a422): Update AWS file retrieval logic from storing file in buffer array to piping to res for better memory efficiency.
- [`2d7a3b8`](https://github.com/backstage/backstage/commit/2d7a3b8): Update Azure file retrieval logic from storing file in buffer array to piping to res for better memory efficiency.

### `@backstage/plugin-techdocs-react` (1.2.15 → [1.2.16](../../changelogs/@backstage/plugin-techdocs-react.md#1216))

#### 1.2.16

##### Patch Changes

- [`0e9f7fe`](https://github.com/backstage/backstage/commit/0e9f7fe): Fix catalog entity docs page not loading due to multiple addons data attachment in the New Frontend System.
- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/plugin-user-settings` (0.8.20 → [0.8.21](../../changelogs/@backstage/plugin-user-settings.md#0821))

#### 0.8.21

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/repo-tools` (0.13.1 → [0.13.2](../../changelogs/@backstage/repo-tools.md#0132))

#### 0.13.2

##### Patch Changes

- [`18ce51c`](https://github.com/backstage/backstage/commit/18ce51c): Checking up the files where `createRouter` has been declared and check if `@deprecated` tag exists. If it does not exist then only the message will appear.

### `@backstage/test-utils` (1.7.6 → [1.7.7](../../changelogs/@backstage/test-utils.md#177))

#### 1.7.7

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/theme` (0.6.4 → [0.6.5](../../changelogs/@backstage/theme.md#065))

#### 0.6.5

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

## Excluded dependency updates

- `@backstage/backend-app-api` (1.2.1 → [1.2.2](../../changelogs/@backstage/backend-app-api.md#122))
- `@backstage/backend-openapi-utils` (0.5.1 → [0.5.2](../../changelogs/@backstage/backend-openapi-utils.md#052))
- `@backstage/plugin-app-backend` (0.5.0 → [0.5.1](../../changelogs/@backstage/plugin-app-backend.md#051))
- `@backstage/plugin-app-node` (0.1.31 → [0.1.32](../../changelogs/@backstage/plugin-app-node.md#0132))
- `@backstage/plugin-auth-backend-module-atlassian-provider` (0.4.1 → [0.4.2](../../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#042))
- `@backstage/plugin-auth-backend-module-auth0-provider` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-auth-backend-module-auth0-provider.md#022))
- `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.4.1 → [0.4.2](../../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#042))
- `@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-auth-backend-module-azure-easyauth-provider.md#027))
- `@backstage/plugin-auth-backend-module-bitbucket-server-provider` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-server-provider.md#022))
- `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.4.1 → [0.4.2](../../changelogs/@backstage/plugin-auth-backend-module-cloudflare-access-provider.md#042))
- `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.4.1 → [0.4.2](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#042))
- `@backstage/plugin-auth-backend-module-github-provider` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#032))
- `@backstage/plugin-auth-backend-module-gitlab-provider` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#032))
- `@backstage/plugin-auth-backend-module-google-provider` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#032))
- `@backstage/plugin-auth-backend-module-guest-provider` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-auth-backend-module-guest-provider.md#027))
- `@backstage/plugin-auth-backend-module-microsoft-provider` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#032))
- `@backstage/plugin-auth-backend-module-oauth2-provider` (0.4.1 → [0.4.2](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#042))
- `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#027))
- `@backstage/plugin-auth-backend-module-okta-provider` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#022))
- `@backstage/plugin-auth-backend-module-onelogin-provider` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-auth-backend-module-onelogin-provider.md#032))
- `@backstage/plugin-auth-backend-module-pinniped-provider` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#032))
- `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.5.1 → [0.5.2](../../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#052))
- `@backstage/plugin-auth-node` (0.6.1 → [0.6.2](../../changelogs/@backstage/plugin-auth-node.md#062))
- `@backstage/plugin-bitbucket-cloud-common` (0.2.28 → [0.2.29](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#0229))
- `@backstage/plugin-catalog-backend-module-aws` (0.4.9 → [0.4.10](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#0410))
- `@backstage/plugin-catalog-backend-module-azure` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#034))
- `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.5.0 → [0.5.1](../../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#051))
- `@backstage/plugin-catalog-backend-module-gcp` (0.3.6 → [0.3.7](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#037))
- `@backstage/plugin-catalog-backend-module-gerrit` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#031))
- `@backstage/plugin-catalog-backend-module-github-org` (0.3.8 → [0.3.9](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#039))
- `@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab-org.md#028))
- `@backstage/plugin-catalog-backend-module-ldap` (0.11.3 → [0.11.4](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0114))
- `@backstage/plugin-catalog-backend-module-logs` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-catalog-backend-module-logs.md#019))
- `@backstage/plugin-catalog-backend-module-msgraph` (0.6.8 → [0.6.9](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#069))
- `@backstage/plugin-catalog-backend-module-openapi` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#029))
- `@backstage/plugin-catalog-backend-module-puppetdb` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#029))
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#027))
- `@backstage/plugin-catalog-backend-module-unprocessed` (0.5.6 → [0.5.7](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#057))
- `@backstage/plugin-devtools-backend` (0.5.3 → [0.5.4](../../changelogs/@backstage/plugin-devtools-backend.md#054))
- `@backstage/plugin-events-backend` (0.5.0 → [0.5.1](../../changelogs/@backstage/plugin-events-backend.md#051))
- `@backstage/plugin-events-backend-module-aws-sqs` (0.4.9 → [0.4.10](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#0410))
- `@backstage/plugin-events-backend-module-azure` (0.2.18 → [0.2.19](../../changelogs/@backstage/plugin-events-backend-module-azure.md#0219))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.18 → [0.2.19](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0219))
- `@backstage/plugin-events-backend-module-gerrit` (0.2.18 → [0.2.19](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0219))
- `@backstage/plugin-events-backend-test-utils` (0.1.42 → [0.1.43](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0143))
- `@backstage/plugin-events-node` (0.4.9 → [0.4.10](../../changelogs/@backstage/plugin-events-node.md#0410))
- `@backstage/plugin-kubernetes-backend` (0.19.4 → [0.19.5](../../changelogs/@backstage/plugin-kubernetes-backend.md#0195))
- `@backstage/plugin-kubernetes-node` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-kubernetes-node.md#025))
- `@backstage/plugin-notifications-backend-module-email` (0.3.7 → [0.3.8](../../changelogs/@backstage/plugin-notifications-backend-module-email.md#038))
- `@backstage/plugin-notifications-node` (0.2.13 → [0.2.14](../../changelogs/@backstage/plugin-notifications-node.md#0214))
- `@backstage/plugin-permission-backend-module-allow-all-policy` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#027))
- `@backstage/plugin-permission-node` (0.9.0 → [0.9.1](../../changelogs/@backstage/plugin-permission-node.md#091))
- `@backstage/plugin-proxy-node` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-proxy-node.md#013))
- `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#028))
- `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.7 → [0.3.8](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#038))
- `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.8 → [0.3.9](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#039))
- `@backstage/plugin-scaffolder-backend-module-gcp` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-scaffolder-backend-module-gcp.md#028))
- `@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#028))
- `@backstage/plugin-scaffolder-backend-module-gitea` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#028))
- `@backstage/plugin-scaffolder-backend-module-rails` (0.5.7 → [0.5.8](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#058))
- `@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.8 → [0.4.9](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#049))
- `@backstage/plugin-scaffolder-node-test-utils` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#021))
- `@backstage/plugin-search-backend` (2.0.0 → [2.0.1](../../changelogs/@backstage/plugin-search-backend.md#201))
- `@backstage/plugin-search-backend-module-catalog` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#033))
- `@backstage/plugin-search-backend-module-elasticsearch` (1.7.0 → [1.7.1](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#171))
- `@backstage/plugin-search-backend-module-explore` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-search-backend-module-explore.md#031))
- `@backstage/plugin-search-backend-module-pg` (0.5.42 → [0.5.43](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0543))
- `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.3.7 → [0.3.8](../../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#038))
- `@backstage/plugin-search-backend-module-techdocs` (0.4.0 → [0.4.1](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#041))
- `@backstage/plugin-search-backend-node` (1.3.9 → [1.3.10](../../changelogs/@backstage/plugin-search-backend-node.md#1310))
- `@backstage/plugin-signals` (0.0.17 → [0.0.18](../../changelogs/@backstage/plugin-signals.md#0018))
- `@backstage/plugin-signals-backend` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-signals-backend.md#033))
- `@backstage/plugin-signals-node` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-signals-node.md#0119))
- `@backstage/plugin-signals-react` (0.0.11 → [0.0.12](../../changelogs/@backstage/plugin-signals-react.md#0012))
- `@backstage/plugin-techdocs-backend` (2.0.0 → [2.0.1](../../changelogs/@backstage/plugin-techdocs-backend.md#201))
- `@backstage/plugin-user-settings-backend` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-user-settings-backend.md#031))
- `@techdocs/cli` (1.9.1 → [1.9.2](../../changelogs/@techdocs/cli.md#192))
