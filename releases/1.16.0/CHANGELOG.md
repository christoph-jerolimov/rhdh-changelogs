# Backstage Release 1.16.0 changelog

Changes between 1.15.0 and 1.16.0 — 201 changed and 0 added packages.

## Summary

- [Breaking changes](#breaking-changes): 2 packages
- [Major version bumps](#major-version-bumps): 1 package
- [Minor version bumps](#minor-version-bumps): 5 packages
- [Patch version bumps](#patch-version-bumps): 46 packages

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

## Breaking changes

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.3.3 → 0.4.0)

#### 0.4.0

##### Minor Changes

- b1cc10696f2f: **BREAKING** Allow incremental event handlers to be async; Force event handler
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

- e1d615757f48: Update readme and instructions

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.1.3 → 0.2.0)

#### 0.2.0

##### Minor Changes

- 0a7e7c5d0c04: **BREAKING**

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

### `@backstage/plugin-dynatrace` (6.0.0 → 7.0.0)

#### 7.0.0

##### Patch Changes

- 3424cbfe5f4a: updated the link that the "View Entity in Dynatrace" redirects the user to.

## Minor version bumps

### `@backstage/core-app-api` (1.8.1 → 1.9.0)

#### 1.9.0

##### Minor Changes

- a77ddf7ccd71: add login in popup options to config popup width and height

##### Patch Changes

- 8174cf4c0edf: Fixing MUI / Material UI references

### `@backstage/plugin-catalog` (1.11.2 → 1.12.0)

#### 1.12.0

##### Minor Changes

- eae0352d3864: Tables which use `EntityTableProps` now have an additional `tableOptions` prop which can be used to provide additional table options to these components.

##### Patch Changes

- 294b1629de28: Display a warning alert if relations are defined, which don't exist in the catalog.

### `@backstage/plugin-catalog-backend` (1.10.0 → 1.11.0)

#### 1.11.0

##### Minor Changes

- f06f0e46ba88: Support placeholder resolvers in the CatalogPlugin, also moves `PlaceholderResolver` and related types from `@backstage/plugin-catalog-backend` to `@backstage/plugin-catalog-node`.

### `@backstage/plugin-catalog-node` (1.3.7 → 1.4.0)

#### 1.4.0

##### Minor Changes

- f06f0e46ba88: Support placeholder resolvers in the CatalogPlugin, also moves `PlaceholderResolver` and related types from `@backstage/plugin-catalog-backend` to `@backstage/plugin-catalog-node`.

### `@backstage/plugin-catalog-react` (1.7.0 → 1.8.0)

#### 1.8.0

##### Minor Changes

- eae0352d3864: Tables which use `EntityTableProps` now have an additional `tableOptions` prop which can be used to provide additional table options to these components.

## Patch version bumps

### `@backstage/backend-common` (0.19.0 → 0.19.1)

#### 0.19.1

##### Patch Changes

- 787ddcc5ef99: use `Readable.from` to explicitly convert the `buffer` from `node-fetch` to a `Readable` stream

### `@backstage/cli` (0.22.8 → 0.22.9)

#### 0.22.9

##### Patch Changes

- 6adb6f41711a: Fixed the `--alwaysYarnPack` flag on the`backstage-cli build-workspace` command.
- 4edd1ef71453: semver upgrade to 7.5.3
- ff45cb559e49: Updated dependency `esbuild` to `^0.18.0`.
- 8174cf4c0edf: Fixing MUI / Material UI references

### `@backstage/cli-node` (0.1.1 → 0.1.2)

#### 0.1.2

##### Patch Changes

- 4edd1ef71453: semver upgrade to 7.5.3

### `@backstage/codemods` (0.1.44 → 0.1.45)

#### 0.1.45

##### Patch Changes

- 325a32e9476e: Updated dependency `jscodeshift` to `^0.15.0`.

### `@backstage/core-components` (0.13.2 → 0.13.3)

#### 0.13.3

##### Patch Changes

- 7e0f558fbc37: The `Skip to content` button on click focuses on the main article tag and skips the `h1` tag. Users are not able to identify which page they are on currently. Now it's changed the behaviour of the button and focuses on the `h1` tag on the page.
- 68531cc70e1f: Break some internal circular import chains
- 4722c948c217: Parse unicode characters in name for avatar component
- 015439b5b6ca: Updated dependency `rc-progress` to `3.4.2`.
- 8174cf4c0edf: Fixing MUI / Material UI references
- 4317b1c2f430: Remove zooming in restrictions in the catalog graph
- a011d2316a58: Fix keyboard navigation & focus highlight on Select component.

### `@backstage/core-plugin-api` (1.5.2 → 1.5.3)

#### 1.5.3

##### Patch Changes

- 8174cf4c0edf: Fixing MUI / Material UI references
- 13426ebd1235: Change `IconComponent` type to be compatible with Material UI v5 icons.

### `@backstage/create-app` (0.5.2 → 0.5.3)

#### 0.5.3

##### Patch Changes

- 76b83a4422bb: Post-create message - added instruction to run `yarn install` when app was created with `--skip-install`
- d72e2eeba6f1: Bumped create-app version.
- e3ce5dd3f89a: add cy.\*\*.should to cypress eslintrc
- f920a61031c5: Enable specifying an external application template when using the `create-app` CLI command.
- 294b1629de28: Display a warning alert if relations are defined, which don't exist in the catalog.
- 4f7292c74dff: Updated included Dockerfile to include `g++`. Also updated the comments to note that some of the dependencies are also needed by isolated-vm

### `@backstage/errors` (1.2.0 → 1.2.1)

#### 1.2.1

##### Patch Changes

- e205b3e6ede8: Set `this.name` in all error classes that extend `CustomErrorBase` class to their actual name

### `@backstage/plugin-adr` (0.6.2 → 0.6.3)

#### 0.6.3

##### Patch Changes

- 2b4513abb784: fixed error with date parsing.

### `@backstage/plugin-adr-backend` (0.3.4 → 0.3.5)

#### 0.3.5

##### Patch Changes

- a8805a9a4f25: Added support for the [new backend system](https://backstage.io/docs/backend-system/)

### `@backstage/plugin-adr-common` (0.2.10 → 0.2.11)

#### 0.2.11

##### Patch Changes

- 2b4513abb784: fixed error with date parsing.

### `@backstage/plugin-airbrake` (0.3.19 → 0.3.20)

#### 0.3.20

##### Patch Changes

- 7b6033587650: Added documentation for the [new backend system](https://backstage.io/docs/backend-system/)

### `@backstage/plugin-airbrake-backend` (0.2.19 → 0.2.20)

#### 0.2.20

##### Patch Changes

- a95bb64e461a: Added support for the [new backend system](https://backstage.io/docs/backend-system/)

### `@backstage/plugin-auth-backend` (0.18.4 → 0.18.5)

#### 0.18.5

##### Patch Changes

- c27ae5004fc2: Support for Token Endpoint Auth Method for OIDC Provider

### `@backstage/plugin-azure-devops-backend` (0.3.25 → 0.3.26)

#### 0.3.26

##### Patch Changes

- ae261e79d256: Added alpha support for the [new backend system](https://backstage.io/docs/backend-system/)

### `@backstage/plugin-badges-backend` (0.2.1 → 0.2.2)

#### 0.2.2

##### Patch Changes

- 2bbdcb4154c3: Added support for the [new backend system](https://backstage.io/docs/backend-system/)

### `@backstage/plugin-catalog-backend-module-github` (0.3.1 → 0.3.2)

#### 0.3.2

##### Patch Changes

- b01b869d7158: fixed event handler to respect configured organization
- 68531cc70e1f: Break some internal circular import chains

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.1.0 → 0.1.1)

#### 0.1.1

##### Patch Changes

- a8fa79ccc105: Fix and improve documentation for the unprocessed entities modules.

### `@backstage/plugin-catalog-import` (0.9.9 → 0.9.10)

#### 0.9.10

##### Patch Changes

- 36b7edf39585: Add a "View Component" button as the primary CTA after registering a new component using a link to catalog-info.yaml

### `@backstage/plugin-catalog-unprocessed-entities` (0.1.0 → 0.1.1)

#### 0.1.1

##### Patch Changes

- 2c4869473155: The Catalog Unprocessed Entities plugin can now be integrated as a tab within the DevTools plugin

  - Added an export for `UnprocessedEntitiesContent`
  - Updated the `README` with images of the features
  - Adjusted the styles to fill in the available space
  - Set the table page size to 20 as 40 was causing errors in the browser console

- 57585d89f926: Export some types and API items. This allows people to call the API from different places with the ApiRef, as well
  as completely customize the client if required. Check the [README.md](https://github.com/backstage/backstage/blob/master/plugins/catalog-unprocessed-entities/README.md) to
  note what needs to be added in order to use the new `catalogUnprocessedEntitiesApiRef` exported function.
- a8fa79ccc105: Fix and improve documentation for the unprocessed entities modules.
- 267396f45bd0: Corrected the installation instructions.
- 7a9c8a9cd0ce: Fixed spacing for success message
- e6f50426333b: update some peer dependencies to silence yarn install
- 77b408fad872: install command points to correct package name

### `@backstage/plugin-codescene` (0.1.14 → 0.1.15)

#### 0.1.15

##### Patch Changes

- 015439b5b6ca: Updated dependency `rc-progress` to `3.4.2`.

### `@backstage/plugin-cost-insights` (0.12.8 → 0.12.9)

#### 0.12.9

##### Patch Changes

- 8174cf4c0edf: Fixing MUI / Material UI references

### `@backstage/plugin-devtools` (0.1.1 → 0.1.2)

#### 0.1.2

##### Patch Changes

- 5969639fd075: Allow specifying custom title for `DevToolsLayout`
- 2c4869473155: Updated the `README` with instructions on how to integrate the Catalog Unprocessed Entities plugin as a tab within DevTools
- e6f50426333b: update some peer dependencies to silence yarn install

### `@backstage/plugin-devtools-backend` (0.1.1 → 0.1.2)

#### 0.1.2

##### Patch Changes

- 4edd1ef71453: semver upgrade to 7.5.3
- ae261e79d256: Added alpha support for the [new backend system](https://backstage.io/docs/backend-system/)

### `@backstage/plugin-entity-feedback-backend` (0.1.4 → 0.1.5)

#### 0.1.5

##### Patch Changes

- 5c1c10adac8f: Added support for the new backend system

### `@backstage/plugin-home` (0.5.3 → 0.5.4)

#### 0.5.4

##### Patch Changes

- 88c62048fcbd: fix: update plugin home dependency for `@rjsf/material-ui` to `@rjsf/material-ui-v5`
- 0b89ca8ce24a: Add possibility to customize the settings widget for different
  properties by using the `uiSchema` provided by the json-schema.
  More information here: https://rjsf-team.github.io/react-jsonschema-form/docs/api-reference/uiSchema
- b8ebd3d2e4e5: Fix missing column breakpoints in `CustomHompageGrid`

### `@backstage/plugin-home-react` (0.1.0 → 0.1.1)

#### 0.1.1

##### Patch Changes

- 0b89ca8ce24a: Add possibility to customize the settings widget for different
  properties by using the `uiSchema` provided by the json-schema.
  More information here: https://rjsf-team.github.io/react-jsonschema-form/docs/api-reference/uiSchema

### `@backstage/plugin-kubernetes` (0.9.2 → 0.9.3)

#### 0.9.3

##### Patch Changes

- d62fc3fe85ba: Make pod drawer headings consistent
- cc27fa4a1aac: Changed Google cloud auth scope to read-only.

### `@backstage/plugin-kubernetes-backend` (0.11.1 → 0.11.2)

#### 0.11.2

##### Patch Changes

- 4db037c20148: Replace reference to deprecated import
- c2e530653539: Add WebSocket support to `kubernetes-backend` proxy.
- be6395601d1f: Proxy endpoint supports cluster URLs with subpath
- 47154c8ddba6: Fixed a bug where the proxy endpoint would error when used in combination with
  a local kubectl proxy process and a token-based auth strategy on-cluster.
- faac6b7425b2: Update readme with a valid link to k8s documentation

### `@backstage/plugin-lighthouse` (0.4.4 → 0.4.5)

#### 0.4.5

##### Patch Changes

- cb200dbb8038: Added more verbose components (used to render `null`) when no audits for a website corresponding to the provided url were found.
  Added `Create New Audit` button for the `AuditListForEntity` component used by `EntityLighthouseContent` and `EmbeddedRouter`.
  Removed error alert from `errorApi` if error was due to no audits being found for a website (empty database query result).

### `@backstage/plugin-lighthouse-backend` (0.2.2 → 0.2.3)

#### 0.2.3

##### Patch Changes

- 402749b00531: Added support for the [new backend system](https://backstage.io/docs/backend-system/)

### `@backstage/plugin-linguist-backend` (0.3.0 → 0.3.1)

#### 0.3.1

##### Patch Changes

- ae261e79d256: Added alpha support for the [new backend system](https://backstage.io/docs/backend-system/)

### `@backstage/plugin-nomad` (0.1.0 → 0.1.1)

#### 0.1.1

##### Patch Changes

- 68531cc70e1f: Break some internal circular import chains
- e6f50426333b: update some peer dependencies to silence yarn install

### `@backstage/plugin-playlist` (0.1.11 → 0.1.12)

#### 0.1.12

##### Patch Changes

- 68531cc70e1f: Break some internal circular import chains

### `@backstage/plugin-puppetdb` (0.1.2 → 0.1.3)

#### 0.1.3

##### Patch Changes

- e6f50426333b: update some peer dependencies to silence yarn install

### `@backstage/plugin-scaffolder-backend` (1.15.0 → 1.15.1)

#### 1.15.1

##### Patch Changes

- 600be804927d: Indicate the name of the option that is being deprecated in task deprecation warning.
- ff45cb559e49: Updated dependency `esbuild` to `^0.18.0`.

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.2.1 → 0.2.2)

#### 0.2.2

##### Patch Changes

- dd367967e2e1: Fixed a bug in `gitlab:group:ensureExists` where `repos` was always set as the root group.

### `@backstage/plugin-scaffolder-react` (1.5.0 → 1.5.1)

#### 1.5.1

##### Patch Changes

- f74a27de4d2c: Made markdown description theme-able

### `@backstage/plugin-search` (1.3.2 → 1.3.3)

#### 1.3.3

##### Patch Changes

- c3381408d633: Fixed bug in "View Full Results" link of Search Modal that did not navigate to the full results page.

### `@backstage/plugin-sonarqube` (0.7.0 → 0.7.1)

#### 0.7.1

##### Patch Changes

- fcaf4cfc70ee: Made default config optional
- 015439b5b6ca: Updated dependency `rc-progress` to `3.4.2`.

### `@backstage/plugin-sonarqube-backend` (0.2.0 → 0.2.1)

#### 0.2.1

##### Patch Changes

- fcaf4cfc70ee: Made default config optional

### `@backstage/plugin-stackstorm` (0.1.3 → 0.1.4)

#### 0.1.4

##### Patch Changes

- 1745959daf98: Add props to StackstormHome for Header Customization

### `@backstage/plugin-tech-insights-backend` (0.5.12 → 0.5.13)

#### 0.5.13

##### Patch Changes

- 4edd1ef71453: semver upgrade to 7.5.3

### `@backstage/plugin-user-settings` (0.7.4 → 0.7.5)

#### 0.7.5

##### Patch Changes

- 8174cf4c0edf: Fixing MUI / Material UI references

### `@backstage/test-utils` (1.4.0 → 1.4.1)

#### 1.4.1

##### Patch Changes

- 8174cf4c0edf: Fixing MUI / Material UI references

### `@backstage/theme` (0.4.0 → 0.4.1)

#### 0.4.1

##### Patch Changes

- 4f28914d9f0e: Overwrite `PaletteOptions` & `ThemeOptions` type to allow use of `createTheme` from `@backstage/theme` as well as `@material-ui/core/styles` with the same type. Also replaced the default `CSSBaseline` with v4 instead of v5 for better backwards compatibility for now.
- 41c5aa0ab589: Applying the modified `theme.spacing` method only to overrides instead of replacing it in the whole theme.
- 9395baa82413: You can now customize the typography of your theme by passing in your own custom typography defaults
- 8174cf4c0edf: Fixing MUI / Material UI references
- f0444f094396: Removed the hard coded color and background color in the `MuiChip` overrides so that they work better with custom themes
- 874c3e8bf909: Override the spacing to a v5 compliant method

_Excluded dependency updates for packages: `@backstage/app-defaults`, `@backstage/backend-app-api`, `@backstage/backend-defaults`, `@backstage/backend-plugin-api`, `@backstage/backend-tasks`, `@backstage/backend-test-utils`, `@backstage/catalog-client`, `@backstage/catalog-model`, `@backstage/config-loader`, `@backstage/dev-utils`, `@backstage/integration`, `@backstage/integration-aws-node`, `@backstage/integration-react`, `@backstage/plugin-allure`, `@backstage/plugin-analytics-module-ga`, `@backstage/plugin-analytics-module-ga4`, `@backstage/plugin-apache-airflow`, `@backstage/plugin-api-docs`, `@backstage/plugin-apollo-explorer`, `@backstage/plugin-app-backend`, `@backstage/plugin-auth-node`, `@backstage/plugin-azure-devops`, `@backstage/plugin-azure-sites`, `@backstage/plugin-azure-sites-backend`, `@backstage/plugin-badges`, `@backstage/plugin-bazaar`, `@backstage/plugin-bazaar-backend`, `@backstage/plugin-bitbucket-cloud-common`, `@backstage/plugin-bitrise`, `@backstage/plugin-catalog-backend-module-aws`, `@backstage/plugin-catalog-backend-module-azure`, `@backstage/plugin-catalog-backend-module-bitbucket`, `@backstage/plugin-catalog-backend-module-bitbucket-cloud`, `@backstage/plugin-catalog-backend-module-bitbucket-server`, `@backstage/plugin-catalog-backend-module-gerrit`, `@backstage/plugin-catalog-backend-module-gitlab`, `@backstage/plugin-catalog-backend-module-ldap`, `@backstage/plugin-catalog-backend-module-msgraph`, `@backstage/plugin-catalog-backend-module-openapi`, `@backstage/plugin-catalog-backend-module-puppetdb`, `@backstage/plugin-catalog-common`, `@backstage/plugin-catalog-graph`, `@backstage/plugin-catalog-graphql`, `@backstage/plugin-cicd-statistics`, `@backstage/plugin-cicd-statistics-module-gitlab`, `@backstage/plugin-circleci`, `@backstage/plugin-cloudbuild`, `@backstage/plugin-code-climate`, `@backstage/plugin-code-coverage`, `@backstage/plugin-code-coverage-backend`, `@backstage/plugin-config-schema`, `@backstage/plugin-devtools-common`, `@backstage/plugin-entity-feedback`, `@backstage/plugin-entity-validation`, `@backstage/plugin-events-backend`, `@backstage/plugin-events-backend-module-aws-sqs`, `@backstage/plugin-events-backend-module-azure`, `@backstage/plugin-events-backend-module-bitbucket-cloud`, `@backstage/plugin-events-backend-module-gerrit`, `@backstage/plugin-events-backend-module-github`, `@backstage/plugin-events-backend-module-gitlab`, `@backstage/plugin-events-backend-test-utils`, `@backstage/plugin-events-node`, `@backstage/plugin-explore`, `@backstage/plugin-explore-backend`, `@backstage/plugin-explore-react`, `@backstage/plugin-firehydrant`, `@backstage/plugin-fossa`, `@backstage/plugin-gcalendar`, `@backstage/plugin-gcp-projects`, `@backstage/plugin-git-release-manager`, `@backstage/plugin-github-actions`, `@backstage/plugin-github-deployments`, `@backstage/plugin-github-issues`, `@backstage/plugin-github-pull-requests-board`, `@backstage/plugin-gitops-profiles`, `@backstage/plugin-gocd`, `@backstage/plugin-graphiql`, `@backstage/plugin-graphql-backend`, `@backstage/plugin-graphql-voyager`, `@backstage/plugin-ilert`, `@backstage/plugin-jenkins`, `@backstage/plugin-jenkins-backend`, `@backstage/plugin-jenkins-common`, `@backstage/plugin-kafka`, `@backstage/plugin-kafka-backend`, `@backstage/plugin-kubernetes-common`, `@backstage/plugin-linguist`, `@backstage/plugin-microsoft-calendar`, `@backstage/plugin-newrelic`, `@backstage/plugin-newrelic-dashboard`, `@backstage/plugin-nomad-backend`, `@backstage/plugin-octopus-deploy`, `@backstage/plugin-org`, `@backstage/plugin-org-react`, `@backstage/plugin-pagerduty`, `@backstage/plugin-periskop`, `@backstage/plugin-periskop-backend`, `@backstage/plugin-permission-backend`, `@backstage/plugin-permission-common`, `@backstage/plugin-permission-node`, `@backstage/plugin-permission-react`, `@backstage/plugin-playlist-backend`, `@backstage/plugin-playlist-common`, `@backstage/plugin-proxy-backend`, `@backstage/plugin-rollbar`, `@backstage/plugin-rollbar-backend`, `@backstage/plugin-scaffolder`, `@backstage/plugin-scaffolder-backend-module-cookiecutter`, `@backstage/plugin-scaffolder-backend-module-rails`, `@backstage/plugin-scaffolder-backend-module-sentry`, `@backstage/plugin-scaffolder-backend-module-yeoman`, `@backstage/plugin-scaffolder-common`, `@backstage/plugin-scaffolder-node`, `@backstage/plugin-search-backend`, `@backstage/plugin-search-backend-module-catalog`, `@backstage/plugin-search-backend-module-elasticsearch`, `@backstage/plugin-search-backend-module-explore`, `@backstage/plugin-search-backend-module-pg`, `@backstage/plugin-search-backend-module-techdocs`, `@backstage/plugin-search-backend-node`, `@backstage/plugin-search-common`, `@backstage/plugin-search-react`, `@backstage/plugin-sentry`, `@backstage/plugin-shortcuts`, `@backstage/plugin-sonarqube-react`, `@backstage/plugin-splunk-on-call`, `@backstage/plugin-stack-overflow`, `@backstage/plugin-stack-overflow-backend`, `@backstage/plugin-tech-insights`, `@backstage/plugin-tech-insights-backend-module-jsonfc`, `@backstage/plugin-tech-insights-node`, `@backstage/plugin-tech-radar`, `@backstage/plugin-techdocs`, `@backstage/plugin-techdocs-addons-test-utils`, `@backstage/plugin-techdocs-backend`, `@backstage/plugin-techdocs-module-addons-contrib`, `@backstage/plugin-techdocs-node`, `@backstage/plugin-techdocs-react`, `@backstage/plugin-todo`, `@backstage/plugin-todo-backend`, `@backstage/plugin-user-settings-backend`, `@backstage/plugin-vault`, `@backstage/plugin-vault-backend`, `@backstage/plugin-xcmetrics`, `@backstage/repo-tools`, `@techdocs/cli`._
