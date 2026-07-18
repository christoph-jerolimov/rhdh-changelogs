# Backstage Release 1.3.0 changelog

Changes between 1.2.2 and 1.3.0 — 133 changed and 6 added packages.

## Summary

- [Newly added packages](#newly-added-packages): 6 packages
- [Breaking changes](#breaking-changes): 3 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 5 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 2 packages
- [Other minor version bumps](#other-minor-version-bumps): 5 packages
- [Other patch version bumps](#other-patch-version-bumps): 99 packages
- [Excluded dependency updates](#excluded-dependency-updates): 19 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/plugin-bitbucket-cloud-common` (new, 0.1.0)](#backstageplugin-bitbucket-cloud-common-new-010)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (new, 0.1.0)](#backstageplugin-catalog-backend-module-bitbucket-cloud-new-010)
  - [`@backstage/plugin-dynatrace` (new, 0.1.0)](#backstageplugin-dynatrace-new-010)
  - [`@backstage/plugin-github-pull-requests-board` (new, 0.1.0)](#backstageplugin-github-pull-requests-board-new-010)
  - [`@backstage/plugin-vault` (new, 0.1.0)](#backstageplugin-vault-new-010)
  - [`@backstage/plugin-vault-backend` (new, 0.1.0)](#backstageplugin-vault-backend-new-010)
- [Breaking changes](#breaking-changes)
  - [`@backstage/backend-common` (0.13.5 → 0.14.0)](#backstagebackend-common-0135--0140)
  - [`@backstage/plugin-pagerduty` (0.3.32 → 0.4.0)](#backstageplugin-pagerduty-0332--040)
  - [`@backstage/plugin-permission-node` (0.6.1 → 0.6.2)](#backstageplugin-permission-node-061--062)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/plugin-catalog-backend-module-bitbucket` (0.1.3 → 0.2.0)](#backstageplugin-catalog-backend-module-bitbucket-013--020)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.4.3 → 0.5.0)](#backstageplugin-catalog-backend-module-ldap-043--050)
  - [`@backstage/plugin-kubernetes-backend` (0.5.1 → 0.6.0)](#backstageplugin-kubernetes-backend-051--060)
  - [`@backstage/plugin-kubernetes-common` (0.2.10 → 0.3.0)](#backstageplugin-kubernetes-common-0210--030)
  - [`@backstage/plugin-search` (0.8.1 → 0.9.0)](#backstageplugin-search-081--090)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-explore-react` (0.0.17 → 0.0.18)](#backstageplugin-explore-react-0017--0018)
  - [`@backstage/release-manifests` (0.0.3 → 0.0.4)](#backstagerelease-manifests-003--004)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/plugin-catalog` (1.2.0 → 1.3.0)](#backstageplugin-catalog-120--130)
  - [`@backstage/plugin-catalog-backend` (1.1.2 → 1.2.0)](#backstageplugin-catalog-backend-112--120)
  - [`@backstage/plugin-scaffolder` (1.2.0 → 1.3.0)](#backstageplugin-scaffolder-120--130)
  - [`@backstage/plugin-scaffolder-backend` (1.2.0 → 1.3.0)](#backstageplugin-scaffolder-backend-120--130)
  - [`@backstage/plugin-techdocs` (1.1.1 → 1.2.0)](#backstageplugin-techdocs-111--120)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-tasks` (0.3.1 → 0.3.2)](#backstagebackend-tasks-031--032)
  - [`@backstage/backend-test-utils` (0.1.24 → 0.1.25)](#backstagebackend-test-utils-0124--0125)
  - [`@backstage/catalog-client` (1.0.2 → 1.0.3)](#backstagecatalog-client-102--103)
  - [`@backstage/catalog-model` (1.0.2 → 1.0.3)](#backstagecatalog-model-102--103)
  - [`@backstage/cli` (0.17.1 → 0.17.2)](#backstagecli-0171--0172)
  - [`@backstage/config-loader` (1.1.1 → 1.1.2)](#backstageconfig-loader-111--112)
  - [`@backstage/core-app-api` (1.0.2 → 1.0.3)](#backstagecore-app-api-102--103)
  - [`@backstage/core-components` (0.9.4 → 0.9.5)](#backstagecore-components-094--095)
  - [`@backstage/core-plugin-api` (1.0.2 → 1.0.3)](#backstagecore-plugin-api-102--103)
  - [`@backstage/create-app` (0.4.27 → 0.4.28)](#backstagecreate-app-0427--0428)
  - [`@backstage/integration` (1.2.0 → 1.2.1)](#backstageintegration-120--121)
  - [`@backstage/integration-react` (1.1.0 → 1.1.1)](#backstageintegration-react-110--111)
  - [`@backstage/plugin-adr` (0.1.0 → 0.1.1)](#backstageplugin-adr-010--011)
  - [`@backstage/plugin-adr-backend` (0.1.0 → 0.1.1)](#backstageplugin-adr-backend-010--011)
  - [`@backstage/plugin-airbrake` (0.3.5 → 0.3.6)](#backstageplugin-airbrake-035--036)
  - [`@backstage/plugin-airbrake-backend` (0.2.5 → 0.2.6)](#backstageplugin-airbrake-backend-025--026)
  - [`@backstage/plugin-allure` (0.1.21 → 0.1.22)](#backstageplugin-allure-0121--0122)
  - [`@backstage/plugin-analytics-module-ga` (0.1.16 → 0.1.17)](#backstageplugin-analytics-module-ga-0116--0117)
  - [`@backstage/plugin-apache-airflow` (0.1.13 → 0.1.14)](#backstageplugin-apache-airflow-0113--0114)
  - [`@backstage/plugin-api-docs` (0.8.5 → 0.8.6)](#backstageplugin-api-docs-085--086)
  - [`@backstage/plugin-app-backend` (0.3.32 → 0.3.33)](#backstageplugin-app-backend-0332--0333)
  - [`@backstage/plugin-auth-backend` (0.14.0 → 0.14.1)](#backstageplugin-auth-backend-0140--0141)
  - [`@backstage/plugin-auth-node` (0.2.1 → 0.2.2)](#backstageplugin-auth-node-021--022)
  - [`@backstage/plugin-azure-devops` (0.1.21 → 0.1.22)](#backstageplugin-azure-devops-0121--0122)
  - [`@backstage/plugin-azure-devops-backend` (0.3.11 → 0.3.12)](#backstageplugin-azure-devops-backend-0311--0312)
  - [`@backstage/plugin-badges` (0.2.29 → 0.2.30)](#backstageplugin-badges-0229--0230)
  - [`@backstage/plugin-bitrise` (0.1.32 → 0.1.33)](#backstageplugin-bitrise-0132--0133)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.1.5 → 0.1.6)](#backstageplugin-catalog-backend-module-aws-015--016)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.1.3 → 0.1.4)](#backstageplugin-catalog-backend-module-azure-013--014)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (0.1.0 → 0.1.1)](#backstageplugin-catalog-backend-module-gerrit-010--011)
  - [`@backstage/plugin-catalog-backend-module-github` (0.1.3 → 0.1.4)](#backstageplugin-catalog-backend-module-github-013--014)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.1.3 → 0.1.4)](#backstageplugin-catalog-backend-module-gitlab-013--014)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.3.2 → 0.3.3)](#backstageplugin-catalog-backend-module-msgraph-032--033)
  - [`@backstage/plugin-catalog-common` (1.0.2 → 1.0.3)](#backstageplugin-catalog-common-102--103)
  - [`@backstage/plugin-catalog-graphql` (0.3.9 → 0.3.10)](#backstageplugin-catalog-graphql-039--0310)
  - [`@backstage/plugin-catalog-import` (0.8.8 → 0.8.9)](#backstageplugin-catalog-import-088--089)
  - [`@backstage/plugin-catalog-react` (1.1.0 → 1.1.1)](#backstageplugin-catalog-react-110--111)
  - [`@backstage/plugin-circleci` (0.3.5 → 0.3.6)](#backstageplugin-circleci-035--036)
  - [`@backstage/plugin-cloudbuild` (0.3.5 → 0.3.6)](#backstageplugin-cloudbuild-035--036)
  - [`@backstage/plugin-code-climate` (0.1.5 → 0.1.6)](#backstageplugin-code-climate-015--016)
  - [`@backstage/plugin-code-coverage` (0.1.32 → 0.1.33)](#backstageplugin-code-coverage-0132--0133)
  - [`@backstage/plugin-code-coverage-backend` (0.1.30 → 0.1.31)](#backstageplugin-code-coverage-backend-0130--0131)
  - [`@backstage/plugin-codescene` (0.1.0 → 0.1.1)](#backstageplugin-codescene-010--011)
  - [`@backstage/plugin-config-schema` (0.1.28 → 0.1.29)](#backstageplugin-config-schema-0128--0129)
  - [`@backstage/plugin-cost-insights` (0.11.27 → 0.11.28)](#backstageplugin-cost-insights-01127--01128)
  - [`@backstage/plugin-explore` (0.3.36 → 0.3.37)](#backstageplugin-explore-0336--0337)
  - [`@backstage/plugin-firehydrant` (0.1.22 → 0.1.23)](#backstageplugin-firehydrant-0122--0123)
  - [`@backstage/plugin-fossa` (0.2.37 → 0.2.38)](#backstageplugin-fossa-0237--0238)
  - [`@backstage/plugin-gcalendar` (0.3.1 → 0.3.2)](#backstageplugin-gcalendar-031--032)
  - [`@backstage/plugin-gcp-projects` (0.3.24 → 0.3.25)](#backstageplugin-gcp-projects-0324--0325)
  - [`@backstage/plugin-git-release-manager` (0.3.18 → 0.3.19)](#backstageplugin-git-release-manager-0318--0319)
  - [`@backstage/plugin-github-actions` (0.5.5 → 0.5.6)](#backstageplugin-github-actions-055--056)
  - [`@backstage/plugin-github-deployments` (0.1.36 → 0.1.37)](#backstageplugin-github-deployments-0136--0137)
  - [`@backstage/plugin-gitops-profiles` (0.3.23 → 0.3.24)](#backstageplugin-gitops-profiles-0323--0324)
  - [`@backstage/plugin-gocd` (0.1.11 → 0.1.12)](#backstageplugin-gocd-0111--0112)
  - [`@backstage/plugin-graphiql` (0.2.37 → 0.2.38)](#backstageplugin-graphiql-0237--0238)
  - [`@backstage/plugin-graphql-backend` (0.1.22 → 0.1.23)](#backstageplugin-graphql-backend-0122--0123)
  - [`@backstage/plugin-home` (0.4.21 → 0.4.22)](#backstageplugin-home-0421--0422)
  - [`@backstage/plugin-ilert` (0.1.31 → 0.1.32)](#backstageplugin-ilert-0131--0132)
  - [`@backstage/plugin-jenkins` (0.7.4 → 0.7.5)](#backstageplugin-jenkins-074--075)
  - [`@backstage/plugin-jenkins-backend` (0.1.22 → 0.1.23)](#backstageplugin-jenkins-backend-0122--0123)
  - [`@backstage/plugin-kafka` (0.3.5 → 0.3.6)](#backstageplugin-kafka-035--036)
  - [`@backstage/plugin-kubernetes` (0.6.5 → 0.6.6)](#backstageplugin-kubernetes-065--066)
  - [`@backstage/plugin-lighthouse` (0.3.5 → 0.3.6)](#backstageplugin-lighthouse-035--036)
  - [`@backstage/plugin-newrelic` (0.3.23 → 0.3.24)](#backstageplugin-newrelic-0323--0324)
  - [`@backstage/plugin-org` (0.5.5 → 0.5.6)](#backstageplugin-org-055--056)
  - [`@backstage/plugin-periskop` (0.1.3 → 0.1.4)](#backstageplugin-periskop-013--014)
  - [`@backstage/plugin-periskop-backend` (0.1.3 → 0.1.4)](#backstageplugin-periskop-backend-013--014)
  - [`@backstage/plugin-permission-backend` (0.5.7 → 0.5.8)](#backstageplugin-permission-backend-057--058)
  - [`@backstage/plugin-permission-common` (0.6.1 → 0.6.2)](#backstageplugin-permission-common-061--062)
  - [`@backstage/plugin-rollbar` (0.4.5 → 0.4.6)](#backstageplugin-rollbar-045--046)
  - [`@backstage/plugin-rollbar-backend` (0.1.29 → 0.1.30)](#backstageplugin-rollbar-backend-0129--0130)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.7 → 0.2.8)](#backstageplugin-scaffolder-backend-module-cookiecutter-027--028)
  - [`@backstage/plugin-search-backend` (0.5.2 → 0.5.3)](#backstageplugin-search-backend-052--053)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (0.1.4 → 0.1.5)](#backstageplugin-search-backend-module-elasticsearch-014--015)
  - [`@backstage/plugin-search-backend-module-pg` (0.3.3 → 0.3.4)](#backstageplugin-search-backend-module-pg-033--034)
  - [`@backstage/plugin-search-backend-node` (0.6.1 → 0.6.2)](#backstageplugin-search-backend-node-061--062)
  - [`@backstage/plugin-search-common` (0.3.4 → 0.3.5)](#backstageplugin-search-common-034--035)
  - [`@backstage/plugin-search-react` (0.2.0 → 0.2.1)](#backstageplugin-search-react-020--021)
  - [`@backstage/plugin-sentry` (0.3.43 → 0.3.44)](#backstageplugin-sentry-0343--0344)
  - [`@backstage/plugin-shortcuts` (0.2.6 → 0.2.7)](#backstageplugin-shortcuts-026--027)
  - [`@backstage/plugin-sonarqube` (0.3.5 → 0.3.6)](#backstageplugin-sonarqube-035--036)
  - [`@backstage/plugin-splunk-on-call` (0.3.29 → 0.3.30)](#backstageplugin-splunk-on-call-0329--0330)
  - [`@backstage/plugin-stack-overflow` (0.1.1 → 0.1.2)](#backstageplugin-stack-overflow-011--012)
  - [`@backstage/plugin-tech-insights` (0.2.1 → 0.2.2)](#backstageplugin-tech-insights-021--022)
  - [`@backstage/plugin-tech-insights-backend` (0.4.0 → 0.4.1)](#backstageplugin-tech-insights-backend-040--041)
  - [`@backstage/plugin-tech-insights-node` (0.3.0 → 0.3.1)](#backstageplugin-tech-insights-node-030--031)
  - [`@backstage/plugin-tech-radar` (0.5.12 → 0.5.13)](#backstageplugin-tech-radar-0512--0513)
  - [`@backstage/plugin-techdocs-addons-test-utils` (1.0.0 → 1.0.1)](#backstageplugin-techdocs-addons-test-utils-100--101)
  - [`@backstage/plugin-techdocs-backend` (1.1.1 → 1.1.2)](#backstageplugin-techdocs-backend-111--112)
  - [`@backstage/plugin-techdocs-module-addons-contrib` (1.0.0 → 1.0.1)](#backstageplugin-techdocs-module-addons-contrib-100--101)
  - [`@backstage/plugin-techdocs-node` (1.1.1 → 1.1.2)](#backstageplugin-techdocs-node-111--112)
  - [`@backstage/plugin-techdocs-react` (1.0.0 → 1.0.1)](#backstageplugin-techdocs-react-100--101)
  - [`@backstage/plugin-todo` (0.2.7 → 0.2.8)](#backstageplugin-todo-027--028)
  - [`@backstage/plugin-todo-backend` (0.1.29 → 0.1.30)](#backstageplugin-todo-backend-0129--0130)
  - [`@backstage/plugin-user-settings` (0.4.4 → 0.4.5)](#backstageplugin-user-settings-044--045)
  - [`@backstage/plugin-xcmetrics` (0.2.25 → 0.2.26)](#backstageplugin-xcmetrics-0225--0226)
  - [`@backstage/test-utils` (1.1.0 → 1.1.1)](#backstagetest-utils-110--111)
  - [`@techdocs/cli` (1.1.1 → 1.1.2)](#techdocscli-111--112)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/plugin-bitbucket-cloud-common` (new, [0.1.0](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#010))

#### 0.1.0

##### Minor Changes

- [`1dffa7dd4d`](https://github.com/backstage/backstage/commit/1dffa7dd4d): Add new common library `bitbucket-cloud-common` with a client for Bitbucket Cloud.

  This client can be reused across all packages and might be the future place for additional
  features like managing the rate limits, etc.

  The client itself was generated in parts using the `@openapitools/openapi-generator-cli`.

##### Patch Changes

- [`9122060776`](https://github.com/backstage/backstage/commit/9122060776): Updated dependency `msw` to `^0.42.0`.

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (new, [0.1.0](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#010))

#### 0.1.0

##### Minor Changes

- [`dfc4efcbf0`](https://github.com/backstage/backstage/commit/dfc4efcbf0): Add new plugin `catalog-backend-module-bitbucket-cloud` with `BitbucketCloudEntityProvider`.

  This entity provider is an alternative/replacement to the `BitbucketDiscoveryProcessor` **_(for Bitbucket Cloud only!)_**.
  It replaces use cases using `search=true` and should be powerful enough as a complete replacement.

  If any feature for Bitbucket Cloud is missing and preventing you from switching, please raise an issue.

  **Before:**

  ```typescript
  // packages/backend/src/plugins/catalog.ts

  builder.addProcessor(
    BitbucketDiscoveryProcessor.fromConfig(env.config, { logger: env.logger }),
  );
  ```

  ```yaml
  # app-config.yaml

  catalog:
    locations:
      - type: bitbucket-discovery
        target: 'https://bitbucket.org/workspaces/workspace-name/projects/apis-*/repos/service-*?search=true&catalogPath=/catalog-info.yaml'
  ```

  **After:**

  ```typescript
  // packages/backend/src/plugins/catalog.ts
  builder.addEntityProvider(
    BitbucketCloudEntityProvider.fromConfig(env.config, {
      logger: env.logger,
      schedule: env.scheduler.createScheduledTaskRunner({
        frequency: { minutes: 30 },
        timeout: { minutes: 3 },
      }),
    }),
  );
  ```

  ```yaml
  # app-config.yaml

  catalog:
    providers:
      bitbucketCloud:
        yourProviderId: # identifies your ingested dataset
          catalogPath: /catalog-info.yaml # default value
          filters: # optional
            projectKey: '^apis-.*
  ```

### `@backstage/plugin-dynatrace` (new, [0.1.0](../../changelogs/@backstage/plugin-dynatrace.md#010))

#### 0.1.0

##### Minor Changes

- [`70027d09aa`](https://github.com/backstage/backstage/commit/70027d09aa): Adds Dynatrace plugin

### `@backstage/plugin-github-pull-requests-board` (new, [0.1.0](../../changelogs/@backstage/plugin-github-pull-requests-board.md#010))

#### 0.1.0

##### Minor Changes

- [`fc9927c81d`](https://github.com/backstage/backstage/commit/fc9927c81d): Add Github Pull Requests board plugin

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-vault` (new, [0.1.0](../../changelogs/@backstage/plugin-vault.md#010))

#### 0.1.0

##### Minor Changes

- [`7c310a5bc2`](https://github.com/backstage/backstage/commit/7c310a5bc2): First implementation of the frontend vault plugin. For more information refer to its `README.md`.

### `@backstage/plugin-vault-backend` (new, [0.1.0](../../changelogs/@backstage/plugin-vault-backend.md#010))

#### 0.1.0

##### Minor Changes

- [`7c310a5bc2`](https://github.com/backstage/backstage/commit/7c310a5bc2): First implementation for the backend vault plugin. For more information refer to its `README.md`.

## Breaking changes

### `@backstage/backend-common` (0.13.5 → [0.14.0](../../changelogs/@backstage/backend-common.md#0140))

#### 0.14.0

##### Minor Changes

- [`55647ec7df`](https://github.com/backstage/backstage/commit/55647ec7df): **BREAKING**: Server-to-server tokens that are authenticated by the `ServerTokenManager` now must have an `exp` claim that has not expired. Tokens where the `exp` claim is in the past or missing are considered invalid and will throw an error. This is a followup to the deprecation from the `1.2` release of Backstage where perpetual tokens were deprecated. Be sure to update any usage of the `getToken()` method to have it be called every time a token is needed. Do not store tokens for later use.

##### Patch Changes

- [`f72a6b8c62`](https://github.com/backstage/backstage/commit/f72a6b8c62): Applied the `luxon` dependency fix from the `0.13.4` patch release.
- [`5b22a8c97f`](https://github.com/backstage/backstage/commit/5b22a8c97f): Applied the AWS S3 reading patch from the `0.13.5` patch release.
- [`f5283a42e2`](https://github.com/backstage/backstage/commit/f5283a42e2): Updated dependency `@google-cloud/storage` to `^6.0.0`.
- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-pagerduty` (0.3.32 → [0.4.0](../../changelogs/@backstage/plugin-pagerduty.md#040))

#### 0.4.0

##### Minor Changes

- [`b157c2eb1c`](https://github.com/backstage/backstage/commit/b157c2eb1c): **Breaking**: Use identityApi to provide auth token for pagerduty API calls.

##### Patch Changes

- [`76bf6400fe`](https://github.com/backstage/backstage/commit/76bf6400fe): Fix alert that was not showing after creating an incident.
- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-permission-node` (0.6.1 → [0.6.2](../../changelogs/@backstage/plugin-permission-node.md#062))

#### 0.6.2

##### Patch Changes

- [`58426f9c0f`](https://github.com/backstage/backstage/commit/58426f9c0f): Added a new endpoint for aggregating permission metadata from a plugin backend: `/.well-known/backstage/permissions/metadata`

  By default, the metadata endpoint will return information about the permission rules supported by the plugin. Plugin authors can also provide an optional `permissions` parameter to `createPermissionIntegrationRouter`. If provided, these `Permission` objects will be included in the metadata returned by this endpoint. The `permissions` parameter will eventually be required in a future breaking change.

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

## 0.x minor version bumps

### `@backstage/plugin-catalog-backend-module-bitbucket` (0.1.3 → [0.2.0](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket.md#020))

#### 0.2.0

##### Minor Changes

- [`1c01c0fd14`](https://github.com/backstage/backstage/commit/1c01c0fd14): Integrate `@backstage/plugin-bitbucket-cloud-common` as replacement for the `BitbucketCloudClient`.

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-catalog-backend-module-ldap` (0.4.3 → [0.5.0](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#050))

#### 0.5.0

##### Minor Changes

- [`1f83f0bc84`](https://github.com/backstage/backstage/commit/1f83f0bc84): Added the possibility to pass TLS configuration to ldap connection

### `@backstage/plugin-kubernetes-backend` (0.5.1 → [0.6.0](../../changelogs/@backstage/plugin-kubernetes-backend.md#060))

#### 0.6.0

##### Minor Changes

- [`4328737af6`](https://github.com/backstage/backstage/commit/4328737af6): Add support to fetch data for Stateful Sets from Kubernetes

##### Patch Changes

- [`0c70cd8e1d`](https://github.com/backstage/backstage/commit/0c70cd8e1d): cache and refresh Azure tokens to avoid excessive calls to Azure Identity
- [`2aedf64ad3`](https://github.com/backstage/backstage/commit/2aedf64ad3): Updated dependency `@google-cloud/container` to `^4.0.0`.

### `@backstage/plugin-kubernetes-common` (0.2.10 → [0.3.0](../../changelogs/@backstage/plugin-kubernetes-common.md#030))

#### 0.3.0

##### Minor Changes

- [`4328737af6`](https://github.com/backstage/backstage/commit/4328737af6): Add support to fetch data for Stateful Sets

### `@backstage/plugin-search` (0.8.1 → [0.9.0](../../changelogs/@backstage/plugin-search.md#090))

#### 0.9.0

##### Minor Changes

- [`2dc4818541`](https://github.com/backstage/backstage/commit/2dc4818541): The pre-alpha `<SearchPageNext>`, `<SearchBarNext>`, `etc...` components have been removed. In the unlikely event you were still using/referencing them, please update to using their non-`*Next` equivalents from either `@backstage/plugin-search-react` or `@backstage/plugin-search`.

##### Patch Changes

- [`8809159148`](https://github.com/backstage/backstage/commit/8809159148): Components `<DefaultResultListItem>`, `<SearchBar>` (including `<SearchBarBase>`), `<SearchFilter>` (including `.Checkbox`, `.Select`, and `.Autocomplete` static prop components), `<SearchResult>`, and `<SearchResultPager>` are now exported from `@backstage/plugin-search-react`. They are now deprecated in `@backstage/plugin-search` and will be removed in a future release.
- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.
- [`5388e6bdc5`](https://github.com/backstage/backstage/commit/5388e6bdc5): Fixed a bug that could cause analytics events in other parts of Backstage to capture nonsensical values resembling search modal state under some circumstances.
- [`915700f64f`](https://github.com/backstage/backstage/commit/915700f64f): In order to simplify analytics on top of the search experience in Backstage, the provided `<*ResultListItem />` component now captures a `discover` analytics event instead of a `click` event. This event includes the result rank as its `value` and, like a click, the URL/path clicked to as its `to` attribute.

## 0.0.x patch version bumps

### `@backstage/plugin-explore-react` (0.0.17 → [0.0.18](../../changelogs/@backstage/plugin-explore-react.md#0018))

#### 0.0.18

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/release-manifests` (0.0.3 → [0.0.4](../../changelogs/@backstage/release-manifests.md#004))

#### 0.0.4

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

## Other minor version bumps

### `@backstage/plugin-catalog` (1.2.0 → [1.3.0](../../changelogs/@backstage/plugin-catalog.md#130))

#### 1.3.0

##### Minor Changes

- [`fe7614ea54`](https://github.com/backstage/backstage/commit/fe7614ea54): Add an optional icon to the Catalog and TechDocs search results

##### Patch Changes

- [`449dcef98e`](https://github.com/backstage/backstage/commit/449dcef98e): Updates the `isKind`, `ìsComponentType`, and `isNamespace` to allow an array of possible values
- [`1f70704580`](https://github.com/backstage/backstage/commit/1f70704580): Accessibility updates:

  - Added screen reader elements to describe default table `Action` buttons

- [`915700f64f`](https://github.com/backstage/backstage/commit/915700f64f): In order to simplify analytics on top of the search experience in Backstage, the provided `<*ResultListItem />` component now captures a `discover` analytics event instead of a `click` event. This event includes the result rank as its `value` and, like a click, the URL/path clicked to as its `to` attribute.

### `@backstage/plugin-catalog-backend` (1.1.2 → [1.2.0](../../changelogs/@backstage/plugin-catalog-backend.md#120))

#### 1.2.0

##### Minor Changes

- [`b594679ae3`](https://github.com/backstage/backstage/commit/b594679ae3): Allow array as non-spread arguments at the `CatalogBuilder`.

  ```typescript
  builder.addEntityProvider(...getArrayOfProviders());
  ```

  can be simplified to

  ```typescript
  builder.addEntityProvider(getArrayOfProviders());
  ```

##### Patch Changes

- [`8838b13038`](https://github.com/backstage/backstage/commit/8838b13038): Disallow anything but `'url'` locations from being registered via the location service.
- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-scaffolder` (1.2.0 → [1.3.0](../../changelogs/@backstage/plugin-scaffolder.md#130))

#### 1.3.0

##### Minor Changes

- [`dc39366bdb`](https://github.com/backstage/backstage/commit/dc39366bdb): - Added a new page under `/create/tasks` to show tasks that have been run by the Scaffolder.
  - Ability to filter these tasks by the signed in user, and all tasks.
  - Added optional method to the `ScaffolderApi` interface called `listTasks` to get tasks with an required `filterByOwnership` parameter.
- [`86a4a0f72d`](https://github.com/backstage/backstage/commit/86a4a0f72d): Get data of other fields in Form from a custom field in template Scaffolder.
  following:

  ```tsx
  const CustomFieldExtensionComponent = (props: FieldExtensionComponentProps<string[]>) => {
    const { formData } = props.formContext;
    ...
  };

  const CustomFieldExtension = scaffolderPlugin.provide(
    createScaffolderFieldExtension({
      name: ...,
      component: CustomFieldExtensionComponent,
      validation: ...
    })
  );
  ```

- [`72dfcbc8bf`](https://github.com/backstage/backstage/commit/72dfcbc8bf): Gerrit Integration: Implemented a `RepoUrlPicker` for Gerrit.
- [`f93af969cd`](https://github.com/backstage/backstage/commit/f93af969cd): Added the ability to support running of templates that are not in the `default` namespace
- [`3500c13a33`](https://github.com/backstage/backstage/commit/3500c13a33): A new template editor has been added which is accessible via the context menu on the top right hand corner of the Create page. It allows you to load a template from a local directory, edit it with a preview, execute it in dry-run mode, and view the results. Note that the [File System Access API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API) must be supported by your browser for this to be available.

  To support the new template editor the `ScaffolderApi` now has an optional `dryRun` method, which is implemented by the default `ScaffolderClient`.

##### Patch Changes

- [`ac0c7e45ee`](https://github.com/backstage/backstage/commit/ac0c7e45ee): Fixes review mask in `MultistepJsonForm` to work as documented. `show: true` no longer needed when mask is set.
- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.
- [`fd505f40c0`](https://github.com/backstage/backstage/commit/fd505f40c0): Handle binary files and files that are too large during dry-run content upload.

### `@backstage/plugin-scaffolder-backend` (1.2.0 → [1.3.0](../../changelogs/@backstage/plugin-scaffolder-backend.md#130))

#### 1.3.0

##### Minor Changes

- [`35a26131b3`](https://github.com/backstage/backstage/commit/35a26131b3): **DEPRECATION**: The `projectid` input parameters to the `publish:gitlab:merge-request`, it's no longer required as it can be decoded from the `repoUrl` input parameter.
  **DEPRECATION**: The `projectid` output of the action in favour of `projectPath`
- [`72dfcbc8bf`](https://github.com/backstage/backstage/commit/72dfcbc8bf): A new scaffolder action has been added: `gerrit:publish`
- [`ce0d8d7eb1`](https://github.com/backstage/backstage/commit/ce0d8d7eb1): Fixed a bug in `publish:github` action that didn't permit to add users as collaborators.
  This fix required changing the way parameters are passed to the action.
  In order to add a team as collaborator, now you must use the `team` field instead of `username`.
  In order to add a user as collaborator, you must use the `user` field.

  It's still possible to use the field `username` but is deprecated in favor of `team`.

  ```yaml
  - id: publish
    name: Publish
    action: publish:github
    input:
      repoUrl: ...
      collaborators:
        - access: ...
          team: my_team
        - access: ...
          user: my_username
  ```

- [`582003a059`](https://github.com/backstage/backstage/commit/582003a059): - Added an optional `list` method on the `TaskBroker` and `TaskStore` interface to list tasks by an optional `userEntityRef`
  - Implemented a `list` method on the `DatabaseTaskStore` class to list tasks by an optional `userEntityRef`
  - Added a route under `/v2/tasks` to list tasks by a `userEntityRef` using the `createdBy` query parameter
- [`c042c5eaff`](https://github.com/backstage/backstage/commit/c042c5eaff): Add an option to not protect the default branch.
- [`f93af969cd`](https://github.com/backstage/backstage/commit/f93af969cd): Added the ability to support running of templates that are not in the `default` namespace
- [`3500c13a33`](https://github.com/backstage/backstage/commit/3500c13a33): Added a new `/v2/dry-run` endpoint that allows for a synchronous dry run of a provided template. A `supportsDryRun` option has been added to `createTemplateAction`, which signals whether the action should be executed during dry runs. When enabled, the action context will have the new `isDryRun` property set to signal if the action is being executed during a dry run.

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.
- [`6901f6be4a`](https://github.com/backstage/backstage/commit/6901f6be4a): Adds more of an explanation when the `publish:github` scaffolder action fails to create a repository.

### `@backstage/plugin-techdocs` (1.1.1 → [1.2.0](../../changelogs/@backstage/plugin-techdocs.md#120))

#### 1.2.0

##### Minor Changes

- [`fe7614ea54`](https://github.com/backstage/backstage/commit/fe7614ea54): Add an optional icon to the Catalog and TechDocs search results

##### Patch Changes

- [`d047d81295`](https://github.com/backstage/backstage/commit/d047d81295): Use entity title as label in `TechDocsReaderPageHeader` if available
- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.
- [`bff65e6958`](https://github.com/backstage/backstage/commit/bff65e6958): Updated sidebar-related logic to use `<SidebarPinStateProvider>` + `useSidebarPinState()` and/or `<SidebarOpenStateProvider>` + `useSidebarOpenState()` from `@backstage/core-components`.
- [`915700f64f`](https://github.com/backstage/backstage/commit/915700f64f): In order to simplify analytics on top of the search experience in Backstage, the provided `<*ResultListItem />` component now captures a `discover` analytics event instead of a `click` event. This event includes the result rank as its `value` and, like a click, the URL/path clicked to as its `to` attribute.
- [`881fbd7e8d`](https://github.com/backstage/backstage/commit/881fbd7e8d): Fix `EntityTechdocsContent` component to use objects instead of `<Route>` elements, otherwise "outlet" will be null on sub-pages and add-ons won't render.
- [`17c059dfd0`](https://github.com/backstage/backstage/commit/17c059dfd0): Restructures reader style transformations to improve code readability:

  - Extracts the style rules to separate files;
  - Creates a hook that processes each rule;
  - And creates another hook that returns a transformer responsible for injecting them into the head tag of a given element.

- [`3b45ad701f`](https://github.com/backstage/backstage/commit/3b45ad701f): Packages a set of tweaks to the TechDocs addons rendering process:

  - Prevents displaying sidebars until page styles are loaded and the sidebar position is updated;
  - Prevents new sidebar locations from being created every time the reader page is rendered if these locations already exist;
  - Centers the styles loaded event to avoid having multiple locations setting the opacity style in Shadow Dom causing the screen to flash multiple times.

- [`9b94ade898`](https://github.com/backstage/backstage/commit/9b94ade898): Use entity title in `TechDocsSearch` placeholder if available.
- [`816f7475ec`](https://github.com/backstage/backstage/commit/816f7475ec): Convert `sanitizeDOM` transformer to hook as part of code readability improvements in dom file.
- [`50ff56a80f`](https://github.com/backstage/backstage/commit/50ff56a80f): Change the `EntityDocsPage` path to be more specific and also add integration tests for `sub-routes` on this page.

## Other patch version bumps

### `@backstage/backend-tasks` (0.3.1 → [0.3.2](../../changelogs/@backstage/backend-tasks.md#032))

#### 0.3.2

##### Patch Changes

- [`fde10d24f6`](https://github.com/backstage/backstage/commit/fde10d24f6): Allow tasks that fail to retry on a loop emitting a warning log every time it fails with the amount of attempts it has
- [`f7146b516f`](https://github.com/backstage/backstage/commit/f7146b516f): Updated dependency `cron` to `^2.0.0`.
  Updated dependency `@types/cron` to `^2.0.0`.
- [`7f108513b8`](https://github.com/backstage/backstage/commit/7f108513b8): Add error logging when a background task throws an error rather than silently swallowing it.

### `@backstage/backend-test-utils` (0.1.24 → [0.1.25](../../changelogs/@backstage/backend-test-utils.md#0125))

#### 0.1.25

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/catalog-client` (1.0.2 → [1.0.3](../../changelogs/@backstage/catalog-client.md#103))

#### 1.0.3

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.
- [`35bc0a7c27`](https://github.com/backstage/backstage/commit/35bc0a7c27): Update README to point to catalog-react for frontend usage

### `@backstage/catalog-model` (1.0.2 → [1.0.3](../../changelogs/@backstage/catalog-model.md#103))

#### 1.0.3

##### Patch Changes

- [`131a99e909`](https://github.com/backstage/backstage/commit/131a99e909): Added targetRef to common.schema.json to match the Typescript type

### `@backstage/cli` (0.17.1 → [0.17.2](../../changelogs/@backstage/cli.md#0172))

#### 0.17.2

##### Patch Changes

- [`026cfe525a`](https://github.com/backstage/backstage/commit/026cfe525a): Fix the public path configuration of the frontend app build so that a trailing `/` is always appended when needed.
- [`4f73352608`](https://github.com/backstage/backstage/commit/4f73352608): Updated Lockfile to support new versions of yarn as well as the legacy 1 version
- [`b8970b8941`](https://github.com/backstage/backstage/commit/b8970b8941): Improved the `create-github-app` permissions selection prompt by converting it into a multi-select with clearer descriptions. The `members` permission is now also included in the list which is required for ingesting user data into the catalog.
- [`bd58365d09`](https://github.com/backstage/backstage/commit/bd58365d09): Updated dependency `run-script-webpack-plugin` to `^0.0.14`.
- [`9002ebd76b`](https://github.com/backstage/backstage/commit/9002ebd76b): Updated dependency `@rollup/plugin-commonjs` to `^22.0.0`.
- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.
- [`1a33e8b287`](https://github.com/backstage/backstage/commit/1a33e8b287): Updated dependency `minimatch` to `5.1.0`.
- [`6de866ea74`](https://github.com/backstage/backstage/commit/6de866ea74): Added console warning to frontend start when the `app.baseUrl` and `backend.baseUrl` are identical

### `@backstage/config-loader` (1.1.1 → [1.1.2](../../changelogs/@backstage/config-loader.md#112))

#### 1.1.2

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/core-app-api` (1.0.2 → [1.0.3](../../changelogs/@backstage/core-app-api.md#103))

#### 1.0.3

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.
- [`19781483a2`](https://github.com/backstage/backstage/commit/19781483a2): Handle URLs as the first argument to `fetchApi`, when using the `plugin:` protocol

### `@backstage/core-components` (0.9.4 → [0.9.5](../../changelogs/@backstage/core-components.md#095))

#### 0.9.5

##### Patch Changes

- [`feb4e8de07`](https://github.com/backstage/backstage/commit/feb4e8de07): Fix EntityPage tab scrolling overflow bug on Firefox
- [`65840b17be`](https://github.com/backstage/backstage/commit/65840b17be): Fix issue where right arrow icon was incorrectly added to side bar items without a sub-menu
- [`de593ec78f`](https://github.com/backstage/backstage/commit/de593ec78f): Updated dependency `react-text-truncate` to `^0.19.0`.
- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.
- [`6968b65ba1`](https://github.com/backstage/backstage/commit/6968b65ba1): Updated dependency `@react-hookz/web` to `^14.0.0`.
- [`ee2cd642c5`](https://github.com/backstage/backstage/commit/ee2cd642c5): Updated dependency `rc-progress` to `3.3.3`.
- [`96d1e01641`](https://github.com/backstage/backstage/commit/96d1e01641): Accessibility updates:

  - Added `aria-label` to the `Select` component
  - Changed heading level used in the header of `Table` component

- [`7d355c4b3f`](https://github.com/backstage/backstage/commit/7d355c4b3f): Fix the missing filter in the toolbar when passing a custom component in the core-components Table
- [`1cf9caecd6`](https://github.com/backstage/backstage/commit/1cf9caecd6): fix Sidebar Contexts deprecation message
- [`bff65e6958`](https://github.com/backstage/backstage/commit/bff65e6958): The `SidebarPinStateContext` and `SidebarContext` have been deprecated and will be removed in a future release. Instead, use `<SidebarPinStateProvider>` + `useSidebarPinState()` and/or `<SidebarOpenStateProvider>` + `useSidebarOpenState()`.

  This was done to ensure that sidebar state can be shared successfully across components exported by different packages, regardless of what version of this package is resolved and installed for each individual package.

### `@backstage/core-plugin-api` (1.0.2 → [1.0.3](../../changelogs/@backstage/core-plugin-api.md#103))

#### 1.0.3

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/create-app` (0.4.27 → [0.4.28](../../changelogs/@backstage/create-app.md#0428))

#### 0.4.28

##### Patch Changes

- [`881fbd7e8d`](https://github.com/backstage/backstage/commit/881fbd7e8d): Register `TechDocs` addons on catalog entity pages, follow the steps below to add them manually:

  ```diff
  // packages/app/src/components/catalog/EntityPage.tsx

  + import { TechDocsAddons } from '@backstage/plugin-techdocs-react';
  + import {
  +   ReportIssue,
  + } from '@backstage/plugin-techdocs-module-addons-contrib';

  + const techdocsContent = (
  +   <EntityTechdocsContent>
  +     <TechDocsAddons>
  +       <ReportIssue />
  +     </TechDocsAddons>
  +   </EntityTechdocsContent>
  + );

  const defaultEntityPage = (
    ...
    <EntityLayout.Route path="/docs" title="Docs">
  +    {techdocsContent}
    </EntityLayout.Route>
    ...
  );

  const serviceEntityPage = (
    ...
    <EntityLayout.Route path="/docs" title="Docs">
  +    {techdocsContent}
    </EntityLayout.Route>
    ...
  );

  const websiteEntityPage = (
    ...
    <EntityLayout.Route path="/docs" title="Docs">
  +    {techdocsContent}
    </EntityLayout.Route>
    ...
  );
  ```

- [`0e870fe0ac`](https://github.com/backstage/backstage/commit/0e870fe0ac): Removed peer dependencies, as they are no longer needed.
- [`bff65e6958`](https://github.com/backstage/backstage/commit/bff65e6958): Use of `SidebarContext` has been deprecated and will be removed in a future release. Instead, `useSidebarOpenState()` should be used to consume the context and `<SidebarOpenStateProvider>` should be used to provide it.

  To prepare your app, update `packages/app/src/components/Root/Root.tsx` as follows:

  ```diff
  import {
    Sidebar,
    sidebarConfig,
  - SidebarContext
    SidebarDivider,
    // ...
    SidebarSpace,
  + useSidebarOpenState,
  } from '@backstage/core-components';

  // ...

  const SidebarLogo = () => {
    const classes = useSidebarLogoStyles();
  - const { isOpen } = useContext(SidebarContext);
  + const { isOpen } = useSidebarOpenState();

    // ...
  };
  ```

- [`935d8515da`](https://github.com/backstage/backstage/commit/935d8515da): Updated the `--version` flag to output the version of the current backstage release instead of the version of create-app.
- [`18d4c3e50a`](https://github.com/backstage/backstage/commit/18d4c3e50a): Updated `app-config.production.yaml` to specify an empty list of catalog locations. This is done to prevent example locations stored in `app-config.yaml` from being loaded as these are examples.
- [`1f70704580`](https://github.com/backstage/backstage/commit/1f70704580): Accessibility updates:

  - Added `aria-label` to the sidebar Logo link. To enable this for an existing app, please make the following changes:

  `packages/app/src/components/Root/Root.tsx`

  ```diff
  const SidebarLogo = () => {
    const classes = useSidebarLogoStyles();
    const { isOpen } = useContext(SidebarContext);

    return (
      <div className={classes.root}>
        <Link
          component={NavLink}
          to="/"
          underline="none"
          className={classes.link}
  +       aria-label="Home"
        >
          {isOpen ? <LogoFull /> : <LogoIcon />}
        </Link>
      </div>
    );
  };
  ```

- [`30f04d1497`](https://github.com/backstage/backstage/commit/30f04d1497): Components `<DefaultResultListItem>`, `<SearchBar>`, `<SearchFilter>`, and `<SearchResult>` are now deprecated in `@backstage/plugin-search` and should be imported from `@backstage/plugin-search-react` instead.

  To upgrade your App, update the following in `packages/app/src/components/search/SearchPage.tsx`:

  ```diff
  import {
    DefaultResultListItem
    SearchBar
    SearchFilter
    SearchResult
  - } from `@backstage/plugin-search`;
  + } from `@backstage/plugin-search-react`;
  ```

- [`f7f5a6c6a3`](https://github.com/backstage/backstage/commit/f7f5a6c6a3): It's now possible to pass result item components a `rank`, which is captured by the analytics API when a user clicks on a search result. To apply this change, update your `/packages/app/src/components/search/SearchPage.tsx` in the following way:

  ```diff
  // ...
  <SearchResult>
    {({ results }) => (
      <List>
  -     {results.map(({ type, document, highlight }) => {
  +     {results.map(({ type, document, highlight, rank }) => {
          switch (type) {
            case 'software-catalog':
              return (
                <CatalogSearchResultListItem
                  key={document.location}
                  result={document}
                  highlight={highlight}
  +               rank={rank}
                />
              );
            case 'techdocs':
              return (
                <TechDocsSearchResultListItem
                  key={document.location}
                  result={document}
                  highlight={highlight}
  +               rank={rank}
                />
              );
            default:
              return (
                <DefaultResultListItem
                  key={document.location}
                  result={document}
                  highlight={highlight}
  +               rank={rank}
                />
              );
          }
        })}
      </List>
    )}
  </SearchResult>
  // ...
  ```

  If you have implemented a custom Search Modal or other custom search experience, you will want to make similar changes in those components.

- [`aaf7652084`](https://github.com/backstage/backstage/commit/aaf7652084): Bump version of `cypress` in newly scaffolded Backstage Applications. To apply this change to your own instance, please make the following change to `packages/app/package.json` under `devDependencies`.

  ```diff
  -   "cypress": "^7.3.0",
  +   "cypress": "^9.7.0",
  ```

- [`141a1caebe`](https://github.com/backstage/backstage/commit/141a1caebe): Updated the auth backend setup in the template to include a guest sign-in resolver in order to make it quicker to get up and running with a basic sign-in setup. There is no need to update existing apps to match this change, but in case you want to use the guest sign-in resolver you can find it at https://backstage.io/docs/auth/identity-resolver#guest-sign-in-resolver

### `@backstage/integration` (1.2.0 → [1.2.1](../../changelogs/@backstage/integration.md#121))

#### 1.2.1

##### Patch Changes

- [`72dfcbc8bf`](https://github.com/backstage/backstage/commit/72dfcbc8bf): Gerrit Integration: Handle absolute paths in `resolveUrl` properly.
- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.
- [`e37c71b5a4`](https://github.com/backstage/backstage/commit/e37c71b5a4): Updated to support deployments of Azure DevOps Server under TFS or similar sub path

### `@backstage/integration-react` (1.1.0 → [1.1.1](../../changelogs/@backstage/integration-react.md#111))

#### 1.1.1

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-adr` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-adr.md#011))

#### 0.1.1

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.
- [`a6458a120b`](https://github.com/backstage/backstage/commit/a6458a120b): Adding term highlighting support to `AdrSearchResultListItem`

### `@backstage/plugin-adr-backend` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-adr-backend.md#011))

#### 0.1.1

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-airbrake` (0.3.5 → [0.3.6](../../changelogs/@backstage/plugin-airbrake.md#036))

#### 0.3.6

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-airbrake-backend` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-airbrake-backend.md#026))

#### 0.2.6

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-allure` (0.1.21 → [0.1.22](../../changelogs/@backstage/plugin-allure.md#0122))

#### 0.1.22

##### Patch Changes

- [`6387b7a98a`](https://github.com/backstage/backstage/commit/6387b7a98a): Add export for `isAllureReportAvailable` and `ALLURE_PROJECT_ID_ANNOTATION` so it can be used outside of plugin
- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-analytics-module-ga` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-analytics-module-ga.md#0117))

#### 0.1.17

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-apache-airflow` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-apache-airflow.md#0114))

#### 0.1.14

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-api-docs` (0.8.5 → [0.8.6](../../changelogs/@backstage/plugin-api-docs.md#086))

#### 0.8.6

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.
- [`811ff4bcf4`](https://github.com/backstage/backstage/commit/811ff4bcf4): Updated `swagger-ui-react` to 4.11.1 in order to address a [XSS vulnerability](https://github.com/advisories/GHSA-hqq7-2q2v-82xq) in `@braintree/sanitize-url`

### `@backstage/plugin-app-backend` (0.3.32 → [0.3.33](../../changelogs/@backstage/plugin-app-backend.md#0333))

#### 0.3.33

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-auth-backend` (0.14.0 → [0.14.1](../../changelogs/@backstage/plugin-auth-backend.md#0141))

#### 0.14.1

##### Patch Changes

- [`5e055079f0`](https://github.com/backstage/backstage/commit/5e055079f0): Increased key field size for signing_keys table to account for larger signature keys
- [`f6aae90e4e`](https://github.com/backstage/backstage/commit/f6aae90e4e): Added configurable algorithm field for TokenFactory
- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.
- [`bc6fb57094`](https://github.com/backstage/backstage/commit/bc6fb57094): Updated dependency `passport` to `^0.6.0`.
- [`467facc6ea`](https://github.com/backstage/backstage/commit/467facc6ea): Fix improper binding of 'this' in ALB Auth provider

### `@backstage/plugin-auth-node` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-auth-node.md#022))

#### 0.2.2

##### Patch Changes

- [`5ca0b86b88`](https://github.com/backstage/backstage/commit/5ca0b86b88): Address corner cases where the key store was not being created at startup
- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.
- [`9079a78078`](https://github.com/backstage/backstage/commit/9079a78078): Added configurable algorithms array for IdentityClient

### `@backstage/plugin-azure-devops` (0.1.21 → [0.1.22](../../changelogs/@backstage/plugin-azure-devops.md#0122))

#### 0.1.22

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-azure-devops-backend` (0.3.11 → [0.3.12](../../changelogs/@backstage/plugin-azure-devops-backend.md#0312))

#### 0.3.12

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-badges` (0.2.29 → [0.2.30](../../changelogs/@backstage/plugin-badges.md#0230))

#### 0.2.30

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-bitrise` (0.1.32 → [0.1.33](../../changelogs/@backstage/plugin-bitrise.md#0133))

#### 0.1.33

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-catalog-backend-module-aws` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#016))

#### 0.1.6

##### Patch Changes

- [`eb2544b21b`](https://github.com/backstage/backstage/commit/eb2544b21b): Inline config interfaces

### `@backstage/plugin-catalog-backend-module-azure` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#014))

#### 0.1.4

##### Patch Changes

- [`b8884fd579`](https://github.com/backstage/backstage/commit/b8884fd579): Add a new provider `AzureDevOpsEntityProvider` as replacement for `AzureDevOpsDiscoveryProcessor`.

  In order to migrate from the `AzureDevOpsDiscoveryProcessor` you need to apply
  the following changes:

  **Before:**

  ```yaml
  # app-config.yaml

  catalog:
    locations:
      - type: azure-discovery
        target: https://dev.azure.com/myorg/myproject/_git/service-*?path=/catalog-info.yaml
  ```

  ```ts
  /* packages/backend/src/plugins/catalog.ts */

  import { AzureDevOpsDiscoveryProcessor } from '@backstage/plugin-catalog-backend-module-azure';

  const builder = await CatalogBuilder.create(env);
  /** ... other processors ... */
  builder.addProcessor(new AzureDevOpsDiscoveryProcessor(env.reader));
  ```

  **After:**

  ```yaml
  # app-config.yaml

  catalog:
    providers:
      azureDevOps:
        anyProviderId:
          host: selfhostedazure.yourcompany.com # This is only really needed for on-premise user, defaults to dev.azure.com
          organization: myorg # For on-premise this would be your Collection
          project: myproject
          repository: service-*
          path: /catalog-info.yaml
  ```

  ```ts
  /* packages/backend/src/plugins/catalog.ts */

  import { AzureDevOpsEntityProvider } from '@backstage/plugin-catalog-backend-module-azure';

  const builder = await CatalogBuilder.create(env);
  /** ... other processors and/or providers ... */
  builder.addEntityProvider(
    AzureDevOpsEntityProvider.fromConfig(env.config, {
      logger: env.logger,
      schedule: env.scheduler.createScheduledTaskRunner({
        frequency: { minutes: 30 },
        timeout: { minutes: 3 },
      }),
    }),
  );
  ```

  Visit [https://backstage.io/docs/integrations/azure/discovery](https://backstage.io/docs/integrations/azure/discovery) for more details and options on configuration.

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-catalog-backend-module-gerrit` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#011))

#### 0.1.1

##### Patch Changes

- [`eb2544b21b`](https://github.com/backstage/backstage/commit/eb2544b21b): Inline config interfaces
- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-catalog-backend-module-github` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#014))

#### 0.1.4

##### Patch Changes

- [`8335a6f6f3`](https://github.com/backstage/backstage/commit/8335a6f6f3): Adds an edit URL to the GitHub Teams Group entities.
- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-catalog-backend-module-gitlab` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#014))

#### 0.1.4

##### Patch Changes

- [`eea8126171`](https://github.com/backstage/backstage/commit/eea8126171): Add a new provider `GitlabDiscoveryEntityProvider` as replacement for `GitlabDiscoveryProcessor`

  In order to migrate from the `GitlabDiscoveryProcessor` you need to apply
  the following changes:

  **Before:**

  ```yaml
  # app-config.yaml

  catalog:
    locations:
      - type: gitlab-discovery
        target: https://company.gitlab.com/prefix/*/catalog-info.yaml
  ```

  ```ts
  /* packages/backend/src/plugins/catalog.ts */

  import { GitlabDiscoveryProcessor } from '@backstage/plugin-catalog-backend-module-gitlab';

  const builder = await CatalogBuilder.create(env);
  /** ... other processors ... */
  builder.addProcessor(
    GitLabDiscoveryProcessor.fromConfig(env.config, { logger: env.logger }),
  );
  ```

  **After:**

  ```yaml
  # app-config.yaml

  catalog:
    providers:
      gitlab:
        yourProviderId: # identifies your dataset / provider independent of config changes
          host: gitlab-host # Identifies one of the hosts set up in the integrations
          branch: main # Optional. Uses `master` as default
          group: example-group # Group and subgroup (if needed) to look for repositories
          entityFilename: catalog-info.yaml # Optional. Defaults to `catalog-info.yaml`
  ```

  ```ts
  /* packages/backend/src/plugins/catalog.ts */

  import { GitlabDiscoveryEntityProvider } from '@backstage/plugin-catalog-backend-module-gitlab';

  const builder = await CatalogBuilder.create(env);
  /** ... other processors and/or providers ... */
  builder.addEntityProvider(
    ...GitlabDiscoveryEntityProvider.fromConfig(env.config, {
      logger: env.logger,
      schedule: env.scheduler.createScheduledTaskRunner({
        frequency: { minutes: 30 },
        timeout: { minutes: 3 },
      }),
    }),
  );
  ```

- [`bad907d794`](https://github.com/backstage/backstage/commit/bad907d794): The `last_activity_after` timestamp is now being omitted when querying the GitLab API for the first time.
- [`3ac4522537`](https://github.com/backstage/backstage/commit/3ac4522537): do not create location object if file with component definition do not exists in project, that decrease count of request to gitlab with 404 status code. Now we can create processor with new flag to enable this logic:

  ```ts
  const processor = GitLabDiscoveryProcessor.fromConfig(config, {
    logger,
    skipReposWithoutExactFileMatch: true,
  });
  ```

  **WARNING:** This new functionality does not support globs in the repo file path

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-catalog-backend-module-msgraph` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#033))

#### 0.3.3

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-catalog-common` (1.0.2 → [1.0.3](../../changelogs/@backstage/plugin-catalog-common.md#103))

#### 1.0.3

##### Patch Changes

- [`7d8acfc32e`](https://github.com/backstage/backstage/commit/7d8acfc32e): Replaced all usages of `@backstage/search-common` with `@backstage/plugin-search-common`

### `@backstage/plugin-catalog-graphql` (0.3.9 → [0.3.10](../../changelogs/@backstage/plugin-catalog-graphql.md#0310))

#### 0.3.10

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-catalog-import` (0.8.8 → [0.8.9](../../changelogs/@backstage/plugin-catalog-import.md#089))

#### 0.8.9

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.
- [`05be420971`](https://github.com/backstage/backstage/commit/05be420971): Updated catalog import page text so they go in the correct hierarchy order

### `@backstage/plugin-catalog-react` (1.1.0 → [1.1.1](../../changelogs/@backstage/plugin-catalog-react.md#111))

#### 1.1.1

##### Patch Changes

- [`1f70704580`](https://github.com/backstage/backstage/commit/1f70704580): Accessibility updates:

  - Wrapped the `EntityLifecyclePicker`, `EntityOwnerPicker`, `EntityTagPicker`, in `label` elements
  - Changed group name `Typography` component to `span` (from default `h6`), added `aria-label` to the `List` component, and `role` of `menuitem` to the container of the `MenuItem` component

- [`568f2d1e75`](https://github.com/backstage/backstage/commit/568f2d1e75): Table component no longer has drag and drop columns by default

### `@backstage/plugin-circleci` (0.3.5 → [0.3.6](../../changelogs/@backstage/plugin-circleci.md#036))

#### 0.3.6

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-cloudbuild` (0.3.5 → [0.3.6](../../changelogs/@backstage/plugin-cloudbuild.md#036))

#### 0.3.6

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-code-climate` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-code-climate.md#016))

#### 0.1.6

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-code-coverage` (0.1.32 → [0.1.33](../../changelogs/@backstage/plugin-code-coverage.md#0133))

#### 0.1.33

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-code-coverage-backend` (0.1.30 → [0.1.31](../../changelogs/@backstage/plugin-code-coverage-backend.md#0131))

#### 0.1.31

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-codescene` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-codescene.md#011))

#### 0.1.1

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.
- [`ee2cd642c5`](https://github.com/backstage/backstage/commit/ee2cd642c5): Updated dependency `rc-progress` to `3.3.3`.

### `@backstage/plugin-config-schema` (0.1.28 → [0.1.29](../../changelogs/@backstage/plugin-config-schema.md#0129))

#### 0.1.29

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-cost-insights` (0.11.27 → [0.11.28](../../changelogs/@backstage/plugin-cost-insights.md#01128))

#### 0.11.28

##### Patch Changes

- [`dea1f32f44`](https://github.com/backstage/backstage/commit/dea1f32f44): In the README, a old path of the `sidebar` was updated to the current path.
- [`eb2544b21b`](https://github.com/backstage/backstage/commit/eb2544b21b): Add missing `export` in configuration schema.
- [`2fc98ac50c`](https://github.com/backstage/backstage/commit/2fc98ac50c): Fix broken app-config in the example in the README
- [`2297510941`](https://github.com/backstage/backstage/commit/2297510941): Fixed css to show large tooltips on cost overview graph
- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-explore` (0.3.36 → [0.3.37](../../changelogs/@backstage/plugin-explore.md#0337))

#### 0.3.37

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-firehydrant` (0.1.22 → [0.1.23](../../changelogs/@backstage/plugin-firehydrant.md#0123))

#### 0.1.23

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-fossa` (0.2.37 → [0.2.38](../../changelogs/@backstage/plugin-fossa.md#0238))

#### 0.2.38

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-gcalendar` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-gcalendar.md#032))

#### 0.3.2

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-gcp-projects` (0.3.24 → [0.3.25](../../changelogs/@backstage/plugin-gcp-projects.md#0325))

#### 0.3.25

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.
- [`6968b65ba1`](https://github.com/backstage/backstage/commit/6968b65ba1): Updated dependency `@react-hookz/web` to `^14.0.0`.

### `@backstage/plugin-git-release-manager` (0.3.18 → [0.3.19](../../changelogs/@backstage/plugin-git-release-manager.md#0319))

#### 0.3.19

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-github-actions` (0.5.5 → [0.5.6](../../changelogs/@backstage/plugin-github-actions.md#056))

#### 0.5.6

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-github-deployments` (0.1.36 → [0.1.37](../../changelogs/@backstage/plugin-github-deployments.md#0137))

#### 0.1.37

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-gitops-profiles` (0.3.23 → [0.3.24](../../changelogs/@backstage/plugin-gitops-profiles.md#0324))

#### 0.3.24

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-gocd` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-gocd.md#0112))

#### 0.1.12

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-graphiql` (0.2.37 → [0.2.38](../../changelogs/@backstage/plugin-graphiql.md#0238))

#### 0.2.38

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.
- [`464c33f932`](https://github.com/backstage/backstage/commit/464c33f932): Fix for custom headers not being included in requests.

### `@backstage/plugin-graphql-backend` (0.1.22 → [0.1.23](../../changelogs/@backstage/plugin-graphql-backend.md#0123))

#### 0.1.23

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-home` (0.4.21 → [0.4.22](../../changelogs/@backstage/plugin-home.md#0422))

#### 0.4.22

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-ilert` (0.1.31 → [0.1.32](../../changelogs/@backstage/plugin-ilert.md#0132))

#### 0.1.32

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-jenkins` (0.7.4 → [0.7.5](../../changelogs/@backstage/plugin-jenkins.md#075))

#### 0.7.5

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-jenkins-backend` (0.1.22 → [0.1.23](../../changelogs/@backstage/plugin-jenkins-backend.md#0123))

#### 0.1.23

##### Patch Changes

- [`83f6a64d2c`](https://github.com/backstage/backstage/commit/83f6a64d2c): bug fix: provide backstage token for rebuild api call
- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-kafka` (0.3.5 → [0.3.6](../../changelogs/@backstage/plugin-kafka.md#036))

#### 0.3.6

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-kubernetes` (0.6.5 → [0.6.6](../../changelogs/@backstage/plugin-kubernetes.md#066))

#### 0.6.6

##### Patch Changes

- [`4328737af6`](https://github.com/backstage/backstage/commit/4328737af6): Add support to fetch data for Stateful Sets and display an accordion in the same way as with Deployments
- [`b9b8bbc7d9`](https://github.com/backstage/backstage/commit/b9b8bbc7d9): show request/limit CPU and Memory on the UI
- [`5553f09e80`](https://github.com/backstage/backstage/commit/5553f09e80): ability to configure refresh interval on Kubernetes tab
- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.
- [`81304e3e91`](https://github.com/backstage/backstage/commit/81304e3e91): Fix for HPA matching when deploying same HPA in multiple namespaces

### `@backstage/plugin-lighthouse` (0.3.5 → [0.3.6](../../changelogs/@backstage/plugin-lighthouse.md#036))

#### 0.3.6

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-newrelic` (0.3.23 → [0.3.24](../../changelogs/@backstage/plugin-newrelic.md#0324))

#### 0.3.24

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-org` (0.5.5 → [0.5.6](../../changelogs/@backstage/plugin-org.md#056))

#### 0.5.6

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.
- [`306d0b4fdd`](https://github.com/backstage/backstage/commit/306d0b4fdd): Added the ability to use an additional `filter` when fetching groups in `MyGroupsSidebarItem` component. Example:

  ```diff
  // app/src/components/Root/Root.tsx
  <SidebarPage>
      <Sidebar>
        //...
        <SidebarGroup label="Menu" icon={<MenuIcon />}>
          {/* Global nav, not org-specific */}
          //...
          <SidebarItem icon={HomeIcon} to="catalog" text="Home" />
          <MyGroupsSidebarItem
            singularTitle="My Squad"
            pluralTitle="My Squads"
            icon={GroupIcon}
  +         filter={{ 'spec.type': 'team' }}
          />
         //...
        </SidebarGroup>
      </ Sidebar>
  </SidebarPage>
  ```

### `@backstage/plugin-periskop` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-periskop.md#014))

#### 0.1.4

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-periskop-backend` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-periskop-backend.md#014))

#### 0.1.4

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-permission-backend` (0.5.7 → [0.5.8](../../changelogs/@backstage/plugin-permission-backend.md#058))

#### 0.5.8

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-permission-common` (0.6.1 → [0.6.2](../../changelogs/@backstage/plugin-permission-common.md#062))

#### 0.6.2

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-rollbar` (0.4.5 → [0.4.6](../../changelogs/@backstage/plugin-rollbar.md#046))

#### 0.4.6

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-rollbar-backend` (0.1.29 → [0.1.30](../../changelogs/@backstage/plugin-rollbar-backend.md#0130))

#### 0.1.30

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#028))

#### 0.2.8

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-search-backend` (0.5.2 → [0.5.3](../../changelogs/@backstage/plugin-search-backend.md#053))

#### 0.5.3

##### Patch Changes

- [`7d8acfc32e`](https://github.com/backstage/backstage/commit/7d8acfc32e): `RouterOptions` and `createRouter` now marked as public exports
- [`915700f64f`](https://github.com/backstage/backstage/commit/915700f64f): The provided search engine now adds a pagination-aware `rank` value to all results.

### `@backstage/plugin-search-backend-module-elasticsearch` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#015))

#### 0.1.5

##### Patch Changes

- [`281cec1b61`](https://github.com/backstage/backstage/commit/281cec1b61): Use more precise matching for query filters
- [`915700f64f`](https://github.com/backstage/backstage/commit/915700f64f): The provided search engine now adds a pagination-aware `rank` value to all results.
- [`ddce23d080`](https://github.com/backstage/backstage/commit/ddce23d080): Now possible to set a custom index template on the elasticsearch search engine.
- [`7d8acfc32e`](https://github.com/backstage/backstage/commit/7d8acfc32e): Additional types now exported publicly:

  - ElasticSearchAgentOptions
  - ElasticSearchConcreteQuery
  - ElasticSearchQueryTranslator
  - ElasticSearchConnectionConstructor,
  - ElasticSearchTransportConstructor,
  - ElasticSearchNodeOptions,
  - ElasticSearchOptions,
  - ElasticSearchAuth,

### `@backstage/plugin-search-backend-module-pg` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-search-backend-module-pg.md#034))

#### 0.3.4

##### Patch Changes

- [`915700f64f`](https://github.com/backstage/backstage/commit/915700f64f): The provided search engine now adds a pagination-aware `rank` value to all results.

### `@backstage/plugin-search-backend-node` (0.6.1 → [0.6.2](../../changelogs/@backstage/plugin-search-backend-node.md#062))

#### 0.6.2

##### Patch Changes

- [`e7794a0aaa`](https://github.com/backstage/backstage/commit/e7794a0aaa): propagate indexing errors so they don't appear successful to the task scheduler
- [`3bb25a9acc`](https://github.com/backstage/backstage/commit/3bb25a9acc): Introducing a `NewlineDelimitedJsonCollatorFactory`, which can be used to create search indices from newline delimited JSON files stored in external storage readable via a configured `UrlReader` instance.

  This is useful if you have an independent process periodically generating `*.ndjson` files consisting of `IndexableDocument` objects and want to be able to generate a fresh index based on the latest version of such a file.

- [`3bb25a9acc`](https://github.com/backstage/backstage/commit/3bb25a9acc): Fixed a bug that prevented `TestPipeline.withSubject` from identifying valid `Readable` subjects that were technically transform streams.
- [`915700f64f`](https://github.com/backstage/backstage/commit/915700f64f): The provided search engine now adds a pagination-aware `rank` value to all results.
- [`7d8acfc32e`](https://github.com/backstage/backstage/commit/7d8acfc32e): Replaced all `@beta` exports with `@public` exports

### `@backstage/plugin-search-common` (0.3.4 → [0.3.5](../../changelogs/@backstage/plugin-search-common.md#035))

#### 0.3.5

##### Patch Changes

- [`7d8acfc32e`](https://github.com/backstage/backstage/commit/7d8acfc32e): `@beta` exports now replaced with `@public` exports
- [`484afdf1dc`](https://github.com/backstage/backstage/commit/484afdf1dc): Added an optional `rank` attribute to the `Result` type. This represents the result rank (starting at 1) for a given result in a result set for a given search.

### `@backstage/plugin-search-react` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-search-react.md#021))

#### 0.2.1

##### Patch Changes

- [`8809159148`](https://github.com/backstage/backstage/commit/8809159148): Components `<DefaultResultListItem>`, `<SearchBar>` (including `<SearchBarBase>`), `<SearchFilter>` (including `.Checkbox`, `.Select`, and `.Autocomplete` static prop components), `<SearchResult>`, and `<SearchResultPager>` are now exported from `@backstage/plugin-search-react`. They are now deprecated in `@backstage/plugin-search` and will be removed in a future release.

### `@backstage/plugin-sentry` (0.3.43 → [0.3.44](../../changelogs/@backstage/plugin-sentry.md#0344))

#### 0.3.44

##### Patch Changes

- [`c55f6cb22d`](https://github.com/backstage/backstage/commit/c55f6cb22d): Exported `isSentryAvailable` which can be used to determine if sentry is available.
- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-shortcuts` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-shortcuts.md#027))

#### 0.2.7

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-sonarqube` (0.3.5 → [0.3.6](../../changelogs/@backstage/plugin-sonarqube.md#036))

#### 0.3.6

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.
- [`ee2cd642c5`](https://github.com/backstage/backstage/commit/ee2cd642c5): Updated dependency `rc-progress` to `3.3.3`.

### `@backstage/plugin-splunk-on-call` (0.3.29 → [0.3.30](../../changelogs/@backstage/plugin-splunk-on-call.md#0330))

#### 0.3.30

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-stack-overflow` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-stack-overflow.md#012))

#### 0.1.2

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-tech-insights` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-tech-insights.md#022))

#### 0.2.2

##### Patch Changes

- [`09d2f4d179`](https://github.com/backstage/backstage/commit/09d2f4d179): Export TechInsightsClient so it may be extended by custom implementations
- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-tech-insights-backend` (0.4.0 → [0.4.1](../../changelogs/@backstage/plugin-tech-insights-backend.md#041))

#### 0.4.1

##### Patch Changes

- [`4fee8f59e3`](https://github.com/backstage/backstage/commit/4fee8f59e3): Updated tech-insights fetch/latest endpoint to return the actual latest row based on the timestamp
- [`aa15229ec3`](https://github.com/backstage/backstage/commit/aa15229ec3): Introduce additional JsonValue types to be storable as facts. This enables the possibility to store more complex objects for fact checking purposes. The rules engine supports walking keyed object values directly to create rules and checks

  Modify facts database table to have a more restricted timestamp precision for cases where the postgres server isn't configured to contain such value. This fixes the issue where in some cases `maxItems` lifecycle condition didn't work as expected.

### `@backstage/plugin-tech-insights-node` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-tech-insights-node.md#031))

#### 0.3.1

##### Patch Changes

- [`aa15229ec3`](https://github.com/backstage/backstage/commit/aa15229ec3): Introduce additional JsonValue types to be storable as facts. This enables the possibility to store more complex objects for fact checking purposes. The rules engine supports walking keyed object values directly to create rules and checks

  Modify facts database table to have a more restricted timestamp precision for cases where the postgres server isn't configured to contain such value. This fixes the issue where in some cases `maxItems` lifecycle condition didn't work as expected.

### `@backstage/plugin-tech-radar` (0.5.12 → [0.5.13](../../changelogs/@backstage/plugin-tech-radar.md#0513))

#### 0.5.13

##### Patch Changes

- [`bb31e5489c`](https://github.com/backstage/backstage/commit/bb31e5489c): Updated dependency `d3-force` to `^3.0.0`.
  Updated dependency `@types/d3-force` to `^3.0.0`.
- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-techdocs-addons-test-utils` (1.0.0 → [1.0.1](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#101))

#### 1.0.1

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.
- [`d047d81295`](https://github.com/backstage/backstage/commit/d047d81295): Update default mock

### `@backstage/plugin-techdocs-backend` (1.1.1 → [1.1.2](../../changelogs/@backstage/plugin-techdocs-backend.md#112))

#### 1.1.2

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.
- [`61fba6e50b`](https://github.com/backstage/backstage/commit/61fba6e50b): In order to ensure a good, stable TechDocs user experience when running TechDocs with `techdocs.builder` set to `local`, the number of concurrent builds has been limited to 10. Any additional builds requested concurrently will be queued and handled as prior builds complete. In the unlikely event that you need to handle more concurrent builds, consider scaling out your TechDocs backend deployment or using the `external` option for `techdocs.builder`.
- [`5d66d4ff67`](https://github.com/backstage/backstage/commit/5d66d4ff67): Output logs from a TechDocs build to a logging transport in addition to existing
  frontend event stream, for capturing these logs to other sources.

  This allows users to capture debugging information around why tech docs fail to build
  without needing to rely on end users capturing information from their web browser.

  The most common use case is to log to the same place as the rest of the backend
  application logs.

  Sample usage:

  ```
  import { DockerContainerRunner } from '@backstage/backend-common';
  import {
    createRouter,
    Generators,
    Preparers,
    Publisher,
  } from '@backstage/plugin-techdocs-backend';
  import Docker from 'dockerode';
  import { Router } from 'express';
  import { PluginEnvironment } from '../types';

  export default async function createPlugin(
    env: PluginEnvironment,
  ): Promise<Router> {
    const preparers = await Preparers.fromConfig(env.config, {
      logger: env.logger,
      reader: env.reader,
    });

    const dockerClient = new Docker();
    const containerRunner = new DockerContainerRunner({ dockerClient });

    const generators = await Generators.fromConfig(env.config, {
      logger: env.logger,
      containerRunner,
    });

    const publisher = await Publisher.fromConfig(env.config, {
      logger: env.logger,
      discovery: env.discovery,
    });

    await publisher.getReadiness();

    return await createRouter({
      preparers,
      generators,
      publisher,
      logger: env.logger,
      // Passing a buildLogTransport as a parameter in createRouter will enable
      // capturing build logs to a backend log stream
      buildLogTransport: env.logger,
      config: env.config,
      discovery: env.discovery,
      cache: env.cache,
    });
  }
  ```

### `@backstage/plugin-techdocs-module-addons-contrib` (1.0.0 → [1.0.1](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#101))

#### 1.0.1

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.
- [`6968b65ba1`](https://github.com/backstage/backstage/commit/6968b65ba1): Updated dependency `@react-hookz/web` to `^14.0.0`.

### `@backstage/plugin-techdocs-node` (1.1.1 → [1.1.2](../../changelogs/@backstage/plugin-techdocs-node.md#112))

#### 1.1.2

##### Patch Changes

- [`f5283a42e2`](https://github.com/backstage/backstage/commit/f5283a42e2): Updated dependency `@google-cloud/storage` to `^6.0.0`.
- [`2c048f8b90`](https://github.com/backstage/backstage/commit/2c048f8b90): Updated deprecated use of `express`' `res.redirect()` method when handling legacy path casing.

### `@backstage/plugin-techdocs-react` (1.0.0 → [1.0.1](../../changelogs/@backstage/plugin-techdocs-react.md#101))

#### 1.0.1

##### Patch Changes

- [`3b45ad701f`](https://github.com/backstage/backstage/commit/3b45ad701f): Creates a `TechDocsShadowDom` component that takes a tree of elements and an `onAppend` handler:

  - Calls the `onAppend` handler when appending the element tree to the shadow root;
  - Also dispatches an event when styles are loaded to let transformers know that the computed styles are ready to be consumed.

### `@backstage/plugin-todo` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-todo.md#028))

#### 0.2.8

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-todo-backend` (0.1.29 → [0.1.30](../../changelogs/@backstage/plugin-todo-backend.md#0130))

#### 0.1.30

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/plugin-user-settings` (0.4.4 → [0.4.5](../../changelogs/@backstage/plugin-user-settings.md#045))

#### 0.4.5

##### Patch Changes

- [`9d2d6a0cea`](https://github.com/backstage/backstage/commit/9d2d6a0cea): Added new `<UserSettingsIdentityCard />` to show the result of the `identityApi.getBackstageIdentity()` call to help debug ownership issues. The new card has been added to the user settings page.
- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.
- [`bff65e6958`](https://github.com/backstage/backstage/commit/bff65e6958): Updated sidebar-related logic to use `<SidebarPinStateProvider>` + `useSidebarPinState()` and/or `<SidebarOpenStateProvider>` + `useSidebarOpenState()` from `@backstage/core-components`.

### `@backstage/plugin-xcmetrics` (0.2.25 → [0.2.26](../../changelogs/@backstage/plugin-xcmetrics.md#0226))

#### 0.2.26

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@backstage/test-utils` (1.1.0 → [1.1.1](../../changelogs/@backstage/test-utils.md#111))

#### 1.1.1

##### Patch Changes

- [`8f7b1835df`](https://github.com/backstage/backstage/commit/8f7b1835df): Updated dependency `msw` to `^0.41.0`.

### `@techdocs/cli` (1.1.1 → [1.1.2](../../changelogs/@techdocs/cli.md#112))

#### 1.1.2

##### Patch Changes

- [`f96e98f4cd`](https://github.com/backstage/backstage/commit/f96e98f4cd): Updated dependency `cypress` to `^10.0.0`.
- [`bff65e6958`](https://github.com/backstage/backstage/commit/bff65e6958): Updated sidebar-related logic to use `<SidebarPinStateProvider>` + `useSidebarPinState()` and/or `<SidebarOpenStateProvider>` + `useSidebarOpenState()` from `@backstage/core-components`.

## Excluded dependency updates

- `@backstage/app-defaults` (1.0.2 → [1.0.3](../../changelogs/@backstage/app-defaults.md#103))
- `@backstage/dev-utils` (1.0.2 → [1.0.3](../../changelogs/@backstage/dev-utils.md#103))
- `@backstage/plugin-adr-common` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-adr-common.md#011))
- `@backstage/plugin-badges-backend` (0.1.26 → [0.1.27](../../changelogs/@backstage/plugin-badges-backend.md#0127))
- `@backstage/plugin-bazaar` (0.1.20 → [0.1.21](../../changelogs/@backstage/plugin-bazaar.md#0121))
- `@backstage/plugin-bazaar-backend` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-bazaar-backend.md#0117))
- `@backstage/plugin-catalog-graph` (0.2.17 → [0.2.18](../../changelogs/@backstage/plugin-catalog-graph.md#0218))
- `@backstage/plugin-cicd-statistics` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-cicd-statistics.md#018))
- `@backstage/plugin-cicd-statistics-module-gitlab` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-cicd-statistics-module-gitlab.md#012))
- `@backstage/plugin-jenkins-common` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-jenkins-common.md#015))
- `@backstage/plugin-kafka-backend` (0.2.25 → [0.2.26](../../changelogs/@backstage/plugin-kafka-backend.md#0226))
- `@backstage/plugin-newrelic-dashboard` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-newrelic-dashboard.md#0114))
- `@backstage/plugin-permission-react` (0.4.1 → [0.4.2](../../changelogs/@backstage/plugin-permission-react.md#042))
- `@backstage/plugin-proxy-backend` (0.2.26 → [0.2.27](../../changelogs/@backstage/plugin-proxy-backend.md#0227))
- `@backstage/plugin-scaffolder-backend-module-rails` (0.4.0 → [0.4.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#041))
- `@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#026))
- `@backstage/plugin-scaffolder-common` (1.1.0 → [1.1.1](../../changelogs/@backstage/plugin-scaffolder-common.md#111))
- `@backstage/plugin-stack-overflow-backend` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-stack-overflow-backend.md#012))
- `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-tech-insights-backend-module-jsonfc.md#0117))
