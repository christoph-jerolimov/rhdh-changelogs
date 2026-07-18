# Backstage Release 1.32.0 changelog

Changes between 1.31.4 and 1.32.0 — 141 changed and 0 added packages.

## Summary

- [Breaking changes](#breaking-changes): 6 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 7 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 3 packages
- [Other minor version bumps](#other-minor-version-bumps): 12 packages
- [Other patch version bumps](#other-patch-version-bumps): 95 packages
- [Excluded dependency updates](#excluded-dependency-updates): 18 packages

## Table of contents

- [Breaking changes](#breaking-changes)
  - [`@backstage/cli` (0.27.1 → 0.28.0)](#backstagecli-0271--0280)
  - [`@backstage/core-plugin-api` (1.9.4 → 1.10.0)](#backstagecore-plugin-api-194--1100)
  - [`@backstage/frontend-plugin-api` (0.8.0 → 0.9.0)](#backstagefrontend-plugin-api-080--090)
  - [`@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.3.0 → 0.4.0)](#backstageplugin-auth-backend-module-vmware-cloud-provider-030--040)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.3.2 → 0.4.0)](#backstageplugin-catalog-backend-module-bitbucket-cloud-032--040)
  - [`@backstage/plugin-home` (0.7.11 → 0.8.0)](#backstageplugin-home-0711--080)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/backend-openapi-utils` (0.1.18 → 0.2.0)](#backstagebackend-openapi-utils-0118--020)
  - [`@backstage/frontend-app-api` (0.9.0 → 0.10.0)](#backstagefrontend-app-api-090--0100)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.5.1 → 0.6.0)](#backstageplugin-scaffolder-backend-module-gitlab-051--060)
  - [`@backstage/plugin-scaffolder-node` (0.4.12 → 0.5.0)](#backstageplugin-scaffolder-node-0412--050)
  - [`@backstage/plugin-search-backend-module-techdocs` (0.2.2 → 0.3.0)](#backstageplugin-search-backend-module-techdocs-022--030)
  - [`@backstage/repo-tools` (0.9.7 → 0.10.0)](#backstagerepo-tools-097--0100)
  - [`@backstage/theme` (0.5.7 → 0.6.0)](#backstagetheme-057--060)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-kubernetes-cluster` (0.0.16 → 0.0.17)](#backstageplugin-kubernetes-cluster-0016--0017)
  - [`@backstage/plugin-signals` (0.0.10 → 0.0.11)](#backstageplugin-signals-0010--0011)
  - [`@backstage/plugin-signals-react` (0.0.5 → 0.0.6)](#backstageplugin-signals-react-005--006)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/integration-react` (1.1.32 → 1.2.0)](#backstageintegration-react-1132--120)
  - [`@backstage/plugin-catalog` (1.23.1 → 1.24.0)](#backstageplugin-catalog-1231--1240)
  - [`@backstage/plugin-catalog-backend` (1.26.1 → 1.27.0)](#backstageplugin-catalog-backend-1261--1270)
  - [`@backstage/plugin-catalog-react` (1.13.1 → 1.14.0)](#backstageplugin-catalog-react-1131--1140)
  - [`@backstage/plugin-scaffolder` (1.25.1 → 1.26.0)](#backstageplugin-scaffolder-1251--1260)
  - [`@backstage/plugin-scaffolder-backend` (1.25.1 → 1.26.0)](#backstageplugin-scaffolder-backend-1251--1260)
  - [`@backstage/plugin-scaffolder-react` (1.12.1 → 1.13.0)](#backstageplugin-scaffolder-react-1121--1130)
  - [`@backstage/plugin-search-backend` (1.5.17 → 1.6.0)](#backstageplugin-search-backend-1517--160)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.5.6 → 1.6.0)](#backstageplugin-search-backend-module-elasticsearch-156--160)
  - [`@backstage/plugin-techdocs` (1.10.10 → 1.11.0)](#backstageplugin-techdocs-11010--1110)
  - [`@backstage/plugin-techdocs-backend` (1.10.13 → 1.11.0)](#backstageplugin-techdocs-backend-11013--1110)
  - [`@backstage/test-utils` (1.6.0 → 1.7.0)](#backstagetest-utils-160--170)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/app-defaults` (1.5.11 → 1.5.12)](#backstageapp-defaults-1511--1512)
  - [`@backstage/backend-app-api` (1.0.0 → 1.0.1)](#backstagebackend-app-api-100--101)
  - [`@backstage/backend-defaults` (0.5.0 → 0.5.1)](#backstagebackend-defaults-050--051)
  - [`@backstage/backend-test-utils` (1.0.0 → 1.0.1)](#backstagebackend-test-utils-100--101)
  - [`@backstage/catalog-client` (1.7.0 → 1.7.1)](#backstagecatalog-client-170--171)
  - [`@backstage/cli-node` (0.2.8 → 0.2.9)](#backstagecli-node-028--029)
  - [`@backstage/codemods` (0.1.50 → 0.1.51)](#backstagecodemods-0150--0151)
  - [`@backstage/core-app-api` (1.15.0 → 1.15.1)](#backstagecore-app-api-1150--1151)
  - [`@backstage/core-compat-api` (0.3.0 → 0.3.1)](#backstagecore-compat-api-030--031)
  - [`@backstage/core-components` (0.15.0 → 0.15.1)](#backstagecore-components-0150--0151)
  - [`@backstage/create-app` (0.5.20 → 0.5.21)](#backstagecreate-app-0520--0521)
  - [`@backstage/dev-utils` (1.1.1 → 1.1.2)](#backstagedev-utils-111--112)
  - [`@backstage/eslint-plugin` (0.1.9 → 0.1.10)](#backstageeslint-plugin-019--0110)
  - [`@backstage/frontend-test-utils` (0.2.0 → 0.2.1)](#backstagefrontend-test-utils-020--021)
  - [`@backstage/integration` (1.15.0 → 1.15.1)](#backstageintegration-1150--1151)
  - [`@backstage/plugin-api-docs` (0.11.10 → 0.11.11)](#backstageplugin-api-docs-01110--01111)
  - [`@backstage/plugin-api-docs-module-protoc-gen-doc` (0.1.7 → 0.1.8)](#backstageplugin-api-docs-module-protoc-gen-doc-017--018)
  - [`@backstage/plugin-app` (0.1.0 → 0.1.1)](#backstageplugin-app-010--011)
  - [`@backstage/plugin-app-backend` (0.3.75 → 0.3.76)](#backstageplugin-app-backend-0375--0376)
  - [`@backstage/plugin-app-visualizer` (0.1.10 → 0.1.11)](#backstageplugin-app-visualizer-0110--0111)
  - [`@backstage/plugin-auth-backend` (0.23.0 → 0.23.1)](#backstageplugin-auth-backend-0230--0231)
  - [`@backstage/plugin-auth-backend-module-atlassian-provider` (0.3.0 → 0.3.1)](#backstageplugin-auth-backend-module-atlassian-provider-030--031)
  - [`@backstage/plugin-auth-backend-module-aws-alb-provider` (0.2.0 → 0.2.1)](#backstageplugin-auth-backend-module-aws-alb-provider-020--021)
  - [`@backstage/plugin-auth-backend-module-bitbucket-provider` (0.2.0 → 0.2.1)](#backstageplugin-auth-backend-module-bitbucket-provider-020--021)
  - [`@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.3.0 → 0.3.1)](#backstageplugin-auth-backend-module-cloudflare-access-provider-030--031)
  - [`@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.3.0 → 0.3.1)](#backstageplugin-auth-backend-module-gcp-iap-provider-030--031)
  - [`@backstage/plugin-auth-backend-module-github-provider` (0.2.0 → 0.2.1)](#backstageplugin-auth-backend-module-github-provider-020--021)
  - [`@backstage/plugin-auth-backend-module-gitlab-provider` (0.2.0 → 0.2.1)](#backstageplugin-auth-backend-module-gitlab-provider-020--021)
  - [`@backstage/plugin-auth-backend-module-google-provider` (0.2.0 → 0.2.1)](#backstageplugin-auth-backend-module-google-provider-020--021)
  - [`@backstage/plugin-auth-backend-module-guest-provider` (0.2.0 → 0.2.1)](#backstageplugin-auth-backend-module-guest-provider-020--021)
  - [`@backstage/plugin-auth-backend-module-microsoft-provider` (0.2.0 → 0.2.1)](#backstageplugin-auth-backend-module-microsoft-provider-020--021)
  - [`@backstage/plugin-auth-backend-module-oauth2-provider` (0.3.0 → 0.3.1)](#backstageplugin-auth-backend-module-oauth2-provider-030--031)
  - [`@backstage/plugin-auth-backend-module-oidc-provider` (0.3.0 → 0.3.1)](#backstageplugin-auth-backend-module-oidc-provider-030--031)
  - [`@backstage/plugin-auth-backend-module-okta-provider` (0.1.0 → 0.1.1)](#backstageplugin-auth-backend-module-okta-provider-010--011)
  - [`@backstage/plugin-auth-backend-module-onelogin-provider` (0.2.0 → 0.2.1)](#backstageplugin-auth-backend-module-onelogin-provider-020--021)
  - [`@backstage/plugin-auth-node` (0.5.2 → 0.5.3)](#backstageplugin-auth-node-052--053)
  - [`@backstage/plugin-auth-react` (0.1.6 → 0.1.7)](#backstageplugin-auth-react-016--017)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.4.2 → 0.4.3)](#backstageplugin-catalog-backend-module-aws-042--043)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.2.2 → 0.2.3)](#backstageplugin-catalog-backend-module-azure-022--023)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.2.2 → 0.2.3)](#backstageplugin-catalog-backend-module-bitbucket-server-022--023)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (0.2.2 → 0.2.3)](#backstageplugin-catalog-backend-module-gerrit-022--023)
  - [`@backstage/plugin-catalog-backend-module-github` (0.7.4 → 0.7.5)](#backstageplugin-catalog-backend-module-github-074--075)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.4.2 → 0.4.3)](#backstageplugin-catalog-backend-module-gitlab-042--043)
  - [`@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.0 → 0.2.1)](#backstageplugin-catalog-backend-module-gitlab-org-020--021)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.5.4 → 0.5.5)](#backstageplugin-catalog-backend-module-incremental-ingestion-054--055)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.6.2 → 0.6.3)](#backstageplugin-catalog-backend-module-msgraph-062--063)
  - [`@backstage/plugin-catalog-backend-module-openapi` (0.2.1 → 0.2.2)](#backstageplugin-catalog-backend-module-openapi-021--022)
  - [`@backstage/plugin-catalog-backend-module-puppetdb` (0.2.2 → 0.2.3)](#backstageplugin-catalog-backend-module-puppetdb-022--023)
  - [`@backstage/plugin-catalog-backend-module-unprocessed` (0.5.0 → 0.5.1)](#backstageplugin-catalog-backend-module-unprocessed-050--051)
  - [`@backstage/plugin-catalog-graph` (0.4.10 → 0.4.11)](#backstageplugin-catalog-graph-0410--0411)
  - [`@backstage/plugin-catalog-import` (0.12.4 → 0.12.5)](#backstageplugin-catalog-import-0124--0125)
  - [`@backstage/plugin-catalog-node` (1.13.0 → 1.13.1)](#backstageplugin-catalog-node-1130--1131)
  - [`@backstage/plugin-catalog-unprocessed-entities` (0.2.8 → 0.2.9)](#backstageplugin-catalog-unprocessed-entities-028--029)
  - [`@backstage/plugin-config-schema` (0.1.59 → 0.1.60)](#backstageplugin-config-schema-0159--0160)
  - [`@backstage/plugin-devtools` (0.1.18 → 0.1.19)](#backstageplugin-devtools-0118--0119)
  - [`@backstage/plugin-devtools-backend` (0.4.0 → 0.4.1)](#backstageplugin-devtools-backend-040--041)
  - [`@backstage/plugin-events-backend` (0.3.12 → 0.3.13)](#backstageplugin-events-backend-0312--0313)
  - [`@backstage/plugin-events-backend-module-aws-sqs` (0.4.2 → 0.4.3)](#backstageplugin-events-backend-module-aws-sqs-042--043)
  - [`@backstage/plugin-events-backend-module-azure` (0.2.11 → 0.2.12)](#backstageplugin-events-backend-module-azure-0211--0212)
  - [`@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.11 → 0.2.12)](#backstageplugin-events-backend-module-bitbucket-cloud-0211--0212)
  - [`@backstage/plugin-events-backend-module-gerrit` (0.2.11 → 0.2.12)](#backstageplugin-events-backend-module-gerrit-0211--0212)
  - [`@backstage/plugin-events-backend-module-github` (0.2.11 → 0.2.12)](#backstageplugin-events-backend-module-github-0211--0212)
  - [`@backstage/plugin-events-backend-module-gitlab` (0.2.11 → 0.2.12)](#backstageplugin-events-backend-module-gitlab-0211--0212)
  - [`@backstage/plugin-events-node` (0.4.0 → 0.4.1)](#backstageplugin-events-node-040--041)
  - [`@backstage/plugin-home-react` (0.1.17 → 0.1.18)](#backstageplugin-home-react-0117--0118)
  - [`@backstage/plugin-kubernetes` (0.11.15 → 0.11.16)](#backstageplugin-kubernetes-01115--01116)
  - [`@backstage/plugin-kubernetes-backend` (0.18.6 → 0.18.7)](#backstageplugin-kubernetes-backend-0186--0187)
  - [`@backstage/plugin-kubernetes-node` (0.1.19 → 0.1.20)](#backstageplugin-kubernetes-node-0119--0120)
  - [`@backstage/plugin-kubernetes-react` (0.4.3 → 0.4.4)](#backstageplugin-kubernetes-react-043--044)
  - [`@backstage/plugin-notifications` (0.3.1 → 0.3.2)](#backstageplugin-notifications-031--032)
  - [`@backstage/plugin-notifications-backend` (0.4.0 → 0.4.1)](#backstageplugin-notifications-backend-040--041)
  - [`@backstage/plugin-notifications-backend-module-email` (0.3.0 → 0.3.1)](#backstageplugin-notifications-backend-module-email-030--031)
  - [`@backstage/plugin-notifications-node` (0.2.6 → 0.2.7)](#backstageplugin-notifications-node-026--027)
  - [`@backstage/plugin-org` (0.6.30 → 0.6.31)](#backstageplugin-org-0630--0631)
  - [`@backstage/plugin-org-react` (0.1.29 → 0.1.30)](#backstageplugin-org-react-0129--0130)
  - [`@backstage/plugin-permission-backend` (0.5.49 → 0.5.50)](#backstageplugin-permission-backend-0549--0550)
  - [`@backstage/plugin-permission-node` (0.8.3 → 0.8.4)](#backstageplugin-permission-node-083--084)
  - [`@backstage/plugin-permission-react` (0.4.26 → 0.4.27)](#backstageplugin-permission-react-0426--0427)
  - [`@backstage/plugin-proxy-backend` (0.5.6 → 0.5.7)](#backstageplugin-proxy-backend-056--057)
  - [`@backstage/plugin-search` (1.4.17 → 1.4.18)](#backstageplugin-search-1417--1418)
  - [`@backstage/plugin-search-backend-module-catalog` (0.2.2 → 0.2.3)](#backstageplugin-search-backend-module-catalog-022--023)
  - [`@backstage/plugin-search-backend-module-explore` (0.2.2 → 0.2.3)](#backstageplugin-search-backend-module-explore-022--023)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.35 → 0.5.36)](#backstageplugin-search-backend-module-pg-0535--0536)
  - [`@backstage/plugin-search-backend-module-stack-overflow-collator` (0.3.0 → 0.3.1)](#backstageplugin-search-backend-module-stack-overflow-collator-030--031)
  - [`@backstage/plugin-search-backend-node` (1.3.2 → 1.3.3)](#backstageplugin-search-backend-node-132--133)
  - [`@backstage/plugin-search-react` (1.8.0 → 1.8.1)](#backstageplugin-search-react-180--181)
  - [`@backstage/plugin-signals-backend` (0.2.0 → 0.2.1)](#backstageplugin-signals-backend-020--021)
  - [`@backstage/plugin-signals-node` (0.1.11 → 0.1.12)](#backstageplugin-signals-node-0111--0112)
  - [`@backstage/plugin-techdocs-addons-test-utils` (1.0.39 → 1.0.40)](#backstageplugin-techdocs-addons-test-utils-1039--1040)
  - [`@backstage/plugin-techdocs-module-addons-contrib` (1.1.15 → 1.1.16)](#backstageplugin-techdocs-module-addons-contrib-1115--1116)
  - [`@backstage/plugin-techdocs-node` (1.12.11 → 1.12.12)](#backstageplugin-techdocs-node-11211--11212)
  - [`@backstage/plugin-techdocs-react` (1.2.8 → 1.2.9)](#backstageplugin-techdocs-react-128--129)
  - [`@backstage/plugin-user-settings` (0.8.13 → 0.8.14)](#backstageplugin-user-settings-0813--0814)
  - [`@backstage/plugin-user-settings-backend` (0.2.24 → 0.2.25)](#backstageplugin-user-settings-backend-0224--0225)
  - [`@backstage/version-bridge` (1.0.9 → 1.0.10)](#backstageversion-bridge-109--1010)
- [Excluded dependency updates](#excluded-dependency-updates)

## Breaking changes

### `@backstage/cli` (0.27.1 → [0.28.0](../../changelogs/@backstage/cli.md#0280))

#### 0.28.0

##### Minor Changes

- [`264058c`](https://github.com/backstage/backstage/commit/264058c): The `repo test` command will no longer default to watch mode if the `--since` flag is provided.
- [`55b8b84`](https://github.com/backstage/backstage/commit/55b8b84): **BREAKING**: The Jest configuration defined at `@backstage/cli/config/jest` no longer collects configuration defined in the `"jest"` field from all parent `package.json` files. Instead, it will only read and merge configuration from the `package.json` in the monorepo root if it exists, as well as the target package. In addition, configuration defined in the root `package.json` will now only be merged into each package configuration if it is a valid project-level configuration key.
- [`6129076`](https://github.com/backstage/backstage/commit/6129076): **BREAKING**: Removed the following deprecated commands:

  - `create`: Use `backstage-cli new` instead
  - `create-plugin`: Use `backstage-cli new` instead
  - `plugin:diff`: Use `backstage-cli fix` instead
  - `test`: Use `backstage-cli repo test` or `backstage-cli package test` instead
  - `versions:check`: Use `yarn dedupe` or `yarn-deduplicate` instead
  - `clean`: Use `backstage-cli package clean` instead

  In addition, the experimental `install` and `onboard` commands have been removed since they have not received any updates since their introduction and we're expecting usage to be low. If you where relying on these commands, please let us know by opening an issue towards the main Backstage repository.

##### Patch Changes

- [`ea16633`](https://github.com/backstage/backstage/commit/ea16633): Preserve directory structure for CommonJS build output, just like ESM. This makes the build output more stable and easier to browse, and allows for more effective tree shaking and lazy imports.
- [`520a383`](https://github.com/backstage/backstage/commit/520a383): Added functionality to the prepack script that will append the default export type for entry points to the `exports` object before publishing. This is to help with identifying the declarative integration points for plugins without needing to fetch or run the plugins first.
- [`9625a97`](https://github.com/backstage/backstage/commit/9625a97): The `scaffolder-module` template has been updated to use a more modern layout and new testing utilities for scaffolder actions.
- [`03810d2`](https://github.com/backstage/backstage/commit/03810d2): Remove unknown dependency `diff`
- [`cebee4f`](https://github.com/backstage/backstage/commit/cebee4f): Added support for a new experimental `EXPERIMENTAL_TRIM_NEXT_ENTRY` flag which removes any `./next` entry points present in packages when building and publishing.
- [`54c8aa3`](https://github.com/backstage/backstage/commit/54c8aa3): The check for `react-dom/client` will now properly always run from the target directory.
- [`b676cc9`](https://github.com/backstage/backstage/commit/b676cc9): feat: experimentally support using rspack instead under `EXPERIMENTAL_RSPACK` env flag
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`95999c5`](https://github.com/backstage/backstage/commit/95999c5): The backend plugin template for the `new` command has been updated to provide more guidance and use a more modern structure.
- [`7955f9b`](https://github.com/backstage/backstage/commit/7955f9b): Tweaked the new package feature detection to not be active when building backend packages.
- [`4bfc2ce`](https://github.com/backstage/backstage/commit/4bfc2ce): Updated the Vite implementation behind the `EXPERIMENTAL_VITE` flag to work with more recent versions of Backstage.
- [`720a2f9`](https://github.com/backstage/backstage/commit/720a2f9): Updated dependency `git-url-parse` to `^15.0.0`.
- [`8f0898b`](https://github.com/backstage/backstage/commit/8f0898b): Updated dependency `esbuild` to `^0.24.0`.
- [`2c5ecf5`](https://github.com/backstage/backstage/commit/2c5ecf5): Support `--max-warnings` flag for package linting
- [`88407c3`](https://github.com/backstage/backstage/commit/88407c3): Running `repo lint` with the `--successCache` flag now respects `.gitinore`, and it ignores projects without a `lint` script.
- [`8fe740d`](https://github.com/backstage/backstage/commit/8fe740d): Added a new `--successCache` option to the `backstage-cli repo test` and `backstage-cli repo lint` commands. The cache keeps track of successful runs and avoids re-running for individual packages if they haven't changed. This option is intended only to be used in CI.

  In addition a `--successCacheDir <path>` option has also been added to be able to override the default cache directory.

- [`55b8b84`](https://github.com/backstage/backstage/commit/55b8b84): The Jest configuration will now search for a `src/setupTests.*` file with any valid script extension, not only `.ts`.
- [`79ba5a8`](https://github.com/backstage/backstage/commit/79ba5a8): The `LEGACY_BACKEND_START` flag is now deprecated.
- [`f0514c7`](https://github.com/backstage/backstage/commit/f0514c7): Disabled parsing of input source maps in the SWC transform for Jest.

### `@backstage/core-plugin-api` (1.9.4 → [1.10.0](../../changelogs/@backstage/core-plugin-api.md#1100))

#### 1.10.0

##### Minor Changes

- [`bfd4bec`](https://github.com/backstage/backstage/commit/bfd4bec): **BREAKING PRODUCERS**: The `IconComponent` no longer accepts `fontSize="default"`. This has effectively been removed from Material-UI since its last two major versions, and has not worked properly for them in a long time.

  This change should not have an effect on neither users of MUI4 nor MUI5/6, since the updated interface should still let you send the respective `SvgIcon` types into interfaces where relevant (e.g. as app icons).

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`39001f4`](https://github.com/backstage/backstage/commit/39001f4): Fixing issue with types for `ParamKeys` leading to type mismatches across versions

### `@backstage/frontend-plugin-api` (0.8.0 → [0.9.0](../../changelogs/@backstage/frontend-plugin-api.md#090))

#### 0.9.0

##### Minor Changes

- [`4a5ba19`](https://github.com/backstage/backstage/commit/4a5ba19): Removed deprecated `namespace` option from `createExtension` and `createExtensionBlueprint`, including `.make` and `.makeWithOverides`, it's no longer necessary and will use the `pluginId` instead.

  Removed deprecated `createExtensionOverrides` this should be replaced with `createFrontendModule` instead.

  Removed deprecated `BackstagePlugin` type, use `FrontendPlugin` type instead from this same package.

- [`bfd4bec`](https://github.com/backstage/backstage/commit/bfd4bec): **BREAKING PRODUCERS**: The `IconComponent` no longer accepts `fontSize="default"`. This has effectively been removed from Material-UI since its last two major versions, and has not worked properly for them in a long time.

  This change should not have an effect on neither users of MUI4 nor MUI5/6, since the updated interface should still let you send the respective `SvgIcon` types into interfaces where relevant (e.g. as app icons).

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`873e424`](https://github.com/backstage/backstage/commit/873e424): Internal refactor of usage of opaque types.
- [`323aae8`](https://github.com/backstage/backstage/commit/323aae8): It is now possible to override the blueprint parameters when overriding an extension created from a blueprint:

  ```ts
  const myExtension = MyBlueprint.make({
    params: {
      myParam: 'myDefault',
    },
  });

  const myOverride = myExtension.override({
    params: {
      myParam: 'myOverride',
    },
  });
  const myFactoryOverride = myExtension.override({
    factory(origFactory) {
      return origFactory({
        params: {
          myParam: 'myOverride',
        },
      });
    },
  });
  ```

  The provided parameters will be merged with the original parameters of the extension.

### `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.3.0 → [0.4.0](../../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#040))

#### 0.4.0

##### Minor Changes

- [`d0edfec`](https://github.com/backstage/backstage/commit/d0edfec): **BREAKING**: The `profileEmailMatchingUserEntityEmail` sign-in resolver has been removed as it was using an insecure fallback for resolving user identities. See https://backstage.io/docs/auth/identity-resolver#sign-in-without-users-in-the-catalog for how to create a custom sign-in resolver if needed as a replacement.

##### Patch Changes

- [`217458a`](https://github.com/backstage/backstage/commit/217458a): Updated configuration schema to include the new `allowedDomains` option for the `emailLocalPartMatchingUserEntityName` sign-in resolver.

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.3.2 → [0.4.0](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#040))

#### 0.4.0

##### Minor Changes

- [`6343c8d`](https://github.com/backstage/backstage/commit/6343c8d): Fixes the event-based updates at `BitbucketCloudEntityProvider`.

  Previously, this entity provider had optional event support for legacy backends
  that could be enabled by passing `catalogApi`, `events`, and `tokenManager`.

  For the new/current backend system, the `catalogModuleBitbucketCloudEntityProvider`
  (`catalog.bitbucket-cloud-entity-provider`), event support was enabled by default.

  A recent change removed `tokenManager` as a dependency from the module as well as removed it as input.
  While this didn't break the instantiation of the module, it broke the event-based updates,
  and led to a runtime misbehavior, accompanied by an info log message.

  This change will replace the use of `tokenManager` with the use of `auth` (`AuthService`).

  Additionally, to simplify, it will make `catalogApi` and `events` required dependencies.
  For the current backend system, this change is transparent and doesn't require any action.
  For the legacy backend system, this change will require you to pass those dependencies
  if you didn't do it already.

  BREAKING CHANGES:

  _(For legacy backend users only.)_

  Previously optional `catalogApi`, and `events` are required now.
  A new required dependency `auth` was added.

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

### `@backstage/plugin-home` (0.7.11 → [0.8.0](../../changelogs/@backstage/plugin-home.md#080))

#### 0.8.0

##### Minor Changes

- [`9893bb5`](https://github.com/backstage/backstage/commit/9893bb5): **BREAKING** Implement usage of unused `limit` query parameter in visits API `.list()` function

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`e698470`](https://github.com/backstage/backstage/commit/e698470): Updated dependency `@rjsf/utils` to `5.21.2`.
  Updated dependency `@rjsf/core` to `5.21.2`.
  Updated dependency `@rjsf/material-ui` to `5.21.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.21.2`.

## 0.x minor version bumps

### `@backstage/backend-openapi-utils` (0.1.18 → [0.2.0](../../changelogs/@backstage/backend-openapi-utils.md#020))

#### 0.2.0

##### Minor Changes

- [`66af016`](https://github.com/backstage/backstage/commit/66af016): Improved support for OpenAPI validation during Jest tests. Now, OpenAPI validation can happen as you are writing your Jest tests - you no longer have to run `repo schema openapi test`.

### `@backstage/frontend-app-api` (0.9.0 → [0.10.0](../../changelogs/@backstage/frontend-app-api.md#0100))

#### 0.10.0

##### Minor Changes

- [`4a5ba19`](https://github.com/backstage/backstage/commit/4a5ba19): Removed deprecated `createApp` and `CreateAppFeatureLoader` from `@backstage/frontend-app-api`, use the same `createApp` and `CreateAppFeatureLoader` import from `@backstage/frontend-defaults` instead.

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.5.1 → [0.6.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#060))

#### 0.6.0

##### Minor Changes

- [`73f2ccf`](https://github.com/backstage/backstage/commit/73f2ccf): declare correct type (number) for publish:gitlab output.projectId

##### Patch Changes

- [`9adfe46`](https://github.com/backstage/backstage/commit/9adfe46): GitLab MR: introduce 'skip' commit action.
- [`bc71718`](https://github.com/backstage/backstage/commit/bc71718): Updated installation instructions in README to not include `/alpha`.
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`f2f68cf`](https://github.com/backstage/backstage/commit/f2f68cf): Updated `gitlab:group:ensureExists` action to instead use oauth client.

### `@backstage/plugin-scaffolder-node` (0.4.12 → [0.5.0](../../changelogs/@backstage/plugin-scaffolder-node.md#050))

#### 0.5.0

##### Minor Changes

- [`3ec4e6d`](https://github.com/backstage/backstage/commit/3ec4e6d): Added pagination support for listing of tasks and the ability to filter on several users and task statuses.

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`11e0752`](https://github.com/backstage/backstage/commit/11e0752): Make it possible to manually retry the scaffolder template from the step it failed
- [`d7a736c`](https://github.com/backstage/backstage/commit/d7a736c): Use `branch` function instead of `checkout` function when creating branch

### `@backstage/plugin-search-backend-module-techdocs` (0.2.2 → [0.3.0](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#030))

#### 0.3.0

##### Minor Changes

- [`07a7fc2`](https://github.com/backstage/backstage/commit/07a7fc2): Refactor TechDocs collator, enable clients to override the mkdocs search index transformer, so that per document properties (like tags) can be added to Backstage search index.

##### Patch Changes

- [`4b60e0c`](https://github.com/backstage/backstage/commit/4b60e0c): Remove extension points from `/alpha` export, they're available from the main package already
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.
- [`2f88f88`](https://github.com/backstage/backstage/commit/2f88f88): Updated backend installation instructions.

### `@backstage/repo-tools` (0.9.7 → [0.10.0](../../changelogs/@backstage/repo-tools.md#0100))

#### 0.10.0

##### Minor Changes

- [`30c2be9`](https://github.com/backstage/backstage/commit/30c2be9): Update @microsoft/api-extractor and use their api report resolution.
  Change api report format from `api-report.md` to `report.api.md`
- [`8eb3033`](https://github.com/backstage/backstage/commit/8eb3033): Adds a new command `backstage-repo-tools peer-deps` for validating your usage of peer dependencies in your plugins. It currently supports react related peer dependencies. It also has a `--fix` mode for quickly fixing any issues that it finds.

##### Patch Changes

- [`1f6706f`](https://github.com/backstage/backstage/commit/1f6706f): Properly log instructions when APIs do not match
- [`35e735b`](https://github.com/backstage/backstage/commit/35e735b): Fix issues with warnings in API reports not being checked or reported.

  Due to the recent version bump of API Extractor you may now see a lot of `ae-undocumented` warnings,
  these can be ignored using the `-o` option, for example, `backstage-repo-tools api-reports -o ae-undocumented,ae-wrong-input-file-type`.

- [`248793e`](https://github.com/backstage/backstage/commit/248793e): Updated dependency `@useoptic/optic` to `^1.0.0`.

### `@backstage/theme` (0.5.7 → [0.6.0](../../changelogs/@backstage/theme.md#060))

#### 0.6.0

##### Minor Changes

- [`e77ff3d`](https://github.com/backstage/backstage/commit/e77ff3d): Adds support for custom background colors in code blocks and inline code within TechDocs.

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

## 0.0.x patch version bumps

### `@backstage/plugin-kubernetes-cluster` (0.0.16 → [0.0.17](../../changelogs/@backstage/plugin-kubernetes-cluster.md#0017))

#### 0.0.17

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`605e0bb`](https://github.com/backstage/backstage/commit/605e0bb): Updated dependency `@kubernetes-models/base` to `^5.0.0`.
- [`276cd3d`](https://github.com/backstage/backstage/commit/276cd3d): Updated dependency `@kubernetes-models/apimachinery` to `^2.0.0`.

### `@backstage/plugin-signals` (0.0.10 → [0.0.11](../../changelogs/@backstage/plugin-signals.md#0011))

#### 0.0.11

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

### `@backstage/plugin-signals-react` (0.0.5 → [0.0.6](../../changelogs/@backstage/plugin-signals-react.md#006))

#### 0.0.6

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

## Other minor version bumps

### `@backstage/integration-react` (1.1.32 → [1.2.0](../../changelogs/@backstage/integration-react.md#120))

#### 1.2.0

##### Minor Changes

- [`a11495a`](https://github.com/backstage/backstage/commit/a11495a): Added new ScmAuth method `forBitbucketServer` that uses correct OAuth scopes by default. Also updated `forBitbucket` method to allow overriding the default OAuth scopes.

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`3dbac17`](https://github.com/backstage/backstage/commit/3dbac17): Revert of change #26430

### `@backstage/plugin-catalog` (1.23.1 → [1.24.0](../../changelogs/@backstage/plugin-catalog.md#1240))

#### 1.24.0

##### Minor Changes

- [`71f9f0c`](https://github.com/backstage/backstage/commit/71f9f0c): Updated default columns for location entities to remove description and tags from the catalog table view.
- [`cec8e8c`](https://github.com/backstage/backstage/commit/cec8e8c): Adding negation keyword for entity filtering

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`46b5a20`](https://github.com/backstage/backstage/commit/46b5a20): Empty states updated with external link icon for learn more links

### `@backstage/plugin-catalog-backend` (1.26.1 → [1.27.0](../../changelogs/@backstage/plugin-catalog-backend.md#1270))

#### 1.27.0

##### Minor Changes

- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`83a8830`](https://github.com/backstage/backstage/commit/83a8830): Added migration `20241003170511_alter_target_in_locations.js` to change the target column in the `locations` table to TEXT type.
  Added a hash for the key column in the `refresh_keys` table.
- [`62747f8`](https://github.com/backstage/backstage/commit/62747f8): Fixed a bug where the concurrency limiter for URL reading was not honored
- [`c1f9764`](https://github.com/backstage/backstage/commit/c1f9764): Add configuration parameters for deferred stitcher
- [`720a2f9`](https://github.com/backstage/backstage/commit/720a2f9): Updated dependency `git-url-parse` to `^15.0.0`.
- [`d1cf90a`](https://github.com/backstage/backstage/commit/d1cf90a): Adds the ability to disable catalog processing `catalog.processingInterval: false` in `app-config`
- [`f1cab41`](https://github.com/backstage/backstage/commit/f1cab41): Update catalog search table in transaction
- [`8206f49`](https://github.com/backstage/backstage/commit/8206f49): Fix a bug where etags were expiring too soon in the URL reader

### `@backstage/plugin-catalog-react` (1.13.1 → [1.14.0](../../changelogs/@backstage/plugin-catalog-react.md#1140))

#### 1.14.0

##### Minor Changes

- [`0801db6`](https://github.com/backstage/backstage/commit/0801db6): Add catalog service mocks under the `/testUtils` subpath export.

  You can now use e.g. `const catalog = catalogApiMock.mock()` in your test and then do assertions on `catalog.getEntities` without awkward type casting.

- [`6812980`](https://github.com/backstage/backstage/commit/6812980): Added a new prop, `disableTooltip` to the `EntityRefLink` component

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

### `@backstage/plugin-scaffolder` (1.25.1 → [1.26.0](../../changelogs/@backstage/plugin-scaffolder.md#1260))

#### 1.26.0

##### Minor Changes

- [`bf6eaf3`](https://github.com/backstage/backstage/commit/bf6eaf3): Added support for `FormFieldBlueprint` to create field extensions in the Scaffolder plugin
- [`c433ae9`](https://github.com/backstage/backstage/commit/c433ae9): Improved the layout of the manage templates page (`/edit`) by adding icons and descriptions that better describe what each page is for. Updated the header menu to link back to the scaffolder create page.
- [`7bfaf23`](https://github.com/backstage/backstage/commit/7bfaf23): Text field content of the `EntityPicker` is now more readable as it uses entity title instead of entity reference.
- [`cc3f80c`](https://github.com/backstage/backstage/commit/cc3f80c): Added ability to create a new local scaffolder template to ease onboarding when creating new templates.
- [`5492eb6`](https://github.com/backstage/backstage/commit/5492eb6): Added ability to link to a specific action on the actions page

##### Patch Changes

- [`b2b2aa8`](https://github.com/backstage/backstage/commit/b2b2aa8): Fix extra divider displayed in owner list picker on list tasks page
- [`7f1f483`](https://github.com/backstage/backstage/commit/7f1f483): Create a separate route for the Scaffolder template editor and add the ability to refresh the page without closing the directory. Also, when the directory is closed, the user will stay on the editor page and can load a template folder from there.
- [`f6c15d8`](https://github.com/backstage/backstage/commit/f6c15d8): Apply `defaultValue` props in `MultiEntityPicker`
- [`7a3d622`](https://github.com/backstage/backstage/commit/7a3d622): Create a separate route for the template form editor so we refresh it without being redirected to scaffolder edit page.
- [`4698646`](https://github.com/backstage/backstage/commit/4698646): Change task list created at column to show timestamp
- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`e6bbfce`](https://github.com/backstage/backstage/commit/e6bbfce): Add tests for the `TemplateEditorToolbarTemplatesMenu` component.
- [`4130291`](https://github.com/backstage/backstage/commit/4130291): Create a separate route for the custom fields explorer so we refresh it without being redirected to scaffolder edit page.
- [`4e9702e`](https://github.com/backstage/backstage/commit/4e9702e): Add tests for the new pages header navigation.
- [`f25c9e3`](https://github.com/backstage/backstage/commit/f25c9e3): Fix behavior of scaffolder entity pickers (EntityPicker, MultiEntityPicker, MyGroupsPicker) to not auto-fill and disable the field if there is only a single value option and the field is not required.
- [`785d68f`](https://github.com/backstage/backstage/commit/785d68f): Add support for pagination in scaffolder tasks list
- [`94a7bcd`](https://github.com/backstage/backstage/commit/94a7bcd): Change "Register Existing Component" CTA to outlined as it's not a primary action on the scaffolder pages
- [`f989c47`](https://github.com/backstage/backstage/commit/f989c47): Add translation to the editor toolbar component.
- [`d4cafc8`](https://github.com/backstage/backstage/commit/d4cafc8): Standardize template editor pages desktop and mobile layouts.
- [`b1de959`](https://github.com/backstage/backstage/commit/b1de959): Scaffolder task routes require read permission to access. The tasks list option in the scaffolder page context menu only shows with permission.
- [`e698470`](https://github.com/backstage/backstage/commit/e698470): Updated dependency `@rjsf/utils` to `5.21.2`.
  Updated dependency `@rjsf/core` to `5.21.2`.
  Updated dependency `@rjsf/material-ui` to `5.21.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.21.2`.
- [`720a2f9`](https://github.com/backstage/backstage/commit/720a2f9): Updated dependency `git-url-parse` to `^15.0.0`.
- [`01ffa58`](https://github.com/backstage/backstage/commit/01ffa58): Add tests for the `useTemplateDirectory` hook.
- [`3ac4766`](https://github.com/backstage/backstage/commit/3ac4766): Add an actions filter on the list actions page and drawer.
- [`11e0752`](https://github.com/backstage/backstage/commit/11e0752): Make it possible to manually retry the scaffolder template from the step it failed
- [`09fcd95`](https://github.com/backstage/backstage/commit/09fcd95): Update the Scaffolder template editor to quickly access installed custom fields and actions when editing a template.
- [`c18d925`](https://github.com/backstage/backstage/commit/c18d925): Add tests for the `TemplateEditorToolbarFilesMenu` component.

### `@backstage/plugin-scaffolder-backend` (1.25.1 → [1.26.0](../../changelogs/@backstage/plugin-scaffolder-backend.md#1260))

#### 1.26.0

##### Minor Changes

- [`3ec4e6d`](https://github.com/backstage/backstage/commit/3ec4e6d): Added pagination support for listing of tasks and the ability to filter on several users and task statuses.
- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

##### Patch Changes

- [`734c2d4`](https://github.com/backstage/backstage/commit/734c2d4): Add `fetch:template:file` scaffolder action to download a single file and template the contents. Example usage:

  ```yaml
  - id: fetch-file
    name: Fetch File
    action: fetch:template:file
    input:
      url: https://github.com/backstage/software-templates/blob/main/scaffolder-templates/create-react-app/skeleton/catalog-info.yaml
      targetPath: './target/catalog-info.yaml'
      values:
        component_id: My Component
        owner: Test
  ```

- [`f1f0076`](https://github.com/backstage/backstage/commit/f1f0076): handle step.if: false
- [`2f90932`](https://github.com/backstage/backstage/commit/2f90932): Include step name and step id to checkpoint key
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`8f0898b`](https://github.com/backstage/backstage/commit/8f0898b): Updated dependency `esbuild` to `^0.24.0`.
- [`11e0752`](https://github.com/backstage/backstage/commit/11e0752): Make it possible to manually retry the scaffolder template from the step it failed

### `@backstage/plugin-scaffolder-react` (1.12.1 → [1.13.0](../../changelogs/@backstage/plugin-scaffolder-react.md#1130))

#### 1.13.0

##### Minor Changes

- [`bf6eaf3`](https://github.com/backstage/backstage/commit/bf6eaf3): Added support for `FormFieldBlueprint` to create field extensions in the Scaffolder plugin
- [`d851b5b`](https://github.com/backstage/backstage/commit/d851b5b): Renamed Template Editor to Manage Templates.

##### Patch Changes

- [`341e5db`](https://github.com/backstage/backstage/commit/341e5db): Add `overridableComponent` `BackstageTemplateStepperClassKey` to template stepper to enable custom styling
- [`4b60e0c`](https://github.com/backstage/backstage/commit/4b60e0c): Small tweaks to API reports to make them valid
- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`785d68f`](https://github.com/backstage/backstage/commit/785d68f): Add support for pagination in scaffolder tasks list
- [`b1de959`](https://github.com/backstage/backstage/commit/b1de959): Scaffolder task routes require read permission to access. The tasks list option in the scaffolder page context menu only shows with permission.
- [`e698470`](https://github.com/backstage/backstage/commit/e698470): Updated dependency `@rjsf/utils` to `5.21.2`.
  Updated dependency `@rjsf/core` to `5.21.2`.
  Updated dependency `@rjsf/material-ui` to `5.21.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.21.2`.
- [`11e0752`](https://github.com/backstage/backstage/commit/11e0752): Make it possible to manually retry the scaffolder template from the step it failed

### `@backstage/plugin-search-backend` (1.5.17 → [1.6.0](../../changelogs/@backstage/plugin-search-backend.md#160))

#### 1.6.0

##### Minor Changes

- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

##### Patch Changes

- [`66af016`](https://github.com/backstage/backstage/commit/66af016): Fix to schema to allow arbitrary query parameters.
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

### `@backstage/plugin-search-backend-module-elasticsearch` (1.5.6 → [1.6.0](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#160))

#### 1.6.0

##### Minor Changes

- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

##### Patch Changes

- [`d78b07c`](https://github.com/backstage/backstage/commit/d78b07c): Align the configuration schema with the docs and actual behavior of the code
- [`4b60e0c`](https://github.com/backstage/backstage/commit/4b60e0c): Remove extension points from `/alpha` export, they're available from the main package already
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

### `@backstage/plugin-techdocs` (1.10.10 → [1.11.0](../../changelogs/@backstage/plugin-techdocs.md#1110))

#### 1.11.0

##### Minor Changes

- [`e77ff3d`](https://github.com/backstage/backstage/commit/e77ff3d): Adds support for custom background colors in code blocks and inline code within TechDocs.

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`a77cb40`](https://github.com/backstage/backstage/commit/a77cb40): Make `emptyState` input optional on `entity-content:techdocs` extension so that
  the default empty state extension works correctly.
- [`e918061`](https://github.com/backstage/backstage/commit/e918061): Add support for mkdocs material palette conditional hashes.
- [`720a2f9`](https://github.com/backstage/backstage/commit/720a2f9): Updated dependency `git-url-parse` to `^15.0.0`.
- [`e8b4966`](https://github.com/backstage/backstage/commit/e8b4966): Use more of the available space for the navigation sidebar.

### `@backstage/plugin-techdocs-backend` (1.10.13 → [1.11.0](../../changelogs/@backstage/plugin-techdocs-backend.md#1110))

#### 1.11.0

##### Minor Changes

- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`fbdc631`](https://github.com/backstage/backstage/commit/fbdc631): Allow to pass StorageOptions to GCS Publisher

### `@backstage/test-utils` (1.6.0 → [1.7.0](../../changelogs/@backstage/test-utils.md#170))

#### 1.7.0

##### Minor Changes

- [`9cc7dd6`](https://github.com/backstage/backstage/commit/9cc7dd6): Added a `mockApis` export, which will replace the `MockX` API implementation classes and their related types. This is analogous with the backend's `mockServices`.

  **DEPRECATED** several old helpers:

  - Deprecated `MockAnalyticsApi`, please use `mockApis.analytics` instead.
  - Deprecated `MockConfigApi`, please use `mockApis.config` instead.
  - Deprecated `MockPermissionApi`, please use `mockApis.permission` instead.
  - Deprecated `MockStorageApi`, please use `mockApis.storage` instead.
  - Deprecated `MockTranslationApi`, please use `mockApis.translation` instead.

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

## Other patch version bumps

### `@backstage/app-defaults` (1.5.11 → [1.5.12](../../changelogs/@backstage/app-defaults.md#1512))

#### 1.5.12

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`46b5a20`](https://github.com/backstage/backstage/commit/46b5a20): Added `externalLink` to icon defaults
- [`8c40e55`](https://github.com/backstage/backstage/commit/8c40e55): Updated the `bitbucket-server-auth` default API to set its environment based on the `auth.environment` config option instead of being hardcoded to `development`.

### `@backstage/backend-app-api` (1.0.0 → [1.0.1](../../changelogs/@backstage/backend-app-api.md#101))

#### 1.0.1

##### Patch Changes

- [`ffd1f4a`](https://github.com/backstage/backstage/commit/ffd1f4a): Plugin lifecycle shutdown hooks are now performed before root lifecycle shutdown hooks.
- [`fd6e6f4`](https://github.com/backstage/backstage/commit/fd6e6f4): build(deps): bump `cookie` from 0.6.0 to 0.7.0
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`04af116`](https://github.com/backstage/backstage/commit/04af116): The backend will no longer exit immediately if any plugin or modules fails to initialize. Instead, the backend will wait for all plugins and modules to either start up successfully or throw, and then shut down the backend if there were any initialization errors.

  This fixes an issue where backend initialization errors in adjacent plugins during database schema migration could cause the database migrations to be stuck in a locked state.

### `@backstage/backend-defaults` (0.5.0 → [0.5.1](../../changelogs/@backstage/backend-defaults.md#051))

#### 0.5.1

##### Patch Changes

- [`4b60e0c`](https://github.com/backstage/backstage/commit/4b60e0c): Small tweaks to API reports to make them valid
- [`321a994`](https://github.com/backstage/backstage/commit/321a994): Sensitive internal fields on `BackstageCredentials` objects are now defined as read-only properties in order to minimize risk of leakage.
- [`ffd1f4a`](https://github.com/backstage/backstage/commit/ffd1f4a): Plugin lifecycle shutdown hooks are now performed before root lifecycle shutdown hooks.
- [`ffd1f4a`](https://github.com/backstage/backstage/commit/ffd1f4a): The database manager now attempts to close any database connections in a root lifecycle shutdown hook.
- [`e36d12f`](https://github.com/backstage/backstage/commit/e36d12f): The task scheduler now attempts to abort any tasks if it detects that Backstage is being shut down.
- [`fd6e6f4`](https://github.com/backstage/backstage/commit/fd6e6f4): build(deps): bump `cookie` from 0.6.0 to 0.7.0
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`720a2f9`](https://github.com/backstage/backstage/commit/720a2f9): Updated dependency `git-url-parse` to `^15.0.0`.
- [`920004b`](https://github.com/backstage/backstage/commit/920004b): Updating error message for getProjectId when fetching Gitlab project from its url to be more accurate
- [`d7b44f0`](https://github.com/backstage/backstage/commit/d7b44f0): Fix for backend shutdown hanging during local development due to SQLite connection shutdown never resolving.
- [`8fd7deb`](https://github.com/backstage/backstage/commit/8fd7deb): The default root HTTP service implementation will now pretty-print JSON responses in development.

  If you are overriding the `rootHttpRouterServiceFactory` with a `configure` function that doesn't call `applyDefaults`, you can introduce this functionality by adding the following snippet inside `configure`:

  ```ts
  if (process.env.NODE_ENV === 'development') {
    app.set('json spaces', 2);
  }
  ```

### `@backstage/backend-test-utils` (1.0.0 → [1.0.1](../../changelogs/@backstage/backend-test-utils.md#101))

#### 1.0.1

##### Patch Changes

- [`fd6e6f4`](https://github.com/backstage/backstage/commit/fd6e6f4): build(deps): bump `cookie` from 0.6.0 to 0.7.0
- [`a19ce00`](https://github.com/backstage/backstage/commit/a19ce00): The `createMockDirectory` cleanup strategy has been changed, no longer requiring it to be called outside individual tests.
- [`9cc7dd6`](https://github.com/backstage/backstage/commit/9cc7dd6): Minor doc string changes

### `@backstage/catalog-client` (1.7.0 → [1.7.1](../../changelogs/@backstage/catalog-client.md#171))

#### 1.7.1

##### Patch Changes

- [`0040632`](https://github.com/backstage/backstage/commit/0040632): Add missing doc string to API

### `@backstage/cli-node` (0.2.8 → [0.2.9](../../changelogs/@backstage/cli-node.md#029))

#### 0.2.9

##### Patch Changes

- [`fec7278`](https://github.com/backstage/backstage/commit/fec7278): Added new `lockfile.getDependencyTreeHash(name)` utility.

### `@backstage/codemods` (0.1.50 → [0.1.51](../../changelogs/@backstage/codemods.md#0151))

#### 0.1.51

##### Patch Changes

- [`c06b7f1`](https://github.com/backstage/backstage/commit/c06b7f1): Updated dependency `@types/jscodeshift` to `^0.12.0`.

### `@backstage/core-app-api` (1.15.0 → [1.15.1](../../changelogs/@backstage/core-app-api.md#1151))

#### 1.15.1

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

### `@backstage/core-compat-api` (0.3.0 → [0.3.1](../../changelogs/@backstage/core-compat-api.md#031))

#### 0.3.1

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`4a5ba19`](https://github.com/backstage/backstage/commit/4a5ba19): Internal update to remove deprecated `BackstagePlugin` type and move to `FrontendPlugin`

### `@backstage/core-components` (0.15.0 → [0.15.1](../../changelogs/@backstage/core-components.md#0151))

#### 0.15.1

##### Patch Changes

- [`3f76d0e`](https://github.com/backstage/backstage/commit/3f76d0e): Correct size of FavoriteToggle and inherit non-starred color from parent
- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`1ff1dbd`](https://github.com/backstage/backstage/commit/1ff1dbd): It is possible to define a custom error element to be shown when sign in fails
- [`83e2887`](https://github.com/backstage/backstage/commit/83e2887): Fixed a bug in the `SidebarSubmenu` core component that caused the nested menu to overlap with the sidebar when the user hovers over the pinned sidebar.
- [`46b5a20`](https://github.com/backstage/backstage/commit/46b5a20): `Link` component now accepts `externalLinkIcon` prop
- [`e4ad29a`](https://github.com/backstage/backstage/commit/e4ad29a): Fix authentication error handling using redirect flow via `enableExperimentalRedirectFlow` config. If an error is caught during authentication, the user is redirected back to app origin with `error` query parameter containing the error message.

### `@backstage/create-app` (0.5.20 → [0.5.21](../../changelogs/@backstage/create-app.md#0521))

#### 0.5.21

##### Patch Changes

- [`c42c710`](https://github.com/backstage/backstage/commit/c42c710): Bumped create-app version.
- [`56a8118`](https://github.com/backstage/backstage/commit/56a8118): Bumped create-app version.
- [`a7674d6`](https://github.com/backstage/backstage/commit/a7674d6): Fixed lack of `.yarnrc.yml` in the template.
- [`ab89e45`](https://github.com/backstage/backstage/commit/ab89e45): Remove some dependencies that aren't required anymore
- [`b452088`](https://github.com/backstage/backstage/commit/b452088): Tweak `Dockerfile` to fix deprecated syntax.

### `@backstage/dev-utils` (1.1.1 → [1.1.2](../../changelogs/@backstage/dev-utils.md#112))

#### 1.1.2

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

### `@backstage/eslint-plugin` (0.1.9 → [0.1.10](../../changelogs/@backstage/eslint-plugin.md#0110))

#### 0.1.10

##### Patch Changes

- [`b1c2a2d`](https://github.com/backstage/backstage/commit/b1c2a2d): Exclude `@material-ui/data-grid`
- [`63963f6`](https://github.com/backstage/backstage/commit/63963f6): Internal refactor to deal with `estree` upgrade

### `@backstage/frontend-test-utils` (0.2.0 → [0.2.1](../../changelogs/@backstage/frontend-test-utils.md#021))

#### 0.2.1

##### Patch Changes

- [`666d5b1`](https://github.com/backstage/backstage/commit/666d5b1): Disable the built-in `SignInPage` in `createExtensionTester` in order to not mess with existing tests
- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`873e424`](https://github.com/backstage/backstage/commit/873e424): Internal refactor of usage of opaque types.
- [`0801db6`](https://github.com/backstage/backstage/commit/0801db6): Added an `ApiMock`, analogous to `ServiceMock` from the backend test utils.
- [`9cc7dd6`](https://github.com/backstage/backstage/commit/9cc7dd6): Added a `mockApis` export, which will replace the `MockX` API implementation classes and their related types. This is analogous with the backend's `mockServices`.

  **DEPRECATED** several old helpers:

  - Deprecated `MockAnalyticsApi`, please use `mockApis.analytics` instead.
  - Deprecated `MockConfigApi`, please use `mockApis.config` instead.
  - Deprecated `MockPermissionApi`, please use `mockApis.permission` instead.
  - Deprecated `MockStorageApi`, please use `mockApis.storage` instead.
  - Deprecated `MockTranslationApi`, please use `mockApis.translation` instead.

### `@backstage/integration` (1.15.0 → [1.15.1](../../changelogs/@backstage/integration.md#1151))

#### 1.15.1

##### Patch Changes

- [`720a2f9`](https://github.com/backstage/backstage/commit/720a2f9): Updated dependency `git-url-parse` to `^15.0.0`.
- [`920004b`](https://github.com/backstage/backstage/commit/920004b): Updating error message for getProjectId when fetching Gitlab project from its url to be more accurate
- [`090e49a`](https://github.com/backstage/backstage/commit/090e49a): Updated functions parseHarnessUrl, getHarnessLatestCommitUrl, getHarnessFileContentsUrl and getHarnessArchiveUrl to fix parsing of urls

### `@backstage/plugin-api-docs` (0.11.10 → [0.11.11](../../changelogs/@backstage/plugin-api-docs.md#01111))

#### 0.11.11

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`46b5a20`](https://github.com/backstage/backstage/commit/46b5a20): Empty states updated with external link icon for learn more links

### `@backstage/plugin-api-docs-module-protoc-gen-doc` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-api-docs-module-protoc-gen-doc.md#018))

#### 0.1.8

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

### `@backstage/plugin-app` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-app.md#011))

#### 0.1.1

##### Patch Changes

- [`b36be7a`](https://github.com/backstage/backstage/commit/b36be7a): Added missing default `SignInPageExtension` which by default uses guest auth, missing `ApiExtensions` for `scmAuth`

### `@backstage/plugin-app-backend` (0.3.75 → [0.3.76](../../changelogs/@backstage/plugin-app-backend.md#0376))

#### 0.3.76

##### Patch Changes

- [`2c4ee26`](https://github.com/backstage/backstage/commit/2c4ee26): Fixed unexpected behaviour where configuration supplied with `APP_CONFIG_*` environment variables where not filtered by the configuration schema.
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

### `@backstage/plugin-app-visualizer` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-app-visualizer.md#0111))

#### 0.1.11

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

### `@backstage/plugin-auth-backend` (0.23.0 → [0.23.1](../../changelogs/@backstage/plugin-auth-backend.md#0231))

#### 0.23.1

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

### `@backstage/plugin-auth-backend-module-atlassian-provider` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#031))

#### 0.3.1

##### Patch Changes

- [`217458a`](https://github.com/backstage/backstage/commit/217458a): Updated configuration schema to include the new `allowedDomains` option for the `emailLocalPartMatchingUserEntityName` sign-in resolver.

### `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#021))

#### 0.2.1

##### Patch Changes

- [`217458a`](https://github.com/backstage/backstage/commit/217458a): Updated configuration schema to include the new `allowedDomains` option for the `emailLocalPartMatchingUserEntityName` sign-in resolver.
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

### `@backstage/plugin-auth-backend-module-bitbucket-provider` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-provider.md#021))

#### 0.2.1

##### Patch Changes

- [`217458a`](https://github.com/backstage/backstage/commit/217458a): Updated configuration schema to include the new `allowedDomains` option for the `emailLocalPartMatchingUserEntityName` sign-in resolver.

### `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-auth-backend-module-cloudflare-access-provider.md#031))

#### 0.3.1

##### Patch Changes

- [`217458a`](https://github.com/backstage/backstage/commit/217458a): Updated configuration schema to include the new `allowedDomains` option for the `emailLocalPartMatchingUserEntityName` sign-in resolver.

### `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#031))

#### 0.3.1

##### Patch Changes

- [`217458a`](https://github.com/backstage/backstage/commit/217458a): Updated configuration schema to include the new `allowedDomains` option for the `emailLocalPartMatchingUserEntityName` sign-in resolver.

### `@backstage/plugin-auth-backend-module-github-provider` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#021))

#### 0.2.1

##### Patch Changes

- [`217458a`](https://github.com/backstage/backstage/commit/217458a): Updated configuration schema to include the new `allowedDomains` option for the `emailLocalPartMatchingUserEntityName` sign-in resolver.

### `@backstage/plugin-auth-backend-module-gitlab-provider` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#021))

#### 0.2.1

##### Patch Changes

- [`217458a`](https://github.com/backstage/backstage/commit/217458a): Updated configuration schema to include the new `allowedDomains` option for the `emailLocalPartMatchingUserEntityName` sign-in resolver.

### `@backstage/plugin-auth-backend-module-google-provider` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#021))

#### 0.2.1

##### Patch Changes

- [`217458a`](https://github.com/backstage/backstage/commit/217458a): Updated configuration schema to include the new `allowedDomains` option for the `emailLocalPartMatchingUserEntityName` sign-in resolver.

### `@backstage/plugin-auth-backend-module-guest-provider` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-auth-backend-module-guest-provider.md#021))

#### 0.2.1

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

### `@backstage/plugin-auth-backend-module-microsoft-provider` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#021))

#### 0.2.1

##### Patch Changes

- [`217458a`](https://github.com/backstage/backstage/commit/217458a): Updated configuration schema to include the new `allowedDomains` option for the `emailLocalPartMatchingUserEntityName` sign-in resolver.
- [`daa02d6`](https://github.com/backstage/backstage/commit/daa02d6): Add `skipUserProfile` config flag to Microsoft authenticator

### `@backstage/plugin-auth-backend-module-oauth2-provider` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#031))

#### 0.3.1

##### Patch Changes

- [`217458a`](https://github.com/backstage/backstage/commit/217458a): Updated configuration schema to include the new `allowedDomains` option for the `emailLocalPartMatchingUserEntityName` sign-in resolver.

### `@backstage/plugin-auth-backend-module-oidc-provider` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#031))

#### 0.3.1

##### Patch Changes

- [`217458a`](https://github.com/backstage/backstage/commit/217458a): Updated configuration schema to include the new `allowedDomains` option for the `emailLocalPartMatchingUserEntityName` sign-in resolver.
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

### `@backstage/plugin-auth-backend-module-okta-provider` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#011))

#### 0.1.1

##### Patch Changes

- [`217458a`](https://github.com/backstage/backstage/commit/217458a): Updated configuration schema to include the new `allowedDomains` option for the `emailLocalPartMatchingUserEntityName` sign-in resolver.

### `@backstage/plugin-auth-backend-module-onelogin-provider` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-auth-backend-module-onelogin-provider.md#021))

#### 0.2.1

##### Patch Changes

- [`217458a`](https://github.com/backstage/backstage/commit/217458a): Updated configuration schema to include the new `allowedDomains` option for the `emailLocalPartMatchingUserEntityName` sign-in resolver.

### `@backstage/plugin-auth-node` (0.5.2 → [0.5.3](../../changelogs/@backstage/plugin-auth-node.md#053))

#### 0.5.3

##### Patch Changes

- [`217458a`](https://github.com/backstage/backstage/commit/217458a): Added a new `allowedDomains` option for the common `emailLocalPartMatchingUserEntityName` sign-in resolver.
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`e4ad29a`](https://github.com/backstage/backstage/commit/e4ad29a): Fix authentication error handling using redirect flow via `enableExperimentalRedirectFlow` config. If an error is caught during authentication, the user is redirected back to app origin with `error` query parameter containing the error message.

### `@backstage/plugin-auth-react` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-auth-react.md#017))

#### 0.1.7

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

### `@backstage/plugin-catalog-backend-module-aws` (0.4.2 → [0.4.3](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#043))

#### 0.4.3

##### Patch Changes

- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

### `@backstage/plugin-catalog-backend-module-azure` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#023))

#### 0.2.3

##### Patch Changes

- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#023))

#### 0.2.3

##### Patch Changes

- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

### `@backstage/plugin-catalog-backend-module-gerrit` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#023))

#### 0.2.3

##### Patch Changes

- [`5b6edf1`](https://github.com/backstage/backstage/commit/5b6edf1): Fixed an issue preventing the provider's `schedule` config from being applied."
- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

### `@backstage/plugin-catalog-backend-module-github` (0.7.4 → [0.7.5](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#075))

#### 0.7.5

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.
- [`720a2f9`](https://github.com/backstage/backstage/commit/720a2f9): Updated dependency `git-url-parse` to `^15.0.0`.

### `@backstage/plugin-catalog-backend-module-gitlab` (0.4.2 → [0.4.3](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#043))

#### 0.4.3

##### Patch Changes

- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

### `@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab-org.md#021))

#### 0.2.1

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.5.4 → [0.5.5](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#055))

#### 0.5.5

##### Patch Changes

- [`4b60e0c`](https://github.com/backstage/backstage/commit/4b60e0c): Remove extension points from `/alpha` export, they're available from the main package already
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.
- [`2107965`](https://github.com/backstage/backstage/commit/2107965): Turn down the logging level on most "all is well" type log messages

### `@backstage/plugin-catalog-backend-module-msgraph` (0.6.2 → [0.6.3](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#063))

#### 0.6.3

##### Patch Changes

- [`4b60e0c`](https://github.com/backstage/backstage/commit/4b60e0c): Remove extension points from `/alpha` export, they're available from the main package already
- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

### `@backstage/plugin-catalog-backend-module-openapi` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#022))

#### 0.2.2

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

### `@backstage/plugin-catalog-backend-module-puppetdb` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#023))

#### 0.2.3

##### Patch Changes

- [`4b60e0c`](https://github.com/backstage/backstage/commit/4b60e0c): Small tweaks to API reports to make them valid

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.5.0 → [0.5.1](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#051))

#### 0.5.1

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

### `@backstage/plugin-catalog-graph` (0.4.10 → [0.4.11](../../changelogs/@backstage/plugin-catalog-graph.md#0411))

#### 0.4.11

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`4d9f39e`](https://github.com/backstage/backstage/commit/4d9f39e): Added InfoCard `action` attribute for CatalogGraphCard

  ```tsx
  const action = <Button title="Action Button" onClick={handleClickEvent()} />
  <CatalogGraphCard action={action} />
  ```

### `@backstage/plugin-catalog-import` (0.12.4 → [0.12.5](../../changelogs/@backstage/plugin-catalog-import.md#0125))

#### 0.12.5

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`720a2f9`](https://github.com/backstage/backstage/commit/720a2f9): Updated dependency `git-url-parse` to `^15.0.0`.

### `@backstage/plugin-catalog-node` (1.13.0 → [1.13.1](../../changelogs/@backstage/plugin-catalog-node.md#1131))

#### 1.13.1

##### Patch Changes

- [`0801db6`](https://github.com/backstage/backstage/commit/0801db6): Documentation for the `testUtils` named export

### `@backstage/plugin-catalog-unprocessed-entities` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#029))

#### 0.2.9

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

### `@backstage/plugin-config-schema` (0.1.59 → [0.1.60](../../changelogs/@backstage/plugin-config-schema.md#0160))

#### 0.1.60

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

### `@backstage/plugin-devtools` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-devtools.md#0119))

#### 0.1.19

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

### `@backstage/plugin-devtools-backend` (0.4.0 → [0.4.1](../../changelogs/@backstage/plugin-devtools-backend.md#041))

#### 0.4.1

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

### `@backstage/plugin-events-backend` (0.3.12 → [0.3.13](../../changelogs/@backstage/plugin-events-backend.md#0313))

#### 0.3.13

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.
- [`5c728ee`](https://github.com/backstage/backstage/commit/5c728ee): The events backend now has its own built-in event bus for distributing events across multiple backend instances. It exposes a new HTTP API under `/bus/v1/` for publishing and reading events from the bus, as well as its own storage and notification mechanism for events.

  The backing event store for the bus only supports scaled deployment if PostgreSQL is used as the DBMS. If SQLite or MySQL is used, the event bus will fall back to an in-memory store that does not support multiple backend instances.

  The default `EventsService` implementation from `@backstage/plugin-events-node` has also been updated to use the new events bus.

### `@backstage/plugin-events-backend-module-aws-sqs` (0.4.2 → [0.4.3](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#043))

#### 0.4.3

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

### `@backstage/plugin-events-backend-module-azure` (0.2.11 → [0.2.12](../../changelogs/@backstage/plugin-events-backend-module-azure.md#0212))

#### 0.2.12

##### Patch Changes

- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

### `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.11 → [0.2.12](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0212))

#### 0.2.12

##### Patch Changes

- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

### `@backstage/plugin-events-backend-module-gerrit` (0.2.11 → [0.2.12](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0212))

#### 0.2.12

##### Patch Changes

- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

### `@backstage/plugin-events-backend-module-github` (0.2.11 → [0.2.12](../../changelogs/@backstage/plugin-events-backend-module-github.md#0212))

#### 0.2.12

##### Patch Changes

- [`2f88f88`](https://github.com/backstage/backstage/commit/2f88f88): Updated backend installation instructions.

### `@backstage/plugin-events-backend-module-gitlab` (0.2.11 → [0.2.12](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#0212))

#### 0.2.12

##### Patch Changes

- [`2f88f88`](https://github.com/backstage/backstage/commit/2f88f88): Updated backend installation instructions.

### `@backstage/plugin-events-node` (0.4.0 → [0.4.1](../../changelogs/@backstage/plugin-events-node.md#041))

#### 0.4.1

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`2f88f88`](https://github.com/backstage/backstage/commit/2f88f88): Updated backend installation instructions.
- [`a90ce4a`](https://github.com/backstage/backstage/commit/a90ce4a): The default implementation of the `EventsService` now uses the new event bus for distributing events across multiple backend instances if the events backend plugin is installed.

### `@backstage/plugin-home-react` (0.1.17 → [0.1.18](../../changelogs/@backstage/plugin-home-react.md#0118))

#### 0.1.18

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`e698470`](https://github.com/backstage/backstage/commit/e698470): Updated dependency `@rjsf/utils` to `5.21.2`.
  Updated dependency `@rjsf/core` to `5.21.2`.
  Updated dependency `@rjsf/material-ui` to `5.21.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.21.2`.

### `@backstage/plugin-kubernetes` (0.11.15 → [0.11.16](../../changelogs/@backstage/plugin-kubernetes.md#01116))

#### 0.11.16

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`605e0bb`](https://github.com/backstage/backstage/commit/605e0bb): Updated dependency `@kubernetes-models/base` to `^5.0.0`.
- [`276cd3d`](https://github.com/backstage/backstage/commit/276cd3d): Updated dependency `@kubernetes-models/apimachinery` to `^2.0.0`.

### `@backstage/plugin-kubernetes-backend` (0.18.6 → [0.18.7](../../changelogs/@backstage/plugin-kubernetes-backend.md#0187))

#### 0.18.7

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

### `@backstage/plugin-kubernetes-node` (0.1.19 → [0.1.20](../../changelogs/@backstage/plugin-kubernetes-node.md#0120))

#### 0.1.20

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

### `@backstage/plugin-kubernetes-react` (0.4.3 → [0.4.4](../../changelogs/@backstage/plugin-kubernetes-react.md#044))

#### 0.4.4

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`605e0bb`](https://github.com/backstage/backstage/commit/605e0bb): Updated dependency `@kubernetes-models/base` to `^5.0.0`.
- [`276cd3d`](https://github.com/backstage/backstage/commit/276cd3d): Updated dependency `@kubernetes-models/apimachinery` to `^2.0.0`.

### `@backstage/plugin-notifications` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-notifications.md#032))

#### 0.3.2

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

### `@backstage/plugin-notifications-backend` (0.4.0 → [0.4.1](../../changelogs/@backstage/plugin-notifications-backend.md#041))

#### 0.4.1

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

### `@backstage/plugin-notifications-backend-module-email` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-notifications-backend-module-email.md#031))

#### 0.3.1

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

### `@backstage/plugin-notifications-node` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-notifications-node.md#027))

#### 0.2.7

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

### `@backstage/plugin-org` (0.6.30 → [0.6.31](../../changelogs/@backstage/plugin-org.md#0631))

#### 0.6.31

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

### `@backstage/plugin-org-react` (0.1.29 → [0.1.30](../../changelogs/@backstage/plugin-org-react.md#0130))

#### 0.1.30

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

### `@backstage/plugin-permission-backend` (0.5.49 → [0.5.50](../../changelogs/@backstage/plugin-permission-backend.md#0550))

#### 0.5.50

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

### `@backstage/plugin-permission-node` (0.8.3 → [0.8.4](../../changelogs/@backstage/plugin-permission-node.md#084))

#### 0.8.4

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

### `@backstage/plugin-permission-react` (0.4.26 → [0.4.27](../../changelogs/@backstage/plugin-permission-react.md#0427))

#### 0.4.27

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

### `@backstage/plugin-proxy-backend` (0.5.6 → [0.5.7](../../changelogs/@backstage/plugin-proxy-backend.md#057))

#### 0.5.7

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

### `@backstage/plugin-search` (1.4.17 → [1.4.18](../../changelogs/@backstage/plugin-search.md#1418))

#### 1.4.18

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`88d03d8`](https://github.com/backstage/backstage/commit/88d03d8): Updated the default SearchType.Accordion behavior to remain open after result type selection. This is a UX improvement to reduce the number of clicks needed when toggling result type filters.

### `@backstage/plugin-search-backend-module-catalog` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#023))

#### 0.2.3

##### Patch Changes

- [`4b60e0c`](https://github.com/backstage/backstage/commit/4b60e0c): Remove extension points from `/alpha` export, they're available from the main package already
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.
- [`2f88f88`](https://github.com/backstage/backstage/commit/2f88f88): Updated backend installation instructions.

### `@backstage/plugin-search-backend-module-explore` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-search-backend-module-explore.md#023))

#### 0.2.3

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.
- [`c052931`](https://github.com/backstage/backstage/commit/c052931): Updated dependency `@backstage-community/plugin-explore-common` to `^0.0.6`.
- [`2f88f88`](https://github.com/backstage/backstage/commit/2f88f88): Updated backend installation instructions.

### `@backstage/plugin-search-backend-module-pg` (0.5.35 → [0.5.36](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0536))

#### 0.5.36

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

### `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#031))

#### 0.3.1

##### Patch Changes

- [`bc71718`](https://github.com/backstage/backstage/commit/bc71718): Updated installation instructions in README to not include `/alpha`.
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

### `@backstage/plugin-search-backend-node` (1.3.2 → [1.3.3](../../changelogs/@backstage/plugin-search-backend-node.md#133))

#### 1.3.3

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

### `@backstage/plugin-search-react` (1.8.0 → [1.8.1](../../changelogs/@backstage/plugin-search-react.md#181))

#### 1.8.1

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

### `@backstage/plugin-signals-backend` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-signals-backend.md#021))

#### 0.2.1

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

### `@backstage/plugin-signals-node` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-signals-node.md#0112))

#### 0.1.12

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

### `@backstage/plugin-techdocs-addons-test-utils` (1.0.39 → [1.0.40](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#1040))

#### 1.0.40

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

### `@backstage/plugin-techdocs-module-addons-contrib` (1.1.15 → [1.1.16](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1116))

#### 1.1.16

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`720a2f9`](https://github.com/backstage/backstage/commit/720a2f9): Updated dependency `git-url-parse` to `^15.0.0`.
- [`e8b4966`](https://github.com/backstage/backstage/commit/e8b4966): Use more of the available space for the navigation sidebar.

### `@backstage/plugin-techdocs-node` (1.12.11 → [1.12.12](../../changelogs/@backstage/plugin-techdocs-node.md#11212))

#### 1.12.12

##### Patch Changes

- [`7774828`](https://github.com/backstage/backstage/commit/7774828): Updated dependency `@smithy/node-http-handler` to `^3.0.0`.
- [`720a2f9`](https://github.com/backstage/backstage/commit/720a2f9): Updated dependency `git-url-parse` to `^15.0.0`.
- [`fbdc631`](https://github.com/backstage/backstage/commit/fbdc631): Allow to pass StorageOptions to GCS Publisher

### `@backstage/plugin-techdocs-react` (1.2.8 → [1.2.9](../../changelogs/@backstage/plugin-techdocs-react.md#129))

#### 1.2.9

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

### `@backstage/plugin-user-settings` (0.8.13 → [0.8.14](../../changelogs/@backstage/plugin-user-settings.md#0814))

#### 0.8.14

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`0040632`](https://github.com/backstage/backstage/commit/0040632): `useUserProfile` will now use the user's picture stored in the catalog as a fallback if the identity provider doesn't return a picture.

### `@backstage/plugin-user-settings-backend` (0.2.24 → [0.2.25](../../changelogs/@backstage/plugin-user-settings-backend.md#0225))

#### 0.2.25

##### Patch Changes

- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

### `@backstage/version-bridge` (1.0.9 → [1.0.10](../../changelogs/@backstage/version-bridge.md#1010))

#### 1.0.10

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

## Excluded dependency updates

- `@backstage/backend-plugin-api` (1.0.0 → [1.0.1](../../changelogs/@backstage/backend-plugin-api.md#101))
- `@backstage/frontend-defaults` (0.1.0 → [0.1.1](../../changelogs/@backstage/frontend-defaults.md#011))
- `@backstage/plugin-app-node` (0.1.25 → [0.1.26](../../changelogs/@backstage/plugin-app-node.md#0126))
- `@backstage/plugin-auth-backend-module-auth0-provider` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-auth-backend-module-auth0-provider.md#011))
- `@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-auth-backend-module-azure-easyauth-provider.md#021))
- `@backstage/plugin-auth-backend-module-bitbucket-server-provider` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-server-provider.md#011))
- `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#021))
- `@backstage/plugin-auth-backend-module-pinniped-provider` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#021))
- `@backstage/plugin-bitbucket-cloud-common` (0.2.23 → [0.2.24](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#0224))
- `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.4.0 → [0.4.1](../../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#041))
- `@backstage/plugin-catalog-backend-module-gcp` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#031))
- `@backstage/plugin-catalog-backend-module-github-org` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#032))
- `@backstage/plugin-catalog-backend-module-ldap` (0.9.0 → [0.9.1](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#091))
- `@backstage/plugin-catalog-backend-module-logs` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-catalog-backend-module-logs.md#012))
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#021))
- `@backstage/plugin-events-backend-test-utils` (0.1.35 → [0.1.36](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0136))
- `@backstage/plugin-permission-backend-module-allow-all-policy` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#021))
- `@techdocs/cli` (1.8.19 → [1.8.20](../../changelogs/@techdocs/cli.md#1820))
