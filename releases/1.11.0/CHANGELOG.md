# Backstage Release 1.11.0 changelog

Changes between 1.10.1 and 1.11.0 — 167 changed and 14 added packages.

## Summary

- [Newly added packages](#newly-added-packages): 14 packages
- [Breaking changes](#breaking-changes): 11 packages
- [Major version bumps](#major-version-bumps): 1 package
- [0.x minor version bumps](#0x-minor-version-bumps): 9 packages
- [Other minor version bumps](#other-minor-version-bumps): 12 packages
- [Patch version bumps](#patch-version-bumps): 68 packages
- [Excluded dependency updates](#excluded-dependency-updates): 66 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/backend-dev-utils` (new, 0.1.0)](#backstagebackend-dev-utils-new-010)
  - [`@backstage/eslint-plugin` (new, 0.1.0)](#backstageeslint-plugin-new-010)
  - [`@backstage/plugin-entity-feedback` (new, 0.1.0)](#backstageplugin-entity-feedback-new-010)
  - [`@backstage/plugin-entity-feedback-backend` (new, 0.1.0)](#backstageplugin-entity-feedback-backend-new-010)
  - [`@backstage/plugin-entity-feedback-common` (new, 0.1.0)](#backstageplugin-entity-feedback-common-new-010)
  - [`@backstage/plugin-entity-validation` (new, 0.1.0)](#backstageplugin-entity-validation-new-010)
  - [`@backstage/plugin-graphql-voyager` (new, 0.1.0)](#backstageplugin-graphql-voyager-new-010)
  - [`@backstage/plugin-lighthouse-backend` (new, 0.1.0)](#backstageplugin-lighthouse-backend-new-010)
  - [`@backstage/plugin-lighthouse-common` (new, 0.1.0)](#backstageplugin-lighthouse-common-new-010)
  - [`@backstage/plugin-linguist` (new, 0.1.0)](#backstageplugin-linguist-new-010)
  - [`@backstage/plugin-linguist-backend` (new, 0.1.0)](#backstageplugin-linguist-backend-new-010)
  - [`@backstage/plugin-linguist-common` (new, 0.1.0)](#backstageplugin-linguist-common-new-010)
  - [`@backstage/plugin-microsoft-calendar` (new, 0.1.0)](#backstageplugin-microsoft-calendar-new-010)
  - [`@backstage/plugin-scaffolder-node` (new, 0.1.0)](#backstageplugin-scaffolder-node-new-010)
- [Breaking changes](#breaking-changes)
  - [`@backstage/backend-app-api` (0.3.1 → 0.4.0)](#backstagebackend-app-api-031--040)
  - [`@backstage/backend-common` (0.18.1 → 0.18.2)](#backstagebackend-common-0181--0182)
  - [`@backstage/backend-plugin-api` (0.3.1 → 0.4.0)](#backstagebackend-plugin-api-031--040)
  - [`@backstage/plugin-azure-devops-backend` (0.3.20 → 0.3.21)](#backstageplugin-azure-devops-backend-0320--0321)
  - [`@backstage/plugin-kubernetes-common` (0.5.1 → 0.6.0)](#backstageplugin-kubernetes-common-051--060)
  - [`@backstage/plugin-lighthouse` (0.3.14 → 0.4.0)](#backstageplugin-lighthouse-0314--040)
  - [`@backstage/plugin-scaffolder-backend` (1.10.1 → 1.11.0)](#backstageplugin-scaffolder-backend-1101--1110)
  - [`@backstage/plugin-tech-insights` (0.3.6 → 0.3.7)](#backstageplugin-tech-insights-036--037)
  - [`@backstage/plugin-tech-insights-backend` (0.5.7 → 0.5.8)](#backstageplugin-tech-insights-backend-057--058)
  - [`@backstage/plugin-tech-insights-common` (0.2.9 → 0.2.10)](#backstageplugin-tech-insights-common-029--0210)
  - [`@backstage/plugin-tech-insights-node` (0.3.9 → 0.4.0)](#backstageplugin-tech-insights-node-039--040)
- [Major version bumps](#major-version-bumps)
  - [`@backstage/plugin-dynatrace` (1.0.4 → 2.0.0)](#backstageplugin-dynatrace-104--200)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/plugin-adr` (0.3.0 → 0.4.0)](#backstageplugin-adr-030--040)
  - [`@backstage/plugin-adr-backend` (0.2.6 → 0.3.0)](#backstageplugin-adr-backend-026--030)
  - [`@backstage/plugin-api-docs` (0.8.14 → 0.9.0)](#backstageplugin-api-docs-0814--090)
  - [`@backstage/plugin-auth-backend` (0.17.4 → 0.18.0)](#backstageplugin-auth-backend-0174--0180)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.1.2 → 0.2.0)](#backstageplugin-catalog-backend-module-incremental-ingestion-012--020)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.4.7 → 0.5.0)](#backstageplugin-catalog-backend-module-msgraph-047--050)
  - [`@backstage/plugin-explore` (0.3.45 → 0.4.0)](#backstageplugin-explore-0345--040)
  - [`@backstage/plugin-sentry` (0.4.7 → 0.5.0)](#backstageplugin-sentry-047--050)
  - [`@backstage/plugin-user-settings` (0.6.2 → 0.7.0)](#backstageplugin-user-settings-062--070)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/app-defaults` (1.1.0 → 1.2.0)](#backstageapp-defaults-110--120)
  - [`@backstage/catalog-model` (1.1.5 → 1.2.0)](#backstagecatalog-model-115--120)
  - [`@backstage/core-app-api` (1.4.0 → 1.5.0)](#backstagecore-app-api-140--150)
  - [`@backstage/core-plugin-api` (1.3.0 → 1.4.0)](#backstagecore-plugin-api-130--140)
  - [`@backstage/plugin-catalog` (1.7.2 → 1.8.0)](#backstageplugin-catalog-172--180)
  - [`@backstage/plugin-catalog-react` (1.2.4 → 1.3.0)](#backstageplugin-catalog-react-124--130)
  - [`@backstage/plugin-scaffolder` (1.10.1 → 1.11.0)](#backstageplugin-scaffolder-1101--1110)
  - [`@backstage/plugin-scaffolder-react` (1.0.1 → 1.1.0)](#backstageplugin-scaffolder-react-101--110)
  - [`@backstage/plugin-search` (1.0.7 → 1.1.0)](#backstageplugin-search-107--110)
  - [`@backstage/plugin-search-react` (1.4.0 → 1.5.0)](#backstageplugin-search-react-140--150)
  - [`@backstage/plugin-techdocs` (1.4.3 → 1.5.0)](#backstageplugin-techdocs-143--150)
  - [`@backstage/plugin-techdocs-node` (1.4.5 → 1.5.0)](#backstageplugin-techdocs-node-145--150)
- [Patch version bumps](#patch-version-bumps)
  - [`@backstage/backend-defaults` (0.1.6 → 0.1.7)](#backstagebackend-defaults-016--017)
  - [`@backstage/backend-test-utils` (0.1.33 → 0.1.34)](#backstagebackend-test-utils-0133--0134)
  - [`@backstage/cli` (0.22.1 → 0.22.2)](#backstagecli-0221--0222)
  - [`@backstage/codemods` (0.1.42 → 0.1.43)](#backstagecodemods-0142--0143)
  - [`@backstage/core-components` (0.12.3 → 0.12.4)](#backstagecore-components-0123--0124)
  - [`@backstage/create-app` (0.4.36 → 0.4.37)](#backstagecreate-app-0436--0437)
  - [`@backstage/plugin-airbrake` (0.3.14 → 0.3.15)](#backstageplugin-airbrake-0314--0315)
  - [`@backstage/plugin-allure` (0.1.30 → 0.1.31)](#backstageplugin-allure-0130--0131)
  - [`@backstage/plugin-analytics-module-ga` (0.1.25 → 0.1.26)](#backstageplugin-analytics-module-ga-0125--0126)
  - [`@backstage/plugin-apache-airflow` (0.2.7 → 0.2.8)](#backstageplugin-apache-airflow-027--028)
  - [`@backstage/plugin-api-docs-module-protoc-gen-doc` (0.1.0 → 0.1.1)](#backstageplugin-api-docs-module-protoc-gen-doc-010--011)
  - [`@backstage/plugin-apollo-explorer` (0.1.7 → 0.1.8)](#backstageplugin-apollo-explorer-017--018)
  - [`@backstage/plugin-app-backend` (0.3.41 → 0.3.42)](#backstageplugin-app-backend-0341--0342)
  - [`@backstage/plugin-azure-devops` (0.2.5 → 0.2.6)](#backstageplugin-azure-devops-025--026)
  - [`@backstage/plugin-azure-sites` (0.1.3 → 0.1.4)](#backstageplugin-azure-sites-013--014)
  - [`@backstage/plugin-azure-sites-backend` (0.1.3 → 0.1.4)](#backstageplugin-azure-sites-backend-013--014)
  - [`@backstage/plugin-bazaar-backend` (0.2.4 → 0.2.5)](#backstageplugin-bazaar-backend-024--025)
  - [`@backstage/plugin-bitrise` (0.1.41 → 0.1.42)](#backstageplugin-bitrise-0141--0142)
  - [`@backstage/plugin-catalog-backend` (1.7.1 → 1.7.2)](#backstageplugin-catalog-backend-171--172)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.1.14 → 0.1.15)](#backstageplugin-catalog-backend-module-aws-0114--0115)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.1.12 → 0.1.13)](#backstageplugin-catalog-backend-module-azure-0112--0113)
  - [`@backstage/plugin-catalog-backend-module-bitbucket` (0.2.8 → 0.2.9)](#backstageplugin-catalog-backend-module-bitbucket-028--029)
  - [`@backstage/plugin-catalog-backend-module-github` (0.2.4 → 0.2.5)](#backstageplugin-catalog-backend-module-github-024--025)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.1.12 → 0.1.13)](#backstageplugin-catalog-backend-module-gitlab-0112--0113)
  - [`@backstage/plugin-catalog-graph` (0.2.26 → 0.2.27)](#backstageplugin-catalog-graph-0226--0227)
  - [`@backstage/plugin-cicd-statistics` (0.1.16 → 0.1.17)](#backstageplugin-cicd-statistics-0116--0117)
  - [`@backstage/plugin-circleci` (0.3.14 → 0.3.15)](#backstageplugin-circleci-0314--0315)
  - [`@backstage/plugin-code-coverage` (0.2.7 → 0.2.8)](#backstageplugin-code-coverage-027--028)
  - [`@backstage/plugin-code-coverage-backend` (0.2.7 → 0.2.8)](#backstageplugin-code-coverage-backend-027--028)
  - [`@backstage/plugin-codescene` (0.1.9 → 0.1.10)](#backstageplugin-codescene-019--0110)
  - [`@backstage/plugin-cost-insights` (0.12.3 → 0.12.4)](#backstageplugin-cost-insights-0123--0124)
  - [`@backstage/plugin-events-backend` (0.2.2 → 0.2.3)](#backstageplugin-events-backend-022--023)
  - [`@backstage/plugin-events-node` (0.2.2 → 0.2.3)](#backstageplugin-events-node-022--023)
  - [`@backstage/plugin-git-release-manager` (0.3.27 → 0.3.28)](#backstageplugin-git-release-manager-0327--0328)
  - [`@backstage/plugin-github-issues` (0.2.3 → 0.2.4)](#backstageplugin-github-issues-023--024)
  - [`@backstage/plugin-home` (0.4.30 → 0.4.31)](#backstageplugin-home-0430--0431)
  - [`@backstage/plugin-ilert` (0.2.3 → 0.2.4)](#backstageplugin-ilert-023--024)
  - [`@backstage/plugin-kafka-backend` (0.2.34 → 0.2.35)](#backstageplugin-kafka-backend-0234--0235)
  - [`@backstage/plugin-kubernetes` (0.7.7 → 0.7.8)](#backstageplugin-kubernetes-077--078)
  - [`@backstage/plugin-kubernetes-backend` (0.9.2 → 0.9.3)](#backstageplugin-kubernetes-backend-092--093)
  - [`@backstage/plugin-org` (0.6.4 → 0.6.5)](#backstageplugin-org-064--065)
  - [`@backstage/plugin-org-react` (0.1.3 → 0.1.4)](#backstageplugin-org-react-013--014)
  - [`@backstage/plugin-pagerduty` (0.5.7 → 0.5.8)](#backstageplugin-pagerduty-057--058)
  - [`@backstage/plugin-periskop-backend` (0.1.12 → 0.1.13)](#backstageplugin-periskop-backend-0112--0113)
  - [`@backstage/plugin-playlist` (0.1.5 → 0.1.6)](#backstageplugin-playlist-015--016)
  - [`@backstage/plugin-playlist-backend` (0.2.4 → 0.2.5)](#backstageplugin-playlist-backend-024--025)
  - [`@backstage/plugin-proxy-backend` (0.2.35 → 0.2.36)](#backstageplugin-proxy-backend-0235--0236)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.16 → 0.2.17)](#backstageplugin-scaffolder-backend-module-cookiecutter-0216--0217)
  - [`@backstage/plugin-scaffolder-backend-module-rails` (0.4.9 → 0.4.10)](#backstageplugin-scaffolder-backend-module-rails-049--0410)
  - [`@backstage/plugin-scaffolder-backend-module-sentry` (0.1.1 → 0.1.2)](#backstageplugin-scaffolder-backend-module-sentry-011--012)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.14 → 0.2.15)](#backstageplugin-scaffolder-backend-module-yeoman-0214--0215)
  - [`@backstage/plugin-search-backend` (1.2.2 → 1.2.3)](#backstageplugin-search-backend-122--123)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.1.2 → 1.1.3)](#backstageplugin-search-backend-module-elasticsearch-112--113)
  - [`@backstage/plugin-shortcuts` (0.3.6 → 0.3.7)](#backstageplugin-shortcuts-036--037)
  - [`@backstage/plugin-sonarqube` (0.6.2 → 0.6.3)](#backstageplugin-sonarqube-062--063)
  - [`@backstage/plugin-splunk-on-call` (0.4.3 → 0.4.4)](#backstageplugin-splunk-on-call-043--044)
  - [`@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.25 → 0.1.26)](#backstageplugin-tech-insights-backend-module-jsonfc-0125--0126)
  - [`@backstage/plugin-tech-radar` (0.6.0 → 0.6.1)](#backstageplugin-tech-radar-060--061)
  - [`@backstage/plugin-techdocs-addons-test-utils` (1.0.9 → 1.0.10)](#backstageplugin-techdocs-addons-test-utils-109--1010)
  - [`@backstage/plugin-techdocs-backend` (1.5.2 → 1.5.3)](#backstageplugin-techdocs-backend-152--153)
  - [`@backstage/plugin-techdocs-module-addons-contrib` (1.0.9 → 1.0.10)](#backstageplugin-techdocs-module-addons-contrib-109--1010)
  - [`@backstage/plugin-user-settings-backend` (0.1.5 → 0.1.6)](#backstageplugin-user-settings-backend-015--016)
  - [`@backstage/plugin-vault` (0.1.8 → 0.1.9)](#backstageplugin-vault-018--019)
  - [`@backstage/plugin-vault-backend` (0.2.7 → 0.2.8)](#backstageplugin-vault-backend-027--028)
  - [`@backstage/plugin-xcmetrics` (0.2.34 → 0.2.35)](#backstageplugin-xcmetrics-0234--0235)
  - [`@backstage/repo-tools` (0.1.1 → 0.1.2)](#backstagerepo-tools-011--012)
  - [`@backstage/theme` (0.2.16 → 0.2.17)](#backstagetheme-0216--0217)
  - [`@techdocs/cli` (1.3.1 → 1.3.2)](#techdocscli-131--132)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/backend-dev-utils` (new, [0.1.0](../../changelogs/@backstage/backend-dev-utils.md#010))

#### 0.1.0

##### Minor Changes

- [`9d9cdea117`](https://github.com/backstage/backstage/commit/9d9cdea117): Introduced a new package for backend development utilities. Similar to how `@backstage/dev-utils` is used in the frontend.

##### Patch Changes

- [`725383f69d`](https://github.com/backstage/backstage/commit/725383f69d): Tweaked messaging in the README.

### `@backstage/eslint-plugin` (new, [0.1.0](../../changelogs/@backstage/eslint-plugin.md#010))

#### 0.1.0

##### Minor Changes

- [`179d301518`](https://github.com/backstage/backstage/commit/179d301518): Added a new ESLint plugin with common rules for Backstage projects. See the [README](https://github.com/import-js/eslint-plugin-import/blob/main/packages/eslint-plugin/README.md) for more details.

### `@backstage/plugin-entity-feedback` (new, [0.1.0](../../changelogs/@backstage/plugin-entity-feedback.md#010))

#### 0.1.0

##### Minor Changes

- [`a3c86a7ed2`](https://github.com/backstage/backstage/commit/a3c86a7ed2): Implement entity feedback plugin, check out the `README.md` for more details!

### `@backstage/plugin-entity-feedback-backend` (new, [0.1.0](../../changelogs/@backstage/plugin-entity-feedback-backend.md#010))

#### 0.1.0

##### Minor Changes

- [`a3c86a7ed2`](https://github.com/backstage/backstage/commit/a3c86a7ed2): Implement entity feedback plugin, check out the `README.md` for more details!

### `@backstage/plugin-entity-feedback-common` (new, [0.1.0](../../changelogs/@backstage/plugin-entity-feedback-common.md#010))

#### 0.1.0

##### Minor Changes

- [`a3c86a7ed2`](https://github.com/backstage/backstage/commit/a3c86a7ed2): Implement entity feedback plugin, check out the `README.md` for more details!

### `@backstage/plugin-entity-validation` (new, [0.1.0](../../changelogs/@backstage/plugin-entity-validation.md#010))

#### 0.1.0

##### Minor Changes

- [`d34b3267f9`](https://github.com/backstage/backstage/commit/d34b3267f9): First implementation for the entity validation UI. For more information refer to its `README.md`.

### `@backstage/plugin-graphql-voyager` (new, [0.1.0](../../changelogs/@backstage/plugin-graphql-voyager.md#010))

#### 0.1.0

##### Minor Changes

- [`d1fb4b7bf1`](https://github.com/backstage/backstage/commit/d1fb4b7bf1): Add the new GraphQL Voyager tool as a plugin for backstage, expose necessary API and components needed for it.

  For more information on how to use this plugin and configure it, please navigate to the [README](https://github.com/backstage/backstage/tree/master/plugins/graphql-voyager/README.md) of the plugin.

### `@backstage/plugin-lighthouse-backend` (new, [0.1.0](../../changelogs/@backstage/plugin-lighthouse-backend.md#010))

#### 0.1.0

##### Minor Changes

- [`eef62546ce`](https://github.com/backstage/backstage/commit/eef62546ce): Introduce Lighthouse Backend Plugin to run scheduled Lighthouse Audits

### `@backstage/plugin-lighthouse-common` (new, [0.1.0](../../changelogs/@backstage/plugin-lighthouse-common.md#010))

#### 0.1.0

##### Minor Changes

- [`eef62546ce`](https://github.com/backstage/backstage/commit/eef62546ce): Introduce @backstage/plugin-lighthouse-common with the API implementation

### `@backstage/plugin-linguist` (new, [0.1.0](../../changelogs/@backstage/plugin-linguist.md#010))

#### 0.1.0

##### Minor Changes

- [`75cfee5688`](https://github.com/backstage/backstage/commit/75cfee5688): Introduced the Linguist plugin, checkout the plugin's `README.md` for more details!

### `@backstage/plugin-linguist-backend` (new, [0.1.0](../../changelogs/@backstage/plugin-linguist-backend.md#010))

#### 0.1.0

##### Minor Changes

- [`75cfee5688`](https://github.com/backstage/backstage/commit/75cfee5688): Introduced the Linguist plugin, checkout the plugin's `README.md` for more details!

### `@backstage/plugin-linguist-common` (new, [0.1.0](../../changelogs/@backstage/plugin-linguist-common.md#010))

#### 0.1.0

##### Minor Changes

- [`75cfee5688`](https://github.com/backstage/backstage/commit/75cfee5688): Introduced the Linguist plugin, checkout the plugin's `README.md` for more details!

### `@backstage/plugin-microsoft-calendar` (new, [0.1.0](../../changelogs/@backstage/plugin-microsoft-calendar.md#010))

#### 0.1.0

##### Minor Changes

- [`44412375bb`](https://github.com/backstage/backstage/commit/44412375bb): Created a new plugin `@backstage/plugin-microsoft-calendar` to display events from a Microsoft Calendar.

  please refer to the [README.md](https://github.com/backstage/backstage/blob/master/plugins/microsoft-calendar/README.md) for step-by-step instructions to setup the plugin in your Backstage instance.

##### Patch Changes

- [`c51efce2a0`](https://github.com/backstage/backstage/commit/c51efce2a0): Update docs to always use `yarn add --cwd` for app & backend

### `@backstage/plugin-scaffolder-node` (new, [0.1.0](../../changelogs/@backstage/plugin-scaffolder-node.md#010))

#### 0.1.0

##### Minor Changes

- [`d72866f0cc`](https://github.com/backstage/backstage/commit/d72866f0cc): New package that takes over some of the types and functionality from `@backstage/plugin-scaffolder-backend` that are shared with other modules

## Breaking changes

### `@backstage/backend-app-api` (0.3.1 → [0.4.0](../../changelogs/@backstage/backend-app-api.md#040))

#### 0.4.0

##### Minor Changes

- [`01a075ec1d`](https://github.com/backstage/backstage/commit/01a075ec1d): **BREAKING**: Renamed `RootHttpRouterConfigureOptions` to `RootHttpRouterConfigureContext`, and removed the unused type `ServiceOrExtensionPoint`.
- [`4ae71b7f2e`](https://github.com/backstage/backstage/commit/4ae71b7f2e): **BREAKING** Renaming `*Factory` exports to `*ServiceFactory` instead. For example `configFactory` now is exported as `configServiceFactory`.
- [`d31d8e00b3`](https://github.com/backstage/backstage/commit/d31d8e00b3): **BREAKING** `HttpServerCertificateOptions` when specified with a `key` and `cert` should also have the `type: 'pem'` instead of `type: 'plain'`

##### Patch Changes

- [`a18da2f8b5`](https://github.com/backstage/backstage/commit/a18da2f8b5): Fixed an issue were the log redaction didn't properly escape RegExp characters.
- [`5febb216fe`](https://github.com/backstage/backstage/commit/5febb216fe): Updated to match the new `CacheService` interface.
- [`e716946103`](https://github.com/backstage/backstage/commit/e716946103): Updated usage of the lifecycle service.
- [`f60cca9da1`](https://github.com/backstage/backstage/commit/f60cca9da1): Updated database factory to pass service deps required for restoring database state during development.
- [`610d65e143`](https://github.com/backstage/backstage/commit/610d65e143): Updates to match new `BackendFeature` type.
- [`725383f69d`](https://github.com/backstage/backstage/commit/725383f69d): Tweaked messaging in the README.
- [`b86efa2d04`](https://github.com/backstage/backstage/commit/b86efa2d04): Updated usage of `ServiceFactory`.
- [`ab22515647`](https://github.com/backstage/backstage/commit/ab22515647): The shutdown signal handlers are now installed as part of the backend instance rather than the lifecycle service, and explicitly cause the process to exit.
- [`b729f9f31f`](https://github.com/backstage/backstage/commit/b729f9f31f): Moved the options of the `config` and `rootHttpRouter` services out to the factories themselves, where they belong
- [`ed8b5967d7`](https://github.com/backstage/backstage/commit/ed8b5967d7): `HttpRouterFactoryOptions.getPath` is now optional as a default value is always provided in the factory.
- [`71a5ec0f06`](https://github.com/backstage/backstage/commit/71a5ec0f06): Updated usages of `LogMeta`.

### `@backstage/backend-common` (0.18.1 → [0.18.2](../../changelogs/@backstage/backend-common.md#0182))

#### 0.18.2

##### Patch Changes

- [`5febb216fe`](https://github.com/backstage/backstage/commit/5febb216fe): **BREAKING**: The `CacheClient` interface must now also implement the `withOptions` method. The `.get()` method has also received a type parameter that helps ensure that `undefined` in the event of a cache miss is handled.

  Added a `cacheToPluginCacheManager` helper that converts a `CacheService` into a legacy `PluginCacheManager` instance.

- [`5febb216fe`](https://github.com/backstage/backstage/commit/5febb216fe): Updated to match the new `CacheService` interface.
- [`e716946103`](https://github.com/backstage/backstage/commit/e716946103): Updated usage of the lifecycle service.
- [`d31d8e00b3`](https://github.com/backstage/backstage/commit/d31d8e00b3): Updated to work with the new `type: 'pem'` with `createHttpServer` from `@backstage/backend-app-api`
- [`0ff03319be`](https://github.com/backstage/backstage/commit/0ff03319be): Updated usage of `createBackendPlugin`.
- [`f60cca9da1`](https://github.com/backstage/backstage/commit/f60cca9da1): The `DatabaseManager.forPlugin` method now accepts additional service dependencies. There is no need to update existing code to pass these dependencies.
- [`628e2bd89a`](https://github.com/backstage/backstage/commit/628e2bd89a): Updated dependency `@kubernetes/client-node` to `0.18.1`.

### `@backstage/backend-plugin-api` (0.3.1 → [0.4.0](../../changelogs/@backstage/backend-plugin-api.md#040))

#### 0.4.0

##### Minor Changes

- [`e716946103`](https://github.com/backstage/backstage/commit/e716946103): **BREAKING**: Split out the hook for both lifecycle services so that the first parameter of `addShutdownHook` is the hook function, and the second is the options.
- [`0ff03319be`](https://github.com/backstage/backstage/commit/0ff03319be): **BREAKING**: The plugin ID option passed to `createBackendPlugin` is now `pluginId`, rather than just `id`. This is to make it match `createBackendModule` more closely.
- [`71a5ec0f06`](https://github.com/backstage/backstage/commit/71a5ec0f06): **BREAKING**: Switched out `LogMeta` type for `JsonObject`.
- [`5febb216fe`](https://github.com/backstage/backstage/commit/5febb216fe): **BREAKING**: The `CacheService` has been changed to remove the indirection of `getClient`, instead making the `CacheClient` methods directly available on the `CacheService`. In order to allow for the creation of clients with default options, there is now a new `.withOptions` method that must be implemented as part of the service interface.
- [`b86efa2d04`](https://github.com/backstage/backstage/commit/b86efa2d04): Switch `ServiceFactory` to be an opaque type, keeping only the `service` field as public API, but also adding a type parameter for the service scope.
- [`610d65e143`](https://github.com/backstage/backstage/commit/610d65e143): Switched `BackendFeature` to be an opaque type.

##### Patch Changes

- [`9c9456fd33`](https://github.com/backstage/backstage/commit/9c9456fd33): Removed the unused `TypesToServiceRef` type
- [`181c03edb5`](https://github.com/backstage/backstage/commit/181c03edb5): Aligned opaque type markers to all use a `$type` property with namespacing.
- [`725383f69d`](https://github.com/backstage/backstage/commit/725383f69d): Tweaked messaging in the README.
- [`ae88f61e00`](https://github.com/backstage/backstage/commit/ae88f61e00): The `register` methods passed to `createBackendPlugin` and `createBackendModule`
  now have dedicated `BackendPluginRegistrationPoints` and
  `BackendModuleRegistrationPoints` arguments, respectively. This lets us make it
  clear on a type level that it's not possible to pass in extension points as
  dependencies to plugins (should only ever be done for modules). This has no
  practical effect on code that was already well behaved.

### `@backstage/plugin-azure-devops-backend` (0.3.20 → [0.3.21](../../changelogs/@backstage/plugin-azure-devops-backend.md#0321))

#### 0.3.21

##### Patch Changes

- [`c51efce2a0`](https://github.com/backstage/backstage/commit/c51efce2a0): Update docs to always use `yarn add --cwd` for app & backend
- [`cc926a59bd`](https://github.com/backstage/backstage/commit/cc926a59bd): Fixed a bug where the azure devops host in URLs on the readme card was being URL encoded, breaking hosts with ports.
- [`85b04f659a`](https://github.com/backstage/backstage/commit/85b04f659a): Internal refactor to not use deprecated `substr`

### `@backstage/plugin-kubernetes-common` (0.5.1 → [0.6.0](../../changelogs/@backstage/plugin-kubernetes-common.md#060))

#### 0.6.0

##### Minor Changes

- [`1728c1ef01`](https://github.com/backstage/backstage/commit/1728c1ef01): **BREAKING**: Renamed misspelled `LimitRangeFetchReponse` to `LimitRangeFetchResponse`.

##### Patch Changes

- [`2518ef5b8a`](https://github.com/backstage/backstage/commit/2518ef5b8a): New K8s catalog entity annotations added that will replace now deprecated k8s annotations in the catalog-model package. K8s annotation imports should now be made from plugin-kubernetes-common.
- [`628e2bd89a`](https://github.com/backstage/backstage/commit/628e2bd89a): Updated dependency `@kubernetes/client-node` to `0.18.1`.

### `@backstage/plugin-lighthouse` (0.3.14 → [0.4.0](../../changelogs/@backstage/plugin-lighthouse.md#040))

#### 0.4.0

##### Minor Changes

- [`eef62546ce`](https://github.com/backstage/backstage/commit/eef62546ce): Require @backstage/plugin-lighthouse-common package where API implementation moved to.

  **BREAKING**: the following types have been moved to @backstage/plugin-lighthouse-common:

  - `Audit`
  - `AuditBase`
  - `AuditCompleted`
  - `AuditFailed`
  - `AuditRunning`
  - `FetchError`
  - `LASListRequest`
  - `LASListResponse`
  - `LighthouseApi`
  - `LighthouseCategoryAbbr`
  - `LighthouseCategoryId`
  - `LighthouseConfigSettings`
  - `LighthouseRestApi`
  - `TriggerAuditPayload`
  - `Website`
  - `WebsiteListResponse`

##### Patch Changes

- [`c51efce2a0`](https://github.com/backstage/backstage/commit/c51efce2a0): Update docs to always use `yarn add --cwd` for app & backend
- [`4bdd6bcb3c`](https://github.com/backstage/backstage/commit/4bdd6bcb3c): Prefer Link over plain anchors

### `@backstage/plugin-scaffolder-backend` (1.10.1 → [1.11.0](../../changelogs/@backstage/plugin-scaffolder-backend.md#1110))

#### 1.11.0

##### Minor Changes

- [`0b2952ee4b`](https://github.com/backstage/backstage/commit/0b2952ee4b): Added the option to overwrite files in the `targetPath` of the `template:fetch` action
- [`127154930f`](https://github.com/backstage/backstage/commit/127154930f): Renamed the export `scaffolderCatalogModule` to `catalogModuleTemplateKind` in order to follow the new recommended naming patterns of backend system items. This is technically a breaking change but in an alpha export, so take care to change your imports if you have already migrated to the new backend system.

##### Patch Changes

- [`0ff03319be`](https://github.com/backstage/backstage/commit/0ff03319be): Updated usage of `createBackendPlugin`.
- [`ad3edc402d`](https://github.com/backstage/backstage/commit/ad3edc402d): **Deprecations**: The following are deprecated and should instead be imported from the new package `@backstage/plugin-scaffolder-node`:

  - `ActionContext`
  - `createTemplateAction`
  - `TaskSecrets`
  - `TemplateAction`

- [`6c70919f1a`](https://github.com/backstage/backstage/commit/6c70919f1a): Provide better error messaging when GitHub fails due to missing team definitions
- [`66cf22fdc4`](https://github.com/backstage/backstage/commit/66cf22fdc4): Updated dependency `esbuild` to `^0.17.0`.

### `@backstage/plugin-tech-insights` (0.3.6 → [0.3.7](../../changelogs/@backstage/plugin-tech-insights.md#037))

#### 0.3.7

##### Patch Changes

- [`4024b37449`](https://github.com/backstage/backstage/commit/4024b37449): TechInsightsApi interface now has getFactSchemas() method.
  TechInsightsClient now implements method getFactSchemas().

  **BREAKING** FactSchema type moved from @backstage/plugin-tech-insights-node into @backstage/plugin-tech-insights-common

  These changes are **required** if you were importing this type directly.

  ```diff
  - import { FactSchema } from '@backstage/plugin-tech-insights-node';
  + import { FactSchema } from '@backstage/plugin-tech-insights-common';
  ```

### `@backstage/plugin-tech-insights-backend` (0.5.7 → [0.5.8](../../changelogs/@backstage/plugin-tech-insights-backend.md#058))

#### 0.5.8

##### Patch Changes

- [`4024b37449`](https://github.com/backstage/backstage/commit/4024b37449): TechInsightsApi interface now has getFactSchemas() method.
  TechInsightsClient now implements method getFactSchemas().

  **BREAKING** FactSchema type moved from @backstage/plugin-tech-insights-node into @backstage/plugin-tech-insights-common

  These changes are **required** if you were importing this type directly.

  ```diff
  - import { FactSchema } from '@backstage/plugin-tech-insights-node';
  + import { FactSchema } from '@backstage/plugin-tech-insights-common';
  ```

### `@backstage/plugin-tech-insights-common` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-tech-insights-common.md#0210))

#### 0.2.10

##### Patch Changes

- [`4024b37449`](https://github.com/backstage/backstage/commit/4024b37449): TechInsightsApi interface now has getFactSchemas() method.
  TechInsightsClient now implements method getFactSchemas().

  **BREAKING** FactSchema type moved from @backstage/plugin-tech-insights-node into @backstage/plugin-tech-insights-common

  These changes are **required** if you were importing this type directly.

  ```diff
  - import { FactSchema } from '@backstage/plugin-tech-insights-node';
  + import { FactSchema } from '@backstage/plugin-tech-insights-common';
  ```

### `@backstage/plugin-tech-insights-node` (0.3.9 → [0.4.0](../../changelogs/@backstage/plugin-tech-insights-node.md#040))

#### 0.4.0

##### Minor Changes

- [`4024b37449`](https://github.com/backstage/backstage/commit/4024b37449): TechInsightsApi interface now has getFactSchemas() method.
  TechInsightsClient now implements method getFactSchemas().

  **BREAKING** FactSchema type moved from @backstage/plugin-tech-insights-node into @backstage/plugin-tech-insights-common

  These changes are **required** if you were importing this type directly.

  ```diff
  - import { FactSchema } from '@backstage/plugin-tech-insights-node';
  + import { FactSchema } from '@backstage/plugin-tech-insights-common';
  ```

## Major version bumps

### `@backstage/plugin-dynatrace` (1.0.4 → [2.0.0](../../changelogs/@backstage/plugin-dynatrace.md#200))

#### 2.0.0

##### Patch Changes

- [`d950d3e217`](https://github.com/backstage/backstage/commit/d950d3e217): Depend on `@material-ui/core` version `^4.12.2` like all other in-repo packages

## 0.x minor version bumps

### `@backstage/plugin-adr` (0.3.0 → [0.4.0](../../changelogs/@backstage/plugin-adr.md#040))

#### 0.4.0

##### Minor Changes

- [`0a32911d8a`](https://github.com/backstage/backstage/commit/0a32911d8a): Display title, status and date in ADR navigation, sourced from ADR content and reverse order.
- [`ec34b535c0`](https://github.com/backstage/backstage/commit/ec34b535c0): The `AdrSearchResultListItem` component is now a search result extension. This means that when rendered as a child of components that render search extensions, the `result`, `rank`, and `highlight` properties are optional. See the [documentation](https://backstage.io/docs/features/search/how-to-guides#how-to-render-search-results-using-extensions) for more details.

##### Patch Changes

- [`ec34b535c0`](https://github.com/backstage/backstage/commit/ec34b535c0): Support displaying an icon on `AdrSearchResultListItem`
- [`496cf6aff0`](https://github.com/backstage/backstage/commit/496cf6aff0): Render the common `<MissingAnnotationEmptyState />` component when the `backstage.io/adr-location` annotation is missing from the component

### `@backstage/plugin-adr-backend` (0.2.6 → [0.3.0](../../changelogs/@backstage/plugin-adr-backend.md#030))

#### 0.3.0

##### Minor Changes

- [`0a32911d8a`](https://github.com/backstage/backstage/commit/0a32911d8a): Display title, status and date in ADR navigation, sourced from ADR content and reverse order.

##### Patch Changes

- [`c51efce2a0`](https://github.com/backstage/backstage/commit/c51efce2a0): Update docs to always use `yarn add --cwd` for app & backend

### `@backstage/plugin-api-docs` (0.8.14 → [0.9.0](../../changelogs/@backstage/plugin-api-docs.md#090))

#### 0.9.0

##### Minor Changes

- [`9ed53218a5`](https://github.com/backstage/backstage/commit/9ed53218a5): Adds a new tRPC API definition widget which users can utilize to integrate their tRPC API definitions into Backstage.

##### Patch Changes

- [`60996f8aba`](https://github.com/backstage/backstage/commit/60996f8aba): Updating the readme with better `csp` instructions
- [`6856ab98f4`](https://github.com/backstage/backstage/commit/6856ab98f4): Updated dependency `@asyncapi/react-component` to `1.0.0-next.47`.

### `@backstage/plugin-auth-backend` (0.17.4 → [0.18.0](../../changelogs/@backstage/plugin-auth-backend.md#0180))

#### 0.18.0

##### Minor Changes

- [`db10b6ef65`](https://github.com/backstage/backstage/commit/db10b6ef65): Added a Bitbucket Server Auth Provider and added its API to the app defaults

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.1.2 → [0.2.0](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#020))

#### 0.2.0

##### Minor Changes

- [`1ba120faa3`](https://github.com/backstage/backstage/commit/1ba120faa3): Added new mechanism to handle deltas in incremental providers

##### Patch Changes

- [`c51efce2a0`](https://github.com/backstage/backstage/commit/c51efce2a0): Update docs to always use `yarn add --cwd` for app & backend
- [`407dc01fc9`](https://github.com/backstage/backstage/commit/407dc01fc9): Removing extra imports for `run` script as `TestBackend` auto loads the default factories
- [`b7e36660d5`](https://github.com/backstage/backstage/commit/b7e36660d5): Return `EventSubscriber` from `addIncrementalEntityProvider` to hook up to `EventsBackend`
- [`5b7cd5580d`](https://github.com/backstage/backstage/commit/5b7cd5580d): Moving the backend-test-utils to devDependencies.
- [`77c41b6924`](https://github.com/backstage/backstage/commit/77c41b6924): Updated README to include newer API options for incremental entity providers

### `@backstage/plugin-catalog-backend-module-msgraph` (0.4.7 → [0.5.0](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#050))

#### 0.5.0

##### Minor Changes

- [`fb568e2683`](https://github.com/backstage/backstage/commit/fb568e2683): Improve performance when loading users via group membership.
  Users data is now loaded from a paged query, rather than having to make an extra call per user to load each user's profiles.

  Note, there are still additional per user calls made to load user avatars

##### Patch Changes

- [`4c86436fdf`](https://github.com/backstage/backstage/commit/4c86436fdf): Fix MS Graph provider to use target URL for fetching access token
- [`0daa328c3a`](https://github.com/backstage/backstage/commit/0daa328c3a): Extract default transformers to their own file
- [`28f9883440`](https://github.com/backstage/backstage/commit/28f9883440): Fixed a bug reading the `user.select` field expected from the `app-config.yaml` configuration
- [`c5b119ad9c`](https://github.com/backstage/backstage/commit/c5b119ad9c): Increased default page size to 999 (from 100) to reduce the number of calls made to the Microsoft Graph API.

### `@backstage/plugin-explore` (0.3.45 → [0.4.0](../../changelogs/@backstage/plugin-explore.md#040))

#### 0.4.0

##### Minor Changes

- [`0eaa579f89`](https://github.com/backstage/backstage/commit/0eaa579f89): The `ToolSearchResultListItem` component is now a search result extension. This means that when rendered as a child of components that render search extensions, the `result`, `rank`, and `highlight` properties are optional. See the [documentation](https://backstage.io/docs/features/search/how-to-guides#how-to-render-search-results-using-extensions) for more details.

##### Patch Changes

- [`66e2aab4c4`](https://github.com/backstage/backstage/commit/66e2aab4c4): `ListItem` wrapper component moved to `SearchResultListItemExtension` for all `*SearchResultListItems` that are exported as extensions. This is to make sure the list only contains list elements.

  Note: If you have implemented a custom result list item, we recommend you to remove the list item wrapper to avoid nested `<li>` elements.

### `@backstage/plugin-sentry` (0.4.7 → [0.5.0](../../changelogs/@backstage/plugin-sentry.md#050))

#### 0.5.0

##### Minor Changes

- [`6a8d6b9a0c`](https://github.com/backstage/backstage/commit/6a8d6b9a0c): Add option to filter issues based on the time it was triggered

##### Patch Changes

- [`85b04f659a`](https://github.com/backstage/backstage/commit/85b04f659a): Internal refactor to not use deprecated `substr`

### `@backstage/plugin-user-settings` (0.6.2 → [0.7.0](../../changelogs/@backstage/plugin-user-settings.md#070))

#### 0.7.0

##### Minor Changes

- [`db10b6ef65`](https://github.com/backstage/backstage/commit/db10b6ef65): Added a Bitbucket Server Auth Provider and added its API to the app defaults

##### Patch Changes

- [`c4940b6322`](https://github.com/backstage/backstage/commit/c4940b6322): Added a message to advise a page reload when toggling feature flags

## Other minor version bumps

### `@backstage/app-defaults` (1.1.0 → [1.2.0](../../changelogs/@backstage/app-defaults.md#120))

#### 1.2.0

##### Minor Changes

- [`db10b6ef65`](https://github.com/backstage/backstage/commit/db10b6ef65): Added a Bitbucket Server Auth Provider and added its API to the app defaults

### `@backstage/catalog-model` (1.1.5 → [1.2.0](../../changelogs/@backstage/catalog-model.md#120))

#### 1.2.0

##### Minor Changes

- [`d51668882d`](https://github.com/backstage/backstage/commit/d51668882d): Adds the tRPC API type to the catalog.

##### Patch Changes

- [`aece6c57d2`](https://github.com/backstage/backstage/commit/aece6c57d2): Add additional validation for location references.
- [`2518ef5b8a`](https://github.com/backstage/backstage/commit/2518ef5b8a): Add deprecation tag to kubernetes constants in catalog, constants are now defined in plugin-kubernetes-common

### `@backstage/core-app-api` (1.4.0 → [1.5.0](../../changelogs/@backstage/core-app-api.md#150))

#### 1.5.0

##### Minor Changes

- [`db10b6ef65`](https://github.com/backstage/backstage/commit/db10b6ef65): Added a Bitbucket Server Auth Provider and added its API to the app defaults

##### Patch Changes

- [`dff4d8ddb1`](https://github.com/backstage/backstage/commit/dff4d8ddb1): Fixed an issue where an explicit port the frontend base URL could break the app.

### `@backstage/core-plugin-api` (1.3.0 → [1.4.0](../../changelogs/@backstage/core-plugin-api.md#140))

#### 1.4.0

##### Minor Changes

- [`db10b6ef65`](https://github.com/backstage/backstage/commit/db10b6ef65): Added a Bitbucket Server Auth Provider and added its API to the app defaults

### `@backstage/plugin-catalog` (1.7.2 → [1.8.0](../../changelogs/@backstage/plugin-catalog.md#180))

#### 1.8.0

##### Minor Changes

- [`0c1fc3986c`](https://github.com/backstage/backstage/commit/0c1fc3986c): Added Markdown support in the `AboutCard` description section
- [`0eaa579f89`](https://github.com/backstage/backstage/commit/0eaa579f89): The `CatalogSearchResultListItem` component is now a search result extension. This means that when rendered as a child of components that render search extensions, the `result`, `rank`, and `highlight` properties are optional. See the [documentation](https://backstage.io/docs/features/search/how-to-guides#how-to-render-search-results-using-extensions) for more details.

##### Patch Changes

- [`d7f55f6bd2`](https://github.com/backstage/backstage/commit/d7f55f6bd2): The list of entities takes into account the title when its different from the name to sort the entities.
- [`66e2aab4c4`](https://github.com/backstage/backstage/commit/66e2aab4c4): `ListItem` wrapper component moved to `SearchResultListItemExtension` for all `*SearchResultListItems` that are exported as extensions. This is to make sure the list only contains list elements.

  Note: If you have implemented a custom result list item, we recommend you to remove the list item wrapper to avoid nested `<li>` elements.

- [`7d46ca2f68`](https://github.com/backstage/backstage/commit/7d46ca2f68): Make catalog search result list a bit more customizable

### `@backstage/plugin-catalog-react` (1.2.4 → [1.3.0](../../changelogs/@backstage/plugin-catalog-react.md#130))

#### 1.3.0

##### Minor Changes

- [`929e1afe1b`](https://github.com/backstage/backstage/commit/929e1afe1b): Add `initialFilter` prop to EntityLifecyclePicker. This allows you to set an initial lifecycle for the catalog.
- [`fab93c2fe8`](https://github.com/backstage/backstage/commit/fab93c2fe8): Aligned buttons on "Unregister entity" dialog to keep them on the same line

### `@backstage/plugin-scaffolder` (1.10.1 → [1.11.0](../../changelogs/@backstage/plugin-scaffolder.md#1110))

#### 1.11.0

##### Minor Changes

- [`d6bb12a2e7`](https://github.com/backstage/backstage/commit/d6bb12a2e7): - **Deprecation** - Deprecated the following exports, please import them directly from `@backstage/plugin-scaffolder-react` instead

  ```
  createScaffolderLayout
  ScaffolderLayouts
  LayoutOptions
  LayoutTemplate
  ```

- [`a521379688`](https://github.com/backstage/backstage/commit/a521379688): Migrating the `TemplateEditorPage` to work with the new components from `@backstage/plugin-scaffolder-react`
- [`074f7e81b5`](https://github.com/backstage/backstage/commit/074f7e81b5): Added a missing validator check for items in an array
- [`8c2966536b`](https://github.com/backstage/backstage/commit/8c2966536b): Embed scaffolder workflow in other components

##### Patch Changes

- [`04f717a8e1`](https://github.com/backstage/backstage/commit/04f717a8e1): `scaffolder/next`: bump `react-jsonschema-form` libraries to `v5-stable`
- [`b46f385eff`](https://github.com/backstage/backstage/commit/b46f385eff): scaffolder/next: Implementing a simple `OngoingTask` page
- [`cbab8ac107`](https://github.com/backstage/backstage/commit/cbab8ac107): lock versions of `@rjsf/*-beta` packages
- [`346d6b6630`](https://github.com/backstage/backstage/commit/346d6b6630): Upgrade `@rjsf` version 5 dependencies to `beta.18`
- [`ccbf91051b`](https://github.com/backstage/backstage/commit/ccbf91051b): bump `@rjsf` `v5` dependencies to 5.1.0
- [`d2ddde2108`](https://github.com/backstage/backstage/commit/d2ddde2108): Add `ScaffolderLayouts` to `NextScaffolderPage`
- [`0f0da2f256`](https://github.com/backstage/backstage/commit/0f0da2f256): Prefer schema ordering of template properties during review content generation.
- [`38992bdbaf`](https://github.com/backstage/backstage/commit/38992bdbaf): Fixed bug in review step refactor that caused schema-based display settings for individual property values to be discarded.

### `@backstage/plugin-scaffolder-react` (1.0.1 → [1.1.0](../../changelogs/@backstage/plugin-scaffolder-react.md#110))

#### 1.1.0

##### Minor Changes

- [`a07750745b`](https://github.com/backstage/backstage/commit/a07750745b): Added `DescriptionField` field override to the `next/scaffolder`
- [`a521379688`](https://github.com/backstage/backstage/commit/a521379688): Migrating the `TemplateEditorPage` to work with the new components from `@backstage/plugin-scaffolder-react`
- [`8c2966536b`](https://github.com/backstage/backstage/commit/8c2966536b): Embed scaffolder workflow in other components
- [`5555e17313`](https://github.com/backstage/backstage/commit/5555e17313): refactor `createAsyncValidators` to be recursive to ensure validators are called in nested schemas.

##### Patch Changes

- [`04f717a8e1`](https://github.com/backstage/backstage/commit/04f717a8e1): `scaffolder/next`: bump `react-jsonschema-form` libraries to `v5-stable`
- [`b46f385eff`](https://github.com/backstage/backstage/commit/b46f385eff): scaffolder/next: Implementing a simple `OngoingTask` page
- [`cbab8ac107`](https://github.com/backstage/backstage/commit/cbab8ac107): lock versions of `@rjsf/*-beta` packages
- [`346d6b6630`](https://github.com/backstage/backstage/commit/346d6b6630): Upgrade `@rjsf` version 5 dependencies to `beta.18`
- [`ccbf91051b`](https://github.com/backstage/backstage/commit/ccbf91051b): bump `@rjsf` `v5` dependencies to 5.1.0
- [`d2ddde2108`](https://github.com/backstage/backstage/commit/d2ddde2108): Add `ScaffolderLayouts` to `NextScaffolderPage`

### `@backstage/plugin-search` (1.0.7 → [1.1.0](../../changelogs/@backstage/plugin-search.md#110))

#### 1.1.0

##### Minor Changes

- [`0eaa579f89`](https://github.com/backstage/backstage/commit/0eaa579f89): Update `SearchModal` component to use `SearchResult` extensions.

##### Patch Changes

- [`26fb21aa8b`](https://github.com/backstage/backstage/commit/26fb21aa8b): Implement a `showCounts` option to display result counts per type in `SearchType.Accordion`
- [`66e2aab4c4`](https://github.com/backstage/backstage/commit/66e2aab4c4): Updated colors for each tab used on search modal, to improve color contrast. Aria label added to tabs wrapper component. `disableRipple` property on the `Tab` component removed to improve keyboard navigation indicator.

### `@backstage/plugin-search-react` (1.4.0 → [1.5.0](../../changelogs/@backstage/plugin-search-react.md#150))

#### 1.5.0

##### Minor Changes

- [`0eaa579f89`](https://github.com/backstage/backstage/commit/0eaa579f89): - Create the search results extensions, for more details see the documentation [here](https://backstage.io/docs/features/search/how-to-guides#how-to-render-search-results-using-extensions);
  - Update the `SearchResult`, `SearchResultList` and `SearchResultGroup` components to use extensions and default their props to optionally accept a query, when the query is not passed, the component tries to get it from the search context.

##### Patch Changes

- [`66e2aab4c4`](https://github.com/backstage/backstage/commit/66e2aab4c4): `ListItem` wrapper component moved to `SearchResultListItemExtension` for all `*SearchResultListItems` that are exported as extensions. This is to make sure the list only contains list elements.

  Note: If you have implemented a custom result list item, we recommend you to remove the list item wrapper to avoid nested `<li>` elements.

### `@backstage/plugin-techdocs` (1.4.3 → [1.5.0](../../changelogs/@backstage/plugin-techdocs.md#150))

#### 1.5.0

##### Minor Changes

- [`20840b36b4`](https://github.com/backstage/backstage/commit/20840b36b4): Update DocsTable and EntityListDocsTable to accept overrides for Material Table options.
- [`0eaa579f89`](https://github.com/backstage/backstage/commit/0eaa579f89): The `TechDocsSearchResultListItem` component is now a search result extension. This means that when rendered as a child of components that render search extensions, the `result`, `rank`, and `highlight` properties are optional. See the [documentation](https://backstage.io/docs/features/search/how-to-guides#how-to-render-search-results-using-extensions) for more details.

##### Patch Changes

- [`c8e09cc383`](https://github.com/backstage/backstage/commit/c8e09cc383): Fixed bug in Techdocs reader where a techdocs page with a hash in the URL did not always jump to the document anchor.
- [`cad5607411`](https://github.com/backstage/backstage/commit/cad5607411): Improve view: remove footer overlay on large screen
- [`66e2aab4c4`](https://github.com/backstage/backstage/commit/66e2aab4c4): `ListItem` wrapper component moved to `SearchResultListItemExtension` for all `*SearchResultListItems` that are exported as extensions. This is to make sure the list only contains list elements.

  Note: If you have implemented a custom result list item, we recommend you to remove the list item wrapper to avoid nested `<li>` elements.

- [`4660b63947`](https://github.com/backstage/backstage/commit/4660b63947): Create a TechDocs `<LightBox/>` addon that allows users to open images in a light-box on documentation pages, they can navigate between images if there are several on one page.

  Here's an example on how to use it in a Backstage app:

  ```diff
  import {
    DefaultTechDocsHome,
    TechDocsIndexPage,
    TechDocsReaderPage,
  } from '@backstage/plugin-techdocs';
  import { TechDocsAddons } from '@backstage/plugin-techdocs-react/alpha';
  +import { LightBox } from '@backstage/plugin-techdocs-module-addons-contrib';

  const AppRoutes = () => {
    <FlatRoutes>
      // other plugin routes
      <Route path="/docs" element={<TechDocsIndexPage />}>
        <DefaultTechDocsHome />
      </Route>
      <Route
        path="/docs/:namespace/:kind/:name/*"
        element={<TechDocsReaderPage />}
      >
        <TechDocsAddons>
  +       <LightBox />
        </TechDocsAddons>
      </Route>
    </FlatRoutes>;
  };
  ```

### `@backstage/plugin-techdocs-node` (1.4.5 → [1.5.0](../../changelogs/@backstage/plugin-techdocs-node.md#150))

#### 1.5.0

##### Minor Changes

- [`dd1e37649f`](https://github.com/backstage/backstage/commit/dd1e37649f): Deprecated getMkDocsYml in favor of getMkdocsYml (lowercase 'd')

##### Patch Changes

- [`87ab76e55c`](https://github.com/backstage/backstage/commit/87ab76e55c): Fixed bug caused by recent migration to AWS SDK V3 for techdocs-node. Instead of s3ForcePathStyle, forcePathStyle should be passed.
- [`339d9a5b5c`](https://github.com/backstage/backstage/commit/339d9a5b5c): Added support for using a default `mkdocs.yml` configuration file when none is provided

## Patch version bumps

### `@backstage/backend-defaults` (0.1.6 → [0.1.7](../../changelogs/@backstage/backend-defaults.md#017))

#### 0.1.7

##### Patch Changes

- [`725383f69d`](https://github.com/backstage/backstage/commit/725383f69d): Tweaked messaging in the README.
- [`e412d33025`](https://github.com/backstage/backstage/commit/e412d33025): Use the new `*ServiceFactory` exports from `@backstage/backend-app-api`

### `@backstage/backend-test-utils` (0.1.33 → [0.1.34](../../changelogs/@backstage/backend-test-utils.md#0134))

#### 0.1.34

##### Patch Changes

- [`baf6e4c96a`](https://github.com/backstage/backstage/commit/baf6e4c96a): Removed unnecessary `@backstage/cli` dependency.
- [`c51efce2a0`](https://github.com/backstage/backstage/commit/c51efce2a0): Update docs to always use `yarn add --cwd` for app & backend
- [`1835311713`](https://github.com/backstage/backstage/commit/1835311713): Added explicit return type signature for `mockServices.config()`.
- [`e716946103`](https://github.com/backstage/backstage/commit/e716946103): Updated usage of the lifecycle service.
- [`7e7557a2be`](https://github.com/backstage/backstage/commit/7e7557a2be): Updated the `mockServices.rootLogger` options to accept a single level option instead.
- [`610d65e143`](https://github.com/backstage/backstage/commit/610d65e143): Updates to match new `BackendFeature` type.
- [`e412d33025`](https://github.com/backstage/backstage/commit/e412d33025): Use the new `*ServiceFactory` exports from `@backstage/backend-app-api`
- [`b86efa2d04`](https://github.com/backstage/backstage/commit/b86efa2d04): Updated usage of `ServiceFactory`.
- [`17b573e4be`](https://github.com/backstage/backstage/commit/17b573e4be): The new backend system testing utilities have now been marked as stable API.
- [`f1adb2e36b`](https://github.com/backstage/backstage/commit/f1adb2e36b): Removed the `ref` from all `mockServices`.
- [`d0901c9ba4`](https://github.com/backstage/backstage/commit/d0901c9ba4): All mock service factories and mock service implementations are now available via the new experimental `mockServices` export.
- [`71a5ec0f06`](https://github.com/backstage/backstage/commit/71a5ec0f06): Updated usages of `LogMeta`.

### `@backstage/cli` (0.22.1 → [0.22.2](../../changelogs/@backstage/cli.md#0222))

#### 0.22.2

##### Patch Changes

- [`561df21ea3`](https://github.com/backstage/backstage/commit/561df21ea3): The `backstage-cli repo test` command now sets a default Jest `--workerIdleMemoryLimit` of 1GB. If needed to ensure that tests are not run in band, `--maxWorkers=2` is set as well. This is the recommended workaround for dealing with Jest workers leaking memory and eventually hitting the heap limit.
- [`2815981057`](https://github.com/backstage/backstage/commit/2815981057): Show module name causing error during build
- [`dd8a9afe66`](https://github.com/backstage/backstage/commit/dd8a9afe66): Replaced several monorepo lint rules with new rules from `@backstage/eslint-plugin`. See the [README](https://github.com/import-js/eslint-plugin-import/blob/main/packages/eslint-plugin/README.md) for a full list of rules.
- [`a9c50af76b`](https://github.com/backstage/backstage/commit/a9c50af76b): Fixed Webpack loader patterns so that they properly match the file suffix only.
- [`66cf22fdc4`](https://github.com/backstage/backstage/commit/66cf22fdc4): Updated dependency `esbuild` to `^0.17.0`.
- [`6d3abfded1`](https://github.com/backstage/backstage/commit/6d3abfded1): Switch to inline source maps for test transpilation, simplifying editor setups.
- [`90616df9a8`](https://github.com/backstage/backstage/commit/90616df9a8): Added an experimental mode for the `package start` command for backend packages. Enabled by setting `EXPERIMENTAL_BACKEND_START`.

### `@backstage/codemods` (0.1.42 → [0.1.43](../../changelogs/@backstage/codemods.md#0143))

#### 0.1.43

##### Patch Changes

- [`02f1316e57`](https://github.com/backstage/backstage/commit/02f1316e57): Moved `commander` to being a regular dependency.

### `@backstage/core-components` (0.12.3 → [0.12.4](../../changelogs/@backstage/core-components.md#0124))

#### 0.12.4

##### Patch Changes

- [`68ce7d0417`](https://github.com/backstage/backstage/commit/68ce7d0417): Added aria labels on the support button and sidebar
- [`5637ebed92`](https://github.com/backstage/backstage/commit/5637ebed92): Added a global override for `window.open` that helps prevent security vulnerabilities.
- [`910015f5b7`](https://github.com/backstage/backstage/commit/910015f5b7): The Button component has been deprecated in favor of the LinkButton component
- [`20840b36b4`](https://github.com/backstage/backstage/commit/20840b36b4): Adds new type, TableOptions, extending Material Table Options.
- [`e81a6e0ab5`](https://github.com/backstage/backstage/commit/e81a6e0ab5): Updated Link URL validation to be more strict.
- [`85b04f659a`](https://github.com/backstage/backstage/commit/85b04f659a): Internal refactor to not use deprecated `substr`
- [`66e2aab4c4`](https://github.com/backstage/backstage/commit/66e2aab4c4): Navigation items in mobile sidebar now have aria label.

### `@backstage/create-app` (0.4.36 → [0.4.37](../../changelogs/@backstage/create-app.md#0437))

#### 0.4.37

##### Patch Changes

- [`12a7b316ee`](https://github.com/backstage/backstage/commit/12a7b316ee): Bumped create-app version.
- [`86a8dfd7b0`](https://github.com/backstage/backstage/commit/86a8dfd7b0): Added a check to ensure that Yarn v1 is used when creating new projects.
- [`0eaa579f89`](https://github.com/backstage/backstage/commit/0eaa579f89): Update `SearchPage` template to use `SearchResult` extensions.
- [`02f1316e57`](https://github.com/backstage/backstage/commit/02f1316e57): Updated `packages/app/cypress/.eslintrc.json` to remove the unnecessary `import/no-extraneous-dependencies` rule.

### `@backstage/plugin-airbrake` (0.3.14 → [0.3.15](../../changelogs/@backstage/plugin-airbrake.md#0315))

#### 0.3.15

##### Patch Changes

- [`41377156d0`](https://github.com/backstage/backstage/commit/41377156d0): Adds a boolean helper function to airbrake plugin for use on the EntityPage to show/hide airbrake tab depending on whether the entity's `catalog-info.yaml` has an airbrake id set in the metadata

### `@backstage/plugin-allure` (0.1.30 → [0.1.31](../../changelogs/@backstage/plugin-allure.md#0131))

#### 0.1.31

##### Patch Changes

- [`c51efce2a0`](https://github.com/backstage/backstage/commit/c51efce2a0): Update docs to always use `yarn add --cwd` for app & backend

### `@backstage/plugin-analytics-module-ga` (0.1.25 → [0.1.26](../../changelogs/@backstage/plugin-analytics-module-ga.md#0126))

#### 0.1.26

##### Patch Changes

- [`c51efce2a0`](https://github.com/backstage/backstage/commit/c51efce2a0): Update docs to always use `yarn add --cwd` for app & backend

### `@backstage/plugin-apache-airflow` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-apache-airflow.md#028))

#### 0.2.8

##### Patch Changes

- [`85b04f659a`](https://github.com/backstage/backstage/commit/85b04f659a): Internal refactor to not use deprecated `substr`
- [`4bdd6bcb3c`](https://github.com/backstage/backstage/commit/4bdd6bcb3c): Prefer Link over plain anchors

### `@backstage/plugin-api-docs-module-protoc-gen-doc` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-api-docs-module-protoc-gen-doc.md#011))

#### 0.1.1

##### Patch Changes

- [`c51efce2a0`](https://github.com/backstage/backstage/commit/c51efce2a0): Update docs to always use `yarn add --cwd` for app & backend

### `@backstage/plugin-apollo-explorer` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-apollo-explorer.md#018))

#### 0.1.8

##### Patch Changes

- [`d950d3e217`](https://github.com/backstage/backstage/commit/d950d3e217): Depend on `@material-ui/core` version `^4.12.2` like all other in-repo packages

### `@backstage/plugin-app-backend` (0.3.41 → [0.3.42](../../changelogs/@backstage/plugin-app-backend.md#0342))

#### 0.3.42

##### Patch Changes

- [`0ff03319be`](https://github.com/backstage/backstage/commit/0ff03319be): Updated usage of `createBackendPlugin`.

### `@backstage/plugin-azure-devops` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-azure-devops.md#026))

#### 0.2.6

##### Patch Changes

- [`347b16ecea`](https://github.com/backstage/backstage/commit/347b16ecea): Fixed `AssignedToCurrentUsersTeams` & `CreatedByCurrentUsersTeams` filter in `AzurePullRequestsPage` component.

### `@backstage/plugin-azure-sites` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-azure-sites.md#014))

#### 0.1.4

##### Patch Changes

- [`c51efce2a0`](https://github.com/backstage/backstage/commit/c51efce2a0): Update docs to always use `yarn add --cwd` for app & backend
- [`98a00a09d5`](https://github.com/backstage/backstage/commit/98a00a09d5): Fixed `AzureSites` plugin start and stop issue #15904
  Fixed `AzureSites` UI load issue #15907
- [`4bdd6bcb3c`](https://github.com/backstage/backstage/commit/4bdd6bcb3c): Prefer Link over plain anchors

### `@backstage/plugin-azure-sites-backend` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-azure-sites-backend.md#014))

#### 0.1.4

##### Patch Changes

- [`c51efce2a0`](https://github.com/backstage/backstage/commit/c51efce2a0): Update docs to always use `yarn add --cwd` for app & backend

### `@backstage/plugin-bazaar-backend` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-bazaar-backend.md#025))

#### 0.2.5

##### Patch Changes

- [`0ff03319be`](https://github.com/backstage/backstage/commit/0ff03319be): Updated usage of `createBackendPlugin`.
- [`5b7cd5580d`](https://github.com/backstage/backstage/commit/5b7cd5580d): Moving the backend-test-utils to devDependencies.
- [`4a6f38a535`](https://github.com/backstage/backstage/commit/4a6f38a535): Added a Backend System plugin feature

### `@backstage/plugin-bitrise` (0.1.41 → [0.1.42](../../changelogs/@backstage/plugin-bitrise.md#0142))

#### 0.1.42

##### Patch Changes

- [`85b04f659a`](https://github.com/backstage/backstage/commit/85b04f659a): Internal refactor to not use deprecated `substr`

### `@backstage/plugin-catalog-backend` (1.7.1 → [1.7.2](../../changelogs/@backstage/plugin-catalog-backend.md#172))

#### 1.7.2

##### Patch Changes

- [`071354eb7d`](https://github.com/backstage/backstage/commit/071354eb7d): Add additional validation as security precations for output entities.
- [`b977c2e69f`](https://github.com/backstage/backstage/commit/b977c2e69f): Minor improvements to the descriptions provided with permission rules schemas
- [`2380506364`](https://github.com/backstage/backstage/commit/2380506364): The process of adding or modifying fields in the software-catalog search index has been simplified. For more details, see [how to customize fields in the Software Catalog index](https://backstage.io/docs/features/search/how-to-guides#how-to-customize-fields-in-the-software-catalog-index).
- [`9573651919`](https://github.com/backstage/backstage/commit/9573651919): The previous migration that adds the `search.original_value` column may leave some of the entities not updated. Add a migration script to trigger a reprocessing of the entities.
- [`9f71a2fd20`](https://github.com/backstage/backstage/commit/9f71a2fd20): Location rule target patterns now also match hidden files, i.e. path components with a leading dot.
- [`e716946103`](https://github.com/backstage/backstage/commit/e716946103): Updated usage of the lifecycle service.
- [`1aec041c34`](https://github.com/backstage/backstage/commit/1aec041c34): Fixed an issue where entities sometimes were not properly deleted during a full mutation.
- [`0ff03319be`](https://github.com/backstage/backstage/commit/0ff03319be): Updated usage of `createBackendPlugin`.
- [`fc73f6aae5`](https://github.com/backstage/backstage/commit/fc73f6aae5): Switched the order of reprocessing statements retroactively in migrations. This only improves the experience for those who at a later time perform a large upgrade of an old Backstage installation.

### `@backstage/plugin-catalog-backend-module-aws` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#0115))

#### 0.1.15

##### Patch Changes

- [`671c6af700`](https://github.com/backstage/backstage/commit/671c6af700): Update to import `LocationSpec` from the correct package.
- [`8e025f1347`](https://github.com/backstage/backstage/commit/8e025f1347): Added support for `externalId` when assuming role in `AwsS3EntityProvider`

### `@backstage/plugin-catalog-backend-module-azure` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0113))

#### 0.1.13

##### Patch Changes

- [`2890f47517`](https://github.com/backstage/backstage/commit/2890f47517): This will add the ability to use Azure DevOps with multi project with a single value which is a new feature as previously this had to be done manually for each project that you wanted to add.

  Right now you would have to fill in multiple values in the config to use multiple projects:

  ```
  yourFirstProviderId: # identifies your dataset / provider independent of config changes
      organization: myorg
      project: 'firstProject' # this will match the firstProject project
      repository: '*' # this will match all repos
      path: /catalog-info.yaml
  yourSecondProviderId: # identifies your dataset / provider independent of config changes
      organization: myorg
      project: 'secondProject' # this will match the secondProject project
      repository: '*' # this will match all repos
      path: /catalog-info.yaml
  ```

  With this change you can actually have all projects available where your PAT determines which you have access to, so that includes multiple projects:

  ```
  yourFirstProviderId: # identifies your dataset / provider independent of config changes
      organization: myorg
      project: '*' # this will match all projects where your PAT has access to
      repository: '*' # this will match all repos
      path: /catalog-info.yaml
  ```

- [`85b04f659a`](https://github.com/backstage/backstage/commit/85b04f659a): Internal refactor to not use deprecated `substr`

### `@backstage/plugin-catalog-backend-module-bitbucket` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket.md#029))

#### 0.2.9

##### Patch Changes

- [`85b04f659a`](https://github.com/backstage/backstage/commit/85b04f659a): Internal refactor to not use deprecated `substr`

### `@backstage/plugin-catalog-backend-module-github` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#025))

#### 0.2.5

##### Patch Changes

- [`66158754b4`](https://github.com/backstage/backstage/commit/66158754b4): Add support for filtering out forks
- [`80afd5ff8b`](https://github.com/backstage/backstage/commit/80afd5ff8b): Use github team slug and login annotations rather than entity name to infer location annotations
- [`85b04f659a`](https://github.com/backstage/backstage/commit/85b04f659a): Internal refactor to not use deprecated `substr`

### `@backstage/plugin-catalog-backend-module-gitlab` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#0113))

#### 0.1.13

##### Patch Changes

- [`49948f644f`](https://github.com/backstage/backstage/commit/49948f644f): The config now consistently uses the term 'instance' to refer to a single GitLab API host.
- [`85b04f659a`](https://github.com/backstage/backstage/commit/85b04f659a): Internal refactor to not use deprecated `substr`
- [`52c5685ceb`](https://github.com/backstage/backstage/commit/52c5685ceb): Implement Group and User Catalog Provider

### `@backstage/plugin-catalog-graph` (0.2.26 → [0.2.27](../../changelogs/@backstage/plugin-catalog-graph.md#0227))

#### 0.2.27

##### Patch Changes

- [`c51efce2a0`](https://github.com/backstage/backstage/commit/c51efce2a0): Update docs to always use `yarn add --cwd` for app & backend
- [`fe19058b74`](https://github.com/backstage/backstage/commit/fe19058b74): Fix #16245: The CatalogGraphCard has parameter naming errors for CatalogGraphPage
- [`1827710136`](https://github.com/backstage/backstage/commit/1827710136): Expose additional props on the `CatalogGraphCard` to allow for custom node & label rendering or kind/relation filtering.

### `@backstage/plugin-cicd-statistics` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-cicd-statistics.md#0117))

#### 0.1.17

##### Patch Changes

- [`d950d3e217`](https://github.com/backstage/backstage/commit/d950d3e217): Depend on `@material-ui/core` version `^4.12.2` like all other in-repo packages

### `@backstage/plugin-circleci` (0.3.14 → [0.3.15](../../changelogs/@backstage/plugin-circleci.md#0315))

#### 0.3.15

##### Patch Changes

- [`85b04f659a`](https://github.com/backstage/backstage/commit/85b04f659a): Internal refactor to not use deprecated `substr`
- [`1616e06047`](https://github.com/backstage/backstage/commit/1616e06047): Making workflow a link

### `@backstage/plugin-code-coverage` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-code-coverage.md#028))

#### 0.2.8

##### Patch Changes

- [`c51efce2a0`](https://github.com/backstage/backstage/commit/c51efce2a0): Update docs to always use `yarn add --cwd` for app & backend

### `@backstage/plugin-code-coverage-backend` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-code-coverage-backend.md#028))

#### 0.2.8

##### Patch Changes

- [`c51efce2a0`](https://github.com/backstage/backstage/commit/c51efce2a0): Update docs to always use `yarn add --cwd` for app & backend

### `@backstage/plugin-codescene` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-codescene.md#0110))

#### 0.1.10

##### Patch Changes

- [`d950d3e217`](https://github.com/backstage/backstage/commit/d950d3e217): Depend on `@material-ui/core` version `^4.12.2` like all other in-repo packages

### `@backstage/plugin-cost-insights` (0.12.3 → [0.12.4](../../changelogs/@backstage/plugin-cost-insights.md#0124))

#### 0.12.4

##### Patch Changes

- [`dfa0bb737e`](https://github.com/backstage/backstage/commit/dfa0bb737e): Fix bug in EntityCostsCard if cost aggregation array is empty. Allow title override on the Cost Insights Page

### `@backstage/plugin-events-backend` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-events-backend.md#023))

#### 0.2.3

##### Patch Changes

- [`0ff03319be`](https://github.com/backstage/backstage/commit/0ff03319be): Updated usage of `createBackendPlugin`.

### `@backstage/plugin-events-node` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-events-node.md#023))

#### 0.2.3

##### Patch Changes

- [`19d4abf72c`](https://github.com/backstage/backstage/commit/19d4abf72c): Make `EventParams` typed for implementing tidier event handling.

### `@backstage/plugin-git-release-manager` (0.3.27 → [0.3.28](../../changelogs/@backstage/plugin-git-release-manager.md#0328))

#### 0.3.28

##### Patch Changes

- [`85b04f659a`](https://github.com/backstage/backstage/commit/85b04f659a): Internal refactor to not use deprecated `substr`

### `@backstage/plugin-github-issues` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-github-issues.md#024))

#### 0.2.4

##### Patch Changes

- [`3f88ae9d0a`](https://github.com/backstage/backstage/commit/3f88ae9d0a): Updated README.md examples to use correct components and fixed some syntax errors.

### `@backstage/plugin-home` (0.4.30 → [0.4.31](../../changelogs/@backstage/plugin-home.md#0431))

#### 0.4.31

##### Patch Changes

- [`c51efce2a0`](https://github.com/backstage/backstage/commit/c51efce2a0): Update docs to always use `yarn add --cwd` for app & backend
- [`3d1d867d42`](https://github.com/backstage/backstage/commit/3d1d867d42): Fixed regression that caused the `WelcomeTitle` to not be the right size when passed to the `title` property of the `<Header>` component. A Storybook entry was also added for the `WelcomeTitle`
- [`c553a625d2`](https://github.com/backstage/backstage/commit/c553a625d2): remove unused plugin-stack-overflow dependency

### `@backstage/plugin-ilert` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-ilert.md#024))

#### 0.2.4

##### Patch Changes

- [`c51efce2a0`](https://github.com/backstage/backstage/commit/c51efce2a0): Update docs to always use `yarn add --cwd` for app & backend

### `@backstage/plugin-kafka-backend` (0.2.34 → [0.2.35](../../changelogs/@backstage/plugin-kafka-backend.md#0235))

#### 0.2.35

##### Patch Changes

- [`0ff03319be`](https://github.com/backstage/backstage/commit/0ff03319be): Updated usage of `createBackendPlugin`.
- [`4a6f38a535`](https://github.com/backstage/backstage/commit/4a6f38a535): Added a Backend System plugin feature

### `@backstage/plugin-kubernetes` (0.7.7 → [0.7.8](../../changelogs/@backstage/plugin-kubernetes.md#078))

#### 0.7.8

##### Patch Changes

- [`145a79a15b`](https://github.com/backstage/backstage/commit/145a79a15b): Condenses kubernetes ui plugin to fit more onscreen and increase visibility
- [`628e2bd89a`](https://github.com/backstage/backstage/commit/628e2bd89a): Updated dependency `@kubernetes/client-node` to `0.18.1`.

### `@backstage/plugin-kubernetes-backend` (0.9.2 → [0.9.3](../../changelogs/@backstage/plugin-kubernetes-backend.md#093))

#### 0.9.3

##### Patch Changes

- [`2518ef5b8a`](https://github.com/backstage/backstage/commit/2518ef5b8a): Adding new Cluster detail fields to catalogClusterLocator. Replace deprecated imports with k8s annotations from plugin-kubernetes-common.
- [`7ff81f7692`](https://github.com/backstage/backstage/commit/7ff81f7692): Kubernetes proxy endpoint now accepts content types that are not json
- [`5b7cd5580d`](https://github.com/backstage/backstage/commit/5b7cd5580d): Moving the backend-test-utils to devDependencies.
- [`628e2bd89a`](https://github.com/backstage/backstage/commit/628e2bd89a): Updated dependency `@kubernetes/client-node` to `0.18.1`.
- [`a53d06afe5`](https://github.com/backstage/backstage/commit/a53d06afe5): The name of the header used to specify a cluster to the proxy endpoint is now visible in the API reference.

### `@backstage/plugin-org` (0.6.4 → [0.6.5](../../changelogs/@backstage/plugin-org.md#065))

#### 0.6.5

##### Patch Changes

- [`5a4fa8859b`](https://github.com/backstage/backstage/commit/5a4fa8859b): Updated `LinksGroup` to use `Link` over `ListItem` as this makes the links more obvious and follows the pattern already used in the `GroupProfileCard`. Also updated the `GroupProfileCard` `ExtraDetails` story in Storybook to enable the `showLinks` feature with this off there is no difference between it and the `default` story.

### `@backstage/plugin-org-react` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-org-react.md#014))

#### 0.1.4

##### Patch Changes

- [`d950d3e217`](https://github.com/backstage/backstage/commit/d950d3e217): Depend on `@material-ui/core` version `^4.12.2` like all other in-repo packages

### `@backstage/plugin-pagerduty` (0.5.7 → [0.5.8](../../changelogs/@backstage/plugin-pagerduty.md#058))

#### 0.5.8

##### Patch Changes

- [`804746dd58`](https://github.com/backstage/backstage/commit/804746dd58): The PagerDutyCard now supports an optional `readOnly` property (`<PagerDutyCard readOnly />`) for suppressing the rendering of the "Create Incident" button from the Backstage UI.

### `@backstage/plugin-periskop-backend` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-periskop-backend.md#0113))

#### 0.1.13

##### Patch Changes

- [`0ff03319be`](https://github.com/backstage/backstage/commit/0ff03319be): Updated usage of `createBackendPlugin`.
- [`4a6f38a535`](https://github.com/backstage/backstage/commit/4a6f38a535): Added a Backend System plugin feature

### `@backstage/plugin-playlist` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-playlist.md#016))

#### 0.1.6

##### Patch Changes

- [`d950d3e217`](https://github.com/backstage/backstage/commit/d950d3e217): Depend on `@material-ui/core` version `^4.12.2` like all other in-repo packages

### `@backstage/plugin-playlist-backend` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-playlist-backend.md#025))

#### 0.2.5

##### Patch Changes

- [`b977c2e69f`](https://github.com/backstage/backstage/commit/b977c2e69f): Minor improvements to the descriptions provided with permission rules schemas
- [`5b7cd5580d`](https://github.com/backstage/backstage/commit/5b7cd5580d): Moving the backend-test-utils to devDependencies.
- [`85b04f659a`](https://github.com/backstage/backstage/commit/85b04f659a): Internal refactor to not use deprecated `substr`

### `@backstage/plugin-proxy-backend` (0.2.35 → [0.2.36](../../changelogs/@backstage/plugin-proxy-backend.md#0236))

#### 0.2.36

##### Patch Changes

- [`0ff03319be`](https://github.com/backstage/backstage/commit/0ff03319be): Updated usage of `createBackendPlugin`.
- [`4a6f38a535`](https://github.com/backstage/backstage/commit/4a6f38a535): Added a Backend System plugin feature

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.16 → [0.2.17](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0217))

#### 0.2.17

##### Patch Changes

- [`d72866f0cc`](https://github.com/backstage/backstage/commit/d72866f0cc): Internal refactor to use the new `@backstage/plugin-scaffolder-node` package for some functionality

### `@backstage/plugin-scaffolder-backend-module-rails` (0.4.9 → [0.4.10](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0410))

#### 0.4.10

##### Patch Changes

- [`d72866f0cc`](https://github.com/backstage/backstage/commit/d72866f0cc): Internal refactor to use the new `@backstage/plugin-scaffolder-node` package for some functionality

### `@backstage/plugin-scaffolder-backend-module-sentry` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#012))

#### 0.1.2

##### Patch Changes

- [`da418c89e4`](https://github.com/backstage/backstage/commit/da418c89e4): Fix broken module exports and dependencies to match a backend module, rather than a frontend plugin.
- [`d72866f0cc`](https://github.com/backstage/backstage/commit/d72866f0cc): Internal refactor to use the new `@backstage/plugin-scaffolder-node` package for some functionality

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.14 → [0.2.15](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0215))

#### 0.2.15

##### Patch Changes

- [`d72866f0cc`](https://github.com/backstage/backstage/commit/d72866f0cc): Internal refactor to use the new `@backstage/plugin-scaffolder-node` package for some functionality

### `@backstage/plugin-search-backend` (1.2.2 → [1.2.3](../../changelogs/@backstage/plugin-search-backend.md#123))

#### 1.2.3

##### Patch Changes

- [`1b30c9a0f7`](https://github.com/backstage/backstage/commit/1b30c9a0f7): Change the router's response to include the error message instead of its object type in case it fails during a search query because the messages have more info.

### `@backstage/plugin-search-backend-module-elasticsearch` (1.1.2 → [1.1.3](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#113))

#### 1.1.3

##### Patch Changes

- [`896566906b`](https://github.com/backstage/backstage/commit/896566906b): Export `decodeElasticSearchPageCursor` utility function

### `@backstage/plugin-shortcuts` (0.3.6 → [0.3.7](../../changelogs/@backstage/plugin-shortcuts.md#037))

#### 0.3.7

##### Patch Changes

- [`c51efce2a0`](https://github.com/backstage/backstage/commit/c51efce2a0): Update docs to always use `yarn add --cwd` for app & backend

### `@backstage/plugin-sonarqube` (0.6.2 → [0.6.3](../../changelogs/@backstage/plugin-sonarqube.md#063))

#### 0.6.3

##### Patch Changes

- [`6310eacc11`](https://github.com/backstage/backstage/commit/6310eacc11): Additional export added in order to bind SonarQubeClient to its apiref

### `@backstage/plugin-splunk-on-call` (0.4.3 → [0.4.4](../../changelogs/@backstage/plugin-splunk-on-call.md#044))

#### 0.4.4

##### Patch Changes

- [`3598136ac7`](https://github.com/backstage/backstage/commit/3598136ac7): Refactor plugin Card component to not rerender contents unnecessarily.

### `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.25 → [0.1.26](../../changelogs/@backstage/plugin-tech-insights-backend-module-jsonfc.md#0126))

#### 0.1.26

##### Patch Changes

- [`d6b912f963`](https://github.com/backstage/backstage/commit/d6b912f963): Surface the cause of the json rules engine

### `@backstage/plugin-tech-radar` (0.6.0 → [0.6.1](../../changelogs/@backstage/plugin-tech-radar.md#061))

#### 0.6.1

##### Patch Changes

- [`acf6c8c10b`](https://github.com/backstage/backstage/commit/acf6c8c10b): Deprecate `RadarEntry.url` - use `RadarEntry.links` instead

  ```diff
  - url: 'https://www.javascript.com/',
    key: 'javascript',
    id: 'javascript',
    title: 'JavaScript',
    quadrant: 'languages',
    links: [
  +    {
  +      url: 'https://www.javascript.com/',
  +      title: 'Learn more',
  +    },
    ],
  ```

- [`18024a231c`](https://github.com/backstage/backstage/commit/18024a231c): Allow to set additional links to the entry description.

### `@backstage/plugin-techdocs-addons-test-utils` (1.0.9 → [1.0.10](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#1010))

#### 1.0.10

##### Patch Changes

- [`d950d3e217`](https://github.com/backstage/backstage/commit/d950d3e217): Depend on `@material-ui/core` version `^4.12.2` like all other in-repo packages

### `@backstage/plugin-techdocs-backend` (1.5.2 → [1.5.3](../../changelogs/@backstage/plugin-techdocs-backend.md#153))

#### 1.5.3

##### Patch Changes

- [`6f097023fc`](https://github.com/backstage/backstage/commit/6f097023fc): Keep the tech docs sync event stream alive even if it is taking a while to build.
- [`339d9a5b5c`](https://github.com/backstage/backstage/commit/339d9a5b5c): Added support for using a default `mkdocs.yml` configuration file when none is provided

### `@backstage/plugin-techdocs-module-addons-contrib` (1.0.9 → [1.0.10](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1010))

#### 1.0.10

##### Patch Changes

- [`d950d3e217`](https://github.com/backstage/backstage/commit/d950d3e217): Depend on `@material-ui/core` version `^4.12.2` like all other in-repo packages
- [`4660b63947`](https://github.com/backstage/backstage/commit/4660b63947): Create a TechDocs `<LightBox/>` addon that allows users to open images in a light-box on documentation pages, they can navigate between images if there are several on one page.

  Here's an example on how to use it in a Backstage app:

  ```diff
  import {
    DefaultTechDocsHome,
    TechDocsIndexPage,
    TechDocsReaderPage,
  } from '@backstage/plugin-techdocs';
  import { TechDocsAddons } from '@backstage/plugin-techdocs-react/alpha';
  +import { LightBox } from '@backstage/plugin-techdocs-module-addons-contrib';

  const AppRoutes = () => {
    <FlatRoutes>
      // other plugin routes
      <Route path="/docs" element={<TechDocsIndexPage />}>
        <DefaultTechDocsHome />
      </Route>
      <Route
        path="/docs/:namespace/:kind/:name/*"
        element={<TechDocsReaderPage />}
      >
        <TechDocsAddons>
  +       <LightBox />
        </TechDocsAddons>
      </Route>
    </FlatRoutes>;
  };
  ```

### `@backstage/plugin-user-settings-backend` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-user-settings-backend.md#016))

#### 0.1.6

##### Patch Changes

- [`0ff03319be`](https://github.com/backstage/backstage/commit/0ff03319be): Updated usage of `createBackendPlugin`.
- [`4a6f38a535`](https://github.com/backstage/backstage/commit/4a6f38a535): Added a Backend System plugin feature

### `@backstage/plugin-vault` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-vault.md#019))

#### 0.1.9

##### Patch Changes

- [`fd7a77b9c4`](https://github.com/backstage/backstage/commit/fd7a77b9c4): Surface additional context and details to the Backstage UI when the Vault plugin encounters non-successful HTTP responses from the Vault API.

### `@backstage/plugin-vault-backend` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-vault-backend.md#028))

#### 0.2.8

##### Patch Changes

- [`5b7cd5580d`](https://github.com/backstage/backstage/commit/5b7cd5580d): Moving the backend-test-utils to devDependencies.

### `@backstage/plugin-xcmetrics` (0.2.34 → [0.2.35](../../changelogs/@backstage/plugin-xcmetrics.md#0235))

#### 0.2.35

##### Patch Changes

- [`c51efce2a0`](https://github.com/backstage/backstage/commit/c51efce2a0): Update docs to always use `yarn add --cwd` for app & backend

### `@backstage/repo-tools` (0.1.1 → [0.1.2](../../changelogs/@backstage/repo-tools.md#012))

#### 0.1.2

##### Patch Changes

- [`ff63acf30a`](https://github.com/backstage/backstage/commit/ff63acf30a): Packages without a declared `backstage.role` are now ignored.

### `@backstage/theme` (0.2.16 → [0.2.17](../../changelogs/@backstage/theme.md#0217))

#### 0.2.17

##### Patch Changes

- [`b7705e176c`](https://github.com/backstage/backstage/commit/b7705e176c): Use same table header color as @backstage/core-components Table to meet accessibility color contrast requirements. This change affects material-ui tables.

### `@techdocs/cli` (1.3.1 → [1.3.2](../../changelogs/@techdocs/cli.md#132))

#### 1.3.2

##### Patch Changes

- [`dd1e37649f`](https://github.com/backstage/backstage/commit/dd1e37649f): Deprecated getMkDocsYml in favor of getMkdocsYml (lowercase 'd')
- [`dcacf94912`](https://github.com/backstage/backstage/commit/dcacf94912): Fix proxying to mkdocs

  The domain localhost may point to both 127.0.0.1 and ::1, ipv4 and ipv6
  and when node tries to lookup localhost it might prefer ipv6 while mkdocs
  is only listening on ipv4. This tells node-proxy to target the ipv4 address
  instead of relying on localhost hostname lookup.

- [`339d9a5b5c`](https://github.com/backstage/backstage/commit/339d9a5b5c): Added support for using a default `mkdocs.yml` configuration file when none is provided
- [`6e0b6a0d50`](https://github.com/backstage/backstage/commit/6e0b6a0d50): Fixed publish command missing awsBucketRootPath option.
  Fixed publish command having the gcsBucketRootPath option misconfigured, previously returning a boolean vs a string.

## Excluded dependency updates

- `@backstage/backend-tasks` (0.4.2 → [0.4.3](../../changelogs/@backstage/backend-tasks.md#043))
- `@backstage/catalog-client` (1.3.0 → [1.3.1](../../changelogs/@backstage/catalog-client.md#131))
- `@backstage/dev-utils` (1.0.11 → [1.0.12](../../changelogs/@backstage/dev-utils.md#1012))
- `@backstage/integration-react` (1.1.9 → [1.1.10](../../changelogs/@backstage/integration-react.md#1110))
- `@backstage/plugin-adr-common` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-adr-common.md#026))
- `@backstage/plugin-airbrake-backend` (0.2.14 → [0.2.15](../../changelogs/@backstage/plugin-airbrake-backend.md#0215))
- `@backstage/plugin-auth-node` (0.2.10 → [0.2.11](../../changelogs/@backstage/plugin-auth-node.md#0211))
- `@backstage/plugin-badges` (0.2.38 → [0.2.39](../../changelogs/@backstage/plugin-badges.md#0239))
- `@backstage/plugin-badges-backend` (0.1.35 → [0.1.36](../../changelogs/@backstage/plugin-badges-backend.md#0136))
- `@backstage/plugin-bazaar` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-bazaar.md#024))
- `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#019))
- `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#017))
- `@backstage/plugin-catalog-backend-module-gerrit` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0110))
- `@backstage/plugin-catalog-backend-module-ldap` (0.5.8 → [0.5.9](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#059))
- `@backstage/plugin-catalog-backend-module-openapi` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#018))
- `@backstage/plugin-catalog-common` (1.0.10 → [1.0.11](../../changelogs/@backstage/plugin-catalog-common.md#1011))
- `@backstage/plugin-catalog-graphql` (0.3.17 → [0.3.18](../../changelogs/@backstage/plugin-catalog-graphql.md#0318))
- `@backstage/plugin-catalog-import` (0.9.4 → [0.9.5](../../changelogs/@backstage/plugin-catalog-import.md#095))
- `@backstage/plugin-catalog-node` (1.3.2 → [1.3.3](../../changelogs/@backstage/plugin-catalog-node.md#133))
- `@backstage/plugin-cicd-statistics-module-gitlab` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-cicd-statistics-module-gitlab.md#0111))
- `@backstage/plugin-cloudbuild` (0.3.14 → [0.3.15](../../changelogs/@backstage/plugin-cloudbuild.md#0315))
- `@backstage/plugin-code-climate` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-code-climate.md#0115))
- `@backstage/plugin-config-schema` (0.1.37 → [0.1.38](../../changelogs/@backstage/plugin-config-schema.md#0138))
- `@backstage/plugin-events-backend-module-aws-sqs` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#014))
- `@backstage/plugin-events-backend-module-azure` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-events-backend-module-azure.md#014))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#014))
- `@backstage/plugin-events-backend-module-gerrit` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#014))
- `@backstage/plugin-events-backend-module-github` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-events-backend-module-github.md#014))
- `@backstage/plugin-events-backend-module-gitlab` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#014))
- `@backstage/plugin-events-backend-test-utils` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-events-backend-test-utils.md#014))
- `@backstage/plugin-explore-backend` (0.0.3 → [0.0.4](../../changelogs/@backstage/plugin-explore-backend.md#004))
- `@backstage/plugin-explore-react` (0.0.25 → [0.0.26](../../changelogs/@backstage/plugin-explore-react.md#0026))
- `@backstage/plugin-firehydrant` (0.1.31 → [0.1.32](../../changelogs/@backstage/plugin-firehydrant.md#0132))
- `@backstage/plugin-fossa` (0.2.46 → [0.2.47](../../changelogs/@backstage/plugin-fossa.md#0247))
- `@backstage/plugin-gcalendar` (0.3.10 → [0.3.11](../../changelogs/@backstage/plugin-gcalendar.md#0311))
- `@backstage/plugin-gcp-projects` (0.3.33 → [0.3.34](../../changelogs/@backstage/plugin-gcp-projects.md#0334))
- `@backstage/plugin-github-actions` (0.5.14 → [0.5.15](../../changelogs/@backstage/plugin-github-actions.md#0515))
- `@backstage/plugin-github-deployments` (0.1.45 → [0.1.46](../../changelogs/@backstage/plugin-github-deployments.md#0146))
- `@backstage/plugin-github-pull-requests-board` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-github-pull-requests-board.md#019))
- `@backstage/plugin-gitops-profiles` (0.3.32 → [0.3.33](../../changelogs/@backstage/plugin-gitops-profiles.md#0333))
- `@backstage/plugin-gocd` (0.1.20 → [0.1.21](../../changelogs/@backstage/plugin-gocd.md#0121))
- `@backstage/plugin-graphiql` (0.2.46 → [0.2.47](../../changelogs/@backstage/plugin-graphiql.md#0247))
- `@backstage/plugin-graphql-backend` (0.1.31 → [0.1.32](../../changelogs/@backstage/plugin-graphql-backend.md#0132))
- `@backstage/plugin-jenkins` (0.7.13 → [0.7.14](../../changelogs/@backstage/plugin-jenkins.md#0714))
- `@backstage/plugin-jenkins-backend` (0.1.31 → [0.1.32](../../changelogs/@backstage/plugin-jenkins-backend.md#0132))
- `@backstage/plugin-jenkins-common` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-jenkins-common.md#0113))
- `@backstage/plugin-kafka` (0.3.14 → [0.3.15](../../changelogs/@backstage/plugin-kafka.md#0315))
- `@backstage/plugin-newrelic` (0.3.32 → [0.3.33](../../changelogs/@backstage/plugin-newrelic.md#0333))
- `@backstage/plugin-newrelic-dashboard` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-newrelic-dashboard.md#028))
- `@backstage/plugin-periskop` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-periskop.md#0113))
- `@backstage/plugin-permission-backend` (0.5.16 → [0.5.17](../../changelogs/@backstage/plugin-permission-backend.md#0517))
- `@backstage/plugin-permission-node` (0.7.4 → [0.7.5](../../changelogs/@backstage/plugin-permission-node.md#075))
- `@backstage/plugin-permission-react` (0.4.9 → [0.4.10](../../changelogs/@backstage/plugin-permission-react.md#0410))
- `@backstage/plugin-rollbar` (0.4.14 → [0.4.15](../../changelogs/@backstage/plugin-rollbar.md#0415))
- `@backstage/plugin-rollbar-backend` (0.1.38 → [0.1.39](../../changelogs/@backstage/plugin-rollbar-backend.md#0139))
- `@backstage/plugin-scaffolder-common` (1.2.4 → [1.2.5](../../changelogs/@backstage/plugin-scaffolder-common.md#125))
- `@backstage/plugin-search-backend-module-pg` (0.5.2 → [0.5.3](../../changelogs/@backstage/plugin-search-backend-module-pg.md#053))
- `@backstage/plugin-search-backend-node` (1.1.2 → [1.1.3](../../changelogs/@backstage/plugin-search-backend-node.md#113))
- `@backstage/plugin-sonarqube-backend` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-sonarqube-backend.md#017))
- `@backstage/plugin-sonarqube-react` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-sonarqube-react.md#012))
- `@backstage/plugin-stack-overflow` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-stack-overflow.md#0111))
- `@backstage/plugin-stack-overflow-backend` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-stack-overflow-backend.md#0111))
- `@backstage/plugin-techdocs-react` (1.1.2 → [1.1.3](../../changelogs/@backstage/plugin-techdocs-react.md#113))
- `@backstage/plugin-todo` (0.2.16 → [0.2.17](../../changelogs/@backstage/plugin-todo.md#0217))
- `@backstage/plugin-todo-backend` (0.1.38 → [0.1.39](../../changelogs/@backstage/plugin-todo-backend.md#0139))
- `@backstage/test-utils` (1.2.4 → [1.2.5](../../changelogs/@backstage/test-utils.md#125))
