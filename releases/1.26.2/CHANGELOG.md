# Backstage Release 1.26.2 changelog

Changes between 1.26.1 and 1.26.2 — 97 changed and 0 added packages.

## Summary

- [0.0.x patch version bumps](#00x-patch-version-bumps): 3 packages
- [Other patch version bumps](#other-patch-version-bumps): 94 packages

## Table of contents

- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-explore-backend` (0.0.27 → 0.0.28)](#backstageplugin-explore-backend-0027--0028)
  - [`@backstage/plugin-explore-common` (0.0.2 → 0.0.3)](#backstageplugin-explore-common-002--003)
  - [`@backstage/plugin-explore-react` (0.0.38 → 0.0.39)](#backstageplugin-explore-react-0038--0039)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/cli` (0.26.3 → 0.26.4)](#backstagecli-0263--0264)
  - [`@backstage/plugin-adr` (0.6.17 → 0.6.18)](#backstageplugin-adr-0617--0618)
  - [`@backstage/plugin-adr-backend` (0.4.14 → 0.4.15)](#backstageplugin-adr-backend-0414--0415)
  - [`@backstage/plugin-adr-common` (0.2.22 → 0.2.23)](#backstageplugin-adr-common-0222--0223)
  - [`@backstage/plugin-airbrake` (0.3.34 → 0.3.35)](#backstageplugin-airbrake-0334--0335)
  - [`@backstage/plugin-airbrake-backend` (0.3.14 → 0.3.15)](#backstageplugin-airbrake-backend-0314--0315)
  - [`@backstage/plugin-allure` (0.1.50 → 0.1.51)](#backstageplugin-allure-0150--0151)
  - [`@backstage/plugin-analytics-module-ga` (0.2.4 → 0.2.5)](#backstageplugin-analytics-module-ga-024--025)
  - [`@backstage/plugin-analytics-module-ga4` (0.2.4 → 0.2.5)](#backstageplugin-analytics-module-ga4-024--025)
  - [`@backstage/plugin-analytics-module-newrelic-browser` (0.1.4 → 0.1.5)](#backstageplugin-analytics-module-newrelic-browser-014--015)
  - [`@backstage/plugin-apache-airflow` (0.2.24 → 0.2.25)](#backstageplugin-apache-airflow-0224--0225)
  - [`@backstage/plugin-apollo-explorer` (0.2.0 → 0.2.1)](#backstageplugin-apollo-explorer-020--021)
  - [`@backstage/plugin-azure-devops` (0.4.3 → 0.4.4)](#backstageplugin-azure-devops-043--044)
  - [`@backstage/plugin-azure-devops-backend` (0.6.4 → 0.6.5)](#backstageplugin-azure-devops-backend-064--065)
  - [`@backstage/plugin-azure-devops-common` (0.4.1 → 0.4.2)](#backstageplugin-azure-devops-common-041--042)
  - [`@backstage/plugin-azure-sites` (0.1.23 → 0.1.24)](#backstageplugin-azure-sites-0123--0124)
  - [`@backstage/plugin-azure-sites-backend` (0.3.4 → 0.3.5)](#backstageplugin-azure-sites-backend-034--035)
  - [`@backstage/plugin-azure-sites-common` (0.1.3 → 0.1.4)](#backstageplugin-azure-sites-common-013--014)
  - [`@backstage/plugin-badges` (0.2.58 → 0.2.59)](#backstageplugin-badges-0258--0259)
  - [`@backstage/plugin-badges-backend` (0.4.0 → 0.4.1)](#backstageplugin-badges-backend-040--041)
  - [`@backstage/plugin-bazaar` (0.2.26 → 0.2.27)](#backstageplugin-bazaar-0226--0227)
  - [`@backstage/plugin-bazaar-backend` (0.3.15 → 0.3.16)](#backstageplugin-bazaar-backend-0315--0316)
  - [`@backstage/plugin-bitrise` (0.1.61 → 0.1.62)](#backstageplugin-bitrise-0161--0162)
  - [`@backstage/plugin-cicd-statistics` (0.1.36 → 0.1.37)](#backstageplugin-cicd-statistics-0136--0137)
  - [`@backstage/plugin-cicd-statistics-module-gitlab` (0.1.30 → 0.1.31)](#backstageplugin-cicd-statistics-module-gitlab-0130--0131)
  - [`@backstage/plugin-circleci` (0.3.34 → 0.3.35)](#backstageplugin-circleci-0334--0335)
  - [`@backstage/plugin-cloudbuild` (0.5.1 → 0.5.2)](#backstageplugin-cloudbuild-051--052)
  - [`@backstage/plugin-code-climate` (0.1.34 → 0.1.35)](#backstageplugin-code-climate-0134--0135)
  - [`@backstage/plugin-code-coverage` (0.2.27 → 0.2.28)](#backstageplugin-code-coverage-0227--0228)
  - [`@backstage/plugin-code-coverage-backend` (0.2.31 → 0.2.32)](#backstageplugin-code-coverage-backend-0231--0232)
  - [`@backstage/plugin-codescene` (0.1.26 → 0.1.27)](#backstageplugin-codescene-0126--0127)
  - [`@backstage/plugin-cost-insights` (0.12.23 → 0.12.24)](#backstageplugin-cost-insights-01223--01224)
  - [`@backstage/plugin-cost-insights-common` (0.1.2 → 0.1.3)](#backstageplugin-cost-insights-common-012--013)
  - [`@backstage/plugin-dynatrace` (10.0.3 → 10.0.4)](#backstageplugin-dynatrace-1003--1004)
  - [`@backstage/plugin-entity-feedback` (0.2.17 → 0.2.18)](#backstageplugin-entity-feedback-0217--0218)
  - [`@backstage/plugin-entity-feedback-backend` (0.2.14 → 0.2.15)](#backstageplugin-entity-feedback-backend-0214--0215)
  - [`@backstage/plugin-entity-feedback-common` (0.1.3 → 0.1.4)](#backstageplugin-entity-feedback-common-013--014)
  - [`@backstage/plugin-entity-validation` (0.1.19 → 0.1.20)](#backstageplugin-entity-validation-0119--0120)
  - [`@backstage/plugin-explore` (0.4.20 → 0.4.21)](#backstageplugin-explore-0420--0421)
  - [`@backstage/plugin-firehydrant` (0.2.18 → 0.2.19)](#backstageplugin-firehydrant-0218--0219)
  - [`@backstage/plugin-fossa` (0.2.66 → 0.2.67)](#backstageplugin-fossa-0266--0267)
  - [`@backstage/plugin-gcalendar` (0.3.27 → 0.3.28)](#backstageplugin-gcalendar-0327--0328)
  - [`@backstage/plugin-gcp-projects` (0.3.50 → 0.3.51)](#backstageplugin-gcp-projects-0350--0351)
  - [`@backstage/plugin-git-release-manager` (0.3.46 → 0.3.47)](#backstageplugin-git-release-manager-0346--0347)
  - [`@backstage/plugin-github-actions` (0.6.15 → 0.6.16)](#backstageplugin-github-actions-0615--0616)
  - [`@backstage/plugin-github-deployments` (0.1.65 → 0.1.66)](#backstageplugin-github-deployments-0165--0166)
  - [`@backstage/plugin-github-issues` (0.4.1 → 0.4.2)](#backstageplugin-github-issues-041--042)
  - [`@backstage/plugin-github-pull-requests-board` (0.2.0 → 0.2.1)](#backstageplugin-github-pull-requests-board-020--021)
  - [`@backstage/plugin-gitops-profiles` (0.3.49 → 0.3.50)](#backstageplugin-gitops-profiles-0349--0350)
  - [`@backstage/plugin-gocd` (0.1.40 → 0.1.41)](#backstageplugin-gocd-0140--0141)
  - [`@backstage/plugin-graphiql` (0.3.7 → 0.3.8)](#backstageplugin-graphiql-037--038)
  - [`@backstage/plugin-graphql-voyager` (0.1.16 → 0.1.17)](#backstageplugin-graphql-voyager-0116--0117)
  - [`@backstage/plugin-ilert` (0.2.23 → 0.2.24)](#backstageplugin-ilert-0223--0224)
  - [`@backstage/plugin-jenkins` (0.9.9 → 0.9.10)](#backstageplugin-jenkins-099--0910)
  - [`@backstage/plugin-jenkins-backend` (0.4.4 → 0.4.5)](#backstageplugin-jenkins-backend-044--045)
  - [`@backstage/plugin-jenkins-common` (0.1.25 → 0.1.26)](#backstageplugin-jenkins-common-0125--0126)
  - [`@backstage/plugin-kafka` (0.3.34 → 0.3.35)](#backstageplugin-kafka-0334--0335)
  - [`@backstage/plugin-kafka-backend` (0.3.15 → 0.3.16)](#backstageplugin-kafka-backend-0315--0316)
  - [`@backstage/plugin-lighthouse` (0.4.19 → 0.4.20)](#backstageplugin-lighthouse-0419--0420)
  - [`@backstage/plugin-lighthouse-backend` (0.4.10 → 0.4.11)](#backstageplugin-lighthouse-backend-0410--0411)
  - [`@backstage/plugin-lighthouse-common` (0.1.5 → 0.1.6)](#backstageplugin-lighthouse-common-015--016)
  - [`@backstage/plugin-microsoft-calendar` (0.1.16 → 0.1.17)](#backstageplugin-microsoft-calendar-0116--0117)
  - [`@backstage/plugin-newrelic` (0.3.49 → 0.3.50)](#backstageplugin-newrelic-0349--0350)
  - [`@backstage/plugin-newrelic-dashboard` (0.3.9 → 0.3.10)](#backstageplugin-newrelic-dashboard-039--0310)
  - [`@backstage/plugin-octopus-deploy` (0.2.16 → 0.2.17)](#backstageplugin-octopus-deploy-0216--0217)
  - [`@backstage/plugin-opencost` (0.2.9 → 0.2.10)](#backstageplugin-opencost-029--0210)
  - [`@backstage/plugin-periskop` (0.1.32 → 0.1.33)](#backstageplugin-periskop-0132--0133)
  - [`@backstage/plugin-periskop-backend` (0.2.15 → 0.2.16)](#backstageplugin-periskop-backend-0215--0216)
  - [`@backstage/plugin-playlist` (0.2.8 → 0.2.9)](#backstageplugin-playlist-028--029)
  - [`@backstage/plugin-playlist-backend` (0.3.21 → 0.3.22)](#backstageplugin-playlist-backend-0321--0322)
  - [`@backstage/plugin-playlist-common` (0.1.15 → 0.1.16)](#backstageplugin-playlist-common-0115--0116)
  - [`@backstage/plugin-puppetdb` (0.1.17 → 0.1.18)](#backstageplugin-puppetdb-0117--0118)
  - [`@backstage/plugin-rollbar` (0.4.34 → 0.4.35)](#backstageplugin-rollbar-0434--0435)
  - [`@backstage/plugin-rollbar-backend` (0.1.62 → 0.1.63)](#backstageplugin-rollbar-backend-0162--0163)
  - [`@backstage/plugin-search-backend-module-explore` (0.1.21 → 0.1.22)](#backstageplugin-search-backend-module-explore-0121--0122)
  - [`@backstage/plugin-sentry` (0.5.19 → 0.5.20)](#backstageplugin-sentry-0519--0520)
  - [`@backstage/plugin-shortcuts` (0.3.23 → 0.3.24)](#backstageplugin-shortcuts-0323--0324)
  - [`@backstage/plugin-sonarqube` (0.7.16 → 0.7.17)](#backstageplugin-sonarqube-0716--0717)
  - [`@backstage/plugin-sonarqube-backend` (0.2.19 → 0.2.20)](#backstageplugin-sonarqube-backend-0219--0220)
  - [`@backstage/plugin-sonarqube-react` (0.1.15 → 0.1.16)](#backstageplugin-sonarqube-react-0115--0116)
  - [`@backstage/plugin-splunk-on-call` (0.4.23 → 0.4.24)](#backstageplugin-splunk-on-call-0423--0424)
  - [`@backstage/plugin-stack-overflow` (0.1.29 → 0.1.30)](#backstageplugin-stack-overflow-0129--0130)
  - [`@backstage/plugin-stack-overflow-backend` (0.2.21 → 0.2.22)](#backstageplugin-stack-overflow-backend-0221--0222)
  - [`@backstage/plugin-stackstorm` (0.1.15 → 0.1.16)](#backstageplugin-stackstorm-0115--0116)
  - [`@backstage/plugin-tech-insights` (0.3.26 → 0.3.27)](#backstageplugin-tech-insights-0326--0327)
  - [`@backstage/plugin-tech-insights-backend` (0.5.31 → 0.5.32)](#backstageplugin-tech-insights-backend-0531--0532)
  - [`@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.49 → 0.1.50)](#backstageplugin-tech-insights-backend-module-jsonfc-0149--0150)
  - [`@backstage/plugin-tech-insights-common` (0.2.12 → 0.2.13)](#backstageplugin-tech-insights-common-0212--0213)
  - [`@backstage/plugin-tech-insights-node` (0.6.0 → 0.6.1)](#backstageplugin-tech-insights-node-060--061)
  - [`@backstage/plugin-tech-radar` (0.7.3 → 0.7.4)](#backstageplugin-tech-radar-073--074)
  - [`@backstage/plugin-vault` (0.1.29 → 0.1.30)](#backstageplugin-vault-0129--0130)
  - [`@backstage/plugin-vault-backend` (0.4.10 → 0.4.11)](#backstageplugin-vault-backend-0410--0411)
  - [`@backstage/plugin-vault-node` (0.1.10 → 0.1.11)](#backstageplugin-vault-node-0110--0111)
  - [`@backstage/plugin-xcmetrics` (0.2.52 → 0.2.53)](#backstageplugin-xcmetrics-0252--0253)

## 0.0.x patch version bumps

### `@backstage/plugin-explore-backend` (0.0.27 → [0.0.28](../../changelogs/@backstage/plugin-explore-backend.md#0028))

#### 0.0.28

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-explore-common` (0.0.2 → [0.0.3](../../changelogs/@backstage/plugin-explore-common.md#003))

#### 0.0.3

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-explore-react` (0.0.38 → [0.0.39](../../changelogs/@backstage/plugin-explore-react.md#0039))

#### 0.0.39

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

## Other patch version bumps

### `@backstage/cli` (0.26.3 → [0.26.4](../../changelogs/@backstage/cli.md#0264))

_No changelog entries found._

### `@backstage/plugin-adr` (0.6.17 → [0.6.18](../../changelogs/@backstage/plugin-adr.md#0618))

#### 0.6.18

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-adr-backend` (0.4.14 → [0.4.15](../../changelogs/@backstage/plugin-adr-backend.md#0415))

#### 0.4.15

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-adr-common` (0.2.22 → [0.2.23](../../changelogs/@backstage/plugin-adr-common.md#0223))

#### 0.2.23

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-airbrake` (0.3.34 → [0.3.35](../../changelogs/@backstage/plugin-airbrake.md#0335))

#### 0.3.35

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-airbrake-backend` (0.3.14 → [0.3.15](../../changelogs/@backstage/plugin-airbrake-backend.md#0315))

#### 0.3.15

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-allure` (0.1.50 → [0.1.51](../../changelogs/@backstage/plugin-allure.md#0151))

#### 0.1.51

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-analytics-module-ga` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-analytics-module-ga.md#025))

#### 0.2.5

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-analytics-module-ga4` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-analytics-module-ga4.md#025))

#### 0.2.5

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-analytics-module-newrelic-browser` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-analytics-module-newrelic-browser.md#015))

#### 0.1.5

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-apache-airflow` (0.2.24 → [0.2.25](../../changelogs/@backstage/plugin-apache-airflow.md#0225))

#### 0.2.25

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-apollo-explorer` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-apollo-explorer.md#021))

#### 0.2.1

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-azure-devops` (0.4.3 → [0.4.4](../../changelogs/@backstage/plugin-azure-devops.md#044))

#### 0.4.4

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-azure-devops-backend` (0.6.4 → [0.6.5](../../changelogs/@backstage/plugin-azure-devops-backend.md#065))

#### 0.6.5

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-azure-devops-common` (0.4.1 → [0.4.2](../../changelogs/@backstage/plugin-azure-devops-common.md#042))

#### 0.4.2

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-azure-sites` (0.1.23 → [0.1.24](../../changelogs/@backstage/plugin-azure-sites.md#0124))

#### 0.1.24

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-azure-sites-backend` (0.3.4 → [0.3.5](../../changelogs/@backstage/plugin-azure-sites-backend.md#035))

#### 0.3.5

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-azure-sites-common` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-azure-sites-common.md#014))

#### 0.1.4

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-badges` (0.2.58 → [0.2.59](../../changelogs/@backstage/plugin-badges.md#0259))

#### 0.2.59

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-badges-backend` (0.4.0 → [0.4.1](../../changelogs/@backstage/plugin-badges-backend.md#041))

#### 0.4.1

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-bazaar` (0.2.26 → [0.2.27](../../changelogs/@backstage/plugin-bazaar.md#0227))

#### 0.2.27

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-bazaar-backend` (0.3.15 → [0.3.16](../../changelogs/@backstage/plugin-bazaar-backend.md#0316))

#### 0.3.16

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-bitrise` (0.1.61 → [0.1.62](../../changelogs/@backstage/plugin-bitrise.md#0162))

#### 0.1.62

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-cicd-statistics` (0.1.36 → [0.1.37](../../changelogs/@backstage/plugin-cicd-statistics.md#0137))

#### 0.1.37

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-cicd-statistics-module-gitlab` (0.1.30 → [0.1.31](../../changelogs/@backstage/plugin-cicd-statistics-module-gitlab.md#0131))

#### 0.1.31

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-circleci` (0.3.34 → [0.3.35](../../changelogs/@backstage/plugin-circleci.md#0335))

#### 0.3.35

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): This package has been deprecated in favour of the [Circle-CI](https://github.com/CircleCI-Public/backstage-plugin) plugin. Please migrate to that plugin instead.

### `@backstage/plugin-cloudbuild` (0.5.1 → [0.5.2](../../changelogs/@backstage/plugin-cloudbuild.md#052))

#### 0.5.2

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-code-climate` (0.1.34 → [0.1.35](../../changelogs/@backstage/plugin-code-climate.md#0135))

#### 0.1.35

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-code-coverage` (0.2.27 → [0.2.28](../../changelogs/@backstage/plugin-code-coverage.md#0228))

#### 0.2.28

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-code-coverage-backend` (0.2.31 → [0.2.32](../../changelogs/@backstage/plugin-code-coverage-backend.md#0232))

#### 0.2.32

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-codescene` (0.1.26 → [0.1.27](../../changelogs/@backstage/plugin-codescene.md#0127))

#### 0.1.27

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-cost-insights` (0.12.23 → [0.12.24](../../changelogs/@backstage/plugin-cost-insights.md#01224))

#### 0.12.24

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-cost-insights-common` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-cost-insights-common.md#013))

#### 0.1.3

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-dynatrace` (10.0.3 → [10.0.4](../../changelogs/@backstage/plugin-dynatrace.md#1004))

#### 10.0.4

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-entity-feedback` (0.2.17 → [0.2.18](../../changelogs/@backstage/plugin-entity-feedback.md#0218))

#### 0.2.18

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-entity-feedback-backend` (0.2.14 → [0.2.15](../../changelogs/@backstage/plugin-entity-feedback-backend.md#0215))

#### 0.2.15

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-entity-feedback-common` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-entity-feedback-common.md#014))

#### 0.1.4

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-entity-validation` (0.1.19 → [0.1.20](../../changelogs/@backstage/plugin-entity-validation.md#0120))

#### 0.1.20

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-explore` (0.4.20 → [0.4.21](../../changelogs/@backstage/plugin-explore.md#0421))

#### 0.4.21

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-firehydrant` (0.2.18 → [0.2.19](../../changelogs/@backstage/plugin-firehydrant.md#0219))

#### 0.2.19

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-fossa` (0.2.66 → [0.2.67](../../changelogs/@backstage/plugin-fossa.md#0267))

#### 0.2.67

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-gcalendar` (0.3.27 → [0.3.28](../../changelogs/@backstage/plugin-gcalendar.md#0328))

#### 0.3.28

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-gcp-projects` (0.3.50 → [0.3.51](../../changelogs/@backstage/plugin-gcp-projects.md#0351))

#### 0.3.51

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-git-release-manager` (0.3.46 → [0.3.47](../../changelogs/@backstage/plugin-git-release-manager.md#0347))

#### 0.3.47

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-github-actions` (0.6.15 → [0.6.16](../../changelogs/@backstage/plugin-github-actions.md#0616))

#### 0.6.16

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-github-deployments` (0.1.65 → [0.1.66](../../changelogs/@backstage/plugin-github-deployments.md#0166))

#### 0.1.66

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-github-issues` (0.4.1 → [0.4.2](../../changelogs/@backstage/plugin-github-issues.md#042))

#### 0.4.2

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-github-pull-requests-board` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-github-pull-requests-board.md#021))

#### 0.2.1

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-gitops-profiles` (0.3.49 → [0.3.50](../../changelogs/@backstage/plugin-gitops-profiles.md#0350))

#### 0.3.50

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-gocd` (0.1.40 → [0.1.41](../../changelogs/@backstage/plugin-gocd.md#0141))

#### 0.1.41

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-graphiql` (0.3.7 → [0.3.8](../../changelogs/@backstage/plugin-graphiql.md#038))

#### 0.3.8

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-graphql-voyager` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-graphql-voyager.md#0117))

#### 0.1.17

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-ilert` (0.2.23 → [0.2.24](../../changelogs/@backstage/plugin-ilert.md#0224))

#### 0.2.24

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-jenkins` (0.9.9 → [0.9.10](../../changelogs/@backstage/plugin-jenkins.md#0910))

#### 0.9.10

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-jenkins-backend` (0.4.4 → [0.4.5](../../changelogs/@backstage/plugin-jenkins-backend.md#045))

#### 0.4.5

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-jenkins-common` (0.1.25 → [0.1.26](../../changelogs/@backstage/plugin-jenkins-common.md#0126))

#### 0.1.26

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-kafka` (0.3.34 → [0.3.35](../../changelogs/@backstage/plugin-kafka.md#0335))

#### 0.3.35

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-kafka-backend` (0.3.15 → [0.3.16](../../changelogs/@backstage/plugin-kafka-backend.md#0316))

#### 0.3.16

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-lighthouse` (0.4.19 → [0.4.20](../../changelogs/@backstage/plugin-lighthouse.md#0420))

#### 0.4.20

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-lighthouse-backend` (0.4.10 → [0.4.11](../../changelogs/@backstage/plugin-lighthouse-backend.md#0411))

#### 0.4.11

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-lighthouse-common` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-lighthouse-common.md#016))

#### 0.1.6

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-microsoft-calendar` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-microsoft-calendar.md#0117))

#### 0.1.17

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-newrelic` (0.3.49 → [0.3.50](../../changelogs/@backstage/plugin-newrelic.md#0350))

#### 0.3.50

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-newrelic-dashboard` (0.3.9 → [0.3.10](../../changelogs/@backstage/plugin-newrelic-dashboard.md#0310))

#### 0.3.10

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-octopus-deploy` (0.2.16 → [0.2.17](../../changelogs/@backstage/plugin-octopus-deploy.md#0217))

#### 0.2.17

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-opencost` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-opencost.md#0210))

#### 0.2.10

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-periskop` (0.1.32 → [0.1.33](../../changelogs/@backstage/plugin-periskop.md#0133))

#### 0.1.33

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-periskop-backend` (0.2.15 → [0.2.16](../../changelogs/@backstage/plugin-periskop-backend.md#0216))

#### 0.2.16

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-playlist` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-playlist.md#029))

#### 0.2.9

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-playlist-backend` (0.3.21 → [0.3.22](../../changelogs/@backstage/plugin-playlist-backend.md#0322))

#### 0.3.22

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-playlist-common` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-playlist-common.md#0116))

#### 0.1.16

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-puppetdb` (0.1.17 → [0.1.18](../../changelogs/@backstage/plugin-puppetdb.md#0118))

#### 0.1.18

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-rollbar` (0.4.34 → [0.4.35](../../changelogs/@backstage/plugin-rollbar.md#0435))

#### 0.4.35

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-rollbar-backend` (0.1.62 → [0.1.63](../../changelogs/@backstage/plugin-rollbar-backend.md#0163))

#### 0.1.63

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-search-backend-module-explore` (0.1.21 → [0.1.22](../../changelogs/@backstage/plugin-search-backend-module-explore.md#0122))

_No changelog entries found._

### `@backstage/plugin-sentry` (0.5.19 → [0.5.20](../../changelogs/@backstage/plugin-sentry.md#0520))

#### 0.5.20

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-shortcuts` (0.3.23 → [0.3.24](../../changelogs/@backstage/plugin-shortcuts.md#0324))

#### 0.3.24

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-sonarqube` (0.7.16 → [0.7.17](../../changelogs/@backstage/plugin-sonarqube.md#0717))

#### 0.7.17

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-sonarqube-backend` (0.2.19 → [0.2.20](../../changelogs/@backstage/plugin-sonarqube-backend.md#0220))

#### 0.2.20

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-sonarqube-react` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-sonarqube-react.md#0116))

#### 0.1.16

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-splunk-on-call` (0.4.23 → [0.4.24](../../changelogs/@backstage/plugin-splunk-on-call.md#0424))

#### 0.4.24

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-stack-overflow` (0.1.29 → [0.1.30](../../changelogs/@backstage/plugin-stack-overflow.md#0130))

#### 0.1.30

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-stack-overflow-backend` (0.2.21 → [0.2.22](../../changelogs/@backstage/plugin-stack-overflow-backend.md#0222))

#### 0.2.22

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-stackstorm` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-stackstorm.md#0116))

#### 0.1.16

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-tech-insights` (0.3.26 → [0.3.27](../../changelogs/@backstage/plugin-tech-insights.md#0327))

#### 0.3.27

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-tech-insights-backend` (0.5.31 → [0.5.32](../../changelogs/@backstage/plugin-tech-insights-backend.md#0532))

#### 0.5.32

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.49 → [0.1.50](../../changelogs/@backstage/plugin-tech-insights-backend-module-jsonfc.md#0150))

#### 0.1.50

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-tech-insights-common` (0.2.12 → [0.2.13](../../changelogs/@backstage/plugin-tech-insights-common.md#0213))

#### 0.2.13

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-tech-insights-node` (0.6.0 → [0.6.1](../../changelogs/@backstage/plugin-tech-insights-node.md#061))

#### 0.6.1

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-tech-radar` (0.7.3 → [0.7.4](../../changelogs/@backstage/plugin-tech-radar.md#074))

#### 0.7.4

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-vault` (0.1.29 → [0.1.30](../../changelogs/@backstage/plugin-vault.md#0130))

#### 0.1.30

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-vault-backend` (0.4.10 → [0.4.11](../../changelogs/@backstage/plugin-vault-backend.md#0411))

#### 0.4.11

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-vault-node` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-vault-node.md#0111))

#### 0.1.11

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-xcmetrics` (0.2.52 → [0.2.53](../../changelogs/@backstage/plugin-xcmetrics.md#0253))

#### 0.2.53

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.
