# Backstage Release 1.18.4 changelog

Changes between 1.18.3 and 1.18.4 — 92 changed and 0 added packages.

## Summary

- [0.0.x patch version bumps](#00x-patch-version-bumps): 1 package
- [Other patch version bumps](#other-patch-version-bumps): 91 packages

## Table of contents

- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-explore-backend` (0.0.14 → 0.0.15)](#backstageplugin-explore-backend-0014--0015)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-app-api` (0.5.4 → 0.5.5)](#backstagebackend-app-api-054--055)
  - [`@backstage/backend-common` (0.19.6 → 0.19.7)](#backstagebackend-common-0196--0197)
  - [`@backstage/backend-defaults` (0.2.4 → 0.2.5)](#backstagebackend-defaults-024--025)
  - [`@backstage/backend-plugin-api` (0.6.4 → 0.6.5)](#backstagebackend-plugin-api-064--065)
  - [`@backstage/backend-tasks` (0.5.9 → 0.5.10)](#backstagebackend-tasks-059--0510)
  - [`@backstage/backend-test-utils` (0.2.5 → 0.2.6)](#backstagebackend-test-utils-025--026)
  - [`@backstage/plugin-adr-backend` (0.4.1 → 0.4.2)](#backstageplugin-adr-backend-041--042)
  - [`@backstage/plugin-airbrake-backend` (0.3.1 → 0.3.2)](#backstageplugin-airbrake-backend-031--032)
  - [`@backstage/plugin-app-backend` (0.3.52 → 0.3.53)](#backstageplugin-app-backend-0352--0353)
  - [`@backstage/plugin-app-node` (0.1.4 → 0.1.5)](#backstageplugin-app-node-014--015)
  - [`@backstage/plugin-auth-backend` (0.19.1 → 0.19.2)](#backstageplugin-auth-backend-0191--0192)
  - [`@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.1.1 → 0.1.2)](#backstageplugin-auth-backend-module-gcp-iap-provider-011--012)
  - [`@backstage/plugin-auth-backend-module-github-provider` (0.1.1 → 0.1.2)](#backstageplugin-auth-backend-module-github-provider-011--012)
  - [`@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.1 → 0.1.2)](#backstageplugin-auth-backend-module-gitlab-provider-011--012)
  - [`@backstage/plugin-auth-backend-module-google-provider` (0.1.1 → 0.1.2)](#backstageplugin-auth-backend-module-google-provider-011--012)
  - [`@backstage/plugin-auth-backend-module-oauth2-provider` (0.1.1 → 0.1.2)](#backstageplugin-auth-backend-module-oauth2-provider-011--012)
  - [`@backstage/plugin-auth-node` (0.3.1 → 0.3.2)](#backstageplugin-auth-node-031--032)
  - [`@backstage/plugin-azure-devops-backend` (0.4.1 → 0.4.2)](#backstageplugin-azure-devops-backend-041--042)
  - [`@backstage/plugin-azure-sites-backend` (0.1.14 → 0.1.15)](#backstageplugin-azure-sites-backend-0114--0115)
  - [`@backstage/plugin-badges-backend` (0.3.1 → 0.3.2)](#backstageplugin-badges-backend-031--032)
  - [`@backstage/plugin-bazaar-backend` (0.3.1 → 0.3.2)](#backstageplugin-bazaar-backend-031--032)
  - [`@backstage/plugin-catalog-backend` (1.13.2 → 1.13.3)](#backstageplugin-catalog-backend-1132--1133)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.2.7 → 0.2.8)](#backstageplugin-catalog-backend-module-aws-027--028)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.1.23 → 0.1.24)](#backstageplugin-catalog-backend-module-azure-0123--0124)
  - [`@backstage/plugin-catalog-backend-module-bitbucket` (0.2.19 → 0.2.20)](#backstageplugin-catalog-backend-module-bitbucket-0219--0220)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.19 → 0.1.20)](#backstageplugin-catalog-backend-module-bitbucket-cloud-0119--0120)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.17 → 0.1.18)](#backstageplugin-catalog-backend-module-bitbucket-server-0117--0118)
  - [`@backstage/plugin-catalog-backend-module-gcp` (0.1.4 → 0.1.5)](#backstageplugin-catalog-backend-module-gcp-014--015)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (0.1.20 → 0.1.21)](#backstageplugin-catalog-backend-module-gerrit-0120--0121)
  - [`@backstage/plugin-catalog-backend-module-github` (0.4.2 → 0.4.3)](#backstageplugin-catalog-backend-module-github-042--043)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.3.1 → 0.3.2)](#backstageplugin-catalog-backend-module-gitlab-031--032)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.8 → 0.4.9)](#backstageplugin-catalog-backend-module-incremental-ingestion-048--049)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.5.19 → 0.5.20)](#backstageplugin-catalog-backend-module-ldap-0519--0520)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.5.11 → 0.5.12)](#backstageplugin-catalog-backend-module-msgraph-0511--0512)
  - [`@backstage/plugin-catalog-backend-module-openapi` (0.1.21 → 0.1.22)](#backstageplugin-catalog-backend-module-openapi-0121--0122)
  - [`@backstage/plugin-catalog-backend-module-puppetdb` (0.1.9 → 0.1.10)](#backstageplugin-catalog-backend-module-puppetdb-019--0110)
  - [`@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.1 → 0.1.2)](#backstageplugin-catalog-backend-module-scaffolder-entity-model-011--012)
  - [`@backstage/plugin-catalog-backend-module-unprocessed` (0.3.1 → 0.3.2)](#backstageplugin-catalog-backend-module-unprocessed-031--032)
  - [`@backstage/plugin-catalog-node` (1.4.5 → 1.4.6)](#backstageplugin-catalog-node-145--146)
  - [`@backstage/plugin-code-coverage-backend` (0.2.18 → 0.2.19)](#backstageplugin-code-coverage-backend-0218--0219)
  - [`@backstage/plugin-devtools-backend` (0.2.1 → 0.2.2)](#backstageplugin-devtools-backend-021--022)
  - [`@backstage/plugin-entity-feedback-backend` (0.2.1 → 0.2.2)](#backstageplugin-entity-feedback-backend-021--022)
  - [`@backstage/plugin-events-backend` (0.2.13 → 0.2.14)](#backstageplugin-events-backend-0213--0214)
  - [`@backstage/plugin-events-backend-module-aws-sqs` (0.2.7 → 0.2.8)](#backstageplugin-events-backend-module-aws-sqs-027--028)
  - [`@backstage/plugin-events-backend-module-azure` (0.1.14 → 0.1.15)](#backstageplugin-events-backend-module-azure-0114--0115)
  - [`@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.14 → 0.1.15)](#backstageplugin-events-backend-module-bitbucket-cloud-0114--0115)
  - [`@backstage/plugin-events-backend-module-gerrit` (0.1.14 → 0.1.15)](#backstageplugin-events-backend-module-gerrit-0114--0115)
  - [`@backstage/plugin-events-backend-module-github` (0.1.14 → 0.1.15)](#backstageplugin-events-backend-module-github-0114--0115)
  - [`@backstage/plugin-events-backend-module-gitlab` (0.1.14 → 0.1.15)](#backstageplugin-events-backend-module-gitlab-0114--0115)
  - [`@backstage/plugin-events-backend-test-utils` (0.1.14 → 0.1.15)](#backstageplugin-events-backend-test-utils-0114--0115)
  - [`@backstage/plugin-events-node` (0.2.13 → 0.2.14)](#backstageplugin-events-node-0213--0214)
  - [`@backstage/plugin-graphql-backend` (0.1.42 → 0.1.43)](#backstageplugin-graphql-backend-0142--0143)
  - [`@backstage/plugin-jenkins-backend` (0.2.7 → 0.2.8)](#backstageplugin-jenkins-backend-027--028)
  - [`@backstage/plugin-kafka-backend` (0.3.1 → 0.3.2)](#backstageplugin-kafka-backend-031--032)
  - [`@backstage/plugin-kubernetes-backend` (0.12.1 → 0.12.2)](#backstageplugin-kubernetes-backend-0121--0122)
  - [`@backstage/plugin-lighthouse-backend` (0.3.1 → 0.3.2)](#backstageplugin-lighthouse-backend-031--032)
  - [`@backstage/plugin-linguist-backend` (0.5.1 → 0.5.2)](#backstageplugin-linguist-backend-051--052)
  - [`@backstage/plugin-nomad-backend` (0.1.6 → 0.1.7)](#backstageplugin-nomad-backend-016--017)
  - [`@backstage/plugin-periskop-backend` (0.2.1 → 0.2.2)](#backstageplugin-periskop-backend-021--022)
  - [`@backstage/plugin-permission-backend` (0.5.27 → 0.5.28)](#backstageplugin-permission-backend-0527--0528)
  - [`@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.1 → 0.1.2)](#backstageplugin-permission-backend-module-allow-all-policy-011--012)
  - [`@backstage/plugin-permission-node` (0.7.15 → 0.7.16)](#backstageplugin-permission-node-0715--0716)
  - [`@backstage/plugin-playlist-backend` (0.3.8 → 0.3.9)](#backstageplugin-playlist-backend-038--039)
  - [`@backstage/plugin-proxy-backend` (0.4.1 → 0.4.2)](#backstageplugin-proxy-backend-041--042)
  - [`@backstage/plugin-rollbar-backend` (0.1.49 → 0.1.50)](#backstageplugin-rollbar-backend-0149--0150)
  - [`@backstage/plugin-scaffolder-backend` (1.17.2 → 1.17.3)](#backstageplugin-scaffolder-backend-1172--1173)
  - [`@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.5 → 0.2.6)](#backstageplugin-scaffolder-backend-module-confluence-to-markdown-025--026)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.28 → 0.2.29)](#backstageplugin-scaffolder-backend-module-cookiecutter-0228--0229)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.2.7 → 0.2.8)](#backstageplugin-scaffolder-backend-module-gitlab-027--028)
  - [`@backstage/plugin-scaffolder-backend-module-rails` (0.4.21 → 0.4.22)](#backstageplugin-scaffolder-backend-module-rails-0421--0422)
  - [`@backstage/plugin-scaffolder-backend-module-sentry` (0.1.12 → 0.1.13)](#backstageplugin-scaffolder-backend-module-sentry-0112--0113)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.25 → 0.2.26)](#backstageplugin-scaffolder-backend-module-yeoman-0225--0226)
  - [`@backstage/plugin-scaffolder-node` (0.2.4 → 0.2.5)](#backstageplugin-scaffolder-node-024--025)
  - [`@backstage/plugin-search-backend` (1.4.4 → 1.4.5)](#backstageplugin-search-backend-144--145)
  - [`@backstage/plugin-search-backend-module-catalog` (0.1.8 → 0.1.9)](#backstageplugin-search-backend-module-catalog-018--019)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.3.7 → 1.3.8)](#backstageplugin-search-backend-module-elasticsearch-137--138)
  - [`@backstage/plugin-search-backend-module-explore` (0.1.8 → 0.1.9)](#backstageplugin-search-backend-module-explore-018--019)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.13 → 0.5.14)](#backstageplugin-search-backend-module-pg-0513--0514)
  - [`@backstage/plugin-search-backend-module-techdocs` (0.1.8 → 0.1.9)](#backstageplugin-search-backend-module-techdocs-018--019)
  - [`@backstage/plugin-search-backend-node` (1.2.8 → 1.2.9)](#backstageplugin-search-backend-node-128--129)
  - [`@backstage/plugin-sonarqube-backend` (0.2.6 → 0.2.7)](#backstageplugin-sonarqube-backend-026--027)
  - [`@backstage/plugin-stack-overflow-backend` (0.2.8 → 0.2.9)](#backstageplugin-stack-overflow-backend-028--029)
  - [`@backstage/plugin-tech-insights-backend` (0.5.18 → 0.5.19)](#backstageplugin-tech-insights-backend-0518--0519)
  - [`@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.36 → 0.1.37)](#backstageplugin-tech-insights-backend-module-jsonfc-0136--0137)
  - [`@backstage/plugin-tech-insights-node` (0.4.10 → 0.4.11)](#backstageplugin-tech-insights-node-0410--0411)
  - [`@backstage/plugin-techdocs-backend` (1.7.1 → 1.7.2)](#backstageplugin-techdocs-backend-171--172)
  - [`@backstage/plugin-techdocs-node` (1.8.1 → 1.8.2)](#backstageplugin-techdocs-node-181--182)
  - [`@backstage/plugin-todo-backend` (0.3.2 → 0.3.3)](#backstageplugin-todo-backend-032--033)
  - [`@backstage/plugin-user-settings-backend` (0.2.2 → 0.2.3)](#backstageplugin-user-settings-backend-022--023)
  - [`@backstage/plugin-vault-backend` (0.3.9 → 0.3.10)](#backstageplugin-vault-backend-039--0310)
  - [`@techdocs/cli` (1.5.1 → 1.5.2)](#techdocscli-151--152)

## 0.0.x patch version bumps

### `@backstage/plugin-explore-backend` (0.0.14 → [0.0.15](../../changelogs/@backstage/plugin-explore-backend.md#0015))

_No changelog entries found._

## Other patch version bumps

### `@backstage/backend-app-api` (0.5.4 → [0.5.5](../../changelogs/@backstage/backend-app-api.md#055))

_No changelog entries found._

### `@backstage/backend-common` (0.19.6 → [0.19.7](../../changelogs/@backstage/backend-common.md#0197))

_No changelog entries found._

### `@backstage/backend-defaults` (0.2.4 → [0.2.5](../../changelogs/@backstage/backend-defaults.md#025))

_No changelog entries found._

### `@backstage/backend-plugin-api` (0.6.4 → [0.6.5](../../changelogs/@backstage/backend-plugin-api.md#065))

_No changelog entries found._

### `@backstage/backend-tasks` (0.5.9 → [0.5.10](../../changelogs/@backstage/backend-tasks.md#0510))

_No changelog entries found._

### `@backstage/backend-test-utils` (0.2.5 → [0.2.6](../../changelogs/@backstage/backend-test-utils.md#026))

_No changelog entries found._

### `@backstage/plugin-adr-backend` (0.4.1 → [0.4.2](../../changelogs/@backstage/plugin-adr-backend.md#042))

_No changelog entries found._

### `@backstage/plugin-airbrake-backend` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-airbrake-backend.md#032))

_No changelog entries found._

### `@backstage/plugin-app-backend` (0.3.52 → [0.3.53](../../changelogs/@backstage/plugin-app-backend.md#0353))

_No changelog entries found._

### `@backstage/plugin-app-node` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-app-node.md#015))

_No changelog entries found._

### `@backstage/plugin-auth-backend` (0.19.1 → [0.19.2](../../changelogs/@backstage/plugin-auth-backend.md#0192))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#012))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-github-provider` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#012))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#012))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-google-provider` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#012))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-oauth2-provider` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#012))

_No changelog entries found._

### `@backstage/plugin-auth-node` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-auth-node.md#032))

_No changelog entries found._

### `@backstage/plugin-azure-devops-backend` (0.4.1 → [0.4.2](../../changelogs/@backstage/plugin-azure-devops-backend.md#042))

_No changelog entries found._

### `@backstage/plugin-azure-sites-backend` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-azure-sites-backend.md#0115))

_No changelog entries found._

### `@backstage/plugin-badges-backend` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-badges-backend.md#032))

_No changelog entries found._

### `@backstage/plugin-bazaar-backend` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-bazaar-backend.md#032))

_No changelog entries found._

### `@backstage/plugin-catalog-backend` (1.13.2 → [1.13.3](../../changelogs/@backstage/plugin-catalog-backend.md#1133))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-aws` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#028))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-azure` (0.1.23 → [0.1.24](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0124))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-bitbucket` (0.2.19 → [0.2.20](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket.md#0220))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.19 → [0.1.20](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#0120))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.17 → [0.1.18](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#0118))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gcp` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#015))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gerrit` (0.1.20 → [0.1.21](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0121))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-github` (0.4.2 → [0.4.3](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#043))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gitlab` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#032))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.8 → [0.4.9](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#049))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-ldap` (0.5.19 → [0.5.20](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0520))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-msgraph` (0.5.11 → [0.5.12](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#0512))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-openapi` (0.1.21 → [0.1.22](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0122))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-puppetdb` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0110))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#012))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#032))

_No changelog entries found._

### `@backstage/plugin-catalog-node` (1.4.5 → [1.4.6](../../changelogs/@backstage/plugin-catalog-node.md#146))

_No changelog entries found._

### `@backstage/plugin-code-coverage-backend` (0.2.18 → [0.2.19](../../changelogs/@backstage/plugin-code-coverage-backend.md#0219))

_No changelog entries found._

### `@backstage/plugin-devtools-backend` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-devtools-backend.md#022))

_No changelog entries found._

### `@backstage/plugin-entity-feedback-backend` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-entity-feedback-backend.md#022))

_No changelog entries found._

### `@backstage/plugin-events-backend` (0.2.13 → [0.2.14](../../changelogs/@backstage/plugin-events-backend.md#0214))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-aws-sqs` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#028))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-azure` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-events-backend-module-azure.md#0115))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0115))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-gerrit` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0115))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-github` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-events-backend-module-github.md#0115))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-gitlab` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#0115))

_No changelog entries found._

### `@backstage/plugin-events-backend-test-utils` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0115))

_No changelog entries found._

### `@backstage/plugin-events-node` (0.2.13 → [0.2.14](../../changelogs/@backstage/plugin-events-node.md#0214))

_No changelog entries found._

### `@backstage/plugin-graphql-backend` (0.1.42 → [0.1.43](../../changelogs/@backstage/plugin-graphql-backend.md#0143))

_No changelog entries found._

### `@backstage/plugin-jenkins-backend` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-jenkins-backend.md#028))

_No changelog entries found._

### `@backstage/plugin-kafka-backend` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-kafka-backend.md#032))

_No changelog entries found._

### `@backstage/plugin-kubernetes-backend` (0.12.1 → [0.12.2](../../changelogs/@backstage/plugin-kubernetes-backend.md#0122))

_No changelog entries found._

### `@backstage/plugin-lighthouse-backend` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-lighthouse-backend.md#032))

_No changelog entries found._

### `@backstage/plugin-linguist-backend` (0.5.1 → [0.5.2](../../changelogs/@backstage/plugin-linguist-backend.md#052))

_No changelog entries found._

### `@backstage/plugin-nomad-backend` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-nomad-backend.md#017))

_No changelog entries found._

### `@backstage/plugin-periskop-backend` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-periskop-backend.md#022))

_No changelog entries found._

### `@backstage/plugin-permission-backend` (0.5.27 → [0.5.28](../../changelogs/@backstage/plugin-permission-backend.md#0528))

_No changelog entries found._

### `@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#012))

_No changelog entries found._

### `@backstage/plugin-permission-node` (0.7.15 → [0.7.16](../../changelogs/@backstage/plugin-permission-node.md#0716))

_No changelog entries found._

### `@backstage/plugin-playlist-backend` (0.3.8 → [0.3.9](../../changelogs/@backstage/plugin-playlist-backend.md#039))

_No changelog entries found._

### `@backstage/plugin-proxy-backend` (0.4.1 → [0.4.2](../../changelogs/@backstage/plugin-proxy-backend.md#042))

_No changelog entries found._

### `@backstage/plugin-rollbar-backend` (0.1.49 → [0.1.50](../../changelogs/@backstage/plugin-rollbar-backend.md#0150))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend` (1.17.2 → [1.17.3](../../changelogs/@backstage/plugin-scaffolder-backend.md#1173))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#026))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.28 → [0.2.29](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0229))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#028))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-rails` (0.4.21 → [0.4.22](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0422))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-sentry` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#0113))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.25 → [0.2.26](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0226))

_No changelog entries found._

### `@backstage/plugin-scaffolder-node` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-scaffolder-node.md#025))

_No changelog entries found._

### `@backstage/plugin-search-backend` (1.4.4 → [1.4.5](../../changelogs/@backstage/plugin-search-backend.md#145))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-catalog` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#019))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-elasticsearch` (1.3.7 → [1.3.8](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#138))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-explore` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-search-backend-module-explore.md#019))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-pg` (0.5.13 → [0.5.14](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0514))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-techdocs` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#019))

_No changelog entries found._

### `@backstage/plugin-search-backend-node` (1.2.8 → [1.2.9](../../changelogs/@backstage/plugin-search-backend-node.md#129))

_No changelog entries found._

### `@backstage/plugin-sonarqube-backend` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-sonarqube-backend.md#027))

_No changelog entries found._

### `@backstage/plugin-stack-overflow-backend` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-stack-overflow-backend.md#029))

_No changelog entries found._

### `@backstage/plugin-tech-insights-backend` (0.5.18 → [0.5.19](../../changelogs/@backstage/plugin-tech-insights-backend.md#0519))

_No changelog entries found._

### `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.36 → [0.1.37](../../changelogs/@backstage/plugin-tech-insights-backend-module-jsonfc.md#0137))

_No changelog entries found._

### `@backstage/plugin-tech-insights-node` (0.4.10 → [0.4.11](../../changelogs/@backstage/plugin-tech-insights-node.md#0411))

_No changelog entries found._

### `@backstage/plugin-techdocs-backend` (1.7.1 → [1.7.2](../../changelogs/@backstage/plugin-techdocs-backend.md#172))

_No changelog entries found._

### `@backstage/plugin-techdocs-node` (1.8.1 → [1.8.2](../../changelogs/@backstage/plugin-techdocs-node.md#182))

_No changelog entries found._

### `@backstage/plugin-todo-backend` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-todo-backend.md#033))

_No changelog entries found._

### `@backstage/plugin-user-settings-backend` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-user-settings-backend.md#023))

_No changelog entries found._

### `@backstage/plugin-vault-backend` (0.3.9 → [0.3.10](../../changelogs/@backstage/plugin-vault-backend.md#0310))

_No changelog entries found._

### `@techdocs/cli` (1.5.1 → [1.5.2](../../changelogs/@techdocs/cli.md#152))

_No changelog entries found._
