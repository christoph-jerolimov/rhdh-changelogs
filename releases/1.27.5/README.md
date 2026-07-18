# Backstage Release 1.27.5

## Compared to 1.27.4 (previous patch release)

0 added, 0 removed, 1 upgraded, 169 unchanged.

### Version bumps

| Package | 1.27.4 | 1.27.5 | Type |
| --- | --- | --- | --- |
| `@backstage/plugin-scaffolder` | 1.20.0 | 1.20.1 | Patch |

## Compared to 1.26.5 (previous minor release)

3 added, 103 removed, 146 upgraded (⚠️ need extra attention: 5 0.x minor, 3 0.0.x patch), 21 unchanged.

### 🆕 Added packages

| Package | Version |
| --- | --- |
| `@backstage/plugin-catalog-backend-module-gitlab-org` | 0.0.1 |
| `@backstage/plugin-notifications-backend-module-email` | 0.0.1 |
| `@backstage/plugin-scaffolder-backend-module-notifications` | 0.0.1 |

### ❌ Removed packages

| Package | Last version |
| --- | --- |
| `@backstage/plugin-adr` | 0.6.18 |
| `@backstage/plugin-adr-backend` | 0.4.15 |
| `@backstage/plugin-adr-common` | 0.2.23 |
| `@backstage/plugin-airbrake` | 0.3.35 |
| `@backstage/plugin-airbrake-backend` | 0.3.15 |
| `@backstage/plugin-allure` | 0.1.51 |
| `@backstage/plugin-analytics-module-ga` | 0.2.5 |
| `@backstage/plugin-analytics-module-ga4` | 0.2.5 |
| `@backstage/plugin-analytics-module-newrelic-browser` | 0.1.5 |
| `@backstage/plugin-apache-airflow` | 0.2.25 |
| `@backstage/plugin-apollo-explorer` | 0.2.1 |
| `@backstage/plugin-azure-devops` | 0.4.4 |
| `@backstage/plugin-azure-devops-backend` | 0.6.5 |
| `@backstage/plugin-azure-devops-common` | 0.4.2 |
| `@backstage/plugin-azure-sites` | 0.1.24 |
| `@backstage/plugin-azure-sites-backend` | 0.3.5 |
| `@backstage/plugin-azure-sites-common` | 0.1.4 |
| `@backstage/plugin-badges` | 0.2.59 |
| `@backstage/plugin-badges-backend` | 0.4.1 |
| `@backstage/plugin-bazaar` | 0.2.27 |
| `@backstage/plugin-bazaar-backend` | 0.3.16 |
| `@backstage/plugin-bitrise` | 0.1.62 |
| `@backstage/plugin-cicd-statistics` | 0.1.37 |
| `@backstage/plugin-cicd-statistics-module-gitlab` | 0.1.31 |
| `@backstage/plugin-circleci` | 0.3.35 |
| `@backstage/plugin-cloudbuild` | 0.5.2 |
| `@backstage/plugin-code-climate` | 0.1.35 |
| `@backstage/plugin-code-coverage` | 0.2.28 |
| `@backstage/plugin-code-coverage-backend` | 0.2.32 |
| `@backstage/plugin-codescene` | 0.1.27 |
| `@backstage/plugin-cost-insights` | 0.12.24 |
| `@backstage/plugin-cost-insights-common` | 0.1.3 |
| `@backstage/plugin-dynatrace` | 10.0.4 |
| `@backstage/plugin-entity-feedback` | 0.2.18 |
| `@backstage/plugin-entity-feedback-backend` | 0.2.15 |
| `@backstage/plugin-entity-feedback-common` | 0.1.4 |
| `@backstage/plugin-entity-validation` | 0.1.20 |
| `@backstage/plugin-explore` | 0.4.21 |
| `@backstage/plugin-explore-backend` | 0.0.28 |
| `@backstage/plugin-explore-common` | 0.0.3 |
| `@backstage/plugin-explore-react` | 0.0.39 |
| `@backstage/plugin-firehydrant` | 0.2.19 |
| `@backstage/plugin-fossa` | 0.2.67 |
| `@backstage/plugin-gcalendar` | 0.3.28 |
| `@backstage/plugin-gcp-projects` | 0.3.51 |
| `@backstage/plugin-git-release-manager` | 0.3.47 |
| `@backstage/plugin-github-actions` | 0.6.16 |
| `@backstage/plugin-github-deployments` | 0.1.66 |
| `@backstage/plugin-github-issues` | 0.4.2 |
| `@backstage/plugin-github-pull-requests-board` | 0.2.1 |
| `@backstage/plugin-gitops-profiles` | 0.3.50 |
| `@backstage/plugin-gocd` | 0.1.41 |
| `@backstage/plugin-graphiql` | 0.3.8 |
| `@backstage/plugin-graphql-voyager` | 0.1.17 |
| `@backstage/plugin-ilert` | 0.2.24 |
| `@backstage/plugin-jenkins` | 0.9.10 |
| `@backstage/plugin-jenkins-backend` | 0.4.5 |
| `@backstage/plugin-jenkins-common` | 0.1.26 |
| `@backstage/plugin-kafka` | 0.3.35 |
| `@backstage/plugin-kafka-backend` | 0.3.16 |
| `@backstage/plugin-lighthouse` | 0.4.20 |
| `@backstage/plugin-lighthouse-backend` | 0.4.11 |
| `@backstage/plugin-lighthouse-common` | 0.1.6 |
| `@backstage/plugin-linguist` | 0.1.20 |
| `@backstage/plugin-linguist-backend` | 0.5.16 |
| `@backstage/plugin-linguist-common` | 0.1.3 |
| `@backstage/plugin-microsoft-calendar` | 0.1.17 |
| `@backstage/plugin-newrelic` | 0.3.50 |
| `@backstage/plugin-newrelic-dashboard` | 0.3.10 |
| `@backstage/plugin-nomad` | 0.1.16 |
| `@backstage/plugin-nomad-backend` | 0.1.20 |
| `@backstage/plugin-octopus-deploy` | 0.2.17 |
| `@backstage/plugin-opencost` | 0.2.10 |
| `@backstage/plugin-pagerduty` | 0.7.7 |
| `@backstage/plugin-periskop` | 0.1.33 |
| `@backstage/plugin-periskop-backend` | 0.2.16 |
| `@backstage/plugin-playlist` | 0.2.9 |
| `@backstage/plugin-playlist-backend` | 0.3.22 |
| `@backstage/plugin-playlist-common` | 0.1.16 |
| `@backstage/plugin-puppetdb` | 0.1.18 |
| `@backstage/plugin-rollbar` | 0.4.35 |
| `@backstage/plugin-rollbar-backend` | 0.1.63 |
| `@backstage/plugin-sentry` | 0.5.20 |
| `@backstage/plugin-shortcuts` | 0.3.24 |
| `@backstage/plugin-sonarqube` | 0.7.17 |
| `@backstage/plugin-sonarqube-backend` | 0.2.20 |
| `@backstage/plugin-sonarqube-react` | 0.1.16 |
| `@backstage/plugin-splunk-on-call` | 0.4.24 |
| `@backstage/plugin-stack-overflow` | 0.1.30 |
| `@backstage/plugin-stack-overflow-backend` | 0.2.22 |
| `@backstage/plugin-stackstorm` | 0.1.16 |
| `@backstage/plugin-tech-insights` | 0.3.27 |
| `@backstage/plugin-tech-insights-backend` | 0.5.32 |
| `@backstage/plugin-tech-insights-backend-module-jsonfc` | 0.1.50 |
| `@backstage/plugin-tech-insights-common` | 0.2.13 |
| `@backstage/plugin-tech-insights-node` | 0.6.1 |
| `@backstage/plugin-tech-radar` | 0.7.4 |
| `@backstage/plugin-todo` | 0.2.39 |
| `@backstage/plugin-todo-backend` | 0.3.17 |
| `@backstage/plugin-vault` | 0.1.30 |
| `@backstage/plugin-vault-backend` | 0.4.11 |
| `@backstage/plugin-vault-node` | 0.1.11 |
| `@backstage/plugin-xcmetrics` | 0.2.53 |

### Version bumps

| Package | 1.26.5 | 1.27.5 | Type |
| --- | --- | --- | --- |
| `@backstage/app-defaults` | 1.5.4 | 1.5.5 | Patch |
| `@backstage/backend-app-api` | 0.7.2 | 0.7.5 | Patch |
| `@backstage/backend-common` | 0.21.7 | 0.22.0 | Minor ⚠️ |
| `@backstage/backend-defaults` | 0.2.17 | 0.2.18 | Patch |
| `@backstage/backend-dynamic-feature-service` | 0.2.9 | 0.2.10 | Patch |
| `@backstage/backend-openapi-utils` | 0.1.10 | 0.1.11 | Patch |
| `@backstage/backend-plugin-api` | 0.6.17 | 0.6.18 | Patch |
| `@backstage/backend-tasks` | 0.5.22 | 0.5.23 | Patch |
| `@backstage/backend-test-utils` | 0.3.7 | 0.3.8 | Patch |
| `@backstage/catalog-client` | 1.6.4 | 1.6.5 | Patch |
| `@backstage/catalog-model` | 1.4.5 | 1.5.0 | Minor |
| `@backstage/cli` | 0.26.4 | 0.26.6 | Patch |
| `@backstage/core-app-api` | 1.12.4 | 1.12.5 | Patch |
| `@backstage/core-compat-api` | 0.2.4 | 0.2.5 | Patch |
| `@backstage/core-components` | 0.14.6 | 0.14.7 | Patch |
| `@backstage/create-app` | 0.5.14 | 0.5.15 | Patch |
| `@backstage/dev-utils` | 1.0.31 | 1.0.32 | Patch |
| `@backstage/eslint-plugin` | 0.1.7 | 0.1.8 | Patch |
| `@backstage/frontend-app-api` | 0.6.4 | 0.7.0 | Minor ⚠️ |
| `@backstage/frontend-plugin-api` | 0.6.4 | 0.6.5 | Patch |
| `@backstage/frontend-test-utils` | 0.1.6 | 0.1.7 | Patch |
| `@backstage/integration` | 1.10.0 | 1.11.0 | Minor |
| `@backstage/integration-react` | 1.1.26 | 1.1.27 | Patch |
| `@backstage/plugin-api-docs` | 0.11.4 | 0.11.5 | Patch |
| `@backstage/plugin-app-backend` | 0.3.65 | 0.3.67 | Patch |
| `@backstage/plugin-app-node` | 0.1.17 | 0.1.18 | Patch |
| `@backstage/plugin-app-visualizer` | 0.1.5 | 0.1.6 | Patch |
| `@backstage/plugin-auth-backend` | 0.22.4 | 0.22.5 | Patch |
| `@backstage/plugin-auth-backend-module-atlassian-provider` | 0.1.9 | 0.1.10 | Patch |
| `@backstage/plugin-auth-backend-module-aws-alb-provider` | 0.1.9 | 0.1.10 | Patch |
| `@backstage/plugin-auth-backend-module-azure-easyauth-provider` | 0.1.0 | 0.1.1 | Patch |
| `@backstage/plugin-auth-backend-module-bitbucket-provider` | 0.1.0 | 0.1.1 | Patch |
| `@backstage/plugin-auth-backend-module-cloudflare-access-provider` | 0.1.0 | 0.1.1 | Patch |
| `@backstage/plugin-auth-backend-module-gcp-iap-provider` | 0.2.12 | 0.2.13 | Patch |
| `@backstage/plugin-auth-backend-module-github-provider` | 0.1.14 | 0.1.15 | Patch |
| `@backstage/plugin-auth-backend-module-gitlab-provider` | 0.1.14 | 0.1.15 | Patch |
| `@backstage/plugin-auth-backend-module-google-provider` | 0.1.14 | 0.1.15 | Patch |
| `@backstage/plugin-auth-backend-module-guest-provider` | 0.1.3 | 0.1.4 | Patch |
| `@backstage/plugin-auth-backend-module-microsoft-provider` | 0.1.12 | 0.1.13 | Patch |
| `@backstage/plugin-auth-backend-module-oauth2-provider` | 0.1.14 | 0.1.15 | Patch |
| `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` | 0.1.10 | 0.1.11 | Patch |
| `@backstage/plugin-auth-backend-module-oidc-provider` | 0.1.8 | 0.1.9 | Patch |
| `@backstage/plugin-auth-backend-module-okta-provider` | 0.0.10 | 0.0.11 | Patch ⚠️ |
| `@backstage/plugin-auth-backend-module-pinniped-provider` | 0.1.11 | 0.1.12 | Patch |
| `@backstage/plugin-auth-backend-module-vmware-cloud-provider` | 0.1.9 | 0.1.10 | Patch |
| `@backstage/plugin-auth-node` | 0.4.12 | 0.4.13 | Patch |
| `@backstage/plugin-auth-react` | 0.1.1 | 0.1.2 | Patch |
| `@backstage/plugin-bitbucket-cloud-common` | 0.2.18 | 0.2.19 | Patch |
| `@backstage/plugin-catalog` | 1.19.0 | 1.20.0 | Minor |
| `@backstage/plugin-catalog-backend` | 1.21.1 | 1.22.0 | Minor |
| `@backstage/plugin-catalog-backend-module-aws` | 0.3.12 | 0.3.13 | Patch |
| `@backstage/plugin-catalog-backend-module-azure` | 0.1.37 | 0.1.38 | Patch |
| `@backstage/plugin-catalog-backend-module-backstage-openapi` | 0.2.0 | 0.2.1 | Patch |
| `@backstage/plugin-catalog-backend-module-bitbucket-cloud` | 0.2.4 | 0.2.5 | Patch |
| `@backstage/plugin-catalog-backend-module-bitbucket-server` | 0.1.31 | 0.1.32 | Patch |
| `@backstage/plugin-catalog-backend-module-gcp` | 0.1.18 | 0.1.19 | Patch |
| `@backstage/plugin-catalog-backend-module-gerrit` | 0.1.34 | 0.1.35 | Patch |
| `@backstage/plugin-catalog-backend-module-github` | 0.6.0 | 0.6.1 | Patch |
| `@backstage/plugin-catalog-backend-module-github-org` | 0.1.12 | 0.1.13 | Patch |
| `@backstage/plugin-catalog-backend-module-gitlab` | 0.3.15 | 0.3.16 | Patch |
| `@backstage/plugin-catalog-backend-module-incremental-ingestion` | 0.4.22 | 0.4.23 | Patch |
| `@backstage/plugin-catalog-backend-module-ldap` | 0.5.33 | 0.5.34 | Patch |
| `@backstage/plugin-catalog-backend-module-msgraph` | 0.5.25 | 0.5.26 | Patch |
| `@backstage/plugin-catalog-backend-module-openapi` | 0.1.35 | 0.1.36 | Patch |
| `@backstage/plugin-catalog-backend-module-puppetdb` | 0.1.23 | 0.1.24 | Patch |
| `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` | 0.1.15 | 0.1.16 | Patch |
| `@backstage/plugin-catalog-backend-module-unprocessed` | 0.4.4 | 0.4.5 | Patch |
| `@backstage/plugin-catalog-common` | 1.0.22 | 1.0.23 | Patch |
| `@backstage/plugin-catalog-graph` | 0.4.4 | 0.4.5 | Patch |
| `@backstage/plugin-catalog-import` | 0.10.10 | 0.11.0 | Minor ⚠️ |
| `@backstage/plugin-catalog-node` | 1.11.1 | 1.12.0 | Minor |
| `@backstage/plugin-catalog-react` | 1.11.3 | 1.12.0 | Minor |
| `@backstage/plugin-catalog-unprocessed-entities` | 0.2.3 | 0.2.4 | Patch |
| `@backstage/plugin-config-schema` | 0.1.54 | 0.1.55 | Patch |
| `@backstage/plugin-devtools` | 0.1.13 | 0.1.14 | Patch |
| `@backstage/plugin-devtools-backend` | 0.3.3 | 0.3.4 | Patch |
| `@backstage/plugin-events-backend` | 0.3.4 | 0.3.5 | Patch |
| `@backstage/plugin-events-backend-module-aws-sqs` | 0.3.3 | 0.3.4 | Patch |
| `@backstage/plugin-events-backend-module-azure` | 0.2.3 | 0.2.4 | Patch |
| `@backstage/plugin-events-backend-module-bitbucket-cloud` | 0.2.3 | 0.2.4 | Patch |
| `@backstage/plugin-events-backend-module-gerrit` | 0.2.3 | 0.2.4 | Patch |
| `@backstage/plugin-events-backend-module-github` | 0.2.3 | 0.2.4 | Patch |
| `@backstage/plugin-events-backend-module-gitlab` | 0.2.3 | 0.2.4 | Patch |
| `@backstage/plugin-events-backend-test-utils` | 0.1.27 | 0.1.28 | Patch |
| `@backstage/plugin-events-node` | 0.3.3 | 0.3.4 | Patch |
| `@backstage/plugin-home` | 0.7.3 | 0.7.4 | Patch |
| `@backstage/plugin-home-react` | 0.1.12 | 0.1.13 | Patch |
| `@backstage/plugin-kubernetes` | 0.11.9 | 0.11.10 | Patch |
| `@backstage/plugin-kubernetes-backend` | 0.17.0 | 0.17.1 | Patch |
| `@backstage/plugin-kubernetes-cluster` | 0.0.10 | 0.0.11 | Patch ⚠️ |
| `@backstage/plugin-kubernetes-common` | 0.7.5 | 0.7.6 | Patch |
| `@backstage/plugin-kubernetes-node` | 0.1.11 | 0.1.12 | Patch |
| `@backstage/plugin-kubernetes-react` | 0.3.4 | 0.3.5 | Patch |
| `@backstage/plugin-notifications` | 0.2.0 | 0.2.1 | Patch |
| `@backstage/plugin-notifications-backend` | 0.2.0 | 0.2.1 | Patch |
| `@backstage/plugin-notifications-node` | 0.1.3 | 0.1.4 | Patch |
| `@backstage/plugin-org` | 0.6.24 | 0.6.25 | Patch |
| `@backstage/plugin-org-react` | 0.1.23 | 0.1.24 | Patch |
| `@backstage/plugin-permission-backend` | 0.5.41 | 0.5.42 | Patch |
| `@backstage/plugin-permission-backend-module-allow-all-policy` | 0.1.14 | 0.1.15 | Patch |
| `@backstage/plugin-permission-node` | 0.7.28 | 0.7.29 | Patch |
| `@backstage/plugin-proxy-backend` | 0.4.15 | 0.4.16 | Patch |
| `@backstage/plugin-scaffolder` | 1.19.3 | 1.20.1 | Minor |
| `@backstage/plugin-scaffolder-backend` | 1.22.5 | 1.22.7 | Patch |
| `@backstage/plugin-scaffolder-backend-module-azure` | 0.1.9 | 0.1.10 | Patch |
| `@backstage/plugin-scaffolder-backend-module-bitbucket` | 0.2.7 | 0.2.8 | Patch |
| `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` | 0.1.7 | 0.1.8 | Patch |
| `@backstage/plugin-scaffolder-backend-module-bitbucket-server` | 0.1.7 | 0.1.8 | Patch |
| `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` | 0.2.18 | 0.2.19 | Patch |
| `@backstage/plugin-scaffolder-backend-module-cookiecutter` | 0.2.41 | 0.2.42 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gerrit` | 0.1.9 | 0.1.10 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gitea` | 0.1.7 | 0.1.8 | Patch |
| `@backstage/plugin-scaffolder-backend-module-github` | 0.2.7 | 0.2.8 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gitlab` | 0.3.3 | 0.4.0 | Minor ⚠️ |
| `@backstage/plugin-scaffolder-backend-module-rails` | 0.4.34 | 0.4.35 | Patch |
| `@backstage/plugin-scaffolder-backend-module-sentry` | 0.1.25 | 0.1.26 | Patch |
| `@backstage/plugin-scaffolder-backend-module-yeoman` | 0.3.0 | 0.3.1 | Patch |
| `@backstage/plugin-scaffolder-common` | 1.5.1 | 1.5.2 | Patch |
| `@backstage/plugin-scaffolder-node` | 0.4.3 | 0.4.4 | Patch |
| `@backstage/plugin-scaffolder-node-test-utils` | 0.1.3 | 0.1.4 | Patch |
| `@backstage/plugin-scaffolder-react` | 1.8.4 | 1.8.6 | Patch |
| `@backstage/plugin-search` | 1.4.10 | 1.4.11 | Patch |
| `@backstage/plugin-search-backend` | 1.5.7 | 1.5.9 | Patch |
| `@backstage/plugin-search-backend-module-catalog` | 0.1.23 | 0.1.24 | Patch |
| `@backstage/plugin-search-backend-module-elasticsearch` | 1.4.0 | 1.4.1 | Patch |
| `@backstage/plugin-search-backend-module-explore` | 0.1.23 | 0.1.24 | Patch |
| `@backstage/plugin-search-backend-module-pg` | 0.5.26 | 0.5.27 | Patch |
| `@backstage/plugin-search-backend-module-stack-overflow-collator` | 0.1.10 | 0.1.11 | Patch |
| `@backstage/plugin-search-backend-module-techdocs` | 0.1.22 | 0.1.23 | Patch |
| `@backstage/plugin-search-backend-node` | 1.2.21 | 1.2.23 | Patch |
| `@backstage/plugin-search-react` | 1.7.10 | 1.7.11 | Patch |
| `@backstage/plugin-signals` | 0.0.5 | 0.0.6 | Patch ⚠️ |
| `@backstage/plugin-signals-backend` | 0.1.3 | 0.1.4 | Patch |
| `@backstage/plugin-signals-node` | 0.1.3 | 0.1.4 | Patch |
| `@backstage/plugin-techdocs` | 1.10.4 | 1.10.5 | Patch |
| `@backstage/plugin-techdocs-addons-test-utils` | 1.0.31 | 1.0.32 | Patch |
| `@backstage/plugin-techdocs-backend` | 1.10.4 | 1.10.5 | Patch |
| `@backstage/plugin-techdocs-module-addons-contrib` | 1.1.9 | 1.1.10 | Patch |
| `@backstage/plugin-techdocs-node` | 1.12.3 | 1.12.4 | Patch |
| `@backstage/plugin-techdocs-react` | 1.2.3 | 1.2.4 | Patch |
| `@backstage/plugin-user-settings` | 0.8.5 | 0.8.6 | Patch |
| `@backstage/plugin-user-settings-backend` | 0.2.16 | 0.2.17 | Patch |
| `@backstage/repo-tools` | 0.8.0 | 0.9.0 | Minor ⚠️ |
| `@backstage/test-utils` | 1.5.4 | 1.5.5 | Patch |
| `@backstage/theme` | 0.5.3 | 0.5.5 | Patch |
| `@techdocs/cli` | 1.8.10 | 1.8.11 | Patch |
