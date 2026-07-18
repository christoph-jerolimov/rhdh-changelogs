# Backstage Release 1.10.1

## Compared to 1.10.0 (previous patch release)

0 added, 0 removed, 72 upgraded (⚠️ need extra attention: 1 0.0.x patch), 112 unchanged.

### Version bumps

| Package | 1.10.0 | 1.10.1 | Type |
| --- | --- | --- | --- |
| `@backstage/backend-app-api` | 0.3.0 | 0.3.1 | Patch |
| `@backstage/backend-common` | 0.18.0 | 0.18.1 | Patch |
| `@backstage/backend-defaults` | 0.1.5 | 0.1.6 | Patch |
| `@backstage/backend-plugin-api` | 0.3.0 | 0.3.1 | Patch |
| `@backstage/backend-tasks` | 0.4.1 | 0.4.2 | Patch |
| `@backstage/backend-test-utils` | 0.1.32 | 0.1.33 | Patch |
| `@backstage/plugin-adr-backend` | 0.2.5 | 0.2.6 | Patch |
| `@backstage/plugin-airbrake-backend` | 0.2.13 | 0.2.14 | Patch |
| `@backstage/plugin-app-backend` | 0.3.40 | 0.3.41 | Patch |
| `@backstage/plugin-auth-backend` | 0.17.3 | 0.17.4 | Patch |
| `@backstage/plugin-auth-node` | 0.2.9 | 0.2.10 | Patch |
| `@backstage/plugin-azure-devops-backend` | 0.3.19 | 0.3.20 | Patch |
| `@backstage/plugin-azure-sites-backend` | 0.1.2 | 0.1.3 | Patch |
| `@backstage/plugin-badges-backend` | 0.1.34 | 0.1.35 | Patch |
| `@backstage/plugin-bazaar-backend` | 0.2.3 | 0.2.4 | Patch |
| `@backstage/plugin-catalog-backend` | 1.7.0 | 1.7.1 | Patch |
| `@backstage/plugin-catalog-backend-module-aws` | 0.1.13 | 0.1.14 | Patch |
| `@backstage/plugin-catalog-backend-module-azure` | 0.1.11 | 0.1.12 | Patch |
| `@backstage/plugin-catalog-backend-module-bitbucket` | 0.2.7 | 0.2.8 | Patch |
| `@backstage/plugin-catalog-backend-module-bitbucket-cloud` | 0.1.7 | 0.1.8 | Patch |
| `@backstage/plugin-catalog-backend-module-bitbucket-server` | 0.1.5 | 0.1.6 | Patch |
| `@backstage/plugin-catalog-backend-module-gerrit` | 0.1.8 | 0.1.9 | Patch |
| `@backstage/plugin-catalog-backend-module-github` | 0.2.3 | 0.2.4 | Patch |
| `@backstage/plugin-catalog-backend-module-gitlab` | 0.1.11 | 0.1.12 | Patch |
| `@backstage/plugin-catalog-backend-module-incremental-ingestion` | 0.1.1 | 0.1.2 | Patch |
| `@backstage/plugin-catalog-backend-module-ldap` | 0.5.7 | 0.5.8 | Patch |
| `@backstage/plugin-catalog-backend-module-msgraph` | 0.4.6 | 0.4.7 | Patch |
| `@backstage/plugin-catalog-backend-module-openapi` | 0.1.6 | 0.1.7 | Patch |
| `@backstage/plugin-catalog-node` | 1.3.1 | 1.3.2 | Patch |
| `@backstage/plugin-code-coverage-backend` | 0.2.6 | 0.2.7 | Patch |
| `@backstage/plugin-events-backend` | 0.2.1 | 0.2.2 | Patch |
| `@backstage/plugin-events-backend-module-aws-sqs` | 0.1.2 | 0.1.3 | Patch |
| `@backstage/plugin-events-backend-module-azure` | 0.1.2 | 0.1.3 | Patch |
| `@backstage/plugin-events-backend-module-bitbucket-cloud` | 0.1.2 | 0.1.3 | Patch |
| `@backstage/plugin-events-backend-module-gerrit` | 0.1.2 | 0.1.3 | Patch |
| `@backstage/plugin-events-backend-module-github` | 0.1.2 | 0.1.3 | Patch |
| `@backstage/plugin-events-backend-module-gitlab` | 0.1.2 | 0.1.3 | Patch |
| `@backstage/plugin-events-backend-test-utils` | 0.1.2 | 0.1.3 | Patch |
| `@backstage/plugin-events-node` | 0.2.1 | 0.2.2 | Patch |
| `@backstage/plugin-explore-backend` | 0.0.2 | 0.0.3 | Patch ⚠️ |
| `@backstage/plugin-graphql-backend` | 0.1.30 | 0.1.31 | Patch |
| `@backstage/plugin-jenkins-backend` | 0.1.30 | 0.1.31 | Patch |
| `@backstage/plugin-kafka-backend` | 0.2.33 | 0.2.34 | Patch |
| `@backstage/plugin-kubernetes-backend` | 0.9.1 | 0.9.2 | Patch |
| `@backstage/plugin-periskop-backend` | 0.1.11 | 0.1.12 | Patch |
| `@backstage/plugin-permission-backend` | 0.5.15 | 0.5.16 | Patch |
| `@backstage/plugin-permission-node` | 0.7.3 | 0.7.4 | Patch |
| `@backstage/plugin-playlist-backend` | 0.2.3 | 0.2.4 | Patch |
| `@backstage/plugin-proxy-backend` | 0.2.34 | 0.2.35 | Patch |
| `@backstage/plugin-rollbar-backend` | 0.1.37 | 0.1.38 | Patch |
| `@backstage/plugin-scaffolder` | 1.10.0 | 1.10.1 | Patch |
| `@backstage/plugin-scaffolder-backend` | 1.10.0 | 1.10.1 | Patch |
| `@backstage/plugin-scaffolder-backend-module-cookiecutter` | 0.2.15 | 0.2.16 | Patch |
| `@backstage/plugin-scaffolder-backend-module-rails` | 0.4.8 | 0.4.9 | Patch |
| `@backstage/plugin-scaffolder-backend-module-sentry` | 0.1.0 | 0.1.1 | Patch |
| `@backstage/plugin-scaffolder-backend-module-yeoman` | 0.2.13 | 0.2.14 | Patch |
| `@backstage/plugin-scaffolder-react` | 1.0.0 | 1.0.1 | Patch |
| `@backstage/plugin-search-backend` | 1.2.1 | 1.2.2 | Patch |
| `@backstage/plugin-search-backend-module-elasticsearch` | 1.1.1 | 1.1.2 | Patch |
| `@backstage/plugin-search-backend-module-pg` | 0.5.1 | 0.5.2 | Patch |
| `@backstage/plugin-search-backend-node` | 1.1.1 | 1.1.2 | Patch |
| `@backstage/plugin-sonarqube-backend` | 0.1.5 | 0.1.6 | Patch |
| `@backstage/plugin-stack-overflow-backend` | 0.1.9 | 0.1.10 | Patch |
| `@backstage/plugin-tech-insights-backend` | 0.5.6 | 0.5.7 | Patch |
| `@backstage/plugin-tech-insights-backend-module-jsonfc` | 0.1.24 | 0.1.25 | Patch |
| `@backstage/plugin-tech-insights-node` | 0.3.8 | 0.3.9 | Patch |
| `@backstage/plugin-techdocs-backend` | 1.5.1 | 1.5.2 | Patch |
| `@backstage/plugin-techdocs-node` | 1.4.4 | 1.4.5 | Patch |
| `@backstage/plugin-todo-backend` | 0.1.37 | 0.1.38 | Patch |
| `@backstage/plugin-user-settings-backend` | 0.1.4 | 0.1.5 | Patch |
| `@backstage/plugin-vault-backend` | 0.2.6 | 0.2.7 | Patch |
| `@techdocs/cli` | 1.3.0 | 1.3.1 | Patch |

## Compared to 1.9.1 (previous minor release)

2 added, 0 removed, 169 upgraded (⚠️ need extra attention: 5 0.x minor, 2 0.0.x patch), 13 unchanged.

### 🆕 Added packages

| Package | Version |
| --- | --- |
| `@backstage/plugin-scaffolder-backend-module-sentry` | 0.1.1 |
| `@backstage/plugin-scaffolder-react` | 1.0.1 |

### Version bumps

| Package | 1.9.1 | 1.10.1 | Type |
| --- | --- | --- | --- |
| `@backstage/app-defaults` | 1.0.10 | 1.1.0 | Minor |
| `@backstage/backend-app-api` | 0.2.4 | 0.3.1 | Minor ⚠️ |
| `@backstage/backend-common` | 0.17.0 | 0.18.1 | Minor ⚠️ |
| `@backstage/backend-defaults` | 0.1.4 | 0.1.6 | Patch |
| `@backstage/backend-plugin-api` | 0.2.0 | 0.3.1 | Minor ⚠️ |
| `@backstage/backend-tasks` | 0.4.0 | 0.4.2 | Patch |
| `@backstage/backend-test-utils` | 0.1.31 | 0.1.33 | Patch |
| `@backstage/catalog-client` | 1.2.0 | 1.3.0 | Minor |
| `@backstage/catalog-model` | 1.1.4 | 1.1.5 | Patch |
| `@backstage/cli` | 0.22.0 | 0.22.1 | Patch |
| `@backstage/config` | 1.0.5 | 1.0.6 | Patch |
| `@backstage/config-loader` | 1.1.7 | 1.1.8 | Patch |
| `@backstage/core-app-api` | 1.3.0 | 1.4.0 | Minor |
| `@backstage/core-components` | 0.12.2 | 0.12.3 | Patch |
| `@backstage/core-plugin-api` | 1.2.0 | 1.3.0 | Minor |
| `@backstage/create-app` | 0.4.35 | 0.4.36 | Patch |
| `@backstage/dev-utils` | 1.0.10 | 1.0.11 | Patch |
| `@backstage/integration` | 1.4.1 | 1.4.2 | Patch |
| `@backstage/integration-aws-node` | 0.1.0 | 0.1.1 | Patch |
| `@backstage/integration-react` | 1.1.8 | 1.1.9 | Patch |
| `@backstage/plugin-adr` | 0.2.5 | 0.3.0 | Minor ⚠️ |
| `@backstage/plugin-adr-backend` | 0.2.4 | 0.2.6 | Patch |
| `@backstage/plugin-adr-common` | 0.2.4 | 0.2.5 | Patch |
| `@backstage/plugin-airbrake` | 0.3.13 | 0.3.14 | Patch |
| `@backstage/plugin-airbrake-backend` | 0.2.12 | 0.2.14 | Patch |
| `@backstage/plugin-allure` | 0.1.29 | 0.1.30 | Patch |
| `@backstage/plugin-analytics-module-ga` | 0.1.24 | 0.1.25 | Patch |
| `@backstage/plugin-apache-airflow` | 0.2.6 | 0.2.7 | Patch |
| `@backstage/plugin-api-docs` | 0.8.13 | 0.8.14 | Patch |
| `@backstage/plugin-apollo-explorer` | 0.1.6 | 0.1.7 | Patch |
| `@backstage/plugin-app-backend` | 0.3.39 | 0.3.41 | Patch |
| `@backstage/plugin-auth-backend` | 0.17.2 | 0.17.4 | Patch |
| `@backstage/plugin-auth-node` | 0.2.8 | 0.2.10 | Patch |
| `@backstage/plugin-azure-devops` | 0.2.4 | 0.2.5 | Patch |
| `@backstage/plugin-azure-devops-backend` | 0.3.18 | 0.3.20 | Patch |
| `@backstage/plugin-azure-sites` | 0.1.2 | 0.1.3 | Patch |
| `@backstage/plugin-azure-sites-backend` | 0.1.1 | 0.1.3 | Patch |
| `@backstage/plugin-badges` | 0.2.37 | 0.2.38 | Patch |
| `@backstage/plugin-badges-backend` | 0.1.33 | 0.1.35 | Patch |
| `@backstage/plugin-bazaar` | 0.2.2 | 0.2.3 | Patch |
| `@backstage/plugin-bazaar-backend` | 0.2.2 | 0.2.4 | Patch |
| `@backstage/plugin-bitbucket-cloud-common` | 0.2.2 | 0.2.3 | Patch |
| `@backstage/plugin-bitrise` | 0.1.40 | 0.1.41 | Patch |
| `@backstage/plugin-catalog` | 1.7.1 | 1.7.2 | Patch |
| `@backstage/plugin-catalog-backend` | 1.6.0 | 1.7.1 | Minor |
| `@backstage/plugin-catalog-backend-module-aws` | 0.1.12 | 0.1.14 | Patch |
| `@backstage/plugin-catalog-backend-module-azure` | 0.1.10 | 0.1.12 | Patch |
| `@backstage/plugin-catalog-backend-module-bitbucket` | 0.2.6 | 0.2.8 | Patch |
| `@backstage/plugin-catalog-backend-module-bitbucket-cloud` | 0.1.6 | 0.1.8 | Patch |
| `@backstage/plugin-catalog-backend-module-bitbucket-server` | 0.1.4 | 0.1.6 | Patch |
| `@backstage/plugin-catalog-backend-module-gerrit` | 0.1.7 | 0.1.9 | Patch |
| `@backstage/plugin-catalog-backend-module-github` | 0.2.2 | 0.2.4 | Patch |
| `@backstage/plugin-catalog-backend-module-gitlab` | 0.1.10 | 0.1.12 | Patch |
| `@backstage/plugin-catalog-backend-module-incremental-ingestion` | 0.1.0 | 0.1.2 | Patch |
| `@backstage/plugin-catalog-backend-module-ldap` | 0.5.6 | 0.5.8 | Patch |
| `@backstage/plugin-catalog-backend-module-msgraph` | 0.4.5 | 0.4.7 | Patch |
| `@backstage/plugin-catalog-backend-module-openapi` | 0.1.5 | 0.1.7 | Patch |
| `@backstage/plugin-catalog-common` | 1.0.9 | 1.0.10 | Patch |
| `@backstage/plugin-catalog-graph` | 0.2.25 | 0.2.26 | Patch |
| `@backstage/plugin-catalog-graphql` | 0.3.16 | 0.3.17 | Patch |
| `@backstage/plugin-catalog-import` | 0.9.3 | 0.9.4 | Patch |
| `@backstage/plugin-catalog-node` | 1.3.0 | 1.3.2 | Patch |
| `@backstage/plugin-catalog-react` | 1.2.3 | 1.2.4 | Patch |
| `@backstage/plugin-cicd-statistics` | 0.1.15 | 0.1.16 | Patch |
| `@backstage/plugin-cicd-statistics-module-gitlab` | 0.1.9 | 0.1.10 | Patch |
| `@backstage/plugin-circleci` | 0.3.13 | 0.3.14 | Patch |
| `@backstage/plugin-cloudbuild` | 0.3.13 | 0.3.14 | Patch |
| `@backstage/plugin-code-climate` | 0.1.13 | 0.1.14 | Patch |
| `@backstage/plugin-code-coverage` | 0.2.6 | 0.2.7 | Patch |
| `@backstage/plugin-code-coverage-backend` | 0.2.5 | 0.2.7 | Patch |
| `@backstage/plugin-codescene` | 0.1.8 | 0.1.9 | Patch |
| `@backstage/plugin-config-schema` | 0.1.36 | 0.1.37 | Patch |
| `@backstage/plugin-cost-insights` | 0.12.2 | 0.12.3 | Patch |
| `@backstage/plugin-dynatrace` | 1.0.3 | 1.0.4 | Patch |
| `@backstage/plugin-events-backend` | 0.2.0 | 0.2.2 | Patch |
| `@backstage/plugin-events-backend-module-aws-sqs` | 0.1.1 | 0.1.3 | Patch |
| `@backstage/plugin-events-backend-module-azure` | 0.1.1 | 0.1.3 | Patch |
| `@backstage/plugin-events-backend-module-bitbucket-cloud` | 0.1.1 | 0.1.3 | Patch |
| `@backstage/plugin-events-backend-module-gerrit` | 0.1.1 | 0.1.3 | Patch |
| `@backstage/plugin-events-backend-module-github` | 0.1.1 | 0.1.3 | Patch |
| `@backstage/plugin-events-backend-module-gitlab` | 0.1.1 | 0.1.3 | Patch |
| `@backstage/plugin-events-backend-test-utils` | 0.1.1 | 0.1.3 | Patch |
| `@backstage/plugin-events-node` | 0.2.0 | 0.2.2 | Patch |
| `@backstage/plugin-explore` | 0.3.44 | 0.3.45 | Patch |
| `@backstage/plugin-explore-backend` | 0.0.1 | 0.0.3 | Patch ⚠️ |
| `@backstage/plugin-explore-react` | 0.0.24 | 0.0.25 | Patch ⚠️ |
| `@backstage/plugin-firehydrant` | 0.1.30 | 0.1.31 | Patch |
| `@backstage/plugin-fossa` | 0.2.45 | 0.2.46 | Patch |
| `@backstage/plugin-gcalendar` | 0.3.9 | 0.3.10 | Patch |
| `@backstage/plugin-gcp-projects` | 0.3.32 | 0.3.33 | Patch |
| `@backstage/plugin-git-release-manager` | 0.3.26 | 0.3.27 | Patch |
| `@backstage/plugin-github-actions` | 0.5.13 | 0.5.14 | Patch |
| `@backstage/plugin-github-deployments` | 0.1.44 | 0.1.45 | Patch |
| `@backstage/plugin-github-issues` | 0.2.2 | 0.2.3 | Patch |
| `@backstage/plugin-github-pull-requests-board` | 0.1.7 | 0.1.8 | Patch |
| `@backstage/plugin-gitops-profiles` | 0.3.31 | 0.3.32 | Patch |
| `@backstage/plugin-gocd` | 0.1.19 | 0.1.20 | Patch |
| `@backstage/plugin-graphiql` | 0.2.45 | 0.2.46 | Patch |
| `@backstage/plugin-graphql-backend` | 0.1.29 | 0.1.31 | Patch |
| `@backstage/plugin-home` | 0.4.29 | 0.4.30 | Patch |
| `@backstage/plugin-ilert` | 0.2.2 | 0.2.3 | Patch |
| `@backstage/plugin-jenkins` | 0.7.12 | 0.7.13 | Patch |
| `@backstage/plugin-jenkins-backend` | 0.1.29 | 0.1.31 | Patch |
| `@backstage/plugin-jenkins-common` | 0.1.11 | 0.1.12 | Patch |
| `@backstage/plugin-kafka` | 0.3.13 | 0.3.14 | Patch |
| `@backstage/plugin-kafka-backend` | 0.2.32 | 0.2.34 | Patch |
| `@backstage/plugin-kubernetes` | 0.7.6 | 0.7.7 | Patch |
| `@backstage/plugin-kubernetes-backend` | 0.9.0 | 0.9.2 | Patch |
| `@backstage/plugin-kubernetes-common` | 0.5.0 | 0.5.1 | Patch |
| `@backstage/plugin-lighthouse` | 0.3.13 | 0.3.14 | Patch |
| `@backstage/plugin-newrelic` | 0.3.31 | 0.3.32 | Patch |
| `@backstage/plugin-newrelic-dashboard` | 0.2.6 | 0.2.7 | Patch |
| `@backstage/plugin-org` | 0.6.3 | 0.6.4 | Patch |
| `@backstage/plugin-org-react` | 0.1.2 | 0.1.3 | Patch |
| `@backstage/plugin-pagerduty` | 0.5.6 | 0.5.7 | Patch |
| `@backstage/plugin-periskop` | 0.1.11 | 0.1.12 | Patch |
| `@backstage/plugin-periskop-backend` | 0.1.10 | 0.1.12 | Patch |
| `@backstage/plugin-permission-backend` | 0.5.14 | 0.5.16 | Patch |
| `@backstage/plugin-permission-common` | 0.7.2 | 0.7.3 | Patch |
| `@backstage/plugin-permission-node` | 0.7.2 | 0.7.4 | Patch |
| `@backstage/plugin-permission-react` | 0.4.8 | 0.4.9 | Patch |
| `@backstage/plugin-playlist` | 0.1.4 | 0.1.5 | Patch |
| `@backstage/plugin-playlist-backend` | 0.2.2 | 0.2.4 | Patch |
| `@backstage/plugin-playlist-common` | 0.1.3 | 0.1.4 | Patch |
| `@backstage/plugin-proxy-backend` | 0.2.33 | 0.2.35 | Patch |
| `@backstage/plugin-rollbar` | 0.4.13 | 0.4.14 | Patch |
| `@backstage/plugin-rollbar-backend` | 0.1.36 | 0.1.38 | Patch |
| `@backstage/plugin-scaffolder` | 1.9.1 | 1.10.1 | Minor |
| `@backstage/plugin-scaffolder-backend` | 1.9.0 | 1.10.1 | Minor |
| `@backstage/plugin-scaffolder-backend-module-cookiecutter` | 0.2.14 | 0.2.16 | Patch |
| `@backstage/plugin-scaffolder-backend-module-rails` | 0.4.7 | 0.4.9 | Patch |
| `@backstage/plugin-scaffolder-backend-module-yeoman` | 0.2.12 | 0.2.14 | Patch |
| `@backstage/plugin-scaffolder-common` | 1.2.3 | 1.2.4 | Patch |
| `@backstage/plugin-search` | 1.0.6 | 1.0.7 | Patch |
| `@backstage/plugin-search-backend` | 1.2.0 | 1.2.2 | Patch |
| `@backstage/plugin-search-backend-module-elasticsearch` | 1.1.0 | 1.1.2 | Patch |
| `@backstage/plugin-search-backend-module-pg` | 0.5.0 | 0.5.2 | Patch |
| `@backstage/plugin-search-backend-node` | 1.1.0 | 1.1.2 | Patch |
| `@backstage/plugin-search-common` | 1.2.0 | 1.2.1 | Patch |
| `@backstage/plugin-search-react` | 1.3.1 | 1.4.0 | Minor |
| `@backstage/plugin-sentry` | 0.4.6 | 0.4.7 | Patch |
| `@backstage/plugin-shortcuts` | 0.3.5 | 0.3.6 | Patch |
| `@backstage/plugin-sonarqube` | 0.6.1 | 0.6.2 | Patch |
| `@backstage/plugin-sonarqube-backend` | 0.1.4 | 0.1.6 | Patch |
| `@backstage/plugin-sonarqube-react` | 0.1.0 | 0.1.1 | Patch |
| `@backstage/plugin-splunk-on-call` | 0.4.2 | 0.4.3 | Patch |
| `@backstage/plugin-stack-overflow` | 0.1.9 | 0.1.10 | Patch |
| `@backstage/plugin-stack-overflow-backend` | 0.1.8 | 0.1.10 | Patch |
| `@backstage/plugin-tech-insights` | 0.3.5 | 0.3.6 | Patch |
| `@backstage/plugin-tech-insights-backend` | 0.5.5 | 0.5.7 | Patch |
| `@backstage/plugin-tech-insights-backend-module-jsonfc` | 0.1.23 | 0.1.25 | Patch |
| `@backstage/plugin-tech-insights-node` | 0.3.7 | 0.3.9 | Patch |
| `@backstage/plugin-tech-radar` | 0.5.20 | 0.6.0 | Minor ⚠️ |
| `@backstage/plugin-techdocs` | 1.4.2 | 1.4.3 | Patch |
| `@backstage/plugin-techdocs-addons-test-utils` | 1.0.8 | 1.0.9 | Patch |
| `@backstage/plugin-techdocs-backend` | 1.5.0 | 1.5.2 | Patch |
| `@backstage/plugin-techdocs-module-addons-contrib` | 1.0.8 | 1.0.9 | Patch |
| `@backstage/plugin-techdocs-node` | 1.4.3 | 1.4.5 | Patch |
| `@backstage/plugin-techdocs-react` | 1.1.1 | 1.1.2 | Patch |
| `@backstage/plugin-todo` | 0.2.15 | 0.2.16 | Patch |
| `@backstage/plugin-todo-backend` | 0.1.36 | 0.1.38 | Patch |
| `@backstage/plugin-user-settings` | 0.6.1 | 0.6.2 | Patch |
| `@backstage/plugin-user-settings-backend` | 0.1.3 | 0.1.5 | Patch |
| `@backstage/plugin-vault` | 0.1.7 | 0.1.8 | Patch |
| `@backstage/plugin-vault-backend` | 0.2.5 | 0.2.7 | Patch |
| `@backstage/plugin-xcmetrics` | 0.2.33 | 0.2.34 | Patch |
| `@backstage/repo-tools` | 0.1.0 | 0.1.1 | Patch |
| `@backstage/test-utils` | 1.2.3 | 1.2.4 | Patch |
| `@techdocs/cli` | 1.2.4 | 1.3.1 | Minor |
