# Backstage Release 1.41.0 changelog

Changes between 1.40.2 and 1.41.0 — 174 changed and 1 added packages.

## Summary

- [Newly added packages](#newly-added-packages): 1 package
- [Breaking changes](#breaking-changes): 8 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 1 package
- [0.0.x patch version bumps](#00x-patch-version-bumps): 1 package
- [Other minor version bumps](#other-minor-version-bumps): 2 packages
- [Other patch version bumps](#other-patch-version-bumps): 41 packages
- [Excluded dependency updates](#excluded-dependency-updates): 121 packages

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
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/ui` (new, [0.6.0](../../changelogs/@backstage/ui.md#060))

#### 0.6.0

##### Minor Changes

- [`e92bb9b`](https://github.com/backstage/backstage/commit/e92bb9b): **BREAKING**: Canon has been renamed to Backstage UI. This means that `@backstage/canon` has been deprecated and replaced by `@backstage/ui`.

#### 0.5.0

##### Minor Changes

- [`621fac9`](https://github.com/backstage/backstage/commit/621fac9): **BREAKING**: We are updating the default size of the Button component in Canon to be small instead of medium.
- [`a842554`](https://github.com/backstage/backstage/commit/a842554): **BREAKING**: We set the default size for IconButton in Canon to be small instead of medium.
- [`35fd51d`](https://github.com/backstage/backstage/commit/35fd51d): **BREAKING**: Move TextField component to use react Aria under the hood. Introducing a new FieldLabel component to help build custom fields.
- [`78204a2`](https://github.com/backstage/backstage/commit/78204a2): **BREAKING**: We are adding a new as prop on the Heading and Text component to make it easier to change the component tag. We are removing the render prop in favour of the as prop.
- [`c49e335`](https://github.com/backstage/backstage/commit/c49e335): **BREAKING**: TextField in Canon now has multiple label sizes as well as the capacity to hide label and description but still make them available for screen readers.
- [`24b45ef`](https://github.com/backstage/backstage/commit/24b45ef): **BREAKING**: Fixes spacing props on layout components and aligned on naming for the Grid component. You should now call the Grid root component using `<Grid.Root />` instead of just `<Grid />`.

##### Patch Changes

- [`44df879`](https://github.com/backstage/backstage/commit/44df879): Add min-width: 0; by default on every Flex components in Canon to help support truncated texts inside flex elements.
- [`ee6ffe6`](https://github.com/backstage/backstage/commit/ee6ffe6): Fix styling for the title4 prop on the Heading component in Canon.
- [`f2f814a`](https://github.com/backstage/backstage/commit/f2f814a): Added a render prop to the Button component in Canon to use it as a link.
- [`98f02a6`](https://github.com/backstage/backstage/commit/98f02a6): Add new Switch component in Canon.
- [`c94f8e0`](https://github.com/backstage/backstage/commit/c94f8e0): The filter input in menu comboboxes should now always use the full width of the menu it's in.
- [`269316d`](https://github.com/backstage/backstage/commit/269316d): Remove leftover console.log from Container component.

#### 0.4.0

##### Minor Changes

- [`ea36f74`](https://github.com/backstage/backstage/commit/ea36f74): **BREAKING**: Icons on Button and IconButton now need to be imported and placed like this: `<Button iconStart={<ChevronDownIcon />} />`
- [`ccb1fc6`](https://github.com/backstage/backstage/commit/ccb1fc6): **BREAKING**: We are modifying the way we treat custom render using 'useRender()' under the hood from BaseUI.
- [`04a65c6`](https://github.com/backstage/backstage/commit/04a65c6): **BREAKING**: The icon prop in TextField now accept a ReactNode instead of an icon name. We also updated the icon sizes for each input sizes.

##### Patch Changes

- [`c8f32db`](https://github.com/backstage/backstage/commit/c8f32db): Use correct colour token for TextField clear button icon, prevent layout shift whenever it is hidden or shown and properly size focus area around it. Also stop leading icon shrinking when used together with clear button.
- [`e996368`](https://github.com/backstage/backstage/commit/e996368): Fix Canon missing dependencies
- [`720033c`](https://github.com/backstage/backstage/commit/720033c): For improved a11y, clicking a Select component label now focuses the Select trigger element, and the TextField component's label is now styled to indicate it's interactive.
- [`6189bfd`](https://github.com/backstage/backstage/commit/6189bfd): Added new icon and onClear props to the TextField to make it easier to accessorize inputs.
- [`9510105`](https://github.com/backstage/backstage/commit/9510105): Add new Tabs component to Canon
- [`97b25a1`](https://github.com/backstage/backstage/commit/97b25a1): Pin version of @base-ui-components/react.
- [`206ffbe`](https://github.com/backstage/backstage/commit/206ffbe): Fixed an issue with Canon's DataTable.Pagination component showing the wrong number for the "to" count.
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos
- [`4551fb7`](https://github.com/backstage/backstage/commit/4551fb7): Update Menu component in Canon to make the UI more condensed. We are also adding a new Combobox option for nested navigation.
- [`185d3a8`](https://github.com/backstage/backstage/commit/185d3a8): Use the Field component from Base UI within the TextField.
- [`1ea1db0`](https://github.com/backstage/backstage/commit/1ea1db0): Add new truncate prop to Text and Heading components in Canon.

#### 0.3.0

##### Minor Changes

- [`df4e292`](https://github.com/backstage/backstage/commit/df4e292): **BREAKING**: Improve class name structure using data attributes instead of class names.
- [`f038613`](https://github.com/backstage/backstage/commit/f038613): **BREAKING**: Updated TextField and Select component to work with React Hook Form.
- [`1b0cf40`](https://github.com/backstage/backstage/commit/1b0cf40): **BREAKING**: Add new Select component for Canon
- [`5074d61`](https://github.com/backstage/backstage/commit/5074d61): **BREAKING**: Added a new TextField component to replace the Field and Input component. After feedback, it became clear that we needed to build a more opinionated version to avoid any problem in the future.

##### Patch Changes

- [`6af7b16`](https://github.com/backstage/backstage/commit/6af7b16): Updated styles for the Menu component in Canon.
- [`bcbc593`](https://github.com/backstage/backstage/commit/bcbc593): Fix Checkbox styles on dark theme in Canon.
- [`e7efb7d`](https://github.com/backstage/backstage/commit/e7efb7d): Add new breakpoint helpers up(), down() and current breakpoint to help you use our breakpoints in your React components.
- [`f7cb538`](https://github.com/backstage/backstage/commit/f7cb538): Internal refactor and fixes to the prop extraction logic for layout components.
- [`35b36ec`](https://github.com/backstage/backstage/commit/35b36ec): Add new Collapsible component for Canon.
- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html

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

#### 0.2.0

##### Minor Changes

- [`5a5db29`](https://github.com/backstage/backstage/commit/5a5db29): **BREAKING**: Fix CSS imports and move CSS outputs out of the dist folder.
- [`4557beb`](https://github.com/backstage/backstage/commit/4557beb): **BREAKING**: Added a new Tooltip component to Canon.
- [`1e4dfdb`](https://github.com/backstage/backstage/commit/1e4dfdb): **BREAKING**: We added a new IconButton component with fixed sizes showcasing a single icon.
- [`e8d12f9`](https://github.com/backstage/backstage/commit/e8d12f9): **BREAKING**: Added about 40 new icons to Canon.
- [`8689010`](https://github.com/backstage/backstage/commit/8689010): **BREAKING**: We are renaming CanonProvider to IconProvider to improve clarity on how to override icons.
- [`bf319b7`](https://github.com/backstage/backstage/commit/bf319b7): **BREAKING**: Added a new Menu component to Canon.
- [`cb7e99d`](https://github.com/backstage/backstage/commit/cb7e99d): **BREAKING**: Updating styles for Text and Link components as well as global surface tokens.
- [`bd8520d`](https://github.com/backstage/backstage/commit/bd8520d): **BREAKING**: Added a new ScrollArea component for Canon.

##### Patch Changes

- [`56850ca`](https://github.com/backstage/backstage/commit/56850ca): Fix Button types that was preventing the use of native attributes like onClick.
- [`89e8686`](https://github.com/backstage/backstage/commit/89e8686): To avoid conflicts with Backstage, we removed global styles and set font-family and font-weight for each components.
- [`05e9d41`](https://github.com/backstage/backstage/commit/05e9d41): Introducing Canon to Backstage. Canon styling system is based on pure CSS. We are adding our styles.css at the top of your Backstage instance.

#### 0.1.0

##### Minor Changes

- [`72c9800`](https://github.com/backstage/backstage/commit/72c9800): **BREAKING**: Merged the Stack and Inline component into a single component called Flex.
- [`65f4acc`](https://github.com/backstage/backstage/commit/65f4acc): **BREAKING**: This is the first alpha release for Canon. As part of this release we are introducing 5 layout components and 7 components. All theming is done through CSS variables.
- [`1e4ccce`](https://github.com/backstage/backstage/commit/1e4ccce): **BREAKING**: Fixing css structure and making sure that props are applying the correct styles for all responsive values.
- [`8309bdb`](https://github.com/backstage/backstage/commit/8309bdb): **BREAKING**: Updated core CSS tokens and fixing the Button component accordingly.

##### Patch Changes

- [`989af25`](https://github.com/backstage/backstage/commit/989af25): Removed client directive as they are not needed in React 18.
- [`f44e5cf`](https://github.com/backstage/backstage/commit/f44e5cf): Fix spacing props not being applied for custom values.
- [`58ec9e7`](https://github.com/backstage/backstage/commit/58ec9e7): Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.

## Breaking changes

### `@backstage/canon` (0.5.0 → [0.6.0](../../changelogs/@backstage/canon.md#060))

#### 0.6.0

##### Minor Changes

- [`1d64db6`](https://github.com/backstage/backstage/commit/1d64db6): **Breaking changes** We are updating our Link component to use React Aria under the hood. To match their API we are updating the `to` prop to `href` to match both internal and external routing. We are also updating our variant naming to include all our new font sizes.
- [`83fd7f4`](https://github.com/backstage/backstage/commit/83fd7f4): **Breaking change** We are moving the Select component to use React Aria under the hood. We updated most props and events according to their underlying API.
- [`cae63df`](https://github.com/backstage/backstage/commit/cae63df): **Breaking changes** The Tabs components has been updates to use React Aria under the hood and to work with react-router-dom directly.
- [`4c6d891`](https://github.com/backstage/backstage/commit/4c6d891): **BREAKING CHANGES**

  We’re updating our Button component to provide better support for button links.

  - We’re introducing a new `ButtonLink` component, which replaces the previous render prop pattern.
  - To maintain naming consistency across components, `IconButton` is being renamed to `ButtonIcon`.
  - Additionally, the render prop will be removed from all button-related components.

  These changes aim to simplify usage and improve clarity in our component API.

- [`2e30459`](https://github.com/backstage/backstage/commit/2e30459): We are moving our Tooltip component to use React Aria under the hood. In doing so, the structure of the component and its prop are changing to follow the new underlying structure.
- [`8fd6fcb`](https://github.com/backstage/backstage/commit/8fd6fcb): We are renaming @backstage/canon into @backstage/ui. As part of this move we are renaming all class names and CSS variables to follow the new name. "--canon" prefix is becoming "--bui" and all component class names starting with ".canon" will now start with ".bui"

##### Patch Changes

- [`140f652`](https://github.com/backstage/backstage/commit/140f652): We are consolidating all css files into a single styles.css in Canon.
- [`76255b8`](https://github.com/backstage/backstage/commit/76255b8): Add new Card component to Canon.
- [`8154fb9`](https://github.com/backstage/backstage/commit/8154fb9): Add new SearchField component in Canon
- [`b0a6c8e`](https://github.com/backstage/backstage/commit/b0a6c8e): Add new Header component to Canon.
- [`6910892`](https://github.com/backstage/backstage/commit/6910892): Add new `RadioGroup` + `Radio` component to Canon
- [`9c17305`](https://github.com/backstage/backstage/commit/9c17305): Fix scrolling width and height on ScrollArea component in Canon.
- [`390ea20`](https://github.com/backstage/backstage/commit/390ea20): Export Card and Skeleton components.
- [`be76576`](https://github.com/backstage/backstage/commit/be76576): Improve Button, ButtonIcon and ButtonLink styling in Canon.
- [`17beb9b`](https://github.com/backstage/backstage/commit/17beb9b): Update return types for Heading & Text components for React 19.
- [`a8a8514`](https://github.com/backstage/backstage/commit/a8a8514): We are transforming how we structure our class names and data attributes definitions for all components. They are now all set in the same place.
- [`667b951`](https://github.com/backstage/backstage/commit/667b951): Added placeholder prop to TextField component.
- [`eac4a4c`](https://github.com/backstage/backstage/commit/eac4a4c): Add new tertiary variant to Button, ButtonIcon and ButtonLink in Canon.
- [`e71333a`](https://github.com/backstage/backstage/commit/e71333a): adding export for ButtonLink so it's importable
- [`8f2e82d`](https://github.com/backstage/backstage/commit/8f2e82d): Add new Skeleton component in Canon

### `@backstage/create-app` (0.7.0 → [0.7.1](../../changelogs/@backstage/create-app.md#071))

#### 0.7.1

##### Patch Changes

- [`952cefe`](https://github.com/backstage/backstage/commit/952cefe): Bumped create-app version.
- [`2339363`](https://github.com/backstage/backstage/commit/2339363): **BREAKING:** The experimental `catalog.useUrlReadersSearch` configuration flag (introduced in v1.36) has been removed.

  The `UrlReaderProcessor` now always uses the `search` method of `UrlReaders`. Built-in `UrlReaderService` implementations have been updated accordingly.
  If you use custom `UrlReaderService` implementations, you need to adapt their `search` method to correctly handle both specific URLs and potential
  search patterns (see changes on built-in readers [in the original PR](https://github.com/backstage/backstage/pull/28379/files#diff-68b0452f173ee54bdd40f7b5e047a9cb8bb59200425622c212c217b76dac1d1b)).

  Previous behavior was to call the `search` method only if the parsed Git URL's filename contained a wildcard and use `readUrl` otherwise. Each `UrlReaderService` must implement this logic in the `search` method instead.

  This allows each `UrlReaderService` implementation to check whether it's a search URL (that contains a wildcard pattern) or not using logic that is specific to each provider.

- [`c4a0830`](https://github.com/backstage/backstage/commit/c4a0830): Removed deprecated 'allowedHosts' field from GitHub Publish action input in default template files to fix validation errors with strict Zod validation.

### `@backstage/plugin-catalog-backend` (2.1.0 → [3.0.0](../../changelogs/@backstage/plugin-catalog-backend.md#300))

#### 3.0.0

##### Major Changes

- [`5127ebe`](https://github.com/backstage/backstage/commit/5127ebe): **BREAKING**: The default `catalog.stitchingStrategy` has been switched to `{ mode: 'deferred' }`.
- [`d675d96`](https://github.com/backstage/backstage/commit/d675d96): **BREAKING**: The relations compatibility mode is no longer enabled by default, and the `disableRelationsCompatiblity` flag has been removed. To re-enable relations compatibility, the new `enableRelationsCompatibility` flag can be used instead.
- [`2339363`](https://github.com/backstage/backstage/commit/2339363): **BREAKING:** The experimental `catalog.useUrlReadersSearch` configuration flag (introduced in v1.36) has been removed.

  The `UrlReaderProcessor` now always uses the `search` method of `UrlReaders`. Built-in `UrlReaderService` implementations have been updated accordingly.
  If you use custom `UrlReaderService` implementations, you need to adapt their `search` method to correctly handle both specific URLs and potential
  search patterns (see changes on built-in readers [in the original PR](https://github.com/backstage/backstage/pull/28379/files#diff-68b0452f173ee54bdd40f7b5e047a9cb8bb59200425622c212c217b76dac1d1b)).

  Previous behavior was to call the `search` method only if the parsed Git URL's filename contained a wildcard and use `readUrl` otherwise. Each `UrlReaderService` must implement this logic in the `search` method instead.

  This allows each `UrlReaderService` implementation to check whether it's a search URL (that contains a wildcard pattern) or not using logic that is specific to each provider.

- [`687bfc8`](https://github.com/backstage/backstage/commit/687bfc8): **BREAKING**: The default `catalog.orphanStrategy` has been switched to `'delete'`.
- [`5de7a9d`](https://github.com/backstage/backstage/commit/5de7a9d): **BREAKING**: The default `catalog.orphanProviderStrategy` has been switched to `'delete'`.

### `@backstage/plugin-scaffolder` (1.32.0 → [1.33.0](../../changelogs/@backstage/plugin-scaffolder.md#1330))

#### 1.33.0

##### Minor Changes

- [`c1ce316`](https://github.com/backstage/backstage/commit/c1ce316): BREAKING `/alpha`: Converted `scaffolder.task.read` and `scaffolder.task.cancel` into Resource Permissions.

  BREAKING `/alpha`: Added a new scaffolder rule `isTaskOwner` for `scaffolder.task.read` and `scaffolder.task.cancel` to allow for conditional permission policies such as restricting access to tasks and task events based on task creators.

  BREAKING `/alpha`: Retrying a task now requires both `scaffolder.task.read` and `scaffolder.task.create` permissions, replacing the previous requirement of `scaffolder.task.read` and `scaffolder.task.cancel`.

##### Patch Changes

- [`289e4a1`](https://github.com/backstage/backstage/commit/289e4a1): Filter MultiEntityPicker options based on rendered option value

### `@backstage/plugin-scaffolder-backend` (2.0.0 → [2.1.0](../../changelogs/@backstage/plugin-scaffolder-backend.md#210))

#### 2.1.0

##### Minor Changes

- [`c1ce316`](https://github.com/backstage/backstage/commit/c1ce316): BREAKING `/alpha`: Converted `scaffolder.task.read` and `scaffolder.task.cancel` into Resource Permissions.

  BREAKING `/alpha`: Added a new scaffolder rule `isTaskOwner` for `scaffolder.task.read` and `scaffolder.task.cancel` to allow for conditional permission policies such as restricting access to tasks and task events based on task creators.

  BREAKING `/alpha`: Retrying a task now requires both `scaffolder.task.read` and `scaffolder.task.create` permissions, replacing the previous requirement of `scaffolder.task.read` and `scaffolder.task.cancel`.

##### Patch Changes

- [`424610a`](https://github.com/backstage/backstage/commit/424610a): Scaffolder audit Log now includes taskId and createdBy
- [`dbde180`](https://github.com/backstage/backstage/commit/dbde180): An internal refactor which adds additional types to experimental checkpoints
- [`fc70b43`](https://github.com/backstage/backstage/commit/fc70b43): Replaced deprecated uses of `@backstage/backend-common` with the equivalents in `@backstage/backend-defaults` and `@backstage/backend-plugin-api`.

### `@backstage/plugin-scaffolder-common` (1.5.11 → [1.6.0](../../changelogs/@backstage/plugin-scaffolder-common.md#160))

#### 1.6.0

##### Minor Changes

- [`c1ce316`](https://github.com/backstage/backstage/commit/c1ce316): BREAKING `/alpha`: Converted `scaffolder.task.read` and `scaffolder.task.cancel` into Resource Permissions.

  BREAKING `/alpha`: Added a new scaffolder rule `isTaskOwner` for `scaffolder.task.read` and `scaffolder.task.cancel` to allow for conditional permission policies such as restricting access to tasks and task events based on task creators.

  BREAKING `/alpha`: Retrying a task now requires both `scaffolder.task.read` and `scaffolder.task.create` permissions, replacing the previous requirement of `scaffolder.task.read` and `scaffolder.task.cancel`.

### `@backstage/plugin-scaffolder-node` (0.9.0 → [0.10.0](../../changelogs/@backstage/plugin-scaffolder-node.md#0100))

#### 0.10.0

##### Minor Changes

- [`c1ce316`](https://github.com/backstage/backstage/commit/c1ce316): BREAKING `/alpha`: Converted `scaffolder.task.read` and `scaffolder.task.cancel` into Resource Permissions.

  BREAKING `/alpha`: Added a new scaffolder rule `isTaskOwner` for `scaffolder.task.read` and `scaffolder.task.cancel` to allow for conditional permission policies such as restricting access to tasks and task events based on task creators.

  BREAKING `/alpha`: Retrying a task now requires both `scaffolder.task.read` and `scaffolder.task.create` permissions, replacing the previous requirement of `scaffolder.task.read` and `scaffolder.task.cancel`.

##### Patch Changes

- [`dbde180`](https://github.com/backstage/backstage/commit/dbde180): An internal refactor which adds additional types to experimental checkpoints

### `@backstage/plugin-scaffolder-react` (1.17.0 → [1.18.0](../../changelogs/@backstage/plugin-scaffolder-react.md#1180))

#### 1.18.0

##### Minor Changes

- [`c1ce316`](https://github.com/backstage/backstage/commit/c1ce316): BREAKING `/alpha`: Converted `scaffolder.task.read` and `scaffolder.task.cancel` into Resource Permissions.

  BREAKING `/alpha`: Added a new scaffolder rule `isTaskOwner` for `scaffolder.task.read` and `scaffolder.task.cancel` to allow for conditional permission policies such as restricting access to tasks and task events based on task creators.

  BREAKING `/alpha`: Retrying a task now requires both `scaffolder.task.read` and `scaffolder.task.create` permissions, replacing the previous requirement of `scaffolder.task.read` and `scaffolder.task.cancel`.

##### Patch Changes

- [`94c11a5`](https://github.com/backstage/backstage/commit/94c11a5): Scroll to the top of the page when navigating between steps in template forms.

## 0.x minor version bumps

### `@backstage/repo-tools` (0.14.0 → [0.15.0](../../changelogs/@backstage/repo-tools.md#0150))

#### 0.15.0

##### Minor Changes

- [`1e7082e`](https://github.com/backstage/backstage/commit/1e7082e): Clear output directory before running `package-docs` and skip all internal packages.

## 0.0.x patch version bumps

### `@backstage/plugin-signals` (0.0.20 → [0.0.21](../../changelogs/@backstage/plugin-signals.md#0021))

#### 0.0.21

##### Patch Changes

- [`d52d67f`](https://github.com/backstage/backstage/commit/d52d67f): Added a New Frontend System App Root Element for the `<SignalsDisplay />` component

## Other minor version bumps

### `@backstage/backend-test-utils` (1.6.0 → [1.7.0](../../changelogs/@backstage/backend-test-utils.md#170))

#### 1.7.0

##### Minor Changes

- [`ead925a`](https://github.com/backstage/backstage/commit/ead925a): Add a standard `toString` on credentials objects

### `@backstage/core-app-api` (1.17.1 → [1.18.0](../../changelogs/@backstage/core-app-api.md#1180))

#### 1.18.0

##### Minor Changes

- [`5ddc0fe`](https://github.com/backstage/backstage/commit/5ddc0fe): if session exists and refresh fails, then create a new session if not instant popup

## Other patch version bumps

### `@backstage/backend-defaults` (0.11.0 → [0.11.1](../../changelogs/@backstage/backend-defaults.md#0111))

#### 0.11.1

##### Patch Changes

- [`ead925a`](https://github.com/backstage/backstage/commit/ead925a): Add a standard `toString` on credentials objects
- [`e0189b8`](https://github.com/backstage/backstage/commit/e0189b8): UrlReader: Fix handling of access tokens for GitLab readURL requests
- [`d1e4a6d`](https://github.com/backstage/backstage/commit/d1e4a6d): Fixed bug where the GitLab user token and GitLab integration token were being merged together

### `@backstage/backend-dynamic-feature-service` (0.7.1 → [0.7.2](../../changelogs/@backstage/backend-dynamic-feature-service.md#072))

#### 0.7.2

##### Patch Changes

- [`3507fcd`](https://github.com/backstage/backstage/commit/3507fcd): Just some more circular dep cleanup
- [`3d61c36`](https://github.com/backstage/backstage/commit/3d61c36): Fix wrong imports which lead to module initialization failures when enabling dynamic plugins.

### `@backstage/catalog-client` (1.10.1 → [1.10.2](../../changelogs/@backstage/catalog-client.md#1102))

#### 1.10.2

##### Patch Changes

- [`6fb4143`](https://github.com/backstage/backstage/commit/6fb4143): allow arrays in the InMemoryCatalogClient to filter entities

### `@backstage/catalog-model` (1.7.4 → [1.7.5](../../changelogs/@backstage/catalog-model.md#175))

#### 1.7.5

##### Patch Changes

- [`3507fcd`](https://github.com/backstage/backstage/commit/3507fcd): Just some more circular dep cleanup

### `@backstage/cli` (0.33.0 → [0.33.1](../../changelogs/@backstage/cli.md#0331))

#### 0.33.1

##### Patch Changes

- [`50f0ce6`](https://github.com/backstage/backstage/commit/50f0ce6): Fixes a module not found error when running `backstage-cli info`.

### `@backstage/config` (1.3.2 → [1.3.3](../../changelogs/@backstage/config.md#133))

#### 1.3.3

##### Patch Changes

- [`ff23618`](https://github.com/backstage/backstage/commit/ff23618): Loosen the requirements for a key to be considered valid config.
- [`3507fcd`](https://github.com/backstage/backstage/commit/3507fcd): Just some more circular dep cleanup

### `@backstage/config-loader` (1.10.1 → [1.10.2](../../changelogs/@backstage/config-loader.md#1102))

#### 1.10.2

##### Patch Changes

- [`ff23618`](https://github.com/backstage/backstage/commit/ff23618): Loosen the requirements for a key to be considered valid config.

### `@backstage/core-components` (0.17.3 → [0.17.4](../../changelogs/@backstage/core-components.md#0174))

#### 0.17.4

##### Patch Changes

- [`f6ffea6`](https://github.com/backstage/backstage/commit/f6ffea6): Add optional message field for auth providers. This is intended to be a user friendly message that displays in the OAuth request dialog. A default message will be displayed if one is not provided.
- [`aa3b054`](https://github.com/backstage/backstage/commit/aa3b054): Added `signIn` and `signOut` analytic events to the `@backstage/core-components` of sign in and sign out.

### `@backstage/core-plugin-api` (1.10.8 → [1.10.9](../../changelogs/@backstage/core-plugin-api.md#1109))

#### 1.10.9

##### Patch Changes

- [`f6ffea6`](https://github.com/backstage/backstage/commit/f6ffea6): Add optional message field for auth providers. This is intended to be a user friendly message that displays in the OAuth request dialog. A default message will be displayed if one is not provided.

### `@backstage/frontend-app-api` (0.11.3 → [0.11.4](../../changelogs/@backstage/frontend-app-api.md#0114))

#### 0.11.4

##### Patch Changes

- [`3507fcd`](https://github.com/backstage/backstage/commit/3507fcd): Just some more circular dep cleanup

### `@backstage/integration` (1.17.0 → [1.17.1](../../changelogs/@backstage/integration.md#1171))

#### 1.17.1

##### Patch Changes

- [`e0189b8`](https://github.com/backstage/backstage/commit/e0189b8): UrlReader: Fix handling of access tokens for GitLab readURL requests
- [`d1e4a6d`](https://github.com/backstage/backstage/commit/d1e4a6d): Fixed bug where the GitLab user token and GitLab integration token were being merged together

### `@backstage/integration-react` (1.2.8 → [1.2.9](../../changelogs/@backstage/integration-react.md#129))

#### 1.2.9

##### Patch Changes

- [`998fd15`](https://github.com/backstage/backstage/commit/998fd15): Separated gitlab `write_repository` and `api` scope to pass checks in `RefreshingAuthSessionManager`

### `@backstage/plugin-app` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-app.md#0111))

#### 0.1.11

##### Patch Changes

- [`09f5e36`](https://github.com/backstage/backstage/commit/09f5e36): Remove trailing slashes in the `AppRoutes` extension to ensure any nested routing behaves correctly.

### `@backstage/plugin-auth-backend` (0.25.1 → [0.25.2](../../changelogs/@backstage/plugin-auth-backend.md#0252))

#### 0.25.2

##### Patch Changes

- [`e88cb70`](https://github.com/backstage/backstage/commit/e88cb70): Small internal refactor to move out the `userInfo` database from the `tokenIssuer`. Also removes `exp` from being stored in `UserInfo` and it's now replaced with `created_at` and `updated_at` in the database instead.
- [`207778c`](https://github.com/backstage/backstage/commit/207778c): Internal refactor of OIDC endpoints and `UserInfoDatabase`

### `@backstage/plugin-catalog` (1.31.0 → [1.31.1](../../changelogs/@backstage/plugin-catalog.md#1311))

#### 1.31.1

##### Patch Changes

- [`6991dab`](https://github.com/backstage/backstage/commit/6991dab): Turn on `pagination` by default in new frontend system, and also make configurable
- [`3ab9b96`](https://github.com/backstage/backstage/commit/3ab9b96): Updated card extensions for the new frontend system to use the new entity predicates, and to not show the about card on User and Group pages.

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.7.1 → [0.7.2](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#072))

#### 0.7.2

##### Patch Changes

- [`3507fcd`](https://github.com/backstage/backstage/commit/3507fcd): Just some more circular dep cleanup
- [`e2dd095`](https://github.com/backstage/backstage/commit/e2dd095): Fixed bug in `IncrementalIngestionEngine` by adding `burstLength` check when a burst completes

### `@backstage/plugin-catalog-backend-module-ldap` (0.11.6 → [0.11.7](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0117))

#### 0.11.7

##### Patch Changes

- [`3507fcd`](https://github.com/backstage/backstage/commit/3507fcd): Just some more circular dep cleanup

### `@backstage/plugin-catalog-backend-module-msgraph` (0.7.1 → [0.7.2](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#072))

#### 0.7.2

##### Patch Changes

- [`3507fcd`](https://github.com/backstage/backstage/commit/3507fcd): Just some more circular dep cleanup

### `@backstage/plugin-catalog-backend-module-puppetdb` (0.2.11 → [0.2.12](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0212))

#### 0.2.12

##### Patch Changes

- [`3507fcd`](https://github.com/backstage/backstage/commit/3507fcd): Just some more circular dep cleanup

### `@backstage/plugin-catalog-graph` (0.4.20 → [0.4.21](../../changelogs/@backstage/plugin-catalog-graph.md#0421))

#### 0.4.21

##### Patch Changes

- [`fe1a2f4`](https://github.com/backstage/backstage/commit/fe1a2f4): Catalog graph plugin support i18n

### `@backstage/plugin-catalog-import` (0.13.2 → [0.13.3](../../changelogs/@backstage/plugin-catalog-import.md#0133))

#### 0.13.3

##### Patch Changes

- [`406b8b8`](https://github.com/backstage/backstage/commit/406b8b8): Fixed bug with error message since ResponseError is now thrown from CatalogClient

### `@backstage/plugin-catalog-react` (1.19.0 → [1.19.1](../../changelogs/@backstage/plugin-catalog-react.md#1191))

#### 1.19.1

##### Patch Changes

- [`a07feb7`](https://github.com/backstage/backstage/commit/a07feb7): Fixed a but in the new alpha entity predicates where the `$in` operator mistakenly case sensitive.
- [`3507fcd`](https://github.com/backstage/backstage/commit/3507fcd): Just some more circular dep cleanup

### `@backstage/plugin-home` (0.8.9 → [0.8.10](../../changelogs/@backstage/plugin-home.md#0810))

#### 0.8.10

##### Patch Changes

- [`d52d67f`](https://github.com/backstage/backstage/commit/d52d67f): Added a New Frontend System App Root Element for the `<VisitListener />` component

### `@backstage/plugin-kubernetes-node` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-kubernetes-node.md#032))

#### 0.3.2

##### Patch Changes

- [`3507fcd`](https://github.com/backstage/backstage/commit/3507fcd): Just some more circular dep cleanup

### `@backstage/plugin-mcp-actions-backend` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-mcp-actions-backend.md#011))

#### 0.1.1

##### Patch Changes

- [`6bc0799`](https://github.com/backstage/backstage/commit/6bc0799): Fixed the example in the README for generating a static token by adding a subject field

### `@backstage/plugin-notifications-backend` (0.5.7 → [0.5.8](../../changelogs/@backstage/plugin-notifications-backend.md#058))

#### 0.5.8

##### Patch Changes

- [`4401dfb`](https://github.com/backstage/backstage/commit/4401dfb): Allow defining default notification settings via configuration
- [`9a5a73f`](https://github.com/backstage/backstage/commit/9a5a73f): Fix `addTopic` migration when `user_settings` present

### `@backstage/plugin-notifications-backend-module-email` (0.3.10 → [0.3.11](../../changelogs/@backstage/plugin-notifications-backend-module-email.md#0311))

#### 0.3.11

##### Patch Changes

- [`f92c9fc`](https://github.com/backstage/backstage/commit/f92c9fc): Add optional config for `ses` mail options with `sourceArn`, `fromArn`, `configurationSetName`

### `@backstage/plugin-org` (0.6.40 → [0.6.41](../../changelogs/@backstage/plugin-org.md#0641))

#### 0.6.41

##### Patch Changes

- [`3ab9b96`](https://github.com/backstage/backstage/commit/3ab9b96): Updated card extensions for the new frontend system to use the new entity predicates, and switch the card type to `info` for the user and group profile cards.

### `@backstage/plugin-permission-common` (0.9.0 → [0.9.1](../../changelogs/@backstage/plugin-permission-common.md#091))

#### 0.9.1

##### Patch Changes

- [`3507fcd`](https://github.com/backstage/backstage/commit/3507fcd): Just some more circular dep cleanup

### `@backstage/plugin-permission-node` (0.10.1 → [0.10.2](../../changelogs/@backstage/plugin-permission-node.md#0102))

#### 0.10.2

##### Patch Changes

- [`3507fcd`](https://github.com/backstage/backstage/commit/3507fcd): Just some more circular dep cleanup

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.10 → [0.3.11](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#0311))

#### 0.3.11

##### Patch Changes

- [`642282d`](https://github.com/backstage/backstage/commit/642282d): Added support for new link format for on-prem Confluence

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.12 → [0.3.13](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0313))

#### 0.3.13

##### Patch Changes

- [`cf9ba6f`](https://github.com/backstage/backstage/commit/cf9ba6f): Fixing the typescript issue with using `z.unknown()`

### `@backstage/plugin-scaffolder-backend-module-github` (0.8.0 → [0.8.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#081))

#### 0.8.1

##### Patch Changes

- [`f36bcf9`](https://github.com/backstage/backstage/commit/f36bcf9): Added support for file deletion to `publish:github:pull-request` action.

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

- [`38db3eb`](https://github.com/backstage/backstage/commit/38db3eb): Fix typo in `InputError`

### `@backstage/plugin-scaffolder-backend-module-sentry` (0.2.10 → [0.2.11](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#0211))

#### 0.2.11

##### Patch Changes

- [`648b3d7`](https://github.com/backstage/backstage/commit/648b3d7): Add optional input to sentry:project:create to set the new Sentry project's platform

### `@backstage/plugin-scaffolder-node-test-utils` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#031))

#### 0.3.1

##### Patch Changes

- [`dbde180`](https://github.com/backstage/backstage/commit/dbde180): An internal refactor which adds additional types to experimental checkpoints

### `@backstage/plugin-search-backend` (2.0.3 → [2.0.4](../../changelogs/@backstage/plugin-search-backend.md#204))

#### 2.0.4

##### Patch Changes

- [`69fb975`](https://github.com/backstage/backstage/commit/69fb975): Error messages should not contain backend SQL query strings in the API response, this change will ensure that messages are logged and empty response is returned to the user

### `@backstage/plugin-search-backend-module-elasticsearch` (1.7.3 → [1.7.4](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#174))

#### 1.7.4

##### Patch Changes

- [`3507fcd`](https://github.com/backstage/backstage/commit/3507fcd): Just some more circular dep cleanup

### `@backstage/plugin-techdocs` (1.13.1 → [1.13.2](../../changelogs/@backstage/plugin-techdocs.md#1132))

#### 1.13.2

##### Patch Changes

- [`1debf7f`](https://github.com/backstage/backstage/commit/1debf7f): Fixed an issue causing TechDocs to not properly handle initial redirect.

### `@backstage/plugin-techdocs-node` (1.13.4 → [1.13.5](../../changelogs/@backstage/plugin-techdocs-node.md#1135))

#### 1.13.5

##### Patch Changes

- [`029526c`](https://github.com/backstage/backstage/commit/029526c): Updated the error message thrown by parseReferenceAnnotation to reflect the annotation value passed as an argument rather than in correctly assuming location.

### `@backstage/plugin-user-settings` (0.8.23 → [0.8.24](../../changelogs/@backstage/plugin-user-settings.md#0824))

#### 0.8.24

##### Patch Changes

- [`aa3b054`](https://github.com/backstage/backstage/commit/aa3b054): Added `signIn` and `signOut` analytic events to the `@backstage/core-components` of sign in and sign out.

### `@backstage/theme` (0.6.6 → [0.6.7](../../changelogs/@backstage/theme.md#067))

#### 0.6.7

##### Patch Changes

- [`373486e`](https://github.com/backstage/backstage/commit/373486e): Add a different background colour to focused `MenuItem`s to fix a bug in MUI 4 (which is fixed in MUI 5)
- [`b68d269`](https://github.com/backstage/backstage/commit/b68d269): Update uncomfortably bright color in recently visited and top visited home page cards

## Excluded dependency updates

- `@backstage/app-defaults` (1.6.3 → [1.6.4](../../changelogs/@backstage/app-defaults.md#164))
- `@backstage/backend-app-api` (1.2.4 → [1.2.5](../../changelogs/@backstage/backend-app-api.md#125))
- `@backstage/backend-openapi-utils` (0.5.4 → [0.5.5](../../changelogs/@backstage/backend-openapi-utils.md#055))
- `@backstage/backend-plugin-api` (1.4.0 → [1.4.1](../../changelogs/@backstage/backend-plugin-api.md#141))
- `@backstage/core-compat-api` (0.4.3 → [0.4.4](../../changelogs/@backstage/core-compat-api.md#044))
- `@backstage/dev-utils` (1.1.11 → [1.1.12](../../changelogs/@backstage/dev-utils.md#1112))
- `@backstage/frontend-defaults` (0.2.3 → [0.2.4](../../changelogs/@backstage/frontend-defaults.md#024))
- `@backstage/frontend-dynamic-feature-loader` (0.1.2 → [0.1.3](../../changelogs/@backstage/frontend-dynamic-feature-loader.md#013))
- `@backstage/frontend-plugin-api` (0.10.3 → [0.10.4](../../changelogs/@backstage/frontend-plugin-api.md#0104))
- `@backstage/frontend-test-utils` (0.3.3 → [0.3.4](../../changelogs/@backstage/frontend-test-utils.md#034))
- `@backstage/integration-aws-node` (0.1.16 → [0.1.17](../../changelogs/@backstage/integration-aws-node.md#0117))
- `@backstage/plugin-api-docs` (0.12.8 → [0.12.9](../../changelogs/@backstage/plugin-api-docs.md#0129))
- `@backstage/plugin-app-backend` (0.5.3 → [0.5.4](../../changelogs/@backstage/plugin-app-backend.md#054))
- `@backstage/plugin-app-node` (0.1.34 → [0.1.35](../../changelogs/@backstage/plugin-app-node.md#0135))
- `@backstage/plugin-app-visualizer` (0.1.20 → [0.1.21](../../changelogs/@backstage/plugin-app-visualizer.md#0121))
- `@backstage/plugin-auth-backend-module-atlassian-provider` (0.4.4 → [0.4.5](../../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#045))
- `@backstage/plugin-auth-backend-module-auth0-provider` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-auth-backend-module-auth0-provider.md#025))
- `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.4.4 → [0.4.5](../../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#045))
- `@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-auth-backend-module-azure-easyauth-provider.md#0210))
- `@backstage/plugin-auth-backend-module-bitbucket-provider` (0.3.4 → [0.3.5](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-provider.md#035))
- `@backstage/plugin-auth-backend-module-bitbucket-server-provider` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-server-provider.md#025))
- `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.4.4 → [0.4.5](../../changelogs/@backstage/plugin-auth-backend-module-cloudflare-access-provider.md#045))
- `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.4.4 → [0.4.5](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#045))
- `@backstage/plugin-auth-backend-module-github-provider` (0.3.4 → [0.3.5](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#035))
- `@backstage/plugin-auth-backend-module-gitlab-provider` (0.3.4 → [0.3.5](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#035))
- `@backstage/plugin-auth-backend-module-google-provider` (0.3.4 → [0.3.5](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#035))
- `@backstage/plugin-auth-backend-module-guest-provider` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-auth-backend-module-guest-provider.md#0210))
- `@backstage/plugin-auth-backend-module-microsoft-provider` (0.3.4 → [0.3.5](../../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#035))
- `@backstage/plugin-auth-backend-module-oauth2-provider` (0.4.4 → [0.4.5](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#045))
- `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#0210))
- `@backstage/plugin-auth-backend-module-oidc-provider` (0.4.4 → [0.4.5](../../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#045))
- `@backstage/plugin-auth-backend-module-okta-provider` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#025))
- `@backstage/plugin-auth-backend-module-onelogin-provider` (0.3.4 → [0.3.5](../../changelogs/@backstage/plugin-auth-backend-module-onelogin-provider.md#035))
- `@backstage/plugin-auth-backend-module-pinniped-provider` (0.3.4 → [0.3.5](../../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#035))
- `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.5.4 → [0.5.5](../../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#055))
- `@backstage/plugin-auth-node` (0.6.4 → [0.6.5](../../changelogs/@backstage/plugin-auth-node.md#065))
- `@backstage/plugin-auth-react` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-auth-react.md#0117))
- `@backstage/plugin-bitbucket-cloud-common` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#031))
- `@backstage/plugin-catalog-backend-module-aws` (0.4.12 → [0.4.13](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#0413))
- `@backstage/plugin-catalog-backend-module-azure` (0.3.6 → [0.3.7](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#037))
- `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.5.3 → [0.5.4](../../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#054))
- `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.5.0 → [0.5.1](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#051))
- `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.5.0 → [0.5.1](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#051))
- `@backstage/plugin-catalog-backend-module-gcp` (0.3.9 → [0.3.10](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#0310))
- `@backstage/plugin-catalog-backend-module-gerrit` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#034))
- `@backstage/plugin-catalog-backend-module-gitea` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-catalog-backend-module-gitea.md#012))
- `@backstage/plugin-catalog-backend-module-github` (0.10.0 → [0.10.1](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#0101))
- `@backstage/plugin-catalog-backend-module-github-org` (0.3.11 → [0.3.12](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#0312))
- `@backstage/plugin-catalog-backend-module-gitlab` (0.7.0 → [0.7.1](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#071))
- `@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.10 → [0.2.11](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab-org.md#0211))
- `@backstage/plugin-catalog-backend-module-logs` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-catalog-backend-module-logs.md#0112))
- `@backstage/plugin-catalog-backend-module-openapi` (0.2.11 → [0.2.12](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0212))
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#0210))
- `@backstage/plugin-catalog-backend-module-unprocessed` (0.6.1 → [0.6.2](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#062))
- `@backstage/plugin-catalog-common` (1.1.4 → [1.1.5](../../changelogs/@backstage/plugin-catalog-common.md#115))
- `@backstage/plugin-catalog-node` (1.17.1 → [1.17.2](../../changelogs/@backstage/plugin-catalog-node.md#1172))
- `@backstage/plugin-catalog-unprocessed-entities` (0.2.18 → [0.2.19](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#0219))
- `@backstage/plugin-catalog-unprocessed-entities-common` (0.0.8 → [0.0.9](../../changelogs/@backstage/plugin-catalog-unprocessed-entities-common.md#009))
- `@backstage/plugin-config-schema` (0.1.69 → [0.1.70](../../changelogs/@backstage/plugin-config-schema.md#0170))
- `@backstage/plugin-devtools` (0.1.28 → [0.1.29](../../changelogs/@backstage/plugin-devtools.md#0129))
- `@backstage/plugin-devtools-backend` (0.5.6 → [0.5.7](../../changelogs/@backstage/plugin-devtools-backend.md#057))
- `@backstage/plugin-devtools-common` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-devtools-common.md#0117))
- `@backstage/plugin-events-backend` (0.5.3 → [0.5.4](../../changelogs/@backstage/plugin-events-backend.md#054))
- `@backstage/plugin-events-backend-module-aws-sqs` (0.4.12 → [0.4.13](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#0413))
- `@backstage/plugin-events-backend-module-azure` (0.2.21 → [0.2.22](../../changelogs/@backstage/plugin-events-backend-module-azure.md#0222))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.21 → [0.2.22](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0222))
- `@backstage/plugin-events-backend-module-bitbucket-server` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-server.md#013))
- `@backstage/plugin-events-backend-module-gerrit` (0.2.21 → [0.2.22](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0222))
- `@backstage/plugin-events-backend-module-github` (0.4.1 → [0.4.2](../../changelogs/@backstage/plugin-events-backend-module-github.md#042))
- `@backstage/plugin-events-backend-module-gitlab` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#033))
- `@backstage/plugin-events-backend-module-google-pubsub` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-events-backend-module-google-pubsub.md#012))
- `@backstage/plugin-events-backend-module-kafka` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-events-backend-module-kafka.md#011))
- `@backstage/plugin-events-backend-test-utils` (0.1.45 → [0.1.46](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0146))
- `@backstage/plugin-events-node` (0.4.12 → [0.4.13](../../changelogs/@backstage/plugin-events-node.md#0413))
- `@backstage/plugin-gateway-backend` (1.0.2 → [1.0.3](../../changelogs/@backstage/plugin-gateway-backend.md#103))
- `@backstage/plugin-home-react` (0.1.27 → [0.1.28](../../changelogs/@backstage/plugin-home-react.md#0128))
- `@backstage/plugin-kubernetes` (0.12.8 → [0.12.9](../../changelogs/@backstage/plugin-kubernetes.md#0129))
- `@backstage/plugin-kubernetes-backend` (0.19.7 → [0.19.8](../../changelogs/@backstage/plugin-kubernetes-backend.md#0198))
- `@backstage/plugin-kubernetes-cluster` (0.0.26 → [0.0.27](../../changelogs/@backstage/plugin-kubernetes-cluster.md#0027))
- `@backstage/plugin-kubernetes-common` (0.9.5 → [0.9.6](../../changelogs/@backstage/plugin-kubernetes-common.md#096))
- `@backstage/plugin-kubernetes-react` (0.5.8 → [0.5.9](../../changelogs/@backstage/plugin-kubernetes-react.md#059))
- `@backstage/plugin-notifications` (0.5.6 → [0.5.7](../../changelogs/@backstage/plugin-notifications.md#057))
- `@backstage/plugin-notifications-backend-module-slack` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-notifications-backend-module-slack.md#013))
- `@backstage/plugin-notifications-common` (0.0.9 → [0.0.10](../../changelogs/@backstage/plugin-notifications-common.md#0010))
- `@backstage/plugin-notifications-node` (0.2.16 → [0.2.17](../../changelogs/@backstage/plugin-notifications-node.md#0217))
- `@backstage/plugin-org-react` (0.1.39 → [0.1.40](../../changelogs/@backstage/plugin-org-react.md#0140))
- `@backstage/plugin-permission-backend` (0.7.1 → [0.7.2](../../changelogs/@backstage/plugin-permission-backend.md#072))
- `@backstage/plugin-permission-backend-module-allow-all-policy` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#0210))
- `@backstage/plugin-permission-react` (0.4.35 → [0.4.36](../../changelogs/@backstage/plugin-permission-react.md#0436))
- `@backstage/plugin-proxy-backend` (0.6.3 → [0.6.4](../../changelogs/@backstage/plugin-proxy-backend.md#064))
- `@backstage/plugin-proxy-node` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-proxy-node.md#016))
- `@backstage/plugin-scaffolder-backend-module-azure` (0.2.10 → [0.2.11](../../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#0211))
- `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.3.11 → [0.3.12](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket.md#0312))
- `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.2.10 → [0.2.11](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#0211))
- `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.10 → [0.2.11](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#0211))
- `@backstage/plugin-scaffolder-backend-module-gcp` (0.2.10 → [0.2.11](../../changelogs/@backstage/plugin-scaffolder-backend-module-gcp.md#0211))
- `@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.10 → [0.2.11](../../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#0211))
- `@backstage/plugin-scaffolder-backend-module-gitea` (0.2.10 → [0.2.11](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#0211))
- `@backstage/plugin-scaffolder-backend-module-gitlab` (0.9.2 → [0.9.3](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#093))
- `@backstage/plugin-scaffolder-backend-module-notifications` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-scaffolder-backend-module-notifications.md#0112))
- `@backstage/plugin-scaffolder-backend-module-rails` (0.5.10 → [0.5.11](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0511))
- `@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.11 → [0.4.12](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0412))
- `@backstage/plugin-search` (1.4.27 → [1.4.28](../../changelogs/@backstage/plugin-search.md#1428))
- `@backstage/plugin-search-backend-module-catalog` (0.3.5 → [0.3.6](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#036))
- `@backstage/plugin-search-backend-module-explore` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-search-backend-module-explore.md#034))
- `@backstage/plugin-search-backend-module-pg` (0.5.45 → [0.5.46](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0546))
- `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.3.10 → [0.3.11](../../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#0311))
- `@backstage/plugin-search-backend-module-techdocs` (0.4.3 → [0.4.4](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#044))
- `@backstage/plugin-search-backend-node` (1.3.12 → [1.3.13](../../changelogs/@backstage/plugin-search-backend-node.md#1313))
- `@backstage/plugin-search-common` (1.2.18 → [1.2.19](../../changelogs/@backstage/plugin-search-common.md#1219))
- `@backstage/plugin-search-react` (1.9.1 → [1.9.2](../../changelogs/@backstage/plugin-search-react.md#192))
- `@backstage/plugin-signals-backend` (0.3.5 → [0.3.6](../../changelogs/@backstage/plugin-signals-backend.md#036))
- `@backstage/plugin-signals-node` (0.1.21 → [0.1.22](../../changelogs/@backstage/plugin-signals-node.md#0122))
- `@backstage/plugin-signals-react` (0.0.14 → [0.0.15](../../changelogs/@backstage/plugin-signals-react.md#0015))
- `@backstage/plugin-techdocs-addons-test-utils` (1.0.50 → [1.0.51](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#1051))
- `@backstage/plugin-techdocs-backend` (2.0.3 → [2.0.4](../../changelogs/@backstage/plugin-techdocs-backend.md#204))
- `@backstage/plugin-techdocs-module-addons-contrib` (1.1.25 → [1.1.26](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1126))
- `@backstage/plugin-techdocs-react` (1.3.0 → [1.3.1](../../changelogs/@backstage/plugin-techdocs-react.md#131))
- `@backstage/plugin-user-settings-backend` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-user-settings-backend.md#034))
- `@backstage/test-utils` (1.7.9 → [1.7.10](../../changelogs/@backstage/test-utils.md#1710))
- `@techdocs/cli` (1.9.4 → [1.9.5](../../changelogs/@techdocs/cli.md#195))
