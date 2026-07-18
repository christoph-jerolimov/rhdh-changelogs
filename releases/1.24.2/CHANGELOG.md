# Backstage Release 1.24.2 changelog

Changes between 1.24.1 and 1.24.2 — 224 changed and 0 added packages.

## Summary

- [0.x minor version bumps](#0x-minor-version-bumps): 1 package
- [0.0.x patch version bumps](#00x-patch-version-bumps): 1 package
- [Other minor version bumps](#other-minor-version-bumps): 2 packages
- [Other patch version bumps](#other-patch-version-bumps): 90 packages
- [Excluded dependency updates](#excluded-dependency-updates): 130 packages

## Table of contents

- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/plugin-github-issues` (0.2.20 → 0.3.0)](#backstageplugin-github-issues-0220--030)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-kubernetes-cluster` (0.0.7 → 0.0.8)](#backstageplugin-kubernetes-cluster-007--008)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/plugin-catalog-backend` (1.19.0 → 1.20.0)](#backstageplugin-catalog-backend-1190--1200)
  - [`@backstage/plugin-catalog-node` (1.9.0 → 1.10.0)](#backstageplugin-catalog-node-190--1100)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-app-api` (0.6.0 → 0.6.1)](#backstagebackend-app-api-060--061)
  - [`@backstage/backend-common` (0.21.4 → 0.21.5)](#backstagebackend-common-0214--0215)
  - [`@backstage/catalog-client` (1.6.1 → 1.6.2)](#backstagecatalog-client-161--162)
  - [`@backstage/cli` (0.26.0 → 0.26.1)](#backstagecli-0260--0261)
  - [`@backstage/core-app-api` (1.12.1 → 1.12.2)](#backstagecore-app-api-1121--1122)
  - [`@backstage/core-components` (0.14.1 → 0.14.2)](#backstagecore-components-0141--0142)
  - [`@backstage/dev-utils` (1.0.28 → 1.0.29)](#backstagedev-utils-1028--1029)
  - [`@backstage/integration-aws-node` (0.1.10 → 0.1.11)](#backstageintegration-aws-node-0110--0111)
  - [`@backstage/plugin-adr` (0.6.14 → 0.6.15)](#backstageplugin-adr-0614--0615)
  - [`@backstage/plugin-airbrake` (0.3.31 → 0.3.32)](#backstageplugin-airbrake-0331--0332)
  - [`@backstage/plugin-allure` (0.1.47 → 0.1.48)](#backstageplugin-allure-0147--0148)
  - [`@backstage/plugin-apache-airflow` (0.2.21 → 0.2.22)](#backstageplugin-apache-airflow-0221--0222)
  - [`@backstage/plugin-azure-devops` (0.4.0 → 0.4.1)](#backstageplugin-azure-devops-040--041)
  - [`@backstage/plugin-azure-sites` (0.1.20 → 0.1.21)](#backstageplugin-azure-sites-0120--0121)
  - [`@backstage/plugin-badges` (0.2.55 → 0.2.56)](#backstageplugin-badges-0255--0256)
  - [`@backstage/plugin-bazaar` (0.2.23 → 0.2.24)](#backstageplugin-bazaar-0223--0224)
  - [`@backstage/plugin-bitrise` (0.1.58 → 0.1.59)](#backstageplugin-bitrise-0158--0159)
  - [`@backstage/plugin-catalog` (1.18.0 → 1.18.1)](#backstageplugin-catalog-1180--1181)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.3.9 → 0.3.10)](#backstageplugin-catalog-backend-module-aws-039--0310)
  - [`@backstage/plugin-catalog-backend-module-unprocessed` (0.4.1 → 0.4.2)](#backstageplugin-catalog-backend-module-unprocessed-041--042)
  - [`@backstage/plugin-catalog-graph` (0.4.1 → 0.4.2)](#backstageplugin-catalog-graph-041--042)
  - [`@backstage/plugin-catalog-import` (0.10.7 → 0.10.8)](#backstageplugin-catalog-import-0107--0108)
  - [`@backstage/plugin-catalog-react` (1.11.0 → 1.11.1)](#backstageplugin-catalog-react-1110--1111)
  - [`@backstage/plugin-catalog-unprocessed-entities` (0.2.0 → 0.2.1)](#backstageplugin-catalog-unprocessed-entities-020--021)
  - [`@backstage/plugin-cicd-statistics` (0.1.33 → 0.1.34)](#backstageplugin-cicd-statistics-0133--0134)
  - [`@backstage/plugin-circleci` (0.3.31 → 0.3.32)](#backstageplugin-circleci-0331--0332)
  - [`@backstage/plugin-cloudbuild` (0.4.1 → 0.4.2)](#backstageplugin-cloudbuild-041--042)
  - [`@backstage/plugin-code-climate` (0.1.31 → 0.1.32)](#backstageplugin-code-climate-0131--0132)
  - [`@backstage/plugin-code-coverage` (0.2.24 → 0.2.25)](#backstageplugin-code-coverage-0224--0225)
  - [`@backstage/plugin-codescene` (0.1.23 → 0.1.24)](#backstageplugin-codescene-0123--0124)
  - [`@backstage/plugin-config-schema` (0.1.51 → 0.1.52)](#backstageplugin-config-schema-0151--0152)
  - [`@backstage/plugin-cost-insights` (0.12.20 → 0.12.21)](#backstageplugin-cost-insights-01220--01221)
  - [`@backstage/plugin-devtools` (0.1.10 → 0.1.11)](#backstageplugin-devtools-0110--0111)
  - [`@backstage/plugin-dynatrace` (10.0.0 → 10.0.1)](#backstageplugin-dynatrace-1000--1001)
  - [`@backstage/plugin-entity-feedback` (0.2.14 → 0.2.15)](#backstageplugin-entity-feedback-0214--0215)
  - [`@backstage/plugin-entity-validation` (0.1.16 → 0.1.17)](#backstageplugin-entity-validation-0116--0117)
  - [`@backstage/plugin-events-backend-module-aws-sqs` (0.3.0 → 0.3.1)](#backstageplugin-events-backend-module-aws-sqs-030--031)
  - [`@backstage/plugin-explore` (0.4.17 → 0.4.18)](#backstageplugin-explore-0417--0418)
  - [`@backstage/plugin-firehydrant` (0.2.15 → 0.2.16)](#backstageplugin-firehydrant-0215--0216)
  - [`@backstage/plugin-fossa` (0.2.63 → 0.2.64)](#backstageplugin-fossa-0263--0264)
  - [`@backstage/plugin-gcalendar` (0.3.24 → 0.3.25)](#backstageplugin-gcalendar-0324--0325)
  - [`@backstage/plugin-gcp-projects` (0.3.47 → 0.3.48)](#backstageplugin-gcp-projects-0347--0348)
  - [`@backstage/plugin-git-release-manager` (0.3.43 → 0.3.44)](#backstageplugin-git-release-manager-0343--0344)
  - [`@backstage/plugin-github-actions` (0.6.12 → 0.6.13)](#backstageplugin-github-actions-0612--0613)
  - [`@backstage/plugin-github-deployments` (0.1.62 → 0.1.63)](#backstageplugin-github-deployments-0162--0163)
  - [`@backstage/plugin-gitops-profiles` (0.3.46 → 0.3.47)](#backstageplugin-gitops-profiles-0346--0347)
  - [`@backstage/plugin-gocd` (0.1.37 → 0.1.38)](#backstageplugin-gocd-0137--0138)
  - [`@backstage/plugin-graphiql` (0.3.4 → 0.3.5)](#backstageplugin-graphiql-034--035)
  - [`@backstage/plugin-graphql-voyager` (0.1.13 → 0.1.14)](#backstageplugin-graphql-voyager-0113--0114)
  - [`@backstage/plugin-home` (0.7.0 → 0.7.1)](#backstageplugin-home-070--071)
  - [`@backstage/plugin-ilert` (0.2.20 → 0.2.21)](#backstageplugin-ilert-0220--0221)
  - [`@backstage/plugin-jenkins` (0.9.6 → 0.9.7)](#backstageplugin-jenkins-096--097)
  - [`@backstage/plugin-kafka` (0.3.31 → 0.3.32)](#backstageplugin-kafka-0331--0332)
  - [`@backstage/plugin-kubernetes-backend` (0.16.1 → 0.16.2)](#backstageplugin-kubernetes-backend-0161--0162)
  - [`@backstage/plugin-kubernetes-react` (0.3.1 → 0.3.2)](#backstageplugin-kubernetes-react-031--032)
  - [`@backstage/plugin-lighthouse` (0.4.16 → 0.4.17)](#backstageplugin-lighthouse-0416--0417)
  - [`@backstage/plugin-linguist` (0.1.16 → 0.1.17)](#backstageplugin-linguist-0116--0117)
  - [`@backstage/plugin-microsoft-calendar` (0.1.13 → 0.1.14)](#backstageplugin-microsoft-calendar-0113--0114)
  - [`@backstage/plugin-newrelic` (0.3.46 → 0.3.47)](#backstageplugin-newrelic-0346--0347)
  - [`@backstage/plugin-newrelic-dashboard` (0.3.6 → 0.3.7)](#backstageplugin-newrelic-dashboard-036--037)
  - [`@backstage/plugin-nomad` (0.1.12 → 0.1.13)](#backstageplugin-nomad-0112--0113)
  - [`@backstage/plugin-notifications` (0.1.0 → 0.1.1)](#backstageplugin-notifications-010--011)
  - [`@backstage/plugin-octopus-deploy` (0.2.13 → 0.2.14)](#backstageplugin-octopus-deploy-0213--0214)
  - [`@backstage/plugin-opencost` (0.2.6 → 0.2.7)](#backstageplugin-opencost-026--027)
  - [`@backstage/plugin-org` (0.6.21 → 0.6.22)](#backstageplugin-org-0621--0622)
  - [`@backstage/plugin-org-react` (0.1.20 → 0.1.21)](#backstageplugin-org-react-0120--0121)
  - [`@backstage/plugin-pagerduty` (0.7.3 → 0.7.4)](#backstageplugin-pagerduty-073--074)
  - [`@backstage/plugin-periskop` (0.1.29 → 0.1.30)](#backstageplugin-periskop-0129--0130)
  - [`@backstage/plugin-permission-backend` (0.5.38 → 0.5.39)](#backstageplugin-permission-backend-0538--0539)
  - [`@backstage/plugin-playlist` (0.2.5 → 0.2.6)](#backstageplugin-playlist-025--026)
  - [`@backstage/plugin-puppetdb` (0.1.14 → 0.1.15)](#backstageplugin-puppetdb-0114--0115)
  - [`@backstage/plugin-rollbar` (0.4.31 → 0.4.32)](#backstageplugin-rollbar-0431--0432)
  - [`@backstage/plugin-scaffolder` (1.19.0 → 1.19.1)](#backstageplugin-scaffolder-1190--1191)
  - [`@backstage/plugin-scaffolder-react` (1.8.1 → 1.8.2)](#backstageplugin-scaffolder-react-181--182)
  - [`@backstage/plugin-search` (1.4.7 → 1.4.8)](#backstageplugin-search-147--148)
  - [`@backstage/plugin-search-react` (1.7.7 → 1.7.8)](#backstageplugin-search-react-177--178)
  - [`@backstage/plugin-sentry` (0.5.16 → 0.5.17)](#backstageplugin-sentry-0516--0517)
  - [`@backstage/plugin-shortcuts` (0.3.20 → 0.3.21)](#backstageplugin-shortcuts-0320--0321)
  - [`@backstage/plugin-sonarqube` (0.7.13 → 0.7.14)](#backstageplugin-sonarqube-0713--0714)
  - [`@backstage/plugin-splunk-on-call` (0.4.20 → 0.4.21)](#backstageplugin-splunk-on-call-0420--0421)
  - [`@backstage/plugin-stack-overflow` (0.1.26 → 0.1.27)](#backstageplugin-stack-overflow-0126--0127)
  - [`@backstage/plugin-stackstorm` (0.1.12 → 0.1.13)](#backstageplugin-stackstorm-0112--0113)
  - [`@backstage/plugin-tech-insights` (0.3.23 → 0.3.24)](#backstageplugin-tech-insights-0323--0324)
  - [`@backstage/plugin-tech-radar` (0.7.0 → 0.7.1)](#backstageplugin-tech-radar-070--071)
  - [`@backstage/plugin-techdocs` (1.10.1 → 1.10.2)](#backstageplugin-techdocs-1101--1102)
  - [`@backstage/plugin-techdocs-node` (1.12.0 → 1.12.1)](#backstageplugin-techdocs-node-1120--1121)
  - [`@backstage/plugin-techdocs-react` (1.2.0 → 1.2.1)](#backstageplugin-techdocs-react-120--121)
  - [`@backstage/plugin-user-settings` (0.8.2 → 0.8.3)](#backstageplugin-user-settings-082--083)
  - [`@backstage/plugin-vault` (0.1.26 → 0.1.27)](#backstageplugin-vault-0126--0127)
  - [`@backstage/plugin-xcmetrics` (0.2.49 → 0.2.50)](#backstageplugin-xcmetrics-0249--0250)
- [Excluded dependency updates](#excluded-dependency-updates)

## 0.x minor version bumps

### `@backstage/plugin-github-issues` (0.2.20 → [0.3.0](../../changelogs/@backstage/plugin-github-issues.md#030))

#### 0.3.0

##### Minor Changes

- [`bc97524`](https://github.com/backstage/backstage/commit/bc97524): Added ESLint rule `no-top-level-material-ui-4-imports` in the `github-issues` plugin to migrate the Material UI imports.

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

## 0.0.x patch version bumps

### `@backstage/plugin-kubernetes-cluster` (0.0.7 → [0.0.8](../../changelogs/@backstage/plugin-kubernetes-cluster.md#008))

#### 0.0.8

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library
- [`1c1140e`](https://github.com/backstage/backstage/commit/1c1140e): Added ESLint rule `no-top-level-material-ui-4-imports` in the `kubernetes-cluster` plugin to migrate the Material UI imports.

## Other minor version bumps

### `@backstage/plugin-catalog-backend` (1.19.0 → [1.20.0](../../changelogs/@backstage/plugin-catalog-backend.md#1200))

#### 1.20.0

##### Minor Changes

- [`f3e2e86`](https://github.com/backstage/backstage/commit/f3e2e86): Added the ability to inject custom permissions from modules, on `CatalogBuilder` and `CatalogPermissionExtensionPoint`

### `@backstage/plugin-catalog-node` (1.9.0 → [1.10.0](../../changelogs/@backstage/plugin-catalog-node.md#1100))

#### 1.10.0

##### Minor Changes

- [`f3e2e86`](https://github.com/backstage/backstage/commit/f3e2e86): Added the ability to inject custom permissions from modules, on `CatalogBuilder` and `CatalogPermissionExtensionPoint`

## Other patch version bumps

### `@backstage/backend-app-api` (0.6.0 → [0.6.1](../../changelogs/@backstage/backend-app-api.md#061))

#### 0.6.1

##### Patch Changes

- [`de1f45d`](https://github.com/backstage/backstage/commit/de1f45d): Temporarily revert the rate limiting

### `@backstage/backend-common` (0.21.4 → [0.21.5](../../changelogs/@backstage/backend-common.md#0215))

#### 0.21.5

##### Patch Changes

- [`81a995f`](https://github.com/backstage/backstage/commit/81a995f): Updated dependency `aws-sdk-client-mock` to `^4.0.0`.

### `@backstage/catalog-client` (1.6.1 → [1.6.2](../../changelogs/@backstage/catalog-client.md#162))

#### 1.6.2

##### Patch Changes

- [`7e8a7c8`](https://github.com/backstage/backstage/commit/7e8a7c8): Added missing commas to the example of `queryEntities`

### `@backstage/cli` (0.26.0 → [0.26.1](../../changelogs/@backstage/cli.md#0261))

#### 0.26.1

##### Patch Changes

- [`eeb226a`](https://github.com/backstage/backstage/commit/eeb226a): Updated dependency `rollup` to `^4.0.0`.
- [`cc371d6`](https://github.com/backstage/backstage/commit/cc371d6): Ignore transforming only on `react-use/lib`, not whole `react-use` in jest.

  ** POTENTIAL BREAKAGE **
  If your tests fail, please change to use path import from `react-use/esm/`. It is also recommended to migrate from `react-user/lib` imports to `react-use/esm`

### `@backstage/core-app-api` (1.12.1 → [1.12.2](../../changelogs/@backstage/core-app-api.md#1122))

#### 1.12.2

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/core-components` (0.14.1 → [0.14.2](../../changelogs/@backstage/core-components.md#0142))

#### 0.14.2

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/dev-utils` (1.0.28 → [1.0.29](../../changelogs/@backstage/dev-utils.md#1029))

#### 1.0.29

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/integration-aws-node` (0.1.10 → [0.1.11](../../changelogs/@backstage/integration-aws-node.md#0111))

#### 0.1.11

##### Patch Changes

- [`81a995f`](https://github.com/backstage/backstage/commit/81a995f): Updated dependency `aws-sdk-client-mock` to `^4.0.0`.
- [`823cf8e`](https://github.com/backstage/backstage/commit/823cf8e): Updated dependency `aws-sdk-client-mock-jest` to `^4.0.0`.

### `@backstage/plugin-adr` (0.6.14 → [0.6.15](../../changelogs/@backstage/plugin-adr.md#0615))

#### 0.6.15

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-airbrake` (0.3.31 → [0.3.32](../../changelogs/@backstage/plugin-airbrake.md#0332))

#### 0.3.32

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-allure` (0.1.47 → [0.1.48](../../changelogs/@backstage/plugin-allure.md#0148))

#### 0.1.48

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-apache-airflow` (0.2.21 → [0.2.22](../../changelogs/@backstage/plugin-apache-airflow.md#0222))

#### 0.2.22

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-azure-devops` (0.4.0 → [0.4.1](../../changelogs/@backstage/plugin-azure-devops.md#041))

#### 0.4.1

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-azure-sites` (0.1.20 → [0.1.21](../../changelogs/@backstage/plugin-azure-sites.md#0121))

#### 0.1.21

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-badges` (0.2.55 → [0.2.56](../../changelogs/@backstage/plugin-badges.md#0256))

#### 0.2.56

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-bazaar` (0.2.23 → [0.2.24](../../changelogs/@backstage/plugin-bazaar.md#0224))

#### 0.2.24

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-bitrise` (0.1.58 → [0.1.59](../../changelogs/@backstage/plugin-bitrise.md#0159))

#### 0.1.59

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-catalog` (1.18.0 → [1.18.1](../../changelogs/@backstage/plugin-catalog.md#1181))

#### 1.18.1

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-catalog-backend-module-aws` (0.3.9 → [0.3.10](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#0310))

#### 0.3.10

##### Patch Changes

- [`81a995f`](https://github.com/backstage/backstage/commit/81a995f): Updated dependency `aws-sdk-client-mock` to `^4.0.0`.
- [`823cf8e`](https://github.com/backstage/backstage/commit/823cf8e): Updated dependency `aws-sdk-client-mock-jest` to `^4.0.0`.

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.4.1 → [0.4.2](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#042))

#### 0.4.2

##### Patch Changes

- [`f3e2e86`](https://github.com/backstage/backstage/commit/f3e2e86): Internal update that injects custom permissions into the catalog using its extension point

### `@backstage/plugin-catalog-graph` (0.4.1 → [0.4.2](../../changelogs/@backstage/plugin-catalog-graph.md#042))

#### 0.4.2

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-catalog-import` (0.10.7 → [0.10.8](../../changelogs/@backstage/plugin-catalog-import.md#0108))

#### 0.10.8

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-catalog-react` (1.11.0 → [1.11.1](../../changelogs/@backstage/plugin-catalog-react.md#1111))

#### 1.11.1

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-catalog-unprocessed-entities` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#021))

#### 0.2.1

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-cicd-statistics` (0.1.33 → [0.1.34](../../changelogs/@backstage/plugin-cicd-statistics.md#0134))

#### 0.1.34

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-circleci` (0.3.31 → [0.3.32](../../changelogs/@backstage/plugin-circleci.md#0332))

#### 0.3.32

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-cloudbuild` (0.4.1 → [0.4.2](../../changelogs/@backstage/plugin-cloudbuild.md#042))

#### 0.4.2

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-code-climate` (0.1.31 → [0.1.32](../../changelogs/@backstage/plugin-code-climate.md#0132))

#### 0.1.32

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-code-coverage` (0.2.24 → [0.2.25](../../changelogs/@backstage/plugin-code-coverage.md#0225))

#### 0.2.25

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-codescene` (0.1.23 → [0.1.24](../../changelogs/@backstage/plugin-codescene.md#0124))

#### 0.1.24

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-config-schema` (0.1.51 → [0.1.52](../../changelogs/@backstage/plugin-config-schema.md#0152))

#### 0.1.52

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-cost-insights` (0.12.20 → [0.12.21](../../changelogs/@backstage/plugin-cost-insights.md#01221))

#### 0.12.21

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-devtools` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-devtools.md#0111))

#### 0.1.11

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-dynatrace` (10.0.0 → [10.0.1](../../changelogs/@backstage/plugin-dynatrace.md#1001))

#### 10.0.1

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-entity-feedback` (0.2.14 → [0.2.15](../../changelogs/@backstage/plugin-entity-feedback.md#0215))

#### 0.2.15

##### Patch Changes

- [`12610b4`](https://github.com/backstage/backstage/commit/12610b4): Added ESLint rule `no-top-level-material-ui-4-imports` in the `entity-feedback` plugin to migrate the Material UI imports.
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-entity-validation` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-entity-validation.md#0117))

#### 0.1.17

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library
- [`2ec4a8d`](https://github.com/backstage/backstage/commit/2ec4a8d): Added ESLint rule `no-top-level-material-ui-4-imports` in the `entity-validation` plugin to migrate the Material UI imports.

### `@backstage/plugin-events-backend-module-aws-sqs` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#031))

#### 0.3.1

##### Patch Changes

- [`81a995f`](https://github.com/backstage/backstage/commit/81a995f): Updated dependency `aws-sdk-client-mock` to `^4.0.0`.

### `@backstage/plugin-explore` (0.4.17 → [0.4.18](../../changelogs/@backstage/plugin-explore.md#0418))

#### 0.4.18

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-firehydrant` (0.2.15 → [0.2.16](../../changelogs/@backstage/plugin-firehydrant.md#0216))

#### 0.2.16

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-fossa` (0.2.63 → [0.2.64](../../changelogs/@backstage/plugin-fossa.md#0264))

#### 0.2.64

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-gcalendar` (0.3.24 → [0.3.25](../../changelogs/@backstage/plugin-gcalendar.md#0325))

#### 0.3.25

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-gcp-projects` (0.3.47 → [0.3.48](../../changelogs/@backstage/plugin-gcp-projects.md#0348))

#### 0.3.48

##### Patch Changes

- [`7dad59c`](https://github.com/backstage/backstage/commit/7dad59c): Added ESLint rule `no-top-level-material-ui-4-imports` in the `gcp-projects` plugin to migrate the Material UI imports.

### `@backstage/plugin-git-release-manager` (0.3.43 → [0.3.44](../../changelogs/@backstage/plugin-git-release-manager.md#0344))

#### 0.3.44

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-github-actions` (0.6.12 → [0.6.13](../../changelogs/@backstage/plugin-github-actions.md#0613))

#### 0.6.13

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-github-deployments` (0.1.62 → [0.1.63](../../changelogs/@backstage/plugin-github-deployments.md#0163))

#### 0.1.63

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library
- [`a1ddc8d`](https://github.com/backstage/backstage/commit/a1ddc8d): Added ESLint rule `no-top-level-material-ui-4-imports` in the `github-deployments` plugin to migrate the Material UI imports.

### `@backstage/plugin-gitops-profiles` (0.3.46 → [0.3.47](../../changelogs/@backstage/plugin-gitops-profiles.md#0347))

#### 0.3.47

##### Patch Changes

- [`1a22254`](https://github.com/backstage/backstage/commit/1a22254): Added ESLint rule `no-top-level-material-ui-4-imports` in the `gitops-profiles` plugin to migrate the Material UI imports.
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-gocd` (0.1.37 → [0.1.38](../../changelogs/@backstage/plugin-gocd.md#0138))

#### 0.1.38

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library
- [`4166b10`](https://github.com/backstage/backstage/commit/4166b10): Added an optional ESLint rule - no-top-level-material-ui-4-imports - which has an auto fix function to migrate the imports and used it to migrate the Material UI imports.

### `@backstage/plugin-graphiql` (0.3.4 → [0.3.5](../../changelogs/@backstage/plugin-graphiql.md#035))

#### 0.3.5

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-graphql-voyager` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-graphql-voyager.md#0114))

#### 0.1.14

##### Patch Changes

- [`813f99d`](https://github.com/backstage/backstage/commit/813f99d): Added ESLint rule `no-top-level-material-ui-4-imports` in the `graphql-voyager` plugin to migrate the Material UI imports.
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-home` (0.7.0 → [0.7.1](../../changelogs/@backstage/plugin-home.md#071))

#### 0.7.1

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-ilert` (0.2.20 → [0.2.21](../../changelogs/@backstage/plugin-ilert.md#0221))

#### 0.2.21

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-jenkins` (0.9.6 → [0.9.7](../../changelogs/@backstage/plugin-jenkins.md#097))

#### 0.9.7

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-kafka` (0.3.31 → [0.3.32](../../changelogs/@backstage/plugin-kafka.md#0332))

#### 0.3.32

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-kubernetes-backend` (0.16.1 → [0.16.2](../../changelogs/@backstage/plugin-kubernetes-backend.md#0162))

#### 0.16.2

##### Patch Changes

- [`9b1abac`](https://github.com/backstage/backstage/commit/9b1abac): Added a new service locator `CatalogRelationServiceLocator` that only returns clusters an entity lists in `relations.dependsOn`.

### `@backstage/plugin-kubernetes-react` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-kubernetes-react.md#032))

#### 0.3.2

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-lighthouse` (0.4.16 → [0.4.17](../../changelogs/@backstage/plugin-lighthouse.md#0417))

#### 0.4.17

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-linguist` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-linguist.md#0117))

#### 0.1.17

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-microsoft-calendar` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-microsoft-calendar.md#0114))

#### 0.1.14

##### Patch Changes

- [`4bba771`](https://github.com/backstage/backstage/commit/4bba771): Added ESLint rule `no-top-level-material-ui-4-imports` in the `microsoft-calender` plugin to migrate the Material UI imports.
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-newrelic` (0.3.46 → [0.3.47](../../changelogs/@backstage/plugin-newrelic.md#0347))

#### 0.3.47

##### Patch Changes

- [`f38f7d8`](https://github.com/backstage/backstage/commit/f38f7d8): Added an optional ESLint rule - no-top-level-material-ui-4-imports -in cloudbuild plugin which has an auto fix function to migrate the imports and used it to migrate the Material UI imports for plugins/newrelic.
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-newrelic-dashboard` (0.3.6 → [0.3.7](../../changelogs/@backstage/plugin-newrelic-dashboard.md#037))

#### 0.3.7

##### Patch Changes

- [`1d81cdd`](https://github.com/backstage/backstage/commit/1d81cdd): Added an optional ESLint rule - no-top-level-material-ui-4-imports -in new relic plugin which has an auto fix function to migrate the imports and used it to migrate the Material UI imports for plugins/newrelic-dashboard
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-nomad` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-nomad.md#0113))

#### 0.1.13

##### Patch Changes

- [`c116096`](https://github.com/backstage/backstage/commit/c116096): Added an optional ESLint rule - no-top-level-material-ui-4-imports -in nomad plugin which has an auto fix function to migrate the imports and used it to migrate the Material UI imports for plugins/nomad.
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-notifications` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-notifications.md#011))

#### 0.1.1

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library
- [`6a2fe4b`](https://github.com/backstage/backstage/commit/6a2fe4b): Added ESLint rule `no-top-level-material-ui-4-imports` in the `notifications` plugin to migrate the Material UI imports.

### `@backstage/plugin-octopus-deploy` (0.2.13 → [0.2.14](../../changelogs/@backstage/plugin-octopus-deploy.md#0214))

#### 0.2.14

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library
- [`004ce71`](https://github.com/backstage/backstage/commit/004ce71): Added ESLint rule `no-top-level-material-ui-4-imports` in the `octopus-deploy` plugin to migrate the Material UI imports.

### `@backstage/plugin-opencost` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-opencost.md#027))

#### 0.2.7

##### Patch Changes

- [`f21ef8c`](https://github.com/backstage/backstage/commit/f21ef8c): Added ESLint rule `no-top-level-material-ui-4-imports` in the `opencost` plugin to migrate the Material UI imports.

### `@backstage/plugin-org` (0.6.21 → [0.6.22](../../changelogs/@backstage/plugin-org.md#0622))

#### 0.6.22

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library
- [`0df5c60`](https://github.com/backstage/backstage/commit/0df5c60): Added ESLint rule `no-top-level-material-ui-4-imports` in the `org` plugin to migrate the Material UI imports.

### `@backstage/plugin-org-react` (0.1.20 → [0.1.21](../../changelogs/@backstage/plugin-org-react.md#0121))

#### 0.1.21

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-pagerduty` (0.7.3 → [0.7.4](../../changelogs/@backstage/plugin-pagerduty.md#074))

#### 0.7.4

##### Patch Changes

- [`2b43144`](https://github.com/backstage/backstage/commit/2b43144): Added ESLint rule `no-top-level-material-ui-4-imports` in the `pagerduty` plugin to migrate the Material UI imports.
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-periskop` (0.1.29 → [0.1.30](../../changelogs/@backstage/plugin-periskop.md#0130))

#### 0.1.30

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-permission-backend` (0.5.38 → [0.5.39](../../changelogs/@backstage/plugin-permission-backend.md#0539))

#### 0.5.39

##### Patch Changes

- [`f3e2e86`](https://github.com/backstage/backstage/commit/f3e2e86): Properly forward causes of errors from upstream backends in the `PermissionIntegrationClient`

### `@backstage/plugin-playlist` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-playlist.md#026))

#### 0.2.6

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-puppetdb` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-puppetdb.md#0115))

#### 0.1.15

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library
- [`8754b0e`](https://github.com/backstage/backstage/commit/8754b0e): Added ESLint rule `no-top-level-material-ui-4-imports` in the `puppetdb` plugin to migrate the Material UI imports.

### `@backstage/plugin-rollbar` (0.4.31 → [0.4.32](../../changelogs/@backstage/plugin-rollbar.md#0432))

#### 0.4.32

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-scaffolder` (1.19.0 → [1.19.1](../../changelogs/@backstage/plugin-scaffolder.md#1191))

#### 1.19.1

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-scaffolder-react` (1.8.1 → [1.8.2](../../changelogs/@backstage/plugin-scaffolder-react.md#182))

#### 1.8.2

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-search` (1.4.7 → [1.4.8](../../changelogs/@backstage/plugin-search.md#148))

#### 1.4.8

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-search-react` (1.7.7 → [1.7.8](../../changelogs/@backstage/plugin-search-react.md#178))

#### 1.7.8

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-sentry` (0.5.16 → [0.5.17](../../changelogs/@backstage/plugin-sentry.md#0517))

#### 0.5.17

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-shortcuts` (0.3.20 → [0.3.21](../../changelogs/@backstage/plugin-shortcuts.md#0321))

#### 0.3.21

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-sonarqube` (0.7.13 → [0.7.14](../../changelogs/@backstage/plugin-sonarqube.md#0714))

#### 0.7.14

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-splunk-on-call` (0.4.20 → [0.4.21](../../changelogs/@backstage/plugin-splunk-on-call.md#0421))

#### 0.4.21

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-stack-overflow` (0.1.26 → [0.1.27](../../changelogs/@backstage/plugin-stack-overflow.md#0127))

#### 0.1.27

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-stackstorm` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-stackstorm.md#0113))

#### 0.1.13

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-tech-insights` (0.3.23 → [0.3.24](../../changelogs/@backstage/plugin-tech-insights.md#0324))

#### 0.3.24

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-tech-radar` (0.7.0 → [0.7.1](../../changelogs/@backstage/plugin-tech-radar.md#071))

#### 0.7.1

##### Patch Changes

- [`89b093f`](https://github.com/backstage/backstage/commit/89b093f): Added ESLint rule `no-top-level-material-ui-4-imports` in the `tech-radar` plugin to migrate the Material UI imports.
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-techdocs` (1.10.1 → [1.10.2](../../changelogs/@backstage/plugin-techdocs.md#1102))

#### 1.10.2

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-techdocs-node` (1.12.0 → [1.12.1](../../changelogs/@backstage/plugin-techdocs-node.md#1121))

#### 1.12.1

##### Patch Changes

- [`81a995f`](https://github.com/backstage/backstage/commit/81a995f): Updated dependency `aws-sdk-client-mock` to `^4.0.0`.

### `@backstage/plugin-techdocs-react` (1.2.0 → [1.2.1](../../changelogs/@backstage/plugin-techdocs-react.md#121))

#### 1.2.1

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-user-settings` (0.8.2 → [0.8.3](../../changelogs/@backstage/plugin-user-settings.md#083))

#### 0.8.3

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-vault` (0.1.26 → [0.1.27](../../changelogs/@backstage/plugin-vault.md#0127))

#### 0.1.27

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-xcmetrics` (0.2.49 → [0.2.50](../../changelogs/@backstage/plugin-xcmetrics.md#0250))

#### 0.2.50

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

## Excluded dependency updates

- `@backstage/app-defaults` (1.5.1 → [1.5.2](../../changelogs/@backstage/app-defaults.md#152))
- `@backstage/backend-defaults` (0.2.14 → [0.2.15](../../changelogs/@backstage/backend-defaults.md#0215))
- `@backstage/backend-dynamic-feature-service` (0.2.5 → [0.2.6](../../changelogs/@backstage/backend-dynamic-feature-service.md#026))
- `@backstage/backend-openapi-utils` (0.1.7 → [0.1.8](../../changelogs/@backstage/backend-openapi-utils.md#018))
- `@backstage/backend-plugin-api` (0.6.14 → [0.6.15](../../changelogs/@backstage/backend-plugin-api.md#0615))
- `@backstage/backend-tasks` (0.5.19 → [0.5.20](../../changelogs/@backstage/backend-tasks.md#0520))
- `@backstage/backend-test-utils` (0.3.4 → [0.3.5](../../changelogs/@backstage/backend-test-utils.md#035))
- `@backstage/core-compat-api` (0.2.1 → [0.2.2](../../changelogs/@backstage/core-compat-api.md#022))
- `@backstage/frontend-app-api` (0.6.1 → [0.6.2](../../changelogs/@backstage/frontend-app-api.md#062))
- `@backstage/frontend-plugin-api` (0.6.1 → [0.6.2](../../changelogs/@backstage/frontend-plugin-api.md#062))
- `@backstage/frontend-test-utils` (0.1.3 → [0.1.4](../../changelogs/@backstage/frontend-test-utils.md#014))
- `@backstage/plugin-adr-backend` (0.4.11 → [0.4.12](../../changelogs/@backstage/plugin-adr-backend.md#0412))
- `@backstage/plugin-airbrake-backend` (0.3.11 → [0.3.12](../../changelogs/@backstage/plugin-airbrake-backend.md#0312))
- `@backstage/plugin-analytics-module-ga` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-analytics-module-ga.md#022))
- `@backstage/plugin-analytics-module-ga4` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-analytics-module-ga4.md#022))
- `@backstage/plugin-analytics-module-newrelic-browser` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-analytics-module-newrelic-browser.md#012))
- `@backstage/plugin-api-docs` (0.11.1 → [0.11.2](../../changelogs/@backstage/plugin-api-docs.md#0112))
- `@backstage/plugin-apollo-explorer` (0.1.21 → [0.1.22](../../changelogs/@backstage/plugin-apollo-explorer.md#0122))
- `@backstage/plugin-app-backend` (0.3.62 → [0.3.63](../../changelogs/@backstage/plugin-app-backend.md#0363))
- `@backstage/plugin-app-node` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-app-node.md#0115))
- `@backstage/plugin-app-visualizer` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-app-visualizer.md#013))
- `@backstage/plugin-auth-backend` (0.22.1 → [0.22.2](../../changelogs/@backstage/plugin-auth-backend.md#0222))
- `@backstage/plugin-auth-backend-module-atlassian-provider` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#017))
- `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#017))
- `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#0210))
- `@backstage/plugin-auth-backend-module-github-provider` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#0112))
- `@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#0112))
- `@backstage/plugin-auth-backend-module-google-provider` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#0112))
- `@backstage/plugin-auth-backend-module-guest-provider` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-auth-backend-module-guest-provider.md#011))
- `@backstage/plugin-auth-backend-module-microsoft-provider` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#0110))
- `@backstage/plugin-auth-backend-module-oauth2-provider` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#0112))
- `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#018))
- `@backstage/plugin-auth-backend-module-oidc-provider` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#016))
- `@backstage/plugin-auth-backend-module-okta-provider` (0.0.7 → [0.0.8](../../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#008))
- `@backstage/plugin-auth-backend-module-pinniped-provider` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#019))
- `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#017))
- `@backstage/plugin-auth-node` (0.4.9 → [0.4.10](../../changelogs/@backstage/plugin-auth-node.md#0410))
- `@backstage/plugin-auth-react` (0.0.1 → [0.0.2](../../changelogs/@backstage/plugin-auth-react.md#002))
- `@backstage/plugin-azure-devops-backend` (0.6.1 → [0.6.2](../../changelogs/@backstage/plugin-azure-devops-backend.md#062))
- `@backstage/plugin-azure-sites-backend` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-azure-sites-backend.md#032))
- `@backstage/plugin-badges-backend` (0.3.11 → [0.3.12](../../changelogs/@backstage/plugin-badges-backend.md#0312))
- `@backstage/plugin-bazaar-backend` (0.3.12 → [0.3.13](../../changelogs/@backstage/plugin-bazaar-backend.md#0313))
- `@backstage/plugin-catalog-backend-module-azure` (0.1.34 → [0.1.35](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0135))
- `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#019))
- `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#022))
- `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.28 → [0.1.29](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#0129))
- `@backstage/plugin-catalog-backend-module-gcp` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#0116))
- `@backstage/plugin-catalog-backend-module-gerrit` (0.1.31 → [0.1.32](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0132))
- `@backstage/plugin-catalog-backend-module-github` (0.5.5 → [0.5.6](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#056))
- `@backstage/plugin-catalog-backend-module-github-org` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#0110))
- `@backstage/plugin-catalog-backend-module-gitlab` (0.3.12 → [0.3.13](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#0313))
- `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.19 → [0.4.20](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#0420))
- `@backstage/plugin-catalog-backend-module-ldap` (0.5.30 → [0.5.31](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0531))
- `@backstage/plugin-catalog-backend-module-msgraph` (0.5.22 → [0.5.23](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#0523))
- `@backstage/plugin-catalog-backend-module-openapi` (0.1.32 → [0.1.33](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0133))
- `@backstage/plugin-catalog-backend-module-puppetdb` (0.1.20 → [0.1.21](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0121))
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#0113))
- `@backstage/plugin-cicd-statistics-module-gitlab` (0.1.27 → [0.1.28](../../changelogs/@backstage/plugin-cicd-statistics-module-gitlab.md#0128))
- `@backstage/plugin-code-coverage-backend` (0.2.28 → [0.2.29](../../changelogs/@backstage/plugin-code-coverage-backend.md#0229))
- `@backstage/plugin-devtools-backend` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-devtools-backend.md#031))
- `@backstage/plugin-entity-feedback-backend` (0.2.11 → [0.2.12](../../changelogs/@backstage/plugin-entity-feedback-backend.md#0212))
- `@backstage/plugin-events-backend` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-events-backend.md#031))
- `@backstage/plugin-events-backend-module-azure` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-events-backend-module-azure.md#021))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#021))
- `@backstage/plugin-events-backend-module-gerrit` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#021))
- `@backstage/plugin-events-backend-module-github` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-events-backend-module-github.md#021))
- `@backstage/plugin-events-backend-module-gitlab` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#021))
- `@backstage/plugin-events-backend-test-utils` (0.1.24 → [0.1.25](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0125))
- `@backstage/plugin-events-node` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-events-node.md#031))
- `@backstage/plugin-explore-backend` (0.0.24 → [0.0.25](../../changelogs/@backstage/plugin-explore-backend.md#0025))
- `@backstage/plugin-github-pull-requests-board` (0.1.25 → [0.1.26](../../changelogs/@backstage/plugin-github-pull-requests-board.md#0126))
- `@backstage/plugin-home-react` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-home-react.md#0110))
- `@backstage/plugin-jenkins-backend` (0.4.1 → [0.4.2](../../changelogs/@backstage/plugin-jenkins-backend.md#042))
- `@backstage/plugin-kafka-backend` (0.3.12 → [0.3.13](../../changelogs/@backstage/plugin-kafka-backend.md#0313))
- `@backstage/plugin-kubernetes` (0.11.6 → [0.11.7](../../changelogs/@backstage/plugin-kubernetes.md#0117))
- `@backstage/plugin-kubernetes-node` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-kubernetes-node.md#019))
- `@backstage/plugin-lighthouse-backend` (0.4.7 → [0.4.8](../../changelogs/@backstage/plugin-lighthouse-backend.md#048))
- `@backstage/plugin-linguist-backend` (0.5.12 → [0.5.13](../../changelogs/@backstage/plugin-linguist-backend.md#0513))
- `@backstage/plugin-nomad-backend` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-nomad-backend.md#0117))
- `@backstage/plugin-notifications-backend` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-notifications-backend.md#011))
- `@backstage/plugin-notifications-node` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-notifications-node.md#011))
- `@backstage/plugin-periskop-backend` (0.2.12 → [0.2.13](../../changelogs/@backstage/plugin-periskop-backend.md#0213))
- `@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#0112))
- `@backstage/plugin-permission-node` (0.7.25 → [0.7.26](../../changelogs/@backstage/plugin-permission-node.md#0726))
- `@backstage/plugin-playlist-backend` (0.3.18 → [0.3.19](../../changelogs/@backstage/plugin-playlist-backend.md#0319))
- `@backstage/plugin-proxy-backend` (0.4.12 → [0.4.13](../../changelogs/@backstage/plugin-proxy-backend.md#0413))
- `@backstage/plugin-rollbar-backend` (0.1.59 → [0.1.60](../../changelogs/@backstage/plugin-rollbar-backend.md#0160))
- `@backstage/plugin-scaffolder-backend` (1.22.1 → [1.22.2](../../changelogs/@backstage/plugin-scaffolder-backend.md#1222))
- `@backstage/plugin-scaffolder-backend-module-azure` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#017))
- `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket.md#025))
- `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#015))
- `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#015))
- `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.15 → [0.2.16](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#0216))
- `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.38 → [0.2.39](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0239))
- `@backstage/plugin-scaffolder-backend-module-gerrit` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#017))
- `@backstage/plugin-scaffolder-backend-module-gitea` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#015))
- `@backstage/plugin-scaffolder-backend-module-github` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#025))
- `@backstage/plugin-scaffolder-backend-module-gitlab` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#031))
- `@backstage/plugin-scaffolder-backend-module-rails` (0.4.31 → [0.4.32](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0432))
- `@backstage/plugin-scaffolder-backend-module-sentry` (0.1.22 → [0.1.23](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#0123))
- `@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.35 → [0.2.36](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0236))
- `@backstage/plugin-scaffolder-node` (0.4.0 → [0.4.1](../../changelogs/@backstage/plugin-scaffolder-node.md#041))
- `@backstage/plugin-scaffolder-node-test-utils` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#011))
- `@backstage/plugin-search-backend` (1.5.4 → [1.5.5](../../changelogs/@backstage/plugin-search-backend.md#155))
- `@backstage/plugin-search-backend-module-catalog` (0.1.19 → [0.1.20](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#0120))
- `@backstage/plugin-search-backend-module-elasticsearch` (1.3.17 → [1.3.18](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#1318))
- `@backstage/plugin-search-backend-module-explore` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-search-backend-module-explore.md#0119))
- `@backstage/plugin-search-backend-module-pg` (0.5.23 → [0.5.24](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0524))
- `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#018))
- `@backstage/plugin-search-backend-module-techdocs` (0.1.19 → [0.1.20](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#0120))
- `@backstage/plugin-search-backend-node` (1.2.18 → [1.2.19](../../changelogs/@backstage/plugin-search-backend-node.md#1219))
- `@backstage/plugin-signals` (0.0.2 → [0.0.3](../../changelogs/@backstage/plugin-signals.md#003))
- `@backstage/plugin-signals-backend` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-signals-backend.md#011))
- `@backstage/plugin-signals-node` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-signals-node.md#011))
- `@backstage/plugin-sonarqube-backend` (0.2.16 → [0.2.17](../../changelogs/@backstage/plugin-sonarqube-backend.md#0217))
- `@backstage/plugin-stack-overflow-backend` (0.2.18 → [0.2.19](../../changelogs/@backstage/plugin-stack-overflow-backend.md#0219))
- `@backstage/plugin-tech-insights-backend` (0.5.28 → [0.5.29](../../changelogs/@backstage/plugin-tech-insights-backend.md#0529))
- `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.46 → [0.1.47](../../changelogs/@backstage/plugin-tech-insights-backend-module-jsonfc.md#0147))
- `@backstage/plugin-tech-insights-node` (0.5.0 → [0.5.1](../../changelogs/@backstage/plugin-tech-insights-node.md#051))
- `@backstage/plugin-techdocs-addons-test-utils` (1.0.28 → [1.0.29](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#1029))
- `@backstage/plugin-techdocs-backend` (1.10.1 → [1.10.2](../../changelogs/@backstage/plugin-techdocs-backend.md#1102))
- `@backstage/plugin-techdocs-module-addons-contrib` (1.1.6 → [1.1.7](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#117))
- `@backstage/plugin-todo` (0.2.35 → [0.2.36](../../changelogs/@backstage/plugin-todo.md#0236))
- `@backstage/plugin-todo-backend` (0.3.13 → [0.3.14](../../changelogs/@backstage/plugin-todo-backend.md#0314))
- `@backstage/plugin-user-settings-backend` (0.2.13 → [0.2.14](../../changelogs/@backstage/plugin-user-settings-backend.md#0214))
- `@backstage/plugin-vault-backend` (0.4.7 → [0.4.8](../../changelogs/@backstage/plugin-vault-backend.md#048))
- `@backstage/plugin-vault-node` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-vault-node.md#018))
- `@backstage/repo-tools` (0.7.0 → [0.7.1](../../changelogs/@backstage/repo-tools.md#071))
- `@backstage/test-utils` (1.5.1 → [1.5.2](../../changelogs/@backstage/test-utils.md#152))
- `@techdocs/cli` (1.8.6 → [1.8.7](../../changelogs/@techdocs/cli.md#187))
