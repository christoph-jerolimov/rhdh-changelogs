# Backstage Release 1.14.0

## Compared to 1.13.2 (previous minor release)

4 added, 0 removed, 178 upgraded (⚠️ need extra attention: 1 major, 14 0.x minor, 2 0.0.x patch), 31 unchanged.

### ⚠️ Major version bumps

| Package | 1.13.2 | 1.14.0 |
| --- | --- | --- |
| `@backstage/plugin-dynatrace` | **4.0.0** | **5.0.0** |

### 🆕 Added packages

| Package | Version |
| --- | --- |
| `@backstage/plugin-analytics-module-ga4` | 0.1.0 |
| `@backstage/plugin-devtools` | 0.1.0 |
| `@backstage/plugin-devtools-backend` | 0.1.0 |
| `@backstage/plugin-devtools-common` | 0.1.0 |

### Version bumps

| Package | 1.13.2 | 1.14.0 | Type |
| --- | --- | --- | --- |
| `@backstage/app-defaults` | 1.3.0 | 1.3.1 | Patch |
| `@backstage/backend-app-api` | 0.4.2 | 0.4.3 | Patch |
| `@backstage/backend-common` | 0.18.4 | 0.18.5 | Patch |
| `@backstage/backend-defaults` | 0.1.9 | 0.1.10 | Patch |
| `@backstage/backend-openapi-utils` | 0.0.1 | 0.0.2 | Patch ⚠️ |
| `@backstage/backend-plugin-api` | 0.5.1 | 0.5.2 | Patch |
| `@backstage/backend-tasks` | 0.5.1 | 0.5.2 | Patch |
| `@backstage/backend-test-utils` | 0.1.36 | 0.1.37 | Patch |
| `@backstage/cli` | 0.22.6 | 0.22.7 | Patch |
| `@backstage/config-loader` | 1.2.0 | 1.3.0 | Minor |
| `@backstage/core-app-api` | 1.7.0 | 1.8.0 | Minor |
| `@backstage/core-components` | 0.13.0 | 0.13.1 | Patch |
| `@backstage/create-app` | 0.5.0 | 0.5.1 | Patch |
| `@backstage/dev-utils` | 1.0.14 | 1.0.15 | Patch |
| `@backstage/integration` | 1.4.4 | 1.4.5 | Patch |
| `@backstage/integration-aws-node` | 0.1.2 | 0.1.3 | Patch |
| `@backstage/integration-react` | 1.1.12 | 1.1.13 | Patch |
| `@backstage/plugin-adr` | 0.5.0 | 0.6.0 | Minor ⚠️ |
| `@backstage/plugin-adr-backend` | 0.3.2 | 0.3.3 | Patch |
| `@backstage/plugin-adr-common` | 0.2.8 | 0.2.9 | Patch |
| `@backstage/plugin-airbrake` | 0.3.17 | 0.3.18 | Patch |
| `@backstage/plugin-airbrake-backend` | 0.2.17 | 0.2.18 | Patch |
| `@backstage/plugin-allure` | 0.1.33 | 0.1.34 | Patch |
| `@backstage/plugin-analytics-module-ga` | 0.1.28 | 0.1.29 | Patch |
| `@backstage/plugin-apache-airflow` | 0.2.10 | 0.2.11 | Patch |
| `@backstage/plugin-api-docs` | 0.9.2 | 0.9.3 | Patch |
| `@backstage/plugin-apollo-explorer` | 0.1.10 | 0.1.11 | Patch |
| `@backstage/plugin-app-backend` | 0.3.44 | 0.3.45 | Patch |
| `@backstage/plugin-auth-backend` | 0.18.2 | 0.18.3 | Patch |
| `@backstage/plugin-auth-node` | 0.2.13 | 0.2.14 | Patch |
| `@backstage/plugin-azure-devops` | 0.2.8 | 0.3.0 | Minor ⚠️ |
| `@backstage/plugin-azure-devops-backend` | 0.3.23 | 0.3.24 | Patch |
| `@backstage/plugin-azure-sites` | 0.1.6 | 0.1.7 | Patch |
| `@backstage/plugin-azure-sites-backend` | 0.1.6 | 0.1.7 | Patch |
| `@backstage/plugin-badges` | 0.2.41 | 0.2.42 | Patch |
| `@backstage/plugin-badges-backend` | 0.1.38 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-bazaar` | 0.2.7 | 0.2.8 | Patch |
| `@backstage/plugin-bazaar-backend` | 0.2.7 | 0.2.8 | Patch |
| `@backstage/plugin-bitbucket-cloud-common` | 0.2.5 | 0.2.6 | Patch |
| `@backstage/plugin-bitrise` | 0.1.44 | 0.1.45 | Patch |
| `@backstage/plugin-catalog` | 1.10.0 | 1.11.0 | Minor |
| `@backstage/plugin-catalog-backend` | 1.9.0 | 1.9.1 | Patch |
| `@backstage/plugin-catalog-backend-module-aws` | 0.1.18 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-azure` | 0.1.15 | 0.1.16 | Patch |
| `@backstage/plugin-catalog-backend-module-bitbucket` | 0.2.11 | 0.2.12 | Patch |
| `@backstage/plugin-catalog-backend-module-bitbucket-cloud` | 0.1.11 | 0.1.12 | Patch |
| `@backstage/plugin-catalog-backend-module-bitbucket-server` | 0.1.9 | 0.1.10 | Patch |
| `@backstage/plugin-catalog-backend-module-gerrit` | 0.1.12 | 0.1.13 | Patch |
| `@backstage/plugin-catalog-backend-module-github` | 0.2.7 | 0.3.0 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-gitlab` | 0.2.0 | 0.2.1 | Patch |
| `@backstage/plugin-catalog-backend-module-incremental-ingestion` | 0.3.1 | 0.3.2 | Patch |
| `@backstage/plugin-catalog-backend-module-ldap` | 0.5.11 | 0.5.12 | Patch |
| `@backstage/plugin-catalog-backend-module-msgraph` | 0.5.3 | 0.5.4 | Patch |
| `@backstage/plugin-catalog-backend-module-openapi` | 0.1.10 | 0.1.11 | Patch |
| `@backstage/plugin-catalog-backend-module-puppetdb` | 0.1.1 | 0.1.2 | Patch |
| `@backstage/plugin-catalog-graph` | 0.2.29 | 0.2.30 | Patch |
| `@backstage/plugin-catalog-import` | 0.9.7 | 0.9.8 | Patch |
| `@backstage/plugin-catalog-node` | 1.3.5 | 1.3.6 | Patch |
| `@backstage/plugin-catalog-react` | 1.5.0 | 1.6.0 | Minor |
| `@backstage/plugin-cicd-statistics` | 0.1.19 | 0.1.20 | Patch |
| `@backstage/plugin-cicd-statistics-module-gitlab` | 0.1.13 | 0.1.14 | Patch |
| `@backstage/plugin-circleci` | 0.3.17 | 0.3.18 | Patch |
| `@backstage/plugin-cloudbuild` | 0.3.17 | 0.3.18 | Patch |
| `@backstage/plugin-code-climate` | 0.1.17 | 0.1.18 | Patch |
| `@backstage/plugin-code-coverage` | 0.2.10 | 0.2.11 | Patch |
| `@backstage/plugin-code-coverage-backend` | 0.2.10 | 0.2.11 | Patch |
| `@backstage/plugin-codescene` | 0.1.12 | 0.1.13 | Patch |
| `@backstage/plugin-config-schema` | 0.1.40 | 0.1.41 | Patch |
| `@backstage/plugin-cost-insights` | 0.12.6 | 0.12.7 | Patch |
| `@backstage/plugin-dynatrace` | **4.0.0** | **5.0.0** | Major ⚠️ |
| `@backstage/plugin-entity-feedback` | 0.2.0 | 0.2.1 | Patch |
| `@backstage/plugin-entity-feedback-backend` | 0.1.2 | 0.1.3 | Patch |
| `@backstage/plugin-entity-validation` | 0.1.2 | 0.1.3 | Patch |
| `@backstage/plugin-events-backend` | 0.2.5 | 0.2.6 | Patch |
| `@backstage/plugin-events-backend-module-aws-sqs` | 0.1.6 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-events-backend-module-azure` | 0.1.6 | 0.1.7 | Patch |
| `@backstage/plugin-events-backend-module-bitbucket-cloud` | 0.1.6 | 0.1.7 | Patch |
| `@backstage/plugin-events-backend-module-gerrit` | 0.1.6 | 0.1.7 | Patch |
| `@backstage/plugin-events-backend-module-github` | 0.1.6 | 0.1.7 | Patch |
| `@backstage/plugin-events-backend-module-gitlab` | 0.1.6 | 0.1.7 | Patch |
| `@backstage/plugin-events-backend-test-utils` | 0.1.6 | 0.1.7 | Patch |
| `@backstage/plugin-events-node` | 0.2.5 | 0.2.6 | Patch |
| `@backstage/plugin-explore` | 0.4.2 | 0.4.3 | Patch |
| `@backstage/plugin-explore-backend` | 0.0.6 | 0.0.7 | Patch ⚠️ |
| `@backstage/plugin-firehydrant` | 0.2.1 | 0.2.2 | Patch |
| `@backstage/plugin-fossa` | 0.2.49 | 0.2.50 | Patch |
| `@backstage/plugin-gcalendar` | 0.3.13 | 0.3.14 | Patch |
| `@backstage/plugin-gcp-projects` | 0.3.36 | 0.3.37 | Patch |
| `@backstage/plugin-git-release-manager` | 0.3.30 | 0.3.31 | Patch |
| `@backstage/plugin-github-actions` | 0.5.17 | 0.5.18 | Patch |
| `@backstage/plugin-github-deployments` | 0.1.48 | 0.1.49 | Patch |
| `@backstage/plugin-github-issues` | 0.2.6 | 0.2.7 | Patch |
| `@backstage/plugin-github-pull-requests-board` | 0.1.11 | 0.1.12 | Patch |
| `@backstage/plugin-gitops-profiles` | 0.3.35 | 0.3.36 | Patch |
| `@backstage/plugin-gocd` | 0.1.23 | 0.1.24 | Patch |
| `@backstage/plugin-graphiql` | 0.2.49 | 0.2.50 | Patch |
| `@backstage/plugin-graphql-backend` | 0.1.34 | 0.1.35 | Patch |
| `@backstage/plugin-graphql-voyager` | 0.1.2 | 0.1.3 | Patch |
| `@backstage/plugin-home` | 0.5.1 | 0.5.2 | Patch |
| `@backstage/plugin-ilert` | 0.2.6 | 0.2.7 | Patch |
| `@backstage/plugin-jenkins` | 0.7.16 | 0.8.0 | Minor ⚠️ |
| `@backstage/plugin-jenkins-backend` | 0.1.34 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-kafka` | 0.3.17 | 0.3.18 | Patch |
| `@backstage/plugin-kafka-backend` | 0.2.37 | 0.2.38 | Patch |
| `@backstage/plugin-kubernetes` | 0.8.0 | 0.9.0 | Minor ⚠️ |
| `@backstage/plugin-kubernetes-backend` | 0.10.0 | 0.11.0 | Minor ⚠️ |
| `@backstage/plugin-kubernetes-common` | 0.6.2 | 0.6.3 | Patch |
| `@backstage/plugin-lighthouse` | 0.4.2 | 0.4.3 | Patch |
| `@backstage/plugin-lighthouse-backend` | 0.2.0 | 0.2.1 | Patch |
| `@backstage/plugin-linguist` | 0.1.2 | 0.1.3 | Patch |
| `@backstage/plugin-linguist-backend` | 0.2.1 | 0.2.2 | Patch |
| `@backstage/plugin-microsoft-calendar` | 0.1.2 | 0.1.3 | Patch |
| `@backstage/plugin-newrelic` | 0.3.35 | 0.3.36 | Patch |
| `@backstage/plugin-newrelic-dashboard` | 0.2.10 | 0.2.11 | Patch |
| `@backstage/plugin-octopus-deploy` | 0.1.1 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-org` | 0.6.7 | 0.6.8 | Patch |
| `@backstage/plugin-org-react` | 0.1.6 | 0.1.7 | Patch |
| `@backstage/plugin-pagerduty` | 0.5.10 | 0.5.11 | Patch |
| `@backstage/plugin-periskop` | 0.1.15 | 0.1.16 | Patch |
| `@backstage/plugin-periskop-backend` | 0.1.15 | 0.1.16 | Patch |
| `@backstage/plugin-permission-backend` | 0.5.19 | 0.5.20 | Patch |
| `@backstage/plugin-permission-node` | 0.7.7 | 0.7.8 | Patch |
| `@backstage/plugin-playlist` | 0.1.8 | 0.1.9 | Patch |
| `@backstage/plugin-playlist-backend` | 0.3.0 | 0.3.1 | Patch |
| `@backstage/plugin-proxy-backend` | 0.2.38 | 0.2.39 | Patch |
| `@backstage/plugin-puppetdb` | 0.1.0 | 0.1.1 | Patch |
| `@backstage/plugin-rollbar` | 0.4.17 | 0.4.18 | Patch |
| `@backstage/plugin-rollbar-backend` | 0.1.41 | 0.1.42 | Patch |
| `@backstage/plugin-scaffolder` | 1.13.0 | 1.13.1 | Patch |
| `@backstage/plugin-scaffolder-backend` | 1.13.1 | 1.14.0 | Minor |
| `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` | 0.1.1 | 0.1.2 | Patch |
| `@backstage/plugin-scaffolder-backend-module-cookiecutter` | 0.2.20 | 0.2.21 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gitlab` | 0.1.0 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-rails` | 0.4.13 | 0.4.14 | Patch |
| `@backstage/plugin-scaffolder-backend-module-sentry` | 0.1.4 | 0.1.5 | Patch |
| `@backstage/plugin-scaffolder-backend-module-yeoman` | 0.2.17 | 0.2.18 | Patch |
| `@backstage/plugin-scaffolder-common` | 1.2.7 | 1.3.0 | Minor |
| `@backstage/plugin-scaffolder-node` | 0.1.2 | 0.1.3 | Patch |
| `@backstage/plugin-scaffolder-react` | 1.3.0 | 1.4.0 | Minor |
| `@backstage/plugin-search` | 1.2.0 | 1.3.0 | Minor |
| `@backstage/plugin-search-backend` | 1.3.0 | 1.3.1 | Patch |
| `@backstage/plugin-search-backend-module-catalog` | 0.1.0 | 0.1.1 | Patch |
| `@backstage/plugin-search-backend-module-elasticsearch` | 1.2.0 | 1.3.0 | Minor |
| `@backstage/plugin-search-backend-module-explore` | 0.1.0 | 0.1.1 | Patch |
| `@backstage/plugin-search-backend-module-pg` | 0.5.5 | 0.5.6 | Patch |
| `@backstage/plugin-search-backend-module-techdocs` | 0.1.0 | 0.1.1 | Patch |
| `@backstage/plugin-search-backend-node` | 1.2.0 | 1.2.1 | Patch |
| `@backstage/plugin-search-react` | 1.5.2 | 1.6.0 | Minor |
| `@backstage/plugin-sentry` | 0.5.2 | 0.5.3 | Patch |
| `@backstage/plugin-shortcuts` | 0.3.9 | 0.3.10 | Patch |
| `@backstage/plugin-sonarqube` | 0.6.6 | 0.6.7 | Patch |
| `@backstage/plugin-sonarqube-backend` | 0.1.9 | 0.1.10 | Patch |
| `@backstage/plugin-splunk-on-call` | 0.4.6 | 0.4.7 | Patch |
| `@backstage/plugin-stack-overflow` | 0.1.14 | 0.1.15 | Patch |
| `@backstage/plugin-stack-overflow-backend` | 0.2.0 | 0.2.1 | Patch |
| `@backstage/plugin-stackstorm` | 0.1.1 | 0.1.2 | Patch |
| `@backstage/plugin-tech-insights` | 0.3.9 | 0.3.10 | Patch |
| `@backstage/plugin-tech-insights-backend` | 0.5.10 | 0.5.11 | Patch |
| `@backstage/plugin-tech-insights-backend-module-jsonfc` | 0.1.28 | 0.1.29 | Patch |
| `@backstage/plugin-tech-insights-node` | 0.4.2 | 0.4.3 | Patch |
| `@backstage/plugin-tech-radar` | 0.6.3 | 0.6.4 | Patch |
| `@backstage/plugin-techdocs` | 1.6.1 | 1.6.2 | Patch |
| `@backstage/plugin-techdocs-addons-test-utils` | 1.0.12 | 1.0.13 | Patch |
| `@backstage/plugin-techdocs-backend` | 1.6.1 | 1.6.2 | Patch |
| `@backstage/plugin-techdocs-module-addons-contrib` | 1.0.12 | 1.0.13 | Patch |
| `@backstage/plugin-techdocs-node` | 1.7.0 | 1.7.1 | Patch |
| `@backstage/plugin-techdocs-react` | 1.1.5 | 1.1.6 | Patch |
| `@backstage/plugin-todo` | 0.2.19 | 0.2.20 | Patch |
| `@backstage/plugin-todo-backend` | 0.1.41 | 0.1.42 | Patch |
| `@backstage/plugin-user-settings` | 0.7.2 | 0.7.3 | Patch |
| `@backstage/plugin-user-settings-backend` | 0.1.8 | 0.1.9 | Patch |
| `@backstage/plugin-vault` | 0.1.11 | 0.1.12 | Patch |
| `@backstage/plugin-vault-backend` | 0.3.0 | 0.3.1 | Patch |
| `@backstage/plugin-xcmetrics` | 0.2.37 | 0.2.38 | Patch |
| `@backstage/repo-tools` | 0.2.0 | 0.3.0 | Minor ⚠️ |
| `@backstage/test-utils` | 1.3.0 | 1.3.1 | Patch |
| `@backstage/theme` | 0.2.19 | 0.3.0 | Minor ⚠️ |
| `@techdocs/cli` | 1.4.1 | 1.4.2 | Patch |
