# Backstage Release 1.18.3 changelog

Changes between 1.18.2 and 1.18.3 — 92 changed and 0 added packages.

## Summary

- [0.0.x patch version bumps](#00x-patch-version-bumps): 1 package
- [Other patch version bumps](#other-patch-version-bumps): 91 packages

## Table of contents

- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-explore-backend` (0.0.13 → 0.0.14)](#backstageplugin-explore-backend-0013--0014)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-app-api` (0.5.3 → 0.5.4)](#backstagebackend-app-api-053--054)
  - [`@backstage/backend-common` (0.19.5 → 0.19.6)](#backstagebackend-common-0195--0196)
  - [`@backstage/backend-defaults` (0.2.3 → 0.2.4)](#backstagebackend-defaults-023--024)
  - [`@backstage/backend-plugin-api` (0.6.3 → 0.6.4)](#backstagebackend-plugin-api-063--064)
  - [`@backstage/backend-tasks` (0.5.8 → 0.5.9)](#backstagebackend-tasks-058--059)
  - [`@backstage/backend-test-utils` (0.2.4 → 0.2.5)](#backstagebackend-test-utils-024--025)
  - [`@backstage/plugin-adr-backend` (0.4.0 → 0.4.1)](#backstageplugin-adr-backend-040--041)
  - [`@backstage/plugin-airbrake-backend` (0.3.0 → 0.3.1)](#backstageplugin-airbrake-backend-030--031)
  - [`@backstage/plugin-app-backend` (0.3.51 → 0.3.52)](#backstageplugin-app-backend-0351--0352)
  - [`@backstage/plugin-app-node` (0.1.3 → 0.1.4)](#backstageplugin-app-node-013--014)
  - [`@backstage/plugin-auth-backend` (0.19.0 → 0.19.1)](#backstageplugin-auth-backend-0190--0191)
  - [`@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.1.0 → 0.1.1)](#backstageplugin-auth-backend-module-gcp-iap-provider-010--011)
  - [`@backstage/plugin-auth-backend-module-github-provider` (0.1.0 → 0.1.1)](#backstageplugin-auth-backend-module-github-provider-010--011)
  - [`@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.0 → 0.1.1)](#backstageplugin-auth-backend-module-gitlab-provider-010--011)
  - [`@backstage/plugin-auth-backend-module-google-provider` (0.1.0 → 0.1.1)](#backstageplugin-auth-backend-module-google-provider-010--011)
  - [`@backstage/plugin-auth-backend-module-oauth2-provider` (0.1.0 → 0.1.1)](#backstageplugin-auth-backend-module-oauth2-provider-010--011)
  - [`@backstage/plugin-auth-node` (0.3.0 → 0.3.1)](#backstageplugin-auth-node-030--031)
  - [`@backstage/plugin-azure-devops-backend` (0.4.0 → 0.4.1)](#backstageplugin-azure-devops-backend-040--041)
  - [`@backstage/plugin-azure-sites-backend` (0.1.13 → 0.1.14)](#backstageplugin-azure-sites-backend-0113--0114)
  - [`@backstage/plugin-badges-backend` (0.3.0 → 0.3.1)](#backstageplugin-badges-backend-030--031)
  - [`@backstage/plugin-bazaar-backend` (0.3.0 → 0.3.1)](#backstageplugin-bazaar-backend-030--031)
  - [`@backstage/plugin-catalog-backend` (1.13.1 → 1.13.2)](#backstageplugin-catalog-backend-1131--1132)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.2.6 → 0.2.7)](#backstageplugin-catalog-backend-module-aws-026--027)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.1.22 → 0.1.23)](#backstageplugin-catalog-backend-module-azure-0122--0123)
  - [`@backstage/plugin-catalog-backend-module-bitbucket` (0.2.18 → 0.2.19)](#backstageplugin-catalog-backend-module-bitbucket-0218--0219)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.18 → 0.1.19)](#backstageplugin-catalog-backend-module-bitbucket-cloud-0118--0119)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.16 → 0.1.17)](#backstageplugin-catalog-backend-module-bitbucket-server-0116--0117)
  - [`@backstage/plugin-catalog-backend-module-gcp` (0.1.3 → 0.1.4)](#backstageplugin-catalog-backend-module-gcp-013--014)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (0.1.19 → 0.1.20)](#backstageplugin-catalog-backend-module-gerrit-0119--0120)
  - [`@backstage/plugin-catalog-backend-module-github` (0.4.1 → 0.4.2)](#backstageplugin-catalog-backend-module-github-041--042)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.3.0 → 0.3.1)](#backstageplugin-catalog-backend-module-gitlab-030--031)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.7 → 0.4.8)](#backstageplugin-catalog-backend-module-incremental-ingestion-047--048)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.5.18 → 0.5.19)](#backstageplugin-catalog-backend-module-ldap-0518--0519)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.5.10 → 0.5.11)](#backstageplugin-catalog-backend-module-msgraph-0510--0511)
  - [`@backstage/plugin-catalog-backend-module-openapi` (0.1.20 → 0.1.21)](#backstageplugin-catalog-backend-module-openapi-0120--0121)
  - [`@backstage/plugin-catalog-backend-module-puppetdb` (0.1.8 → 0.1.9)](#backstageplugin-catalog-backend-module-puppetdb-018--019)
  - [`@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.0 → 0.1.1)](#backstageplugin-catalog-backend-module-scaffolder-entity-model-010--011)
  - [`@backstage/plugin-catalog-backend-module-unprocessed` (0.3.0 → 0.3.1)](#backstageplugin-catalog-backend-module-unprocessed-030--031)
  - [`@backstage/plugin-catalog-node` (1.4.4 → 1.4.5)](#backstageplugin-catalog-node-144--145)
  - [`@backstage/plugin-code-coverage-backend` (0.2.17 → 0.2.18)](#backstageplugin-code-coverage-backend-0217--0218)
  - [`@backstage/plugin-devtools-backend` (0.2.0 → 0.2.1)](#backstageplugin-devtools-backend-020--021)
  - [`@backstage/plugin-entity-feedback-backend` (0.2.0 → 0.2.1)](#backstageplugin-entity-feedback-backend-020--021)
  - [`@backstage/plugin-events-backend` (0.2.12 → 0.2.13)](#backstageplugin-events-backend-0212--0213)
  - [`@backstage/plugin-events-backend-module-aws-sqs` (0.2.6 → 0.2.7)](#backstageplugin-events-backend-module-aws-sqs-026--027)
  - [`@backstage/plugin-events-backend-module-azure` (0.1.13 → 0.1.14)](#backstageplugin-events-backend-module-azure-0113--0114)
  - [`@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.13 → 0.1.14)](#backstageplugin-events-backend-module-bitbucket-cloud-0113--0114)
  - [`@backstage/plugin-events-backend-module-gerrit` (0.1.13 → 0.1.14)](#backstageplugin-events-backend-module-gerrit-0113--0114)
  - [`@backstage/plugin-events-backend-module-github` (0.1.13 → 0.1.14)](#backstageplugin-events-backend-module-github-0113--0114)
  - [`@backstage/plugin-events-backend-module-gitlab` (0.1.13 → 0.1.14)](#backstageplugin-events-backend-module-gitlab-0113--0114)
  - [`@backstage/plugin-events-backend-test-utils` (0.1.13 → 0.1.14)](#backstageplugin-events-backend-test-utils-0113--0114)
  - [`@backstage/plugin-events-node` (0.2.12 → 0.2.13)](#backstageplugin-events-node-0212--0213)
  - [`@backstage/plugin-graphql-backend` (0.1.41 → 0.1.42)](#backstageplugin-graphql-backend-0141--0142)
  - [`@backstage/plugin-jenkins-backend` (0.2.6 → 0.2.7)](#backstageplugin-jenkins-backend-026--027)
  - [`@backstage/plugin-kafka-backend` (0.3.0 → 0.3.1)](#backstageplugin-kafka-backend-030--031)
  - [`@backstage/plugin-kubernetes-backend` (0.12.0 → 0.12.1)](#backstageplugin-kubernetes-backend-0120--0121)
  - [`@backstage/plugin-lighthouse-backend` (0.3.0 → 0.3.1)](#backstageplugin-lighthouse-backend-030--031)
  - [`@backstage/plugin-linguist-backend` (0.5.0 → 0.5.1)](#backstageplugin-linguist-backend-050--051)
  - [`@backstage/plugin-nomad-backend` (0.1.5 → 0.1.6)](#backstageplugin-nomad-backend-015--016)
  - [`@backstage/plugin-periskop-backend` (0.2.0 → 0.2.1)](#backstageplugin-periskop-backend-020--021)
  - [`@backstage/plugin-permission-backend` (0.5.26 → 0.5.27)](#backstageplugin-permission-backend-0526--0527)
  - [`@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.0 → 0.1.1)](#backstageplugin-permission-backend-module-allow-all-policy-010--011)
  - [`@backstage/plugin-permission-node` (0.7.14 → 0.7.15)](#backstageplugin-permission-node-0714--0715)
  - [`@backstage/plugin-playlist-backend` (0.3.7 → 0.3.8)](#backstageplugin-playlist-backend-037--038)
  - [`@backstage/plugin-proxy-backend` (0.4.0 → 0.4.1)](#backstageplugin-proxy-backend-040--041)
  - [`@backstage/plugin-rollbar-backend` (0.1.48 → 0.1.49)](#backstageplugin-rollbar-backend-0148--0149)
  - [`@backstage/plugin-scaffolder-backend` (1.17.1 → 1.17.2)](#backstageplugin-scaffolder-backend-1171--1172)
  - [`@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.4 → 0.2.5)](#backstageplugin-scaffolder-backend-module-confluence-to-markdown-024--025)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.27 → 0.2.28)](#backstageplugin-scaffolder-backend-module-cookiecutter-0227--0228)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.2.6 → 0.2.7)](#backstageplugin-scaffolder-backend-module-gitlab-026--027)
  - [`@backstage/plugin-scaffolder-backend-module-rails` (0.4.20 → 0.4.21)](#backstageplugin-scaffolder-backend-module-rails-0420--0421)
  - [`@backstage/plugin-scaffolder-backend-module-sentry` (0.1.11 → 0.1.12)](#backstageplugin-scaffolder-backend-module-sentry-0111--0112)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.24 → 0.2.25)](#backstageplugin-scaffolder-backend-module-yeoman-0224--0225)
  - [`@backstage/plugin-scaffolder-node` (0.2.3 → 0.2.4)](#backstageplugin-scaffolder-node-023--024)
  - [`@backstage/plugin-search-backend` (1.4.3 → 1.4.4)](#backstageplugin-search-backend-143--144)
  - [`@backstage/plugin-search-backend-module-catalog` (0.1.7 → 0.1.8)](#backstageplugin-search-backend-module-catalog-017--018)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.3.6 → 1.3.7)](#backstageplugin-search-backend-module-elasticsearch-136--137)
  - [`@backstage/plugin-search-backend-module-explore` (0.1.7 → 0.1.8)](#backstageplugin-search-backend-module-explore-017--018)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.12 → 0.5.13)](#backstageplugin-search-backend-module-pg-0512--0513)
  - [`@backstage/plugin-search-backend-module-techdocs` (0.1.7 → 0.1.8)](#backstageplugin-search-backend-module-techdocs-017--018)
  - [`@backstage/plugin-search-backend-node` (1.2.7 → 1.2.8)](#backstageplugin-search-backend-node-127--128)
  - [`@backstage/plugin-sonarqube-backend` (0.2.5 → 0.2.6)](#backstageplugin-sonarqube-backend-025--026)
  - [`@backstage/plugin-stack-overflow-backend` (0.2.7 → 0.2.8)](#backstageplugin-stack-overflow-backend-027--028)
  - [`@backstage/plugin-tech-insights-backend` (0.5.17 → 0.5.18)](#backstageplugin-tech-insights-backend-0517--0518)
  - [`@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.35 → 0.1.36)](#backstageplugin-tech-insights-backend-module-jsonfc-0135--0136)
  - [`@backstage/plugin-tech-insights-node` (0.4.9 → 0.4.10)](#backstageplugin-tech-insights-node-049--0410)
  - [`@backstage/plugin-techdocs-backend` (1.7.0 → 1.7.1)](#backstageplugin-techdocs-backend-170--171)
  - [`@backstage/plugin-techdocs-node` (1.8.0 → 1.8.1)](#backstageplugin-techdocs-node-180--181)
  - [`@backstage/plugin-todo-backend` (0.3.1 → 0.3.2)](#backstageplugin-todo-backend-031--032)
  - [`@backstage/plugin-user-settings-backend` (0.2.1 → 0.2.2)](#backstageplugin-user-settings-backend-021--022)
  - [`@backstage/plugin-vault-backend` (0.3.8 → 0.3.9)](#backstageplugin-vault-backend-038--039)
  - [`@techdocs/cli` (1.5.0 → 1.5.1)](#techdocscli-150--151)

## 0.0.x patch version bumps

### `@backstage/plugin-explore-backend` (0.0.13 → [0.0.14](../../changelogs/@backstage/plugin-explore-backend.md#0014))

_No changelog entries found._

## Other patch version bumps

### `@backstage/backend-app-api` (0.5.3 → [0.5.4](../../changelogs/@backstage/backend-app-api.md#054))

_No changelog entries found._

### `@backstage/backend-common` (0.19.5 → [0.19.6](../../changelogs/@backstage/backend-common.md#0196))

_No changelog entries found._

### `@backstage/backend-defaults` (0.2.3 → [0.2.4](../../changelogs/@backstage/backend-defaults.md#024))

_No changelog entries found._

### `@backstage/backend-plugin-api` (0.6.3 → [0.6.4](../../changelogs/@backstage/backend-plugin-api.md#064))

_No changelog entries found._

### `@backstage/backend-tasks` (0.5.8 → [0.5.9](../../changelogs/@backstage/backend-tasks.md#059))

_No changelog entries found._

### `@backstage/backend-test-utils` (0.2.4 → [0.2.5](../../changelogs/@backstage/backend-test-utils.md#025))

_No changelog entries found._

### `@backstage/plugin-adr-backend` (0.4.0 → [0.4.1](../../changelogs/@backstage/plugin-adr-backend.md#041))

_No changelog entries found._

### `@backstage/plugin-airbrake-backend` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-airbrake-backend.md#031))

_No changelog entries found._

### `@backstage/plugin-app-backend` (0.3.51 → [0.3.52](../../changelogs/@backstage/plugin-app-backend.md#0352))

_No changelog entries found._

### `@backstage/plugin-app-node` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-app-node.md#014))

_No changelog entries found._

### `@backstage/plugin-auth-backend` (0.19.0 → [0.19.1](../../changelogs/@backstage/plugin-auth-backend.md#0191))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#011))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-github-provider` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#011))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#011))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-google-provider` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#011))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-oauth2-provider` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#011))

_No changelog entries found._

### `@backstage/plugin-auth-node` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-auth-node.md#031))

_No changelog entries found._

### `@backstage/plugin-azure-devops-backend` (0.4.0 → [0.4.1](../../changelogs/@backstage/plugin-azure-devops-backend.md#041))

_No changelog entries found._

### `@backstage/plugin-azure-sites-backend` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-azure-sites-backend.md#0114))

_No changelog entries found._

### `@backstage/plugin-badges-backend` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-badges-backend.md#031))

_No changelog entries found._

### `@backstage/plugin-bazaar-backend` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-bazaar-backend.md#031))

_No changelog entries found._

### `@backstage/plugin-catalog-backend` (1.13.1 → [1.13.2](../../changelogs/@backstage/plugin-catalog-backend.md#1132))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-aws` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#027))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-azure` (0.1.22 → [0.1.23](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0123))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-bitbucket` (0.2.18 → [0.2.19](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket.md#0219))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#0119))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#0117))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gcp` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#014))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gerrit` (0.1.19 → [0.1.20](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0120))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-github` (0.4.1 → [0.4.2](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#042))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gitlab` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#031))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.7 → [0.4.8](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#048))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-ldap` (0.5.18 → [0.5.19](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0519))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-msgraph` (0.5.10 → [0.5.11](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#0511))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-openapi` (0.1.20 → [0.1.21](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0121))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-puppetdb` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#019))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#011))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#031))

_No changelog entries found._

### `@backstage/plugin-catalog-node` (1.4.4 → [1.4.5](../../changelogs/@backstage/plugin-catalog-node.md#145))

_No changelog entries found._

### `@backstage/plugin-code-coverage-backend` (0.2.17 → [0.2.18](../../changelogs/@backstage/plugin-code-coverage-backend.md#0218))

_No changelog entries found._

### `@backstage/plugin-devtools-backend` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-devtools-backend.md#021))

_No changelog entries found._

### `@backstage/plugin-entity-feedback-backend` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-entity-feedback-backend.md#021))

_No changelog entries found._

### `@backstage/plugin-events-backend` (0.2.12 → [0.2.13](../../changelogs/@backstage/plugin-events-backend.md#0213))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-aws-sqs` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#027))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-azure` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-events-backend-module-azure.md#0114))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0114))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-gerrit` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0114))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-github` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-events-backend-module-github.md#0114))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-gitlab` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#0114))

_No changelog entries found._

### `@backstage/plugin-events-backend-test-utils` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0114))

_No changelog entries found._

### `@backstage/plugin-events-node` (0.2.12 → [0.2.13](../../changelogs/@backstage/plugin-events-node.md#0213))

_No changelog entries found._

### `@backstage/plugin-graphql-backend` (0.1.41 → [0.1.42](../../changelogs/@backstage/plugin-graphql-backend.md#0142))

_No changelog entries found._

### `@backstage/plugin-jenkins-backend` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-jenkins-backend.md#027))

_No changelog entries found._

### `@backstage/plugin-kafka-backend` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-kafka-backend.md#031))

_No changelog entries found._

### `@backstage/plugin-kubernetes-backend` (0.12.0 → [0.12.1](../../changelogs/@backstage/plugin-kubernetes-backend.md#0121))

_No changelog entries found._

### `@backstage/plugin-lighthouse-backend` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-lighthouse-backend.md#031))

_No changelog entries found._

### `@backstage/plugin-linguist-backend` (0.5.0 → [0.5.1](../../changelogs/@backstage/plugin-linguist-backend.md#051))

_No changelog entries found._

### `@backstage/plugin-nomad-backend` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-nomad-backend.md#016))

_No changelog entries found._

### `@backstage/plugin-periskop-backend` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-periskop-backend.md#021))

_No changelog entries found._

### `@backstage/plugin-permission-backend` (0.5.26 → [0.5.27](../../changelogs/@backstage/plugin-permission-backend.md#0527))

_No changelog entries found._

### `@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#011))

_No changelog entries found._

### `@backstage/plugin-permission-node` (0.7.14 → [0.7.15](../../changelogs/@backstage/plugin-permission-node.md#0715))

_No changelog entries found._

### `@backstage/plugin-playlist-backend` (0.3.7 → [0.3.8](../../changelogs/@backstage/plugin-playlist-backend.md#038))

_No changelog entries found._

### `@backstage/plugin-proxy-backend` (0.4.0 → [0.4.1](../../changelogs/@backstage/plugin-proxy-backend.md#041))

_No changelog entries found._

### `@backstage/plugin-rollbar-backend` (0.1.48 → [0.1.49](../../changelogs/@backstage/plugin-rollbar-backend.md#0149))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend` (1.17.1 → [1.17.2](../../changelogs/@backstage/plugin-scaffolder-backend.md#1172))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#025))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.27 → [0.2.28](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0228))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#027))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-rails` (0.4.20 → [0.4.21](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0421))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-sentry` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#0112))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.24 → [0.2.25](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0225))

_No changelog entries found._

### `@backstage/plugin-scaffolder-node` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-scaffolder-node.md#024))

_No changelog entries found._

### `@backstage/plugin-search-backend` (1.4.3 → [1.4.4](../../changelogs/@backstage/plugin-search-backend.md#144))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-catalog` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#018))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-elasticsearch` (1.3.6 → [1.3.7](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#137))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-explore` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-search-backend-module-explore.md#018))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-pg` (0.5.12 → [0.5.13](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0513))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-techdocs` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#018))

_No changelog entries found._

### `@backstage/plugin-search-backend-node` (1.2.7 → [1.2.8](../../changelogs/@backstage/plugin-search-backend-node.md#128))

_No changelog entries found._

### `@backstage/plugin-sonarqube-backend` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-sonarqube-backend.md#026))

_No changelog entries found._

### `@backstage/plugin-stack-overflow-backend` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-stack-overflow-backend.md#028))

_No changelog entries found._

### `@backstage/plugin-tech-insights-backend` (0.5.17 → [0.5.18](../../changelogs/@backstage/plugin-tech-insights-backend.md#0518))

_No changelog entries found._

### `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.35 → [0.1.36](../../changelogs/@backstage/plugin-tech-insights-backend-module-jsonfc.md#0136))

_No changelog entries found._

### `@backstage/plugin-tech-insights-node` (0.4.9 → [0.4.10](../../changelogs/@backstage/plugin-tech-insights-node.md#0410))

_No changelog entries found._

### `@backstage/plugin-techdocs-backend` (1.7.0 → [1.7.1](../../changelogs/@backstage/plugin-techdocs-backend.md#171))

_No changelog entries found._

### `@backstage/plugin-techdocs-node` (1.8.0 → [1.8.1](../../changelogs/@backstage/plugin-techdocs-node.md#181))

_No changelog entries found._

### `@backstage/plugin-todo-backend` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-todo-backend.md#032))

_No changelog entries found._

### `@backstage/plugin-user-settings-backend` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-user-settings-backend.md#022))

_No changelog entries found._

### `@backstage/plugin-vault-backend` (0.3.8 → [0.3.9](../../changelogs/@backstage/plugin-vault-backend.md#039))

_No changelog entries found._

### `@techdocs/cli` (1.5.0 → [1.5.1](../../changelogs/@techdocs/cli.md#151))

_No changelog entries found._
