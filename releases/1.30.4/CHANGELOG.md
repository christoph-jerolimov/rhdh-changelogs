# Backstage Release 1.30.4 changelog

Changes between 1.30.3 and 1.30.4 — 103 changed and 0 added packages.

## Summary

- [0.0.x patch version bumps](#00x-patch-version-bumps): 3 packages
- [Other patch version bumps](#other-patch-version-bumps): 99 packages
- [Excluded dependency updates for packages](#excluded-dependency-updates-for-packages): 1 package

## Table of contents

- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-auth-backend-module-okta-provider` (0.0.16 → 0.0.17)](#backstageplugin-auth-backend-module-okta-provider-0016--0017)
  - [`@backstage/plugin-catalog-backend-module-logs` (0.0.3 → 0.0.4)](#backstageplugin-catalog-backend-module-logs-003--004)
  - [`@backstage/plugin-scaffolder-backend-module-notifications` (0.0.6 → 0.0.7)](#backstageplugin-scaffolder-backend-module-notifications-006--007)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-app-api` (0.9.2 → 0.9.3)](#backstagebackend-app-api-092--093)
  - [`@backstage/backend-common` (0.24.0 → 0.24.1)](#backstagebackend-common-0240--0241)
  - [`@backstage/backend-defaults` (0.4.3 → 0.4.4)](#backstagebackend-defaults-043--044)
  - [`@backstage/backend-dynamic-feature-service` (0.3.1 → 0.3.2)](#backstagebackend-dynamic-feature-service-031--032)
  - [`@backstage/backend-openapi-utils` (0.1.16 → 0.1.17)](#backstagebackend-openapi-utils-0116--0117)
  - [`@backstage/backend-plugin-api` (0.8.0 → 0.8.1)](#backstagebackend-plugin-api-080--081)
  - [`@backstage/backend-test-utils` (0.5.0 → 0.5.1)](#backstagebackend-test-utils-050--051)
  - [`@backstage/plugin-app-backend` (0.3.72 → 0.3.73)](#backstageplugin-app-backend-0372--0373)
  - [`@backstage/plugin-app-node` (0.1.23 → 0.1.24)](#backstageplugin-app-node-0123--0124)
  - [`@backstage/plugin-auth-backend` (0.22.11 → 0.22.12)](#backstageplugin-auth-backend-02211--02212)
  - [`@backstage/plugin-auth-backend-module-atlassian-provider` (0.2.4 → 0.2.5)](#backstageplugin-auth-backend-module-atlassian-provider-024--025)
  - [`@backstage/plugin-auth-backend-module-aws-alb-provider` (0.1.16 → 0.1.17)](#backstageplugin-auth-backend-module-aws-alb-provider-0116--0117)
  - [`@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.1.6 → 0.1.7)](#backstageplugin-auth-backend-module-azure-easyauth-provider-016--017)
  - [`@backstage/plugin-auth-backend-module-bitbucket-provider` (0.1.6 → 0.1.7)](#backstageplugin-auth-backend-module-bitbucket-provider-016--017)
  - [`@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.2.0 → 0.2.1)](#backstageplugin-auth-backend-module-cloudflare-access-provider-020--021)
  - [`@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.2.18 → 0.2.19)](#backstageplugin-auth-backend-module-gcp-iap-provider-0218--0219)
  - [`@backstage/plugin-auth-backend-module-github-provider` (0.1.20 → 0.1.21)](#backstageplugin-auth-backend-module-github-provider-0120--0121)
  - [`@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.20 → 0.1.21)](#backstageplugin-auth-backend-module-gitlab-provider-0120--0121)
  - [`@backstage/plugin-auth-backend-module-google-provider` (0.1.20 → 0.1.21)](#backstageplugin-auth-backend-module-google-provider-0120--0121)
  - [`@backstage/plugin-auth-backend-module-guest-provider` (0.1.9 → 0.1.10)](#backstageplugin-auth-backend-module-guest-provider-019--0110)
  - [`@backstage/plugin-auth-backend-module-microsoft-provider` (0.1.18 → 0.1.19)](#backstageplugin-auth-backend-module-microsoft-provider-0118--0119)
  - [`@backstage/plugin-auth-backend-module-oauth2-provider` (0.2.4 → 0.2.5)](#backstageplugin-auth-backend-module-oauth2-provider-024--025)
  - [`@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.1.16 → 0.1.17)](#backstageplugin-auth-backend-module-oauth2-proxy-provider-0116--0117)
  - [`@backstage/plugin-auth-backend-module-oidc-provider` (0.2.5 → 0.2.6)](#backstageplugin-auth-backend-module-oidc-provider-025--026)
  - [`@backstage/plugin-auth-backend-module-onelogin-provider` (0.1.4 → 0.1.5)](#backstageplugin-auth-backend-module-onelogin-provider-014--015)
  - [`@backstage/plugin-auth-backend-module-pinniped-provider` (0.1.17 → 0.1.18)](#backstageplugin-auth-backend-module-pinniped-provider-0117--0118)
  - [`@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.2.4 → 0.2.5)](#backstageplugin-auth-backend-module-vmware-cloud-provider-024--025)
  - [`@backstage/plugin-auth-node` (0.5.0 → 0.5.1)](#backstageplugin-auth-node-050--051)
  - [`@backstage/plugin-catalog-backend` (1.25.1 → 1.25.2)](#backstageplugin-catalog-backend-1251--1252)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.4.0 → 0.4.1)](#backstageplugin-catalog-backend-module-aws-040--041)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.2.0 → 0.2.1)](#backstageplugin-catalog-backend-module-azure-020--021)
  - [`@backstage/plugin-catalog-backend-module-backstage-openapi` (0.3.0 → 0.3.1)](#backstageplugin-catalog-backend-module-backstage-openapi-030--031)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.3.0 → 0.3.1)](#backstageplugin-catalog-backend-module-bitbucket-cloud-030--031)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.2.0 → 0.2.1)](#backstageplugin-catalog-backend-module-bitbucket-server-020--021)
  - [`@backstage/plugin-catalog-backend-module-gcp` (0.2.0 → 0.2.1)](#backstageplugin-catalog-backend-module-gcp-020--021)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (0.2.0 → 0.2.1)](#backstageplugin-catalog-backend-module-gerrit-020--021)
  - [`@backstage/plugin-catalog-backend-module-github` (0.7.1 → 0.7.2)](#backstageplugin-catalog-backend-module-github-071--072)
  - [`@backstage/plugin-catalog-backend-module-github-org` (0.2.1 → 0.2.2)](#backstageplugin-catalog-backend-module-github-org-021--022)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.4.0 → 0.4.1)](#backstageplugin-catalog-backend-module-gitlab-040--041)
  - [`@backstage/plugin-catalog-backend-module-gitlab-org` (0.1.0 → 0.1.1)](#backstageplugin-catalog-backend-module-gitlab-org-010--011)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.5.1 → 0.5.2)](#backstageplugin-catalog-backend-module-incremental-ingestion-051--052)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.8.0 → 0.8.1)](#backstageplugin-catalog-backend-module-ldap-080--081)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.6.0 → 0.6.1)](#backstageplugin-catalog-backend-module-msgraph-060--061)
  - [`@backstage/plugin-catalog-backend-module-openapi` (0.1.42 → 0.1.43)](#backstageplugin-catalog-backend-module-openapi-0142--0143)
  - [`@backstage/plugin-catalog-backend-module-puppetdb` (0.2.0 → 0.2.1)](#backstageplugin-catalog-backend-module-puppetdb-020--021)
  - [`@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.21 → 0.1.22)](#backstageplugin-catalog-backend-module-scaffolder-entity-model-0121--0122)
  - [`@backstage/plugin-catalog-backend-module-unprocessed` (0.4.10 → 0.4.11)](#backstageplugin-catalog-backend-module-unprocessed-0410--0411)
  - [`@backstage/plugin-catalog-node` (1.12.5 → 1.12.6)](#backstageplugin-catalog-node-1125--1126)
  - [`@backstage/plugin-devtools-backend` (0.3.9 → 0.3.10)](#backstageplugin-devtools-backend-039--0310)
  - [`@backstage/plugin-events-backend` (0.3.10 → 0.3.11)](#backstageplugin-events-backend-0310--0311)
  - [`@backstage/plugin-events-backend-module-aws-sqs` (0.4.0 → 0.4.1)](#backstageplugin-events-backend-module-aws-sqs-040--041)
  - [`@backstage/plugin-events-backend-module-azure` (0.2.9 → 0.2.10)](#backstageplugin-events-backend-module-azure-029--0210)
  - [`@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.9 → 0.2.10)](#backstageplugin-events-backend-module-bitbucket-cloud-029--0210)
  - [`@backstage/plugin-events-backend-module-gerrit` (0.2.9 → 0.2.10)](#backstageplugin-events-backend-module-gerrit-029--0210)
  - [`@backstage/plugin-events-backend-module-github` (0.2.9 → 0.2.10)](#backstageplugin-events-backend-module-github-029--0210)
  - [`@backstage/plugin-events-backend-module-gitlab` (0.2.9 → 0.2.10)](#backstageplugin-events-backend-module-gitlab-029--0210)
  - [`@backstage/plugin-events-backend-test-utils` (0.1.33 → 0.1.34)](#backstageplugin-events-backend-test-utils-0133--0134)
  - [`@backstage/plugin-events-node` (0.3.9 → 0.3.10)](#backstageplugin-events-node-039--0310)
  - [`@backstage/plugin-kubernetes-backend` (0.18.4 → 0.18.5)](#backstageplugin-kubernetes-backend-0184--0185)
  - [`@backstage/plugin-kubernetes-node` (0.1.17 → 0.1.18)](#backstageplugin-kubernetes-node-0117--0118)
  - [`@backstage/plugin-notifications-backend` (0.3.4 → 0.3.5)](#backstageplugin-notifications-backend-034--035)
  - [`@backstage/plugin-notifications-backend-module-email` (0.2.0 → 0.2.1)](#backstageplugin-notifications-backend-module-email-020--021)
  - [`@backstage/plugin-notifications-node` (0.2.4 → 0.2.5)](#backstageplugin-notifications-node-024--025)
  - [`@backstage/plugin-permission-backend` (0.5.47 → 0.5.48)](#backstageplugin-permission-backend-0547--0548)
  - [`@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.20 → 0.1.21)](#backstageplugin-permission-backend-module-allow-all-policy-0120--0121)
  - [`@backstage/plugin-permission-node` (0.8.1 → 0.8.2)](#backstageplugin-permission-node-081--082)
  - [`@backstage/plugin-proxy-backend` (0.5.4 → 0.5.5)](#backstageplugin-proxy-backend-054--055)
  - [`@backstage/plugin-scaffolder-backend` (1.24.0 → 1.24.1)](#backstageplugin-scaffolder-backend-1240--1241)
  - [`@backstage/plugin-scaffolder-backend-module-azure` (0.1.15 → 0.1.16)](#backstageplugin-scaffolder-backend-module-azure-0115--0116)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket` (0.2.13 → 0.2.14)](#backstageplugin-scaffolder-backend-module-bitbucket-0213--0214)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.1.13 → 0.1.14)](#backstageplugin-scaffolder-backend-module-bitbucket-cloud-0113--0114)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.1.13 → 0.1.14)](#backstageplugin-scaffolder-backend-module-bitbucket-server-0113--0114)
  - [`@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.24 → 0.2.25)](#backstageplugin-scaffolder-backend-module-confluence-to-markdown-0224--0225)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.47 → 0.2.48)](#backstageplugin-scaffolder-backend-module-cookiecutter-0247--0248)
  - [`@backstage/plugin-scaffolder-backend-module-gcp` (0.1.1 → 0.1.2)](#backstageplugin-scaffolder-backend-module-gcp-011--012)
  - [`@backstage/plugin-scaffolder-backend-module-gerrit` (0.1.15 → 0.1.16)](#backstageplugin-scaffolder-backend-module-gerrit-0115--0116)
  - [`@backstage/plugin-scaffolder-backend-module-gitea` (0.1.13 → 0.1.14)](#backstageplugin-scaffolder-backend-module-gitea-0113--0114)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.4.1 → 0.4.2)](#backstageplugin-scaffolder-backend-module-github-041--042)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.4.5 → 0.4.6)](#backstageplugin-scaffolder-backend-module-gitlab-045--046)
  - [`@backstage/plugin-scaffolder-backend-module-rails` (0.4.40 → 0.4.41)](#backstageplugin-scaffolder-backend-module-rails-0440--0441)
  - [`@backstage/plugin-scaffolder-backend-module-sentry` (0.1.31 → 0.1.32)](#backstageplugin-scaffolder-backend-module-sentry-0131--0132)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.3.7 → 0.3.8)](#backstageplugin-scaffolder-backend-module-yeoman-037--038)
  - [`@backstage/plugin-scaffolder-node` (0.4.9 → 0.4.10)](#backstageplugin-scaffolder-node-049--0410)
  - [`@backstage/plugin-scaffolder-node-test-utils` (0.1.10 → 0.1.11)](#backstageplugin-scaffolder-node-test-utils-0110--0111)
  - [`@backstage/plugin-search-backend` (1.5.15 → 1.5.16)](#backstageplugin-search-backend-1515--1516)
  - [`@backstage/plugin-search-backend-module-catalog` (0.2.0 → 0.2.1)](#backstageplugin-search-backend-module-catalog-020--021)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.5.4 → 1.5.5)](#backstageplugin-search-backend-module-elasticsearch-154--155)
  - [`@backstage/plugin-search-backend-module-explore` (0.2.0 → 0.2.1)](#backstageplugin-search-backend-module-explore-020--021)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.33 → 0.5.34)](#backstageplugin-search-backend-module-pg-0533--0534)
  - [`@backstage/plugin-search-backend-module-stack-overflow-collator` (0.2.0 → 0.2.1)](#backstageplugin-search-backend-module-stack-overflow-collator-020--021)
  - [`@backstage/plugin-search-backend-module-techdocs` (0.2.0 → 0.2.1)](#backstageplugin-search-backend-module-techdocs-020--021)
  - [`@backstage/plugin-search-backend-node` (1.3.0 → 1.3.1)](#backstageplugin-search-backend-node-130--131)
  - [`@backstage/plugin-signals-backend` (0.1.9 → 0.1.10)](#backstageplugin-signals-backend-019--0110)
  - [`@backstage/plugin-signals-node` (0.1.9 → 0.1.10)](#backstageplugin-signals-node-019--0110)
  - [`@backstage/plugin-techdocs-backend` (1.10.11 → 1.10.12)](#backstageplugin-techdocs-backend-11011--11012)
  - [`@backstage/plugin-techdocs-node` (1.12.9 → 1.12.10)](#backstageplugin-techdocs-node-1129--11210)
  - [`@backstage/plugin-user-settings-backend` (0.2.22 → 0.2.23)](#backstageplugin-user-settings-backend-0222--0223)
  - [`@backstage/repo-tools` (0.9.5 → 0.9.6)](#backstagerepo-tools-095--096)
  - [`@techdocs/cli` (1.8.17 → 1.8.18)](#techdocscli-1817--1818)
- [Excluded dependency updates for packages](#excluded-dependency-updates-for-packages)

## 0.0.x patch version bumps

### `@backstage/plugin-auth-backend-module-okta-provider` (0.0.16 → 0.0.17)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-logs` (0.0.3 → 0.0.4)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-notifications` (0.0.6 → 0.0.7)

_No changelog entries found._

## Other patch version bumps

### `@backstage/backend-app-api` (0.9.2 → 0.9.3)

_No changelog entries found._

### `@backstage/backend-common` (0.24.0 → 0.24.1)

_No changelog entries found._

### `@backstage/backend-defaults` (0.4.3 → 0.4.4)

_No changelog entries found._

### `@backstage/backend-dynamic-feature-service` (0.3.1 → 0.3.2)

_No changelog entries found._

### `@backstage/backend-openapi-utils` (0.1.16 → 0.1.17)

_No changelog entries found._

### `@backstage/backend-plugin-api` (0.8.0 → 0.8.1)

_No changelog entries found._

### `@backstage/backend-test-utils` (0.5.0 → 0.5.1)

_No changelog entries found._

### `@backstage/plugin-app-backend` (0.3.72 → 0.3.73)

_No changelog entries found._

### `@backstage/plugin-app-node` (0.1.23 → 0.1.24)

_No changelog entries found._

### `@backstage/plugin-auth-backend` (0.22.11 → 0.22.12)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-atlassian-provider` (0.2.4 → 0.2.5)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.1.16 → 0.1.17)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.1.6 → 0.1.7)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-bitbucket-provider` (0.1.6 → 0.1.7)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.2.0 → 0.2.1)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.2.18 → 0.2.19)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-github-provider` (0.1.20 → 0.1.21)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.20 → 0.1.21)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-google-provider` (0.1.20 → 0.1.21)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-guest-provider` (0.1.9 → 0.1.10)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-microsoft-provider` (0.1.18 → 0.1.19)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-oauth2-provider` (0.2.4 → 0.2.5)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.1.16 → 0.1.17)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-oidc-provider` (0.2.5 → 0.2.6)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-onelogin-provider` (0.1.4 → 0.1.5)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-pinniped-provider` (0.1.17 → 0.1.18)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.2.4 → 0.2.5)

_No changelog entries found._

### `@backstage/plugin-auth-node` (0.5.0 → 0.5.1)

_No changelog entries found._

### `@backstage/plugin-catalog-backend` (1.25.1 → 1.25.2)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-aws` (0.4.0 → 0.4.1)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-azure` (0.2.0 → 0.2.1)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.3.0 → 0.3.1)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.3.0 → 0.3.1)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.2.0 → 0.2.1)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gcp` (0.2.0 → 0.2.1)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gerrit` (0.2.0 → 0.2.1)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-github` (0.7.1 → 0.7.2)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-github-org` (0.2.1 → 0.2.2)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gitlab` (0.4.0 → 0.4.1)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gitlab-org` (0.1.0 → 0.1.1)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.5.1 → 0.5.2)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-ldap` (0.8.0 → 0.8.1)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-msgraph` (0.6.0 → 0.6.1)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-openapi` (0.1.42 → 0.1.43)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-puppetdb` (0.2.0 → 0.2.1)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.21 → 0.1.22)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.4.10 → 0.4.11)

_No changelog entries found._

### `@backstage/plugin-catalog-node` (1.12.5 → 1.12.6)

_No changelog entries found._

### `@backstage/plugin-devtools-backend` (0.3.9 → 0.3.10)

_No changelog entries found._

### `@backstage/plugin-events-backend` (0.3.10 → 0.3.11)

_No changelog entries found._

### `@backstage/plugin-events-backend-module-aws-sqs` (0.4.0 → 0.4.1)

_No changelog entries found._

### `@backstage/plugin-events-backend-module-azure` (0.2.9 → 0.2.10)

_No changelog entries found._

### `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.9 → 0.2.10)

_No changelog entries found._

### `@backstage/plugin-events-backend-module-gerrit` (0.2.9 → 0.2.10)

_No changelog entries found._

### `@backstage/plugin-events-backend-module-github` (0.2.9 → 0.2.10)

_No changelog entries found._

### `@backstage/plugin-events-backend-module-gitlab` (0.2.9 → 0.2.10)

_No changelog entries found._

### `@backstage/plugin-events-backend-test-utils` (0.1.33 → 0.1.34)

_No changelog entries found._

### `@backstage/plugin-events-node` (0.3.9 → 0.3.10)

_No changelog entries found._

### `@backstage/plugin-kubernetes-backend` (0.18.4 → 0.18.5)

_No changelog entries found._

### `@backstage/plugin-kubernetes-node` (0.1.17 → 0.1.18)

_No changelog entries found._

### `@backstage/plugin-notifications-backend` (0.3.4 → 0.3.5)

_No changelog entries found._

### `@backstage/plugin-notifications-backend-module-email` (0.2.0 → 0.2.1)

_No changelog entries found._

### `@backstage/plugin-notifications-node` (0.2.4 → 0.2.5)

_No changelog entries found._

### `@backstage/plugin-permission-backend` (0.5.47 → 0.5.48)

_No changelog entries found._

### `@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.20 → 0.1.21)

_No changelog entries found._

### `@backstage/plugin-permission-node` (0.8.1 → 0.8.2)

_No changelog entries found._

### `@backstage/plugin-proxy-backend` (0.5.4 → 0.5.5)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend` (1.24.0 → 1.24.1)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-azure` (0.1.15 → 0.1.16)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.2.13 → 0.2.14)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.1.13 → 0.1.14)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.1.13 → 0.1.14)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.24 → 0.2.25)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.47 → 0.2.48)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-gcp` (0.1.1 → 0.1.2)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-gerrit` (0.1.15 → 0.1.16)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-gitea` (0.1.13 → 0.1.14)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-github` (0.4.1 → 0.4.2)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.4.5 → 0.4.6)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-rails` (0.4.40 → 0.4.41)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-sentry` (0.1.31 → 0.1.32)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.3.7 → 0.3.8)

_No changelog entries found._

### `@backstage/plugin-scaffolder-node` (0.4.9 → 0.4.10)

_No changelog entries found._

### `@backstage/plugin-scaffolder-node-test-utils` (0.1.10 → 0.1.11)

_No changelog entries found._

### `@backstage/plugin-search-backend` (1.5.15 → 1.5.16)

_No changelog entries found._

### `@backstage/plugin-search-backend-module-catalog` (0.2.0 → 0.2.1)

_No changelog entries found._

### `@backstage/plugin-search-backend-module-elasticsearch` (1.5.4 → 1.5.5)

_No changelog entries found._

### `@backstage/plugin-search-backend-module-explore` (0.2.0 → 0.2.1)

_No changelog entries found._

### `@backstage/plugin-search-backend-module-pg` (0.5.33 → 0.5.34)

_No changelog entries found._

### `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.2.0 → 0.2.1)

_No changelog entries found._

### `@backstage/plugin-search-backend-module-techdocs` (0.2.0 → 0.2.1)

_No changelog entries found._

### `@backstage/plugin-search-backend-node` (1.3.0 → 1.3.1)

_No changelog entries found._

### `@backstage/plugin-signals-backend` (0.1.9 → 0.1.10)

_No changelog entries found._

### `@backstage/plugin-signals-node` (0.1.9 → 0.1.10)

_No changelog entries found._

### `@backstage/plugin-techdocs-backend` (1.10.11 → 1.10.12)

_No changelog entries found._

### `@backstage/plugin-techdocs-node` (1.12.9 → 1.12.10)

_No changelog entries found._

### `@backstage/plugin-user-settings-backend` (0.2.22 → 0.2.23)

_No changelog entries found._

### `@backstage/repo-tools` (0.9.5 → 0.9.6)

_No changelog entries found._

### `@techdocs/cli` (1.8.17 → 1.8.18)

_No changelog entries found._

## Excluded dependency updates for packages

- `@backstage/backend-tasks`
