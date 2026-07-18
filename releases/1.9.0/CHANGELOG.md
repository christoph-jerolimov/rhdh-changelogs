# Backstage Release 1.9.0 changelog

Changes between 1.8.3 and 1.9.0 — 171 changed and 6 added packages.

## Summary

- [Newly added packages](#newly-added-packages): 6 packages
- [Breaking changes](#breaking-changes): 8 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 7 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 1 package
- [Other minor version bumps](#other-minor-version-bumps): 13 packages
- [Other patch version bumps](#other-patch-version-bumps): 121 packages
- [Excluded dependency updates](#excluded-dependency-updates): 21 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/integration-aws-node` (new, 0.1.0)](#backstageintegration-aws-node-new-010)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (new, 0.1.0)](#backstageplugin-catalog-backend-module-incremental-ingestion-new-010)
  - [`@backstage/plugin-explore-backend` (new, 0.0.1)](#backstageplugin-explore-backend-new-001)
  - [`@backstage/plugin-explore-common` (new, 0.0.1)](#backstageplugin-explore-common-new-001)
  - [`@backstage/plugin-sonarqube-react` (new, 0.1.0)](#backstageplugin-sonarqube-react-new-010)
  - [`@backstage/repo-tools` (new, 0.1.0)](#backstagerepo-tools-new-010)
- [Breaking changes](#breaking-changes)
  - [`@backstage/backend-plugin-api` (0.1.4 → 0.2.0)](#backstagebackend-plugin-api-014--020)
  - [`@backstage/catalog-client` (1.1.2 → 1.2.0)](#backstagecatalog-client-112--120)
  - [`@backstage/plugin-catalog-backend` (1.5.1 → 1.6.0)](#backstageplugin-catalog-backend-151--160)
  - [`@backstage/plugin-events-backend` (0.1.0 → 0.2.0)](#backstageplugin-events-backend-010--020)
  - [`@backstage/plugin-events-node` (0.1.0 → 0.2.0)](#backstageplugin-events-node-010--020)
  - [`@backstage/plugin-explore` (0.3.42 → 0.3.43)](#backstageplugin-explore-0342--0343)
  - [`@backstage/plugin-explore-react` (0.0.23 → 0.0.24)](#backstageplugin-explore-react-0023--0024)
  - [`@backstage/plugin-sonarqube` (0.5.0 → 0.6.0)](#backstageplugin-sonarqube-050--060)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/backend-common` (0.16.0 → 0.17.0)](#backstagebackend-common-0160--0170)
  - [`@backstage/backend-tasks` (0.3.7 → 0.4.0)](#backstagebackend-tasks-037--040)
  - [`@backstage/cli` (0.21.1 → 0.22.0)](#backstagecli-0211--0220)
  - [`@backstage/plugin-kubernetes-backend` (0.8.0 → 0.9.0)](#backstageplugin-kubernetes-backend-080--090)
  - [`@backstage/plugin-kubernetes-common` (0.4.4 → 0.5.0)](#backstageplugin-kubernetes-common-044--050)
  - [`@backstage/plugin-search-backend-module-pg` (0.4.2 → 0.5.0)](#backstageplugin-search-backend-module-pg-042--050)
  - [`@backstage/plugin-user-settings` (0.5.1 → 0.6.0)](#backstageplugin-user-settings-051--060)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/release-manifests` (0.0.7 → 0.0.8)](#backstagerelease-manifests-007--008)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/core-app-api` (1.2.0 → 1.3.0)](#backstagecore-app-api-120--130)
  - [`@backstage/core-plugin-api` (1.1.0 → 1.2.0)](#backstagecore-plugin-api-110--120)
  - [`@backstage/plugin-catalog` (1.6.1 → 1.7.0)](#backstageplugin-catalog-161--170)
  - [`@backstage/plugin-catalog-node` (1.2.1 → 1.3.0)](#backstageplugin-catalog-node-121--130)
  - [`@backstage/plugin-scaffolder` (1.8.0 → 1.9.0)](#backstageplugin-scaffolder-180--190)
  - [`@backstage/plugin-scaffolder-backend` (1.8.0 → 1.9.0)](#backstageplugin-scaffolder-backend-180--190)
  - [`@backstage/plugin-search-backend` (1.1.1 → 1.2.0)](#backstageplugin-search-backend-111--120)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.0.4 → 1.1.0)](#backstageplugin-search-backend-module-elasticsearch-104--110)
  - [`@backstage/plugin-search-backend-node` (1.0.4 → 1.1.0)](#backstageplugin-search-backend-node-104--110)
  - [`@backstage/plugin-search-common` (1.1.1 → 1.2.0)](#backstageplugin-search-common-111--120)
  - [`@backstage/plugin-search-react` (1.2.1 → 1.3.0)](#backstageplugin-search-react-121--130)
  - [`@backstage/plugin-techdocs-backend` (1.4.1 → 1.5.0)](#backstageplugin-techdocs-backend-141--150)
  - [`@backstage/plugin-techdocs-react` (1.0.6 → 1.1.0)](#backstageplugin-techdocs-react-106--110)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/app-defaults` (1.0.8 → 1.0.9)](#backstageapp-defaults-108--109)
  - [`@backstage/backend-app-api` (0.2.3 → 0.2.4)](#backstagebackend-app-api-023--024)
  - [`@backstage/backend-defaults` (0.1.3 → 0.1.4)](#backstagebackend-defaults-013--014)
  - [`@backstage/backend-test-utils` (0.1.30 → 0.1.31)](#backstagebackend-test-utils-0130--0131)
  - [`@backstage/cli-common` (0.1.10 → 0.1.11)](#backstagecli-common-0110--0111)
  - [`@backstage/config-loader` (1.1.6 → 1.1.7)](#backstageconfig-loader-116--117)
  - [`@backstage/core-components` (0.12.0 → 0.12.1)](#backstagecore-components-0120--0121)
  - [`@backstage/create-app` (0.4.34 → 0.4.35)](#backstagecreate-app-0434--0435)
  - [`@backstage/dev-utils` (1.0.8 → 1.0.9)](#backstagedev-utils-108--109)
  - [`@backstage/errors` (1.1.3 → 1.1.4)](#backstageerrors-113--114)
  - [`@backstage/integration` (1.4.0 → 1.4.1)](#backstageintegration-140--141)
  - [`@backstage/integration-react` (1.1.6 → 1.1.7)](#backstageintegration-react-116--117)
  - [`@backstage/plugin-adr` (0.2.3 → 0.2.4)](#backstageplugin-adr-023--024)
  - [`@backstage/plugin-adr-backend` (0.2.3 → 0.2.4)](#backstageplugin-adr-backend-023--024)
  - [`@backstage/plugin-airbrake` (0.3.11 → 0.3.12)](#backstageplugin-airbrake-0311--0312)
  - [`@backstage/plugin-airbrake-backend` (0.2.11 → 0.2.12)](#backstageplugin-airbrake-backend-0211--0212)
  - [`@backstage/plugin-allure` (0.1.27 → 0.1.28)](#backstageplugin-allure-0127--0128)
  - [`@backstage/plugin-analytics-module-ga` (0.1.22 → 0.1.23)](#backstageplugin-analytics-module-ga-0122--0123)
  - [`@backstage/plugin-apache-airflow` (0.2.4 → 0.2.5)](#backstageplugin-apache-airflow-024--025)
  - [`@backstage/plugin-api-docs` (0.8.11 → 0.8.12)](#backstageplugin-api-docs-0811--0812)
  - [`@backstage/plugin-apollo-explorer` (0.1.4 → 0.1.5)](#backstageplugin-apollo-explorer-014--015)
  - [`@backstage/plugin-app-backend` (0.3.38 → 0.3.39)](#backstageplugin-app-backend-0338--0339)
  - [`@backstage/plugin-auth-backend` (0.17.1 → 0.17.2)](#backstageplugin-auth-backend-0171--0172)
  - [`@backstage/plugin-auth-node` (0.2.7 → 0.2.8)](#backstageplugin-auth-node-027--028)
  - [`@backstage/plugin-azure-devops` (0.2.2 → 0.2.3)](#backstageplugin-azure-devops-022--023)
  - [`@backstage/plugin-azure-devops-backend` (0.3.17 → 0.3.18)](#backstageplugin-azure-devops-backend-0317--0318)
  - [`@backstage/plugin-azure-sites` (0.1.0 → 0.1.1)](#backstageplugin-azure-sites-010--011)
  - [`@backstage/plugin-azure-sites-backend` (0.1.0 → 0.1.1)](#backstageplugin-azure-sites-backend-010--011)
  - [`@backstage/plugin-badges` (0.2.35 → 0.2.36)](#backstageplugin-badges-0235--0236)
  - [`@backstage/plugin-bazaar` (0.2.0 → 0.2.1)](#backstageplugin-bazaar-020--021)
  - [`@backstage/plugin-bazaar-backend` (0.2.1 → 0.2.2)](#backstageplugin-bazaar-backend-021--022)
  - [`@backstage/plugin-bitbucket-cloud-common` (0.2.1 → 0.2.2)](#backstageplugin-bitbucket-cloud-common-021--022)
  - [`@backstage/plugin-bitrise` (0.1.38 → 0.1.39)](#backstageplugin-bitrise-0138--0139)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.1.11 → 0.1.12)](#backstageplugin-catalog-backend-module-aws-0111--0112)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.1.9 → 0.1.10)](#backstageplugin-catalog-backend-module-azure-019--0110)
  - [`@backstage/plugin-catalog-backend-module-bitbucket` (0.2.5 → 0.2.6)](#backstageplugin-catalog-backend-module-bitbucket-025--026)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.5 → 0.1.6)](#backstageplugin-catalog-backend-module-bitbucket-cloud-015--016)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.3 → 0.1.4)](#backstageplugin-catalog-backend-module-bitbucket-server-013--014)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (0.1.6 → 0.1.7)](#backstageplugin-catalog-backend-module-gerrit-016--017)
  - [`@backstage/plugin-catalog-backend-module-github` (0.2.1 → 0.2.2)](#backstageplugin-catalog-backend-module-github-021--022)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.1.9 → 0.1.10)](#backstageplugin-catalog-backend-module-gitlab-019--0110)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.4.4 → 0.4.5)](#backstageplugin-catalog-backend-module-msgraph-044--045)
  - [`@backstage/plugin-catalog-backend-module-openapi` (0.1.4 → 0.1.5)](#backstageplugin-catalog-backend-module-openapi-014--015)
  - [`@backstage/plugin-catalog-graph` (0.2.23 → 0.2.24)](#backstageplugin-catalog-graph-0223--0224)
  - [`@backstage/plugin-catalog-graphql` (0.3.15 → 0.3.16)](#backstageplugin-catalog-graphql-0315--0316)
  - [`@backstage/plugin-catalog-import` (0.9.1 → 0.9.2)](#backstageplugin-catalog-import-091--092)
  - [`@backstage/plugin-catalog-react` (1.2.1 → 1.2.2)](#backstageplugin-catalog-react-121--122)
  - [`@backstage/plugin-circleci` (0.3.11 → 0.3.12)](#backstageplugin-circleci-0311--0312)
  - [`@backstage/plugin-cloudbuild` (0.3.11 → 0.3.12)](#backstageplugin-cloudbuild-0311--0312)
  - [`@backstage/plugin-code-climate` (0.1.11 → 0.1.12)](#backstageplugin-code-climate-0111--0112)
  - [`@backstage/plugin-code-coverage` (0.2.4 → 0.2.5)](#backstageplugin-code-coverage-024--025)
  - [`@backstage/plugin-code-coverage-backend` (0.2.4 → 0.2.5)](#backstageplugin-code-coverage-backend-024--025)
  - [`@backstage/plugin-codescene` (0.1.6 → 0.1.7)](#backstageplugin-codescene-016--017)
  - [`@backstage/plugin-config-schema` (0.1.34 → 0.1.35)](#backstageplugin-config-schema-0134--0135)
  - [`@backstage/plugin-cost-insights` (0.12.0 → 0.12.1)](#backstageplugin-cost-insights-0120--0121)
  - [`@backstage/plugin-dynatrace` (1.0.1 → 1.0.2)](#backstageplugin-dynatrace-101--102)
  - [`@backstage/plugin-events-backend-module-aws-sqs` (0.1.0 → 0.1.1)](#backstageplugin-events-backend-module-aws-sqs-010--011)
  - [`@backstage/plugin-events-backend-module-github` (0.1.0 → 0.1.1)](#backstageplugin-events-backend-module-github-010--011)
  - [`@backstage/plugin-events-backend-module-gitlab` (0.1.0 → 0.1.1)](#backstageplugin-events-backend-module-gitlab-010--011)
  - [`@backstage/plugin-firehydrant` (0.1.28 → 0.1.29)](#backstageplugin-firehydrant-0128--0129)
  - [`@backstage/plugin-fossa` (0.2.43 → 0.2.44)](#backstageplugin-fossa-0243--0244)
  - [`@backstage/plugin-gcalendar` (0.3.7 → 0.3.8)](#backstageplugin-gcalendar-037--038)
  - [`@backstage/plugin-gcp-projects` (0.3.30 → 0.3.31)](#backstageplugin-gcp-projects-0330--0331)
  - [`@backstage/plugin-git-release-manager` (0.3.24 → 0.3.25)](#backstageplugin-git-release-manager-0324--0325)
  - [`@backstage/plugin-github-actions` (0.5.11 → 0.5.12)](#backstageplugin-github-actions-0511--0512)
  - [`@backstage/plugin-github-deployments` (0.1.42 → 0.1.43)](#backstageplugin-github-deployments-0142--0143)
  - [`@backstage/plugin-github-issues` (0.2.0 → 0.2.1)](#backstageplugin-github-issues-020--021)
  - [`@backstage/plugin-github-pull-requests-board` (0.1.5 → 0.1.6)](#backstageplugin-github-pull-requests-board-015--016)
  - [`@backstage/plugin-gitops-profiles` (0.3.29 → 0.3.30)](#backstageplugin-gitops-profiles-0329--0330)
  - [`@backstage/plugin-gocd` (0.1.17 → 0.1.18)](#backstageplugin-gocd-0117--0118)
  - [`@backstage/plugin-graphiql` (0.2.43 → 0.2.44)](#backstageplugin-graphiql-0243--0244)
  - [`@backstage/plugin-graphql-backend` (0.1.28 → 0.1.29)](#backstageplugin-graphql-backend-0128--0129)
  - [`@backstage/plugin-home` (0.4.27 → 0.4.28)](#backstageplugin-home-0427--0428)
  - [`@backstage/plugin-ilert` (0.2.0 → 0.2.1)](#backstageplugin-ilert-020--021)
  - [`@backstage/plugin-jenkins` (0.7.10 → 0.7.11)](#backstageplugin-jenkins-0710--0711)
  - [`@backstage/plugin-jenkins-backend` (0.1.28 → 0.1.29)](#backstageplugin-jenkins-backend-0128--0129)
  - [`@backstage/plugin-kafka` (0.3.11 → 0.3.12)](#backstageplugin-kafka-0311--0312)
  - [`@backstage/plugin-kafka-backend` (0.2.31 → 0.2.32)](#backstageplugin-kafka-backend-0231--0232)
  - [`@backstage/plugin-kubernetes` (0.7.4 → 0.7.5)](#backstageplugin-kubernetes-074--075)
  - [`@backstage/plugin-lighthouse` (0.3.11 → 0.3.12)](#backstageplugin-lighthouse-0311--0312)
  - [`@backstage/plugin-newrelic` (0.3.29 → 0.3.30)](#backstageplugin-newrelic-0329--0330)
  - [`@backstage/plugin-org` (0.6.1 → 0.6.2)](#backstageplugin-org-061--062)
  - [`@backstage/plugin-org-react` (0.1.0 → 0.1.1)](#backstageplugin-org-react-010--011)
  - [`@backstage/plugin-pagerduty` (0.5.4 → 0.5.5)](#backstageplugin-pagerduty-054--055)
  - [`@backstage/plugin-periskop` (0.1.9 → 0.1.10)](#backstageplugin-periskop-019--0110)
  - [`@backstage/plugin-periskop-backend` (0.1.9 → 0.1.10)](#backstageplugin-periskop-backend-019--0110)
  - [`@backstage/plugin-permission-backend` (0.5.13 → 0.5.14)](#backstageplugin-permission-backend-0513--0514)
  - [`@backstage/plugin-permission-common` (0.7.1 → 0.7.2)](#backstageplugin-permission-common-071--072)
  - [`@backstage/plugin-permission-node` (0.7.1 → 0.7.2)](#backstageplugin-permission-node-071--072)
  - [`@backstage/plugin-permission-react` (0.4.7 → 0.4.8)](#backstageplugin-permission-react-047--048)
  - [`@backstage/plugin-playlist` (0.1.2 → 0.1.3)](#backstageplugin-playlist-012--013)
  - [`@backstage/plugin-playlist-backend` (0.2.1 → 0.2.2)](#backstageplugin-playlist-backend-021--022)
  - [`@backstage/plugin-proxy-backend` (0.2.32 → 0.2.33)](#backstageplugin-proxy-backend-0232--0233)
  - [`@backstage/plugin-rollbar` (0.4.11 → 0.4.12)](#backstageplugin-rollbar-0411--0412)
  - [`@backstage/plugin-rollbar-backend` (0.1.35 → 0.1.36)](#backstageplugin-rollbar-backend-0135--0136)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.13 → 0.2.14)](#backstageplugin-scaffolder-backend-module-cookiecutter-0213--0214)
  - [`@backstage/plugin-scaffolder-backend-module-rails` (0.4.6 → 0.4.7)](#backstageplugin-scaffolder-backend-module-rails-046--047)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.11 → 0.2.12)](#backstageplugin-scaffolder-backend-module-yeoman-0211--0212)
  - [`@backstage/plugin-search` (1.0.4 → 1.0.5)](#backstageplugin-search-104--105)
  - [`@backstage/plugin-sentry` (0.4.4 → 0.4.5)](#backstageplugin-sentry-044--045)
  - [`@backstage/plugin-shortcuts` (0.3.3 → 0.3.4)](#backstageplugin-shortcuts-033--034)
  - [`@backstage/plugin-sonarqube-backend` (0.1.3 → 0.1.4)](#backstageplugin-sonarqube-backend-013--014)
  - [`@backstage/plugin-splunk-on-call` (0.4.0 → 0.4.1)](#backstageplugin-splunk-on-call-040--041)
  - [`@backstage/plugin-stack-overflow` (0.1.7 → 0.1.8)](#backstageplugin-stack-overflow-017--018)
  - [`@backstage/plugin-stack-overflow-backend` (0.1.7 → 0.1.8)](#backstageplugin-stack-overflow-backend-017--018)
  - [`@backstage/plugin-tech-insights` (0.3.3 → 0.3.4)](#backstageplugin-tech-insights-033--034)
  - [`@backstage/plugin-tech-radar` (0.5.18 → 0.5.19)](#backstageplugin-tech-radar-0518--0519)
  - [`@backstage/plugin-techdocs` (1.4.0 → 1.4.1)](#backstageplugin-techdocs-140--141)
  - [`@backstage/plugin-techdocs-addons-test-utils` (1.0.6 → 1.0.7)](#backstageplugin-techdocs-addons-test-utils-106--107)
  - [`@backstage/plugin-techdocs-module-addons-contrib` (1.0.6 → 1.0.7)](#backstageplugin-techdocs-module-addons-contrib-106--107)
  - [`@backstage/plugin-techdocs-node` (1.4.2 → 1.4.3)](#backstageplugin-techdocs-node-142--143)
  - [`@backstage/plugin-todo` (0.2.13 → 0.2.14)](#backstageplugin-todo-0213--0214)
  - [`@backstage/plugin-todo-backend` (0.1.35 → 0.1.36)](#backstageplugin-todo-backend-0135--0136)
  - [`@backstage/plugin-user-settings-backend` (0.1.2 → 0.1.3)](#backstageplugin-user-settings-backend-012--013)
  - [`@backstage/plugin-vault` (0.1.5 → 0.1.6)](#backstageplugin-vault-015--016)
  - [`@backstage/plugin-vault-backend` (0.2.4 → 0.2.5)](#backstageplugin-vault-backend-024--025)
  - [`@backstage/plugin-xcmetrics` (0.2.31 → 0.2.32)](#backstageplugin-xcmetrics-0231--0232)
  - [`@backstage/test-utils` (1.2.2 → 1.2.3)](#backstagetest-utils-122--123)
  - [`@backstage/types` (1.0.1 → 1.0.2)](#backstagetypes-101--102)
  - [`@backstage/version-bridge` (1.0.2 → 1.0.3)](#backstageversion-bridge-102--103)
  - [`@techdocs/cli` (1.2.3 → 1.2.4)](#techdocscli-123--124)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/integration-aws-node` (new, [0.1.0](../../changelogs/@backstage/integration-aws-node.md#010))

#### 0.1.0

##### Minor Changes

- [`13278732f6`](https://github.com/backstage/backstage/commit/13278732f6): New package for AWS integration node library

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (new, [0.1.0](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#010))

#### 0.1.0

##### Minor Changes

- [`98c643a1a2`](https://github.com/backstage/backstage/commit/98c643a1a2): Introduces incremental entity providers, which are used for streaming very large data sources into the catalog.

##### Patch Changes

- [`c507aee8a2`](https://github.com/backstage/backstage/commit/c507aee8a2): Ensured typescript type checks in migration files.
- [`884d749b14`](https://github.com/backstage/backstage/commit/884d749b14): Refactored to use `coreServices` from `@backstage/backend-plugin-api`.
- [`de8a975911`](https://github.com/backstage/backstage/commit/de8a975911): Changed to use native `AbortController` and `AbortSignal` from Node.js, instead
  of the one from `node-abort-controller`. This is possible now that the minimum
  supported Node.js version of the project is 16.

  Note that their interfaces are very slightly different, but typically not in a
  way that matters to consumers. If you see any typescript errors as a direct
  result from this, they are compatible with each other in the ways that we
  interact with them, and should be possible to type-cast across without ill
  effects.

- [`05a928e296`](https://github.com/backstage/backstage/commit/05a928e296): Updated usages of types from `@backstage/backend-plugin-api`.
- [`61d4efe978`](https://github.com/backstage/backstage/commit/61d4efe978): Make incremental providers more resilient to failures

### `@backstage/plugin-explore-backend` (new, [0.0.1](../../changelogs/@backstage/plugin-explore-backend.md#001))

#### 0.0.1

##### Patch Changes

- [`4dec6f16be`](https://github.com/backstage/backstage/commit/4dec6f16be): Added new `@backstage/plugin-explore-backend` & `@backstage/plugin-explore-common` packages.

  This deprecates the `ExploreToolsConfig` API (in `@backstage/plugin-explore-react`) which is replaced by the `ExploreApi` & `ExploreClient`. The list of `ExploreTool` data can now be provided on the backend by either using the supplied `StaticExploreToolProvider` or by implementing a custom `ExploreToolProvider`. See the [explore-backend README](https://github.com/backstage/backstage/blob/master/plugins/explore-backend/README.md) for full details.

  NOTE: Existing installations that have customized the `ExploreToolConfig` will continue to work through the new `ExploreClient`. However, existing data should be migrated over to new `explore-backend` plugin as `ExploreToolConfig` will be removed in the future.

  BREAKING CHANGE: If you have previously installed the `explore` plugin, but not yet customized the `ExploreToolConfig` API in your `packages/app`, this will result in an empty list of tools.

### `@backstage/plugin-explore-common` (new, [0.0.1](../../changelogs/@backstage/plugin-explore-common.md#001))

#### 0.0.1

##### Patch Changes

- [`4dec6f16be`](https://github.com/backstage/backstage/commit/4dec6f16be): Added new `@backstage/plugin-explore-backend` & `@backstage/plugin-explore-common` packages.

  This deprecates the `ExploreToolsConfig` API (in `@backstage/plugin-explore-react`) which is replaced by the `ExploreApi` & `ExploreClient`. The list of `ExploreTool` data can now be provided on the backend by either using the supplied `StaticExploreToolProvider` or by implementing a custom `ExploreToolProvider`. See the [explore-backend README](https://github.com/backstage/backstage/blob/master/plugins/explore-backend/README.md) for full details.

  NOTE: Existing installations that have customized the `ExploreToolConfig` will continue to work through the new `ExploreClient`. However, existing data should be migrated over to new `explore-backend` plugin as `ExploreToolConfig` will be removed in the future.

  BREAKING CHANGE: If you have previously installed the `explore` plugin, but not yet customized the `ExploreToolConfig` API in your `packages/app`, this will result in an empty list of tools.

### `@backstage/plugin-sonarqube-react` (new, [0.1.0](../../changelogs/@backstage/plugin-sonarqube-react.md#010))

#### 0.1.0

##### Minor Changes

- [`6b59903bfa`](https://github.com/backstage/backstage/commit/6b59903bfa): Parts of plugin-sonarqube have been moved into a new plugin-sonarqube-react package. Additionally some types that were
  previously internal to plugin-sonarqube have been made public and will allow access for third-parties. As the sonarqube
  plugin has not yet reached 1.0 breaking changes are expected in the future. As such exports of plugin-sonarqube-react
  require importing via the `/alpha` entrypoint:

  ```ts
  import { sonarQubeApiRef } from '@backstage/plugin-sonarqube-react/alpha';

  const sonarQubeApi = useApi(sonarQubeApiRef);
  ```

  Moved from plugin-sonarqube to plugin-sonarqube-react:

  - isSonarQubeAvailable
  - SONARQUBE_PROJECT_KEY_ANNOTATION

  Exports that been introduced to plugin-sonarqube-react are documented in the [API report](https://github.com/backstage/backstage/blob/master/plugins/sonarqube-react/api-report.md).

### `@backstage/repo-tools` (new, [0.1.0](../../changelogs/@backstage/repo-tools.md#010))

#### 0.1.0

##### Minor Changes

- [`99713fd671`](https://github.com/backstage/backstage/commit/99713fd671): Introducing repo-tools package
- [`03843259b4`](https://github.com/backstage/backstage/commit/03843259b4): Api reference documentation improvements

  - breadcrumbs links semantics as code spans
  - new `@config` annotation to describe related config keys

##### Patch Changes

- [`9b1193f277`](https://github.com/backstage/backstage/commit/9b1193f277): declare dependencies
- [`a8611bcac4`](https://github.com/backstage/backstage/commit/a8611bcac4): Add new command options to the `api-report`

  - added `--allow-warnings`, `-a` to continue processing packages if selected packages have warnings
  - added `--allow-all-warnings` to continue processing packages any packages have warnings
  - added `--omit-messages`, `-o` to pass some warnings messages code to be omitted from the api-report.md files
  - The `paths` argument for this command now takes as default the value on `workspaces.packages` inside the root package.json
  - change the path resolution to use the `@backstage/cli-common` packages instead

- [`25ec5c0c3a`](https://github.com/backstage/backstage/commit/25ec5c0c3a): Include asset-types.d.ts while running the api report command
- [`71f80eb354`](https://github.com/backstage/backstage/commit/71f80eb354): add the command type-deps to the repo tool package.
- [`ac440299ef`](https://github.com/backstage/backstage/commit/ac440299ef): Updated api docs generation to be compatible with Docusaurus 2-alpha and 2.x.

## Breaking changes

### `@backstage/backend-plugin-api` (0.1.4 → [0.2.0](../../changelogs/@backstage/backend-plugin-api.md#020))

#### 0.2.0

##### Minor Changes

- [`884d749b14`](https://github.com/backstage/backstage/commit/884d749b14): **BREAKING**: All core service references are now exported via a single `coreServices` object. For example, the `loggerServiceRef` is now accessed via `coreServices.logger` instead.
- [`a025190552`](https://github.com/backstage/backstage/commit/a025190552): **BREAKING**: All service interfaces are now suffixed with `*Service`.

##### Patch Changes

- [`cb1c2781c0`](https://github.com/backstage/backstage/commit/cb1c2781c0): Updated `LoggerService` interface with more log methods and meta.
- [`d6dbf1792b`](https://github.com/backstage/backstage/commit/d6dbf1792b): Added initial support for registering shutdown hooks via `lifecycleServiceRef`.

### `@backstage/catalog-client` (1.1.2 → [1.2.0](../../changelogs/@backstage/catalog-client.md#120))

#### 1.2.0

##### Minor Changes

- [`00d90b520a`](https://github.com/backstage/backstage/commit/00d90b520a): **BREAKING PRODUCERS**: Added a new `getEntitiesByRefs` endpoint to `CatalogApi`, for efficient batch fetching of entities by ref.

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-catalog-backend` (1.5.1 → [1.6.0](../../changelogs/@backstage/plugin-catalog-backend.md#160))

#### 1.6.0

##### Minor Changes

- [`16891a212c`](https://github.com/backstage/backstage/commit/16891a212c): Added new `POST /entities/by-refs` endpoint, which allows you to efficiently
  batch-fetch entities by their entity ref. This can be useful e.g. in graphql
  resolvers or similar contexts where you need to fetch many entities at the same
  time.
- [`273ba3a77f`](https://github.com/backstage/backstage/commit/273ba3a77f): Deprecated Prometheus metrics in favour of OpenTelemtry metrics.
- [`c395abb5b2`](https://github.com/backstage/backstage/commit/c395abb5b2): The catalog no longer stops after the first processor `validateEntityKind`
  method returns `true` when validating entity kind shapes. Instead, it continues
  through all registered processors that have this method, and requires that _at
  least one_ of them returned true.

  The old behavior of stopping early made it harder to extend existing core kinds
  with additional fields, since the `BuiltinKindsEntityProcessor` is always
  present at the top of the processing chain and ensures that your additional
  validation code would never be run.

  This is technically a breaking change, although it should not affect anybody
  under normal circumstances, except if you had problematic validation code that
  you were unaware that it was not being run. That code may now start to exhibit
  those problems.

  If you need to disable this new behavior, `CatalogBuilder` as used in your
  `packages/backend/src/plugins/catalog.ts` file now has a
  `useLegacySingleProcessorValidation()` method to go back to the old behavior.

  ```diff
   const builder = await CatalogBuilder.create(env);
  +builder.useLegacySingleProcessorValidation();
  ```

- [`3072ebfdd7`](https://github.com/backstage/backstage/commit/3072ebfdd7): The search table also holds the original entity value now and the facets endpoint fetches the filtered entity data from the search table.

##### Patch Changes

- [`ba13ff663c`](https://github.com/backstage/backstage/commit/ba13ff663c): Added a new `catalog.rules[].location` configuration that makes it possible to configure catalog rules to only apply to specific locations, either via exact match or a glob pattern.
- [`d8593ce0e6`](https://github.com/backstage/backstage/commit/d8593ce0e6): Do not use deprecated `LocationSpec` from the `@backstage/plugin-catalog-node` package
- [`c507aee8a2`](https://github.com/backstage/backstage/commit/c507aee8a2): Ensured typescript type checks in migration files.
- [`2a8e3cc0b5`](https://github.com/backstage/backstage/commit/2a8e3cc0b5): Optimize `Stitcher` process to be more memory efficient
- [`884d749b14`](https://github.com/backstage/backstage/commit/884d749b14): Refactored to use `coreServices` from `@backstage/backend-plugin-api`.
- [`eacc8e2b55`](https://github.com/backstage/backstage/commit/eacc8e2b55): Make it possible for entity providers to supply only entity refs, instead of full entities, in `delta` mutation deletions.
- [`b05dcd5530`](https://github.com/backstage/backstage/commit/b05dcd5530): Move the `zod` dependency to a version that does not collide with other libraries
- [`5b3e2afa45`](https://github.com/backstage/backstage/commit/5b3e2afa45): Fixed deprecated use of `substr` into `substring`.
- [`71147d5c16`](https://github.com/backstage/backstage/commit/71147d5c16): Internal code reorganization.
- [`93870e4df1`](https://github.com/backstage/backstage/commit/93870e4df1): Track the last time the final entity changed with new timestamp "last updated at" data in final entities database, which gets updated with the time when final entity is updated.
- [`20a5161f04`](https://github.com/backstage/backstage/commit/20a5161f04): Adds MySQL support for the catalog-backend
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.
- [`e982f77fe3`](https://github.com/backstage/backstage/commit/e982f77fe3): Registered shutdown hook in experimental catalog plugin.
- [`b3fac9c107`](https://github.com/backstage/backstage/commit/b3fac9c107): Ignore attempts at emitting the current entity as a child of itself.

### `@backstage/plugin-events-backend` (0.1.0 → [0.2.0](../../changelogs/@backstage/plugin-events-backend.md#020))

#### 0.2.0

##### Minor Changes

- [`cf41eedf43`](https://github.com/backstage/backstage/commit/cf41eedf43): **BREAKING:** Remove required field `router` at `HttpPostIngressEventPublisher.fromConfig`
  and replace it with `bind(router: Router)`.
  Additionally, the path prefix `/http` will be added inside `HttpPostIngressEventPublisher`.

  ```diff
  // at packages/backend/src/plugins/events.ts
     const eventsRouter = Router();
  -  const httpRouter = Router();
  -  eventsRouter.use('/http', httpRouter);

     const http = HttpPostIngressEventPublisher.fromConfig({
       config: env.config,
       logger: env.logger,
  -    router: httpRouter,
     });
  +  http.bind(eventsRouter);
  ```

##### Patch Changes

- [`884d749b14`](https://github.com/backstage/backstage/commit/884d749b14): Refactored to use `coreServices` from `@backstage/backend-plugin-api`.
- [`cf41eedf43`](https://github.com/backstage/backstage/commit/cf41eedf43): Introduce a new interface `RequestDetails` to abstract `Request`
  providing access to request body and headers.

  **BREAKING:** Replace `request: Request` with `request: RequestDetails` at `RequestValidator`.

### `@backstage/plugin-events-node` (0.1.0 → [0.2.0](../../changelogs/@backstage/plugin-events-node.md#020))

#### 0.2.0

##### Minor Changes

- [`cf41eedf43`](https://github.com/backstage/backstage/commit/cf41eedf43): Introduce a new interface `RequestDetails` to abstract `Request`
  providing access to request body and headers.

  **BREAKING:** Replace `request: Request` with `request: RequestDetails` at `RequestValidator`.

### `@backstage/plugin-explore` (0.3.42 → [0.3.43](../../changelogs/@backstage/plugin-explore.md#0343))

#### 0.3.43

##### Patch Changes

- [`c8f49ed4d0`](https://github.com/backstage/backstage/commit/c8f49ed4d0): Update search links to only have header as linkable text
- [`2e701b3796`](https://github.com/backstage/backstage/commit/2e701b3796): Internal refactor to use `react-router-dom` rather than `react-router`.
- [`ea4a5be8f3`](https://github.com/backstage/backstage/commit/ea4a5be8f3): Adds styling to graph forcing it to always fill out the available space.
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.
- [`4dec6f16be`](https://github.com/backstage/backstage/commit/4dec6f16be): Added new `@backstage/plugin-explore-backend` & `@backstage/plugin-explore-common` packages.

  This deprecates the `ExploreToolsConfig` API (in `@backstage/plugin-explore-react`) which is replaced by the `ExploreApi` & `ExploreClient`. The list of `ExploreTool` data can now be provided on the backend by either using the supplied `StaticExploreToolProvider` or by implementing a custom `ExploreToolProvider`. See the [explore-backend README](https://github.com/backstage/backstage/blob/master/plugins/explore-backend/README.md) for full details.

  NOTE: Existing installations that have customized the `ExploreToolConfig` will continue to work through the new `ExploreClient`. However, existing data should be migrated over to new `explore-backend` plugin as `ExploreToolConfig` will be removed in the future.

  BREAKING CHANGE: If you have previously installed the `explore` plugin, but not yet customized the `ExploreToolConfig` API in your `packages/app`, this will result in an empty list of tools.

### `@backstage/plugin-explore-react` (0.0.23 → [0.0.24](../../changelogs/@backstage/plugin-explore-react.md#0024))

#### 0.0.24

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.
- [`4dec6f16be`](https://github.com/backstage/backstage/commit/4dec6f16be): Added new `@backstage/plugin-explore-backend` & `@backstage/plugin-explore-common` packages.

  This deprecates the `ExploreToolsConfig` API (in `@backstage/plugin-explore-react`) which is replaced by the `ExploreApi` & `ExploreClient`. The list of `ExploreTool` data can now be provided on the backend by either using the supplied `StaticExploreToolProvider` or by implementing a custom `ExploreToolProvider`. See the [explore-backend README](https://github.com/backstage/backstage/blob/master/plugins/explore-backend/README.md) for full details.

  NOTE: Existing installations that have customized the `ExploreToolConfig` will continue to work through the new `ExploreClient`. However, existing data should be migrated over to new `explore-backend` plugin as `ExploreToolConfig` will be removed in the future.

  BREAKING CHANGE: If you have previously installed the `explore` plugin, but not yet customized the `ExploreToolConfig` API in your `packages/app`, this will result in an empty list of tools.

### `@backstage/plugin-sonarqube` (0.5.0 → [0.6.0](../../changelogs/@backstage/plugin-sonarqube.md#060))

#### 0.6.0

##### Minor Changes

- [`6b59903bfa`](https://github.com/backstage/backstage/commit/6b59903bfa): Parts of plugin-sonarqube have been moved into a new plugin-sonarqube-react package. Additionally some types that were
  previously internal to plugin-sonarqube have been made public and will allow access for third-parties. As the sonarqube
  plugin has not yet reached 1.0 breaking changes are expected in the future. As such exports of plugin-sonarqube-react
  require importing via the `/alpha` entrypoint:

  ```ts
  import { sonarQubeApiRef } from '@backstage/plugin-sonarqube-react/alpha';

  const sonarQubeApi = useApi(sonarQubeApiRef);
  ```

  Moved from plugin-sonarqube to plugin-sonarqube-react:

  - isSonarQubeAvailable
  - SONARQUBE_PROJECT_KEY_ANNOTATION

  Exports that been introduced to plugin-sonarqube-react are documented in the [API report](https://github.com/backstage/backstage/blob/master/plugins/sonarqube-react/api-report.md).

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.
- [`17a8e32f39`](https://github.com/backstage/backstage/commit/17a8e32f39): Updated dependency `rc-progress` to `3.4.1`.
- [`3dee2f5ad0`](https://github.com/backstage/backstage/commit/3dee2f5ad0): Added links to the frontend and backend plugins in the readme.

## 0.x minor version bumps

### `@backstage/backend-common` (0.16.0 → [0.17.0](../../changelogs/@backstage/backend-common.md#0170))

#### 0.17.0

##### Minor Changes

- [`de8a975911`](https://github.com/backstage/backstage/commit/de8a975911): Changed to use native `AbortController` and `AbortSignal` from Node.js, instead
  of the one from `node-abort-controller`. This is possible now that the minimum
  supported Node.js version of the project is 16.

  Note that their interfaces are very slightly different, but typically not in a
  way that matters to consumers. If you see any typescript errors as a direct
  result from this, they are compatible with each other in the ways that we
  interact with them, and should be possible to type-cast across without ill
  effects.

##### Patch Changes

- [`d3fea4ae0a`](https://github.com/backstage/backstage/commit/d3fea4ae0a): Internal fixes to avoid implicit usage of globals
- [`98776e638a`](https://github.com/backstage/backstage/commit/98776e638a): Fixed GitlabUrlReader to include api tokens in API calls
- [`1f2b2de3fe`](https://github.com/backstage/backstage/commit/1f2b2de3fe): exported KubernetesContainerRunner, KubernetesContainerRunnerOptions, KubernetesContainerRunnerMountBase
- [`840f2113c6`](https://github.com/backstage/backstage/commit/840f2113c6): Fix `GitlabUrlReader.readTree` bug when there were no matching commits
- [`20a5161f04`](https://github.com/backstage/backstage/commit/20a5161f04): Adds MySQL support for the catalog-backend
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.
- [`9ce7866ecd`](https://github.com/backstage/backstage/commit/9ce7866ecd): Updated dependency `@kubernetes/client-node` to `0.18.0`.
- [`3c1302c07d`](https://github.com/backstage/backstage/commit/3c1302c07d): Updated dependency `@types/http-errors` to `^2.0.0`.
- [`6b82598bd8`](https://github.com/backstage/backstage/commit/6b82598bd8): Added the ability to understand Job Artifact URLs to the GitLab integration
- [`dfc8edf9c5`](https://github.com/backstage/backstage/commit/dfc8edf9c5): Internal refactor to avoid usage of deprecated symbols.
- [`8015ff1258`](https://github.com/backstage/backstage/commit/8015ff1258): Tweaked wording to use inclusive terminology
- [`8646067e07`](https://github.com/backstage/backstage/commit/8646067e07): Fixed `SingleHostDiscovery` so that it properly handles single-string `backend.listen` configurations such as `:80`.

### `@backstage/backend-tasks` (0.3.7 → [0.4.0](../../changelogs/@backstage/backend-tasks.md#040))

#### 0.4.0

##### Minor Changes

- [`de8a975911`](https://github.com/backstage/backstage/commit/de8a975911): Changed to use native `AbortController` and `AbortSignal` from Node.js, instead
  of the one from `node-abort-controller`. This is possible now that the minimum
  supported Node.js version of the project is 16.

  Note that their interfaces are very slightly different, but typically not in a
  way that matters to consumers. If you see any typescript errors as a direct
  result from this, they are compatible with each other in the ways that we
  interact with them, and should be possible to type-cast across without ill
  effects.

##### Patch Changes

- [`b05dcd5530`](https://github.com/backstage/backstage/commit/b05dcd5530): Move the `zod` dependency to a version that does not collide with other libraries

### `@backstage/cli` (0.21.1 → [0.22.0](../../changelogs/@backstage/cli.md#0220))

#### 0.22.0

##### Minor Changes

- [`736f893f72`](https://github.com/backstage/backstage/commit/736f893f72): The Jest configuration that was previously enabled with `BACKSTAGE_NEXT_TESTS` is now enabled by default. To revert to the old configuration you can now instead set `BACKSTAGE_OLD_TESTS`.

  This new configuration uses the `babel` coverage provider rather than `v8`. It used to be that `v8` worked better when using Sucrase for transpilation, but now that we have switched to SWC, `babel` seems to work better. In addition, the new configuration also enables source maps by default, as they no longer have a negative impact on code coverage accuracy, and it also enables a modified Jest runtime with additional caching of script objects.

##### Patch Changes

- [`91d050c140`](https://github.com/backstage/backstage/commit/91d050c140): changed tests created by create-plugin to follow eslint-rules best practices particularly testing-library/prefer-screen-queries and testing-library/render-result-naming-convention
- [`43b2b9c791`](https://github.com/backstage/backstage/commit/43b2b9c791): Removed the unused dependency on `@sucrase/jest-plugin`.
- [`dd721148b5`](https://github.com/backstage/backstage/commit/dd721148b5): Updated Jest coverage configuration to only apply either in the root project or package configuration, depending on whether repo or package tests are run.
- [`5850ef9b84`](https://github.com/backstage/backstage/commit/5850ef9b84): Fix webpack dev server issue where it wasn't serving `index.html` from correct endpoint on subsequent requests.
- [`b05dcd5530`](https://github.com/backstage/backstage/commit/b05dcd5530): Move the `zod` dependency to a version that does not collide with other libraries
- [`459a3457e1`](https://github.com/backstage/backstage/commit/459a3457e1): Bump `msw` version in default plugin/app templates
- [`c27eabef6b`](https://github.com/backstage/backstage/commit/c27eabef6b): Adds new web-library package option when generating a new plugin
- [`8fffe42708`](https://github.com/backstage/backstage/commit/8fffe42708): JSX and React Fast Refresh transforms are no longer enabled when bundling backend code.
- [`309f2daca4`](https://github.com/backstage/backstage/commit/309f2daca4): Updated dependency `esbuild` to `^0.16.0`.
- [`ee14bab716`](https://github.com/backstage/backstage/commit/ee14bab716): Updated dependency `minimatch` to `5.1.1` and switch version range to `^`.
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.
- [`ed0cf59c59`](https://github.com/backstage/backstage/commit/ed0cf59c59): Updated dependency `@rollup/plugin-commonjs` to `^23.0.0`.
- [`16b7c2fccd`](https://github.com/backstage/backstage/commit/16b7c2fccd): Updated dependency `@rollup/plugin-yaml` to `^4.0.0`.
- [`086c0bbb45`](https://github.com/backstage/backstage/commit/086c0bbb45): Updated dependency `@rollup/plugin-json` to `^5.0.0`.
- [`8015ff1258`](https://github.com/backstage/backstage/commit/8015ff1258): Tweaked wording to use inclusive terminology
- [`d9d9a7a134`](https://github.com/backstage/backstage/commit/d9d9a7a134): Removed all copyright notices from package templates.
- [`8e0358e18d`](https://github.com/backstage/backstage/commit/8e0358e18d): Added `--skip-install` parameter to `backstage-cli versions:bump`

### `@backstage/plugin-kubernetes-backend` (0.8.0 → [0.9.0](../../changelogs/@backstage/plugin-kubernetes-backend.md#090))

#### 0.9.0

##### Minor Changes

- [`2db8acffe7`](https://github.com/backstage/backstage/commit/2db8acffe7): Kubernetes plugin now gracefully surfaces transport-level errors (like DNS or timeout, or other socket errors) occurring while fetching data. This will be merged into any data that is fetched successfully, fixing a bug where the whole page would be empty if any fetch operation encountered such an error.

##### Patch Changes

- [`22e20b3a59`](https://github.com/backstage/backstage/commit/22e20b3a59): Clusters declared in the app-config can now have their CA configured via a local filesystem path using the `caFile` property.
- [`9ce7866ecd`](https://github.com/backstage/backstage/commit/9ce7866ecd): Updated dependency `@kubernetes/client-node` to `0.18.0`.
- [`b585179770`](https://github.com/backstage/backstage/commit/b585179770): Added Kubernetes proxy API route to backend Kubernetes plugin, allowing Backstage plugin developers to read/write new information from Kubernetes (if proper credentials are provided).

### `@backstage/plugin-kubernetes-common` (0.4.4 → [0.5.0](../../changelogs/@backstage/plugin-kubernetes-common.md#050))

#### 0.5.0

##### Minor Changes

- [`2db8acffe7`](https://github.com/backstage/backstage/commit/2db8acffe7): Kubernetes plugin now gracefully surfaces transport-level errors (like DNS or timeout, or other socket errors) occurring while fetching data. This will be merged into any data that is fetched successfully, fixing a bug where the whole page would be empty if any fetch operation encountered such an error.

##### Patch Changes

- [`9ce7866ecd`](https://github.com/backstage/backstage/commit/9ce7866ecd): Updated dependency `@kubernetes/client-node` to `0.18.0`.
- [`b585179770`](https://github.com/backstage/backstage/commit/b585179770): Added Kubernetes proxy API route to backend Kubernetes plugin, allowing Backstage plugin developers to read/write new information from Kubernetes (if proper credentials are provided).

### `@backstage/plugin-search-backend-module-pg` (0.4.2 → [0.5.0](../../changelogs/@backstage/plugin-search-backend-module-pg.md#050))

#### 0.5.0

##### Minor Changes

- [`e48fc1f1ae`](https://github.com/backstage/backstage/commit/e48fc1f1ae): Added the option to pass a logger to `PgSearchEngine` during instantiation. You may do so as follows:

  ```diff
  const searchEngine = await PgSearchEngine.fromConfig(env.config, {
    database: env.database,
  + logger: env.logger,
  });
  ```

- [`dff9843718`](https://github.com/backstage/backstage/commit/dff9843718): The search engine now better handles the case when it receives 0 documents at index-time. Prior to this change, the indexer would replace any existing index with an empty index, effectively deleting it. Now instead, a warning is logged, and any existing index is left alone (preserving the index from the last successful indexing attempt).

##### Patch Changes

- [`c507aee8a2`](https://github.com/backstage/backstage/commit/c507aee8a2): Ensured typescript type checks in migration files.

### `@backstage/plugin-user-settings` (0.5.1 → [0.6.0](../../changelogs/@backstage/plugin-user-settings.md#060))

#### 0.6.0

##### Minor Changes

- [`29bdda5442`](https://github.com/backstage/backstage/commit/29bdda5442): Added the ability to fully customize settings page. Deprecated UserSettingsTab in favour of SettingsLayout.Route

##### Patch Changes

- [`2e701b3796`](https://github.com/backstage/backstage/commit/2e701b3796): Internal refactor to use `react-router-dom` rather than `react-router`.
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.
- [`19356df560`](https://github.com/backstage/backstage/commit/19356df560): Updated dependency `zen-observable` to `^0.9.0`.
- [`c3fa90e184`](https://github.com/backstage/backstage/commit/c3fa90e184): Updated dependency `zen-observable` to `^0.10.0`.

## 0.0.x patch version bumps

### `@backstage/release-manifests` (0.0.7 → [0.0.8](../../changelogs/@backstage/release-manifests.md#008))

#### 0.0.8

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

## Other minor version bumps

### `@backstage/core-app-api` (1.2.0 → [1.3.0](../../changelogs/@backstage/core-app-api.md#130))

#### 1.3.0

##### Minor Changes

- [`e0d9c9559a`](https://github.com/backstage/backstage/commit/e0d9c9559a): Added a new `AppRouter` component and `app.createRoot()` method that replaces `app.getRouter()` and `app.getProvider()`, which are now deprecated. The new `AppRouter` component is a drop-in replacement for the old router component, while the new `app.createRoot()` method is used instead of the old provider component.

  An old app setup might look like this:

  ```tsx
  const app = createApp(/* ... */);

  const AppProvider = app.getProvider();
  const AppRouter = app.getRouter();

  const routes = ...;

  const App = () => (
    <AppProvider>
      <AlertDisplay />
      <OAuthRequestDialog />
      <AppRouter>
        <Root>{routes}</Root>
      </AppRouter>
    </AppProvider>
  );

  export default App;
  ```

  With these new APIs, the setup now looks like this:

  ```tsx
  import { AppRouter } from '@backstage/core-app-api';

  const app = createApp(/* ... */);

  const routes = ...;

  export default app.createRoot(
    <>
      <AlertDisplay />
      <OAuthRequestDialog />
      <AppRouter>
        <Root>{routes}</Root>
      </AppRouter>
    </>,
  );
  ```

  Note that `app.createRoot()` accepts a React element, rather than a component.

##### Patch Changes

- [`d3fea4ae0a`](https://github.com/backstage/backstage/commit/d3fea4ae0a): Internal fixes to avoid implicit usage of globals
- [`b05dcd5530`](https://github.com/backstage/backstage/commit/b05dcd5530): Move the `zod` dependency to a version that does not collide with other libraries
- [`b4b5b02315`](https://github.com/backstage/backstage/commit/b4b5b02315): Tweak feature flag registration so that it happens immediately before the first rendering of the app, rather than just after.
- [`6870b43dd1`](https://github.com/backstage/backstage/commit/6870b43dd1): Fix for the automatic rewriting of base URLs.
- [`203271b746`](https://github.com/backstage/backstage/commit/203271b746): Prevent duplicate feature flag components from rendering in the settings when using <FeatureFlagged /> components
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.
- [`19356df560`](https://github.com/backstage/backstage/commit/19356df560): Updated dependency `zen-observable` to `^0.9.0`.
- [`c3fa90e184`](https://github.com/backstage/backstage/commit/c3fa90e184): Updated dependency `zen-observable` to `^0.10.0`.
- [`8015ff1258`](https://github.com/backstage/backstage/commit/8015ff1258): Tweaked wording to use inclusive terminology
- [`653d7912ac`](https://github.com/backstage/backstage/commit/653d7912ac): Made `WebStorage` notify its subscribers when `localStorage` values change in other tabs/windows
- [`63310e3987`](https://github.com/backstage/backstage/commit/63310e3987): Apps will now rewrite the `app.baseUrl` configuration to match the current `location.origin`. The `backend.baseUrl` will also be rewritten in the same way when the `app.baseUrl` and `backend.baseUrl` have matching origins. This will reduce the need for separate frontend builds for different environments.

### `@backstage/core-plugin-api` (1.1.0 → [1.2.0](../../changelogs/@backstage/core-plugin-api.md#120))

#### 1.2.0

##### Minor Changes

- [`9a1864976a`](https://github.com/backstage/backstage/commit/9a1864976a): Added a new `display` property to the `AlertMessage` which can accept the values `permanent` or `transient`.

  Here's a rough example of how to trigger an alert using the new `display` property:

  ```ts
  import { alertApiRef, useApi } from '@backstage/core-plugin-api';

  const ExampleTransient = () => {
    const alertApi = useApi(alertApiRef);
    alertApi.post({
      message: 'Example of Transient Alert',
      severity: 'success',
      display: 'transient',
    });
  };
  ```

##### Patch Changes

- [`d56127c712`](https://github.com/backstage/backstage/commit/d56127c712): useRouteRef - Limit re-resolving to location pathname changes only
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.
- [`19356df560`](https://github.com/backstage/backstage/commit/19356df560): Updated dependency `zen-observable` to `^0.9.0`.
- [`c3fa90e184`](https://github.com/backstage/backstage/commit/c3fa90e184): Updated dependency `zen-observable` to `^0.10.0`.

### `@backstage/plugin-catalog` (1.6.1 → [1.7.0](../../changelogs/@backstage/plugin-catalog.md#170))

#### 1.7.0

##### Minor Changes

- [`6ffa47bb0a`](https://github.com/backstage/backstage/commit/6ffa47bb0a): Fixes in kind selectors (now `OwnershipCard` works again). `EntityKindPicker` now accepts an optional `allowedKinds` prop, just like `CatalogKindHeader`.
- [`462c1d012e`](https://github.com/backstage/backstage/commit/462c1d012e): Removed `CatalogKindHeader` from `DefaultCatalogPage`. Deprecated `CatalogKindHeader` in favour of `EntityKindPicker`.

##### Patch Changes

- [`d3fea4ae0a`](https://github.com/backstage/backstage/commit/d3fea4ae0a): Internal fixes to avoid implicit usage of globals
- [`ca04d97b09`](https://github.com/backstage/backstage/commit/ca04d97b09): Handle refresh entity error in `AboutCard`.
- [`2e701b3796`](https://github.com/backstage/backstage/commit/2e701b3796): Internal refactor to use `react-router-dom` rather than `react-router`.
- [`a19cffbeed`](https://github.com/backstage/backstage/commit/a19cffbeed): Update search links to only have header as linkable text
- [`19356df560`](https://github.com/backstage/backstage/commit/19356df560): Updated dependency `zen-observable` to `^0.9.0`.
- [`c3fa90e184`](https://github.com/backstage/backstage/commit/c3fa90e184): Updated dependency `zen-observable` to `^0.10.0`.
- [`387d1d5218`](https://github.com/backstage/backstage/commit/387d1d5218): Fixed Entity kind pluralisation in the `CatalogKindHeader` component.

### `@backstage/plugin-catalog-node` (1.2.1 → [1.3.0](../../changelogs/@backstage/plugin-catalog-node.md#130))

#### 1.3.0

##### Minor Changes

- [`eacc8e2b55`](https://github.com/backstage/backstage/commit/eacc8e2b55): Make it possible for entity providers to supply only entity refs, instead of full entities, in `delta` mutation deletions.

##### Patch Changes

- [`884d749b14`](https://github.com/backstage/backstage/commit/884d749b14): Refactored to use `coreServices` from `@backstage/backend-plugin-api`.

### `@backstage/plugin-scaffolder` (1.8.0 → [1.9.0](../../changelogs/@backstage/plugin-scaffolder.md#190))

#### 1.9.0

##### Minor Changes

- [`ddd1c3308d`](https://github.com/backstage/backstage/commit/ddd1c3308d): Implement Custom Field Explorer to view and play around with available installed custom field extensions
- [`adb1b01e32`](https://github.com/backstage/backstage/commit/adb1b01e32): Adds the ability to supply a `transformErrors` function to the `Stepper` for `/next`
- [`34a48cdc4f`](https://github.com/backstage/backstage/commit/34a48cdc4f): The `RepoUrlPicker` field extension now has an `allowedProjects` option for narrowing the selection of Bitbucket URLs.

##### Patch Changes

- [`d4d07cf55e`](https://github.com/backstage/backstage/commit/d4d07cf55e): Enabling the customization of the last step in the scaffolder template.

  To override the content you have to do the next:

  ```typescript jsx
  <TemplatePage ReviewStepComponent={YourCustomComponent} />
  ```

- [`ef803022f1`](https://github.com/backstage/backstage/commit/ef803022f1): Initialize all `formData` in the `Stepper` in `/next`
- [`9b1fadf6d8`](https://github.com/backstage/backstage/commit/9b1fadf6d8): Added `noHtml5Validate` prop to `FormProps` on `NextScaffolderPage`
- [`b05dcd5530`](https://github.com/backstage/backstage/commit/b05dcd5530): Move the `zod` dependency to a version that does not collide with other libraries
- [`2e701b3796`](https://github.com/backstage/backstage/commit/2e701b3796): Internal refactor to use `react-router-dom` rather than `react-router`.
- [`9000952e87`](https://github.com/backstage/backstage/commit/9000952e87): Form data is now passed to validator functions in 'next' scaffolder, so it's now possible to perform validation for fields that depend on other field values. This is something that we discourage due to the coupling that it creates, but is sometimes still the most sensible solution.

  ```typescript jsx
  export const myCustomValidation = (
    value: string,
    validation: FieldValidation,
    { apiHolder, formData }: { apiHolder: ApiHolder; formData: JsonObject },
  ) => {
    // validate
  };
  ```

- [`5b10b2485a`](https://github.com/backstage/backstage/commit/5b10b2485a): Parse `formData` from `window.location.query` for `scaffolder/next`
- [`57ad6553d0`](https://github.com/backstage/backstage/commit/57ad6553d0): Pass through `transformErrors` to `TemplateWizardPage`
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.
- [`19356df560`](https://github.com/backstage/backstage/commit/19356df560): Updated dependency `zen-observable` to `^0.9.0`.
- [`c3fa90e184`](https://github.com/backstage/backstage/commit/c3fa90e184): Updated dependency `zen-observable` to `^0.10.0`.
- [`5fb6d5e92e`](https://github.com/backstage/backstage/commit/5fb6d5e92e): Updated dependency `@react-hookz/web` to `^19.0.0`.
- [`146378c146`](https://github.com/backstage/backstage/commit/146378c146): Updated dependency `@react-hookz/web` to `^20.0.0`.
- [`380f549b75`](https://github.com/backstage/backstage/commit/380f549b75): bump `@rjsf/*-v5` dependencies
- [`a63e2df559`](https://github.com/backstage/backstage/commit/a63e2df559): fixed `headerOptions` not passed to `TemplatePage` component
- [`9b606366bf`](https://github.com/backstage/backstage/commit/9b606366bf): Bump `json-schema-library` to version `^7.3.9` which does not pull in the `gson-pointer` library
- [`db6310b6a0`](https://github.com/backstage/backstage/commit/db6310b6a0): Show input type array correctly on installed actions page.

### `@backstage/plugin-scaffolder-backend` (1.8.0 → [1.9.0](../../changelogs/@backstage/plugin-scaffolder-backend.md#190))

#### 1.9.0

##### Minor Changes

- [`a20a0ea698`](https://github.com/backstage/backstage/commit/a20a0ea698): Added `requiredConversationResolution` template option to `github:repo:create`, `github:repo:push` and `publish:github`
- [`b32005e98a`](https://github.com/backstage/backstage/commit/b32005e98a): Deprecated the `taskWorkers` option in RouterOptions in favor of `concurrentTasksLimit` which sets the limit of concurrent tasks in a single TaskWorker

  TaskWorker can now run multiple (defaults to 10) tasks concurrently using the `concurrentTasksLimit` option available in both `RouterOptions` and `CreateWorkerOptions`.

  To use the option to create a TaskWorker:

  ```diff
  const worker = await TaskWorker.create({
      taskBroker,
      actionRegistry,
      integrations,
      logger,
      workingDirectory,
      additionalTemplateFilters,
  +   concurrentTasksLimit: 10 // (1 to Infinity)
  });
  ```

- [`fc51bd8aa0`](https://github.com/backstage/backstage/commit/fc51bd8aa0): Add support for disabling Github repository wiki, issues and projects
- [`0053d07bee`](https://github.com/backstage/backstage/commit/0053d07bee): Update the `github:publish` action to allow passing wether to dismiss stale reviews on the protected default branch.

##### Patch Changes

- [`cb716004ef`](https://github.com/backstage/backstage/commit/cb716004ef): Internal refactor to improve tests
- [`935b66a646`](https://github.com/backstage/backstage/commit/935b66a646): Change step output template examples to use square bracket syntax.
- [`884d749b14`](https://github.com/backstage/backstage/commit/884d749b14): Refactored to use `coreServices` from `@backstage/backend-plugin-api`.
- [`b05dcd5530`](https://github.com/backstage/backstage/commit/b05dcd5530): Move the `zod` dependency to a version that does not collide with other libraries
- [`26404430bc`](https://github.com/backstage/backstage/commit/26404430bc): Use Json types from @backstage/types
- [`b07ccffad0`](https://github.com/backstage/backstage/commit/b07ccffad0): Backend now returns 'ui:options' value from template metadata, it can be used by all your custom scaffolder components.
- [`309f2daca4`](https://github.com/backstage/backstage/commit/309f2daca4): Updated dependency `esbuild` to `^0.16.0`.
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.
- [`19356df560`](https://github.com/backstage/backstage/commit/19356df560): Updated dependency `zen-observable` to `^0.9.0`.
- [`c3fa90e184`](https://github.com/backstage/backstage/commit/c3fa90e184): Updated dependency `zen-observable` to `^0.10.0`.

### `@backstage/plugin-search-backend` (1.1.1 → [1.2.0](../../changelogs/@backstage/plugin-search-backend.md#120))

#### 1.2.0

##### Minor Changes

- [`29ebc43a0b`](https://github.com/backstage/backstage/commit/29ebc43a0b): numberOfResults is now provided alongside the query result

##### Patch Changes

- [`b05dcd5530`](https://github.com/backstage/backstage/commit/b05dcd5530): Move the `zod` dependency to a version that does not collide with other libraries

### `@backstage/plugin-search-backend-module-elasticsearch` (1.0.4 → [1.1.0](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#110))

#### 1.1.0

##### Minor Changes

- [`29ebc43a0b`](https://github.com/backstage/backstage/commit/29ebc43a0b): numberOfResults is now provided alongside the query result
- [`dff9843718`](https://github.com/backstage/backstage/commit/dff9843718): The search engine now better handles the case when it receives 0 documents at index-time. Prior to this change, the indexer would replace any existing index with an empty index, effectively deleting it. Now instead, a warning is logged, and any existing index is left alone (preserving the index from the last successful indexing attempt).
- [`d09485ea79`](https://github.com/backstage/backstage/commit/d09485ea79): Added support for self hosted OpenSearch via new provider

##### Patch Changes

- [`45eb4d23cf`](https://github.com/backstage/backstage/commit/45eb4d23cf): Fixed a bug that prevented indices from being cleaned up under some circumstances, which could have led to shard exhaustion.

### `@backstage/plugin-search-backend-node` (1.0.4 → [1.1.0](../../changelogs/@backstage/plugin-search-backend-node.md#110))

#### 1.1.0

##### Minor Changes

- [`29ebc43a0b`](https://github.com/backstage/backstage/commit/29ebc43a0b): numberOfResults is now provided alongside the query result
- [`dff9843718`](https://github.com/backstage/backstage/commit/dff9843718): The search engine now better handles the case when it receives 0 documents at index-time. Prior to this change, the indexer would replace any existing index with an empty index, effectively deleting it. Now instead, a warning is logged, and any existing index is left alone (preserving the index from the last successful indexing attempt).

##### Patch Changes

- [`a962ce0551`](https://github.com/backstage/backstage/commit/a962ce0551): Wait for indexer initialization before finalizing indexing.
- [`de8a975911`](https://github.com/backstage/backstage/commit/de8a975911): Changed to use native `AbortController` and `AbortSignal` from Node.js, instead
  of the one from `node-abort-controller`. This is possible now that the minimum
  supported Node.js version of the project is 16.

  Note that their interfaces are very slightly different, but typically not in a
  way that matters to consumers. If you see any typescript errors as a direct
  result from this, they are compatible with each other in the ways that we
  interact with them, and should be possible to type-cast across without ill
  effects.

- [`683ced83f6`](https://github.com/backstage/backstage/commit/683ced83f6): Fixed a bug that could cause a `max listeners exceeded warning` to be logged when more than 10 collators were running simultaneously.
- [`81b1e7b0fe`](https://github.com/backstage/backstage/commit/81b1e7b0fe): Updated indexer and decorator base classes to take advantage of features introduced in Node.js v16; be sure you are running a [supported version of Node.js](https://backstage.io/docs/releases/v1.8.0#node-16-and-18).
- [`54c5836f7a`](https://github.com/backstage/backstage/commit/54c5836f7a): Use of `TestPipeline.withSubject()` is now deprecated. Instead, use the `fromCollator`, `fromDecorator`, or `fromIndexer` static methods to instantiate a test pipeline. You may also use the class' `withCollator`, `withDecorator`, and `withIndexer` instance methods to build test pipelines that consist of multiple test subjects.

### `@backstage/plugin-search-common` (1.1.1 → [1.2.0](../../changelogs/@backstage/plugin-search-common.md#120))

#### 1.2.0

##### Minor Changes

- [`29ebc43a0b`](https://github.com/backstage/backstage/commit/29ebc43a0b): numberOfResults (total number of results for a given query) can now be provided by each search engine and consumed as part of the search results response

### `@backstage/plugin-search-react` (1.2.1 → [1.3.0](../../changelogs/@backstage/plugin-search-react.md#130))

#### 1.3.0

##### Minor Changes

- [`29ebc43a0b`](https://github.com/backstage/backstage/commit/29ebc43a0b): The `value` of a search analytics event is now set as the total number of search results (when available)

##### Patch Changes

- [`2e701b3796`](https://github.com/backstage/backstage/commit/2e701b3796): Internal refactor to use `react-router-dom` rather than `react-router`.
- [`a19cffbeed`](https://github.com/backstage/backstage/commit/a19cffbeed): Update search links to only have header as linkable text

### `@backstage/plugin-techdocs-backend` (1.4.1 → [1.5.0](../../changelogs/@backstage/plugin-techdocs-backend.md#150))

#### 1.5.0

##### Minor Changes

- [`dfbdae092e`](https://github.com/backstage/backstage/commit/dfbdae092e): Added a new optional `accountId` to the configuration options of the AWS S3 publisher. Configuring this option will source credentials for the `accountId` in the `aws` app config section. See https://github.com/backstage/backstage/blob/master/packages/integration-aws-node/README.md for more details.

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-techdocs-react` (1.0.6 → [1.1.0](../../changelogs/@backstage/plugin-techdocs-react.md#110))

#### 1.1.0

##### Minor Changes

- [`786f1b1419`](https://github.com/backstage/backstage/commit/786f1b1419): Support older versions of react-router

##### Patch Changes

- [`cb716004ef`](https://github.com/backstage/backstage/commit/cb716004ef): Internal refactor to improve tests

## Other patch version bumps

### `@backstage/app-defaults` (1.0.8 → [1.0.9](../../changelogs/@backstage/app-defaults.md#109))

#### 1.0.9

##### Patch Changes

- [`2e701b3796`](https://github.com/backstage/backstage/commit/2e701b3796): Internal refactor to use `react-router-dom` rather than `react-router`.

### `@backstage/backend-app-api` (0.2.3 → [0.2.4](../../changelogs/@backstage/backend-app-api.md#024))

#### 0.2.4

##### Patch Changes

- [`cb1c2781c0`](https://github.com/backstage/backstage/commit/cb1c2781c0): Updated logger implementations to match interface changes.
- [`884d749b14`](https://github.com/backstage/backstage/commit/884d749b14): Refactored to use `coreServices` from `@backstage/backend-plugin-api`.
- [`afa3bf5657`](https://github.com/backstage/backstage/commit/afa3bf5657): Added `.stop()` method to `Backend`.
- [`d6dbf1792b`](https://github.com/backstage/backstage/commit/d6dbf1792b): Added `lifecycleFactory` implementation.
- [`05a928e296`](https://github.com/backstage/backstage/commit/05a928e296): Updated usages of types from `@backstage/backend-plugin-api`.
- [`5260d8fc7d`](https://github.com/backstage/backstage/commit/5260d8fc7d): Root scoped services are now always initialized, regardless of whether they're used by any features.

### `@backstage/backend-defaults` (0.1.3 → [0.1.4](../../changelogs/@backstage/backend-defaults.md#014))

#### 0.1.4

##### Patch Changes

- [`d6dbf1792b`](https://github.com/backstage/backstage/commit/d6dbf1792b): Added `lifecycleFactory` to default service factories.

### `@backstage/backend-test-utils` (0.1.30 → [0.1.31](../../changelogs/@backstage/backend-test-utils.md#0131))

#### 0.1.31

##### Patch Changes

- [`afa3bf5657`](https://github.com/backstage/backstage/commit/afa3bf5657): Backends started with `startTestBackend` are now automatically stopped after all tests have run.
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/cli-common` (0.1.10 → [0.1.11](../../changelogs/@backstage/cli-common.md#0111))

#### 0.1.11

##### Patch Changes

- [`8015ff1258`](https://github.com/backstage/backstage/commit/8015ff1258): Tweaked wording to use inclusive terminology

### `@backstage/config-loader` (1.1.6 → [1.1.7](../../changelogs/@backstage/config-loader.md#117))

#### 1.1.7

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.
- [`40e7e6e1a2`](https://github.com/backstage/backstage/commit/40e7e6e1a2): Updated dependency `typescript-json-schema` to `^0.55.0`.

### `@backstage/core-components` (0.12.0 → [0.12.1](../../changelogs/@backstage/core-components.md#0121))

#### 0.12.1

##### Patch Changes

- [`a236a8830d`](https://github.com/backstage/backstage/commit/a236a8830d): Update sidebar icon alignment
- [`d3fea4ae0a`](https://github.com/backstage/backstage/commit/d3fea4ae0a): Internal fixes to avoid implicit usage of globals
- [`b05dcd5530`](https://github.com/backstage/backstage/commit/b05dcd5530): Move the `zod` dependency to a version that does not collide with other libraries
- [`ea4a5be8f3`](https://github.com/backstage/backstage/commit/ea4a5be8f3): Create a variable for minimum height and add a prop named 'fit' for determining if the graph height should grow or be contained.
- [`2e701b3796`](https://github.com/backstage/backstage/commit/2e701b3796): Internal refactor to use `react-router-dom` rather than `react-router`.
- [`d2e3bf6737`](https://github.com/backstage/backstage/commit/d2e3bf6737): Made AlertDisplay not crash on undefined messages
- [`64a579a998`](https://github.com/backstage/backstage/commit/64a579a998): Add items prop to SupportButton. This prop can be used to override the items that would otherwise be grabbed from the config.
- [`5d3058355d`](https://github.com/backstage/backstage/commit/5d3058355d): Add `react/forbid-elements` linter rule for button, suggest Material UI `Button`
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.
- [`19356df560`](https://github.com/backstage/backstage/commit/19356df560): Updated dependency `zen-observable` to `^0.9.0`.
- [`c3fa90e184`](https://github.com/backstage/backstage/commit/c3fa90e184): Updated dependency `zen-observable` to `^0.10.0`.
- [`5fb6d5e92e`](https://github.com/backstage/backstage/commit/5fb6d5e92e): Updated dependency `@react-hookz/web` to `^19.0.0`.
- [`17a8e32f39`](https://github.com/backstage/backstage/commit/17a8e32f39): Updated dependency `rc-progress` to `3.4.1`.
- [`146378c146`](https://github.com/backstage/backstage/commit/146378c146): Updated dependency `@react-hookz/web` to `^20.0.0`.
- [`dfc8edf9c5`](https://github.com/backstage/backstage/commit/dfc8edf9c5): Internal refactor to avoid usage of deprecated symbols.
- [`8015ff1258`](https://github.com/backstage/backstage/commit/8015ff1258): Tweaked wording to use inclusive terminology
- [`830687539f`](https://github.com/backstage/backstage/commit/830687539f): Sync components in @backstage/core-components with the Component Design Guidelines
- [`1ae86ab5fb`](https://github.com/backstage/backstage/commit/1ae86ab5fb): Added an option to allow the `AlertMessage` to be self-closing. This is done with a new `display` property that is set to `transient` on the `AlertMessage` when triggering a message to the `AlertApi`. The length of time that these transient messages stay open for can be set using the `transientTimeoutMs` prop on the `AlertDisplay` in the `App.tsx`. Here is an example:

  ```diff
    const App = () => (
      <AppProvider>
  +     <AlertDisplay transientTimeoutMs={2500} />
        <OAuthRequestDialog />
        <AppRouter>
          <Root>{routes}</Root>
        </AppRouter>
      </AppProvider>
    );
  ```

  The above example will set the transient timeout to 2500ms from the default of 5000ms

- [`16e31e690f`](https://github.com/backstage/backstage/commit/16e31e690f): InfoCard - Remove subheader container when there is not a subheader or icon
- [`a5a2d12298`](https://github.com/backstage/backstage/commit/a5a2d12298): Added option to pass additional headers to `<ProxiedSignInPage />`, which are passed along with the request to the underlying provider
- [`91bba69ef8`](https://github.com/backstage/backstage/commit/91bba69ef8): Internal refactor to remove deprecated symbols.

### `@backstage/create-app` (0.4.34 → [0.4.35](../../changelogs/@backstage/create-app.md#0435))

#### 0.4.35

##### Patch Changes

- [`c4788dbb58`](https://github.com/backstage/backstage/commit/c4788dbb58): Fix dependency ordering in templated packages.
- [`83d3167594`](https://github.com/backstage/backstage/commit/83d3167594): Bumped create-app version.
- [`2cb6963f9b`](https://github.com/backstage/backstage/commit/2cb6963f9b): Bumped create-app version.
- [`6465ab3686`](https://github.com/backstage/backstage/commit/6465ab3686): Bumped create-app version.
- [`af1358bb07`](https://github.com/backstage/backstage/commit/af1358bb07): added default project name for CI job compatibility
- [`935b66a646`](https://github.com/backstage/backstage/commit/935b66a646): Change step output template examples to use square bracket syntax.
- [`dfb269fab2`](https://github.com/backstage/backstage/commit/dfb269fab2): Updated the template to have the `'/test'` proxy endpoint in `app-config.yaml` be commented out by default.
- [`d9b3753f87`](https://github.com/backstage/backstage/commit/d9b3753f87): Updated the app template to use the new `AppRouter` component instead of `app.getRouter()`, as well as `app.createRoot()` instead of `app.getProvider()`.

  To apply this change to an existing app, make the following change to `packages/app/src/App.tsx`:

  ```diff
  -import { FlatRoutes } from '@backstage/core-app-api';
  +import { AppRouter, FlatRoutes } from '@backstage/core-app-api';

   ...

  -const AppProvider = app.getProvider();
  -const AppRouter = app.getRouter();

   ...

  -const App = () => (
  +export default app.createRoot(
  -  <AppProvider>
  +  <>
       <AlertDisplay />
       <OAuthRequestDialog />
       <AppRouter>
         <Root>{routes}</Root>
       </AppRouter>
  -  </AppProvider>
  +  </>,
   );
  ```

  The final export step should end up looking something like this:

  ```tsx
  export default app.createRoot(
    <>
      <AlertDisplay />
      <OAuthRequestDialog />
      <AppRouter>
        <Root>{routes}</Root>
      </AppRouter>
    </>,
  );
  ```

  Note that `app.createRoot()` accepts a React element, rather than a component.

- [`71e75c0b70`](https://github.com/backstage/backstage/commit/71e75c0b70): Removed the `react-router` dependency from the app package, using only `react-router-dom` instead.

  This change is just a bit of cleanup and is optional. If you want to apply it to your app, remove the `react-router` dependency from `packages/app/package.json`, and replace any imports from `react-router` with `react-router-dom` instead.

### `@backstage/dev-utils` (1.0.8 → [1.0.9](../../changelogs/@backstage/dev-utils.md#109))

#### 1.0.9

##### Patch Changes

- [`2e701b3796`](https://github.com/backstage/backstage/commit/2e701b3796): Internal refactor to use `react-router-dom` rather than `react-router`.
- [`19356df560`](https://github.com/backstage/backstage/commit/19356df560): Updated dependency `zen-observable` to `^0.9.0`.
- [`c3fa90e184`](https://github.com/backstage/backstage/commit/c3fa90e184): Updated dependency `zen-observable` to `^0.10.0`.
- [`8015ff1258`](https://github.com/backstage/backstage/commit/8015ff1258): Tweaked wording to use inclusive terminology

### `@backstage/errors` (1.1.3 → [1.1.4](../../changelogs/@backstage/errors.md#114))

#### 1.1.4

##### Patch Changes

- [`ac6cc9f7bd`](https://github.com/backstage/backstage/commit/ac6cc9f7bd): Removed a circular import

### `@backstage/integration` (1.4.0 → [1.4.1](../../changelogs/@backstage/integration.md#141))

#### 1.4.1

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.
- [`34b039ca9f`](https://github.com/backstage/backstage/commit/34b039ca9f): Added `integrations.github.apps.allowedInstallationOwners` to the configuration schema.

### `@backstage/integration-react` (1.1.6 → [1.1.7](../../changelogs/@backstage/integration-react.md#117))

#### 1.1.7

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-adr` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-adr.md#024))

#### 0.2.4

##### Patch Changes

- [`a19cffbeed`](https://github.com/backstage/backstage/commit/a19cffbeed): Update search links to only have header as linkable text
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-adr-backend` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-adr-backend.md#024))

#### 0.2.4

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-airbrake` (0.3.11 → [0.3.12](../../changelogs/@backstage/plugin-airbrake.md#0312))

#### 0.3.12

##### Patch Changes

- [`2e701b3796`](https://github.com/backstage/backstage/commit/2e701b3796): Internal refactor to use `react-router-dom` rather than `react-router`.
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.
- [`151c0e1477`](https://github.com/backstage/backstage/commit/151c0e1477): Remove the `object-hash` dependency

### `@backstage/plugin-airbrake-backend` (0.2.11 → [0.2.12](../../changelogs/@backstage/plugin-airbrake-backend.md#0212))

#### 0.2.12

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-allure` (0.1.27 → [0.1.28](../../changelogs/@backstage/plugin-allure.md#0128))

#### 0.1.28

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-analytics-module-ga` (0.1.22 → [0.1.23](../../changelogs/@backstage/plugin-analytics-module-ga.md#0123))

#### 0.1.23

##### Patch Changes

- [`d3fea4ae0a`](https://github.com/backstage/backstage/commit/d3fea4ae0a): Internal fixes to avoid implicit usage of globals
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.
- [`9516b0c355`](https://github.com/backstage/backstage/commit/9516b0c355): Added support for sending virtual pageviews on `search` events in order to enable
  Site Search functionality in GA. For more information consult [README](/plugins/analytics-module-ga/README.md#enabling-site-search)

### `@backstage/plugin-apache-airflow` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-apache-airflow.md#025))

#### 0.2.5

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-api-docs` (0.8.11 → [0.8.12](../../changelogs/@backstage/plugin-api-docs.md#0812))

#### 0.8.12

##### Patch Changes

- [`2e701b3796`](https://github.com/backstage/backstage/commit/2e701b3796): Internal refactor to use `react-router-dom` rather than `react-router`.
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-apollo-explorer` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-apollo-explorer.md#015))

#### 0.1.5

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-app-backend` (0.3.38 → [0.3.39](../../changelogs/@backstage/plugin-app-backend.md#0339))

#### 0.3.39

##### Patch Changes

- [`884d749b14`](https://github.com/backstage/backstage/commit/884d749b14): Refactored to use `coreServices` from `@backstage/backend-plugin-api`.
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-auth-backend` (0.17.1 → [0.17.2](../../changelogs/@backstage/plugin-auth-backend.md#0172))

#### 0.17.2

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-auth-node` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-auth-node.md#028))

#### 0.2.8

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-azure-devops` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-azure-devops.md#023))

#### 0.2.3

##### Patch Changes

- [`2e701b3796`](https://github.com/backstage/backstage/commit/2e701b3796): Internal refactor to use `react-router-dom` rather than `react-router`.
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-azure-devops-backend` (0.3.17 → [0.3.18](../../changelogs/@backstage/plugin-azure-devops-backend.md#0318))

#### 0.3.18

##### Patch Changes

- [`eaccf6d628`](https://github.com/backstage/backstage/commit/eaccf6d628): Updated installation documentation
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-azure-sites` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-azure-sites.md#011))

#### 0.1.1

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-azure-sites-backend` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-azure-sites-backend.md#011))

#### 0.1.1

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-badges` (0.2.35 → [0.2.36](../../changelogs/@backstage/plugin-badges.md#0236))

#### 0.2.36

##### Patch Changes

- [`2e701b3796`](https://github.com/backstage/backstage/commit/2e701b3796): Internal refactor to use `react-router-dom` rather than `react-router`.
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-bazaar` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-bazaar.md#021))

#### 0.2.1

##### Patch Changes

- [`9b1891061c`](https://github.com/backstage/backstage/commit/9b1891061c): `HomePageBazaarInfoCard` is now displaying `title` instead of `name`. Title is a string that doesn't have to be URL friendly.
  The BazaarOverviewCard have the new property `fullHeight`. Link in `BazaarOverviewCard`is moved to header in card.
- [`312962da30`](https://github.com/backstage/backstage/commit/312962da30): Add `title` as optional parameter to `BazaarOverviewCard`

### `@backstage/plugin-bazaar-backend` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-bazaar-backend.md#022))

#### 0.2.2

##### Patch Changes

- [`c507aee8a2`](https://github.com/backstage/backstage/commit/c507aee8a2): Ensured typescript type checks in migration files.
- [`9b1891061c`](https://github.com/backstage/backstage/commit/9b1891061c): Column `title` has replaced column `name` for `BazaarProject` in database

### `@backstage/plugin-bitbucket-cloud-common` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#022))

#### 0.2.2

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-bitrise` (0.1.38 → [0.1.39](../../changelogs/@backstage/plugin-bitrise.md#0139))

#### 0.1.39

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-catalog-backend-module-aws` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#0112))

#### 0.1.12

##### Patch Changes

- [`884d749b14`](https://github.com/backstage/backstage/commit/884d749b14): Refactored to use `coreServices` from `@backstage/backend-plugin-api`.

### `@backstage/plugin-catalog-backend-module-azure` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0110))

#### 0.1.10

##### Patch Changes

- [`884d749b14`](https://github.com/backstage/backstage/commit/884d749b14): Refactored to use `coreServices` from `@backstage/backend-plugin-api`.
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-catalog-backend-module-bitbucket` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket.md#026))

#### 0.2.6

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#016))

#### 0.1.6

##### Patch Changes

- [`ce08e1798e`](https://github.com/backstage/backstage/commit/ce08e1798e): Refresh (potentially) updated catalog files on `repo:push` more efficiently.
- [`884d749b14`](https://github.com/backstage/backstage/commit/884d749b14): Refactored to use `coreServices` from `@backstage/backend-plugin-api`.
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.
- [`4eb0bce299`](https://github.com/backstage/backstage/commit/4eb0bce299): Fix repo:push topic not matching `BitbucketCloudEventRouter`.

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#014))

#### 0.1.4

##### Patch Changes

- [`884d749b14`](https://github.com/backstage/backstage/commit/884d749b14): Refactored to use `coreServices` from `@backstage/backend-plugin-api`.
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-catalog-backend-module-gerrit` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#017))

#### 0.1.7

##### Patch Changes

- [`884d749b14`](https://github.com/backstage/backstage/commit/884d749b14): Refactored to use `coreServices` from `@backstage/backend-plugin-api`.
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-catalog-backend-module-github` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#022))

#### 0.2.2

##### Patch Changes

- [`70fa5ec3ec`](https://github.com/backstage/backstage/commit/70fa5ec3ec): Fixes the assignment of group member references in `GithubMultiOrgProcessor` so membership relations are resolved correctly.
- [`884d749b14`](https://github.com/backstage/backstage/commit/884d749b14): Refactored to use `coreServices` from `@backstage/backend-plugin-api`.
- [`fe93cce743`](https://github.com/backstage/backstage/commit/fe93cce743): Added the githubCredentialsProvider property to the GithubLocationAnalyzerOptions to be able to override the GithubCredentialsProvider.
- [`a0fd4af94a`](https://github.com/backstage/backstage/commit/a0fd4af94a): Handle GitHub `push` events at the `GithubEntityProvider` by subscribing to the topic `github.push.`

  Implements `EventSubscriber` to receive events for the topic `github.push`.

  On `github.push`, the affected repository will be refreshed.
  This includes adding new Location entities, refreshing existing ones,
  and removing obsolete ones.

  Please find more information at
  https://backstage.io/docs/integrations/github/discovery#installation-with-events-support

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.
- [`754b5854df`](https://github.com/backstage/backstage/commit/754b5854df): Fix incorrectly exported GithubOrgEntityProvider as a type

### `@backstage/plugin-catalog-backend-module-gitlab` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#0110))

#### 0.1.10

##### Patch Changes

- [`884d749b14`](https://github.com/backstage/backstage/commit/884d749b14): Refactored to use `coreServices` from `@backstage/backend-plugin-api`.
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-catalog-backend-module-msgraph` (0.4.4 → [0.4.5](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#045))

#### 0.4.5

##### Patch Changes

- [`884d749b14`](https://github.com/backstage/backstage/commit/884d749b14): Refactored to use `coreServices` from `@backstage/backend-plugin-api`.
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-catalog-backend-module-openapi` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#015))

#### 0.1.5

##### Patch Changes

- [`dd995cdc72`](https://github.com/backstage/backstage/commit/dd995cdc72): Enabled support of resolving `$refs` in all kind of yaml documents, not only OpenAPI. This implicitly adds `$ref` resolving support for AsyncAPI specs. Thus, the `openApiPlaceholderResolver` has been renamed to `jsonSchemaRefPlaceholderResolver`.

### `@backstage/plugin-catalog-graph` (0.2.23 → [0.2.24](../../changelogs/@backstage/plugin-catalog-graph.md#0224))

#### 0.2.24

##### Patch Changes

- [`cb716004ef`](https://github.com/backstage/backstage/commit/cb716004ef): Internal refactor to improve tests
- [`2e701b3796`](https://github.com/backstage/backstage/commit/2e701b3796): Internal refactor to use `react-router-dom` rather than `react-router`.
- [`454f2e90db`](https://github.com/backstage/backstage/commit/454f2e90db): Set the default `maxDepth` prop for `EntityRelationsGraph` to a smaller value to provide better readability.

### `@backstage/plugin-catalog-graphql` (0.3.15 → [0.3.16](../../changelogs/@backstage/plugin-catalog-graphql.md#0316))

#### 0.3.16

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-catalog-import` (0.9.1 → [0.9.2](../../changelogs/@backstage/plugin-catalog-import.md#092))

#### 0.9.2

##### Patch Changes

- [`2e701b3796`](https://github.com/backstage/backstage/commit/2e701b3796): Internal refactor to use `react-router-dom` rather than `react-router`.
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-catalog-react` (1.2.1 → [1.2.2](../../changelogs/@backstage/plugin-catalog-react.md#122))

#### 1.2.2

##### Patch Changes

- [`2cb9998`](https://github.com/backstage/backstage/commit/2cb9998): Fixed bug in `EntityOwnerPicker` and `EntityLifecyclePicker` that filtered on unavailable tags for the selected kind.
- [`2e701b3796`](https://github.com/backstage/backstage/commit/2e701b3796): Internal refactor to use `react-router-dom` rather than `react-router`.
- [`6ffa47bb0a`](https://github.com/backstage/backstage/commit/6ffa47bb0a): Cleanup and small fixes for the kind selector
- [`19356df560`](https://github.com/backstage/backstage/commit/19356df560): Updated dependency `zen-observable` to `^0.9.0`.
- [`c3fa90e184`](https://github.com/backstage/backstage/commit/c3fa90e184): Updated dependency `zen-observable` to `^0.10.0`.

### `@backstage/plugin-circleci` (0.3.11 → [0.3.12](../../changelogs/@backstage/plugin-circleci.md#0312))

#### 0.3.12

##### Patch Changes

- [`2e701b3796`](https://github.com/backstage/backstage/commit/2e701b3796): Internal refactor to use `react-router-dom` rather than `react-router`.
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-cloudbuild` (0.3.11 → [0.3.12](../../changelogs/@backstage/plugin-cloudbuild.md#0312))

#### 0.3.12

##### Patch Changes

- [`d3fea4ae0a`](https://github.com/backstage/backstage/commit/d3fea4ae0a): Internal fixes to avoid implicit usage of globals
- [`2e701b3796`](https://github.com/backstage/backstage/commit/2e701b3796): Internal refactor to use `react-router-dom` rather than `react-router`.
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-code-climate` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-code-climate.md#0112))

#### 0.1.12

##### Patch Changes

- [`2e701b3796`](https://github.com/backstage/backstage/commit/2e701b3796): Internal refactor to use `react-router-dom` rather than `react-router`.
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-code-coverage` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-code-coverage.md#025))

#### 0.2.5

##### Patch Changes

- [`2e701b3796`](https://github.com/backstage/backstage/commit/2e701b3796): Internal refactor to use `react-router-dom` rather than `react-router`.
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-code-coverage-backend` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-code-coverage-backend.md#025))

#### 0.2.5

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-codescene` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-codescene.md#017))

#### 0.1.7

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.
- [`17a8e32f39`](https://github.com/backstage/backstage/commit/17a8e32f39): Updated dependency `rc-progress` to `3.4.1`.

### `@backstage/plugin-config-schema` (0.1.34 → [0.1.35](../../changelogs/@backstage/plugin-config-schema.md#0135))

#### 0.1.35

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.
- [`19356df560`](https://github.com/backstage/backstage/commit/19356df560): Updated dependency `zen-observable` to `^0.9.0`.
- [`c3fa90e184`](https://github.com/backstage/backstage/commit/c3fa90e184): Updated dependency `zen-observable` to `^0.10.0`.

### `@backstage/plugin-cost-insights` (0.12.0 → [0.12.1](../../changelogs/@backstage/plugin-cost-insights.md#0121))

#### 0.12.1

##### Patch Changes

- [`593c22253a`](https://github.com/backstage/backstage/commit/593c22253a): Added Y axis for metric data, with relevant formatting and data domain
- [`f9bbb3be37`](https://github.com/backstage/backstage/commit/f9bbb3be37): Provide the ability to change the base currency from USD to any other currency in cost insights plugin
- [`d379b6f070`](https://github.com/backstage/backstage/commit/d379b6f070): Internal refactor to avoid usage of deprecated symbols
- [`5960d0902e`](https://github.com/backstage/backstage/commit/5960d0902e): Internal refactor to avoid usage of deprecated symbols
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.
- [`f97c7fd1f7`](https://github.com/backstage/backstage/commit/f97c7fd1f7): added an optional config entry `costInsights.engineerThreshold` to allow users to control the threshold value for the 'negligible' change in costs.
- [`a5ecdb99f0`](https://github.com/backstage/backstage/commit/a5ecdb99f0): Making a possibility to hide a trending line in a cost insights plugin

### `@backstage/plugin-dynatrace` (1.0.1 → [1.0.2](../../changelogs/@backstage/plugin-dynatrace.md#102))

#### 1.0.2

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-events-backend-module-aws-sqs` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#011))

#### 0.1.1

##### Patch Changes

- [`884d749b14`](https://github.com/backstage/backstage/commit/884d749b14): Refactored to use `coreServices` from `@backstage/backend-plugin-api`.
- [`dd008a10c1`](https://github.com/backstage/backstage/commit/dd008a10c1): Upgrade to AWS SDK for Javascript v3

### `@backstage/plugin-events-backend-module-github` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-events-backend-module-github.md#011))

#### 0.1.1

##### Patch Changes

- [`884d749b14`](https://github.com/backstage/backstage/commit/884d749b14): Refactored to use `coreServices` from `@backstage/backend-plugin-api`.
- [`0f46ec304c`](https://github.com/backstage/backstage/commit/0f46ec304c): Add `createGithubSignatureValidator(config)` which can be used
  to create a validator used at an ingress for topic `github`.

  On top, there is a new `githubWebhookEventsModule` for the new backend plugin API
  which auto-registers the `HttpPostIngress` for topic `github` incl. the validator.

  Please find more information at
  https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-github/README.md.

### `@backstage/plugin-events-backend-module-gitlab` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#011))

#### 0.1.1

##### Patch Changes

- [`884d749b14`](https://github.com/backstage/backstage/commit/884d749b14): Refactored to use `coreServices` from `@backstage/backend-plugin-api`.
- [`31fe8f256a`](https://github.com/backstage/backstage/commit/31fe8f256a): Add `createGitlabTokenValidator(config)` which can be used
  to create a validator used at an ingress for topic `gitlab`.

  On top, there is a new `gitlabWebhookEventsModule` for the new backend plugin API
  which auto-registers the `HttpPostIngress` for topic `gitlab` incl. the validator.

  Please find more information at
  https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-gitlab/README.md.

### `@backstage/plugin-firehydrant` (0.1.28 → [0.1.29](../../changelogs/@backstage/plugin-firehydrant.md#0129))

#### 0.1.29

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-fossa` (0.2.43 → [0.2.44](../../changelogs/@backstage/plugin-fossa.md#0244))

#### 0.2.44

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-gcalendar` (0.3.7 → [0.3.8](../../changelogs/@backstage/plugin-gcalendar.md#038))

#### 0.3.8

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-gcp-projects` (0.3.30 → [0.3.31](../../changelogs/@backstage/plugin-gcp-projects.md#0331))

#### 0.3.31

##### Patch Changes

- [`d3fea4ae0a`](https://github.com/backstage/backstage/commit/d3fea4ae0a): Internal fixes to avoid implicit usage of globals
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.
- [`5fb6d5e92e`](https://github.com/backstage/backstage/commit/5fb6d5e92e): Updated dependency `@react-hookz/web` to `^19.0.0`.
- [`146378c146`](https://github.com/backstage/backstage/commit/146378c146): Updated dependency `@react-hookz/web` to `^20.0.0`.

### `@backstage/plugin-git-release-manager` (0.3.24 → [0.3.25](../../changelogs/@backstage/plugin-git-release-manager.md#0325))

#### 0.3.25

##### Patch Changes

- [`2e701b3796`](https://github.com/backstage/backstage/commit/2e701b3796): Internal refactor to use `react-router-dom` rather than `react-router`.
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-github-actions` (0.5.11 → [0.5.12](../../changelogs/@backstage/plugin-github-actions.md#0512))

#### 0.5.12

##### Patch Changes

- [`d3fea4ae0a`](https://github.com/backstage/backstage/commit/d3fea4ae0a): Internal fixes to avoid implicit usage of globals
- [`2e701b3796`](https://github.com/backstage/backstage/commit/2e701b3796): Internal refactor to use `react-router-dom` rather than `react-router`.
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-github-deployments` (0.1.42 → [0.1.43](../../changelogs/@backstage/plugin-github-deployments.md#0143))

#### 0.1.43

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-github-issues` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-github-issues.md#021))

#### 0.2.1

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-github-pull-requests-board` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-github-pull-requests-board.md#016))

#### 0.1.6

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-gitops-profiles` (0.3.29 → [0.3.30](../../changelogs/@backstage/plugin-gitops-profiles.md#0330))

#### 0.3.30

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-gocd` (0.1.17 → [0.1.18](../../changelogs/@backstage/plugin-gocd.md#0118))

#### 0.1.18

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-graphiql` (0.2.43 → [0.2.44](../../changelogs/@backstage/plugin-graphiql.md#0244))

#### 0.2.44

##### Patch Changes

- [`d3fea4ae0a`](https://github.com/backstage/backstage/commit/d3fea4ae0a): Internal fixes to avoid implicit usage of globals
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-graphql-backend` (0.1.28 → [0.1.29](../../changelogs/@backstage/plugin-graphql-backend.md#0129))

#### 0.1.29

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-home` (0.4.27 → [0.4.28](../../changelogs/@backstage/plugin-home.md#0428))

#### 0.4.28

##### Patch Changes

- [`2e701b3796`](https://github.com/backstage/backstage/commit/2e701b3796): Internal refactor to use `react-router-dom` rather than `react-router`.
- [`edf2404e9f`](https://github.com/backstage/backstage/commit/edf2404e9f): Adjusted the description's empty state on the starred entities table,
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-ilert` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-ilert.md#021))

#### 0.2.1

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-jenkins` (0.7.10 → [0.7.11](../../changelogs/@backstage/plugin-jenkins.md#0711))

#### 0.7.11

##### Patch Changes

- [`2e701b3796`](https://github.com/backstage/backstage/commit/2e701b3796): Internal refactor to use `react-router-dom` rather than `react-router`.
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-jenkins-backend` (0.1.28 → [0.1.29](../../changelogs/@backstage/plugin-jenkins-backend.md#0129))

#### 0.1.29

##### Patch Changes

- [`cfe2b98fbe`](https://github.com/backstage/backstage/commit/cfe2b98fbe): Remove unnecessary dependency `promise-any-polyfill`.
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.
- [`9447b0fb46`](https://github.com/backstage/backstage/commit/9447b0fb46): added support for standalone jenkins projects

### `@backstage/plugin-kafka` (0.3.11 → [0.3.12](../../changelogs/@backstage/plugin-kafka.md#0312))

#### 0.3.12

##### Patch Changes

- [`2e701b3796`](https://github.com/backstage/backstage/commit/2e701b3796): Internal refactor to use `react-router-dom` rather than `react-router`.
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-kafka-backend` (0.2.31 → [0.2.32](../../changelogs/@backstage/plugin-kafka-backend.md#0232))

#### 0.2.32

##### Patch Changes

- [`0b54dbaf7d`](https://github.com/backstage/backstage/commit/0b54dbaf7d): Internal tweak to adapt to `kafkajs` 2.2.3

### `@backstage/plugin-kubernetes` (0.7.4 → [0.7.5](../../changelogs/@backstage/plugin-kubernetes.md#075))

#### 0.7.5

##### Patch Changes

- [`2db8acffe7`](https://github.com/backstage/backstage/commit/2db8acffe7): Kubernetes plugin now gracefully surfaces transport-level errors (like DNS or timeout, or other socket errors) occurring while fetching data. This will be merged into any data that is fetched successfully, fixing a bug where the whole page would be empty if any fetch operation encountered such an error.
- [`365f887717`](https://github.com/backstage/backstage/commit/365f887717): Removed rendering for ErrorEmptyState in ErrorReporting component, so nothing is rendered when there are no errors. Also removed Divider on Kubernetes page.
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.
- [`9ce7866ecd`](https://github.com/backstage/backstage/commit/9ce7866ecd): Updated dependency `@kubernetes/client-node` to `0.18.0`.

### `@backstage/plugin-lighthouse` (0.3.11 → [0.3.12](../../changelogs/@backstage/plugin-lighthouse.md#0312))

#### 0.3.12

##### Patch Changes

- [`e3dfef3f63`](https://github.com/backstage/backstage/commit/e3dfef3f63): Fixed "Emulated Form Factor" field in the audit creation form not working with the latest version (1.0.2) of `lighthouse-audit-service`.
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-newrelic` (0.3.29 → [0.3.30](../../changelogs/@backstage/plugin-newrelic.md#0330))

#### 0.3.30

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-org` (0.6.1 → [0.6.2](../../changelogs/@backstage/plugin-org.md#062))

#### 0.6.2

##### Patch Changes

- [`4395eac4d8`](https://github.com/backstage/backstage/commit/4395eac4d8): Made all the ownership boxes the same size
- [`2e701b3796`](https://github.com/backstage/backstage/commit/2e701b3796): Internal refactor to use `react-router-dom` rather than `react-router`.
- [`67cedfe42e`](https://github.com/backstage/backstage/commit/67cedfe42e): Update `UserProfileCard` and `GroupProfileCard` to not render links unless the `showLinks` prop is set. The primary component for rendering links are the `EntityLinksCard` from plugin-catalog.
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-org-react` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-org-react.md#011))

#### 0.1.1

##### Patch Changes

- [`4cb5066828`](https://github.com/backstage/backstage/commit/4cb5066828): Bug fixes and adding the possibility to add a default value for the `GroupListPicker`. Fixes: Vertical size jump on text entry, left align for text, selecting a value closes the popup, auto focus on the popup when opening
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-pagerduty` (0.5.4 → [0.5.5](../../changelogs/@backstage/plugin-pagerduty.md#055))

#### 0.5.5

##### Patch Changes

- [`cb716004ef`](https://github.com/backstage/backstage/commit/cb716004ef): Internal refactor to improve tests
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-periskop` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-periskop.md#0110))

#### 0.1.10

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-periskop-backend` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-periskop-backend.md#0110))

#### 0.1.10

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-permission-backend` (0.5.13 → [0.5.14](../../changelogs/@backstage/plugin-permission-backend.md#0514))

#### 0.5.14

##### Patch Changes

- [`b05dcd5530`](https://github.com/backstage/backstage/commit/b05dcd5530): Move the `zod` dependency to a version that does not collide with other libraries
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-permission-common` (0.7.1 → [0.7.2](../../changelogs/@backstage/plugin-permission-common.md#072))

#### 0.7.2

##### Patch Changes

- [`b05dcd5530`](https://github.com/backstage/backstage/commit/b05dcd5530): Move the `zod` dependency to a version that does not collide with other libraries
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-permission-node` (0.7.1 → [0.7.2](../../changelogs/@backstage/plugin-permission-node.md#072))

#### 0.7.2

##### Patch Changes

- [`b05dcd5530`](https://github.com/backstage/backstage/commit/b05dcd5530): Move the `zod` dependency to a version that does not collide with other libraries
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-permission-react` (0.4.7 → [0.4.8](../../changelogs/@backstage/plugin-permission-react.md#048))

#### 0.4.8

##### Patch Changes

- [`2e701b3796`](https://github.com/backstage/backstage/commit/2e701b3796): Internal refactor to use `react-router-dom` rather than `react-router`.

### `@backstage/plugin-playlist` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-playlist.md#013))

#### 0.1.3

##### Patch Changes

- [`2e701b3796`](https://github.com/backstage/backstage/commit/2e701b3796): Internal refactor to use `react-router-dom` rather than `react-router`.
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-playlist-backend` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-playlist-backend.md#022))

#### 0.2.2

##### Patch Changes

- [`c507aee8a2`](https://github.com/backstage/backstage/commit/c507aee8a2): Ensured typescript type checks in migration files.
- [`b05dcd5530`](https://github.com/backstage/backstage/commit/b05dcd5530): Move the `zod` dependency to a version that does not collide with other libraries
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-proxy-backend` (0.2.32 → [0.2.33](../../changelogs/@backstage/plugin-proxy-backend.md#0233))

#### 0.2.33

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.
- [`03843259b4`](https://github.com/backstage/backstage/commit/03843259b4): Documented the `createRouter` method.

### `@backstage/plugin-rollbar` (0.4.11 → [0.4.12](../../changelogs/@backstage/plugin-rollbar.md#0412))

#### 0.4.12

##### Patch Changes

- [`2e701b3796`](https://github.com/backstage/backstage/commit/2e701b3796): Internal refactor to use `react-router-dom` rather than `react-router`.
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-rollbar-backend` (0.1.35 → [0.1.36](../../changelogs/@backstage/plugin-rollbar-backend.md#0136))

#### 0.1.36

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.13 → [0.2.14](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0214))

#### 0.2.14

##### Patch Changes

- [`935b66a646`](https://github.com/backstage/backstage/commit/935b66a646): Change step output template examples to use square bracket syntax.
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-scaffolder-backend-module-rails` (0.4.6 → [0.4.7](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#047))

#### 0.4.7

##### Patch Changes

- [`935b66a646`](https://github.com/backstage/backstage/commit/935b66a646): Change step output template examples to use square bracket syntax.
- [`27b23a86ad`](https://github.com/backstage/backstage/commit/27b23a86ad): Added more (optional) arguments to the `createFetchRailsAction` to be passed to `rails new`

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.11 → [0.2.12](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0212))

#### 0.2.12

##### Patch Changes

- [`935b66a646`](https://github.com/backstage/backstage/commit/935b66a646): Change step output template examples to use square bracket syntax.

### `@backstage/plugin-search` (1.0.4 → [1.0.5](../../changelogs/@backstage/plugin-search.md#105))

#### 1.0.5

##### Patch Changes

- [`2e701b3796`](https://github.com/backstage/backstage/commit/2e701b3796): Internal refactor to use `react-router-dom` rather than `react-router`.
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-sentry` (0.4.4 → [0.4.5](../../changelogs/@backstage/plugin-sentry.md#045))

#### 0.4.5

##### Patch Changes

- [`2e701b3796`](https://github.com/backstage/backstage/commit/2e701b3796): Internal refactor to use `react-router-dom` rather than `react-router`.
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-shortcuts` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-shortcuts.md#034))

#### 0.3.4

##### Patch Changes

- [`2e701b3796`](https://github.com/backstage/backstage/commit/2e701b3796): Internal refactor to use `react-router-dom` rather than `react-router`.
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.
- [`19356df560`](https://github.com/backstage/backstage/commit/19356df560): Updated dependency `zen-observable` to `^0.9.0`.
- [`c3fa90e184`](https://github.com/backstage/backstage/commit/c3fa90e184): Updated dependency `zen-observable` to `^0.10.0`.

### `@backstage/plugin-sonarqube-backend` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-sonarqube-backend.md#014))

#### 0.1.4

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.
- [`3dee2f5ad0`](https://github.com/backstage/backstage/commit/3dee2f5ad0): Added links to the frontend and backend plugins in the readme.

### `@backstage/plugin-splunk-on-call` (0.4.0 → [0.4.1](../../changelogs/@backstage/plugin-splunk-on-call.md#041))

#### 0.4.1

##### Patch Changes

- [`cb716004ef`](https://github.com/backstage/backstage/commit/cb716004ef): Internal refactor to improve tests
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-stack-overflow` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-stack-overflow.md#018))

#### 0.1.8

##### Patch Changes

- [`a19cffbeed`](https://github.com/backstage/backstage/commit/a19cffbeed): Update search links to only have header as linkable text
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.
- [`c981e83612`](https://github.com/backstage/backstage/commit/c981e83612): The `<StackOverflowSearchResultListItem />` component is now able to highlight the result title and/or text when provided. To take advantage of this, pass in the `highlight` prop, similar to how it is done on other result list item components.

### `@backstage/plugin-stack-overflow-backend` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-stack-overflow-backend.md#018))

#### 0.1.8

##### Patch Changes

- [`fd0ca6f447`](https://github.com/backstage/backstage/commit/fd0ca6f447): Added option to supply API Access Token. This is required in addition to an API key when trying to access the data for a private Stack Overflow Team.

### `@backstage/plugin-tech-insights` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-tech-insights.md#034))

#### 0.3.4

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-tech-radar` (0.5.18 → [0.5.19](../../changelogs/@backstage/plugin-tech-radar.md#0519))

#### 0.5.19

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-techdocs` (1.4.0 → [1.4.1](../../changelogs/@backstage/plugin-techdocs.md#141))

#### 1.4.1

##### Patch Changes

- [`d3fea4ae0a`](https://github.com/backstage/backstage/commit/d3fea4ae0a): Internal fixes to avoid implicit usage of globals
- [`2e701b3796`](https://github.com/backstage/backstage/commit/2e701b3796): Internal refactor to use `react-router-dom` rather than `react-router`.
- [`a19cffbeed`](https://github.com/backstage/backstage/commit/a19cffbeed): Update search links to only have header as linkable text
- [`5d3058355d`](https://github.com/backstage/backstage/commit/5d3058355d): Add `react/forbid-elements` linter rule for button, suggest Material UI `Button`
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.
- [`786f1b1419`](https://github.com/backstage/backstage/commit/786f1b1419): Support older versions of react-router

### `@backstage/plugin-techdocs-addons-test-utils` (1.0.6 → [1.0.7](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#107))

#### 1.0.7

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-techdocs-module-addons-contrib` (1.0.6 → [1.0.7](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#107))

#### 1.0.7

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.
- [`5fb6d5e92e`](https://github.com/backstage/backstage/commit/5fb6d5e92e): Updated dependency `@react-hookz/web` to `^19.0.0`.
- [`146378c146`](https://github.com/backstage/backstage/commit/146378c146): Updated dependency `@react-hookz/web` to `^20.0.0`.
- [`8536e7c281`](https://github.com/backstage/backstage/commit/8536e7c281): Use `app.title` from `app-config.yaml` when creating new Documentation Feedback issue. `Backstage` is the default value.

### `@backstage/plugin-techdocs-node` (1.4.2 → [1.4.3](../../changelogs/@backstage/plugin-techdocs-node.md#143))

#### 1.4.3

##### Patch Changes

- [`0a61aab172`](https://github.com/backstage/backstage/commit/0a61aab172): Bump dependency @azure/identity to next minor
- [`e40790d0c2`](https://github.com/backstage/backstage/commit/e40790d0c2): Add support for specifying an S3 bucket's account ID and retrieving the credentials from the `aws` app config section. This is now the preferred way to configure AWS credentials for Techdocs.
- [`37931c33ce`](https://github.com/backstage/backstage/commit/37931c33ce): Upgrade to AWS SDK for Javascript v3

  Techdocs support for AWS S3 now requires defining the AWS region to connect to.
  If `techdocs.publisher.awsS3.region` is missing from the config, the AWS environment variable `AWS_REGION` will be used.

### `@backstage/plugin-todo` (0.2.13 → [0.2.14](../../changelogs/@backstage/plugin-todo.md#0214))

#### 0.2.14

##### Patch Changes

- [`2e701b3796`](https://github.com/backstage/backstage/commit/2e701b3796): Internal refactor to use `react-router-dom` rather than `react-router`.
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-todo-backend` (0.1.35 → [0.1.36](../../changelogs/@backstage/plugin-todo-backend.md#0136))

#### 0.1.36

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-user-settings-backend` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-user-settings-backend.md#013))

#### 0.1.3

##### Patch Changes

- [`c507aee8a2`](https://github.com/backstage/backstage/commit/c507aee8a2): Ensured typescript type checks in migration files.

### `@backstage/plugin-vault` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-vault.md#016))

#### 0.1.6

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/plugin-vault-backend` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-vault-backend.md#025))

#### 0.2.5

##### Patch Changes

- [`568ae02463`](https://github.com/backstage/backstage/commit/568ae02463): Added (optional) config `vault.publicUrl` as alternative to `vault.baseUrl` for `editUrl` and `showUrl` in case `vault.baseUrl` is internal
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.
- [`7a3d2688ed`](https://github.com/backstage/backstage/commit/7a3d2688ed): Use `express-promise-router` to catch errors properly.
  Add `403` error as a known one. It will now return a `NotAllowed` error.

### `@backstage/plugin-xcmetrics` (0.2.31 → [0.2.32](../../changelogs/@backstage/plugin-xcmetrics.md#0232))

#### 0.2.32

##### Patch Changes

- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.

### `@backstage/test-utils` (1.2.2 → [1.2.3](../../changelogs/@backstage/test-utils.md#123))

#### 1.2.3

##### Patch Changes

- [`5e238ed56a`](https://github.com/backstage/backstage/commit/5e238ed56a): The test utility for the plugin context called `MockPluginProvider` has been created. It will be handy in the cases when you use
  `__experimentalConfigure` in your plugin. It is experimental and exported through `@backstage/test-utils/alpha`.
- [`2e701b3796`](https://github.com/backstage/backstage/commit/2e701b3796): Internal refactor to use `react-router-dom` rather than `react-router`.
- [`3280711113`](https://github.com/backstage/backstage/commit/3280711113): Updated dependency `msw` to `^0.49.0`.
- [`19356df560`](https://github.com/backstage/backstage/commit/19356df560): Updated dependency `zen-observable` to `^0.9.0`.
- [`c3fa90e184`](https://github.com/backstage/backstage/commit/c3fa90e184): Updated dependency `zen-observable` to `^0.10.0`.
- [`830687539f`](https://github.com/backstage/backstage/commit/830687539f): Sync components in @backstage/core-components with the Component Design Guidelines

### `@backstage/types` (1.0.1 → [1.0.2](../../changelogs/@backstage/types.md#102))

#### 1.0.2

##### Patch Changes

- [`19356df560`](https://github.com/backstage/backstage/commit/19356df560): Updated dependency `zen-observable` to `^0.9.0`.
- [`c3fa90e184`](https://github.com/backstage/backstage/commit/c3fa90e184): Updated dependency `zen-observable` to `^0.10.0`.

### `@backstage/version-bridge` (1.0.2 → [1.0.3](../../changelogs/@backstage/version-bridge.md#103))

#### 1.0.3

##### Patch Changes

- [`d3fea4ae0a`](https://github.com/backstage/backstage/commit/d3fea4ae0a): Internal fixes to avoid implicit usage of globals

### `@techdocs/cli` (1.2.3 → [1.2.4](../../changelogs/@techdocs/cli.md#124))

#### 1.2.4

##### Patch Changes

- [`8015ff1258`](https://github.com/backstage/backstage/commit/8015ff1258): Tweaked wording to use inclusive terminology

## Excluded dependency updates

- `@backstage/catalog-model` (1.1.3 → [1.1.4](../../changelogs/@backstage/catalog-model.md#114))
- `@backstage/codemods` (0.1.41 → [0.1.42](../../changelogs/@backstage/codemods.md#0142))
- `@backstage/config` (1.0.4 → [1.0.5](../../changelogs/@backstage/config.md#105))
- `@backstage/plugin-adr-common` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-adr-common.md#024))
- `@backstage/plugin-badges-backend` (0.1.32 → [0.1.33](../../changelogs/@backstage/plugin-badges-backend.md#0133))
- `@backstage/plugin-catalog-backend-module-ldap` (0.5.5 → [0.5.6](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#056))
- `@backstage/plugin-catalog-common` (1.0.8 → [1.0.9](../../changelogs/@backstage/plugin-catalog-common.md#109))
- `@backstage/plugin-cicd-statistics` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-cicd-statistics.md#0114))
- `@backstage/plugin-cicd-statistics-module-gitlab` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-cicd-statistics-module-gitlab.md#018))
- `@backstage/plugin-events-backend-module-azure` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-events-backend-module-azure.md#011))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#011))
- `@backstage/plugin-events-backend-module-gerrit` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#011))
- `@backstage/plugin-events-backend-test-utils` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-events-backend-test-utils.md#011))
- `@backstage/plugin-jenkins-common` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-jenkins-common.md#0111))
- `@backstage/plugin-newrelic-dashboard` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-newrelic-dashboard.md#025))
- `@backstage/plugin-playlist-common` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-playlist-common.md#013))
- `@backstage/plugin-scaffolder-common` (1.2.2 → [1.2.3](../../changelogs/@backstage/plugin-scaffolder-common.md#123))
- `@backstage/plugin-tech-insights-backend` (0.5.4 → [0.5.5](../../changelogs/@backstage/plugin-tech-insights-backend.md#055))
- `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.22 → [0.1.23](../../changelogs/@backstage/plugin-tech-insights-backend-module-jsonfc.md#0123))
- `@backstage/plugin-tech-insights-common` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-tech-insights-common.md#029))
- `@backstage/plugin-tech-insights-node` (0.3.6 → [0.3.7](../../changelogs/@backstage/plugin-tech-insights-node.md#037))
