# RHDH Release 1.2 changelog

Changes between Backstage 1.23.4 (RHDH 1.1) and Backstage 1.26.5 (RHDH 1.2) — 7 added, 0 removed, 257 upgraded, 6 unchanged packages.

## Summary

- [Newly added packages](#newly-added-packages): 7 packages
- [Breaking changes](#breaking-changes): 25 packages
- [Major version bumps](#major-version-bumps): 1 package
- [0.x minor version bumps](#0x-minor-version-bumps): 16 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 7 packages
- [0.x patch version bumps](#0x-patch-version-bumps): 161 packages
- [Other minor version bumps](#other-minor-version-bumps): 13 packages
- [Other patch version bumps](#other-patch-version-bumps): 19 packages
- [Excluded dependency updates](#excluded-dependency-updates): 15 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/plugin-auth-backend-module-azure-easyauth-provider` (new, 0.1.0)](#backstageplugin-auth-backend-module-azure-easyauth-provider-new-010)
  - [`@backstage/plugin-auth-backend-module-bitbucket-provider` (new, 0.1.0)](#backstageplugin-auth-backend-module-bitbucket-provider-new-010)
  - [`@backstage/plugin-auth-backend-module-cloudflare-access-provider` (new, 0.1.0)](#backstageplugin-auth-backend-module-cloudflare-access-provider-new-010)
  - [`@backstage/plugin-auth-backend-module-guest-provider` (new, 0.1.3)](#backstageplugin-auth-backend-module-guest-provider-new-013)
  - [`@backstage/plugin-auth-react` (new, 0.1.1)](#backstageplugin-auth-react-new-011)
  - [`@backstage/plugin-catalog-unprocessed-entities-common` (new, 0.0.1)](#backstageplugin-catalog-unprocessed-entities-common-new-001)
  - [`@backstage/plugin-scaffolder-node-test-utils` (new, 0.1.3)](#backstageplugin-scaffolder-node-test-utils-new-013)
- [Breaking changes](#breaking-changes)
  - [`@backstage/backend-app-api` (0.5.14 → 0.7.2)](#backstagebackend-app-api-0514--072)
  - [`@backstage/cli` (0.25.2 → 0.26.4)](#backstagecli-0252--0264)
  - [`@backstage/plugin-auth-backend` (0.21.3 → 0.22.4)](#backstageplugin-auth-backend-0213--0224)
  - [`@backstage/plugin-azure-devops` (0.3.12 → 0.4.4)](#backstageplugin-azure-devops-0312--044)
  - [`@backstage/plugin-azure-sites-backend` (0.2.3 → 0.3.5)](#backstageplugin-azure-sites-backend-023--035)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.28 → 0.2.4)](#backstageplugin-catalog-backend-module-bitbucket-cloud-0128--024)
  - [`@backstage/plugin-catalog-backend-module-github` (0.5.3 → 0.6.0)](#backstageplugin-catalog-backend-module-github-053--060)
  - [`@backstage/plugin-catalog-backend-module-unprocessed` (0.3.10 → 0.4.4)](#backstageplugin-catalog-backend-module-unprocessed-0310--044)
  - [`@backstage/plugin-catalog-unprocessed-entities` (0.1.8 → 0.2.3)](#backstageplugin-catalog-unprocessed-entities-018--023)
  - [`@backstage/plugin-devtools-backend` (0.2.10 → 0.3.3)](#backstageplugin-devtools-backend-0210--033)
  - [`@backstage/plugin-events-backend` (0.2.22 → 0.3.4)](#backstageplugin-events-backend-0222--034)
  - [`@backstage/plugin-events-backend-module-aws-sqs` (0.2.16 → 0.3.3)](#backstageplugin-events-backend-module-aws-sqs-0216--033)
  - [`@backstage/plugin-events-backend-module-azure` (0.1.23 → 0.2.3)](#backstageplugin-events-backend-module-azure-0123--023)
  - [`@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.23 → 0.2.3)](#backstageplugin-events-backend-module-bitbucket-cloud-0123--023)
  - [`@backstage/plugin-events-backend-module-gerrit` (0.1.23 → 0.2.3)](#backstageplugin-events-backend-module-gerrit-0123--023)
  - [`@backstage/plugin-events-backend-module-github` (0.1.23 → 0.2.3)](#backstageplugin-events-backend-module-github-0123--023)
  - [`@backstage/plugin-events-backend-module-gitlab` (0.1.23 → 0.2.3)](#backstageplugin-events-backend-module-gitlab-0123--023)
  - [`@backstage/plugin-events-node` (0.2.22 → 0.3.3)](#backstageplugin-events-node-0222--033)
  - [`@backstage/plugin-jenkins-backend` (0.3.7 → 0.4.5)](#backstageplugin-jenkins-backend-037--045)
  - [`@backstage/plugin-kubernetes-backend` (0.15.3 → 0.17.0)](#backstageplugin-kubernetes-backend-0153--0170)
  - [`@backstage/plugin-lighthouse-backend` (0.4.5 → 0.4.11)](#backstageplugin-lighthouse-backend-045--0411)
  - [`@backstage/plugin-notifications-backend` (0.0.4 → 0.2.0)](#backstageplugin-notifications-backend-004--020)
  - [`@backstage/plugin-signals-backend` (0.0.4 → 0.1.3)](#backstageplugin-signals-backend-004--013)
  - [`@backstage/plugin-signals-node` (0.0.4 → 0.1.3)](#backstageplugin-signals-node-004--013)
  - [`@backstage/plugin-tech-insights-node` (0.4.19 → 0.6.1)](#backstageplugin-tech-insights-node-0419--061)
- [Major version bumps](#major-version-bumps)
  - [`@backstage/plugin-dynatrace` (9.0.0 → 10.0.4)](#backstageplugin-dynatrace-900--1004)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/plugin-apollo-explorer` (0.1.20 → 0.2.1)](#backstageplugin-apollo-explorer-0120--021)
  - [`@backstage/plugin-azure-devops-backend` (0.5.5 → 0.6.5)](#backstageplugin-azure-devops-backend-055--065)
  - [`@backstage/plugin-azure-devops-common` (0.3.2 → 0.4.2)](#backstageplugin-azure-devops-common-032--042)
  - [`@backstage/plugin-badges-backend` (0.3.10 → 0.4.1)](#backstageplugin-badges-backend-0310--041)
  - [`@backstage/plugin-catalog-backend-module-backstage-openapi` (0.1.6 → 0.2.0)](#backstageplugin-catalog-backend-module-backstage-openapi-016--020)
  - [`@backstage/plugin-cloudbuild` (0.4.0 → 0.5.2)](#backstageplugin-cloudbuild-040--052)
  - [`@backstage/plugin-github-issues` (0.2.19 → 0.4.2)](#backstageplugin-github-issues-0219--042)
  - [`@backstage/plugin-github-pull-requests-board` (0.1.24 → 0.2.1)](#backstageplugin-github-pull-requests-board-0124--021)
  - [`@backstage/plugin-home` (0.6.2 → 0.7.3)](#backstageplugin-home-062--073)
  - [`@backstage/plugin-notifications` (0.0.1 → 0.2.0)](#backstageplugin-notifications-001--020)
  - [`@backstage/plugin-notifications-node` (0.0.4 → 0.1.3)](#backstageplugin-notifications-node-004--013)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.2.16 → 0.3.3)](#backstageplugin-scaffolder-backend-module-gitlab-0216--033)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.34 → 0.3.0)](#backstageplugin-scaffolder-backend-module-yeoman-0234--030)
  - [`@backstage/plugin-scaffolder-node` (0.3.3 → 0.4.3)](#backstageplugin-scaffolder-node-033--043)
  - [`@backstage/plugin-tech-radar` (0.6.13 → 0.7.4)](#backstageplugin-tech-radar-0613--074)
  - [`@backstage/repo-tools` (0.6.3 → 0.8.0)](#backstagerepo-tools-063--080)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-explore-backend` (0.0.23 → 0.0.28)](#backstageplugin-explore-backend-0023--0028)
  - [`@backstage/plugin-explore-common` (0.0.2 → 0.0.3)](#backstageplugin-explore-common-002--003)
  - [`@backstage/plugin-explore-react` (0.0.36 → 0.0.39)](#backstageplugin-explore-react-0036--0039)
  - [`@backstage/plugin-kubernetes-cluster` (0.0.6 → 0.0.10)](#backstageplugin-kubernetes-cluster-006--0010)
  - [`@backstage/plugin-notifications-common` (0.0.1 → 0.0.3)](#backstageplugin-notifications-common-001--003)
  - [`@backstage/plugin-signals` (0.0.1 → 0.0.5)](#backstageplugin-signals-001--005)
  - [`@backstage/plugin-signals-react` (0.0.1 → 0.0.3)](#backstageplugin-signals-react-001--003)
- [0.x patch version bumps](#0x-patch-version-bumps)
  - [`@backstage/backend-common` (0.21.3 → 0.21.7)](#backstagebackend-common-0213--0217)
  - [`@backstage/backend-defaults` (0.2.13 → 0.2.17)](#backstagebackend-defaults-0213--0217)
  - [`@backstage/backend-dynamic-feature-service` (0.2.3 → 0.2.9)](#backstagebackend-dynamic-feature-service-023--029)
  - [`@backstage/backend-openapi-utils` (0.1.6 → 0.1.10)](#backstagebackend-openapi-utils-016--0110)
  - [`@backstage/backend-plugin-api` (0.6.13 → 0.6.17)](#backstagebackend-plugin-api-0613--0617)
  - [`@backstage/backend-tasks` (0.5.18 → 0.5.22)](#backstagebackend-tasks-0518--0522)
  - [`@backstage/backend-test-utils` (0.3.3 → 0.3.7)](#backstagebackend-test-utils-033--037)
  - [`@backstage/cli-node` (0.2.3 → 0.2.5)](#backstagecli-node-023--025)
  - [`@backstage/codemods` (0.1.47 → 0.1.48)](#backstagecodemods-0147--0148)
  - [`@backstage/core-compat-api` (0.2.0 → 0.2.4)](#backstagecore-compat-api-020--024)
  - [`@backstage/core-components` (0.14.0 → 0.14.6)](#backstagecore-components-0140--0146)
  - [`@backstage/create-app` (0.5.11 → 0.5.14)](#backstagecreate-app-0511--0514)
  - [`@backstage/eslint-plugin` (0.1.5 → 0.1.7)](#backstageeslint-plugin-015--017)
  - [`@backstage/frontend-app-api` (0.6.0 → 0.6.4)](#backstagefrontend-app-api-060--064)
  - [`@backstage/frontend-plugin-api` (0.6.0 → 0.6.4)](#backstagefrontend-plugin-api-060--064)
  - [`@backstage/frontend-test-utils` (0.1.2 → 0.1.6)](#backstagefrontend-test-utils-012--016)
  - [`@backstage/integration-aws-node` (0.1.9 → 0.1.12)](#backstageintegration-aws-node-019--0112)
  - [`@backstage/plugin-adr` (0.6.13 → 0.6.18)](#backstageplugin-adr-0613--0618)
  - [`@backstage/plugin-adr-backend` (0.4.10 → 0.4.15)](#backstageplugin-adr-backend-0410--0415)
  - [`@backstage/plugin-adr-common` (0.2.20 → 0.2.23)](#backstageplugin-adr-common-0220--0223)
  - [`@backstage/plugin-airbrake` (0.3.30 → 0.3.35)](#backstageplugin-airbrake-0330--0335)
  - [`@backstage/plugin-airbrake-backend` (0.3.10 → 0.3.15)](#backstageplugin-airbrake-backend-0310--0315)
  - [`@backstage/plugin-allure` (0.1.46 → 0.1.51)](#backstageplugin-allure-0146--0151)
  - [`@backstage/plugin-analytics-module-ga` (0.2.0 → 0.2.5)](#backstageplugin-analytics-module-ga-020--025)
  - [`@backstage/plugin-analytics-module-ga4` (0.2.0 → 0.2.5)](#backstageplugin-analytics-module-ga4-020--025)
  - [`@backstage/plugin-analytics-module-newrelic-browser` (0.1.0 → 0.1.5)](#backstageplugin-analytics-module-newrelic-browser-010--015)
  - [`@backstage/plugin-apache-airflow` (0.2.20 → 0.2.25)](#backstageplugin-apache-airflow-0220--0225)
  - [`@backstage/plugin-api-docs` (0.11.0 → 0.11.4)](#backstageplugin-api-docs-0110--0114)
  - [`@backstage/plugin-app-backend` (0.3.61 → 0.3.65)](#backstageplugin-app-backend-0361--0365)
  - [`@backstage/plugin-auth-backend-module-atlassian-provider` (0.1.5 → 0.1.9)](#backstageplugin-auth-backend-module-atlassian-provider-015--019)
  - [`@backstage/plugin-auth-backend-module-aws-alb-provider` (0.1.4 → 0.1.9)](#backstageplugin-auth-backend-module-aws-alb-provider-014--019)
  - [`@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.2.8 → 0.2.12)](#backstageplugin-auth-backend-module-gcp-iap-provider-028--0212)
  - [`@backstage/plugin-auth-backend-module-google-provider` (0.1.10 → 0.1.14)](#backstageplugin-auth-backend-module-google-provider-0110--0114)
  - [`@backstage/plugin-auth-backend-module-microsoft-provider` (0.1.8 → 0.1.12)](#backstageplugin-auth-backend-module-microsoft-provider-018--0112)
  - [`@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.1.6 → 0.1.10)](#backstageplugin-auth-backend-module-oauth2-proxy-provider-016--0110)
  - [`@backstage/plugin-auth-backend-module-oidc-provider` (0.1.3 → 0.1.8)](#backstageplugin-auth-backend-module-oidc-provider-013--018)
  - [`@backstage/plugin-auth-backend-module-pinniped-provider` (0.1.7 → 0.1.11)](#backstageplugin-auth-backend-module-pinniped-provider-017--0111)
  - [`@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.1.5 → 0.1.9)](#backstageplugin-auth-backend-module-vmware-cloud-provider-015--019)
  - [`@backstage/plugin-auth-node` (0.4.8 → 0.4.12)](#backstageplugin-auth-node-048--0412)
  - [`@backstage/plugin-azure-sites` (0.1.19 → 0.1.24)](#backstageplugin-azure-sites-0119--0124)
  - [`@backstage/plugin-azure-sites-common` (0.1.2 → 0.1.4)](#backstageplugin-azure-sites-common-012--014)
  - [`@backstage/plugin-badges` (0.2.54 → 0.2.59)](#backstageplugin-badges-0254--0259)
  - [`@backstage/plugin-bazaar` (0.2.22 → 0.2.27)](#backstageplugin-bazaar-0222--0227)
  - [`@backstage/plugin-bazaar-backend` (0.3.11 → 0.3.16)](#backstageplugin-bazaar-backend-0311--0316)
  - [`@backstage/plugin-bitrise` (0.1.57 → 0.1.62)](#backstageplugin-bitrise-0157--0162)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.3.7 → 0.3.12)](#backstageplugin-catalog-backend-module-aws-037--0312)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.1.32 → 0.1.37)](#backstageplugin-catalog-backend-module-azure-0132--0137)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.26 → 0.1.31)](#backstageplugin-catalog-backend-module-bitbucket-server-0126--0131)
  - [`@backstage/plugin-catalog-backend-module-gcp` (0.1.13 → 0.1.18)](#backstageplugin-catalog-backend-module-gcp-0113--0118)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (0.1.29 → 0.1.34)](#backstageplugin-catalog-backend-module-gerrit-0129--0134)
  - [`@backstage/plugin-catalog-backend-module-github-org` (0.1.7 → 0.1.12)](#backstageplugin-catalog-backend-module-github-org-017--0112)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.3.10 → 0.3.15)](#backstageplugin-catalog-backend-module-gitlab-0310--0315)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.17 → 0.4.22)](#backstageplugin-catalog-backend-module-incremental-ingestion-0417--0422)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.5.28 → 0.5.33)](#backstageplugin-catalog-backend-module-ldap-0528--0533)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.5.20 → 0.5.25)](#backstageplugin-catalog-backend-module-msgraph-0520--0525)
  - [`@backstage/plugin-catalog-backend-module-puppetdb` (0.1.18 → 0.1.23)](#backstageplugin-catalog-backend-module-puppetdb-0118--0123)
  - [`@backstage/plugin-catalog-graph` (0.4.0 → 0.4.4)](#backstageplugin-catalog-graph-040--044)
  - [`@backstage/plugin-catalog-import` (0.10.6 → 0.10.10)](#backstageplugin-catalog-import-0106--01010)
  - [`@backstage/plugin-cicd-statistics` (0.1.32 → 0.1.37)](#backstageplugin-cicd-statistics-0132--0137)
  - [`@backstage/plugin-cicd-statistics-module-gitlab` (0.1.26 → 0.1.31)](#backstageplugin-cicd-statistics-module-gitlab-0126--0131)
  - [`@backstage/plugin-circleci` (0.3.30 → 0.3.35)](#backstageplugin-circleci-0330--0335)
  - [`@backstage/plugin-code-climate` (0.1.30 → 0.1.35)](#backstageplugin-code-climate-0130--0135)
  - [`@backstage/plugin-code-coverage` (0.2.23 → 0.2.28)](#backstageplugin-code-coverage-0223--0228)
  - [`@backstage/plugin-code-coverage-backend` (0.2.27 → 0.2.32)](#backstageplugin-code-coverage-backend-0227--0232)
  - [`@backstage/plugin-codescene` (0.1.22 → 0.1.27)](#backstageplugin-codescene-0122--0127)
  - [`@backstage/plugin-config-schema` (0.1.50 → 0.1.54)](#backstageplugin-config-schema-0150--0154)
  - [`@backstage/plugin-cost-insights` (0.12.19 → 0.12.24)](#backstageplugin-cost-insights-01219--01224)
  - [`@backstage/plugin-cost-insights-common` (0.1.2 → 0.1.3)](#backstageplugin-cost-insights-common-012--013)
  - [`@backstage/plugin-devtools` (0.1.9 → 0.1.13)](#backstageplugin-devtools-019--0113)
  - [`@backstage/plugin-entity-feedback` (0.2.13 → 0.2.18)](#backstageplugin-entity-feedback-0213--0218)
  - [`@backstage/plugin-entity-feedback-backend` (0.2.10 → 0.2.15)](#backstageplugin-entity-feedback-backend-0210--0215)
  - [`@backstage/plugin-entity-feedback-common` (0.1.3 → 0.1.4)](#backstageplugin-entity-feedback-common-013--014)
  - [`@backstage/plugin-entity-validation` (0.1.15 → 0.1.20)](#backstageplugin-entity-validation-0115--0120)
  - [`@backstage/plugin-events-backend-test-utils` (0.1.23 → 0.1.27)](#backstageplugin-events-backend-test-utils-0123--0127)
  - [`@backstage/plugin-explore` (0.4.16 → 0.4.21)](#backstageplugin-explore-0416--0421)
  - [`@backstage/plugin-firehydrant` (0.2.14 → 0.2.19)](#backstageplugin-firehydrant-0214--0219)
  - [`@backstage/plugin-fossa` (0.2.62 → 0.2.67)](#backstageplugin-fossa-0262--0267)
  - [`@backstage/plugin-gcalendar` (0.3.23 → 0.3.28)](#backstageplugin-gcalendar-0323--0328)
  - [`@backstage/plugin-gcp-projects` (0.3.46 → 0.3.51)](#backstageplugin-gcp-projects-0346--0351)
  - [`@backstage/plugin-git-release-manager` (0.3.42 → 0.3.47)](#backstageplugin-git-release-manager-0342--0347)
  - [`@backstage/plugin-github-actions` (0.6.11 → 0.6.16)](#backstageplugin-github-actions-0611--0616)
  - [`@backstage/plugin-github-deployments` (0.1.61 → 0.1.66)](#backstageplugin-github-deployments-0161--0166)
  - [`@backstage/plugin-gitops-profiles` (0.3.45 → 0.3.50)](#backstageplugin-gitops-profiles-0345--0350)
  - [`@backstage/plugin-gocd` (0.1.36 → 0.1.41)](#backstageplugin-gocd-0136--0141)
  - [`@backstage/plugin-graphiql` (0.3.3 → 0.3.8)](#backstageplugin-graphiql-033--038)
  - [`@backstage/plugin-graphql-voyager` (0.1.12 → 0.1.17)](#backstageplugin-graphql-voyager-0112--0117)
  - [`@backstage/plugin-home-react` (0.1.8 → 0.1.12)](#backstageplugin-home-react-018--0112)
  - [`@backstage/plugin-ilert` (0.2.19 → 0.2.24)](#backstageplugin-ilert-0219--0224)
  - [`@backstage/plugin-jenkins` (0.9.5 → 0.9.10)](#backstageplugin-jenkins-095--0910)
  - [`@backstage/plugin-jenkins-common` (0.1.24 → 0.1.26)](#backstageplugin-jenkins-common-0124--0126)
  - [`@backstage/plugin-kafka` (0.3.30 → 0.3.35)](#backstageplugin-kafka-0330--0335)
  - [`@backstage/plugin-kafka-backend` (0.3.11 → 0.3.16)](#backstageplugin-kafka-backend-0311--0316)
  - [`@backstage/plugin-kubernetes` (0.11.5 → 0.11.9)](#backstageplugin-kubernetes-0115--0119)
  - [`@backstage/plugin-kubernetes-common` (0.7.4 → 0.7.5)](#backstageplugin-kubernetes-common-074--075)
  - [`@backstage/plugin-kubernetes-node` (0.1.7 → 0.1.11)](#backstageplugin-kubernetes-node-017--0111)
  - [`@backstage/plugin-kubernetes-react` (0.3.0 → 0.3.4)](#backstageplugin-kubernetes-react-030--034)
  - [`@backstage/plugin-lighthouse` (0.4.15 → 0.4.20)](#backstageplugin-lighthouse-0415--0420)
  - [`@backstage/plugin-lighthouse-common` (0.1.4 → 0.1.6)](#backstageplugin-lighthouse-common-014--016)
  - [`@backstage/plugin-linguist` (0.1.15 → 0.1.20)](#backstageplugin-linguist-0115--0120)
  - [`@backstage/plugin-linguist-backend` (0.5.10 → 0.5.16)](#backstageplugin-linguist-backend-0510--0516)
  - [`@backstage/plugin-linguist-common` (0.1.2 → 0.1.3)](#backstageplugin-linguist-common-012--013)
  - [`@backstage/plugin-microsoft-calendar` (0.1.12 → 0.1.17)](#backstageplugin-microsoft-calendar-0112--0117)
  - [`@backstage/plugin-newrelic` (0.3.45 → 0.3.50)](#backstageplugin-newrelic-0345--0350)
  - [`@backstage/plugin-newrelic-dashboard` (0.3.5 → 0.3.10)](#backstageplugin-newrelic-dashboard-035--0310)
  - [`@backstage/plugin-nomad` (0.1.11 → 0.1.16)](#backstageplugin-nomad-0111--0116)
  - [`@backstage/plugin-nomad-backend` (0.1.15 → 0.1.20)](#backstageplugin-nomad-backend-0115--0120)
  - [`@backstage/plugin-octopus-deploy` (0.2.12 → 0.2.17)](#backstageplugin-octopus-deploy-0212--0217)
  - [`@backstage/plugin-opencost` (0.2.5 → 0.2.10)](#backstageplugin-opencost-025--0210)
  - [`@backstage/plugin-org` (0.6.20 → 0.6.24)](#backstageplugin-org-0620--0624)
  - [`@backstage/plugin-org-react` (0.1.19 → 0.1.23)](#backstageplugin-org-react-0119--0123)
  - [`@backstage/plugin-pagerduty` (0.7.2 → 0.7.7)](#backstageplugin-pagerduty-072--077)
  - [`@backstage/plugin-periskop` (0.1.28 → 0.1.33)](#backstageplugin-periskop-0128--0133)
  - [`@backstage/plugin-periskop-backend` (0.2.11 → 0.2.16)](#backstageplugin-periskop-backend-0211--0216)
  - [`@backstage/plugin-permission-backend` (0.5.36 → 0.5.41)](#backstageplugin-permission-backend-0536--0541)
  - [`@backstage/plugin-permission-common` (0.7.12 → 0.7.13)](#backstageplugin-permission-common-0712--0713)
  - [`@backstage/plugin-permission-node` (0.7.24 → 0.7.28)](#backstageplugin-permission-node-0724--0728)
  - [`@backstage/plugin-permission-react` (0.4.20 → 0.4.22)](#backstageplugin-permission-react-0420--0422)
  - [`@backstage/plugin-playlist` (0.2.4 → 0.2.9)](#backstageplugin-playlist-024--029)
  - [`@backstage/plugin-playlist-backend` (0.3.17 → 0.3.22)](#backstageplugin-playlist-backend-0317--0322)
  - [`@backstage/plugin-playlist-common` (0.1.14 → 0.1.16)](#backstageplugin-playlist-common-0114--0116)
  - [`@backstage/plugin-proxy-backend` (0.4.11 → 0.4.15)](#backstageplugin-proxy-backend-0411--0415)
  - [`@backstage/plugin-puppetdb` (0.1.13 → 0.1.18)](#backstageplugin-puppetdb-0113--0118)
  - [`@backstage/plugin-rollbar` (0.4.30 → 0.4.35)](#backstageplugin-rollbar-0430--0435)
  - [`@backstage/plugin-rollbar-backend` (0.1.58 → 0.1.63)](#backstageplugin-rollbar-backend-0158--0163)
  - [`@backstage/plugin-scaffolder-backend-module-azure` (0.1.5 → 0.1.9)](#backstageplugin-scaffolder-backend-module-azure-015--019)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket` (0.2.3 → 0.2.7)](#backstageplugin-scaffolder-backend-module-bitbucket-023--027)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.1.3 → 0.1.7)](#backstageplugin-scaffolder-backend-module-bitbucket-cloud-013--017)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.1.3 → 0.1.7)](#backstageplugin-scaffolder-backend-module-bitbucket-server-013--017)
  - [`@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.14 → 0.2.18)](#backstageplugin-scaffolder-backend-module-confluence-to-markdown-0214--0218)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.37 → 0.2.41)](#backstageplugin-scaffolder-backend-module-cookiecutter-0237--0241)
  - [`@backstage/plugin-scaffolder-backend-module-gerrit` (0.1.5 → 0.1.9)](#backstageplugin-scaffolder-backend-module-gerrit-015--019)
  - [`@backstage/plugin-scaffolder-backend-module-gitea` (0.1.3 → 0.1.7)](#backstageplugin-scaffolder-backend-module-gitea-013--017)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.2.3 → 0.2.7)](#backstageplugin-scaffolder-backend-module-github-023--027)
  - [`@backstage/plugin-scaffolder-backend-module-rails` (0.4.30 → 0.4.34)](#backstageplugin-scaffolder-backend-module-rails-0430--0434)
  - [`@backstage/plugin-scaffolder-backend-module-sentry` (0.1.21 → 0.1.25)](#backstageplugin-scaffolder-backend-module-sentry-0121--0125)
  - [`@backstage/plugin-search-backend-module-catalog` (0.1.17 → 0.1.23)](#backstageplugin-search-backend-module-catalog-0117--0123)
  - [`@backstage/plugin-search-backend-module-explore` (0.1.17 → 0.1.23)](#backstageplugin-search-backend-module-explore-0117--0123)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.22 → 0.5.26)](#backstageplugin-search-backend-module-pg-0522--0526)
  - [`@backstage/plugin-search-backend-module-stack-overflow-collator` (0.1.6 → 0.1.10)](#backstageplugin-search-backend-module-stack-overflow-collator-016--0110)
  - [`@backstage/plugin-search-backend-module-techdocs` (0.1.17 → 0.1.22)](#backstageplugin-search-backend-module-techdocs-0117--0122)
  - [`@backstage/plugin-sentry` (0.5.15 → 0.5.20)](#backstageplugin-sentry-0515--0520)
  - [`@backstage/plugin-shortcuts` (0.3.19 → 0.3.24)](#backstageplugin-shortcuts-0319--0324)
  - [`@backstage/plugin-sonarqube` (0.7.12 → 0.7.17)](#backstageplugin-sonarqube-0712--0717)
  - [`@backstage/plugin-sonarqube-backend` (0.2.15 → 0.2.20)](#backstageplugin-sonarqube-backend-0215--0220)
  - [`@backstage/plugin-sonarqube-react` (0.1.13 → 0.1.16)](#backstageplugin-sonarqube-react-0113--0116)
  - [`@backstage/plugin-splunk-on-call` (0.4.19 → 0.4.24)](#backstageplugin-splunk-on-call-0419--0424)
  - [`@backstage/plugin-stack-overflow` (0.1.25 → 0.1.30)](#backstageplugin-stack-overflow-0125--0130)
  - [`@backstage/plugin-stack-overflow-backend` (0.2.17 → 0.2.22)](#backstageplugin-stack-overflow-backend-0217--0222)
  - [`@backstage/plugin-stackstorm` (0.1.11 → 0.1.16)](#backstageplugin-stackstorm-0111--0116)
  - [`@backstage/plugin-tech-insights` (0.3.22 → 0.3.27)](#backstageplugin-tech-insights-0322--0327)
  - [`@backstage/plugin-tech-insights-backend` (0.5.27 → 0.5.32)](#backstageplugin-tech-insights-backend-0527--0532)
  - [`@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.45 → 0.1.50)](#backstageplugin-tech-insights-backend-module-jsonfc-0145--0150)
  - [`@backstage/plugin-tech-insights-common` (0.2.12 → 0.2.13)](#backstageplugin-tech-insights-common-0212--0213)
  - [`@backstage/plugin-todo` (0.2.34 → 0.2.39)](#backstageplugin-todo-0234--0239)
  - [`@backstage/plugin-todo-backend` (0.3.11 → 0.3.17)](#backstageplugin-todo-backend-0311--0317)
  - [`@backstage/plugin-user-settings` (0.8.1 → 0.8.5)](#backstageplugin-user-settings-081--085)
  - [`@backstage/plugin-vault` (0.1.25 → 0.1.30)](#backstageplugin-vault-0125--0130)
  - [`@backstage/plugin-vault-backend` (0.4.6 → 0.4.11)](#backstageplugin-vault-backend-046--0411)
  - [`@backstage/plugin-vault-node` (0.1.6 → 0.1.11)](#backstageplugin-vault-node-016--0111)
  - [`@backstage/plugin-xcmetrics` (0.2.48 → 0.2.53)](#backstageplugin-xcmetrics-0248--0253)
  - [`@backstage/theme` (0.5.1 → 0.5.3)](#backstagetheme-051--053)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/config` (1.1.1 → 1.2.0)](#backstageconfig-111--120)
  - [`@backstage/config-loader` (1.6.2 → 1.8.0)](#backstageconfig-loader-162--180)
  - [`@backstage/integration` (1.9.0 → 1.10.0)](#backstageintegration-190--1100)
  - [`@backstage/plugin-catalog` (1.17.0 → 1.19.0)](#backstageplugin-catalog-1170--1190)
  - [`@backstage/plugin-catalog-backend` (1.17.3 → 1.21.1)](#backstageplugin-catalog-backend-1173--1211)
  - [`@backstage/plugin-catalog-node` (1.7.3 → 1.11.1)](#backstageplugin-catalog-node-173--1111)
  - [`@backstage/plugin-catalog-react` (1.10.0 → 1.11.3)](#backstageplugin-catalog-react-1100--1113)
  - [`@backstage/plugin-scaffolder` (1.18.0 → 1.19.3)](#backstageplugin-scaffolder-1180--1193)
  - [`@backstage/plugin-scaffolder-backend` (1.21.3 → 1.22.5)](#backstageplugin-scaffolder-backend-1213--1225)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.3.16 → 1.4.0)](#backstageplugin-search-backend-module-elasticsearch-1316--140)
  - [`@backstage/plugin-techdocs-backend` (1.9.6 → 1.10.4)](#backstageplugin-techdocs-backend-196--1104)
  - [`@backstage/plugin-techdocs-node` (1.11.5 → 1.12.3)](#backstageplugin-techdocs-node-1115--1123)
  - [`@backstage/plugin-techdocs-react` (1.1.16 → 1.2.3)](#backstageplugin-techdocs-react-1116--123)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/app-defaults` (1.5.0 → 1.5.4)](#backstageapp-defaults-150--154)
  - [`@backstage/catalog-client` (1.6.0 → 1.6.4)](#backstagecatalog-client-160--164)
  - [`@backstage/core-app-api` (1.12.0 → 1.12.4)](#backstagecore-app-api-1120--1124)
  - [`@backstage/core-plugin-api` (1.9.0 → 1.9.2)](#backstagecore-plugin-api-190--192)
  - [`@backstage/dev-utils` (1.0.27 → 1.0.31)](#backstagedev-utils-1027--1031)
  - [`@backstage/errors` (1.2.3 → 1.2.4)](#backstageerrors-123--124)
  - [`@backstage/integration-react` (1.1.24 → 1.1.26)](#backstageintegration-react-1124--1126)
  - [`@backstage/plugin-scaffolder-react` (1.8.0 → 1.8.4)](#backstageplugin-scaffolder-react-180--184)
  - [`@backstage/plugin-search` (1.4.6 → 1.4.10)](#backstageplugin-search-146--1410)
  - [`@backstage/plugin-search-backend` (1.5.3 → 1.5.7)](#backstageplugin-search-backend-153--157)
  - [`@backstage/plugin-search-backend-node` (1.2.17 → 1.2.21)](#backstageplugin-search-backend-node-1217--1221)
  - [`@backstage/plugin-search-common` (1.2.10 → 1.2.11)](#backstageplugin-search-common-1210--1211)
  - [`@backstage/plugin-search-react` (1.7.6 → 1.7.10)](#backstageplugin-search-react-176--1710)
  - [`@backstage/plugin-techdocs` (1.10.0 → 1.10.4)](#backstageplugin-techdocs-1100--1104)
  - [`@backstage/plugin-techdocs-addons-test-utils` (1.0.27 → 1.0.31)](#backstageplugin-techdocs-addons-test-utils-1027--1031)
  - [`@backstage/plugin-techdocs-module-addons-contrib` (1.1.5 → 1.1.9)](#backstageplugin-techdocs-module-addons-contrib-115--119)
  - [`@backstage/test-utils` (1.5.0 → 1.5.4)](#backstagetest-utils-150--154)
  - [`@backstage/version-bridge` (1.0.7 → 1.0.8)](#backstageversion-bridge-107--108)
  - [`@techdocs/cli` (1.8.5 → 1.8.10)](#techdocscli-185--1810)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/plugin-auth-backend-module-azure-easyauth-provider` (new, [0.1.0](../../changelogs/@backstage/plugin-auth-backend-module-azure-easyauth-provider.md#010))

#### 0.1.0

##### Minor Changes

- [`06a6725`](https://github.com/backstage/backstage/commit/06a6725): New auth backend module to add `azure-easyauth` provider. Note that as part of this change the default provider ID has been changed from `easyAuth` to `azureEasyAuth`, which means that if you switch to this new module you need to update your app config as well as the `provider` prop of the `ProxiedSignInPage` in the frontend.

### `@backstage/plugin-auth-backend-module-bitbucket-provider` (new, [0.1.0](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-provider.md#010))

#### 0.1.0

##### Minor Changes

- [`ba763b6`](https://github.com/backstage/backstage/commit/ba763b6): Migrate the Bitbucket auth provider to the new `@backstage/plugin-auth-backend-module-bitbucket-provider` module package.

### `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (new, [0.1.0](../../changelogs/@backstage/plugin-auth-backend-module-cloudflare-access-provider.md#010))

#### 0.1.0

##### Minor Changes

- [`c26218d`](https://github.com/backstage/backstage/commit/c26218d): Created a separate module for the Cloudflare Access auth provider

### `@backstage/plugin-auth-backend-module-guest-provider` (new, [0.1.3](../../changelogs/@backstage/plugin-auth-backend-module-guest-provider.md#013))

#### 0.1.2

##### Patch Changes

- [`4cc8279`](https://github.com/backstage/backstage/commit/4cc8279): Add installation instructions

#### 0.1.0

##### Minor Changes

- [`1bedb23`](https://github.com/backstage/backstage/commit/1bedb23): Adds a new guest provider that maps guest users to actual tokens. This also shifts the default guest login to `user:development/guest` to reduce overlap with your production/real data. To change that (or set it back to the old default, use the new `auth.providers.guest.userEntityRef` config key) like so,

  ```yaml title=app-config.yaml
  auth:
    providers:
      guest:
        userEntityRef: user:default/guest
  ```

  This also adds a new property to control the ownership entity refs,

  ```yaml title=app-config.yaml
  auth:
    providers:
      guest:
        ownershipEntityRefs:
          - guests
          - development/custom
  ```

##### Patch Changes

- [`72dd380`](https://github.com/backstage/backstage/commit/72dd380): Ensure that the config schema is present
- [`50a331b`](https://github.com/backstage/backstage/commit/50a331b): Fix issue for issuing a token when `guest` user does not exist in catalog

### `@backstage/plugin-auth-react` (new, [0.1.1](../../changelogs/@backstage/plugin-auth-react.md#011))

#### 0.1.0

##### Minor Changes

- [`c884b9a`](https://github.com/backstage/backstage/commit/c884b9a): **BREAKING**: Removed the path option from `CookieAuthRefreshProvider` and `useCookieAuthRefresh`.

  A new `CookieAuthRedirect` component has been added to redirect a public app bundle to the protected one when using the `app-backend` with a separate public entry point.

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.

#### 0.0.1

##### Patch Changes

- [`62bcaf8`](https://github.com/backstage/backstage/commit/62bcaf8): Create a generic React component for refreshing user cookie.

### `@backstage/plugin-catalog-unprocessed-entities-common` (new, [0.0.1](../../changelogs/@backstage/plugin-catalog-unprocessed-entities-common.md#001))

#### 0.0.1

##### Patch Changes

- [`924c1ac`](https://github.com/backstage/backstage/commit/924c1ac): **BREAKING**- the `@backstage/plugin-catalog-backend-module-unprocessed` constructor is now private, and have been moved to using the static `.create` method instead which now requires a `PermissionService` and `DiscoveryService`.

  If you're using this module in the old backend system you'll need to migrate to using the `.create` method and pass in the new required parameters in `packages/backend/src/plugins/catalog.ts`.

  No changes should be required if you're using the new backend system.

  ```diff
  -  const unprocessed = new UnprocessedEntitiesModule(
  -    await env.database.getClient(),
  -    router,
  -  );
  + const unprocessed = UnprocessedEntitiesModule.create({
  +    database: await env.database.getClient(),
  +    router,
  +    permissions: env.permissions,
  +    discovery: env.discovery,
  +  });

    unprocessed.registerRoutes();
  ```

  Adds the ability to delete an unprocessed entity from the `refresh_state` table. This change requires enabling permissions for your Backstage instance.

### `@backstage/plugin-scaffolder-node-test-utils` (new, [0.1.3](../../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#013))

#### 0.1.0

##### Minor Changes

- [`f44589d`](https://github.com/backstage/backstage/commit/f44589d): Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

##### Patch Changes

- [`2bd1410`](https://github.com/backstage/backstage/commit/2bd1410): Removed unused dependencies
- [`aa543c9`](https://github.com/backstage/backstage/commit/aa543c9): Add an initiator credentials getter to the default mock context.
- [`563dfd0`](https://github.com/backstage/backstage/commit/563dfd0): Fix issue with package bundling, should be `dist/index.cjs.js` instead of `dist/index.esm.js`.
- [`bbd1fe1`](https://github.com/backstage/backstage/commit/bbd1fe1): Made "checkpoint" on scaffolder action context non-optional

## Breaking changes

### `@backstage/backend-app-api` (0.5.14 → [0.7.2](../../changelogs/@backstage/backend-app-api.md#072))

#### 0.7.0

##### Minor Changes

- [`3256f14`](https://github.com/backstage/backstage/commit/3256f14): **BREAKING**: Modules are no longer loaded unless the plugin that they extend is present.

##### Patch Changes

- [`10327fb`](https://github.com/backstage/backstage/commit/10327fb): Deprecate the `getPath` option for the `httpRouterServiceFactory` and more generally the ability to configure plugin API paths to be anything else than `/api/:pluginId/`. Requests towards `/api/*` that do not match an installed plugin will also no longer be handled by the index router, typically instead returning a 404.
- [`2c50516`](https://github.com/backstage/backstage/commit/2c50516): Fix auth cookie issuance for split backend deployments by preferring to set it against the request target host instead of origin
- [`7e584d6`](https://github.com/backstage/backstage/commit/7e584d6): Fixed a bug where expired cookies would not be refreshed.
- [`1a20b12`](https://github.com/backstage/backstage/commit/1a20b12): Make the auth service create and validate dedicated OBO tokens, containing the user identity proof.
- [`00fca28`](https://github.com/backstage/backstage/commit/00fca28): Implemented support for external access using both the legacy token form and static tokens.
- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`
- [`bce0879`](https://github.com/backstage/backstage/commit/bce0879): Service-to-service authentication has been improved.

  Each plugin now has the capability to generate its own signing keys for token issuance. The generated public keys are stored in a database, and they are made accessible through a newly created endpoint: `/.backstage/auth/v1/jwks.json`.

  `AuthService` can now issue tokens with a reduced scope using the `getPluginRequestToken` method. This improvement enables plugins to identify the plugin originating the request.

- [`54f2ac8`](https://github.com/backstage/backstage/commit/54f2ac8): Added `initialization` option to `createServiceFactory` which defines the initialization strategy for the service. The default strategy mimics the current behavior where plugin scoped services are initialized lazily by default and root scoped services are initialized eagerly.
- [`56f81b5`](https://github.com/backstage/backstage/commit/56f81b5): Improved error message thrown by `AuthService` when requesting a token for plugins that don't support the new authentication tokens.
- [`25ea3d2`](https://github.com/backstage/backstage/commit/25ea3d2): Minor internal restructuring
- [`d62bc51`](https://github.com/backstage/backstage/commit/d62bc51): Add support for limited user tokens by using user identity proof provided by the auth backend.
- [`c884b9a`](https://github.com/backstage/backstage/commit/c884b9a): Automatically creates a get and delete cookie endpoint when a `user-cookie` policy is added.

#### 0.6.2

##### Patch Changes

- [`e848644`](https://github.com/backstage/backstage/commit/e848644): Temporarily revert the rate limiting

#### 0.6.1

##### Patch Changes

- [`de1f45d`](https://github.com/backstage/backstage/commit/de1f45d): Temporarily revert the rate limiting

#### 0.6.0

##### Minor Changes

- [`4a3d434`](https://github.com/backstage/backstage/commit/4a3d434): **BREAKING**: For users that have migrated to the new backend system, incoming requests will now be rejected if they are not properly authenticated (e.g. with a Backstage bearer token or a backend token). Please see the [Auth Service Migration tutorial](https://backstage.io/docs/tutorials/auth-service-migration) for more information on how to circumvent this behavior in the short term and how to properly leverage it in the longer term.

  Added service factories for the new [`auth`](https://backstage.io/docs/backend-system/core-services/auth/), [`httpAuth`](https://backstage.io/docs/backend-system/core-services/http-auth), and [`userInfo`](https://backstage.io/docs/backend-system/core-services/user-info) services that were created as part of [BEP-0003](https://github.com/backstage/backstage/tree/master/beps/0003-auth-architecture-evolution).

##### Patch Changes

- [`999224f`](https://github.com/backstage/backstage/commit/999224f): Bump dependency `minimatch` to v9
- [`81e0120`](https://github.com/backstage/backstage/commit/81e0120): Fixed an issue where configuration schema for the purpose of redacting secrets from logs was not being read correctly.
- [`15fda44`](https://github.com/backstage/backstage/commit/15fda44): Provide some sane defaults for `WinstonLogger.create` making some of the arguments optional
- [`0502d82`](https://github.com/backstage/backstage/commit/0502d82): Updated the `permissionsServiceFactory` to forward the `AuthService` to the implementation.
- [`9d91128`](https://github.com/backstage/backstage/commit/9d91128): Add the possibility to disable watching files in the new backend system
- [`a5d341e`](https://github.com/backstage/backstage/commit/a5d341e): Adds an initial rate-limiting implementation so that any incoming requests that have a `'none'` principal are rate-limited automatically.
- [`9802004`](https://github.com/backstage/backstage/commit/9802004): Made the `DefaultUserInfoService` claims check stricter
- [`f235ca7`](https://github.com/backstage/backstage/commit/f235ca7): Make sure to not filter out schemas in `createConfigSecretEnumerator`
- [`af5f7a6`](https://github.com/backstage/backstage/commit/af5f7a6): The experimental feature discovery service exported at the `/alpha` sub-path will no longer attempt to load packages that are not Backstage backend packages.

### `@backstage/cli` (0.25.2 → [0.26.4](../../changelogs/@backstage/cli.md#0264))

#### 0.26.3

##### Patch Changes

- [`c884b9a`](https://github.com/backstage/backstage/commit/c884b9a): Fix the bundle public subpath configuration.
- [`e3c213e`](https://github.com/backstage/backstage/commit/e3c213e): Add the deprecation plugin to the default linter setup, switched off.

  This allows to disable deprecation warnings for `backstage-cli repo list-deprecations` with inline comments.

- [`4946f03`](https://github.com/backstage/backstage/commit/4946f03): Updated dependency `webpack-dev-server` to `^5.0.0`.
- [`6b5ddbe`](https://github.com/backstage/backstage/commit/6b5ddbe): Fix the backend plugin to use correct plugin id
- [`4fecffc`](https://github.com/backstage/backstage/commit/4fecffc): When building the frontend app public assets are now also copied to the public dist directory when in use.
- [`ed9260f`](https://github.com/backstage/backstage/commit/ed9260f): Added `versions:migrate` command to help move packages to the new `@backstage-community` namespace

#### 0.26.2

##### Patch Changes

- [`eeb226a`](https://github.com/backstage/backstage/commit/eeb226a): Updated dependency `rollup` to `^4.0.0`.
- [`91192f4`](https://github.com/backstage/backstage/commit/91192f4): Updated backend plugin template to work better with new backend system
- [`cc371d6`](https://github.com/backstage/backstage/commit/cc371d6): Ignore transforming only on `react-use/lib`, not whole `react-use` in jest.

  ** POTENTIAL BREAKAGE **
  If your tests fail, please change to use path import from `react-use/esm/`. It is also recommended to migrate from `react-user/lib` imports to `react-use/esm`

#### 0.26.1

##### Patch Changes

- [`eeb226a`](https://github.com/backstage/backstage/commit/eeb226a): Updated dependency `rollup` to `^4.0.0`.
- [`cc371d6`](https://github.com/backstage/backstage/commit/cc371d6): Ignore transforming only on `react-use/lib`, not whole `react-use` in jest.

  ** POTENTIAL BREAKAGE **
  If your tests fail, please change to use path import from `react-use/esm/`. It is also recommended to migrate from `react-user/lib` imports to `react-use/esm`

#### 0.26.0

##### Minor Changes

- [`0d72065`](https://github.com/backstage/backstage/commit/0d72065): The backend devlopment server transpilation has been replaced with a simplified solution based on SWC, which is already the transpiler used for tests. This fixed an issue where never versions of the `tsx` dependency had a new contract for signalling dependencies, breaking watch mode. This change fixed file watches as well as enables sourcemaps.

##### Patch Changes

- [`fe1a55e`](https://github.com/backstage/backstage/commit/fe1a55e): Extend option to minify generated code to the `backend` package.
- [`b0875e5`](https://github.com/backstage/backstage/commit/b0875e5): Fixed a bug that could cause the `build-workspace` command to fail when invoked with `--alwaysYarnPack` enabled in environments with limited resources.
- [`bdf9ec1`](https://github.com/backstage/backstage/commit/bdf9ec1): New backend plugins with cli are now created using the new backend system
- [`cadbb82`](https://github.com/backstage/backstage/commit/cadbb82): Added a `EXPERIMENTAL_LAZY_COMPILATION` flag, which enables the experimental Webpack lazy compilation option in frontend builds.
- [`999224f`](https://github.com/backstage/backstage/commit/999224f): Bump dependency `minimatch` to v9
- [`1bd4596`](https://github.com/backstage/backstage/commit/1bd4596): Removed the `ts-node` dev dependency.
- [`8dce287`](https://github.com/backstage/backstage/commit/8dce287): Fix prettier issues on default plugins & module templates
- [`f86e34c`](https://github.com/backstage/backstage/commit/f86e34c): Removed unused `replace-in-file` dependency
- [`2398c7c`](https://github.com/backstage/backstage/commit/2398c7c): Updated dependency `@spotify/prettier-config` to `^15.0.0`.
  Updated dependency `@spotify/eslint-config-base` to `^15.0.0`.
  Updated dependency `@spotify/eslint-config-react` to `^15.0.0`.
  Updated dependency `@spotify/eslint-config-typescript` to `^15.0.0`.
- [`f4404e5`](https://github.com/backstage/backstage/commit/f4404e5): Add .ico import support
- [`f39dfd3`](https://github.com/backstage/backstage/commit/f39dfd3): Tweak the descriptions of the CLI templates

### `@backstage/plugin-auth-backend` (0.21.3 → [0.22.4](../../changelogs/@backstage/plugin-auth-backend.md#0224))

#### 0.22.4

##### Patch Changes

- [`f02fe79`](https://github.com/backstage/backstage/commit/f02fe79): Refactored the `azure-easyauth` provider to use the implementation from `@backstage/plugin-auth-backend-module-azure-easyauth-provider`.
- [`d62bc51`](https://github.com/backstage/backstage/commit/d62bc51): Added token type header parameter and user identity proof to issued user tokens.
- [`ba763b6`](https://github.com/backstage/backstage/commit/ba763b6): Migrate the Bitbucket auth provider to the new `@backstage/plugin-auth-backend-module-bitbucket-provider` module package.
- [`bf4d71a`](https://github.com/backstage/backstage/commit/bf4d71a): Initial implementation of the `/v1/userinfo` endpoint, which is now able to parse and return the `sub` and `ent` claims from a Backstage user token.
- [`c26218d`](https://github.com/backstage/backstage/commit/c26218d): Deprecated some of the Cloudflare Access types and used the implementation from `@backstage/plugin-auth-backend-module-cloudflare-access-provider`

#### 0.22.3

##### Patch Changes

- [`038b2e6`](https://github.com/backstage/backstage/commit/038b2e6): Only consider entities of kind `User` when using `findCatalogUser` with a filter query, unless an explicit `kind` filter is provided.

#### 0.22.0

##### Minor Changes

- [`293c835`](https://github.com/backstage/backstage/commit/293c835): Add support for Service Tokens to Cloudflare Access auth provider
- [`492fe83`](https://github.com/backstage/backstage/commit/492fe83): **BREAKING**: The `CatalogIdentityClient` constructor now also requires the `discovery` service to be forwarded from the plugin environment. This is part of the migration to support the new auth services, which has also been done for the `createRouter` function.

##### Patch Changes

- [`999224f`](https://github.com/backstage/backstage/commit/999224f): Bump dependency `minimatch` to v9
- [`7c29e7f`](https://github.com/backstage/backstage/commit/7c29e7f): Fixed refresh scope to match start method in OneLogin provider.
- [`2af5354`](https://github.com/backstage/backstage/commit/2af5354): Bump dependency `jose` to v5
- [`38af71a`](https://github.com/backstage/backstage/commit/38af71a): Updated dependency `google-auth-library` to `^9.0.0`.
- [`0fb419b`](https://github.com/backstage/backstage/commit/0fb419b): Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- [`fa7ea3f`](https://github.com/backstage/backstage/commit/fa7ea3f): Internal refactor to break out how the router is constructed

### `@backstage/plugin-azure-devops` (0.3.12 → [0.4.4](../../changelogs/@backstage/plugin-azure-devops.md#044))

#### 0.4.4

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.4.3

##### Patch Changes

- [`95b0573`](https://github.com/backstage/backstage/commit/95b0573): `getAllTeams` now accepts an optional `limit` parameter which can be used to return more than the default limit of 100 teams from the Azure DevOps API

  `pullRequestOptions` have been equipped with `teamsLimit` so that the property can be used with `getAllTeams`

- [`4d895b3`](https://github.com/backstage/backstage/commit/4d895b3): Fixed bug in EntityPageAzurePipeline component where build definition annotation used for viewing pipelines
- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.4.2

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.4.1

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.4.0

##### Minor Changes

- [`9fdb86a`](https://github.com/backstage/backstage/commit/9fdb86a): Ability to fetch the README file from a different Azure DevOps path.

  Defaults to the current, Azure DevOps default behaviour (`README.md` in the root of the git repo); to use a different path, add the annotation `dev.azure.com/readme-path`

  Example:

  ```yaml
  dev.azure.com/readme-path: /my-path/README.md
  ```

- [`a9e7bd6`](https://github.com/backstage/backstage/commit/a9e7bd6): **BREAKING** The `AzureDevOpsClient` no longer requires `identityAPi` but now requires `fetchApi`.

  Updated to use `fetchApi` as per [ADR013](https://backstage.io/docs/architecture-decisions/adrs-adr013)

- [`3270b1b`](https://github.com/backstage/backstage/commit/3270b1b): Azure DevOps plugin is now integrated with permission framework for its core features, see the https://github.com/backstage/backstage/blob/master/plugins/azure-devops/README.md#permission-framework for more details.

##### Patch Changes

- [`b7b0466`](https://github.com/backstage/backstage/commit/b7b0466): Remove the use of the deprecated `customStyles` for `Avatar`
- [`9f19476`](https://github.com/backstage/backstage/commit/9f19476): Updated README

### `@backstage/plugin-azure-sites-backend` (0.2.3 → [0.3.5](../../changelogs/@backstage/plugin-azure-sites-backend.md#035))

#### 0.3.5

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.3.4

##### Patch Changes

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`

#### 0.3.0

##### Minor Changes

- [`6b802a2`](https://github.com/backstage/backstage/commit/6b802a2): **BREAKING**: The `createRouter` method now requires the `discovery` service to be forwarded from the plugin environment. This is part of the migration to support new auth services.
- [`acf3e00`](https://github.com/backstage/backstage/commit/acf3e00): Azure Sites list now hides the internal/microsoft only `hidden-` tags from the list of tags that are returned. Updated the log endpoint to /logstream-quickstart rather than just /logstream to stream logs in the Azure Portal UI.

##### Patch Changes

- [`2bd1410`](https://github.com/backstage/backstage/commit/2bd1410): Removed unused dependencies
- [`4467036`](https://github.com/backstage/backstage/commit/4467036): Allow unauthenticated access to health check endpoint.
- [`85db926`](https://github.com/backstage/backstage/commit/85db926): Added new backend system for the Azure Sites backend plugin

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.28 → [0.2.4](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#024))

#### 0.2.0

##### Minor Changes

- [`9e527c9`](https://github.com/backstage/backstage/commit/9e527c9): BREAKING CHANGE: Migrates the `BitbucketCloudEntityProvider` to use the `EventsService`; fix new backend system support.

  `BitbucketCloudEntityProvider.fromConfig` accepts `events: EventsService` as optional argument to its `options`.
  With provided `events`, the event-based updates/refresh will be available.
  However, the `EventSubscriber` interface was removed including its `supportsEventTopics()` and `onEvent(params)`.

  The event subscription happens on `connect(connection)` if the `events` is available.

  **Migration:**

  ```diff
    const bitbucketCloudProvider = BitbucketCloudEntityProvider.fromConfig(
      env.config,
      {
        catalogApi: new CatalogClient({ discoveryApi: env.discovery }),
  +     events: env.events,
        logger: env.logger,
        scheduler: env.scheduler,
        tokenManager: env.tokenManager,
      },
    );
  - env.eventBroker.subscribe(bitbucketCloudProvider);
  ```

  **New Backend System:**

  Before this change, using this module with the new backend system was broken.
  Now, you can add the catalog module for Bitbucket Cloud incl. event support backend.
  Event support will always be enabled.
  However, no updates/refresh will happen without receiving events.

  ```ts
  backend.add(
    import('@backstage/plugin-catalog-backend-module-bitbucket-cloud/alpha'),
  );
  ```

##### Patch Changes

- [`0fb419b`](https://github.com/backstage/backstage/commit/0fb419b): Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/plugin-catalog-backend-module-github` (0.5.3 → [0.6.0](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#060))

#### 0.6.0

##### Minor Changes

- [`29c3898`](https://github.com/backstage/backstage/commit/29c3898): Remove use of `EventBroker` and `EventSubscriber` for the GitHub org data providers.

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

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`
- [`469e87f`](https://github.com/backstage/backstage/commit/469e87f): Properly instantiate `GithubMultiOrgEntityProvider` and `GithubOrgEntityProvider` with `EventsService` if defined

#### 0.5.4

##### Patch Changes

- [`a936a8f`](https://github.com/backstage/backstage/commit/a936a8f): Migrated the `GithubLocationAnalyzer` to support new auth services.
- [`999224f`](https://github.com/backstage/backstage/commit/999224f): Bump dependency `minimatch` to v9
- [`2eb0da3`](https://github.com/backstage/backstage/commit/2eb0da3): Support EventsService and events with the new backend system (through EventsService) for `GithubOrgEntityProvider` and `GithubMultiOrgEntityProvider`.

  _New/Current Backend System:_

  The events support for the provider will be enabled always, making it ready to consume events from its subscribed topics.
  In order to receive events and make use of this feature, you still need to set up receiving events from the event source as before.

  _Legacy Backend System:_

  You can pass the `EventsService` instance to the factory method as one of its options:

  ```diff
    // packages/backend/src/plugins/catalog.ts
    const githubOrgProvider = GithubOrgEntityProvider.fromConfig(env.config, {
      events: env.events,
      // ...
    });
  - env.eventBroker.subscribe(githubOrgProvider);
  ```

  ```diff
    // packages/backend/src/plugins/catalog.ts
    const githubMultiOrgProvider = GithubMultiOrgEntityProvider.fromConfig(env.config, {
      events: env.events,
      // ...
    });
  - env.eventBroker.subscribe(githubMultiOrgProvider);
  ```

- [`bcf55d5`](https://github.com/backstage/backstage/commit/bcf55d5): Support EventsService and events with the new backend system (through EventsService).

  _New/Current Backend System:_

  The events support for the provider will be enabled always, making it ready to consume events from its subscribed topics.
  In order to receive events and make use of this feature, you still need to set up receiving events from the event source as before.

  _Legacy Backend System:_

  You can pass the `EventsService` instance to the factory method as one of its options:

  ```diff
    // packages/backend/src/plugins/catalog.ts
    const githubProvider = GithubEntityProvider.fromConfig(env.config, {
  +   events: env.events,
      logger: env.logger,
      scheduler: env.scheduler,
    });
  - env.eventBroker.subscribe(githubProvider);
  ```

- [`0fb419b`](https://github.com/backstage/backstage/commit/0fb419b): Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- [`9eab52a`](https://github.com/backstage/backstage/commit/9eab52a): Add location analyzer when installing the module

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.3.10 → [0.4.4](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#044))

#### 0.4.3

##### Patch Changes

- [`f3e2e86`](https://github.com/backstage/backstage/commit/f3e2e86): Internal update that injects custom permissions into the catalog using its extension point

#### 0.4.2

##### Patch Changes

- [`f3e2e86`](https://github.com/backstage/backstage/commit/f3e2e86): Internal update that injects custom permissions into the catalog using its extension point

#### 0.4.1

##### Patch Changes

- [`9c7fb30`](https://github.com/backstage/backstage/commit/9c7fb30): Internal update that injects custom permissions into the catalog using its extension point

#### 0.4.0

##### Minor Changes

- [`924c1ac`](https://github.com/backstage/backstage/commit/924c1ac): **BREAKING**- the `@backstage/plugin-catalog-backend-module-unprocessed` constructor is now private, and have been moved to using the static `.create` method instead which now requires a `PermissionService` and `DiscoveryService`.

  If you're using this module in the old backend system you'll need to migrate to using the `.create` method and pass in the new required parameters in `packages/backend/src/plugins/catalog.ts`.

  No changes should be required if you're using the new backend system.

  ```diff
  -  const unprocessed = new UnprocessedEntitiesModule(
  -    await env.database.getClient(),
  -    router,
  -  );
  + const unprocessed = UnprocessedEntitiesModule.create({
  +    database: await env.database.getClient(),
  +    router,
  +    permissions: env.permissions,
  +    discovery: env.discovery,
  +  });

    unprocessed.registerRoutes();
  ```

  Adds the ability to delete an unprocessed entity from the `refresh_state` table. This change requires enabling permissions for your Backstage instance.

##### Patch Changes

- [`2bd1410`](https://github.com/backstage/backstage/commit/2bd1410): Removed unused dependencies

### `@backstage/plugin-catalog-unprocessed-entities` (0.1.8 → [0.2.3](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#023))

#### 0.2.3

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.

#### 0.2.2

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.2.1

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.2.0

##### Minor Changes

- [`924c1ac`](https://github.com/backstage/backstage/commit/924c1ac): **BREAKING**- the `@backstage/plugin-catalog-backend-module-unprocessed` constructor is now private, and have been moved to using the static `.create` method instead which now requires a `PermissionService` and `DiscoveryService`.

  If you're using this module in the old backend system you'll need to migrate to using the `.create` method and pass in the new required parameters in `packages/backend/src/plugins/catalog.ts`.

  No changes should be required if you're using the new backend system.

  ```diff
  -  const unprocessed = new UnprocessedEntitiesModule(
  -    await env.database.getClient(),
  -    router,
  -  );
  + const unprocessed = UnprocessedEntitiesModule.create({
  +    database: await env.database.getClient(),
  +    router,
  +    permissions: env.permissions,
  +    discovery: env.discovery,
  +  });

    unprocessed.registerRoutes();
  ```

  Adds the ability to delete an unprocessed entity from the `refresh_state` table. This change requires enabling permissions for your Backstage instance.

##### Patch Changes

- [`2b397fe`](https://github.com/backstage/backstage/commit/2b397fe): Added the `no-top-level-material-ui-4-imports` ESLint rule to aid with the migration to Material UI v5

### `@backstage/plugin-devtools-backend` (0.2.10 → [0.3.3](../../changelogs/@backstage/plugin-devtools-backend.md#033))

#### 0.3.3

##### Patch Changes

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`

#### 0.3.0

##### Minor Changes

- [`4dc5b48`](https://github.com/backstage/backstage/commit/4dc5b48): **BREAKING**: The `createRouter` method now requires the `discovery` service to be forwarded from the plugin environment. This is part of the migration to support new auth services.

##### Patch Changes

- [`2bd1410`](https://github.com/backstage/backstage/commit/2bd1410): Removed unused dependencies
- [`4467036`](https://github.com/backstage/backstage/commit/4467036): Allow unauthenticated access to health check endpoint.
- [`8b0026d`](https://github.com/backstage/backstage/commit/8b0026d): Removed unused `devDependencies` identified in Knip Report

### `@backstage/plugin-events-backend` (0.2.22 → [0.3.4](../../changelogs/@backstage/plugin-events-backend.md#034))

#### 0.3.4

##### Patch Changes

- [`7899e55`](https://github.com/backstage/backstage/commit/7899e55): Allow unauthenticated requests for HTTP ingress.

#### 0.3.0

##### Minor Changes

- [`c4bd794`](https://github.com/backstage/backstage/commit/c4bd794): BREAKING CHANGE: Migrate `HttpPostIngressEventPublisher` and `eventsPlugin` to use `EventsService`.

  Uses the `EventsService` instead of `EventBroker` at `HttpPostIngressEventPublisher`,
  dropping the use of `EventPublisher` including `setEventBroker(..)`.

  Now, `HttpPostIngressEventPublisher.fromConfig` requires `events: EventsService` as option.

  ```diff
    const http = HttpPostIngressEventPublisher.fromConfig({
      config: env.config,
  +   events: env.events,
      logger: env.logger,
    });
    http.bind(eventsRouter);

    // e.g. at packages/backend/src/plugins/events.ts
  - await new EventsBackend(env.logger)
  -   .setEventBroker(env.eventBroker)
  -   .addPublishers(http)
  -   .start();

    // or for other kinds of setups
  - await Promise.all(http.map(publisher => publisher.setEventBroker(eventBroker)));
  ```

  `eventsPlugin` uses the `eventsServiceRef` as dependency.
  Unsupported (and deprecated) extension point methods will throw an error to prevent unintended behavior.

  ```ts
  import { eventsServiceRef } from '@backstage/plugin-events-node';
  ```

##### Patch Changes

- [`56969b6`](https://github.com/backstage/backstage/commit/56969b6): Add new `EventsService` as well as `eventsServiceRef` for the new backend system.

  **Summary:**

  - new:
    `EventsService`, `eventsServiceRef`, `TestEventsService`
  - deprecated:
    `EventBroker`, `EventPublisher`, `EventSubscriber`, `DefaultEventBroker`, `EventsBackend`,
    most parts of `EventsExtensionPoint` (alpha),
    `TestEventBroker`, `TestEventPublisher`, `TestEventSubscriber`

  Add the `eventsServiceRef` as dependency to your backend plugins
  or backend plugin modules.

  **Details:**

  The previous implementation using the `EventsExtensionPoint` was added in the early stages
  of the new backend system and does not respect the plugin isolation.
  This made it not compatible anymore with the new backend system.

  Additionally, the previous interfaces had some room for simplification,
  supporting less exposure of internal concerns as well.

  Hereby, this change adds a new `EventsService` interface as replacement for the now deprecated `EventBroker`.
  The new interface does not require any `EventPublisher` or `EventSubscriber` interfaces anymore.
  Instead, it is expected that the `EventsService` gets passed into publishers and subscribers,
  and used internally. There is no need to expose anything of that at their own interfaces.

  Most parts of `EventsExtensionPoint` (alpha) are deprecated as well and were not usable
  (by other plugins or their modules) anyway.

  The `DefaultEventBroker` implementation is deprecated and wraps the new `DefaultEventsService` implementation.
  Optionally, an instance can be passed as argument to allow mixed setups to operate alongside.

### `@backstage/plugin-events-backend-module-aws-sqs` (0.2.16 → [0.3.3](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#033))

#### 0.3.2

##### Patch Changes

- [`81a995f`](https://github.com/backstage/backstage/commit/81a995f): Updated dependency `aws-sdk-client-mock` to `^4.0.0`.

#### 0.3.1

##### Patch Changes

- [`81a995f`](https://github.com/backstage/backstage/commit/81a995f): Updated dependency `aws-sdk-client-mock` to `^4.0.0`.

#### 0.3.0

##### Minor Changes

- [`132d672`](https://github.com/backstage/backstage/commit/132d672): BREAKING CHANGE: Migrate `AwsSqsConsumingEventPublisher` and its backend module to use `EventsService`.

  Uses the `EventsService` instead of `EventBroker` at `AwsSqsConsumingEventPublisher`,
  dropping the use of `EventPublisher` including `setEventBroker(..)`.

  Now, `AwsSqsConsumingEventPublisher.fromConfig` requires `events: EventsService` as option.

  ```diff
    const sqs = AwsSqsConsumingEventPublisher.fromConfig({
      config: env.config,
  +   events: env.events,
      logger: env.logger,
      scheduler: env.scheduler,
    });
  + await Promise.all(sqs.map(publisher => publisher.start()));

    // e.g. at packages/backend/src/plugins/events.ts
  - await new EventsBackend(env.logger)
  -   .setEventBroker(env.eventBroker)
  -   .addPublishers(sqs)
  -   .start();

    // or for other kinds of setups
  - await Promise.all(sqs.map(publisher => publisher.setEventBroker(eventBroker)));
  ```

  `eventsModuleAwsSqsConsumingEventPublisher` uses the `eventsServiceRef` as dependency,
  instead of `eventsExtensionPoint`.

### `@backstage/plugin-events-backend-module-azure` (0.1.23 → [0.2.3](../../changelogs/@backstage/plugin-events-backend-module-azure.md#023))

#### 0.2.0

##### Minor Changes

- [`eff3ca9`](https://github.com/backstage/backstage/commit/eff3ca9): BREAKING CHANGE: Migrate `EventRouter` implementations from `EventBroker` to `EventsService`.

  `EventRouter` uses the new `EventsService` instead of the `EventBroker` now,
  causing a breaking change to its signature.

  All of its extensions and implementations got adjusted accordingly.
  (`SubTopicEventRouter`, `AzureDevOpsEventRouter`, `BitbucketCloudEventRouter`,
  `GerritEventRouter`, `GithubEventRouter`, `GitlabEventRouter`)

  Required adjustments were made to all backend modules for the new backend system,
  now also making use of the `eventsServiceRef` instead of the `eventsExtensionPoint`.

  **Migration:**

  Example for implementations of `SubTopicEventRouter`:

  ```diff
    import {
      EventParams,
  +   EventsService,
      SubTopicEventRouter,
    } from '@backstage/plugin-events-node';

    export class GithubEventRouter extends SubTopicEventRouter {
  -   constructor() {
  -     super('github');
  +   constructor(options: { events: EventsService }) {
  +     super({
  +       events: options.events,
  +       topic: 'github',
  +     });
      }

  +   protected getSubscriberId(): string {
  +     return 'GithubEventRouter';
  +   }
  +
      // ...
    }
  ```

  Example for a direct extension of `EventRouter`:

  ```diff
    class MyEventRouter extends EventRouter {
  -   constructor(/* ... */) {
  +   constructor(options: {
  +     events: EventsService;
  +     // ...
  +   }) {
  -     super();
        // ...
  +     super({
  +       events: options.events,
  +       topics: topics,
  +     });
      }
  +
  +   protected getSubscriberId(): string {
  +     return 'MyEventRouter';
  +   }
  -
  -   supportsEventTopics(): string[] {
  -     return this.topics;
  -   }
    }
  ```

### `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.23 → [0.2.3](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#023))

#### 0.2.0

##### Minor Changes

- [`eff3ca9`](https://github.com/backstage/backstage/commit/eff3ca9): BREAKING CHANGE: Migrate `EventRouter` implementations from `EventBroker` to `EventsService`.

  `EventRouter` uses the new `EventsService` instead of the `EventBroker` now,
  causing a breaking change to its signature.

  All of its extensions and implementations got adjusted accordingly.
  (`SubTopicEventRouter`, `AzureDevOpsEventRouter`, `BitbucketCloudEventRouter`,
  `GerritEventRouter`, `GithubEventRouter`, `GitlabEventRouter`)

  Required adjustments were made to all backend modules for the new backend system,
  now also making use of the `eventsServiceRef` instead of the `eventsExtensionPoint`.

  **Migration:**

  Example for implementations of `SubTopicEventRouter`:

  ```diff
    import {
      EventParams,
  +   EventsService,
      SubTopicEventRouter,
    } from '@backstage/plugin-events-node';

    export class GithubEventRouter extends SubTopicEventRouter {
  -   constructor() {
  -     super('github');
  +   constructor(options: { events: EventsService }) {
  +     super({
  +       events: options.events,
  +       topic: 'github',
  +     });
      }

  +   protected getSubscriberId(): string {
  +     return 'GithubEventRouter';
  +   }
  +
      // ...
    }
  ```

  Example for a direct extension of `EventRouter`:

  ```diff
    class MyEventRouter extends EventRouter {
  -   constructor(/* ... */) {
  +   constructor(options: {
  +     events: EventsService;
  +     // ...
  +   }) {
  -     super();
        // ...
  +     super({
  +       events: options.events,
  +       topics: topics,
  +     });
      }
  +
  +   protected getSubscriberId(): string {
  +     return 'MyEventRouter';
  +   }
  -
  -   supportsEventTopics(): string[] {
  -     return this.topics;
  -   }
    }
  ```

### `@backstage/plugin-events-backend-module-gerrit` (0.1.23 → [0.2.3](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#023))

#### 0.2.0

##### Minor Changes

- [`eff3ca9`](https://github.com/backstage/backstage/commit/eff3ca9): BREAKING CHANGE: Migrate `EventRouter` implementations from `EventBroker` to `EventsService`.

  `EventRouter` uses the new `EventsService` instead of the `EventBroker` now,
  causing a breaking change to its signature.

  All of its extensions and implementations got adjusted accordingly.
  (`SubTopicEventRouter`, `AzureDevOpsEventRouter`, `BitbucketCloudEventRouter`,
  `GerritEventRouter`, `GithubEventRouter`, `GitlabEventRouter`)

  Required adjustments were made to all backend modules for the new backend system,
  now also making use of the `eventsServiceRef` instead of the `eventsExtensionPoint`.

  **Migration:**

  Example for implementations of `SubTopicEventRouter`:

  ```diff
    import {
      EventParams,
  +   EventsService,
      SubTopicEventRouter,
    } from '@backstage/plugin-events-node';

    export class GithubEventRouter extends SubTopicEventRouter {
  -   constructor() {
  -     super('github');
  +   constructor(options: { events: EventsService }) {
  +     super({
  +       events: options.events,
  +       topic: 'github',
  +     });
      }

  +   protected getSubscriberId(): string {
  +     return 'GithubEventRouter';
  +   }
  +
      // ...
    }
  ```

  Example for a direct extension of `EventRouter`:

  ```diff
    class MyEventRouter extends EventRouter {
  -   constructor(/* ... */) {
  +   constructor(options: {
  +     events: EventsService;
  +     // ...
  +   }) {
  -     super();
        // ...
  +     super({
  +       events: options.events,
  +       topics: topics,
  +     });
      }
  +
  +   protected getSubscriberId(): string {
  +     return 'MyEventRouter';
  +   }
  -
  -   supportsEventTopics(): string[] {
  -     return this.topics;
  -   }
    }
  ```

##### Patch Changes

- [`2bd1410`](https://github.com/backstage/backstage/commit/2bd1410): Removed unused dependencies

### `@backstage/plugin-events-backend-module-github` (0.1.23 → [0.2.3](../../changelogs/@backstage/plugin-events-backend-module-github.md#023))

#### 0.2.0

##### Minor Changes

- [`eff3ca9`](https://github.com/backstage/backstage/commit/eff3ca9): BREAKING CHANGE: Migrate `EventRouter` implementations from `EventBroker` to `EventsService`.

  `EventRouter` uses the new `EventsService` instead of the `EventBroker` now,
  causing a breaking change to its signature.

  All of its extensions and implementations got adjusted accordingly.
  (`SubTopicEventRouter`, `AzureDevOpsEventRouter`, `BitbucketCloudEventRouter`,
  `GerritEventRouter`, `GithubEventRouter`, `GitlabEventRouter`)

  Required adjustments were made to all backend modules for the new backend system,
  now also making use of the `eventsServiceRef` instead of the `eventsExtensionPoint`.

  **Migration:**

  Example for implementations of `SubTopicEventRouter`:

  ```diff
    import {
      EventParams,
  +   EventsService,
      SubTopicEventRouter,
    } from '@backstage/plugin-events-node';

    export class GithubEventRouter extends SubTopicEventRouter {
  -   constructor() {
  -     super('github');
  +   constructor(options: { events: EventsService }) {
  +     super({
  +       events: options.events,
  +       topic: 'github',
  +     });
      }

  +   protected getSubscriberId(): string {
  +     return 'GithubEventRouter';
  +   }
  +
      // ...
    }
  ```

  Example for a direct extension of `EventRouter`:

  ```diff
    class MyEventRouter extends EventRouter {
  -   constructor(/* ... */) {
  +   constructor(options: {
  +     events: EventsService;
  +     // ...
  +   }) {
  -     super();
        // ...
  +     super({
  +       events: options.events,
  +       topics: topics,
  +     });
      }
  +
  +   protected getSubscriberId(): string {
  +     return 'MyEventRouter';
  +   }
  -
  -   supportsEventTopics(): string[] {
  -     return this.topics;
  -   }
    }
  ```

### `@backstage/plugin-events-backend-module-gitlab` (0.1.23 → [0.2.3](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#023))

#### 0.2.0

##### Minor Changes

- [`eff3ca9`](https://github.com/backstage/backstage/commit/eff3ca9): BREAKING CHANGE: Migrate `EventRouter` implementations from `EventBroker` to `EventsService`.

  `EventRouter` uses the new `EventsService` instead of the `EventBroker` now,
  causing a breaking change to its signature.

  All of its extensions and implementations got adjusted accordingly.
  (`SubTopicEventRouter`, `AzureDevOpsEventRouter`, `BitbucketCloudEventRouter`,
  `GerritEventRouter`, `GithubEventRouter`, `GitlabEventRouter`)

  Required adjustments were made to all backend modules for the new backend system,
  now also making use of the `eventsServiceRef` instead of the `eventsExtensionPoint`.

  **Migration:**

  Example for implementations of `SubTopicEventRouter`:

  ```diff
    import {
      EventParams,
  +   EventsService,
      SubTopicEventRouter,
    } from '@backstage/plugin-events-node';

    export class GithubEventRouter extends SubTopicEventRouter {
  -   constructor() {
  -     super('github');
  +   constructor(options: { events: EventsService }) {
  +     super({
  +       events: options.events,
  +       topic: 'github',
  +     });
      }

  +   protected getSubscriberId(): string {
  +     return 'GithubEventRouter';
  +   }
  +
      // ...
    }
  ```

  Example for a direct extension of `EventRouter`:

  ```diff
    class MyEventRouter extends EventRouter {
  -   constructor(/* ... */) {
  +   constructor(options: {
  +     events: EventsService;
  +     // ...
  +   }) {
  -     super();
        // ...
  +     super({
  +       events: options.events,
  +       topics: topics,
  +     });
      }
  +
  +   protected getSubscriberId(): string {
  +     return 'MyEventRouter';
  +   }
  -
  -   supportsEventTopics(): string[] {
  -     return this.topics;
  -   }
    }
  ```

##### Patch Changes

- [`2bd1410`](https://github.com/backstage/backstage/commit/2bd1410): Removed unused dependencies

### `@backstage/plugin-events-node` (0.2.22 → [0.3.3](../../changelogs/@backstage/plugin-events-node.md#033))

#### 0.3.0

##### Minor Changes

- [`eff3ca9`](https://github.com/backstage/backstage/commit/eff3ca9): BREAKING CHANGE: Migrate `EventRouter` implementations from `EventBroker` to `EventsService`.

  `EventRouter` uses the new `EventsService` instead of the `EventBroker` now,
  causing a breaking change to its signature.

  All of its extensions and implementations got adjusted accordingly.
  (`SubTopicEventRouter`, `AzureDevOpsEventRouter`, `BitbucketCloudEventRouter`,
  `GerritEventRouter`, `GithubEventRouter`, `GitlabEventRouter`)

  Required adjustments were made to all backend modules for the new backend system,
  now also making use of the `eventsServiceRef` instead of the `eventsExtensionPoint`.

  **Migration:**

  Example for implementations of `SubTopicEventRouter`:

  ```diff
    import {
      EventParams,
  +   EventsService,
      SubTopicEventRouter,
    } from '@backstage/plugin-events-node';

    export class GithubEventRouter extends SubTopicEventRouter {
  -   constructor() {
  -     super('github');
  +   constructor(options: { events: EventsService }) {
  +     super({
  +       events: options.events,
  +       topic: 'github',
  +     });
      }

  +   protected getSubscriberId(): string {
  +     return 'GithubEventRouter';
  +   }
  +
      // ...
    }
  ```

  Example for a direct extension of `EventRouter`:

  ```diff
    class MyEventRouter extends EventRouter {
  -   constructor(/* ... */) {
  +   constructor(options: {
  +     events: EventsService;
  +     // ...
  +   }) {
  -     super();
        // ...
  +     super({
  +       events: options.events,
  +       topics: topics,
  +     });
      }
  +
  +   protected getSubscriberId(): string {
  +     return 'MyEventRouter';
  +   }
  -
  -   supportsEventTopics(): string[] {
  -     return this.topics;
  -   }
    }
  ```

##### Patch Changes

- [`56969b6`](https://github.com/backstage/backstage/commit/56969b6): Add new `EventsService` as well as `eventsServiceRef` for the new backend system.

  **Summary:**

  - new:
    `EventsService`, `eventsServiceRef`, `TestEventsService`
  - deprecated:
    `EventBroker`, `EventPublisher`, `EventSubscriber`, `DefaultEventBroker`, `EventsBackend`,
    most parts of `EventsExtensionPoint` (alpha),
    `TestEventBroker`, `TestEventPublisher`, `TestEventSubscriber`

  Add the `eventsServiceRef` as dependency to your backend plugins
  or backend plugin modules.

  **Details:**

  The previous implementation using the `EventsExtensionPoint` was added in the early stages
  of the new backend system and does not respect the plugin isolation.
  This made it not compatible anymore with the new backend system.

  Additionally, the previous interfaces had some room for simplification,
  supporting less exposure of internal concerns as well.

  Hereby, this change adds a new `EventsService` interface as replacement for the now deprecated `EventBroker`.
  The new interface does not require any `EventPublisher` or `EventSubscriber` interfaces anymore.
  Instead, it is expected that the `EventsService` gets passed into publishers and subscribers,
  and used internally. There is no need to expose anything of that at their own interfaces.

  Most parts of `EventsExtensionPoint` (alpha) are deprecated as well and were not usable
  (by other plugins or their modules) anyway.

  The `DefaultEventBroker` implementation is deprecated and wraps the new `DefaultEventsService` implementation.
  Optionally, an instance can be passed as argument to allow mixed setups to operate alongside.

### `@backstage/plugin-jenkins-backend` (0.3.7 → [0.4.5](../../changelogs/@backstage/plugin-jenkins-backend.md#045))

#### 0.4.5

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.4.4

##### Patch Changes

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`

#### 0.4.3

##### Patch Changes

- [`836247c`](https://github.com/backstage/backstage/commit/836247c): Fixed an issue where the `httpAuth` service turned out to be undefined

#### 0.4.0

##### Minor Changes

- [`55191cc`](https://github.com/backstage/backstage/commit/55191cc): **BREAKING**: Both `createRouter` and `DefaultJenkinsInfoProvider.fromConfig` now require the `discovery` service to be forwarded from the plugin environment. This is part of the migration to support new auth services.

  The `JenkinsInfoProvider` interface has been updated to receive `credentials` of the type `BackstageCredentials` rather than a token.

##### Patch Changes

- [`2bd1410`](https://github.com/backstage/backstage/commit/2bd1410): Removed unused dependencies

### `@backstage/plugin-kubernetes-backend` (0.15.3 → [0.17.0](../../changelogs/@backstage/plugin-kubernetes-backend.md#0170))

#### 0.17.0

##### Minor Changes

- [`6c19c14`](https://github.com/backstage/backstage/commit/6c19c14): **BREAKING**: `KubernetesProxy` now requires the `DiscoveryService` to be passed to the constuctor
- [`5dd8177`](https://github.com/backstage/backstage/commit/5dd8177): **BREAKING** Winston logger has been replaced with `LoggerService`

##### Patch Changes

- [`f5cec55`](https://github.com/backstage/backstage/commit/f5cec55): Fixing issue where `BackstageCredentials` were not properly forwarded for all calls
- [`dd269e9`](https://github.com/backstage/backstage/commit/dd269e9): Fixed a bug where the proxy handler did not properly handle a missing header
- [`9d89aed`](https://github.com/backstage/backstage/commit/9d89aed): Fixed a crash reading `credentials` from `undefined`.
- [`e5a2ccc`](https://github.com/backstage/backstage/commit/e5a2ccc): Updated dependency `@types/http-proxy-middleware` to `^1.0.0`.

#### 0.16.3

##### Patch Changes

- [`9b1abac`](https://github.com/backstage/backstage/commit/9b1abac): Added a new service locator `CatalogRelationServiceLocator` that only returns clusters an entity lists in `relations.dependsOn`.

#### 0.16.2

##### Patch Changes

- [`9b1abac`](https://github.com/backstage/backstage/commit/9b1abac): Added a new service locator `CatalogRelationServiceLocator` that only returns clusters an entity lists in `relations.dependsOn`.

#### 0.16.0

##### Minor Changes

- [`e1e540c`](https://github.com/backstage/backstage/commit/e1e540c): **BREAKING**: The `KubernetesBuilder.createBuilder` method now requires the `discovery` service to be forwarded from the plugin environment. This is part of the migration to support new auth services.

##### Patch Changes

- [`b9a0888`](https://github.com/backstage/backstage/commit/b9a0888): Fixed a bug in the proxy endpoint. Now when the `serviceAccount` strategy is used and no `serviceAccountToken` has been provided, the proxy endpoint assumes backstage is running on Kubernetes and gets the URL and CA from the Pod instance.
- [`69d0217`](https://github.com/backstage/backstage/commit/69d0217): Pass user credentials when calling catalog get entities api.

### `@backstage/plugin-lighthouse-backend` (0.4.5 → [0.4.11](../../changelogs/@backstage/plugin-lighthouse-backend.md#0411))

#### 0.4.11

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.4.10

##### Patch Changes

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`

#### 0.4.6

##### Patch Changes

- [`9f9ba70`](https://github.com/backstage/backstage/commit/9f9ba70): **BREAKING**: The `createScheduler` function now requires the `discovery` service to be forwarded from the plugin environment. This is part of the migration to support new auth services.

### `@backstage/plugin-notifications-backend` (0.0.4 → [0.2.0](../../changelogs/@backstage/plugin-notifications-backend.md#020))

#### 0.2.0

##### Minor Changes

- [`939b4ec`](https://github.com/backstage/backstage/commit/939b4ec): Notifications-backend URL query parameter changed from `minimal_severity` to `minimumSeverity`.
- [`ec40998`](https://github.com/backstage/backstage/commit/ec40998): On the Notifications page, the user can trigger "Save" or "Mark as read" actions once for multiple selected notifications.

##### Patch Changes

- [`0d99528`](https://github.com/backstage/backstage/commit/0d99528): Notification processor functions are now renamed to `preProcess` and `postProcess`.
  Additionally, processor name is now required to be returned by `getName`.
  A new processor functionality `processOptions` was added to process options before sending the notification.
- [`e003e0e`](https://github.com/backstage/backstage/commit/e003e0e): The ordered list of notifications' severities is exported by notifications-common for reusability.
- [`9a41a7b`](https://github.com/backstage/backstage/commit/9a41a7b): Migrate signals and notifications to the new backend in local development
- [`9987066`](https://github.com/backstage/backstage/commit/9987066): fix: retrieve relations and children when mapping group entities for notifications
- [`6206039`](https://github.com/backstage/backstage/commit/6206039): Fix entity owner resolution in notifications

#### 0.1.0

##### Minor Changes

- [`6e6d096`](https://github.com/backstage/backstage/commit/6e6d096): notifications can be newly sorted by list of predefined options
- [`cd96173`](https://github.com/backstage/backstage/commit/cd96173): Notifications-backend URL query parameters changed from `sort/sortOrder` to `orderField` and `created_after` to `createdAfter` to unify with other plugins.
- [`07abfe1`](https://github.com/backstage/backstage/commit/07abfe1): The NotificationsPage newly uses pagination implemented on the backend layer to avoid large dataset transfers
- [`daf85dc`](https://github.com/backstage/backstage/commit/daf85dc): BREAKING CHANGE: Migrates signals to use the `EventsService` and makes it mandatory
- [`758f2a4`](https://github.com/backstage/backstage/commit/758f2a4): The Notifications frontend has been redesigned towards list view with condensed row details. The 'done' attribute has been removed to keep the Notifications aligned with the idea of a messaging system instead of a task manager.

##### Patch Changes

- [`ba14c0e`](https://github.com/backstage/backstage/commit/ba14c0e): Support for broadcast notifications
- [`dff7a7e`](https://github.com/backstage/backstage/commit/dff7a7e): All notifications can be marked and filtered by severity critical, high, normal or low, the default is 'normal'
- [`4467036`](https://github.com/backstage/backstage/commit/4467036): Allow unauthenticated access to health check endpoint.
- [`6c1547a`](https://github.com/backstage/backstage/commit/6c1547a): **BREAKING** Type definition added to signal recipients

  Update to use `{type: 'broadcast'}` instead `null` and `{type: 'user', entityRef: ''}`
  instead string entity references

- [`75f2d84`](https://github.com/backstage/backstage/commit/75f2d84): the user can newly mark notifications as "Saved" for their better visibility in the future
- [`a790a3d`](https://github.com/backstage/backstage/commit/a790a3d): Move notification origin resolving to backend with new auth
- [`5d9c5ba`](https://github.com/backstage/backstage/commit/5d9c5ba): The Notifications can be newly filtered based on the Created Date.
- [`0fb419b`](https://github.com/backstage/backstage/commit/0fb419b): Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- [`84af361`](https://github.com/backstage/backstage/commit/84af361): Migrated to using the new auth services.
- [`6d84ee6`](https://github.com/backstage/backstage/commit/6d84ee6): Changed to use the refactored signal service naming

### `@backstage/plugin-signals-backend` (0.0.4 → [0.1.3](../../changelogs/@backstage/plugin-signals-backend.md#013))

#### 0.1.3

##### Patch Changes

- [`5f9877b`](https://github.com/backstage/backstage/commit/5f9877b): Fix unauthorized signals connection by allowing unauthenticated requests
- [`9a41a7b`](https://github.com/backstage/backstage/commit/9a41a7b): Migrate signals and notifications to the new backend in local development

#### 0.1.0

##### Minor Changes

- [`6c1547a`](https://github.com/backstage/backstage/commit/6c1547a): **BREAKING** Type definition added to signal recipients

  Update to use `{type: 'broadcast'}` instead `null` and `{type: 'user', entityRef: ''}`
  instead string entity references

- [`daf85dc`](https://github.com/backstage/backstage/commit/daf85dc): BREAKING CHANGE: Migrates signals to use the `EventsService` and makes it mandatory

##### Patch Changes

- [`4467036`](https://github.com/backstage/backstage/commit/4467036): Allow unauthenticated access to health check endpoint.
- [`0fb419b`](https://github.com/backstage/backstage/commit/0fb419b): Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- [`6d84ee6`](https://github.com/backstage/backstage/commit/6d84ee6): Changed to use the refactored signal service naming
- [`df45710`](https://github.com/backstage/backstage/commit/df45710): Improved error logging and fixed authentication

### `@backstage/plugin-signals-node` (0.0.4 → [0.1.3](../../changelogs/@backstage/plugin-signals-node.md#013))

#### 0.1.0

##### Minor Changes

- [`6c1547a`](https://github.com/backstage/backstage/commit/6c1547a): **BREAKING** Type definition added to signal recipients

  Update to use `{type: 'broadcast'}` instead `null` and `{type: 'user', entityRef: ''}`
  instead string entity references

- [`daf85dc`](https://github.com/backstage/backstage/commit/daf85dc): BREAKING CHANGE: Migrates signals to use the `EventsService` and makes it mandatory

##### Patch Changes

- [`6d84ee6`](https://github.com/backstage/backstage/commit/6d84ee6): Renamed `SignalService` to `SignalsService` and `signalService` to `signalServiceRef`
  to follow the naming scheme of services and their references
- [`0fb419b`](https://github.com/backstage/backstage/commit/0fb419b): Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/plugin-tech-insights-node` (0.4.19 → [0.6.1](../../changelogs/@backstage/plugin-tech-insights-node.md#061))

#### 0.6.1

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.6.0

##### Minor Changes

- [`5dd8177`](https://github.com/backstage/backstage/commit/5dd8177): **BREAKING** Winston logger has been replaced with `LoggerService`

#### 0.5.0

##### Minor Changes

- [`d621468`](https://github.com/backstage/backstage/commit/d621468): **BREAKING**: The `FactRetrieverContext` type now contains an additional `auth` field.

## Major version bumps

### `@backstage/plugin-dynatrace` (9.0.0 → [10.0.4](../../changelogs/@backstage/plugin-dynatrace.md#1004))

#### 10.0.4

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 10.0.3

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 10.0.2

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 10.0.1

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 10.0.0

##### Patch Changes

- [`e550b2b`](https://github.com/backstage/backstage/commit/e550b2b): Adjusted MUI imports for better tree shaking

## 0.x minor version bumps

### `@backstage/plugin-apollo-explorer` (0.1.20 → [0.2.1](../../changelogs/@backstage/plugin-apollo-explorer.md#021))

#### 0.2.1

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.2.0

##### Minor Changes

- [`c664b15`](https://github.com/backstage/backstage/commit/c664b15): feat(apollo-explorer): allow callbacks using apiholder

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.1.21

##### Patch Changes

- [`bb9e31e`](https://github.com/backstage/backstage/commit/bb9e31e): Added an optional ESLint rule - no-top-level-material-ui-4-imports -in apollo-explorer plugin which has an auto fix function to migrate the imports and used it to migrate the Material UI imports for plugins/apollo-explorer.

### `@backstage/plugin-azure-devops-backend` (0.5.5 → [0.6.5](../../changelogs/@backstage/plugin-azure-devops-backend.md#065))

#### 0.6.5

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.6.4

##### Patch Changes

- [`95b0573`](https://github.com/backstage/backstage/commit/95b0573): `getAllTeams` now accepts an optional `limit` parameter which can be used to return more than the default limit of 100 teams from the Azure DevOps API

  `pullRequestOptions` have been equipped with `teamsLimit` so that the property can be used with `getAllTeams`

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`
- [`c7c4053`](https://github.com/backstage/backstage/commit/c7c4053): Fixed a bug where the `azureDevOps.token` was not truly optional

#### 0.6.0

##### Minor Changes

- [`9fdb86a`](https://github.com/backstage/backstage/commit/9fdb86a): Ability to fetch the README file from a different Azure DevOps path.

  Defaults to the current, Azure DevOps default behaviour (`README.md` in the root of the git repo); to use a different path, add the annotation `dev.azure.com/readme-path`

  Example:

  ```yaml
  dev.azure.com/readme-path: /my-path/README.md
  ```

- [`3270b1b`](https://github.com/backstage/backstage/commit/3270b1b): Azure DevOps plugin is now integrated with permission framework for its core features, see the https://github.com/backstage/backstage/blob/master/plugins/azure-devops/README.md#permission-framework for more details.

##### Patch Changes

- [`4467036`](https://github.com/backstage/backstage/commit/4467036): Allow unauthenticated access to health check endpoint.
- [`2f77e24`](https://github.com/backstage/backstage/commit/2f77e24): The `azureDevOps` configuration section is now optional and the `azureDevOps.token` has been deprecated. Use `integrations.azure` instead, see the [Azure DevOps Locations](https://backstage.io/docs/integrations/azure/locations) documentation for more details.

### `@backstage/plugin-azure-devops-common` (0.3.2 → [0.4.2](../../changelogs/@backstage/plugin-azure-devops-common.md#042))

#### 0.4.2

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.4.1

##### Patch Changes

- [`95b0573`](https://github.com/backstage/backstage/commit/95b0573): `getAllTeams` now accepts an optional `limit` parameter which can be used to return more than the default limit of 100 teams from the Azure DevOps API

  `pullRequestOptions` have been equipped with `teamsLimit` so that the property can be used with `getAllTeams`

#### 0.4.0

##### Minor Changes

- [`9fdb86a`](https://github.com/backstage/backstage/commit/9fdb86a): Ability to fetch the README file from a different Azure DevOps path.

  Defaults to the current, Azure DevOps default behaviour (`README.md` in the root of the git repo); to use a different path, add the annotation `dev.azure.com/readme-path`

  Example:

  ```yaml
  dev.azure.com/readme-path: /my-path/README.md
  ```

##### Patch Changes

- [`3270b1b`](https://github.com/backstage/backstage/commit/3270b1b): Azure DevOps plugin is now integrated with permission framework for its core features, see the https://github.com/backstage/backstage/blob/master/plugins/azure-devops/README.md#permission-framework for more details.

### `@backstage/plugin-badges-backend` (0.3.10 → [0.4.1](../../changelogs/@backstage/plugin-badges-backend.md#041))

#### 0.4.1

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.4.0

##### Minor Changes

- [`88d4769`](https://github.com/backstage/backstage/commit/88d4769): Fix unauthorized requests by allowing unauthenticated requests.

##### Patch Changes

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`

#### 0.3.11

##### Patch Changes

- [`29a1f91`](https://github.com/backstage/backstage/commit/29a1f91): Migrated to support new auth services.

### `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.1.6 → [0.2.0](../../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#020))

#### 0.2.0

##### Minor Changes

- [`2e2167a`](https://github.com/backstage/backstage/commit/2e2167a): The name and title of the returned openapi doc entity are now configurable

##### Patch Changes

- [`58763e8`](https://github.com/backstage/backstage/commit/58763e8): Use direct access of openapi.json files and not external route

#### 0.1.7

##### Patch Changes

- [`2bd1410`](https://github.com/backstage/backstage/commit/2bd1410): Removed unused dependencies
- [`43a9ae1`](https://github.com/backstage/backstage/commit/43a9ae1): Migrated to use new auth service.

### `@backstage/plugin-cloudbuild` (0.4.0 → [0.5.2](../../changelogs/@backstage/plugin-cloudbuild.md#052))

#### 0.5.2

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.5.1

##### Patch Changes

- [`4be6335`](https://github.com/backstage/backstage/commit/4be6335): Changed the column that serves as a hyperlink from SOURCE to BUILD.
- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.5.0

##### Minor Changes

- [`5a78b73`](https://github.com/backstage/backstage/commit/5a78b73): Added a new column to `EntityCloudbuildContent` displaying the trigger name for each build.

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.4.2

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.4.1

##### Patch Changes

- [`7a5e933`](https://github.com/backstage/backstage/commit/7a5e933): Added an optional ESLint rule - no-top-level-material-ui-4-imports -in cloudbuild plugin which has an auto fix function to migrate the imports and used it to migrate the Material UI imports for plugins/cloudbuild.

### `@backstage/plugin-github-issues` (0.2.19 → [0.4.2](../../changelogs/@backstage/plugin-github-issues.md#042))

#### 0.4.2

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.4.1

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.4.0

##### Minor Changes

- [`bc97524`](https://github.com/backstage/backstage/commit/bc97524): Added ESLint rule `no-top-level-material-ui-4-imports` in the `github-issues` plugin to migrate the Material UI imports.

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.3.0

##### Minor Changes

- [`bc97524`](https://github.com/backstage/backstage/commit/bc97524): Added ESLint rule `no-top-level-material-ui-4-imports` in the `github-issues` plugin to migrate the Material UI imports.

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-github-pull-requests-board` (0.1.24 → [0.2.1](../../changelogs/@backstage/plugin-github-pull-requests-board.md#021))

#### 0.2.1

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.2.0

##### Minor Changes

- [`c6cafe6`](https://github.com/backstage/backstage/commit/c6cafe6): Fixed bug in CardHeader not expecting commit status as an array as returned by GraphQL

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.
- [`617faf0`](https://github.com/backstage/backstage/commit/617faf0): Handle null values returned from GitHub for the statusCheckRollup value on the commit object

#### 0.1.25

##### Patch Changes

- [`3c2d7c0`](https://github.com/backstage/backstage/commit/3c2d7c0): The `CardHeader` component in the `github-pull-requests-board` plugin will show the status for the PR
- [`402d991`](https://github.com/backstage/backstage/commit/402d991): Align `p-limit` dependency version to v3

### `@backstage/plugin-home` (0.6.2 → [0.7.3](../../changelogs/@backstage/plugin-home.md#073))

#### 0.7.3

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.7.2

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.7.1

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.7.0

##### Minor Changes

- [`8807d2a`](https://github.com/backstage/backstage/commit/8807d2a): Resolved styling inconsistencies and title visibility issues in Top Visited and Recently Visited cards

##### Patch Changes

- [`0cecb09`](https://github.com/backstage/backstage/commit/0cecb09): Updated dependency `@rjsf/utils` to `5.17.1`.
  Updated dependency `@rjsf/core` to `5.17.1`.
  Updated dependency `@rjsf/material-ui` to `5.17.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.17.1`.
- [`2e17681`](https://github.com/backstage/backstage/commit/2e17681): Added the `no-top-level-material-ui-4-imports` ESLint rule to aid with the migration to Material UI v5

### `@backstage/plugin-notifications` (0.0.1 → [0.2.0](../../changelogs/@backstage/plugin-notifications.md#020))

#### 0.2.0

##### Minor Changes

- [`939b4ec`](https://github.com/backstage/backstage/commit/939b4ec): Notifications-backend URL query parameter changed from `minimal_severity` to `minimumSeverity`.
- [`ec40998`](https://github.com/backstage/backstage/commit/ec40998): On the Notifications page, the user can trigger "Save" or "Mark as read" actions once for multiple selected notifications.

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`9a41a7b`](https://github.com/backstage/backstage/commit/9a41a7b): Migrate signals and notifications to the new backend in local development
- [`939b4ec`](https://github.com/backstage/backstage/commit/939b4ec): The severity icons now get their colors from the theme.

#### 0.1.2

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library
- [`6a2fe4b`](https://github.com/backstage/backstage/commit/6a2fe4b): Added ESLint rule `no-top-level-material-ui-4-imports` in the `notifications` plugin to migrate the Material UI imports.

#### 0.1.1

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library
- [`6a2fe4b`](https://github.com/backstage/backstage/commit/6a2fe4b): Added ESLint rule `no-top-level-material-ui-4-imports` in the `notifications` plugin to migrate the Material UI imports.

#### 0.1.0

##### Minor Changes

- [`6e6d096`](https://github.com/backstage/backstage/commit/6e6d096): notifications can be newly sorted by list of predefined options
- [`cd96173`](https://github.com/backstage/backstage/commit/cd96173): Notifications-backend URL query parameters changed from `sort/sortOrder` to `orderField` and `created_after` to `createdAfter` to unify with other plugins.
- [`07abfe1`](https://github.com/backstage/backstage/commit/07abfe1): The NotificationsPage newly uses pagination implemented on the backend layer to avoid large dataset transfers
- [`758f2a4`](https://github.com/backstage/backstage/commit/758f2a4): The Notifications frontend has been redesigned towards list view with condensed row details. The 'done' attribute has been removed to keep the Notifications aligned with the idea of a messaging system instead of a task manager.

##### Patch Changes

- [`dff7a7e`](https://github.com/backstage/backstage/commit/dff7a7e): All notifications can be marked and filtered by severity critical, high, normal or low, the default is 'normal'
- [`75f2d84`](https://github.com/backstage/backstage/commit/75f2d84): the user can newly mark notifications as "Saved" for their better visibility in the future
- [`5d9c5ba`](https://github.com/backstage/backstage/commit/5d9c5ba): The Notifications can be newly filtered based on the Created Date.

### `@backstage/plugin-notifications-node` (0.0.4 → [0.1.3](../../changelogs/@backstage/plugin-notifications-node.md#013))

#### 0.1.3

##### Patch Changes

- [`0d99528`](https://github.com/backstage/backstage/commit/0d99528): Notification processor functions are now renamed to `preProcess` and `postProcess`.
  Additionally, processor name is now required to be returned by `getName`.
  A new processor functionality `processOptions` was added to process options before sending the notification.

#### 0.1.0

##### Minor Changes

- [`84af361`](https://github.com/backstage/backstage/commit/84af361): Migrated to using the new auth services.

##### Patch Changes

- [`ba14c0e`](https://github.com/backstage/backstage/commit/ba14c0e): Support for broadcast notifications
- [`a790a3d`](https://github.com/backstage/backstage/commit/a790a3d): Move notification origin resolving to backend with new auth
- [`0fb419b`](https://github.com/backstage/backstage/commit/0fb419b): Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.2.16 → [0.3.3](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#033))

#### 0.3.3

##### Patch Changes

- [`aa514d1`](https://github.com/backstage/backstage/commit/aa514d1): Add examples for `publish:gitlab:merge-request` scaffolder action & improve related tests
- [`52f40ea`](https://github.com/backstage/backstage/commit/52f40ea): Add examples for `gitlab:group:ensureExists` scaffolder action & improve related tests
- [`33f958a`](https://github.com/backstage/backstage/commit/33f958a): Improve examples to ensure consistency across all publish actions
- [`d112225`](https://github.com/backstage/backstage/commit/d112225): Add examples for `gitlab:projectDeployToken:create` scaffolder action & improve related tests

#### 0.3.0

##### Minor Changes

- [`6bfb7b1`](https://github.com/backstage/backstage/commit/6bfb7b1): Output the `iid` as `issuesIid` from the `gitlab:issues:create` action

##### Patch Changes

- [`f44589d`](https://github.com/backstage/backstage/commit/f44589d): Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.34 → [0.3.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#030))

#### 0.3.0

##### Minor Changes

- [`fae9638`](https://github.com/backstage/backstage/commit/fae9638): Add examples for `run:yeoman` scaffolder action.

#### 0.2.35

##### Patch Changes

- [`f44589d`](https://github.com/backstage/backstage/commit/f44589d): Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

### `@backstage/plugin-scaffolder-node` (0.3.3 → [0.4.3](../../changelogs/@backstage/plugin-scaffolder-node.md#043))

#### 0.4.0

##### Minor Changes

- [`02ee466`](https://github.com/backstage/backstage/commit/02ee466): **DEPRECATION** - Deprecated the `logStream` in the `ActionContext`. Please move to using `ctx.logger.x` instead.
- [`aa543c9`](https://github.com/backstage/backstage/commit/aa543c9): Update task context type to contain the new auth initiator credentials.

##### Patch Changes

- [`85f4723`](https://github.com/backstage/backstage/commit/85f4723): Fixed file corruption for non UTF-8 data in fetch contents
- [`984abfa`](https://github.com/backstage/backstage/commit/984abfa): Fixing the lost of the initial state after a task recovery.
- [`c6b132e`](https://github.com/backstage/backstage/commit/c6b132e): Introducing checkpoints for scaffolder task action idempotency
- [`bbd1fe1`](https://github.com/backstage/backstage/commit/bbd1fe1): Made "checkpoint" on scaffolder action context non-optional

### `@backstage/plugin-tech-radar` (0.6.13 → [0.7.4](../../changelogs/@backstage/plugin-tech-radar.md#074))

#### 0.7.4

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.7.3

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.7.2

##### Patch Changes

- [`89b093f`](https://github.com/backstage/backstage/commit/89b093f): Added ESLint rule `no-top-level-material-ui-4-imports` in the `tech-radar` plugin to migrate the Material UI imports.
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.7.1

##### Patch Changes

- [`89b093f`](https://github.com/backstage/backstage/commit/89b093f): Added ESLint rule `no-top-level-material-ui-4-imports` in the `tech-radar` plugin to migrate the Material UI imports.
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.7.0

##### Minor Changes

- [`0453619`](https://github.com/backstage/backstage/commit/0453619): Fixed example snippet in `README.md` to reflect correct timeline item order.

##### Patch Changes

- [`a2327ac`](https://github.com/backstage/backstage/commit/a2327ac): Fixed an issue with the "moved in direction" table header cell getting squished and becoming unreadable if a timeline description is too long

### `@backstage/repo-tools` (0.6.3 → [0.8.0](../../changelogs/@backstage/repo-tools.md#080))

#### 0.8.0

##### Minor Changes

- [`2bd291e`](https://github.com/backstage/backstage/commit/2bd291e): Adds a lint rule to `repo schema openapi lint` to enforce `allowReserved` for all parameters. To fix this, simply add `allowReserved: true` to your parameters, like so

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

- [`cfdc5e7`](https://github.com/backstage/backstage/commit/cfdc5e7): Adds two new commands, `repo schema openapi fuzz` and `package schema openapi fuzz` for fuzzing your plugins documented with OpenAPI. This can help find bugs in your application code through the use of auto-generated schema-compliant inputs. For more information on the underlying library this leverages, take a look at [the docs](https://schemathesis.readthedocs.io/en/stable/index.html).

#### 0.7.0

##### Minor Changes

- [`8bfcc50`](https://github.com/backstage/backstage/commit/8bfcc50): Fix knip-report command to send 1 exit status in case of fail

##### Patch Changes

- [`999224f`](https://github.com/backstage/backstage/commit/999224f): Bump dependency `minimatch` to v9
- [`1bd4596`](https://github.com/backstage/backstage/commit/1bd4596): Removed the `ts-node` dev dependency.

## 0.0.x patch version bumps

### `@backstage/plugin-explore-backend` (0.0.23 → [0.0.28](../../changelogs/@backstage/plugin-explore-backend.md#0028))

#### 0.0.28

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.0.27

##### Patch Changes

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`

### `@backstage/plugin-explore-common` (0.0.2 → [0.0.3](../../changelogs/@backstage/plugin-explore-common.md#003))

#### 0.0.3

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-explore-react` (0.0.36 → [0.0.39](../../changelogs/@backstage/plugin-explore-react.md#0039))

#### 0.0.39

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.0.38

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-kubernetes-cluster` (0.0.6 → [0.0.10](../../changelogs/@backstage/plugin-kubernetes-cluster.md#0010))

#### 0.0.10

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.0.9

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library
- [`1c1140e`](https://github.com/backstage/backstage/commit/1c1140e): Added ESLint rule `no-top-level-material-ui-4-imports` in the `kubernetes-cluster` plugin to migrate the Material UI imports.

#### 0.0.8

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library
- [`1c1140e`](https://github.com/backstage/backstage/commit/1c1140e): Added ESLint rule `no-top-level-material-ui-4-imports` in the `kubernetes-cluster` plugin to migrate the Material UI imports.

### `@backstage/plugin-notifications-common` (0.0.1 → [0.0.3](../../changelogs/@backstage/plugin-notifications-common.md#003))

#### 0.0.3

##### Patch Changes

- [`0d99528`](https://github.com/backstage/backstage/commit/0d99528): Notification processor functions are now renamed to `preProcess` and `postProcess`.
  Additionally, processor name is now required to be returned by `getName`.
  A new processor functionality `processOptions` was added to process options before sending the notification.
- [`e003e0e`](https://github.com/backstage/backstage/commit/e003e0e): The ordered list of notifications' severities is exported by notifications-common for reusability.

#### 0.0.2

##### Patch Changes

- [`ba14c0e`](https://github.com/backstage/backstage/commit/ba14c0e): Support for broadcast notifications
- [`a790a3d`](https://github.com/backstage/backstage/commit/a790a3d): Move notification origin resolving to backend with new auth
- [`758f2a4`](https://github.com/backstage/backstage/commit/758f2a4): The Notifications frontend has been redesigned towards list view with condensed row details. The 'done' attribute has been removed to keep the Notifications aligned with the idea of a messaging system instead of a task manager.

### `@backstage/plugin-signals` (0.0.1 → [0.0.5](../../changelogs/@backstage/plugin-signals.md#005))

#### 0.0.5

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`9a41a7b`](https://github.com/backstage/backstage/commit/9a41a7b): Migrate signals and notifications to the new backend in local development
- [`f06458c`](https://github.com/backstage/backstage/commit/f06458c): fixed typo in docs

#### 0.0.2

##### Patch Changes

- [`0fb419b`](https://github.com/backstage/backstage/commit/0fb419b): Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- [`72df7c6`](https://github.com/backstage/backstage/commit/72df7c6): Added ESLint rule `no-top-level-material-ui-4-imports` in the `signals` plugin to migrate the Material UI imports.

### `@backstage/plugin-signals-react` (0.0.1 → [0.0.3](../../changelogs/@backstage/plugin-signals-react.md#003))

#### 0.0.3

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`f06458c`](https://github.com/backstage/backstage/commit/f06458c): fixed typo in docs

## 0.x patch version bumps

### `@backstage/backend-common` (0.21.3 → [0.21.7](../../changelogs/@backstage/backend-common.md#0217))

#### 0.21.7

##### Patch Changes

- [`007e7ea`](https://github.com/backstage/backstage/commit/007e7ea): Added placeholder for `listPublicServiceKeys()` in the `AuthService` returned by `createLegacyAuthAdapters`.
- [`00fca28`](https://github.com/backstage/backstage/commit/00fca28): Ensure that `ServerTokenManager` also reads the new `backend.auth.externalAccess` settings
- [`25ea3d2`](https://github.com/backstage/backstage/commit/25ea3d2): Minor internal restructuring
- [`e31bacc`](https://github.com/backstage/backstage/commit/e31bacc): Added `pullOptions` to `DockerContainerRunner#runContainer` method to pass down options when pulling an image.
- [`7b11422`](https://github.com/backstage/backstage/commit/7b11422): Add AWS CodeCommit URL Reader/Integration
- [`75a53b8`](https://github.com/backstage/backstage/commit/75a53b8): KubernetesContainerRunner.runContainer no longer closes the `logStream` it receives as input.

#### 0.21.6

##### Patch Changes

- [`81a995f`](https://github.com/backstage/backstage/commit/81a995f): Updated dependency `aws-sdk-client-mock` to `^4.0.0`.

#### 0.21.5

##### Patch Changes

- [`81a995f`](https://github.com/backstage/backstage/commit/81a995f): Updated dependency `aws-sdk-client-mock` to `^4.0.0`.

#### 0.21.4

##### Patch Changes

- [`7422430`](https://github.com/backstage/backstage/commit/7422430): Resolve the `basePath` before constructing the target path
- [`999224f`](https://github.com/backstage/backstage/commit/999224f): Bump dependency `minimatch` to v9
- [`e0b997c`](https://github.com/backstage/backstage/commit/e0b997c): Fix issue where `resolveSafeChildPath` path would incorrectly resolve when operating on a symlink
- [`9802004`](https://github.com/backstage/backstage/commit/9802004): Added the `UserInfoApi` as both an optional input and as an output for `createLegacyAuthAdapters`
- [`2af5354`](https://github.com/backstage/backstage/commit/2af5354): Bump dependency `jose` to v5
- [`ff40ada`](https://github.com/backstage/backstage/commit/ff40ada): Updated dependency `mysql2` to `^3.0.0`.
- [`0fb419b`](https://github.com/backstage/backstage/commit/0fb419b): Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- [`568881f`](https://github.com/backstage/backstage/commit/568881f): Updated dependency `yauzl` to `^3.0.0`.
- [`4a3d434`](https://github.com/backstage/backstage/commit/4a3d434): Added a `createLegacyAuthAdapters` function that can be used as a compatibility adapter for backend plugins who want to start using the new [`auth`](https://backstage.io/docs/backend-system/core-services/auth/) and [`httpAuth`](https://backstage.io/docs/backend-system/core-services/http-auth) services that were created as part of [BEP-0003](https://github.com/backstage/backstage/tree/master/beps/0003-auth-architecture-evolution).

  See the [Auth Service Migration tutorial](https://backstage.io/docs/tutorials/auth-service-migration) for more information on the usage of this adapter.

### `@backstage/backend-defaults` (0.2.13 → [0.2.17](../../changelogs/@backstage/backend-defaults.md#0217))

#### 0.2.14

##### Patch Changes

- [`7cbb760`](https://github.com/backstage/backstage/commit/7cbb760): Added support for the new auth services, which are now installed by default. See the [migration guide](https://backstage.io/docs/tutorials/auth-service-migration) for details.

### `@backstage/backend-dynamic-feature-service` (0.2.3 → [0.2.9](../../changelogs/@backstage/backend-dynamic-feature-service.md#029))

#### 0.2.9

##### Patch Changes

- [`82ff03e`](https://github.com/backstage/backstage/commit/82ff03e): Use `PackageRole` type explicitly

#### 0.2.4

##### Patch Changes

- [`5247909`](https://github.com/backstage/backstage/commit/5247909): Add `events: EventsService` to `LegacyPluginEnvironment`.

### `@backstage/backend-openapi-utils` (0.1.6 → [0.1.10](../../changelogs/@backstage/backend-openapi-utils.md#0110))

#### 0.1.7

##### Patch Changes

- [`85ec23e`](https://github.com/backstage/backstage/commit/85ec23e): Updated dependency `json-schema-to-ts` to `^3.0.0`.

### `@backstage/backend-plugin-api` (0.6.13 → [0.6.17](../../changelogs/@backstage/backend-plugin-api.md#0617))

#### 0.6.17

##### Patch Changes

- [`007e7ea`](https://github.com/backstage/backstage/commit/007e7ea): Added a new required `listPublicServiceKeys` to `AuthService`.
- [`54f2ac8`](https://github.com/backstage/backstage/commit/54f2ac8): Added `initialization` option to `createServiceFactory` which defines the initialization strategy for the service. The default strategy mimics the current behavior where plugin scoped services are initialized lazily by default and root scoped services are initialized eagerly.
- [`4fecffc`](https://github.com/backstage/backstage/commit/4fecffc): The credentials passed to the `issueUserCookie` method of the `HttpAuthService` are no longer required to represent a user principal.

#### 0.6.14

##### Patch Changes

- [`4a3d434`](https://github.com/backstage/backstage/commit/4a3d434): Added the new [`auth`](https://backstage.io/docs/backend-system/core-services/auth/), [`httpAuth`](https://backstage.io/docs/backend-system/core-services/http-auth), and [`userInfo`](https://backstage.io/docs/backend-system/core-services/user-info) services that were created as part of [BEP-0003](https://github.com/backstage/backstage/tree/master/beps/0003-auth-architecture-evolution) to the `coreServices`.

  At the same time, the [`httpRouter`](https://backstage.io/docs/backend-system/core-services/http-router) service gained a new `addAuthPolicy` method that lets your plugin declare exemptions to the default auth policy - for example if you want to allow unauthenticated or cookie-based access to some subset of your feature routes.

  If you have migrated to the new backend system, please see the [Auth Service Migration tutorial](https://backstage.io/docs/tutorials/auth-service-migration) for more information on how to move toward using these services.

- [`0502d82`](https://github.com/backstage/backstage/commit/0502d82): Updated the `PermissionsService` methods to accept `BackstageCredentials` through options.

### `@backstage/backend-tasks` (0.5.18 → [0.5.22](../../changelogs/@backstage/backend-tasks.md#0522))

#### 0.5.22

##### Patch Changes

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`

#### 0.5.19

##### Patch Changes

- [`0fb419b`](https://github.com/backstage/backstage/commit/0fb419b): Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/backend-test-utils` (0.3.3 → [0.3.7](../../changelogs/@backstage/backend-test-utils.md#037))

#### 0.3.7

##### Patch Changes

- [`3256f14`](https://github.com/backstage/backstage/commit/3256f14): `startTestBackend` will now add placeholder plugins when a modules are provided without their parent plugin.
- [`007e7ea`](https://github.com/backstage/backstage/commit/007e7ea): Added mock of the new `listPublicServiceKeys` method for `AuthService`.

#### 0.3.4

##### Patch Changes

- [`4a3d434`](https://github.com/backstage/backstage/commit/4a3d434): Added support for the new [`auth`](https://backstage.io/docs/backend-system/core-services/auth/) and [`httpAuth`](https://backstage.io/docs/backend-system/core-services/http-auth) services that were created as part of [BEP-0003](https://github.com/backstage/backstage/tree/master/beps/0003-auth-architecture-evolution). These services will be present by default in test apps, and you can access mocked versions of their features under `mockServices.auth` and `mockServices.httpAuth` if you want to inspect or replace their behaviors.

  There is also a new `mockCredentials` that you can use for acquiring mocks of the various types of credentials that are used in the new system.

- [`9802004`](https://github.com/backstage/backstage/commit/9802004): Added `mockServices.userInfo`, which now also automatically is made available in test backends.
- [`fd61d39`](https://github.com/backstage/backstage/commit/fd61d39): Updated dependency `testcontainers` to `^10.0.0`.
- [`ff40ada`](https://github.com/backstage/backstage/commit/ff40ada): Updated dependency `mysql2` to `^3.0.0`.
- [`0fb419b`](https://github.com/backstage/backstage/commit/0fb419b): Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/cli-node` (0.2.3 → [0.2.5](../../changelogs/@backstage/cli-node.md#025))

#### 0.2.5

##### Patch Changes

- [`ed9260f`](https://github.com/backstage/backstage/commit/ed9260f): Added `versions:migrate` command to help move packages to the new `@backstage-community` namespace

### `@backstage/codemods` (0.1.47 → [0.1.48](../../changelogs/@backstage/codemods.md#0148))

#### 0.1.48

##### Patch Changes

- [`1bd4596`](https://github.com/backstage/backstage/commit/1bd4596): Removed the `ts-node` dev dependency.

### `@backstage/core-compat-api` (0.2.0 → [0.2.4](../../changelogs/@backstage/core-compat-api.md#024))

#### 0.2.4

##### Patch Changes

- [`d05d4bd`](https://github.com/backstage/backstage/commit/d05d4bd): Moved `@backstage/core-app-api` to dev dependencies.
- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.

### `@backstage/core-components` (0.14.0 → [0.14.6](../../changelogs/@backstage/core-components.md#0146))

#### 0.14.4

##### Patch Changes

- [`ed5c901`](https://github.com/backstage/backstage/commit/ed5c901): No `undefined` class name used at `MarkdownContent` if no custom class name was provided.
- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.
- [`f546e38`](https://github.com/backstage/backstage/commit/f546e38): Added Link component in `TabUI` providing functionality like copy link or open in new tab.

#### 0.14.3

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.14.2

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.14.1

##### Patch Changes

- [`2ff3e6e`](https://github.com/backstage/backstage/commit/2ff3e6e): The translation support for the `Link` component has been removed for now, in order to avoid broad breakages of tests in existing projects where the component is tested without being wrapped in an API provider.
- [`2d06e4b`](https://github.com/backstage/backstage/commit/2d06e4b): Move the text-transform styling on BackstageTableHeader from inline styling to `withStyles` so it can be customised easier
- [`5c271fa`](https://github.com/backstage/backstage/commit/5c271fa): Removed inline styling in breadcrumbs and replaced with a theme reachable class of BreadcrumbsCurrentPage
- [`ff33ee2`](https://github.com/backstage/backstage/commit/ff33ee2): Removed hardcoded font-family on select input
- [`ff7e126`](https://github.com/backstage/backstage/commit/ff7e126): Support i18n for core components
- [`7854120`](https://github.com/backstage/backstage/commit/7854120): Create a component abstraction to consume system icons.
- [`ce73c3b`](https://github.com/backstage/backstage/commit/ce73c3b): Removed the inline color from select icon to allow it to be colored via a theme
- [`0c9d5ea`](https://github.com/backstage/backstage/commit/0c9d5ea): Updated MUI imports for core-components to not be top level
- [`90d08b0`](https://github.com/backstage/backstage/commit/90d08b0): Updated dependency `react-idle-timer` to `5.7.2`.
- [`a8f7904`](https://github.com/backstage/backstage/commit/a8f7904): `SignInPage`'s `'guest'` provider now supports the `@backstage/plugin-auth-backend-module-guest-provider` package to generate tokens. It will continue to use the old frontend-only auth as a fallback.
- [`0a8a1e9`](https://github.com/backstage/backstage/commit/0a8a1e9): Fix a spacing issue for the SidebarSubmenu in case a SidebarScrollWrapper is used that made it hard to reach the SidebarSubmenu
- [`aa1c88d`](https://github.com/backstage/backstage/commit/aa1c88d): Deprecate the `customStyles` prop for the `Avatar` component in favour of the `classes` prop.

### `@backstage/create-app` (0.5.11 → [0.5.14](../../changelogs/@backstage/create-app.md#0514))

#### 0.5.14

##### Patch Changes

- [`366cf07`](https://github.com/backstage/backstage/commit/366cf07): Bumped create-app version.
- [`036b9b3`](https://github.com/backstage/backstage/commit/036b9b3): Bumped create-app version.
- [`2e1218c`](https://github.com/backstage/backstage/commit/2e1218c): Fix docs reference

#### 0.5.13

##### Patch Changes

- Bumped create-app version.

#### 0.5.12

##### Patch Changes

- [`4cca80f`](https://github.com/backstage/backstage/commit/4cca80f): Bumped create-app version.
- [`8db51ca`](https://github.com/backstage/backstage/commit/8db51ca): Bumped create-app version.
- [`778bc48`](https://github.com/backstage/backstage/commit/778bc48): Bumped create-app version.
- [`1bd4596`](https://github.com/backstage/backstage/commit/1bd4596): Removed the `ts-node` dev dependency.
- [`829a249`](https://github.com/backstage/backstage/commit/829a249): Migrated the backend of the create app template to use the new backend system. For information on how to migrate your existing backend, see the [migration guide](https://backstage.io/docs/backend-system/building-backends/migrating).

### `@backstage/eslint-plugin` (0.1.5 → [0.1.7](../../changelogs/@backstage/eslint-plugin.md#017))

#### 0.1.7

##### Patch Changes

- [`9ef572d`](https://github.com/backstage/backstage/commit/9ef572d): fix lint rule fixer for more than one `Component + Prop`
- [`3a7eee7`](https://github.com/backstage/backstage/commit/3a7eee7): eslint autofix for mui ThemeProvider
- [`d55828d`](https://github.com/backstage/backstage/commit/d55828d): add fixer logic for import aliases

#### 0.1.6

##### Patch Changes

- [`999224f`](https://github.com/backstage/backstage/commit/999224f): Bump dependency `minimatch` to v9

### `@backstage/frontend-app-api` (0.6.0 → [0.6.4](../../changelogs/@backstage/frontend-app-api.md#064))

#### 0.6.4

##### Patch Changes

- [`83f24f6`](https://github.com/backstage/backstage/commit/83f24f6): add `@backstage/no-top-level-material-ui-4-imports` lint rule
- [`c884b9a`](https://github.com/backstage/backstage/commit/c884b9a): The app is now aware of if it is being served from the `app-backend` with a separate public and protected bundles. When in protected mode the app will now continuously refresh the session cookie, as well as clear the cookie if the user signs out.
- [`7ef7cc8`](https://github.com/backstage/backstage/commit/7ef7cc8): Fix duplicated subpath on routes resolved by the `useRouteRef` hook.
- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.

#### 0.6.1

##### Patch Changes

- [`48d6628`](https://github.com/backstage/backstage/commit/48d6628): Add `loadingComponent` parameter to `createApp()`

### `@backstage/frontend-plugin-api` (0.6.0 → [0.6.4](../../changelogs/@backstage/frontend-plugin-api.md#064))

#### 0.6.4

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`35452b3`](https://github.com/backstage/backstage/commit/35452b3): Fixed the type for `useRouteRef`, which wasn't handling optional external route refs correctly.

### `@backstage/frontend-test-utils` (0.1.2 → [0.1.6](../../changelogs/@backstage/frontend-test-utils.md#016))

#### 0.1.6

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.

### `@backstage/integration-aws-node` (0.1.9 → [0.1.12](../../changelogs/@backstage/integration-aws-node.md#0112))

#### 0.1.12

##### Patch Changes

- [`81a995f`](https://github.com/backstage/backstage/commit/81a995f): Updated dependency `aws-sdk-client-mock` to `^4.0.0`.
- [`823cf8e`](https://github.com/backstage/backstage/commit/823cf8e): Updated dependency `aws-sdk-client-mock-jest` to `^4.0.0`.

#### 0.1.11

##### Patch Changes

- [`81a995f`](https://github.com/backstage/backstage/commit/81a995f): Updated dependency `aws-sdk-client-mock` to `^4.0.0`.
- [`823cf8e`](https://github.com/backstage/backstage/commit/823cf8e): Updated dependency `aws-sdk-client-mock-jest` to `^4.0.0`.

### `@backstage/plugin-adr` (0.6.13 → [0.6.18](../../changelogs/@backstage/plugin-adr.md#0618))

#### 0.6.18

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.6.17

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.6.16

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.6.15

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.6.14

##### Patch Changes

- [`5335634`](https://github.com/backstage/backstage/commit/5335634): Fixed Azure DevOps ADR file path reading
- [`669efc6`](https://github.com/backstage/backstage/commit/669efc6): Remove unused package dependencies
- [`38b92a0`](https://github.com/backstage/backstage/commit/38b92a0): Added ESLint rule `no-top-level-material-ui-4-imports` in the ADR plugin to migrate the Material UI imports.

### `@backstage/plugin-adr-backend` (0.4.10 → [0.4.15](../../changelogs/@backstage/plugin-adr-backend.md#0415))

#### 0.4.15

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.4.14

##### Patch Changes

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`

#### 0.4.11

##### Patch Changes

- [`334c5fe`](https://github.com/backstage/backstage/commit/334c5fe): Updated dependency `marked` to `^12.0.0`.
- [`c8fdd83`](https://github.com/backstage/backstage/commit/c8fdd83): Migrated `DefaultAdrCollatorFactory` to support new auth services.

### `@backstage/plugin-adr-common` (0.2.20 → [0.2.23](../../changelogs/@backstage/plugin-adr-common.md#0223))

#### 0.2.23

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.2.21

##### Patch Changes

- [`5335634`](https://github.com/backstage/backstage/commit/5335634): Fixed Azure DevOps ADR file path reading

### `@backstage/plugin-airbrake` (0.3.30 → [0.3.35](../../changelogs/@backstage/plugin-airbrake.md#0335))

#### 0.3.35

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.3.34

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.3.33

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.3.32

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.3.31

##### Patch Changes

- [`31d58ae`](https://github.com/backstage/backstage/commit/31d58ae): Added an optional ESLint rule - no-top-level-material-ui-4-imports - which has an auto fix function to migrate the imports and using it migrated the imports.

### `@backstage/plugin-airbrake-backend` (0.3.10 → [0.3.15](../../changelogs/@backstage/plugin-airbrake-backend.md#0315))

#### 0.3.15

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.3.14

##### Patch Changes

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`
- [`e5a2ccc`](https://github.com/backstage/backstage/commit/e5a2ccc): Updated dependency `@types/http-proxy-middleware` to `^1.0.0`.

#### 0.3.11

##### Patch Changes

- [`4467036`](https://github.com/backstage/backstage/commit/4467036): Allow unauthenticated access to health check endpoint.

### `@backstage/plugin-allure` (0.1.46 → [0.1.51](../../changelogs/@backstage/plugin-allure.md#0151))

#### 0.1.51

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.1.50

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.1.49

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.1.48

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-analytics-module-ga` (0.2.0 → [0.2.5](../../changelogs/@backstage/plugin-analytics-module-ga.md#025))

#### 0.2.5

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.2.4

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-analytics-module-ga4` (0.2.0 → [0.2.5](../../changelogs/@backstage/plugin-analytics-module-ga4.md#025))

#### 0.2.5

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.2.4

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-analytics-module-newrelic-browser` (0.1.0 → [0.1.5](../../changelogs/@backstage/plugin-analytics-module-newrelic-browser.md#015))

#### 0.1.5

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.1.4

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.

### `@backstage/plugin-apache-airflow` (0.2.20 → [0.2.25](../../changelogs/@backstage/plugin-apache-airflow.md#0225))

#### 0.2.25

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.2.24

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.2.23

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.2.22

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.2.21

##### Patch Changes

- [`161114f`](https://github.com/backstage/backstage/commit/161114f): added an optional ESLint rule - no-top-level-material-ui-4-imports - which has an auto fix function to migrate the imports and used it to migrate the imports for plugins/apache-airflow

### `@backstage/plugin-api-docs` (0.11.0 → [0.11.4](../../changelogs/@backstage/plugin-api-docs.md#0114))

#### 0.11.4

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.11.1

##### Patch Changes

- [`c60dc3b`](https://github.com/backstage/backstage/commit/c60dc3b): added an optional ESLint rule - no-top-level-material-ui-4-imports - in api-docs plugin which has an auto fix function to migrate the imports and used it to migrate the material-ui imports for plugins/api-docs
- [`7854120`](https://github.com/backstage/backstage/commit/7854120): Use the `AppIcon` component in the navigation item extension.
- [`2be27b9`](https://github.com/backstage/backstage/commit/2be27b9): Updated dependency `graphiql` to `3.1.1`.
- [`efba3d2`](https://github.com/backstage/backstage/commit/efba3d2): Updated dependency `@asyncapi/react-component` to `1.3.1`.

### `@backstage/plugin-app-backend` (0.3.61 → [0.3.65](../../changelogs/@backstage/plugin-app-backend.md#0365))

#### 0.3.65

##### Patch Changes

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`
- [`c884b9a`](https://github.com/backstage/backstage/commit/c884b9a): Track assets namespace in the cache store, implement a cookie authentication for when the public entry is enabled and used with the new auth services.

#### 0.3.62

##### Patch Changes

- [`52e43f2`](https://github.com/backstage/backstage/commit/52e43f2): Disable default auth policy, allowing unauthenticated access to app bundle.

### `@backstage/plugin-auth-backend-module-atlassian-provider` (0.1.5 → [0.1.9](../../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#019))

#### 0.1.9

##### Patch Changes

- [`269b4c1`](https://github.com/backstage/backstage/commit/269b4c1): Read scopes from config and pass to AtlassianProvider as they are required

#### 0.1.6

##### Patch Changes

- [`c511186`](https://github.com/backstage/backstage/commit/c511186): Addressed OAuth flow issue in Atlassian auth module

### `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.1.4 → [0.1.9](../../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#019))

#### 0.1.9

##### Patch Changes

- [`f286d59`](https://github.com/backstage/backstage/commit/f286d59): Added support for AWS GovCloud (US) regions
- [`30f5a51`](https://github.com/backstage/backstage/commit/30f5a51): Added `authModuleAwsAlbProvider` as a default export.

  It can now be used like this in your backend: `backend.add(import('@backstage/plugin-auth-backend-module-aws-alb-provider'));`

#### 0.1.5

##### Patch Changes

- [`2af5354`](https://github.com/backstage/backstage/commit/2af5354): Bump dependency `jose` to v5
- [`b1b012d`](https://github.com/backstage/backstage/commit/b1b012d): Fix issue with `providerInfo` not being set properly for some proxy providers, by making `providerInfo` an explicit optional return from `authenticate`

### `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.2.8 → [0.2.12](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#0212))

#### 0.2.12

##### Patch Changes

- [`e0ed31c`](https://github.com/backstage/backstage/commit/e0ed31c): Add user id annotation sign-in resolver

#### 0.2.9

##### Patch Changes

- [`38af71a`](https://github.com/backstage/backstage/commit/38af71a): Updated dependency `google-auth-library` to `^9.0.0`.
- [`b1b012d`](https://github.com/backstage/backstage/commit/b1b012d): Fix issue with `providerInfo` not being set properly for some proxy providers, by making `providerInfo` an explicit optional return from `authenticate`

### `@backstage/plugin-auth-backend-module-google-provider` (0.1.10 → [0.1.14](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#0114))

#### 0.1.11

##### Patch Changes

- [`38af71a`](https://github.com/backstage/backstage/commit/38af71a): Updated dependency `google-auth-library` to `^9.0.0`.

### `@backstage/plugin-auth-backend-module-microsoft-provider` (0.1.8 → [0.1.12](../../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#0112))

#### 0.1.9

##### Patch Changes

- [`2af5354`](https://github.com/backstage/backstage/commit/2af5354): Bump dependency `jose` to v5

### `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.1.6 → [0.1.10](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#0110))

#### 0.1.7

##### Patch Changes

- [`2af5354`](https://github.com/backstage/backstage/commit/2af5354): Bump dependency `jose` to v5
- [`e77d7a9`](https://github.com/backstage/backstage/commit/e77d7a9): Internal refactor to avoid deprecated method.
- [`b1b012d`](https://github.com/backstage/backstage/commit/b1b012d): Fix issue with `providerInfo` not being set properly for some proxy providers, by making `providerInfo` an explicit optional return from `authenticate`

### `@backstage/plugin-auth-backend-module-oidc-provider` (0.1.3 → [0.1.8](../../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#018))

#### 0.1.8

##### Patch Changes

- [`28eb473`](https://github.com/backstage/backstage/commit/28eb473): Support revoke refresh token to oidc logout function

#### 0.1.4

##### Patch Changes

- [`74b1dc9`](https://github.com/backstage/backstage/commit/74b1dc9): Increased HTTP request timeout used by OIDC authenticator.
- [`2af5354`](https://github.com/backstage/backstage/commit/2af5354): Bump dependency `jose` to v5

### `@backstage/plugin-auth-backend-module-pinniped-provider` (0.1.7 → [0.1.11](../../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#0111))

#### 0.1.8

##### Patch Changes

- [`2af5354`](https://github.com/backstage/backstage/commit/2af5354): Bump dependency `jose` to v5

### `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.1.5 → [0.1.9](../../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#019))

#### 0.1.6

##### Patch Changes

- [`2af5354`](https://github.com/backstage/backstage/commit/2af5354): Bump dependency `jose` to v5

### `@backstage/plugin-auth-node` (0.4.8 → [0.4.12](../../changelogs/@backstage/plugin-auth-node.md#0412))

#### 0.4.12

##### Patch Changes

- [`d62bc51`](https://github.com/backstage/backstage/commit/d62bc51): Add `tokenTypes` export with constants for various Backstage token types.

#### 0.4.11

##### Patch Changes

- [`038b2e6`](https://github.com/backstage/backstage/commit/038b2e6): Only consider entities of kind `User` when using `findCatalogUser` with a filter query, unless an explicit `kind` filter is provided.

#### 0.4.9

##### Patch Changes

- [`b4fc6e3`](https://github.com/backstage/backstage/commit/b4fc6e3): Deprecated the `getBearerTokenFromAuthorizationHeader` function, which is being replaced by the new `HttpAuthService`.
- [`2af5354`](https://github.com/backstage/backstage/commit/2af5354): Bump dependency `jose` to v5
- [`0fb419b`](https://github.com/backstage/backstage/commit/0fb419b): Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- [`b1b012d`](https://github.com/backstage/backstage/commit/b1b012d): Fix issue with `providerInfo` not being set properly for some proxy providers, by making `providerInfo` an explicit optional return from `authenticate`

### `@backstage/plugin-azure-sites` (0.1.19 → [0.1.24](../../changelogs/@backstage/plugin-azure-sites.md#0124))

#### 0.1.24

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.1.23

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.
- [`cdb5ffa`](https://github.com/backstage/backstage/commit/cdb5ffa): Added the `no-top-level-material-ui-4-imports` ESLint rule to aid with the migration to Material UI v5

#### 0.1.22

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.1.21

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.1.20

##### Patch Changes

- [`8679bda`](https://github.com/backstage/backstage/commit/8679bda): Modified azure table to only show loading UI on initial load. Sorted tags in table is their order from the api is indeterminate, and they would randomly shuffle on each load

### `@backstage/plugin-azure-sites-common` (0.1.2 → [0.1.4](../../changelogs/@backstage/plugin-azure-sites-common.md#014))

#### 0.1.4

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-badges` (0.2.54 → [0.2.59](../../changelogs/@backstage/plugin-badges.md#0259))

#### 0.2.59

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.2.58

##### Patch Changes

- [`93c1d9c`](https://github.com/backstage/backstage/commit/93c1d9c): Update README to fix invalid import command

#### 0.2.57

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.2.56

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.2.55

##### Patch Changes

- [`944de94`](https://github.com/backstage/backstage/commit/944de94): Added ESLint rule `no-top-level-material-ui-4-imports` to aid with the migration to Material UI v5.

### `@backstage/plugin-bazaar` (0.2.22 → [0.2.27](../../changelogs/@backstage/plugin-bazaar.md#0227))

#### 0.2.27

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.2.25

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.2.24

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.2.23

##### Patch Changes

- [`b7b0466`](https://github.com/backstage/backstage/commit/b7b0466): Remove the use of the deprecated `customStyles` for `Avatar`
- [`cb64381`](https://github.com/backstage/backstage/commit/cb64381): Added an optional ESLint rule - no-top-level-material-ui-4-imports - in bazaar plugin which has an auto fix function to migrate the imports and used it to migrate the Material UI imports for plugins/bazaar

### `@backstage/plugin-bazaar-backend` (0.3.11 → [0.3.16](../../changelogs/@backstage/plugin-bazaar-backend.md#0316))

#### 0.3.16

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.3.15

##### Patch Changes

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`

### `@backstage/plugin-bitrise` (0.1.57 → [0.1.62](../../changelogs/@backstage/plugin-bitrise.md#0162))

#### 0.1.62

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.1.61

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.1.60

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.1.59

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.1.58

##### Patch Changes

- [`afdee56`](https://github.com/backstage/backstage/commit/afdee56): Added the `no-top-level-material-ui-4-import` ESLint rule to the Bitrise plugin to aid with the migration to Material UI v5.

### `@backstage/plugin-catalog-backend-module-aws` (0.3.7 → [0.3.12](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#0312))

#### 0.3.12

##### Patch Changes

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`

#### 0.3.11

##### Patch Changes

- [`81a995f`](https://github.com/backstage/backstage/commit/81a995f): Updated dependency `aws-sdk-client-mock` to `^4.0.0`.
- [`823cf8e`](https://github.com/backstage/backstage/commit/823cf8e): Updated dependency `aws-sdk-client-mock-jest` to `^4.0.0`.

#### 0.3.10

##### Patch Changes

- [`81a995f`](https://github.com/backstage/backstage/commit/81a995f): Updated dependency `aws-sdk-client-mock` to `^4.0.0`.
- [`823cf8e`](https://github.com/backstage/backstage/commit/823cf8e): Updated dependency `aws-sdk-client-mock-jest` to `^4.0.0`.

#### 0.3.8

##### Patch Changes

- [`0fb419b`](https://github.com/backstage/backstage/commit/0fb419b): Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/plugin-catalog-backend-module-azure` (0.1.32 → [0.1.37](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0137))

#### 0.1.37

##### Patch Changes

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`

#### 0.1.33

##### Patch Changes

- [`0fb419b`](https://github.com/backstage/backstage/commit/0fb419b): Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.26 → [0.1.31](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#0131))

#### 0.1.31

##### Patch Changes

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`

#### 0.1.27

##### Patch Changes

- [`0fb419b`](https://github.com/backstage/backstage/commit/0fb419b): Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/plugin-catalog-backend-module-gcp` (0.1.13 → [0.1.18](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#0118))

#### 0.1.18

##### Patch Changes

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`

### `@backstage/plugin-catalog-backend-module-gerrit` (0.1.29 → [0.1.34](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0134))

#### 0.1.34

##### Patch Changes

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`

#### 0.1.30

##### Patch Changes

- [`0fb419b`](https://github.com/backstage/backstage/commit/0fb419b): Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/plugin-catalog-backend-module-github-org` (0.1.7 → [0.1.12](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#0112))

#### 0.1.12

##### Patch Changes

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`

#### 0.1.8

##### Patch Changes

- [`2eb0da3`](https://github.com/backstage/backstage/commit/2eb0da3): Support EventsService and events with the new backend system (through EventsService) for `GithubOrgEntityProvider` and `GithubMultiOrgEntityProvider`.

  _New/Current Backend System:_

  The events support for the provider will be enabled always, making it ready to consume events from its subscribed topics.
  In order to receive events and make use of this feature, you still need to set up receiving events from the event source as before.

  _Legacy Backend System:_

  You can pass the `EventsService` instance to the factory method as one of its options:

  ```diff
    // packages/backend/src/plugins/catalog.ts
    const githubOrgProvider = GithubOrgEntityProvider.fromConfig(env.config, {
      events: env.events,
      // ...
    });
  - env.eventBroker.subscribe(githubOrgProvider);
  ```

  ```diff
    // packages/backend/src/plugins/catalog.ts
    const githubMultiOrgProvider = GithubMultiOrgEntityProvider.fromConfig(env.config, {
      events: env.events,
      // ...
    });
  - env.eventBroker.subscribe(githubMultiOrgProvider);
  ```

### `@backstage/plugin-catalog-backend-module-gitlab` (0.3.10 → [0.3.15](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#0315))

#### 0.3.15

##### Patch Changes

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`

#### 0.3.11

##### Patch Changes

- [`0fb419b`](https://github.com/backstage/backstage/commit/0fb419b): Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- [`9f5b8bc`](https://github.com/backstage/backstage/commit/9f5b8bc): Add GitLab `visibility` to group entity annotations.

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.17 → [0.4.22](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#0422))

#### 0.4.22

##### Patch Changes

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`

#### 0.4.18

##### Patch Changes

- [`0fb419b`](https://github.com/backstage/backstage/commit/0fb419b): Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/plugin-catalog-backend-module-ldap` (0.5.28 → [0.5.33](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0533))

#### 0.5.29

##### Patch Changes

- [`4b4bbf7`](https://github.com/backstage/backstage/commit/4b4bbf7): Add TLS support to ingest GSuite LDAP data
- [`0fb419b`](https://github.com/backstage/backstage/commit/0fb419b): Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/plugin-catalog-backend-module-msgraph` (0.5.20 → [0.5.25](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#0525))

#### 0.5.25

##### Patch Changes

- [`9b6320f`](https://github.com/backstage/backstage/commit/9b6320f): Retry msgraph API calls, due to frequent ETIMEDOUT errors. Also allow disabling fetching user photos.
- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`

#### 0.5.21

##### Patch Changes

- [`0fb419b`](https://github.com/backstage/backstage/commit/0fb419b): Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/plugin-catalog-backend-module-puppetdb` (0.1.18 → [0.1.23](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0123))

#### 0.1.23

##### Patch Changes

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`

#### 0.1.19

##### Patch Changes

- [`0fb419b`](https://github.com/backstage/backstage/commit/0fb419b): Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/plugin-catalog-graph` (0.4.0 → [0.4.4](../../changelogs/@backstage/plugin-catalog-graph.md#044))

#### 0.4.4

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.4.3

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.4.2

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.4.1

##### Patch Changes

- [`d4ff0bb`](https://github.com/backstage/backstage/commit/d4ff0bb): Added the `no-top-level-material-ui-4-imports` ESLint rule to aid with the migration to Material UI v5

### `@backstage/plugin-catalog-import` (0.10.6 → [0.10.10](../../changelogs/@backstage/plugin-catalog-import.md#01010))

#### 0.10.10

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.10.9

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.10.8

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.10.7

##### Patch Changes

- [`b91a8d2`](https://github.com/backstage/backstage/commit/b91a8d2): Added the `no-top-level-material-ui-4-imports` ESLint rule to aid with the migration to Material UI v5
- [`75f686b`](https://github.com/backstage/backstage/commit/75f686b): Fixed an issue generating a wrong entity link at the end of the import process
- [`adc0414`](https://github.com/backstage/backstage/commit/adc0414): fix related to component name not adhering to kubernetes valid object name.

### `@backstage/plugin-cicd-statistics` (0.1.32 → [0.1.37](../../changelogs/@backstage/plugin-cicd-statistics.md#0137))

#### 0.1.37

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.1.36

##### Patch Changes

- [`72f0622`](https://github.com/backstage/backstage/commit/72f0622): Added the `no-top-level-material-ui-4-imports` ESLint rule to aid with the migration to Material UI v5

#### 0.1.35

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.1.34

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-cicd-statistics-module-gitlab` (0.1.26 → [0.1.31](../../changelogs/@backstage/plugin-cicd-statistics-module-gitlab.md#0131))

#### 0.1.31

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.1.27

##### Patch Changes

- [`402d991`](https://github.com/backstage/backstage/commit/402d991): Align `p-limit` dependency version to v3

### `@backstage/plugin-circleci` (0.3.30 → [0.3.35](../../changelogs/@backstage/plugin-circleci.md#0335))

#### 0.3.35

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): This package has been deprecated in favour of the [Circle-CI](https://github.com/CircleCI-Public/backstage-plugin) plugin. Please migrate to that plugin instead.

#### 0.3.33

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.3.32

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.3.31

##### Patch Changes

- [`88878a4`](https://github.com/backstage/backstage/commit/88878a4): Added an optional ESLint rule - no-top-level-material-ui-4-imports - in CircleCI plugin which has an auto fix function to migrate the imports and used it to migrate the Material UI imports for `plugins/circleci`.

### `@backstage/plugin-code-climate` (0.1.30 → [0.1.35](../../changelogs/@backstage/plugin-code-climate.md#0135))

#### 0.1.35

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.1.34

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.1.33

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.1.32

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.1.31

##### Patch Changes

- [`875c594`](https://github.com/backstage/backstage/commit/875c594): Added ESLint rule `no-top-level-material-ui-4-imports` in the Code-Climate plugin to migrate the Material UI imports.

### `@backstage/plugin-code-coverage` (0.2.23 → [0.2.28](../../changelogs/@backstage/plugin-code-coverage.md#0228))

#### 0.2.28

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.2.27

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.2.26

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.2.25

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.2.24

##### Patch Changes

- [`eca0835`](https://github.com/backstage/backstage/commit/eca0835): Added ESLint rule `no-top-level-material-ui-4-imports` in the Code-Coverage plugin to migrate the Material UI imports.

### `@backstage/plugin-code-coverage-backend` (0.2.27 → [0.2.32](../../changelogs/@backstage/plugin-code-coverage-backend.md#0232))

#### 0.2.32

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.2.31

##### Patch Changes

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`

#### 0.2.28

##### Patch Changes

- [`2bd1410`](https://github.com/backstage/backstage/commit/2bd1410): Removed unused dependencies
- [`4467036`](https://github.com/backstage/backstage/commit/4467036): Allow unauthenticated access to health check endpoint.
- [`cceebae`](https://github.com/backstage/backstage/commit/cceebae): Fix jacoco convertor to not require annotation to be set to scm-only.
- [`8efe690`](https://github.com/backstage/backstage/commit/8efe690): Migrated to support new auth services.
- [`0fb419b`](https://github.com/backstage/backstage/commit/0fb419b): Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- [`1914e2a`](https://github.com/backstage/backstage/commit/1914e2a): Updated README

### `@backstage/plugin-codescene` (0.1.22 → [0.1.27](../../changelogs/@backstage/plugin-codescene.md#0127))

#### 0.1.27

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.1.26

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.1.25

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.1.24

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.1.23

##### Patch Changes

- [`e477ec4`](https://github.com/backstage/backstage/commit/e477ec4): Extending code scene plugin in Entity page.
- [`f2d3ea0`](https://github.com/backstage/backstage/commit/f2d3ea0): Added ESLint rule `no-top-level-material-ui-4-imports` in the Codescene plugin to migrate the Material UI imports.

### `@backstage/plugin-config-schema` (0.1.50 → [0.1.54](../../changelogs/@backstage/plugin-config-schema.md#0154))

#### 0.1.54

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.
- [`c43315a`](https://github.com/backstage/backstage/commit/c43315a): Added the `no-top-level-material-ui-4-imports` ESLint rule to aid with the migration to Material UI v5

#### 0.1.53

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.1.52

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-cost-insights` (0.12.19 → [0.12.24](../../changelogs/@backstage/plugin-cost-insights.md#01224))

#### 0.12.24

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.12.23

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.
- [`43ca784`](https://github.com/backstage/backstage/commit/43ca784): Updated dependency `@types/yup` to `^0.32.0`.

#### 0.12.22

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.12.21

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.12.20

##### Patch Changes

- [`083ba28`](https://github.com/backstage/backstage/commit/083ba28): Added the `no-top-level-material-ui-4-imports` ESLint rule to aid with the migration to Material UI v5
- [`1b4fd09`](https://github.com/backstage/backstage/commit/1b4fd09): Updated dependency `yup` to `^1.0.0`.

### `@backstage/plugin-cost-insights-common` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-cost-insights-common.md#013))

#### 0.1.3

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-devtools` (0.1.9 → [0.1.13](../../changelogs/@backstage/plugin-devtools.md#0113))

#### 0.1.12

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.1.11

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.1.10

##### Patch Changes

- [`a0e3393`](https://github.com/backstage/backstage/commit/a0e3393): Updated to use `fetchApi` as per [ADR013](https://backstage.io/docs/architecture-decisions/adrs-adr013)
- [`8b0026d`](https://github.com/backstage/backstage/commit/8b0026d): Removed unused `devDependencies` identified in Knip Report

### `@backstage/plugin-entity-feedback` (0.2.13 → [0.2.18](../../changelogs/@backstage/plugin-entity-feedback.md#0218))

#### 0.2.18

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.2.17

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.2.16

##### Patch Changes

- [`12610b4`](https://github.com/backstage/backstage/commit/12610b4): Added ESLint rule `no-top-level-material-ui-4-imports` in the `entity-feedback` plugin to migrate the Material UI imports.
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.2.15

##### Patch Changes

- [`12610b4`](https://github.com/backstage/backstage/commit/12610b4): Added ESLint rule `no-top-level-material-ui-4-imports` in the `entity-feedback` plugin to migrate the Material UI imports.
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.2.14

##### Patch Changes

- [`96adf78`](https://github.com/backstage/backstage/commit/96adf78): Remove empty Chip in `FeedbackResponseTable.tsx` when there is no response, and fix typo in Feedback Dialog Box.

### `@backstage/plugin-entity-feedback-backend` (0.2.10 → [0.2.15](../../changelogs/@backstage/plugin-entity-feedback-backend.md#0215))

#### 0.2.15

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.2.14

##### Patch Changes

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`

#### 0.2.11

##### Patch Changes

- [`45115fd`](https://github.com/backstage/backstage/commit/45115fd): Add in description for 400 response when encountering an invalid rating request
- [`4f8ecd6`](https://github.com/backstage/backstage/commit/4f8ecd6): Migrated to support new auth services.

### `@backstage/plugin-entity-feedback-common` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-entity-feedback-common.md#014))

#### 0.1.4

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-entity-validation` (0.1.15 → [0.1.20](../../changelogs/@backstage/plugin-entity-validation.md#0120))

#### 0.1.20

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.1.19

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.1.18

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library
- [`2ec4a8d`](https://github.com/backstage/backstage/commit/2ec4a8d): Added ESLint rule `no-top-level-material-ui-4-imports` in the `entity-validation` plugin to migrate the Material UI imports.

#### 0.1.17

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library
- [`2ec4a8d`](https://github.com/backstage/backstage/commit/2ec4a8d): Added ESLint rule `no-top-level-material-ui-4-imports` in the `entity-validation` plugin to migrate the Material UI imports.

### `@backstage/plugin-events-backend-test-utils` (0.1.23 → [0.1.27](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0127))

#### 0.1.24

##### Patch Changes

- [`56969b6`](https://github.com/backstage/backstage/commit/56969b6): Add new `EventsService` as well as `eventsServiceRef` for the new backend system.

  **Summary:**

  - new:
    `EventsService`, `eventsServiceRef`, `TestEventsService`
  - deprecated:
    `EventBroker`, `EventPublisher`, `EventSubscriber`, `DefaultEventBroker`, `EventsBackend`,
    most parts of `EventsExtensionPoint` (alpha),
    `TestEventBroker`, `TestEventPublisher`, `TestEventSubscriber`

  Add the `eventsServiceRef` as dependency to your backend plugins
  or backend plugin modules.

  **Details:**

  The previous implementation using the `EventsExtensionPoint` was added in the early stages
  of the new backend system and does not respect the plugin isolation.
  This made it not compatible anymore with the new backend system.

  Additionally, the previous interfaces had some room for simplification,
  supporting less exposure of internal concerns as well.

  Hereby, this change adds a new `EventsService` interface as replacement for the now deprecated `EventBroker`.
  The new interface does not require any `EventPublisher` or `EventSubscriber` interfaces anymore.
  Instead, it is expected that the `EventsService` gets passed into publishers and subscribers,
  and used internally. There is no need to expose anything of that at their own interfaces.

  Most parts of `EventsExtensionPoint` (alpha) are deprecated as well and were not usable
  (by other plugins or their modules) anyway.

  The `DefaultEventBroker` implementation is deprecated and wraps the new `DefaultEventsService` implementation.
  Optionally, an instance can be passed as argument to allow mixed setups to operate alongside.

### `@backstage/plugin-explore` (0.4.16 → [0.4.21](../../changelogs/@backstage/plugin-explore.md#0421))

#### 0.4.21

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.4.20

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.4.19

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.4.18

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.4.17

##### Patch Changes

- [`053d43f`](https://github.com/backstage/backstage/commit/053d43f): Added an optional ESLint rule - no-top-level-material-ui-4-imports -in explore plugin which has an auto fix function to migrate the imports and used it to migrate the Material UI imports for plugins/explore.

### `@backstage/plugin-firehydrant` (0.2.14 → [0.2.19](../../changelogs/@backstage/plugin-firehydrant.md#0219))

#### 0.2.19

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.2.18

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.2.17

##### Patch Changes

- [`157c7ae`](https://github.com/backstage/backstage/commit/157c7ae): Added ESLint rule `no-top-level-material-ui-4-imports` in the `firehydrant` plugin to migrate the Material UI imports.
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.2.16

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-fossa` (0.2.62 → [0.2.67](../../changelogs/@backstage/plugin-fossa.md#0267))

#### 0.2.67

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.2.66

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.2.65

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.2.64

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.2.63

##### Patch Changes

- [`89cdfad`](https://github.com/backstage/backstage/commit/89cdfad): Adjusted MUI imports for better tree shaking

### `@backstage/plugin-gcalendar` (0.3.23 → [0.3.28](../../changelogs/@backstage/plugin-gcalendar.md#0328))

#### 0.3.28

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.3.27

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.3.26

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.3.25

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.3.24

##### Patch Changes

- [`9c9e0a1`](https://github.com/backstage/backstage/commit/9c9e0a1): Added ESLint rule `no-top-level-material-ui-4-imports` in the `gcalendar` plugin to migrate the Material UI imports.

### `@backstage/plugin-gcp-projects` (0.3.46 → [0.3.51](../../changelogs/@backstage/plugin-gcp-projects.md#0351))

#### 0.3.51

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.3.50

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.3.49

##### Patch Changes

- [`7dad59c`](https://github.com/backstage/backstage/commit/7dad59c): Added ESLint rule `no-top-level-material-ui-4-imports` in the `gcp-projects` plugin to migrate the Material UI imports.

#### 0.3.48

##### Patch Changes

- [`7dad59c`](https://github.com/backstage/backstage/commit/7dad59c): Added ESLint rule `no-top-level-material-ui-4-imports` in the `gcp-projects` plugin to migrate the Material UI imports.

### `@backstage/plugin-git-release-manager` (0.3.42 → [0.3.47](../../changelogs/@backstage/plugin-git-release-manager.md#0347))

#### 0.3.47

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.3.46

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.3.45

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.3.44

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-github-actions` (0.6.11 → [0.6.16](../../changelogs/@backstage/plugin-github-actions.md#0616))

#### 0.6.16

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.6.15

##### Patch Changes

- [`76320a7`](https://github.com/backstage/backstage/commit/76320a7): Added the `no-top-level-material-ui-4-imports` ESLint rule to aid with the migration to Material UI v5
- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.6.14

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.6.13

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.6.12

##### Patch Changes

- [`8ab3218`](https://github.com/backstage/backstage/commit/8ab3218): Fixed bug in WorkflowRunStatus component where skipped and cancelled workflow runs appeared as success
- [`692316d`](https://github.com/backstage/backstage/commit/692316d): Fixed bug in WorkflowRunStatus component where status description of skipped and cancelled workflow runs appeared as success

### `@backstage/plugin-github-deployments` (0.1.61 → [0.1.66](../../changelogs/@backstage/plugin-github-deployments.md#0166))

#### 0.1.66

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.1.65

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.1.64

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library
- [`a1ddc8d`](https://github.com/backstage/backstage/commit/a1ddc8d): Added ESLint rule `no-top-level-material-ui-4-imports` in the `github-deployments` plugin to migrate the Material UI imports.

#### 0.1.63

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library
- [`a1ddc8d`](https://github.com/backstage/backstage/commit/a1ddc8d): Added ESLint rule `no-top-level-material-ui-4-imports` in the `github-deployments` plugin to migrate the Material UI imports.

### `@backstage/plugin-gitops-profiles` (0.3.45 → [0.3.50](../../changelogs/@backstage/plugin-gitops-profiles.md#0350))

#### 0.3.50

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.3.49

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.3.48

##### Patch Changes

- [`1a22254`](https://github.com/backstage/backstage/commit/1a22254): Added ESLint rule `no-top-level-material-ui-4-imports` in the `gitops-profiles` plugin to migrate the Material UI imports.
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.3.47

##### Patch Changes

- [`1a22254`](https://github.com/backstage/backstage/commit/1a22254): Added ESLint rule `no-top-level-material-ui-4-imports` in the `gitops-profiles` plugin to migrate the Material UI imports.
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-gocd` (0.1.36 → [0.1.41](../../changelogs/@backstage/plugin-gocd.md#0141))

#### 0.1.41

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.1.40

##### Patch Changes

- [`b9d7c57`](https://github.com/backstage/backstage/commit/b9d7c57): Updated README
- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.1.39

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library
- [`4166b10`](https://github.com/backstage/backstage/commit/4166b10): Added an optional ESLint rule - no-top-level-material-ui-4-imports - which has an auto fix function to migrate the imports and used it to migrate the Material UI imports.

#### 0.1.38

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library
- [`4166b10`](https://github.com/backstage/backstage/commit/4166b10): Added an optional ESLint rule - no-top-level-material-ui-4-imports - which has an auto fix function to migrate the imports and used it to migrate the Material UI imports.

### `@backstage/plugin-graphiql` (0.3.3 → [0.3.8](../../changelogs/@backstage/plugin-graphiql.md#038))

#### 0.3.8

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.3.7

##### Patch Changes

- [`d137034`](https://github.com/backstage/backstage/commit/d137034): Added the `no-top-level-material-ui-4-imports` ESLint rule to aid with the migration to Material UI v5
- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.3.6

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.3.5

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-graphql-voyager` (0.1.12 → [0.1.17](../../changelogs/@backstage/plugin-graphql-voyager.md#0117))

#### 0.1.17

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.1.16

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.1.15

##### Patch Changes

- [`813f99d`](https://github.com/backstage/backstage/commit/813f99d): Added ESLint rule `no-top-level-material-ui-4-imports` in the `graphql-voyager` plugin to migrate the Material UI imports.
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.1.14

##### Patch Changes

- [`813f99d`](https://github.com/backstage/backstage/commit/813f99d): Added ESLint rule `no-top-level-material-ui-4-imports` in the `graphql-voyager` plugin to migrate the Material UI imports.
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-home-react` (0.1.8 → [0.1.12](../../changelogs/@backstage/plugin-home-react.md#0112))

#### 0.1.12

##### Patch Changes

- [`293347f`](https://github.com/backstage/backstage/commit/293347f): Added ESLint rule `no-top-level-material-ui-4-imports` in the `home-react` plugin to migrate the Material UI imports.

#### 0.1.9

##### Patch Changes

- [`0cecb09`](https://github.com/backstage/backstage/commit/0cecb09): Updated dependency `@rjsf/utils` to `5.17.1`.
  Updated dependency `@rjsf/core` to `5.17.1`.
  Updated dependency `@rjsf/material-ui` to `5.17.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.17.1`.

### `@backstage/plugin-ilert` (0.2.19 → [0.2.24](../../changelogs/@backstage/plugin-ilert.md#0224))

#### 0.2.24

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.2.23

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.
- [`7a3789a`](https://github.com/backstage/backstage/commit/7a3789a): Added the `no-top-level-material-ui-4-imports` ESLint rule to aid with the migration to Material UI v5

#### 0.2.22

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.2.21

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-jenkins` (0.9.5 → [0.9.10](../../changelogs/@backstage/plugin-jenkins.md#0910))

#### 0.9.10

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.9.9

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`20f01d6`](https://github.com/backstage/backstage/commit/20f01d6): Updated dependency `@types/testing-library__jest-dom` to `^6.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.9.8

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.9.7

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.9.6

##### Patch Changes

- [`75277ab`](https://github.com/backstage/backstage/commit/75277ab): Added ESLint rule `no-top-level-material-ui-4-imports` in the Jenkins plugin to migrate the Material UI imports.

### `@backstage/plugin-jenkins-common` (0.1.24 → [0.1.26](../../changelogs/@backstage/plugin-jenkins-common.md#0126))

#### 0.1.26

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-kafka` (0.3.30 → [0.3.35](../../changelogs/@backstage/plugin-kafka.md#0335))

#### 0.3.35

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.3.34

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.3.33

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.3.32

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.3.31

##### Patch Changes

- [`3913fd8`](https://github.com/backstage/backstage/commit/3913fd8): Added ESLint rule `no-top-level-material-ui-4-imports` in the Kafka plugin to migrate the Material UI imports.

### `@backstage/plugin-kafka-backend` (0.3.11 → [0.3.16](../../changelogs/@backstage/plugin-kafka-backend.md#0316))

#### 0.3.16

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.3.15

##### Patch Changes

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`

### `@backstage/plugin-kubernetes` (0.11.5 → [0.11.9](../../changelogs/@backstage/plugin-kubernetes.md#0119))

#### 0.11.9

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.11.6

##### Patch Changes

- [`0e1941b`](https://github.com/backstage/backstage/commit/0e1941b): Added an optional ESLint rule - no-top-level-material-ui-4-imports -in kubernetes plugin which has an auto fix function to migrate the imports and used it to migrate the Material UI imports for plugins/kubernetes.

### `@backstage/plugin-kubernetes-common` (0.7.4 → [0.7.5](../../changelogs/@backstage/plugin-kubernetes-common.md#075))

#### 0.7.5

##### Patch Changes

- [`4642cb7`](https://github.com/backstage/backstage/commit/4642cb7): Add support to fetch data for Daemon Sets and display an accordion in the same way as with Deployments

### `@backstage/plugin-kubernetes-node` (0.1.7 → [0.1.11](../../changelogs/@backstage/plugin-kubernetes-node.md#0111))

#### 0.1.11

##### Patch Changes

- [`f5cec55`](https://github.com/backstage/backstage/commit/f5cec55): Fixing issue where `BackstageCredentials` were not properly forwarded for all calls

#### 0.1.8

##### Patch Changes

- [`69d0217`](https://github.com/backstage/backstage/commit/69d0217): Accept auth credentials to get kubernetes clusters

### `@backstage/plugin-kubernetes-react` (0.3.0 → [0.3.4](../../changelogs/@backstage/plugin-kubernetes-react.md#034))

#### 0.3.4

##### Patch Changes

- [`e6d474f`](https://github.com/backstage/backstage/commit/e6d474f): Fixed ResourceUtilization component for POD Memory Limits
- [`58800ba`](https://github.com/backstage/backstage/commit/58800ba): Added the `no-top-level-material-ui-4-imports` ESLint rule to aid with the migration to Material UI v5
- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.

#### 0.3.3

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.3.2

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.3.1

##### Patch Changes

- [`4642cb7`](https://github.com/backstage/backstage/commit/4642cb7): Add support to fetch data for Daemon Sets and display an accordion in the same way as with Deployments

### `@backstage/plugin-lighthouse` (0.4.15 → [0.4.20](../../changelogs/@backstage/plugin-lighthouse.md#0420))

#### 0.4.20

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.4.19

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.4.18

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.4.17

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.4.16

##### Patch Changes

- [`c4c8476`](https://github.com/backstage/backstage/commit/c4c8476): Added ESLint rule `no-top-level-material-ui-4-imports` in the Lighthouse plugin to migrate the Material UI imports.

### `@backstage/plugin-lighthouse-common` (0.1.4 → [0.1.6](../../changelogs/@backstage/plugin-lighthouse-common.md#016))

#### 0.1.6

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-linguist` (0.1.15 → [0.1.20](../../changelogs/@backstage/plugin-linguist.md#0120))

#### 0.1.20

##### Patch Changes

- [`3905997`](https://github.com/backstage/backstage/commit/3905997): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.1.18

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.1.17

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.1.16

##### Patch Changes

- [`4fb9600`](https://github.com/backstage/backstage/commit/4fb9600): Get component's title from translation file. See: https://backstage.io/docs/plugins/internationalization#for-an-application-developer-overwrite-plugin-messages
- [`a0e3393`](https://github.com/backstage/backstage/commit/a0e3393): Updated to use `fetchApi` as per [ADR013](https://backstage.io/docs/architecture-decisions/adrs-adr013)
- [`786c9c4`](https://github.com/backstage/backstage/commit/786c9c4): Updated dependency `luxon` to `^3.0.0`.
- [`051fda1`](https://github.com/backstage/backstage/commit/051fda1): Removed unused `dependencies` and `devDependencies` identified in Knip Report

### `@backstage/plugin-linguist-backend` (0.5.10 → [0.5.16](../../changelogs/@backstage/plugin-linguist-backend.md#0516))

#### 0.5.16

##### Patch Changes

- [`3905997`](https://github.com/backstage/backstage/commit/3905997): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.5.15

##### Patch Changes

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`

#### 0.5.11

##### Patch Changes

- [`61ff58f`](https://github.com/backstage/backstage/commit/61ff58f): Migrated to support new auth services.
- [`4467036`](https://github.com/backstage/backstage/commit/4467036): Allow unauthenticated access to health check endpoint.
- [`786c9c4`](https://github.com/backstage/backstage/commit/786c9c4): Updated dependency `luxon` to `^3.0.0`.
- [`0fb419b`](https://github.com/backstage/backstage/commit/0fb419b): Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- [`051fda1`](https://github.com/backstage/backstage/commit/051fda1): Removed unused `dependencies` and `devDependencies` identified in Knip Report

### `@backstage/plugin-linguist-common` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-linguist-common.md#013))

#### 0.1.3

##### Patch Changes

- [`3905997`](https://github.com/backstage/backstage/commit/3905997): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-microsoft-calendar` (0.1.12 → [0.1.17](../../changelogs/@backstage/plugin-microsoft-calendar.md#0117))

#### 0.1.17

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.1.16

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.1.15

##### Patch Changes

- [`4bba771`](https://github.com/backstage/backstage/commit/4bba771): Added ESLint rule `no-top-level-material-ui-4-imports` in the `microsoft-calender` plugin to migrate the Material UI imports.
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.1.14

##### Patch Changes

- [`4bba771`](https://github.com/backstage/backstage/commit/4bba771): Added ESLint rule `no-top-level-material-ui-4-imports` in the `microsoft-calender` plugin to migrate the Material UI imports.
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-newrelic` (0.3.45 → [0.3.50](../../changelogs/@backstage/plugin-newrelic.md#0350))

#### 0.3.50

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.3.49

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.3.48

##### Patch Changes

- [`f38f7d8`](https://github.com/backstage/backstage/commit/f38f7d8): Added an optional ESLint rule - no-top-level-material-ui-4-imports -in cloudbuild plugin which has an auto fix function to migrate the imports and used it to migrate the Material UI imports for plugins/newrelic.
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.3.47

##### Patch Changes

- [`f38f7d8`](https://github.com/backstage/backstage/commit/f38f7d8): Added an optional ESLint rule - no-top-level-material-ui-4-imports -in cloudbuild plugin which has an auto fix function to migrate the imports and used it to migrate the Material UI imports for plugins/newrelic.
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-newrelic-dashboard` (0.3.5 → [0.3.10](../../changelogs/@backstage/plugin-newrelic-dashboard.md#0310))

#### 0.3.10

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.3.8

##### Patch Changes

- [`1d81cdd`](https://github.com/backstage/backstage/commit/1d81cdd): Added an optional ESLint rule - no-top-level-material-ui-4-imports -in new relic plugin which has an auto fix function to migrate the imports and used it to migrate the Material UI imports for plugins/newrelic-dashboard
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.3.7

##### Patch Changes

- [`1d81cdd`](https://github.com/backstage/backstage/commit/1d81cdd): Added an optional ESLint rule - no-top-level-material-ui-4-imports -in new relic plugin which has an auto fix function to migrate the imports and used it to migrate the Material UI imports for plugins/newrelic-dashboard
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-nomad` (0.1.11 → [0.1.16](../../changelogs/@backstage/plugin-nomad.md#0116))

#### 0.1.16

##### Patch Changes

- [`3905997`](https://github.com/backstage/backstage/commit/3905997): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.1.15

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.

#### 0.1.14

##### Patch Changes

- [`c116096`](https://github.com/backstage/backstage/commit/c116096): Added an optional ESLint rule - no-top-level-material-ui-4-imports -in nomad plugin which has an auto fix function to migrate the imports and used it to migrate the Material UI imports for plugins/nomad.
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.1.13

##### Patch Changes

- [`c116096`](https://github.com/backstage/backstage/commit/c116096): Added an optional ESLint rule - no-top-level-material-ui-4-imports -in nomad plugin which has an auto fix function to migrate the imports and used it to migrate the Material UI imports for plugins/nomad.
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-nomad-backend` (0.1.15 → [0.1.20](../../changelogs/@backstage/plugin-nomad-backend.md#0120))

#### 0.1.20

##### Patch Changes

- [`3905997`](https://github.com/backstage/backstage/commit/3905997): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.1.19

##### Patch Changes

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`

#### 0.1.16

##### Patch Changes

- [`4467036`](https://github.com/backstage/backstage/commit/4467036): Allow unauthenticated access to health check endpoint.

### `@backstage/plugin-octopus-deploy` (0.2.12 → [0.2.17](../../changelogs/@backstage/plugin-octopus-deploy.md#0217))

#### 0.2.17

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.2.16

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.2.15

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library
- [`004ce71`](https://github.com/backstage/backstage/commit/004ce71): Added ESLint rule `no-top-level-material-ui-4-imports` in the `octopus-deploy` plugin to migrate the Material UI imports.

#### 0.2.14

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library
- [`004ce71`](https://github.com/backstage/backstage/commit/004ce71): Added ESLint rule `no-top-level-material-ui-4-imports` in the `octopus-deploy` plugin to migrate the Material UI imports.

#### 0.2.13

##### Patch Changes

- [`a207927`](https://github.com/backstage/backstage/commit/a207927): Added dropdown field extension for Octopus Deploy project groups

### `@backstage/plugin-opencost` (0.2.5 → [0.2.10](../../changelogs/@backstage/plugin-opencost.md#0210))

#### 0.2.10

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.2.8

##### Patch Changes

- [`f21ef8c`](https://github.com/backstage/backstage/commit/f21ef8c): Added ESLint rule `no-top-level-material-ui-4-imports` in the `opencost` plugin to migrate the Material UI imports.

#### 0.2.7

##### Patch Changes

- [`f21ef8c`](https://github.com/backstage/backstage/commit/f21ef8c): Added ESLint rule `no-top-level-material-ui-4-imports` in the `opencost` plugin to migrate the Material UI imports.

### `@backstage/plugin-org` (0.6.20 → [0.6.24](../../changelogs/@backstage/plugin-org.md#0624))

#### 0.6.24

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.6.23

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library
- [`0df5c60`](https://github.com/backstage/backstage/commit/0df5c60): Added ESLint rule `no-top-level-material-ui-4-imports` in the `org` plugin to migrate the Material UI imports.

#### 0.6.22

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library
- [`0df5c60`](https://github.com/backstage/backstage/commit/0df5c60): Added ESLint rule `no-top-level-material-ui-4-imports` in the `org` plugin to migrate the Material UI imports.

#### 0.6.21

##### Patch Changes

- [`b7b0466`](https://github.com/backstage/backstage/commit/b7b0466): Remove the use of the deprecated `customStyles` for `Avatar`
- [`526f00a`](https://github.com/backstage/backstage/commit/526f00a): Document the new frontend system extensions for the org plugin.
- [`2219f8c`](https://github.com/backstage/backstage/commit/2219f8c): Add `relationsType` argument to `MembersListCard`.
  This can be used to display an aggregated user list for groups by default.
- [`a767aaa`](https://github.com/backstage/backstage/commit/a767aaa): Fixed an issue where the `OwnershipCard` component failed to scroll properly when used alongside `react-grid-layout`.

### `@backstage/plugin-org-react` (0.1.19 → [0.1.23](../../changelogs/@backstage/plugin-org-react.md#0123))

#### 0.1.23

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.
- [`cfb2b78`](https://github.com/backstage/backstage/commit/cfb2b78): Added the `no-top-level-material-ui-4-imports` ESLint rule to aid with the migration to Material UI v5

#### 0.1.22

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.1.21

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-pagerduty` (0.7.2 → [0.7.7](../../changelogs/@backstage/plugin-pagerduty.md#077))

#### 0.7.7

##### Patch Changes

- [`3905997`](https://github.com/backstage/backstage/commit/3905997): This plugin has been deprecated, consider using [@pagerduty/backstage-plugin](https://github.com/pagerduty/backstage-plugin) instead

#### 0.7.6

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.7.5

##### Patch Changes

- [`2b43144`](https://github.com/backstage/backstage/commit/2b43144): Added ESLint rule `no-top-level-material-ui-4-imports` in the `pagerduty` plugin to migrate the Material UI imports.
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.7.4

##### Patch Changes

- [`2b43144`](https://github.com/backstage/backstage/commit/2b43144): Added ESLint rule `no-top-level-material-ui-4-imports` in the `pagerduty` plugin to migrate the Material UI imports.
- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-periskop` (0.1.28 → [0.1.33](../../changelogs/@backstage/plugin-periskop.md#0133))

#### 0.1.33

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.1.32

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.1.31

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.1.30

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-periskop-backend` (0.2.11 → [0.2.16](../../changelogs/@backstage/plugin-periskop-backend.md#0216))

#### 0.2.16

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.2.15

##### Patch Changes

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`

#### 0.2.12

##### Patch Changes

- [`4467036`](https://github.com/backstage/backstage/commit/4467036): Allow unauthenticated access to health check endpoint.

### `@backstage/plugin-permission-backend` (0.5.36 → [0.5.41](../../changelogs/@backstage/plugin-permission-backend.md#0541))

#### 0.5.41

##### Patch Changes

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`

#### 0.5.40

##### Patch Changes

- [`f3e2e86`](https://github.com/backstage/backstage/commit/f3e2e86): Properly forward causes of errors from upstream backends in the `PermissionIntegrationClient`

#### 0.5.39

##### Patch Changes

- [`f3e2e86`](https://github.com/backstage/backstage/commit/f3e2e86): Properly forward causes of errors from upstream backends in the `PermissionIntegrationClient`

#### 0.5.38

##### Patch Changes

- [`9c7fb30`](https://github.com/backstage/backstage/commit/9c7fb30): Properly forward causes of errors from upstream backends in the `PermissionIntegrationClient`

#### 0.5.37

##### Patch Changes

- [`4467036`](https://github.com/backstage/backstage/commit/4467036): Allow unauthenticated access to health check endpoint.
- [`9802004`](https://github.com/backstage/backstage/commit/9802004): Migrated to use the new auth services introduced in [BEP-0003](https://github.com/backstage/backstage/blob/master/beps/0003-auth-architecture-evolution/README.md).

  The `createRouter` function now accepts `auth`, `httpAuth` and `userInfo` options. Theses are used internally to support the new backend system, and can be ignored.

### `@backstage/plugin-permission-common` (0.7.12 → [0.7.13](../../changelogs/@backstage/plugin-permission-common.md#0713))

#### 0.7.13

##### Patch Changes

- [`0502d82`](https://github.com/backstage/backstage/commit/0502d82): The `token` option of the `PermissionEvaluator` methods is now deprecated. The options that only apply to backend implementations have been moved to `PermissionsService` from `@backstage/backend-plugin-api` instead.
- [`0fb419b`](https://github.com/backstage/backstage/commit/0fb419b): Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/plugin-permission-node` (0.7.24 → [0.7.28](../../changelogs/@backstage/plugin-permission-node.md#0728))

#### 0.7.28

##### Patch Changes

- [`29fa05b`](https://github.com/backstage/backstage/commit/29fa05b): Fixed an issue causing `ServerPermissionClient` to generate an invalid token for authorizing permissions against the permission backend.

#### 0.7.25

##### Patch Changes

- [`0502d82`](https://github.com/backstage/backstage/commit/0502d82): The `ServerPermissionClient` has been migrated to implement the `PermissionsService` interface, now accepting the new `BackstageCredentials` object in addition to the `token` option, which is now deprecated. It now also optionally depends on the new `AuthService`.

### `@backstage/plugin-permission-react` (0.4.20 → [0.4.22](../../changelogs/@backstage/plugin-permission-react.md#0422))

#### 0.4.22

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.

### `@backstage/plugin-playlist` (0.2.4 → [0.2.9](../../changelogs/@backstage/plugin-playlist.md#029))

#### 0.2.9

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.2.8

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.2.7

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.2.6

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.2.5

##### Patch Changes

- [`fbb705c`](https://github.com/backstage/backstage/commit/fbb705c): Adjusted MUI imports for better tree shaking.

### `@backstage/plugin-playlist-backend` (0.3.17 → [0.3.22](../../changelogs/@backstage/plugin-playlist-backend.md#0322))

#### 0.3.22

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.3.21

##### Patch Changes

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`

#### 0.3.18

##### Patch Changes

- [`6813366`](https://github.com/backstage/backstage/commit/6813366): Migrated to support new auth services.
- [`0fb419b`](https://github.com/backstage/backstage/commit/0fb419b): Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/plugin-playlist-common` (0.1.14 → [0.1.16](../../changelogs/@backstage/plugin-playlist-common.md#0116))

#### 0.1.16

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-proxy-backend` (0.4.11 → [0.4.15](../../changelogs/@backstage/plugin-proxy-backend.md#0415))

#### 0.4.15

##### Patch Changes

- [`e5a2ccc`](https://github.com/backstage/backstage/commit/e5a2ccc): Updated dependency `@types/http-proxy-middleware` to `^1.0.0`.
- [`43ca784`](https://github.com/backstage/backstage/commit/43ca784): Updated dependency `@types/yup` to `^0.32.0`.

#### 0.4.14

##### Patch Changes

- [`eae097c`](https://github.com/backstage/backstage/commit/eae097c): Allow unauthenticated requests.

#### 0.4.12

##### Patch Changes

- [`1b4fd09`](https://github.com/backstage/backstage/commit/1b4fd09): Updated dependency `yup` to `^1.0.0`.
- [`0fb419b`](https://github.com/backstage/backstage/commit/0fb419b): Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/plugin-puppetdb` (0.1.13 → [0.1.18](../../changelogs/@backstage/plugin-puppetdb.md#0118))

#### 0.1.18

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.1.17

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.

#### 0.1.16

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library
- [`8754b0e`](https://github.com/backstage/backstage/commit/8754b0e): Added ESLint rule `no-top-level-material-ui-4-imports` in the `puppetdb` plugin to migrate the Material UI imports.

#### 0.1.15

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library
- [`8754b0e`](https://github.com/backstage/backstage/commit/8754b0e): Added ESLint rule `no-top-level-material-ui-4-imports` in the `puppetdb` plugin to migrate the Material UI imports.

### `@backstage/plugin-rollbar` (0.4.30 → [0.4.35](../../changelogs/@backstage/plugin-rollbar.md#0435))

#### 0.4.35

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.4.34

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.4.33

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.4.32

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.4.31

##### Patch Changes

- [`2481d8a`](https://github.com/backstage/backstage/commit/2481d8a): Adjusted MUI imports for better tree shaking.

### `@backstage/plugin-rollbar-backend` (0.1.58 → [0.1.63](../../changelogs/@backstage/plugin-rollbar-backend.md#0163))

#### 0.1.63

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-scaffolder-backend-module-azure` (0.1.5 → [0.1.9](../../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#019))

#### 0.1.9

##### Patch Changes

- [`33f958a`](https://github.com/backstage/backstage/commit/33f958a): Improve examples to ensure consistency across all publish actions

#### 0.1.6

##### Patch Changes

- [`2bd1410`](https://github.com/backstage/backstage/commit/2bd1410): Removed unused dependencies
- [`f44589d`](https://github.com/backstage/backstage/commit/f44589d): Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

### `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.2.3 → [0.2.7](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket.md#027))

#### 0.2.7

##### Patch Changes

- [`33f958a`](https://github.com/backstage/backstage/commit/33f958a): Improve examples to ensure consistency across all publish actions

#### 0.2.4

##### Patch Changes

- [`2bd1410`](https://github.com/backstage/backstage/commit/2bd1410): Removed unused dependencies
- [`f44589d`](https://github.com/backstage/backstage/commit/f44589d): Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

### `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.1.3 → [0.1.7](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#017))

#### 0.1.7

##### Patch Changes

- [`8dd33a1`](https://github.com/backstage/backstage/commit/8dd33a1): Added examples for publish:bitbucketCloud actions
- [`33f958a`](https://github.com/backstage/backstage/commit/33f958a): Improve examples to ensure consistency across all publish actions

#### 0.1.4

##### Patch Changes

- [`2bd1410`](https://github.com/backstage/backstage/commit/2bd1410): Removed unused dependencies
- [`f44589d`](https://github.com/backstage/backstage/commit/f44589d): Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

### `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.1.3 → [0.1.7](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#017))

#### 0.1.7

##### Patch Changes

- [`4a15c86`](https://github.com/backstage/backstage/commit/4a15c86): Add examples for `publish:bitbucketServer` scaffolder action & improve related tests

#### 0.1.4

##### Patch Changes

- [`2bd1410`](https://github.com/backstage/backstage/commit/2bd1410): Removed unused dependencies
- [`0e48aaf`](https://github.com/backstage/backstage/commit/0e48aaf): Added an option to specify a commit author by adding `gitAuthorName` and `gitAuthorEmail` options to the `publish:bitbucketServer:pull-request` action
- [`f44589d`](https://github.com/backstage/backstage/commit/f44589d): Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.14 → [0.2.18](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#0218))

#### 0.2.15

##### Patch Changes

- [`f44589d`](https://github.com/backstage/backstage/commit/f44589d): Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.37 → [0.2.41](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0241))

#### 0.2.38

##### Patch Changes

- [`e9663a9`](https://github.com/backstage/backstage/commit/e9663a9): Move away from using `ctx.logStream`
- [`f44589d`](https://github.com/backstage/backstage/commit/f44589d): Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

### `@backstage/plugin-scaffolder-backend-module-gerrit` (0.1.5 → [0.1.9](../../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#019))

#### 0.1.9

##### Patch Changes

- [`0fb178e`](https://github.com/backstage/backstage/commit/0fb178e): Add examples for `publish:gerrit:review` scaffolder action & improve related tests

#### 0.1.6

##### Patch Changes

- [`f44589d`](https://github.com/backstage/backstage/commit/f44589d): Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

### `@backstage/plugin-scaffolder-backend-module-gitea` (0.1.3 → [0.1.7](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#017))

#### 0.1.7

##### Patch Changes

- [`33f958a`](https://github.com/backstage/backstage/commit/33f958a): Improve examples to ensure consistency across all publish actions

#### 0.1.4

##### Patch Changes

- [`f44589d`](https://github.com/backstage/backstage/commit/f44589d): Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

- [`9f19476`](https://github.com/backstage/backstage/commit/9f19476): Updated README

### `@backstage/plugin-scaffolder-backend-module-github` (0.2.3 → [0.2.7](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#027))

#### 0.2.7

##### Patch Changes

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`
- [`33f958a`](https://github.com/backstage/backstage/commit/33f958a): Improve examples to ensure consistency across all publish actions

#### 0.2.4

##### Patch Changes

- [`f44589d`](https://github.com/backstage/backstage/commit/f44589d): Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

- [`35fe005`](https://github.com/backstage/backstage/commit/35fe005): Export `getOctokitOptions` for easy re-use of Octokit configuration handling
- [`1753898`](https://github.com/backstage/backstage/commit/1753898): Updated dependency `octokit-plugin-create-pull-request` to `^5.0.0`.

### `@backstage/plugin-scaffolder-backend-module-rails` (0.4.30 → [0.4.34](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0434))

#### 0.4.31

##### Patch Changes

- [`e9663a9`](https://github.com/backstage/backstage/commit/e9663a9): Move away from using `ctx.logStream`
- [`f44589d`](https://github.com/backstage/backstage/commit/f44589d): Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

### `@backstage/plugin-scaffolder-backend-module-sentry` (0.1.21 → [0.1.25](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#0125))

#### 0.1.22

##### Patch Changes

- [`f44589d`](https://github.com/backstage/backstage/commit/f44589d): Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

### `@backstage/plugin-search-backend-module-catalog` (0.1.17 → [0.1.23](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#0123))

#### 0.1.18

##### Patch Changes

- [`bb368a5`](https://github.com/backstage/backstage/commit/bb368a5): Migrated to support new auth services.

### `@backstage/plugin-search-backend-module-explore` (0.1.17 → [0.1.23](../../changelogs/@backstage/plugin-search-backend-module-explore.md#0123))

#### 0.1.21

##### Patch Changes

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`

#### 0.1.18

##### Patch Changes

- [`bb368a5`](https://github.com/backstage/backstage/commit/bb368a5): Migrated to support new auth services.

### `@backstage/plugin-search-backend-module-pg` (0.5.22 → [0.5.26](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0526))

#### 0.5.26

##### Patch Changes

- [`cf163a5`](https://github.com/backstage/backstage/commit/cf163a5): Enable module only on supported databases

  Also pass logger to the service

#### 0.5.23

##### Patch Changes

- [`744c0cb`](https://github.com/backstage/backstage/commit/744c0cb): Start importing `QueryTranslator`, `QueryRequestOptions` and `SearchEngine` from the `@backstage/plugin-search-backend-node`.
- [`0fb419b`](https://github.com/backstage/backstage/commit/0fb419b): Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.1.6 → [0.1.10](../../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#0110))

#### 0.1.10

##### Patch Changes

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`

### `@backstage/plugin-search-backend-module-techdocs` (0.1.17 → [0.1.22](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#0122))

#### 0.1.22

##### Patch Changes

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`

#### 0.1.18

##### Patch Changes

- [`bb368a5`](https://github.com/backstage/backstage/commit/bb368a5): Migrated to support new auth services.

### `@backstage/plugin-sentry` (0.5.15 → [0.5.20](../../changelogs/@backstage/plugin-sentry.md#0520))

#### 0.5.20

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.5.19

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.5.18

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.5.17

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.5.16

##### Patch Changes

- [`2df7265`](https://github.com/backstage/backstage/commit/2df7265): Added ESLint rule `no-top-level-material-ui-4-imports` in the `sentry` plugin to migrate the Material UI imports.

### `@backstage/plugin-shortcuts` (0.3.19 → [0.3.24](../../changelogs/@backstage/plugin-shortcuts.md#0324))

#### 0.3.24

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.3.23

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.3.22

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.3.21

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.3.20

##### Patch Changes

- [`26a15f7`](https://github.com/backstage/backstage/commit/26a15f7): Added ESLint rule `no-top-level-material-ui-4-imports` in the `shortcuts` plugin to migrate the Material UI imports.
- [`0fb419b`](https://github.com/backstage/backstage/commit/0fb419b): Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/plugin-sonarqube` (0.7.12 → [0.7.17](../../changelogs/@backstage/plugin-sonarqube.md#0717))

#### 0.7.17

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.7.16

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.7.15

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.7.14

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.7.13

##### Patch Changes

- [`e38b29c`](https://github.com/backstage/backstage/commit/e38b29c): Added ESLint rule `no-top-level-material-ui-4-imports` in the `sonarqube` plugin to migrate the Material UI imports.

### `@backstage/plugin-sonarqube-backend` (0.2.15 → [0.2.20](../../changelogs/@backstage/plugin-sonarqube-backend.md#0220))

#### 0.2.20

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.2.19

##### Patch Changes

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`

### `@backstage/plugin-sonarqube-react` (0.1.13 → [0.1.16](../../changelogs/@backstage/plugin-sonarqube-react.md#0116))

#### 0.1.16

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-splunk-on-call` (0.4.19 → [0.4.24](../../changelogs/@backstage/plugin-splunk-on-call.md#0424))

#### 0.4.24

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.4.23

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.4.22

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.4.21

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.4.20

##### Patch Changes

- [`51f814b`](https://github.com/backstage/backstage/commit/51f814b): Added ESLint rule `no-top-level-material-ui-4-imports` in the `splunk-on-call` plugin to migrate the Material UI imports.

### `@backstage/plugin-stack-overflow` (0.1.25 → [0.1.30](../../changelogs/@backstage/plugin-stack-overflow.md#0130))

#### 0.1.30

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.1.29

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.1.28

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.1.27

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.1.26

##### Patch Changes

- [`c6779ac`](https://github.com/backstage/backstage/commit/c6779ac): fix: fix decode issues in title and author fields in `StackOverflowSearchResultListItem`
- [`6429213`](https://github.com/backstage/backstage/commit/6429213): Added ESLint rule `no-top-level-material-ui-4-imports` in the `stack-overflow` plugin to migrate the Material UI imports.

### `@backstage/plugin-stack-overflow-backend` (0.2.17 → [0.2.22](../../changelogs/@backstage/plugin-stack-overflow-backend.md#0222))

#### 0.2.22

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-stackstorm` (0.1.11 → [0.1.16](../../changelogs/@backstage/plugin-stackstorm.md#0116))

#### 0.1.16

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.1.15

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.1.14

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.1.13

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.1.12

##### Patch Changes

- [`b8234ce`](https://github.com/backstage/backstage/commit/b8234ce): Added ESLint rule `no-top-level-material-ui-4-imports` in the `stackstorm` plugin to migrate the Material UI imports.

### `@backstage/plugin-tech-insights` (0.3.22 → [0.3.27](../../changelogs/@backstage/plugin-tech-insights.md#0327))

#### 0.3.27

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.3.26

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.3.25

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.3.24

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.3.23

##### Patch Changes

- [`6aec725`](https://github.com/backstage/backstage/commit/6aec725): Added ESLint rule `no-top-level-material-ui-4-imports` in the `tech-insights` plugin to migrate the Material UI imports.
- [`aa66ae0`](https://github.com/backstage/backstage/commit/aa66ae0): Added `onlyFailed` prop to `ScorecardsCard`, and `isFailed` to each check type.

### `@backstage/plugin-tech-insights-backend` (0.5.27 → [0.5.32](../../changelogs/@backstage/plugin-tech-insights-backend.md#0532))

#### 0.5.32

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.5.31

##### Patch Changes

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`

#### 0.5.28

##### Patch Changes

- [`0fb419b`](https://github.com/backstage/backstage/commit/0fb419b): Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- [`d621468`](https://github.com/backstage/backstage/commit/d621468): Added support for the new `AuthService`.

### `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.45 → [0.1.50](../../changelogs/@backstage/plugin-tech-insights-backend-module-jsonfc.md#0150))

#### 0.1.50

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.1.49

##### Patch Changes

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`

#### 0.1.46

##### Patch Changes

- [`6ce8c0b`](https://github.com/backstage/backstage/commit/6ce8c0b): Fixes an invalid line in the schema that was causing AJV to complain.

### `@backstage/plugin-tech-insights-common` (0.2.12 → [0.2.13](../../changelogs/@backstage/plugin-tech-insights-common.md#0213))

#### 0.2.13

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-todo` (0.2.34 → [0.2.39](../../changelogs/@backstage/plugin-todo.md#0239))

#### 0.2.39

##### Patch Changes

- [`89856da`](https://github.com/backstage/backstage/commit/89856da): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.2.38

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/plugin-todo-backend` (0.3.11 → [0.3.17](../../changelogs/@backstage/plugin-todo-backend.md#0317))

#### 0.3.17

##### Patch Changes

- [`89856da`](https://github.com/backstage/backstage/commit/89856da): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.3.16

##### Patch Changes

- [`2bd291e`](https://github.com/backstage/backstage/commit/2bd291e): Allow reserved characters in requests.
- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`

#### 0.3.12

##### Patch Changes

- [`b65788b`](https://github.com/backstage/backstage/commit/b65788b): Move @backstage/repo-tools to dev dependencies

### `@backstage/plugin-user-settings` (0.8.1 → [0.8.5](../../changelogs/@backstage/plugin-user-settings.md#085))

#### 0.8.5

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.8.4

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.8.3

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.8.2

##### Patch Changes

- [`ee584af`](https://github.com/backstage/backstage/commit/ee584af): Added ESLint rule `no-top-level-material-ui-4-imports` in the `user-settings` plugin to migrate the Material UI imports.

### `@backstage/plugin-vault` (0.1.25 → [0.1.30](../../changelogs/@backstage/plugin-vault.md#0130))

#### 0.1.30

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.1.29

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.1.28

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.1.27

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.1.26

##### Patch Changes

- [`e780d3a`](https://github.com/backstage/backstage/commit/e780d3a): Added ESLint rule `no-top-level-material-ui-4-imports` in the `vault` plugin to migrate the Material UI imports.

### `@backstage/plugin-vault-backend` (0.4.6 → [0.4.11](../../changelogs/@backstage/plugin-vault-backend.md#0411))

#### 0.4.11

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.4.7

##### Patch Changes

- [`7277fe2`](https://github.com/backstage/backstage/commit/7277fe2): Removed lock inside recursion to avoid deadlocks
- [`4467036`](https://github.com/backstage/backstage/commit/4467036): Allow unauthenticated access to health check endpoint.

### `@backstage/plugin-vault-node` (0.1.6 → [0.1.11](../../changelogs/@backstage/plugin-vault-node.md#0111))

#### 0.1.11

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

### `@backstage/plugin-xcmetrics` (0.2.48 → [0.2.53](../../changelogs/@backstage/plugin-xcmetrics.md#0253))

#### 0.2.53

##### Patch Changes

- [`c2112f2`](https://github.com/backstage/backstage/commit/c2112f2): These packages have been migrated to the [backstage/community-plugins](https://github.com/backstage/community-plugins) repository.

#### 0.2.52

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 0.2.51

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.2.50

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 0.2.49

##### Patch Changes

- [`7984d1e`](https://github.com/backstage/backstage/commit/7984d1e): Fixed bug in XcMetricsClient where it was not including parameter for excludeCI, which is now a required parameter for XCMetrics.
- [`9daf301`](https://github.com/backstage/backstage/commit/9daf301): Added ESLint rule `no-top-level-material-ui-4-imports` in the `xcmetrics` plugin to migrate the Material UI imports.

### `@backstage/theme` (0.5.1 → [0.5.3](../../changelogs/@backstage/theme.md#053))

#### 0.5.3

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.

#### 0.5.2

##### Patch Changes

- [`6f4d2a0`](https://github.com/backstage/backstage/commit/6f4d2a0): Exported `defaultTypography` to make adjusting these values in a custom theme easier

## Other minor version bumps

### `@backstage/config` (1.1.1 → [1.2.0](../../changelogs/@backstage/config.md#120))

#### 1.2.0

##### Minor Changes

- [`50cf9df`](https://github.com/backstage/backstage/commit/50cf9df): The `ConfigReader` now treats `null` values as present but explicitly undefined, meaning it will not fall back to the next level of configuration.

### `@backstage/config-loader` (1.6.2 → [1.8.0](../../changelogs/@backstage/config-loader.md#180))

#### 1.8.0

##### Minor Changes

- [`2ce31b3`](https://github.com/backstage/backstage/commit/2ce31b3): The default environment variable substitution function will now trim whitespace characters from the substituted value. This alleviates bugs where whitespace characters are mistakenly included in environment variables.

  If you depend on the old behavior, you can override the default substitution function with your own, for example:

  ```ts
  ConfigSources.default({
    substitutionFunc: async name => process.env[name],
  });
  ```

- [`99bab65`](https://github.com/backstage/backstage/commit/99bab65): Support parameter substitution for environment variables

#### 1.7.0

##### Minor Changes

- [`db8358d`](https://github.com/backstage/backstage/commit/db8358d): Forward `null` values read from configuration files in configuration data, rather than treating them as an absence of config.

### `@backstage/integration` (1.9.0 → [1.10.0](../../changelogs/@backstage/integration.md#1100))

#### 1.10.0

##### Minor Changes

- [`7b11422`](https://github.com/backstage/backstage/commit/7b11422): Add AWS CodeCommit URL Reader/Integration

#### 1.9.1

##### Patch Changes

- [`0386fa7`](https://github.com/backstage/backstage/commit/0386fa7): Fixed an issue with resolution of SCM URLs against a base URL with a trailing slash.

### `@backstage/plugin-catalog` (1.17.0 → [1.19.0](../../changelogs/@backstage/plugin-catalog.md#1190))

#### 1.19.0

##### Minor Changes

- [`18c7f12`](https://github.com/backstage/backstage/commit/18c7f12): Add `isApiType()` to EntitySwitch routing functions.

##### Patch Changes

- [`bcb2674`](https://github.com/backstage/backstage/commit/bcb2674): Added a "create something similar" button to the `<AboutCard>` that is visible and links to the scaffolder template corresponding to the entity's `backstage.io/source-template` annotation, if present.
- [`4ef0dcf`](https://github.com/backstage/backstage/commit/4ef0dcf): Fixed a bug that prevented the default `entityPresentationApi` from being set in apps using the new frontend system.
- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.
- [`7495b36`](https://github.com/backstage/backstage/commit/7495b36): Fixed sorting of columns created with `CatalogTable.columns.createLabelColumn`.

#### 1.18.2

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library
- [`bbbd510`](https://github.com/backstage/backstage/commit/bbbd510): `CatalogIndexPage` now uses `EntitySearchBar` for text-based filtering of entities, saving the search text in the query parameters and debouncing the server requests.

#### 1.18.1

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 1.18.0

##### Minor Changes

- [`72b8827`](https://github.com/backstage/backstage/commit/72b8827): Adds a title to the `PaginatedCatalogTable` for better visibility on what you're viewing.

##### Patch Changes

- [`50b6687`](https://github.com/backstage/backstage/commit/50b6687): Resolved an issue where the `PaginatedCatalogTable` was not propagating table options to its child table.
- [`9332425`](https://github.com/backstage/backstage/commit/9332425): The entity page extension provided by the `/alpha` plugin now correctly renders the entity 404 page.
- [`1c0b179`](https://github.com/backstage/backstage/commit/1c0b179): Added the `no-top-level-material-ui-4-imports` ESLint rule to aid with the migration to Material UI v5
- [`2ac1630`](https://github.com/backstage/backstage/commit/2ac1630): Added support for passing in custom filters to `CatalogIndexPage`
- [`298953b`](https://github.com/backstage/backstage/commit/298953b): Added support for providing an `initiallySelectedNamespaces` which accepts an array of Namespaces to have selected by default
- [`6727665`](https://github.com/backstage/backstage/commit/6727665): Allow the `spec.target` field to be searchable in the catalog table for locations. Previously, only the `spec.targets` field was be searchable. This makes locations generated by providers such as the `GithubEntityProvider` searchable in the catalog table. [#23098](https://github.com/backstage/backstage/issues/23098)

### `@backstage/plugin-catalog-backend` (1.17.3 → [1.21.1](../../changelogs/@backstage/plugin-catalog-backend.md#1211))

#### 1.21.1

##### Patch Changes

- [`cfdc5e7`](https://github.com/backstage/backstage/commit/cfdc5e7): Fixes an issue where `/analyze-location` would incorrectly throw a 500 error on an invalid url.
- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`
- [`c52f7ac`](https://github.com/backstage/backstage/commit/c52f7ac): Make entity collection errors a little quieter in the logs.

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

#### 1.21.0

##### Minor Changes

- [`f3e2e86`](https://github.com/backstage/backstage/commit/f3e2e86): Added the ability to inject custom permissions from modules, on `CatalogBuilder` and `CatalogPermissionExtensionPoint`

#### 1.20.0

##### Minor Changes

- [`f3e2e86`](https://github.com/backstage/backstage/commit/f3e2e86): Added the ability to inject custom permissions from modules, on `CatalogBuilder` and `CatalogPermissionExtensionPoint`

#### 1.19.0

##### Minor Changes

- [`9c7fb30`](https://github.com/backstage/backstage/commit/9c7fb30): Added the ability to inject custom permissions from modules, on `CatalogBuilder` and `CatalogPermissionExtensionPoint`

#### 1.18.0

##### Minor Changes

- [`df12231`](https://github.com/backstage/backstage/commit/df12231): Allow setting EntityDataParser using CatalogModelExtensionPoint
- [`15ba00f`](https://github.com/backstage/backstage/commit/15ba00f): Migrated to support new auth services. The `CatalogBuilder.create` method now accepts a `discovery` option, which is recommended to forward from the plugin environment, as it will otherwise fall back to use the `HostDiscovery` implementation.

##### Patch Changes

- [`2bd1410`](https://github.com/backstage/backstage/commit/2bd1410): Removed unused dependencies
- [`999224f`](https://github.com/backstage/backstage/commit/999224f): Bump dependency `minimatch` to v9
- [`6f830bb`](https://github.com/backstage/backstage/commit/6f830bb): Allow passing optional filter to `getEntitiesByRefs`
- [`0fb419b`](https://github.com/backstage/backstage/commit/0fb419b): Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- [`b65788b`](https://github.com/backstage/backstage/commit/b65788b): Move @backstage/repo-tools to dev dependencies
- [`280edeb`](https://github.com/backstage/backstage/commit/280edeb): Add index for original value in search table for faster entity facet response
- [`dad018f`](https://github.com/backstage/backstage/commit/dad018f): Do not fail on stitching when the entity contains `null` values associated to deeply nested or long keys.

### `@backstage/plugin-catalog-node` (1.7.3 → [1.11.1](../../changelogs/@backstage/plugin-catalog-node.md#1111))

#### 1.11.0

##### Minor Changes

- [`f3e2e86`](https://github.com/backstage/backstage/commit/f3e2e86): Added the ability to inject custom permissions from modules, on `CatalogBuilder` and `CatalogPermissionExtensionPoint`

#### 1.10.0

##### Minor Changes

- [`f3e2e86`](https://github.com/backstage/backstage/commit/f3e2e86): Added the ability to inject custom permissions from modules, on `CatalogBuilder` and `CatalogPermissionExtensionPoint`

#### 1.9.0

##### Minor Changes

- [`9c7fb30`](https://github.com/backstage/backstage/commit/9c7fb30): Added the ability to inject custom permissions from modules, on `CatalogBuilder` and `CatalogPermissionExtensionPoint`

#### 1.8.0

##### Minor Changes

- [`df12231`](https://github.com/backstage/backstage/commit/df12231): Allow setting EntityDataParser using CatalogModelExtensionPoint

### `@backstage/plugin-catalog-react` (1.10.0 → [1.11.3](../../changelogs/@backstage/plugin-catalog-react.md#1113))

#### 1.11.3

##### Patch Changes

- [`47dec6f`](https://github.com/backstage/backstage/commit/47dec6f): Added the `no-top-level-material-ui-4-imports` ESLint rule to aid with the migration to Material UI v5
- [`b863830`](https://github.com/backstage/backstage/commit/b863830): Change behavior in EntityAutoCompletePicker to only hide filter if there are no available options. Previously the filter was hidden if there were <= 1 available options.
- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 1.11.2

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library
- [`b5cbbb6`](https://github.com/backstage/backstage/commit/b5cbbb6): `EntitySearchBar` and `EntityTextFilter` have been updated accordingly to persist the status as query params, following the same pattern as the other server side

#### 1.11.1

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 1.11.0

##### Minor Changes

- [`72b8827`](https://github.com/backstage/backstage/commit/72b8827): Number of results is now directly added as the field `totalItems` on `useEntityList`.

##### Patch Changes

- [`930b5c1`](https://github.com/backstage/backstage/commit/930b5c1): Added 'root' and 'label' class keys for EntityAutocompletePicker, EntityOwnerPicker and EntityProcessingStatusPicker
- [`b2a9926`](https://github.com/backstage/backstage/commit/b2a9926): Adds an argument for which filters should be applied when fetching/counting available values
- [`a6e237f`](https://github.com/backstage/backstage/commit/a6e237f): Added `DefaultFilters` component
- [`298953b`](https://github.com/backstage/backstage/commit/298953b): Added support for providing an `initiallySelectedNamespaces` which accepts an array of Namespaces to have selected by default

### `@backstage/plugin-scaffolder` (1.18.0 → [1.19.3](../../changelogs/@backstage/plugin-scaffolder.md#1193))

#### 1.19.3

##### Patch Changes

- [`4f1f6ca`](https://github.com/backstage/backstage/commit/4f1f6ca): Use default value for `MyGroupsPicker` if provided
- [`605c971`](https://github.com/backstage/backstage/commit/605c971): Allow the task list search to work on the Scaffolder template title.
- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`87d2eb8`](https://github.com/backstage/backstage/commit/87d2eb8): Updated dependency `json-schema-library` to `^9.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.
- [`419e948`](https://github.com/backstage/backstage/commit/419e948): Don't show login prompt if token is set in the state

#### 1.19.2

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 1.19.1

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 1.19.0

##### Minor Changes

- [`a3b4d90`](https://github.com/backstage/backstage/commit/a3b4d90): Added a menu to the header of template page for direct access to editing the template

##### Patch Changes

- [`0cecb09`](https://github.com/backstage/backstage/commit/0cecb09): Updated dependency `@rjsf/utils` to `5.17.1`.
  Updated dependency `@rjsf/core` to `5.17.1`.
  Updated dependency `@rjsf/material-ui` to `5.17.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.17.1`.
- [`a7e6fb3`](https://github.com/backstage/backstage/commit/a7e6fb3): Added the `no-top-level-material-ui-4-imports` ESLint rule to aid with the migration to Material UI v5

### `@backstage/plugin-scaffolder-backend` (1.21.3 → [1.22.5](../../changelogs/@backstage/plugin-scaffolder-backend.md#1225))

#### 1.22.4

##### Patch Changes

- [`f34a9b1`](https://github.com/backstage/backstage/commit/f34a9b1): The `catalog:write` action now automatically adds a `backstage.io/template-source` annotation, indicating which Scaffolder template was used to create the entity.

#### 1.22.3

##### Patch Changes

- [`c74c2de`](https://github.com/backstage/backstage/commit/c74c2de): Fixed an issue causing actions to fail when retrieving auth credentials

#### 1.22.0

##### Minor Changes

- [`e9663a9`](https://github.com/backstage/backstage/commit/e9663a9): Move away from using `ctx.logStream`
- [`aa543c9`](https://github.com/backstage/backstage/commit/aa543c9): Migrate plugin to use the new auth services, add an optional service discovery to the router options and change the permissions type to be `PermissionsService`.
- [`e9663a9`](https://github.com/backstage/backstage/commit/e9663a9): Enable the redaction of secrets using the redacting logger and the secrets from the `TaskSpec`
- [`c6b132e`](https://github.com/backstage/backstage/commit/c6b132e): Introducing checkpoints for scaffolder task action idempotency

##### Patch Changes

- [`984abfa`](https://github.com/backstage/backstage/commit/984abfa): Fixing the lost of the initial state after a task recovery.
- [`703ebc9`](https://github.com/backstage/backstage/commit/703ebc9): Fix support for unauthenticated requests to create scaffolder tasks
- [`f44589d`](https://github.com/backstage/backstage/commit/f44589d): Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

- [`0fb419b`](https://github.com/backstage/backstage/commit/0fb419b): Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- [`bbd1fe1`](https://github.com/backstage/backstage/commit/bbd1fe1): Made "checkpoint" on scaffolder action context non-optional

### `@backstage/plugin-search-backend-module-elasticsearch` (1.3.16 → [1.4.0](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#140))

#### 1.4.0

##### Minor Changes

- [`4d754e3`](https://github.com/backstage/backstage/commit/4d754e3): When using the New Backend System, the Elasticsearch provider will only be added if the `search.elasticsearch` config section exists.

#### 1.3.17

##### Patch Changes

- [`744c0cb`](https://github.com/backstage/backstage/commit/744c0cb): Start importing `QueryTranslator`, `QueryRequestOptions` and `SearchEngine` from the `@backstage/plugin-search-backend-node`.
- [`e1f73d0`](https://github.com/backstage/backstage/commit/e1f73d0): Added config.d.ts entry with secrets for the shared auth block
- [`0fb419b`](https://github.com/backstage/backstage/commit/0fb419b): Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/plugin-techdocs-backend` (1.9.6 → [1.10.4](../../changelogs/@backstage/plugin-techdocs-backend.md#1104))

#### 1.10.4

##### Patch Changes

- [`8e28c88`](https://github.com/backstage/backstage/commit/8e28c88): Allow overriding default techdocs preparers with new `TechdocsPreparerExtensionPoint`
- [`c884b9a`](https://github.com/backstage/backstage/commit/c884b9a): Use the default cookie endpoints added automatically when a cookie policy is set.

#### 1.10.0

##### Minor Changes

- [`718b734`](https://github.com/backstage/backstage/commit/718b734): Create extension point `TechdocsGeneratorExtensionPoint` to allow adding a custom generator

##### Patch Changes

- [`3f14e9f`](https://github.com/backstage/backstage/commit/3f14e9f): Migrate plugin to use the new auth services.

### `@backstage/plugin-techdocs-node` (1.11.5 → [1.12.3](../../changelogs/@backstage/plugin-techdocs-node.md#1123))

#### 1.12.3

##### Patch Changes

- [`8e28c88`](https://github.com/backstage/backstage/commit/8e28c88): Allow overriding default techdocs preparers with new `TechdocsPreparerExtensionPoint`

#### 1.12.2

##### Patch Changes

- [`81a995f`](https://github.com/backstage/backstage/commit/81a995f): Updated dependency `aws-sdk-client-mock` to `^4.0.0`.

#### 1.12.1

##### Patch Changes

- [`81a995f`](https://github.com/backstage/backstage/commit/81a995f): Updated dependency `aws-sdk-client-mock` to `^4.0.0`.

#### 1.12.0

##### Minor Changes

- [`718b734`](https://github.com/backstage/backstage/commit/718b734): Create extension point `TechdocsGeneratorExtensionPoint` to allow adding a custom generator

##### Patch Changes

- [`5b4f565`](https://github.com/backstage/backstage/commit/5b4f565): Fix handling of default plugins that have configuration

### `@backstage/plugin-techdocs-react` (1.1.16 → [1.2.3](../../changelogs/@backstage/plugin-techdocs-react.md#123))

#### 1.2.3

##### Patch Changes

- [`b450af3`](https://github.com/backstage/backstage/commit/b450af3): Added ESLint rule `no-top-level-material-ui-4-imports` in the Techdocs-react plugin to migrate the Material UI imports.
- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.

#### 1.2.2

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 1.2.1

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 1.2.0

##### Minor Changes

- [`3f14e9f`](https://github.com/backstage/backstage/commit/3f14e9f): Create a new api method for issuing user cookie.

## Other patch version bumps

### `@backstage/app-defaults` (1.5.0 → [1.5.4](../../changelogs/@backstage/app-defaults.md#154))

#### 1.5.4

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.

### `@backstage/catalog-client` (1.6.0 → [1.6.4](../../changelogs/@backstage/catalog-client.md#164))

#### 1.6.4

##### Patch Changes

- [`dad7505`](https://github.com/backstage/backstage/commit/dad7505): Fix the `CatalogClient::getEntities` method to only sort the resulting entities in case no `order`-parameter is provided.

#### 1.6.3

##### Patch Changes

- [`7e8a7c8`](https://github.com/backstage/backstage/commit/7e8a7c8): Added missing commas to the example of `queryEntities`

#### 1.6.2

##### Patch Changes

- [`7e8a7c8`](https://github.com/backstage/backstage/commit/7e8a7c8): Added missing commas to the example of `queryEntities`

#### 1.6.1

##### Patch Changes

- [`6f830bb`](https://github.com/backstage/backstage/commit/6f830bb): Allow passing optional filter to `getEntitiesByRefs`

### `@backstage/core-app-api` (1.12.0 → [1.12.4](../../changelogs/@backstage/core-app-api.md#1124))

#### 1.12.4

##### Patch Changes

- [`c884b9a`](https://github.com/backstage/backstage/commit/c884b9a): The app is now aware of if it is being served from the `app-backend` with a separate public and protected bundles. When in protected mode the app will now continuously refresh the session cookie, as well as clear the cookie if the user signs out.
- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 1.12.3

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 1.12.2

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/core-plugin-api` (1.9.0 → [1.9.2](../../changelogs/@backstage/core-plugin-api.md#192))

#### 1.9.2

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/dev-utils` (1.0.27 → [1.0.31](../../changelogs/@backstage/dev-utils.md#1031))

#### 1.0.31

##### Patch Changes

- [`9a41a7b`](https://github.com/backstage/backstage/commit/9a41a7b): Allow defining custom sidebar item for page and login for the development app
- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.
- [`995f66b`](https://github.com/backstage/backstage/commit/995f66b): add @backstage/no-top-level-material-ui-4-imports lint rule

#### 1.0.30

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 1.0.29

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/errors` (1.2.3 → [1.2.4](../../changelogs/@backstage/errors.md#124))

#### 1.2.4

##### Patch Changes

- [`2636075`](https://github.com/backstage/backstage/commit/2636075): Fixed an issue that was causing ResponseError not to report the HTTP status from the provided response.

### `@backstage/integration-react` (1.1.24 → [1.1.26](../../changelogs/@backstage/integration-react.md#1126))

#### 1.1.26

##### Patch Changes

- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 1.1.25

##### Patch Changes

- [`b38dc55`](https://github.com/backstage/backstage/commit/b38dc55): Updated `microsoftAuthApi` scopes for Azure DevOps to be fully qualified.

### `@backstage/plugin-scaffolder-react` (1.8.0 → [1.8.4](../../changelogs/@backstage/plugin-scaffolder-react.md#184))

#### 1.8.4

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`87d2eb8`](https://github.com/backstage/backstage/commit/87d2eb8): Updated dependency `json-schema-library` to `^9.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.
- [`0e692cf`](https://github.com/backstage/backstage/commit/0e692cf): Added ESLint rule `no-top-level-material-ui-4-imports` to migrate the Material UI imports.
- [`df99f62`](https://github.com/backstage/backstage/commit/df99f62): The `value` sent on the `create` analytics event (fired when a Scaffolder template is executed) is now set to the number of minutes saved by executing the template. This value is derived from the `backstage.io/time-saved` annotation on the template entity, if available.

  Note: the `create` event is now captured in the `<Workflow>` component. If you are directly making use of the alpha-exported `<Stepper>` component, an analytics `create` event will no longer be captured on your behalf.

#### 1.8.3

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 1.8.2

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 1.8.1

##### Patch Changes

- [`930b5c1`](https://github.com/backstage/backstage/commit/930b5c1): Added 'root' and 'label' class key to TemplateCategoryPicker
- [`6d649d2`](https://github.com/backstage/backstage/commit/6d649d2): Updated dependency `flatted` to `3.3.1`.
- [`0cecb09`](https://github.com/backstage/backstage/commit/0cecb09): Updated dependency `@rjsf/utils` to `5.17.1`.
  Updated dependency `@rjsf/core` to `5.17.1`.
  Updated dependency `@rjsf/material-ui` to `5.17.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.17.1`.

### `@backstage/plugin-search` (1.4.6 → [1.4.10](../../changelogs/@backstage/plugin-search.md#1410))

#### 1.4.10

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 1.4.9

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 1.4.8

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 1.4.7

##### Patch Changes

- [`70ee3b7`](https://github.com/backstage/backstage/commit/70ee3b7): Remove the hardcoded 'black' color give to the search type accordion icon as it doesn't work with dark themes
- [`f0464b0`](https://github.com/backstage/backstage/commit/f0464b0): Removes ADR from the default set of search filters
- [`cd872b9`](https://github.com/backstage/backstage/commit/cd872b9): Added ESLint rule `no-top-level-material-ui-4-imports` in the `search` plugin to migrate the Material UI imports.

### `@backstage/plugin-search-backend` (1.5.3 → [1.5.7](../../changelogs/@backstage/plugin-search-backend.md#157))

#### 1.5.7

##### Patch Changes

- [`2bd291e`](https://github.com/backstage/backstage/commit/2bd291e): Allow reserved characters in requests.
- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`

#### 1.5.4

##### Patch Changes

- [`2bd1410`](https://github.com/backstage/backstage/commit/2bd1410): Removed unused dependencies
- [`744c0cb`](https://github.com/backstage/backstage/commit/744c0cb): Update the router to use the new `auth` services, it now accepts an optional discovery service option to get credentials for the permission service.

### `@backstage/plugin-search-backend-node` (1.2.17 → [1.2.21](../../changelogs/@backstage/plugin-search-backend-node.md#1221))

#### 1.2.21

##### Patch Changes

- [`d5a1fe1`](https://github.com/backstage/backstage/commit/d5a1fe1): Replaced winston logger with `LoggerService`

#### 1.2.18

##### Patch Changes

- [`0fb419b`](https://github.com/backstage/backstage/commit/0fb419b): Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- [`744c0cb`](https://github.com/backstage/backstage/commit/744c0cb): Exports `QueryTranslator`, `QueryRequestOptions` and `SearchEngine` types. These new types were extracted from the `@backstage/plugin-search-common` package and the `token` property was deprecated in favor of the a new credentials one.

### `@backstage/plugin-search-common` (1.2.10 → [1.2.11](../../changelogs/@backstage/plugin-search-common.md#1211))

#### 1.2.11

##### Patch Changes

- [`744c0cb`](https://github.com/backstage/backstage/commit/744c0cb): Deprecate `QueryTranslator`, `QueryRequestOptions` and `SearchEngine` in favor of the types exported from `@backstage/plugin-search-backend-node`.

### `@backstage/plugin-search-react` (1.7.6 → [1.7.10](../../changelogs/@backstage/plugin-search-react.md#1710))

#### 1.7.10

##### Patch Changes

- [`8d50bd3`](https://github.com/backstage/backstage/commit/8d50bd3): add mui imports eslint rule
- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 1.7.9

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 1.7.8

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

### `@backstage/plugin-techdocs` (1.10.0 → [1.10.4](../../changelogs/@backstage/plugin-techdocs.md#1104))

#### 1.10.4

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 1.10.3

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 1.10.2

##### Patch Changes

- [`e8f026a`](https://github.com/backstage/backstage/commit/e8f026a): Use ESM exports of react-use library

#### 1.10.1

##### Patch Changes

- [`7c2d022`](https://github.com/backstage/backstage/commit/7c2d022): Fixed bug in TechDocs sidebar render that prevented scrollbar from being displayed
- [`3f14e9f`](https://github.com/backstage/backstage/commit/3f14e9f): Implement a client cookie refresh mechanism.
- [`62bcaf8`](https://github.com/backstage/backstage/commit/62bcaf8): Use the new generic refresh user cookie provider.
- [`28f27f0`](https://github.com/backstage/backstage/commit/28f27f0): Added ESLint rule `no-top-level-material-ui-4-imports` to aid with the migration to Material UI v5.

### `@backstage/plugin-techdocs-addons-test-utils` (1.0.27 → [1.0.31](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#1031))

#### 1.0.31

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

#### 1.0.28

##### Patch Changes

- [`3f14e9f`](https://github.com/backstage/backstage/commit/3f14e9f): Mock the new issue user cookie api method.
- [`62bcaf8`](https://github.com/backstage/backstage/commit/62bcaf8): Use the new generic refresh user cookie provider.

### `@backstage/plugin-techdocs-module-addons-contrib` (1.1.5 → [1.1.9](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#119))

#### 1.1.9

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.
- [`cb1e3b0`](https://github.com/backstage/backstage/commit/cb1e3b0): Updated dependency `@testing-library/dom` to `^10.0.0`.

### `@backstage/test-utils` (1.5.0 → [1.5.4](../../changelogs/@backstage/test-utils.md#154))

#### 1.5.4

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.

### `@backstage/version-bridge` (1.0.7 → [1.0.8](../../changelogs/@backstage/version-bridge.md#108))

#### 1.0.8

##### Patch Changes

- [`abfbcfc`](https://github.com/backstage/backstage/commit/abfbcfc): Updated dependency `@testing-library/react` to `^15.0.0`.

### `@techdocs/cli` (1.8.5 → [1.8.10](../../changelogs/@techdocs/cli.md#1810))

#### 1.8.8

##### Patch Changes

- [`8caf2f7`](https://github.com/backstage/backstage/commit/8caf2f7): Fix how the cli server mocks the new auth cookie endpoint.

#### 1.8.6

##### Patch Changes

- [`1bd4596`](https://github.com/backstage/backstage/commit/1bd4596): Removed the `ts-node` dev dependency.

## Excluded dependency updates

- `@backstage/catalog-model` (1.4.4 → [1.4.5](../../changelogs/@backstage/catalog-model.md#145))
- `@backstage/plugin-app-node` (0.1.13 → [0.1.17](../../changelogs/@backstage/plugin-app-node.md#0117))
- `@backstage/plugin-app-visualizer` (0.1.1 → [0.1.5](../../changelogs/@backstage/plugin-app-visualizer.md#015))
- `@backstage/plugin-auth-backend-module-github-provider` (0.1.10 → [0.1.14](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#0114))
- `@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.10 → [0.1.14](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#0114))
- `@backstage/plugin-auth-backend-module-oauth2-provider` (0.1.10 → [0.1.14](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#0114))
- `@backstage/plugin-auth-backend-module-okta-provider` (0.0.6 → [0.0.10](../../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#0010))
- `@backstage/plugin-bitbucket-cloud-common` (0.2.16 → [0.2.18](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#0218))
- `@backstage/plugin-catalog-backend-module-openapi` (0.1.30 → [0.1.35](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0135))
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.10 → [0.1.15](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#0115))
- `@backstage/plugin-catalog-common` (1.0.21 → [1.0.22](../../changelogs/@backstage/plugin-catalog-common.md#1022))
- `@backstage/plugin-devtools-common` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-devtools-common.md#019))
- `@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.10 → [0.1.14](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#0114))
- `@backstage/plugin-scaffolder-common` (1.5.0 → [1.5.1](../../changelogs/@backstage/plugin-scaffolder-common.md#151))
- `@backstage/plugin-user-settings-backend` (0.2.12 → [0.2.16](../../changelogs/@backstage/plugin-user-settings-backend.md#0216))
