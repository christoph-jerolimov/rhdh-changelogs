# Backstage Release 1.10.1 changelog

Changes between 1.10.0 and 1.10.1 — 72 changed and 0 added packages.

## Summary

- [0.0.x patch version bumps](#00x-patch-version-bumps): 1 package
- [Other patch version bumps](#other-patch-version-bumps): 71 packages

## Table of contents

- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-explore-backend` (0.0.2 → 0.0.3)](#backstageplugin-explore-backend-002--003)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-app-api` (0.3.0 → 0.3.1)](#backstagebackend-app-api-030--031)
  - [`@backstage/backend-common` (0.18.0 → 0.18.1)](#backstagebackend-common-0180--0181)
  - [`@backstage/backend-defaults` (0.1.5 → 0.1.6)](#backstagebackend-defaults-015--016)
  - [`@backstage/backend-plugin-api` (0.3.0 → 0.3.1)](#backstagebackend-plugin-api-030--031)
  - [`@backstage/backend-tasks` (0.4.1 → 0.4.2)](#backstagebackend-tasks-041--042)
  - [`@backstage/backend-test-utils` (0.1.32 → 0.1.33)](#backstagebackend-test-utils-0132--0133)
  - [`@backstage/plugin-adr-backend` (0.2.5 → 0.2.6)](#backstageplugin-adr-backend-025--026)
  - [`@backstage/plugin-airbrake-backend` (0.2.13 → 0.2.14)](#backstageplugin-airbrake-backend-0213--0214)
  - [`@backstage/plugin-app-backend` (0.3.40 → 0.3.41)](#backstageplugin-app-backend-0340--0341)
  - [`@backstage/plugin-auth-backend` (0.17.3 → 0.17.4)](#backstageplugin-auth-backend-0173--0174)
  - [`@backstage/plugin-auth-node` (0.2.9 → 0.2.10)](#backstageplugin-auth-node-029--0210)
  - [`@backstage/plugin-azure-devops-backend` (0.3.19 → 0.3.20)](#backstageplugin-azure-devops-backend-0319--0320)
  - [`@backstage/plugin-azure-sites-backend` (0.1.2 → 0.1.3)](#backstageplugin-azure-sites-backend-012--013)
  - [`@backstage/plugin-badges-backend` (0.1.34 → 0.1.35)](#backstageplugin-badges-backend-0134--0135)
  - [`@backstage/plugin-bazaar-backend` (0.2.3 → 0.2.4)](#backstageplugin-bazaar-backend-023--024)
  - [`@backstage/plugin-catalog-backend` (1.7.0 → 1.7.1)](#backstageplugin-catalog-backend-170--171)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.1.13 → 0.1.14)](#backstageplugin-catalog-backend-module-aws-0113--0114)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.1.11 → 0.1.12)](#backstageplugin-catalog-backend-module-azure-0111--0112)
  - [`@backstage/plugin-catalog-backend-module-bitbucket` (0.2.7 → 0.2.8)](#backstageplugin-catalog-backend-module-bitbucket-027--028)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.7 → 0.1.8)](#backstageplugin-catalog-backend-module-bitbucket-cloud-017--018)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.5 → 0.1.6)](#backstageplugin-catalog-backend-module-bitbucket-server-015--016)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (0.1.8 → 0.1.9)](#backstageplugin-catalog-backend-module-gerrit-018--019)
  - [`@backstage/plugin-catalog-backend-module-github` (0.2.3 → 0.2.4)](#backstageplugin-catalog-backend-module-github-023--024)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.1.11 → 0.1.12)](#backstageplugin-catalog-backend-module-gitlab-0111--0112)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.1.1 → 0.1.2)](#backstageplugin-catalog-backend-module-incremental-ingestion-011--012)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.5.7 → 0.5.8)](#backstageplugin-catalog-backend-module-ldap-057--058)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.4.6 → 0.4.7)](#backstageplugin-catalog-backend-module-msgraph-046--047)
  - [`@backstage/plugin-catalog-backend-module-openapi` (0.1.6 → 0.1.7)](#backstageplugin-catalog-backend-module-openapi-016--017)
  - [`@backstage/plugin-catalog-node` (1.3.1 → 1.3.2)](#backstageplugin-catalog-node-131--132)
  - [`@backstage/plugin-code-coverage-backend` (0.2.6 → 0.2.7)](#backstageplugin-code-coverage-backend-026--027)
  - [`@backstage/plugin-events-backend` (0.2.1 → 0.2.2)](#backstageplugin-events-backend-021--022)
  - [`@backstage/plugin-events-backend-module-aws-sqs` (0.1.2 → 0.1.3)](#backstageplugin-events-backend-module-aws-sqs-012--013)
  - [`@backstage/plugin-events-backend-module-azure` (0.1.2 → 0.1.3)](#backstageplugin-events-backend-module-azure-012--013)
  - [`@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.2 → 0.1.3)](#backstageplugin-events-backend-module-bitbucket-cloud-012--013)
  - [`@backstage/plugin-events-backend-module-gerrit` (0.1.2 → 0.1.3)](#backstageplugin-events-backend-module-gerrit-012--013)
  - [`@backstage/plugin-events-backend-module-github` (0.1.2 → 0.1.3)](#backstageplugin-events-backend-module-github-012--013)
  - [`@backstage/plugin-events-backend-module-gitlab` (0.1.2 → 0.1.3)](#backstageplugin-events-backend-module-gitlab-012--013)
  - [`@backstage/plugin-events-backend-test-utils` (0.1.2 → 0.1.3)](#backstageplugin-events-backend-test-utils-012--013)
  - [`@backstage/plugin-events-node` (0.2.1 → 0.2.2)](#backstageplugin-events-node-021--022)
  - [`@backstage/plugin-graphql-backend` (0.1.30 → 0.1.31)](#backstageplugin-graphql-backend-0130--0131)
  - [`@backstage/plugin-jenkins-backend` (0.1.30 → 0.1.31)](#backstageplugin-jenkins-backend-0130--0131)
  - [`@backstage/plugin-kafka-backend` (0.2.33 → 0.2.34)](#backstageplugin-kafka-backend-0233--0234)
  - [`@backstage/plugin-kubernetes-backend` (0.9.1 → 0.9.2)](#backstageplugin-kubernetes-backend-091--092)
  - [`@backstage/plugin-periskop-backend` (0.1.11 → 0.1.12)](#backstageplugin-periskop-backend-0111--0112)
  - [`@backstage/plugin-permission-backend` (0.5.15 → 0.5.16)](#backstageplugin-permission-backend-0515--0516)
  - [`@backstage/plugin-permission-node` (0.7.3 → 0.7.4)](#backstageplugin-permission-node-073--074)
  - [`@backstage/plugin-playlist-backend` (0.2.3 → 0.2.4)](#backstageplugin-playlist-backend-023--024)
  - [`@backstage/plugin-proxy-backend` (0.2.34 → 0.2.35)](#backstageplugin-proxy-backend-0234--0235)
  - [`@backstage/plugin-rollbar-backend` (0.1.37 → 0.1.38)](#backstageplugin-rollbar-backend-0137--0138)
  - [`@backstage/plugin-scaffolder` (1.10.0 → 1.10.1)](#backstageplugin-scaffolder-1100--1101)
  - [`@backstage/plugin-scaffolder-backend` (1.10.0 → 1.10.1)](#backstageplugin-scaffolder-backend-1100--1101)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.15 → 0.2.16)](#backstageplugin-scaffolder-backend-module-cookiecutter-0215--0216)
  - [`@backstage/plugin-scaffolder-backend-module-rails` (0.4.8 → 0.4.9)](#backstageplugin-scaffolder-backend-module-rails-048--049)
  - [`@backstage/plugin-scaffolder-backend-module-sentry` (0.1.0 → 0.1.1)](#backstageplugin-scaffolder-backend-module-sentry-010--011)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.13 → 0.2.14)](#backstageplugin-scaffolder-backend-module-yeoman-0213--0214)
  - [`@backstage/plugin-scaffolder-react` (1.0.0 → 1.0.1)](#backstageplugin-scaffolder-react-100--101)
  - [`@backstage/plugin-search-backend` (1.2.1 → 1.2.2)](#backstageplugin-search-backend-121--122)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.1.1 → 1.1.2)](#backstageplugin-search-backend-module-elasticsearch-111--112)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.1 → 0.5.2)](#backstageplugin-search-backend-module-pg-051--052)
  - [`@backstage/plugin-search-backend-node` (1.1.1 → 1.1.2)](#backstageplugin-search-backend-node-111--112)
  - [`@backstage/plugin-sonarqube-backend` (0.1.5 → 0.1.6)](#backstageplugin-sonarqube-backend-015--016)
  - [`@backstage/plugin-stack-overflow-backend` (0.1.9 → 0.1.10)](#backstageplugin-stack-overflow-backend-019--0110)
  - [`@backstage/plugin-tech-insights-backend` (0.5.6 → 0.5.7)](#backstageplugin-tech-insights-backend-056--057)
  - [`@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.24 → 0.1.25)](#backstageplugin-tech-insights-backend-module-jsonfc-0124--0125)
  - [`@backstage/plugin-tech-insights-node` (0.3.8 → 0.3.9)](#backstageplugin-tech-insights-node-038--039)
  - [`@backstage/plugin-techdocs-backend` (1.5.1 → 1.5.2)](#backstageplugin-techdocs-backend-151--152)
  - [`@backstage/plugin-techdocs-node` (1.4.4 → 1.4.5)](#backstageplugin-techdocs-node-144--145)
  - [`@backstage/plugin-todo-backend` (0.1.37 → 0.1.38)](#backstageplugin-todo-backend-0137--0138)
  - [`@backstage/plugin-user-settings-backend` (0.1.4 → 0.1.5)](#backstageplugin-user-settings-backend-014--015)
  - [`@backstage/plugin-vault-backend` (0.2.6 → 0.2.7)](#backstageplugin-vault-backend-026--027)
  - [`@techdocs/cli` (1.3.0 → 1.3.1)](#techdocscli-130--131)

## 0.0.x patch version bumps

### `@backstage/plugin-explore-backend` (0.0.2 → 0.0.3)

_No changelog entries found._

## Other patch version bumps

### `@backstage/backend-app-api` (0.3.0 → 0.3.1)

_No changelog entries found._

### `@backstage/backend-common` (0.18.0 → 0.18.1)

_No changelog entries found._

### `@backstage/backend-defaults` (0.1.5 → 0.1.6)

_No changelog entries found._

### `@backstage/backend-plugin-api` (0.3.0 → 0.3.1)

_No changelog entries found._

### `@backstage/backend-tasks` (0.4.1 → 0.4.2)

_No changelog entries found._

### `@backstage/backend-test-utils` (0.1.32 → 0.1.33)

_No changelog entries found._

### `@backstage/plugin-adr-backend` (0.2.5 → 0.2.6)

_No changelog entries found._

### `@backstage/plugin-airbrake-backend` (0.2.13 → 0.2.14)

_No changelog entries found._

### `@backstage/plugin-app-backend` (0.3.40 → 0.3.41)

_No changelog entries found._

### `@backstage/plugin-auth-backend` (0.17.3 → 0.17.4)

_No changelog entries found._

### `@backstage/plugin-auth-node` (0.2.9 → 0.2.10)

_No changelog entries found._

### `@backstage/plugin-azure-devops-backend` (0.3.19 → 0.3.20)

_No changelog entries found._

### `@backstage/plugin-azure-sites-backend` (0.1.2 → 0.1.3)

_No changelog entries found._

### `@backstage/plugin-badges-backend` (0.1.34 → 0.1.35)

_No changelog entries found._

### `@backstage/plugin-bazaar-backend` (0.2.3 → 0.2.4)

_No changelog entries found._

### `@backstage/plugin-catalog-backend` (1.7.0 → 1.7.1)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-aws` (0.1.13 → 0.1.14)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-azure` (0.1.11 → 0.1.12)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-bitbucket` (0.2.7 → 0.2.8)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.7 → 0.1.8)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.5 → 0.1.6)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gerrit` (0.1.8 → 0.1.9)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-github` (0.2.3 → 0.2.4)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gitlab` (0.1.11 → 0.1.12)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.1.1 → 0.1.2)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-ldap` (0.5.7 → 0.5.8)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-msgraph` (0.4.6 → 0.4.7)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-openapi` (0.1.6 → 0.1.7)

_No changelog entries found._

### `@backstage/plugin-catalog-node` (1.3.1 → 1.3.2)

_No changelog entries found._

### `@backstage/plugin-code-coverage-backend` (0.2.6 → 0.2.7)

_No changelog entries found._

### `@backstage/plugin-events-backend` (0.2.1 → 0.2.2)

_No changelog entries found._

### `@backstage/plugin-events-backend-module-aws-sqs` (0.1.2 → 0.1.3)

_No changelog entries found._

### `@backstage/plugin-events-backend-module-azure` (0.1.2 → 0.1.3)

_No changelog entries found._

### `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.2 → 0.1.3)

_No changelog entries found._

### `@backstage/plugin-events-backend-module-gerrit` (0.1.2 → 0.1.3)

_No changelog entries found._

### `@backstage/plugin-events-backend-module-github` (0.1.2 → 0.1.3)

_No changelog entries found._

### `@backstage/plugin-events-backend-module-gitlab` (0.1.2 → 0.1.3)

_No changelog entries found._

### `@backstage/plugin-events-backend-test-utils` (0.1.2 → 0.1.3)

_No changelog entries found._

### `@backstage/plugin-events-node` (0.2.1 → 0.2.2)

_No changelog entries found._

### `@backstage/plugin-graphql-backend` (0.1.30 → 0.1.31)

_No changelog entries found._

### `@backstage/plugin-jenkins-backend` (0.1.30 → 0.1.31)

_No changelog entries found._

### `@backstage/plugin-kafka-backend` (0.2.33 → 0.2.34)

_No changelog entries found._

### `@backstage/plugin-kubernetes-backend` (0.9.1 → 0.9.2)

_No changelog entries found._

### `@backstage/plugin-periskop-backend` (0.1.11 → 0.1.12)

_No changelog entries found._

### `@backstage/plugin-permission-backend` (0.5.15 → 0.5.16)

_No changelog entries found._

### `@backstage/plugin-permission-node` (0.7.3 → 0.7.4)

_No changelog entries found._

### `@backstage/plugin-playlist-backend` (0.2.3 → 0.2.4)

_No changelog entries found._

### `@backstage/plugin-proxy-backend` (0.2.34 → 0.2.35)

_No changelog entries found._

### `@backstage/plugin-rollbar-backend` (0.1.37 → 0.1.38)

_No changelog entries found._

### `@backstage/plugin-scaffolder` (1.10.0 → 1.10.1)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend` (1.10.0 → 1.10.1)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.15 → 0.2.16)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-rails` (0.4.8 → 0.4.9)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-sentry` (0.1.0 → 0.1.1)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.13 → 0.2.14)

_No changelog entries found._

### `@backstage/plugin-scaffolder-react` (1.0.0 → 1.0.1)

_No changelog entries found._

### `@backstage/plugin-search-backend` (1.2.1 → 1.2.2)

_No changelog entries found._

### `@backstage/plugin-search-backend-module-elasticsearch` (1.1.1 → 1.1.2)

_No changelog entries found._

### `@backstage/plugin-search-backend-module-pg` (0.5.1 → 0.5.2)

_No changelog entries found._

### `@backstage/plugin-search-backend-node` (1.1.1 → 1.1.2)

_No changelog entries found._

### `@backstage/plugin-sonarqube-backend` (0.1.5 → 0.1.6)

_No changelog entries found._

### `@backstage/plugin-stack-overflow-backend` (0.1.9 → 0.1.10)

_No changelog entries found._

### `@backstage/plugin-tech-insights-backend` (0.5.6 → 0.5.7)

_No changelog entries found._

### `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.24 → 0.1.25)

_No changelog entries found._

### `@backstage/plugin-tech-insights-node` (0.3.8 → 0.3.9)

_No changelog entries found._

### `@backstage/plugin-techdocs-backend` (1.5.1 → 1.5.2)

_No changelog entries found._

### `@backstage/plugin-techdocs-node` (1.4.4 → 1.4.5)

_No changelog entries found._

### `@backstage/plugin-todo-backend` (0.1.37 → 0.1.38)

_No changelog entries found._

### `@backstage/plugin-user-settings-backend` (0.1.4 → 0.1.5)

_No changelog entries found._

### `@backstage/plugin-vault-backend` (0.2.6 → 0.2.7)

_No changelog entries found._

### `@techdocs/cli` (1.3.0 → 1.3.1)

_No changelog entries found._
