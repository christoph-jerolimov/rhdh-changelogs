# Backstage Release 1.23.2 changelog

Changes between 1.23.1 and 1.23.2 — 117 changed and 0 added packages.

## Summary

- [0.0.x patch version bumps](#00x-patch-version-bumps): 6 packages
- [Other patch version bumps](#other-patch-version-bumps): 111 packages

## Table of contents

- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-auth-backend-module-okta-provider` (0.0.3 → 0.0.4)](#backstageplugin-auth-backend-module-okta-provider-003--004)
  - [`@backstage/plugin-explore-backend` (0.0.20 → 0.0.21)](#backstageplugin-explore-backend-0020--0021)
  - [`@backstage/plugin-notifications-backend` (0.0.1 → 0.0.2)](#backstageplugin-notifications-backend-001--002)
  - [`@backstage/plugin-notifications-node` (0.0.1 → 0.0.2)](#backstageplugin-notifications-node-001--002)
  - [`@backstage/plugin-signals-backend` (0.0.1 → 0.0.2)](#backstageplugin-signals-backend-001--002)
  - [`@backstage/plugin-signals-node` (0.0.1 → 0.0.2)](#backstageplugin-signals-node-001--002)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-app-api` (0.5.11 → 0.5.12)](#backstagebackend-app-api-0511--0512)
  - [`@backstage/backend-common` (0.21.0 → 0.21.1)](#backstagebackend-common-0210--0211)
  - [`@backstage/backend-defaults` (0.2.10 → 0.2.11)](#backstagebackend-defaults-0210--0211)
  - [`@backstage/backend-dynamic-feature-service` (0.2.0 → 0.2.1)](#backstagebackend-dynamic-feature-service-020--021)
  - [`@backstage/backend-openapi-utils` (0.1.3 → 0.1.4)](#backstagebackend-openapi-utils-013--014)
  - [`@backstage/backend-plugin-api` (0.6.10 → 0.6.11)](#backstagebackend-plugin-api-0610--0611)
  - [`@backstage/backend-tasks` (0.5.15 → 0.5.16)](#backstagebackend-tasks-0515--0516)
  - [`@backstage/backend-test-utils` (0.3.0 → 0.3.1)](#backstagebackend-test-utils-030--031)
  - [`@backstage/plugin-adr-backend` (0.4.7 → 0.4.8)](#backstageplugin-adr-backend-047--048)
  - [`@backstage/plugin-airbrake-backend` (0.3.7 → 0.3.8)](#backstageplugin-airbrake-backend-037--038)
  - [`@backstage/plugin-app-backend` (0.3.58 → 0.3.59)](#backstageplugin-app-backend-0358--0359)
  - [`@backstage/plugin-app-node` (0.1.10 → 0.1.11)](#backstageplugin-app-node-0110--0111)
  - [`@backstage/plugin-auth-backend` (0.21.0 → 0.21.1)](#backstageplugin-auth-backend-0210--0211)
  - [`@backstage/plugin-auth-backend-module-atlassian-provider` (0.1.2 → 0.1.3)](#backstageplugin-auth-backend-module-atlassian-provider-012--013)
  - [`@backstage/plugin-auth-backend-module-aws-alb-provider` (0.1.1 → 0.1.2)](#backstageplugin-auth-backend-module-aws-alb-provider-011--012)
  - [`@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.2.5 → 0.2.6)](#backstageplugin-auth-backend-module-gcp-iap-provider-025--026)
  - [`@backstage/plugin-auth-backend-module-github-provider` (0.1.7 → 0.1.8)](#backstageplugin-auth-backend-module-github-provider-017--018)
  - [`@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.7 → 0.1.8)](#backstageplugin-auth-backend-module-gitlab-provider-017--018)
  - [`@backstage/plugin-auth-backend-module-google-provider` (0.1.7 → 0.1.8)](#backstageplugin-auth-backend-module-google-provider-017--018)
  - [`@backstage/plugin-auth-backend-module-microsoft-provider` (0.1.5 → 0.1.6)](#backstageplugin-auth-backend-module-microsoft-provider-015--016)
  - [`@backstage/plugin-auth-backend-module-oauth2-provider` (0.1.7 → 0.1.8)](#backstageplugin-auth-backend-module-oauth2-provider-017--018)
  - [`@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.1.3 → 0.1.4)](#backstageplugin-auth-backend-module-oauth2-proxy-provider-013--014)
  - [`@backstage/plugin-auth-backend-module-oidc-provider` (0.1.0 → 0.1.1)](#backstageplugin-auth-backend-module-oidc-provider-010--011)
  - [`@backstage/plugin-auth-backend-module-pinniped-provider` (0.1.4 → 0.1.5)](#backstageplugin-auth-backend-module-pinniped-provider-014--015)
  - [`@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.1.2 → 0.1.3)](#backstageplugin-auth-backend-module-vmware-cloud-provider-012--013)
  - [`@backstage/plugin-auth-node` (0.4.5 → 0.4.6)](#backstageplugin-auth-node-045--046)
  - [`@backstage/plugin-azure-devops-backend` (0.5.2 → 0.5.3)](#backstageplugin-azure-devops-backend-052--053)
  - [`@backstage/plugin-azure-sites-backend` (0.2.0 → 0.2.1)](#backstageplugin-azure-sites-backend-020--021)
  - [`@backstage/plugin-badges-backend` (0.3.7 → 0.3.8)](#backstageplugin-badges-backend-037--038)
  - [`@backstage/plugin-bazaar-backend` (0.3.8 → 0.3.9)](#backstageplugin-bazaar-backend-038--039)
  - [`@backstage/plugin-catalog-backend` (1.17.0 → 1.17.1)](#backstageplugin-catalog-backend-1170--1171)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.3.4 → 0.3.5)](#backstageplugin-catalog-backend-module-aws-034--035)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.1.29 → 0.1.30)](#backstageplugin-catalog-backend-module-azure-0129--0130)
  - [`@backstage/plugin-catalog-backend-module-backstage-openapi` (0.1.3 → 0.1.4)](#backstageplugin-catalog-backend-module-backstage-openapi-013--014)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.25 → 0.1.26)](#backstageplugin-catalog-backend-module-bitbucket-cloud-0125--0126)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.23 → 0.1.24)](#backstageplugin-catalog-backend-module-bitbucket-server-0123--0124)
  - [`@backstage/plugin-catalog-backend-module-gcp` (0.1.10 → 0.1.11)](#backstageplugin-catalog-backend-module-gcp-0110--0111)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (0.1.26 → 0.1.27)](#backstageplugin-catalog-backend-module-gerrit-0126--0127)
  - [`@backstage/plugin-catalog-backend-module-github` (0.5.0 → 0.5.1)](#backstageplugin-catalog-backend-module-github-050--051)
  - [`@backstage/plugin-catalog-backend-module-github-org` (0.1.4 → 0.1.5)](#backstageplugin-catalog-backend-module-github-org-014--015)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.3.7 → 0.3.8)](#backstageplugin-catalog-backend-module-gitlab-037--038)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.14 → 0.4.15)](#backstageplugin-catalog-backend-module-incremental-ingestion-0414--0415)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.5.25 → 0.5.26)](#backstageplugin-catalog-backend-module-ldap-0525--0526)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.5.17 → 0.5.18)](#backstageplugin-catalog-backend-module-msgraph-0517--0518)
  - [`@backstage/plugin-catalog-backend-module-openapi` (0.1.27 → 0.1.28)](#backstageplugin-catalog-backend-module-openapi-0127--0128)
  - [`@backstage/plugin-catalog-backend-module-puppetdb` (0.1.15 → 0.1.16)](#backstageplugin-catalog-backend-module-puppetdb-0115--0116)
  - [`@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.7 → 0.1.8)](#backstageplugin-catalog-backend-module-scaffolder-entity-model-017--018)
  - [`@backstage/plugin-catalog-backend-module-unprocessed` (0.3.7 → 0.3.8)](#backstageplugin-catalog-backend-module-unprocessed-037--038)
  - [`@backstage/plugin-catalog-node` (1.7.0 → 1.7.1)](#backstageplugin-catalog-node-170--171)
  - [`@backstage/plugin-code-coverage-backend` (0.2.24 → 0.2.25)](#backstageplugin-code-coverage-backend-0224--0225)
  - [`@backstage/plugin-devtools-backend` (0.2.7 → 0.2.8)](#backstageplugin-devtools-backend-027--028)
  - [`@backstage/plugin-entity-feedback-backend` (0.2.7 → 0.2.8)](#backstageplugin-entity-feedback-backend-027--028)
  - [`@backstage/plugin-events-backend` (0.2.19 → 0.2.20)](#backstageplugin-events-backend-0219--0220)
  - [`@backstage/plugin-events-backend-module-aws-sqs` (0.2.13 → 0.2.14)](#backstageplugin-events-backend-module-aws-sqs-0213--0214)
  - [`@backstage/plugin-events-backend-module-azure` (0.1.20 → 0.1.21)](#backstageplugin-events-backend-module-azure-0120--0121)
  - [`@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.20 → 0.1.21)](#backstageplugin-events-backend-module-bitbucket-cloud-0120--0121)
  - [`@backstage/plugin-events-backend-module-gerrit` (0.1.20 → 0.1.21)](#backstageplugin-events-backend-module-gerrit-0120--0121)
  - [`@backstage/plugin-events-backend-module-github` (0.1.20 → 0.1.21)](#backstageplugin-events-backend-module-github-0120--0121)
  - [`@backstage/plugin-events-backend-module-gitlab` (0.1.20 → 0.1.21)](#backstageplugin-events-backend-module-gitlab-0120--0121)
  - [`@backstage/plugin-events-backend-test-utils` (0.1.20 → 0.1.21)](#backstageplugin-events-backend-test-utils-0120--0121)
  - [`@backstage/plugin-events-node` (0.2.19 → 0.2.20)](#backstageplugin-events-node-0219--0220)
  - [`@backstage/plugin-jenkins-backend` (0.3.4 → 0.3.5)](#backstageplugin-jenkins-backend-034--035)
  - [`@backstage/plugin-kafka-backend` (0.3.8 → 0.3.9)](#backstageplugin-kafka-backend-038--039)
  - [`@backstage/plugin-kubernetes-backend` (0.15.0 → 0.15.1)](#backstageplugin-kubernetes-backend-0150--0151)
  - [`@backstage/plugin-kubernetes-node` (0.1.4 → 0.1.5)](#backstageplugin-kubernetes-node-014--015)
  - [`@backstage/plugin-lighthouse-backend` (0.4.2 → 0.4.3)](#backstageplugin-lighthouse-backend-042--043)
  - [`@backstage/plugin-linguist-backend` (0.5.7 → 0.5.8)](#backstageplugin-linguist-backend-057--058)
  - [`@backstage/plugin-nomad-backend` (0.1.12 → 0.1.13)](#backstageplugin-nomad-backend-0112--0113)
  - [`@backstage/plugin-periskop-backend` (0.2.8 → 0.2.9)](#backstageplugin-periskop-backend-028--029)
  - [`@backstage/plugin-permission-backend` (0.5.33 → 0.5.34)](#backstageplugin-permission-backend-0533--0534)
  - [`@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.7 → 0.1.8)](#backstageplugin-permission-backend-module-allow-all-policy-017--018)
  - [`@backstage/plugin-permission-node` (0.7.21 → 0.7.22)](#backstageplugin-permission-node-0721--0722)
  - [`@backstage/plugin-playlist-backend` (0.3.14 → 0.3.15)](#backstageplugin-playlist-backend-0314--0315)
  - [`@backstage/plugin-proxy-backend` (0.4.8 → 0.4.9)](#backstageplugin-proxy-backend-048--049)
  - [`@backstage/plugin-rollbar-backend` (0.1.55 → 0.1.56)](#backstageplugin-rollbar-backend-0155--0156)
  - [`@backstage/plugin-scaffolder-backend` (1.21.0 → 1.21.1)](#backstageplugin-scaffolder-backend-1210--1211)
  - [`@backstage/plugin-scaffolder-backend-module-azure` (0.1.2 → 0.1.3)](#backstageplugin-scaffolder-backend-module-azure-012--013)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket` (0.2.0 → 0.2.1)](#backstageplugin-scaffolder-backend-module-bitbucket-020--021)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.1.0 → 0.1.1)](#backstageplugin-scaffolder-backend-module-bitbucket-cloud-010--011)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.1.0 → 0.1.1)](#backstageplugin-scaffolder-backend-module-bitbucket-server-010--011)
  - [`@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.11 → 0.2.12)](#backstageplugin-scaffolder-backend-module-confluence-to-markdown-0211--0212)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.34 → 0.2.35)](#backstageplugin-scaffolder-backend-module-cookiecutter-0234--0235)
  - [`@backstage/plugin-scaffolder-backend-module-gerrit` (0.1.2 → 0.1.3)](#backstageplugin-scaffolder-backend-module-gerrit-012--013)
  - [`@backstage/plugin-scaffolder-backend-module-gitea` (0.1.0 → 0.1.1)](#backstageplugin-scaffolder-backend-module-gitea-010--011)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.2.0 → 0.2.1)](#backstageplugin-scaffolder-backend-module-github-020--021)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.2.13 → 0.2.14)](#backstageplugin-scaffolder-backend-module-gitlab-0213--0214)
  - [`@backstage/plugin-scaffolder-backend-module-rails` (0.4.27 → 0.4.28)](#backstageplugin-scaffolder-backend-module-rails-0427--0428)
  - [`@backstage/plugin-scaffolder-backend-module-sentry` (0.1.18 → 0.1.19)](#backstageplugin-scaffolder-backend-module-sentry-0118--0119)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.31 → 0.2.32)](#backstageplugin-scaffolder-backend-module-yeoman-0231--0232)
  - [`@backstage/plugin-scaffolder-node` (0.3.0 → 0.3.1)](#backstageplugin-scaffolder-node-030--031)
  - [`@backstage/plugin-search-backend` (1.5.0 → 1.5.1)](#backstageplugin-search-backend-150--151)
  - [`@backstage/plugin-search-backend-module-catalog` (0.1.14 → 0.1.15)](#backstageplugin-search-backend-module-catalog-0114--0115)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.3.13 → 1.3.14)](#backstageplugin-search-backend-module-elasticsearch-1313--1314)
  - [`@backstage/plugin-search-backend-module-explore` (0.1.14 → 0.1.15)](#backstageplugin-search-backend-module-explore-0114--0115)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.19 → 0.5.20)](#backstageplugin-search-backend-module-pg-0519--0520)
  - [`@backstage/plugin-search-backend-module-stack-overflow-collator` (0.1.3 → 0.1.4)](#backstageplugin-search-backend-module-stack-overflow-collator-013--014)
  - [`@backstage/plugin-search-backend-module-techdocs` (0.1.14 → 0.1.15)](#backstageplugin-search-backend-module-techdocs-0114--0115)
  - [`@backstage/plugin-search-backend-node` (1.2.14 → 1.2.15)](#backstageplugin-search-backend-node-1214--1215)
  - [`@backstage/plugin-sonarqube-backend` (0.2.12 → 0.2.13)](#backstageplugin-sonarqube-backend-0212--0213)
  - [`@backstage/plugin-stack-overflow-backend` (0.2.14 → 0.2.15)](#backstageplugin-stack-overflow-backend-0214--0215)
  - [`@backstage/plugin-tech-insights-backend` (0.5.24 → 0.5.25)](#backstageplugin-tech-insights-backend-0524--0525)
  - [`@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.42 → 0.1.43)](#backstageplugin-tech-insights-backend-module-jsonfc-0142--0143)
  - [`@backstage/plugin-tech-insights-node` (0.4.16 → 0.4.17)](#backstageplugin-tech-insights-node-0416--0417)
  - [`@backstage/plugin-techdocs-backend` (1.9.3 → 1.9.4)](#backstageplugin-techdocs-backend-193--194)
  - [`@backstage/plugin-techdocs-node` (1.11.2 → 1.11.3)](#backstageplugin-techdocs-node-1112--1113)
  - [`@backstage/plugin-todo-backend` (0.3.8 → 0.3.9)](#backstageplugin-todo-backend-038--039)
  - [`@backstage/plugin-user-settings-backend` (0.2.9 → 0.2.10)](#backstageplugin-user-settings-backend-029--0210)
  - [`@backstage/plugin-vault-backend` (0.4.3 → 0.4.4)](#backstageplugin-vault-backend-043--044)
  - [`@backstage/plugin-vault-node` (0.1.3 → 0.1.4)](#backstageplugin-vault-node-013--014)
  - [`@backstage/repo-tools` (0.6.0 → 0.6.1)](#backstagerepo-tools-060--061)
  - [`@techdocs/cli` (1.8.2 → 1.8.3)](#techdocscli-182--183)

## 0.0.x patch version bumps

### `@backstage/plugin-auth-backend-module-okta-provider` (0.0.3 → [0.0.4](../../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#004))

_No changelog entries found._

### `@backstage/plugin-explore-backend` (0.0.20 → [0.0.21](../../changelogs/@backstage/plugin-explore-backend.md#0021))

_No changelog entries found._

### `@backstage/plugin-notifications-backend` (0.0.1 → [0.0.2](../../changelogs/@backstage/plugin-notifications-backend.md#002))

_No changelog entries found._

### `@backstage/plugin-notifications-node` (0.0.1 → [0.0.2](../../changelogs/@backstage/plugin-notifications-node.md#002))

_No changelog entries found._

### `@backstage/plugin-signals-backend` (0.0.1 → [0.0.2](../../changelogs/@backstage/plugin-signals-backend.md#002))

_No changelog entries found._

### `@backstage/plugin-signals-node` (0.0.1 → [0.0.2](../../changelogs/@backstage/plugin-signals-node.md#002))

_No changelog entries found._

## Other patch version bumps

### `@backstage/backend-app-api` (0.5.11 → [0.5.12](../../changelogs/@backstage/backend-app-api.md#0512))

_No changelog entries found._

### `@backstage/backend-common` (0.21.0 → [0.21.1](../../changelogs/@backstage/backend-common.md#0211))

_No changelog entries found._

### `@backstage/backend-defaults` (0.2.10 → [0.2.11](../../changelogs/@backstage/backend-defaults.md#0211))

_No changelog entries found._

### `@backstage/backend-dynamic-feature-service` (0.2.0 → [0.2.1](../../changelogs/@backstage/backend-dynamic-feature-service.md#021))

_No changelog entries found._

### `@backstage/backend-openapi-utils` (0.1.3 → [0.1.4](../../changelogs/@backstage/backend-openapi-utils.md#014))

_No changelog entries found._

### `@backstage/backend-plugin-api` (0.6.10 → [0.6.11](../../changelogs/@backstage/backend-plugin-api.md#0611))

_No changelog entries found._

### `@backstage/backend-tasks` (0.5.15 → [0.5.16](../../changelogs/@backstage/backend-tasks.md#0516))

_No changelog entries found._

### `@backstage/backend-test-utils` (0.3.0 → [0.3.1](../../changelogs/@backstage/backend-test-utils.md#031))

_No changelog entries found._

### `@backstage/plugin-adr-backend` (0.4.7 → [0.4.8](../../changelogs/@backstage/plugin-adr-backend.md#048))

_No changelog entries found._

### `@backstage/plugin-airbrake-backend` (0.3.7 → [0.3.8](../../changelogs/@backstage/plugin-airbrake-backend.md#038))

_No changelog entries found._

### `@backstage/plugin-app-backend` (0.3.58 → [0.3.59](../../changelogs/@backstage/plugin-app-backend.md#0359))

_No changelog entries found._

### `@backstage/plugin-app-node` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-app-node.md#0111))

_No changelog entries found._

### `@backstage/plugin-auth-backend` (0.21.0 → [0.21.1](../../changelogs/@backstage/plugin-auth-backend.md#0211))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-atlassian-provider` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#013))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#012))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#026))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-github-provider` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#018))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#018))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-google-provider` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#018))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-microsoft-provider` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#016))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-oauth2-provider` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#018))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#014))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-oidc-provider` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#011))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-pinniped-provider` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#015))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#013))

_No changelog entries found._

### `@backstage/plugin-auth-node` (0.4.5 → [0.4.6](../../changelogs/@backstage/plugin-auth-node.md#046))

_No changelog entries found._

### `@backstage/plugin-azure-devops-backend` (0.5.2 → [0.5.3](../../changelogs/@backstage/plugin-azure-devops-backend.md#053))

_No changelog entries found._

### `@backstage/plugin-azure-sites-backend` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-azure-sites-backend.md#021))

_No changelog entries found._

### `@backstage/plugin-badges-backend` (0.3.7 → [0.3.8](../../changelogs/@backstage/plugin-badges-backend.md#038))

_No changelog entries found._

### `@backstage/plugin-bazaar-backend` (0.3.8 → [0.3.9](../../changelogs/@backstage/plugin-bazaar-backend.md#039))

_No changelog entries found._

### `@backstage/plugin-catalog-backend` (1.17.0 → [1.17.1](../../changelogs/@backstage/plugin-catalog-backend.md#1171))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-aws` (0.3.4 → [0.3.5](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#035))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-azure` (0.1.29 → [0.1.30](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0130))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#014))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.25 → [0.1.26](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#0126))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.23 → [0.1.24](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#0124))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gcp` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#0111))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gerrit` (0.1.26 → [0.1.27](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0127))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-github` (0.5.0 → [0.5.1](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#051))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-github-org` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#015))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gitlab` (0.3.7 → [0.3.8](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#038))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.14 → [0.4.15](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#0415))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-ldap` (0.5.25 → [0.5.26](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0526))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-msgraph` (0.5.17 → [0.5.18](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#0518))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-openapi` (0.1.27 → [0.1.28](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0128))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-puppetdb` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0116))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#018))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.3.7 → [0.3.8](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#038))

_No changelog entries found._

### `@backstage/plugin-catalog-node` (1.7.0 → [1.7.1](../../changelogs/@backstage/plugin-catalog-node.md#171))

_No changelog entries found._

### `@backstage/plugin-code-coverage-backend` (0.2.24 → [0.2.25](../../changelogs/@backstage/plugin-code-coverage-backend.md#0225))

_No changelog entries found._

### `@backstage/plugin-devtools-backend` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-devtools-backend.md#028))

_No changelog entries found._

### `@backstage/plugin-entity-feedback-backend` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-entity-feedback-backend.md#028))

_No changelog entries found._

### `@backstage/plugin-events-backend` (0.2.19 → [0.2.20](../../changelogs/@backstage/plugin-events-backend.md#0220))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-aws-sqs` (0.2.13 → [0.2.14](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#0214))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-azure` (0.1.20 → [0.1.21](../../changelogs/@backstage/plugin-events-backend-module-azure.md#0121))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.20 → [0.1.21](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0121))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-gerrit` (0.1.20 → [0.1.21](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0121))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-github` (0.1.20 → [0.1.21](../../changelogs/@backstage/plugin-events-backend-module-github.md#0121))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-gitlab` (0.1.20 → [0.1.21](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#0121))

_No changelog entries found._

### `@backstage/plugin-events-backend-test-utils` (0.1.20 → [0.1.21](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0121))

_No changelog entries found._

### `@backstage/plugin-events-node` (0.2.19 → [0.2.20](../../changelogs/@backstage/plugin-events-node.md#0220))

_No changelog entries found._

### `@backstage/plugin-jenkins-backend` (0.3.4 → [0.3.5](../../changelogs/@backstage/plugin-jenkins-backend.md#035))

_No changelog entries found._

### `@backstage/plugin-kafka-backend` (0.3.8 → [0.3.9](../../changelogs/@backstage/plugin-kafka-backend.md#039))

_No changelog entries found._

### `@backstage/plugin-kubernetes-backend` (0.15.0 → [0.15.1](../../changelogs/@backstage/plugin-kubernetes-backend.md#0151))

_No changelog entries found._

### `@backstage/plugin-kubernetes-node` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-kubernetes-node.md#015))

_No changelog entries found._

### `@backstage/plugin-lighthouse-backend` (0.4.2 → [0.4.3](../../changelogs/@backstage/plugin-lighthouse-backend.md#043))

_No changelog entries found._

### `@backstage/plugin-linguist-backend` (0.5.7 → [0.5.8](../../changelogs/@backstage/plugin-linguist-backend.md#058))

_No changelog entries found._

### `@backstage/plugin-nomad-backend` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-nomad-backend.md#0113))

_No changelog entries found._

### `@backstage/plugin-periskop-backend` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-periskop-backend.md#029))

_No changelog entries found._

### `@backstage/plugin-permission-backend` (0.5.33 → [0.5.34](../../changelogs/@backstage/plugin-permission-backend.md#0534))

_No changelog entries found._

### `@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#018))

_No changelog entries found._

### `@backstage/plugin-permission-node` (0.7.21 → [0.7.22](../../changelogs/@backstage/plugin-permission-node.md#0722))

_No changelog entries found._

### `@backstage/plugin-playlist-backend` (0.3.14 → [0.3.15](../../changelogs/@backstage/plugin-playlist-backend.md#0315))

_No changelog entries found._

### `@backstage/plugin-proxy-backend` (0.4.8 → [0.4.9](../../changelogs/@backstage/plugin-proxy-backend.md#049))

_No changelog entries found._

### `@backstage/plugin-rollbar-backend` (0.1.55 → [0.1.56](../../changelogs/@backstage/plugin-rollbar-backend.md#0156))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend` (1.21.0 → [1.21.1](../../changelogs/@backstage/plugin-scaffolder-backend.md#1211))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-azure` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#013))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket.md#021))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#011))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#011))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.11 → [0.2.12](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#0212))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.34 → [0.2.35](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0235))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-gerrit` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#013))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-gitea` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#011))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-github` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#021))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.2.13 → [0.2.14](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#0214))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-rails` (0.4.27 → [0.4.28](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0428))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-sentry` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#0119))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.31 → [0.2.32](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0232))

_No changelog entries found._

### `@backstage/plugin-scaffolder-node` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-scaffolder-node.md#031))

_No changelog entries found._

### `@backstage/plugin-search-backend` (1.5.0 → [1.5.1](../../changelogs/@backstage/plugin-search-backend.md#151))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-catalog` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#0115))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-elasticsearch` (1.3.13 → [1.3.14](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#1314))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-explore` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-search-backend-module-explore.md#0115))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-pg` (0.5.19 → [0.5.20](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0520))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#014))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-techdocs` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#0115))

_No changelog entries found._

### `@backstage/plugin-search-backend-node` (1.2.14 → [1.2.15](../../changelogs/@backstage/plugin-search-backend-node.md#1215))

_No changelog entries found._

### `@backstage/plugin-sonarqube-backend` (0.2.12 → [0.2.13](../../changelogs/@backstage/plugin-sonarqube-backend.md#0213))

_No changelog entries found._

### `@backstage/plugin-stack-overflow-backend` (0.2.14 → [0.2.15](../../changelogs/@backstage/plugin-stack-overflow-backend.md#0215))

_No changelog entries found._

### `@backstage/plugin-tech-insights-backend` (0.5.24 → [0.5.25](../../changelogs/@backstage/plugin-tech-insights-backend.md#0525))

_No changelog entries found._

### `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.42 → [0.1.43](../../changelogs/@backstage/plugin-tech-insights-backend-module-jsonfc.md#0143))

_No changelog entries found._

### `@backstage/plugin-tech-insights-node` (0.4.16 → [0.4.17](../../changelogs/@backstage/plugin-tech-insights-node.md#0417))

_No changelog entries found._

### `@backstage/plugin-techdocs-backend` (1.9.3 → [1.9.4](../../changelogs/@backstage/plugin-techdocs-backend.md#194))

_No changelog entries found._

### `@backstage/plugin-techdocs-node` (1.11.2 → [1.11.3](../../changelogs/@backstage/plugin-techdocs-node.md#1113))

_No changelog entries found._

### `@backstage/plugin-todo-backend` (0.3.8 → [0.3.9](../../changelogs/@backstage/plugin-todo-backend.md#039))

_No changelog entries found._

### `@backstage/plugin-user-settings-backend` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-user-settings-backend.md#0210))

_No changelog entries found._

### `@backstage/plugin-vault-backend` (0.4.3 → [0.4.4](../../changelogs/@backstage/plugin-vault-backend.md#044))

_No changelog entries found._

### `@backstage/plugin-vault-node` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-vault-node.md#014))

_No changelog entries found._

### `@backstage/repo-tools` (0.6.0 → [0.6.1](../../changelogs/@backstage/repo-tools.md#061))

_No changelog entries found._

### `@techdocs/cli` (1.8.2 → [1.8.3](../../changelogs/@techdocs/cli.md#183))

_No changelog entries found._
