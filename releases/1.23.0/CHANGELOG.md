# Backstage Release 1.23.0 changelog

Changes between 1.22.3 and 1.23.0 — 233 changed and 13 added packages.

## Summary

- [Newly added packages](#newly-added-packages): 13 packages
- [Breaking changes](#breaking-changes): 9 packages
- [Major version bumps](#major-version-bumps): 1 package
- [0.x minor version bumps](#0x-minor-version-bumps): 13 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 3 packages
- [Other minor version bumps](#other-minor-version-bumps): 16 packages
- [Other patch version bumps](#other-patch-version-bumps): 162 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/plugin-auth-backend-module-aws-alb-provider` (new, 0.1.0)](#backstageplugin-auth-backend-module-aws-alb-provider-new-010)
  - [`@backstage/plugin-auth-backend-module-oidc-provider` (new, 0.1.0)](#backstageplugin-auth-backend-module-oidc-provider-new-010)
  - [`@backstage/plugin-notifications` (new, 0.0.1)](#backstageplugin-notifications-new-001)
  - [`@backstage/plugin-notifications-backend` (new, 0.0.1)](#backstageplugin-notifications-backend-new-001)
  - [`@backstage/plugin-notifications-common` (new, 0.0.1)](#backstageplugin-notifications-common-new-001)
  - [`@backstage/plugin-notifications-node` (new, 0.0.1)](#backstageplugin-notifications-node-new-001)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (new, 0.1.0)](#backstageplugin-scaffolder-backend-module-bitbucket-cloud-new-010)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-server` (new, 0.1.0)](#backstageplugin-scaffolder-backend-module-bitbucket-server-new-010)
  - [`@backstage/plugin-scaffolder-backend-module-gitea` (new, 0.1.0)](#backstageplugin-scaffolder-backend-module-gitea-new-010)
  - [`@backstage/plugin-signals` (new, 0.0.1)](#backstageplugin-signals-new-001)
  - [`@backstage/plugin-signals-backend` (new, 0.0.1)](#backstageplugin-signals-backend-new-001)
  - [`@backstage/plugin-signals-node` (new, 0.0.1)](#backstageplugin-signals-node-new-001)
  - [`@backstage/plugin-signals-react` (new, 0.0.1)](#backstageplugin-signals-react-new-001)
- [Breaking changes](#breaking-changes)
  - [`@backstage/backend-common` (0.20.2 → 0.21.0)](#backstagebackend-common-0202--0210)
  - [`@backstage/core-components` (0.13.10 → 0.14.0)](#backstagecore-components-01310--0140)
  - [`@backstage/frontend-app-api` (0.5.0 → 0.6.0)](#backstagefrontend-app-api-050--060)
  - [`@backstage/frontend-plugin-api` (0.5.0 → 0.6.0)](#backstagefrontend-plugin-api-050--060)
  - [`@backstage/plugin-auth-backend` (0.20.3 → 0.21.0)](#backstageplugin-auth-backend-0203--0210)
  - [`@backstage/plugin-azure-sites-backend` (0.1.19 → 0.2.0)](#backstageplugin-azure-sites-backend-0119--020)
  - [`@backstage/plugin-kubernetes-backend` (0.14.1 → 0.15.0)](#backstageplugin-kubernetes-backend-0141--0150)
  - [`@backstage/plugin-kubernetes-react` (0.2.1 → 0.3.0)](#backstageplugin-kubernetes-react-021--030)
  - [`@backstage/repo-tools` (0.5.2 → 0.6.0)](#backstagerepo-tools-052--060)
- [Major version bumps](#major-version-bumps)
  - [`@backstage/plugin-dynatrace` (8.0.3 → 9.0.0)](#backstageplugin-dynatrace-803--900)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/backend-dynamic-feature-service` (0.1.0 → 0.2.0)](#backstagebackend-dynamic-feature-service-010--020)
  - [`@backstage/backend-test-utils` (0.2.10 → 0.3.0)](#backstagebackend-test-utils-0210--030)
  - [`@backstage/core-compat-api` (0.1.1 → 0.2.0)](#backstagecore-compat-api-011--020)
  - [`@backstage/plugin-analytics-module-ga` (0.1.37 → 0.2.0)](#backstageplugin-analytics-module-ga-0137--020)
  - [`@backstage/plugin-analytics-module-ga4` (0.1.8 → 0.2.0)](#backstageplugin-analytics-module-ga4-018--020)
  - [`@backstage/plugin-analytics-module-newrelic-browser` (0.0.6 → 0.1.0)](#backstageplugin-analytics-module-newrelic-browser-006--010)
  - [`@backstage/plugin-api-docs` (0.10.3 → 0.11.0)](#backstageplugin-api-docs-0103--0110)
  - [`@backstage/plugin-catalog-backend-module-github` (0.4.7 → 0.5.0)](#backstageplugin-catalog-backend-module-github-047--050)
  - [`@backstage/plugin-catalog-graph` (0.3.3 → 0.4.0)](#backstageplugin-catalog-graph-033--040)
  - [`@backstage/plugin-cloudbuild` (0.3.29 → 0.4.0)](#backstageplugin-cloudbuild-0329--040)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket` (0.1.1 → 0.2.0)](#backstageplugin-scaffolder-backend-module-bitbucket-011--020)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.1.1 → 0.2.0)](#backstageplugin-scaffolder-backend-module-github-011--020)
  - [`@backstage/plugin-scaffolder-node` (0.2.10 → 0.3.0)](#backstageplugin-scaffolder-node-0210--030)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-auth-backend-module-okta-provider` (0.0.2 → 0.0.3)](#backstageplugin-auth-backend-module-okta-provider-002--003)
  - [`@backstage/plugin-explore-backend` (0.0.19 → 0.0.20)](#backstageplugin-explore-backend-0019--0020)
  - [`@backstage/plugin-kubernetes-cluster` (0.0.5 → 0.0.6)](#backstageplugin-kubernetes-cluster-005--006)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/app-defaults` (1.4.7 → 1.5.0)](#backstageapp-defaults-147--150)
  - [`@backstage/catalog-client` (1.5.2 → 1.6.0)](#backstagecatalog-client-152--160)
  - [`@backstage/core-app-api` (1.11.3 → 1.12.0)](#backstagecore-app-api-1113--1120)
  - [`@backstage/core-plugin-api` (1.8.2 → 1.9.0)](#backstagecore-plugin-api-182--190)
  - [`@backstage/integration` (1.8.0 → 1.9.0)](#backstageintegration-180--190)
  - [`@backstage/plugin-catalog` (1.16.1 → 1.17.0)](#backstageplugin-catalog-1161--1170)
  - [`@backstage/plugin-catalog-backend` (1.16.2 → 1.17.0)](#backstageplugin-catalog-backend-1162--1170)
  - [`@backstage/plugin-catalog-node` (1.6.1 → 1.7.0)](#backstageplugin-catalog-node-161--170)
  - [`@backstage/plugin-catalog-react` (1.9.3 → 1.10.0)](#backstageplugin-catalog-react-193--1100)
  - [`@backstage/plugin-scaffolder` (1.17.1 → 1.18.0)](#backstageplugin-scaffolder-1171--1180)
  - [`@backstage/plugin-scaffolder-backend` (1.20.0 → 1.21.0)](#backstageplugin-scaffolder-backend-1200--1210)
  - [`@backstage/plugin-scaffolder-common` (1.4.5 → 1.5.0)](#backstageplugin-scaffolder-common-145--150)
  - [`@backstage/plugin-scaffolder-react` (1.7.1 → 1.8.0)](#backstageplugin-scaffolder-react-171--180)
  - [`@backstage/plugin-search-backend` (1.4.9 → 1.5.0)](#backstageplugin-search-backend-149--150)
  - [`@backstage/plugin-techdocs` (1.9.3 → 1.10.0)](#backstageplugin-techdocs-193--1100)
  - [`@backstage/test-utils` (1.4.7 → 1.5.0)](#backstagetest-utils-147--150)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-app-api` (0.5.10 → 0.5.11)](#backstagebackend-app-api-0510--0511)
  - [`@backstage/backend-defaults` (0.2.9 → 0.2.10)](#backstagebackend-defaults-029--0210)
  - [`@backstage/backend-dev-utils` (0.1.3 → 0.1.4)](#backstagebackend-dev-utils-013--014)
  - [`@backstage/backend-openapi-utils` (0.1.2 → 0.1.3)](#backstagebackend-openapi-utils-012--013)
  - [`@backstage/backend-plugin-api` (0.6.9 → 0.6.10)](#backstagebackend-plugin-api-069--0610)
  - [`@backstage/backend-tasks` (0.5.14 → 0.5.15)](#backstagebackend-tasks-0514--0515)
  - [`@backstage/catalog-model` (1.4.3 → 1.4.4)](#backstagecatalog-model-143--144)
  - [`@backstage/cli` (0.25.1 → 0.25.2)](#backstagecli-0251--0252)
  - [`@backstage/cli-node` (0.2.2 → 0.2.3)](#backstagecli-node-022--023)
  - [`@backstage/codemods` (0.1.46 → 0.1.47)](#backstagecodemods-0146--0147)
  - [`@backstage/config-loader` (1.6.1 → 1.6.2)](#backstageconfig-loader-161--162)
  - [`@backstage/create-app` (0.5.10 → 0.5.11)](#backstagecreate-app-0510--0511)
  - [`@backstage/dev-utils` (1.0.26 → 1.0.27)](#backstagedev-utils-1026--1027)
  - [`@backstage/e2e-test-utils` (0.1.0 → 0.1.1)](#backstagee2e-test-utils-010--011)
  - [`@backstage/eslint-plugin` (0.1.4 → 0.1.5)](#backstageeslint-plugin-014--015)
  - [`@backstage/frontend-test-utils` (0.1.1 → 0.1.2)](#backstagefrontend-test-utils-011--012)
  - [`@backstage/integration-aws-node` (0.1.8 → 0.1.9)](#backstageintegration-aws-node-018--019)
  - [`@backstage/plugin-adr` (0.6.12 → 0.6.13)](#backstageplugin-adr-0612--0613)
  - [`@backstage/plugin-adr-backend` (0.4.6 → 0.4.7)](#backstageplugin-adr-backend-046--047)
  - [`@backstage/plugin-airbrake` (0.3.29 → 0.3.30)](#backstageplugin-airbrake-0329--0330)
  - [`@backstage/plugin-allure` (0.1.45 → 0.1.46)](#backstageplugin-allure-0145--0146)
  - [`@backstage/plugin-apache-airflow` (0.2.19 → 0.2.20)](#backstageplugin-apache-airflow-0219--0220)
  - [`@backstage/plugin-api-docs-module-protoc-gen-doc` (0.1.5 → 0.1.6)](#backstageplugin-api-docs-module-protoc-gen-doc-015--016)
  - [`@backstage/plugin-apollo-explorer` (0.1.19 → 0.1.20)](#backstageplugin-apollo-explorer-0119--0120)
  - [`@backstage/plugin-app-backend` (0.3.57 → 0.3.58)](#backstageplugin-app-backend-0357--0358)
  - [`@backstage/plugin-app-node` (0.1.9 → 0.1.10)](#backstageplugin-app-node-019--0110)
  - [`@backstage/plugin-app-visualizer` (0.1.0 → 0.1.1)](#backstageplugin-app-visualizer-010--011)
  - [`@backstage/plugin-auth-backend-module-atlassian-provider` (0.1.1 → 0.1.2)](#backstageplugin-auth-backend-module-atlassian-provider-011--012)
  - [`@backstage/plugin-auth-backend-module-github-provider` (0.1.6 → 0.1.7)](#backstageplugin-auth-backend-module-github-provider-016--017)
  - [`@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.6 → 0.1.7)](#backstageplugin-auth-backend-module-gitlab-provider-016--017)
  - [`@backstage/plugin-auth-backend-module-microsoft-provider` (0.1.4 → 0.1.5)](#backstageplugin-auth-backend-module-microsoft-provider-014--015)
  - [`@backstage/plugin-auth-backend-module-oauth2-provider` (0.1.6 → 0.1.7)](#backstageplugin-auth-backend-module-oauth2-provider-016--017)
  - [`@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.1.1 → 0.1.2)](#backstageplugin-auth-backend-module-oauth2-proxy-provider-011--012)
  - [`@backstage/plugin-auth-backend-module-pinniped-provider` (0.1.3 → 0.1.4)](#backstageplugin-auth-backend-module-pinniped-provider-013--014)
  - [`@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.1.1 → 0.1.2)](#backstageplugin-auth-backend-module-vmware-cloud-provider-011--012)
  - [`@backstage/plugin-auth-node` (0.4.3 → 0.4.4)](#backstageplugin-auth-node-043--044)
  - [`@backstage/plugin-azure-devops` (0.3.11 → 0.3.12)](#backstageplugin-azure-devops-0311--0312)
  - [`@backstage/plugin-azure-devops-backend` (0.5.1 → 0.5.2)](#backstageplugin-azure-devops-backend-051--052)
  - [`@backstage/plugin-azure-sites` (0.1.18 → 0.1.19)](#backstageplugin-azure-sites-0118--0119)
  - [`@backstage/plugin-azure-sites-common` (0.1.1 → 0.1.2)](#backstageplugin-azure-sites-common-011--012)
  - [`@backstage/plugin-badges` (0.2.53 → 0.2.54)](#backstageplugin-badges-0253--0254)
  - [`@backstage/plugin-badges-backend` (0.3.6 → 0.3.7)](#backstageplugin-badges-backend-036--037)
  - [`@backstage/plugin-bazaar` (0.2.21 → 0.2.22)](#backstageplugin-bazaar-0221--0222)
  - [`@backstage/plugin-bazaar-backend` (0.3.7 → 0.3.8)](#backstageplugin-bazaar-backend-037--038)
  - [`@backstage/plugin-bitbucket-cloud-common` (0.2.15 → 0.2.16)](#backstageplugin-bitbucket-cloud-common-0215--0216)
  - [`@backstage/plugin-bitrise` (0.1.56 → 0.1.57)](#backstageplugin-bitrise-0156--0157)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.3.3 → 0.3.4)](#backstageplugin-catalog-backend-module-aws-033--034)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.1.28 → 0.1.29)](#backstageplugin-catalog-backend-module-azure-0128--0129)
  - [`@backstage/plugin-catalog-backend-module-backstage-openapi` (0.1.2 → 0.1.3)](#backstageplugin-catalog-backend-module-backstage-openapi-012--013)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (0.1.25 → 0.1.26)](#backstageplugin-catalog-backend-module-gerrit-0125--0126)
  - [`@backstage/plugin-catalog-backend-module-github-org` (0.1.3 → 0.1.4)](#backstageplugin-catalog-backend-module-github-org-013--014)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.3.6 → 0.3.7)](#backstageplugin-catalog-backend-module-gitlab-036--037)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.13 → 0.4.14)](#backstageplugin-catalog-backend-module-incremental-ingestion-0413--0414)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.5.16 → 0.5.17)](#backstageplugin-catalog-backend-module-msgraph-0516--0517)
  - [`@backstage/plugin-catalog-backend-module-openapi` (0.1.26 → 0.1.27)](#backstageplugin-catalog-backend-module-openapi-0126--0127)
  - [`@backstage/plugin-catalog-backend-module-puppetdb` (0.1.14 → 0.1.15)](#backstageplugin-catalog-backend-module-puppetdb-0114--0115)
  - [`@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.6 → 0.1.7)](#backstageplugin-catalog-backend-module-scaffolder-entity-model-016--017)
  - [`@backstage/plugin-catalog-backend-module-unprocessed` (0.3.6 → 0.3.7)](#backstageplugin-catalog-backend-module-unprocessed-036--037)
  - [`@backstage/plugin-catalog-import` (0.10.5 → 0.10.6)](#backstageplugin-catalog-import-0105--0106)
  - [`@backstage/plugin-catalog-unprocessed-entities` (0.1.7 → 0.1.8)](#backstageplugin-catalog-unprocessed-entities-017--018)
  - [`@backstage/plugin-circleci` (0.3.29 → 0.3.30)](#backstageplugin-circleci-0329--0330)
  - [`@backstage/plugin-code-climate` (0.1.29 → 0.1.30)](#backstageplugin-code-climate-0129--0130)
  - [`@backstage/plugin-code-coverage` (0.2.22 → 0.2.23)](#backstageplugin-code-coverage-0222--0223)
  - [`@backstage/plugin-code-coverage-backend` (0.2.23 → 0.2.24)](#backstageplugin-code-coverage-backend-0223--0224)
  - [`@backstage/plugin-codescene` (0.1.21 → 0.1.22)](#backstageplugin-codescene-0121--0122)
  - [`@backstage/plugin-config-schema` (0.1.49 → 0.1.50)](#backstageplugin-config-schema-0149--0150)
  - [`@backstage/plugin-cost-insights` (0.12.18 → 0.12.19)](#backstageplugin-cost-insights-01218--01219)
  - [`@backstage/plugin-devtools` (0.1.8 → 0.1.9)](#backstageplugin-devtools-018--019)
  - [`@backstage/plugin-devtools-backend` (0.2.6 → 0.2.7)](#backstageplugin-devtools-backend-026--027)
  - [`@backstage/plugin-entity-feedback` (0.2.12 → 0.2.13)](#backstageplugin-entity-feedback-0212--0213)
  - [`@backstage/plugin-entity-feedback-backend` (0.2.6 → 0.2.7)](#backstageplugin-entity-feedback-backend-026--027)
  - [`@backstage/plugin-entity-validation` (0.1.14 → 0.1.15)](#backstageplugin-entity-validation-0114--0115)
  - [`@backstage/plugin-events-backend` (0.2.18 → 0.2.19)](#backstageplugin-events-backend-0218--0219)
  - [`@backstage/plugin-events-backend-module-aws-sqs` (0.2.12 → 0.2.13)](#backstageplugin-events-backend-module-aws-sqs-0212--0213)
  - [`@backstage/plugin-events-backend-module-azure` (0.1.19 → 0.1.20)](#backstageplugin-events-backend-module-azure-0119--0120)
  - [`@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.19 → 0.1.20)](#backstageplugin-events-backend-module-bitbucket-cloud-0119--0120)
  - [`@backstage/plugin-events-backend-module-gerrit` (0.1.19 → 0.1.20)](#backstageplugin-events-backend-module-gerrit-0119--0120)
  - [`@backstage/plugin-events-backend-module-github` (0.1.19 → 0.1.20)](#backstageplugin-events-backend-module-github-0119--0120)
  - [`@backstage/plugin-events-backend-module-gitlab` (0.1.19 → 0.1.20)](#backstageplugin-events-backend-module-gitlab-0119--0120)
  - [`@backstage/plugin-explore` (0.4.15 → 0.4.16)](#backstageplugin-explore-0415--0416)
  - [`@backstage/plugin-firehydrant` (0.2.13 → 0.2.14)](#backstageplugin-firehydrant-0213--0214)
  - [`@backstage/plugin-fossa` (0.2.61 → 0.2.62)](#backstageplugin-fossa-0261--0262)
  - [`@backstage/plugin-gcalendar` (0.3.22 → 0.3.23)](#backstageplugin-gcalendar-0322--0323)
  - [`@backstage/plugin-gcp-projects` (0.3.45 → 0.3.46)](#backstageplugin-gcp-projects-0345--0346)
  - [`@backstage/plugin-git-release-manager` (0.3.41 → 0.3.42)](#backstageplugin-git-release-manager-0341--0342)
  - [`@backstage/plugin-github-actions` (0.6.10 → 0.6.11)](#backstageplugin-github-actions-0610--0611)
  - [`@backstage/plugin-github-deployments` (0.1.60 → 0.1.61)](#backstageplugin-github-deployments-0160--0161)
  - [`@backstage/plugin-github-issues` (0.2.18 → 0.2.19)](#backstageplugin-github-issues-0218--0219)
  - [`@backstage/plugin-github-pull-requests-board` (0.1.23 → 0.1.24)](#backstageplugin-github-pull-requests-board-0123--0124)
  - [`@backstage/plugin-gitops-profiles` (0.3.44 → 0.3.45)](#backstageplugin-gitops-profiles-0344--0345)
  - [`@backstage/plugin-graphiql` (0.3.2 → 0.3.3)](#backstageplugin-graphiql-032--033)
  - [`@backstage/plugin-graphql-voyager` (0.1.11 → 0.1.12)](#backstageplugin-graphql-voyager-0111--0112)
  - [`@backstage/plugin-home` (0.6.1 → 0.6.2)](#backstageplugin-home-061--062)
  - [`@backstage/plugin-home-react` (0.1.7 → 0.1.8)](#backstageplugin-home-react-017--018)
  - [`@backstage/plugin-ilert` (0.2.18 → 0.2.19)](#backstageplugin-ilert-0218--0219)
  - [`@backstage/plugin-jenkins` (0.9.4 → 0.9.5)](#backstageplugin-jenkins-094--095)
  - [`@backstage/plugin-jenkins-backend` (0.3.3 → 0.3.4)](#backstageplugin-jenkins-backend-033--034)
  - [`@backstage/plugin-kafka` (0.3.29 → 0.3.30)](#backstageplugin-kafka-0329--0330)
  - [`@backstage/plugin-kubernetes` (0.11.4 → 0.11.5)](#backstageplugin-kubernetes-0114--0115)
  - [`@backstage/plugin-kubernetes-common` (0.7.3 → 0.7.4)](#backstageplugin-kubernetes-common-073--074)
  - [`@backstage/plugin-kubernetes-node` (0.1.3 → 0.1.4)](#backstageplugin-kubernetes-node-013--014)
  - [`@backstage/plugin-lighthouse` (0.4.14 → 0.4.15)](#backstageplugin-lighthouse-0414--0415)
  - [`@backstage/plugin-lighthouse-backend` (0.4.1 → 0.4.2)](#backstageplugin-lighthouse-backend-041--042)
  - [`@backstage/plugin-linguist` (0.1.14 → 0.1.15)](#backstageplugin-linguist-0114--0115)
  - [`@backstage/plugin-linguist-backend` (0.5.6 → 0.5.7)](#backstageplugin-linguist-backend-056--057)
  - [`@backstage/plugin-microsoft-calendar` (0.1.11 → 0.1.12)](#backstageplugin-microsoft-calendar-0111--0112)
  - [`@backstage/plugin-newrelic` (0.3.44 → 0.3.45)](#backstageplugin-newrelic-0344--0345)
  - [`@backstage/plugin-newrelic-dashboard` (0.3.4 → 0.3.5)](#backstageplugin-newrelic-dashboard-034--035)
  - [`@backstage/plugin-nomad` (0.1.10 → 0.1.11)](#backstageplugin-nomad-0110--0111)
  - [`@backstage/plugin-nomad-backend` (0.1.11 → 0.1.12)](#backstageplugin-nomad-backend-0111--0112)
  - [`@backstage/plugin-octopus-deploy` (0.2.11 → 0.2.12)](#backstageplugin-octopus-deploy-0211--0212)
  - [`@backstage/plugin-opencost` (0.2.4 → 0.2.5)](#backstageplugin-opencost-024--025)
  - [`@backstage/plugin-org` (0.6.19 → 0.6.20)](#backstageplugin-org-0619--0620)
  - [`@backstage/plugin-org-react` (0.1.18 → 0.1.19)](#backstageplugin-org-react-0118--0119)
  - [`@backstage/plugin-pagerduty` (0.7.1 → 0.7.2)](#backstageplugin-pagerduty-071--072)
  - [`@backstage/plugin-periskop` (0.1.27 → 0.1.28)](#backstageplugin-periskop-0127--0128)
  - [`@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.6 → 0.1.7)](#backstageplugin-permission-backend-module-allow-all-policy-016--017)
  - [`@backstage/plugin-permission-react` (0.4.19 → 0.4.20)](#backstageplugin-permission-react-0419--0420)
  - [`@backstage/plugin-playlist` (0.2.3 → 0.2.4)](#backstageplugin-playlist-023--024)
  - [`@backstage/plugin-playlist-backend` (0.3.13 → 0.3.14)](#backstageplugin-playlist-backend-0313--0314)
  - [`@backstage/plugin-puppetdb` (0.1.12 → 0.1.13)](#backstageplugin-puppetdb-0112--0113)
  - [`@backstage/plugin-rollbar` (0.4.29 → 0.4.30)](#backstageplugin-rollbar-0429--0430)
  - [`@backstage/plugin-rollbar-backend` (0.1.54 → 0.1.55)](#backstageplugin-rollbar-backend-0154--0155)
  - [`@backstage/plugin-scaffolder-backend-module-azure` (0.1.1 → 0.1.2)](#backstageplugin-scaffolder-backend-module-azure-011--012)
  - [`@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.10 → 0.2.11)](#backstageplugin-scaffolder-backend-module-confluence-to-markdown-0210--0211)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.33 → 0.2.34)](#backstageplugin-scaffolder-backend-module-cookiecutter-0233--0234)
  - [`@backstage/plugin-scaffolder-backend-module-gerrit` (0.1.1 → 0.1.2)](#backstageplugin-scaffolder-backend-module-gerrit-011--012)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.2.12 → 0.2.13)](#backstageplugin-scaffolder-backend-module-gitlab-0212--0213)
  - [`@backstage/plugin-scaffolder-backend-module-rails` (0.4.26 → 0.4.27)](#backstageplugin-scaffolder-backend-module-rails-0426--0427)
  - [`@backstage/plugin-scaffolder-backend-module-sentry` (0.1.17 → 0.1.18)](#backstageplugin-scaffolder-backend-module-sentry-0117--0118)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.30 → 0.2.31)](#backstageplugin-scaffolder-backend-module-yeoman-0230--0231)
  - [`@backstage/plugin-search` (1.4.5 → 1.4.6)](#backstageplugin-search-145--146)
  - [`@backstage/plugin-search-backend-module-catalog` (0.1.13 → 0.1.14)](#backstageplugin-search-backend-module-catalog-0113--0114)
  - [`@backstage/plugin-search-backend-module-explore` (0.1.13 → 0.1.14)](#backstageplugin-search-backend-module-explore-0113--0114)
  - [`@backstage/plugin-search-backend-module-stack-overflow-collator` (0.1.2 → 0.1.3)](#backstageplugin-search-backend-module-stack-overflow-collator-012--013)
  - [`@backstage/plugin-search-backend-module-techdocs` (0.1.13 → 0.1.14)](#backstageplugin-search-backend-module-techdocs-0113--0114)
  - [`@backstage/plugin-search-react` (1.7.5 → 1.7.6)](#backstageplugin-search-react-175--176)
  - [`@backstage/plugin-sentry` (0.5.14 → 0.5.15)](#backstageplugin-sentry-0514--0515)
  - [`@backstage/plugin-shortcuts` (0.3.18 → 0.3.19)](#backstageplugin-shortcuts-0318--0319)
  - [`@backstage/plugin-sonarqube` (0.7.11 → 0.7.12)](#backstageplugin-sonarqube-0711--0712)
  - [`@backstage/plugin-sonarqube-backend` (0.2.11 → 0.2.12)](#backstageplugin-sonarqube-backend-0211--0212)
  - [`@backstage/plugin-splunk-on-call` (0.4.18 → 0.4.19)](#backstageplugin-splunk-on-call-0418--0419)
  - [`@backstage/plugin-stack-overflow` (0.1.24 → 0.1.25)](#backstageplugin-stack-overflow-0124--0125)
  - [`@backstage/plugin-stackstorm` (0.1.10 → 0.1.11)](#backstageplugin-stackstorm-0110--0111)
  - [`@backstage/plugin-tech-insights` (0.3.21 → 0.3.22)](#backstageplugin-tech-insights-0321--0322)
  - [`@backstage/plugin-tech-insights-backend` (0.5.23 → 0.5.24)](#backstageplugin-tech-insights-backend-0523--0524)
  - [`@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.41 → 0.1.42)](#backstageplugin-tech-insights-backend-module-jsonfc-0141--0142)
  - [`@backstage/plugin-tech-insights-node` (0.4.15 → 0.4.16)](#backstageplugin-tech-insights-node-0415--0416)
  - [`@backstage/plugin-tech-radar` (0.6.12 → 0.6.13)](#backstageplugin-tech-radar-0612--0613)
  - [`@backstage/plugin-techdocs-addons-test-utils` (1.0.26 → 1.0.27)](#backstageplugin-techdocs-addons-test-utils-1026--1027)
  - [`@backstage/plugin-techdocs-backend` (1.9.2 → 1.9.3)](#backstageplugin-techdocs-backend-192--193)
  - [`@backstage/plugin-techdocs-module-addons-contrib` (1.1.4 → 1.1.5)](#backstageplugin-techdocs-module-addons-contrib-114--115)
  - [`@backstage/plugin-techdocs-node` (1.11.1 → 1.11.2)](#backstageplugin-techdocs-node-1111--1112)
  - [`@backstage/plugin-techdocs-react` (1.1.15 → 1.1.16)](#backstageplugin-techdocs-react-1115--1116)
  - [`@backstage/plugin-todo-backend` (0.3.7 → 0.3.8)](#backstageplugin-todo-backend-037--038)
  - [`@backstage/plugin-user-settings` (0.8.0 → 0.8.1)](#backstageplugin-user-settings-080--081)
  - [`@backstage/plugin-vault` (0.1.24 → 0.1.25)](#backstageplugin-vault-0124--0125)
  - [`@backstage/plugin-vault-backend` (0.4.2 → 0.4.3)](#backstageplugin-vault-backend-042--043)
  - [`@backstage/plugin-vault-node` (0.1.2 → 0.1.3)](#backstageplugin-vault-node-012--013)
  - [`@backstage/plugin-xcmetrics` (0.2.47 → 0.2.48)](#backstageplugin-xcmetrics-0247--0248)
  - [`@backstage/theme` (0.5.0 → 0.5.1)](#backstagetheme-050--051)
  - [`@techdocs/cli` (1.8.1 → 1.8.2)](#techdocscli-181--182)

## Newly added packages

### `@backstage/plugin-auth-backend-module-aws-alb-provider` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- 23a98f8: Migrated the AWS ALB auth provider to new `@backstage/plugin-auth-backend-module-aws-alb-provider` module package.

##### Patch Changes

- d309cad: Refactored to use the `jose` library for JWT handling.

### `@backstage/plugin-auth-backend-module-oidc-provider` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- 5d2fcba: Created new `@backstage/plugin-auth-backend-module-oidc-provider` module package to house oidc auth provider migration.

##### Patch Changes

- e471890: Fixed a bug where the OIDC authenticator did not properly persist granted OAuth scopes.
- 8472188: Added or fixed the `repository` field in `package.json`.
- 8afb6f4: Updated dependency `passport` to `^0.7.0`.

### `@backstage/plugin-notifications` (new, 0.0.1)

#### 0.0.1

##### Patch Changes

- 9873c44: Add support for signal type in notifications
- 8472188: Added or fixed the `repository` field in `package.json`.
- fb8fc24: Initial notifications system for backstage

### `@backstage/plugin-notifications-backend` (new, 0.0.1)

#### 0.0.1

##### Patch Changes

- 9873c44: Add support for signal type in notifications
- 8472188: Added or fixed the `repository` field in `package.json`.
- fb8fc24: Initial notifications system for backstage

### `@backstage/plugin-notifications-common` (new, 0.0.1)

#### 0.0.1

##### Patch Changes

- 9873c44: Add support for signal type in notifications
- 8472188: Added or fixed the `repository` field in `package.json`.
- fb8fc24: Initial notifications system for backstage

### `@backstage/plugin-notifications-node` (new, 0.0.1)

#### 0.0.1

##### Patch Changes

- 8472188: Added or fixed the `repository` field in `package.json`.
- fb8fc24: Initial notifications system for backstage

### `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- 5eb6882: New scaffolder module `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud`.

  Extracted from `@backstage/plugin-scaffolder-backend-module-bitbucket`
  and replaces its actions related to Bitbucket Cloud.

  - `publish:bitbucketCloud`
  - `bitbucket:pipelines:run`

##### Patch Changes

- 8472188: Added or fixed the `repository` field in `package.json`.
- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.

### `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- 5eb6882: New scaffolder module `@backstage/plugin-scaffolder-backend-module-bitbucket-server`.

  Extracted from `@backstage/plugin-scaffolder-backend-module-bitbucket`
  and replaces its actions related to Bitbucket Server.

  - `publish:bitbucketServer`
  - `publish:bitbucketServer:pull-request`

##### Patch Changes

- 8472188: Added or fixed the `repository` field in `package.json`.
- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.

### `@backstage/plugin-scaffolder-backend-module-gitea` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- 458bf21: Created a gitea module for the scaffolder. This module provides a new action "publish:gitea" able to create a gitea repository owned by an organization. See: https://gitea.com/api/swagger#/organization/createOrgRepo

##### Patch Changes

- ef0f44e: - Fix issue for infinite loop when repository already exists
  - Log the root cause of error reported by `checkGiteaOrg`

### `@backstage/plugin-signals` (new, 0.0.1)

#### 0.0.1

##### Patch Changes

- 447d210: Fix disconnect loop on server start
- 8472188: Added or fixed the `repository` field in `package.json`.
- 047bead: Add support to subscribe and publish messages through signals plugins
- 1ab22c4: Allow defining signal type to publish and receive

### `@backstage/plugin-signals-backend` (new, 0.0.1)

#### 0.0.1

##### Patch Changes

- 447d210: Fix disconnect loop on server start
- 8472188: Added or fixed the `repository` field in `package.json`.
- 047bead: Add support to subscribe and publish messages through signals plugins

### `@backstage/plugin-signals-node` (new, 0.0.1)

#### 0.0.1

##### Patch Changes

- 447d210: Fix disconnect loop on server start
- 8472188: Added or fixed the `repository` field in `package.json`.
- 047bead: Add support to subscribe and publish messages through signals plugins
- 1ab22c4: Allow defining signal type to publish and receive

### `@backstage/plugin-signals-react` (new, 0.0.1)

#### 0.0.1

##### Patch Changes

- 447d210: Fix disconnect loop on server start
- 8472188: Added or fixed the `repository` field in `package.json`.
- 047bead: Add support to subscribe and publish messages through signals plugins
- 1ab22c4: Allow defining signal type to publish and receive

## Breaking changes

### `@backstage/backend-common` (0.20.2 → 0.21.0)

#### 0.21.0

##### Minor Changes

- bbe374e: **BREAKING**: `A gitilesBaseUrl` must be provided for the Gerrit integration to work.
  You can disable this check by setting `DISABLE_GERRIT_GITILES_REQUIREMENT=1` but
  this will be removed in a future release. If you are not able to use the Gitiles
  Gerrit plugin, please open an issue towards `https://github.com/backstage/backstage`
- e85aa98: drop databases after unit tests if the database instance is not running in docker

##### Patch Changes

- 6707216: Added a new `LegacyRootDatabaseService` interface that can be used to avoid direct dependencies on the `DatabaseManager`.
- 842171a: Fix a bug with S3 Fetch that caused all objects to be flattened within a single folder on the local file system.
- 3489d05: `FetchUrlReader#readUrl()` now supports passing an optional `token` to authenticate requests.
- 9aac2b0: Use `--cwd` as the first `yarn` argument
- ece5a8f: Add a User-Agent header for calls towards Google Cloud Storage.
- 1f020fe: Support `token` in `readTree`, `readUrl` and `search`
- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- d2e3ab9: Updated dependency `dockerode` to `^4.0.0`.
- 1cae748: Updated dependency `git-url-parse` to `^14.0.0`.
- e27b7f3: Fix rate limit detection by looking for HTTP status code 429 and updating the header `x-ratelimit-remaining` to look for in case of a 403 code is returned
- 7fb7a79: Add a config declaration for `workingDirectory`

### `@backstage/core-components` (0.13.10 → 0.14.0)

#### 0.14.0

##### Minor Changes

- 281e8c6: **BREAKING**: Removed the `SidebarIntro` component as it was providing instructions for features that do not exist, along with `IntroCard`. If you were relying on this component and want to keep using it you can refer to the original implementations of [`SidebarIntro`](https://github.com/backstage/backstage/blob/80f2413334ed9b221ec3c2b7c22fa737ad8d8885/packages/core-components/src/layout/Sidebar/Intro.tsx#L149) and [`IntroCard`](https://github.com/backstage/backstage/blob/80f2413334ed9b221ec3c2b7c22fa737ad8d8885/packages/core-components/src/layout/Sidebar/Intro.tsx#L100).

##### Patch Changes

- 3e1c6e2: Added possibility to show arrow heads for graph edges for better understandability.

  In order to show arrow heads in the catalog graph page, add `showArrowHeads` attribute to `CatalogGraphPage` component
  (typically in `packages/app/src/App.tsx`):

  ```diff
  - <CatalogGraphPage />
  + <CatalogGraphPage showArrowHeads />
  ```

  In order to show arrow heads in entity graphs, add `showArrowHeads` attribute to `EntityCatalogGraphCard` components
  (typically multiple occurrences in `packages/app/src/components/catalog/EntityPage.tsx`):

  ```diff
  - <EntityCatalogGraphCard variant="gridItem" height={400} />
  + <EntityCatalogGraphCard variant="gridItem" height={400} showArrowHeads />
  ```

- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- 7f11009: Added stack trace display to `ErrorPage` and updated existing refs
- 09cedb9: Updated dependency `@react-hookz/web` to `^24.0.0`.
- 214f2da: Fix invalid HTTP status code 501 in Error Page

### `@backstage/frontend-app-api` (0.5.0 → 0.6.0)

#### 0.6.0

##### Minor Changes

- bdf4a8e: **BREAKING**: Removed the experimental `createExtensionTree` API.
- 86346c2: **BREAKING**: The `app.routes.bindings` app-config mapping has been simplified. You now only need to specify the plugin ID and route ID on both sides of the mapping.

  Old form:

  ```yaml
  app:
    routes:
      bindings:
        plugin.catalog.externalRoutes.viewTechDoc: plugin.techdocs.routes.docRoot
        plugin.catalog.externalRoutes.createComponent: plugin.catalog-import.routes.importPage
  ```

  New form:

  ```yaml
  app:
    routes:
      bindings:
        catalog.viewTechDoc: techdocs.docRoot
        catalog.createComponent: catalog-import.importPage
  ```

##### Patch Changes

- 42ebf27: Added `IconsApi` implementation and the ability to configure icons through the `icons` option for `createApp` and `createSpecializedApp`. This is not a long-term solution as icons should be installable via extensions instead. This is just a stop-gap to make sure there is feature parity with the existing frontend system.
- bc621aa: Updates to use the new `RouteResolutionsApi`.
- e586f79: Wrap the root element with the analytics context to ensure it always exists for all extensions.
- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- 8472188: Added or fixed the `repository` field in `package.json`.
- e0a4dd1: Improved the error message when data input/output shapes do not match
- fb9b5e7: The default `ComponentsApi` implementation now uses the `ComponentRef` ID as the component key, rather than the reference instance. This fixes a bug where duplicate installations of `@backstage/frontend-plugin-api` would break the app.
- 46b63de: Allow external route refs in the new system to have a `defaultTarget` pointing to a route that it'll resolve to by default if no explicit bindings were made by the adopter.

### `@backstage/frontend-plugin-api` (0.5.0 → 0.6.0)

#### 0.6.0

##### Minor Changes

- e586f79: **BREAKING**: Replace default plugin extension and plugin ids to be `app` instead of `root`.

##### Patch Changes

- 7eae3e0: Added initial `IconsApi` definition.
- f919be9: Added a utility API for VMware Cloud auth; the API ref is available in the
  `@backstage/core-plugin-api` and `@backstage/frontend-plugin-api` packages, the
  implementation is in `@backstage/core-app-api` and a factory has been added to
  `@backstage/app-defaults`.
- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- bc621aa: Added `RouteResolutionsApi` as a replacement for the routing context.
- 1e61ad3: App component extensions are no longer wrapped in an `ExtensionBoundary`, allowing them to inherit the outer context instead.
- 46b63de: Allow external route refs in the new system to have a `defaultTarget` pointing to a route that it'll resolve to by default if no explicit bindings were made by the adopter.

### `@backstage/plugin-auth-backend` (0.20.3 → 0.21.0)

#### 0.21.0

##### Minor Changes

- 7dd8463: **BREAKING**: The `saml` provider has been migrated from `passport-saml` to `@node-saml/passport-saml`.

  This comes with breaking changes to config options:

  - `audience` is now mandatory
  - `wantAuthnResponseSigned` is now exposed and defaults to `true`
  - `wantAssertionsSigned` is now exposed and defaults to `true`

##### Patch Changes

- 97f8724: Support additional algorithms in the `/.well-known/openid-configuration` endpoint.
- a3f1fa3: Use the externalized `auth-backend-module-microsoft-provider` again.
- a9e0107: The auth backend will now refuse to issue user tokens are excessively large.
- 5d2fcba: Migrated oidc auth provider to new `@backstage/plugin-auth-backend-module-oidc-provider` module package.
- d4cc552: The helper function `makeProfileInfo` and `PassportHelpers.transformProfile`
  were refactored to use the `jose` library.
- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- 23a98f8: Migrated the AWS ALB auth provider to new `@backstage/plugin-auth-backend-module-aws-alb-provider` module package.
- f5e04e3: Internal refactor to no longer use deprecated types
- 8321c97: Added `experimentalExtraAllowedOrigins` to config
- 8e8a25d: Ability for user to configure backstage token expiration

### `@backstage/plugin-azure-sites-backend` (0.1.19 → 0.2.0)

#### 0.2.0

##### Minor Changes

- 28610f4: **BREAKING**: `catalogApi` and `permissionsApi` are now a requirement to be passed through to the `createRouter` function.

  You can fix the typescript issues by passing through the required dependencies like the below `diff` shows:

  ```diff
    import {
      createRouter,
      AzureSitesApi,
    } from '@backstage/plugin-azure-sites-backend';
    import { Router } from 'express';
    import { PluginEnvironment } from '../types';

    export default async function createPlugin(
      env: PluginEnvironment,
    ): Promise<Router> {
  +   const catalogClient = new CatalogClient({
  +     discoveryApi: env.discovery,
  +   });

      return await createRouter({
        logger: env.logger,
        azureSitesApi: AzureSitesApi.fromConfig(env.config),
  +     catalogApi: catalogClient,
  +     permissionsApi: env.permissions,
      });
    }
  ```

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 4376655: Added `permissionIntegrationRouter` for azure-sites-backend routes
- 5a409bb: Azure Sites `start` and `stop` action is now protected with the Permissions framework.

  The below example describes an action that forbids anyone but the owner of the catalog entity to trigger actions towards a site tied to an entity.

  ```typescript
     // packages/backend/src/plugins/permission.ts
    import { azureSitesActionPermission } from '@backstage/plugin-azure-sites-common';
     ...
     class TestPermissionPolicy implements PermissionPolicy {
    async handle(request: PolicyQuery, user?: BackstageIdentityResponse): Promise<PolicyDecision> {
       if (isPermission(request.permission, azureSitesActionPermission)) {
         return createCatalogConditionalDecision(
           request.permission,
           catalogConditions.isEntityOwner({
             claims: user?.identity.ownershipEntityRefs ??  [],
           }),
         );
       }
       ...
       return {
         result: AuthorizeResult.ALLOW,
       };
     }
     ...
     }
  ```

### `@backstage/plugin-kubernetes-backend` (0.14.1 → 0.15.0)

#### 0.15.0

##### Minor Changes

- 666eff5: **BREAKING** The backend will fail to start if two clusters in the app-config
  have the same name. The requirement for unique names has been declared in the
  docs for some time, but is now enforced.

##### Patch Changes

- 7233f57: Fixed an issue where a misleading error message would be logged when an
  unsupported service locator method was specified.
- afe9473: The `/clusters` API now surfaces cluster titles.
- a775596: Enabled a way to include custom auth metadata info on the clusters endpoint. If you want to implement a Kubernetes auth strategy which requires surfacing custom auth metadata to the frontend, use the new presentAuthMetadata method on the AuthenticationStrategy interface.
- 7278d80: The purpose of this patch is to add a new login method which is `googleServiceAccount` configuring the kubernetes properties in the app-config.yaml file with authProvider key
- 2a50cbf: adds a x-goog-api-client header to existing API requests in this plugin to clearly identify API requests from this GKE plugin. headers are formatted as follows where `libVersion` represents the current dotted version number of the Backstage GKE plugin and `libName` represent the current Google API used at backstage.
- 3b3d549: Responses from the `/api/kubernetes/services/:serviceId` endpoint now include the cluster title.
- a2e7fc6: Organized imports in plugin.ts
- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- daad576: Clusters configured with the `aws` authentication strategy can now customize the
  `x-k8s-aws-id` header value used to generate tokens. This value can be specified
  specified via the `kubernetes.io/x-k8s-aws-id` parameter (in
  `metadata.annotations` for clusters in the catalog, or the `authMetadata` block
  on clusters in the app-config). This is particularly helpful when a Backstage
  instance contains multiple AWS clusters with the same name in different regions
  -- using this new parameter, the clusters can be given different logical names
  to distinguish them but still use the same ID for the purposes of generating
  tokens.
- f180cba: Enabling authentication to kubernetes clusters with mTLS x509 client certs
- 7f6ff25: Custom per-cluster auth metadata (mainly for use with custom `AuthenticationStrategy` implementations) can now be specified in the `authMetadata` property of clusters in the app-config.
- 6009d2a: Clusters in the catalog can now specify a human-readable title via `metadata.title`.
- 7ee5b30: Clusters in the app-config can now specify a `title` property for human readability.
- 1c3cb3b: Backstage will log a warning whenever duplicate cluster names are detected --
  even if clusters sharing the same name come from separate locators.
- ceda378: On LocalKubectlProxyClusterLocator, when resolving localhost, IPv4 address is placed before IPv6 address, ignoring the order from the DNS resolver. This change is necessary since by default kubectl proxy listen on IPv4

### `@backstage/plugin-kubernetes-react` (0.2.1 → 0.3.0)

#### 0.3.0

##### Minor Changes

- 0dfc185: **BREAKING** The `PodScope`, `PodAndErrors`, and `PodExecTerminalProps` types no
  longer have a `clusterName` field; instead they now have the field `cluster`
  which contains the full `ClusterAttributes`.
- 0d526c8: **BREAKING** The pod exec terminal is now disabled by default since there are several scenarios where it is known not to work. It can be re-enabled at your own risk by setting the config parameter `kubernetes.podExecTerminal.enabled` to `true`.

##### Patch Changes

- 5bf0c17: Pod dialogs display cluster title when specified.
- 74770c8: The `ErrorPanel` component will display the `title` field (when specified) for
  clusters with errors.
- 536f67d: Fix broken XtermJS CSS import
- b01c86c: The `ErrorReporting` component's cluster column now displays cluster titles when
  specified.
- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- 8472188: Added or fixed the `repository` field in `package.json`.
- 2b305eb: The `Cluster` component now renders the cluster's title, if specified.
- 3c184af: Extracted common dialog component.
- db1054b: Fixed a bug where the logs dialog and any other functionality depending on the proxy endpoint would fail for clusters configured with the OIDC auth provider.

### `@backstage/repo-tools` (0.5.2 → 0.6.0)

#### 0.6.0

##### Minor Changes

- 04907c3: Updates the OpenAPI client template to support the new format for identifying plugin ID. You should now use `info.title` like so,

  ```diff
  info:
  +    title: yourPluginId
  -    title: @internal/plugin-*-backend

  servers:
    - /
  - - yourPluginId
  ```

- b10c603: Add support for `oneOf` in client generated by `schema openapi generate-client`.
- 4c62935: **BREAKING**: The `schema openapi *` commands are now renamed into `package schema openapi *` and `repo schema openapi *`. The aim is to make it more clear what the command is operating on, the entire repo or just a single package.

  The following commands now live under the `package` namespace,

  - `schema openapi generate` is now `package schema openapi generate --server`
  - `schema openapi generate-client` is now `package schema openapi generate --client-package`
  - `schema openapi init` is now `package schema openapi init`

  And these commands live under the new `repo` namespace,

  - `schema openapi lint` is now `repo schema openapi lint`
  - `schema openapi test` is now `repo schema openapi test`
  - `schema openapi verify` is now `repo schema openapi verify`

  The `package schema openapi generate` now supports defining both `--server` and `--client-package` to generate both at once.This update also reworks the `--client-package` flag to accept only an output directory as the input directory can now be inferred.

##### Patch Changes

- aa91cd6: Resolved an issue with generate-catalog-info where it was replacing upper case characters with -.
- 60a68f1: Introduced `knip` to the `knip-reports` command, which generates a `knip-report.md` file for your packages with dependency warnings, if any.
- ec16093: Add an internal limiter on concurrency when launching processes
- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- 6ba64c4: Updated dependency `commander` to `^12.0.0`.
- c04c42b: Fixes an issue where comments would be duplicated in the template. Also, removes a header with the title and version of the OpenAPI spec from generated code.

## Major version bumps

### `@backstage/plugin-dynatrace` (8.0.3 → 9.0.0)

#### 9.0.0

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- 0930c9e: Fixed Dynatrace plugin proxy configuration

## 0.x minor version bumps

### `@backstage/backend-dynamic-feature-service` (0.1.0 → 0.2.0)

#### 0.2.0

##### Minor Changes

- d7adbbf: Implement the discovery of additional individual configuration schemas for dynamic plugins, and provide:

  - an alternate implementation of the root logger service that takes them into account,
  - an extension to the App backend plugin to set a global configuration schema that takes them into account.

##### Patch Changes

- 8723c5a: Fix wrong `alpha` support in dynamic plugins support: the `alpha` sub-package should not be required for the dynamic plugins to be loaded under the new backend system.
- 8472188: Added or fixed the `repository` field in `package.json`.
- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.

### `@backstage/backend-test-utils` (0.2.10 → 0.3.0)

#### 0.3.0

##### Minor Changes

- e85aa98: drop databases after unit tests if the database instance is not running in docker

##### Patch Changes

- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.

### `@backstage/core-compat-api` (0.1.1 → 0.2.0)

#### 0.2.0

##### Minor Changes

- e586f79: Add support to the new analytics api.

##### Patch Changes

- 1fa5041: The backwards compatibility provider will now use the new `ComponentsApi` and `IconsApi` when implementing the old `AppContext`.
- edfd3a5: Updated dependency `@oriflame/backstage-plugin-score-card` to `^0.8.0`.
- bc621aa: Updates to use the new `RouteResolutionsApi`.
- 7155c30: Added `convertLegacyRouteRefs` for bulk conversion of plugin routes.
- 46b63de: Allow external route refs in the new system to have a `defaultTarget` pointing to a route that it'll resolve to by default if no explicit bindings were made by the adopter.
- 2f2a1d2: Plugins converted by `convertLegacyApp` now have their `routes` and `externalRoutes` included as well, allowing them to be used to bind external routes in configuration.
- 1184990: collectLegacyRoutes throws in case invalid <Route /> element is found

### `@backstage/plugin-analytics-module-ga` (0.1.37 → 0.2.0)

#### 0.2.0

##### Minor Changes

- e586f79: Add support to the new analytics api.

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument

### `@backstage/plugin-analytics-module-ga4` (0.1.8 → 0.2.0)

#### 0.2.0

##### Minor Changes

- e586f79: Add support to the new analytics api.

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8472188: Added or fixed the `repository` field in `package.json`.

### `@backstage/plugin-analytics-module-newrelic-browser` (0.0.6 → 0.1.0)

#### 0.1.0

##### Minor Changes

- e586f79: Add support to the new analytics api.

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8472188: Added or fixed the `repository` field in `package.json`.

### `@backstage/plugin-api-docs` (0.10.3 → 0.11.0)

#### 0.11.0

##### Minor Changes

- 172a717: Migrate the `api-docs` to the new frontend system. It is experimental and available via alpha subpath.

##### Patch Changes

- 874e8cf: Updated README to list AsyncApi v3 as supported
- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 170c023: Adding `supportedSubmitMethods` prop to `api-docs` to pass to the Swagger UI. This allows users to specify which HTTP methods they wish to allow end-users to make requests through the `Try It Out` button on the Swagger UI.
- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- c03f977: Updated dependency `graphiql` to `3.1.0`.
- 49b3b5e: Updated dependency `@asyncapi/react-component` to `1.2.13`.

### `@backstage/plugin-catalog-backend-module-github` (0.4.7 → 0.5.0)

#### 0.5.0

##### Minor Changes

- a950ed0: Prevent Entity Providers from eliminating Users and Groups from the DB when the synchronisation fails

##### Patch Changes

- 785ff24: Added `validateLocationsExist` to the config
- 9477133: Decreased number of teams fetched by GraphQL Query responsible for fetching Teams and Members in organization, due to timeouts when running against big organizations
- 1cae748: Updated dependency `git-url-parse` to `^14.0.0`.

### `@backstage/plugin-catalog-graph` (0.3.3 → 0.4.0)

#### 0.4.0

##### Minor Changes

- 3dc64e9: Migrate plugin to the new frontend system, it is experimental and available via alpha subpath.

##### Patch Changes

- 916da47: Change default icon for unknown entities to nothing instead of the help icon.
- f937aae: use `CatalogClient.getEntitiesByRefs()` to reduce the number of backend requests from plugin `catalog-graph`
- 3e1c6e2: Added possibility to show arrow heads for graph edges for better understandability.

  In order to show arrow heads in the catalog graph page, add `showArrowHeads` attribute to `CatalogGraphPage` component
  (typically in `packages/app/src/App.tsx`):

  ```diff
  - <CatalogGraphPage />
  + <CatalogGraphPage showArrowHeads />
  ```

  In order to show arrow heads in entity graphs, add `showArrowHeads` attribute to `EntityCatalogGraphCard` components
  (typically multiple occurrences in `packages/app/src/components/catalog/EntityPage.tsx`):

  ```diff
  - <EntityCatalogGraphCard variant="gridItem" height={400} />
  + <EntityCatalogGraphCard variant="gridItem" height={400} showArrowHeads />
  ```

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-cloudbuild` (0.3.29 → 0.4.0)

#### 0.4.0

##### Minor Changes

- 0328d1b: Changed build list view to automatically filter builds based on repository name matching component-info's metadata.name.
  Added optional `google.com/cloudbuild-repo-name` annotation which allows you to specify a different repository to filter on.
  Added optional `google.com/cloudbuild-trigger-name` annotation which allows you to filter based on a trigger name instead of a repo name.
  Updated the ReadMe with information about the filtering and some other minor verbiage updates.
  Changed `substitutions.BRANCH_NAME` to `substitutions.REF_NAME` so that the Ref field is populated properly.
  Added optional `google.com/cloudbuild-location` annotation which allows you to specify the Cloud Build location of your builds. Default is global scope.
  Changed build list view to show builds in a specific location if the location annotation is used.
  Updated ReadMe with information about the use of the location filtering.

##### Patch Changes

- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- ef3cad4: Add telemetry HTTP header Google Cloud Platform

### `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.1.1 → 0.2.0)

#### 0.2.0

##### Minor Changes

- 5eb6882: Split `@backstage/plugin-scaffolder-backend-module-bitbucket` into
  `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` and
  `@backstage/plugin-scaffolder-backend-module-bitbucket-server`.

  `@backstage/plugin-scaffolder-backend-module-bitbucket` was **deprecated** in favor of these two replacements.

  Please use any of the two replacements depending on your needs.

  ```diff
  - backend.add(import('@backstage/plugin-scaffolder-backend-module-bitbucket'));
  + backend.add(import('@backstage/plugin-scaffolder-backend-module-bitbucket-cloud'));
  + backend.add(import('@backstage/plugin-scaffolder-backend-module-bitbucket-server'));
  ```

##### Patch Changes

- e9a5228: Exporting a default module for the new Backend System
- 8472188: Added or fixed the `repository` field in `package.json`.
- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- fc98bb6: Enhanced the pull request action to allow for adding new content to the PR as described in this issue #21762

### `@backstage/plugin-scaffolder-backend-module-github` (0.1.1 → 0.2.0)

#### 0.2.0

##### Minor Changes

- fd5eb1c: Allow to force the creation of a pull request from a forked repository
- 3d5c668: support oidc customization

##### Patch Changes

- e9a5228: Exporting a default module for the new Backend System
- 8472188: Added or fixed the `repository` field in `package.json`.
- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.

### `@backstage/plugin-scaffolder-node` (0.2.10 → 0.3.0)

#### 0.3.0

##### Minor Changes

- 3a9ba42: Added functions to clone a repo, create a branch, add files and push and commit to the branch. This allows for files to be added to the a PR for use in the bitbucket pull request action for issue #21762
- 11b9a08: Introduced the first version of recoverable tasks.
- 78c100b: Support providing an overriding token for `fetch:template`, `fetch:plain` and `fetch:file` when interacting with upstream integrations

##### Patch Changes

- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- 9b0bf20: Add gitea as new type to be used from integrations configuration
- e0e5afe: Add option to configure nunjucks with the `trimBlocks` and `lstripBlocks` options in the fetch:template action

## 0.0.x patch version bumps

### `@backstage/plugin-auth-backend-module-okta-provider` (0.0.2 → 0.0.3)

#### 0.0.3

##### Patch Changes

- cd5114c: Added missing `additionalScopes` option to configuration schema.
- 8472188: Added or fixed the `repository` field in `package.json`.

### `@backstage/plugin-explore-backend` (0.0.19 → 0.0.20)

#### 0.0.20

##### Patch Changes

- fd3d51c: Add support for the new backend system.

  A new backend plugin for the explore backend
  was added and exported as `default`.

  You can use it with the new backend system like

  ```ts title="packages/backend/src/index.ts"
  backend.add(import('@backstage/plugin-explore-backend'));
  ```

- 9aac2b0: Use `--cwd` as the first `yarn` argument

### `@backstage/plugin-kubernetes-cluster` (0.0.5 → 0.0.6)

#### 0.0.6

##### Patch Changes

- 8fe56a8: Widen `@types/react` dependency range to include version 18.

## Other minor version bumps

### `@backstage/app-defaults` (1.4.7 → 1.5.0)

#### 1.5.0

##### Minor Changes

- f919be9: Added a utility API for VMware Cloud auth; the API ref is available in the
  `@backstage/core-plugin-api` and `@backstage/frontend-plugin-api` packages, the
  implementation is in `@backstage/core-app-api` and a factory has been added to
  `@backstage/app-defaults`.
- 7f11009: Added stack trace display to `ErrorPage` and updated existing refs

##### Patch Changes

- f899eec: Change default icon for `kind:resource` to the storage icon.
- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 7da67ce: Change `defaultScopes` for Bitbucket auth from invalid `team` to `account`.
- 214f2da: Fix invalid HTTP status code 501 in Error Page

### `@backstage/catalog-client` (1.5.2 → 1.6.0)

#### 1.6.0

##### Minor Changes

- 43dad25: Add API to get location by entity
- 04907c3: Updates the OpenAPI specification title to plugin ID instead of package name.

##### Patch Changes

- c04c42b: Internal updates to auto-generated files.

### `@backstage/core-app-api` (1.11.3 → 1.12.0)

#### 1.12.0

##### Minor Changes

- f919be9: Added a utility API for VMware Cloud auth; the API ref is available in the
  `@backstage/core-plugin-api` and `@backstage/frontend-plugin-api` packages, the
  implementation is in `@backstage/core-app-api` and a factory has been added to
  `@backstage/app-defaults`.

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- 7da67ce: Change `defaultScopes` for Bitbucket auth from invalid `team` to `account`.

### `@backstage/core-plugin-api` (1.8.2 → 1.9.0)

#### 1.9.0

##### Minor Changes

- f919be9: Added a utility API for VMware Cloud auth; the API ref is available in the
  `@backstage/core-plugin-api` and `@backstage/frontend-plugin-api` packages, the
  implementation is in `@backstage/core-app-api` and a factory has been added to
  `@backstage/app-defaults`.

##### Patch Changes

- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- e586f79: Throw a more specific exception `NotImplementedError` when an API implementation cannot be found.

### `@backstage/integration` (1.8.0 → 1.9.0)

#### 1.9.0

##### Minor Changes

- e27b7f3: Fix rate limit detection by looking for HTTP status code 429 and updating the header `x-ratelimit-remaining` to look for in case of a 403 code is returned

##### Patch Changes

- 6d898f7: All single-line secrets read from config will now have both leading and trailing whitespace trimmed. This is done to ensure that the secrets are always valid HTTP header values, since many fetch implementations will include the header value itself when an error is thrown due to invalid header values.
- 1cae748: Updated dependency `git-url-parse` to `^14.0.0`.
- 2d0e7cd: Validate if the `baseUrl` is a valid URL

### `@backstage/plugin-catalog` (1.16.1 → 1.17.0)

#### 1.17.0

##### Minor Changes

- d208a93: Updated the paginated catalog table to support server side text filtering.
- 1f8c2fa: Add entity warning components to the default entity overview page.
- e541c0e: Exported `CatalogTable.defaultColumnsFunc` for defining the columns in `<CatalogTable />` of some Kinds while using the default columns for the others.

##### Patch Changes

- 916da47: Change default icon for unknown entities to nothing instead of the help icon.
- f899eec: Change default icon for `kind:resource` to the storage icon.
- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 912ca7b: Use `convertLegacyRouteRefs` to define routes in `/alpha` export plugin.
- 797a329: Fixed inconsistencies in icons used for System and Template
- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- 987f565: Add line clamping to `CatalogSearchResultListItem`
- 172a717: Fix entity content extension filtering.

### `@backstage/plugin-catalog-backend` (1.16.2 → 1.17.0)

#### 1.17.0

##### Minor Changes

- 43dad25: Add API to get location by entity
- 126c2f9: Updates the OpenAPI spec to use plugin as `info.title` instead of package name.
- 04907c3: Updates the OpenAPI specification title to plugin ID instead of package name.
- d8a54d0: Adds support for supplying field validators to the new backend's catalog plugin. If you're using entity policies, you should use the new `transformLegacyPolicyToProcessor` function to install them as processors instead.

  ```ts
  import {
    catalogProcessingExtensionPoint,
    catalogModelExtensionPoint,
  } from '@backstage/plugin-catalog-node/alpha';
  import {myPolicy} from './my-policy';

  export const catalogModulePolicyProvider = createBackendModule({
    pluginId: 'catalog',
    moduleId: 'internal-policy-provider',
    register(reg) {
      reg.registerInit({
        deps: {
          modelExtensions: catalogModelExtensionPoint,
          processingExtensions: catalogProcessingExtensionPoint,
        },
        async init({ modelExtensions, processingExtensions }) {
          modelExtensions.setFieldValidators({
            ...
          });
          processingExtensions.addProcessors(transformLegacyPolicyToProcessor(myPolicy))
        },
      });
    },
  });
  ```

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 89b674c: Minor performance improvement for `queryEntities` when the limit is 0.
- 81e19b1: Replace uses of deprecated types with replacements internally.
- efa8160: Rollback the change for wildcard discovery, this fixes a bug with the `AzureUrlReader` not working with wildcard paths
- d208a93: Fixed a bug where `fullTextFilter` wasn't preserved correctly in the cursor.
- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- 1cae748: Updated dependency `git-url-parse` to `^14.0.0`.
- 0a395b3: Upgraded `prom-client` to version 15
- 9b2eb3f: Add support for `onProcessingError` handler at the catalog plugin (new backend system).

  You can use `setOnProcessingErrorHandler` at the `catalogProcessingExtensionPoint`
  as replacement for

  ```ts
  catalogBuilder.subscribe({
    onProcessingError: hander,
  });
  ```

### `@backstage/plugin-catalog-node` (1.6.1 → 1.7.0)

#### 1.7.0

##### Minor Changes

- d8a54d0: Adds support for supplying field validators to the new backend's catalog plugin. If you're using entity policies, you should use the new `transformLegacyPolicyToProcessor` function to install them as processors instead.

  ```ts
  import {
    catalogProcessingExtensionPoint,
    catalogModelExtensionPoint,
  } from '@backstage/plugin-catalog-node/alpha';
  import {myPolicy} from './my-policy';

  export const catalogModulePolicyProvider = createBackendModule({
    pluginId: 'catalog',
    moduleId: 'internal-policy-provider',
    register(reg) {
      reg.registerInit({
        deps: {
          modelExtensions: catalogModelExtensionPoint,
          processingExtensions: catalogProcessingExtensionPoint,
        },
        async init({ modelExtensions, processingExtensions }) {
          modelExtensions.setFieldValidators({
            ...
          });
          processingExtensions.addProcessors(transformLegacyPolicyToProcessor(myPolicy))
        },
      });
    },
  });
  ```

##### Patch Changes

- 9b2eb3f: Add support for `onProcessingError` handler at the catalog plugin (new backend system).

  You can use `setOnProcessingErrorHandler` at the `catalogProcessingExtensionPoint`
  as replacement for

  ```ts
  catalogBuilder.subscribe({
    onProcessingError: hander,
  });
  ```

### `@backstage/plugin-catalog-react` (1.9.3 → 1.10.0)

#### 1.10.0

##### Minor Changes

- d208a93: Added support for server side text filtering to paginated entity requests.
- 3dc64e9: Add support to `configSchema` option on the `createEntityCardExtension` factory function.

##### Patch Changes

- 916da47: Change default icon for unknown entities to nothing instead of the help icon.
- 71c6d7a: Overflowing labels in OwnerPicker (Catalog) are now truncated. Hovering over them shows the full label
- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- 09cedb9: Updated dependency `@react-hookz/web` to `^24.0.0`.

### `@backstage/plugin-scaffolder` (1.17.1 → 1.18.0)

#### 1.18.0

##### Minor Changes

- c56f1a2: Remove the old legacy exports from `/alpha`
- 9b9c05c: Updating the `EntityPicker` to only select `kind` `metadata.name` and `metadata.namespace` by default to improve performance on larger datasets.
- a86920b: Introduced a new `MultiEntityPicker` field that supports selecting multiple Entities
- 7f11009: Added stack trace display to `ErrorPage` and updated existing refs

##### Patch Changes

- b0d1d80: Added basic support for the new frontend system, exported from the `/alpha` subpath.
- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 912ca7b: Use `convertLegacyRouteRefs` to define routes in `/alpha` export plugin.
- da059d7: Removed alpha symbol from Task List header
- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- 31f0a0a: Added `ScaffolderPageContextMenu` to `ActionsPage`, `ListTaskPage`, and `TemplateEditorPage` so that you can more easily navigate between these pages
- 09cedb9: Updated dependency `@react-hookz/web` to `^24.0.0`.
- e6f0831: Updated dependency `@rjsf/utils` to `5.17.0`.
  Updated dependency `@rjsf/core` to `5.17.0`.
  Updated dependency `@rjsf/material-ui` to `5.17.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.17.0`.
- 6a74ffd: Updated dependency `@rjsf/utils` to `5.16.1`.
  Updated dependency `@rjsf/core` to `5.16.1`.
  Updated dependency `@rjsf/material-ui` to `5.16.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.16.1`.
- 1cae748: Updated dependency `git-url-parse` to `^14.0.0`.
- 11b9a08: Introduced the first version of recoverable tasks.
- 3dff4b0: Remove unused deps

### `@backstage/plugin-scaffolder-backend` (1.20.0 → 1.21.0)

#### 1.21.0

##### Minor Changes

- 458bf21: Created a gitea module for the scaffolder. This module provides a new action "publish:gitea" able to create a gitea repository owned by an organization. See: https://gitea.com/api/swagger#/organization/createOrgRepo
- 11b9a08: Introduced the first version of recoverable tasks.
- 78c100b: Support providing an overriding token for `fetch:template`, `fetch:plain` and `fetch:file` when interacting with upstream integrations
- e9a5228: The built-in module list has been trimmed down when using the new Backend System. Provider specific modules should now be installed with `backend.add` to provide additional actions to the scaffolder. These modules are as follows:

  - `@backstage/plugin-scaffolder-backend-module-github`
  - `@backstage/plugin-scaffolder-backend-module-gitlab`
  - `@backstage/plugin-scaffolder-backend-module-bitbucket`
  - `@backstage/plugin-scaffolder-backend-module-gitea`
  - `@backstage/plugin-scaffolder-backend-module-gerrit`
  - `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown`
  - `@backstage/plugin-scaffolder-backend-module-cookiecutter`
  - `@backstage/plugin-scaffolder-backend-module-rails`
  - `@backstage/plugin-scaffolder-backend-module-sentry`
  - `@backstage/plugin-scaffolder-backend-module-yeoman`

##### Patch Changes

- 5eb6882: New scaffolder module `@backstage/plugin-scaffolder-backend-module-bitbucket-server`.

  Extracted from `@backstage/plugin-scaffolder-backend-module-bitbucket`
  and replaces its actions related to Bitbucket Server.

  - `publish:bitbucketServer`
  - `publish:bitbucketServer:pull-request`

- 09f8b31: Simple typo fix in the fetch:template action example on the word 'skeleton'.
- c25a500: Fix some deprecations and misplaced `await` usage.
- f6792c6: Move the `NODE_OPTIONS` messaging for `--no-node-snapshot` to the `SecureTemplater` in order to get better messaging at runtime
- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- 52ae6b9: Updated dependency `esbuild` to `^0.20.0`.
- 5eb6882: New scaffolder module `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud`.

  Extracted from `@backstage/plugin-scaffolder-backend-module-bitbucket`
  and replaces its actions related to Bitbucket Cloud.

  - `publish:bitbucketCloud`
  - `bitbucket:pipelines:run`

- 0a395b3: Upgraded `prom-client` to version 15
- e1c479d: When using node 20+ the `scaffolder-backend` will now throw an error at startup if the `--no-node-snapshot` option was
  not provided to node.
- e0e5afe: Add option to configure nunjucks with the `trimBlocks` and `lstripBlocks` options in the fetch:template action

### `@backstage/plugin-scaffolder-common` (1.4.5 → 1.5.0)

#### 1.5.0

##### Minor Changes

- 11b9a08: Introduced the first version of recoverable tasks.

### `@backstage/plugin-scaffolder-react` (1.7.1 → 1.8.0)

#### 1.8.0

##### Minor Changes

- c56f1a2: Remove the old legacy exports from `/alpha`
- 11b9a08: Introduced the first version of recoverable tasks.
- b07ec70: Use more distinguishable icons for link (`Link`) and text output (`Description`).

##### Patch Changes

- 3f60ad5: fix for: converting circular structure to JSON error
- 0b0c6b6: Allow defining default output text to be shown
- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- 31f0a0a: Added `ScaffolderPageContextMenu` to `ActionsPage`, `ListTaskPage`, and `TemplateEditorPage` so that you can more easily navigate between these pages
- 09cedb9: Updated dependency `@react-hookz/web` to `^24.0.0`.
- e6f0831: Updated dependency `@rjsf/utils` to `5.17.0`.
  Updated dependency `@rjsf/core` to `5.17.0`.
  Updated dependency `@rjsf/material-ui` to `5.17.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.17.0`.
- 6a74ffd: Updated dependency `@rjsf/utils` to `5.16.1`.
  Updated dependency `@rjsf/core` to `5.16.1`.
  Updated dependency `@rjsf/material-ui` to `5.16.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.16.1`.
- 3dff4b0: Remove unused deps
- 82affc7: Fix issue where `ui:schema` was replaced with an empty object if `dependencies` is defined
- 2985186: Fix bug that erroneously caused a separator or a 0 to render in the TemplateCard for Templates with empty links

### `@backstage/plugin-search-backend` (1.4.9 → 1.5.0)

#### 1.5.0

##### Minor Changes

- 126c2f9: Updates the OpenAPI spec to use plugin as `info.title` instead of package name.
- 04907c3: Updates the OpenAPI specification title to plugin ID instead of package name.

##### Patch Changes

- 3ed0eac: Authorized search engine now obeys query page limit

### `@backstage/plugin-techdocs` (1.9.3 → 1.10.0)

#### 1.10.0

##### Minor Changes

- af4d147: Updated the styling for `<code>` tags to avoid word break.

##### Patch Changes

- 912ca7b: Use `convertLegacyRouteRefs` to define routes in `/alpha` export plugin.
- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- 3631fb4: Updated dependency `dompurify` to `^3.0.0`.
  Updated dependency `@types/dompurify` to `^3.0.0`.
- 1cae748: Updated dependency `git-url-parse` to `^14.0.0`.

### `@backstage/test-utils` (1.4.7 → 1.5.0)

#### 1.5.0

##### Minor Changes

- bb40898: Added `components` option to `TestAppOptions`, which will be forwarded as the `components` option to `createApp`.

##### Patch Changes

- 07e7d12: Fix wording in API reference
- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- 7da67ce: Change `defaultScopes` for Bitbucket auth from invalid `team` to `account`.

## Other patch version bumps

### `@backstage/backend-app-api` (0.5.10 → 0.5.11)

#### 0.5.11

##### Patch Changes

- e0c18ef: Include the extension point ID and the module ID in the backend init error message.
- 7ae5704: Updated the default error handling middleware to filter out certain known error types that should never be returned in responses. The errors are instead logged along with a correlation ID, which is also returned in the response. Initially only PostgreSQL protocol errors from the `pg-protocol` package are filtered out.
- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 54ad8e1: Allow the `createConfigSecretEnumerator` to take an optional `schema` argument with an already-loaded global configuration schema.
- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.

### `@backstage/backend-defaults` (0.2.9 → 0.2.10)

#### 0.2.10

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument

### `@backstage/backend-dev-utils` (0.1.3 → 0.1.4)

#### 0.1.4

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument

### `@backstage/backend-openapi-utils` (0.1.2 → 0.1.3)

#### 0.1.3

##### Patch Changes

- 2067689: Internal updates due to `json-schema-to-ts`

### `@backstage/backend-plugin-api` (0.6.9 → 0.6.10)

#### 0.6.10

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 1f020fe: Support `token` in `readTree`, `readUrl` and `search`

### `@backstage/backend-tasks` (0.5.14 → 0.5.15)

#### 0.5.15

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 6707216: The `TaskScheduler.fromConfig` method now accepts the `LegacyRootDatabaseService` interface rather than the full `DatabaseManager` implementation.
- b68248b: Updated dependency `cron` to `^3.0.0`.

### `@backstage/catalog-model` (1.4.3 → 1.4.4)

#### 1.4.4

##### Patch Changes

- 07e7d12: Fix wording in API reference

### `@backstage/cli` (0.25.1 → 0.25.2)

#### 0.25.2

##### Patch Changes

- d557d47: Added check for the `repository` field in the `repo fix` command.
- b58673e: Upgrade jest
- c624938: Add experimental support for an optional `public` app entry point that lets users sign-in before being able to access the full app.
- c52e7d5: Make `http://localhost:3000` the default base URL for serving locally, and `/` the default public path for built apps. The app build no longer requires any configuration values to be present.
- 9a96ef2: Updated dependency `vite-plugin-node-polyfills` to `^0.21.0`.
- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- 2f1f8fd: Updated dependency `esbuild-loader` to `^4.0.0`.
- fd20d5b: Updated dependency `eslint-config-prettier` to `^9.0.0`.
- acd2860: Updated dependency `vite-plugin-node-polyfills` to `^0.19.0`.
- 40c27f3: Updated dependency `eslint-webpack-plugin` to `^4.0.0`.
- 6ba64c4: Updated dependency `commander` to `^12.0.0`.
- ba56063: Updated dependency `fork-ts-checker-webpack-plugin` to `^9.0.0`.
- 1cae748: Updated dependency `git-url-parse` to `^14.0.0`.
- 52ae6b9: Updated dependency `esbuild` to `^0.20.0`.
- 404e82b: Updated dependency `eslint-plugin-deprecation` to `^2.0.0`.
- 5c05f8a: Harmonize the package naming and allow custom prefix
- 35725e2: Updated dependencies in frontend plugin templates
- c7259dc: Updated the backend module template to make the module instance the package default export.
- 08804c3: Fixed an issue that would cause an invalid `__backstage-autodetected-plugins__.js` to be written when using experimental module discovery.

### `@backstage/cli-node` (0.2.2 → 0.2.3)

#### 0.2.3

##### Patch Changes

- d557d47: Added `repository` field to `BackstagePackageJson` type.
- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.

### `@backstage/codemods` (0.1.46 → 0.1.47)

#### 0.1.47

##### Patch Changes

- 6ba64c4: Updated dependency `commander` to `^12.0.0`.

### `@backstage/config-loader` (1.6.1 → 1.6.2)

#### 1.6.2

##### Patch Changes

- 0a9a03c: Make schema processing gracefully handle an empty config.
- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- bf3da16: Updated dependency `typescript-json-schema` to `^0.63.0`.

### `@backstage/create-app` (0.5.10 → 0.5.11)

#### 0.5.11

##### Patch Changes

- c70c3dc: Bumped create-app version.
- c420081: Add a seed file for `yarn.lock` in newly created apps. This file is downloaded directly from `https://github.com/backstage/backstage` at the time of creating a new project, ensuring that users always receive the latest version. The purpose of the seed file is to initialize the lock file with known good versions of individual dependencies that have had bad new releases published. The seed file will have no effect if the dependency is not present, it can not be used to install additional packages.
- f71352c: Bumped TypeScript to version `5.3`.
- 03e55b1: Updated the default app index template at `packages/app/public/index.html` to have a fallback value for the `app.title` config.
- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- 6ba64c4: Updated dependency `commander` to `^12.0.0`.
- aeec29c: Updated `packages/app` as well as the root `package.json` type resolutions to use React v18.

  The `@testing-library/*` dependencies have also been updated to the ones compatible with React v18, and the test at `packages/app/src/App.test.tsx` had been updated to use more modern patterns that work better with these new versions.

  For information on how to migrate existing apps to React v18, see the [migration guide](https://backstage.io/docs/tutorials/react18-migration)

### `@backstage/dev-utils` (1.0.26 → 1.0.27)

#### 1.0.27

##### Patch Changes

- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/e2e-test-utils` (0.1.0 → 0.1.1)

#### 0.1.1

##### Patch Changes

- 8472188: Added or fixed the `repository` field in `package.json`.
- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.

### `@backstage/eslint-plugin` (0.1.4 → 0.1.5)

#### 0.1.5

##### Patch Changes

- 995d280: Added new `@backstage/no-top-level-material-ui-4-imports` rule that forbids top level imports from Material UI v4 packages

### `@backstage/frontend-test-utils` (0.1.1 → 0.1.2)

#### 0.1.2

##### Patch Changes

- bc621aa: Updates to use the new `RouteResolutionsApi`.
- 8472188: Added or fixed the `repository` field in `package.json`.

### `@backstage/integration-aws-node` (0.1.8 → 0.1.9)

#### 0.1.9

##### Patch Changes

- 6d898f7: All single-line secrets read from config will now have both leading and trailing whitespace trimmed. This is done to ensure that the secrets are always valid HTTP header values, since many fetch implementations will include the header value itself when an error is thrown due to invalid header values.

### `@backstage/plugin-adr` (0.6.12 → 0.6.13)

#### 0.6.13

##### Patch Changes

- 0b03962: Updated README
- 987f565: Fix alignment of text in `AdrSearchResultListItem`. Update size and font to match other `SearchResultListItem`.
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-adr-backend` (0.4.6 → 0.4.7)

#### 0.4.7

##### Patch Changes

- b64ce5a: Updated New Backend System instructions to use default import
- 9aac2b0: Use `--cwd` as the first `yarn` argument

### `@backstage/plugin-airbrake` (0.3.29 → 0.3.30)

#### 0.3.30

##### Patch Changes

- b64ce5a: Updated New Backend System instructions to use default import
- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-allure` (0.1.45 → 0.1.46)

#### 0.1.46

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-apache-airflow` (0.2.19 → 0.2.20)

#### 0.2.20

##### Patch Changes

- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-api-docs-module-protoc-gen-doc` (0.1.5 → 0.1.6)

#### 0.1.6

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-apollo-explorer` (0.1.19 → 0.1.20)

#### 0.1.20

##### Patch Changes

- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-app-backend` (0.3.57 → 0.3.58)

#### 0.3.58

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 998ccf6: Support injecting config multiple times in a single bundle
- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- 54ad8e1: Allow the `app-backend` plugin to use a global configuration schema provided externally through an extension.
- 9dfd57d: Do not force caching of the Javascript asset that contains the injected config.

### `@backstage/plugin-app-node` (0.1.9 → 0.1.10)

#### 0.1.10

##### Patch Changes

- 8472188: Added or fixed the `repository` field in `package.json`.
- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- 54ad8e1: Allow the `app-backend` plugin to use a global configuration schema provided externally through an extension.

### `@backstage/plugin-app-visualizer` (0.1.0 → 0.1.1)

#### 0.1.1

##### Patch Changes

- 8472188: Added or fixed the `repository` field in `package.json`.

### `@backstage/plugin-auth-backend-module-atlassian-provider` (0.1.1 → 0.1.2)

#### 0.1.2

##### Patch Changes

- 8472188: Added or fixed the `repository` field in `package.json`.

### `@backstage/plugin-auth-backend-module-github-provider` (0.1.6 → 0.1.7)

#### 0.1.7

##### Patch Changes

- 8472188: Added or fixed the `repository` field in `package.json`.

### `@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.6 → 0.1.7)

#### 0.1.7

##### Patch Changes

- 8472188: Added or fixed the `repository` field in `package.json`.

### `@backstage/plugin-auth-backend-module-microsoft-provider` (0.1.4 → 0.1.5)

#### 0.1.5

##### Patch Changes

- 8472188: Added or fixed the `repository` field in `package.json`.
- 1ff2684: Added the possibility to use custom scopes for performing login with Microsoft EntraID.

### `@backstage/plugin-auth-backend-module-oauth2-provider` (0.1.6 → 0.1.7)

#### 0.1.7

##### Patch Changes

- 8472188: Added or fixed the `repository` field in `package.json`.

### `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.1.1 → 0.1.2)

#### 0.1.2

##### Patch Changes

- 8472188: Added or fixed the `repository` field in `package.json`.

### `@backstage/plugin-auth-backend-module-pinniped-provider` (0.1.3 → 0.1.4)

#### 0.1.4

##### Patch Changes

- 8472188: Added or fixed the `repository` field in `package.json`.

### `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.1.1 → 0.1.2)

#### 0.1.2

##### Patch Changes

- 8472188: Added or fixed the `repository` field in `package.json`.

### `@backstage/plugin-auth-node` (0.4.3 → 0.4.4)

#### 0.4.4

##### Patch Changes

- 71c3b7f: Fix error when Microsoft tokens (or any other using the `defaultProfileTransform`) are requested without the profile scope.
- d4cc552: The helper function `makeProfileInfo` and `PassportHelpers.transformProfile`
  were refactored to use the `jose` library.

### `@backstage/plugin-azure-devops` (0.3.11 → 0.3.12)

#### 0.3.12

##### Patch Changes

- e2083df: Added alpha support for the New Frontend System (Declarative Integration)
- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- 995d280: Updated imports from named to default imports to help with the Material UI v4 to v5 migration
- cb0afaa: Prefer `dev.azure.com/build-definition` annotation when it is provided, as it is more specific than `dev.azure.com/project-repo`. This can also be used as a filter for mono-repos.

### `@backstage/plugin-azure-devops-backend` (0.5.1 → 0.5.2)

#### 0.5.2

##### Patch Changes

- 353244d: Added a note about Service Principles
- b64ce5a: Updated New Backend System instructions to use default import
- 25bda45: Fixed bug with `extractPartsFromAsset` that resulted in a leading `.` being removed from the path in an otherwise valid path (ex. `.assets/image.png`). The leading `.` will now only be moved for paths beginning with `./`.
- 9aac2b0: Use `--cwd` as the first `yarn` argument

### `@backstage/plugin-azure-sites` (0.1.18 → 0.1.19)

#### 0.1.19

##### Patch Changes

- 09a9c95: Updated README
- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- 5a409bb: Azure Sites `start` and `stop` action is now protected with the Permissions framework.

  The below example describes an action that forbids anyone but the owner of the catalog entity to trigger actions towards a site tied to an entity.

  ```typescript
     // packages/backend/src/plugins/permission.ts
    import { azureSitesActionPermission } from '@backstage/plugin-azure-sites-common';
     ...
     class TestPermissionPolicy implements PermissionPolicy {
    async handle(request: PolicyQuery, user?: BackstageIdentityResponse): Promise<PolicyDecision> {
       if (isPermission(request.permission, azureSitesActionPermission)) {
         return createCatalogConditionalDecision(
           request.permission,
           catalogConditions.isEntityOwner({
             claims: user?.identity.ownershipEntityRefs ??  [],
           }),
         );
       }
       ...
       return {
         result: AuthorizeResult.ALLOW,
       };
     }
     ...
     }
  ```

### `@backstage/plugin-azure-sites-common` (0.1.1 → 0.1.2)

#### 0.1.2

##### Patch Changes

- 5a409bb: Azure Sites `start` and `stop` action is now protected with the Permissions framework.

  The below example describes an action that forbids anyone but the owner of the catalog entity to trigger actions towards a site tied to an entity.

  ```typescript
     // packages/backend/src/plugins/permission.ts
    import { azureSitesActionPermission } from '@backstage/plugin-azure-sites-common';
     ...
     class TestPermissionPolicy implements PermissionPolicy {
    async handle(request: PolicyQuery, user?: BackstageIdentityResponse): Promise<PolicyDecision> {
       if (isPermission(request.permission, azureSitesActionPermission)) {
         return createCatalogConditionalDecision(
           request.permission,
           catalogConditions.isEntityOwner({
             claims: user?.identity.ownershipEntityRefs ??  [],
           }),
         );
       }
       ...
       return {
         result: AuthorizeResult.ALLOW,
       };
     }
     ...
     }
  ```

### `@backstage/plugin-badges` (0.2.53 → 0.2.54)

#### 0.2.54

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-badges-backend` (0.3.6 → 0.3.7)

#### 0.3.7

##### Patch Changes

- 6991e5f: Updating the `authorization` middleware to call the Catalog to check that the requesting user has permission to see the Entity before generating the UUID.
- b64ce5a: Updated New Backend System instructions to use default import
- 9aac2b0: Use `--cwd` as the first `yarn` argument

### `@backstage/plugin-bazaar` (0.2.21 → 0.2.22)

#### 0.2.22

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-bazaar-backend` (0.3.7 → 0.3.8)

#### 0.3.8

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument

### `@backstage/plugin-bitbucket-cloud-common` (0.2.15 → 0.2.16)

#### 0.2.16

##### Patch Changes

- 2e6af00: Updated dependency `ts-morph` to `^21.0.0`.

### `@backstage/plugin-bitrise` (0.1.56 → 0.1.57)

#### 0.1.57

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- e24e4d3: Update README

### `@backstage/plugin-catalog-backend-module-aws` (0.3.3 → 0.3.4)

#### 0.3.4

##### Patch Changes

- a81b1ba: The default EKS cluster entity transformer now sets the new
  `kubernetes.io/x-k8s-aws-id` annotation.
- 22927c4: Move the AWS account e-mail from labels to annotations to fix the creation of `cloud-account` resources.

### `@backstage/plugin-catalog-backend-module-azure` (0.1.28 → 0.1.29)

#### 0.1.29

##### Patch Changes

- 534786a: Fixed issue where specifying a branch for discovery did not work

### `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.1.2 → 0.1.3)

#### 0.1.3

##### Patch Changes

- 8472188: Added or fixed the `repository` field in `package.json`.

### `@backstage/plugin-catalog-backend-module-gerrit` (0.1.25 → 0.1.26)

#### 0.1.26

##### Patch Changes

- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.

### `@backstage/plugin-catalog-backend-module-github-org` (0.1.3 → 0.1.4)

#### 0.1.4

##### Patch Changes

- 8472188: Added or fixed the `repository` field in `package.json`.

### `@backstage/plugin-catalog-backend-module-gitlab` (0.3.6 → 0.3.7)

#### 0.3.7

##### Patch Changes

- 60e4c2a: Added the option to provide custom `groupTransformer`, `userTransformer` and `groupNameTransformer` to allow custom transformations of groups and users

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.13 → 0.4.14)

#### 0.4.14

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument

### `@backstage/plugin-catalog-backend-module-msgraph` (0.5.16 → 0.5.17)

#### 0.5.17

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument

### `@backstage/plugin-catalog-backend-module-openapi` (0.1.26 → 0.1.27)

#### 0.1.27

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument

### `@backstage/plugin-catalog-backend-module-puppetdb` (0.1.14 → 0.1.15)

#### 0.1.15

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- bc644fb: Added `latest_report_status` parameter from the PuppetDB node api and added it as a tag to the nodes. The status is valuable information as it displays which nodes are compliant to your configuration and which ones are failing are making changes.

### `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.6 → 0.1.7)

#### 0.1.7

##### Patch Changes

- 8472188: Added or fixed the `repository` field in `package.json`.

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.3.6 → 0.3.7)

#### 0.3.7

##### Patch Changes

- d3dd64a: Explicitly only depend on the `use` method from the `HttpRouterService`.
- 9aac2b0: Use `--cwd` as the first `yarn` argument

### `@backstage/plugin-catalog-import` (0.10.5 → 0.10.6)

#### 0.10.6

##### Patch Changes

- 916da47: Change default icon for unknown entities to nothing instead of the help icon.
- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- 1cae748: Updated dependency `git-url-parse` to `^14.0.0`.

### `@backstage/plugin-catalog-unprocessed-entities` (0.1.7 → 0.1.8)

#### 0.1.8

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-circleci` (0.3.29 → 0.3.30)

#### 0.3.30

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-code-climate` (0.1.29 → 0.1.30)

#### 0.1.30

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-code-coverage` (0.2.22 → 0.2.23)

#### 0.2.23

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-code-coverage-backend` (0.2.23 → 0.2.24)

#### 0.2.24

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument

### `@backstage/plugin-codescene` (0.1.21 → 0.1.22)

#### 0.1.22

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-config-schema` (0.1.49 → 0.1.50)

#### 0.1.50

##### Patch Changes

- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-cost-insights` (0.12.18 → 0.12.19)

#### 0.12.19

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-devtools` (0.1.8 → 0.1.9)

#### 0.1.9

##### Patch Changes

- c12a86c: Refactored code to improve accessibility by moving elements outside the `ul` tag and placing them appropriately. Also adjusted theme to offer better contrast.
- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- b89d8be: Added alpha support for the New Frontend System (Declarative Integration)
- 995d280: Updated imports from named to default imports to help with the Material UI v4 to v5 migration

### `@backstage/plugin-devtools-backend` (0.2.6 → 0.2.7)

#### 0.2.7

##### Patch Changes

- b64ce5a: Updated New Backend System instructions to use default import
- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.

### `@backstage/plugin-entity-feedback` (0.2.12 → 0.2.13)

#### 0.2.13

##### Patch Changes

- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-entity-feedback-backend` (0.2.6 → 0.2.7)

#### 0.2.7

##### Patch Changes

- b64ce5a: Updated New Backend System instructions to use default import
- 9aac2b0: Use `--cwd` as the first `yarn` argument

### `@backstage/plugin-entity-validation` (0.1.14 → 0.1.15)

#### 0.1.15

##### Patch Changes

- 916da47: Change default icon for unknown entities to nothing instead of the help icon.
- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 1f70e46: Improves UX of the EntityValidationPage: Moves the validate button below the EntityTextArea which is actually validated, the location TextField can now be hidden to prevent confusion about what is validated and additional content can be added to the top of the validation page.
- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- 09cedb9: Updated dependency `@react-hookz/web` to `^24.0.0`.

### `@backstage/plugin-events-backend` (0.2.18 → 0.2.19)

#### 0.2.19

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument

### `@backstage/plugin-events-backend-module-aws-sqs` (0.2.12 → 0.2.13)

#### 0.2.13

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument

### `@backstage/plugin-events-backend-module-azure` (0.1.19 → 0.1.20)

#### 0.1.20

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument

### `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.19 → 0.1.20)

#### 0.1.20

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument

### `@backstage/plugin-events-backend-module-gerrit` (0.1.19 → 0.1.20)

#### 0.1.20

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument

### `@backstage/plugin-events-backend-module-github` (0.1.19 → 0.1.20)

#### 0.1.20

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument

### `@backstage/plugin-events-backend-module-gitlab` (0.1.19 → 0.1.20)

#### 0.1.20

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument

### `@backstage/plugin-explore` (0.4.15 → 0.4.16)

#### 0.4.16

##### Patch Changes

- 07e7d12: Fix wording in API reference
- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- 796d427: Use the EntityDisplayName component for rendering Group nodes

### `@backstage/plugin-firehydrant` (0.2.13 → 0.2.14)

#### 0.2.14

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-fossa` (0.2.61 → 0.2.62)

#### 0.2.62

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-gcalendar` (0.3.22 → 0.3.23)

#### 0.3.23

##### Patch Changes

- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- 3631fb4: Updated dependency `dompurify` to `^3.0.0`.
  Updated dependency `@types/dompurify` to `^3.0.0`.

### `@backstage/plugin-gcp-projects` (0.3.45 → 0.3.46)

#### 0.3.46

##### Patch Changes

- 984d508: Add a `x-google-api-client` header for calls towards Google Cloud Projects
- 09cedb9: Updated dependency `@react-hookz/web` to `^24.0.0`.

### `@backstage/plugin-git-release-manager` (0.3.41 → 0.3.42)

#### 0.3.42

##### Patch Changes

- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-github-actions` (0.6.10 → 0.6.11)

#### 0.6.11

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- 1cae748: Updated dependency `git-url-parse` to `^14.0.0`.

### `@backstage/plugin-github-deployments` (0.1.60 → 0.1.61)

#### 0.1.61

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-github-issues` (0.2.18 → 0.2.19)

#### 0.2.19

##### Patch Changes

- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-github-pull-requests-board` (0.1.23 → 0.1.24)

#### 0.1.24

##### Patch Changes

- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-gitops-profiles` (0.3.44 → 0.3.45)

#### 0.3.45

##### Patch Changes

- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-graphiql` (0.3.2 → 0.3.3)

#### 0.3.3

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 912ca7b: Use `convertLegacyRouteRefs` to define routes in `/alpha` export plugin.
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-graphql-voyager` (0.1.11 → 0.1.12)

#### 0.1.12

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-home` (0.6.1 → 0.6.2)

#### 0.6.2

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- dc7ae8b: Use EntityDisplayName JSX element entity information directly for FeaturedDocsCard.
- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- e6f0831: Updated dependency `@rjsf/utils` to `5.17.0`.
  Updated dependency `@rjsf/core` to `5.17.0`.
  Updated dependency `@rjsf/material-ui` to `5.17.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.17.0`.
- 6a74ffd: Updated dependency `@rjsf/utils` to `5.16.1`.
  Updated dependency `@rjsf/core` to `5.16.1`.
  Updated dependency `@rjsf/material-ui` to `5.16.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.16.1`.
- e9cdfd3: Fix typo in VisitsStorageApi
- 384c132: Added filter support for HomePageVisitedByType in order to enable filtering entities from the list

### `@backstage/plugin-home-react` (0.1.7 → 0.1.8)

#### 0.1.8

##### Patch Changes

- e6f0831: Updated dependency `@rjsf/utils` to `5.17.0`.
  Updated dependency `@rjsf/core` to `5.17.0`.
  Updated dependency `@rjsf/material-ui` to `5.17.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.17.0`.
- 6a74ffd: Updated dependency `@rjsf/utils` to `5.16.1`.
  Updated dependency `@rjsf/core` to `5.16.1`.
  Updated dependency `@rjsf/material-ui` to `5.16.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.16.1`.

### `@backstage/plugin-ilert` (0.2.18 → 0.2.19)

#### 0.2.19

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-jenkins` (0.9.4 → 0.9.5)

#### 0.9.5

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-jenkins-backend` (0.3.3 → 0.3.4)

#### 0.3.4

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument

### `@backstage/plugin-kafka` (0.3.29 → 0.3.30)

#### 0.3.30

##### Patch Changes

- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-kubernetes` (0.11.4 → 0.11.5)

#### 0.11.5

##### Patch Changes

- b01c86c: The `ErrorReporting` component's cluster column now displays cluster titles when
  specified.
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-kubernetes-common` (0.7.3 → 0.7.4)

#### 0.7.4

##### Patch Changes

- a643af8: The `ClusterAttributes` type now includes the cluster title.
- daad576: Clusters configured with the `aws` authentication strategy can now customize the
  `x-k8s-aws-id` header value used to generate tokens. This value can be specified
  specified via the `kubernetes.io/x-k8s-aws-id` parameter (in
  `metadata.annotations` for clusters in the catalog, or the `authMetadata` block
  on clusters in the app-config). This is particularly helpful when a Backstage
  instance contains multiple AWS clusters with the same name in different regions
  -- using this new parameter, the clusters can be given different logical names
  to distinguish them but still use the same ID for the purposes of generating
  tokens.

### `@backstage/plugin-kubernetes-node` (0.1.3 → 0.1.4)

#### 0.1.4

##### Patch Changes

- a775596: Enabled a way to include custom auth metadata info on the clusters endpoint. If you want to implement a Kubernetes auth strategy which requires surfacing custom auth metadata to the frontend, use the new presentAuthMetadata method on the AuthenticationStrategy interface.
- 8472188: Added or fixed the `repository` field in `package.json`.
- 043cf88: The `ClusterDetails` type now has a `title` field, which should be a
  human-readable name.
- cceed8a: Introduced `PinnipedHelper` class to enable authentication to Kubernetes clusters through Pinniped
- f180cba: Enabling authentication to kubernetes clusters with mTLS x509 client certs

### `@backstage/plugin-lighthouse` (0.4.14 → 0.4.15)

#### 0.4.15

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-lighthouse-backend` (0.4.1 → 0.4.2)

#### 0.4.2

##### Patch Changes

- b64ce5a: Updated New Backend System instructions to use default import
- 9aac2b0: Use `--cwd` as the first `yarn` argument

### `@backstage/plugin-linguist` (0.1.14 → 0.1.15)

#### 0.1.15

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- 995d280: Updated imports from named to default imports to help with the Material UI v4 to v5 migration

### `@backstage/plugin-linguist-backend` (0.5.6 → 0.5.7)

#### 0.5.7

##### Patch Changes

- b64ce5a: Updated New Backend System instructions to use default import
- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.

### `@backstage/plugin-microsoft-calendar` (0.1.11 → 0.1.12)

#### 0.1.12

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- 3631fb4: Updated dependency `dompurify` to `^3.0.0`.
  Updated dependency `@types/dompurify` to `^3.0.0`.

### `@backstage/plugin-newrelic` (0.3.44 → 0.3.45)

#### 0.3.45

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-newrelic-dashboard` (0.3.4 → 0.3.5)

#### 0.3.5

##### Patch Changes

- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-nomad` (0.1.10 → 0.1.11)

#### 0.1.11

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-nomad-backend` (0.1.11 → 0.1.12)

#### 0.1.12

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument

### `@backstage/plugin-octopus-deploy` (0.2.11 → 0.2.12)

#### 0.2.12

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-opencost` (0.2.4 → 0.2.5)

#### 0.2.5

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- 8472188: Added or fixed the `repository` field in `package.json`.
- 03c5bbe: Updated dependency `date-fns` to `^3.0.0`.

### `@backstage/plugin-org` (0.6.19 → 0.6.20)

#### 0.6.20

##### Patch Changes

- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- 6e1bf50: Added basic support for the new frontend system, exported from the `/alpha` subpath.

### `@backstage/plugin-org-react` (0.1.18 → 0.1.19)

#### 0.1.19

##### Patch Changes

- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-pagerduty` (0.7.1 → 0.7.2)

#### 0.7.2

##### Patch Changes

- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-periskop` (0.1.27 → 0.1.28)

#### 0.1.28

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.6 → 0.1.7)

#### 0.1.7

##### Patch Changes

- 8472188: Added or fixed the `repository` field in `package.json`.

### `@backstage/plugin-permission-react` (0.4.19 → 0.4.20)

#### 0.4.20

##### Patch Changes

- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-playlist` (0.2.3 → 0.2.4)

#### 0.2.4

##### Patch Changes

- 5a03537: Conditionally render playlist description only when it's non-empty
- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- 7f11009: Added stack trace display to `ErrorPage` and updated existing refs

### `@backstage/plugin-playlist-backend` (0.3.13 → 0.3.14)

#### 0.3.14

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument

### `@backstage/plugin-puppetdb` (0.1.12 → 0.1.13)

#### 0.1.13

##### Patch Changes

- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-rollbar` (0.4.29 → 0.4.30)

#### 0.4.30

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-rollbar-backend` (0.1.54 → 0.1.55)

#### 0.1.55

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.

### `@backstage/plugin-scaffolder-backend-module-azure` (0.1.1 → 0.1.2)

#### 0.1.2

##### Patch Changes

- e9a5228: Exporting a default module for the new Backend System
- 8472188: Added or fixed the `repository` field in `package.json`.

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.10 → 0.2.11)

#### 0.2.11

##### Patch Changes

- e9a5228: Exporting a default module for the new Backend System
- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- 1cae748: Updated dependency `git-url-parse` to `^14.0.0`.

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.33 → 0.2.34)

#### 0.2.34

##### Patch Changes

- e9a5228: Exporting a default module for the new Backend System
- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.

### `@backstage/plugin-scaffolder-backend-module-gerrit` (0.1.1 → 0.1.2)

#### 0.1.2

##### Patch Changes

- e9a5228: Exporting a default module for the new Backend System
- 8472188: Added or fixed the `repository` field in `package.json`.
- 8b269e1: Provide default branch when creating repositories.

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.2.12 → 0.2.13)

#### 0.2.13

##### Patch Changes

- e9a5228: Exporting a default module for the new Backend System
- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 1cd2740: Use the Gitbeaker library for `gitlab:projectAccessToken:create` action, enabling the `expiresAt` option

### `@backstage/plugin-scaffolder-backend-module-rails` (0.4.26 → 0.4.27)

#### 0.4.27

##### Patch Changes

- e9a5228: Make `containerRunner` argument optional
- e9a5228: Exporting a default module for the new Backend System
- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.

### `@backstage/plugin-scaffolder-backend-module-sentry` (0.1.17 → 0.1.18)

#### 0.1.18

##### Patch Changes

- e9a5228: Exporting a default module for the new Backend System
- 9aac2b0: Use `--cwd` as the first `yarn` argument

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.30 → 0.2.31)

#### 0.2.31

##### Patch Changes

- e9a5228: Exporting a default module for the new Backend System
- 9aac2b0: Use `--cwd` as the first `yarn` argument

### `@backstage/plugin-search` (1.4.5 → 1.4.6)

#### 1.4.6

##### Patch Changes

- 912ca7b: Use `convertLegacyRouteRefs` to define routes in `/alpha` export plugin.
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-search-backend-module-catalog` (0.1.13 → 0.1.14)

#### 0.1.14

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument

### `@backstage/plugin-search-backend-module-explore` (0.1.13 → 0.1.14)

#### 0.1.14

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument

### `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.1.2 → 0.1.3)

#### 0.1.3

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8472188: Added or fixed the `repository` field in `package.json`.

### `@backstage/plugin-search-backend-module-techdocs` (0.1.13 → 0.1.14)

#### 0.1.14

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument

### `@backstage/plugin-search-react` (1.7.5 → 1.7.6)

#### 1.7.6

##### Patch Changes

- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-sentry` (0.5.14 → 0.5.15)

#### 0.5.15

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-shortcuts` (0.3.18 → 0.3.19)

#### 0.3.19

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-sonarqube` (0.7.11 → 0.7.12)

#### 0.7.12

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-sonarqube-backend` (0.2.11 → 0.2.12)

#### 0.2.12

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument

### `@backstage/plugin-splunk-on-call` (0.4.18 → 0.4.19)

#### 0.4.19

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-stack-overflow` (0.1.24 → 0.1.25)

#### 0.1.25

##### Patch Changes

- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- c1bc331: Fixes a bug that made the API return questions not related to the tags provided

### `@backstage/plugin-stackstorm` (0.1.10 → 0.1.11)

#### 0.1.11

##### Patch Changes

- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-tech-insights` (0.3.21 → 0.3.22)

#### 0.3.22

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-tech-insights-backend` (0.5.23 → 0.5.24)

#### 0.5.24

##### Patch Changes

- 7201af3: Add support for the new backend system.

  A new backend plugin for the tech-insights backend
  was added and exported as `default`.

  You can use it with the new backend system like

  ```ts title="packages/backend/src/index.ts"
  backend.add(import('@backstage/plugin-tech-insights-backend'));
  ```

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 341c2a2: Move `FactRetrieverRegistry` and `PersistenceContext` to `@backstage/plugin-tech-insights-node`.

  Original exports are marked as deprecated and re-export the moved types.

  Please replace uses like

  ```ts
  import {
    FactRetrieverRegistry,
    PersistenceContext,
  } from '@backstage/plugin-tech-insights-backend';
  ```

  with

  ```ts
  import {
    FactRetrieverRegistry,
    PersistenceContext,
  } from '@backstage/plugin-tech-insights-node';
  ```

### `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.41 → 0.1.42)

#### 0.1.42

##### Patch Changes

- 25cfb76: Add support for the new backend system.

  A new backend module for the tech-insights backend
  was added and exported as `default`.

  The module will register the `JsonRulesEngineFactCheckerFactory`
  as `FactCheckerFactory`, loading checks from the config.

  You can use it with the new backend system like

  ```ts title="packages/backend/src/index.ts"
  backend.add(import('@backstage/plugin-tech-insights-backend-module-jsonfc'));
  ```

- bc72782: Support loading `TechInsightsJsonRuleCheck` instances from config.

  Uses the check `id` as key.

  Example:

  ```yaml title="app-config.yaml"
  techInsights:
    factChecker:
      checks:
        groupOwnerCheck:
          type: json-rules-engine
          name: Group Owner Check
          description: Verifies that a group has been set as the spec.owner for this entity
          factIds:
            - entityOwnershipFactRetriever
          rule:
            conditions:
              all:
                - fact: hasGroupOwner
                  operator: equal
                  value: true
  ```

- 9aac2b0: Use `--cwd` as the first `yarn` argument

### `@backstage/plugin-tech-insights-node` (0.4.15 → 0.4.16)

#### 0.4.16

##### Patch Changes

- 7201af3: Add support for the new backend system.

  A new backend plugin for the tech-insights backend
  was added and exported as `default`.

  You can use it with the new backend system like

  ```ts title="packages/backend/src/index.ts"
  backend.add(import('@backstage/plugin-tech-insights-backend'));
  ```

- 341c2a2: Move `FactRetrieverRegistry` and `PersistenceContext` to `@backstage/plugin-tech-insights-node`.

  Original exports are marked as deprecated and re-export the moved types.

  Please replace uses like

  ```ts
  import {
    FactRetrieverRegistry,
    PersistenceContext,
  } from '@backstage/plugin-tech-insights-backend';
  ```

  with

  ```ts
  import {
    FactRetrieverRegistry,
    PersistenceContext,
  } from '@backstage/plugin-tech-insights-node';
  ```

### `@backstage/plugin-tech-radar` (0.6.12 → 0.6.13)

#### 0.6.13

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 912ca7b: Use `convertLegacyRouteRefs` to define routes in `/alpha` export plugin.
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-techdocs-addons-test-utils` (1.0.26 → 1.0.27)

#### 1.0.27

##### Patch Changes

- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-techdocs-backend` (1.9.2 → 1.9.3)

#### 1.9.3

##### Patch Changes

- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- d2e3ab9: Updated dependency `dockerode` to `^4.0.0`.

### `@backstage/plugin-techdocs-module-addons-contrib` (1.1.4 → 1.1.5)

#### 1.1.5

##### Patch Changes

- ab9c9eb: Fixed the value label text color in dark mode for the TextSize addon.
- 09cedb9: Updated dependency `@react-hookz/web` to `^24.0.0`.
- 1cae748: Updated dependency `git-url-parse` to `^14.0.0`.
- 131ffdc: Fix position of the ReportIssue component when is displaying at the top of the container.

### `@backstage/plugin-techdocs-node` (1.11.1 → 1.11.2)

#### 1.11.2

##### Patch Changes

- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- 1cae748: Updated dependency `git-url-parse` to `^14.0.0`.
- 77e3050: Update to a newer version of `@trendyol-js/openstack-swift-sdk`

### `@backstage/plugin-techdocs-react` (1.1.15 → 1.1.16)

#### 1.1.16

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-todo-backend` (0.3.7 → 0.3.8)

#### 0.3.8

##### Patch Changes

- 126c2f9: Updates the OpenAPI spec to use plugin as `info.title` instead of package name.
- 04907c3: Updates the OpenAPI specification title to plugin ID instead of package name.

### `@backstage/plugin-user-settings` (0.8.0 → 0.8.1)

#### 0.8.1

##### Patch Changes

- 912ca7b: Use `convertLegacyRouteRefs` to define routes in `/alpha` export plugin.
- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- d5b14a0: conditionally rendering the user name and email in user settings page

### `@backstage/plugin-vault` (0.1.24 → 0.1.25)

#### 0.1.25

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/plugin-vault-backend` (0.4.2 → 0.4.3)

#### 0.4.3

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8472188: Added or fixed the `repository` field in `package.json`.

### `@backstage/plugin-vault-node` (0.1.2 → 0.1.3)

#### 0.1.3

##### Patch Changes

- 8472188: Added or fixed the `repository` field in `package.json`.

### `@backstage/plugin-xcmetrics` (0.2.47 → 0.2.48)

#### 0.2.48

##### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@backstage/theme` (0.5.0 → 0.5.1)

#### 0.5.1

##### Patch Changes

- dd5d7cc: Fixed missing extra variables like `applyDarkStyles` in Mui V5 theme after calling `createUnifiedThemeFromV4` function
- 8fe56a8: Widen `@types/react` dependency range to include version 18.

### `@techdocs/cli` (1.8.1 → 1.8.2)

#### 1.8.2

##### Patch Changes

- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- d2e3ab9: Updated dependency `dockerode` to `^4.0.0`.
- 6ba64c4: Updated dependency `commander` to `^12.0.0`.
- d8d243c: fix: mkdocs parameter casing

_Excluded dependency updates for packages: `@backstage/integration-react`, `@backstage/plugin-adr-common`, `@backstage/plugin-airbrake-backend`, `@backstage/plugin-auth-backend-module-gcp-iap-provider`, `@backstage/plugin-auth-backend-module-google-provider`, `@backstage/plugin-catalog-backend-module-bitbucket-cloud`, `@backstage/plugin-catalog-backend-module-bitbucket-server`, `@backstage/plugin-catalog-backend-module-gcp`, `@backstage/plugin-catalog-backend-module-ldap`, `@backstage/plugin-catalog-common`, `@backstage/plugin-cicd-statistics`, `@backstage/plugin-cicd-statistics-module-gitlab`, `@backstage/plugin-events-backend-test-utils`, `@backstage/plugin-events-node`, `@backstage/plugin-explore-react`, `@backstage/plugin-gocd`, `@backstage/plugin-jenkins-common`, `@backstage/plugin-kafka-backend`, `@backstage/plugin-periskop-backend`, `@backstage/plugin-permission-backend`, `@backstage/plugin-permission-node`, `@backstage/plugin-proxy-backend`, `@backstage/plugin-search-backend-module-elasticsearch`, `@backstage/plugin-search-backend-module-pg`, `@backstage/plugin-search-backend-node`, `@backstage/plugin-sonarqube-react`, `@backstage/plugin-stack-overflow-backend`, `@backstage/plugin-todo`, `@backstage/plugin-user-settings-backend`._
