# Backstage Release 1.17.0 changelog

Changes between 1.16.0 and 1.17.0 — 189 changed and 3 added packages.

## Summary

- [Newly added packages](#newly-added-packages): 3 packages
- [Breaking changes](#breaking-changes): 11 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 3 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 2 packages
- [Other minor version bumps](#other-minor-version-bumps): 6 packages
- [Other patch version bumps](#other-patch-version-bumps): 115 packages
- [Excluded dependency updates](#excluded-dependency-updates): 52 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/plugin-analytics-module-newrelic-browser` (new, 0.0.1)](#backstageplugin-analytics-module-newrelic-browser-new-001)
  - [`@backstage/plugin-app-node` (new, 0.1.0)](#backstageplugin-app-node-new-010)
  - [`@backstage/plugin-catalog-backend-module-gcp` (new, 0.1.0)](#backstageplugin-catalog-backend-module-gcp-new-010)
- [Breaking changes](#breaking-changes)
  - [`@backstage/backend-app-api` (0.4.5 → 0.5.0)](#backstagebackend-app-api-045--050)
  - [`@backstage/backend-defaults` (0.1.12 → 0.2.0)](#backstagebackend-defaults-0112--020)
  - [`@backstage/backend-plugin-api` (0.5.4 → 0.6.0)](#backstagebackend-plugin-api-054--060)
  - [`@backstage/backend-test-utils` (0.1.39 → 0.2.0)](#backstagebackend-test-utils-0139--020)
  - [`@backstage/plugin-catalog-backend-module-unprocessed` (0.1.1 → 0.2.0)](#backstageplugin-catalog-backend-module-unprocessed-011--020)
  - [`@backstage/plugin-kubernetes` (0.9.3 → 0.10.0)](#backstageplugin-kubernetes-093--0100)
  - [`@backstage/plugin-linguist-backend` (0.3.1 → 0.4.0)](#backstageplugin-linguist-backend-031--040)
  - [`@backstage/plugin-org` (0.6.10 → 0.6.11)](#backstageplugin-org-0610--0611)
  - [`@backstage/plugin-search-backend-module-catalog` (0.1.3 → 0.1.4)](#backstageplugin-search-backend-module-catalog-013--014)
  - [`@backstage/plugin-search-backend-module-explore` (0.1.3 → 0.1.4)](#backstageplugin-search-backend-module-explore-013--014)
  - [`@backstage/plugin-search-backend-module-techdocs` (0.1.3 → 0.1.4)](#backstageplugin-search-backend-module-techdocs-013--014)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/plugin-proxy-backend` (0.2.41 → 0.3.0)](#backstageplugin-proxy-backend-0241--030)
  - [`@backstage/plugin-scaffolder-node` (0.1.5 → 0.2.0)](#backstageplugin-scaffolder-node-015--020)
  - [`@backstage/plugin-todo-backend` (0.1.44 → 0.2.0)](#backstageplugin-todo-backend-0144--020)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/backend-openapi-utils` (0.0.2 → 0.0.3)](#backstagebackend-openapi-utils-002--003)
  - [`@backstage/plugin-explore-backend` (0.0.9 → 0.0.10)](#backstageplugin-explore-backend-009--0010)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/config-loader` (1.3.2 → 1.4.0)](#backstageconfig-loader-132--140)
  - [`@backstage/integration` (1.5.1 → 1.6.0)](#backstageintegration-151--160)
  - [`@backstage/plugin-catalog-backend` (1.11.0 → 1.12.0)](#backstageplugin-catalog-backend-1110--1120)
  - [`@backstage/plugin-scaffolder-backend` (1.15.1 → 1.16.0)](#backstageplugin-scaffolder-backend-1151--1160)
  - [`@backstage/plugin-scaffolder-common` (1.3.2 → 1.4.0)](#backstageplugin-scaffolder-common-132--140)
  - [`@backstage/plugin-search-backend` (1.3.3 → 1.4.0)](#backstageplugin-search-backend-133--140)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-common` (0.19.1 → 0.19.2)](#backstagebackend-common-0191--0192)
  - [`@backstage/backend-tasks` (0.5.4 → 0.5.5)](#backstagebackend-tasks-054--055)
  - [`@backstage/cli` (0.22.9 → 0.22.10)](#backstagecli-0229--02210)
  - [`@backstage/cli-node` (0.1.2 → 0.1.3)](#backstagecli-node-012--013)
  - [`@backstage/core-app-api` (1.9.0 → 1.9.1)](#backstagecore-app-api-190--191)
  - [`@backstage/core-components` (0.13.3 → 0.13.4)](#backstagecore-components-0133--0134)
  - [`@backstage/create-app` (0.5.3 → 0.5.4)](#backstagecreate-app-053--054)
  - [`@backstage/dev-utils` (1.0.17 → 1.0.18)](#backstagedev-utils-1017--1018)
  - [`@backstage/integration-react` (1.1.15 → 1.1.16)](#backstageintegration-react-1115--1116)
  - [`@backstage/plugin-adr` (0.6.3 → 0.6.4)](#backstageplugin-adr-063--064)
  - [`@backstage/plugin-airbrake` (0.3.20 → 0.3.21)](#backstageplugin-airbrake-0320--0321)
  - [`@backstage/plugin-airbrake-backend` (0.2.20 → 0.2.21)](#backstageplugin-airbrake-backend-0220--0221)
  - [`@backstage/plugin-allure` (0.1.36 → 0.1.37)](#backstageplugin-allure-0136--0137)
  - [`@backstage/plugin-analytics-module-ga` (0.1.31 → 0.1.32)](#backstageplugin-analytics-module-ga-0131--0132)
  - [`@backstage/plugin-analytics-module-ga4` (0.1.2 → 0.1.3)](#backstageplugin-analytics-module-ga4-012--013)
  - [`@backstage/plugin-apache-airflow` (0.2.13 → 0.2.14)](#backstageplugin-apache-airflow-0213--0214)
  - [`@backstage/plugin-apollo-explorer` (0.1.13 → 0.1.14)](#backstageplugin-apollo-explorer-0113--0114)
  - [`@backstage/plugin-app-backend` (0.3.47 → 0.3.48)](#backstageplugin-app-backend-0347--0348)
  - [`@backstage/plugin-auth-backend` (0.18.5 → 0.18.6)](#backstageplugin-auth-backend-0185--0186)
  - [`@backstage/plugin-auth-node` (0.2.16 → 0.2.17)](#backstageplugin-auth-node-0216--0217)
  - [`@backstage/plugin-azure-devops-backend` (0.3.26 → 0.3.27)](#backstageplugin-azure-devops-backend-0326--0327)
  - [`@backstage/plugin-badges-backend` (0.2.2 → 0.2.3)](#backstageplugin-badges-backend-022--023)
  - [`@backstage/plugin-bazaar` (0.2.11 → 0.2.12)](#backstageplugin-bazaar-0211--0212)
  - [`@backstage/plugin-bazaar-backend` (0.2.10 → 0.2.11)](#backstageplugin-bazaar-backend-0210--0211)
  - [`@backstage/plugin-bitbucket-cloud-common` (0.2.8 → 0.2.9)](#backstageplugin-bitbucket-cloud-common-028--029)
  - [`@backstage/plugin-bitrise` (0.1.47 → 0.1.48)](#backstageplugin-bitrise-0147--0148)
  - [`@backstage/plugin-catalog` (1.12.0 → 1.12.1)](#backstageplugin-catalog-1120--1121)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.2.2 → 0.2.3)](#backstageplugin-catalog-backend-module-aws-022--023)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.1.18 → 0.1.19)](#backstageplugin-catalog-backend-module-azure-0118--0119)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.14 → 0.1.15)](#backstageplugin-catalog-backend-module-bitbucket-cloud-0114--0115)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.12 → 0.1.13)](#backstageplugin-catalog-backend-module-bitbucket-server-0112--0113)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (0.1.15 → 0.1.16)](#backstageplugin-catalog-backend-module-gerrit-0115--0116)
  - [`@backstage/plugin-catalog-backend-module-github` (0.3.2 → 0.3.3)](#backstageplugin-catalog-backend-module-github-032--033)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.2.3 → 0.2.4)](#backstageplugin-catalog-backend-module-gitlab-023--024)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.0 → 0.4.1)](#backstageplugin-catalog-backend-module-incremental-ingestion-040--041)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.5.6 → 0.5.7)](#backstageplugin-catalog-backend-module-msgraph-056--057)
  - [`@backstage/plugin-catalog-backend-module-puppetdb` (0.1.4 → 0.1.5)](#backstageplugin-catalog-backend-module-puppetdb-014--015)
  - [`@backstage/plugin-catalog-graph` (0.2.32 → 0.2.33)](#backstageplugin-catalog-graph-0232--0233)
  - [`@backstage/plugin-catalog-node` (1.4.0 → 1.4.1)](#backstageplugin-catalog-node-140--141)
  - [`@backstage/plugin-catalog-react` (1.8.0 → 1.8.1)](#backstageplugin-catalog-react-180--181)
  - [`@backstage/plugin-cicd-statistics-module-gitlab` (0.1.16 → 0.1.17)](#backstageplugin-cicd-statistics-module-gitlab-0116--0117)
  - [`@backstage/plugin-code-climate` (0.1.20 → 0.1.21)](#backstageplugin-code-climate-0120--0121)
  - [`@backstage/plugin-code-coverage` (0.2.13 → 0.2.14)](#backstageplugin-code-coverage-0213--0214)
  - [`@backstage/plugin-code-coverage-backend` (0.2.13 → 0.2.14)](#backstageplugin-code-coverage-backend-0213--0214)
  - [`@backstage/plugin-codescene` (0.1.15 → 0.1.16)](#backstageplugin-codescene-0115--0116)
  - [`@backstage/plugin-config-schema` (0.1.43 → 0.1.44)](#backstageplugin-config-schema-0143--0144)
  - [`@backstage/plugin-devtools` (0.1.2 → 0.1.3)](#backstageplugin-devtools-012--013)
  - [`@backstage/plugin-devtools-backend` (0.1.2 → 0.1.3)](#backstageplugin-devtools-backend-012--013)
  - [`@backstage/plugin-devtools-common` (0.1.2 → 0.1.3)](#backstageplugin-devtools-common-012--013)
  - [`@backstage/plugin-dynatrace` (7.0.0 → 7.0.1)](#backstageplugin-dynatrace-700--701)
  - [`@backstage/plugin-entity-feedback` (0.2.3 → 0.2.4)](#backstageplugin-entity-feedback-023--024)
  - [`@backstage/plugin-entity-feedback-backend` (0.1.5 → 0.1.6)](#backstageplugin-entity-feedback-backend-015--016)
  - [`@backstage/plugin-entity-feedback-common` (0.1.1 → 0.1.2)](#backstageplugin-entity-feedback-common-011--012)
  - [`@backstage/plugin-entity-validation` (0.1.5 → 0.1.6)](#backstageplugin-entity-validation-015--016)
  - [`@backstage/plugin-events-backend` (0.2.8 → 0.2.9)](#backstageplugin-events-backend-028--029)
  - [`@backstage/plugin-events-backend-module-aws-sqs` (0.2.2 → 0.2.3)](#backstageplugin-events-backend-module-aws-sqs-022--023)
  - [`@backstage/plugin-events-backend-module-azure` (0.1.9 → 0.1.10)](#backstageplugin-events-backend-module-azure-019--0110)
  - [`@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.9 → 0.1.10)](#backstageplugin-events-backend-module-bitbucket-cloud-019--0110)
  - [`@backstage/plugin-events-backend-module-gerrit` (0.1.9 → 0.1.10)](#backstageplugin-events-backend-module-gerrit-019--0110)
  - [`@backstage/plugin-events-backend-module-github` (0.1.9 → 0.1.10)](#backstageplugin-events-backend-module-github-019--0110)
  - [`@backstage/plugin-events-backend-module-gitlab` (0.1.9 → 0.1.10)](#backstageplugin-events-backend-module-gitlab-019--0110)
  - [`@backstage/plugin-events-backend-test-utils` (0.1.9 → 0.1.10)](#backstageplugin-events-backend-test-utils-019--0110)
  - [`@backstage/plugin-events-node` (0.2.8 → 0.2.9)](#backstageplugin-events-node-028--029)
  - [`@backstage/plugin-explore` (0.4.6 → 0.4.7)](#backstageplugin-explore-046--047)
  - [`@backstage/plugin-firehydrant` (0.2.4 → 0.2.5)](#backstageplugin-firehydrant-024--025)
  - [`@backstage/plugin-gcalendar` (0.3.16 → 0.3.17)](#backstageplugin-gcalendar-0316--0317)
  - [`@backstage/plugin-git-release-manager` (0.3.33 → 0.3.34)](#backstageplugin-git-release-manager-0333--0334)
  - [`@backstage/plugin-github-deployments` (0.1.51 → 0.1.52)](#backstageplugin-github-deployments-0151--0152)
  - [`@backstage/plugin-github-issues` (0.2.9 → 0.2.10)](#backstageplugin-github-issues-029--0210)
  - [`@backstage/plugin-graphql-voyager` (0.1.5 → 0.1.6)](#backstageplugin-graphql-voyager-015--016)
  - [`@backstage/plugin-home` (0.5.4 → 0.5.5)](#backstageplugin-home-054--055)
  - [`@backstage/plugin-home-react` (0.1.1 → 0.1.2)](#backstageplugin-home-react-011--012)
  - [`@backstage/plugin-ilert` (0.2.9 → 0.2.10)](#backstageplugin-ilert-029--0210)
  - [`@backstage/plugin-jenkins-backend` (0.2.2 → 0.2.3)](#backstageplugin-jenkins-backend-022--023)
  - [`@backstage/plugin-jenkins-common` (0.1.17 → 0.1.18)](#backstageplugin-jenkins-common-0117--0118)
  - [`@backstage/plugin-kafka` (0.3.20 → 0.3.21)](#backstageplugin-kafka-0320--0321)
  - [`@backstage/plugin-kafka-backend` (0.2.40 → 0.2.41)](#backstageplugin-kafka-backend-0240--0241)
  - [`@backstage/plugin-kubernetes-backend` (0.11.2 → 0.11.3)](#backstageplugin-kubernetes-backend-0112--0113)
  - [`@backstage/plugin-lighthouse-backend` (0.2.3 → 0.2.4)](#backstageplugin-lighthouse-backend-023--024)
  - [`@backstage/plugin-linguist-common` (0.1.0 → 0.1.1)](#backstageplugin-linguist-common-010--011)
  - [`@backstage/plugin-microsoft-calendar` (0.1.5 → 0.1.6)](#backstageplugin-microsoft-calendar-015--016)
  - [`@backstage/plugin-newrelic` (0.3.38 → 0.3.39)](#backstageplugin-newrelic-0338--0339)
  - [`@backstage/plugin-newrelic-dashboard` (0.2.13 → 0.2.14)](#backstageplugin-newrelic-dashboard-0213--0214)
  - [`@backstage/plugin-nomad` (0.1.1 → 0.1.2)](#backstageplugin-nomad-011--012)
  - [`@backstage/plugin-nomad-backend` (0.1.1 → 0.1.2)](#backstageplugin-nomad-backend-011--012)
  - [`@backstage/plugin-octopus-deploy` (0.2.2 → 0.2.3)](#backstageplugin-octopus-deploy-022--023)
  - [`@backstage/plugin-org-react` (0.1.9 → 0.1.10)](#backstageplugin-org-react-019--0110)
  - [`@backstage/plugin-pagerduty` (0.6.1 → 0.6.2)](#backstageplugin-pagerduty-061--062)
  - [`@backstage/plugin-periskop` (0.1.18 → 0.1.19)](#backstageplugin-periskop-0118--0119)
  - [`@backstage/plugin-periskop-backend` (0.1.18 → 0.1.19)](#backstageplugin-periskop-backend-0118--0119)
  - [`@backstage/plugin-permission-backend` (0.5.22 → 0.5.23)](#backstageplugin-permission-backend-0522--0523)
  - [`@backstage/plugin-playlist` (0.1.12 → 0.1.13)](#backstageplugin-playlist-0112--0113)
  - [`@backstage/plugin-playlist-backend` (0.3.3 → 0.3.4)](#backstageplugin-playlist-backend-033--034)
  - [`@backstage/plugin-playlist-common` (0.1.8 → 0.1.9)](#backstageplugin-playlist-common-018--019)
  - [`@backstage/plugin-scaffolder` (1.14.1 → 1.14.2)](#backstageplugin-scaffolder-1141--1142)
  - [`@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.0 → 0.2.1)](#backstageplugin-scaffolder-backend-module-confluence-to-markdown-020--021)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.23 → 0.2.24)](#backstageplugin-scaffolder-backend-module-cookiecutter-0223--0224)
  - [`@backstage/plugin-scaffolder-backend-module-rails` (0.4.16 → 0.4.17)](#backstageplugin-scaffolder-backend-module-rails-0416--0417)
  - [`@backstage/plugin-scaffolder-backend-module-sentry` (0.1.7 → 0.1.8)](#backstageplugin-scaffolder-backend-module-sentry-017--018)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.20 → 0.2.21)](#backstageplugin-scaffolder-backend-module-yeoman-0220--0221)
  - [`@backstage/plugin-scaffolder-react` (1.5.1 → 1.5.2)](#backstageplugin-scaffolder-react-151--152)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.3.2 → 1.3.3)](#backstageplugin-search-backend-module-elasticsearch-132--133)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.8 → 0.5.9)](#backstageplugin-search-backend-module-pg-058--059)
  - [`@backstage/plugin-search-backend-node` (1.2.3 → 1.2.4)](#backstageplugin-search-backend-node-123--124)
  - [`@backstage/plugin-shortcuts` (0.3.12 → 0.3.13)](#backstageplugin-shortcuts-0312--0313)
  - [`@backstage/plugin-sonarqube` (0.7.1 → 0.7.2)](#backstageplugin-sonarqube-071--072)
  - [`@backstage/plugin-sonarqube-backend` (0.2.1 → 0.2.2)](#backstageplugin-sonarqube-backend-021--022)
  - [`@backstage/plugin-splunk-on-call` (0.4.9 → 0.4.10)](#backstageplugin-splunk-on-call-049--0410)
  - [`@backstage/plugin-stack-overflow` (0.1.18 → 0.1.19)](#backstageplugin-stack-overflow-0118--0119)
  - [`@backstage/plugin-tech-insights` (0.3.12 → 0.3.13)](#backstageplugin-tech-insights-0312--0313)
  - [`@backstage/plugin-techdocs-backend` (1.6.4 → 1.6.5)](#backstageplugin-techdocs-backend-164--165)
  - [`@backstage/plugin-user-settings-backend` (0.1.11 → 0.1.12)](#backstageplugin-user-settings-backend-0111--0112)
  - [`@backstage/plugin-xcmetrics` (0.2.40 → 0.2.41)](#backstageplugin-xcmetrics-0240--0241)
  - [`@backstage/repo-tools` (0.3.2 → 0.3.3)](#backstagerepo-tools-032--033)
  - [`@techdocs/cli` (1.4.4 → 1.4.5)](#techdocscli-144--145)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/plugin-analytics-module-newrelic-browser` (new, [0.0.1](../../changelogs/@backstage/plugin-analytics-module-newrelic-browser.md#001))

#### 0.0.1

##### Patch Changes

- [`ec7357258853`](https://github.com/backstage/backstage/commit/ec7357258853): Introduced the New Relic Browser analytics module. Check out the plugins [README.md](https://github.com/backstage/backstage/tree/master/plugins/analytics-module-newrelic-browser) for more details!

### `@backstage/plugin-app-node` (new, [0.1.0](../../changelogs/@backstage/plugin-app-node.md#010))

#### 0.1.0

##### Minor Changes

- [`9fbe95ef6503`](https://github.com/backstage/backstage/commit/9fbe95ef6503): Added the `app` plugin node library, initially providing an extension point that can be used to configure a static fallback handler.

### `@backstage/plugin-catalog-backend-module-gcp` (new, [0.1.0](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#010))

#### 0.1.0

##### Minor Changes

- [`290eff6692aa`](https://github.com/backstage/backstage/commit/290eff6692aa): Added GCP catalog plugin with GKE provider

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`

## Breaking changes

### `@backstage/backend-app-api` (0.4.5 → [0.5.0](../../changelogs/@backstage/backend-app-api.md#050))

#### 0.5.0

##### Minor Changes

- [`b9c57a4f857e`](https://github.com/backstage/backstage/commit/b9c57a4f857e): **BREAKING**: Renamed `configServiceFactory` to `rootConfigServiceFactory`.
- [`a6d7983f349c`](https://github.com/backstage/backstage/commit/a6d7983f349c): **BREAKING**: Removed the `services` option from `createBackend`. Service factories are now `BackendFeature`s and should be installed with `backend.add(...)` instead. The following should be migrated:

  ```ts
  const backend = createBackend({ services: [myCustomServiceFactory] });
  ```

  To instead pass the service factory via `backend.add(...)`:

  ```ts
  const backend = createBackend();
  backend.add(customRootLoggerServiceFactory);
  ```

##### Patch Changes

- [`e65c4896f755`](https://github.com/backstage/backstage/commit/e65c4896f755): Do not throw in backend.stop, if start failed
- [`c7aa4ff1793c`](https://github.com/backstage/backstage/commit/c7aa4ff1793c): Allow modules to register extension points.
- [`57a10c6c69cc`](https://github.com/backstage/backstage/commit/57a10c6c69cc): Add validation to make sure that extension points do not cross plugin boundaries.
- [`cc9256a33bcc`](https://github.com/backstage/backstage/commit/cc9256a33bcc): Added new experimental `featureDiscoveryServiceFactory`, available as an `/alpha` export.

### `@backstage/backend-defaults` (0.1.12 → [0.2.0](../../changelogs/@backstage/backend-defaults.md#020))

#### 0.2.0

##### Minor Changes

- [`d008aefef808`](https://github.com/backstage/backstage/commit/d008aefef808): **BREAKING**: Removing shared environments concept from the new experimental backend system.
- [`a6d7983f349c`](https://github.com/backstage/backstage/commit/a6d7983f349c): **BREAKING**: Removed the `services` option from `createBackend`. Service factories are now `BackendFeature`s and should be installed with `backend.add(...)` instead. The following should be migrated:

  ```ts
  const backend = createBackend({ services: [myCustomServiceFactory] });
  ```

  To instead pass the service factory via `backend.add(...)`:

  ```ts
  const backend = createBackend();
  backend.add(customRootLoggerServiceFactory);
  ```

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`

### `@backstage/backend-plugin-api` (0.5.4 → [0.6.0](../../changelogs/@backstage/backend-plugin-api.md#060))

#### 0.6.0

##### Minor Changes

- [`c49785f00cab`](https://github.com/backstage/backstage/commit/c49785f00cab): **BREAKING**: It is no longer possible to declare options as being required with `createServiceFactory`.
- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): **BREAKING**: Renamed `coreServices.config` to `coreServices.rootConfig`.
- [`51987dbdaf87`](https://github.com/backstage/backstage/commit/51987dbdaf87): **BREAKING**: Removed the ability to define options for plugins and modules. Existing options should be migrated to instead use either static configuration or extension points.
- [`d008aefef808`](https://github.com/backstage/backstage/commit/d008aefef808): **BREAKING**: Removing shared environments concept from the new experimental backend system.

##### Patch Changes

- [`c7aa4ff1793c`](https://github.com/backstage/backstage/commit/c7aa4ff1793c): Allow modules to register extension points.
- [`cc9256a33bcc`](https://github.com/backstage/backstage/commit/cc9256a33bcc): Added new experimental `featureDiscoveryServiceRef`, available as an `/alpha` export.
- [`a6d7983f349c`](https://github.com/backstage/backstage/commit/a6d7983f349c): **BREAKING**: Removed the `services` option from `createBackend`. Service factories are now `BackendFeature`s and should be installed with `backend.add(...)` instead. The following should be migrated:

  ```ts
  const backend = createBackend({ services: [myCustomServiceFactory] });
  ```

  To instead pass the service factory via `backend.add(...)`:

  ```ts
  const backend = createBackend();
  backend.add(customRootLoggerServiceFactory);
  ```

### `@backstage/backend-test-utils` (0.1.39 → [0.2.0](../../changelogs/@backstage/backend-test-utils.md#020))

#### 0.2.0

##### Minor Changes

- [`b9c57a4f857e`](https://github.com/backstage/backstage/commit/b9c57a4f857e): **BREAKING**: Renamed `mockServices.config` to `mockServices.rootConfig`.
- [`a6d7983f349c`](https://github.com/backstage/backstage/commit/a6d7983f349c): **BREAKING**: Removed the `services` option from `createBackend`. Service factories are now `BackendFeature`s and should be installed with `backend.add(...)` instead. The following should be migrated:

  ```ts
  const backend = createBackend({ services: [myCustomServiceFactory] });
  ```

  To instead pass the service factory via `backend.add(...)`:

  ```ts
  const backend = createBackend();
  backend.add(customRootLoggerServiceFactory);
  ```

##### Patch Changes

- [`ae9304818136`](https://github.com/backstage/backstage/commit/ae9304818136): Add needed constants and constructs to support PostgreSQL version 14 as test database

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.1.1 → [0.2.0](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#020))

#### 0.2.0

##### Minor Changes

- [`5156a94c2e2a`](https://github.com/backstage/backstage/commit/5156a94c2e2a): **BREAKING**: Fixing typo in exported module. You will have to rename the import to the correct spelling. `UnprocessedEntites` -> `UnprocessedEntities`

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-kubernetes` (0.9.3 → [0.10.0](../../changelogs/@backstage/plugin-kubernetes.md#0100))

#### 0.10.0

##### Minor Changes

- [`4b6d41737aad`](https://github.com/backstage/backstage/commit/4b6d41737aad): **BREAKING**: Fixed typos in exported module attributes. Many users may see no changes, but if you have customized the plugin output, you may have to rename the following:

  - Component attribute: `<ResourceUtilization totalFormated={} />` to `<ResourceUtilization totalFormatted={} />`
  - Interface attribute: `DetectedError.occuranceCount` to `DetectedError.occurrenceCount`.

##### Patch Changes

- [`562e34d2693f`](https://github.com/backstage/backstage/commit/562e34d2693f): Fix container memory limits

### `@backstage/plugin-linguist-backend` (0.3.1 → [0.4.0](../../changelogs/@backstage/plugin-linguist-backend.md#040))

#### 0.4.0

##### Minor Changes

- [`d440f1dd0e72`](https://github.com/backstage/backstage/commit/d440f1dd0e72): Adds a processor to the linguist backend which can automatically add language tags to entities
- [`0896d85d5ab5`](https://github.com/backstage/backstage/commit/0896d85d5ab5): **BREAKING**: Removed the alpha export plugin options from exported `linguistPlugin()` (used by the new backend system) in favour of static config.

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata
- [`ca5e591cb86a`](https://github.com/backstage/backstage/commit/ca5e591cb86a): Fixed bug in LinguistBackendClient.ts file where if the linguistJsOptions is specified and sent over to the linguist-js package it would get changed (another attribute would be added) causing future entities of the batch to fail with an error

### `@backstage/plugin-org` (0.6.10 → [0.6.11](../../changelogs/@backstage/plugin-org.md#0611))

#### 0.6.11

##### Patch Changes

- [`50331203e2a2`](https://github.com/backstage/backstage/commit/50331203e2a2): Fixed bug in MembersListCard component where the url for the members was static which was breaking the component when catalog route was changed
- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-search-backend-module-catalog` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#014))

#### 0.1.4

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`
- [`29f77f923c71`](https://github.com/backstage/backstage/commit/29f77f923c71): Ensure that all services are dependency injected into the module instead of taken from options
- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata
- [`ec1032129e47`](https://github.com/backstage/backstage/commit/ec1032129e47): Breaking change in the alpha export `searchModuleCatalogCollator`: Moved collator settings from module options into app-config. You are now expected to set up the catalog collator under the `search.collators.catalog` configuration key. There is also a new `catalogCollatorExtensionPoint` extension point for the module, wherein you can set custom transformers.
- [`d4f19a16bd52`](https://github.com/backstage/backstage/commit/d4f19a16bd52): Add User Entity email to the search index so that users can be found by their email.

### `@backstage/plugin-search-backend-module-explore` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-search-backend-module-explore.md#014))

#### 0.1.4

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`
- [`29f77f923c71`](https://github.com/backstage/backstage/commit/29f77f923c71): Ensure that all services are dependency injected into the module instead of taken from options
- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata
- [`6694e79ab396`](https://github.com/backstage/backstage/commit/6694e79ab396): Breaking change for the alpha export moved `schedule` from module options into app-config for the new backend system. You can now pass in a `TaskScheduleDefinitionConfig` through the `search.collators.explore.schedule` configuration key.

### `@backstage/plugin-search-backend-module-techdocs` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#014))

#### 0.1.4

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`
- [`29f77f923c71`](https://github.com/backstage/backstage/commit/29f77f923c71): Ensure that all services are dependency injected into the module instead of taken from options
- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata
- [`6694e79ab396`](https://github.com/backstage/backstage/commit/6694e79ab396): **BREAKING:** Moved `schedule` & `collators` settings from module options into app-config for the new backend system. You can now pass in a `TaskScheduleDefinitionConfig` through the `search.collators.techdocs.schedule` configuration key & configure the `TechDocsCollatorFactory` with the key `search.collators.techdocs`.

## 0.x minor version bumps

### `@backstage/plugin-proxy-backend` (0.2.41 → [0.3.0](../../changelogs/@backstage/plugin-proxy-backend.md#030))

#### 0.3.0

##### Minor Changes

- [`7daf65bfcfa1`](https://github.com/backstage/backstage/commit/7daf65bfcfa1): Defining proxy endpoints directly under the root `proxy` configuration key is deprecated. Endpoints should now be declared under `proxy.endpoints` instead. The `skipInvalidProxies` and `reviveConsumedRequestBodies` can now also be configured through static configuration.

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`
- [`4b82382ed8c2`](https://github.com/backstage/backstage/commit/4b82382ed8c2): Fixed invalid configuration schema. The configuration schema may be more strict as a result.

### `@backstage/plugin-scaffolder-node` (0.1.5 → [0.2.0](../../changelogs/@backstage/plugin-scaffolder-node.md#020))

#### 0.2.0

##### Minor Changes

- [`e514aac3eac0`](https://github.com/backstage/backstage/commit/e514aac3eac0): Introduce `each` property on action steps, allowing them to be ran repeatedly.

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata
- [`e07a4914f621`](https://github.com/backstage/backstage/commit/e07a4914f621): Added several new types that were moved from `@backstage/plugin-scaffolder-backend`.
- [`349611126ae2`](https://github.com/backstage/backstage/commit/349611126ae2): Added two new alpha extension points, `scaffolderTaskBrokerExtensionPoint` and `scaffolderTemplatingExtensionPoint`.
- [`0b1d775be05b`](https://github.com/backstage/backstage/commit/0b1d775be05b): Export `TemplateExample` from the `createTemplateAction` type.
- [`d3b31a791eb1`](https://github.com/backstage/backstage/commit/d3b31a791eb1): Deprecated `executeShellCommand`, `RunCommandOptions`, and `fetchContents` from `@backstage/plugin-scaffolder-backend`, since they are useful for Scaffolder modules (who should not be importing from the plugin package itself). You should now import these from `@backstage/plugin-scaffolder-backend-node` instead. `RunCommandOptions` was renamed in the Node package as `ExecuteShellCommandOptions`, for consistency.

### `@backstage/plugin-todo-backend` (0.1.44 → [0.2.0](../../changelogs/@backstage/plugin-todo-backend.md#020))

#### 0.2.0

##### Minor Changes

- [`ebeb77586975`](https://github.com/backstage/backstage/commit/ebeb77586975): Now performs request validation based on OpenAPI schema through `@backstage/backend-openapi-utils`. Error responses for invalid input, like `"a"` instead of a number, may have changed.

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`
- [`ad3fb5401729`](https://github.com/backstage/backstage/commit/ad3fb5401729): Fixed a bug where filter queries from the frontend would always fail validation.

## 0.0.x patch version bumps

### `@backstage/backend-openapi-utils` (0.0.2 → [0.0.3](../../changelogs/@backstage/backend-openapi-utils.md#003))

#### 0.0.3

##### Patch Changes

- [`ebeb77586975`](https://github.com/backstage/backstage/commit/ebeb77586975): Add a new `createRouter` method for generating an `express` router that validates against your spec. Also fixes a bug with the query parameters type resolution.
- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-explore-backend` (0.0.9 → [0.0.10](../../changelogs/@backstage/plugin-explore-backend.md#0010))

#### 0.0.10

##### Patch Changes

- [`eda2a699f40d`](https://github.com/backstage/backstage/commit/eda2a699f40d): Moved the config example from the "Tools as Code" section to the "Tools as Config" section of the README
- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

## Other minor version bumps

### `@backstage/config-loader` (1.3.2 → [1.4.0](../../changelogs/@backstage/config-loader.md#140))

#### 1.4.0

##### Minor Changes

- [`2f1859585998`](https://github.com/backstage/backstage/commit/2f1859585998): Loading invalid TypeScript configuration schemas will now throw an error rather than silently being ignored.

  In particular this includes defining any additional types other than `Config` in the schema file, or use of unsupported types such as `Record` or `Partial`.

- [`cd514545d1d0`](https://github.com/backstage/backstage/commit/cd514545d1d0): Adds a new `deepVisibility` schema keyword that sets child visibility recursively to the defined value, respecting preexisting values or child `deepVisibility`.

  Example usage:

  ```ts
  export interface Config {
    /**
     * Enforces a default of `secret` instead of `backend` for this object.
     * @deepVisibility secret
     */
    mySecretProperty: {
      type: 'object';
      properties: {
        secretValue: {
          type: 'string';
        };

        verySecretProperty: {
          type: 'string';
        };
      };
    };
  }
  ```

  Example of a schema that would not be allowed:

  ```ts
  export interface Config {
    /**
     * Set the top level property to secret, enforcing a default of `secret` instead of `backend` for this object.
     * @deepVisibility secret
     */
    mySecretProperty: {
      type: 'object';
      properties: {
        frontendUrl: {
          /**
           * We can NOT override the visibility to reveal a property to the front end.
           * @visibility frontend
           */
          type: 'string';
        };

        verySecretProperty: {
          type: 'string';
        };
      };
    };
  }
  ```

### `@backstage/integration` (1.5.1 → [1.6.0](../../changelogs/@backstage/integration.md#160))

#### 1.6.0

##### Minor Changes

- [`443afcf7f567`](https://github.com/backstage/backstage/commit/443afcf7f567): Added `buildGerritGitilesArchiveUrl()` to construct a Gitiles URL to download an archive.
  Gitiles URL that uses an authenticated prefix (`/a/`) can now be parsed by the integration.

### `@backstage/plugin-catalog-backend` (1.11.0 → [1.12.0](../../changelogs/@backstage/plugin-catalog-backend.md#1120))

#### 1.12.0

##### Minor Changes

- [`b8cccd8ee858`](https://github.com/backstage/backstage/commit/b8cccd8ee858): Support configuring applicable kinds for `AnnotateScmSlugEntityProcessor`
- [`f32252cdf631`](https://github.com/backstage/backstage/commit/f32252cdf631): Added OpenTelemetry spans for catalog processing
- [`ebeb77586975`](https://github.com/backstage/backstage/commit/ebeb77586975): Now performs request validation based on OpenAPI schema through `@backstage/backend-openapi-utils`. Error responses for invalid input, like `"a"` instead of a number, may have changed.

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`
- [`b8d6b22acd57`](https://github.com/backstage/backstage/commit/b8d6b22acd57): Internal refactor for load test

### `@backstage/plugin-scaffolder-backend` (1.15.1 → [1.16.0](../../changelogs/@backstage/plugin-scaffolder-backend.md#1160))

#### 1.16.0

##### Minor Changes

- [`e514aac3eac0`](https://github.com/backstage/backstage/commit/e514aac3eac0): Introduce `each` property on action steps, allowing them to be ran repeatedly.

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`
- [`349611126ae2`](https://github.com/backstage/backstage/commit/349611126ae2): Removed the options from the alpha `scaffolderPlugin` export. To extend the scaffolder plugin you instead now use the available extension points, `scaffolderActionsExtensionPoint`, `scaffolderTaskBrokerExtensionPoint`, and `scaffolderTemplatingExtensionPoint`.
- [`33c76caef72a`](https://github.com/backstage/backstage/commit/33c76caef72a): Added examples for the `fs:delete` and `fs:rename` actions
- [`e07a4914f621`](https://github.com/backstage/backstage/commit/e07a4914f621): Deprecated the following type exports, which have been moved to `@backstage/plugin-scaffolder-node` instead:

  - `TemplateFilter`
  - `TemplateGlobal`
  - `TaskStatus`
  - `TaskCompletionState`
  - `SerializedTask`
  - `TaskEventType`
  - `SerializedTaskEvent`
  - `TaskBrokerDispatchResult`
  - `TaskBrokerDispatchOptions`
  - `TaskContext`
  - `TaskBroker`

- [`0b1d775be05b`](https://github.com/backstage/backstage/commit/0b1d775be05b): Adds examples to a few scaffolder actions.
- [`88bc6e27a213`](https://github.com/backstage/backstage/commit/88bc6e27a213): The `concurrentTasksLimit` option can now be configured via static configuration as well. Setting it to 0 will now also disable the task worker.
- [`0f873325068d`](https://github.com/backstage/backstage/commit/0f873325068d): Add examples for `github:repo:create` and `github:repo:push` scaffolder actions.
- [`5c28ebc79fd6`](https://github.com/backstage/backstage/commit/5c28ebc79fd6): Updated dependency `esbuild` to `^0.19.0`.
- [`d3b31a791eb1`](https://github.com/backstage/backstage/commit/d3b31a791eb1): Deprecated `executeShellCommand`, `RunCommandOptions`, and `fetchContents` from `@backstage/plugin-scaffolder-backend`, since they are useful for Scaffolder modules (who should not be importing from the plugin package itself). You should now import these from `@backstage/plugin-scaffolder-backend-node` instead. `RunCommandOptions` was renamed in the Node package as `ExecuteShellCommandOptions`, for consistency.

### `@backstage/plugin-scaffolder-common` (1.3.2 → [1.4.0](../../changelogs/@backstage/plugin-scaffolder-common.md#140))

#### 1.4.0

##### Minor Changes

- [`e514aac3eac0`](https://github.com/backstage/backstage/commit/e514aac3eac0): Introduce `each` property on action steps, allowing them to be ran repeatedly.

### `@backstage/plugin-search-backend` (1.3.3 → [1.4.0](../../changelogs/@backstage/plugin-search-backend.md#140))

#### 1.4.0

##### Minor Changes

- [`ebeb77586975`](https://github.com/backstage/backstage/commit/ebeb77586975): Now performs request validation based on OpenAPI schema through `@backstage/backend-openapi-utils`. Error responses for invalid input, like `"a"` instead of a number, may have changed.

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`
- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata
- [`951ab6c9db58`](https://github.com/backstage/backstage/commit/951ab6c9db58): Add missing `configSchema` to package.json

## Other patch version bumps

### `@backstage/backend-common` (0.19.1 → [0.19.2](../../changelogs/@backstage/backend-common.md#0192))

#### 0.19.2

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`
- [`443afcf7f567`](https://github.com/backstage/backstage/commit/443afcf7f567): To improve performance, `GerritUrlReader.readTree()` now uses Gitiles to fetch an archive instead of cloning the repository.
  If `gitilesBaseUrl` is not configured, `readTree` still uses Git to clone the repository.

  Added `stripFirstDirectory` option to `ReadTreeResponseFactory.fromTarArchive()`, allowing to disable stripping first directory
  for `tar` archives.

- [`4b82382ed8c2`](https://github.com/backstage/backstage/commit/4b82382ed8c2): Fixed invalid configuration schema. The configuration schema may be more strict as a result.

### `@backstage/backend-tasks` (0.5.4 → [0.5.5](../../changelogs/@backstage/backend-tasks.md#055))

#### 0.5.5

##### Patch Changes

- [`dfd1b6b2fc33`](https://github.com/backstage/backstage/commit/dfd1b6b2fc33): Make `readTaskScheduleDefinitionFromConfig` properly handle bad inputs

### `@backstage/cli` (0.22.9 → [0.22.10](../../changelogs/@backstage/cli.md#02210))

#### 0.22.10

##### Patch Changes

- [`3f67cefb4780`](https://github.com/backstage/backstage/commit/3f67cefb4780): Reload the frontend when app config changes
- [`cebbf8a27f3c`](https://github.com/backstage/backstage/commit/cebbf8a27f3c): Enable to print the config schema not merged with the `--no-merge` flag
- [`5c28ebc79fd6`](https://github.com/backstage/backstage/commit/5c28ebc79fd6): Updated dependency `esbuild` to `^0.19.0`.
- [`971bdd6a4732`](https://github.com/backstage/backstage/commit/971bdd6a4732): Bumped internal `nodemon` dependency.

### `@backstage/cli-node` (0.1.2 → [0.1.3](../../changelogs/@backstage/cli-node.md#013))

#### 0.1.3

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/core-app-api` (1.9.0 → [1.9.1](../../changelogs/@backstage/core-app-api.md#191))

#### 1.9.1

##### Patch Changes

- [`9ae4e7e63836`](https://github.com/backstage/backstage/commit/9ae4e7e63836): Fixed a bug that could cause `navigate` analytics events to be misattributed to the plugin mounted on the root route (e.g. the `home` plugin at `/`) when the route that was navigated to wasn't associated with a routable extension.

### `@backstage/core-components` (0.13.3 → [0.13.4](../../changelogs/@backstage/core-components.md#0134))

#### 0.13.4

##### Patch Changes

- [`3d86be999fdf`](https://github.com/backstage/backstage/commit/3d86be999fdf): Prefer simple `theme.spacing` without string interpolation

### `@backstage/create-app` (0.5.3 → [0.5.4](../../changelogs/@backstage/create-app.md#054))

#### 0.5.4

##### Patch Changes

- [`b441642fbe0d`](https://github.com/backstage/backstage/commit/b441642fbe0d): Bumped create-app version.
- [`572abc7edf55`](https://github.com/backstage/backstage/commit/572abc7edf55): Bumped create-app version.
- [`74f77f151a96`](https://github.com/backstage/backstage/commit/74f77f151a96): Bumped create-app version.
- [`5cc0ac5ef3d1`](https://github.com/backstage/backstage/commit/5cc0ac5ef3d1): Bump to a newer version of the `concurrently` library
- [`46c9a798e41d`](https://github.com/backstage/backstage/commit/46c9a798e41d): Updated the `app-config.yaml` template to use `proxy.endpoints`.
- [`971bdd6a4732`](https://github.com/backstage/backstage/commit/971bdd6a4732): Bumped internal `nodemon` dependency.

### `@backstage/dev-utils` (1.0.17 → [1.0.18](../../changelogs/@backstage/dev-utils.md#1018))

#### 1.0.18

##### Patch Changes

- [`254ad469f053`](https://github.com/backstage/backstage/commit/254ad469f053): Removed deprecated calls to `app.getProvider()` and `app.getRouter()` in `DevAppBuilder`

### `@backstage/integration-react` (1.1.15 → [1.1.16](../../changelogs/@backstage/integration-react.md#1116))

#### 1.1.16

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-adr` (0.6.3 → [0.6.4](../../changelogs/@backstage/plugin-adr.md#064))

#### 0.6.4

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-airbrake` (0.3.20 → [0.3.21](../../changelogs/@backstage/plugin-airbrake.md#0321))

#### 0.3.21

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-airbrake-backend` (0.2.20 → [0.2.21](../../changelogs/@backstage/plugin-airbrake-backend.md#0221))

#### 0.2.21

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`
- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-allure` (0.1.36 → [0.1.37](../../changelogs/@backstage/plugin-allure.md#0137))

#### 0.1.37

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-analytics-module-ga` (0.1.31 → [0.1.32](../../changelogs/@backstage/plugin-analytics-module-ga.md#0132))

#### 0.1.32

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-analytics-module-ga4` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-analytics-module-ga4.md#013))

#### 0.1.3

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-apache-airflow` (0.2.13 → [0.2.14](../../changelogs/@backstage/plugin-apache-airflow.md#0214))

#### 0.2.14

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-apollo-explorer` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-apollo-explorer.md#0114))

#### 0.1.14

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-app-backend` (0.3.47 → [0.3.48](../../changelogs/@backstage/plugin-app-backend.md#0348))

#### 0.3.48

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`
- [`d564ad142b17`](https://github.com/backstage/backstage/commit/d564ad142b17): Migrated the alpha `appBackend` export to use static configuration and extension points rather than accepting options.

### `@backstage/plugin-auth-backend` (0.18.5 → [0.18.6](../../changelogs/@backstage/plugin-auth-backend.md#0186))

#### 0.18.6

##### Patch Changes

- [`16452cd007ae`](https://github.com/backstage/backstage/commit/16452cd007ae): Updated `frameHandler` to return `undefined` when using the redirect flow instead of returning `postMessageReponse` which was causing errors
- [`9dad4b0e61bd`](https://github.com/backstage/backstage/commit/9dad4b0e61bd): Updated config schema to match what was being used in code
- [`bb70a9c3886a`](https://github.com/backstage/backstage/commit/bb70a9c3886a): Add frontend visibility to provider objects in `auth` config.

### `@backstage/plugin-auth-node` (0.2.16 → [0.2.17](../../changelogs/@backstage/plugin-auth-node.md#0217))

#### 0.2.17

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-azure-devops-backend` (0.3.26 → [0.3.27](../../changelogs/@backstage/plugin-azure-devops-backend.md#0327))

#### 0.3.27

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`
- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-badges-backend` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-badges-backend.md#023))

#### 0.2.3

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`

### `@backstage/plugin-bazaar` (0.2.11 → [0.2.12](../../changelogs/@backstage/plugin-bazaar.md#0212))

#### 0.2.12

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-bazaar-backend` (0.2.10 → [0.2.11](../../changelogs/@backstage/plugin-bazaar-backend.md#0211))

#### 0.2.11

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`
- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-bitbucket-cloud-common` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#029))

#### 0.2.9

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-bitrise` (0.1.47 → [0.1.48](../../changelogs/@backstage/plugin-bitrise.md#0148))

#### 0.1.48

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-catalog` (1.12.0 → [1.12.1](../../changelogs/@backstage/plugin-catalog.md#1121))

#### 1.12.1

##### Patch Changes

- [`3d86be999fdf`](https://github.com/backstage/backstage/commit/3d86be999fdf): Prefer simple `theme.spacing` without string interpolation
- [`136cea792bd4`](https://github.com/backstage/backstage/commit/136cea792bd4): Fixed an issue causing `EntitySwitch` to unmount its children once entity refresh was invoked

### `@backstage/plugin-catalog-backend-module-aws` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#023))

#### 0.2.3

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`
- [`4b82382ed8c2`](https://github.com/backstage/backstage/commit/4b82382ed8c2): Fixed invalid configuration schema. The configuration schema may be more strict as a result.
- [`b4222908b0c3`](https://github.com/backstage/backstage/commit/b4222908b0c3): Added option to configure AWS `accountId` in `AwsS3EntityProvider`

### `@backstage/plugin-catalog-backend-module-azure` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0119))

#### 0.1.19

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`
- [`4b82382ed8c2`](https://github.com/backstage/backstage/commit/4b82382ed8c2): Fixed invalid configuration schema. The configuration schema may be more strict as a result.

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#0115))

#### 0.1.15

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`
- [`4b82382ed8c2`](https://github.com/backstage/backstage/commit/4b82382ed8c2): Fixed invalid configuration schema. The configuration schema may be more strict as a result.

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#0113))

#### 0.1.13

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`
- [`4b82382ed8c2`](https://github.com/backstage/backstage/commit/4b82382ed8c2): Fixed invalid configuration schema. The configuration schema may be more strict as a result.

### `@backstage/plugin-catalog-backend-module-gerrit` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0116))

#### 0.1.16

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`
- [`4b82382ed8c2`](https://github.com/backstage/backstage/commit/4b82382ed8c2): Fixed invalid configuration schema. The configuration schema may be more strict as a result.

### `@backstage/plugin-catalog-backend-module-github` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#033))

#### 0.3.3

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`
- [`4b82382ed8c2`](https://github.com/backstage/backstage/commit/4b82382ed8c2): Fixed invalid configuration schema. The configuration schema may be more strict as a result.
- [`81c231c9c9ee`](https://github.com/backstage/backstage/commit/81c231c9c9ee): Fixed a bug where the visibility filter was case sensitive and casting was inconsistent.

### `@backstage/plugin-catalog-backend-module-gitlab` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#024))

#### 0.2.4

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`
- [`e6c721439f37`](https://github.com/backstage/backstage/commit/e6c721439f37): Added option to skip forked repos in GitlabDiscoveryEntityProvider
- [`4b82382ed8c2`](https://github.com/backstage/backstage/commit/4b82382ed8c2): Fixed invalid configuration schema. The configuration schema may be more strict as a result.
- [`2fe1f5973ff7`](https://github.com/backstage/backstage/commit/2fe1f5973ff7): Filter Gitlab archived projects through APIs

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.0 → [0.4.1](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#041))

#### 0.4.1

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`
- [`e2b6396a1274`](https://github.com/backstage/backstage/commit/e2b6396a1274): Export new alpha `incrementalIngestionProvidersExtensionPoint` for registering incremental providers, rather than the providers being passed as options to the backend module.

### `@backstage/plugin-catalog-backend-module-msgraph` (0.5.6 → [0.5.7](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#057))

#### 0.5.7

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`
- [`fb93323201bf`](https://github.com/backstage/backstage/commit/fb93323201bf): The alpha `catalogModuleMicrosoftGraphOrgEntityProvider` export no longer accepts options. Transformers are now instead configured via the `microsoftGraphOrgEntityProviderTransformExtensionPoint`.
- [`4b82382ed8c2`](https://github.com/backstage/backstage/commit/4b82382ed8c2): Fixed invalid configuration schema. The configuration schema may be more strict as a result.

### `@backstage/plugin-catalog-backend-module-puppetdb` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#015))

#### 0.1.5

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`
- [`4b82382ed8c2`](https://github.com/backstage/backstage/commit/4b82382ed8c2): Fixed invalid configuration schema. The configuration schema may be more strict as a result.

### `@backstage/plugin-catalog-graph` (0.2.32 → [0.2.33](../../changelogs/@backstage/plugin-catalog-graph.md#0233))

#### 0.2.33

##### Patch Changes

- [`64ee2c0c7ca5`](https://github.com/backstage/backstage/commit/64ee2c0c7ca5): Propagate entity spec to EntityNode so that spec info such as type can be used for graph node customization
- [`62dc7a2b1ad1`](https://github.com/backstage/backstage/commit/62dc7a2b1ad1): Added maximum depth parameter to the catalogGraphParams in CatalogGraphCard.
- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-catalog-node` (1.4.0 → [1.4.1](../../changelogs/@backstage/plugin-catalog-node.md#141))

#### 1.4.1

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-catalog-react` (1.8.0 → [1.8.1](../../changelogs/@backstage/plugin-catalog-react.md#181))

#### 1.8.1

##### Patch Changes

- [`aa3feedce10a`](https://github.com/backstage/backstage/commit/aa3feedce10a): Allow specifying screen size when catalog filters are hidden in drawer

### `@backstage/plugin-cicd-statistics-module-gitlab` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-cicd-statistics-module-gitlab.md#0117))

#### 0.1.17

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-code-climate` (0.1.20 → [0.1.21](../../changelogs/@backstage/plugin-code-climate.md#0121))

#### 0.1.21

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-code-coverage` (0.2.13 → [0.2.14](../../changelogs/@backstage/plugin-code-coverage.md#0214))

#### 0.2.14

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-code-coverage-backend` (0.2.13 → [0.2.14](../../changelogs/@backstage/plugin-code-coverage-backend.md#0214))

#### 0.2.14

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-codescene` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-codescene.md#0116))

#### 0.1.16

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-config-schema` (0.1.43 → [0.1.44](../../changelogs/@backstage/plugin-config-schema.md#0144))

#### 0.1.44

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-devtools` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-devtools.md#013))

#### 0.1.3

##### Patch Changes

- [`48b6a04ad045`](https://github.com/backstage/backstage/commit/48b6a04ad045): Fix readme typo

### `@backstage/plugin-devtools-backend` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-devtools-backend.md#013))

#### 0.1.3

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`
- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata
- [`2b4f77a4e900`](https://github.com/backstage/backstage/commit/2b4f77a4e900): Add DevTools configuration to enable dependency listing to be filtered with custom prefixes. For instance, in your `app-config.yaml`:

  ```yaml
  devTools:
    info:
      packagePrefixes:
        - @backstage/
        - @roadiehq/backstage-
        - @spotify/backstage-
  ```

### `@backstage/plugin-devtools-common` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-devtools-common.md#013))

#### 0.1.3

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-dynatrace` (7.0.0 → [7.0.1](../../changelogs/@backstage/plugin-dynatrace.md#701))

#### 7.0.1

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-entity-feedback` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-entity-feedback.md#024))

#### 0.2.4

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-entity-feedback-backend` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-entity-feedback-backend.md#016))

#### 0.1.6

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-entity-feedback-common` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-entity-feedback-common.md#012))

#### 0.1.2

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-entity-validation` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-entity-validation.md#016))

#### 0.1.6

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-events-backend` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-events-backend.md#029))

#### 0.2.9

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`
- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-events-backend-module-aws-sqs` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#023))

#### 0.2.3

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`
- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata
- [`4b82382ed8c2`](https://github.com/backstage/backstage/commit/4b82382ed8c2): Fixed invalid configuration schema. The configuration schema may be more strict as a result.

### `@backstage/plugin-events-backend-module-azure` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-events-backend-module-azure.md#0110))

#### 0.1.10

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0110))

#### 0.1.10

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-events-backend-module-gerrit` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0110))

#### 0.1.10

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-events-backend-module-github` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-events-backend-module-github.md#0110))

#### 0.1.10

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`
- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-events-backend-module-gitlab` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#0110))

#### 0.1.10

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`
- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-events-backend-test-utils` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0110))

#### 0.1.10

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-events-node` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-events-node.md#029))

#### 0.2.9

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-explore` (0.4.6 → [0.4.7](../../changelogs/@backstage/plugin-explore.md#047))

#### 0.4.7

##### Patch Changes

- [`41a26248c91c`](https://github.com/backstage/backstage/commit/41a26248c91c): Support `material-ui` overrides in plugin-explore components
- [`83467b0534ee`](https://github.com/backstage/backstage/commit/83467b0534ee): Don't put "?" in URL if no query parameters.

### `@backstage/plugin-firehydrant` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-firehydrant.md#025))

#### 0.2.5

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-gcalendar` (0.3.16 → [0.3.17](../../changelogs/@backstage/plugin-gcalendar.md#0317))

#### 0.3.17

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-git-release-manager` (0.3.33 → [0.3.34](../../changelogs/@backstage/plugin-git-release-manager.md#0334))

#### 0.3.34

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-github-deployments` (0.1.51 → [0.1.52](../../changelogs/@backstage/plugin-github-deployments.md#0152))

#### 0.1.52

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-github-issues` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-github-issues.md#0210))

#### 0.2.10

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-graphql-voyager` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-graphql-voyager.md#016))

#### 0.1.6

##### Patch Changes

- [`bb1e1c2b26cc`](https://github.com/backstage/backstage/commit/bb1e1c2b26cc): Fix typo in install instructions.
- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-home` (0.5.4 → [0.5.5](../../changelogs/@backstage/plugin-home.md#055))

#### 0.5.5

##### Patch Changes

- [`a559ff68de7e`](https://github.com/backstage/backstage/commit/a559ff68de7e): Now, user can provide a language (optional) as input to receive a greeting in that specific language. Example: `<WelcomeTitle language={['English', 'Spanish']} />`
- [`6743d3917a52`](https://github.com/backstage/backstage/commit/6743d3917a52): Make sure the widget name is never empty in the `AddWidgetDialog`. If the title was set to "", the entry would contain an empty string. Use the name as a fallback

### `@backstage/plugin-home-react` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-home-react.md#012))

#### 0.1.2

##### Patch Changes

- [`bf67dce73174`](https://github.com/backstage/backstage/commit/bf67dce73174): Make `title` optional when defining the `createCardExtension`

### `@backstage/plugin-ilert` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-ilert.md#0210))

#### 0.2.10

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-jenkins-backend` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-jenkins-backend.md#023))

#### 0.2.3

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata
- [`4b82382ed8c2`](https://github.com/backstage/backstage/commit/4b82382ed8c2): Fixed invalid configuration schema. The configuration schema may be more strict as a result.

### `@backstage/plugin-jenkins-common` (0.1.17 → [0.1.18](../../changelogs/@backstage/plugin-jenkins-common.md#0118))

#### 0.1.18

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-kafka` (0.3.20 → [0.3.21](../../changelogs/@backstage/plugin-kafka.md#0321))

#### 0.3.21

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-kafka-backend` (0.2.40 → [0.2.41](../../changelogs/@backstage/plugin-kafka-backend.md#0241))

#### 0.2.41

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`

### `@backstage/plugin-kubernetes-backend` (0.11.2 → [0.11.3](../../changelogs/@backstage/plugin-kubernetes-backend.md#0113))

#### 0.11.3

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`
- [`bbf4e9c894b5`](https://github.com/backstage/backstage/commit/bbf4e9c894b5): Fixed a bug where the proxy was not rewriting WebSocket request paths properly.

### `@backstage/plugin-lighthouse-backend` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-lighthouse-backend.md#024))

#### 0.2.4

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`

### `@backstage/plugin-linguist-common` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-linguist-common.md#011))

#### 0.1.1

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata
- [`d440f1dd0e72`](https://github.com/backstage/backstage/commit/d440f1dd0e72): Exported new LanguageType type alias

### `@backstage/plugin-microsoft-calendar` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-microsoft-calendar.md#016))

#### 0.1.6

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata
- [`eea2922e749a`](https://github.com/backstage/backstage/commit/eea2922e749a): README update - example of apiRef definition and fixed component name

### `@backstage/plugin-newrelic` (0.3.38 → [0.3.39](../../changelogs/@backstage/plugin-newrelic.md#0339))

#### 0.3.39

##### Patch Changes

- [`2167b7eab09b`](https://github.com/backstage/backstage/commit/2167b7eab09b): The newrelic plugin now supports pagination when retrieving results from newrelic. It will no longer truncate results. To see all applications, the link header will need to be allowed through the proxy (see the newrelic plugin readme).

### `@backstage/plugin-newrelic-dashboard` (0.2.13 → [0.2.14](../../changelogs/@backstage/plugin-newrelic-dashboard.md#0214))

#### 0.2.14

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-nomad` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-nomad.md#012))

#### 0.1.2

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-nomad-backend` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-nomad-backend.md#012))

#### 0.1.2

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-octopus-deploy` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-octopus-deploy.md#023))

#### 0.2.3

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-org-react` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-org-react.md#0110))

#### 0.1.10

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-pagerduty` (0.6.1 → [0.6.2](../../changelogs/@backstage/plugin-pagerduty.md#062))

#### 0.6.2

##### Patch Changes

- [`5003fc966741`](https://github.com/backstage/backstage/commit/5003fc966741): Add new `disableChangeEvents` prop to `EntityPagerDutyCard` to hide the Change Events tab and disable fetching of change events for the PagerDuty service.

### `@backstage/plugin-periskop` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-periskop.md#0119))

#### 0.1.19

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-periskop-backend` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-periskop-backend.md#0119))

#### 0.1.19

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`
- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-permission-backend` (0.5.22 → [0.5.23](../../changelogs/@backstage/plugin-permission-backend.md#0523))

#### 0.5.23

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`
- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata
- [`0d6ddc62d8da`](https://github.com/backstage/backstage/commit/0d6ddc62d8da): Refactor backend plugin creation parameter from callback to object.

### `@backstage/plugin-playlist` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-playlist.md#0113))

#### 0.1.13

##### Patch Changes

- [`d1e0588324d1`](https://github.com/backstage/backstage/commit/d1e0588324d1): Displaying an alert popup each time the Playlist is created or deleted
- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata
- [`8a997547f02a`](https://github.com/backstage/backstage/commit/8a997547f02a): Adding alert popup whenever user delete the entities from playlist entity table

### `@backstage/plugin-playlist-backend` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-playlist-backend.md#034))

#### 0.3.4

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-playlist-common` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-playlist-common.md#019))

#### 0.1.9

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-scaffolder` (1.14.1 → [1.14.2](../../changelogs/@backstage/plugin-scaffolder.md#1142))

#### 1.14.2

##### Patch Changes

- [`8a0490fb669e`](https://github.com/backstage/backstage/commit/8a0490fb669e): Fix the get entities query in the `MyGroupsPicker` to query the `kind=Group` entities.

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#021))

#### 0.2.1

##### Patch Changes

- [`0a9b3b14e904`](https://github.com/backstage/backstage/commit/0a9b3b14e904): Added example for the `confluence:transform:markdown` that will show in the installed actions list
- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata
- [`0d347efc8f18`](https://github.com/backstage/backstage/commit/0d347efc8f18): Use `fetchContents` directly instead of a `fetchPlainAction`
- [`c186c631b429`](https://github.com/backstage/backstage/commit/c186c631b429): Import helpers from the node package instead of the backend package

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.23 → [0.2.24](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0224))

#### 0.2.24

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata
- [`c186c631b429`](https://github.com/backstage/backstage/commit/c186c631b429): Import helpers from the node package instead of the backend package

### `@backstage/plugin-scaffolder-backend-module-rails` (0.4.16 → [0.4.17](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0417))

#### 0.4.17

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata
- [`c186c631b429`](https://github.com/backstage/backstage/commit/c186c631b429): Import helpers from the node package instead of the backend package

### `@backstage/plugin-scaffolder-backend-module-sentry` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#018))

#### 0.1.8

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.20 → [0.2.21](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0221))

#### 0.2.21

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-scaffolder-react` (1.5.1 → [1.5.2](../../changelogs/@backstage/plugin-scaffolder-react.md#152))

#### 1.5.2

##### Patch Changes

- [`ba9ee98a37bd`](https://github.com/backstage/backstage/commit/ba9ee98a37bd): Fixed bug in Workflow component by passing a prop `templateName` down to Stepper component.

### `@backstage/plugin-search-backend-module-elasticsearch` (1.3.2 → [1.3.3](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#133))

#### 1.3.3

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`
- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata
- [`631eb3816b48`](https://github.com/backstage/backstage/commit/631eb3816b48): Index templates can now be configured through configuration under the `search.elasticsearch.indexTemplates`. In addition, the `ElasticSearchSearchEngine.fromConfig` now also accepts a `LoggerService` as the `logger` option as well as a new `translator` option.

  The alpha `searchModuleElasticsearchEngine` export no longer accepts options and a new alpha `elasticsearchTranslatorExtensionPoint` export has been added which lets you customize the query translator.

### `@backstage/plugin-search-backend-module-pg` (0.5.8 → [0.5.9](../../changelogs/@backstage/plugin-search-backend-module-pg.md#059))

#### 0.5.9

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`
- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-search-backend-node` (1.2.3 → [1.2.4](../../changelogs/@backstage/plugin-search-backend-node.md#124))

#### 1.2.4

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata
- [`e3e9bc10298b`](https://github.com/backstage/backstage/commit/e3e9bc10298b): Fix Lunr search engine highlight by ignoring invalid metadata positions.

### `@backstage/plugin-shortcuts` (0.3.12 → [0.3.13](../../changelogs/@backstage/plugin-shortcuts.md#0313))

#### 0.3.13

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata
- [`ee52a48b63d5`](https://github.com/backstage/backstage/commit/ee52a48b63d5): Limit the use of the duplicate shortcut name when adding a shortcut

### `@backstage/plugin-sonarqube` (0.7.1 → [0.7.2](../../changelogs/@backstage/plugin-sonarqube.md#072))

#### 0.7.2

##### Patch Changes

- [`b2ccddefbdc6`](https://github.com/backstage/backstage/commit/b2ccddefbdc6): Remove sonarQube card disable class

### `@backstage/plugin-sonarqube-backend` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-sonarqube-backend.md#022))

#### 0.2.2

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata
- [`a24d9df8757c`](https://github.com/backstage/backstage/commit/a24d9df8757c): Added optional `externalBaseUrl` config for setting a different frontend URL

### `@backstage/plugin-splunk-on-call` (0.4.9 → [0.4.10](../../changelogs/@backstage/plugin-splunk-on-call.md#0410))

#### 0.4.10

##### Patch Changes

- [`3d86be999fdf`](https://github.com/backstage/backstage/commit/3d86be999fdf): Prefer simple `theme.spacing` without string interpolation

### `@backstage/plugin-stack-overflow` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-stack-overflow.md#0119))

#### 0.1.19

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-tech-insights` (0.3.12 → [0.3.13](../../changelogs/@backstage/plugin-tech-insights.md#0313))

#### 0.3.13

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-techdocs-backend` (1.6.4 → [1.6.5](../../changelogs/@backstage/plugin-techdocs-backend.md#165))

#### 1.6.5

##### Patch Changes

- [`629cbd194a87`](https://github.com/backstage/backstage/commit/629cbd194a87): Use `coreServices.rootConfig` instead of `coreService.config`

### `@backstage/plugin-user-settings-backend` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-user-settings-backend.md#0112))

#### 0.1.12

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata

### `@backstage/plugin-xcmetrics` (0.2.40 → [0.2.41](../../changelogs/@backstage/plugin-xcmetrics.md#0241))

#### 0.2.41

##### Patch Changes

- [`12a8c94eda8d`](https://github.com/backstage/backstage/commit/12a8c94eda8d): Add package repository and homepage metadata
- [`3d86be999fdf`](https://github.com/backstage/backstage/commit/3d86be999fdf): Prefer simple `theme.spacing` without string interpolation

### `@backstage/repo-tools` (0.3.2 → [0.3.3](../../changelogs/@backstage/repo-tools.md#033))

#### 0.3.3

##### Patch Changes

- [`75702e85862a`](https://github.com/backstage/backstage/commit/75702e85862a): Bumped `@microsoft/api-extractor` dependency to `^7.36.4`, and `@microsoft/api-documenter` to `^7.22.33`.
- [`1f3337ebc707`](https://github.com/backstage/backstage/commit/1f3337ebc707): Introducing a new, experimental command `backstage-repo-tools generate-catalog-info`, which can be used to create standardized `catalog-info.yaml` files for each Backstage package in a Backstage monorepo. It can also be used to automatically fix existing `catalog-info.yaml` files with the correct metadata (including `metadata.name`, `metadata.title`, and `metadata.description` introspected from the package's `package.json`, as well as `spec.owner` introspected from `CODEOWNERS`), e.g. in a post-commit hook.
- [`ebeb77586975`](https://github.com/backstage/backstage/commit/ebeb77586975): Update `schema openapi generate` command to now create a default router that can be imported and used directly.

### `@techdocs/cli` (1.4.4 → [1.4.5](../../changelogs/@techdocs/cli.md#145))

#### 1.4.5

##### Patch Changes

- [`971bdd6a4732`](https://github.com/backstage/backstage/commit/971bdd6a4732): Bumped internal `nodemon` dependency.

## Excluded dependency updates

- `@backstage/app-defaults` (1.4.1 → [1.4.2](../../changelogs/@backstage/app-defaults.md#142))
- `@backstage/plugin-adr-backend` (0.3.5 → [0.3.6](../../changelogs/@backstage/plugin-adr-backend.md#036))
- `@backstage/plugin-adr-common` (0.2.11 → [0.2.12](../../changelogs/@backstage/plugin-adr-common.md#0212))
- `@backstage/plugin-api-docs` (0.9.6 → [0.9.7](../../changelogs/@backstage/plugin-api-docs.md#097))
- `@backstage/plugin-azure-devops` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-azure-devops.md#033))
- `@backstage/plugin-azure-sites` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-azure-sites.md#0110))
- `@backstage/plugin-azure-sites-backend` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-azure-sites-backend.md#0110))
- `@backstage/plugin-badges` (0.2.44 → [0.2.45](../../changelogs/@backstage/plugin-badges.md#0245))
- `@backstage/plugin-catalog-backend-module-bitbucket` (0.2.14 → [0.2.15](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket.md#0215))
- `@backstage/plugin-catalog-backend-module-ldap` (0.5.14 → [0.5.15](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0515))
- `@backstage/plugin-catalog-backend-module-openapi` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0114))
- `@backstage/plugin-catalog-import` (0.9.10 → [0.9.11](../../changelogs/@backstage/plugin-catalog-import.md#0911))
- `@backstage/plugin-catalog-unprocessed-entities` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#012))
- `@backstage/plugin-cicd-statistics` (0.1.22 → [0.1.23](../../changelogs/@backstage/plugin-cicd-statistics.md#0123))
- `@backstage/plugin-circleci` (0.3.20 → [0.3.21](../../changelogs/@backstage/plugin-circleci.md#0321))
- `@backstage/plugin-cloudbuild` (0.3.20 → [0.3.21](../../changelogs/@backstage/plugin-cloudbuild.md#0321))
- `@backstage/plugin-cost-insights` (0.12.9 → [0.12.10](../../changelogs/@backstage/plugin-cost-insights.md#01210))
- `@backstage/plugin-fossa` (0.2.52 → [0.2.53](../../changelogs/@backstage/plugin-fossa.md#0253))
- `@backstage/plugin-gcp-projects` (0.3.39 → [0.3.40](../../changelogs/@backstage/plugin-gcp-projects.md#0340))
- `@backstage/plugin-github-actions` (0.6.1 → [0.6.2](../../changelogs/@backstage/plugin-github-actions.md#062))
- `@backstage/plugin-github-pull-requests-board` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-github-pull-requests-board.md#0115))
- `@backstage/plugin-gitops-profiles` (0.3.38 → [0.3.39](../../changelogs/@backstage/plugin-gitops-profiles.md#0339))
- `@backstage/plugin-gocd` (0.1.26 → [0.1.27](../../changelogs/@backstage/plugin-gocd.md#0127))
- `@backstage/plugin-graphiql` (0.2.52 → [0.2.53](../../changelogs/@backstage/plugin-graphiql.md#0253))
- `@backstage/plugin-graphql-backend` (0.1.37 → [0.1.38](../../changelogs/@backstage/plugin-graphql-backend.md#0138))
- `@backstage/plugin-jenkins` (0.8.2 → [0.8.3](../../changelogs/@backstage/plugin-jenkins.md#083))
- `@backstage/plugin-lighthouse` (0.4.5 → [0.4.6](../../changelogs/@backstage/plugin-lighthouse.md#046))
- `@backstage/plugin-linguist` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-linguist.md#016))
- `@backstage/plugin-permission-node` (0.7.10 → [0.7.11](../../changelogs/@backstage/plugin-permission-node.md#0711))
- `@backstage/plugin-puppetdb` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-puppetdb.md#014))
- `@backstage/plugin-rollbar` (0.4.20 → [0.4.21](../../changelogs/@backstage/plugin-rollbar.md#0421))
- `@backstage/plugin-rollbar-backend` (0.1.44 → [0.1.45](../../changelogs/@backstage/plugin-rollbar-backend.md#0145))
- `@backstage/plugin-scaffolder-backend-module-gitlab` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#023))
- `@backstage/plugin-search` (1.3.3 → [1.3.4](../../changelogs/@backstage/plugin-search.md#134))
- `@backstage/plugin-search-react` (1.6.3 → [1.6.4](../../changelogs/@backstage/plugin-search-react.md#164))
- `@backstage/plugin-sentry` (0.5.5 → [0.5.6](../../changelogs/@backstage/plugin-sentry.md#056))
- `@backstage/plugin-stack-overflow-backend` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-stack-overflow-backend.md#024))
- `@backstage/plugin-stackstorm` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-stackstorm.md#015))
- `@backstage/plugin-tech-insights-backend` (0.5.13 → [0.5.14](../../changelogs/@backstage/plugin-tech-insights-backend.md#0514))
- `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.31 → [0.1.32](../../changelogs/@backstage/plugin-tech-insights-backend-module-jsonfc.md#0132))
- `@backstage/plugin-tech-insights-node` (0.4.5 → [0.4.6](../../changelogs/@backstage/plugin-tech-insights-node.md#046))
- `@backstage/plugin-tech-radar` (0.6.6 → [0.6.7](../../changelogs/@backstage/plugin-tech-radar.md#067))
- `@backstage/plugin-techdocs` (1.6.5 → [1.6.6](../../changelogs/@backstage/plugin-techdocs.md#166))
- `@backstage/plugin-techdocs-addons-test-utils` (1.0.16 → [1.0.17](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#1017))
- `@backstage/plugin-techdocs-module-addons-contrib` (1.0.15 → [1.0.16](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1016))
- `@backstage/plugin-techdocs-node` (1.7.3 → [1.7.4](../../changelogs/@backstage/plugin-techdocs-node.md#174))
- `@backstage/plugin-techdocs-react` (1.1.8 → [1.1.9](../../changelogs/@backstage/plugin-techdocs-react.md#119))
- `@backstage/plugin-todo` (0.2.22 → [0.2.23](../../changelogs/@backstage/plugin-todo.md#0223))
- `@backstage/plugin-user-settings` (0.7.5 → [0.7.6](../../changelogs/@backstage/plugin-user-settings.md#076))
- `@backstage/plugin-vault` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-vault.md#0115))
- `@backstage/plugin-vault-backend` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-vault-backend.md#034))
- `@backstage/test-utils` (1.4.1 → [1.4.2](../../changelogs/@backstage/test-utils.md#142))
