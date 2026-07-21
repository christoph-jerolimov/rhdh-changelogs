# RHDH Release 1.4 (Backstage 1.32.6)

## Compared to 1.29.2 (RHDH 1.3)

5 added, 2 removed, 163 upgraded, 9 unchanged.

⚠️ Need extra attention: 3 major, 79 0.x minor, 4 0.0.x patch.

### ⚠️ Major version bumps

| Package | 1.29.2 | 1.32.6 |
| --- | --- | --- |
| `@backstage/backend-app-api` | **0.8.0** | **1.0.1** |
| `@backstage/backend-plugin-api` | **0.7.0** | **1.0.1** |
| `@backstage/backend-test-utils` | **0.4.4** | **1.0.2** |

### 🆕 Added packages

| Package | Version |
| --- | --- |
| `@backstage/frontend-defaults` | 0.1.1 |
| `@backstage/plugin-app` | 0.1.1 |
| `@backstage/plugin-auth-backend-module-auth0-provider` | 0.1.1 |
| `@backstage/plugin-auth-backend-module-bitbucket-server-provider` | 0.1.1 |
| `@backstage/plugin-techdocs-common` | 0.1.0 |

### ❌ Removed packages

| Package | Last version |
| --- | --- |
| `@backstage/backend-common` | 0.23.3 |
| `@backstage/backend-tasks` | 0.5.27 |

### Version bumps

| Package | 1.29.2 | 1.32.6 | Type |
| --- | --- | --- | --- |
| `@backstage/app-defaults` | 1.5.9 | 1.5.12 | Patch |
| `@backstage/backend-app-api` | **0.8.0** | **1.0.1** | Major ⚠️ |
| `@backstage/backend-defaults` | 0.4.1 | 0.5.2 | Minor ⚠️ |
| `@backstage/backend-dev-utils` | 0.1.4 | 0.1.5 | Patch |
| `@backstage/backend-dynamic-feature-service` | 0.2.15 | 0.4.4 | Minor ⚠️ |
| `@backstage/backend-openapi-utils` | 0.1.15 | 0.2.0 | Minor ⚠️ |
| `@backstage/backend-plugin-api` | **0.7.0** | **1.0.1** | Major ⚠️ |
| `@backstage/backend-test-utils` | **0.4.4** | **1.0.2** | Major ⚠️ |
| `@backstage/catalog-client` | 1.6.5 | 1.7.1 | Minor |
| `@backstage/catalog-model` | 1.5.0 | 1.7.0 | Minor |
| `@backstage/cli` | 0.26.11 | 0.28.2 | Minor ⚠️ |
| `@backstage/cli-node` | 0.2.7 | 0.2.9 | Patch |
| `@backstage/codemods` | 0.1.49 | 0.1.51 | Patch |
| `@backstage/config-loader` | 1.8.1 | 1.9.1 | Minor |
| `@backstage/core-app-api` | 1.14.1 | 1.15.1 | Minor |
| `@backstage/core-compat-api` | 0.2.7 | 0.3.1 | Minor ⚠️ |
| `@backstage/core-components` | 0.14.9 | 0.15.1 | Minor ⚠️ |
| `@backstage/core-plugin-api` | 1.9.3 | 1.10.0 | Minor |
| `@backstage/create-app` | 0.5.17 | 0.5.21 | Patch |
| `@backstage/dev-utils` | 1.0.36 | 1.1.2 | Minor |
| `@backstage/eslint-plugin` | 0.1.8 | 0.1.10 | Patch |
| `@backstage/frontend-app-api` | 0.7.4 | 0.10.0 | Minor ⚠️ |
| `@backstage/frontend-plugin-api` | 0.6.7 | 0.9.0 | Minor ⚠️ |
| `@backstage/frontend-test-utils` | 0.1.11 | 0.2.1 | Minor ⚠️ |
| `@backstage/integration` | 1.13.0 | 1.15.1 | Minor |
| `@backstage/integration-react` | 1.1.29 | 1.2.0 | Minor |
| `@backstage/plugin-api-docs` | 0.11.7 | 0.11.11 | Patch |
| `@backstage/plugin-api-docs-module-protoc-gen-doc` | 0.1.7 | 0.1.8 | Patch |
| `@backstage/plugin-app-backend` | 0.3.71 | 0.3.76 | Patch |
| `@backstage/plugin-app-node` | 0.1.22 | 0.1.26 | Patch |
| `@backstage/plugin-app-visualizer` | 0.1.8 | 0.1.11 | Patch |
| `@backstage/plugin-auth-backend` | 0.22.9 | 0.23.1 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-atlassian-provider` | 0.2.3 | 0.3.1 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-aws-alb-provider` | 0.1.14 | 0.2.1 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-azure-easyauth-provider` | 0.1.5 | 0.2.1 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-bitbucket-provider` | 0.1.5 | 0.2.1 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-cloudflare-access-provider` | 0.1.5 | 0.3.1 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-gcp-iap-provider` | 0.2.17 | 0.3.1 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-github-provider` | 0.1.19 | 0.2.1 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-gitlab-provider` | 0.1.19 | 0.2.1 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-google-provider` | 0.1.19 | 0.2.1 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-guest-provider` | 0.1.8 | 0.2.1 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-microsoft-provider` | 0.1.17 | 0.2.1 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-oauth2-provider` | 0.2.3 | 0.3.1 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` | 0.1.15 | 0.2.1 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-oidc-provider` | 0.2.3 | 0.3.1 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-okta-provider` | 0.0.15 | 0.1.1 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-onelogin-provider` | 0.1.3 | 0.2.1 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-pinniped-provider` | 0.1.16 | 0.2.1 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-vmware-cloud-provider` | 0.2.3 | 0.4.0 | Minor ⚠️ |
| `@backstage/plugin-auth-node` | 0.4.17 | 0.5.3 | Minor ⚠️ |
| `@backstage/plugin-auth-react` | 0.1.4 | 0.1.7 | Patch |
| `@backstage/plugin-bitbucket-cloud-common` | 0.2.21 | 0.2.24 | Patch |
| `@backstage/plugin-catalog` | 1.21.1 | 1.24.0 | Minor |
| `@backstage/plugin-catalog-backend` | 1.24.0 | 1.27.1 | Minor |
| `@backstage/plugin-catalog-backend-module-aws` | 0.3.17 | 0.4.4 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-azure` | 0.1.42 | 0.2.3 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-backstage-openapi` | 0.2.5 | 0.4.1 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-bitbucket-cloud` | 0.2.9 | 0.4.1 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-bitbucket-server` | 0.1.36 | 0.2.3 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-gcp` | 0.1.23 | 0.3.1 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-gerrit` | 0.1.39 | 0.2.3 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-github` | 0.6.5 | 0.7.6 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-github-org` | 0.1.17 | 0.3.3 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-gitlab` | 0.3.21 | 0.4.4 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-gitlab-org` | 0.0.5 | 0.2.2 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-incremental-ingestion` | 0.4.27 | 0.5.6 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-ldap` | 0.7.0 | 0.9.1 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-logs` | 0.0.1 | 0.1.3 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-msgraph` | 0.5.30 | 0.6.3 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-openapi` | 0.1.40 | 0.2.3 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-puppetdb` | 0.1.28 | 0.2.3 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` | 0.1.20 | 0.2.1 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-unprocessed` | 0.4.9 | 0.5.1 | Minor ⚠️ |
| `@backstage/plugin-catalog-common` | 1.0.25 | 1.1.0 | Minor |
| `@backstage/plugin-catalog-graph` | 0.4.7 | 0.4.11 | Patch |
| `@backstage/plugin-catalog-import` | 0.12.1 | 0.12.5 | Patch |
| `@backstage/plugin-catalog-node` | 1.12.4 | 1.13.1 | Minor |
| `@backstage/plugin-catalog-react` | 1.12.2 | 1.14.0 | Minor |
| `@backstage/plugin-catalog-unprocessed-entities` | 0.2.6 | 0.2.9 | Patch |
| `@backstage/plugin-catalog-unprocessed-entities-common` | 0.0.3 | 0.0.4 | Patch ⚠️ |
| `@backstage/plugin-config-schema` | 0.1.57 | 0.1.60 | Patch |
| `@backstage/plugin-devtools` | 0.1.16 | 0.1.19 | Patch |
| `@backstage/plugin-devtools-backend` | 0.3.8 | 0.4.1 | Minor ⚠️ |
| `@backstage/plugin-devtools-common` | 0.1.11 | 0.1.12 | Patch |
| `@backstage/plugin-events-backend` | 0.3.9 | 0.3.15 | Patch |
| `@backstage/plugin-events-backend-module-aws-sqs` | 0.3.8 | 0.4.4 | Minor ⚠️ |
| `@backstage/plugin-events-backend-module-azure` | 0.2.8 | 0.2.13 | Patch |
| `@backstage/plugin-events-backend-module-bitbucket-cloud` | 0.2.8 | 0.2.13 | Patch |
| `@backstage/plugin-events-backend-module-gerrit` | 0.2.8 | 0.2.13 | Patch |
| `@backstage/plugin-events-backend-module-github` | 0.2.8 | 0.2.13 | Patch |
| `@backstage/plugin-events-backend-module-gitlab` | 0.2.8 | 0.2.13 | Patch |
| `@backstage/plugin-events-backend-test-utils` | 0.1.32 | 0.1.37 | Patch |
| `@backstage/plugin-events-node` | 0.3.8 | 0.4.4 | Minor ⚠️ |
| `@backstage/plugin-home` | 0.7.8 | 0.8.0 | Minor ⚠️ |
| `@backstage/plugin-home-react` | 0.1.15 | 0.1.18 | Patch |
| `@backstage/plugin-kubernetes` | 0.11.12 | 0.11.16 | Patch |
| `@backstage/plugin-kubernetes-backend` | 0.18.3 | 0.18.7 | Patch |
| `@backstage/plugin-kubernetes-cluster` | 0.0.13 | 0.0.17 | Patch ⚠️ |
| `@backstage/plugin-kubernetes-common` | 0.8.1 | 0.8.3 | Patch |
| `@backstage/plugin-kubernetes-node` | 0.1.16 | 0.1.20 | Patch |
| `@backstage/plugin-kubernetes-react` | 0.4.1 | 0.4.4 | Patch |
| `@backstage/plugin-notifications` | 0.2.3 | 0.3.2 | Minor ⚠️ |
| `@backstage/plugin-notifications-backend` | 0.3.3 | 0.4.2 | Minor ⚠️ |
| `@backstage/plugin-notifications-backend-module-email` | 0.1.3 | 0.3.2 | Minor ⚠️ |
| `@backstage/plugin-notifications-node` | 0.2.3 | 0.2.8 | Patch |
| `@backstage/plugin-org` | 0.6.27 | 0.6.31 | Patch |
| `@backstage/plugin-org-react` | 0.1.26 | 0.1.30 | Patch |
| `@backstage/plugin-permission-backend` | 0.5.46 | 0.5.50 | Patch |
| `@backstage/plugin-permission-backend-module-allow-all-policy` | 0.1.19 | 0.2.1 | Minor ⚠️ |
| `@backstage/plugin-permission-common` | 0.8.0 | 0.8.1 | Patch |
| `@backstage/plugin-permission-node` | 0.8.0 | 0.8.4 | Patch |
| `@backstage/plugin-permission-react` | 0.4.24 | 0.4.27 | Patch |
| `@backstage/plugin-proxy-backend` | 0.5.3 | 0.5.7 | Patch |
| `@backstage/plugin-scaffolder` | 1.23.0 | 1.26.2 | Minor |
| `@backstage/plugin-scaffolder-backend` | 1.23.0 | 1.26.3 | Minor |
| `@backstage/plugin-scaffolder-backend-module-azure` | 0.1.14 | 0.2.2 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-bitbucket` | 0.2.12 | 0.3.2 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` | 0.1.12 | 0.2.2 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-bitbucket-server` | 0.1.12 | 0.2.2 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` | 0.2.23 | 0.3.2 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-cookiecutter` | 0.2.46 | 0.3.3 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-gcp` | 0.1.0 | 0.2.2 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-gerrit` | 0.1.14 | 0.2.2 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-gitea` | 0.1.12 | 0.2.2 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-github` | 0.4.0 | 0.5.2 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-gitlab` | 0.4.4 | 0.6.1 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-notifications` | 0.0.5 | 0.1.3 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-rails` | 0.4.39 | 0.5.2 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-sentry` | 0.1.30 | 0.2.2 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-yeoman` | 0.3.6 | 0.4.3 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-common` | 1.5.4 | 1.5.6 | Patch |
| `@backstage/plugin-scaffolder-node` | 0.4.8 | 0.5.1 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-node-test-utils` | 0.1.9 | 0.1.15 | Patch |
| `@backstage/plugin-scaffolder-react` | 1.10.0 | 1.13.2 | Minor |
| `@backstage/plugin-search` | 1.4.14 | 1.4.18 | Patch |
| `@backstage/plugin-search-backend` | 1.5.14 | 1.6.1 | Minor |
| `@backstage/plugin-search-backend-module-catalog` | 0.1.28 | 0.2.4 | Minor ⚠️ |
| `@backstage/plugin-search-backend-module-elasticsearch` | 1.5.3 | 1.6.1 | Minor |
| `@backstage/plugin-search-backend-module-explore` | 0.1.28 | 0.2.4 | Minor ⚠️ |
| `@backstage/plugin-search-backend-module-pg` | 0.5.32 | 0.5.37 | Patch |
| `@backstage/plugin-search-backend-module-stack-overflow-collator` | 0.1.15 | 0.3.2 | Minor ⚠️ |
| `@backstage/plugin-search-backend-module-techdocs` | 0.1.27 | 0.3.1 | Minor ⚠️ |
| `@backstage/plugin-search-backend-node` | 1.2.27 | 1.3.4 | Minor |
| `@backstage/plugin-search-common` | 1.2.13 | 1.2.14 | Patch |
| `@backstage/plugin-search-react` | 1.7.13 | 1.8.1 | Minor |
| `@backstage/plugin-signals` | 0.0.8 | 0.0.11 | Patch ⚠️ |
| `@backstage/plugin-signals-backend` | 0.1.8 | 0.2.2 | Minor ⚠️ |
| `@backstage/plugin-signals-node` | 0.1.8 | 0.1.13 | Patch |
| `@backstage/plugin-signals-react` | 0.0.4 | 0.0.6 | Patch ⚠️ |
| `@backstage/plugin-techdocs` | 1.10.7 | 1.11.0 | Minor |
| `@backstage/plugin-techdocs-addons-test-utils` | 1.0.36 | 1.0.40 | Patch |
| `@backstage/plugin-techdocs-backend` | 1.10.9 | 1.11.1 | Minor |
| `@backstage/plugin-techdocs-module-addons-contrib` | 1.1.12 | 1.1.16 | Patch |
| `@backstage/plugin-techdocs-node` | 1.12.8 | 1.12.12 | Patch |
| `@backstage/plugin-techdocs-react` | 1.2.6 | 1.2.9 | Patch |
| `@backstage/plugin-user-settings` | 0.8.10 | 0.8.14 | Patch |
| `@backstage/plugin-user-settings-backend` | 0.2.21 | 0.2.26 | Patch |
| `@backstage/repo-tools` | 0.9.4 | 0.10.0 | Minor ⚠️ |
| `@backstage/test-utils` | 1.5.9 | 1.7.0 | Minor |
| `@backstage/theme` | 0.5.6 | 0.6.0 | Minor ⚠️ |
| `@backstage/version-bridge` | 1.0.8 | 1.0.10 | Patch |
| `@techdocs/cli` | 1.8.16 | 1.8.21 | Patch |
