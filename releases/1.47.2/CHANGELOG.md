# Backstage Release 1.47.2 changelog

Changes between 1.47.1 and 1.47.2 — 48 changed and 0 added packages.

## Summary

- [Patch version bumps](#patch-version-bumps): 48 packages

## Table of contents

- [Patch version bumps](#patch-version-bumps)
  - [`@backstage/backend-defaults` (0.15.0 → 0.15.1)](#backstagebackend-defaults-0150--0151)
  - [`@backstage/backend-plugin-api` (1.6.1 → 1.6.2)](#backstagebackend-plugin-api-161--162)
  - [`@backstage/backend-test-utils` (1.10.3 → 1.10.4)](#backstagebackend-test-utils-1103--1104)
  - [`@backstage/cli` (0.35.2 → 0.35.3)](#backstagecli-0352--0353)
  - [`@backstage/cli-node` (0.2.16 → 0.2.17)](#backstagecli-node-0216--0217)
  - [`@backstage/core-app-api` (1.19.3 → 1.19.4)](#backstagecore-app-api-1193--1194)
  - [`@backstage/core-compat-api` (0.5.6 → 0.5.7)](#backstagecore-compat-api-056--057)
  - [`@backstage/core-components` (0.18.5 → 0.18.6)](#backstagecore-components-0185--0186)
  - [`@backstage/core-plugin-api` (1.12.1 → 1.12.2)](#backstagecore-plugin-api-1121--1122)
  - [`@backstage/frontend-app-api` (0.14.0 → 0.14.1)](#backstagefrontend-app-api-0140--0141)
  - [`@backstage/frontend-defaults` (0.3.5 → 0.3.6)](#backstagefrontend-defaults-035--036)
  - [`@backstage/frontend-plugin-api` (0.13.3 → 0.13.4)](#backstagefrontend-plugin-api-0133--0134)
  - [`@backstage/frontend-test-utils` (0.4.4 → 0.4.5)](#backstagefrontend-test-utils-044--045)
  - [`@backstage/plugin-app` (0.3.4 → 0.3.5)](#backstageplugin-app-034--035)
  - [`@backstage/plugin-auth-backend-module-atlassian-provider` (0.4.10 → 0.4.11)](#backstageplugin-auth-backend-module-atlassian-provider-0410--0411)
  - [`@backstage/plugin-auth-backend-module-aws-alb-provider` (0.4.11 → 0.4.12)](#backstageplugin-auth-backend-module-aws-alb-provider-0411--0412)
  - [`@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.2.15 → 0.2.16)](#backstageplugin-auth-backend-module-azure-easyauth-provider-0215--0216)
  - [`@backstage/plugin-auth-backend-module-bitbucket-provider` (0.3.10 → 0.3.11)](#backstageplugin-auth-backend-module-bitbucket-provider-0310--0311)
  - [`@backstage/plugin-auth-backend-module-bitbucket-server-provider` (0.2.10 → 0.2.11)](#backstageplugin-auth-backend-module-bitbucket-server-provider-0210--0211)
  - [`@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.4.10 → 0.4.11)](#backstageplugin-auth-backend-module-cloudflare-access-provider-0410--0411)
  - [`@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.4.10 → 0.4.11)](#backstageplugin-auth-backend-module-gcp-iap-provider-0410--0411)
  - [`@backstage/plugin-auth-backend-module-github-provider` (0.4.0 → 0.4.1)](#backstageplugin-auth-backend-module-github-provider-040--041)
  - [`@backstage/plugin-auth-backend-module-gitlab-provider` (0.3.10 → 0.3.11)](#backstageplugin-auth-backend-module-gitlab-provider-0310--0311)
  - [`@backstage/plugin-auth-backend-module-google-provider` (0.3.10 → 0.3.11)](#backstageplugin-auth-backend-module-google-provider-0310--0311)
  - [`@backstage/plugin-auth-backend-module-microsoft-provider` (0.3.10 → 0.3.11)](#backstageplugin-auth-backend-module-microsoft-provider-0310--0311)
  - [`@backstage/plugin-auth-backend-module-oauth2-provider` (0.4.10 → 0.4.11)](#backstageplugin-auth-backend-module-oauth2-provider-0410--0411)
  - [`@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.2.15 → 0.2.16)](#backstageplugin-auth-backend-module-oauth2-proxy-provider-0215--0216)
  - [`@backstage/plugin-auth-backend-module-oidc-provider` (0.4.11 → 0.4.12)](#backstageplugin-auth-backend-module-oidc-provider-0411--0412)
  - [`@backstage/plugin-auth-backend-module-okta-provider` (0.2.10 → 0.2.11)](#backstageplugin-auth-backend-module-okta-provider-0210--0211)
  - [`@backstage/plugin-auth-backend-module-onelogin-provider` (0.3.10 → 0.3.11)](#backstageplugin-auth-backend-module-onelogin-provider-0310--0311)
  - [`@backstage/plugin-auth-node` (0.6.11 → 0.6.12)](#backstageplugin-auth-node-0611--0612)
  - [`@backstage/plugin-catalog-backend` (3.3.1 → 3.3.2)](#backstageplugin-catalog-backend-331--332)
  - [`@backstage/plugin-catalog-react` (1.21.5 → 1.21.6)](#backstageplugin-catalog-react-1215--1216)
  - [`@backstage/plugin-home` (0.9.0 → 0.9.1)](#backstageplugin-home-090--091)
  - [`@backstage/plugin-mcp-actions-backend` (0.1.7 → 0.1.8)](#backstageplugin-mcp-actions-backend-017--018)
  - [`@backstage/plugin-permission-backend` (0.7.7 → 0.7.8)](#backstageplugin-permission-backend-077--078)
  - [`@backstage/plugin-permission-common` (0.9.4 → 0.9.5)](#backstageplugin-permission-common-094--095)
  - [`@backstage/plugin-permission-node` (0.10.8 → 0.10.9)](#backstageplugin-permission-node-0108--0109)
  - [`@backstage/plugin-scaffolder` (1.35.1 → 1.35.2)](#backstageplugin-scaffolder-1351--1352)
  - [`@backstage/plugin-scaffolder-backend` (3.1.1 → 3.1.2)](#backstageplugin-scaffolder-backend-311--312)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.3.1 → 0.3.2)](#backstageplugin-scaffolder-backend-module-bitbucket-cloud-031--032)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.9.4 → 0.9.5)](#backstageplugin-scaffolder-backend-module-github-094--095)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.11.1 → 0.11.2)](#backstageplugin-scaffolder-backend-module-gitlab-0111--0112)
  - [`@backstage/plugin-scaffolder-node` (0.12.3 → 0.12.4)](#backstageplugin-scaffolder-node-0123--0124)
  - [`@backstage/plugin-scaffolder-react` (1.19.5 → 1.19.6)](#backstageplugin-scaffolder-react-1195--1196)
  - [`@backstage/plugin-search-backend` (2.0.10 → 2.0.11)](#backstageplugin-search-backend-2010--2011)
  - [`@backstage/repo-tools` (0.16.2 → 0.16.3)](#backstagerepo-tools-0162--0163)
  - [`@backstage/ui` (0.11.1 → 0.11.2)](#backstageui-0111--0112)

## Patch version bumps

### `@backstage/backend-defaults` (0.15.0 → 0.15.1)

_No changelog entries found._

### `@backstage/backend-plugin-api` (1.6.1 → 1.6.2)

_No changelog entries found._

### `@backstage/backend-test-utils` (1.10.3 → 1.10.4)

_No changelog entries found._

### `@backstage/cli` (0.35.2 → 0.35.3)

_No changelog entries found._

### `@backstage/cli-node` (0.2.16 → 0.2.17)

_No changelog entries found._

### `@backstage/core-app-api` (1.19.3 → 1.19.4)

_No changelog entries found._

### `@backstage/core-compat-api` (0.5.6 → 0.5.7)

_No changelog entries found._

### `@backstage/core-components` (0.18.5 → 0.18.6)

_No changelog entries found._

### `@backstage/core-plugin-api` (1.12.1 → 1.12.2)

_No changelog entries found._

### `@backstage/frontend-app-api` (0.14.0 → 0.14.1)

_No changelog entries found._

### `@backstage/frontend-defaults` (0.3.5 → 0.3.6)

_No changelog entries found._

### `@backstage/frontend-plugin-api` (0.13.3 → 0.13.4)

_No changelog entries found._

### `@backstage/frontend-test-utils` (0.4.4 → 0.4.5)

_No changelog entries found._

### `@backstage/plugin-app` (0.3.4 → 0.3.5)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-atlassian-provider` (0.4.10 → 0.4.11)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.4.11 → 0.4.12)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.2.15 → 0.2.16)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-bitbucket-provider` (0.3.10 → 0.3.11)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-bitbucket-server-provider` (0.2.10 → 0.2.11)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.4.10 → 0.4.11)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.4.10 → 0.4.11)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-github-provider` (0.4.0 → 0.4.1)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-gitlab-provider` (0.3.10 → 0.3.11)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-google-provider` (0.3.10 → 0.3.11)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-microsoft-provider` (0.3.10 → 0.3.11)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-oauth2-provider` (0.4.10 → 0.4.11)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.2.15 → 0.2.16)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-oidc-provider` (0.4.11 → 0.4.12)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-okta-provider` (0.2.10 → 0.2.11)

_No changelog entries found._

### `@backstage/plugin-auth-backend-module-onelogin-provider` (0.3.10 → 0.3.11)

_No changelog entries found._

### `@backstage/plugin-auth-node` (0.6.11 → 0.6.12)

_No changelog entries found._

### `@backstage/plugin-catalog-backend` (3.3.1 → 3.3.2)

_No changelog entries found._

### `@backstage/plugin-catalog-react` (1.21.5 → 1.21.6)

_No changelog entries found._

### `@backstage/plugin-home` (0.9.0 → 0.9.1)

_No changelog entries found._

### `@backstage/plugin-mcp-actions-backend` (0.1.7 → 0.1.8)

_No changelog entries found._

### `@backstage/plugin-permission-backend` (0.7.7 → 0.7.8)

_No changelog entries found._

### `@backstage/plugin-permission-common` (0.9.4 → 0.9.5)

_No changelog entries found._

### `@backstage/plugin-permission-node` (0.10.8 → 0.10.9)

_No changelog entries found._

### `@backstage/plugin-scaffolder` (1.35.1 → 1.35.2)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend` (3.1.1 → 3.1.2)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.3.1 → 0.3.2)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-github` (0.9.4 → 0.9.5)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.11.1 → 0.11.2)

_No changelog entries found._

### `@backstage/plugin-scaffolder-node` (0.12.3 → 0.12.4)

_No changelog entries found._

### `@backstage/plugin-scaffolder-react` (1.19.5 → 1.19.6)

_No changelog entries found._

### `@backstage/plugin-search-backend` (2.0.10 → 2.0.11)

_No changelog entries found._

### `@backstage/repo-tools` (0.16.2 → 0.16.3)

_No changelog entries found._

### `@backstage/ui` (0.11.1 → 0.11.2)

_No changelog entries found._
