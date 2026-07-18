# Backstage Release 1.18.0 changelog

Changes between 1.17.5 and 1.18.0 — 217 changed and 10 added packages.

## Summary

- [Newly added packages](#newly-added-packages): 10 packages
- [Breaking changes](#breaking-changes): 19 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 3 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 4 packages
- [Other minor version bumps](#other-minor-version-bumps): 15 packages
- [Other patch version bumps](#other-patch-version-bumps): 142 packages
- [Excluded dependency updates](#excluded-dependency-updates): 34 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/frontend-app-api` (new, 0.1.0)](#backstagefrontend-app-api-new-010)
  - [`@backstage/frontend-plugin-api` (new, 0.1.0)](#backstagefrontend-plugin-api-new-010)
  - [`@backstage/plugin-auth-backend-module-gcp-iap-provider` (new, 0.1.0)](#backstageplugin-auth-backend-module-gcp-iap-provider-new-010)
  - [`@backstage/plugin-auth-backend-module-github-provider` (new, 0.1.0)](#backstageplugin-auth-backend-module-github-provider-new-010)
  - [`@backstage/plugin-auth-backend-module-gitlab-provider` (new, 0.1.0)](#backstageplugin-auth-backend-module-gitlab-provider-new-010)
  - [`@backstage/plugin-auth-backend-module-google-provider` (new, 0.1.0)](#backstageplugin-auth-backend-module-google-provider-new-010)
  - [`@backstage/plugin-auth-backend-module-oauth2-provider` (new, 0.1.0)](#backstageplugin-auth-backend-module-oauth2-provider-new-010)
  - [`@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (new, 0.1.0)](#backstageplugin-catalog-backend-module-scaffolder-entity-model-new-010)
  - [`@backstage/plugin-opencost` (new, 0.2.0)](#backstageplugin-opencost-new-020)
  - [`@backstage/plugin-permission-backend-module-allow-all-policy` (new, 0.1.0)](#backstageplugin-permission-backend-module-allow-all-policy-new-010)
- [Breaking changes](#breaking-changes)
  - [`@backstage/core-app-api` (1.9.1 → 1.10.0)](#backstagecore-app-api-191--1100)
  - [`@backstage/plugin-adr-backend` (0.3.8 → 0.4.0)](#backstageplugin-adr-backend-038--040)
  - [`@backstage/plugin-airbrake-backend` (0.2.23 → 0.3.0)](#backstageplugin-airbrake-backend-0223--030)
  - [`@backstage/plugin-auth-backend` (0.18.8 → 0.19.0)](#backstageplugin-auth-backend-0188--0190)
  - [`@backstage/plugin-azure-devops-backend` (0.3.29 → 0.4.0)](#backstageplugin-azure-devops-backend-0329--040)
  - [`@backstage/plugin-badges-backend` (0.2.5 → 0.3.0)](#backstageplugin-badges-backend-025--030)
  - [`@backstage/plugin-bazaar-backend` (0.2.13 → 0.3.0)](#backstageplugin-bazaar-backend-0213--030)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.2.6 → 0.3.0)](#backstageplugin-catalog-backend-module-gitlab-026--030)
  - [`@backstage/plugin-catalog-backend-module-unprocessed` (0.2.2 → 0.3.0)](#backstageplugin-catalog-backend-module-unprocessed-022--030)
  - [`@backstage/plugin-devtools-backend` (0.1.5 → 0.2.0)](#backstageplugin-devtools-backend-015--020)
  - [`@backstage/plugin-entity-feedback-backend` (0.1.8 → 0.2.0)](#backstageplugin-entity-feedback-backend-018--020)
  - [`@backstage/plugin-kafka-backend` (0.2.43 → 0.3.0)](#backstageplugin-kafka-backend-0243--030)
  - [`@backstage/plugin-kubernetes-backend` (0.11.5 → 0.12.0)](#backstageplugin-kubernetes-backend-0115--0120)
  - [`@backstage/plugin-lighthouse-backend` (0.2.6 → 0.3.0)](#backstageplugin-lighthouse-backend-026--030)
  - [`@backstage/plugin-linguist-backend` (0.4.2 → 0.5.0)](#backstageplugin-linguist-backend-042--050)
  - [`@backstage/plugin-periskop-backend` (0.1.21 → 0.2.0)](#backstageplugin-periskop-backend-0121--020)
  - [`@backstage/plugin-proxy-backend` (0.3.2 → 0.4.0)](#backstageplugin-proxy-backend-032--040)
  - [`@backstage/plugin-todo-backend` (0.2.2 → 0.3.1)](#backstageplugin-todo-backend-022--031)
  - [`@backstage/plugin-user-settings-backend` (0.1.14 → 0.2.1)](#backstageplugin-user-settings-backend-0114--021)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/plugin-auth-node` (0.2.19 → 0.3.0)](#backstageplugin-auth-node-0219--030)
  - [`@backstage/plugin-catalog-backend-module-github` (0.3.7 → 0.4.0)](#backstageplugin-catalog-backend-module-github-037--040)
  - [`@backstage/plugin-catalog-import` (0.9.13 → 0.10.0)](#backstageplugin-catalog-import-0913--0100)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-analytics-module-newrelic-browser` (0.0.1 → 0.0.2)](#backstageplugin-analytics-module-newrelic-browser-001--002)
  - [`@backstage/plugin-explore-common` (0.0.1 → 0.0.2)](#backstageplugin-explore-common-001--002)
  - [`@backstage/plugin-explore-react` (0.0.30 → 0.0.31)](#backstageplugin-explore-react-0030--0031)
  - [`@backstage/release-manifests` (0.0.9 → 0.0.10)](#backstagerelease-manifests-009--0010)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/config` (1.0.8 → 1.1.0)](#backstageconfig-108--110)
  - [`@backstage/config-loader` (1.4.0 → 1.5.0)](#backstageconfig-loader-140--150)
  - [`@backstage/core-plugin-api` (1.5.3 → 1.6.0)](#backstagecore-plugin-api-153--160)
  - [`@backstage/integration` (1.6.2 → 1.7.0)](#backstageintegration-162--170)
  - [`@backstage/plugin-catalog` (1.12.4 → 1.13.0)](#backstageplugin-catalog-1124--1130)
  - [`@backstage/plugin-catalog-backend` (1.12.4 → 1.13.0)](#backstageplugin-catalog-backend-1124--1130)
  - [`@backstage/plugin-scaffolder` (1.14.4 → 1.15.0)](#backstageplugin-scaffolder-1144--1150)
  - [`@backstage/plugin-scaffolder-backend` (1.16.5 → 1.17.0)](#backstageplugin-scaffolder-backend-1165--1170)
  - [`@backstage/plugin-search` (1.3.6 → 1.4.0)](#backstageplugin-search-136--140)
  - [`@backstage/plugin-search-react` (1.6.4 → 1.7.0)](#backstageplugin-search-react-164--170)
  - [`@backstage/plugin-techdocs` (1.6.8 → 1.7.0)](#backstageplugin-techdocs-168--170)
  - [`@backstage/plugin-techdocs-backend` (1.6.7 → 1.7.0)](#backstageplugin-techdocs-backend-167--170)
  - [`@backstage/plugin-techdocs-module-addons-contrib` (1.0.18 → 1.1.0)](#backstageplugin-techdocs-module-addons-contrib-1018--110)
  - [`@backstage/plugin-techdocs-node` (1.7.6 → 1.8.0)](#backstageplugin-techdocs-node-176--180)
  - [`@techdocs/cli` (1.4.7 → 1.5.0)](#techdocscli-147--150)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/app-defaults` (1.4.2 → 1.4.3)](#backstageapp-defaults-142--143)
  - [`@backstage/backend-app-api` (0.5.2 → 0.5.3)](#backstagebackend-app-api-052--053)
  - [`@backstage/backend-common` (0.19.4 → 0.19.5)](#backstagebackend-common-0194--0195)
  - [`@backstage/backend-plugin-api` (0.6.2 → 0.6.3)](#backstagebackend-plugin-api-062--063)
  - [`@backstage/backend-tasks` (0.5.7 → 0.5.8)](#backstagebackend-tasks-057--058)
  - [`@backstage/backend-test-utils` (0.2.2 → 0.2.3)](#backstagebackend-test-utils-022--023)
  - [`@backstage/catalog-client` (1.4.3 → 1.4.4)](#backstagecatalog-client-143--144)
  - [`@backstage/catalog-model` (1.4.1 → 1.4.2)](#backstagecatalog-model-141--142)
  - [`@backstage/cli` (0.22.12 → 0.22.13)](#backstagecli-02212--02213)
  - [`@backstage/core-components` (0.13.4 → 0.13.5)](#backstagecore-components-0134--0135)
  - [`@backstage/create-app` (0.5.4 → 0.5.5)](#backstagecreate-app-054--055)
  - [`@backstage/dev-utils` (1.0.20 → 1.0.21)](#backstagedev-utils-1020--1021)
  - [`@backstage/errors` (1.2.1 → 1.2.2)](#backstageerrors-121--122)
  - [`@backstage/integration-react` (1.1.18 → 1.1.19)](#backstageintegration-react-1118--1119)
  - [`@backstage/plugin-adr` (0.6.6 → 0.6.7)](#backstageplugin-adr-066--067)
  - [`@backstage/plugin-adr-common` (0.2.14 → 0.2.15)](#backstageplugin-adr-common-0214--0215)
  - [`@backstage/plugin-airbrake` (0.3.23 → 0.3.24)](#backstageplugin-airbrake-0323--0324)
  - [`@backstage/plugin-allure` (0.1.39 → 0.1.40)](#backstageplugin-allure-0139--0140)
  - [`@backstage/plugin-analytics-module-ga` (0.1.32 → 0.1.33)](#backstageplugin-analytics-module-ga-0132--0133)
  - [`@backstage/plugin-analytics-module-ga4` (0.1.3 → 0.1.4)](#backstageplugin-analytics-module-ga4-013--014)
  - [`@backstage/plugin-apache-airflow` (0.2.14 → 0.2.15)](#backstageplugin-apache-airflow-0214--0215)
  - [`@backstage/plugin-api-docs` (0.9.10 → 0.9.11)](#backstageplugin-api-docs-0910--0911)
  - [`@backstage/plugin-api-docs-module-protoc-gen-doc` (0.1.2 → 0.1.3)](#backstageplugin-api-docs-module-protoc-gen-doc-012--013)
  - [`@backstage/plugin-apollo-explorer` (0.1.14 → 0.1.15)](#backstageplugin-apollo-explorer-0114--0115)
  - [`@backstage/plugin-app-backend` (0.3.50 → 0.3.51)](#backstageplugin-app-backend-0350--0351)
  - [`@backstage/plugin-azure-devops` (0.3.5 → 0.3.6)](#backstageplugin-azure-devops-035--036)
  - [`@backstage/plugin-azure-devops-common` (0.3.0 → 0.3.1)](#backstageplugin-azure-devops-common-030--031)
  - [`@backstage/plugin-azure-sites` (0.1.12 → 0.1.13)](#backstageplugin-azure-sites-0112--0113)
  - [`@backstage/plugin-azure-sites-common` (0.1.0 → 0.1.1)](#backstageplugin-azure-sites-common-010--011)
  - [`@backstage/plugin-badges` (0.2.47 → 0.2.48)](#backstageplugin-badges-0247--0248)
  - [`@backstage/plugin-bazaar` (0.2.15 → 0.2.16)](#backstageplugin-bazaar-0215--0216)
  - [`@backstage/plugin-bitbucket-cloud-common` (0.2.11 → 0.2.12)](#backstageplugin-bitbucket-cloud-common-0211--0212)
  - [`@backstage/plugin-bitrise` (0.1.50 → 0.1.51)](#backstageplugin-bitrise-0150--0151)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.2.5 → 0.2.6)](#backstageplugin-catalog-backend-module-aws-025--026)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.1.21 → 0.1.22)](#backstageplugin-catalog-backend-module-azure-0121--0122)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.17 → 0.1.18)](#backstageplugin-catalog-backend-module-bitbucket-cloud-0117--0118)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.15 → 0.1.16)](#backstageplugin-catalog-backend-module-bitbucket-server-0115--0116)
  - [`@backstage/plugin-catalog-backend-module-gcp` (0.1.2 → 0.1.3)](#backstageplugin-catalog-backend-module-gcp-012--013)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (0.1.18 → 0.1.19)](#backstageplugin-catalog-backend-module-gerrit-0118--0119)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.5 → 0.4.6)](#backstageplugin-catalog-backend-module-incremental-ingestion-045--046)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.5.9 → 0.5.10)](#backstageplugin-catalog-backend-module-msgraph-059--0510)
  - [`@backstage/plugin-catalog-backend-module-puppetdb` (0.1.7 → 0.1.8)](#backstageplugin-catalog-backend-module-puppetdb-017--018)
  - [`@backstage/plugin-catalog-common` (1.0.15 → 1.0.16)](#backstageplugin-catalog-common-1015--1016)
  - [`@backstage/plugin-catalog-graph` (0.2.35 → 0.2.36)](#backstageplugin-catalog-graph-0235--0236)
  - [`@backstage/plugin-catalog-react` (1.8.3 → 1.8.4)](#backstageplugin-catalog-react-183--184)
  - [`@backstage/plugin-catalog-unprocessed-entities` (0.1.2 → 0.1.3)](#backstageplugin-catalog-unprocessed-entities-012--013)
  - [`@backstage/plugin-cicd-statistics` (0.1.25 → 0.1.26)](#backstageplugin-cicd-statistics-0125--0126)
  - [`@backstage/plugin-cicd-statistics-module-gitlab` (0.1.19 → 0.1.20)](#backstageplugin-cicd-statistics-module-gitlab-0119--0120)
  - [`@backstage/plugin-circleci` (0.3.23 → 0.3.24)](#backstageplugin-circleci-0323--0324)
  - [`@backstage/plugin-cloudbuild` (0.3.23 → 0.3.24)](#backstageplugin-cloudbuild-0323--0324)
  - [`@backstage/plugin-code-climate` (0.1.23 → 0.1.24)](#backstageplugin-code-climate-0123--0124)
  - [`@backstage/plugin-code-coverage` (0.2.16 → 0.2.17)](#backstageplugin-code-coverage-0216--0217)
  - [`@backstage/plugin-code-coverage-backend` (0.2.16 → 0.2.17)](#backstageplugin-code-coverage-backend-0216--0217)
  - [`@backstage/plugin-codescene` (0.1.16 → 0.1.17)](#backstageplugin-codescene-0116--0117)
  - [`@backstage/plugin-config-schema` (0.1.44 → 0.1.45)](#backstageplugin-config-schema-0144--0145)
  - [`@backstage/plugin-cost-insights` (0.12.12 → 0.12.13)](#backstageplugin-cost-insights-01212--01213)
  - [`@backstage/plugin-cost-insights-common` (0.1.1 → 0.1.2)](#backstageplugin-cost-insights-common-011--012)
  - [`@backstage/plugin-devtools` (0.1.3 → 0.1.4)](#backstageplugin-devtools-013--014)
  - [`@backstage/plugin-devtools-common` (0.1.3 → 0.1.4)](#backstageplugin-devtools-common-013--014)
  - [`@backstage/plugin-dynatrace` (7.0.3 → 7.0.4)](#backstageplugin-dynatrace-703--704)
  - [`@backstage/plugin-entity-feedback` (0.2.6 → 0.2.7)](#backstageplugin-entity-feedback-026--027)
  - [`@backstage/plugin-entity-feedback-common` (0.1.2 → 0.1.3)](#backstageplugin-entity-feedback-common-012--013)
  - [`@backstage/plugin-entity-validation` (0.1.8 → 0.1.9)](#backstageplugin-entity-validation-018--019)
  - [`@backstage/plugin-events-backend` (0.2.11 → 0.2.12)](#backstageplugin-events-backend-0211--0212)
  - [`@backstage/plugin-events-backend-module-aws-sqs` (0.2.5 → 0.2.6)](#backstageplugin-events-backend-module-aws-sqs-025--026)
  - [`@backstage/plugin-explore` (0.4.9 → 0.4.10)](#backstageplugin-explore-049--0410)
  - [`@backstage/plugin-firehydrant` (0.2.7 → 0.2.8)](#backstageplugin-firehydrant-027--028)
  - [`@backstage/plugin-fossa` (0.2.55 → 0.2.56)](#backstageplugin-fossa-0255--0256)
  - [`@backstage/plugin-gcalendar` (0.3.17 → 0.3.18)](#backstageplugin-gcalendar-0317--0318)
  - [`@backstage/plugin-gcp-projects` (0.3.40 → 0.3.41)](#backstageplugin-gcp-projects-0340--0341)
  - [`@backstage/plugin-git-release-manager` (0.3.36 → 0.3.37)](#backstageplugin-git-release-manager-0336--0337)
  - [`@backstage/plugin-github-actions` (0.6.4 → 0.6.5)](#backstageplugin-github-actions-064--065)
  - [`@backstage/plugin-github-deployments` (0.1.54 → 0.1.55)](#backstageplugin-github-deployments-0154--0155)
  - [`@backstage/plugin-github-issues` (0.2.12 → 0.2.13)](#backstageplugin-github-issues-0212--0213)
  - [`@backstage/plugin-github-pull-requests-board` (0.1.17 → 0.1.18)](#backstageplugin-github-pull-requests-board-0117--0118)
  - [`@backstage/plugin-gitops-profiles` (0.3.39 → 0.3.40)](#backstageplugin-gitops-profiles-0339--0340)
  - [`@backstage/plugin-gocd` (0.1.29 → 0.1.30)](#backstageplugin-gocd-0129--0130)
  - [`@backstage/plugin-graphiql` (0.2.53 → 0.2.54)](#backstageplugin-graphiql-0253--0254)
  - [`@backstage/plugin-graphql-voyager` (0.1.6 → 0.1.7)](#backstageplugin-graphql-voyager-016--017)
  - [`@backstage/plugin-home` (0.5.7 → 0.5.8)](#backstageplugin-home-057--058)
  - [`@backstage/plugin-home-react` (0.1.2 → 0.1.3)](#backstageplugin-home-react-012--013)
  - [`@backstage/plugin-ilert` (0.2.12 → 0.2.13)](#backstageplugin-ilert-0212--0213)
  - [`@backstage/plugin-jenkins` (0.8.5 → 0.8.6)](#backstageplugin-jenkins-085--086)
  - [`@backstage/plugin-jenkins-common` (0.1.18 → 0.1.19)](#backstageplugin-jenkins-common-0118--0119)
  - [`@backstage/plugin-kafka` (0.3.23 → 0.3.24)](#backstageplugin-kafka-0323--0324)
  - [`@backstage/plugin-kubernetes` (0.10.2 → 0.10.3)](#backstageplugin-kubernetes-0102--0103)
  - [`@backstage/plugin-kubernetes-common` (0.6.5 → 0.6.6)](#backstageplugin-kubernetes-common-065--066)
  - [`@backstage/plugin-lighthouse` (0.4.8 → 0.4.9)](#backstageplugin-lighthouse-048--049)
  - [`@backstage/plugin-lighthouse-common` (0.1.2 → 0.1.3)](#backstageplugin-lighthouse-common-012--013)
  - [`@backstage/plugin-linguist` (0.1.8 → 0.1.9)](#backstageplugin-linguist-018--019)
  - [`@backstage/plugin-linguist-common` (0.1.1 → 0.1.2)](#backstageplugin-linguist-common-011--012)
  - [`@backstage/plugin-microsoft-calendar` (0.1.6 → 0.1.7)](#backstageplugin-microsoft-calendar-016--017)
  - [`@backstage/plugin-newrelic` (0.3.39 → 0.3.40)](#backstageplugin-newrelic-0339--0340)
  - [`@backstage/plugin-newrelic-dashboard` (0.2.16 → 0.2.17)](#backstageplugin-newrelic-dashboard-0216--0217)
  - [`@backstage/plugin-nomad` (0.1.4 → 0.1.5)](#backstageplugin-nomad-014--015)
  - [`@backstage/plugin-octopus-deploy` (0.2.5 → 0.2.6)](#backstageplugin-octopus-deploy-025--026)
  - [`@backstage/plugin-org` (0.6.13 → 0.6.14)](#backstageplugin-org-0613--0614)
  - [`@backstage/plugin-org-react` (0.1.12 → 0.1.13)](#backstageplugin-org-react-0112--0113)
  - [`@backstage/plugin-pagerduty` (0.6.4 → 0.6.5)](#backstageplugin-pagerduty-064--065)
  - [`@backstage/plugin-periskop` (0.1.21 → 0.1.22)](#backstageplugin-periskop-0121--0122)
  - [`@backstage/plugin-permission-backend` (0.5.25 → 0.5.26)](#backstageplugin-permission-backend-0525--0526)
  - [`@backstage/plugin-permission-common` (0.7.7 → 0.7.8)](#backstageplugin-permission-common-077--078)
  - [`@backstage/plugin-permission-node` (0.7.13 → 0.7.14)](#backstageplugin-permission-node-0713--0714)
  - [`@backstage/plugin-permission-react` (0.4.14 → 0.4.15)](#backstageplugin-permission-react-0414--0415)
  - [`@backstage/plugin-playlist` (0.1.15 → 0.1.16)](#backstageplugin-playlist-0115--0116)
  - [`@backstage/plugin-playlist-common` (0.1.9 → 0.1.10)](#backstageplugin-playlist-common-019--0110)
  - [`@backstage/plugin-puppetdb` (0.1.6 → 0.1.7)](#backstageplugin-puppetdb-016--017)
  - [`@backstage/plugin-rollbar` (0.4.23 → 0.4.24)](#backstageplugin-rollbar-0423--0424)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.23 → 0.2.24)](#backstageplugin-scaffolder-backend-module-yeoman-0223--0224)
  - [`@backstage/plugin-scaffolder-common` (1.4.0 → 1.4.1)](#backstageplugin-scaffolder-common-140--141)
  - [`@backstage/plugin-scaffolder-react` (1.5.4 → 1.5.5)](#backstageplugin-scaffolder-react-154--155)
  - [`@backstage/plugin-search-backend` (1.4.2 → 1.4.3)](#backstageplugin-search-backend-142--143)
  - [`@backstage/plugin-search-backend-module-catalog` (0.1.6 → 0.1.7)](#backstageplugin-search-backend-module-catalog-016--017)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.3.5 → 1.3.6)](#backstageplugin-search-backend-module-elasticsearch-135--136)
  - [`@backstage/plugin-search-backend-module-explore` (0.1.6 → 0.1.7)](#backstageplugin-search-backend-module-explore-016--017)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.11 → 0.5.12)](#backstageplugin-search-backend-module-pg-0511--0512)
  - [`@backstage/plugin-search-backend-module-techdocs` (0.1.6 → 0.1.7)](#backstageplugin-search-backend-module-techdocs-016--017)
  - [`@backstage/plugin-search-common` (1.2.5 → 1.2.6)](#backstageplugin-search-common-125--126)
  - [`@backstage/plugin-sentry` (0.5.8 → 0.5.9)](#backstageplugin-sentry-058--059)
  - [`@backstage/plugin-shortcuts` (0.3.13 → 0.3.14)](#backstageplugin-shortcuts-0313--0314)
  - [`@backstage/plugin-sonarqube` (0.7.4 → 0.7.5)](#backstageplugin-sonarqube-074--075)
  - [`@backstage/plugin-sonarqube-react` (0.1.7 → 0.1.8)](#backstageplugin-sonarqube-react-017--018)
  - [`@backstage/plugin-splunk-on-call` (0.4.12 → 0.4.13)](#backstageplugin-splunk-on-call-0412--0413)
  - [`@backstage/plugin-stack-overflow` (0.1.19 → 0.1.20)](#backstageplugin-stack-overflow-0119--0120)
  - [`@backstage/plugin-stackstorm` (0.1.5 → 0.1.6)](#backstageplugin-stackstorm-015--016)
  - [`@backstage/plugin-tech-insights` (0.3.15 → 0.3.16)](#backstageplugin-tech-insights-0315--0316)
  - [`@backstage/plugin-tech-insights-backend` (0.5.16 → 0.5.17)](#backstageplugin-tech-insights-backend-0516--0517)
  - [`@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.34 → 0.1.35)](#backstageplugin-tech-insights-backend-module-jsonfc-0134--0135)
  - [`@backstage/plugin-tech-insights-common` (0.2.11 → 0.2.12)](#backstageplugin-tech-insights-common-0211--0212)
  - [`@backstage/plugin-tech-radar` (0.6.7 → 0.6.8)](#backstageplugin-tech-radar-067--068)
  - [`@backstage/plugin-techdocs-addons-test-utils` (1.0.20 → 1.0.21)](#backstageplugin-techdocs-addons-test-utils-1020--1021)
  - [`@backstage/plugin-techdocs-react` (1.1.9 → 1.1.11)](#backstageplugin-techdocs-react-119--1111)
  - [`@backstage/plugin-todo` (0.2.25 → 0.2.27)](#backstageplugin-todo-0225--0227)
  - [`@backstage/plugin-user-settings` (0.7.8 → 0.7.10)](#backstageplugin-user-settings-078--0710)
  - [`@backstage/plugin-vault` (0.1.17 → 0.1.19)](#backstageplugin-vault-0117--0119)
  - [`@backstage/plugin-vault-backend` (0.3.6 → 0.3.8)](#backstageplugin-vault-backend-036--038)
  - [`@backstage/plugin-xcmetrics` (0.2.41 → 0.2.43)](#backstageplugin-xcmetrics-0241--0243)
  - [`@backstage/repo-tools` (0.3.3 → 0.3.4)](#backstagerepo-tools-033--034)
  - [`@backstage/test-utils` (1.4.2 → 1.4.3)](#backstagetest-utils-142--143)
  - [`@backstage/theme` (0.4.1 → 0.4.2)](#backstagetheme-041--042)
  - [`@backstage/types` (1.1.0 → 1.1.1)](#backstagetypes-110--111)
  - [`@backstage/version-bridge` (1.0.4 → 1.0.5)](#backstageversion-bridge-104--105)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/frontend-app-api` (new, [0.1.0](../../changelogs/@backstage/frontend-app-api.md#010))

#### 0.1.0

##### Minor Changes

- [`628ca7e458e4`](https://github.com/backstage/backstage/commit/628ca7e458e4): Initial release

### `@backstage/frontend-plugin-api` (new, [0.1.0](../../changelogs/@backstage/frontend-plugin-api.md#010))

#### 0.1.0

##### Minor Changes

- [`628ca7e458e4`](https://github.com/backstage/backstage/commit/628ca7e458e4): Initial release

### `@backstage/plugin-auth-backend-module-gcp-iap-provider` (new, [0.1.0](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#010))

#### 0.1.0

##### Minor Changes

- [`8513cd7d00e3`](https://github.com/backstage/backstage/commit/8513cd7d00e3): New module for `@backstage/plugin-auth-backend` that adds a GCP IAP auth provider.

##### Patch Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

### `@backstage/plugin-auth-backend-module-github-provider` (new, [0.1.0](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#010))

#### 0.1.0

##### Minor Changes

- [`23af27f5ce79`](https://github.com/backstage/backstage/commit/23af27f5ce79): New module for `@backstage/plugin-auth-backend` that adds a GitHub auth provider.

##### Patch Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

### `@backstage/plugin-auth-backend-module-gitlab-provider` (new, [0.1.0](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#010))

#### 0.1.0

##### Minor Changes

- [`080cc7794700`](https://github.com/backstage/backstage/commit/080cc7794700): New module for `@backstage/plugin-auth-backend` that adds a GitLab auth provider.

##### Patch Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

### `@backstage/plugin-auth-backend-module-google-provider` (new, [0.1.0](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#010))

#### 0.1.0

##### Minor Changes

- [`8513cd7d00e3`](https://github.com/backstage/backstage/commit/8513cd7d00e3): New module for `@backstage/plugin-auth-backend` that adds a Google auth provider.

##### Patch Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

### `@backstage/plugin-auth-backend-module-oauth2-provider` (new, [0.1.0](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#010))

#### 0.1.0

##### Minor Changes

- [`101cf1d13b04`](https://github.com/backstage/backstage/commit/101cf1d13b04): New module for `@backstage/plugin-auth-backend` that adds a `oauth2` auth provider.

### `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (new, [0.1.0](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#010))

#### 0.1.0

##### Minor Changes

- [`d5313ede3529`](https://github.com/backstage/backstage/commit/d5313ede3529): Added a dedicated module to collect the `ScaffolderEntitiesProcessor` and `catalogModuleTemplateKind`.

### `@backstage/plugin-opencost` (new, [0.2.0](../../changelogs/@backstage/plugin-opencost.md#020))

#### 0.2.0

##### Minor Changes

- [`1380a689ab56`](https://github.com/backstage/backstage/commit/1380a689ab56): New OpenCost plugin provides an port of the latest OpenCost UI to Backstage with updated dependencies. The plugin's README covers installation and configuration

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.

### `@backstage/plugin-permission-backend-module-allow-all-policy` (new, [0.1.0](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#010))

#### 0.1.0

##### Minor Changes

- [`5f7b2153526b`](https://github.com/backstage/backstage/commit/5f7b2153526b): Created package with policy `permissionModuleAllowAllPolicy`

##### Patch Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

## Breaking changes

### `@backstage/core-app-api` (1.9.1 → [1.10.0](../../changelogs/@backstage/core-app-api.md#1100))

#### 1.10.0

##### Minor Changes

- [`18619f793c94`](https://github.com/backstage/backstage/commit/18619f793c94): Fixed two bugs in how the `OAuth2Session` type represents the underlying data. The `expiresAt` and `backstageIdentity` are now both optional, since that's what they are in practice. This is not considered a breaking change since it was effectively a bug in the modelling of the state that this type represents, and the type was not used in any other external contract.
- [`18619f793c94`](https://github.com/backstage/backstage/commit/18619f793c94): The `OAuth` class which is used by all OAuth providers will now consider both the session expiration of both the Backstage identity as well as the upstream identity provider, and refresh the session with either of them is about to expire.
- [`6e30769cc627`](https://github.com/backstage/backstage/commit/6e30769cc627): Introduced experimental support for internationalization.

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`9fe827b380e1`](https://github.com/backstage/backstage/commit/9fe827b380e1): Internal refactor
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-adr-backend` (0.3.8 → [0.4.0](../../changelogs/@backstage/plugin-adr-backend.md#040))

#### 0.4.0

##### Minor Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): **BREAKING**: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

### `@backstage/plugin-airbrake-backend` (0.2.23 → [0.3.0](../../changelogs/@backstage/plugin-airbrake-backend.md#030))

#### 0.3.0

##### Minor Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): **BREAKING**: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

### `@backstage/plugin-auth-backend` (0.18.8 → [0.19.0](../../changelogs/@backstage/plugin-auth-backend.md#0190))

#### 0.19.0

##### Minor Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): **BREAKING**: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

##### Patch Changes

- [`080cc7794700`](https://github.com/backstage/backstage/commit/080cc7794700): Migrated the GitLab auth provider to be implemented using the new `@backstage/plugin-auth-backend-module-gitlab-provider` module.
- [`7944d43f4790`](https://github.com/backstage/backstage/commit/7944d43f4790): Added `authPlugin` export for the new backend system. The plugin does not include any built-in auth providers, they must instead be added by installing additional modules, for example `authModuleGoogleProvider` from `@backstage/plugin-auth-backend-module-google-provider`.
- [`8513cd7d00e3`](https://github.com/backstage/backstage/commit/8513cd7d00e3): Deprecated several exports that are now available from `@backstage/plugin-auth-node` instead.
- [`7944d43f4790`](https://github.com/backstage/backstage/commit/7944d43f4790): Added the ability to disable the built-in auth providers by passing `disableDefaultProviderFactories` to `createRouter`.
- [`7944d43f4790`](https://github.com/backstage/backstage/commit/7944d43f4790): The algorithm used when generating Backstage tokens can be configured via `auth.identityTokenAlgorithm`.

### `@backstage/plugin-azure-devops-backend` (0.3.29 → [0.4.0](../../changelogs/@backstage/plugin-azure-devops-backend.md#040))

#### 0.4.0

##### Minor Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): **BREAKING**: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

### `@backstage/plugin-badges-backend` (0.2.5 → [0.3.0](../../changelogs/@backstage/plugin-badges-backend.md#030))

#### 0.3.0

##### Minor Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): **BREAKING**: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

##### Patch Changes

- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-bazaar-backend` (0.2.13 → [0.3.0](../../changelogs/@backstage/plugin-bazaar-backend.md#030))

#### 0.3.0

##### Minor Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): **BREAKING**: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

##### Patch Changes

- [`cfc3ca6ce060`](https://github.com/backstage/backstage/commit/cfc3ca6ce060): Changes needed to support MySQL

### `@backstage/plugin-catalog-backend-module-gitlab` (0.2.6 → [0.3.0](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#030))

#### 0.3.0

##### Minor Changes

- [`3d73bafd85c9`](https://github.com/backstage/backstage/commit/3d73bafd85c9): Fix Gitlab.com user ingestion by scoping GitlabOrgDiscoveryEntityProvider to a group.

  **BREAKING** The `group` parameter is now required Gitlab.com Org Data integrations and the backend will fail to start without this option configured.

  ```diff
  catalog:
    providers:
      gitlab:
        yourProviderId:
          host: gitlab.com
          orgEnabled: true
  +       group: org/teams
  ```

##### Patch Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.2.2 → [0.3.0](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#030))

#### 0.3.0

##### Minor Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): **BREAKING**: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

### `@backstage/plugin-devtools-backend` (0.1.5 → [0.2.0](../../changelogs/@backstage/plugin-devtools-backend.md#020))

#### 0.2.0

##### Minor Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): **BREAKING**: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

##### Patch Changes

- [`12e644aa4eef`](https://github.com/backstage/backstage/commit/12e644aa4eef): Show resource utilization in `DevTools` plugin

### `@backstage/plugin-entity-feedback-backend` (0.1.8 → [0.2.0](../../changelogs/@backstage/plugin-entity-feedback-backend.md#020))

#### 0.2.0

##### Minor Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): **BREAKING**: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

##### Patch Changes

- [`740155e8e976`](https://github.com/backstage/backstage/commit/740155e8e976): Improve backend logging if method calls fail

### `@backstage/plugin-kafka-backend` (0.2.43 → [0.3.0](../../changelogs/@backstage/plugin-kafka-backend.md#030))

#### 0.3.0

##### Minor Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): **BREAKING**: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

### `@backstage/plugin-kubernetes-backend` (0.11.5 → [0.12.0](../../changelogs/@backstage/plugin-kubernetes-backend.md#0120))

#### 0.12.0

##### Minor Changes

- [`0ad36158d980`](https://github.com/backstage/backstage/commit/0ad36158d980): Integrators can now bring their own auth strategies through the use of the `addAuthStrategy` method on `KubernetesBuilder`.

  **BREAKING** the `ClusterDetails` interface has been refactored to add an `authMetadata` field, and the`authProvider`, `serviceAccountToken`, `assumeRole`, and `externalID` fields have all been removed -- they appear within `authMetadata` using the same keys as those read by the `catalog` cluster locator. This means that if you are using a custom cluster supplier, your code will need to be updated -- as an example, instead of returning a `ClusterDetails` like `{authProvider: 'aws'}`, you will need to return one like `{authMetadata: {['kubernetes.io/auth-provider']: 'aws'}`.

  **BREAKING** on the slight chance you were using the `setAuthTranslatorMap` method on `KubernetesBuilder`, it has been removed along with the entire `KubernetesAuthTranslator` interface. This notion has been replaced with the more focused concept of an `AuthenticationStrategy`. Converting a translator to a strategy should not be especially difficult.

##### Patch Changes

- [`ccf00accb408`](https://github.com/backstage/backstage/commit/ccf00accb408): Add AWS Annotations to Kubernetes Cluster Resource
- [`72390ab2670d`](https://github.com/backstage/backstage/commit/72390ab2670d): Handle Proxy WS upgrade manually for WS handshakes
- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

- [`024b2b66a332`](https://github.com/backstage/backstage/commit/024b2b66a332): Fixed a bug where requests to the proxy endpoint would fail for clusters with `caFile` configured
- [`a8a614ba0d07`](https://github.com/backstage/backstage/commit/a8a614ba0d07): Minor `package.json` update.
- [`47ea122590f5`](https://github.com/backstage/backstage/commit/47ea122590f5): fix "undefined" kind for custom resources

### `@backstage/plugin-lighthouse-backend` (0.2.6 → [0.3.0](../../changelogs/@backstage/plugin-lighthouse-backend.md#030))

#### 0.3.0

##### Minor Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): **BREAKING**: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

### `@backstage/plugin-linguist-backend` (0.4.2 → [0.5.0](../../changelogs/@backstage/plugin-linguist-backend.md#050))

#### 0.5.0

##### Minor Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): **BREAKING**: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

##### Patch Changes

- [`b2de501bda31`](https://github.com/backstage/backstage/commit/b2de501bda31): When creating the router using `createRouterFromConfig` or using the plugin for the new backend system the `linguist.useSourceLocation` configuration is now optional.
- [`cfc3ca6ce060`](https://github.com/backstage/backstage/commit/cfc3ca6ce060): Changes needed to support MySQL

### `@backstage/plugin-periskop-backend` (0.1.21 → [0.2.0](../../changelogs/@backstage/plugin-periskop-backend.md#020))

#### 0.2.0

##### Minor Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): **BREAKING**: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

### `@backstage/plugin-proxy-backend` (0.3.2 → [0.4.0](../../changelogs/@backstage/plugin-proxy-backend.md#040))

#### 0.4.0

##### Minor Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): **BREAKING**: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

##### Patch Changes

- [`02ba0a2efd2a`](https://github.com/backstage/backstage/commit/02ba0a2efd2a): Add the route name to an error message that appears when the backend
  proxy wasn't well configured. This will help users to understand the
  issue and fix the right configuration.
- [`03691f0f3270`](https://github.com/backstage/backstage/commit/03691f0f3270): Add back the legacy proxy config, to get secret redaction

### `@backstage/plugin-todo-backend` (0.2.2 → [0.3.1](../../changelogs/@backstage/plugin-todo-backend.md#031))

#### 0.3.1

##### Minor Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): **BREAKING**: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

#### 0.3.0

Skipped due to publishing issues.

### `@backstage/plugin-user-settings-backend` (0.1.14 → [0.2.1](../../changelogs/@backstage/plugin-user-settings-backend.md#021))

#### 0.2.1

##### Minor Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): **BREAKING**: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

#### 0.2.0

Skipped due to publishing issues.

## 0.x minor version bumps

### `@backstage/plugin-auth-node` (0.2.19 → [0.3.0](../../changelogs/@backstage/plugin-auth-node.md#030))

#### 0.3.0

##### Minor Changes

- [`8513cd7d00e3`](https://github.com/backstage/backstage/commit/8513cd7d00e3): Introduced a new system for building auth providers for `@backstage/plugin-auth-backend`, which both increases the amount of code re-use across providers, and also works better with the new backend system.

  Many existing types have been moved from `@backstage/plugin-auth-backend` in order to avoid a direct dependency on the plugin from modules.

  Auth provider integrations are now primarily implemented through a pattern of creating "authenticators", which are in turn specific to each kind of integrations. Initially there are two types: `createOAuthAuthenticator` and `createProxyAuthenticator`. These come paired with functions that let you create the corresponding route handlers, `createOAuthRouteHandlers` and `createProxyAuthRouteHandlers`, as well as provider factories, `createOAuthProviderFactory` and `createProxyAuthProviderFactory`. This new authenticator pattern allows the sign-in logic to be separated from the auth integration logic, allowing it to be completely re-used across all providers of the same kind.

  The new provider factories also implement a new declarative way to configure sign-in resolvers, rather than configuration through code. Sign-in resolvers can now be configured through the `resolvers` configuration key, where the first resolver that provides an identity will be used, for example:

  ```yaml
  auth:
    providers:
      google:
        development:
          clientId: ...
          clientSecret: ...
          signIn:
            resolvers:
              - resolver: emailMatchingUserEntityAnnotation
              - resolver: emailLocalPartMatchingUserEntityName
  ```

  These configurable resolvers are created with a new `createSignInResolverFactory` function, which creates a sign-in resolver factory, optionally with an options schema that will be used both when configuring the sign-in resolver through configuration and code.

  The internal helpers from `@backstage/plugin-auth-backend` that were used to implement auth providers using passport strategies have now also been made available as public API, through `PassportHelpers` and `PassportOAuthAuthenticatorHelper`.

##### Patch Changes

- [`18619f793c94`](https://github.com/backstage/backstage/commit/18619f793c94): The `BackstageIdentityResponse` interface now has an optional `expiresInSeconds` field that can be used to signal session expiration. The `prepareBackstageIdentityResponse` utility will now also read the expiration from the provided token, and include it in the response.

### `@backstage/plugin-catalog-backend-module-github` (0.3.7 → [0.4.0](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#040))

#### 0.4.0

##### Minor Changes

- [`fa7004d9722c`](https://github.com/backstage/backstage/commit/fa7004d9722c): Added a `catalogModuleGithubOrgEntityProvider` for the new backend system

##### Patch Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

- [`3d63e60f3c36`](https://github.com/backstage/backstage/commit/3d63e60f3c36): Internal restructure to avoid circular imports
- [`96353bb7cb4a`](https://github.com/backstage/backstage/commit/96353bb7cb4a): Properly support custom `userTransformer` returning `undefined` in `GithubMultiOrgEntityProvider`
- [`3c44761b9191`](https://github.com/backstage/backstage/commit/3c44761b9191): Allow github user and team transforms to return any Entity

### `@backstage/plugin-catalog-import` (0.9.13 → [0.10.0](../../changelogs/@backstage/plugin-catalog-import.md#0100))

#### 0.10.0

##### Minor Changes

- [`c3c1fd3a1765`](https://github.com/backstage/backstage/commit/c3c1fd3a1765): Slight change to the `PreparePullRequestFormProps`, because of an update to `react-hook-form`.

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.

## 0.0.x patch version bumps

### `@backstage/plugin-analytics-module-newrelic-browser` (0.0.1 → [0.0.2](../../changelogs/@backstage/plugin-analytics-module-newrelic-browser.md#002))

#### 0.0.2

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-explore-common` (0.0.1 → [0.0.2](../../changelogs/@backstage/plugin-explore-common.md#002))

#### 0.0.2

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.

### `@backstage/plugin-explore-react` (0.0.30 → [0.0.31](../../changelogs/@backstage/plugin-explore-react.md#0031))

#### 0.0.31

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/release-manifests` (0.0.9 → [0.0.10](../../changelogs/@backstage/release-manifests.md#0010))

#### 0.0.10

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

## Other minor version bumps

### `@backstage/config` (1.0.8 → [1.1.0](../../changelogs/@backstage/config.md#110))

#### 1.1.0

##### Minor Changes

- [`62f448edb0b5`](https://github.com/backstage/backstage/commit/62f448edb0b5): Added a `readDurationFromConfig` function

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/config-loader` (1.4.0 → [1.5.0](../../changelogs/@backstage/config-loader.md#150))

#### 1.5.0

##### Minor Changes

- [`9606ba0939e6`](https://github.com/backstage/backstage/commit/9606ba0939e6): Deep visibility now also applies to values that are not covered by the configuration schema.

  For example, given the following configuration schema:

  ```ts
  // plugins/a/config.schema.ts
  export interface Config {
    /** @deepVisibility frontend */
    a?: unknown;
  }

  // plugins/a/config.schema.ts
  export interface Config {
    a?: {
      b?: string;
    };
  }
  ```

  All values under `a` are now visible to the frontend, while previously only `a` and `a/b` would've been visible.

##### Patch Changes

- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency
- [`f9657b891b00`](https://github.com/backstage/backstage/commit/f9657b891b00): Do not unnecessarily notify subscribers when no-op updates to config happen

### `@backstage/core-plugin-api` (1.5.3 → [1.6.0](../../changelogs/@backstage/core-plugin-api.md#160))

#### 1.6.0

##### Minor Changes

- [`18619f793c94`](https://github.com/backstage/backstage/commit/18619f793c94): Added the optional `expiresAt` field that may now be part of a `BackstageIdentityResponse`.
- [`6e30769cc627`](https://github.com/backstage/backstage/commit/6e30769cc627): Introduced experimental support for internationalization.

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/integration` (1.6.2 → [1.7.0](../../changelogs/@backstage/integration.md#170))

#### 1.7.0

##### Minor Changes

- [`5f1a92b9f19f`](https://github.com/backstage/backstage/commit/5f1a92b9f19f): Added `AzureDevOpsCredentialsProvider` to support multiple Azure DevOps organizations and **deprecated** `AzureIntegrationConfig.credential` and `AzureIntegrationConfig.token` in favour of `AzureIntegrationConfig.credentials`. You can now use specific credentials for different Azure DevOps (Server) organizations by specifying the `organizations` field on a credential:

  ```yaml
  integrations:
    azure:
      - host: dev.azure.com
        credentials:
          - organizations:
              - my-org
              - my-other-org
            clientId: ${AZURE_CLIENT_ID}
            clientSecret: ${AZURE_CLIENT_SECRET}
            tenantId: ${AZURE_TENANT_ID}
          - organizations:
              - yet-another-org
            personalAccessToken: ${PERSONAL_ACCESS_TOKEN}
  ```

  See the [Azure integration documentation](https://backstage.io/docs/integrations/azure/locations) for more information.

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`2d2fc9d20ebb`](https://github.com/backstage/backstage/commit/2d2fc9d20ebb): Additional fix for Gitiles auth links
- [`cb2e19d82d95`](https://github.com/backstage/backstage/commit/cb2e19d82d95): Gitiles: Fixed auth prefix issue

### `@backstage/plugin-catalog` (1.12.4 → [1.13.0](../../changelogs/@backstage/plugin-catalog.md#1130))

#### 1.13.0

##### Minor Changes

- [`e44f45ac4515`](https://github.com/backstage/backstage/commit/e44f45ac4515): This change allows a new annotation of `backstage.io/techdocs-entity` this ref allows you to reference another entity for its TechDocs. This allows you have a single TechDoc for all items in a system, for example you might have a frontend and a backend in the same repo. This would allow you to have TechDocs build under a `System` entity while referencing the system e.g.: `backstage.io/techdocs-entity: system:default/example` that will show the systems docs in both the TechDocs button and the TechDocs tab without needing to do duplicate builds and filling the TechDocs page with garbage.

##### Patch Changes

- [`832eef72485b`](https://github.com/backstage/backstage/commit/832eef72485b): Added title to props for `Has<kind>Cards`.
- [`163a41035e42`](https://github.com/backstage/backstage/commit/163a41035e42): Fixed an issue where `EntitySwitch` was preventing the display of entity errors.
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.

### `@backstage/plugin-catalog-backend` (1.12.4 → [1.13.0](../../changelogs/@backstage/plugin-catalog-backend.md#1130))

#### 1.13.0

##### Minor Changes

- [`62f448edb0b5`](https://github.com/backstage/backstage/commit/62f448edb0b5): Allow configuring the processing interval in your app-config, under the `catalog.processingInterval` key.
- [`09cfc3cf467d`](https://github.com/backstage/backstage/commit/09cfc3cf467d): set azure annotation `dev.azure.com/project-repo` in `AnnotateScmSlugEntityProcessor` to find the project and repo information for the repos that contains `dev.azure.com` in the url

##### Patch Changes

- [`149361e81622`](https://github.com/backstage/backstage/commit/149361e81622): Fix to the `limit` parameter on entity queries.
- [`1fd2109739c1`](https://github.com/backstage/backstage/commit/1fd2109739c1): Changed the processing loop task pipeline implementation from recursive to iterative
- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

- [`0f8a97777489`](https://github.com/backstage/backstage/commit/0f8a97777489): Update OpenAPI schema to relax the encoding validation of all request parameters.
- [`0198aa596fd9`](https://github.com/backstage/backstage/commit/0198aa596fd9): Fixed a link to the frontend Backstage plugin that had pointed to itself.
- [`2d32d8a611e3`](https://github.com/backstage/backstage/commit/2d32d8a611e3): Fixed validation of the `fullTextFilterFields` query parameter.
- [`acffa17027b6`](https://github.com/backstage/backstage/commit/acffa17027b6): Added some examples to the catalog OpenAPI definition
- [`45947d3b2759`](https://github.com/backstage/backstage/commit/45947d3b2759): Fixes an issue where `order` was not a recognized parameter for the `/entities` endpoint.
- [`41d1b2d628ea`](https://github.com/backstage/backstage/commit/41d1b2d628ea): Fix OpenAPI schema for the facets endpoint
- [`618257f3e413`](https://github.com/backstage/backstage/commit/618257f3e413): Fix issue with `catalogFileName` not being a required property for `/analyze-location`
- [`cfc3ca6ce060`](https://github.com/backstage/backstage/commit/cfc3ca6ce060): Changes needed to support MySQL
- [`814feeed7343`](https://github.com/backstage/backstage/commit/814feeed7343): Update to handle invalid luxon values

### `@backstage/plugin-scaffolder` (1.14.4 → [1.15.0](../../changelogs/@backstage/plugin-scaffolder.md#1150))

#### 1.15.0

##### Minor Changes

- [`0119c326394a`](https://github.com/backstage/backstage/commit/0119c326394a): adding a .zip download to dry run results page, including zip.js as dependency

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`6e69c11a3535`](https://github.com/backstage/backstage/commit/6e69c11a3535): Restored functionality to `OwnedEntityPicker` by converting deprecated `ui:options` input to `catalogFilter`.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency
- [`b16c341ced45`](https://github.com/backstage/backstage/commit/b16c341ced45): Updated dependency `@rjsf/utils` to `5.13.0`.
  Updated dependency `@rjsf/core-v5` to `npm:@rjsf/core@5.13.0`.
  Updated dependency `@rjsf/material-ui-v5` to `npm:@rjsf/material-ui@5.13.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.13.0`.

### `@backstage/plugin-scaffolder-backend` (1.16.5 → [1.17.0](../../changelogs/@backstage/plugin-scaffolder-backend.md#1170))

#### 1.17.0

##### Minor Changes

- [`b5f239b50bcf`](https://github.com/backstage/backstage/commit/b5f239b50bcf): Improved the `parseEntityRef` Scaffolder filter by introducing the ability for users to provide default kind and/or namespace values. The filter now takes
  2 arguments, similarly to the original [parseEntityRef](https://github.com/backstage/backstage/blob/v1.17.2/packages/catalog-model/src/entity/ref.ts#L77).
- [`d5313ede3529`](https://github.com/backstage/backstage/commit/d5313ede3529): **DEPRECATION**: Deprecated `ScaffolderEntitiesProcessor`, which should now instead be imported from `@backstage/plugin-catalog-backend-module-scaffolder-entity-model`.

  `catalogModuleTemplateKind` was also moved to that package and renamed to `catalogModuleScaffolderEntityModel`, without any deprecation since it was an alpha export.

##### Patch Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

- [`a4989552d828`](https://github.com/backstage/backstage/commit/a4989552d828): Add examples for `publish:github` and `publish:gitlab` scaffolder actions.
- [`ded27b83ead2`](https://github.com/backstage/backstage/commit/ded27b83ead2): Add examples for `publish:bitbucket` scaffolder actions.
- [`5f1a92b9f19f`](https://github.com/backstage/backstage/commit/5f1a92b9f19f): Use `DefaultAzureDevOpsCredentialsProvider` to retrieve credentials for Azure DevOps.
- [`fb57a4694fc6`](https://github.com/backstage/backstage/commit/fb57a4694fc6): Fixed the plugin and module ID of the alpha `catalogModuleTemplateKind` export.
- [`f3c0b95e3ef1`](https://github.com/backstage/backstage/commit/f3c0b95e3ef1): Add examples for `github:actions:dispatch` scaffolder actions.
- [`cfc3ca6ce060`](https://github.com/backstage/backstage/commit/cfc3ca6ce060): Changes needed to support MySQL
- [`814feeed7343`](https://github.com/backstage/backstage/commit/814feeed7343): Update to handle invalid luxon values

### `@backstage/plugin-search` (1.3.6 → [1.4.0](../../changelogs/@backstage/plugin-search.md#140))

#### 1.4.0

##### Minor Changes

- [`b78f570f44d3`](https://github.com/backstage/backstage/commit/b78f570f44d3): The SearchPage component can now be configured via app-config.yaml with default query parameters to define how it behaves when it is first loaded or reset. Check out the following example:

  ```yaml
  search:
    query:
      pageLimit: 50
  ```

  Acceptable values for `pageLimit` are `10`, `25`, `50` or `100`.

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-search-react` (1.6.4 → [1.7.0](../../changelogs/@backstage/plugin-search-react.md#170))

#### 1.7.0

##### Minor Changes

- [`b78f570f44d3`](https://github.com/backstage/backstage/commit/b78f570f44d3): The SearchPage component can now be configured via app-config.yaml with default query parameters to define how it behaves when it is first loaded or reset. Check out the following example:

  ```yaml
  search:
    query:
      pageLimit: 50
  ```

  Acceptable values for `pageLimit` are `10`, `25`, `50` or `100`.

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`45f8a95e1068`](https://github.com/backstage/backstage/commit/45f8a95e1068): Optionally initializes the search context with default settings for search queries only when the config is defined, rather than always overriding it.
- [`3d63e60f3c36`](https://github.com/backstage/backstage/commit/3d63e60f3c36): Internal restructure to avoid circular imports

### `@backstage/plugin-techdocs` (1.6.8 → [1.7.0](../../changelogs/@backstage/plugin-techdocs.md#170))

#### 1.7.0

##### Minor Changes

- [`e44f45ac4515`](https://github.com/backstage/backstage/commit/e44f45ac4515): This change allows a new annotation of `backstage.io/techdocs-entity` this ref allows you to reference another entity for its TechDocs. This allows you have a single TechDoc for all items in a system, for example you might have a frontend and a backend in the same repo. This would allow you to have TechDocs build under a `System` entity while referencing the system e.g.: `backstage.io/techdocs-entity: system:default/example` that will show the systems docs in both the TechDocs button and the TechDocs tab without needing to do duplicate builds and filling the TechDocs page with garbage.

##### Patch Changes

- [`88c9525a36f3`](https://github.com/backstage/backstage/commit/88c9525a36f3): Fixed bug in styles that caused next and previous links in footer to overlap page content.
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-techdocs-backend` (1.6.7 → [1.7.0](../../changelogs/@backstage/plugin-techdocs-backend.md#170))

#### 1.7.0

##### Minor Changes

- [`5985d458ee30`](https://github.com/backstage/backstage/commit/5985d458ee30): Add a `techdocs.publisher.azureBlobStorage.connectionString` app-config setting, which can be leveraged for improved Azurite support.
- [`10a86bd4ae12`](https://github.com/backstage/backstage/commit/10a86bd4ae12): Add optional config and cli option for techdocs to specify default mkdocs plugins.

##### Patch Changes

- [`60af8017dd84`](https://github.com/backstage/backstage/commit/60af8017dd84): Expand techdocs.publisher.type with `googleGcs`,`awsS3`,`azureBlobStorage` and `openStackSwift`
- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

- [`a8a614ba0d07`](https://github.com/backstage/backstage/commit/a8a614ba0d07): Minor `package.json` update.

### `@backstage/plugin-techdocs-module-addons-contrib` (1.0.18 → [1.1.0](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#110))

#### 1.1.0

##### Minor Changes

- [`86c19906fe4b`](https://github.com/backstage/backstage/commit/86c19906fe4b): Enable zoom icon for techdocs images inside lightbox

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-techdocs-node` (1.7.6 → [1.8.0](../../changelogs/@backstage/plugin-techdocs-node.md#180))

#### 1.8.0

##### Minor Changes

- [`5985d458ee30`](https://github.com/backstage/backstage/commit/5985d458ee30): Add a `techdocs.publisher.azureBlobStorage.connectionString` app-config setting, which can be leveraged for improved Azurite support.
- [`10a86bd4ae12`](https://github.com/backstage/backstage/commit/10a86bd4ae12): Add optional config and cli option for techdocs to specify default mkdocs plugins.

### `@techdocs/cli` (1.4.7 → [1.5.0](../../changelogs/@techdocs/cli.md#150))

#### 1.5.0

##### Minor Changes

- [`10a86bd4ae12`](https://github.com/backstage/backstage/commit/10a86bd4ae12): Add optional config and cli option for techdocs to specify default mkdocs plugins.

## Other patch version bumps

### `@backstage/app-defaults` (1.4.2 → [1.4.3](../../changelogs/@backstage/app-defaults.md#143))

#### 1.4.3

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/backend-app-api` (0.5.2 → [0.5.3](../../changelogs/@backstage/backend-app-api.md#053))

#### 0.5.3

##### Patch Changes

- [`154632d8753b`](https://github.com/backstage/backstage/commit/154632d8753b): Add support for discovering additional service factories during startup.
- [`37a20c7f14aa`](https://github.com/backstage/backstage/commit/37a20c7f14aa): Adds include and exclude configuration to feature discovery of backend packages
  Adds alpha modules to feature discovery
- [`cb7fc410ed99`](https://github.com/backstage/backstage/commit/cb7fc410ed99): The experimental backend feature discovery now only considers default exports from packages. It no longer filters packages to include based on the package role, except that `'cli'` packages are ignored. However, the `"backstage"` field is still required in `package.json`.
- [`3fc64b9e2f8f`](https://github.com/backstage/backstage/commit/3fc64b9e2f8f): Extension points are now tracked via their ID rather than reference, in order to support package duplication.
- [`3b30b179cb38`](https://github.com/backstage/backstage/commit/3b30b179cb38): Add support for installing features as package imports, for example `backend.add(import('my-plugin'))`.
- [`b219d097b3f4`](https://github.com/backstage/backstage/commit/b219d097b3f4): Backend startup will now fail if any circular service dependencies are detected.

### `@backstage/backend-common` (0.19.4 → [0.19.5](../../changelogs/@backstage/backend-common.md#0195))

#### 0.19.5

##### Patch Changes

- [`6847cd6225d6`](https://github.com/backstage/backstage/commit/6847cd6225d6): Avoid starting database keepalive loop in tests.
- [`fd3fdd0e3338`](https://github.com/backstage/backstage/commit/fd3fdd0e3338): The root logger is now initialized lazily, fixing a circular dependency issue with `@backstage/backend-app-api` that would result in `Cannot read properties of undefined (reading 'redacter')`.
- [`5f1a92b9f19f`](https://github.com/backstage/backstage/commit/5f1a92b9f19f): Use `DefaultAzureDevOpsCredentialsProvider` to retrieve credentials for Azure DevOps.
- [`19a140418cc8`](https://github.com/backstage/backstage/commit/19a140418cc8): Added retries for initial database creation, as well as set minimum connection pool size for the database creation client to 0 and lowered the connection acquisition timeout.
- [`05508a9757d2`](https://github.com/backstage/backstage/commit/05508a9757d2): Minor internal refactor
- [`cfc3ca6ce060`](https://github.com/backstage/backstage/commit/cfc3ca6ce060): Changes needed to support MySQL

### `@backstage/backend-plugin-api` (0.6.2 → [0.6.3](../../changelogs/@backstage/backend-plugin-api.md#063))

#### 0.6.3

##### Patch Changes

- [`ba4506076e2d`](https://github.com/backstage/backstage/commit/ba4506076e2d): Ensure that root scoped services cannot accept (at a type level) plugin scoped deps
- [`474b792d6a43`](https://github.com/backstage/backstage/commit/474b792d6a43): Service factory functions are now marked as feature factories that can be installed in the backend.

### `@backstage/backend-tasks` (0.5.7 → [0.5.8](../../changelogs/@backstage/backend-tasks.md#058))

#### 0.5.8

##### Patch Changes

- [`8fd91547cd0b`](https://github.com/backstage/backstage/commit/8fd91547cd0b): When starting a task that existed before, with a faster schedule than it
  previously had, the task will now correctly obey the faster schedule
  immediately. Before this fix, the new schedule was only obeyed after the next
  pending (according to the old schedule) run had completed.
- [`62f448edb0b5`](https://github.com/backstage/backstage/commit/62f448edb0b5): Use `readDurationFromConfig` from the config package
- [`74604806aae8`](https://github.com/backstage/backstage/commit/74604806aae8): Avoid starting task janitor in tests.
- [`cfc3ca6ce060`](https://github.com/backstage/backstage/commit/cfc3ca6ce060): Changes needed to support MySQL
- [`814feeed7343`](https://github.com/backstage/backstage/commit/814feeed7343): Update to handle invalid luxon values

### `@backstage/backend-test-utils` (0.2.2 → [0.2.3](../../changelogs/@backstage/backend-test-utils.md#023))

#### 0.2.3

##### Patch Changes

- [`58cb5e5cea7b`](https://github.com/backstage/backstage/commit/58cb5e5cea7b): Introduced a new utility for testing service factories, `ServiceFactoryTester`.
- [`202e52c5e361`](https://github.com/backstage/backstage/commit/202e52c5e361): Add support for installing backend features via module imports, for example `startTestBackend({ features: [import('my-plugin')] })`.
- [`9fb3b5373c45`](https://github.com/backstage/backstage/commit/9fb3b5373c45): Extended `mockService` to also include mocked variants, for example `mockServices.lifecycle.mock()`. The returned mocked implementation will have a `factory` property which is a service factory for itself. You can also pass a partial implementation of the service to the mock function to use a mock implementation of specific methods.
- [`eb1594da5812`](https://github.com/backstage/backstage/commit/eb1594da5812): Serialize test database shutdown, and add logging

### `@backstage/catalog-client` (1.4.3 → [1.4.4](../../changelogs/@backstage/catalog-client.md#144))

#### 1.4.4

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.

### `@backstage/catalog-model` (1.4.1 → [1.4.2](../../changelogs/@backstage/catalog-model.md#142))

#### 1.4.2

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.

### `@backstage/cli` (0.22.12 → [0.22.13](../../changelogs/@backstage/cli.md#02213))

#### 0.22.13

##### Patch Changes

- [`04eabd21bee4`](https://github.com/backstage/backstage/commit/04eabd21bee4): Added the ability to specify the listen address for the `--inspect` and `--inspect-brk` command. You can now set the `ip` and port of the `inspect` and `inspectBrk` by adding for example `--inspect=0.0.0.0:9229`
- [`278d9326eb40`](https://github.com/backstage/backstage/commit/278d9326eb40): Added the ability to create a plain backend module with the `new` command.
- [`4d5eeec52d80`](https://github.com/backstage/backstage/commit/4d5eeec52d80): Add ESM loader for the experimental backend start command.
- [`3494c502aba7`](https://github.com/backstage/backstage/commit/3494c502aba7): Added a new `repo fix` command that fixes auto-fixable problems in all packages. Initially the command fixes package export declarations, as well as marks all non-bundled frontend packages as side-effect free. Marking packages as free of side-effects can drastically reduce the Webpack bundle size.
- [`f36113ca2305`](https://github.com/backstage/backstage/commit/f36113ca2305): Add experimental support for frontend package discovery.
- [`a23fce763c6a`](https://github.com/backstage/backstage/commit/a23fce763c6a): Fixed a bug where package exports entry points could not be `.tsx` files.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency
- [`ea779492ad88`](https://github.com/backstage/backstage/commit/ea779492ad88): Updated dependency `run-script-webpack-plugin` to `^0.2.0`.
- [`4af4defcc114`](https://github.com/backstage/backstage/commit/4af4defcc114): When running `version:bump` it will now log duplicates instead of throwing an error
- [`71d4368ae5cc`](https://github.com/backstage/backstage/commit/71d4368ae5cc): Added support for the `dev/index` entry point for backend plugins and modules.
- [`956d226eeeee`](https://github.com/backstage/backstage/commit/956d226eeeee): Add `"sideEffects": false` to `package.json` in frontend package templates. This can be added to existing packages using the new `yarn fix` command.
- [`cd7331587eb3`](https://github.com/backstage/backstage/commit/cd7331587eb3): Removed the experimental `package fix` command that was used to automatically add dependencies to `package.json`, but has since been replaced by the `no-undeclared-imports` rule from `@backstage/eslint-plugin`.
- [`219b46ae1a50`](https://github.com/backstage/backstage/commit/219b46ae1a50): Include default alpha export during package detection

### `@backstage/core-components` (0.13.4 → [0.13.5](../../changelogs/@backstage/core-components.md#0135))

#### 0.13.5

##### Patch Changes

- [`0c9907645aab`](https://github.com/backstage/backstage/commit/0c9907645aab): Fixed an issue causing `StructuredMetadataTable` to crash in case metadata contained `null` values.
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`9b74166d11a1`](https://github.com/backstage/backstage/commit/9b74166d11a1): Added `<AutoLogout>` component which introduces an optional automatic logout mechanism on user inactivity
- [`117027636b10`](https://github.com/backstage/backstage/commit/117027636b10): Minor internal tweak to handle `classnames` update
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency
- [`db92d1244897`](https://github.com/backstage/backstage/commit/db92d1244897): Updated dependency `rc-progress` to `3.5.1`.
- [`47782f4bfa5b`](https://github.com/backstage/backstage/commit/47782f4bfa5b): Add loading indicator to Table
- [`3d63e60f3c36`](https://github.com/backstage/backstage/commit/3d63e60f3c36): Internal restructure to avoid circular imports

### `@backstage/create-app` (0.5.4 → [0.5.5](../../changelogs/@backstage/create-app.md#055))

#### 0.5.5

##### Patch Changes

- [`05508a9757d2`](https://github.com/backstage/backstage/commit/05508a9757d2): Updated the backend template to no longer create duplicate connection pools to plugins that use the task scheduler.

  To apply this change in your own repository, perform the following small update:

  ```diff
  // in packages/backend/src/index.ts
  -  const taskScheduler = TaskScheduler.fromConfig(config);
  +  const taskScheduler = TaskScheduler.fromConfig(config, { databaseManager });
  ```

- [`a4c08241ad92`](https://github.com/backstage/backstage/commit/a4c08241ad92): Switched the template to use TypeScript 5.2 by default.
- [`f8c8e8de37b6`](https://github.com/backstage/backstage/commit/f8c8e8de37b6): Bumped create-app version.
- [`fc1a38bc5723`](https://github.com/backstage/backstage/commit/fc1a38bc5723): Bumped create-app version.
- [`4606e005df5d`](https://github.com/backstage/backstage/commit/4606e005df5d): Added a `fix` scripts that calls the new `backstage-cli repo fix` command.

  To apply this change to an existing app, make the following change to your root `package.json`:

  ```diff
       "test": "backstage-cli repo test",
       "test:all": "backstage-cli repo test --coverage",
  +    "fix": "backstage-cli repo fix",
       "lint": "backstage-cli repo lint --since origin/master",
  ```

- [`612594022245`](https://github.com/backstage/backstage/commit/612594022245): Add a notification when `yarn install` is taking a long time.
- [`8db70ecbb325`](https://github.com/backstage/backstage/commit/8db70ecbb325): Updated Dockerfile to include `apt-get update` when installing the SQLite dependency
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/dev-utils` (1.0.20 → [1.0.21](../../changelogs/@backstage/dev-utils.md#1021))

#### 1.0.21

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/errors` (1.2.1 → [1.2.2](../../changelogs/@backstage/errors.md#122))

#### 1.2.2

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.

### `@backstage/integration-react` (1.1.18 → [1.1.19](../../changelogs/@backstage/integration-react.md#1119))

#### 1.1.19

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-adr` (0.6.6 → [0.6.7](../../changelogs/@backstage/plugin-adr.md#067))

#### 0.6.7

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`aa844e704a32`](https://github.com/backstage/backstage/commit/aa844e704a32): support for i18n feature
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-adr-common` (0.2.14 → [0.2.15](../../changelogs/@backstage/plugin-adr-common.md#0215))

#### 0.2.15

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.

### `@backstage/plugin-airbrake` (0.3.23 → [0.3.24](../../changelogs/@backstage/plugin-airbrake.md#0324))

#### 0.3.24

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-allure` (0.1.39 → [0.1.40](../../changelogs/@backstage/plugin-allure.md#0140))

#### 0.1.40

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-analytics-module-ga` (0.1.32 → [0.1.33](../../changelogs/@backstage/plugin-analytics-module-ga.md#0133))

#### 0.1.33

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-analytics-module-ga4` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-analytics-module-ga4.md#014))

#### 0.1.4

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-apache-airflow` (0.2.14 → [0.2.15](../../changelogs/@backstage/plugin-apache-airflow.md#0215))

#### 0.2.15

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-api-docs` (0.9.10 → [0.9.11](../../changelogs/@backstage/plugin-api-docs.md#0911))

#### 0.9.11

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-api-docs-module-protoc-gen-doc` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-api-docs-module-protoc-gen-doc.md#013))

#### 0.1.3

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.

### `@backstage/plugin-apollo-explorer` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-apollo-explorer.md#0115))

#### 0.1.15

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-app-backend` (0.3.50 → [0.3.51](../../changelogs/@backstage/plugin-app-backend.md#0351))

#### 0.3.51

##### Patch Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

- [`cfc3ca6ce060`](https://github.com/backstage/backstage/commit/cfc3ca6ce060): Changes needed to support MySQL

### `@backstage/plugin-azure-devops` (0.3.5 → [0.3.6](../../changelogs/@backstage/plugin-azure-devops.md#036))

#### 0.3.6

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-azure-devops-common` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-azure-devops-common.md#031))

#### 0.3.1

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.

### `@backstage/plugin-azure-sites` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-azure-sites.md#0113))

#### 0.1.13

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-azure-sites-common` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-azure-sites-common.md#011))

#### 0.1.1

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.

### `@backstage/plugin-badges` (0.2.47 → [0.2.48](../../changelogs/@backstage/plugin-badges.md#0248))

#### 0.2.48

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-bazaar` (0.2.15 → [0.2.16](../../changelogs/@backstage/plugin-bazaar.md#0216))

#### 0.2.16

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.

### `@backstage/plugin-bitbucket-cloud-common` (0.2.11 → [0.2.12](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#0212))

#### 0.2.12

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.

### `@backstage/plugin-bitrise` (0.1.50 → [0.1.51](../../changelogs/@backstage/plugin-bitrise.md#0151))

#### 0.1.51

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-catalog-backend-module-aws` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#026))

#### 0.2.6

##### Patch Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

### `@backstage/plugin-catalog-backend-module-azure` (0.1.21 → [0.1.22](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0122))

#### 0.1.22

##### Patch Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

- [`94f96508491d`](https://github.com/backstage/backstage/commit/94f96508491d): Improve consistency of results from the `AzureDevOpsEntityProvider`.
- [`5f1a92b9f19f`](https://github.com/backstage/backstage/commit/5f1a92b9f19f): Use `DefaultAzureDevOpsCredentialsProvider` to retrieve credentials for Azure DevOps.
- [`044b4f2fb1e3`](https://github.com/backstage/backstage/commit/044b4f2fb1e3): Remove duplications from Azure search before committing the new locations to the catalog.

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.17 → [0.1.18](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#0118))

#### 0.1.18

##### Patch Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#0116))

#### 0.1.16

##### Patch Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

### `@backstage/plugin-catalog-backend-module-gcp` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#013))

#### 0.1.3

##### Patch Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

- [`201f07c27f1e`](https://github.com/backstage/backstage/commit/201f07c27f1e): Fix GKE endpoint parsing

  Endpoint is an IP, not url. It is always https on default (443) port
  ref: https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters#Cluster

### `@backstage/plugin-catalog-backend-module-gerrit` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0119))

#### 0.1.19

##### Patch Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.5 → [0.4.6](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#046))

#### 0.4.6

##### Patch Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

### `@backstage/plugin-catalog-backend-module-msgraph` (0.5.9 → [0.5.10](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#0510))

#### 0.5.10

##### Patch Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

### `@backstage/plugin-catalog-backend-module-puppetdb` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#018))

#### 0.1.8

##### Patch Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

### `@backstage/plugin-catalog-common` (1.0.15 → [1.0.16](../../changelogs/@backstage/plugin-catalog-common.md#1016))

#### 1.0.16

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.

### `@backstage/plugin-catalog-graph` (0.2.35 → [0.2.36](../../changelogs/@backstage/plugin-catalog-graph.md#0236))

#### 0.2.36

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.

### `@backstage/plugin-catalog-react` (1.8.3 → [1.8.4](../../changelogs/@backstage/plugin-catalog-react.md#184))

#### 1.8.4

##### Patch Changes

- [`bd817209ddd7`](https://github.com/backstage/backstage/commit/bd817209ddd7): Export the `EntityAutocompletePicker` component.
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`7029ba1ce0af`](https://github.com/backstage/backstage/commit/7029ba1ce0af): Added delete alert popup when user delete the entity

### `@backstage/plugin-catalog-unprocessed-entities` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#013))

#### 0.1.3

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-cicd-statistics` (0.1.25 → [0.1.26](../../changelogs/@backstage/plugin-cicd-statistics.md#0126))

#### 0.1.26

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.

### `@backstage/plugin-cicd-statistics-module-gitlab` (0.1.19 → [0.1.20](../../changelogs/@backstage/plugin-cicd-statistics-module-gitlab.md#0120))

#### 0.1.20

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.

### `@backstage/plugin-circleci` (0.3.23 → [0.3.24](../../changelogs/@backstage/plugin-circleci.md#0324))

#### 0.3.24

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-cloudbuild` (0.3.23 → [0.3.24](../../changelogs/@backstage/plugin-cloudbuild.md#0324))

#### 0.3.24

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency
- [`814feeed7343`](https://github.com/backstage/backstage/commit/814feeed7343): Update to handle invalid luxon values

### `@backstage/plugin-code-climate` (0.1.23 → [0.1.24](../../changelogs/@backstage/plugin-code-climate.md#0124))

#### 0.1.24

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-code-coverage` (0.2.16 → [0.2.17](../../changelogs/@backstage/plugin-code-coverage.md#0217))

#### 0.2.17

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`1d8f4f0a7486`](https://github.com/backstage/backstage/commit/1d8f4f0a7486): Use fetchApi to ensure authorization is used when fetching code-coverage data
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-code-coverage-backend` (0.2.16 → [0.2.17](../../changelogs/@backstage/plugin-code-coverage-backend.md#0217))

#### 0.2.17

##### Patch Changes

- [`3f1367b956c6`](https://github.com/backstage/backstage/commit/3f1367b956c6): Added support for LCOV coverage reports
- [`df005d9932fb`](https://github.com/backstage/backstage/commit/df005d9932fb): Add text body parser for LCOV reports
- [`91ccb56fb418`](https://github.com/backstage/backstage/commit/91ccb56fb418): Replace `express-xml-bodyparser` with `body-parser-xml`.

  `express-xml-bodyparser` was last updated 8 years ago
  and currently depends on a version of `xml2js` which
  contains a vulnerability.

  This change will swap it out in favor of `body-parser-xml`
  which is more maintained and depends on a more recent `xml2js`
  version without the vulnerability.

- [`33e606a797ef`](https://github.com/backstage/backstage/commit/33e606a797ef): Include auth token when fetching entity
- [`d409ed988aed`](https://github.com/backstage/backstage/commit/d409ed988aed): Correct the line hits calculation for Cobertura reports
- [`cfc3ca6ce060`](https://github.com/backstage/backstage/commit/cfc3ca6ce060): Changes needed to support MySQL

### `@backstage/plugin-codescene` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-codescene.md#0117))

#### 0.1.17

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency
- [`db92d1244897`](https://github.com/backstage/backstage/commit/db92d1244897): Updated dependency `rc-progress` to `3.5.1`.

### `@backstage/plugin-config-schema` (0.1.44 → [0.1.45](../../changelogs/@backstage/plugin-config-schema.md#0145))

#### 0.1.45

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-cost-insights` (0.12.12 → [0.12.13](../../changelogs/@backstage/plugin-cost-insights.md#01213))

#### 0.12.13

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency
- [`a54cd411639e`](https://github.com/backstage/backstage/commit/a54cd411639e): Updated dependency `@types/pluralize` to `^0.0.30`.

### `@backstage/plugin-cost-insights-common` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-cost-insights-common.md#012))

#### 0.1.2

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.

### `@backstage/plugin-devtools` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-devtools.md#014))

#### 0.1.4

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`12e644aa4eef`](https://github.com/backstage/backstage/commit/12e644aa4eef): Show resource utilization in `DevTools` plugin
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-devtools-common` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-devtools-common.md#014))

#### 0.1.4

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`12e644aa4eef`](https://github.com/backstage/backstage/commit/12e644aa4eef): Show resource utilization in `DevTools` plugin

### `@backstage/plugin-dynatrace` (7.0.3 → [7.0.4](../../changelogs/@backstage/plugin-dynatrace.md#704))

#### 7.0.4

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-entity-feedback` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-entity-feedback.md#027))

#### 0.2.7

##### Patch Changes

- [`5e2e06db747a`](https://github.com/backstage/backstage/commit/5e2e06db747a): Improve README to note that Backstage identity is required to be configured
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-entity-feedback-common` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-entity-feedback-common.md#013))

#### 0.1.3

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.

### `@backstage/plugin-entity-validation` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-entity-validation.md#019))

#### 0.1.9

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-events-backend` (0.2.11 → [0.2.12](../../changelogs/@backstage/plugin-events-backend.md#0212))

#### 0.2.12

##### Patch Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

### `@backstage/plugin-events-backend-module-aws-sqs` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#026))

#### 0.2.6

##### Patch Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

### `@backstage/plugin-explore` (0.4.9 → [0.4.10](../../changelogs/@backstage/plugin-explore.md#0410))

#### 0.4.10

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-firehydrant` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-firehydrant.md#028))

#### 0.2.8

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-fossa` (0.2.55 → [0.2.56](../../changelogs/@backstage/plugin-fossa.md#0256))

#### 0.2.56

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-gcalendar` (0.3.17 → [0.3.18](../../changelogs/@backstage/plugin-gcalendar.md#0318))

#### 0.3.18

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency
- [`814feeed7343`](https://github.com/backstage/backstage/commit/814feeed7343): Update to handle invalid luxon values

### `@backstage/plugin-gcp-projects` (0.3.40 → [0.3.41](../../changelogs/@backstage/plugin-gcp-projects.md#0341))

#### 0.3.41

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-git-release-manager` (0.3.36 → [0.3.37](../../changelogs/@backstage/plugin-git-release-manager.md#0337))

#### 0.3.37

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-github-actions` (0.6.4 → [0.6.5](../../changelogs/@backstage/plugin-github-actions.md#065))

#### 0.6.5

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-github-deployments` (0.1.54 → [0.1.55](../../changelogs/@backstage/plugin-github-deployments.md#0155))

#### 0.1.55

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-github-issues` (0.2.12 → [0.2.13](../../changelogs/@backstage/plugin-github-issues.md#0213))

#### 0.2.13

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-github-pull-requests-board` (0.1.17 → [0.1.18](../../changelogs/@backstage/plugin-github-pull-requests-board.md#0118))

#### 0.1.18

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-gitops-profiles` (0.3.39 → [0.3.40](../../changelogs/@backstage/plugin-gitops-profiles.md#0340))

#### 0.3.40

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-gocd` (0.1.29 → [0.1.30](../../changelogs/@backstage/plugin-gocd.md#0130))

#### 0.1.30

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-graphiql` (0.2.53 → [0.2.54](../../changelogs/@backstage/plugin-graphiql.md#0254))

#### 0.2.54

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`b2fbeed5403b`](https://github.com/backstage/backstage/commit/b2fbeed5403b): Add support for using the FetchApi
- [`cf950c3b6eab`](https://github.com/backstage/backstage/commit/cf950c3b6eab): Added experimental exports for the new frontend system under `/alpha`.
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-graphql-voyager` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-graphql-voyager.md#017))

#### 0.1.7

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-home` (0.5.7 → [0.5.8](../../changelogs/@backstage/plugin-home.md#058))

#### 0.5.8

##### Patch Changes

- [`2bc96ce69eea`](https://github.com/backstage/backstage/commit/2bc96ce69eea): Fixed a bug where customizable home page cards would render missing their normal borders.
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`98bb77c1f0b8`](https://github.com/backstage/backstage/commit/98bb77c1f0b8): Align zod dependency to align with other packages.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency
- [`b16c341ced45`](https://github.com/backstage/backstage/commit/b16c341ced45): Updated dependency `@rjsf/utils` to `5.13.0`.
  Updated dependency `@rjsf/core-v5` to `npm:@rjsf/core@5.13.0`.
  Updated dependency `@rjsf/material-ui-v5` to `npm:@rjsf/material-ui@5.13.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.13.0`.
- [`1853ffa09b50`](https://github.com/backstage/backstage/commit/1853ffa09b50): Allow specifying static widgets to custom home page

### `@backstage/plugin-home-react` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-home-react.md#013))

#### 0.1.3

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency
- [`b16c341ced45`](https://github.com/backstage/backstage/commit/b16c341ced45): Updated dependency `@rjsf/utils` to `5.13.0`.
  Updated dependency `@rjsf/core-v5` to `npm:@rjsf/core@5.13.0`.
  Updated dependency `@rjsf/material-ui-v5` to `npm:@rjsf/material-ui@5.13.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.13.0`.

### `@backstage/plugin-ilert` (0.2.12 → [0.2.13](../../changelogs/@backstage/plugin-ilert.md#0213))

#### 0.2.13

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency
- [`814feeed7343`](https://github.com/backstage/backstage/commit/814feeed7343): Update to handle invalid luxon values

### `@backstage/plugin-jenkins` (0.8.5 → [0.8.6](../../changelogs/@backstage/plugin-jenkins.md#086))

#### 0.8.6

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-jenkins-common` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-jenkins-common.md#0119))

#### 0.1.19

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.

### `@backstage/plugin-kafka` (0.3.23 → [0.3.24](../../changelogs/@backstage/plugin-kafka.md#0324))

#### 0.3.24

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-kubernetes` (0.10.2 → [0.10.3](../../changelogs/@backstage/plugin-kubernetes.md#0103))

#### 0.10.3

##### Patch Changes

- [`0ad36158d980`](https://github.com/backstage/backstage/commit/0ad36158d980): Loosened the type of the `auth` field in the body of requests to the `retrieveObjectsByServiceId` endpoint. Now any JSON object is allowed, which should make it easier for integrators to write their own custom auth strategies for Kubernetes.
- [`7032c214f3b4`](https://github.com/backstage/backstage/commit/7032c214f3b4): Add pod exec terminal to Container Card
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`6ddeade58b4c`](https://github.com/backstage/backstage/commit/6ddeade58b4c): Avoid eager use of `TextEncoder` in order not to break tests.
- [`6a5e04e20e6e`](https://github.com/backstage/backstage/commit/6a5e04e20e6e): fix logs dialog min height
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-kubernetes-common` (0.6.5 → [0.6.6](../../changelogs/@backstage/plugin-kubernetes-common.md#066))

#### 0.6.6

##### Patch Changes

- [`0ad36158d980`](https://github.com/backstage/backstage/commit/0ad36158d980): Loosened the type of the `auth` field in the body of requests to the `retrieveObjectsByServiceId` endpoint. Now any JSON object is allowed, which should make it easier for integrators to write their own custom auth strategies for Kubernetes.
- [`ccf00accb408`](https://github.com/backstage/backstage/commit/ccf00accb408): Add AWS Annotations to Kubernetes Cluster Resource
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.

### `@backstage/plugin-lighthouse` (0.4.8 → [0.4.9](../../changelogs/@backstage/plugin-lighthouse.md#049))

#### 0.4.9

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-lighthouse-common` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-lighthouse-common.md#013))

#### 0.1.3

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.

### `@backstage/plugin-linguist` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-linguist.md#019))

#### 0.1.9

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-linguist-common` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-linguist-common.md#012))

#### 0.1.2

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.

### `@backstage/plugin-microsoft-calendar` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-microsoft-calendar.md#017))

#### 0.1.7

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency
- [`814feeed7343`](https://github.com/backstage/backstage/commit/814feeed7343): Update to handle invalid luxon values

### `@backstage/plugin-newrelic` (0.3.39 → [0.3.40](../../changelogs/@backstage/plugin-newrelic.md#0340))

#### 0.3.40

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`55cb7061e072`](https://github.com/backstage/backstage/commit/55cb7061e072): Fixed bug in NewRelicComponent component where table would not sort correctly for numerical values.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-newrelic-dashboard` (0.2.16 → [0.2.17](../../changelogs/@backstage/plugin-newrelic-dashboard.md#0217))

#### 0.2.17

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.

### `@backstage/plugin-nomad` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-nomad.md#015))

#### 0.1.5

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-octopus-deploy` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-octopus-deploy.md#026))

#### 0.2.6

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-org` (0.6.13 → [0.6.14](../../changelogs/@backstage/plugin-org.md#0614))

#### 0.6.14

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`43a2137bb829`](https://github.com/backstage/backstage/commit/43a2137bb829): Ensure direct relations are shown for User entities while keeping support for aggregating closest parent group ownership
- [`dd9329caea1c`](https://github.com/backstage/backstage/commit/dd9329caea1c): Entity relations toggle should by default be aggregated for User entities
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-org-react` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-org-react.md#0113))

#### 0.1.13

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-pagerduty` (0.6.4 → [0.6.5](../../changelogs/@backstage/plugin-pagerduty.md#065))

#### 0.6.5

##### Patch Changes

- [`3b41afed4d0c`](https://github.com/backstage/backstage/commit/3b41afed4d0c): Minor internal tweaks to improve tests
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-periskop` (0.1.21 → [0.1.22](../../changelogs/@backstage/plugin-periskop.md#0122))

#### 0.1.22

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-permission-backend` (0.5.25 → [0.5.26](../../changelogs/@backstage/plugin-permission-backend.md#0526))

#### 0.5.26

##### Patch Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

- [`a8a614ba0d07`](https://github.com/backstage/backstage/commit/a8a614ba0d07): Minor `package.json` update.
- [`84ad6fccd4d5`](https://github.com/backstage/backstage/commit/84ad6fccd4d5): Moved `permissionModuleAllowAllPolicy` to `@backstage/plugin-permission-backend-module-allow-all-policy`

### `@backstage/plugin-permission-common` (0.7.7 → [0.7.8](../../changelogs/@backstage/plugin-permission-common.md#078))

#### 0.7.8

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.

### `@backstage/plugin-permission-node` (0.7.13 → [0.7.14](../../changelogs/@backstage/plugin-permission-node.md#0714))

#### 0.7.14

##### Patch Changes

- [`a8a614ba0d07`](https://github.com/backstage/backstage/commit/a8a614ba0d07): Minor `package.json` update.

### `@backstage/plugin-permission-react` (0.4.14 → [0.4.15](../../changelogs/@backstage/plugin-permission-react.md#0415))

#### 0.4.15

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.

### `@backstage/plugin-playlist` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-playlist.md#0116))

#### 0.1.16

##### Patch Changes

- [`79847cb73ed7`](https://github.com/backstage/backstage/commit/79847cb73ed7): Updated latest playlist screen in readme document
- [`ec4b0f8cd957`](https://github.com/backstage/backstage/commit/ec4b0f8cd957): change color of delete icon to secondary in playlist table
- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`2f3215bbbffe`](https://github.com/backstage/backstage/commit/2f3215bbbffe): Fix a bug that led to errors being thrown in guest mode
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency
- [`b5ba33a92750`](https://github.com/backstage/backstage/commit/b5ba33a92750): Limit the use of the same playlist name when adding a playlist
- [`3d63e60f3c36`](https://github.com/backstage/backstage/commit/3d63e60f3c36): Internal restructure to avoid circular imports
- [`fdbf215a8d8e`](https://github.com/backstage/backstage/commit/fdbf215a8d8e): Fix the Ui style of the search bar

### `@backstage/plugin-playlist-common` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-playlist-common.md#0110))

#### 0.1.10

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.

### `@backstage/plugin-puppetdb` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-puppetdb.md#017))

#### 0.1.7

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-rollbar` (0.4.23 → [0.4.24](../../changelogs/@backstage/plugin-rollbar.md#0424))

#### 0.4.24

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.23 → [0.2.24](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0224))

#### 0.2.24

##### Patch Changes

- [`4fa1c74cbadc`](https://github.com/backstage/backstage/commit/4fa1c74cbadc): Enables dry-run functionality for the run:yeoman scaffolder action

### `@backstage/plugin-scaffolder-common` (1.4.0 → [1.4.1](../../changelogs/@backstage/plugin-scaffolder-common.md#141))

#### 1.4.1

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.

### `@backstage/plugin-scaffolder-react` (1.5.4 → [1.5.5](../../changelogs/@backstage/plugin-scaffolder-react.md#155))

#### 1.5.5

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`b16c341ced45`](https://github.com/backstage/backstage/commit/b16c341ced45): Updated dependency `@rjsf/utils` to `5.13.0`.
  Updated dependency `@rjsf/core-v5` to `npm:@rjsf/core@5.13.0`.
  Updated dependency `@rjsf/material-ui-v5` to `npm:@rjsf/material-ui@5.13.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.13.0`.
- [`27fef07f9229`](https://github.com/backstage/backstage/commit/27fef07f9229): Updated dependency `use-immer` to `^0.9.0`.

### `@backstage/plugin-search-backend` (1.4.2 → [1.4.3](../../changelogs/@backstage/plugin-search-backend.md#143))

#### 1.4.3

##### Patch Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

### `@backstage/plugin-search-backend-module-catalog` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#017))

#### 0.1.7

##### Patch Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

### `@backstage/plugin-search-backend-module-elasticsearch` (1.3.5 → [1.3.6](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#136))

#### 1.3.6

##### Patch Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

### `@backstage/plugin-search-backend-module-explore` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-search-backend-module-explore.md#017))

#### 0.1.7

##### Patch Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

### `@backstage/plugin-search-backend-module-pg` (0.5.11 → [0.5.12](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0512))

#### 0.5.12

##### Patch Changes

- [`4ccf9204bc95`](https://github.com/backstage/backstage/commit/4ccf9204bc95): Added `indexerBatchSize` option to be able to control the size of the batches being indexed. Also added a debug log entry to list out all the entities in the batch
- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

### `@backstage/plugin-search-backend-module-techdocs` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#017))

#### 0.1.7

##### Patch Changes

- [`71114ac50e02`](https://github.com/backstage/backstage/commit/71114ac50e02): The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

### `@backstage/plugin-search-common` (1.2.5 → [1.2.6](../../changelogs/@backstage/plugin-search-common.md#126))

#### 1.2.6

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.

### `@backstage/plugin-sentry` (0.5.8 → [0.5.9](../../changelogs/@backstage/plugin-sentry.md#059))

#### 0.5.9

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-shortcuts` (0.3.13 → [0.3.14](../../changelogs/@backstage/plugin-shortcuts.md#0314))

#### 0.3.14

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-sonarqube` (0.7.4 → [0.7.5](../../changelogs/@backstage/plugin-sonarqube.md#075))

#### 0.7.5

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency
- [`db92d1244897`](https://github.com/backstage/backstage/commit/db92d1244897): Updated dependency `rc-progress` to `3.5.1`.

### `@backstage/plugin-sonarqube-react` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-sonarqube-react.md#018))

#### 0.1.8

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.

### `@backstage/plugin-splunk-on-call` (0.4.12 → [0.4.13](../../changelogs/@backstage/plugin-splunk-on-call.md#0413))

#### 0.4.13

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-stack-overflow` (0.1.19 → [0.1.20](../../changelogs/@backstage/plugin-stack-overflow.md#0120))

#### 0.1.20

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-stackstorm` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-stackstorm.md#016))

#### 0.1.6

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-tech-insights` (0.3.15 → [0.3.16](../../changelogs/@backstage/plugin-tech-insights.md#0316))

#### 0.3.16

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-tech-insights-backend` (0.5.16 → [0.5.17](../../changelogs/@backstage/plugin-tech-insights-backend.md#0517))

#### 0.5.17

##### Patch Changes

- [`cfc3ca6ce060`](https://github.com/backstage/backstage/commit/cfc3ca6ce060): Changes needed to support MySQL
- [`814feeed7343`](https://github.com/backstage/backstage/commit/814feeed7343): Update to handle invalid luxon values

### `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.34 → [0.1.35](../../changelogs/@backstage/plugin-tech-insights-backend-module-jsonfc.md#0135))

#### 0.1.35

##### Patch Changes

- [`51b801f743b2`](https://github.com/backstage/backstage/commit/51b801f743b2): Handle extracting facts from 'not' conditions too

### `@backstage/plugin-tech-insights-common` (0.2.11 → [0.2.12](../../changelogs/@backstage/plugin-tech-insights-common.md#0212))

#### 0.2.12

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.

### `@backstage/plugin-tech-radar` (0.6.7 → [0.6.8](../../changelogs/@backstage/plugin-tech-radar.md#068))

#### 0.6.8

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`b45d0ac68191`](https://github.com/backstage/backstage/commit/b45d0ac68191): Add names to blip entry links in the radar to improve accessibility
- [`80b4d0b34f14`](https://github.com/backstage/backstage/commit/80b4d0b34f14): Fixed the width of the tech radar dialog so that the content fits
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`6d35e9ea2afa`](https://github.com/backstage/backstage/commit/6d35e9ea2afa): Add description property for Rings which will be shown in the footer.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency
- [`c357f62052af`](https://github.com/backstage/backstage/commit/c357f62052af): Fixed `RadarTimeline` text formatting.

### `@backstage/plugin-techdocs-addons-test-utils` (1.0.20 → [1.0.21](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#1021))

#### 1.0.21

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

### `@backstage/plugin-techdocs-react` (1.1.9 → [1.1.11](../../changelogs/@backstage/plugin-techdocs-react.md#1111))

#### 1.1.11

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.

#### 1.1.10

Skipped due to publishing issues.

### `@backstage/plugin-todo` (0.2.25 → [0.2.27](../../changelogs/@backstage/plugin-todo.md#0227))

#### 0.2.27

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency

#### 0.2.26

Skipped due to publishing issues.

### `@backstage/plugin-user-settings` (0.7.8 → [0.7.10](../../changelogs/@backstage/plugin-user-settings.md#0710))

#### 0.7.10

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`ce77b23423cb`](https://github.com/backstage/backstage/commit/ce77b23423cb): conditionally rendering the user email in user profile card
- [`e03f3ee2be94`](https://github.com/backstage/backstage/commit/e03f3ee2be94): changed auto theme tooltip title to camel case
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency
- [`6e30769cc627`](https://github.com/backstage/backstage/commit/6e30769cc627): Introduced experimental support for internationalization.

#### 0.7.9

Skipped due to publishing issues.

### `@backstage/plugin-vault` (0.1.17 → [0.1.19](../../changelogs/@backstage/plugin-vault.md#0119))

#### 0.1.19

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency
- [`858a18800870`](https://github.com/backstage/backstage/commit/858a18800870): Added ability to override vault secret engine value on catalog entity level using annotation `vault.io/secrets-engine`

#### 0.1.18

Skipped due to publishing issues.

### `@backstage/plugin-vault-backend` (0.3.6 → [0.3.8](../../changelogs/@backstage/plugin-vault-backend.md#038))

#### 0.3.8

##### Patch Changes

- [`858a18800870`](https://github.com/backstage/backstage/commit/858a18800870): Added ability to override vault secret engine value on catalog entity level using annotation `vault.io/secrets-engine`

#### 0.3.7

Skipped due to publishing issues.

### `@backstage/plugin-xcmetrics` (0.2.41 → [0.2.43](../../changelogs/@backstage/plugin-xcmetrics.md#0243))

#### 0.2.43

##### Patch Changes

- [`482bb5c0bbf8`](https://github.com/backstage/backstage/commit/482bb5c0bbf8): Moved `@types/react` to be a regular dependency
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency
- [`814feeed7343`](https://github.com/backstage/backstage/commit/814feeed7343): Update to handle invalid luxon values

#### 0.2.42

Skipped due to publishing issues.

### `@backstage/repo-tools` (0.3.3 → [0.3.4](../../changelogs/@backstage/repo-tools.md#034))

#### 0.3.4

##### Patch Changes

- [`0109d3f11159`](https://github.com/backstage/backstage/commit/0109d3f11159): The `generate-catalog-info` command now uses the first listed `CODEOWNER` as Component owner when initially
  creating the `catalog-info.yaml` file. It continues to allow any one listed `CODEOWNER` when updating
  entity metadata.
- [`6f874cdb04eb`](https://github.com/backstage/backstage/commit/6f874cdb04eb): Fixed a bug with the `generate-catalog-info` command that could cause `metadata.description` values to be overwritten by `package.json` description values only because unrelated attributes were being changed.
- [`ec13d3e86028`](https://github.com/backstage/backstage/commit/ec13d3e86028): Fixed a bug with the `generate-catalog-info` command that could cause the `--dry-run` flag to indicate changes to files when no changes would actually be made if the command were run without the flag.
- [`db60a16e0a54`](https://github.com/backstage/backstage/commit/db60a16e0a54): Added a `--ci` flag to the `generate-catalog-info` command. This flag behaves similarly to the same flag on `api-reports`: if `catalog-info.yaml` files would have been added or modified, then the process exits with status code `1`, and instructions are printed.

### `@backstage/test-utils` (1.4.2 → [1.4.3](../../changelogs/@backstage/test-utils.md#143))

#### 1.4.3

##### Patch Changes

- [`7032c214f3b4`](https://github.com/backstage/backstage/commit/7032c214f3b4): Add pod exec terminal to Container Card
- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.
- [`8cec7664e146`](https://github.com/backstage/backstage/commit/8cec7664e146): Removed `@types/node` dependency
- [`b5fbddc15dca`](https://github.com/backstage/backstage/commit/b5fbddc15dca): Add a new `MockTranslationApi` as an `/alpha` export.
- [`9ceb6195275a`](https://github.com/backstage/backstage/commit/9ceb6195275a): Add support for React Testing Library 13+, and thus React 18.

  We're exposing an additional option to the `render*` methods to enable the [`legacyRoot`](https://testing-library.com/docs/react-testing-library/api/#legacyroot) flow.

### `@backstage/theme` (0.4.1 → [0.4.2](../../changelogs/@backstage/theme.md#042))

#### 0.4.2

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.

### `@backstage/types` (1.1.0 → [1.1.1](../../changelogs/@backstage/types.md#111))

#### 1.1.1

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.

### `@backstage/version-bridge` (1.0.4 → [1.0.5](../../changelogs/@backstage/version-bridge.md#105))

#### 1.0.5

##### Patch Changes

- [`406b786a2a2c`](https://github.com/backstage/backstage/commit/406b786a2a2c): Mark package as being free of side effects, allowing more optimized Webpack builds.

## Excluded dependency updates

- `@backstage/backend-defaults` (0.2.2 → [0.2.3](../../changelogs/@backstage/backend-defaults.md#023))
- `@backstage/backend-openapi-utils` (0.0.3 → [0.0.4](../../changelogs/@backstage/backend-openapi-utils.md#004))
- `@backstage/cli-node` (0.1.3 → [0.1.4](../../changelogs/@backstage/cli-node.md#014))
- `@backstage/integration-aws-node` (0.1.5 → [0.1.6](../../changelogs/@backstage/integration-aws-node.md#016))
- `@backstage/plugin-app-node` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-app-node.md#013))
- `@backstage/plugin-azure-sites-backend` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-azure-sites-backend.md#0113))
- `@backstage/plugin-catalog-backend-module-bitbucket` (0.2.17 → [0.2.18](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket.md#0218))
- `@backstage/plugin-catalog-backend-module-ldap` (0.5.17 → [0.5.18](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0518))
- `@backstage/plugin-catalog-backend-module-openapi` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0119))
- `@backstage/plugin-catalog-graphql` (0.3.22 → [0.3.23](../../changelogs/@backstage/plugin-catalog-graphql.md#0323))
- `@backstage/plugin-catalog-node` (1.4.3 → [1.4.4](../../changelogs/@backstage/plugin-catalog-node.md#144))
- `@backstage/plugin-events-backend-module-azure` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-events-backend-module-azure.md#0113))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0113))
- `@backstage/plugin-events-backend-module-gerrit` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0113))
- `@backstage/plugin-events-backend-module-github` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-events-backend-module-github.md#0113))
- `@backstage/plugin-events-backend-module-gitlab` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#0113))
- `@backstage/plugin-events-backend-test-utils` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0113))
- `@backstage/plugin-events-node` (0.2.11 → [0.2.12](../../changelogs/@backstage/plugin-events-node.md#0212))
- `@backstage/plugin-explore-backend` (0.0.12 → [0.0.13](../../changelogs/@backstage/plugin-explore-backend.md#0013))
- `@backstage/plugin-graphql-backend` (0.1.40 → [0.1.41](../../changelogs/@backstage/plugin-graphql-backend.md#0141))
- `@backstage/plugin-jenkins-backend` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-jenkins-backend.md#026))
- `@backstage/plugin-nomad-backend` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-nomad-backend.md#015))
- `@backstage/plugin-playlist-backend` (0.3.6 → [0.3.7](../../changelogs/@backstage/plugin-playlist-backend.md#037))
- `@backstage/plugin-rollbar-backend` (0.1.47 → [0.1.48](../../changelogs/@backstage/plugin-rollbar-backend.md#0148))
- `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#024))
- `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.26 → [0.2.27](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0227))
- `@backstage/plugin-scaffolder-backend-module-gitlab` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#026))
- `@backstage/plugin-scaffolder-backend-module-rails` (0.4.19 → [0.4.20](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0420))
- `@backstage/plugin-scaffolder-backend-module-sentry` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#0111))
- `@backstage/plugin-scaffolder-node` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-scaffolder-node.md#023))
- `@backstage/plugin-search-backend-node` (1.2.6 → [1.2.7](../../changelogs/@backstage/plugin-search-backend-node.md#127))
- `@backstage/plugin-sonarqube-backend` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-sonarqube-backend.md#025))
- `@backstage/plugin-stack-overflow-backend` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-stack-overflow-backend.md#027))
- `@backstage/plugin-tech-insights-node` (0.4.8 → [0.4.9](../../changelogs/@backstage/plugin-tech-insights-node.md#049))
