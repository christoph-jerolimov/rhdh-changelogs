# Backstage Release 1.25.0 changelog

Changes between 1.24.2 and 1.25.0 — 225 changed and 0 added packages.

## Summary

- [0.x minor version bumps](#0x-minor-version-bumps): 2 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 1 package
- [Other minor version bumps](#other-minor-version-bumps): 2 packages
- [Other patch version bumps](#other-patch-version-bumps): 97 packages
- [Excluded dependency updates](#excluded-dependency-updates): 123 packages

## Table of contents

- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/plugin-cloudbuild` (0.4.2 → 0.5.0)](#backstageplugin-cloudbuild-042--050)
  - [`@backstage/plugin-github-issues` (0.3.0 → 0.4.0)](#backstageplugin-github-issues-030--040)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-kubernetes-cluster` (0.0.8 → 0.0.9)](#backstageplugin-kubernetes-cluster-008--009)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/plugin-catalog-backend` (1.20.0 → 1.21.0)](#backstageplugin-catalog-backend-1200--1210)
  - [`@backstage/plugin-catalog-node` (1.10.0 → 1.11.0)](#backstageplugin-catalog-node-1100--1110)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-app-api` (0.6.1 → 0.6.2)](#backstagebackend-app-api-061--062)
  - [`@backstage/backend-common` (0.21.5 → 0.21.6)](#backstagebackend-common-0215--0216)
  - [`@backstage/catalog-client` (1.6.2 → 1.6.3)](#backstagecatalog-client-162--163)
  - [`@backstage/cli` (0.26.1 → 0.26.2)](#backstagecli-0261--0262)
  - [`@backstage/core-app-api` (1.12.2 → 1.12.3)](#backstagecore-app-api-1122--1123)
  - [`@backstage/core-components` (0.14.2 → 0.14.3)](#backstagecore-components-0142--0143)
  - [`@backstage/create-app` (0.5.12 → 0.5.13)](#backstagecreate-app-0512--0513)
  - [`@backstage/dev-utils` (1.0.29 → 1.0.30)](#backstagedev-utils-1029--1030)
  - [`@backstage/integration-aws-node` (0.1.11 → 0.1.12)](#backstageintegration-aws-node-0111--0112)
  - [`@backstage/plugin-adr` (0.6.15 → 0.6.16)](#backstageplugin-adr-0615--0616)
  - [`@backstage/plugin-airbrake` (0.3.32 → 0.3.33)](#backstageplugin-airbrake-0332--0333)
  - [`@backstage/plugin-allure` (0.1.48 → 0.1.49)](#backstageplugin-allure-0148--0149)
  - [`@backstage/plugin-apache-airflow` (0.2.22 → 0.2.23)](#backstageplugin-apache-airflow-0222--0223)
  - [`@backstage/plugin-auth-backend` (0.22.2 → 0.22.3)](#backstageplugin-auth-backend-0222--0223)
  - [`@backstage/plugin-auth-backend-module-guest-provider` (0.1.1 → 0.1.2)](#backstageplugin-auth-backend-module-guest-provider-011--012)
  - [`@backstage/plugin-auth-node` (0.4.10 → 0.4.11)](#backstageplugin-auth-node-0410--0411)
  - [`@backstage/plugin-azure-devops` (0.4.1 → 0.4.2)](#backstageplugin-azure-devops-041--042)
  - [`@backstage/plugin-azure-sites` (0.1.21 → 0.1.22)](#backstageplugin-azure-sites-0121--0122)
  - [`@backstage/plugin-badges` (0.2.56 → 0.2.57)](#backstageplugin-badges-0256--0257)
  - [`@backstage/plugin-bazaar` (0.2.24 → 0.2.25)](#backstageplugin-bazaar-0224--0225)
  - [`@backstage/plugin-bitrise` (0.1.59 → 0.1.60)](#backstageplugin-bitrise-0159--0160)
  - [`@backstage/plugin-catalog` (1.18.1 → 1.18.2)](#backstageplugin-catalog-1181--1182)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.3.10 → 0.3.11)](#backstageplugin-catalog-backend-module-aws-0310--0311)
  - [`@backstage/plugin-catalog-backend-module-unprocessed` (0.4.2 → 0.4.3)](#backstageplugin-catalog-backend-module-unprocessed-042--043)
  - [`@backstage/plugin-catalog-graph` (0.4.2 → 0.4.3)](#backstageplugin-catalog-graph-042--043)
  - [`@backstage/plugin-catalog-import` (0.10.8 → 0.10.9)](#backstageplugin-catalog-import-0108--0109)
  - [`@backstage/plugin-catalog-react` (1.11.1 → 1.11.2)](#backstageplugin-catalog-react-1111--1112)
  - [`@backstage/plugin-catalog-unprocessed-entities` (0.2.1 → 0.2.2)](#backstageplugin-catalog-unprocessed-entities-021--022)
  - [`@backstage/plugin-cicd-statistics` (0.1.34 → 0.1.35)](#backstageplugin-cicd-statistics-0134--0135)
  - [`@backstage/plugin-circleci` (0.3.32 → 0.3.33)](#backstageplugin-circleci-0332--0333)
  - [`@backstage/plugin-code-climate` (0.1.32 → 0.1.33)](#backstageplugin-code-climate-0132--0133)
  - [`@backstage/plugin-code-coverage` (0.2.25 → 0.2.26)](#backstageplugin-code-coverage-0225--0226)
  - [`@backstage/plugin-codescene` (0.1.24 → 0.1.25)](#backstageplugin-codescene-0124--0125)
  - [`@backstage/plugin-config-schema` (0.1.52 → 0.1.53)](#backstageplugin-config-schema-0152--0153)
  - [`@backstage/plugin-cost-insights` (0.12.21 → 0.12.22)](#backstageplugin-cost-insights-01221--01222)
  - [`@backstage/plugin-devtools` (0.1.11 → 0.1.12)](#backstageplugin-devtools-0111--0112)
  - [`@backstage/plugin-dynatrace` (10.0.1 → 10.0.2)](#backstageplugin-dynatrace-1001--1002)
  - [`@backstage/plugin-entity-feedback` (0.2.15 → 0.2.16)](#backstageplugin-entity-feedback-0215--0216)
  - [`@backstage/plugin-entity-validation` (0.1.17 → 0.1.18)](#backstageplugin-entity-validation-0117--0118)
  - [`@backstage/plugin-events-backend-module-aws-sqs` (0.3.1 → 0.3.2)](#backstageplugin-events-backend-module-aws-sqs-031--032)
  - [`@backstage/plugin-explore` (0.4.18 → 0.4.19)](#backstageplugin-explore-0418--0419)
  - [`@backstage/plugin-firehydrant` (0.2.16 → 0.2.17)](#backstageplugin-firehydrant-0216--0217)
  - [`@backstage/plugin-fossa` (0.2.64 → 0.2.65)](#backstageplugin-fossa-0264--0265)
  - [`@backstage/plugin-gcalendar` (0.3.25 → 0.3.26)](#backstageplugin-gcalendar-0325--0326)
  - [`@backstage/plugin-gcp-projects` (0.3.48 → 0.3.49)](#backstageplugin-gcp-projects-0348--0349)
  - [`@backstage/plugin-git-release-manager` (0.3.44 → 0.3.45)](#backstageplugin-git-release-manager-0344--0345)
  - [`@backstage/plugin-github-actions` (0.6.13 → 0.6.14)](#backstageplugin-github-actions-0613--0614)
  - [`@backstage/plugin-github-deployments` (0.1.63 → 0.1.64)](#backstageplugin-github-deployments-0163--0164)
  - [`@backstage/plugin-gitops-profiles` (0.3.47 → 0.3.48)](#backstageplugin-gitops-profiles-0347--0348)
  - [`@backstage/plugin-gocd` (0.1.38 → 0.1.39)](#backstageplugin-gocd-0138--0139)
  - [`@backstage/plugin-graphiql` (0.3.5 → 0.3.6)](#backstageplugin-graphiql-035--036)
  - [`@backstage/plugin-graphql-voyager` (0.1.14 → 0.1.15)](#backstageplugin-graphql-voyager-0114--0115)
  - [`@backstage/plugin-home` (0.7.1 → 0.7.2)](#backstageplugin-home-071--072)
  - [`@backstage/plugin-ilert` (0.2.21 → 0.2.22)](#backstageplugin-ilert-0221--0222)
  - [`@backstage/plugin-jenkins` (0.9.7 → 0.9.8)](#backstageplugin-jenkins-097--098)
  - [`@backstage/plugin-jenkins-backend` (0.4.2 → 0.4.3)](#backstageplugin-jenkins-backend-042--043)
  - [`@backstage/plugin-kafka` (0.3.32 → 0.3.33)](#backstageplugin-kafka-0332--0333)
  - [`@backstage/plugin-kubernetes-backend` (0.16.2 → 0.16.3)](#backstageplugin-kubernetes-backend-0162--0163)
  - [`@backstage/plugin-kubernetes-react` (0.3.2 → 0.3.3)](#backstageplugin-kubernetes-react-032--033)
  - [`@backstage/plugin-lighthouse` (0.4.17 → 0.4.18)](#backstageplugin-lighthouse-0417--0418)
  - [`@backstage/plugin-linguist` (0.1.17 → 0.1.18)](#backstageplugin-linguist-0117--0118)
  - [`@backstage/plugin-microsoft-calendar` (0.1.14 → 0.1.15)](#backstageplugin-microsoft-calendar-0114--0115)
  - [`@backstage/plugin-newrelic` (0.3.47 → 0.3.48)](#backstageplugin-newrelic-0347--0348)
  - [`@backstage/plugin-newrelic-dashboard` (0.3.7 → 0.3.8)](#backstageplugin-newrelic-dashboard-037--038)
  - [`@backstage/plugin-nomad` (0.1.13 → 0.1.14)](#backstageplugin-nomad-0113--0114)
  - [`@backstage/plugin-notifications` (0.1.1 → 0.1.2)](#backstageplugin-notifications-011--012)
  - [`@backstage/plugin-octopus-deploy` (0.2.14 → 0.2.15)](#backstageplugin-octopus-deploy-0214--0215)
  - [`@backstage/plugin-opencost` (0.2.7 → 0.2.8)](#backstageplugin-opencost-027--028)
  - [`@backstage/plugin-org` (0.6.22 → 0.6.23)](#backstageplugin-org-0622--0623)
  - [`@backstage/plugin-org-react` (0.1.21 → 0.1.22)](#backstageplugin-org-react-0121--0122)
  - [`@backstage/plugin-pagerduty` (0.7.4 → 0.7.5)](#backstageplugin-pagerduty-074--075)
  - [`@backstage/plugin-periskop` (0.1.30 → 0.1.31)](#backstageplugin-periskop-0130--0131)
  - [`@backstage/plugin-permission-backend` (0.5.39 → 0.5.40)](#backstageplugin-permission-backend-0539--0540)
  - [`@backstage/plugin-playlist` (0.2.6 → 0.2.7)](#backstageplugin-playlist-026--027)
  - [`@backstage/plugin-proxy-backend` (0.4.13 → 0.4.14)](#backstageplugin-proxy-backend-0413--0414)
  - [`@backstage/plugin-puppetdb` (0.1.15 → 0.1.16)](#backstageplugin-puppetdb-0115--0116)
  - [`@backstage/plugin-rollbar` (0.4.32 → 0.4.33)](#backstageplugin-rollbar-0432--0433)
  - [`@backstage/plugin-scaffolder` (1.19.1 → 1.19.2)](#backstageplugin-scaffolder-1191--1192)
  - [`@backstage/plugin-scaffolder-backend` (1.22.2 → 1.22.3)](#backstageplugin-scaffolder-backend-1222--1223)
  - [`@backstage/plugin-scaffolder-react` (1.8.2 → 1.8.3)](#backstageplugin-scaffolder-react-182--183)
  - [`@backstage/plugin-search` (1.4.8 → 1.4.9)](#backstageplugin-search-148--149)
  - [`@backstage/plugin-search-react` (1.7.8 → 1.7.9)](#backstageplugin-search-react-178--179)
  - [`@backstage/plugin-sentry` (0.5.17 → 0.5.18)](#backstageplugin-sentry-0517--0518)
  - [`@backstage/plugin-shortcuts` (0.3.21 → 0.3.22)](#backstageplugin-shortcuts-0321--0322)
  - [`@backstage/plugin-sonarqube` (0.7.14 → 0.7.15)](#backstageplugin-sonarqube-0714--0715)
  - [`@backstage/plugin-splunk-on-call` (0.4.21 → 0.4.22)](#backstageplugin-splunk-on-call-0421--0422)
  - [`@backstage/plugin-stack-overflow` (0.1.27 → 0.1.28)](#backstageplugin-stack-overflow-0127--0128)
  - [`@backstage/plugin-stackstorm` (0.1.13 → 0.1.14)](#backstageplugin-stackstorm-0113--0114)
  - [`@backstage/plugin-tech-insights` (0.3.24 → 0.3.25)](#backstageplugin-tech-insights-0324--0325)
  - [`@backstage/plugin-tech-radar` (0.7.1 → 0.7.2)](#backstageplugin-tech-radar-071--072)
  - [`@backstage/plugin-techdocs` (1.10.2 → 1.10.3)](#backstageplugin-techdocs-1102--1103)
  - [`@backstage/plugin-techdocs-node` (1.12.1 → 1.12.2)](#backstageplugin-techdocs-node-1121--1122)
  - [`@backstage/plugin-techdocs-react` (1.2.1 → 1.2.2)](#backstageplugin-techdocs-react-121--122)
  - [`@backstage/plugin-user-settings` (0.8.3 → 0.8.4)](#backstageplugin-user-settings-083--084)
  - [`@backstage/plugin-vault` (0.1.27 → 0.1.28)](#backstageplugin-vault-0127--0128)
  - [`@backstage/plugin-xcmetrics` (0.2.50 → 0.2.51)](#backstageplugin-xcmetrics-0250--0251)
  - [`@techdocs/cli` (1.8.7 → 1.8.8)](#techdocscli-187--188)
- [Excluded dependency updates](#excluded-dependency-updates)

## 0.x minor version bumps

### `@backstage/plugin-cloudbuild` (0.4.2 → [0.5.0](../../changelogs/@backstage/plugin-cloudbuild.md#050))

#### 0.5.0

##### Minor Changes

- [`5a78b73`](https://github.com/backstage/backstage/commit/5a78b73): Added a new column to `EntityCloudbuildContent` displaying the trigger name for each build.

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-github-issues` (0.3.0 → [0.4.0](../../changelogs/@backstage/plugin-github-issues.md#040))

#### 0.4.0

##### Minor Changes

- [`bc97524`](https://github.com/backstage/backstage/commit/bc97524): Added ESLint rule `no-top-level-material-ui-4-imports` in the `github-issues` plugin to migrate the Material UI imports.

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

## 0.0.x patch version bumps

### `@backstage/plugin-kubernetes-cluster` (0.0.8 → [0.0.9](../../changelogs/@backstage/plugin-kubernetes-cluster.md#009))

#### 0.0.9

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library
- [`1c1140e`](https://github.com/backstage/backstage/commit/1c1140e): Added ESLint rule `no-top-level-material-ui-4-imports` in the `kubernetes-cluster` plugin to migrate the Material UI imports.

## Other minor version bumps

### `@backstage/plugin-catalog-backend` (1.20.0 → [1.21.0](../../changelogs/@backstage/plugin-catalog-backend.md#1210))

#### 1.21.0

##### Minor Changes

- [`f3e2e86`](https://github.com/backstage/backstage/commit/f3e2e86): Added the ability to inject custom permissions from modules, on `CatalogBuilder` and `CatalogPermissionExtensionPoint`

### `@backstage/plugin-catalog-node` (1.10.0 → [1.11.0](../../changelogs/@backstage/plugin-catalog-node.md#1110))

#### 1.11.0

##### Minor Changes

- [`f3e2e86`](https://github.com/backstage/backstage/commit/f3e2e86): Added the ability to inject custom permissions from modules, on `CatalogBuilder` and `CatalogPermissionExtensionPoint`

## Other patch version bumps

### `@backstage/backend-app-api` (0.6.1 → [0.6.2](../../changelogs/@backstage/backend-app-api.md#062))

#### 0.6.2

##### Patch Changes

- [`e848644`](https://github.com/backstage/backstage/commit/e848644): Temporarily revert the rate limiting

### `@backstage/backend-common` (0.21.5 → [0.21.6](../../changelogs/@backstage/backend-common.md#0216))

#### 0.21.6

##### Patch Changes

- [`81a995f`](https://github.com/backstage/backstage/commit/81a995f): Updated dependency `aws-sdk-client-mock` to `^4.0.0`.

### `@backstage/catalog-client` (1.6.2 → [1.6.3](../../changelogs/@backstage/catalog-client.md#163))

#### 1.6.3

##### Patch Changes

- [`7e8a7c8`](https://github.com/backstage/backstage/commit/7e8a7c8): Added missing commas to the example of `queryEntities`

### `@backstage/cli` (0.26.1 → [0.26.2](../../changelogs/@backstage/cli.md#0262))

#### 0.26.2

##### Patch Changes

- [`eeb226a`](https://github.com/backstage/backstage/commit/eeb226a): Updated dependency `rollup` to `^4.0.0`.
- [`91192f4`](https://github.com/backstage/backstage/commit/91192f4): Updated backend plugin template to work better with new backend system
- [`cc371d6`](https://github.com/backstage/backstage/commit/cc371d6): Ignore transforming only on `react-use/lib`, not whole `react-use` in jest.

  ** POTENTIAL BREAKAGE **
  If your tests fail, please change to use path import from `react-use/esm/`. It is also recommended to migrate from `react-user/lib` imports to `react-use/esm`

### `@backstage/core-app-api` (1.12.2 → [1.12.3](../../changelogs/@backstage/core-app-api.md#1123))

#### 1.12.3

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/core-components` (0.14.2 → [0.14.3](../../changelogs/@backstage/core-components.md#0143))

#### 0.14.3

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/create-app` (0.5.12 → [0.5.13](../../changelogs/@backstage/create-app.md#0513))

#### 0.5.13

##### Patch Changes

- Bumped create-app version.

### `@backstage/dev-utils` (1.0.29 → [1.0.30](../../changelogs/@backstage/dev-utils.md#1030))

#### 1.0.30

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/integration-aws-node` (0.1.11 → [0.1.12](../../changelogs/@backstage/integration-aws-node.md#0112))

#### 0.1.12

##### Patch Changes

- [`81a995f`](https://github.com/backstage/backstage/commit/81a995f): Updated dependency `aws-sdk-client-mock` to `^4.0.0`.
- [`823cf8e`](https://github.com/backstage/backstage/commit/823cf8e): Updated dependency `aws-sdk-client-mock-jest` to `^4.0.0`.

### `@backstage/plugin-adr` (0.6.15 → [0.6.16](../../changelogs/@backstage/plugin-adr.md#0616))

#### 0.6.16

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-airbrake` (0.3.32 → [0.3.33](../../changelogs/@backstage/plugin-airbrake.md#0333))

#### 0.3.33

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-allure` (0.1.48 → [0.1.49](../../changelogs/@backstage/plugin-allure.md#0149))

#### 0.1.49

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-apache-airflow` (0.2.22 → [0.2.23](../../changelogs/@backstage/plugin-apache-airflow.md#0223))

#### 0.2.23

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-auth-backend` (0.22.2 → [0.22.3](../../changelogs/@backstage/plugin-auth-backend.md#0223))

#### 0.22.3

##### Patch Changes

- [`038b2e6`](https://github.com/backstage/backstage/commit/038b2e6): Only consider entities of kind `User` when using `findCatalogUser` with a filter query, unless an explicit `kind` filter is provided.

### `@backstage/plugin-auth-backend-module-guest-provider` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-auth-backend-module-guest-provider.md#012))

#### 0.1.2

##### Patch Changes

- [`4cc8279`](https://github.com/backstage/backstage/commit/4cc8279): Add installation instructions

### `@backstage/plugin-auth-node` (0.4.10 → [0.4.11](../../changelogs/@backstage/plugin-auth-node.md#0411))

#### 0.4.11

##### Patch Changes

- [`038b2e6`](https://github.com/backstage/backstage/commit/038b2e6): Only consider entities of kind `User` when using `findCatalogUser` with a filter query, unless an explicit `kind` filter is provided.

### `@backstage/plugin-azure-devops` (0.4.1 → [0.4.2](../../changelogs/@backstage/plugin-azure-devops.md#042))

#### 0.4.2

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-azure-sites` (0.1.21 → [0.1.22](../../changelogs/@backstage/plugin-azure-sites.md#0122))

#### 0.1.22

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-badges` (0.2.56 → [0.2.57](../../changelogs/@backstage/plugin-badges.md#0257))

#### 0.2.57

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-bazaar` (0.2.24 → [0.2.25](../../changelogs/@backstage/plugin-bazaar.md#0225))

#### 0.2.25

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-bitrise` (0.1.59 → [0.1.60](../../changelogs/@backstage/plugin-bitrise.md#0160))

#### 0.1.60

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-catalog` (1.18.1 → [1.18.2](../../changelogs/@backstage/plugin-catalog.md#1182))

#### 1.18.2

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library
- [`bbbd510`](https://github.com/backstage/backstage/commit/bbbd510): `CatalogIndexPage` now uses `EntitySearchBar` for text-based filtering of entities, saving the search text in the query parameters and debouncing the server requests.

### `@backstage/plugin-catalog-backend-module-aws` (0.3.10 → [0.3.11](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#0311))

#### 0.3.11

##### Patch Changes

- [`81a995f`](https://github.com/backstage/backstage/commit/81a995f): Updated dependency `aws-sdk-client-mock` to `^4.0.0`.
- [`823cf8e`](https://github.com/backstage/backstage/commit/823cf8e): Updated dependency `aws-sdk-client-mock-jest` to `^4.0.0`.

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.4.2 → [0.4.3](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#043))

#### 0.4.3

##### Patch Changes

- [`f3e2e86`](https://github.com/backstage/backstage/commit/f3e2e86): Internal update that injects custom permissions into the catalog using its extension point

### `@backstage/plugin-catalog-graph` (0.4.2 → [0.4.3](../../changelogs/@backstage/plugin-catalog-graph.md#043))

#### 0.4.3

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-catalog-import` (0.10.8 → [0.10.9](../../changelogs/@backstage/plugin-catalog-import.md#0109))

#### 0.10.9

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-catalog-react` (1.11.1 → [1.11.2](../../changelogs/@backstage/plugin-catalog-react.md#1112))

#### 1.11.2

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library
- [`b5cbbb6`](https://github.com/backstage/backstage/commit/b5cbbb6): `EntitySearchBar` and `EntityTextFilter` have been updated accordingly to persist the status as query params, following the same pattern as the other server side

### `@backstage/plugin-catalog-unprocessed-entities` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#022))

#### 0.2.2

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-cicd-statistics` (0.1.34 → [0.1.35](../../changelogs/@backstage/plugin-cicd-statistics.md#0135))

#### 0.1.35

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-circleci` (0.3.32 → [0.3.33](../../changelogs/@backstage/plugin-circleci.md#0333))

#### 0.3.33

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-code-climate` (0.1.32 → [0.1.33](../../changelogs/@backstage/plugin-code-climate.md#0133))

#### 0.1.33

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-code-coverage` (0.2.25 → [0.2.26](../../changelogs/@backstage/plugin-code-coverage.md#0226))

#### 0.2.26

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-codescene` (0.1.24 → [0.1.25](../../changelogs/@backstage/plugin-codescene.md#0125))

#### 0.1.25

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-config-schema` (0.1.52 → [0.1.53](../../changelogs/@backstage/plugin-config-schema.md#0153))

#### 0.1.53

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-cost-insights` (0.12.21 → [0.12.22](../../changelogs/@backstage/plugin-cost-insights.md#01222))

#### 0.12.22

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-devtools` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-devtools.md#0112))

#### 0.1.12

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-dynatrace` (10.0.1 → [10.0.2](../../changelogs/@backstage/plugin-dynatrace.md#1002))

#### 10.0.2

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-entity-feedback` (0.2.15 → [0.2.16](../../changelogs/@backstage/plugin-entity-feedback.md#0216))

#### 0.2.16

##### Patch Changes

- [`12610b4`](https://github.com/backstage/backstage/commit/12610b4): Added ESLint rule `no-top-level-material-ui-4-imports` in the `entity-feedback` plugin to migrate the Material UI imports.
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-entity-validation` (0.1.17 → [0.1.18](../../changelogs/@backstage/plugin-entity-validation.md#0118))

#### 0.1.18

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library
- [`2ec4a8d`](https://github.com/backstage/backstage/commit/2ec4a8d): Added ESLint rule `no-top-level-material-ui-4-imports` in the `entity-validation` plugin to migrate the Material UI imports.

### `@backstage/plugin-events-backend-module-aws-sqs` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#032))

#### 0.3.2

##### Patch Changes

- [`81a995f`](https://github.com/backstage/backstage/commit/81a995f): Updated dependency `aws-sdk-client-mock` to `^4.0.0`.

### `@backstage/plugin-explore` (0.4.18 → [0.4.19](../../changelogs/@backstage/plugin-explore.md#0419))

#### 0.4.19

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-firehydrant` (0.2.16 → [0.2.17](../../changelogs/@backstage/plugin-firehydrant.md#0217))

#### 0.2.17

##### Patch Changes

- [`157c7ae`](https://github.com/backstage/backstage/commit/157c7ae): Added ESLint rule `no-top-level-material-ui-4-imports` in the `firehydrant` plugin to migrate the Material UI imports.
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-fossa` (0.2.64 → [0.2.65](../../changelogs/@backstage/plugin-fossa.md#0265))

#### 0.2.65

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-gcalendar` (0.3.25 → [0.3.26](../../changelogs/@backstage/plugin-gcalendar.md#0326))

#### 0.3.26

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-gcp-projects` (0.3.48 → [0.3.49](../../changelogs/@backstage/plugin-gcp-projects.md#0349))

#### 0.3.49

##### Patch Changes

- [`7dad59c`](https://github.com/backstage/backstage/commit/7dad59c): Added ESLint rule `no-top-level-material-ui-4-imports` in the `gcp-projects` plugin to migrate the Material UI imports.

### `@backstage/plugin-git-release-manager` (0.3.44 → [0.3.45](../../changelogs/@backstage/plugin-git-release-manager.md#0345))

#### 0.3.45

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-github-actions` (0.6.13 → [0.6.14](../../changelogs/@backstage/plugin-github-actions.md#0614))

#### 0.6.14

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-github-deployments` (0.1.63 → [0.1.64](../../changelogs/@backstage/plugin-github-deployments.md#0164))

#### 0.1.64

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library
- [`a1ddc8d`](https://github.com/backstage/backstage/commit/a1ddc8d): Added ESLint rule `no-top-level-material-ui-4-imports` in the `github-deployments` plugin to migrate the Material UI imports.

### `@backstage/plugin-gitops-profiles` (0.3.47 → [0.3.48](../../changelogs/@backstage/plugin-gitops-profiles.md#0348))

#### 0.3.48

##### Patch Changes

- [`1a22254`](https://github.com/backstage/backstage/commit/1a22254): Added ESLint rule `no-top-level-material-ui-4-imports` in the `gitops-profiles` plugin to migrate the Material UI imports.
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-gocd` (0.1.38 → [0.1.39](../../changelogs/@backstage/plugin-gocd.md#0139))

#### 0.1.39

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library
- [`4166b10`](https://github.com/backstage/backstage/commit/4166b10): Added an optional ESLint rule - no-top-level-material-ui-4-imports - which has an auto fix function to migrate the imports and used it to migrate the Material UI imports.

### `@backstage/plugin-graphiql` (0.3.5 → [0.3.6](../../changelogs/@backstage/plugin-graphiql.md#036))

#### 0.3.6

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-graphql-voyager` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-graphql-voyager.md#0115))

#### 0.1.15

##### Patch Changes

- [`813f99d`](https://github.com/backstage/backstage/commit/813f99d): Added ESLint rule `no-top-level-material-ui-4-imports` in the `graphql-voyager` plugin to migrate the Material UI imports.
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-home` (0.7.1 → [0.7.2](../../changelogs/@backstage/plugin-home.md#072))

#### 0.7.2

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-ilert` (0.2.21 → [0.2.22](../../changelogs/@backstage/plugin-ilert.md#0222))

#### 0.2.22

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-jenkins` (0.9.7 → [0.9.8](../../changelogs/@backstage/plugin-jenkins.md#098))

#### 0.9.8

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-jenkins-backend` (0.4.2 → [0.4.3](../../changelogs/@backstage/plugin-jenkins-backend.md#043))

#### 0.4.3

##### Patch Changes

- [`836247c`](https://github.com/backstage/backstage/commit/836247c): Fixed an issue where the `httpAuth` service turned out to be undefined

### `@backstage/plugin-kafka` (0.3.32 → [0.3.33](../../changelogs/@backstage/plugin-kafka.md#0333))

#### 0.3.33

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-kubernetes-backend` (0.16.2 → [0.16.3](../../changelogs/@backstage/plugin-kubernetes-backend.md#0163))

#### 0.16.3

##### Patch Changes

- [`9b1abac`](https://github.com/backstage/backstage/commit/9b1abac): Added a new service locator `CatalogRelationServiceLocator` that only returns clusters an entity lists in `relations.dependsOn`.

### `@backstage/plugin-kubernetes-react` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-kubernetes-react.md#033))

#### 0.3.3

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-lighthouse` (0.4.17 → [0.4.18](../../changelogs/@backstage/plugin-lighthouse.md#0418))

#### 0.4.18

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-linguist` (0.1.17 → [0.1.18](../../changelogs/@backstage/plugin-linguist.md#0118))

#### 0.1.18

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-microsoft-calendar` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-microsoft-calendar.md#0115))

#### 0.1.15

##### Patch Changes

- [`4bba771`](https://github.com/backstage/backstage/commit/4bba771): Added ESLint rule `no-top-level-material-ui-4-imports` in the `microsoft-calender` plugin to migrate the Material UI imports.
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-newrelic` (0.3.47 → [0.3.48](../../changelogs/@backstage/plugin-newrelic.md#0348))

#### 0.3.48

##### Patch Changes

- [`f38f7d8`](https://github.com/backstage/backstage/commit/f38f7d8): Added an optional ESLint rule - no-top-level-material-ui-4-imports -in cloudbuild plugin which has an auto fix function to migrate the imports and used it to migrate the Material UI imports for plugins/newrelic.
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-newrelic-dashboard` (0.3.7 → [0.3.8](../../changelogs/@backstage/plugin-newrelic-dashboard.md#038))

#### 0.3.8

##### Patch Changes

- [`1d81cdd`](https://github.com/backstage/backstage/commit/1d81cdd): Added an optional ESLint rule - no-top-level-material-ui-4-imports -in new relic plugin which has an auto fix function to migrate the imports and used it to migrate the Material UI imports for plugins/newrelic-dashboard
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-nomad` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-nomad.md#0114))

#### 0.1.14

##### Patch Changes

- [`c116096`](https://github.com/backstage/backstage/commit/c116096): Added an optional ESLint rule - no-top-level-material-ui-4-imports -in nomad plugin which has an auto fix function to migrate the imports and used it to migrate the Material UI imports for plugins/nomad.
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-notifications` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-notifications.md#012))

#### 0.1.2

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library
- [`6a2fe4b`](https://github.com/backstage/backstage/commit/6a2fe4b): Added ESLint rule `no-top-level-material-ui-4-imports` in the `notifications` plugin to migrate the Material UI imports.

### `@backstage/plugin-octopus-deploy` (0.2.14 → [0.2.15](../../changelogs/@backstage/plugin-octopus-deploy.md#0215))

#### 0.2.15

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library
- [`004ce71`](https://github.com/backstage/backstage/commit/004ce71): Added ESLint rule `no-top-level-material-ui-4-imports` in the `octopus-deploy` plugin to migrate the Material UI imports.

### `@backstage/plugin-opencost` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-opencost.md#028))

#### 0.2.8

##### Patch Changes

- [`f21ef8c`](https://github.com/backstage/backstage/commit/f21ef8c): Added ESLint rule `no-top-level-material-ui-4-imports` in the `opencost` plugin to migrate the Material UI imports.

### `@backstage/plugin-org` (0.6.22 → [0.6.23](../../changelogs/@backstage/plugin-org.md#0623))

#### 0.6.23

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library
- [`0df5c60`](https://github.com/backstage/backstage/commit/0df5c60): Added ESLint rule `no-top-level-material-ui-4-imports` in the `org` plugin to migrate the Material UI imports.

### `@backstage/plugin-org-react` (0.1.21 → [0.1.22](../../changelogs/@backstage/plugin-org-react.md#0122))

#### 0.1.22

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-pagerduty` (0.7.4 → [0.7.5](../../changelogs/@backstage/plugin-pagerduty.md#075))

#### 0.7.5

##### Patch Changes

- [`2b43144`](https://github.com/backstage/backstage/commit/2b43144): Added ESLint rule `no-top-level-material-ui-4-imports` in the `pagerduty` plugin to migrate the Material UI imports.
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-periskop` (0.1.30 → [0.1.31](../../changelogs/@backstage/plugin-periskop.md#0131))

#### 0.1.31

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-permission-backend` (0.5.39 → [0.5.40](../../changelogs/@backstage/plugin-permission-backend.md#0540))

#### 0.5.40

##### Patch Changes

- [`f3e2e86`](https://github.com/backstage/backstage/commit/f3e2e86): Properly forward causes of errors from upstream backends in the `PermissionIntegrationClient`

### `@backstage/plugin-playlist` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-playlist.md#027))

#### 0.2.7

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-proxy-backend` (0.4.13 → [0.4.14](../../changelogs/@backstage/plugin-proxy-backend.md#0414))

#### 0.4.14

##### Patch Changes

- [`eae097c`](https://github.com/backstage/backstage/commit/eae097c): Allow unauthenticated requests.

### `@backstage/plugin-puppetdb` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-puppetdb.md#0116))

#### 0.1.16

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library
- [`8754b0e`](https://github.com/backstage/backstage/commit/8754b0e): Added ESLint rule `no-top-level-material-ui-4-imports` in the `puppetdb` plugin to migrate the Material UI imports.

### `@backstage/plugin-rollbar` (0.4.32 → [0.4.33](../../changelogs/@backstage/plugin-rollbar.md#0433))

#### 0.4.33

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-scaffolder` (1.19.1 → [1.19.2](../../changelogs/@backstage/plugin-scaffolder.md#1192))

#### 1.19.2

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-scaffolder-backend` (1.22.2 → [1.22.3](../../changelogs/@backstage/plugin-scaffolder-backend.md#1223))

#### 1.22.3

##### Patch Changes

- [`c74c2de`](https://github.com/backstage/backstage/commit/c74c2de): Fixed an issue causing actions to fail when retrieving auth credentials

### `@backstage/plugin-scaffolder-react` (1.8.2 → [1.8.3](../../changelogs/@backstage/plugin-scaffolder-react.md#183))

#### 1.8.3

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-search` (1.4.8 → [1.4.9](../../changelogs/@backstage/plugin-search.md#149))

#### 1.4.9

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-search-react` (1.7.8 → [1.7.9](../../changelogs/@backstage/plugin-search-react.md#179))

#### 1.7.9

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-sentry` (0.5.17 → [0.5.18](../../changelogs/@backstage/plugin-sentry.md#0518))

#### 0.5.18

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-shortcuts` (0.3.21 → [0.3.22](../../changelogs/@backstage/plugin-shortcuts.md#0322))

#### 0.3.22

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-sonarqube` (0.7.14 → [0.7.15](../../changelogs/@backstage/plugin-sonarqube.md#0715))

#### 0.7.15

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-splunk-on-call` (0.4.21 → [0.4.22](../../changelogs/@backstage/plugin-splunk-on-call.md#0422))

#### 0.4.22

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-stack-overflow` (0.1.27 → [0.1.28](../../changelogs/@backstage/plugin-stack-overflow.md#0128))

#### 0.1.28

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-stackstorm` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-stackstorm.md#0114))

#### 0.1.14

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-tech-insights` (0.3.24 → [0.3.25](../../changelogs/@backstage/plugin-tech-insights.md#0325))

#### 0.3.25

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-tech-radar` (0.7.1 → [0.7.2](../../changelogs/@backstage/plugin-tech-radar.md#072))

#### 0.7.2

##### Patch Changes

- [`89b093f`](https://github.com/backstage/backstage/commit/89b093f): Added ESLint rule `no-top-level-material-ui-4-imports` in the `tech-radar` plugin to migrate the Material UI imports.
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-techdocs` (1.10.2 → [1.10.3](../../changelogs/@backstage/plugin-techdocs.md#1103))

#### 1.10.3

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-techdocs-node` (1.12.1 → [1.12.2](../../changelogs/@backstage/plugin-techdocs-node.md#1122))

#### 1.12.2

##### Patch Changes

- [`81a995f`](https://github.com/backstage/backstage/commit/81a995f): Updated dependency `aws-sdk-client-mock` to `^4.0.0`.

### `@backstage/plugin-techdocs-react` (1.2.1 → [1.2.2](../../changelogs/@backstage/plugin-techdocs-react.md#122))

#### 1.2.2

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-user-settings` (0.8.3 → [0.8.4](../../changelogs/@backstage/plugin-user-settings.md#084))

#### 0.8.4

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-vault` (0.1.27 → [0.1.28](../../changelogs/@backstage/plugin-vault.md#0128))

#### 0.1.28

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-xcmetrics` (0.2.50 → [0.2.51](../../changelogs/@backstage/plugin-xcmetrics.md#0251))

#### 0.2.51

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@techdocs/cli` (1.8.7 → [1.8.8](../../changelogs/@techdocs/cli.md#188))

#### 1.8.8

##### Patch Changes

- [`8caf2f7`](https://github.com/backstage/backstage/commit/8caf2f7): Fix how the cli server mocks the new auth cookie endpoint.

## Excluded dependency updates

- `@backstage/app-defaults` (1.5.2 → [1.5.3](../../changelogs/@backstage/app-defaults.md#153))
- `@backstage/backend-defaults` (0.2.15 → [0.2.16](../../changelogs/@backstage/backend-defaults.md#0216))
- `@backstage/backend-dynamic-feature-service` (0.2.6 → [0.2.7](../../changelogs/@backstage/backend-dynamic-feature-service.md#027))
- `@backstage/backend-openapi-utils` (0.1.8 → [0.1.9](../../changelogs/@backstage/backend-openapi-utils.md#019))
- `@backstage/backend-plugin-api` (0.6.15 → [0.6.16](../../changelogs/@backstage/backend-plugin-api.md#0616))
- `@backstage/backend-tasks` (0.5.20 → [0.5.21](../../changelogs/@backstage/backend-tasks.md#0521))
- `@backstage/backend-test-utils` (0.3.5 → [0.3.6](../../changelogs/@backstage/backend-test-utils.md#036))
- `@backstage/core-compat-api` (0.2.2 → [0.2.3](../../changelogs/@backstage/core-compat-api.md#023))
- `@backstage/frontend-app-api` (0.6.2 → [0.6.3](../../changelogs/@backstage/frontend-app-api.md#063))
- `@backstage/frontend-plugin-api` (0.6.2 → [0.6.3](../../changelogs/@backstage/frontend-plugin-api.md#063))
- `@backstage/frontend-test-utils` (0.1.4 → [0.1.5](../../changelogs/@backstage/frontend-test-utils.md#015))
- `@backstage/plugin-adr-backend` (0.4.12 → [0.4.13](../../changelogs/@backstage/plugin-adr-backend.md#0413))
- `@backstage/plugin-airbrake-backend` (0.3.12 → [0.3.13](../../changelogs/@backstage/plugin-airbrake-backend.md#0313))
- `@backstage/plugin-analytics-module-ga` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-analytics-module-ga.md#023))
- `@backstage/plugin-analytics-module-ga4` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-analytics-module-ga4.md#023))
- `@backstage/plugin-analytics-module-newrelic-browser` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-analytics-module-newrelic-browser.md#013))
- `@backstage/plugin-api-docs` (0.11.2 → [0.11.3](../../changelogs/@backstage/plugin-api-docs.md#0113))
- `@backstage/plugin-apollo-explorer` (0.1.22 → [0.1.23](../../changelogs/@backstage/plugin-apollo-explorer.md#0123))
- `@backstage/plugin-app-backend` (0.3.63 → [0.3.64](../../changelogs/@backstage/plugin-app-backend.md#0364))
- `@backstage/plugin-app-node` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-app-node.md#0116))
- `@backstage/plugin-app-visualizer` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-app-visualizer.md#014))
- `@backstage/plugin-auth-backend-module-atlassian-provider` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#018))
- `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#018))
- `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.2.10 → [0.2.11](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#0211))
- `@backstage/plugin-auth-backend-module-github-provider` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#0113))
- `@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#0113))
- `@backstage/plugin-auth-backend-module-google-provider` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#0113))
- `@backstage/plugin-auth-backend-module-microsoft-provider` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#0111))
- `@backstage/plugin-auth-backend-module-oauth2-provider` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#0113))
- `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#019))
- `@backstage/plugin-auth-backend-module-oidc-provider` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#017))
- `@backstage/plugin-auth-backend-module-okta-provider` (0.0.8 → [0.0.9](../../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#009))
- `@backstage/plugin-auth-backend-module-pinniped-provider` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#0110))
- `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#018))
- `@backstage/plugin-auth-react` (0.0.2 → [0.0.3](../../changelogs/@backstage/plugin-auth-react.md#003))
- `@backstage/plugin-azure-devops-backend` (0.6.2 → [0.6.3](../../changelogs/@backstage/plugin-azure-devops-backend.md#063))
- `@backstage/plugin-azure-sites-backend` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-azure-sites-backend.md#033))
- `@backstage/plugin-badges-backend` (0.3.12 → [0.3.13](../../changelogs/@backstage/plugin-badges-backend.md#0313))
- `@backstage/plugin-bazaar-backend` (0.3.13 → [0.3.14](../../changelogs/@backstage/plugin-bazaar-backend.md#0314))
- `@backstage/plugin-catalog-backend-module-azure` (0.1.35 → [0.1.36](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0136))
- `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#0110))
- `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#023))
- `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.29 → [0.1.30](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#0130))
- `@backstage/plugin-catalog-backend-module-gcp` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#0117))
- `@backstage/plugin-catalog-backend-module-gerrit` (0.1.32 → [0.1.33](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0133))
- `@backstage/plugin-catalog-backend-module-github` (0.5.6 → [0.5.7](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#057))
- `@backstage/plugin-catalog-backend-module-github-org` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#0111))
- `@backstage/plugin-catalog-backend-module-gitlab` (0.3.13 → [0.3.14](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#0314))
- `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.20 → [0.4.21](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#0421))
- `@backstage/plugin-catalog-backend-module-ldap` (0.5.31 → [0.5.32](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0532))
- `@backstage/plugin-catalog-backend-module-msgraph` (0.5.23 → [0.5.24](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#0524))
- `@backstage/plugin-catalog-backend-module-openapi` (0.1.33 → [0.1.34](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0134))
- `@backstage/plugin-catalog-backend-module-puppetdb` (0.1.21 → [0.1.22](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0122))
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#0114))
- `@backstage/plugin-cicd-statistics-module-gitlab` (0.1.28 → [0.1.29](../../changelogs/@backstage/plugin-cicd-statistics-module-gitlab.md#0129))
- `@backstage/plugin-code-coverage-backend` (0.2.29 → [0.2.30](../../changelogs/@backstage/plugin-code-coverage-backend.md#0230))
- `@backstage/plugin-devtools-backend` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-devtools-backend.md#032))
- `@backstage/plugin-entity-feedback-backend` (0.2.12 → [0.2.13](../../changelogs/@backstage/plugin-entity-feedback-backend.md#0213))
- `@backstage/plugin-events-backend` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-events-backend.md#032))
- `@backstage/plugin-events-backend-module-azure` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-events-backend-module-azure.md#022))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#022))
- `@backstage/plugin-events-backend-module-gerrit` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#022))
- `@backstage/plugin-events-backend-module-github` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-events-backend-module-github.md#022))
- `@backstage/plugin-events-backend-module-gitlab` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#022))
- `@backstage/plugin-events-backend-test-utils` (0.1.25 → [0.1.26](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0126))
- `@backstage/plugin-events-node` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-events-node.md#032))
- `@backstage/plugin-explore-backend` (0.0.25 → [0.0.26](../../changelogs/@backstage/plugin-explore-backend.md#0026))
- `@backstage/plugin-github-pull-requests-board` (0.1.26 → [0.1.27](../../changelogs/@backstage/plugin-github-pull-requests-board.md#0127))
- `@backstage/plugin-home-react` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-home-react.md#0111))
- `@backstage/plugin-kafka-backend` (0.3.13 → [0.3.14](../../changelogs/@backstage/plugin-kafka-backend.md#0314))
- `@backstage/plugin-kubernetes` (0.11.7 → [0.11.8](../../changelogs/@backstage/plugin-kubernetes.md#0118))
- `@backstage/plugin-kubernetes-node` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-kubernetes-node.md#0110))
- `@backstage/plugin-lighthouse-backend` (0.4.8 → [0.4.9](../../changelogs/@backstage/plugin-lighthouse-backend.md#049))
- `@backstage/plugin-linguist-backend` (0.5.13 → [0.5.14](../../changelogs/@backstage/plugin-linguist-backend.md#0514))
- `@backstage/plugin-nomad-backend` (0.1.17 → [0.1.18](../../changelogs/@backstage/plugin-nomad-backend.md#0118))
- `@backstage/plugin-notifications-backend` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-notifications-backend.md#012))
- `@backstage/plugin-notifications-node` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-notifications-node.md#012))
- `@backstage/plugin-periskop-backend` (0.2.13 → [0.2.14](../../changelogs/@backstage/plugin-periskop-backend.md#0214))
- `@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#0113))
- `@backstage/plugin-permission-node` (0.7.26 → [0.7.27](../../changelogs/@backstage/plugin-permission-node.md#0727))
- `@backstage/plugin-playlist-backend` (0.3.19 → [0.3.20](../../changelogs/@backstage/plugin-playlist-backend.md#0320))
- `@backstage/plugin-rollbar-backend` (0.1.60 → [0.1.61](../../changelogs/@backstage/plugin-rollbar-backend.md#0161))
- `@backstage/plugin-scaffolder-backend-module-azure` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#018))
- `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket.md#026))
- `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#016))
- `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#016))
- `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.16 → [0.2.17](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#0217))
- `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.39 → [0.2.40](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0240))
- `@backstage/plugin-scaffolder-backend-module-gerrit` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#018))
- `@backstage/plugin-scaffolder-backend-module-gitea` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#016))
- `@backstage/plugin-scaffolder-backend-module-github` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#026))
- `@backstage/plugin-scaffolder-backend-module-gitlab` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#032))
- `@backstage/plugin-scaffolder-backend-module-rails` (0.4.32 → [0.4.33](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0433))
- `@backstage/plugin-scaffolder-backend-module-sentry` (0.1.23 → [0.1.24](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#0124))
- `@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.36 → [0.2.37](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0237))
- `@backstage/plugin-scaffolder-node` (0.4.1 → [0.4.2](../../changelogs/@backstage/plugin-scaffolder-node.md#042))
- `@backstage/plugin-scaffolder-node-test-utils` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#012))
- `@backstage/plugin-search-backend` (1.5.5 → [1.5.6](../../changelogs/@backstage/plugin-search-backend.md#156))
- `@backstage/plugin-search-backend-module-catalog` (0.1.20 → [0.1.21](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#0121))
- `@backstage/plugin-search-backend-module-elasticsearch` (1.3.18 → [1.3.19](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#1319))
- `@backstage/plugin-search-backend-module-explore` (0.1.19 → [0.1.20](../../changelogs/@backstage/plugin-search-backend-module-explore.md#0120))
- `@backstage/plugin-search-backend-module-pg` (0.5.24 → [0.5.25](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0525))
- `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#019))
- `@backstage/plugin-search-backend-module-techdocs` (0.1.20 → [0.1.21](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#0121))
- `@backstage/plugin-search-backend-node` (1.2.19 → [1.2.20](../../changelogs/@backstage/plugin-search-backend-node.md#1220))
- `@backstage/plugin-signals` (0.0.3 → [0.0.4](../../changelogs/@backstage/plugin-signals.md#004))
- `@backstage/plugin-signals-backend` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-signals-backend.md#012))
- `@backstage/plugin-signals-node` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-signals-node.md#012))
- `@backstage/plugin-sonarqube-backend` (0.2.17 → [0.2.18](../../changelogs/@backstage/plugin-sonarqube-backend.md#0218))
- `@backstage/plugin-stack-overflow-backend` (0.2.19 → [0.2.20](../../changelogs/@backstage/plugin-stack-overflow-backend.md#0220))
- `@backstage/plugin-tech-insights-backend` (0.5.29 → [0.5.30](../../changelogs/@backstage/plugin-tech-insights-backend.md#0530))
- `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.47 → [0.1.48](../../changelogs/@backstage/plugin-tech-insights-backend-module-jsonfc.md#0148))
- `@backstage/plugin-tech-insights-node` (0.5.1 → [0.5.2](../../changelogs/@backstage/plugin-tech-insights-node.md#052))
- `@backstage/plugin-techdocs-addons-test-utils` (1.0.29 → [1.0.30](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#1030))
- `@backstage/plugin-techdocs-backend` (1.10.2 → [1.10.3](../../changelogs/@backstage/plugin-techdocs-backend.md#1103))
- `@backstage/plugin-techdocs-module-addons-contrib` (1.1.7 → [1.1.8](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#118))
- `@backstage/plugin-todo` (0.2.36 → [0.2.37](../../changelogs/@backstage/plugin-todo.md#0237))
- `@backstage/plugin-todo-backend` (0.3.14 → [0.3.15](../../changelogs/@backstage/plugin-todo-backend.md#0315))
- `@backstage/plugin-user-settings-backend` (0.2.14 → [0.2.15](../../changelogs/@backstage/plugin-user-settings-backend.md#0215))
- `@backstage/plugin-vault-backend` (0.4.8 → [0.4.9](../../changelogs/@backstage/plugin-vault-backend.md#049))
- `@backstage/plugin-vault-node` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-vault-node.md#019))
- `@backstage/repo-tools` (0.7.1 → [0.7.2](../../changelogs/@backstage/repo-tools.md#072))
- `@backstage/test-utils` (1.5.2 → [1.5.3](../../changelogs/@backstage/test-utils.md#153))
