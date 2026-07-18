# Backstage Release 1.17.3 changelog

Changes between 1.17.2 and 1.17.3 — 153 changed and 0 added packages.

## Summary

- [0.0.x patch version bumps](#00x-patch-version-bumps): 1 package
- [Other patch version bumps](#other-patch-version-bumps): 152 packages

## Table of contents

- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-explore-backend` (0.0.11 → 0.0.12)](#backstageplugin-explore-backend-0011--0012)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-app-api` (0.5.1 → 0.5.2)](#backstagebackend-app-api-051--052)
  - [`@backstage/backend-common` (0.19.3 → 0.19.4)](#backstagebackend-common-0193--0194)
  - [`@backstage/backend-defaults` (0.2.1 → 0.2.2)](#backstagebackend-defaults-021--022)
  - [`@backstage/backend-plugin-api` (0.6.1 → 0.6.2)](#backstagebackend-plugin-api-061--062)
  - [`@backstage/backend-tasks` (0.5.6 → 0.5.7)](#backstagebackend-tasks-056--057)
  - [`@backstage/backend-test-utils` (0.2.1 → 0.2.2)](#backstagebackend-test-utils-021--022)
  - [`@backstage/cli` (0.22.11 → 0.22.12)](#backstagecli-02211--02212)
  - [`@backstage/dev-utils` (1.0.19 → 1.0.20)](#backstagedev-utils-1019--1020)
  - [`@backstage/integration` (1.6.1 → 1.6.2)](#backstageintegration-161--162)
  - [`@backstage/integration-react` (1.1.17 → 1.1.18)](#backstageintegration-react-1117--1118)
  - [`@backstage/plugin-adr` (0.6.5 → 0.6.6)](#backstageplugin-adr-065--066)
  - [`@backstage/plugin-adr-backend` (0.3.7 → 0.3.8)](#backstageplugin-adr-backend-037--038)
  - [`@backstage/plugin-adr-common` (0.2.13 → 0.2.14)](#backstageplugin-adr-common-0213--0214)
  - [`@backstage/plugin-airbrake` (0.3.22 → 0.3.23)](#backstageplugin-airbrake-0322--0323)
  - [`@backstage/plugin-airbrake-backend` (0.2.22 → 0.2.23)](#backstageplugin-airbrake-backend-0222--0223)
  - [`@backstage/plugin-allure` (0.1.38 → 0.1.39)](#backstageplugin-allure-0138--0139)
  - [`@backstage/plugin-api-docs` (0.9.9 → 0.9.10)](#backstageplugin-api-docs-099--0910)
  - [`@backstage/plugin-app-backend` (0.3.49 → 0.3.50)](#backstageplugin-app-backend-0349--0350)
  - [`@backstage/plugin-app-node` (0.1.1 → 0.1.2)](#backstageplugin-app-node-011--012)
  - [`@backstage/plugin-auth-backend` (0.18.7 → 0.18.8)](#backstageplugin-auth-backend-0187--0188)
  - [`@backstage/plugin-auth-node` (0.2.18 → 0.2.19)](#backstageplugin-auth-node-0218--0219)
  - [`@backstage/plugin-azure-devops` (0.3.4 → 0.3.5)](#backstageplugin-azure-devops-034--035)
  - [`@backstage/plugin-azure-devops-backend` (0.3.28 → 0.3.29)](#backstageplugin-azure-devops-backend-0328--0329)
  - [`@backstage/plugin-azure-sites` (0.1.11 → 0.1.12)](#backstageplugin-azure-sites-0111--0112)
  - [`@backstage/plugin-azure-sites-backend` (0.1.11 → 0.1.12)](#backstageplugin-azure-sites-backend-0111--0112)
  - [`@backstage/plugin-badges` (0.2.46 → 0.2.47)](#backstageplugin-badges-0246--0247)
  - [`@backstage/plugin-badges-backend` (0.2.4 → 0.2.5)](#backstageplugin-badges-backend-024--025)
  - [`@backstage/plugin-bazaar` (0.2.14 → 0.2.15)](#backstageplugin-bazaar-0214--0215)
  - [`@backstage/plugin-bazaar-backend` (0.2.12 → 0.2.13)](#backstageplugin-bazaar-backend-0212--0213)
  - [`@backstage/plugin-bitbucket-cloud-common` (0.2.10 → 0.2.11)](#backstageplugin-bitbucket-cloud-common-0210--0211)
  - [`@backstage/plugin-bitrise` (0.1.49 → 0.1.50)](#backstageplugin-bitrise-0149--0150)
  - [`@backstage/plugin-catalog` (1.12.3 → 1.12.4)](#backstageplugin-catalog-1123--1124)
  - [`@backstage/plugin-catalog-backend` (1.12.1 → 1.12.2)](#backstageplugin-catalog-backend-1121--1122)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.2.4 → 0.2.5)](#backstageplugin-catalog-backend-module-aws-024--025)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.1.20 → 0.1.21)](#backstageplugin-catalog-backend-module-azure-0120--0121)
  - [`@backstage/plugin-catalog-backend-module-bitbucket` (0.2.16 → 0.2.17)](#backstageplugin-catalog-backend-module-bitbucket-0216--0217)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.16 → 0.1.17)](#backstageplugin-catalog-backend-module-bitbucket-cloud-0116--0117)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.14 → 0.1.15)](#backstageplugin-catalog-backend-module-bitbucket-server-0114--0115)
  - [`@backstage/plugin-catalog-backend-module-gcp` (0.1.1 → 0.1.2)](#backstageplugin-catalog-backend-module-gcp-011--012)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (0.1.17 → 0.1.18)](#backstageplugin-catalog-backend-module-gerrit-0117--0118)
  - [`@backstage/plugin-catalog-backend-module-github` (0.3.4 → 0.3.5)](#backstageplugin-catalog-backend-module-github-034--035)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.2.5 → 0.2.6)](#backstageplugin-catalog-backend-module-gitlab-025--026)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.2 → 0.4.3)](#backstageplugin-catalog-backend-module-incremental-ingestion-042--043)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.5.16 → 0.5.17)](#backstageplugin-catalog-backend-module-ldap-0516--0517)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.5.8 → 0.5.9)](#backstageplugin-catalog-backend-module-msgraph-058--059)
  - [`@backstage/plugin-catalog-backend-module-openapi` (0.1.15 → 0.1.16)](#backstageplugin-catalog-backend-module-openapi-0115--0116)
  - [`@backstage/plugin-catalog-backend-module-puppetdb` (0.1.6 → 0.1.7)](#backstageplugin-catalog-backend-module-puppetdb-016--017)
  - [`@backstage/plugin-catalog-backend-module-unprocessed` (0.2.1 → 0.2.2)](#backstageplugin-catalog-backend-module-unprocessed-021--022)
  - [`@backstage/plugin-catalog-graph` (0.2.34 → 0.2.35)](#backstageplugin-catalog-graph-0234--0235)
  - [`@backstage/plugin-catalog-import` (0.9.12 → 0.9.13)](#backstageplugin-catalog-import-0912--0913)
  - [`@backstage/plugin-catalog-node` (1.4.2 → 1.4.3)](#backstageplugin-catalog-node-142--143)
  - [`@backstage/plugin-catalog-react` (1.8.2 → 1.8.3)](#backstageplugin-catalog-react-182--183)
  - [`@backstage/plugin-cicd-statistics` (0.1.24 → 0.1.25)](#backstageplugin-cicd-statistics-0124--0125)
  - [`@backstage/plugin-cicd-statistics-module-gitlab` (0.1.18 → 0.1.19)](#backstageplugin-cicd-statistics-module-gitlab-0118--0119)
  - [`@backstage/plugin-circleci` (0.3.22 → 0.3.23)](#backstageplugin-circleci-0322--0323)
  - [`@backstage/plugin-cloudbuild` (0.3.22 → 0.3.23)](#backstageplugin-cloudbuild-0322--0323)
  - [`@backstage/plugin-code-climate` (0.1.22 → 0.1.23)](#backstageplugin-code-climate-0122--0123)
  - [`@backstage/plugin-code-coverage` (0.2.15 → 0.2.16)](#backstageplugin-code-coverage-0215--0216)
  - [`@backstage/plugin-code-coverage-backend` (0.2.15 → 0.2.16)](#backstageplugin-code-coverage-backend-0215--0216)
  - [`@backstage/plugin-cost-insights` (0.12.11 → 0.12.12)](#backstageplugin-cost-insights-01211--01212)
  - [`@backstage/plugin-devtools-backend` (0.1.4 → 0.1.5)](#backstageplugin-devtools-backend-014--015)
  - [`@backstage/plugin-dynatrace` (7.0.2 → 7.0.3)](#backstageplugin-dynatrace-702--703)
  - [`@backstage/plugin-entity-feedback` (0.2.5 → 0.2.6)](#backstageplugin-entity-feedback-025--026)
  - [`@backstage/plugin-entity-feedback-backend` (0.1.7 → 0.1.8)](#backstageplugin-entity-feedback-backend-017--018)
  - [`@backstage/plugin-entity-validation` (0.1.7 → 0.1.8)](#backstageplugin-entity-validation-017--018)
  - [`@backstage/plugin-events-backend` (0.2.10 → 0.2.11)](#backstageplugin-events-backend-0210--0211)
  - [`@backstage/plugin-events-backend-module-aws-sqs` (0.2.4 → 0.2.5)](#backstageplugin-events-backend-module-aws-sqs-024--025)
  - [`@backstage/plugin-events-backend-module-azure` (0.1.11 → 0.1.12)](#backstageplugin-events-backend-module-azure-0111--0112)
  - [`@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.11 → 0.1.12)](#backstageplugin-events-backend-module-bitbucket-cloud-0111--0112)
  - [`@backstage/plugin-events-backend-module-gerrit` (0.1.11 → 0.1.12)](#backstageplugin-events-backend-module-gerrit-0111--0112)
  - [`@backstage/plugin-events-backend-module-github` (0.1.11 → 0.1.12)](#backstageplugin-events-backend-module-github-0111--0112)
  - [`@backstage/plugin-events-backend-module-gitlab` (0.1.11 → 0.1.12)](#backstageplugin-events-backend-module-gitlab-0111--0112)
  - [`@backstage/plugin-events-backend-test-utils` (0.1.11 → 0.1.12)](#backstageplugin-events-backend-test-utils-0111--0112)
  - [`@backstage/plugin-events-node` (0.2.10 → 0.2.11)](#backstageplugin-events-node-0210--0211)
  - [`@backstage/plugin-explore` (0.4.8 → 0.4.9)](#backstageplugin-explore-048--049)
  - [`@backstage/plugin-firehydrant` (0.2.6 → 0.2.7)](#backstageplugin-firehydrant-026--027)
  - [`@backstage/plugin-fossa` (0.2.54 → 0.2.55)](#backstageplugin-fossa-0254--0255)
  - [`@backstage/plugin-git-release-manager` (0.3.35 → 0.3.36)](#backstageplugin-git-release-manager-0335--0336)
  - [`@backstage/plugin-github-actions` (0.6.3 → 0.6.4)](#backstageplugin-github-actions-063--064)
  - [`@backstage/plugin-github-deployments` (0.1.53 → 0.1.54)](#backstageplugin-github-deployments-0153--0154)
  - [`@backstage/plugin-github-issues` (0.2.11 → 0.2.12)](#backstageplugin-github-issues-0211--0212)
  - [`@backstage/plugin-github-pull-requests-board` (0.1.16 → 0.1.17)](#backstageplugin-github-pull-requests-board-0116--0117)
  - [`@backstage/plugin-gocd` (0.1.28 → 0.1.29)](#backstageplugin-gocd-0128--0129)
  - [`@backstage/plugin-graphql-backend` (0.1.39 → 0.1.40)](#backstageplugin-graphql-backend-0139--0140)
  - [`@backstage/plugin-home` (0.5.6 → 0.5.7)](#backstageplugin-home-056--057)
  - [`@backstage/plugin-ilert` (0.2.11 → 0.2.12)](#backstageplugin-ilert-0211--0212)
  - [`@backstage/plugin-jenkins` (0.8.4 → 0.8.5)](#backstageplugin-jenkins-084--085)
  - [`@backstage/plugin-jenkins-backend` (0.2.4 → 0.2.5)](#backstageplugin-jenkins-backend-024--025)
  - [`@backstage/plugin-kafka` (0.3.22 → 0.3.23)](#backstageplugin-kafka-0322--0323)
  - [`@backstage/plugin-kafka-backend` (0.2.42 → 0.2.43)](#backstageplugin-kafka-backend-0242--0243)
  - [`@backstage/plugin-kubernetes` (0.10.1 → 0.10.2)](#backstageplugin-kubernetes-0101--0102)
  - [`@backstage/plugin-kubernetes-backend` (0.11.4 → 0.11.5)](#backstageplugin-kubernetes-backend-0114--0115)
  - [`@backstage/plugin-lighthouse` (0.4.7 → 0.4.8)](#backstageplugin-lighthouse-047--048)
  - [`@backstage/plugin-lighthouse-backend` (0.2.5 → 0.2.6)](#backstageplugin-lighthouse-backend-025--026)
  - [`@backstage/plugin-linguist` (0.1.7 → 0.1.8)](#backstageplugin-linguist-017--018)
  - [`@backstage/plugin-linguist-backend` (0.4.1 → 0.4.2)](#backstageplugin-linguist-backend-041--042)
  - [`@backstage/plugin-newrelic-dashboard` (0.2.15 → 0.2.16)](#backstageplugin-newrelic-dashboard-0215--0216)
  - [`@backstage/plugin-nomad` (0.1.3 → 0.1.4)](#backstageplugin-nomad-013--014)
  - [`@backstage/plugin-nomad-backend` (0.1.3 → 0.1.4)](#backstageplugin-nomad-backend-013--014)
  - [`@backstage/plugin-octopus-deploy` (0.2.4 → 0.2.5)](#backstageplugin-octopus-deploy-024--025)
  - [`@backstage/plugin-org` (0.6.12 → 0.6.13)](#backstageplugin-org-0612--0613)
  - [`@backstage/plugin-org-react` (0.1.11 → 0.1.12)](#backstageplugin-org-react-0111--0112)
  - [`@backstage/plugin-pagerduty` (0.6.3 → 0.6.4)](#backstageplugin-pagerduty-063--064)
  - [`@backstage/plugin-periskop` (0.1.20 → 0.1.21)](#backstageplugin-periskop-0120--0121)
  - [`@backstage/plugin-periskop-backend` (0.1.20 → 0.1.21)](#backstageplugin-periskop-backend-0120--0121)
  - [`@backstage/plugin-permission-backend` (0.5.24 → 0.5.25)](#backstageplugin-permission-backend-0524--0525)
  - [`@backstage/plugin-permission-node` (0.7.12 → 0.7.13)](#backstageplugin-permission-node-0712--0713)
  - [`@backstage/plugin-playlist` (0.1.14 → 0.1.15)](#backstageplugin-playlist-0114--0115)
  - [`@backstage/plugin-playlist-backend` (0.3.5 → 0.3.6)](#backstageplugin-playlist-backend-035--036)
  - [`@backstage/plugin-proxy-backend` (0.3.1 → 0.3.2)](#backstageplugin-proxy-backend-031--032)
  - [`@backstage/plugin-puppetdb` (0.1.5 → 0.1.6)](#backstageplugin-puppetdb-015--016)
  - [`@backstage/plugin-rollbar` (0.4.22 → 0.4.23)](#backstageplugin-rollbar-0422--0423)
  - [`@backstage/plugin-rollbar-backend` (0.1.46 → 0.1.47)](#backstageplugin-rollbar-backend-0146--0147)
  - [`@backstage/plugin-scaffolder` (1.14.3 → 1.14.4)](#backstageplugin-scaffolder-1143--1144)
  - [`@backstage/plugin-scaffolder-backend` (1.16.2 → 1.16.3)](#backstageplugin-scaffolder-backend-1162--1163)
  - [`@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.2 → 0.2.3)](#backstageplugin-scaffolder-backend-module-confluence-to-markdown-022--023)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.25 → 0.2.26)](#backstageplugin-scaffolder-backend-module-cookiecutter-0225--0226)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.2.4 → 0.2.5)](#backstageplugin-scaffolder-backend-module-gitlab-024--025)
  - [`@backstage/plugin-scaffolder-backend-module-rails` (0.4.18 → 0.4.19)](#backstageplugin-scaffolder-backend-module-rails-0418--0419)
  - [`@backstage/plugin-scaffolder-backend-module-sentry` (0.1.9 → 0.1.10)](#backstageplugin-scaffolder-backend-module-sentry-019--0110)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.22 → 0.2.23)](#backstageplugin-scaffolder-backend-module-yeoman-0222--0223)
  - [`@backstage/plugin-scaffolder-node` (0.2.1 → 0.2.2)](#backstageplugin-scaffolder-node-021--022)
  - [`@backstage/plugin-scaffolder-react` (1.5.3 → 1.5.4)](#backstageplugin-scaffolder-react-153--154)
  - [`@backstage/plugin-search` (1.3.5 → 1.3.6)](#backstageplugin-search-135--136)
  - [`@backstage/plugin-search-backend` (1.4.1 → 1.4.2)](#backstageplugin-search-backend-141--142)
  - [`@backstage/plugin-search-backend-module-catalog` (0.1.5 → 0.1.6)](#backstageplugin-search-backend-module-catalog-015--016)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.3.4 → 1.3.5)](#backstageplugin-search-backend-module-elasticsearch-134--135)
  - [`@backstage/plugin-search-backend-module-explore` (0.1.5 → 0.1.6)](#backstageplugin-search-backend-module-explore-015--016)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.10 → 0.5.11)](#backstageplugin-search-backend-module-pg-0510--0511)
  - [`@backstage/plugin-search-backend-module-techdocs` (0.1.5 → 0.1.6)](#backstageplugin-search-backend-module-techdocs-015--016)
  - [`@backstage/plugin-search-backend-node` (1.2.5 → 1.2.6)](#backstageplugin-search-backend-node-125--126)
  - [`@backstage/plugin-sentry` (0.5.7 → 0.5.8)](#backstageplugin-sentry-057--058)
  - [`@backstage/plugin-sonarqube` (0.7.3 → 0.7.4)](#backstageplugin-sonarqube-073--074)
  - [`@backstage/plugin-sonarqube-backend` (0.2.3 → 0.2.4)](#backstageplugin-sonarqube-backend-023--024)
  - [`@backstage/plugin-splunk-on-call` (0.4.11 → 0.4.12)](#backstageplugin-splunk-on-call-0411--0412)
  - [`@backstage/plugin-stack-overflow-backend` (0.2.5 → 0.2.6)](#backstageplugin-stack-overflow-backend-025--026)
  - [`@backstage/plugin-tech-insights` (0.3.14 → 0.3.15)](#backstageplugin-tech-insights-0314--0315)
  - [`@backstage/plugin-tech-insights-backend` (0.5.15 → 0.5.16)](#backstageplugin-tech-insights-backend-0515--0516)
  - [`@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.33 → 0.1.34)](#backstageplugin-tech-insights-backend-module-jsonfc-0133--0134)
  - [`@backstage/plugin-tech-insights-node` (0.4.7 → 0.4.8)](#backstageplugin-tech-insights-node-047--048)
  - [`@backstage/plugin-techdocs` (1.6.7 → 1.6.8)](#backstageplugin-techdocs-167--168)
  - [`@backstage/plugin-techdocs-addons-test-utils` (1.0.19 → 1.0.20)](#backstageplugin-techdocs-addons-test-utils-1019--1020)
  - [`@backstage/plugin-techdocs-backend` (1.6.6 → 1.6.7)](#backstageplugin-techdocs-backend-166--167)
  - [`@backstage/plugin-techdocs-module-addons-contrib` (1.0.17 → 1.0.18)](#backstageplugin-techdocs-module-addons-contrib-1017--1018)
  - [`@backstage/plugin-techdocs-node` (1.7.5 → 1.7.6)](#backstageplugin-techdocs-node-175--176)
  - [`@backstage/plugin-todo` (0.2.24 → 0.2.25)](#backstageplugin-todo-0224--0225)
  - [`@backstage/plugin-todo-backend` (0.2.1 → 0.2.2)](#backstageplugin-todo-backend-021--022)
  - [`@backstage/plugin-user-settings` (0.7.7 → 0.7.8)](#backstageplugin-user-settings-077--078)
  - [`@backstage/plugin-user-settings-backend` (0.1.13 → 0.1.14)](#backstageplugin-user-settings-backend-0113--0114)
  - [`@backstage/plugin-vault` (0.1.16 → 0.1.17)](#backstageplugin-vault-0116--0117)
  - [`@backstage/plugin-vault-backend` (0.3.5 → 0.3.6)](#backstageplugin-vault-backend-035--036)
  - [`@techdocs/cli` (1.4.6 → 1.4.7)](#techdocscli-146--147)

## 0.0.x patch version bumps

### `@backstage/plugin-explore-backend` (0.0.11 → 0.0.12)

_No changelog entries found._

## Other patch version bumps

### `@backstage/backend-app-api` (0.5.1 → 0.5.2)

_No changelog entries found._

### `@backstage/backend-common` (0.19.3 → 0.19.4)

_No changelog entries found._

### `@backstage/backend-defaults` (0.2.1 → 0.2.2)

_No changelog entries found._

### `@backstage/backend-plugin-api` (0.6.1 → 0.6.2)

_No changelog entries found._

### `@backstage/backend-tasks` (0.5.6 → 0.5.7)

_No changelog entries found._

### `@backstage/backend-test-utils` (0.2.1 → 0.2.2)

_No changelog entries found._

### `@backstage/cli` (0.22.11 → 0.22.12)

_No changelog entries found._

### `@backstage/dev-utils` (1.0.19 → 1.0.20)

_No changelog entries found._

### `@backstage/integration` (1.6.1 → 1.6.2)

_No changelog entries found._

### `@backstage/integration-react` (1.1.17 → 1.1.18)

_No changelog entries found._

### `@backstage/plugin-adr` (0.6.5 → 0.6.6)

_No changelog entries found._

### `@backstage/plugin-adr-backend` (0.3.7 → 0.3.8)

_No changelog entries found._

### `@backstage/plugin-adr-common` (0.2.13 → 0.2.14)

_No changelog entries found._

### `@backstage/plugin-airbrake` (0.3.22 → 0.3.23)

_No changelog entries found._

### `@backstage/plugin-airbrake-backend` (0.2.22 → 0.2.23)

_No changelog entries found._

### `@backstage/plugin-allure` (0.1.38 → 0.1.39)

_No changelog entries found._

### `@backstage/plugin-api-docs` (0.9.9 → 0.9.10)

_No changelog entries found._

### `@backstage/plugin-app-backend` (0.3.49 → 0.3.50)

_No changelog entries found._

### `@backstage/plugin-app-node` (0.1.1 → 0.1.2)

_No changelog entries found._

### `@backstage/plugin-auth-backend` (0.18.7 → 0.18.8)

_No changelog entries found._

### `@backstage/plugin-auth-node` (0.2.18 → 0.2.19)

_No changelog entries found._

### `@backstage/plugin-azure-devops` (0.3.4 → 0.3.5)

_No changelog entries found._

### `@backstage/plugin-azure-devops-backend` (0.3.28 → 0.3.29)

_No changelog entries found._

### `@backstage/plugin-azure-sites` (0.1.11 → 0.1.12)

_No changelog entries found._

### `@backstage/plugin-azure-sites-backend` (0.1.11 → 0.1.12)

_No changelog entries found._

### `@backstage/plugin-badges` (0.2.46 → 0.2.47)

_No changelog entries found._

### `@backstage/plugin-badges-backend` (0.2.4 → 0.2.5)

_No changelog entries found._

### `@backstage/plugin-bazaar` (0.2.14 → 0.2.15)

_No changelog entries found._

### `@backstage/plugin-bazaar-backend` (0.2.12 → 0.2.13)

_No changelog entries found._

### `@backstage/plugin-bitbucket-cloud-common` (0.2.10 → 0.2.11)

_No changelog entries found._

### `@backstage/plugin-bitrise` (0.1.49 → 0.1.50)

_No changelog entries found._

### `@backstage/plugin-catalog` (1.12.3 → 1.12.4)

_No changelog entries found._

### `@backstage/plugin-catalog-backend` (1.12.1 → 1.12.2)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-aws` (0.2.4 → 0.2.5)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-azure` (0.1.20 → 0.1.21)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-bitbucket` (0.2.16 → 0.2.17)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.16 → 0.1.17)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.14 → 0.1.15)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gcp` (0.1.1 → 0.1.2)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gerrit` (0.1.17 → 0.1.18)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-github` (0.3.4 → 0.3.5)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gitlab` (0.2.5 → 0.2.6)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.2 → 0.4.3)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-ldap` (0.5.16 → 0.5.17)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-msgraph` (0.5.8 → 0.5.9)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-openapi` (0.1.15 → 0.1.16)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-puppetdb` (0.1.6 → 0.1.7)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.2.1 → 0.2.2)

_No changelog entries found._

### `@backstage/plugin-catalog-graph` (0.2.34 → 0.2.35)

_No changelog entries found._

### `@backstage/plugin-catalog-import` (0.9.12 → 0.9.13)

_No changelog entries found._

### `@backstage/plugin-catalog-node` (1.4.2 → 1.4.3)

_No changelog entries found._

### `@backstage/plugin-catalog-react` (1.8.2 → 1.8.3)

_No changelog entries found._

### `@backstage/plugin-cicd-statistics` (0.1.24 → 0.1.25)

_No changelog entries found._

### `@backstage/plugin-cicd-statistics-module-gitlab` (0.1.18 → 0.1.19)

_No changelog entries found._

### `@backstage/plugin-circleci` (0.3.22 → 0.3.23)

_No changelog entries found._

### `@backstage/plugin-cloudbuild` (0.3.22 → 0.3.23)

_No changelog entries found._

### `@backstage/plugin-code-climate` (0.1.22 → 0.1.23)

_No changelog entries found._

### `@backstage/plugin-code-coverage` (0.2.15 → 0.2.16)

_No changelog entries found._

### `@backstage/plugin-code-coverage-backend` (0.2.15 → 0.2.16)

_No changelog entries found._

### `@backstage/plugin-cost-insights` (0.12.11 → 0.12.12)

_No changelog entries found._

### `@backstage/plugin-devtools-backend` (0.1.4 → 0.1.5)

_No changelog entries found._

### `@backstage/plugin-dynatrace` (7.0.2 → 7.0.3)

_No changelog entries found._

### `@backstage/plugin-entity-feedback` (0.2.5 → 0.2.6)

_No changelog entries found._

### `@backstage/plugin-entity-feedback-backend` (0.1.7 → 0.1.8)

_No changelog entries found._

### `@backstage/plugin-entity-validation` (0.1.7 → 0.1.8)

_No changelog entries found._

### `@backstage/plugin-events-backend` (0.2.10 → 0.2.11)

_No changelog entries found._

### `@backstage/plugin-events-backend-module-aws-sqs` (0.2.4 → 0.2.5)

_No changelog entries found._

### `@backstage/plugin-events-backend-module-azure` (0.1.11 → 0.1.12)

_No changelog entries found._

### `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.11 → 0.1.12)

_No changelog entries found._

### `@backstage/plugin-events-backend-module-gerrit` (0.1.11 → 0.1.12)

_No changelog entries found._

### `@backstage/plugin-events-backend-module-github` (0.1.11 → 0.1.12)

_No changelog entries found._

### `@backstage/plugin-events-backend-module-gitlab` (0.1.11 → 0.1.12)

_No changelog entries found._

### `@backstage/plugin-events-backend-test-utils` (0.1.11 → 0.1.12)

_No changelog entries found._

### `@backstage/plugin-events-node` (0.2.10 → 0.2.11)

_No changelog entries found._

### `@backstage/plugin-explore` (0.4.8 → 0.4.9)

_No changelog entries found._

### `@backstage/plugin-firehydrant` (0.2.6 → 0.2.7)

_No changelog entries found._

### `@backstage/plugin-fossa` (0.2.54 → 0.2.55)

_No changelog entries found._

### `@backstage/plugin-git-release-manager` (0.3.35 → 0.3.36)

_No changelog entries found._

### `@backstage/plugin-github-actions` (0.6.3 → 0.6.4)

_No changelog entries found._

### `@backstage/plugin-github-deployments` (0.1.53 → 0.1.54)

_No changelog entries found._

### `@backstage/plugin-github-issues` (0.2.11 → 0.2.12)

_No changelog entries found._

### `@backstage/plugin-github-pull-requests-board` (0.1.16 → 0.1.17)

_No changelog entries found._

### `@backstage/plugin-gocd` (0.1.28 → 0.1.29)

_No changelog entries found._

### `@backstage/plugin-graphql-backend` (0.1.39 → 0.1.40)

_No changelog entries found._

### `@backstage/plugin-home` (0.5.6 → 0.5.7)

_No changelog entries found._

### `@backstage/plugin-ilert` (0.2.11 → 0.2.12)

_No changelog entries found._

### `@backstage/plugin-jenkins` (0.8.4 → 0.8.5)

_No changelog entries found._

### `@backstage/plugin-jenkins-backend` (0.2.4 → 0.2.5)

_No changelog entries found._

### `@backstage/plugin-kafka` (0.3.22 → 0.3.23)

_No changelog entries found._

### `@backstage/plugin-kafka-backend` (0.2.42 → 0.2.43)

_No changelog entries found._

### `@backstage/plugin-kubernetes` (0.10.1 → 0.10.2)

_No changelog entries found._

### `@backstage/plugin-kubernetes-backend` (0.11.4 → 0.11.5)

_No changelog entries found._

### `@backstage/plugin-lighthouse` (0.4.7 → 0.4.8)

_No changelog entries found._

### `@backstage/plugin-lighthouse-backend` (0.2.5 → 0.2.6)

_No changelog entries found._

### `@backstage/plugin-linguist` (0.1.7 → 0.1.8)

_No changelog entries found._

### `@backstage/plugin-linguist-backend` (0.4.1 → 0.4.2)

_No changelog entries found._

### `@backstage/plugin-newrelic-dashboard` (0.2.15 → 0.2.16)

_No changelog entries found._

### `@backstage/plugin-nomad` (0.1.3 → 0.1.4)

_No changelog entries found._

### `@backstage/plugin-nomad-backend` (0.1.3 → 0.1.4)

_No changelog entries found._

### `@backstage/plugin-octopus-deploy` (0.2.4 → 0.2.5)

_No changelog entries found._

### `@backstage/plugin-org` (0.6.12 → 0.6.13)

_No changelog entries found._

### `@backstage/plugin-org-react` (0.1.11 → 0.1.12)

_No changelog entries found._

### `@backstage/plugin-pagerduty` (0.6.3 → 0.6.4)

_No changelog entries found._

### `@backstage/plugin-periskop` (0.1.20 → 0.1.21)

_No changelog entries found._

### `@backstage/plugin-periskop-backend` (0.1.20 → 0.1.21)

_No changelog entries found._

### `@backstage/plugin-permission-backend` (0.5.24 → 0.5.25)

_No changelog entries found._

### `@backstage/plugin-permission-node` (0.7.12 → 0.7.13)

_No changelog entries found._

### `@backstage/plugin-playlist` (0.1.14 → 0.1.15)

_No changelog entries found._

### `@backstage/plugin-playlist-backend` (0.3.5 → 0.3.6)

_No changelog entries found._

### `@backstage/plugin-proxy-backend` (0.3.1 → 0.3.2)

_No changelog entries found._

### `@backstage/plugin-puppetdb` (0.1.5 → 0.1.6)

_No changelog entries found._

### `@backstage/plugin-rollbar` (0.4.22 → 0.4.23)

_No changelog entries found._

### `@backstage/plugin-rollbar-backend` (0.1.46 → 0.1.47)

_No changelog entries found._

### `@backstage/plugin-scaffolder` (1.14.3 → 1.14.4)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend` (1.16.2 → 1.16.3)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.2 → 0.2.3)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.25 → 0.2.26)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.2.4 → 0.2.5)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-rails` (0.4.18 → 0.4.19)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-sentry` (0.1.9 → 0.1.10)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.22 → 0.2.23)

_No changelog entries found._

### `@backstage/plugin-scaffolder-node` (0.2.1 → 0.2.2)

_No changelog entries found._

### `@backstage/plugin-scaffolder-react` (1.5.3 → 1.5.4)

_No changelog entries found._

### `@backstage/plugin-search` (1.3.5 → 1.3.6)

_No changelog entries found._

### `@backstage/plugin-search-backend` (1.4.1 → 1.4.2)

_No changelog entries found._

### `@backstage/plugin-search-backend-module-catalog` (0.1.5 → 0.1.6)

_No changelog entries found._

### `@backstage/plugin-search-backend-module-elasticsearch` (1.3.4 → 1.3.5)

_No changelog entries found._

### `@backstage/plugin-search-backend-module-explore` (0.1.5 → 0.1.6)

_No changelog entries found._

### `@backstage/plugin-search-backend-module-pg` (0.5.10 → 0.5.11)

_No changelog entries found._

### `@backstage/plugin-search-backend-module-techdocs` (0.1.5 → 0.1.6)

_No changelog entries found._

### `@backstage/plugin-search-backend-node` (1.2.5 → 1.2.6)

_No changelog entries found._

### `@backstage/plugin-sentry` (0.5.7 → 0.5.8)

_No changelog entries found._

### `@backstage/plugin-sonarqube` (0.7.3 → 0.7.4)

_No changelog entries found._

### `@backstage/plugin-sonarqube-backend` (0.2.3 → 0.2.4)

_No changelog entries found._

### `@backstage/plugin-splunk-on-call` (0.4.11 → 0.4.12)

_No changelog entries found._

### `@backstage/plugin-stack-overflow-backend` (0.2.5 → 0.2.6)

_No changelog entries found._

### `@backstage/plugin-tech-insights` (0.3.14 → 0.3.15)

_No changelog entries found._

### `@backstage/plugin-tech-insights-backend` (0.5.15 → 0.5.16)

_No changelog entries found._

### `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.33 → 0.1.34)

_No changelog entries found._

### `@backstage/plugin-tech-insights-node` (0.4.7 → 0.4.8)

_No changelog entries found._

### `@backstage/plugin-techdocs` (1.6.7 → 1.6.8)

_No changelog entries found._

### `@backstage/plugin-techdocs-addons-test-utils` (1.0.19 → 1.0.20)

_No changelog entries found._

### `@backstage/plugin-techdocs-backend` (1.6.6 → 1.6.7)

_No changelog entries found._

### `@backstage/plugin-techdocs-module-addons-contrib` (1.0.17 → 1.0.18)

_No changelog entries found._

### `@backstage/plugin-techdocs-node` (1.7.5 → 1.7.6)

_No changelog entries found._

### `@backstage/plugin-todo` (0.2.24 → 0.2.25)

_No changelog entries found._

### `@backstage/plugin-todo-backend` (0.2.1 → 0.2.2)

_No changelog entries found._

### `@backstage/plugin-user-settings` (0.7.7 → 0.7.8)

_No changelog entries found._

### `@backstage/plugin-user-settings-backend` (0.1.13 → 0.1.14)

_No changelog entries found._

### `@backstage/plugin-vault` (0.1.16 → 0.1.17)

_No changelog entries found._

### `@backstage/plugin-vault-backend` (0.3.5 → 0.3.6)

_No changelog entries found._

### `@techdocs/cli` (1.4.6 → 1.4.7)

_No changelog entries found._
