# Backstage Release 1.30.2

## Compared to 1.30.1 (previous patch release)

0 major bumps, 0 added, 0 removed, 1 upgraded, 174 unchanged.

### Version bumps

| Package | 1.30.1 | 1.30.2 | Type |
| --- | --- | --- | --- |
| `@backstage/backend-app-api` | 0.9.1 | 0.9.2 | Patch |

## Compared to 1.29.2 (previous minor release)

0 major bumps, 1 added, 0 removed, 157 upgraded, 17 unchanged.

### 🆕 Added packages

| Package | Version |
| --- | --- |
| `@backstage/plugin-techdocs-common` | 0.1.0 |

### Version bumps

| Package | 1.29.2 | 1.30.2 | Type |
| --- | --- | --- | --- |
| `@backstage/app-defaults` | 1.5.9 | 1.5.10 | Patch |
| `@backstage/backend-app-api` | 0.8.0 | 0.9.2 | Minor ⚠️ |
| `@backstage/backend-common` | 0.23.3 | 0.24.0 | Minor ⚠️ |
| `@backstage/backend-defaults` | 0.4.1 | 0.4.3 | Patch |
| `@backstage/backend-dev-utils` | 0.1.4 | 0.1.5 | Patch |
| `@backstage/backend-dynamic-feature-service` | 0.2.15 | 0.3.0 | Minor ⚠️ |
| `@backstage/backend-openapi-utils` | 0.1.15 | 0.1.16 | Patch |
| `@backstage/backend-plugin-api` | 0.7.0 | 0.8.0 | Minor ⚠️ |
| `@backstage/backend-tasks` | 0.5.27 | 0.6.0 | Minor ⚠️ |
| `@backstage/backend-test-utils` | 0.4.4 | 0.5.0 | Minor ⚠️ |
| `@backstage/catalog-client` | 1.6.5 | 1.6.6 | Patch |
| `@backstage/catalog-model` | 1.5.0 | 1.6.0 | Minor |
| `@backstage/cli` | 0.26.11 | 0.27.0 | Minor ⚠️ |
| `@backstage/config-loader` | 1.8.1 | 1.9.0 | Minor |
| `@backstage/core-app-api` | 1.14.1 | 1.14.2 | Patch |
| `@backstage/core-compat-api` | 0.2.7 | 0.2.8 | Patch |
| `@backstage/core-components` | 0.14.9 | 0.14.10 | Patch |
| `@backstage/create-app` | 0.5.17 | 0.5.18 | Patch |
| `@backstage/dev-utils` | 1.0.36 | 1.0.37 | Patch |
| `@backstage/frontend-app-api` | 0.7.4 | 0.8.0 | Minor ⚠️ |
| `@backstage/frontend-plugin-api` | 0.6.7 | 0.7.0 | Minor ⚠️ |
| `@backstage/frontend-test-utils` | 0.1.11 | 0.1.12 | Patch |
| `@backstage/integration` | 1.13.0 | 1.14.0 | Minor |
| `@backstage/integration-react` | 1.1.29 | 1.1.30 | Patch |
| `@backstage/plugin-api-docs` | 0.11.7 | 0.11.8 | Patch |
| `@backstage/plugin-app-backend` | 0.3.71 | 0.3.72 | Patch |
| `@backstage/plugin-app-node` | 0.1.22 | 0.1.23 | Patch |
| `@backstage/plugin-app-visualizer` | 0.1.8 | 0.1.9 | Patch |
| `@backstage/plugin-auth-backend` | 0.22.9 | 0.22.10 | Patch |
| `@backstage/plugin-auth-backend-module-atlassian-provider` | 0.2.3 | 0.2.4 | Patch |
| `@backstage/plugin-auth-backend-module-aws-alb-provider` | 0.1.14 | 0.1.15 | Patch |
| `@backstage/plugin-auth-backend-module-azure-easyauth-provider` | 0.1.5 | 0.1.6 | Patch |
| `@backstage/plugin-auth-backend-module-bitbucket-provider` | 0.1.5 | 0.1.6 | Patch |
| `@backstage/plugin-auth-backend-module-cloudflare-access-provider` | 0.1.5 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-gcp-iap-provider` | 0.2.17 | 0.2.18 | Patch |
| `@backstage/plugin-auth-backend-module-github-provider` | 0.1.19 | 0.1.20 | Patch |
| `@backstage/plugin-auth-backend-module-gitlab-provider` | 0.1.19 | 0.1.20 | Patch |
| `@backstage/plugin-auth-backend-module-google-provider` | 0.1.19 | 0.1.20 | Patch |
| `@backstage/plugin-auth-backend-module-guest-provider` | 0.1.8 | 0.1.9 | Patch |
| `@backstage/plugin-auth-backend-module-microsoft-provider` | 0.1.17 | 0.1.18 | Patch |
| `@backstage/plugin-auth-backend-module-oauth2-provider` | 0.2.3 | 0.2.4 | Patch |
| `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` | 0.1.15 | 0.1.16 | Patch |
| `@backstage/plugin-auth-backend-module-oidc-provider` | 0.2.3 | 0.2.4 | Patch |
| `@backstage/plugin-auth-backend-module-okta-provider` | 0.0.15 | 0.0.16 | Patch ⚠️ |
| `@backstage/plugin-auth-backend-module-onelogin-provider` | 0.1.3 | 0.1.4 | Patch |
| `@backstage/plugin-auth-backend-module-pinniped-provider` | 0.1.16 | 0.1.17 | Patch |
| `@backstage/plugin-auth-backend-module-vmware-cloud-provider` | 0.2.3 | 0.2.4 | Patch |
| `@backstage/plugin-auth-node` | 0.4.17 | 0.5.0 | Minor ⚠️ |
| `@backstage/plugin-auth-react` | 0.1.4 | 0.1.5 | Patch |
| `@backstage/plugin-bitbucket-cloud-common` | 0.2.21 | 0.2.22 | Patch |
| `@backstage/plugin-catalog` | 1.21.1 | 1.22.0 | Minor |
| `@backstage/plugin-catalog-backend` | 1.24.0 | 1.25.0 | Minor |
| `@backstage/plugin-catalog-backend-module-aws` | 0.3.17 | 0.4.0 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-azure` | 0.1.42 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-backstage-openapi` | 0.2.5 | 0.3.0 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-bitbucket-cloud` | 0.2.9 | 0.3.0 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-bitbucket-server` | 0.1.36 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-gcp` | 0.1.23 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-gerrit` | 0.1.39 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-github` | 0.6.5 | 0.7.0 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-github-org` | 0.1.17 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-gitlab` | 0.3.21 | 0.4.0 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-gitlab-org` | 0.0.5 | 0.1.0 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-incremental-ingestion` | 0.4.27 | 0.5.0 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-ldap` | 0.7.0 | 0.8.0 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-logs` | 0.0.1 | 0.0.2 | Patch ⚠️ |
| `@backstage/plugin-catalog-backend-module-msgraph` | 0.5.30 | 0.6.0 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-openapi` | 0.1.40 | 0.1.41 | Patch |
| `@backstage/plugin-catalog-backend-module-puppetdb` | 0.1.28 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` | 0.1.20 | 0.1.21 | Patch |
| `@backstage/plugin-catalog-backend-module-unprocessed` | 0.4.9 | 0.4.10 | Patch |
| `@backstage/plugin-catalog-common` | 1.0.25 | 1.0.26 | Patch |
| `@backstage/plugin-catalog-graph` | 0.4.7 | 0.4.8 | Patch |
| `@backstage/plugin-catalog-import` | 0.12.1 | 0.12.2 | Patch |
| `@backstage/plugin-catalog-node` | 1.12.4 | 1.12.5 | Patch |
| `@backstage/plugin-catalog-react` | 1.12.2 | 1.12.3 | Patch |
| `@backstage/plugin-catalog-unprocessed-entities` | 0.2.6 | 0.2.7 | Patch |
| `@backstage/plugin-catalog-unprocessed-entities-common` | 0.0.3 | 0.0.4 | Patch ⚠️ |
| `@backstage/plugin-config-schema` | 0.1.57 | 0.1.58 | Patch |
| `@backstage/plugin-devtools` | 0.1.16 | 0.1.17 | Patch |
| `@backstage/plugin-devtools-backend` | 0.3.8 | 0.3.9 | Patch |
| `@backstage/plugin-devtools-common` | 0.1.11 | 0.1.12 | Patch |
| `@backstage/plugin-events-backend` | 0.3.9 | 0.3.10 | Patch |
| `@backstage/plugin-events-backend-module-aws-sqs` | 0.3.8 | 0.4.0 | Minor ⚠️ |
| `@backstage/plugin-events-backend-module-azure` | 0.2.8 | 0.2.9 | Patch |
| `@backstage/plugin-events-backend-module-bitbucket-cloud` | 0.2.8 | 0.2.9 | Patch |
| `@backstage/plugin-events-backend-module-gerrit` | 0.2.8 | 0.2.9 | Patch |
| `@backstage/plugin-events-backend-module-github` | 0.2.8 | 0.2.9 | Patch |
| `@backstage/plugin-events-backend-module-gitlab` | 0.2.8 | 0.2.9 | Patch |
| `@backstage/plugin-events-backend-test-utils` | 0.1.32 | 0.1.33 | Patch |
| `@backstage/plugin-events-node` | 0.3.8 | 0.3.9 | Patch |
| `@backstage/plugin-home` | 0.7.8 | 0.7.9 | Patch |
| `@backstage/plugin-home-react` | 0.1.15 | 0.1.16 | Patch |
| `@backstage/plugin-kubernetes` | 0.11.12 | 0.11.13 | Patch |
| `@backstage/plugin-kubernetes-backend` | 0.18.3 | 0.18.4 | Patch |
| `@backstage/plugin-kubernetes-cluster` | 0.0.13 | 0.0.14 | Patch ⚠️ |
| `@backstage/plugin-kubernetes-common` | 0.8.1 | 0.8.2 | Patch |
| `@backstage/plugin-kubernetes-node` | 0.1.16 | 0.1.17 | Patch |
| `@backstage/plugin-kubernetes-react` | 0.4.1 | 0.4.2 | Patch |
| `@backstage/plugin-notifications` | 0.2.3 | 0.3.0 | Minor ⚠️ |
| `@backstage/plugin-notifications-backend` | 0.3.3 | 0.3.4 | Patch |
| `@backstage/plugin-notifications-backend-module-email` | 0.1.3 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-notifications-node` | 0.2.3 | 0.2.4 | Patch |
| `@backstage/plugin-org` | 0.6.27 | 0.6.28 | Patch |
| `@backstage/plugin-org-react` | 0.1.26 | 0.1.27 | Patch |
| `@backstage/plugin-permission-backend` | 0.5.46 | 0.5.47 | Patch |
| `@backstage/plugin-permission-backend-module-allow-all-policy` | 0.1.19 | 0.1.20 | Patch |
| `@backstage/plugin-permission-common` | 0.8.0 | 0.8.1 | Patch |
| `@backstage/plugin-permission-node` | 0.8.0 | 0.8.1 | Patch |
| `@backstage/plugin-permission-react` | 0.4.24 | 0.4.25 | Patch |
| `@backstage/plugin-proxy-backend` | 0.5.3 | 0.5.4 | Patch |
| `@backstage/plugin-scaffolder` | 1.23.0 | 1.24.0 | Minor |
| `@backstage/plugin-scaffolder-backend` | 1.23.0 | 1.24.0 | Minor |
| `@backstage/plugin-scaffolder-backend-module-azure` | 0.1.14 | 0.1.15 | Patch |
| `@backstage/plugin-scaffolder-backend-module-bitbucket` | 0.2.12 | 0.2.13 | Patch |
| `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` | 0.1.12 | 0.1.13 | Patch |
| `@backstage/plugin-scaffolder-backend-module-bitbucket-server` | 0.1.12 | 0.1.13 | Patch |
| `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` | 0.2.23 | 0.2.24 | Patch |
| `@backstage/plugin-scaffolder-backend-module-cookiecutter` | 0.2.46 | 0.2.47 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gcp` | 0.1.0 | 0.1.1 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gerrit` | 0.1.14 | 0.1.15 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gitea` | 0.1.12 | 0.1.13 | Patch |
| `@backstage/plugin-scaffolder-backend-module-github` | 0.4.0 | 0.4.1 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gitlab` | 0.4.4 | 0.4.5 | Patch |
| `@backstage/plugin-scaffolder-backend-module-notifications` | 0.0.5 | 0.0.6 | Patch ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-rails` | 0.4.39 | 0.4.40 | Patch |
| `@backstage/plugin-scaffolder-backend-module-sentry` | 0.1.30 | 0.1.31 | Patch |
| `@backstage/plugin-scaffolder-backend-module-yeoman` | 0.3.6 | 0.3.7 | Patch |
| `@backstage/plugin-scaffolder-common` | 1.5.4 | 1.5.5 | Patch |
| `@backstage/plugin-scaffolder-node` | 0.4.8 | 0.4.9 | Patch |
| `@backstage/plugin-scaffolder-node-test-utils` | 0.1.9 | 0.1.10 | Patch |
| `@backstage/plugin-scaffolder-react` | 1.10.0 | 1.11.0 | Minor |
| `@backstage/plugin-search` | 1.4.14 | 1.4.15 | Patch |
| `@backstage/plugin-search-backend` | 1.5.14 | 1.5.15 | Patch |
| `@backstage/plugin-search-backend-module-catalog` | 0.1.28 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-search-backend-module-elasticsearch` | 1.5.3 | 1.5.4 | Patch |
| `@backstage/plugin-search-backend-module-explore` | 0.1.28 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-search-backend-module-pg` | 0.5.32 | 0.5.33 | Patch |
| `@backstage/plugin-search-backend-module-stack-overflow-collator` | 0.1.15 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-search-backend-module-techdocs` | 0.1.27 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-search-backend-node` | 1.2.27 | 1.3.0 | Minor |
| `@backstage/plugin-search-common` | 1.2.13 | 1.2.14 | Patch |
| `@backstage/plugin-search-react` | 1.7.13 | 1.7.14 | Patch |
| `@backstage/plugin-signals` | 0.0.8 | 0.0.9 | Patch ⚠️ |
| `@backstage/plugin-signals-backend` | 0.1.8 | 0.1.9 | Patch |
| `@backstage/plugin-signals-node` | 0.1.8 | 0.1.9 | Patch |
| `@backstage/plugin-techdocs` | 1.10.7 | 1.10.8 | Patch |
| `@backstage/plugin-techdocs-addons-test-utils` | 1.0.36 | 1.0.37 | Patch |
| `@backstage/plugin-techdocs-backend` | 1.10.9 | 1.10.11 | Patch |
| `@backstage/plugin-techdocs-module-addons-contrib` | 1.1.12 | 1.1.13 | Patch |
| `@backstage/plugin-techdocs-node` | 1.12.8 | 1.12.9 | Patch |
| `@backstage/plugin-techdocs-react` | 1.2.6 | 1.2.7 | Patch |
| `@backstage/plugin-user-settings` | 0.8.10 | 0.8.11 | Patch |
| `@backstage/plugin-user-settings-backend` | 0.2.21 | 0.2.22 | Patch |
| `@backstage/repo-tools` | 0.9.4 | 0.9.5 | Patch |
| `@backstage/test-utils` | 1.5.9 | 1.5.10 | Patch |
| `@techdocs/cli` | 1.8.16 | 1.8.17 | Patch |
