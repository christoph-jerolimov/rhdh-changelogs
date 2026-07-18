# Backstage Release 1.20.0 changelog

Changes between 1.19.6 and 1.20.0 — 221 changed and 3 added packages.

## Summary

- [Newly added packages](#newly-added-packages): 3 packages
- [Breaking changes](#breaking-changes): 3 packages
- [Major version bumps](#major-version-bumps): 1 package
- [0.x minor version bumps](#0x-minor-version-bumps): 11 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 4 packages
- [Other minor version bumps](#other-minor-version-bumps): 10 packages
- [Other patch version bumps](#other-patch-version-bumps): 137 packages
- [Excluded dependency updates](#excluded-dependency-updates): 55 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/plugin-catalog-backend-module-backstage-openapi` (new, 0.1.0)](#backstageplugin-catalog-backend-module-backstage-openapi-new-010)
  - [`@backstage/plugin-search-backend-module-stack-overflow-collator` (new, 0.1.0)](#backstageplugin-search-backend-module-stack-overflow-collator-new-010)
  - [`@backstage/plugin-vault-node` (new, 0.1.0)](#backstageplugin-vault-node-new-010)
- [Breaking changes](#breaking-changes)
  - [`@backstage/plugin-playlist` (0.1.17 → 0.2.0)](#backstageplugin-playlist-0117--020)
  - [`@backstage/plugin-scaffolder` (1.15.1 → 1.16.0)](#backstageplugin-scaffolder-1151--1160)
  - [`@backstage/plugin-scaffolder-react` (1.5.6 → 1.6.0)](#backstageplugin-scaffolder-react-156--160)
- [Major version bumps](#major-version-bumps)
  - [`@backstage/plugin-dynatrace` (7.0.5 → 8.0.0)](#backstageplugin-dynatrace-705--800)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/backend-openapi-utils` (0.0.5 → 0.1.0)](#backstagebackend-openapi-utils-005--010)
  - [`@backstage/cli` (0.23.1 → 0.24.0)](#backstagecli-0231--0240)
  - [`@backstage/cli-node` (0.1.5 → 0.2.0)](#backstagecli-node-015--020)
  - [`@backstage/frontend-app-api` (0.2.0 → 0.3.0)](#backstagefrontend-app-api-020--030)
  - [`@backstage/frontend-plugin-api` (0.2.0 → 0.3.0)](#backstagefrontend-plugin-api-020--030)
  - [`@backstage/plugin-api-docs` (0.9.12 → 0.10.0)](#backstageplugin-api-docs-0912--0100)
  - [`@backstage/plugin-auth-backend` (0.19.4 → 0.20.0)](#backstageplugin-auth-backend-0194--0200)
  - [`@backstage/plugin-catalog-graph` (0.2.37 → 0.3.0)](#backstageplugin-catalog-graph-0237--030)
  - [`@backstage/plugin-graphiql` (0.2.55 → 0.3.0)](#backstageplugin-graphiql-0255--030)
  - [`@backstage/plugin-vault-backend` (0.3.11 → 0.4.0)](#backstageplugin-vault-backend-0311--040)
  - [`@backstage/repo-tools` (0.3.5 → 0.4.0)](#backstagerepo-tools-035--040)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-analytics-module-newrelic-browser` (0.0.3 → 0.0.4)](#backstageplugin-analytics-module-newrelic-browser-003--004)
  - [`@backstage/plugin-explore-react` (0.0.32 → 0.0.33)](#backstageplugin-explore-react-0032--0033)
  - [`@backstage/plugin-kubernetes-cluster` (0.0.1 → 0.0.2)](#backstageplugin-kubernetes-cluster-001--002)
  - [`@backstage/release-manifests` (0.0.10 → 0.0.11)](#backstagerelease-manifests-0010--0011)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/core-plugin-api` (1.7.0 → 1.8.0)](#backstagecore-plugin-api-170--180)
  - [`@backstage/plugin-catalog` (1.14.0 → 1.15.0)](#backstageplugin-catalog-1140--1150)
  - [`@backstage/plugin-catalog-backend` (1.14.0 → 1.15.0)](#backstageplugin-catalog-backend-1140--1150)
  - [`@backstage/plugin-catalog-node` (1.4.7 → 1.5.0)](#backstageplugin-catalog-node-147--150)
  - [`@backstage/plugin-catalog-react` (1.8.5 → 1.9.0)](#backstageplugin-catalog-react-185--190)
  - [`@backstage/plugin-scaffolder-backend` (1.18.1 → 1.19.0)](#backstageplugin-scaffolder-backend-1181--1190)
  - [`@backstage/plugin-techdocs` (1.8.0 → 1.9.0)](#backstageplugin-techdocs-180--190)
  - [`@backstage/plugin-techdocs-backend` (1.8.0 → 1.9.0)](#backstageplugin-techdocs-backend-180--190)
  - [`@backstage/plugin-techdocs-node` (1.9.0 → 1.10.0)](#backstageplugin-techdocs-node-190--1100)
  - [`@techdocs/cli` (1.6.0 → 1.7.0)](#techdocscli-160--170)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/app-defaults` (1.4.4 → 1.4.5)](#backstageapp-defaults-144--145)
  - [`@backstage/backend-app-api` (0.5.7 → 0.5.8)](#backstagebackend-app-api-057--058)
  - [`@backstage/backend-common` (0.19.8 → 0.19.9)](#backstagebackend-common-0198--0199)
  - [`@backstage/backend-plugin-api` (0.6.6 → 0.6.7)](#backstagebackend-plugin-api-066--067)
  - [`@backstage/backend-tasks` (0.5.11 → 0.5.12)](#backstagebackend-tasks-0511--0512)
  - [`@backstage/backend-test-utils` (0.2.7 → 0.2.8)](#backstagebackend-test-utils-027--028)
  - [`@backstage/catalog-client` (1.4.5 → 1.4.6)](#backstagecatalog-client-145--146)
  - [`@backstage/config-loader` (1.5.2 → 1.5.3)](#backstageconfig-loader-152--153)
  - [`@backstage/core-app-api` (1.11.0 → 1.11.1)](#backstagecore-app-api-1110--1111)
  - [`@backstage/core-components` (0.13.7 → 0.13.8)](#backstagecore-components-0137--0138)
  - [`@backstage/create-app` (0.5.6 → 0.5.7)](#backstagecreate-app-056--057)
  - [`@backstage/dev-utils` (1.0.22 → 1.0.23)](#backstagedev-utils-1022--1023)
  - [`@backstage/integration` (1.7.1 → 1.7.2)](#backstageintegration-171--172)
  - [`@backstage/integration-aws-node` (0.1.7 → 0.1.8)](#backstageintegration-aws-node-017--018)
  - [`@backstage/integration-react` (1.1.20 → 1.1.21)](#backstageintegration-react-1120--1121)
  - [`@backstage/plugin-adr` (0.6.8 → 0.6.9)](#backstageplugin-adr-068--069)
  - [`@backstage/plugin-adr-backend` (0.4.3 → 0.4.4)](#backstageplugin-adr-backend-043--044)
  - [`@backstage/plugin-airbrake` (0.3.25 → 0.3.26)](#backstageplugin-airbrake-0325--0326)
  - [`@backstage/plugin-allure` (0.1.41 → 0.1.42)](#backstageplugin-allure-0141--0142)
  - [`@backstage/plugin-analytics-module-ga` (0.1.34 → 0.1.35)](#backstageplugin-analytics-module-ga-0134--0135)
  - [`@backstage/plugin-analytics-module-ga4` (0.1.5 → 0.1.6)](#backstageplugin-analytics-module-ga4-015--016)
  - [`@backstage/plugin-apache-airflow` (0.2.16 → 0.2.17)](#backstageplugin-apache-airflow-0216--0217)
  - [`@backstage/plugin-api-docs-module-protoc-gen-doc` (0.1.4 → 0.1.5)](#backstageplugin-api-docs-module-protoc-gen-doc-014--015)
  - [`@backstage/plugin-apollo-explorer` (0.1.16 → 0.1.17)](#backstageplugin-apollo-explorer-0116--0117)
  - [`@backstage/plugin-app-backend` (0.3.54 → 0.3.55)](#backstageplugin-app-backend-0354--0355)
  - [`@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.3 → 0.1.4)](#backstageplugin-auth-backend-module-gitlab-provider-013--014)
  - [`@backstage/plugin-auth-backend-module-microsoft-provider` (0.1.1 → 0.1.2)](#backstageplugin-auth-backend-module-microsoft-provider-011--012)
  - [`@backstage/plugin-auth-backend-module-pinniped-provider` (0.1.0 → 0.1.1)](#backstageplugin-auth-backend-module-pinniped-provider-010--011)
  - [`@backstage/plugin-azure-devops` (0.3.7 → 0.3.8)](#backstageplugin-azure-devops-037--038)
  - [`@backstage/plugin-azure-sites` (0.1.14 → 0.1.15)](#backstageplugin-azure-sites-0114--0115)
  - [`@backstage/plugin-badges` (0.2.49 → 0.2.50)](#backstageplugin-badges-0249--0250)
  - [`@backstage/plugin-badges-backend` (0.3.3 → 0.3.4)](#backstageplugin-badges-backend-033--034)
  - [`@backstage/plugin-bazaar` (0.2.17 → 0.2.18)](#backstageplugin-bazaar-0217--0218)
  - [`@backstage/plugin-bazaar-backend` (0.3.4 → 0.3.5)](#backstageplugin-bazaar-backend-034--035)
  - [`@backstage/plugin-bitbucket-cloud-common` (0.2.13 → 0.2.14)](#backstageplugin-bitbucket-cloud-common-0213--0214)
  - [`@backstage/plugin-bitrise` (0.1.52 → 0.1.53)](#backstageplugin-bitrise-0152--0153)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.3.0 → 0.3.1)](#backstageplugin-catalog-backend-module-aws-030--031)
  - [`@backstage/plugin-catalog-backend-module-gcp` (0.1.6 → 0.1.7)](#backstageplugin-catalog-backend-module-gcp-016--017)
  - [`@backstage/plugin-catalog-backend-module-github` (0.4.4 → 0.4.5)](#backstageplugin-catalog-backend-module-github-044--045)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.3.3 → 0.3.4)](#backstageplugin-catalog-backend-module-gitlab-033--034)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.10 → 0.4.11)](#backstageplugin-catalog-backend-module-incremental-ingestion-0410--0411)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.5.13 → 0.5.14)](#backstageplugin-catalog-backend-module-msgraph-0513--0514)
  - [`@backstage/plugin-catalog-backend-module-unprocessed` (0.3.3 → 0.3.4)](#backstageplugin-catalog-backend-module-unprocessed-033--034)
  - [`@backstage/plugin-catalog-graphql` (0.4.0 → 0.4.1)](#backstageplugin-catalog-graphql-040--041)
  - [`@backstage/plugin-catalog-import` (0.10.1 → 0.10.2)](#backstageplugin-catalog-import-0101--0102)
  - [`@backstage/plugin-catalog-unprocessed-entities` (0.1.4 → 0.1.5)](#backstageplugin-catalog-unprocessed-entities-014--015)
  - [`@backstage/plugin-cicd-statistics` (0.1.27 → 0.1.28)](#backstageplugin-cicd-statistics-0127--0128)
  - [`@backstage/plugin-cicd-statistics-module-gitlab` (0.1.21 → 0.1.22)](#backstageplugin-cicd-statistics-module-gitlab-0121--0122)
  - [`@backstage/plugin-circleci` (0.3.25 → 0.3.26)](#backstageplugin-circleci-0325--0326)
  - [`@backstage/plugin-cloudbuild` (0.3.25 → 0.3.26)](#backstageplugin-cloudbuild-0325--0326)
  - [`@backstage/plugin-code-climate` (0.1.25 → 0.1.26)](#backstageplugin-code-climate-0125--0126)
  - [`@backstage/plugin-code-coverage` (0.2.18 → 0.2.19)](#backstageplugin-code-coverage-0218--0219)
  - [`@backstage/plugin-code-coverage-backend` (0.2.20 → 0.2.21)](#backstageplugin-code-coverage-backend-0220--0221)
  - [`@backstage/plugin-codescene` (0.1.18 → 0.1.19)](#backstageplugin-codescene-0118--0119)
  - [`@backstage/plugin-config-schema` (0.1.46 → 0.1.47)](#backstageplugin-config-schema-0146--0147)
  - [`@backstage/plugin-cost-insights` (0.12.14 → 0.12.15)](#backstageplugin-cost-insights-01214--01215)
  - [`@backstage/plugin-devtools` (0.1.5 → 0.1.6)](#backstageplugin-devtools-015--016)
  - [`@backstage/plugin-entity-feedback` (0.2.8 → 0.2.9)](#backstageplugin-entity-feedback-028--029)
  - [`@backstage/plugin-entity-feedback-backend` (0.2.3 → 0.2.4)](#backstageplugin-entity-feedback-backend-023--024)
  - [`@backstage/plugin-entity-validation` (0.1.10 → 0.1.11)](#backstageplugin-entity-validation-0110--0111)
  - [`@backstage/plugin-events-backend-module-aws-sqs` (0.2.9 → 0.2.10)](#backstageplugin-events-backend-module-aws-sqs-029--0210)
  - [`@backstage/plugin-explore` (0.4.11 → 0.4.12)](#backstageplugin-explore-0411--0412)
  - [`@backstage/plugin-firehydrant` (0.2.9 → 0.2.10)](#backstageplugin-firehydrant-029--0210)
  - [`@backstage/plugin-fossa` (0.2.57 → 0.2.58)](#backstageplugin-fossa-0257--0258)
  - [`@backstage/plugin-gcalendar` (0.3.19 → 0.3.20)](#backstageplugin-gcalendar-0319--0320)
  - [`@backstage/plugin-gcp-projects` (0.3.42 → 0.3.43)](#backstageplugin-gcp-projects-0342--0343)
  - [`@backstage/plugin-git-release-manager` (0.3.38 → 0.3.39)](#backstageplugin-git-release-manager-0338--0339)
  - [`@backstage/plugin-github-actions` (0.6.6 → 0.6.7)](#backstageplugin-github-actions-066--067)
  - [`@backstage/plugin-github-deployments` (0.1.56 → 0.1.57)](#backstageplugin-github-deployments-0156--0157)
  - [`@backstage/plugin-github-issues` (0.2.14 → 0.2.15)](#backstageplugin-github-issues-0214--0215)
  - [`@backstage/plugin-github-pull-requests-board` (0.1.19 → 0.1.20)](#backstageplugin-github-pull-requests-board-0119--0120)
  - [`@backstage/plugin-gitops-profiles` (0.3.41 → 0.3.42)](#backstageplugin-gitops-profiles-0341--0342)
  - [`@backstage/plugin-gocd` (0.1.31 → 0.1.32)](#backstageplugin-gocd-0131--0132)
  - [`@backstage/plugin-graphql-voyager` (0.1.8 → 0.1.9)](#backstageplugin-graphql-voyager-018--019)
  - [`@backstage/plugin-home` (0.5.9 → 0.5.10)](#backstageplugin-home-059--0510)
  - [`@backstage/plugin-home-react` (0.1.4 → 0.1.5)](#backstageplugin-home-react-014--015)
  - [`@backstage/plugin-ilert` (0.2.14 → 0.2.15)](#backstageplugin-ilert-0214--0215)
  - [`@backstage/plugin-jenkins` (0.9.0 → 0.9.1)](#backstageplugin-jenkins-090--091)
  - [`@backstage/plugin-jenkins-backend` (0.3.0 → 0.3.1)](#backstageplugin-jenkins-backend-030--031)
  - [`@backstage/plugin-kafka` (0.3.25 → 0.3.26)](#backstageplugin-kafka-0325--0326)
  - [`@backstage/plugin-kafka-backend` (0.3.4 → 0.3.5)](#backstageplugin-kafka-backend-034--035)
  - [`@backstage/plugin-kubernetes` (0.11.0 → 0.11.1)](#backstageplugin-kubernetes-0110--0111)
  - [`@backstage/plugin-kubernetes-backend` (0.13.0 → 0.13.1)](#backstageplugin-kubernetes-backend-0130--0131)
  - [`@backstage/plugin-kubernetes-common` (0.7.0 → 0.7.1)](#backstageplugin-kubernetes-common-070--071)
  - [`@backstage/plugin-kubernetes-react` (0.1.0 → 0.1.1)](#backstageplugin-kubernetes-react-010--011)
  - [`@backstage/plugin-lighthouse` (0.4.10 → 0.4.11)](#backstageplugin-lighthouse-0410--0411)
  - [`@backstage/plugin-linguist` (0.1.10 → 0.1.11)](#backstageplugin-linguist-0110--0111)
  - [`@backstage/plugin-linguist-backend` (0.5.3 → 0.5.4)](#backstageplugin-linguist-backend-053--054)
  - [`@backstage/plugin-microsoft-calendar` (0.1.8 → 0.1.9)](#backstageplugin-microsoft-calendar-018--019)
  - [`@backstage/plugin-newrelic` (0.3.41 → 0.3.42)](#backstageplugin-newrelic-0341--0342)
  - [`@backstage/plugin-newrelic-dashboard` (0.3.0 → 0.3.1)](#backstageplugin-newrelic-dashboard-030--031)
  - [`@backstage/plugin-nomad` (0.1.6 → 0.1.7)](#backstageplugin-nomad-016--017)
  - [`@backstage/plugin-octopus-deploy` (0.2.7 → 0.2.8)](#backstageplugin-octopus-deploy-027--028)
  - [`@backstage/plugin-opencost` (0.2.1 → 0.2.2)](#backstageplugin-opencost-021--022)
  - [`@backstage/plugin-org` (0.6.15 → 0.6.16)](#backstageplugin-org-0615--0616)
  - [`@backstage/plugin-org-react` (0.1.14 → 0.1.15)](#backstageplugin-org-react-0114--0115)
  - [`@backstage/plugin-pagerduty` (0.6.6 → 0.6.7)](#backstageplugin-pagerduty-066--067)
  - [`@backstage/plugin-periskop` (0.1.23 → 0.1.24)](#backstageplugin-periskop-0123--0124)
  - [`@backstage/plugin-periskop-backend` (0.2.4 → 0.2.5)](#backstageplugin-periskop-backend-024--025)
  - [`@backstage/plugin-permission-common` (0.7.9 → 0.7.10)](#backstageplugin-permission-common-079--0710)
  - [`@backstage/plugin-permission-react` (0.4.16 → 0.4.17)](#backstageplugin-permission-react-0416--0417)
  - [`@backstage/plugin-playlist-backend` (0.3.10 → 0.3.11)](#backstageplugin-playlist-backend-0310--0311)
  - [`@backstage/plugin-proxy-backend` (0.4.4 → 0.4.5)](#backstageplugin-proxy-backend-044--045)
  - [`@backstage/plugin-puppetdb` (0.1.8 → 0.1.9)](#backstageplugin-puppetdb-018--019)
  - [`@backstage/plugin-rollbar` (0.4.25 → 0.4.26)](#backstageplugin-rollbar-0425--0426)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.2.9 → 0.2.10)](#backstageplugin-scaffolder-backend-module-gitlab-029--0210)
  - [`@backstage/plugin-scaffolder-common` (1.4.2 → 1.4.3)](#backstageplugin-scaffolder-common-142--143)
  - [`@backstage/plugin-scaffolder-node` (0.2.7 → 0.2.8)](#backstageplugin-scaffolder-node-027--028)
  - [`@backstage/plugin-search` (1.4.1 → 1.4.2)](#backstageplugin-search-141--142)
  - [`@backstage/plugin-search-backend` (1.4.6 → 1.4.7)](#backstageplugin-search-backend-146--147)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.3.9 → 1.3.10)](#backstageplugin-search-backend-module-elasticsearch-139--1310)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.15 → 0.5.16)](#backstageplugin-search-backend-module-pg-0515--0516)
  - [`@backstage/plugin-search-backend-module-techdocs` (0.1.10 → 0.1.11)](#backstageplugin-search-backend-module-techdocs-0110--0111)
  - [`@backstage/plugin-search-backend-node` (1.2.10 → 1.2.11)](#backstageplugin-search-backend-node-1210--1211)
  - [`@backstage/plugin-search-react` (1.7.1 → 1.7.2)](#backstageplugin-search-react-171--172)
  - [`@backstage/plugin-sentry` (0.5.10 → 0.5.11)](#backstageplugin-sentry-0510--0511)
  - [`@backstage/plugin-shortcuts` (0.3.15 → 0.3.16)](#backstageplugin-shortcuts-0315--0316)
  - [`@backstage/plugin-sonarqube` (0.7.7 → 0.7.8)](#backstageplugin-sonarqube-077--078)
  - [`@backstage/plugin-sonarqube-react` (0.1.9 → 0.1.10)](#backstageplugin-sonarqube-react-019--0110)
  - [`@backstage/plugin-splunk-on-call` (0.4.14 → 0.4.15)](#backstageplugin-splunk-on-call-0414--0415)
  - [`@backstage/plugin-stack-overflow` (0.1.21 → 0.1.22)](#backstageplugin-stack-overflow-0121--0122)
  - [`@backstage/plugin-stack-overflow-backend` (0.2.10 → 0.2.11)](#backstageplugin-stack-overflow-backend-0210--0211)
  - [`@backstage/plugin-stackstorm` (0.1.7 → 0.1.8)](#backstageplugin-stackstorm-017--018)
  - [`@backstage/plugin-tech-insights` (0.3.17 → 0.3.18)](#backstageplugin-tech-insights-0317--0318)
  - [`@backstage/plugin-tech-insights-backend` (0.5.20 → 0.5.21)](#backstageplugin-tech-insights-backend-0520--0521)
  - [`@backstage/plugin-tech-radar` (0.6.9 → 0.6.10)](#backstageplugin-tech-radar-069--0610)
  - [`@backstage/plugin-techdocs-addons-test-utils` (1.0.22 → 1.0.23)](#backstageplugin-techdocs-addons-test-utils-1022--1023)
  - [`@backstage/plugin-techdocs-module-addons-contrib` (1.1.1 → 1.1.2)](#backstageplugin-techdocs-module-addons-contrib-111--112)
  - [`@backstage/plugin-techdocs-react` (1.1.12 → 1.1.13)](#backstageplugin-techdocs-react-1112--1113)
  - [`@backstage/plugin-todo` (0.2.29 → 0.2.30)](#backstageplugin-todo-0229--0230)
  - [`@backstage/plugin-user-settings` (0.7.11 → 0.7.12)](#backstageplugin-user-settings-0711--0712)
  - [`@backstage/plugin-user-settings-backend` (0.2.5 → 0.2.6)](#backstageplugin-user-settings-backend-025--026)
  - [`@backstage/plugin-vault` (0.1.20 → 0.1.21)](#backstageplugin-vault-0120--0121)
  - [`@backstage/plugin-xcmetrics` (0.2.44 → 0.2.45)](#backstageplugin-xcmetrics-0244--0245)
  - [`@backstage/test-utils` (1.4.4 → 1.4.5)](#backstagetest-utils-144--145)
  - [`@backstage/theme` (0.4.3 → 0.4.4)](#backstagetheme-043--044)
  - [`@backstage/version-bridge` (1.0.6 → 1.0.7)](#backstageversion-bridge-106--107)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/plugin-catalog-backend-module-backstage-openapi` (new, [0.1.0](../../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#010))

#### 0.1.0

##### Minor Changes

- [`785fb1ea75`](https://github.com/backstage/backstage/commit/785fb1ea75): Adds a new catalog module for ingesting Backstage plugin OpenAPI specs into the catalog for display as an API entity.

##### Patch Changes

- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/plugin-search-backend-module-stack-overflow-collator` (new, [0.1.0](../../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#010))

#### 0.1.0

##### Minor Changes

- [`46f0f1700e`](https://github.com/backstage/backstage/commit/46f0f1700e): Extract a package for the Stack Overflow new backend system plugin.

### `@backstage/plugin-vault-node` (new, [0.1.0](../../changelogs/@backstage/plugin-vault-node.md#010))

#### 0.1.0

##### Minor Changes

- [`7a41bcf2af`](https://github.com/backstage/backstage/commit/7a41bcf2af): Initial version of the `plugin-vault-node`` package. It contains the extension point definitions
  for the vault backend, as well as some types that will be deprecated in the backend plugin.

## Breaking changes

### `@backstage/plugin-playlist` (0.1.17 → [0.2.0](../../changelogs/@backstage/plugin-playlist.md#020))

#### 0.2.0

##### Minor Changes

- [`f0e2ef3b81`](https://github.com/backstage/backstage/commit/f0e2ef3b81): Support being able to define custom composable Playlist index pages

  **BREAKING** The individual `PlaylistPage` route must now be manually hooked up by making the following change to your setup:

  ```diff
  -import { PlaylistIndexPage } from '@backstage/plugin-playlist';
  +import { PlaylistIndexPage, PlaylistPage } from '@backstage/plugin-playlist';

  // ...

   <Route path="/playlist" element={<PlaylistIndexPage />} />
  +<Route path="/playlist/:playlistId" element={<PlaylistPage />} />
  ```

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`69ee8d75f4`](https://github.com/backstage/backstage/commit/69ee8d75f4): Remove `button` prop from used MaterialUI `MenuItem` component fixing incompatibility with MaterialUI v5.
- [`62b5922916`](https://github.com/backstage/backstage/commit/62b5922916): Internal theme type updates

### `@backstage/plugin-scaffolder` (1.15.1 → [1.16.0](../../changelogs/@backstage/plugin-scaffolder.md#1160))

#### 1.16.0

##### Minor Changes

- [`f28c11743a`](https://github.com/backstage/backstage/commit/f28c11743a): Add a possibility to use a formatter on a warning panel. Applied it for a scaffolder template
- [`3fdffbb699`](https://github.com/backstage/backstage/commit/3fdffbb699): Release design improvements for the `Scaffolder` plugin and support v5 of `@rjsf/*` libraries.

  This change should be non-breaking. If you're seeing typescript issues after migrating please [open an issue](https://github.com/backstage/backstage/issues/new/choose)

  The `next` versions like `createNextFieldExtension` and `NextScaffolderPage` have been promoted to the public interface under `createScaffolderFieldExtension` and `ScaffolderPage`, so any older imports which are no longer found will need updating from `@backstage/plugin-scaffolder/alpha` or `@backstage/plugin-scaffolder-react/alpha` will need to be imported from `@backstage/plugin-scaffolder` and `@backstage/plugin-scaffolder-react` respectively.

  The legacy versions are now available in `/alpha` under `createLegacyFieldExtension` and `LegacyScaffolderPage` if you're running into issues, but be aware that these will be removed in a next mainline release.

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`69ee8d75f4`](https://github.com/backstage/backstage/commit/69ee8d75f4): Remove `button` prop from used MaterialUI `MenuItem` component fixing incompatibility with MaterialUI v5.
- [`c838da0edd`](https://github.com/backstage/backstage/commit/c838da0edd): Updated dependency `@rjsf/utils` to `5.13.6`.
  Updated dependency `@rjsf/core` to `5.13.6`.
  Updated dependency `@rjsf/material-ui` to `5.13.6`.
  Updated dependency `@rjsf/validator-ajv8` to `5.13.6`.
- [`26e4d916d5`](https://github.com/backstage/backstage/commit/26e4d916d5): Title and description in RepoUrlPicker are now correctly displayed.
- [`69c14904b6`](https://github.com/backstage/backstage/commit/69c14904b6): Use `EntityRefLinks` with `hideIcons` property to avoid double icons
- [`62b5922916`](https://github.com/backstage/backstage/commit/62b5922916): Internal theme type updates

### `@backstage/plugin-scaffolder-react` (1.5.6 → [1.6.0](../../changelogs/@backstage/plugin-scaffolder-react.md#160))

#### 1.6.0

##### Minor Changes

- [`3fdffbb699`](https://github.com/backstage/backstage/commit/3fdffbb699): Release design improvements for the `Scaffolder` plugin and support v5 of `@rjsf/*` libraries.

  This change should be non-breaking. If you're seeing typescript issues after migrating please [open an issue](https://github.com/backstage/backstage/issues/new/choose)

  The `next` versions like `createNextFieldExtension` and `NextScaffolderPage` have been promoted to the public interface under `createScaffolderFieldExtension` and `ScaffolderPage`, so any older imports which are no longer found will need updating from `@backstage/plugin-scaffolder/alpha` or `@backstage/plugin-scaffolder-react/alpha` will need to be imported from `@backstage/plugin-scaffolder` and `@backstage/plugin-scaffolder-react` respectively.

  The legacy versions are now available in `/alpha` under `createLegacyFieldExtension` and `LegacyScaffolderPage` if you're running into issues, but be aware that these will be removed in a next mainline release.

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`171a99816b`](https://github.com/backstage/backstage/commit/171a99816b): Fixed `backstage:featureFlag` in `scaffolder/next` by sorting out `manifest.steps`.
- [`c838da0edd`](https://github.com/backstage/backstage/commit/c838da0edd): Updated dependency `@rjsf/utils` to `5.13.6`.
  Updated dependency `@rjsf/core` to `5.13.6`.
  Updated dependency `@rjsf/material-ui` to `5.13.6`.
  Updated dependency `@rjsf/validator-ajv8` to `5.13.6`.
- [`69c14904b6`](https://github.com/backstage/backstage/commit/69c14904b6): Use `EntityRefLinks` with `hideIcons` property to avoid double icons
- [`62b5922916`](https://github.com/backstage/backstage/commit/62b5922916): Internal theme type updates
- [`dda56ae265`](https://github.com/backstage/backstage/commit/dda56ae265): Preserve step's time execution for a non-running task.
- [`76d07da66a`](https://github.com/backstage/backstage/commit/76d07da66a): Make it possible to define control buttons text (Back, Create, Review) per template

## Major version bumps

### `@backstage/plugin-dynatrace` (7.0.5 → [8.0.0](../../changelogs/@backstage/plugin-dynatrace.md#800))

#### 8.0.0

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

## 0.x minor version bumps

### `@backstage/backend-openapi-utils` (0.0.5 → [0.1.0](../../changelogs/@backstage/backend-openapi-utils.md#010))

#### 0.1.0

##### Minor Changes

- [`785fb1ea75`](https://github.com/backstage/backstage/commit/785fb1ea75): Adds a new route, `/openapi.json` to validated routers for displaying their full OpenAPI spec in a standard endpoint.

##### Patch Changes

- [`6694b369a3`](https://github.com/backstage/backstage/commit/6694b369a3): Adds a new function `wrapInOpenApiTestServer` that allows for proxied requests at runtime. This will support the new `yarn backstage-repo-tools schema openapi test` command.

### `@backstage/cli` (0.23.1 → [0.24.0](../../changelogs/@backstage/cli.md#0240))

#### 0.24.0

##### Minor Changes

- [`8db5c3cd7a`](https://github.com/backstage/backstage/commit/8db5c3cd7a): Removed support for the `publishConfig.alphaTypes` and `.betaTypes` fields that were used together with `--experimental-type-build` to generate `/alpha` and `/beta` entry points. Use the `exports` field to achieve this instead.
- [`4e36abef14`](https://github.com/backstage/backstage/commit/4e36abef14): Remove support for the deprecated `--experimental-type-build` option for `package build`.

##### Patch Changes

- [`4ba4ac351f`](https://github.com/backstage/backstage/commit/4ba4ac351f): Switch from using deprecated `@esbuild-kit/*` packages to using `tsx`. This also switches to using the new module loader `register` API when available, avoiding the experimental warning when starting backends.
- [`cd80ebb062`](https://github.com/backstage/backstage/commit/cd80ebb062): Updated dependency `vite-plugin-node-polyfills` to `^0.16.0`.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.
- [`971dcba764`](https://github.com/backstage/backstage/commit/971dcba764): Updated dependency `@typescript-eslint/eslint-plugin` to `6.10.0`.
- [`6bf7561d3c`](https://github.com/backstage/backstage/commit/6bf7561d3c): The experimental package detection will now ignore packages that don't make `package.json` available.
- [`e14cbf563d`](https://github.com/backstage/backstage/commit/e14cbf563d): Added `EXPERIMENTAL_VITE` flag for using [vite](https://vitejs.dev) as dev server instead of Webpack
- [`7cd34392f5`](https://github.com/backstage/backstage/commit/7cd34392f5): Ignore `stdin` when spawning backend child process for the `start` command. Fixing an issue where backend startup would hang.

### `@backstage/cli-node` (0.1.5 → [0.2.0](../../changelogs/@backstage/cli-node.md#020))

#### 0.2.0

##### Minor Changes

- [`8db5c3cd7a`](https://github.com/backstage/backstage/commit/8db5c3cd7a): Removed support for the `publishConfig.alphaTypes` and `.betaTypes` fields that were used together with `--experimental-type-build` to generate `/alpha` and `/beta` entry points. Use the `exports` field to achieve this instead.

### `@backstage/frontend-app-api` (0.2.0 → [0.3.0](../../changelogs/@backstage/frontend-app-api.md#030))

#### 0.3.0

##### Minor Changes

- [`68fc9dc60e`](https://github.com/backstage/backstage/commit/68fc9dc60e): Added the ability to configure bound routes through `app.routes.bindings`. The routing system used by `createApp` has been replaced by one that only supports route refs of the new format from `@backstage/frontend-plugin-api`. The requirement for route refs to have the same ID as their associated extension has been removed.

##### Patch Changes

- [`e28d379e32`](https://github.com/backstage/backstage/commit/e28d379e32): Refactor internal extension instance system into an app graph.
- [`fdc348d5d3`](https://github.com/backstage/backstage/commit/fdc348d5d3): The options parameter of `createApp` is now optional.
- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`dc613f9bcf`](https://github.com/backstage/backstage/commit/dc613f9bcf): Updated `app.extensions` configuration schema.
- [`733bd95746`](https://github.com/backstage/backstage/commit/733bd95746): Implement new `AppTreeApi`
- [`685a4c8901`](https://github.com/backstage/backstage/commit/685a4c8901): Installed features are now deduplicated both by reference and ID when available. Features passed to `createApp` now override both discovered and loaded features.
- [`fa28d4e6df`](https://github.com/backstage/backstage/commit/fa28d4e6df): No longer throw error on invalid input if the child is disabled.
- [`bb98953cb9`](https://github.com/backstage/backstage/commit/bb98953cb9): Register default implementation for the `Translation API` on the new `createApp`.
- [`fe6d09953d`](https://github.com/backstage/backstage/commit/fe6d09953d): Fix for app node output IDs not being serialized correctly.
- [`77f009b35d`](https://github.com/backstage/backstage/commit/77f009b35d): Internal updates to match changes in the experimental `@backstage/frontend-plugin-api`.
- [`4d6fa921db`](https://github.com/backstage/backstage/commit/4d6fa921db): Internal refactor to rename the app graph to app tree

### `@backstage/frontend-plugin-api` (0.2.0 → [0.3.0](../../changelogs/@backstage/frontend-plugin-api.md#030))

#### 0.3.0

##### Minor Changes

- [`68fc9dc60e`](https://github.com/backstage/backstage/commit/68fc9dc60e): Added `RouteRef`, `SubRouteRef`, `ExternalRouteRef`, and related types. All exports from this package that previously relied on the types with the same name from `@backstage/core-plugin-api` now use the new types instead. To convert and existing legacy route ref to be compatible with the APIs from this package, use the `convertLegacyRouteRef` utility from `@backstage/core-plugin-api/alpha`.
- [`77f009b35d`](https://github.com/backstage/backstage/commit/77f009b35d): Extensions now return their output from the factory function rather than calling `bind(...)`.

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`733bd95746`](https://github.com/backstage/backstage/commit/733bd95746): Add new `AppTreeApi`.
- [`6af88a05ff`](https://github.com/backstage/backstage/commit/6af88a05ff): Improve the extension boundary component and create a default extension suspense component.

### `@backstage/plugin-api-docs` (0.9.12 → [0.10.0](../../changelogs/@backstage/plugin-api-docs.md#0100))

#### 0.10.0

##### Minor Changes

- [`0ac0e10822`](https://github.com/backstage/backstage/commit/0ac0e10822): Replace GraphiQL playground with DocExplorer
- [`62310404b7`](https://github.com/backstage/backstage/commit/62310404b7): Define a default for oauth2RedirectUrl option of swagger-ui-react to match documentation

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.
- [`613a55911f`](https://github.com/backstage/backstage/commit/613a55911f): Updated dependency `graphiql` to `3.0.9`.
- [`4ad15278e6`](https://github.com/backstage/backstage/commit/4ad15278e6): Updated dependency `@graphiql/react` to `^0.20.0`.
- [`62b5922916`](https://github.com/backstage/backstage/commit/62b5922916): Internal theme type updates

### `@backstage/plugin-auth-backend` (0.19.4 → [0.20.0](../../changelogs/@backstage/plugin-auth-backend.md#0200))

#### 0.20.0

##### Minor Changes

- [`bdf08ad04a`](https://github.com/backstage/backstage/commit/bdf08ad04a): Adds the StaticTokenIssuer and StaticKeyStore, an alternative token issuer that can be used to sign the Authorization header using a predefined public/private key pair.

##### Patch Changes

- [`243c655a68`](https://github.com/backstage/backstage/commit/243c655a68): JSDoc and Error message updates to handle `Azure Active Directory` re-brand to `Entra ID`
- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.
- [`f2fc5acca6`](https://github.com/backstage/backstage/commit/f2fc5acca6): Added an optional `additionalScopes` configuration parameter to `okta` providers, that lets you add additional scopes on top of the default ones.
- [`96c4f54bf6`](https://github.com/backstage/backstage/commit/96c4f54bf6): Reverted the Microsoft auth provider to the previous implementation.

### `@backstage/plugin-catalog-graph` (0.2.37 → [0.3.0](../../changelogs/@backstage/plugin-catalog-graph.md#030))

#### 0.3.0

##### Minor Changes

- [`a604623324`](https://github.com/backstage/backstage/commit/a604623324): Add the entire `Entity` to `EntityNodeData` and deprecate `name`, `kind`, `title`, `namespace` and `spec`.

  To get the deprecated properties in your custom component you can use:

  ```typescript
  import { DEFAULT_NAMESPACE } from '@backstage/catalog-model';

  const {
    kind,
    metadata: { name, namespace = DEFAULT_NAMESPACE, title },
  } = entity;
  ```

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`62b5922916`](https://github.com/backstage/backstage/commit/62b5922916): Internal theme type updates

### `@backstage/plugin-graphiql` (0.2.55 → [0.3.0](../../changelogs/@backstage/plugin-graphiql.md#030))

#### 0.3.0

##### Minor Changes

- [`57fda44b90`](https://github.com/backstage/backstage/commit/57fda44b90): Upgrade to GraphiQL to 3.0.6

##### Patch Changes

- [`68fc9dc60e`](https://github.com/backstage/backstage/commit/68fc9dc60e): Updated alpha exports according to routing changes in `@backstage/frontend-plugin-api`.
- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.
- [`77f009b35d`](https://github.com/backstage/backstage/commit/77f009b35d): Internal updates to match changes in the experimental `@backstage/frontend-plugin-api`.

### `@backstage/plugin-vault-backend` (0.3.11 → [0.4.0](../../changelogs/@backstage/plugin-vault-backend.md#040))

#### 0.4.0

##### Minor Changes

- [`a873a32a1f`](https://github.com/backstage/backstage/commit/a873a32a1f): Added support for the [new backend system](https://backstage.io/docs/backend-system/).

  In your `packages/backend/src/index.ts` make the following changes:

  ```diff
    import { createBackend } from '@backstage/backend-defaults';
    const backend = createBackend();
    // ... other feature additions
  + backend.add(import('@backstage/plugin-vault-backend');
    backend.start();
  ```

  If you use the new backend system, the token renewal task can be defined via configuration file:

  ```diff
  vault:
    baseUrl: <BASE_URL>
    token: <TOKEN>
    schedule:
  +   frequency: ...
  +   timeout: ...
  +   # Other schedule options, such as scope or initialDelay
  ```

  If the `schedule` is omitted or set to `false` no token renewal task will be scheduled.
  If the value of `schedule` is set to `true` the renew will be scheduled hourly (the default).
  In other cases (like in the diff above), the defined schedule will be used.

  **DEPRECATIONS**: The interface `VaultApi` and the type `VaultSecret` are now deprecated. Import them from `@backstage/plugin-vault-node`.

### `@backstage/repo-tools` (0.3.5 → [0.4.0](../../changelogs/@backstage/repo-tools.md#040))

#### 0.4.0

##### Minor Changes

- [`4e36abef14`](https://github.com/backstage/backstage/commit/4e36abef14): Remove support for the deprecated `--experimental-type-build` option for `package build`.
- [`6694b369a3`](https://github.com/backstage/backstage/commit/6694b369a3): Adds a new command `schema openapi test` that performs runtime validation of your OpenAPI specs using your test data. Under the hood, we're using Optic to perform this check, really cool work by them!

  To use this new command, you will have to run `yarn add @useoptic/optic` in the root of your repo.

## 0.0.x patch version bumps

### `@backstage/plugin-analytics-module-newrelic-browser` (0.0.3 → [0.0.4](../../changelogs/@backstage/plugin-analytics-module-newrelic-browser.md#004))

#### 0.0.4

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-explore-react` (0.0.32 → [0.0.33](../../changelogs/@backstage/plugin-explore-react.md#0033))

#### 0.0.33

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/plugin-kubernetes-cluster` (0.0.1 → [0.0.2](../../changelogs/@backstage/plugin-kubernetes-cluster.md#002))

#### 0.0.2

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/release-manifests` (0.0.10 → [0.0.11](../../changelogs/@backstage/release-manifests.md#0011))

#### 0.0.11

##### Patch Changes

- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

## Other minor version bumps

### `@backstage/core-plugin-api` (1.7.0 → [1.8.0](../../changelogs/@backstage/core-plugin-api.md#180))

#### 1.8.0

##### Minor Changes

- [`1e5b7d993a`](https://github.com/backstage/backstage/commit/1e5b7d993a): `IconComponent` can now have a `fontSize` of `inherit`, which is useful for in-line icons.
- [`cb6db75bc2`](https://github.com/backstage/backstage/commit/cb6db75bc2): Introduced `AnyRouteRefParams` as a replacement for `AnyParams`, which is now deprecated.

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`cb6db75bc2`](https://github.com/backstage/backstage/commit/cb6db75bc2): Deprecated several types related to the routing system that are scheduled to be removed, as well as several fields on the route ref types themselves.
- [`68fc9dc60e`](https://github.com/backstage/backstage/commit/68fc9dc60e): Added a new `/alpha` export `convertLegacyRouteRef`, which is a temporary utility to allow existing route refs to be used with the new experimental packages.

### `@backstage/plugin-catalog` (1.14.0 → [1.15.0](../../changelogs/@backstage/plugin-catalog.md#1150))

#### 1.15.0

##### Minor Changes

- [`1e5b7d993a`](https://github.com/backstage/backstage/commit/1e5b7d993a): Added the `DefaultEntityPresentationApi`, which is an implementation of the
  `EntityPresentationApi` that `@backstage/plugin-catalog-react` exposes through
  its `entityPresentationApiRef`. This implementation is also by default made
  available automatically by the catalog plugin, unless you replace it with a
  custom one. It batch fetches and caches data from the catalog as needed for
  display, and is customizable by adopters to add their own rendering functions.

##### Patch Changes

- [`eb817ee6d4`](https://github.com/backstage/backstage/commit/eb817ee6d4): Fix spacing inconsistency with links and labels in headers
- [`8a8445663b`](https://github.com/backstage/backstage/commit/8a8445663b): Migrate catalog entity cards to new frontend system extension format.
- [`e964c17db9`](https://github.com/backstage/backstage/commit/e964c17db9): Use default extensions boundary and suspense on the alpha declarative `createCatalogFilterExtension` extension factory.
- [`71c97e7d73`](https://github.com/backstage/backstage/commit/71c97e7d73): The `spec.lifecycle' field in entities will now always be rendered as a string.
- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`0bf6ebda88`](https://github.com/backstage/backstage/commit/0bf6ebda88): Initial entity page implementation for new frontend system at `/alpha`, with an overview page enabled by default and the about card available as an optional card.
- [`bb98953cb9`](https://github.com/backstage/backstage/commit/bb98953cb9): Create declarative extensions for the `Catalog` plugin; this initial plugin preset contains sidebar item, index page and filter extensions, all distributed via `/alpha` subpath.

  The `EntityPage` will be migrated in a follow-up patch.

- [`7c265b9758`](https://github.com/backstage/backstage/commit/7c265b9758): Fix type error on `CatalogTable` when using Material UI v5
- [`69c14904b6`](https://github.com/backstage/backstage/commit/69c14904b6): Use `EntityRefLinks` with `hideIcons` property to avoid double icons
- [`62b5922916`](https://github.com/backstage/backstage/commit/62b5922916): Internal theme type updates
- [`77f009b35d`](https://github.com/backstage/backstage/commit/77f009b35d): Internal updates to match changes in the experimental `@backstage/frontend-plugin-api`.

### `@backstage/plugin-catalog-backend` (1.14.0 → [1.15.0](../../changelogs/@backstage/plugin-catalog-backend.md#1150))

#### 1.15.0

##### Minor Changes

- [`e5bf3749ad`](https://github.com/backstage/backstage/commit/e5bf3749ad): Support adding location analyzers in new catalog analysis extension point and move `AnalyzeOptions` and `ScmLocationAnalyzer` types to `@backstage/plugin-catalog-node`
- [`8d756968f9`](https://github.com/backstage/backstage/commit/8d756968f9): Introduce a new optional config parameter `catalog.stitchingStrategy.mode`,
  which can have the values `'immediate'` (default) and `'deferred'`. The default
  is for stitching to work as it did before this change, which means that it
  happens "in-band" (blocking) immediately when each processing task finishes.
  When set to `'deferred'`, stitching is instead deferred to happen on a separate
  asynchronous worker queue just like processing.

  Deferred stitching should make performance smoother when ingesting large amounts
  of entities, and reduce p99 processing times and repeated over-stitching of
  hot spot entities when fan-out/fan-in in terms of relations is very large. It
  does however also come with some performance cost due to the queuing with how
  much wall-clock time some types of task take.

##### Patch Changes

- [`6694b369a3`](https://github.com/backstage/backstage/commit/6694b369a3): Update the OpenAPI spec with more complete error responses and request bodies using Optic. Also, updates the test cases to use the new `supertest` pass through from `@backstage/backend-openapi-utils`.
- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.

### `@backstage/plugin-catalog-node` (1.4.7 → [1.5.0](../../changelogs/@backstage/plugin-catalog-node.md#150))

#### 1.5.0

##### Minor Changes

- [`e5bf3749ad`](https://github.com/backstage/backstage/commit/e5bf3749ad): Support adding location analyzers in new catalog analysis extension point and move `AnalyzeOptions` and `ScmLocationAnalyzer` types to `@backstage/plugin-catalog-node`

### `@backstage/plugin-catalog-react` (1.8.5 → [1.9.0](../../changelogs/@backstage/plugin-catalog-react.md#190))

#### 1.9.0

##### Minor Changes

- [`1e5b7d993a`](https://github.com/backstage/backstage/commit/1e5b7d993a): Added an `EntityPresentationApi` and associated `entityPresentationApiRef`. This
  API lets you control how references to entities (e.g. in links, headings,
  iconography etc) are represented in the user interface.

  Usage of this API is initially added to the `EntityRefLink` and `EntityRefLinks`
  components, so that they can render richer, more correct representation of
  entity refs. There's also a new `EntityDisplayName` component, which works just like
  the `EntityRefLink` but without the link.

  Along with that change, the `fetchEntities` and `getTitle` props of
  `EntityRefLinksProps` are deprecated and no longer used, since the same need
  instead is fulfilled (and by default always enabled) by the
  `entityPresentationApiRef`.

- [`1fd53fa0c6`](https://github.com/backstage/backstage/commit/1fd53fa0c6): The `UserListPicker` component has undergone improvements to enhance its performance.

  The previous implementation inferred the number of owned and starred entities based on the entities available in the `EntityListContext`. The updated version no longer relies on the `EntityListContext` for inference, allowing for better decoupling.

  The component now loads the entities' count asynchronously, resulting in improved performance and responsiveness. For this purpose, some of the exported filters such as `EntityTagFilter`, `EntityOwnerFilter`, `EntityLifecycleFilter` and `EntityNamespaceFilter` have now the `getCatalogFilters` method implemented.

##### Patch Changes

- [`2ad1bacef7`](https://github.com/backstage/backstage/commit/2ad1bacef7): Add EntityRef to Entity Inspector UI
- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`69ee8d75f4`](https://github.com/backstage/backstage/commit/69ee8d75f4): Remove `button` prop from used MaterialUI `MenuItem` component fixing incompatibility with MaterialUI v5.
- [`0bf6ebda88`](https://github.com/backstage/backstage/commit/0bf6ebda88): Added new APIs at the `/alpha` subpath for creating entity page cards and content for the new frontend system.
- [`77f009b35d`](https://github.com/backstage/backstage/commit/77f009b35d): Internal updates to match changes in the experimental `@backstage/frontend-plugin-api`.
- [`71c97e7d73`](https://github.com/backstage/backstage/commit/71c97e7d73): The `spec.type` field in entities will now always be rendered as a string.
- [`69c14904b6`](https://github.com/backstage/backstage/commit/69c14904b6): Move the `EntityRefLink` icon to the left hand side as per Material-UI guidelines
- [`000dcd01af`](https://github.com/backstage/backstage/commit/000dcd01af): Removed unnecessary `@backstage/integration` dependency, replaced by `@backstage/integration-react`.
- [`6c357184e2`](https://github.com/backstage/backstage/commit/6c357184e2): Export `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react`

### `@backstage/plugin-scaffolder-backend` (1.18.1 → [1.19.0](../../changelogs/@backstage/plugin-scaffolder-backend.md#1190))

#### 1.19.0

##### Minor Changes

- [`f3ab9cfcb7`](https://github.com/backstage/backstage/commit/f3ab9cfcb7): Made shut down stale tasks configurable.

  There are two properties exposed:

  - `scaffolder.processingInterval` - sets the processing interval for staled tasks.
  - `scaffolder.taskTimeoutJanitorFrequency` - sets the task's heartbeat timeout, when to consider a task to be staled.

- [`7d5a921114`](https://github.com/backstage/backstage/commit/7d5a921114): Allow using `globby`'s negative matching with `copyWithoutTemplating`/`copyWithoutRender`. This allows including an entire subdirectory while excluding a single file so that it will still be templated instead of needing to list every other file and ensure the list is updated when new files are added.
- [`5e4127c18e`](https://github.com/backstage/backstage/commit/5e4127c18e): Allow setting `update: true` in `publish:github:pull-request` scaffolder action

##### Patch Changes

- [`0920fd02ac`](https://github.com/backstage/backstage/commit/0920fd02ac): Add examples for `github:environment:create` scaffolder action & improve related tests
- [`ae30a9ae8c`](https://github.com/backstage/backstage/commit/ae30a9ae8c): Added description for publish:gerrit scaffolder actions
- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.
- [`23f72b2cba`](https://github.com/backstage/backstage/commit/23f72b2cba): Refactoring the runner to generate minimally informative task log per iteration and properly validate iterated actions.
- [`8613ba3928`](https://github.com/backstage/backstage/commit/8613ba3928): Switched to using `"exports"` field for `/alpha` subpath export.
- [`99d4936f6c`](https://github.com/backstage/backstage/commit/99d4936f6c): Add examples for `github:webhook` scaffolder action & improve related tests
- [`2be3922eb8`](https://github.com/backstage/backstage/commit/2be3922eb8): Add examples for `github:deployKey:create` scaffolder action & improve related tests
- [`76d07da66a`](https://github.com/backstage/backstage/commit/76d07da66a): Make it possible to define control buttons text (Back, Create, Review) per template
- [`f8727ad228`](https://github.com/backstage/backstage/commit/f8727ad228): Add examples for `publish:github:pull-request` scaffolder action & improve related tests

### `@backstage/plugin-techdocs` (1.8.0 → [1.9.0](../../changelogs/@backstage/plugin-techdocs.md#190))

#### 1.9.0

##### Minor Changes

- [`17f93d5589`](https://github.com/backstage/backstage/commit/17f93d5589): A new analytics event `not-found` will be published when a user visits a documentation site that does not exist

##### Patch Changes

- [`4728b3960d`](https://github.com/backstage/backstage/commit/4728b3960d): Fixed navigation bug that caused users to not be scrolled to the top of a new page. Fixed navigation bug where using backwards and forwards browser navigation did not scroll users to the correct place on the TechDoc page.
- [`a3add7a682`](https://github.com/backstage/backstage/commit/a3add7a682): Export alpha routes and nav item extension, only available for applications that uses the new Frontend system.
- [`71c97e7d73`](https://github.com/backstage/backstage/commit/71c97e7d73): The `spec.lifecycle' field in entities will now always be rendered as a string.
- [`68fc9dc60e`](https://github.com/backstage/backstage/commit/68fc9dc60e): Updated alpha exports according to routing changes in `@backstage/frontend-plugin-api`.
- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`0bf6ebda88`](https://github.com/backstage/backstage/commit/0bf6ebda88): Added entity page content for the new plugin exported via `/alpha`.
- [`67cc85bb14`](https://github.com/backstage/backstage/commit/67cc85bb14): Switched the conditional `react-dom/client` import to use `import(...)` rather than `require(...)`.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.
- [`38cda52746`](https://github.com/backstage/backstage/commit/38cda52746): Added support for React 18. The new `createRoot` API from `react-dom/client` will now be used if present.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-techdocs-backend` (1.8.0 → [1.9.0](../../changelogs/@backstage/plugin-techdocs-backend.md#190))

#### 1.9.0

##### Minor Changes

- [`67cff7b06f`](https://github.com/backstage/backstage/commit/67cff7b06f): Expose an extension point to set a custom build strategy. Also move `DocsBuildStrategy` type to `@backstage/plugin-techdocs-node` and deprecate `ShouldBuildParameters` type.

##### Patch Changes

- [`c3c5c7e514`](https://github.com/backstage/backstage/commit/c3c5c7e514): Add info about the entity when tech docs fail to build
- [`48a61bfdca`](https://github.com/backstage/backstage/commit/48a61bfdca): Fix potential memory leak by not creating a build log transport if not given via `RouterOptions`.
- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.

### `@backstage/plugin-techdocs-node` (1.9.0 → [1.10.0](../../changelogs/@backstage/plugin-techdocs-node.md#1100))

#### 1.10.0

##### Minor Changes

- [`67cff7b06f`](https://github.com/backstage/backstage/commit/67cff7b06f): Expose an extension point to set a custom build strategy. Also move `DocsBuildStrategy` type to `@backstage/plugin-techdocs-node` and deprecate `ShouldBuildParameters` type.

##### Patch Changes

- [`e61a975f61`](https://github.com/backstage/backstage/commit/e61a975f61): Switch to `@smithy/node-http-handler` instead of the `@aws-sdk/node-http-handler`
- [`3d043526f4`](https://github.com/backstage/backstage/commit/3d043526f4): Updated dependency `aws-sdk-client-mock` to `^3.0.0`.

### `@techdocs/cli` (1.6.0 → [1.7.0](../../changelogs/@techdocs/cli.md#170))

#### 1.7.0

##### Minor Changes

- [`8600b86820`](https://github.com/backstage/backstage/commit/8600b86820): validate Docker status before running mkdocs server

## Other patch version bumps

### `@backstage/app-defaults` (1.4.4 → [1.4.5](../../changelogs/@backstage/app-defaults.md#145))

#### 1.4.5

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/backend-app-api` (0.5.7 → [0.5.8](../../changelogs/@backstage/backend-app-api.md#058))

#### 0.5.8

##### Patch Changes

- [`bc9a18d5ec`](https://github.com/backstage/backstage/commit/bc9a18d5ec): Added a workaround for double `default` wrapping when dynamically importing CommonJS modules with default exports.

### `@backstage/backend-common` (0.19.8 → [0.19.9](../../changelogs/@backstage/backend-common.md#0199))

#### 0.19.9

##### Patch Changes

- [`aa13482090`](https://github.com/backstage/backstage/commit/aa13482090): Limit the database creation concurrency to one, defensively
- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.
- [`3d043526f4`](https://github.com/backstage/backstage/commit/3d043526f4): Updated dependency `aws-sdk-client-mock` to `^3.0.0`.

### `@backstage/backend-plugin-api` (0.6.6 → [0.6.7](../../changelogs/@backstage/backend-plugin-api.md#067))

#### 0.6.7

##### Patch Changes

- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.

### `@backstage/backend-tasks` (0.5.11 → [0.5.12](../../changelogs/@backstage/backend-tasks.md#0512))

#### 0.5.12

##### Patch Changes

- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.

### `@backstage/backend-test-utils` (0.2.7 → [0.2.8](../../changelogs/@backstage/backend-test-utils.md#028))

#### 0.2.8

##### Patch Changes

- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.
- [`bb688f7b3b`](https://github.com/backstage/backstage/commit/bb688f7b3b): Ensure recursive deletion of temporary directories in tests

### `@backstage/catalog-client` (1.4.5 → [1.4.6](../../changelogs/@backstage/catalog-client.md#146))

#### 1.4.6

##### Patch Changes

- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/config-loader` (1.5.2 → [1.5.3](../../changelogs/@backstage/config-loader.md#153))

#### 1.5.3

##### Patch Changes

- [`22ca64f117`](https://github.com/backstage/backstage/commit/22ca64f117): Correctly resolve config targets into absolute paths
- [`087bab5b42`](https://github.com/backstage/backstage/commit/087bab5b42): Updated dependency `typescript-json-schema` to `^0.62.0`.

### `@backstage/core-app-api` (1.11.0 → [1.11.1](../../changelogs/@backstage/core-app-api.md#1111))

#### 1.11.1

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`89d13e5618`](https://github.com/backstage/backstage/commit/89d13e5618): Add current and default scopes when refreshing session
- [`9ab0572217`](https://github.com/backstage/backstage/commit/9ab0572217): Add component data `core.type` marker for `AppRouter` and `FlatRoutes`.

### `@backstage/core-components` (0.13.7 → [0.13.8](../../changelogs/@backstage/core-components.md#0138))

#### 0.13.8

##### Patch Changes

- [`81c8db2088`](https://github.com/backstage/backstage/commit/81c8db2088): Fix `RoutedTabs` so that it does not explode without tabs.
- [`eb817ee6d4`](https://github.com/backstage/backstage/commit/eb817ee6d4): Fix spacing inconsistency with links and labels in headers
- [`f28c11743a`](https://github.com/backstage/backstage/commit/f28c11743a): Add a possibility to use a formatter on a warning panel. Applied it for a scaffolder template
- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`e07570a740`](https://github.com/backstage/backstage/commit/e07570a740): Fixed an issue causing the `Select` component to show empty chips when some of the selected values did not match any item
- [`7bdc1b0a12`](https://github.com/backstage/backstage/commit/7bdc1b0a12): Fixed compatibility with Safari <16.3 by eliminating RegEx lookbehind in `extractInitials`.

  This PR also changed how initials are generated resulting in _John Jonathan Doe_ => _JD_ instead of _JJ_.

- [`66071b42c0`](https://github.com/backstage/backstage/commit/66071b42c0): Make the `options.titleFormat` prop of `<StructuredMetadataTable />` apply to all keys including nested ones. Previously, this option would only apply to the root keys of the `metadata` prop.

  Document and improve the props of `<StructuredMetadataTable />`. Previously, the `options` prop was `any`.

- [`71c97e7d73`](https://github.com/backstage/backstage/commit/71c97e7d73): Fixed the type declaration of `DependencyGraphProps`, the `defs` prop now expects `JSX.Element`s.
- [`0c5b78650c`](https://github.com/backstage/backstage/commit/0c5b78650c): Reverting the `MissingAnnotationEmptyState` component due to cyclical dependency. This component is now deprecated, please use the import from `@backstage/plugin-catalog-react` instead to use the new functionality
- [`4b7d341746`](https://github.com/backstage/backstage/commit/4b7d341746): Updated dependency `linkify-react` to `4.1.2`.
- [`0ef24425c1`](https://github.com/backstage/backstage/commit/0ef24425c1): Updated dependency `linkifyjs` to `4.1.2`.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/create-app` (0.5.6 → [0.5.7](../../changelogs/@backstage/create-app.md#057))

#### 0.5.7

##### Patch Changes

- [`770763487a`](https://github.com/backstage/backstage/commit/770763487a): Cleaned up cases where deprecated code was being used but had a new location they should be imported from
- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.

  You can do the same in your own Backstage repository to ensure that you get future node 18+ relevant updates, by having the following lines in your `packages/backend/package.json`:

  ```
  "dependencies": {
    // ...
    "knex": "^3.0.0"
  },
  "devDependencies": {
    // ...
    "better-sqlite3": "^9.0.0",
  ```

- [`f577e1176f`](https://github.com/backstage/backstage/commit/f577e1176f): Bumped create-app version.
- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`ae1602e54d`](https://github.com/backstage/backstage/commit/ae1602e54d): If create app installs dependencies, don't suggest to user that they also need to do it.
- [`e6b7ab8d2b`](https://github.com/backstage/backstage/commit/e6b7ab8d2b): Added missing node-gyp dependency to fix Docker image build

### `@backstage/dev-utils` (1.0.22 → [1.0.23](../../changelogs/@backstage/dev-utils.md#1023))

#### 1.0.23

##### Patch Changes

- [`67cc85bb14`](https://github.com/backstage/backstage/commit/67cc85bb14): Switched the conditional `react-dom/client` import to use `import(...)` rather than `require(...)`.
- [`38cda52746`](https://github.com/backstage/backstage/commit/38cda52746): Added support for React 18. The new `createRoot` API from `react-dom/client` will now be used if present.

### `@backstage/integration` (1.7.1 → [1.7.2](../../changelogs/@backstage/integration.md#172))

#### 1.7.2

##### Patch Changes

- [`243c655a68`](https://github.com/backstage/backstage/commit/243c655a68): JSDoc and Error message updates to handle `Azure Active Directory` re-brand to `Entra ID`
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/integration-aws-node` (0.1.7 → [0.1.8](../../changelogs/@backstage/integration-aws-node.md#018))

#### 0.1.8

##### Patch Changes

- [`20d97d28a3`](https://github.com/backstage/backstage/commit/20d97d28a3): Updated dependency `aws-sdk-client-mock-jest` to `^3.0.0`.
- [`3d043526f4`](https://github.com/backstage/backstage/commit/3d043526f4): Updated dependency `aws-sdk-client-mock` to `^3.0.0`.

### `@backstage/integration-react` (1.1.20 → [1.1.21](../../changelogs/@backstage/integration-react.md#1121))

#### 1.1.21

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-adr` (0.6.8 → [0.6.9](../../changelogs/@backstage/plugin-adr.md#069))

#### 0.6.9

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-adr-backend` (0.4.3 → [0.4.4](../../changelogs/@backstage/plugin-adr-backend.md#044))

#### 0.4.4

##### Patch Changes

- [`68f8a55622`](https://github.com/backstage/backstage/commit/68f8a55622): Updated dependency `@types/marked` to `^5.0.0`.

### `@backstage/plugin-airbrake` (0.3.25 → [0.3.26](../../changelogs/@backstage/plugin-airbrake.md#0326))

#### 0.3.26

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-allure` (0.1.41 → [0.1.42](../../changelogs/@backstage/plugin-allure.md#0142))

#### 0.1.42

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-analytics-module-ga` (0.1.34 → [0.1.35](../../changelogs/@backstage/plugin-analytics-module-ga.md#0135))

#### 0.1.35

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-analytics-module-ga4` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-analytics-module-ga4.md#016))

#### 0.1.6

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`504614d313`](https://github.com/backstage/backstage/commit/504614d313): Updated dependency `@types/jest` to `^29.0.0`.

### `@backstage/plugin-apache-airflow` (0.2.16 → [0.2.17](../../changelogs/@backstage/plugin-apache-airflow.md#0217))

#### 0.2.17

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/plugin-api-docs-module-protoc-gen-doc` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-api-docs-module-protoc-gen-doc.md#015))

#### 0.1.5

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-apollo-explorer` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-apollo-explorer.md#0117))

#### 0.1.17

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-app-backend` (0.3.54 → [0.3.55](../../changelogs/@backstage/plugin-app-backend.md#0355))

#### 0.3.55

##### Patch Changes

- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.

### `@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#014))

#### 0.1.4

##### Patch Changes

- [`a3236ad0ca`](https://github.com/backstage/backstage/commit/a3236ad0ca): Fix link to the repository in `README.md`.

### `@backstage/plugin-auth-backend-module-microsoft-provider` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#012))

#### 0.1.2

##### Patch Changes

- [`a3236ad0ca`](https://github.com/backstage/backstage/commit/a3236ad0ca): Fix link to the repository in `README.md`.
- [`3979524c74`](https://github.com/backstage/backstage/commit/3979524c74): Added support for specifying a domain hint on the Microsoft authentication provider configuration.
- [`fde212dd10`](https://github.com/backstage/backstage/commit/fde212dd10): Re-add the missing profile photo
  as well as access token retrieval for foreign scopes.

  Additionally, we switch from previously 48x48 to 96x96
  which is the size used at the profile card.

- [`5aeb14f035`](https://github.com/backstage/backstage/commit/5aeb14f035): Correctly mark the client secret in configuration as secret
- [`2817115d09`](https://github.com/backstage/backstage/commit/2817115d09): Removed `prompt=consent` from start method to fix #20641

### `@backstage/plugin-auth-backend-module-pinniped-provider` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#011))

#### 0.1.1

##### Patch Changes

- [`a8f6afda4a`](https://github.com/backstage/backstage/commit/a8f6afda4a): Introduced metadata cache for the `pinniped` provider.

### `@backstage/plugin-azure-devops` (0.3.7 → [0.3.8](../../changelogs/@backstage/plugin-azure-devops.md#038))

#### 0.3.8

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`ce9e59cbb3`](https://github.com/backstage/backstage/commit/ce9e59cbb3): Refactored the error handling for some of the hooks
- [`361bb34d8e`](https://github.com/backstage/backstage/commit/361bb34d8e): Consolidated getting the annotation values into a single function to help with future changes

### `@backstage/plugin-azure-sites` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-azure-sites.md#0115))

#### 0.1.15

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-badges` (0.2.49 → [0.2.50](../../changelogs/@backstage/plugin-badges.md#0250))

#### 0.2.50

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-badges-backend` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-badges-backend.md#034))

#### 0.3.4

##### Patch Changes

- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/plugin-bazaar` (0.2.17 → [0.2.18](../../changelogs/@backstage/plugin-bazaar.md#0218))

#### 0.2.18

##### Patch Changes

- [`c6e7940ccf`](https://github.com/backstage/backstage/commit/c6e7940ccf): Updated Readme document in bazaar plugin
- [`4e66e37bd1`](https://github.com/backstage/backstage/commit/4e66e37bd1): Added alert popup for link and unlink entity in bazaar project
- [`c5aad900e3`](https://github.com/backstage/backstage/commit/c5aad900e3): Adding descending sort in a bazaar plugin
- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`69ee8d75f4`](https://github.com/backstage/backstage/commit/69ee8d75f4): Remove `button` prop from used MaterialUI `MenuItem` component fixing incompatibility with MaterialUI v5.
- [`b3acba9091`](https://github.com/backstage/backstage/commit/b3acba9091): Added alert popup in the bazaar plugin
- [`1a40159acb`](https://github.com/backstage/backstage/commit/1a40159acb): Removed unnecessary dependency on `@backstage/cli`.
- [`62b5922916`](https://github.com/backstage/backstage/commit/62b5922916): Internal theme type updates

### `@backstage/plugin-bazaar-backend` (0.3.4 → [0.3.5](../../changelogs/@backstage/plugin-bazaar-backend.md#035))

#### 0.3.5

##### Patch Changes

- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.
- [`8613ba3928`](https://github.com/backstage/backstage/commit/8613ba3928): Switched to using `"exports"` field for `/alpha` subpath export.

### `@backstage/plugin-bitbucket-cloud-common` (0.2.13 → [0.2.14](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#0214))

#### 0.2.14

##### Patch Changes

- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/plugin-bitrise` (0.1.52 → [0.1.53](../../changelogs/@backstage/plugin-bitrise.md#0153))

#### 0.1.53

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-catalog-backend-module-aws` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#031))

#### 0.3.1

##### Patch Changes

- [`20d97d28a3`](https://github.com/backstage/backstage/commit/20d97d28a3): Updated dependency `aws-sdk-client-mock-jest` to `^3.0.0`.
- [`3d043526f4`](https://github.com/backstage/backstage/commit/3d043526f4): Updated dependency `aws-sdk-client-mock` to `^3.0.0`.

### `@backstage/plugin-catalog-backend-module-gcp` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#017))

#### 0.1.7

##### Patch Changes

- [`62180df4ee`](https://github.com/backstage/backstage/commit/62180df4ee): Allow integration with kubernetes dashboard

### `@backstage/plugin-catalog-backend-module-github` (0.4.4 → [0.4.5](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#045))

#### 0.4.5

##### Patch Changes

- [`88b673aa76`](https://github.com/backstage/backstage/commit/88b673aa76): Import `AnalyzeOptions` and `ScmLocationAnalyzer` types from `@backstage/plugin-catalog-node`

### `@backstage/plugin-catalog-backend-module-gitlab` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#034))

#### 0.3.4

##### Patch Changes

- [`d732f17610`](https://github.com/backstage/backstage/commit/d732f17610): Added try catch around fetching gitlab group users to prevent refresh from failing completely while only a select number of groups might not be able to load correctly.
- [`0873a43ac1`](https://github.com/backstage/backstage/commit/0873a43ac1): Resolved a bug affecting the retrieval of users from group members. By appending '/all' to the API call, we now include members from all inherited groups, as per Gitlab's API specifications. This change is reflected in the listSaaSUsers function.

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.10 → [0.4.11](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#0411))

#### 0.4.11

##### Patch Changes

- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.

### `@backstage/plugin-catalog-backend-module-msgraph` (0.5.13 → [0.5.14](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#0514))

#### 0.5.14

##### Patch Changes

- [`224aa6f64c`](https://github.com/backstage/backstage/commit/224aa6f64c): export the function to read ms graph provider config
- [`243c655a68`](https://github.com/backstage/backstage/commit/243c655a68): JSDoc and Error message updates to handle `Azure Active Directory` re-brand to `Entra ID`

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#034))

#### 0.3.4

##### Patch Changes

- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.

### `@backstage/plugin-catalog-graphql` (0.4.0 → [0.4.1](../../changelogs/@backstage/plugin-catalog-graphql.md#041))

#### 0.4.1

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-catalog-import` (0.10.1 → [0.10.2](../../changelogs/@backstage/plugin-catalog-import.md#0102))

#### 0.10.2

##### Patch Changes

- [`6db75b900a`](https://github.com/backstage/backstage/commit/6db75b900a): Create an experimental plugin that is compatible with the declarative integration system, it is exported from the `/alpha` subpath.
- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`dee1f39fcc`](https://github.com/backstage/backstage/commit/dee1f39fcc): Fix missing children key warning on the default catalog import page.
- [`71c97e7d73`](https://github.com/backstage/backstage/commit/71c97e7d73): The `app.title` configuration is now properly required to be a string.

### `@backstage/plugin-catalog-unprocessed-entities` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#015))

#### 0.1.5

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`a11cdb9200`](https://github.com/backstage/backstage/commit/a11cdb9200): Added filtering and sorting to unprocessed entities tables.

### `@backstage/plugin-cicd-statistics` (0.1.27 → [0.1.28](../../changelogs/@backstage/plugin-cicd-statistics.md#0128))

#### 0.1.28

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-cicd-statistics-module-gitlab` (0.1.21 → [0.1.22](../../changelogs/@backstage/plugin-cicd-statistics-module-gitlab.md#0122))

#### 0.1.22

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-circleci` (0.3.25 → [0.3.26](../../changelogs/@backstage/plugin-circleci.md#0326))

#### 0.3.26

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-cloudbuild` (0.3.25 → [0.3.26](../../changelogs/@backstage/plugin-cloudbuild.md#0326))

#### 0.3.26

##### Patch Changes

- [`8ae07cab4c`](https://github.com/backstage/backstage/commit/8ae07cab4c): Added Installation Steps so that it is clear what is needed to install and use the Google Cloud Plugin.
- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-code-climate` (0.1.25 → [0.1.26](../../changelogs/@backstage/plugin-code-climate.md#0126))

#### 0.1.26

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`62b5922916`](https://github.com/backstage/backstage/commit/62b5922916): Internal theme type updates
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-code-coverage` (0.2.18 → [0.2.19](../../changelogs/@backstage/plugin-code-coverage.md#0219))

#### 0.2.19

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`71c97e7d73`](https://github.com/backstage/backstage/commit/71c97e7d73): The warning for missing code coverage will now render the entity as a reference.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-code-coverage-backend` (0.2.20 → [0.2.21](../../changelogs/@backstage/plugin-code-coverage-backend.md#0221))

#### 0.2.21

##### Patch Changes

- [`11f671eaa9`](https://github.com/backstage/backstage/commit/11f671eaa9): Added support for new backend system
- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.

### `@backstage/plugin-codescene` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-codescene.md#0119))

#### 0.1.19

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-config-schema` (0.1.46 → [0.1.47](../../changelogs/@backstage/plugin-config-schema.md#0147))

#### 0.1.47

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-cost-insights` (0.12.14 → [0.12.15](../../changelogs/@backstage/plugin-cost-insights.md#01215))

#### 0.12.15

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`69ee8d75f4`](https://github.com/backstage/backstage/commit/69ee8d75f4): Remove `button` prop from used MaterialUI `MenuItem` component fixing incompatibility with MaterialUI v5.
- [`d49cffaf6a`](https://github.com/backstage/backstage/commit/d49cffaf6a): Updated dependency `@types/pluralize` to `^0.0.33`.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.
- [`7da799d5b7`](https://github.com/backstage/backstage/commit/7da799d5b7): Updated dependency `@types/pluralize` to `^0.0.32`.
- [`62b5922916`](https://github.com/backstage/backstage/commit/62b5922916): Internal theme type updates

### `@backstage/plugin-devtools` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-devtools.md#016))

#### 0.1.6

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/plugin-entity-feedback` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-entity-feedback.md#029))

#### 0.2.9

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-entity-feedback-backend` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-entity-feedback-backend.md#024))

#### 0.2.4

##### Patch Changes

- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.

### `@backstage/plugin-entity-validation` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-entity-validation.md#0111))

#### 0.1.11

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-events-backend-module-aws-sqs` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#0210))

#### 0.2.10

##### Patch Changes

- [`3d043526f4`](https://github.com/backstage/backstage/commit/3d043526f4): Updated dependency `aws-sdk-client-mock` to `^3.0.0`.

### `@backstage/plugin-explore` (0.4.11 → [0.4.12](../../changelogs/@backstage/plugin-explore.md#0412))

#### 0.4.12

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.
- [`62b5922916`](https://github.com/backstage/backstage/commit/62b5922916): Internal theme type updates

### `@backstage/plugin-firehydrant` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-firehydrant.md#0210))

#### 0.2.10

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-fossa` (0.2.57 → [0.2.58](../../changelogs/@backstage/plugin-fossa.md#0258))

#### 0.2.58

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-gcalendar` (0.3.19 → [0.3.20](../../changelogs/@backstage/plugin-gcalendar.md#0320))

#### 0.3.20

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.
- [`62b5922916`](https://github.com/backstage/backstage/commit/62b5922916): Internal theme type updates

### `@backstage/plugin-gcp-projects` (0.3.42 → [0.3.43](../../changelogs/@backstage/plugin-gcp-projects.md#0343))

#### 0.3.43

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/plugin-git-release-manager` (0.3.38 → [0.3.39](../../changelogs/@backstage/plugin-git-release-manager.md#0339))

#### 0.3.39

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-github-actions` (0.6.6 → [0.6.7](../../changelogs/@backstage/plugin-github-actions.md#067))

#### 0.6.7

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency
- [`ee0c44ce62`](https://github.com/backstage/backstage/commit/ee0c44ce62): Fixed an issue that was preventing the sorting of workflow runs by their status.

### `@backstage/plugin-github-deployments` (0.1.56 → [0.1.57](../../changelogs/@backstage/plugin-github-deployments.md#0157))

#### 0.1.57

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-github-issues` (0.2.14 → [0.2.15](../../changelogs/@backstage/plugin-github-issues.md#0215))

#### 0.2.15

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-github-pull-requests-board` (0.1.19 → [0.1.20](../../changelogs/@backstage/plugin-github-pull-requests-board.md#0120))

#### 0.1.20

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-gitops-profiles` (0.3.41 → [0.3.42](../../changelogs/@backstage/plugin-gitops-profiles.md#0342))

#### 0.3.42

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/plugin-gocd` (0.1.31 → [0.1.32](../../changelogs/@backstage/plugin-gocd.md#0132))

#### 0.1.32

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-graphql-voyager` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-graphql-voyager.md#019))

#### 0.1.9

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-home` (0.5.9 → [0.5.10](../../changelogs/@backstage/plugin-home.md#0510))

#### 0.5.10

##### Patch Changes

- [`d86b2acec4`](https://github.com/backstage/backstage/commit/d86b2acec4): Fix bug where `retrieveAll` method wasn't fetching visits
- [`3fdffbb699`](https://github.com/backstage/backstage/commit/3fdffbb699): Remove the duplicate versions of `@rjsf/*` as they're no longer needed
- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`5b364984bf`](https://github.com/backstage/backstage/commit/5b364984bf): Added experimental support for declarative integration via the `/alpha` subpath.
- [`c838da0edd`](https://github.com/backstage/backstage/commit/c838da0edd): Updated dependency `@rjsf/utils` to `5.13.6`.
  Updated dependency `@rjsf/core` to `5.13.6`.
  Updated dependency `@rjsf/material-ui` to `5.13.6`.
  Updated dependency `@rjsf/validator-ajv8` to `5.13.6`.
- [`cc0e8d0b51`](https://github.com/backstage/backstage/commit/cc0e8d0b51): Temporarily pin the `react-grid-layout` sub-dependency to version `1.3.4` while the horizontal resizing of the latest version is not fixed. For more details, see [#20712](https://github.com/backstage/backstage/issues/20712).
- [`302316d231`](https://github.com/backstage/backstage/commit/302316d231): Added a new Featured Docs component to `plugin-home`, which can display any entity given a filter.

  ```
  import { FeaturedDocsCard } from '@backstage/plugin-home';

  <FeaturedDocsCard
    filter={{
      'spec.type': 'documentation',
      'metadata.name': 'getting-started-with-backstage',
    }}
    subLinkText="More Details"
    emptyState={emptyStateReactNode}
    linkDestination={'/customPath'}
    responseLimit={5}
  />
  ```

  See the [storybook examples](https://backstage.io/storybook/?path=/story/plugins-home-components-featureddocs--default)

### `@backstage/plugin-home-react` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-home-react.md#015))

#### 0.1.5

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`c838da0edd`](https://github.com/backstage/backstage/commit/c838da0edd): Updated dependency `@rjsf/utils` to `5.13.6`.
  Updated dependency `@rjsf/core` to `5.13.6`.
  Updated dependency `@rjsf/material-ui` to `5.13.6`.
  Updated dependency `@rjsf/validator-ajv8` to `5.13.6`.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/plugin-ilert` (0.2.14 → [0.2.15](../../changelogs/@backstage/plugin-ilert.md#0215))

#### 0.2.15

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-jenkins` (0.9.0 → [0.9.1](../../changelogs/@backstage/plugin-jenkins.md#091))

#### 0.9.1

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-jenkins-backend` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-jenkins-backend.md#031))

#### 0.3.1

##### Patch Changes

- [`4bfb878807`](https://github.com/backstage/backstage/commit/4bfb878807): Updated dependency `@types/jenkins` to `^1.0.0`.

### `@backstage/plugin-kafka` (0.3.25 → [0.3.26](../../changelogs/@backstage/plugin-kafka.md#0326))

#### 0.3.26

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-kafka-backend` (0.3.4 → [0.3.5](../../changelogs/@backstage/plugin-kafka-backend.md#035))

#### 0.3.5

##### Patch Changes

- [`8613ba3928`](https://github.com/backstage/backstage/commit/8613ba3928): Switched to using `"exports"` field for `/alpha` subpath export.

### `@backstage/plugin-kubernetes` (0.11.0 → [0.11.1](../../changelogs/@backstage/plugin-kubernetes.md#0111))

#### 0.11.1

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-kubernetes-backend` (0.13.0 → [0.13.1](../../changelogs/@backstage/plugin-kubernetes-backend.md#0131))

#### 0.13.1

##### Patch Changes

- [`62180df4ee`](https://github.com/backstage/backstage/commit/62180df4ee): Allow storing dashboard parameters for kubernetes in catalog
- [`df40b067e1`](https://github.com/backstage/backstage/commit/df40b067e1): Fixed the lack of `resourcequotas` as part of the Default Objects to fetch from the kubernetes api

### `@backstage/plugin-kubernetes-common` (0.7.0 → [0.7.1](../../changelogs/@backstage/plugin-kubernetes-common.md#071))

#### 0.7.1

##### Patch Changes

- [`62180df4ee`](https://github.com/backstage/backstage/commit/62180df4ee): Allow storing dashboard parameters for kubernetes in catalog
- [`df40b067e1`](https://github.com/backstage/backstage/commit/df40b067e1): Fixed the lack of `resourcequotas` as part of the Default Objects to fetch from the kubernetes api

### `@backstage/plugin-kubernetes-react` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-kubernetes-react.md#011))

#### 0.1.1

##### Patch Changes

- [`0f4cad6da0`](https://github.com/backstage/backstage/commit/0f4cad6da0): Internal refactor to avoid a null pointer problem
- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`b52f576f48`](https://github.com/backstage/backstage/commit/b52f576f48): Make sure types exported by other `kubernetes` plugins in the past are exported again after the creation
  of the react package.

  Some types have been moved to this new package but the export was missing, so they were not available anymore for developers.

### `@backstage/plugin-lighthouse` (0.4.10 → [0.4.11](../../changelogs/@backstage/plugin-lighthouse.md#0411))

#### 0.4.11

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-linguist` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-linguist.md#0111))

#### 0.1.11

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-linguist-backend` (0.5.3 → [0.5.4](../../changelogs/@backstage/plugin-linguist-backend.md#054))

#### 0.5.4

##### Patch Changes

- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.

### `@backstage/plugin-microsoft-calendar` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-microsoft-calendar.md#019))

#### 0.1.9

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`62b5922916`](https://github.com/backstage/backstage/commit/62b5922916): Internal theme type updates

### `@backstage/plugin-newrelic` (0.3.41 → [0.3.42](../../changelogs/@backstage/plugin-newrelic.md#0342))

#### 0.3.42

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/plugin-newrelic-dashboard` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-newrelic-dashboard.md#031))

#### 0.3.1

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-nomad` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-nomad.md#017))

#### 0.1.7

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-octopus-deploy` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-octopus-deploy.md#028))

#### 0.2.8

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4d2f72c572`](https://github.com/backstage/backstage/commit/4d2f72c572): Added Deep link into Octopus Deploy project from the Release Table.

### `@backstage/plugin-opencost` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-opencost.md#022))

#### 0.2.2

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/plugin-org` (0.6.15 → [0.6.16](../../changelogs/@backstage/plugin-org.md#0616))

#### 0.6.16

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`62b5922916`](https://github.com/backstage/backstage/commit/62b5922916): Internal theme type updates

### `@backstage/plugin-org-react` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-org-react.md#0115))

#### 0.1.15

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`62b5922916`](https://github.com/backstage/backstage/commit/62b5922916): Internal theme type updates

### `@backstage/plugin-pagerduty` (0.6.6 → [0.6.7](../../changelogs/@backstage/plugin-pagerduty.md#067))

#### 0.6.7

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-periskop` (0.1.23 → [0.1.24](../../changelogs/@backstage/plugin-periskop.md#0124))

#### 0.1.24

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-periskop-backend` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-periskop-backend.md#025))

#### 0.2.5

##### Patch Changes

- [`8613ba3928`](https://github.com/backstage/backstage/commit/8613ba3928): Switched to using `"exports"` field for `/alpha` subpath export.

### `@backstage/plugin-permission-common` (0.7.9 → [0.7.10](../../changelogs/@backstage/plugin-permission-common.md#0710))

#### 0.7.10

##### Patch Changes

- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/plugin-permission-react` (0.4.16 → [0.4.17](../../changelogs/@backstage/plugin-permission-react.md#0417))

#### 0.4.17

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/plugin-playlist-backend` (0.3.10 → [0.3.11](../../changelogs/@backstage/plugin-playlist-backend.md#0311))

#### 0.3.11

##### Patch Changes

- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.

### `@backstage/plugin-proxy-backend` (0.4.4 → [0.4.5](../../changelogs/@backstage/plugin-proxy-backend.md#045))

#### 0.4.5

##### Patch Changes

- [`8613ba3928`](https://github.com/backstage/backstage/commit/8613ba3928): Switched to using `"exports"` field for `/alpha` subpath export.

### `@backstage/plugin-puppetdb` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-puppetdb.md#019))

#### 0.1.9

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-rollbar` (0.4.25 → [0.4.26](../../changelogs/@backstage/plugin-rollbar.md#0426))

#### 0.4.26

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#0210))

#### 0.2.10

##### Patch Changes

- [`26ca97ebaa`](https://github.com/backstage/backstage/commit/26ca97ebaa): Add examples for `gitlab:projectAccessToken:create` scaffolder action & improve related tests

### `@backstage/plugin-scaffolder-common` (1.4.2 → [1.4.3](../../changelogs/@backstage/plugin-scaffolder-common.md#143))

#### 1.4.3

##### Patch Changes

- [`2e0cef42ab`](https://github.com/backstage/backstage/commit/2e0cef42ab): Add missing required property `type` in `Template.v1beta3.schema.json` schema
- [`76d07da66a`](https://github.com/backstage/backstage/commit/76d07da66a): Make it possible to define control buttons text (Back, Create, Review) per template

### `@backstage/plugin-scaffolder-node` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-scaffolder-node.md#028))

#### 0.2.8

##### Patch Changes

- [`8613ba3928`](https://github.com/backstage/backstage/commit/8613ba3928): Switched to using `"exports"` field for `/alpha` subpath export.

### `@backstage/plugin-search` (1.4.1 → [1.4.2](../../changelogs/@backstage/plugin-search.md#142))

#### 1.4.2

##### Patch Changes

- [`68fc9dc60e`](https://github.com/backstage/backstage/commit/68fc9dc60e): Updated alpha exports according to routing changes in `@backstage/frontend-plugin-api`.
- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`62b5922916`](https://github.com/backstage/backstage/commit/62b5922916): Internal theme type updates
- [`fa11120050`](https://github.com/backstage/backstage/commit/fa11120050): Fixed incorrect plugin ID in `/alpha` export.
- [`71c97e7d73`](https://github.com/backstage/backstage/commit/71c97e7d73): Minor internal code cleanup.

### `@backstage/plugin-search-backend` (1.4.6 → [1.4.7](../../changelogs/@backstage/plugin-search-backend.md#147))

#### 1.4.7

##### Patch Changes

- [`6694b369a3`](https://github.com/backstage/backstage/commit/6694b369a3): Update the OpenAPI spec with more complete error responses and request bodies using Optic. Also, updates the test cases to use the new `supertest` pass through from `@backstage/backend-openapi-utils`.

### `@backstage/plugin-search-backend-module-elasticsearch` (1.3.9 → [1.3.10](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#1310))

#### 1.3.10

##### Patch Changes

- [`006df4a581`](https://github.com/backstage/backstage/commit/006df4a581): Support AWS OpenSearch Serverless search backend. Does not support `_refresh` endpoint.

### `@backstage/plugin-search-backend-module-pg` (0.5.15 → [0.5.16](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0516))

#### 0.5.16

##### Patch Changes

- [`2b4cd1ccae`](https://github.com/backstage/backstage/commit/2b4cd1ccae): Optimize outdated documents deletion logic in PgSearchEngine DatabaseDocumentStore which significantly reduces cost on large tables
- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.

### `@backstage/plugin-search-backend-module-techdocs` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#0111))

#### 0.1.11

##### Patch Changes

- [`c437253b7a`](https://github.com/backstage/backstage/commit/c437253b7a): The process of adding or modifying fields in the techdocs search index has been simplified. For more details, see [How to customize fields in the Software Catalog or TechDocs index](https://backstage.io/docs/features/search/how-to-guides.md#how-to-customize-fields-in-the-software-catalog-or-techdocs-index).

### `@backstage/plugin-search-backend-node` (1.2.10 → [1.2.11](../../changelogs/@backstage/plugin-search-backend-node.md#1211))

#### 1.2.11

##### Patch Changes

- [`b168d7e7ea`](https://github.com/backstage/backstage/commit/b168d7e7ea): Fix highlighting for non-string fields on the `Lunr` search engine implementation.

### `@backstage/plugin-search-react` (1.7.1 → [1.7.2](../../changelogs/@backstage/plugin-search-react.md#172))

#### 1.7.2

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`f48cde800a`](https://github.com/backstage/backstage/commit/f48cde800a): Emit search analytics in the search hook instead of in a dedicated component
- [`f75caf9f3d`](https://github.com/backstage/backstage/commit/f75caf9f3d): Fixed a rare occurrence where a race in the search bar could throw away user input or cause the clear button not to work.
- [`77f009b35d`](https://github.com/backstage/backstage/commit/77f009b35d): Internal updates to match changes in the experimental `@backstage/frontend-plugin-api`.
- [`a539643cba`](https://github.com/backstage/backstage/commit/a539643cba): Minor refactor of search bar analytics capture
- [`71c97e7d73`](https://github.com/backstage/backstage/commit/71c97e7d73): The filter options passed to `SearchResultGroupLayout` are now always explicitly rendered as strings by default.
- [`e7c09c4f4b`](https://github.com/backstage/backstage/commit/e7c09c4f4b): Use default extensions boundary and suspense on the alpha declarative `createSearchResultListItem` extension factory.

### `@backstage/plugin-sentry` (0.5.10 → [0.5.11](../../changelogs/@backstage/plugin-sentry.md#0511))

#### 0.5.11

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-shortcuts` (0.3.15 → [0.3.16](../../changelogs/@backstage/plugin-shortcuts.md#0316))

#### 0.3.16

##### Patch Changes

- [`55725922a5`](https://github.com/backstage/backstage/commit/55725922a5): Ensure that shortcuts aren't duplicate-checked against themselves
- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-sonarqube` (0.7.7 → [0.7.8](../../changelogs/@backstage/plugin-sonarqube.md#078))

#### 0.7.8

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.
- [`62b5922916`](https://github.com/backstage/backstage/commit/62b5922916): Internal theme type updates
- [`8613ba3928`](https://github.com/backstage/backstage/commit/8613ba3928): Switched to using `"exports"` field for `/alpha` subpath export.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-sonarqube-react` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-sonarqube-react.md#0110))

#### 0.1.10

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-splunk-on-call` (0.4.14 → [0.4.15](../../changelogs/@backstage/plugin-splunk-on-call.md#0415))

#### 0.4.15

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-stack-overflow` (0.1.21 → [0.1.22](../../changelogs/@backstage/plugin-stack-overflow.md#0122))

#### 0.1.22

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`b168d7e7ea`](https://github.com/backstage/backstage/commit/b168d7e7ea): Migrate package to the new Frontend system, the new module is distributed with a `/alpha` subpath.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/plugin-stack-overflow-backend` (0.2.10 → [0.2.11](../../changelogs/@backstage/plugin-stack-overflow-backend.md#0211))

#### 0.2.11

##### Patch Changes

- [`b168d7e7ea`](https://github.com/backstage/backstage/commit/b168d7e7ea): Deprecate package in favor of the new `@backstage/plugin-search-backend-module-stack-overflow-collator` module.

  The search collator `requestParams` option is optional now, so its default value is `{ order: 'desc', sort: 'activity', site: 'stackoverflow' }` as defined in the `Try It` section on the [official Stack Overflow API documentation](https://api.stackexchange.com/docs/questions).

### `@backstage/plugin-stackstorm` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-stackstorm.md#018))

#### 0.1.8

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-tech-insights` (0.3.17 → [0.3.18](../../changelogs/@backstage/plugin-tech-insights.md#0318))

#### 0.3.18

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`62b5922916`](https://github.com/backstage/backstage/commit/62b5922916): Internal theme type updates

### `@backstage/plugin-tech-insights-backend` (0.5.20 → [0.5.21](../../changelogs/@backstage/plugin-tech-insights-backend.md#0521))

#### 0.5.21

##### Patch Changes

- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.
- [`193ad022bb`](https://github.com/backstage/backstage/commit/193ad022bb): Add `factRetrieverId` to the fact retriever's logger metadata.

### `@backstage/plugin-tech-radar` (0.6.9 → [0.6.10](../../changelogs/@backstage/plugin-tech-radar.md#0610))

#### 0.6.10

##### Patch Changes

- [`68fc9dc60e`](https://github.com/backstage/backstage/commit/68fc9dc60e): Updated alpha exports according to routing changes in `@backstage/frontend-plugin-api`.
- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/plugin-techdocs-addons-test-utils` (1.0.22 → [1.0.23](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#1023))

#### 1.0.23

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-techdocs-module-addons-contrib` (1.1.1 → [1.1.2](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#112))

#### 1.1.2

##### Patch Changes

- [`4728b3960d`](https://github.com/backstage/backstage/commit/4728b3960d): Fixed navigation bug that caused users to not be scrolled to the top of a new page. Fixed navigation bug where using backwards and forwards browser navigation did not scroll users to the correct place on the TechDoc page.
- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`62b5922916`](https://github.com/backstage/backstage/commit/62b5922916): Internal theme type updates

### `@backstage/plugin-techdocs-react` (1.1.12 → [1.1.13](../../changelogs/@backstage/plugin-techdocs-react.md#1113))

#### 1.1.13

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-todo` (0.2.29 → [0.2.30](../../changelogs/@backstage/plugin-todo.md#0230))

#### 0.2.30

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`8613ba3928`](https://github.com/backstage/backstage/commit/8613ba3928): Switched to using `"exports"` field for `/alpha` subpath export.

### `@backstage/plugin-user-settings` (0.7.11 → [0.7.12](../../changelogs/@backstage/plugin-user-settings.md#0712))

#### 0.7.12

##### Patch Changes

- [`68fc9dc60e`](https://github.com/backstage/backstage/commit/68fc9dc60e): Updated alpha exports according to routing changes in `@backstage/frontend-plugin-api`.
- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/plugin-user-settings-backend` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-user-settings-backend.md#026))

#### 0.2.6

##### Patch Changes

- [`dd0350379b`](https://github.com/backstage/backstage/commit/dd0350379b): Added dependency on `@backstage/config`
- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.
- [`8613ba3928`](https://github.com/backstage/backstage/commit/8613ba3928): Switched to using `"exports"` field for `/alpha` subpath export.

### `@backstage/plugin-vault` (0.1.20 → [0.1.21](../../changelogs/@backstage/plugin-vault.md#0121))

#### 0.1.21

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-xcmetrics` (0.2.44 → [0.2.45](../../changelogs/@backstage/plugin-xcmetrics.md#0245))

#### 0.2.45

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`62b5922916`](https://github.com/backstage/backstage/commit/62b5922916): Internal theme type updates

### `@backstage/test-utils` (1.4.4 → [1.4.5](../../changelogs/@backstage/test-utils.md#145))

#### 1.4.5

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/theme` (0.4.3 → [0.4.4](../../changelogs/@backstage/theme.md#044))

#### 0.4.4

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/version-bridge` (1.0.6 → [1.0.7](../../changelogs/@backstage/version-bridge.md#107))

#### 1.0.7

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

## Excluded dependency updates

- `@backstage/backend-defaults` (0.2.6 → [0.2.7](../../changelogs/@backstage/backend-defaults.md#027))
- `@backstage/plugin-adr-common` (0.2.16 → [0.2.17](../../changelogs/@backstage/plugin-adr-common.md#0217))
- `@backstage/plugin-airbrake-backend` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-airbrake-backend.md#034))
- `@backstage/plugin-app-node` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-app-node.md#017))
- `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#021))
- `@backstage/plugin-auth-backend-module-github-provider` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#014))
- `@backstage/plugin-auth-backend-module-google-provider` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#014))
- `@backstage/plugin-auth-backend-module-oauth2-provider` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#014))
- `@backstage/plugin-auth-node` (0.4.0 → [0.4.1](../../changelogs/@backstage/plugin-auth-node.md#041))
- `@backstage/plugin-azure-devops-backend` (0.4.3 → [0.4.4](../../changelogs/@backstage/plugin-azure-devops-backend.md#044))
- `@backstage/plugin-azure-sites-backend` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-azure-sites-backend.md#0117))
- `@backstage/plugin-catalog-backend-module-azure` (0.1.25 → [0.1.26](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0126))
- `@backstage/plugin-catalog-backend-module-bitbucket` (0.2.21 → [0.2.22](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket.md#0222))
- `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.21 → [0.1.22](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#0122))
- `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.19 → [0.1.20](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#0120))
- `@backstage/plugin-catalog-backend-module-gerrit` (0.1.22 → [0.1.23](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0123))
- `@backstage/plugin-catalog-backend-module-github-org` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#011))
- `@backstage/plugin-catalog-backend-module-ldap` (0.5.21 → [0.5.22](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0522))
- `@backstage/plugin-catalog-backend-module-openapi` (0.1.23 → [0.1.24](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0124))
- `@backstage/plugin-catalog-backend-module-puppetdb` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0112))
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#014))
- `@backstage/plugin-catalog-common` (1.0.17 → [1.0.18](../../changelogs/@backstage/plugin-catalog-common.md#1018))
- `@backstage/plugin-devtools-backend` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-devtools-backend.md#024))
- `@backstage/plugin-devtools-common` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-devtools-common.md#016))
- `@backstage/plugin-events-backend` (0.2.15 → [0.2.16](../../changelogs/@backstage/plugin-events-backend.md#0216))
- `@backstage/plugin-events-backend-module-azure` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-events-backend-module-azure.md#0117))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0117))
- `@backstage/plugin-events-backend-module-gerrit` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0117))
- `@backstage/plugin-events-backend-module-github` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-events-backend-module-github.md#0117))
- `@backstage/plugin-events-backend-module-gitlab` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#0117))
- `@backstage/plugin-events-backend-test-utils` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0117))
- `@backstage/plugin-events-node` (0.2.15 → [0.2.16](../../changelogs/@backstage/plugin-events-node.md#0216))
- `@backstage/plugin-explore-backend` (0.0.16 → [0.0.17](../../changelogs/@backstage/plugin-explore-backend.md#0017))
- `@backstage/plugin-graphql-backend` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-graphql-backend.md#021))
- `@backstage/plugin-jenkins-common` (0.1.20 → [0.1.21](../../changelogs/@backstage/plugin-jenkins-common.md#0121))
- `@backstage/plugin-kubernetes-node` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-kubernetes-node.md#011))
- `@backstage/plugin-lighthouse-backend` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-lighthouse-backend.md#034))
- `@backstage/plugin-nomad-backend` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-nomad-backend.md#019))
- `@backstage/plugin-permission-backend` (0.5.29 → [0.5.30](../../changelogs/@backstage/plugin-permission-backend.md#0530))
- `@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#014))
- `@backstage/plugin-permission-node` (0.7.17 → [0.7.18](../../changelogs/@backstage/plugin-permission-node.md#0718))
- `@backstage/plugin-playlist-common` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-playlist-common.md#0112))
- `@backstage/plugin-rollbar-backend` (0.1.51 → [0.1.52](../../changelogs/@backstage/plugin-rollbar-backend.md#0152))
- `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#028))
- `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.30 → [0.2.31](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0231))
- `@backstage/plugin-scaffolder-backend-module-rails` (0.4.23 → [0.4.24](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0424))
- `@backstage/plugin-scaffolder-backend-module-sentry` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#0115))
- `@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.27 → [0.2.28](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0228))
- `@backstage/plugin-search-backend-module-catalog` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#0111))
- `@backstage/plugin-search-backend-module-explore` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-search-backend-module-explore.md#0111))
- `@backstage/plugin-search-common` (1.2.7 → [1.2.8](../../changelogs/@backstage/plugin-search-common.md#128))
- `@backstage/plugin-sonarqube-backend` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-sonarqube-backend.md#029))
- `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.38 → [0.1.39](../../changelogs/@backstage/plugin-tech-insights-backend-module-jsonfc.md#0139))
- `@backstage/plugin-tech-insights-node` (0.4.12 → [0.4.13](../../changelogs/@backstage/plugin-tech-insights-node.md#0413))
- `@backstage/plugin-todo-backend` (0.3.4 → [0.3.5](../../changelogs/@backstage/plugin-todo-backend.md#035))
