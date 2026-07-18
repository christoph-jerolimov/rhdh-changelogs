# Backstage Release 1.12.0 changelog

Changes between 1.11.1 and 1.12.0 — 188 changed and 3 added packages.

## Summary

- [Newly added packages](#newly-added-packages): 3 packages
- [Breaking changes](#breaking-changes): 2 packages
- [Major version bumps](#major-version-bumps): 1 package
- [0.x minor version bumps](#0x-minor-version-bumps): 4 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 3 packages
- [Other minor version bumps](#other-minor-version-bumps): 12 packages
- [Other patch version bumps](#other-patch-version-bumps): 139 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/plugin-catalog-backend-module-puppetdb` (new, 0.1.0)](#backstageplugin-catalog-backend-module-puppetdb-new-010)
  - [`@backstage/plugin-octopus-deploy` (new, 0.1.0)](#backstageplugin-octopus-deploy-new-010)
  - [`@backstage/plugin-stackstorm` (new, 0.1.0)](#backstageplugin-stackstorm-new-010)
- [Breaking changes](#breaking-changes)
  - [`@backstage/core-app-api` (1.5.0 → 1.6.0)](#backstagecore-app-api-150--160)
  - [`@backstage/plugin-linguist-backend` (0.1.0 → 0.2.0)](#backstageplugin-linguist-backend-010--020)
- [Major version bumps](#major-version-bumps)
  - [`@backstage/plugin-dynatrace` (2.0.0 → 3.0.0)](#backstageplugin-dynatrace-200--300)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/backend-plugin-api` (0.4.0 → 0.5.0)](#backstagebackend-plugin-api-040--050)
  - [`@backstage/backend-tasks` (0.4.3 → 0.5.0)](#backstagebackend-tasks-043--050)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.2.1 → 0.3.0)](#backstageplugin-catalog-backend-module-incremental-ingestion-021--030)
  - [`@backstage/plugin-firehydrant` (0.1.32 → 0.2.0)](#backstageplugin-firehydrant-0132--020)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-explore-backend` (0.0.4 → 0.0.5)](#backstageplugin-explore-backend-004--005)
  - [`@backstage/plugin-explore-react` (0.0.26 → 0.0.27)](#backstageplugin-explore-react-0026--0027)
  - [`@backstage/release-manifests` (0.0.8 → 0.0.9)](#backstagerelease-manifests-008--009)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/catalog-client` (1.3.1 → 1.4.0)](#backstagecatalog-client-131--140)
  - [`@backstage/core-plugin-api` (1.4.0 → 1.5.0)](#backstagecore-plugin-api-140--150)
  - [`@backstage/plugin-catalog` (1.8.0 → 1.9.0)](#backstageplugin-catalog-180--190)
  - [`@backstage/plugin-catalog-backend` (1.7.2 → 1.8.0)](#backstageplugin-catalog-backend-172--180)
  - [`@backstage/plugin-catalog-react` (1.3.0 → 1.4.0)](#backstageplugin-catalog-react-130--140)
  - [`@backstage/plugin-scaffolder` (1.11.0 → 1.12.0)](#backstageplugin-scaffolder-1110--1120)
  - [`@backstage/plugin-scaffolder-backend` (1.11.0 → 1.12.0)](#backstageplugin-scaffolder-backend-1110--1120)
  - [`@backstage/plugin-scaffolder-react` (1.1.0 → 1.2.0)](#backstageplugin-scaffolder-react-110--120)
  - [`@backstage/plugin-techdocs` (1.5.0 → 1.6.0)](#backstageplugin-techdocs-150--160)
  - [`@backstage/plugin-techdocs-backend` (1.5.3 → 1.6.0)](#backstageplugin-techdocs-backend-153--160)
  - [`@backstage/plugin-techdocs-node` (1.5.0 → 1.6.0)](#backstageplugin-techdocs-node-150--160)
  - [`@techdocs/cli` (1.3.2 → 1.4.0)](#techdocscli-132--140)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-app-api` (0.4.0 → 0.4.1)](#backstagebackend-app-api-040--041)
  - [`@backstage/backend-common` (0.18.2 → 0.18.3)](#backstagebackend-common-0182--0183)
  - [`@backstage/backend-defaults` (0.1.7 → 0.1.8)](#backstagebackend-defaults-017--018)
  - [`@backstage/backend-dev-utils` (0.1.0 → 0.1.1)](#backstagebackend-dev-utils-010--011)
  - [`@backstage/backend-test-utils` (0.1.34 → 0.1.35)](#backstagebackend-test-utils-0134--0135)
  - [`@backstage/catalog-model` (1.2.0 → 1.2.1)](#backstagecatalog-model-120--121)
  - [`@backstage/cli` (0.22.3 → 0.22.4)](#backstagecli-0223--0224)
  - [`@backstage/cli-common` (0.1.11 → 0.1.12)](#backstagecli-common-0111--0112)
  - [`@backstage/codemods` (0.1.43 → 0.1.44)](#backstagecodemods-0143--0144)
  - [`@backstage/config` (1.0.6 → 1.0.7)](#backstageconfig-106--107)
  - [`@backstage/config-loader` (1.1.8 → 1.1.9)](#backstageconfig-loader-118--119)
  - [`@backstage/core-components` (0.12.4 → 0.12.5)](#backstagecore-components-0124--0125)
  - [`@backstage/create-app` (0.4.37 → 0.4.38)](#backstagecreate-app-0437--0438)
  - [`@backstage/dev-utils` (1.0.12 → 1.0.13)](#backstagedev-utils-1012--1013)
  - [`@backstage/errors` (1.1.4 → 1.1.5)](#backstageerrors-114--115)
  - [`@backstage/eslint-plugin` (0.1.1 → 0.1.2)](#backstageeslint-plugin-011--012)
  - [`@backstage/integration` (1.4.2 → 1.4.3)](#backstageintegration-142--143)
  - [`@backstage/integration-react` (1.1.10 → 1.1.11)](#backstageintegration-react-1110--1111)
  - [`@backstage/plugin-adr` (0.4.0 → 0.4.1)](#backstageplugin-adr-040--041)
  - [`@backstage/plugin-adr-backend` (0.3.0 → 0.3.1)](#backstageplugin-adr-backend-030--031)
  - [`@backstage/plugin-airbrake` (0.3.15 → 0.3.16)](#backstageplugin-airbrake-0315--0316)
  - [`@backstage/plugin-airbrake-backend` (0.2.15 → 0.2.16)](#backstageplugin-airbrake-backend-0215--0216)
  - [`@backstage/plugin-allure` (0.1.31 → 0.1.32)](#backstageplugin-allure-0131--0132)
  - [`@backstage/plugin-analytics-module-ga` (0.1.26 → 0.1.27)](#backstageplugin-analytics-module-ga-0126--0127)
  - [`@backstage/plugin-apache-airflow` (0.2.8 → 0.2.9)](#backstageplugin-apache-airflow-028--029)
  - [`@backstage/plugin-api-docs` (0.9.0 → 0.9.1)](#backstageplugin-api-docs-090--091)
  - [`@backstage/plugin-apollo-explorer` (0.1.8 → 0.1.9)](#backstageplugin-apollo-explorer-018--019)
  - [`@backstage/plugin-app-backend` (0.3.42 → 0.3.43)](#backstageplugin-app-backend-0342--0343)
  - [`@backstage/plugin-auth-backend` (0.18.0 → 0.18.1)](#backstageplugin-auth-backend-0180--0181)
  - [`@backstage/plugin-auth-node` (0.2.11 → 0.2.12)](#backstageplugin-auth-node-0211--0212)
  - [`@backstage/plugin-azure-devops` (0.2.6 → 0.2.7)](#backstageplugin-azure-devops-026--027)
  - [`@backstage/plugin-azure-devops-backend` (0.3.21 → 0.3.22)](#backstageplugin-azure-devops-backend-0321--0322)
  - [`@backstage/plugin-azure-sites` (0.1.4 → 0.1.5)](#backstageplugin-azure-sites-014--015)
  - [`@backstage/plugin-azure-sites-backend` (0.1.4 → 0.1.5)](#backstageplugin-azure-sites-backend-014--015)
  - [`@backstage/plugin-badges` (0.2.39 → 0.2.40)](#backstageplugin-badges-0239--0240)
  - [`@backstage/plugin-bitbucket-cloud-common` (0.2.3 → 0.2.4)](#backstageplugin-bitbucket-cloud-common-023--024)
  - [`@backstage/plugin-bitrise` (0.1.42 → 0.1.43)](#backstageplugin-bitrise-0142--0143)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.1.16 → 0.1.17)](#backstageplugin-catalog-backend-module-aws-0116--0117)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.1.13 → 0.1.14)](#backstageplugin-catalog-backend-module-azure-0113--0114)
  - [`@backstage/plugin-catalog-backend-module-bitbucket` (0.2.9 → 0.2.10)](#backstageplugin-catalog-backend-module-bitbucket-029--0210)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.9 → 0.1.10)](#backstageplugin-catalog-backend-module-bitbucket-cloud-019--0110)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.7 → 0.1.8)](#backstageplugin-catalog-backend-module-bitbucket-server-017--018)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (0.1.10 → 0.1.11)](#backstageplugin-catalog-backend-module-gerrit-0110--0111)
  - [`@backstage/plugin-catalog-backend-module-github` (0.2.5 → 0.2.6)](#backstageplugin-catalog-backend-module-github-025--026)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.1.13 → 0.1.14)](#backstageplugin-catalog-backend-module-gitlab-0113--0114)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.5.9 → 0.5.10)](#backstageplugin-catalog-backend-module-ldap-059--0510)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.5.1 → 0.5.2)](#backstageplugin-catalog-backend-module-msgraph-051--052)
  - [`@backstage/plugin-catalog-common` (1.0.11 → 1.0.12)](#backstageplugin-catalog-common-1011--1012)
  - [`@backstage/plugin-catalog-graphql` (0.3.18 → 0.3.19)](#backstageplugin-catalog-graphql-0318--0319)
  - [`@backstage/plugin-catalog-import` (0.9.5 → 0.9.6)](#backstageplugin-catalog-import-095--096)
  - [`@backstage/plugin-catalog-node` (1.3.3 → 1.3.4)](#backstageplugin-catalog-node-133--134)
  - [`@backstage/plugin-circleci` (0.3.15 → 0.3.16)](#backstageplugin-circleci-0315--0316)
  - [`@backstage/plugin-cloudbuild` (0.3.15 → 0.3.16)](#backstageplugin-cloudbuild-0315--0316)
  - [`@backstage/plugin-code-climate` (0.1.15 → 0.1.16)](#backstageplugin-code-climate-0115--0116)
  - [`@backstage/plugin-code-coverage` (0.2.8 → 0.2.9)](#backstageplugin-code-coverage-028--029)
  - [`@backstage/plugin-code-coverage-backend` (0.2.8 → 0.2.9)](#backstageplugin-code-coverage-backend-028--029)
  - [`@backstage/plugin-codescene` (0.1.10 → 0.1.11)](#backstageplugin-codescene-0110--0111)
  - [`@backstage/plugin-config-schema` (0.1.38 → 0.1.39)](#backstageplugin-config-schema-0138--0139)
  - [`@backstage/plugin-cost-insights` (0.12.4 → 0.12.5)](#backstageplugin-cost-insights-0124--0125)
  - [`@backstage/plugin-entity-feedback` (0.1.0 → 0.1.1)](#backstageplugin-entity-feedback-010--011)
  - [`@backstage/plugin-entity-feedback-backend` (0.1.0 → 0.1.1)](#backstageplugin-entity-feedback-backend-010--011)
  - [`@backstage/plugin-entity-validation` (0.1.0 → 0.1.1)](#backstageplugin-entity-validation-010--011)
  - [`@backstage/plugin-events-backend` (0.2.3 → 0.2.4)](#backstageplugin-events-backend-023--024)
  - [`@backstage/plugin-events-backend-module-aws-sqs` (0.1.4 → 0.1.5)](#backstageplugin-events-backend-module-aws-sqs-014--015)
  - [`@backstage/plugin-events-backend-module-azure` (0.1.4 → 0.1.5)](#backstageplugin-events-backend-module-azure-014--015)
  - [`@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.4 → 0.1.5)](#backstageplugin-events-backend-module-bitbucket-cloud-014--015)
  - [`@backstage/plugin-events-backend-module-gerrit` (0.1.4 → 0.1.5)](#backstageplugin-events-backend-module-gerrit-014--015)
  - [`@backstage/plugin-events-backend-module-github` (0.1.4 → 0.1.5)](#backstageplugin-events-backend-module-github-014--015)
  - [`@backstage/plugin-events-backend-module-gitlab` (0.1.4 → 0.1.5)](#backstageplugin-events-backend-module-gitlab-014--015)
  - [`@backstage/plugin-events-node` (0.2.3 → 0.2.4)](#backstageplugin-events-node-023--024)
  - [`@backstage/plugin-explore` (0.4.0 → 0.4.1)](#backstageplugin-explore-040--041)
  - [`@backstage/plugin-fossa` (0.2.47 → 0.2.48)](#backstageplugin-fossa-0247--0248)
  - [`@backstage/plugin-gcalendar` (0.3.11 → 0.3.12)](#backstageplugin-gcalendar-0311--0312)
  - [`@backstage/plugin-gcp-projects` (0.3.34 → 0.3.35)](#backstageplugin-gcp-projects-0334--0335)
  - [`@backstage/plugin-git-release-manager` (0.3.28 → 0.3.29)](#backstageplugin-git-release-manager-0328--0329)
  - [`@backstage/plugin-github-actions` (0.5.15 → 0.5.16)](#backstageplugin-github-actions-0515--0516)
  - [`@backstage/plugin-github-deployments` (0.1.46 → 0.1.47)](#backstageplugin-github-deployments-0146--0147)
  - [`@backstage/plugin-github-issues` (0.2.4 → 0.2.5)](#backstageplugin-github-issues-024--025)
  - [`@backstage/plugin-github-pull-requests-board` (0.1.9 → 0.1.10)](#backstageplugin-github-pull-requests-board-019--0110)
  - [`@backstage/plugin-gitops-profiles` (0.3.33 → 0.3.34)](#backstageplugin-gitops-profiles-0333--0334)
  - [`@backstage/plugin-gocd` (0.1.21 → 0.1.22)](#backstageplugin-gocd-0121--0122)
  - [`@backstage/plugin-graphiql` (0.2.47 → 0.2.48)](#backstageplugin-graphiql-0247--0248)
  - [`@backstage/plugin-graphql-backend` (0.1.32 → 0.1.33)](#backstageplugin-graphql-backend-0132--0133)
  - [`@backstage/plugin-graphql-voyager` (0.1.0 → 0.1.1)](#backstageplugin-graphql-voyager-010--011)
  - [`@backstage/plugin-home` (0.4.31 → 0.4.32)](#backstageplugin-home-0431--0432)
  - [`@backstage/plugin-ilert` (0.2.4 → 0.2.5)](#backstageplugin-ilert-024--025)
  - [`@backstage/plugin-jenkins` (0.7.14 → 0.7.15)](#backstageplugin-jenkins-0714--0715)
  - [`@backstage/plugin-jenkins-backend` (0.1.32 → 0.1.33)](#backstageplugin-jenkins-backend-0132--0133)
  - [`@backstage/plugin-jenkins-common` (0.1.13 → 0.1.14)](#backstageplugin-jenkins-common-0113--0114)
  - [`@backstage/plugin-kafka` (0.3.15 → 0.3.16)](#backstageplugin-kafka-0315--0316)
  - [`@backstage/plugin-kubernetes` (0.7.8 → 0.7.9)](#backstageplugin-kubernetes-078--079)
  - [`@backstage/plugin-kubernetes-backend` (0.9.3 → 0.9.4)](#backstageplugin-kubernetes-backend-093--094)
  - [`@backstage/plugin-lighthouse` (0.4.0 → 0.4.1)](#backstageplugin-lighthouse-040--041)
  - [`@backstage/plugin-lighthouse-backend` (0.1.0 → 0.1.1)](#backstageplugin-lighthouse-backend-010--011)
  - [`@backstage/plugin-linguist` (0.1.0 → 0.1.1)](#backstageplugin-linguist-010--011)
  - [`@backstage/plugin-microsoft-calendar` (0.1.0 → 0.1.1)](#backstageplugin-microsoft-calendar-010--011)
  - [`@backstage/plugin-newrelic` (0.3.33 → 0.3.34)](#backstageplugin-newrelic-0333--0334)
  - [`@backstage/plugin-newrelic-dashboard` (0.2.8 → 0.2.9)](#backstageplugin-newrelic-dashboard-028--029)
  - [`@backstage/plugin-org` (0.6.5 → 0.6.6)](#backstageplugin-org-065--066)
  - [`@backstage/plugin-org-react` (0.1.4 → 0.1.5)](#backstageplugin-org-react-014--015)
  - [`@backstage/plugin-pagerduty` (0.5.8 → 0.5.9)](#backstageplugin-pagerduty-058--059)
  - [`@backstage/plugin-periskop` (0.1.13 → 0.1.14)](#backstageplugin-periskop-0113--0114)
  - [`@backstage/plugin-periskop-backend` (0.1.13 → 0.1.14)](#backstageplugin-periskop-backend-0113--0114)
  - [`@backstage/plugin-permission-backend` (0.5.17 → 0.5.18)](#backstageplugin-permission-backend-0517--0518)
  - [`@backstage/plugin-permission-common` (0.7.3 → 0.7.4)](#backstageplugin-permission-common-073--074)
  - [`@backstage/plugin-permission-node` (0.7.5 → 0.7.6)](#backstageplugin-permission-node-075--076)
  - [`@backstage/plugin-playlist` (0.1.6 → 0.1.7)](#backstageplugin-playlist-016--017)
  - [`@backstage/plugin-playlist-backend` (0.2.5 → 0.2.6)](#backstageplugin-playlist-backend-025--026)
  - [`@backstage/plugin-proxy-backend` (0.2.36 → 0.2.37)](#backstageplugin-proxy-backend-0236--0237)
  - [`@backstage/plugin-rollbar` (0.4.15 → 0.4.16)](#backstageplugin-rollbar-0415--0416)
  - [`@backstage/plugin-rollbar-backend` (0.1.39 → 0.1.40)](#backstageplugin-rollbar-backend-0139--0140)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.17 → 0.2.18)](#backstageplugin-scaffolder-backend-module-cookiecutter-0217--0218)
  - [`@backstage/plugin-search` (1.1.0 → 1.1.1)](#backstageplugin-search-110--111)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.1.3 → 1.1.4)](#backstageplugin-search-backend-module-elasticsearch-113--114)
  - [`@backstage/plugin-search-react` (1.5.0 → 1.5.1)](#backstageplugin-search-react-150--151)
  - [`@backstage/plugin-sentry` (0.5.0 → 0.5.1)](#backstageplugin-sentry-050--051)
  - [`@backstage/plugin-shortcuts` (0.3.7 → 0.3.8)](#backstageplugin-shortcuts-037--038)
  - [`@backstage/plugin-sonarqube` (0.6.4 → 0.6.5)](#backstageplugin-sonarqube-064--065)
  - [`@backstage/plugin-sonarqube-backend` (0.1.7 → 0.1.8)](#backstageplugin-sonarqube-backend-017--018)
  - [`@backstage/plugin-sonarqube-react` (0.1.3 → 0.1.4)](#backstageplugin-sonarqube-react-013--014)
  - [`@backstage/plugin-splunk-on-call` (0.4.4 → 0.4.5)](#backstageplugin-splunk-on-call-044--045)
  - [`@backstage/plugin-stack-overflow` (0.1.11 → 0.1.12)](#backstageplugin-stack-overflow-0111--0112)
  - [`@backstage/plugin-stack-overflow-backend` (0.1.11 → 0.1.12)](#backstageplugin-stack-overflow-backend-0111--0112)
  - [`@backstage/plugin-tech-insights` (0.3.7 → 0.3.8)](#backstageplugin-tech-insights-037--038)
  - [`@backstage/plugin-tech-insights-backend` (0.5.8 → 0.5.9)](#backstageplugin-tech-insights-backend-058--059)
  - [`@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.26 → 0.1.27)](#backstageplugin-tech-insights-backend-module-jsonfc-0126--0127)
  - [`@backstage/plugin-tech-radar` (0.6.1 → 0.6.2)](#backstageplugin-tech-radar-061--062)
  - [`@backstage/plugin-techdocs-addons-test-utils` (1.0.10 → 1.0.11)](#backstageplugin-techdocs-addons-test-utils-1010--1011)
  - [`@backstage/plugin-techdocs-module-addons-contrib` (1.0.10 → 1.0.11)](#backstageplugin-techdocs-module-addons-contrib-1010--1011)
  - [`@backstage/plugin-techdocs-react` (1.1.3 → 1.1.4)](#backstageplugin-techdocs-react-113--114)
  - [`@backstage/plugin-todo` (0.2.17 → 0.2.18)](#backstageplugin-todo-0217--0218)
  - [`@backstage/plugin-todo-backend` (0.1.39 → 0.1.40)](#backstageplugin-todo-backend-0139--0140)
  - [`@backstage/plugin-user-settings` (0.7.0 → 0.7.1)](#backstageplugin-user-settings-070--071)
  - [`@backstage/plugin-vault` (0.1.9 → 0.1.10)](#backstageplugin-vault-019--0110)
  - [`@backstage/plugin-vault-backend` (0.2.9 → 0.2.10)](#backstageplugin-vault-backend-029--0210)
  - [`@backstage/plugin-xcmetrics` (0.2.35 → 0.2.36)](#backstageplugin-xcmetrics-0235--0236)
  - [`@backstage/repo-tools` (0.1.2 → 0.1.3)](#backstagerepo-tools-012--013)
  - [`@backstage/test-utils` (1.2.5 → 1.2.6)](#backstagetest-utils-125--126)
  - [`@backstage/theme` (0.2.17 → 0.2.18)](#backstagetheme-0217--0218)

## Newly added packages

### `@backstage/plugin-catalog-backend-module-puppetdb` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- a1efcf9a658: Initial version of the plugin.

##### Patch Changes

- 561ce41191d: Added a `catalogModulePuppetDbEntityProvider` alpha export for the new backend system
- e675f902980: Make sure to not use deprecated exports from `@backstage/plugin-catalog-backend`

### `@backstage/plugin-octopus-deploy` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- b7fff1171f0: Initial version

##### Patch Changes

- cb0fc15a992: Added Octopus Deploy logo
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-stackstorm` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- f3a15259e91: Add StackStorm plugin to Backstage which is interfacing with StackStorm API. It allows users to view workflow executions, packs and actions. For installation and configuration instructions please view [README.md](https://github.com/backstage/backstage/tree/master/plugins/stackstorm/README.md)

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

## Breaking changes

### `@backstage/core-app-api` (1.5.0 → 1.6.0)

#### 1.6.0

##### Minor Changes

- 456eaa8cf83: `OAuth2` now gets ID tokens from a session with the `openid` scope explicitly
  requested.

  This should not be considered a breaking change, because spec-compliant OIDC
  providers will already be returning ID tokens if and only if the `openid` scope
  is granted.

  This change makes the dependence explicit, and removes the burden on
  OAuth2-based providers which require an ID token (e.g. this is done by various
  default [auth handlers](https://backstage.io/docs/auth/identity-resolver/#authhandler)) to add
  `openid` to their default scopes. _That_ could carry another indirect benefit:
  by removing `openid` from the default scopes for a provider, grants for
  resource-specific access tokens can avoid requesting excess ID token-related
  scopes.

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-linguist-backend` (0.1.0 → 0.2.0)

#### 0.2.0

##### Minor Changes

- 4a1c318853d: **BREAKING** The linguist-backend `createRouter` now requires that the `tokenManger` is passed to the router.

##### Patch Changes

- 8a298b47240: Added support for linguist-js options using the linguistJSOptions in the plugin, the available config can be found [here](https://www.npmjs.com/package/linguist-js#API).
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- 2ea57821629: Fixed bug in LinguistBackendApi that caused initial batch of entities to be skipped.
- b271d5ca052: Allow kind to be configurable

  ```ts
  return createRouter({ schedule: schedule, kind: ['Component'] }, { ...env });
  ```

## Major version bumps

### `@backstage/plugin-dynatrace` (2.0.0 → 3.0.0)

#### 3.0.0

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

## 0.x minor version bumps

### `@backstage/backend-plugin-api` (0.4.0 → 0.5.0)

#### 0.5.0

##### Minor Changes

- c1ee073a82b: Added `lastModifiedAt` field on `UrlReaderService` responses and a `lastModifiedAfter` option to `UrlReaderService.readUrl`.

##### Patch Changes

- 928a12a9b3e: Internal refactor of `/alpha` exports.
- 482dae5de1c: Updated link to docs.

### `@backstage/backend-tasks` (0.4.3 → 0.5.0)

#### 0.5.0

##### Minor Changes

- 1578276708a: add functionality to get descriptions from the scheduler for triggering

##### Patch Changes

- f0685193efa: Added the adapted query to mysql and sqlite3 databases to not returning warning on logs
- 482dae5de1c: Updated link to docs.

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.2.1 → 0.3.0)

#### 0.3.0

##### Minor Changes

- a811bd246c4: Added endpoint to get a list of known incremental entity providers

##### Patch Changes

- 90469c02c8c: Renamed `incrementalIngestionEntityProviderCatalogModule` to `catalogModuleIncrementalIngestionEntityProvider` to match the [recommended naming patterns](https://backstage.io/docs/backend-system/architecture/naming-patterns).
- e675f902980: Make sure to not use deprecated exports from `@backstage/plugin-catalog-backend`
- 928a12a9b3e: Internal refactor of `/alpha` exports.
- bf611cf019a: Fix missing `dependencies` in `package.json`
- 6e612b58577: Move `@backstage/backend-defaults` to `devDependencies`

### `@backstage/plugin-firehydrant` (0.1.32 → 0.2.0)

#### 0.2.0

##### Minor Changes

- e2e3dd08a54: Allow firehydrant to use component annotation

##### Patch Changes

- cb8ec97cdeb: Change black & white colors to be theme aware
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

## 0.0.x patch version bumps

### `@backstage/plugin-explore-backend` (0.0.4 → 0.0.5)

#### 0.0.5

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-explore-react` (0.0.26 → 0.0.27)

#### 0.0.27

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/release-manifests` (0.0.8 → 0.0.9)

#### 0.0.9

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

## Other minor version bumps

### `@backstage/catalog-client` (1.3.1 → 1.4.0)

#### 1.4.0

##### Minor Changes

- 8c030b1826c: Add `queryEntities` method to `CatalogApi`.

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- c630360631f: Ensure that `getEntitiesByRefs` returns `undefined` instead of `null` for missing items

### `@backstage/core-plugin-api` (1.4.0 → 1.5.0)

#### 1.5.0

##### Minor Changes

- ab750ddc4f2: The GitLab auth provider can now be used to get OpenID tokens.

##### Patch Changes

- 928a12a9b3e: Internal refactor of `/alpha` exports.
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-catalog` (1.8.0 → 1.9.0)

#### 1.9.0

##### Minor Changes

- 23cc40039c0: Allow `EntitySwitch` to render all cases that match the condition.

  This change introduces a new parameter for the `EntitySwitch` component
  `renderMultipleMatches`. In case the parameter value is `all`, the `EntitySwitch`
  will render all `EntitySwitch.Case` that contain `if` parameter, and it
  evaluates to true. In case none of the cases match, the default case will be
  rendered, if any.

  This means for example in the CI/CD page you can now do the following:

  ```tsx
  <EntitySwitch renderMultipleMatches="all">
    <EntitySwitch.Case if={isJenkinsAvailable}>Jenkins</EntitySwitch.Case>
    <EntitySwitch.Case if={isCodebuildAvailable}>CodeBuild</EntitySwitch.Case>
    <EntitySwitch.Case>No CI/CD</EntitySwitch.Case>
  </EntitySwitch>
  ```

  This allows the component to have multiple CI/CD systems and all of those are
  rendered on the same page.

- 3f75b7607ca: Add ability to pass icon as function to have ability to customize it by search item
- c9a9f3c834f: Add a `columns` prop to certain components that use the `EntityTable` for easier extensibility.

##### Patch Changes

- 3fa41696820: Make the "Copied!" message disappear automatically after some time
- 7e8930ae1c6: Fix icon alignment in `CatalogSearchResultListItem`
- dbbde6ed353: fix entity switch rendering when there is no default case
- cb8ec97cdeb: Change black & white colors to be theme aware
- 928a12a9b3e: Internal refactor of `/alpha` exports.

### `@backstage/plugin-catalog-backend` (1.7.2 → 1.8.0)

#### 1.8.0

##### Minor Changes

- 7f4ea3d3602: Add /entities/by-query endpoint returning paginated entities.

  The endpoint supports cursor base pagination and server side sorting of the entities

##### Patch Changes

- e675f902980: Add deprecations for symbols that were moved to `@backstage/plugin-catalog-node` a long time ago:

  - `CatalogProcessor`
  - `CatalogProcessorCache`
  - `CatalogProcessorEmit`
  - `CatalogProcessorEntityResult`
  - `CatalogProcessorErrorResult`
  - `CatalogProcessorLocationResult`
  - `CatalogProcessorParser`
  - `CatalogProcessorRefreshKeysResult`
  - `CatalogProcessorRelationResult`
  - `CatalogProcessorResult`
  - `DeferredEntity`
  - `EntityProvider`
  - `EntityProviderConnection`
  - `EntityProviderMutation`
  - `EntityRelationSpec`
  - `processingResult`

  Also moved over and deprecated the following symbols:

  - `locationSpecToLocationEntity`
  - `locationSpecToMetadataName`

- ac8929f2f31: Fix export of `defaultCatalogCollatorEntityTransformer`.
- 928a12a9b3e: Internal refactor of `/alpha` exports.
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- f093ce83d58: Fix a bug where the batch fetch by ref endpoint did not work in conjunction with filtering (e.g. if authorization was enabled).

### `@backstage/plugin-catalog-react` (1.3.0 → 1.4.0)

#### 1.4.0

##### Minor Changes

- 0a5b73b2926: Add possibility to re-use EntityPicker for filters with multiple select.

##### Patch Changes

- 65454876fb2: Minor API report tweaks
- 928a12a9b3e: Internal refactor of `/alpha` exports.
- 24916d23494: Do not close `Autocomplete` powered multiple-selection filters when checking boxes

### `@backstage/plugin-scaffolder` (1.11.0 → 1.12.0)

#### 1.12.0

##### Minor Changes

- 0d61fcca9c3: Update `EntityPicker` to use the fully qualified entity ref instead of the humanized version.
- 8f4d13f21cf: Move `useTaskStream`, `TaskBorder`, `TaskLogStream` and `TaskSteps` into `scaffolder-react`.

##### Patch Changes

- 65454876fb2: Minor API report tweaks
- 3c96e77b513: Make scaffolder adhere to page themes by using page `fontColor` consistently. If your theme overwrites template list or card headers, review those styles.
- be3cddaab5f: Getting credentials in the RepoUrlPicker now also works for targets without owner (e.g. Bitbucket Server).
- cb8ec97cdeb: Change black & white colors to be theme aware
- eb877bad736: Create an "Other Templates" group when groups are given to scaffolder/next.
- c10384a9235: Switch to using `LinkButton` instead of the deprecated `Button`
- 928a12a9b3e: Internal refactor of `/alpha` exports.
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- 0aae4596296: Fix the scaffolder validator for arrays when the item is a field in the object

### `@backstage/plugin-scaffolder-backend` (1.11.0 → 1.12.0)

#### 1.12.0

##### Minor Changes

- 7d724d8ef56: Added the ability to be able to define an actions `input` and `output` schema using `zod` instead of hand writing types and `jsonschema`

##### Patch Changes

- 860de10fa67: Make identity valid if subject of token is a backstage server-2-server auth token
- 65454876fb2: Minor API report tweaks
- c6c78b4acbe: throw error from catalog:fetch scaffolder action when entity is null and optional is false
- 9968f455921: catalog write action should allow any shape of object
- 928a12a9b3e: Internal refactor of `/alpha` exports.
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- 7af12854970: Extended scaffolder action `catalog:fetch` to fetch multiple catalog entities by entity references.

### `@backstage/plugin-scaffolder-react` (1.1.0 → 1.2.0)

#### 1.2.0

##### Minor Changes

- 8f4d13f21cf: Move `useTaskStream`, `TaskBorder`, `TaskLogStream` and `TaskSteps` into `scaffolder-react`.

##### Patch Changes

- 65454876fb2: Minor API report tweaks
- 3c96e77b513: Make scaffolder adhere to page themes by using page `fontColor` consistently. If your theme overwrites template list or card headers, review those styles.
- c8d78b9ae9d: fix bug with `hasErrors` returning false when dealing with empty objects
- 9b8c374ace5: Remove timer for skipped steps in Scaffolder Next's TaskSteps
- 44941fc97eb: scaffolder/next: Move the `uiSchema` to its own property in the validation `context` to align with component development and access of `ui:options`
- d9893263ba9: scaffolder/next: Fix for steps without properties
- 928a12a9b3e: Internal refactor of `/alpha` exports.
- cc418d652a7: scaffolder/next: Added the ability to get the fields definition in the schema in the validation function
- d4100d0ec42: Fix alignment bug for owners on `TemplateCard`

### `@backstage/plugin-techdocs` (1.5.0 → 1.6.0)

#### 1.6.0

##### Minor Changes

- 3f75b7607ca: Add ability to pass icon as function to have ability to customize it by search item

##### Patch Changes

- 65454876fb2: Minor API report tweaks
- 54a1e133b56: Fix bug that caused next and previous links not to work with certain versions of mkdocs-material
- f320c299c67: The HTML tag attributes in the documentation content inserted to shadow DOM is preserved to improve accessibility
- cb8ec97cdeb: Change black & white colors to be theme aware
- c10384a9235: Switch to using `LinkButton` instead of the deprecated `Button`
- 8adfda60ae1: Updated dependency `jss` to `~10.10.0`.
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- 238cf657c09: Copy to clipboard now works in a not secure context.

### `@backstage/plugin-techdocs-backend` (1.5.3 → 1.6.0)

#### 1.6.0

##### Minor Changes

- 92b495328bd: Introduced alpha export of the `techdocsPlugin` using the new backend system.

##### Patch Changes

- 40298b02778: Techdocs backend explains a bit more about what might have caused the docs not being found when building techdocs.
- 928a12a9b3e: Internal refactor of `/alpha` exports.
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-techdocs-node` (1.5.0 → 1.6.0)

#### 1.6.0

##### Minor Changes

- ea2bbef1b16: Added support for an HTTPS proxy for techdocs AWS S3 requests

##### Patch Changes

- 65454876fb2: Minor API report tweaks
- bf493710f50: Update to a newer version of `@trendyol-js/openstack-swift-sdk`
- bfe350ef4ce: Fixed bug that prevented deletion of stale files when non-empty directories where tried to be deleted as well.

### `@techdocs/cli` (1.3.2 → 1.4.0)

#### 1.4.0

##### Minor Changes

- 8e465ce52e2: Running `@techdocs/cli generate` with the `--verbose` flag will now print the mkdocs output.
- ea2bbef1b16: Added support for an HTTPS proxy for techdocs AWS S3 requests

## Other patch version bumps

### `@backstage/backend-app-api` (0.4.0 → 0.4.1)

#### 0.4.1

##### Patch Changes

- 928a12a9b3e: Internal refactor of `/alpha` exports.
- 482dae5de1c: Updated link to docs.
- 915e46622cf: Add support for `NotImplementedError`, properly returning 501 as status code.

### `@backstage/backend-common` (0.18.2 → 0.18.3)

#### 0.18.3

##### Patch Changes

- f75097868a7: Adds config option `backend.database.role` to set ownership for newly created schemas and tables in Postgres

  The example config below connects to the database as user `v-backstage-123` but sets the ownership of
  the create schemas and tables to `backstage`

  ```yaml
  backend:
    database:
      client: pg
      pluginDivisionMode: schema
      role: backstage
      connection:
        user: v-backstage-123
        ...
  ```

- 928a12a9b3e: Internal refactor of `/alpha` exports.
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- 87f0bbec175: AwsS3UrlReader upgraded to use aws-sdk v3
- c1ee073a82b: Added `lastModifiedAt` field on `UrlReaderService` responses and a `lastModifiedAfter` option to `UrlReaderService.readUrl`.
- 482dae5de1c: Updated link to docs.

### `@backstage/backend-defaults` (0.1.7 → 0.1.8)

#### 0.1.8

##### Patch Changes

- 928a12a9b3e: Internal refactor of `/alpha` exports.
- 482dae5de1c: Updated link to docs.
- 5d0693edc09: Added a workaround for the cyclic dependency bug across `@backstage/backend-common` and `@backstage/backend-app-api`.

### `@backstage/backend-dev-utils` (0.1.0 → 0.1.1)

#### 0.1.1

##### Patch Changes

- 482dae5de1c: Updated link to docs.

### `@backstage/backend-test-utils` (0.1.34 → 0.1.35)

#### 0.1.35

##### Patch Changes

- 928a12a9b3e: Internal refactor of `/alpha` exports.
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- 482dae5de1c: Updated link to docs.

### `@backstage/catalog-model` (1.2.0 → 1.2.1)

#### 1.2.1

##### Patch Changes

- 928a12a9b3e: Internal refactor of `/alpha` exports.

### `@backstage/cli` (0.22.3 → 0.22.4)

#### 0.22.4

##### Patch Changes

- 1ad8d885d30: Fixed a bug where additional backend package entry points where not properly marked as internal during local development.
- 2011b86052c: Added templates for new plugin Web and Node.js libraries.
- 867f4752ca1: Updated the ESLint plugin configuration that is enabled through `yarn start --check` to only pick up valid source files.
- b4cd145b574: Added a new `migrate package-exports` command that synchronizes package exports fields in all `package.json`s.
- 9bf50a36674: Bumped the `msw` version in templates to 1.0.0
- 8bf24946c66: Adjust express dependencies to be the same as the rest of the project
- 17271841de8: Updated frontend plugin template to use some more recent features
- 4b4998466b4: Updated dependency `del` to `^7.0.0`.
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- a11b9a23f5a: Keep custom exports entry points in package.json
- 482dae5de1c: Updated link to docs.

### `@backstage/cli-common` (0.1.11 → 0.1.12)

#### 0.1.12

##### Patch Changes

- 482dae5de1c: Updated link to docs.

### `@backstage/codemods` (0.1.43 → 0.1.44)

#### 0.1.44

##### Patch Changes

- 482dae5de1c: Updated link to docs.

### `@backstage/config` (1.0.6 → 1.0.7)

#### 1.0.7

##### Patch Changes

- 482dae5de1c: Updated link to docs.

### `@backstage/config-loader` (1.1.8 → 1.1.9)

#### 1.1.9

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- 482dae5de1c: Updated link to docs.

### `@backstage/core-components` (0.12.4 → 0.12.5)

#### 0.12.5

##### Patch Changes

- 8bbf95b5507: Button labels in the sidebar (previously displayed in uppercase) will be displayed in the case that is provided without any transformations.
  For example, a sidebar button with the label "Search" will appear as Search, "search" will appear as search, "SEARCH" will appear as SEARCH etc.
  This can potentially affect any overriding styles previously applied to change the appearance of Button labels in the Sidebar.
- cb8ec97cdeb: Change black & white colors to be theme aware
- c10384a9235: Switch to using `LinkButton` instead of the deprecated `Button`
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- e1aae2f5a0c: Updated the `aria-label` of the `HeaderTabs` component.
- 6a51a49a810: Fix bug where `<Table />` component would not take into account header styles defined in `columns[*].headerStyle`.
- fa004f66871: Use media queries to change layout instead of `isMobile` prop in `BackstagePage` component

### `@backstage/create-app` (0.4.37 → 0.4.38)

#### 0.4.38

##### Patch Changes

- b4627f23b28: Bumped create-app version.
- 0eceadb9502: Bumped create-app version.
- 482dae5de1c: Updated link to docs.
- 6ace2dd2c58: Added to the template `packages/app/.eslintignore` file to packages to ignore the contents of `packages/app/public`.

### `@backstage/dev-utils` (1.0.12 → 1.0.13)

#### 1.0.13

##### Patch Changes

- 482dae5de1c: Updated link to docs.

### `@backstage/errors` (1.1.4 → 1.1.5)

#### 1.1.5

##### Patch Changes

- 3bf83a2aabf: Added `NotImplementedError`, which can be used when the server does not recognize the request method and is incapable of supporting it for any resource.

### `@backstage/eslint-plugin` (0.1.1 → 0.1.2)

#### 0.1.2

##### Patch Changes

- a061c466d66: Fixing a bug that we should check internal dependencies too

### `@backstage/integration` (1.4.2 → 1.4.3)

#### 1.4.3

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/integration-react` (1.1.10 → 1.1.11)

#### 1.1.11

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-adr` (0.4.0 → 0.4.1)

#### 0.4.1

##### Patch Changes

- d293f4aaf83: Updated readme instructions
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-adr-backend` (0.3.0 → 0.3.1)

#### 0.3.1

##### Patch Changes

- 2a73ded3861: Support MADR v3 format
- 8bf24946c66: Adjust express dependencies to be the same as the rest of the project
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-airbrake` (0.3.15 → 0.3.16)

#### 0.3.16

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-airbrake-backend` (0.2.15 → 0.2.16)

#### 0.2.16

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-allure` (0.1.31 → 0.1.32)

#### 0.1.32

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-analytics-module-ga` (0.1.26 → 0.1.27)

#### 0.1.27

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-apache-airflow` (0.2.8 → 0.2.9)

#### 0.2.9

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-api-docs` (0.9.0 → 0.9.1)

#### 0.9.1

##### Patch Changes

- 095e755d9b5: Add ApiDefinitionDialog component for fast access to the API definition in ProvidedApiCards and ConsumedApiCards.
- 8bc7dcec820: Fix dark theme Swagger's clear button font color.
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- 9820eb5d24f: Add a `columns` prop to certain components that use the `EntityTable` for easier extensibility.

### `@backstage/plugin-apollo-explorer` (0.1.8 → 0.1.9)

#### 0.1.9

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-app-backend` (0.3.42 → 0.3.43)

#### 0.3.43

##### Patch Changes

- 928a12a9b3e: Internal refactor of `/alpha` exports.
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-auth-backend` (0.18.0 → 0.18.1)

#### 0.18.1

##### Patch Changes

- e262738b8a0: Handle difference in expiration time between Microsoft session and Backstage session which caused the Backstage token to be invalid during a time frame.
- 86cece2c1fb: Updated dependency `@types/passport-microsoft` to `^1.0.0`.
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- 529de8c4211: Added authentication provider for Azure Easy Authentication.

### `@backstage/plugin-auth-node` (0.2.11 → 0.2.12)

#### 0.2.12

##### Patch Changes

- 65454876fb2: Minor API report tweaks
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-azure-devops` (0.2.6 → 0.2.7)

#### 0.2.7

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-azure-devops-backend` (0.3.21 → 0.3.22)

#### 0.3.22

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-azure-sites` (0.1.4 → 0.1.5)

#### 0.1.5

##### Patch Changes

- cb8ec97cdeb: Change black & white colors to be theme aware
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-azure-sites-backend` (0.1.4 → 0.1.5)

#### 0.1.5

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-badges` (0.2.39 → 0.2.40)

#### 0.2.40

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-bitbucket-cloud-common` (0.2.3 → 0.2.4)

#### 0.2.4

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-bitrise` (0.1.42 → 0.1.43)

#### 0.1.43

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-catalog-backend-module-aws` (0.1.16 → 0.1.17)

#### 0.1.17

##### Patch Changes

- 90469c02c8c: Renamed `awsS3EntityProviderCatalogModule` to `catalogModuleAwsS3EntityProviders` to match the [recommended naming patterns](https://backstage.io/docs/backend-system/architecture/naming-patterns).
- e675f902980: Make sure to not use deprecated exports from `@backstage/plugin-catalog-backend`
- 928a12a9b3e: Internal refactor of `/alpha` exports.
- 87f0bbec175: AwsS3UrlReader upgraded to use aws-sdk v3
- bf611cf019a: Fix missing `dependencies` in `package.json`

### `@backstage/plugin-catalog-backend-module-azure` (0.1.13 → 0.1.14)

#### 0.1.14

##### Patch Changes

- 90469c02c8c: Renamed `azureDevOpsEntityProviderCatalogModule` to `catalogModuleAzureDevOpsEntityProvider` to match the [recommended naming patterns](https://backstage.io/docs/backend-system/architecture/naming-patterns).
- c17fa101825: Add branch filter support
  https://backstage.io/docs/integrations/azure/discovery
- e675f902980: Make sure to not use deprecated exports from `@backstage/plugin-catalog-backend`
- 928a12a9b3e: Internal refactor of `/alpha` exports.
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-catalog-backend-module-bitbucket` (0.2.9 → 0.2.10)

#### 0.2.10

##### Patch Changes

- e675f902980: Make sure to not use deprecated exports from `@backstage/plugin-catalog-backend`
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.9 → 0.1.10)

#### 0.1.10

##### Patch Changes

- 90469c02c8c: Renamed `bitbucketCloudEntityProviderCatalogModule` to `catalogModuleBitbucketCloudEntityProvider` to match the [recommended naming patterns](https://backstage.io/docs/backend-system/architecture/naming-patterns).
- e675f902980: Make sure to not use deprecated exports from `@backstage/plugin-catalog-backend`
- 928a12a9b3e: Internal refactor of `/alpha` exports.
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.7 → 0.1.8)

#### 0.1.8

##### Patch Changes

- 90469c02c8c: Renamed `bitbucketServerEntityProviderCatalogModule` to `catalogModuleBitbucketServerEntityProvider` to match the [recommended naming patterns](https://backstage.io/docs/backend-system/architecture/naming-patterns).
- e675f902980: Make sure to not use deprecated exports from `@backstage/plugin-catalog-backend`
- 928a12a9b3e: Internal refactor of `/alpha` exports.
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-catalog-backend-module-gerrit` (0.1.10 → 0.1.11)

#### 0.1.11

##### Patch Changes

- 90469c02c8c: Renamed `gerritEntityProviderCatalogModule` to `catalogModuleGerritEntityProvider` to match the [recommended naming patterns](https://backstage.io/docs/backend-system/architecture/naming-patterns).
- e675f902980: Make sure to not use deprecated exports from `@backstage/plugin-catalog-backend`
- 928a12a9b3e: Internal refactor of `/alpha` exports.
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-catalog-backend-module-github` (0.2.5 → 0.2.6)

#### 0.2.6

##### Patch Changes

- 65454876fb2: Minor API report tweaks
- 90469c02c8c: Renamed `githubEntityProviderCatalogModule` to `catalogModuleGithubEntityProvider` to match the [recommended naming patterns](https://backstage.io/docs/backend-system/architecture/naming-patterns).
- e675f902980: Make sure to not use deprecated exports from `@backstage/plugin-catalog-backend`
- 928a12a9b3e: Internal refactor of `/alpha` exports.
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-catalog-backend-module-gitlab` (0.1.13 → 0.1.14)

#### 0.1.14

##### Patch Changes

- 90469c02c8c: Renamed `gitlabDiscoveryEntityProviderCatalogModule` to `catalogModuleGitlabDiscoveryEntityProvider` to match the [recommended naming patterns](https://backstage.io/docs/backend-system/architecture/naming-patterns).
- e675f902980: Make sure to not use deprecated exports from `@backstage/plugin-catalog-backend`
- 928a12a9b3e: Internal refactor of `/alpha` exports.
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- af1095f1e11: The configuration key `branch` of the `GitlabDiscoveryEntityProvider` has been deprecated in favor of the configuration key `fallbackBranch`.
  It will be reused in future release to enforce a concrete branch to be used in catalog file discovery.
  To migrate to the new configuration value, rename `branch` to `fallbackBranch`.
- be129f8f3cd: filter gitlab groups by prefix

### `@backstage/plugin-catalog-backend-module-ldap` (0.5.9 → 0.5.10)

#### 0.5.10

##### Patch Changes

- e675f902980: Make sure to not use deprecated exports from `@backstage/plugin-catalog-backend`

### `@backstage/plugin-catalog-backend-module-msgraph` (0.5.1 → 0.5.2)

#### 0.5.2

##### Patch Changes

- a4ebd513527: Revert using `baseUrl` for MS Graph provider as it breaks token retrieval
- 26eef93c547: Fixed msgraph catalog backend to use user.select option when fetching user from AzureAD
- 90469c02c8c: Renamed `microsoftGraphOrgEntityProviderCatalogModule` to `catalogModuleMicrosoftGraphOrgEntityProvider` to match the [recommended naming patterns](https://backstage.io/docs/backend-system/architecture/naming-patterns).
- e675f902980: Make sure to not use deprecated exports from `@backstage/plugin-catalog-backend`
- 928a12a9b3e: Internal refactor of `/alpha` exports.
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- 2c234a89325: properly support custom graph api URL

### `@backstage/plugin-catalog-common` (1.0.11 → 1.0.12)

#### 1.0.12

##### Patch Changes

- 928a12a9b3e: Internal refactor of `/alpha` exports.

### `@backstage/plugin-catalog-graphql` (0.3.18 → 0.3.19)

#### 0.3.19

##### Patch Changes

- b990021ddeb: Updated dependency `@graphql-codegen/cli` to `^3.0.0`.
  Updated dependency `@graphql-codegen/graphql-modules-preset` to `^3.0.0`.
  Updated dependency `@graphql-codegen/typescript` to `^3.0.0`.
  Updated dependency `@graphql-codegen/typescript-resolvers` to `^3.0.0`.
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-catalog-import` (0.9.5 → 0.9.6)

#### 0.9.6

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-catalog-node` (1.3.3 → 1.3.4)

#### 1.3.4

##### Patch Changes

- e675f902980: Added `locationSpecToMetadataName` and `locationSpecToLocationEntity` as their new home, moved over from the backend package where they now are marked as deprecated.
- 928a12a9b3e: Internal refactor of `/alpha` exports.

### `@backstage/plugin-circleci` (0.3.15 → 0.3.16)

#### 0.3.16

##### Patch Changes

- c10384a9235: Switch to using `LinkButton` instead of the deprecated `Button`
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-cloudbuild` (0.3.15 → 0.3.16)

#### 0.3.16

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-code-climate` (0.1.15 → 0.1.16)

#### 0.1.16

##### Patch Changes

- cb8ec97cdeb: Change black & white colors to be theme aware
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-code-coverage` (0.2.8 → 0.2.9)

#### 0.2.9

##### Patch Changes

- cb8ec97cdeb: Change black & white colors to be theme aware
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-code-coverage-backend` (0.2.8 → 0.2.9)

#### 0.2.9

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-codescene` (0.1.10 → 0.1.11)

#### 0.1.11

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-config-schema` (0.1.38 → 0.1.39)

#### 0.1.39

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-cost-insights` (0.12.4 → 0.12.5)

#### 0.12.5

##### Patch Changes

- 928a12a9b3e: Internal refactor of `/alpha` exports.
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-entity-feedback` (0.1.0 → 0.1.1)

#### 0.1.1

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-entity-feedback-backend` (0.1.0 → 0.1.1)

#### 0.1.1

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-entity-validation` (0.1.0 → 0.1.1)

#### 0.1.1

##### Patch Changes

- 47d246691ac: Fixed bug in EntityVaidation plugin where string in text box was unable to be updated.
- c10384a9235: Switch to using `LinkButton` instead of the deprecated `Button`
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-events-backend` (0.2.3 → 0.2.4)

#### 0.2.4

##### Patch Changes

- 928a12a9b3e: Internal refactor of `/alpha` exports.
- a5de745ac17: Updated README instructions

### `@backstage/plugin-events-backend-module-aws-sqs` (0.1.4 → 0.1.5)

#### 0.1.5

##### Patch Changes

- a5de745ac17: Renamed `awsSqsConsumingEventPublisherEventsModule` to `eventsModuleAwsSqsConsumingEventPublisher` to match the [recommended naming patterns](https://backstage.io/docs/backend-system/architecture/naming-patterns).
- 928a12a9b3e: Internal refactor of `/alpha` exports.

### `@backstage/plugin-events-backend-module-azure` (0.1.4 → 0.1.5)

#### 0.1.5

##### Patch Changes

- a5de745ac17: Renamed `azureDevOpsEventRouterEventsModule` to `eventsModuleAzureDevOpsEventRouter` to match the [recommended naming patterns](https://backstage.io/docs/backend-system/architecture/naming-patterns).
- 928a12a9b3e: Internal refactor of `/alpha` exports.

### `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.4 → 0.1.5)

#### 0.1.5

##### Patch Changes

- a5de745ac17: Renamed `bitbucketCloudEventRouterEventsModule` to `eventsModuleBitbucketCloudEventRouter` to match the [recommended naming patterns](https://backstage.io/docs/backend-system/architecture/naming-patterns).
- 928a12a9b3e: Internal refactor of `/alpha` exports.

### `@backstage/plugin-events-backend-module-gerrit` (0.1.4 → 0.1.5)

#### 0.1.5

##### Patch Changes

- a5de745ac17: Renamed `gerritEventRouterEventsModule` to `eventsModuleGerritEventRouter` to match the [recommended naming patterns](https://backstage.io/docs/backend-system/architecture/naming-patterns).
- 928a12a9b3e: Internal refactor of `/alpha` exports.

### `@backstage/plugin-events-backend-module-github` (0.1.4 → 0.1.5)

#### 0.1.5

##### Patch Changes

- a5de745ac17: Renamed `githubEventRouterEventsModule` to `eventsModuleGithubEventRouter` and `githubWebhookEventsModule` to `eventsModuleGithubWebhook`, to match the [recommended naming patterns](https://backstage.io/docs/backend-system/architecture/naming-patterns).
- 928a12a9b3e: Internal refactor of `/alpha` exports.

### `@backstage/plugin-events-backend-module-gitlab` (0.1.4 → 0.1.5)

#### 0.1.5

##### Patch Changes

- a5de745ac17: Renamed `gitlabEventRouterEventsModule` to `eventsModuleGitlabEventRouter` and `gitlabWebhookEventsModule` to `eventsModuleGitlabWebhook` to match the [recommended naming patterns](https://backstage.io/docs/backend-system/architecture/naming-patterns).
- 928a12a9b3e: Internal refactor of `/alpha` exports.

### `@backstage/plugin-events-node` (0.2.3 → 0.2.4)

#### 0.2.4

##### Patch Changes

- 928a12a9b3e: Internal refactor of `/alpha` exports.

### `@backstage/plugin-explore` (0.4.0 → 0.4.1)

#### 0.4.1

##### Patch Changes

- 65454876fb2: Minor API report tweaks
- cb8ec97cdeb: Change black & white colors to be theme aware
- c10384a9235: Switch to using `LinkButton` instead of the deprecated `Button`
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- 3f75b7607ca: Add ability to pass icon as function to have ability to customize it by search item

### `@backstage/plugin-fossa` (0.2.47 → 0.2.48)

#### 0.2.48

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-gcalendar` (0.3.11 → 0.3.12)

#### 0.3.12

##### Patch Changes

- cb8ec97cdeb: Change black & white colors to be theme aware
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-gcp-projects` (0.3.34 → 0.3.35)

#### 0.3.35

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-git-release-manager` (0.3.28 → 0.3.29)

#### 0.3.29

##### Patch Changes

- cb8ec97cdeb: Change black & white colors to be theme aware
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-github-actions` (0.5.15 → 0.5.16)

#### 0.5.16

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-github-deployments` (0.1.46 → 0.1.47)

#### 0.1.47

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-github-issues` (0.2.4 → 0.2.5)

#### 0.2.5

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-github-pull-requests-board` (0.1.9 → 0.1.10)

#### 0.1.10

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-gitops-profiles` (0.3.33 → 0.3.34)

#### 0.3.34

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-gocd` (0.1.21 → 0.1.22)

#### 0.1.22

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-graphiql` (0.2.47 → 0.2.48)

#### 0.2.48

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-graphql-backend` (0.1.32 → 0.1.33)

#### 0.1.33

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-graphql-voyager` (0.1.0 → 0.1.1)

#### 0.1.1

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-home` (0.4.31 → 0.4.32)

#### 0.4.32

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-ilert` (0.2.4 → 0.2.5)

#### 0.2.5

##### Patch Changes

- cb8ec97cdeb: Change black & white colors to be theme aware
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-jenkins` (0.7.14 → 0.7.15)

#### 0.7.15

##### Patch Changes

- 928a12a9b3e: Internal refactor of `/alpha` exports.
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-jenkins-backend` (0.1.32 → 0.1.33)

#### 0.1.33

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-jenkins-common` (0.1.13 → 0.1.14)

#### 0.1.14

##### Patch Changes

- 928a12a9b3e: Internal refactor of `/alpha` exports.

### `@backstage/plugin-kafka` (0.3.15 → 0.3.16)

#### 0.3.16

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-kubernetes` (0.7.8 → 0.7.9)

#### 0.7.9

##### Patch Changes

- 8adeb19b37d: GitLab can now be used as an `oidcTokenProvider` for Kubernetes clusters
- c10384a9235: Switch to using `LinkButton` instead of the deprecated `Button`
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-kubernetes-backend` (0.9.3 → 0.9.4)

#### 0.9.4

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-lighthouse` (0.4.0 → 0.4.1)

#### 0.4.1

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-lighthouse-backend` (0.1.0 → 0.1.1)

#### 0.1.1

##### Patch Changes

- 46829bc2f0e: Update README.md; typo with plugin name & removed unneeded "import { Router } from 'express';"

### `@backstage/plugin-linguist` (0.1.0 → 0.1.1)

#### 0.1.1

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- ab997ce243f: Updated `README.md` to removed images with refresh button as this feature was not implemented in the current version

### `@backstage/plugin-microsoft-calendar` (0.1.0 → 0.1.1)

#### 0.1.1

##### Patch Changes

- cb8ec97cdeb: Change black & white colors to be theme aware
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-newrelic` (0.3.33 → 0.3.34)

#### 0.3.34

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- 66fdf05a1ef: Updated installation instructions

### `@backstage/plugin-newrelic-dashboard` (0.2.8 → 0.2.9)

#### 0.2.9

##### Patch Changes

- cb8ec97cdeb: Change black & white colors to be theme aware

### `@backstage/plugin-org` (0.6.5 → 0.6.6)

#### 0.6.6

##### Patch Changes

- cb8ec97cdeb: Change black & white colors to be theme aware
- 36bccb5252f: Fix small UI-glitch in MemberListCard
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- a06fcac4040: Add styling to the `MembersListCard` and `ComponentsGrid` to handle overflow text.

### `@backstage/plugin-org-react` (0.1.4 → 0.1.5)

#### 0.1.5

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-pagerduty` (0.5.8 → 0.5.9)

#### 0.5.9

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- 9c08ecbaa4b: Update readme link for discord channel

### `@backstage/plugin-periskop` (0.1.13 → 0.1.14)

#### 0.1.14

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-periskop-backend` (0.1.13 → 0.1.14)

#### 0.1.14

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-permission-backend` (0.5.17 → 0.5.18)

#### 0.5.18

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-permission-common` (0.7.3 → 0.7.4)

#### 0.7.4

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-permission-node` (0.7.5 → 0.7.6)

#### 0.7.6

##### Patch Changes

- 27a103ca07b: Changed the `createPermissionIntegrationRouter` API to allow `getResources`, `resourceType` and `rules` to be optional
- 37e9215c793: Update the service-to-service auth docs URL in error message.
  ``
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-playlist` (0.1.6 → 0.1.7)

#### 0.1.7

##### Patch Changes

- c10384a9235: Switch to using `LinkButton` instead of the deprecated `Button`
- 122a37a880e: Internal update to work with newer versions of react-router
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-playlist-backend` (0.2.5 → 0.2.6)

#### 0.2.6

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-proxy-backend` (0.2.36 → 0.2.37)

#### 0.2.37

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- 3e3eea4bc7e: The proxy-backend plugin now supports reviving request bodies that have previously been consumed by an express middleware (e.g. `express.json()`). This is done by setting `reviveConsumedRequestBodies: true` on the proxy `RouterOptions`. In order to preserve the current behavior, the proxy will **not** revive request bodies by default.

  The following is an example of a proxy `createRouter` invocation that revives request bodies:

  ```diff
  const router = await createRouter({
    config,
    logger,
    discovery,
  + reviveConsumedRequestBodies: true,
  });
  ```

- 4acd93dae1d: Ensure that `@backstage/plugin-proxy-backend` logs the requests that it proxies when log level is set to `debug`.

### `@backstage/plugin-rollbar` (0.4.15 → 0.4.16)

#### 0.4.16

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-rollbar-backend` (0.1.39 → 0.1.40)

#### 0.1.40

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.17 → 0.2.18)

#### 0.2.18

##### Patch Changes

- 62414770ead: allow container runner to be undefined in cookiecutter plugin
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-search` (1.1.0 → 1.1.1)

#### 1.1.1

##### Patch Changes

- 65454876fb2: Minor API report tweaks
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-search-backend-module-elasticsearch` (1.1.3 → 1.1.4)

#### 1.1.4

##### Patch Changes

- 65454876fb2: Minor API report tweaks

### `@backstage/plugin-search-react` (1.5.0 → 1.5.1)

#### 1.5.1

##### Patch Changes

- 65454876fb2: Minor API report tweaks
- 553f3c95011: Correctly disable next button in `SearchPagination` on last page

### `@backstage/plugin-sentry` (0.5.0 → 0.5.1)

#### 0.5.1

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-shortcuts` (0.3.7 → 0.3.8)

#### 0.3.8

##### Patch Changes

- cb8ec97cdeb: Change black & white colors to be theme aware
- 7c38e565d1f: Fixed bug in LocalStoredShortcuts client where adding new Shortcut results in replacing entire shortcut list.

  Refactored LocalStoredShortcuts client to listen to `storageApi` updates to ensure that local state is always up to date.

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-sonarqube` (0.6.4 → 0.6.5)

#### 0.6.5

##### Patch Changes

- 65454876fb2: Minor API report tweaks
- 928a12a9b3e: Internal refactor of `/alpha` exports.
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- 8ae65a0bc1d: Moved imports from `/alpha` to main public exports.
- d3d624e8e8d: Show a more appropriate icon if there are no code smells and/or vulnerabilities.

### `@backstage/plugin-sonarqube-backend` (0.1.7 → 0.1.8)

#### 0.1.8

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-sonarqube-react` (0.1.3 → 0.1.4)

#### 0.1.4

##### Patch Changes

- 928a12a9b3e: Internal refactor of `/alpha` exports.
- 8ae65a0bc1d: Moved imports from `/alpha` to main public exports.

### `@backstage/plugin-splunk-on-call` (0.4.4 → 0.4.5)

#### 0.4.5

##### Patch Changes

- 65454876fb2: Minor API report tweaks
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-stack-overflow` (0.1.11 → 0.1.12)

#### 0.1.12

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- 3ef5fb09ca5: Export api ref and StackOverflowApi type

### `@backstage/plugin-stack-overflow-backend` (0.1.11 → 0.1.12)

#### 0.1.12

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-tech-insights` (0.3.7 → 0.3.8)

#### 0.3.8

##### Patch Changes

- 65454876fb2: Minor API report tweaks
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-tech-insights-backend` (0.5.8 → 0.5.9)

#### 0.5.9

##### Patch Changes

- f244b589163: Add DB index to improve latency of latest fact query

### `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.26 → 0.1.27)

#### 0.1.27

##### Patch Changes

- 65454876fb2: Minor API report tweaks

### `@backstage/plugin-tech-radar` (0.6.1 → 0.6.2)

#### 0.6.2

##### Patch Changes

- e14dcfa4994: Update colors to match Zalando's tech radar, also add coloring on title and legend to match ring color.
- cb8ec97cdeb: Change black & white colors to be theme aware
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-techdocs-addons-test-utils` (1.0.10 → 1.0.11)

#### 1.0.11

##### Patch Changes

- 2b00d8a225c: Fix bug/problem with test helper
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-techdocs-module-addons-contrib` (1.0.10 → 1.0.11)

#### 1.0.11

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- 37cf85fb85c: Fixed bug in IssueLink component where the URL was not generated properly when the repository was located inside a Gitlab subgroup

### `@backstage/plugin-techdocs-react` (1.1.3 → 1.1.4)

#### 1.1.4

##### Patch Changes

- 65454876fb2: Minor API report tweaks
- 928a12a9b3e: Internal refactor of `/alpha` exports.
- 8adfda60ae1: Updated dependency `jss` to `~10.10.0`.

### `@backstage/plugin-todo` (0.2.17 → 0.2.18)

#### 0.2.18

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-todo-backend` (0.1.39 → 0.1.40)

#### 0.1.40

##### Patch Changes

- 4120513412a: todo-backend is now exposed as a plugin which uses the new plugin system
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-user-settings` (0.7.0 → 0.7.1)

#### 0.7.1

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-vault` (0.1.9 → 0.1.10)

#### 0.1.10

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-vault-backend` (0.2.9 → 0.2.10)

#### 0.2.10

##### Patch Changes

- 66b3a3956b8: Ignore the `eslint` error
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/plugin-xcmetrics` (0.2.35 → 0.2.36)

#### 0.2.36

##### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.

### `@backstage/repo-tools` (0.1.2 → 0.1.3)

#### 0.1.3

##### Patch Changes

- 32a4a05838c: Tweaked type dependency check to trim wildcard type imports.
- 6ba8faf22ac: The API report generation process is now able to detect and generate reports for additional entry points declared in the package `"exports"` field.

### `@backstage/test-utils` (1.2.5 → 1.2.6)

#### 1.2.6

##### Patch Changes

- 928a12a9b3e: Internal refactor of `/alpha` exports.
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- 482dae5de1c: Updated link to docs.

### `@backstage/theme` (0.2.17 → 0.2.18)

#### 0.2.18

##### Patch Changes

- 482dae5de1c: Updated link to docs.

_Excluded dependency updates for packages: `@backstage/app-defaults`, `@backstage/integration-aws-node`, `@backstage/plugin-adr-common`, `@backstage/plugin-badges-backend`, `@backstage/plugin-bazaar`, `@backstage/plugin-bazaar-backend`, `@backstage/plugin-catalog-backend-module-openapi`, `@backstage/plugin-catalog-graph`, `@backstage/plugin-cicd-statistics`, `@backstage/plugin-cicd-statistics-module-gitlab`, `@backstage/plugin-events-backend-test-utils`, `@backstage/plugin-kafka-backend`, `@backstage/plugin-kubernetes-common`, `@backstage/plugin-lighthouse-common`, `@backstage/plugin-permission-react`, `@backstage/plugin-playlist-common`, `@backstage/plugin-scaffolder-backend-module-rails`, `@backstage/plugin-scaffolder-backend-module-sentry`, `@backstage/plugin-scaffolder-backend-module-yeoman`, `@backstage/plugin-scaffolder-common`, `@backstage/plugin-scaffolder-node`, `@backstage/plugin-search-backend`, `@backstage/plugin-search-backend-module-pg`, `@backstage/plugin-search-backend-node`, `@backstage/plugin-search-common`, `@backstage/plugin-tech-insights-node`, `@backstage/plugin-user-settings-backend`._
