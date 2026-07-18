# Backstage Release 1.41.0 changelog

Changes between 1.40.2 and 1.41.0 — 174 changed and 1 added packages.

## Summary

- [Newly added packages](#newly-added-packages): 1 package
- [Breaking changes](#breaking-changes): 8 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 1 package
- [0.0.x patch version bumps](#00x-patch-version-bumps): 1 package
- [Other minor version bumps](#other-minor-version-bumps): 2 packages
- [Other patch version bumps](#other-patch-version-bumps): 41 packages
- [Excluded dependency updates for packages](#excluded-dependency-updates-for-packages): 121 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/ui` (new, 0.6.0)](#backstageui-new-060)
- [Breaking changes](#breaking-changes)
  - [`@backstage/canon` (0.5.0 → 0.6.0)](#backstagecanon-050--060)
  - [`@backstage/create-app` (0.7.0 → 0.7.1)](#backstagecreate-app-070--071)
  - [`@backstage/plugin-catalog-backend` (2.1.0 → 3.0.0)](#backstageplugin-catalog-backend-210--300)
  - [`@backstage/plugin-scaffolder` (1.32.0 → 1.33.0)](#backstageplugin-scaffolder-1320--1330)
  - [`@backstage/plugin-scaffolder-backend` (2.0.0 → 2.1.0)](#backstageplugin-scaffolder-backend-200--210)
  - [`@backstage/plugin-scaffolder-common` (1.5.11 → 1.6.0)](#backstageplugin-scaffolder-common-1511--160)
  - [`@backstage/plugin-scaffolder-node` (0.9.0 → 0.10.0)](#backstageplugin-scaffolder-node-090--0100)
  - [`@backstage/plugin-scaffolder-react` (1.17.0 → 1.18.0)](#backstageplugin-scaffolder-react-1170--1180)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/repo-tools` (0.14.0 → 0.15.0)](#backstagerepo-tools-0140--0150)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-signals` (0.0.20 → 0.0.21)](#backstageplugin-signals-0020--0021)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/backend-test-utils` (1.6.0 → 1.7.0)](#backstagebackend-test-utils-160--170)
  - [`@backstage/core-app-api` (1.17.1 → 1.18.0)](#backstagecore-app-api-1171--1180)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-defaults` (0.11.0 → 0.11.1)](#backstagebackend-defaults-0110--0111)
  - [`@backstage/backend-dynamic-feature-service` (0.7.1 → 0.7.2)](#backstagebackend-dynamic-feature-service-071--072)
  - [`@backstage/catalog-client` (1.10.1 → 1.10.2)](#backstagecatalog-client-1101--1102)
  - [`@backstage/catalog-model` (1.7.4 → 1.7.5)](#backstagecatalog-model-174--175)
  - [`@backstage/cli` (0.33.0 → 0.33.1)](#backstagecli-0330--0331)
  - [`@backstage/config` (1.3.2 → 1.3.3)](#backstageconfig-132--133)
  - [`@backstage/config-loader` (1.10.1 → 1.10.2)](#backstageconfig-loader-1101--1102)
  - [`@backstage/core-components` (0.17.3 → 0.17.4)](#backstagecore-components-0173--0174)
  - [`@backstage/core-plugin-api` (1.10.8 → 1.10.9)](#backstagecore-plugin-api-1108--1109)
  - [`@backstage/frontend-app-api` (0.11.3 → 0.11.4)](#backstagefrontend-app-api-0113--0114)
  - [`@backstage/integration` (1.17.0 → 1.17.1)](#backstageintegration-1170--1171)
  - [`@backstage/integration-react` (1.2.8 → 1.2.9)](#backstageintegration-react-128--129)
  - [`@backstage/plugin-app` (0.1.10 → 0.1.11)](#backstageplugin-app-0110--0111)
  - [`@backstage/plugin-auth-backend` (0.25.1 → 0.25.2)](#backstageplugin-auth-backend-0251--0252)
  - [`@backstage/plugin-catalog` (1.31.0 → 1.31.1)](#backstageplugin-catalog-1310--1311)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.7.1 → 0.7.2)](#backstageplugin-catalog-backend-module-incremental-ingestion-071--072)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.11.6 → 0.11.7)](#backstageplugin-catalog-backend-module-ldap-0116--0117)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.7.1 → 0.7.2)](#backstageplugin-catalog-backend-module-msgraph-071--072)
  - [`@backstage/plugin-catalog-backend-module-puppetdb` (0.2.11 → 0.2.12)](#backstageplugin-catalog-backend-module-puppetdb-0211--0212)
  - [`@backstage/plugin-catalog-graph` (0.4.20 → 0.4.21)](#backstageplugin-catalog-graph-0420--0421)
  - [`@backstage/plugin-catalog-import` (0.13.2 → 0.13.3)](#backstageplugin-catalog-import-0132--0133)
  - [`@backstage/plugin-catalog-react` (1.19.0 → 1.19.1)](#backstageplugin-catalog-react-1190--1191)
  - [`@backstage/plugin-home` (0.8.9 → 0.8.10)](#backstageplugin-home-089--0810)
  - [`@backstage/plugin-kubernetes-node` (0.3.1 → 0.3.2)](#backstageplugin-kubernetes-node-031--032)
  - [`@backstage/plugin-mcp-actions-backend` (0.1.0 → 0.1.1)](#backstageplugin-mcp-actions-backend-010--011)
  - [`@backstage/plugin-notifications-backend` (0.5.7 → 0.5.8)](#backstageplugin-notifications-backend-057--058)
  - [`@backstage/plugin-notifications-backend-module-email` (0.3.10 → 0.3.11)](#backstageplugin-notifications-backend-module-email-0310--0311)
  - [`@backstage/plugin-org` (0.6.40 → 0.6.41)](#backstageplugin-org-0640--0641)
  - [`@backstage/plugin-permission-common` (0.9.0 → 0.9.1)](#backstageplugin-permission-common-090--091)
  - [`@backstage/plugin-permission-node` (0.10.1 → 0.10.2)](#backstageplugin-permission-node-0101--0102)
  - [`@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.10 → 0.3.11)](#backstageplugin-scaffolder-backend-module-confluence-to-markdown-0310--0311)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.12 → 0.3.13)](#backstageplugin-scaffolder-backend-module-cookiecutter-0312--0313)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.8.0 → 0.8.1)](#backstageplugin-scaffolder-backend-module-github-080--081)
  - [`@backstage/plugin-scaffolder-backend-module-sentry` (0.2.10 → 0.2.11)](#backstageplugin-scaffolder-backend-module-sentry-0210--0211)
  - [`@backstage/plugin-scaffolder-node-test-utils` (0.3.0 → 0.3.1)](#backstageplugin-scaffolder-node-test-utils-030--031)
  - [`@backstage/plugin-search-backend` (2.0.3 → 2.0.4)](#backstageplugin-search-backend-203--204)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.7.3 → 1.7.4)](#backstageplugin-search-backend-module-elasticsearch-173--174)
  - [`@backstage/plugin-techdocs` (1.13.1 → 1.13.2)](#backstageplugin-techdocs-1131--1132)
  - [`@backstage/plugin-techdocs-node` (1.13.4 → 1.13.5)](#backstageplugin-techdocs-node-1134--1135)
  - [`@backstage/plugin-user-settings` (0.8.23 → 0.8.24)](#backstageplugin-user-settings-0823--0824)
  - [`@backstage/theme` (0.6.6 → 0.6.7)](#backstagetheme-066--067)
- [Excluded dependency updates for packages](#excluded-dependency-updates-for-packages)

## Newly added packages

### `@backstage/ui` (new, 0.6.0)

#### 0.6.0

##### Minor Changes

- e92bb9b: **BREAKING**: Canon has been renamed to Backstage UI. This means that `@backstage/canon` has been deprecated and replaced by `@backstage/ui`.

#### 0.5.0

##### Minor Changes

- 621fac9: **BREAKING**: We are updating the default size of the Button component in Canon to be small instead of medium.
- a842554: **BREAKING**: We set the default size for IconButton in Canon to be small instead of medium.
- 35fd51d: **BREAKING**: Move TextField component to use react Aria under the hood. Introducing a new FieldLabel component to help build custom fields.
- 78204a2: **BREAKING**: We are adding a new as prop on the Heading and Text component to make it easier to change the component tag. We are removing the render prop in favour of the as prop.
- c49e335: **BREAKING**: TextField in Canon now has multiple label sizes as well as the capacity to hide label and description but still make them available for screen readers.
- 24b45ef: **BREAKING**: Fixes spacing props on layout components and aligned on naming for the Grid component. You should now call the Grid root component using `<Grid.Root />` instead of just `<Grid />`.

##### Patch Changes

- 44df879: Add min-width: 0; by default on every Flex components in Canon to help support truncated texts inside flex elements.
- ee6ffe6: Fix styling for the title4 prop on the Heading component in Canon.
- f2f814a: Added a render prop to the Button component in Canon to use it as a link.
- 98f02a6: Add new Switch component in Canon.
- c94f8e0: The filter input in menu comboboxes should now always use the full width of the menu it's in.
- 269316d: Remove leftover console.log from Container component.

#### 0.4.0

##### Minor Changes

- ea36f74: **BREAKING**: Icons on Button and IconButton now need to be imported and placed like this: `<Button iconStart={<ChevronDownIcon />} />`
- ccb1fc6: **BREAKING**: We are modifying the way we treat custom render using 'useRender()' under the hood from BaseUI.
- 04a65c6: **BREAKING**: The icon prop in TextField now accept a ReactNode instead of an icon name. We also updated the icon sizes for each input sizes.

##### Patch Changes

- c8f32db: Use correct colour token for TextField clear button icon, prevent layout shift whenever it is hidden or shown and properly size focus area around it. Also stop leading icon shrinking when used together with clear button.
- e996368: Fix Canon missing dependencies
- 720033c: For improved a11y, clicking a Select component label now focuses the Select trigger element, and the TextField component's label is now styled to indicate it's interactive.
- 6189bfd: Added new icon and onClear props to the TextField to make it easier to accessorize inputs.
- 9510105: Add new Tabs component to Canon
- 97b25a1: Pin version of @base-ui-components/react.
- 206ffbe: Fixed an issue with Canon's DataTable.Pagination component showing the wrong number for the "to" count.
- 72d019d: Removed various typos
- 4551fb7: Update Menu component in Canon to make the UI more condensed. We are also adding a new Combobox option for nested navigation.
- 185d3a8: Use the Field component from Base UI within the TextField.
- 1ea1db0: Add new truncate prop to Text and Heading components in Canon.

#### 0.3.0

##### Minor Changes

- df4e292: **BREAKING**: Improve class name structure using data attributes instead of class names.
- f038613: **BREAKING**: Updated TextField and Select component to work with React Hook Form.
- 1b0cf40: **BREAKING**: Add new Select component for Canon
- 5074d61: **BREAKING**: Added a new TextField component to replace the Field and Input component. After feedback, it became clear that we needed to build a more opinionated version to avoid any problem in the future.

##### Patch Changes

- 6af7b16: Updated styles for the Menu component in Canon.
- bcbc593: Fix Checkbox styles on dark theme in Canon.
- e7efb7d: Add new breakpoint helpers up(), down() and current breakpoint to help you use our breakpoints in your React components.
- f7cb538: Internal refactor and fixes to the prop extraction logic for layout components.
- 35b36ec: Add new Collapsible component for Canon.
- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html

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

#### 0.2.0

##### Minor Changes

- 5a5db29: **BREAKING**: Fix CSS imports and move CSS outputs out of the dist folder.
- 4557beb: **BREAKING**: Added a new Tooltip component to Canon.
- 1e4dfdb: **BREAKING**: We added a new IconButton component with fixed sizes showcasing a single icon.
- e8d12f9: **BREAKING**: Added about 40 new icons to Canon.
- 8689010: **BREAKING**: We are renaming CanonProvider to IconProvider to improve clarity on how to override icons.
- bf319b7: **BREAKING**: Added a new Menu component to Canon.
- cb7e99d: **BREAKING**: Updating styles for Text and Link components as well as global surface tokens.
- bd8520d: **BREAKING**: Added a new ScrollArea component for Canon.

##### Patch Changes

- 56850ca: Fix Button types that was preventing the use of native attributes like onClick.
- 89e8686: To avoid conflicts with Backstage, we removed global styles and set font-family and font-weight for each components.
- 05e9d41: Introducing Canon to Backstage. Canon styling system is based on pure CSS. We are adding our styles.css at the top of your Backstage instance.

#### 0.1.0

##### Minor Changes

- 72c9800: **BREAKING**: Merged the Stack and Inline component into a single component called Flex.
- 65f4acc: **BREAKING**: This is the first alpha release for Canon. As part of this release we are introducing 5 layout components and 7 components. All theming is done through CSS variables.
- 1e4ccce: **BREAKING**: Fixing css structure and making sure that props are applying the correct styles for all responsive values.
- 8309bdb: **BREAKING**: Updated core CSS tokens and fixing the Button component accordingly.

##### Patch Changes

- 989af25: Removed client directive as they are not needed in React 18.
- f44e5cf: Fix spacing props not being applied for custom values.
- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

## Breaking changes

### `@backstage/canon` (0.5.0 → 0.6.0)

#### 0.6.0

##### Minor Changes

- 1d64db6: **Breaking changes** We are updating our Link component to use React Aria under the hood. To match their API we are updating the `to` prop to `href` to match both internal and external routing. We are also updating our variant naming to include all our new font sizes.
- 83fd7f4: **Breaking change** We are moving the Select component to use React Aria under the hood. We updated most props and events according to their underlying API.
- cae63df: **Breaking changes** The Tabs components has been updates to use React Aria under the hood and to work with react-router-dom directly.
- 4c6d891: **BREAKING CHANGES**

  We’re updating our Button component to provide better support for button links.

  - We’re introducing a new `ButtonLink` component, which replaces the previous render prop pattern.
  - To maintain naming consistency across components, `IconButton` is being renamed to `ButtonIcon`.
  - Additionally, the render prop will be removed from all button-related components.

  These changes aim to simplify usage and improve clarity in our component API.

- 2e30459: We are moving our Tooltip component to use React Aria under the hood. In doing so, the structure of the component and its prop are changing to follow the new underlying structure.
- 8fd6fcb: We are renaming @backstage/canon into @backstage/ui. As part of this move we are renaming all class names and CSS variables to follow the new name. "--canon" prefix is becoming "--bui" and all component class names starting with ".canon" will now start with ".bui"

##### Patch Changes

- 140f652: We are consolidating all css files into a single styles.css in Canon.
- 76255b8: Add new Card component to Canon.
- 8154fb9: Add new SearchField component in Canon
- b0a6c8e: Add new Header component to Canon.
- 6910892: Add new `RadioGroup` + `Radio` component to Canon
- 9c17305: Fix scrolling width and height on ScrollArea component in Canon.
- 390ea20: Export Card and Skeleton components.
- be76576: Improve Button, ButtonIcon and ButtonLink styling in Canon.
- 17beb9b: Update return types for Heading & Text components for React 19.
- a8a8514: We are transforming how we structure our class names and data attributes definitions for all components. They are now all set in the same place.
- 667b951: Added placeholder prop to TextField component.
- eac4a4c: Add new tertiary variant to Button, ButtonIcon and ButtonLink in Canon.
- e71333a: adding export for ButtonLink so it's importable
- 8f2e82d: Add new Skeleton component in Canon

### `@backstage/create-app` (0.7.0 → 0.7.1)

#### 0.7.1

##### Patch Changes

- 952cefe: Bumped create-app version.
- 2339363: **BREAKING:** The experimental `catalog.useUrlReadersSearch` configuration flag (introduced in v1.36) has been removed.

  The `UrlReaderProcessor` now always uses the `search` method of `UrlReaders`. Built-in `UrlReaderService` implementations have been updated accordingly.
  If you use custom `UrlReaderService` implementations, you need to adapt their `search` method to correctly handle both specific URLs and potential
  search patterns (see changes on built-in readers [in the original PR](https://github.com/backstage/backstage/pull/28379/files#diff-68b0452f173ee54bdd40f7b5e047a9cb8bb59200425622c212c217b76dac1d1b)).

  Previous behavior was to call the `search` method only if the parsed Git URL's filename contained a wildcard and use `readUrl` otherwise. Each `UrlReaderService` must implement this logic in the `search` method instead.

  This allows each `UrlReaderService` implementation to check whether it's a search URL (that contains a wildcard pattern) or not using logic that is specific to each provider.

- c4a0830: Removed deprecated 'allowedHosts' field from GitHub Publish action input in default template files to fix validation errors with strict Zod validation.

### `@backstage/plugin-catalog-backend` (2.1.0 → 3.0.0)

#### 3.0.0

##### Major Changes

- 5127ebe: **BREAKING**: The default `catalog.stitchingStrategy` has been switched to `{ mode: 'deferred' }`.
- d675d96: **BREAKING**: The relations compatibility mode is no longer enabled by default, and the `disableRelationsCompatiblity` flag has been removed. To re-enable relations compatibility, the new `enableRelationsCompatibility` flag can be used instead.
- 2339363: **BREAKING:** The experimental `catalog.useUrlReadersSearch` configuration flag (introduced in v1.36) has been removed.

  The `UrlReaderProcessor` now always uses the `search` method of `UrlReaders`. Built-in `UrlReaderService` implementations have been updated accordingly.
  If you use custom `UrlReaderService` implementations, you need to adapt their `search` method to correctly handle both specific URLs and potential
  search patterns (see changes on built-in readers [in the original PR](https://github.com/backstage/backstage/pull/28379/files#diff-68b0452f173ee54bdd40f7b5e047a9cb8bb59200425622c212c217b76dac1d1b)).

  Previous behavior was to call the `search` method only if the parsed Git URL's filename contained a wildcard and use `readUrl` otherwise. Each `UrlReaderService` must implement this logic in the `search` method instead.

  This allows each `UrlReaderService` implementation to check whether it's a search URL (that contains a wildcard pattern) or not using logic that is specific to each provider.

- 687bfc8: **BREAKING**: The default `catalog.orphanStrategy` has been switched to `'delete'`.
- 5de7a9d: **BREAKING**: The default `catalog.orphanProviderStrategy` has been switched to `'delete'`.

### `@backstage/plugin-scaffolder` (1.32.0 → 1.33.0)

#### 1.33.0

##### Minor Changes

- c1ce316: BREAKING `/alpha`: Converted `scaffolder.task.read` and `scaffolder.task.cancel` into Resource Permissions.

  BREAKING `/alpha`: Added a new scaffolder rule `isTaskOwner` for `scaffolder.task.read` and `scaffolder.task.cancel` to allow for conditional permission policies such as restricting access to tasks and task events based on task creators.

  BREAKING `/alpha`: Retrying a task now requires both `scaffolder.task.read` and `scaffolder.task.create` permissions, replacing the previous requirement of `scaffolder.task.read` and `scaffolder.task.cancel`.

##### Patch Changes

- 289e4a1: Filter MultiEntityPicker options based on rendered option value

### `@backstage/plugin-scaffolder-backend` (2.0.0 → 2.1.0)

#### 2.1.0

##### Minor Changes

- c1ce316: BREAKING `/alpha`: Converted `scaffolder.task.read` and `scaffolder.task.cancel` into Resource Permissions.

  BREAKING `/alpha`: Added a new scaffolder rule `isTaskOwner` for `scaffolder.task.read` and `scaffolder.task.cancel` to allow for conditional permission policies such as restricting access to tasks and task events based on task creators.

  BREAKING `/alpha`: Retrying a task now requires both `scaffolder.task.read` and `scaffolder.task.create` permissions, replacing the previous requirement of `scaffolder.task.read` and `scaffolder.task.cancel`.

##### Patch Changes

- 424610a: Scaffolder audit Log now includes taskId and createdBy
- dbde180: An internal refactor which adds additional types to experimental checkpoints
- fc70b43: Replaced deprecated uses of `@backstage/backend-common` with the equivalents in `@backstage/backend-defaults` and `@backstage/backend-plugin-api`.

### `@backstage/plugin-scaffolder-common` (1.5.11 → 1.6.0)

#### 1.6.0

##### Minor Changes

- c1ce316: BREAKING `/alpha`: Converted `scaffolder.task.read` and `scaffolder.task.cancel` into Resource Permissions.

  BREAKING `/alpha`: Added a new scaffolder rule `isTaskOwner` for `scaffolder.task.read` and `scaffolder.task.cancel` to allow for conditional permission policies such as restricting access to tasks and task events based on task creators.

  BREAKING `/alpha`: Retrying a task now requires both `scaffolder.task.read` and `scaffolder.task.create` permissions, replacing the previous requirement of `scaffolder.task.read` and `scaffolder.task.cancel`.

### `@backstage/plugin-scaffolder-node` (0.9.0 → 0.10.0)

#### 0.10.0

##### Minor Changes

- c1ce316: BREAKING `/alpha`: Converted `scaffolder.task.read` and `scaffolder.task.cancel` into Resource Permissions.

  BREAKING `/alpha`: Added a new scaffolder rule `isTaskOwner` for `scaffolder.task.read` and `scaffolder.task.cancel` to allow for conditional permission policies such as restricting access to tasks and task events based on task creators.

  BREAKING `/alpha`: Retrying a task now requires both `scaffolder.task.read` and `scaffolder.task.create` permissions, replacing the previous requirement of `scaffolder.task.read` and `scaffolder.task.cancel`.

##### Patch Changes

- dbde180: An internal refactor which adds additional types to experimental checkpoints

### `@backstage/plugin-scaffolder-react` (1.17.0 → 1.18.0)

#### 1.18.0

##### Minor Changes

- c1ce316: BREAKING `/alpha`: Converted `scaffolder.task.read` and `scaffolder.task.cancel` into Resource Permissions.

  BREAKING `/alpha`: Added a new scaffolder rule `isTaskOwner` for `scaffolder.task.read` and `scaffolder.task.cancel` to allow for conditional permission policies such as restricting access to tasks and task events based on task creators.

  BREAKING `/alpha`: Retrying a task now requires both `scaffolder.task.read` and `scaffolder.task.create` permissions, replacing the previous requirement of `scaffolder.task.read` and `scaffolder.task.cancel`.

##### Patch Changes

- 94c11a5: Scroll to the top of the page when navigating between steps in template forms.

## 0.x minor version bumps

### `@backstage/repo-tools` (0.14.0 → 0.15.0)

#### 0.15.0

##### Minor Changes

- 1e7082e: Clear output directory before running `package-docs` and skip all internal packages.

## 0.0.x patch version bumps

### `@backstage/plugin-signals` (0.0.20 → 0.0.21)

#### 0.0.21

##### Patch Changes

- d52d67f: Added a New Frontend System App Root Element for the `<SignalsDisplay />` component

## Other minor version bumps

### `@backstage/backend-test-utils` (1.6.0 → 1.7.0)

#### 1.7.0

##### Minor Changes

- ead925a: Add a standard `toString` on credentials objects

### `@backstage/core-app-api` (1.17.1 → 1.18.0)

#### 1.18.0

##### Minor Changes

- 5ddc0fe: if session exists and refresh fails, then create a new session if not instant popup

## Other patch version bumps

### `@backstage/backend-defaults` (0.11.0 → 0.11.1)

#### 0.11.1

##### Patch Changes

- ead925a: Add a standard `toString` on credentials objects
- e0189b8: UrlReader: Fix handling of access tokens for GitLab readURL requests
- d1e4a6d: Fixed bug where the GitLab user token and GitLab integration token were being merged together

### `@backstage/backend-dynamic-feature-service` (0.7.1 → 0.7.2)

#### 0.7.2

##### Patch Changes

- 3507fcd: Just some more circular dep cleanup
- 3d61c36: Fix wrong imports which lead to module initialization failures when enabling dynamic plugins.

### `@backstage/catalog-client` (1.10.1 → 1.10.2)

#### 1.10.2

##### Patch Changes

- 6fb4143: allow arrays in the InMemoryCatalogClient to filter entities

### `@backstage/catalog-model` (1.7.4 → 1.7.5)

#### 1.7.5

##### Patch Changes

- 3507fcd: Just some more circular dep cleanup

### `@backstage/cli` (0.33.0 → 0.33.1)

#### 0.33.1

##### Patch Changes

- 50f0ce6: Fixes a module not found error when running `backstage-cli info`.

### `@backstage/config` (1.3.2 → 1.3.3)

#### 1.3.3

##### Patch Changes

- ff23618: Loosen the requirements for a key to be considered valid config.
- 3507fcd: Just some more circular dep cleanup

### `@backstage/config-loader` (1.10.1 → 1.10.2)

#### 1.10.2

##### Patch Changes

- ff23618: Loosen the requirements for a key to be considered valid config.

### `@backstage/core-components` (0.17.3 → 0.17.4)

#### 0.17.4

##### Patch Changes

- f6ffea6: Add optional message field for auth providers. This is intended to be a user friendly message that displays in the OAuth request dialog. A default message will be displayed if one is not provided.
- aa3b054: Added `signIn` and `signOut` analytic events to the `@backstage/core-components` of sign in and sign out.

### `@backstage/core-plugin-api` (1.10.8 → 1.10.9)

#### 1.10.9

##### Patch Changes

- f6ffea6: Add optional message field for auth providers. This is intended to be a user friendly message that displays in the OAuth request dialog. A default message will be displayed if one is not provided.

### `@backstage/frontend-app-api` (0.11.3 → 0.11.4)

#### 0.11.4

##### Patch Changes

- 3507fcd: Just some more circular dep cleanup

### `@backstage/integration` (1.17.0 → 1.17.1)

#### 1.17.1

##### Patch Changes

- e0189b8: UrlReader: Fix handling of access tokens for GitLab readURL requests
- d1e4a6d: Fixed bug where the GitLab user token and GitLab integration token were being merged together

### `@backstage/integration-react` (1.2.8 → 1.2.9)

#### 1.2.9

##### Patch Changes

- 998fd15: Separated gitlab `write_repository` and `api` scope to pass checks in `RefreshingAuthSessionManager`

### `@backstage/plugin-app` (0.1.10 → 0.1.11)

#### 0.1.11

##### Patch Changes

- 09f5e36: Remove trailing slashes in the `AppRoutes` extension to ensure any nested routing behaves correctly.

### `@backstage/plugin-auth-backend` (0.25.1 → 0.25.2)

#### 0.25.2

##### Patch Changes

- e88cb70: Small internal refactor to move out the `userInfo` database from the `tokenIssuer`. Also removes `exp` from being stored in `UserInfo` and it's now replaced with `created_at` and `updated_at` in the database instead.
- 207778c: Internal refactor of OIDC endpoints and `UserInfoDatabase`

### `@backstage/plugin-catalog` (1.31.0 → 1.31.1)

#### 1.31.1

##### Patch Changes

- 6991dab: Turn on `pagination` by default in new frontend system, and also make configurable
- 3ab9b96: Updated card extensions for the new frontend system to use the new entity predicates, and to not show the about card on User and Group pages.

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.7.1 → 0.7.2)

#### 0.7.2

##### Patch Changes

- 3507fcd: Just some more circular dep cleanup
- e2dd095: Fixed bug in `IncrementalIngestionEngine` by adding `burstLength` check when a burst completes

### `@backstage/plugin-catalog-backend-module-ldap` (0.11.6 → 0.11.7)

#### 0.11.7

##### Patch Changes

- 3507fcd: Just some more circular dep cleanup

### `@backstage/plugin-catalog-backend-module-msgraph` (0.7.1 → 0.7.2)

#### 0.7.2

##### Patch Changes

- 3507fcd: Just some more circular dep cleanup

### `@backstage/plugin-catalog-backend-module-puppetdb` (0.2.11 → 0.2.12)

#### 0.2.12

##### Patch Changes

- 3507fcd: Just some more circular dep cleanup

### `@backstage/plugin-catalog-graph` (0.4.20 → 0.4.21)

#### 0.4.21

##### Patch Changes

- fe1a2f4: Catalog graph plugin support i18n

### `@backstage/plugin-catalog-import` (0.13.2 → 0.13.3)

#### 0.13.3

##### Patch Changes

- 406b8b8: Fixed bug with error message since ResponseError is now thrown from CatalogClient

### `@backstage/plugin-catalog-react` (1.19.0 → 1.19.1)

#### 1.19.1

##### Patch Changes

- a07feb7: Fixed a but in the new alpha entity predicates where the `$in` operator mistakenly case sensitive.
- 3507fcd: Just some more circular dep cleanup

### `@backstage/plugin-home` (0.8.9 → 0.8.10)

#### 0.8.10

##### Patch Changes

- d52d67f: Added a New Frontend System App Root Element for the `<VisitListener />` component

### `@backstage/plugin-kubernetes-node` (0.3.1 → 0.3.2)

#### 0.3.2

##### Patch Changes

- 3507fcd: Just some more circular dep cleanup

### `@backstage/plugin-mcp-actions-backend` (0.1.0 → 0.1.1)

#### 0.1.1

##### Patch Changes

- 6bc0799: Fixed the example in the README for generating a static token by adding a subject field

### `@backstage/plugin-notifications-backend` (0.5.7 → 0.5.8)

#### 0.5.8

##### Patch Changes

- 4401dfb: Allow defining default notification settings via configuration
- 9a5a73f: Fix `addTopic` migration when `user_settings` present

### `@backstage/plugin-notifications-backend-module-email` (0.3.10 → 0.3.11)

#### 0.3.11

##### Patch Changes

- f92c9fc: Add optional config for `ses` mail options with `sourceArn`, `fromArn`, `configurationSetName`

### `@backstage/plugin-org` (0.6.40 → 0.6.41)

#### 0.6.41

##### Patch Changes

- 3ab9b96: Updated card extensions for the new frontend system to use the new entity predicates, and switch the card type to `info` for the user and group profile cards.

### `@backstage/plugin-permission-common` (0.9.0 → 0.9.1)

#### 0.9.1

##### Patch Changes

- 3507fcd: Just some more circular dep cleanup

### `@backstage/plugin-permission-node` (0.10.1 → 0.10.2)

#### 0.10.2

##### Patch Changes

- 3507fcd: Just some more circular dep cleanup

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.10 → 0.3.11)

#### 0.3.11

##### Patch Changes

- 642282d: Added support for new link format for on-prem Confluence

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.12 → 0.3.13)

#### 0.3.13

##### Patch Changes

- cf9ba6f: Fixing the typescript issue with using `z.unknown()`

### `@backstage/plugin-scaffolder-backend-module-github` (0.8.0 → 0.8.1)

#### 0.8.1

##### Patch Changes

- f36bcf9: Added support for file deletion to `publish:github:pull-request` action.

  Example usage:

  ```diff
    - action: publish:github:pull-request
      id: clean-up-pr
      input:
        description: This is the description
  +     filesToDelete:
  +       - outdated/changelog.md
  +       - sample-file.txt
        owner: owner
        repo: repo
        title: Title Goes Here

  ```

- 38db3eb: Fix typo in `InputError`

### `@backstage/plugin-scaffolder-backend-module-sentry` (0.2.10 → 0.2.11)

#### 0.2.11

##### Patch Changes

- 648b3d7: Add optional input to sentry:project:create to set the new Sentry project's platform

### `@backstage/plugin-scaffolder-node-test-utils` (0.3.0 → 0.3.1)

#### 0.3.1

##### Patch Changes

- dbde180: An internal refactor which adds additional types to experimental checkpoints

### `@backstage/plugin-search-backend` (2.0.3 → 2.0.4)

#### 2.0.4

##### Patch Changes

- 69fb975: Error messages should not contain backend SQL query strings in the API response, this change will ensure that messages are logged and empty response is returned to the user

### `@backstage/plugin-search-backend-module-elasticsearch` (1.7.3 → 1.7.4)

#### 1.7.4

##### Patch Changes

- 3507fcd: Just some more circular dep cleanup

### `@backstage/plugin-techdocs` (1.13.1 → 1.13.2)

#### 1.13.2

##### Patch Changes

- 1debf7f: Fixed an issue causing TechDocs to not properly handle initial redirect.

### `@backstage/plugin-techdocs-node` (1.13.4 → 1.13.5)

#### 1.13.5

##### Patch Changes

- 029526c: Updated the error message thrown by parseReferenceAnnotation to reflect the annotation value passed as an argument rather than in correctly assuming location.

### `@backstage/plugin-user-settings` (0.8.23 → 0.8.24)

#### 0.8.24

##### Patch Changes

- aa3b054: Added `signIn` and `signOut` analytic events to the `@backstage/core-components` of sign in and sign out.

### `@backstage/theme` (0.6.6 → 0.6.7)

#### 0.6.7

##### Patch Changes

- 373486e: Add a different background colour to focused `MenuItem`s to fix a bug in MUI 4 (which is fixed in MUI 5)
- b68d269: Update uncomfortably bright color in recently visited and top visited home page cards

## Excluded dependency updates for packages

- `@backstage/app-defaults`
- `@backstage/backend-app-api`
- `@backstage/backend-openapi-utils`
- `@backstage/backend-plugin-api`
- `@backstage/core-compat-api`
- `@backstage/dev-utils`
- `@backstage/frontend-defaults`
- `@backstage/frontend-dynamic-feature-loader`
- `@backstage/frontend-plugin-api`
- `@backstage/frontend-test-utils`
- `@backstage/integration-aws-node`
- `@backstage/plugin-api-docs`
- `@backstage/plugin-app-backend`
- `@backstage/plugin-app-node`
- `@backstage/plugin-app-visualizer`
- `@backstage/plugin-auth-backend-module-atlassian-provider`
- `@backstage/plugin-auth-backend-module-auth0-provider`
- `@backstage/plugin-auth-backend-module-aws-alb-provider`
- `@backstage/plugin-auth-backend-module-azure-easyauth-provider`
- `@backstage/plugin-auth-backend-module-bitbucket-provider`
- `@backstage/plugin-auth-backend-module-bitbucket-server-provider`
- `@backstage/plugin-auth-backend-module-cloudflare-access-provider`
- `@backstage/plugin-auth-backend-module-gcp-iap-provider`
- `@backstage/plugin-auth-backend-module-github-provider`
- `@backstage/plugin-auth-backend-module-gitlab-provider`
- `@backstage/plugin-auth-backend-module-google-provider`
- `@backstage/plugin-auth-backend-module-guest-provider`
- `@backstage/plugin-auth-backend-module-microsoft-provider`
- `@backstage/plugin-auth-backend-module-oauth2-provider`
- `@backstage/plugin-auth-backend-module-oauth2-proxy-provider`
- `@backstage/plugin-auth-backend-module-oidc-provider`
- `@backstage/plugin-auth-backend-module-okta-provider`
- `@backstage/plugin-auth-backend-module-onelogin-provider`
- `@backstage/plugin-auth-backend-module-pinniped-provider`
- `@backstage/plugin-auth-backend-module-vmware-cloud-provider`
- `@backstage/plugin-auth-node`
- `@backstage/plugin-auth-react`
- `@backstage/plugin-bitbucket-cloud-common`
- `@backstage/plugin-catalog-backend-module-aws`
- `@backstage/plugin-catalog-backend-module-azure`
- `@backstage/plugin-catalog-backend-module-backstage-openapi`
- `@backstage/plugin-catalog-backend-module-bitbucket-cloud`
- `@backstage/plugin-catalog-backend-module-bitbucket-server`
- `@backstage/plugin-catalog-backend-module-gcp`
- `@backstage/plugin-catalog-backend-module-gerrit`
- `@backstage/plugin-catalog-backend-module-gitea`
- `@backstage/plugin-catalog-backend-module-github`
- `@backstage/plugin-catalog-backend-module-github-org`
- `@backstage/plugin-catalog-backend-module-gitlab`
- `@backstage/plugin-catalog-backend-module-gitlab-org`
- `@backstage/plugin-catalog-backend-module-logs`
- `@backstage/plugin-catalog-backend-module-openapi`
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model`
- `@backstage/plugin-catalog-backend-module-unprocessed`
- `@backstage/plugin-catalog-common`
- `@backstage/plugin-catalog-node`
- `@backstage/plugin-catalog-unprocessed-entities`
- `@backstage/plugin-catalog-unprocessed-entities-common`
- `@backstage/plugin-config-schema`
- `@backstage/plugin-devtools`
- `@backstage/plugin-devtools-backend`
- `@backstage/plugin-devtools-common`
- `@backstage/plugin-events-backend`
- `@backstage/plugin-events-backend-module-aws-sqs`
- `@backstage/plugin-events-backend-module-azure`
- `@backstage/plugin-events-backend-module-bitbucket-cloud`
- `@backstage/plugin-events-backend-module-bitbucket-server`
- `@backstage/plugin-events-backend-module-gerrit`
- `@backstage/plugin-events-backend-module-github`
- `@backstage/plugin-events-backend-module-gitlab`
- `@backstage/plugin-events-backend-module-google-pubsub`
- `@backstage/plugin-events-backend-module-kafka`
- `@backstage/plugin-events-backend-test-utils`
- `@backstage/plugin-events-node`
- `@backstage/plugin-gateway-backend`
- `@backstage/plugin-home-react`
- `@backstage/plugin-kubernetes`
- `@backstage/plugin-kubernetes-backend`
- `@backstage/plugin-kubernetes-cluster`
- `@backstage/plugin-kubernetes-common`
- `@backstage/plugin-kubernetes-react`
- `@backstage/plugin-notifications`
- `@backstage/plugin-notifications-backend-module-slack`
- `@backstage/plugin-notifications-common`
- `@backstage/plugin-notifications-node`
- `@backstage/plugin-org-react`
- `@backstage/plugin-permission-backend`
- `@backstage/plugin-permission-backend-module-allow-all-policy`
- `@backstage/plugin-permission-react`
- `@backstage/plugin-proxy-backend`
- `@backstage/plugin-proxy-node`
- `@backstage/plugin-scaffolder-backend-module-azure`
- `@backstage/plugin-scaffolder-backend-module-bitbucket`
- `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud`
- `@backstage/plugin-scaffolder-backend-module-bitbucket-server`
- `@backstage/plugin-scaffolder-backend-module-gcp`
- `@backstage/plugin-scaffolder-backend-module-gerrit`
- `@backstage/plugin-scaffolder-backend-module-gitea`
- `@backstage/plugin-scaffolder-backend-module-gitlab`
- `@backstage/plugin-scaffolder-backend-module-notifications`
- `@backstage/plugin-scaffolder-backend-module-rails`
- `@backstage/plugin-scaffolder-backend-module-yeoman`
- `@backstage/plugin-search`
- `@backstage/plugin-search-backend-module-catalog`
- `@backstage/plugin-search-backend-module-explore`
- `@backstage/plugin-search-backend-module-pg`
- `@backstage/plugin-search-backend-module-stack-overflow-collator`
- `@backstage/plugin-search-backend-module-techdocs`
- `@backstage/plugin-search-backend-node`
- `@backstage/plugin-search-common`
- `@backstage/plugin-search-react`
- `@backstage/plugin-signals-backend`
- `@backstage/plugin-signals-node`
- `@backstage/plugin-signals-react`
- `@backstage/plugin-techdocs-addons-test-utils`
- `@backstage/plugin-techdocs-backend`
- `@backstage/plugin-techdocs-module-addons-contrib`
- `@backstage/plugin-techdocs-react`
- `@backstage/plugin-user-settings-backend`
- `@backstage/test-utils`
- `@techdocs/cli`
