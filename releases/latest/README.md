# RHDH Release latest (Backstage 1.53.0)

## Compared to 1.52.1 (RHDH milestone1)

1 added, 0 removed, 185 upgraded, 25 unchanged.

⚠️ Need extra attention: 8 0.x minor, 3 0.0.x patch.

### 🆕 Added packages

| Package | Version |
| --- | --- |
| `@backstage/plugin-app-module-user-settings` | 0.1.0 |

### Version bumps

| Package | 1.52.1 | 1.53.0 | Type |
| --- | --- | --- | --- |
| `@backstage/app-defaults` | 1.7.9 | 1.7.10 | Patch |
| `@backstage/backend-app-api` | 1.7.1 | 1.7.2 | Patch |
| `@backstage/backend-defaults` | 0.17.4 | 0.17.5 | Patch |
| `@backstage/backend-dynamic-feature-service` | 0.8.3 | 0.8.4 | Patch |
| `@backstage/backend-openapi-utils` | 0.6.10 | 0.7.0 | Minor ⚠️ |
| `@backstage/backend-plugin-api` | 1.9.2 | 1.9.3 | Patch |
| `@backstage/backend-test-utils` | 1.11.4 | 1.11.5 | Patch |
| `@backstage/catalog-client` | 1.16.0 | 1.16.1 | Patch |
| `@backstage/cli` | 0.36.3 | 0.36.4 | Patch |
| `@backstage/cli-common` | 0.2.2 | 0.3.0 | Minor ⚠️ |
| `@backstage/cli-defaults` | 0.1.3 | 0.1.4 | Patch |
| `@backstage/cli-module-actions` | 0.1.2 | 0.1.3 | Patch |
| `@backstage/cli-module-auth` | 0.1.3 | 0.1.4 | Patch |
| `@backstage/cli-module-build` | 0.1.4 | 0.1.5 | Patch |
| `@backstage/cli-module-config` | 0.1.3 | 0.1.4 | Patch |
| `@backstage/cli-module-github` | 0.1.3 | 0.1.4 | Patch |
| `@backstage/cli-module-info` | 0.1.3 | 0.1.4 | Patch |
| `@backstage/cli-module-lint` | 0.1.3 | 0.1.4 | Patch |
| `@backstage/cli-module-maintenance` | 0.1.3 | 0.1.4 | Patch |
| `@backstage/cli-module-migrate` | 0.1.3 | 0.2.0 | Minor ⚠️ |
| `@backstage/cli-module-new` | 0.1.4 | 0.1.5 | Patch |
| `@backstage/cli-module-test-jest` | 0.1.3 | 0.1.4 | Patch |
| `@backstage/cli-module-translations` | 0.1.3 | 0.1.4 | Patch |
| `@backstage/cli-node` | 0.3.3 | 0.3.4 | Patch |
| `@backstage/codemods` | 0.1.57 | 0.1.58 | Patch |
| `@backstage/config-loader` | 1.10.12 | 1.11.0 | Minor |
| `@backstage/connections` | 0.1.0 | 0.2.0 | Minor ⚠️ |
| `@backstage/core-app-api` | 1.20.2 | 1.20.3 | Patch |
| `@backstage/core-compat-api` | 0.5.12 | 0.5.13 | Patch |
| `@backstage/core-components` | 0.18.11 | 0.18.12 | Patch |
| `@backstage/core-plugin-api` | 1.12.7 | 1.12.8 | Patch |
| `@backstage/create-app` | 0.8.4 | 0.9.0 | Minor ⚠️ |
| `@backstage/dev-utils` | 1.1.24 | 1.1.25 | Patch |
| `@backstage/filter-predicates` | 0.1.3 | 0.1.4 | Patch |
| `@backstage/frontend-app-api` | 0.16.5 | 0.16.6 | Patch |
| `@backstage/frontend-defaults` | 0.5.3 | 0.5.4 | Patch |
| `@backstage/frontend-dev-utils` | 0.1.3 | 0.1.4 | Patch |
| `@backstage/frontend-dynamic-feature-loader` | 0.1.13 | 0.1.14 | Patch |
| `@backstage/frontend-plugin-api` | 0.17.2 | 0.17.3 | Patch |
| `@backstage/frontend-test-utils` | 0.6.1 | 0.6.2 | Patch |
| `@backstage/integration-react` | 1.2.19 | 1.2.20 | Patch |
| `@backstage/plugin-api-docs` | 0.14.2 | 0.14.3 | Patch |
| `@backstage/plugin-app` | 0.5.0 | 0.5.1 | Patch |
| `@backstage/plugin-app-backend` | 0.5.15 | 0.5.16 | Patch |
| `@backstage/plugin-app-node` | 0.1.46 | 0.1.47 | Patch |
| `@backstage/plugin-app-react` | 0.2.4 | 0.2.5 | Patch |
| `@backstage/plugin-app-visualizer` | 0.2.5 | 0.2.6 | Patch |
| `@backstage/plugin-auth` | 0.1.9 | 0.1.10 | Patch |
| `@backstage/plugin-auth-backend` | 0.29.1 | 0.29.2 | Patch |
| `@backstage/plugin-auth-backend-module-atlassian-provider` | 0.4.16 | 0.4.17 | Patch |
| `@backstage/plugin-auth-backend-module-auth0-provider` | 0.4.2 | 0.4.3 | Patch |
| `@backstage/plugin-auth-backend-module-aws-alb-provider` | 0.4.17 | 0.4.18 | Patch |
| `@backstage/plugin-auth-backend-module-azure-easyauth-provider` | 0.2.21 | 0.2.22 | Patch |
| `@backstage/plugin-auth-backend-module-bitbucket-provider` | 0.3.16 | 0.3.17 | Patch |
| `@backstage/plugin-auth-backend-module-bitbucket-server-provider` | 0.2.16 | 0.2.17 | Patch |
| `@backstage/plugin-auth-backend-module-cloudflare-access-provider` | 0.4.16 | 0.4.17 | Patch |
| `@backstage/plugin-auth-backend-module-gcp-iap-provider` | 0.4.16 | 0.4.17 | Patch |
| `@backstage/plugin-auth-backend-module-github-provider` | 0.5.4 | 0.5.5 | Patch |
| `@backstage/plugin-auth-backend-module-gitlab-provider` | 0.4.4 | 0.4.5 | Patch |
| `@backstage/plugin-auth-backend-module-google-provider` | 0.3.16 | 0.3.17 | Patch |
| `@backstage/plugin-auth-backend-module-guest-provider` | 0.2.20 | 0.2.21 | Patch |
| `@backstage/plugin-auth-backend-module-microsoft-provider` | 0.3.16 | 0.3.17 | Patch |
| `@backstage/plugin-auth-backend-module-oauth2-provider` | 0.4.16 | 0.4.17 | Patch |
| `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` | 0.3.0 | 0.3.1 | Patch |
| `@backstage/plugin-auth-backend-module-oidc-provider` | 0.4.17 | 0.4.18 | Patch |
| `@backstage/plugin-auth-backend-module-okta-provider` | 0.2.16 | 0.2.17 | Patch |
| `@backstage/plugin-auth-backend-module-onelogin-provider` | 0.3.16 | 0.3.17 | Patch |
| `@backstage/plugin-auth-backend-module-openshift-provider` | 0.1.8 | 0.1.9 | Patch |
| `@backstage/plugin-auth-backend-module-pinniped-provider` | 0.3.15 | 0.3.16 | Patch |
| `@backstage/plugin-auth-backend-module-vmware-cloud-provider` | 0.5.15 | 0.5.16 | Patch |
| `@backstage/plugin-auth-node` | 0.7.2 | 0.7.3 | Patch |
| `@backstage/plugin-auth-react` | 0.1.28 | 0.1.29 | Patch |
| `@backstage/plugin-catalog` | 2.0.6 | 2.0.7 | Patch |
| `@backstage/plugin-catalog-backend` | 3.8.0 | 3.8.1 | Patch |
| `@backstage/plugin-catalog-backend-module-ai-model` | 0.1.1 | 0.1.2 | Patch |
| `@backstage/plugin-catalog-backend-module-aws` | 0.4.24 | 0.4.25 | Patch |
| `@backstage/plugin-catalog-backend-module-azure` | 0.3.18 | 0.3.19 | Patch |
| `@backstage/plugin-catalog-backend-module-backstage-openapi` | 0.5.15 | 0.5.16 | Patch |
| `@backstage/plugin-catalog-backend-module-bitbucket-cloud` | 0.5.12 | 0.5.13 | Patch |
| `@backstage/plugin-catalog-backend-module-bitbucket-server` | 0.5.12 | 0.5.13 | Patch |
| `@backstage/plugin-catalog-backend-module-gcp` | 0.3.20 | 0.3.21 | Patch |
| `@backstage/plugin-catalog-backend-module-gerrit` | 0.3.15 | 0.3.16 | Patch |
| `@backstage/plugin-catalog-backend-module-gitea` | 0.1.13 | 0.1.14 | Patch |
| `@backstage/plugin-catalog-backend-module-github` | 0.13.3 | 0.13.4 | Patch |
| `@backstage/plugin-catalog-backend-module-github-org` | 0.3.23 | 0.3.24 | Patch |
| `@backstage/plugin-catalog-backend-module-gitlab` | 0.8.4 | 0.8.5 | Patch |
| `@backstage/plugin-catalog-backend-module-gitlab-org` | 0.2.22 | 0.2.23 | Patch |
| `@backstage/plugin-catalog-backend-module-incremental-ingestion` | 0.7.13 | 0.7.14 | Patch |
| `@backstage/plugin-catalog-backend-module-ldap` | 0.12.6 | 0.12.7 | Patch |
| `@backstage/plugin-catalog-backend-module-logs` | 0.1.23 | 0.1.24 | Patch |
| `@backstage/plugin-catalog-backend-module-msgraph` | 0.10.3 | 0.10.4 | Patch |
| `@backstage/plugin-catalog-backend-module-msgraph-incremental` | 0.1.1 | 0.1.2 | Patch |
| `@backstage/plugin-catalog-backend-module-openapi` | 0.2.23 | 0.2.24 | Patch |
| `@backstage/plugin-catalog-backend-module-puppetdb` | 0.2.23 | 0.2.24 | Patch |
| `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` | 0.2.21 | 0.2.22 | Patch |
| `@backstage/plugin-catalog-backend-module-unprocessed` | 0.6.13 | 0.6.14 | Patch |
| `@backstage/plugin-catalog-graph` | 0.6.5 | 0.6.6 | Patch |
| `@backstage/plugin-catalog-import` | 0.13.14 | 0.13.15 | Patch |
| `@backstage/plugin-catalog-node` | 2.2.2 | 2.2.3 | Patch |
| `@backstage/plugin-catalog-react` | 3.1.0 | 3.2.0 | Minor |
| `@backstage/plugin-catalog-unprocessed-entities` | 0.2.32 | 0.2.33 | Patch |
| `@backstage/plugin-config-schema` | 0.1.81 | 0.1.82 | Patch |
| `@backstage/plugin-devtools` | 0.1.40 | 0.1.41 | Patch |
| `@backstage/plugin-devtools-backend` | 0.5.18 | 0.5.19 | Patch |
| `@backstage/plugin-devtools-react` | 0.2.3 | 0.2.4 | Patch |
| `@backstage/plugin-events-backend` | 0.6.3 | 0.6.4 | Patch |
| `@backstage/plugin-events-backend-module-aws-sqs` | 0.4.23 | 0.4.24 | Patch |
| `@backstage/plugin-events-backend-module-azure` | 0.2.32 | 0.2.33 | Patch |
| `@backstage/plugin-events-backend-module-bitbucket-cloud` | 0.2.32 | 0.2.33 | Patch |
| `@backstage/plugin-events-backend-module-bitbucket-server` | 0.1.13 | 0.1.14 | Patch |
| `@backstage/plugin-events-backend-module-gerrit` | 0.2.32 | 0.2.33 | Patch |
| `@backstage/plugin-events-backend-module-github` | 0.4.13 | 0.4.14 | Patch |
| `@backstage/plugin-events-backend-module-gitlab` | 0.3.13 | 0.3.14 | Patch |
| `@backstage/plugin-events-backend-module-google-pubsub` | 0.2.4 | 0.2.5 | Patch |
| `@backstage/plugin-events-backend-module-kafka` | 0.3.5 | 0.3.6 | Patch |
| `@backstage/plugin-events-backend-test-utils` | 0.1.56 | 0.1.57 | Patch |
| `@backstage/plugin-events-node` | 0.4.23 | 0.4.24 | Patch |
| `@backstage/plugin-gateway-backend` | 1.1.6 | 1.1.7 | Patch |
| `@backstage/plugin-home` | 0.9.7 | 0.9.8 | Patch |
| `@backstage/plugin-home-react` | 0.1.39 | 0.1.40 | Patch |
| `@backstage/plugin-kubernetes` | 0.12.20 | 0.12.21 | Patch |
| `@backstage/plugin-kubernetes-backend` | 0.21.5 | 0.21.6 | Patch |
| `@backstage/plugin-kubernetes-cluster` | 0.0.38 | 0.0.39 | Patch ⚠️ |
| `@backstage/plugin-kubernetes-node` | 0.4.5 | 0.4.6 | Patch |
| `@backstage/plugin-kubernetes-react` | 0.5.21 | 0.5.22 | Patch |
| `@backstage/plugin-mcp-actions-backend` | 0.1.14 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-mui-to-bui` | 0.2.8 | 0.2.9 | Patch |
| `@backstage/plugin-notifications` | 0.5.18 | 0.5.19 | Patch |
| `@backstage/plugin-notifications-backend` | 0.6.6 | 0.6.7 | Patch |
| `@backstage/plugin-notifications-backend-module-email` | 0.3.22 | 0.3.23 | Patch |
| `@backstage/plugin-notifications-backend-module-slack` | 0.4.3 | 0.4.4 | Patch |
| `@backstage/plugin-notifications-node` | 0.2.27 | 0.2.28 | Patch |
| `@backstage/plugin-org` | 0.7.5 | 0.7.6 | Patch |
| `@backstage/plugin-org-react` | 0.1.51 | 0.1.52 | Patch |
| `@backstage/plugin-permission-backend` | 0.7.13 | 0.7.14 | Patch |
| `@backstage/plugin-permission-backend-module-allow-all-policy` | 0.2.20 | 0.2.21 | Patch |
| `@backstage/plugin-permission-node` | 0.11.1 | 0.11.2 | Patch |
| `@backstage/plugin-permission-react` | 0.5.2 | 0.5.3 | Patch |
| `@backstage/plugin-proxy-backend` | 0.6.14 | 0.6.15 | Patch |
| `@backstage/plugin-proxy-node` | 0.1.16 | 0.1.17 | Patch |
| `@backstage/plugin-scaffolder` | 1.38.0 | 1.38.1 | Patch |
| `@backstage/plugin-scaffolder-backend` | 4.0.1 | 4.0.2 | Patch |
| `@backstage/plugin-scaffolder-backend-module-azure` | 0.2.22 | 0.2.23 | Patch |
| `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` | 0.3.7 | 0.3.8 | Patch |
| `@backstage/plugin-scaffolder-backend-module-bitbucket-server` | 0.2.22 | 0.2.23 | Patch |
| `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` | 0.3.22 | 0.3.23 | Patch |
| `@backstage/plugin-scaffolder-backend-module-cookiecutter` | 0.3.24 | 0.3.25 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gcp` | 0.2.22 | 0.2.23 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gerrit` | 0.2.22 | 0.2.23 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gitea` | 0.2.22 | 0.2.23 | Patch |
| `@backstage/plugin-scaffolder-backend-module-github` | 0.9.10 | 0.9.11 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gitlab` | 0.11.7 | 0.11.8 | Patch |
| `@backstage/plugin-scaffolder-backend-module-notifications` | 0.1.23 | 0.1.24 | Patch |
| `@backstage/plugin-scaffolder-backend-module-rails` | 0.5.22 | 0.5.23 | Patch |
| `@backstage/plugin-scaffolder-backend-module-sentry` | 0.3.5 | 0.3.6 | Patch |
| `@backstage/plugin-scaffolder-backend-module-yeoman` | 0.4.23 | 0.4.24 | Patch |
| `@backstage/plugin-scaffolder-node` | 0.13.4 | 0.13.5 | Patch |
| `@backstage/plugin-scaffolder-node-test-utils` | 0.3.12 | 0.3.13 | Patch |
| `@backstage/plugin-scaffolder-react` | 2.0.1 | 2.0.2 | Patch |
| `@backstage/plugin-search` | 1.7.5 | 1.7.6 | Patch |
| `@backstage/plugin-search-backend` | 2.1.3 | 2.1.4 | Patch |
| `@backstage/plugin-search-backend-module-catalog` | 0.3.16 | 0.3.17 | Patch |
| `@backstage/plugin-search-backend-module-elasticsearch` | 1.8.4 | 1.8.5 | Patch |
| `@backstage/plugin-search-backend-module-explore` | 0.3.15 | 0.3.16 | Patch |
| `@backstage/plugin-search-backend-module-pg` | 0.5.56 | 0.5.57 | Patch |
| `@backstage/plugin-search-backend-module-stack-overflow-collator` | 0.3.21 | 0.3.22 | Patch |
| `@backstage/plugin-search-backend-module-techdocs` | 0.4.15 | 0.4.16 | Patch |
| `@backstage/plugin-search-backend-node` | 1.4.5 | 1.4.6 | Patch |
| `@backstage/plugin-search-react` | 1.11.5 | 1.11.6 | Patch |
| `@backstage/plugin-signals` | 0.0.32 | 0.0.33 | Patch ⚠️ |
| `@backstage/plugin-signals-backend` | 0.3.16 | 0.3.17 | Patch |
| `@backstage/plugin-signals-node` | 0.2.2 | 0.2.3 | Patch |
| `@backstage/plugin-signals-react` | 0.0.23 | 0.0.24 | Patch ⚠️ |
| `@backstage/plugin-techdocs` | 1.17.7 | 1.17.8 | Patch |
| `@backstage/plugin-techdocs-addons-test-utils` | 2.0.6 | 2.0.7 | Patch |
| `@backstage/plugin-techdocs-backend` | 2.2.1 | 2.2.2 | Patch |
| `@backstage/plugin-techdocs-module-addons-contrib` | 1.1.37 | 1.1.38 | Patch |
| `@backstage/plugin-techdocs-node` | 1.15.1 | 1.15.2 | Patch |
| `@backstage/plugin-techdocs-react` | 1.3.12 | 1.3.13 | Patch |
| `@backstage/plugin-user-settings` | 0.9.4 | 0.9.5 | Patch |
| `@backstage/plugin-user-settings-backend` | 0.4.4 | 0.4.5 | Patch |
| `@backstage/repo-tools` | 0.17.3 | 0.18.0 | Minor ⚠️ |
| `@backstage/test-utils` | 1.7.19 | 1.7.20 | Patch |
| `@backstage/ui` | 0.16.0 | 0.17.0 | Minor ⚠️ |
| `@techdocs/cli` | 1.11.1 | 1.11.2 | Patch |
