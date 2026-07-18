# Backstage Release 1.16.0 changelog

Changes between 1.15.0 and 1.16.0 — 201 changed and 0 added packages.

## Summary

- [Breaking changes](#breaking-changes): 2 packages
- [Major version bumps](#major-version-bumps): 1 package
- [Minor version bumps](#minor-version-bumps): 5 packages
- [Patch version bumps](#patch-version-bumps): 46 packages
- [Excluded dependency updates](#excluded-dependency-updates): 147 packages

## Table of contents

- [Breaking changes](#breaking-changes)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.3.3 → 0.4.0)](#backstageplugin-catalog-backend-module-incremental-ingestion-033--040)
  - [`@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.1.3 → 0.2.0)](#backstageplugin-scaffolder-backend-module-confluence-to-markdown-013--020)
- [Major version bumps](#major-version-bumps)
  - [`@backstage/plugin-dynatrace` (6.0.0 → 7.0.0)](#backstageplugin-dynatrace-600--700)
- [Minor version bumps](#minor-version-bumps)
  - [`@backstage/core-app-api` (1.8.1 → 1.9.0)](#backstagecore-app-api-181--190)
  - [`@backstage/plugin-catalog` (1.11.2 → 1.12.0)](#backstageplugin-catalog-1112--1120)
  - [`@backstage/plugin-catalog-backend` (1.10.0 → 1.11.0)](#backstageplugin-catalog-backend-1100--1110)
  - [`@backstage/plugin-catalog-node` (1.3.7 → 1.4.0)](#backstageplugin-catalog-node-137--140)
  - [`@backstage/plugin-catalog-react` (1.7.0 → 1.8.0)](#backstageplugin-catalog-react-170--180)
- [Patch version bumps](#patch-version-bumps)
  - [`@backstage/backend-common` (0.19.0 → 0.19.1)](#backstagebackend-common-0190--0191)
  - [`@backstage/cli` (0.22.8 → 0.22.9)](#backstagecli-0228--0229)
  - [`@backstage/cli-node` (0.1.1 → 0.1.2)](#backstagecli-node-011--012)
  - [`@backstage/codemods` (0.1.44 → 0.1.45)](#backstagecodemods-0144--0145)
  - [`@backstage/core-components` (0.13.2 → 0.13.3)](#backstagecore-components-0132--0133)
  - [`@backstage/core-plugin-api` (1.5.2 → 1.5.3)](#backstagecore-plugin-api-152--153)
  - [`@backstage/create-app` (0.5.2 → 0.5.3)](#backstagecreate-app-052--053)
  - [`@backstage/errors` (1.2.0 → 1.2.1)](#backstageerrors-120--121)
  - [`@backstage/plugin-adr` (0.6.2 → 0.6.3)](#backstageplugin-adr-062--063)
  - [`@backstage/plugin-adr-backend` (0.3.4 → 0.3.5)](#backstageplugin-adr-backend-034--035)
  - [`@backstage/plugin-adr-common` (0.2.10 → 0.2.11)](#backstageplugin-adr-common-0210--0211)
  - [`@backstage/plugin-airbrake` (0.3.19 → 0.3.20)](#backstageplugin-airbrake-0319--0320)
  - [`@backstage/plugin-airbrake-backend` (0.2.19 → 0.2.20)](#backstageplugin-airbrake-backend-0219--0220)
  - [`@backstage/plugin-auth-backend` (0.18.4 → 0.18.5)](#backstageplugin-auth-backend-0184--0185)
  - [`@backstage/plugin-azure-devops-backend` (0.3.25 → 0.3.26)](#backstageplugin-azure-devops-backend-0325--0326)
  - [`@backstage/plugin-badges-backend` (0.2.1 → 0.2.2)](#backstageplugin-badges-backend-021--022)
  - [`@backstage/plugin-catalog-backend-module-github` (0.3.1 → 0.3.2)](#backstageplugin-catalog-backend-module-github-031--032)
  - [`@backstage/plugin-catalog-backend-module-unprocessed` (0.1.0 → 0.1.1)](#backstageplugin-catalog-backend-module-unprocessed-010--011)
  - [`@backstage/plugin-catalog-import` (0.9.9 → 0.9.10)](#backstageplugin-catalog-import-099--0910)
  - [`@backstage/plugin-catalog-unprocessed-entities` (0.1.0 → 0.1.1)](#backstageplugin-catalog-unprocessed-entities-010--011)
  - [`@backstage/plugin-codescene` (0.1.14 → 0.1.15)](#backstageplugin-codescene-0114--0115)
  - [`@backstage/plugin-cost-insights` (0.12.8 → 0.12.9)](#backstageplugin-cost-insights-0128--0129)
  - [`@backstage/plugin-devtools` (0.1.1 → 0.1.2)](#backstageplugin-devtools-011--012)
  - [`@backstage/plugin-devtools-backend` (0.1.1 → 0.1.2)](#backstageplugin-devtools-backend-011--012)
  - [`@backstage/plugin-entity-feedback-backend` (0.1.4 → 0.1.5)](#backstageplugin-entity-feedback-backend-014--015)
  - [`@backstage/plugin-home` (0.5.3 → 0.5.4)](#backstageplugin-home-053--054)
  - [`@backstage/plugin-home-react` (0.1.0 → 0.1.1)](#backstageplugin-home-react-010--011)
  - [`@backstage/plugin-kubernetes` (0.9.2 → 0.9.3)](#backstageplugin-kubernetes-092--093)
  - [`@backstage/plugin-kubernetes-backend` (0.11.1 → 0.11.2)](#backstageplugin-kubernetes-backend-0111--0112)
  - [`@backstage/plugin-lighthouse` (0.4.4 → 0.4.5)](#backstageplugin-lighthouse-044--045)
  - [`@backstage/plugin-lighthouse-backend` (0.2.2 → 0.2.3)](#backstageplugin-lighthouse-backend-022--023)
  - [`@backstage/plugin-linguist-backend` (0.3.0 → 0.3.1)](#backstageplugin-linguist-backend-030--031)
  - [`@backstage/plugin-nomad` (0.1.0 → 0.1.1)](#backstageplugin-nomad-010--011)
  - [`@backstage/plugin-playlist` (0.1.11 → 0.1.12)](#backstageplugin-playlist-0111--0112)
  - [`@backstage/plugin-puppetdb` (0.1.2 → 0.1.3)](#backstageplugin-puppetdb-012--013)
  - [`@backstage/plugin-scaffolder-backend` (1.15.0 → 1.15.1)](#backstageplugin-scaffolder-backend-1150--1151)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.2.1 → 0.2.2)](#backstageplugin-scaffolder-backend-module-gitlab-021--022)
  - [`@backstage/plugin-scaffolder-react` (1.5.0 → 1.5.1)](#backstageplugin-scaffolder-react-150--151)
  - [`@backstage/plugin-search` (1.3.2 → 1.3.3)](#backstageplugin-search-132--133)
  - [`@backstage/plugin-sonarqube` (0.7.0 → 0.7.1)](#backstageplugin-sonarqube-070--071)
  - [`@backstage/plugin-sonarqube-backend` (0.2.0 → 0.2.1)](#backstageplugin-sonarqube-backend-020--021)
  - [`@backstage/plugin-stackstorm` (0.1.3 → 0.1.4)](#backstageplugin-stackstorm-013--014)
  - [`@backstage/plugin-tech-insights-backend` (0.5.12 → 0.5.13)](#backstageplugin-tech-insights-backend-0512--0513)
  - [`@backstage/plugin-user-settings` (0.7.4 → 0.7.5)](#backstageplugin-user-settings-074--075)
  - [`@backstage/test-utils` (1.4.0 → 1.4.1)](#backstagetest-utils-140--141)
  - [`@backstage/theme` (0.4.0 → 0.4.1)](#backstagetheme-040--041)
- [Excluded dependency updates](#excluded-dependency-updates)

## Breaking changes

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.3.3 → [0.4.0](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#040))

#### 0.4.0

##### Minor Changes

- [`b1cc10696f2f`](https://github.com/backstage/backstage/commit/b1cc10696f2f): **BREAKING** Allow incremental event handlers to be async; Force event handler
  to indicate if it made a change. Instead of returning `null` or `undefined` from an event
  handler to indicate no-oop, instead return the value { type: "ignored" }.

  **before**

  ```javascript
  import { createDelta, shouldIgnore } from "./my-delta-creater";

  eventHandler: {
    onEvent(params) {
      if (shouldIgnore(params)) {
        return;
      }
      return createDelta(params);
    }
  }
  ```

  **after**

  ```javascript
  import { createDelta, shouldIgnore } from "./my-delta-creater";

  eventHandler: {
    async onEvent(params) {
      if (shouldIgnore(params) {
        return { type: "ignored" };
      }
      // code to create delta can now be async if needed
      return await createDelta(params);
    }
  }
  ```

##### Patch Changes

- [`e1d615757f48`](https://github.com/backstage/backstage/commit/e1d615757f48): Update readme and instructions

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.1.3 → [0.2.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#020))

#### 0.2.0

##### Minor Changes

- [`0a7e7c5d0c04`](https://github.com/backstage/backstage/commit/0a7e7c5d0c04): **BREAKING**

  This change updates the configuration of the confluence-to-markdown action so that it does not conflict with other confluence plguins. Currently many plugins make use of the `confluence.auth` configuration. However, only the confluence-to-markdown action uses the `confluence.auth` as a string. This change updates it so that `confluence.auth` is an object.

  ## Required Changes

  Below are examples for updating `bearer`, `basic`, and `userpass` implementations.

  For `bearer`:
  Before:

  ```yaml
  confluence:
    baseUrl: 'https://confluence.example.com'
    auth: 'bearer'
    token: '${CONFLUENCE_TOKEN}'
  ```

  After:

  ```yaml
  confluence:
    baseUrl: 'https://confluence.example.com'
    auth:
      type: 'bearer'
      token: '${CONFLUENCE_TOKEN}'
  ```

  For `basic`:

  Before:

  ```yaml
  confluence:
    baseUrl: 'https://confluence.example.com'
    auth: 'basic'
    token: '${CONFLUENCE_TOKEN}'
    email: 'example@company.org'
  ```

  After:

  ```yaml
  confluence:
    baseUrl: 'https://confluence.example.com'
    auth:
      type: 'basic'
      token: '${CONFLUENCE_TOKEN}'
      email: 'example@company.org'
  ```

  For `userpass`
  Before:

  ```yaml
  confluence:
    baseUrl: 'https://confluence.example.com'
    auth: 'userpass'
    username: 'your-username'
    password: 'your-password'
  ```

  After:

  ```yaml
  confluence:
    baseUrl: 'https://confluence.example.com'
    auth:
      type: 'userpass'
      username: 'your-username'
      password: 'your-password'
  ```

## Major version bumps

### `@backstage/plugin-dynatrace` (6.0.0 → [7.0.0](../../changelogs/@backstage/plugin-dynatrace.md#700))

#### 7.0.0

##### Patch Changes

- [`3424cbfe5f4a`](https://github.com/backstage/backstage/commit/3424cbfe5f4a): updated the link that the "View Entity in Dynatrace" redirects the user to.

## Minor version bumps

### `@backstage/core-app-api` (1.8.1 → [1.9.0](../../changelogs/@backstage/core-app-api.md#190))

#### 1.9.0

##### Minor Changes

- [`a77ddf7ccd71`](https://github.com/backstage/backstage/commit/a77ddf7ccd71): add login in popup options to config popup width and height

##### Patch Changes

- [`8174cf4c0edf`](https://github.com/backstage/backstage/commit/8174cf4c0edf): Fixing MUI / Material UI references

### `@backstage/plugin-catalog` (1.11.2 → [1.12.0](../../changelogs/@backstage/plugin-catalog.md#1120))

#### 1.12.0

##### Minor Changes

- [`eae0352d3864`](https://github.com/backstage/backstage/commit/eae0352d3864): Tables which use `EntityTableProps` now have an additional `tableOptions` prop which can be used to provide additional table options to these components.

##### Patch Changes

- [`294b1629de28`](https://github.com/backstage/backstage/commit/294b1629de28): Display a warning alert if relations are defined, which don't exist in the catalog.

### `@backstage/plugin-catalog-backend` (1.10.0 → [1.11.0](../../changelogs/@backstage/plugin-catalog-backend.md#1110))

#### 1.11.0

##### Minor Changes

- [`f06f0e46ba88`](https://github.com/backstage/backstage/commit/f06f0e46ba88): Support placeholder resolvers in the CatalogPlugin, also moves `PlaceholderResolver` and related types from `@backstage/plugin-catalog-backend` to `@backstage/plugin-catalog-node`.

### `@backstage/plugin-catalog-node` (1.3.7 → [1.4.0](../../changelogs/@backstage/plugin-catalog-node.md#140))

#### 1.4.0

##### Minor Changes

- [`f06f0e46ba88`](https://github.com/backstage/backstage/commit/f06f0e46ba88): Support placeholder resolvers in the CatalogPlugin, also moves `PlaceholderResolver` and related types from `@backstage/plugin-catalog-backend` to `@backstage/plugin-catalog-node`.

### `@backstage/plugin-catalog-react` (1.7.0 → [1.8.0](../../changelogs/@backstage/plugin-catalog-react.md#180))

#### 1.8.0

##### Minor Changes

- [`eae0352d3864`](https://github.com/backstage/backstage/commit/eae0352d3864): Tables which use `EntityTableProps` now have an additional `tableOptions` prop which can be used to provide additional table options to these components.

## Patch version bumps

### `@backstage/backend-common` (0.19.0 → [0.19.1](../../changelogs/@backstage/backend-common.md#0191))

#### 0.19.1

##### Patch Changes

- [`787ddcc5ef99`](https://github.com/backstage/backstage/commit/787ddcc5ef99): use `Readable.from` to explicitly convert the `buffer` from `node-fetch` to a `Readable` stream

### `@backstage/cli` (0.22.8 → [0.22.9](../../changelogs/@backstage/cli.md#0229))

#### 0.22.9

##### Patch Changes

- [`6adb6f41711a`](https://github.com/backstage/backstage/commit/6adb6f41711a): Fixed the `--alwaysYarnPack` flag on the`backstage-cli build-workspace` command.
- [`4edd1ef71453`](https://github.com/backstage/backstage/commit/4edd1ef71453): semver upgrade to 7.5.3
- [`ff45cb559e49`](https://github.com/backstage/backstage/commit/ff45cb559e49): Updated dependency `esbuild` to `^0.18.0`.
- [`8174cf4c0edf`](https://github.com/backstage/backstage/commit/8174cf4c0edf): Fixing MUI / Material UI references

### `@backstage/cli-node` (0.1.1 → [0.1.2](../../changelogs/@backstage/cli-node.md#012))

#### 0.1.2

##### Patch Changes

- [`4edd1ef71453`](https://github.com/backstage/backstage/commit/4edd1ef71453): semver upgrade to 7.5.3

### `@backstage/codemods` (0.1.44 → [0.1.45](../../changelogs/@backstage/codemods.md#0145))

#### 0.1.45

##### Patch Changes

- [`325a32e9476e`](https://github.com/backstage/backstage/commit/325a32e9476e): Updated dependency `jscodeshift` to `^0.15.0`.

### `@backstage/core-components` (0.13.2 → [0.13.3](../../changelogs/@backstage/core-components.md#0133))

#### 0.13.3

##### Patch Changes

- [`7e0f558fbc37`](https://github.com/backstage/backstage/commit/7e0f558fbc37): The `Skip to content` button on click focuses on the main article tag and skips the `h1` tag. Users are not able to identify which page they are on currently. Now it's changed the behaviour of the button and focuses on the `h1` tag on the page.
- [`68531cc70e1f`](https://github.com/backstage/backstage/commit/68531cc70e1f): Break some internal circular import chains
- [`4722c948c217`](https://github.com/backstage/backstage/commit/4722c948c217): Parse unicode characters in name for avatar component
- [`015439b5b6ca`](https://github.com/backstage/backstage/commit/015439b5b6ca): Updated dependency `rc-progress` to `3.4.2`.
- [`8174cf4c0edf`](https://github.com/backstage/backstage/commit/8174cf4c0edf): Fixing MUI / Material UI references
- [`4317b1c2f430`](https://github.com/backstage/backstage/commit/4317b1c2f430): Remove zooming in restrictions in the catalog graph
- [`a011d2316a58`](https://github.com/backstage/backstage/commit/a011d2316a58): Fix keyboard navigation & focus highlight on Select component.

### `@backstage/core-plugin-api` (1.5.2 → [1.5.3](../../changelogs/@backstage/core-plugin-api.md#153))

#### 1.5.3

##### Patch Changes

- [`8174cf4c0edf`](https://github.com/backstage/backstage/commit/8174cf4c0edf): Fixing MUI / Material UI references
- [`13426ebd1235`](https://github.com/backstage/backstage/commit/13426ebd1235): Change `IconComponent` type to be compatible with Material UI v5 icons.

### `@backstage/create-app` (0.5.2 → [0.5.3](../../changelogs/@backstage/create-app.md#053))

#### 0.5.3

##### Patch Changes

- [`76b83a4422bb`](https://github.com/backstage/backstage/commit/76b83a4422bb): Post-create message - added instruction to run `yarn install` when app was created with `--skip-install`
- [`d72e2eeba6f1`](https://github.com/backstage/backstage/commit/d72e2eeba6f1): Bumped create-app version.
- [`e3ce5dd3f89a`](https://github.com/backstage/backstage/commit/e3ce5dd3f89a): add cy.\*\*.should to cypress eslintrc
- [`f920a61031c5`](https://github.com/backstage/backstage/commit/f920a61031c5): Enable specifying an external application template when using the `create-app` CLI command.
- [`294b1629de28`](https://github.com/backstage/backstage/commit/294b1629de28): Display a warning alert if relations are defined, which don't exist in the catalog.
- [`4f7292c74dff`](https://github.com/backstage/backstage/commit/4f7292c74dff): Updated included Dockerfile to include `g++`. Also updated the comments to note that some of the dependencies are also needed by isolated-vm

### `@backstage/errors` (1.2.0 → [1.2.1](../../changelogs/@backstage/errors.md#121))

#### 1.2.1

##### Patch Changes

- [`e205b3e6ede8`](https://github.com/backstage/backstage/commit/e205b3e6ede8): Set `this.name` in all error classes that extend `CustomErrorBase` class to their actual name

### `@backstage/plugin-adr` (0.6.2 → [0.6.3](../../changelogs/@backstage/plugin-adr.md#063))

#### 0.6.3

##### Patch Changes

- [`2b4513abb784`](https://github.com/backstage/backstage/commit/2b4513abb784): fixed error with date parsing.

### `@backstage/plugin-adr-backend` (0.3.4 → [0.3.5](../../changelogs/@backstage/plugin-adr-backend.md#035))

#### 0.3.5

##### Patch Changes

- [`a8805a9a4f25`](https://github.com/backstage/backstage/commit/a8805a9a4f25): Added support for the [new backend system](https://backstage.io/docs/backend-system/)

### `@backstage/plugin-adr-common` (0.2.10 → [0.2.11](../../changelogs/@backstage/plugin-adr-common.md#0211))

#### 0.2.11

##### Patch Changes

- [`2b4513abb784`](https://github.com/backstage/backstage/commit/2b4513abb784): fixed error with date parsing.

### `@backstage/plugin-airbrake` (0.3.19 → [0.3.20](../../changelogs/@backstage/plugin-airbrake.md#0320))

#### 0.3.20

##### Patch Changes

- [`7b6033587650`](https://github.com/backstage/backstage/commit/7b6033587650): Added documentation for the [new backend system](https://backstage.io/docs/backend-system/)

### `@backstage/plugin-airbrake-backend` (0.2.19 → [0.2.20](../../changelogs/@backstage/plugin-airbrake-backend.md#0220))

#### 0.2.20

##### Patch Changes

- [`a95bb64e461a`](https://github.com/backstage/backstage/commit/a95bb64e461a): Added support for the [new backend system](https://backstage.io/docs/backend-system/)

### `@backstage/plugin-auth-backend` (0.18.4 → [0.18.5](../../changelogs/@backstage/plugin-auth-backend.md#0185))

#### 0.18.5

##### Patch Changes

- [`c27ae5004fc2`](https://github.com/backstage/backstage/commit/c27ae5004fc2): Support for Token Endpoint Auth Method for OIDC Provider

### `@backstage/plugin-azure-devops-backend` (0.3.25 → [0.3.26](../../changelogs/@backstage/plugin-azure-devops-backend.md#0326))

#### 0.3.26

##### Patch Changes

- [`ae261e79d256`](https://github.com/backstage/backstage/commit/ae261e79d256): Added alpha support for the [new backend system](https://backstage.io/docs/backend-system/)

### `@backstage/plugin-badges-backend` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-badges-backend.md#022))

#### 0.2.2

##### Patch Changes

- [`2bbdcb4154c3`](https://github.com/backstage/backstage/commit/2bbdcb4154c3): Added support for the [new backend system](https://backstage.io/docs/backend-system/)

### `@backstage/plugin-catalog-backend-module-github` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#032))

#### 0.3.2

##### Patch Changes

- [`b01b869d7158`](https://github.com/backstage/backstage/commit/b01b869d7158): fixed event handler to respect configured organization
- [`68531cc70e1f`](https://github.com/backstage/backstage/commit/68531cc70e1f): Break some internal circular import chains

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#011))

#### 0.1.1

##### Patch Changes

- [`a8fa79ccc105`](https://github.com/backstage/backstage/commit/a8fa79ccc105): Fix and improve documentation for the unprocessed entities modules.

### `@backstage/plugin-catalog-import` (0.9.9 → [0.9.10](../../changelogs/@backstage/plugin-catalog-import.md#0910))

#### 0.9.10

##### Patch Changes

- [`36b7edf39585`](https://github.com/backstage/backstage/commit/36b7edf39585): Add a "View Component" button as the primary CTA after registering a new component using a link to catalog-info.yaml

### `@backstage/plugin-catalog-unprocessed-entities` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#011))

#### 0.1.1

##### Patch Changes

- [`2c4869473155`](https://github.com/backstage/backstage/commit/2c4869473155): The Catalog Unprocessed Entities plugin can now be integrated as a tab within the DevTools plugin

  - Added an export for `UnprocessedEntitiesContent`
  - Updated the `README` with images of the features
  - Adjusted the styles to fill in the available space
  - Set the table page size to 20 as 40 was causing errors in the browser console

- [`57585d89f926`](https://github.com/backstage/backstage/commit/57585d89f926): Export some types and API items. This allows people to call the API from different places with the ApiRef, as well
  as completely customize the client if required. Check the [README.md](https://github.com/backstage/backstage/blob/master/plugins/catalog-unprocessed-entities/README.md) to
  note what needs to be added in order to use the new `catalogUnprocessedEntitiesApiRef` exported function.
- [`a8fa79ccc105`](https://github.com/backstage/backstage/commit/a8fa79ccc105): Fix and improve documentation for the unprocessed entities modules.
- [`267396f45bd0`](https://github.com/backstage/backstage/commit/267396f45bd0): Corrected the installation instructions.
- [`7a9c8a9cd0ce`](https://github.com/backstage/backstage/commit/7a9c8a9cd0ce): Fixed spacing for success message
- [`e6f50426333b`](https://github.com/backstage/backstage/commit/e6f50426333b): update some peer dependencies to silence yarn install
- [`77b408fad872`](https://github.com/backstage/backstage/commit/77b408fad872): install command points to correct package name

### `@backstage/plugin-codescene` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-codescene.md#0115))

#### 0.1.15

##### Patch Changes

- [`015439b5b6ca`](https://github.com/backstage/backstage/commit/015439b5b6ca): Updated dependency `rc-progress` to `3.4.2`.

### `@backstage/plugin-cost-insights` (0.12.8 → [0.12.9](../../changelogs/@backstage/plugin-cost-insights.md#0129))

#### 0.12.9

##### Patch Changes

- [`8174cf4c0edf`](https://github.com/backstage/backstage/commit/8174cf4c0edf): Fixing MUI / Material UI references

### `@backstage/plugin-devtools` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-devtools.md#012))

#### 0.1.2

##### Patch Changes

- [`5969639fd075`](https://github.com/backstage/backstage/commit/5969639fd075): Allow specifying custom title for `DevToolsLayout`
- [`2c4869473155`](https://github.com/backstage/backstage/commit/2c4869473155): Updated the `README` with instructions on how to integrate the Catalog Unprocessed Entities plugin as a tab within DevTools
- [`e6f50426333b`](https://github.com/backstage/backstage/commit/e6f50426333b): update some peer dependencies to silence yarn install

### `@backstage/plugin-devtools-backend` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-devtools-backend.md#012))

#### 0.1.2

##### Patch Changes

- [`4edd1ef71453`](https://github.com/backstage/backstage/commit/4edd1ef71453): semver upgrade to 7.5.3
- [`ae261e79d256`](https://github.com/backstage/backstage/commit/ae261e79d256): Added alpha support for the [new backend system](https://backstage.io/docs/backend-system/)

### `@backstage/plugin-entity-feedback-backend` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-entity-feedback-backend.md#015))

#### 0.1.5

##### Patch Changes

- [`5c1c10adac8f`](https://github.com/backstage/backstage/commit/5c1c10adac8f): Added support for the new backend system

### `@backstage/plugin-home` (0.5.3 → [0.5.4](../../changelogs/@backstage/plugin-home.md#054))

#### 0.5.4

##### Patch Changes

- [`88c62048fcbd`](https://github.com/backstage/backstage/commit/88c62048fcbd): fix: update plugin home dependency for `@rjsf/material-ui` to `@rjsf/material-ui-v5`
- [`0b89ca8ce24a`](https://github.com/backstage/backstage/commit/0b89ca8ce24a): Add possibility to customize the settings widget for different
  properties by using the `uiSchema` provided by the json-schema.
  More information here: https://rjsf-team.github.io/react-jsonschema-form/docs/api-reference/uiSchema
- [`b8ebd3d2e4e5`](https://github.com/backstage/backstage/commit/b8ebd3d2e4e5): Fix missing column breakpoints in `CustomHompageGrid`

### `@backstage/plugin-home-react` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-home-react.md#011))

#### 0.1.1

##### Patch Changes

- [`0b89ca8ce24a`](https://github.com/backstage/backstage/commit/0b89ca8ce24a): Add possibility to customize the settings widget for different
  properties by using the `uiSchema` provided by the json-schema.
  More information here: https://rjsf-team.github.io/react-jsonschema-form/docs/api-reference/uiSchema

### `@backstage/plugin-kubernetes` (0.9.2 → [0.9.3](../../changelogs/@backstage/plugin-kubernetes.md#093))

#### 0.9.3

##### Patch Changes

- [`d62fc3fe85ba`](https://github.com/backstage/backstage/commit/d62fc3fe85ba): Make pod drawer headings consistent
- [`cc27fa4a1aac`](https://github.com/backstage/backstage/commit/cc27fa4a1aac): Changed Google cloud auth scope to read-only.

### `@backstage/plugin-kubernetes-backend` (0.11.1 → [0.11.2](../../changelogs/@backstage/plugin-kubernetes-backend.md#0112))

#### 0.11.2

##### Patch Changes

- [`4db037c20148`](https://github.com/backstage/backstage/commit/4db037c20148): Replace reference to deprecated import
- [`c2e530653539`](https://github.com/backstage/backstage/commit/c2e530653539): Add WebSocket support to `kubernetes-backend` proxy.
- [`be6395601d1f`](https://github.com/backstage/backstage/commit/be6395601d1f): Proxy endpoint supports cluster URLs with subpath
- [`47154c8ddba6`](https://github.com/backstage/backstage/commit/47154c8ddba6): Fixed a bug where the proxy endpoint would error when used in combination with
  a local kubectl proxy process and a token-based auth strategy on-cluster.
- [`faac6b7425b2`](https://github.com/backstage/backstage/commit/faac6b7425b2): Update readme with a valid link to k8s documentation

### `@backstage/plugin-lighthouse` (0.4.4 → [0.4.5](../../changelogs/@backstage/plugin-lighthouse.md#045))

#### 0.4.5

##### Patch Changes

- [`cb200dbb8038`](https://github.com/backstage/backstage/commit/cb200dbb8038): Added more verbose components (used to render `null`) when no audits for a website corresponding to the provided url were found.
  Added `Create New Audit` button for the `AuditListForEntity` component used by `EntityLighthouseContent` and `EmbeddedRouter`.
  Removed error alert from `errorApi` if error was due to no audits being found for a website (empty database query result).

### `@backstage/plugin-lighthouse-backend` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-lighthouse-backend.md#023))

#### 0.2.3

##### Patch Changes

- [`402749b00531`](https://github.com/backstage/backstage/commit/402749b00531): Added support for the [new backend system](https://backstage.io/docs/backend-system/)

### `@backstage/plugin-linguist-backend` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-linguist-backend.md#031))

#### 0.3.1

##### Patch Changes

- [`ae261e79d256`](https://github.com/backstage/backstage/commit/ae261e79d256): Added alpha support for the [new backend system](https://backstage.io/docs/backend-system/)

### `@backstage/plugin-nomad` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-nomad.md#011))

#### 0.1.1

##### Patch Changes

- [`68531cc70e1f`](https://github.com/backstage/backstage/commit/68531cc70e1f): Break some internal circular import chains
- [`e6f50426333b`](https://github.com/backstage/backstage/commit/e6f50426333b): update some peer dependencies to silence yarn install

### `@backstage/plugin-playlist` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-playlist.md#0112))

#### 0.1.12

##### Patch Changes

- [`68531cc70e1f`](https://github.com/backstage/backstage/commit/68531cc70e1f): Break some internal circular import chains

### `@backstage/plugin-puppetdb` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-puppetdb.md#013))

#### 0.1.3

##### Patch Changes

- [`e6f50426333b`](https://github.com/backstage/backstage/commit/e6f50426333b): update some peer dependencies to silence yarn install

### `@backstage/plugin-scaffolder-backend` (1.15.0 → [1.15.1](../../changelogs/@backstage/plugin-scaffolder-backend.md#1151))

#### 1.15.1

##### Patch Changes

- [`600be804927d`](https://github.com/backstage/backstage/commit/600be804927d): Indicate the name of the option that is being deprecated in task deprecation warning.
- [`ff45cb559e49`](https://github.com/backstage/backstage/commit/ff45cb559e49): Updated dependency `esbuild` to `^0.18.0`.

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#022))

#### 0.2.2

##### Patch Changes

- [`dd367967e2e1`](https://github.com/backstage/backstage/commit/dd367967e2e1): Fixed a bug in `gitlab:group:ensureExists` where `repos` was always set as the root group.

### `@backstage/plugin-scaffolder-react` (1.5.0 → [1.5.1](../../changelogs/@backstage/plugin-scaffolder-react.md#151))

#### 1.5.1

##### Patch Changes

- [`f74a27de4d2c`](https://github.com/backstage/backstage/commit/f74a27de4d2c): Made markdown description theme-able

### `@backstage/plugin-search` (1.3.2 → [1.3.3](../../changelogs/@backstage/plugin-search.md#133))

#### 1.3.3

##### Patch Changes

- [`c3381408d633`](https://github.com/backstage/backstage/commit/c3381408d633): Fixed bug in "View Full Results" link of Search Modal that did not navigate to the full results page.

### `@backstage/plugin-sonarqube` (0.7.0 → [0.7.1](../../changelogs/@backstage/plugin-sonarqube.md#071))

#### 0.7.1

##### Patch Changes

- [`fcaf4cfc70ee`](https://github.com/backstage/backstage/commit/fcaf4cfc70ee): Made default config optional
- [`015439b5b6ca`](https://github.com/backstage/backstage/commit/015439b5b6ca): Updated dependency `rc-progress` to `3.4.2`.

### `@backstage/plugin-sonarqube-backend` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-sonarqube-backend.md#021))

#### 0.2.1

##### Patch Changes

- [`fcaf4cfc70ee`](https://github.com/backstage/backstage/commit/fcaf4cfc70ee): Made default config optional

### `@backstage/plugin-stackstorm` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-stackstorm.md#014))

#### 0.1.4

##### Patch Changes

- [`1745959daf98`](https://github.com/backstage/backstage/commit/1745959daf98): Add props to StackstormHome for Header Customization

### `@backstage/plugin-tech-insights-backend` (0.5.12 → [0.5.13](../../changelogs/@backstage/plugin-tech-insights-backend.md#0513))

#### 0.5.13

##### Patch Changes

- [`4edd1ef71453`](https://github.com/backstage/backstage/commit/4edd1ef71453): semver upgrade to 7.5.3

### `@backstage/plugin-user-settings` (0.7.4 → [0.7.5](../../changelogs/@backstage/plugin-user-settings.md#075))

#### 0.7.5

##### Patch Changes

- [`8174cf4c0edf`](https://github.com/backstage/backstage/commit/8174cf4c0edf): Fixing MUI / Material UI references

### `@backstage/test-utils` (1.4.0 → [1.4.1](../../changelogs/@backstage/test-utils.md#141))

#### 1.4.1

##### Patch Changes

- [`8174cf4c0edf`](https://github.com/backstage/backstage/commit/8174cf4c0edf): Fixing MUI / Material UI references

### `@backstage/theme` (0.4.0 → [0.4.1](../../changelogs/@backstage/theme.md#041))

#### 0.4.1

##### Patch Changes

- [`4f28914d9f0e`](https://github.com/backstage/backstage/commit/4f28914d9f0e): Overwrite `PaletteOptions` & `ThemeOptions` type to allow use of `createTheme` from `@backstage/theme` as well as `@material-ui/core/styles` with the same type. Also replaced the default `CSSBaseline` with v4 instead of v5 for better backwards compatibility for now.
- [`41c5aa0ab589`](https://github.com/backstage/backstage/commit/41c5aa0ab589): Applying the modified `theme.spacing` method only to overrides instead of replacing it in the whole theme.
- [`9395baa82413`](https://github.com/backstage/backstage/commit/9395baa82413): You can now customize the typography of your theme by passing in your own custom typography defaults
- [`8174cf4c0edf`](https://github.com/backstage/backstage/commit/8174cf4c0edf): Fixing MUI / Material UI references
- [`f0444f094396`](https://github.com/backstage/backstage/commit/f0444f094396): Removed the hard coded color and background color in the `MuiChip` overrides so that they work better with custom themes
- [`874c3e8bf909`](https://github.com/backstage/backstage/commit/874c3e8bf909): Override the spacing to a v5 compliant method

## Excluded dependency updates

- `@backstage/app-defaults` (1.4.0 → [1.4.1](../../changelogs/@backstage/app-defaults.md#141))
- `@backstage/backend-app-api` (0.4.4 → [0.4.5](../../changelogs/@backstage/backend-app-api.md#045))
- `@backstage/backend-defaults` (0.1.11 → [0.1.12](../../changelogs/@backstage/backend-defaults.md#0112))
- `@backstage/backend-plugin-api` (0.5.3 → [0.5.4](../../changelogs/@backstage/backend-plugin-api.md#054))
- `@backstage/backend-tasks` (0.5.3 → [0.5.4](../../changelogs/@backstage/backend-tasks.md#054))
- `@backstage/backend-test-utils` (0.1.38 → [0.1.39](../../changelogs/@backstage/backend-test-utils.md#0139))
- `@backstage/catalog-client` (1.4.2 → [1.4.3](../../changelogs/@backstage/catalog-client.md#143))
- `@backstage/catalog-model` (1.4.0 → [1.4.1](../../changelogs/@backstage/catalog-model.md#141))
- `@backstage/config-loader` (1.3.1 → [1.3.2](../../changelogs/@backstage/config-loader.md#132))
- `@backstage/dev-utils` (1.0.16 → [1.0.17](../../changelogs/@backstage/dev-utils.md#1017))
- `@backstage/integration` (1.5.0 → [1.5.1](../../changelogs/@backstage/integration.md#151))
- `@backstage/integration-aws-node` (0.1.4 → [0.1.5](../../changelogs/@backstage/integration-aws-node.md#015))
- `@backstage/integration-react` (1.1.14 → [1.1.15](../../changelogs/@backstage/integration-react.md#1115))
- `@backstage/plugin-allure` (0.1.35 → [0.1.36](../../changelogs/@backstage/plugin-allure.md#0136))
- `@backstage/plugin-analytics-module-ga` (0.1.30 → [0.1.31](../../changelogs/@backstage/plugin-analytics-module-ga.md#0131))
- `@backstage/plugin-analytics-module-ga4` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-analytics-module-ga4.md#012))
- `@backstage/plugin-apache-airflow` (0.2.12 → [0.2.13](../../changelogs/@backstage/plugin-apache-airflow.md#0213))
- `@backstage/plugin-api-docs` (0.9.5 → [0.9.6](../../changelogs/@backstage/plugin-api-docs.md#096))
- `@backstage/plugin-apollo-explorer` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-apollo-explorer.md#0113))
- `@backstage/plugin-app-backend` (0.3.46 → [0.3.47](../../changelogs/@backstage/plugin-app-backend.md#0347))
- `@backstage/plugin-auth-node` (0.2.15 → [0.2.16](../../changelogs/@backstage/plugin-auth-node.md#0216))
- `@backstage/plugin-azure-devops` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-azure-devops.md#032))
- `@backstage/plugin-azure-sites` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-azure-sites.md#019))
- `@backstage/plugin-azure-sites-backend` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-azure-sites-backend.md#019))
- `@backstage/plugin-badges` (0.2.43 → [0.2.44](../../changelogs/@backstage/plugin-badges.md#0244))
- `@backstage/plugin-bazaar` (0.2.10 → [0.2.11](../../changelogs/@backstage/plugin-bazaar.md#0211))
- `@backstage/plugin-bazaar-backend` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-bazaar-backend.md#0210))
- `@backstage/plugin-bitbucket-cloud-common` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#028))
- `@backstage/plugin-bitrise` (0.1.46 → [0.1.47](../../changelogs/@backstage/plugin-bitrise.md#0147))
- `@backstage/plugin-catalog-backend-module-aws` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#022))
- `@backstage/plugin-catalog-backend-module-azure` (0.1.17 → [0.1.18](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0118))
- `@backstage/plugin-catalog-backend-module-bitbucket` (0.2.13 → [0.2.14](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket.md#0214))
- `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#0114))
- `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#0112))
- `@backstage/plugin-catalog-backend-module-gerrit` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0115))
- `@backstage/plugin-catalog-backend-module-gitlab` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#023))
- `@backstage/plugin-catalog-backend-module-ldap` (0.5.13 → [0.5.14](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0514))
- `@backstage/plugin-catalog-backend-module-msgraph` (0.5.5 → [0.5.6](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#056))
- `@backstage/plugin-catalog-backend-module-openapi` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0113))
- `@backstage/plugin-catalog-backend-module-puppetdb` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#014))
- `@backstage/plugin-catalog-common` (1.0.14 → [1.0.15](../../changelogs/@backstage/plugin-catalog-common.md#1015))
- `@backstage/plugin-catalog-graph` (0.2.31 → [0.2.32](../../changelogs/@backstage/plugin-catalog-graph.md#0232))
- `@backstage/plugin-catalog-graphql` (0.3.21 → [0.3.22](../../changelogs/@backstage/plugin-catalog-graphql.md#0322))
- `@backstage/plugin-cicd-statistics` (0.1.21 → [0.1.22](../../changelogs/@backstage/plugin-cicd-statistics.md#0122))
- `@backstage/plugin-cicd-statistics-module-gitlab` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-cicd-statistics-module-gitlab.md#0116))
- `@backstage/plugin-circleci` (0.3.19 → [0.3.20](../../changelogs/@backstage/plugin-circleci.md#0320))
- `@backstage/plugin-cloudbuild` (0.3.19 → [0.3.20](../../changelogs/@backstage/plugin-cloudbuild.md#0320))
- `@backstage/plugin-code-climate` (0.1.19 → [0.1.20](../../changelogs/@backstage/plugin-code-climate.md#0120))
- `@backstage/plugin-code-coverage` (0.2.12 → [0.2.13](../../changelogs/@backstage/plugin-code-coverage.md#0213))
- `@backstage/plugin-code-coverage-backend` (0.2.12 → [0.2.13](../../changelogs/@backstage/plugin-code-coverage-backend.md#0213))
- `@backstage/plugin-config-schema` (0.1.42 → [0.1.43](../../changelogs/@backstage/plugin-config-schema.md#0143))
- `@backstage/plugin-devtools-common` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-devtools-common.md#012))
- `@backstage/plugin-entity-feedback` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-entity-feedback.md#023))
- `@backstage/plugin-entity-validation` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-entity-validation.md#015))
- `@backstage/plugin-events-backend` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-events-backend.md#028))
- `@backstage/plugin-events-backend-module-aws-sqs` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#022))
- `@backstage/plugin-events-backend-module-azure` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-events-backend-module-azure.md#019))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#019))
- `@backstage/plugin-events-backend-module-gerrit` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#019))
- `@backstage/plugin-events-backend-module-github` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-events-backend-module-github.md#019))
- `@backstage/plugin-events-backend-module-gitlab` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#019))
- `@backstage/plugin-events-backend-test-utils` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-events-backend-test-utils.md#019))
- `@backstage/plugin-events-node` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-events-node.md#028))
- `@backstage/plugin-explore` (0.4.5 → [0.4.6](../../changelogs/@backstage/plugin-explore.md#046))
- `@backstage/plugin-explore-backend` (0.0.8 → [0.0.9](../../changelogs/@backstage/plugin-explore-backend.md#009))
- `@backstage/plugin-explore-react` (0.0.29 → [0.0.30](../../changelogs/@backstage/plugin-explore-react.md#0030))
- `@backstage/plugin-firehydrant` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-firehydrant.md#024))
- `@backstage/plugin-fossa` (0.2.51 → [0.2.52](../../changelogs/@backstage/plugin-fossa.md#0252))
- `@backstage/plugin-gcalendar` (0.3.15 → [0.3.16](../../changelogs/@backstage/plugin-gcalendar.md#0316))
- `@backstage/plugin-gcp-projects` (0.3.38 → [0.3.39](../../changelogs/@backstage/plugin-gcp-projects.md#0339))
- `@backstage/plugin-git-release-manager` (0.3.32 → [0.3.33](../../changelogs/@backstage/plugin-git-release-manager.md#0333))
- `@backstage/plugin-github-actions` (0.6.0 → [0.6.1](../../changelogs/@backstage/plugin-github-actions.md#061))
- `@backstage/plugin-github-deployments` (0.1.50 → [0.1.51](../../changelogs/@backstage/plugin-github-deployments.md#0151))
- `@backstage/plugin-github-issues` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-github-issues.md#029))
- `@backstage/plugin-github-pull-requests-board` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-github-pull-requests-board.md#0114))
- `@backstage/plugin-gitops-profiles` (0.3.37 → [0.3.38](../../changelogs/@backstage/plugin-gitops-profiles.md#0338))
- `@backstage/plugin-gocd` (0.1.25 → [0.1.26](../../changelogs/@backstage/plugin-gocd.md#0126))
- `@backstage/plugin-graphiql` (0.2.51 → [0.2.52](../../changelogs/@backstage/plugin-graphiql.md#0252))
- `@backstage/plugin-graphql-backend` (0.1.36 → [0.1.37](../../changelogs/@backstage/plugin-graphql-backend.md#0137))
- `@backstage/plugin-graphql-voyager` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-graphql-voyager.md#015))
- `@backstage/plugin-ilert` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-ilert.md#029))
- `@backstage/plugin-jenkins` (0.8.1 → [0.8.2](../../changelogs/@backstage/plugin-jenkins.md#082))
- `@backstage/plugin-jenkins-backend` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-jenkins-backend.md#022))
- `@backstage/plugin-jenkins-common` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-jenkins-common.md#0117))
- `@backstage/plugin-kafka` (0.3.19 → [0.3.20](../../changelogs/@backstage/plugin-kafka.md#0320))
- `@backstage/plugin-kafka-backend` (0.2.39 → [0.2.40](../../changelogs/@backstage/plugin-kafka-backend.md#0240))
- `@backstage/plugin-kubernetes-common` (0.6.4 → [0.6.5](../../changelogs/@backstage/plugin-kubernetes-common.md#065))
- `@backstage/plugin-linguist` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-linguist.md#015))
- `@backstage/plugin-microsoft-calendar` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-microsoft-calendar.md#015))
- `@backstage/plugin-newrelic` (0.3.37 → [0.3.38](../../changelogs/@backstage/plugin-newrelic.md#0338))
- `@backstage/plugin-newrelic-dashboard` (0.2.12 → [0.2.13](../../changelogs/@backstage/plugin-newrelic-dashboard.md#0213))
- `@backstage/plugin-nomad-backend` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-nomad-backend.md#011))
- `@backstage/plugin-octopus-deploy` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-octopus-deploy.md#022))
- `@backstage/plugin-org` (0.6.9 → [0.6.10](../../changelogs/@backstage/plugin-org.md#0610))
- `@backstage/plugin-org-react` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-org-react.md#019))
- `@backstage/plugin-pagerduty` (0.6.0 → [0.6.1](../../changelogs/@backstage/plugin-pagerduty.md#061))
- `@backstage/plugin-periskop` (0.1.17 → [0.1.18](../../changelogs/@backstage/plugin-periskop.md#0118))
- `@backstage/plugin-periskop-backend` (0.1.17 → [0.1.18](../../changelogs/@backstage/plugin-periskop-backend.md#0118))
- `@backstage/plugin-permission-backend` (0.5.21 → [0.5.22](../../changelogs/@backstage/plugin-permission-backend.md#0522))
- `@backstage/plugin-permission-common` (0.7.6 → [0.7.7](../../changelogs/@backstage/plugin-permission-common.md#077))
- `@backstage/plugin-permission-node` (0.7.9 → [0.7.10](../../changelogs/@backstage/plugin-permission-node.md#0710))
- `@backstage/plugin-permission-react` (0.4.13 → [0.4.14](../../changelogs/@backstage/plugin-permission-react.md#0414))
- `@backstage/plugin-playlist-backend` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-playlist-backend.md#033))
- `@backstage/plugin-playlist-common` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-playlist-common.md#018))
- `@backstage/plugin-proxy-backend` (0.2.40 → [0.2.41](../../changelogs/@backstage/plugin-proxy-backend.md#0241))
- `@backstage/plugin-rollbar` (0.4.19 → [0.4.20](../../changelogs/@backstage/plugin-rollbar.md#0420))
- `@backstage/plugin-rollbar-backend` (0.1.43 → [0.1.44](../../changelogs/@backstage/plugin-rollbar-backend.md#0144))
- `@backstage/plugin-scaffolder` (1.14.0 → [1.14.1](../../changelogs/@backstage/plugin-scaffolder.md#1141))
- `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.22 → [0.2.23](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0223))
- `@backstage/plugin-scaffolder-backend-module-rails` (0.4.15 → [0.4.16](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0416))
- `@backstage/plugin-scaffolder-backend-module-sentry` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#017))
- `@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.19 → [0.2.20](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0220))
- `@backstage/plugin-scaffolder-common` (1.3.1 → [1.3.2](../../changelogs/@backstage/plugin-scaffolder-common.md#132))
- `@backstage/plugin-scaffolder-node` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-scaffolder-node.md#015))
- `@backstage/plugin-search-backend` (1.3.2 → [1.3.3](../../changelogs/@backstage/plugin-search-backend.md#133))
- `@backstage/plugin-search-backend-module-catalog` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#013))
- `@backstage/plugin-search-backend-module-elasticsearch` (1.3.1 → [1.3.2](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#132))
- `@backstage/plugin-search-backend-module-explore` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-search-backend-module-explore.md#013))
- `@backstage/plugin-search-backend-module-pg` (0.5.7 → [0.5.8](../../changelogs/@backstage/plugin-search-backend-module-pg.md#058))
- `@backstage/plugin-search-backend-module-techdocs` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#013))
- `@backstage/plugin-search-backend-node` (1.2.2 → [1.2.3](../../changelogs/@backstage/plugin-search-backend-node.md#123))
- `@backstage/plugin-search-common` (1.2.4 → [1.2.5](../../changelogs/@backstage/plugin-search-common.md#125))
- `@backstage/plugin-search-react` (1.6.2 → [1.6.3](../../changelogs/@backstage/plugin-search-react.md#163))
- `@backstage/plugin-sentry` (0.5.4 → [0.5.5](../../changelogs/@backstage/plugin-sentry.md#055))
- `@backstage/plugin-shortcuts` (0.3.11 → [0.3.12](../../changelogs/@backstage/plugin-shortcuts.md#0312))
- `@backstage/plugin-sonarqube-react` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-sonarqube-react.md#017))
- `@backstage/plugin-splunk-on-call` (0.4.8 → [0.4.9](../../changelogs/@backstage/plugin-splunk-on-call.md#049))
- `@backstage/plugin-stack-overflow` (0.1.17 → [0.1.18](../../changelogs/@backstage/plugin-stack-overflow.md#0118))
- `@backstage/plugin-stack-overflow-backend` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-stack-overflow-backend.md#023))
- `@backstage/plugin-tech-insights` (0.3.11 → [0.3.12](../../changelogs/@backstage/plugin-tech-insights.md#0312))
- `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.30 → [0.1.31](../../changelogs/@backstage/plugin-tech-insights-backend-module-jsonfc.md#0131))
- `@backstage/plugin-tech-insights-node` (0.4.4 → [0.4.5](../../changelogs/@backstage/plugin-tech-insights-node.md#045))
- `@backstage/plugin-tech-radar` (0.6.5 → [0.6.6](../../changelogs/@backstage/plugin-tech-radar.md#066))
- `@backstage/plugin-techdocs` (1.6.4 → [1.6.5](../../changelogs/@backstage/plugin-techdocs.md#165))
- `@backstage/plugin-techdocs-addons-test-utils` (1.0.15 → [1.0.16](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#1016))
- `@backstage/plugin-techdocs-backend` (1.6.3 → [1.6.4](../../changelogs/@backstage/plugin-techdocs-backend.md#164))
- `@backstage/plugin-techdocs-module-addons-contrib` (1.0.14 → [1.0.15](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1015))
- `@backstage/plugin-techdocs-node` (1.7.2 → [1.7.3](../../changelogs/@backstage/plugin-techdocs-node.md#173))
- `@backstage/plugin-techdocs-react` (1.1.7 → [1.1.8](../../changelogs/@backstage/plugin-techdocs-react.md#118))
- `@backstage/plugin-todo` (0.2.21 → [0.2.22](../../changelogs/@backstage/plugin-todo.md#0222))
- `@backstage/plugin-todo-backend` (0.1.43 → [0.1.44](../../changelogs/@backstage/plugin-todo-backend.md#0144))
- `@backstage/plugin-user-settings-backend` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-user-settings-backend.md#0111))
- `@backstage/plugin-vault` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-vault.md#0114))
- `@backstage/plugin-vault-backend` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-vault-backend.md#033))
- `@backstage/plugin-xcmetrics` (0.2.39 → [0.2.40](../../changelogs/@backstage/plugin-xcmetrics.md#0240))
- `@backstage/repo-tools` (0.3.1 → [0.3.2](../../changelogs/@backstage/repo-tools.md#032))
- `@techdocs/cli` (1.4.3 → [1.4.4](../../changelogs/@techdocs/cli.md#144))
