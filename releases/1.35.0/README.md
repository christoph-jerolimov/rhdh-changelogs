# Backstage Release 1.35.0

## Compared to 1.34.2 (previous minor release)

1 added, 0 removed, 166 upgraded (⚠️ need extra attention: 3 0.x minor, 5 0.0.x patch), 11 unchanged.

### 🆕 Added packages

| Package | Version |
| --- | --- |
| `@backstage/plugin-proxy-node` | 0.1.0 |

### Version bumps

| Package | 1.34.2 | 1.35.0 | Type |
| --- | --- | --- | --- |
| `@backstage/app-defaults` | 1.5.15 | 1.5.16 | Patch |
| `@backstage/backend-app-api` | 1.1.0 | 1.1.1 | Patch |
| `@backstage/backend-defaults` | 0.6.2 | 0.7.0 | Minor ⚠️ |
| `@backstage/backend-dynamic-feature-service` | 0.5.2 | 0.5.3 | Patch |
| `@backstage/backend-openapi-utils` | 0.4.0 | 0.4.1 | Patch |
| `@backstage/backend-plugin-api` | 1.1.0 | 1.1.1 | Patch |
| `@backstage/backend-test-utils` | 1.2.0 | 1.2.1 | Patch |
| `@backstage/catalog-client` | 1.9.0 | 1.9.1 | Patch |
| `@backstage/catalog-model` | 1.7.2 | 1.7.3 | Patch |
| `@backstage/cli` | 0.29.4 | 0.29.5 | Patch |
| `@backstage/cli-node` | 0.2.11 | 0.2.12 | Patch |
| `@backstage/config` | 1.3.1 | 1.3.2 | Patch |
| `@backstage/config-loader` | 1.9.4 | 1.9.5 | Patch |
| `@backstage/core-app-api` | 1.15.3 | 1.15.4 | Patch |
| `@backstage/core-compat-api` | 0.3.4 | 0.3.5 | Patch |
| `@backstage/core-components` | 0.16.2 | 0.16.3 | Patch |
| `@backstage/core-plugin-api` | 1.10.2 | 1.10.3 | Patch |
| `@backstage/create-app` | 0.5.23 | 0.5.24 | Patch |
| `@backstage/dev-utils` | 1.1.5 | 1.1.6 | Patch |
| `@backstage/errors` | 1.2.6 | 1.2.7 | Patch |
| `@backstage/frontend-app-api` | 0.10.3 | 0.10.4 | Patch |
| `@backstage/frontend-defaults` | 0.1.4 | 0.1.5 | Patch |
| `@backstage/frontend-plugin-api` | 0.9.3 | 0.9.4 | Patch |
| `@backstage/frontend-test-utils` | 0.2.4 | 0.2.5 | Patch |
| `@backstage/integration` | 1.16.0 | 1.16.1 | Patch |
| `@backstage/integration-aws-node` | 0.1.14 | 0.1.15 | Patch |
| `@backstage/integration-react` | 1.2.2 | 1.2.3 | Patch |
| `@backstage/plugin-api-docs` | 0.12.2 | 0.12.3 | Patch |
| `@backstage/plugin-app` | 0.1.4 | 0.1.5 | Patch |
| `@backstage/plugin-app-backend` | 0.4.3 | 0.4.4 | Patch |
| `@backstage/plugin-app-node` | 0.1.28 | 0.1.29 | Patch |
| `@backstage/plugin-app-visualizer` | 0.1.14 | 0.1.15 | Patch |
| `@backstage/plugin-auth-backend` | 0.24.1 | 0.24.2 | Patch |
| `@backstage/plugin-auth-backend-module-atlassian-provider` | 0.3.3 | 0.3.4 | Patch |
| `@backstage/plugin-auth-backend-module-auth0-provider` | 0.1.3 | 0.1.4 | Patch |
| `@backstage/plugin-auth-backend-module-aws-alb-provider` | 0.3.1 | 0.3.2 | Patch |
| `@backstage/plugin-auth-backend-module-azure-easyauth-provider` | 0.2.3 | 0.2.4 | Patch |
| `@backstage/plugin-auth-backend-module-bitbucket-provider` | 0.2.3 | 0.2.4 | Patch |
| `@backstage/plugin-auth-backend-module-bitbucket-server-provider` | 0.1.3 | 0.1.4 | Patch |
| `@backstage/plugin-auth-backend-module-cloudflare-access-provider` | 0.3.3 | 0.3.4 | Patch |
| `@backstage/plugin-auth-backend-module-gcp-iap-provider` | 0.3.3 | 0.3.4 | Patch |
| `@backstage/plugin-auth-backend-module-github-provider` | 0.2.3 | 0.2.4 | Patch |
| `@backstage/plugin-auth-backend-module-gitlab-provider` | 0.2.3 | 0.2.4 | Patch |
| `@backstage/plugin-auth-backend-module-google-provider` | 0.2.3 | 0.2.4 | Patch |
| `@backstage/plugin-auth-backend-module-guest-provider` | 0.2.3 | 0.2.4 | Patch |
| `@backstage/plugin-auth-backend-module-microsoft-provider` | 0.2.3 | 0.2.4 | Patch |
| `@backstage/plugin-auth-backend-module-oauth2-provider` | 0.3.3 | 0.3.4 | Patch |
| `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` | 0.2.3 | 0.2.4 | Patch |
| `@backstage/plugin-auth-backend-module-oidc-provider` | 0.3.3 | 0.3.4 | Patch |
| `@backstage/plugin-auth-backend-module-okta-provider` | 0.1.3 | 0.1.4 | Patch |
| `@backstage/plugin-auth-backend-module-onelogin-provider` | 0.2.3 | 0.2.4 | Patch |
| `@backstage/plugin-auth-backend-module-pinniped-provider` | 0.2.3 | 0.2.4 | Patch |
| `@backstage/plugin-auth-backend-module-vmware-cloud-provider` | 0.4.2 | 0.4.3 | Patch |
| `@backstage/plugin-auth-node` | 0.5.5 | 0.5.6 | Patch |
| `@backstage/plugin-auth-react` | 0.1.10 | 0.1.11 | Patch |
| `@backstage/plugin-bitbucket-cloud-common` | 0.2.26 | 0.2.27 | Patch |
| `@backstage/plugin-catalog` | 1.26.0 | 1.26.1 | Patch |
| `@backstage/plugin-catalog-backend` | 1.29.0 | 1.30.0 | Minor |
| `@backstage/plugin-catalog-backend-module-aws` | 0.4.6 | 0.4.7 | Patch |
| `@backstage/plugin-catalog-backend-module-azure` | 0.3.0 | 0.3.1 | Patch |
| `@backstage/plugin-catalog-backend-module-backstage-openapi` | 0.4.3 | 0.4.4 | Patch |
| `@backstage/plugin-catalog-backend-module-bitbucket-cloud` | 0.4.3 | 0.4.4 | Patch |
| `@backstage/plugin-catalog-backend-module-bitbucket-server` | 0.3.0 | 0.3.1 | Patch |
| `@backstage/plugin-catalog-backend-module-gcp` | 0.3.3 | 0.3.4 | Patch |
| `@backstage/plugin-catalog-backend-module-gerrit` | 0.2.5 | 0.2.6 | Patch |
| `@backstage/plugin-catalog-backend-module-github` | 0.7.8 | 0.7.9 | Patch |
| `@backstage/plugin-catalog-backend-module-github-org` | 0.3.5 | 0.3.6 | Patch |
| `@backstage/plugin-catalog-backend-module-gitlab` | 0.6.1 | 0.6.2 | Patch |
| `@backstage/plugin-catalog-backend-module-gitlab-org` | 0.2.4 | 0.2.5 | Patch |
| `@backstage/plugin-catalog-backend-module-incremental-ingestion` | 0.6.1 | 0.6.2 | Patch |
| `@backstage/plugin-catalog-backend-module-ldap` | 0.11.0 | 0.11.1 | Patch |
| `@backstage/plugin-catalog-backend-module-logs` | 0.1.5 | 0.1.6 | Patch |
| `@backstage/plugin-catalog-backend-module-msgraph` | 0.6.5 | 0.6.6 | Patch |
| `@backstage/plugin-catalog-backend-module-openapi` | 0.2.5 | 0.2.6 | Patch |
| `@backstage/plugin-catalog-backend-module-puppetdb` | 0.2.5 | 0.2.6 | Patch |
| `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` | 0.2.3 | 0.2.4 | Patch |
| `@backstage/plugin-catalog-backend-module-unprocessed` | 0.5.3 | 0.5.4 | Patch |
| `@backstage/plugin-catalog-common` | 1.1.2 | 1.1.3 | Patch |
| `@backstage/plugin-catalog-graph` | 0.4.14 | 0.4.15 | Patch |
| `@backstage/plugin-catalog-import` | 0.12.8 | 0.12.9 | Patch |
| `@backstage/plugin-catalog-node` | 1.15.0 | 1.15.1 | Patch |
| `@backstage/plugin-catalog-react` | 1.15.0 | 1.15.1 | Patch |
| `@backstage/plugin-catalog-unprocessed-entities` | 0.2.12 | 0.2.13 | Patch |
| `@backstage/plugin-catalog-unprocessed-entities-common` | 0.0.6 | 0.0.7 | Patch ⚠️ |
| `@backstage/plugin-config-schema` | 0.1.63 | 0.1.64 | Patch |
| `@backstage/plugin-devtools` | 0.1.22 | 0.1.23 | Patch |
| `@backstage/plugin-devtools-backend` | 0.5.0 | 0.5.1 | Patch |
| `@backstage/plugin-devtools-common` | 0.1.14 | 0.1.15 | Patch |
| `@backstage/plugin-events-backend` | 0.4.0 | 0.4.1 | Patch |
| `@backstage/plugin-events-backend-module-aws-sqs` | 0.4.6 | 0.4.7 | Patch |
| `@backstage/plugin-events-backend-module-azure` | 0.2.15 | 0.2.16 | Patch |
| `@backstage/plugin-events-backend-module-bitbucket-cloud` | 0.2.15 | 0.2.16 | Patch |
| `@backstage/plugin-events-backend-module-gerrit` | 0.2.15 | 0.2.16 | Patch |
| `@backstage/plugin-events-backend-module-github` | 0.2.15 | 0.2.16 | Patch |
| `@backstage/plugin-events-backend-module-gitlab` | 0.2.15 | 0.2.16 | Patch |
| `@backstage/plugin-events-backend-test-utils` | 0.1.39 | 0.1.40 | Patch |
| `@backstage/plugin-events-node` | 0.4.6 | 0.4.7 | Patch |
| `@backstage/plugin-home` | 0.8.3 | 0.8.4 | Patch |
| `@backstage/plugin-home-react` | 0.1.21 | 0.1.22 | Patch |
| `@backstage/plugin-kubernetes` | 0.12.2 | 0.12.3 | Patch |
| `@backstage/plugin-kubernetes-backend` | 0.19.1 | 0.19.2 | Patch |
| `@backstage/plugin-kubernetes-cluster` | 0.0.20 | 0.0.21 | Patch ⚠️ |
| `@backstage/plugin-kubernetes-common` | 0.9.1 | 0.9.2 | Patch |
| `@backstage/plugin-kubernetes-node` | 0.2.1 | 0.2.2 | Patch |
| `@backstage/plugin-kubernetes-react` | 0.5.2 | 0.5.3 | Patch |
| `@backstage/plugin-notifications` | 0.5.0 | 0.5.1 | Patch |
| `@backstage/plugin-notifications-backend` | 0.5.0 | 0.5.1 | Patch |
| `@backstage/plugin-notifications-backend-module-email` | 0.3.4 | 0.3.5 | Patch |
| `@backstage/plugin-notifications-common` | 0.0.7 | 0.0.8 | Patch ⚠️ |
| `@backstage/plugin-notifications-node` | 0.2.10 | 0.2.11 | Patch |
| `@backstage/plugin-org` | 0.6.34 | 0.6.35 | Patch |
| `@backstage/plugin-org-react` | 0.1.33 | 0.1.34 | Patch |
| `@backstage/plugin-permission-backend` | 0.5.52 | 0.5.53 | Patch |
| `@backstage/plugin-permission-backend-module-allow-all-policy` | 0.2.3 | 0.2.4 | Patch |
| `@backstage/plugin-permission-common` | 0.8.3 | 0.8.4 | Patch |
| `@backstage/plugin-permission-node` | 0.8.6 | 0.8.7 | Patch |
| `@backstage/plugin-permission-react` | 0.4.29 | 0.4.30 | Patch |
| `@backstage/plugin-proxy-backend` | 0.5.9 | 0.5.10 | Patch |
| `@backstage/plugin-scaffolder` | 1.27.3 | 1.27.4 | Patch |
| `@backstage/plugin-scaffolder-backend` | 1.28.0 | 1.29.0 | Minor |
| `@backstage/plugin-scaffolder-backend-module-azure` | 0.2.4 | 0.2.5 | Patch |
| `@backstage/plugin-scaffolder-backend-module-bitbucket` | 0.3.5 | 0.3.6 | Patch |
| `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` | 0.2.4 | 0.2.5 | Patch |
| `@backstage/plugin-scaffolder-backend-module-bitbucket-server` | 0.2.4 | 0.2.5 | Patch |
| `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` | 0.3.4 | 0.3.5 | Patch |
| `@backstage/plugin-scaffolder-backend-module-cookiecutter` | 0.3.5 | 0.3.6 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gcp` | 0.2.4 | 0.2.5 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gerrit` | 0.2.4 | 0.2.5 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gitea` | 0.2.4 | 0.2.5 | Patch |
| `@backstage/plugin-scaffolder-backend-module-github` | 0.5.4 | 0.5.5 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gitlab` | 0.7.0 | 0.7.1 | Patch |
| `@backstage/plugin-scaffolder-backend-module-notifications` | 0.1.5 | 0.1.6 | Patch |
| `@backstage/plugin-scaffolder-backend-module-rails` | 0.5.4 | 0.5.5 | Patch |
| `@backstage/plugin-scaffolder-backend-module-sentry` | 0.2.4 | 0.2.5 | Patch |
| `@backstage/plugin-scaffolder-backend-module-yeoman` | 0.4.5 | 0.4.6 | Patch |
| `@backstage/plugin-scaffolder-common` | 1.5.8 | 1.5.9 | Patch |
| `@backstage/plugin-scaffolder-node` | 0.6.2 | 0.6.3 | Patch |
| `@backstage/plugin-scaffolder-node-test-utils` | 0.1.17 | 0.1.18 | Patch |
| `@backstage/plugin-scaffolder-react` | 1.14.2 | 1.14.3 | Patch |
| `@backstage/plugin-search` | 1.4.21 | 1.4.22 | Patch |
| `@backstage/plugin-search-backend` | 1.8.0 | 1.8.1 | Patch |
| `@backstage/plugin-search-backend-module-catalog` | 0.2.6 | 0.3.0 | Minor ⚠️ |
| `@backstage/plugin-search-backend-module-elasticsearch` | 1.6.3 | 1.6.4 | Patch |
| `@backstage/plugin-search-backend-module-explore` | 0.2.6 | 0.2.7 | Patch |
| `@backstage/plugin-search-backend-module-pg` | 0.5.39 | 0.5.40 | Patch |
| `@backstage/plugin-search-backend-module-stack-overflow-collator` | 0.3.4 | 0.3.5 | Patch |
| `@backstage/plugin-search-backend-module-techdocs` | 0.3.4 | 0.3.5 | Patch |
| `@backstage/plugin-search-backend-node` | 1.3.6 | 1.3.7 | Patch |
| `@backstage/plugin-search-common` | 1.2.16 | 1.2.17 | Patch |
| `@backstage/plugin-search-react` | 1.8.4 | 1.8.5 | Patch |
| `@backstage/plugin-signals` | 0.0.14 | 0.0.15 | Patch ⚠️ |
| `@backstage/plugin-signals-backend` | 0.2.4 | 0.3.0 | Minor ⚠️ |
| `@backstage/plugin-signals-node` | 0.1.15 | 0.1.16 | Patch |
| `@backstage/plugin-signals-react` | 0.0.8 | 0.0.9 | Patch ⚠️ |
| `@backstage/plugin-techdocs` | 1.12.0 | 1.12.1 | Patch |
| `@backstage/plugin-techdocs-addons-test-utils` | 1.0.43 | 1.0.44 | Patch |
| `@backstage/plugin-techdocs-backend` | 1.11.4 | 1.11.5 | Patch |
| `@backstage/plugin-techdocs-module-addons-contrib` | 1.1.19 | 1.1.20 | Patch |
| `@backstage/plugin-techdocs-node` | 1.12.15 | 1.12.16 | Patch |
| `@backstage/plugin-techdocs-react` | 1.2.12 | 1.2.13 | Patch |
| `@backstage/plugin-user-settings` | 0.8.17 | 0.8.18 | Patch |
| `@backstage/plugin-user-settings-backend` | 0.2.28 | 0.2.29 | Patch |
| `@backstage/repo-tools` | 0.12.0 | 0.12.1 | Patch |
| `@backstage/test-utils` | 1.7.3 | 1.7.4 | Patch |
| `@backstage/types` | 1.2.0 | 1.2.1 | Patch |
| `@techdocs/cli` | 1.8.24 | 1.8.25 | Patch |
