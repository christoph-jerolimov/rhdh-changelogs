# Backstage Release 1.48.5

## Compared to 1.48.4 (previous patch release)

0 added, 0 removed, 2 upgraded, 192 unchanged.

### Version bumps

| Package | 1.48.4 | 1.48.5 | Type |
| --- | --- | --- | --- |
| `@backstage/plugin-auth-backend` | 0.27.0 | 0.27.1 | Patch |
| `@backstage/plugin-scaffolder-backend` | 3.1.4 | 3.1.5 | Patch |

## Compared to 1.47.4 (previous minor release)

2 added, 0 removed, 186 upgraded (⚠️ need extra attention: 2 major, 18 0.x minor, 4 0.0.x patch), 6 unchanged.

### ⚠️ Major version bumps

| Package | 1.47.4 | 1.48.5 |
| --- | --- | --- |
| `@backstage/plugin-catalog-node` | **1.20.1** | **2.0.0** |
| `@backstage/plugin-catalog-react` | **1.21.6** | **2.0.0** |

### 🆕 Added packages

| Package | Version |
| --- | --- |
| `@backstage/filter-predicates` | 0.1.0 |
| `@backstage/module-federation-common` | 0.1.1 |

### Version bumps

| Package | 1.47.4 | 1.48.5 | Type |
| --- | --- | --- | --- |
| `@backstage/app-defaults` | 1.7.4 | 1.7.5 | Patch |
| `@backstage/backend-app-api` | 1.4.1 | 1.5.0 | Minor |
| `@backstage/backend-defaults` | 0.15.1 | 0.15.2 | Patch |
| `@backstage/backend-dev-utils` | 0.1.6 | 0.1.7 | Patch |
| `@backstage/backend-dynamic-feature-service` | 0.7.8 | 0.7.9 | Patch |
| `@backstage/backend-openapi-utils` | 0.6.5 | 0.6.6 | Patch |
| `@backstage/backend-plugin-api` | 1.6.2 | 1.7.0 | Minor |
| `@backstage/backend-test-utils` | 1.10.4 | 1.11.0 | Minor |
| `@backstage/catalog-client` | 1.12.1 | 1.13.0 | Minor |
| `@backstage/cli` | 0.35.3 | 0.35.4 | Patch |
| `@backstage/cli-common` | 0.1.17 | 0.1.18 | Patch |
| `@backstage/cli-node` | 0.2.17 | 0.2.18 | Patch |
| `@backstage/codemods` | 0.1.53 | 0.1.54 | Patch |
| `@backstage/config-loader` | 1.10.7 | 1.10.8 | Patch |
| `@backstage/core-app-api` | 1.19.4 | 1.19.5 | Patch |
| `@backstage/core-compat-api` | 0.5.7 | 0.5.8 | Patch |
| `@backstage/core-components` | 0.18.6 | 0.18.7 | Patch |
| `@backstage/core-plugin-api` | 1.12.2 | 1.12.3 | Patch |
| `@backstage/create-app` | 0.7.8 | 0.7.9 | Patch |
| `@backstage/dev-utils` | 1.1.19 | 1.1.20 | Patch |
| `@backstage/e2e-test-utils` | 0.1.1 | 0.1.2 | Patch |
| `@backstage/eslint-plugin` | 0.2.0 | 0.2.1 | Patch |
| `@backstage/frontend-app-api` | 0.14.1 | 0.15.0 | Minor ⚠️ |
| `@backstage/frontend-defaults` | 0.3.6 | 0.4.0 | Minor ⚠️ |
| `@backstage/frontend-dynamic-feature-loader` | 0.1.8 | 0.1.9 | Patch |
| `@backstage/frontend-plugin-api` | 0.13.4 | 0.14.1 | Minor ⚠️ |
| `@backstage/frontend-test-utils` | 0.4.5 | 0.5.0 | Minor ⚠️ |
| `@backstage/integration` | 1.19.2 | 1.20.1 | Minor |
| `@backstage/integration-aws-node` | 0.1.19 | 0.1.20 | Patch |
| `@backstage/integration-react` | 1.2.14 | 1.2.15 | Patch |
| `@backstage/plugin-api-docs` | 0.13.3 | 0.13.4 | Patch |
| `@backstage/plugin-api-docs-module-protoc-gen-doc` | 0.1.10 | 0.1.11 | Patch |
| `@backstage/plugin-app` | 0.3.5 | 0.4.0 | Minor ⚠️ |
| `@backstage/plugin-app-backend` | 0.5.10 | 0.5.11 | Patch |
| `@backstage/plugin-app-node` | 0.1.41 | 0.1.42 | Patch |
| `@backstage/plugin-app-react` | 0.1.0 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-app-visualizer` | 0.1.28 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-auth` | 0.1.4 | 0.1.5 | Patch |
| `@backstage/plugin-auth-backend` | 0.26.0 | 0.27.1 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-atlassian-provider` | 0.4.11 | 0.4.12 | Patch |
| `@backstage/plugin-auth-backend-module-auth0-provider` | 0.2.10 | 0.3.0 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-aws-alb-provider` | 0.4.12 | 0.4.13 | Patch |
| `@backstage/plugin-auth-backend-module-azure-easyauth-provider` | 0.2.16 | 0.2.17 | Patch |
| `@backstage/plugin-auth-backend-module-bitbucket-provider` | 0.3.11 | 0.3.12 | Patch |
| `@backstage/plugin-auth-backend-module-bitbucket-server-provider` | 0.2.11 | 0.2.12 | Patch |
| `@backstage/plugin-auth-backend-module-cloudflare-access-provider` | 0.4.11 | 0.4.12 | Patch |
| `@backstage/plugin-auth-backend-module-gcp-iap-provider` | 0.4.11 | 0.4.12 | Patch |
| `@backstage/plugin-auth-backend-module-github-provider` | 0.4.1 | 0.5.0 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-gitlab-provider` | 0.3.11 | 0.4.0 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-google-provider` | 0.3.11 | 0.3.12 | Patch |
| `@backstage/plugin-auth-backend-module-guest-provider` | 0.2.15 | 0.2.16 | Patch |
| `@backstage/plugin-auth-backend-module-microsoft-provider` | 0.3.11 | 0.3.12 | Patch |
| `@backstage/plugin-auth-backend-module-oauth2-provider` | 0.4.11 | 0.4.12 | Patch |
| `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` | 0.2.16 | 0.2.17 | Patch |
| `@backstage/plugin-auth-backend-module-oidc-provider` | 0.4.12 | 0.4.13 | Patch |
| `@backstage/plugin-auth-backend-module-okta-provider` | 0.2.11 | 0.2.12 | Patch |
| `@backstage/plugin-auth-backend-module-onelogin-provider` | 0.3.11 | 0.3.12 | Patch |
| `@backstage/plugin-auth-backend-module-openshift-provider` | 0.1.3 | 0.1.4 | Patch |
| `@backstage/plugin-auth-backend-module-pinniped-provider` | 0.3.10 | 0.3.11 | Patch |
| `@backstage/plugin-auth-backend-module-vmware-cloud-provider` | 0.5.10 | 0.5.11 | Patch |
| `@backstage/plugin-auth-node` | 0.6.12 | 0.6.13 | Patch |
| `@backstage/plugin-auth-react` | 0.1.23 | 0.1.24 | Patch |
| `@backstage/plugin-bitbucket-cloud-common` | 0.3.6 | 0.3.7 | Patch |
| `@backstage/plugin-catalog` | 1.32.2 | 1.33.1 | Minor |
| `@backstage/plugin-catalog-backend` | 3.3.2 | 3.4.0 | Minor |
| `@backstage/plugin-catalog-backend-module-aws` | 0.4.19 | 0.4.20 | Patch |
| `@backstage/plugin-catalog-backend-module-azure` | 0.3.13 | 0.3.14 | Patch |
| `@backstage/plugin-catalog-backend-module-backstage-openapi` | 0.5.10 | 0.5.11 | Patch |
| `@backstage/plugin-catalog-backend-module-bitbucket-cloud` | 0.5.7 | 0.5.8 | Patch |
| `@backstage/plugin-catalog-backend-module-bitbucket-server` | 0.5.7 | 0.5.8 | Patch |
| `@backstage/plugin-catalog-backend-module-gcp` | 0.3.15 | 0.3.16 | Patch |
| `@backstage/plugin-catalog-backend-module-gerrit` | 0.3.10 | 0.3.11 | Patch |
| `@backstage/plugin-catalog-backend-module-gitea` | 0.1.8 | 0.1.9 | Patch |
| `@backstage/plugin-catalog-backend-module-github` | 0.12.1 | 0.12.2 | Patch |
| `@backstage/plugin-catalog-backend-module-github-org` | 0.3.18 | 0.3.19 | Patch |
| `@backstage/plugin-catalog-backend-module-gitlab` | 0.7.7 | 0.8.0 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-gitlab-org` | 0.2.17 | 0.2.18 | Patch |
| `@backstage/plugin-catalog-backend-module-incremental-ingestion` | 0.7.8 | 0.7.9 | Patch |
| `@backstage/plugin-catalog-backend-module-ldap` | 0.12.1 | 0.12.2 | Patch |
| `@backstage/plugin-catalog-backend-module-logs` | 0.1.18 | 0.1.19 | Patch |
| `@backstage/plugin-catalog-backend-module-msgraph` | 0.8.4 | 0.9.0 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-openapi` | 0.2.18 | 0.2.19 | Patch |
| `@backstage/plugin-catalog-backend-module-puppetdb` | 0.2.18 | 0.2.19 | Patch |
| `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` | 0.2.16 | 0.2.17 | Patch |
| `@backstage/plugin-catalog-backend-module-unprocessed` | 0.6.7 | 0.6.8 | Patch |
| `@backstage/plugin-catalog-common` | 1.1.7 | 1.1.8 | Patch |
| `@backstage/plugin-catalog-graph` | 0.5.6 | 0.5.7 | Patch |
| `@backstage/plugin-catalog-import` | 0.13.9 | 0.13.10 | Patch |
| `@backstage/plugin-catalog-node` | **1.20.1** | **2.0.0** | Major ⚠️ |
| `@backstage/plugin-catalog-react` | **1.21.6** | **2.0.0** | Major ⚠️ |
| `@backstage/plugin-catalog-unprocessed-entities` | 0.2.25 | 0.2.26 | Patch |
| `@backstage/plugin-catalog-unprocessed-entities-common` | 0.0.12 | 0.0.13 | Patch ⚠️ |
| `@backstage/plugin-config-schema` | 0.1.76 | 0.1.77 | Patch |
| `@backstage/plugin-devtools` | 0.1.35 | 0.1.36 | Patch |
| `@backstage/plugin-devtools-backend` | 0.5.13 | 0.5.14 | Patch |
| `@backstage/plugin-devtools-common` | 0.1.21 | 0.1.22 | Patch |
| `@backstage/plugin-devtools-react` | 0.1.0 | 0.1.1 | Patch |
| `@backstage/plugin-events-backend` | 0.5.10 | 0.5.11 | Patch |
| `@backstage/plugin-events-backend-module-aws-sqs` | 0.4.18 | 0.4.19 | Patch |
| `@backstage/plugin-events-backend-module-azure` | 0.2.27 | 0.2.28 | Patch |
| `@backstage/plugin-events-backend-module-bitbucket-cloud` | 0.2.27 | 0.2.28 | Patch |
| `@backstage/plugin-events-backend-module-bitbucket-server` | 0.1.8 | 0.1.9 | Patch |
| `@backstage/plugin-events-backend-module-gerrit` | 0.2.27 | 0.2.28 | Patch |
| `@backstage/plugin-events-backend-module-github` | 0.4.8 | 0.4.9 | Patch |
| `@backstage/plugin-events-backend-module-gitlab` | 0.3.8 | 0.3.9 | Patch |
| `@backstage/plugin-events-backend-module-google-pubsub` | 0.1.7 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-events-backend-module-kafka` | 0.3.0 | 0.3.1 | Patch |
| `@backstage/plugin-events-backend-test-utils` | 0.1.51 | 0.1.52 | Patch |
| `@backstage/plugin-events-node` | 0.4.18 | 0.4.19 | Patch |
| `@backstage/plugin-gateway-backend` | 1.1.1 | 1.1.2 | Patch |
| `@backstage/plugin-home` | 0.9.1 | 0.9.2 | Patch |
| `@backstage/plugin-home-react` | 0.1.34 | 0.1.35 | Patch |
| `@backstage/plugin-kubernetes` | 0.12.15 | 0.12.16 | Patch |
| `@backstage/plugin-kubernetes-backend` | 0.21.0 | 0.21.1 | Patch |
| `@backstage/plugin-kubernetes-cluster` | 0.0.33 | 0.0.34 | Patch ⚠️ |
| `@backstage/plugin-kubernetes-common` | 0.9.9 | 0.9.10 | Patch |
| `@backstage/plugin-kubernetes-node` | 0.4.0 | 0.4.1 | Patch |
| `@backstage/plugin-kubernetes-react` | 0.5.15 | 0.5.16 | Patch |
| `@backstage/plugin-mcp-actions-backend` | 0.1.8 | 0.1.9 | Patch |
| `@backstage/plugin-mui-to-bui` | 0.2.3 | 0.2.4 | Patch |
| `@backstage/plugin-notifications` | 0.5.13 | 0.5.14 | Patch |
| `@backstage/plugin-notifications-backend` | 0.6.1 | 0.6.2 | Patch |
| `@backstage/plugin-notifications-backend-module-email` | 0.3.17 | 0.3.18 | Patch |
| `@backstage/plugin-notifications-backend-module-slack` | 0.3.0 | 0.3.1 | Patch |
| `@backstage/plugin-notifications-common` | 0.2.0 | 0.2.1 | Patch |
| `@backstage/plugin-notifications-node` | 0.2.22 | 0.2.23 | Patch |
| `@backstage/plugin-org` | 0.6.48 | 0.6.49 | Patch |
| `@backstage/plugin-org-react` | 0.1.46 | 0.1.47 | Patch |
| `@backstage/plugin-permission-backend` | 0.7.8 | 0.7.9 | Patch |
| `@backstage/plugin-permission-backend-module-allow-all-policy` | 0.2.15 | 0.2.16 | Patch |
| `@backstage/plugin-permission-common` | 0.9.5 | 0.9.6 | Patch |
| `@backstage/plugin-permission-node` | 0.10.9 | 0.10.10 | Patch |
| `@backstage/plugin-permission-react` | 0.4.39 | 0.4.40 | Patch |
| `@backstage/plugin-proxy-backend` | 0.6.9 | 0.6.10 | Patch |
| `@backstage/plugin-proxy-node` | 0.1.11 | 0.1.12 | Patch |
| `@backstage/plugin-scaffolder` | 1.35.2 | 1.35.4 | Patch |
| `@backstage/plugin-scaffolder-backend` | 3.1.2 | 3.1.5 | Patch |
| `@backstage/plugin-scaffolder-backend-module-azure` | 0.2.17 | 0.2.18 | Patch |
| `@backstage/plugin-scaffolder-backend-module-bitbucket` | 0.3.18 | 0.3.19 | Patch |
| `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` | 0.3.2 | 0.3.3 | Patch |
| `@backstage/plugin-scaffolder-backend-module-bitbucket-server` | 0.2.17 | 0.2.18 | Patch |
| `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` | 0.3.17 | 0.3.18 | Patch |
| `@backstage/plugin-scaffolder-backend-module-cookiecutter` | 0.3.19 | 0.3.20 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gcp` | 0.2.17 | 0.2.18 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gerrit` | 0.2.17 | 0.2.18 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gitea` | 0.2.17 | 0.2.18 | Patch |
| `@backstage/plugin-scaffolder-backend-module-github` | 0.9.5 | 0.9.6 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gitlab` | 0.11.2 | 0.11.3 | Patch |
| `@backstage/plugin-scaffolder-backend-module-notifications` | 0.1.18 | 0.1.19 | Patch |
| `@backstage/plugin-scaffolder-backend-module-rails` | 0.5.17 | 0.5.18 | Patch |
| `@backstage/plugin-scaffolder-backend-module-sentry` | 0.3.0 | 0.3.1 | Patch |
| `@backstage/plugin-scaffolder-backend-module-yeoman` | 0.4.18 | 0.4.19 | Patch |
| `@backstage/plugin-scaffolder-common` | 1.7.5 | 1.7.6 | Patch |
| `@backstage/plugin-scaffolder-node` | 0.12.4 | 0.12.5 | Patch |
| `@backstage/plugin-scaffolder-node-test-utils` | 0.3.7 | 0.3.8 | Patch |
| `@backstage/plugin-scaffolder-react` | 1.19.6 | 1.19.7 | Patch |
| `@backstage/plugin-search` | 1.5.3 | 1.6.1 | Minor |
| `@backstage/plugin-search-backend` | 2.0.11 | 2.0.12 | Patch |
| `@backstage/plugin-search-backend-module-catalog` | 0.3.11 | 0.3.12 | Patch |
| `@backstage/plugin-search-backend-module-elasticsearch` | 1.7.9 | 1.8.0 | Minor |
| `@backstage/plugin-search-backend-module-explore` | 0.3.10 | 0.3.11 | Patch |
| `@backstage/plugin-search-backend-module-pg` | 0.5.51 | 0.5.52 | Patch |
| `@backstage/plugin-search-backend-module-stack-overflow-collator` | 0.3.16 | 0.3.17 | Patch |
| `@backstage/plugin-search-backend-module-techdocs` | 0.4.10 | 0.4.11 | Patch |
| `@backstage/plugin-search-backend-node` | 1.4.0 | 1.4.1 | Patch |
| `@backstage/plugin-search-common` | 1.2.21 | 1.2.22 | Patch |
| `@backstage/plugin-search-react` | 1.10.2 | 1.10.4 | Patch |
| `@backstage/plugin-signals` | 0.0.27 | 0.0.28 | Patch ⚠️ |
| `@backstage/plugin-signals-backend` | 0.3.11 | 0.3.12 | Patch |
| `@backstage/plugin-signals-node` | 0.1.27 | 0.1.28 | Patch |
| `@backstage/plugin-signals-react` | 0.0.18 | 0.0.19 | Patch ⚠️ |
| `@backstage/plugin-techdocs` | 1.16.2 | 1.17.0 | Minor |
| `@backstage/plugin-techdocs-addons-test-utils` | 2.0.1 | 2.0.2 | Patch |
| `@backstage/plugin-techdocs-backend` | 2.1.4 | 2.1.5 | Patch |
| `@backstage/plugin-techdocs-module-addons-contrib` | 1.1.32 | 1.1.33 | Patch |
| `@backstage/plugin-techdocs-node` | 1.14.1 | 1.14.3 | Patch |
| `@backstage/plugin-techdocs-react` | 1.3.7 | 1.3.8 | Patch |
| `@backstage/plugin-user-settings` | 0.8.31 | 0.9.0 | Minor ⚠️ |
| `@backstage/plugin-user-settings-backend` | 0.3.10 | 0.4.0 | Minor ⚠️ |
| `@backstage/plugin-user-settings-common` | 0.0.1 | 0.1.0 | Minor ⚠️ |
| `@backstage/repo-tools` | 0.16.3 | 0.16.5 | Patch |
| `@backstage/test-utils` | 1.7.14 | 1.7.15 | Patch |
| `@backstage/theme` | 0.7.1 | 0.7.2 | Patch |
| `@backstage/ui` | 0.11.3 | 0.12.0 | Minor ⚠️ |
| `@backstage/version-bridge` | 1.0.11 | 1.0.12 | Patch |
| `@techdocs/cli` | 1.10.4 | 1.10.5 | Patch |
