# RHDH Release 1.1 changelog

Changes between Backstage 1.19.6 (RHDH 1.0) and Backstage 1.23.4 (RHDH 1.1) — 28 added, 3 removed, 225 upgraded, 10 unchanged packages.

## Summary

- [Newly added packages](#newly-added-packages): 28 packages
- [Removed packages](#removed-packages): 3 packages
- [Breaking changes](#breaking-changes): 15 packages
- [Major version bumps](#major-version-bumps): 1 package
- [0.x minor version bumps](#0x-minor-version-bumps): 19 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 4 packages
- [0.x patch version bumps](#0x-patch-version-bumps): 149 packages
- [Other minor version bumps](#other-minor-version-bumps): 17 packages
- [Other patch version bumps](#other-patch-version-bumps): 11 packages
- [Excluded dependency updates](#excluded-dependency-updates): 9 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/backend-dynamic-feature-service` (new, 0.2.3)](#backstagebackend-dynamic-feature-service-new-023)
  - [`@backstage/core-compat-api` (new, 0.2.0)](#backstagecore-compat-api-new-020)
  - [`@backstage/frontend-test-utils` (new, 0.1.2)](#backstagefrontend-test-utils-new-012)
  - [`@backstage/plugin-app-visualizer` (new, 0.1.1)](#backstageplugin-app-visualizer-new-011)
  - [`@backstage/plugin-auth-backend-module-atlassian-provider` (new, 0.1.5)](#backstageplugin-auth-backend-module-atlassian-provider-new-015)
  - [`@backstage/plugin-auth-backend-module-aws-alb-provider` (new, 0.1.4)](#backstageplugin-auth-backend-module-aws-alb-provider-new-014)
  - [`@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (new, 0.1.6)](#backstageplugin-auth-backend-module-oauth2-proxy-provider-new-016)
  - [`@backstage/plugin-auth-backend-module-oidc-provider` (new, 0.1.3)](#backstageplugin-auth-backend-module-oidc-provider-new-013)
  - [`@backstage/plugin-auth-backend-module-okta-provider` (new, 0.0.6)](#backstageplugin-auth-backend-module-okta-provider-new-006)
  - [`@backstage/plugin-auth-backend-module-vmware-cloud-provider` (new, 0.1.5)](#backstageplugin-auth-backend-module-vmware-cloud-provider-new-015)
  - [`@backstage/plugin-catalog-backend-module-backstage-openapi` (new, 0.1.6)](#backstageplugin-catalog-backend-module-backstage-openapi-new-016)
  - [`@backstage/plugin-notifications` (new, 0.0.1)](#backstageplugin-notifications-new-001)
  - [`@backstage/plugin-notifications-backend` (new, 0.0.4)](#backstageplugin-notifications-backend-new-004)
  - [`@backstage/plugin-notifications-common` (new, 0.0.1)](#backstageplugin-notifications-common-new-001)
  - [`@backstage/plugin-notifications-node` (new, 0.0.4)](#backstageplugin-notifications-node-new-004)
  - [`@backstage/plugin-scaffolder-backend-module-azure` (new, 0.1.5)](#backstageplugin-scaffolder-backend-module-azure-new-015)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket` (new, 0.2.3)](#backstageplugin-scaffolder-backend-module-bitbucket-new-023)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (new, 0.1.3)](#backstageplugin-scaffolder-backend-module-bitbucket-cloud-new-013)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-server` (new, 0.1.3)](#backstageplugin-scaffolder-backend-module-bitbucket-server-new-013)
  - [`@backstage/plugin-scaffolder-backend-module-gerrit` (new, 0.1.5)](#backstageplugin-scaffolder-backend-module-gerrit-new-015)
  - [`@backstage/plugin-scaffolder-backend-module-gitea` (new, 0.1.3)](#backstageplugin-scaffolder-backend-module-gitea-new-013)
  - [`@backstage/plugin-scaffolder-backend-module-github` (new, 0.2.3)](#backstageplugin-scaffolder-backend-module-github-new-023)
  - [`@backstage/plugin-search-backend-module-stack-overflow-collator` (new, 0.1.6)](#backstageplugin-search-backend-module-stack-overflow-collator-new-016)
  - [`@backstage/plugin-signals` (new, 0.0.1)](#backstageplugin-signals-new-001)
  - [`@backstage/plugin-signals-backend` (new, 0.0.4)](#backstageplugin-signals-backend-new-004)
  - [`@backstage/plugin-signals-node` (new, 0.0.4)](#backstageplugin-signals-node-new-004)
  - [`@backstage/plugin-signals-react` (new, 0.0.1)](#backstageplugin-signals-react-new-001)
  - [`@backstage/plugin-vault-node` (new, 0.1.6)](#backstageplugin-vault-node-new-016)
- [Removed packages](#removed-packages)
- [Breaking changes](#breaking-changes)
  - [`@backstage/backend-common` (0.19.8 → 0.21.3)](#backstagebackend-common-0198--0213)
  - [`@backstage/core-components` (0.13.7 → 0.14.0)](#backstagecore-components-0137--0140)
  - [`@backstage/frontend-app-api` (0.2.0 → 0.6.0)](#backstagefrontend-app-api-020--060)
  - [`@backstage/frontend-plugin-api` (0.2.0 → 0.6.0)](#backstagefrontend-plugin-api-020--060)
  - [`@backstage/plugin-auth-backend` (0.19.4 → 0.21.3)](#backstageplugin-auth-backend-0194--0213)
  - [`@backstage/plugin-azure-devops-backend` (0.4.3 → 0.5.5)](#backstageplugin-azure-devops-backend-043--055)
  - [`@backstage/plugin-azure-sites-backend` (0.1.16 → 0.2.3)](#backstageplugin-azure-sites-backend-0116--023)
  - [`@backstage/plugin-catalog-react` (1.8.5 → 1.10.0)](#backstageplugin-catalog-react-185--1100)
  - [`@backstage/plugin-kubernetes` (0.11.0 → 0.11.5)](#backstageplugin-kubernetes-0110--0115)
  - [`@backstage/plugin-kubernetes-backend` (0.13.0 → 0.15.3)](#backstageplugin-kubernetes-backend-0130--0153)
  - [`@backstage/plugin-kubernetes-react` (0.1.0 → 0.3.0)](#backstageplugin-kubernetes-react-010--030)
  - [`@backstage/plugin-playlist` (0.1.17 → 0.2.4)](#backstageplugin-playlist-0117--024)
  - [`@backstage/plugin-scaffolder` (1.15.1 → 1.18.0)](#backstageplugin-scaffolder-1151--1180)
  - [`@backstage/plugin-scaffolder-react` (1.5.6 → 1.8.0)](#backstageplugin-scaffolder-react-156--180)
  - [`@backstage/repo-tools` (0.3.5 → 0.6.3)](#backstagerepo-tools-035--063)
- [Major version bumps](#major-version-bumps)
  - [`@backstage/plugin-dynatrace` (7.0.5 → 9.0.0)](#backstageplugin-dynatrace-705--900)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/backend-openapi-utils` (0.0.5 → 0.1.6)](#backstagebackend-openapi-utils-005--016)
  - [`@backstage/backend-test-utils` (0.2.7 → 0.3.3)](#backstagebackend-test-utils-027--033)
  - [`@backstage/cli` (0.23.1 → 0.25.2)](#backstagecli-0231--0252)
  - [`@backstage/cli-node` (0.1.5 → 0.2.3)](#backstagecli-node-015--023)
  - [`@backstage/plugin-analytics-module-ga` (0.1.34 → 0.2.0)](#backstageplugin-analytics-module-ga-0134--020)
  - [`@backstage/plugin-analytics-module-ga4` (0.1.5 → 0.2.0)](#backstageplugin-analytics-module-ga4-015--020)
  - [`@backstage/plugin-analytics-module-newrelic-browser` (0.0.3 → 0.1.0)](#backstageplugin-analytics-module-newrelic-browser-003--010)
  - [`@backstage/plugin-api-docs` (0.9.12 → 0.11.0)](#backstageplugin-api-docs-0912--0110)
  - [`@backstage/plugin-catalog-backend-module-github` (0.4.4 → 0.5.3)](#backstageplugin-catalog-backend-module-github-044--053)
  - [`@backstage/plugin-catalog-graph` (0.2.37 → 0.4.0)](#backstageplugin-catalog-graph-0237--040)
  - [`@backstage/plugin-cloudbuild` (0.3.25 → 0.4.0)](#backstageplugin-cloudbuild-0325--040)
  - [`@backstage/plugin-graphiql` (0.2.55 → 0.3.3)](#backstageplugin-graphiql-0255--033)
  - [`@backstage/plugin-home` (0.5.9 → 0.6.2)](#backstageplugin-home-059--062)
  - [`@backstage/plugin-lighthouse-backend` (0.3.3 → 0.4.5)](#backstageplugin-lighthouse-backend-033--045)
  - [`@backstage/plugin-pagerduty` (0.6.6 → 0.7.2)](#backstageplugin-pagerduty-066--072)
  - [`@backstage/plugin-scaffolder-node` (0.2.7 → 0.3.3)](#backstageplugin-scaffolder-node-027--033)
  - [`@backstage/plugin-user-settings` (0.7.11 → 0.8.1)](#backstageplugin-user-settings-0711--081)
  - [`@backstage/plugin-vault-backend` (0.3.11 → 0.4.6)](#backstageplugin-vault-backend-0311--046)
  - [`@backstage/theme` (0.4.3 → 0.5.1)](#backstagetheme-043--051)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-explore-backend` (0.0.16 → 0.0.23)](#backstageplugin-explore-backend-0016--0023)
  - [`@backstage/plugin-explore-react` (0.0.32 → 0.0.36)](#backstageplugin-explore-react-0032--0036)
  - [`@backstage/plugin-kubernetes-cluster` (0.0.1 → 0.0.6)](#backstageplugin-kubernetes-cluster-001--006)
  - [`@backstage/release-manifests` (0.0.10 → 0.0.11)](#backstagerelease-manifests-0010--0011)
- [0.x patch version bumps](#0x-patch-version-bumps)
  - [`@backstage/backend-app-api` (0.5.7 → 0.5.14)](#backstagebackend-app-api-057--0514)
  - [`@backstage/backend-defaults` (0.2.6 → 0.2.13)](#backstagebackend-defaults-026--0213)
  - [`@backstage/backend-dev-utils` (0.1.2 → 0.1.4)](#backstagebackend-dev-utils-012--014)
  - [`@backstage/backend-plugin-api` (0.6.6 → 0.6.13)](#backstagebackend-plugin-api-066--0613)
  - [`@backstage/backend-tasks` (0.5.11 → 0.5.18)](#backstagebackend-tasks-0511--0518)
  - [`@backstage/codemods` (0.1.46 → 0.1.47)](#backstagecodemods-0146--0147)
  - [`@backstage/create-app` (0.5.6 → 0.5.11)](#backstagecreate-app-056--0511)
  - [`@backstage/e2e-test-utils` (0.1.0 → 0.1.1)](#backstagee2e-test-utils-010--011)
  - [`@backstage/eslint-plugin` (0.1.3 → 0.1.5)](#backstageeslint-plugin-013--015)
  - [`@backstage/integration-aws-node` (0.1.7 → 0.1.9)](#backstageintegration-aws-node-017--019)
  - [`@backstage/plugin-adr` (0.6.8 → 0.6.13)](#backstageplugin-adr-068--0613)
  - [`@backstage/plugin-adr-backend` (0.4.3 → 0.4.10)](#backstageplugin-adr-backend-043--0410)
  - [`@backstage/plugin-airbrake` (0.3.25 → 0.3.30)](#backstageplugin-airbrake-0325--0330)
  - [`@backstage/plugin-airbrake-backend` (0.3.3 → 0.3.10)](#backstageplugin-airbrake-backend-033--0310)
  - [`@backstage/plugin-allure` (0.1.41 → 0.1.46)](#backstageplugin-allure-0141--0146)
  - [`@backstage/plugin-apache-airflow` (0.2.16 → 0.2.20)](#backstageplugin-apache-airflow-0216--0220)
  - [`@backstage/plugin-api-docs-module-protoc-gen-doc` (0.1.4 → 0.1.6)](#backstageplugin-api-docs-module-protoc-gen-doc-014--016)
  - [`@backstage/plugin-apollo-explorer` (0.1.16 → 0.1.20)](#backstageplugin-apollo-explorer-0116--0120)
  - [`@backstage/plugin-app-backend` (0.3.54 → 0.3.61)](#backstageplugin-app-backend-0354--0361)
  - [`@backstage/plugin-app-node` (0.1.6 → 0.1.13)](#backstageplugin-app-node-016--0113)
  - [`@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.2.0 → 0.2.8)](#backstageplugin-auth-backend-module-gcp-iap-provider-020--028)
  - [`@backstage/plugin-auth-backend-module-github-provider` (0.1.3 → 0.1.10)](#backstageplugin-auth-backend-module-github-provider-013--0110)
  - [`@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.3 → 0.1.10)](#backstageplugin-auth-backend-module-gitlab-provider-013--0110)
  - [`@backstage/plugin-auth-backend-module-google-provider` (0.1.3 → 0.1.10)](#backstageplugin-auth-backend-module-google-provider-013--0110)
  - [`@backstage/plugin-auth-backend-module-microsoft-provider` (0.1.1 → 0.1.8)](#backstageplugin-auth-backend-module-microsoft-provider-011--018)
  - [`@backstage/plugin-auth-backend-module-oauth2-provider` (0.1.3 → 0.1.10)](#backstageplugin-auth-backend-module-oauth2-provider-013--0110)
  - [`@backstage/plugin-auth-backend-module-pinniped-provider` (0.1.0 → 0.1.7)](#backstageplugin-auth-backend-module-pinniped-provider-010--017)
  - [`@backstage/plugin-auth-node` (0.4.0 → 0.4.8)](#backstageplugin-auth-node-040--048)
  - [`@backstage/plugin-azure-devops` (0.3.7 → 0.3.12)](#backstageplugin-azure-devops-037--0312)
  - [`@backstage/plugin-azure-devops-common` (0.3.1 → 0.3.2)](#backstageplugin-azure-devops-common-031--032)
  - [`@backstage/plugin-azure-sites` (0.1.14 → 0.1.19)](#backstageplugin-azure-sites-0114--0119)
  - [`@backstage/plugin-azure-sites-common` (0.1.1 → 0.1.2)](#backstageplugin-azure-sites-common-011--012)
  - [`@backstage/plugin-badges` (0.2.49 → 0.2.54)](#backstageplugin-badges-0249--0254)
  - [`@backstage/plugin-badges-backend` (0.3.3 → 0.3.10)](#backstageplugin-badges-backend-033--0310)
  - [`@backstage/plugin-bazaar` (0.2.17 → 0.2.22)](#backstageplugin-bazaar-0217--0222)
  - [`@backstage/plugin-bazaar-backend` (0.3.4 → 0.3.11)](#backstageplugin-bazaar-backend-034--0311)
  - [`@backstage/plugin-bitbucket-cloud-common` (0.2.13 → 0.2.16)](#backstageplugin-bitbucket-cloud-common-0213--0216)
  - [`@backstage/plugin-bitrise` (0.1.52 → 0.1.57)](#backstageplugin-bitrise-0152--0157)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.3.0 → 0.3.7)](#backstageplugin-catalog-backend-module-aws-030--037)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.1.25 → 0.1.32)](#backstageplugin-catalog-backend-module-azure-0125--0132)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.21 → 0.1.28)](#backstageplugin-catalog-backend-module-bitbucket-cloud-0121--0128)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.19 → 0.1.26)](#backstageplugin-catalog-backend-module-bitbucket-server-0119--0126)
  - [`@backstage/plugin-catalog-backend-module-gcp` (0.1.6 → 0.1.13)](#backstageplugin-catalog-backend-module-gcp-016--0113)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (0.1.22 → 0.1.29)](#backstageplugin-catalog-backend-module-gerrit-0122--0129)
  - [`@backstage/plugin-catalog-backend-module-github-org` (0.1.0 → 0.1.7)](#backstageplugin-catalog-backend-module-github-org-010--017)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.3.3 → 0.3.10)](#backstageplugin-catalog-backend-module-gitlab-033--0310)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.10 → 0.4.17)](#backstageplugin-catalog-backend-module-incremental-ingestion-0410--0417)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.5.13 → 0.5.20)](#backstageplugin-catalog-backend-module-msgraph-0513--0520)
  - [`@backstage/plugin-catalog-backend-module-openapi` (0.1.23 → 0.1.30)](#backstageplugin-catalog-backend-module-openapi-0123--0130)
  - [`@backstage/plugin-catalog-backend-module-puppetdb` (0.1.11 → 0.1.18)](#backstageplugin-catalog-backend-module-puppetdb-0111--0118)
  - [`@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.3 → 0.1.10)](#backstageplugin-catalog-backend-module-scaffolder-entity-model-013--0110)
  - [`@backstage/plugin-catalog-backend-module-unprocessed` (0.3.3 → 0.3.10)](#backstageplugin-catalog-backend-module-unprocessed-033--0310)
  - [`@backstage/plugin-catalog-import` (0.10.1 → 0.10.6)](#backstageplugin-catalog-import-0101--0106)
  - [`@backstage/plugin-catalog-unprocessed-entities` (0.1.4 → 0.1.8)](#backstageplugin-catalog-unprocessed-entities-014--018)
  - [`@backstage/plugin-cicd-statistics` (0.1.27 → 0.1.32)](#backstageplugin-cicd-statistics-0127--0132)
  - [`@backstage/plugin-cicd-statistics-module-gitlab` (0.1.21 → 0.1.26)](#backstageplugin-cicd-statistics-module-gitlab-0121--0126)
  - [`@backstage/plugin-circleci` (0.3.25 → 0.3.30)](#backstageplugin-circleci-0325--0330)
  - [`@backstage/plugin-code-climate` (0.1.25 → 0.1.30)](#backstageplugin-code-climate-0125--0130)
  - [`@backstage/plugin-code-coverage` (0.2.18 → 0.2.23)](#backstageplugin-code-coverage-0218--0223)
  - [`@backstage/plugin-code-coverage-backend` (0.2.20 → 0.2.27)](#backstageplugin-code-coverage-backend-0220--0227)
  - [`@backstage/plugin-codescene` (0.1.18 → 0.1.22)](#backstageplugin-codescene-0118--0122)
  - [`@backstage/plugin-config-schema` (0.1.46 → 0.1.50)](#backstageplugin-config-schema-0146--0150)
  - [`@backstage/plugin-cost-insights` (0.12.14 → 0.12.19)](#backstageplugin-cost-insights-01214--01219)
  - [`@backstage/plugin-devtools` (0.1.5 → 0.1.9)](#backstageplugin-devtools-015--019)
  - [`@backstage/plugin-devtools-backend` (0.2.3 → 0.2.10)](#backstageplugin-devtools-backend-023--0210)
  - [`@backstage/plugin-entity-feedback` (0.2.8 → 0.2.13)](#backstageplugin-entity-feedback-028--0213)
  - [`@backstage/plugin-entity-feedback-backend` (0.2.3 → 0.2.10)](#backstageplugin-entity-feedback-backend-023--0210)
  - [`@backstage/plugin-entity-validation` (0.1.10 → 0.1.15)](#backstageplugin-entity-validation-0110--0115)
  - [`@backstage/plugin-events-backend` (0.2.15 → 0.2.22)](#backstageplugin-events-backend-0215--0222)
  - [`@backstage/plugin-events-backend-module-aws-sqs` (0.2.9 → 0.2.16)](#backstageplugin-events-backend-module-aws-sqs-029--0216)
  - [`@backstage/plugin-events-backend-module-azure` (0.1.16 → 0.1.23)](#backstageplugin-events-backend-module-azure-0116--0123)
  - [`@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.16 → 0.1.23)](#backstageplugin-events-backend-module-bitbucket-cloud-0116--0123)
  - [`@backstage/plugin-events-backend-module-gerrit` (0.1.16 → 0.1.23)](#backstageplugin-events-backend-module-gerrit-0116--0123)
  - [`@backstage/plugin-events-backend-module-github` (0.1.16 → 0.1.23)](#backstageplugin-events-backend-module-github-0116--0123)
  - [`@backstage/plugin-events-backend-module-gitlab` (0.1.16 → 0.1.23)](#backstageplugin-events-backend-module-gitlab-0116--0123)
  - [`@backstage/plugin-explore` (0.4.11 → 0.4.16)](#backstageplugin-explore-0411--0416)
  - [`@backstage/plugin-firehydrant` (0.2.9 → 0.2.14)](#backstageplugin-firehydrant-029--0214)
  - [`@backstage/plugin-fossa` (0.2.57 → 0.2.62)](#backstageplugin-fossa-0257--0262)
  - [`@backstage/plugin-gcalendar` (0.3.19 → 0.3.23)](#backstageplugin-gcalendar-0319--0323)
  - [`@backstage/plugin-gcp-projects` (0.3.42 → 0.3.46)](#backstageplugin-gcp-projects-0342--0346)
  - [`@backstage/plugin-git-release-manager` (0.3.38 → 0.3.42)](#backstageplugin-git-release-manager-0338--0342)
  - [`@backstage/plugin-github-actions` (0.6.6 → 0.6.11)](#backstageplugin-github-actions-066--0611)
  - [`@backstage/plugin-github-deployments` (0.1.56 → 0.1.61)](#backstageplugin-github-deployments-0156--0161)
  - [`@backstage/plugin-github-issues` (0.2.14 → 0.2.19)](#backstageplugin-github-issues-0214--0219)
  - [`@backstage/plugin-github-pull-requests-board` (0.1.19 → 0.1.24)](#backstageplugin-github-pull-requests-board-0119--0124)
  - [`@backstage/plugin-gitops-profiles` (0.3.41 → 0.3.45)](#backstageplugin-gitops-profiles-0341--0345)
  - [`@backstage/plugin-gocd` (0.1.31 → 0.1.36)](#backstageplugin-gocd-0131--0136)
  - [`@backstage/plugin-graphql-voyager` (0.1.8 → 0.1.12)](#backstageplugin-graphql-voyager-018--0112)
  - [`@backstage/plugin-home-react` (0.1.4 → 0.1.8)](#backstageplugin-home-react-014--018)
  - [`@backstage/plugin-ilert` (0.2.14 → 0.2.19)](#backstageplugin-ilert-0214--0219)
  - [`@backstage/plugin-jenkins` (0.9.0 → 0.9.5)](#backstageplugin-jenkins-090--095)
  - [`@backstage/plugin-jenkins-backend` (0.3.0 → 0.3.7)](#backstageplugin-jenkins-backend-030--037)
  - [`@backstage/plugin-kafka` (0.3.25 → 0.3.30)](#backstageplugin-kafka-0325--0330)
  - [`@backstage/plugin-kafka-backend` (0.3.4 → 0.3.11)](#backstageplugin-kafka-backend-034--0311)
  - [`@backstage/plugin-kubernetes-common` (0.7.0 → 0.7.4)](#backstageplugin-kubernetes-common-070--074)
  - [`@backstage/plugin-kubernetes-node` (0.1.0 → 0.1.7)](#backstageplugin-kubernetes-node-010--017)
  - [`@backstage/plugin-lighthouse` (0.4.10 → 0.4.15)](#backstageplugin-lighthouse-0410--0415)
  - [`@backstage/plugin-linguist` (0.1.10 → 0.1.15)](#backstageplugin-linguist-0110--0115)
  - [`@backstage/plugin-linguist-backend` (0.5.3 → 0.5.10)](#backstageplugin-linguist-backend-053--0510)
  - [`@backstage/plugin-microsoft-calendar` (0.1.8 → 0.1.12)](#backstageplugin-microsoft-calendar-018--0112)
  - [`@backstage/plugin-newrelic` (0.3.41 → 0.3.45)](#backstageplugin-newrelic-0341--0345)
  - [`@backstage/plugin-newrelic-dashboard` (0.3.0 → 0.3.5)](#backstageplugin-newrelic-dashboard-030--035)
  - [`@backstage/plugin-nomad` (0.1.6 → 0.1.11)](#backstageplugin-nomad-016--0111)
  - [`@backstage/plugin-nomad-backend` (0.1.8 → 0.1.15)](#backstageplugin-nomad-backend-018--0115)
  - [`@backstage/plugin-octopus-deploy` (0.2.7 → 0.2.12)](#backstageplugin-octopus-deploy-027--0212)
  - [`@backstage/plugin-opencost` (0.2.1 → 0.2.5)](#backstageplugin-opencost-021--025)
  - [`@backstage/plugin-org` (0.6.15 → 0.6.20)](#backstageplugin-org-0615--0620)
  - [`@backstage/plugin-org-react` (0.1.14 → 0.1.19)](#backstageplugin-org-react-0114--0119)
  - [`@backstage/plugin-periskop` (0.1.23 → 0.1.28)](#backstageplugin-periskop-0123--0128)
  - [`@backstage/plugin-periskop-backend` (0.2.4 → 0.2.11)](#backstageplugin-periskop-backend-024--0211)
  - [`@backstage/plugin-permission-backend` (0.5.29 → 0.5.36)](#backstageplugin-permission-backend-0529--0536)
  - [`@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.3 → 0.1.10)](#backstageplugin-permission-backend-module-allow-all-policy-013--0110)
  - [`@backstage/plugin-permission-common` (0.7.9 → 0.7.12)](#backstageplugin-permission-common-079--0712)
  - [`@backstage/plugin-permission-node` (0.7.17 → 0.7.24)](#backstageplugin-permission-node-0717--0724)
  - [`@backstage/plugin-permission-react` (0.4.16 → 0.4.20)](#backstageplugin-permission-react-0416--0420)
  - [`@backstage/plugin-playlist-backend` (0.3.10 → 0.3.17)](#backstageplugin-playlist-backend-0310--0317)
  - [`@backstage/plugin-proxy-backend` (0.4.4 → 0.4.11)](#backstageplugin-proxy-backend-044--0411)
  - [`@backstage/plugin-puppetdb` (0.1.8 → 0.1.13)](#backstageplugin-puppetdb-018--0113)
  - [`@backstage/plugin-rollbar` (0.4.25 → 0.4.30)](#backstageplugin-rollbar-0425--0430)
  - [`@backstage/plugin-rollbar-backend` (0.1.51 → 0.1.58)](#backstageplugin-rollbar-backend-0151--0158)
  - [`@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.7 → 0.2.14)](#backstageplugin-scaffolder-backend-module-confluence-to-markdown-027--0214)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.30 → 0.2.37)](#backstageplugin-scaffolder-backend-module-cookiecutter-0230--0237)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.2.9 → 0.2.16)](#backstageplugin-scaffolder-backend-module-gitlab-029--0216)
  - [`@backstage/plugin-scaffolder-backend-module-rails` (0.4.23 → 0.4.30)](#backstageplugin-scaffolder-backend-module-rails-0423--0430)
  - [`@backstage/plugin-scaffolder-backend-module-sentry` (0.1.14 → 0.1.21)](#backstageplugin-scaffolder-backend-module-sentry-0114--0121)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.27 → 0.2.34)](#backstageplugin-scaffolder-backend-module-yeoman-0227--0234)
  - [`@backstage/plugin-search-backend-module-catalog` (0.1.10 → 0.1.17)](#backstageplugin-search-backend-module-catalog-0110--0117)
  - [`@backstage/plugin-search-backend-module-explore` (0.1.10 → 0.1.17)](#backstageplugin-search-backend-module-explore-0110--0117)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.15 → 0.5.22)](#backstageplugin-search-backend-module-pg-0515--0522)
  - [`@backstage/plugin-search-backend-module-techdocs` (0.1.10 → 0.1.17)](#backstageplugin-search-backend-module-techdocs-0110--0117)
  - [`@backstage/plugin-sentry` (0.5.10 → 0.5.15)](#backstageplugin-sentry-0510--0515)
  - [`@backstage/plugin-shortcuts` (0.3.15 → 0.3.19)](#backstageplugin-shortcuts-0315--0319)
  - [`@backstage/plugin-sonarqube` (0.7.7 → 0.7.12)](#backstageplugin-sonarqube-077--0712)
  - [`@backstage/plugin-sonarqube-backend` (0.2.8 → 0.2.15)](#backstageplugin-sonarqube-backend-028--0215)
  - [`@backstage/plugin-sonarqube-react` (0.1.9 → 0.1.13)](#backstageplugin-sonarqube-react-019--0113)
  - [`@backstage/plugin-splunk-on-call` (0.4.14 → 0.4.19)](#backstageplugin-splunk-on-call-0414--0419)
  - [`@backstage/plugin-stack-overflow` (0.1.21 → 0.1.25)](#backstageplugin-stack-overflow-0121--0125)
  - [`@backstage/plugin-stack-overflow-backend` (0.2.10 → 0.2.17)](#backstageplugin-stack-overflow-backend-0210--0217)
  - [`@backstage/plugin-stackstorm` (0.1.7 → 0.1.11)](#backstageplugin-stackstorm-017--0111)
  - [`@backstage/plugin-tech-insights` (0.3.17 → 0.3.22)](#backstageplugin-tech-insights-0317--0322)
  - [`@backstage/plugin-tech-insights-backend` (0.5.20 → 0.5.27)](#backstageplugin-tech-insights-backend-0520--0527)
  - [`@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.38 → 0.1.45)](#backstageplugin-tech-insights-backend-module-jsonfc-0138--0145)
  - [`@backstage/plugin-tech-insights-node` (0.4.12 → 0.4.19)](#backstageplugin-tech-insights-node-0412--0419)
  - [`@backstage/plugin-tech-radar` (0.6.9 → 0.6.13)](#backstageplugin-tech-radar-069--0613)
  - [`@backstage/plugin-todo` (0.2.29 → 0.2.34)](#backstageplugin-todo-0229--0234)
  - [`@backstage/plugin-todo-backend` (0.3.4 → 0.3.11)](#backstageplugin-todo-backend-034--0311)
  - [`@backstage/plugin-user-settings-backend` (0.2.5 → 0.2.12)](#backstageplugin-user-settings-backend-025--0212)
  - [`@backstage/plugin-vault` (0.1.20 → 0.1.25)](#backstageplugin-vault-0120--0125)
  - [`@backstage/plugin-xcmetrics` (0.2.44 → 0.2.48)](#backstageplugin-xcmetrics-0244--0248)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/app-defaults` (1.4.4 → 1.5.0)](#backstageapp-defaults-144--150)
  - [`@backstage/catalog-client` (1.4.5 → 1.6.0)](#backstagecatalog-client-145--160)
  - [`@backstage/config-loader` (1.5.2 → 1.6.2)](#backstageconfig-loader-152--162)
  - [`@backstage/core-app-api` (1.11.0 → 1.12.0)](#backstagecore-app-api-1110--1120)
  - [`@backstage/core-plugin-api` (1.7.0 → 1.9.0)](#backstagecore-plugin-api-170--190)
  - [`@backstage/integration` (1.7.1 → 1.9.0)](#backstageintegration-171--190)
  - [`@backstage/plugin-catalog` (1.14.0 → 1.17.0)](#backstageplugin-catalog-1140--1170)
  - [`@backstage/plugin-catalog-backend` (1.14.0 → 1.17.3)](#backstageplugin-catalog-backend-1140--1173)
  - [`@backstage/plugin-catalog-node` (1.4.7 → 1.7.3)](#backstageplugin-catalog-node-147--173)
  - [`@backstage/plugin-scaffolder-backend` (1.18.1 → 1.21.3)](#backstageplugin-scaffolder-backend-1181--1213)
  - [`@backstage/plugin-scaffolder-common` (1.4.2 → 1.5.0)](#backstageplugin-scaffolder-common-142--150)
  - [`@backstage/plugin-search-backend` (1.4.6 → 1.5.3)](#backstageplugin-search-backend-146--153)
  - [`@backstage/plugin-techdocs` (1.8.0 → 1.10.0)](#backstageplugin-techdocs-180--1100)
  - [`@backstage/plugin-techdocs-backend` (1.8.0 → 1.9.6)](#backstageplugin-techdocs-backend-180--196)
  - [`@backstage/plugin-techdocs-node` (1.9.0 → 1.11.5)](#backstageplugin-techdocs-node-190--1115)
  - [`@backstage/test-utils` (1.4.4 → 1.5.0)](#backstagetest-utils-144--150)
  - [`@techdocs/cli` (1.6.0 → 1.8.5)](#techdocscli-160--185)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/catalog-model` (1.4.3 → 1.4.4)](#backstagecatalog-model-143--144)
  - [`@backstage/dev-utils` (1.0.22 → 1.0.27)](#backstagedev-utils-1022--1027)
  - [`@backstage/integration-react` (1.1.20 → 1.1.24)](#backstageintegration-react-1120--1124)
  - [`@backstage/plugin-search` (1.4.1 → 1.4.6)](#backstageplugin-search-141--146)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.3.9 → 1.3.16)](#backstageplugin-search-backend-module-elasticsearch-139--1316)
  - [`@backstage/plugin-search-backend-node` (1.2.10 → 1.2.17)](#backstageplugin-search-backend-node-1210--1217)
  - [`@backstage/plugin-search-react` (1.7.1 → 1.7.6)](#backstageplugin-search-react-171--176)
  - [`@backstage/plugin-techdocs-addons-test-utils` (1.0.22 → 1.0.27)](#backstageplugin-techdocs-addons-test-utils-1022--1027)
  - [`@backstage/plugin-techdocs-module-addons-contrib` (1.1.1 → 1.1.5)](#backstageplugin-techdocs-module-addons-contrib-111--115)
  - [`@backstage/plugin-techdocs-react` (1.1.12 → 1.1.16)](#backstageplugin-techdocs-react-1112--1116)
  - [`@backstage/version-bridge` (1.0.6 → 1.0.7)](#backstageversion-bridge-106--107)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/backend-dynamic-feature-service` (new, [0.2.3](../../changelogs/@backstage/backend-dynamic-feature-service.md#023))

#### 0.2.0

##### Minor Changes

- [`d7adbbf`](https://github.com/backstage/backstage/commit/d7adbbf): Implement the discovery of additional individual configuration schemas for dynamic plugins, and provide:

  - an alternate implementation of the root logger service that takes them into account,
  - an extension to the App backend plugin to set a global configuration schema that takes them into account.

##### Patch Changes

- [`8723c5a`](https://github.com/backstage/backstage/commit/8723c5a): Fix wrong `alpha` support in dynamic plugins support: the `alpha` sub-package should not be required for the dynamic plugins to be loaded under the new backend system.
- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.
- [`6bb6f3e`](https://github.com/backstage/backstage/commit/6bb6f3e): Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.

#### 0.1.0

##### Minor Changes

- [`eb81f42`](https://github.com/backstage/backstage/commit/eb81f42): New `backend-dynamic-feature-service` package, for the discovery of dynamic frontend and backend plugins (and modules) and the loading of the backend ones inside the backend application.

### `@backstage/core-compat-api` (new, [0.2.0](../../changelogs/@backstage/core-compat-api.md#020))

#### 0.2.0

##### Minor Changes

- [`e586f79`](https://github.com/backstage/backstage/commit/e586f79): Add support to the new analytics api.

##### Patch Changes

- [`1fa5041`](https://github.com/backstage/backstage/commit/1fa5041): The backwards compatibility provider will now use the new `ComponentsApi` and `IconsApi` when implementing the old `AppContext`.
- [`edfd3a5`](https://github.com/backstage/backstage/commit/edfd3a5): Updated dependency `@oriflame/backstage-plugin-score-card` to `^0.8.0`.
- [`bc621aa`](https://github.com/backstage/backstage/commit/bc621aa): Updates to use the new `RouteResolutionsApi`.
- [`7155c30`](https://github.com/backstage/backstage/commit/7155c30): Added `convertLegacyRouteRefs` for bulk conversion of plugin routes.
- [`46b63de`](https://github.com/backstage/backstage/commit/46b63de): Allow external route refs in the new system to have a `defaultTarget` pointing to a route that it'll resolve to by default if no explicit bindings were made by the adopter.
- [`2f2a1d2`](https://github.com/backstage/backstage/commit/2f2a1d2): Plugins converted by `convertLegacyApp` now have their `routes` and `externalRoutes` included as well, allowing them to be used to bind external routes in configuration.
- [`1184990`](https://github.com/backstage/backstage/commit/1184990): collectLegacyRoutes throws in case invalid <Route /> element is found

#### 0.1.1

##### Patch Changes

- [`4c1f50c`](https://github.com/backstage/backstage/commit/4c1f50c): Make `convertLegacyApp` wrap discovered routes with `compatWrapper`.

#### 0.1.0

##### Minor Changes

- [`cf5cc4c`](https://github.com/backstage/backstage/commit/cf5cc4c): Discover plugins and routes recursively beneath the root routes in `collectLecacyRoutes`
- [`af7bc3e`](https://github.com/backstage/backstage/commit/af7bc3e): Switched all core extensions to instead use the namespace `'app'`.
- [`f63dd72`](https://github.com/backstage/backstage/commit/f63dd72): The `collectLegacyRoutes` has been removed and is replaced by `convertLegacyApp` now being able to convert a `FlatRoutes` element directly.

##### Patch Changes

- [`03d0b6d`](https://github.com/backstage/backstage/commit/03d0b6d): Added `convertLegacyRouteRef` utility to convert existing route refs to be used with the new experimental packages.
- [`a379243`](https://github.com/backstage/backstage/commit/a379243): Leverage the new `FrontendFeature` type to simplify interfaces
- [`8226442`](https://github.com/backstage/backstage/commit/8226442): Added `compatWrapper`, which can be used to wrap any React element to provide bi-directional interoperability between the `@backstage/core-*-api` and `@backstage/frontend-*-api` APIs.
- [`8f5d6c1`](https://github.com/backstage/backstage/commit/8f5d6c1): Updates to match the new extension input wrapping.
- [`c219b16`](https://github.com/backstage/backstage/commit/c219b16): Made package public so it can be published
- [`b7adf24`](https://github.com/backstage/backstage/commit/b7adf24): Delete alpha DI compatibility helper for components, migrating components should be simple without a helper.
- [`046e443`](https://github.com/backstage/backstage/commit/046e443): Updates for compatibility with the new extension IDs.

### `@backstage/frontend-test-utils` (new, [0.1.2](../../changelogs/@backstage/frontend-test-utils.md#012))

#### 0.1.2

##### Patch Changes

- [`bc621aa`](https://github.com/backstage/backstage/commit/bc621aa): Updates to use the new `RouteResolutionsApi`.
- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.

#### 0.1.1

##### Patch Changes

- [`f7566f9`](https://github.com/backstage/backstage/commit/f7566f9): Updates to reflect the `app/router` extension having been renamed to `app/root`.
- [`516fd3e`](https://github.com/backstage/backstage/commit/516fd3e): Updated README to reflect release status
- [`c97fa1c`](https://github.com/backstage/backstage/commit/c97fa1c): Added `elements`, `wrappers`, and `router` inputs to `app/root`, that let you add things to the root of the React tree above the layout. You can use the `createAppRootElementExtension`, `createAppRootWrapperExtension`, and `createRouterExtension` extension creator, respectively, to conveniently create such extensions. These are all optional, and if you do not supply a router a default one will be used (`BrowserRouter` in regular runs, `MemoryRouter` in tests/CI).

#### 0.1.0

##### Minor Changes

- [`59fabd5`](https://github.com/backstage/backstage/commit/59fabd5): New testing utility library for `@backstage/frontend-app-api` and `@backstage/frontend-plugin-api`.
- [`af7bc3e`](https://github.com/backstage/backstage/commit/af7bc3e): Switched all core extensions to instead use the namespace `'app'`.

##### Patch Changes

- [`59fabd5`](https://github.com/backstage/backstage/commit/59fabd5): Added `createExtensionTester` for rendering extensions in tests.
- [`7e4b0db`](https://github.com/backstage/backstage/commit/7e4b0db): The `createExtensionTester` helper is now able to render more than one route in the test app.
- [`818eea4`](https://github.com/backstage/backstage/commit/818eea4): Updates for compatibility with the new extension IDs.
- [`b9aa6e4`](https://github.com/backstage/backstage/commit/b9aa6e4): Migrate `renderInTestApp` to `@backstage/frontend-test-utils` for testing individual React components in an app.
- [`e539735`](https://github.com/backstage/backstage/commit/e539735): Updates for `core.router` addition.
- [`c21c9cf`](https://github.com/backstage/backstage/commit/c21c9cf): Re-export mock API implementations as well as `TestApiProvider`, `TestApiRegistry`, `withLogCollector`, and `setupRequestMockHandlers` from `@backstage/test-utils`.

### `@backstage/plugin-app-visualizer` (new, [0.1.1](../../changelogs/@backstage/plugin-app-visualizer.md#011))

#### 0.1.1

##### Patch Changes

- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.

#### 0.1.0

##### Minor Changes

- [`e57cc9f`](https://github.com/backstage/backstage/commit/e57cc9f): Initial release of the app visualizer plugin.

### `@backstage/plugin-auth-backend-module-atlassian-provider` (new, [0.1.5](../../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#015))

#### 0.1.2

##### Patch Changes

- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.

#### 0.1.1

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.0

##### Minor Changes

- [`2a5891e`](https://github.com/backstage/backstage/commit/2a5891e): New module for `@backstage/plugin-auth-backend` that adds an atlassian auth provider

##### Patch Changes

- [`a62764b`](https://github.com/backstage/backstage/commit/a62764b): Updated dependency `passport` to `^0.7.0`.

### `@backstage/plugin-auth-backend-module-aws-alb-provider` (new, [0.1.4](../../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#014))

#### 0.1.0

##### Minor Changes

- [`23a98f8`](https://github.com/backstage/backstage/commit/23a98f8): Migrated the AWS ALB auth provider to new `@backstage/plugin-auth-backend-module-aws-alb-provider` module package.

##### Patch Changes

- [`d309cad`](https://github.com/backstage/backstage/commit/d309cad): Refactored to use the `jose` library for JWT handling.

### `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (new, [0.1.6](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#016))

#### 0.1.2

##### Patch Changes

- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.

#### 0.1.1

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.0

##### Minor Changes

- [`271aa12`](https://github.com/backstage/backstage/commit/271aa12): Release of `oauth2-proxy-provider` plugin

##### Patch Changes

- [`a6be465`](https://github.com/backstage/backstage/commit/a6be465): Exported the provider as default so it gets discovered when using `featureDiscoveryServiceFactory()`
- [`510dab4`](https://github.com/backstage/backstage/commit/510dab4): Change provider id from `oauth2ProxyProvider` to `oauth2Proxy`
- [`cc4228e`](https://github.com/backstage/backstage/commit/cc4228e): Switched module ID to use kebab-case.

### `@backstage/plugin-auth-backend-module-oidc-provider` (new, [0.1.3](../../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#013))

#### 0.1.0

##### Minor Changes

- [`5d2fcba`](https://github.com/backstage/backstage/commit/5d2fcba): Created new `@backstage/plugin-auth-backend-module-oidc-provider` module package to house oidc auth provider migration.

##### Patch Changes

- [`e471890`](https://github.com/backstage/backstage/commit/e471890): Fixed a bug where the OIDC authenticator did not properly persist granted OAuth scopes.
- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.
- [`8afb6f4`](https://github.com/backstage/backstage/commit/8afb6f4): Updated dependency `passport` to `^0.7.0`.

### `@backstage/plugin-auth-backend-module-okta-provider` (new, [0.0.6](../../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#006))

#### 0.0.3

##### Patch Changes

- [`cd5114c`](https://github.com/backstage/backstage/commit/cd5114c): Added missing `additionalScopes` option to configuration schema.
- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.

#### 0.0.2

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.0.1

##### Patch Changes

- [`e1c189b`](https://github.com/backstage/backstage/commit/e1c189b): Adds okta-provider backend module for the auth plugin
- [`a62764b`](https://github.com/backstage/backstage/commit/a62764b): Updated dependency `passport` to `^0.7.0`.

### `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (new, [0.1.5](../../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#015))

#### 0.1.2

##### Patch Changes

- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.

#### 0.1.1

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.0

##### Minor Changes

- [`ed02c69`](https://github.com/backstage/backstage/commit/ed02c69): Add VMware Cloud auth backend module provider

### `@backstage/plugin-catalog-backend-module-backstage-openapi` (new, [0.1.6](../../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#016))

#### 0.1.3

##### Patch Changes

- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.

#### 0.1.2

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.1

##### Patch Changes

- [`eb44e92`](https://github.com/backstage/backstage/commit/eb44e92): Support authenticated backends

#### 0.1.0

##### Minor Changes

- [`785fb1ea75`](https://github.com/backstage/backstage/commit/785fb1ea75): Adds a new catalog module for ingesting Backstage plugin OpenAPI specs into the catalog for display as an API entity.

##### Patch Changes

- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/plugin-notifications` (new, [0.0.1](../../changelogs/@backstage/plugin-notifications.md#001))

#### 0.0.1

##### Patch Changes

- [`9873c44`](https://github.com/backstage/backstage/commit/9873c44): Add support for signal type in notifications
- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.
- [`fb8fc24`](https://github.com/backstage/backstage/commit/fb8fc24): Initial notifications system for backstage

### `@backstage/plugin-notifications-backend` (new, [0.0.4](../../changelogs/@backstage/plugin-notifications-backend.md#004))

#### 0.0.1

##### Patch Changes

- [`9873c44`](https://github.com/backstage/backstage/commit/9873c44): Add support for signal type in notifications
- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.
- [`fb8fc24`](https://github.com/backstage/backstage/commit/fb8fc24): Initial notifications system for backstage

### `@backstage/plugin-notifications-common` (new, [0.0.1](../../changelogs/@backstage/plugin-notifications-common.md#001))

#### 0.0.1

##### Patch Changes

- [`9873c44`](https://github.com/backstage/backstage/commit/9873c44): Add support for signal type in notifications
- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.
- [`fb8fc24`](https://github.com/backstage/backstage/commit/fb8fc24): Initial notifications system for backstage

### `@backstage/plugin-notifications-node` (new, [0.0.4](../../changelogs/@backstage/plugin-notifications-node.md#004))

#### 0.0.1

##### Patch Changes

- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.
- [`fb8fc24`](https://github.com/backstage/backstage/commit/fb8fc24): Initial notifications system for backstage

### `@backstage/plugin-scaffolder-backend-module-azure` (new, [0.1.5](../../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#015))

#### 0.1.2

##### Patch Changes

- [`e9a5228`](https://github.com/backstage/backstage/commit/e9a5228): Exporting a default module for the new Backend System
- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.

#### 0.1.1

##### Patch Changes

- [`d076ee4`](https://github.com/backstage/backstage/commit/d076ee4): Updated dependency `azure-devops-node-api` to `^12.0.0`.

#### 0.1.0

##### Minor Changes

- [`219d7f0`](https://github.com/backstage/backstage/commit/219d7f0): Create new scaffolder module for external integrations

### `@backstage/plugin-scaffolder-backend-module-bitbucket` (new, [0.2.3](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket.md#023))

#### 0.2.0

##### Minor Changes

- [`5eb6882`](https://github.com/backstage/backstage/commit/5eb6882): Split `@backstage/plugin-scaffolder-backend-module-bitbucket` into
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

- [`e9a5228`](https://github.com/backstage/backstage/commit/e9a5228): Exporting a default module for the new Backend System
- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.
- [`6bb6f3e`](https://github.com/backstage/backstage/commit/6bb6f3e): Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- [`fc98bb6`](https://github.com/backstage/backstage/commit/fc98bb6): Enhanced the pull request action to allow for adding new content to the PR as described in this issue #21762

#### 0.1.1

##### Patch Changes

- [`a694f71`](https://github.com/backstage/backstage/commit/a694f71): The Scaffolder builtin actions now contains an action for running pipelines from Bitbucket Cloud Rest API

#### 0.1.0

##### Minor Changes

- [`219d7f0`](https://github.com/backstage/backstage/commit/219d7f0): Create new scaffolder module for external integrations

### `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (new, [0.1.3](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#013))

#### 0.1.0

##### Minor Changes

- [`5eb6882`](https://github.com/backstage/backstage/commit/5eb6882): New scaffolder module `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud`.

  Extracted from `@backstage/plugin-scaffolder-backend-module-bitbucket`
  and replaces its actions related to Bitbucket Cloud.

  - `publish:bitbucketCloud`
  - `bitbucket:pipelines:run`

##### Patch Changes

- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.
- [`6bb6f3e`](https://github.com/backstage/backstage/commit/6bb6f3e): Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.

### `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (new, [0.1.3](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#013))

#### 0.1.0

##### Minor Changes

- [`5eb6882`](https://github.com/backstage/backstage/commit/5eb6882): New scaffolder module `@backstage/plugin-scaffolder-backend-module-bitbucket-server`.

  Extracted from `@backstage/plugin-scaffolder-backend-module-bitbucket`
  and replaces its actions related to Bitbucket Server.

  - `publish:bitbucketServer`
  - `publish:bitbucketServer:pull-request`

##### Patch Changes

- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.
- [`6bb6f3e`](https://github.com/backstage/backstage/commit/6bb6f3e): Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.

### `@backstage/plugin-scaffolder-backend-module-gerrit` (new, [0.1.5](../../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#015))

#### 0.1.2

##### Patch Changes

- [`e9a5228`](https://github.com/backstage/backstage/commit/e9a5228): Exporting a default module for the new Backend System
- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.
- [`8b269e1`](https://github.com/backstage/backstage/commit/8b269e1): Provide default branch when creating repositories.

#### 0.1.0

##### Minor Changes

- [`219d7f0`](https://github.com/backstage/backstage/commit/219d7f0): Create new scaffolder module for external integrations

##### Patch Changes

- [`d86cd98`](https://github.com/backstage/backstage/commit/d86cd98): Add dry run support for the `publish:gerrit` action.

### `@backstage/plugin-scaffolder-backend-module-gitea` (new, [0.1.3](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#013))

#### 0.1.0

##### Minor Changes

- [`458bf21`](https://github.com/backstage/backstage/commit/458bf21): Created a gitea module for the scaffolder. This module provides a new action "publish:gitea" able to create a gitea repository owned by an organization. See: https://gitea.com/api/swagger#/organization/createOrgRepo

##### Patch Changes

- [`ef0f44e`](https://github.com/backstage/backstage/commit/ef0f44e): - Fix issue for infinite loop when repository already exists
  - Log the root cause of error reported by `checkGiteaOrg`

### `@backstage/plugin-scaffolder-backend-module-github` (new, [0.2.3](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#023))

#### 0.2.0

##### Minor Changes

- [`fd5eb1c`](https://github.com/backstage/backstage/commit/fd5eb1c): Allow to force the creation of a pull request from a forked repository
- [`3d5c668`](https://github.com/backstage/backstage/commit/3d5c668): support oidc customization

##### Patch Changes

- [`e9a5228`](https://github.com/backstage/backstage/commit/e9a5228): Exporting a default module for the new Backend System
- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.
- [`6bb6f3e`](https://github.com/backstage/backstage/commit/6bb6f3e): Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.

#### 0.1.1

##### Patch Changes

- [`5470300`](https://github.com/backstage/backstage/commit/5470300): Ensure `teamReviewers` list is unique before calling API
- [`bf92ae3`](https://github.com/backstage/backstage/commit/bf92ae3): Updated dependency `octokit` to `^3.0.0`.

#### 0.1.0

##### Minor Changes

- [`219d7f0`](https://github.com/backstage/backstage/commit/219d7f0): Create new scaffolder module for external integrations

##### Patch Changes

- [`cb6a65e`](https://github.com/backstage/backstage/commit/cb6a65e): The `scaffolder.defaultCommitMessage` config value is now being used if provided and uses "initial commit" when it is not provided.
- [`28949ea`](https://github.com/backstage/backstage/commit/28949ea): Add a new action for creating github-autolink references for a repository: `github:autolinks:create`

### `@backstage/plugin-search-backend-module-stack-overflow-collator` (new, [0.1.6](../../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#016))

#### 0.1.3

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.

#### 0.1.2

##### Patch Changes

- [`2e6c56b`](https://github.com/backstage/backstage/commit/2e6c56b): Update wording to show that the backend system no longer is in alpha

#### 0.1.1

##### Patch Changes

- [`cc4228e`](https://github.com/backstage/backstage/commit/cc4228e): Switched module ID to use kebab-case.

#### 0.1.0

##### Minor Changes

- [`46f0f1700e`](https://github.com/backstage/backstage/commit/46f0f1700e): Extract a package for the Stack Overflow new backend system plugin.

### `@backstage/plugin-signals` (new, [0.0.1](../../changelogs/@backstage/plugin-signals.md#001))

#### 0.0.1

##### Patch Changes

- [`447d210`](https://github.com/backstage/backstage/commit/447d210): Fix disconnect loop on server start
- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.
- [`047bead`](https://github.com/backstage/backstage/commit/047bead): Add support to subscribe and publish messages through signals plugins
- [`1ab22c4`](https://github.com/backstage/backstage/commit/1ab22c4): Allow defining signal type to publish and receive

### `@backstage/plugin-signals-backend` (new, [0.0.4](../../changelogs/@backstage/plugin-signals-backend.md#004))

#### 0.0.1

##### Patch Changes

- [`447d210`](https://github.com/backstage/backstage/commit/447d210): Fix disconnect loop on server start
- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.
- [`047bead`](https://github.com/backstage/backstage/commit/047bead): Add support to subscribe and publish messages through signals plugins

### `@backstage/plugin-signals-node` (new, [0.0.4](../../changelogs/@backstage/plugin-signals-node.md#004))

#### 0.0.1

##### Patch Changes

- [`447d210`](https://github.com/backstage/backstage/commit/447d210): Fix disconnect loop on server start
- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.
- [`047bead`](https://github.com/backstage/backstage/commit/047bead): Add support to subscribe and publish messages through signals plugins
- [`1ab22c4`](https://github.com/backstage/backstage/commit/1ab22c4): Allow defining signal type to publish and receive

### `@backstage/plugin-signals-react` (new, [0.0.1](../../changelogs/@backstage/plugin-signals-react.md#001))

#### 0.0.1

##### Patch Changes

- [`447d210`](https://github.com/backstage/backstage/commit/447d210): Fix disconnect loop on server start
- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.
- [`047bead`](https://github.com/backstage/backstage/commit/047bead): Add support to subscribe and publish messages through signals plugins
- [`1ab22c4`](https://github.com/backstage/backstage/commit/1ab22c4): Allow defining signal type to publish and receive

### `@backstage/plugin-vault-node` (new, [0.1.6](../../changelogs/@backstage/plugin-vault-node.md#016))

#### 0.1.3

##### Patch Changes

- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.

#### 0.1.0

##### Minor Changes

- [`7a41bcf2af`](https://github.com/backstage/backstage/commit/7a41bcf2af): Initial version of the `plugin-vault-node`` package. It contains the extension point definitions
  for the vault backend, as well as some types that will be deprecated in the backend plugin.

## Removed packages

- `@backstage/plugin-catalog-backend-module-bitbucket` ([0.2.21](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket.md#0221))
- `@backstage/plugin-catalog-graphql` ([0.4.0](../../changelogs/@backstage/plugin-catalog-graphql.md#040))
- `@backstage/plugin-graphql-backend` ([0.2.0](../../changelogs/@backstage/plugin-graphql-backend.md#020))

## Breaking changes

### `@backstage/backend-common` (0.19.8 → [0.21.3](../../changelogs/@backstage/backend-common.md#0213))

#### 0.21.0

##### Minor Changes

- [`bbe374e`](https://github.com/backstage/backstage/commit/bbe374e): **BREAKING**: `A gitilesBaseUrl` must be provided for the Gerrit integration to work.
  You can disable this check by setting `DISABLE_GERRIT_GITILES_REQUIREMENT=1` but
  this will be removed in a future release. If you are not able to use the Gitiles
  Gerrit plugin, please open an issue towards `https://github.com/backstage/backstage`
- [`e85aa98`](https://github.com/backstage/backstage/commit/e85aa98): drop databases after unit tests if the database instance is not running in docker

##### Patch Changes

- [`6707216`](https://github.com/backstage/backstage/commit/6707216): Added a new `LegacyRootDatabaseService` interface that can be used to avoid direct dependencies on the `DatabaseManager`.
- [`842171a`](https://github.com/backstage/backstage/commit/842171a): Fix a bug with S3 Fetch that caused all objects to be flattened within a single folder on the local file system.
- [`3489d05`](https://github.com/backstage/backstage/commit/3489d05): `FetchUrlReader#readUrl()` now supports passing an optional `token` to authenticate requests.
- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`ece5a8f`](https://github.com/backstage/backstage/commit/ece5a8f): Add a User-Agent header for calls towards Google Cloud Storage.
- [`1f020fe`](https://github.com/backstage/backstage/commit/1f020fe): Support `token` in `readTree`, `readUrl` and `search`
- [`6bb6f3e`](https://github.com/backstage/backstage/commit/6bb6f3e): Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- [`d2e3ab9`](https://github.com/backstage/backstage/commit/d2e3ab9): Updated dependency `dockerode` to `^4.0.0`.
- [`1cae748`](https://github.com/backstage/backstage/commit/1cae748): Updated dependency `git-url-parse` to `^14.0.0`.
- [`e27b7f3`](https://github.com/backstage/backstage/commit/e27b7f3): Fix rate limit detection by looking for HTTP status code 429 and updating the header `x-ratelimit-remaining` to look for in case of a 403 code is returned
- [`7fb7a79`](https://github.com/backstage/backstage/commit/7fb7a79): Add a config declaration for `workingDirectory`

#### 0.20.1

##### Patch Changes

- [`3b24eae`](https://github.com/backstage/backstage/commit/3b24eae): Adding support for removing file from git index
- [`454d17c`](https://github.com/backstage/backstage/commit/454d17c): Do not call fetch directly but rather use `fetchResponse` facility
- [`b6b15b2`](https://github.com/backstage/backstage/commit/b6b15b2): Use sha256 instead of md5 for hash key calculation in caches

  This can have a side effect of invalidating caches (when cache key was >250 characters)
  This improves compliance with FIPS nodejs

#### 0.20.0

##### Minor Changes

- [`870db76`](https://github.com/backstage/backstage/commit/870db76): Implemented `readTree` for Gitea provider to support TechDocs functionality

##### Patch Changes

- [`7f04128`](https://github.com/backstage/backstage/commit/7f04128): Allow a default cache TTL to be set through the app config
- [`1ad8906`](https://github.com/backstage/backstage/commit/1ad8906): Use `Readable.from` to fix some of the stream issues
- [`d86a007`](https://github.com/backstage/backstage/commit/d86a007): Fixed the AwsS3UrlReader host regex and host to allow the S3 reading for CN AWS domain
- [`bc67498`](https://github.com/backstage/backstage/commit/bc67498): Updated dependency `archiver` to `^6.0.0`.
  Updated dependency `@types/archiver` to `^6.0.0`.
- [`706fc3a`](https://github.com/backstage/backstage/commit/706fc3a): Updated dependency `@kubernetes/client-node` to `0.20.0`.
- [`2666675`](https://github.com/backstage/backstage/commit/2666675): Updated dependency `@google-cloud/storage` to `^7.0.0`.
- [`d15d483`](https://github.com/backstage/backstage/commit/d15d483): Add command `--runAsDefaultUser` for `@techdocs/cli generate` to bypass running the docker builds as host user for macOS and Linux.
- [`d1e00aa`](https://github.com/backstage/backstage/commit/d1e00aa): Expose an `onAuth` handler for `git` actions to provide custom credentials

#### 0.19.9

##### Patch Changes

- [`aa13482090`](https://github.com/backstage/backstage/commit/aa13482090): Limit the database creation concurrency to one, defensively
- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.
- [`3d043526f4`](https://github.com/backstage/backstage/commit/3d043526f4): Updated dependency `aws-sdk-client-mock` to `^3.0.0`.

### `@backstage/core-components` (0.13.7 → [0.14.0](../../changelogs/@backstage/core-components.md#0140))

#### 0.14.0

##### Minor Changes

- [`281e8c6`](https://github.com/backstage/backstage/commit/281e8c6): **BREAKING**: Removed the `SidebarIntro` component as it was providing instructions for features that do not exist, along with `IntroCard`. If you were relying on this component and want to keep using it you can refer to the original implementations of [`SidebarIntro`](https://github.com/backstage/backstage/blob/80f2413334ed9b221ec3c2b7c22fa737ad8d8885/packages/core-components/src/layout/Sidebar/Intro.tsx#L149) and [`IntroCard`](https://github.com/backstage/backstage/blob/80f2413334ed9b221ec3c2b7c22fa737ad8d8885/packages/core-components/src/layout/Sidebar/Intro.tsx#L100).

##### Patch Changes

- [`3e1c6e2`](https://github.com/backstage/backstage/commit/3e1c6e2): Added possibility to show arrow heads for graph edges for better understandability.

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

- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.
- [`7f11009`](https://github.com/backstage/backstage/commit/7f11009): Added stack trace display to `ErrorPage` and updated existing refs
- [`09cedb9`](https://github.com/backstage/backstage/commit/09cedb9): Updated dependency `@react-hookz/web` to `^24.0.0`.
- [`214f2da`](https://github.com/backstage/backstage/commit/214f2da): Fix invalid HTTP status code 501 in Error Page

#### 0.13.10

##### Patch Changes

- [`d625f66`](https://github.com/backstage/backstage/commit/d625f66): Fixed bug in Link where it was possible to select and copy a hidden element into clipboard
- [`6878b1d`](https://github.com/backstage/backstage/commit/6878b1d): Removed unnecessary `history` and `immer` dependencies.

#### 0.13.9

##### Patch Changes

- [`e8f2ace`](https://github.com/backstage/backstage/commit/e8f2ace): Added a new `/testUtils` sub-path that initially exports a `mockBreakpoint` helper.
- [`381ed86`](https://github.com/backstage/backstage/commit/381ed86): Add missing export for IconLinkVertical
- [`5c8a3e3`](https://github.com/backstage/backstage/commit/5c8a3e3): Minor improvements to `Table` component.
- [`752df93`](https://github.com/backstage/backstage/commit/752df93): Fixes a problem where the `LogViewer` was not able to handle very large logs
- [`4d9e3b3`](https://github.com/backstage/backstage/commit/4d9e3b3): Register component overrides in the global `OverrideComponentNameToClassKeys` provided by `@backstage/theme`. This will in turn will provide component style override types for `createUnifiedTheme`.
- [`07dfdf3`](https://github.com/backstage/backstage/commit/07dfdf3): Updated dependency `linkifyjs` to `4.1.3`.
- [`a518c5a`](https://github.com/backstage/backstage/commit/a518c5a): Updated dependency `@react-hookz/web` to `^23.0.0`.
- [`f291757`](https://github.com/backstage/backstage/commit/f291757): Update `linkify-react` to version `4.1.3`
- [`175d86b`](https://github.com/backstage/backstage/commit/175d86b): Fixed an issue where the `onChange` prop within `HeaderTabs` was triggering twice upon tab-switching.
- [`0cbb03b`](https://github.com/backstage/backstage/commit/0cbb03b): Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617

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

### `@backstage/frontend-app-api` (0.2.0 → [0.6.0](../../changelogs/@backstage/frontend-app-api.md#060))

#### 0.6.0

##### Minor Changes

- [`bdf4a8e`](https://github.com/backstage/backstage/commit/bdf4a8e): **BREAKING**: Removed the experimental `createExtensionTree` API.
- [`86346c2`](https://github.com/backstage/backstage/commit/86346c2): **BREAKING**: The `app.routes.bindings` app-config mapping has been simplified. You now only need to specify the plugin ID and route ID on both sides of the mapping.

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

- [`42ebf27`](https://github.com/backstage/backstage/commit/42ebf27): Added `IconsApi` implementation and the ability to configure icons through the `icons` option for `createApp` and `createSpecializedApp`. This is not a long-term solution as icons should be installable via extensions instead. This is just a stop-gap to make sure there is feature parity with the existing frontend system.
- [`bc621aa`](https://github.com/backstage/backstage/commit/bc621aa): Updates to use the new `RouteResolutionsApi`.
- [`e586f79`](https://github.com/backstage/backstage/commit/e586f79): Wrap the root element with the analytics context to ensure it always exists for all extensions.
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.
- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.
- [`e0a4dd1`](https://github.com/backstage/backstage/commit/e0a4dd1): Improved the error message when data input/output shapes do not match
- [`fb9b5e7`](https://github.com/backstage/backstage/commit/fb9b5e7): The default `ComponentsApi` implementation now uses the `ComponentRef` ID as the component key, rather than the reference instance. This fixes a bug where duplicate installations of `@backstage/frontend-plugin-api` would break the app.
- [`46b63de`](https://github.com/backstage/backstage/commit/46b63de): Allow external route refs in the new system to have a `defaultTarget` pointing to a route that it'll resolve to by default if no explicit bindings were made by the adopter.

#### 0.5.0

##### Minor Changes

- [`d4149bf`](https://github.com/backstage/backstage/commit/d4149bf): **BREAKING**: Renamed the `app/router` extension to `app/root`.
- [`074dfe3`](https://github.com/backstage/backstage/commit/074dfe3): Attaching extensions to an input that does not exist is now a warning rather than an error.

##### Patch Changes

- [`7d63b32`](https://github.com/backstage/backstage/commit/7d63b32): Accepts sub route refs on the new `createPlugin` routes map.
- [`516fd3e`](https://github.com/backstage/backstage/commit/516fd3e): Updated README to reflect release status
- [`c97fa1c`](https://github.com/backstage/backstage/commit/c97fa1c): Added `elements`, `wrappers`, and `router` inputs to `app/root`, that let you add things to the root of the React tree above the layout. You can use the `createAppRootElementExtension`, `createAppRootWrapperExtension`, and `createRouterExtension` extension creator, respectively, to conveniently create such extensions. These are all optional, and if you do not supply a router a default one will be used (`BrowserRouter` in regular runs, `MemoryRouter` in tests/CI).
- [`5fe6600`](https://github.com/backstage/backstage/commit/5fe6600): add oauth dialog and alert display to the root elements

#### 0.4.0

##### Minor Changes

- [`e539735`](https://github.com/backstage/backstage/commit/e539735): Updated core extension structure to make space for the sign-in page by adding `core.router`.
- [`44735df`](https://github.com/backstage/backstage/commit/44735df): Removed `featureLoader` from `createApp`, `features` instead accepts both `FrontendFeature` and `CreateAppFeatureLoader`
- [`af7bc3e`](https://github.com/backstage/backstage/commit/af7bc3e): Switched all core extensions to instead use the namespace `'app'`.
- [`ea06590`](https://github.com/backstage/backstage/commit/ea06590): The app no longer provides the `AppContext` from `@backstage/core-plugin-api`. Components that require this context to be available should use the `compatWrapper` helper from `@backstage/core-compat-api`.

##### Patch Changes

- [`5eb6b8a`](https://github.com/backstage/backstage/commit/5eb6b8a): Added the nav logo extension for customization of sidebar logo
- [`aeb8008`](https://github.com/backstage/backstage/commit/aeb8008): Add support for translation extensions.
- [`1f12fb7`](https://github.com/backstage/backstage/commit/1f12fb7): Create a core components extension that allows adopters to override core app components such as `Progress`, `BootErrorPage`, `NotFoundErrorPage` and `ErrorBoundaryFallback`.
- [`a379243`](https://github.com/backstage/backstage/commit/a379243): Leverage the new `FrontendFeature` type to simplify interfaces
- [`60d6eb5`](https://github.com/backstage/backstage/commit/60d6eb5): Removed `@backstage/plugin-graphiql` dependency.
- [`b7adf24`](https://github.com/backstage/backstage/commit/b7adf24): Use the new plugin type for error boundary components.
- [`5970928`](https://github.com/backstage/backstage/commit/5970928): Collect and register feature flags from plugins and extension overrides.
- [`9ad4039`](https://github.com/backstage/backstage/commit/9ad4039): Bringing over apis from core-plugin-api
- [`8f5d6c1`](https://github.com/backstage/backstage/commit/8f5d6c1): Updates to match the new extension input wrapping.
- [`c35036b`](https://github.com/backstage/backstage/commit/c35036b): A `configLoader` passed to `createApp` now returns an object, to make room for future expansion
- [`f27ee7d`](https://github.com/backstage/backstage/commit/f27ee7d): Migrate analytics route tracker component.
- [`b8cb780`](https://github.com/backstage/backstage/commit/b8cb780): Added `createSpecializedApp`, which is a synchronous version of `createApp` where config and features already need to be loaded.
- [`c36e0b9`](https://github.com/backstage/backstage/commit/c36e0b9): Renamed `AppRouteBinder` to `CreateAppRouteBinder`
- [`cb4197a`](https://github.com/backstage/backstage/commit/cb4197a): Forward ` node`` instead of  `extensionId` to resolved extension inputs.
- [`8837a96`](https://github.com/backstage/backstage/commit/8837a96): Updates to match the introduction of `ExtensionDefinition` and new extension ID naming patterns.
- [`a5a0473`](https://github.com/backstage/backstage/commit/a5a0473): Updates to provide `node` to extension factories instead of `id` and `source`.
- [`5cdf2b3`](https://github.com/backstage/backstage/commit/5cdf2b3): Updated usage of `Extension` and `ExtensionDefinition` as they are now opaque.
- [`f9ef632`](https://github.com/backstage/backstage/commit/f9ef632): Updates to match the new `coreExtensionData` structure.
- [`f1183b7`](https://github.com/backstage/backstage/commit/f1183b7): Renamed the `component` option of `createComponentExtension` to `loader`.

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

### `@backstage/frontend-plugin-api` (0.2.0 → [0.6.0](../../changelogs/@backstage/frontend-plugin-api.md#060))

#### 0.6.0

##### Minor Changes

- [`e586f79`](https://github.com/backstage/backstage/commit/e586f79): **BREAKING**: Replace default plugin extension and plugin ids to be `app` instead of `root`.

##### Patch Changes

- [`7eae3e0`](https://github.com/backstage/backstage/commit/7eae3e0): Added initial `IconsApi` definition.
- [`f919be9`](https://github.com/backstage/backstage/commit/f919be9): Added a utility API for VMware Cloud auth; the API ref is available in the
  `@backstage/core-plugin-api` and `@backstage/frontend-plugin-api` packages, the
  implementation is in `@backstage/core-app-api` and a factory has been added to
  `@backstage/app-defaults`.
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.
- [`bc621aa`](https://github.com/backstage/backstage/commit/bc621aa): Added `RouteResolutionsApi` as a replacement for the routing context.
- [`1e61ad3`](https://github.com/backstage/backstage/commit/1e61ad3): App component extensions are no longer wrapped in an `ExtensionBoundary`, allowing them to inherit the outer context instead.
- [`46b63de`](https://github.com/backstage/backstage/commit/46b63de): Allow external route refs in the new system to have a `defaultTarget` pointing to a route that it'll resolve to by default if no explicit bindings were made by the adopter.

#### 0.5.0

##### Minor Changes

- [`d4149bf`](https://github.com/backstage/backstage/commit/d4149bf): **BREAKING**: Renamed the `app/router` extension to `app/root`.

##### Patch Changes

- [`b2d370e`](https://github.com/backstage/backstage/commit/b2d370e): Exposed `createComponentRef`, and ensured that produced refs and feature bits have a `toString` for easier debugging
- [`7d63b32`](https://github.com/backstage/backstage/commit/7d63b32): Accepts sub route refs on the new `createPlugin` routes map.
- [`516fd3e`](https://github.com/backstage/backstage/commit/516fd3e): Updated README to reflect release status
- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies
- [`c97fa1c`](https://github.com/backstage/backstage/commit/c97fa1c): Added `elements`, `wrappers`, and `router` inputs to `app/root`, that let you add things to the root of the React tree above the layout. You can use the `createAppRootElementExtension`, `createAppRootWrapperExtension`, and `createRouterExtension` extension creator, respectively, to conveniently create such extensions. These are all optional, and if you do not supply a router a default one will be used (`BrowserRouter` in regular runs, `MemoryRouter` in tests/CI).

#### 0.4.0

##### Minor Changes

- [`af7bc3e`](https://github.com/backstage/backstage/commit/af7bc3e): Switched all core extensions to instead use the namespace `'app'`.
- [`5cdf2b3`](https://github.com/backstage/backstage/commit/5cdf2b3): Changed `Extension` and `ExtensionDefinition` to use opaque types.
- [`8f5d6c1`](https://github.com/backstage/backstage/commit/8f5d6c1): Extension inputs are now wrapped into an additional object when passed to the extension factory, with the previous values being available at the `output` property. The `ExtensionInputValues` type has also been replaced by `ResolvedExtensionInputs`.
- [`8837a96`](https://github.com/backstage/backstage/commit/8837a96): **BREAKING**: This version changes how extensions are created and how their IDs are determined. The `createExtension` function now accepts `kind`, `namespace` and `name` instead of `id`. All of the new options are optional, and are used to construct the final extension ID. By convention extension creators should set the `kind` to match their own name, for example `createNavItemExtension` sets the kind `nav-item`.

  The `createExtension` function as well as all extension creators now also return an `ExtensionDefinition` rather than an `Extension`, which in turn needs to be passed to `createPlugin` or `createExtensionOverrides` to be used.

- [`f9ef632`](https://github.com/backstage/backstage/commit/f9ef632): Moved several extension data references from `coreExtensionData` to their respective extension creators.
- [`a5a0473`](https://github.com/backstage/backstage/commit/a5a0473): The extension `factory` function now longer receives `id` or `source`, but instead now provides the extension's `AppNode` as `node`. The `ExtensionBoundary` component has also been updated to receive a `node` prop rather than `id` and `source`.

##### Patch Changes

- [`a379243`](https://github.com/backstage/backstage/commit/a379243): Add the `FrontendFeature` type, which is the union of `BackstagePlugin` and `ExtensionOverrides`
- [`b7adf24`](https://github.com/backstage/backstage/commit/b7adf24): Update alpha component ref type to be more specific than any, delete boot page component and use new plugin type for error boundary component extensions.
- [`5eb6b8a`](https://github.com/backstage/backstage/commit/5eb6b8a): Added the nav logo extension for customization of sidebar logo
- [`1f12fb7`](https://github.com/backstage/backstage/commit/1f12fb7): Create factories for overriding default core components extensions.
- [`5970928`](https://github.com/backstage/backstage/commit/5970928): Add feature flags to plugins and extension overrides.
- [`e539735`](https://github.com/backstage/backstage/commit/e539735): Added `createSignInPageExtension`.
- [`73246ec`](https://github.com/backstage/backstage/commit/73246ec): Added translation APIs as well as `createTranslationExtension`.
- [`cb4197a`](https://github.com/backstage/backstage/commit/cb4197a): Forward ` node`` instead of  `extensionId` to resolved extension inputs.
- [`f27ee7d`](https://github.com/backstage/backstage/commit/f27ee7d): Migrate analytics api and context files.
- [`0cbb03b`](https://github.com/backstage/backstage/commit/0cbb03b): Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617
- [`f1183b7`](https://github.com/backstage/backstage/commit/f1183b7): Renamed the `component` option of `createComponentExtension` to `loader`.

#### 0.3.0

##### Minor Changes

- [`68fc9dc60e`](https://github.com/backstage/backstage/commit/68fc9dc60e): Added `RouteRef`, `SubRouteRef`, `ExternalRouteRef`, and related types. All exports from this package that previously relied on the types with the same name from `@backstage/core-plugin-api` now use the new types instead. To convert and existing legacy route ref to be compatible with the APIs from this package, use the `convertLegacyRouteRef` utility from `@backstage/core-plugin-api/alpha`.
- [`77f009b35d`](https://github.com/backstage/backstage/commit/77f009b35d): Extensions now return their output from the factory function rather than calling `bind(...)`.

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`733bd95746`](https://github.com/backstage/backstage/commit/733bd95746): Add new `AppTreeApi`.
- [`6af88a05ff`](https://github.com/backstage/backstage/commit/6af88a05ff): Improve the extension boundary component and create a default extension suspense component.

### `@backstage/plugin-auth-backend` (0.19.4 → [0.21.3](../../changelogs/@backstage/plugin-auth-backend.md#0213))

#### 0.21.0

##### Minor Changes

- [`7dd8463`](https://github.com/backstage/backstage/commit/7dd8463): **BREAKING**: The `saml` provider has been migrated from `passport-saml` to `@node-saml/passport-saml`.

  This comes with breaking changes to config options:

  - `audience` is now mandatory
  - `wantAuthnResponseSigned` is now exposed and defaults to `true`
  - `wantAssertionsSigned` is now exposed and defaults to `true`

##### Patch Changes

- [`97f8724`](https://github.com/backstage/backstage/commit/97f8724): Support additional algorithms in the `/.well-known/openid-configuration` endpoint.
- [`a3f1fa3`](https://github.com/backstage/backstage/commit/a3f1fa3): Use the externalized `auth-backend-module-microsoft-provider` again.
- [`a9e0107`](https://github.com/backstage/backstage/commit/a9e0107): The auth backend will now refuse to issue user tokens are excessively large.
- [`5d2fcba`](https://github.com/backstage/backstage/commit/5d2fcba): Migrated oidc auth provider to new `@backstage/plugin-auth-backend-module-oidc-provider` module package.
- [`d4cc552`](https://github.com/backstage/backstage/commit/d4cc552): The helper function `makeProfileInfo` and `PassportHelpers.transformProfile`
  were refactored to use the `jose` library.
- [`6bb6f3e`](https://github.com/backstage/backstage/commit/6bb6f3e): Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- [`23a98f8`](https://github.com/backstage/backstage/commit/23a98f8): Migrated the AWS ALB auth provider to new `@backstage/plugin-auth-backend-module-aws-alb-provider` module package.
- [`f5e04e3`](https://github.com/backstage/backstage/commit/f5e04e3): Internal refactor to no longer use deprecated types
- [`8321c97`](https://github.com/backstage/backstage/commit/8321c97): Added `experimentalExtraAllowedOrigins` to config
- [`8e8a25d`](https://github.com/backstage/backstage/commit/8e8a25d): Ability for user to configure backstage token expiration

#### 0.20.3

##### Patch Changes

- [`004499c`](https://github.com/backstage/backstage/commit/004499c): Fixed an issue where some Okta's resolvers were missing
- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.20.1

##### Patch Changes

- [`7ac2575`](https://github.com/backstage/backstage/commit/7ac2575): `oauth2-proxy` auth implementation has been moved to `@backstage/plugin-auth-backend-module-oauth2-proxy-provider`
- [`2a5891e`](https://github.com/backstage/backstage/commit/2a5891e): Migrate the atlassian auth provider to be implemented using the new `@backstage/plugin-auth-backend-module-atlassian-provider` module
- [`783797a`](https://github.com/backstage/backstage/commit/783797a): fix static token issuer not being able to initialize
- [`e1c189b`](https://github.com/backstage/backstage/commit/e1c189b): The Okta provider implementation is moved to the new module
- [`a62764b`](https://github.com/backstage/backstage/commit/a62764b): Updated dependency `passport` to `^0.7.0`.
- [`bcbbf8e`](https://github.com/backstage/backstage/commit/bcbbf8e): Updated dependency `@google-cloud/firestore` to `^7.0.0`.

#### 0.20.0

##### Minor Changes

- [`bdf08ad04a`](https://github.com/backstage/backstage/commit/bdf08ad04a): Adds the StaticTokenIssuer and StaticKeyStore, an alternative token issuer that can be used to sign the Authorization header using a predefined public/private key pair.

##### Patch Changes

- [`243c655a68`](https://github.com/backstage/backstage/commit/243c655a68): JSDoc and Error message updates to handle `Azure Active Directory` re-brand to `Entra ID`
- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.
- [`f2fc5acca6`](https://github.com/backstage/backstage/commit/f2fc5acca6): Added an optional `additionalScopes` configuration parameter to `okta` providers, that lets you add additional scopes on top of the default ones.
- [`96c4f54bf6`](https://github.com/backstage/backstage/commit/96c4f54bf6): Reverted the Microsoft auth provider to the previous implementation.

### `@backstage/plugin-azure-devops-backend` (0.4.3 → [0.5.5](../../changelogs/@backstage/plugin-azure-devops-backend.md#055))

#### 0.5.2

##### Patch Changes

- [`353244d`](https://github.com/backstage/backstage/commit/353244d): Added a note about Service Principles
- [`b64ce5a`](https://github.com/backstage/backstage/commit/b64ce5a): Updated New Backend System instructions to use default import
- [`25bda45`](https://github.com/backstage/backstage/commit/25bda45): Fixed bug with `extractPartsFromAsset` that resulted in a leading `.` being removed from the path in an otherwise valid path (ex. `.assets/image.png`). The leading `.` will now only be moved for paths beginning with `./`.
- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument

#### 0.5.1

##### Patch Changes

- [`d076ee4`](https://github.com/backstage/backstage/commit/d076ee4): Updated dependency `azure-devops-node-api` to `^12.0.0`.
- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.5.0

##### Minor Changes

- [`844969c`](https://github.com/backstage/backstage/commit/844969c): **BREAKING** New `fromConfig` static method must be used now when creating an instance of the `AzureDevOpsApi`

  Added support for using the `AzureDevOpsCredentialsProvider`

##### Patch Changes

- [`c70e4f5`](https://github.com/backstage/backstage/commit/c70e4f5): Added multi-org support
- [`646db72`](https://github.com/backstage/backstage/commit/646db72): Updated encoding of Org to use `encodeURIComponent` when building URL used to get credentials from credential provider
- [`043b724`](https://github.com/backstage/backstage/commit/043b724): Introduced new `AzureDevOpsAnnotatorProcessor` that adds the needed annotations automatically. Also, moved constants to common package so they can be shared more easily

### `@backstage/plugin-azure-sites-backend` (0.1.16 → [0.2.3](../../changelogs/@backstage/plugin-azure-sites-backend.md#023))

#### 0.2.0

##### Minor Changes

- [`28610f4`](https://github.com/backstage/backstage/commit/28610f4): **BREAKING**: `catalogApi` and `permissionsApi` are now a requirement to be passed through to the `createRouter` function.

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

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`4376655`](https://github.com/backstage/backstage/commit/4376655): Added `permissionIntegrationRouter` for azure-sites-backend routes
- [`5a409bb`](https://github.com/backstage/backstage/commit/5a409bb): Azure Sites `start` and `stop` action is now protected with the Permissions framework.

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

#### 0.1.19

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.18

##### Patch Changes

- [`99fb541`](https://github.com/backstage/backstage/commit/99fb541): Updated dependency `@azure/identity` to `^4.0.0`.
- [`b7a13ed`](https://github.com/backstage/backstage/commit/b7a13ed): Updated dependency `@azure/arm-appservice` to `^14.0.0`.

### `@backstage/plugin-catalog-react` (1.8.5 → [1.10.0](../../changelogs/@backstage/plugin-catalog-react.md#1100))

#### 1.10.0

##### Minor Changes

- [`d208a93`](https://github.com/backstage/backstage/commit/d208a93): Added support for server side text filtering to paginated entity requests.
- [`3dc64e9`](https://github.com/backstage/backstage/commit/3dc64e9): Add support to `configSchema` option on the `createEntityCardExtension` factory function.

##### Patch Changes

- [`916da47`](https://github.com/backstage/backstage/commit/916da47): Change default icon for unknown entities to nothing instead of the help icon.
- [`71c6d7a`](https://github.com/backstage/backstage/commit/71c6d7a): Overflowing labels in OwnerPicker (Catalog) are now truncated. Hovering over them shows the full label
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.
- [`09cedb9`](https://github.com/backstage/backstage/commit/09cedb9): Updated dependency `@react-hookz/web` to `^24.0.0`.

#### 1.9.3

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 1.9.2

##### Patch Changes

- [`8587f06`](https://github.com/backstage/backstage/commit/8587f06): Added pagination support to `EntityListProvider`.
- [`5360097`](https://github.com/backstage/backstage/commit/5360097): Ensure that passed-in icons are taken advantage of in the presentation API
- [`fd9863c`](https://github.com/backstage/backstage/commit/fd9863c): Grouped all `/alpha` extension data reference exports under `catalogExtensionData`.
- [`08d9e67`](https://github.com/backstage/backstage/commit/08d9e67): Add default icon for kind resource.
- [`aaa6fb3`](https://github.com/backstage/backstage/commit/aaa6fb3): Minor updates for TypeScript 5.2.2+ compatibility
- [`a5a0473`](https://github.com/backstage/backstage/commit/a5a0473): Internal refactor of alpha exports due to a change in how extension factories are defined.
- [`4d9e3b3`](https://github.com/backstage/backstage/commit/4d9e3b3): Register component overrides in the global `OverrideComponentNameToClassKeys` provided by `@backstage/theme`. This will in turn will provide component style override types for `createUnifiedTheme`.
- [`8f5d6c1`](https://github.com/backstage/backstage/commit/8f5d6c1): Updates to the `/alpha` exports to match the extension input wrapping change.
- [`36c94b8`](https://github.com/backstage/backstage/commit/36c94b8): Refactor of the alpha exports due to API change in how extension IDs are constructed.
- [`e223f22`](https://github.com/backstage/backstage/commit/e223f22): Breaking alpha-API change to entity visibility filter functions to accept a bare entity as their first argument, instead of an object with an entity property.

  Functions that accept such filters now also support the string expression form of filters.

- [`eee0ff2`](https://github.com/backstage/backstage/commit/eee0ff2): Fixed a issue where `CatalogPage` wasn't using the chosen `initiallySelectedFilter` as intended.

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

### `@backstage/plugin-kubernetes` (0.11.0 → [0.11.5](../../changelogs/@backstage/plugin-kubernetes.md#0115))

#### 0.11.5

##### Patch Changes

- [`b01c86c`](https://github.com/backstage/backstage/commit/b01c86c): The `ErrorReporting` component's cluster column now displays cluster titles when
  specified.
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.11.4

##### Patch Changes

- [`d5d2c67`](https://github.com/backstage/backstage/commit/d5d2c67): Add `authuser` search parameter to GKE cluster link formatter in k8s plugin

  Thanks to this, people with multiple simultaneously logged-in accounts in their GCP console will automatically view objects with the same email as the one signed in to the Google auth provider in Backstage.

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.11.3

##### Patch Changes

- [`899d71a`](https://github.com/backstage/backstage/commit/899d71a): Change `formatClusterLink` to be an API and make it async for further customization possibilities.

  **BREAKING**
  If you have a custom k8s page and used `formatClusterLink` directly, you need to migrate to new `kubernetesClusterLinkFormatterApiRef`

- [`706fc3a`](https://github.com/backstage/backstage/commit/706fc3a): Updated dependency `@kubernetes/client-node` to `0.20.0`.

#### 0.11.1

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-kubernetes-backend` (0.13.0 → [0.15.3](../../changelogs/@backstage/plugin-kubernetes-backend.md#0153))

#### 0.15.0

##### Minor Changes

- [`666eff5`](https://github.com/backstage/backstage/commit/666eff5): **BREAKING** The backend will fail to start if two clusters in the app-config
  have the same name. The requirement for unique names has been declared in the
  docs for some time, but is now enforced.

##### Patch Changes

- [`7233f57`](https://github.com/backstage/backstage/commit/7233f57): Fixed an issue where a misleading error message would be logged when an
  unsupported service locator method was specified.
- [`afe9473`](https://github.com/backstage/backstage/commit/afe9473): The `/clusters` API now surfaces cluster titles.
- [`a775596`](https://github.com/backstage/backstage/commit/a775596): Enabled a way to include custom auth metadata info on the clusters endpoint. If you want to implement a Kubernetes auth strategy which requires surfacing custom auth metadata to the frontend, use the new presentAuthMetadata method on the AuthenticationStrategy interface.
- [`7278d80`](https://github.com/backstage/backstage/commit/7278d80): The purpose of this patch is to add a new login method which is `googleServiceAccount` configuring the kubernetes properties in the app-config.yaml file with authProvider key
- [`2a50cbf`](https://github.com/backstage/backstage/commit/2a50cbf): adds a x-goog-api-client header to existing API requests in this plugin to clearly identify API requests from this GKE plugin. headers are formatted as follows where `libVersion` represents the current dotted version number of the Backstage GKE plugin and `libName` represent the current Google API used at backstage.
- [`3b3d549`](https://github.com/backstage/backstage/commit/3b3d549): Responses from the `/api/kubernetes/services/:serviceId` endpoint now include the cluster title.
- [`a2e7fc6`](https://github.com/backstage/backstage/commit/a2e7fc6): Organized imports in plugin.ts
- [`6bb6f3e`](https://github.com/backstage/backstage/commit/6bb6f3e): Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- [`daad576`](https://github.com/backstage/backstage/commit/daad576): Clusters configured with the `aws` authentication strategy can now customize the
  `x-k8s-aws-id` header value used to generate tokens. This value can be specified
  specified via the `kubernetes.io/x-k8s-aws-id` parameter (in
  `metadata.annotations` for clusters in the catalog, or the `authMetadata` block
  on clusters in the app-config). This is particularly helpful when a Backstage
  instance contains multiple AWS clusters with the same name in different regions
  -- using this new parameter, the clusters can be given different logical names
  to distinguish them but still use the same ID for the purposes of generating
  tokens.
- [`f180cba`](https://github.com/backstage/backstage/commit/f180cba): Enabling authentication to kubernetes clusters with mTLS x509 client certs
- [`7f6ff25`](https://github.com/backstage/backstage/commit/7f6ff25): Custom per-cluster auth metadata (mainly for use with custom `AuthenticationStrategy` implementations) can now be specified in the `authMetadata` property of clusters in the app-config.
- [`6009d2a`](https://github.com/backstage/backstage/commit/6009d2a): Clusters in the catalog can now specify a human-readable title via `metadata.title`.
- [`7ee5b30`](https://github.com/backstage/backstage/commit/7ee5b30): Clusters in the app-config can now specify a `title` property for human readability.
- [`1c3cb3b`](https://github.com/backstage/backstage/commit/1c3cb3b): Backstage will log a warning whenever duplicate cluster names are detected --
  even if clusters sharing the same name come from separate locators.
- [`ceda378`](https://github.com/backstage/backstage/commit/ceda378): On LocalKubectlProxyClusterLocator, when resolving localhost, IPv4 address is placed before IPv6 address, ignoring the order from the DNS resolver. This change is necessary since by default kubectl proxy listen on IPv4

#### 0.14.0

##### Minor Changes

- [`52050ad`](https://github.com/backstage/backstage/commit/52050ad): You can now select `single` kubernetes cluster that the entity is part-of from all your defined kubernetes clusters, by passing `backstage.io/kubernetes-cluster` annotation with the defined cluster name.

  If you do not specify the annotation by `default it fetches all` defined kubernetes cluster.

  To apply

  catalog-info.yaml

  ```diff
  annotations:
    'backstage.io/kubernetes-id': dice-roller
    'backstage.io/kubernetes-namespace': dice-space
  + 'backstage.io/kubernetes-cluster': dice-cluster
    'backstage.io/kubernetes-label-selector': 'app=my-app,component=front-end'
  ```

##### Patch Changes

- [`6010564`](https://github.com/backstage/backstage/commit/6010564): The `kubernetes-node` plugin has been modified to house a new extension points for Kubernetes backend plugin;
  `KubernetesClusterSupplierExtensionPoint` is introduced .
  `kubernetesAuthStrategyExtensionPoint` is introduced .
  `kubernetesFetcherExtensionPoint` is introduced .
  `kubernetesServiceLocatorExtensionPoint` is introduced .

  The `kubernetes-backend` plugin was modified to use this new extension point.

- [`706fc3a`](https://github.com/backstage/backstage/commit/706fc3a): Updated dependency `@kubernetes/client-node` to `0.20.0`.
- [`ae94d3c`](https://github.com/backstage/backstage/commit/ae94d3c): Updated dependency `@aws-crypto/sha256-js` to `^5.0.0`.
- [`99fb541`](https://github.com/backstage/backstage/commit/99fb541): Updated dependency `@azure/identity` to `^4.0.0`.
- [`42c1aee`](https://github.com/backstage/backstage/commit/42c1aee): Updated dependency `@google-cloud/container` to `^5.0.0`.

#### 0.13.1

##### Patch Changes

- [`62180df4ee`](https://github.com/backstage/backstage/commit/62180df4ee): Allow storing dashboard parameters for kubernetes in catalog
- [`df40b067e1`](https://github.com/backstage/backstage/commit/df40b067e1): Fixed the lack of `resourcequotas` as part of the Default Objects to fetch from the kubernetes api

### `@backstage/plugin-kubernetes-react` (0.1.0 → [0.3.0](../../changelogs/@backstage/plugin-kubernetes-react.md#030))

#### 0.3.0

##### Minor Changes

- [`0dfc185`](https://github.com/backstage/backstage/commit/0dfc185): **BREAKING** The `PodScope`, `PodAndErrors`, and `PodExecTerminalProps` types no
  longer have a `clusterName` field; instead they now have the field `cluster`
  which contains the full `ClusterAttributes`.
- [`0d526c8`](https://github.com/backstage/backstage/commit/0d526c8): **BREAKING** The pod exec terminal is now disabled by default since there are several scenarios where it is known not to work. It can be re-enabled at your own risk by setting the config parameter `kubernetes.podExecTerminal.enabled` to `true`.

##### Patch Changes

- [`5bf0c17`](https://github.com/backstage/backstage/commit/5bf0c17): Pod dialogs display cluster title when specified.
- [`74770c8`](https://github.com/backstage/backstage/commit/74770c8): The `ErrorPanel` component will display the `title` field (when specified) for
  clusters with errors.
- [`536f67d`](https://github.com/backstage/backstage/commit/536f67d): Fix broken XtermJS CSS import
- [`b01c86c`](https://github.com/backstage/backstage/commit/b01c86c): The `ErrorReporting` component's cluster column now displays cluster titles when
  specified.
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.
- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.
- [`2b305eb`](https://github.com/backstage/backstage/commit/2b305eb): The `Cluster` component now renders the cluster's title, if specified.
- [`3c184af`](https://github.com/backstage/backstage/commit/3c184af): Extracted common dialog component.
- [`db1054b`](https://github.com/backstage/backstage/commit/db1054b): Fixed a bug where the logs dialog and any other functionality depending on the proxy endpoint would fail for clusters configured with the OIDC auth provider.

#### 0.2.1

##### Patch Changes

- [`d5d2c67`](https://github.com/backstage/backstage/commit/d5d2c67): Add `authuser` search parameter to GKE cluster link formatter in k8s plugin

  Thanks to this, people with multiple simultaneously logged-in accounts in their GCP console will automatically view objects with the same email as the one signed in to the Google auth provider in Backstage.

#### 0.2.0

##### Minor Changes

- [`899d71a`](https://github.com/backstage/backstage/commit/899d71a): Change `formatClusterLink` to be an API and make it async for further customization possibilities.

  **BREAKING**
  If you have a custom k8s page and used `formatClusterLink` directly, you need to migrate to new `kubernetesClusterLinkFormatterApiRef`

##### Patch Changes

- [`b5ae2e5`](https://github.com/backstage/backstage/commit/b5ae2e5): Add ID property to the table displaying kubernetes pods to avoid closing the info sidebar when the data reloads and needs to rerender.
- [`706fc3a`](https://github.com/backstage/backstage/commit/706fc3a): Updated dependency `@kubernetes/client-node` to `0.20.0`.

#### 0.1.1

##### Patch Changes

- [`0f4cad6da0`](https://github.com/backstage/backstage/commit/0f4cad6da0): Internal refactor to avoid a null pointer problem
- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`b52f576f48`](https://github.com/backstage/backstage/commit/b52f576f48): Make sure types exported by other `kubernetes` plugins in the past are exported again after the creation
  of the react package.

  Some types have been moved to this new package but the export was missing, so they were not available anymore for developers.

### `@backstage/plugin-playlist` (0.1.17 → [0.2.4](../../changelogs/@backstage/plugin-playlist.md#024))

#### 0.2.4

##### Patch Changes

- [`5a03537`](https://github.com/backstage/backstage/commit/5a03537): Conditionally render playlist description only when it's non-empty
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.
- [`7f11009`](https://github.com/backstage/backstage/commit/7f11009): Added stack trace display to `ErrorPage` and updated existing refs

#### 0.2.3

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

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

### `@backstage/plugin-scaffolder` (1.15.1 → [1.18.0](../../changelogs/@backstage/plugin-scaffolder.md#1180))

#### 1.18.0

##### Minor Changes

- [`c56f1a2`](https://github.com/backstage/backstage/commit/c56f1a2): Remove the old legacy exports from `/alpha`
- [`9b9c05c`](https://github.com/backstage/backstage/commit/9b9c05c): Updating the `EntityPicker` to only select `kind` `metadata.name` and `metadata.namespace` by default to improve performance on larger datasets.
- [`a86920b`](https://github.com/backstage/backstage/commit/a86920b): Introduced a new `MultiEntityPicker` field that supports selecting multiple Entities
- [`7f11009`](https://github.com/backstage/backstage/commit/7f11009): Added stack trace display to `ErrorPage` and updated existing refs

##### Patch Changes

- [`b0d1d80`](https://github.com/backstage/backstage/commit/b0d1d80): Added basic support for the new frontend system, exported from the `/alpha` subpath.
- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`912ca7b`](https://github.com/backstage/backstage/commit/912ca7b): Use `convertLegacyRouteRefs` to define routes in `/alpha` export plugin.
- [`da059d7`](https://github.com/backstage/backstage/commit/da059d7): Removed alpha symbol from Task List header
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.
- [`31f0a0a`](https://github.com/backstage/backstage/commit/31f0a0a): Added `ScaffolderPageContextMenu` to `ActionsPage`, `ListTaskPage`, and `TemplateEditorPage` so that you can more easily navigate between these pages
- [`09cedb9`](https://github.com/backstage/backstage/commit/09cedb9): Updated dependency `@react-hookz/web` to `^24.0.0`.
- [`e6f0831`](https://github.com/backstage/backstage/commit/e6f0831): Updated dependency `@rjsf/utils` to `5.17.0`.
  Updated dependency `@rjsf/core` to `5.17.0`.
  Updated dependency `@rjsf/material-ui` to `5.17.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.17.0`.
- [`6a74ffd`](https://github.com/backstage/backstage/commit/6a74ffd): Updated dependency `@rjsf/utils` to `5.16.1`.
  Updated dependency `@rjsf/core` to `5.16.1`.
  Updated dependency `@rjsf/material-ui` to `5.16.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.16.1`.
- [`1cae748`](https://github.com/backstage/backstage/commit/1cae748): Updated dependency `git-url-parse` to `^14.0.0`.
- [`11b9a08`](https://github.com/backstage/backstage/commit/11b9a08): Introduced the first version of recoverable tasks.
- [`3dff4b0`](https://github.com/backstage/backstage/commit/3dff4b0): Remove unused deps

#### 1.17.1

##### Patch Changes

- [`98ac5ab`](https://github.com/backstage/backstage/commit/98ac5ab): Updated dependency `@rjsf/utils` to `5.15.1`.
  Updated dependency `@rjsf/core` to `5.15.1`.
  Updated dependency `@rjsf/material-ui` to `5.15.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.15.1`.
- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies
- [`df4bc9d`](https://github.com/backstage/backstage/commit/df4bc9d): Minor internal refactor

#### 1.17.0

##### Minor Changes

- [`df88d09`](https://github.com/backstage/backstage/commit/df88d09): Add a new git repository url picker for `gitea`. This `GiteaRepoPicker` can be used in a template to scaffold a project to be cloned using gitea.
- [`33edf50`](https://github.com/backstage/backstage/commit/33edf50): Added support for dealing with user provided secrets using a new field extension `ui:field: Secret`

##### Patch Changes

- [`6806d10`](https://github.com/backstage/backstage/commit/6806d10): Added `headerOptions` to `TemplateListPage` to optionally override default values.
  Changed `themeId` of TemplateListPage from `website` to `home`.
- [`aaa6fb3`](https://github.com/backstage/backstage/commit/aaa6fb3): Minor updates for TypeScript 5.2.2+ compatibility
- [`2b72591`](https://github.com/backstage/backstage/commit/2b72591): Updated dependency `@rjsf/utils` to `5.14.3`.
  Updated dependency `@rjsf/core` to `5.14.3`.
  Updated dependency `@rjsf/material-ui` to `5.14.3`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.3`.
- [`6cd12f2`](https://github.com/backstage/backstage/commit/6cd12f2): Updated dependency `@rjsf/utils` to `5.14.1`.
  Updated dependency `@rjsf/core` to `5.14.1`.
  Updated dependency `@rjsf/material-ui` to `5.14.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.1`.
- [`a518c5a`](https://github.com/backstage/backstage/commit/a518c5a): Updated dependency `@react-hookz/web` to `^23.0.0`.
- [`64301d3`](https://github.com/backstage/backstage/commit/64301d3): Updated dependency `@rjsf/utils` to `5.15.0`.
  Updated dependency `@rjsf/core` to `5.15.0`.
  Updated dependency `@rjsf/material-ui` to `5.15.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.15.0`.
- [`63c494e`](https://github.com/backstage/backstage/commit/63c494e): Updated dependency `@rjsf/utils` to `5.14.2`.
  Updated dependency `@rjsf/core` to `5.14.2`.
  Updated dependency `@rjsf/material-ui` to `5.14.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.2`.
- [`b5fa691`](https://github.com/backstage/backstage/commit/b5fa691): Fixing `headerOptions` not being passed through the `TemplatePage` component
- [`c8908d4`](https://github.com/backstage/backstage/commit/c8908d4): Use new option from RJSF 5.15
- [`0cbb03b`](https://github.com/backstage/backstage/commit/0cbb03b): Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617

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

### `@backstage/plugin-scaffolder-react` (1.5.6 → [1.8.0](../../changelogs/@backstage/plugin-scaffolder-react.md#180))

#### 1.8.0

##### Minor Changes

- [`c56f1a2`](https://github.com/backstage/backstage/commit/c56f1a2): Remove the old legacy exports from `/alpha`
- [`11b9a08`](https://github.com/backstage/backstage/commit/11b9a08): Introduced the first version of recoverable tasks.
- [`b07ec70`](https://github.com/backstage/backstage/commit/b07ec70): Use more distinguishable icons for link (`Link`) and text output (`Description`).

##### Patch Changes

- [`3f60ad5`](https://github.com/backstage/backstage/commit/3f60ad5): fix for: converting circular structure to JSON error
- [`0b0c6b6`](https://github.com/backstage/backstage/commit/0b0c6b6): Allow defining default output text to be shown
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.
- [`31f0a0a`](https://github.com/backstage/backstage/commit/31f0a0a): Added `ScaffolderPageContextMenu` to `ActionsPage`, `ListTaskPage`, and `TemplateEditorPage` so that you can more easily navigate between these pages
- [`09cedb9`](https://github.com/backstage/backstage/commit/09cedb9): Updated dependency `@react-hookz/web` to `^24.0.0`.
- [`e6f0831`](https://github.com/backstage/backstage/commit/e6f0831): Updated dependency `@rjsf/utils` to `5.17.0`.
  Updated dependency `@rjsf/core` to `5.17.0`.
  Updated dependency `@rjsf/material-ui` to `5.17.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.17.0`.
- [`6a74ffd`](https://github.com/backstage/backstage/commit/6a74ffd): Updated dependency `@rjsf/utils` to `5.16.1`.
  Updated dependency `@rjsf/core` to `5.16.1`.
  Updated dependency `@rjsf/material-ui` to `5.16.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.16.1`.
- [`3dff4b0`](https://github.com/backstage/backstage/commit/3dff4b0): Remove unused deps
- [`82affc7`](https://github.com/backstage/backstage/commit/82affc7): Fix issue where `ui:schema` was replaced with an empty object if `dependencies` is defined
- [`2985186`](https://github.com/backstage/backstage/commit/2985186): Fix bug that erroneously caused a separator or a 0 to render in the TemplateCard for Templates with empty links

#### 1.7.1

##### Patch Changes

- [`c28f281`](https://github.com/backstage/backstage/commit/c28f281): Scaffolder form now shows a list of errors at the top of the form.
- [`0b9ce2b`](https://github.com/backstage/backstage/commit/0b9ce2b): Fix for a step with no properties
- [`98ac5ab`](https://github.com/backstage/backstage/commit/98ac5ab): Updated dependency `@rjsf/utils` to `5.15.1`.
  Updated dependency `@rjsf/core` to `5.15.1`.
  Updated dependency `@rjsf/material-ui` to `5.15.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.15.1`.
- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies
- [`d16f85f`](https://github.com/backstage/backstage/commit/d16f85f): Show first scaffolder output text by default

#### 1.7.0

##### Minor Changes

- [`33edf50`](https://github.com/backstage/backstage/commit/33edf50): Added support for dealing with user provided secrets using a new field extension `ui:field: Secret`

##### Patch Changes

- [`670c7cc`](https://github.com/backstage/backstage/commit/670c7cc): Fix bug where `properties` is set to empty object when it should be empty for schema dependencies
- [`fa66d1b`](https://github.com/backstage/backstage/commit/fa66d1b): Fixed bug in `ReviewState` where `enum` value was displayed in step review instead of the corresponding label when using `enumNames`
- [`e516bf4`](https://github.com/backstage/backstage/commit/e516bf4): Step titles in the Stepper are now clickable and redirect the user to the corresponding step, as an alternative to using the back buttons.
- [`aaa6fb3`](https://github.com/backstage/backstage/commit/aaa6fb3): Minor updates for TypeScript 5.2.2+ compatibility
- [`2aee53b`](https://github.com/backstage/backstage/commit/2aee53b): Add horizontal slider if stepper overflows
- [`2b72591`](https://github.com/backstage/backstage/commit/2b72591): Updated dependency `@rjsf/utils` to `5.14.3`.
  Updated dependency `@rjsf/core` to `5.14.3`.
  Updated dependency `@rjsf/material-ui` to `5.14.3`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.3`.
- [`6cd12f2`](https://github.com/backstage/backstage/commit/6cd12f2): Updated dependency `@rjsf/utils` to `5.14.1`.
  Updated dependency `@rjsf/core` to `5.14.1`.
  Updated dependency `@rjsf/material-ui` to `5.14.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.1`.
- [`a518c5a`](https://github.com/backstage/backstage/commit/a518c5a): Updated dependency `@react-hookz/web` to `^23.0.0`.
- [`64301d3`](https://github.com/backstage/backstage/commit/64301d3): Updated dependency `@rjsf/utils` to `5.15.0`.
  Updated dependency `@rjsf/core` to `5.15.0`.
  Updated dependency `@rjsf/material-ui` to `5.15.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.15.0`.
- [`63c494e`](https://github.com/backstage/backstage/commit/63c494e): Updated dependency `@rjsf/utils` to `5.14.2`.
  Updated dependency `@rjsf/core` to `5.14.2`.
  Updated dependency `@rjsf/material-ui` to `5.14.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.2`.
- [`c8908d4`](https://github.com/backstage/backstage/commit/c8908d4): Use new option from RJSF 5.15
- [`0cbb03b`](https://github.com/backstage/backstage/commit/0cbb03b): Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617
- [`5bb5240`](https://github.com/backstage/backstage/commit/5bb5240): Fixed issue for showing undefined for hidden form items

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

### `@backstage/repo-tools` (0.3.5 → [0.6.3](../../changelogs/@backstage/repo-tools.md#063))

#### 0.6.0

##### Minor Changes

- [`04907c3`](https://github.com/backstage/backstage/commit/04907c3): Updates the OpenAPI client template to support the new format for identifying plugin ID. You should now use `info.title` like so,

  ```diff
  info:
  +    title: yourPluginId
  -    title: @internal/plugin-*-backend

  servers:
    - /
  - - yourPluginId
  ```

- [`b10c603`](https://github.com/backstage/backstage/commit/b10c603): Add support for `oneOf` in client generated by `schema openapi generate-client`.
- [`4c62935`](https://github.com/backstage/backstage/commit/4c62935): **BREAKING**: The `schema openapi *` commands are now renamed into `package schema openapi *` and `repo schema openapi *`. The aim is to make it more clear what the command is operating on, the entire repo or just a single package.

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

- [`aa91cd6`](https://github.com/backstage/backstage/commit/aa91cd6): Resolved an issue with generate-catalog-info where it was replacing upper case characters with -.
- [`60a68f1`](https://github.com/backstage/backstage/commit/60a68f1): Introduced `knip` to the `knip-reports` command, which generates a `knip-report.md` file for your packages with dependency warnings, if any.
- [`ec16093`](https://github.com/backstage/backstage/commit/ec16093): Add an internal limiter on concurrency when launching processes
- [`6bb6f3e`](https://github.com/backstage/backstage/commit/6bb6f3e): Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- [`6ba64c4`](https://github.com/backstage/backstage/commit/6ba64c4): Updated dependency `commander` to `^12.0.0`.
- [`c04c42b`](https://github.com/backstage/backstage/commit/c04c42b): Fixes an issue where comments would be duplicated in the template. Also, removes a header with the title and version of the OpenAPI spec from generated code.

#### 0.5.2

##### Patch Changes

- [`883782e`](https://github.com/backstage/backstage/commit/883782e): Updated the OpenAPI template to export the `TypedResponse` interface so that client code can leverage it
- [`7acbb5a`](https://github.com/backstage/backstage/commit/7acbb5a): Removed `mock-fs` dev dependency.

#### 0.5.0

##### Minor Changes

- [`aea8f8d`](https://github.com/backstage/backstage/commit/aea8f8d): **BREAKING**: API Reports generated for sub-path exports now place the name as a suffix rather than prefix, for example `api-report-alpha.md` instead of `alpha-api-report.md`. When upgrading to this version you'll need to re-create any such API reports and delete the old ones.
- [`3834067`](https://github.com/backstage/backstage/commit/3834067): Adds a new command `schema openapi generate-client` that creates a Typescript client with Backstage flavor, including the discovery API and fetch API. This command doesn't currently generate a complete client and needs to be wrapped or exported manually by a separate Backstage plugin. See `@backstage/catalog-client/src/generated` for example output.

##### Patch Changes

- [`f909e9d`](https://github.com/backstage/backstage/commit/f909e9d): Includes templates in @backstage/repo-tools package and use them in the CLI
- [`da3c4db`](https://github.com/backstage/backstage/commit/da3c4db): Updates the `schema openapi generate-client` command to export all generated types from the generated directory.
- [`7959f23`](https://github.com/backstage/backstage/commit/7959f23): The `api-reports` command now checks for api report files that no longer apply.
  If it finds such files, it's treated basically the same as report errors do, and
  the check fails.

  For example, if you had an `api-report-alpha.md` but then removed the alpha
  export, the reports generator would now report that this file needs to be
  deleted.

- [`f49e237`](https://github.com/backstage/backstage/commit/f49e237): Fixed a bug where `schema openapi init` created an invalid test command.
- [`f91be2c`](https://github.com/backstage/backstage/commit/f91be2c): Updated dependency `@stoplight/types` to `^14.0.0`.
- [`45bfb20`](https://github.com/backstage/backstage/commit/45bfb20): Execute `openapi-generator-cli` from `@backstage/repo-tools` directory to force it to use our openapitools.json config file.

#### 0.4.0

##### Minor Changes

- [`4e36abef14`](https://github.com/backstage/backstage/commit/4e36abef14): Remove support for the deprecated `--experimental-type-build` option for `package build`.
- [`6694b369a3`](https://github.com/backstage/backstage/commit/6694b369a3): Adds a new command `schema openapi test` that performs runtime validation of your OpenAPI specs using your test data. Under the hood, we're using Optic to perform this check, really cool work by them!

  To use this new command, you will have to run `yarn add @useoptic/optic` in the root of your repo.

## Major version bumps

### `@backstage/plugin-dynatrace` (7.0.5 → [9.0.0](../../changelogs/@backstage/plugin-dynatrace.md#900))

#### 9.0.0

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.
- [`0930c9e`](https://github.com/backstage/backstage/commit/0930c9e): Fixed Dynatrace plugin proxy configuration

#### 8.0.3

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 8.0.0

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

## 0.x minor version bumps

### `@backstage/backend-openapi-utils` (0.0.5 → [0.1.6](../../changelogs/@backstage/backend-openapi-utils.md#016))

#### 0.1.3

##### Patch Changes

- [`2067689`](https://github.com/backstage/backstage/commit/2067689): Internal updates due to `json-schema-to-ts`

#### 0.1.2

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.1

##### Patch Changes

- [`aaa6fb3`](https://github.com/backstage/backstage/commit/aaa6fb3): Minor updates for TypeScript 5.2.2+ compatibility

#### 0.1.0

##### Minor Changes

- [`785fb1ea75`](https://github.com/backstage/backstage/commit/785fb1ea75): Adds a new route, `/openapi.json` to validated routers for displaying their full OpenAPI spec in a standard endpoint.

##### Patch Changes

- [`6694b369a3`](https://github.com/backstage/backstage/commit/6694b369a3): Adds a new function `wrapInOpenApiTestServer` that allows for proxied requests at runtime. This will support the new `yarn backstage-repo-tools schema openapi test` command.

### `@backstage/backend-test-utils` (0.2.7 → [0.3.3](../../changelogs/@backstage/backend-test-utils.md#033))

#### 0.3.0

##### Minor Changes

- [`e85aa98`](https://github.com/backstage/backstage/commit/e85aa98): drop databases after unit tests if the database instance is not running in docker

##### Patch Changes

- [`6bb6f3e`](https://github.com/backstage/backstage/commit/6bb6f3e): Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.

#### 0.2.9

##### Patch Changes

- [`cc4228e`](https://github.com/backstage/backstage/commit/cc4228e): Switched module ID to use kebab-case.
- [`b7de76a`](https://github.com/backstage/backstage/commit/b7de76a): Added support for PostgreSQL versions 15 and 16

  Also introduced a new `setDefaults(options: { ids?: TestDatabaseId[] })` static method that can be added to the `setupTests.ts` file to define the default database ids you want to use throughout your package. Usage would look like this: `TestDatabases.setDefaults({ ids: ['POSTGRES_12','POSTGRES_16'] })` and would result in PostgreSQL versions 12 and 16 being used for your tests.

#### 0.2.8

##### Patch Changes

- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.
- [`bb688f7b3b`](https://github.com/backstage/backstage/commit/bb688f7b3b): Ensure recursive deletion of temporary directories in tests

### `@backstage/cli` (0.23.1 → [0.25.2](../../changelogs/@backstage/cli.md#0252))

#### 0.25.2

##### Patch Changes

- [`d557d47`](https://github.com/backstage/backstage/commit/d557d47): Added check for the `repository` field in the `repo fix` command.
- [`b58673e`](https://github.com/backstage/backstage/commit/b58673e): Upgrade jest
- [`c624938`](https://github.com/backstage/backstage/commit/c624938): Add experimental support for an optional `public` app entry point that lets users sign-in before being able to access the full app.
- [`c52e7d5`](https://github.com/backstage/backstage/commit/c52e7d5): Make `http://localhost:3000` the default base URL for serving locally, and `/` the default public path for built apps. The app build no longer requires any configuration values to be present.
- [`9a96ef2`](https://github.com/backstage/backstage/commit/9a96ef2): Updated dependency `vite-plugin-node-polyfills` to `^0.21.0`.
- [`6bb6f3e`](https://github.com/backstage/backstage/commit/6bb6f3e): Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- [`2f1f8fd`](https://github.com/backstage/backstage/commit/2f1f8fd): Updated dependency `esbuild-loader` to `^4.0.0`.
- [`fd20d5b`](https://github.com/backstage/backstage/commit/fd20d5b): Updated dependency `eslint-config-prettier` to `^9.0.0`.
- [`acd2860`](https://github.com/backstage/backstage/commit/acd2860): Updated dependency `vite-plugin-node-polyfills` to `^0.19.0`.
- [`40c27f3`](https://github.com/backstage/backstage/commit/40c27f3): Updated dependency `eslint-webpack-plugin` to `^4.0.0`.
- [`6ba64c4`](https://github.com/backstage/backstage/commit/6ba64c4): Updated dependency `commander` to `^12.0.0`.
- [`ba56063`](https://github.com/backstage/backstage/commit/ba56063): Updated dependency `fork-ts-checker-webpack-plugin` to `^9.0.0`.
- [`1cae748`](https://github.com/backstage/backstage/commit/1cae748): Updated dependency `git-url-parse` to `^14.0.0`.
- [`52ae6b9`](https://github.com/backstage/backstage/commit/52ae6b9): Updated dependency `esbuild` to `^0.20.0`.
- [`404e82b`](https://github.com/backstage/backstage/commit/404e82b): Updated dependency `eslint-plugin-deprecation` to `^2.0.0`.
- [`5c05f8a`](https://github.com/backstage/backstage/commit/5c05f8a): Harmonize the package naming and allow custom prefix
- [`35725e2`](https://github.com/backstage/backstage/commit/35725e2): Updated dependencies in frontend plugin templates
- [`c7259dc`](https://github.com/backstage/backstage/commit/c7259dc): Updated the backend module template to make the module instance the package default export.
- [`08804c3`](https://github.com/backstage/backstage/commit/08804c3): Fixed an issue that would cause an invalid `__backstage-autodetected-plugins__.js` to be written when using experimental module discovery.

#### 0.25.1

##### Patch Changes

- [`b6b15b2`](https://github.com/backstage/backstage/commit/b6b15b2): Use sha256 instead of md5 in build script cache key calculation

  Makes it possible to build on FIPS nodejs.

#### 0.25.0

##### Minor Changes

- [`3834067`](https://github.com/backstage/backstage/commit/3834067): Updates the ESLint config to ignore issues created by generated files in `**/src/generated/**`.

##### Patch Changes

- [`32018ff`](https://github.com/backstage/backstage/commit/32018ff): Enable the `tsx` loader to work on Node 18.19 and up
- [`0ffee55`](https://github.com/backstage/backstage/commit/0ffee55): Toned down the warning message when git is not found
- [`c6f3743`](https://github.com/backstage/backstage/commit/c6f3743): Added a warning when starting a standalone backend plugin that hasn't been updated to the new backend system.
- [`3e358b0`](https://github.com/backstage/backstage/commit/3e358b0): Added deprecation warning for React Router v6 beta, please make sure you have migrated your apps to use React Router v6 stable as support for the beta version will be removed. See the [migration tutorial](https://backstage.io/docs/tutorials/react-router-stable-migration) for more information.
- [`219d7f0`](https://github.com/backstage/backstage/commit/219d7f0): Updating template generation for scaffolder module
- [`8cda3c7`](https://github.com/backstage/backstage/commit/8cda3c7): Tweaked Node.js version check for when to use the new module register API with the new backend `package start` command.
- [`a3edc18`](https://github.com/backstage/backstage/commit/a3edc18): Updated dependency `vite-plugin-node-polyfills` to `^0.17.0`.
- [`627554e`](https://github.com/backstage/backstage/commit/627554e): Updated dependency `@rollup/plugin-node-resolve` to `^15.0.0`.
- [`c07cee5`](https://github.com/backstage/backstage/commit/c07cee5): Updated dependency `@rollup/plugin-json` to `^6.0.0`.
- [`bd586a5`](https://github.com/backstage/backstage/commit/bd586a5): Updated dependency `bfj` to `^8.0.0`.
- [`8056425`](https://github.com/backstage/backstage/commit/8056425): Updated dependency `@typescript-eslint/eslint-plugin` to `6.12.0`.
- [`017c425`](https://github.com/backstage/backstage/commit/017c425): Updated dependency `@typescript-eslint/eslint-plugin` to `6.11.0`.
- [`2565cc8`](https://github.com/backstage/backstage/commit/2565cc8): Updated dependency `@rollup/plugin-commonjs` to `^25.0.0`.
- [`33e96e5`](https://github.com/backstage/backstage/commit/33e96e5): Switched the `@typescript-eslint/eslint-plugin` dependency back to using a `^` version range.
- [`0cbb03b`](https://github.com/backstage/backstage/commit/0cbb03b): Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617

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

### `@backstage/cli-node` (0.1.5 → [0.2.3](../../changelogs/@backstage/cli-node.md#023))

#### 0.2.3

##### Patch Changes

- [`d557d47`](https://github.com/backstage/backstage/commit/d557d47): Added `repository` field to `BackstagePackageJson` type.
- [`6bb6f3e`](https://github.com/backstage/backstage/commit/6bb6f3e): Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.

#### 0.2.2

##### Patch Changes

- [`7acbb5a`](https://github.com/backstage/backstage/commit/7acbb5a): Removed `mock-fs` dev dependency.

#### 0.2.1

##### Patch Changes

- [`0cbb03b`](https://github.com/backstage/backstage/commit/0cbb03b): Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617

#### 0.2.0

##### Minor Changes

- [`8db5c3cd7a`](https://github.com/backstage/backstage/commit/8db5c3cd7a): Removed support for the `publishConfig.alphaTypes` and `.betaTypes` fields that were used together with `--experimental-type-build` to generate `/alpha` and `/beta` entry points. Use the `exports` field to achieve this instead.

### `@backstage/plugin-analytics-module-ga` (0.1.34 → [0.2.0](../../changelogs/@backstage/plugin-analytics-module-ga.md#020))

#### 0.2.0

##### Minor Changes

- [`e586f79`](https://github.com/backstage/backstage/commit/e586f79): Add support to the new analytics api.

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument

#### 0.1.37

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.35

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-analytics-module-ga4` (0.1.5 → [0.2.0](../../changelogs/@backstage/plugin-analytics-module-ga4.md#020))

#### 0.2.0

##### Minor Changes

- [`e586f79`](https://github.com/backstage/backstage/commit/e586f79): Add support to the new analytics api.

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.

#### 0.1.8

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.7

##### Patch Changes

- [`af6f227`](https://github.com/backstage/backstage/commit/af6f227): Disabled `send_page_view` to get rid of events duplication

#### 0.1.6

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`504614d313`](https://github.com/backstage/backstage/commit/504614d313): Updated dependency `@types/jest` to `^29.0.0`.

### `@backstage/plugin-analytics-module-newrelic-browser` (0.0.3 → [0.1.0](../../changelogs/@backstage/plugin-analytics-module-newrelic-browser.md#010))

#### 0.1.0

##### Minor Changes

- [`e586f79`](https://github.com/backstage/backstage/commit/e586f79): Add support to the new analytics api.

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.

#### 0.0.6

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.0.4

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-api-docs` (0.9.12 → [0.11.0](../../changelogs/@backstage/plugin-api-docs.md#0110))

#### 0.11.0

##### Minor Changes

- [`172a717`](https://github.com/backstage/backstage/commit/172a717): Migrate the `api-docs` to the new frontend system. It is experimental and available via alpha subpath.

##### Patch Changes

- [`874e8cf`](https://github.com/backstage/backstage/commit/874e8cf): Updated README to list AsyncApi v3 as supported
- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`170c023`](https://github.com/backstage/backstage/commit/170c023): Adding `supportedSubmitMethods` prop to `api-docs` to pass to the Swagger UI. This allows users to specify which HTTP methods they wish to allow end-users to make requests through the `Try It Out` button on the Swagger UI.
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.
- [`c03f977`](https://github.com/backstage/backstage/commit/c03f977): Updated dependency `graphiql` to `3.1.0`.
- [`49b3b5e`](https://github.com/backstage/backstage/commit/49b3b5e): Updated dependency `@asyncapi/react-component` to `1.2.13`.

#### 0.10.3

##### Patch Changes

- [`8a69cc9`](https://github.com/backstage/backstage/commit/8a69cc9): Fix custom http resolvers for AsyncAPI widget.
- [`062b8f2`](https://github.com/backstage/backstage/commit/062b8f2): Add permission check to Register Existing API button
- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.10.2

##### Patch Changes

- [`816d331`](https://github.com/backstage/backstage/commit/816d331): Add dependency on `graphql-config` to compensate for `graphql-language-service` needing it but not shipping the dep properly
- [`615159e`](https://github.com/backstage/backstage/commit/615159e): Updated dependency `graphiql` to `3.0.10`.
- [`e16e7ce`](https://github.com/backstage/backstage/commit/e16e7ce): Updated dependency `@asyncapi/react-component` to `1.2.2`.
- [`82fb18b`](https://github.com/backstage/backstage/commit/82fb18b): Updated dependency `@asyncapi/react-component` to `1.2.6`.
- [`53e2c06`](https://github.com/backstage/backstage/commit/53e2c06): Updated dependency `@asyncapi/react-component` to `1.1.0`.

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

### `@backstage/plugin-catalog-backend-module-github` (0.4.4 → [0.5.3](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#053))

#### 0.5.0

##### Minor Changes

- [`a950ed0`](https://github.com/backstage/backstage/commit/a950ed0): Prevent Entity Providers from eliminating Users and Groups from the DB when the synchronisation fails

##### Patch Changes

- [`785ff24`](https://github.com/backstage/backstage/commit/785ff24): Added `validateLocationsExist` to the config
- [`9477133`](https://github.com/backstage/backstage/commit/9477133): Decreased number of teams fetched by GraphQL Query responsible for fetching Teams and Members in organization, due to timeouts when running against big organizations
- [`1cae748`](https://github.com/backstage/backstage/commit/1cae748): Updated dependency `git-url-parse` to `^14.0.0`.

#### 0.4.6

##### Patch Changes

- [`cc4228e`](https://github.com/backstage/backstage/commit/cc4228e): Switched module ID to use kebab-case.

#### 0.4.5

##### Patch Changes

- [`88b673aa76`](https://github.com/backstage/backstage/commit/88b673aa76): Import `AnalyzeOptions` and `ScmLocationAnalyzer` types from `@backstage/plugin-catalog-node`

### `@backstage/plugin-catalog-graph` (0.2.37 → [0.4.0](../../changelogs/@backstage/plugin-catalog-graph.md#040))

#### 0.4.0

##### Minor Changes

- [`3dc64e9`](https://github.com/backstage/backstage/commit/3dc64e9): Migrate plugin to the new frontend system, it is experimental and available via alpha subpath.

##### Patch Changes

- [`916da47`](https://github.com/backstage/backstage/commit/916da47): Change default icon for unknown entities to nothing instead of the help icon.
- [`f937aae`](https://github.com/backstage/backstage/commit/f937aae): use `CatalogClient.getEntitiesByRefs()` to reduce the number of backend requests from plugin `catalog-graph`
- [`3e1c6e2`](https://github.com/backstage/backstage/commit/3e1c6e2): Added possibility to show arrow heads for graph edges for better understandability.

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

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.3.3

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

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

### `@backstage/plugin-cloudbuild` (0.3.25 → [0.4.0](../../changelogs/@backstage/plugin-cloudbuild.md#040))

#### 0.4.0

##### Minor Changes

- [`0328d1b`](https://github.com/backstage/backstage/commit/0328d1b): Changed build list view to automatically filter builds based on repository name matching component-info's metadata.name.
  Added optional `google.com/cloudbuild-repo-name` annotation which allows you to specify a different repository to filter on.
  Added optional `google.com/cloudbuild-trigger-name` annotation which allows you to filter based on a trigger name instead of a repo name.
  Updated the ReadMe with information about the filtering and some other minor verbiage updates.
  Changed `substitutions.BRANCH_NAME` to `substitutions.REF_NAME` so that the Ref field is populated properly.
  Added optional `google.com/cloudbuild-location` annotation which allows you to specify the Cloud Build location of your builds. Default is global scope.
  Changed build list view to show builds in a specific location if the location annotation is used.
  Updated ReadMe with information about the use of the location filtering.

##### Patch Changes

- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.
- [`ef3cad4`](https://github.com/backstage/backstage/commit/ef3cad4): Add telemetry HTTP header Google Cloud Platform

#### 0.3.29

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.3.26

##### Patch Changes

- [`8ae07cab4c`](https://github.com/backstage/backstage/commit/8ae07cab4c): Added Installation Steps so that it is clear what is needed to install and use the Google Cloud Plugin.
- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-graphiql` (0.2.55 → [0.3.3](../../changelogs/@backstage/plugin-graphiql.md#033))

#### 0.3.3

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`912ca7b`](https://github.com/backstage/backstage/commit/912ca7b): Use `convertLegacyRouteRefs` to define routes in `/alpha` export plugin.
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.3.2

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.3.1

##### Patch Changes

- [`03d0b6d`](https://github.com/backstage/backstage/commit/03d0b6d): The `convertLegacyRouteRef` utility used by the alpha exports is now imported from `@backstage/core-compat-api`.
- [`a1227cc`](https://github.com/backstage/backstage/commit/a1227cc): Wrap `/alpha` export extension elements in backwards compatibility wrapper.
- [`5814122`](https://github.com/backstage/backstage/commit/5814122): Updated `/alpha` exports to fit new naming patterns.
- [`8f5d6c1`](https://github.com/backstage/backstage/commit/8f5d6c1): Updates to the `/alpha` exports to match the extension input wrapping change.
- [`36c94b8`](https://github.com/backstage/backstage/commit/36c94b8): Refactor of the alpha exports due to API change in how extension IDs are constructed.

#### 0.3.0

##### Minor Changes

- [`57fda44b90`](https://github.com/backstage/backstage/commit/57fda44b90): Upgrade to GraphiQL to 3.0.6

##### Patch Changes

- [`68fc9dc60e`](https://github.com/backstage/backstage/commit/68fc9dc60e): Updated alpha exports according to routing changes in `@backstage/frontend-plugin-api`.
- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.
- [`77f009b35d`](https://github.com/backstage/backstage/commit/77f009b35d): Internal updates to match changes in the experimental `@backstage/frontend-plugin-api`.

### `@backstage/plugin-home` (0.5.9 → [0.6.2](../../changelogs/@backstage/plugin-home.md#062))

#### 0.6.2

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`dc7ae8b`](https://github.com/backstage/backstage/commit/dc7ae8b): Use EntityDisplayName JSX element entity information directly for FeaturedDocsCard.
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.
- [`e6f0831`](https://github.com/backstage/backstage/commit/e6f0831): Updated dependency `@rjsf/utils` to `5.17.0`.
  Updated dependency `@rjsf/core` to `5.17.0`.
  Updated dependency `@rjsf/material-ui` to `5.17.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.17.0`.
- [`6a74ffd`](https://github.com/backstage/backstage/commit/6a74ffd): Updated dependency `@rjsf/utils` to `5.16.1`.
  Updated dependency `@rjsf/core` to `5.16.1`.
  Updated dependency `@rjsf/material-ui` to `5.16.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.16.1`.
- [`e9cdfd3`](https://github.com/backstage/backstage/commit/e9cdfd3): Fix typo in VisitsStorageApi
- [`384c132`](https://github.com/backstage/backstage/commit/384c132): Added filter support for HomePageVisitedByType in order to enable filtering entities from the list

#### 0.6.1

##### Patch Changes

- [`98ac5ab`](https://github.com/backstage/backstage/commit/98ac5ab): Updated dependency `@rjsf/utils` to `5.15.1`.
  Updated dependency `@rjsf/core` to `5.15.1`.
  Updated dependency `@rjsf/material-ui` to `5.15.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.15.1`.
- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.6.0

##### Minor Changes

- [`5a317f5`](https://github.com/backstage/backstage/commit/5a317f5): Added view of entities grouped by kind to make it easier to distinguish entities with different kind but same name

##### Patch Changes

- [`2633d64`](https://github.com/backstage/backstage/commit/2633d64): Change user settings backend plugin id and fix when using user setting backend home page first will cause edit page loop render
- [`a1227cc`](https://github.com/backstage/backstage/commit/a1227cc): Wrap `/alpha` export extension elements in backwards compatibility wrapper.
- [`5814122`](https://github.com/backstage/backstage/commit/5814122): Updated `/alpha` exports to fit new naming patterns.
- [`8f5d6c1`](https://github.com/backstage/backstage/commit/8f5d6c1): Updates to the `/alpha` exports to match the extension input wrapping change.
- [`2b72591`](https://github.com/backstage/backstage/commit/2b72591): Updated dependency `@rjsf/utils` to `5.14.3`.
  Updated dependency `@rjsf/core` to `5.14.3`.
  Updated dependency `@rjsf/material-ui` to `5.14.3`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.3`.
- [`6cd12f2`](https://github.com/backstage/backstage/commit/6cd12f2): Updated dependency `@rjsf/utils` to `5.14.1`.
  Updated dependency `@rjsf/core` to `5.14.1`.
  Updated dependency `@rjsf/material-ui` to `5.14.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.1`.
- [`64301d3`](https://github.com/backstage/backstage/commit/64301d3): Updated dependency `@rjsf/utils` to `5.15.0`.
  Updated dependency `@rjsf/core` to `5.15.0`.
  Updated dependency `@rjsf/material-ui` to `5.15.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.15.0`.
- [`63c494e`](https://github.com/backstage/backstage/commit/63c494e): Updated dependency `@rjsf/utils` to `5.14.2`.
  Updated dependency `@rjsf/core` to `5.14.2`.
  Updated dependency `@rjsf/material-ui` to `5.14.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.2`.
- [`36c94b8`](https://github.com/backstage/backstage/commit/36c94b8): Refactor of the alpha exports due to API change in how extension IDs are constructed.
- [`54cef27`](https://github.com/backstage/backstage/commit/54cef27): StarredEntities component calls `getEntitiesByRefs` instead of `getEntities` to improve performance since we have the `entityRefs`
- [`c8908d4`](https://github.com/backstage/backstage/commit/c8908d4): Use new option from RJSF 5.15
- [`0cbb03b`](https://github.com/backstage/backstage/commit/0cbb03b): Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617

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

### `@backstage/plugin-lighthouse-backend` (0.3.3 → [0.4.5](../../changelogs/@backstage/plugin-lighthouse-backend.md#045))

#### 0.4.2

##### Patch Changes

- [`b64ce5a`](https://github.com/backstage/backstage/commit/b64ce5a): Updated New Backend System instructions to use default import
- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument

#### 0.4.0

##### Minor Changes

- [`7f0dbfd`](https://github.com/backstage/backstage/commit/7f0dbfd): Fixed crashes faced with custom schedule configuration. The configuration schema has been update to leverage the TaskScheduleDefinition interface. It is highly recommended to move the `lighthouse.shedule` and `lighthouse.timeout` respectively to `lighthouse.schedule.frequency` and `lighthouse.schedule.timeout`.

### `@backstage/plugin-pagerduty` (0.6.6 → [0.7.2](../../changelogs/@backstage/plugin-pagerduty.md#072))

#### 0.7.2

##### Patch Changes

- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.7.1

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.7.0

##### Minor Changes

- [`5fca16f`](https://github.com/backstage/backstage/commit/5fca16f): This package has been deprecated, consider using [@pagerduty/backstage-plugin](https://github.com/pagerduty/backstage-plugin) instead.

#### 0.6.7

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-scaffolder-node` (0.2.7 → [0.3.3](../../changelogs/@backstage/plugin-scaffolder-node.md#033))

#### 0.3.0

##### Minor Changes

- [`3a9ba42`](https://github.com/backstage/backstage/commit/3a9ba42): Added functions to clone a repo, create a branch, add files and push and commit to the branch. This allows for files to be added to the a PR for use in the bitbucket pull request action for issue #21762
- [`11b9a08`](https://github.com/backstage/backstage/commit/11b9a08): Introduced the first version of recoverable tasks.
- [`78c100b`](https://github.com/backstage/backstage/commit/78c100b): Support providing an overriding token for `fetch:template`, `fetch:plain` and `fetch:file` when interacting with upstream integrations

##### Patch Changes

- [`6bb6f3e`](https://github.com/backstage/backstage/commit/6bb6f3e): Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- [`9b0bf20`](https://github.com/backstage/backstage/commit/9b0bf20): Add gitea as new type to be used from integrations configuration
- [`e0e5afe`](https://github.com/backstage/backstage/commit/e0e5afe): Add option to configure nunjucks with the `trimBlocks` and `lstripBlocks` options in the fetch:template action

#### 0.2.9

##### Patch Changes

- [`219d7f0`](https://github.com/backstage/backstage/commit/219d7f0): Refactor some methods to `-node` instead and use the new external modules
- [`0cbb03b`](https://github.com/backstage/backstage/commit/0cbb03b): Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617

#### 0.2.8

##### Patch Changes

- [`8613ba3928`](https://github.com/backstage/backstage/commit/8613ba3928): Switched to using `"exports"` field for `/alpha` subpath export.

### `@backstage/plugin-user-settings` (0.7.11 → [0.8.1](../../changelogs/@backstage/plugin-user-settings.md#081))

#### 0.8.1

##### Patch Changes

- [`912ca7b`](https://github.com/backstage/backstage/commit/912ca7b): Use `convertLegacyRouteRefs` to define routes in `/alpha` export plugin.
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.
- [`d5b14a0`](https://github.com/backstage/backstage/commit/d5b14a0): conditionally rendering the user name and email in user settings page

#### 0.8.0

##### Minor Changes

- [`56b2fb0`](https://github.com/backstage/backstage/commit/56b2fb0): Updated the user settings selector to use a select component that displays native language names instead of language codes if possible.

##### Patch Changes

- [`eea0849`](https://github.com/backstage/backstage/commit/eea0849): add user-settings declarative integration core nav item
- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.7.14

##### Patch Changes

- [`03d0b6d`](https://github.com/backstage/backstage/commit/03d0b6d): The `convertLegacyRouteRef` utility used by the alpha exports is now imported from `@backstage/core-compat-api`.
- [`a1227cc`](https://github.com/backstage/backstage/commit/a1227cc): Wrap `/alpha` export extension elements in backwards compatibility wrapper.
- [`5814122`](https://github.com/backstage/backstage/commit/5814122): Updated `/alpha` exports to fit new naming patterns.
- [`8f5d6c1`](https://github.com/backstage/backstage/commit/8f5d6c1): Updates to the `/alpha` exports to match the extension input wrapping change.
- [`36c94b8`](https://github.com/backstage/backstage/commit/36c94b8): Refactor of the alpha exports due to API change in how extension IDs are constructed.
- [`fb8f3bd`](https://github.com/backstage/backstage/commit/fb8f3bd): Updated alpha translation message keys to use nested format and camel case.

#### 0.7.12

##### Patch Changes

- [`68fc9dc60e`](https://github.com/backstage/backstage/commit/68fc9dc60e): Updated alpha exports according to routing changes in `@backstage/frontend-plugin-api`.
- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/plugin-vault-backend` (0.3.11 → [0.4.6](../../changelogs/@backstage/plugin-vault-backend.md#046))

#### 0.4.3

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.

#### 0.4.1

##### Patch Changes

- [`b7de76a`](https://github.com/backstage/backstage/commit/b7de76a): Updated to test using PostgreSQL 12 and 16

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

### `@backstage/theme` (0.4.3 → [0.5.1](../../changelogs/@backstage/theme.md#051))

#### 0.5.1

##### Patch Changes

- [`dd5d7cc`](https://github.com/backstage/backstage/commit/dd5d7cc): Fixed missing extra variables like `applyDarkStyles` in Mui V5 theme after calling `createUnifiedThemeFromV4` function
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.5.0

##### Minor Changes

- [`4d9e3b3`](https://github.com/backstage/backstage/commit/4d9e3b3): Added a global `OverrideComponentNameToClassKeys` for other plugins and packages to populate using module augmentation. This will in turn will provide component style override types for `createUnifiedTheme`.

##### Patch Changes

- [`cd0dd4c`](https://github.com/backstage/backstage/commit/cd0dd4c): Align Material UI v5 `Paper` component background color in dark mode to v4.

#### 0.4.4

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

## 0.0.x patch version bumps

### `@backstage/plugin-explore-backend` (0.0.16 → [0.0.23](../../changelogs/@backstage/plugin-explore-backend.md#0023))

#### 0.0.20

##### Patch Changes

- [`fd3d51c`](https://github.com/backstage/backstage/commit/fd3d51c): Add support for the new backend system.

  A new backend plugin for the explore backend
  was added and exported as `default`.

  You can use it with the new backend system like

  ```ts title="packages/backend/src/index.ts"
  backend.add(import('@backstage/plugin-explore-backend'));
  ```

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument

#### 0.0.19

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-explore-react` (0.0.32 → [0.0.36](../../changelogs/@backstage/plugin-explore-react.md#0036))

#### 0.0.35

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.0.33

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/plugin-kubernetes-cluster` (0.0.1 → [0.0.6](../../changelogs/@backstage/plugin-kubernetes-cluster.md#006))

#### 0.0.6

##### Patch Changes

- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.0.5

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.0.2

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/release-manifests` (0.0.10 → [0.0.11](../../changelogs/@backstage/release-manifests.md#0011))

#### 0.0.11

##### Patch Changes

- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

## 0.x patch version bumps

### `@backstage/backend-app-api` (0.5.7 → [0.5.14](../../changelogs/@backstage/backend-app-api.md#0514))

#### 0.5.11

##### Patch Changes

- [`e0c18ef`](https://github.com/backstage/backstage/commit/e0c18ef): Include the extension point ID and the module ID in the backend init error message.
- [`7ae5704`](https://github.com/backstage/backstage/commit/7ae5704): Updated the default error handling middleware to filter out certain known error types that should never be returned in responses. The errors are instead logged along with a correlation ID, which is also returned in the response. Initially only PostgreSQL protocol errors from the `pg-protocol` package are filtered out.
- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`54ad8e1`](https://github.com/backstage/backstage/commit/54ad8e1): Allow the `createConfigSecretEnumerator` to take an optional `schema` argument with an already-loaded global configuration schema.
- [`6bb6f3e`](https://github.com/backstage/backstage/commit/6bb6f3e): Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.

#### 0.5.10

##### Patch Changes

- [`516fd3e`](https://github.com/backstage/backstage/commit/516fd3e): Updated README to reflect release status

#### 0.5.9

##### Patch Changes

- [`1da5f43`](https://github.com/backstage/backstage/commit/1da5f43): Ensure redaction of secrets that have accidental extra whitespace around them
- [`9f8f266`](https://github.com/backstage/backstage/commit/9f8f266): Add redacting for secrets in stack traces of logs

#### 0.5.8

##### Patch Changes

- [`bc9a18d5ec`](https://github.com/backstage/backstage/commit/bc9a18d5ec): Added a workaround for double `default` wrapping when dynamically importing CommonJS modules with default exports.

### `@backstage/backend-defaults` (0.2.6 → [0.2.13](../../changelogs/@backstage/backend-defaults.md#0213))

#### 0.2.10

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument

#### 0.2.9

##### Patch Changes

- [`516fd3e`](https://github.com/backstage/backstage/commit/516fd3e): Updated README to reflect release status

### `@backstage/backend-dev-utils` (0.1.2 → [0.1.4](../../changelogs/@backstage/backend-dev-utils.md#014))

#### 0.1.4

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument

#### 0.1.3

##### Patch Changes

- [`516fd3e`](https://github.com/backstage/backstage/commit/516fd3e): Updated README to reflect release status

### `@backstage/backend-plugin-api` (0.6.6 → [0.6.13](../../changelogs/@backstage/backend-plugin-api.md#0613))

#### 0.6.10

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`1f020fe`](https://github.com/backstage/backstage/commit/1f020fe): Support `token` in `readTree`, `readUrl` and `search`

#### 0.6.9

##### Patch Changes

- [`516fd3e`](https://github.com/backstage/backstage/commit/516fd3e): Updated README to reflect release status

#### 0.6.7

##### Patch Changes

- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.

### `@backstage/backend-tasks` (0.5.11 → [0.5.18](../../changelogs/@backstage/backend-tasks.md#0518))

#### 0.5.15

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`6707216`](https://github.com/backstage/backstage/commit/6707216): The `TaskScheduler.fromConfig` method now accepts the `LegacyRootDatabaseService` interface rather than the full `DatabaseManager` implementation.
- [`b68248b`](https://github.com/backstage/backstage/commit/b68248b): Updated dependency `cron` to `^3.0.0`.

#### 0.5.13

##### Patch Changes

- [`d8f488a`](https://github.com/backstage/backstage/commit/d8f488a): Allow tasks to run more often that the default work check interval, which is 5 seconds.
- [`0cbb03b`](https://github.com/backstage/backstage/commit/0cbb03b): Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617

#### 0.5.12

##### Patch Changes

- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.

### `@backstage/codemods` (0.1.46 → [0.1.47](../../changelogs/@backstage/codemods.md#0147))

#### 0.1.47

##### Patch Changes

- [`6ba64c4`](https://github.com/backstage/backstage/commit/6ba64c4): Updated dependency `commander` to `^12.0.0`.

### `@backstage/create-app` (0.5.6 → [0.5.11](../../changelogs/@backstage/create-app.md#0511))

#### 0.5.11

##### Patch Changes

- [`c70c3dc`](https://github.com/backstage/backstage/commit/c70c3dc): Bumped create-app version.
- [`c420081`](https://github.com/backstage/backstage/commit/c420081): Add a seed file for `yarn.lock` in newly created apps. This file is downloaded directly from `https://github.com/backstage/backstage` at the time of creating a new project, ensuring that users always receive the latest version. The purpose of the seed file is to initialize the lock file with known good versions of individual dependencies that have had bad new releases published. The seed file will have no effect if the dependency is not present, it can not be used to install additional packages.
- [`f71352c`](https://github.com/backstage/backstage/commit/f71352c): Bumped TypeScript to version `5.3`.
- [`03e55b1`](https://github.com/backstage/backstage/commit/03e55b1): Updated the default app index template at `packages/app/public/index.html` to have a fallback value for the `app.title` config.
- [`6bb6f3e`](https://github.com/backstage/backstage/commit/6bb6f3e): Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- [`6ba64c4`](https://github.com/backstage/backstage/commit/6ba64c4): Updated dependency `commander` to `^12.0.0`.
- [`aeec29c`](https://github.com/backstage/backstage/commit/aeec29c): Updated `packages/app` as well as the root `package.json` type resolutions to use React v18.

  The `@testing-library/*` dependencies have also been updated to the ones compatible with React v18, and the test at `packages/app/src/App.test.tsx` had been updated to use more modern patterns that work better with these new versions.

  For information on how to migrate existing apps to React v18, see the [migration guide](https://backstage.io/docs/tutorials/react18-migration)

#### 0.5.9

##### Patch Changes

- [`c9f71fb`](https://github.com/backstage/backstage/commit/c9f71fb): Bumped create-app version.
- [`ac277f3`](https://github.com/backstage/backstage/commit/ac277f3): Bumped create-app version.
- [`7acbb5a`](https://github.com/backstage/backstage/commit/7acbb5a): Removed `mock-fs` dev dependency.

#### 0.5.8

##### Patch Changes

- [`8ece804`](https://github.com/backstage/backstage/commit/8ece804): Bumped create-app version.
- [`0351e09`](https://github.com/backstage/backstage/commit/0351e09): Bumped create-app version.
- [`3f1192f`](https://github.com/backstage/backstage/commit/3f1192f): Bumped create-app version.
- [`a96c2d4`](https://github.com/backstage/backstage/commit/a96c2d4): Include the `<EntityLinksCard />` for group entities by default
- [`375b6f7`](https://github.com/backstage/backstage/commit/375b6f7): CircelCI plugin moved permanently

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

### `@backstage/e2e-test-utils` (0.1.0 → [0.1.1](../../changelogs/@backstage/e2e-test-utils.md#011))

#### 0.1.1

##### Patch Changes

- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.
- [`6bb6f3e`](https://github.com/backstage/backstage/commit/6bb6f3e): Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.

### `@backstage/eslint-plugin` (0.1.3 → [0.1.5](../../changelogs/@backstage/eslint-plugin.md#015))

#### 0.1.5

##### Patch Changes

- [`995d280`](https://github.com/backstage/backstage/commit/995d280): Added new `@backstage/no-top-level-material-ui-4-imports` rule that forbids top level imports from Material UI v4 packages

#### 0.1.4

##### Patch Changes

- [`107dc46`](https://github.com/backstage/backstage/commit/107dc46): The `no-undeclared-imports` rule will now prefer using version queries that already exist en the repo for the same dependency type when installing new packages.

### `@backstage/integration-aws-node` (0.1.7 → [0.1.9](../../changelogs/@backstage/integration-aws-node.md#019))

#### 0.1.9

##### Patch Changes

- [`6d898f7`](https://github.com/backstage/backstage/commit/6d898f7): All single-line secrets read from config will now have both leading and trailing whitespace trimmed. This is done to ensure that the secrets are always valid HTTP header values, since many fetch implementations will include the header value itself when an error is thrown due to invalid header values.

#### 0.1.8

##### Patch Changes

- [`20d97d28a3`](https://github.com/backstage/backstage/commit/20d97d28a3): Updated dependency `aws-sdk-client-mock-jest` to `^3.0.0`.
- [`3d043526f4`](https://github.com/backstage/backstage/commit/3d043526f4): Updated dependency `aws-sdk-client-mock` to `^3.0.0`.

### `@backstage/plugin-adr` (0.6.8 → [0.6.13](../../changelogs/@backstage/plugin-adr.md#0613))

#### 0.6.13

##### Patch Changes

- [`0b03962`](https://github.com/backstage/backstage/commit/0b03962): Updated README
- [`987f565`](https://github.com/backstage/backstage/commit/987f565): Fix alignment of text in `AdrSearchResultListItem`. Update size and font to match other `SearchResultListItem`.
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.6.12

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.6.11

##### Patch Changes

- [`5814122`](https://github.com/backstage/backstage/commit/5814122): Updated `/alpha` exports to fit new naming patterns.
- [`36c94b8`](https://github.com/backstage/backstage/commit/36c94b8): Refactor of the alpha exports due to API change in how extension IDs are constructed.
- [`fb8f3bd`](https://github.com/backstage/backstage/commit/fb8f3bd): Updated alpha translation message keys to use nested format and camel case.

#### 0.6.9

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-adr-backend` (0.4.3 → [0.4.10](../../changelogs/@backstage/plugin-adr-backend.md#0410))

#### 0.4.7

##### Patch Changes

- [`b64ce5a`](https://github.com/backstage/backstage/commit/b64ce5a): Updated New Backend System instructions to use default import
- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument

#### 0.4.6

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.4.4

##### Patch Changes

- [`68f8a55622`](https://github.com/backstage/backstage/commit/68f8a55622): Updated dependency `@types/marked` to `^5.0.0`.

### `@backstage/plugin-airbrake` (0.3.25 → [0.3.30](../../changelogs/@backstage/plugin-airbrake.md#0330))

#### 0.3.30

##### Patch Changes

- [`b64ce5a`](https://github.com/backstage/backstage/commit/b64ce5a): Updated New Backend System instructions to use default import
- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.3.29

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.3.26

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-airbrake-backend` (0.3.3 → [0.3.10](../../changelogs/@backstage/plugin-airbrake-backend.md#0310))

#### 0.3.6

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-allure` (0.1.41 → [0.1.46](../../changelogs/@backstage/plugin-allure.md#0146))

#### 0.1.46

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.1.45

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.42

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-apache-airflow` (0.2.16 → [0.2.20](../../changelogs/@backstage/plugin-apache-airflow.md#0220))

#### 0.2.20

##### Patch Changes

- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.2.19

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.2.17

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/plugin-api-docs-module-protoc-gen-doc` (0.1.4 → [0.1.6](../../changelogs/@backstage/plugin-api-docs-module-protoc-gen-doc.md#016))

#### 0.1.6

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.1.5

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-apollo-explorer` (0.1.16 → [0.1.20](../../changelogs/@backstage/plugin-apollo-explorer.md#0120))

#### 0.1.20

##### Patch Changes

- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.1.19

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.18

##### Patch Changes

- [`e296b94`](https://github.com/backstage/backstage/commit/e296b94): Updated dependency `@apollo/explorer` to `^3.0.0`.

#### 0.1.17

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-app-backend` (0.3.54 → [0.3.61](../../changelogs/@backstage/plugin-app-backend.md#0361))

#### 0.3.58

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`998ccf6`](https://github.com/backstage/backstage/commit/998ccf6): Support injecting config multiple times in a single bundle
- [`6bb6f3e`](https://github.com/backstage/backstage/commit/6bb6f3e): Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- [`54ad8e1`](https://github.com/backstage/backstage/commit/54ad8e1): Allow the `app-backend` plugin to use a global configuration schema provided externally through an extension.
- [`9dfd57d`](https://github.com/backstage/backstage/commit/9dfd57d): Do not force caching of the Javascript asset that contains the injected config.

#### 0.3.57

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.3.55

##### Patch Changes

- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.

### `@backstage/plugin-app-node` (0.1.6 → [0.1.13](../../changelogs/@backstage/plugin-app-node.md#0113))

#### 0.1.10

##### Patch Changes

- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.
- [`6bb6f3e`](https://github.com/backstage/backstage/commit/6bb6f3e): Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- [`54ad8e1`](https://github.com/backstage/backstage/commit/54ad8e1): Allow the `app-backend` plugin to use a global configuration schema provided externally through an extension.

### `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.2.0 → [0.2.8](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#028))

#### 0.2.3

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.2.2

##### Patch Changes

- [`cc4228e`](https://github.com/backstage/backstage/commit/cc4228e): Switched module ID to use kebab-case.

### `@backstage/plugin-auth-backend-module-github-provider` (0.1.3 → [0.1.10](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#0110))

#### 0.1.7

##### Patch Changes

- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.

#### 0.1.6

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.3 → [0.1.10](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#0110))

#### 0.1.7

##### Patch Changes

- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.

#### 0.1.6

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.5

##### Patch Changes

- [`a62764b`](https://github.com/backstage/backstage/commit/a62764b): Updated dependency `passport` to `^0.7.0`.

#### 0.1.4

##### Patch Changes

- [`a3236ad0ca`](https://github.com/backstage/backstage/commit/a3236ad0ca): Fix link to the repository in `README.md`.

### `@backstage/plugin-auth-backend-module-google-provider` (0.1.3 → [0.1.10](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#0110))

#### 0.1.6

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.5

##### Patch Changes

- [`cc4228e`](https://github.com/backstage/backstage/commit/cc4228e): Switched module ID to use kebab-case.

### `@backstage/plugin-auth-backend-module-microsoft-provider` (0.1.1 → [0.1.8](../../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#018))

#### 0.1.5

##### Patch Changes

- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.
- [`1ff2684`](https://github.com/backstage/backstage/commit/1ff2684): Added the possibility to use custom scopes for performing login with Microsoft EntraID.

#### 0.1.4

##### Patch Changes

- [`928efbc`](https://github.com/backstage/backstage/commit/928efbc): Deprecated the `authModuleMicrosoftProvider` export. A default export is now available and should be used like this in your backend: `backend.add(import('@backstage/plugin-auth-backend-module-microsoft-provider'));`
- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.3

##### Patch Changes

- [`a62764b`](https://github.com/backstage/backstage/commit/a62764b): Updated dependency `passport` to `^0.7.0`.

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

### `@backstage/plugin-auth-backend-module-oauth2-provider` (0.1.3 → [0.1.10](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#0110))

#### 0.1.7

##### Patch Changes

- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.

#### 0.1.6

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.5

##### Patch Changes

- [`a62764b`](https://github.com/backstage/backstage/commit/a62764b): Updated dependency `passport` to `^0.7.0`.

### `@backstage/plugin-auth-backend-module-pinniped-provider` (0.1.0 → [0.1.7](../../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#017))

#### 0.1.4

##### Patch Changes

- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.

#### 0.1.3

##### Patch Changes

- [`928efbc`](https://github.com/backstage/backstage/commit/928efbc): Deprecated the `authModulePinnipedProvider` export. A default export is now available and should be used like this in your backend: `backend.add(import('@backstage/plugin-auth-backend-module-pinniped-provider'));`
- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.2

##### Patch Changes

- [`a62764b`](https://github.com/backstage/backstage/commit/a62764b): Updated dependency `passport` to `^0.7.0`.

#### 0.1.1

##### Patch Changes

- [`a8f6afda4a`](https://github.com/backstage/backstage/commit/a8f6afda4a): Introduced metadata cache for the `pinniped` provider.

### `@backstage/plugin-auth-node` (0.4.0 → [0.4.8](../../changelogs/@backstage/plugin-auth-node.md#048))

#### 0.4.4

##### Patch Changes

- [`71c3b7f`](https://github.com/backstage/backstage/commit/71c3b7f): Fix error when Microsoft tokens (or any other using the `defaultProfileTransform`) are requested without the profile scope.
- [`d4cc552`](https://github.com/backstage/backstage/commit/d4cc552): The helper function `makeProfileInfo` and `PassportHelpers.transformProfile`
  were refactored to use the `jose` library.

#### 0.4.2

##### Patch Changes

- [`a62764b`](https://github.com/backstage/backstage/commit/a62764b): Updated dependency `passport` to `^0.7.0`.
- [`0cbb03b`](https://github.com/backstage/backstage/commit/0cbb03b): Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617

### `@backstage/plugin-azure-devops` (0.3.7 → [0.3.12](../../changelogs/@backstage/plugin-azure-devops.md#0312))

#### 0.3.12

##### Patch Changes

- [`e2083df`](https://github.com/backstage/backstage/commit/e2083df): Added alpha support for the New Frontend System (Declarative Integration)
- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.
- [`995d280`](https://github.com/backstage/backstage/commit/995d280): Updated imports from named to default imports to help with the Material UI v4 to v5 migration
- [`cb0afaa`](https://github.com/backstage/backstage/commit/cb0afaa): Prefer `dev.azure.com/build-definition` annotation when it is provided, as it is more specific than `dev.azure.com/project-repo`. This can also be used as a filter for mono-repos.

#### 0.3.11

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.3.10

##### Patch Changes

- [`c70e4f5`](https://github.com/backstage/backstage/commit/c70e4f5): Added multi-org support
- [`7c9af0b`](https://github.com/backstage/backstage/commit/7c9af0b): Added support for annotations that use a subpath for the host. Also validated that the annotations have the correct number of slashes.
- [`043b724`](https://github.com/backstage/backstage/commit/043b724): Introduced new `AzureDevOpsAnnotatorProcessor` that adds the needed annotations automatically. Also, moved constants to common package so they can be shared more easily

#### 0.3.8

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`ce9e59cbb3`](https://github.com/backstage/backstage/commit/ce9e59cbb3): Refactored the error handling for some of the hooks
- [`361bb34d8e`](https://github.com/backstage/backstage/commit/361bb34d8e): Consolidated getting the annotation values into a single function to help with future changes

### `@backstage/plugin-azure-devops-common` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-azure-devops-common.md#032))

#### 0.3.2

##### Patch Changes

- [`c70e4f5`](https://github.com/backstage/backstage/commit/c70e4f5): Added multi-org support
- [`043b724`](https://github.com/backstage/backstage/commit/043b724): Introduced new `AzureDevOpsAnnotatorProcessor` that adds the needed annotations automatically. Also, moved constants to common package so they can be shared more easily

### `@backstage/plugin-azure-sites` (0.1.14 → [0.1.19](../../changelogs/@backstage/plugin-azure-sites.md#0119))

#### 0.1.19

##### Patch Changes

- [`09a9c95`](https://github.com/backstage/backstage/commit/09a9c95): Updated README
- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.
- [`5a409bb`](https://github.com/backstage/backstage/commit/5a409bb): Azure Sites `start` and `stop` action is now protected with the Permissions framework.

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

#### 0.1.18

##### Patch Changes

- [`a31f688`](https://github.com/backstage/backstage/commit/a31f688): Show Azure site tags in `EntityAzureSitesOverviewWidget`.
- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.15

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-azure-sites-common` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-azure-sites-common.md#012))

#### 0.1.2

##### Patch Changes

- [`5a409bb`](https://github.com/backstage/backstage/commit/5a409bb): Azure Sites `start` and `stop` action is now protected with the Permissions framework.

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

### `@backstage/plugin-badges` (0.2.49 → [0.2.54](../../changelogs/@backstage/plugin-badges.md#0254))

#### 0.2.54

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.2.53

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.2.50

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-badges-backend` (0.3.3 → [0.3.10](../../changelogs/@backstage/plugin-badges-backend.md#0310))

#### 0.3.7

##### Patch Changes

- [`6991e5f`](https://github.com/backstage/backstage/commit/6991e5f): Updating the `authorization` middleware to call the Catalog to check that the requesting user has permission to see the Entity before generating the UUID.
- [`b64ce5a`](https://github.com/backstage/backstage/commit/b64ce5a): Updated New Backend System instructions to use default import
- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument

#### 0.3.6

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.3.4

##### Patch Changes

- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/plugin-bazaar` (0.2.17 → [0.2.22](../../changelogs/@backstage/plugin-bazaar.md#0222))

#### 0.2.22

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.2.21

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.2.20

##### Patch Changes

- [`5d79682`](https://github.com/backstage/backstage/commit/5d79682): Internalize 'AboutField' to break catalog dependency

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

### `@backstage/plugin-bazaar-backend` (0.3.4 → [0.3.11](../../changelogs/@backstage/plugin-bazaar-backend.md#0311))

#### 0.3.8

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument

#### 0.3.7

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.3.5

##### Patch Changes

- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.
- [`8613ba3928`](https://github.com/backstage/backstage/commit/8613ba3928): Switched to using `"exports"` field for `/alpha` subpath export.

### `@backstage/plugin-bitbucket-cloud-common` (0.2.13 → [0.2.16](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#0216))

#### 0.2.16

##### Patch Changes

- [`2e6af00`](https://github.com/backstage/backstage/commit/2e6af00): Updated dependency `ts-morph` to `^21.0.0`.

#### 0.2.15

##### Patch Changes

- [`acf9390`](https://github.com/backstage/backstage/commit/acf9390): Updated dependency `ts-morph` to `^20.0.0`.

#### 0.2.14

##### Patch Changes

- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/plugin-bitrise` (0.1.52 → [0.1.57](../../changelogs/@backstage/plugin-bitrise.md#0157))

#### 0.1.57

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.
- [`e24e4d3`](https://github.com/backstage/backstage/commit/e24e4d3): Update README

#### 0.1.56

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.53

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-catalog-backend-module-aws` (0.3.0 → [0.3.7](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#037))

#### 0.3.4

##### Patch Changes

- [`a81b1ba`](https://github.com/backstage/backstage/commit/a81b1ba): The default EKS cluster entity transformer now sets the new
  `kubernetes.io/x-k8s-aws-id` annotation.
- [`22927c4`](https://github.com/backstage/backstage/commit/22927c4): Move the AWS account e-mail from labels to annotations to fix the creation of `cloud-account` resources.

#### 0.3.3

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies
- [`22e88d0`](https://github.com/backstage/backstage/commit/22e88d0): Added status and e-mail as labels to the AWS Account Resource

#### 0.3.2

##### Patch Changes

- [`cc4228e`](https://github.com/backstage/backstage/commit/cc4228e): Switched module ID to use kebab-case.

#### 0.3.1

##### Patch Changes

- [`20d97d28a3`](https://github.com/backstage/backstage/commit/20d97d28a3): Updated dependency `aws-sdk-client-mock-jest` to `^3.0.0`.
- [`3d043526f4`](https://github.com/backstage/backstage/commit/3d043526f4): Updated dependency `aws-sdk-client-mock` to `^3.0.0`.

### `@backstage/plugin-catalog-backend-module-azure` (0.1.25 → [0.1.32](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0132))

#### 0.1.29

##### Patch Changes

- [`534786a`](https://github.com/backstage/backstage/commit/534786a): Fixed issue where specifying a branch for discovery did not work

#### 0.1.28

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.27

##### Patch Changes

- [`cc4228e`](https://github.com/backstage/backstage/commit/cc4228e): Switched module ID to use kebab-case.

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.21 → [0.1.28](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#0128))

#### 0.1.23

##### Patch Changes

- [`cc4228e`](https://github.com/backstage/backstage/commit/cc4228e): Switched module ID to use kebab-case.

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.19 → [0.1.26](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#0126))

#### 0.1.21

##### Patch Changes

- [`cc4228e`](https://github.com/backstage/backstage/commit/cc4228e): Switched module ID to use kebab-case.

### `@backstage/plugin-catalog-backend-module-gcp` (0.1.6 → [0.1.13](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#0113))

#### 0.1.8

##### Patch Changes

- [`42c1aee`](https://github.com/backstage/backstage/commit/42c1aee): Updated dependency `@google-cloud/container` to `^5.0.0`.
- [`cc4228e`](https://github.com/backstage/backstage/commit/cc4228e): Switched module ID to use kebab-case.

#### 0.1.7

##### Patch Changes

- [`62180df4ee`](https://github.com/backstage/backstage/commit/62180df4ee): Allow integration with kubernetes dashboard

### `@backstage/plugin-catalog-backend-module-gerrit` (0.1.22 → [0.1.29](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0129))

#### 0.1.26

##### Patch Changes

- [`6bb6f3e`](https://github.com/backstage/backstage/commit/6bb6f3e): Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.

#### 0.1.25

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.24

##### Patch Changes

- [`cc4228e`](https://github.com/backstage/backstage/commit/cc4228e): Switched module ID to use kebab-case.

### `@backstage/plugin-catalog-backend-module-github-org` (0.1.0 → [0.1.7](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#017))

#### 0.1.4

##### Patch Changes

- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.

#### 0.1.2

##### Patch Changes

- [`cc4228e`](https://github.com/backstage/backstage/commit/cc4228e): Switched module ID to use kebab-case.

### `@backstage/plugin-catalog-backend-module-gitlab` (0.3.3 → [0.3.10](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#0310))

#### 0.3.7

##### Patch Changes

- [`60e4c2a`](https://github.com/backstage/backstage/commit/60e4c2a): Added the option to provide custom `groupTransformer`, `userTransformer` and `groupNameTransformer` to allow custom transformations of groups and users

#### 0.3.5

##### Patch Changes

- [`cc4228e`](https://github.com/backstage/backstage/commit/cc4228e): Switched module ID to use kebab-case.

#### 0.3.4

##### Patch Changes

- [`d732f17610`](https://github.com/backstage/backstage/commit/d732f17610): Added try catch around fetching gitlab group users to prevent refresh from failing completely while only a select number of groups might not be able to load correctly.
- [`0873a43ac1`](https://github.com/backstage/backstage/commit/0873a43ac1): Resolved a bug affecting the retrieval of users from group members. By appending '/all' to the API call, we now include members from all inherited groups, as per Gitlab's API specifications. This change is reflected in the listSaaSUsers function.

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.10 → [0.4.17](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#0417))

#### 0.4.14

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument

#### 0.4.12

##### Patch Changes

- [`43b2eb8`](https://github.com/backstage/backstage/commit/43b2eb8): Ensure that cursors always come back as JSON on sqlite too
- [`cc4228e`](https://github.com/backstage/backstage/commit/cc4228e): Switched module ID to use kebab-case.

#### 0.4.11

##### Patch Changes

- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.

### `@backstage/plugin-catalog-backend-module-msgraph` (0.5.13 → [0.5.20](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#0520))

#### 0.5.17

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument

#### 0.5.15

##### Patch Changes

- [`99fb541`](https://github.com/backstage/backstage/commit/99fb541): Updated dependency `@azure/identity` to `^4.0.0`.

#### 0.5.14

##### Patch Changes

- [`224aa6f64c`](https://github.com/backstage/backstage/commit/224aa6f64c): export the function to read ms graph provider config
- [`243c655a68`](https://github.com/backstage/backstage/commit/243c655a68): JSDoc and Error message updates to handle `Azure Active Directory` re-brand to `Entra ID`

### `@backstage/plugin-catalog-backend-module-openapi` (0.1.23 → [0.1.30](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0130))

#### 0.1.27

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument

#### 0.1.26

##### Patch Changes

- [`4ebf99b`](https://github.com/backstage/backstage/commit/4ebf99b): Add support for the new backend system.

  A new backend module for the catalog backend
  was added and exported as `default`.

  You can use it with the new backend system like

  ```ts title="packages/backend/src/index.ts"
  backend.add(import('@backstage/plugin-catalog-backend-module-openapi'));
  ```

### `@backstage/plugin-catalog-backend-module-puppetdb` (0.1.11 → [0.1.18](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0118))

#### 0.1.15

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`bc644fb`](https://github.com/backstage/backstage/commit/bc644fb): Added `latest_report_status` parameter from the PuppetDB node api and added it as a tag to the nodes. The status is valuable information as it displays which nodes are compliant to your configuration and which ones are failing are making changes.

#### 0.1.13

##### Patch Changes

- [`cc4228e`](https://github.com/backstage/backstage/commit/cc4228e): Switched module ID to use kebab-case.

### `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.3 → [0.1.10](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#0110))

#### 0.1.7

##### Patch Changes

- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.

#### 0.1.6

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.5

##### Patch Changes

- [`cc4228e`](https://github.com/backstage/backstage/commit/cc4228e): Switched module ID to use kebab-case.

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.3.3 → [0.3.10](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#0310))

#### 0.3.7

##### Patch Changes

- [`d3dd64a`](https://github.com/backstage/backstage/commit/d3dd64a): Explicitly only depend on the `use` method from the `HttpRouterService`.
- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument

#### 0.3.5

##### Patch Changes

- [`cc4228e`](https://github.com/backstage/backstage/commit/cc4228e): Switched module ID to use kebab-case.

#### 0.3.4

##### Patch Changes

- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.

### `@backstage/plugin-catalog-import` (0.10.1 → [0.10.6](../../changelogs/@backstage/plugin-catalog-import.md#0106))

#### 0.10.6

##### Patch Changes

- [`916da47`](https://github.com/backstage/backstage/commit/916da47): Change default icon for unknown entities to nothing instead of the help icon.
- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.
- [`1cae748`](https://github.com/backstage/backstage/commit/1cae748): Updated dependency `git-url-parse` to `^14.0.0`.

#### 0.10.4

##### Patch Changes

- [`03d0b6d`](https://github.com/backstage/backstage/commit/03d0b6d): The `convertLegacyRouteRef` utility used by the alpha exports is now imported from `@backstage/core-compat-api`.
- [`a1227cc`](https://github.com/backstage/backstage/commit/a1227cc): Wrap `/alpha` export extension elements in backwards compatibility wrapper.
- [`5814122`](https://github.com/backstage/backstage/commit/5814122): Updated `/alpha` exports to fit new naming patterns.
- [`36c94b8`](https://github.com/backstage/backstage/commit/36c94b8): Refactor of the alpha exports due to API change in how extension IDs are constructed.

#### 0.10.2

##### Patch Changes

- [`6db75b900a`](https://github.com/backstage/backstage/commit/6db75b900a): Create an experimental plugin that is compatible with the declarative integration system, it is exported from the `/alpha` subpath.
- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`dee1f39fcc`](https://github.com/backstage/backstage/commit/dee1f39fcc): Fix missing children key warning on the default catalog import page.
- [`71c97e7d73`](https://github.com/backstage/backstage/commit/71c97e7d73): The `app.title` configuration is now properly required to be a string.

### `@backstage/plugin-catalog-unprocessed-entities` (0.1.4 → [0.1.8](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#018))

#### 0.1.8

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.1.7

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.5

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`a11cdb9200`](https://github.com/backstage/backstage/commit/a11cdb9200): Added filtering and sorting to unprocessed entities tables.

### `@backstage/plugin-cicd-statistics` (0.1.27 → [0.1.32](../../changelogs/@backstage/plugin-cicd-statistics.md#0132))

#### 0.1.28

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-cicd-statistics-module-gitlab` (0.1.21 → [0.1.26](../../changelogs/@backstage/plugin-cicd-statistics-module-gitlab.md#0126))

#### 0.1.22

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-circleci` (0.3.25 → [0.3.30](../../changelogs/@backstage/plugin-circleci.md#0330))

#### 0.3.30

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.3.29

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.3.28

##### Patch Changes

- [`375b6f7`](https://github.com/backstage/backstage/commit/375b6f7): CircelCI plugin moved permanently

#### 0.3.26

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-code-climate` (0.1.25 → [0.1.30](../../changelogs/@backstage/plugin-code-climate.md#0130))

#### 0.1.30

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.1.29

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.26

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`62b5922916`](https://github.com/backstage/backstage/commit/62b5922916): Internal theme type updates
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-code-coverage` (0.2.18 → [0.2.23](../../changelogs/@backstage/plugin-code-coverage.md#0223))

#### 0.2.23

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.2.22

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.2.19

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`71c97e7d73`](https://github.com/backstage/backstage/commit/71c97e7d73): The warning for missing code coverage will now render the entity as a reference.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-code-coverage-backend` (0.2.20 → [0.2.27](../../changelogs/@backstage/plugin-code-coverage-backend.md#0227))

#### 0.2.24

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument

#### 0.2.23

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.2.21

##### Patch Changes

- [`11f671eaa9`](https://github.com/backstage/backstage/commit/11f671eaa9): Added support for new backend system
- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.

### `@backstage/plugin-codescene` (0.1.18 → [0.1.22](../../changelogs/@backstage/plugin-codescene.md#0122))

#### 0.1.22

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.1.21

##### Patch Changes

- [`d5eda61`](https://github.com/backstage/backstage/commit/d5eda61): Updated Readme document in codescene plugin
- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.19

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-config-schema` (0.1.46 → [0.1.50](../../changelogs/@backstage/plugin-config-schema.md#0150))

#### 0.1.50

##### Patch Changes

- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.1.49

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.47

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-cost-insights` (0.12.14 → [0.12.19](../../changelogs/@backstage/plugin-cost-insights.md#01219))

#### 0.12.19

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.12.18

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.12.15

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`69ee8d75f4`](https://github.com/backstage/backstage/commit/69ee8d75f4): Remove `button` prop from used MaterialUI `MenuItem` component fixing incompatibility with MaterialUI v5.
- [`d49cffaf6a`](https://github.com/backstage/backstage/commit/d49cffaf6a): Updated dependency `@types/pluralize` to `^0.0.33`.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.
- [`7da799d5b7`](https://github.com/backstage/backstage/commit/7da799d5b7): Updated dependency `@types/pluralize` to `^0.0.32`.
- [`62b5922916`](https://github.com/backstage/backstage/commit/62b5922916): Internal theme type updates

### `@backstage/plugin-devtools` (0.1.5 → [0.1.9](../../changelogs/@backstage/plugin-devtools.md#019))

#### 0.1.9

##### Patch Changes

- [`c12a86c`](https://github.com/backstage/backstage/commit/c12a86c): Refactored code to improve accessibility by moving elements outside the `ul` tag and placing them appropriately. Also adjusted theme to offer better contrast.
- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.
- [`b89d8be`](https://github.com/backstage/backstage/commit/b89d8be): Added alpha support for the New Frontend System (Declarative Integration)
- [`995d280`](https://github.com/backstage/backstage/commit/995d280): Updated imports from named to default imports to help with the Material UI v4 to v5 migration

#### 0.1.8

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.6

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/plugin-devtools-backend` (0.2.3 → [0.2.10](../../changelogs/@backstage/plugin-devtools-backend.md#0210))

#### 0.2.7

##### Patch Changes

- [`b64ce5a`](https://github.com/backstage/backstage/commit/b64ce5a): Updated New Backend System instructions to use default import
- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`6bb6f3e`](https://github.com/backstage/backstage/commit/6bb6f3e): Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.

#### 0.2.6

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-entity-feedback` (0.2.8 → [0.2.13](../../changelogs/@backstage/plugin-entity-feedback.md#0213))

#### 0.2.13

##### Patch Changes

- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.2.12

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.2.9

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-entity-feedback-backend` (0.2.3 → [0.2.10](../../changelogs/@backstage/plugin-entity-feedback-backend.md#0210))

#### 0.2.7

##### Patch Changes

- [`b64ce5a`](https://github.com/backstage/backstage/commit/b64ce5a): Updated New Backend System instructions to use default import
- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument

#### 0.2.6

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.2.4

##### Patch Changes

- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.

### `@backstage/plugin-entity-validation` (0.1.10 → [0.1.15](../../changelogs/@backstage/plugin-entity-validation.md#0115))

#### 0.1.15

##### Patch Changes

- [`916da47`](https://github.com/backstage/backstage/commit/916da47): Change default icon for unknown entities to nothing instead of the help icon.
- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`1f70e46`](https://github.com/backstage/backstage/commit/1f70e46): Improves UX of the EntityValidationPage: Moves the validate button below the EntityTextArea which is actually validated, the location TextField can now be hidden to prevent confusion about what is validated and additional content can be added to the top of the validation page.
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.
- [`09cedb9`](https://github.com/backstage/backstage/commit/09cedb9): Updated dependency `@react-hookz/web` to `^24.0.0`.

#### 0.1.14

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.13

##### Patch Changes

- [`a518c5a`](https://github.com/backstage/backstage/commit/a518c5a): Updated dependency `@react-hookz/web` to `^23.0.0`.

#### 0.1.11

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-events-backend` (0.2.15 → [0.2.22](../../changelogs/@backstage/plugin-events-backend.md#0222))

#### 0.2.19

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument

#### 0.2.18

##### Patch Changes

- [`92ea615`](https://github.com/backstage/backstage/commit/92ea615): Update `README.md`
- [`d5ddc4e`](https://github.com/backstage/backstage/commit/d5ddc4e): Add documentation on how to install the plugins with the new backend system.

#### 0.2.17

##### Patch Changes

- [`cc4228e`](https://github.com/backstage/backstage/commit/cc4228e): Switched module ID to use kebab-case.

### `@backstage/plugin-events-backend-module-aws-sqs` (0.2.9 → [0.2.16](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#0216))

#### 0.2.13

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument

#### 0.2.12

##### Patch Changes

- [`7b8e551`](https://github.com/backstage/backstage/commit/7b8e551): Fix errors when deleting SQS messages:

  - If zero messages were received, skip deletion to avoid `EmptyBatchRequest` error from the SQS client.
  - If zero failures were returned from the SQS client during deletion, skip error logging.

- [`d5ddc4e`](https://github.com/backstage/backstage/commit/d5ddc4e): Add documentation on how to install the plugins with the new backend system.

#### 0.2.11

##### Patch Changes

- [`cc4228e`](https://github.com/backstage/backstage/commit/cc4228e): Switched module ID to use kebab-case.

#### 0.2.10

##### Patch Changes

- [`3d043526f4`](https://github.com/backstage/backstage/commit/3d043526f4): Updated dependency `aws-sdk-client-mock` to `^3.0.0`.

### `@backstage/plugin-events-backend-module-azure` (0.1.16 → [0.1.23](../../changelogs/@backstage/plugin-events-backend-module-azure.md#0123))

#### 0.1.20

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument

#### 0.1.19

##### Patch Changes

- [`af76a95`](https://github.com/backstage/backstage/commit/af76a95): Add default exports for the new backend system and documentation.
- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.18

##### Patch Changes

- [`cc4228e`](https://github.com/backstage/backstage/commit/cc4228e): Switched module ID to use kebab-case.

### `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.16 → [0.1.23](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0123))

#### 0.1.20

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument

#### 0.1.19

##### Patch Changes

- [`af76a95`](https://github.com/backstage/backstage/commit/af76a95): Add default exports for the new backend system and documentation.
- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.18

##### Patch Changes

- [`cc4228e`](https://github.com/backstage/backstage/commit/cc4228e): Switched module ID to use kebab-case.

### `@backstage/plugin-events-backend-module-gerrit` (0.1.16 → [0.1.23](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0123))

#### 0.1.20

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument

#### 0.1.19

##### Patch Changes

- [`af76a95`](https://github.com/backstage/backstage/commit/af76a95): Add default exports for the new backend system and documentation.
- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.18

##### Patch Changes

- [`cc4228e`](https://github.com/backstage/backstage/commit/cc4228e): Switched module ID to use kebab-case.

### `@backstage/plugin-events-backend-module-github` (0.1.16 → [0.1.23](../../changelogs/@backstage/plugin-events-backend-module-github.md#0123))

#### 0.1.20

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument

#### 0.1.19

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.18

##### Patch Changes

- [`cc4228e`](https://github.com/backstage/backstage/commit/cc4228e): Switched module ID to use kebab-case.

### `@backstage/plugin-events-backend-module-gitlab` (0.1.16 → [0.1.23](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#0123))

#### 0.1.20

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument

#### 0.1.19

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.18

##### Patch Changes

- [`cc4228e`](https://github.com/backstage/backstage/commit/cc4228e): Switched module ID to use kebab-case.

### `@backstage/plugin-explore` (0.4.11 → [0.4.16](../../changelogs/@backstage/plugin-explore.md#0416))

#### 0.4.16

##### Patch Changes

- [`07e7d12`](https://github.com/backstage/backstage/commit/07e7d12): Fix wording in API reference
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.
- [`796d427`](https://github.com/backstage/backstage/commit/796d427): Use the EntityDisplayName component for rendering Group nodes

#### 0.4.15

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.4.14

##### Patch Changes

- [`aac659e`](https://github.com/backstage/backstage/commit/aac659e): Added option to set `Direction` for the graph in the `GroupsDiagram`
- [`5814122`](https://github.com/backstage/backstage/commit/5814122): Updated `/alpha` exports to fit new naming patterns.
- [`36c94b8`](https://github.com/backstage/backstage/commit/36c94b8): Refactor of the alpha exports due to API change in how extension IDs are constructed.

#### 0.4.12

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.
- [`62b5922916`](https://github.com/backstage/backstage/commit/62b5922916): Internal theme type updates

### `@backstage/plugin-firehydrant` (0.2.9 → [0.2.14](../../changelogs/@backstage/plugin-firehydrant.md#0214))

#### 0.2.14

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.2.13

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.2.10

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-fossa` (0.2.57 → [0.2.62](../../changelogs/@backstage/plugin-fossa.md#0262))

#### 0.2.62

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.2.61

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.2.58

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-gcalendar` (0.3.19 → [0.3.23](../../changelogs/@backstage/plugin-gcalendar.md#0323))

#### 0.3.23

##### Patch Changes

- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.
- [`3631fb4`](https://github.com/backstage/backstage/commit/3631fb4): Updated dependency `dompurify` to `^3.0.0`.
  Updated dependency `@types/dompurify` to `^3.0.0`.

#### 0.3.22

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.3.20

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.
- [`62b5922916`](https://github.com/backstage/backstage/commit/62b5922916): Internal theme type updates

### `@backstage/plugin-gcp-projects` (0.3.42 → [0.3.46](../../changelogs/@backstage/plugin-gcp-projects.md#0346))

#### 0.3.46

##### Patch Changes

- [`984d508`](https://github.com/backstage/backstage/commit/984d508): Add a `x-google-api-client` header for calls towards Google Cloud Projects
- [`09cedb9`](https://github.com/backstage/backstage/commit/09cedb9): Updated dependency `@react-hookz/web` to `^24.0.0`.

#### 0.3.45

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.3.44

##### Patch Changes

- [`a518c5a`](https://github.com/backstage/backstage/commit/a518c5a): Updated dependency `@react-hookz/web` to `^23.0.0`.
- [`d2f5662`](https://github.com/backstage/backstage/commit/d2f5662): Fix query parameter for project details page which should point to projectId rather than project name

#### 0.3.43

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/plugin-git-release-manager` (0.3.38 → [0.3.42](../../changelogs/@backstage/plugin-git-release-manager.md#0342))

#### 0.3.42

##### Patch Changes

- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.3.41

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.3.39

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-github-actions` (0.6.6 → [0.6.11](../../changelogs/@backstage/plugin-github-actions.md#0611))

#### 0.6.11

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.
- [`1cae748`](https://github.com/backstage/backstage/commit/1cae748): Updated dependency `git-url-parse` to `^14.0.0`.

#### 0.6.10

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.6.9

##### Patch Changes

- [`08d7e46`](https://github.com/backstage/backstage/commit/08d7e46): Github Workflow Runs UI is modified to show in optional Card view instead of table, with branch selection option

#### 0.6.7

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency
- [`ee0c44ce62`](https://github.com/backstage/backstage/commit/ee0c44ce62): Fixed an issue that was preventing the sorting of workflow runs by their status.

### `@backstage/plugin-github-deployments` (0.1.56 → [0.1.61](../../changelogs/@backstage/plugin-github-deployments.md#0161))

#### 0.1.61

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.1.60

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.57

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-github-issues` (0.2.14 → [0.2.19](../../changelogs/@backstage/plugin-github-issues.md#0219))

#### 0.2.19

##### Patch Changes

- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.2.18

##### Patch Changes

- [`bf92ae3`](https://github.com/backstage/backstage/commit/bf92ae3): Updated dependency `octokit` to `^3.0.0`.
- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.2.15

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-github-pull-requests-board` (0.1.19 → [0.1.24](../../changelogs/@backstage/plugin-github-pull-requests-board.md#0124))

#### 0.1.24

##### Patch Changes

- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.1.23

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.20

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-gitops-profiles` (0.3.41 → [0.3.45](../../changelogs/@backstage/plugin-gitops-profiles.md#0345))

#### 0.3.45

##### Patch Changes

- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.3.44

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.3.42

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/plugin-gocd` (0.1.31 → [0.1.36](../../changelogs/@backstage/plugin-gocd.md#0136))

#### 0.1.35

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.32

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-graphql-voyager` (0.1.8 → [0.1.12](../../changelogs/@backstage/plugin-graphql-voyager.md#0112))

#### 0.1.12

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.1.11

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.9

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-home-react` (0.1.4 → [0.1.8](../../changelogs/@backstage/plugin-home-react.md#018))

#### 0.1.8

##### Patch Changes

- [`e6f0831`](https://github.com/backstage/backstage/commit/e6f0831): Updated dependency `@rjsf/utils` to `5.17.0`.
  Updated dependency `@rjsf/core` to `5.17.0`.
  Updated dependency `@rjsf/material-ui` to `5.17.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.17.0`.
- [`6a74ffd`](https://github.com/backstage/backstage/commit/6a74ffd): Updated dependency `@rjsf/utils` to `5.16.1`.
  Updated dependency `@rjsf/core` to `5.16.1`.
  Updated dependency `@rjsf/material-ui` to `5.16.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.16.1`.

#### 0.1.7

##### Patch Changes

- [`98ac5ab`](https://github.com/backstage/backstage/commit/98ac5ab): Updated dependency `@rjsf/utils` to `5.15.1`.
  Updated dependency `@rjsf/core` to `5.15.1`.
  Updated dependency `@rjsf/material-ui` to `5.15.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.15.1`.
- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.6

##### Patch Changes

- [`2b72591`](https://github.com/backstage/backstage/commit/2b72591): Updated dependency `@rjsf/utils` to `5.14.3`.
  Updated dependency `@rjsf/core` to `5.14.3`.
  Updated dependency `@rjsf/material-ui` to `5.14.3`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.3`.
- [`6cd12f2`](https://github.com/backstage/backstage/commit/6cd12f2): Updated dependency `@rjsf/utils` to `5.14.1`.
  Updated dependency `@rjsf/core` to `5.14.1`.
  Updated dependency `@rjsf/material-ui` to `5.14.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.1`.
- [`64301d3`](https://github.com/backstage/backstage/commit/64301d3): Updated dependency `@rjsf/utils` to `5.15.0`.
  Updated dependency `@rjsf/core` to `5.15.0`.
  Updated dependency `@rjsf/material-ui` to `5.15.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.15.0`.
- [`63c494e`](https://github.com/backstage/backstage/commit/63c494e): Updated dependency `@rjsf/utils` to `5.14.2`.
  Updated dependency `@rjsf/core` to `5.14.2`.
  Updated dependency `@rjsf/material-ui` to `5.14.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.2`.

#### 0.1.5

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`c838da0edd`](https://github.com/backstage/backstage/commit/c838da0edd): Updated dependency `@rjsf/utils` to `5.13.6`.
  Updated dependency `@rjsf/core` to `5.13.6`.
  Updated dependency `@rjsf/material-ui` to `5.13.6`.
  Updated dependency `@rjsf/validator-ajv8` to `5.13.6`.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/plugin-ilert` (0.2.14 → [0.2.19](../../changelogs/@backstage/plugin-ilert.md#0219))

#### 0.2.19

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.2.18

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.2.15

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-jenkins` (0.9.0 → [0.9.5](../../changelogs/@backstage/plugin-jenkins.md#095))

#### 0.9.5

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.9.4

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.9.1

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-jenkins-backend` (0.3.0 → [0.3.7](../../changelogs/@backstage/plugin-jenkins-backend.md#037))

#### 0.3.4

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument

#### 0.3.3

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.3.1

##### Patch Changes

- [`4bfb878807`](https://github.com/backstage/backstage/commit/4bfb878807): Updated dependency `@types/jenkins` to `^1.0.0`.

### `@backstage/plugin-kafka` (0.3.25 → [0.3.30](../../changelogs/@backstage/plugin-kafka.md#0330))

#### 0.3.30

##### Patch Changes

- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.3.29

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.3.26

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-kafka-backend` (0.3.4 → [0.3.11](../../changelogs/@backstage/plugin-kafka-backend.md#0311))

#### 0.3.7

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.3.5

##### Patch Changes

- [`8613ba3928`](https://github.com/backstage/backstage/commit/8613ba3928): Switched to using `"exports"` field for `/alpha` subpath export.

### `@backstage/plugin-kubernetes-common` (0.7.0 → [0.7.4](../../changelogs/@backstage/plugin-kubernetes-common.md#074))

#### 0.7.4

##### Patch Changes

- [`a643af8`](https://github.com/backstage/backstage/commit/a643af8): The `ClusterAttributes` type now includes the cluster title.
- [`daad576`](https://github.com/backstage/backstage/commit/daad576): Clusters configured with the `aws` authentication strategy can now customize the
  `x-k8s-aws-id` header value used to generate tokens. This value can be specified
  specified via the `kubernetes.io/x-k8s-aws-id` parameter (in
  `metadata.annotations` for clusters in the catalog, or the `authMetadata` block
  on clusters in the app-config). This is particularly helpful when a Backstage
  instance contains multiple AWS clusters with the same name in different regions
  -- using this new parameter, the clusters can be given different logical names
  to distinguish them but still use the same ID for the purposes of generating
  tokens.

#### 0.7.3

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.7.2

##### Patch Changes

- [`706fc3a`](https://github.com/backstage/backstage/commit/706fc3a): Updated dependency `@kubernetes/client-node` to `0.20.0`.
- [`5d79682`](https://github.com/backstage/backstage/commit/5d79682): Remove unused dependency

#### 0.7.1

##### Patch Changes

- [`62180df4ee`](https://github.com/backstage/backstage/commit/62180df4ee): Allow storing dashboard parameters for kubernetes in catalog
- [`df40b067e1`](https://github.com/backstage/backstage/commit/df40b067e1): Fixed the lack of `resourcequotas` as part of the Default Objects to fetch from the kubernetes api

### `@backstage/plugin-kubernetes-node` (0.1.0 → [0.1.7](../../changelogs/@backstage/plugin-kubernetes-node.md#017))

#### 0.1.4

##### Patch Changes

- [`a775596`](https://github.com/backstage/backstage/commit/a775596): Enabled a way to include custom auth metadata info on the clusters endpoint. If you want to implement a Kubernetes auth strategy which requires surfacing custom auth metadata to the frontend, use the new presentAuthMetadata method on the AuthenticationStrategy interface.
- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.
- [`043cf88`](https://github.com/backstage/backstage/commit/043cf88): The `ClusterDetails` type now has a `title` field, which should be a
  human-readable name.
- [`cceed8a`](https://github.com/backstage/backstage/commit/cceed8a): Introduced `PinnipedHelper` class to enable authentication to Kubernetes clusters through Pinniped
- [`f180cba`](https://github.com/backstage/backstage/commit/f180cba): Enabling authentication to kubernetes clusters with mTLS x509 client certs

#### 0.1.2

##### Patch Changes

- [`6010564`](https://github.com/backstage/backstage/commit/6010564): The `kubernetes-node` plugin has been modified to house a new extension points for Kubernetes backend plugin;
  `KubernetesClusterSupplierExtensionPoint` is introduced .
  `kubernetesAuthStrategyExtensionPoint` is introduced .
  `kubernetesFetcherExtensionPoint` is introduced .
  `kubernetesServiceLocatorExtensionPoint` is introduced .

  The `kubernetes-backend` plugin was modified to use this new extension point.

### `@backstage/plugin-lighthouse` (0.4.10 → [0.4.15](../../changelogs/@backstage/plugin-lighthouse.md#0415))

#### 0.4.15

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.4.14

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.4.13

##### Patch Changes

- [`ffbf656`](https://github.com/backstage/backstage/commit/ffbf656): Updated README

#### 0.4.11

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-linguist` (0.1.10 → [0.1.15](../../changelogs/@backstage/plugin-linguist.md#0115))

#### 0.1.15

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.
- [`995d280`](https://github.com/backstage/backstage/commit/995d280): Updated imports from named to default imports to help with the Material UI v4 to v5 migration

#### 0.1.14

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies
- [`4f42918`](https://github.com/backstage/backstage/commit/4f42918): Added alpha support for the New Frontend System (Declarative Integration)

#### 0.1.11

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-linguist-backend` (0.5.3 → [0.5.10](../../changelogs/@backstage/plugin-linguist-backend.md#0510))

#### 0.5.7

##### Patch Changes

- [`b64ce5a`](https://github.com/backstage/backstage/commit/b64ce5a): Updated New Backend System instructions to use default import
- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`6bb6f3e`](https://github.com/backstage/backstage/commit/6bb6f3e): Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.

#### 0.5.6

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.5.4

##### Patch Changes

- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.

### `@backstage/plugin-microsoft-calendar` (0.1.8 → [0.1.12](../../changelogs/@backstage/plugin-microsoft-calendar.md#0112))

#### 0.1.12

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.
- [`3631fb4`](https://github.com/backstage/backstage/commit/3631fb4): Updated dependency `dompurify` to `^3.0.0`.
  Updated dependency `@types/dompurify` to `^3.0.0`.

#### 0.1.11

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.9

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`62b5922916`](https://github.com/backstage/backstage/commit/62b5922916): Internal theme type updates

### `@backstage/plugin-newrelic` (0.3.41 → [0.3.45](../../changelogs/@backstage/plugin-newrelic.md#0345))

#### 0.3.45

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.3.44

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.3.42

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/plugin-newrelic-dashboard` (0.3.0 → [0.3.5](../../changelogs/@backstage/plugin-newrelic-dashboard.md#035))

#### 0.3.5

##### Patch Changes

- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.3.4

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.3.1

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-nomad` (0.1.6 → [0.1.11](../../changelogs/@backstage/plugin-nomad.md#0111))

#### 0.1.11

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.1.10

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.7

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-nomad-backend` (0.1.8 → [0.1.15](../../changelogs/@backstage/plugin-nomad-backend.md#0115))

#### 0.1.12

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument

#### 0.1.11

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-octopus-deploy` (0.2.7 → [0.2.12](../../changelogs/@backstage/plugin-octopus-deploy.md#0212))

#### 0.2.12

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.2.11

##### Patch Changes

- [`7d96ba8`](https://github.com/backstage/backstage/commit/7d96ba8): added install path and fixed import on plugin-octopus-deploy
- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.2.8

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4d2f72c572`](https://github.com/backstage/backstage/commit/4d2f72c572): Added Deep link into Octopus Deploy project from the Release Table.

### `@backstage/plugin-opencost` (0.2.1 → [0.2.5](../../changelogs/@backstage/plugin-opencost.md#025))

#### 0.2.5

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.
- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.
- [`03c5bbe`](https://github.com/backstage/backstage/commit/03c5bbe): Updated dependency `date-fns` to `^3.0.0`.

#### 0.2.4

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.2.2

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/plugin-org` (0.6.15 → [0.6.20](../../changelogs/@backstage/plugin-org.md#0620))

#### 0.6.20

##### Patch Changes

- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.
- [`6e1bf50`](https://github.com/backstage/backstage/commit/6e1bf50): Added basic support for the new frontend system, exported from the `/alpha` subpath.

#### 0.6.19

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.6.18

##### Patch Changes

- [`59c24b9`](https://github.com/backstage/backstage/commit/59c24b9): Fix issue where members inside of `<EntityMembersListCard>` would be rendered as squished when the card itself was shrunk down.
- [`3a65d9c`](https://github.com/backstage/backstage/commit/3a65d9c): Support member list scrollable when parent has specified height
- [`4785d05`](https://github.com/backstage/backstage/commit/4785d05): Add permission check to catalog create and refresh button

#### 0.6.16

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`62b5922916`](https://github.com/backstage/backstage/commit/62b5922916): Internal theme type updates

### `@backstage/plugin-org-react` (0.1.14 → [0.1.19](../../changelogs/@backstage/plugin-org-react.md#0119))

#### 0.1.19

##### Patch Changes

- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.1.18

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.15

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`62b5922916`](https://github.com/backstage/backstage/commit/62b5922916): Internal theme type updates

### `@backstage/plugin-periskop` (0.1.23 → [0.1.28](../../changelogs/@backstage/plugin-periskop.md#0128))

#### 0.1.28

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.1.27

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.24

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-periskop-backend` (0.2.4 → [0.2.11](../../changelogs/@backstage/plugin-periskop-backend.md#0211))

#### 0.2.7

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.2.5

##### Patch Changes

- [`8613ba3928`](https://github.com/backstage/backstage/commit/8613ba3928): Switched to using `"exports"` field for `/alpha` subpath export.

### `@backstage/plugin-permission-backend` (0.5.29 → [0.5.36](../../changelogs/@backstage/plugin-permission-backend.md#0536))

#### 0.5.32

##### Patch Changes

- [`b1acd9b`](https://github.com/backstage/backstage/commit/b1acd9b): Updated README

#### 0.5.31

##### Patch Changes

- [`0cbb03b`](https://github.com/backstage/backstage/commit/0cbb03b): Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617

### `@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.3 → [0.1.10](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#0110))

#### 0.1.7

##### Patch Changes

- [`8472188`](https://github.com/backstage/backstage/commit/8472188): Added or fixed the `repository` field in `package.json`.

#### 0.1.6

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.5

##### Patch Changes

- [`cc4228e`](https://github.com/backstage/backstage/commit/cc4228e): Switched module ID to use kebab-case.

### `@backstage/plugin-permission-common` (0.7.9 → [0.7.12](../../changelogs/@backstage/plugin-permission-common.md#0712))

#### 0.7.12

##### Patch Changes

- [`b1acd9b`](https://github.com/backstage/backstage/commit/b1acd9b): Updated README

#### 0.7.11

##### Patch Changes

- [`0cbb03b`](https://github.com/backstage/backstage/commit/0cbb03b): Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617

#### 0.7.10

##### Patch Changes

- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/plugin-permission-node` (0.7.17 → [0.7.24](../../changelogs/@backstage/plugin-permission-node.md#0724))

#### 0.7.20

##### Patch Changes

- [`b1acd9b`](https://github.com/backstage/backstage/commit/b1acd9b): Updated README

#### 0.7.19

##### Patch Changes

- [`0cbb03b`](https://github.com/backstage/backstage/commit/0cbb03b): Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617

### `@backstage/plugin-permission-react` (0.4.16 → [0.4.20](../../changelogs/@backstage/plugin-permission-react.md#0420))

#### 0.4.20

##### Patch Changes

- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.4.19

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies
- [`b1acd9b`](https://github.com/backstage/backstage/commit/b1acd9b): Updated README

#### 0.4.17

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/plugin-playlist-backend` (0.3.10 → [0.3.17](../../changelogs/@backstage/plugin-playlist-backend.md#0317))

#### 0.3.14

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument

#### 0.3.13

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.3.12

##### Patch Changes

- [`0cbb03b`](https://github.com/backstage/backstage/commit/0cbb03b): Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617

#### 0.3.11

##### Patch Changes

- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.

### `@backstage/plugin-proxy-backend` (0.4.4 → [0.4.11](../../changelogs/@backstage/plugin-proxy-backend.md#0411))

#### 0.4.5

##### Patch Changes

- [`8613ba3928`](https://github.com/backstage/backstage/commit/8613ba3928): Switched to using `"exports"` field for `/alpha` subpath export.

### `@backstage/plugin-puppetdb` (0.1.8 → [0.1.13](../../changelogs/@backstage/plugin-puppetdb.md#0113))

#### 0.1.13

##### Patch Changes

- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.1.12

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.9

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-rollbar` (0.4.25 → [0.4.30](../../changelogs/@backstage/plugin-rollbar.md#0430))

#### 0.4.30

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.4.29

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.4.26

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-rollbar-backend` (0.1.51 → [0.1.58](../../changelogs/@backstage/plugin-rollbar-backend.md#0158))

#### 0.1.55

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`6bb6f3e`](https://github.com/backstage/backstage/commit/6bb6f3e): Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.7 → [0.2.14](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#0214))

#### 0.2.11

##### Patch Changes

- [`e9a5228`](https://github.com/backstage/backstage/commit/e9a5228): Exporting a default module for the new Backend System
- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`6bb6f3e`](https://github.com/backstage/backstage/commit/6bb6f3e): Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- [`1cae748`](https://github.com/backstage/backstage/commit/1cae748): Updated dependency `git-url-parse` to `^14.0.0`.

#### 0.2.10

##### Patch Changes

- [`7acbb5a`](https://github.com/backstage/backstage/commit/7acbb5a): Removed `mock-fs` dev dependency.
- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.30 → [0.2.37](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0237))

#### 0.2.34

##### Patch Changes

- [`e9a5228`](https://github.com/backstage/backstage/commit/e9a5228): Exporting a default module for the new Backend System
- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`6bb6f3e`](https://github.com/backstage/backstage/commit/6bb6f3e): Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.

#### 0.2.33

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.2.9 → [0.2.16](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#0216))

#### 0.2.13

##### Patch Changes

- [`e9a5228`](https://github.com/backstage/backstage/commit/e9a5228): Exporting a default module for the new Backend System
- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`1cd2740`](https://github.com/backstage/backstage/commit/1cd2740): Use the Gitbeaker library for `gitlab:projectAccessToken:create` action, enabling the `expiresAt` option

#### 0.2.12

##### Patch Changes

- [`604c9dd`](https://github.com/backstage/backstage/commit/604c9dd): Add Scaffolder custom action that creates GitLab issues called `gitlab:issues:create`
- [`7c522c5`](https://github.com/backstage/backstage/commit/7c522c5): Add `gitlab:repo:push` scaffolder action to push files to arbitrary branch without creating a Merge Request

#### 0.2.11

##### Patch Changes

- [`219d7f0`](https://github.com/backstage/backstage/commit/219d7f0): Extract some more actions to this library
- [`0cbb03b`](https://github.com/backstage/backstage/commit/0cbb03b): Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617

#### 0.2.10

##### Patch Changes

- [`26ca97ebaa`](https://github.com/backstage/backstage/commit/26ca97ebaa): Add examples for `gitlab:projectAccessToken:create` scaffolder action & improve related tests

### `@backstage/plugin-scaffolder-backend-module-rails` (0.4.23 → [0.4.30](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0430))

#### 0.4.27

##### Patch Changes

- [`e9a5228`](https://github.com/backstage/backstage/commit/e9a5228): Make `containerRunner` argument optional
- [`e9a5228`](https://github.com/backstage/backstage/commit/e9a5228): Exporting a default module for the new Backend System
- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`6bb6f3e`](https://github.com/backstage/backstage/commit/6bb6f3e): Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.

### `@backstage/plugin-scaffolder-backend-module-sentry` (0.1.14 → [0.1.21](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#0121))

#### 0.1.18

##### Patch Changes

- [`e9a5228`](https://github.com/backstage/backstage/commit/e9a5228): Exporting a default module for the new Backend System
- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument

#### 0.1.16

##### Patch Changes

- [`7f8a801`](https://github.com/backstage/backstage/commit/7f8a801): Added examples for `sentry:project:create` scaffolder action and unit tests.

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.27 → [0.2.34](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0234))

#### 0.2.31

##### Patch Changes

- [`e9a5228`](https://github.com/backstage/backstage/commit/e9a5228): Exporting a default module for the new Backend System
- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument

#### 0.2.30

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-search-backend-module-catalog` (0.1.10 → [0.1.17](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#0117))

#### 0.1.14

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument

#### 0.1.13

##### Patch Changes

- [`2e6c56b`](https://github.com/backstage/backstage/commit/2e6c56b): Update wording to show that the backend system no longer is in alpha

#### 0.1.12

##### Patch Changes

- [`cc4228e`](https://github.com/backstage/backstage/commit/cc4228e): Switched module ID to use kebab-case.

### `@backstage/plugin-search-backend-module-explore` (0.1.10 → [0.1.17](../../changelogs/@backstage/plugin-search-backend-module-explore.md#0117))

#### 0.1.14

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument

#### 0.1.13

##### Patch Changes

- [`2e6c56b`](https://github.com/backstage/backstage/commit/2e6c56b): Update wording to show that the backend system no longer is in alpha

#### 0.1.12

##### Patch Changes

- [`cc4228e`](https://github.com/backstage/backstage/commit/cc4228e): Switched module ID to use kebab-case.

### `@backstage/plugin-search-backend-module-pg` (0.5.15 → [0.5.22](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0522))

#### 0.5.17

##### Patch Changes

- [`cc4228e`](https://github.com/backstage/backstage/commit/cc4228e): Switched module ID to use kebab-case.

#### 0.5.16

##### Patch Changes

- [`2b4cd1ccae`](https://github.com/backstage/backstage/commit/2b4cd1ccae): Optimize outdated documents deletion logic in PgSearchEngine DatabaseDocumentStore which significantly reduces cost on large tables
- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.

### `@backstage/plugin-search-backend-module-techdocs` (0.1.10 → [0.1.17](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#0117))

#### 0.1.14

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument

#### 0.1.13

##### Patch Changes

- [`2e6c56b`](https://github.com/backstage/backstage/commit/2e6c56b): Update wording to show that the backend system no longer is in alpha

#### 0.1.12

##### Patch Changes

- [`cc4228e`](https://github.com/backstage/backstage/commit/cc4228e): Switched module ID to use kebab-case.

#### 0.1.11

##### Patch Changes

- [`c437253b7a`](https://github.com/backstage/backstage/commit/c437253b7a): The process of adding or modifying fields in the techdocs search index has been simplified. For more details, see [How to customize fields in the Software Catalog or TechDocs index](https://backstage.io/docs/features/search/how-to-guides.md#how-to-customize-fields-in-the-software-catalog-or-techdocs-index).

### `@backstage/plugin-sentry` (0.5.10 → [0.5.15](../../changelogs/@backstage/plugin-sentry.md#0515))

#### 0.5.15

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.5.14

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.5.11

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-shortcuts` (0.3.15 → [0.3.19](../../changelogs/@backstage/plugin-shortcuts.md#0319))

#### 0.3.19

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.3.18

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.3.16

##### Patch Changes

- [`55725922a5`](https://github.com/backstage/backstage/commit/55725922a5): Ensure that shortcuts aren't duplicate-checked against themselves
- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-sonarqube` (0.7.7 → [0.7.12](../../changelogs/@backstage/plugin-sonarqube.md#0712))

#### 0.7.12

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.7.11

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.7.8

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.
- [`62b5922916`](https://github.com/backstage/backstage/commit/62b5922916): Internal theme type updates
- [`8613ba3928`](https://github.com/backstage/backstage/commit/8613ba3928): Switched to using `"exports"` field for `/alpha` subpath export.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-sonarqube-backend` (0.2.8 → [0.2.15](../../changelogs/@backstage/plugin-sonarqube-backend.md#0215))

#### 0.2.12

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument

#### 0.2.11

##### Patch Changes

- [`53445cd`](https://github.com/backstage/backstage/commit/53445cd): Updated README

### `@backstage/plugin-sonarqube-react` (0.1.9 → [0.1.13](../../changelogs/@backstage/plugin-sonarqube-react.md#0113))

#### 0.1.10

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-splunk-on-call` (0.4.14 → [0.4.19](../../changelogs/@backstage/plugin-splunk-on-call.md#0419))

#### 0.4.19

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.4.18

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.4.15

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-stack-overflow` (0.1.21 → [0.1.25](../../changelogs/@backstage/plugin-stack-overflow.md#0125))

#### 0.1.25

##### Patch Changes

- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.
- [`c1bc331`](https://github.com/backstage/backstage/commit/c1bc331): Fixes a bug that made the API return questions not related to the tags provided

#### 0.1.24

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.23

##### Patch Changes

- [`5814122`](https://github.com/backstage/backstage/commit/5814122): Updated `/alpha` exports to fit new naming patterns.
- [`36c94b8`](https://github.com/backstage/backstage/commit/36c94b8): Refactor of the alpha exports due to API change in how extension IDs are constructed.

#### 0.1.22

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`b168d7e7ea`](https://github.com/backstage/backstage/commit/b168d7e7ea): Migrate package to the new Frontend system, the new module is distributed with a `/alpha` subpath.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/plugin-stack-overflow-backend` (0.2.10 → [0.2.17](../../changelogs/@backstage/plugin-stack-overflow-backend.md#0217))

#### 0.2.13

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.2.11

##### Patch Changes

- [`b168d7e7ea`](https://github.com/backstage/backstage/commit/b168d7e7ea): Deprecate package in favor of the new `@backstage/plugin-search-backend-module-stack-overflow-collator` module.

  The search collator `requestParams` option is optional now, so its default value is `{ order: 'desc', sort: 'activity', site: 'stackoverflow' }` as defined in the `Try It` section on the [official Stack Overflow API documentation](https://api.stackexchange.com/docs/questions).

### `@backstage/plugin-stackstorm` (0.1.7 → [0.1.11](../../changelogs/@backstage/plugin-stackstorm.md#0111))

#### 0.1.11

##### Patch Changes

- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.1.10

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.8

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-tech-insights` (0.3.17 → [0.3.22](../../changelogs/@backstage/plugin-tech-insights.md#0322))

#### 0.3.22

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.3.21

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.3.18

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`62b5922916`](https://github.com/backstage/backstage/commit/62b5922916): Internal theme type updates

### `@backstage/plugin-tech-insights-backend` (0.5.20 → [0.5.27](../../changelogs/@backstage/plugin-tech-insights-backend.md#0527))

#### 0.5.24

##### Patch Changes

- [`7201af3`](https://github.com/backstage/backstage/commit/7201af3): Add support for the new backend system.

  A new backend plugin for the tech-insights backend
  was added and exported as `default`.

  You can use it with the new backend system like

  ```ts title="packages/backend/src/index.ts"
  backend.add(import('@backstage/plugin-tech-insights-backend'));
  ```

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`341c2a2`](https://github.com/backstage/backstage/commit/341c2a2): Move `FactRetrieverRegistry` and `PersistenceContext` to `@backstage/plugin-tech-insights-node`.

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

#### 0.5.21

##### Patch Changes

- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.
- [`193ad022bb`](https://github.com/backstage/backstage/commit/193ad022bb): Add `factRetrieverId` to the fact retriever's logger metadata.

### `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.38 → [0.1.45](../../changelogs/@backstage/plugin-tech-insights-backend-module-jsonfc.md#0145))

#### 0.1.42

##### Patch Changes

- [`25cfb76`](https://github.com/backstage/backstage/commit/25cfb76): Add support for the new backend system.

  A new backend module for the tech-insights backend
  was added and exported as `default`.

  The module will register the `JsonRulesEngineFactCheckerFactory`
  as `FactCheckerFactory`, loading checks from the config.

  You can use it with the new backend system like

  ```ts title="packages/backend/src/index.ts"
  backend.add(import('@backstage/plugin-tech-insights-backend-module-jsonfc'));
  ```

- [`bc72782`](https://github.com/backstage/backstage/commit/bc72782): Support loading `TechInsightsJsonRuleCheck` instances from config.

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

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument

#### 0.1.41

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-tech-insights-node` (0.4.12 → [0.4.19](../../changelogs/@backstage/plugin-tech-insights-node.md#0419))

#### 0.4.16

##### Patch Changes

- [`7201af3`](https://github.com/backstage/backstage/commit/7201af3): Add support for the new backend system.

  A new backend plugin for the tech-insights backend
  was added and exported as `default`.

  You can use it with the new backend system like

  ```ts title="packages/backend/src/index.ts"
  backend.add(import('@backstage/plugin-tech-insights-backend'));
  ```

- [`341c2a2`](https://github.com/backstage/backstage/commit/341c2a2): Move `FactRetrieverRegistry` and `PersistenceContext` to `@backstage/plugin-tech-insights-node`.

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

#### 0.4.15

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-tech-radar` (0.6.9 → [0.6.13](../../changelogs/@backstage/plugin-tech-radar.md#0613))

#### 0.6.13

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`912ca7b`](https://github.com/backstage/backstage/commit/912ca7b): Use `convertLegacyRouteRefs` to define routes in `/alpha` export plugin.
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.6.12

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.6.11

##### Patch Changes

- [`03d0b6d`](https://github.com/backstage/backstage/commit/03d0b6d): The `convertLegacyRouteRef` utility used by the alpha exports is now imported from `@backstage/core-compat-api`.
- [`a1227cc`](https://github.com/backstage/backstage/commit/a1227cc): Wrap `/alpha` export extension elements in backwards compatibility wrapper.
- [`5814122`](https://github.com/backstage/backstage/commit/5814122): Updated `/alpha` exports to fit new naming patterns.
- [`36c94b8`](https://github.com/backstage/backstage/commit/36c94b8): Refactor of the alpha exports due to API change in how extension IDs are constructed.

#### 0.6.10

##### Patch Changes

- [`68fc9dc60e`](https://github.com/backstage/backstage/commit/68fc9dc60e): Updated alpha exports according to routing changes in `@backstage/frontend-plugin-api`.
- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/plugin-todo` (0.2.29 → [0.2.34](../../changelogs/@backstage/plugin-todo.md#0234))

#### 0.2.33

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.2.30

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`8613ba3928`](https://github.com/backstage/backstage/commit/8613ba3928): Switched to using `"exports"` field for `/alpha` subpath export.

### `@backstage/plugin-todo-backend` (0.3.4 → [0.3.11](../../changelogs/@backstage/plugin-todo-backend.md#0311))

#### 0.3.8

##### Patch Changes

- [`126c2f9`](https://github.com/backstage/backstage/commit/126c2f9): Updates the OpenAPI spec to use plugin as `info.title` instead of package name.
- [`04907c3`](https://github.com/backstage/backstage/commit/04907c3): Updates the OpenAPI specification title to plugin ID instead of package name.

#### 0.3.7

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-user-settings-backend` (0.2.5 → [0.2.12](../../changelogs/@backstage/plugin-user-settings-backend.md#0212))

#### 0.2.8

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.2.7

##### Patch Changes

- [`2633d64`](https://github.com/backstage/backstage/commit/2633d64): Change user settings backend plugin id and fix when using user setting backend home page first will cause edit page loop render

#### 0.2.6

##### Patch Changes

- [`dd0350379b`](https://github.com/backstage/backstage/commit/dd0350379b): Added dependency on `@backstage/config`
- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.
- [`8613ba3928`](https://github.com/backstage/backstage/commit/8613ba3928): Switched to using `"exports"` field for `/alpha` subpath export.

### `@backstage/plugin-vault` (0.1.20 → [0.1.25](../../changelogs/@backstage/plugin-vault.md#0125))

#### 0.1.25

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.1.24

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.1.21

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`fdb5e23602`](https://github.com/backstage/backstage/commit/fdb5e23602): Import `MissingAnnotationEmptyState` from `@backstage/plugin-catalog-react` to remove the cyclical dependency

### `@backstage/plugin-xcmetrics` (0.2.44 → [0.2.48](../../changelogs/@backstage/plugin-xcmetrics.md#0248))

#### 0.2.48

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 0.2.47

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 0.2.45

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`62b5922916`](https://github.com/backstage/backstage/commit/62b5922916): Internal theme type updates

## Other minor version bumps

### `@backstage/app-defaults` (1.4.4 → [1.5.0](../../changelogs/@backstage/app-defaults.md#150))

#### 1.5.0

##### Minor Changes

- [`f919be9`](https://github.com/backstage/backstage/commit/f919be9): Added a utility API for VMware Cloud auth; the API ref is available in the
  `@backstage/core-plugin-api` and `@backstage/frontend-plugin-api` packages, the
  implementation is in `@backstage/core-app-api` and a factory has been added to
  `@backstage/app-defaults`.
- [`7f11009`](https://github.com/backstage/backstage/commit/7f11009): Added stack trace display to `ErrorPage` and updated existing refs

##### Patch Changes

- [`f899eec`](https://github.com/backstage/backstage/commit/f899eec): Change default icon for `kind:resource` to the storage icon.
- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`7da67ce`](https://github.com/backstage/backstage/commit/7da67ce): Change `defaultScopes` for Bitbucket auth from invalid `team` to `account`.
- [`214f2da`](https://github.com/backstage/backstage/commit/214f2da): Fix invalid HTTP status code 501 in Error Page

#### 1.4.5

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/catalog-client` (1.4.5 → [1.6.0](../../changelogs/@backstage/catalog-client.md#160))

#### 1.6.0

##### Minor Changes

- [`43dad25`](https://github.com/backstage/backstage/commit/43dad25): Add API to get location by entity
- [`04907c3`](https://github.com/backstage/backstage/commit/04907c3): Updates the OpenAPI specification title to plugin ID instead of package name.

##### Patch Changes

- [`c04c42b`](https://github.com/backstage/backstage/commit/c04c42b): Internal updates to auto-generated files.

#### 1.5.2

##### Patch Changes

- [`883782e`](https://github.com/backstage/backstage/commit/883782e): Fix a bug in `getLocationByRef` that led to invalid backend calls

#### 1.5.0

##### Minor Changes

- [`3834067`](https://github.com/backstage/backstage/commit/3834067): The internals of `CatalogClient` are now auto-generated using the `backstage-repo-tools schema openapi generate-client` command.

##### Patch Changes

- [`82fa88b`](https://github.com/backstage/backstage/commit/82fa88b): Fixes a bug where some query parameters were double URL encoded.

#### 1.4.6

##### Patch Changes

- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/config-loader` (1.5.2 → [1.6.2](../../changelogs/@backstage/config-loader.md#162))

#### 1.6.2

##### Patch Changes

- [`0a9a03c`](https://github.com/backstage/backstage/commit/0a9a03c): Make schema processing gracefully handle an empty config.
- [`6bb6f3e`](https://github.com/backstage/backstage/commit/6bb6f3e): Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- [`bf3da16`](https://github.com/backstage/backstage/commit/bf3da16): Updated dependency `typescript-json-schema` to `^0.63.0`.

#### 1.6.1

##### Patch Changes

- [`7acbb5a`](https://github.com/backstage/backstage/commit/7acbb5a): Removed `mock-fs` dev dependency.

#### 1.6.0

##### Minor Changes

- [`24f5a85`](https://github.com/backstage/backstage/commit/24f5a85): Add "path" to `TransformFunc` context

#### 1.5.3

##### Patch Changes

- [`22ca64f117`](https://github.com/backstage/backstage/commit/22ca64f117): Correctly resolve config targets into absolute paths
- [`087bab5b42`](https://github.com/backstage/backstage/commit/087bab5b42): Updated dependency `typescript-json-schema` to `^0.62.0`.

### `@backstage/core-app-api` (1.11.0 → [1.12.0](../../changelogs/@backstage/core-app-api.md#1120))

#### 1.12.0

##### Minor Changes

- [`f919be9`](https://github.com/backstage/backstage/commit/f919be9): Added a utility API for VMware Cloud auth; the API ref is available in the
  `@backstage/core-plugin-api` and `@backstage/frontend-plugin-api` packages, the
  implementation is in `@backstage/core-app-api` and a factory has been added to
  `@backstage/app-defaults`.

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.
- [`7da67ce`](https://github.com/backstage/backstage/commit/7da67ce): Change `defaultScopes` for Bitbucket auth from invalid `team` to `account`.

#### 1.11.2

##### Patch Changes

- [`3e358b0`](https://github.com/backstage/backstage/commit/3e358b0): Added deprecation warning for React Router v6 beta, please make sure you have migrated your apps to use React Router v6 stable as support for the beta version will be removed. See the [migration tutorial](https://backstage.io/docs/tutorials/react-router-stable-migration) for more information.
- [`0cbb03b`](https://github.com/backstage/backstage/commit/0cbb03b): Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617

#### 1.11.1

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`89d13e5618`](https://github.com/backstage/backstage/commit/89d13e5618): Add current and default scopes when refreshing session
- [`9ab0572217`](https://github.com/backstage/backstage/commit/9ab0572217): Add component data `core.type` marker for `AppRouter` and `FlatRoutes`.

### `@backstage/core-plugin-api` (1.7.0 → [1.9.0](../../changelogs/@backstage/core-plugin-api.md#190))

#### 1.9.0

##### Minor Changes

- [`f919be9`](https://github.com/backstage/backstage/commit/f919be9): Added a utility API for VMware Cloud auth; the API ref is available in the
  `@backstage/core-plugin-api` and `@backstage/frontend-plugin-api` packages, the
  implementation is in `@backstage/core-app-api` and a factory has been added to
  `@backstage/app-defaults`.

##### Patch Changes

- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.
- [`e586f79`](https://github.com/backstage/backstage/commit/e586f79): Throw a more specific exception `NotImplementedError` when an API implementation cannot be found.

#### 1.8.2

##### Patch Changes

- [`6878b1d`](https://github.com/backstage/backstage/commit/6878b1d): Removed unnecessary `i18next` dependency.

#### 1.8.1

##### Patch Changes

- [`03d0b6d`](https://github.com/backstage/backstage/commit/03d0b6d): Removed the alpha `convertLegacyRouteRef` utility, which as been moved to `@backstage/core-compat-api`
- [`0c93dc3`](https://github.com/backstage/backstage/commit/0c93dc3): The `createTranslationRef` function from the `/alpha` subpath can now also accept a nested object structure of default translation messages, which will be flatted using `.` separators.

#### 1.8.0

##### Minor Changes

- [`1e5b7d993a`](https://github.com/backstage/backstage/commit/1e5b7d993a): `IconComponent` can now have a `fontSize` of `inherit`, which is useful for in-line icons.
- [`cb6db75bc2`](https://github.com/backstage/backstage/commit/cb6db75bc2): Introduced `AnyRouteRefParams` as a replacement for `AnyParams`, which is now deprecated.

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`cb6db75bc2`](https://github.com/backstage/backstage/commit/cb6db75bc2): Deprecated several types related to the routing system that are scheduled to be removed, as well as several fields on the route ref types themselves.
- [`68fc9dc60e`](https://github.com/backstage/backstage/commit/68fc9dc60e): Added a new `/alpha` export `convertLegacyRouteRef`, which is a temporary utility to allow existing route refs to be used with the new experimental packages.

### `@backstage/integration` (1.7.1 → [1.9.0](../../changelogs/@backstage/integration.md#190))

#### 1.9.0

##### Minor Changes

- [`e27b7f3`](https://github.com/backstage/backstage/commit/e27b7f3): Fix rate limit detection by looking for HTTP status code 429 and updating the header `x-ratelimit-remaining` to look for in case of a 403 code is returned

##### Patch Changes

- [`6d898f7`](https://github.com/backstage/backstage/commit/6d898f7): All single-line secrets read from config will now have both leading and trailing whitespace trimmed. This is done to ensure that the secrets are always valid HTTP header values, since many fetch implementations will include the header value itself when an error is thrown due to invalid header values.
- [`1cae748`](https://github.com/backstage/backstage/commit/1cae748): Updated dependency `git-url-parse` to `^14.0.0`.
- [`2d0e7cd`](https://github.com/backstage/backstage/commit/2d0e7cd): Validate if the `baseUrl` is a valid URL

#### 1.8.0

##### Minor Changes

- [`870db76`](https://github.com/backstage/backstage/commit/870db76): Implemented `readTree` for Gitea provider to support TechDocs functionality

##### Patch Changes

- [`99fb541`](https://github.com/backstage/backstage/commit/99fb541): Updated dependency `@azure/identity` to `^4.0.0`.

#### 1.7.2

##### Patch Changes

- [`243c655a68`](https://github.com/backstage/backstage/commit/243c655a68): JSDoc and Error message updates to handle `Azure Active Directory` re-brand to `Entra ID`
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@backstage/plugin-catalog` (1.14.0 → [1.17.0](../../changelogs/@backstage/plugin-catalog.md#1170))

#### 1.17.0

##### Minor Changes

- [`d208a93`](https://github.com/backstage/backstage/commit/d208a93): Updated the paginated catalog table to support server side text filtering.
- [`1f8c2fa`](https://github.com/backstage/backstage/commit/1f8c2fa): Add entity warning components to the default entity overview page.
- [`e541c0e`](https://github.com/backstage/backstage/commit/e541c0e): Exported `CatalogTable.defaultColumnsFunc` for defining the columns in `<CatalogTable />` of some Kinds while using the default columns for the others.

##### Patch Changes

- [`916da47`](https://github.com/backstage/backstage/commit/916da47): Change default icon for unknown entities to nothing instead of the help icon.
- [`f899eec`](https://github.com/backstage/backstage/commit/f899eec): Change default icon for `kind:resource` to the storage icon.
- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`912ca7b`](https://github.com/backstage/backstage/commit/912ca7b): Use `convertLegacyRouteRefs` to define routes in `/alpha` export plugin.
- [`797a329`](https://github.com/backstage/backstage/commit/797a329): Fixed inconsistencies in icons used for System and Template
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.
- [`987f565`](https://github.com/backstage/backstage/commit/987f565): Add line clamping to `CatalogSearchResultListItem`
- [`172a717`](https://github.com/backstage/backstage/commit/172a717): Fix entity content extension filtering.

#### 1.16.1

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 1.16.0

##### Minor Changes

- [`e223f22`](https://github.com/backstage/backstage/commit/e223f22): Properly support both function- and string-form visibility filter expressions in the new extensions exported via `/alpha`.
- [`b8e1eb2`](https://github.com/backstage/backstage/commit/b8e1eb2): The `columns` prop can be an array or a function that returns an array in order to override the default columns of the `CatalogIndexPage`.

##### Patch Changes

- [`bc7e6d3`](https://github.com/backstage/backstage/commit/bc7e6d3): Fix copy entity url function in http contexts.
- [`5360097`](https://github.com/backstage/backstage/commit/5360097): Ensure that passed-in icons are taken advantage of in the presentation API
- [`4785d05`](https://github.com/backstage/backstage/commit/4785d05): Add permission check to catalog create and refresh button
- [`cd910c4`](https://github.com/backstage/backstage/commit/cd910c4): - Fixes bug where after unregistering an entity you are redirected to `/`.
  - Adds an optional external route `unregisterRedirect` to override this behaviour to another route.
- [`03d0b6d`](https://github.com/backstage/backstage/commit/03d0b6d): The `convertLegacyRouteRef` utility used by the alpha exports is now imported from `@backstage/core-compat-api`.
- [`2d708d8`](https://github.com/backstage/backstage/commit/2d708d8): Internal naming updates for `/alpha` exports.
- [`a5a0473`](https://github.com/backstage/backstage/commit/a5a0473): Internal refactor of alpha exports due to a change in how extension factories are defined.
- [`4d9e3b3`](https://github.com/backstage/backstage/commit/4d9e3b3): Register component overrides in the global `OverrideComponentNameToClassKeys` provided by `@backstage/theme`. This will in turn will provide component style override types for `createUnifiedTheme`.
- [`a1227cc`](https://github.com/backstage/backstage/commit/a1227cc): Wrap `/alpha` export extension elements in backwards compatibility wrapper.
- [`78a10bb`](https://github.com/backstage/backstage/commit/78a10bb): Adding in spec.type chip to search results for clarity
- [`8f5d6c1`](https://github.com/backstage/backstage/commit/8f5d6c1): Updates to the `/alpha` exports to match the extension input wrapping change.
- [`36c94b8`](https://github.com/backstage/backstage/commit/36c94b8): Refactor of the alpha exports due to API change in how extension IDs are constructed.
- [`8587f06`](https://github.com/backstage/backstage/commit/8587f06): Added pagination support to `CatalogIndexPage`

  `CatalogIndexPage` now offers an optional pagination feature, designed to accommodate adopters managing extensive catalogs. This new capability allows for better handling of large amounts of data.

  To activate the pagination mode, simply update your `App.tsx` as follows:

  ```diff
    const routes = (
      <FlatRoutes>
        ...
  -     <Route path="/catalog" element={<CatalogIndexPage />} />
  +     <Route path="/catalog" element={<CatalogIndexPage pagination />} />
        ...
  ```

  In case you have a custom catalog page and you want to enable pagination, you need to pass the `pagination` prop to `EntityListProvider` instead.

- [`fb8f3bd`](https://github.com/backstage/backstage/commit/fb8f3bd): Updated alpha translation message keys to use nested format and camel case.
- [`531e1a2`](https://github.com/backstage/backstage/commit/531e1a2): Updated alpha plugin to include the `unregisterRedirect` external route.

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

### `@backstage/plugin-catalog-backend` (1.14.0 → [1.17.3](../../changelogs/@backstage/plugin-catalog-backend.md#1173))

#### 1.17.0

##### Minor Changes

- [`43dad25`](https://github.com/backstage/backstage/commit/43dad25): Add API to get location by entity
- [`126c2f9`](https://github.com/backstage/backstage/commit/126c2f9): Updates the OpenAPI spec to use plugin as `info.title` instead of package name.
- [`04907c3`](https://github.com/backstage/backstage/commit/04907c3): Updates the OpenAPI specification title to plugin ID instead of package name.
- [`d8a54d0`](https://github.com/backstage/backstage/commit/d8a54d0): Adds support for supplying field validators to the new backend's catalog plugin. If you're using entity policies, you should use the new `transformLegacyPolicyToProcessor` function to install them as processors instead.

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

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`89b674c`](https://github.com/backstage/backstage/commit/89b674c): Minor performance improvement for `queryEntities` when the limit is 0.
- [`81e19b1`](https://github.com/backstage/backstage/commit/81e19b1): Replace uses of deprecated types with replacements internally.
- [`efa8160`](https://github.com/backstage/backstage/commit/efa8160): Rollback the change for wildcard discovery, this fixes a bug with the `AzureUrlReader` not working with wildcard paths
- [`d208a93`](https://github.com/backstage/backstage/commit/d208a93): Fixed a bug where `fullTextFilter` wasn't preserved correctly in the cursor.
- [`6bb6f3e`](https://github.com/backstage/backstage/commit/6bb6f3e): Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- [`1cae748`](https://github.com/backstage/backstage/commit/1cae748): Updated dependency `git-url-parse` to `^14.0.0`.
- [`0a395b3`](https://github.com/backstage/backstage/commit/0a395b3): Upgraded `prom-client` to version 15
- [`9b2eb3f`](https://github.com/backstage/backstage/commit/9b2eb3f): Add support for `onProcessingError` handler at the catalog plugin (new backend system).

  You can use `setOnProcessingErrorHandler` at the `catalogProcessingExtensionPoint`
  as replacement for

  ```ts
  catalogBuilder.subscribe({
    onProcessingError: hander,
  });
  ```

#### 1.16.1

##### Patch Changes

- [`c3249d6`](https://github.com/backstage/backstage/commit/c3249d6): Parse the URL using a different method rather than `git-url-parse` to support wildcards for URLs which are not VCS providers

#### 1.16.0

##### Minor Changes

- [`7804597`](https://github.com/backstage/backstage/commit/7804597): Permission rules can now be added for the Catalog plugin through the `CatalogPermissionExtensionPoint` interface.

##### Patch Changes

- [`3834067`](https://github.com/backstage/backstage/commit/3834067): Update the OpenAPI spec to support the use of `openapi-generator`.
- [`50ee804`](https://github.com/backstage/backstage/commit/50ee804): Wrap single `pipelineLoop` of TaskPipeline in a span for better traces
- [`7123c58`](https://github.com/backstage/backstage/commit/7123c58): Updated dependency `@types/glob` to `^8.0.0`.
- [`0cbb03b`](https://github.com/backstage/backstage/commit/0cbb03b): Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617
- [`a168507`](https://github.com/backstage/backstage/commit/a168507): Deprecated `EntitiesSearchFilter` and `EntityFilter`, which can now be imported from `@backstage/plugin-catalog-node` instead

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

### `@backstage/plugin-catalog-node` (1.4.7 → [1.7.3](../../changelogs/@backstage/plugin-catalog-node.md#173))

#### 1.7.0

##### Minor Changes

- [`d8a54d0`](https://github.com/backstage/backstage/commit/d8a54d0): Adds support for supplying field validators to the new backend's catalog plugin. If you're using entity policies, you should use the new `transformLegacyPolicyToProcessor` function to install them as processors instead.

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

- [`9b2eb3f`](https://github.com/backstage/backstage/commit/9b2eb3f): Add support for `onProcessingError` handler at the catalog plugin (new backend system).

  You can use `setOnProcessingErrorHandler` at the `catalogProcessingExtensionPoint`
  as replacement for

  ```ts
  catalogBuilder.subscribe({
    onProcessingError: hander,
  });
  ```

#### 1.6.1

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 1.6.0

##### Minor Changes

- [`a168507`](https://github.com/backstage/backstage/commit/a168507): Added `EntitiesSearchFilter` and `EntityFilter` from `@backstage/plugin-catalog-backend`, for reuse
- [`7804597`](https://github.com/backstage/backstage/commit/7804597): Permission rules can now be added for the Catalog plugin through the `CatalogPermissionExtensionPoint` interface.

#### 1.5.0

##### Minor Changes

- [`e5bf3749ad`](https://github.com/backstage/backstage/commit/e5bf3749ad): Support adding location analyzers in new catalog analysis extension point and move `AnalyzeOptions` and `ScmLocationAnalyzer` types to `@backstage/plugin-catalog-node`

### `@backstage/plugin-scaffolder-backend` (1.18.1 → [1.21.3](../../changelogs/@backstage/plugin-scaffolder-backend.md#1213))

#### 1.21.0

##### Minor Changes

- [`458bf21`](https://github.com/backstage/backstage/commit/458bf21): Created a gitea module for the scaffolder. This module provides a new action "publish:gitea" able to create a gitea repository owned by an organization. See: https://gitea.com/api/swagger#/organization/createOrgRepo
- [`11b9a08`](https://github.com/backstage/backstage/commit/11b9a08): Introduced the first version of recoverable tasks.
- [`78c100b`](https://github.com/backstage/backstage/commit/78c100b): Support providing an overriding token for `fetch:template`, `fetch:plain` and `fetch:file` when interacting with upstream integrations
- [`e9a5228`](https://github.com/backstage/backstage/commit/e9a5228): The built-in module list has been trimmed down when using the new Backend System. Provider specific modules should now be installed with `backend.add` to provide additional actions to the scaffolder. These modules are as follows:

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

- [`5eb6882`](https://github.com/backstage/backstage/commit/5eb6882): New scaffolder module `@backstage/plugin-scaffolder-backend-module-bitbucket-server`.

  Extracted from `@backstage/plugin-scaffolder-backend-module-bitbucket`
  and replaces its actions related to Bitbucket Server.

  - `publish:bitbucketServer`
  - `publish:bitbucketServer:pull-request`

- [`09f8b31`](https://github.com/backstage/backstage/commit/09f8b31): Simple typo fix in the fetch:template action example on the word 'skeleton'.
- [`c25a500`](https://github.com/backstage/backstage/commit/c25a500): Fix some deprecations and misplaced `await` usage.
- [`f6792c6`](https://github.com/backstage/backstage/commit/f6792c6): Move the `NODE_OPTIONS` messaging for `--no-node-snapshot` to the `SecureTemplater` in order to get better messaging at runtime
- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`6bb6f3e`](https://github.com/backstage/backstage/commit/6bb6f3e): Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- [`52ae6b9`](https://github.com/backstage/backstage/commit/52ae6b9): Updated dependency `esbuild` to `^0.20.0`.
- [`5eb6882`](https://github.com/backstage/backstage/commit/5eb6882): New scaffolder module `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud`.

  Extracted from `@backstage/plugin-scaffolder-backend-module-bitbucket`
  and replaces its actions related to Bitbucket Cloud.

  - `publish:bitbucketCloud`
  - `bitbucket:pipelines:run`

- [`0a395b3`](https://github.com/backstage/backstage/commit/0a395b3): Upgraded `prom-client` to version 15
- [`e1c479d`](https://github.com/backstage/backstage/commit/e1c479d): When using node 20+ the `scaffolder-backend` will now throw an error at startup if the `--no-node-snapshot` option was
  not provided to node.
- [`e0e5afe`](https://github.com/backstage/backstage/commit/e0e5afe): Add option to configure nunjucks with the `trimBlocks` and `lstripBlocks` options in the fetch:template action

#### 1.20.0

##### Minor Changes

- [`a694f71`](https://github.com/backstage/backstage/commit/a694f71): The Scaffolder builtin actions now contains an action for running pipelines from Bitbucket Cloud Rest API
- [`7c522c5`](https://github.com/backstage/backstage/commit/7c522c5): Add `gitlab:repo:push` scaffolder action to push files to arbitrary branch without creating a Merge Request

##### Patch Changes

- [`e9ab1c4`](https://github.com/backstage/backstage/commit/e9ab1c4): Fixed an issue where not passing a `value` to any of the action's permission conditions caused an error.

#### 1.19.2

##### Patch Changes

- [`219d7f0`](https://github.com/backstage/backstage/commit/219d7f0): Refactor some methods to `-node` instead and use the new external modules
- [`aff34fc`](https://github.com/backstage/backstage/commit/aff34fc): Fix issue with Circular JSON dependencies in templating
- [`48667b4`](https://github.com/backstage/backstage/commit/48667b4): Fix creating env secret in github:environment:create action
- [`0cbb03b`](https://github.com/backstage/backstage/commit/0cbb03b): Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617
- [`28949ea`](https://github.com/backstage/backstage/commit/28949ea): Add a new action for creating github-autolink references for a repository: `github:autolinks:create`

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

### `@backstage/plugin-scaffolder-common` (1.4.2 → [1.5.0](../../changelogs/@backstage/plugin-scaffolder-common.md#150))

#### 1.5.0

##### Minor Changes

- [`11b9a08`](https://github.com/backstage/backstage/commit/11b9a08): Introduced the first version of recoverable tasks.

#### 1.4.5

##### Patch Changes

- [`178b8d8`](https://github.com/backstage/backstage/commit/178b8d8): Updated Template.v1beta3.schema.json, added a missing "presentation" field

#### 1.4.3

##### Patch Changes

- [`2e0cef42ab`](https://github.com/backstage/backstage/commit/2e0cef42ab): Add missing required property `type` in `Template.v1beta3.schema.json` schema
- [`76d07da66a`](https://github.com/backstage/backstage/commit/76d07da66a): Make it possible to define control buttons text (Back, Create, Review) per template

### `@backstage/plugin-search-backend` (1.4.6 → [1.5.3](../../changelogs/@backstage/plugin-search-backend.md#153))

#### 1.5.0

##### Minor Changes

- [`126c2f9`](https://github.com/backstage/backstage/commit/126c2f9): Updates the OpenAPI spec to use plugin as `info.title` instead of package name.
- [`04907c3`](https://github.com/backstage/backstage/commit/04907c3): Updates the OpenAPI specification title to plugin ID instead of package name.

##### Patch Changes

- [`3ed0eac`](https://github.com/backstage/backstage/commit/3ed0eac): Authorized search engine now obeys query page limit

#### 1.4.9

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 1.4.8

##### Patch Changes

- [`0cbb03b`](https://github.com/backstage/backstage/commit/0cbb03b): Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617

#### 1.4.7

##### Patch Changes

- [`6694b369a3`](https://github.com/backstage/backstage/commit/6694b369a3): Update the OpenAPI spec with more complete error responses and request bodies using Optic. Also, updates the test cases to use the new `supertest` pass through from `@backstage/backend-openapi-utils`.

### `@backstage/plugin-techdocs` (1.8.0 → [1.10.0](../../changelogs/@backstage/plugin-techdocs.md#1100))

#### 1.10.0

##### Minor Changes

- [`af4d147`](https://github.com/backstage/backstage/commit/af4d147): Updated the styling for `<code>` tags to avoid word break.

##### Patch Changes

- [`912ca7b`](https://github.com/backstage/backstage/commit/912ca7b): Use `convertLegacyRouteRefs` to define routes in `/alpha` export plugin.
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.
- [`3631fb4`](https://github.com/backstage/backstage/commit/3631fb4): Updated dependency `dompurify` to `^3.0.0`.
  Updated dependency `@types/dompurify` to `^3.0.0`.
- [`1cae748`](https://github.com/backstage/backstage/commit/1cae748): Updated dependency `git-url-parse` to `^14.0.0`.

#### 1.9.3

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 1.9.2

##### Patch Changes

- [`03d0b6d`](https://github.com/backstage/backstage/commit/03d0b6d): The `convertLegacyRouteRef` utility used by the alpha exports is now imported from `@backstage/core-compat-api`.
- [`a1227cc`](https://github.com/backstage/backstage/commit/a1227cc): Wrap `/alpha` export extension elements in backwards compatibility wrapper.
- [`5814122`](https://github.com/backstage/backstage/commit/5814122): Updated `/alpha` exports to fit new naming patterns.
- [`36c94b8`](https://github.com/backstage/backstage/commit/36c94b8): Refactor of the alpha exports due to API change in how extension IDs are constructed.

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

### `@backstage/plugin-techdocs-backend` (1.8.0 → [1.9.6](../../changelogs/@backstage/plugin-techdocs-backend.md#196))

#### 1.9.3

##### Patch Changes

- [`6bb6f3e`](https://github.com/backstage/backstage/commit/6bb6f3e): Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- [`d2e3ab9`](https://github.com/backstage/backstage/commit/d2e3ab9): Updated dependency `dockerode` to `^4.0.0`.

#### 1.9.2

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 1.9.1

##### Patch Changes

- [`a402644`](https://github.com/backstage/backstage/commit/a402644): Regenerates a fresh token for each call to the search index when collating techdocs.

#### 1.9.0

##### Minor Changes

- [`67cff7b06f`](https://github.com/backstage/backstage/commit/67cff7b06f): Expose an extension point to set a custom build strategy. Also move `DocsBuildStrategy` type to `@backstage/plugin-techdocs-node` and deprecate `ShouldBuildParameters` type.

##### Patch Changes

- [`c3c5c7e514`](https://github.com/backstage/backstage/commit/c3c5c7e514): Add info about the entity when tech docs fail to build
- [`48a61bfdca`](https://github.com/backstage/backstage/commit/48a61bfdca): Fix potential memory leak by not creating a build log transport if not given via `RouterOptions`.
- [`013611b42e`](https://github.com/backstage/backstage/commit/013611b42e): `knex` has been bumped to major version 3 and `better-sqlite3` to major version 9, which deprecate node 16 support.

### `@backstage/plugin-techdocs-node` (1.9.0 → [1.11.5](../../changelogs/@backstage/plugin-techdocs-node.md#1115))

#### 1.11.2

##### Patch Changes

- [`6bb6f3e`](https://github.com/backstage/backstage/commit/6bb6f3e): Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- [`1cae748`](https://github.com/backstage/backstage/commit/1cae748): Updated dependency `git-url-parse` to `^14.0.0`.
- [`77e3050`](https://github.com/backstage/backstage/commit/77e3050): Update to a newer version of `@trendyol-js/openstack-swift-sdk`

#### 1.11.0

##### Minor Changes

- [`d15d483`](https://github.com/backstage/backstage/commit/d15d483): Add command `--runAsDefaultUser` for `@techdocs/cli generate` to bypass running the docker builds as host user for macOS and Linux.

##### Patch Changes

- [`99fb541`](https://github.com/backstage/backstage/commit/99fb541): Updated dependency `@azure/identity` to `^4.0.0`.
- [`2666675`](https://github.com/backstage/backstage/commit/2666675): Updated dependency `@google-cloud/storage` to `^7.0.0`.
- [`4f773c1`](https://github.com/backstage/backstage/commit/4f773c1): Bumped the default TechDocs docker image version to the latest which was released several month ago

#### 1.10.0

##### Minor Changes

- [`67cff7b06f`](https://github.com/backstage/backstage/commit/67cff7b06f): Expose an extension point to set a custom build strategy. Also move `DocsBuildStrategy` type to `@backstage/plugin-techdocs-node` and deprecate `ShouldBuildParameters` type.

##### Patch Changes

- [`e61a975f61`](https://github.com/backstage/backstage/commit/e61a975f61): Switch to `@smithy/node-http-handler` instead of the `@aws-sdk/node-http-handler`
- [`3d043526f4`](https://github.com/backstage/backstage/commit/3d043526f4): Updated dependency `aws-sdk-client-mock` to `^3.0.0`.

### `@backstage/test-utils` (1.4.4 → [1.5.0](../../changelogs/@backstage/test-utils.md#150))

#### 1.5.0

##### Minor Changes

- [`bb40898`](https://github.com/backstage/backstage/commit/bb40898): Added `components` option to `TestAppOptions`, which will be forwarded as the `components` option to `createApp`.

##### Patch Changes

- [`07e7d12`](https://github.com/backstage/backstage/commit/07e7d12): Fix wording in API reference
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.
- [`7da67ce`](https://github.com/backstage/backstage/commit/7da67ce): Change `defaultScopes` for Bitbucket auth from invalid `team` to `account`.

#### 1.4.6

##### Patch Changes

- [`e8f2ace`](https://github.com/backstage/backstage/commit/e8f2ace): Deprecated `mockBreakpoint`, as it is now available from `@backstage/core-components/testUtils` instead.

#### 1.4.5

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`4aa43f62aa`](https://github.com/backstage/backstage/commit/4aa43f62aa): Updated dependency `cross-fetch` to `^4.0.0`.

### `@techdocs/cli` (1.6.0 → [1.8.5](../../changelogs/@techdocs/cli.md#185))

#### 1.8.2

##### Patch Changes

- [`6bb6f3e`](https://github.com/backstage/backstage/commit/6bb6f3e): Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- [`d2e3ab9`](https://github.com/backstage/backstage/commit/d2e3ab9): Updated dependency `dockerode` to `^4.0.0`.
- [`6ba64c4`](https://github.com/backstage/backstage/commit/6ba64c4): Updated dependency `commander` to `^12.0.0`.
- [`d8d243c`](https://github.com/backstage/backstage/commit/d8d243c): fix: mkdocs parameter casing

#### 1.8.0

##### Minor Changes

- [`d15d483`](https://github.com/backstage/backstage/commit/d15d483): Add command `--runAsDefaultUser` for `@techdocs/cli generate` to bypass running the docker builds as host user for macOS and Linux.
- [`b2dccad`](https://github.com/backstage/backstage/commit/b2dccad): Support passing additional `mkdocs-server` CLI parameters (`--dirtyreload`, `--strict` and `--clean`) when run in containerized mode.

#### 1.7.0

##### Minor Changes

- [`8600b86820`](https://github.com/backstage/backstage/commit/8600b86820): validate Docker status before running mkdocs server

## Other patch version bumps

### `@backstage/catalog-model` (1.4.3 → [1.4.4](../../changelogs/@backstage/catalog-model.md#144))

#### 1.4.4

##### Patch Changes

- [`07e7d12`](https://github.com/backstage/backstage/commit/07e7d12): Fix wording in API reference

### `@backstage/dev-utils` (1.0.22 → [1.0.27](../../changelogs/@backstage/dev-utils.md#1027))

#### 1.0.27

##### Patch Changes

- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 1.0.23

##### Patch Changes

- [`67cc85bb14`](https://github.com/backstage/backstage/commit/67cc85bb14): Switched the conditional `react-dom/client` import to use `import(...)` rather than `require(...)`.
- [`38cda52746`](https://github.com/backstage/backstage/commit/38cda52746): Added support for React 18. The new `createRoot` API from `react-dom/client` will now be used if present.

### `@backstage/integration-react` (1.1.20 → [1.1.24](../../changelogs/@backstage/integration-react.md#1124))

#### 1.1.21

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-search` (1.4.1 → [1.4.6](../../changelogs/@backstage/plugin-search.md#146))

#### 1.4.6

##### Patch Changes

- [`912ca7b`](https://github.com/backstage/backstage/commit/912ca7b): Use `convertLegacyRouteRefs` to define routes in `/alpha` export plugin.
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 1.4.5

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 1.4.4

##### Patch Changes

- [`03d0b6d`](https://github.com/backstage/backstage/commit/03d0b6d): The `convertLegacyRouteRef` utility used by the alpha exports is now imported from `@backstage/core-compat-api`.
- [`a1227cc`](https://github.com/backstage/backstage/commit/a1227cc): Wrap `/alpha` export extension elements in backwards compatibility wrapper.
- [`5814122`](https://github.com/backstage/backstage/commit/5814122): Updated `/alpha` exports to fit new naming patterns.
- [`8f5d6c1`](https://github.com/backstage/backstage/commit/8f5d6c1): Updates to the `/alpha` exports to match the extension input wrapping change.
- [`36c94b8`](https://github.com/backstage/backstage/commit/36c94b8): Refactor of the alpha exports due to API change in how extension IDs are constructed.

#### 1.4.2

##### Patch Changes

- [`68fc9dc60e`](https://github.com/backstage/backstage/commit/68fc9dc60e): Updated alpha exports according to routing changes in `@backstage/frontend-plugin-api`.
- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`62b5922916`](https://github.com/backstage/backstage/commit/62b5922916): Internal theme type updates
- [`fa11120050`](https://github.com/backstage/backstage/commit/fa11120050): Fixed incorrect plugin ID in `/alpha` export.
- [`71c97e7d73`](https://github.com/backstage/backstage/commit/71c97e7d73): Minor internal code cleanup.

### `@backstage/plugin-search-backend-module-elasticsearch` (1.3.9 → [1.3.16](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#1316))

#### 1.3.11

##### Patch Changes

- [`cc4228e`](https://github.com/backstage/backstage/commit/cc4228e): Switched module ID to use kebab-case.

#### 1.3.10

##### Patch Changes

- [`006df4a581`](https://github.com/backstage/backstage/commit/006df4a581): Support AWS OpenSearch Serverless search backend. Does not support `_refresh` endpoint.

### `@backstage/plugin-search-backend-node` (1.2.10 → [1.2.17](../../changelogs/@backstage/plugin-search-backend-node.md#1217))

#### 1.2.11

##### Patch Changes

- [`b168d7e7ea`](https://github.com/backstage/backstage/commit/b168d7e7ea): Fix highlighting for non-string fields on the `Lunr` search engine implementation.

### `@backstage/plugin-search-react` (1.7.1 → [1.7.6](../../changelogs/@backstage/plugin-search-react.md#176))

#### 1.7.6

##### Patch Changes

- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 1.7.4

##### Patch Changes

- [`a5a0473`](https://github.com/backstage/backstage/commit/a5a0473): Internal refactor of alpha exports due to a change in how extension factories are defined.
- [`84dabc5`](https://github.com/backstage/backstage/commit/84dabc5): Removed `@backstage/frontend-app-api` dependency.
- [`5814122`](https://github.com/backstage/backstage/commit/5814122): Updated `/alpha` exports to fit new naming patterns.
- [`6f280fa`](https://github.com/backstage/backstage/commit/6f280fa): Capture analytics even when number of results is not available, since the total result count is not something that is always available for all search engines and configurations.
- [`36c94b8`](https://github.com/backstage/backstage/commit/36c94b8): Refactor of the alpha exports due to API change in how extension IDs are constructed.

#### 1.7.2

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`f48cde800a`](https://github.com/backstage/backstage/commit/f48cde800a): Emit search analytics in the search hook instead of in a dedicated component
- [`f75caf9f3d`](https://github.com/backstage/backstage/commit/f75caf9f3d): Fixed a rare occurrence where a race in the search bar could throw away user input or cause the clear button not to work.
- [`77f009b35d`](https://github.com/backstage/backstage/commit/77f009b35d): Internal updates to match changes in the experimental `@backstage/frontend-plugin-api`.
- [`a539643cba`](https://github.com/backstage/backstage/commit/a539643cba): Minor refactor of search bar analytics capture
- [`71c97e7d73`](https://github.com/backstage/backstage/commit/71c97e7d73): The filter options passed to `SearchResultGroupLayout` are now always explicitly rendered as strings by default.
- [`e7c09c4f4b`](https://github.com/backstage/backstage/commit/e7c09c4f4b): Use default extensions boundary and suspense on the alpha declarative `createSearchResultListItem` extension factory.

### `@backstage/plugin-techdocs-addons-test-utils` (1.0.22 → [1.0.27](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#1027))

#### 1.0.27

##### Patch Changes

- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 1.0.26

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 1.0.25

##### Patch Changes

- [`3f354e6`](https://github.com/backstage/backstage/commit/3f354e6): Move `@testing-library/react` to be a `peerDependency`
- [`5d79682`](https://github.com/backstage/backstage/commit/5d79682): Remove unnecessary catalog dependency

#### 1.0.23

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/plugin-techdocs-module-addons-contrib` (1.1.1 → [1.1.5](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#115))

#### 1.1.5

##### Patch Changes

- [`ab9c9eb`](https://github.com/backstage/backstage/commit/ab9c9eb): Fixed the value label text color in dark mode for the TextSize addon.
- [`09cedb9`](https://github.com/backstage/backstage/commit/09cedb9): Updated dependency `@react-hookz/web` to `^24.0.0`.
- [`1cae748`](https://github.com/backstage/backstage/commit/1cae748): Updated dependency `git-url-parse` to `^14.0.0`.
- [`131ffdc`](https://github.com/backstage/backstage/commit/131ffdc): Fix position of the ReportIssue component when is displaying at the top of the container.

#### 1.1.4

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 1.1.3

##### Patch Changes

- [`a518c5a`](https://github.com/backstage/backstage/commit/a518c5a): Updated dependency `@react-hookz/web` to `^23.0.0`.

#### 1.1.2

##### Patch Changes

- [`4728b3960d`](https://github.com/backstage/backstage/commit/4728b3960d): Fixed navigation bug that caused users to not be scrolled to the top of a new page. Fixed navigation bug where using backwards and forwards browser navigation did not scroll users to the correct place on the TechDoc page.
- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.
- [`62b5922916`](https://github.com/backstage/backstage/commit/62b5922916): Internal theme type updates

### `@backstage/plugin-techdocs-react` (1.1.12 → [1.1.16](../../changelogs/@backstage/plugin-techdocs-react.md#1116))

#### 1.1.16

##### Patch Changes

- [`9aac2b0`](https://github.com/backstage/backstage/commit/9aac2b0): Use `--cwd` as the first `yarn` argument
- [`8fe56a8`](https://github.com/backstage/backstage/commit/8fe56a8): Widen `@types/react` dependency range to include version 18.

#### 1.1.15

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

#### 1.1.13

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

### `@backstage/version-bridge` (1.0.6 → [1.0.7](../../changelogs/@backstage/version-bridge.md#107))

#### 1.0.7

##### Patch Changes

- [`6c2b872153`](https://github.com/backstage/backstage/commit/6c2b872153): Add official support for React 18.

## Excluded dependency updates

- `@backstage/plugin-adr-common` (0.2.16 → [0.2.20](../../changelogs/@backstage/plugin-adr-common.md#0220))
- `@backstage/plugin-catalog-backend-module-ldap` (0.5.21 → [0.5.28](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0528))
- `@backstage/plugin-catalog-common` (1.0.17 → [1.0.21](../../changelogs/@backstage/plugin-catalog-common.md#1021))
- `@backstage/plugin-devtools-common` (0.1.5 → [0.1.8](../../changelogs/@backstage/plugin-devtools-common.md#018))
- `@backstage/plugin-events-backend-test-utils` (0.1.16 → [0.1.23](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0123))
- `@backstage/plugin-events-node` (0.2.15 → [0.2.22](../../changelogs/@backstage/plugin-events-node.md#0222))
- `@backstage/plugin-jenkins-common` (0.1.20 → [0.1.24](../../changelogs/@backstage/plugin-jenkins-common.md#0124))
- `@backstage/plugin-playlist-common` (0.1.11 → [0.1.14](../../changelogs/@backstage/plugin-playlist-common.md#0114))
- `@backstage/plugin-search-common` (1.2.7 → [1.2.10](../../changelogs/@backstage/plugin-search-common.md#1210))
