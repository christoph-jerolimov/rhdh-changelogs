# Backstage Release 1.23.3 changelog

Changes between 1.23.2 and 1.23.3 — 117 changed and 0 added packages.

## Summary

- [0.0.x patch version bumps](#00x-patch-version-bumps): 6 packages
- [Other patch version bumps](#other-patch-version-bumps): 111 packages

## Table of contents

- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-auth-backend-module-okta-provider` (0.0.4 → 0.0.5)](#backstageplugin-auth-backend-module-okta-provider-004--005)
  - [`@backstage/plugin-explore-backend` (0.0.21 → 0.0.22)](#backstageplugin-explore-backend-0021--0022)
  - [`@backstage/plugin-notifications-backend` (0.0.2 → 0.0.3)](#backstageplugin-notifications-backend-002--003)
  - [`@backstage/plugin-notifications-node` (0.0.2 → 0.0.3)](#backstageplugin-notifications-node-002--003)
  - [`@backstage/plugin-signals-backend` (0.0.2 → 0.0.3)](#backstageplugin-signals-backend-002--003)
  - [`@backstage/plugin-signals-node` (0.0.2 → 0.0.3)](#backstageplugin-signals-node-002--003)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-app-api` (0.5.12 → 0.5.13)](#backstagebackend-app-api-0512--0513)
  - [`@backstage/backend-common` (0.21.1 → 0.21.2)](#backstagebackend-common-0211--0212)
  - [`@backstage/backend-defaults` (0.2.11 → 0.2.12)](#backstagebackend-defaults-0211--0212)
  - [`@backstage/backend-dynamic-feature-service` (0.2.1 → 0.2.2)](#backstagebackend-dynamic-feature-service-021--022)
  - [`@backstage/backend-openapi-utils` (0.1.4 → 0.1.5)](#backstagebackend-openapi-utils-014--015)
  - [`@backstage/backend-plugin-api` (0.6.11 → 0.6.12)](#backstagebackend-plugin-api-0611--0612)
  - [`@backstage/backend-tasks` (0.5.16 → 0.5.17)](#backstagebackend-tasks-0516--0517)
  - [`@backstage/backend-test-utils` (0.3.1 → 0.3.2)](#backstagebackend-test-utils-031--032)
  - [`@backstage/plugin-adr-backend` (0.4.8 → 0.4.9)](#backstageplugin-adr-backend-048--049)
  - [`@backstage/plugin-airbrake-backend` (0.3.8 → 0.3.9)](#backstageplugin-airbrake-backend-038--039)
  - [`@backstage/plugin-app-backend` (0.3.59 → 0.3.60)](#backstageplugin-app-backend-0359--0360)
  - [`@backstage/plugin-app-node` (0.1.11 → 0.1.12)](#backstageplugin-app-node-0111--0112)
  - [`@backstage/plugin-auth-backend` (0.21.1 → 0.21.2)](#backstageplugin-auth-backend-0211--0212)
  - [`@backstage/plugin-auth-backend-module-atlassian-provider` (0.1.3 → 0.1.4)](#backstageplugin-auth-backend-module-atlassian-provider-013--014)
  - [`@backstage/plugin-auth-backend-module-aws-alb-provider` (0.1.2 → 0.1.3)](#backstageplugin-auth-backend-module-aws-alb-provider-012--013)
  - [`@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.2.6 → 0.2.7)](#backstageplugin-auth-backend-module-gcp-iap-provider-026--027)
  - [`@backstage/plugin-auth-backend-module-github-provider` (0.1.8 → 0.1.9)](#backstageplugin-auth-backend-module-github-provider-018--019)
  - [`@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.8 → 0.1.9)](#backstageplugin-auth-backend-module-gitlab-provider-018--019)
  - [`@backstage/plugin-auth-backend-module-google-provider` (0.1.8 → 0.1.9)](#backstageplugin-auth-backend-module-google-provider-018--019)
  - [`@backstage/plugin-auth-backend-module-microsoft-provider` (0.1.6 → 0.1.7)](#backstageplugin-auth-backend-module-microsoft-provider-016--017)
  - [`@backstage/plugin-auth-backend-module-oauth2-provider` (0.1.8 → 0.1.9)](#backstageplugin-auth-backend-module-oauth2-provider-018--019)
  - [`@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.1.4 → 0.1.5)](#backstageplugin-auth-backend-module-oauth2-proxy-provider-014--015)
  - [`@backstage/plugin-auth-backend-module-oidc-provider` (0.1.1 → 0.1.2)](#backstageplugin-auth-backend-module-oidc-provider-011--012)
  - [`@backstage/plugin-auth-backend-module-pinniped-provider` (0.1.5 → 0.1.6)](#backstageplugin-auth-backend-module-pinniped-provider-015--016)
  - [`@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.1.3 → 0.1.4)](#backstageplugin-auth-backend-module-vmware-cloud-provider-013--014)
  - [`@backstage/plugin-auth-node` (0.4.6 → 0.4.7)](#backstageplugin-auth-node-046--047)
  - [`@backstage/plugin-azure-devops-backend` (0.5.3 → 0.5.4)](#backstageplugin-azure-devops-backend-053--054)
  - [`@backstage/plugin-azure-sites-backend` (0.2.1 → 0.2.2)](#backstageplugin-azure-sites-backend-021--022)
  - [`@backstage/plugin-badges-backend` (0.3.8 → 0.3.9)](#backstageplugin-badges-backend-038--039)
  - [`@backstage/plugin-bazaar-backend` (0.3.9 → 0.3.10)](#backstageplugin-bazaar-backend-039--0310)
  - [`@backstage/plugin-catalog-backend` (1.17.1 → 1.17.2)](#backstageplugin-catalog-backend-1171--1172)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.3.5 → 0.3.6)](#backstageplugin-catalog-backend-module-aws-035--036)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.1.30 → 0.1.31)](#backstageplugin-catalog-backend-module-azure-0130--0131)
  - [`@backstage/plugin-catalog-backend-module-backstage-openapi` (0.1.4 → 0.1.5)](#backstageplugin-catalog-backend-module-backstage-openapi-014--015)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.26 → 0.1.27)](#backstageplugin-catalog-backend-module-bitbucket-cloud-0126--0127)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.24 → 0.1.25)](#backstageplugin-catalog-backend-module-bitbucket-server-0124--0125)
  - [`@backstage/plugin-catalog-backend-module-gcp` (0.1.11 → 0.1.12)](#backstageplugin-catalog-backend-module-gcp-0111--0112)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (0.1.27 → 0.1.28)](#backstageplugin-catalog-backend-module-gerrit-0127--0128)
  - [`@backstage/plugin-catalog-backend-module-github` (0.5.1 → 0.5.2)](#backstageplugin-catalog-backend-module-github-051--052)
  - [`@backstage/plugin-catalog-backend-module-github-org` (0.1.5 → 0.1.6)](#backstageplugin-catalog-backend-module-github-org-015--016)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.3.8 → 0.3.9)](#backstageplugin-catalog-backend-module-gitlab-038--039)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.15 → 0.4.16)](#backstageplugin-catalog-backend-module-incremental-ingestion-0415--0416)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.5.26 → 0.5.27)](#backstageplugin-catalog-backend-module-ldap-0526--0527)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.5.18 → 0.5.19)](#backstageplugin-catalog-backend-module-msgraph-0518--0519)
  - [`@backstage/plugin-catalog-backend-module-openapi` (0.1.28 → 0.1.29)](#backstageplugin-catalog-backend-module-openapi-0128--0129)
  - [`@backstage/plugin-catalog-backend-module-puppetdb` (0.1.16 → 0.1.17)](#backstageplugin-catalog-backend-module-puppetdb-0116--0117)
  - [`@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.8 → 0.1.9)](#backstageplugin-catalog-backend-module-scaffolder-entity-model-018--019)
  - [`@backstage/plugin-catalog-backend-module-unprocessed` (0.3.8 → 0.3.9)](#backstageplugin-catalog-backend-module-unprocessed-038--039)
  - [`@backstage/plugin-catalog-node` (1.7.1 → 1.7.2)](#backstageplugin-catalog-node-171--172)
  - [`@backstage/plugin-code-coverage-backend` (0.2.25 → 0.2.26)](#backstageplugin-code-coverage-backend-0225--0226)
  - [`@backstage/plugin-devtools-backend` (0.2.8 → 0.2.9)](#backstageplugin-devtools-backend-028--029)
  - [`@backstage/plugin-entity-feedback-backend` (0.2.8 → 0.2.9)](#backstageplugin-entity-feedback-backend-028--029)
  - [`@backstage/plugin-events-backend` (0.2.20 → 0.2.21)](#backstageplugin-events-backend-0220--0221)
  - [`@backstage/plugin-events-backend-module-aws-sqs` (0.2.14 → 0.2.15)](#backstageplugin-events-backend-module-aws-sqs-0214--0215)
  - [`@backstage/plugin-events-backend-module-azure` (0.1.21 → 0.1.22)](#backstageplugin-events-backend-module-azure-0121--0122)
  - [`@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.21 → 0.1.22)](#backstageplugin-events-backend-module-bitbucket-cloud-0121--0122)
  - [`@backstage/plugin-events-backend-module-gerrit` (0.1.21 → 0.1.22)](#backstageplugin-events-backend-module-gerrit-0121--0122)
  - [`@backstage/plugin-events-backend-module-github` (0.1.21 → 0.1.22)](#backstageplugin-events-backend-module-github-0121--0122)
  - [`@backstage/plugin-events-backend-module-gitlab` (0.1.21 → 0.1.22)](#backstageplugin-events-backend-module-gitlab-0121--0122)
  - [`@backstage/plugin-events-backend-test-utils` (0.1.21 → 0.1.22)](#backstageplugin-events-backend-test-utils-0121--0122)
  - [`@backstage/plugin-events-node` (0.2.20 → 0.2.21)](#backstageplugin-events-node-0220--0221)
  - [`@backstage/plugin-jenkins-backend` (0.3.5 → 0.3.6)](#backstageplugin-jenkins-backend-035--036)
  - [`@backstage/plugin-kafka-backend` (0.3.9 → 0.3.10)](#backstageplugin-kafka-backend-039--0310)
  - [`@backstage/plugin-kubernetes-backend` (0.15.1 → 0.15.2)](#backstageplugin-kubernetes-backend-0151--0152)
  - [`@backstage/plugin-kubernetes-node` (0.1.5 → 0.1.6)](#backstageplugin-kubernetes-node-015--016)
  - [`@backstage/plugin-lighthouse-backend` (0.4.3 → 0.4.4)](#backstageplugin-lighthouse-backend-043--044)
  - [`@backstage/plugin-linguist-backend` (0.5.8 → 0.5.9)](#backstageplugin-linguist-backend-058--059)
  - [`@backstage/plugin-nomad-backend` (0.1.13 → 0.1.14)](#backstageplugin-nomad-backend-0113--0114)
  - [`@backstage/plugin-periskop-backend` (0.2.9 → 0.2.10)](#backstageplugin-periskop-backend-029--0210)
  - [`@backstage/plugin-permission-backend` (0.5.34 → 0.5.35)](#backstageplugin-permission-backend-0534--0535)
  - [`@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.8 → 0.1.9)](#backstageplugin-permission-backend-module-allow-all-policy-018--019)
  - [`@backstage/plugin-permission-node` (0.7.22 → 0.7.23)](#backstageplugin-permission-node-0722--0723)
  - [`@backstage/plugin-playlist-backend` (0.3.15 → 0.3.16)](#backstageplugin-playlist-backend-0315--0316)
  - [`@backstage/plugin-proxy-backend` (0.4.9 → 0.4.10)](#backstageplugin-proxy-backend-049--0410)
  - [`@backstage/plugin-rollbar-backend` (0.1.56 → 0.1.57)](#backstageplugin-rollbar-backend-0156--0157)
  - [`@backstage/plugin-scaffolder-backend` (1.21.1 → 1.21.2)](#backstageplugin-scaffolder-backend-1211--1212)
  - [`@backstage/plugin-scaffolder-backend-module-azure` (0.1.3 → 0.1.4)](#backstageplugin-scaffolder-backend-module-azure-013--014)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket` (0.2.1 → 0.2.2)](#backstageplugin-scaffolder-backend-module-bitbucket-021--022)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.1.1 → 0.1.2)](#backstageplugin-scaffolder-backend-module-bitbucket-cloud-011--012)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.1.1 → 0.1.2)](#backstageplugin-scaffolder-backend-module-bitbucket-server-011--012)
  - [`@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.12 → 0.2.13)](#backstageplugin-scaffolder-backend-module-confluence-to-markdown-0212--0213)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.35 → 0.2.36)](#backstageplugin-scaffolder-backend-module-cookiecutter-0235--0236)
  - [`@backstage/plugin-scaffolder-backend-module-gerrit` (0.1.3 → 0.1.4)](#backstageplugin-scaffolder-backend-module-gerrit-013--014)
  - [`@backstage/plugin-scaffolder-backend-module-gitea` (0.1.1 → 0.1.2)](#backstageplugin-scaffolder-backend-module-gitea-011--012)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.2.1 → 0.2.2)](#backstageplugin-scaffolder-backend-module-github-021--022)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.2.14 → 0.2.15)](#backstageplugin-scaffolder-backend-module-gitlab-0214--0215)
  - [`@backstage/plugin-scaffolder-backend-module-rails` (0.4.28 → 0.4.29)](#backstageplugin-scaffolder-backend-module-rails-0428--0429)
  - [`@backstage/plugin-scaffolder-backend-module-sentry` (0.1.19 → 0.1.20)](#backstageplugin-scaffolder-backend-module-sentry-0119--0120)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.32 → 0.2.33)](#backstageplugin-scaffolder-backend-module-yeoman-0232--0233)
  - [`@backstage/plugin-scaffolder-node` (0.3.1 → 0.3.2)](#backstageplugin-scaffolder-node-031--032)
  - [`@backstage/plugin-search-backend` (1.5.1 → 1.5.2)](#backstageplugin-search-backend-151--152)
  - [`@backstage/plugin-search-backend-module-catalog` (0.1.15 → 0.1.16)](#backstageplugin-search-backend-module-catalog-0115--0116)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.3.14 → 1.3.15)](#backstageplugin-search-backend-module-elasticsearch-1314--1315)
  - [`@backstage/plugin-search-backend-module-explore` (0.1.15 → 0.1.16)](#backstageplugin-search-backend-module-explore-0115--0116)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.20 → 0.5.21)](#backstageplugin-search-backend-module-pg-0520--0521)
  - [`@backstage/plugin-search-backend-module-stack-overflow-collator` (0.1.4 → 0.1.5)](#backstageplugin-search-backend-module-stack-overflow-collator-014--015)
  - [`@backstage/plugin-search-backend-module-techdocs` (0.1.15 → 0.1.16)](#backstageplugin-search-backend-module-techdocs-0115--0116)
  - [`@backstage/plugin-search-backend-node` (1.2.15 → 1.2.16)](#backstageplugin-search-backend-node-1215--1216)
  - [`@backstage/plugin-sonarqube-backend` (0.2.13 → 0.2.14)](#backstageplugin-sonarqube-backend-0213--0214)
  - [`@backstage/plugin-stack-overflow-backend` (0.2.15 → 0.2.16)](#backstageplugin-stack-overflow-backend-0215--0216)
  - [`@backstage/plugin-tech-insights-backend` (0.5.25 → 0.5.26)](#backstageplugin-tech-insights-backend-0525--0526)
  - [`@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.43 → 0.1.44)](#backstageplugin-tech-insights-backend-module-jsonfc-0143--0144)
  - [`@backstage/plugin-tech-insights-node` (0.4.17 → 0.4.18)](#backstageplugin-tech-insights-node-0417--0418)
  - [`@backstage/plugin-techdocs-backend` (1.9.4 → 1.9.5)](#backstageplugin-techdocs-backend-194--195)
  - [`@backstage/plugin-techdocs-node` (1.11.3 → 1.11.4)](#backstageplugin-techdocs-node-1113--1114)
  - [`@backstage/plugin-todo-backend` (0.3.9 → 0.3.10)](#backstageplugin-todo-backend-039--0310)
  - [`@backstage/plugin-user-settings-backend` (0.2.10 → 0.2.11)](#backstageplugin-user-settings-backend-0210--0211)
  - [`@backstage/plugin-vault-backend` (0.4.4 → 0.4.5)](#backstageplugin-vault-backend-044--045)
  - [`@backstage/plugin-vault-node` (0.1.4 → 0.1.5)](#backstageplugin-vault-node-014--015)
  - [`@backstage/repo-tools` (0.6.1 → 0.6.2)](#backstagerepo-tools-061--062)
  - [`@techdocs/cli` (1.8.3 → 1.8.4)](#techdocscli-183--184)

## 0.0.x patch version bumps

### `@backstage/plugin-auth-backend-module-okta-provider` (0.0.4 → [0.0.5](../../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#005))

_No changelog entries found._

### `@backstage/plugin-explore-backend` (0.0.21 → [0.0.22](../../changelogs/@backstage/plugin-explore-backend.md#0022))

_No changelog entries found._

### `@backstage/plugin-notifications-backend` (0.0.2 → [0.0.3](../../changelogs/@backstage/plugin-notifications-backend.md#003))

_No changelog entries found._

### `@backstage/plugin-notifications-node` (0.0.2 → [0.0.3](../../changelogs/@backstage/plugin-notifications-node.md#003))

_No changelog entries found._

### `@backstage/plugin-signals-backend` (0.0.2 → [0.0.3](../../changelogs/@backstage/plugin-signals-backend.md#003))

_No changelog entries found._

### `@backstage/plugin-signals-node` (0.0.2 → [0.0.3](../../changelogs/@backstage/plugin-signals-node.md#003))

_No changelog entries found._

## Other patch version bumps

### `@backstage/backend-app-api` (0.5.12 → [0.5.13](../../changelogs/@backstage/backend-app-api.md#0513))

_No changelog entries found._

### `@backstage/backend-common` (0.21.1 → [0.21.2](../../changelogs/@backstage/backend-common.md#0212))

_No changelog entries found._

### `@backstage/backend-defaults` (0.2.11 → [0.2.12](../../changelogs/@backstage/backend-defaults.md#0212))

_No changelog entries found._

### `@backstage/backend-dynamic-feature-service` (0.2.1 → [0.2.2](../../changelogs/@backstage/backend-dynamic-feature-service.md#022))

_No changelog entries found._

### `@backstage/backend-openapi-utils` (0.1.4 → [0.1.5](../../changelogs/@backstage/backend-openapi-utils.md#015))

_No changelog entries found._

### `@backstage/backend-plugin-api` (0.6.11 → [0.6.12](../../changelogs/@backstage/backend-plugin-api.md#0612))

_No changelog entries found._

### `@backstage/backend-tasks` (0.5.16 → [0.5.17](../../changelogs/@backstage/backend-tasks.md#0517))

_No changelog entries found._

### `@backstage/backend-test-utils` (0.3.1 → [0.3.2](../../changelogs/@backstage/backend-test-utils.md#032))

_No changelog entries found._

### `@backstage/plugin-adr-backend` (0.4.8 → [0.4.9](../../changelogs/@backstage/plugin-adr-backend.md#049))

_No changelog entries found._

### `@backstage/plugin-airbrake-backend` (0.3.8 → [0.3.9](../../changelogs/@backstage/plugin-airbrake-backend.md#039))

_No changelog entries found._

### `@backstage/plugin-app-backend` (0.3.59 → [0.3.60](../../changelogs/@backstage/plugin-app-backend.md#0360))

_No changelog entries found._

### `@backstage/plugin-app-node` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-app-node.md#0112))

_No changelog entries found._

### `@backstage/plugin-auth-backend` (0.21.1 → [0.21.2](../../changelogs/@backstage/plugin-auth-backend.md#0212))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-atlassian-provider` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#014))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#013))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#027))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-github-provider` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#019))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#019))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-google-provider` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#019))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-microsoft-provider` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#017))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-oauth2-provider` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#019))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#015))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-oidc-provider` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#012))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-pinniped-provider` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#016))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#014))

_No changelog entries found._

### `@backstage/plugin-auth-node` (0.4.6 → [0.4.7](../../changelogs/@backstage/plugin-auth-node.md#047))

_No changelog entries found._

### `@backstage/plugin-azure-devops-backend` (0.5.3 → [0.5.4](../../changelogs/@backstage/plugin-azure-devops-backend.md#054))

_No changelog entries found._

### `@backstage/plugin-azure-sites-backend` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-azure-sites-backend.md#022))

_No changelog entries found._

### `@backstage/plugin-badges-backend` (0.3.8 → [0.3.9](../../changelogs/@backstage/plugin-badges-backend.md#039))

_No changelog entries found._

### `@backstage/plugin-bazaar-backend` (0.3.9 → [0.3.10](../../changelogs/@backstage/plugin-bazaar-backend.md#0310))

_No changelog entries found._

### `@backstage/plugin-catalog-backend` (1.17.1 → [1.17.2](../../changelogs/@backstage/plugin-catalog-backend.md#1172))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-aws` (0.3.5 → [0.3.6](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#036))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-azure` (0.1.30 → [0.1.31](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0131))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#015))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.26 → [0.1.27](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#0127))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.24 → [0.1.25](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#0125))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gcp` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#0112))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gerrit` (0.1.27 → [0.1.28](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0128))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-github` (0.5.1 → [0.5.2](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#052))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-github-org` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#016))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gitlab` (0.3.8 → [0.3.9](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#039))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.15 → [0.4.16](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#0416))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-ldap` (0.5.26 → [0.5.27](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0527))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-msgraph` (0.5.18 → [0.5.19](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#0519))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-openapi` (0.1.28 → [0.1.29](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0129))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-puppetdb` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0117))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#019))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.3.8 → [0.3.9](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#039))

_No changelog entries found._

### `@backstage/plugin-catalog-node` (1.7.1 → [1.7.2](../../changelogs/@backstage/plugin-catalog-node.md#172))

_No changelog entries found._

### `@backstage/plugin-code-coverage-backend` (0.2.25 → [0.2.26](../../changelogs/@backstage/plugin-code-coverage-backend.md#0226))

_No changelog entries found._

### `@backstage/plugin-devtools-backend` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-devtools-backend.md#029))

_No changelog entries found._

### `@backstage/plugin-entity-feedback-backend` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-entity-feedback-backend.md#029))

_No changelog entries found._

### `@backstage/plugin-events-backend` (0.2.20 → [0.2.21](../../changelogs/@backstage/plugin-events-backend.md#0221))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-aws-sqs` (0.2.14 → [0.2.15](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#0215))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-azure` (0.1.21 → [0.1.22](../../changelogs/@backstage/plugin-events-backend-module-azure.md#0122))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.21 → [0.1.22](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0122))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-gerrit` (0.1.21 → [0.1.22](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0122))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-github` (0.1.21 → [0.1.22](../../changelogs/@backstage/plugin-events-backend-module-github.md#0122))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-gitlab` (0.1.21 → [0.1.22](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#0122))

_No changelog entries found._

### `@backstage/plugin-events-backend-test-utils` (0.1.21 → [0.1.22](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0122))

_No changelog entries found._

### `@backstage/plugin-events-node` (0.2.20 → [0.2.21](../../changelogs/@backstage/plugin-events-node.md#0221))

_No changelog entries found._

### `@backstage/plugin-jenkins-backend` (0.3.5 → [0.3.6](../../changelogs/@backstage/plugin-jenkins-backend.md#036))

_No changelog entries found._

### `@backstage/plugin-kafka-backend` (0.3.9 → [0.3.10](../../changelogs/@backstage/plugin-kafka-backend.md#0310))

_No changelog entries found._

### `@backstage/plugin-kubernetes-backend` (0.15.1 → [0.15.2](../../changelogs/@backstage/plugin-kubernetes-backend.md#0152))

_No changelog entries found._

### `@backstage/plugin-kubernetes-node` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-kubernetes-node.md#016))

_No changelog entries found._

### `@backstage/plugin-lighthouse-backend` (0.4.3 → [0.4.4](../../changelogs/@backstage/plugin-lighthouse-backend.md#044))

_No changelog entries found._

### `@backstage/plugin-linguist-backend` (0.5.8 → [0.5.9](../../changelogs/@backstage/plugin-linguist-backend.md#059))

_No changelog entries found._

### `@backstage/plugin-nomad-backend` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-nomad-backend.md#0114))

_No changelog entries found._

### `@backstage/plugin-periskop-backend` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-periskop-backend.md#0210))

_No changelog entries found._

### `@backstage/plugin-permission-backend` (0.5.34 → [0.5.35](../../changelogs/@backstage/plugin-permission-backend.md#0535))

_No changelog entries found._

### `@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#019))

_No changelog entries found._

### `@backstage/plugin-permission-node` (0.7.22 → [0.7.23](../../changelogs/@backstage/plugin-permission-node.md#0723))

_No changelog entries found._

### `@backstage/plugin-playlist-backend` (0.3.15 → [0.3.16](../../changelogs/@backstage/plugin-playlist-backend.md#0316))

_No changelog entries found._

### `@backstage/plugin-proxy-backend` (0.4.9 → [0.4.10](../../changelogs/@backstage/plugin-proxy-backend.md#0410))

_No changelog entries found._

### `@backstage/plugin-rollbar-backend` (0.1.56 → [0.1.57](../../changelogs/@backstage/plugin-rollbar-backend.md#0157))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend` (1.21.1 → [1.21.2](../../changelogs/@backstage/plugin-scaffolder-backend.md#1212))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-azure` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#014))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket.md#022))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#012))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#012))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.12 → [0.2.13](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#0213))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.35 → [0.2.36](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0236))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-gerrit` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#014))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-gitea` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#012))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-github` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#022))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.2.14 → [0.2.15](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#0215))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-rails` (0.4.28 → [0.4.29](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0429))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-sentry` (0.1.19 → [0.1.20](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#0120))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.32 → [0.2.33](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0233))

_No changelog entries found._

### `@backstage/plugin-scaffolder-node` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-scaffolder-node.md#032))

_No changelog entries found._

### `@backstage/plugin-search-backend` (1.5.1 → [1.5.2](../../changelogs/@backstage/plugin-search-backend.md#152))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-catalog` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#0116))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-elasticsearch` (1.3.14 → [1.3.15](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#1315))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-explore` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-search-backend-module-explore.md#0116))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-pg` (0.5.20 → [0.5.21](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0521))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#015))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-techdocs` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#0116))

_No changelog entries found._

### `@backstage/plugin-search-backend-node` (1.2.15 → [1.2.16](../../changelogs/@backstage/plugin-search-backend-node.md#1216))

_No changelog entries found._

### `@backstage/plugin-sonarqube-backend` (0.2.13 → [0.2.14](../../changelogs/@backstage/plugin-sonarqube-backend.md#0214))

_No changelog entries found._

### `@backstage/plugin-stack-overflow-backend` (0.2.15 → [0.2.16](../../changelogs/@backstage/plugin-stack-overflow-backend.md#0216))

_No changelog entries found._

### `@backstage/plugin-tech-insights-backend` (0.5.25 → [0.5.26](../../changelogs/@backstage/plugin-tech-insights-backend.md#0526))

_No changelog entries found._

### `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.43 → [0.1.44](../../changelogs/@backstage/plugin-tech-insights-backend-module-jsonfc.md#0144))

_No changelog entries found._

### `@backstage/plugin-tech-insights-node` (0.4.17 → [0.4.18](../../changelogs/@backstage/plugin-tech-insights-node.md#0418))

_No changelog entries found._

### `@backstage/plugin-techdocs-backend` (1.9.4 → [1.9.5](../../changelogs/@backstage/plugin-techdocs-backend.md#195))

_No changelog entries found._

### `@backstage/plugin-techdocs-node` (1.11.3 → [1.11.4](../../changelogs/@backstage/plugin-techdocs-node.md#1114))

_No changelog entries found._

### `@backstage/plugin-todo-backend` (0.3.9 → [0.3.10](../../changelogs/@backstage/plugin-todo-backend.md#0310))

_No changelog entries found._

### `@backstage/plugin-user-settings-backend` (0.2.10 → [0.2.11](../../changelogs/@backstage/plugin-user-settings-backend.md#0211))

_No changelog entries found._

### `@backstage/plugin-vault-backend` (0.4.4 → [0.4.5](../../changelogs/@backstage/plugin-vault-backend.md#045))

_No changelog entries found._

### `@backstage/plugin-vault-node` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-vault-node.md#015))

_No changelog entries found._

### `@backstage/repo-tools` (0.6.1 → [0.6.2](../../changelogs/@backstage/repo-tools.md#062))

_No changelog entries found._

### `@techdocs/cli` (1.8.3 → [1.8.4](../../changelogs/@techdocs/cli.md#184))

_No changelog entries found._
