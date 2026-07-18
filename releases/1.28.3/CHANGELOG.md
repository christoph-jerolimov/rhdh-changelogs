# Backstage Release 1.28.3 changelog

Changes between 1.28.2 and 1.28.3 — 112 changed and 0 added packages.

## Summary

- [0.0.x patch version bumps](#00x-patch-version-bumps): 3 packages
- [Minor version bumps](#minor-version-bumps): 2 packages
- [Other patch version bumps](#other-patch-version-bumps): 107 packages

## Table of contents

- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-auth-backend-module-okta-provider` (0.0.13 → 0.0.14)](#backstageplugin-auth-backend-module-okta-provider-0013--0014)
  - [`@backstage/plugin-catalog-backend-module-gitlab-org` (0.0.3 → 0.0.4)](#backstageplugin-catalog-backend-module-gitlab-org-003--004)
  - [`@backstage/plugin-scaffolder-backend-module-notifications` (0.0.3 → 0.0.4)](#backstageplugin-scaffolder-backend-module-notifications-003--004)
- [Minor version bumps](#minor-version-bumps)
  - [`@backstage/core-app-api` (1.12.6 → 1.13.0)](#backstagecore-app-api-1126--1130)
  - [`@backstage/plugin-scaffolder` (1.21.0 → 1.22.0)](#backstageplugin-scaffolder-1210--1220)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/app-defaults` (1.5.6 → 1.5.7)](#backstageapp-defaults-156--157)
  - [`@backstage/backend-app-api` (0.7.8 → 0.7.9)](#backstagebackend-app-api-078--079)
  - [`@backstage/backend-common` (0.23.1 → 0.23.2)](#backstagebackend-common-0231--0232)
  - [`@backstage/backend-defaults` (0.3.2 → 0.3.3)](#backstagebackend-defaults-032--033)
  - [`@backstage/backend-dynamic-feature-service` (0.2.13 → 0.2.14)](#backstagebackend-dynamic-feature-service-0213--0214)
  - [`@backstage/backend-openapi-utils` (0.1.13 → 0.1.14)](#backstagebackend-openapi-utils-0113--0114)
  - [`@backstage/backend-plugin-api` (0.6.20 → 0.6.21)](#backstagebackend-plugin-api-0620--0621)
  - [`@backstage/backend-tasks` (0.5.25 → 0.5.26)](#backstagebackend-tasks-0525--0526)
  - [`@backstage/backend-test-utils` (0.4.2 → 0.4.3)](#backstagebackend-test-utils-042--043)
  - [`@backstage/cli` (0.26.9 → 0.26.10)](#backstagecli-0269--02610)
  - [`@backstage/dev-utils` (1.0.33 → 1.0.34)](#backstagedev-utils-1033--1034)
  - [`@backstage/frontend-app-api` (0.7.1 → 0.7.2)](#backstagefrontend-app-api-071--072)
  - [`@backstage/frontend-test-utils` (0.1.8 → 0.1.9)](#backstagefrontend-test-utils-018--019)
  - [`@backstage/plugin-app-backend` (0.3.69 → 0.3.70)](#backstageplugin-app-backend-0369--0370)
  - [`@backstage/plugin-app-node` (0.1.20 → 0.1.21)](#backstageplugin-app-node-0120--0121)
  - [`@backstage/plugin-auth-backend` (0.22.7 → 0.22.8)](#backstageplugin-auth-backend-0227--0228)
  - [`@backstage/plugin-auth-backend-module-atlassian-provider` (0.2.1 → 0.2.2)](#backstageplugin-auth-backend-module-atlassian-provider-021--022)
  - [`@backstage/plugin-auth-backend-module-aws-alb-provider` (0.1.12 → 0.1.13)](#backstageplugin-auth-backend-module-aws-alb-provider-0112--0113)
  - [`@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.1.3 → 0.1.4)](#backstageplugin-auth-backend-module-azure-easyauth-provider-013--014)
  - [`@backstage/plugin-auth-backend-module-bitbucket-provider` (0.1.3 → 0.1.4)](#backstageplugin-auth-backend-module-bitbucket-provider-013--014)
  - [`@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.1.3 → 0.1.4)](#backstageplugin-auth-backend-module-cloudflare-access-provider-013--014)
  - [`@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.2.15 → 0.2.16)](#backstageplugin-auth-backend-module-gcp-iap-provider-0215--0216)
  - [`@backstage/plugin-auth-backend-module-github-provider` (0.1.17 → 0.1.18)](#backstageplugin-auth-backend-module-github-provider-0117--0118)
  - [`@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.17 → 0.1.18)](#backstageplugin-auth-backend-module-gitlab-provider-0117--0118)
  - [`@backstage/plugin-auth-backend-module-google-provider` (0.1.17 → 0.1.18)](#backstageplugin-auth-backend-module-google-provider-0117--0118)
  - [`@backstage/plugin-auth-backend-module-guest-provider` (0.1.6 → 0.1.7)](#backstageplugin-auth-backend-module-guest-provider-016--017)
  - [`@backstage/plugin-auth-backend-module-microsoft-provider` (0.1.15 → 0.1.16)](#backstageplugin-auth-backend-module-microsoft-provider-0115--0116)
  - [`@backstage/plugin-auth-backend-module-oauth2-provider` (0.2.1 → 0.2.2)](#backstageplugin-auth-backend-module-oauth2-provider-021--022)
  - [`@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.1.13 → 0.1.14)](#backstageplugin-auth-backend-module-oauth2-proxy-provider-0113--0114)
  - [`@backstage/plugin-auth-backend-module-oidc-provider` (0.2.1 → 0.2.2)](#backstageplugin-auth-backend-module-oidc-provider-021--022)
  - [`@backstage/plugin-auth-backend-module-onelogin-provider` (0.1.1 → 0.1.2)](#backstageplugin-auth-backend-module-onelogin-provider-011--012)
  - [`@backstage/plugin-auth-backend-module-pinniped-provider` (0.1.14 → 0.1.15)](#backstageplugin-auth-backend-module-pinniped-provider-0114--0115)
  - [`@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.2.1 → 0.2.2)](#backstageplugin-auth-backend-module-vmware-cloud-provider-021--022)
  - [`@backstage/plugin-auth-node` (0.4.15 → 0.4.16)](#backstageplugin-auth-node-0415--0416)
  - [`@backstage/plugin-catalog-backend` (1.23.1 → 1.23.2)](#backstageplugin-catalog-backend-1231--1232)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.3.15 → 0.3.16)](#backstageplugin-catalog-backend-module-aws-0315--0316)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.1.40 → 0.1.41)](#backstageplugin-catalog-backend-module-azure-0140--0141)
  - [`@backstage/plugin-catalog-backend-module-backstage-openapi` (0.2.3 → 0.2.4)](#backstageplugin-catalog-backend-module-backstage-openapi-023--024)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.2.7 → 0.2.8)](#backstageplugin-catalog-backend-module-bitbucket-cloud-027--028)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.34 → 0.1.35)](#backstageplugin-catalog-backend-module-bitbucket-server-0134--0135)
  - [`@backstage/plugin-catalog-backend-module-gcp` (0.1.21 → 0.1.22)](#backstageplugin-catalog-backend-module-gcp-0121--0122)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (0.1.37 → 0.1.38)](#backstageplugin-catalog-backend-module-gerrit-0137--0138)
  - [`@backstage/plugin-catalog-backend-module-github` (0.6.3 → 0.6.4)](#backstageplugin-catalog-backend-module-github-063--064)
  - [`@backstage/plugin-catalog-backend-module-github-org` (0.1.15 → 0.1.16)](#backstageplugin-catalog-backend-module-github-org-0115--0116)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.3.19 → 0.3.20)](#backstageplugin-catalog-backend-module-gitlab-0319--0320)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.25 → 0.4.26)](#backstageplugin-catalog-backend-module-incremental-ingestion-0425--0426)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.6.1 → 0.6.2)](#backstageplugin-catalog-backend-module-ldap-061--062)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.5.28 → 0.5.29)](#backstageplugin-catalog-backend-module-msgraph-0528--0529)
  - [`@backstage/plugin-catalog-backend-module-openapi` (0.1.38 → 0.1.39)](#backstageplugin-catalog-backend-module-openapi-0138--0139)
  - [`@backstage/plugin-catalog-backend-module-puppetdb` (0.1.26 → 0.1.27)](#backstageplugin-catalog-backend-module-puppetdb-0126--0127)
  - [`@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.18 → 0.1.19)](#backstageplugin-catalog-backend-module-scaffolder-entity-model-0118--0119)
  - [`@backstage/plugin-catalog-backend-module-unprocessed` (0.4.7 → 0.4.8)](#backstageplugin-catalog-backend-module-unprocessed-047--048)
  - [`@backstage/plugin-catalog-node` (1.12.2 → 1.12.3)](#backstageplugin-catalog-node-1122--1123)
  - [`@backstage/plugin-devtools-backend` (0.3.6 → 0.3.7)](#backstageplugin-devtools-backend-036--037)
  - [`@backstage/plugin-events-backend` (0.3.7 → 0.3.8)](#backstageplugin-events-backend-037--038)
  - [`@backstage/plugin-events-backend-module-aws-sqs` (0.3.6 → 0.3.7)](#backstageplugin-events-backend-module-aws-sqs-036--037)
  - [`@backstage/plugin-events-backend-module-azure` (0.2.6 → 0.2.7)](#backstageplugin-events-backend-module-azure-026--027)
  - [`@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.6 → 0.2.7)](#backstageplugin-events-backend-module-bitbucket-cloud-026--027)
  - [`@backstage/plugin-events-backend-module-gerrit` (0.2.6 → 0.2.7)](#backstageplugin-events-backend-module-gerrit-026--027)
  - [`@backstage/plugin-events-backend-module-github` (0.2.6 → 0.2.7)](#backstageplugin-events-backend-module-github-026--027)
  - [`@backstage/plugin-events-backend-module-gitlab` (0.2.6 → 0.2.7)](#backstageplugin-events-backend-module-gitlab-026--027)
  - [`@backstage/plugin-events-backend-test-utils` (0.1.30 → 0.1.31)](#backstageplugin-events-backend-test-utils-0130--0131)
  - [`@backstage/plugin-events-node` (0.3.6 → 0.3.7)](#backstageplugin-events-node-036--037)
  - [`@backstage/plugin-home` (0.7.5 → 0.7.6)](#backstageplugin-home-075--076)
  - [`@backstage/plugin-kubernetes-backend` (0.18.1 → 0.18.2)](#backstageplugin-kubernetes-backend-0181--0182)
  - [`@backstage/plugin-kubernetes-node` (0.1.14 → 0.1.15)](#backstageplugin-kubernetes-node-0114--0115)
  - [`@backstage/plugin-notifications-backend` (0.3.1 → 0.3.2)](#backstageplugin-notifications-backend-031--032)
  - [`@backstage/plugin-notifications-backend-module-email` (0.1.1 → 0.1.2)](#backstageplugin-notifications-backend-module-email-011--012)
  - [`@backstage/plugin-notifications-node` (0.2.1 → 0.2.2)](#backstageplugin-notifications-node-021--022)
  - [`@backstage/plugin-permission-backend` (0.5.44 → 0.5.45)](#backstageplugin-permission-backend-0544--0545)
  - [`@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.17 → 0.1.18)](#backstageplugin-permission-backend-module-allow-all-policy-0117--0118)
  - [`@backstage/plugin-permission-node` (0.7.31 → 0.7.32)](#backstageplugin-permission-node-0731--0732)
  - [`@backstage/plugin-proxy-backend` (0.5.1 → 0.5.2)](#backstageplugin-proxy-backend-051--052)
  - [`@backstage/plugin-scaffolder-backend` (1.22.10 → 1.22.11)](#backstageplugin-scaffolder-backend-12210--12211)
  - [`@backstage/plugin-scaffolder-backend-module-azure` (0.1.12 → 0.1.13)](#backstageplugin-scaffolder-backend-module-azure-0112--0113)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket` (0.2.10 → 0.2.11)](#backstageplugin-scaffolder-backend-module-bitbucket-0210--0211)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.1.10 → 0.1.11)](#backstageplugin-scaffolder-backend-module-bitbucket-cloud-0110--0111)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.1.10 → 0.1.11)](#backstageplugin-scaffolder-backend-module-bitbucket-server-0110--0111)
  - [`@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.21 → 0.2.22)](#backstageplugin-scaffolder-backend-module-confluence-to-markdown-0221--0222)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.44 → 0.2.45)](#backstageplugin-scaffolder-backend-module-cookiecutter-0244--0245)
  - [`@backstage/plugin-scaffolder-backend-module-gerrit` (0.1.12 → 0.1.13)](#backstageplugin-scaffolder-backend-module-gerrit-0112--0113)
  - [`@backstage/plugin-scaffolder-backend-module-gitea` (0.1.10 → 0.1.11)](#backstageplugin-scaffolder-backend-module-gitea-0110--0111)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.3.1 → 0.3.2)](#backstageplugin-scaffolder-backend-module-github-031--032)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.4.2 → 0.4.3)](#backstageplugin-scaffolder-backend-module-gitlab-042--043)
  - [`@backstage/plugin-scaffolder-backend-module-rails` (0.4.37 → 0.4.38)](#backstageplugin-scaffolder-backend-module-rails-0437--0438)
  - [`@backstage/plugin-scaffolder-backend-module-sentry` (0.1.28 → 0.1.29)](#backstageplugin-scaffolder-backend-module-sentry-0128--0129)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.3.4 → 0.3.5)](#backstageplugin-scaffolder-backend-module-yeoman-034--035)
  - [`@backstage/plugin-scaffolder-node` (0.4.6 → 0.4.7)](#backstageplugin-scaffolder-node-046--047)
  - [`@backstage/plugin-scaffolder-node-test-utils` (0.1.7 → 0.1.8)](#backstageplugin-scaffolder-node-test-utils-017--018)
  - [`@backstage/plugin-search-backend` (1.5.12 → 1.5.13)](#backstageplugin-search-backend-1512--1513)
  - [`@backstage/plugin-search-backend-module-catalog` (0.1.26 → 0.1.27)](#backstageplugin-search-backend-module-catalog-0126--0127)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.5.1 → 1.5.2)](#backstageplugin-search-backend-module-elasticsearch-151--152)
  - [`@backstage/plugin-search-backend-module-explore` (0.1.26 → 0.1.27)](#backstageplugin-search-backend-module-explore-0126--0127)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.30 → 0.5.31)](#backstageplugin-search-backend-module-pg-0530--0531)
  - [`@backstage/plugin-search-backend-module-stack-overflow-collator` (0.1.13 → 0.1.14)](#backstageplugin-search-backend-module-stack-overflow-collator-0113--0114)
  - [`@backstage/plugin-search-backend-module-techdocs` (0.1.25 → 0.1.26)](#backstageplugin-search-backend-module-techdocs-0125--0126)
  - [`@backstage/plugin-search-backend-node` (1.2.25 → 1.2.26)](#backstageplugin-search-backend-node-1225--1226)
  - [`@backstage/plugin-signals-backend` (0.1.6 → 0.1.7)](#backstageplugin-signals-backend-016--017)
  - [`@backstage/plugin-signals-node` (0.1.6 → 0.1.7)](#backstageplugin-signals-node-016--017)
  - [`@backstage/plugin-techdocs-addons-test-utils` (1.0.33 → 1.0.34)](#backstageplugin-techdocs-addons-test-utils-1033--1034)
  - [`@backstage/plugin-techdocs-backend` (1.10.7 → 1.10.8)](#backstageplugin-techdocs-backend-1107--1108)
  - [`@backstage/plugin-techdocs-node` (1.12.6 → 1.12.7)](#backstageplugin-techdocs-node-1126--1127)
  - [`@backstage/plugin-user-settings` (0.8.7 → 0.8.8)](#backstageplugin-user-settings-087--088)
  - [`@backstage/plugin-user-settings-backend` (0.2.19 → 0.2.20)](#backstageplugin-user-settings-backend-0219--0220)
  - [`@backstage/repo-tools` (0.9.2 → 0.9.3)](#backstagerepo-tools-092--093)
  - [`@backstage/test-utils` (1.5.6 → 1.5.7)](#backstagetest-utils-156--157)
  - [`@techdocs/cli` (1.8.14 → 1.8.15)](#techdocscli-1814--1815)

## 0.0.x patch version bumps

### `@backstage/plugin-auth-backend-module-okta-provider` (0.0.13 → [0.0.14](../../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#0014))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gitlab-org` (0.0.3 → [0.0.4](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab-org.md#004))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-notifications` (0.0.3 → [0.0.4](../../changelogs/@backstage/plugin-scaffolder-backend-module-notifications.md#004))

_No changelog entries found._

## Minor version bumps

### `@backstage/core-app-api` (1.12.6 → [1.13.0](../../changelogs/@backstage/core-app-api.md#1130))

_No changelog entries found._

### `@backstage/plugin-scaffolder` (1.21.0 → [1.22.0](../../changelogs/@backstage/plugin-scaffolder.md#1220))

_No changelog entries found._

## Other patch version bumps

### `@backstage/app-defaults` (1.5.6 → [1.5.7](../../changelogs/@backstage/app-defaults.md#157))

_No changelog entries found._

### `@backstage/backend-app-api` (0.7.8 → [0.7.9](../../changelogs/@backstage/backend-app-api.md#079))

_No changelog entries found._

### `@backstage/backend-common` (0.23.1 → [0.23.2](../../changelogs/@backstage/backend-common.md#0232))

_No changelog entries found._

### `@backstage/backend-defaults` (0.3.2 → [0.3.3](../../changelogs/@backstage/backend-defaults.md#033))

_No changelog entries found._

### `@backstage/backend-dynamic-feature-service` (0.2.13 → [0.2.14](../../changelogs/@backstage/backend-dynamic-feature-service.md#0214))

_No changelog entries found._

### `@backstage/backend-openapi-utils` (0.1.13 → [0.1.14](../../changelogs/@backstage/backend-openapi-utils.md#0114))

_No changelog entries found._

### `@backstage/backend-plugin-api` (0.6.20 → [0.6.21](../../changelogs/@backstage/backend-plugin-api.md#0621))

_No changelog entries found._

### `@backstage/backend-tasks` (0.5.25 → [0.5.26](../../changelogs/@backstage/backend-tasks.md#0526))

_No changelog entries found._

### `@backstage/backend-test-utils` (0.4.2 → [0.4.3](../../changelogs/@backstage/backend-test-utils.md#043))

_No changelog entries found._

### `@backstage/cli` (0.26.9 → [0.26.10](../../changelogs/@backstage/cli.md#02610))

_No changelog entries found._

### `@backstage/dev-utils` (1.0.33 → [1.0.34](../../changelogs/@backstage/dev-utils.md#1034))

_No changelog entries found._

### `@backstage/frontend-app-api` (0.7.1 → [0.7.2](../../changelogs/@backstage/frontend-app-api.md#072))

_No changelog entries found._

### `@backstage/frontend-test-utils` (0.1.8 → [0.1.9](../../changelogs/@backstage/frontend-test-utils.md#019))

_No changelog entries found._

### `@backstage/plugin-app-backend` (0.3.69 → [0.3.70](../../changelogs/@backstage/plugin-app-backend.md#0370))

_No changelog entries found._

### `@backstage/plugin-app-node` (0.1.20 → [0.1.21](../../changelogs/@backstage/plugin-app-node.md#0121))

_No changelog entries found._

### `@backstage/plugin-auth-backend` (0.22.7 → [0.22.8](../../changelogs/@backstage/plugin-auth-backend.md#0228))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-atlassian-provider` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#022))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#0113))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-auth-backend-module-azure-easyauth-provider.md#014))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-bitbucket-provider` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-provider.md#014))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-auth-backend-module-cloudflare-access-provider.md#014))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.2.15 → [0.2.16](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#0216))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-github-provider` (0.1.17 → [0.1.18](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#0118))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.17 → [0.1.18](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#0118))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-google-provider` (0.1.17 → [0.1.18](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#0118))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-guest-provider` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-auth-backend-module-guest-provider.md#017))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-microsoft-provider` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#0116))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-oauth2-provider` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#022))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#0114))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-oidc-provider` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#022))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-onelogin-provider` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-auth-backend-module-onelogin-provider.md#012))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-pinniped-provider` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#0115))

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#022))

_No changelog entries found._

### `@backstage/plugin-auth-node` (0.4.15 → [0.4.16](../../changelogs/@backstage/plugin-auth-node.md#0416))

_No changelog entries found._

### `@backstage/plugin-catalog-backend` (1.23.1 → [1.23.2](../../changelogs/@backstage/plugin-catalog-backend.md#1232))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-aws` (0.3.15 → [0.3.16](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#0316))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-azure` (0.1.40 → [0.1.41](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0141))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#024))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#028))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.34 → [0.1.35](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#0135))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gcp` (0.1.21 → [0.1.22](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#0122))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gerrit` (0.1.37 → [0.1.38](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0138))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-github` (0.6.3 → [0.6.4](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#064))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-github-org` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#0116))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gitlab` (0.3.19 → [0.3.20](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#0320))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.25 → [0.4.26](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#0426))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-ldap` (0.6.1 → [0.6.2](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#062))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-msgraph` (0.5.28 → [0.5.29](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#0529))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-openapi` (0.1.38 → [0.1.39](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0139))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-puppetdb` (0.1.26 → [0.1.27](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0127))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#0119))

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.4.7 → [0.4.8](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#048))

_No changelog entries found._

### `@backstage/plugin-catalog-node` (1.12.2 → [1.12.3](../../changelogs/@backstage/plugin-catalog-node.md#1123))

_No changelog entries found._

### `@backstage/plugin-devtools-backend` (0.3.6 → [0.3.7](../../changelogs/@backstage/plugin-devtools-backend.md#037))

_No changelog entries found._

### `@backstage/plugin-events-backend` (0.3.7 → [0.3.8](../../changelogs/@backstage/plugin-events-backend.md#038))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-aws-sqs` (0.3.6 → [0.3.7](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#037))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-azure` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-events-backend-module-azure.md#027))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#027))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-gerrit` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#027))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-github` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-events-backend-module-github.md#027))

_No changelog entries found._

### `@backstage/plugin-events-backend-module-gitlab` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#027))

_No changelog entries found._

### `@backstage/plugin-events-backend-test-utils` (0.1.30 → [0.1.31](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0131))

_No changelog entries found._

### `@backstage/plugin-events-node` (0.3.6 → [0.3.7](../../changelogs/@backstage/plugin-events-node.md#037))

_No changelog entries found._

### `@backstage/plugin-home` (0.7.5 → [0.7.6](../../changelogs/@backstage/plugin-home.md#076))

_No changelog entries found._

### `@backstage/plugin-kubernetes-backend` (0.18.1 → [0.18.2](../../changelogs/@backstage/plugin-kubernetes-backend.md#0182))

_No changelog entries found._

### `@backstage/plugin-kubernetes-node` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-kubernetes-node.md#0115))

_No changelog entries found._

### `@backstage/plugin-notifications-backend` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-notifications-backend.md#032))

_No changelog entries found._

### `@backstage/plugin-notifications-backend-module-email` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-notifications-backend-module-email.md#012))

_No changelog entries found._

### `@backstage/plugin-notifications-node` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-notifications-node.md#022))

_No changelog entries found._

### `@backstage/plugin-permission-backend` (0.5.44 → [0.5.45](../../changelogs/@backstage/plugin-permission-backend.md#0545))

_No changelog entries found._

### `@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.17 → [0.1.18](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#0118))

_No changelog entries found._

### `@backstage/plugin-permission-node` (0.7.31 → [0.7.32](../../changelogs/@backstage/plugin-permission-node.md#0732))

_No changelog entries found._

### `@backstage/plugin-proxy-backend` (0.5.1 → [0.5.2](../../changelogs/@backstage/plugin-proxy-backend.md#052))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend` (1.22.10 → [1.22.11](../../changelogs/@backstage/plugin-scaffolder-backend.md#12211))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-azure` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#0113))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.2.10 → [0.2.11](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket.md#0211))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#0111))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#0111))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.21 → [0.2.22](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#0222))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.44 → [0.2.45](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0245))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-gerrit` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#0113))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-gitea` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#0111))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-github` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#032))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.4.2 → [0.4.3](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#043))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-rails` (0.4.37 → [0.4.38](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0438))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-sentry` (0.1.28 → [0.1.29](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#0129))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.3.4 → [0.3.5](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#035))

_No changelog entries found._

### `@backstage/plugin-scaffolder-node` (0.4.6 → [0.4.7](../../changelogs/@backstage/plugin-scaffolder-node.md#047))

_No changelog entries found._

### `@backstage/plugin-scaffolder-node-test-utils` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#018))

_No changelog entries found._

### `@backstage/plugin-search-backend` (1.5.12 → [1.5.13](../../changelogs/@backstage/plugin-search-backend.md#1513))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-catalog` (0.1.26 → [0.1.27](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#0127))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-elasticsearch` (1.5.1 → [1.5.2](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#152))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-explore` (0.1.26 → [0.1.27](../../changelogs/@backstage/plugin-search-backend-module-explore.md#0127))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-pg` (0.5.30 → [0.5.31](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0531))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#0114))

_No changelog entries found._

### `@backstage/plugin-search-backend-module-techdocs` (0.1.25 → [0.1.26](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#0126))

_No changelog entries found._

### `@backstage/plugin-search-backend-node` (1.2.25 → [1.2.26](../../changelogs/@backstage/plugin-search-backend-node.md#1226))

_No changelog entries found._

### `@backstage/plugin-signals-backend` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-signals-backend.md#017))

_No changelog entries found._

### `@backstage/plugin-signals-node` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-signals-node.md#017))

_No changelog entries found._

### `@backstage/plugin-techdocs-addons-test-utils` (1.0.33 → [1.0.34](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#1034))

_No changelog entries found._

### `@backstage/plugin-techdocs-backend` (1.10.7 → [1.10.8](../../changelogs/@backstage/plugin-techdocs-backend.md#1108))

_No changelog entries found._

### `@backstage/plugin-techdocs-node` (1.12.6 → [1.12.7](../../changelogs/@backstage/plugin-techdocs-node.md#1127))

_No changelog entries found._

### `@backstage/plugin-user-settings` (0.8.7 → [0.8.8](../../changelogs/@backstage/plugin-user-settings.md#088))

_No changelog entries found._

### `@backstage/plugin-user-settings-backend` (0.2.19 → [0.2.20](../../changelogs/@backstage/plugin-user-settings-backend.md#0220))

_No changelog entries found._

### `@backstage/repo-tools` (0.9.2 → [0.9.3](../../changelogs/@backstage/repo-tools.md#093))

_No changelog entries found._

### `@backstage/test-utils` (1.5.6 → [1.5.7](../../changelogs/@backstage/test-utils.md#157))

_No changelog entries found._

### `@techdocs/cli` (1.8.14 → [1.8.15](../../changelogs/@techdocs/cli.md#1815))

_No changelog entries found._
