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

### `@backstage/plugin-explore-backend` (0.0.27 → 0.0.28)

#### 0.0.28

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-explore-common` (0.0.2 → 0.0.3)

#### 0.0.3

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-explore-react` (0.0.38 → 0.0.39)

#### 0.0.39

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

## Other patch version bumps

### `@backstage/cli` (0.26.3 → 0.26.4)

_No changelog entries found._

### `@backstage/plugin-adr` (0.6.17 → 0.6.18)

#### 0.6.18

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-adr-backend` (0.4.14 → 0.4.15)

#### 0.4.15

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-adr-common` (0.2.22 → 0.2.23)

#### 0.2.23

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-airbrake` (0.3.34 → 0.3.35)

#### 0.3.35

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-airbrake-backend` (0.3.14 → 0.3.15)

#### 0.3.15

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-allure` (0.1.50 → 0.1.51)

#### 0.1.51

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-analytics-module-ga` (0.2.4 → 0.2.5)

#### 0.2.5

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-analytics-module-ga4` (0.2.4 → 0.2.5)

#### 0.2.5

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-analytics-module-newrelic-browser` (0.1.4 → 0.1.5)

#### 0.1.5

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-apache-airflow` (0.2.24 → 0.2.25)

#### 0.2.25

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-apollo-explorer` (0.2.0 → 0.2.1)

#### 0.2.1

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-azure-devops` (0.4.3 → 0.4.4)

#### 0.4.4

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-azure-devops-backend` (0.6.4 → 0.6.5)

#### 0.6.5

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-azure-devops-common` (0.4.1 → 0.4.2)

#### 0.4.2

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-azure-sites` (0.1.23 → 0.1.24)

#### 0.1.24

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-azure-sites-backend` (0.3.4 → 0.3.5)

#### 0.3.5

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-azure-sites-common` (0.1.3 → 0.1.4)

#### 0.1.4

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-badges` (0.2.58 → 0.2.59)

#### 0.2.59

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-badges-backend` (0.4.0 → 0.4.1)

#### 0.4.1

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-bazaar` (0.2.26 → 0.2.27)

#### 0.2.27

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-bazaar-backend` (0.3.15 → 0.3.16)

#### 0.3.16

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-bitrise` (0.1.61 → 0.1.62)

#### 0.1.62

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-cicd-statistics` (0.1.36 → 0.1.37)

#### 0.1.37

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-cicd-statistics-module-gitlab` (0.1.30 → 0.1.31)

#### 0.1.31

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-circleci` (0.3.34 → 0.3.35)

#### 0.3.35

##### Patch Changes

- c2112f2: This package has been deprecated in favour of the [Circle-CI](https://github.com/CircleCI-Public/backstage-plugin) plugin. Please migrate to that plugin instead.

### `@backstage/plugin-cloudbuild` (0.5.1 → 0.5.2)

#### 0.5.2

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-code-climate` (0.1.34 → 0.1.35)

#### 0.1.35

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-code-coverage` (0.2.27 → 0.2.28)

#### 0.2.28

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-code-coverage-backend` (0.2.31 → 0.2.32)

#### 0.2.32

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-codescene` (0.1.26 → 0.1.27)

#### 0.1.27

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-cost-insights` (0.12.23 → 0.12.24)

#### 0.12.24

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-cost-insights-common` (0.1.2 → 0.1.3)

#### 0.1.3

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-dynatrace` (10.0.3 → 10.0.4)

#### 10.0.4

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-entity-feedback` (0.2.17 → 0.2.18)

#### 0.2.18

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-entity-feedback-backend` (0.2.14 → 0.2.15)

#### 0.2.15

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-entity-feedback-common` (0.1.3 → 0.1.4)

#### 0.1.4

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-entity-validation` (0.1.19 → 0.1.20)

#### 0.1.20

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-explore` (0.4.20 → 0.4.21)

#### 0.4.21

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-firehydrant` (0.2.18 → 0.2.19)

#### 0.2.19

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-fossa` (0.2.66 → 0.2.67)

#### 0.2.67

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-gcalendar` (0.3.27 → 0.3.28)

#### 0.3.28

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-gcp-projects` (0.3.50 → 0.3.51)

#### 0.3.51

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-git-release-manager` (0.3.46 → 0.3.47)

#### 0.3.47

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-github-actions` (0.6.15 → 0.6.16)

#### 0.6.16

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-github-deployments` (0.1.65 → 0.1.66)

#### 0.1.66

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-github-issues` (0.4.1 → 0.4.2)

#### 0.4.2

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-github-pull-requests-board` (0.2.0 → 0.2.1)

#### 0.2.1

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-gitops-profiles` (0.3.49 → 0.3.50)

#### 0.3.50

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-gocd` (0.1.40 → 0.1.41)

#### 0.1.41

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-graphiql` (0.3.7 → 0.3.8)

#### 0.3.8

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-graphql-voyager` (0.1.16 → 0.1.17)

#### 0.1.17

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-ilert` (0.2.23 → 0.2.24)

#### 0.2.24

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-jenkins` (0.9.9 → 0.9.10)

#### 0.9.10

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-jenkins-backend` (0.4.4 → 0.4.5)

#### 0.4.5

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-jenkins-common` (0.1.25 → 0.1.26)

#### 0.1.26

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-kafka` (0.3.34 → 0.3.35)

#### 0.3.35

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-kafka-backend` (0.3.15 → 0.3.16)

#### 0.3.16

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-lighthouse` (0.4.19 → 0.4.20)

#### 0.4.20

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-lighthouse-backend` (0.4.10 → 0.4.11)

#### 0.4.11

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-lighthouse-common` (0.1.5 → 0.1.6)

#### 0.1.6

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-microsoft-calendar` (0.1.16 → 0.1.17)

#### 0.1.17

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-newrelic` (0.3.49 → 0.3.50)

#### 0.3.50

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-newrelic-dashboard` (0.3.9 → 0.3.10)

#### 0.3.10

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-octopus-deploy` (0.2.16 → 0.2.17)

#### 0.2.17

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-opencost` (0.2.9 → 0.2.10)

#### 0.2.10

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-periskop` (0.1.32 → 0.1.33)

#### 0.1.33

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-periskop-backend` (0.2.15 → 0.2.16)

#### 0.2.16

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-playlist` (0.2.8 → 0.2.9)

#### 0.2.9

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-playlist-backend` (0.3.21 → 0.3.22)

#### 0.3.22

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-playlist-common` (0.1.15 → 0.1.16)

#### 0.1.16

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-puppetdb` (0.1.17 → 0.1.18)

#### 0.1.18

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-rollbar` (0.4.34 → 0.4.35)

#### 0.4.35

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-rollbar-backend` (0.1.62 → 0.1.63)

#### 0.1.63

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-search-backend-module-explore` (0.1.21 → 0.1.22)

_No changelog entries found._

### `@backstage/plugin-sentry` (0.5.19 → 0.5.20)

#### 0.5.20

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-shortcuts` (0.3.23 → 0.3.24)

#### 0.3.24

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-sonarqube` (0.7.16 → 0.7.17)

#### 0.7.17

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-sonarqube-backend` (0.2.19 → 0.2.20)

#### 0.2.20

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-sonarqube-react` (0.1.15 → 0.1.16)

#### 0.1.16

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-splunk-on-call` (0.4.23 → 0.4.24)

#### 0.4.24

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-stack-overflow` (0.1.29 → 0.1.30)

#### 0.1.30

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-stack-overflow-backend` (0.2.21 → 0.2.22)

#### 0.2.22

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-stackstorm` (0.1.15 → 0.1.16)

#### 0.1.16

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-tech-insights` (0.3.26 → 0.3.27)

#### 0.3.27

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-tech-insights-backend` (0.5.31 → 0.5.32)

#### 0.5.32

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.49 → 0.1.50)

#### 0.1.50

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-tech-insights-common` (0.2.12 → 0.2.13)

#### 0.2.13

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-tech-insights-node` (0.6.0 → 0.6.1)

#### 0.6.1

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-tech-radar` (0.7.3 → 0.7.4)

#### 0.7.4

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-vault` (0.1.29 → 0.1.30)

#### 0.1.30

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-vault-backend` (0.4.10 → 0.4.11)

#### 0.4.11

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-vault-node` (0.1.10 → 0.1.11)

#### 0.1.11

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-xcmetrics` (0.2.52 → 0.2.53)

#### 0.2.53

##### Patch Changes

- c2112f2: These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.
