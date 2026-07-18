# Backstage Release 1.17.2 changelog

Changes between 1.17.1 and 1.17.2 — 153 changed and 0 added packages.

## Summary

- [0.0.x patch version bumps](#00x-patch-version-bumps): 1 package
- [Other patch version bumps](#other-patch-version-bumps): 152 packages

## Table of contents

- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-explore-backend` (0.0.10 → 0.0.11)](#backstageplugin-explore-backend-0010--0011)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-app-api` (0.5.0 → 0.5.1)](#backstagebackend-app-api-050--051)
  - [`@backstage/backend-common` (0.19.2 → 0.19.3)](#backstagebackend-common-0192--0193)
  - [`@backstage/backend-defaults` (0.2.0 → 0.2.1)](#backstagebackend-defaults-020--021)
  - [`@backstage/backend-plugin-api` (0.6.0 → 0.6.1)](#backstagebackend-plugin-api-060--061)
  - [`@backstage/backend-tasks` (0.5.5 → 0.5.6)](#backstagebackend-tasks-055--056)
  - [`@backstage/backend-test-utils` (0.2.0 → 0.2.1)](#backstagebackend-test-utils-020--021)
  - [`@backstage/cli` (0.22.10 → 0.22.11)](#backstagecli-02210--02211)
  - [`@backstage/dev-utils` (1.0.18 → 1.0.19)](#backstagedev-utils-1018--1019)
  - [`@backstage/integration` (1.6.0 → 1.6.1)](#backstageintegration-160--161)
  - [`@backstage/integration-react` (1.1.16 → 1.1.17)](#backstageintegration-react-1116--1117)
  - [`@backstage/plugin-adr` (0.6.4 → 0.6.5)](#backstageplugin-adr-064--065)
  - [`@backstage/plugin-adr-backend` (0.3.6 → 0.3.7)](#backstageplugin-adr-backend-036--037)
  - [`@backstage/plugin-adr-common` (0.2.12 → 0.2.13)](#backstageplugin-adr-common-0212--0213)
  - [`@backstage/plugin-airbrake` (0.3.21 → 0.3.22)](#backstageplugin-airbrake-0321--0322)
  - [`@backstage/plugin-airbrake-backend` (0.2.21 → 0.2.22)](#backstageplugin-airbrake-backend-0221--0222)
  - [`@backstage/plugin-allure` (0.1.37 → 0.1.38)](#backstageplugin-allure-0137--0138)
  - [`@backstage/plugin-api-docs` (0.9.8 → 0.9.9)](#backstageplugin-api-docs-098--099)
  - [`@backstage/plugin-app-backend` (0.3.48 → 0.3.49)](#backstageplugin-app-backend-0348--0349)
  - [`@backstage/plugin-app-node` (0.1.0 → 0.1.1)](#backstageplugin-app-node-010--011)
  - [`@backstage/plugin-auth-backend` (0.18.6 → 0.18.7)](#backstageplugin-auth-backend-0186--0187)
  - [`@backstage/plugin-auth-node` (0.2.17 → 0.2.18)](#backstageplugin-auth-node-0217--0218)
  - [`@backstage/plugin-azure-devops` (0.3.3 → 0.3.4)](#backstageplugin-azure-devops-033--034)
  - [`@backstage/plugin-azure-devops-backend` (0.3.27 → 0.3.28)](#backstageplugin-azure-devops-backend-0327--0328)
  - [`@backstage/plugin-azure-sites` (0.1.10 → 0.1.11)](#backstageplugin-azure-sites-0110--0111)
  - [`@backstage/plugin-azure-sites-backend` (0.1.10 → 0.1.11)](#backstageplugin-azure-sites-backend-0110--0111)
  - [`@backstage/plugin-badges` (0.2.45 → 0.2.46)](#backstageplugin-badges-0245--0246)
  - [`@backstage/plugin-badges-backend` (0.2.3 → 0.2.4)](#backstageplugin-badges-backend-023--024)
  - [`@backstage/plugin-bazaar` (0.2.13 → 0.2.14)](#backstageplugin-bazaar-0213--0214)
  - [`@backstage/plugin-bazaar-backend` (0.2.11 → 0.2.12)](#backstageplugin-bazaar-backend-0211--0212)
  - [`@backstage/plugin-bitbucket-cloud-common` (0.2.9 → 0.2.10)](#backstageplugin-bitbucket-cloud-common-029--0210)
  - [`@backstage/plugin-bitrise` (0.1.48 → 0.1.49)](#backstageplugin-bitrise-0148--0149)
  - [`@backstage/plugin-catalog` (1.12.2 → 1.12.3)](#backstageplugin-catalog-1122--1123)
  - [`@backstage/plugin-catalog-backend` (1.12.0 → 1.12.1)](#backstageplugin-catalog-backend-1120--1121)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.2.3 → 0.2.4)](#backstageplugin-catalog-backend-module-aws-023--024)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.1.19 → 0.1.20)](#backstageplugin-catalog-backend-module-azure-0119--0120)
  - [`@backstage/plugin-catalog-backend-module-bitbucket` (0.2.15 → 0.2.16)](#backstageplugin-catalog-backend-module-bitbucket-0215--0216)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.15 → 0.1.16)](#backstageplugin-catalog-backend-module-bitbucket-cloud-0115--0116)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.13 → 0.1.14)](#backstageplugin-catalog-backend-module-bitbucket-server-0113--0114)
  - [`@backstage/plugin-catalog-backend-module-gcp` (0.1.0 → 0.1.1)](#backstageplugin-catalog-backend-module-gcp-010--011)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (0.1.16 → 0.1.17)](#backstageplugin-catalog-backend-module-gerrit-0116--0117)
  - [`@backstage/plugin-catalog-backend-module-github` (0.3.3 → 0.3.4)](#backstageplugin-catalog-backend-module-github-033--034)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.2.4 → 0.2.5)](#backstageplugin-catalog-backend-module-gitlab-024--025)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.1 → 0.4.2)](#backstageplugin-catalog-backend-module-incremental-ingestion-041--042)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.5.15 → 0.5.16)](#backstageplugin-catalog-backend-module-ldap-0515--0516)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.5.7 → 0.5.8)](#backstageplugin-catalog-backend-module-msgraph-057--058)
  - [`@backstage/plugin-catalog-backend-module-openapi` (0.1.14 → 0.1.15)](#backstageplugin-catalog-backend-module-openapi-0114--0115)
  - [`@backstage/plugin-catalog-backend-module-puppetdb` (0.1.5 → 0.1.6)](#backstageplugin-catalog-backend-module-puppetdb-015--016)
  - [`@backstage/plugin-catalog-backend-module-unprocessed` (0.2.0 → 0.2.1)](#backstageplugin-catalog-backend-module-unprocessed-020--021)
  - [`@backstage/plugin-catalog-graph` (0.2.33 → 0.2.34)](#backstageplugin-catalog-graph-0233--0234)
  - [`@backstage/plugin-catalog-import` (0.9.11 → 0.9.12)](#backstageplugin-catalog-import-0911--0912)
  - [`@backstage/plugin-catalog-node` (1.4.1 → 1.4.2)](#backstageplugin-catalog-node-141--142)
  - [`@backstage/plugin-catalog-react` (1.8.1 → 1.8.2)](#backstageplugin-catalog-react-181--182)
  - [`@backstage/plugin-cicd-statistics` (0.1.23 → 0.1.24)](#backstageplugin-cicd-statistics-0123--0124)
  - [`@backstage/plugin-cicd-statistics-module-gitlab` (0.1.17 → 0.1.18)](#backstageplugin-cicd-statistics-module-gitlab-0117--0118)
  - [`@backstage/plugin-circleci` (0.3.21 → 0.3.22)](#backstageplugin-circleci-0321--0322)
  - [`@backstage/plugin-cloudbuild` (0.3.21 → 0.3.22)](#backstageplugin-cloudbuild-0321--0322)
  - [`@backstage/plugin-code-climate` (0.1.21 → 0.1.22)](#backstageplugin-code-climate-0121--0122)
  - [`@backstage/plugin-code-coverage` (0.2.14 → 0.2.15)](#backstageplugin-code-coverage-0214--0215)
  - [`@backstage/plugin-code-coverage-backend` (0.2.14 → 0.2.15)](#backstageplugin-code-coverage-backend-0214--0215)
  - [`@backstage/plugin-cost-insights` (0.12.10 → 0.12.11)](#backstageplugin-cost-insights-01210--01211)
  - [`@backstage/plugin-devtools-backend` (0.1.3 → 0.1.4)](#backstageplugin-devtools-backend-013--014)
  - [`@backstage/plugin-dynatrace` (7.0.1 → 7.0.2)](#backstageplugin-dynatrace-701--702)
  - [`@backstage/plugin-entity-feedback` (0.2.4 → 0.2.5)](#backstageplugin-entity-feedback-024--025)
  - [`@backstage/plugin-entity-feedback-backend` (0.1.6 → 0.1.7)](#backstageplugin-entity-feedback-backend-016--017)
  - [`@backstage/plugin-entity-validation` (0.1.6 → 0.1.7)](#backstageplugin-entity-validation-016--017)
  - [`@backstage/plugin-events-backend` (0.2.9 → 0.2.10)](#backstageplugin-events-backend-029--0210)
  - [`@backstage/plugin-events-backend-module-aws-sqs` (0.2.3 → 0.2.4)](#backstageplugin-events-backend-module-aws-sqs-023--024)
  - [`@backstage/plugin-events-backend-module-azure` (0.1.10 → 0.1.11)](#backstageplugin-events-backend-module-azure-0110--0111)
  - [`@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.10 → 0.1.11)](#backstageplugin-events-backend-module-bitbucket-cloud-0110--0111)
  - [`@backstage/plugin-events-backend-module-gerrit` (0.1.10 → 0.1.11)](#backstageplugin-events-backend-module-gerrit-0110--0111)
  - [`@backstage/plugin-events-backend-module-github` (0.1.10 → 0.1.11)](#backstageplugin-events-backend-module-github-0110--0111)
  - [`@backstage/plugin-events-backend-module-gitlab` (0.1.10 → 0.1.11)](#backstageplugin-events-backend-module-gitlab-0110--0111)
  - [`@backstage/plugin-events-backend-test-utils` (0.1.10 → 0.1.11)](#backstageplugin-events-backend-test-utils-0110--0111)
  - [`@backstage/plugin-events-node` (0.2.9 → 0.2.10)](#backstageplugin-events-node-029--0210)
  - [`@backstage/plugin-explore` (0.4.7 → 0.4.8)](#backstageplugin-explore-047--048)
  - [`@backstage/plugin-firehydrant` (0.2.5 → 0.2.6)](#backstageplugin-firehydrant-025--026)
  - [`@backstage/plugin-fossa` (0.2.53 → 0.2.54)](#backstageplugin-fossa-0253--0254)
  - [`@backstage/plugin-git-release-manager` (0.3.34 → 0.3.35)](#backstageplugin-git-release-manager-0334--0335)
  - [`@backstage/plugin-github-actions` (0.6.2 → 0.6.3)](#backstageplugin-github-actions-062--063)
  - [`@backstage/plugin-github-deployments` (0.1.52 → 0.1.53)](#backstageplugin-github-deployments-0152--0153)
  - [`@backstage/plugin-github-issues` (0.2.10 → 0.2.11)](#backstageplugin-github-issues-0210--0211)
  - [`@backstage/plugin-github-pull-requests-board` (0.1.15 → 0.1.16)](#backstageplugin-github-pull-requests-board-0115--0116)
  - [`@backstage/plugin-gocd` (0.1.27 → 0.1.28)](#backstageplugin-gocd-0127--0128)
  - [`@backstage/plugin-graphql-backend` (0.1.38 → 0.1.39)](#backstageplugin-graphql-backend-0138--0139)
  - [`@backstage/plugin-home` (0.5.5 → 0.5.6)](#backstageplugin-home-055--056)
  - [`@backstage/plugin-ilert` (0.2.10 → 0.2.11)](#backstageplugin-ilert-0210--0211)
  - [`@backstage/plugin-jenkins` (0.8.3 → 0.8.4)](#backstageplugin-jenkins-083--084)
  - [`@backstage/plugin-jenkins-backend` (0.2.3 → 0.2.4)](#backstageplugin-jenkins-backend-023--024)
  - [`@backstage/plugin-kafka` (0.3.21 → 0.3.22)](#backstageplugin-kafka-0321--0322)
  - [`@backstage/plugin-kafka-backend` (0.2.41 → 0.2.42)](#backstageplugin-kafka-backend-0241--0242)
  - [`@backstage/plugin-kubernetes` (0.10.0 → 0.10.1)](#backstageplugin-kubernetes-0100--0101)
  - [`@backstage/plugin-kubernetes-backend` (0.11.3 → 0.11.4)](#backstageplugin-kubernetes-backend-0113--0114)
  - [`@backstage/plugin-lighthouse` (0.4.6 → 0.4.7)](#backstageplugin-lighthouse-046--047)
  - [`@backstage/plugin-lighthouse-backend` (0.2.4 → 0.2.5)](#backstageplugin-lighthouse-backend-024--025)
  - [`@backstage/plugin-linguist` (0.1.6 → 0.1.7)](#backstageplugin-linguist-016--017)
  - [`@backstage/plugin-linguist-backend` (0.4.0 → 0.4.1)](#backstageplugin-linguist-backend-040--041)
  - [`@backstage/plugin-newrelic-dashboard` (0.2.14 → 0.2.15)](#backstageplugin-newrelic-dashboard-0214--0215)
  - [`@backstage/plugin-nomad` (0.1.2 → 0.1.3)](#backstageplugin-nomad-012--013)
  - [`@backstage/plugin-nomad-backend` (0.1.2 → 0.1.3)](#backstageplugin-nomad-backend-012--013)
  - [`@backstage/plugin-octopus-deploy` (0.2.3 → 0.2.4)](#backstageplugin-octopus-deploy-023--024)
  - [`@backstage/plugin-org` (0.6.11 → 0.6.12)](#backstageplugin-org-0611--0612)
  - [`@backstage/plugin-org-react` (0.1.10 → 0.1.11)](#backstageplugin-org-react-0110--0111)
  - [`@backstage/plugin-pagerduty` (0.6.2 → 0.6.3)](#backstageplugin-pagerduty-062--063)
  - [`@backstage/plugin-periskop` (0.1.19 → 0.1.20)](#backstageplugin-periskop-0119--0120)
  - [`@backstage/plugin-periskop-backend` (0.1.19 → 0.1.20)](#backstageplugin-periskop-backend-0119--0120)
  - [`@backstage/plugin-permission-backend` (0.5.23 → 0.5.24)](#backstageplugin-permission-backend-0523--0524)
  - [`@backstage/plugin-permission-node` (0.7.11 → 0.7.12)](#backstageplugin-permission-node-0711--0712)
  - [`@backstage/plugin-playlist` (0.1.13 → 0.1.14)](#backstageplugin-playlist-0113--0114)
  - [`@backstage/plugin-playlist-backend` (0.3.4 → 0.3.5)](#backstageplugin-playlist-backend-034--035)
  - [`@backstage/plugin-proxy-backend` (0.3.0 → 0.3.1)](#backstageplugin-proxy-backend-030--031)
  - [`@backstage/plugin-puppetdb` (0.1.4 → 0.1.5)](#backstageplugin-puppetdb-014--015)
  - [`@backstage/plugin-rollbar` (0.4.21 → 0.4.22)](#backstageplugin-rollbar-0421--0422)
  - [`@backstage/plugin-rollbar-backend` (0.1.45 → 0.1.46)](#backstageplugin-rollbar-backend-0145--0146)
  - [`@backstage/plugin-scaffolder` (1.14.2 → 1.14.3)](#backstageplugin-scaffolder-1142--1143)
  - [`@backstage/plugin-scaffolder-backend` (1.16.1 → 1.16.2)](#backstageplugin-scaffolder-backend-1161--1162)
  - [`@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.1 → 0.2.2)](#backstageplugin-scaffolder-backend-module-confluence-to-markdown-021--022)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.24 → 0.2.25)](#backstageplugin-scaffolder-backend-module-cookiecutter-0224--0225)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.2.3 → 0.2.4)](#backstageplugin-scaffolder-backend-module-gitlab-023--024)
  - [`@backstage/plugin-scaffolder-backend-module-rails` (0.4.17 → 0.4.18)](#backstageplugin-scaffolder-backend-module-rails-0417--0418)
  - [`@backstage/plugin-scaffolder-backend-module-sentry` (0.1.8 → 0.1.9)](#backstageplugin-scaffolder-backend-module-sentry-018--019)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.21 → 0.2.22)](#backstageplugin-scaffolder-backend-module-yeoman-0221--0222)
  - [`@backstage/plugin-scaffolder-node` (0.2.0 → 0.2.1)](#backstageplugin-scaffolder-node-020--021)
  - [`@backstage/plugin-scaffolder-react` (1.5.2 → 1.5.3)](#backstageplugin-scaffolder-react-152--153)
  - [`@backstage/plugin-search` (1.3.4 → 1.3.5)](#backstageplugin-search-134--135)
  - [`@backstage/plugin-search-backend` (1.4.0 → 1.4.1)](#backstageplugin-search-backend-140--141)
  - [`@backstage/plugin-search-backend-module-catalog` (0.1.4 → 0.1.5)](#backstageplugin-search-backend-module-catalog-014--015)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.3.3 → 1.3.4)](#backstageplugin-search-backend-module-elasticsearch-133--134)
  - [`@backstage/plugin-search-backend-module-explore` (0.1.4 → 0.1.5)](#backstageplugin-search-backend-module-explore-014--015)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.9 → 0.5.10)](#backstageplugin-search-backend-module-pg-059--0510)
  - [`@backstage/plugin-search-backend-module-techdocs` (0.1.4 → 0.1.5)](#backstageplugin-search-backend-module-techdocs-014--015)
  - [`@backstage/plugin-search-backend-node` (1.2.4 → 1.2.5)](#backstageplugin-search-backend-node-124--125)
  - [`@backstage/plugin-sentry` (0.5.6 → 0.5.7)](#backstageplugin-sentry-056--057)
  - [`@backstage/plugin-sonarqube` (0.7.2 → 0.7.3)](#backstageplugin-sonarqube-072--073)
  - [`@backstage/plugin-sonarqube-backend` (0.2.2 → 0.2.3)](#backstageplugin-sonarqube-backend-022--023)
  - [`@backstage/plugin-splunk-on-call` (0.4.10 → 0.4.11)](#backstageplugin-splunk-on-call-0410--0411)
  - [`@backstage/plugin-stack-overflow-backend` (0.2.4 → 0.2.5)](#backstageplugin-stack-overflow-backend-024--025)
  - [`@backstage/plugin-tech-insights` (0.3.13 → 0.3.14)](#backstageplugin-tech-insights-0313--0314)
  - [`@backstage/plugin-tech-insights-backend` (0.5.14 → 0.5.15)](#backstageplugin-tech-insights-backend-0514--0515)
  - [`@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.32 → 0.1.33)](#backstageplugin-tech-insights-backend-module-jsonfc-0132--0133)
  - [`@backstage/plugin-tech-insights-node` (0.4.6 → 0.4.7)](#backstageplugin-tech-insights-node-046--047)
  - [`@backstage/plugin-techdocs` (1.6.6 → 1.6.7)](#backstageplugin-techdocs-166--167)
  - [`@backstage/plugin-techdocs-addons-test-utils` (1.0.18 → 1.0.19)](#backstageplugin-techdocs-addons-test-utils-1018--1019)
  - [`@backstage/plugin-techdocs-backend` (1.6.5 → 1.6.6)](#backstageplugin-techdocs-backend-165--166)
  - [`@backstage/plugin-techdocs-module-addons-contrib` (1.0.16 → 1.0.17)](#backstageplugin-techdocs-module-addons-contrib-1016--1017)
  - [`@backstage/plugin-techdocs-node` (1.7.4 → 1.7.5)](#backstageplugin-techdocs-node-174--175)
  - [`@backstage/plugin-todo` (0.2.23 → 0.2.24)](#backstageplugin-todo-0223--0224)
  - [`@backstage/plugin-todo-backend` (0.2.0 → 0.2.1)](#backstageplugin-todo-backend-020--021)
  - [`@backstage/plugin-user-settings` (0.7.6 → 0.7.7)](#backstageplugin-user-settings-076--077)
  - [`@backstage/plugin-user-settings-backend` (0.1.12 → 0.1.13)](#backstageplugin-user-settings-backend-0112--0113)
  - [`@backstage/plugin-vault` (0.1.15 → 0.1.16)](#backstageplugin-vault-0115--0116)
  - [`@backstage/plugin-vault-backend` (0.3.4 → 0.3.5)](#backstageplugin-vault-backend-034--035)
  - [`@techdocs/cli` (1.4.5 → 1.4.6)](#techdocscli-145--146)

## 0.0.x patch version bumps

### `@backstage/plugin-explore-backend` (0.0.10 → [0.0.11](../../changelogs/@backstage/plugin-explore-backend.md#0011))

_No changelog entries found._

## Other patch version bumps

### `@backstage/backend-app-api` (0.5.0 → [0.5.1](../../changelogs/@backstage/backend-app-api.md#051))

_No changelog entries found._

### `@backstage/backend-common` (0.19.2 → [0.19.3](../../changelogs/@backstage/backend-common.md#0193))

_No changelog entries found._

### `@backstage/backend-defaults` (0.2.0 → [0.2.1](../../changelogs/@backstage/backend-defaults.md#021))

_No changelog entries found._

### `@backstage/backend-plugin-api` (0.6.0 → [0.6.1](../../changelogs/@backstage/backend-plugin-api.md#061))

_No changelog entries found._

### `@backstage/backend-tasks` (0.5.5 → [0.5.6](../../changelogs/@backstage/backend-tasks.md#056))

_No changelog entries found._

### `@backstage/backend-test-utils` (0.2.0 → [0.2.1](../../changelogs/@backstage/backend-test-utils.md#021))

_No changelog entries found._

### `@backstage/cli` (0.22.10 → [0.22.11](../../changelogs/@backstage/cli.md#02211))

_No changelog entries found._

### `@backstage/dev-utils` (1.0.18 → [1.0.19](../../changelogs/@backstage/dev-utils.md#1019))

_No changelog entries found._

### `@backstage/integration` (1.6.0 → [1.6.1](../../changelogs/@backstage/integration.md#161))

_No changelog entries found._

### `@backstage/integration-react` (1.1.16 → [1.1.17](../../changelogs/@backstage/integration-react.md#1117))

_No changelog entries found._

### `@backstage/plugin-adr` (0.6.4 → [0.6.5](../../changelogs/@backstage/plugin-adr.md#065))

_No changelog entries found._

### `@backstage/plugin-adr-backend` (0.3.6 → [0.3.7](../../changelogs/@backstage/plugin-adr-backend.md#037))

_No changelog entries found._

### `@backstage/plugin-adr-common` (0.2.12 → [0.2.13](../../changelogs/@backstage/plugin-adr-common.md#0213))

_No changelog entries found._

### `@backstage/plugin-airbrake` (0.3.21 → [0.3.22](../../changelogs/@backstage/plugin-airbrake.md#0322))

_No changelog entries found._

### `@backstage/plugin-airbrake-backend` (0.2.21 → [0.2.22](../../changelogs/@backstage/plugin-airbrake-backend.md#0222))

_No changelog entries found._

### `@backstage/plugin-allure` (0.1.37 → [0.1.38](../../changelogs/@backstage/plugin-allure.md#0138))

_No changelog entries found._

### `@backstage/plugin-api-docs` (0.9.8 → [0.9.9](../../changelogs/@backstage/plugin-api-docs.md#099))

_No changelog entries found._

### `@backstage/plugin-app-backend` (0.3.48 → [0.3.49](../../changelogs/@backstage/plugin-app-backend.md#0349))

_No changelog entries found._

### `@backstage/plugin-app-node` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-app-node.md#011))

_No changelog entries found._

### `@backstage/plugin-auth-backend` (0.18.6 → [0.18.7](../../changelogs/@backstage/plugin-auth-backend.md#0187))

_No changelog entries found._

### `@backstage/plugin-auth-node` (0.2.17 → [0.2.18](../../changelogs/@backstage/plugin-auth-node.md#0218))

_No changelog entries found._

### `@backstage/plugin-azure-devops` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-azure-devops.md#034))

_No changelog entries found._

### `@backstage/plugin-azure-devops-backend` (0.3.27 → [0.3.28](../../changelogs/@backstage/plugin-azure-devops-backend.md#0328))

_No changelog entries found._

### `@backstage/plugin-azure-sites` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-azure-sites.md#0111))

_No changelog entries found._

### `@backstage/plugin-azure-sites-backend` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-azure-sites-backend.md#0111))

_No changelog entries found._

### `@backstage/plugin-badges` (0.2.45 → [0.2.46](../../changelogs/@backstage/plugin-badges.md#0246))

_No changelog entries found._

### `@backstage/plugin-badges-backend` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-badges-backend.md#024))

_No changelog entries found._

### `@backstage/plugin-bazaar` (0.2.13 → [0.2.14](../../changelogs/@backstage/plugin-bazaar.md#0214))

_No changelog entries found._

### `@backstage/plugin-bazaar-backend` (0.2.11 → [0.2.12](../../changelogs/@backstage/plugin-bazaar-backend.md#0212))

_No changelog entries found._

### `@backstage/plugin-bitbucket-cloud-common` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#0210))

_No changelog entries found._

### `@backstage/plugin-bitrise` (0.1.48 → [0.1.49](../../changelogs/@backstage/plugin-bitrise.md#0149))

_No changelog entries found._

### `@backstage/plugin-catalog` (1.12.2 → [1.12.3](../../changelogs/@backstage/plugin-catalog.md#1123))

_No changelog entries found._

### `@backstage/plugin-catalog-backend` (1.12.0 → [1.12.1](../../changelogs/@backstage/plugin-catalog-backend.md#1121))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-aws` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#024))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-azure` (0.1.19 → [0.1.20](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0120))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-bitbucket` (0.2.15 → [0.2.16](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket.md#0216))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#0116))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#0114))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gcp` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#011))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gerrit` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0117))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-github` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#034))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gitlab` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#025))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.1 → [0.4.2](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#042))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-ldap` (0.5.15 → [0.5.16](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0516))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-msgraph` (0.5.7 → [0.5.8](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#058))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-openapi` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0115))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-puppetdb` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#016))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#021))

_No changelog entries found._

### `@backstage/plugin-catalog-graph` (0.2.33 → [0.2.34](../../changelogs/@backstage/plugin-catalog-graph.md#0234))

_No changelog entries found._

### `@backstage/plugin-catalog-import` (0.9.11 → [0.9.12](../../changelogs/@backstage/plugin-catalog-import.md#0912))

_No changelog entries found._

### `@backstage/plugin-catalog-node` (1.4.1 → [1.4.2](../../changelogs/@backstage/plugin-catalog-node.md#142))

_No changelog entries found._

### `@backstage/plugin-catalog-react` (1.8.1 → [1.8.2](../../changelogs/@backstage/plugin-catalog-react.md#182))

_No changelog entries found._

### `@backstage/plugin-cicd-statistics` (0.1.23 → [0.1.24](../../changelogs/@backstage/plugin-cicd-statistics.md#0124))

_No changelog entries found._

### `@backstage/plugin-cicd-statistics-module-gitlab` (0.1.17 → [0.1.18](../../changelogs/@backstage/plugin-cicd-statistics-module-gitlab.md#0118))

_No changelog entries found._

### `@backstage/plugin-circleci` (0.3.21 → [0.3.22](../../changelogs/@backstage/plugin-circleci.md#0322))

_No changelog entries found._

### `@backstage/plugin-cloudbuild` (0.3.21 → [0.3.22](../../changelogs/@backstage/plugin-cloudbuild.md#0322))

_No changelog entries found._

### `@backstage/plugin-code-climate` (0.1.21 → [0.1.22](../../changelogs/@backstage/plugin-code-climate.md#0122))

_No changelog entries found._

### `@backstage/plugin-code-coverage` (0.2.14 → [0.2.15](../../changelogs/@backstage/plugin-code-coverage.md#0215))

_No changelog entries found._

### `@backstage/plugin-code-coverage-backend` (0.2.14 → [0.2.15](../../changelogs/@backstage/plugin-code-coverage-backend.md#0215))

_No changelog entries found._

### `@backstage/plugin-cost-insights` (0.12.10 → [0.12.11](../../changelogs/@backstage/plugin-cost-insights.md#01211))

_No changelog entries found._

### `@backstage/plugin-devtools-backend` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-devtools-backend.md#014))

_No changelog entries found._

### `@backstage/plugin-dynatrace` (7.0.1 → [7.0.2](../../changelogs/@backstage/plugin-dynatrace.md#702))

_No changelog entries found._

### `@backstage/plugin-entity-feedback` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-entity-feedback.md#025))

_No changelog entries found._

### `@backstage/plugin-entity-feedback-backend` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-entity-feedback-backend.md#017))

_No changelog entries found._

### `@backstage/plugin-entity-validation` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-entity-validation.md#017))

_No changelog entries found._

### `@backstage/plugin-events-backend` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-events-backend.md#0210))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-aws-sqs` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#024))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-azure` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-events-backend-module-azure.md#0111))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0111))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-gerrit` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0111))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-github` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-events-backend-module-github.md#0111))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-gitlab` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#0111))

_No changelog entries found._

### `@backstage/plugin-events-backend-test-utils` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0111))

_No changelog entries found._

### `@backstage/plugin-events-node` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-events-node.md#0210))

_No changelog entries found._

### `@backstage/plugin-explore` (0.4.7 → [0.4.8](../../changelogs/@backstage/plugin-explore.md#048))

_No changelog entries found._

### `@backstage/plugin-firehydrant` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-firehydrant.md#026))

_No changelog entries found._

### `@backstage/plugin-fossa` (0.2.53 → [0.2.54](../../changelogs/@backstage/plugin-fossa.md#0254))

_No changelog entries found._

### `@backstage/plugin-git-release-manager` (0.3.34 → [0.3.35](../../changelogs/@backstage/plugin-git-release-manager.md#0335))

_No changelog entries found._

### `@backstage/plugin-github-actions` (0.6.2 → [0.6.3](../../changelogs/@backstage/plugin-github-actions.md#063))

_No changelog entries found._

### `@backstage/plugin-github-deployments` (0.1.52 → [0.1.53](../../changelogs/@backstage/plugin-github-deployments.md#0153))

_No changelog entries found._

### `@backstage/plugin-github-issues` (0.2.10 → [0.2.11](../../changelogs/@backstage/plugin-github-issues.md#0211))

_No changelog entries found._

### `@backstage/plugin-github-pull-requests-board` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-github-pull-requests-board.md#0116))

_No changelog entries found._

### `@backstage/plugin-gocd` (0.1.27 → [0.1.28](../../changelogs/@backstage/plugin-gocd.md#0128))

_No changelog entries found._

### `@backstage/plugin-graphql-backend` (0.1.38 → [0.1.39](../../changelogs/@backstage/plugin-graphql-backend.md#0139))

_No changelog entries found._

### `@backstage/plugin-home` (0.5.5 → [0.5.6](../../changelogs/@backstage/plugin-home.md#056))

_No changelog entries found._

### `@backstage/plugin-ilert` (0.2.10 → [0.2.11](../../changelogs/@backstage/plugin-ilert.md#0211))

_No changelog entries found._

### `@backstage/plugin-jenkins` (0.8.3 → [0.8.4](../../changelogs/@backstage/plugin-jenkins.md#084))

_No changelog entries found._

### `@backstage/plugin-jenkins-backend` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-jenkins-backend.md#024))

_No changelog entries found._

### `@backstage/plugin-kafka` (0.3.21 → [0.3.22](../../changelogs/@backstage/plugin-kafka.md#0322))

_No changelog entries found._

### `@backstage/plugin-kafka-backend` (0.2.41 → [0.2.42](../../changelogs/@backstage/plugin-kafka-backend.md#0242))

_No changelog entries found._

### `@backstage/plugin-kubernetes` (0.10.0 → [0.10.1](../../changelogs/@backstage/plugin-kubernetes.md#0101))

_No changelog entries found._

### `@backstage/plugin-kubernetes-backend` (0.11.3 → [0.11.4](../../changelogs/@backstage/plugin-kubernetes-backend.md#0114))

_No changelog entries found._

### `@backstage/plugin-lighthouse` (0.4.6 → [0.4.7](../../changelogs/@backstage/plugin-lighthouse.md#047))

_No changelog entries found._

### `@backstage/plugin-lighthouse-backend` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-lighthouse-backend.md#025))

_No changelog entries found._

### `@backstage/plugin-linguist` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-linguist.md#017))

_No changelog entries found._

### `@backstage/plugin-linguist-backend` (0.4.0 → [0.4.1](../../changelogs/@backstage/plugin-linguist-backend.md#041))

_No changelog entries found._

### `@backstage/plugin-newrelic-dashboard` (0.2.14 → [0.2.15](../../changelogs/@backstage/plugin-newrelic-dashboard.md#0215))

_No changelog entries found._

### `@backstage/plugin-nomad` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-nomad.md#013))

_No changelog entries found._

### `@backstage/plugin-nomad-backend` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-nomad-backend.md#013))

_No changelog entries found._

### `@backstage/plugin-octopus-deploy` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-octopus-deploy.md#024))

_No changelog entries found._

### `@backstage/plugin-org` (0.6.11 → [0.6.12](../../changelogs/@backstage/plugin-org.md#0612))

_No changelog entries found._

### `@backstage/plugin-org-react` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-org-react.md#0111))

_No changelog entries found._

### `@backstage/plugin-pagerduty` (0.6.2 → [0.6.3](../../changelogs/@backstage/plugin-pagerduty.md#063))

_No changelog entries found._

### `@backstage/plugin-periskop` (0.1.19 → [0.1.20](../../changelogs/@backstage/plugin-periskop.md#0120))

_No changelog entries found._

### `@backstage/plugin-periskop-backend` (0.1.19 → [0.1.20](../../changelogs/@backstage/plugin-periskop-backend.md#0120))

_No changelog entries found._

### `@backstage/plugin-permission-backend` (0.5.23 → [0.5.24](../../changelogs/@backstage/plugin-permission-backend.md#0524))

_No changelog entries found._

### `@backstage/plugin-permission-node` (0.7.11 → [0.7.12](../../changelogs/@backstage/plugin-permission-node.md#0712))

_No changelog entries found._

### `@backstage/plugin-playlist` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-playlist.md#0114))

_No changelog entries found._

### `@backstage/plugin-playlist-backend` (0.3.4 → [0.3.5](../../changelogs/@backstage/plugin-playlist-backend.md#035))

_No changelog entries found._

### `@backstage/plugin-proxy-backend` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-proxy-backend.md#031))

_No changelog entries found._

### `@backstage/plugin-puppetdb` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-puppetdb.md#015))

_No changelog entries found._

### `@backstage/plugin-rollbar` (0.4.21 → [0.4.22](../../changelogs/@backstage/plugin-rollbar.md#0422))

_No changelog entries found._

### `@backstage/plugin-rollbar-backend` (0.1.45 → [0.1.46](../../changelogs/@backstage/plugin-rollbar-backend.md#0146))

_No changelog entries found._

### `@backstage/plugin-scaffolder` (1.14.2 → [1.14.3](../../changelogs/@backstage/plugin-scaffolder.md#1143))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend` (1.16.1 → [1.16.2](../../changelogs/@backstage/plugin-scaffolder-backend.md#1162))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#022))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.24 → [0.2.25](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0225))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#024))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-rails` (0.4.17 → [0.4.18](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0418))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-sentry` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#019))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.21 → [0.2.22](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0222))

_No changelog entries found._

### `@backstage/plugin-scaffolder-node` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-scaffolder-node.md#021))

_No changelog entries found._

### `@backstage/plugin-scaffolder-react` (1.5.2 → [1.5.3](../../changelogs/@backstage/plugin-scaffolder-react.md#153))

_No changelog entries found._

### `@backstage/plugin-search` (1.3.4 → [1.3.5](../../changelogs/@backstage/plugin-search.md#135))

_No changelog entries found._

### `@backstage/plugin-search-backend` (1.4.0 → [1.4.1](../../changelogs/@backstage/plugin-search-backend.md#141))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-catalog` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#015))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-elasticsearch` (1.3.3 → [1.3.4](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#134))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-explore` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-search-backend-module-explore.md#015))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-pg` (0.5.9 → [0.5.10](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0510))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-techdocs` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#015))

_No changelog entries found._

### `@backstage/plugin-search-backend-node` (1.2.4 → [1.2.5](../../changelogs/@backstage/plugin-search-backend-node.md#125))

_No changelog entries found._

### `@backstage/plugin-sentry` (0.5.6 → [0.5.7](../../changelogs/@backstage/plugin-sentry.md#057))

_No changelog entries found._

### `@backstage/plugin-sonarqube` (0.7.2 → [0.7.3](../../changelogs/@backstage/plugin-sonarqube.md#073))

_No changelog entries found._

### `@backstage/plugin-sonarqube-backend` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-sonarqube-backend.md#023))

_No changelog entries found._

### `@backstage/plugin-splunk-on-call` (0.4.10 → [0.4.11](../../changelogs/@backstage/plugin-splunk-on-call.md#0411))

_No changelog entries found._

### `@backstage/plugin-stack-overflow-backend` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-stack-overflow-backend.md#025))

_No changelog entries found._

### `@backstage/plugin-tech-insights` (0.3.13 → [0.3.14](../../changelogs/@backstage/plugin-tech-insights.md#0314))

_No changelog entries found._

### `@backstage/plugin-tech-insights-backend` (0.5.14 → [0.5.15](../../changelogs/@backstage/plugin-tech-insights-backend.md#0515))

_No changelog entries found._

### `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.32 → [0.1.33](../../changelogs/@backstage/plugin-tech-insights-backend-module-jsonfc.md#0133))

_No changelog entries found._

### `@backstage/plugin-tech-insights-node` (0.4.6 → [0.4.7](../../changelogs/@backstage/plugin-tech-insights-node.md#047))

_No changelog entries found._

### `@backstage/plugin-techdocs` (1.6.6 → [1.6.7](../../changelogs/@backstage/plugin-techdocs.md#167))

_No changelog entries found._

### `@backstage/plugin-techdocs-addons-test-utils` (1.0.18 → [1.0.19](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#1019))

_No changelog entries found._

### `@backstage/plugin-techdocs-backend` (1.6.5 → [1.6.6](../../changelogs/@backstage/plugin-techdocs-backend.md#166))

_No changelog entries found._

### `@backstage/plugin-techdocs-module-addons-contrib` (1.0.16 → [1.0.17](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1017))

_No changelog entries found._

### `@backstage/plugin-techdocs-node` (1.7.4 → [1.7.5](../../changelogs/@backstage/plugin-techdocs-node.md#175))

_No changelog entries found._

### `@backstage/plugin-todo` (0.2.23 → [0.2.24](../../changelogs/@backstage/plugin-todo.md#0224))

_No changelog entries found._

### `@backstage/plugin-todo-backend` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-todo-backend.md#021))

_No changelog entries found._

### `@backstage/plugin-user-settings` (0.7.6 → [0.7.7](../../changelogs/@backstage/plugin-user-settings.md#077))

_No changelog entries found._

### `@backstage/plugin-user-settings-backend` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-user-settings-backend.md#0113))

_No changelog entries found._

### `@backstage/plugin-vault` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-vault.md#0116))

_No changelog entries found._

### `@backstage/plugin-vault-backend` (0.3.4 → [0.3.5](../../changelogs/@backstage/plugin-vault-backend.md#035))

_No changelog entries found._

### `@techdocs/cli` (1.4.5 → [1.4.6](../../changelogs/@techdocs/cli.md#146))

_No changelog entries found._
