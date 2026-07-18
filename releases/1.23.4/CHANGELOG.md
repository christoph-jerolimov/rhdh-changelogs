# Backstage Release 1.23.4 changelog

Changes between 1.23.3 and 1.23.4 — 117 changed and 0 added packages.

## Summary

- [0.0.x patch version bumps](#00x-patch-version-bumps): 6 packages
- [Other patch version bumps](#other-patch-version-bumps): 111 packages

## Table of contents

- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-auth-backend-module-okta-provider` (0.0.5 → 0.0.6)](#backstageplugin-auth-backend-module-okta-provider-005--006)
  - [`@backstage/plugin-explore-backend` (0.0.22 → 0.0.23)](#backstageplugin-explore-backend-0022--0023)
  - [`@backstage/plugin-notifications-backend` (0.0.3 → 0.0.4)](#backstageplugin-notifications-backend-003--004)
  - [`@backstage/plugin-notifications-node` (0.0.3 → 0.0.4)](#backstageplugin-notifications-node-003--004)
  - [`@backstage/plugin-signals-backend` (0.0.3 → 0.0.4)](#backstageplugin-signals-backend-003--004)
  - [`@backstage/plugin-signals-node` (0.0.3 → 0.0.4)](#backstageplugin-signals-node-003--004)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-app-api` (0.5.13 → 0.5.14)](#backstagebackend-app-api-0513--0514)
  - [`@backstage/backend-common` (0.21.2 → 0.21.3)](#backstagebackend-common-0212--0213)
  - [`@backstage/backend-defaults` (0.2.12 → 0.2.13)](#backstagebackend-defaults-0212--0213)
  - [`@backstage/backend-dynamic-feature-service` (0.2.2 → 0.2.3)](#backstagebackend-dynamic-feature-service-022--023)
  - [`@backstage/backend-openapi-utils` (0.1.5 → 0.1.6)](#backstagebackend-openapi-utils-015--016)
  - [`@backstage/backend-plugin-api` (0.6.12 → 0.6.13)](#backstagebackend-plugin-api-0612--0613)
  - [`@backstage/backend-tasks` (0.5.17 → 0.5.18)](#backstagebackend-tasks-0517--0518)
  - [`@backstage/backend-test-utils` (0.3.2 → 0.3.3)](#backstagebackend-test-utils-032--033)
  - [`@backstage/plugin-adr-backend` (0.4.9 → 0.4.10)](#backstageplugin-adr-backend-049--0410)
  - [`@backstage/plugin-airbrake-backend` (0.3.9 → 0.3.10)](#backstageplugin-airbrake-backend-039--0310)
  - [`@backstage/plugin-app-backend` (0.3.60 → 0.3.61)](#backstageplugin-app-backend-0360--0361)
  - [`@backstage/plugin-app-node` (0.1.12 → 0.1.13)](#backstageplugin-app-node-0112--0113)
  - [`@backstage/plugin-auth-backend` (0.21.2 → 0.21.3)](#backstageplugin-auth-backend-0212--0213)
  - [`@backstage/plugin-auth-backend-module-atlassian-provider` (0.1.4 → 0.1.5)](#backstageplugin-auth-backend-module-atlassian-provider-014--015)
  - [`@backstage/plugin-auth-backend-module-aws-alb-provider` (0.1.3 → 0.1.4)](#backstageplugin-auth-backend-module-aws-alb-provider-013--014)
  - [`@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.2.7 → 0.2.8)](#backstageplugin-auth-backend-module-gcp-iap-provider-027--028)
  - [`@backstage/plugin-auth-backend-module-github-provider` (0.1.9 → 0.1.10)](#backstageplugin-auth-backend-module-github-provider-019--0110)
  - [`@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.9 → 0.1.10)](#backstageplugin-auth-backend-module-gitlab-provider-019--0110)
  - [`@backstage/plugin-auth-backend-module-google-provider` (0.1.9 → 0.1.10)](#backstageplugin-auth-backend-module-google-provider-019--0110)
  - [`@backstage/plugin-auth-backend-module-microsoft-provider` (0.1.7 → 0.1.8)](#backstageplugin-auth-backend-module-microsoft-provider-017--018)
  - [`@backstage/plugin-auth-backend-module-oauth2-provider` (0.1.9 → 0.1.10)](#backstageplugin-auth-backend-module-oauth2-provider-019--0110)
  - [`@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.1.5 → 0.1.6)](#backstageplugin-auth-backend-module-oauth2-proxy-provider-015--016)
  - [`@backstage/plugin-auth-backend-module-oidc-provider` (0.1.2 → 0.1.3)](#backstageplugin-auth-backend-module-oidc-provider-012--013)
  - [`@backstage/plugin-auth-backend-module-pinniped-provider` (0.1.6 → 0.1.7)](#backstageplugin-auth-backend-module-pinniped-provider-016--017)
  - [`@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.1.4 → 0.1.5)](#backstageplugin-auth-backend-module-vmware-cloud-provider-014--015)
  - [`@backstage/plugin-auth-node` (0.4.7 → 0.4.8)](#backstageplugin-auth-node-047--048)
  - [`@backstage/plugin-azure-devops-backend` (0.5.4 → 0.5.5)](#backstageplugin-azure-devops-backend-054--055)
  - [`@backstage/plugin-azure-sites-backend` (0.2.2 → 0.2.3)](#backstageplugin-azure-sites-backend-022--023)
  - [`@backstage/plugin-badges-backend` (0.3.9 → 0.3.10)](#backstageplugin-badges-backend-039--0310)
  - [`@backstage/plugin-bazaar-backend` (0.3.10 → 0.3.11)](#backstageplugin-bazaar-backend-0310--0311)
  - [`@backstage/plugin-catalog-backend` (1.17.2 → 1.17.3)](#backstageplugin-catalog-backend-1172--1173)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.3.6 → 0.3.7)](#backstageplugin-catalog-backend-module-aws-036--037)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.1.31 → 0.1.32)](#backstageplugin-catalog-backend-module-azure-0131--0132)
  - [`@backstage/plugin-catalog-backend-module-backstage-openapi` (0.1.5 → 0.1.6)](#backstageplugin-catalog-backend-module-backstage-openapi-015--016)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.27 → 0.1.28)](#backstageplugin-catalog-backend-module-bitbucket-cloud-0127--0128)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.25 → 0.1.26)](#backstageplugin-catalog-backend-module-bitbucket-server-0125--0126)
  - [`@backstage/plugin-catalog-backend-module-gcp` (0.1.12 → 0.1.13)](#backstageplugin-catalog-backend-module-gcp-0112--0113)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (0.1.28 → 0.1.29)](#backstageplugin-catalog-backend-module-gerrit-0128--0129)
  - [`@backstage/plugin-catalog-backend-module-github` (0.5.2 → 0.5.3)](#backstageplugin-catalog-backend-module-github-052--053)
  - [`@backstage/plugin-catalog-backend-module-github-org` (0.1.6 → 0.1.7)](#backstageplugin-catalog-backend-module-github-org-016--017)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.3.9 → 0.3.10)](#backstageplugin-catalog-backend-module-gitlab-039--0310)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.16 → 0.4.17)](#backstageplugin-catalog-backend-module-incremental-ingestion-0416--0417)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.5.27 → 0.5.28)](#backstageplugin-catalog-backend-module-ldap-0527--0528)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.5.19 → 0.5.20)](#backstageplugin-catalog-backend-module-msgraph-0519--0520)
  - [`@backstage/plugin-catalog-backend-module-openapi` (0.1.29 → 0.1.30)](#backstageplugin-catalog-backend-module-openapi-0129--0130)
  - [`@backstage/plugin-catalog-backend-module-puppetdb` (0.1.17 → 0.1.18)](#backstageplugin-catalog-backend-module-puppetdb-0117--0118)
  - [`@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.9 → 0.1.10)](#backstageplugin-catalog-backend-module-scaffolder-entity-model-019--0110)
  - [`@backstage/plugin-catalog-backend-module-unprocessed` (0.3.9 → 0.3.10)](#backstageplugin-catalog-backend-module-unprocessed-039--0310)
  - [`@backstage/plugin-catalog-node` (1.7.2 → 1.7.3)](#backstageplugin-catalog-node-172--173)
  - [`@backstage/plugin-code-coverage-backend` (0.2.26 → 0.2.27)](#backstageplugin-code-coverage-backend-0226--0227)
  - [`@backstage/plugin-devtools-backend` (0.2.9 → 0.2.10)](#backstageplugin-devtools-backend-029--0210)
  - [`@backstage/plugin-entity-feedback-backend` (0.2.9 → 0.2.10)](#backstageplugin-entity-feedback-backend-029--0210)
  - [`@backstage/plugin-events-backend` (0.2.21 → 0.2.22)](#backstageplugin-events-backend-0221--0222)
  - [`@backstage/plugin-events-backend-module-aws-sqs` (0.2.15 → 0.2.16)](#backstageplugin-events-backend-module-aws-sqs-0215--0216)
  - [`@backstage/plugin-events-backend-module-azure` (0.1.22 → 0.1.23)](#backstageplugin-events-backend-module-azure-0122--0123)
  - [`@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.22 → 0.1.23)](#backstageplugin-events-backend-module-bitbucket-cloud-0122--0123)
  - [`@backstage/plugin-events-backend-module-gerrit` (0.1.22 → 0.1.23)](#backstageplugin-events-backend-module-gerrit-0122--0123)
  - [`@backstage/plugin-events-backend-module-github` (0.1.22 → 0.1.23)](#backstageplugin-events-backend-module-github-0122--0123)
  - [`@backstage/plugin-events-backend-module-gitlab` (0.1.22 → 0.1.23)](#backstageplugin-events-backend-module-gitlab-0122--0123)
  - [`@backstage/plugin-events-backend-test-utils` (0.1.22 → 0.1.23)](#backstageplugin-events-backend-test-utils-0122--0123)
  - [`@backstage/plugin-events-node` (0.2.21 → 0.2.22)](#backstageplugin-events-node-0221--0222)
  - [`@backstage/plugin-jenkins-backend` (0.3.6 → 0.3.7)](#backstageplugin-jenkins-backend-036--037)
  - [`@backstage/plugin-kafka-backend` (0.3.10 → 0.3.11)](#backstageplugin-kafka-backend-0310--0311)
  - [`@backstage/plugin-kubernetes-backend` (0.15.2 → 0.15.3)](#backstageplugin-kubernetes-backend-0152--0153)
  - [`@backstage/plugin-kubernetes-node` (0.1.6 → 0.1.7)](#backstageplugin-kubernetes-node-016--017)
  - [`@backstage/plugin-lighthouse-backend` (0.4.4 → 0.4.5)](#backstageplugin-lighthouse-backend-044--045)
  - [`@backstage/plugin-linguist-backend` (0.5.9 → 0.5.10)](#backstageplugin-linguist-backend-059--0510)
  - [`@backstage/plugin-nomad-backend` (0.1.14 → 0.1.15)](#backstageplugin-nomad-backend-0114--0115)
  - [`@backstage/plugin-periskop-backend` (0.2.10 → 0.2.11)](#backstageplugin-periskop-backend-0210--0211)
  - [`@backstage/plugin-permission-backend` (0.5.35 → 0.5.36)](#backstageplugin-permission-backend-0535--0536)
  - [`@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.9 → 0.1.10)](#backstageplugin-permission-backend-module-allow-all-policy-019--0110)
  - [`@backstage/plugin-permission-node` (0.7.23 → 0.7.24)](#backstageplugin-permission-node-0723--0724)
  - [`@backstage/plugin-playlist-backend` (0.3.16 → 0.3.17)](#backstageplugin-playlist-backend-0316--0317)
  - [`@backstage/plugin-proxy-backend` (0.4.10 → 0.4.11)](#backstageplugin-proxy-backend-0410--0411)
  - [`@backstage/plugin-rollbar-backend` (0.1.57 → 0.1.58)](#backstageplugin-rollbar-backend-0157--0158)
  - [`@backstage/plugin-scaffolder-backend` (1.21.2 → 1.21.3)](#backstageplugin-scaffolder-backend-1212--1213)
  - [`@backstage/plugin-scaffolder-backend-module-azure` (0.1.4 → 0.1.5)](#backstageplugin-scaffolder-backend-module-azure-014--015)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket` (0.2.2 → 0.2.3)](#backstageplugin-scaffolder-backend-module-bitbucket-022--023)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.1.2 → 0.1.3)](#backstageplugin-scaffolder-backend-module-bitbucket-cloud-012--013)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.1.2 → 0.1.3)](#backstageplugin-scaffolder-backend-module-bitbucket-server-012--013)
  - [`@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.13 → 0.2.14)](#backstageplugin-scaffolder-backend-module-confluence-to-markdown-0213--0214)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.36 → 0.2.37)](#backstageplugin-scaffolder-backend-module-cookiecutter-0236--0237)
  - [`@backstage/plugin-scaffolder-backend-module-gerrit` (0.1.4 → 0.1.5)](#backstageplugin-scaffolder-backend-module-gerrit-014--015)
  - [`@backstage/plugin-scaffolder-backend-module-gitea` (0.1.2 → 0.1.3)](#backstageplugin-scaffolder-backend-module-gitea-012--013)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.2.2 → 0.2.3)](#backstageplugin-scaffolder-backend-module-github-022--023)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.2.15 → 0.2.16)](#backstageplugin-scaffolder-backend-module-gitlab-0215--0216)
  - [`@backstage/plugin-scaffolder-backend-module-rails` (0.4.29 → 0.4.30)](#backstageplugin-scaffolder-backend-module-rails-0429--0430)
  - [`@backstage/plugin-scaffolder-backend-module-sentry` (0.1.20 → 0.1.21)](#backstageplugin-scaffolder-backend-module-sentry-0120--0121)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.33 → 0.2.34)](#backstageplugin-scaffolder-backend-module-yeoman-0233--0234)
  - [`@backstage/plugin-scaffolder-node` (0.3.2 → 0.3.3)](#backstageplugin-scaffolder-node-032--033)
  - [`@backstage/plugin-search-backend` (1.5.2 → 1.5.3)](#backstageplugin-search-backend-152--153)
  - [`@backstage/plugin-search-backend-module-catalog` (0.1.16 → 0.1.17)](#backstageplugin-search-backend-module-catalog-0116--0117)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.3.15 → 1.3.16)](#backstageplugin-search-backend-module-elasticsearch-1315--1316)
  - [`@backstage/plugin-search-backend-module-explore` (0.1.16 → 0.1.17)](#backstageplugin-search-backend-module-explore-0116--0117)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.21 → 0.5.22)](#backstageplugin-search-backend-module-pg-0521--0522)
  - [`@backstage/plugin-search-backend-module-stack-overflow-collator` (0.1.5 → 0.1.6)](#backstageplugin-search-backend-module-stack-overflow-collator-015--016)
  - [`@backstage/plugin-search-backend-module-techdocs` (0.1.16 → 0.1.17)](#backstageplugin-search-backend-module-techdocs-0116--0117)
  - [`@backstage/plugin-search-backend-node` (1.2.16 → 1.2.17)](#backstageplugin-search-backend-node-1216--1217)
  - [`@backstage/plugin-sonarqube-backend` (0.2.14 → 0.2.15)](#backstageplugin-sonarqube-backend-0214--0215)
  - [`@backstage/plugin-stack-overflow-backend` (0.2.16 → 0.2.17)](#backstageplugin-stack-overflow-backend-0216--0217)
  - [`@backstage/plugin-tech-insights-backend` (0.5.26 → 0.5.27)](#backstageplugin-tech-insights-backend-0526--0527)
  - [`@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.44 → 0.1.45)](#backstageplugin-tech-insights-backend-module-jsonfc-0144--0145)
  - [`@backstage/plugin-tech-insights-node` (0.4.18 → 0.4.19)](#backstageplugin-tech-insights-node-0418--0419)
  - [`@backstage/plugin-techdocs-backend` (1.9.5 → 1.9.6)](#backstageplugin-techdocs-backend-195--196)
  - [`@backstage/plugin-techdocs-node` (1.11.4 → 1.11.5)](#backstageplugin-techdocs-node-1114--1115)
  - [`@backstage/plugin-todo-backend` (0.3.10 → 0.3.11)](#backstageplugin-todo-backend-0310--0311)
  - [`@backstage/plugin-user-settings-backend` (0.2.11 → 0.2.12)](#backstageplugin-user-settings-backend-0211--0212)
  - [`@backstage/plugin-vault-backend` (0.4.5 → 0.4.6)](#backstageplugin-vault-backend-045--046)
  - [`@backstage/plugin-vault-node` (0.1.5 → 0.1.6)](#backstageplugin-vault-node-015--016)
  - [`@backstage/repo-tools` (0.6.2 → 0.6.3)](#backstagerepo-tools-062--063)
  - [`@techdocs/cli` (1.8.4 → 1.8.5)](#techdocscli-184--185)

## 0.0.x patch version bumps

### `@backstage/plugin-auth-backend-module-okta-provider` (0.0.5 → [0.0.6](../../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#006))

_No changelog entries found._

### `@backstage/plugin-explore-backend` (0.0.22 → [0.0.23](../../changelogs/@backstage/plugin-explore-backend.md#0023))

_No changelog entries found._

### `@backstage/plugin-notifications-backend` (0.0.3 → [0.0.4](../../changelogs/@backstage/plugin-notifications-backend.md#004))

_No changelog entries found._

### `@backstage/plugin-notifications-node` (0.0.3 → [0.0.4](../../changelogs/@backstage/plugin-notifications-node.md#004))

_No changelog entries found._

### `@backstage/plugin-signals-backend` (0.0.3 → [0.0.4](../../changelogs/@backstage/plugin-signals-backend.md#004))

_No changelog entries found._

### `@backstage/plugin-signals-node` (0.0.3 → [0.0.4](../../changelogs/@backstage/plugin-signals-node.md#004))

_No changelog entries found._

## Other patch version bumps

### `@backstage/backend-app-api` (0.5.13 → [0.5.14](../../changelogs/@backstage/backend-app-api.md#0514))

_No changelog entries found._

### `@backstage/backend-common` (0.21.2 → [0.21.3](../../changelogs/@backstage/backend-common.md#0213))

_No changelog entries found._

### `@backstage/backend-defaults` (0.2.12 → [0.2.13](../../changelogs/@backstage/backend-defaults.md#0213))

_No changelog entries found._

### `@backstage/backend-dynamic-feature-service` (0.2.2 → [0.2.3](../../changelogs/@backstage/backend-dynamic-feature-service.md#023))

_No changelog entries found._

### `@backstage/backend-openapi-utils` (0.1.5 → [0.1.6](../../changelogs/@backstage/backend-openapi-utils.md#016))

_No changelog entries found._

### `@backstage/backend-plugin-api` (0.6.12 → [0.6.13](../../changelogs/@backstage/backend-plugin-api.md#0613))

_No changelog entries found._

### `@backstage/backend-tasks` (0.5.17 → [0.5.18](../../changelogs/@backstage/backend-tasks.md#0518))

_No changelog entries found._

### `@backstage/backend-test-utils` (0.3.2 → [0.3.3](../../changelogs/@backstage/backend-test-utils.md#033))

_No changelog entries found._

### `@backstage/plugin-adr-backend` (0.4.9 → [0.4.10](../../changelogs/@backstage/plugin-adr-backend.md#0410))

_No changelog entries found._

### `@backstage/plugin-airbrake-backend` (0.3.9 → [0.3.10](../../changelogs/@backstage/plugin-airbrake-backend.md#0310))

_No changelog entries found._

### `@backstage/plugin-app-backend` (0.3.60 → [0.3.61](../../changelogs/@backstage/plugin-app-backend.md#0361))

_No changelog entries found._

### `@backstage/plugin-app-node` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-app-node.md#0113))

_No changelog entries found._

### `@backstage/plugin-auth-backend` (0.21.2 → [0.21.3](../../changelogs/@backstage/plugin-auth-backend.md#0213))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-atlassian-provider` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#015))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#014))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#028))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-github-provider` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#0110))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#0110))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-google-provider` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#0110))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-microsoft-provider` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#018))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-oauth2-provider` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#0110))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#016))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-oidc-provider` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#013))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-pinniped-provider` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#017))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#015))

_No changelog entries found._

### `@backstage/plugin-auth-node` (0.4.7 → [0.4.8](../../changelogs/@backstage/plugin-auth-node.md#048))

_No changelog entries found._

### `@backstage/plugin-azure-devops-backend` (0.5.4 → [0.5.5](../../changelogs/@backstage/plugin-azure-devops-backend.md#055))

_No changelog entries found._

### `@backstage/plugin-azure-sites-backend` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-azure-sites-backend.md#023))

_No changelog entries found._

### `@backstage/plugin-badges-backend` (0.3.9 → [0.3.10](../../changelogs/@backstage/plugin-badges-backend.md#0310))

_No changelog entries found._

### `@backstage/plugin-bazaar-backend` (0.3.10 → [0.3.11](../../changelogs/@backstage/plugin-bazaar-backend.md#0311))

_No changelog entries found._

### `@backstage/plugin-catalog-backend` (1.17.2 → [1.17.3](../../changelogs/@backstage/plugin-catalog-backend.md#1173))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-aws` (0.3.6 → [0.3.7](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#037))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-azure` (0.1.31 → [0.1.32](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0132))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#016))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.27 → [0.1.28](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#0128))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.25 → [0.1.26](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#0126))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gcp` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#0113))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gerrit` (0.1.28 → [0.1.29](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0129))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-github` (0.5.2 → [0.5.3](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#053))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-github-org` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#017))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gitlab` (0.3.9 → [0.3.10](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#0310))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.16 → [0.4.17](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#0417))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-ldap` (0.5.27 → [0.5.28](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0528))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-msgraph` (0.5.19 → [0.5.20](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#0520))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-openapi` (0.1.29 → [0.1.30](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0130))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-puppetdb` (0.1.17 → [0.1.18](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0118))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#0110))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.3.9 → [0.3.10](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#0310))

_No changelog entries found._

### `@backstage/plugin-catalog-node` (1.7.2 → [1.7.3](../../changelogs/@backstage/plugin-catalog-node.md#173))

_No changelog entries found._

### `@backstage/plugin-code-coverage-backend` (0.2.26 → [0.2.27](../../changelogs/@backstage/plugin-code-coverage-backend.md#0227))

_No changelog entries found._

### `@backstage/plugin-devtools-backend` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-devtools-backend.md#0210))

_No changelog entries found._

### `@backstage/plugin-entity-feedback-backend` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-entity-feedback-backend.md#0210))

_No changelog entries found._

### `@backstage/plugin-events-backend` (0.2.21 → [0.2.22](../../changelogs/@backstage/plugin-events-backend.md#0222))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-aws-sqs` (0.2.15 → [0.2.16](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#0216))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-azure` (0.1.22 → [0.1.23](../../changelogs/@backstage/plugin-events-backend-module-azure.md#0123))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.22 → [0.1.23](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0123))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-gerrit` (0.1.22 → [0.1.23](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0123))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-github` (0.1.22 → [0.1.23](../../changelogs/@backstage/plugin-events-backend-module-github.md#0123))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-gitlab` (0.1.22 → [0.1.23](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#0123))

_No changelog entries found._

### `@backstage/plugin-events-backend-test-utils` (0.1.22 → [0.1.23](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0123))

_No changelog entries found._

### `@backstage/plugin-events-node` (0.2.21 → [0.2.22](../../changelogs/@backstage/plugin-events-node.md#0222))

_No changelog entries found._

### `@backstage/plugin-jenkins-backend` (0.3.6 → [0.3.7](../../changelogs/@backstage/plugin-jenkins-backend.md#037))

_No changelog entries found._

### `@backstage/plugin-kafka-backend` (0.3.10 → [0.3.11](../../changelogs/@backstage/plugin-kafka-backend.md#0311))

_No changelog entries found._

### `@backstage/plugin-kubernetes-backend` (0.15.2 → [0.15.3](../../changelogs/@backstage/plugin-kubernetes-backend.md#0153))

_No changelog entries found._

### `@backstage/plugin-kubernetes-node` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-kubernetes-node.md#017))

_No changelog entries found._

### `@backstage/plugin-lighthouse-backend` (0.4.4 → [0.4.5](../../changelogs/@backstage/plugin-lighthouse-backend.md#045))

_No changelog entries found._

### `@backstage/plugin-linguist-backend` (0.5.9 → [0.5.10](../../changelogs/@backstage/plugin-linguist-backend.md#0510))

_No changelog entries found._

### `@backstage/plugin-nomad-backend` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-nomad-backend.md#0115))

_No changelog entries found._

### `@backstage/plugin-periskop-backend` (0.2.10 → [0.2.11](../../changelogs/@backstage/plugin-periskop-backend.md#0211))

_No changelog entries found._

### `@backstage/plugin-permission-backend` (0.5.35 → [0.5.36](../../changelogs/@backstage/plugin-permission-backend.md#0536))

_No changelog entries found._

### `@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#0110))

_No changelog entries found._

### `@backstage/plugin-permission-node` (0.7.23 → [0.7.24](../../changelogs/@backstage/plugin-permission-node.md#0724))

_No changelog entries found._

### `@backstage/plugin-playlist-backend` (0.3.16 → [0.3.17](../../changelogs/@backstage/plugin-playlist-backend.md#0317))

_No changelog entries found._

### `@backstage/plugin-proxy-backend` (0.4.10 → [0.4.11](../../changelogs/@backstage/plugin-proxy-backend.md#0411))

_No changelog entries found._

### `@backstage/plugin-rollbar-backend` (0.1.57 → [0.1.58](../../changelogs/@backstage/plugin-rollbar-backend.md#0158))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend` (1.21.2 → [1.21.3](../../changelogs/@backstage/plugin-scaffolder-backend.md#1213))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-azure` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#015))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket.md#023))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#013))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#013))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.13 → [0.2.14](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#0214))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.36 → [0.2.37](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0237))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-gerrit` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#015))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-gitea` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#013))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-github` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#023))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.2.15 → [0.2.16](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#0216))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-rails` (0.4.29 → [0.4.30](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0430))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-sentry` (0.1.20 → [0.1.21](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#0121))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.33 → [0.2.34](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0234))

_No changelog entries found._

### `@backstage/plugin-scaffolder-node` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-scaffolder-node.md#033))

_No changelog entries found._

### `@backstage/plugin-search-backend` (1.5.2 → [1.5.3](../../changelogs/@backstage/plugin-search-backend.md#153))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-catalog` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#0117))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-elasticsearch` (1.3.15 → [1.3.16](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#1316))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-explore` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-search-backend-module-explore.md#0117))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-pg` (0.5.21 → [0.5.22](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0522))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#016))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-techdocs` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#0117))

_No changelog entries found._

### `@backstage/plugin-search-backend-node` (1.2.16 → [1.2.17](../../changelogs/@backstage/plugin-search-backend-node.md#1217))

_No changelog entries found._

### `@backstage/plugin-sonarqube-backend` (0.2.14 → [0.2.15](../../changelogs/@backstage/plugin-sonarqube-backend.md#0215))

_No changelog entries found._

### `@backstage/plugin-stack-overflow-backend` (0.2.16 → [0.2.17](../../changelogs/@backstage/plugin-stack-overflow-backend.md#0217))

_No changelog entries found._

### `@backstage/plugin-tech-insights-backend` (0.5.26 → [0.5.27](../../changelogs/@backstage/plugin-tech-insights-backend.md#0527))

_No changelog entries found._

### `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.44 → [0.1.45](../../changelogs/@backstage/plugin-tech-insights-backend-module-jsonfc.md#0145))

_No changelog entries found._

### `@backstage/plugin-tech-insights-node` (0.4.18 → [0.4.19](../../changelogs/@backstage/plugin-tech-insights-node.md#0419))

_No changelog entries found._

### `@backstage/plugin-techdocs-backend` (1.9.5 → [1.9.6](../../changelogs/@backstage/plugin-techdocs-backend.md#196))

_No changelog entries found._

### `@backstage/plugin-techdocs-node` (1.11.4 → [1.11.5](../../changelogs/@backstage/plugin-techdocs-node.md#1115))

_No changelog entries found._

### `@backstage/plugin-todo-backend` (0.3.10 → [0.3.11](../../changelogs/@backstage/plugin-todo-backend.md#0311))

_No changelog entries found._

### `@backstage/plugin-user-settings-backend` (0.2.11 → [0.2.12](../../changelogs/@backstage/plugin-user-settings-backend.md#0212))

_No changelog entries found._

### `@backstage/plugin-vault-backend` (0.4.5 → [0.4.6](../../changelogs/@backstage/plugin-vault-backend.md#046))

_No changelog entries found._

### `@backstage/plugin-vault-node` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-vault-node.md#016))

_No changelog entries found._

### `@backstage/repo-tools` (0.6.2 → [0.6.3](../../changelogs/@backstage/repo-tools.md#063))

_No changelog entries found._

### `@techdocs/cli` (1.8.4 → [1.8.5](../../changelogs/@techdocs/cli.md#185))

_No changelog entries found._
