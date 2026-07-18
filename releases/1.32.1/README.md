# Backstage Release 1.32.1

## Compared to 1.32.0 (previous patch release)

0 major bumps, 0 added, 0 removed, 1 upgraded, 176 unchanged.

### Version bumps

| Package | 1.32.0 | 1.32.1 | Type |
| --- | --- | --- | --- |
| `@backstage/plugin-scaffolder-backend` | 1.26.0 | 1.26.1 | Patch |

## Compared to 1.31.4 (previous minor release)

0 major bumps, 0 added, 1 removed, 141 upgraded, 36 unchanged.

### ❌ Removed packages

| Package | Last version |
| --- | --- |
| `@backstage/backend-common` | 0.25.0 |

### Version bumps

| Package | 1.31.4 | 1.32.1 | Type |
| --- | --- | --- | --- |
| `@backstage/app-defaults` | 1.5.11 | 1.5.12 | Patch |
| `@backstage/backend-app-api` | 1.0.0 | 1.0.1 | Patch |
| `@backstage/backend-defaults` | 0.5.0 | 0.5.1 | Patch |
| `@backstage/backend-openapi-utils` | 0.1.18 | 0.2.0 | Minor ⚠️ |
| `@backstage/backend-plugin-api` | 1.0.0 | 1.0.1 | Patch |
| `@backstage/backend-test-utils` | 1.0.0 | 1.0.1 | Patch |
| `@backstage/catalog-client` | 1.7.0 | 1.7.1 | Patch |
| `@backstage/cli` | 0.27.1 | 0.28.0 | Minor ⚠️ |
| `@backstage/cli-node` | 0.2.8 | 0.2.9 | Patch |
| `@backstage/codemods` | 0.1.50 | 0.1.51 | Patch |
| `@backstage/core-app-api` | 1.15.0 | 1.15.1 | Patch |
| `@backstage/core-compat-api` | 0.3.0 | 0.3.1 | Patch |
| `@backstage/core-components` | 0.15.0 | 0.15.1 | Patch |
| `@backstage/core-plugin-api` | 1.9.4 | 1.10.0 | Minor |
| `@backstage/create-app` | 0.5.20 | 0.5.21 | Patch |
| `@backstage/dev-utils` | 1.1.1 | 1.1.2 | Patch |
| `@backstage/eslint-plugin` | 0.1.9 | 0.1.10 | Patch |
| `@backstage/frontend-app-api` | 0.9.0 | 0.10.0 | Minor ⚠️ |
| `@backstage/frontend-defaults` | 0.1.0 | 0.1.1 | Patch |
| `@backstage/frontend-plugin-api` | 0.8.0 | 0.9.0 | Minor ⚠️ |
| `@backstage/frontend-test-utils` | 0.2.0 | 0.2.1 | Patch |
| `@backstage/integration` | 1.15.0 | 1.15.1 | Patch |
| `@backstage/integration-react` | 1.1.32 | 1.2.0 | Minor |
| `@backstage/plugin-api-docs` | 0.11.10 | 0.11.11 | Patch |
| `@backstage/plugin-api-docs-module-protoc-gen-doc` | 0.1.7 | 0.1.8 | Patch |
| `@backstage/plugin-app` | 0.1.0 | 0.1.1 | Patch |
| `@backstage/plugin-app-backend` | 0.3.75 | 0.3.76 | Patch |
| `@backstage/plugin-app-node` | 0.1.25 | 0.1.26 | Patch |
| `@backstage/plugin-app-visualizer` | 0.1.10 | 0.1.11 | Patch |
| `@backstage/plugin-auth-backend` | 0.23.0 | 0.23.1 | Patch |
| `@backstage/plugin-auth-backend-module-atlassian-provider` | 0.3.0 | 0.3.1 | Patch |
| `@backstage/plugin-auth-backend-module-auth0-provider` | 0.1.0 | 0.1.1 | Patch |
| `@backstage/plugin-auth-backend-module-aws-alb-provider` | 0.2.0 | 0.2.1 | Patch |
| `@backstage/plugin-auth-backend-module-azure-easyauth-provider` | 0.2.0 | 0.2.1 | Patch |
| `@backstage/plugin-auth-backend-module-bitbucket-provider` | 0.2.0 | 0.2.1 | Patch |
| `@backstage/plugin-auth-backend-module-bitbucket-server-provider` | 0.1.0 | 0.1.1 | Patch |
| `@backstage/plugin-auth-backend-module-cloudflare-access-provider` | 0.3.0 | 0.3.1 | Patch |
| `@backstage/plugin-auth-backend-module-gcp-iap-provider` | 0.3.0 | 0.3.1 | Patch |
| `@backstage/plugin-auth-backend-module-github-provider` | 0.2.0 | 0.2.1 | Patch |
| `@backstage/plugin-auth-backend-module-gitlab-provider` | 0.2.0 | 0.2.1 | Patch |
| `@backstage/plugin-auth-backend-module-google-provider` | 0.2.0 | 0.2.1 | Patch |
| `@backstage/plugin-auth-backend-module-guest-provider` | 0.2.0 | 0.2.1 | Patch |
| `@backstage/plugin-auth-backend-module-microsoft-provider` | 0.2.0 | 0.2.1 | Patch |
| `@backstage/plugin-auth-backend-module-oauth2-provider` | 0.3.0 | 0.3.1 | Patch |
| `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` | 0.2.0 | 0.2.1 | Patch |
| `@backstage/plugin-auth-backend-module-oidc-provider` | 0.3.0 | 0.3.1 | Patch |
| `@backstage/plugin-auth-backend-module-okta-provider` | 0.1.0 | 0.1.1 | Patch |
| `@backstage/plugin-auth-backend-module-onelogin-provider` | 0.2.0 | 0.2.1 | Patch |
| `@backstage/plugin-auth-backend-module-pinniped-provider` | 0.2.0 | 0.2.1 | Patch |
| `@backstage/plugin-auth-backend-module-vmware-cloud-provider` | 0.3.0 | 0.4.0 | Minor ⚠️ |
| `@backstage/plugin-auth-node` | 0.5.2 | 0.5.3 | Patch |
| `@backstage/plugin-auth-react` | 0.1.6 | 0.1.7 | Patch |
| `@backstage/plugin-bitbucket-cloud-common` | 0.2.23 | 0.2.24 | Patch |
| `@backstage/plugin-catalog` | 1.23.1 | 1.24.0 | Minor |
| `@backstage/plugin-catalog-backend` | 1.26.1 | 1.27.0 | Minor |
| `@backstage/plugin-catalog-backend-module-aws` | 0.4.2 | 0.4.3 | Patch |
| `@backstage/plugin-catalog-backend-module-azure` | 0.2.2 | 0.2.3 | Patch |
| `@backstage/plugin-catalog-backend-module-backstage-openapi` | 0.4.0 | 0.4.1 | Patch |
| `@backstage/plugin-catalog-backend-module-bitbucket-cloud` | 0.3.2 | 0.4.0 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-bitbucket-server` | 0.2.2 | 0.2.3 | Patch |
| `@backstage/plugin-catalog-backend-module-gcp` | 0.3.0 | 0.3.1 | Patch |
| `@backstage/plugin-catalog-backend-module-gerrit` | 0.2.2 | 0.2.3 | Patch |
| `@backstage/plugin-catalog-backend-module-github` | 0.7.4 | 0.7.5 | Patch |
| `@backstage/plugin-catalog-backend-module-github-org` | 0.3.1 | 0.3.2 | Patch |
| `@backstage/plugin-catalog-backend-module-gitlab` | 0.4.2 | 0.4.3 | Patch |
| `@backstage/plugin-catalog-backend-module-gitlab-org` | 0.2.0 | 0.2.1 | Patch |
| `@backstage/plugin-catalog-backend-module-incremental-ingestion` | 0.5.4 | 0.5.5 | Patch |
| `@backstage/plugin-catalog-backend-module-ldap` | 0.9.0 | 0.9.1 | Patch |
| `@backstage/plugin-catalog-backend-module-logs` | 0.1.1 | 0.1.2 | Patch |
| `@backstage/plugin-catalog-backend-module-msgraph` | 0.6.2 | 0.6.3 | Patch |
| `@backstage/plugin-catalog-backend-module-openapi` | 0.2.1 | 0.2.2 | Patch |
| `@backstage/plugin-catalog-backend-module-puppetdb` | 0.2.2 | 0.2.3 | Patch |
| `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` | 0.2.0 | 0.2.1 | Patch |
| `@backstage/plugin-catalog-backend-module-unprocessed` | 0.5.0 | 0.5.1 | Patch |
| `@backstage/plugin-catalog-graph` | 0.4.10 | 0.4.11 | Patch |
| `@backstage/plugin-catalog-import` | 0.12.4 | 0.12.5 | Patch |
| `@backstage/plugin-catalog-node` | 1.13.0 | 1.13.1 | Patch |
| `@backstage/plugin-catalog-react` | 1.13.1 | 1.14.0 | Minor |
| `@backstage/plugin-catalog-unprocessed-entities` | 0.2.8 | 0.2.9 | Patch |
| `@backstage/plugin-config-schema` | 0.1.59 | 0.1.60 | Patch |
| `@backstage/plugin-devtools` | 0.1.18 | 0.1.19 | Patch |
| `@backstage/plugin-devtools-backend` | 0.4.0 | 0.4.1 | Patch |
| `@backstage/plugin-events-backend` | 0.3.12 | 0.3.13 | Patch |
| `@backstage/plugin-events-backend-module-aws-sqs` | 0.4.2 | 0.4.3 | Patch |
| `@backstage/plugin-events-backend-module-azure` | 0.2.11 | 0.2.12 | Patch |
| `@backstage/plugin-events-backend-module-bitbucket-cloud` | 0.2.11 | 0.2.12 | Patch |
| `@backstage/plugin-events-backend-module-gerrit` | 0.2.11 | 0.2.12 | Patch |
| `@backstage/plugin-events-backend-module-github` | 0.2.11 | 0.2.12 | Patch |
| `@backstage/plugin-events-backend-module-gitlab` | 0.2.11 | 0.2.12 | Patch |
| `@backstage/plugin-events-backend-test-utils` | 0.1.35 | 0.1.36 | Patch |
| `@backstage/plugin-events-node` | 0.4.0 | 0.4.1 | Patch |
| `@backstage/plugin-home` | 0.7.11 | 0.8.0 | Minor ⚠️ |
| `@backstage/plugin-home-react` | 0.1.17 | 0.1.18 | Patch |
| `@backstage/plugin-kubernetes` | 0.11.15 | 0.11.16 | Patch |
| `@backstage/plugin-kubernetes-backend` | 0.18.6 | 0.18.7 | Patch |
| `@backstage/plugin-kubernetes-cluster` | 0.0.16 | 0.0.17 | Patch ⚠️ |
| `@backstage/plugin-kubernetes-node` | 0.1.19 | 0.1.20 | Patch |
| `@backstage/plugin-kubernetes-react` | 0.4.3 | 0.4.4 | Patch |
| `@backstage/plugin-notifications` | 0.3.1 | 0.3.2 | Patch |
| `@backstage/plugin-notifications-backend` | 0.4.0 | 0.4.1 | Patch |
| `@backstage/plugin-notifications-backend-module-email` | 0.3.0 | 0.3.1 | Patch |
| `@backstage/plugin-notifications-node` | 0.2.6 | 0.2.7 | Patch |
| `@backstage/plugin-org` | 0.6.30 | 0.6.31 | Patch |
| `@backstage/plugin-org-react` | 0.1.29 | 0.1.30 | Patch |
| `@backstage/plugin-permission-backend` | 0.5.49 | 0.5.50 | Patch |
| `@backstage/plugin-permission-backend-module-allow-all-policy` | 0.2.0 | 0.2.1 | Patch |
| `@backstage/plugin-permission-node` | 0.8.3 | 0.8.4 | Patch |
| `@backstage/plugin-permission-react` | 0.4.26 | 0.4.27 | Patch |
| `@backstage/plugin-proxy-backend` | 0.5.6 | 0.5.7 | Patch |
| `@backstage/plugin-scaffolder` | 1.25.1 | 1.26.0 | Minor |
| `@backstage/plugin-scaffolder-backend` | 1.25.1 | 1.26.1 | Minor |
| `@backstage/plugin-scaffolder-backend-module-gitlab` | 0.5.1 | 0.6.0 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-node` | 0.4.12 | 0.5.0 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-react` | 1.12.1 | 1.13.0 | Minor |
| `@backstage/plugin-search` | 1.4.17 | 1.4.18 | Patch |
| `@backstage/plugin-search-backend` | 1.5.17 | 1.6.0 | Minor |
| `@backstage/plugin-search-backend-module-catalog` | 0.2.2 | 0.2.3 | Patch |
| `@backstage/plugin-search-backend-module-elasticsearch` | 1.5.6 | 1.6.0 | Minor |
| `@backstage/plugin-search-backend-module-explore` | 0.2.2 | 0.2.3 | Patch |
| `@backstage/plugin-search-backend-module-pg` | 0.5.35 | 0.5.36 | Patch |
| `@backstage/plugin-search-backend-module-stack-overflow-collator` | 0.3.0 | 0.3.1 | Patch |
| `@backstage/plugin-search-backend-module-techdocs` | 0.2.2 | 0.3.0 | Minor ⚠️ |
| `@backstage/plugin-search-backend-node` | 1.3.2 | 1.3.3 | Patch |
| `@backstage/plugin-search-react` | 1.8.0 | 1.8.1 | Patch |
| `@backstage/plugin-signals` | 0.0.10 | 0.0.11 | Patch ⚠️ |
| `@backstage/plugin-signals-backend` | 0.2.0 | 0.2.1 | Patch |
| `@backstage/plugin-signals-node` | 0.1.11 | 0.1.12 | Patch |
| `@backstage/plugin-signals-react` | 0.0.5 | 0.0.6 | Patch ⚠️ |
| `@backstage/plugin-techdocs` | 1.10.10 | 1.11.0 | Minor |
| `@backstage/plugin-techdocs-addons-test-utils` | 1.0.39 | 1.0.40 | Patch |
| `@backstage/plugin-techdocs-backend` | 1.10.13 | 1.11.0 | Minor |
| `@backstage/plugin-techdocs-module-addons-contrib` | 1.1.15 | 1.1.16 | Patch |
| `@backstage/plugin-techdocs-node` | 1.12.11 | 1.12.12 | Patch |
| `@backstage/plugin-techdocs-react` | 1.2.8 | 1.2.9 | Patch |
| `@backstage/plugin-user-settings` | 0.8.13 | 0.8.14 | Patch |
| `@backstage/plugin-user-settings-backend` | 0.2.24 | 0.2.25 | Patch |
| `@backstage/repo-tools` | 0.9.7 | 0.10.0 | Minor ⚠️ |
| `@backstage/test-utils` | 1.6.0 | 1.7.0 | Minor |
| `@backstage/theme` | 0.5.7 | 0.6.0 | Minor ⚠️ |
| `@backstage/version-bridge` | 1.0.9 | 1.0.10 | Patch |
| `@techdocs/cli` | 1.8.19 | 1.8.20 | Patch |
