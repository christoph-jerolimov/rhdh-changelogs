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

### `@backstage/plugin-explore-backend` (0.0.13 → 0.0.14)

_No changelog entries found._

## Other patch version bumps

### `@backstage/backend-app-api` (0.5.3 → 0.5.4)

_No changelog entries found._

### `@backstage/backend-common` (0.19.5 → 0.19.6)

_No changelog entries found._

### `@backstage/backend-defaults` (0.2.3 → 0.2.4)

_No changelog entries found._

### `@backstage/backend-plugin-api` (0.6.3 → 0.6.4)

_No changelog entries found._

### `@backstage/backend-tasks` (0.5.8 → 0.5.9)

_No changelog entries found._

### `@backstage/backend-test-utils` (0.2.4 → 0.2.5)

_No changelog entries found._

### `@backstage/plugin-adr-backend` (0.4.0 → 0.4.1)

_No changelog entries found._

### `@backstage/plugin-airbrake-backend` (0.3.0 → 0.3.1)

_No changelog entries found._

### `@backstage/plugin-app-backend` (0.3.51 → 0.3.52)

_No changelog entries found._

### `@backstage/plugin-app-node` (0.1.3 → 0.1.4)

_No changelog entries found._

### `@backstage/plugin-auth-backend` (0.19.0 → 0.19.1)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.1.0 → 0.1.1)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-github-provider` (0.1.0 → 0.1.1)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.0 → 0.1.1)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-google-provider` (0.1.0 → 0.1.1)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-oauth2-provider` (0.1.0 → 0.1.1)

_No changelog entries found._

### `@backstage/plugin-auth-node` (0.3.0 → 0.3.1)

_No changelog entries found._

### `@backstage/plugin-azure-devops-backend` (0.4.0 → 0.4.1)

_No changelog entries found._

### `@backstage/plugin-azure-sites-backend` (0.1.13 → 0.1.14)

_No changelog entries found._

### `@backstage/plugin-badges-backend` (0.3.0 → 0.3.1)

_No changelog entries found._

### `@backstage/plugin-bazaar-backend` (0.3.0 → 0.3.1)

_No changelog entries found._

### `@backstage/plugin-catalog-backend` (1.13.1 → 1.13.2)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-aws` (0.2.6 → 0.2.7)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-azure` (0.1.22 → 0.1.23)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-bitbucket` (0.2.18 → 0.2.19)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.18 → 0.1.19)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.16 → 0.1.17)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gcp` (0.1.3 → 0.1.4)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gerrit` (0.1.19 → 0.1.20)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-github` (0.4.1 → 0.4.2)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gitlab` (0.3.0 → 0.3.1)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.7 → 0.4.8)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-ldap` (0.5.18 → 0.5.19)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-msgraph` (0.5.10 → 0.5.11)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-openapi` (0.1.20 → 0.1.21)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-puppetdb` (0.1.8 → 0.1.9)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.0 → 0.1.1)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.3.0 → 0.3.1)

_No changelog entries found._

### `@backstage/plugin-catalog-node` (1.4.4 → 1.4.5)

_No changelog entries found._

### `@backstage/plugin-code-coverage-backend` (0.2.17 → 0.2.18)

_No changelog entries found._

### `@backstage/plugin-devtools-backend` (0.2.0 → 0.2.1)

_No changelog entries found._

### `@backstage/plugin-entity-feedback-backend` (0.2.0 → 0.2.1)

_No changelog entries found._

### `@backstage/plugin-events-backend` (0.2.12 → 0.2.13)

_No changelog entries found._

### `@backstage/plugin-events-backend-module-aws-sqs` (0.2.6 → 0.2.7)

_No changelog entries found._

### `@backstage/plugin-events-backend-module-azure` (0.1.13 → 0.1.14)

_No changelog entries found._

### `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.13 → 0.1.14)

_No changelog entries found._

### `@backstage/plugin-events-backend-module-gerrit` (0.1.13 → 0.1.14)

_No changelog entries found._

### `@backstage/plugin-events-backend-module-github` (0.1.13 → 0.1.14)

_No changelog entries found._

### `@backstage/plugin-events-backend-module-gitlab` (0.1.13 → 0.1.14)

_No changelog entries found._

### `@backstage/plugin-events-backend-test-utils` (0.1.13 → 0.1.14)

_No changelog entries found._

### `@backstage/plugin-events-node` (0.2.12 → 0.2.13)

_No changelog entries found._

### `@backstage/plugin-graphql-backend` (0.1.41 → 0.1.42)

_No changelog entries found._

### `@backstage/plugin-jenkins-backend` (0.2.6 → 0.2.7)

_No changelog entries found._

### `@backstage/plugin-kafka-backend` (0.3.0 → 0.3.1)

_No changelog entries found._

### `@backstage/plugin-kubernetes-backend` (0.12.0 → 0.12.1)

_No changelog entries found._

### `@backstage/plugin-lighthouse-backend` (0.3.0 → 0.3.1)

_No changelog entries found._

### `@backstage/plugin-linguist-backend` (0.5.0 → 0.5.1)

_No changelog entries found._

### `@backstage/plugin-nomad-backend` (0.1.5 → 0.1.6)

_No changelog entries found._

### `@backstage/plugin-periskop-backend` (0.2.0 → 0.2.1)

_No changelog entries found._

### `@backstage/plugin-permission-backend` (0.5.26 → 0.5.27)

_No changelog entries found._

### `@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.0 → 0.1.1)

_No changelog entries found._

### `@backstage/plugin-permission-node` (0.7.14 → 0.7.15)

_No changelog entries found._

### `@backstage/plugin-playlist-backend` (0.3.7 → 0.3.8)

_No changelog entries found._

### `@backstage/plugin-proxy-backend` (0.4.0 → 0.4.1)

_No changelog entries found._

### `@backstage/plugin-rollbar-backend` (0.1.48 → 0.1.49)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend` (1.17.1 → 1.17.2)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.4 → 0.2.5)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.27 → 0.2.28)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.2.6 → 0.2.7)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-rails` (0.4.20 → 0.4.21)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-sentry` (0.1.11 → 0.1.12)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.24 → 0.2.25)

_No changelog entries found._

### `@backstage/plugin-scaffolder-node` (0.2.3 → 0.2.4)

_No changelog entries found._

### `@backstage/plugin-search-backend` (1.4.3 → 1.4.4)

_No changelog entries found._

### `@backstage/plugin-search-backend-module-catalog` (0.1.7 → 0.1.8)

_No changelog entries found._

### `@backstage/plugin-search-backend-module-elasticsearch` (1.3.6 → 1.3.7)

_No changelog entries found._

### `@backstage/plugin-search-backend-module-explore` (0.1.7 → 0.1.8)

_No changelog entries found._

### `@backstage/plugin-search-backend-module-pg` (0.5.12 → 0.5.13)

_No changelog entries found._

### `@backstage/plugin-search-backend-module-techdocs` (0.1.7 → 0.1.8)

_No changelog entries found._

### `@backstage/plugin-search-backend-node` (1.2.7 → 1.2.8)

_No changelog entries found._

### `@backstage/plugin-sonarqube-backend` (0.2.5 → 0.2.6)

_No changelog entries found._

### `@backstage/plugin-stack-overflow-backend` (0.2.7 → 0.2.8)

_No changelog entries found._

### `@backstage/plugin-tech-insights-backend` (0.5.17 → 0.5.18)

_No changelog entries found._

### `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.35 → 0.1.36)

_No changelog entries found._

### `@backstage/plugin-tech-insights-node` (0.4.9 → 0.4.10)

_No changelog entries found._

### `@backstage/plugin-techdocs-backend` (1.7.0 → 1.7.1)

_No changelog entries found._

### `@backstage/plugin-techdocs-node` (1.8.0 → 1.8.1)

_No changelog entries found._

### `@backstage/plugin-todo-backend` (0.3.1 → 0.3.2)

_No changelog entries found._

### `@backstage/plugin-user-settings-backend` (0.2.1 → 0.2.2)

_No changelog entries found._

### `@backstage/plugin-vault-backend` (0.3.8 → 0.3.9)

_No changelog entries found._

### `@techdocs/cli` (1.5.0 → 1.5.1)

_No changelog entries found._
