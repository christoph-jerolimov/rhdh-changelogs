# Backstage Release 1.47.0 changelog

Changes between 1.46.7 and 1.47.0 — 109 changed and 2 added packages.

## Summary

- [Newly added packages](#newly-added-packages): 2 packages
- [Breaking changes](#breaking-changes): 4 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 4 packages
- [Patch version bumps](#patch-version-bumps): 42 packages
- [Excluded dependency updates](#excluded-dependency-updates): 59 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/plugin-app-react` (new, 0.1.0)](#backstageplugin-app-react-new-010)
  - [`@backstage/plugin-devtools-react` (new, 0.1.0)](#backstageplugin-devtools-react-new-010)
- [Breaking changes](#breaking-changes)
  - [`@backstage/backend-defaults` (0.14.2 → 0.15.0)](#backstagebackend-defaults-0142--0150)
  - [`@backstage/frontend-app-api` (0.13.3 → 0.14.0)](#backstagefrontend-app-api-0133--0140)
  - [`@backstage/plugin-techdocs-node` (1.13.11 → 1.14.0)](#backstageplugin-techdocs-node-11311--1140)
  - [`@backstage/ui` (0.10.1 → 0.11.0)](#backstageui-0101--0110)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/plugin-auth-backend` (0.25.7 → 0.26.0)](#backstageplugin-auth-backend-0257--0260)
  - [`@backstage/plugin-events-backend-module-kafka` (0.2.0 → 0.3.0)](#backstageplugin-events-backend-module-kafka-020--030)
  - [`@backstage/plugin-home` (0.8.15 → 0.9.0)](#backstageplugin-home-0815--090)
  - [`@backstage/plugin-scaffolder-backend-module-sentry` (0.2.16 → 0.3.0)](#backstageplugin-scaffolder-backend-module-sentry-0216--030)
- [Patch version bumps](#patch-version-bumps)
  - [`@backstage/backend-app-api` (1.4.0 → 1.4.1)](#backstagebackend-app-api-140--141)
  - [`@backstage/backend-openapi-utils` (0.6.4 → 0.6.5)](#backstagebackend-openapi-utils-064--065)
  - [`@backstage/backend-plugin-api` (1.6.0 → 1.6.1)](#backstagebackend-plugin-api-160--161)
  - [`@backstage/backend-test-utils` (1.10.2 → 1.10.3)](#backstagebackend-test-utils-1102--1103)
  - [`@backstage/cli` (0.35.1 → 0.35.2)](#backstagecli-0351--0352)
  - [`@backstage/cli-common` (0.1.16 → 0.1.17)](#backstagecli-common-0116--0117)
  - [`@backstage/core-components` (0.18.4 → 0.18.5)](#backstagecore-components-0184--0185)
  - [`@backstage/create-app` (0.7.7 → 0.7.8)](#backstagecreate-app-077--078)
  - [`@backstage/frontend-plugin-api` (0.13.2 → 0.13.3)](#backstagefrontend-plugin-api-0132--0133)
  - [`@backstage/integration` (1.19.1 → 1.19.2)](#backstageintegration-1191--1192)
  - [`@backstage/plugin-api-docs` (0.13.2 → 0.13.3)](#backstageplugin-api-docs-0132--0133)
  - [`@backstage/plugin-app` (0.3.3 → 0.3.4)](#backstageplugin-app-033--034)
  - [`@backstage/plugin-app-backend` (0.5.9 → 0.5.10)](#backstageplugin-app-backend-059--0510)
  - [`@backstage/plugin-app-node` (0.1.40 → 0.1.41)](#backstageplugin-app-node-0140--0141)
  - [`@backstage/plugin-auth-backend-module-oidc-provider` (0.4.10 → 0.4.11)](#backstageplugin-auth-backend-module-oidc-provider-0410--0411)
  - [`@backstage/plugin-auth-node` (0.6.10 → 0.6.11)](#backstageplugin-auth-node-0610--0611)
  - [`@backstage/plugin-catalog` (1.32.1 → 1.32.2)](#backstageplugin-catalog-1321--1322)
  - [`@backstage/plugin-catalog-backend-module-github` (0.12.0 → 0.12.1)](#backstageplugin-catalog-backend-module-github-0120--0121)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.8.3 → 0.8.4)](#backstageplugin-catalog-backend-module-msgraph-083--084)
  - [`@backstage/plugin-catalog-backend-module-puppetdb` (0.2.17 → 0.2.18)](#backstageplugin-catalog-backend-module-puppetdb-0217--0218)
  - [`@backstage/plugin-catalog-graph` (0.5.5 → 0.5.6)](#backstageplugin-catalog-graph-055--056)
  - [`@backstage/plugin-catalog-unprocessed-entities` (0.2.24 → 0.2.25)](#backstageplugin-catalog-unprocessed-entities-0224--0225)
  - [`@backstage/plugin-devtools` (0.1.34 → 0.1.35)](#backstageplugin-devtools-0134--0135)
  - [`@backstage/plugin-devtools-backend` (0.5.12 → 0.5.13)](#backstageplugin-devtools-backend-0512--0513)
  - [`@backstage/plugin-devtools-common` (0.1.20 → 0.1.21)](#backstageplugin-devtools-common-0120--0121)
  - [`@backstage/plugin-mcp-actions-backend` (0.1.6 → 0.1.7)](#backstageplugin-mcp-actions-backend-016--017)
  - [`@backstage/plugin-mui-to-bui` (0.2.2 → 0.2.3)](#backstageplugin-mui-to-bui-022--023)
  - [`@backstage/plugin-notifications` (0.5.12 → 0.5.13)](#backstageplugin-notifications-0512--0513)
  - [`@backstage/plugin-org` (0.6.47 → 0.6.48)](#backstageplugin-org-0647--0648)
  - [`@backstage/plugin-permission-common` (0.9.3 → 0.9.4)](#backstageplugin-permission-common-093--094)
  - [`@backstage/plugin-permission-node` (0.10.7 → 0.10.8)](#backstageplugin-permission-node-0107--0108)
  - [`@backstage/plugin-scaffolder` (1.35.0 → 1.35.1)](#backstageplugin-scaffolder-1350--1351)
  - [`@backstage/plugin-scaffolder-backend` (3.1.0 → 3.1.1)](#backstageplugin-scaffolder-backend-310--311)
  - [`@backstage/plugin-scaffolder-backend-module-azure` (0.2.16 → 0.2.17)](#backstageplugin-scaffolder-backend-module-azure-0216--0217)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.9.3 → 0.9.4)](#backstageplugin-scaffolder-backend-module-github-093--094)
  - [`@backstage/plugin-scaffolder-node` (0.12.2 → 0.12.3)](#backstageplugin-scaffolder-node-0122--0123)
  - [`@backstage/plugin-scaffolder-react` (1.19.4 → 1.19.5)](#backstageplugin-scaffolder-react-1194--1195)
  - [`@backstage/plugin-search` (1.5.2 → 1.5.3)](#backstageplugin-search-152--153)
  - [`@backstage/plugin-techdocs` (1.16.1 → 1.16.2)](#backstageplugin-techdocs-1161--1162)
  - [`@backstage/plugin-techdocs-backend` (2.1.3 → 2.1.4)](#backstageplugin-techdocs-backend-213--214)
  - [`@backstage/plugin-user-settings-backend` (0.3.9 → 0.3.10)](#backstageplugin-user-settings-backend-039--0310)
  - [`@backstage/repo-tools` (0.16.1 → 0.16.2)](#backstagerepo-tools-0161--0162)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/plugin-app-react` (new, [0.1.0](../../changelogs/@backstage/plugin-app-react.md#010))

#### 0.1.0

##### Minor Changes

- [`9ccf84e`](https://github.com/backstage/backstage/commit/9ccf84e): Initial release of this web library for `@backstage/plugin-app`.

##### Patch Changes

- [`9ccf84e`](https://github.com/backstage/backstage/commit/9ccf84e): Moved the following blueprints from `@backstage/frontend-plugin-api`:

  - `AppRootWrapperBlueprint`
  - `IconBundleBlueprint`
  - `NavContentBlueprint`
  - `RouterBlueprint`
  - `SignInPageBlueprint`
  - `SwappableComponentBlueprint`
  - `ThemeBlueprint`
  - `TranslationBlueprint`

### `@backstage/plugin-devtools-react` (new, [0.1.0](../../changelogs/@backstage/plugin-devtools-react.md#010))

#### 0.1.0

##### Minor Changes

- [`be6cef5`](https://github.com/backstage/backstage/commit/be6cef5): Add support for adding `unprocessed-entities` and other tabs to `devtools` when using the New Frontend system

## Breaking changes

### `@backstage/backend-defaults` (0.14.2 → [0.15.0](../../changelogs/@backstage/backend-defaults.md#0150))

#### 0.15.0

##### Minor Changes

- [`6fc00e6`](https://github.com/backstage/backstage/commit/6fc00e6): Added action filtering support with glob patterns and attribute constraints.

  The `ActionsService` now supports filtering actions based on configuration. This allows controlling which actions are exposed to consumers like the MCP backend.

  Configuration example:

  ```yaml
  backend:
    actions:
      pluginSources:
        - catalog
        - scaffolder
      filter:
        include:
          - id: 'catalog:*'
            attributes:
              destructive: false
          - id: 'scaffolder:*'
        exclude:
          - id: '*:delete-*'
          - attributes:
              readOnly: false
  ```

  Filtering logic:

  - `include`: Rules for actions to include. Each rule can specify an `id` glob pattern and/or `attributes` constraints. An action must match at least one rule to be included. If no include rules are specified, all actions are included by default.
  - `exclude`: Rules for actions to exclude. Takes precedence over include rules.
  - Each rule combines `id` and `attributes` with AND logic (both must match if specified).

- [`27f9061`](https://github.com/backstage/backstage/commit/27f9061): **BREAKING**: The constructor for `FetchUrlReader` is now private. If you have to construct an instance of it, please use `FetchUrlReader.fromConfig` instead.
- [`27f9061`](https://github.com/backstage/backstage/commit/27f9061): **BREAKING**: `coreServices.urlReader` now validates that redirect chains are subject to the allow list in `reading.allow` of your app config. If you were relying on redirects that pointed to URLs that were not allowlisted, you will now have to add those to your config as well.

  Example:

  ```diff
   backend:
     reading:
       allow:
         - host: example.com
  +      - host: storage-api.example.com
  ```

##### Patch Changes

- [`3afeab4`](https://github.com/backstage/backstage/commit/3afeab4): Implementing `readTree` for `GoogleGcsReader`
- [`c641c14`](https://github.com/backstage/backstage/commit/c641c14): Wrap some of the action logic with `resolveSafeChildPath` and improve symlink handling when fetching remote and local files
- [`7126bf2`](https://github.com/backstage/backstage/commit/7126bf2): Fixed a spelling mistake in root health service shutdown response.
- [`872eb91`](https://github.com/backstage/backstage/commit/872eb91): Upgrade `zod-to-json-schema` to latest version

### `@backstage/frontend-app-api` (0.13.3 → [0.14.0](../../changelogs/@backstage/frontend-app-api.md#0140))

#### 0.14.0

##### Minor Changes

- [`3bd2a1a`](https://github.com/backstage/backstage/commit/3bd2a1a): BREAKING: The ability for plugins to override APIs has been restricted to only allow overrides of APIs within the same plugin. For example, a plugin can no longer override any of the core APIs provided by the `app` plugin, this must be done with an `app` module instead.

### `@backstage/plugin-techdocs-node` (1.13.11 → [1.14.0](../../changelogs/@backstage/plugin-techdocs-node.md#1140))

#### 1.14.0

##### Minor Changes

- [`63c459c`](https://github.com/backstage/backstage/commit/63c459c): **BREAKING:** It's now possible to use the credentials from the `integrations.awsS3` config to authenticate with AWS S3. The new priority is:

  1. `aws.accounts`
  2. `techdocs.publisher.awsS3.credentials`
  3. `integrations.awsS3`
  4. Default credential chain

  In case of multiple `integrations.awsS3` are present, the target integration is determined by the `accessKeyId` in `techdocs.publisher.awsS3.credentials` if provided. Otherwise, the default credential chain is used.

  This means that depending on your setup, this feature may break your existing setup.
  In general:

  - if you are configuring `aws.accounts`, no action is required
  - if you are configuring `techdocs.publisher.awsS3.credentials`, no action is required
  - if you are configuring multiple integrations under `integrations.awsS3`, no action is required
  - if you are configuring a single integration under `integrations.awsS3`, make sure that the integration has access to the bucket you are using for TechDocs

##### Patch Changes

- [`f0951aa`](https://github.com/backstage/backstage/commit/f0951aa): Updated the `defaultDockerImage` to reflect the latest TechDocs Container version of v1.2.8

### `@backstage/ui` (0.10.1 → [0.11.0](../../changelogs/@backstage/ui.md#0110))

#### 0.11.0

##### Minor Changes

- [`243e5e7`](https://github.com/backstage/backstage/commit/243e5e7): **BREAKING**: Redesigned Table component with new `useTable` hook API.

  - The `Table` component (React Aria wrapper) is renamed to `TableRoot`
  - New high-level `Table` component that handles data display, pagination, sorting, and selection
  - The `useTable` hook is completely redesigned with a new API supporting three pagination modes (complete, offset, cursor)
  - New types: `ColumnConfig`, `TableProps`, `TableItem`, `UseTableOptions`, `UseTableResult`

  New features include unified pagination modes, debounced query changes, stale data preservation during reloads, and row selection with toggle/replace behaviors.

  **Migration:**

  1. Update imports and use the new `useTable` hook:

  ```diff
  -import { Table, useTable } from '@backstage/ui';
  -const { data, paginationProps } = useTable({ data: items, pagination: {...} });
  +import { Table, useTable, type ColumnConfig } from '@backstage/ui';
  +const { tableProps } = useTable({
  +  mode: 'complete',
  +  getData: () => items,
  +});
  ```

  2. Define columns and render with the new Table API:

  ```diff
  -<Table aria-label="My table">
  -  <TableHeader>...</TableHeader>
  -  <TableBody items={data}>...</TableBody>
  -</Table>
  -<TablePagination {...paginationProps} />
  +const columns: ColumnConfig<Item>[] = [
  +  { id: 'name', label: 'Name', isRowHeader: true, cell: item => <CellText title={item.name} /> },
  +  { id: 'type', label: 'Type', cell: item => <CellText title={item.type} /> },
  +];
  +
  +<Table columnConfig={columns} {...tableProps} />
  ```

  **Affected components:** Table, TableRoot, TablePagination

- [`95246eb`](https://github.com/backstage/backstage/commit/95246eb): **BREAKING**: Updating color tokens to match the new neutral style on different surfaces.

  **Migration:**

  There's no direct replacement for the old tint tokens but you can use the new neutral set of color tokens on surface 0 or 1 as a replacement.

  - `--bui-bg-tint` can be replaced by `--bui-bg-neutral-on-surface-0`
  - `--bui-bg-tint-hover` can be replaced by `--bui-bg-neutral-on-surface-0-hover`
  - `--bui-bg-tint-pressed` can be replaced by `--bui-bg-neutral-on-surface-0-pressed`
  - `--bui-bg-tint-disabled` can be replaced by `--bui-bg-neutral-on-surface-0-disabled`

- [`ea0c6d8`](https://github.com/backstage/backstage/commit/ea0c6d8): **BREAKING**: Introduce new `ToggleButton` & `ToggleButtonGroup` components in Backstage UI

  **Affected components:** ToggleButton, ToggleButtonGroup

- [`4ea1d15`](https://github.com/backstage/backstage/commit/4ea1d15): **BREAKING**: Renamed CSS variable `--bui-bg` to `--bui-bg-surface-0` for consistency.

##### Patch Changes

- [`1880402`](https://github.com/backstage/backstage/commit/1880402): Fixes app background color on dark mode.

  **Affected components:** Box

- [`d2fdded`](https://github.com/backstage/backstage/commit/d2fdded): Added indeterminate state support to the Checkbox component for handling partial selection scenarios like table header checkboxes.

  **Affected components:** Checkbox

- [`4fb15d2`](https://github.com/backstage/backstage/commit/4fb15d2): Added missing `aria-label` attributes to `SearchField` components in `Select`, `MenuAutocomplete`, and `MenuAutocompleteListbox` to fix accessibility warnings.

  **Affected components:** Select, MenuAutocomplete, MenuAutocompleteListbox

- [`21c87cc`](https://github.com/backstage/backstage/commit/21c87cc): Fixes disabled state in primary and secondary buttons in Backstage UI.

  **Affected components:** Button

- [`9c76682`](https://github.com/backstage/backstage/commit/9c76682): build(deps-dev): bump `storybook` from 10.1.9 to 10.1.10
- [`de80336`](https://github.com/backstage/backstage/commit/de80336): Fixed disabled tertiary buttons incorrectly showing hover effects on surfaces.

  **Affected components:** Button

- [`133d5c6`](https://github.com/backstage/backstage/commit/133d5c6): Added new Popover component for Backstage UI with automatic overflow handling, and full placement support. Also introduced `--bui-shadow` token for consistent elevation styling across overlay components (Popover, Tooltip, Menu).

  **Affected components:** Popover

- [`973c839`](https://github.com/backstage/backstage/commit/973c839): Fixed Table sorting indicator not being visible when a column is actively sorted.

  **Affected components:** Table, Column

- [`df40cfc`](https://github.com/backstage/backstage/commit/df40cfc): Fixed Menu component trigger button not toggling correctly. Removed custom click-outside handler that was interfering with React Aria's built-in state management, allowing the menu to properly open and close when clicking the trigger button.

  **Affected components:** Menu

- [`b01ab96`](https://github.com/backstage/backstage/commit/b01ab96): Added support for column width configuration in Table component. Columns now accept `width`, `defaultWidth`, `minWidth`, and `maxWidth` props for responsive layout control.

  **Affected components:** Table, Column

- [`b4a4911`](https://github.com/backstage/backstage/commit/b4a4911): Fixed SearchField `startCollapsed` prop not working correctly in Backstage UI. The field now properly starts in a collapsed state, expands when clicked and focused, and collapses back when unfocused with no input. Also fixed CSS logic to work correctly in all layout contexts (flex row, flex column, and regular containers).

  **Affected components:** SearchField

- [`b3253b6`](https://github.com/backstage/backstage/commit/b3253b6): Fixed `Link` component causing hard page refreshes for internal routes. The component now properly uses React Router's navigation instead of full page reloads.
- [`fe7fe69`](https://github.com/backstage/backstage/commit/fe7fe69): Added support for custom pagination options in `useTable` hook and `Table` component. You can now configure `pageSizeOptions` to customize the page size dropdown, and hook into pagination events via `onPageSizeChange`, `onNextPage`, and `onPreviousPage` callbacks. When `pageSize` doesn't match any option, the first option is used and a warning is logged.

  **Affected components:** Table, TablePagination

- [`cfac8a4`](https://github.com/backstage/backstage/commit/cfac8a4): Fixed missing border styles on table selection cells in multi-select mode.

  **Affected components:** Table

- [`2532d2a`](https://github.com/backstage/backstage/commit/2532d2a): Added `className` and `style` props to the `Table` component.

  **Affected components:** Table

## 0.x minor version bumps

### `@backstage/plugin-auth-backend` (0.25.7 → [0.26.0](../../changelogs/@backstage/plugin-auth-backend.md#0260))

#### 0.26.0

##### Minor Changes

- [`7ffc873`](https://github.com/backstage/backstage/commit/7ffc873): Fix `user_created_at` migration causing `SQLiteError` regarding use of non-constants for defaults

### `@backstage/plugin-events-backend-module-kafka` (0.2.0 → [0.3.0](../../changelogs/@backstage/plugin-events-backend-module-kafka.md#030))

#### 0.3.0

##### Minor Changes

- [`ef5bbd8`](https://github.com/backstage/backstage/commit/ef5bbd8): Add support for Kafka offset configuration (`fromBeginning`) and `autoCommit`

### `@backstage/plugin-home` (0.8.15 → [0.9.0](../../changelogs/@backstage/plugin-home.md#090))

#### 0.9.0

##### Minor Changes

- [`e091a83`](https://github.com/backstage/backstage/commit/e091a83): Widget configurations are now only saved to storage when the Save button is explicitly clicked. Added a Cancel button that allows users to discard unsaved changes and revert to the last saved state.

##### Patch Changes

- [`bdda543`](https://github.com/backstage/backstage/commit/bdda543): Updated WidgetOverlay color to use `alpha(theme.palette.background.paper, 0.93)` for better theme alignment instead of hardcoded RGBA

### `@backstage/plugin-scaffolder-backend-module-sentry` (0.2.16 → [0.3.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#030))

#### 0.3.0

##### Minor Changes

- [`ab606b2`](https://github.com/backstage/backstage/commit/ab606b2): Add ability to configure the API Base URL

## Patch version bumps

### `@backstage/backend-app-api` (1.4.0 → [1.4.1](../../changelogs/@backstage/backend-app-api.md#141))

#### 1.4.1

##### Patch Changes

- [`04db26b`](https://github.com/backstage/backstage/commit/04db26b): Clean up process event listeners on backend stop to prevent leaks

### `@backstage/backend-openapi-utils` (0.6.4 → [0.6.5](../../changelogs/@backstage/backend-openapi-utils.md#065))

#### 0.6.5

##### Patch Changes

- [`6678b78`](https://github.com/backstage/backstage/commit/6678b78): Internal update to use native feature from our request validation library for handling base path determination.

### `@backstage/backend-plugin-api` (1.6.0 → [1.6.1](../../changelogs/@backstage/backend-plugin-api.md#161))

#### 1.6.1

##### Patch Changes

- [`ae4dd5d`](https://github.com/backstage/backstage/commit/ae4dd5d): Move some of the symlink resolution to `isChildPath`

### `@backstage/backend-test-utils` (1.10.2 → [1.10.3](../../changelogs/@backstage/backend-test-utils.md#1103))

#### 1.10.3

##### Patch Changes

- [`872eb91`](https://github.com/backstage/backstage/commit/872eb91): Upgrade `zod-to-json-schema` to latest version

### `@backstage/cli` (0.35.1 → [0.35.2](../../changelogs/@backstage/cli.md#0352))

#### 0.35.2

##### Patch Changes

- [`320c6a9`](https://github.com/backstage/backstage/commit/320c6a9): Bump `@swc/core` to support `ES2023` and `ES2024`
- [`c0d7bf6`](https://github.com/backstage/backstage/commit/c0d7bf6): Added `--include` and `--format` options to `backstage-cli info` command for including additional packages via glob patterns and outputting as JSON or Text.
- [`f6a5d2f`](https://github.com/backstage/backstage/commit/f6a5d2f): Fixed CSS module class name collisions when running multiple versions of packages simultaneously by using content-based hashing for class name generation.
- [`140cbc2`](https://github.com/backstage/backstage/commit/140cbc2): Added `@backstage/backend-test-utils` to backend package templates.
- [`4eeba9e`](https://github.com/backstage/backstage/commit/4eeba9e): Upgrade `zod-validation-error` to version 4
- [`9ee5996`](https://github.com/backstage/backstage/commit/9ee5996): Bump minimum required `@swc/core` to avoid transpilation bug

### `@backstage/cli-common` (0.1.16 → [0.1.17](../../changelogs/@backstage/cli-common.md#0117))

#### 0.1.17

##### Patch Changes

- [`ae4dd5d`](https://github.com/backstage/backstage/commit/ae4dd5d): Move some of the symlink resolution to `isChildPath`

### `@backstage/core-components` (0.18.4 → [0.18.5](../../changelogs/@backstage/core-components.md#0185))

#### 0.18.5

##### Patch Changes

- [`a723b8a`](https://github.com/backstage/backstage/commit/a723b8a): The MarkdownContent component now handles HTML content the same way as GitHub when rendering GitHub-flavored Markdown
- [`c671db9`](https://github.com/backstage/backstage/commit/c671db9): Fixed bug in Table component where the toolbar layout would break when both a title and filters were present.
- [`55a9dc2`](https://github.com/backstage/backstage/commit/55a9dc2): Update colour token again in ItemCardHeader to respect theme definition.

### `@backstage/create-app` (0.7.7 → [0.7.8](../../changelogs/@backstage/create-app.md#078))

#### 0.7.8

##### Patch Changes

- [`fea3e39`](https://github.com/backstage/backstage/commit/fea3e39): Bumped create-app version.
- [`9f1ee3e`](https://github.com/backstage/backstage/commit/9f1ee3e): Bumped create-app version.
- [`880310b`](https://github.com/backstage/backstage/commit/880310b): Bumped create-app version.
- [`f1fe6fe`](https://github.com/backstage/backstage/commit/f1fe6fe): Updated Dockerfile to use Node 24 and Debian Trixie

### `@backstage/frontend-plugin-api` (0.13.2 → [0.13.3](../../changelogs/@backstage/frontend-plugin-api.md#0133))

#### 0.13.3

##### Patch Changes

- [`3bd2a1a`](https://github.com/backstage/backstage/commit/3bd2a1a): Updated documentation for `createApiRef` to clarify the role of the ID in specifying the owning plugin of an API.
- [`9ccf84e`](https://github.com/backstage/backstage/commit/9ccf84e): The following blueprints are being restricted to only be used in app plugin overrides and modules. They are being moved to the `@backstage/plugin-app-react` package and have been deprecated:

  - `AppRootWrapperBlueprint`
  - `IconBundleBlueprint`
  - `NavContentBlueprint`
  - `RouterBlueprint`
  - `SignInPageBlueprint`
  - `SwappableComponentBlueprint`
  - `ThemeBlueprint`
  - `TranslationBlueprint`

- [`4554a4e`](https://github.com/backstage/backstage/commit/4554a4e): Added an alpha `PluginWrapperBlueprint` exported from `@backstage/frontend-plugin-api/alpha`, which can install components that will wrap all plugin elements.
- [`872eb91`](https://github.com/backstage/backstage/commit/872eb91): Upgrade `zod-to-json-schema` to latest version

### `@backstage/integration` (1.19.1 → [1.19.2](../../changelogs/@backstage/integration.md#1192))

#### 1.19.2

##### Patch Changes

- [`3afeab4`](https://github.com/backstage/backstage/commit/3afeab4): Implementing `ScmIntegration` for `GoogleGcs`
- [`9083273`](https://github.com/backstage/backstage/commit/9083273): Rollback the lowercase replacing in GitHub integration config

### `@backstage/plugin-api-docs` (0.13.2 → [0.13.3](../../changelogs/@backstage/plugin-api-docs.md#0133))

#### 0.13.3

##### Patch Changes

- [`0216090`](https://github.com/backstage/backstage/commit/0216090): Updated dependency `@types/swagger-ui-react` to `^5.0.0`.
- [`abeba2b`](https://github.com/backstage/backstage/commit/abeba2b): Fix types with new bumped dependency

### `@backstage/plugin-app` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-app.md#034))

#### 0.3.4

##### Patch Changes

- [`4554a4e`](https://github.com/backstage/backstage/commit/4554a4e): Implemented support for the new `PluginWrapperBlueprint` from `@backstage/frontend-plugin-api/alpha`.
- [`9ccf84e`](https://github.com/backstage/backstage/commit/9ccf84e): The following blueprints are being restricted to only be used in app plugin overrides and modules. They will now produce a deprecation warning when used outside of the app plugin:

  - `AppRootWrapperBlueprint`
  - `IconBundleBlueprint`
  - `NavContentBlueprint`
  - `RouterBlueprint`
  - `SignInPageBlueprint`
  - `SwappableComponentBlueprint`
  - `ThemeBlueprint`
  - `TranslationBlueprint`

### `@backstage/plugin-app-backend` (0.5.9 → [0.5.10](../../changelogs/@backstage/plugin-app-backend.md#0510))

#### 0.5.10

##### Patch Changes

- [`9ccf84e`](https://github.com/backstage/backstage/commit/9ccf84e): Updated plugin metadata.

### `@backstage/plugin-app-node` (0.1.40 → [0.1.41](../../changelogs/@backstage/plugin-app-node.md#0141))

#### 0.1.41

##### Patch Changes

- [`9ccf84e`](https://github.com/backstage/backstage/commit/9ccf84e): Updated plugin metadata.

### `@backstage/plugin-auth-backend-module-oidc-provider` (0.4.10 → [0.4.11](../../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#0411))

#### 0.4.11

##### Patch Changes

- [`e54fcb2`](https://github.com/backstage/backstage/commit/e54fcb2): Added support for custom start URL search parameters (with the new `startUrlSearchParams` config property)

### `@backstage/plugin-auth-node` (0.6.10 → [0.6.11](../../changelogs/@backstage/plugin-auth-node.md#0611))

#### 0.6.11

##### Patch Changes

- [`4eeba9e`](https://github.com/backstage/backstage/commit/4eeba9e): Upgrade `zod-validation-error` to version 4
- [`872eb91`](https://github.com/backstage/backstage/commit/872eb91): Upgrade `zod-to-json-schema` to latest version

### `@backstage/plugin-catalog` (1.32.1 → [1.32.2](../../changelogs/@backstage/plugin-catalog.md#1322))

#### 1.32.2

##### Patch Changes

- [`7ca91e8`](https://github.com/backstage/backstage/commit/7ca91e8): Header in EntityLayout should always be shown.
  Monitoring the loading status caused flickering when the refresh() method of the Async Entity was invoked.

### `@backstage/plugin-catalog-backend-module-github` (0.12.0 → [0.12.1](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#0121))

#### 0.12.1

##### Patch Changes

- [`cb4b907`](https://github.com/backstage/backstage/commit/cb4b907): Improved efficiency of `GithubOrgEntityProvider` membership event handling and edit team. The provider now fetches only the specific user's teams instead of all organization users when processing membership events, and uses `addEntitiesOperation` instead of `replaceEntitiesOperation` to avoid unnecessary entity deletions.

### `@backstage/plugin-catalog-backend-module-msgraph` (0.8.3 → [0.8.4](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#084))

#### 0.8.4

##### Patch Changes

- [`115b378`](https://github.com/backstage/backstage/commit/115b378): Changed the logger level from 'warning' to 'debug' when we are unable to load the user's photo.

### `@backstage/plugin-catalog-backend-module-puppetdb` (0.2.17 → [0.2.18](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0218))

#### 0.2.18

##### Patch Changes

- [`a307700`](https://github.com/backstage/backstage/commit/a307700): Fixed crash when `latest_report_status` is undefined

### `@backstage/plugin-catalog-graph` (0.5.5 → [0.5.6](../../changelogs/@backstage/plugin-catalog-graph.md#056))

#### 0.5.6

##### Patch Changes

- [`5c49a00`](https://github.com/backstage/backstage/commit/5c49a00): Update for the `qs` library bump: the old array limit setting has changed to be more strict; you can no longer just give a zero to mean unlimited. So we choose an arbitrary high value, to at least go higher than the default 20.

### `@backstage/plugin-catalog-unprocessed-entities` (0.2.24 → [0.2.25](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#0225))

#### 0.2.25

##### Patch Changes

- [`be6cef5`](https://github.com/backstage/backstage/commit/be6cef5): Add support for adding `unprocessed-entities` and other tabs to `devtools` when using the New Frontend system

### `@backstage/plugin-devtools` (0.1.34 → [0.1.35](../../changelogs/@backstage/plugin-devtools.md#0135))

#### 0.1.35

##### Patch Changes

- [`be6cef5`](https://github.com/backstage/backstage/commit/be6cef5): Add support for adding `unprocessed-entities` and other tabs to `devtools` when using the New Frontend system

### `@backstage/plugin-devtools-backend` (0.5.12 → [0.5.13](../../changelogs/@backstage/plugin-devtools-backend.md#0513))

#### 0.5.13

##### Patch Changes

- [`be6cef5`](https://github.com/backstage/backstage/commit/be6cef5): Add support for adding `unprocessed-entities` and other tabs to `devtools` when using the New Frontend system

### `@backstage/plugin-devtools-common` (0.1.20 → [0.1.21](../../changelogs/@backstage/plugin-devtools-common.md#0121))

#### 0.1.21

##### Patch Changes

- [`be6cef5`](https://github.com/backstage/backstage/commit/be6cef5): Add support for adding `unprocessed-entities` and other tabs to `devtools` when using the New Frontend system

### `@backstage/plugin-mcp-actions-backend` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-mcp-actions-backend.md#017))

#### 0.1.7

##### Patch Changes

- [`4d82a35`](https://github.com/backstage/backstage/commit/4d82a35): build(deps): bump `@modelcontextprotocol/sdk` from 1.24.3 to 1.25.2

### `@backstage/plugin-mui-to-bui` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-mui-to-bui.md#023))

#### 0.2.3

##### Patch Changes

- [`f157f43`](https://github.com/backstage/backstage/commit/f157f43): Fix installation command
- [`e4a1180`](https://github.com/backstage/backstage/commit/e4a1180): Updated tokens from `--bui-bg` to `--bui-bg-surface-0`

### `@backstage/plugin-notifications` (0.5.12 → [0.5.13](../../changelogs/@backstage/plugin-notifications.md#0513))

#### 0.5.13

##### Patch Changes

- [`4452d15`](https://github.com/backstage/backstage/commit/4452d15): Added i18n support.

### `@backstage/plugin-org` (0.6.47 → [0.6.48](../../changelogs/@backstage/plugin-org.md#0648))

#### 0.6.48

##### Patch Changes

- [`db3cfd7`](https://github.com/backstage/backstage/commit/db3cfd7): Adds the Resource kind to the `useGetEntities` fallback so that Resources are included by default when no specific kinds are provided in the group ownership card.

### `@backstage/plugin-permission-common` (0.9.3 → [0.9.4](../../changelogs/@backstage/plugin-permission-common.md#094))

#### 0.9.4

##### Patch Changes

- [`872eb91`](https://github.com/backstage/backstage/commit/872eb91): Upgrade `zod-to-json-schema` to latest version

### `@backstage/plugin-permission-node` (0.10.7 → [0.10.8](../../changelogs/@backstage/plugin-permission-node.md#0108))

#### 0.10.8

##### Patch Changes

- [`872eb91`](https://github.com/backstage/backstage/commit/872eb91): Upgrade `zod-to-json-schema` to latest version

### `@backstage/plugin-scaffolder` (1.35.0 → [1.35.1](../../changelogs/@backstage/plugin-scaffolder.md#1351))

#### 1.35.1

##### Patch Changes

- [`9d75495`](https://github.com/backstage/backstage/commit/9d75495): Fixed bug in RepoUrlPickerComponent component where repository names were not being autocompleted.
- [`872eb91`](https://github.com/backstage/backstage/commit/872eb91): Upgrade `zod-to-json-schema` to latest version

### `@backstage/plugin-scaffolder-backend` (3.1.0 → [3.1.1](../../changelogs/@backstage/plugin-scaffolder-backend.md#311))

#### 3.1.1

##### Patch Changes

- [`5012852`](https://github.com/backstage/backstage/commit/5012852): Remove unused abort controller in debug:wait action
- [`c641c14`](https://github.com/backstage/backstage/commit/c641c14): Wrap some of the action logic with `resolveSafeChildPath` and improve symlink handling when fetching remote and local files
- [`27f9061`](https://github.com/backstage/backstage/commit/27f9061): REwrite]
- [`872eb91`](https://github.com/backstage/backstage/commit/872eb91): Upgrade `zod-to-json-schema` to latest version

### `@backstage/plugin-scaffolder-backend-module-azure` (0.2.16 → [0.2.17](../../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#0217))

#### 0.2.17

##### Patch Changes

- [`88abcc6`](https://github.com/backstage/backstage/commit/88abcc6): Improved README with clearer setup and usage guidance.

### `@backstage/plugin-scaffolder-backend-module-github` (0.9.3 → [0.9.4](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#094))

#### 0.9.4

##### Patch Changes

- [`bb7088b`](https://github.com/backstage/backstage/commit/bb7088b): Added options to set [workflow access level][access-level] for repositories to `github:repo:create`

  This is useful when creating repositories for GitHub Actions to manage access
  to the workflows during creation.

  ```diff
   - action: github:repo:create
      id: create-repo
      input:
        repoUrl: github.com?owner=owner&repo=repo
        visibility: private
  +     workflowAccess: organization
  ```

  [access-level]: https://docs.github.com/en/rest/actions/permissions?apiVersion=2022-11-28#set-the-level-of-access-for-workflows-outside-of-the-repository

### `@backstage/plugin-scaffolder-node` (0.12.2 → [0.12.3](../../changelogs/@backstage/plugin-scaffolder-node.md#0123))

#### 0.12.3

##### Patch Changes

- [`c641c14`](https://github.com/backstage/backstage/commit/c641c14): Wrap some of the action logic with `resolveSafeChildPath` and improve symlink handling when fetching remote and local files
- [`27f9061`](https://github.com/backstage/backstage/commit/27f9061): REwrite]
- [`872eb91`](https://github.com/backstage/backstage/commit/872eb91): Upgrade `zod-to-json-schema` to latest version

### `@backstage/plugin-scaffolder-react` (1.19.4 → [1.19.5](../../changelogs/@backstage/plugin-scaffolder-react.md#1195))

#### 1.19.5

##### Patch Changes

- [`872eb91`](https://github.com/backstage/backstage/commit/872eb91): Upgrade `zod-to-json-schema` to latest version

### `@backstage/plugin-search` (1.5.2 → [1.5.3](../../changelogs/@backstage/plugin-search.md#153))

#### 1.5.3

##### Patch Changes

- [`5c49a00`](https://github.com/backstage/backstage/commit/5c49a00): Update for the `qs` library bump: the old array limit setting has changed to be more strict; you can no longer just give a zero to mean unlimited. So we choose an arbitrary high value, to at least go higher than the default 20.

### `@backstage/plugin-techdocs` (1.16.1 → [1.16.2](../../changelogs/@backstage/plugin-techdocs.md#1162))

#### 1.16.2

##### Patch Changes

- [`0afb8a6`](https://github.com/backstage/backstage/commit/0afb8a6): Corrected color of some elements such as Grid cards and Tables.
- [`94ff7ab`](https://github.com/backstage/backstage/commit/94ff7ab): Code block "Copy to clipboard" button was not positioned correctly for docs built with `mkdocs-material>=9.7`

### `@backstage/plugin-techdocs-backend` (2.1.3 → [2.1.4](../../changelogs/@backstage/plugin-techdocs-backend.md#214))

#### 2.1.4

##### Patch Changes

- [`b6ff2a5`](https://github.com/backstage/backstage/commit/b6ff2a5): Some AWS `publisher` config options such as `region`, `endpoint`, `accountId` are now marked as `@visibility backend` instead of `secret`.

### `@backstage/plugin-user-settings-backend` (0.3.9 → [0.3.10](../../changelogs/@backstage/plugin-user-settings-backend.md#0310))

#### 0.3.10

##### Patch Changes

- [`ad01e54`](https://github.com/backstage/backstage/commit/ad01e54): Resolves an issue where user setting keys containing slashes returned 404 not found.

### `@backstage/repo-tools` (0.16.1 → [0.16.2](../../changelogs/@backstage/repo-tools.md#0162))

#### 0.16.2

##### Patch Changes

- [`498f9dd`](https://github.com/backstage/backstage/commit/498f9dd): Fixed help text for `backstage-repo-tools package schema openapi generate` command.

## Excluded dependency updates

- `@backstage/app-defaults` (1.7.3 → [1.7.4](../../changelogs/@backstage/app-defaults.md#174))
- `@backstage/backend-dynamic-feature-service` (0.7.7 → [0.7.8](../../changelogs/@backstage/backend-dynamic-feature-service.md#078))
- `@backstage/core-compat-api` (0.5.5 → [0.5.6](../../changelogs/@backstage/core-compat-api.md#056))
- `@backstage/dev-utils` (1.1.18 → [1.1.19](../../changelogs/@backstage/dev-utils.md#1119))
- `@backstage/frontend-defaults` (0.3.4 → [0.3.5](../../changelogs/@backstage/frontend-defaults.md#035))
- `@backstage/frontend-test-utils` (0.4.2 → [0.4.3](../../changelogs/@backstage/frontend-test-utils.md#043))
- `@backstage/integration-react` (1.2.13 → [1.2.14](../../changelogs/@backstage/integration-react.md#1214))
- `@backstage/plugin-auth` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-auth.md#014))
- `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.4.10 → [0.4.11](../../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#0411))
- `@backstage/plugin-auth-react` (0.1.22 → [0.1.23](../../changelogs/@backstage/plugin-auth-react.md#0123))
- `@backstage/plugin-bitbucket-cloud-common` (0.3.5 → [0.3.6](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#036))
- `@backstage/plugin-catalog-backend` (3.3.0 → [3.3.1](../../changelogs/@backstage/plugin-catalog-backend.md#331))
- `@backstage/plugin-catalog-backend-module-aws` (0.4.18 → [0.4.19](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#0419))
- `@backstage/plugin-catalog-backend-module-azure` (0.3.12 → [0.3.13](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0313))
- `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.5.9 → [0.5.10](../../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#0510))
- `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.5.6 → [0.5.7](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#057))
- `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.5.6 → [0.5.7](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#057))
- `@backstage/plugin-catalog-backend-module-gerrit` (0.3.9 → [0.3.10](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0310))
- `@backstage/plugin-catalog-backend-module-gitea` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-catalog-backend-module-gitea.md#018))
- `@backstage/plugin-catalog-backend-module-github-org` (0.3.17 → [0.3.18](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#0318))
- `@backstage/plugin-catalog-backend-module-gitlab` (0.7.6 → [0.7.7](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#077))
- `@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.16 → [0.2.17](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab-org.md#0217))
- `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.7.7 → [0.7.8](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#078))
- `@backstage/plugin-catalog-backend-module-logs` (0.1.17 → [0.1.18](../../changelogs/@backstage/plugin-catalog-backend-module-logs.md#0118))
- `@backstage/plugin-catalog-backend-module-openapi` (0.2.17 → [0.2.18](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0218))
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.2.15 → [0.2.16](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#0216))
- `@backstage/plugin-catalog-import` (0.13.8 → [0.13.9](../../changelogs/@backstage/plugin-catalog-import.md#0139))
- `@backstage/plugin-catalog-react` (1.21.4 → [1.21.5](../../changelogs/@backstage/plugin-catalog-react.md#1215))
- `@backstage/plugin-config-schema` (0.1.75 → [0.1.76](../../changelogs/@backstage/plugin-config-schema.md#0176))
- `@backstage/plugin-events-backend` (0.5.9 → [0.5.10](../../changelogs/@backstage/plugin-events-backend.md#0510))
- `@backstage/plugin-events-backend-module-github` (0.4.7 → [0.4.8](../../changelogs/@backstage/plugin-events-backend-module-github.md#048))
- `@backstage/plugin-home-react` (0.1.33 → [0.1.34](../../changelogs/@backstage/plugin-home-react.md#0134))
- `@backstage/plugin-kubernetes` (0.12.14 → [0.12.15](../../changelogs/@backstage/plugin-kubernetes.md#01215))
- `@backstage/plugin-kubernetes-cluster` (0.0.32 → [0.0.33](../../changelogs/@backstage/plugin-kubernetes-cluster.md#0033))
- `@backstage/plugin-kubernetes-react` (0.5.14 → [0.5.15](../../changelogs/@backstage/plugin-kubernetes-react.md#0515))
- `@backstage/plugin-org-react` (0.1.45 → [0.1.46](../../changelogs/@backstage/plugin-org-react.md#0146))
- `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.3.17 → [0.3.18](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket.md#0318))
- `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#031))
- `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.16 → [0.2.17](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#0217))
- `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.16 → [0.3.17](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#0317))
- `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.18 → [0.3.19](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0319))
- `@backstage/plugin-scaffolder-backend-module-gcp` (0.2.16 → [0.2.17](../../changelogs/@backstage/plugin-scaffolder-backend-module-gcp.md#0217))
- `@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.16 → [0.2.17](../../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#0217))
- `@backstage/plugin-scaffolder-backend-module-gitea` (0.2.16 → [0.2.17](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#0217))
- `@backstage/plugin-scaffolder-backend-module-gitlab` (0.11.0 → [0.11.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#0111))
- `@backstage/plugin-scaffolder-backend-module-notifications` (0.1.17 → [0.1.18](../../changelogs/@backstage/plugin-scaffolder-backend-module-notifications.md#0118))
- `@backstage/plugin-scaffolder-backend-module-rails` (0.5.16 → [0.5.17](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0517))
- `@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.17 → [0.4.18](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0418))
- `@backstage/plugin-scaffolder-common` (1.7.4 → [1.7.5](../../changelogs/@backstage/plugin-scaffolder-common.md#175))
- `@backstage/plugin-scaffolder-node-test-utils` (0.3.6 → [0.3.7](../../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#037))
- `@backstage/plugin-search-backend` (2.0.9 → [2.0.10](../../changelogs/@backstage/plugin-search-backend.md#2010))
- `@backstage/plugin-search-backend-module-techdocs` (0.4.9 → [0.4.10](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#0410))
- `@backstage/plugin-search-react` (1.10.1 → [1.10.2](../../changelogs/@backstage/plugin-search-react.md#1102))
- `@backstage/plugin-signals` (0.0.26 → [0.0.27](../../changelogs/@backstage/plugin-signals.md#0027))
- `@backstage/plugin-techdocs-addons-test-utils` (2.0.0 → [2.0.1](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#201))
- `@backstage/plugin-techdocs-module-addons-contrib` (1.1.31 → [1.1.32](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1132))
- `@backstage/plugin-techdocs-react` (1.3.6 → [1.3.7](../../changelogs/@backstage/plugin-techdocs-react.md#137))
- `@backstage/plugin-user-settings` (0.8.30 → [0.8.31](../../changelogs/@backstage/plugin-user-settings.md#0831))
- `@techdocs/cli` (1.10.3 → [1.10.4](../../changelogs/@techdocs/cli.md#1104))
