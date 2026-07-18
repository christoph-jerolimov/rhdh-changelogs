# Backstage Release 1.4.0

## Compared to 1.3.1 (previous minor release)

7 added, 0 removed, 143 upgraded (⚠️ need extra attention: 6 major, 15 0.x minor, 2 0.0.x patch), 5 unchanged.

### ⚠️ Major version bumps

| Package | 1.3.1 | 1.4.0 |
| --- | --- | --- |
| `@backstage/plugin-search` | **0.9.0** | **1.0.0** |
| `@backstage/plugin-search-backend` | **0.5.3** | **1.0.0** |
| `@backstage/plugin-search-backend-module-elasticsearch` | **0.1.5** | **1.0.0** |
| `@backstage/plugin-search-backend-node` | **0.6.2** | **1.0.0** |
| `@backstage/plugin-search-common` | **0.3.5** | **1.0.0** |
| `@backstage/plugin-search-react` | **0.2.1** | **1.0.0** |

### 🆕 Added packages

| Package | Version |
| --- | --- |
| `@backstage/backend-app-api` | 0.1.0 |
| `@backstage/backend-plugin-api` | 0.1.0 |
| `@backstage/plugin-api-docs-module-protoc-gen-doc` | 0.1.0 |
| `@backstage/plugin-apollo-explorer` | 0.1.0 |
| `@backstage/plugin-catalog-backend-module-openapi` | 0.1.0 |
| `@backstage/plugin-catalog-node` | 1.0.0 |
| `@backstage/plugin-cost-insights-common` | 0.1.0 |

### Version bumps

| Package | 1.3.1 | 1.4.0 | Type |
| --- | --- | --- | --- |
| `@backstage/app-defaults` | 1.0.3 | 1.0.4 | Patch |
| `@backstage/backend-common` | 0.14.0 | 0.14.1 | Patch |
| `@backstage/backend-tasks` | 0.3.2 | 0.3.3 | Patch |
| `@backstage/backend-test-utils` | 0.1.25 | 0.1.26 | Patch |
| `@backstage/catalog-client` | 1.0.3 | 1.0.4 | Patch |
| `@backstage/catalog-model` | 1.0.3 | 1.1.0 | Minor |
| `@backstage/cli` | 0.17.2 | 0.18.0 | Minor ⚠️ |
| `@backstage/config-loader` | 1.1.2 | 1.1.3 | Patch |
| `@backstage/core-app-api` | 1.0.3 | 1.0.4 | Patch |
| `@backstage/core-components` | 0.9.5 | 0.10.0 | Minor ⚠️ |
| `@backstage/core-plugin-api` | 1.0.3 | 1.0.4 | Patch |
| `@backstage/create-app` | 0.4.28 | 0.4.29 | Patch |
| `@backstage/dev-utils` | 1.0.3 | 1.0.4 | Patch |
| `@backstage/errors` | 1.0.0 | 1.1.0 | Minor |
| `@backstage/integration` | 1.2.1 | 1.2.2 | Patch |
| `@backstage/integration-react` | 1.1.1 | 1.1.2 | Patch |
| `@backstage/plugin-adr` | 0.1.1 | 0.1.2 | Patch |
| `@backstage/plugin-adr-backend` | 0.1.1 | 0.1.2 | Patch |
| `@backstage/plugin-adr-common` | 0.1.1 | 0.1.2 | Patch |
| `@backstage/plugin-airbrake` | 0.3.6 | 0.3.7 | Patch |
| `@backstage/plugin-airbrake-backend` | 0.2.6 | 0.2.7 | Patch |
| `@backstage/plugin-allure` | 0.1.22 | 0.1.23 | Patch |
| `@backstage/plugin-analytics-module-ga` | 0.1.17 | 0.1.18 | Patch |
| `@backstage/plugin-apache-airflow` | 0.1.14 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-api-docs` | 0.8.6 | 0.8.7 | Patch |
| `@backstage/plugin-app-backend` | 0.3.33 | 0.3.34 | Patch |
| `@backstage/plugin-auth-backend` | 0.14.1 | 0.15.0 | Minor ⚠️ |
| `@backstage/plugin-auth-node` | 0.2.2 | 0.2.3 | Patch |
| `@backstage/plugin-azure-devops` | 0.1.22 | 0.1.23 | Patch |
| `@backstage/plugin-azure-devops-backend` | 0.3.12 | 0.3.13 | Patch |
| `@backstage/plugin-azure-devops-common` | 0.2.3 | 0.2.4 | Patch |
| `@backstage/plugin-badges` | 0.2.30 | 0.2.31 | Patch |
| `@backstage/plugin-badges-backend` | 0.1.27 | 0.1.28 | Patch |
| `@backstage/plugin-bazaar` | 0.1.21 | 0.1.22 | Patch |
| `@backstage/plugin-bazaar-backend` | 0.1.17 | 0.1.18 | Patch |
| `@backstage/plugin-bitbucket-cloud-common` | 0.1.0 | 0.1.1 | Patch |
| `@backstage/plugin-bitrise` | 0.1.33 | 0.1.34 | Patch |
| `@backstage/plugin-catalog` | 1.3.0 | 1.4.0 | Minor |
| `@backstage/plugin-catalog-backend` | 1.2.0 | 1.3.0 | Minor |
| `@backstage/plugin-catalog-backend-module-aws` | 0.1.6 | 0.1.7 | Patch |
| `@backstage/plugin-catalog-backend-module-azure` | 0.1.4 | 0.1.5 | Patch |
| `@backstage/plugin-catalog-backend-module-bitbucket` | 0.2.0 | 0.2.1 | Patch |
| `@backstage/plugin-catalog-backend-module-bitbucket-cloud` | 0.1.0 | 0.1.1 | Patch |
| `@backstage/plugin-catalog-backend-module-gerrit` | 0.1.1 | 0.1.2 | Patch |
| `@backstage/plugin-catalog-backend-module-github` | 0.1.4 | 0.1.5 | Patch |
| `@backstage/plugin-catalog-backend-module-gitlab` | 0.1.4 | 0.1.5 | Patch |
| `@backstage/plugin-catalog-backend-module-ldap` | 0.5.0 | 0.5.1 | Patch |
| `@backstage/plugin-catalog-backend-module-msgraph` | 0.3.3 | 0.4.0 | Minor ⚠️ |
| `@backstage/plugin-catalog-common` | 1.0.3 | 1.0.4 | Patch |
| `@backstage/plugin-catalog-graph` | 0.2.18 | 0.2.19 | Patch |
| `@backstage/plugin-catalog-graphql` | 0.3.10 | 0.3.11 | Patch |
| `@backstage/plugin-catalog-import` | 0.8.9 | 0.8.10 | Patch |
| `@backstage/plugin-catalog-react` | 1.1.1 | 1.1.2 | Patch |
| `@backstage/plugin-cicd-statistics` | 0.1.8 | 0.1.9 | Patch |
| `@backstage/plugin-cicd-statistics-module-gitlab` | 0.1.2 | 0.1.3 | Patch |
| `@backstage/plugin-circleci` | 0.3.6 | 0.3.7 | Patch |
| `@backstage/plugin-cloudbuild` | 0.3.6 | 0.3.7 | Patch |
| `@backstage/plugin-code-climate` | 0.1.6 | 0.1.7 | Patch |
| `@backstage/plugin-code-coverage` | 0.1.33 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-code-coverage-backend` | 0.1.31 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-codescene` | 0.1.1 | 0.1.2 | Patch |
| `@backstage/plugin-config-schema` | 0.1.29 | 0.1.30 | Patch |
| `@backstage/plugin-cost-insights` | 0.11.28 | 0.11.29 | Patch |
| `@backstage/plugin-dynatrace` | 0.1.0 | 0.1.1 | Patch |
| `@backstage/plugin-explore` | 0.3.37 | 0.3.38 | Patch |
| `@backstage/plugin-explore-react` | 0.0.18 | 0.0.19 | Patch ⚠️ |
| `@backstage/plugin-firehydrant` | 0.1.23 | 0.1.24 | Patch |
| `@backstage/plugin-fossa` | 0.2.38 | 0.2.39 | Patch |
| `@backstage/plugin-gcalendar` | 0.3.2 | 0.3.3 | Patch |
| `@backstage/plugin-gcp-projects` | 0.3.25 | 0.3.26 | Patch |
| `@backstage/plugin-git-release-manager` | 0.3.19 | 0.3.20 | Patch |
| `@backstage/plugin-github-actions` | 0.5.6 | 0.5.7 | Patch |
| `@backstage/plugin-github-deployments` | 0.1.37 | 0.1.38 | Patch |
| `@backstage/plugin-github-pull-requests-board` | 0.1.0 | 0.1.1 | Patch |
| `@backstage/plugin-gitops-profiles` | 0.3.24 | 0.3.25 | Patch |
| `@backstage/plugin-gocd` | 0.1.12 | 0.1.13 | Patch |
| `@backstage/plugin-graphiql` | 0.2.38 | 0.2.39 | Patch |
| `@backstage/plugin-graphql-backend` | 0.1.23 | 0.1.24 | Patch |
| `@backstage/plugin-home` | 0.4.22 | 0.4.23 | Patch |
| `@backstage/plugin-ilert` | 0.1.32 | 0.1.33 | Patch |
| `@backstage/plugin-jenkins` | 0.7.5 | 0.7.6 | Patch |
| `@backstage/plugin-jenkins-backend` | 0.1.23 | 0.1.24 | Patch |
| `@backstage/plugin-jenkins-common` | 0.1.5 | 0.1.6 | Patch |
| `@backstage/plugin-kafka` | 0.3.6 | 0.3.7 | Patch |
| `@backstage/plugin-kafka-backend` | 0.2.26 | 0.2.27 | Patch |
| `@backstage/plugin-kubernetes` | 0.6.6 | 0.7.0 | Minor ⚠️ |
| `@backstage/plugin-kubernetes-backend` | 0.6.0 | 0.7.0 | Minor ⚠️ |
| `@backstage/plugin-kubernetes-common` | 0.3.0 | 0.4.0 | Minor ⚠️ |
| `@backstage/plugin-lighthouse` | 0.3.6 | 0.3.7 | Patch |
| `@backstage/plugin-newrelic` | 0.3.24 | 0.3.25 | Patch |
| `@backstage/plugin-newrelic-dashboard` | 0.1.14 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-org` | 0.5.6 | 0.5.7 | Patch |
| `@backstage/plugin-pagerduty` | 0.4.0 | 0.5.0 | Minor ⚠️ |
| `@backstage/plugin-periskop` | 0.1.4 | 0.1.5 | Patch |
| `@backstage/plugin-periskop-backend` | 0.1.4 | 0.1.5 | Patch |
| `@backstage/plugin-permission-backend` | 0.5.8 | 0.5.9 | Patch |
| `@backstage/plugin-permission-common` | 0.6.2 | 0.6.3 | Patch |
| `@backstage/plugin-permission-node` | 0.6.2 | 0.6.3 | Patch |
| `@backstage/plugin-permission-react` | 0.4.2 | 0.4.3 | Patch |
| `@backstage/plugin-proxy-backend` | 0.2.27 | 0.2.28 | Patch |
| `@backstage/plugin-rollbar` | 0.4.6 | 0.4.7 | Patch |
| `@backstage/plugin-rollbar-backend` | 0.1.30 | 0.1.31 | Patch |
| `@backstage/plugin-scaffolder` | 1.3.0 | 1.4.0 | Minor |
| `@backstage/plugin-scaffolder-backend` | 1.3.1 | 1.4.0 | Minor |
| `@backstage/plugin-scaffolder-backend-module-cookiecutter` | 0.2.8 | 0.2.9 | Patch |
| `@backstage/plugin-scaffolder-backend-module-rails` | 0.4.1 | 0.4.2 | Patch |
| `@backstage/plugin-scaffolder-backend-module-yeoman` | 0.2.6 | 0.2.7 | Patch |
| `@backstage/plugin-scaffolder-common` | 1.1.1 | 1.1.2 | Patch |
| `@backstage/plugin-search` | **0.9.0** | **1.0.0** | Major ⚠️ |
| `@backstage/plugin-search-backend` | **0.5.3** | **1.0.0** | Major ⚠️ |
| `@backstage/plugin-search-backend-module-elasticsearch` | **0.1.5** | **1.0.0** | Major ⚠️ |
| `@backstage/plugin-search-backend-module-pg` | 0.3.4 | 0.3.5 | Patch |
| `@backstage/plugin-search-backend-node` | **0.6.2** | **1.0.0** | Major ⚠️ |
| `@backstage/plugin-search-common` | **0.3.5** | **1.0.0** | Major ⚠️ |
| `@backstage/plugin-search-react` | **0.2.1** | **1.0.0** | Major ⚠️ |
| `@backstage/plugin-sentry` | 0.3.44 | 0.4.0 | Minor ⚠️ |
| `@backstage/plugin-shortcuts` | 0.2.7 | 0.2.8 | Patch |
| `@backstage/plugin-sonarqube` | 0.3.6 | 0.3.7 | Patch |
| `@backstage/plugin-splunk-on-call` | 0.3.30 | 0.3.31 | Patch |
| `@backstage/plugin-stack-overflow` | 0.1.2 | 0.1.3 | Patch |
| `@backstage/plugin-stack-overflow-backend` | 0.1.2 | 0.1.3 | Patch |
| `@backstage/plugin-tech-insights` | 0.2.2 | 0.2.3 | Patch |
| `@backstage/plugin-tech-insights-backend` | 0.4.1 | 0.5.0 | Minor ⚠️ |
| `@backstage/plugin-tech-insights-backend-module-jsonfc` | 0.1.17 | 0.1.18 | Patch |
| `@backstage/plugin-tech-insights-common` | 0.2.4 | 0.2.5 | Patch |
| `@backstage/plugin-tech-insights-node` | 0.3.1 | 0.3.2 | Patch |
| `@backstage/plugin-tech-radar` | 0.5.13 | 0.5.14 | Patch |
| `@backstage/plugin-techdocs` | 1.2.0 | 1.3.0 | Minor |
| `@backstage/plugin-techdocs-addons-test-utils` | 1.0.1 | 1.0.2 | Patch |
| `@backstage/plugin-techdocs-backend` | 1.1.2 | 1.2.0 | Minor |
| `@backstage/plugin-techdocs-module-addons-contrib` | 1.0.1 | 1.0.2 | Patch |
| `@backstage/plugin-techdocs-node` | 1.1.2 | 1.2.0 | Minor |
| `@backstage/plugin-techdocs-react` | 1.0.1 | 1.0.2 | Patch |
| `@backstage/plugin-todo` | 0.2.8 | 0.2.9 | Patch |
| `@backstage/plugin-todo-backend` | 0.1.30 | 0.1.31 | Patch |
| `@backstage/plugin-user-settings` | 0.4.5 | 0.4.6 | Patch |
| `@backstage/plugin-vault` | 0.1.0 | 0.1.1 | Patch |
| `@backstage/plugin-vault-backend` | 0.1.0 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-xcmetrics` | 0.2.26 | 0.2.27 | Patch |
| `@backstage/release-manifests` | 0.0.4 | 0.0.5 | Patch ⚠️ |
| `@backstage/test-utils` | 1.1.1 | 1.1.2 | Patch |
| `@backstage/theme` | 0.2.15 | 0.2.16 | Patch |
| `@techdocs/cli` | 1.1.2 | 1.1.3 | Patch |
