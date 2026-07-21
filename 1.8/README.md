# RHDH Release 1.8 (Backstage 1.42.5)

## Compared to 1.39.1 (RHDH 1.7)

3 added, 1 removed, 174 upgraded, 10 unchanged.

⚠️ Need extra attention: 2 major, 19 0.x minor, 4 0.0.x patch.

### ⚠️ Major version bumps

| Package | 1.39.1 | 1.42.5 |
| --- | --- | --- |
| `@backstage/plugin-catalog-backend` | **2.0.0** | **3.0.1** |
| `@backstage/plugin-scaffolder-backend` | **1.33.0** | **2.2.0** |

### 🆕 Added packages

| Package | Version |
| --- | --- |
| `@backstage/plugin-events-backend-module-kafka` | 0.1.2 |
| `@backstage/plugin-mcp-actions-backend` | 0.1.2 |
| `@backstage/ui` | 0.7.0 |

### ❌ Removed packages

| Package | Last version |
| --- | --- |
| `@backstage/canon` | 0.4.0 |

### Version bumps

| Package | 1.39.1 | 1.42.5 | Type |
| --- | --- | --- | --- |
| `@backstage/app-defaults` | 1.6.2 | 1.6.5 | Patch |
| `@backstage/backend-app-api` | 1.2.3 | 1.2.6 | Patch |
| `@backstage/backend-defaults` | 0.10.0 | 0.12.0 | Minor ⚠️ |
| `@backstage/backend-dynamic-feature-service` | 0.7.0 | 0.7.3 | Patch |
| `@backstage/backend-openapi-utils` | 0.5.3 | 0.6.0 | Minor ⚠️ |
| `@backstage/backend-plugin-api` | 1.3.1 | 1.4.2 | Minor |
| `@backstage/backend-test-utils` | 1.5.0 | 1.8.0 | Minor |
| `@backstage/catalog-client` | 1.10.0 | 1.11.0 | Minor |
| `@backstage/catalog-model` | 1.7.4 | 1.7.5 | Patch |
| `@backstage/cli` | 0.32.1 | 0.34.1 | Minor ⚠️ |
| `@backstage/cli-node` | 0.2.13 | 0.2.14 | Patch |
| `@backstage/config` | 1.3.2 | 1.3.3 | Patch |
| `@backstage/config-loader` | 1.10.1 | 1.10.2 | Patch |
| `@backstage/core-app-api` | 1.17.0 | 1.18.0 | Minor |
| `@backstage/core-compat-api` | 0.4.2 | 0.5.1 | Minor ⚠️ |
| `@backstage/core-components` | 0.17.2 | 0.17.5 | Patch |
| `@backstage/core-plugin-api` | 1.10.7 | 1.10.9 | Patch |
| `@backstage/create-app` | 0.6.2 | 0.7.3 | Minor ⚠️ |
| `@backstage/dev-utils` | 1.1.10 | 1.1.13 | Patch |
| `@backstage/eslint-plugin` | 0.1.10 | 0.1.11 | Patch |
| `@backstage/frontend-app-api` | 0.11.2 | 0.12.0 | Minor ⚠️ |
| `@backstage/frontend-defaults` | 0.2.2 | 0.3.0 | Minor ⚠️ |
| `@backstage/frontend-dynamic-feature-loader` | 0.1.1 | 0.1.4 | Patch |
| `@backstage/frontend-plugin-api` | 0.10.2 | 0.11.0 | Minor ⚠️ |
| `@backstage/frontend-test-utils` | 0.3.2 | 0.3.5 | Patch |
| `@backstage/integration` | 1.17.0 | 1.17.1 | Patch |
| `@backstage/integration-aws-node` | 0.1.16 | 0.1.17 | Patch |
| `@backstage/integration-react` | 1.2.7 | 1.2.9 | Patch |
| `@backstage/plugin-api-docs` | 0.12.7 | 0.12.10 | Patch |
| `@backstage/plugin-app` | 0.1.9 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-app-backend` | 0.5.2 | 0.5.5 | Patch |
| `@backstage/plugin-app-node` | 0.1.33 | 0.1.36 | Patch |
| `@backstage/plugin-app-visualizer` | 0.1.19 | 0.1.22 | Patch |
| `@backstage/plugin-auth-backend` | 0.25.0 | 0.25.3 | Patch |
| `@backstage/plugin-auth-backend-module-atlassian-provider` | 0.4.3 | 0.4.6 | Patch |
| `@backstage/plugin-auth-backend-module-auth0-provider` | 0.2.3 | 0.2.6 | Patch |
| `@backstage/plugin-auth-backend-module-aws-alb-provider` | 0.4.3 | 0.4.6 | Patch |
| `@backstage/plugin-auth-backend-module-azure-easyauth-provider` | 0.2.8 | 0.2.11 | Patch |
| `@backstage/plugin-auth-backend-module-bitbucket-provider` | 0.3.3 | 0.3.6 | Patch |
| `@backstage/plugin-auth-backend-module-bitbucket-server-provider` | 0.2.3 | 0.2.6 | Patch |
| `@backstage/plugin-auth-backend-module-cloudflare-access-provider` | 0.4.3 | 0.4.6 | Patch |
| `@backstage/plugin-auth-backend-module-gcp-iap-provider` | 0.4.3 | 0.4.6 | Patch |
| `@backstage/plugin-auth-backend-module-github-provider` | 0.3.3 | 0.3.6 | Patch |
| `@backstage/plugin-auth-backend-module-gitlab-provider` | 0.3.3 | 0.3.6 | Patch |
| `@backstage/plugin-auth-backend-module-google-provider` | 0.3.3 | 0.3.6 | Patch |
| `@backstage/plugin-auth-backend-module-guest-provider` | 0.2.8 | 0.2.11 | Patch |
| `@backstage/plugin-auth-backend-module-microsoft-provider` | 0.3.3 | 0.3.6 | Patch |
| `@backstage/plugin-auth-backend-module-oauth2-provider` | 0.4.3 | 0.4.6 | Patch |
| `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` | 0.2.8 | 0.2.11 | Patch |
| `@backstage/plugin-auth-backend-module-oidc-provider` | 0.4.3 | 0.4.6 | Patch |
| `@backstage/plugin-auth-backend-module-okta-provider` | 0.2.3 | 0.2.6 | Patch |
| `@backstage/plugin-auth-backend-module-onelogin-provider` | 0.3.3 | 0.3.6 | Patch |
| `@backstage/plugin-auth-backend-module-pinniped-provider` | 0.3.3 | 0.3.6 | Patch |
| `@backstage/plugin-auth-backend-module-vmware-cloud-provider` | 0.5.3 | 0.5.6 | Patch |
| `@backstage/plugin-auth-node` | 0.6.3 | 0.6.6 | Patch |
| `@backstage/plugin-auth-react` | 0.1.15 | 0.1.18 | Patch |
| `@backstage/plugin-bitbucket-cloud-common` | 0.3.0 | 0.3.1 | Patch |
| `@backstage/plugin-catalog` | 1.30.0 | 1.31.2 | Minor |
| `@backstage/plugin-catalog-backend` | **2.0.0** | **3.0.1** | Major ⚠️ |
| `@backstage/plugin-catalog-backend-module-aws` | 0.4.11 | 0.4.14 | Patch |
| `@backstage/plugin-catalog-backend-module-azure` | 0.3.5 | 0.3.8 | Patch |
| `@backstage/plugin-catalog-backend-module-backstage-openapi` | 0.5.2 | 0.5.5 | Patch |
| `@backstage/plugin-catalog-backend-module-bitbucket-cloud` | 0.4.8 | 0.5.2 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-bitbucket-server` | 0.4.1 | 0.5.2 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-gcp` | 0.3.8 | 0.3.11 | Patch |
| `@backstage/plugin-catalog-backend-module-gerrit` | 0.3.2 | 0.3.5 | Patch |
| `@backstage/plugin-catalog-backend-module-gitea` | 0.1.0 | 0.1.3 | Patch |
| `@backstage/plugin-catalog-backend-module-github` | 0.9.0 | 0.10.2 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-github-org` | 0.3.10 | 0.3.13 | Patch |
| `@backstage/plugin-catalog-backend-module-gitlab` | 0.6.6 | 0.7.2 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-gitlab-org` | 0.2.9 | 0.2.12 | Patch |
| `@backstage/plugin-catalog-backend-module-incremental-ingestion` | 0.7.0 | 0.7.3 | Patch |
| `@backstage/plugin-catalog-backend-module-ldap` | 0.11.5 | 0.11.8 | Patch |
| `@backstage/plugin-catalog-backend-module-logs` | 0.1.10 | 0.1.13 | Patch |
| `@backstage/plugin-catalog-backend-module-msgraph` | 0.7.0 | 0.7.3 | Patch |
| `@backstage/plugin-catalog-backend-module-openapi` | 0.2.10 | 0.2.13 | Patch |
| `@backstage/plugin-catalog-backend-module-puppetdb` | 0.2.10 | 0.2.13 | Patch |
| `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` | 0.2.8 | 0.2.11 | Patch |
| `@backstage/plugin-catalog-backend-module-unprocessed` | 0.6.0 | 0.6.3 | Patch |
| `@backstage/plugin-catalog-common` | 1.1.4 | 1.1.5 | Patch |
| `@backstage/plugin-catalog-graph` | 0.4.19 | 0.4.22 | Patch |
| `@backstage/plugin-catalog-import` | 0.13.0 | 0.13.4 | Patch |
| `@backstage/plugin-catalog-node` | 1.17.0 | 1.18.0 | Minor |
| `@backstage/plugin-catalog-react` | 1.18.0 | 1.20.1 | Minor |
| `@backstage/plugin-catalog-unprocessed-entities` | 0.2.17 | 0.2.20 | Patch |
| `@backstage/plugin-catalog-unprocessed-entities-common` | 0.0.8 | 0.0.9 | Patch ⚠️ |
| `@backstage/plugin-config-schema` | 0.1.68 | 0.1.71 | Patch |
| `@backstage/plugin-devtools` | 0.1.27 | 0.1.30 | Patch |
| `@backstage/plugin-devtools-backend` | 0.5.5 | 0.5.8 | Patch |
| `@backstage/plugin-devtools-common` | 0.1.16 | 0.1.17 | Patch |
| `@backstage/plugin-events-backend` | 0.5.2 | 0.5.5 | Patch |
| `@backstage/plugin-events-backend-module-aws-sqs` | 0.4.11 | 0.4.14 | Patch |
| `@backstage/plugin-events-backend-module-azure` | 0.2.20 | 0.2.23 | Patch |
| `@backstage/plugin-events-backend-module-bitbucket-cloud` | 0.2.20 | 0.2.23 | Patch |
| `@backstage/plugin-events-backend-module-bitbucket-server` | 0.1.1 | 0.1.4 | Patch |
| `@backstage/plugin-events-backend-module-gerrit` | 0.2.20 | 0.2.23 | Patch |
| `@backstage/plugin-events-backend-module-github` | 0.4.0 | 0.4.3 | Patch |
| `@backstage/plugin-events-backend-module-gitlab` | 0.3.1 | 0.3.4 | Patch |
| `@backstage/plugin-events-backend-module-google-pubsub` | 0.1.0 | 0.1.3 | Patch |
| `@backstage/plugin-events-backend-test-utils` | 0.1.44 | 0.1.47 | Patch |
| `@backstage/plugin-events-node` | 0.4.11 | 0.4.14 | Patch |
| `@backstage/plugin-gateway-backend` | 1.0.1 | 1.0.4 | Patch |
| `@backstage/plugin-home` | 0.8.8 | 0.8.11 | Patch |
| `@backstage/plugin-home-react` | 0.1.26 | 0.1.29 | Patch |
| `@backstage/plugin-kubernetes` | 0.12.7 | 0.12.10 | Patch |
| `@backstage/plugin-kubernetes-backend` | 0.19.6 | 0.20.1 | Minor ⚠️ |
| `@backstage/plugin-kubernetes-cluster` | 0.0.25 | 0.0.28 | Patch ⚠️ |
| `@backstage/plugin-kubernetes-common` | 0.9.5 | 0.9.6 | Patch |
| `@backstage/plugin-kubernetes-node` | 0.3.0 | 0.3.3 | Patch |
| `@backstage/plugin-kubernetes-react` | 0.5.7 | 0.5.10 | Patch |
| `@backstage/plugin-notifications` | 0.5.5 | 0.5.8 | Patch |
| `@backstage/plugin-notifications-backend` | 0.5.6 | 0.5.9 | Patch |
| `@backstage/plugin-notifications-backend-module-email` | 0.3.9 | 0.3.12 | Patch |
| `@backstage/plugin-notifications-backend-module-slack` | 0.1.1 | 0.1.4 | Patch |
| `@backstage/plugin-notifications-common` | 0.0.8 | 0.1.0 | Minor ⚠️ |
| `@backstage/plugin-notifications-node` | 0.2.15 | 0.2.18 | Patch |
| `@backstage/plugin-org` | 0.6.39 | 0.6.43 | Patch |
| `@backstage/plugin-org-react` | 0.1.38 | 0.1.41 | Patch |
| `@backstage/plugin-permission-backend` | 0.7.0 | 0.7.3 | Patch |
| `@backstage/plugin-permission-backend-module-allow-all-policy` | 0.2.8 | 0.2.11 | Patch |
| `@backstage/plugin-permission-common` | 0.9.0 | 0.9.1 | Patch |
| `@backstage/plugin-permission-node` | 0.10.0 | 0.10.3 | Patch |
| `@backstage/plugin-permission-react` | 0.4.34 | 0.4.36 | Patch |
| `@backstage/plugin-proxy-backend` | 0.6.2 | 0.6.5 | Patch |
| `@backstage/plugin-proxy-node` | 0.1.4 | 0.1.7 | Patch |
| `@backstage/plugin-scaffolder` | 1.31.0 | 1.34.0 | Minor |
| `@backstage/plugin-scaffolder-backend` | **1.33.0** | **2.2.0** | Major ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-azure` | 0.2.9 | 0.2.12 | Patch |
| `@backstage/plugin-scaffolder-backend-module-bitbucket` | 0.3.10 | 0.3.13 | Patch |
| `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` | 0.2.9 | 0.2.12 | Patch |
| `@backstage/plugin-scaffolder-backend-module-bitbucket-server` | 0.2.9 | 0.2.12 | Patch |
| `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` | 0.3.9 | 0.3.12 | Patch |
| `@backstage/plugin-scaffolder-backend-module-cookiecutter` | 0.3.10 | 0.3.14 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gcp` | 0.2.9 | 0.2.12 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gerrit` | 0.2.9 | 0.2.12 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gitea` | 0.2.9 | 0.2.12 | Patch |
| `@backstage/plugin-scaffolder-backend-module-github` | 0.7.1 | 0.8.2 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-gitlab` | 0.9.1 | 0.9.4 | Patch |
| `@backstage/plugin-scaffolder-backend-module-notifications` | 0.1.10 | 0.1.13 | Patch |
| `@backstage/plugin-scaffolder-backend-module-rails` | 0.5.9 | 0.5.12 | Patch |
| `@backstage/plugin-scaffolder-backend-module-sentry` | 0.2.9 | 0.2.12 | Patch |
| `@backstage/plugin-scaffolder-backend-module-yeoman` | 0.4.10 | 0.4.13 | Patch |
| `@backstage/plugin-scaffolder-common` | 1.5.11 | 1.7.0 | Minor |
| `@backstage/plugin-scaffolder-node` | 0.8.2 | 0.11.0 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-node-test-utils` | 0.2.2 | 0.3.2 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-react` | 1.16.0 | 1.19.0 | Minor |
| `@backstage/plugin-search` | 1.4.26 | 1.4.29 | Patch |
| `@backstage/plugin-search-backend` | 2.0.2 | 2.0.5 | Patch |
| `@backstage/plugin-search-backend-module-catalog` | 0.3.4 | 0.3.7 | Patch |
| `@backstage/plugin-search-backend-module-elasticsearch` | 1.7.2 | 1.7.5 | Patch |
| `@backstage/plugin-search-backend-module-explore` | 0.3.2 | 0.3.6 | Patch |
| `@backstage/plugin-search-backend-module-pg` | 0.5.44 | 0.5.47 | Patch |
| `@backstage/plugin-search-backend-module-stack-overflow-collator` | 0.3.9 | 0.3.12 | Patch |
| `@backstage/plugin-search-backend-module-techdocs` | 0.4.2 | 0.4.5 | Patch |
| `@backstage/plugin-search-backend-node` | 1.3.11 | 1.3.14 | Patch |
| `@backstage/plugin-search-common` | 1.2.18 | 1.2.19 | Patch |
| `@backstage/plugin-search-react` | 1.9.0 | 1.9.3 | Patch |
| `@backstage/plugin-signals` | 0.0.19 | 0.0.22 | Patch ⚠️ |
| `@backstage/plugin-signals-backend` | 0.3.4 | 0.3.7 | Patch |
| `@backstage/plugin-signals-node` | 0.1.20 | 0.1.23 | Patch |
| `@backstage/plugin-signals-react` | 0.0.13 | 0.0.15 | Patch ⚠️ |
| `@backstage/plugin-techdocs` | 1.12.6 | 1.14.1 | Minor |
| `@backstage/plugin-techdocs-addons-test-utils` | 1.0.48 | 1.0.52 | Patch |
| `@backstage/plugin-techdocs-backend` | 2.0.2 | 2.0.5 | Patch |
| `@backstage/plugin-techdocs-common` | 0.1.0 | 0.1.1 | Patch |
| `@backstage/plugin-techdocs-module-addons-contrib` | 1.1.24 | 1.1.27 | Patch |
| `@backstage/plugin-techdocs-node` | 1.13.3 | 1.13.6 | Patch |
| `@backstage/plugin-techdocs-react` | 1.2.17 | 1.3.2 | Minor |
| `@backstage/plugin-user-settings` | 0.8.22 | 0.8.25 | Patch |
| `@backstage/plugin-user-settings-backend` | 0.3.2 | 0.3.5 | Patch |
| `@backstage/repo-tools` | 0.13.4 | 0.15.1 | Minor ⚠️ |
| `@backstage/test-utils` | 1.7.8 | 1.7.11 | Patch |
| `@backstage/theme` | 0.6.6 | 0.6.8 | Patch |
| `@techdocs/cli` | 1.9.3 | 1.9.7 | Patch |
