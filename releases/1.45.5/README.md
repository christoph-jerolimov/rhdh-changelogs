# Backstage Release 1.45.5

## Compared to 1.45.3 (previous patch release)

0 added, 0 removed, 3 upgraded, 187 unchanged.

### Version bumps

| Package | 1.45.3 | 1.45.5 | Type |
| --- | --- | --- | --- |
| `@backstage/backend-defaults` | 0.13.1 | 0.13.3 | Patch |
| `@backstage/cli` | 0.34.5 | 0.34.6 | Patch |
| `@backstage/plugin-scaffolder-backend` | 3.0.1 | 3.0.3 | Patch |

## Compared to 1.44.3 (previous minor release)

0 added, 0 removed, 178 upgraded (⚠️ need extra attention: 8 0.x minor, 4 0.0.x patch), 12 unchanged.

### Version bumps

| Package | 1.44.3 | 1.45.5 | Type |
| --- | --- | --- | --- |
| `@backstage/app-defaults` | 1.7.1 | 1.7.2 | Patch |
| `@backstage/backend-app-api` | 1.2.8 | 1.3.0 | Minor |
| `@backstage/backend-defaults` | 0.13.0 | 0.13.3 | Patch |
| `@backstage/backend-dynamic-feature-service` | 0.7.5 | 0.7.6 | Patch |
| `@backstage/backend-openapi-utils` | 0.6.2 | 0.6.3 | Patch |
| `@backstage/backend-plugin-api` | 1.4.4 | 1.5.0 | Minor |
| `@backstage/backend-test-utils` | 1.9.1 | 1.10.1 | Minor |
| `@backstage/catalog-client` | 1.12.0 | 1.12.1 | Patch |
| `@backstage/catalog-model` | 1.7.5 | 1.7.6 | Patch |
| `@backstage/cli` | 0.34.4 | 0.34.6 | Patch |
| `@backstage/cli-node` | 0.2.14 | 0.2.15 | Patch |
| `@backstage/config` | 1.3.5 | 1.3.6 | Patch |
| `@backstage/config-loader` | 1.10.5 | 1.10.6 | Patch |
| `@backstage/core-app-api` | 1.19.1 | 1.19.2 | Patch |
| `@backstage/core-compat-api` | 0.5.3 | 0.5.4 | Patch |
| `@backstage/core-components` | 0.18.2 | 0.18.3 | Patch |
| `@backstage/core-plugin-api` | 1.11.1 | 1.12.0 | Minor |
| `@backstage/create-app` | 0.7.5 | 0.7.6 | Patch |
| `@backstage/dev-utils` | 1.1.16 | 1.1.17 | Patch |
| `@backstage/eslint-plugin` | 0.1.12 | 0.2.0 | Minor ⚠️ |
| `@backstage/frontend-app-api` | 0.13.1 | 0.13.2 | Patch |
| `@backstage/frontend-defaults` | 0.3.2 | 0.3.3 | Patch |
| `@backstage/frontend-dynamic-feature-loader` | 0.1.6 | 0.1.7 | Patch |
| `@backstage/frontend-plugin-api` | 0.12.1 | 0.13.1 | Minor ⚠️ |
| `@backstage/frontend-test-utils` | 0.4.0 | 0.4.1 | Patch |
| `@backstage/integration` | 1.18.1 | 1.18.2 | Patch |
| `@backstage/integration-aws-node` | 0.1.18 | 0.1.19 | Patch |
| `@backstage/integration-react` | 1.2.11 | 1.2.12 | Patch |
| `@backstage/plugin-api-docs` | 0.13.0 | 0.13.1 | Patch |
| `@backstage/plugin-app` | 0.3.1 | 0.3.2 | Patch |
| `@backstage/plugin-app-backend` | 0.5.7 | 0.5.8 | Patch |
| `@backstage/plugin-app-node` | 0.1.38 | 0.1.39 | Patch |
| `@backstage/plugin-app-visualizer` | 0.1.24 | 0.1.25 | Patch |
| `@backstage/plugin-auth` | 0.1.1 | 0.1.2 | Patch |
| `@backstage/plugin-auth-backend` | 0.25.5 | 0.25.6 | Patch |
| `@backstage/plugin-auth-backend-module-atlassian-provider` | 0.4.8 | 0.4.9 | Patch |
| `@backstage/plugin-auth-backend-module-auth0-provider` | 0.2.8 | 0.2.9 | Patch |
| `@backstage/plugin-auth-backend-module-aws-alb-provider` | 0.4.8 | 0.4.9 | Patch |
| `@backstage/plugin-auth-backend-module-azure-easyauth-provider` | 0.2.13 | 0.2.14 | Patch |
| `@backstage/plugin-auth-backend-module-bitbucket-provider` | 0.3.8 | 0.3.9 | Patch |
| `@backstage/plugin-auth-backend-module-bitbucket-server-provider` | 0.2.8 | 0.2.9 | Patch |
| `@backstage/plugin-auth-backend-module-cloudflare-access-provider` | 0.4.8 | 0.4.9 | Patch |
| `@backstage/plugin-auth-backend-module-gcp-iap-provider` | 0.4.8 | 0.4.9 | Patch |
| `@backstage/plugin-auth-backend-module-github-provider` | 0.3.8 | 0.3.9 | Patch |
| `@backstage/plugin-auth-backend-module-gitlab-provider` | 0.3.8 | 0.3.9 | Patch |
| `@backstage/plugin-auth-backend-module-google-provider` | 0.3.8 | 0.3.9 | Patch |
| `@backstage/plugin-auth-backend-module-guest-provider` | 0.2.13 | 0.2.14 | Patch |
| `@backstage/plugin-auth-backend-module-microsoft-provider` | 0.3.8 | 0.3.9 | Patch |
| `@backstage/plugin-auth-backend-module-oauth2-provider` | 0.4.8 | 0.4.9 | Patch |
| `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` | 0.2.13 | 0.2.14 | Patch |
| `@backstage/plugin-auth-backend-module-oidc-provider` | 0.4.8 | 0.4.9 | Patch |
| `@backstage/plugin-auth-backend-module-okta-provider` | 0.2.8 | 0.2.9 | Patch |
| `@backstage/plugin-auth-backend-module-onelogin-provider` | 0.3.8 | 0.3.9 | Patch |
| `@backstage/plugin-auth-backend-module-openshift-provider` | 0.1.1 | 0.1.2 | Patch |
| `@backstage/plugin-auth-backend-module-pinniped-provider` | 0.3.8 | 0.3.9 | Patch |
| `@backstage/plugin-auth-backend-module-vmware-cloud-provider` | 0.5.8 | 0.5.9 | Patch |
| `@backstage/plugin-auth-node` | 0.6.8 | 0.6.9 | Patch |
| `@backstage/plugin-auth-react` | 0.1.20 | 0.1.21 | Patch |
| `@backstage/plugin-bitbucket-cloud-common` | 0.3.3 | 0.3.4 | Patch |
| `@backstage/plugin-catalog` | 1.31.4 | 1.32.0 | Minor |
| `@backstage/plugin-catalog-backend` | 3.1.2 | 3.2.0 | Minor |
| `@backstage/plugin-catalog-backend-module-aws` | 0.4.16 | 0.4.17 | Patch |
| `@backstage/plugin-catalog-backend-module-azure` | 0.3.10 | 0.3.11 | Patch |
| `@backstage/plugin-catalog-backend-module-backstage-openapi` | 0.5.7 | 0.5.8 | Patch |
| `@backstage/plugin-catalog-backend-module-bitbucket-cloud` | 0.5.4 | 0.5.5 | Patch |
| `@backstage/plugin-catalog-backend-module-bitbucket-server` | 0.5.4 | 0.5.5 | Patch |
| `@backstage/plugin-catalog-backend-module-gcp` | 0.3.13 | 0.3.14 | Patch |
| `@backstage/plugin-catalog-backend-module-gerrit` | 0.3.7 | 0.3.8 | Patch |
| `@backstage/plugin-catalog-backend-module-gitea` | 0.1.5 | 0.1.6 | Patch |
| `@backstage/plugin-catalog-backend-module-github` | 0.11.1 | 0.11.2 | Patch |
| `@backstage/plugin-catalog-backend-module-github-org` | 0.3.15 | 0.3.16 | Patch |
| `@backstage/plugin-catalog-backend-module-gitlab` | 0.7.4 | 0.7.5 | Patch |
| `@backstage/plugin-catalog-backend-module-gitlab-org` | 0.2.14 | 0.2.15 | Patch |
| `@backstage/plugin-catalog-backend-module-incremental-ingestion` | 0.7.5 | 0.7.6 | Patch |
| `@backstage/plugin-catalog-backend-module-ldap` | 0.11.10 | 0.12.0 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-logs` | 0.1.15 | 0.1.16 | Patch |
| `@backstage/plugin-catalog-backend-module-msgraph` | 0.8.1 | 0.8.2 | Patch |
| `@backstage/plugin-catalog-backend-module-openapi` | 0.2.15 | 0.2.16 | Patch |
| `@backstage/plugin-catalog-backend-module-puppetdb` | 0.2.15 | 0.2.16 | Patch |
| `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` | 0.2.13 | 0.2.14 | Patch |
| `@backstage/plugin-catalog-backend-module-unprocessed` | 0.6.5 | 0.6.6 | Patch |
| `@backstage/plugin-catalog-common` | 1.1.6 | 1.1.7 | Patch |
| `@backstage/plugin-catalog-graph` | 0.5.2 | 0.5.3 | Patch |
| `@backstage/plugin-catalog-import` | 0.13.6 | 0.13.7 | Patch |
| `@backstage/plugin-catalog-node` | 1.19.1 | 1.20.0 | Minor |
| `@backstage/plugin-catalog-react` | 1.21.2 | 1.21.3 | Patch |
| `@backstage/plugin-catalog-unprocessed-entities` | 0.2.22 | 0.2.23 | Patch |
| `@backstage/plugin-catalog-unprocessed-entities-common` | 0.0.10 | 0.0.11 | Patch ⚠️ |
| `@backstage/plugin-config-schema` | 0.1.73 | 0.1.74 | Patch |
| `@backstage/plugin-devtools` | 0.1.32 | 0.1.33 | Patch |
| `@backstage/plugin-devtools-backend` | 0.5.10 | 0.5.11 | Patch |
| `@backstage/plugin-devtools-common` | 0.1.18 | 0.1.19 | Patch |
| `@backstage/plugin-events-backend` | 0.5.7 | 0.5.8 | Patch |
| `@backstage/plugin-events-backend-module-aws-sqs` | 0.4.16 | 0.4.17 | Patch |
| `@backstage/plugin-events-backend-module-azure` | 0.2.25 | 0.2.26 | Patch |
| `@backstage/plugin-events-backend-module-bitbucket-cloud` | 0.2.25 | 0.2.26 | Patch |
| `@backstage/plugin-events-backend-module-bitbucket-server` | 0.1.6 | 0.1.7 | Patch |
| `@backstage/plugin-events-backend-module-gerrit` | 0.2.25 | 0.2.26 | Patch |
| `@backstage/plugin-events-backend-module-github` | 0.4.5 | 0.4.6 | Patch |
| `@backstage/plugin-events-backend-module-gitlab` | 0.3.6 | 0.3.7 | Patch |
| `@backstage/plugin-events-backend-module-google-pubsub` | 0.1.5 | 0.1.6 | Patch |
| `@backstage/plugin-events-backend-module-kafka` | 0.1.4 | 0.1.5 | Patch |
| `@backstage/plugin-events-backend-test-utils` | 0.1.49 | 0.1.50 | Patch |
| `@backstage/plugin-events-node` | 0.4.16 | 0.4.17 | Patch |
| `@backstage/plugin-gateway-backend` | 1.0.6 | 1.1.0 | Minor |
| `@backstage/plugin-home` | 0.8.13 | 0.8.14 | Patch |
| `@backstage/plugin-home-react` | 0.1.31 | 0.1.32 | Patch |
| `@backstage/plugin-kubernetes` | 0.12.12 | 0.12.13 | Patch |
| `@backstage/plugin-kubernetes-backend` | 0.20.3 | 0.20.4 | Patch |
| `@backstage/plugin-kubernetes-cluster` | 0.0.30 | 0.0.31 | Patch ⚠️ |
| `@backstage/plugin-kubernetes-common` | 0.9.7 | 0.9.8 | Patch |
| `@backstage/plugin-kubernetes-node` | 0.3.5 | 0.3.6 | Patch |
| `@backstage/plugin-kubernetes-react` | 0.5.12 | 0.5.13 | Patch |
| `@backstage/plugin-mcp-actions-backend` | 0.1.4 | 0.1.5 | Patch |
| `@backstage/plugin-mui-to-bui` | 0.2.0 | 0.2.1 | Patch |
| `@backstage/plugin-notifications` | 0.5.10 | 0.5.11 | Patch |
| `@backstage/plugin-notifications-backend` | 0.5.11 | 0.6.0 | Minor ⚠️ |
| `@backstage/plugin-notifications-backend-module-email` | 0.3.15 | 0.3.16 | Patch |
| `@backstage/plugin-notifications-backend-module-slack` | 0.2.0 | 0.2.1 | Patch |
| `@backstage/plugin-notifications-common` | 0.1.1 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-notifications-node` | 0.2.20 | 0.2.21 | Patch |
| `@backstage/plugin-org` | 0.6.45 | 0.6.46 | Patch |
| `@backstage/plugin-org-react` | 0.1.43 | 0.1.44 | Patch |
| `@backstage/plugin-permission-backend` | 0.7.5 | 0.7.6 | Patch |
| `@backstage/plugin-permission-backend-module-allow-all-policy` | 0.2.13 | 0.2.14 | Patch |
| `@backstage/plugin-permission-common` | 0.9.2 | 0.9.3 | Patch |
| `@backstage/plugin-permission-node` | 0.10.5 | 0.10.6 | Patch |
| `@backstage/plugin-permission-react` | 0.4.37 | 0.4.38 | Patch |
| `@backstage/plugin-proxy-backend` | 0.6.7 | 0.6.8 | Patch |
| `@backstage/plugin-proxy-node` | 0.1.9 | 0.1.10 | Patch |
| `@backstage/plugin-scaffolder` | 1.34.2 | 1.34.3 | Patch |
| `@backstage/plugin-scaffolder-backend` | 3.0.0 | 3.0.3 | Patch |
| `@backstage/plugin-scaffolder-backend-module-azure` | 0.2.14 | 0.2.15 | Patch |
| `@backstage/plugin-scaffolder-backend-module-bitbucket` | 0.3.15 | 0.3.16 | Patch |
| `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` | 0.2.14 | 0.2.15 | Patch |
| `@backstage/plugin-scaffolder-backend-module-bitbucket-server` | 0.2.14 | 0.2.15 | Patch |
| `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` | 0.3.14 | 0.3.15 | Patch |
| `@backstage/plugin-scaffolder-backend-module-cookiecutter` | 0.3.16 | 0.3.17 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gcp` | 0.2.14 | 0.2.15 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gerrit` | 0.2.14 | 0.2.15 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gitea` | 0.2.14 | 0.2.15 | Patch |
| `@backstage/plugin-scaffolder-backend-module-github` | 0.9.1 | 0.9.2 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gitlab` | 0.9.6 | 0.10.0 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-notifications` | 0.1.15 | 0.1.16 | Patch |
| `@backstage/plugin-scaffolder-backend-module-rails` | 0.5.14 | 0.5.15 | Patch |
| `@backstage/plugin-scaffolder-backend-module-sentry` | 0.2.14 | 0.2.15 | Patch |
| `@backstage/plugin-scaffolder-backend-module-yeoman` | 0.4.15 | 0.4.16 | Patch |
| `@backstage/plugin-scaffolder-common` | 1.7.2 | 1.7.3 | Patch |
| `@backstage/plugin-scaffolder-node` | 0.12.0 | 0.12.1 | Patch |
| `@backstage/plugin-scaffolder-node-test-utils` | 0.3.4 | 0.3.5 | Patch |
| `@backstage/plugin-scaffolder-react` | 1.19.2 | 1.19.3 | Patch |
| `@backstage/plugin-search` | 1.4.31 | 1.5.0 | Minor |
| `@backstage/plugin-search-backend` | 2.0.7 | 2.0.8 | Patch |
| `@backstage/plugin-search-backend-module-catalog` | 0.3.9 | 0.3.10 | Patch |
| `@backstage/plugin-search-backend-module-elasticsearch` | 1.7.7 | 1.7.8 | Patch |
| `@backstage/plugin-search-backend-module-explore` | 0.3.8 | 0.3.9 | Patch |
| `@backstage/plugin-search-backend-module-pg` | 0.5.49 | 0.5.50 | Patch |
| `@backstage/plugin-search-backend-module-stack-overflow-collator` | 0.3.14 | 0.3.15 | Patch |
| `@backstage/plugin-search-backend-module-techdocs` | 0.4.7 | 0.4.8 | Patch |
| `@backstage/plugin-search-backend-node` | 1.3.16 | 1.3.17 | Patch |
| `@backstage/plugin-search-common` | 1.2.20 | 1.2.21 | Patch |
| `@backstage/plugin-search-react` | 1.9.5 | 1.10.0 | Minor |
| `@backstage/plugin-signals` | 0.0.24 | 0.0.25 | Patch ⚠️ |
| `@backstage/plugin-signals-backend` | 0.3.9 | 0.3.10 | Patch |
| `@backstage/plugin-signals-node` | 0.1.25 | 0.1.26 | Patch |
| `@backstage/plugin-signals-react` | 0.0.16 | 0.0.17 | Patch ⚠️ |
| `@backstage/plugin-techdocs` | 1.15.2 | 1.16.0 | Minor |
| `@backstage/plugin-techdocs-addons-test-utils` | 1.1.1 | 1.1.2 | Patch |
| `@backstage/plugin-techdocs-backend` | 2.1.1 | 2.1.2 | Patch |
| `@backstage/plugin-techdocs-module-addons-contrib` | 1.1.29 | 1.1.30 | Patch |
| `@backstage/plugin-techdocs-node` | 1.13.8 | 1.13.9 | Patch |
| `@backstage/plugin-techdocs-react` | 1.3.4 | 1.3.5 | Patch |
| `@backstage/plugin-user-settings` | 0.8.28 | 0.8.29 | Patch |
| `@backstage/plugin-user-settings-backend` | 0.3.7 | 0.3.8 | Patch |
| `@backstage/repo-tools` | 0.15.4 | 0.16.0 | Minor ⚠️ |
| `@backstage/test-utils` | 1.7.12 | 1.7.13 | Patch |
| `@backstage/ui` | 0.8.2 | 0.9.1 | Minor ⚠️ |
| `@techdocs/cli` | 1.10.1 | 1.10.2 | Patch |
