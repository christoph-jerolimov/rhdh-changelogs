# Backstage Release 1.24.2 changelog

Changes between 1.24.1 and 1.24.2 — 224 changed and 0 added packages.

## Summary

- [0.x minor version bumps](#0x-minor-version-bumps): 1 package
- [0.0.x patch version bumps](#00x-patch-version-bumps): 1 package
- [Other minor version bumps](#other-minor-version-bumps): 2 packages
- [Other patch version bumps](#other-patch-version-bumps): 90 packages

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

## 0.x minor version bumps

### `@backstage/plugin-github-issues` (0.2.20 → 0.3.0)

#### 0.3.0

##### Minor Changes

- bc97524: Added ESLint rule `no-top-level-material-ui-4-imports` in the `github-issues` plugin to migrate the Material UI imports.

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

## 0.0.x patch version bumps

### `@backstage/plugin-kubernetes-cluster` (0.0.7 → 0.0.8)

#### 0.0.8

##### Patch Changes

- e8f026a: Use ESM exports of react-use library
- 1c1140e: Added ESLint rule `no-top-level-material-ui-4-imports` in the `kubernetes-cluster` plugin to migrate the Material UI imports.

## Other minor version bumps

### `@backstage/plugin-catalog-backend` (1.19.0 → 1.20.0)

#### 1.20.0

##### Minor Changes

- f3e2e86: Added the ability to inject custom permissions from modules, on `CatalogBuilder` and `CatalogPermissionExtensionPoint`

### `@backstage/plugin-catalog-node` (1.9.0 → 1.10.0)

#### 1.10.0

##### Minor Changes

- f3e2e86: Added the ability to inject custom permissions from modules, on `CatalogBuilder` and `CatalogPermissionExtensionPoint`

## Other patch version bumps

### `@backstage/backend-app-api` (0.6.0 → 0.6.1)

#### 0.6.1

##### Patch Changes

- de1f45d: Temporarily revert the rate limiting

### `@backstage/backend-common` (0.21.4 → 0.21.5)

#### 0.21.5

##### Patch Changes

- 81a995f: Updated dependency `aws-sdk-client-mock` to `^4.0.0`.

### `@backstage/catalog-client` (1.6.1 → 1.6.2)

#### 1.6.2

##### Patch Changes

- 7e8a7c8: Added missing commas to the example of `queryEntities`

### `@backstage/cli` (0.26.0 → 0.26.1)

#### 0.26.1

##### Patch Changes

- eeb226a: Updated dependency `rollup` to `^4.0.0`.
- cc371d6: Ignore transforming only on `react-use/lib`, not whole `react-use` in jest.

  ** POTENTIAL BREAKAGE **
  If your tests fail, please change to use path import from `react-use/esm/`. It is also recommended to migrate from `react-user/lib` imports to `react-use/esm`

### `@backstage/core-app-api` (1.12.1 → 1.12.2)

#### 1.12.2

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/core-components` (0.14.1 → 0.14.2)

#### 0.14.2

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/dev-utils` (1.0.28 → 1.0.29)

#### 1.0.29

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/integration-aws-node` (0.1.10 → 0.1.11)

#### 0.1.11

##### Patch Changes

- 81a995f: Updated dependency `aws-sdk-client-mock` to `^4.0.0`.
- 823cf8e: Updated dependency `aws-sdk-client-mock-jest` to `^4.0.0`.

### `@backstage/plugin-adr` (0.6.14 → 0.6.15)

#### 0.6.15

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-airbrake` (0.3.31 → 0.3.32)

#### 0.3.32

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-allure` (0.1.47 → 0.1.48)

#### 0.1.48

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-apache-airflow` (0.2.21 → 0.2.22)

#### 0.2.22

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-azure-devops` (0.4.0 → 0.4.1)

#### 0.4.1

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-azure-sites` (0.1.20 → 0.1.21)

#### 0.1.21

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-badges` (0.2.55 → 0.2.56)

#### 0.2.56

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-bazaar` (0.2.23 → 0.2.24)

#### 0.2.24

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-bitrise` (0.1.58 → 0.1.59)

#### 0.1.59

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-catalog` (1.18.0 → 1.18.1)

#### 1.18.1

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-catalog-backend-module-aws` (0.3.9 → 0.3.10)

#### 0.3.10

##### Patch Changes

- 81a995f: Updated dependency `aws-sdk-client-mock` to `^4.0.0`.
- 823cf8e: Updated dependency `aws-sdk-client-mock-jest` to `^4.0.0`.

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.4.1 → 0.4.2)

#### 0.4.2

##### Patch Changes

- f3e2e86: Internal update that injects custom permissions into the catalog using its extension point

### `@backstage/plugin-catalog-graph` (0.4.1 → 0.4.2)

#### 0.4.2

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-catalog-import` (0.10.7 → 0.10.8)

#### 0.10.8

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-catalog-react` (1.11.0 → 1.11.1)

#### 1.11.1

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-catalog-unprocessed-entities` (0.2.0 → 0.2.1)

#### 0.2.1

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-cicd-statistics` (0.1.33 → 0.1.34)

#### 0.1.34

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-circleci` (0.3.31 → 0.3.32)

#### 0.3.32

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-cloudbuild` (0.4.1 → 0.4.2)

#### 0.4.2

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-code-climate` (0.1.31 → 0.1.32)

#### 0.1.32

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-code-coverage` (0.2.24 → 0.2.25)

#### 0.2.25

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-codescene` (0.1.23 → 0.1.24)

#### 0.1.24

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-config-schema` (0.1.51 → 0.1.52)

#### 0.1.52

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-cost-insights` (0.12.20 → 0.12.21)

#### 0.12.21

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-devtools` (0.1.10 → 0.1.11)

#### 0.1.11

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-dynatrace` (10.0.0 → 10.0.1)

#### 10.0.1

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-entity-feedback` (0.2.14 → 0.2.15)

#### 0.2.15

##### Patch Changes

- 12610b4: Added ESLint rule `no-top-level-material-ui-4-imports` in the `entity-feedback` plugin to migrate the Material UI imports.
- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-entity-validation` (0.1.16 → 0.1.17)

#### 0.1.17

##### Patch Changes

- e8f026a: Use ESM exports of react-use library
- 2ec4a8d: Added ESLint rule `no-top-level-material-ui-4-imports` in the `entity-validation` plugin to migrate the Material UI imports.

### `@backstage/plugin-events-backend-module-aws-sqs` (0.3.0 → 0.3.1)

#### 0.3.1

##### Patch Changes

- 81a995f: Updated dependency `aws-sdk-client-mock` to `^4.0.0`.

### `@backstage/plugin-explore` (0.4.17 → 0.4.18)

#### 0.4.18

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-firehydrant` (0.2.15 → 0.2.16)

#### 0.2.16

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-fossa` (0.2.63 → 0.2.64)

#### 0.2.64

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-gcalendar` (0.3.24 → 0.3.25)

#### 0.3.25

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-gcp-projects` (0.3.47 → 0.3.48)

#### 0.3.48

##### Patch Changes

- 7dad59c: Added ESLint rule `no-top-level-material-ui-4-imports` in the `gcp-projects` plugin to migrate the Material UI imports.

### `@backstage/plugin-git-release-manager` (0.3.43 → 0.3.44)

#### 0.3.44

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-github-actions` (0.6.12 → 0.6.13)

#### 0.6.13

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-github-deployments` (0.1.62 → 0.1.63)

#### 0.1.63

##### Patch Changes

- e8f026a: Use ESM exports of react-use library
- a1ddc8d: Added ESLint rule `no-top-level-material-ui-4-imports` in the `github-deployments` plugin to migrate the Material UI imports.

### `@backstage/plugin-gitops-profiles` (0.3.46 → 0.3.47)

#### 0.3.47

##### Patch Changes

- 1a22254: Added ESLint rule `no-top-level-material-ui-4-imports` in the `gitops-profiles` plugin to migrate the Material UI imports.
- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-gocd` (0.1.37 → 0.1.38)

#### 0.1.38

##### Patch Changes

- e8f026a: Use ESM exports of react-use library
- 4166b10: Added an optional ESLint rule - no-top-level-material-ui-4-imports - which has an auto fix function to migrate the imports and used it to migrate the Material UI imports.

### `@backstage/plugin-graphiql` (0.3.4 → 0.3.5)

#### 0.3.5

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-graphql-voyager` (0.1.13 → 0.1.14)

#### 0.1.14

##### Patch Changes

- 813f99d: Added ESLint rule `no-top-level-material-ui-4-imports` in the `graphql-voyager` plugin to migrate the Material UI imports.
- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-home` (0.7.0 → 0.7.1)

#### 0.7.1

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-ilert` (0.2.20 → 0.2.21)

#### 0.2.21

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-jenkins` (0.9.6 → 0.9.7)

#### 0.9.7

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-kafka` (0.3.31 → 0.3.32)

#### 0.3.32

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-kubernetes-backend` (0.16.1 → 0.16.2)

#### 0.16.2

##### Patch Changes

- 9b1abac: Added a new service locator `CatalogRelationServiceLocator` that only returns clusters an entity lists in `relations.dependsOn`.

### `@backstage/plugin-kubernetes-react` (0.3.1 → 0.3.2)

#### 0.3.2

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-lighthouse` (0.4.16 → 0.4.17)

#### 0.4.17

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-linguist` (0.1.16 → 0.1.17)

#### 0.1.17

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-microsoft-calendar` (0.1.13 → 0.1.14)

#### 0.1.14

##### Patch Changes

- 4bba771: Added ESLint rule `no-top-level-material-ui-4-imports` in the `microsoft-calender` plugin to migrate the Material UI imports.
- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-newrelic` (0.3.46 → 0.3.47)

#### 0.3.47

##### Patch Changes

- f38f7d8: Added an optional ESLint rule - no-top-level-material-ui-4-imports -in cloudbuild plugin which has an auto fix function to migrate the imports and used it to migrate the Material UI imports for plugins/newrelic.
- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-newrelic-dashboard` (0.3.6 → 0.3.7)

#### 0.3.7

##### Patch Changes

- 1d81cdd: Added an optional ESLint rule - no-top-level-material-ui-4-imports -in new relic plugin which has an auto fix function to migrate the imports and used it to migrate the Material UI imports for plugins/newrelic-dashboard
- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-nomad` (0.1.12 → 0.1.13)

#### 0.1.13

##### Patch Changes

- c116096: Added an optional ESLint rule - no-top-level-material-ui-4-imports -in nomad plugin which has an auto fix function to migrate the imports and used it to migrate the Material UI imports for plugins/nomad.
- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-notifications` (0.1.0 → 0.1.1)

#### 0.1.1

##### Patch Changes

- e8f026a: Use ESM exports of react-use library
- 6a2fe4b: Added ESLint rule `no-top-level-material-ui-4-imports` in the `notifications` plugin to migrate the Material UI imports.

### `@backstage/plugin-octopus-deploy` (0.2.13 → 0.2.14)

#### 0.2.14

##### Patch Changes

- e8f026a: Use ESM exports of react-use library
- 004ce71: Added ESLint rule `no-top-level-material-ui-4-imports` in the `octopus-deploy` plugin to migrate the Material UI imports.

### `@backstage/plugin-opencost` (0.2.6 → 0.2.7)

#### 0.2.7

##### Patch Changes

- f21ef8c: Added ESLint rule `no-top-level-material-ui-4-imports` in the `opencost` plugin to migrate the Material UI imports.

### `@backstage/plugin-org` (0.6.21 → 0.6.22)

#### 0.6.22

##### Patch Changes

- e8f026a: Use ESM exports of react-use library
- 0df5c60: Added ESLint rule `no-top-level-material-ui-4-imports` in the `org` plugin to migrate the Material UI imports.

### `@backstage/plugin-org-react` (0.1.20 → 0.1.21)

#### 0.1.21

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-pagerduty` (0.7.3 → 0.7.4)

#### 0.7.4

##### Patch Changes

- 2b43144: Added ESLint rule `no-top-level-material-ui-4-imports` in the `pagerduty` plugin to migrate the Material UI imports.
- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-periskop` (0.1.29 → 0.1.30)

#### 0.1.30

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-permission-backend` (0.5.38 → 0.5.39)

#### 0.5.39

##### Patch Changes

- f3e2e86: Properly forward causes of errors from upstream backends in the `PermissionIntegrationClient`

### `@backstage/plugin-playlist` (0.2.5 → 0.2.6)

#### 0.2.6

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-puppetdb` (0.1.14 → 0.1.15)

#### 0.1.15

##### Patch Changes

- e8f026a: Use ESM exports of react-use library
- 8754b0e: Added ESLint rule `no-top-level-material-ui-4-imports` in the `puppetdb` plugin to migrate the Material UI imports.

### `@backstage/plugin-rollbar` (0.4.31 → 0.4.32)

#### 0.4.32

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-scaffolder` (1.19.0 → 1.19.1)

#### 1.19.1

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-scaffolder-react` (1.8.1 → 1.8.2)

#### 1.8.2

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-search` (1.4.7 → 1.4.8)

#### 1.4.8

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-search-react` (1.7.7 → 1.7.8)

#### 1.7.8

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-sentry` (0.5.16 → 0.5.17)

#### 0.5.17

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-shortcuts` (0.3.20 → 0.3.21)

#### 0.3.21

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-sonarqube` (0.7.13 → 0.7.14)

#### 0.7.14

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-splunk-on-call` (0.4.20 → 0.4.21)

#### 0.4.21

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-stack-overflow` (0.1.26 → 0.1.27)

#### 0.1.27

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-stackstorm` (0.1.12 → 0.1.13)

#### 0.1.13

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-tech-insights` (0.3.23 → 0.3.24)

#### 0.3.24

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-tech-radar` (0.7.0 → 0.7.1)

#### 0.7.1

##### Patch Changes

- 89b093f: Added ESLint rule `no-top-level-material-ui-4-imports` in the `tech-radar` plugin to migrate the Material UI imports.
- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-techdocs` (1.10.1 → 1.10.2)

#### 1.10.2

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-techdocs-node` (1.12.0 → 1.12.1)

#### 1.12.1

##### Patch Changes

- 81a995f: Updated dependency `aws-sdk-client-mock` to `^4.0.0`.

### `@backstage/plugin-techdocs-react` (1.2.0 → 1.2.1)

#### 1.2.1

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-user-settings` (0.8.2 → 0.8.3)

#### 0.8.3

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-vault` (0.1.26 → 0.1.27)

#### 0.1.27

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

### `@backstage/plugin-xcmetrics` (0.2.49 → 0.2.50)

#### 0.2.50

##### Patch Changes

- e8f026a: Use ESM exports of react-use library

_Excluded dependency updates for packages: `@backstage/app-defaults`, `@backstage/backend-defaults`, `@backstage/backend-dynamic-feature-service`, `@backstage/backend-openapi-utils`, `@backstage/backend-plugin-api`, `@backstage/backend-tasks`, `@backstage/backend-test-utils`, `@backstage/core-compat-api`, `@backstage/frontend-app-api`, `@backstage/frontend-plugin-api`, `@backstage/frontend-test-utils`, `@backstage/plugin-adr-backend`, `@backstage/plugin-airbrake-backend`, `@backstage/plugin-analytics-module-ga`, `@backstage/plugin-analytics-module-ga4`, `@backstage/plugin-analytics-module-newrelic-browser`, `@backstage/plugin-api-docs`, `@backstage/plugin-apollo-explorer`, `@backstage/plugin-app-backend`, `@backstage/plugin-app-node`, `@backstage/plugin-app-visualizer`, `@backstage/plugin-auth-backend`, `@backstage/plugin-auth-backend-module-atlassian-provider`, `@backstage/plugin-auth-backend-module-aws-alb-provider`, `@backstage/plugin-auth-backend-module-gcp-iap-provider`, `@backstage/plugin-auth-backend-module-github-provider`, `@backstage/plugin-auth-backend-module-gitlab-provider`, `@backstage/plugin-auth-backend-module-google-provider`, `@backstage/plugin-auth-backend-module-guest-provider`, `@backstage/plugin-auth-backend-module-microsoft-provider`, `@backstage/plugin-auth-backend-module-oauth2-provider`, `@backstage/plugin-auth-backend-module-oauth2-proxy-provider`, `@backstage/plugin-auth-backend-module-oidc-provider`, `@backstage/plugin-auth-backend-module-okta-provider`, `@backstage/plugin-auth-backend-module-pinniped-provider`, `@backstage/plugin-auth-backend-module-vmware-cloud-provider`, `@backstage/plugin-auth-node`, `@backstage/plugin-auth-react`, `@backstage/plugin-azure-devops-backend`, `@backstage/plugin-azure-sites-backend`, `@backstage/plugin-badges-backend`, `@backstage/plugin-bazaar-backend`, `@backstage/plugin-catalog-backend-module-azure`, `@backstage/plugin-catalog-backend-module-backstage-openapi`, `@backstage/plugin-catalog-backend-module-bitbucket-cloud`, `@backstage/plugin-catalog-backend-module-bitbucket-server`, `@backstage/plugin-catalog-backend-module-gcp`, `@backstage/plugin-catalog-backend-module-gerrit`, `@backstage/plugin-catalog-backend-module-github`, `@backstage/plugin-catalog-backend-module-github-org`, `@backstage/plugin-catalog-backend-module-gitlab`, `@backstage/plugin-catalog-backend-module-incremental-ingestion`, `@backstage/plugin-catalog-backend-module-ldap`, `@backstage/plugin-catalog-backend-module-msgraph`, `@backstage/plugin-catalog-backend-module-openapi`, `@backstage/plugin-catalog-backend-module-puppetdb`, `@backstage/plugin-catalog-backend-module-scaffolder-entity-model`, `@backstage/plugin-cicd-statistics-module-gitlab`, `@backstage/plugin-code-coverage-backend`, `@backstage/plugin-devtools-backend`, `@backstage/plugin-entity-feedback-backend`, `@backstage/plugin-events-backend`, `@backstage/plugin-events-backend-module-azure`, `@backstage/plugin-events-backend-module-bitbucket-cloud`, `@backstage/plugin-events-backend-module-gerrit`, `@backstage/plugin-events-backend-module-github`, `@backstage/plugin-events-backend-module-gitlab`, `@backstage/plugin-events-backend-test-utils`, `@backstage/plugin-events-node`, `@backstage/plugin-explore-backend`, `@backstage/plugin-github-pull-requests-board`, `@backstage/plugin-home-react`, `@backstage/plugin-jenkins-backend`, `@backstage/plugin-kafka-backend`, `@backstage/plugin-kubernetes`, `@backstage/plugin-kubernetes-node`, `@backstage/plugin-lighthouse-backend`, `@backstage/plugin-linguist-backend`, `@backstage/plugin-nomad-backend`, `@backstage/plugin-notifications-backend`, `@backstage/plugin-notifications-node`, `@backstage/plugin-periskop-backend`, `@backstage/plugin-permission-backend-module-allow-all-policy`, `@backstage/plugin-permission-node`, `@backstage/plugin-playlist-backend`, `@backstage/plugin-proxy-backend`, `@backstage/plugin-rollbar-backend`, `@backstage/plugin-scaffolder-backend`, `@backstage/plugin-scaffolder-backend-module-azure`, `@backstage/plugin-scaffolder-backend-module-bitbucket`, `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud`, `@backstage/plugin-scaffolder-backend-module-bitbucket-server`, `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown`, `@backstage/plugin-scaffolder-backend-module-cookiecutter`, `@backstage/plugin-scaffolder-backend-module-gerrit`, `@backstage/plugin-scaffolder-backend-module-gitea`, `@backstage/plugin-scaffolder-backend-module-github`, `@backstage/plugin-scaffolder-backend-module-gitlab`, `@backstage/plugin-scaffolder-backend-module-rails`, `@backstage/plugin-scaffolder-backend-module-sentry`, `@backstage/plugin-scaffolder-backend-module-yeoman`, `@backstage/plugin-scaffolder-node`, `@backstage/plugin-scaffolder-node-test-utils`, `@backstage/plugin-search-backend`, `@backstage/plugin-search-backend-module-catalog`, `@backstage/plugin-search-backend-module-elasticsearch`, `@backstage/plugin-search-backend-module-explore`, `@backstage/plugin-search-backend-module-pg`, `@backstage/plugin-search-backend-module-stack-overflow-collator`, `@backstage/plugin-search-backend-module-techdocs`, `@backstage/plugin-search-backend-node`, `@backstage/plugin-signals`, `@backstage/plugin-signals-backend`, `@backstage/plugin-signals-node`, `@backstage/plugin-sonarqube-backend`, `@backstage/plugin-stack-overflow-backend`, `@backstage/plugin-tech-insights-backend`, `@backstage/plugin-tech-insights-backend-module-jsonfc`, `@backstage/plugin-tech-insights-node`, `@backstage/plugin-techdocs-addons-test-utils`, `@backstage/plugin-techdocs-backend`, `@backstage/plugin-techdocs-module-addons-contrib`, `@backstage/plugin-todo`, `@backstage/plugin-todo-backend`, `@backstage/plugin-user-settings-backend`, `@backstage/plugin-vault-backend`, `@backstage/plugin-vault-node`, `@backstage/repo-tools`, `@backstage/test-utils`, `@techdocs/cli`._
