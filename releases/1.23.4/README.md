# Backstage Release 1.23.4

## Compared to 1.23.3 (previous patch release)

0 major bumps, 0 added, 0 removed, 117 upgraded, 146 unchanged.

### Version bumps

| Package | 1.23.3 | 1.23.4 |
| --- | --- | --- |
| `@backstage/backend-app-api` | 0.5.13 | 0.5.14 |
| `@backstage/backend-common` | 0.21.2 | 0.21.3 |
| `@backstage/backend-defaults` | 0.2.12 | 0.2.13 |
| `@backstage/backend-dynamic-feature-service` | 0.2.2 | 0.2.3 |
| `@backstage/backend-openapi-utils` | 0.1.5 | 0.1.6 |
| `@backstage/backend-plugin-api` | 0.6.12 | 0.6.13 |
| `@backstage/backend-tasks` | 0.5.17 | 0.5.18 |
| `@backstage/backend-test-utils` | 0.3.2 | 0.3.3 |
| `@backstage/plugin-adr-backend` | 0.4.9 | 0.4.10 |
| `@backstage/plugin-airbrake-backend` | 0.3.9 | 0.3.10 |
| `@backstage/plugin-app-backend` | 0.3.60 | 0.3.61 |
| `@backstage/plugin-app-node` | 0.1.12 | 0.1.13 |
| `@backstage/plugin-auth-backend` | 0.21.2 | 0.21.3 |
| `@backstage/plugin-auth-backend-module-atlassian-provider` | 0.1.4 | 0.1.5 |
| `@backstage/plugin-auth-backend-module-aws-alb-provider` | 0.1.3 | 0.1.4 |
| `@backstage/plugin-auth-backend-module-gcp-iap-provider` | 0.2.7 | 0.2.8 |
| `@backstage/plugin-auth-backend-module-github-provider` | 0.1.9 | 0.1.10 |
| `@backstage/plugin-auth-backend-module-gitlab-provider` | 0.1.9 | 0.1.10 |
| `@backstage/plugin-auth-backend-module-google-provider` | 0.1.9 | 0.1.10 |
| `@backstage/plugin-auth-backend-module-microsoft-provider` | 0.1.7 | 0.1.8 |
| `@backstage/plugin-auth-backend-module-oauth2-provider` | 0.1.9 | 0.1.10 |
| `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` | 0.1.5 | 0.1.6 |
| `@backstage/plugin-auth-backend-module-oidc-provider` | 0.1.2 | 0.1.3 |
| `@backstage/plugin-auth-backend-module-okta-provider` | 0.0.5 | 0.0.6 |
| `@backstage/plugin-auth-backend-module-pinniped-provider` | 0.1.6 | 0.1.7 |
| `@backstage/plugin-auth-backend-module-vmware-cloud-provider` | 0.1.4 | 0.1.5 |
| `@backstage/plugin-auth-node` | 0.4.7 | 0.4.8 |
| `@backstage/plugin-azure-devops-backend` | 0.5.4 | 0.5.5 |
| `@backstage/plugin-azure-sites-backend` | 0.2.2 | 0.2.3 |
| `@backstage/plugin-badges-backend` | 0.3.9 | 0.3.10 |
| `@backstage/plugin-bazaar-backend` | 0.3.10 | 0.3.11 |
| `@backstage/plugin-catalog-backend` | 1.17.2 | 1.17.3 |
| `@backstage/plugin-catalog-backend-module-aws` | 0.3.6 | 0.3.7 |
| `@backstage/plugin-catalog-backend-module-azure` | 0.1.31 | 0.1.32 |
| `@backstage/plugin-catalog-backend-module-backstage-openapi` | 0.1.5 | 0.1.6 |
| `@backstage/plugin-catalog-backend-module-bitbucket-cloud` | 0.1.27 | 0.1.28 |
| `@backstage/plugin-catalog-backend-module-bitbucket-server` | 0.1.25 | 0.1.26 |
| `@backstage/plugin-catalog-backend-module-gcp` | 0.1.12 | 0.1.13 |
| `@backstage/plugin-catalog-backend-module-gerrit` | 0.1.28 | 0.1.29 |
| `@backstage/plugin-catalog-backend-module-github` | 0.5.2 | 0.5.3 |
| `@backstage/plugin-catalog-backend-module-github-org` | 0.1.6 | 0.1.7 |
| `@backstage/plugin-catalog-backend-module-gitlab` | 0.3.9 | 0.3.10 |
| `@backstage/plugin-catalog-backend-module-incremental-ingestion` | 0.4.16 | 0.4.17 |
| `@backstage/plugin-catalog-backend-module-ldap` | 0.5.27 | 0.5.28 |
| `@backstage/plugin-catalog-backend-module-msgraph` | 0.5.19 | 0.5.20 |
| `@backstage/plugin-catalog-backend-module-openapi` | 0.1.29 | 0.1.30 |
| `@backstage/plugin-catalog-backend-module-puppetdb` | 0.1.17 | 0.1.18 |
| `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` | 0.1.9 | 0.1.10 |
| `@backstage/plugin-catalog-backend-module-unprocessed` | 0.3.9 | 0.3.10 |
| `@backstage/plugin-catalog-node` | 1.7.2 | 1.7.3 |
| `@backstage/plugin-code-coverage-backend` | 0.2.26 | 0.2.27 |
| `@backstage/plugin-devtools-backend` | 0.2.9 | 0.2.10 |
| `@backstage/plugin-entity-feedback-backend` | 0.2.9 | 0.2.10 |
| `@backstage/plugin-events-backend` | 0.2.21 | 0.2.22 |
| `@backstage/plugin-events-backend-module-aws-sqs` | 0.2.15 | 0.2.16 |
| `@backstage/plugin-events-backend-module-azure` | 0.1.22 | 0.1.23 |
| `@backstage/plugin-events-backend-module-bitbucket-cloud` | 0.1.22 | 0.1.23 |
| `@backstage/plugin-events-backend-module-gerrit` | 0.1.22 | 0.1.23 |
| `@backstage/plugin-events-backend-module-github` | 0.1.22 | 0.1.23 |
| `@backstage/plugin-events-backend-module-gitlab` | 0.1.22 | 0.1.23 |
| `@backstage/plugin-events-backend-test-utils` | 0.1.22 | 0.1.23 |
| `@backstage/plugin-events-node` | 0.2.21 | 0.2.22 |
| `@backstage/plugin-explore-backend` | 0.0.22 | 0.0.23 |
| `@backstage/plugin-jenkins-backend` | 0.3.6 | 0.3.7 |
| `@backstage/plugin-kafka-backend` | 0.3.10 | 0.3.11 |
| `@backstage/plugin-kubernetes-backend` | 0.15.2 | 0.15.3 |
| `@backstage/plugin-kubernetes-node` | 0.1.6 | 0.1.7 |
| `@backstage/plugin-lighthouse-backend` | 0.4.4 | 0.4.5 |
| `@backstage/plugin-linguist-backend` | 0.5.9 | 0.5.10 |
| `@backstage/plugin-nomad-backend` | 0.1.14 | 0.1.15 |
| `@backstage/plugin-notifications-backend` | 0.0.3 | 0.0.4 |
| `@backstage/plugin-notifications-node` | 0.0.3 | 0.0.4 |
| `@backstage/plugin-periskop-backend` | 0.2.10 | 0.2.11 |
| `@backstage/plugin-permission-backend` | 0.5.35 | 0.5.36 |
| `@backstage/plugin-permission-backend-module-allow-all-policy` | 0.1.9 | 0.1.10 |
| `@backstage/plugin-permission-node` | 0.7.23 | 0.7.24 |
| `@backstage/plugin-playlist-backend` | 0.3.16 | 0.3.17 |
| `@backstage/plugin-proxy-backend` | 0.4.10 | 0.4.11 |
| `@backstage/plugin-rollbar-backend` | 0.1.57 | 0.1.58 |
| `@backstage/plugin-scaffolder-backend` | 1.21.2 | 1.21.3 |
| `@backstage/plugin-scaffolder-backend-module-azure` | 0.1.4 | 0.1.5 |
| `@backstage/plugin-scaffolder-backend-module-bitbucket` | 0.2.2 | 0.2.3 |
| `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` | 0.1.2 | 0.1.3 |
| `@backstage/plugin-scaffolder-backend-module-bitbucket-server` | 0.1.2 | 0.1.3 |
| `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` | 0.2.13 | 0.2.14 |
| `@backstage/plugin-scaffolder-backend-module-cookiecutter` | 0.2.36 | 0.2.37 |
| `@backstage/plugin-scaffolder-backend-module-gerrit` | 0.1.4 | 0.1.5 |
| `@backstage/plugin-scaffolder-backend-module-gitea` | 0.1.2 | 0.1.3 |
| `@backstage/plugin-scaffolder-backend-module-github` | 0.2.2 | 0.2.3 |
| `@backstage/plugin-scaffolder-backend-module-gitlab` | 0.2.15 | 0.2.16 |
| `@backstage/plugin-scaffolder-backend-module-rails` | 0.4.29 | 0.4.30 |
| `@backstage/plugin-scaffolder-backend-module-sentry` | 0.1.20 | 0.1.21 |
| `@backstage/plugin-scaffolder-backend-module-yeoman` | 0.2.33 | 0.2.34 |
| `@backstage/plugin-scaffolder-node` | 0.3.2 | 0.3.3 |
| `@backstage/plugin-search-backend` | 1.5.2 | 1.5.3 |
| `@backstage/plugin-search-backend-module-catalog` | 0.1.16 | 0.1.17 |
| `@backstage/plugin-search-backend-module-elasticsearch` | 1.3.15 | 1.3.16 |
| `@backstage/plugin-search-backend-module-explore` | 0.1.16 | 0.1.17 |
| `@backstage/plugin-search-backend-module-pg` | 0.5.21 | 0.5.22 |
| `@backstage/plugin-search-backend-module-stack-overflow-collator` | 0.1.5 | 0.1.6 |
| `@backstage/plugin-search-backend-module-techdocs` | 0.1.16 | 0.1.17 |
| `@backstage/plugin-search-backend-node` | 1.2.16 | 1.2.17 |
| `@backstage/plugin-signals-backend` | 0.0.3 | 0.0.4 |
| `@backstage/plugin-signals-node` | 0.0.3 | 0.0.4 |
| `@backstage/plugin-sonarqube-backend` | 0.2.14 | 0.2.15 |
| `@backstage/plugin-stack-overflow-backend` | 0.2.16 | 0.2.17 |
| `@backstage/plugin-tech-insights-backend` | 0.5.26 | 0.5.27 |
| `@backstage/plugin-tech-insights-backend-module-jsonfc` | 0.1.44 | 0.1.45 |
| `@backstage/plugin-tech-insights-node` | 0.4.18 | 0.4.19 |
| `@backstage/plugin-techdocs-backend` | 1.9.5 | 1.9.6 |
| `@backstage/plugin-techdocs-node` | 1.11.4 | 1.11.5 |
| `@backstage/plugin-todo-backend` | 0.3.10 | 0.3.11 |
| `@backstage/plugin-user-settings-backend` | 0.2.11 | 0.2.12 |
| `@backstage/plugin-vault-backend` | 0.4.5 | 0.4.6 |
| `@backstage/plugin-vault-node` | 0.1.5 | 0.1.6 |
| `@backstage/repo-tools` | 0.6.2 | 0.6.3 |
| `@techdocs/cli` | 1.8.4 | 1.8.5 |

## Compared to 1.22.3 (previous minor release)

1 major bumps, 13 added, 1 removed, 232 upgraded, 17 unchanged.

### ⚠️ Major version bumps

| Package | 1.22.3 | 1.23.4 |
| --- | --- | --- |
| `@backstage/plugin-dynatrace` | **8.0.3** | **9.0.0** |

### 🆕 Added packages

| Package | Version |
| --- | --- |
| `@backstage/plugin-auth-backend-module-aws-alb-provider` | 0.1.4 |
| `@backstage/plugin-auth-backend-module-oidc-provider` | 0.1.3 |
| `@backstage/plugin-notifications` | 0.0.1 |
| `@backstage/plugin-notifications-backend` | 0.0.4 |
| `@backstage/plugin-notifications-common` | 0.0.1 |
| `@backstage/plugin-notifications-node` | 0.0.4 |
| `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` | 0.1.3 |
| `@backstage/plugin-scaffolder-backend-module-bitbucket-server` | 0.1.3 |
| `@backstage/plugin-scaffolder-backend-module-gitea` | 0.1.3 |
| `@backstage/plugin-signals` | 0.0.1 |
| `@backstage/plugin-signals-backend` | 0.0.4 |
| `@backstage/plugin-signals-node` | 0.0.4 |
| `@backstage/plugin-signals-react` | 0.0.1 |

### ❌ Removed packages

| Package | Last version |
| --- | --- |
| `@backstage/plugin-catalog-backend-module-bitbucket` | 0.2.24 |

### Version bumps

| Package | 1.22.3 | 1.23.4 |
| --- | --- | --- |
| `@backstage/app-defaults` | 1.4.7 | 1.5.0 |
| `@backstage/backend-app-api` | 0.5.10 | 0.5.14 |
| `@backstage/backend-common` | 0.20.2 | 0.21.3 |
| `@backstage/backend-defaults` | 0.2.9 | 0.2.13 |
| `@backstage/backend-dev-utils` | 0.1.3 | 0.1.4 |
| `@backstage/backend-dynamic-feature-service` | 0.1.0 | 0.2.3 |
| `@backstage/backend-openapi-utils` | 0.1.2 | 0.1.6 |
| `@backstage/backend-plugin-api` | 0.6.9 | 0.6.13 |
| `@backstage/backend-tasks` | 0.5.14 | 0.5.18 |
| `@backstage/backend-test-utils` | 0.2.10 | 0.3.3 |
| `@backstage/catalog-client` | 1.5.2 | 1.6.0 |
| `@backstage/catalog-model` | 1.4.3 | 1.4.4 |
| `@backstage/cli` | 0.25.1 | 0.25.2 |
| `@backstage/cli-node` | 0.2.2 | 0.2.3 |
| `@backstage/codemods` | 0.1.46 | 0.1.47 |
| `@backstage/config-loader` | 1.6.1 | 1.6.2 |
| `@backstage/core-app-api` | 1.11.3 | 1.12.0 |
| `@backstage/core-compat-api` | 0.1.1 | 0.2.0 |
| `@backstage/core-components` | 0.13.10 | 0.14.0 |
| `@backstage/core-plugin-api` | 1.8.2 | 1.9.0 |
| `@backstage/create-app` | 0.5.10 | 0.5.11 |
| `@backstage/dev-utils` | 1.0.26 | 1.0.27 |
| `@backstage/e2e-test-utils` | 0.1.0 | 0.1.1 |
| `@backstage/eslint-plugin` | 0.1.4 | 0.1.5 |
| `@backstage/frontend-app-api` | 0.5.0 | 0.6.0 |
| `@backstage/frontend-plugin-api` | 0.5.0 | 0.6.0 |
| `@backstage/frontend-test-utils` | 0.1.1 | 0.1.2 |
| `@backstage/integration` | 1.8.0 | 1.9.0 |
| `@backstage/integration-aws-node` | 0.1.8 | 0.1.9 |
| `@backstage/integration-react` | 1.1.23 | 1.1.24 |
| `@backstage/plugin-adr` | 0.6.12 | 0.6.13 |
| `@backstage/plugin-adr-backend` | 0.4.6 | 0.4.10 |
| `@backstage/plugin-adr-common` | 0.2.19 | 0.2.20 |
| `@backstage/plugin-airbrake` | 0.3.29 | 0.3.30 |
| `@backstage/plugin-airbrake-backend` | 0.3.6 | 0.3.10 |
| `@backstage/plugin-allure` | 0.1.45 | 0.1.46 |
| `@backstage/plugin-analytics-module-ga` | 0.1.37 | 0.2.0 |
| `@backstage/plugin-analytics-module-ga4` | 0.1.8 | 0.2.0 |
| `@backstage/plugin-analytics-module-newrelic-browser` | 0.0.6 | 0.1.0 |
| `@backstage/plugin-apache-airflow` | 0.2.19 | 0.2.20 |
| `@backstage/plugin-api-docs` | 0.10.3 | 0.11.0 |
| `@backstage/plugin-api-docs-module-protoc-gen-doc` | 0.1.5 | 0.1.6 |
| `@backstage/plugin-apollo-explorer` | 0.1.19 | 0.1.20 |
| `@backstage/plugin-app-backend` | 0.3.57 | 0.3.61 |
| `@backstage/plugin-app-node` | 0.1.9 | 0.1.13 |
| `@backstage/plugin-app-visualizer` | 0.1.0 | 0.1.1 |
| `@backstage/plugin-auth-backend` | 0.20.3 | 0.21.3 |
| `@backstage/plugin-auth-backend-module-atlassian-provider` | 0.1.1 | 0.1.5 |
| `@backstage/plugin-auth-backend-module-gcp-iap-provider` | 0.2.3 | 0.2.8 |
| `@backstage/plugin-auth-backend-module-github-provider` | 0.1.6 | 0.1.10 |
| `@backstage/plugin-auth-backend-module-gitlab-provider` | 0.1.6 | 0.1.10 |
| `@backstage/plugin-auth-backend-module-google-provider` | 0.1.6 | 0.1.10 |
| `@backstage/plugin-auth-backend-module-microsoft-provider` | 0.1.4 | 0.1.8 |
| `@backstage/plugin-auth-backend-module-oauth2-provider` | 0.1.6 | 0.1.10 |
| `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` | 0.1.1 | 0.1.6 |
| `@backstage/plugin-auth-backend-module-okta-provider` | 0.0.2 | 0.0.6 |
| `@backstage/plugin-auth-backend-module-pinniped-provider` | 0.1.3 | 0.1.7 |
| `@backstage/plugin-auth-backend-module-vmware-cloud-provider` | 0.1.1 | 0.1.5 |
| `@backstage/plugin-auth-node` | 0.4.3 | 0.4.8 |
| `@backstage/plugin-azure-devops` | 0.3.11 | 0.3.12 |
| `@backstage/plugin-azure-devops-backend` | 0.5.1 | 0.5.5 |
| `@backstage/plugin-azure-sites` | 0.1.18 | 0.1.19 |
| `@backstage/plugin-azure-sites-backend` | 0.1.19 | 0.2.3 |
| `@backstage/plugin-azure-sites-common` | 0.1.1 | 0.1.2 |
| `@backstage/plugin-badges` | 0.2.53 | 0.2.54 |
| `@backstage/plugin-badges-backend` | 0.3.6 | 0.3.10 |
| `@backstage/plugin-bazaar` | 0.2.21 | 0.2.22 |
| `@backstage/plugin-bazaar-backend` | 0.3.7 | 0.3.11 |
| `@backstage/plugin-bitbucket-cloud-common` | 0.2.15 | 0.2.16 |
| `@backstage/plugin-bitrise` | 0.1.56 | 0.1.57 |
| `@backstage/plugin-catalog` | 1.16.1 | 1.17.0 |
| `@backstage/plugin-catalog-backend` | 1.16.2 | 1.17.3 |
| `@backstage/plugin-catalog-backend-module-aws` | 0.3.3 | 0.3.7 |
| `@backstage/plugin-catalog-backend-module-azure` | 0.1.28 | 0.1.32 |
| `@backstage/plugin-catalog-backend-module-backstage-openapi` | 0.1.2 | 0.1.6 |
| `@backstage/plugin-catalog-backend-module-bitbucket-cloud` | 0.1.24 | 0.1.28 |
| `@backstage/plugin-catalog-backend-module-bitbucket-server` | 0.1.22 | 0.1.26 |
| `@backstage/plugin-catalog-backend-module-gcp` | 0.1.9 | 0.1.13 |
| `@backstage/plugin-catalog-backend-module-gerrit` | 0.1.25 | 0.1.29 |
| `@backstage/plugin-catalog-backend-module-github` | 0.4.7 | 0.5.3 |
| `@backstage/plugin-catalog-backend-module-github-org` | 0.1.3 | 0.1.7 |
| `@backstage/plugin-catalog-backend-module-gitlab` | 0.3.6 | 0.3.10 |
| `@backstage/plugin-catalog-backend-module-incremental-ingestion` | 0.4.13 | 0.4.17 |
| `@backstage/plugin-catalog-backend-module-ldap` | 0.5.24 | 0.5.28 |
| `@backstage/plugin-catalog-backend-module-msgraph` | 0.5.16 | 0.5.20 |
| `@backstage/plugin-catalog-backend-module-openapi` | 0.1.26 | 0.1.30 |
| `@backstage/plugin-catalog-backend-module-puppetdb` | 0.1.14 | 0.1.18 |
| `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` | 0.1.6 | 0.1.10 |
| `@backstage/plugin-catalog-backend-module-unprocessed` | 0.3.6 | 0.3.10 |
| `@backstage/plugin-catalog-common` | 1.0.20 | 1.0.21 |
| `@backstage/plugin-catalog-graph` | 0.3.3 | 0.4.0 |
| `@backstage/plugin-catalog-import` | 0.10.5 | 0.10.6 |
| `@backstage/plugin-catalog-node` | 1.6.1 | 1.7.3 |
| `@backstage/plugin-catalog-react` | 1.9.3 | 1.10.0 |
| `@backstage/plugin-catalog-unprocessed-entities` | 0.1.7 | 0.1.8 |
| `@backstage/plugin-cicd-statistics` | 0.1.31 | 0.1.32 |
| `@backstage/plugin-cicd-statistics-module-gitlab` | 0.1.25 | 0.1.26 |
| `@backstage/plugin-circleci` | 0.3.29 | 0.3.30 |
| `@backstage/plugin-cloudbuild` | 0.3.29 | 0.4.0 |
| `@backstage/plugin-code-climate` | 0.1.29 | 0.1.30 |
| `@backstage/plugin-code-coverage` | 0.2.22 | 0.2.23 |
| `@backstage/plugin-code-coverage-backend` | 0.2.23 | 0.2.27 |
| `@backstage/plugin-codescene` | 0.1.21 | 0.1.22 |
| `@backstage/plugin-config-schema` | 0.1.49 | 0.1.50 |
| `@backstage/plugin-cost-insights` | 0.12.18 | 0.12.19 |
| `@backstage/plugin-devtools` | 0.1.8 | 0.1.9 |
| `@backstage/plugin-devtools-backend` | 0.2.6 | 0.2.10 |
| `@backstage/plugin-entity-feedback` | 0.2.12 | 0.2.13 |
| `@backstage/plugin-entity-feedback-backend` | 0.2.6 | 0.2.10 |
| `@backstage/plugin-entity-validation` | 0.1.14 | 0.1.15 |
| `@backstage/plugin-events-backend` | 0.2.18 | 0.2.22 |
| `@backstage/plugin-events-backend-module-aws-sqs` | 0.2.12 | 0.2.16 |
| `@backstage/plugin-events-backend-module-azure` | 0.1.19 | 0.1.23 |
| `@backstage/plugin-events-backend-module-bitbucket-cloud` | 0.1.19 | 0.1.23 |
| `@backstage/plugin-events-backend-module-gerrit` | 0.1.19 | 0.1.23 |
| `@backstage/plugin-events-backend-module-github` | 0.1.19 | 0.1.23 |
| `@backstage/plugin-events-backend-module-gitlab` | 0.1.19 | 0.1.23 |
| `@backstage/plugin-events-backend-test-utils` | 0.1.19 | 0.1.23 |
| `@backstage/plugin-events-node` | 0.2.18 | 0.2.22 |
| `@backstage/plugin-explore` | 0.4.15 | 0.4.16 |
| `@backstage/plugin-explore-backend` | 0.0.19 | 0.0.23 |
| `@backstage/plugin-explore-react` | 0.0.35 | 0.0.36 |
| `@backstage/plugin-firehydrant` | 0.2.13 | 0.2.14 |
| `@backstage/plugin-fossa` | 0.2.61 | 0.2.62 |
| `@backstage/plugin-gcalendar` | 0.3.22 | 0.3.23 |
| `@backstage/plugin-gcp-projects` | 0.3.45 | 0.3.46 |
| `@backstage/plugin-git-release-manager` | 0.3.41 | 0.3.42 |
| `@backstage/plugin-github-actions` | 0.6.10 | 0.6.11 |
| `@backstage/plugin-github-deployments` | 0.1.60 | 0.1.61 |
| `@backstage/plugin-github-issues` | 0.2.18 | 0.2.19 |
| `@backstage/plugin-github-pull-requests-board` | 0.1.23 | 0.1.24 |
| `@backstage/plugin-gitops-profiles` | 0.3.44 | 0.3.45 |
| `@backstage/plugin-gocd` | 0.1.35 | 0.1.36 |
| `@backstage/plugin-graphiql` | 0.3.2 | 0.3.3 |
| `@backstage/plugin-graphql-voyager` | 0.1.11 | 0.1.12 |
| `@backstage/plugin-home` | 0.6.1 | 0.6.2 |
| `@backstage/plugin-home-react` | 0.1.7 | 0.1.8 |
| `@backstage/plugin-ilert` | 0.2.18 | 0.2.19 |
| `@backstage/plugin-jenkins` | 0.9.4 | 0.9.5 |
| `@backstage/plugin-jenkins-backend` | 0.3.3 | 0.3.7 |
| `@backstage/plugin-jenkins-common` | 0.1.23 | 0.1.24 |
| `@backstage/plugin-kafka` | 0.3.29 | 0.3.30 |
| `@backstage/plugin-kafka-backend` | 0.3.7 | 0.3.11 |
| `@backstage/plugin-kubernetes` | 0.11.4 | 0.11.5 |
| `@backstage/plugin-kubernetes-backend` | 0.14.1 | 0.15.3 |
| `@backstage/plugin-kubernetes-cluster` | 0.0.5 | 0.0.6 |
| `@backstage/plugin-kubernetes-common` | 0.7.3 | 0.7.4 |
| `@backstage/plugin-kubernetes-node` | 0.1.3 | 0.1.7 |
| `@backstage/plugin-kubernetes-react` | 0.2.1 | 0.3.0 |
| `@backstage/plugin-lighthouse` | 0.4.14 | 0.4.15 |
| `@backstage/plugin-lighthouse-backend` | 0.4.1 | 0.4.5 |
| `@backstage/plugin-linguist` | 0.1.14 | 0.1.15 |
| `@backstage/plugin-linguist-backend` | 0.5.6 | 0.5.10 |
| `@backstage/plugin-microsoft-calendar` | 0.1.11 | 0.1.12 |
| `@backstage/plugin-newrelic` | 0.3.44 | 0.3.45 |
| `@backstage/plugin-newrelic-dashboard` | 0.3.4 | 0.3.5 |
| `@backstage/plugin-nomad` | 0.1.10 | 0.1.11 |
| `@backstage/plugin-nomad-backend` | 0.1.11 | 0.1.15 |
| `@backstage/plugin-octopus-deploy` | 0.2.11 | 0.2.12 |
| `@backstage/plugin-opencost` | 0.2.4 | 0.2.5 |
| `@backstage/plugin-org` | 0.6.19 | 0.6.20 |
| `@backstage/plugin-org-react` | 0.1.18 | 0.1.19 |
| `@backstage/plugin-pagerduty` | 0.7.1 | 0.7.2 |
| `@backstage/plugin-periskop` | 0.1.27 | 0.1.28 |
| `@backstage/plugin-periskop-backend` | 0.2.7 | 0.2.11 |
| `@backstage/plugin-permission-backend` | 0.5.32 | 0.5.36 |
| `@backstage/plugin-permission-backend-module-allow-all-policy` | 0.1.6 | 0.1.10 |
| `@backstage/plugin-permission-node` | 0.7.20 | 0.7.24 |
| `@backstage/plugin-permission-react` | 0.4.19 | 0.4.20 |
| `@backstage/plugin-playlist` | 0.2.3 | 0.2.4 |
| `@backstage/plugin-playlist-backend` | 0.3.13 | 0.3.17 |
| `@backstage/plugin-proxy-backend` | 0.4.7 | 0.4.11 |
| `@backstage/plugin-puppetdb` | 0.1.12 | 0.1.13 |
| `@backstage/plugin-rollbar` | 0.4.29 | 0.4.30 |
| `@backstage/plugin-rollbar-backend` | 0.1.54 | 0.1.58 |
| `@backstage/plugin-scaffolder` | 1.17.1 | 1.18.0 |
| `@backstage/plugin-scaffolder-backend` | 1.20.0 | 1.21.3 |
| `@backstage/plugin-scaffolder-backend-module-azure` | 0.1.1 | 0.1.5 |
| `@backstage/plugin-scaffolder-backend-module-bitbucket` | 0.1.1 | 0.2.3 |
| `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` | 0.2.10 | 0.2.14 |
| `@backstage/plugin-scaffolder-backend-module-cookiecutter` | 0.2.33 | 0.2.37 |
| `@backstage/plugin-scaffolder-backend-module-gerrit` | 0.1.1 | 0.1.5 |
| `@backstage/plugin-scaffolder-backend-module-github` | 0.1.1 | 0.2.3 |
| `@backstage/plugin-scaffolder-backend-module-gitlab` | 0.2.12 | 0.2.16 |
| `@backstage/plugin-scaffolder-backend-module-rails` | 0.4.26 | 0.4.30 |
| `@backstage/plugin-scaffolder-backend-module-sentry` | 0.1.17 | 0.1.21 |
| `@backstage/plugin-scaffolder-backend-module-yeoman` | 0.2.30 | 0.2.34 |
| `@backstage/plugin-scaffolder-common` | 1.4.5 | 1.5.0 |
| `@backstage/plugin-scaffolder-node` | 0.2.10 | 0.3.3 |
| `@backstage/plugin-scaffolder-react` | 1.7.1 | 1.8.0 |
| `@backstage/plugin-search` | 1.4.5 | 1.4.6 |
| `@backstage/plugin-search-backend` | 1.4.9 | 1.5.3 |
| `@backstage/plugin-search-backend-module-catalog` | 0.1.13 | 0.1.17 |
| `@backstage/plugin-search-backend-module-elasticsearch` | 1.3.12 | 1.3.16 |
| `@backstage/plugin-search-backend-module-explore` | 0.1.13 | 0.1.17 |
| `@backstage/plugin-search-backend-module-pg` | 0.5.18 | 0.5.22 |
| `@backstage/plugin-search-backend-module-stack-overflow-collator` | 0.1.2 | 0.1.6 |
| `@backstage/plugin-search-backend-module-techdocs` | 0.1.13 | 0.1.17 |
| `@backstage/plugin-search-backend-node` | 1.2.13 | 1.2.17 |
| `@backstage/plugin-search-react` | 1.7.5 | 1.7.6 |
| `@backstage/plugin-sentry` | 0.5.14 | 0.5.15 |
| `@backstage/plugin-shortcuts` | 0.3.18 | 0.3.19 |
| `@backstage/plugin-sonarqube` | 0.7.11 | 0.7.12 |
| `@backstage/plugin-sonarqube-backend` | 0.2.11 | 0.2.15 |
| `@backstage/plugin-sonarqube-react` | 0.1.12 | 0.1.13 |
| `@backstage/plugin-splunk-on-call` | 0.4.18 | 0.4.19 |
| `@backstage/plugin-stack-overflow` | 0.1.24 | 0.1.25 |
| `@backstage/plugin-stack-overflow-backend` | 0.2.13 | 0.2.17 |
| `@backstage/plugin-stackstorm` | 0.1.10 | 0.1.11 |
| `@backstage/plugin-tech-insights` | 0.3.21 | 0.3.22 |
| `@backstage/plugin-tech-insights-backend` | 0.5.23 | 0.5.27 |
| `@backstage/plugin-tech-insights-backend-module-jsonfc` | 0.1.41 | 0.1.45 |
| `@backstage/plugin-tech-insights-node` | 0.4.15 | 0.4.19 |
| `@backstage/plugin-tech-radar` | 0.6.12 | 0.6.13 |
| `@backstage/plugin-techdocs` | 1.9.3 | 1.10.0 |
| `@backstage/plugin-techdocs-addons-test-utils` | 1.0.26 | 1.0.27 |
| `@backstage/plugin-techdocs-backend` | 1.9.2 | 1.9.6 |
| `@backstage/plugin-techdocs-module-addons-contrib` | 1.1.4 | 1.1.5 |
| `@backstage/plugin-techdocs-node` | 1.11.1 | 1.11.5 |
| `@backstage/plugin-techdocs-react` | 1.1.15 | 1.1.16 |
| `@backstage/plugin-todo` | 0.2.33 | 0.2.34 |
| `@backstage/plugin-todo-backend` | 0.3.7 | 0.3.11 |
| `@backstage/plugin-user-settings` | 0.8.0 | 0.8.1 |
| `@backstage/plugin-user-settings-backend` | 0.2.8 | 0.2.12 |
| `@backstage/plugin-vault` | 0.1.24 | 0.1.25 |
| `@backstage/plugin-vault-backend` | 0.4.2 | 0.4.6 |
| `@backstage/plugin-vault-node` | 0.1.2 | 0.1.6 |
| `@backstage/plugin-xcmetrics` | 0.2.47 | 0.2.48 |
| `@backstage/repo-tools` | 0.5.2 | 0.6.3 |
| `@backstage/test-utils` | 1.4.7 | 1.5.0 |
| `@backstage/theme` | 0.5.0 | 0.5.1 |
| `@techdocs/cli` | 1.8.1 | 1.8.5 |
