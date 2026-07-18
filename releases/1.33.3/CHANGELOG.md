# Backstage Release 1.33.3 changelog

Changes between 1.33.2 and 1.33.3 — 48 changed and 0 added packages.

## Summary

- [0.0.x patch version bumps](#00x-patch-version-bumps): 2 packages
- [Other patch version bumps](#other-patch-version-bumps): 46 packages

## Table of contents

- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-kubernetes-cluster` (0.0.18 → 0.0.19)](#backstageplugin-kubernetes-cluster-0018--0019)
  - [`@backstage/plugin-signals` (0.0.12 → 0.0.13)](#backstageplugin-signals-0012--0013)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/app-defaults` (1.5.13 → 1.5.14)](#backstageapp-defaults-1513--1514)
  - [`@backstage/cli` (0.29.1 → 0.29.2)](#backstagecli-0291--0292)
  - [`@backstage/core-compat-api` (0.3.2 → 0.3.3)](#backstagecore-compat-api-032--033)
  - [`@backstage/core-components` (0.16.0 → 0.16.1)](#backstagecore-components-0160--0161)
  - [`@backstage/dev-utils` (1.1.3 → 1.1.4)](#backstagedev-utils-113--114)
  - [`@backstage/frontend-app-api` (0.10.1 → 0.10.2)](#backstagefrontend-app-api-0101--0102)
  - [`@backstage/frontend-defaults` (0.1.2 → 0.1.3)](#backstagefrontend-defaults-012--013)
  - [`@backstage/frontend-plugin-api` (0.9.1 → 0.9.2)](#backstagefrontend-plugin-api-091--092)
  - [`@backstage/frontend-test-utils` (0.2.2 → 0.2.3)](#backstagefrontend-test-utils-022--023)
  - [`@backstage/plugin-api-docs` (0.12.0 → 0.12.1)](#backstageplugin-api-docs-0120--0121)
  - [`@backstage/plugin-app` (0.1.2 → 0.1.3)](#backstageplugin-app-012--013)
  - [`@backstage/plugin-app-visualizer` (0.1.12 → 0.1.13)](#backstageplugin-app-visualizer-0112--0113)
  - [`@backstage/plugin-auth-react` (0.1.8 → 0.1.9)](#backstageplugin-auth-react-018--019)
  - [`@backstage/plugin-catalog` (1.25.0 → 1.25.1)](#backstageplugin-catalog-1250--1251)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.10.0 → 0.10.1)](#backstageplugin-catalog-backend-module-ldap-0100--0101)
  - [`@backstage/plugin-catalog-graph` (0.4.12 → 0.4.13)](#backstageplugin-catalog-graph-0412--0413)
  - [`@backstage/plugin-catalog-import` (0.12.6 → 0.12.7)](#backstageplugin-catalog-import-0126--0127)
  - [`@backstage/plugin-catalog-react` (1.14.1 → 1.14.2)](#backstageplugin-catalog-react-1141--1142)
  - [`@backstage/plugin-catalog-unprocessed-entities` (0.2.10 → 0.2.11)](#backstageplugin-catalog-unprocessed-entities-0210--0211)
  - [`@backstage/plugin-config-schema` (0.1.61 → 0.1.62)](#backstageplugin-config-schema-0161--0162)
  - [`@backstage/plugin-devtools` (0.1.20 → 0.1.21)](#backstageplugin-devtools-0120--0121)
  - [`@backstage/plugin-home` (0.8.1 → 0.8.2)](#backstageplugin-home-081--082)
  - [`@backstage/plugin-home-react` (0.1.19 → 0.1.20)](#backstageplugin-home-react-0119--0120)
  - [`@backstage/plugin-kubernetes` (0.12.0 → 0.12.1)](#backstageplugin-kubernetes-0120--0121)
  - [`@backstage/plugin-kubernetes-react` (0.5.0 → 0.5.1)](#backstageplugin-kubernetes-react-050--051)
  - [`@backstage/plugin-notifications` (0.4.0 → 0.4.1)](#backstageplugin-notifications-040--041)
  - [`@backstage/plugin-org` (0.6.32 → 0.6.33)](#backstageplugin-org-0632--0633)
  - [`@backstage/plugin-org-react` (0.1.31 → 0.1.32)](#backstageplugin-org-react-0131--0132)
  - [`@backstage/plugin-scaffolder` (1.27.0 → 1.27.1)](#backstageplugin-scaffolder-1270--1271)
  - [`@backstage/plugin-scaffolder-backend` (1.27.0 → 1.27.1)](#backstageplugin-scaffolder-backend-1270--1271)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket` (0.3.2 → 0.3.3)](#backstageplugin-scaffolder-backend-module-bitbucket-032--033)
  - [`@backstage/plugin-scaffolder-react` (1.14.0 → 1.14.1)](#backstageplugin-scaffolder-react-1140--1141)
  - [`@backstage/plugin-search` (1.4.19 → 1.4.20)](#backstageplugin-search-1419--1420)
  - [`@backstage/plugin-search-backend-module-techdocs` (0.3.2 → 0.3.3)](#backstageplugin-search-backend-module-techdocs-032--033)
  - [`@backstage/plugin-search-react` (1.8.2 → 1.8.3)](#backstageplugin-search-react-182--183)
  - [`@backstage/plugin-techdocs` (1.11.1 → 1.11.2)](#backstageplugin-techdocs-1111--1112)
  - [`@backstage/plugin-techdocs-addons-test-utils` (1.0.41 → 1.0.42)](#backstageplugin-techdocs-addons-test-utils-1041--1042)
  - [`@backstage/plugin-techdocs-backend` (1.11.2 → 1.11.3)](#backstageplugin-techdocs-backend-1112--1113)
  - [`@backstage/plugin-techdocs-module-addons-contrib` (1.1.17 → 1.1.18)](#backstageplugin-techdocs-module-addons-contrib-1117--1118)
  - [`@backstage/plugin-techdocs-node` (1.12.13 → 1.12.14)](#backstageplugin-techdocs-node-11213--11214)
  - [`@backstage/plugin-techdocs-react` (1.2.10 → 1.2.11)](#backstageplugin-techdocs-react-1210--1211)
  - [`@backstage/plugin-user-settings` (0.8.15 → 0.8.16)](#backstageplugin-user-settings-0815--0816)
  - [`@backstage/repo-tools` (0.11.0 → 0.11.1)](#backstagerepo-tools-0110--0111)
  - [`@backstage/test-utils` (1.7.1 → 1.7.2)](#backstagetest-utils-171--172)
  - [`@backstage/theme` (0.6.1 → 0.6.2)](#backstagetheme-061--062)
  - [`@techdocs/cli` (1.8.22 → 1.8.23)](#techdocscli-1822--1823)

## 0.0.x patch version bumps

### `@backstage/plugin-kubernetes-cluster` (0.0.18 → [0.0.19](../../changelogs/@backstage/plugin-kubernetes-cluster.md#0019))

_No changelog entries found._

### `@backstage/plugin-signals` (0.0.12 → [0.0.13](../../changelogs/@backstage/plugin-signals.md#0013))

_No changelog entries found._

## Other patch version bumps

### `@backstage/app-defaults` (1.5.13 → [1.5.14](../../changelogs/@backstage/app-defaults.md#1514))

_No changelog entries found._

### `@backstage/cli` (0.29.1 → [0.29.2](../../changelogs/@backstage/cli.md#0292))

_No changelog entries found._

### `@backstage/core-compat-api` (0.3.2 → [0.3.3](../../changelogs/@backstage/core-compat-api.md#033))

_No changelog entries found._

### `@backstage/core-components` (0.16.0 → [0.16.1](../../changelogs/@backstage/core-components.md#0161))

_No changelog entries found._

### `@backstage/dev-utils` (1.1.3 → [1.1.4](../../changelogs/@backstage/dev-utils.md#114))

_No changelog entries found._

### `@backstage/frontend-app-api` (0.10.1 → [0.10.2](../../changelogs/@backstage/frontend-app-api.md#0102))

_No changelog entries found._

### `@backstage/frontend-defaults` (0.1.2 → [0.1.3](../../changelogs/@backstage/frontend-defaults.md#013))

_No changelog entries found._

### `@backstage/frontend-plugin-api` (0.9.1 → [0.9.2](../../changelogs/@backstage/frontend-plugin-api.md#092))

_No changelog entries found._

### `@backstage/frontend-test-utils` (0.2.2 → [0.2.3](../../changelogs/@backstage/frontend-test-utils.md#023))

_No changelog entries found._

### `@backstage/plugin-api-docs` (0.12.0 → [0.12.1](../../changelogs/@backstage/plugin-api-docs.md#0121))

_No changelog entries found._

### `@backstage/plugin-app` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-app.md#013))

_No changelog entries found._

### `@backstage/plugin-app-visualizer` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-app-visualizer.md#0113))

_No changelog entries found._

### `@backstage/plugin-auth-react` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-auth-react.md#019))

_No changelog entries found._

### `@backstage/plugin-catalog` (1.25.0 → [1.25.1](../../changelogs/@backstage/plugin-catalog.md#1251))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-ldap` (0.10.0 → [0.10.1](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0101))

_No changelog entries found._

### `@backstage/plugin-catalog-graph` (0.4.12 → [0.4.13](../../changelogs/@backstage/plugin-catalog-graph.md#0413))

_No changelog entries found._

### `@backstage/plugin-catalog-import` (0.12.6 → [0.12.7](../../changelogs/@backstage/plugin-catalog-import.md#0127))

_No changelog entries found._

### `@backstage/plugin-catalog-react` (1.14.1 → [1.14.2](../../changelogs/@backstage/plugin-catalog-react.md#1142))

_No changelog entries found._

### `@backstage/plugin-catalog-unprocessed-entities` (0.2.10 → [0.2.11](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#0211))

_No changelog entries found._

### `@backstage/plugin-config-schema` (0.1.61 → [0.1.62](../../changelogs/@backstage/plugin-config-schema.md#0162))

_No changelog entries found._

### `@backstage/plugin-devtools` (0.1.20 → [0.1.21](../../changelogs/@backstage/plugin-devtools.md#0121))

_No changelog entries found._

### `@backstage/plugin-home` (0.8.1 → [0.8.2](../../changelogs/@backstage/plugin-home.md#082))

_No changelog entries found._

### `@backstage/plugin-home-react` (0.1.19 → [0.1.20](../../changelogs/@backstage/plugin-home-react.md#0120))

_No changelog entries found._

### `@backstage/plugin-kubernetes` (0.12.0 → [0.12.1](../../changelogs/@backstage/plugin-kubernetes.md#0121))

_No changelog entries found._

### `@backstage/plugin-kubernetes-react` (0.5.0 → [0.5.1](../../changelogs/@backstage/plugin-kubernetes-react.md#051))

_No changelog entries found._

### `@backstage/plugin-notifications` (0.4.0 → [0.4.1](../../changelogs/@backstage/plugin-notifications.md#041))

_No changelog entries found._

### `@backstage/plugin-org` (0.6.32 → [0.6.33](../../changelogs/@backstage/plugin-org.md#0633))

_No changelog entries found._

### `@backstage/plugin-org-react` (0.1.31 → [0.1.32](../../changelogs/@backstage/plugin-org-react.md#0132))

_No changelog entries found._

### `@backstage/plugin-scaffolder` (1.27.0 → [1.27.1](../../changelogs/@backstage/plugin-scaffolder.md#1271))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend` (1.27.0 → [1.27.1](../../changelogs/@backstage/plugin-scaffolder-backend.md#1271))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket.md#033))

_No changelog entries found._

### `@backstage/plugin-scaffolder-react` (1.14.0 → [1.14.1](../../changelogs/@backstage/plugin-scaffolder-react.md#1141))

_No changelog entries found._

### `@backstage/plugin-search` (1.4.19 → [1.4.20](../../changelogs/@backstage/plugin-search.md#1420))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-techdocs` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#033))

_No changelog entries found._

### `@backstage/plugin-search-react` (1.8.2 → [1.8.3](../../changelogs/@backstage/plugin-search-react.md#183))

_No changelog entries found._

### `@backstage/plugin-techdocs` (1.11.1 → [1.11.2](../../changelogs/@backstage/plugin-techdocs.md#1112))

_No changelog entries found._

### `@backstage/plugin-techdocs-addons-test-utils` (1.0.41 → [1.0.42](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#1042))

_No changelog entries found._

### `@backstage/plugin-techdocs-backend` (1.11.2 → [1.11.3](../../changelogs/@backstage/plugin-techdocs-backend.md#1113))

_No changelog entries found._

### `@backstage/plugin-techdocs-module-addons-contrib` (1.1.17 → [1.1.18](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1118))

_No changelog entries found._

### `@backstage/plugin-techdocs-node` (1.12.13 → [1.12.14](../../changelogs/@backstage/plugin-techdocs-node.md#11214))

_No changelog entries found._

### `@backstage/plugin-techdocs-react` (1.2.10 → [1.2.11](../../changelogs/@backstage/plugin-techdocs-react.md#1211))

_No changelog entries found._

### `@backstage/plugin-user-settings` (0.8.15 → [0.8.16](../../changelogs/@backstage/plugin-user-settings.md#0816))

_No changelog entries found._

### `@backstage/repo-tools` (0.11.0 → [0.11.1](../../changelogs/@backstage/repo-tools.md#0111))

_No changelog entries found._

### `@backstage/test-utils` (1.7.1 → [1.7.2](../../changelogs/@backstage/test-utils.md#172))

_No changelog entries found._

### `@backstage/theme` (0.6.1 → [0.6.2](../../changelogs/@backstage/theme.md#062))

_No changelog entries found._

### `@techdocs/cli` (1.8.22 → [1.8.23](../../changelogs/@techdocs/cli.md#1823))

_No changelog entries found._
