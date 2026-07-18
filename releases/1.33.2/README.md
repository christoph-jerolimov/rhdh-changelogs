# Backstage Release 1.33.2

## Compared to 1.33.1 (previous patch release)

0 major bumps, 0 added, 0 removed, 1 upgraded, 176 unchanged.

### Version bumps

| Package | 1.33.1 | 1.33.2 | Type |
| --- | --- | --- | --- |
| `@backstage/plugin-app-backend` | 0.4.0 | 0.4.1 | Patch |

## Compared to 1.32.6 (previous minor release)

0 major bumps, 0 added, 0 removed, 153 upgraded, 24 unchanged.

### Version bumps

| Package | 1.32.6 | 1.33.2 | Type |
| --- | --- | --- | --- |
| `@backstage/app-defaults` | 1.5.12 | 1.5.13 | Patch |
| `@backstage/backend-app-api` | 1.0.1 | 1.0.2 | Patch |
| `@backstage/backend-defaults` | 0.5.2 | 0.5.3 | Patch |
| `@backstage/backend-dynamic-feature-service` | 0.4.4 | 0.5.0 | Minor ⚠️ |
| `@backstage/backend-openapi-utils` | 0.2.0 | 0.3.0 | Minor ⚠️ |
| `@backstage/backend-plugin-api` | 1.0.1 | 1.0.2 | Patch |
| `@backstage/backend-test-utils` | 1.0.2 | 1.1.0 | Minor |
| `@backstage/catalog-client` | 1.7.1 | 1.8.0 | Minor |
| `@backstage/catalog-model` | 1.7.0 | 1.7.1 | Patch |
| `@backstage/cli` | 0.28.2 | 0.29.1 | Minor ⚠️ |
| `@backstage/cli-common` | 0.1.14 | 0.1.15 | Patch |
| `@backstage/cli-node` | 0.2.9 | 0.2.10 | Patch |
| `@backstage/codemods` | 0.1.51 | 0.1.52 | Patch |
| `@backstage/config` | 1.2.0 | 1.3.0 | Minor |
| `@backstage/config-loader` | 1.9.1 | 1.9.2 | Patch |
| `@backstage/core-app-api` | 1.15.1 | 1.15.2 | Patch |
| `@backstage/core-compat-api` | 0.3.1 | 0.3.2 | Patch |
| `@backstage/core-components` | 0.15.1 | 0.16.0 | Minor ⚠️ |
| `@backstage/core-plugin-api` | 1.10.0 | 1.10.1 | Patch |
| `@backstage/create-app` | 0.5.21 | 0.5.22 | Patch |
| `@backstage/dev-utils` | 1.1.2 | 1.1.3 | Patch |
| `@backstage/errors` | 1.2.4 | 1.2.5 | Patch |
| `@backstage/frontend-app-api` | 0.10.0 | 0.10.1 | Patch |
| `@backstage/frontend-defaults` | 0.1.1 | 0.1.2 | Patch |
| `@backstage/frontend-plugin-api` | 0.9.0 | 0.9.1 | Patch |
| `@backstage/frontend-test-utils` | 0.2.1 | 0.2.2 | Patch |
| `@backstage/integration` | 1.15.1 | 1.15.2 | Patch |
| `@backstage/integration-aws-node` | 0.1.12 | 0.1.13 | Patch |
| `@backstage/integration-react` | 1.2.0 | 1.2.1 | Patch |
| `@backstage/plugin-api-docs` | 0.11.11 | 0.12.0 | Minor ⚠️ |
| `@backstage/plugin-app` | 0.1.1 | 0.1.2 | Patch |
| `@backstage/plugin-app-backend` | 0.3.76 | 0.4.1 | Minor ⚠️ |
| `@backstage/plugin-app-node` | 0.1.26 | 0.1.27 | Patch |
| `@backstage/plugin-app-visualizer` | 0.1.11 | 0.1.12 | Patch |
| `@backstage/plugin-auth-backend` | 0.23.1 | 0.24.0 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-atlassian-provider` | 0.3.1 | 0.3.2 | Patch |
| `@backstage/plugin-auth-backend-module-auth0-provider` | 0.1.1 | 0.1.2 | Patch |
| `@backstage/plugin-auth-backend-module-aws-alb-provider` | 0.2.1 | 0.3.0 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-azure-easyauth-provider` | 0.2.1 | 0.2.2 | Patch |
| `@backstage/plugin-auth-backend-module-bitbucket-provider` | 0.2.1 | 0.2.2 | Patch |
| `@backstage/plugin-auth-backend-module-bitbucket-server-provider` | 0.1.1 | 0.1.2 | Patch |
| `@backstage/plugin-auth-backend-module-cloudflare-access-provider` | 0.3.1 | 0.3.2 | Patch |
| `@backstage/plugin-auth-backend-module-gcp-iap-provider` | 0.3.1 | 0.3.2 | Patch |
| `@backstage/plugin-auth-backend-module-github-provider` | 0.2.1 | 0.2.2 | Patch |
| `@backstage/plugin-auth-backend-module-gitlab-provider` | 0.2.1 | 0.2.2 | Patch |
| `@backstage/plugin-auth-backend-module-google-provider` | 0.2.1 | 0.2.2 | Patch |
| `@backstage/plugin-auth-backend-module-guest-provider` | 0.2.1 | 0.2.2 | Patch |
| `@backstage/plugin-auth-backend-module-microsoft-provider` | 0.2.1 | 0.2.2 | Patch |
| `@backstage/plugin-auth-backend-module-oauth2-provider` | 0.3.1 | 0.3.2 | Patch |
| `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` | 0.2.1 | 0.2.2 | Patch |
| `@backstage/plugin-auth-backend-module-oidc-provider` | 0.3.1 | 0.3.2 | Patch |
| `@backstage/plugin-auth-backend-module-okta-provider` | 0.1.1 | 0.1.2 | Patch |
| `@backstage/plugin-auth-backend-module-onelogin-provider` | 0.2.1 | 0.2.2 | Patch |
| `@backstage/plugin-auth-backend-module-pinniped-provider` | 0.2.1 | 0.2.2 | Patch |
| `@backstage/plugin-auth-backend-module-vmware-cloud-provider` | 0.4.0 | 0.4.1 | Patch |
| `@backstage/plugin-auth-node` | 0.5.3 | 0.5.4 | Patch |
| `@backstage/plugin-auth-react` | 0.1.7 | 0.1.8 | Patch |
| `@backstage/plugin-bitbucket-cloud-common` | 0.2.24 | 0.2.25 | Patch |
| `@backstage/plugin-catalog` | 1.24.0 | 1.25.0 | Minor |
| `@backstage/plugin-catalog-backend` | 1.27.1 | 1.28.0 | Minor |
| `@backstage/plugin-catalog-backend-module-aws` | 0.4.4 | 0.4.5 | Patch |
| `@backstage/plugin-catalog-backend-module-azure` | 0.2.3 | 0.2.4 | Patch |
| `@backstage/plugin-catalog-backend-module-backstage-openapi` | 0.4.1 | 0.4.2 | Patch |
| `@backstage/plugin-catalog-backend-module-bitbucket-cloud` | 0.4.1 | 0.4.2 | Patch |
| `@backstage/plugin-catalog-backend-module-bitbucket-server` | 0.2.3 | 0.2.4 | Patch |
| `@backstage/plugin-catalog-backend-module-gcp` | 0.3.1 | 0.3.2 | Patch |
| `@backstage/plugin-catalog-backend-module-gerrit` | 0.2.3 | 0.2.4 | Patch |
| `@backstage/plugin-catalog-backend-module-github` | 0.7.6 | 0.7.7 | Patch |
| `@backstage/plugin-catalog-backend-module-github-org` | 0.3.3 | 0.3.4 | Patch |
| `@backstage/plugin-catalog-backend-module-gitlab` | 0.4.4 | 0.5.0 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-gitlab-org` | 0.2.2 | 0.2.3 | Patch |
| `@backstage/plugin-catalog-backend-module-incremental-ingestion` | 0.5.6 | 0.6.0 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-ldap` | 0.9.1 | 0.10.0 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-logs` | 0.1.3 | 0.1.4 | Patch |
| `@backstage/plugin-catalog-backend-module-msgraph` | 0.6.3 | 0.6.4 | Patch |
| `@backstage/plugin-catalog-backend-module-openapi` | 0.2.3 | 0.2.4 | Patch |
| `@backstage/plugin-catalog-backend-module-puppetdb` | 0.2.3 | 0.2.4 | Patch |
| `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` | 0.2.1 | 0.2.2 | Patch |
| `@backstage/plugin-catalog-backend-module-unprocessed` | 0.5.1 | 0.5.2 | Patch |
| `@backstage/plugin-catalog-common` | 1.1.0 | 1.1.1 | Patch |
| `@backstage/plugin-catalog-graph` | 0.4.11 | 0.4.12 | Patch |
| `@backstage/plugin-catalog-import` | 0.12.5 | 0.12.6 | Patch |
| `@backstage/plugin-catalog-node` | 1.13.1 | 1.14.0 | Minor |
| `@backstage/plugin-catalog-react` | 1.14.0 | 1.14.1 | Patch |
| `@backstage/plugin-catalog-unprocessed-entities` | 0.2.9 | 0.2.10 | Patch |
| `@backstage/plugin-catalog-unprocessed-entities-common` | 0.0.4 | 0.0.5 | Patch ⚠️ |
| `@backstage/plugin-config-schema` | 0.1.60 | 0.1.61 | Patch |
| `@backstage/plugin-devtools` | 0.1.19 | 0.1.20 | Patch |
| `@backstage/plugin-devtools-backend` | 0.4.1 | 0.4.2 | Patch |
| `@backstage/plugin-devtools-common` | 0.1.12 | 0.1.13 | Patch |
| `@backstage/plugin-events-backend` | 0.3.15 | 0.3.16 | Patch |
| `@backstage/plugin-events-backend-module-aws-sqs` | 0.4.4 | 0.4.5 | Patch |
| `@backstage/plugin-events-backend-module-azure` | 0.2.13 | 0.2.14 | Patch |
| `@backstage/plugin-events-backend-module-bitbucket-cloud` | 0.2.13 | 0.2.14 | Patch |
| `@backstage/plugin-events-backend-module-gerrit` | 0.2.13 | 0.2.14 | Patch |
| `@backstage/plugin-events-backend-module-github` | 0.2.13 | 0.2.14 | Patch |
| `@backstage/plugin-events-backend-module-gitlab` | 0.2.13 | 0.2.14 | Patch |
| `@backstage/plugin-events-backend-test-utils` | 0.1.37 | 0.1.38 | Patch |
| `@backstage/plugin-events-node` | 0.4.4 | 0.4.5 | Patch |
| `@backstage/plugin-home` | 0.8.0 | 0.8.1 | Patch |
| `@backstage/plugin-home-react` | 0.1.18 | 0.1.19 | Patch |
| `@backstage/plugin-kubernetes` | 0.11.16 | 0.12.0 | Minor ⚠️ |
| `@backstage/plugin-kubernetes-backend` | 0.18.7 | 0.19.0 | Minor ⚠️ |
| `@backstage/plugin-kubernetes-cluster` | 0.0.17 | 0.0.18 | Patch ⚠️ |
| `@backstage/plugin-kubernetes-common` | 0.8.3 | 0.9.0 | Minor ⚠️ |
| `@backstage/plugin-kubernetes-node` | 0.1.20 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-kubernetes-react` | 0.4.4 | 0.5.0 | Minor ⚠️ |
| `@backstage/plugin-notifications` | 0.3.2 | 0.4.0 | Minor ⚠️ |
| `@backstage/plugin-notifications-backend` | 0.4.2 | 0.4.3 | Patch |
| `@backstage/plugin-notifications-backend-module-email` | 0.3.2 | 0.3.3 | Patch |
| `@backstage/plugin-notifications-common` | 0.0.5 | 0.0.6 | Patch ⚠️ |
| `@backstage/plugin-notifications-node` | 0.2.8 | 0.2.9 | Patch |
| `@backstage/plugin-org` | 0.6.31 | 0.6.32 | Patch |
| `@backstage/plugin-org-react` | 0.1.30 | 0.1.31 | Patch |
| `@backstage/plugin-permission-backend` | 0.5.50 | 0.5.51 | Patch |
| `@backstage/plugin-permission-backend-module-allow-all-policy` | 0.2.1 | 0.2.2 | Patch |
| `@backstage/plugin-permission-common` | 0.8.1 | 0.8.2 | Patch |
| `@backstage/plugin-permission-node` | 0.8.4 | 0.8.5 | Patch |
| `@backstage/plugin-permission-react` | 0.4.27 | 0.4.28 | Patch |
| `@backstage/plugin-proxy-backend` | 0.5.7 | 0.5.8 | Patch |
| `@backstage/plugin-scaffolder` | 1.26.2 | 1.27.0 | Minor |
| `@backstage/plugin-scaffolder-backend` | 1.26.3 | 1.27.0 | Minor |
| `@backstage/plugin-scaffolder-common` | 1.5.6 | 1.5.7 | Patch |
| `@backstage/plugin-scaffolder-node` | 0.5.1 | 0.6.0 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-react` | 1.13.2 | 1.14.0 | Minor |
| `@backstage/plugin-search` | 1.4.18 | 1.4.19 | Patch |
| `@backstage/plugin-search-backend` | 1.6.1 | 1.7.0 | Minor |
| `@backstage/plugin-search-backend-module-catalog` | 0.2.4 | 0.2.5 | Patch |
| `@backstage/plugin-search-backend-module-elasticsearch` | 1.6.1 | 1.6.2 | Patch |
| `@backstage/plugin-search-backend-module-explore` | 0.2.4 | 0.2.5 | Patch |
| `@backstage/plugin-search-backend-module-pg` | 0.5.37 | 0.5.38 | Patch |
| `@backstage/plugin-search-backend-module-stack-overflow-collator` | 0.3.2 | 0.3.3 | Patch |
| `@backstage/plugin-search-backend-module-techdocs` | 0.3.1 | 0.3.2 | Patch |
| `@backstage/plugin-search-backend-node` | 1.3.4 | 1.3.5 | Patch |
| `@backstage/plugin-search-common` | 1.2.14 | 1.2.15 | Patch |
| `@backstage/plugin-search-react` | 1.8.1 | 1.8.2 | Patch |
| `@backstage/plugin-signals` | 0.0.11 | 0.0.12 | Patch ⚠️ |
| `@backstage/plugin-signals-backend` | 0.2.2 | 0.2.3 | Patch |
| `@backstage/plugin-signals-node` | 0.1.13 | 0.1.14 | Patch |
| `@backstage/plugin-signals-react` | 0.0.6 | 0.0.7 | Patch ⚠️ |
| `@backstage/plugin-techdocs` | 1.11.0 | 1.11.1 | Patch |
| `@backstage/plugin-techdocs-addons-test-utils` | 1.0.40 | 1.0.41 | Patch |
| `@backstage/plugin-techdocs-backend` | 1.11.1 | 1.11.2 | Patch |
| `@backstage/plugin-techdocs-module-addons-contrib` | 1.1.16 | 1.1.17 | Patch |
| `@backstage/plugin-techdocs-node` | 1.12.12 | 1.12.13 | Patch |
| `@backstage/plugin-techdocs-react` | 1.2.9 | 1.2.10 | Patch |
| `@backstage/plugin-user-settings` | 0.8.14 | 0.8.15 | Patch |
| `@backstage/plugin-user-settings-backend` | 0.2.26 | 0.2.27 | Patch |
| `@backstage/repo-tools` | 0.10.0 | 0.11.0 | Minor ⚠️ |
| `@backstage/test-utils` | 1.7.0 | 1.7.1 | Patch |
| `@backstage/theme` | 0.6.0 | 0.6.1 | Patch |
| `@backstage/types` | 1.1.1 | 1.2.0 | Minor |
| `@techdocs/cli` | 1.8.21 | 1.8.22 | Patch |
