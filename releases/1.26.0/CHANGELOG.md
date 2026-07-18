# Backstage Release 1.26.0 changelog

Changes between 1.25.2 and 1.26.0 — 240 changed and 3 added packages.

## Summary

- [Newly added packages](#newly-added-packages): 3 packages
- [Breaking changes](#breaking-changes): 5 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 8 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 6 packages
- [Other minor version bumps](#other-minor-version-bumps): 4 packages
- [Other patch version bumps](#other-patch-version-bumps): 164 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/plugin-auth-backend-module-azure-easyauth-provider` (new, 0.1.0)](#backstageplugin-auth-backend-module-azure-easyauth-provider-new-010)
  - [`@backstage/plugin-auth-backend-module-bitbucket-provider` (new, 0.1.0)](#backstageplugin-auth-backend-module-bitbucket-provider-new-010)
  - [`@backstage/plugin-auth-backend-module-cloudflare-access-provider` (new, 0.1.0)](#backstageplugin-auth-backend-module-cloudflare-access-provider-new-010)
- [Breaking changes](#breaking-changes)
  - [`@backstage/backend-app-api` (0.6.2 → 0.7.0)](#backstagebackend-app-api-062--070)
  - [`@backstage/plugin-auth-react` (0.0.3 → 0.1.0)](#backstageplugin-auth-react-003--010)
  - [`@backstage/plugin-catalog-backend-module-github` (0.5.7 → 0.6.0)](#backstageplugin-catalog-backend-module-github-057--060)
  - [`@backstage/plugin-kubernetes-backend` (0.16.4 → 0.17.0)](#backstageplugin-kubernetes-backend-0164--0170)
  - [`@backstage/plugin-tech-insights-node` (0.5.2 → 0.6.0)](#backstageplugin-tech-insights-node-052--060)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/plugin-apollo-explorer` (0.1.23 → 0.2.0)](#backstageplugin-apollo-explorer-0123--020)
  - [`@backstage/plugin-badges-backend` (0.3.13 → 0.4.0)](#backstageplugin-badges-backend-0313--040)
  - [`@backstage/plugin-catalog-backend-module-backstage-openapi` (0.1.10 → 0.2.0)](#backstageplugin-catalog-backend-module-backstage-openapi-0110--020)
  - [`@backstage/plugin-github-pull-requests-board` (0.1.27 → 0.2.0)](#backstageplugin-github-pull-requests-board-0127--020)
  - [`@backstage/plugin-notifications` (0.1.2 → 0.2.0)](#backstageplugin-notifications-012--020)
  - [`@backstage/plugin-notifications-backend` (0.1.2 → 0.2.0)](#backstageplugin-notifications-backend-012--020)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.37 → 0.3.0)](#backstageplugin-scaffolder-backend-module-yeoman-0237--030)
  - [`@backstage/repo-tools` (0.7.2 → 0.8.0)](#backstagerepo-tools-072--080)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-explore-backend` (0.0.26 → 0.0.27)](#backstageplugin-explore-backend-0026--0027)
  - [`@backstage/plugin-explore-react` (0.0.37 → 0.0.38)](#backstageplugin-explore-react-0037--0038)
  - [`@backstage/plugin-kubernetes-cluster` (0.0.9 → 0.0.10)](#backstageplugin-kubernetes-cluster-009--0010)
  - [`@backstage/plugin-notifications-common` (0.0.2 → 0.0.3)](#backstageplugin-notifications-common-002--003)
  - [`@backstage/plugin-signals` (0.0.4 → 0.0.5)](#backstageplugin-signals-004--005)
  - [`@backstage/plugin-signals-react` (0.0.2 → 0.0.3)](#backstageplugin-signals-react-002--003)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/config-loader` (1.7.0 → 1.8.0)](#backstageconfig-loader-170--180)
  - [`@backstage/integration` (1.9.1 → 1.10.0)](#backstageintegration-191--1100)
  - [`@backstage/plugin-catalog` (1.18.2 → 1.19.0)](#backstageplugin-catalog-1182--1190)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.3.19 → 1.4.0)](#backstageplugin-search-backend-module-elasticsearch-1319--140)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/app-defaults` (1.5.3 → 1.5.4)](#backstageapp-defaults-153--154)
  - [`@backstage/backend-common` (0.21.6 → 0.21.7)](#backstagebackend-common-0216--0217)
  - [`@backstage/backend-dynamic-feature-service` (0.2.8 → 0.2.9)](#backstagebackend-dynamic-feature-service-028--029)
  - [`@backstage/backend-plugin-api` (0.6.16 → 0.6.17)](#backstagebackend-plugin-api-0616--0617)
  - [`@backstage/backend-tasks` (0.5.21 → 0.5.22)](#backstagebackend-tasks-0521--0522)
  - [`@backstage/backend-test-utils` (0.3.6 → 0.3.7)](#backstagebackend-test-utils-036--037)
  - [`@backstage/catalog-client` (1.6.3 → 1.6.4)](#backstagecatalog-client-163--164)
  - [`@backstage/cli` (0.26.2 → 0.26.3)](#backstagecli-0262--0263)
  - [`@backstage/cli-node` (0.2.4 → 0.2.5)](#backstagecli-node-024--025)
  - [`@backstage/core-app-api` (1.12.3 → 1.12.4)](#backstagecore-app-api-1123--1124)
  - [`@backstage/core-compat-api` (0.2.3 → 0.2.4)](#backstagecore-compat-api-023--024)
  - [`@backstage/core-components` (0.14.3 → 0.14.4)](#backstagecore-components-0143--0144)
  - [`@backstage/core-plugin-api` (1.9.1 → 1.9.2)](#backstagecore-plugin-api-191--192)
  - [`@backstage/create-app` (0.5.13 → 0.5.14)](#backstagecreate-app-0513--0514)
  - [`@backstage/dev-utils` (1.0.30 → 1.0.31)](#backstagedev-utils-1030--1031)
  - [`@backstage/eslint-plugin` (0.1.6 → 0.1.7)](#backstageeslint-plugin-016--017)
  - [`@backstage/frontend-app-api` (0.6.3 → 0.6.4)](#backstagefrontend-app-api-063--064)
  - [`@backstage/frontend-plugin-api` (0.6.3 → 0.6.4)](#backstagefrontend-plugin-api-063--064)
  - [`@backstage/frontend-test-utils` (0.1.5 → 0.1.6)](#backstagefrontend-test-utils-015--016)
  - [`@backstage/integration-react` (1.1.25 → 1.1.26)](#backstageintegration-react-1125--1126)
  - [`@backstage/plugin-adr` (0.6.16 → 0.6.17)](#backstageplugin-adr-0616--0617)
  - [`@backstage/plugin-adr-backend` (0.4.13 → 0.4.14)](#backstageplugin-adr-backend-0413--0414)
  - [`@backstage/plugin-airbrake` (0.3.33 → 0.3.34)](#backstageplugin-airbrake-0333--0334)
  - [`@backstage/plugin-airbrake-backend` (0.3.13 → 0.3.14)](#backstageplugin-airbrake-backend-0313--0314)
  - [`@backstage/plugin-allure` (0.1.49 → 0.1.50)](#backstageplugin-allure-0149--0150)
  - [`@backstage/plugin-analytics-module-ga` (0.2.3 → 0.2.4)](#backstageplugin-analytics-module-ga-023--024)
  - [`@backstage/plugin-analytics-module-ga4` (0.2.3 → 0.2.4)](#backstageplugin-analytics-module-ga4-023--024)
  - [`@backstage/plugin-analytics-module-newrelic-browser` (0.1.3 → 0.1.4)](#backstageplugin-analytics-module-newrelic-browser-013--014)
  - [`@backstage/plugin-apache-airflow` (0.2.23 → 0.2.24)](#backstageplugin-apache-airflow-0223--0224)
  - [`@backstage/plugin-api-docs` (0.11.3 → 0.11.4)](#backstageplugin-api-docs-0113--0114)
  - [`@backstage/plugin-app-backend` (0.3.64 → 0.3.65)](#backstageplugin-app-backend-0364--0365)
  - [`@backstage/plugin-auth-backend` (0.22.3 → 0.22.4)](#backstageplugin-auth-backend-0223--0224)
  - [`@backstage/plugin-auth-backend-module-atlassian-provider` (0.1.8 → 0.1.9)](#backstageplugin-auth-backend-module-atlassian-provider-018--019)
  - [`@backstage/plugin-auth-backend-module-aws-alb-provider` (0.1.8 → 0.1.9)](#backstageplugin-auth-backend-module-aws-alb-provider-018--019)
  - [`@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.2.11 → 0.2.12)](#backstageplugin-auth-backend-module-gcp-iap-provider-0211--0212)
  - [`@backstage/plugin-auth-backend-module-oidc-provider` (0.1.7 → 0.1.8)](#backstageplugin-auth-backend-module-oidc-provider-017--018)
  - [`@backstage/plugin-auth-node` (0.4.11 → 0.4.12)](#backstageplugin-auth-node-0411--0412)
  - [`@backstage/plugin-azure-devops` (0.4.2 → 0.4.3)](#backstageplugin-azure-devops-042--043)
  - [`@backstage/plugin-azure-devops-backend` (0.6.3 → 0.6.4)](#backstageplugin-azure-devops-backend-063--064)
  - [`@backstage/plugin-azure-devops-common` (0.4.0 → 0.4.1)](#backstageplugin-azure-devops-common-040--041)
  - [`@backstage/plugin-azure-sites` (0.1.22 → 0.1.23)](#backstageplugin-azure-sites-0122--0123)
  - [`@backstage/plugin-azure-sites-backend` (0.3.3 → 0.3.4)](#backstageplugin-azure-sites-backend-033--034)
  - [`@backstage/plugin-badges` (0.2.57 → 0.2.58)](#backstageplugin-badges-0257--0258)
  - [`@backstage/plugin-bazaar-backend` (0.3.14 → 0.3.15)](#backstageplugin-bazaar-backend-0314--0315)
  - [`@backstage/plugin-bitrise` (0.1.60 → 0.1.61)](#backstageplugin-bitrise-0160--0161)
  - [`@backstage/plugin-catalog-backend` (1.21.0 → 1.21.1)](#backstageplugin-catalog-backend-1210--1211)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.3.11 → 0.3.12)](#backstageplugin-catalog-backend-module-aws-0311--0312)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.1.36 → 0.1.37)](#backstageplugin-catalog-backend-module-azure-0136--0137)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.30 → 0.1.31)](#backstageplugin-catalog-backend-module-bitbucket-server-0130--0131)
  - [`@backstage/plugin-catalog-backend-module-gcp` (0.1.17 → 0.1.18)](#backstageplugin-catalog-backend-module-gcp-0117--0118)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (0.1.33 → 0.1.34)](#backstageplugin-catalog-backend-module-gerrit-0133--0134)
  - [`@backstage/plugin-catalog-backend-module-github-org` (0.1.11 → 0.1.12)](#backstageplugin-catalog-backend-module-github-org-0111--0112)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.3.14 → 0.3.15)](#backstageplugin-catalog-backend-module-gitlab-0314--0315)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.21 → 0.4.22)](#backstageplugin-catalog-backend-module-incremental-ingestion-0421--0422)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.5.24 → 0.5.25)](#backstageplugin-catalog-backend-module-msgraph-0524--0525)
  - [`@backstage/plugin-catalog-backend-module-puppetdb` (0.1.22 → 0.1.23)](#backstageplugin-catalog-backend-module-puppetdb-0122--0123)
  - [`@backstage/plugin-catalog-graph` (0.4.3 → 0.4.4)](#backstageplugin-catalog-graph-043--044)
  - [`@backstage/plugin-catalog-import` (0.10.9 → 0.10.10)](#backstageplugin-catalog-import-0109--01010)
  - [`@backstage/plugin-catalog-react` (1.11.2 → 1.11.3)](#backstageplugin-catalog-react-1112--1113)
  - [`@backstage/plugin-catalog-unprocessed-entities` (0.2.2 → 0.2.3)](#backstageplugin-catalog-unprocessed-entities-022--023)
  - [`@backstage/plugin-cicd-statistics` (0.1.35 → 0.1.36)](#backstageplugin-cicd-statistics-0135--0136)
  - [`@backstage/plugin-cloudbuild` (0.5.0 → 0.5.1)](#backstageplugin-cloudbuild-050--051)
  - [`@backstage/plugin-code-climate` (0.1.33 → 0.1.34)](#backstageplugin-code-climate-0133--0134)
  - [`@backstage/plugin-code-coverage` (0.2.26 → 0.2.27)](#backstageplugin-code-coverage-0226--0227)
  - [`@backstage/plugin-code-coverage-backend` (0.2.30 → 0.2.31)](#backstageplugin-code-coverage-backend-0230--0231)
  - [`@backstage/plugin-codescene` (0.1.25 → 0.1.26)](#backstageplugin-codescene-0125--0126)
  - [`@backstage/plugin-config-schema` (0.1.53 → 0.1.54)](#backstageplugin-config-schema-0153--0154)
  - [`@backstage/plugin-cost-insights` (0.12.22 → 0.12.23)](#backstageplugin-cost-insights-01222--01223)
  - [`@backstage/plugin-devtools-backend` (0.3.2 → 0.3.3)](#backstageplugin-devtools-backend-032--033)
  - [`@backstage/plugin-dynatrace` (10.0.2 → 10.0.3)](#backstageplugin-dynatrace-1002--1003)
  - [`@backstage/plugin-entity-feedback` (0.2.16 → 0.2.17)](#backstageplugin-entity-feedback-0216--0217)
  - [`@backstage/plugin-entity-feedback-backend` (0.2.13 → 0.2.14)](#backstageplugin-entity-feedback-backend-0213--0214)
  - [`@backstage/plugin-entity-validation` (0.1.18 → 0.1.19)](#backstageplugin-entity-validation-0118--0119)
  - [`@backstage/plugin-events-backend` (0.3.3 → 0.3.4)](#backstageplugin-events-backend-033--034)
  - [`@backstage/plugin-explore` (0.4.19 → 0.4.20)](#backstageplugin-explore-0419--0420)
  - [`@backstage/plugin-firehydrant` (0.2.17 → 0.2.18)](#backstageplugin-firehydrant-0217--0218)
  - [`@backstage/plugin-fossa` (0.2.65 → 0.2.66)](#backstageplugin-fossa-0265--0266)
  - [`@backstage/plugin-gcalendar` (0.3.26 → 0.3.27)](#backstageplugin-gcalendar-0326--0327)
  - [`@backstage/plugin-gcp-projects` (0.3.49 → 0.3.50)](#backstageplugin-gcp-projects-0349--0350)
  - [`@backstage/plugin-git-release-manager` (0.3.45 → 0.3.46)](#backstageplugin-git-release-manager-0345--0346)
  - [`@backstage/plugin-github-actions` (0.6.14 → 0.6.15)](#backstageplugin-github-actions-0614--0615)
  - [`@backstage/plugin-github-deployments` (0.1.64 → 0.1.65)](#backstageplugin-github-deployments-0164--0165)
  - [`@backstage/plugin-github-issues` (0.4.0 → 0.4.1)](#backstageplugin-github-issues-040--041)
  - [`@backstage/plugin-gitops-profiles` (0.3.48 → 0.3.49)](#backstageplugin-gitops-profiles-0348--0349)
  - [`@backstage/plugin-gocd` (0.1.39 → 0.1.40)](#backstageplugin-gocd-0139--0140)
  - [`@backstage/plugin-graphiql` (0.3.6 → 0.3.7)](#backstageplugin-graphiql-036--037)
  - [`@backstage/plugin-graphql-voyager` (0.1.15 → 0.1.16)](#backstageplugin-graphql-voyager-0115--0116)
  - [`@backstage/plugin-home` (0.7.2 → 0.7.3)](#backstageplugin-home-072--073)
  - [`@backstage/plugin-home-react` (0.1.11 → 0.1.12)](#backstageplugin-home-react-0111--0112)
  - [`@backstage/plugin-ilert` (0.2.22 → 0.2.23)](#backstageplugin-ilert-0222--0223)
  - [`@backstage/plugin-jenkins` (0.9.8 → 0.9.9)](#backstageplugin-jenkins-098--099)
  - [`@backstage/plugin-jenkins-backend` (0.4.3 → 0.4.4)](#backstageplugin-jenkins-backend-043--044)
  - [`@backstage/plugin-kafka` (0.3.33 → 0.3.34)](#backstageplugin-kafka-0333--0334)
  - [`@backstage/plugin-kafka-backend` (0.3.14 → 0.3.15)](#backstageplugin-kafka-backend-0314--0315)
  - [`@backstage/plugin-kubernetes` (0.11.8 → 0.11.9)](#backstageplugin-kubernetes-0118--0119)
  - [`@backstage/plugin-kubernetes-node` (0.1.10 → 0.1.11)](#backstageplugin-kubernetes-node-0110--0111)
  - [`@backstage/plugin-kubernetes-react` (0.3.3 → 0.3.4)](#backstageplugin-kubernetes-react-033--034)
  - [`@backstage/plugin-lighthouse` (0.4.18 → 0.4.19)](#backstageplugin-lighthouse-0418--0419)
  - [`@backstage/plugin-lighthouse-backend` (0.4.9 → 0.4.10)](#backstageplugin-lighthouse-backend-049--0410)
  - [`@backstage/plugin-linguist-backend` (0.5.14 → 0.5.15)](#backstageplugin-linguist-backend-0514--0515)
  - [`@backstage/plugin-microsoft-calendar` (0.1.15 → 0.1.16)](#backstageplugin-microsoft-calendar-0115--0116)
  - [`@backstage/plugin-newrelic` (0.3.48 → 0.3.49)](#backstageplugin-newrelic-0348--0349)
  - [`@backstage/plugin-nomad` (0.1.14 → 0.1.15)](#backstageplugin-nomad-0114--0115)
  - [`@backstage/plugin-nomad-backend` (0.1.18 → 0.1.19)](#backstageplugin-nomad-backend-0118--0119)
  - [`@backstage/plugin-notifications-node` (0.1.2 → 0.1.3)](#backstageplugin-notifications-node-012--013)
  - [`@backstage/plugin-octopus-deploy` (0.2.15 → 0.2.16)](#backstageplugin-octopus-deploy-0215--0216)
  - [`@backstage/plugin-org` (0.6.23 → 0.6.24)](#backstageplugin-org-0623--0624)
  - [`@backstage/plugin-org-react` (0.1.22 → 0.1.23)](#backstageplugin-org-react-0122--0123)
  - [`@backstage/plugin-pagerduty` (0.7.5 → 0.7.6)](#backstageplugin-pagerduty-075--076)
  - [`@backstage/plugin-periskop` (0.1.31 → 0.1.32)](#backstageplugin-periskop-0131--0132)
  - [`@backstage/plugin-periskop-backend` (0.2.14 → 0.2.15)](#backstageplugin-periskop-backend-0214--0215)
  - [`@backstage/plugin-permission-backend` (0.5.40 → 0.5.41)](#backstageplugin-permission-backend-0540--0541)
  - [`@backstage/plugin-permission-node` (0.7.27 → 0.7.28)](#backstageplugin-permission-node-0727--0728)
  - [`@backstage/plugin-permission-react` (0.4.21 → 0.4.22)](#backstageplugin-permission-react-0421--0422)
  - [`@backstage/plugin-playlist` (0.2.7 → 0.2.8)](#backstageplugin-playlist-027--028)
  - [`@backstage/plugin-playlist-backend` (0.3.20 → 0.3.21)](#backstageplugin-playlist-backend-0320--0321)
  - [`@backstage/plugin-proxy-backend` (0.4.14 → 0.4.15)](#backstageplugin-proxy-backend-0414--0415)
  - [`@backstage/plugin-puppetdb` (0.1.16 → 0.1.17)](#backstageplugin-puppetdb-0116--0117)
  - [`@backstage/plugin-rollbar` (0.4.33 → 0.4.34)](#backstageplugin-rollbar-0433--0434)
  - [`@backstage/plugin-scaffolder` (1.19.2 → 1.19.3)](#backstageplugin-scaffolder-1192--1193)
  - [`@backstage/plugin-scaffolder-backend` (1.22.3 → 1.22.4)](#backstageplugin-scaffolder-backend-1223--1224)
  - [`@backstage/plugin-scaffolder-backend-module-azure` (0.1.8 → 0.1.9)](#backstageplugin-scaffolder-backend-module-azure-018--019)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket` (0.2.6 → 0.2.7)](#backstageplugin-scaffolder-backend-module-bitbucket-026--027)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.1.6 → 0.1.7)](#backstageplugin-scaffolder-backend-module-bitbucket-cloud-016--017)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.1.6 → 0.1.7)](#backstageplugin-scaffolder-backend-module-bitbucket-server-016--017)
  - [`@backstage/plugin-scaffolder-backend-module-gerrit` (0.1.8 → 0.1.9)](#backstageplugin-scaffolder-backend-module-gerrit-018--019)
  - [`@backstage/plugin-scaffolder-backend-module-gitea` (0.1.6 → 0.1.7)](#backstageplugin-scaffolder-backend-module-gitea-016--017)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.2.6 → 0.2.7)](#backstageplugin-scaffolder-backend-module-github-026--027)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.3.2 → 0.3.3)](#backstageplugin-scaffolder-backend-module-gitlab-032--033)
  - [`@backstage/plugin-scaffolder-react` (1.8.3 → 1.8.4)](#backstageplugin-scaffolder-react-183--184)
  - [`@backstage/plugin-search` (1.4.9 → 1.4.10)](#backstageplugin-search-149--1410)
  - [`@backstage/plugin-search-backend` (1.5.6 → 1.5.7)](#backstageplugin-search-backend-156--157)
  - [`@backstage/plugin-search-backend-module-explore` (0.1.20 → 0.1.21)](#backstageplugin-search-backend-module-explore-0120--0121)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.25 → 0.5.26)](#backstageplugin-search-backend-module-pg-0525--0526)
  - [`@backstage/plugin-search-backend-module-stack-overflow-collator` (0.1.9 → 0.1.10)](#backstageplugin-search-backend-module-stack-overflow-collator-019--0110)
  - [`@backstage/plugin-search-backend-module-techdocs` (0.1.21 → 0.1.22)](#backstageplugin-search-backend-module-techdocs-0121--0122)
  - [`@backstage/plugin-search-backend-node` (1.2.20 → 1.2.21)](#backstageplugin-search-backend-node-1220--1221)
  - [`@backstage/plugin-search-react` (1.7.9 → 1.7.10)](#backstageplugin-search-react-179--1710)
  - [`@backstage/plugin-sentry` (0.5.18 → 0.5.19)](#backstageplugin-sentry-0518--0519)
  - [`@backstage/plugin-shortcuts` (0.3.22 → 0.3.23)](#backstageplugin-shortcuts-0322--0323)
  - [`@backstage/plugin-signals-backend` (0.1.2 → 0.1.3)](#backstageplugin-signals-backend-012--013)
  - [`@backstage/plugin-sonarqube` (0.7.15 → 0.7.16)](#backstageplugin-sonarqube-0715--0716)
  - [`@backstage/plugin-sonarqube-backend` (0.2.18 → 0.2.19)](#backstageplugin-sonarqube-backend-0218--0219)
  - [`@backstage/plugin-splunk-on-call` (0.4.22 → 0.4.23)](#backstageplugin-splunk-on-call-0422--0423)
  - [`@backstage/plugin-stack-overflow` (0.1.28 → 0.1.29)](#backstageplugin-stack-overflow-0128--0129)
  - [`@backstage/plugin-stackstorm` (0.1.14 → 0.1.15)](#backstageplugin-stackstorm-0114--0115)
  - [`@backstage/plugin-tech-insights` (0.3.25 → 0.3.26)](#backstageplugin-tech-insights-0325--0326)
  - [`@backstage/plugin-tech-insights-backend` (0.5.30 → 0.5.31)](#backstageplugin-tech-insights-backend-0530--0531)
  - [`@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.48 → 0.1.49)](#backstageplugin-tech-insights-backend-module-jsonfc-0148--0149)
  - [`@backstage/plugin-tech-radar` (0.7.2 → 0.7.3)](#backstageplugin-tech-radar-072--073)
  - [`@backstage/plugin-techdocs` (1.10.3 → 1.10.4)](#backstageplugin-techdocs-1103--1104)
  - [`@backstage/plugin-techdocs-addons-test-utils` (1.0.30 → 1.0.31)](#backstageplugin-techdocs-addons-test-utils-1030--1031)
  - [`@backstage/plugin-techdocs-backend` (1.10.3 → 1.10.4)](#backstageplugin-techdocs-backend-1103--1104)
  - [`@backstage/plugin-techdocs-module-addons-contrib` (1.1.8 → 1.1.9)](#backstageplugin-techdocs-module-addons-contrib-118--119)
  - [`@backstage/plugin-techdocs-node` (1.12.2 → 1.12.3)](#backstageplugin-techdocs-node-1122--1123)
  - [`@backstage/plugin-techdocs-react` (1.2.2 → 1.2.3)](#backstageplugin-techdocs-react-122--123)
  - [`@backstage/plugin-todo` (0.2.37 → 0.2.38)](#backstageplugin-todo-0237--0238)
  - [`@backstage/plugin-todo-backend` (0.3.15 → 0.3.16)](#backstageplugin-todo-backend-0315--0316)
  - [`@backstage/plugin-user-settings` (0.8.4 → 0.8.5)](#backstageplugin-user-settings-084--085)
  - [`@backstage/plugin-vault` (0.1.28 → 0.1.29)](#backstageplugin-vault-0128--0129)
  - [`@backstage/plugin-xcmetrics` (0.2.51 → 0.2.52)](#backstageplugin-xcmetrics-0251--0252)
  - [`@backstage/test-utils` (1.5.3 → 1.5.4)](#backstagetest-utils-153--154)
  - [`@backstage/theme` (0.5.2 → 0.5.3)](#backstagetheme-052--053)
  - [`@backstage/version-bridge` (1.0.7 → 1.0.8)](#backstageversion-bridge-107--108)

## Newly added packages

### `@backstage/plugin-auth-backend-module-azure-easyauth-provider` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- 06a6725: New auth backend module to add `azure-easyauth` provider. Note that as part of this change the default provider ID has been changed from `easyAuth` to `azureEasyAuth`, which means that if you switch to this new module you need to update your app config as well as the `provider` prop of the `ProxiedSignInPage` in the frontend.

### `@backstage/plugin-auth-backend-module-bitbucket-provider` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- ba763b6: Migrate the Bitbucket auth provider to the new `@backstage/plugin-auth-backend-module-bitbucket-provider` module package.

### `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- c26218d: Created a separate module for the Cloudflare Access auth provider

## Breaking changes

### `@backstage/backend-app-api` (0.6.2 → 0.7.0)

#### 0.7.0

##### Minor Changes

- 3256f14: **BREAKING**: Modules are no longer loaded unless the plugin that they extend is present.

##### Patch Changes

- 10327fb: Deprecate the `getPath` option for the `httpRouterServiceFactory` and more generally the ability to configure plugin API paths to be anything else than `/api/:pluginId/`. Requests towards `/api/*` that do not match an installed plugin will also no longer be handled by the index router, typically instead returning a 404.
- 2c50516: Fix auth cookie issuance for split backend deployments by preferring to set it against the request target host instead of origin
- 7e584d6: Fixed a bug where expired cookies would not be refreshed.
- 1a20b12: Make the auth service create and validate dedicated OBO tokens, containing the user identity proof.
- 00fca28: Implemented support for external access using both the legacy token form and static tokens.
- d5a1fe1: Replaced winston logger with `LoggerService`
- bce0879: Service-to-service authentication has been improved.

  Each plugin now has the capability to generate its own signing keys for token issuance. The generated public keys are stored in a database, and they are made accessible through a newly created endpoint: `/.backstage/auth/v1/jwks.json`.

  `AuthService` can now issue tokens with a reduced scope using the `getPluginRequestToken` method. This improvement enables plugins to identify the plugin originating the request.

- 54f2ac8: Added `initialization` option to `createServiceFactory` which defines the initialization strategy for the service. The default strategy mimics the current behavior where plugin scoped services are initialized lazily by default and root scoped services are initialized eagerly.
- 56f81b5: Improved error message thrown by `AuthService` when requesting a token for plugins that don't support the new authentication tokens.
- 25ea3d2: Minor internal restructuring
- d62bc51: Add support for limited user tokens by using user identity proof provided by the auth backend.
- c884b9a: Automatically creates a get and delete cookie endpoint when a `user-cookie` policy is added.

### `@backstage/plugin-auth-react` (0.0.3 → 0.1.0)

#### 0.1.0

##### Minor Changes

- c884b9a: **BREAKING**: Removed the path option from `CookieAuthRefreshProvider` and `useCookieAuthRefresh`.

  A new `CookieAuthRedirect` component has been added to redirect a public app bundle to the protected one when using the `app-backend` with a separate public entry point.

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.

### `@backstage/plugin-catalog-backend-module-github` (0.5.7 → 0.6.0)

#### 0.6.0

##### Minor Changes

- 29c3898: Remove use of `EventBroker` and `EventSubscriber` for the GitHub org data providers.

  BREAKING CHANGE:

  - `GithubOrgEntityProvider.onEvent` made private
  - `GithubOrgEntityProvider.supportsEventTopics` removed
  - `eventBroker` option was removed from `GithubMultiOrgEntityProvider.fromConfig`
  - `GithubMultiOrgEntityProvider.supportsEventTopics` removed

  This change only impacts users who still use the legacy backend system
  **and** who still use `eventBroker` as option when creating these
  entity providers.

  Please pass the `EventsService` instance as option `events` instead.
  You can find more information at the [installation documentation](https://backstage.io/docs/integrations/github/org/#legacy-backend-system).

##### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`
- 469e87f: Properly instantiate `GithubMultiOrgEntityProvider` and `GithubOrgEntityProvider` with `EventsService` if defined

### `@backstage/plugin-kubernetes-backend` (0.16.4 → 0.17.0)

#### 0.17.0

##### Minor Changes

- 6c19c14: **BREAKING**: `KubernetesProxy` now requires the `DiscoveryService` to be passed to the constuctor
- 5dd8177: **BREAKING** Winston logger has been replaced with `LoggerService`

##### Patch Changes

- f5cec55: Fixing issue where `BackstageCredentials` were not properly forwarded for all calls
- dd269e9: Fixed a bug where the proxy handler did not properly handle a missing header
- 9d89aed: Fixed a crash reading `credentials` from `undefined`.
- e5a2ccc: Updated dependency `@types/http-proxy-middleware` to `^1.0.0`.

### `@backstage/plugin-tech-insights-node` (0.5.2 → 0.6.0)

#### 0.6.0

##### Minor Changes

- 5dd8177: **BREAKING** Winston logger has been replaced with `LoggerService`

## 0.x minor version bumps

### `@backstage/plugin-apollo-explorer` (0.1.23 → 0.2.0)

#### 0.2.0

##### Minor Changes

- c664b15: feat(apollo-explorer): allow callbacks using apiholder

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-badges-backend` (0.3.13 → 0.4.0)

#### 0.4.0

##### Minor Changes

- 88d4769: Fix unauthorized requests by allowing unauthenticated requests.

##### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`

### `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.1.10 → 0.2.0)

#### 0.2.0

##### Minor Changes

- 2e2167a: The name and title of the returned openapi doc entity are now configurable

##### Patch Changes

- 58763e8: Use direct access of openapi.json files and not external route

### `@backstage/plugin-github-pull-requests-board` (0.1.27 → 0.2.0)

#### 0.2.0

##### Minor Changes

- c6cafe6: Fixed bug in CardHeader not expecting commit status as an array as returned by GraphQL

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.
- 617faf0: Handle null values returned from GitHub for the statusCheckRollup value on the commit object

### `@backstage/plugin-notifications` (0.1.2 → 0.2.0)

#### 0.2.0

##### Minor Changes

- 939b4ec: Notifications-backend URL query parameter changed from `minimal_severity` to `minimumSeverity`.
- ec40998: On the Notifications page, the user can trigger "Save" or "Mark as read" actions once for multiple selected notifications.

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- 9a41a7b: Migrate signals and notifications to the new backend in local development
- 939b4ec: The severity icons now get their colors from the theme.

### `@backstage/plugin-notifications-backend` (0.1.2 → 0.2.0)

#### 0.2.0

##### Minor Changes

- 939b4ec: Notifications-backend URL query parameter changed from `minimal_severity` to `minimumSeverity`.
- ec40998: On the Notifications page, the user can trigger "Save" or "Mark as read" actions once for multiple selected notifications.

##### Patch Changes

- 0d99528: Notification processor functions are now renamed to `preProcess` and `postProcess`.
  Additionally, processor name is now required to be returned by `getName`.
  A new processor functionality `processOptions` was added to process options before sending the notification.
- e003e0e: The ordered list of notifications' severities is exported by notifications-common for reusability.
- 9a41a7b: Migrate signals and notifications to the new backend in local development
- 9987066: fix: retrieve relations and children when mapping group entities for notifications
- 6206039: Fix entity owner resolution in notifications

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.37 → 0.3.0)

#### 0.3.0

##### Minor Changes

- fae9638: Add examples for `run:yeoman` scaffolder action.

### `@backstage/repo-tools` (0.7.2 → 0.8.0)

#### 0.8.0

##### Minor Changes

- 2bd291e: Adds a lint rule to `repo schema openapi lint` to enforce `allowReserved` for all parameters. To fix this, simply add `allowReserved: true` to your parameters, like so

  ```diff
  /v1/todos:
      get:
        operationId: ListTodos
        # ...
        parameters:
          - name: entity
            in: query
  +         allowReserved: true
            schema:
              type: string
  ```

- cfdc5e7: Adds two new commands, `repo schema openapi fuzz` and `package schema openapi fuzz` for fuzzing your plugins documented with OpenAPI. This can help find bugs in your application code through the use of auto-generated schema-compliant inputs. For more information on the underlying library this leverages, take a look at [the docs](https://schemathesis.readthedocs.io/en/stable/index.html).

## 0.0.x patch version bumps

### `@backstage/plugin-explore-backend` (0.0.26 → 0.0.27)

#### 0.0.27

##### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`

### `@backstage/plugin-explore-react` (0.0.37 → 0.0.38)

#### 0.0.38

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-kubernetes-cluster` (0.0.9 → 0.0.10)

#### 0.0.10

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-notifications-common` (0.0.2 → 0.0.3)

#### 0.0.3

##### Patch Changes

- 0d99528: Notification processor functions are now renamed to `preProcess` and `postProcess`.
  Additionally, processor name is now required to be returned by `getName`.
  A new processor functionality `processOptions` was added to process options before sending the notification.
- e003e0e: The ordered list of notifications' severities is exported by notifications-common for reusability.

### `@backstage/plugin-signals` (0.0.4 → 0.0.5)

#### 0.0.5

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- 9a41a7b: Migrate signals and notifications to the new backend in local development
- f06458c: fixed typo in docs

### `@backstage/plugin-signals-react` (0.0.2 → 0.0.3)

#### 0.0.3

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- f06458c: fixed typo in docs

## Other minor version bumps

### `@backstage/config-loader` (1.7.0 → 1.8.0)

#### 1.8.0

##### Minor Changes

- 2ce31b3: The default environment variable substitution function will now trim whitespace characters from the substituted value. This alleviates bugs where whitespace characters are mistakenly included in environment variables.

  If you depend on the old behavior, you can override the default substitution function with your own, for example:

  ```ts
  ConfigSources.default({
    substitutionFunc: async name => process.env[name],
  });
  ```

- 99bab65: Support parameter substitution for environment variables

### `@backstage/integration` (1.9.1 → 1.10.0)

#### 1.10.0

##### Minor Changes

- 7b11422: Add AWS CodeCommit URL Reader/Integration

### `@backstage/plugin-catalog` (1.18.2 → 1.19.0)

#### 1.19.0

##### Minor Changes

- 18c7f12: Add `isApiType()` to EntitySwitch routing functions.

##### Patch Changes

- bcb2674: Added a "create something similar" button to the `<AboutCard>` that is visible and links to the scaffolder template corresponding to the entity's `backstage.io/source-template` annotation, if present.
- 4ef0dcf: Fixed a bug that prevented the default `entityPresentationApi` from being set in apps using the new frontend system.
- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.
- 7495b36: Fixed sorting of columns created with `CatalogTable.columns.createLabelColumn`.

### `@backstage/plugin-search-backend-module-elasticsearch` (1.3.19 → 1.4.0)

#### 1.4.0

##### Minor Changes

- 4d754e3: When using the New Backend System, the Elasticsearch provider will only be added if the `search.elasticsearch` config section exists.

## Other patch version bumps

### `@backstage/app-defaults` (1.5.3 → 1.5.4)

#### 1.5.4

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.

### `@backstage/backend-common` (0.21.6 → 0.21.7)

#### 0.21.7

##### Patch Changes

- 007e7ea: Added placeholder for `listPublicServiceKeys()` in the `AuthService` returned by `createLegacyAuthAdapters`.
- 00fca28: Ensure that `ServerTokenManager` also reads the new `backend.auth.externalAccess` settings
- 25ea3d2: Minor internal restructuring
- e31bacc: Added `pullOptions` to `DockerContainerRunner#runContainer` method to pass down options when pulling an image.
- 7b11422: Add AWS CodeCommit URL Reader/Integration
- 75a53b8: KubernetesContainerRunner.runContainer no longer closes the `logStream` it receives as input.

### `@backstage/backend-dynamic-feature-service` (0.2.8 → 0.2.9)

#### 0.2.9

##### Patch Changes

- 82ff03e: Use `PackageRole` type explicitly

### `@backstage/backend-plugin-api` (0.6.16 → 0.6.17)

#### 0.6.17

##### Patch Changes

- 007e7ea: Added a new required `listPublicServiceKeys` to `AuthService`.
- 54f2ac8: Added `initialization` option to `createServiceFactory` which defines the initialization strategy for the service. The default strategy mimics the current behavior where plugin scoped services are initialized lazily by default and root scoped services are initialized eagerly.
- 4fecffc: The credentials passed to the `issueUserCookie` method of the `HttpAuthService` are no longer required to represent a user principal.

### `@backstage/backend-tasks` (0.5.21 → 0.5.22)

#### 0.5.22

##### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`

### `@backstage/backend-test-utils` (0.3.6 → 0.3.7)

#### 0.3.7

##### Patch Changes

- 3256f14: `startTestBackend` will now add placeholder plugins when a modules are provided without their parent plugin.
- 007e7ea: Added mock of the new `listPublicServiceKeys` method for `AuthService`.

### `@backstage/catalog-client` (1.6.3 → 1.6.4)

#### 1.6.4

##### Patch Changes

- dad7505: Fix the `CatalogClient::getEntities` method to only sort the resulting entities in case no `order`-parameter is provided.

### `@backstage/cli` (0.26.2 → 0.26.3)

#### 0.26.3

##### Patch Changes

- c884b9a: Fix the bundle public subpath configuration.
- e3c213e: Add the deprecation plugin to the default linter setup, switched off.

  This allows to disable deprecation warnings for `backstage-cli repo list-deprecations` with inline comments.

- 4946f03: Updated dependency `webpack-dev-server` to `^5.0.0`.
- 6b5ddbe: Fix the backend plugin to use correct plugin id
- 4fecffc: When building the frontend app public assets are now also copied to the public dist directory when in use.
- ed9260f: Added `versions:migrate` command to help move packages to the new `@backstage-community` namespace

### `@backstage/cli-node` (0.2.4 → 0.2.5)

#### 0.2.5

##### Patch Changes

- ed9260f: Added `versions:migrate` command to help move packages to the new `@backstage-community` namespace

### `@backstage/core-app-api` (1.12.3 → 1.12.4)

#### 1.12.4

##### Patch Changes

- c884b9a: The app is now aware of if it is being served from the `app-backend` with a separate public and protected bundles. When in protected mode the app will now continuously refresh the session cookie, as well as clear the cookie if the user signs out.
- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/core-compat-api` (0.2.3 → 0.2.4)

#### 0.2.4

##### Patch Changes

- d05d4bd: Moved `@backstage/core-app-api` to dev dependencies.
- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.

### `@backstage/core-components` (0.14.3 → 0.14.4)

#### 0.14.4

##### Patch Changes

- ed5c901: No `undefined` class name used at `MarkdownContent` if no custom class name was provided.
- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.
- f546e38: Added Link component in `TabUI` providing functionality like copy link or open in new tab.

### `@backstage/core-plugin-api` (1.9.1 → 1.9.2)

#### 1.9.2

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/create-app` (0.5.13 → 0.5.14)

#### 0.5.14

##### Patch Changes

- 366cf07: Bumped create-app version.
- 036b9b3: Bumped create-app version.
- 2e1218c: Fix docs reference

### `@backstage/dev-utils` (1.0.30 → 1.0.31)

#### 1.0.31

##### Patch Changes

- 9a41a7b: Allow defining custom sidebar item for page and login for the development app
- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.
- 995f66b: add @backstage/no-top-level-material-ui-4-imports lint rule

### `@backstage/eslint-plugin` (0.1.6 → 0.1.7)

#### 0.1.7

##### Patch Changes

- 9ef572d: fix lint rule fixer for more than one `Component + Prop`
- 3a7eee7: eslint autofix for mui ThemeProvider
- d55828d: add fixer logic for import aliases

### `@backstage/frontend-app-api` (0.6.3 → 0.6.4)

#### 0.6.4

##### Patch Changes

- 83f24f6: add `@backstage/no-top-level-material-ui-4-imports` lint rule
- c884b9a: The app is now aware of if it is being served from the `app-backend` with a separate public and protected bundles. When in protected mode the app will now continuously refresh the session cookie, as well as clear the cookie if the user signs out.
- 7ef7cc8: Fix duplicated subpath on routes resolved by the `useRouteRef` hook.
- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.

### `@backstage/frontend-plugin-api` (0.6.3 → 0.6.4)

#### 0.6.4

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- 35452b3: Fixed the type for `useRouteRef`, which wasn't handling optional external route refs correctly.

### `@backstage/frontend-test-utils` (0.1.5 → 0.1.6)

#### 0.1.6

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.

### `@backstage/integration-react` (1.1.25 → 1.1.26)

#### 1.1.26

##### Patch Changes

- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-adr` (0.6.16 → 0.6.17)

#### 0.6.17

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-adr-backend` (0.4.13 → 0.4.14)

#### 0.4.14

##### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`

### `@backstage/plugin-airbrake` (0.3.33 → 0.3.34)

#### 0.3.34

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-airbrake-backend` (0.3.13 → 0.3.14)

#### 0.3.14

##### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`
- e5a2ccc: Updated dependency `@types/http-proxy-middleware` to `^1.0.0`.

### `@backstage/plugin-allure` (0.1.49 → 0.1.50)

#### 0.1.50

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-analytics-module-ga` (0.2.3 → 0.2.4)

#### 0.2.4

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-analytics-module-ga4` (0.2.3 → 0.2.4)

#### 0.2.4

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-analytics-module-newrelic-browser` (0.1.3 → 0.1.4)

#### 0.1.4

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.

### `@backstage/plugin-apache-airflow` (0.2.23 → 0.2.24)

#### 0.2.24

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-api-docs` (0.11.3 → 0.11.4)

#### 0.11.4

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-app-backend` (0.3.64 → 0.3.65)

#### 0.3.65

##### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`
- c884b9a: Track assets namespace in the cache store, implement a cookie authentication for when the public entry is enabled and used with the new auth services.

### `@backstage/plugin-auth-backend` (0.22.3 → 0.22.4)

#### 0.22.4

##### Patch Changes

- f02fe79: Refactored the `azure-easyauth` provider to use the implementation from `@backstage/plugin-auth-backend-module-azure-easyauth-provider`.
- d62bc51: Added token type header parameter and user identity proof to issued user tokens.
- ba763b6: Migrate the Bitbucket auth provider to the new `@backstage/plugin-auth-backend-module-bitbucket-provider` module package.
- bf4d71a: Initial implementation of the `/v1/userinfo` endpoint, which is now able to parse and return the `sub` and `ent` claims from a Backstage user token.
- c26218d: Deprecated some of the Cloudflare Access types and used the implementation from `@backstage/plugin-auth-backend-module-cloudflare-access-provider`

### `@backstage/plugin-auth-backend-module-atlassian-provider` (0.1.8 → 0.1.9)

#### 0.1.9

##### Patch Changes

- 269b4c1: Read scopes from config and pass to AtlassianProvider as they are required

### `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.1.8 → 0.1.9)

#### 0.1.9

##### Patch Changes

- f286d59: Added support for AWS GovCloud (US) regions
- 30f5a51: Added `authModuleAwsAlbProvider` as a default export.

  It can now be used like this in your backend: `backend.add(import('@backstage/plugin-auth-backend-module-aws-alb-provider'));`

### `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.2.11 → 0.2.12)

#### 0.2.12

##### Patch Changes

- e0ed31c: Add user id annotation sign-in resolver

### `@backstage/plugin-auth-backend-module-oidc-provider` (0.1.7 → 0.1.8)

#### 0.1.8

##### Patch Changes

- 28eb473: Support revoke refresh token to oidc logout function

### `@backstage/plugin-auth-node` (0.4.11 → 0.4.12)

#### 0.4.12

##### Patch Changes

- d62bc51: Add `tokenTypes` export with constants for various Backstage token types.

### `@backstage/plugin-azure-devops` (0.4.2 → 0.4.3)

#### 0.4.3

##### Patch Changes

- 95b0573: `getAllTeams` now accepts an optional `limit` parameter which can be used to return more than the default limit of 100 teams from the Azure DevOps API

  `pullRequestOptions` have been equipped with `teamsLimit` so that the property can be used with `getAllTeams`

- 4d895b3: Fixed bug in EntityPageAzurePipeline component where build definition annotation used for viewing pipelines
- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-azure-devops-backend` (0.6.3 → 0.6.4)

#### 0.6.4

##### Patch Changes

- 95b0573: `getAllTeams` now accepts an optional `limit` parameter which can be used to return more than the default limit of 100 teams from the Azure DevOps API

  `pullRequestOptions` have been equipped with `teamsLimit` so that the property can be used with `getAllTeams`

- d5a1fe1: Replaced winston logger with `LoggerService`
- c7c4053: Fixed a bug where the `azureDevOps.token` was not truly optional

### `@backstage/plugin-azure-devops-common` (0.4.0 → 0.4.1)

#### 0.4.1

##### Patch Changes

- 95b0573: `getAllTeams` now accepts an optional `limit` parameter which can be used to return more than the default limit of 100 teams from the Azure DevOps API

  `pullRequestOptions` have been equipped with `teamsLimit` so that the property can be used with `getAllTeams`

### `@backstage/plugin-azure-sites` (0.1.22 → 0.1.23)

#### 0.1.23

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.
- cdb5ffa: Added the `no-top-level-material-ui-4-imports` ESLint rule to aid with the migration to Material UI v5

### `@backstage/plugin-azure-sites-backend` (0.3.3 → 0.3.4)

#### 0.3.4

##### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`

### `@backstage/plugin-badges` (0.2.57 → 0.2.58)

#### 0.2.58

##### Patch Changes

- 93c1d9c: Update README to fix invalid import command

### `@backstage/plugin-bazaar-backend` (0.3.14 → 0.3.15)

#### 0.3.15

##### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`

### `@backstage/plugin-bitrise` (0.1.60 → 0.1.61)

#### 0.1.61

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-catalog-backend` (1.21.0 → 1.21.1)

#### 1.21.1

##### Patch Changes

- cfdc5e7: Fixes an issue where `/analyze-location` would incorrectly throw a 500 error on an invalid url.
- d5a1fe1: Replaced winston logger with `LoggerService`
- c52f7ac: Make entity collection errors a little quieter in the logs.

  Instead of logging a warning line when an entity has an error
  during processing, it will now instead emit an event on the event
  broker.

  This only removes a single log line, however it is possible to
  add the log line back if it is required by subscribing to the
  `CATALOG_ERRORS_TOPIC` as shown below.

  ```typescript
  env.eventBroker.subscribe({
    supportsEventTopics(): string[] {
      return [CATALOG_ERRORS_TOPIC];
    },

    async onEvent(
      params: EventParams<{
        entity: string;
        location?: string;
        errors: Array<Error>;
      }>,
    ): Promise<void> {
      const { entity, location, errors } = params.eventPayload;
      for (const error of errors) {
        env.logger.warn(error.message, {
          entity,
          location,
        });
      }
    },
  });
  ```

### `@backstage/plugin-catalog-backend-module-aws` (0.3.11 → 0.3.12)

#### 0.3.12

##### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`

### `@backstage/plugin-catalog-backend-module-azure` (0.1.36 → 0.1.37)

#### 0.1.37

##### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.30 → 0.1.31)

#### 0.1.31

##### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`

### `@backstage/plugin-catalog-backend-module-gcp` (0.1.17 → 0.1.18)

#### 0.1.18

##### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`

### `@backstage/plugin-catalog-backend-module-gerrit` (0.1.33 → 0.1.34)

#### 0.1.34

##### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`

### `@backstage/plugin-catalog-backend-module-github-org` (0.1.11 → 0.1.12)

#### 0.1.12

##### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`

### `@backstage/plugin-catalog-backend-module-gitlab` (0.3.14 → 0.3.15)

#### 0.3.15

##### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.21 → 0.4.22)

#### 0.4.22

##### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`

### `@backstage/plugin-catalog-backend-module-msgraph` (0.5.24 → 0.5.25)

#### 0.5.25

##### Patch Changes

- 9b6320f: Retry msgraph API calls, due to frequent ETIMEDOUT errors. Also allow disabling fetching user photos.
- d5a1fe1: Replaced winston logger with `LoggerService`

### `@backstage/plugin-catalog-backend-module-puppetdb` (0.1.22 → 0.1.23)

#### 0.1.23

##### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`

### `@backstage/plugin-catalog-graph` (0.4.3 → 0.4.4)

#### 0.4.4

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-catalog-import` (0.10.9 → 0.10.10)

#### 0.10.10

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-catalog-react` (1.11.2 → 1.11.3)

#### 1.11.3

##### Patch Changes

- 47dec6f: Added the `no-top-level-material-ui-4-imports` ESLint rule to aid with the migration to Material UI v5
- b863830: Change behavior in EntityAutoCompletePicker to only hide filter if there are no available options. Previously the filter was hidden if there were <= 1 available options.
- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-catalog-unprocessed-entities` (0.2.2 → 0.2.3)

#### 0.2.3

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.

### `@backstage/plugin-cicd-statistics` (0.1.35 → 0.1.36)

#### 0.1.36

##### Patch Changes

- 72f0622: Added the `no-top-level-material-ui-4-imports` ESLint rule to aid with the migration to Material UI v5

### `@backstage/plugin-cloudbuild` (0.5.0 → 0.5.1)

#### 0.5.1

##### Patch Changes

- 4be6335: Changed the column that serves as a hyperlink from SOURCE to BUILD.
- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-code-climate` (0.1.33 → 0.1.34)

#### 0.1.34

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-code-coverage` (0.2.26 → 0.2.27)

#### 0.2.27

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-code-coverage-backend` (0.2.30 → 0.2.31)

#### 0.2.31

##### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`

### `@backstage/plugin-codescene` (0.1.25 → 0.1.26)

#### 0.1.26

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-config-schema` (0.1.53 → 0.1.54)

#### 0.1.54

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.
- c43315a: Added the `no-top-level-material-ui-4-imports` ESLint rule to aid with the migration to Material UI v5

### `@backstage/plugin-cost-insights` (0.12.22 → 0.12.23)

#### 0.12.23

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.
- 43ca784: Updated dependency `@types/yup` to `^0.32.0`.

### `@backstage/plugin-devtools-backend` (0.3.2 → 0.3.3)

#### 0.3.3

##### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`

### `@backstage/plugin-dynatrace` (10.0.2 → 10.0.3)

#### 10.0.3

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-entity-feedback` (0.2.16 → 0.2.17)

#### 0.2.17

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-entity-feedback-backend` (0.2.13 → 0.2.14)

#### 0.2.14

##### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`

### `@backstage/plugin-entity-validation` (0.1.18 → 0.1.19)

#### 0.1.19

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-events-backend` (0.3.3 → 0.3.4)

#### 0.3.4

##### Patch Changes

- 7899e55: Allow unauthenticated requests for HTTP ingress.

### `@backstage/plugin-explore` (0.4.19 → 0.4.20)

#### 0.4.20

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-firehydrant` (0.2.17 → 0.2.18)

#### 0.2.18

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-fossa` (0.2.65 → 0.2.66)

#### 0.2.66

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-gcalendar` (0.3.26 → 0.3.27)

#### 0.3.27

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-gcp-projects` (0.3.49 → 0.3.50)

#### 0.3.50

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-git-release-manager` (0.3.45 → 0.3.46)

#### 0.3.46

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-github-actions` (0.6.14 → 0.6.15)

#### 0.6.15

##### Patch Changes

- 76320a7: Added the `no-top-level-material-ui-4-imports` ESLint rule to aid with the migration to Material UI v5
- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-github-deployments` (0.1.64 → 0.1.65)

#### 0.1.65

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-github-issues` (0.4.0 → 0.4.1)

#### 0.4.1

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-gitops-profiles` (0.3.48 → 0.3.49)

#### 0.3.49

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-gocd` (0.1.39 → 0.1.40)

#### 0.1.40

##### Patch Changes

- b9d7c57: Updated README
- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-graphiql` (0.3.6 → 0.3.7)

#### 0.3.7

##### Patch Changes

- d137034: Added the `no-top-level-material-ui-4-imports` ESLint rule to aid with the migration to Material UI v5
- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-graphql-voyager` (0.1.15 → 0.1.16)

#### 0.1.16

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-home` (0.7.2 → 0.7.3)

#### 0.7.3

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-home-react` (0.1.11 → 0.1.12)

#### 0.1.12

##### Patch Changes

- 293347f: Added ESLint rule `no-top-level-material-ui-4-imports` in the `home-react` plugin to migrate the Material UI imports.

### `@backstage/plugin-ilert` (0.2.22 → 0.2.23)

#### 0.2.23

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.
- 7a3789a: Added the `no-top-level-material-ui-4-imports` ESLint rule to aid with the migration to Material UI v5

### `@backstage/plugin-jenkins` (0.9.8 → 0.9.9)

#### 0.9.9

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- 20f01d6: Updated dependency `@types/testing-library__jest-dom` to `^6.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-jenkins-backend` (0.4.3 → 0.4.4)

#### 0.4.4

##### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`

### `@backstage/plugin-kafka` (0.3.33 → 0.3.34)

#### 0.3.34

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-kafka-backend` (0.3.14 → 0.3.15)

#### 0.3.15

##### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`

### `@backstage/plugin-kubernetes` (0.11.8 → 0.11.9)

#### 0.11.9

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-kubernetes-node` (0.1.10 → 0.1.11)

#### 0.1.11

##### Patch Changes

- f5cec55: Fixing issue where `BackstageCredentials` were not properly forwarded for all calls

### `@backstage/plugin-kubernetes-react` (0.3.3 → 0.3.4)

#### 0.3.4

##### Patch Changes

- e6d474f: Fixed ResourceUtilization component for POD Memory Limits
- 58800ba: Added the `no-top-level-material-ui-4-imports` ESLint rule to aid with the migration to Material UI v5
- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.

### `@backstage/plugin-lighthouse` (0.4.18 → 0.4.19)

#### 0.4.19

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-lighthouse-backend` (0.4.9 → 0.4.10)

#### 0.4.10

##### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`

### `@backstage/plugin-linguist-backend` (0.5.14 → 0.5.15)

#### 0.5.15

##### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`

### `@backstage/plugin-microsoft-calendar` (0.1.15 → 0.1.16)

#### 0.1.16

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-newrelic` (0.3.48 → 0.3.49)

#### 0.3.49

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-nomad` (0.1.14 → 0.1.15)

#### 0.1.15

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.

### `@backstage/plugin-nomad-backend` (0.1.18 → 0.1.19)

#### 0.1.19

##### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`

### `@backstage/plugin-notifications-node` (0.1.2 → 0.1.3)

#### 0.1.3

##### Patch Changes

- 0d99528: Notification processor functions are now renamed to `preProcess` and `postProcess`.
  Additionally, processor name is now required to be returned by `getName`.
  A new processor functionality `processOptions` was added to process options before sending the notification.

### `@backstage/plugin-octopus-deploy` (0.2.15 → 0.2.16)

#### 0.2.16

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-org` (0.6.23 → 0.6.24)

#### 0.6.24

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-org-react` (0.1.22 → 0.1.23)

#### 0.1.23

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.
- cfb2b78: Added the `no-top-level-material-ui-4-imports` ESLint rule to aid with the migration to Material UI v5

### `@backstage/plugin-pagerduty` (0.7.5 → 0.7.6)

#### 0.7.6

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-periskop` (0.1.31 → 0.1.32)

#### 0.1.32

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-periskop-backend` (0.2.14 → 0.2.15)

#### 0.2.15

##### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`

### `@backstage/plugin-permission-backend` (0.5.40 → 0.5.41)

#### 0.5.41

##### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`

### `@backstage/plugin-permission-node` (0.7.27 → 0.7.28)

#### 0.7.28

##### Patch Changes

- 29fa05b: Fixed an issue causing `ServerPermissionClient` to generate an invalid token for authorizing permissions against the permission backend.

### `@backstage/plugin-permission-react` (0.4.21 → 0.4.22)

#### 0.4.22

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.

### `@backstage/plugin-playlist` (0.2.7 → 0.2.8)

#### 0.2.8

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-playlist-backend` (0.3.20 → 0.3.21)

#### 0.3.21

##### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`

### `@backstage/plugin-proxy-backend` (0.4.14 → 0.4.15)

#### 0.4.15

##### Patch Changes

- e5a2ccc: Updated dependency `@types/http-proxy-middleware` to `^1.0.0`.
- 43ca784: Updated dependency `@types/yup` to `^0.32.0`.

### `@backstage/plugin-puppetdb` (0.1.16 → 0.1.17)

#### 0.1.17

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.

### `@backstage/plugin-rollbar` (0.4.33 → 0.4.34)

#### 0.4.34

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-scaffolder` (1.19.2 → 1.19.3)

#### 1.19.3

##### Patch Changes

- 4f1f6ca: Use default value for `MyGroupsPicker` if provided
- 605c971: Allow the task list search to work on the Scaffolder template title.
- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- 87d2eb8: Updated dependency `json-schema-library` to `^9.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.
- 419e948: Don't show login prompt if token is set in the state

### `@backstage/plugin-scaffolder-backend` (1.22.3 → 1.22.4)

#### 1.22.4

##### Patch Changes

- f34a9b1: The `catalog:write` action now automatically adds a `backstage.io/template-source` annotation, indicating which Scaffolder template was used to create the entity.

### `@backstage/plugin-scaffolder-backend-module-azure` (0.1.8 → 0.1.9)

#### 0.1.9

##### Patch Changes

- 33f958a: Improve examples to ensure consistency across all publish actions

### `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.2.6 → 0.2.7)

#### 0.2.7

##### Patch Changes

- 33f958a: Improve examples to ensure consistency across all publish actions

### `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.1.6 → 0.1.7)

#### 0.1.7

##### Patch Changes

- 8dd33a1: Added examples for publish:bitbucketCloud actions
- 33f958a: Improve examples to ensure consistency across all publish actions

### `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.1.6 → 0.1.7)

#### 0.1.7

##### Patch Changes

- 4a15c86: Add examples for `publish:bitbucketServer` scaffolder action & improve related tests

### `@backstage/plugin-scaffolder-backend-module-gerrit` (0.1.8 → 0.1.9)

#### 0.1.9

##### Patch Changes

- 0fb178e: Add examples for `publish:gerrit:review` scaffolder action & improve related tests

### `@backstage/plugin-scaffolder-backend-module-gitea` (0.1.6 → 0.1.7)

#### 0.1.7

##### Patch Changes

- 33f958a: Improve examples to ensure consistency across all publish actions

### `@backstage/plugin-scaffolder-backend-module-github` (0.2.6 → 0.2.7)

#### 0.2.7

##### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`
- 33f958a: Improve examples to ensure consistency across all publish actions

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.3.2 → 0.3.3)

#### 0.3.3

##### Patch Changes

- aa514d1: Add examples for `publish:gitlab:merge-request` scaffolder action & improve related tests
- 52f40ea: Add examples for `gitlab:group:ensureExists` scaffolder action & improve related tests
- 33f958a: Improve examples to ensure consistency across all publish actions
- d112225: Add examples for `gitlab:projectDeployToken:create` scaffolder action & improve related tests

### `@backstage/plugin-scaffolder-react` (1.8.3 → 1.8.4)

#### 1.8.4

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- 87d2eb8: Updated dependency `json-schema-library` to `^9.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.
- 0e692cf: Added ESLint rule `no-top-level-material-ui-4-imports` to migrate the Material UI imports.
- df99f62: The `value` sent on the `create` analytics event (fired when a Scaffolder template is executed) is now set to the number of minutes saved by executing the template. This value is derived from the `backstage.io/time-saved` annotation on the template entity, if available.

  Note: the `create` event is now captured in the `<Workflow>` component. If you are directly making use of the alpha-exported `<Stepper>` component, an analytics `create` event will no longer be captured on your behalf.

### `@backstage/plugin-search` (1.4.9 → 1.4.10)

#### 1.4.10

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-search-backend` (1.5.6 → 1.5.7)

#### 1.5.7

##### Patch Changes

- 2bd291e: Allow reserved characters in requests.
- d5a1fe1: Replaced winston logger with `LoggerService`

### `@backstage/plugin-search-backend-module-explore` (0.1.20 → 0.1.21)

#### 0.1.21

##### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`

### `@backstage/plugin-search-backend-module-pg` (0.5.25 → 0.5.26)

#### 0.5.26

##### Patch Changes

- cf163a5: Enable module only on supported databases

  Also pass logger to the service

### `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.1.9 → 0.1.10)

#### 0.1.10

##### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`

### `@backstage/plugin-search-backend-module-techdocs` (0.1.21 → 0.1.22)

#### 0.1.22

##### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`

### `@backstage/plugin-search-backend-node` (1.2.20 → 1.2.21)

#### 1.2.21

##### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`

### `@backstage/plugin-search-react` (1.7.9 → 1.7.10)

#### 1.7.10

##### Patch Changes

- 8d50bd3: add mui imports eslint rule
- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-sentry` (0.5.18 → 0.5.19)

#### 0.5.19

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-shortcuts` (0.3.22 → 0.3.23)

#### 0.3.23

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-signals-backend` (0.1.2 → 0.1.3)

#### 0.1.3

##### Patch Changes

- 5f9877b: Fix unauthorized signals connection by allowing unauthenticated requests
- 9a41a7b: Migrate signals and notifications to the new backend in local development

### `@backstage/plugin-sonarqube` (0.7.15 → 0.7.16)

#### 0.7.16

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-sonarqube-backend` (0.2.18 → 0.2.19)

#### 0.2.19

##### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`

### `@backstage/plugin-splunk-on-call` (0.4.22 → 0.4.23)

#### 0.4.23

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-stack-overflow` (0.1.28 → 0.1.29)

#### 0.1.29

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-stackstorm` (0.1.14 → 0.1.15)

#### 0.1.15

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-tech-insights` (0.3.25 → 0.3.26)

#### 0.3.26

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-tech-insights-backend` (0.5.30 → 0.5.31)

#### 0.5.31

##### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`

### `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.48 → 0.1.49)

#### 0.1.49

##### Patch Changes

- d5a1fe1: Replaced winston logger with `LoggerService`

### `@backstage/plugin-tech-radar` (0.7.2 → 0.7.3)

#### 0.7.3

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-techdocs` (1.10.3 → 1.10.4)

#### 1.10.4

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-techdocs-addons-test-utils` (1.0.30 → 1.0.31)

#### 1.0.31

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-techdocs-backend` (1.10.3 → 1.10.4)

#### 1.10.4

##### Patch Changes

- 8e28c88: Allow overriding default techdocs preparers with new `TechdocsPreparerExtensionPoint`
- c884b9a: Use the default cookie endpoints added automatically when a cookie policy is set.

### `@backstage/plugin-techdocs-module-addons-contrib` (1.1.8 → 1.1.9)

#### 1.1.9

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-techdocs-node` (1.12.2 → 1.12.3)

#### 1.12.3

##### Patch Changes

- 8e28c88: Allow overriding default techdocs preparers with new `TechdocsPreparerExtensionPoint`

### `@backstage/plugin-techdocs-react` (1.2.2 → 1.2.3)

#### 1.2.3

##### Patch Changes

- b450af3: Added ESLint rule `no-top-level-material-ui-4-imports` in the Techdocs-react plugin to migrate the Material UI imports.
- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.

### `@backstage/plugin-todo` (0.2.37 → 0.2.38)

#### 0.2.38

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-todo-backend` (0.3.15 → 0.3.16)

#### 0.3.16

##### Patch Changes

- 2bd291e: Allow reserved characters in requests.
- d5a1fe1: Replaced winston logger with `LoggerService`

### `@backstage/plugin-user-settings` (0.8.4 → 0.8.5)

#### 0.8.5

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-vault` (0.1.28 → 0.1.29)

#### 0.1.29

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-xcmetrics` (0.2.51 → 0.2.52)

#### 0.2.52

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/test-utils` (1.5.3 → 1.5.4)

#### 1.5.4

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.

### `@backstage/theme` (0.5.2 → 0.5.3)

#### 0.5.3

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.

### `@backstage/version-bridge` (1.0.7 → 1.0.8)

#### 1.0.8

##### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.

_Excluded dependency updates for packages: `@backstage/backend-defaults`, `@backstage/backend-openapi-utils`, `@backstage/plugin-adr-common`, `@backstage/plugin-app-node`, `@backstage/plugin-app-visualizer`, `@backstage/plugin-auth-backend-module-github-provider`, `@backstage/plugin-auth-backend-module-gitlab-provider`, `@backstage/plugin-auth-backend-module-google-provider`, `@backstage/plugin-auth-backend-module-guest-provider`, `@backstage/plugin-auth-backend-module-microsoft-provider`, `@backstage/plugin-auth-backend-module-oauth2-provider`, `@backstage/plugin-auth-backend-module-oauth2-proxy-provider`, `@backstage/plugin-auth-backend-module-okta-provider`, `@backstage/plugin-auth-backend-module-pinniped-provider`, `@backstage/plugin-auth-backend-module-vmware-cloud-provider`, `@backstage/plugin-bazaar`, `@backstage/plugin-bitbucket-cloud-common`, `@backstage/plugin-catalog-backend-module-bitbucket-cloud`, `@backstage/plugin-catalog-backend-module-ldap`, `@backstage/plugin-catalog-backend-module-openapi`, `@backstage/plugin-catalog-backend-module-scaffolder-entity-model`, `@backstage/plugin-catalog-backend-module-unprocessed`, `@backstage/plugin-catalog-node`, `@backstage/plugin-cicd-statistics-module-gitlab`, `@backstage/plugin-circleci`, `@backstage/plugin-devtools`, `@backstage/plugin-events-backend-module-aws-sqs`, `@backstage/plugin-events-backend-module-azure`, `@backstage/plugin-events-backend-module-bitbucket-cloud`, `@backstage/plugin-events-backend-module-gerrit`, `@backstage/plugin-events-backend-module-github`, `@backstage/plugin-events-backend-module-gitlab`, `@backstage/plugin-events-backend-test-utils`, `@backstage/plugin-events-node`, `@backstage/plugin-linguist`, `@backstage/plugin-newrelic-dashboard`, `@backstage/plugin-opencost`, `@backstage/plugin-permission-backend-module-allow-all-policy`, `@backstage/plugin-rollbar-backend`, `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown`, `@backstage/plugin-scaffolder-backend-module-cookiecutter`, `@backstage/plugin-scaffolder-backend-module-rails`, `@backstage/plugin-scaffolder-backend-module-sentry`, `@backstage/plugin-scaffolder-node`, `@backstage/plugin-scaffolder-node-test-utils`, `@backstage/plugin-search-backend-module-catalog`, `@backstage/plugin-signals-node`, `@backstage/plugin-sonarqube-react`, `@backstage/plugin-stack-overflow-backend`, `@backstage/plugin-user-settings-backend`, `@backstage/plugin-vault-backend`, `@backstage/plugin-vault-node`, `@techdocs/cli`._
