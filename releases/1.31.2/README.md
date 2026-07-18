# Backstage Release 1.31.2

## Compared to 1.31.1 (previous patch release)

0 added, 0 removed, 26 upgraded (⚠️ need extra attention: 1 0.0.x patch), 152 unchanged.

### Version bumps

| Package | 1.31.1 | 1.31.2 | Type |
| --- | --- | --- | --- |
| `@backstage/backend-dynamic-feature-service` | 0.4.0 | 0.4.1 | Patch |
| `@backstage/dev-utils` | 1.1.0 | 1.1.1 | Patch |
| `@backstage/integration-react` | 1.1.31 | 1.1.32 | Patch |
| `@backstage/plugin-api-docs` | 0.11.9 | 0.11.10 | Patch |
| `@backstage/plugin-catalog` | 1.23.0 | 1.23.1 | Patch |
| `@backstage/plugin-catalog-backend` | 1.26.0 | 1.26.1 | Patch |
| `@backstage/plugin-catalog-backend-module-github` | 0.7.3 | 0.7.4 | Patch |
| `@backstage/plugin-catalog-backend-module-github-org` | 0.3.0 | 0.3.1 | Patch |
| `@backstage/plugin-catalog-backend-module-incremental-ingestion` | 0.5.3 | 0.5.4 | Patch |
| `@backstage/plugin-catalog-backend-module-logs` | 0.1.0 | 0.1.1 | Patch |
| `@backstage/plugin-catalog-backend-module-openapi` | 0.2.0 | 0.2.1 | Patch |
| `@backstage/plugin-catalog-graph` | 0.4.9 | 0.4.10 | Patch |
| `@backstage/plugin-catalog-import` | 0.12.3 | 0.12.4 | Patch |
| `@backstage/plugin-catalog-react` | 1.13.0 | 1.13.1 | Patch |
| `@backstage/plugin-home` | 0.7.10 | 0.7.11 | Patch |
| `@backstage/plugin-kubernetes` | 0.11.14 | 0.11.15 | Patch |
| `@backstage/plugin-kubernetes-cluster` | 0.0.15 | 0.0.16 | Patch ⚠️ |
| `@backstage/plugin-org` | 0.6.29 | 0.6.30 | Patch |
| `@backstage/plugin-org-react` | 0.1.28 | 0.1.29 | Patch |
| `@backstage/plugin-scaffolder` | 1.25.0 | 1.25.1 | Patch |
| `@backstage/plugin-scaffolder-react` | 1.12.0 | 1.12.1 | Patch |
| `@backstage/plugin-search` | 1.4.16 | 1.4.17 | Patch |
| `@backstage/plugin-techdocs` | 1.10.9 | 1.10.10 | Patch |
| `@backstage/plugin-techdocs-addons-test-utils` | 1.0.38 | 1.0.39 | Patch |
| `@backstage/plugin-techdocs-module-addons-contrib` | 1.1.14 | 1.1.15 | Patch |
| `@backstage/plugin-user-settings` | 0.8.12 | 0.8.13 | Patch |

## Compared to 1.30.4 (previous minor release)

4 added, 1 removed, 158 upgraded (⚠️ need extra attention: 3 major, 58 0.x minor, 3 0.0.x patch), 16 unchanged.

### ⚠️ Major version bumps

| Package | 1.30.4 | 1.31.2 |
| --- | --- | --- |
| `@backstage/backend-app-api` | **0.9.3** | **1.0.0** |
| `@backstage/backend-plugin-api` | **0.8.1** | **1.0.0** |
| `@backstage/backend-test-utils` | **0.5.1** | **1.0.0** |

### 🆕 Added packages

| Package | Version |
| --- | --- |
| `@backstage/frontend-defaults` | 0.1.0 |
| `@backstage/plugin-app` | 0.1.0 |
| `@backstage/plugin-auth-backend-module-auth0-provider` | 0.1.0 |
| `@backstage/plugin-auth-backend-module-bitbucket-server-provider` | 0.1.0 |

### ❌ Removed packages

| Package | Last version |
| --- | --- |
| `@backstage/backend-tasks` | 0.6.1 |

### Version bumps

| Package | 1.30.4 | 1.31.2 | Type |
| --- | --- | --- | --- |
| `@backstage/app-defaults` | 1.5.10 | 1.5.11 | Patch |
| `@backstage/backend-app-api` | **0.9.3** | **1.0.0** | Major ⚠️ |
| `@backstage/backend-common` | 0.24.1 | 0.25.0 | Minor ⚠️ |
| `@backstage/backend-defaults` | 0.4.4 | 0.5.0 | Minor ⚠️ |
| `@backstage/backend-dynamic-feature-service` | 0.3.2 | 0.4.1 | Minor ⚠️ |
| `@backstage/backend-openapi-utils` | 0.1.17 | 0.1.18 | Patch |
| `@backstage/backend-plugin-api` | **0.8.1** | **1.0.0** | Major ⚠️ |
| `@backstage/backend-test-utils` | **0.5.1** | **1.0.0** | Major ⚠️ |
| `@backstage/catalog-client` | 1.6.6 | 1.7.0 | Minor |
| `@backstage/catalog-model` | 1.6.0 | 1.7.0 | Minor |
| `@backstage/cli` | 0.27.0 | 0.27.1 | Patch |
| `@backstage/cli-node` | 0.2.7 | 0.2.8 | Patch |
| `@backstage/codemods` | 0.1.49 | 0.1.50 | Patch |
| `@backstage/config-loader` | 1.9.0 | 1.9.1 | Patch |
| `@backstage/core-app-api` | 1.14.2 | 1.15.0 | Minor |
| `@backstage/core-compat-api` | 0.2.8 | 0.3.0 | Minor ⚠️ |
| `@backstage/core-components` | 0.14.10 | 0.15.0 | Minor ⚠️ |
| `@backstage/core-plugin-api` | 1.9.3 | 1.9.4 | Patch |
| `@backstage/create-app` | 0.5.18 | 0.5.20 | Patch |
| `@backstage/dev-utils` | 1.0.37 | 1.1.1 | Minor |
| `@backstage/eslint-plugin` | 0.1.8 | 0.1.9 | Patch |
| `@backstage/frontend-app-api` | 0.8.0 | 0.9.0 | Minor ⚠️ |
| `@backstage/frontend-plugin-api` | 0.7.0 | 0.8.0 | Minor ⚠️ |
| `@backstage/frontend-test-utils` | 0.1.12 | 0.2.0 | Minor ⚠️ |
| `@backstage/integration` | 1.14.0 | 1.15.0 | Minor |
| `@backstage/integration-react` | 1.1.30 | 1.1.32 | Patch |
| `@backstage/plugin-api-docs` | 0.11.8 | 0.11.10 | Patch |
| `@backstage/plugin-app-backend` | 0.3.73 | 0.3.74 | Patch |
| `@backstage/plugin-app-node` | 0.1.24 | 0.1.25 | Patch |
| `@backstage/plugin-app-visualizer` | 0.1.9 | 0.1.10 | Patch |
| `@backstage/plugin-auth-backend` | 0.22.12 | 0.23.0 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-atlassian-provider` | 0.2.5 | 0.3.0 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-aws-alb-provider` | 0.1.17 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-azure-easyauth-provider` | 0.1.7 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-bitbucket-provider` | 0.1.7 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-cloudflare-access-provider` | 0.2.1 | 0.3.0 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-gcp-iap-provider` | 0.2.19 | 0.3.0 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-github-provider` | 0.1.21 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-gitlab-provider` | 0.1.21 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-google-provider` | 0.1.21 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-guest-provider` | 0.1.10 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-microsoft-provider` | 0.1.19 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-oauth2-provider` | 0.2.5 | 0.3.0 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` | 0.1.17 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-oidc-provider` | 0.2.6 | 0.3.0 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-okta-provider` | 0.0.17 | 0.1.0 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-onelogin-provider` | 0.1.5 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-pinniped-provider` | 0.1.18 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-vmware-cloud-provider` | 0.2.5 | 0.3.0 | Minor ⚠️ |
| `@backstage/plugin-auth-node` | 0.5.1 | 0.5.2 | Patch |
| `@backstage/plugin-auth-react` | 0.1.5 | 0.1.6 | Patch |
| `@backstage/plugin-bitbucket-cloud-common` | 0.2.22 | 0.2.23 | Patch |
| `@backstage/plugin-catalog` | 1.22.0 | 1.23.1 | Minor |
| `@backstage/plugin-catalog-backend` | 1.25.2 | 1.26.1 | Minor |
| `@backstage/plugin-catalog-backend-module-aws` | 0.4.1 | 0.4.2 | Patch |
| `@backstage/plugin-catalog-backend-module-azure` | 0.2.1 | 0.2.2 | Patch |
| `@backstage/plugin-catalog-backend-module-backstage-openapi` | 0.3.1 | 0.4.0 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-bitbucket-cloud` | 0.3.1 | 0.3.2 | Patch |
| `@backstage/plugin-catalog-backend-module-bitbucket-server` | 0.2.1 | 0.2.2 | Patch |
| `@backstage/plugin-catalog-backend-module-gcp` | 0.2.1 | 0.3.0 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-gerrit` | 0.2.1 | 0.2.2 | Patch |
| `@backstage/plugin-catalog-backend-module-github` | 0.7.2 | 0.7.4 | Patch |
| `@backstage/plugin-catalog-backend-module-github-org` | 0.2.2 | 0.3.1 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-gitlab` | 0.4.1 | 0.4.2 | Patch |
| `@backstage/plugin-catalog-backend-module-gitlab-org` | 0.1.1 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-incremental-ingestion` | 0.5.2 | 0.5.4 | Patch |
| `@backstage/plugin-catalog-backend-module-ldap` | 0.8.1 | 0.9.0 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-logs` | 0.0.4 | 0.1.1 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-msgraph` | 0.6.1 | 0.6.2 | Patch |
| `@backstage/plugin-catalog-backend-module-openapi` | 0.1.43 | 0.2.1 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-puppetdb` | 0.2.1 | 0.2.2 | Patch |
| `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` | 0.1.22 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-unprocessed` | 0.4.11 | 0.5.0 | Minor ⚠️ |
| `@backstage/plugin-catalog-common` | 1.0.26 | 1.1.0 | Minor |
| `@backstage/plugin-catalog-graph` | 0.4.8 | 0.4.10 | Patch |
| `@backstage/plugin-catalog-import` | 0.12.2 | 0.12.4 | Patch |
| `@backstage/plugin-catalog-node` | 1.12.6 | 1.13.0 | Minor |
| `@backstage/plugin-catalog-react` | 1.12.3 | 1.13.1 | Minor |
| `@backstage/plugin-catalog-unprocessed-entities` | 0.2.7 | 0.2.8 | Patch |
| `@backstage/plugin-config-schema` | 0.1.58 | 0.1.59 | Patch |
| `@backstage/plugin-devtools` | 0.1.17 | 0.1.18 | Patch |
| `@backstage/plugin-devtools-backend` | 0.3.10 | 0.4.0 | Minor ⚠️ |
| `@backstage/plugin-events-backend` | 0.3.11 | 0.3.12 | Patch |
| `@backstage/plugin-events-backend-module-aws-sqs` | 0.4.1 | 0.4.2 | Patch |
| `@backstage/plugin-events-backend-module-azure` | 0.2.10 | 0.2.11 | Patch |
| `@backstage/plugin-events-backend-module-bitbucket-cloud` | 0.2.10 | 0.2.11 | Patch |
| `@backstage/plugin-events-backend-module-gerrit` | 0.2.10 | 0.2.11 | Patch |
| `@backstage/plugin-events-backend-module-github` | 0.2.10 | 0.2.11 | Patch |
| `@backstage/plugin-events-backend-module-gitlab` | 0.2.10 | 0.2.11 | Patch |
| `@backstage/plugin-events-backend-test-utils` | 0.1.34 | 0.1.35 | Patch |
| `@backstage/plugin-events-node` | 0.3.10 | 0.4.0 | Minor ⚠️ |
| `@backstage/plugin-home` | 0.7.9 | 0.7.11 | Patch |
| `@backstage/plugin-home-react` | 0.1.16 | 0.1.17 | Patch |
| `@backstage/plugin-kubernetes` | 0.11.13 | 0.11.15 | Patch |
| `@backstage/plugin-kubernetes-backend` | 0.18.5 | 0.18.6 | Patch |
| `@backstage/plugin-kubernetes-cluster` | 0.0.14 | 0.0.16 | Patch ⚠️ |
| `@backstage/plugin-kubernetes-common` | 0.8.2 | 0.8.3 | Patch |
| `@backstage/plugin-kubernetes-node` | 0.1.18 | 0.1.19 | Patch |
| `@backstage/plugin-kubernetes-react` | 0.4.2 | 0.4.3 | Patch |
| `@backstage/plugin-notifications` | 0.3.0 | 0.3.1 | Patch |
| `@backstage/plugin-notifications-backend` | 0.3.5 | 0.4.0 | Minor ⚠️ |
| `@backstage/plugin-notifications-backend-module-email` | 0.2.1 | 0.3.0 | Minor ⚠️ |
| `@backstage/plugin-notifications-node` | 0.2.5 | 0.2.6 | Patch |
| `@backstage/plugin-org` | 0.6.28 | 0.6.30 | Patch |
| `@backstage/plugin-org-react` | 0.1.27 | 0.1.29 | Patch |
| `@backstage/plugin-permission-backend` | 0.5.48 | 0.5.49 | Patch |
| `@backstage/plugin-permission-backend-module-allow-all-policy` | 0.1.21 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-permission-node` | 0.8.2 | 0.8.3 | Patch |
| `@backstage/plugin-permission-react` | 0.4.25 | 0.4.26 | Patch |
| `@backstage/plugin-proxy-backend` | 0.5.5 | 0.5.6 | Patch |
| `@backstage/plugin-scaffolder` | 1.24.0 | 1.25.1 | Minor |
| `@backstage/plugin-scaffolder-backend` | 1.24.1 | 1.25.0 | Minor |
| `@backstage/plugin-scaffolder-backend-module-azure` | 0.1.16 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-bitbucket` | 0.2.14 | 0.3.0 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` | 0.1.14 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-bitbucket-server` | 0.1.14 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` | 0.2.25 | 0.3.0 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-cookiecutter` | 0.2.48 | 0.3.0 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-gcp` | 0.1.2 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-gerrit` | 0.1.16 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-gitea` | 0.1.14 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-github` | 0.4.2 | 0.5.0 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-gitlab` | 0.4.6 | 0.5.0 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-notifications` | 0.0.7 | 0.1.0 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-rails` | 0.4.41 | 0.5.0 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-sentry` | 0.1.32 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-yeoman` | 0.3.8 | 0.4.0 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-common` | 1.5.5 | 1.5.6 | Patch |
| `@backstage/plugin-scaffolder-node` | 0.4.10 | 0.4.11 | Patch |
| `@backstage/plugin-scaffolder-node-test-utils` | 0.1.11 | 0.1.12 | Patch |
| `@backstage/plugin-scaffolder-react` | 1.11.0 | 1.12.1 | Minor |
| `@backstage/plugin-search` | 1.4.15 | 1.4.17 | Patch |
| `@backstage/plugin-search-backend` | 1.5.16 | 1.5.17 | Patch |
| `@backstage/plugin-search-backend-module-catalog` | 0.2.1 | 0.2.2 | Patch |
| `@backstage/plugin-search-backend-module-elasticsearch` | 1.5.5 | 1.5.6 | Patch |
| `@backstage/plugin-search-backend-module-explore` | 0.2.1 | 0.2.2 | Patch |
| `@backstage/plugin-search-backend-module-pg` | 0.5.34 | 0.5.35 | Patch |
| `@backstage/plugin-search-backend-module-stack-overflow-collator` | 0.2.1 | 0.3.0 | Minor ⚠️ |
| `@backstage/plugin-search-backend-module-techdocs` | 0.2.1 | 0.2.2 | Patch |
| `@backstage/plugin-search-backend-node` | 1.3.1 | 1.3.2 | Patch |
| `@backstage/plugin-search-react` | 1.7.14 | 1.8.0 | Minor |
| `@backstage/plugin-signals` | 0.0.9 | 0.0.10 | Patch ⚠️ |
| `@backstage/plugin-signals-backend` | 0.1.10 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-signals-node` | 0.1.10 | 0.1.11 | Patch |
| `@backstage/plugin-signals-react` | 0.0.4 | 0.0.5 | Patch ⚠️ |
| `@backstage/plugin-techdocs` | 1.10.8 | 1.10.10 | Patch |
| `@backstage/plugin-techdocs-addons-test-utils` | 1.0.37 | 1.0.39 | Patch |
| `@backstage/plugin-techdocs-backend` | 1.10.12 | 1.10.13 | Patch |
| `@backstage/plugin-techdocs-module-addons-contrib` | 1.1.13 | 1.1.15 | Patch |
| `@backstage/plugin-techdocs-node` | 1.12.10 | 1.12.11 | Patch |
| `@backstage/plugin-techdocs-react` | 1.2.7 | 1.2.8 | Patch |
| `@backstage/plugin-user-settings` | 0.8.11 | 0.8.13 | Patch |
| `@backstage/plugin-user-settings-backend` | 0.2.23 | 0.2.24 | Patch |
| `@backstage/repo-tools` | 0.9.6 | 0.9.7 | Patch |
| `@backstage/test-utils` | 1.5.10 | 1.6.0 | Minor |
| `@backstage/theme` | 0.5.6 | 0.5.7 | Patch |
| `@backstage/version-bridge` | 1.0.8 | 1.0.9 | Patch |
| `@techdocs/cli` | 1.8.18 | 1.8.19 | Patch |
