# Backstage Release 1.19.0 changelog

Changes between 1.18.5 and 1.19.0 — 221 changed and 7 added packages.

## Summary

- [Newly added packages](#newly-added-packages): 7 packages
- [Breaking changes](#breaking-changes): 6 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 8 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 3 packages
- [Other minor version bumps](#other-minor-version-bumps): 9 packages
- [Other patch version bumps](#other-patch-version-bumps): 125 packages
- [Excluded dependency updates](#excluded-dependency-updates): 70 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/e2e-test-utils` (new, 0.1.0)](#backstagee2e-test-utils-new-010)
  - [`@backstage/plugin-auth-backend-module-microsoft-provider` (new, 0.1.0)](#backstageplugin-auth-backend-module-microsoft-provider-new-010)
  - [`@backstage/plugin-auth-backend-module-pinniped-provider` (new, 0.1.0)](#backstageplugin-auth-backend-module-pinniped-provider-new-010)
  - [`@backstage/plugin-catalog-backend-module-github-org` (new, 0.1.0)](#backstageplugin-catalog-backend-module-github-org-new-010)
  - [`@backstage/plugin-kubernetes-cluster` (new, 0.0.1)](#backstageplugin-kubernetes-cluster-new-001)
  - [`@backstage/plugin-kubernetes-node` (new, 0.1.0)](#backstageplugin-kubernetes-node-new-010)
  - [`@backstage/plugin-kubernetes-react` (new, 0.1.0)](#backstageplugin-kubernetes-react-new-010)
- [Breaking changes](#breaking-changes)
  - [`@backstage/cli` (0.22.14 → 0.23.0)](#backstagecli-02214--0230)
  - [`@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.1.2 → 0.2.0)](#backstageplugin-auth-backend-module-gcp-iap-provider-012--020)
  - [`@backstage/plugin-auth-node` (0.3.2 → 0.4.0)](#backstageplugin-auth-node-032--040)
  - [`@backstage/plugin-kubernetes` (0.10.3 → 0.11.0)](#backstageplugin-kubernetes-0103--0110)
  - [`@backstage/plugin-kubernetes-backend` (0.12.2 → 0.13.0)](#backstageplugin-kubernetes-backend-0122--0130)
  - [`@backstage/plugin-kubernetes-common` (0.6.6 → 0.7.0)](#backstageplugin-kubernetes-common-066--070)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/frontend-app-api` (0.1.0 → 0.2.0)](#backstagefrontend-app-api-010--020)
  - [`@backstage/frontend-plugin-api` (0.1.0 → 0.2.0)](#backstagefrontend-plugin-api-010--020)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.2.8 → 0.3.0)](#backstageplugin-catalog-backend-module-aws-028--030)
  - [`@backstage/plugin-catalog-graphql` (0.3.23 → 0.4.0)](#backstageplugin-catalog-graphql-0323--040)
  - [`@backstage/plugin-graphql-backend` (0.1.43 → 0.2.0)](#backstageplugin-graphql-backend-0143--020)
  - [`@backstage/plugin-jenkins` (0.8.6 → 0.9.0)](#backstageplugin-jenkins-086--090)
  - [`@backstage/plugin-jenkins-backend` (0.2.8 → 0.3.0)](#backstageplugin-jenkins-backend-028--030)
  - [`@backstage/plugin-newrelic-dashboard` (0.2.17 → 0.3.0)](#backstageplugin-newrelic-dashboard-0217--030)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/backend-openapi-utils` (0.0.4 → 0.0.5)](#backstagebackend-openapi-utils-004--005)
  - [`@backstage/plugin-analytics-module-newrelic-browser` (0.0.2 → 0.0.3)](#backstageplugin-analytics-module-newrelic-browser-002--003)
  - [`@backstage/plugin-explore-react` (0.0.31 → 0.0.32)](#backstageplugin-explore-react-0031--0032)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/core-app-api` (1.10.0 → 1.11.0)](#backstagecore-app-api-1100--1110)
  - [`@backstage/core-plugin-api` (1.6.0 → 1.7.0)](#backstagecore-plugin-api-160--170)
  - [`@backstage/plugin-catalog` (1.13.0 → 1.14.0)](#backstageplugin-catalog-1130--1140)
  - [`@backstage/plugin-catalog-backend` (1.13.3 → 1.14.0)](#backstageplugin-catalog-backend-1133--1140)
  - [`@backstage/plugin-scaffolder-backend` (1.17.3 → 1.18.0)](#backstageplugin-scaffolder-backend-1173--1180)
  - [`@backstage/plugin-techdocs` (1.7.0 → 1.8.0)](#backstageplugin-techdocs-170--180)
  - [`@backstage/plugin-techdocs-backend` (1.7.2 → 1.8.0)](#backstageplugin-techdocs-backend-172--180)
  - [`@backstage/plugin-techdocs-node` (1.8.2 → 1.9.0)](#backstageplugin-techdocs-node-182--190)
  - [`@techdocs/cli` (1.5.2 → 1.6.0)](#techdocscli-152--160)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/app-defaults` (1.4.3 → 1.4.4)](#backstageapp-defaults-143--144)
  - [`@backstage/backend-app-api` (0.5.5 → 0.5.6)](#backstagebackend-app-api-055--056)
  - [`@backstage/backend-common` (0.19.7 → 0.19.8)](#backstagebackend-common-0197--0198)
  - [`@backstage/backend-dev-utils` (0.1.1 → 0.1.2)](#backstagebackend-dev-utils-011--012)
  - [`@backstage/backend-tasks` (0.5.10 → 0.5.11)](#backstagebackend-tasks-0510--0511)
  - [`@backstage/backend-test-utils` (0.2.6 → 0.2.7)](#backstagebackend-test-utils-026--027)
  - [`@backstage/catalog-model` (1.4.2 → 1.4.3)](#backstagecatalog-model-142--143)
  - [`@backstage/cli-common` (0.1.12 → 0.1.13)](#backstagecli-common-0112--0113)
  - [`@backstage/codemods` (0.1.45 → 0.1.46)](#backstagecodemods-0145--0146)
  - [`@backstage/config-loader` (1.5.0 → 1.5.1)](#backstageconfig-loader-150--151)
  - [`@backstage/core-components` (0.13.5 → 0.13.6)](#backstagecore-components-0135--0136)
  - [`@backstage/create-app` (0.5.5 → 0.5.6)](#backstagecreate-app-055--056)
  - [`@backstage/dev-utils` (1.0.21 → 1.0.22)](#backstagedev-utils-1021--1022)
  - [`@backstage/errors` (1.2.2 → 1.2.3)](#backstageerrors-122--123)
  - [`@backstage/integration` (1.7.0 → 1.7.1)](#backstageintegration-170--171)
  - [`@backstage/integration-react` (1.1.19 → 1.1.20)](#backstageintegration-react-1119--1120)
  - [`@backstage/plugin-adr` (0.6.7 → 0.6.8)](#backstageplugin-adr-067--068)
  - [`@backstage/plugin-airbrake` (0.3.24 → 0.3.25)](#backstageplugin-airbrake-0324--0325)
  - [`@backstage/plugin-allure` (0.1.40 → 0.1.41)](#backstageplugin-allure-0140--0141)
  - [`@backstage/plugin-analytics-module-ga` (0.1.33 → 0.1.34)](#backstageplugin-analytics-module-ga-0133--0134)
  - [`@backstage/plugin-analytics-module-ga4` (0.1.4 → 0.1.5)](#backstageplugin-analytics-module-ga4-014--015)
  - [`@backstage/plugin-apache-airflow` (0.2.15 → 0.2.16)](#backstageplugin-apache-airflow-0215--0216)
  - [`@backstage/plugin-api-docs` (0.9.11 → 0.9.12)](#backstageplugin-api-docs-0911--0912)
  - [`@backstage/plugin-api-docs-module-protoc-gen-doc` (0.1.3 → 0.1.4)](#backstageplugin-api-docs-module-protoc-gen-doc-013--014)
  - [`@backstage/plugin-apollo-explorer` (0.1.15 → 0.1.16)](#backstageplugin-apollo-explorer-0115--0116)
  - [`@backstage/plugin-auth-backend` (0.19.2 → 0.19.3)](#backstageplugin-auth-backend-0192--0193)
  - [`@backstage/plugin-auth-backend-module-github-provider` (0.1.2 → 0.1.3)](#backstageplugin-auth-backend-module-github-provider-012--013)
  - [`@backstage/plugin-azure-devops` (0.3.6 → 0.3.7)](#backstageplugin-azure-devops-036--037)
  - [`@backstage/plugin-azure-sites` (0.1.13 → 0.1.14)](#backstageplugin-azure-sites-0113--0114)
  - [`@backstage/plugin-badges` (0.2.48 → 0.2.49)](#backstageplugin-badges-0248--0249)
  - [`@backstage/plugin-badges-backend` (0.3.2 → 0.3.3)](#backstageplugin-badges-backend-032--033)
  - [`@backstage/plugin-bazaar` (0.2.16 → 0.2.17)](#backstageplugin-bazaar-0216--0217)
  - [`@backstage/plugin-bitrise` (0.1.51 → 0.1.52)](#backstageplugin-bitrise-0151--0152)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.1.24 → 0.1.25)](#backstageplugin-catalog-backend-module-azure-0124--0125)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.20 → 0.1.21)](#backstageplugin-catalog-backend-module-bitbucket-cloud-0120--0121)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.18 → 0.1.19)](#backstageplugin-catalog-backend-module-bitbucket-server-0118--0119)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (0.1.21 → 0.1.22)](#backstageplugin-catalog-backend-module-gerrit-0121--0122)
  - [`@backstage/plugin-catalog-backend-module-github` (0.4.3 → 0.4.4)](#backstageplugin-catalog-backend-module-github-043--044)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.3.2 → 0.3.3)](#backstageplugin-catalog-backend-module-gitlab-032--033)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.9 → 0.4.10)](#backstageplugin-catalog-backend-module-incremental-ingestion-049--0410)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.5.20 → 0.5.21)](#backstageplugin-catalog-backend-module-ldap-0520--0521)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.5.12 → 0.5.13)](#backstageplugin-catalog-backend-module-msgraph-0512--0513)
  - [`@backstage/plugin-catalog-backend-module-puppetdb` (0.1.10 → 0.1.11)](#backstageplugin-catalog-backend-module-puppetdb-0110--0111)
  - [`@backstage/plugin-catalog-graph` (0.2.36 → 0.2.37)](#backstageplugin-catalog-graph-0236--0237)
  - [`@backstage/plugin-catalog-import` (0.10.0 → 0.10.1)](#backstageplugin-catalog-import-0100--0101)
  - [`@backstage/plugin-catalog-node` (1.4.6 → 1.4.7)](#backstageplugin-catalog-node-146--147)
  - [`@backstage/plugin-catalog-react` (1.8.4 → 1.8.5)](#backstageplugin-catalog-react-184--185)
  - [`@backstage/plugin-catalog-unprocessed-entities` (0.1.3 → 0.1.4)](#backstageplugin-catalog-unprocessed-entities-013--014)
  - [`@backstage/plugin-cicd-statistics` (0.1.26 → 0.1.27)](#backstageplugin-cicd-statistics-0126--0127)
  - [`@backstage/plugin-circleci` (0.3.24 → 0.3.25)](#backstageplugin-circleci-0324--0325)
  - [`@backstage/plugin-cloudbuild` (0.3.24 → 0.3.25)](#backstageplugin-cloudbuild-0324--0325)
  - [`@backstage/plugin-code-climate` (0.1.24 → 0.1.25)](#backstageplugin-code-climate-0124--0125)
  - [`@backstage/plugin-code-coverage` (0.2.17 → 0.2.18)](#backstageplugin-code-coverage-0217--0218)
  - [`@backstage/plugin-code-coverage-backend` (0.2.19 → 0.2.20)](#backstageplugin-code-coverage-backend-0219--0220)
  - [`@backstage/plugin-codescene` (0.1.17 → 0.1.18)](#backstageplugin-codescene-0117--0118)
  - [`@backstage/plugin-config-schema` (0.1.45 → 0.1.46)](#backstageplugin-config-schema-0145--0146)
  - [`@backstage/plugin-cost-insights` (0.12.13 → 0.12.14)](#backstageplugin-cost-insights-01213--01214)
  - [`@backstage/plugin-devtools` (0.1.4 → 0.1.5)](#backstageplugin-devtools-014--015)
  - [`@backstage/plugin-dynatrace` (7.0.4 → 7.0.5)](#backstageplugin-dynatrace-704--705)
  - [`@backstage/plugin-entity-feedback` (0.2.7 → 0.2.8)](#backstageplugin-entity-feedback-027--028)
  - [`@backstage/plugin-entity-validation` (0.1.9 → 0.1.10)](#backstageplugin-entity-validation-019--0110)
  - [`@backstage/plugin-explore` (0.4.10 → 0.4.11)](#backstageplugin-explore-0410--0411)
  - [`@backstage/plugin-firehydrant` (0.2.8 → 0.2.9)](#backstageplugin-firehydrant-028--029)
  - [`@backstage/plugin-fossa` (0.2.56 → 0.2.57)](#backstageplugin-fossa-0256--0257)
  - [`@backstage/plugin-gcalendar` (0.3.18 → 0.3.19)](#backstageplugin-gcalendar-0318--0319)
  - [`@backstage/plugin-gcp-projects` (0.3.41 → 0.3.42)](#backstageplugin-gcp-projects-0341--0342)
  - [`@backstage/plugin-git-release-manager` (0.3.37 → 0.3.38)](#backstageplugin-git-release-manager-0337--0338)
  - [`@backstage/plugin-github-actions` (0.6.5 → 0.6.6)](#backstageplugin-github-actions-065--066)
  - [`@backstage/plugin-github-deployments` (0.1.55 → 0.1.56)](#backstageplugin-github-deployments-0155--0156)
  - [`@backstage/plugin-github-issues` (0.2.13 → 0.2.14)](#backstageplugin-github-issues-0213--0214)
  - [`@backstage/plugin-github-pull-requests-board` (0.1.18 → 0.1.19)](#backstageplugin-github-pull-requests-board-0118--0119)
  - [`@backstage/plugin-gitops-profiles` (0.3.40 → 0.3.41)](#backstageplugin-gitops-profiles-0340--0341)
  - [`@backstage/plugin-gocd` (0.1.30 → 0.1.31)](#backstageplugin-gocd-0130--0131)
  - [`@backstage/plugin-graphiql` (0.2.54 → 0.2.55)](#backstageplugin-graphiql-0254--0255)
  - [`@backstage/plugin-graphql-voyager` (0.1.7 → 0.1.8)](#backstageplugin-graphql-voyager-017--018)
  - [`@backstage/plugin-home` (0.5.8 → 0.5.9)](#backstageplugin-home-058--059)
  - [`@backstage/plugin-home-react` (0.1.3 → 0.1.4)](#backstageplugin-home-react-013--014)
  - [`@backstage/plugin-ilert` (0.2.13 → 0.2.14)](#backstageplugin-ilert-0213--0214)
  - [`@backstage/plugin-kafka` (0.3.24 → 0.3.25)](#backstageplugin-kafka-0324--0325)
  - [`@backstage/plugin-lighthouse` (0.4.9 → 0.4.10)](#backstageplugin-lighthouse-049--0410)
  - [`@backstage/plugin-linguist` (0.1.9 → 0.1.10)](#backstageplugin-linguist-019--0110)
  - [`@backstage/plugin-microsoft-calendar` (0.1.7 → 0.1.8)](#backstageplugin-microsoft-calendar-017--018)
  - [`@backstage/plugin-newrelic` (0.3.40 → 0.3.41)](#backstageplugin-newrelic-0340--0341)
  - [`@backstage/plugin-nomad` (0.1.5 → 0.1.6)](#backstageplugin-nomad-015--016)
  - [`@backstage/plugin-nomad-backend` (0.1.7 → 0.1.8)](#backstageplugin-nomad-backend-017--018)
  - [`@backstage/plugin-octopus-deploy` (0.2.6 → 0.2.7)](#backstageplugin-octopus-deploy-026--027)
  - [`@backstage/plugin-opencost` (0.2.0 → 0.2.1)](#backstageplugin-opencost-020--021)
  - [`@backstage/plugin-org` (0.6.14 → 0.6.15)](#backstageplugin-org-0614--0615)
  - [`@backstage/plugin-org-react` (0.1.13 → 0.1.14)](#backstageplugin-org-react-0113--0114)
  - [`@backstage/plugin-pagerduty` (0.6.5 → 0.6.6)](#backstageplugin-pagerduty-065--066)
  - [`@backstage/plugin-periskop` (0.1.22 → 0.1.23)](#backstageplugin-periskop-0122--0123)
  - [`@backstage/plugin-permission-react` (0.4.15 → 0.4.16)](#backstageplugin-permission-react-0415--0416)
  - [`@backstage/plugin-playlist` (0.1.16 → 0.1.17)](#backstageplugin-playlist-0116--0117)
  - [`@backstage/plugin-playlist-backend` (0.3.9 → 0.3.10)](#backstageplugin-playlist-backend-039--0310)
  - [`@backstage/plugin-puppetdb` (0.1.7 → 0.1.8)](#backstageplugin-puppetdb-017--018)
  - [`@backstage/plugin-rollbar` (0.4.24 → 0.4.25)](#backstageplugin-rollbar-0424--0425)
  - [`@backstage/plugin-rollbar-backend` (0.1.50 → 0.1.51)](#backstageplugin-rollbar-backend-0150--0151)
  - [`@backstage/plugin-scaffolder` (1.15.0 → 1.15.1)](#backstageplugin-scaffolder-1150--1151)
  - [`@backstage/plugin-scaffolder-backend-module-rails` (0.4.22 → 0.4.23)](#backstageplugin-scaffolder-backend-module-rails-0422--0423)
  - [`@backstage/plugin-scaffolder-react` (1.5.5 → 1.5.6)](#backstageplugin-scaffolder-react-155--156)
  - [`@backstage/plugin-search` (1.4.0 → 1.4.1)](#backstageplugin-search-140--141)
  - [`@backstage/plugin-search-backend` (1.4.5 → 1.4.6)](#backstageplugin-search-backend-145--146)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.3.8 → 1.3.9)](#backstageplugin-search-backend-module-elasticsearch-138--139)
  - [`@backstage/plugin-search-react` (1.7.0 → 1.7.1)](#backstageplugin-search-react-170--171)
  - [`@backstage/plugin-sentry` (0.5.9 → 0.5.10)](#backstageplugin-sentry-059--0510)
  - [`@backstage/plugin-shortcuts` (0.3.14 → 0.3.15)](#backstageplugin-shortcuts-0314--0315)
  - [`@backstage/plugin-sonarqube` (0.7.5 → 0.7.6)](#backstageplugin-sonarqube-075--076)
  - [`@backstage/plugin-sonarqube-backend` (0.2.7 → 0.2.8)](#backstageplugin-sonarqube-backend-027--028)
  - [`@backstage/plugin-splunk-on-call` (0.4.13 → 0.4.14)](#backstageplugin-splunk-on-call-0413--0414)
  - [`@backstage/plugin-stack-overflow` (0.1.20 → 0.1.21)](#backstageplugin-stack-overflow-0120--0121)
  - [`@backstage/plugin-stackstorm` (0.1.6 → 0.1.7)](#backstageplugin-stackstorm-016--017)
  - [`@backstage/plugin-tech-insights` (0.3.16 → 0.3.17)](#backstageplugin-tech-insights-0316--0317)
  - [`@backstage/plugin-tech-insights-backend` (0.5.19 → 0.5.20)](#backstageplugin-tech-insights-backend-0519--0520)
  - [`@backstage/plugin-tech-radar` (0.6.8 → 0.6.9)](#backstageplugin-tech-radar-068--069)
  - [`@backstage/plugin-techdocs-addons-test-utils` (1.0.21 → 1.0.22)](#backstageplugin-techdocs-addons-test-utils-1021--1022)
  - [`@backstage/plugin-techdocs-module-addons-contrib` (1.1.0 → 1.1.1)](#backstageplugin-techdocs-module-addons-contrib-110--111)
  - [`@backstage/plugin-techdocs-react` (1.1.11 → 1.1.12)](#backstageplugin-techdocs-react-1111--1112)
  - [`@backstage/plugin-todo` (0.2.27 → 0.2.28)](#backstageplugin-todo-0227--0228)
  - [`@backstage/plugin-user-settings` (0.7.10 → 0.7.11)](#backstageplugin-user-settings-0710--0711)
  - [`@backstage/plugin-vault` (0.1.19 → 0.1.20)](#backstageplugin-vault-0119--0120)
  - [`@backstage/plugin-xcmetrics` (0.2.43 → 0.2.44)](#backstageplugin-xcmetrics-0243--0244)
  - [`@backstage/repo-tools` (0.3.4 → 0.3.5)](#backstagerepo-tools-034--035)
  - [`@backstage/test-utils` (1.4.3 → 1.4.4)](#backstagetest-utils-143--144)
  - [`@backstage/theme` (0.4.2 → 0.4.3)](#backstagetheme-042--043)
  - [`@backstage/version-bridge` (1.0.5 → 1.0.6)](#backstageversion-bridge-105--106)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/e2e-test-utils` (new, [0.1.0](../../changelogs/@backstage/e2e-test-utils.md#010))

#### 0.1.0

##### Minor Changes

- [`f5b41b27a9`](https://github.com/backstage/backstage/commit/f5b41b27a9): Initial release.

### `@backstage/plugin-auth-backend-module-microsoft-provider` (new, [0.1.0](../../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#010))

#### 0.1.0

##### Minor Changes

- [`2d8f7e82c1`](https://github.com/backstage/backstage/commit/2d8f7e82c1): Migrated the Microsoft auth provider to new `@backstage/plugin-auth-backend-module-microsoft-provider` module package.

### `@backstage/plugin-auth-backend-module-pinniped-provider` (new, [0.1.0](../../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#010))

#### 0.1.0

##### Minor Changes

- [`ae34255836`](https://github.com/backstage/backstage/commit/ae34255836): Add new Pinniped auth module and authenticator to be used alongside the new Pinniped auth provider.

### `@backstage/plugin-catalog-backend-module-github-org` (new, [0.1.0](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#010))

#### 0.1.0

##### Minor Changes

- [`c101e683d5`](https://github.com/backstage/backstage/commit/c101e683d5): Added `catalogModuleGithubOrgEntityProvider` to ingest users and teams from multiple Github organizations.

### `@backstage/plugin-kubernetes-cluster` (new, [0.0.1](../../changelogs/@backstage/plugin-kubernetes-cluster.md#001))

#### 0.0.1

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.
- [`95518765ee`](https://github.com/backstage/backstage/commit/95518765ee): Add Kubernetes cluster plugin. Viewing Kubernetes clusters as an Admin from Backstage

### `@backstage/plugin-kubernetes-node` (new, [0.1.0](../../changelogs/@backstage/plugin-kubernetes-node.md#010))

#### 0.1.0

##### Minor Changes

- [`cbb0e3c3f4`](https://github.com/backstage/backstage/commit/cbb0e3c3f4): A new plugin has been introduced to house the extension points for Kubernetes backend plugin; at the moment only the `KubernetesObjectsProviderExtensionPoint` is present. The `kubernetes-backend` plugin was modified to use this new extension point.

### `@backstage/plugin-kubernetes-react` (new, [0.1.0](../../changelogs/@backstage/plugin-kubernetes-react.md#010))

#### 0.1.0

##### Minor Changes

- [`2d8151061c`](https://github.com/backstage/backstage/commit/2d8151061c): Refactor Kubernetes plugins in line with ADR 11, no breaking changes yet

##### Patch Changes

- [`4262e12921`](https://github.com/backstage/backstage/commit/4262e12921): Handle mixed decimals and bigint when calculating k8s resource usage
- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`95518765ee`](https://github.com/backstage/backstage/commit/95518765ee): Add Kubernetes cluster plugin. Viewing Kubernetes clusters as an Admin from Backstage
- [`5dac12e435`](https://github.com/backstage/backstage/commit/5dac12e435): The kubernetes APIs invokes Authentication Strategies when Backstage-Kubernetes-Authorization-X-X headers are provided, this enable the possibility to invoke strategies that executes additional steps to get a kubernetes token like on pinniped or custom strategies

## Breaking changes

### `@backstage/cli` (0.22.14 → [0.23.0](../../changelogs/@backstage/cli.md#0230))

#### 0.23.0

##### Minor Changes

- [`8defbd5434`](https://github.com/backstage/backstage/commit/8defbd5434): Update typescript-eslint to 6.7.x, adding compatibility with TypeScript 5.2.

  This includes a major update on typescript-eslint, you can see the details in the [release notes](https://typescript-eslint.io/blog/announcing-typescript-eslint-v6/).

- [`7077dbf131`](https://github.com/backstage/backstage/commit/7077dbf131): **BREAKING** The new backend start command that used to be enabled by setting `EXPERIMENTAL_BACKEND_START` is now the default. To revert to the old behavior set `LEGACY_BACKEND_START`, which is recommended if you haven't migrated to the new backend system.

  This new command is no longer based on Webpack, but instead uses Node.js loaders to transpile on the fly. Rather than hot reloading modules the entire backend is now restarted on change, but the SQLite database state is still maintained across restarts via a parent process.

##### Patch Changes

- [`9468a67b92`](https://github.com/backstage/backstage/commit/9468a67b92): In frontend builds and tests `process.env.HAS_REACT_DOM_CLIENT` will now be defined if `react-dom/client` is present, i.e. if using React 18. This allows for conditional imports of `react-dom/client`.
- [`68158034e8`](https://github.com/backstage/backstage/commit/68158034e8): Fix for the new backend `start` command to make it work on Windows.
- [`4f16e60e6d`](https://github.com/backstage/backstage/commit/4f16e60e6d): Request slightly smaller pages of data from GitHub
- [`21cd3b1b24`](https://github.com/backstage/backstage/commit/21cd3b1b24): Added a template for creating `node-library` packages with `yarn new`.
- [`d0f26cfa4f`](https://github.com/backstage/backstage/commit/d0f26cfa4f): Fixed an issue where the new backend start command would not gracefully shut down the backend process on Windows.
- [`1ea20b0be5`](https://github.com/backstage/backstage/commit/1ea20b0be5): Updated dependency `@typescript-eslint/eslint-plugin` to `6.7.5`.
- [`2ef6522552`](https://github.com/backstage/backstage/commit/2ef6522552): Support for the `.icon.svg` extension has been deprecated and will be removed in the future. The implementation of this extension is too tied to a particular version of MUI and the SVGO, and it makes it harder to evolve the build system. We may introduce the ability to reintroduce this kind of functionality in the future through configuration for use in internal plugins, but for now we're forced to remove it.

  To migrate existing code, rename the `.icon.svg` file to `.tsx` and replace the `<svg>` element with `<SvgIcon>` from MUI and add necessary imports. For example:

  ```tsx
  import React from 'react';
  import SvgIcon from '@material-ui/core/SvgIcon';
  import { IconComponent } from '@backstage/core-plugin-api';

  export const CodeSceneIcon = (props: SvgIconProps) => (
    <SvgIcon {...props}>
      <g>
        <path d="..." />
      </g>
    </SvgIcon>
  );
  ```

- [`b9ec93430e`](https://github.com/backstage/backstage/commit/b9ec93430e): The scaffolder-module template now recommends usage of `createMockDirectory` instead of `mock-fs`.
- [`de42eebaaf`](https://github.com/backstage/backstage/commit/de42eebaaf): Bumped dev dependencies `@types/node` and `mock-fs`.
- [`425203f898`](https://github.com/backstage/backstage/commit/425203f898): Fixed recursive reloading issues of the backend, caused by unwanted watched files.
- [`3ef18f8c06`](https://github.com/backstage/backstage/commit/3ef18f8c06): Explicitly set `exports: 'named'` for CJS builds, ensuring that they have e.g. `exports["default"] = catalogPlugin;`
- [`7187f2953e`](https://github.com/backstage/backstage/commit/7187f2953e): The experimental package discovery will now always use the package name for include and exclude filtering, rather than the full module id. Entries pointing to a subpath export will now instead have an `export` field specifying the subpath that the import is from.

### `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.1.2 → [0.2.0](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#020))

#### 0.2.0

##### Minor Changes

- [`6f142d5356`](https://github.com/backstage/backstage/commit/6f142d5356): **BREAKING** `gcpIapAuthenticator.initialize()` is no longer `async`

### `@backstage/plugin-auth-node` (0.3.2 → [0.4.0](../../changelogs/@backstage/plugin-auth-node.md#040))

#### 0.4.0

##### Minor Changes

- [`6f142d5356`](https://github.com/backstage/backstage/commit/6f142d5356): **BREAKING**: The recently introduced `ProxyAuthenticator.initialize()` method is no longer `async` to match the way the OAuth equivalent is implemented.

##### Patch Changes

- [`6c2b0793bf`](https://github.com/backstage/backstage/commit/6c2b0793bf): Fix for persisted scopes not being properly restored on sign-in.
- [`8b8b1d23ae`](https://github.com/backstage/backstage/commit/8b8b1d23ae): Fixed cookie persisted scope not returned in OAuth refresh handler response.
- [`ae34255836`](https://github.com/backstage/backstage/commit/ae34255836): Adding optional audience parameter to OAuthState type declaration

### `@backstage/plugin-kubernetes` (0.10.3 → [0.11.0](../../changelogs/@backstage/plugin-kubernetes.md#0110))

#### 0.11.0

##### Minor Changes

- [`2d8151061c`](https://github.com/backstage/backstage/commit/2d8151061c): Refactor Kubernetes plugins in line with ADR 11, no breaking changes yet

##### Patch Changes

- [`9101c0d1b6`](https://github.com/backstage/backstage/commit/9101c0d1b6): Updated dependency `@kubernetes/client-node` to `0.19.0`.
- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.
- [`b0aca1a798`](https://github.com/backstage/backstage/commit/b0aca1a798): Updated dependency `xterm-addon-attach` to `^0.9.0`.
  Updated dependency `xterm-addon-fit` to `^0.8.0`.
- [`95518765ee`](https://github.com/backstage/backstage/commit/95518765ee): Add Kubernetes cluster plugin. Viewing Kubernetes clusters as an Admin from Backstage

### `@backstage/plugin-kubernetes-backend` (0.12.2 → [0.13.0](../../changelogs/@backstage/plugin-kubernetes-backend.md#0130))

#### 0.13.0

##### Minor Changes

- [`ae943c3bb1`](https://github.com/backstage/backstage/commit/ae943c3bb1): **BREAKING** Allow passing undefined `labelSelector` to `KubernetesFetcher`

  `KubernetesFetch` no longer auto-adds `labelSelector` when empty string was passed.
  This is only applicable if you have custom ObjectProvider implementation, as build-in `KubernetesFanOutHandler` already does this

##### Patch Changes

- [`cbb0e3c3f4`](https://github.com/backstage/backstage/commit/cbb0e3c3f4): A new plugin has been introduced to house the extension points for Kubernetes backend plugin; at the moment only the `KubernetesObjectsProviderExtensionPoint` is present. The `kubernetes-backend` plugin was modified to use this new extension point.
- [`9101c0d1b6`](https://github.com/backstage/backstage/commit/9101c0d1b6): Updated dependency `@kubernetes/client-node` to `0.19.0`.
- [`95518765ee`](https://github.com/backstage/backstage/commit/95518765ee): Add Kubernetes cluster plugin. Viewing Kubernetes clusters as an Admin from Backstage
- [`5dac12e435`](https://github.com/backstage/backstage/commit/5dac12e435): The kubernetes APIs invokes Authentication Strategies when Backstage-Kubernetes-Authorization-X-X headers are provided, this enable the possibility to invoke strategies that executes additional steps to get a kubernetes token like on pinniped or custom strategies

### `@backstage/plugin-kubernetes-common` (0.6.6 → [0.7.0](../../changelogs/@backstage/plugin-kubernetes-common.md#070))

#### 0.7.0

##### Minor Changes

- [`2d8151061c`](https://github.com/backstage/backstage/commit/2d8151061c): Refactor Kubernetes plugins in line with ADR 11, no breaking changes yet

##### Patch Changes

- [`9101c0d1b6`](https://github.com/backstage/backstage/commit/9101c0d1b6): Updated dependency `@kubernetes/client-node` to `0.19.0`.
- [`5dac12e435`](https://github.com/backstage/backstage/commit/5dac12e435): The kubernetes APIs invokes Authentication Strategies when Backstage-Kubernetes-Authorization-X-X headers are provided, this enable the possibility to invoke strategies that executes additional steps to get a kubernetes token like on pinniped or custom strategies

## 0.x minor version bumps

### `@backstage/frontend-app-api` (0.1.0 → [0.2.0](../../changelogs/@backstage/frontend-app-api.md#020))

#### 0.2.0

##### Minor Changes

- [`4461d87d5a`](https://github.com/backstage/backstage/commit/4461d87d5a): Removed support for the new `useRouteRef`.
- [`9d03dfe5e3`](https://github.com/backstage/backstage/commit/9d03dfe5e3): The `createApp` config option has been replaced by a new `configLoader` option. There is now also a `pluginLoader` option that can be used to dynamically load plugins into the app.
- [`d7c5d80c57`](https://github.com/backstage/backstage/commit/d7c5d80c57): The hidden `'root'` extension has been removed and has instead been made an input of the `'core'` extension. The checks for rejecting configuration of the `'root'` extension to rejects configuration of the `'core'` extension instead.
- [`d920b8c343`](https://github.com/backstage/backstage/commit/d920b8c343): Added support for installing `ExtensionOverrides` via `createApp` options. As part of this change the `plugins` option has been renamed to `features`, and the `pluginLoader` has been renamed to `featureLoader`.

##### Patch Changes

- [`322bbcae24`](https://github.com/backstage/backstage/commit/322bbcae24): Internal update for removal of experimental plugin configuration API.
- [`f78ac58f88`](https://github.com/backstage/backstage/commit/f78ac58f88): Filters for discovered packages are now also applied at runtime. This makes it possible to disable packages through the `app.experimental.packages` config at runtime.
- [`68ffb9e67d`](https://github.com/backstage/backstage/commit/68ffb9e67d): The app will now reject any extensions that attach to nonexistent inputs.
- [`5072824817`](https://github.com/backstage/backstage/commit/5072824817): Implement `toString()` and `toJSON()` for extension instances.
- [`1e60a9c3a5`](https://github.com/backstage/backstage/commit/1e60a9c3a5): Fixed an issue preventing the routing system to match subroutes
- [`52366db5b3`](https://github.com/backstage/backstage/commit/52366db5b3): Make themes configurable through extensions, and switched default themes to use extensions instead.
- [`2ecd33618a`](https://github.com/backstage/backstage/commit/2ecd33618a): Added the `bindRoutes` option to `createApp`.
- [`e5a2956dd2`](https://github.com/backstage/backstage/commit/e5a2956dd2): Register default api implementations when creating declarative integrated apps.
- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`06432f900c`](https://github.com/backstage/backstage/commit/06432f900c): Updates for `at` -> `attachTo` refactor.
- [`1718ec75b7`](https://github.com/backstage/backstage/commit/1718ec75b7): Added support for the existing routing system.
- [`66d51a4827`](https://github.com/backstage/backstage/commit/66d51a4827): Prevents root extension override and duplicated plugin extensions.

### `@backstage/frontend-plugin-api` (0.1.0 → [0.2.0](../../changelogs/@backstage/frontend-plugin-api.md#020))

#### 0.2.0

##### Minor Changes

- [`06432f900c`](https://github.com/backstage/backstage/commit/06432f900c): Extension attachment point is now configured via `attachTo: { id, input }` instead of `at: 'id/input'`.
- [`4461d87d5a`](https://github.com/backstage/backstage/commit/4461d87d5a): Removed support for the new `useRouteRef`.

##### Patch Changes

- [`d3a37f55c0`](https://github.com/backstage/backstage/commit/d3a37f55c0): Add support for `SidebarGroup` on the sidebar item extension.
- [`2ecd33618a`](https://github.com/backstage/backstage/commit/2ecd33618a): Plugins can now be assigned `routes` and `externalRoutes` when created.
- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`c1e9ca6500`](https://github.com/backstage/backstage/commit/c1e9ca6500): Added `createExtensionOverrides` which can be used to install a collection of extensions in an app that will replace any existing ones.
- [`52366db5b3`](https://github.com/backstage/backstage/commit/52366db5b3): Added `createThemeExtension` and `coreExtensionData.theme`.

### `@backstage/plugin-catalog-backend-module-aws` (0.2.8 → [0.3.0](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#030))

#### 0.3.0

##### Minor Changes

- [`5abc2fd4d6`](https://github.com/backstage/backstage/commit/5abc2fd4d6): AwsEksClusterProcessor supports Entity callback function and passes in region when initialize EKS cluster

##### Patch Changes

- [`890e3b5ad4`](https://github.com/backstage/backstage/commit/890e3b5ad4): Make sure to include the error message when ingestion fails

### `@backstage/plugin-catalog-graphql` (0.3.23 → [0.4.0](../../changelogs/@backstage/plugin-catalog-graphql.md#040))

#### 0.4.0

##### Minor Changes

- [`9def1e95ab`](https://github.com/backstage/backstage/commit/9def1e95ab): This package has been deprecated, consider using [@frontside/backstage-plugin-graphql-backend](https://www.npmjs.com/package/@frontside/backstage-plugin-graphql-backend) instead.

### `@backstage/plugin-graphql-backend` (0.1.43 → [0.2.0](../../changelogs/@backstage/plugin-graphql-backend.md#020))

#### 0.2.0

##### Minor Changes

- [`9def1e95ab`](https://github.com/backstage/backstage/commit/9def1e95ab): This package has been deprecated, consider using [@frontside/backstage-plugin-graphql-backend](https://www.npmjs.com/package/@frontside/backstage-plugin-graphql-backend) instead.

### `@backstage/plugin-jenkins` (0.8.6 → [0.9.0](../../changelogs/@backstage/plugin-jenkins.md#090))

#### 0.9.0

##### Minor Changes

- [`411896faf9`](https://github.com/backstage/backstage/commit/411896faf9): Added JobRunTable Component.
  Added new Route and extended Api to get buildJobs.
  Actions column has a new icon button, clicking on which takes us to page where we
  can see all the job runs.

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.
- [`1a05cf34f6`](https://github.com/backstage/backstage/commit/1a05cf34f6): Extend EntityJenkinsContent to receive columns as prop

### `@backstage/plugin-jenkins-backend` (0.2.8 → [0.3.0](../../changelogs/@backstage/plugin-jenkins-backend.md#030))

#### 0.3.0

##### Minor Changes

- [`411896faf9`](https://github.com/backstage/backstage/commit/411896faf9): Added JobRunTable Component.
  Added new Route and extended Api to get buildJobs.
  Actions column has a new icon button, clicking on which takes us to page where we
  can see all the job runs.

##### Patch Changes

- [`930ac236d8`](https://github.com/backstage/backstage/commit/930ac236d8): Added support for the [new backend system](https://backstage.io/docs/backend-system/)

### `@backstage/plugin-newrelic-dashboard` (0.2.17 → [0.3.0](../../changelogs/@backstage/plugin-newrelic-dashboard.md#030))

#### 0.3.0

##### Minor Changes

- [`d7eba6cab4`](https://github.com/backstage/backstage/commit/d7eba6cab4): Changes in `newrelic-dashboard` plugin:

  - Make DashboardSnapshotList component public
  - Settle discrepancies in the exported API
  - Deprecate DashboardSnapshotComponent

- [`e605ea4906`](https://github.com/backstage/backstage/commit/e605ea4906): Add storybook for newrelic-dashboard plugin.

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`61d55942ae`](https://github.com/backstage/backstage/commit/61d55942ae): Fix the styles for NewRelicDashboard, add more responsiveness
- [`5194a51a1c`](https://github.com/backstage/backstage/commit/5194a51a1c): Fixed React Warning: "Each child in a list should have a unique 'key' prop" during the rendering of `EntityNewRelicDashboardCard`

## 0.0.x patch version bumps

### `@backstage/backend-openapi-utils` (0.0.4 → [0.0.5](../../changelogs/@backstage/backend-openapi-utils.md#005))

#### 0.0.5

##### Patch Changes

- [`7c83975531`](https://github.com/backstage/backstage/commit/7c83975531): Adds new public utility types for common OpenAPI values, like request and response shapes and parameters available on an endpoint.

  **deprecated** `internal` namespace
  The internal namespace will continue to be exported but now uses OpenAPI format for path parameters. You should use the new utility types.

### `@backstage/plugin-analytics-module-newrelic-browser` (0.0.2 → [0.0.3](../../changelogs/@backstage/plugin-analytics-module-newrelic-browser.md#003))

#### 0.0.3

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.

### `@backstage/plugin-explore-react` (0.0.31 → [0.0.32](../../changelogs/@backstage/plugin-explore-react.md#0032))

#### 0.0.32

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

## Other minor version bumps

### `@backstage/core-app-api` (1.10.0 → [1.11.0](../../changelogs/@backstage/core-app-api.md#1110))

#### 1.11.0

##### Minor Changes

- [`c9d9bfeca2`](https://github.com/backstage/backstage/commit/c9d9bfeca2): URL encode some well known unsafe characters in `RouteResolver` (and therefore `useRouteRef`)

##### Patch Changes

- [`29e4d8b76b`](https://github.com/backstage/backstage/commit/29e4d8b76b): Fixed bug in `AppRouter` to determine the correct `signOutTargetUrl` if `app.baseUrl` contains a `basePath`
- [`acca17e91a`](https://github.com/backstage/backstage/commit/acca17e91a): Wrap entire app in `<Suspense>`, enabling support for using translations outside plugins.
- [`1a0616fa10`](https://github.com/backstage/backstage/commit/1a0616fa10): Add missing resource and template app icons
- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.
- [`f1b349cfba`](https://github.com/backstage/backstage/commit/f1b349cfba): Fixed a bug in `TranslationApi` implementation where in some cases it wouldn't notify subscribers of language changes.

### `@backstage/core-plugin-api` (1.6.0 → [1.7.0](../../changelogs/@backstage/core-plugin-api.md#170))

#### 1.7.0

##### Minor Changes

- [`322bbcae24`](https://github.com/backstage/backstage/commit/322bbcae24): Removed the exprimental plugin configuration API. The `__experimentalReconfigure()` from the plugin options as well as the `__experimentalConfigure()` method on plugin instances have both been removed.

##### Patch Changes

- [`0b55f773a7`](https://github.com/backstage/backstage/commit/0b55f773a7): Removed some unused dependencies
- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-catalog` (1.13.0 → [1.14.0](../../changelogs/@backstage/plugin-catalog.md#1140))

#### 1.14.0

##### Minor Changes

- [`28f1ab2e1a`](https://github.com/backstage/backstage/commit/28f1ab2e1a): The catalog plugin no longer implements the experimental reconfiguration API. The create button title can now instead be configured using the new experimental internationalization API, via the `catalogTranslationRef` exported at `/alpha`. For example:

  ```ts
  import { catalogTranslationRef } from '@backstage/plugin-catalog/alpha';

  const app = createApp({
    __experimentalTranslations: {
      resources: [
        createTranslationMessages({
          ref: catalogTranslationRef,
          catalog_page_create_button_title: 'Create Software',
        }),
      ],
    },
  });
  ```

- [`f3561a2935`](https://github.com/backstage/backstage/commit/f3561a2935): include owner chip in catalog search result item

##### Patch Changes

- [`7c4a8e4d5f`](https://github.com/backstage/backstage/commit/7c4a8e4d5f): Create an experimental `CatalogSearchResultItemExtension` for declarative integration with Backstage; it can be accessed via the `/alpha` import.
- [`0296f272b4`](https://github.com/backstage/backstage/commit/0296f272b4): The `spec.lifecycle' field in entities will now always be rendered as a string.
- [`0b55f773a7`](https://github.com/backstage/backstage/commit/0b55f773a7): Removed some unused dependencies
- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.
- [`e5a2956dd2`](https://github.com/backstage/backstage/commit/e5a2956dd2): Migrate catalog api to declarative integration system, it is exported from `/alpha` subpath.

### `@backstage/plugin-catalog-backend` (1.13.3 → [1.14.0](../../changelogs/@backstage/plugin-catalog-backend.md#1140))

#### 1.14.0

##### Minor Changes

- [`78af9433c8`](https://github.com/backstage/backstage/commit/78af9433c8): Instrumenting some missing metrics with `OpenTelemetry`

##### Patch Changes

- [`7a2e2924c7`](https://github.com/backstage/backstage/commit/7a2e2924c7): Marked the `LocationEntityProcessor` as deprecated, as it is no longer used internally since way back and can even be harmful at this point.
- [`0b55f773a7`](https://github.com/backstage/backstage/commit/0b55f773a7): Removed some unused dependencies
- [`348e8c1cdb`](https://github.com/backstage/backstage/commit/348e8c1cdb): Fixes a bug where eagerly deleted entities did not properly trigger re-stitching of entities that they had relations to.
- [`b97e9790f0`](https://github.com/backstage/backstage/commit/b97e9790f0): Internal refactors, laying the foundation for later introducing deferred stitching (see #18062).

### `@backstage/plugin-scaffolder-backend` (1.17.3 → [1.18.0](../../changelogs/@backstage/plugin-scaffolder-backend.md#1180))

#### 1.18.0

##### Minor Changes

- [`dea0aafda7`](https://github.com/backstage/backstage/commit/dea0aafda7): Updated `publish:gitlab` action properties to support additional Gitlab project settings:

  - general project settings provided by gitlab project create API (new `settings` property)
  - branch level settings to create additional branches and make them protected (new `branches` property)
  - project level environment variables settings (new `projectVariables` property)

  Marked existed properties `repoVisibility` and `topics` as deprecated, as they are covered by `settings` property.

- [`f41099bb31`](https://github.com/backstage/backstage/commit/f41099bb31): Display meaningful error to the output if Gitlab namespace not found inside `publish:gitlab`.

##### Patch Changes

- [`7dd82cc07e`](https://github.com/backstage/backstage/commit/7dd82cc07e): Add examples for `github:issues:label` scaffolder action & improve related tests
- [`733ddf7130`](https://github.com/backstage/backstage/commit/733ddf7130): Add examples for `publish:Azure` scaffolder action.

### `@backstage/plugin-techdocs` (1.7.0 → [1.8.0](../../changelogs/@backstage/plugin-techdocs.md#180))

#### 1.8.0

##### Minor Changes

- [`27740caa2d`](https://github.com/backstage/backstage/commit/27740caa2d): Added experimental support for declarative integration via the `/alpha` subpath.

##### Patch Changes

- [`4918f65ab2`](https://github.com/backstage/backstage/commit/4918f65ab2): Create an experimental `TechDocsSearchResultItemExtension` for declarative integration with Backstage; it can be accessed via the `/alpha` import.
- [`3605370af6`](https://github.com/backstage/backstage/commit/3605370af6): Improved `DocsTable` to display pagination controls dynamically, appearing only when needed.
- [`0296f272b4`](https://github.com/backstage/backstage/commit/0296f272b4): The `spec.lifecycle' field in entities will now always be rendered as a string.
- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.
- [`9468a67b92`](https://github.com/backstage/backstage/commit/9468a67b92): Added support for React 18. The new `createRoot` API from `react-dom/client` will now be used if present.
- [`df449a7a31`](https://github.com/backstage/backstage/commit/df449a7a31): Add kind column by default to TechDocsTable

### `@backstage/plugin-techdocs-backend` (1.7.2 → [1.8.0](../../changelogs/@backstage/plugin-techdocs-backend.md#180))

#### 1.8.0

##### Minor Changes

- [`344cfbcfbc`](https://github.com/backstage/backstage/commit/344cfbcfbc): Allow prepared directory clean up for custom preparers

  When using custom preparer for TechDocs, the `preparedDir` might
  end up taking disk space. This requires all custom preparers to
  implement a new method `shouldCleanPreparedDirectory` which indicates
  whether the prepared directory should be cleaned after generation.

### `@backstage/plugin-techdocs-node` (1.8.2 → [1.9.0](../../changelogs/@backstage/plugin-techdocs-node.md#190))

#### 1.9.0

##### Minor Changes

- [`344cfbcfbc`](https://github.com/backstage/backstage/commit/344cfbcfbc): Allow prepared directory clean up for custom preparers

  When using custom preparer for TechDocs, the `preparedDir` might
  end up taking disk space. This requires all custom preparers to
  implement a new method `shouldCleanPreparedDirectory` which indicates
  whether the prepared directory should be cleaned after generation.

- [`d06b30b050`](https://github.com/backstage/backstage/commit/d06b30b050): Add possibility to use a mkdocs config file with a different name than `mkdocs.<yaml|yml> with the serve command using the `--mkdocs-config-file-name` argument

### `@techdocs/cli` (1.5.2 → [1.6.0](../../changelogs/@techdocs/cli.md#160))

#### 1.6.0

##### Minor Changes

- [`d06b30b050`](https://github.com/backstage/backstage/commit/d06b30b050): Add possibility to use a mkdocs config file with a different name than `mkdocs.<yaml|yml> with the serve command using the `--mkdocs-config-file-name` argument

##### Patch Changes

- [`de42eebaaf`](https://github.com/backstage/backstage/commit/de42eebaaf): Bumped dev dependencies `@types/node` and `mock-fs`.
- [`2b6e572051`](https://github.com/backstage/backstage/commit/2b6e572051): Restructured tests.

## Other patch version bumps

### `@backstage/app-defaults` (1.4.3 → [1.4.4](../../changelogs/@backstage/app-defaults.md#144))

#### 1.4.4

##### Patch Changes

- [`1a0616fa10`](https://github.com/backstage/backstage/commit/1a0616fa10): Add missing resource and template app icons
- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.

### `@backstage/backend-app-api` (0.5.5 → [0.5.6](../../changelogs/@backstage/backend-app-api.md#056))

#### 0.5.6

##### Patch Changes

- [`74491c9602`](https://github.com/backstage/backstage/commit/74491c9602): Moved `HostDiscovery` from `@backstage/backend-common`.
- [`a4617c422a`](https://github.com/backstage/backstage/commit/a4617c422a): Added `watch` option to configuration loaders that can be used to disable file watching by setting it to `false`.

### `@backstage/backend-common` (0.19.7 → [0.19.8](../../changelogs/@backstage/backend-common.md#0198))

#### 0.19.8

##### Patch Changes

- [`74491c9602`](https://github.com/backstage/backstage/commit/74491c9602): The `HostDiscovery` export has been deprecated, import it from `@backstage/backend-app-api` instead.
- [`b95d66d4ea`](https://github.com/backstage/backstage/commit/b95d66d4ea): Properly close write stream when writing temporary archive for processing zip-based `.readTree()` responses.
- [`b94f32271e`](https://github.com/backstage/backstage/commit/b94f32271e): Added the ability to fetch git tags through the `Git` class. This is useful for scaffolder actions that want to take action based on tag versions in a cloned repository
- [`0b55f773a7`](https://github.com/backstage/backstage/commit/0b55f773a7): Removed some unused dependencies
- [`4c39e38f1e`](https://github.com/backstage/backstage/commit/4c39e38f1e): Added `/testUtils` entry point, with a utility for mocking resolve package paths as returned by `resolvePackagePath`.
- [`9101c0d1b6`](https://github.com/backstage/backstage/commit/9101c0d1b6): Updated dependency `@kubernetes/client-node` to `0.19.0`.
- [`a250ad775f`](https://github.com/backstage/backstage/commit/a250ad775f): Removed `mock-fs` dev dependency.
- [`2a40cd46a8`](https://github.com/backstage/backstage/commit/2a40cd46a8): Adds the optional flag for useRedisSets for the Redis cache to the config.
- [`1c3d6fa2b2`](https://github.com/backstage/backstage/commit/1c3d6fa2b2): The `useHotCleanup` and `useHotMemoize` helpers are now deprecated, since hot module reloads for backend are being phased out.

### `@backstage/backend-dev-utils` (0.1.1 → [0.1.2](../../changelogs/@backstage/backend-dev-utils.md#012))

#### 0.1.2

##### Patch Changes

- [`afa48341fb`](https://github.com/backstage/backstage/commit/afa48341fb): Fix an issue where early IPC responses would be lost.

### `@backstage/backend-tasks` (0.5.10 → [0.5.11](../../changelogs/@backstage/backend-tasks.md#0511))

#### 0.5.11

##### Patch Changes

- [`5db102bfdf`](https://github.com/backstage/backstage/commit/5db102bfdf): Instrument `backend-tasks` with some counters and histograms for duration.

  `backend_tasks.task.runs.count`: Counter with the total number of times a task has been run.
  `backend_tasks.task.runs.duration`: Histogram with the run durations for each task.

  Both these metrics have come with `result` `taskId` and `scope` labels for finer grained grouping.

- [`ddd76ac98d`](https://github.com/backstage/backstage/commit/ddd76ac98d): Fix bug where backend tasks that are defined with HumanDuration are immediately triggered on application startup

### `@backstage/backend-test-utils` (0.2.6 → [0.2.7](../../changelogs/@backstage/backend-test-utils.md#027))

#### 0.2.7

##### Patch Changes

- [`a250ad775f`](https://github.com/backstage/backstage/commit/a250ad775f): Added `createMockDirectory()` to help out with file system mocking in tests.
- [`5ddc03813e`](https://github.com/backstage/backstage/commit/5ddc03813e): Remove third type parameter used for `MockInstance`, in order to be compatible with older versions of `@types/jest`.
- [`74491c9602`](https://github.com/backstage/backstage/commit/74491c9602): Updated to import `HostDiscovery` from `@backstage/backend-app-api`.

### `@backstage/catalog-model` (1.4.2 → [1.4.3](../../changelogs/@backstage/catalog-model.md#143))

#### 1.4.3

##### Patch Changes

- [`0b55f773a7`](https://github.com/backstage/backstage/commit/0b55f773a7): Removed some unused dependencies

### `@backstage/cli-common` (0.1.12 → [0.1.13](../../changelogs/@backstage/cli-common.md#0113))

#### 0.1.13

##### Patch Changes

- [`de42eebaaf`](https://github.com/backstage/backstage/commit/de42eebaaf): Bumped dev dependencies `@types/node` and `mock-fs`.

### `@backstage/codemods` (0.1.45 → [0.1.46](../../changelogs/@backstage/codemods.md#0146))

#### 0.1.46

##### Patch Changes

- [`de42eebaaf`](https://github.com/backstage/backstage/commit/de42eebaaf): Bumped dev dependencies `@types/node` and `mock-fs`.

### `@backstage/config-loader` (1.5.0 → [1.5.1](../../changelogs/@backstage/config-loader.md#151))

#### 1.5.1

##### Patch Changes

- [`0b55f773a7`](https://github.com/backstage/backstage/commit/0b55f773a7): Removed some unused dependencies
- [`30c553c1d2`](https://github.com/backstage/backstage/commit/30c553c1d2): Updated dependency `typescript-json-schema` to `^0.61.0`.
- [`773ea341d2`](https://github.com/backstage/backstage/commit/773ea341d2): The `FileConfigSource` will now retry file reading after a short delay if it reads an empty file. This is to avoid flakiness during watch mode where change events can trigger before the file content has been written.
- [`a4617c422a`](https://github.com/backstage/backstage/commit/a4617c422a): Added `watch` option to configuration loaders that can be used to disable file watching by setting it to `false`.

### `@backstage/core-components` (0.13.5 → [0.13.6](../../changelogs/@backstage/core-components.md#0136))

#### 0.13.6

##### Patch Changes

- [`4eab5cf901`](https://github.com/backstage/backstage/commit/4eab5cf901): The `TabbedLayout` component will now also navigate when clicking the active tab, which allows for navigation back from any sub routes.
- [`0b55f773a7`](https://github.com/backstage/backstage/commit/0b55f773a7): Removed some unused dependencies
- [`8a15360bb4`](https://github.com/backstage/backstage/commit/8a15360bb4): Fixed overflowing messages in `WarningPanel`.
- [`997a71850c`](https://github.com/backstage/backstage/commit/997a71850c): Changed SupportButton menuitems to support text wrap
- [`0296f272b4`](https://github.com/backstage/backstage/commit/0296f272b4): Fixed the type declaration of `DependencyGraphProps`, the `defs` prop now expects `JSX.Element`s.
- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.
- [`16126dbe6a`](https://github.com/backstage/backstage/commit/16126dbe6a): Change overlay header colors in the mobile menu to use navigation color from the theme
- [`d19a827ef1`](https://github.com/backstage/backstage/commit/d19a827ef1): MissingAnnotationEmptyState component can now dynamically generate a YAML example based off the current entity being used.

### `@backstage/create-app` (0.5.5 → [0.5.6](../../changelogs/@backstage/create-app.md#056))

#### 0.5.6

##### Patch Changes

- [`ba6a3b59c1`](https://github.com/backstage/backstage/commit/ba6a3b59c1): Removed duplicate `apple-touch-icon` link from `packages/app/public/index.html` that linked to nonexistent icon.
- [`c8ec0dea4a`](https://github.com/backstage/backstage/commit/c8ec0dea4a): Create unique temp directory for each `create-app` execution.
- [`e43d3eb1b7`](https://github.com/backstage/backstage/commit/e43d3eb1b7): Bumped create-app version.
- [`b665f2ce65`](https://github.com/backstage/backstage/commit/b665f2ce65): Change base node image from node:18-bullseye-slim to node:18-bookworm-slim due to Docker build error on bullseye.

  You can apply these change to your own `Dockerfile` by replacing `node:18-bullseye-slim` with `node:18-bookworm-slim`

- [`deed089a3d`](https://github.com/backstage/backstage/commit/deed089a3d): Bump `cypress` to fix the end-to-end tests
- [`de42eebaaf`](https://github.com/backstage/backstage/commit/de42eebaaf): Bumped dev dependencies `@types/node` and `mock-fs`.
- [`04a3f65e15`](https://github.com/backstage/backstage/commit/04a3f65e15): Bump Docker base images to `node:18-bookworm-slim` to fix node compatibility issues raised during image build.

  You can apply these change to your own `Dockerfile` by replacing `node:16-bullseye-slim` with `node:18-bookworm-slim`

- [`9864f263ba`](https://github.com/backstage/backstage/commit/9864f263ba): Bump dev dependencies `lerna@7.3.0` on the template
- [`5eacd5d213`](https://github.com/backstage/backstage/commit/5eacd5d213): The E2E test setup based on Cypress has been replaced with one based on [Playwright](https://playwright.dev/). Migrating existing apps is not required as this is a standalone setup, only do so if you also want to switch from Cypress to Playwright.

  The scripts to run the E2E tests have been removed from `packages/app/package.json`, as they are now instead run from the root. Instead, a new script has been added to the root `package.json`, `yarn test:e2e`, which runs the E2E tests in development mode, unless `CI` is set in the environment.

  The Playwright setup uses utilities from the new `@backstage/e2e-test-utils` package to find and include all packages in the monorepo that have an `e2e-tests` folder.

- [`8d2e640af4`](https://github.com/backstage/backstage/commit/8d2e640af4): Added missing `.eslintignore` file

  To apply this change to an existing app, create a new `.eslintignore` file at the root of your project with the following content:

  ```diff
  + playwright.config.ts
  ```

### `@backstage/dev-utils` (1.0.21 → [1.0.22](../../changelogs/@backstage/dev-utils.md#1022))

#### 1.0.22

##### Patch Changes

- [`080d1beb2a`](https://github.com/backstage/backstage/commit/080d1beb2a): Moving development `dependencies` to `devDependencies`
- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.
- [`9468a67b92`](https://github.com/backstage/backstage/commit/9468a67b92): Added support for React 18. The new `createRoot` API from `react-dom/client` will now be used if present.

### `@backstage/errors` (1.2.2 → [1.2.3](../../changelogs/@backstage/errors.md#123))

#### 1.2.3

##### Patch Changes

- [`0b55f773a7`](https://github.com/backstage/backstage/commit/0b55f773a7): Removed some unused dependencies

### `@backstage/integration` (1.7.0 → [1.7.1](../../changelogs/@backstage/integration.md#171))

#### 1.7.1

##### Patch Changes

- [`3963d0b885`](https://github.com/backstage/backstage/commit/3963d0b885): Ensure that all relevant config fields are properly marked as secret
- [`0b55f773a7`](https://github.com/backstage/backstage/commit/0b55f773a7): Removed some unused dependencies

### `@backstage/integration-react` (1.1.19 → [1.1.20](../../changelogs/@backstage/integration-react.md#1120))

#### 1.1.20

##### Patch Changes

- [`0b55f773a7`](https://github.com/backstage/backstage/commit/0b55f773a7): Removed some unused dependencies
- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-adr` (0.6.7 → [0.6.8](../../changelogs/@backstage/plugin-adr.md#068))

#### 0.6.8

##### Patch Changes

- [`499e34656e`](https://github.com/backstage/backstage/commit/499e34656e): Fix icon alignment in `AdrSearchResultListItem`
- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.
- [`1204e7628e`](https://github.com/backstage/backstage/commit/1204e7628e): Create an experimental `AdrSearchResultItemExtension` for declarative integration with Backstage; it can be accessed via the `/alpha` import.

### `@backstage/plugin-airbrake` (0.3.24 → [0.3.25](../../changelogs/@backstage/plugin-airbrake.md#0325))

#### 0.3.25

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-allure` (0.1.40 → [0.1.41](../../changelogs/@backstage/plugin-allure.md#0141))

#### 0.1.41

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-analytics-module-ga` (0.1.33 → [0.1.34](../../changelogs/@backstage/plugin-analytics-module-ga.md#0134))

#### 0.1.34

##### Patch Changes

- [`0b55f773a7`](https://github.com/backstage/backstage/commit/0b55f773a7): Removed some unused dependencies
- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-analytics-module-ga4` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-analytics-module-ga4.md#015))

#### 0.1.5

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-apache-airflow` (0.2.15 → [0.2.16](../../changelogs/@backstage/plugin-apache-airflow.md#0216))

#### 0.2.16

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-api-docs` (0.9.11 → [0.9.12](../../changelogs/@backstage/plugin-api-docs.md#0912))

#### 0.9.12

##### Patch Changes

- [`0117a6b47e`](https://github.com/backstage/backstage/commit/0117a6b47e): Adding `requestInterceptor` option to `api-docs` and pass it to SwaggerUI. This will enable to configure a proxy or headers to be sent to all the request made through the `Try it out` button on SwaggerUI.
- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.
- [`18f1756908`](https://github.com/backstage/backstage/commit/18f1756908): added aria-label on api definition button for better a11y.

### `@backstage/plugin-api-docs-module-protoc-gen-doc` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-api-docs-module-protoc-gen-doc.md#014))

#### 0.1.4

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.

### `@backstage/plugin-apollo-explorer` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-apollo-explorer.md#0116))

#### 0.1.16

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-auth-backend` (0.19.2 → [0.19.3](../../changelogs/@backstage/plugin-auth-backend.md#0193))

#### 0.19.3

##### Patch Changes

- [`9ff7935152`](https://github.com/backstage/backstage/commit/9ff7935152): Fixed bug in oidc refresh handler, if token endpoints response on refresh request does not contain a scope, the requested scope is used.
- [`2d8f7e82c1`](https://github.com/backstage/backstage/commit/2d8f7e82c1): Migrated the Microsoft auth provider to new `@backstage/plugin-auth-backend-module-microsoft-provider` module package.

### `@backstage/plugin-auth-backend-module-github-provider` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#013))

#### 0.1.3

##### Patch Changes

- [`5d32a58b5a`](https://github.com/backstage/backstage/commit/5d32a58b5a): Fixed a bug where the GitHub authenticator did not properly persist granted OAuth scopes.

### `@backstage/plugin-azure-devops` (0.3.6 → [0.3.7](../../changelogs/@backstage/plugin-azure-devops.md#037))

#### 0.3.7

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-azure-sites` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-azure-sites.md#0114))

#### 0.1.14

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-badges` (0.2.48 → [0.2.49](../../changelogs/@backstage/plugin-badges.md#0249))

#### 0.2.49

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.

### `@backstage/plugin-badges-backend` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-badges-backend.md#033))

#### 0.3.3

##### Patch Changes

- [`817f2acbb1`](https://github.com/backstage/backstage/commit/817f2acbb1): Make sure the default badge factory is used if nothing is defined

### `@backstage/plugin-bazaar` (0.2.16 → [0.2.17](../../changelogs/@backstage/plugin-bazaar.md#0217))

#### 0.2.17

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.

### `@backstage/plugin-bitrise` (0.1.51 → [0.1.52](../../changelogs/@backstage/plugin-bitrise.md#0152))

#### 0.1.52

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-catalog-backend-module-azure` (0.1.24 → [0.1.25](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0125))

#### 0.1.25

##### Patch Changes

- [`890e3b5ad4`](https://github.com/backstage/backstage/commit/890e3b5ad4): Make sure to include the error message when ingestion fails

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.20 → [0.1.21](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#0121))

#### 0.1.21

##### Patch Changes

- [`890e3b5ad4`](https://github.com/backstage/backstage/commit/890e3b5ad4): Make sure to include the error message when ingestion fails

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#0119))

#### 0.1.19

##### Patch Changes

- [`890e3b5ad4`](https://github.com/backstage/backstage/commit/890e3b5ad4): Make sure to include the error message when ingestion fails

### `@backstage/plugin-catalog-backend-module-gerrit` (0.1.21 → [0.1.22](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0122))

#### 0.1.22

##### Patch Changes

- [`890e3b5ad4`](https://github.com/backstage/backstage/commit/890e3b5ad4): Make sure to include the error message when ingestion fails

### `@backstage/plugin-catalog-backend-module-github` (0.4.3 → [0.4.4](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#044))

#### 0.4.4

##### Patch Changes

- [`890e3b5ad4`](https://github.com/backstage/backstage/commit/890e3b5ad4): Make sure to include the error message when ingestion fails
- [`0b55f773a7`](https://github.com/backstage/backstage/commit/0b55f773a7): Removed some unused dependencies
- [`4f16e60e6d`](https://github.com/backstage/backstage/commit/4f16e60e6d): Request slightly smaller pages of data from GitHub
- [`b4b1cbf9fa`](https://github.com/backstage/backstage/commit/b4b1cbf9fa): Make `defaultUserTransformer` resolve to `UserEntity` instead of `Entity`
- [`c101e683d5`](https://github.com/backstage/backstage/commit/c101e683d5): Removed `catalogModuleGithubOrgEntityProvider`. Import from `@backstage/plugin-catalog-backend-module-github-org` instead.

### `@backstage/plugin-catalog-backend-module-gitlab` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#033))

#### 0.3.3

##### Patch Changes

- [`4f70fdfc93`](https://github.com/backstage/backstage/commit/4f70fdfc93): fix: use REST API to get root group memberships for GitLab SaaS users listing

  This API is the only one that shows `email` field for enterprise users and
  allows to filter out bot users not using a license using the `is_using_seat`
  field.

  We also added the annotation `gitlab.com/saml-external-uid` taking the value
  of `group_saml_identity.extern_uid` of the `groups/:group-id/members` endpoint
  response. This is useful in case you want to create a `SignInResolver` that
  references the user with the id of your identity provider (e.g. OneLogin).

  ref:

  <https://docs.gitlab.com/ee/user/enterprise_user/#get-users-email-addresses-through-the-api>
  <https://docs.gitlab.com/ee/api/members.html#limitations>

- [`890e3b5ad4`](https://github.com/backstage/backstage/commit/890e3b5ad4): Make sure to include the error message when ingestion fails
- [`0b55f773a7`](https://github.com/backstage/backstage/commit/0b55f773a7): Removed some unused dependencies
- [`6ae7f12abb`](https://github.com/backstage/backstage/commit/6ae7f12abb): Make sure the archived projects are skipped with the Gitlab API

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.9 → [0.4.10](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#0410))

#### 0.4.10

##### Patch Changes

- [`0b55f773a7`](https://github.com/backstage/backstage/commit/0b55f773a7): Removed some unused dependencies

### `@backstage/plugin-catalog-backend-module-ldap` (0.5.20 → [0.5.21](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0521))

#### 0.5.21

##### Patch Changes

- [`890e3b5ad4`](https://github.com/backstage/backstage/commit/890e3b5ad4): Make sure to include the error message when ingestion fails

### `@backstage/plugin-catalog-backend-module-msgraph` (0.5.12 → [0.5.13](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#0513))

#### 0.5.13

##### Patch Changes

- [`890e3b5ad4`](https://github.com/backstage/backstage/commit/890e3b5ad4): Make sure to include the error message when ingestion fails

### `@backstage/plugin-catalog-backend-module-puppetdb` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0111))

#### 0.1.11

##### Patch Changes

- [`890e3b5ad4`](https://github.com/backstage/backstage/commit/890e3b5ad4): Make sure to include the error message when ingestion fails

### `@backstage/plugin-catalog-graph` (0.2.36 → [0.2.37](../../changelogs/@backstage/plugin-catalog-graph.md#0237))

#### 0.2.37

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-catalog-import` (0.10.0 → [0.10.1](../../changelogs/@backstage/plugin-catalog-import.md#0101))

#### 0.10.1

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.
- [`0296f272b4`](https://github.com/backstage/backstage/commit/0296f272b4): The `app.title` configuration is now properly required to be a string.

### `@backstage/plugin-catalog-node` (1.4.6 → [1.4.7](../../changelogs/@backstage/plugin-catalog-node.md#147))

#### 1.4.7

##### Patch Changes

- [`7a2e2924c7`](https://github.com/backstage/backstage/commit/7a2e2924c7): Added docs to `processingResult`

### `@backstage/plugin-catalog-react` (1.8.4 → [1.8.5](../../changelogs/@backstage/plugin-catalog-react.md#185))

#### 1.8.5

##### Patch Changes

- [`a402e1dfb9`](https://github.com/backstage/backstage/commit/a402e1dfb9): Fixed an issue causing `EntityPage` to show an error for entities containing special characters
- [`0b55f773a7`](https://github.com/backstage/backstage/commit/0b55f773a7): Removed some unused dependencies
- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.
- [`0296f272b4`](https://github.com/backstage/backstage/commit/0296f272b4): The `spec.type` field in entities will now always be rendered as a string.

### `@backstage/plugin-catalog-unprocessed-entities` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#014))

#### 0.1.4

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.

### `@backstage/plugin-cicd-statistics` (0.1.26 → [0.1.27](../../changelogs/@backstage/plugin-cicd-statistics.md#0127))

#### 0.1.27

##### Patch Changes

- [`0b55f773a7`](https://github.com/backstage/backstage/commit/0b55f773a7): Removed some unused dependencies

### `@backstage/plugin-circleci` (0.3.24 → [0.3.25](../../changelogs/@backstage/plugin-circleci.md#0325))

#### 0.3.25

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-cloudbuild` (0.3.24 → [0.3.25](../../changelogs/@backstage/plugin-cloudbuild.md#0325))

#### 0.3.25

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-code-climate` (0.1.24 → [0.1.25](../../changelogs/@backstage/plugin-code-climate.md#0125))

#### 0.1.25

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-code-coverage` (0.2.17 → [0.2.18](../../changelogs/@backstage/plugin-code-coverage.md#0218))

#### 0.2.18

##### Patch Changes

- [`88b0b32547`](https://github.com/backstage/backstage/commit/88b0b32547): Fixed the coverage history statistics to compare newest with oldest record
- [`0296f272b4`](https://github.com/backstage/backstage/commit/0296f272b4): The warning for missing code coverage will now render the entity as a reference.
- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.
- [`a468544fa9`](https://github.com/backstage/backstage/commit/a468544fa9): Updated layout to improve contrasts and consistency with other plugins

### `@backstage/plugin-code-coverage-backend` (0.2.19 → [0.2.20](../../changelogs/@backstage/plugin-code-coverage-backend.md#0220))

#### 0.2.20

##### Patch Changes

- [`4aa27aa200`](https://github.com/backstage/backstage/commit/4aa27aa200): Added option to set body size limit

### `@backstage/plugin-codescene` (0.1.17 → [0.1.18](../../changelogs/@backstage/plugin-codescene.md#0118))

#### 0.1.18

##### Patch Changes

- [`9c9a9100b0`](https://github.com/backstage/backstage/commit/9c9a9100b0): Internal refactor to avoid using the deprecated `.icon.svg` extension.
- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-config-schema` (0.1.45 → [0.1.46](../../changelogs/@backstage/plugin-config-schema.md#0146))

#### 0.1.46

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-cost-insights` (0.12.13 → [0.12.14](../../changelogs/@backstage/plugin-cost-insights.md#01214))

#### 0.12.14

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.
- [`ba4820883c`](https://github.com/backstage/backstage/commit/ba4820883c): Updated dependency `@types/pluralize` to `^0.0.31`.
- [`959aa2a09f`](https://github.com/backstage/backstage/commit/959aa2a09f): The experimental plugin configuration has been removed. The trend line can now instead be hidden by setting `costInsights.hideTrendLine` to `true` in the configuration.

### `@backstage/plugin-devtools` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-devtools.md#015))

#### 0.1.5

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.

### `@backstage/plugin-dynatrace` (7.0.4 → [7.0.5](../../changelogs/@backstage/plugin-dynatrace.md#705))

#### 7.0.5

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-entity-feedback` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-entity-feedback.md#028))

#### 0.2.8

##### Patch Changes

- [`48c8b93e98`](https://github.com/backstage/backstage/commit/48c8b93e98): Added tooltip to like dislike buttons
- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-entity-validation` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-entity-validation.md#0110))

#### 0.1.10

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-explore` (0.4.10 → [0.4.11](../../changelogs/@backstage/plugin-explore.md#0411))

#### 0.4.11

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.
- [`0f10c53a05`](https://github.com/backstage/backstage/commit/0f10c53a05): Create an experimental `ExploreSearchResultItemExtension` for declarative integration with Backstage; it can be accessed via the `/alpha` import.

### `@backstage/plugin-firehydrant` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-firehydrant.md#029))

#### 0.2.9

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-fossa` (0.2.56 → [0.2.57](../../changelogs/@backstage/plugin-fossa.md#0257))

#### 0.2.57

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-gcalendar` (0.3.18 → [0.3.19](../../changelogs/@backstage/plugin-gcalendar.md#0319))

#### 0.3.19

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-gcp-projects` (0.3.41 → [0.3.42](../../changelogs/@backstage/plugin-gcp-projects.md#0342))

#### 0.3.42

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-git-release-manager` (0.3.37 → [0.3.38](../../changelogs/@backstage/plugin-git-release-manager.md#0338))

#### 0.3.38

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-github-actions` (0.6.5 → [0.6.6](../../changelogs/@backstage/plugin-github-actions.md#066))

#### 0.6.6

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-github-deployments` (0.1.55 → [0.1.56](../../changelogs/@backstage/plugin-github-deployments.md#0156))

#### 0.1.56

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-github-issues` (0.2.13 → [0.2.14](../../changelogs/@backstage/plugin-github-issues.md#0214))

#### 0.2.14

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.
- [`7bd0a8ab3c`](https://github.com/backstage/backstage/commit/7bd0a8ab3c): Filters out entities that belonged to a different github instance other than the one configured by the plugin

### `@backstage/plugin-github-pull-requests-board` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-github-pull-requests-board.md#0119))

#### 0.1.19

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-gitops-profiles` (0.3.40 → [0.3.41](../../changelogs/@backstage/plugin-gitops-profiles.md#0341))

#### 0.3.41

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-gocd` (0.1.30 → [0.1.31](../../changelogs/@backstage/plugin-gocd.md#0131))

#### 0.1.31

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-graphiql` (0.2.54 → [0.2.55](../../changelogs/@backstage/plugin-graphiql.md#0255))

#### 0.2.55

##### Patch Changes

- [`9c9a9100b0`](https://github.com/backstage/backstage/commit/9c9a9100b0): Internal refactor to avoid using the deprecated `.icon.svg` extension.
- [`06432f900c`](https://github.com/backstage/backstage/commit/06432f900c): Updated `/alpha` exports to use new `attachTo` option.
- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-graphql-voyager` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-graphql-voyager.md#018))

#### 0.1.8

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-home` (0.5.8 → [0.5.9](../../changelogs/@backstage/plugin-home.md#059))

#### 0.5.9

##### Patch Changes

- [`f997f771da`](https://github.com/backstage/backstage/commit/f997f771da): Adds Top/Recently Visited components to homepage
- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-home-react` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-home-react.md#014))

#### 0.1.4

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-ilert` (0.2.13 → [0.2.14](../../changelogs/@backstage/plugin-ilert.md#0214))

#### 0.2.14

##### Patch Changes

- [`0b55f773a7`](https://github.com/backstage/backstage/commit/0b55f773a7): Removed some unused dependencies
- [`9c9a9100b0`](https://github.com/backstage/backstage/commit/9c9a9100b0): Internal refactor to avoid using the deprecated `.icon.svg` extension.
- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-kafka` (0.3.24 → [0.3.25](../../changelogs/@backstage/plugin-kafka.md#0325))

#### 0.3.25

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-lighthouse` (0.4.9 → [0.4.10](../../changelogs/@backstage/plugin-lighthouse.md#0410))

#### 0.4.10

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-linguist` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-linguist.md#0110))

#### 0.1.10

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-microsoft-calendar` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-microsoft-calendar.md#018))

#### 0.1.8

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-newrelic` (0.3.40 → [0.3.41](../../changelogs/@backstage/plugin-newrelic.md#0341))

#### 0.3.41

##### Patch Changes

- [`ce50a15506`](https://github.com/backstage/backstage/commit/ce50a15506): Fixed sorting and searching in the NewRelic table.
- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-nomad` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-nomad.md#016))

#### 0.1.6

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.

### `@backstage/plugin-nomad-backend` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-nomad-backend.md#018))

#### 0.1.8

##### Patch Changes

- [`6822918c50`](https://github.com/backstage/backstage/commit/6822918c50): Added support for the [new backend system](https://backstage.io/docs/backend-system/)

### `@backstage/plugin-octopus-deploy` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-octopus-deploy.md#027))

#### 0.2.7

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-opencost` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-opencost.md#021))

#### 0.2.1

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`777b9a16a4`](https://github.com/backstage/backstage/commit/777b9a16a4): Fix for broken image reference.

### `@backstage/plugin-org` (0.6.14 → [0.6.15](../../changelogs/@backstage/plugin-org.md#0615))

#### 0.6.15

##### Patch Changes

- [`dc5b6b971b`](https://github.com/backstage/backstage/commit/dc5b6b971b): Fixed the display of OwnershipCard with aggregated relations by loading relations when getting children of entity.
  This allows the already existing recursive method to work properly when children of entity have children themselves.
- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-org-react` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-org-react.md#0114))

#### 0.1.14

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-pagerduty` (0.6.5 → [0.6.6](../../changelogs/@backstage/plugin-pagerduty.md#066))

#### 0.6.6

##### Patch Changes

- [`b9ce306814`](https://github.com/backstage/backstage/commit/b9ce306814): Minor fix to avoid usage of deprecated prop
- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-periskop` (0.1.22 → [0.1.23](../../changelogs/@backstage/plugin-periskop.md#0123))

#### 0.1.23

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-permission-react` (0.4.15 → [0.4.16](../../changelogs/@backstage/plugin-permission-react.md#0416))

#### 0.4.16

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.

### `@backstage/plugin-playlist` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-playlist.md#0117))

#### 0.1.17

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.
- [`65498193e8`](https://github.com/backstage/backstage/commit/65498193e8): Updated Playlist read me with additional screenshots

### `@backstage/plugin-playlist-backend` (0.3.9 → [0.3.10](../../changelogs/@backstage/plugin-playlist-backend.md#0310))

#### 0.3.10

##### Patch Changes

- [`9e46f5ff49`](https://github.com/backstage/backstage/commit/9e46f5ff49): Added support to the playlist plugin for the new backend

### `@backstage/plugin-puppetdb` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-puppetdb.md#018))

#### 0.1.8

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.

### `@backstage/plugin-rollbar` (0.4.24 → [0.4.25](../../changelogs/@backstage/plugin-rollbar.md#0425))

#### 0.4.25

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-rollbar-backend` (0.1.50 → [0.1.51](../../changelogs/@backstage/plugin-rollbar-backend.md#0151))

#### 0.1.51

##### Patch Changes

- [`407f4284be`](https://github.com/backstage/backstage/commit/407f4284be): ensure rollbar token is hidden

### `@backstage/plugin-scaffolder` (1.15.0 → [1.15.1](../../changelogs/@backstage/plugin-scaffolder.md#1151))

#### 1.15.1

##### Patch Changes

- [`b337d78c3b`](https://github.com/backstage/backstage/commit/b337d78c3b): fixed issue related template editor fails with multiple templates per file.
- [`ff2ab02690`](https://github.com/backstage/backstage/commit/ff2ab02690): Make entity picker more reliable with only one available entity
- [`83e4a42ccd`](https://github.com/backstage/backstage/commit/83e4a42ccd): Display log visibility button on the template panel
- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.
- [`4c70fe497d`](https://github.com/backstage/backstage/commit/4c70fe497d): `RepoUrlPickerRepoName` now correctly handles value changes in allowed repos.

### `@backstage/plugin-scaffolder-backend-module-rails` (0.4.22 → [0.4.23](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0423))

#### 0.4.23

##### Patch Changes

- [`de42eebaaf`](https://github.com/backstage/backstage/commit/de42eebaaf): Bumped dev dependencies `@types/node` and `mock-fs`.

### `@backstage/plugin-scaffolder-react` (1.5.5 → [1.5.6](../../changelogs/@backstage/plugin-scaffolder-react.md#156))

#### 1.5.6

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-search` (1.4.0 → [1.4.1](../../changelogs/@backstage/plugin-search.md#141))

#### 1.4.1

##### Patch Changes

- [`e5a2956dd2`](https://github.com/backstage/backstage/commit/e5a2956dd2): Create an experimental search plugin that is compatible with the declarative integration system, it is exported from `/alpha` subpath.
- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.
- [`0296f272b4`](https://github.com/backstage/backstage/commit/0296f272b4): Minor internal code cleanup.

### `@backstage/plugin-search-backend` (1.4.5 → [1.4.6](../../changelogs/@backstage/plugin-search-backend.md#146))

#### 1.4.6

##### Patch Changes

- [`16be6f9473`](https://github.com/backstage/backstage/commit/16be6f9473): Set the default length limit to search query to 100. To override it, define `search.maxTermLength` in the config file.

### `@backstage/plugin-search-backend-module-elasticsearch` (1.3.8 → [1.3.9](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#139))

#### 1.3.9

##### Patch Changes

- [`3963d0b885`](https://github.com/backstage/backstage/commit/3963d0b885): Ensure that all relevant config fields are properly marked as secret

### `@backstage/plugin-search-react` (1.7.0 → [1.7.1](../../changelogs/@backstage/plugin-search-react.md#171))

#### 1.7.1

##### Patch Changes

- [`06432f900c`](https://github.com/backstage/backstage/commit/06432f900c): Updated `/alpha` exports to use new `attachTo` option.
- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.
- [`0296f272b4`](https://github.com/backstage/backstage/commit/0296f272b4): The filter options passed to `SearchResultGroupLayout` are now always explicitly rendered as strings by default.
- [`703a4ffc5b`](https://github.com/backstage/backstage/commit/703a4ffc5b): Create `createSearchResultListItem` alpha version that only supports declarative integration.

### `@backstage/plugin-sentry` (0.5.9 → [0.5.10](../../changelogs/@backstage/plugin-sentry.md#0510))

#### 0.5.10

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-shortcuts` (0.3.14 → [0.3.15](../../changelogs/@backstage/plugin-shortcuts.md#0315))

#### 0.3.15

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-sonarqube` (0.7.5 → [0.7.6](../../changelogs/@backstage/plugin-sonarqube.md#076))

#### 0.7.6

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-sonarqube-backend` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-sonarqube-backend.md#028))

#### 0.2.8

##### Patch Changes

- [`a5d592d0ad`](https://github.com/backstage/backstage/commit/a5d592d0ad): Added support for the [new backend system](https://backstage.io/docs/backend-system/)

### `@backstage/plugin-splunk-on-call` (0.4.13 → [0.4.14](../../changelogs/@backstage/plugin-splunk-on-call.md#0414))

#### 0.4.14

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-stack-overflow` (0.1.20 → [0.1.21](../../changelogs/@backstage/plugin-stack-overflow.md#0121))

#### 0.1.21

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-stackstorm` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-stackstorm.md#017))

#### 0.1.7

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-tech-insights` (0.3.16 → [0.3.17](../../changelogs/@backstage/plugin-tech-insights.md#0317))

#### 0.3.17

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.
- [`21f409d776`](https://github.com/backstage/backstage/commit/21f409d776): Export `ScorecardInfo` and `ScorecardsList` components to be able to use manually queried check results directly.

### `@backstage/plugin-tech-insights-backend` (0.5.19 → [0.5.20](../../changelogs/@backstage/plugin-tech-insights-backend.md#0520))

#### 0.5.20

##### Patch Changes

- [`cc7dddfa7f`](https://github.com/backstage/backstage/commit/cc7dddfa7f): Increase the maximum allowed length of an entity filter for tech insights fact schemas.

### `@backstage/plugin-tech-radar` (0.6.8 → [0.6.9](../../changelogs/@backstage/plugin-tech-radar.md#069))

#### 0.6.9

##### Patch Changes

- [`0b55f773a7`](https://github.com/backstage/backstage/commit/0b55f773a7): Removed some unused dependencies
- [`c09d2fa1d6`](https://github.com/backstage/backstage/commit/c09d2fa1d6): Added experimental support for the declarative integration.
- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-techdocs-addons-test-utils` (1.0.21 → [1.0.22](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#1022))

#### 1.0.22

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-techdocs-module-addons-contrib` (1.1.0 → [1.1.1](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#111))

#### 1.1.1

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-techdocs-react` (1.1.11 → [1.1.12](../../changelogs/@backstage/plugin-techdocs-react.md#1112))

#### 1.1.12

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.

### `@backstage/plugin-todo` (0.2.27 → [0.2.28](../../changelogs/@backstage/plugin-todo.md#0228))

#### 0.2.28

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-user-settings` (0.7.10 → [0.7.11](../../changelogs/@backstage/plugin-user-settings.md#0711))

#### 0.7.11

##### Patch Changes

- [`18c8dee6f5`](https://github.com/backstage/backstage/commit/18c8dee6f5): Added experimental support for declarative integration via the `/alpha` subpath.
- [`d1b637d005`](https://github.com/backstage/backstage/commit/d1b637d005): Fixed a bug where the theme icons would not be colored according to their active state.
- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-vault` (0.1.19 → [0.1.20](../../changelogs/@backstage/plugin-vault.md#0120))

#### 0.1.20

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/plugin-xcmetrics` (0.2.43 → [0.2.44](../../changelogs/@backstage/plugin-xcmetrics.md#0244))

#### 0.2.44

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- [`f95af4e540`](https://github.com/backstage/backstage/commit/f95af4e540): Updated dependency `@testing-library/dom` to `^9.0.0`.

### `@backstage/repo-tools` (0.3.4 → [0.3.5](../../changelogs/@backstage/repo-tools.md#035))

#### 0.3.5

##### Patch Changes

- [`de42eebaaf`](https://github.com/backstage/backstage/commit/de42eebaaf): Bumped dev dependencies `@types/node` and `mock-fs`.

### `@backstage/test-utils` (1.4.3 → [1.4.4](../../changelogs/@backstage/test-utils.md#144))

#### 1.4.4

##### Patch Changes

- [`322bbcae24`](https://github.com/backstage/backstage/commit/322bbcae24): Removed the alpha `MockPluginProvider` export since the plugin configuration API has been removed.
- [`1a0616fa10`](https://github.com/backstage/backstage/commit/1a0616fa10): Add missing resource and template app icons
- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.

### `@backstage/theme` (0.4.2 → [0.4.3](../../changelogs/@backstage/theme.md#043))

#### 0.4.3

##### Patch Changes

- [`5ad5344756`](https://github.com/backstage/backstage/commit/5ad5344756): Added support for string `fontSize` values (e.g. `"2.5rem"`) in themes in addition to numbers. Also added an optional `fontFamily` prop for header typography variants to allow further customization.

### `@backstage/version-bridge` (1.0.5 → [1.0.6](../../changelogs/@backstage/version-bridge.md#106))

#### 1.0.6

##### Patch Changes

- [`9a1fce352e`](https://github.com/backstage/backstage/commit/9a1fce352e): Updated dependency `@testing-library/jest-dom` to `^6.0.0`.

## Excluded dependency updates

- `@backstage/backend-defaults` (0.2.5 → [0.2.6](../../changelogs/@backstage/backend-defaults.md#026))
- `@backstage/backend-plugin-api` (0.6.5 → [0.6.6](../../changelogs/@backstage/backend-plugin-api.md#066))
- `@backstage/catalog-client` (1.4.4 → [1.4.5](../../changelogs/@backstage/catalog-client.md#145))
- `@backstage/cli-node` (0.1.4 → [0.1.5](../../changelogs/@backstage/cli-node.md#015))
- `@backstage/config` (1.1.0 → [1.1.1](../../changelogs/@backstage/config.md#111))
- `@backstage/integration-aws-node` (0.1.6 → [0.1.7](../../changelogs/@backstage/integration-aws-node.md#017))
- `@backstage/plugin-adr-backend` (0.4.2 → [0.4.3](../../changelogs/@backstage/plugin-adr-backend.md#043))
- `@backstage/plugin-adr-common` (0.2.15 → [0.2.16](../../changelogs/@backstage/plugin-adr-common.md#0216))
- `@backstage/plugin-airbrake-backend` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-airbrake-backend.md#033))
- `@backstage/plugin-app-backend` (0.3.53 → [0.3.54](../../changelogs/@backstage/plugin-app-backend.md#0354))
- `@backstage/plugin-app-node` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-app-node.md#016))
- `@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#013))
- `@backstage/plugin-auth-backend-module-google-provider` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#013))
- `@backstage/plugin-auth-backend-module-oauth2-provider` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#013))
- `@backstage/plugin-azure-devops-backend` (0.4.2 → [0.4.3](../../changelogs/@backstage/plugin-azure-devops-backend.md#043))
- `@backstage/plugin-azure-sites-backend` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-azure-sites-backend.md#0116))
- `@backstage/plugin-bazaar-backend` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-bazaar-backend.md#033))
- `@backstage/plugin-bitbucket-cloud-common` (0.2.12 → [0.2.13](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#0213))
- `@backstage/plugin-catalog-backend-module-bitbucket` (0.2.20 → [0.2.21](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket.md#0221))
- `@backstage/plugin-catalog-backend-module-gcp` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#016))
- `@backstage/plugin-catalog-backend-module-openapi` (0.1.22 → [0.1.23](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0123))
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#013))
- `@backstage/plugin-catalog-backend-module-unprocessed` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#033))
- `@backstage/plugin-catalog-common` (1.0.16 → [1.0.17](../../changelogs/@backstage/plugin-catalog-common.md#1017))
- `@backstage/plugin-cicd-statistics-module-gitlab` (0.1.20 → [0.1.21](../../changelogs/@backstage/plugin-cicd-statistics-module-gitlab.md#0121))
- `@backstage/plugin-devtools-backend` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-devtools-backend.md#023))
- `@backstage/plugin-devtools-common` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-devtools-common.md#015))
- `@backstage/plugin-entity-feedback-backend` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-entity-feedback-backend.md#023))
- `@backstage/plugin-events-backend` (0.2.14 → [0.2.15](../../changelogs/@backstage/plugin-events-backend.md#0215))
- `@backstage/plugin-events-backend-module-aws-sqs` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#029))
- `@backstage/plugin-events-backend-module-azure` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-events-backend-module-azure.md#0116))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0116))
- `@backstage/plugin-events-backend-module-gerrit` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0116))
- `@backstage/plugin-events-backend-module-github` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-events-backend-module-github.md#0116))
- `@backstage/plugin-events-backend-module-gitlab` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#0116))
- `@backstage/plugin-events-backend-test-utils` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0116))
- `@backstage/plugin-events-node` (0.2.14 → [0.2.15](../../changelogs/@backstage/plugin-events-node.md#0215))
- `@backstage/plugin-explore-backend` (0.0.15 → [0.0.16](../../changelogs/@backstage/plugin-explore-backend.md#0016))
- `@backstage/plugin-jenkins-common` (0.1.19 → [0.1.20](../../changelogs/@backstage/plugin-jenkins-common.md#0120))
- `@backstage/plugin-kafka-backend` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-kafka-backend.md#033))
- `@backstage/plugin-lighthouse-backend` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-lighthouse-backend.md#033))
- `@backstage/plugin-lighthouse-common` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-lighthouse-common.md#014))
- `@backstage/plugin-linguist-backend` (0.5.2 → [0.5.3](../../changelogs/@backstage/plugin-linguist-backend.md#053))
- `@backstage/plugin-periskop-backend` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-periskop-backend.md#023))
- `@backstage/plugin-permission-backend` (0.5.28 → [0.5.29](../../changelogs/@backstage/plugin-permission-backend.md#0529))
- `@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#013))
- `@backstage/plugin-permission-common` (0.7.8 → [0.7.9](../../changelogs/@backstage/plugin-permission-common.md#079))
- `@backstage/plugin-permission-node` (0.7.16 → [0.7.17](../../changelogs/@backstage/plugin-permission-node.md#0717))
- `@backstage/plugin-playlist-common` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-playlist-common.md#0111))
- `@backstage/plugin-proxy-backend` (0.4.2 → [0.4.3](../../changelogs/@backstage/plugin-proxy-backend.md#043))
- `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#027))
- `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.29 → [0.2.30](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0230))
- `@backstage/plugin-scaffolder-backend-module-gitlab` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#029))
- `@backstage/plugin-scaffolder-backend-module-sentry` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#0114))
- `@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.26 → [0.2.27](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0227))
- `@backstage/plugin-scaffolder-common` (1.4.1 → [1.4.2](../../changelogs/@backstage/plugin-scaffolder-common.md#142))
- `@backstage/plugin-scaffolder-node` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-scaffolder-node.md#026))
- `@backstage/plugin-search-backend-module-catalog` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#0110))
- `@backstage/plugin-search-backend-module-explore` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-search-backend-module-explore.md#0110))
- `@backstage/plugin-search-backend-module-pg` (0.5.14 → [0.5.15](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0515))
- `@backstage/plugin-search-backend-module-techdocs` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#0110))
- `@backstage/plugin-search-backend-node` (1.2.9 → [1.2.10](../../changelogs/@backstage/plugin-search-backend-node.md#1210))
- `@backstage/plugin-search-common` (1.2.6 → [1.2.7](../../changelogs/@backstage/plugin-search-common.md#127))
- `@backstage/plugin-sonarqube-react` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-sonarqube-react.md#019))
- `@backstage/plugin-stack-overflow-backend` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-stack-overflow-backend.md#0210))
- `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.37 → [0.1.38](../../changelogs/@backstage/plugin-tech-insights-backend-module-jsonfc.md#0138))
- `@backstage/plugin-tech-insights-node` (0.4.11 → [0.4.12](../../changelogs/@backstage/plugin-tech-insights-node.md#0412))
- `@backstage/plugin-todo-backend` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-todo-backend.md#034))
- `@backstage/plugin-user-settings-backend` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-user-settings-backend.md#024))
- `@backstage/plugin-vault-backend` (0.3.10 → [0.3.11](../../changelogs/@backstage/plugin-vault-backend.md#0311))
