# Backstage Release 1.24.0 changelog

Changes between 1.23.4 and 1.24.0 — 251 changed and 4 added packages.

## Summary

- [Newly added packages](#newly-added-packages): 4 packages
- [Breaking changes](#breaking-changes): 24 packages
- [Major version bumps](#major-version-bumps): 1 package
- [0.x minor version bumps](#0x-minor-version-bumps): 9 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 2 packages
- [Other minor version bumps](#other-minor-version-bumps): 11 packages
- [Other patch version bumps](#other-patch-version-bumps): 132 packages
- [Excluded dependency updates for packages](#excluded-dependency-updates-for-packages): 72 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/plugin-auth-backend-module-guest-provider` (new, 0.1.0)](#backstageplugin-auth-backend-module-guest-provider-new-010)
  - [`@backstage/plugin-auth-react` (new, 0.0.1)](#backstageplugin-auth-react-new-001)
  - [`@backstage/plugin-catalog-unprocessed-entities-common` (new, 0.0.1)](#backstageplugin-catalog-unprocessed-entities-common-new-001)
  - [`@backstage/plugin-scaffolder-node-test-utils` (new, 0.1.0)](#backstageplugin-scaffolder-node-test-utils-new-010)
- [Breaking changes](#breaking-changes)
  - [`@backstage/backend-app-api` (0.5.14 → 0.6.0)](#backstagebackend-app-api-0514--060)
  - [`@backstage/cli` (0.25.2 → 0.26.0)](#backstagecli-0252--0260)
  - [`@backstage/plugin-auth-backend` (0.21.3 → 0.22.0)](#backstageplugin-auth-backend-0213--0220)
  - [`@backstage/plugin-azure-devops` (0.3.12 → 0.4.0)](#backstageplugin-azure-devops-0312--040)
  - [`@backstage/plugin-azure-sites-backend` (0.2.3 → 0.3.0)](#backstageplugin-azure-sites-backend-023--030)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.28 → 0.2.0)](#backstageplugin-catalog-backend-module-bitbucket-cloud-0128--020)
  - [`@backstage/plugin-catalog-backend-module-unprocessed` (0.3.10 → 0.4.0)](#backstageplugin-catalog-backend-module-unprocessed-0310--040)
  - [`@backstage/plugin-catalog-unprocessed-entities` (0.1.8 → 0.2.0)](#backstageplugin-catalog-unprocessed-entities-018--020)
  - [`@backstage/plugin-devtools-backend` (0.2.10 → 0.3.0)](#backstageplugin-devtools-backend-0210--030)
  - [`@backstage/plugin-events-backend` (0.2.22 → 0.3.0)](#backstageplugin-events-backend-0222--030)
  - [`@backstage/plugin-events-backend-module-aws-sqs` (0.2.16 → 0.3.0)](#backstageplugin-events-backend-module-aws-sqs-0216--030)
  - [`@backstage/plugin-events-backend-module-azure` (0.1.23 → 0.2.0)](#backstageplugin-events-backend-module-azure-0123--020)
  - [`@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.23 → 0.2.0)](#backstageplugin-events-backend-module-bitbucket-cloud-0123--020)
  - [`@backstage/plugin-events-backend-module-gerrit` (0.1.23 → 0.2.0)](#backstageplugin-events-backend-module-gerrit-0123--020)
  - [`@backstage/plugin-events-backend-module-github` (0.1.23 → 0.2.0)](#backstageplugin-events-backend-module-github-0123--020)
  - [`@backstage/plugin-events-backend-module-gitlab` (0.1.23 → 0.2.0)](#backstageplugin-events-backend-module-gitlab-0123--020)
  - [`@backstage/plugin-events-node` (0.2.22 → 0.3.0)](#backstageplugin-events-node-0222--030)
  - [`@backstage/plugin-jenkins-backend` (0.3.7 → 0.4.0)](#backstageplugin-jenkins-backend-037--040)
  - [`@backstage/plugin-kubernetes-backend` (0.15.3 → 0.16.0)](#backstageplugin-kubernetes-backend-0153--0160)
  - [`@backstage/plugin-lighthouse-backend` (0.4.5 → 0.4.6)](#backstageplugin-lighthouse-backend-045--046)
  - [`@backstage/plugin-notifications-backend` (0.0.4 → 0.1.0)](#backstageplugin-notifications-backend-004--010)
  - [`@backstage/plugin-signals-backend` (0.0.4 → 0.1.0)](#backstageplugin-signals-backend-004--010)
  - [`@backstage/plugin-signals-node` (0.0.4 → 0.1.0)](#backstageplugin-signals-node-004--010)
  - [`@backstage/plugin-tech-insights-node` (0.4.19 → 0.5.0)](#backstageplugin-tech-insights-node-0419--050)
- [Major version bumps](#major-version-bumps)
  - [`@backstage/plugin-dynatrace` (9.0.0 → 10.0.0)](#backstageplugin-dynatrace-900--1000)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/plugin-azure-devops-backend` (0.5.5 → 0.6.0)](#backstageplugin-azure-devops-backend-055--060)
  - [`@backstage/plugin-azure-devops-common` (0.3.2 → 0.4.0)](#backstageplugin-azure-devops-common-032--040)
  - [`@backstage/plugin-home` (0.6.2 → 0.7.0)](#backstageplugin-home-062--070)
  - [`@backstage/plugin-notifications` (0.0.1 → 0.1.0)](#backstageplugin-notifications-001--010)
  - [`@backstage/plugin-notifications-node` (0.0.4 → 0.1.0)](#backstageplugin-notifications-node-004--010)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.2.16 → 0.3.0)](#backstageplugin-scaffolder-backend-module-gitlab-0216--030)
  - [`@backstage/plugin-scaffolder-node` (0.3.3 → 0.4.0)](#backstageplugin-scaffolder-node-033--040)
  - [`@backstage/plugin-tech-radar` (0.6.13 → 0.7.0)](#backstageplugin-tech-radar-0613--070)
  - [`@backstage/repo-tools` (0.6.3 → 0.7.0)](#backstagerepo-tools-063--070)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-notifications-common` (0.0.1 → 0.0.2)](#backstageplugin-notifications-common-001--002)
  - [`@backstage/plugin-signals` (0.0.1 → 0.0.2)](#backstageplugin-signals-001--002)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/config` (1.1.1 → 1.2.0)](#backstageconfig-111--120)
  - [`@backstage/config-loader` (1.6.2 → 1.7.0)](#backstageconfig-loader-162--170)
  - [`@backstage/plugin-catalog` (1.17.0 → 1.18.0)](#backstageplugin-catalog-1170--1180)
  - [`@backstage/plugin-catalog-backend` (1.17.3 → 1.18.0)](#backstageplugin-catalog-backend-1173--1180)
  - [`@backstage/plugin-catalog-node` (1.7.3 → 1.8.0)](#backstageplugin-catalog-node-173--180)
  - [`@backstage/plugin-catalog-react` (1.10.0 → 1.11.0)](#backstageplugin-catalog-react-1100--1110)
  - [`@backstage/plugin-scaffolder` (1.18.0 → 1.19.0)](#backstageplugin-scaffolder-1180--1190)
  - [`@backstage/plugin-scaffolder-backend` (1.21.3 → 1.22.0)](#backstageplugin-scaffolder-backend-1213--1220)
  - [`@backstage/plugin-techdocs-backend` (1.9.6 → 1.10.0)](#backstageplugin-techdocs-backend-196--1100)
  - [`@backstage/plugin-techdocs-node` (1.11.5 → 1.12.0)](#backstageplugin-techdocs-node-1115--1120)
  - [`@backstage/plugin-techdocs-react` (1.1.16 → 1.2.0)](#backstageplugin-techdocs-react-1116--120)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-common` (0.21.3 → 0.21.4)](#backstagebackend-common-0213--0214)
  - [`@backstage/backend-defaults` (0.2.13 → 0.2.14)](#backstagebackend-defaults-0213--0214)
  - [`@backstage/backend-dynamic-feature-service` (0.2.3 → 0.2.4)](#backstagebackend-dynamic-feature-service-023--024)
  - [`@backstage/backend-openapi-utils` (0.1.6 → 0.1.7)](#backstagebackend-openapi-utils-016--017)
  - [`@backstage/backend-plugin-api` (0.6.13 → 0.6.14)](#backstagebackend-plugin-api-0613--0614)
  - [`@backstage/backend-tasks` (0.5.18 → 0.5.19)](#backstagebackend-tasks-0518--0519)
  - [`@backstage/backend-test-utils` (0.3.3 → 0.3.4)](#backstagebackend-test-utils-033--034)
  - [`@backstage/catalog-client` (1.6.0 → 1.6.1)](#backstagecatalog-client-160--161)
  - [`@backstage/codemods` (0.1.47 → 0.1.48)](#backstagecodemods-0147--0148)
  - [`@backstage/core-components` (0.14.0 → 0.14.1)](#backstagecore-components-0140--0141)
  - [`@backstage/create-app` (0.5.11 → 0.5.12)](#backstagecreate-app-0511--0512)
  - [`@backstage/errors` (1.2.3 → 1.2.4)](#backstageerrors-123--124)
  - [`@backstage/eslint-plugin` (0.1.5 → 0.1.6)](#backstageeslint-plugin-015--016)
  - [`@backstage/frontend-app-api` (0.6.0 → 0.6.1)](#backstagefrontend-app-api-060--061)
  - [`@backstage/integration` (1.9.0 → 1.9.1)](#backstageintegration-190--191)
  - [`@backstage/integration-react` (1.1.24 → 1.1.25)](#backstageintegration-react-1124--1125)
  - [`@backstage/plugin-adr` (0.6.13 → 0.6.14)](#backstageplugin-adr-0613--0614)
  - [`@backstage/plugin-adr-backend` (0.4.10 → 0.4.11)](#backstageplugin-adr-backend-0410--0411)
  - [`@backstage/plugin-adr-common` (0.2.20 → 0.2.21)](#backstageplugin-adr-common-0220--0221)
  - [`@backstage/plugin-airbrake` (0.3.30 → 0.3.31)](#backstageplugin-airbrake-0330--0331)
  - [`@backstage/plugin-airbrake-backend` (0.3.10 → 0.3.11)](#backstageplugin-airbrake-backend-0310--0311)
  - [`@backstage/plugin-apache-airflow` (0.2.20 → 0.2.21)](#backstageplugin-apache-airflow-0220--0221)
  - [`@backstage/plugin-api-docs` (0.11.0 → 0.11.1)](#backstageplugin-api-docs-0110--0111)
  - [`@backstage/plugin-apollo-explorer` (0.1.20 → 0.1.21)](#backstageplugin-apollo-explorer-0120--0121)
  - [`@backstage/plugin-app-backend` (0.3.61 → 0.3.62)](#backstageplugin-app-backend-0361--0362)
  - [`@backstage/plugin-auth-backend-module-atlassian-provider` (0.1.5 → 0.1.6)](#backstageplugin-auth-backend-module-atlassian-provider-015--016)
  - [`@backstage/plugin-auth-backend-module-aws-alb-provider` (0.1.4 → 0.1.5)](#backstageplugin-auth-backend-module-aws-alb-provider-014--015)
  - [`@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.2.8 → 0.2.9)](#backstageplugin-auth-backend-module-gcp-iap-provider-028--029)
  - [`@backstage/plugin-auth-backend-module-google-provider` (0.1.10 → 0.1.11)](#backstageplugin-auth-backend-module-google-provider-0110--0111)
  - [`@backstage/plugin-auth-backend-module-microsoft-provider` (0.1.8 → 0.1.9)](#backstageplugin-auth-backend-module-microsoft-provider-018--019)
  - [`@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.1.6 → 0.1.7)](#backstageplugin-auth-backend-module-oauth2-proxy-provider-016--017)
  - [`@backstage/plugin-auth-backend-module-oidc-provider` (0.1.3 → 0.1.4)](#backstageplugin-auth-backend-module-oidc-provider-013--014)
  - [`@backstage/plugin-auth-backend-module-pinniped-provider` (0.1.7 → 0.1.8)](#backstageplugin-auth-backend-module-pinniped-provider-017--018)
  - [`@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.1.5 → 0.1.6)](#backstageplugin-auth-backend-module-vmware-cloud-provider-015--016)
  - [`@backstage/plugin-auth-node` (0.4.8 → 0.4.9)](#backstageplugin-auth-node-048--049)
  - [`@backstage/plugin-azure-sites` (0.1.19 → 0.1.20)](#backstageplugin-azure-sites-0119--0120)
  - [`@backstage/plugin-badges` (0.2.54 → 0.2.55)](#backstageplugin-badges-0254--0255)
  - [`@backstage/plugin-badges-backend` (0.3.10 → 0.3.11)](#backstageplugin-badges-backend-0310--0311)
  - [`@backstage/plugin-bazaar` (0.2.22 → 0.2.23)](#backstageplugin-bazaar-0222--0223)
  - [`@backstage/plugin-bitrise` (0.1.57 → 0.1.58)](#backstageplugin-bitrise-0157--0158)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.3.7 → 0.3.8)](#backstageplugin-catalog-backend-module-aws-037--038)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.1.32 → 0.1.33)](#backstageplugin-catalog-backend-module-azure-0132--0133)
  - [`@backstage/plugin-catalog-backend-module-backstage-openapi` (0.1.6 → 0.1.7)](#backstageplugin-catalog-backend-module-backstage-openapi-016--017)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.26 → 0.1.27)](#backstageplugin-catalog-backend-module-bitbucket-server-0126--0127)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (0.1.29 → 0.1.30)](#backstageplugin-catalog-backend-module-gerrit-0129--0130)
  - [`@backstage/plugin-catalog-backend-module-github` (0.5.3 → 0.5.4)](#backstageplugin-catalog-backend-module-github-053--054)
  - [`@backstage/plugin-catalog-backend-module-github-org` (0.1.7 → 0.1.8)](#backstageplugin-catalog-backend-module-github-org-017--018)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.3.10 → 0.3.11)](#backstageplugin-catalog-backend-module-gitlab-0310--0311)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.17 → 0.4.18)](#backstageplugin-catalog-backend-module-incremental-ingestion-0417--0418)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.5.28 → 0.5.29)](#backstageplugin-catalog-backend-module-ldap-0528--0529)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.5.20 → 0.5.21)](#backstageplugin-catalog-backend-module-msgraph-0520--0521)
  - [`@backstage/plugin-catalog-backend-module-puppetdb` (0.1.18 → 0.1.19)](#backstageplugin-catalog-backend-module-puppetdb-0118--0119)
  - [`@backstage/plugin-catalog-graph` (0.4.0 → 0.4.1)](#backstageplugin-catalog-graph-040--041)
  - [`@backstage/plugin-catalog-import` (0.10.6 → 0.10.7)](#backstageplugin-catalog-import-0106--0107)
  - [`@backstage/plugin-cicd-statistics-module-gitlab` (0.1.26 → 0.1.27)](#backstageplugin-cicd-statistics-module-gitlab-0126--0127)
  - [`@backstage/plugin-circleci` (0.3.30 → 0.3.31)](#backstageplugin-circleci-0330--0331)
  - [`@backstage/plugin-cloudbuild` (0.4.0 → 0.4.1)](#backstageplugin-cloudbuild-040--041)
  - [`@backstage/plugin-code-climate` (0.1.30 → 0.1.31)](#backstageplugin-code-climate-0130--0131)
  - [`@backstage/plugin-code-coverage` (0.2.23 → 0.2.24)](#backstageplugin-code-coverage-0223--0224)
  - [`@backstage/plugin-code-coverage-backend` (0.2.27 → 0.2.28)](#backstageplugin-code-coverage-backend-0227--0228)
  - [`@backstage/plugin-codescene` (0.1.22 → 0.1.23)](#backstageplugin-codescene-0122--0123)
  - [`@backstage/plugin-cost-insights` (0.12.19 → 0.12.20)](#backstageplugin-cost-insights-01219--01220)
  - [`@backstage/plugin-devtools` (0.1.9 → 0.1.10)](#backstageplugin-devtools-019--0110)
  - [`@backstage/plugin-entity-feedback` (0.2.13 → 0.2.14)](#backstageplugin-entity-feedback-0213--0214)
  - [`@backstage/plugin-entity-feedback-backend` (0.2.10 → 0.2.11)](#backstageplugin-entity-feedback-backend-0210--0211)
  - [`@backstage/plugin-events-backend-test-utils` (0.1.23 → 0.1.24)](#backstageplugin-events-backend-test-utils-0123--0124)
  - [`@backstage/plugin-explore` (0.4.16 → 0.4.17)](#backstageplugin-explore-0416--0417)
  - [`@backstage/plugin-fossa` (0.2.62 → 0.2.63)](#backstageplugin-fossa-0262--0263)
  - [`@backstage/plugin-gcalendar` (0.3.23 → 0.3.24)](#backstageplugin-gcalendar-0323--0324)
  - [`@backstage/plugin-github-actions` (0.6.11 → 0.6.12)](#backstageplugin-github-actions-0611--0612)
  - [`@backstage/plugin-github-pull-requests-board` (0.1.24 → 0.1.25)](#backstageplugin-github-pull-requests-board-0124--0125)
  - [`@backstage/plugin-home-react` (0.1.8 → 0.1.9)](#backstageplugin-home-react-018--019)
  - [`@backstage/plugin-jenkins` (0.9.5 → 0.9.6)](#backstageplugin-jenkins-095--096)
  - [`@backstage/plugin-kafka` (0.3.30 → 0.3.31)](#backstageplugin-kafka-0330--0331)
  - [`@backstage/plugin-kubernetes` (0.11.5 → 0.11.6)](#backstageplugin-kubernetes-0115--0116)
  - [`@backstage/plugin-kubernetes-common` (0.7.4 → 0.7.5)](#backstageplugin-kubernetes-common-074--075)
  - [`@backstage/plugin-kubernetes-node` (0.1.7 → 0.1.8)](#backstageplugin-kubernetes-node-017--018)
  - [`@backstage/plugin-kubernetes-react` (0.3.0 → 0.3.1)](#backstageplugin-kubernetes-react-030--031)
  - [`@backstage/plugin-lighthouse` (0.4.15 → 0.4.16)](#backstageplugin-lighthouse-0415--0416)
  - [`@backstage/plugin-linguist` (0.1.15 → 0.1.16)](#backstageplugin-linguist-0115--0116)
  - [`@backstage/plugin-linguist-backend` (0.5.10 → 0.5.11)](#backstageplugin-linguist-backend-0510--0511)
  - [`@backstage/plugin-nomad-backend` (0.1.15 → 0.1.16)](#backstageplugin-nomad-backend-0115--0116)
  - [`@backstage/plugin-octopus-deploy` (0.2.12 → 0.2.13)](#backstageplugin-octopus-deploy-0212--0213)
  - [`@backstage/plugin-org` (0.6.20 → 0.6.21)](#backstageplugin-org-0620--0621)
  - [`@backstage/plugin-periskop-backend` (0.2.11 → 0.2.12)](#backstageplugin-periskop-backend-0211--0212)
  - [`@backstage/plugin-permission-backend` (0.5.36 → 0.5.37)](#backstageplugin-permission-backend-0536--0537)
  - [`@backstage/plugin-permission-common` (0.7.12 → 0.7.13)](#backstageplugin-permission-common-0712--0713)
  - [`@backstage/plugin-permission-node` (0.7.24 → 0.7.25)](#backstageplugin-permission-node-0724--0725)
  - [`@backstage/plugin-playlist` (0.2.4 → 0.2.5)](#backstageplugin-playlist-024--025)
  - [`@backstage/plugin-playlist-backend` (0.3.17 → 0.3.18)](#backstageplugin-playlist-backend-0317--0318)
  - [`@backstage/plugin-proxy-backend` (0.4.11 → 0.4.12)](#backstageplugin-proxy-backend-0411--0412)
  - [`@backstage/plugin-rollbar` (0.4.30 → 0.4.31)](#backstageplugin-rollbar-0430--0431)
  - [`@backstage/plugin-scaffolder-backend-module-azure` (0.1.5 → 0.1.6)](#backstageplugin-scaffolder-backend-module-azure-015--016)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket` (0.2.3 → 0.2.4)](#backstageplugin-scaffolder-backend-module-bitbucket-023--024)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.1.3 → 0.1.4)](#backstageplugin-scaffolder-backend-module-bitbucket-cloud-013--014)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.1.3 → 0.1.4)](#backstageplugin-scaffolder-backend-module-bitbucket-server-013--014)
  - [`@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.14 → 0.2.15)](#backstageplugin-scaffolder-backend-module-confluence-to-markdown-0214--0215)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.37 → 0.2.38)](#backstageplugin-scaffolder-backend-module-cookiecutter-0237--0238)
  - [`@backstage/plugin-scaffolder-backend-module-gerrit` (0.1.5 → 0.1.6)](#backstageplugin-scaffolder-backend-module-gerrit-015--016)
  - [`@backstage/plugin-scaffolder-backend-module-gitea` (0.1.3 → 0.1.4)](#backstageplugin-scaffolder-backend-module-gitea-013--014)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.2.3 → 0.2.4)](#backstageplugin-scaffolder-backend-module-github-023--024)
  - [`@backstage/plugin-scaffolder-backend-module-rails` (0.4.30 → 0.4.31)](#backstageplugin-scaffolder-backend-module-rails-0430--0431)
  - [`@backstage/plugin-scaffolder-backend-module-sentry` (0.1.21 → 0.1.22)](#backstageplugin-scaffolder-backend-module-sentry-0121--0122)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.34 → 0.2.35)](#backstageplugin-scaffolder-backend-module-yeoman-0234--0235)
  - [`@backstage/plugin-scaffolder-react` (1.8.0 → 1.8.1)](#backstageplugin-scaffolder-react-180--181)
  - [`@backstage/plugin-search` (1.4.6 → 1.4.7)](#backstageplugin-search-146--147)
  - [`@backstage/plugin-search-backend` (1.5.3 → 1.5.4)](#backstageplugin-search-backend-153--154)
  - [`@backstage/plugin-search-backend-module-catalog` (0.1.17 → 0.1.18)](#backstageplugin-search-backend-module-catalog-0117--0118)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.3.16 → 1.3.17)](#backstageplugin-search-backend-module-elasticsearch-1316--1317)
  - [`@backstage/plugin-search-backend-module-explore` (0.1.17 → 0.1.18)](#backstageplugin-search-backend-module-explore-0117--0118)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.22 → 0.5.23)](#backstageplugin-search-backend-module-pg-0522--0523)
  - [`@backstage/plugin-search-backend-module-techdocs` (0.1.17 → 0.1.18)](#backstageplugin-search-backend-module-techdocs-0117--0118)
  - [`@backstage/plugin-search-backend-node` (1.2.17 → 1.2.18)](#backstageplugin-search-backend-node-1217--1218)
  - [`@backstage/plugin-search-common` (1.2.10 → 1.2.11)](#backstageplugin-search-common-1210--1211)
  - [`@backstage/plugin-sentry` (0.5.15 → 0.5.16)](#backstageplugin-sentry-0515--0516)
  - [`@backstage/plugin-shortcuts` (0.3.19 → 0.3.20)](#backstageplugin-shortcuts-0319--0320)
  - [`@backstage/plugin-sonarqube` (0.7.12 → 0.7.13)](#backstageplugin-sonarqube-0712--0713)
  - [`@backstage/plugin-splunk-on-call` (0.4.19 → 0.4.20)](#backstageplugin-splunk-on-call-0419--0420)
  - [`@backstage/plugin-stack-overflow` (0.1.25 → 0.1.26)](#backstageplugin-stack-overflow-0125--0126)
  - [`@backstage/plugin-stackstorm` (0.1.11 → 0.1.12)](#backstageplugin-stackstorm-0111--0112)
  - [`@backstage/plugin-tech-insights` (0.3.22 → 0.3.23)](#backstageplugin-tech-insights-0322--0323)
  - [`@backstage/plugin-tech-insights-backend` (0.5.27 → 0.5.28)](#backstageplugin-tech-insights-backend-0527--0528)
  - [`@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.45 → 0.1.46)](#backstageplugin-tech-insights-backend-module-jsonfc-0145--0146)
  - [`@backstage/plugin-techdocs` (1.10.0 → 1.10.1)](#backstageplugin-techdocs-1100--1101)
  - [`@backstage/plugin-techdocs-addons-test-utils` (1.0.27 → 1.0.28)](#backstageplugin-techdocs-addons-test-utils-1027--1028)
  - [`@backstage/plugin-todo-backend` (0.3.11 → 0.3.12)](#backstageplugin-todo-backend-0311--0312)
  - [`@backstage/plugin-user-settings` (0.8.1 → 0.8.2)](#backstageplugin-user-settings-081--082)
  - [`@backstage/plugin-vault` (0.1.25 → 0.1.26)](#backstageplugin-vault-0125--0126)
  - [`@backstage/plugin-vault-backend` (0.4.6 → 0.4.7)](#backstageplugin-vault-backend-046--047)
  - [`@backstage/plugin-xcmetrics` (0.2.48 → 0.2.49)](#backstageplugin-xcmetrics-0248--0249)
  - [`@backstage/theme` (0.5.1 → 0.5.2)](#backstagetheme-051--052)
  - [`@techdocs/cli` (1.8.5 → 1.8.6)](#techdocscli-185--186)
- [Excluded dependency updates for packages](#excluded-dependency-updates-for-packages)

## Newly added packages

### `@backstage/plugin-auth-backend-module-guest-provider` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- 1bedb23: Adds a new guest provider that maps guest users to actual tokens. This also shifts the default guest login to `user:development/guest` to reduce overlap with your production/real data. To change that (or set it back to the old default, use the new `auth.providers.guest.userEntityRef` config key) like so,

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

- 72dd380: Ensure that the config schema is present
- 50a331b: Fix issue for issuing a token when `guest` user does not exist in catalog

### `@backstage/plugin-auth-react` (new, 0.0.1)

#### 0.0.1

##### Patch Changes

- 62bcaf8: Create a generic React component for refreshing user cookie.

### `@backstage/plugin-catalog-unprocessed-entities-common` (new, 0.0.1)

#### 0.0.1

##### Patch Changes

- 924c1ac: **BREAKING**- the `@backstage/plugin-catalog-backend-module-unprocessed` constructor is now private, and have been moved to using the static `.create` method instead which now requires a `PermissionService` and `DiscoveryService`.

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

### `@backstage/plugin-scaffolder-node-test-utils` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- f44589d: Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

##### Patch Changes

- 2bd1410: Removed unused dependencies
- aa543c9: Add an initiator credentials getter to the default mock context.
- 563dfd0: Fix issue with package bundling, should be `dist/index.cjs.js` instead of `dist/index.esm.js`.
- bbd1fe1: Made "checkpoint" on scaffolder action context non-optional

## Breaking changes

### `@backstage/backend-app-api` (0.5.14 → 0.6.0)

#### 0.6.0

##### Minor Changes

- 4a3d434: **BREAKING**: For users that have migrated to the new backend system, incoming requests will now be rejected if they are not properly authenticated (e.g. with a Backstage bearer token or a backend token). Please see the [Auth Service Migration tutorial](https://backstage.io/docs/tutorials/auth-service-migration) for more information on how to circumvent this behavior in the short term and how to properly leverage it in the longer term.

  Added service factories for the new [`auth`](https://backstage.io/docs/backend-system/core-services/auth/), [`httpAuth`](https://backstage.io/docs/backend-system/core-services/http-auth), and [`userInfo`](https://backstage.io/docs/backend-system/core-services/user-info) services that were created as part of [BEP-0003](https://github.com/backstage/backstage/tree/master/beps/0003-auth-architecture-evolution).

##### Patch Changes

- 999224f: Bump dependency `minimatch` to v9
- 81e0120: Fixed an issue where configuration schema for the purpose of redacting secrets from logs was not being read correctly.
- 15fda44: Provide some sane defaults for `WinstonLogger.create` making some of the arguments optional
- 0502d82: Updated the `permissionsServiceFactory` to forward the `AuthService` to the implementation.
- 9d91128: Add the possibility to disable watching files in the new backend system
- a5d341e: Adds an initial rate-limiting implementation so that any incoming requests that have a `'none'` principal are rate-limited automatically.
- 9802004: Made the `DefaultUserInfoService` claims check stricter
- f235ca7: Make sure to not filter out schemas in `createConfigSecretEnumerator`
- af5f7a6: The experimental feature discovery service exported at the `/alpha` sub-path will no longer attempt to load packages that are not Backstage backend packages.

### `@backstage/cli` (0.25.2 → 0.26.0)

#### 0.26.0

##### Minor Changes

- 0d72065: The backend devlopment server transpilation has been replaced with a simplified solution based on SWC, which is already the transpiler used for tests. This fixed an issue where never versions of the `tsx` dependency had a new contract for signalling dependencies, breaking watch mode. This change fixed file watches as well as enables sourcemaps.

##### Patch Changes

- fe1a55e: Extend option to minify generated code to the `backend` package.
- b0875e5: Fixed a bug that could cause the `build-workspace` command to fail when invoked with `--alwaysYarnPack` enabled in environments with limited resources.
- bdf9ec1: New backend plugins with cli are now created using the new backend system
- cadbb82: Added a `EXPERIMENTAL_LAZY_COMPILATION` flag, which enables the experimental Webpack lazy compilation option in frontend builds.
- 999224f: Bump dependency `minimatch` to v9
- 1bd4596: Removed the `ts-node` dev dependency.
- 8dce287: Fix prettier issues on default plugins & module templates
- f86e34c: Removed unused `replace-in-file` dependency
- 2398c7c: Updated dependency `@spotify/prettier-config` to `^15.0.0`.
  Updated dependency `@spotify/eslint-config-base` to `^15.0.0`.
  Updated dependency `@spotify/eslint-config-react` to `^15.0.0`.
  Updated dependency `@spotify/eslint-config-typescript` to `^15.0.0`.
- f4404e5: Add .ico import support
- f39dfd3: Tweak the descriptions of the CLI templates

### `@backstage/plugin-auth-backend` (0.21.3 → 0.22.0)

#### 0.22.0

##### Minor Changes

- 293c835: Add support for Service Tokens to Cloudflare Access auth provider
- 492fe83: **BREAKING**: The `CatalogIdentityClient` constructor now also requires the `discovery` service to be forwarded from the plugin environment. This is part of the migration to support the new auth services, which has also been done for the `createRouter` function.

##### Patch Changes

- 999224f: Bump dependency `minimatch` to v9
- 7c29e7f: Fixed refresh scope to match start method in OneLogin provider.
- 2af5354: Bump dependency `jose` to v5
- 38af71a: Updated dependency `google-auth-library` to `^9.0.0`.
- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- fa7ea3f: Internal refactor to break out how the router is constructed

### `@backstage/plugin-azure-devops` (0.3.12 → 0.4.0)

#### 0.4.0

##### Minor Changes

- 9fdb86a: Ability to fetch the README file from a different Azure DevOps path.

  Defaults to the current, Azure DevOps default behaviour (`README.md` in the root of the git repo); to use a different path, add the annotation `dev.azure.com/readme-path`

  Example:

  ```yaml
  dev.azure.com/readme-path: /my-path/README.md
  ```

- a9e7bd6: **BREAKING** The `AzureDevOpsClient` no longer requires `identityAPi` but now requires `fetchApi`.

  Updated to use `fetchApi` as per [ADR013](https://backstage.io/docs/architecture-decisions/adrs-adr013)

- 3270b1b: Azure DevOps plugin is now integrated with permission framework for its core features, see the https://github.com/backstage/backstage/blob/master/plugins/azure-devops/README.md#permission-framework for more details.

##### Patch Changes

- b7b0466: Remove the use of the deprecated `customStyles` for `Avatar`
- 9f19476: Updated README

### `@backstage/plugin-azure-sites-backend` (0.2.3 → 0.3.0)

#### 0.3.0

##### Minor Changes

- 6b802a2: **BREAKING**: The `createRouter` method now requires the `discovery` service to be forwarded from the plugin environment. This is part of the migration to support new auth services.
- acf3e00: Azure Sites list now hides the internal/microsoft only `hidden-` tags from the list of tags that are returned. Updated the log endpoint to /logstream-quickstart rather than just /logstream to stream logs in the Azure Portal UI.

##### Patch Changes

- 2bd1410: Removed unused dependencies
- 4467036: Allow unauthenticated access to health check endpoint.
- 85db926: Added new backend system for the Azure Sites backend plugin

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.28 → 0.2.0)

#### 0.2.0

##### Minor Changes

- 9e527c9: BREAKING CHANGE: Migrates the `BitbucketCloudEntityProvider` to use the `EventsService`; fix new backend system support.

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

- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.3.10 → 0.4.0)

#### 0.4.0

##### Minor Changes

- 924c1ac: **BREAKING**- the `@backstage/plugin-catalog-backend-module-unprocessed` constructor is now private, and have been moved to using the static `.create` method instead which now requires a `PermissionService` and `DiscoveryService`.

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

- 2bd1410: Removed unused dependencies

### `@backstage/plugin-catalog-unprocessed-entities` (0.1.8 → 0.2.0)

#### 0.2.0

##### Minor Changes

- 924c1ac: **BREAKING**- the `@backstage/plugin-catalog-backend-module-unprocessed` constructor is now private, and have been moved to using the static `.create` method instead which now requires a `PermissionService` and `DiscoveryService`.

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

- 2b397fe: Added the `no-top-level-material-ui-4-imports` ESLint rule to aid with the migration to Material UI v5

### `@backstage/plugin-devtools-backend` (0.2.10 → 0.3.0)

#### 0.3.0

##### Minor Changes

- 4dc5b48: **BREAKING**: The `createRouter` method now requires the `discovery` service to be forwarded from the plugin environment. This is part of the migration to support new auth services.

##### Patch Changes

- 2bd1410: Removed unused dependencies
- 4467036: Allow unauthenticated access to health check endpoint.
- 8b0026d: Removed unused `devDependencies` identified in Knip Report

### `@backstage/plugin-events-backend` (0.2.22 → 0.3.0)

#### 0.3.0

##### Minor Changes

- c4bd794: BREAKING CHANGE: Migrate `HttpPostIngressEventPublisher` and `eventsPlugin` to use `EventsService`.

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

- 56969b6: Add new `EventsService` as well as `eventsServiceRef` for the new backend system.

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

### `@backstage/plugin-events-backend-module-aws-sqs` (0.2.16 → 0.3.0)

#### 0.3.0

##### Minor Changes

- 132d672: BREAKING CHANGE: Migrate `AwsSqsConsumingEventPublisher` and its backend module to use `EventsService`.

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

### `@backstage/plugin-events-backend-module-azure` (0.1.23 → 0.2.0)

#### 0.2.0

##### Minor Changes

- eff3ca9: BREAKING CHANGE: Migrate `EventRouter` implementations from `EventBroker` to `EventsService`.

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

### `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.23 → 0.2.0)

#### 0.2.0

##### Minor Changes

- eff3ca9: BREAKING CHANGE: Migrate `EventRouter` implementations from `EventBroker` to `EventsService`.

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

### `@backstage/plugin-events-backend-module-gerrit` (0.1.23 → 0.2.0)

#### 0.2.0

##### Minor Changes

- eff3ca9: BREAKING CHANGE: Migrate `EventRouter` implementations from `EventBroker` to `EventsService`.

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

- 2bd1410: Removed unused dependencies

### `@backstage/plugin-events-backend-module-github` (0.1.23 → 0.2.0)

#### 0.2.0

##### Minor Changes

- eff3ca9: BREAKING CHANGE: Migrate `EventRouter` implementations from `EventBroker` to `EventsService`.

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

### `@backstage/plugin-events-backend-module-gitlab` (0.1.23 → 0.2.0)

#### 0.2.0

##### Minor Changes

- eff3ca9: BREAKING CHANGE: Migrate `EventRouter` implementations from `EventBroker` to `EventsService`.

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

- 2bd1410: Removed unused dependencies

### `@backstage/plugin-events-node` (0.2.22 → 0.3.0)

#### 0.3.0

##### Minor Changes

- eff3ca9: BREAKING CHANGE: Migrate `EventRouter` implementations from `EventBroker` to `EventsService`.

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

- 56969b6: Add new `EventsService` as well as `eventsServiceRef` for the new backend system.

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

### `@backstage/plugin-jenkins-backend` (0.3.7 → 0.4.0)

#### 0.4.0

##### Minor Changes

- 55191cc: **BREAKING**: Both `createRouter` and `DefaultJenkinsInfoProvider.fromConfig` now require the `discovery` service to be forwarded from the plugin environment. This is part of the migration to support new auth services.

  The `JenkinsInfoProvider` interface has been updated to receive `credentials` of the type `BackstageCredentials` rather than a token.

##### Patch Changes

- 2bd1410: Removed unused dependencies

### `@backstage/plugin-kubernetes-backend` (0.15.3 → 0.16.0)

#### 0.16.0

##### Minor Changes

- e1e540c: **BREAKING**: The `KubernetesBuilder.createBuilder` method now requires the `discovery` service to be forwarded from the plugin environment. This is part of the migration to support new auth services.

##### Patch Changes

- b9a0888: Fixed a bug in the proxy endpoint. Now when the `serviceAccount` strategy is used and no `serviceAccountToken` has been provided, the proxy endpoint assumes backstage is running on Kubernetes and gets the URL and CA from the Pod instance.
- 69d0217: Pass user credentials when calling catalog get entities api.

### `@backstage/plugin-lighthouse-backend` (0.4.5 → 0.4.6)

#### 0.4.6

##### Patch Changes

- 9f9ba70: **BREAKING**: The `createScheduler` function now requires the `discovery` service to be forwarded from the plugin environment. This is part of the migration to support new auth services.

### `@backstage/plugin-notifications-backend` (0.0.4 → 0.1.0)

#### 0.1.0

##### Minor Changes

- 6e6d096: notifications can be newly sorted by list of predefined options
- cd96173: Notifications-backend URL query parameters changed from `sort/sortOrder` to `orderField` and `created_after` to `createdAfter` to unify with other plugins.
- 07abfe1: The NotificationsPage newly uses pagination implemented on the backend layer to avoid large dataset transfers
- daf85dc: BREAKING CHANGE: Migrates signals to use the `EventsService` and makes it mandatory
- 758f2a4: The Notifications frontend has been redesigned towards list view with condensed row details. The 'done' attribute has been removed to keep the Notifications aligned with the idea of a messaging system instead of a task manager.

##### Patch Changes

- ba14c0e: Support for broadcast notifications
- dff7a7e: All notifications can be marked and filtered by severity critical, high, normal or low, the default is 'normal'
- 4467036: Allow unauthenticated access to health check endpoint.
- 6c1547a: **BREAKING** Type definition added to signal recipients

  Update to use `{type: 'broadcast'}` instead `null` and `{type: 'user', entityRef: ''}`
  instead string entity references

- 75f2d84: the user can newly mark notifications as "Saved" for their better visibility in the future
- a790a3d: Move notification origin resolving to backend with new auth
- 5d9c5ba: The Notifications can be newly filtered based on the Created Date.
- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- 84af361: Migrated to using the new auth services.
- 6d84ee6: Changed to use the refactored signal service naming

### `@backstage/plugin-signals-backend` (0.0.4 → 0.1.0)

#### 0.1.0

##### Minor Changes

- 6c1547a: **BREAKING** Type definition added to signal recipients

  Update to use `{type: 'broadcast'}` instead `null` and `{type: 'user', entityRef: ''}`
  instead string entity references

- daf85dc: BREAKING CHANGE: Migrates signals to use the `EventsService` and makes it mandatory

##### Patch Changes

- 4467036: Allow unauthenticated access to health check endpoint.
- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- 6d84ee6: Changed to use the refactored signal service naming
- df45710: Improved error logging and fixed authentication

### `@backstage/plugin-signals-node` (0.0.4 → 0.1.0)

#### 0.1.0

##### Minor Changes

- 6c1547a: **BREAKING** Type definition added to signal recipients

  Update to use `{type: 'broadcast'}` instead `null` and `{type: 'user', entityRef: ''}`
  instead string entity references

- daf85dc: BREAKING CHANGE: Migrates signals to use the `EventsService` and makes it mandatory

##### Patch Changes

- 6d84ee6: Renamed `SignalService` to `SignalsService` and `signalService` to `signalServiceRef`
  to follow the naming scheme of services and their references
- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/plugin-tech-insights-node` (0.4.19 → 0.5.0)

#### 0.5.0

##### Minor Changes

- d621468: **BREAKING**: The `FactRetrieverContext` type now contains an additional `auth` field.

## Major version bumps

### `@backstage/plugin-dynatrace` (9.0.0 → 10.0.0)

#### 10.0.0

##### Patch Changes

- e550b2b: Adjusted MUI imports for better tree shaking

## 0.x minor version bumps

### `@backstage/plugin-azure-devops-backend` (0.5.5 → 0.6.0)

#### 0.6.0

##### Minor Changes

- 9fdb86a: Ability to fetch the README file from a different Azure DevOps path.

  Defaults to the current, Azure DevOps default behaviour (`README.md` in the root of the git repo); to use a different path, add the annotation `dev.azure.com/readme-path`

  Example:

  ```yaml
  dev.azure.com/readme-path: /my-path/README.md
  ```

- 3270b1b: Azure DevOps plugin is now integrated with permission framework for its core features, see the https://github.com/backstage/backstage/blob/master/plugins/azure-devops/README.md#permission-framework for more details.

##### Patch Changes

- 4467036: Allow unauthenticated access to health check endpoint.
- 2f77e24: The `azureDevOps` configuration section is now optional and the `azureDevOps.token` has been deprecated. Use `integrations.azure` instead, see the [Azure DevOps Locations](https://backstage.io/docs/integrations/azure/locations) documentation for more details.

### `@backstage/plugin-azure-devops-common` (0.3.2 → 0.4.0)

#### 0.4.0

##### Minor Changes

- 9fdb86a: Ability to fetch the README file from a different Azure DevOps path.

  Defaults to the current, Azure DevOps default behaviour (`README.md` in the root of the git repo); to use a different path, add the annotation `dev.azure.com/readme-path`

  Example:

  ```yaml
  dev.azure.com/readme-path: /my-path/README.md
  ```

##### Patch Changes

- 3270b1b: Azure DevOps plugin is now integrated with permission framework for its core features, see the https://github.com/backstage/backstage/blob/master/plugins/azure-devops/README.md#permission-framework for more details.

### `@backstage/plugin-home` (0.6.2 → 0.7.0)

#### 0.7.0

##### Minor Changes

- 8807d2a: Resolved styling inconsistencies and title visibility issues in Top Visited and Recently Visited cards

##### Patch Changes

- 0cecb09: Updated dependency `@rjsf/utils` to `5.17.1`.
  Updated dependency `@rjsf/core` to `5.17.1`.
  Updated dependency `@rjsf/material-ui` to `5.17.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.17.1`.
- 2e17681: Added the `no-top-level-material-ui-4-imports` ESLint rule to aid with the migration to Material UI v5

### `@backstage/plugin-notifications` (0.0.1 → 0.1.0)

#### 0.1.0

##### Minor Changes

- 6e6d096: notifications can be newly sorted by list of predefined options
- cd96173: Notifications-backend URL query parameters changed from `sort/sortOrder` to `orderField` and `created_after` to `createdAfter` to unify with other plugins.
- 07abfe1: The NotificationsPage newly uses pagination implemented on the backend layer to avoid large dataset transfers
- 758f2a4: The Notifications frontend has been redesigned towards list view with condensed row details. The 'done' attribute has been removed to keep the Notifications aligned with the idea of a messaging system instead of a task manager.

##### Patch Changes

- dff7a7e: All notifications can be marked and filtered by severity critical, high, normal or low, the default is 'normal'
- 75f2d84: the user can newly mark notifications as "Saved" for their better visibility in the future
- 5d9c5ba: The Notifications can be newly filtered based on the Created Date.

### `@backstage/plugin-notifications-node` (0.0.4 → 0.1.0)

#### 0.1.0

##### Minor Changes

- 84af361: Migrated to using the new auth services.

##### Patch Changes

- ba14c0e: Support for broadcast notifications
- a790a3d: Move notification origin resolving to backend with new auth
- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.2.16 → 0.3.0)

#### 0.3.0

##### Minor Changes

- 6bfb7b1: Output the `iid` as `issuesIid` from the `gitlab:issues:create` action

##### Patch Changes

- f44589d: Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

### `@backstage/plugin-scaffolder-node` (0.3.3 → 0.4.0)

#### 0.4.0

##### Minor Changes

- 02ee466: **DEPRECATION** - Deprecated the `logStream` in the `ActionContext`. Please move to using `ctx.logger.x` instead.
- aa543c9: Update task context type to contain the new auth initiator credentials.

##### Patch Changes

- 85f4723: Fixed file corruption for non UTF-8 data in fetch contents
- 984abfa: Fixing the lost of the initial state after a task recovery.
- c6b132e: Introducing checkpoints for scaffolder task action idempotency
- bbd1fe1: Made "checkpoint" on scaffolder action context non-optional

### `@backstage/plugin-tech-radar` (0.6.13 → 0.7.0)

#### 0.7.0

##### Minor Changes

- 0453619: Fixed example snippet in `README.md` to reflect correct timeline item order.

##### Patch Changes

- a2327ac: Fixed an issue with the "moved in direction" table header cell getting squished and becoming unreadable if a timeline description is too long

### `@backstage/repo-tools` (0.6.3 → 0.7.0)

#### 0.7.0

##### Minor Changes

- 8bfcc50: Fix knip-report command to send 1 exit status in case of fail

##### Patch Changes

- 999224f: Bump dependency `minimatch` to v9
- 1bd4596: Removed the `ts-node` dev dependency.

## 0.0.x patch version bumps

### `@backstage/plugin-notifications-common` (0.0.1 → 0.0.2)

#### 0.0.2

##### Patch Changes

- ba14c0e: Support for broadcast notifications
- a790a3d: Move notification origin resolving to backend with new auth
- 758f2a4: The Notifications frontend has been redesigned towards list view with condensed row details. The 'done' attribute has been removed to keep the Notifications aligned with the idea of a messaging system instead of a task manager.

### `@backstage/plugin-signals` (0.0.1 → 0.0.2)

#### 0.0.2

##### Patch Changes

- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- 72df7c6: Added ESLint rule `no-top-level-material-ui-4-imports` in the `signals` plugin to migrate the Material UI imports.

## Other minor version bumps

### `@backstage/config` (1.1.1 → 1.2.0)

#### 1.2.0

##### Minor Changes

- 50cf9df: The `ConfigReader` now treats `null` values as present but explicitly undefined, meaning it will not fall back to the next level of configuration.

### `@backstage/config-loader` (1.6.2 → 1.7.0)

#### 1.7.0

##### Minor Changes

- db8358d: Forward `null` values read from configuration files in configuration data, rather than treating them as an absence of config.

### `@backstage/plugin-catalog` (1.17.0 → 1.18.0)

#### 1.18.0

##### Minor Changes

- 72b8827: Adds a title to the `PaginatedCatalogTable` for better visibility on what you're viewing.

##### Patch Changes

- 50b6687: Resolved an issue where the `PaginatedCatalogTable` was not propagating table options to its child table.
- 9332425: The entity page extension provided by the `/alpha` plugin now correctly renders the entity 404 page.
- 1c0b179: Added the `no-top-level-material-ui-4-imports` ESLint rule to aid with the migration to Material UI v5
- 2ac1630: Added support for passing in custom filters to `CatalogIndexPage`
- 298953b: Added support for providing an `initiallySelectedNamespaces` which accepts an array of Namespaces to have selected by default
- 6727665: Allow the `spec.target` field to be searchable in the catalog table for locations. Previously, only the `spec.targets` field was be searchable. This makes locations generated by providers such as the `GithubEntityProvider` searchable in the catalog table. [#23098](https://github.com/backstage/backstage/issues/23098)

### `@backstage/plugin-catalog-backend` (1.17.3 → 1.18.0)

#### 1.18.0

##### Minor Changes

- df12231: Allow setting EntityDataParser using CatalogModelExtensionPoint
- 15ba00f: Migrated to support new auth services. The `CatalogBuilder.create` method now accepts a `discovery` option, which is recommended to forward from the plugin environment, as it will otherwise fall back to use the `HostDiscovery` implementation.

##### Patch Changes

- 2bd1410: Removed unused dependencies
- 999224f: Bump dependency `minimatch` to v9
- 6f830bb: Allow passing optional filter to `getEntitiesByRefs`
- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- b65788b: Move @backstage/repo-tools to dev dependencies
- 280edeb: Add index for original value in search table for faster entity facet response
- dad018f: Do not fail on stitching when the entity contains `null` values associated to deeply nested or long keys.

### `@backstage/plugin-catalog-node` (1.7.3 → 1.8.0)

#### 1.8.0

##### Minor Changes

- df12231: Allow setting EntityDataParser using CatalogModelExtensionPoint

### `@backstage/plugin-catalog-react` (1.10.0 → 1.11.0)

#### 1.11.0

##### Minor Changes

- 72b8827: Number of results is now directly added as the field `totalItems` on `useEntityList`.

##### Patch Changes

- 930b5c1: Added 'root' and 'label' class keys for EntityAutocompletePicker, EntityOwnerPicker and EntityProcessingStatusPicker
- b2a9926: Adds an argument for which filters should be applied when fetching/counting available values
- a6e237f: Added `DefaultFilters` component
- 298953b: Added support for providing an `initiallySelectedNamespaces` which accepts an array of Namespaces to have selected by default

### `@backstage/plugin-scaffolder` (1.18.0 → 1.19.0)

#### 1.19.0

##### Minor Changes

- a3b4d90: Added a menu to the header of template page for direct access to editing the template

##### Patch Changes

- 0cecb09: Updated dependency `@rjsf/utils` to `5.17.1`.
  Updated dependency `@rjsf/core` to `5.17.1`.
  Updated dependency `@rjsf/material-ui` to `5.17.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.17.1`.
- a7e6fb3: Added the `no-top-level-material-ui-4-imports` ESLint rule to aid with the migration to Material UI v5

### `@backstage/plugin-scaffolder-backend` (1.21.3 → 1.22.0)

#### 1.22.0

##### Minor Changes

- e9663a9: Move away from using `ctx.logStream`
- aa543c9: Migrate plugin to use the new auth services, add an optional service discovery to the router options and change the permissions type to be `PermissionsService`.
- e9663a9: Enable the redaction of secrets using the redacting logger and the secrets from the `TaskSpec`
- c6b132e: Introducing checkpoints for scaffolder task action idempotency

##### Patch Changes

- 984abfa: Fixing the lost of the initial state after a task recovery.
- 703ebc9: Fix support for unauthenticated requests to create scaffolder tasks
- f44589d: Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- bbd1fe1: Made "checkpoint" on scaffolder action context non-optional

### `@backstage/plugin-techdocs-backend` (1.9.6 → 1.10.0)

#### 1.10.0

##### Minor Changes

- 718b734: Create extension point `TechdocsGeneratorExtensionPoint` to allow adding a custom generator

##### Patch Changes

- 3f14e9f: Migrate plugin to use the new auth services.

### `@backstage/plugin-techdocs-node` (1.11.5 → 1.12.0)

#### 1.12.0

##### Minor Changes

- 718b734: Create extension point `TechdocsGeneratorExtensionPoint` to allow adding a custom generator

##### Patch Changes

- 5b4f565: Fix handling of default plugins that have configuration

### `@backstage/plugin-techdocs-react` (1.1.16 → 1.2.0)

#### 1.2.0

##### Minor Changes

- 3f14e9f: Create a new api method for issuing user cookie.

## Other patch version bumps

### `@backstage/backend-common` (0.21.3 → 0.21.4)

#### 0.21.4

##### Patch Changes

- 7422430: Resolve the `basePath` before constructing the target path
- 999224f: Bump dependency `minimatch` to v9
- e0b997c: Fix issue where `resolveSafeChildPath` path would incorrectly resolve when operating on a symlink
- 9802004: Added the `UserInfoApi` as both an optional input and as an output for `createLegacyAuthAdapters`
- 2af5354: Bump dependency `jose` to v5
- ff40ada: Updated dependency `mysql2` to `^3.0.0`.
- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- 568881f: Updated dependency `yauzl` to `^3.0.0`.
- 4a3d434: Added a `createLegacyAuthAdapters` function that can be used as a compatibility adapter for backend plugins who want to start using the new [`auth`](https://backstage.io/docs/backend-system/core-services/auth/) and [`httpAuth`](https://backstage.io/docs/backend-system/core-services/http-auth) services that were created as part of [BEP-0003](https://github.com/backstage/backstage/tree/master/beps/0003-auth-architecture-evolution).

  See the [Auth Service Migration tutorial](https://backstage.io/docs/tutorials/auth-service-migration) for more information on the usage of this adapter.

### `@backstage/backend-defaults` (0.2.13 → 0.2.14)

#### 0.2.14

##### Patch Changes

- 7cbb760: Added support for the new auth services, which are now installed by default. See the [migration guide](https://backstage.io/docs/tutorials/auth-service-migration) for details.

### `@backstage/backend-dynamic-feature-service` (0.2.3 → 0.2.4)

#### 0.2.4

##### Patch Changes

- 5247909: Add `events: EventsService` to `LegacyPluginEnvironment`.

### `@backstage/backend-openapi-utils` (0.1.6 → 0.1.7)

#### 0.1.7

##### Patch Changes

- 85ec23e: Updated dependency `json-schema-to-ts` to `^3.0.0`.

### `@backstage/backend-plugin-api` (0.6.13 → 0.6.14)

#### 0.6.14

##### Patch Changes

- 4a3d434: Added the new [`auth`](https://backstage.io/docs/backend-system/core-services/auth/), [`httpAuth`](https://backstage.io/docs/backend-system/core-services/http-auth), and [`userInfo`](https://backstage.io/docs/backend-system/core-services/user-info) services that were created as part of [BEP-0003](https://github.com/backstage/backstage/tree/master/beps/0003-auth-architecture-evolution) to the `coreServices`.

  At the same time, the [`httpRouter`](https://backstage.io/docs/backend-system/core-services/http-router) service gained a new `addAuthPolicy` method that lets your plugin declare exemptions to the default auth policy - for example if you want to allow unauthenticated or cookie-based access to some subset of your feature routes.

  If you have migrated to the new backend system, please see the [Auth Service Migration tutorial](https://backstage.io/docs/tutorials/auth-service-migration) for more information on how to move toward using these services.

- 0502d82: Updated the `PermissionsService` methods to accept `BackstageCredentials` through options.

### `@backstage/backend-tasks` (0.5.18 → 0.5.19)

#### 0.5.19

##### Patch Changes

- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/backend-test-utils` (0.3.3 → 0.3.4)

#### 0.3.4

##### Patch Changes

- 4a3d434: Added support for the new [`auth`](https://backstage.io/docs/backend-system/core-services/auth/) and [`httpAuth`](https://backstage.io/docs/backend-system/core-services/http-auth) services that were created as part of [BEP-0003](https://github.com/backstage/backstage/tree/master/beps/0003-auth-architecture-evolution). These services will be present by default in test apps, and you can access mocked versions of their features under `mockServices.auth` and `mockServices.httpAuth` if you want to inspect or replace their behaviors.

  There is also a new `mockCredentials` that you can use for acquiring mocks of the various types of credentials that are used in the new system.

- 9802004: Added `mockServices.userInfo`, which now also automatically is made available in test backends.
- fd61d39: Updated dependency `testcontainers` to `^10.0.0`.
- ff40ada: Updated dependency `mysql2` to `^3.0.0`.
- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/catalog-client` (1.6.0 → 1.6.1)

#### 1.6.1

##### Patch Changes

- 6f830bb: Allow passing optional filter to `getEntitiesByRefs`

### `@backstage/codemods` (0.1.47 → 0.1.48)

#### 0.1.48

##### Patch Changes

- 1bd4596: Removed the `ts-node` dev dependency.

### `@backstage/core-components` (0.14.0 → 0.14.1)

#### 0.14.1

##### Patch Changes

- 2ff3e6e: The translation support for the `Link` component has been removed for now, in order to avoid broad breakages of tests in existing projects where the component is tested without being wrapped in an API provider.
- 2d06e4b: Move the text-transform styling on BackstageTableHeader from inline styling to `withStyles` so it can be customised easier
- 5c271fa: Removed inline styling in breadcrumbs and replaced with a theme reachable class of BreadcrumbsCurrentPage
- ff33ee2: Removed hardcoded font-family on select input
- ff7e126: Support i18n for core components
- 7854120: Create a component abstraction to consume system icons.
- ce73c3b: Removed the inline color from select icon to allow it to be colored via a theme
- 0c9d5ea: Updated MUI imports for core-components to not be top level
- 90d08b0: Updated dependency `react-idle-timer` to `5.7.2`.
- a8f7904: `SignInPage`'s `'guest'` provider now supports the `@backstage/plugin-auth-backend-module-guest-provider` package to generate tokens. It will continue to use the old frontend-only auth as a fallback.
- 0a8a1e9: Fix a spacing issue for the SidebarSubmenu in case a SidebarScrollWrapper is used that made it hard to reach the SidebarSubmenu
- aa1c88d: Deprecate the `customStyles` prop for the `Avatar` component in favour of the `classes` prop.

### `@backstage/create-app` (0.5.11 → 0.5.12)

#### 0.5.12

##### Patch Changes

- 4cca80f: Bumped create-app version.
- 8db51ca: Bumped create-app version.
- 778bc48: Bumped create-app version.
- 1bd4596: Removed the `ts-node` dev dependency.
- 829a249: Migrated the backend of the create app template to use the new backend system. For information on how to migrate your existing backend, see the [migration guide](https://backstage.io/docs/backend-system/building-backends/migrating).

### `@backstage/errors` (1.2.3 → 1.2.4)

#### 1.2.4

##### Patch Changes

- 2636075: Fixed an issue that was causing ResponseError not to report the HTTP status from the provided response.

### `@backstage/eslint-plugin` (0.1.5 → 0.1.6)

#### 0.1.6

##### Patch Changes

- 999224f: Bump dependency `minimatch` to v9

### `@backstage/frontend-app-api` (0.6.0 → 0.6.1)

#### 0.6.1

##### Patch Changes

- 48d6628: Add `loadingComponent` parameter to `createApp()`

### `@backstage/integration` (1.9.0 → 1.9.1)

#### 1.9.1

##### Patch Changes

- 0386fa7: Fixed an issue with resolution of SCM URLs against a base URL with a trailing slash.

### `@backstage/integration-react` (1.1.24 → 1.1.25)

#### 1.1.25

##### Patch Changes

- b38dc55: Updated `microsoftAuthApi` scopes for Azure DevOps to be fully qualified.

### `@backstage/plugin-adr` (0.6.13 → 0.6.14)

#### 0.6.14

##### Patch Changes

- 5335634: Fixed Azure DevOps ADR file path reading
- 669efc6: Remove unused package dependencies
- 38b92a0: Added ESLint rule `no-top-level-material-ui-4-imports` in the ADR plugin to migrate the Material UI imports.

### `@backstage/plugin-adr-backend` (0.4.10 → 0.4.11)

#### 0.4.11

##### Patch Changes

- 334c5fe: Updated dependency `marked` to `^12.0.0`.
- c8fdd83: Migrated `DefaultAdrCollatorFactory` to support new auth services.

### `@backstage/plugin-adr-common` (0.2.20 → 0.2.21)

#### 0.2.21

##### Patch Changes

- 5335634: Fixed Azure DevOps ADR file path reading

### `@backstage/plugin-airbrake` (0.3.30 → 0.3.31)

#### 0.3.31

##### Patch Changes

- 31d58ae: Added an optional ESLint rule - no-top-level-material-ui-4-imports - which has an auto fix function to migrate the imports and using it migrated the imports.

### `@backstage/plugin-airbrake-backend` (0.3.10 → 0.3.11)

#### 0.3.11

##### Patch Changes

- 4467036: Allow unauthenticated access to health check endpoint.

### `@backstage/plugin-apache-airflow` (0.2.20 → 0.2.21)

#### 0.2.21

##### Patch Changes

- 161114f: added an optional ESLint rule - no-top-level-material-ui-4-imports - which has an auto fix function to migrate the imports and used it to migrate the imports for plugins/apache-airflow

### `@backstage/plugin-api-docs` (0.11.0 → 0.11.1)

#### 0.11.1

##### Patch Changes

- c60dc3b: added an optional ESLint rule - no-top-level-material-ui-4-imports - in api-docs plugin which has an auto fix function to migrate the imports and used it to migrate the material-ui imports for plugins/api-docs
- 7854120: Use the `AppIcon` component in the navigation item extension.
- 2be27b9: Updated dependency `graphiql` to `3.1.1`.
- efba3d2: Updated dependency `@asyncapi/react-component` to `1.3.1`.

### `@backstage/plugin-apollo-explorer` (0.1.20 → 0.1.21)

#### 0.1.21

##### Patch Changes

- bb9e31e: Added an optional ESLint rule - no-top-level-material-ui-4-imports -in apollo-explorer plugin which has an auto fix function to migrate the imports and used it to migrate the Material UI imports for plugins/apollo-explorer.

### `@backstage/plugin-app-backend` (0.3.61 → 0.3.62)

#### 0.3.62

##### Patch Changes

- 52e43f2: Disable default auth policy, allowing unauthenticated access to app bundle.

### `@backstage/plugin-auth-backend-module-atlassian-provider` (0.1.5 → 0.1.6)

#### 0.1.6

##### Patch Changes

- c511186: Addressed OAuth flow issue in Atlassian auth module

### `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.1.4 → 0.1.5)

#### 0.1.5

##### Patch Changes

- 2af5354: Bump dependency `jose` to v5
- b1b012d: Fix issue with `providerInfo` not being set properly for some proxy providers, by making `providerInfo` an explicit optional return from `authenticate`

### `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.2.8 → 0.2.9)

#### 0.2.9

##### Patch Changes

- 38af71a: Updated dependency `google-auth-library` to `^9.0.0`.
- b1b012d: Fix issue with `providerInfo` not being set properly for some proxy providers, by making `providerInfo` an explicit optional return from `authenticate`

### `@backstage/plugin-auth-backend-module-google-provider` (0.1.10 → 0.1.11)

#### 0.1.11

##### Patch Changes

- 38af71a: Updated dependency `google-auth-library` to `^9.0.0`.

### `@backstage/plugin-auth-backend-module-microsoft-provider` (0.1.8 → 0.1.9)

#### 0.1.9

##### Patch Changes

- 2af5354: Bump dependency `jose` to v5

### `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.1.6 → 0.1.7)

#### 0.1.7

##### Patch Changes

- 2af5354: Bump dependency `jose` to v5
- e77d7a9: Internal refactor to avoid deprecated method.
- b1b012d: Fix issue with `providerInfo` not being set properly for some proxy providers, by making `providerInfo` an explicit optional return from `authenticate`

### `@backstage/plugin-auth-backend-module-oidc-provider` (0.1.3 → 0.1.4)

#### 0.1.4

##### Patch Changes

- 74b1dc9: Increased HTTP request timeout used by OIDC authenticator.
- 2af5354: Bump dependency `jose` to v5

### `@backstage/plugin-auth-backend-module-pinniped-provider` (0.1.7 → 0.1.8)

#### 0.1.8

##### Patch Changes

- 2af5354: Bump dependency `jose` to v5

### `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.1.5 → 0.1.6)

#### 0.1.6

##### Patch Changes

- 2af5354: Bump dependency `jose` to v5

### `@backstage/plugin-auth-node` (0.4.8 → 0.4.9)

#### 0.4.9

##### Patch Changes

- b4fc6e3: Deprecated the `getBearerTokenFromAuthorizationHeader` function, which is being replaced by the new `HttpAuthService`.
- 2af5354: Bump dependency `jose` to v5
- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- b1b012d: Fix issue with `providerInfo` not being set properly for some proxy providers, by making `providerInfo` an explicit optional return from `authenticate`

### `@backstage/plugin-azure-sites` (0.1.19 → 0.1.20)

#### 0.1.20

##### Patch Changes

- 8679bda: Modified azure table to only show loading UI on initial load. Sorted tags in table is their order from the api is indeterminate, and they would randomly shuffle on each load

### `@backstage/plugin-badges` (0.2.54 → 0.2.55)

#### 0.2.55

##### Patch Changes

- 944de94: Added ESLint rule `no-top-level-material-ui-4-imports` to aid with the migration to Material UI v5.

### `@backstage/plugin-badges-backend` (0.3.10 → 0.3.11)

#### 0.3.11

##### Patch Changes

- 29a1f91: Migrated to support new auth services.

### `@backstage/plugin-bazaar` (0.2.22 → 0.2.23)

#### 0.2.23

##### Patch Changes

- b7b0466: Remove the use of the deprecated `customStyles` for `Avatar`
- cb64381: Added an optional ESLint rule - no-top-level-material-ui-4-imports - in bazaar plugin which has an auto fix function to migrate the imports and used it to migrate the Material UI imports for plugins/bazaar

### `@backstage/plugin-bitrise` (0.1.57 → 0.1.58)

#### 0.1.58

##### Patch Changes

- afdee56: Added the `no-top-level-material-ui-4-import` ESLint rule to the Bitrise plugin to aid with the migration to Material UI v5.

### `@backstage/plugin-catalog-backend-module-aws` (0.3.7 → 0.3.8)

#### 0.3.8

##### Patch Changes

- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/plugin-catalog-backend-module-azure` (0.1.32 → 0.1.33)

#### 0.1.33

##### Patch Changes

- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.1.6 → 0.1.7)

#### 0.1.7

##### Patch Changes

- 2bd1410: Removed unused dependencies
- 43a9ae1: Migrated to use new auth service.

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.26 → 0.1.27)

#### 0.1.27

##### Patch Changes

- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/plugin-catalog-backend-module-gerrit` (0.1.29 → 0.1.30)

#### 0.1.30

##### Patch Changes

- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/plugin-catalog-backend-module-github` (0.5.3 → 0.5.4)

#### 0.5.4

##### Patch Changes

- a936a8f: Migrated the `GithubLocationAnalyzer` to support new auth services.
- 999224f: Bump dependency `minimatch` to v9
- 2eb0da3: Support EventsService and events with the new backend system (through EventsService) for `GithubOrgEntityProvider` and `GithubMultiOrgEntityProvider`.

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

- bcf55d5: Support EventsService and events with the new backend system (through EventsService).

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

- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- 9eab52a: Add location analyzer when installing the module

### `@backstage/plugin-catalog-backend-module-github-org` (0.1.7 → 0.1.8)

#### 0.1.8

##### Patch Changes

- 2eb0da3: Support EventsService and events with the new backend system (through EventsService) for `GithubOrgEntityProvider` and `GithubMultiOrgEntityProvider`.

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

### `@backstage/plugin-catalog-backend-module-gitlab` (0.3.10 → 0.3.11)

#### 0.3.11

##### Patch Changes

- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- 9f5b8bc: Add GitLab `visibility` to group entity annotations.

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.17 → 0.4.18)

#### 0.4.18

##### Patch Changes

- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/plugin-catalog-backend-module-ldap` (0.5.28 → 0.5.29)

#### 0.5.29

##### Patch Changes

- 4b4bbf7: Add TLS support to ingest GSuite LDAP data
- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/plugin-catalog-backend-module-msgraph` (0.5.20 → 0.5.21)

#### 0.5.21

##### Patch Changes

- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/plugin-catalog-backend-module-puppetdb` (0.1.18 → 0.1.19)

#### 0.1.19

##### Patch Changes

- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/plugin-catalog-graph` (0.4.0 → 0.4.1)

#### 0.4.1

##### Patch Changes

- d4ff0bb: Added the `no-top-level-material-ui-4-imports` ESLint rule to aid with the migration to Material UI v5

### `@backstage/plugin-catalog-import` (0.10.6 → 0.10.7)

#### 0.10.7

##### Patch Changes

- b91a8d2: Added the `no-top-level-material-ui-4-imports` ESLint rule to aid with the migration to Material UI v5
- 75f686b: Fixed an issue generating a wrong entity link at the end of the import process
- adc0414: fix related to component name not adhering to kubernetes valid object name.

### `@backstage/plugin-cicd-statistics-module-gitlab` (0.1.26 → 0.1.27)

#### 0.1.27

##### Patch Changes

- 402d991: Align `p-limit` dependency version to v3

### `@backstage/plugin-circleci` (0.3.30 → 0.3.31)

#### 0.3.31

##### Patch Changes

- 88878a4: Added an optional ESLint rule - no-top-level-material-ui-4-imports - in CircleCI plugin which has an auto fix function to migrate the imports and used it to migrate the Material UI imports for `plugins/circleci`.

### `@backstage/plugin-cloudbuild` (0.4.0 → 0.4.1)

#### 0.4.1

##### Patch Changes

- 7a5e933: Added an optional ESLint rule - no-top-level-material-ui-4-imports -in cloudbuild plugin which has an auto fix function to migrate the imports and used it to migrate the Material UI imports for plugins/cloudbuild.

### `@backstage/plugin-code-climate` (0.1.30 → 0.1.31)

#### 0.1.31

##### Patch Changes

- 875c594: Added ESLint rule `no-top-level-material-ui-4-imports` in the Code-Climate plugin to migrate the Material UI imports.

### `@backstage/plugin-code-coverage` (0.2.23 → 0.2.24)

#### 0.2.24

##### Patch Changes

- eca0835: Added ESLint rule `no-top-level-material-ui-4-imports` in the Code-Coverage plugin to migrate the Material UI imports.

### `@backstage/plugin-code-coverage-backend` (0.2.27 → 0.2.28)

#### 0.2.28

##### Patch Changes

- 2bd1410: Removed unused dependencies
- 4467036: Allow unauthenticated access to health check endpoint.
- cceebae: Fix jacoco convertor to not require annotation to be set to scm-only.
- 8efe690: Migrated to support new auth services.
- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- 1914e2a: Updated README

### `@backstage/plugin-codescene` (0.1.22 → 0.1.23)

#### 0.1.23

##### Patch Changes

- e477ec4: Extending code scene plugin in Entity page.
- f2d3ea0: Added ESLint rule `no-top-level-material-ui-4-imports` in the Codescene plugin to migrate the Material UI imports.

### `@backstage/plugin-cost-insights` (0.12.19 → 0.12.20)

#### 0.12.20

##### Patch Changes

- 083ba28: Added the `no-top-level-material-ui-4-imports` ESLint rule to aid with the migration to Material UI v5
- 1b4fd09: Updated dependency `yup` to `^1.0.0`.

### `@backstage/plugin-devtools` (0.1.9 → 0.1.10)

#### 0.1.10

##### Patch Changes

- a0e3393: Updated to use `fetchApi` as per [ADR013](https://backstage.io/docs/architecture-decisions/adrs-adr013)
- 8b0026d: Removed unused `devDependencies` identified in Knip Report

### `@backstage/plugin-entity-feedback` (0.2.13 → 0.2.14)

#### 0.2.14

##### Patch Changes

- 96adf78: Remove empty Chip in `FeedbackResponseTable.tsx` when there is no response, and fix typo in Feedback Dialog Box.

### `@backstage/plugin-entity-feedback-backend` (0.2.10 → 0.2.11)

#### 0.2.11

##### Patch Changes

- 45115fd: Add in description for 400 response when encountering an invalid rating request
- 4f8ecd6: Migrated to support new auth services.

### `@backstage/plugin-events-backend-test-utils` (0.1.23 → 0.1.24)

#### 0.1.24

##### Patch Changes

- 56969b6: Add new `EventsService` as well as `eventsServiceRef` for the new backend system.

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

### `@backstage/plugin-explore` (0.4.16 → 0.4.17)

#### 0.4.17

##### Patch Changes

- 053d43f: Added an optional ESLint rule - no-top-level-material-ui-4-imports -in explore plugin which has an auto fix function to migrate the imports and used it to migrate the Material UI imports for plugins/explore.

### `@backstage/plugin-fossa` (0.2.62 → 0.2.63)

#### 0.2.63

##### Patch Changes

- 89cdfad: Adjusted MUI imports for better tree shaking

### `@backstage/plugin-gcalendar` (0.3.23 → 0.3.24)

#### 0.3.24

##### Patch Changes

- 9c9e0a1: Added ESLint rule `no-top-level-material-ui-4-imports` in the `gcalendar` plugin to migrate the Material UI imports.

### `@backstage/plugin-github-actions` (0.6.11 → 0.6.12)

#### 0.6.12

##### Patch Changes

- 8ab3218: Fixed bug in WorkflowRunStatus component where skipped and cancelled workflow runs appeared as success
- 692316d: Fixed bug in WorkflowRunStatus component where status description of skipped and cancelled workflow runs appeared as success

### `@backstage/plugin-github-pull-requests-board` (0.1.24 → 0.1.25)

#### 0.1.25

##### Patch Changes

- 3c2d7c0: The `CardHeader` component in the `github-pull-requests-board` plugin will show the status for the PR
- 402d991: Align `p-limit` dependency version to v3

### `@backstage/plugin-home-react` (0.1.8 → 0.1.9)

#### 0.1.9

##### Patch Changes

- 0cecb09: Updated dependency `@rjsf/utils` to `5.17.1`.
  Updated dependency `@rjsf/core` to `5.17.1`.
  Updated dependency `@rjsf/material-ui` to `5.17.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.17.1`.

### `@backstage/plugin-jenkins` (0.9.5 → 0.9.6)

#### 0.9.6

##### Patch Changes

- 75277ab: Added ESLint rule `no-top-level-material-ui-4-imports` in the Jenkins plugin to migrate the Material UI imports.

### `@backstage/plugin-kafka` (0.3.30 → 0.3.31)

#### 0.3.31

##### Patch Changes

- 3913fd8: Added ESLint rule `no-top-level-material-ui-4-imports` in the Kafka plugin to migrate the Material UI imports.

### `@backstage/plugin-kubernetes` (0.11.5 → 0.11.6)

#### 0.11.6

##### Patch Changes

- 0e1941b: Added an optional ESLint rule - no-top-level-material-ui-4-imports -in kubernetes plugin which has an auto fix function to migrate the imports and used it to migrate the Material UI imports for plugins/kubernetes.

### `@backstage/plugin-kubernetes-common` (0.7.4 → 0.7.5)

#### 0.7.5

##### Patch Changes

- 4642cb7: Add support to fetch data for Daemon Sets and display an accordion in the same way as with Deployments

### `@backstage/plugin-kubernetes-node` (0.1.7 → 0.1.8)

#### 0.1.8

##### Patch Changes

- 69d0217: Accept auth credentials to get kubernetes clusters

### `@backstage/plugin-kubernetes-react` (0.3.0 → 0.3.1)

#### 0.3.1

##### Patch Changes

- 4642cb7: Add support to fetch data for Daemon Sets and display an accordion in the same way as with Deployments

### `@backstage/plugin-lighthouse` (0.4.15 → 0.4.16)

#### 0.4.16

##### Patch Changes

- c4c8476: Added ESLint rule `no-top-level-material-ui-4-imports` in the Lighthouse plugin to migrate the Material UI imports.

### `@backstage/plugin-linguist` (0.1.15 → 0.1.16)

#### 0.1.16

##### Patch Changes

- 4fb9600: Get component's title from translation file. See: https://backstage.io/docs/plugins/internationalization#for-an-application-developer-overwrite-plugin-messages
- a0e3393: Updated to use `fetchApi` as per [ADR013](https://backstage.io/docs/architecture-decisions/adrs-adr013)
- 786c9c4: Updated dependency `luxon` to `^3.0.0`.
- 051fda1: Removed unused `dependencies` and `devDependencies` identified in Knip Report

### `@backstage/plugin-linguist-backend` (0.5.10 → 0.5.11)

#### 0.5.11

##### Patch Changes

- 61ff58f: Migrated to support new auth services.
- 4467036: Allow unauthenticated access to health check endpoint.
- 786c9c4: Updated dependency `luxon` to `^3.0.0`.
- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- 051fda1: Removed unused `dependencies` and `devDependencies` identified in Knip Report

### `@backstage/plugin-nomad-backend` (0.1.15 → 0.1.16)

#### 0.1.16

##### Patch Changes

- 4467036: Allow unauthenticated access to health check endpoint.

### `@backstage/plugin-octopus-deploy` (0.2.12 → 0.2.13)

#### 0.2.13

##### Patch Changes

- a207927: Added dropdown field extension for Octopus Deploy project groups

### `@backstage/plugin-org` (0.6.20 → 0.6.21)

#### 0.6.21

##### Patch Changes

- b7b0466: Remove the use of the deprecated `customStyles` for `Avatar`
- 526f00a: Document the new frontend system extensions for the org plugin.
- 2219f8c: Add `relationsType` argument to `MembersListCard`.
  This can be used to display an aggregated user list for groups by default.
- a767aaa: Fixed an issue where the `OwnershipCard` component failed to scroll properly when used alongside `react-grid-layout`.

### `@backstage/plugin-periskop-backend` (0.2.11 → 0.2.12)

#### 0.2.12

##### Patch Changes

- 4467036: Allow unauthenticated access to health check endpoint.

### `@backstage/plugin-permission-backend` (0.5.36 → 0.5.37)

#### 0.5.37

##### Patch Changes

- 4467036: Allow unauthenticated access to health check endpoint.
- 9802004: Migrated to use the new auth services introduced in [BEP-0003](https://github.com/backstage/backstage/blob/master/beps/0003-auth-architecture-evolution/README.md).

  The `createRouter` function now accepts `auth`, `httpAuth` and `userInfo` options. Theses are used internally to support the new backend system, and can be ignored.

### `@backstage/plugin-permission-common` (0.7.12 → 0.7.13)

#### 0.7.13

##### Patch Changes

- 0502d82: The `token` option of the `PermissionEvaluator` methods is now deprecated. The options that only apply to backend implementations have been moved to `PermissionsService` from `@backstage/backend-plugin-api` instead.
- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/plugin-permission-node` (0.7.24 → 0.7.25)

#### 0.7.25

##### Patch Changes

- 0502d82: The `ServerPermissionClient` has been migrated to implement the `PermissionsService` interface, now accepting the new `BackstageCredentials` object in addition to the `token` option, which is now deprecated. It now also optionally depends on the new `AuthService`.

### `@backstage/plugin-playlist` (0.2.4 → 0.2.5)

#### 0.2.5

##### Patch Changes

- fbb705c: Adjusted MUI imports for better tree shaking.

### `@backstage/plugin-playlist-backend` (0.3.17 → 0.3.18)

#### 0.3.18

##### Patch Changes

- 6813366: Migrated to support new auth services.
- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/plugin-proxy-backend` (0.4.11 → 0.4.12)

#### 0.4.12

##### Patch Changes

- 1b4fd09: Updated dependency `yup` to `^1.0.0`.
- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/plugin-rollbar` (0.4.30 → 0.4.31)

#### 0.4.31

##### Patch Changes

- 2481d8a: Adjusted MUI imports for better tree shaking.

### `@backstage/plugin-scaffolder-backend-module-azure` (0.1.5 → 0.1.6)

#### 0.1.6

##### Patch Changes

- 2bd1410: Removed unused dependencies
- f44589d: Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

### `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.2.3 → 0.2.4)

#### 0.2.4

##### Patch Changes

- 2bd1410: Removed unused dependencies
- f44589d: Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

### `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.1.3 → 0.1.4)

#### 0.1.4

##### Patch Changes

- 2bd1410: Removed unused dependencies
- f44589d: Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

### `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.1.3 → 0.1.4)

#### 0.1.4

##### Patch Changes

- 2bd1410: Removed unused dependencies
- 0e48aaf: Added an option to specify a commit author by adding `gitAuthorName` and `gitAuthorEmail` options to the `publish:bitbucketServer:pull-request` action
- f44589d: Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.14 → 0.2.15)

#### 0.2.15

##### Patch Changes

- f44589d: Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.37 → 0.2.38)

#### 0.2.38

##### Patch Changes

- e9663a9: Move away from using `ctx.logStream`
- f44589d: Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

### `@backstage/plugin-scaffolder-backend-module-gerrit` (0.1.5 → 0.1.6)

#### 0.1.6

##### Patch Changes

- f44589d: Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

### `@backstage/plugin-scaffolder-backend-module-gitea` (0.1.3 → 0.1.4)

#### 0.1.4

##### Patch Changes

- f44589d: Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

- 9f19476: Updated README

### `@backstage/plugin-scaffolder-backend-module-github` (0.2.3 → 0.2.4)

#### 0.2.4

##### Patch Changes

- f44589d: Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

- 35fe005: Export `getOctokitOptions` for easy re-use of Octokit configuration handling
- 1753898: Updated dependency `octokit-plugin-create-pull-request` to `^5.0.0`.

### `@backstage/plugin-scaffolder-backend-module-rails` (0.4.30 → 0.4.31)

#### 0.4.31

##### Patch Changes

- e9663a9: Move away from using `ctx.logStream`
- f44589d: Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

### `@backstage/plugin-scaffolder-backend-module-sentry` (0.1.21 → 0.1.22)

#### 0.1.22

##### Patch Changes

- f44589d: Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.34 → 0.2.35)

#### 0.2.35

##### Patch Changes

- f44589d: Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

### `@backstage/plugin-scaffolder-react` (1.8.0 → 1.8.1)

#### 1.8.1

##### Patch Changes

- 930b5c1: Added 'root' and 'label' class key to TemplateCategoryPicker
- 6d649d2: Updated dependency `flatted` to `3.3.1`.
- 0cecb09: Updated dependency `@rjsf/utils` to `5.17.1`.
  Updated dependency `@rjsf/core` to `5.17.1`.
  Updated dependency `@rjsf/material-ui` to `5.17.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.17.1`.

### `@backstage/plugin-search` (1.4.6 → 1.4.7)

#### 1.4.7

##### Patch Changes

- 70ee3b7: Remove the hardcoded 'black' color give to the search type accordion icon as it doesn't work with dark themes
- f0464b0: Removes ADR from the default set of search filters
- cd872b9: Added ESLint rule `no-top-level-material-ui-4-imports` in the `search` plugin to migrate the Material UI imports.

### `@backstage/plugin-search-backend` (1.5.3 → 1.5.4)

#### 1.5.4

##### Patch Changes

- 2bd1410: Removed unused dependencies
- 744c0cb: Update the router to use the new `auth` services, it now accepts an optional discovery service option to get credentials for the permission service.

### `@backstage/plugin-search-backend-module-catalog` (0.1.17 → 0.1.18)

#### 0.1.18

##### Patch Changes

- bb368a5: Migrated to support new auth services.

### `@backstage/plugin-search-backend-module-elasticsearch` (1.3.16 → 1.3.17)

#### 1.3.17

##### Patch Changes

- 744c0cb: Start importing `QueryTranslator`, `QueryRequestOptions` and `SearchEngine` from the `@backstage/plugin-search-backend-node`.
- e1f73d0: Added config.d.ts entry with secrets for the shared auth block
- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/plugin-search-backend-module-explore` (0.1.17 → 0.1.18)

#### 0.1.18

##### Patch Changes

- bb368a5: Migrated to support new auth services.

### `@backstage/plugin-search-backend-module-pg` (0.5.22 → 0.5.23)

#### 0.5.23

##### Patch Changes

- 744c0cb: Start importing `QueryTranslator`, `QueryRequestOptions` and `SearchEngine` from the `@backstage/plugin-search-backend-node`.
- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/plugin-search-backend-module-techdocs` (0.1.17 → 0.1.18)

#### 0.1.18

##### Patch Changes

- bb368a5: Migrated to support new auth services.

### `@backstage/plugin-search-backend-node` (1.2.17 → 1.2.18)

#### 1.2.18

##### Patch Changes

- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- 744c0cb: Exports `QueryTranslator`, `QueryRequestOptions` and `SearchEngine` types. These new types were extracted from the `@backstage/plugin-search-common` package and the `token` property was deprecated in favor of the a new credentials one.

### `@backstage/plugin-search-common` (1.2.10 → 1.2.11)

#### 1.2.11

##### Patch Changes

- 744c0cb: Deprecate `QueryTranslator`, `QueryRequestOptions` and `SearchEngine` in favor of the types exported from `@backstage/plugin-search-backend-node`.

### `@backstage/plugin-sentry` (0.5.15 → 0.5.16)

#### 0.5.16

##### Patch Changes

- 2df7265: Added ESLint rule `no-top-level-material-ui-4-imports` in the `sentry` plugin to migrate the Material UI imports.

### `@backstage/plugin-shortcuts` (0.3.19 → 0.3.20)

#### 0.3.20

##### Patch Changes

- 26a15f7: Added ESLint rule `no-top-level-material-ui-4-imports` in the `shortcuts` plugin to migrate the Material UI imports.
- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.

### `@backstage/plugin-sonarqube` (0.7.12 → 0.7.13)

#### 0.7.13

##### Patch Changes

- e38b29c: Added ESLint rule `no-top-level-material-ui-4-imports` in the `sonarqube` plugin to migrate the Material UI imports.

### `@backstage/plugin-splunk-on-call` (0.4.19 → 0.4.20)

#### 0.4.20

##### Patch Changes

- 51f814b: Added ESLint rule `no-top-level-material-ui-4-imports` in the `splunk-on-call` plugin to migrate the Material UI imports.

### `@backstage/plugin-stack-overflow` (0.1.25 → 0.1.26)

#### 0.1.26

##### Patch Changes

- c6779ac: fix: fix decode issues in title and author fields in `StackOverflowSearchResultListItem`
- 6429213: Added ESLint rule `no-top-level-material-ui-4-imports` in the `stack-overflow` plugin to migrate the Material UI imports.

### `@backstage/plugin-stackstorm` (0.1.11 → 0.1.12)

#### 0.1.12

##### Patch Changes

- b8234ce: Added ESLint rule `no-top-level-material-ui-4-imports` in the `stackstorm` plugin to migrate the Material UI imports.

### `@backstage/plugin-tech-insights` (0.3.22 → 0.3.23)

#### 0.3.23

##### Patch Changes

- 6aec725: Added ESLint rule `no-top-level-material-ui-4-imports` in the `tech-insights` plugin to migrate the Material UI imports.
- aa66ae0: Added `onlyFailed` prop to `ScorecardsCard`, and `isFailed` to each check type.

### `@backstage/plugin-tech-insights-backend` (0.5.27 → 0.5.28)

#### 0.5.28

##### Patch Changes

- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- d621468: Added support for the new `AuthService`.

### `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.45 → 0.1.46)

#### 0.1.46

##### Patch Changes

- 6ce8c0b: Fixes an invalid line in the schema that was causing AJV to complain.

### `@backstage/plugin-techdocs` (1.10.0 → 1.10.1)

#### 1.10.1

##### Patch Changes

- 7c2d022: Fixed bug in TechDocs sidebar render that prevented scrollbar from being displayed
- 3f14e9f: Implement a client cookie refresh mechanism.
- 62bcaf8: Use the new generic refresh user cookie provider.
- 28f27f0: Added ESLint rule `no-top-level-material-ui-4-imports` to aid with the migration to Material UI v5.

### `@backstage/plugin-techdocs-addons-test-utils` (1.0.27 → 1.0.28)

#### 1.0.28

##### Patch Changes

- 3f14e9f: Mock the new issue user cookie api method.
- 62bcaf8: Use the new generic refresh user cookie provider.

### `@backstage/plugin-todo-backend` (0.3.11 → 0.3.12)

#### 0.3.12

##### Patch Changes

- b65788b: Move @backstage/repo-tools to dev dependencies

### `@backstage/plugin-user-settings` (0.8.1 → 0.8.2)

#### 0.8.2

##### Patch Changes

- ee584af: Added ESLint rule `no-top-level-material-ui-4-imports` in the `user-settings` plugin to migrate the Material UI imports.

### `@backstage/plugin-vault` (0.1.25 → 0.1.26)

#### 0.1.26

##### Patch Changes

- e780d3a: Added ESLint rule `no-top-level-material-ui-4-imports` in the `vault` plugin to migrate the Material UI imports.

### `@backstage/plugin-vault-backend` (0.4.6 → 0.4.7)

#### 0.4.7

##### Patch Changes

- 7277fe2: Removed lock inside recursion to avoid deadlocks
- 4467036: Allow unauthenticated access to health check endpoint.

### `@backstage/plugin-xcmetrics` (0.2.48 → 0.2.49)

#### 0.2.49

##### Patch Changes

- 7984d1e: Fixed bug in XcMetricsClient where it was not including parameter for excludeCI, which is now a required parameter for XCMetrics.
- 9daf301: Added ESLint rule `no-top-level-material-ui-4-imports` in the `xcmetrics` plugin to migrate the Material UI imports.

### `@backstage/theme` (0.5.1 → 0.5.2)

#### 0.5.2

##### Patch Changes

- 6f4d2a0: Exported `defaultTypography` to make adjusting these values in a custom theme easier

### `@techdocs/cli` (1.8.5 → 1.8.6)

#### 1.8.6

##### Patch Changes

- 1bd4596: Removed the `ts-node` dev dependency.

## Excluded dependency updates for packages

- `@backstage/app-defaults`
- `@backstage/catalog-model`
- `@backstage/cli-node`
- `@backstage/core-app-api`
- `@backstage/core-compat-api`
- `@backstage/core-plugin-api`
- `@backstage/dev-utils`
- `@backstage/frontend-plugin-api`
- `@backstage/frontend-test-utils`
- `@backstage/integration-aws-node`
- `@backstage/plugin-allure`
- `@backstage/plugin-analytics-module-ga`
- `@backstage/plugin-analytics-module-ga4`
- `@backstage/plugin-analytics-module-newrelic-browser`
- `@backstage/plugin-app-node`
- `@backstage/plugin-app-visualizer`
- `@backstage/plugin-auth-backend-module-github-provider`
- `@backstage/plugin-auth-backend-module-gitlab-provider`
- `@backstage/plugin-auth-backend-module-oauth2-provider`
- `@backstage/plugin-auth-backend-module-okta-provider`
- `@backstage/plugin-azure-sites-common`
- `@backstage/plugin-bazaar-backend`
- `@backstage/plugin-bitbucket-cloud-common`
- `@backstage/plugin-catalog-backend-module-gcp`
- `@backstage/plugin-catalog-backend-module-openapi`
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model`
- `@backstage/plugin-catalog-common`
- `@backstage/plugin-cicd-statistics`
- `@backstage/plugin-config-schema`
- `@backstage/plugin-devtools-common`
- `@backstage/plugin-entity-validation`
- `@backstage/plugin-explore-backend`
- `@backstage/plugin-explore-react`
- `@backstage/plugin-firehydrant`
- `@backstage/plugin-gcp-projects`
- `@backstage/plugin-git-release-manager`
- `@backstage/plugin-github-deployments`
- `@backstage/plugin-github-issues`
- `@backstage/plugin-gitops-profiles`
- `@backstage/plugin-gocd`
- `@backstage/plugin-graphiql`
- `@backstage/plugin-graphql-voyager`
- `@backstage/plugin-ilert`
- `@backstage/plugin-jenkins-common`
- `@backstage/plugin-kafka-backend`
- `@backstage/plugin-kubernetes-cluster`
- `@backstage/plugin-lighthouse-common`
- `@backstage/plugin-microsoft-calendar`
- `@backstage/plugin-newrelic`
- `@backstage/plugin-newrelic-dashboard`
- `@backstage/plugin-nomad`
- `@backstage/plugin-opencost`
- `@backstage/plugin-org-react`
- `@backstage/plugin-pagerduty`
- `@backstage/plugin-periskop`
- `@backstage/plugin-permission-backend-module-allow-all-policy`
- `@backstage/plugin-permission-react`
- `@backstage/plugin-playlist-common`
- `@backstage/plugin-puppetdb`
- `@backstage/plugin-rollbar-backend`
- `@backstage/plugin-scaffolder-common`
- `@backstage/plugin-search-backend-module-stack-overflow-collator`
- `@backstage/plugin-search-react`
- `@backstage/plugin-signals-react`
- `@backstage/plugin-sonarqube-backend`
- `@backstage/plugin-sonarqube-react`
- `@backstage/plugin-stack-overflow-backend`
- `@backstage/plugin-techdocs-module-addons-contrib`
- `@backstage/plugin-todo`
- `@backstage/plugin-user-settings-backend`
- `@backstage/plugin-vault-node`
- `@backstage/test-utils`
