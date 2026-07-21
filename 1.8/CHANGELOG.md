# RHDH Release 1.8 changelog

Changes between Backstage 1.39.1 (RHDH 1.7) and Backstage 1.42.5 (RHDH 1.8) — 3 added, 1 removed, 174 upgraded, 10 unchanged packages.

## Summary

- [Newly added packages](#newly-added-packages): 3 packages
- [Removed packages](#removed-packages): 1 package
- [Breaking changes](#breaking-changes): 22 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 6 packages
- [0.x patch version bumps](#0x-patch-version-bumps): 55 packages
- [Other minor version bumps](#other-minor-version-bumps): 7 packages
- [Other patch version bumps](#other-patch-version-bumps): 14 packages
- [Excluded dependency updates](#excluded-dependency-updates): 70 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/plugin-events-backend-module-kafka` (new, 0.1.2)](#backstageplugin-events-backend-module-kafka-new-012)
  - [`@backstage/plugin-mcp-actions-backend` (new, 0.1.2)](#backstageplugin-mcp-actions-backend-new-012)
  - [`@backstage/ui` (new, 0.7.0)](#backstageui-new-070)
- [Removed packages](#removed-packages)
- [Breaking changes](#breaking-changes)
  - [`@backstage/cli` (0.32.1 → 0.34.1)](#backstagecli-0321--0341)
  - [`@backstage/core-compat-api` (0.4.2 → 0.5.1)](#backstagecore-compat-api-042--051)
  - [`@backstage/create-app` (0.6.2 → 0.7.3)](#backstagecreate-app-062--073)
  - [`@backstage/frontend-app-api` (0.11.2 → 0.12.0)](#backstagefrontend-app-api-0112--0120)
  - [`@backstage/frontend-defaults` (0.2.2 → 0.3.0)](#backstagefrontend-defaults-022--030)
  - [`@backstage/frontend-plugin-api` (0.10.2 → 0.11.0)](#backstagefrontend-plugin-api-0102--0110)
  - [`@backstage/plugin-app` (0.1.9 → 0.2.0)](#backstageplugin-app-019--020)
  - [`@backstage/plugin-catalog` (1.30.0 → 1.31.2)](#backstageplugin-catalog-1300--1312)
  - [`@backstage/plugin-catalog-backend` (2.0.0 → 3.0.1)](#backstageplugin-catalog-backend-200--301)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.4.8 → 0.5.2)](#backstageplugin-catalog-backend-module-bitbucket-cloud-048--052)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.6.6 → 0.7.2)](#backstageplugin-catalog-backend-module-gitlab-066--072)
  - [`@backstage/plugin-catalog-react` (1.18.0 → 1.20.1)](#backstageplugin-catalog-react-1180--1201)
  - [`@backstage/plugin-home` (0.8.8 → 0.8.11)](#backstageplugin-home-088--0811)
  - [`@backstage/plugin-kubernetes-backend` (0.19.6 → 0.20.1)](#backstageplugin-kubernetes-backend-0196--0201)
  - [`@backstage/plugin-scaffolder` (1.31.0 → 1.34.0)](#backstageplugin-scaffolder-1310--1340)
  - [`@backstage/plugin-scaffolder-backend` (1.33.0 → 2.2.0)](#backstageplugin-scaffolder-backend-1330--220)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.7.1 → 0.8.2)](#backstageplugin-scaffolder-backend-module-github-071--082)
  - [`@backstage/plugin-scaffolder-common` (1.5.11 → 1.7.0)](#backstageplugin-scaffolder-common-1511--170)
  - [`@backstage/plugin-scaffolder-node` (0.8.2 → 0.11.0)](#backstageplugin-scaffolder-node-082--0110)
  - [`@backstage/plugin-scaffolder-node-test-utils` (0.2.2 → 0.3.2)](#backstageplugin-scaffolder-node-test-utils-022--032)
  - [`@backstage/plugin-scaffolder-react` (1.16.0 → 1.19.0)](#backstageplugin-scaffolder-react-1160--1190)
  - [`@backstage/plugin-signals` (0.0.19 → 0.0.22)](#backstageplugin-signals-0019--0022)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/backend-defaults` (0.10.0 → 0.12.0)](#backstagebackend-defaults-0100--0120)
  - [`@backstage/backend-openapi-utils` (0.5.3 → 0.6.0)](#backstagebackend-openapi-utils-053--060)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.4.1 → 0.5.2)](#backstageplugin-catalog-backend-module-bitbucket-server-041--052)
  - [`@backstage/plugin-catalog-backend-module-github` (0.9.0 → 0.10.2)](#backstageplugin-catalog-backend-module-github-090--0102)
  - [`@backstage/plugin-notifications-common` (0.0.8 → 0.1.0)](#backstageplugin-notifications-common-008--010)
  - [`@backstage/repo-tools` (0.13.4 → 0.15.1)](#backstagerepo-tools-0134--0151)
- [0.x patch version bumps](#0x-patch-version-bumps)
  - [`@backstage/backend-dynamic-feature-service` (0.7.0 → 0.7.3)](#backstagebackend-dynamic-feature-service-070--073)
  - [`@backstage/cli-node` (0.2.13 → 0.2.14)](#backstagecli-node-0213--0214)
  - [`@backstage/core-components` (0.17.2 → 0.17.5)](#backstagecore-components-0172--0175)
  - [`@backstage/eslint-plugin` (0.1.10 → 0.1.11)](#backstageeslint-plugin-0110--0111)
  - [`@backstage/frontend-test-utils` (0.3.2 → 0.3.5)](#backstagefrontend-test-utils-032--035)
  - [`@backstage/plugin-api-docs` (0.12.7 → 0.12.10)](#backstageplugin-api-docs-0127--01210)
  - [`@backstage/plugin-app-visualizer` (0.1.19 → 0.1.22)](#backstageplugin-app-visualizer-0119--0122)
  - [`@backstage/plugin-auth-backend` (0.25.0 → 0.25.3)](#backstageplugin-auth-backend-0250--0253)
  - [`@backstage/plugin-auth-backend-module-aws-alb-provider` (0.4.3 → 0.4.6)](#backstageplugin-auth-backend-module-aws-alb-provider-043--046)
  - [`@backstage/plugin-auth-backend-module-okta-provider` (0.2.3 → 0.2.6)](#backstageplugin-auth-backend-module-okta-provider-023--026)
  - [`@backstage/plugin-auth-node` (0.6.3 → 0.6.6)](#backstageplugin-auth-node-063--066)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.3.5 → 0.3.8)](#backstageplugin-catalog-backend-module-azure-035--038)
  - [`@backstage/plugin-catalog-backend-module-gcp` (0.3.8 → 0.3.11)](#backstageplugin-catalog-backend-module-gcp-038--0311)
  - [`@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.9 → 0.2.12)](#backstageplugin-catalog-backend-module-gitlab-org-029--0212)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.7.0 → 0.7.3)](#backstageplugin-catalog-backend-module-incremental-ingestion-070--073)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.11.5 → 0.11.8)](#backstageplugin-catalog-backend-module-ldap-0115--0118)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.7.0 → 0.7.3)](#backstageplugin-catalog-backend-module-msgraph-070--073)
  - [`@backstage/plugin-catalog-backend-module-puppetdb` (0.2.10 → 0.2.13)](#backstageplugin-catalog-backend-module-puppetdb-0210--0213)
  - [`@backstage/plugin-catalog-graph` (0.4.19 → 0.4.22)](#backstageplugin-catalog-graph-0419--0422)
  - [`@backstage/plugin-catalog-import` (0.13.0 → 0.13.4)](#backstageplugin-catalog-import-0130--0134)
  - [`@backstage/plugin-catalog-unprocessed-entities` (0.2.17 → 0.2.20)](#backstageplugin-catalog-unprocessed-entities-0217--0220)
  - [`@backstage/plugin-devtools` (0.1.27 → 0.1.30)](#backstageplugin-devtools-0127--0130)
  - [`@backstage/plugin-devtools-backend` (0.5.5 → 0.5.8)](#backstageplugin-devtools-backend-055--058)
  - [`@backstage/plugin-events-backend` (0.5.2 → 0.5.5)](#backstageplugin-events-backend-052--055)
  - [`@backstage/plugin-events-backend-module-google-pubsub` (0.1.0 → 0.1.3)](#backstageplugin-events-backend-module-google-pubsub-010--013)
  - [`@backstage/plugin-home-react` (0.1.26 → 0.1.29)](#backstageplugin-home-react-0126--0129)
  - [`@backstage/plugin-kubernetes` (0.12.7 → 0.12.10)](#backstageplugin-kubernetes-0127--01210)
  - [`@backstage/plugin-kubernetes-node` (0.3.0 → 0.3.3)](#backstageplugin-kubernetes-node-030--033)
  - [`@backstage/plugin-kubernetes-react` (0.5.7 → 0.5.10)](#backstageplugin-kubernetes-react-057--0510)
  - [`@backstage/plugin-notifications` (0.5.5 → 0.5.8)](#backstageplugin-notifications-055--058)
  - [`@backstage/plugin-notifications-backend` (0.5.6 → 0.5.9)](#backstageplugin-notifications-backend-056--059)
  - [`@backstage/plugin-notifications-backend-module-email` (0.3.9 → 0.3.12)](#backstageplugin-notifications-backend-module-email-039--0312)
  - [`@backstage/plugin-org` (0.6.39 → 0.6.43)](#backstageplugin-org-0639--0643)
  - [`@backstage/plugin-permission-common` (0.9.0 → 0.9.1)](#backstageplugin-permission-common-090--091)
  - [`@backstage/plugin-permission-node` (0.10.0 → 0.10.3)](#backstageplugin-permission-node-0100--0103)
  - [`@backstage/plugin-proxy-backend` (0.6.2 → 0.6.5)](#backstageplugin-proxy-backend-062--065)
  - [`@backstage/plugin-scaffolder-backend-module-azure` (0.2.9 → 0.2.12)](#backstageplugin-scaffolder-backend-module-azure-029--0212)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket` (0.3.10 → 0.3.13)](#backstageplugin-scaffolder-backend-module-bitbucket-0310--0313)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.2.9 → 0.2.12)](#backstageplugin-scaffolder-backend-module-bitbucket-cloud-029--0212)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.9 → 0.2.12)](#backstageplugin-scaffolder-backend-module-bitbucket-server-029--0212)
  - [`@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.9 → 0.3.12)](#backstageplugin-scaffolder-backend-module-confluence-to-markdown-039--0312)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.10 → 0.3.14)](#backstageplugin-scaffolder-backend-module-cookiecutter-0310--0314)
  - [`@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.9 → 0.2.12)](#backstageplugin-scaffolder-backend-module-gerrit-029--0212)
  - [`@backstage/plugin-scaffolder-backend-module-gitea` (0.2.9 → 0.2.12)](#backstageplugin-scaffolder-backend-module-gitea-029--0212)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.9.1 → 0.9.4)](#backstageplugin-scaffolder-backend-module-gitlab-091--094)
  - [`@backstage/plugin-scaffolder-backend-module-notifications` (0.1.10 → 0.1.13)](#backstageplugin-scaffolder-backend-module-notifications-0110--0113)
  - [`@backstage/plugin-scaffolder-backend-module-rails` (0.5.9 → 0.5.12)](#backstageplugin-scaffolder-backend-module-rails-059--0512)
  - [`@backstage/plugin-scaffolder-backend-module-sentry` (0.2.9 → 0.2.12)](#backstageplugin-scaffolder-backend-module-sentry-029--0212)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.10 → 0.4.13)](#backstageplugin-scaffolder-backend-module-yeoman-0410--0413)
  - [`@backstage/plugin-search-backend-module-catalog` (0.3.4 → 0.3.7)](#backstageplugin-search-backend-module-catalog-034--037)
  - [`@backstage/plugin-search-backend-module-explore` (0.3.2 → 0.3.6)](#backstageplugin-search-backend-module-explore-032--036)
  - [`@backstage/plugin-search-backend-module-techdocs` (0.4.2 → 0.4.5)](#backstageplugin-search-backend-module-techdocs-042--045)
  - [`@backstage/plugin-techdocs-common` (0.1.0 → 0.1.1)](#backstageplugin-techdocs-common-010--011)
  - [`@backstage/plugin-user-settings` (0.8.22 → 0.8.25)](#backstageplugin-user-settings-0822--0825)
  - [`@backstage/theme` (0.6.6 → 0.6.8)](#backstagetheme-066--068)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/backend-plugin-api` (1.3.1 → 1.4.2)](#backstagebackend-plugin-api-131--142)
  - [`@backstage/backend-test-utils` (1.5.0 → 1.8.0)](#backstagebackend-test-utils-150--180)
  - [`@backstage/catalog-client` (1.10.0 → 1.11.0)](#backstagecatalog-client-1100--1110)
  - [`@backstage/core-app-api` (1.17.0 → 1.18.0)](#backstagecore-app-api-1170--1180)
  - [`@backstage/plugin-catalog-node` (1.17.0 → 1.18.0)](#backstageplugin-catalog-node-1170--1180)
  - [`@backstage/plugin-techdocs` (1.12.6 → 1.14.1)](#backstageplugin-techdocs-1126--1141)
  - [`@backstage/plugin-techdocs-react` (1.2.17 → 1.3.2)](#backstageplugin-techdocs-react-1217--132)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-app-api` (1.2.3 → 1.2.6)](#backstagebackend-app-api-123--126)
  - [`@backstage/catalog-model` (1.7.4 → 1.7.5)](#backstagecatalog-model-174--175)
  - [`@backstage/config` (1.3.2 → 1.3.3)](#backstageconfig-132--133)
  - [`@backstage/config-loader` (1.10.1 → 1.10.2)](#backstageconfig-loader-1101--1102)
  - [`@backstage/core-plugin-api` (1.10.7 → 1.10.9)](#backstagecore-plugin-api-1107--1109)
  - [`@backstage/integration` (1.17.0 → 1.17.1)](#backstageintegration-1170--1171)
  - [`@backstage/integration-react` (1.2.7 → 1.2.9)](#backstageintegration-react-127--129)
  - [`@backstage/plugin-search` (1.4.26 → 1.4.29)](#backstageplugin-search-1426--1429)
  - [`@backstage/plugin-search-backend` (2.0.2 → 2.0.5)](#backstageplugin-search-backend-202--205)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.7.2 → 1.7.5)](#backstageplugin-search-backend-module-elasticsearch-172--175)
  - [`@backstage/plugin-search-react` (1.9.0 → 1.9.3)](#backstageplugin-search-react-190--193)
  - [`@backstage/plugin-techdocs-backend` (2.0.2 → 2.0.5)](#backstageplugin-techdocs-backend-202--205)
  - [`@backstage/plugin-techdocs-module-addons-contrib` (1.1.24 → 1.1.27)](#backstageplugin-techdocs-module-addons-contrib-1124--1127)
  - [`@backstage/plugin-techdocs-node` (1.13.3 → 1.13.6)](#backstageplugin-techdocs-node-1133--1136)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/plugin-events-backend-module-kafka` (new, [0.1.2](../changelogs/@backstage/plugin-events-backend-module-kafka.md#012))

#### 0.1.2

##### Patch Changes

- [`0d38009`](https://github.com/backstage/backstage/commit/0d38009): Remove luxon dependency and minor internal improvements

#### 0.1.0

##### Minor Changes

- [`b034b9d`](https://github.com/backstage/backstage/commit/b034b9d): Adds a new module `kafka` for plugin-events-backend

  The module introduces the `KafkaConsumerClient` which creates a Kafka client used to establish consumer connections. It also provides the `KafkaConsumingEventPublisher`, a consumer that subscribes to configured Kafka topics and publishes received messages to the Event Service.

### `@backstage/plugin-mcp-actions-backend` (new, [0.1.2](../changelogs/@backstage/plugin-mcp-actions-backend.md#012))

#### 0.1.1

##### Patch Changes

- [`6bc0799`](https://github.com/backstage/backstage/commit/6bc0799): Fixed the example in the README for generating a static token by adding a subject field

#### 0.1.0

##### Minor Changes

- [`4ed0fb6`](https://github.com/backstage/backstage/commit/4ed0fb6): Initial implementation of an `mcp-actions` backend

### `@backstage/ui` (new, [0.7.0](../changelogs/@backstage/ui.md#070))

#### 0.7.0

##### Minor Changes

- [`0615e54`](https://github.com/backstage/backstage/commit/0615e54): **BREAKING**: We are moving our DataTable component to React Aria. We removed our DataTable to only use Table as a single and opinionated option for tables. This new structure is made possible by using React Aria under the hood.
- [`b245c9d`](https://github.com/backstage/backstage/commit/b245c9d): **BREAKING**: Backstage UI - HeaderPage - We are updating the breadcrumb to be more visible and accessible.
- [`800f593`](https://github.com/backstage/backstage/commit/800f593): **BREAKING**: We are updating the Menu component to use React Aria under the hood. The structure and all props are changing to follow React Aria's guidance.
- [`b0e47f3`](https://github.com/backstage/backstage/commit/b0e47f3): **BREAKING**: We are upgrading our `Text` component to support all font sizes making the `Heading` component redundant. The new `Text` component introduces 4 sizes for title and 4 sizes for body text. All of these work in multiple colors and font weights. We improved the `as` prop to include all possible values. The `Link` component has also been updated to match the new `Text` component.

##### Patch Changes

- [`de89a3d`](https://github.com/backstage/backstage/commit/de89a3d): Fixes some styles on the Select component in BUI.
- [`a251b3e`](https://github.com/backstage/backstage/commit/a251b3e): Export CardHeader, CardBody and CardFooter from Card component index
- [`f761306`](https://github.com/backstage/backstage/commit/f761306): Add new TagGroup component to Backstage UI.
- [`75fead9`](https://github.com/backstage/backstage/commit/75fead9): Fixes a couple of small bugs in BUI including setting H1 and H2 correctly on the Header and HeaderPage.
- [`e7ff178`](https://github.com/backstage/backstage/commit/e7ff178): Update styling of Tooltip element
- [`230b410`](https://github.com/backstage/backstage/commit/230b410): **BREAKING**: Move breadcrumb to fit in the `HeaderPage` instead of the `Header` in Backstage UI.
- [`2f9a084`](https://github.com/backstage/backstage/commit/2f9a084): We are motion away from `motion` to use `gsap` instead to make Backstage UI backward compatible with React 17.
- [`d4e603e`](https://github.com/backstage/backstage/commit/d4e603e): Updated Menu component in Backstage UI to use useId() from React Aria instead of React to support React 17.
- [`8bdc491`](https://github.com/backstage/backstage/commit/8bdc491): Remove stylesheet import from Select component.
- [`404b426`](https://github.com/backstage/backstage/commit/404b426): Add `startCollapsed` prop on the `SearchField` component in BUI.
- [`e0e886f`](https://github.com/backstage/backstage/commit/e0e886f): Adds onTabSelectionChange to ui header component.

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

## Removed packages

- `@backstage/canon` ([0.4.0](../changelogs/@backstage/canon.md#040))

## Breaking changes

### `@backstage/cli` (0.32.1 → [0.34.1](../changelogs/@backstage/cli.md#0341))

#### 0.34.0

##### Minor Changes

- [`38b4243`](https://github.com/backstage/backstage/commit/38b4243): Added plugin and module templates for the new frontend system. These templates are not included by default, but can be included by adding `@backstage/cli/templates/new-frontend-plugin` and `@backstage/cli/templates/new-frontend-plugin-module` as [custom templates](https://backstage.io/docs/tooling/cli/templates#installing-custom-templates).
- [`923ceb2`](https://github.com/backstage/backstage/commit/923ceb2): **BREAKING**: The new app build based on [Rspack](https://rspack.dev/) is now the default, and the `EXPERIMENTAL_RSPACK` flag has been removed. To revert to the old behavior, set the `LEGACY_WEBPACK_BUILD` environment flag and install the following optional dependencies:

  ```json
  {
    "dependencies": {
      "@module-federation/enhanced": "^0.9.0",
      "@pmmmwh/react-refresh-webpack-plugin": "^0.5.7",
      "esbuild-loader": "^4.0.0",
      "eslint-webpack-plugin": "^4.2.0",
      "fork-ts-checker-webpack-plugin": "^9.0.0",
      "mini-css-extract-plugin": "^2.4.2",
      "terser-webpack-plugin": "^5.1.3",
      "webpack": "^5.96.0",
      "webpack-dev-server": "^5.0.0"
    }
  }
  ```

  If you do encounter a blocking issue that forces you to use the old WebPack build, please [open an issue](https://github.com/backstage/backstage/issues) explaining the problem. The WebPack build will be removed in a future release.

- [`eda80c7`](https://github.com/backstage/backstage/commit/eda80c7): **BREAKING**: Removed support for `.icon.svg` imports, which have been deprecated since the 1.19 release.

##### Patch Changes

- [`2b8082a`](https://github.com/backstage/backstage/commit/2b8082a): Internal refactor of error handling
- [`8b1bf6e`](https://github.com/backstage/backstage/commit/8b1bf6e): Deprecated new frontend system config setting `app.experimental.packages` to just `app.packages`. The old config will continue working for the time being, but may be removed in a future release.
- [`ead626f`](https://github.com/backstage/backstage/commit/ead626f): The Node.js transform in `@backstage/cli/config/nodeTransformHooks.mjs` now supports the built-in type stripping in Node.js, which is enabled by default from v22.18.0.
- [`a6af768`](https://github.com/backstage/backstage/commit/a6af768): Allow js files to be processed by the nodeTransform loader

#### 0.33.1

##### Patch Changes

- [`50f0ce6`](https://github.com/backstage/backstage/commit/50f0ce6): Fixes a module not found error when running `backstage-cli info`.

#### 0.33.0

##### Minor Changes

- [`eef0e83`](https://github.com/backstage/backstage/commit/eef0e83): Internal update to promote the modular CLI entrypoint to stable.

##### Patch Changes

- [`d07fe35`](https://github.com/backstage/backstage/commit/d07fe35): Added user feedback when opening config docs in browser. The command now clearly indicates what it's doing and provides fallback instructions if the browser fails to open.
- [`ce70439`](https://github.com/backstage/backstage/commit/ce70439): The `BACKSTAGE_CLI_EXPERIMENTAL_BUILD_CACHE` flag has been removed. Existing users are encouraged to switch to `EXPERIMENTAL_RSPACK` instead.
- [`1d8f00b`](https://github.com/backstage/backstage/commit/1d8f00b): Switched to using the `ModuleFederationPlugin` from `@module-federation/enhanced/rspack` for Rspack, rather than the built-in one.
- [`2b9633f`](https://github.com/backstage/backstage/commit/2b9633f): The experimental `FORCE_REACT_DEVELOPMENT` flag has been removed.
- [`d8c4a54`](https://github.com/backstage/backstage/commit/d8c4a54): Only use the caching Jest module loader for frontend packages in order to avoid breaking real ESM module imports.
- [`d6d63c7`](https://github.com/backstage/backstage/commit/d6d63c7): Updating the scaffolder action boilerplate to use new `zod` schema
- [`e36e855`](https://github.com/backstage/backstage/commit/e36e855): Added `backstage.pluginId` field in `package.json` to all default plugin package templates for the `new` command.
- [`1bab255`](https://github.com/backstage/backstage/commit/1bab255): Internal refactor to combine alpha `build` and `start` modules.
- [`713e957`](https://github.com/backstage/backstage/commit/713e957): fix: merge eslint reports when using json format
- [`8a0164c`](https://github.com/backstage/backstage/commit/8a0164c): Fix an issue where some commands were not usable because of missing dist files

### `@backstage/core-compat-api` (0.4.2 → [0.5.1](../changelogs/@backstage/core-compat-api.md#051))

#### 0.5.0

##### Minor Changes

- [`62c3628`](https://github.com/backstage/backstage/commit/62c3628): Rename `createLegacyApp` to `createLegacyAppRoot` as it better refers to the purpose of the function.
- [`e4ddf22`](https://github.com/backstage/backstage/commit/e4ddf22): **BREAKING**: The `defaultPath` override of `convertLegacyPageExtension` has been renamed to `path`, in order to align with the same update that was made to the `PageBlueprint`.

##### Patch Changes

- [`e4ddf22`](https://github.com/backstage/backstage/commit/e4ddf22): Internal update to align with new blueprint parameter naming in the new frontend system.
- [`f2f133c`](https://github.com/backstage/backstage/commit/f2f133c): Internal update to use the new variant of `ApiBlueprint`.
- [`fda1bbc`](https://github.com/backstage/backstage/commit/fda1bbc): The `compatWrapper` has been switched to use the new `SwappableComponentsApi` instead of the old `ComponentsApi` in its bridging to the old frontend system.
- [`5d31d66`](https://github.com/backstage/backstage/commit/5d31d66): Updated the usage of the `RouterBlueprint` and `AppRootWrapperBlueprint` to use the lowercase `component` parameter

### `@backstage/create-app` (0.6.2 → [0.7.3](../changelogs/@backstage/create-app.md#073))

#### 0.7.2

##### Patch Changes

- [`d7a3d04`](https://github.com/backstage/backstage/commit/d7a3d04): Created a flag for scaffolding apps using the new frontend system.
- [`4704160`](https://github.com/backstage/backstage/commit/4704160): Bumped create-app version.
- [`1e8a013`](https://github.com/backstage/backstage/commit/1e8a013): Bumped create-app version.
- [`e33fce1`](https://github.com/backstage/backstage/commit/e33fce1): Added Notifications and Signals to be installed by default
- [`8b1bf6e`](https://github.com/backstage/backstage/commit/8b1bf6e): Updated the `app.packages` config setting now that it no longer is experimental
- [`2a156e0`](https://github.com/backstage/backstage/commit/2a156e0): Updated the `better-sqlite` dependency from `v9.0.0` to `v13.0.0`. You can apply this change to your instance by applying the following change to your `packages/backend/package.json` and running `yarn install`.

  ```diff
    "dependencies": {
      "app": "link:../app",
  -    "better-sqlite3": "^9.0.0",
  +    "better-sqlite3": "^12.0.0",
      "node-gyp": "^10.0.0",
      "pg": "^8.11.3"
    }
  ```

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

#### 0.7.0

##### Minor Changes

- [`30474c4`](https://github.com/backstage/backstage/commit/30474c4): Add .cache directory to shipped gitignore.

##### Patch Changes

- [`d57a6f7`](https://github.com/backstage/backstage/commit/d57a6f7): Bumped create-app version.
- [`f628f44`](https://github.com/backstage/backstage/commit/f628f44): Bumped create-app version.
- [`9c9faf2`](https://github.com/backstage/backstage/commit/9c9faf2): Bumped create-app version.

### `@backstage/frontend-app-api` (0.11.2 → [0.12.0](../changelogs/@backstage/frontend-app-api.md#0120))

#### 0.12.0

##### Minor Changes

- [`8e21c4d`](https://github.com/backstage/backstage/commit/8e21c4d): Use an app plugin for built-in extension app node specs.
- [`df7bd3b`](https://github.com/backstage/backstage/commit/df7bd3b): **BREAKING**: Removed the deprecated `FrontendFeature` type, import it from `@backstage/frontend-plugin-api` instead.
- [`8e21c4d`](https://github.com/backstage/backstage/commit/8e21c4d): The `AppNodeSpec.plugin` property is now required.
- [`5e12252`](https://github.com/backstage/backstage/commit/5e12252): **BREAKING**: Restructured some of option fields of `createApp` and `createSpecializedApp`.

  - For `createApp`, all option fields _except_ `features` and `bindRoutes` have been moved into a new `advanced` object field.
  - For `createSpecializedApp`, all option fields _except_ `features`, `config`, and `bindRoutes` have been moved into a new `advanced` object field.

  This helps highlight that some options are meant to rarely be needed or used, and simplifies the usage of those options that are almost always required.

  As an example, if you used to supply a custom config loader, you would update your code as follows:

  ```diff
   createApp({
     features: [...],
  -  configLoader: new MyCustomLoader(),
  +  advanced: {
  +    configLoader: new MyCustomLoader(),
  +  },
   })
  ```

##### Patch Changes

- [`d9e00e3`](https://github.com/backstage/backstage/commit/d9e00e3): Add support for a new `aliasFor` option for `createRouteRef`. This allows for the creation of a new route ref that acts as an alias for an existing route ref that is installed in the app. This is particularly useful when creating modules that override existing plugin pages, without referring to the existing plugin. For example:

  ```tsx
  export default createFrontendModule({
    pluginId: 'catalog',
    extensions: [
      PageBlueprint.make({
        params: {
          defaultPath: '/catalog',
          routeRef: createRouteRef({ aliasFor: 'catalog.catalogIndex' }),
          loader: () =>
            import('./CustomCatalogIndexPage').then(m => (
              <m.CustomCatalogIndexPage />
            )),
        },
      }),
    ],
  });
  ```

- [`f2f133c`](https://github.com/backstage/backstage/commit/f2f133c): Internal update to use the new variant of `ApiBlueprint`.
- [`ef54427`](https://github.com/backstage/backstage/commit/ef54427): Internal cleanup of routing system data.
- [`391f0ca`](https://github.com/backstage/backstage/commit/391f0ca): External route references are no longer required to be exported via a plugin instance to function. The default target will still be resolved even if the external route reference is not included in `externalRoutes` of a plugin, but users of the plugin will not be able to configure the target of the route. This is particularly useful when building modules or overrides for existing plugins, allowing you add external routes both within and out from the plugin.
- [`f3f9d57`](https://github.com/backstage/backstage/commit/f3f9d57): Renaming the `getNodesByRoutePath` parameter from `sourcePath` to `routePath`
- [`8b1bf6e`](https://github.com/backstage/backstage/commit/8b1bf6e): Deprecated new frontend system config setting `app.experimental.packages` to just `app.packages`. The old config will continue working for the time being, but may be removed in a future release.
- [`fda1bbc`](https://github.com/backstage/backstage/commit/fda1bbc): Added a default implementation of the `SwappableComponentsApi` and removing the legacy `ComponentsApi` implementation
- [`1c2cc37`](https://github.com/backstage/backstage/commit/1c2cc37): Improved runtime error message clarity when extension factories don't return an iterable object.
- [`3d2499f`](https://github.com/backstage/backstage/commit/3d2499f): Moved `createSpecializedApp` options to a new `CreateSpecializedAppOptions` type.

#### 0.11.4

##### Patch Changes

- [`3507fcd`](https://github.com/backstage/backstage/commit/3507fcd): Just some more circular dep cleanup

#### 0.11.3

##### Patch Changes

- [`0169b23`](https://github.com/backstage/backstage/commit/0169b23): Internal tweak to avoid circular dependencies
- [`c38c9e8`](https://github.com/backstage/backstage/commit/c38c9e8): Implemented support for the `plugin.info()` method in specialized apps with a default resolved for `package.json` and `catalog-info.yaml`. The default resolution logic can be overridden via the `pluginInfoResolver` option to `createSpecializedApp`, and plugin-specific overrides can be applied via the new `app.pluginOverrides` key in static configuration.

### `@backstage/frontend-defaults` (0.2.2 → [0.3.0](../changelogs/@backstage/frontend-defaults.md#030))

#### 0.3.0

##### Minor Changes

- [`76832a9`](https://github.com/backstage/backstage/commit/76832a9): **BREAKING**: Removed the deprecated `CreateAppFeatureLoader` and support for it in other APIs. Switch existing usage to use the newer `createFrontendFeatureLoader` from `@backstage/frontend-plugin-api` instead.
- [`5e12252`](https://github.com/backstage/backstage/commit/5e12252): **BREAKING**: Restructured some of option fields of `createApp` and `createSpecializedApp`.

  - For `createApp`, all option fields _except_ `features` and `bindRoutes` have been moved into a new `advanced` object field.
  - For `createSpecializedApp`, all option fields _except_ `features`, `config`, and `bindRoutes` have been moved into a new `advanced` object field.

  This helps highlight that some options are meant to rarely be needed or used, and simplifies the usage of those options that are almost always required.

  As an example, if you used to supply a custom config loader, you would update your code as follows:

  ```diff
   createApp({
     features: [...],
  -  configLoader: new MyCustomLoader(),
  +  advanced: {
  +    configLoader: new MyCustomLoader(),
  +  },
   })
  ```

##### Patch Changes

- [`22de964`](https://github.com/backstage/backstage/commit/22de964): Deprecated `createPublicSignInApp`, which has been replaced by the new `appModulePublicSignIn` from `@backstage/plugin-app/alpha` instead.
- [`e4ddf22`](https://github.com/backstage/backstage/commit/e4ddf22): Internal update to align with new blueprint parameter naming in the new frontend system.
- [`8b1bf6e`](https://github.com/backstage/backstage/commit/8b1bf6e): Deprecated new frontend system config setting `app.experimental.packages` to just `app.packages`. The old config will continue working for the time being, but may be removed in a future release.
- [`7adc846`](https://github.com/backstage/backstage/commit/7adc846): Added support for passing through `allowUnknownExtensionConfig` as a flag
- [`e5a0a99`](https://github.com/backstage/backstage/commit/e5a0a99): **BREAKING**: The `loadingComponent` option has been renamed to `loadingElement`, which is now found under `advanced.loadingElement`. The default loading element has also been switched to `<Progress />` from `@backstage/core-components`. This is of course an improvement over the previous `"Loading..."` text, but also helps prevent flicker when the app loading is fast.

#### 0.2.3

##### Patch Changes

- [`fa5650c`](https://github.com/backstage/backstage/commit/fa5650c): Forwarded the new `pluginInfoResolver` option for `createApp`.

### `@backstage/frontend-plugin-api` (0.10.2 → [0.11.0](../changelogs/@backstage/frontend-plugin-api.md#0110))

#### 0.11.0

##### Minor Changes

- [`c5f88b5`](https://github.com/backstage/backstage/commit/c5f88b5): **BREAKING**: Remove deprecated `source` property from the `AppNodeSpec` type, use `AppNodeSpec.plugin` instead.
- [`e4ddf22`](https://github.com/backstage/backstage/commit/e4ddf22): **BREAKING**: The `defaultPath` param of `PageBlueprint` has been renamed to `path`. This change does not affect the compatibility of extensions created with older versions of this blueprint.
- [`fda1bbc`](https://github.com/backstage/backstage/commit/fda1bbc): **BREAKING**: The component system has been overhauled to use `SwappableComponent` instead of `ComponentRef`. Several APIs have been removed and replaced:

  - Removed: `createComponentRef`, `createComponentExtension`, `ComponentRef`, `ComponentsApi`, `componentsApiRef`, `useComponentRef`, `coreComponentRefs`
  - Added: `createSwappableComponent`, `SwappableComponentBlueprint`, `SwappableComponentRef`, `SwappableComponentsApi`, `swappableComponentsApiRef`

  **BREAKING**: The default `componentRefs` and exported `Core*Props` have been removed and have replacement `SwappableComponents` and revised type names instead.

  - The `errorBoundaryFallback` component and `CoreErrorBoundaryFallbackProps` type have been replaced with `ErrorDisplay` swappable component and `CoreErrorDisplayProps` respectively.
  - The `progress` component and `CoreProgressProps` type have been replaced with `Progress` swappable component and `ProgressProps` respectively.
  - The `notFoundErrorPage` component and `CoreNotFoundErrorPageProps` type have been replaced with `NotFoundErrorPage` swappable component and `NotFoundErrorPageProps` respectively.

  **Migration for creating swappable components:**

  ```tsx
  // OLD: Using createComponentRef and createComponentExtension
  import {
    createComponentRef,
    createComponentExtension,
  } from '@backstage/frontend-plugin-api';

  const myComponentRef = createComponentRef<{ title: string }>({
    id: 'my-plugin.my-component',
  });

  const myComponentExtension = createComponentExtension({
    ref: myComponentRef,
    loader: {
      lazy: () => import('./MyComponent').then(m => m.MyComponent),
    },
  });

  // NEW: Using createSwappableComponent and SwappableComponentBlueprint
  import {
    createSwappableComponent,
    SwappableComponentBlueprint,
  } from '@backstage/frontend-plugin-api';

  const MySwappableComponent = createSwappableComponent({
    id: 'my-plugin.my-component',
    loader: () => import('./MyComponent').then(m => m.MyComponent),
  });

  const myComponentExtension = SwappableComponentBlueprint.make({
    name: 'my-component',
    params: {
      component: MySwappableComponent,
      loader: () => import('./MyComponent').then(m => m.MyComponent),
    },
  });
  ```

  **Migration for using components:**

  ```tsx
  // OLD: Using ComponentsApi and useComponentRef
  import {
    useComponentRef,
    componentsApiRef,
    useApi,
    coreComponentRefs,
  } from '@backstage/frontend-plugin-api';

  const MyComponent = useComponentRef(myComponentRef);
  const ProgressComponent = useComponentRef(coreComponentRefs.progress);

  // NEW: Direct component usage
  import { Progress } from '@backstage/frontend-plugin-api';

  // Use directly as React Component
  <Progress />
  <MySwappableComponent title="Hello World" />
  ```

  **Migration for core component references:**

  ```tsx
  // OLD: Core component refs
  import { coreComponentRefs } from '@backstage/frontend-plugin-api';

  coreComponentRefs.progress
  coreComponentRefs.notFoundErrorPage
  coreComponentRefs.errorBoundaryFallback

  // NEW: Direct swappable component imports
  import { Progress, NotFoundErrorPage, ErrorDisplay } from '@backstage/frontend-plugin-api';

  // Use directly as React components
  <Progress />
  <NotFoundErrorPage />
  <ErrorDisplay plugin={plugin} error={error} resetError={resetError} />
  ```

- [`6a75e00`](https://github.com/backstage/backstage/commit/6a75e00): **BREAKING**: Removed the deprecated `createFrontendPlugin` variant where the plugin ID is passed via an `id` option. To update existing code, switch to using the `pluginId` option instead.
- [`12b6db7`](https://github.com/backstage/backstage/commit/12b6db7): **BREAKING**: Added a new `OverridableFrontendPlugin` type that is used as the return value of `createFrontendPlugin`. This type includes the `withOverrides` and `.getExtension` methods that are helpful when creating plugin overrides, while the base `FrontendPlugin` type no longer includes these methods. This is a breaking change for the `AppTreeApi` and some other places where the `FrontendPlugin` type is still used, but also fixes some cases where the extra plugin methods were causing issues.
- [`37f2989`](https://github.com/backstage/backstage/commit/37f2989): **BREAKING**: Removed the `routable` property from `ExtensionBoundary`. This property was never needed in practice and is instead inferred from whether or not the extension outputs a route reference. It can be safely removed.
- [`1e6410b`](https://github.com/backstage/backstage/commit/1e6410b): **BREAKING**: The `ResolveInputValueOverrides` type is no longer exported.
- [`29786f6`](https://github.com/backstage/backstage/commit/29786f6): **BREAKING**: The `NavLogoBlueprint` has been removed and replaced by `NavContentBlueprint`, which instead replaces the entire navbar. The default navbar has also been switched to a more minimal implementation.

  To use `NavContentBlueprint` to install new logos, you can use it as follows:

  ```tsx
  NavContentBlueprint.make({
    params: {
      component: ({ items }) => {
        return compatWrapper(
          <Sidebar>
            <SidebarLogo />

            {/* Other sidebar content */}

            <SidebarScrollWrapper>
              {items.map((item, index) => (
                <SidebarItem {...item} key={index} />
              ))}
            </SidebarScrollWrapper>

            {/* Other sidebar content */}
          </Sidebar>,
        );
      },
    },
  });
  ```

- [`3243fa6`](https://github.com/backstage/backstage/commit/3243fa6): **BREAKING**: Removed the ability to define a default extension `name` in blueprints. This option had no practical purpose as blueprints already use the `kind` to identity the source of the extension.
- [`a082429`](https://github.com/backstage/backstage/commit/a082429): **BREAKING**: The separate `RouteResolutionApiResolveOptions` type has been removed.
- [`5d31d66`](https://github.com/backstage/backstage/commit/5d31d66): **BREAKING**: In an attempt to align some of the API's around providing components to `Blueprints`, we've renamed the parameters for both the `RouterBlueprint` and `AppRootWrapperBlueprint` from `Component` to `component`.

  ```tsx
  // old
  RouterBlueprint.make({
    params: {
      Component: ({ children }) => <div>{children}</div>,
    },
  });

  // new
  RouterBlueprint.make({
    params: {
      component: ({ children }) => <div>{children}</div>,
    },
  });
  ```

  ```tsx
  // old
  AppRootWrapperBlueprint.make({
    params: {
      Component: ({ children }) => <div>{children}</div>,
    },
  });

  // new
  AppRootWrapperBlueprint.make({
    params: {
      component: ({ children }) => <div>{children}</div>,
    },
  });
  ```

  As part of this change, the type for `component` has also changed from `ComponentType<PropsWithChildren<{}>>` to `(props: { children: ReactNode }) => JSX.Element | null` which is not breaking, just a little more reflective of the actual expected component.

- [`45ead4a`](https://github.com/backstage/backstage/commit/45ead4a): **BREAKING**: The `AnyRoutes` and `AnyExternalRoutes` types have been removed and their usage has been inlined instead.

  Existing usage can be replaced according to their previous definitions:

  ```ts
  type AnyRoutes = { [name in string]: RouteRef | SubRouteRef };
  type AnyExternalRoutes = { [name in string]: ExternalRouteRef };
  ```

- [`805c298`](https://github.com/backstage/backstage/commit/805c298): **BREAKING**: The `ApiBlueprint` has been updated to use the new advanced type parameters through the new `defineParams` blueprint option. This is an immediate breaking change that requires all existing usages of `ApiBlueprint` to switch to the new callback format. Existing extensions created with the old format are still compatible with the latest version of the plugin API however, meaning that this does not break existing plugins.

  To update existing usages of `ApiBlueprint`, you remove the outer level of the `params` object and replace `createApiFactory(...)` with `defineParams => defineParams(...)`.

  For example, the following old usage:

  ```ts
  ApiBlueprint.make({
    name: 'error',
    params: {
      factory: createApiFactory({
        api: errorApiRef,
        deps: { alertApi: alertApiRef },
        factory: ({ alertApi }) => {
          return ...;
        },
      })
    },
  })
  ```

  is migrated to the following:

  ```ts
  ApiBlueprint.make({
    name: 'error',
    params: defineParams =>
      defineParams({
        api: errorApiRef,
        deps: { alertApi: alertApiRef },
        factory: ({ alertApi }) => {
          return ...;
        },
      }),
  })
  ```

- [`805c298`](https://github.com/backstage/backstage/commit/805c298): Added support for advanced parameter types in extension blueprints. The primary purpose of this is to allow extension authors to use type inference in the definition of the blueprint parameters. This often removes the need for extra imports and improves discoverability of blueprint parameters.

  This feature is introduced through the new `defineParams` option of `createExtensionBlueprint`, along with accompanying `createExtensionBlueprintParams` function to help implement the new format.

  The following is an example of how to create an extension blueprint that uses the new option:

  ```ts
  const ExampleBlueprint = createExtensionBlueprint({
    kind: 'example',
    attachTo: { id: 'example', input: 'example' },
    output: [exampleComponentDataRef, exampleFetcherDataRef],
    defineParams<T>(params: {
      component(props: ExampleProps<T>): JSX.Element | null;
      fetcher(options: FetchOptions): Promise<FetchResult<T>>;
    }) {
      // The returned params must be wrapped with `createExtensionBlueprintParams`
      return createExtensionBlueprintParams(params);
    },
    *factory(params) {
      // These params are now inferred
      yield exampleComponentDataRef(params.component);
      yield exampleFetcherDataRef(params.fetcher);
    },
  });
  ```

  Usage of the above example looks as follows:

  ```ts
  const example = ExampleBlueprint.make({
    params: defineParams => defineParams({
      component: ...,
      fetcher: ...,
    }),
  });
  ```

  This `defineParams => defineParams(<params>)` is also known as the "callback syntax" and is required if a blueprint is created with the new `defineParams` option. The callback syntax can also optionally be used for other blueprints too, which means that it is not a breaking change to remove the `defineParams` option, as long as the external parameter types remain compatible.

- [`121899a`](https://github.com/backstage/backstage/commit/121899a): **BREAKING**: The `element` param for `AppRootElementBlueprint` no longer accepts a component. If you are currently passing a component such as `element: () => <MyComponent />` or `element: MyComponent`, simply switch to `element: <MyComponent />`.
- [`a321f3b`](https://github.com/backstage/backstage/commit/a321f3b): **BREAKING**: The `CommonAnalyticsContext` has been removed, and inlined into `AnalyticsContextValue` instead.

##### Patch Changes

- [`d9e00e3`](https://github.com/backstage/backstage/commit/d9e00e3): Add support for a new `aliasFor` option for `createRouteRef`. This allows for the creation of a new route ref that acts as an alias for an existing route ref that is installed in the app. This is particularly useful when creating modules that override existing plugin pages, without referring to the existing plugin. For example:

  ```tsx
  export default createFrontendModule({
    pluginId: 'catalog',
    extensions: [
      PageBlueprint.make({
        params: {
          defaultPath: '/catalog',
          routeRef: createRouteRef({ aliasFor: 'catalog.catalogIndex' }),
          loader: () =>
            import('./CustomCatalogIndexPage').then(m => (
              <m.CustomCatalogIndexPage />
            )),
        },
      }),
    ],
  });
  ```

- [`93b5e38`](https://github.com/backstage/backstage/commit/93b5e38): Plugins should now use the new `AnalyticsImplementationBlueprint` to define and provide concrete analytics implementations. For example:

  ```ts
  import { AnalyticsImplementationBlueprint } from '@backstage/frontend-plugin-api';

  const AcmeAnalytics = AnalyticsImplementationBlueprint.make({
    name: 'acme-analytics',
    params: define =>
      define({
        deps: { config: configApiRef },
        factory: ({ config }) => AcmeAnalyticsImpl.fromConfig(config),
      }),
  });
  ```

- [`948de17`](https://github.com/backstage/backstage/commit/948de17): Tweaked the return types from `createExtension` and `createExtensionBlueprint` to avoid the forwarding of `ConfigurableExtensionDataRef` into exported types.
- [`147482b`](https://github.com/backstage/backstage/commit/147482b): Updated the recommended naming of the blueprint param callback from `define` to `defineParams`, making the syntax `defineParams => defineParams(...)`.
- [`3c3c882`](https://github.com/backstage/backstage/commit/3c3c882): Added added defaults for all type parameters of `ExtensionDataRef` and deprecated `AnyExtensionDataRef`, as it is now redundant.
- [`9831f4e`](https://github.com/backstage/backstage/commit/9831f4e): Adjusted the dialog API types to have more sensible defaults
- [`1c2cc37`](https://github.com/backstage/backstage/commit/1c2cc37): Improved runtime error message clarity when extension factories don't return an iterable object.
- [`24558f0`](https://github.com/backstage/backstage/commit/24558f0): Added inline documentation for `createExtension`, `createExtensionBlueprint`, `createFrontendPlugin`, and `createFrontendModule`.

#### 0.10.3

##### Patch Changes

- [`0169b23`](https://github.com/backstage/backstage/commit/0169b23): Internal tweak to avoid circular dependencies
- [`9e3868f`](https://github.com/backstage/backstage/commit/9e3868f): Added a new optional `info` option to `createFrontendPlugin` that lets you provide a loaders for different sources of metadata information about the plugin.

  There are two available loaders. The first one is `info.packageJson`, which can be used to point to a `package.json` file for the plugin. This is recommended for any plugin that is defined within its own package, especially all plugins that are published to a package registry. Typical usage looks like this:

  ```ts
  export default createFrontendPlugin({
    pluginId: '...',
    info: {
      packageJson: () => import('../package.json'),
    },
  });
  ```

  The second loader is `info.manifest`, which can be used to point to an opaque plugin manifest. This **MUST ONLY** be used by plugins that are intended for use within a single organization. Plugins that are published to an open package registry should **NOT** use this loader. The loader is useful for adding additional internal metadata associated with the plugin, and it is up to the Backstage app to decide how these manifests are parsed and used. The default manifest parser in an app created with `createApp` from `@backstage/frontend-defaults` is able to parse the default `catalog-info.yaml` format and built-in fields such as `spec.owner`.

  Typical usage looks like this:

  ```ts
  export default createFrontendPlugin({
    pluginId: '...',
    info: {
      manifest: () => import('../catalog-info.yaml'),
    },
  });
  ```

- [`6f48f71`](https://github.com/backstage/backstage/commit/6f48f71): Added a new `useAppNode` hook, which can be used to get a reference to the `AppNode` from by the closest `ExtensionBoundary`.

### `@backstage/plugin-app` (0.1.9 → [0.2.0](../changelogs/@backstage/plugin-app.md#020))

#### 0.2.0

##### Minor Changes

- [`fda1bbc`](https://github.com/backstage/backstage/commit/fda1bbc): **BREAKING**: The `componentsApi` implementation has been removed from the plugin and replaced with the new `SwappableComponentsApi` instead.

  If you were overriding the `componentsApi` implementation, you can now use the new `SwappableComponentsApi` instead.

  ```ts
  // old
  appPlugin.getExtension('api:app/components').override(...)

  // new
  appPlugin.getExtension('api:app/swappable-components').override(...)
  ```

- [`29786f6`](https://github.com/backstage/backstage/commit/29786f6): Updated the `app/nav` extension to use the new `NavContentBlueprint`, and removed support for extensions created with the now removed `NavLogoBlueprint`.
- [`121899a`](https://github.com/backstage/backstage/commit/121899a): **BREAKING**: The `app-root-element` extension now only accepts `JSX.Element` in its `element` param, meaning overrides need to be updated.

##### Patch Changes

- [`91cbdf4`](https://github.com/backstage/backstage/commit/91cbdf4): Log a warning when `SwappableComponent` extensions are installed outside of using the `app` plugin
- [`fda1bbc`](https://github.com/backstage/backstage/commit/fda1bbc): Default implementations of core components are now provided by this package.

  A backwards compatible `componentsApi` implementation is also provided from this package which uses the `SwappableComponentsApi` as the implementation. This backwards compatible wrapper will be removed in the future.

- [`f2f133c`](https://github.com/backstage/backstage/commit/f2f133c): Internal update to use the new variant of `ApiBlueprint`.
- [`a08f95f`](https://github.com/backstage/backstage/commit/a08f95f): Added a new module for implementing public sign-in apps, exported as `appModulePublicSignIn` via the `/alpha` sub-path export. This replaces the `createPublicSignInApp` export from `@backstage/frontend-defaults`, which is now deprecated.
- [`5d31d66`](https://github.com/backstage/backstage/commit/5d31d66): Updated the usage of the `RouterBlueprint` and `AppRootWrapperBlueprint` to use the lowercase `component` parameter
- [`93b5e38`](https://github.com/backstage/backstage/commit/93b5e38): The default implementation of the Analytics API now collects and instantiates analytics implementations exposed via `AnalyticsImplementationBlueprint` extensions. If no such extensions are discovered, the API continues to do nothing with analytics events fired within Backstage. If multiple such extensions are discovered, every discovered implementation automatically receives analytics events.
- [`9831f4e`](https://github.com/backstage/backstage/commit/9831f4e): Adjusted the dialog API types to have more sensible defaults

#### 0.1.11

##### Patch Changes

- [`09f5e36`](https://github.com/backstage/backstage/commit/09f5e36): Remove trailing slashes in the `AppRoutes` extension to ensure any nested routing behaves correctly.

#### 0.1.10

##### Patch Changes

- [`18c64e9`](https://github.com/backstage/backstage/commit/18c64e9): Added the `info.packageJson` option to the plugin instance for the new frontend system.

### `@backstage/plugin-catalog` (1.30.0 → [1.31.2](../changelogs/@backstage/plugin-catalog.md#1312))

#### 1.31.2

##### Patch Changes

- [`c0ea01b`](https://github.com/backstage/backstage/commit/c0ea01b): Fix card scrolling behaviour
- [`e4ddf22`](https://github.com/backstage/backstage/commit/e4ddf22): Internal update to align with new blueprint parameter naming in the new frontend system.
- [`f2f133c`](https://github.com/backstage/backstage/commit/f2f133c): Internal update to use the new variant of `ApiBlueprint`.
- [`f4622e8`](https://github.com/backstage/backstage/commit/f4622e8): Adding a more sensible default order to the default filters
- [`77eebdc`](https://github.com/backstage/backstage/commit/77eebdc): Support multiple headers in new frontend system, and don't render a header until the entity has finished loading
- [`b158801`](https://github.com/backstage/backstage/commit/b158801): Fixed bug in EntityLayout that caused wiping existing query parameters when opening the InspectEntityDialog.

#### 1.31.1

##### Patch Changes

- [`6991dab`](https://github.com/backstage/backstage/commit/6991dab): Turn on `pagination` by default in new frontend system, and also make configurable
- [`3ab9b96`](https://github.com/backstage/backstage/commit/3ab9b96): Updated card extensions for the new frontend system to use the new entity predicates, and to not show the about card on User and Group pages.

#### 1.31.0

##### Minor Changes

- [`406acb6`](https://github.com/backstage/backstage/commit/406acb6): Add support to customize the about card icon links via `EntityIconLinkBlueprint` and provide a default catalog view catalog source, launch scaffolder template and read techdocs docs icon links extensions.

  **BREAKING ALPHA**

  The `Scaffolder` launch template and `TechDocs` read documentation icons have been extracted from the default `Catalog` about card links and are now provided respectively by the `Scaffolder` and `TechDocs` plugins in the new frontend system. It means that they will not be available unless you install the `TechDocs` and `Scaffolder` plugins. Also If you are using translation for these icon link titles other than the default, you should now translate them using the scaffolder translation reference or the TechDocs translation reference (the translation keys are still the same, `aboutCard.viewTechdocs` and `aboutCard.launchTemplate`).

- [`ec7b35d`](https://github.com/backstage/backstage/commit/ec7b35d): Introduced `backstage.io/techdocs-entity-path` annotation which allows deep linking into another entities TechDocs in conjunction with `backstage.io/techdocs-entity`.

##### Patch Changes

- [`18c64e9`](https://github.com/backstage/backstage/commit/18c64e9): Added the `info.packageJson` option to the plugin instance for the new frontend system.

### `@backstage/plugin-catalog-backend` (2.0.0 → [3.0.1](../changelogs/@backstage/plugin-catalog-backend.md#301))

#### 3.0.1

##### Patch Changes

- [`1752be6`](https://github.com/backstage/backstage/commit/1752be6): Attempt to circumvent event listener memory leak in compression middleware
- [`9658703`](https://github.com/backstage/backstage/commit/9658703): Sort built-in relation fields for more stable entity hash in the processing engine
- [`9dd213c`](https://github.com/backstage/backstage/commit/9dd213c): Make the processing hash calculation not care about the order of the processors.

  This change does not affect the behavior of the catalog, but it will make the processing
  hash calculation more robust against changes in the order of processors. This should lead to
  more stable processing hashes, which in turn should lead to fewer unnecessary reprocessing
  of entities.

  After deploying this fix, you may see a period of increased processing and stitching, but
  this should stabilize over time as the processing hashes become more consistent.

- [`fa6fa60`](https://github.com/backstage/backstage/commit/fa6fa60): Fixed getLocationByEntity to use `original_value` instead of `value` when querying search table
- [`3a7dad9`](https://github.com/backstage/backstage/commit/3a7dad9): Updated `better-sqlite3` to v12

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

#### 2.1.0

##### Minor Changes

- [`2e7adf0`](https://github.com/backstage/backstage/commit/2e7adf0): Implement the action `get-catalog-entity` with the `ActionsRegistry`

##### Patch Changes

- [`2cac8b0`](https://github.com/backstage/backstage/commit/2cac8b0): You can now specify an optional value when applying the `HAS_LABEL` permission rule, similar to the `HAS_ANNOTATION` permission rule.
- [`c83cd8b`](https://github.com/backstage/backstage/commit/c83cd8b): Fixed some circular or otherwise unclear imports
- [`4654a78`](https://github.com/backstage/backstage/commit/4654a78): Update `refresh_state_references.id` to be a big int

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.4.8 → [0.5.2](../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#052))

#### 0.5.0

##### Minor Changes

- [`8a150bf`](https://github.com/backstage/backstage/commit/8a150bf): **BREAKING**: `BitbucketCloudEntityProvider` now accepts a `CatalogService` instead of a `CatalogApi`.

### `@backstage/plugin-catalog-backend-module-gitlab` (0.6.6 → [0.7.2](../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#072))

#### 0.7.2

##### Patch Changes

- [`8dfe76f`](https://github.com/backstage/backstage/commit/8dfe76f): Added support for multiple group patterns instead of a single one to increase flexibility when filtering groups from GitLab.

#### 0.7.0

##### Minor Changes

- [`42bb3b8`](https://github.com/backstage/backstage/commit/42bb3b8): **BREAKING CHANGE**: User and Group discovery will default to ingesting all users in sub groups that belong to the specified root group in config. Disable by setting `restrictUsersToGroup: true` in app-config under your module settings.

##### Patch Changes

- [`57a0bad`](https://github.com/backstage/backstage/commit/57a0bad): Implement retry for GitLab API calls to handle rate limiting

### `@backstage/plugin-catalog-react` (1.18.0 → [1.20.1](../changelogs/@backstage/plugin-catalog-react.md#1201))

#### 1.20.0

##### Minor Changes

- [`3f4da39`](https://github.com/backstage/backstage/commit/3f4da39): Added the `analyzeLocation` method to `catalogApiMock`
- [`e4ddf22`](https://github.com/backstage/backstage/commit/e4ddf22): **BREAKING ALPHA**: The `defaultPath`, `defaultTitle`, and `defaultGroup` params of `PageBlueprint` has been renamed to `path`, `title`, and `group`. The `convertLegacyEntityContentExtension` utility has also received the same change. This change does not affect the compatibility of extensions created with older versions of this blueprint.

##### Patch Changes

- [`77eebdc`](https://github.com/backstage/backstage/commit/77eebdc): Support `filter` parameter on the `EntityHeaderBlueprint`
- [`a3a878d`](https://github.com/backstage/backstage/commit/a3a878d): Adding `type` as an override to the `convertLegacyEntityCardExtension`
- [`defc243`](https://github.com/backstage/backstage/commit/defc243): hide pagination `queryparams` if pagination mode is set to none

#### 1.19.1

##### Patch Changes

- [`a07feb7`](https://github.com/backstage/backstage/commit/a07feb7): Fixed a but in the new alpha entity predicates where the `$in` operator mistakenly case sensitive.
- [`3507fcd`](https://github.com/backstage/backstage/commit/3507fcd): Just some more circular dep cleanup

#### 1.19.0

##### Minor Changes

- [`406acb6`](https://github.com/backstage/backstage/commit/406acb6): Introduces a new `EntityIconLinkBlueprint` that customizes the `About` card icon links on the `Catalog` entity page.

  The blueprint currently accepts a `useProps` hook as `param` and this function returns the following props that will be passed to the icon link component:

  | Name       | Description                                         | Type          | Default Value |
  | ---------- | --------------------------------------------------- | ------------- | ------------- |
  | `icon`     | The icon to display.                                | `JSX.Element` | N/A           |
  | `label`    | The label for the element.                          | `string`      | N/A           |
  | `title`    | The title for the element.                          | `string`      | N/A           |
  | `disabled` | Whether the element is disabled.                    | `boolean`     | `false`       |
  | `href`     | The URL to navigate to when the element is clicked. | `string`      | N/A           |
  | `onClick`  | A function to call when the element is clicked.     | `() => void`  | N/A           |

  Here is an usage example:

  ```tsx
  import { EntityIconLinkBlueprint } from '@backstage/plugin-catalog-react/alpha';
  //...

  EntityIconLinkBlueprint.make({
    name: 'my-icon-link',
    params: {
      useProps() {
        const { t } = useTranslationRef(myIconLinkTranslationRef);
        return {
          label: t('myIconLink.label'),
          icon: <MyIconLinkIcon />,
          href: '/my-plugin',
        };
      },
    },
  });
  ```

  Additionally, the `app-config.yaml` file allows you to override some of the default icon link parameters, including `label` and `title` values. Here's how to set them:

  ```yaml
  app:
    extensions:
      - entity-icon-link:my-plugin/my-icon-link:
          config:
            label: 'My Custom Icon Link label'
  ```

  Finally, you can disable all links if you want to hide the About card header completely (useful, for example, when links are displayed on separate cards). The header is hidden when no icon links extensions are enabled.

### `@backstage/plugin-home` (0.8.8 → [0.8.11](../changelogs/@backstage/plugin-home.md#0811))

#### 0.8.11

##### Patch Changes

- [`e4ddf22`](https://github.com/backstage/backstage/commit/e4ddf22): Internal update to align with new blueprint parameter naming in the new frontend system.
- [`f16d380`](https://github.com/backstage/backstage/commit/f16d380): Add the missing Visits API to the alpha plugin, fixing a crash due to the API not being installed.
- [`f2f133c`](https://github.com/backstage/backstage/commit/f2f133c): Internal update to use the new variant of `ApiBlueprint`.
- [`121899a`](https://github.com/backstage/backstage/commit/121899a): **BREAKING ALPHA**: The `app-root-element` extension now only accepts `JSX.Element` in its `element` param, meaning overrides need to be updated.
- [`166dfd7`](https://github.com/backstage/backstage/commit/166dfd7): Fixed bug in CustomHomepageGrid where `clearAll` did not respect the `deletable` flag on widgets

#### 0.8.10

##### Patch Changes

- [`d52d67f`](https://github.com/backstage/backstage/commit/d52d67f): Added a New Frontend System App Root Element for the `<VisitListener />` component

#### 0.8.9

##### Patch Changes

- [`18c64e9`](https://github.com/backstage/backstage/commit/18c64e9): Added the `info.packageJson` option to the plugin instance for the new frontend system.
- [`0ebad54`](https://github.com/backstage/backstage/commit/0ebad54): Fixed the `WelcomeTitle` to properly default to the previous value of `inherit`
- [`cef60db`](https://github.com/backstage/backstage/commit/cef60db): Home plugin support i18n

### `@backstage/plugin-kubernetes-backend` (0.19.6 → [0.20.1](../changelogs/@backstage/plugin-kubernetes-backend.md#0201))

#### 0.20.0

##### Minor Changes

- [`759568d`](https://github.com/backstage/backstage/commit/759568d): **BREAKING CHANGE**: Removed support for the legacy backend system. This means that the deprecated `createRouter` and `KubernetesBuilder` and related types have been removed. Please refer to the [relevant documentation](https://backstage.io/docs/features/kubernetes/installation/#adding-kubernetes-backend-plugin) to configure the Kubernetes plugin.

  **BREAKING CHANGE**: The deprecated types `AuthenticationStrategy`, `AuthMetadata`, `ClusterDetails`, `CustomResource`, `CustomResourcesByEntity`, `FetchResponseWrapper`, `KubernetesBuilder`, `KubernetesBuilderReturn`, `KubernetesClustersSupplier`, `KubernetesCredential`, `KubernetesEnvironment`, `KubernetesFetcher`, `KubernetesObjectsProvider`, `KubernetesObjectTypes`, `KubernetesServiceLocator`,`ObjectFetchParams`, `ObjectToFetch`,`RouterOptions` and `ServiceLocatorRequestContext` should all now be imported from `@backstage/plugin-kubernetes-node`.

##### Patch Changes

- [`00ebaeb`](https://github.com/backstage/backstage/commit/00ebaeb): Remove usage of the deprecated `loggerToWinstonLogger` from `@backstage/backend-common`.
- [`79e342e`](https://github.com/backstage/backstage/commit/79e342e): Added support for providing a factory to the extension points
- [`5f424c6`](https://github.com/backstage/backstage/commit/5f424c6): Added support for Google Service account credentials config to use in GoogleServiceAccountStrategy

### `@backstage/plugin-scaffolder` (1.31.0 → [1.34.0](../changelogs/@backstage/plugin-scaffolder.md#1340))

#### 1.34.0

##### Minor Changes

- [`c08cbc4`](https://github.com/backstage/backstage/commit/c08cbc4): Move Scaffolder API to OpenAPI
- [`b1c0696`](https://github.com/backstage/backstage/commit/b1c0696): Add resizable panels width for the editor and preview panels in the template editor and template form playground layouts. Users can now resize these panels by dragging the divider between the two areas.

##### Patch Changes

- [`e4ddf22`](https://github.com/backstage/backstage/commit/e4ddf22): Internal update to align with new blueprint parameter naming in the new frontend system.
- [`f2f133c`](https://github.com/backstage/backstage/commit/f2f133c): Internal update to use the new variant of `ApiBlueprint`.
- [`b0dc9b8`](https://github.com/backstage/backstage/commit/b0dc9b8): differentiate between entirely and partially composite schemas in schema rendering
- [`c4b7c50`](https://github.com/backstage/backstage/commit/c4b7c50): Export `FormField` type from `/alpha` in `-react` package, and internal refactor.

#### 1.33.0

##### Minor Changes

- [`c1ce316`](https://github.com/backstage/backstage/commit/c1ce316): BREAKING `/alpha`: Converted `scaffolder.task.read` and `scaffolder.task.cancel` into Resource Permissions.

  BREAKING `/alpha`: Added a new scaffolder rule `isTaskOwner` for `scaffolder.task.read` and `scaffolder.task.cancel` to allow for conditional permission policies such as restricting access to tasks and task events based on task creators.

  BREAKING `/alpha`: Retrying a task now requires both `scaffolder.task.read` and `scaffolder.task.create` permissions, replacing the previous requirement of `scaffolder.task.read` and `scaffolder.task.cancel`.

##### Patch Changes

- [`289e4a1`](https://github.com/backstage/backstage/commit/289e4a1): Filter MultiEntityPicker options based on rendered option value

#### 1.32.0

##### Minor Changes

- [`6c972fe`](https://github.com/backstage/backstage/commit/6c972fe): Added information about the `entityRef` and `taskId` to the analytics events whenever is possible.
- [`3c59ece`](https://github.com/backstage/backstage/commit/3c59ece): **New Frontend System Only:**
  The `Scaffolder` plugin is now responsible for providing an entity icon link extension to launch templates from the catalog entity page.

##### Patch Changes

- [`d781b33`](https://github.com/backstage/backstage/commit/d781b33): render details for composite property schemas
- [`18c64e9`](https://github.com/backstage/backstage/commit/18c64e9): Added the `info.packageJson` option to the plugin instance for the new frontend system.
- [`b00c160`](https://github.com/backstage/backstage/commit/b00c160): Remove React import form notification and scaffolder plugin
- [`95a1d72`](https://github.com/backstage/backstage/commit/95a1d72): Added appropriate message when global templating function metadata is absent.

### `@backstage/plugin-scaffolder-backend` (1.33.0 → [2.2.0](../changelogs/@backstage/plugin-scaffolder-backend.md#220))

#### 2.2.0

##### Minor Changes

- [`c08cbc4`](https://github.com/backstage/backstage/commit/c08cbc4): Move Scaffolder API to OpenAPI
- [`2032660`](https://github.com/backstage/backstage/commit/2032660): Fixed fs:readdir action example
- [`11dc90f`](https://github.com/backstage/backstage/commit/11dc90f): Implement max length for scaffolder auditor audit logging with default of 256
- [`812485c`](https://github.com/backstage/backstage/commit/812485c): Add step info to scaffolder action context to access the step id and name.

##### Patch Changes

- [`caee2eb`](https://github.com/backstage/backstage/commit/caee2eb): Fixed WinstonLogger throwing when redactions were null or undefined
- [`4ae87f5`](https://github.com/backstage/backstage/commit/4ae87f5): add `getResources` method to `permissionIntegrationRouter` for frontend task permission checks
- [`b817c1d`](https://github.com/backstage/backstage/commit/b817c1d): Stop logging of `SPLAT` twice in logs

#### 2.1.0

##### Minor Changes

- [`c1ce316`](https://github.com/backstage/backstage/commit/c1ce316): BREAKING `/alpha`: Converted `scaffolder.task.read` and `scaffolder.task.cancel` into Resource Permissions.

  BREAKING `/alpha`: Added a new scaffolder rule `isTaskOwner` for `scaffolder.task.read` and `scaffolder.task.cancel` to allow for conditional permission policies such as restricting access to tasks and task events based on task creators.

  BREAKING `/alpha`: Retrying a task now requires both `scaffolder.task.read` and `scaffolder.task.create` permissions, replacing the previous requirement of `scaffolder.task.read` and `scaffolder.task.cancel`.

##### Patch Changes

- [`424610a`](https://github.com/backstage/backstage/commit/424610a): Scaffolder audit Log now includes taskId and createdBy
- [`dbde180`](https://github.com/backstage/backstage/commit/dbde180): An internal refactor which adds additional types to experimental checkpoints
- [`fc70b43`](https://github.com/backstage/backstage/commit/fc70b43): Replaced deprecated uses of `@backstage/backend-common` with the equivalents in `@backstage/backend-defaults` and `@backstage/backend-plugin-api`.

#### 2.0.0

##### Major Changes

- [`33394db`](https://github.com/backstage/backstage/commit/33394db): **BREAKING CHANGES**

  Removal of deprecated re-exports from module packages.

  The following functions have been re-exported from the `scaffolder-backend` plugin for quite some time, and now it's time to clean them up. They've been moved as follows:

  - `createPublishAzureAction` should be imported from `@backstage/plugin-scaffolder-backend-module-azure` instead.

  - `createPublishBitbucketCloudAction` should be imported from `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` instead.

  - `createPublishBitbucketServerAction` and `createPublishBitbucketServerPullRequestAction` can be imported from `@backstage/plugin-scaffolder-backend-module-bitbucket-server` instead.

  - `createPublishBitbucketAction` should be imported from `@backstage/plugin-scaffolder-backend-module-bitbucket` instead.

  - `createPublishGerritAction` and `createPublishGerritReviewAction` can be imported from `@backstage/plugin-scaffolder-backend-module-gerrit` instead.

  - `createGithubActionsDispatchAction`, `createGithubDeployKeyAction`, `createGithubEnvironmentAction`, `createGithubIssuesLabelAction`, `CreateGithubPullRequestActionOptions`, `createGithubRepoCreateAction`, `createGithubRepoPushAction`, `createGithubWebhookAction`, and `createPublishGithubAction` can be imported from `@backstage/plugin-scaffolder-backend-module-github` instead.

  - `createPublishGitlabAction` should be imported from `@backstage/plugin-scaffolder-backend-module-gitlab` instead.

  - `ActionContext`. `createTemplateAction`, `executeShellCommand`, `ExecuteShellCommandOptions`, `fetchContents`, `TaskSecrets`, and `TemplateAction` should be imported from `@backstage/plugin-scaffolder-node` instead.

  - `ScaffolderEntitiesProcessor` should be imported from `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` instead.

- [`a8fcf04`](https://github.com/backstage/backstage/commit/a8fcf04): **BREAKING ALPHA**: The `/alpha` export no longer exports the plugin. Please use `import('@backstage/plugin-scaffolder-backend')` instead as this has been removed.

  **BREAKING CHANGES**: The old `createRouter` function which was used in the old backend system has been removed along with the `RouterOptions` type.

- [`73b94d7`](https://github.com/backstage/backstage/commit/73b94d7): **BREAKING CHANGES**

  The following functions have been re-exported from the `scaffolder-backend` plugin for quite some time, and now it's time to clean them up. They've been moved as follows:

  - `SerializedTask`, `SerializedTaskEvent`, `TaskBroker`, `TaskBrokerDispatchOptions`, `TaskBrokerDispatchResult`, `TaskCompletionState`, `TaskContext`, `TaskEventType`, `TaskStatus`, `TemplateFilter`, and `TemplateGlobal` should be imported from `@backstage/plugin-scaffolder-node` instead.

  - The deprecated `copyWithoutRender` option has been removed from `fetch:template` action. You should rename the option to `copyWithoutTemplating` instead.

- [`5863b04`](https://github.com/backstage/backstage/commit/5863b04): **BREAKING CHANGES**

  - The `createBuiltinActions` method has been removed, as this should no longer be needed with the new backend system route, and was only useful when passing the default list of actions again in the old backend system. You should be able to rely on the default behaviour of the new backend system which is to merge the actions.

  - The `createCatalogRegisterAction` and `createFetchCatalogEntityAction` actions no longer require an `AuthService`, and now accepts a `CatalogService` instead of `CatalogClient`.

  Unless you're providing your own override action to the default, this should be a non-breaking change.

  You can migrate using the following if you're getting typescript errors:

  ```ts
  import { catalogServiceRef } from '@backstage/plugin-catalog-node';
  import { scaffolderActionsExtensionPoint } from '@backstage/plugin-scaffolder-node/alpha';

  export const myModule = createBackendModule({
    pluginId: 'scaffolder',
    moduleId: 'test',
    register({ registerInit }) {
      registerInit({
        deps: {
          scaffolder: scaffolderActionsExtensionPoint,
          catalog: catalogServiceRef,
        },
        async init({ scaffolder, catalog }) {
          scaffolder.addActions(
            createCatalogRegisterAction({
              catalog,
            }),
            createFetchCatalogEntityAction({
              catalog,
              integrations,
            }),
          );
        },
      });
    },
  });
  ```

##### Minor Changes

- [`73b94d7`](https://github.com/backstage/backstage/commit/73b94d7): **DEPRECATIONS**

  The following types and implementations have been deprecated, either because they're no longer relevant, or because upcoming changes to the `scaffolder-backend` after `2.0.0` will influence the changes to these API surfaces.

  - `CreateWorkerOptions`
  - `DatabaseTaskStore`
  - `DatabaseTaskStoreOptions`
  - `TaskManager`
  - `TaskStoreCreateTaskOptions`
  - `TaskStoreCreateTaskResult`
  - `TaskStoreEmitOptions`
  - `TaskStoreListEventsOptions`
  - `TaskStoreRecoverTaskOptions`
  - `TaskStoreShutDownTaskOptions`

  There is no current path off deprecation, these types are going to be removed and rethought with a better way to define workers in the new backend system.

##### Patch Changes

- [`89a941d`](https://github.com/backstage/backstage/commit/89a941d): Migrating to latest action format
- [`023629e`](https://github.com/backstage/backstage/commit/023629e): Enable usage of secrets within 'each' step of software templates. For example, you can now structure your `each` step like this:

  ```
  each:
    [
      { name: "Service1", token: "${{ secrets.token1 }}" },
      { name: "Service2", token: "${{ secrets.token2 }}" },
    ]
  ```

- [`e92e481`](https://github.com/backstage/backstage/commit/e92e481): Add tests for Scaffolder

### `@backstage/plugin-scaffolder-backend-module-github` (0.7.1 → [0.8.2](../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#082))

#### 0.8.2

##### Patch Changes

- [`a22cce0`](https://github.com/backstage/backstage/commit/a22cce0): Fixed bug in the `customProperties` type which was preventing it being used to set a list of values against a key (e.g. for multi-select fields)

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

#### 0.8.0

##### Minor Changes

- [`5863b04`](https://github.com/backstage/backstage/commit/5863b04): **BREAKING CHANGES**

  The `createGithubEnvironmentAction` action no longer requires an `AuthService`, and now accepts a `CatalogService` instead of `CatalogClient`.

  Unless you're providing your own override action to the default, this should be a non-breaking change.

  You can migrate using the following if you're getting typescript errors:

  ```ts
  import { catalogServiceRef } from '@backstage/plugin-catalog-node';
  import { scaffolderActionsExtensionPoint } from '@backstage/plugin-scaffolder-node/alpha';

  export const myModule = createBackendModule({
    pluginId: 'scaffolder',
    moduleId: 'test',
    register({ registerInit }) {
      registerInit({
        deps: {
          scaffolder: scaffolderActionsExtensionPoint,
          catalog: catalogServiceRef,
        },
        async init({ scaffolder, catalog }) {
          scaffolder.addActions(
            createGithubEnvironmentAction({
              catalog,
            }),
          );
        },
      });
    },
  });
  ```

##### Patch Changes

- [`575c76b`](https://github.com/backstage/backstage/commit/575c76b): Migrate to using new actions

### `@backstage/plugin-scaffolder-common` (1.5.11 → [1.7.0](../changelogs/@backstage/plugin-scaffolder-common.md#170))

#### 1.7.0

##### Minor Changes

- [`c08cbc4`](https://github.com/backstage/backstage/commit/c08cbc4): Move Scaffolder API to OpenAPI

#### 1.6.0

##### Minor Changes

- [`c1ce316`](https://github.com/backstage/backstage/commit/c1ce316): BREAKING `/alpha`: Converted `scaffolder.task.read` and `scaffolder.task.cancel` into Resource Permissions.

  BREAKING `/alpha`: Added a new scaffolder rule `isTaskOwner` for `scaffolder.task.read` and `scaffolder.task.cancel` to allow for conditional permission policies such as restricting access to tasks and task events based on task creators.

  BREAKING `/alpha`: Retrying a task now requires both `scaffolder.task.read` and `scaffolder.task.create` permissions, replacing the previous requirement of `scaffolder.task.read` and `scaffolder.task.cancel`.

### `@backstage/plugin-scaffolder-node` (0.8.2 → [0.11.0](../changelogs/@backstage/plugin-scaffolder-node.md#0110))

#### 0.11.0

##### Minor Changes

- [`c08cbc4`](https://github.com/backstage/backstage/commit/c08cbc4): Move Scaffolder API to OpenAPI

##### Patch Changes

- [`812485c`](https://github.com/backstage/backstage/commit/812485c): Add step info to scaffolder action context to access the step id and name.

#### 0.10.0

##### Minor Changes

- [`c1ce316`](https://github.com/backstage/backstage/commit/c1ce316): BREAKING `/alpha`: Converted `scaffolder.task.read` and `scaffolder.task.cancel` into Resource Permissions.

  BREAKING `/alpha`: Added a new scaffolder rule `isTaskOwner` for `scaffolder.task.read` and `scaffolder.task.cancel` to allow for conditional permission policies such as restricting access to tasks and task events based on task creators.

  BREAKING `/alpha`: Retrying a task now requires both `scaffolder.task.read` and `scaffolder.task.create` permissions, replacing the previous requirement of `scaffolder.task.read` and `scaffolder.task.cancel`.

##### Patch Changes

- [`dbde180`](https://github.com/backstage/backstage/commit/dbde180): An internal refactor which adds additional types to experimental checkpoints

#### 0.9.0

##### Minor Changes

- [`5863b04`](https://github.com/backstage/backstage/commit/5863b04): **BREAKING CHANGES**

  The legacy methods to define `createTemplateActions` have been replaced with the new native `zod` approaches for defining input and output schemas.

  You can migrate actions that look like the following with the below examples:

  ```ts
  // really old legacy json schema
  createTemplateAction<{ repoUrl: string }, { repoOutput: string }>({
    id: 'test',
    schema: {
      input: {
        type: 'object'
        required: ['repoUrl']
        properties: {
          repoUrl: {
            type: 'string',
            description: 'repository url description'
          }
        }
      }
    }
  });

  // old zod method
  createTemplateAction({
    id: 'test'
    schema: {
      input: {
        repoUrl: z.string({ description: 'repository url description' })
      }
    }
  })

  // new method:
  createTemplateAction({
    id: 'test',
    schema: {
      input: {
        repoUrl: z => z.string({ description: 'repository url description' })
      }
    }
  })

  // or for more complex zod types like unions
  createTemplateAction({
    id: 'test',
    schema: {
      input: z => z.object({
        repoUrl: z.string({ description: 'repository url description' })
      })
    }
  })
  ```

  This breaking change also means that `logStream` has been removed entirely from `ActionsContext`, and that the `logger` is now just a `LoggerService` implementation instead. There is no replacement for the `logStream`, if you wish to still keep using a `logStream` we recommend that you create your own stream that writes to `ctx.logger` instead.

##### Patch Changes

- [`e89d7b6`](https://github.com/backstage/backstage/commit/e89d7b6): Use `LoggerService` instead of `Logger`. This is a non-breaking change, as the `LoggerService` is a subset of the `Logger` interface.
- [`9c8ff0c`](https://github.com/backstage/backstage/commit/9c8ff0c): Update pull request creation filter to include .gitignore files in the created pull request

### `@backstage/plugin-scaffolder-node-test-utils` (0.2.2 → [0.3.2](../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#032))

#### 0.3.2

##### Patch Changes

- [`812485c`](https://github.com/backstage/backstage/commit/812485c): Add step info to scaffolder action context to access the step id and name.

#### 0.3.1

##### Patch Changes

- [`dbde180`](https://github.com/backstage/backstage/commit/dbde180): An internal refactor which adds additional types to experimental checkpoints

#### 0.3.0

##### Minor Changes

- [`3cea7ee`](https://github.com/backstage/backstage/commit/3cea7ee): **BREAKING CHANGES**

  Because of the removal of the `logStream` property to the `ActionsContext` this has been removed from the `createMockActionContext` method.

  You can remove this as it's no longer supported in the scaffolder actions.

### `@backstage/plugin-scaffolder-react` (1.16.0 → [1.19.0](../changelogs/@backstage/plugin-scaffolder-react.md#1190))

#### 1.19.0

##### Minor Changes

- [`4f99e10`](https://github.com/backstage/backstage/commit/4f99e10): **DEPRECATION**: The following types have been deprecated from this package and moved into `@backstage/plugin-scaffolder-common` and should be imported from there instead.

  `Action`, `ListActionsResponse`, `LogEvent`, `ScaffolderApi`, `ScaffolderDryRunOptions`, `ScaffolderDryRunResponse`, `ScaffolderGetIntegrationsListOptions`, `ScaffolderGetIntegrationsListResponse`,
  `ScaffolderOutputLink`, `ScaffolderOutputText`, `ScaffolderScaffoldOptions`, `ScaffolderScaffoldResponse`, `ScaffolderStreamLogsOptions`, `ScaffolderTask`, `ScaffolderTaskOutput`, `ScaffolderTaskStatus`,
  `ScaffolderUsageExample`, `TemplateFilter`, `TemplateGlobalFunction`, `TemplateGlobalValue`, `TemplateParameterSchema`.

- [`c08cbc4`](https://github.com/backstage/backstage/commit/c08cbc4): Move Scaffolder API to OpenAPI

##### Patch Changes

- [`f2f133c`](https://github.com/backstage/backstage/commit/f2f133c): Internal update to use the new variant of `ApiBlueprint`.
- [`c4b7c50`](https://github.com/backstage/backstage/commit/c4b7c50): Export `FormField` type from `/alpha` in `-react` package, and internal refactor.

#### 1.18.0

##### Minor Changes

- [`c1ce316`](https://github.com/backstage/backstage/commit/c1ce316): BREAKING `/alpha`: Converted `scaffolder.task.read` and `scaffolder.task.cancel` into Resource Permissions.

  BREAKING `/alpha`: Added a new scaffolder rule `isTaskOwner` for `scaffolder.task.read` and `scaffolder.task.cancel` to allow for conditional permission policies such as restricting access to tasks and task events based on task creators.

  BREAKING `/alpha`: Retrying a task now requires both `scaffolder.task.read` and `scaffolder.task.create` permissions, replacing the previous requirement of `scaffolder.task.read` and `scaffolder.task.cancel`.

##### Patch Changes

- [`94c11a5`](https://github.com/backstage/backstage/commit/94c11a5): Scroll to the top of the page when navigating between steps in template forms.

#### 1.17.0

##### Minor Changes

- [`6c972fe`](https://github.com/backstage/backstage/commit/6c972fe): Added information about the `entityRef` and `taskId` to the analytics events whenever is possible.

### `@backstage/plugin-signals` (0.0.19 → [0.0.22](../changelogs/@backstage/plugin-signals.md#0022))

#### 0.0.22

##### Patch Changes

- [`f2f133c`](https://github.com/backstage/backstage/commit/f2f133c): Internal update to use the new variant of `ApiBlueprint`.
- [`121899a`](https://github.com/backstage/backstage/commit/121899a): **BREAKING ALPHA**: The `app-root-element` extension now only accepts `JSX.Element` in its `element` param, meaning overrides need to be updated.

#### 0.0.21

##### Patch Changes

- [`d52d67f`](https://github.com/backstage/backstage/commit/d52d67f): Added a New Frontend System App Root Element for the `<SignalsDisplay />` component

#### 0.0.20

##### Patch Changes

- [`18c64e9`](https://github.com/backstage/backstage/commit/18c64e9): Added the `info.packageJson` option to the plugin instance for the new frontend system.

## 0.x minor version bumps

### `@backstage/backend-defaults` (0.10.0 → [0.12.0](../changelogs/@backstage/backend-defaults.md#0120))

#### 0.12.0

##### Minor Changes

- [`133519b`](https://github.com/backstage/backstage/commit/133519b): feat: new cache manager `Infinispan Data Grid`

##### Patch Changes

- [`caee2eb`](https://github.com/backstage/backstage/commit/caee2eb): Fixed WinstonLogger throwing when redactions were null or undefined
- [`ed74af5`](https://github.com/backstage/backstage/commit/ed74af5): Fixed bug in PackageDiscoveryService where packages with "exports" field caused ERR_PACKAGE_PATH_NOT_EXPORTED error during backend startup.
- [`3a7dad9`](https://github.com/backstage/backstage/commit/3a7dad9): Updated `better-sqlite3` to v12

#### 0.11.1

##### Patch Changes

- [`ead925a`](https://github.com/backstage/backstage/commit/ead925a): Add a standard `toString` on credentials objects
- [`e0189b8`](https://github.com/backstage/backstage/commit/e0189b8): UrlReader: Fix handling of access tokens for GitLab readURL requests
- [`d1e4a6d`](https://github.com/backstage/backstage/commit/d1e4a6d): Fixed bug where the GitLab user token and GitLab integration token were being merged together

#### 0.11.0

##### Minor Changes

- [`3ccb7fc`](https://github.com/backstage/backstage/commit/3ccb7fc): Enhanced error handling in the auditor service factory to pass errors as objects. Aligned WinstonRootAuditorService with the default service factory's error handling.

##### Patch Changes

- [`1220cf8`](https://github.com/backstage/backstage/commit/1220cf8): Added new rate limit middleware to allow rate limiting requests to the backend

  If you are using the `configure` callback of the root HTTP router service and do NOT call `applyDefaults()` inside it, please see [the relevant changes](https://github.com/backstage/backstage/pull/28708/files#diff-86ad1b6a694dd250823aee39d410428dd837c9d9a04ca8c33bd1081fbe3f22af) that were made, to see if you want to apply them as well to your custom configuration.
  Rate limiting can be turned on by adding the following configuration to `app-config.yaml`:

  ```yaml
  backend:
    rateLimit:
      window: 6s
      incomingRequestLimit: 100
  ```

  Plugin specific rate limiting can be configured by adding the following configuration to `app-config.yaml`:

  ```yaml
  backend:
    rateLimit:
      global: false # This will disable the global rate limiting
      plugin:
        catalog:
          window: 6s
          incomingRequestLimit: 100
  ```

- [`c999c25`](https://github.com/backstage/backstage/commit/c999c25): Added some default implementations for the experimental `ActionsService` and `ActionsRegistryService` under `/alpha` that allow registration of actions for a particular plugin.

### `@backstage/backend-openapi-utils` (0.5.3 → [0.6.0](../changelogs/@backstage/backend-openapi-utils.md#060))

#### 0.6.0

##### Minor Changes

- [`c08cbc4`](https://github.com/backstage/backstage/commit/c08cbc4): Move Scaffolder API to OpenAPI

##### Patch Changes

- [`3760352`](https://github.com/backstage/backstage/commit/3760352): Update `express-openapi-validator` to 5.5.8 to fix security vulnerability in transitive dependency `multer`

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.4.1 → [0.5.2](../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#052))

#### 0.5.0

##### Minor Changes

- [`eb8b3aa`](https://github.com/backstage/backstage/commit/eb8b3aa): Add validateLocationsExist option to avoid generating locations for catalog-info.yaml files that do not exist in the source repository.

### `@backstage/plugin-catalog-backend-module-github` (0.9.0 → [0.10.2](../changelogs/@backstage/plugin-catalog-backend-module-github.md#0102))

#### 0.10.2

##### Patch Changes

- [`d421b16`](https://github.com/backstage/backstage/commit/d421b16): This change introduces single user versions of the user group resolution code in the multi org provider that will not page through all membership when updating a single user.
- [`f6c64d1`](https://github.com/backstage/backstage/commit/f6c64d1): Fix GitHub catalog entity provider branch matching on event processing.

#### 0.10.0

##### Minor Changes

- [`7c0dfb0`](https://github.com/backstage/backstage/commit/7c0dfb0): GitHub organization now matches in a case-insensitive manner when processing events.

### `@backstage/plugin-notifications-common` (0.0.8 → [0.1.0](../changelogs/@backstage/plugin-notifications-common.md#010))

#### 0.1.0

##### Minor Changes

- [`9152ba8`](https://github.com/backstage/backstage/commit/9152ba8): Add an optional generic object `metadata` field to `NotificationPayload`. Metadata can be used to store additional unstructured data for the notification and are available to use by processors.

#### 0.0.9

##### Patch Changes

- [`1fb5f06`](https://github.com/backstage/backstage/commit/1fb5f06): Adds ability for user to turn on/off notifications for specific topics within an origin.

### `@backstage/repo-tools` (0.13.4 → [0.15.1](../changelogs/@backstage/repo-tools.md#0151))

#### 0.15.1

##### Patch Changes

- [`33060b5`](https://github.com/backstage/backstage/commit/33060b5): Removed build-in ignore of the `packages/canon` package for knip reports.
- [`225d7c2`](https://github.com/backstage/backstage/commit/225d7c2): Added `stringEnums` to `mustache` templates

#### 0.15.0

##### Minor Changes

- [`1e7082e`](https://github.com/backstage/backstage/commit/1e7082e): Clear output directory before running `package-docs` and skip all internal packages.

#### 0.14.0

##### Minor Changes

- [`bf9a173`](https://github.com/backstage/backstage/commit/bf9a173): Add support for caching the per-package output from the `package-docs` command.

##### Patch Changes

- [`4bff5d0`](https://github.com/backstage/backstage/commit/4bff5d0): Fixed a bug where linting would fail with the generated clients when defining top-level `enum` schema values.
- [`2d20024`](https://github.com/backstage/backstage/commit/2d20024): Fix an issue where errors were not printed to console when running `backstage-repo-tools schema openapi generate` without the `--watch` flag.
- [`e643ee4`](https://github.com/backstage/backstage/commit/e643ee4): Add missing highlight language for the `package-docs` command.
- [`c83cd8b`](https://github.com/backstage/backstage/commit/c83cd8b): Fixed some circular or otherwise unclear imports
- [`a372bf1`](https://github.com/backstage/backstage/commit/a372bf1): Updated dependency `@electric-sql/pglite` to `^0.3.0`.

## 0.x patch version bumps

### `@backstage/backend-dynamic-feature-service` (0.7.0 → [0.7.3](../changelogs/@backstage/backend-dynamic-feature-service.md#073))

#### 0.7.2

##### Patch Changes

- [`3507fcd`](https://github.com/backstage/backstage/commit/3507fcd): Just some more circular dep cleanup
- [`3d61c36`](https://github.com/backstage/backstage/commit/3d61c36): Fix wrong imports which lead to module initialization failures when enabling dynamic plugins.

#### 0.7.1

##### Patch Changes

- [`c83cd8b`](https://github.com/backstage/backstage/commit/c83cd8b): Fixed some circular or otherwise unclear imports

### `@backstage/cli-node` (0.2.13 → [0.2.14](../changelogs/@backstage/cli-node.md#0214))

#### 0.2.14

##### Patch Changes

- [`d9a7835`](https://github.com/backstage/backstage/commit/d9a7835): Add `get` and `keys` methods to `Lockfile` class

### `@backstage/core-components` (0.17.2 → [0.17.5](../changelogs/@backstage/core-components.md#0175))

#### 0.17.5

##### Patch Changes

- [`1de1186`](https://github.com/backstage/backstage/commit/1de1186): Added missing space for alert display component
- [`77467bb`](https://github.com/backstage/backstage/commit/77467bb): Updated dependency `linkifyjs` to `4.3.2`.
- [`5563605`](https://github.com/backstage/backstage/commit/5563605): Added `FavoriteToggleProps`.

#### 0.17.4

##### Patch Changes

- [`f6ffea6`](https://github.com/backstage/backstage/commit/f6ffea6): Add optional message field for auth providers. This is intended to be a user friendly message that displays in the OAuth request dialog. A default message will be displayed if one is not provided.
- [`aa3b054`](https://github.com/backstage/backstage/commit/aa3b054): Added `signIn` and `signOut` analytic events to the `@backstage/core-components` of sign in and sign out.

#### 0.17.3

##### Patch Changes

- [`6232160`](https://github.com/backstage/backstage/commit/6232160): table actions header support i18n

### `@backstage/eslint-plugin` (0.1.10 → [0.1.11](../changelogs/@backstage/eslint-plugin.md#0111))

#### 0.1.11

##### Patch Changes

- [`098ef95`](https://github.com/backstage/backstage/commit/098ef95): Fix custom rules package scanning performance.
- [`063b2d3`](https://github.com/backstage/backstage/commit/063b2d3): Added new eslint rule to restrict mixed plugin imports.

  New rule `@backstage/no-mixed-plugin-imports` disallows mixed imports between plugins that are mixing
  the backstage architecture. This rule forces that:

  - No imports from frontend plugins to backend plugins or other frontend plugins.
  - No imports from backend plugins to frontend plugins or other backend plugins.
  - No imports from common plugins to frontend or backend plugins.

  The current recommended configuration is giving a warning for mixed imports. This is to be changed in
  the future to an error so please adjust your workspace accordingly.

### `@backstage/frontend-test-utils` (0.3.2 → [0.3.5](../changelogs/@backstage/frontend-test-utils.md#035))

#### 0.3.5

##### Patch Changes

- [`df7bd3b`](https://github.com/backstage/backstage/commit/df7bd3b): Updated import of the `FrontendFeature` type.
- [`5d31d66`](https://github.com/backstage/backstage/commit/5d31d66): Updated the usage of the `RouterBlueprint` and `AppRootWrapperBlueprint` to use the lowercase `component` parameter

### `@backstage/plugin-api-docs` (0.12.7 → [0.12.10](../changelogs/@backstage/plugin-api-docs.md#01210))

#### 0.12.10

##### Patch Changes

- [`e4ddf22`](https://github.com/backstage/backstage/commit/e4ddf22): Internal update to align with new blueprint parameter naming in the new frontend system.
- [`f2f133c`](https://github.com/backstage/backstage/commit/f2f133c): Internal update to use the new variant of `ApiBlueprint`.
- [`633327c`](https://github.com/backstage/backstage/commit/633327c): Improved styling for dark mode
- [`8b1bf6e`](https://github.com/backstage/backstage/commit/8b1bf6e): Updated README instructions for the new frontend system

#### 0.12.8

##### Patch Changes

- [`18c64e9`](https://github.com/backstage/backstage/commit/18c64e9): Added the `info.packageJson` option to the plugin instance for the new frontend system.

### `@backstage/plugin-app-visualizer` (0.1.19 → [0.1.22](../changelogs/@backstage/plugin-app-visualizer.md#0122))

#### 0.1.22

##### Patch Changes

- [`e4ddf22`](https://github.com/backstage/backstage/commit/e4ddf22): Internal update to align with new blueprint parameter naming in the new frontend system.

#### 0.1.20

##### Patch Changes

- [`18c64e9`](https://github.com/backstage/backstage/commit/18c64e9): Added the `info.packageJson` option to the plugin instance for the new frontend system.

### `@backstage/plugin-auth-backend` (0.25.0 → [0.25.3](../changelogs/@backstage/plugin-auth-backend.md#0253))

#### 0.25.2

##### Patch Changes

- [`e88cb70`](https://github.com/backstage/backstage/commit/e88cb70): Small internal refactor to move out the `userInfo` database from the `tokenIssuer`. Also removes `exp` from being stored in `UserInfo` and it's now replaced with `created_at` and `updated_at` in the database instead.
- [`207778c`](https://github.com/backstage/backstage/commit/207778c): Internal refactor of OIDC endpoints and `UserInfoDatabase`

### `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.4.3 → [0.4.6](../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#046))

#### 0.4.4

##### Patch Changes

- [`c83cd8b`](https://github.com/backstage/backstage/commit/c83cd8b): Fixed some circular or otherwise unclear imports

### `@backstage/plugin-auth-backend-module-okta-provider` (0.2.3 → [0.2.6](../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#026))

#### 0.2.6

##### Patch Changes

- [`94476d2`](https://github.com/backstage/backstage/commit/94476d2): Updated dependency `@davidzemon/passport-okta-oauth` to `^0.0.7`.

#### 0.2.4

##### Patch Changes

- [`b25977f`](https://github.com/backstage/backstage/commit/b25977f): Updated dependency `@davidzemon/passport-okta-oauth` to `^0.0.6`.

### `@backstage/plugin-auth-node` (0.6.3 → [0.6.6](../changelogs/@backstage/plugin-auth-node.md#066))

#### 0.6.4

##### Patch Changes

- [`0169b23`](https://github.com/backstage/backstage/commit/0169b23): Internal tweak to avoid circular dependencies

### `@backstage/plugin-catalog-backend-module-azure` (0.3.5 → [0.3.8](../changelogs/@backstage/plugin-catalog-backend-module-azure.md#038))

#### 0.3.8

##### Patch Changes

- [`b3aa80e`](https://github.com/backstage/backstage/commit/b3aa80e): `host` should be optional in `config` schema

### `@backstage/plugin-catalog-backend-module-gcp` (0.3.8 → [0.3.11](../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#0311))

#### 0.3.11

##### Patch Changes

- [`cb36a86`](https://github.com/backstage/backstage/commit/cb36a86): Added support for Google Service account credentials config used in GkeEntityProvider.
  Added support for additional metadata `authProvider` and `owner` to be set for the GKE cluster entities.

### `@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.9 → [0.2.12](../changelogs/@backstage/plugin-catalog-backend-module-gitlab-org.md#0212))

#### 0.2.12

##### Patch Changes

- [`d8cb60e`](https://github.com/backstage/backstage/commit/d8cb60e): feat: Add gitlabOrgEntityProviderTransformsExtensionPoint for overriding user and group transformers

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.7.0 → [0.7.3](../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#073))

#### 0.7.2

##### Patch Changes

- [`3507fcd`](https://github.com/backstage/backstage/commit/3507fcd): Just some more circular dep cleanup
- [`e2dd095`](https://github.com/backstage/backstage/commit/e2dd095): Fixed bug in `IncrementalIngestionEngine` by adding `burstLength` check when a burst completes

### `@backstage/plugin-catalog-backend-module-ldap` (0.11.5 → [0.11.8](../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0118))

#### 0.11.7

##### Patch Changes

- [`3507fcd`](https://github.com/backstage/backstage/commit/3507fcd): Just some more circular dep cleanup

#### 0.11.6

##### Patch Changes

- [`087d51d`](https://github.com/backstage/backstage/commit/087d51d): Export LDAP vendor types and instances for testing custom transformers
- [`f07b0ad`](https://github.com/backstage/backstage/commit/f07b0ad): Added the ability to configure disabling one side of the relations tree with LDAP.

  Groups have a `member` attribute and users have a `memberOf` attribute, however these can drift out of sync in some LDAP installations, leaving weird states in the Catalog as we collate these results together and deduplicate them.

  You can chose to optionally disable one side of these relationships, or even both by setting the respective mapping to `null` in your `app-config.yaml` for your groups and/or users:

  ```yaml
  catalog:
    providers:
      ldapOrg:
        default:
          target: ldaps://ds.example.net
          bind:
            dn: uid=ldap-reader-user,ou=people,ou=example,dc=example,dc=net
            secret: ${LDAP_SECRET}
          users:
            - dn: ou=people,ou=example,dc=example,dc=net
              options:
                filter: (uid=*)
              map:
                # this ensures that outgoing memberships from users is ignored
                memberOf: null
          groups:
            - dn: ou=access,ou=groups,ou=example,dc=example,dc=net
              options:
                filter: (&(objectClass=some-group-class)(!(groupType=email)))
              map:
                description: l
              set:
                metadata.customField: 'hello'
              map:
                # this ensures that outgoing memberships from groups is ignored
                members: null
  ```

### `@backstage/plugin-catalog-backend-module-msgraph` (0.7.0 → [0.7.3](../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#073))

#### 0.7.2

##### Patch Changes

- [`3507fcd`](https://github.com/backstage/backstage/commit/3507fcd): Just some more circular dep cleanup

### `@backstage/plugin-catalog-backend-module-puppetdb` (0.2.10 → [0.2.13](../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0213))

#### 0.2.12

##### Patch Changes

- [`3507fcd`](https://github.com/backstage/backstage/commit/3507fcd): Just some more circular dep cleanup

### `@backstage/plugin-catalog-graph` (0.4.19 → [0.4.22](../changelogs/@backstage/plugin-catalog-graph.md#0422))

#### 0.4.22

##### Patch Changes

- [`e4ddf22`](https://github.com/backstage/backstage/commit/e4ddf22): Internal update to align with new blueprint parameter naming in the new frontend system.
- [`8b1bf6e`](https://github.com/backstage/backstage/commit/8b1bf6e): Updated README instructions for the new frontend system

#### 0.4.21

##### Patch Changes

- [`fe1a2f4`](https://github.com/backstage/backstage/commit/fe1a2f4): Catalog graph plugin support i18n

#### 0.4.20

##### Patch Changes

- [`18c64e9`](https://github.com/backstage/backstage/commit/18c64e9): Added the `info.packageJson` option to the plugin instance for the new frontend system.

### `@backstage/plugin-catalog-import` (0.13.0 → [0.13.4](../changelogs/@backstage/plugin-catalog-import.md#0134))

#### 0.13.4

##### Patch Changes

- [`e4ddf22`](https://github.com/backstage/backstage/commit/e4ddf22): Internal update to align with new blueprint parameter naming in the new frontend system.
- [`f2f133c`](https://github.com/backstage/backstage/commit/f2f133c): Internal update to use the new variant of `ApiBlueprint`.

#### 0.13.3

##### Patch Changes

- [`406b8b8`](https://github.com/backstage/backstage/commit/406b8b8): Fixed bug with error message since ResponseError is now thrown from CatalogClient

#### 0.13.1

##### Patch Changes

- [`18c64e9`](https://github.com/backstage/backstage/commit/18c64e9): Added the `info.packageJson` option to the plugin instance for the new frontend system.
- [`5d7c539`](https://github.com/backstage/backstage/commit/5d7c539): Catalog import plugin full support i18n

### `@backstage/plugin-catalog-unprocessed-entities` (0.2.17 → [0.2.20](../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#0220))

#### 0.2.20

##### Patch Changes

- [`e4ddf22`](https://github.com/backstage/backstage/commit/e4ddf22): Internal update to align with new blueprint parameter naming in the new frontend system.
- [`f2f133c`](https://github.com/backstage/backstage/commit/f2f133c): Internal update to use the new variant of `ApiBlueprint`.

#### 0.2.18

##### Patch Changes

- [`18c64e9`](https://github.com/backstage/backstage/commit/18c64e9): Added the `info.packageJson` option to the plugin instance for the new frontend system.

### `@backstage/plugin-devtools` (0.1.27 → [0.1.30](../changelogs/@backstage/plugin-devtools.md#0130))

#### 0.1.30

##### Patch Changes

- [`e4ddf22`](https://github.com/backstage/backstage/commit/e4ddf22): Internal update to align with new blueprint parameter naming in the new frontend system.
- [`f2f133c`](https://github.com/backstage/backstage/commit/f2f133c): Internal update to use the new variant of `ApiBlueprint`.

#### 0.1.28

##### Patch Changes

- [`18c64e9`](https://github.com/backstage/backstage/commit/18c64e9): Added the `info.packageJson` option to the plugin instance for the new frontend system.

### `@backstage/plugin-devtools-backend` (0.5.5 → [0.5.8](../changelogs/@backstage/plugin-devtools-backend.md#058))

#### 0.5.6

##### Patch Changes

- [`9a99735`](https://github.com/backstage/backstage/commit/9a99735): Removed the usage of `permissionIntegrationRouter` in favor of using the new `coreServices.permissionsRegistry`

### `@backstage/plugin-events-backend` (0.5.2 → [0.5.5](../changelogs/@backstage/plugin-events-backend.md#055))

#### 0.5.3

##### Patch Changes

- [`c83cd8b`](https://github.com/backstage/backstage/commit/c83cd8b): Fixed some circular or otherwise unclear imports

### `@backstage/plugin-events-backend-module-google-pubsub` (0.1.0 → [0.1.3](../changelogs/@backstage/plugin-events-backend-module-google-pubsub.md#013))

#### 0.1.1

##### Patch Changes

- [`f983e99`](https://github.com/backstage/backstage/commit/f983e99): Add an `EventConsumingGooglePubSubPublisher`, for pushing Backstage events to pubsub

### `@backstage/plugin-home-react` (0.1.26 → [0.1.29](../changelogs/@backstage/plugin-home-react.md#0129))

#### 0.1.27

##### Patch Changes

- [`c83cd8b`](https://github.com/backstage/backstage/commit/c83cd8b): Fixed some circular or otherwise unclear imports
- [`cef60db`](https://github.com/backstage/backstage/commit/cef60db): Home plugin support i18n

### `@backstage/plugin-kubernetes` (0.12.7 → [0.12.10](../changelogs/@backstage/plugin-kubernetes.md#01210))

#### 0.12.10

##### Patch Changes

- [`e4ddf22`](https://github.com/backstage/backstage/commit/e4ddf22): Internal update to align with new blueprint parameter naming in the new frontend system.
- [`f2f133c`](https://github.com/backstage/backstage/commit/f2f133c): Internal update to use the new variant of `ApiBlueprint`.
- [`3025cf5`](https://github.com/backstage/backstage/commit/3025cf5): Removed the kubernetes content padding to avoid double padding on k8s entity page

#### 0.12.8

##### Patch Changes

- [`18c64e9`](https://github.com/backstage/backstage/commit/18c64e9): Added the `info.packageJson` option to the plugin instance for the new frontend system.
- [`3ea5d1b`](https://github.com/backstage/backstage/commit/3ea5d1b): chore(deps): Update deprecated xterm to new package under @xterm

### `@backstage/plugin-kubernetes-node` (0.3.0 → [0.3.3](../changelogs/@backstage/plugin-kubernetes-node.md#033))

#### 0.3.3

##### Patch Changes

- [`79e342e`](https://github.com/backstage/backstage/commit/79e342e): Added support for providing a factory to the extension points

#### 0.3.2

##### Patch Changes

- [`3507fcd`](https://github.com/backstage/backstage/commit/3507fcd): Just some more circular dep cleanup

### `@backstage/plugin-kubernetes-react` (0.5.7 → [0.5.10](../changelogs/@backstage/plugin-kubernetes-react.md#0510))

#### 0.5.8

##### Patch Changes

- [`3ea5d1b`](https://github.com/backstage/backstage/commit/3ea5d1b): chore(deps): Update deprecated xterm to new package under @xterm

### `@backstage/plugin-notifications` (0.5.5 → [0.5.8](../changelogs/@backstage/plugin-notifications.md#058))

#### 0.5.8

##### Patch Changes

- [`e4ddf22`](https://github.com/backstage/backstage/commit/e4ddf22): Internal update to align with new blueprint parameter naming in the new frontend system.
- [`f2f133c`](https://github.com/backstage/backstage/commit/f2f133c): Internal update to use the new variant of `ApiBlueprint`.
- [`5a70981`](https://github.com/backstage/backstage/commit/5a70981): Fix duplicate notification origins with multiple channels
- [`8a24e0f`](https://github.com/backstage/backstage/commit/8a24e0f): Improve customization of the notification snackbar.

  Users can now customize the notification snackbar by providing custom components and icons
  for different severity levels. Additionally, the location of the snackbar notifications
  can be modified, the density of the snackbar can be changed, and the number of snacks can
  be limited.

#### 0.5.6

##### Patch Changes

- [`18c64e9`](https://github.com/backstage/backstage/commit/18c64e9): Added the `info.packageJson` option to the plugin instance for the new frontend system.
- [`b00c160`](https://github.com/backstage/backstage/commit/b00c160): Remove React import form notification and scaffolder plugin
- [`1fb5f06`](https://github.com/backstage/backstage/commit/1fb5f06): Adds ability for user to turn on/off notifications for specific topics within an origin.

### `@backstage/plugin-notifications-backend` (0.5.6 → [0.5.9](../changelogs/@backstage/plugin-notifications-backend.md#059))

#### 0.5.9

##### Patch Changes

- [`9152ba8`](https://github.com/backstage/backstage/commit/9152ba8): Add an optional generic object `metadata` field to `NotificationPayload`. Metadata can be used to store additional unstructured data for the notification and are available to use by processors.

#### 0.5.8

##### Patch Changes

- [`4401dfb`](https://github.com/backstage/backstage/commit/4401dfb): Allow defining default notification settings via configuration
- [`9a5a73f`](https://github.com/backstage/backstage/commit/9a5a73f): Fix `addTopic` migration when `user_settings` present

#### 0.5.7

##### Patch Changes

- [`41d4d6e`](https://github.com/backstage/backstage/commit/41d4d6e): Notifications are now automatically deleted after 1 year by default.

  There is a new scheduled task that runs every 24 hours to delete notifications older than 1 year.
  This can be configured by setting the `notifications.retention` in the `app-config.yaml` file.

  ```yaml
  notifications:
    retention: 1y
  ```

  If the retention is set to false, notifications will not be automatically deleted.

- [`8a150bf`](https://github.com/backstage/backstage/commit/8a150bf): Internal changes to switch to the non-alpha `catalogServiceRef`
- [`1fb5f06`](https://github.com/backstage/backstage/commit/1fb5f06): Adds ability for user to turn on/off notifications for specific topics within an origin.
- [`ef9ab82`](https://github.com/backstage/backstage/commit/ef9ab82): Notifications API will now return user as null always for broadcast notifications

### `@backstage/plugin-notifications-backend-module-email` (0.3.9 → [0.3.12](../changelogs/@backstage/plugin-notifications-backend-module-email.md#0312))

#### 0.3.11

##### Patch Changes

- [`f92c9fc`](https://github.com/backstage/backstage/commit/f92c9fc): Add optional config for `ses` mail options with `sourceArn`, `fromArn`, `configurationSetName`

#### 0.3.10

##### Patch Changes

- [`8a150bf`](https://github.com/backstage/backstage/commit/8a150bf): Internal changes to switch to the non-alpha `catalogServiceRef`

### `@backstage/plugin-org` (0.6.39 → [0.6.43](../changelogs/@backstage/plugin-org.md#0643))

#### 0.6.42

##### Patch Changes

- [`43cbb10`](https://github.com/backstage/backstage/commit/43cbb10): Added OwnershipCard, ComponentsGrid and UserProfileCard components to the `overridableComponents`.
- [`8b1bf6e`](https://github.com/backstage/backstage/commit/8b1bf6e): Updated README instructions for the new frontend system
- [`4ee19ed`](https://github.com/backstage/backstage/commit/4ee19ed): Added support for scrolling to OwnershipCard component

#### 0.6.41

##### Patch Changes

- [`3ab9b96`](https://github.com/backstage/backstage/commit/3ab9b96): Updated card extensions for the new frontend system to use the new entity predicates, and switch the card type to `info` for the user and group profile cards.

#### 0.6.40

##### Patch Changes

- [`18c64e9`](https://github.com/backstage/backstage/commit/18c64e9): Added the `info.packageJson` option to the plugin instance for the new frontend system.
- [`4fe364f`](https://github.com/backstage/backstage/commit/4fe364f): Org plugin support i18n

### `@backstage/plugin-permission-common` (0.9.0 → [0.9.1](../changelogs/@backstage/plugin-permission-common.md#091))

#### 0.9.1

##### Patch Changes

- [`3507fcd`](https://github.com/backstage/backstage/commit/3507fcd): Just some more circular dep cleanup

### `@backstage/plugin-permission-node` (0.10.0 → [0.10.3](../changelogs/@backstage/plugin-permission-node.md#0103))

#### 0.10.2

##### Patch Changes

- [`3507fcd`](https://github.com/backstage/backstage/commit/3507fcd): Just some more circular dep cleanup

### `@backstage/plugin-proxy-backend` (0.6.2 → [0.6.5](../changelogs/@backstage/plugin-proxy-backend.md#065))

#### 0.6.5

##### Patch Changes

- [`0810cd8`](https://github.com/backstage/backstage/commit/0810cd8): correct rewrite rule to avoid extra subpath in proxy path

### `@backstage/plugin-scaffolder-backend-module-azure` (0.2.9 → [0.2.12](../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#0212))

#### 0.2.10

##### Patch Changes

- [`e89d7b6`](https://github.com/backstage/backstage/commit/e89d7b6): Migrating `azure` actions to using the new `zod` schema format

### `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.3.10 → [0.3.13](../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket.md#0313))

#### 0.3.11

##### Patch Changes

- [`7f710d2`](https://github.com/backstage/backstage/commit/7f710d2): Migrating `bitbucket` actions to use the new `zod` format

### `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.2.9 → [0.2.12](../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#0212))

#### 0.2.10

##### Patch Changes

- [`ca9fdc0`](https://github.com/backstage/backstage/commit/ca9fdc0): Migrate `bitbucket-cloud` to new actions format
- [`9c8ff0c`](https://github.com/backstage/backstage/commit/9c8ff0c): Update pull request creation filter to include .gitignore files in the created pull request
- [`280611d`](https://github.com/backstage/backstage/commit/280611d): Fix `bitbucketCloudBranchRestrictions` API calls to accept null to prevent 400 errors for some branch restriction kinds defined.

### `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.9 → [0.2.12](../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#0212))

#### 0.2.10

##### Patch Changes

- [`d8169fc`](https://github.com/backstage/backstage/commit/d8169fc): Migrate the actions to the new format
- [`9c8ff0c`](https://github.com/backstage/backstage/commit/9c8ff0c): Update pull request creation filter to include .gitignore files in the created pull request

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.9 → [0.3.12](../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#0312))

#### 0.3.11

##### Patch Changes

- [`642282d`](https://github.com/backstage/backstage/commit/642282d): Added support for new link format for on-prem Confluence

#### 0.3.10

##### Patch Changes

- [`4a86bca`](https://github.com/backstage/backstage/commit/4a86bca): Migrate actions to new format

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.10 → [0.3.14](../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0314))

#### 0.3.13

##### Patch Changes

- [`cf9ba6f`](https://github.com/backstage/backstage/commit/cf9ba6f): Fixing the typescript issue with using `z.unknown()`

#### 0.3.11

##### Patch Changes

- [`0b2bbf1`](https://github.com/backstage/backstage/commit/0b2bbf1): Migrate using new actions format

### `@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.9 → [0.2.12](../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#0212))

#### 0.2.10

##### Patch Changes

- [`e24b29b`](https://github.com/backstage/backstage/commit/e24b29b): Migrating to use new format for actions

### `@backstage/plugin-scaffolder-backend-module-gitea` (0.2.9 → [0.2.12](../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#0212))

#### 0.2.10

##### Patch Changes

- [`ed41017`](https://github.com/backstage/backstage/commit/ed41017): Migrate to new actions format

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.9.1 → [0.9.4](../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#094))

#### 0.9.4

##### Patch Changes

- [`5bb870b`](https://github.com/backstage/backstage/commit/5bb870b): Show additional information about the cause in error messages from GitLab
- [`df2bfab`](https://github.com/backstage/backstage/commit/df2bfab): The `description` property in `publish:gitlab:merge-request` has been made optional again to comply with the GitLab API.

#### 0.9.2

##### Patch Changes

- [`063b2d3`](https://github.com/backstage/backstage/commit/063b2d3): Fixed dependency to frontend package from tests
- [`a296637`](https://github.com/backstage/backstage/commit/a296637): Migrate to new action format
- [`3d6493a`](https://github.com/backstage/backstage/commit/3d6493a): Support merge request labels in publish:gitlab:merge-request

### `@backstage/plugin-scaffolder-backend-module-notifications` (0.1.10 → [0.1.13](../changelogs/@backstage/plugin-scaffolder-backend-module-notifications.md#0113))

#### 0.1.11

##### Patch Changes

- [`1fb5f06`](https://github.com/backstage/backstage/commit/1fb5f06): Adds ability for user to turn on/off notifications for specific topics within an origin.
- [`3f56115`](https://github.com/backstage/backstage/commit/3f56115): Removed `octokit` dependency as it was not being used

### `@backstage/plugin-scaffolder-backend-module-rails` (0.5.9 → [0.5.12](../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0512))

#### 0.5.10

##### Patch Changes

- [`a579693`](https://github.com/backstage/backstage/commit/a579693): Migrate to new actions format

### `@backstage/plugin-scaffolder-backend-module-sentry` (0.2.9 → [0.2.12](../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#0212))

#### 0.2.11

##### Patch Changes

- [`648b3d7`](https://github.com/backstage/backstage/commit/648b3d7): Add optional input to sentry:project:create to set the new Sentry project's platform

#### 0.2.10

##### Patch Changes

- [`6c6fb4a`](https://github.com/backstage/backstage/commit/6c6fb4a): Migrate to new actions format

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.10 → [0.4.13](../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0413))

#### 0.4.11

##### Patch Changes

- [`b392a34`](https://github.com/backstage/backstage/commit/b392a34): Migrate to new actions format

### `@backstage/plugin-search-backend-module-catalog` (0.3.4 → [0.3.7](../changelogs/@backstage/plugin-search-backend-module-catalog.md#037))

#### 0.3.7

##### Patch Changes

- [`d9bda0f`](https://github.com/backstage/backstage/commit/d9bda0f): Allow filter to be an array in config schema

### `@backstage/plugin-search-backend-module-explore` (0.3.2 → [0.3.6](../changelogs/@backstage/plugin-search-backend-module-explore.md#036))

#### 0.3.5

##### Patch Changes

- [`3b8fac1`](https://github.com/backstage/backstage/commit/3b8fac1): Updated dependency `@backstage-community/plugin-explore-common` to `^0.5.0`.

### `@backstage/plugin-search-backend-module-techdocs` (0.4.2 → [0.4.5](../changelogs/@backstage/plugin-search-backend-module-techdocs.md#045))

#### 0.4.3

##### Patch Changes

- [`b47ec38`](https://github.com/backstage/backstage/commit/b47ec38): Exports the default document collator for use in document transformation during search indexing.

### `@backstage/plugin-techdocs-common` (0.1.0 → [0.1.1](../changelogs/@backstage/plugin-techdocs-common.md#011))

#### 0.1.1

##### Patch Changes

- [`ec7b35d`](https://github.com/backstage/backstage/commit/ec7b35d): Introduced `backstage.io/techdocs-entity-path` annotation which allows deep linking into another entities TechDocs in conjunction with `backstage.io/techdocs-entity`.

### `@backstage/plugin-user-settings` (0.8.22 → [0.8.25](../changelogs/@backstage/plugin-user-settings.md#0825))

#### 0.8.25

##### Patch Changes

- [`e4ddf22`](https://github.com/backstage/backstage/commit/e4ddf22): Internal update to align with new blueprint parameter naming in the new frontend system.

#### 0.8.24

##### Patch Changes

- [`aa3b054`](https://github.com/backstage/backstage/commit/aa3b054): Added `signIn` and `signOut` analytic events to the `@backstage/core-components` of sign in and sign out.

#### 0.8.23

##### Patch Changes

- [`18c64e9`](https://github.com/backstage/backstage/commit/18c64e9): Added the `info.packageJson` option to the plugin instance for the new frontend system.
- [`ab6d3dd`](https://github.com/backstage/backstage/commit/ab6d3dd): Add some translation to user-setting plugin
- [`c83cd8b`](https://github.com/backstage/backstage/commit/c83cd8b): Fixed some circular or otherwise unclear imports

### `@backstage/theme` (0.6.6 → [0.6.8](../changelogs/@backstage/theme.md#068))

#### 0.6.8

##### Patch Changes

- [`b731527`](https://github.com/backstage/backstage/commit/b731527): We are introducing two new data attributes on the `body` to support Backstage UI (BUI) new theming system.

#### 0.6.7

##### Patch Changes

- [`373486e`](https://github.com/backstage/backstage/commit/373486e): Add a different background colour to focused `MenuItem`s to fix a bug in MUI 4 (which is fixed in MUI 5)
- [`b68d269`](https://github.com/backstage/backstage/commit/b68d269): Update uncomfortably bright color in recently visited and top visited home page cards

## Other minor version bumps

### `@backstage/backend-plugin-api` (1.3.1 → [1.4.2](../changelogs/@backstage/backend-plugin-api.md#142))

#### 1.4.0

##### Minor Changes

- [`664c07a`](https://github.com/backstage/backstage/commit/664c07a): Added `actionsRegistry` and `actions` experimental services to `/alpha` to allow registration of distributed actions from plugins, and the ability to invoke these actions. You can use these services by including them like the following:

  ```ts
  import {
    actionsRegistryServiceRef,
    actionsServiceRef,
  } from '@backstage/backend-plugin-api/alpha';

  createBackendPlugin({
    pluginId: 'test-plugin',
    register({ registerInit }) {
      registerInit({
        deps: {
          actions: actionsServiceRef,
          actionsRegistry: actionsRegistryServiceRef,
        },
        async init({ actions, actionsRegistry }) {
          actionsRegistry.register({
            ...,
          });

          await actions.invoke(...);
        },
      });
    },
  });
  ```

### `@backstage/backend-test-utils` (1.5.0 → [1.8.0](../changelogs/@backstage/backend-test-utils.md#180))

#### 1.8.0

##### Minor Changes

- [`dffaf70`](https://github.com/backstage/backstage/commit/dffaf70): Switched out `mockServices.scheduler` to use a mocked implementation instead of the default scheduler implementation. This implementation runs any scheduled tasks immediately on startup, as long as they don't have an initial delay or a manual trigger. After the initial run, the tasks are never run again unless manually triggered.

##### Patch Changes

- [`279e1f7`](https://github.com/backstage/backstage/commit/279e1f7): Updated the type definition of `mockErrorHandler` to ensure that it is used correctly.

  ```ts
  // This is wrong and will now result in a type error
  app.use(mockErrorHandler);

  // This is the correct usage
  app.use(mockErrorHandler());
  ```

- [`3a7dad9`](https://github.com/backstage/backstage/commit/3a7dad9): Updated `better-sqlite3` to v12

#### 1.7.0

##### Minor Changes

- [`ead925a`](https://github.com/backstage/backstage/commit/ead925a): Add a standard `toString` on credentials objects

#### 1.6.0

##### Minor Changes

- [`6dfb7be`](https://github.com/backstage/backstage/commit/6dfb7be): Added `mockServices.permissions()` that can return actual results.
- [`c999c25`](https://github.com/backstage/backstage/commit/c999c25): Added an `actionsRegistryServiceMock` and `actionsServiceMock` to `/alpha` export for the experimental services.

  This allows you to write tests for your actions by doing something similar to the following:

  ```ts
  import { actionsRegistryServiceMock } from '@backstage/backend-test-utils/alpha';

  const mockActionsRegistry = actionsRegistryServiceMock();
  const mockCatalog = catalogServiceMock({
    entities: [
     ...
    ],
  });

  createGetCatalogEntityAction({
    catalog: mockCatalog,
    actionsRegistry: mockActionsRegistry,
  });

  await expect(
    mockActionsRegistry.invoke({
      id: 'test:get-catalog-entity',
      input: { name: 'test' },
    }),
  ).resolves.toEqual(...)
  ```

##### Patch Changes

- [`12c1fd4`](https://github.com/backstage/backstage/commit/12c1fd4): Make the `user` credentials mock behave more like production

### `@backstage/catalog-client` (1.10.0 → [1.11.0](../changelogs/@backstage/catalog-client.md#1110))

#### 1.11.0

##### Minor Changes

- [`6b608e7`](https://github.com/backstage/backstage/commit/6b608e7): Added the analyze-location endpoint to the CatalogClient

#### 1.10.2

##### Patch Changes

- [`6fb4143`](https://github.com/backstage/backstage/commit/6fb4143): allow arrays in the InMemoryCatalogClient to filter entities

#### 1.10.1

##### Patch Changes

- [`22fad0d`](https://github.com/backstage/backstage/commit/22fad0d): Fixed `CatalogClient` error responses for `refreshEntity` and `addLocation`.

### `@backstage/core-app-api` (1.17.0 → [1.18.0](../changelogs/@backstage/core-app-api.md#1180))

#### 1.18.0

##### Minor Changes

- [`5ddc0fe`](https://github.com/backstage/backstage/commit/5ddc0fe): if session exists and refresh fails, then create a new session if not instant popup

### `@backstage/plugin-catalog-node` (1.17.0 → [1.18.0](../changelogs/@backstage/plugin-catalog-node.md#1180))

#### 1.18.0

##### Minor Changes

- [`3f4da39`](https://github.com/backstage/backstage/commit/3f4da39): Added the analyze-location endpoint to the CatalogService

#### 1.17.1

##### Patch Changes

- [`0169b23`](https://github.com/backstage/backstage/commit/0169b23): Internal tweak to avoid circular dependencies

### `@backstage/plugin-techdocs` (1.12.6 → [1.14.1](../changelogs/@backstage/plugin-techdocs.md#1141))

#### 1.14.0

##### Minor Changes

- [`cb0541f`](https://github.com/backstage/backstage/commit/cb0541f): Adds `additionalAllowedURIProtocols` to sanitizer config

##### Patch Changes

- [`e4ddf22`](https://github.com/backstage/backstage/commit/e4ddf22): Internal update to align with new blueprint parameter naming in the new frontend system.
- [`f2f133c`](https://github.com/backstage/backstage/commit/f2f133c): Internal update to use the new variant of `ApiBlueprint`.
- [`f231c2b`](https://github.com/backstage/backstage/commit/f231c2b): Fixes CSS to adjust based on whether or not the global Backstage sidebar is on the page.

#### 1.13.2

##### Patch Changes

- [`1debf7f`](https://github.com/backstage/backstage/commit/1debf7f): Fixed an issue causing TechDocs to not properly handle initial redirect.

#### 1.13.0

##### Minor Changes

- [`3c59ece`](https://github.com/backstage/backstage/commit/3c59ece): **New Frontend System Only:**
  The `TechDocs` plugin is now responsible for providing an entity icon link extension to read documentation from the catalog entity page.
- [`ec7b35d`](https://github.com/backstage/backstage/commit/ec7b35d): Introduced `backstage.io/techdocs-entity-path` annotation which allows deep linking into another entities TechDocs in conjunction with `backstage.io/techdocs-entity`.

##### Patch Changes

- [`18c64e9`](https://github.com/backstage/backstage/commit/18c64e9): Added the `info.packageJson` option to the plugin instance for the new frontend system.
- [`9dde3ba`](https://github.com/backstage/backstage/commit/9dde3ba): Improved Keyboard accessibility in techdocs.

### `@backstage/plugin-techdocs-react` (1.2.17 → [1.3.2](../changelogs/@backstage/plugin-techdocs-react.md#132))

#### 1.3.0

##### Minor Changes

- [`ec7b35d`](https://github.com/backstage/backstage/commit/ec7b35d): Introduced `backstage.io/techdocs-entity-path` annotation which allows deep linking into another entities TechDocs in conjunction with `backstage.io/techdocs-entity`.

## Other patch version bumps

### `@backstage/backend-app-api` (1.2.3 → [1.2.6](../changelogs/@backstage/backend-app-api.md#126))

#### 1.2.4

##### Patch Changes

- [`bb9a501`](https://github.com/backstage/backstage/commit/bb9a501): Fixed a bug where occasionally the initialization order of multiple modules consuming a single extension point could happen in the wrong order.

### `@backstage/catalog-model` (1.7.4 → [1.7.5](../changelogs/@backstage/catalog-model.md#175))

#### 1.7.5

##### Patch Changes

- [`3507fcd`](https://github.com/backstage/backstage/commit/3507fcd): Just some more circular dep cleanup

### `@backstage/config` (1.3.2 → [1.3.3](../changelogs/@backstage/config.md#133))

#### 1.3.3

##### Patch Changes

- [`ff23618`](https://github.com/backstage/backstage/commit/ff23618): Loosen the requirements for a key to be considered valid config.
- [`3507fcd`](https://github.com/backstage/backstage/commit/3507fcd): Just some more circular dep cleanup

### `@backstage/config-loader` (1.10.1 → [1.10.2](../changelogs/@backstage/config-loader.md#1102))

#### 1.10.2

##### Patch Changes

- [`ff23618`](https://github.com/backstage/backstage/commit/ff23618): Loosen the requirements for a key to be considered valid config.

### `@backstage/core-plugin-api` (1.10.7 → [1.10.9](../changelogs/@backstage/core-plugin-api.md#1109))

#### 1.10.9

##### Patch Changes

- [`f6ffea6`](https://github.com/backstage/backstage/commit/f6ffea6): Add optional message field for auth providers. This is intended to be a user friendly message that displays in the OAuth request dialog. A default message will be displayed if one is not provided.

#### 1.10.8

##### Patch Changes

- [`c83cd8b`](https://github.com/backstage/backstage/commit/c83cd8b): Fixed some circular or otherwise unclear imports
- [`0169b23`](https://github.com/backstage/backstage/commit/0169b23): Internal tweak to avoid circular dependencies

### `@backstage/integration` (1.17.0 → [1.17.1](../changelogs/@backstage/integration.md#1171))

#### 1.17.1

##### Patch Changes

- [`e0189b8`](https://github.com/backstage/backstage/commit/e0189b8): UrlReader: Fix handling of access tokens for GitLab readURL requests
- [`d1e4a6d`](https://github.com/backstage/backstage/commit/d1e4a6d): Fixed bug where the GitLab user token and GitLab integration token were being merged together

### `@backstage/integration-react` (1.2.7 → [1.2.9](../changelogs/@backstage/integration-react.md#129))

#### 1.2.9

##### Patch Changes

- [`998fd15`](https://github.com/backstage/backstage/commit/998fd15): Separated gitlab `write_repository` and `api` scope to pass checks in `RefreshingAuthSessionManager`

### `@backstage/plugin-search` (1.4.26 → [1.4.29](../changelogs/@backstage/plugin-search.md#1429))

#### 1.4.29

##### Patch Changes

- [`e4ddf22`](https://github.com/backstage/backstage/commit/e4ddf22): Internal update to align with new blueprint parameter naming in the new frontend system.
- [`f2f133c`](https://github.com/backstage/backstage/commit/f2f133c): Internal update to use the new variant of `ApiBlueprint`.

#### 1.4.27

##### Patch Changes

- [`18c64e9`](https://github.com/backstage/backstage/commit/18c64e9): Added the `info.packageJson` option to the plugin instance for the new frontend system.

### `@backstage/plugin-search-backend` (2.0.2 → [2.0.5](../changelogs/@backstage/plugin-search-backend.md#205))

#### 2.0.4

##### Patch Changes

- [`69fb975`](https://github.com/backstage/backstage/commit/69fb975): Error messages should not contain backend SQL query strings in the API response, this change will ensure that messages are logged and empty response is returned to the user

#### 2.0.3

##### Patch Changes

- [`c83cd8b`](https://github.com/backstage/backstage/commit/c83cd8b): Fixed some circular or otherwise unclear imports

### `@backstage/plugin-search-backend-module-elasticsearch` (1.7.2 → [1.7.5](../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#175))

#### 1.7.4

##### Patch Changes

- [`3507fcd`](https://github.com/backstage/backstage/commit/3507fcd): Just some more circular dep cleanup

### `@backstage/plugin-search-react` (1.9.0 → [1.9.3](../changelogs/@backstage/plugin-search-react.md#193))

#### 1.9.3

##### Patch Changes

- [`e4ddf22`](https://github.com/backstage/backstage/commit/e4ddf22): Internal update to align with new blueprint parameter naming in the new frontend system.

#### 1.9.1

##### Patch Changes

- [`869fa46`](https://github.com/backstage/backstage/commit/869fa46): SearchBar clear button support i18n

### `@backstage/plugin-techdocs-backend` (2.0.2 → [2.0.5](../changelogs/@backstage/plugin-techdocs-backend.md#205))

#### 2.0.5

##### Patch Changes

- [`484e500`](https://github.com/backstage/backstage/commit/484e500): Updated CachedEntityLoader to use BackstageCredentials instead of raw tokens for cache key generation. It now uses principal-based identification (user entity ref for users, subject for services) instead of token-based keys, providing more consistent caching behavior.

### `@backstage/plugin-techdocs-module-addons-contrib` (1.1.24 → [1.1.27](../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1127))

#### 1.1.25

##### Patch Changes

- [`9dde3ba`](https://github.com/backstage/backstage/commit/9dde3ba): Improved Keyboard accessibility in techdocs.

### `@backstage/plugin-techdocs-node` (1.13.3 → [1.13.6](../changelogs/@backstage/plugin-techdocs-node.md#1136))

#### 1.13.5

##### Patch Changes

- [`029526c`](https://github.com/backstage/backstage/commit/029526c): Updated the error message thrown by parseReferenceAnnotation to reflect the annotation value passed as an argument rather than in correctly assuming location.

## Excluded dependency updates

- `@backstage/app-defaults` (1.6.2 → [1.6.5](../changelogs/@backstage/app-defaults.md#165))
- `@backstage/dev-utils` (1.1.10 → [1.1.13](../changelogs/@backstage/dev-utils.md#1113))
- `@backstage/frontend-dynamic-feature-loader` (0.1.1 → [0.1.4](../changelogs/@backstage/frontend-dynamic-feature-loader.md#014))
- `@backstage/integration-aws-node` (0.1.16 → [0.1.17](../changelogs/@backstage/integration-aws-node.md#0117))
- `@backstage/plugin-app-backend` (0.5.2 → [0.5.5](../changelogs/@backstage/plugin-app-backend.md#055))
- `@backstage/plugin-app-node` (0.1.33 → [0.1.36](../changelogs/@backstage/plugin-app-node.md#0136))
- `@backstage/plugin-auth-backend-module-atlassian-provider` (0.4.3 → [0.4.6](../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#046))
- `@backstage/plugin-auth-backend-module-auth0-provider` (0.2.3 → [0.2.6](../changelogs/@backstage/plugin-auth-backend-module-auth0-provider.md#026))
- `@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.2.8 → [0.2.11](../changelogs/@backstage/plugin-auth-backend-module-azure-easyauth-provider.md#0211))
- `@backstage/plugin-auth-backend-module-bitbucket-provider` (0.3.3 → [0.3.6](../changelogs/@backstage/plugin-auth-backend-module-bitbucket-provider.md#036))
- `@backstage/plugin-auth-backend-module-bitbucket-server-provider` (0.2.3 → [0.2.6](../changelogs/@backstage/plugin-auth-backend-module-bitbucket-server-provider.md#026))
- `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.4.3 → [0.4.6](../changelogs/@backstage/plugin-auth-backend-module-cloudflare-access-provider.md#046))
- `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.4.3 → [0.4.6](../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#046))
- `@backstage/plugin-auth-backend-module-github-provider` (0.3.3 → [0.3.6](../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#036))
- `@backstage/plugin-auth-backend-module-gitlab-provider` (0.3.3 → [0.3.6](../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#036))
- `@backstage/plugin-auth-backend-module-google-provider` (0.3.3 → [0.3.6](../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#036))
- `@backstage/plugin-auth-backend-module-guest-provider` (0.2.8 → [0.2.11](../changelogs/@backstage/plugin-auth-backend-module-guest-provider.md#0211))
- `@backstage/plugin-auth-backend-module-microsoft-provider` (0.3.3 → [0.3.6](../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#036))
- `@backstage/plugin-auth-backend-module-oauth2-provider` (0.4.3 → [0.4.6](../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#046))
- `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.2.8 → [0.2.11](../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#0211))
- `@backstage/plugin-auth-backend-module-oidc-provider` (0.4.3 → [0.4.6](../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#046))
- `@backstage/plugin-auth-backend-module-onelogin-provider` (0.3.3 → [0.3.6](../changelogs/@backstage/plugin-auth-backend-module-onelogin-provider.md#036))
- `@backstage/plugin-auth-backend-module-pinniped-provider` (0.3.3 → [0.3.6](../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#036))
- `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.5.3 → [0.5.6](../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#056))
- `@backstage/plugin-auth-react` (0.1.15 → [0.1.18](../changelogs/@backstage/plugin-auth-react.md#0118))
- `@backstage/plugin-bitbucket-cloud-common` (0.3.0 → [0.3.1](../changelogs/@backstage/plugin-bitbucket-cloud-common.md#031))
- `@backstage/plugin-catalog-backend-module-aws` (0.4.11 → [0.4.14](../changelogs/@backstage/plugin-catalog-backend-module-aws.md#0414))
- `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.5.2 → [0.5.5](../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#055))
- `@backstage/plugin-catalog-backend-module-gerrit` (0.3.2 → [0.3.5](../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#035))
- `@backstage/plugin-catalog-backend-module-gitea` (0.1.0 → [0.1.3](../changelogs/@backstage/plugin-catalog-backend-module-gitea.md#013))
- `@backstage/plugin-catalog-backend-module-github-org` (0.3.10 → [0.3.13](../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#0313))
- `@backstage/plugin-catalog-backend-module-logs` (0.1.10 → [0.1.13](../changelogs/@backstage/plugin-catalog-backend-module-logs.md#0113))
- `@backstage/plugin-catalog-backend-module-openapi` (0.2.10 → [0.2.13](../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0213))
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.2.8 → [0.2.11](../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#0211))
- `@backstage/plugin-catalog-backend-module-unprocessed` (0.6.0 → [0.6.3](../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#063))
- `@backstage/plugin-catalog-common` (1.1.4 → [1.1.5](../changelogs/@backstage/plugin-catalog-common.md#115))
- `@backstage/plugin-catalog-unprocessed-entities-common` (0.0.8 → [0.0.9](../changelogs/@backstage/plugin-catalog-unprocessed-entities-common.md#009))
- `@backstage/plugin-config-schema` (0.1.68 → [0.1.71](../changelogs/@backstage/plugin-config-schema.md#0171))
- `@backstage/plugin-devtools-common` (0.1.16 → [0.1.17](../changelogs/@backstage/plugin-devtools-common.md#0117))
- `@backstage/plugin-events-backend-module-aws-sqs` (0.4.11 → [0.4.14](../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#0414))
- `@backstage/plugin-events-backend-module-azure` (0.2.20 → [0.2.23](../changelogs/@backstage/plugin-events-backend-module-azure.md#0223))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.20 → [0.2.23](../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0223))
- `@backstage/plugin-events-backend-module-bitbucket-server` (0.1.1 → [0.1.4](../changelogs/@backstage/plugin-events-backend-module-bitbucket-server.md#014))
- `@backstage/plugin-events-backend-module-gerrit` (0.2.20 → [0.2.23](../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0223))
- `@backstage/plugin-events-backend-module-github` (0.4.0 → [0.4.3](../changelogs/@backstage/plugin-events-backend-module-github.md#043))
- `@backstage/plugin-events-backend-module-gitlab` (0.3.1 → [0.3.4](../changelogs/@backstage/plugin-events-backend-module-gitlab.md#034))
- `@backstage/plugin-events-backend-test-utils` (0.1.44 → [0.1.47](../changelogs/@backstage/plugin-events-backend-test-utils.md#0147))
- `@backstage/plugin-events-node` (0.4.11 → [0.4.14](../changelogs/@backstage/plugin-events-node.md#0414))
- `@backstage/plugin-gateway-backend` (1.0.1 → [1.0.4](../changelogs/@backstage/plugin-gateway-backend.md#104))
- `@backstage/plugin-kubernetes-cluster` (0.0.25 → [0.0.28](../changelogs/@backstage/plugin-kubernetes-cluster.md#0028))
- `@backstage/plugin-kubernetes-common` (0.9.5 → [0.9.6](../changelogs/@backstage/plugin-kubernetes-common.md#096))
- `@backstage/plugin-notifications-backend-module-slack` (0.1.1 → [0.1.4](../changelogs/@backstage/plugin-notifications-backend-module-slack.md#014))
- `@backstage/plugin-notifications-node` (0.2.15 → [0.2.18](../changelogs/@backstage/plugin-notifications-node.md#0218))
- `@backstage/plugin-org-react` (0.1.38 → [0.1.41](../changelogs/@backstage/plugin-org-react.md#0141))
- `@backstage/plugin-permission-backend` (0.7.0 → [0.7.3](../changelogs/@backstage/plugin-permission-backend.md#073))
- `@backstage/plugin-permission-backend-module-allow-all-policy` (0.2.8 → [0.2.11](../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#0211))
- `@backstage/plugin-permission-react` (0.4.34 → [0.4.36](../changelogs/@backstage/plugin-permission-react.md#0436))
- `@backstage/plugin-proxy-node` (0.1.4 → [0.1.7](../changelogs/@backstage/plugin-proxy-node.md#017))
- `@backstage/plugin-scaffolder-backend-module-gcp` (0.2.9 → [0.2.12](../changelogs/@backstage/plugin-scaffolder-backend-module-gcp.md#0212))
- `@backstage/plugin-search-backend-module-pg` (0.5.44 → [0.5.47](../changelogs/@backstage/plugin-search-backend-module-pg.md#0547))
- `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.3.9 → [0.3.12](../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#0312))
- `@backstage/plugin-search-backend-node` (1.3.11 → [1.3.14](../changelogs/@backstage/plugin-search-backend-node.md#1314))
- `@backstage/plugin-search-common` (1.2.18 → [1.2.19](../changelogs/@backstage/plugin-search-common.md#1219))
- `@backstage/plugin-signals-backend` (0.3.4 → [0.3.7](../changelogs/@backstage/plugin-signals-backend.md#037))
- `@backstage/plugin-signals-node` (0.1.20 → [0.1.23](../changelogs/@backstage/plugin-signals-node.md#0123))
- `@backstage/plugin-signals-react` (0.0.13 → [0.0.15](../changelogs/@backstage/plugin-signals-react.md#0015))
- `@backstage/plugin-techdocs-addons-test-utils` (1.0.48 → [1.0.52](../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#1052))
- `@backstage/plugin-user-settings-backend` (0.3.2 → [0.3.5](../changelogs/@backstage/plugin-user-settings-backend.md#035))
- `@backstage/test-utils` (1.7.8 → [1.7.11](../changelogs/@backstage/test-utils.md#1711))
- `@techdocs/cli` (1.9.3 → [1.9.7](../changelogs/@techdocs/cli.md#197))
