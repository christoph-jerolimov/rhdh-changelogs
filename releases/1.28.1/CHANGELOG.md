# Backstage Release 1.28.1 changelog

Changes between 1.28.0 and 1.28.1 — 102 changed and 0 added packages.

## Summary

- [0.0.x patch version bumps](#00x-patch-version-bumps): 3 packages
- [Other patch version bumps](#other-patch-version-bumps): 99 packages

## Table of contents

- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-auth-backend-module-okta-provider` (0.0.12 → 0.0.13)](#backstageplugin-auth-backend-module-okta-provider-0012--0013)
  - [`@backstage/plugin-catalog-backend-module-gitlab-org` (0.0.2 → 0.0.3)](#backstageplugin-catalog-backend-module-gitlab-org-002--003)
  - [`@backstage/plugin-scaffolder-backend-module-notifications` (0.0.2 → 0.0.3)](#backstageplugin-scaffolder-backend-module-notifications-002--003)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-app-api` (0.7.6 → 0.7.7)](#backstagebackend-app-api-076--077)
  - [`@backstage/backend-common` (0.23.0 → 0.23.1)](#backstagebackend-common-0230--0231)
  - [`@backstage/backend-defaults` (0.3.0 → 0.3.1)](#backstagebackend-defaults-030--031)
  - [`@backstage/backend-dynamic-feature-service` (0.2.11 → 0.2.12)](#backstagebackend-dynamic-feature-service-0211--0212)
  - [`@backstage/backend-openapi-utils` (0.1.12 → 0.1.13)](#backstagebackend-openapi-utils-0112--0113)
  - [`@backstage/backend-plugin-api` (0.6.19 → 0.6.20)](#backstagebackend-plugin-api-0619--0620)
  - [`@backstage/backend-tasks` (0.5.24 → 0.5.25)](#backstagebackend-tasks-0524--0525)
  - [`@backstage/backend-test-utils` (0.4.0 → 0.4.1)](#backstagebackend-test-utils-040--041)
  - [`@backstage/cli` (0.26.7 → 0.26.8)](#backstagecli-0267--0268)
  - [`@backstage/plugin-app-backend` (0.3.68 → 0.3.69)](#backstageplugin-app-backend-0368--0369)
  - [`@backstage/plugin-app-node` (0.1.19 → 0.1.20)](#backstageplugin-app-node-0119--0120)
  - [`@backstage/plugin-auth-backend` (0.22.6 → 0.22.7)](#backstageplugin-auth-backend-0226--0227)
  - [`@backstage/plugin-auth-backend-module-atlassian-provider` (0.2.0 → 0.2.1)](#backstageplugin-auth-backend-module-atlassian-provider-020--021)
  - [`@backstage/plugin-auth-backend-module-aws-alb-provider` (0.1.11 → 0.1.12)](#backstageplugin-auth-backend-module-aws-alb-provider-0111--0112)
  - [`@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.1.2 → 0.1.3)](#backstageplugin-auth-backend-module-azure-easyauth-provider-012--013)
  - [`@backstage/plugin-auth-backend-module-bitbucket-provider` (0.1.2 → 0.1.3)](#backstageplugin-auth-backend-module-bitbucket-provider-012--013)
  - [`@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.1.2 → 0.1.3)](#backstageplugin-auth-backend-module-cloudflare-access-provider-012--013)
  - [`@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.2.14 → 0.2.15)](#backstageplugin-auth-backend-module-gcp-iap-provider-0214--0215)
  - [`@backstage/plugin-auth-backend-module-github-provider` (0.1.16 → 0.1.17)](#backstageplugin-auth-backend-module-github-provider-0116--0117)
  - [`@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.16 → 0.1.17)](#backstageplugin-auth-backend-module-gitlab-provider-0116--0117)
  - [`@backstage/plugin-auth-backend-module-google-provider` (0.1.16 → 0.1.17)](#backstageplugin-auth-backend-module-google-provider-0116--0117)
  - [`@backstage/plugin-auth-backend-module-guest-provider` (0.1.5 → 0.1.6)](#backstageplugin-auth-backend-module-guest-provider-015--016)
  - [`@backstage/plugin-auth-backend-module-microsoft-provider` (0.1.14 → 0.1.15)](#backstageplugin-auth-backend-module-microsoft-provider-0114--0115)
  - [`@backstage/plugin-auth-backend-module-oauth2-provider` (0.2.0 → 0.2.1)](#backstageplugin-auth-backend-module-oauth2-provider-020--021)
  - [`@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.1.12 → 0.1.13)](#backstageplugin-auth-backend-module-oauth2-proxy-provider-0112--0113)
  - [`@backstage/plugin-auth-backend-module-oidc-provider` (0.2.0 → 0.2.1)](#backstageplugin-auth-backend-module-oidc-provider-020--021)
  - [`@backstage/plugin-auth-backend-module-onelogin-provider` (0.1.0 → 0.1.1)](#backstageplugin-auth-backend-module-onelogin-provider-010--011)
  - [`@backstage/plugin-auth-backend-module-pinniped-provider` (0.1.13 → 0.1.14)](#backstageplugin-auth-backend-module-pinniped-provider-0113--0114)
  - [`@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.2.0 → 0.2.1)](#backstageplugin-auth-backend-module-vmware-cloud-provider-020--021)
  - [`@backstage/plugin-auth-node` (0.4.14 → 0.4.15)](#backstageplugin-auth-node-0414--0415)
  - [`@backstage/plugin-catalog-backend` (1.23.0 → 1.23.1)](#backstageplugin-catalog-backend-1230--1231)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.3.14 → 0.3.15)](#backstageplugin-catalog-backend-module-aws-0314--0315)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.1.39 → 0.1.40)](#backstageplugin-catalog-backend-module-azure-0139--0140)
  - [`@backstage/plugin-catalog-backend-module-backstage-openapi` (0.2.2 → 0.2.3)](#backstageplugin-catalog-backend-module-backstage-openapi-022--023)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.2.6 → 0.2.7)](#backstageplugin-catalog-backend-module-bitbucket-cloud-026--027)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.33 → 0.1.34)](#backstageplugin-catalog-backend-module-bitbucket-server-0133--0134)
  - [`@backstage/plugin-catalog-backend-module-gcp` (0.1.20 → 0.1.21)](#backstageplugin-catalog-backend-module-gcp-0120--0121)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (0.1.36 → 0.1.37)](#backstageplugin-catalog-backend-module-gerrit-0136--0137)
  - [`@backstage/plugin-catalog-backend-module-github` (0.6.2 → 0.6.3)](#backstageplugin-catalog-backend-module-github-062--063)
  - [`@backstage/plugin-catalog-backend-module-github-org` (0.1.14 → 0.1.15)](#backstageplugin-catalog-backend-module-github-org-0114--0115)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.3.18 → 0.3.19)](#backstageplugin-catalog-backend-module-gitlab-0318--0319)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.24 → 0.4.25)](#backstageplugin-catalog-backend-module-incremental-ingestion-0424--0425)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.6.0 → 0.6.1)](#backstageplugin-catalog-backend-module-ldap-060--061)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.5.27 → 0.5.28)](#backstageplugin-catalog-backend-module-msgraph-0527--0528)
  - [`@backstage/plugin-catalog-backend-module-openapi` (0.1.37 → 0.1.38)](#backstageplugin-catalog-backend-module-openapi-0137--0138)
  - [`@backstage/plugin-catalog-backend-module-puppetdb` (0.1.25 → 0.1.26)](#backstageplugin-catalog-backend-module-puppetdb-0125--0126)
  - [`@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.17 → 0.1.18)](#backstageplugin-catalog-backend-module-scaffolder-entity-model-0117--0118)
  - [`@backstage/plugin-catalog-backend-module-unprocessed` (0.4.6 → 0.4.7)](#backstageplugin-catalog-backend-module-unprocessed-046--047)
  - [`@backstage/plugin-catalog-node` (1.12.1 → 1.12.2)](#backstageplugin-catalog-node-1121--1122)
  - [`@backstage/plugin-devtools-backend` (0.3.5 → 0.3.6)](#backstageplugin-devtools-backend-035--036)
  - [`@backstage/plugin-events-backend` (0.3.6 → 0.3.7)](#backstageplugin-events-backend-036--037)
  - [`@backstage/plugin-events-backend-module-aws-sqs` (0.3.5 → 0.3.6)](#backstageplugin-events-backend-module-aws-sqs-035--036)
  - [`@backstage/plugin-events-backend-module-azure` (0.2.5 → 0.2.6)](#backstageplugin-events-backend-module-azure-025--026)
  - [`@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.5 → 0.2.6)](#backstageplugin-events-backend-module-bitbucket-cloud-025--026)
  - [`@backstage/plugin-events-backend-module-gerrit` (0.2.5 → 0.2.6)](#backstageplugin-events-backend-module-gerrit-025--026)
  - [`@backstage/plugin-events-backend-module-github` (0.2.5 → 0.2.6)](#backstageplugin-events-backend-module-github-025--026)
  - [`@backstage/plugin-events-backend-module-gitlab` (0.2.5 → 0.2.6)](#backstageplugin-events-backend-module-gitlab-025--026)
  - [`@backstage/plugin-events-backend-test-utils` (0.1.29 → 0.1.30)](#backstageplugin-events-backend-test-utils-0129--0130)
  - [`@backstage/plugin-events-node` (0.3.5 → 0.3.6)](#backstageplugin-events-node-035--036)
  - [`@backstage/plugin-kubernetes-backend` (0.18.0 → 0.18.1)](#backstageplugin-kubernetes-backend-0180--0181)
  - [`@backstage/plugin-kubernetes-node` (0.1.13 → 0.1.14)](#backstageplugin-kubernetes-node-0113--0114)
  - [`@backstage/plugin-notifications-backend` (0.3.0 → 0.3.1)](#backstageplugin-notifications-backend-030--031)
  - [`@backstage/plugin-notifications-backend-module-email` (0.1.0 → 0.1.1)](#backstageplugin-notifications-backend-module-email-010--011)
  - [`@backstage/plugin-notifications-node` (0.2.0 → 0.2.1)](#backstageplugin-notifications-node-020--021)
  - [`@backstage/plugin-permission-backend` (0.5.43 → 0.5.44)](#backstageplugin-permission-backend-0543--0544)
  - [`@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.16 → 0.1.17)](#backstageplugin-permission-backend-module-allow-all-policy-0116--0117)
  - [`@backstage/plugin-permission-node` (0.7.30 → 0.7.31)](#backstageplugin-permission-node-0730--0731)
  - [`@backstage/plugin-proxy-backend` (0.5.0 → 0.5.1)](#backstageplugin-proxy-backend-050--051)
  - [`@backstage/plugin-scaffolder-backend` (1.22.9 → 1.22.10)](#backstageplugin-scaffolder-backend-1229--12210)
  - [`@backstage/plugin-scaffolder-backend-module-azure` (0.1.11 → 0.1.12)](#backstageplugin-scaffolder-backend-module-azure-0111--0112)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket` (0.2.9 → 0.2.10)](#backstageplugin-scaffolder-backend-module-bitbucket-029--0210)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.1.9 → 0.1.10)](#backstageplugin-scaffolder-backend-module-bitbucket-cloud-019--0110)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.1.9 → 0.1.10)](#backstageplugin-scaffolder-backend-module-bitbucket-server-019--0110)
  - [`@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.20 → 0.2.21)](#backstageplugin-scaffolder-backend-module-confluence-to-markdown-0220--0221)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.43 → 0.2.44)](#backstageplugin-scaffolder-backend-module-cookiecutter-0243--0244)
  - [`@backstage/plugin-scaffolder-backend-module-gerrit` (0.1.11 → 0.1.12)](#backstageplugin-scaffolder-backend-module-gerrit-0111--0112)
  - [`@backstage/plugin-scaffolder-backend-module-gitea` (0.1.9 → 0.1.10)](#backstageplugin-scaffolder-backend-module-gitea-019--0110)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.3.0 → 0.3.1)](#backstageplugin-scaffolder-backend-module-github-030--031)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.4.1 → 0.4.2)](#backstageplugin-scaffolder-backend-module-gitlab-041--042)
  - [`@backstage/plugin-scaffolder-backend-module-rails` (0.4.36 → 0.4.37)](#backstageplugin-scaffolder-backend-module-rails-0436--0437)
  - [`@backstage/plugin-scaffolder-backend-module-sentry` (0.1.27 → 0.1.28)](#backstageplugin-scaffolder-backend-module-sentry-0127--0128)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.3.2 → 0.3.3)](#backstageplugin-scaffolder-backend-module-yeoman-032--033)
  - [`@backstage/plugin-scaffolder-node` (0.4.5 → 0.4.6)](#backstageplugin-scaffolder-node-045--046)
  - [`@backstage/plugin-scaffolder-node-test-utils` (0.1.5 → 0.1.6)](#backstageplugin-scaffolder-node-test-utils-015--016)
  - [`@backstage/plugin-search-backend` (1.5.10 → 1.5.11)](#backstageplugin-search-backend-1510--1511)
  - [`@backstage/plugin-search-backend-module-catalog` (0.1.25 → 0.1.26)](#backstageplugin-search-backend-module-catalog-0125--0126)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.5.0 → 1.5.1)](#backstageplugin-search-backend-module-elasticsearch-150--151)
  - [`@backstage/plugin-search-backend-module-explore` (0.1.25 → 0.1.26)](#backstageplugin-search-backend-module-explore-0125--0126)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.28 → 0.5.29)](#backstageplugin-search-backend-module-pg-0528--0529)
  - [`@backstage/plugin-search-backend-module-stack-overflow-collator` (0.1.12 → 0.1.13)](#backstageplugin-search-backend-module-stack-overflow-collator-0112--0113)
  - [`@backstage/plugin-search-backend-module-techdocs` (0.1.24 → 0.1.25)](#backstageplugin-search-backend-module-techdocs-0124--0125)
  - [`@backstage/plugin-search-backend-node` (1.2.24 → 1.2.25)](#backstageplugin-search-backend-node-1224--1225)
  - [`@backstage/plugin-signals-backend` (0.1.5 → 0.1.6)](#backstageplugin-signals-backend-015--016)
  - [`@backstage/plugin-signals-node` (0.1.5 → 0.1.6)](#backstageplugin-signals-node-015--016)
  - [`@backstage/plugin-techdocs-backend` (1.10.6 → 1.10.7)](#backstageplugin-techdocs-backend-1106--1107)
  - [`@backstage/plugin-techdocs-node` (1.12.5 → 1.12.6)](#backstageplugin-techdocs-node-1125--1126)
  - [`@backstage/plugin-user-settings-backend` (0.2.18 → 0.2.19)](#backstageplugin-user-settings-backend-0218--0219)
  - [`@backstage/repo-tools` (0.9.1 → 0.9.2)](#backstagerepo-tools-091--092)
  - [`@techdocs/cli` (1.8.12 → 1.8.13)](#techdocscli-1812--1813)

## 0.0.x patch version bumps

### `@backstage/plugin-auth-backend-module-okta-provider` (0.0.12 → 0.0.13)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gitlab-org` (0.0.2 → 0.0.3)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-notifications` (0.0.2 → 0.0.3)

_No changelog entries found._

## Other patch version bumps

### `@backstage/backend-app-api` (0.7.6 → 0.7.7)

_No changelog entries found._

### `@backstage/backend-common` (0.23.0 → 0.23.1)

_No changelog entries found._

### `@backstage/backend-defaults` (0.3.0 → 0.3.1)

_No changelog entries found._

### `@backstage/backend-dynamic-feature-service` (0.2.11 → 0.2.12)

_No changelog entries found._

### `@backstage/backend-openapi-utils` (0.1.12 → 0.1.13)

_No changelog entries found._

### `@backstage/backend-plugin-api` (0.6.19 → 0.6.20)

_No changelog entries found._

### `@backstage/backend-tasks` (0.5.24 → 0.5.25)

_No changelog entries found._

### `@backstage/backend-test-utils` (0.4.0 → 0.4.1)

_No changelog entries found._

### `@backstage/cli` (0.26.7 → 0.26.8)

_No changelog entries found._

### `@backstage/plugin-app-backend` (0.3.68 → 0.3.69)

_No changelog entries found._

### `@backstage/plugin-app-node` (0.1.19 → 0.1.20)

_No changelog entries found._

### `@backstage/plugin-auth-backend` (0.22.6 → 0.22.7)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-atlassian-provider` (0.2.0 → 0.2.1)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.1.11 → 0.1.12)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.1.2 → 0.1.3)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-bitbucket-provider` (0.1.2 → 0.1.3)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.1.2 → 0.1.3)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.2.14 → 0.2.15)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-github-provider` (0.1.16 → 0.1.17)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.16 → 0.1.17)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-google-provider` (0.1.16 → 0.1.17)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-guest-provider` (0.1.5 → 0.1.6)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-microsoft-provider` (0.1.14 → 0.1.15)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-oauth2-provider` (0.2.0 → 0.2.1)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.1.12 → 0.1.13)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-oidc-provider` (0.2.0 → 0.2.1)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-onelogin-provider` (0.1.0 → 0.1.1)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-pinniped-provider` (0.1.13 → 0.1.14)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.2.0 → 0.2.1)

_No changelog entries found._

### `@backstage/plugin-auth-node` (0.4.14 → 0.4.15)

_No changelog entries found._

### `@backstage/plugin-catalog-backend` (1.23.0 → 1.23.1)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-aws` (0.3.14 → 0.3.15)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-azure` (0.1.39 → 0.1.40)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.2.2 → 0.2.3)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.2.6 → 0.2.7)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.33 → 0.1.34)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gcp` (0.1.20 → 0.1.21)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gerrit` (0.1.36 → 0.1.37)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-github` (0.6.2 → 0.6.3)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-github-org` (0.1.14 → 0.1.15)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gitlab` (0.3.18 → 0.3.19)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.24 → 0.4.25)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-ldap` (0.6.0 → 0.6.1)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-msgraph` (0.5.27 → 0.5.28)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-openapi` (0.1.37 → 0.1.38)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-puppetdb` (0.1.25 → 0.1.26)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.17 → 0.1.18)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.4.6 → 0.4.7)

_No changelog entries found._

### `@backstage/plugin-catalog-node` (1.12.1 → 1.12.2)

_No changelog entries found._

### `@backstage/plugin-devtools-backend` (0.3.5 → 0.3.6)

_No changelog entries found._

### `@backstage/plugin-events-backend` (0.3.6 → 0.3.7)

_No changelog entries found._

### `@backstage/plugin-events-backend-module-aws-sqs` (0.3.5 → 0.3.6)

_No changelog entries found._

### `@backstage/plugin-events-backend-module-azure` (0.2.5 → 0.2.6)

_No changelog entries found._

### `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.5 → 0.2.6)

_No changelog entries found._

### `@backstage/plugin-events-backend-module-gerrit` (0.2.5 → 0.2.6)

_No changelog entries found._

### `@backstage/plugin-events-backend-module-github` (0.2.5 → 0.2.6)

_No changelog entries found._

### `@backstage/plugin-events-backend-module-gitlab` (0.2.5 → 0.2.6)

_No changelog entries found._

### `@backstage/plugin-events-backend-test-utils` (0.1.29 → 0.1.30)

_No changelog entries found._

### `@backstage/plugin-events-node` (0.3.5 → 0.3.6)

_No changelog entries found._

### `@backstage/plugin-kubernetes-backend` (0.18.0 → 0.18.1)

_No changelog entries found._

### `@backstage/plugin-kubernetes-node` (0.1.13 → 0.1.14)

_No changelog entries found._

### `@backstage/plugin-notifications-backend` (0.3.0 → 0.3.1)

_No changelog entries found._

### `@backstage/plugin-notifications-backend-module-email` (0.1.0 → 0.1.1)

_No changelog entries found._

### `@backstage/plugin-notifications-node` (0.2.0 → 0.2.1)

_No changelog entries found._

### `@backstage/plugin-permission-backend` (0.5.43 → 0.5.44)

_No changelog entries found._

### `@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.16 → 0.1.17)

_No changelog entries found._

### `@backstage/plugin-permission-node` (0.7.30 → 0.7.31)

_No changelog entries found._

### `@backstage/plugin-proxy-backend` (0.5.0 → 0.5.1)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend` (1.22.9 → 1.22.10)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-azure` (0.1.11 → 0.1.12)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.2.9 → 0.2.10)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.1.9 → 0.1.10)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.1.9 → 0.1.10)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.20 → 0.2.21)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.43 → 0.2.44)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-gerrit` (0.1.11 → 0.1.12)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-gitea` (0.1.9 → 0.1.10)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-github` (0.3.0 → 0.3.1)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.4.1 → 0.4.2)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-rails` (0.4.36 → 0.4.37)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-sentry` (0.1.27 → 0.1.28)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.3.2 → 0.3.3)

_No changelog entries found._

### `@backstage/plugin-scaffolder-node` (0.4.5 → 0.4.6)

_No changelog entries found._

### `@backstage/plugin-scaffolder-node-test-utils` (0.1.5 → 0.1.6)

_No changelog entries found._

### `@backstage/plugin-search-backend` (1.5.10 → 1.5.11)

_No changelog entries found._

### `@backstage/plugin-search-backend-module-catalog` (0.1.25 → 0.1.26)

_No changelog entries found._

### `@backstage/plugin-search-backend-module-elasticsearch` (1.5.0 → 1.5.1)

_No changelog entries found._

### `@backstage/plugin-search-backend-module-explore` (0.1.25 → 0.1.26)

_No changelog entries found._

### `@backstage/plugin-search-backend-module-pg` (0.5.28 → 0.5.29)

_No changelog entries found._

### `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.1.12 → 0.1.13)

_No changelog entries found._

### `@backstage/plugin-search-backend-module-techdocs` (0.1.24 → 0.1.25)

_No changelog entries found._

### `@backstage/plugin-search-backend-node` (1.2.24 → 1.2.25)

_No changelog entries found._

### `@backstage/plugin-signals-backend` (0.1.5 → 0.1.6)

_No changelog entries found._

### `@backstage/plugin-signals-node` (0.1.5 → 0.1.6)

_No changelog entries found._

### `@backstage/plugin-techdocs-backend` (1.10.6 → 1.10.7)

_No changelog entries found._

### `@backstage/plugin-techdocs-node` (1.12.5 → 1.12.6)

_No changelog entries found._

### `@backstage/plugin-user-settings-backend` (0.2.18 → 0.2.19)

_No changelog entries found._

### `@backstage/repo-tools` (0.9.1 → 0.9.2)

_No changelog entries found._

### `@techdocs/cli` (1.8.12 → 1.8.13)

_No changelog entries found._
