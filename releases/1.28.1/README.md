# Backstage Release 1.28.1

## Compared to 1.28.0 (previous patch release)

0 added, 0 removed, 102 upgraded (⚠️ need extra attention: 3 0.0.x patch), 70 unchanged.

### Version bumps

| Package | 1.28.0 | 1.28.1 | Type |
| --- | --- | --- | --- |
| `@backstage/backend-app-api` | 0.7.6 | 0.7.7 | Patch |
| `@backstage/backend-common` | 0.23.0 | 0.23.1 | Patch |
| `@backstage/backend-defaults` | 0.3.0 | 0.3.1 | Patch |
| `@backstage/backend-dynamic-feature-service` | 0.2.11 | 0.2.12 | Patch |
| `@backstage/backend-openapi-utils` | 0.1.12 | 0.1.13 | Patch |
| `@backstage/backend-plugin-api` | 0.6.19 | 0.6.20 | Patch |
| `@backstage/backend-tasks` | 0.5.24 | 0.5.25 | Patch |
| `@backstage/backend-test-utils` | 0.4.0 | 0.4.1 | Patch |
| `@backstage/cli` | 0.26.7 | 0.26.8 | Patch |
| `@backstage/plugin-app-backend` | 0.3.68 | 0.3.69 | Patch |
| `@backstage/plugin-app-node` | 0.1.19 | 0.1.20 | Patch |
| `@backstage/plugin-auth-backend` | 0.22.6 | 0.22.7 | Patch |
| `@backstage/plugin-auth-backend-module-atlassian-provider` | 0.2.0 | 0.2.1 | Patch |
| `@backstage/plugin-auth-backend-module-aws-alb-provider` | 0.1.11 | 0.1.12 | Patch |
| `@backstage/plugin-auth-backend-module-azure-easyauth-provider` | 0.1.2 | 0.1.3 | Patch |
| `@backstage/plugin-auth-backend-module-bitbucket-provider` | 0.1.2 | 0.1.3 | Patch |
| `@backstage/plugin-auth-backend-module-cloudflare-access-provider` | 0.1.2 | 0.1.3 | Patch |
| `@backstage/plugin-auth-backend-module-gcp-iap-provider` | 0.2.14 | 0.2.15 | Patch |
| `@backstage/plugin-auth-backend-module-github-provider` | 0.1.16 | 0.1.17 | Patch |
| `@backstage/plugin-auth-backend-module-gitlab-provider` | 0.1.16 | 0.1.17 | Patch |
| `@backstage/plugin-auth-backend-module-google-provider` | 0.1.16 | 0.1.17 | Patch |
| `@backstage/plugin-auth-backend-module-guest-provider` | 0.1.5 | 0.1.6 | Patch |
| `@backstage/plugin-auth-backend-module-microsoft-provider` | 0.1.14 | 0.1.15 | Patch |
| `@backstage/plugin-auth-backend-module-oauth2-provider` | 0.2.0 | 0.2.1 | Patch |
| `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` | 0.1.12 | 0.1.13 | Patch |
| `@backstage/plugin-auth-backend-module-oidc-provider` | 0.2.0 | 0.2.1 | Patch |
| `@backstage/plugin-auth-backend-module-okta-provider` | 0.0.12 | 0.0.13 | Patch ⚠️ |
| `@backstage/plugin-auth-backend-module-onelogin-provider` | 0.1.0 | 0.1.1 | Patch |
| `@backstage/plugin-auth-backend-module-pinniped-provider` | 0.1.13 | 0.1.14 | Patch |
| `@backstage/plugin-auth-backend-module-vmware-cloud-provider` | 0.2.0 | 0.2.1 | Patch |
| `@backstage/plugin-auth-node` | 0.4.14 | 0.4.15 | Patch |
| `@backstage/plugin-catalog-backend` | 1.23.0 | 1.23.1 | Patch |
| `@backstage/plugin-catalog-backend-module-aws` | 0.3.14 | 0.3.15 | Patch |
| `@backstage/plugin-catalog-backend-module-azure` | 0.1.39 | 0.1.40 | Patch |
| `@backstage/plugin-catalog-backend-module-backstage-openapi` | 0.2.2 | 0.2.3 | Patch |
| `@backstage/plugin-catalog-backend-module-bitbucket-cloud` | 0.2.6 | 0.2.7 | Patch |
| `@backstage/plugin-catalog-backend-module-bitbucket-server` | 0.1.33 | 0.1.34 | Patch |
| `@backstage/plugin-catalog-backend-module-gcp` | 0.1.20 | 0.1.21 | Patch |
| `@backstage/plugin-catalog-backend-module-gerrit` | 0.1.36 | 0.1.37 | Patch |
| `@backstage/plugin-catalog-backend-module-github` | 0.6.2 | 0.6.3 | Patch |
| `@backstage/plugin-catalog-backend-module-github-org` | 0.1.14 | 0.1.15 | Patch |
| `@backstage/plugin-catalog-backend-module-gitlab` | 0.3.18 | 0.3.19 | Patch |
| `@backstage/plugin-catalog-backend-module-gitlab-org` | 0.0.2 | 0.0.3 | Patch ⚠️ |
| `@backstage/plugin-catalog-backend-module-incremental-ingestion` | 0.4.24 | 0.4.25 | Patch |
| `@backstage/plugin-catalog-backend-module-ldap` | 0.6.0 | 0.6.1 | Patch |
| `@backstage/plugin-catalog-backend-module-msgraph` | 0.5.27 | 0.5.28 | Patch |
| `@backstage/plugin-catalog-backend-module-openapi` | 0.1.37 | 0.1.38 | Patch |
| `@backstage/plugin-catalog-backend-module-puppetdb` | 0.1.25 | 0.1.26 | Patch |
| `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` | 0.1.17 | 0.1.18 | Patch |
| `@backstage/plugin-catalog-backend-module-unprocessed` | 0.4.6 | 0.4.7 | Patch |
| `@backstage/plugin-catalog-node` | 1.12.1 | 1.12.2 | Patch |
| `@backstage/plugin-devtools-backend` | 0.3.5 | 0.3.6 | Patch |
| `@backstage/plugin-events-backend` | 0.3.6 | 0.3.7 | Patch |
| `@backstage/plugin-events-backend-module-aws-sqs` | 0.3.5 | 0.3.6 | Patch |
| `@backstage/plugin-events-backend-module-azure` | 0.2.5 | 0.2.6 | Patch |
| `@backstage/plugin-events-backend-module-bitbucket-cloud` | 0.2.5 | 0.2.6 | Patch |
| `@backstage/plugin-events-backend-module-gerrit` | 0.2.5 | 0.2.6 | Patch |
| `@backstage/plugin-events-backend-module-github` | 0.2.5 | 0.2.6 | Patch |
| `@backstage/plugin-events-backend-module-gitlab` | 0.2.5 | 0.2.6 | Patch |
| `@backstage/plugin-events-backend-test-utils` | 0.1.29 | 0.1.30 | Patch |
| `@backstage/plugin-events-node` | 0.3.5 | 0.3.6 | Patch |
| `@backstage/plugin-kubernetes-backend` | 0.18.0 | 0.18.1 | Patch |
| `@backstage/plugin-kubernetes-node` | 0.1.13 | 0.1.14 | Patch |
| `@backstage/plugin-notifications-backend` | 0.3.0 | 0.3.1 | Patch |
| `@backstage/plugin-notifications-backend-module-email` | 0.1.0 | 0.1.1 | Patch |
| `@backstage/plugin-notifications-node` | 0.2.0 | 0.2.1 | Patch |
| `@backstage/plugin-permission-backend` | 0.5.43 | 0.5.44 | Patch |
| `@backstage/plugin-permission-backend-module-allow-all-policy` | 0.1.16 | 0.1.17 | Patch |
| `@backstage/plugin-permission-node` | 0.7.30 | 0.7.31 | Patch |
| `@backstage/plugin-proxy-backend` | 0.5.0 | 0.5.1 | Patch |
| `@backstage/plugin-scaffolder-backend` | 1.22.9 | 1.22.10 | Patch |
| `@backstage/plugin-scaffolder-backend-module-azure` | 0.1.11 | 0.1.12 | Patch |
| `@backstage/plugin-scaffolder-backend-module-bitbucket` | 0.2.9 | 0.2.10 | Patch |
| `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` | 0.1.9 | 0.1.10 | Patch |
| `@backstage/plugin-scaffolder-backend-module-bitbucket-server` | 0.1.9 | 0.1.10 | Patch |
| `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` | 0.2.20 | 0.2.21 | Patch |
| `@backstage/plugin-scaffolder-backend-module-cookiecutter` | 0.2.43 | 0.2.44 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gerrit` | 0.1.11 | 0.1.12 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gitea` | 0.1.9 | 0.1.10 | Patch |
| `@backstage/plugin-scaffolder-backend-module-github` | 0.3.0 | 0.3.1 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gitlab` | 0.4.1 | 0.4.2 | Patch |
| `@backstage/plugin-scaffolder-backend-module-notifications` | 0.0.2 | 0.0.3 | Patch ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-rails` | 0.4.36 | 0.4.37 | Patch |
| `@backstage/plugin-scaffolder-backend-module-sentry` | 0.1.27 | 0.1.28 | Patch |
| `@backstage/plugin-scaffolder-backend-module-yeoman` | 0.3.2 | 0.3.3 | Patch |
| `@backstage/plugin-scaffolder-node` | 0.4.5 | 0.4.6 | Patch |
| `@backstage/plugin-scaffolder-node-test-utils` | 0.1.5 | 0.1.6 | Patch |
| `@backstage/plugin-search-backend` | 1.5.10 | 1.5.11 | Patch |
| `@backstage/plugin-search-backend-module-catalog` | 0.1.25 | 0.1.26 | Patch |
| `@backstage/plugin-search-backend-module-elasticsearch` | 1.5.0 | 1.5.1 | Patch |
| `@backstage/plugin-search-backend-module-explore` | 0.1.25 | 0.1.26 | Patch |
| `@backstage/plugin-search-backend-module-pg` | 0.5.28 | 0.5.29 | Patch |
| `@backstage/plugin-search-backend-module-stack-overflow-collator` | 0.1.12 | 0.1.13 | Patch |
| `@backstage/plugin-search-backend-module-techdocs` | 0.1.24 | 0.1.25 | Patch |
| `@backstage/plugin-search-backend-node` | 1.2.24 | 1.2.25 | Patch |
| `@backstage/plugin-signals-backend` | 0.1.5 | 0.1.6 | Patch |
| `@backstage/plugin-signals-node` | 0.1.5 | 0.1.6 | Patch |
| `@backstage/plugin-techdocs-backend` | 1.10.6 | 1.10.7 | Patch |
| `@backstage/plugin-techdocs-node` | 1.12.5 | 1.12.6 | Patch |
| `@backstage/plugin-user-settings-backend` | 0.2.18 | 0.2.19 | Patch |
| `@backstage/repo-tools` | 0.9.1 | 0.9.2 | Patch |
| `@techdocs/cli` | 1.8.12 | 1.8.13 | Patch |

## Compared to 1.27.7 (previous minor release)

2 added, 0 removed, 159 upgraded (⚠️ need extra attention: 17 0.x minor, 8 0.0.x patch), 11 unchanged.

### 🆕 Added packages

| Package | Version |
| --- | --- |
| `@backstage/plugin-auth-backend-module-onelogin-provider` | 0.1.1 |
| `@backstage/plugin-user-settings-common` | 0.0.1 |

### Version bumps

| Package | 1.27.7 | 1.28.1 | Type |
| --- | --- | --- | --- |
| `@backstage/app-defaults` | 1.5.5 | 1.5.6 | Patch |
| `@backstage/backend-app-api` | 0.7.5 | 0.7.7 | Patch |
| `@backstage/backend-common` | 0.22.0 | 0.23.1 | Minor ⚠️ |
| `@backstage/backend-defaults` | 0.2.18 | 0.3.1 | Minor ⚠️ |
| `@backstage/backend-dynamic-feature-service` | 0.2.10 | 0.2.12 | Patch |
| `@backstage/backend-openapi-utils` | 0.1.11 | 0.1.13 | Patch |
| `@backstage/backend-plugin-api` | 0.6.18 | 0.6.20 | Patch |
| `@backstage/backend-tasks` | 0.5.23 | 0.5.25 | Patch |
| `@backstage/backend-test-utils` | 0.3.8 | 0.4.1 | Minor ⚠️ |
| `@backstage/cli` | 0.26.6 | 0.26.8 | Patch |
| `@backstage/cli-common` | 0.1.13 | 0.1.14 | Patch |
| `@backstage/cli-node` | 0.2.5 | 0.2.6 | Patch |
| `@backstage/codemods` | 0.1.48 | 0.1.49 | Patch |
| `@backstage/config-loader` | 1.8.0 | 1.8.1 | Patch |
| `@backstage/core-app-api` | 1.12.5 | 1.12.6 | Patch |
| `@backstage/core-compat-api` | 0.2.5 | 0.2.6 | Patch |
| `@backstage/core-components` | 0.14.7 | 0.14.8 | Patch |
| `@backstage/core-plugin-api` | 1.9.2 | 1.9.3 | Patch |
| `@backstage/create-app` | 0.5.15 | 0.5.16 | Patch |
| `@backstage/dev-utils` | 1.0.32 | 1.0.33 | Patch |
| `@backstage/frontend-app-api` | 0.7.0 | 0.7.1 | Patch |
| `@backstage/frontend-plugin-api` | 0.6.5 | 0.6.6 | Patch |
| `@backstage/frontend-test-utils` | 0.1.7 | 0.1.8 | Patch |
| `@backstage/integration` | 1.11.0 | 1.12.0 | Minor |
| `@backstage/integration-react` | 1.1.27 | 1.1.28 | Patch |
| `@backstage/plugin-api-docs` | 0.11.5 | 0.11.6 | Patch |
| `@backstage/plugin-api-docs-module-protoc-gen-doc` | 0.1.6 | 0.1.7 | Patch |
| `@backstage/plugin-app-backend` | 0.3.67 | 0.3.69 | Patch |
| `@backstage/plugin-app-node` | 0.1.18 | 0.1.20 | Patch |
| `@backstage/plugin-app-visualizer` | 0.1.6 | 0.1.7 | Patch |
| `@backstage/plugin-auth-backend` | 0.22.5 | 0.22.7 | Patch |
| `@backstage/plugin-auth-backend-module-atlassian-provider` | 0.1.10 | 0.2.1 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-aws-alb-provider` | 0.1.10 | 0.1.12 | Patch |
| `@backstage/plugin-auth-backend-module-azure-easyauth-provider` | 0.1.1 | 0.1.3 | Patch |
| `@backstage/plugin-auth-backend-module-bitbucket-provider` | 0.1.1 | 0.1.3 | Patch |
| `@backstage/plugin-auth-backend-module-cloudflare-access-provider` | 0.1.1 | 0.1.3 | Patch |
| `@backstage/plugin-auth-backend-module-gcp-iap-provider` | 0.2.13 | 0.2.15 | Patch |
| `@backstage/plugin-auth-backend-module-github-provider` | 0.1.15 | 0.1.17 | Patch |
| `@backstage/plugin-auth-backend-module-gitlab-provider` | 0.1.15 | 0.1.17 | Patch |
| `@backstage/plugin-auth-backend-module-google-provider` | 0.1.15 | 0.1.17 | Patch |
| `@backstage/plugin-auth-backend-module-guest-provider` | 0.1.4 | 0.1.6 | Patch |
| `@backstage/plugin-auth-backend-module-microsoft-provider` | 0.1.13 | 0.1.15 | Patch |
| `@backstage/plugin-auth-backend-module-oauth2-provider` | 0.1.15 | 0.2.1 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` | 0.1.11 | 0.1.13 | Patch |
| `@backstage/plugin-auth-backend-module-oidc-provider` | 0.1.9 | 0.2.1 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-okta-provider` | 0.0.11 | 0.0.13 | Patch ⚠️ |
| `@backstage/plugin-auth-backend-module-pinniped-provider` | 0.1.12 | 0.1.14 | Patch |
| `@backstage/plugin-auth-backend-module-vmware-cloud-provider` | 0.1.10 | 0.2.1 | Minor ⚠️ |
| `@backstage/plugin-auth-node` | 0.4.13 | 0.4.15 | Patch |
| `@backstage/plugin-auth-react` | 0.1.2 | 0.1.3 | Patch |
| `@backstage/plugin-bitbucket-cloud-common` | 0.2.19 | 0.2.20 | Patch |
| `@backstage/plugin-catalog` | 1.20.0 | 1.21.0 | Minor |
| `@backstage/plugin-catalog-backend` | 1.22.0 | 1.23.1 | Minor |
| `@backstage/plugin-catalog-backend-module-aws` | 0.3.13 | 0.3.15 | Patch |
| `@backstage/plugin-catalog-backend-module-azure` | 0.1.38 | 0.1.40 | Patch |
| `@backstage/plugin-catalog-backend-module-backstage-openapi` | 0.2.1 | 0.2.3 | Patch |
| `@backstage/plugin-catalog-backend-module-bitbucket-cloud` | 0.2.5 | 0.2.7 | Patch |
| `@backstage/plugin-catalog-backend-module-bitbucket-server` | 0.1.32 | 0.1.34 | Patch |
| `@backstage/plugin-catalog-backend-module-gcp` | 0.1.19 | 0.1.21 | Patch |
| `@backstage/plugin-catalog-backend-module-gerrit` | 0.1.35 | 0.1.37 | Patch |
| `@backstage/plugin-catalog-backend-module-github` | 0.6.1 | 0.6.3 | Patch |
| `@backstage/plugin-catalog-backend-module-github-org` | 0.1.13 | 0.1.15 | Patch |
| `@backstage/plugin-catalog-backend-module-gitlab` | 0.3.17 | 0.3.19 | Patch |
| `@backstage/plugin-catalog-backend-module-gitlab-org` | 0.0.1 | 0.0.3 | Patch ⚠️ |
| `@backstage/plugin-catalog-backend-module-incremental-ingestion` | 0.4.23 | 0.4.25 | Patch |
| `@backstage/plugin-catalog-backend-module-ldap` | 0.5.34 | 0.6.1 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-msgraph` | 0.5.26 | 0.5.28 | Patch |
| `@backstage/plugin-catalog-backend-module-openapi` | 0.1.36 | 0.1.38 | Patch |
| `@backstage/plugin-catalog-backend-module-puppetdb` | 0.1.24 | 0.1.26 | Patch |
| `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` | 0.1.16 | 0.1.18 | Patch |
| `@backstage/plugin-catalog-backend-module-unprocessed` | 0.4.5 | 0.4.7 | Patch |
| `@backstage/plugin-catalog-common` | 1.0.23 | 1.0.24 | Patch |
| `@backstage/plugin-catalog-graph` | 0.4.5 | 0.4.6 | Patch |
| `@backstage/plugin-catalog-import` | 0.11.0 | 0.12.0 | Minor ⚠️ |
| `@backstage/plugin-catalog-node` | 1.12.0 | 1.12.2 | Patch |
| `@backstage/plugin-catalog-react` | 1.12.0 | 1.12.1 | Patch |
| `@backstage/plugin-catalog-unprocessed-entities` | 0.2.4 | 0.2.5 | Patch |
| `@backstage/plugin-catalog-unprocessed-entities-common` | 0.0.1 | 0.0.2 | Patch ⚠️ |
| `@backstage/plugin-config-schema` | 0.1.55 | 0.1.56 | Patch |
| `@backstage/plugin-devtools` | 0.1.14 | 0.1.15 | Patch |
| `@backstage/plugin-devtools-backend` | 0.3.4 | 0.3.6 | Patch |
| `@backstage/plugin-devtools-common` | 0.1.9 | 0.1.10 | Patch |
| `@backstage/plugin-events-backend` | 0.3.5 | 0.3.7 | Patch |
| `@backstage/plugin-events-backend-module-aws-sqs` | 0.3.4 | 0.3.6 | Patch |
| `@backstage/plugin-events-backend-module-azure` | 0.2.4 | 0.2.6 | Patch |
| `@backstage/plugin-events-backend-module-bitbucket-cloud` | 0.2.4 | 0.2.6 | Patch |
| `@backstage/plugin-events-backend-module-gerrit` | 0.2.4 | 0.2.6 | Patch |
| `@backstage/plugin-events-backend-module-github` | 0.2.4 | 0.2.6 | Patch |
| `@backstage/plugin-events-backend-module-gitlab` | 0.2.4 | 0.2.6 | Patch |
| `@backstage/plugin-events-backend-test-utils` | 0.1.28 | 0.1.30 | Patch |
| `@backstage/plugin-events-node` | 0.3.4 | 0.3.6 | Patch |
| `@backstage/plugin-home` | 0.7.4 | 0.7.5 | Patch |
| `@backstage/plugin-home-react` | 0.1.13 | 0.1.14 | Patch |
| `@backstage/plugin-kubernetes` | 0.11.10 | 0.11.11 | Patch |
| `@backstage/plugin-kubernetes-backend` | 0.17.1 | 0.18.1 | Minor ⚠️ |
| `@backstage/plugin-kubernetes-cluster` | 0.0.11 | 0.0.12 | Patch ⚠️ |
| `@backstage/plugin-kubernetes-common` | 0.7.6 | 0.8.0 | Minor ⚠️ |
| `@backstage/plugin-kubernetes-node` | 0.1.12 | 0.1.14 | Patch |
| `@backstage/plugin-kubernetes-react` | 0.3.5 | 0.4.0 | Minor ⚠️ |
| `@backstage/plugin-notifications` | 0.2.1 | 0.2.2 | Patch |
| `@backstage/plugin-notifications-backend` | 0.2.1 | 0.3.1 | Minor ⚠️ |
| `@backstage/plugin-notifications-backend-module-email` | 0.0.1 | 0.1.1 | Minor ⚠️ |
| `@backstage/plugin-notifications-common` | 0.0.3 | 0.0.4 | Patch ⚠️ |
| `@backstage/plugin-notifications-node` | 0.1.4 | 0.2.1 | Minor ⚠️ |
| `@backstage/plugin-org` | 0.6.25 | 0.6.26 | Patch |
| `@backstage/plugin-org-react` | 0.1.24 | 0.1.25 | Patch |
| `@backstage/plugin-permission-backend` | 0.5.42 | 0.5.44 | Patch |
| `@backstage/plugin-permission-backend-module-allow-all-policy` | 0.1.15 | 0.1.17 | Patch |
| `@backstage/plugin-permission-common` | 0.7.13 | 0.7.14 | Patch |
| `@backstage/plugin-permission-node` | 0.7.29 | 0.7.31 | Patch |
| `@backstage/plugin-permission-react` | 0.4.22 | 0.4.23 | Patch |
| `@backstage/plugin-proxy-backend` | 0.4.16 | 0.5.1 | Minor ⚠️ |
| `@backstage/plugin-scaffolder` | 1.20.1 | 1.21.0 | Minor |
| `@backstage/plugin-scaffolder-backend` | 1.22.8 | 1.22.10 | Patch |
| `@backstage/plugin-scaffolder-backend-module-azure` | 0.1.10 | 0.1.12 | Patch |
| `@backstage/plugin-scaffolder-backend-module-bitbucket` | 0.2.8 | 0.2.10 | Patch |
| `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` | 0.1.8 | 0.1.10 | Patch |
| `@backstage/plugin-scaffolder-backend-module-bitbucket-server` | 0.1.8 | 0.1.10 | Patch |
| `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` | 0.2.19 | 0.2.21 | Patch |
| `@backstage/plugin-scaffolder-backend-module-cookiecutter` | 0.2.42 | 0.2.44 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gerrit` | 0.1.10 | 0.1.12 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gitea` | 0.1.8 | 0.1.10 | Patch |
| `@backstage/plugin-scaffolder-backend-module-github` | 0.2.8 | 0.3.1 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-gitlab` | 0.4.0 | 0.4.2 | Patch |
| `@backstage/plugin-scaffolder-backend-module-notifications` | 0.0.1 | 0.0.3 | Patch ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-rails` | 0.4.35 | 0.4.37 | Patch |
| `@backstage/plugin-scaffolder-backend-module-sentry` | 0.1.26 | 0.1.28 | Patch |
| `@backstage/plugin-scaffolder-backend-module-yeoman` | 0.3.1 | 0.3.3 | Patch |
| `@backstage/plugin-scaffolder-common` | 1.5.2 | 1.5.3 | Patch |
| `@backstage/plugin-scaffolder-node` | 0.4.4 | 0.4.6 | Patch |
| `@backstage/plugin-scaffolder-node-test-utils` | 0.1.4 | 0.1.6 | Patch |
| `@backstage/plugin-scaffolder-react` | 1.8.6 | 1.9.0 | Minor |
| `@backstage/plugin-search` | 1.4.11 | 1.4.12 | Patch |
| `@backstage/plugin-search-backend` | 1.5.9 | 1.5.11 | Patch |
| `@backstage/plugin-search-backend-module-catalog` | 0.1.24 | 0.1.26 | Patch |
| `@backstage/plugin-search-backend-module-elasticsearch` | 1.4.1 | 1.5.1 | Minor |
| `@backstage/plugin-search-backend-module-explore` | 0.1.24 | 0.1.26 | Patch |
| `@backstage/plugin-search-backend-module-pg` | 0.5.27 | 0.5.29 | Patch |
| `@backstage/plugin-search-backend-module-stack-overflow-collator` | 0.1.11 | 0.1.13 | Patch |
| `@backstage/plugin-search-backend-module-techdocs` | 0.1.23 | 0.1.25 | Patch |
| `@backstage/plugin-search-backend-node` | 1.2.23 | 1.2.25 | Patch |
| `@backstage/plugin-search-common` | 1.2.11 | 1.2.12 | Patch |
| `@backstage/plugin-search-react` | 1.7.11 | 1.7.12 | Patch |
| `@backstage/plugin-signals` | 0.0.6 | 0.0.7 | Patch ⚠️ |
| `@backstage/plugin-signals-backend` | 0.1.4 | 0.1.6 | Patch |
| `@backstage/plugin-signals-node` | 0.1.4 | 0.1.6 | Patch |
| `@backstage/plugin-signals-react` | 0.0.3 | 0.0.4 | Patch ⚠️ |
| `@backstage/plugin-techdocs` | 1.10.5 | 1.10.6 | Patch |
| `@backstage/plugin-techdocs-addons-test-utils` | 1.0.32 | 1.0.33 | Patch |
| `@backstage/plugin-techdocs-backend` | 1.10.5 | 1.10.7 | Patch |
| `@backstage/plugin-techdocs-module-addons-contrib` | 1.1.10 | 1.1.11 | Patch |
| `@backstage/plugin-techdocs-node` | 1.12.4 | 1.12.6 | Patch |
| `@backstage/plugin-techdocs-react` | 1.2.4 | 1.2.5 | Patch |
| `@backstage/plugin-user-settings` | 0.8.6 | 0.8.7 | Patch |
| `@backstage/plugin-user-settings-backend` | 0.2.17 | 0.2.19 | Patch |
| `@backstage/repo-tools` | 0.9.0 | 0.9.2 | Patch |
| `@backstage/test-utils` | 1.5.5 | 1.5.6 | Patch |
| `@backstage/theme` | 0.5.5 | 0.5.6 | Patch |
| `@techdocs/cli` | 1.8.11 | 1.8.13 | Patch |
