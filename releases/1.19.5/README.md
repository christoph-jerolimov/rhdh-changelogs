# Backstage Release 1.19.5

## Compared to 1.19.4 (previous patch release)

0 added, 0 removed, 1 upgraded, 237 unchanged.

### Version bumps

| Package | 1.19.4 | 1.19.5 | Type |
| --- | --- | --- | --- |
| `@backstage/config-loader` | 1.5.1 | 1.5.2 | Patch |

## Compared to 1.18.5 (previous minor release)

7 added, 0 removed, 221 upgraded (⚠️ need extra attention: 14 0.x minor, 4 0.0.x patch), 10 unchanged.

### 🆕 Added packages

| Package | Version |
| --- | --- |
| `@backstage/e2e-test-utils` | 0.1.0 |
| `@backstage/plugin-auth-backend-module-microsoft-provider` | 0.1.1 |
| `@backstage/plugin-auth-backend-module-pinniped-provider` | 0.1.0 |
| `@backstage/plugin-catalog-backend-module-github-org` | 0.1.0 |
| `@backstage/plugin-kubernetes-cluster` | 0.0.1 |
| `@backstage/plugin-kubernetes-node` | 0.1.0 |
| `@backstage/plugin-kubernetes-react` | 0.1.0 |

### Version bumps

| Package | 1.18.5 | 1.19.5 | Type |
| --- | --- | --- | --- |
| `@backstage/app-defaults` | 1.4.3 | 1.4.4 | Patch |
| `@backstage/backend-app-api` | 0.5.5 | 0.5.7 | Patch |
| `@backstage/backend-common` | 0.19.7 | 0.19.8 | Patch |
| `@backstage/backend-defaults` | 0.2.5 | 0.2.6 | Patch |
| `@backstage/backend-dev-utils` | 0.1.1 | 0.1.2 | Patch |
| `@backstage/backend-openapi-utils` | 0.0.4 | 0.0.5 | Patch ⚠️ |
| `@backstage/backend-plugin-api` | 0.6.5 | 0.6.6 | Patch |
| `@backstage/backend-tasks` | 0.5.10 | 0.5.11 | Patch |
| `@backstage/backend-test-utils` | 0.2.6 | 0.2.7 | Patch |
| `@backstage/catalog-client` | 1.4.4 | 1.4.5 | Patch |
| `@backstage/catalog-model` | 1.4.2 | 1.4.3 | Patch |
| `@backstage/cli` | 0.22.14 | 0.23.1 | Minor ⚠️ |
| `@backstage/cli-common` | 0.1.12 | 0.1.13 | Patch |
| `@backstage/cli-node` | 0.1.4 | 0.1.5 | Patch |
| `@backstage/codemods` | 0.1.45 | 0.1.46 | Patch |
| `@backstage/config` | 1.1.0 | 1.1.1 | Patch |
| `@backstage/config-loader` | 1.5.0 | 1.5.2 | Patch |
| `@backstage/core-app-api` | 1.10.0 | 1.11.0 | Minor |
| `@backstage/core-components` | 0.13.5 | 0.13.6 | Patch |
| `@backstage/core-plugin-api` | 1.6.0 | 1.7.0 | Minor |
| `@backstage/create-app` | 0.5.5 | 0.5.6 | Patch |
| `@backstage/dev-utils` | 1.0.21 | 1.0.22 | Patch |
| `@backstage/errors` | 1.2.2 | 1.2.3 | Patch |
| `@backstage/frontend-app-api` | 0.1.0 | 0.2.0 | Minor ⚠️ |
| `@backstage/frontend-plugin-api` | 0.1.0 | 0.2.0 | Minor ⚠️ |
| `@backstage/integration` | 1.7.0 | 1.7.1 | Patch |
| `@backstage/integration-aws-node` | 0.1.6 | 0.1.7 | Patch |
| `@backstage/integration-react` | 1.1.19 | 1.1.20 | Patch |
| `@backstage/plugin-adr` | 0.6.7 | 0.6.8 | Patch |
| `@backstage/plugin-adr-backend` | 0.4.2 | 0.4.3 | Patch |
| `@backstage/plugin-adr-common` | 0.2.15 | 0.2.16 | Patch |
| `@backstage/plugin-airbrake` | 0.3.24 | 0.3.25 | Patch |
| `@backstage/plugin-airbrake-backend` | 0.3.2 | 0.3.3 | Patch |
| `@backstage/plugin-allure` | 0.1.40 | 0.1.41 | Patch |
| `@backstage/plugin-analytics-module-ga` | 0.1.33 | 0.1.34 | Patch |
| `@backstage/plugin-analytics-module-ga4` | 0.1.4 | 0.1.5 | Patch |
| `@backstage/plugin-analytics-module-newrelic-browser` | 0.0.2 | 0.0.3 | Patch ⚠️ |
| `@backstage/plugin-apache-airflow` | 0.2.15 | 0.2.16 | Patch |
| `@backstage/plugin-api-docs` | 0.9.11 | 0.9.12 | Patch |
| `@backstage/plugin-api-docs-module-protoc-gen-doc` | 0.1.3 | 0.1.4 | Patch |
| `@backstage/plugin-apollo-explorer` | 0.1.15 | 0.1.16 | Patch |
| `@backstage/plugin-app-backend` | 0.3.53 | 0.3.54 | Patch |
| `@backstage/plugin-app-node` | 0.1.5 | 0.1.6 | Patch |
| `@backstage/plugin-auth-backend` | 0.19.2 | 0.19.4 | Patch |
| `@backstage/plugin-auth-backend-module-gcp-iap-provider` | 0.1.2 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-auth-backend-module-github-provider` | 0.1.2 | 0.1.3 | Patch |
| `@backstage/plugin-auth-backend-module-gitlab-provider` | 0.1.2 | 0.1.3 | Patch |
| `@backstage/plugin-auth-backend-module-google-provider` | 0.1.2 | 0.1.3 | Patch |
| `@backstage/plugin-auth-backend-module-oauth2-provider` | 0.1.2 | 0.1.3 | Patch |
| `@backstage/plugin-auth-node` | 0.3.2 | 0.4.0 | Minor ⚠️ |
| `@backstage/plugin-azure-devops` | 0.3.6 | 0.3.7 | Patch |
| `@backstage/plugin-azure-devops-backend` | 0.4.2 | 0.4.3 | Patch |
| `@backstage/plugin-azure-sites` | 0.1.13 | 0.1.14 | Patch |
| `@backstage/plugin-azure-sites-backend` | 0.1.15 | 0.1.16 | Patch |
| `@backstage/plugin-badges` | 0.2.48 | 0.2.49 | Patch |
| `@backstage/plugin-badges-backend` | 0.3.2 | 0.3.3 | Patch |
| `@backstage/plugin-bazaar` | 0.2.16 | 0.2.17 | Patch |
| `@backstage/plugin-bazaar-backend` | 0.3.2 | 0.3.4 | Patch |
| `@backstage/plugin-bitbucket-cloud-common` | 0.2.12 | 0.2.13 | Patch |
| `@backstage/plugin-bitrise` | 0.1.51 | 0.1.52 | Patch |
| `@backstage/plugin-catalog` | 1.13.0 | 1.14.0 | Minor |
| `@backstage/plugin-catalog-backend` | 1.13.3 | 1.14.0 | Minor |
| `@backstage/plugin-catalog-backend-module-aws` | 0.2.8 | 0.3.0 | Minor ⚠️ |
| `@backstage/plugin-catalog-backend-module-azure` | 0.1.24 | 0.1.25 | Patch |
| `@backstage/plugin-catalog-backend-module-bitbucket` | 0.2.20 | 0.2.21 | Patch |
| `@backstage/plugin-catalog-backend-module-bitbucket-cloud` | 0.1.20 | 0.1.21 | Patch |
| `@backstage/plugin-catalog-backend-module-bitbucket-server` | 0.1.18 | 0.1.19 | Patch |
| `@backstage/plugin-catalog-backend-module-gcp` | 0.1.5 | 0.1.6 | Patch |
| `@backstage/plugin-catalog-backend-module-gerrit` | 0.1.21 | 0.1.22 | Patch |
| `@backstage/plugin-catalog-backend-module-github` | 0.4.3 | 0.4.4 | Patch |
| `@backstage/plugin-catalog-backend-module-gitlab` | 0.3.2 | 0.3.3 | Patch |
| `@backstage/plugin-catalog-backend-module-incremental-ingestion` | 0.4.9 | 0.4.10 | Patch |
| `@backstage/plugin-catalog-backend-module-ldap` | 0.5.20 | 0.5.21 | Patch |
| `@backstage/plugin-catalog-backend-module-msgraph` | 0.5.12 | 0.5.13 | Patch |
| `@backstage/plugin-catalog-backend-module-openapi` | 0.1.22 | 0.1.23 | Patch |
| `@backstage/plugin-catalog-backend-module-puppetdb` | 0.1.10 | 0.1.11 | Patch |
| `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` | 0.1.2 | 0.1.3 | Patch |
| `@backstage/plugin-catalog-backend-module-unprocessed` | 0.3.2 | 0.3.3 | Patch |
| `@backstage/plugin-catalog-common` | 1.0.16 | 1.0.17 | Patch |
| `@backstage/plugin-catalog-graph` | 0.2.36 | 0.2.37 | Patch |
| `@backstage/plugin-catalog-graphql` | 0.3.23 | 0.4.0 | Minor ⚠️ |
| `@backstage/plugin-catalog-import` | 0.10.0 | 0.10.1 | Patch |
| `@backstage/plugin-catalog-node` | 1.4.6 | 1.4.7 | Patch |
| `@backstage/plugin-catalog-react` | 1.8.4 | 1.8.5 | Patch |
| `@backstage/plugin-catalog-unprocessed-entities` | 0.1.3 | 0.1.4 | Patch |
| `@backstage/plugin-cicd-statistics` | 0.1.26 | 0.1.27 | Patch |
| `@backstage/plugin-cicd-statistics-module-gitlab` | 0.1.20 | 0.1.21 | Patch |
| `@backstage/plugin-circleci` | 0.3.24 | 0.3.25 | Patch |
| `@backstage/plugin-cloudbuild` | 0.3.24 | 0.3.25 | Patch |
| `@backstage/plugin-code-climate` | 0.1.24 | 0.1.25 | Patch |
| `@backstage/plugin-code-coverage` | 0.2.17 | 0.2.18 | Patch |
| `@backstage/plugin-code-coverage-backend` | 0.2.19 | 0.2.20 | Patch |
| `@backstage/plugin-codescene` | 0.1.17 | 0.1.18 | Patch |
| `@backstage/plugin-config-schema` | 0.1.45 | 0.1.46 | Patch |
| `@backstage/plugin-cost-insights` | 0.12.13 | 0.12.14 | Patch |
| `@backstage/plugin-devtools` | 0.1.4 | 0.1.5 | Patch |
| `@backstage/plugin-devtools-backend` | 0.2.2 | 0.2.3 | Patch |
| `@backstage/plugin-devtools-common` | 0.1.4 | 0.1.5 | Patch |
| `@backstage/plugin-dynatrace` | 7.0.4 | 7.0.5 | Patch |
| `@backstage/plugin-entity-feedback` | 0.2.7 | 0.2.8 | Patch |
| `@backstage/plugin-entity-feedback-backend` | 0.2.2 | 0.2.3 | Patch |
| `@backstage/plugin-entity-validation` | 0.1.9 | 0.1.10 | Patch |
| `@backstage/plugin-events-backend` | 0.2.14 | 0.2.15 | Patch |
| `@backstage/plugin-events-backend-module-aws-sqs` | 0.2.8 | 0.2.9 | Patch |
| `@backstage/plugin-events-backend-module-azure` | 0.1.15 | 0.1.16 | Patch |
| `@backstage/plugin-events-backend-module-bitbucket-cloud` | 0.1.15 | 0.1.16 | Patch |
| `@backstage/plugin-events-backend-module-gerrit` | 0.1.15 | 0.1.16 | Patch |
| `@backstage/plugin-events-backend-module-github` | 0.1.15 | 0.1.16 | Patch |
| `@backstage/plugin-events-backend-module-gitlab` | 0.1.15 | 0.1.16 | Patch |
| `@backstage/plugin-events-backend-test-utils` | 0.1.15 | 0.1.16 | Patch |
| `@backstage/plugin-events-node` | 0.2.14 | 0.2.15 | Patch |
| `@backstage/plugin-explore` | 0.4.10 | 0.4.11 | Patch |
| `@backstage/plugin-explore-backend` | 0.0.15 | 0.0.16 | Patch ⚠️ |
| `@backstage/plugin-explore-react` | 0.0.31 | 0.0.32 | Patch ⚠️ |
| `@backstage/plugin-firehydrant` | 0.2.8 | 0.2.9 | Patch |
| `@backstage/plugin-fossa` | 0.2.56 | 0.2.57 | Patch |
| `@backstage/plugin-gcalendar` | 0.3.18 | 0.3.19 | Patch |
| `@backstage/plugin-gcp-projects` | 0.3.41 | 0.3.42 | Patch |
| `@backstage/plugin-git-release-manager` | 0.3.37 | 0.3.38 | Patch |
| `@backstage/plugin-github-actions` | 0.6.5 | 0.6.6 | Patch |
| `@backstage/plugin-github-deployments` | 0.1.55 | 0.1.56 | Patch |
| `@backstage/plugin-github-issues` | 0.2.13 | 0.2.14 | Patch |
| `@backstage/plugin-github-pull-requests-board` | 0.1.18 | 0.1.19 | Patch |
| `@backstage/plugin-gitops-profiles` | 0.3.40 | 0.3.41 | Patch |
| `@backstage/plugin-gocd` | 0.1.30 | 0.1.31 | Patch |
| `@backstage/plugin-graphiql` | 0.2.54 | 0.2.55 | Patch |
| `@backstage/plugin-graphql-backend` | 0.1.43 | 0.2.0 | Minor ⚠️ |
| `@backstage/plugin-graphql-voyager` | 0.1.7 | 0.1.8 | Patch |
| `@backstage/plugin-home` | 0.5.8 | 0.5.9 | Patch |
| `@backstage/plugin-home-react` | 0.1.3 | 0.1.4 | Patch |
| `@backstage/plugin-ilert` | 0.2.13 | 0.2.14 | Patch |
| `@backstage/plugin-jenkins` | 0.8.6 | 0.9.0 | Minor ⚠️ |
| `@backstage/plugin-jenkins-backend` | 0.2.8 | 0.3.0 | Minor ⚠️ |
| `@backstage/plugin-jenkins-common` | 0.1.19 | 0.1.20 | Patch |
| `@backstage/plugin-kafka` | 0.3.24 | 0.3.25 | Patch |
| `@backstage/plugin-kafka-backend` | 0.3.2 | 0.3.4 | Patch |
| `@backstage/plugin-kubernetes` | 0.10.3 | 0.11.0 | Minor ⚠️ |
| `@backstage/plugin-kubernetes-backend` | 0.12.2 | 0.13.0 | Minor ⚠️ |
| `@backstage/plugin-kubernetes-common` | 0.6.6 | 0.7.0 | Minor ⚠️ |
| `@backstage/plugin-lighthouse` | 0.4.9 | 0.4.10 | Patch |
| `@backstage/plugin-lighthouse-backend` | 0.3.2 | 0.3.3 | Patch |
| `@backstage/plugin-lighthouse-common` | 0.1.3 | 0.1.4 | Patch |
| `@backstage/plugin-linguist` | 0.1.9 | 0.1.10 | Patch |
| `@backstage/plugin-linguist-backend` | 0.5.2 | 0.5.3 | Patch |
| `@backstage/plugin-microsoft-calendar` | 0.1.7 | 0.1.8 | Patch |
| `@backstage/plugin-newrelic` | 0.3.40 | 0.3.41 | Patch |
| `@backstage/plugin-newrelic-dashboard` | 0.2.17 | 0.3.0 | Minor ⚠️ |
| `@backstage/plugin-nomad` | 0.1.5 | 0.1.6 | Patch |
| `@backstage/plugin-nomad-backend` | 0.1.7 | 0.1.8 | Patch |
| `@backstage/plugin-octopus-deploy` | 0.2.6 | 0.2.7 | Patch |
| `@backstage/plugin-opencost` | 0.2.0 | 0.2.1 | Patch |
| `@backstage/plugin-org` | 0.6.14 | 0.6.15 | Patch |
| `@backstage/plugin-org-react` | 0.1.13 | 0.1.14 | Patch |
| `@backstage/plugin-pagerduty` | 0.6.5 | 0.6.6 | Patch |
| `@backstage/plugin-periskop` | 0.1.22 | 0.1.23 | Patch |
| `@backstage/plugin-periskop-backend` | 0.2.2 | 0.2.4 | Patch |
| `@backstage/plugin-permission-backend` | 0.5.28 | 0.5.29 | Patch |
| `@backstage/plugin-permission-backend-module-allow-all-policy` | 0.1.2 | 0.1.3 | Patch |
| `@backstage/plugin-permission-common` | 0.7.8 | 0.7.9 | Patch |
| `@backstage/plugin-permission-node` | 0.7.16 | 0.7.17 | Patch |
| `@backstage/plugin-permission-react` | 0.4.15 | 0.4.16 | Patch |
| `@backstage/plugin-playlist` | 0.1.16 | 0.1.17 | Patch |
| `@backstage/plugin-playlist-backend` | 0.3.9 | 0.3.10 | Patch |
| `@backstage/plugin-playlist-common` | 0.1.10 | 0.1.11 | Patch |
| `@backstage/plugin-proxy-backend` | 0.4.2 | 0.4.4 | Patch |
| `@backstage/plugin-puppetdb` | 0.1.7 | 0.1.8 | Patch |
| `@backstage/plugin-rollbar` | 0.4.24 | 0.4.25 | Patch |
| `@backstage/plugin-rollbar-backend` | 0.1.50 | 0.1.51 | Patch |
| `@backstage/plugin-scaffolder` | 1.15.0 | 1.15.1 | Patch |
| `@backstage/plugin-scaffolder-backend` | 1.17.3 | 1.18.1 | Minor |
| `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` | 0.2.6 | 0.2.7 | Patch |
| `@backstage/plugin-scaffolder-backend-module-cookiecutter` | 0.2.29 | 0.2.30 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gitlab` | 0.2.8 | 0.2.9 | Patch |
| `@backstage/plugin-scaffolder-backend-module-rails` | 0.4.22 | 0.4.23 | Patch |
| `@backstage/plugin-scaffolder-backend-module-sentry` | 0.1.13 | 0.1.14 | Patch |
| `@backstage/plugin-scaffolder-backend-module-yeoman` | 0.2.26 | 0.2.27 | Patch |
| `@backstage/plugin-scaffolder-common` | 1.4.1 | 1.4.2 | Patch |
| `@backstage/plugin-scaffolder-node` | 0.2.5 | 0.2.7 | Patch |
| `@backstage/plugin-scaffolder-react` | 1.5.5 | 1.5.6 | Patch |
| `@backstage/plugin-search` | 1.4.0 | 1.4.1 | Patch |
| `@backstage/plugin-search-backend` | 1.4.5 | 1.4.6 | Patch |
| `@backstage/plugin-search-backend-module-catalog` | 0.1.9 | 0.1.10 | Patch |
| `@backstage/plugin-search-backend-module-elasticsearch` | 1.3.8 | 1.3.9 | Patch |
| `@backstage/plugin-search-backend-module-explore` | 0.1.9 | 0.1.10 | Patch |
| `@backstage/plugin-search-backend-module-pg` | 0.5.14 | 0.5.15 | Patch |
| `@backstage/plugin-search-backend-module-techdocs` | 0.1.9 | 0.1.10 | Patch |
| `@backstage/plugin-search-backend-node` | 1.2.9 | 1.2.10 | Patch |
| `@backstage/plugin-search-common` | 1.2.6 | 1.2.7 | Patch |
| `@backstage/plugin-search-react` | 1.7.0 | 1.7.1 | Patch |
| `@backstage/plugin-sentry` | 0.5.9 | 0.5.10 | Patch |
| `@backstage/plugin-shortcuts` | 0.3.14 | 0.3.15 | Patch |
| `@backstage/plugin-sonarqube` | 0.7.5 | 0.7.7 | Patch |
| `@backstage/plugin-sonarqube-backend` | 0.2.7 | 0.2.8 | Patch |
| `@backstage/plugin-sonarqube-react` | 0.1.8 | 0.1.9 | Patch |
| `@backstage/plugin-splunk-on-call` | 0.4.13 | 0.4.14 | Patch |
| `@backstage/plugin-stack-overflow` | 0.1.20 | 0.1.21 | Patch |
| `@backstage/plugin-stack-overflow-backend` | 0.2.9 | 0.2.10 | Patch |
| `@backstage/plugin-stackstorm` | 0.1.6 | 0.1.7 | Patch |
| `@backstage/plugin-tech-insights` | 0.3.16 | 0.3.17 | Patch |
| `@backstage/plugin-tech-insights-backend` | 0.5.19 | 0.5.20 | Patch |
| `@backstage/plugin-tech-insights-backend-module-jsonfc` | 0.1.37 | 0.1.38 | Patch |
| `@backstage/plugin-tech-insights-node` | 0.4.11 | 0.4.12 | Patch |
| `@backstage/plugin-tech-radar` | 0.6.8 | 0.6.9 | Patch |
| `@backstage/plugin-techdocs` | 1.7.0 | 1.8.0 | Minor |
| `@backstage/plugin-techdocs-addons-test-utils` | 1.0.21 | 1.0.22 | Patch |
| `@backstage/plugin-techdocs-backend` | 1.7.2 | 1.8.0 | Minor |
| `@backstage/plugin-techdocs-module-addons-contrib` | 1.1.0 | 1.1.1 | Patch |
| `@backstage/plugin-techdocs-node` | 1.8.2 | 1.9.0 | Minor |
| `@backstage/plugin-techdocs-react` | 1.1.11 | 1.1.12 | Patch |
| `@backstage/plugin-todo` | 0.2.27 | 0.2.29 | Patch |
| `@backstage/plugin-todo-backend` | 0.3.3 | 0.3.4 | Patch |
| `@backstage/plugin-user-settings` | 0.7.10 | 0.7.11 | Patch |
| `@backstage/plugin-user-settings-backend` | 0.2.3 | 0.2.5 | Patch |
| `@backstage/plugin-vault` | 0.1.19 | 0.1.20 | Patch |
| `@backstage/plugin-vault-backend` | 0.3.10 | 0.3.11 | Patch |
| `@backstage/plugin-xcmetrics` | 0.2.43 | 0.2.44 | Patch |
| `@backstage/repo-tools` | 0.3.4 | 0.3.5 | Patch |
| `@backstage/test-utils` | 1.4.3 | 1.4.4 | Patch |
| `@backstage/theme` | 0.4.2 | 0.4.3 | Patch |
| `@backstage/version-bridge` | 1.0.5 | 1.0.6 | Patch |
| `@techdocs/cli` | 1.5.2 | 1.6.0 | Minor |
