# Backstage Release 1.13.0 changelog

Changes between 1.12.1 and 1.13.0 — 186 changed and 8 added packages.

## Summary

- [Newly added packages](#newly-added-packages): 8 packages
- [Breaking changes](#breaking-changes): 7 packages
- [Major version bumps](#major-version-bumps): 1 package
- [0.x minor version bumps](#0x-minor-version-bumps): 8 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 2 packages
- [Other minor version bumps](#other-minor-version-bumps): 15 packages
- [Other patch version bumps](#other-patch-version-bumps): 110 packages
- [Excluded dependency updates](#excluded-dependency-updates): 43 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/backend-openapi-utils` (new, 0.0.1)](#backstagebackend-openapi-utils-new-001)
  - [`@backstage/cli-node` (new, 0.1.0)](#backstagecli-node-new-010)
  - [`@backstage/plugin-puppetdb` (new, 0.1.0)](#backstageplugin-puppetdb-new-010)
  - [`@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (new, 0.1.0)](#backstageplugin-scaffolder-backend-module-confluence-to-markdown-new-010)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (new, 0.1.0)](#backstageplugin-scaffolder-backend-module-gitlab-new-010)
  - [`@backstage/plugin-search-backend-module-catalog` (new, 0.1.0)](#backstageplugin-search-backend-module-catalog-new-010)
  - [`@backstage/plugin-search-backend-module-explore` (new, 0.1.0)](#backstageplugin-search-backend-module-explore-new-010)
  - [`@backstage/plugin-search-backend-module-techdocs` (new, 0.1.0)](#backstageplugin-search-backend-module-techdocs-new-010)
- [Breaking changes](#breaking-changes)
  - [`@backstage/backend-common` (0.18.3 → 0.18.4)](#backstagebackend-common-0183--0184)
  - [`@backstage/core-components` (0.12.5 → 0.13.0)](#backstagecore-components-0125--0130)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.1.14 → 0.2.0)](#backstageplugin-catalog-backend-module-gitlab-0114--020)
  - [`@backstage/plugin-catalog-react` (1.4.0 → 1.5.0)](#backstageplugin-catalog-react-140--150)
  - [`@backstage/plugin-kubernetes` (0.7.9 → 0.8.0)](#backstageplugin-kubernetes-079--080)
  - [`@backstage/plugin-kubernetes-backend` (0.9.4 → 0.10.0)](#backstageplugin-kubernetes-backend-094--0100)
  - [`@backstage/plugin-lighthouse-backend` (0.1.1 → 0.2.0)](#backstageplugin-lighthouse-backend-011--020)
- [Major version bumps](#major-version-bumps)
  - [`@backstage/plugin-dynatrace` (3.0.0 → 4.0.0)](#backstageplugin-dynatrace-300--400)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/create-app` (0.4.38 → 0.5.0)](#backstagecreate-app-0438--050)
  - [`@backstage/plugin-adr` (0.4.1 → 0.5.0)](#backstageplugin-adr-041--050)
  - [`@backstage/plugin-entity-feedback` (0.1.1 → 0.2.0)](#backstageplugin-entity-feedback-011--020)
  - [`@backstage/plugin-home` (0.4.32 → 0.5.0)](#backstageplugin-home-0432--050)
  - [`@backstage/plugin-playlist-backend` (0.2.6 → 0.3.0)](#backstageplugin-playlist-backend-026--030)
  - [`@backstage/plugin-stack-overflow-backend` (0.1.12 → 0.2.0)](#backstageplugin-stack-overflow-backend-0112--020)
  - [`@backstage/plugin-vault-backend` (0.2.10 → 0.3.0)](#backstageplugin-vault-backend-0210--030)
  - [`@backstage/repo-tools` (0.1.3 → 0.2.0)](#backstagerepo-tools-013--020)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-explore-backend` (0.0.5 → 0.0.6)](#backstageplugin-explore-backend-005--006)
  - [`@backstage/plugin-explore-react` (0.0.27 → 0.0.28)](#backstageplugin-explore-react-0027--0028)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/app-defaults` (1.2.1 → 1.3.0)](#backstageapp-defaults-121--130)
  - [`@backstage/catalog-model` (1.2.1 → 1.3.0)](#backstagecatalog-model-121--130)
  - [`@backstage/config-loader` (1.1.9 → 1.2.0)](#backstageconfig-loader-119--120)
  - [`@backstage/core-app-api` (1.6.0 → 1.7.0)](#backstagecore-app-api-160--170)
  - [`@backstage/plugin-catalog` (1.9.0 → 1.10.0)](#backstageplugin-catalog-190--1100)
  - [`@backstage/plugin-catalog-backend` (1.8.0 → 1.9.0)](#backstageplugin-catalog-backend-180--190)
  - [`@backstage/plugin-scaffolder` (1.12.0 → 1.13.0)](#backstageplugin-scaffolder-1120--1130)
  - [`@backstage/plugin-scaffolder-backend` (1.12.0 → 1.13.0)](#backstageplugin-scaffolder-backend-1120--1130)
  - [`@backstage/plugin-scaffolder-react` (1.2.0 → 1.3.0)](#backstageplugin-scaffolder-react-120--130)
  - [`@backstage/plugin-search` (1.1.1 → 1.2.0)](#backstageplugin-search-111--120)
  - [`@backstage/plugin-search-backend` (1.2.4 → 1.3.0)](#backstageplugin-search-backend-124--130)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.1.4 → 1.2.0)](#backstageplugin-search-backend-module-elasticsearch-114--120)
  - [`@backstage/plugin-search-backend-node` (1.1.4 → 1.2.0)](#backstageplugin-search-backend-node-114--120)
  - [`@backstage/plugin-techdocs-node` (1.6.0 → 1.7.0)](#backstageplugin-techdocs-node-160--170)
  - [`@backstage/test-utils` (1.2.6 → 1.3.0)](#backstagetest-utils-126--130)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-app-api` (0.4.1 → 0.4.2)](#backstagebackend-app-api-041--042)
  - [`@backstage/backend-tasks` (0.5.0 → 0.5.1)](#backstagebackend-tasks-050--051)
  - [`@backstage/catalog-client` (1.4.0 → 1.4.1)](#backstagecatalog-client-140--141)
  - [`@backstage/cli` (0.22.5 → 0.22.6)](#backstagecli-0225--0226)
  - [`@backstage/core-plugin-api` (1.5.0 → 1.5.1)](#backstagecore-plugin-api-150--151)
  - [`@backstage/dev-utils` (1.0.13 → 1.0.14)](#backstagedev-utils-1013--1014)
  - [`@backstage/eslint-plugin` (0.1.2 → 0.1.3)](#backstageeslint-plugin-012--013)
  - [`@backstage/integration` (1.4.3 → 1.4.4)](#backstageintegration-143--144)
  - [`@backstage/integration-react` (1.1.11 → 1.1.12)](#backstageintegration-react-1111--1112)
  - [`@backstage/plugin-adr-backend` (0.3.1 → 0.3.2)](#backstageplugin-adr-backend-031--032)
  - [`@backstage/plugin-adr-common` (0.2.7 → 0.2.8)](#backstageplugin-adr-common-027--028)
  - [`@backstage/plugin-airbrake` (0.3.16 → 0.3.17)](#backstageplugin-airbrake-0316--0317)
  - [`@backstage/plugin-allure` (0.1.32 → 0.1.33)](#backstageplugin-allure-0132--0133)
  - [`@backstage/plugin-analytics-module-ga` (0.1.27 → 0.1.28)](#backstageplugin-analytics-module-ga-0127--0128)
  - [`@backstage/plugin-apache-airflow` (0.2.9 → 0.2.10)](#backstageplugin-apache-airflow-029--0210)
  - [`@backstage/plugin-api-docs` (0.9.1 → 0.9.2)](#backstageplugin-api-docs-091--092)
  - [`@backstage/plugin-api-docs-module-protoc-gen-doc` (0.1.1 → 0.1.2)](#backstageplugin-api-docs-module-protoc-gen-doc-011--012)
  - [`@backstage/plugin-apollo-explorer` (0.1.9 → 0.1.10)](#backstageplugin-apollo-explorer-019--0110)
  - [`@backstage/plugin-auth-backend` (0.18.1 → 0.18.2)](#backstageplugin-auth-backend-0181--0182)
  - [`@backstage/plugin-azure-devops` (0.2.7 → 0.2.8)](#backstageplugin-azure-devops-027--028)
  - [`@backstage/plugin-azure-sites` (0.1.5 → 0.1.6)](#backstageplugin-azure-sites-015--016)
  - [`@backstage/plugin-badges` (0.2.40 → 0.2.41)](#backstageplugin-badges-0240--0241)
  - [`@backstage/plugin-bazaar` (0.2.6 → 0.2.7)](#backstageplugin-bazaar-026--027)
  - [`@backstage/plugin-bazaar-backend` (0.2.6 → 0.2.7)](#backstageplugin-bazaar-backend-026--027)
  - [`@backstage/plugin-bitrise` (0.1.43 → 0.1.44)](#backstageplugin-bitrise-0143--0144)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.1.14 → 0.1.15)](#backstageplugin-catalog-backend-module-azure-0114--0115)
  - [`@backstage/plugin-catalog-backend-module-github` (0.2.6 → 0.2.7)](#backstageplugin-catalog-backend-module-github-026--027)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.5.10 → 0.5.11)](#backstageplugin-catalog-backend-module-ldap-0510--0511)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.5.2 → 0.5.3)](#backstageplugin-catalog-backend-module-msgraph-052--053)
  - [`@backstage/plugin-catalog-backend-module-openapi` (0.1.9 → 0.1.10)](#backstageplugin-catalog-backend-module-openapi-019--0110)
  - [`@backstage/plugin-catalog-graph` (0.2.28 → 0.2.29)](#backstageplugin-catalog-graph-0228--0229)
  - [`@backstage/plugin-catalog-graphql` (0.3.19 → 0.3.20)](#backstageplugin-catalog-graphql-0319--0320)
  - [`@backstage/plugin-catalog-import` (0.9.6 → 0.9.7)](#backstageplugin-catalog-import-096--097)
  - [`@backstage/plugin-cicd-statistics` (0.1.18 → 0.1.19)](#backstageplugin-cicd-statistics-0118--0119)
  - [`@backstage/plugin-cicd-statistics-module-gitlab` (0.1.12 → 0.1.13)](#backstageplugin-cicd-statistics-module-gitlab-0112--0113)
  - [`@backstage/plugin-circleci` (0.3.16 → 0.3.17)](#backstageplugin-circleci-0316--0317)
  - [`@backstage/plugin-cloudbuild` (0.3.16 → 0.3.17)](#backstageplugin-cloudbuild-0316--0317)
  - [`@backstage/plugin-code-climate` (0.1.16 → 0.1.17)](#backstageplugin-code-climate-0116--0117)
  - [`@backstage/plugin-code-coverage` (0.2.9 → 0.2.10)](#backstageplugin-code-coverage-029--0210)
  - [`@backstage/plugin-code-coverage-backend` (0.2.9 → 0.2.10)](#backstageplugin-code-coverage-backend-029--0210)
  - [`@backstage/plugin-codescene` (0.1.11 → 0.1.12)](#backstageplugin-codescene-0111--0112)
  - [`@backstage/plugin-config-schema` (0.1.39 → 0.1.40)](#backstageplugin-config-schema-0139--0140)
  - [`@backstage/plugin-cost-insights` (0.12.5 → 0.12.6)](#backstageplugin-cost-insights-0125--0126)
  - [`@backstage/plugin-entity-feedback-backend` (0.1.1 → 0.1.2)](#backstageplugin-entity-feedback-backend-011--012)
  - [`@backstage/plugin-entity-feedback-common` (0.1.0 → 0.1.1)](#backstageplugin-entity-feedback-common-010--011)
  - [`@backstage/plugin-entity-validation` (0.1.1 → 0.1.2)](#backstageplugin-entity-validation-011--012)
  - [`@backstage/plugin-events-backend` (0.2.4 → 0.2.5)](#backstageplugin-events-backend-024--025)
  - [`@backstage/plugin-explore` (0.4.1 → 0.4.2)](#backstageplugin-explore-041--042)
  - [`@backstage/plugin-firehydrant` (0.2.0 → 0.2.1)](#backstageplugin-firehydrant-020--021)
  - [`@backstage/plugin-fossa` (0.2.48 → 0.2.49)](#backstageplugin-fossa-0248--0249)
  - [`@backstage/plugin-gcalendar` (0.3.12 → 0.3.13)](#backstageplugin-gcalendar-0312--0313)
  - [`@backstage/plugin-gcp-projects` (0.3.35 → 0.3.36)](#backstageplugin-gcp-projects-0335--0336)
  - [`@backstage/plugin-git-release-manager` (0.3.29 → 0.3.30)](#backstageplugin-git-release-manager-0329--0330)
  - [`@backstage/plugin-github-actions` (0.5.16 → 0.5.17)](#backstageplugin-github-actions-0516--0517)
  - [`@backstage/plugin-github-deployments` (0.1.47 → 0.1.48)](#backstageplugin-github-deployments-0147--0148)
  - [`@backstage/plugin-github-issues` (0.2.5 → 0.2.6)](#backstageplugin-github-issues-025--026)
  - [`@backstage/plugin-github-pull-requests-board` (0.1.10 → 0.1.11)](#backstageplugin-github-pull-requests-board-0110--0111)
  - [`@backstage/plugin-gitops-profiles` (0.3.34 → 0.3.35)](#backstageplugin-gitops-profiles-0334--0335)
  - [`@backstage/plugin-gocd` (0.1.22 → 0.1.23)](#backstageplugin-gocd-0122--0123)
  - [`@backstage/plugin-graphiql` (0.2.48 → 0.2.49)](#backstageplugin-graphiql-0248--0249)
  - [`@backstage/plugin-graphql-backend` (0.1.33 → 0.1.34)](#backstageplugin-graphql-backend-0133--0134)
  - [`@backstage/plugin-graphql-voyager` (0.1.1 → 0.1.2)](#backstageplugin-graphql-voyager-011--012)
  - [`@backstage/plugin-ilert` (0.2.5 → 0.2.6)](#backstageplugin-ilert-025--026)
  - [`@backstage/plugin-jenkins` (0.7.15 → 0.7.16)](#backstageplugin-jenkins-0715--0716)
  - [`@backstage/plugin-kafka` (0.3.16 → 0.3.17)](#backstageplugin-kafka-0316--0317)
  - [`@backstage/plugin-kubernetes-common` (0.6.1 → 0.6.2)](#backstageplugin-kubernetes-common-061--062)
  - [`@backstage/plugin-lighthouse` (0.4.1 → 0.4.2)](#backstageplugin-lighthouse-041--042)
  - [`@backstage/plugin-linguist` (0.1.1 → 0.1.2)](#backstageplugin-linguist-011--012)
  - [`@backstage/plugin-microsoft-calendar` (0.1.1 → 0.1.2)](#backstageplugin-microsoft-calendar-011--012)
  - [`@backstage/plugin-newrelic` (0.3.34 → 0.3.35)](#backstageplugin-newrelic-0334--0335)
  - [`@backstage/plugin-newrelic-dashboard` (0.2.9 → 0.2.10)](#backstageplugin-newrelic-dashboard-029--0210)
  - [`@backstage/plugin-octopus-deploy` (0.1.0 → 0.1.1)](#backstageplugin-octopus-deploy-010--011)
  - [`@backstage/plugin-org` (0.6.6 → 0.6.7)](#backstageplugin-org-066--067)
  - [`@backstage/plugin-org-react` (0.1.5 → 0.1.6)](#backstageplugin-org-react-015--016)
  - [`@backstage/plugin-pagerduty` (0.5.9 → 0.5.10)](#backstageplugin-pagerduty-059--0510)
  - [`@backstage/plugin-periskop` (0.1.14 → 0.1.15)](#backstageplugin-periskop-0114--0115)
  - [`@backstage/plugin-permission-backend` (0.5.18 → 0.5.19)](#backstageplugin-permission-backend-0518--0519)
  - [`@backstage/plugin-permission-common` (0.7.4 → 0.7.5)](#backstageplugin-permission-common-074--075)
  - [`@backstage/plugin-permission-node` (0.7.6 → 0.7.7)](#backstageplugin-permission-node-076--077)
  - [`@backstage/plugin-permission-react` (0.4.11 → 0.4.12)](#backstageplugin-permission-react-0411--0412)
  - [`@backstage/plugin-playlist` (0.1.7 → 0.1.8)](#backstageplugin-playlist-017--018)
  - [`@backstage/plugin-rollbar` (0.4.16 → 0.4.17)](#backstageplugin-rollbar-0416--0417)
  - [`@backstage/plugin-rollbar-backend` (0.1.40 → 0.1.41)](#backstageplugin-rollbar-backend-0140--0141)
  - [`@backstage/plugin-scaffolder-common` (1.2.6 → 1.2.7)](#backstageplugin-scaffolder-common-126--127)
  - [`@backstage/plugin-scaffolder-node` (0.1.1 → 0.1.2)](#backstageplugin-scaffolder-node-011--012)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.4 → 0.5.5)](#backstageplugin-search-backend-module-pg-054--055)
  - [`@backstage/plugin-search-react` (1.5.1 → 1.5.2)](#backstageplugin-search-react-151--152)
  - [`@backstage/plugin-sentry` (0.5.1 → 0.5.2)](#backstageplugin-sentry-051--052)
  - [`@backstage/plugin-shortcuts` (0.3.8 → 0.3.9)](#backstageplugin-shortcuts-038--039)
  - [`@backstage/plugin-sonarqube` (0.6.5 → 0.6.6)](#backstageplugin-sonarqube-065--066)
  - [`@backstage/plugin-sonarqube-backend` (0.1.8 → 0.1.9)](#backstageplugin-sonarqube-backend-018--019)
  - [`@backstage/plugin-sonarqube-react` (0.1.4 → 0.1.5)](#backstageplugin-sonarqube-react-014--015)
  - [`@backstage/plugin-splunk-on-call` (0.4.5 → 0.4.6)](#backstageplugin-splunk-on-call-045--046)
  - [`@backstage/plugin-stack-overflow` (0.1.12 → 0.1.13)](#backstageplugin-stack-overflow-0112--0113)
  - [`@backstage/plugin-stackstorm` (0.1.0 → 0.1.1)](#backstageplugin-stackstorm-010--011)
  - [`@backstage/plugin-tech-insights` (0.3.8 → 0.3.9)](#backstageplugin-tech-insights-038--039)
  - [`@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.27 → 0.1.28)](#backstageplugin-tech-insights-backend-module-jsonfc-0127--0128)
  - [`@backstage/plugin-tech-radar` (0.6.2 → 0.6.3)](#backstageplugin-tech-radar-062--063)
  - [`@backstage/plugin-techdocs` (1.6.0 → 1.6.1)](#backstageplugin-techdocs-160--161)
  - [`@backstage/plugin-techdocs-addons-test-utils` (1.0.11 → 1.0.12)](#backstageplugin-techdocs-addons-test-utils-1011--1012)
  - [`@backstage/plugin-techdocs-backend` (1.6.0 → 1.6.1)](#backstageplugin-techdocs-backend-160--161)
  - [`@backstage/plugin-techdocs-module-addons-contrib` (1.0.11 → 1.0.12)](#backstageplugin-techdocs-module-addons-contrib-1011--1012)
  - [`@backstage/plugin-techdocs-react` (1.1.4 → 1.1.5)](#backstageplugin-techdocs-react-114--115)
  - [`@backstage/plugin-todo` (0.2.18 → 0.2.19)](#backstageplugin-todo-0218--0219)
  - [`@backstage/plugin-user-settings` (0.7.1 → 0.7.2)](#backstageplugin-user-settings-071--072)
  - [`@backstage/plugin-vault` (0.1.10 → 0.1.11)](#backstageplugin-vault-0110--0111)
  - [`@backstage/plugin-xcmetrics` (0.2.36 → 0.2.37)](#backstageplugin-xcmetrics-0236--0237)
  - [`@backstage/theme` (0.2.18 → 0.2.19)](#backstagetheme-0218--0219)
  - [`@backstage/version-bridge` (1.0.3 → 1.0.4)](#backstageversion-bridge-103--104)
  - [`@techdocs/cli` (1.4.0 → 1.4.1)](#techdocscli-140--141)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/backend-openapi-utils` (new, [0.0.1](../../changelogs/@backstage/backend-openapi-utils.md#001))

#### 0.0.1

##### Patch Changes

- [`62fe726fdc5`](https://github.com/backstage/backstage/commit/62fe726fdc5): New plugin! Primary focus is to support types on `Router`s in backend packages. Developers can use the `ApiRouter` from this package in their packages to support a typed experience based on their OpenAPI specs. The `ApiRouter` supports request bodies, response bodies, query parameters and path parameters, as well as full path-based context of the above. This means no more guessing on an endpoint like `req.post('/not-my-route', (req, res)=>{res.send(req.body.badparam)})`. Typescript would catch `/not-my-route`, `req.body.badparam`, `res.send(req.body.badparam)`.

### `@backstage/cli-node` (new, [0.1.0](../../changelogs/@backstage/cli-node.md#010))

#### 0.1.0

##### Minor Changes

- [`3156b0d85dc`](https://github.com/backstage/backstage/commit/3156b0d85dc): Introduced the new `@backstage/cli-node` package, which provides utilities for use across Backstage CLIs.

### `@backstage/plugin-puppetdb` (new, [0.1.0](../../changelogs/@backstage/plugin-puppetdb.md#010))

#### 0.1.0

##### Minor Changes

- [`70a036e940e`](https://github.com/backstage/backstage/commit/70a036e940e): Initial version of [PuppetDB plugin](https://github.com/backstage/backstage/blob/master/plugins/puppetdb/README.md).

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (new, [0.1.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#010))

#### 0.1.0

##### Minor Changes

- [`1b49a18bf8d`](https://github.com/backstage/backstage/commit/1b49a18bf8d): Created `confluence:transform:markdown` action for converting confluence docs to Markdown.

##### Patch Changes

- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-scaffolder-backend-module-gitlab` (new, [0.1.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#010))

#### 0.1.0

##### Minor Changes

- [`1ad400bb2de`](https://github.com/backstage/backstage/commit/1ad400bb2de): Add Gitlab Scaffolder Plugin

### `@backstage/plugin-search-backend-module-catalog` (new, [0.1.0](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#010))

#### 0.1.0

##### Minor Changes

- [`01ae205352e`](https://github.com/backstage/backstage/commit/01ae205352e): Package introduced to export search backend modules that can be used with the new backend system to extend search with plugin specific functionality, such as collators. For documentation on how to migrate, check out the [how to migrate to the new backend system guide](https://backstage.io/docs/features/search/how-to-guides/#how-to-migrate-your-backend-installation-to-use-search-together-with-the-new-backend-system).

### `@backstage/plugin-search-backend-module-explore` (new, [0.1.0](../../changelogs/@backstage/plugin-search-backend-module-explore.md#010))

#### 0.1.0

##### Minor Changes

- [`01ae205352e`](https://github.com/backstage/backstage/commit/01ae205352e): Package introduced to export search backend modules that can be used with the new backend system to extend search with plugin specific functionality, such as collators. For documentation on how to migrate, check out the [how to migrate to the new backend system guide](https://backstage.io/docs/features/search/how-to-guides/#how-to-migrate-your-backend-installation-to-use-search-together-with-the-new-backend-system).

### `@backstage/plugin-search-backend-module-techdocs` (new, [0.1.0](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#010))

#### 0.1.0

##### Minor Changes

- [`01ae205352e`](https://github.com/backstage/backstage/commit/01ae205352e): Package introduced to export search backend modules that can be used with the new backend system to extend search with plugin specific functionality, such as collators. For documentation on how to migrate, check out the [how to migrate to the new backend system guide](https://backstage.io/docs/features/search/how-to-guides/#how-to-migrate-your-backend-installation-to-use-search-together-with-the-new-backend-system).

## Breaking changes

### `@backstage/backend-common` (0.18.3 → [0.18.4](../../changelogs/@backstage/backend-common.md#0184))

#### 0.18.4

##### Patch Changes

- [`a1002df2dc2`](https://github.com/backstage/backstage/commit/a1002df2dc2): Support commit hashes at `GithubUrlReader.readTree/search` additionally to branch names.

  Additionally, this will reduce the number of API calls from 2 to 1 for retrieving the "repo details"
  for all cases besides when the default branch has to be resolved and used
  (e.g., repo URL without any branch or commit hash).

- [`5c7ce585824`](https://github.com/backstage/backstage/commit/5c7ce585824): Allow an additionalConfig to be provided to loadBackendConfig that fetches config values during runtime.
- [`2b15cb4aa0a`](https://github.com/backstage/backstage/commit/2b15cb4aa0a): The dependency isomorphic-git is now on version 1.23.0
- [`34167270b31`](https://github.com/backstage/backstage/commit/34167270b31): Renamed the `loadBackendConfig` option `additionalConfig` to `additionalConfigs` as an array, and ensured that they get passed on properly.

  This is technically breaking, but the [original addition](https://github.com/backstage/backstage/pull/16643) hasn't been released in mainline yet so we are taking this step now as a `patch` change.

- [`420164593cf`](https://github.com/backstage/backstage/commit/420164593cf): Improve GitlabUrlReader to only load requested sub-path

### `@backstage/core-components` (0.12.5 → [0.13.0](../../changelogs/@backstage/core-components.md#0130))

#### 0.13.0

##### Minor Changes

- [`01cd4e25754`](https://github.com/backstage/backstage/commit/01cd4e25754): **BREAKING:** Removing `Tabs` component from `core-components` as it is neither used in the core Backstage app nor in the monorepo plugins. If you are using this component in your instance please consider replacing it with the [Material UI `Tabs`](https://v4.mui.com/components/tabs/#tabs) component like the following:

  ```diff
  - <Tabs
  -    tabs={[{
  -       icon: <AccessAlarmIcon />,
  -       content: <div>Label</div>,
  -    }]}
  - />

  + <Tabs>
  +    <Tab
  +       label = "Label"
  +       icon = { <AccessAlarmIcon /> }
  +    />
  + </Tabs>
  ```

##### Patch Changes

- [`d0befd3fb23`](https://github.com/backstage/backstage/commit/d0befd3fb23): Fixed a bug that could prevent auth from working when using the `guest` or `custom` auth providers.
- [`67140d9f96f`](https://github.com/backstage/backstage/commit/67140d9f96f): Upgrade `react-virtualized-auto-sizer´ to version `^1.0.11`
- [`6e0b71493df`](https://github.com/backstage/backstage/commit/6e0b71493df): Switched internal declaration of `DependencyGraphTypes` to use `namespace`.
- [`c8779cc1d09`](https://github.com/backstage/backstage/commit/c8779cc1d09): Updated `LogLine` component, which is used by the `LogViewer`, to turn URLs into clickable links. This feature is on by default
- [`7908d72e033`](https://github.com/backstage/backstage/commit/7908d72e033): Introduce a new global config parameter, `enableExperimentalRedirectFlow`. When enabled, auth will happen with an in-window redirect flow rather than through a popup window.
- [`1e4f5e91b8e`](https://github.com/backstage/backstage/commit/1e4f5e91b8e): Bump `zod` and `zod-to-json-schema` dependencies.
- [`29ba8267d69`](https://github.com/backstage/backstage/commit/29ba8267d69): Updated dependency `@material-ui/lab` to `4.0.0-alpha.61`.
- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`303c2c3ce51`](https://github.com/backstage/backstage/commit/303c2c3ce51): Allow `closeButton` color in `DismissableBanner` to be configurable (via. `theme.palette.banner.closeButtonColor`)
- [`7e60bee2dea`](https://github.com/backstage/backstage/commit/7e60bee2dea): Split the `BackstageSidebar` style `drawer` class, such that the `width` property is in a separate `drawerWidth` class instead. This makes it such that you can style the `drawer` class in your theme again.
- [`7245e744ab1`](https://github.com/backstage/backstage/commit/7245e744ab1): Fixed the font color on `BackstageHeaderLabel` to respect the active page theme.
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-catalog-backend-module-gitlab` (0.1.14 → [0.2.0](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#020))

#### 0.2.0

##### Minor Changes

- [`f64345108a0`](https://github.com/backstage/backstage/commit/f64345108a0): **BREAKING**: The configuration of the `GitlabDiscoveryEntityProvider` has changed as follows:

  - The configuration key `branch` is now used to define the branch from which the catalog-info should be discovered.
  - The old configuration key `branch` is now called `fallbackBranch`. This value specifies which branch should be used
    if no default branch is defined on the project itself.

  To migrate to the new configuration value, rename `branch` to `fallbackBranch`

##### Patch Changes

- [`7b1b7bfdb7b`](https://github.com/backstage/backstage/commit/7b1b7bfdb7b): The gitlab org data integration now makes use of the GraphQL API to determine
  the relationships between imported User and Group entities, effectively making
  this integration usable without an administrator account's Personal Access
  Token.

### `@backstage/plugin-catalog-react` (1.4.0 → [1.5.0](../../changelogs/@backstage/plugin-catalog-react.md#150))

#### 1.5.0

##### Minor Changes

- [`a49fb39df5a`](https://github.com/backstage/backstage/commit/a49fb39df5a): Attempt to load entity owner names in the EntityOwnerPicker through the `by-refs` endpoint. If `spec.profile.displayName` or `metadata.title` are populated, we now attempt to show those before showing the `humanizeEntityRef`'d version.

  **BREAKING**: `EntityOwnerFilter` now uses the full entity ref instead of the `humanizeEntityRef`. If you rely on `EntityOwnerFilter.values` or the `queryParameters.owners` of `useEntityList`, you will need to adjust your code like the following.

  ```tsx
  const { queryParameters: { owners } } = useEntityList();
  // or
  const { filter: { owners } } = useEntityList();

  // Instead of,
  if (owners.some(ref => ref === humanizeEntityRef(myEntity))) ...

  // You'll need to use,
  if (owners.some(ref => ref === stringifyEntityRef(myEntity))) ...
  ```

##### Patch Changes

- [`81bee24c5de`](https://github.com/backstage/backstage/commit/81bee24c5de): Fixed bug in catalog filters where you could not click on the text to select a value.
- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`d1f5324dff7`](https://github.com/backstage/backstage/commit/d1f5324dff7): Reverted the check if the selected options list is different than the query parameters list before invoking `setSelectedOptions` method. This was preventing updating list items when a query string was already present in the URL when loading the page.
- [`2898b6c8d52`](https://github.com/backstage/backstage/commit/2898b6c8d52): Minor type tweaks for TypeScript 5.0
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-kubernetes` (0.7.9 → [0.8.0](../../changelogs/@backstage/plugin-kubernetes.md#080))

#### 0.8.0

##### Minor Changes

- [`754be7c5106`](https://github.com/backstage/backstage/commit/754be7c5106): refactor kubernetes error detection to make way for proposed solutions

  **BREAKING**: `DetectedError` now appears once per Kubernetes resource per error instead of for all resources which have that error, `namespace` and `name` fields are now in `sourceRef` object `message` is now a `string` instead of a `string[]`. `ErrorDetectableKind` has been removed.

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e7fb0117485`](https://github.com/backstage/backstage/commit/e7fb0117485): fixes a bug where an empty authorization header was provided to the proxy endpoint when a cluster had a server-side auth provider
- [`c159ab64a60`](https://github.com/backstage/backstage/commit/c159ab64a60): `KubernetesBackendClient` now requires a `kubernetesAuthProvidersApi` value to be provided. `KubernetesApi` interface now has a proxy method requirement.
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-kubernetes-backend` (0.9.4 → [0.10.0](../../changelogs/@backstage/plugin-kubernetes-backend.md#0100))

#### 0.10.0

##### Minor Changes

- [`e6c7c850129`](https://github.com/backstage/backstage/commit/e6c7c850129): Plugins that instantiate the `KubernetesProxy` must now provide a parameter of the type `KubernetesProxyOptions` which includes providing a `KubernetesAuthTranslator`. The `KubernetesBuilder` now builds its own `KubernetesAuthTranslatorMap` that it provides to the `KubernetesProxy`. The `DispatchingKubernetesAuthTranslator` expects a `KubernetesTranslatorMap` to be provided as a parameter. The `KubernetesBuilder` now has a method called `setAuthTranslatorMap` which allows integrators to bring their own `KubernetesAuthTranslator's` to the `KubernetesPlugin`.
- [`804f6d16b0c`](https://github.com/backstage/backstage/commit/804f6d16b0c): **BREAKING**: `KubernetesBuilder.create` now requires a `permissions` field of type `PermissionEvaluator`. The kubernetes `/proxy` endpoint now requires two tokens: the `Backstage-Kubernetes-Authorization` header should contain a bearer token for the target cluster, and the `Authorization` header should contain a backstage identity token. The kubernetes `/proxy` endpoint now requires a `Backstage-Kubernetes-Cluster` header replacing the previously required `X-Kubernetes-Cluster` header.
- [`88fbb3d075a`](https://github.com/backstage/backstage/commit/88fbb3d075a): Add support for the new plugin system to the Kubernetes plugin

##### Patch Changes

- [`56a28b559e5`](https://github.com/backstage/backstage/commit/56a28b559e5): Updated kubernetes config schema to match available options
- [`75d4985f5e8`](https://github.com/backstage/backstage/commit/75d4985f5e8): Fixes bug whereby backstage crashes when bad credentials are provided to the kubernetes plugin.
- [`83d250badc6`](https://github.com/backstage/backstage/commit/83d250badc6): Fix parsing error when kubernetes api is returning badly structured data.
- [`76e8f08fa24`](https://github.com/backstage/backstage/commit/76e8f08fa24): fix localKubectlProxy auth provider fetching

### `@backstage/plugin-lighthouse-backend` (0.1.1 → [0.2.0](../../changelogs/@backstage/plugin-lighthouse-backend.md#020))

#### 0.2.0

##### Minor Changes

- [`7a89555e73d`](https://github.com/backstage/backstage/commit/7a89555e73d): Lighthouse backend plugin can now use an authenticated catalog backend API.

  - Breaking \* You must now pass the `tokenManager` to the lighthouse `createScheduler`.

## Major version bumps

### `@backstage/plugin-dynatrace` (3.0.0 → [4.0.0](../../changelogs/@backstage/plugin-dynatrace.md#400))

#### 4.0.0

##### Patch Changes

- [`7d75f6d9b8f`](https://github.com/backstage/backstage/commit/7d75f6d9b8f): chore: Improve API Reference documentation
- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

## 0.x minor version bumps

### `@backstage/create-app` (0.4.38 → [0.5.0](../../changelogs/@backstage/create-app.md#050))

#### 0.5.0

##### Minor Changes

- [`10744537bf5`](https://github.com/backstage/backstage/commit/10744537bf5): Renamed `permissionApi` to `permissions` when passed as dependency of the scaffolder-backend plugin

##### Patch Changes

- [`5af2c4f412f`](https://github.com/backstage/backstage/commit/5af2c4f412f): Bumped create-app version.
- [`ab75a16da7a`](https://github.com/backstage/backstage/commit/ab75a16da7a): Bumped create-app version.
- [`71fd0966d10`](https://github.com/backstage/backstage/commit/71fd0966d10): Add `permissionApi` as dependency of the scaffolder-backend plugin
- [`2945923b133`](https://github.com/backstage/backstage/commit/2945923b133): Upgraded the TypeScript version to 5.0

  To apply this change in your own project, switch the TypeScript version in your root `package.json`:

  ```diff
  -    "typescript": "~4.6.4",
  +    "typescript": "~5.0.0",
  ```

- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-adr` (0.4.1 → [0.5.0](../../changelogs/@backstage/plugin-adr.md#050))

#### 0.5.0

##### Minor Changes

- [`a2218363301`](https://github.com/backstage/backstage/commit/a2218363301): Use `fetchApi` instead of raw `fetch` in order to pass auth header if necessary.

##### Patch Changes

- [`77aa3a4d47e`](https://github.com/backstage/backstage/commit/77aa3a4d47e): use path attribute to fetch files instead of name and update the UI to navigate over subdirectories
- [`7d75f6d9b8f`](https://github.com/backstage/backstage/commit/7d75f6d9b8f): chore: Improve API Reference documentation
- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-entity-feedback` (0.1.1 → [0.2.0](../../changelogs/@backstage/plugin-entity-feedback.md#020))

#### 0.2.0

##### Minor Changes

- [`7eba760e6f6`](https://github.com/backstage/backstage/commit/7eba760e6f6): Added an endpoint to fetch anonymous aggregated results from an entity

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-home` (0.4.32 → [0.5.0](../../changelogs/@backstage/plugin-home.md#050))

#### 0.5.0

##### Minor Changes

- [`760f521b979`](https://github.com/backstage/backstage/commit/760f521b979): Add support for customizable homepage.

  Allows customizing homepage components, their placement, size and
  individual settings. For maximum size and settings, the existing home
  components should add necessary data attributes to their components.

  See `plugins/home/README.md` for more information how to configure
  the customizable homepage.

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-playlist-backend` (0.2.6 → [0.3.0](../../changelogs/@backstage/plugin-playlist-backend.md#030))

#### 0.3.0

##### Minor Changes

- [`9a98a96f9e8`](https://github.com/backstage/backstage/commit/9a98a96f9e8): Exposes the announcements plugin's permissions in a metadata endpoint.

##### Patch Changes

- [`1e4f5e91b8e`](https://github.com/backstage/backstage/commit/1e4f5e91b8e): Bump `zod` and `zod-to-json-schema` dependencies.

### `@backstage/plugin-stack-overflow-backend` (0.1.12 → [0.2.0](../../changelogs/@backstage/plugin-stack-overflow-backend.md#020))

#### 0.2.0

##### Minor Changes

- [`51ff6f9edff`](https://github.com/backstage/backstage/commit/51ff6f9edff): Adding support for v2.3 API and PAT authentication

### `@backstage/plugin-vault-backend` (0.2.10 → [0.3.0](../../changelogs/@backstage/plugin-vault-backend.md#030))

#### 0.3.0

##### Minor Changes

- [`5e959c9eb62`](https://github.com/backstage/backstage/commit/5e959c9eb62): Allow generic Vault clients to be passed into the builder

### `@backstage/repo-tools` (0.1.3 → [0.2.0](../../changelogs/@backstage/repo-tools.md#020))

#### 0.2.0

##### Minor Changes

- [`a876e69b20e`](https://github.com/backstage/backstage/commit/a876e69b20e): Adding two new commands to support OpenAPI spec writing, `schema:openapi:generate` to generate the Typescript file that `@backstage/backend-openapi-utils` needs for typing and `schema:openapi:verify` to verify that this file exists and matches your `src/schema/openapi.yaml` file.

##### Patch Changes

- [`f59041a3c07`](https://github.com/backstage/backstage/commit/f59041a3c07): Package paths provided to `api-reports` and OpenAPI commands will now match any path within the target package.
- [`f59041a3c07`](https://github.com/backstage/backstage/commit/f59041a3c07): Added `--include <patterns>` and `--exclude <patterns>` options for `api-reports` command that work based on package names.
- [`9129ca8cabb`](https://github.com/backstage/backstage/commit/9129ca8cabb): Log API report instructions when api-report is missing.
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

## 0.0.x patch version bumps

### `@backstage/plugin-explore-backend` (0.0.5 → [0.0.6](../../changelogs/@backstage/plugin-explore-backend.md#006))

#### 0.0.6

##### Patch Changes

- [`01ae205352e`](https://github.com/backstage/backstage/commit/01ae205352e): Collator factories instantiated in new backend system modules and now marked as deprecated. Will be continued to be exported publicly until the new backend system is fully rolled out.

### `@backstage/plugin-explore-react` (0.0.27 → [0.0.28](../../changelogs/@backstage/plugin-explore-react.md#0028))

#### 0.0.28

##### Patch Changes

- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

## Other minor version bumps

### `@backstage/app-defaults` (1.2.1 → [1.3.0](../../changelogs/@backstage/app-defaults.md#130))

#### 1.3.0

##### Minor Changes

- [`7908d72e033`](https://github.com/backstage/backstage/commit/7908d72e033): Introduce a new global config parameter, `enableExperimentalRedirectFlow`. When enabled, auth will happen with an in-window redirect flow rather than through a popup window.

### `@backstage/catalog-model` (1.2.1 → [1.3.0](../../changelogs/@backstage/catalog-model.md#130))

#### 1.3.0

##### Minor Changes

- [`be9c4228073`](https://github.com/backstage/backstage/commit/be9c4228073): Modified the regex for DNS label validation to support IDN domains

### `@backstage/config-loader` (1.1.9 → [1.2.0](../../changelogs/@backstage/config-loader.md#120))

#### 1.2.0

##### Minor Changes

- [`c791fcd96b9`](https://github.com/backstage/backstage/commit/c791fcd96b9): Configuration validation is now more permissive when it comes to config whose values are `string` but whose schemas declare them to be `boolean` or `number`.

  For example, configuration was previously marked invalid when a string `'true'` was set on a property expecting type `boolean` or a string `'146'` was set on a property expecting type `number` (as when providing configuration via variable substitution sourced from environment variables). Now, such configurations will be considered valid and their values will be coerced to the right type at read-time.

### `@backstage/core-app-api` (1.6.0 → [1.7.0](../../changelogs/@backstage/core-app-api.md#170))

#### 1.7.0

##### Minor Changes

- [`7908d72e033`](https://github.com/backstage/backstage/commit/7908d72e033): Introduce a new global config parameter, `enableExperimentalRedirectFlow`. When enabled, auth will happen with an in-window redirect flow rather than through a popup window.
- [`c15e0cedbe1`](https://github.com/backstage/backstage/commit/c15e0cedbe1): The `AuthConnector` interface now supports specifying a set of scopes when
  refreshing a session. The `DefaultAuthConnector` implementation passes the
  `scope` query parameter to the auth-backend plugin appropriately. The
  `RefreshingAuthSessionManager` passes any scopes in its `GetSessionRequest`
  appropriately.

##### Patch Changes

- [`1e4f5e91b8e`](https://github.com/backstage/backstage/commit/1e4f5e91b8e): Bump `zod` and `zod-to-json-schema` dependencies.
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-catalog` (1.9.0 → [1.10.0](../../changelogs/@backstage/plugin-catalog.md#1100))

#### 1.10.0

##### Minor Changes

- [`4dbf3d3e4da`](https://github.com/backstage/backstage/commit/4dbf3d3e4da): Added a new EntitySwitch isResourceType to allow different views depending on Resource type
- [`fc6cab4eb48`](https://github.com/backstage/backstage/commit/fc6cab4eb48): Added `isEntityWith` condition helper for `EntitySwitch` case statements.

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-catalog-backend` (1.8.0 → [1.9.0](../../changelogs/@backstage/plugin-catalog-backend.md#190))

#### 1.9.0

##### Minor Changes

- [`329b63f4dab`](https://github.com/backstage/backstage/commit/329b63f4dab): The catalog now has a new, optional `catalog.orphanStrategy` app-config parameter, which can have the string values `'keep'` (default) or `'delete'`.

  If set to `'keep'` or left unset, the old behavior is maintained of keeping orphaned entities around until manually deleted.

  If set to `'delete'`, the catalog will attempt to automatically clean out orphaned entities without manual intervention. Note that there are no guarantees that this process is instantaneous, so there may be some delay before orphaned items disappear.

  For context, the [Life of an Entity](https://backstage.io/docs/features/software-catalog/life-of-an-entity/#orphaning) article goes into some more details on how the nature of orphaning works.

  To enable the new behavior, you will need to pass the plugin task scheduler to your catalog backend builder. If your code already looks like this, you don't need to change it:

  ```ts
  // in packages/backend/src/plugins/catalog.ts
  export default async function createPlugin(
    env: PluginEnvironment,
  ): Promise<Router> {
    const builder = await CatalogBuilder.create(env);
  ```

  But if you pass things into the catalog builder one by one, you'll need to add the new field:

  ```diff
   // in packages/backend/src/plugins/catalog.ts
     const builder = await CatalogBuilder.create({
       // ... other dependencies
  +    scheduler: env.scheduler,
     });
  ```

  Finally adjust your app-config:

  ```yaml
  catalog:
    orphanStrategy: delete
  ```

- [`92a4590fc3a`](https://github.com/backstage/backstage/commit/92a4590fc3a): Add monorepo support to CodeOwnersProccesor.

##### Patch Changes

- [`62a725e3a94`](https://github.com/backstage/backstage/commit/62a725e3a94): Use the `LocationSpec` type from the `catalog-common` package in place of the deprecated `LocationSpec` from the `catalog-node` package.
- [`be5aca50114`](https://github.com/backstage/backstage/commit/be5aca50114): Updates and moves OpenAPI spec to `src/schema/openapi.yaml` and uses `ApiRouter` type from `@backstage/backend-openapi-utils` to handle automatic types from the OpenAPI spec file.
- [`c9a0fdcd2c8`](https://github.com/backstage/backstage/commit/c9a0fdcd2c8): Fix deprecated types.
- [`899ebfd8e02`](https://github.com/backstage/backstage/commit/899ebfd8e02): Add full text search support to the `by-query` endpoint.
- [`1e4f5e91b8e`](https://github.com/backstage/backstage/commit/1e4f5e91b8e): Bump `zod` and `zod-to-json-schema` dependencies.
- [`c4b846359c0`](https://github.com/backstage/backstage/commit/c4b846359c0): Allow replacement of the BuiltinKindsEntityProcessor which enables customization of schema validation and connections emitted.
- [`c36b89f2af3`](https://github.com/backstage/backstage/commit/c36b89f2af3): Fixed bug in the `DefaultCatalogProcessingEngine` where entities that contained multiple different types of relations for the same source entity would not properly trigger stitching for that source entity.
- [`01ae205352e`](https://github.com/backstage/backstage/commit/01ae205352e): Collator factories instantiated in new backend system modules and now marked as deprecated. Will be continued to be exported publicly until the new backend system is fully rolled out.

### `@backstage/plugin-scaffolder` (1.12.0 → [1.13.0](../../changelogs/@backstage/plugin-scaffolder.md#1130))

#### 1.13.0

##### Minor Changes

- [`b71f58d7d8f`](https://github.com/backstage/backstage/commit/b71f58d7d8f): Fixed bug in EntityPicker component that allowed for empty values when field is required. This bug occurs only after a user fills the EntityPicker field, clears it, and then continues to the next form step.
- [`cdab34fd9a2`](https://github.com/backstage/backstage/commit/cdab34fd9a2): scaffolder/next: removing the `routeRefs` and exporting the originals on `scaffolderPlugin.routes.x` instead
- [`e5ad1bd61ec`](https://github.com/backstage/backstage/commit/e5ad1bd61ec): Allow `TemplateListPage` and `TemplateWizardPage` to be passed in as props
- [`92cf86a4b5d`](https://github.com/backstage/backstage/commit/92cf86a4b5d): Added a `templateFilter` prop to the `<Router/>` component to allow for filtering of templates through a function.
- [`cf18c32934a`](https://github.com/backstage/backstage/commit/cf18c32934a): The Installed Actions page now shows details for nested objects and arrays
- [`259d3407b9b`](https://github.com/backstage/backstage/commit/259d3407b9b): Move `CategoryPicker` from `scaffolder` into `scaffolder-react`
  Move `ContextMenu` into `scaffolder-react` and rename it to `ScaffolderPageContextMenu`

##### Patch Changes

- [`7e1d900413a`](https://github.com/backstage/backstage/commit/7e1d900413a): `scaffolder/next`: Bump `@rjsf/*` dependencies to 5.5.2
- [`e27ddc36dad`](https://github.com/backstage/backstage/commit/e27ddc36dad): Added a possibility to cancel the running task (executing of a scaffolder template)
- [`57c1b4752fa`](https://github.com/backstage/backstage/commit/57c1b4752fa): Allow use of `{ exists: true }` value inside filters to filter entities that has that key.

  this example will filter all entities that has the annotation `someAnnotation` set to any value.

  ```yaml
  ui:options:
    catalogFilter:
      kind: Group
      metadata.annotations.someAnnotation: { exists: true }
  ```

- [`7917cfccfc7`](https://github.com/backstage/backstage/commit/7917cfccfc7): Fix some hard-coded white font colors in scaffolder
- [`0435174b06f`](https://github.com/backstage/backstage/commit/0435174b06f): Accessibility issues identified using lighthouse fixed.
- [`7a6b16cc506`](https://github.com/backstage/backstage/commit/7a6b16cc506): `scaffolder/next`: Bump `@rjsf/*` deps to 5.3.1
- [`90dda42cfd2`](https://github.com/backstage/backstage/commit/90dda42cfd2): bug: Invert `templateFilter` predicate to align with `Array.filter`
- [`1e4f5e91b8e`](https://github.com/backstage/backstage/commit/1e4f5e91b8e): Bump `zod` and `zod-to-json-schema` dependencies.
- [`f84fc7fd040`](https://github.com/backstage/backstage/commit/f84fc7fd040): Updated dependency `@rjsf/validator-ajv8` to `5.3.0`.
- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`34dab7ee7f8`](https://github.com/backstage/backstage/commit/34dab7ee7f8): `scaffolder/next`: bump `rjsf` dependencies to `5.5.0`
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies
- [`cf71c3744a5`](https://github.com/backstage/backstage/commit/cf71c3744a5): scaffolder/next: Bump `@rjsf/*` dependencies to 5.6.0

### `@backstage/plugin-scaffolder-backend` (1.12.0 → [1.13.0](../../changelogs/@backstage/plugin-scaffolder-backend.md#1130))

#### 1.13.0

##### Minor Changes

- [`2b15cb4aa0a`](https://github.com/backstage/backstage/commit/2b15cb4aa0a): The non-PR/MR Git Actions now return the commit hash of the commit pushed as a new output called `commitHash`, isomorphic-git is now on version 1.23.0
- [`30ffdae70f9`](https://github.com/backstage/backstage/commit/30ffdae70f9): Added `fetch:plain:file` action to fetch a single file, this action is also added to the list of built-in actions.
- [`65e989f4018`](https://github.com/backstage/backstage/commit/65e989f4018): Added the possibility to authorize parameters and steps of a template

  The scaffolder plugin is now integrated with the permission framework.
  It is possible to toggle parameters or actions within templates by marking each section with specific `tags`, inside a `backstage:permissions` property under each parameter or action. Each parameter or action can then be permissioned by using a conditional decision containing the `scaffolderTemplateRules.hasTag` rule.

- [`3b68b09fc2d`](https://github.com/backstage/backstage/commit/3b68b09fc2d): Renamed permissionApi router option to permissions
- [`bcae5aaf25c`](https://github.com/backstage/backstage/commit/bcae5aaf25c): Added the possibility to authorize actions

  It is now possible to decide who should be able to execute certain actions or who should be able to pass specific input to specified actions.

  Some of the existing utility functions for creating conditional decisions have been renamed:

  - `createScaffolderConditionalDecision` has been renamed to `createScaffolderActionConditionalDecision`
  - `scaffolderConditions` has been renamed to `scaffolderTemplateConditions`

- [`d7c8c222e25`](https://github.com/backstage/backstage/commit/d7c8c222e25): Allow for a commit message to differ from the PR title when publishing a GitHub pull request.
- [`95ea9f69b6f`](https://github.com/backstage/backstage/commit/95ea9f69b6f): Provide some more default filters out of the box and refactoring how the filters are applied to the `SecureTemplater`.

  - `parseEntityRef` will take an string entity triplet and return a parsed object.
  - `pick` will allow you to reference a specific property in the piped object.

  So you can now combine things like this: `${{ parameters.entity | parseEntityRef | pick('name') }}` to get the name of a specific entity, or `${{ parameters.repoUrl | parseRepoUrl | pick('owner') }}` to get the owner of a repo.

##### Patch Changes

- [`e23abb37ec1`](https://github.com/backstage/backstage/commit/e23abb37ec1): Rename output parameter `mergeRequestURL` of `publish:gitlab:merge-request` action to `mergeRequestUrl`.
- [`e27ddc36dad`](https://github.com/backstage/backstage/commit/e27ddc36dad): Added a possibility to cancel the running task (executing of a scaffolder template)
- [`a7eb36c6e38`](https://github.com/backstage/backstage/commit/a7eb36c6e38): Improve type-check for scaffolder output parameters
- [`c9a0fdcd2c8`](https://github.com/backstage/backstage/commit/c9a0fdcd2c8): Fix deprecated types.
- [`1e4f5e91b8e`](https://github.com/backstage/backstage/commit/1e4f5e91b8e): Bump `zod` and `zod-to-json-schema` dependencies.
- [`9c26e6d8ed3`](https://github.com/backstage/backstage/commit/9c26e6d8ed3): Updated the alpha `scaffolderPlugin` to not require options.
- [`f37a95adcd8`](https://github.com/backstage/backstage/commit/f37a95adcd8): Stripped entity types and namespace before passing to GitHub API

### `@backstage/plugin-scaffolder-react` (1.2.0 → [1.3.0](../../changelogs/@backstage/plugin-scaffolder-react.md#130))

#### 1.3.0

##### Minor Changes

- [`259d3407b9b`](https://github.com/backstage/backstage/commit/259d3407b9b): Move `CategoryPicker` from `scaffolder` into `scaffolder-react`
  Move `ContextMenu` into `scaffolder-react` and rename it to `ScaffolderPageContextMenu`
- [`2cfd03d7376`](https://github.com/backstage/backstage/commit/2cfd03d7376): To offer better customization options, `ScaffolderPageContextMenu` takes callbacks as props instead of booleans
- [`48da4c46e45`](https://github.com/backstage/backstage/commit/48da4c46e45): `scaffolder/next`: Export the `TemplateGroupFilter` and `TemplateGroups` and make an extensible component

##### Patch Changes

- [`7e1d900413a`](https://github.com/backstage/backstage/commit/7e1d900413a): `scaffolder/next`: Bump `@rjsf/*` dependencies to 5.5.2
- [`e27ddc36dad`](https://github.com/backstage/backstage/commit/e27ddc36dad): Added a possibility to cancel the running task (executing of a scaffolder template)
- [`0435174b06f`](https://github.com/backstage/backstage/commit/0435174b06f): Accessibility issues identified using lighthouse fixed.
- [`7a6b16cc506`](https://github.com/backstage/backstage/commit/7a6b16cc506): `scaffolder/next`: Bump `@rjsf/*` deps to 5.3.1
- [`90dda42cfd2`](https://github.com/backstage/backstage/commit/90dda42cfd2): bug: Invert `templateFilter` predicate to align with `Array.filter`
- [`d2488f5e54c`](https://github.com/backstage/backstage/commit/d2488f5e54c): Add an indication that the validators are running when clicking `next` on each step of the form.
- [`1e4f5e91b8e`](https://github.com/backstage/backstage/commit/1e4f5e91b8e): Bump `zod` and `zod-to-json-schema` dependencies.
- [`8c40997df44`](https://github.com/backstage/backstage/commit/8c40997df44): Updated dependency `@rjsf/core-v5` to `npm:@rjsf/core@5.5.2`.
- [`f84fc7fd040`](https://github.com/backstage/backstage/commit/f84fc7fd040): Updated dependency `@rjsf/validator-ajv8` to `5.3.0`.
- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`34dab7ee7f8`](https://github.com/backstage/backstage/commit/34dab7ee7f8): `scaffolder/next`: bump `rjsf` dependencies to `5.5.0`
- [`2898b6c8d52`](https://github.com/backstage/backstage/commit/2898b6c8d52): Minor type tweaks for TypeScript 5.0
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies
- [`cf71c3744a5`](https://github.com/backstage/backstage/commit/cf71c3744a5): scaffolder/next: Bump `@rjsf/*` dependencies to 5.6.0

### `@backstage/plugin-search` (1.1.1 → [1.2.0](../../changelogs/@backstage/plugin-search.md#120))

#### 1.2.0

##### Minor Changes

- [`d6b73b0380d`](https://github.com/backstage/backstage/commit/d6b73b0380d): Search modal auto closes on location change

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-search-backend` (1.2.4 → [1.3.0](../../changelogs/@backstage/plugin-search-backend.md#130))

#### 1.3.0

##### Minor Changes

- [`1469daa409e`](https://github.com/backstage/backstage/commit/1469daa409e): Exports search plugin that can be used with the new backend system. For documentation on how to migrate, check out the [how to migrate to the new backend system guide](https://backstage.io/docs/features/search/how-to-guides/#how-to-migrate-your-backend-installation-to-use-search-together-with-the-new-backend-system).

##### Patch Changes

- [`1e4f5e91b8e`](https://github.com/backstage/backstage/commit/1e4f5e91b8e): Bump `zod` and `zod-to-json-schema` dependencies.

### `@backstage/plugin-search-backend-module-elasticsearch` (1.1.4 → [1.2.0](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#120))

#### 1.2.0

##### Minor Changes

- [`1469daa409e`](https://github.com/backstage/backstage/commit/1469daa409e): Search backend modules migrated to the new backend system. For documentation on how to migrate, check out the [how to migrate to the new backend system guide](https://backstage.io/docs/features/search/how-to-guides/#how-to-migrate-your-backend-installation-to-use-search-together-with-the-new-backend-system).

##### Patch Changes

- [`104b6b19487`](https://github.com/backstage/backstage/commit/104b6b19487): fix ElasticSearch throwing error when index is missing

### `@backstage/plugin-search-backend-node` (1.1.4 → [1.2.0](../../changelogs/@backstage/plugin-search-backend-node.md#120))

#### 1.2.0

##### Minor Changes

- [`1469daa409e`](https://github.com/backstage/backstage/commit/1469daa409e): Exports services and extension points that can be used with the new backend system. For documentation on how to migrate, check out the [how to migrate to the new backend system guide](https://backstage.io/docs/features/search/how-to-guides/#how-to-migrate-your-backend-installation-to-use-search-together-with-the-new-backend-system).

### `@backstage/plugin-techdocs-node` (1.6.0 → [1.7.0](../../changelogs/@backstage/plugin-techdocs-node.md#170))

#### 1.7.0

##### Minor Changes

- [`a8b9357eb71`](https://github.com/backstage/backstage/commit/a8b9357eb71): Use the latest version `v.1.2.0` of the spotify/techdocs docker image as default

### `@backstage/test-utils` (1.2.6 → [1.3.0](../../changelogs/@backstage/test-utils.md#130))

#### 1.3.0

##### Minor Changes

- [`7908d72e033`](https://github.com/backstage/backstage/commit/7908d72e033): Introduce a new global config parameter, `enableExperimentalRedirectFlow`. When enabled, auth will happen with an in-window redirect flow rather than through a popup window.

##### Patch Changes

- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

## Other patch version bumps

### `@backstage/backend-app-api` (0.4.1 → [0.4.2](../../changelogs/@backstage/backend-app-api.md#042))

#### 0.4.2

##### Patch Changes

- [`5c7ce585824`](https://github.com/backstage/backstage/commit/5c7ce585824): Allow an additionalConfig to be provided to loadBackendConfig that fetches config values during runtime.
- [`8cce2205a39`](https://github.com/backstage/backstage/commit/8cce2205a39): Register unhandled rejection and uncaught exception handlers to avoid backend crashes.

### `@backstage/backend-tasks` (0.5.0 → [0.5.1](../../changelogs/@backstage/backend-tasks.md#051))

#### 0.5.1

##### Patch Changes

- [`1e4f5e91b8e`](https://github.com/backstage/backstage/commit/1e4f5e91b8e): Bump `zod` and `zod-to-json-schema` dependencies.

### `@backstage/catalog-client` (1.4.0 → [1.4.1](../../changelogs/@backstage/catalog-client.md#141))

#### 1.4.1

##### Patch Changes

- [`c1c4e080b79`](https://github.com/backstage/backstage/commit/c1c4e080b79): Fixed bug in `queryEntities` of `CatalogClient` where the `sortField` is supposed to be changed to `orderField`.

### `@backstage/cli` (0.22.5 → [0.22.6](../../changelogs/@backstage/cli.md#0226))

#### 0.22.6

##### Patch Changes

- [`24432ae52fb`](https://github.com/backstage/backstage/commit/24432ae52fb): Fix the build for packages with multiple entry points to avoid duplicated modules.
- [`8075b67e64c`](https://github.com/backstage/backstage/commit/8075b67e64c): When building a backend package with dependencies any `--config <path>` options will now be forwarded to any dependent app package builds, unless the build script in the app package already contains a `--config` option.
- [`79e91d4c30a`](https://github.com/backstage/backstage/commit/79e91d4c30a): Support importing `.md` files in build loader
- [`3156b0d85dc`](https://github.com/backstage/backstage/commit/3156b0d85dc): Internal refactor to move many internal utilities to the new `@backstage/cli-node` package.
- [`b9839d7135c`](https://github.com/backstage/backstage/commit/b9839d7135c): Fixed backend start command on Windows by removing the use of platform dependent path joins.
- [`1e4f5e91b8e`](https://github.com/backstage/backstage/commit/1e4f5e91b8e): Bump `zod` and `zod-to-json-schema` dependencies.
- [`29ba8267d69`](https://github.com/backstage/backstage/commit/29ba8267d69): Updated dependency `@material-ui/lab` to `4.0.0-alpha.61`.
- [`9bbb00d5b49`](https://github.com/backstage/backstage/commit/9bbb00d5b49): Updated dependency `@swc/helpers` to `^0.5.0`.
- [`b588ab73972`](https://github.com/backstage/backstage/commit/b588ab73972): Ensure that the `package prepack` command and backend bundling uses posix paths in `package.json` on all OSes.
- [`c07c3b7364b`](https://github.com/backstage/backstage/commit/c07c3b7364b): Add `onboard` command. While still in development, this command aims to guide users in setting up their Backstage App.
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/core-plugin-api` (1.5.0 → [1.5.1](../../changelogs/@backstage/core-plugin-api.md#151))

#### 1.5.1

##### Patch Changes

- [`760f521b979`](https://github.com/backstage/backstage/commit/760f521b979): Add component name as data attribute for all components
- [`2898b6c8d52`](https://github.com/backstage/backstage/commit/2898b6c8d52): Minor type tweaks for TypeScript 5.0
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/dev-utils` (1.0.13 → [1.0.14](../../changelogs/@backstage/dev-utils.md#1014))

#### 1.0.14

##### Patch Changes

- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/eslint-plugin` (0.1.2 → [0.1.3](../../changelogs/@backstage/eslint-plugin.md#013))

#### 0.1.3

##### Patch Changes

- [`911c25de59c`](https://github.com/backstage/backstage/commit/911c25de59c): Add support for auto-fixing missing imports detected by the `no-undeclared-imports` rule.

### `@backstage/integration` (1.4.3 → [1.4.4](../../changelogs/@backstage/integration.md#144))

#### 1.4.4

##### Patch Changes

- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/integration-react` (1.1.11 → [1.1.12](../../changelogs/@backstage/integration-react.md#1112))

#### 1.1.12

##### Patch Changes

- [`29ba8267d69`](https://github.com/backstage/backstage/commit/29ba8267d69): Updated dependency `@material-ui/lab` to `4.0.0-alpha.61`.
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-adr-backend` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-adr-backend.md#032))

#### 0.3.2

##### Patch Changes

- [`7d75f6d9b8f`](https://github.com/backstage/backstage/commit/7d75f6d9b8f): chore: Improve API Reference documentation

### `@backstage/plugin-adr-common` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-adr-common.md#028))

#### 0.2.8

##### Patch Changes

- [`77aa3a4d47e`](https://github.com/backstage/backstage/commit/77aa3a4d47e): use path attribute to fetch files instead of name and update the UI to navigate over subdirectories

### `@backstage/plugin-airbrake` (0.3.16 → [0.3.17](../../changelogs/@backstage/plugin-airbrake.md#0317))

#### 0.3.17

##### Patch Changes

- [`7d75f6d9b8f`](https://github.com/backstage/backstage/commit/7d75f6d9b8f): chore: Improve API Reference documentation
- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-allure` (0.1.32 → [0.1.33](../../changelogs/@backstage/plugin-allure.md#0133))

#### 0.1.33

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-analytics-module-ga` (0.1.27 → [0.1.28](../../changelogs/@backstage/plugin-analytics-module-ga.md#0128))

#### 0.1.28

##### Patch Changes

- [`7d75f6d9b8f`](https://github.com/backstage/backstage/commit/7d75f6d9b8f): chore: Improve API Reference documentation
- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-apache-airflow` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-apache-airflow.md#0210))

#### 0.2.10

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-api-docs` (0.9.1 → [0.9.2](../../changelogs/@backstage/plugin-api-docs.md#092))

#### 0.9.2

##### Patch Changes

- [`ca50c3bbea1`](https://github.com/backstage/backstage/commit/ca50c3bbea1): Corrected styling of nested objects in AsyncAPI to avoid inappropriate uppercase text transformation of nested objects.
- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-api-docs-module-protoc-gen-doc` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-api-docs-module-protoc-gen-doc.md#012))

#### 0.1.2

##### Patch Changes

- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-apollo-explorer` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-apollo-explorer.md#0110))

#### 0.1.10

##### Patch Changes

- [`7d75f6d9b8f`](https://github.com/backstage/backstage/commit/7d75f6d9b8f): chore: Improve API Reference documentation
- [`29ba8267d69`](https://github.com/backstage/backstage/commit/29ba8267d69): Updated dependency `@material-ui/lab` to `4.0.0-alpha.61`.
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-auth-backend` (0.18.1 → [0.18.2](../../changelogs/@backstage/plugin-auth-backend.md#0182))

#### 0.18.2

##### Patch Changes

- [`d8f774c30df`](https://github.com/backstage/backstage/commit/d8f774c30df): Enforce the secret visibility of certificates and client secrets in the auth backend. Also, document all known options for each auth plugin.
- [`7908d72e033`](https://github.com/backstage/backstage/commit/7908d72e033): Introduce a new global config parameter, `enableExperimentalRedirectFlow`. When enabled, auth will happen with an in-window redirect flow rather than through a popup window.
- [`475abd1dc3f`](https://github.com/backstage/backstage/commit/475abd1dc3f): The `microsoft` (i.e. Azure) auth provider now supports negotiating tokens for
  Azure resources besides Microsoft Graph (e.g. AKS, Virtual Machines, Machine
  Learning Services, etc.). When the `/frame/handler` endpoint is called with an
  authorization code for a non-Microsoft Graph scope, the user profile will not be
  fetched. Similarly no user profile or photo data will be fetched by the backend
  if the `/refresh` endpoint is called with the `scope` query parameter strictly
  containing scopes for resources besides Microsoft Graph.

  Furthermore, the `offline_access` scope will be requested by default, even when
  it is not mentioned in the argument to `getAccessToken`. This means that any
  Azure access token can be automatically refreshed, even if the user has not
  signed in via Azure.

- [`6a900951336`](https://github.com/backstage/backstage/commit/6a900951336): Add common identify resolvers for `oidc` auth provider.
- [`a0ef1ec7349`](https://github.com/backstage/backstage/commit/a0ef1ec7349): Export Azure Easy Auth provider so it can actually be used.
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-azure-devops` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-azure-devops.md#028))

#### 0.2.8

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-azure-sites` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-azure-sites.md#016))

#### 0.1.6

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-badges` (0.2.40 → [0.2.41](../../changelogs/@backstage/plugin-badges.md#0241))

#### 0.2.41

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-bazaar` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-bazaar.md#027))

#### 0.2.7

##### Patch Changes

- [`fbd6f36611a`](https://github.com/backstage/backstage/commit/fbd6f36611a): Added the `docs` parameter (optional) to link the project documentation
- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`656914bb0ad`](https://github.com/backstage/backstage/commit/656914bb0ad): Added the `fullWidth` and `fullHeight` optional properties to the `BazaarPage`,
  to replicate the styling options available on the `BazaarOverviewCard`.
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-bazaar-backend` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-bazaar-backend.md#027))

#### 0.2.7

##### Patch Changes

- [`fbd6f36611a`](https://github.com/backstage/backstage/commit/fbd6f36611a): Added the `docs` parameter (optional) to link the project documentation

### `@backstage/plugin-bitrise` (0.1.43 → [0.1.44](../../changelogs/@backstage/plugin-bitrise.md#0144))

#### 0.1.44

##### Patch Changes

- [`55a969fe574`](https://github.com/backstage/backstage/commit/55a969fe574): Bumped `recharts` dependency to `^2.5.0`.
- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-catalog-backend-module-azure` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0115))

#### 0.1.15

##### Patch Changes

- [`62a725e3a94`](https://github.com/backstage/backstage/commit/62a725e3a94): Use the `LocationSpec` type from the `catalog-common` package in place of the deprecated `LocationSpec` from the `catalog-node` package.

### `@backstage/plugin-catalog-backend-module-github` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#027))

#### 0.2.7

##### Patch Changes

- [`3756dd98feb`](https://github.com/backstage/backstage/commit/3756dd98feb): `GitHubEntityProvider`: Add option to configure visibility filter via `app-config.yaml`.

  Please find how to configure visibility filter config at https://backstage.io/docs/integrations/github/discovery

- [`3160138d8d4`](https://github.com/backstage/backstage/commit/3160138d8d4): Implement `GithubMultiOrgEntityProvider` for sourcing group and user entities from multiple GitHub organizations

### `@backstage/plugin-catalog-backend-module-ldap` (0.5.10 → [0.5.11](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0511))

#### 0.5.11

##### Patch Changes

- [`c9a0fdcd2c8`](https://github.com/backstage/backstage/commit/c9a0fdcd2c8): Fix deprecated types.

### `@backstage/plugin-catalog-backend-module-msgraph` (0.5.2 → [0.5.3](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#053))

#### 0.5.3

##### Patch Changes

- [`c9a0fdcd2c8`](https://github.com/backstage/backstage/commit/c9a0fdcd2c8): Fix deprecated types.

### `@backstage/plugin-catalog-backend-module-openapi` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0110))

#### 0.1.10

##### Patch Changes

- [`c9a0fdcd2c8`](https://github.com/backstage/backstage/commit/c9a0fdcd2c8): Fix deprecated types.

### `@backstage/plugin-catalog-graph` (0.2.28 → [0.2.29](../../changelogs/@backstage/plugin-catalog-graph.md#0229))

#### 0.2.29

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-catalog-graphql` (0.3.19 → [0.3.20](../../changelogs/@backstage/plugin-catalog-graphql.md#0320))

#### 0.3.20

##### Patch Changes

- [`e47e69eadf0`](https://github.com/backstage/backstage/commit/e47e69eadf0): Updated dependency `@apollo/server` to `^4.0.0`.
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-catalog-import` (0.9.6 → [0.9.7](../../changelogs/@backstage/plugin-catalog-import.md#097))

#### 0.9.7

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-cicd-statistics` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-cicd-statistics.md#0119))

#### 0.1.19

##### Patch Changes

- [`55a969fe574`](https://github.com/backstage/backstage/commit/55a969fe574): Bumped `recharts` dependency to `^2.5.0`.
- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-cicd-statistics-module-gitlab` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-cicd-statistics-module-gitlab.md#0113))

#### 0.1.13

##### Patch Changes

- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-circleci` (0.3.16 → [0.3.17](../../changelogs/@backstage/plugin-circleci.md#0317))

#### 0.3.17

##### Patch Changes

- [`d14ac997c36`](https://github.com/backstage/backstage/commit/d14ac997c36): Add hover over CircleCI avatar icon to show user name in builds table
- [`7d75f6d9b8f`](https://github.com/backstage/backstage/commit/7d75f6d9b8f): chore: Improve API Reference documentation
- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-cloudbuild` (0.3.16 → [0.3.17](../../changelogs/@backstage/plugin-cloudbuild.md#0317))

#### 0.3.17

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-code-climate` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-code-climate.md#0117))

#### 0.1.17

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-code-coverage` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-code-coverage.md#0210))

#### 0.2.10

##### Patch Changes

- [`55a969fe574`](https://github.com/backstage/backstage/commit/55a969fe574): Bumped `recharts` dependency to `^2.5.0`.
- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-code-coverage-backend` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-code-coverage-backend.md#0210))

#### 0.2.10

##### Patch Changes

- [`d3645a62b74`](https://github.com/backstage/backstage/commit/d3645a62b74): Bump `xml2js` from 0.4.23 to 0.5.0

### `@backstage/plugin-codescene` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-codescene.md#0112))

#### 0.1.12

##### Patch Changes

- [`29ba8267d69`](https://github.com/backstage/backstage/commit/29ba8267d69): Updated dependency `@material-ui/lab` to `4.0.0-alpha.61`.
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-config-schema` (0.1.39 → [0.1.40](../../changelogs/@backstage/plugin-config-schema.md#0140))

#### 0.1.40

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-cost-insights` (0.12.5 → [0.12.6](../../changelogs/@backstage/plugin-cost-insights.md#0126))

#### 0.12.6

##### Patch Changes

- [`55a969fe574`](https://github.com/backstage/backstage/commit/55a969fe574): Bumped `recharts` dependency to `^2.5.0`.
- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-entity-feedback-backend` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-entity-feedback-backend.md#012))

#### 0.1.2

##### Patch Changes

- [`7eba760e6f6`](https://github.com/backstage/backstage/commit/7eba760e6f6): Added an endpoint to fetch anonymous aggregated results from an entity

### `@backstage/plugin-entity-feedback-common` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-entity-feedback-common.md#011))

#### 0.1.1

##### Patch Changes

- [`7eba760e6f6`](https://github.com/backstage/backstage/commit/7eba760e6f6): Added an endpoint to fetch anonymous aggregated results from an entity

### `@backstage/plugin-entity-validation` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-entity-validation.md#012))

#### 0.1.2

##### Patch Changes

- [`29ba8267d69`](https://github.com/backstage/backstage/commit/29ba8267d69): Updated dependency `@material-ui/lab` to `4.0.0-alpha.61`.
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-events-backend` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-events-backend.md#025))

#### 0.2.5

##### Patch Changes

- [`3538d9ad2c4`](https://github.com/backstage/backstage/commit/3538d9ad2c4): Export `DefaultEventBroker` to allow decoupling of the catalog and events backends in the `example-backend`.

  Please look at `plugins/events-backend/README.md` for the currently advised way to set up the event backend and catalog providers.

### `@backstage/plugin-explore` (0.4.1 → [0.4.2](../../changelogs/@backstage/plugin-explore.md#042))

#### 0.4.2

##### Patch Changes

- [`f9ea944422e`](https://github.com/backstage/backstage/commit/f9ea944422e): Extracted generic `CatalogKindExploreContent` component so that it is easy to show any component kinds in their own tab in the explore page.
- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-firehydrant` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-firehydrant.md#021))

#### 0.2.1

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-fossa` (0.2.48 → [0.2.49](../../changelogs/@backstage/plugin-fossa.md#0249))

#### 0.2.49

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-gcalendar` (0.3.12 → [0.3.13](../../changelogs/@backstage/plugin-gcalendar.md#0313))

#### 0.3.13

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-gcp-projects` (0.3.35 → [0.3.36](../../changelogs/@backstage/plugin-gcp-projects.md#0336))

#### 0.3.36

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-git-release-manager` (0.3.29 → [0.3.30](../../changelogs/@backstage/plugin-git-release-manager.md#0330))

#### 0.3.30

##### Patch Changes

- [`55a969fe574`](https://github.com/backstage/backstage/commit/55a969fe574): Bumped `recharts` dependency to `^2.5.0`.
- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-github-actions` (0.5.16 → [0.5.17](../../changelogs/@backstage/plugin-github-actions.md#0517))

#### 0.5.17

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-github-deployments` (0.1.47 → [0.1.48](../../changelogs/@backstage/plugin-github-deployments.md#0148))

#### 0.1.48

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-github-issues` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-github-issues.md#026))

#### 0.2.6

##### Patch Changes

- [`29ba8267d69`](https://github.com/backstage/backstage/commit/29ba8267d69): Updated dependency `@material-ui/lab` to `4.0.0-alpha.61`.
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-github-pull-requests-board` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-github-pull-requests-board.md#0111))

#### 0.1.11

##### Patch Changes

- [`2ef8aee1d0c`](https://github.com/backstage/backstage/commit/2ef8aee1d0c): Add a new "Archived" Filter Options to the Github Pull Requests Dashboard.

  When toggling this option on, the dashboard will display PRs from archived repositories.
  These PRs will not be displayed in the default filter.

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-gitops-profiles` (0.3.34 → [0.3.35](../../changelogs/@backstage/plugin-gitops-profiles.md#0335))

#### 0.3.35

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-gocd` (0.1.22 → [0.1.23](../../changelogs/@backstage/plugin-gocd.md#0123))

#### 0.1.23

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-graphiql` (0.2.48 → [0.2.49](../../changelogs/@backstage/plugin-graphiql.md#0249))

#### 0.2.49

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`8b9e8ece403`](https://github.com/backstage/backstage/commit/8b9e8ece403): Allow to pass lazy GraphQL endpoint URL
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-graphql-backend` (0.1.33 → [0.1.34](../../changelogs/@backstage/plugin-graphql-backend.md#0134))

#### 0.1.34

##### Patch Changes

- [`e47e69eadf0`](https://github.com/backstage/backstage/commit/e47e69eadf0): Updated dependency `@apollo/server` to `^4.0.0`.

### `@backstage/plugin-graphql-voyager` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-graphql-voyager.md#012))

#### 0.1.2

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-ilert` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-ilert.md#026))

#### 0.2.6

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-jenkins` (0.7.15 → [0.7.16](../../changelogs/@backstage/plugin-jenkins.md#0716))

#### 0.7.16

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-kafka` (0.3.16 → [0.3.17](../../changelogs/@backstage/plugin-kafka.md#0317))

#### 0.3.17

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-kubernetes-common` (0.6.1 → [0.6.2](../../changelogs/@backstage/plugin-kubernetes-common.md#062))

#### 0.6.2

##### Patch Changes

- [`804f6d16b0c`](https://github.com/backstage/backstage/commit/804f6d16b0c): Introduced proxy permission types to be used with the kubernetes proxy endpoint's permission framework integration.

### `@backstage/plugin-lighthouse` (0.4.1 → [0.4.2](../../changelogs/@backstage/plugin-lighthouse.md#042))

#### 0.4.2

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-linguist` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-linguist.md#012))

#### 0.1.2

##### Patch Changes

- [`29ba8267d69`](https://github.com/backstage/backstage/commit/29ba8267d69): Updated dependency `@material-ui/lab` to `4.0.0-alpha.61`.
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-microsoft-calendar` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-microsoft-calendar.md#012))

#### 0.1.2

##### Patch Changes

- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-newrelic` (0.3.34 → [0.3.35](../../changelogs/@backstage/plugin-newrelic.md#0335))

#### 0.3.35

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-newrelic-dashboard` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-newrelic-dashboard.md#0210))

#### 0.2.10

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-octopus-deploy` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-octopus-deploy.md#011))

#### 0.1.1

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-org` (0.6.6 → [0.6.7](../../changelogs/@backstage/plugin-org.md#067))

#### 0.6.7

##### Patch Changes

- [`d7c8d8c52dd`](https://github.com/backstage/backstage/commit/d7c8d8c52dd): Allow the title of the group profile card to use the title of the entity, if it is set.
- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`228ab677d31`](https://github.com/backstage/backstage/commit/228ab677d31): Added `entityLimit` to change the limit of entities displayed in the ownership boxes.

  [StoryBook Example for Ownership Card](https://backstage.io/storybook/?path=/story/plugins-org-ownership-card--default)

- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-org-react` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-org-react.md#016))

#### 0.1.6

##### Patch Changes

- [`29ba8267d69`](https://github.com/backstage/backstage/commit/29ba8267d69): Updated dependency `@material-ui/lab` to `4.0.0-alpha.61`.
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-pagerduty` (0.5.9 → [0.5.10](../../changelogs/@backstage/plugin-pagerduty.md#0510))

#### 0.5.10

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-periskop` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-periskop.md#0115))

#### 0.1.15

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-permission-backend` (0.5.18 → [0.5.19](../../changelogs/@backstage/plugin-permission-backend.md#0519))

#### 0.5.19

##### Patch Changes

- [`84946a580c4`](https://github.com/backstage/backstage/commit/84946a580c4): Introduced alpha export of the `permissionPlugin` for use in the new backend system, along with a `permissionModuleAllowAllPolicy` that can be used to allow all requests.
- [`1e4f5e91b8e`](https://github.com/backstage/backstage/commit/1e4f5e91b8e): Bump `zod` and `zod-to-json-schema` dependencies.

### `@backstage/plugin-permission-common` (0.7.4 → [0.7.5](../../changelogs/@backstage/plugin-permission-common.md#075))

#### 0.7.5

##### Patch Changes

- [`1e4f5e91b8e`](https://github.com/backstage/backstage/commit/1e4f5e91b8e): Bump `zod` and `zod-to-json-schema` dependencies.

### `@backstage/plugin-permission-node` (0.7.6 → [0.7.7](../../changelogs/@backstage/plugin-permission-node.md#077))

#### 0.7.7

##### Patch Changes

- [`788f0f5a152`](https://github.com/backstage/backstage/commit/788f0f5a152): Introduced alpha export of the `policyExtensionPoint` for use in the new backend system.
- [`71fd0966d10`](https://github.com/backstage/backstage/commit/71fd0966d10): Added createConditionAuthorizer utility function, which takes some permission conditions and returns a function that returns a definitive authorization result given a decision and a resource.
- [`1e4f5e91b8e`](https://github.com/backstage/backstage/commit/1e4f5e91b8e): Bump `zod` and `zod-to-json-schema` dependencies.

### `@backstage/plugin-permission-react` (0.4.11 → [0.4.12](../../changelogs/@backstage/plugin-permission-react.md#0412))

#### 0.4.12

##### Patch Changes

- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-playlist` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-playlist.md#018))

#### 0.1.8

##### Patch Changes

- [`1b3c0546047`](https://github.com/backstage/backstage/commit/1b3c0546047): Added config properties to change dynamically the group noun for all the components in the UI
- [`29ba8267d69`](https://github.com/backstage/backstage/commit/29ba8267d69): Updated dependency `@material-ui/lab` to `4.0.0-alpha.61`.
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-rollbar` (0.4.16 → [0.4.17](../../changelogs/@backstage/plugin-rollbar.md#0417))

#### 0.4.17

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-rollbar-backend` (0.1.40 → [0.1.41](../../changelogs/@backstage/plugin-rollbar-backend.md#0141))

#### 0.1.41

##### Patch Changes

- [`66b6cfc5716`](https://github.com/backstage/backstage/commit/66b6cfc5716): Replace `camelcase-keys` dependency with one with better compatibility.

### `@backstage/plugin-scaffolder-common` (1.2.6 → [1.2.7](../../changelogs/@backstage/plugin-scaffolder-common.md#127))

#### 1.2.7

##### Patch Changes

- [`65e989f4018`](https://github.com/backstage/backstage/commit/65e989f4018): Added permissions for authorizing parameters and steps
- [`48da4c46e45`](https://github.com/backstage/backstage/commit/48da4c46e45): Export `typeguard` for `isTemplateEntityV1beta3`
- [`bcae5aaf25c`](https://github.com/backstage/backstage/commit/bcae5aaf25c): Added permissions for authorizing actions
- [`65e989f4018`](https://github.com/backstage/backstage/commit/65e989f4018): Define optional `backstage:permissions` property to parameters and steps used to authorize part of the template using the permission framework

### `@backstage/plugin-scaffolder-node` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-scaffolder-node.md#012))

#### 0.1.2

##### Patch Changes

- [`e27ddc36dad`](https://github.com/backstage/backstage/commit/e27ddc36dad): Added a possibility to cancel the running task (executing of a scaffolder template)
- [`a7eb36c6e38`](https://github.com/backstage/backstage/commit/a7eb36c6e38): Improve type-check for scaffolder output parameters
- [`1e4f5e91b8e`](https://github.com/backstage/backstage/commit/1e4f5e91b8e): Bump `zod` and `zod-to-json-schema` dependencies.
- [`2898b6c8d52`](https://github.com/backstage/backstage/commit/2898b6c8d52): Minor type tweaks for TypeScript 5.0

### `@backstage/plugin-search-backend-module-pg` (0.5.4 → [0.5.5](../../changelogs/@backstage/plugin-search-backend-module-pg.md#055))

#### 0.5.5

##### Patch Changes

- [`1469daa409e`](https://github.com/backstage/backstage/commit/1469daa409e): Search backend modules migrated to the new backend system. For documentation on how to migrate, check out the [how to migrate to the new backend system guide](https://backstage.io/docs/features/search/how-to-guides/#how-to-migrate-your-backend-installation-to-use-search-together-with-the-new-backend-system).
- [`87ca22ce9c9`](https://github.com/backstage/backstage/commit/87ca22ce9c9): Fixed a bug that could cause orphaned PG connections to accumulate (eventually
  exhausting available connections) when errors were encountered earlier in the
  search indexing process.

### `@backstage/plugin-search-react` (1.5.1 → [1.5.2](../../changelogs/@backstage/plugin-search-react.md#152))

#### 1.5.2

##### Patch Changes

- [`b2e182cdfa4`](https://github.com/backstage/backstage/commit/b2e182cdfa4): Fixes a UI bug in search result item which rendered the item text with incorrect font size and color
- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-sentry` (0.5.1 → [0.5.2](../../changelogs/@backstage/plugin-sentry.md#052))

#### 0.5.2

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-shortcuts` (0.3.8 → [0.3.9](../../changelogs/@backstage/plugin-shortcuts.md#039))

#### 0.3.9

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`328ec5f96c6`](https://github.com/backstage/backstage/commit/328ec5f96c6): Added the Analytics event in the save handler of AddShortcut and EditShortcut
- [`99df676e324`](https://github.com/backstage/backstage/commit/99df676e324): Allow external links to be added as shortcuts
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-sonarqube` (0.6.5 → [0.6.6](../../changelogs/@backstage/plugin-sonarqube.md#066))

#### 0.6.6

##### Patch Changes

- [`5a368d12bc9`](https://github.com/backstage/backstage/commit/5a368d12bc9): amend getSecurityHotspotsUrl to conditionally remove project path if sonarqube is self hosted
- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-sonarqube-backend` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-sonarqube-backend.md#019))

#### 0.1.9

##### Patch Changes

- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-sonarqube-react` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-sonarqube-react.md#015))

#### 0.1.5

##### Patch Changes

- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-splunk-on-call` (0.4.5 → [0.4.6](../../changelogs/@backstage/plugin-splunk-on-call.md#046))

#### 0.4.6

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-stack-overflow` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-stack-overflow.md#0113))

#### 0.1.13

##### Patch Changes

- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-stackstorm` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-stackstorm.md#011))

#### 0.1.1

##### Patch Changes

- [`29ba8267d69`](https://github.com/backstage/backstage/commit/29ba8267d69): Updated dependency `@material-ui/lab` to `4.0.0-alpha.61`.
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-tech-insights` (0.3.8 → [0.3.9](../../changelogs/@backstage/plugin-tech-insights.md#039))

#### 0.3.9

##### Patch Changes

- [`f538b9c5b83`](https://github.com/backstage/backstage/commit/f538b9c5b83): The `Check` type now optionally includes the `failureMetadata` and `successMetadata` as returned by the `runChecks` call.
- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.27 → [0.1.28](../../changelogs/@backstage/plugin-tech-insights-backend-module-jsonfc.md#0128))

#### 0.1.28

##### Patch Changes

- [`9cb1db6546a`](https://github.com/backstage/backstage/commit/9cb1db6546a): When multiple fact retrievers are used for a check, allow for cases where only one returns a given fact

### `@backstage/plugin-tech-radar` (0.6.2 → [0.6.3](../../changelogs/@backstage/plugin-tech-radar.md#063))

#### 0.6.3

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-techdocs` (1.6.0 → [1.6.1](../../changelogs/@backstage/plugin-techdocs.md#161))

#### 1.6.1

##### Patch Changes

- [`6c809d1a41c`](https://github.com/backstage/backstage/commit/6c809d1a41c): Minor visual tweaks to adapt to changes in mkdocs-material v9
- [`b2e182cdfa4`](https://github.com/backstage/backstage/commit/b2e182cdfa4): Fixes a UI bug in search result item which rendered the item text with incorrect font size and color
- [`847a1eee3da`](https://github.com/backstage/backstage/commit/847a1eee3da): Change anchor links color in Techdocs content

  With the color (mkdocs supplied) used for anchor links the background and foreground colors do not have a sufficient contrast ratio. Using the link color from theme palette.

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`2e493480626`](https://github.com/backstage/backstage/commit/2e493480626): Fix a bug in sub-path navigation due to double addition of a sub-path if one was set up in `app.baseUrl`.
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-techdocs-addons-test-utils` (1.0.11 → [1.0.12](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#1012))

#### 1.0.12

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-techdocs-backend` (1.6.0 → [1.6.1](../../changelogs/@backstage/plugin-techdocs-backend.md#161))

#### 1.6.1

##### Patch Changes

- [`01ae205352e`](https://github.com/backstage/backstage/commit/01ae205352e): Collator factories instantiated in new backend system modules and now marked as deprecated. Will be continued to be exported publicly until the new backend system is fully rolled out.

### `@backstage/plugin-techdocs-module-addons-contrib` (1.0.11 → [1.0.12](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1012))

#### 1.0.12

##### Patch Changes

- [`c657d0a610e`](https://github.com/backstage/backstage/commit/c657d0a610e): Bump `photoswipe` dependency to `^5.3.7`.
- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-techdocs-react` (1.1.4 → [1.1.5](../../changelogs/@backstage/plugin-techdocs-react.md#115))

#### 1.1.5

##### Patch Changes

- [`7e0c7b09a47`](https://github.com/backstage/backstage/commit/7e0c7b09a47): Fix a bug that caused the header to not render when generating a document for the first time
- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-todo` (0.2.18 → [0.2.19](../../changelogs/@backstage/plugin-todo.md#0219))

#### 0.2.19

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-user-settings` (0.7.1 → [0.7.2](../../changelogs/@backstage/plugin-user-settings.md#072))

#### 0.7.2

##### Patch Changes

- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-vault` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-vault.md#0111))

#### 0.1.11

##### Patch Changes

- [`7c7f8d38a51`](https://github.com/backstage/backstage/commit/7c7f8d38a51): Use `fetchApi` instead of raw `fetch` in order to pass auth header if necessary.
- [`29ba8267d69`](https://github.com/backstage/backstage/commit/29ba8267d69): Updated dependency `@material-ui/lab` to `4.0.0-alpha.61`.
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/plugin-xcmetrics` (0.2.36 → [0.2.37](../../changelogs/@backstage/plugin-xcmetrics.md#0237))

#### 0.2.37

##### Patch Changes

- [`55a969fe574`](https://github.com/backstage/backstage/commit/55a969fe574): Bumped `recharts` dependency to `^2.5.0`.
- [`8e00acb28db`](https://github.com/backstage/backstage/commit/8e00acb28db): Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/theme` (0.2.18 → [0.2.19](../../changelogs/@backstage/theme.md#0219))

#### 0.2.19

##### Patch Changes

- [`303c2c3ce51`](https://github.com/backstage/backstage/commit/303c2c3ce51): Allow `closeButton` color in `DismissableBanner` to be configurable (via. `theme.palette.banner.closeButtonColor`)
- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@backstage/version-bridge` (1.0.3 → [1.0.4](../../changelogs/@backstage/version-bridge.md#104))

#### 1.0.4

##### Patch Changes

- [`e0c6e8b9c3c`](https://github.com/backstage/backstage/commit/e0c6e8b9c3c): Update peer dependencies

### `@techdocs/cli` (1.4.0 → [1.4.1](../../changelogs/@techdocs/cli.md#141))

#### 1.4.1

##### Patch Changes

- [`b348420a804`](https://github.com/backstage/backstage/commit/b348420a804): Adding global-agent to enable the ability to publish through a proxy

## Excluded dependency updates

- `@backstage/backend-defaults` (0.1.8 → [0.1.9](../../changelogs/@backstage/backend-defaults.md#019))
- `@backstage/backend-plugin-api` (0.5.0 → [0.5.1](../../changelogs/@backstage/backend-plugin-api.md#051))
- `@backstage/backend-test-utils` (0.1.35 → [0.1.36](../../changelogs/@backstage/backend-test-utils.md#0136))
- `@backstage/plugin-airbrake-backend` (0.2.16 → [0.2.17](../../changelogs/@backstage/plugin-airbrake-backend.md#0217))
- `@backstage/plugin-app-backend` (0.3.43 → [0.3.44](../../changelogs/@backstage/plugin-app-backend.md#0344))
- `@backstage/plugin-auth-node` (0.2.12 → [0.2.13](../../changelogs/@backstage/plugin-auth-node.md#0213))
- `@backstage/plugin-azure-devops-backend` (0.3.22 → [0.3.23](../../changelogs/@backstage/plugin-azure-devops-backend.md#0323))
- `@backstage/plugin-azure-sites-backend` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-azure-sites-backend.md#016))
- `@backstage/plugin-badges-backend` (0.1.37 → [0.1.38](../../changelogs/@backstage/plugin-badges-backend.md#0138))
- `@backstage/plugin-bitbucket-cloud-common` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#025))
- `@backstage/plugin-catalog-backend-module-aws` (0.1.17 → [0.1.18](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#0118))
- `@backstage/plugin-catalog-backend-module-bitbucket` (0.2.10 → [0.2.11](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket.md#0211))
- `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#0111))
- `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#019))
- `@backstage/plugin-catalog-backend-module-gerrit` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0112))
- `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#031))
- `@backstage/plugin-catalog-backend-module-puppetdb` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#011))
- `@backstage/plugin-catalog-common` (1.0.12 → [1.0.13](../../changelogs/@backstage/plugin-catalog-common.md#1013))
- `@backstage/plugin-catalog-node` (1.3.4 → [1.3.5](../../changelogs/@backstage/plugin-catalog-node.md#135))
- `@backstage/plugin-events-backend-module-aws-sqs` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#016))
- `@backstage/plugin-events-backend-module-azure` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-events-backend-module-azure.md#016))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#016))
- `@backstage/plugin-events-backend-module-gerrit` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#016))
- `@backstage/plugin-events-backend-module-github` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-events-backend-module-github.md#016))
- `@backstage/plugin-events-backend-module-gitlab` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#016))
- `@backstage/plugin-events-backend-test-utils` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-events-backend-test-utils.md#016))
- `@backstage/plugin-events-node` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-events-node.md#025))
- `@backstage/plugin-jenkins-backend` (0.1.33 → [0.1.34](../../changelogs/@backstage/plugin-jenkins-backend.md#0134))
- `@backstage/plugin-jenkins-common` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-jenkins-common.md#0115))
- `@backstage/plugin-kafka-backend` (0.2.36 → [0.2.37](../../changelogs/@backstage/plugin-kafka-backend.md#0237))
- `@backstage/plugin-linguist-backend` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-linguist-backend.md#021))
- `@backstage/plugin-periskop-backend` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-periskop-backend.md#0115))
- `@backstage/plugin-playlist-common` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-playlist-common.md#016))
- `@backstage/plugin-proxy-backend` (0.2.37 → [0.2.38](../../changelogs/@backstage/plugin-proxy-backend.md#0238))
- `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.18 → [0.2.19](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0219))
- `@backstage/plugin-scaffolder-backend-module-rails` (0.4.11 → [0.4.12](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0412))
- `@backstage/plugin-scaffolder-backend-module-sentry` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#014))
- `@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.16 → [0.2.17](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0217))
- `@backstage/plugin-search-common` (1.2.2 → [1.2.3](../../changelogs/@backstage/plugin-search-common.md#123))
- `@backstage/plugin-tech-insights-backend` (0.5.9 → [0.5.10](../../changelogs/@backstage/plugin-tech-insights-backend.md#0510))
- `@backstage/plugin-tech-insights-node` (0.4.1 → [0.4.2](../../changelogs/@backstage/plugin-tech-insights-node.md#042))
- `@backstage/plugin-todo-backend` (0.1.40 → [0.1.41](../../changelogs/@backstage/plugin-todo-backend.md#0141))
- `@backstage/plugin-user-settings-backend` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-user-settings-backend.md#018))
