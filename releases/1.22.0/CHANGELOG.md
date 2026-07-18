# Backstage Release 1.22.0 changelog

Changes between 1.21.1 and 1.22.0 — 226 changed and 2 added packages.

## Summary

- [Newly added packages](#newly-added-packages): 2 packages
- [Breaking changes](#breaking-changes): 2 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 1 package
- [0.0.x patch version bumps](#00x-patch-version-bumps): 5 packages
- [Other minor version bumps](#other-minor-version-bumps): 1 package
- [Other patch version bumps](#other-patch-version-bumps): 167 packages
- [Excluded dependency updates](#excluded-dependency-updates): 50 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/backend-dynamic-feature-service` (new, 0.1.0)](#backstagebackend-dynamic-feature-service-new-010)
  - [`@backstage/plugin-app-visualizer` (new, 0.1.0)](#backstageplugin-app-visualizer-new-010)
- [Breaking changes](#breaking-changes)
  - [`@backstage/frontend-app-api` (0.4.0 → 0.5.0)](#backstagefrontend-app-api-040--050)
  - [`@backstage/frontend-plugin-api` (0.4.0 → 0.5.0)](#backstagefrontend-plugin-api-040--050)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/plugin-user-settings` (0.7.14 → 0.8.0)](#backstageplugin-user-settings-0714--080)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-analytics-module-newrelic-browser` (0.0.5 → 0.0.6)](#backstageplugin-analytics-module-newrelic-browser-005--006)
  - [`@backstage/plugin-auth-backend-module-okta-provider` (0.0.1 → 0.0.2)](#backstageplugin-auth-backend-module-okta-provider-001--002)
  - [`@backstage/plugin-explore-backend` (0.0.18 → 0.0.19)](#backstageplugin-explore-backend-0018--0019)
  - [`@backstage/plugin-explore-react` (0.0.34 → 0.0.35)](#backstageplugin-explore-react-0034--0035)
  - [`@backstage/plugin-kubernetes-cluster` (0.0.4 → 0.0.5)](#backstageplugin-kubernetes-cluster-004--005)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/plugin-scaffolder-backend` (1.19.2 → 1.20.0)](#backstageplugin-scaffolder-backend-1192--1200)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-app-api` (0.5.9 → 0.5.10)](#backstagebackend-app-api-059--0510)
  - [`@backstage/backend-common` (0.20.0 → 0.20.1)](#backstagebackend-common-0200--0201)
  - [`@backstage/backend-defaults` (0.2.8 → 0.2.9)](#backstagebackend-defaults-028--029)
  - [`@backstage/backend-dev-utils` (0.1.2 → 0.1.3)](#backstagebackend-dev-utils-012--013)
  - [`@backstage/backend-openapi-utils` (0.1.1 → 0.1.2)](#backstagebackend-openapi-utils-011--012)
  - [`@backstage/backend-plugin-api` (0.6.8 → 0.6.9)](#backstagebackend-plugin-api-068--069)
  - [`@backstage/catalog-client` (1.5.1 → 1.5.2)](#backstagecatalog-client-151--152)
  - [`@backstage/cli` (0.25.0 → 0.25.1)](#backstagecli-0250--0251)
  - [`@backstage/cli-node` (0.2.1 → 0.2.2)](#backstagecli-node-021--022)
  - [`@backstage/config-loader` (1.6.0 → 1.6.1)](#backstageconfig-loader-160--161)
  - [`@backstage/core-compat-api` (0.1.0 → 0.1.1)](#backstagecore-compat-api-010--011)
  - [`@backstage/core-components` (0.13.9 → 0.13.10)](#backstagecore-components-0139--01310)
  - [`@backstage/core-plugin-api` (1.8.1 → 1.8.2)](#backstagecore-plugin-api-181--182)
  - [`@backstage/create-app` (0.5.8 → 0.5.9)](#backstagecreate-app-058--059)
  - [`@backstage/frontend-test-utils` (0.1.0 → 0.1.1)](#backstagefrontend-test-utils-010--011)
  - [`@backstage/plugin-adr` (0.6.11 → 0.6.12)](#backstageplugin-adr-0611--0612)
  - [`@backstage/plugin-adr-backend` (0.4.5 → 0.4.6)](#backstageplugin-adr-backend-045--046)
  - [`@backstage/plugin-airbrake` (0.3.28 → 0.3.29)](#backstageplugin-airbrake-0328--0329)
  - [`@backstage/plugin-airbrake-backend` (0.3.5 → 0.3.6)](#backstageplugin-airbrake-backend-035--036)
  - [`@backstage/plugin-allure` (0.1.44 → 0.1.45)](#backstageplugin-allure-0144--0145)
  - [`@backstage/plugin-analytics-module-ga` (0.1.36 → 0.1.37)](#backstageplugin-analytics-module-ga-0136--0137)
  - [`@backstage/plugin-analytics-module-ga4` (0.1.7 → 0.1.8)](#backstageplugin-analytics-module-ga4-017--018)
  - [`@backstage/plugin-apache-airflow` (0.2.18 → 0.2.19)](#backstageplugin-apache-airflow-0218--0219)
  - [`@backstage/plugin-api-docs` (0.10.2 → 0.10.3)](#backstageplugin-api-docs-0102--0103)
  - [`@backstage/plugin-apollo-explorer` (0.1.18 → 0.1.19)](#backstageplugin-apollo-explorer-0118--0119)
  - [`@backstage/plugin-app-backend` (0.3.56 → 0.3.57)](#backstageplugin-app-backend-0356--0357)
  - [`@backstage/plugin-auth-backend` (0.20.2 → 0.20.3)](#backstageplugin-auth-backend-0202--0203)
  - [`@backstage/plugin-auth-backend-module-atlassian-provider` (0.1.0 → 0.1.1)](#backstageplugin-auth-backend-module-atlassian-provider-010--011)
  - [`@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.2.2 → 0.2.3)](#backstageplugin-auth-backend-module-gcp-iap-provider-022--023)
  - [`@backstage/plugin-auth-backend-module-github-provider` (0.1.5 → 0.1.6)](#backstageplugin-auth-backend-module-github-provider-015--016)
  - [`@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.5 → 0.1.6)](#backstageplugin-auth-backend-module-gitlab-provider-015--016)
  - [`@backstage/plugin-auth-backend-module-google-provider` (0.1.5 → 0.1.6)](#backstageplugin-auth-backend-module-google-provider-015--016)
  - [`@backstage/plugin-auth-backend-module-microsoft-provider` (0.1.3 → 0.1.4)](#backstageplugin-auth-backend-module-microsoft-provider-013--014)
  - [`@backstage/plugin-auth-backend-module-oauth2-provider` (0.1.5 → 0.1.6)](#backstageplugin-auth-backend-module-oauth2-provider-015--016)
  - [`@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.1.0 → 0.1.1)](#backstageplugin-auth-backend-module-oauth2-proxy-provider-010--011)
  - [`@backstage/plugin-auth-backend-module-pinniped-provider` (0.1.2 → 0.1.3)](#backstageplugin-auth-backend-module-pinniped-provider-012--013)
  - [`@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.1.0 → 0.1.1)](#backstageplugin-auth-backend-module-vmware-cloud-provider-010--011)
  - [`@backstage/plugin-azure-devops` (0.3.10 → 0.3.11)](#backstageplugin-azure-devops-0310--0311)
  - [`@backstage/plugin-azure-devops-backend` (0.5.0 → 0.5.1)](#backstageplugin-azure-devops-backend-050--051)
  - [`@backstage/plugin-azure-sites` (0.1.17 → 0.1.18)](#backstageplugin-azure-sites-0117--0118)
  - [`@backstage/plugin-azure-sites-backend` (0.1.18 → 0.1.19)](#backstageplugin-azure-sites-backend-0118--0119)
  - [`@backstage/plugin-badges` (0.2.52 → 0.2.53)](#backstageplugin-badges-0252--0253)
  - [`@backstage/plugin-badges-backend` (0.3.5 → 0.3.6)](#backstageplugin-badges-backend-035--036)
  - [`@backstage/plugin-bazaar` (0.2.20 → 0.2.21)](#backstageplugin-bazaar-0220--0221)
  - [`@backstage/plugin-bazaar-backend` (0.3.6 → 0.3.7)](#backstageplugin-bazaar-backend-036--037)
  - [`@backstage/plugin-bitrise` (0.1.55 → 0.1.56)](#backstageplugin-bitrise-0155--0156)
  - [`@backstage/plugin-catalog` (1.16.0 → 1.16.1)](#backstageplugin-catalog-1160--1161)
  - [`@backstage/plugin-catalog-backend` (1.16.0 → 1.16.1)](#backstageplugin-catalog-backend-1160--1161)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.3.2 → 0.3.3)](#backstageplugin-catalog-backend-module-aws-032--033)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.1.27 → 0.1.28)](#backstageplugin-catalog-backend-module-azure-0127--0128)
  - [`@backstage/plugin-catalog-backend-module-backstage-openapi` (0.1.1 → 0.1.2)](#backstageplugin-catalog-backend-module-backstage-openapi-011--012)
  - [`@backstage/plugin-catalog-backend-module-bitbucket` (0.2.23 → 0.2.24)](#backstageplugin-catalog-backend-module-bitbucket-0223--0224)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (0.1.24 → 0.1.25)](#backstageplugin-catalog-backend-module-gerrit-0124--0125)
  - [`@backstage/plugin-catalog-backend-module-openapi` (0.1.25 → 0.1.26)](#backstageplugin-catalog-backend-module-openapi-0125--0126)
  - [`@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.5 → 0.1.6)](#backstageplugin-catalog-backend-module-scaffolder-entity-model-015--016)
  - [`@backstage/plugin-catalog-graph` (0.3.2 → 0.3.3)](#backstageplugin-catalog-graph-032--033)
  - [`@backstage/plugin-catalog-node` (1.6.0 → 1.6.1)](#backstageplugin-catalog-node-160--161)
  - [`@backstage/plugin-catalog-react` (1.9.2 → 1.9.3)](#backstageplugin-catalog-react-192--193)
  - [`@backstage/plugin-catalog-unprocessed-entities` (0.1.6 → 0.1.7)](#backstageplugin-catalog-unprocessed-entities-016--017)
  - [`@backstage/plugin-circleci` (0.3.28 → 0.3.29)](#backstageplugin-circleci-0328--0329)
  - [`@backstage/plugin-cloudbuild` (0.3.28 → 0.3.29)](#backstageplugin-cloudbuild-0328--0329)
  - [`@backstage/plugin-code-climate` (0.1.28 → 0.1.29)](#backstageplugin-code-climate-0128--0129)
  - [`@backstage/plugin-code-coverage` (0.2.21 → 0.2.22)](#backstageplugin-code-coverage-0221--0222)
  - [`@backstage/plugin-code-coverage-backend` (0.2.22 → 0.2.23)](#backstageplugin-code-coverage-backend-0222--0223)
  - [`@backstage/plugin-codescene` (0.1.20 → 0.1.21)](#backstageplugin-codescene-0120--0121)
  - [`@backstage/plugin-config-schema` (0.1.48 → 0.1.49)](#backstageplugin-config-schema-0148--0149)
  - [`@backstage/plugin-cost-insights` (0.12.17 → 0.12.18)](#backstageplugin-cost-insights-01217--01218)
  - [`@backstage/plugin-devtools` (0.1.7 → 0.1.8)](#backstageplugin-devtools-017--018)
  - [`@backstage/plugin-devtools-backend` (0.2.5 → 0.2.6)](#backstageplugin-devtools-backend-025--026)
  - [`@backstage/plugin-dynatrace` (8.0.2 → 8.0.3)](#backstageplugin-dynatrace-802--803)
  - [`@backstage/plugin-entity-feedback` (0.2.11 → 0.2.12)](#backstageplugin-entity-feedback-0211--0212)
  - [`@backstage/plugin-entity-feedback-backend` (0.2.5 → 0.2.6)](#backstageplugin-entity-feedback-backend-025--026)
  - [`@backstage/plugin-entity-validation` (0.1.13 → 0.1.14)](#backstageplugin-entity-validation-0113--0114)
  - [`@backstage/plugin-events-backend` (0.2.17 → 0.2.18)](#backstageplugin-events-backend-0217--0218)
  - [`@backstage/plugin-events-backend-module-aws-sqs` (0.2.11 → 0.2.12)](#backstageplugin-events-backend-module-aws-sqs-0211--0212)
  - [`@backstage/plugin-events-backend-module-azure` (0.1.18 → 0.1.19)](#backstageplugin-events-backend-module-azure-0118--0119)
  - [`@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.18 → 0.1.19)](#backstageplugin-events-backend-module-bitbucket-cloud-0118--0119)
  - [`@backstage/plugin-events-backend-module-gerrit` (0.1.18 → 0.1.19)](#backstageplugin-events-backend-module-gerrit-0118--0119)
  - [`@backstage/plugin-events-backend-module-github` (0.1.18 → 0.1.19)](#backstageplugin-events-backend-module-github-0118--0119)
  - [`@backstage/plugin-events-backend-module-gitlab` (0.1.18 → 0.1.19)](#backstageplugin-events-backend-module-gitlab-0118--0119)
  - [`@backstage/plugin-explore` (0.4.14 → 0.4.15)](#backstageplugin-explore-0414--0415)
  - [`@backstage/plugin-firehydrant` (0.2.12 → 0.2.13)](#backstageplugin-firehydrant-0212--0213)
  - [`@backstage/plugin-fossa` (0.2.60 → 0.2.61)](#backstageplugin-fossa-0260--0261)
  - [`@backstage/plugin-gcalendar` (0.3.21 → 0.3.22)](#backstageplugin-gcalendar-0321--0322)
  - [`@backstage/plugin-gcp-projects` (0.3.44 → 0.3.45)](#backstageplugin-gcp-projects-0344--0345)
  - [`@backstage/plugin-git-release-manager` (0.3.40 → 0.3.41)](#backstageplugin-git-release-manager-0340--0341)
  - [`@backstage/plugin-github-actions` (0.6.9 → 0.6.10)](#backstageplugin-github-actions-069--0610)
  - [`@backstage/plugin-github-deployments` (0.1.59 → 0.1.60)](#backstageplugin-github-deployments-0159--0160)
  - [`@backstage/plugin-github-issues` (0.2.17 → 0.2.18)](#backstageplugin-github-issues-0217--0218)
  - [`@backstage/plugin-github-pull-requests-board` (0.1.22 → 0.1.23)](#backstageplugin-github-pull-requests-board-0122--0123)
  - [`@backstage/plugin-gitops-profiles` (0.3.43 → 0.3.44)](#backstageplugin-gitops-profiles-0343--0344)
  - [`@backstage/plugin-gocd` (0.1.34 → 0.1.35)](#backstageplugin-gocd-0134--0135)
  - [`@backstage/plugin-graphiql` (0.3.1 → 0.3.2)](#backstageplugin-graphiql-031--032)
  - [`@backstage/plugin-graphql-voyager` (0.1.10 → 0.1.11)](#backstageplugin-graphql-voyager-0110--0111)
  - [`@backstage/plugin-home` (0.6.0 → 0.6.1)](#backstageplugin-home-060--061)
  - [`@backstage/plugin-home-react` (0.1.6 → 0.1.7)](#backstageplugin-home-react-016--017)
  - [`@backstage/plugin-ilert` (0.2.17 → 0.2.18)](#backstageplugin-ilert-0217--0218)
  - [`@backstage/plugin-jenkins` (0.9.3 → 0.9.4)](#backstageplugin-jenkins-093--094)
  - [`@backstage/plugin-jenkins-backend` (0.3.2 → 0.3.3)](#backstageplugin-jenkins-backend-032--033)
  - [`@backstage/plugin-kafka` (0.3.28 → 0.3.29)](#backstageplugin-kafka-0328--0329)
  - [`@backstage/plugin-kafka-backend` (0.3.6 → 0.3.7)](#backstageplugin-kafka-backend-036--037)
  - [`@backstage/plugin-kubernetes` (0.11.3 → 0.11.4)](#backstageplugin-kubernetes-0113--0114)
  - [`@backstage/plugin-kubernetes-common` (0.7.2 → 0.7.3)](#backstageplugin-kubernetes-common-072--073)
  - [`@backstage/plugin-kubernetes-react` (0.2.0 → 0.2.1)](#backstageplugin-kubernetes-react-020--021)
  - [`@backstage/plugin-lighthouse` (0.4.13 → 0.4.14)](#backstageplugin-lighthouse-0413--0414)
  - [`@backstage/plugin-linguist` (0.1.13 → 0.1.14)](#backstageplugin-linguist-0113--0114)
  - [`@backstage/plugin-linguist-backend` (0.5.5 → 0.5.6)](#backstageplugin-linguist-backend-055--056)
  - [`@backstage/plugin-microsoft-calendar` (0.1.10 → 0.1.11)](#backstageplugin-microsoft-calendar-0110--0111)
  - [`@backstage/plugin-newrelic` (0.3.43 → 0.3.44)](#backstageplugin-newrelic-0343--0344)
  - [`@backstage/plugin-newrelic-dashboard` (0.3.3 → 0.3.4)](#backstageplugin-newrelic-dashboard-033--034)
  - [`@backstage/plugin-nomad` (0.1.9 → 0.1.10)](#backstageplugin-nomad-019--0110)
  - [`@backstage/plugin-nomad-backend` (0.1.10 → 0.1.11)](#backstageplugin-nomad-backend-0110--0111)
  - [`@backstage/plugin-octopus-deploy` (0.2.10 → 0.2.11)](#backstageplugin-octopus-deploy-0210--0211)
  - [`@backstage/plugin-opencost` (0.2.3 → 0.2.4)](#backstageplugin-opencost-023--024)
  - [`@backstage/plugin-org` (0.6.18 → 0.6.19)](#backstageplugin-org-0618--0619)
  - [`@backstage/plugin-org-react` (0.1.17 → 0.1.18)](#backstageplugin-org-react-0117--0118)
  - [`@backstage/plugin-pagerduty` (0.7.0 → 0.7.1)](#backstageplugin-pagerduty-070--071)
  - [`@backstage/plugin-periskop` (0.1.26 → 0.1.27)](#backstageplugin-periskop-0126--0127)
  - [`@backstage/plugin-periskop-backend` (0.2.6 → 0.2.7)](#backstageplugin-periskop-backend-026--027)
  - [`@backstage/plugin-permission-backend` (0.5.31 → 0.5.32)](#backstageplugin-permission-backend-0531--0532)
  - [`@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.5 → 0.1.6)](#backstageplugin-permission-backend-module-allow-all-policy-015--016)
  - [`@backstage/plugin-permission-common` (0.7.11 → 0.7.12)](#backstageplugin-permission-common-0711--0712)
  - [`@backstage/plugin-permission-node` (0.7.19 → 0.7.20)](#backstageplugin-permission-node-0719--0720)
  - [`@backstage/plugin-permission-react` (0.4.18 → 0.4.19)](#backstageplugin-permission-react-0418--0419)
  - [`@backstage/plugin-playlist` (0.2.2 → 0.2.3)](#backstageplugin-playlist-022--023)
  - [`@backstage/plugin-playlist-backend` (0.3.12 → 0.3.13)](#backstageplugin-playlist-backend-0312--0313)
  - [`@backstage/plugin-puppetdb` (0.1.11 → 0.1.12)](#backstageplugin-puppetdb-0111--0112)
  - [`@backstage/plugin-rollbar` (0.4.28 → 0.4.29)](#backstageplugin-rollbar-0428--0429)
  - [`@backstage/plugin-scaffolder` (1.17.0 → 1.17.1)](#backstageplugin-scaffolder-1170--1171)
  - [`@backstage/plugin-scaffolder-backend-module-azure` (0.1.0 → 0.1.1)](#backstageplugin-scaffolder-backend-module-azure-010--011)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket` (0.1.0 → 0.1.1)](#backstageplugin-scaffolder-backend-module-bitbucket-010--011)
  - [`@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.9 → 0.2.10)](#backstageplugin-scaffolder-backend-module-confluence-to-markdown-029--0210)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.32 → 0.2.33)](#backstageplugin-scaffolder-backend-module-cookiecutter-0232--0233)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.1.0 → 0.1.1)](#backstageplugin-scaffolder-backend-module-github-010--011)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.2.11 → 0.2.12)](#backstageplugin-scaffolder-backend-module-gitlab-0211--0212)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.29 → 0.2.30)](#backstageplugin-scaffolder-backend-module-yeoman-0229--0230)
  - [`@backstage/plugin-scaffolder-common` (1.4.4 → 1.4.5)](#backstageplugin-scaffolder-common-144--145)
  - [`@backstage/plugin-scaffolder-react` (1.7.0 → 1.7.1)](#backstageplugin-scaffolder-react-170--171)
  - [`@backstage/plugin-search` (1.4.4 → 1.4.5)](#backstageplugin-search-144--145)
  - [`@backstage/plugin-search-backend` (1.4.8 → 1.4.9)](#backstageplugin-search-backend-148--149)
  - [`@backstage/plugin-search-backend-module-catalog` (0.1.12 → 0.1.13)](#backstageplugin-search-backend-module-catalog-0112--0113)
  - [`@backstage/plugin-search-backend-module-explore` (0.1.12 → 0.1.13)](#backstageplugin-search-backend-module-explore-0112--0113)
  - [`@backstage/plugin-search-backend-module-stack-overflow-collator` (0.1.1 → 0.1.2)](#backstageplugin-search-backend-module-stack-overflow-collator-011--012)
  - [`@backstage/plugin-search-backend-module-techdocs` (0.1.12 → 0.1.13)](#backstageplugin-search-backend-module-techdocs-0112--0113)
  - [`@backstage/plugin-sentry` (0.5.13 → 0.5.14)](#backstageplugin-sentry-0513--0514)
  - [`@backstage/plugin-shortcuts` (0.3.17 → 0.3.18)](#backstageplugin-shortcuts-0317--0318)
  - [`@backstage/plugin-sonarqube` (0.7.10 → 0.7.11)](#backstageplugin-sonarqube-0710--0711)
  - [`@backstage/plugin-sonarqube-backend` (0.2.10 → 0.2.11)](#backstageplugin-sonarqube-backend-0210--0211)
  - [`@backstage/plugin-splunk-on-call` (0.4.17 → 0.4.18)](#backstageplugin-splunk-on-call-0417--0418)
  - [`@backstage/plugin-stack-overflow` (0.1.23 → 0.1.24)](#backstageplugin-stack-overflow-0123--0124)
  - [`@backstage/plugin-stack-overflow-backend` (0.2.12 → 0.2.13)](#backstageplugin-stack-overflow-backend-0212--0213)
  - [`@backstage/plugin-stackstorm` (0.1.9 → 0.1.10)](#backstageplugin-stackstorm-019--0110)
  - [`@backstage/plugin-tech-insights` (0.3.20 → 0.3.21)](#backstageplugin-tech-insights-0320--0321)
  - [`@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.40 → 0.1.41)](#backstageplugin-tech-insights-backend-module-jsonfc-0140--0141)
  - [`@backstage/plugin-tech-insights-node` (0.4.14 → 0.4.15)](#backstageplugin-tech-insights-node-0414--0415)
  - [`@backstage/plugin-tech-radar` (0.6.11 → 0.6.12)](#backstageplugin-tech-radar-0611--0612)
  - [`@backstage/plugin-techdocs` (1.9.2 → 1.9.3)](#backstageplugin-techdocs-192--193)
  - [`@backstage/plugin-techdocs-addons-test-utils` (1.0.25 → 1.0.26)](#backstageplugin-techdocs-addons-test-utils-1025--1026)
  - [`@backstage/plugin-techdocs-backend` (1.9.1 → 1.9.2)](#backstageplugin-techdocs-backend-191--192)
  - [`@backstage/plugin-techdocs-module-addons-contrib` (1.1.3 → 1.1.4)](#backstageplugin-techdocs-module-addons-contrib-113--114)
  - [`@backstage/plugin-techdocs-react` (1.1.14 → 1.1.15)](#backstageplugin-techdocs-react-1114--1115)
  - [`@backstage/plugin-todo` (0.2.32 → 0.2.33)](#backstageplugin-todo-0232--0233)
  - [`@backstage/plugin-todo-backend` (0.3.6 → 0.3.7)](#backstageplugin-todo-backend-036--037)
  - [`@backstage/plugin-user-settings-backend` (0.2.7 → 0.2.8)](#backstageplugin-user-settings-backend-027--028)
  - [`@backstage/plugin-vault` (0.1.23 → 0.1.24)](#backstageplugin-vault-0123--0124)
  - [`@backstage/plugin-xcmetrics` (0.2.46 → 0.2.47)](#backstageplugin-xcmetrics-0246--0247)
  - [`@backstage/repo-tools` (0.5.1 → 0.5.2)](#backstagerepo-tools-051--052)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/backend-dynamic-feature-service` (new, [0.1.0](../../changelogs/@backstage/backend-dynamic-feature-service.md#010))

#### 0.1.0

##### Minor Changes

- [`eb81f42`](https://github.com/backstage/backstage/commit/eb81f42): New `backend-dynamic-feature-service` package, for the discovery of dynamic frontend and backend plugins (and modules) and the loading of the backend ones inside the backend application.

### `@backstage/plugin-app-visualizer` (new, [0.1.0](../../changelogs/@backstage/plugin-app-visualizer.md#010))

#### 0.1.0

##### Minor Changes

- [`e57cc9f`](https://github.com/backstage/backstage/commit/e57cc9f): Initial release of the app visualizer plugin.

## Breaking changes

### `@backstage/frontend-app-api` (0.4.0 → [0.5.0](../../changelogs/@backstage/frontend-app-api.md#050))

#### 0.5.0

##### Minor Changes

- [`d4149bf`](https://github.com/backstage/backstage/commit/d4149bf): **BREAKING**: Renamed the `app/router` extension to `app/root`.
- [`074dfe3`](https://github.com/backstage/backstage/commit/074dfe3): Attaching extensions to an input that does not exist is now a warning rather than an error.

##### Patch Changes

- [`7d63b32`](https://github.com/backstage/backstage/commit/7d63b32): Accepts sub route refs on the new `createPlugin` routes map.
- [`516fd3e`](https://github.com/backstage/backstage/commit/516fd3e): Updated README to reflect release status
- [`c97fa1c`](https://github.com/backstage/backstage/commit/c97fa1c): Added `elements`, `wrappers`, and `router` inputs to `app/root`, that let you add things to the root of the React tree above the layout. You can use the `createAppRootElementExtension`, `createAppRootWrapperExtension`, and `createRouterExtension` extension creator, respectively, to conveniently create such extensions. These are all optional, and if you do not supply a router a default one will be used (`BrowserRouter` in regular runs, `MemoryRouter` in tests/CI).
- [`5fe6600`](https://github.com/backstage/backstage/commit/5fe6600): add oauth dialog and alert display to the root elements

### `@backstage/frontend-plugin-api` (0.4.0 → [0.5.0](../../changelogs/@backstage/frontend-plugin-api.md#050))

#### 0.5.0

##### Minor Changes

- [`d4149bf`](https://github.com/backstage/backstage/commit/d4149bf): **BREAKING**: Renamed the `app/router` extension to `app/root`.

##### Patch Changes

- [`b2d370e`](https://github.com/backstage/backstage/commit/b2d370e): Exposed `createComponentRef`, and ensured that produced refs and feature bits have a `toString` for easier debugging
- [`7d63b32`](https://github.com/backstage/backstage/commit/7d63b32): Accepts sub route refs on the new `createPlugin` routes map.
- [`516fd3e`](https://github.com/backstage/backstage/commit/516fd3e): Updated README to reflect release status
- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies
- [`c97fa1c`](https://github.com/backstage/backstage/commit/c97fa1c): Added `elements`, `wrappers`, and `router` inputs to `app/root`, that let you add things to the root of the React tree above the layout. You can use the `createAppRootElementExtension`, `createAppRootWrapperExtension`, and `createRouterExtension` extension creator, respectively, to conveniently create such extensions. These are all optional, and if you do not supply a router a default one will be used (`BrowserRouter` in regular runs, `MemoryRouter` in tests/CI).

## 0.x minor version bumps

### `@backstage/plugin-user-settings` (0.7.14 → [0.8.0](../../changelogs/@backstage/plugin-user-settings.md#080))

#### 0.8.0

##### Minor Changes

- [`56b2fb0`](https://github.com/backstage/backstage/commit/56b2fb0): Updated the user settings selector to use a select component that displays native language names instead of language codes if possible.

##### Patch Changes

- [`eea0849`](https://github.com/backstage/backstage/commit/eea0849): add user-settings declarative integration core nav item
- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

## 0.0.x patch version bumps

### `@backstage/plugin-analytics-module-newrelic-browser` (0.0.5 → [0.0.6](../../changelogs/@backstage/plugin-analytics-module-newrelic-browser.md#006))

#### 0.0.6

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-auth-backend-module-okta-provider` (0.0.1 → [0.0.2](../../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#002))

#### 0.0.2

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-explore-backend` (0.0.18 → [0.0.19](../../changelogs/@backstage/plugin-explore-backend.md#0019))

#### 0.0.19

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-explore-react` (0.0.34 → [0.0.35](../../changelogs/@backstage/plugin-explore-react.md#0035))

#### 0.0.35

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-kubernetes-cluster` (0.0.4 → [0.0.5](../../changelogs/@backstage/plugin-kubernetes-cluster.md#005))

#### 0.0.5

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

## Other minor version bumps

### `@backstage/plugin-scaffolder-backend` (1.19.2 → [1.20.0](../../changelogs/@backstage/plugin-scaffolder-backend.md#1200))

#### 1.20.0

##### Minor Changes

- [`a694f71`](https://github.com/backstage/backstage/commit/a694f71): The Scaffolder builtin actions now contains an action for running pipelines from Bitbucket Cloud Rest API
- [`7c522c5`](https://github.com/backstage/backstage/commit/7c522c5): Add `gitlab:repo:push` scaffolder action to push files to arbitrary branch without creating a Merge Request

##### Patch Changes

- [`e9ab1c4`](https://github.com/backstage/backstage/commit/e9ab1c4): Fixed an issue where not passing a `value` to any of the action's permission conditions caused an error.

## Other patch version bumps

### `@backstage/backend-app-api` (0.5.9 → [0.5.10](../../changelogs/@backstage/backend-app-api.md#0510))

#### 0.5.10

##### Patch Changes

- [`516fd3e`](https://github.com/backstage/backstage/commit/516fd3e): Updated README to reflect release status

### `@backstage/backend-common` (0.20.0 → [0.20.1](../../changelogs/@backstage/backend-common.md#0201))

#### 0.20.1

##### Patch Changes

- [`3b24eae`](https://github.com/backstage/backstage/commit/3b24eae): Adding support for removing file from git index
- [`454d17c`](https://github.com/backstage/backstage/commit/454d17c): Do not call fetch directly but rather use `fetchResponse` facility
- [`b6b15b2`](https://github.com/backstage/backstage/commit/b6b15b2): Use sha256 instead of md5 for hash key calculation in caches

  This can have a side effect of invalidating caches (when cache key was >250 characters)
  This improves compliance with FIPS nodejs

### `@backstage/backend-defaults` (0.2.8 → [0.2.9](../../changelogs/@backstage/backend-defaults.md#029))

#### 0.2.9

##### Patch Changes

- [`516fd3e`](https://github.com/backstage/backstage/commit/516fd3e): Updated README to reflect release status

### `@backstage/backend-dev-utils` (0.1.2 → [0.1.3](../../changelogs/@backstage/backend-dev-utils.md#013))

#### 0.1.3

##### Patch Changes

- [`516fd3e`](https://github.com/backstage/backstage/commit/516fd3e): Updated README to reflect release status

### `@backstage/backend-openapi-utils` (0.1.1 → [0.1.2](../../changelogs/@backstage/backend-openapi-utils.md#012))

#### 0.1.2

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/backend-plugin-api` (0.6.8 → [0.6.9](../../changelogs/@backstage/backend-plugin-api.md#069))

#### 0.6.9

##### Patch Changes

- [`516fd3e`](https://github.com/backstage/backstage/commit/516fd3e): Updated README to reflect release status

### `@backstage/catalog-client` (1.5.1 → [1.5.2](../../changelogs/@backstage/catalog-client.md#152))

#### 1.5.2

##### Patch Changes

- [`883782e`](https://github.com/backstage/backstage/commit/883782e): Fix a bug in `getLocationByRef` that led to invalid backend calls

### `@backstage/cli` (0.25.0 → [0.25.1](../../changelogs/@backstage/cli.md#0251))

#### 0.25.1

##### Patch Changes

- [`b6b15b2`](https://github.com/backstage/backstage/commit/b6b15b2): Use sha256 instead of md5 in build script cache key calculation

  Makes it possible to build on FIPS nodejs.

### `@backstage/cli-node` (0.2.1 → [0.2.2](../../changelogs/@backstage/cli-node.md#022))

#### 0.2.2

##### Patch Changes

- [`7acbb5a`](https://github.com/backstage/backstage/commit/7acbb5a): Removed `mock-fs` dev dependency.

### `@backstage/config-loader` (1.6.0 → [1.6.1](../../changelogs/@backstage/config-loader.md#161))

#### 1.6.1

##### Patch Changes

- [`7acbb5a`](https://github.com/backstage/backstage/commit/7acbb5a): Removed `mock-fs` dev dependency.

### `@backstage/core-compat-api` (0.1.0 → [0.1.1](../../changelogs/@backstage/core-compat-api.md#011))

#### 0.1.1

##### Patch Changes

- [`4c1f50c`](https://github.com/backstage/backstage/commit/4c1f50c): Make `convertLegacyApp` wrap discovered routes with `compatWrapper`.

### `@backstage/core-components` (0.13.9 → [0.13.10](../../changelogs/@backstage/core-components.md#01310))

#### 0.13.10

##### Patch Changes

- [`d625f66`](https://github.com/backstage/backstage/commit/d625f66): Fixed bug in Link where it was possible to select and copy a hidden element into clipboard
- [`6878b1d`](https://github.com/backstage/backstage/commit/6878b1d): Removed unnecessary `history` and `immer` dependencies.

### `@backstage/core-plugin-api` (1.8.1 → [1.8.2](../../changelogs/@backstage/core-plugin-api.md#182))

#### 1.8.2

##### Patch Changes

- [`6878b1d`](https://github.com/backstage/backstage/commit/6878b1d): Removed unnecessary `i18next` dependency.

### `@backstage/create-app` (0.5.8 → [0.5.9](../../changelogs/@backstage/create-app.md#059))

#### 0.5.9

##### Patch Changes

- [`c9f71fb`](https://github.com/backstage/backstage/commit/c9f71fb): Bumped create-app version.
- [`ac277f3`](https://github.com/backstage/backstage/commit/ac277f3): Bumped create-app version.
- [`7acbb5a`](https://github.com/backstage/backstage/commit/7acbb5a): Removed `mock-fs` dev dependency.

### `@backstage/frontend-test-utils` (0.1.0 → [0.1.1](../../changelogs/@backstage/frontend-test-utils.md#011))

#### 0.1.1

##### Patch Changes

- [`f7566f9`](https://github.com/backstage/backstage/commit/f7566f9): Updates to reflect the `app/router` extension having been renamed to `app/root`.
- [`516fd3e`](https://github.com/backstage/backstage/commit/516fd3e): Updated README to reflect release status
- [`c97fa1c`](https://github.com/backstage/backstage/commit/c97fa1c): Added `elements`, `wrappers`, and `router` inputs to `app/root`, that let you add things to the root of the React tree above the layout. You can use the `createAppRootElementExtension`, `createAppRootWrapperExtension`, and `createRouterExtension` extension creator, respectively, to conveniently create such extensions. These are all optional, and if you do not supply a router a default one will be used (`BrowserRouter` in regular runs, `MemoryRouter` in tests/CI).

### `@backstage/plugin-adr` (0.6.11 → [0.6.12](../../changelogs/@backstage/plugin-adr.md#0612))

#### 0.6.12

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-adr-backend` (0.4.5 → [0.4.6](../../changelogs/@backstage/plugin-adr-backend.md#046))

#### 0.4.6

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-airbrake` (0.3.28 → [0.3.29](../../changelogs/@backstage/plugin-airbrake.md#0329))

#### 0.3.29

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-airbrake-backend` (0.3.5 → [0.3.6](../../changelogs/@backstage/plugin-airbrake-backend.md#036))

#### 0.3.6

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-allure` (0.1.44 → [0.1.45](../../changelogs/@backstage/plugin-allure.md#0145))

#### 0.1.45

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-analytics-module-ga` (0.1.36 → [0.1.37](../../changelogs/@backstage/plugin-analytics-module-ga.md#0137))

#### 0.1.37

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-analytics-module-ga4` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-analytics-module-ga4.md#018))

#### 0.1.8

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-apache-airflow` (0.2.18 → [0.2.19](../../changelogs/@backstage/plugin-apache-airflow.md#0219))

#### 0.2.19

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-api-docs` (0.10.2 → [0.10.3](../../changelogs/@backstage/plugin-api-docs.md#0103))

#### 0.10.3

##### Patch Changes

- [`8a69cc9`](https://github.com/backstage/backstage/commit/8a69cc9): Fix custom http resolvers for AsyncAPI widget.
- [`062b8f2`](https://github.com/backstage/backstage/commit/062b8f2): Add permission check to Register Existing API button
- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-apollo-explorer` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-apollo-explorer.md#0119))

#### 0.1.19

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-app-backend` (0.3.56 → [0.3.57](../../changelogs/@backstage/plugin-app-backend.md#0357))

#### 0.3.57

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-auth-backend` (0.20.2 → [0.20.3](../../changelogs/@backstage/plugin-auth-backend.md#0203))

#### 0.20.3

##### Patch Changes

- [`004499c`](https://github.com/backstage/backstage/commit/004499c): Fixed an issue where some Okta's resolvers were missing
- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-auth-backend-module-atlassian-provider` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#011))

#### 0.1.1

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#023))

#### 0.2.3

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-auth-backend-module-github-provider` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#016))

#### 0.1.6

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#016))

#### 0.1.6

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-auth-backend-module-google-provider` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#016))

#### 0.1.6

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-auth-backend-module-microsoft-provider` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#014))

#### 0.1.4

##### Patch Changes

- [`928efbc`](https://github.com/backstage/backstage/commit/928efbc): Deprecated the `authModuleMicrosoftProvider` export. A default export is now available and should be used like this in your backend: `backend.add(import('@backstage/plugin-auth-backend-module-microsoft-provider'));`
- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-auth-backend-module-oauth2-provider` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#016))

#### 0.1.6

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#011))

#### 0.1.1

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-auth-backend-module-pinniped-provider` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#013))

#### 0.1.3

##### Patch Changes

- [`928efbc`](https://github.com/backstage/backstage/commit/928efbc): Deprecated the `authModulePinnipedProvider` export. A default export is now available and should be used like this in your backend: `backend.add(import('@backstage/plugin-auth-backend-module-pinniped-provider'));`
- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#011))

#### 0.1.1

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-azure-devops` (0.3.10 → [0.3.11](../../changelogs/@backstage/plugin-azure-devops.md#0311))

#### 0.3.11

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-azure-devops-backend` (0.5.0 → [0.5.1](../../changelogs/@backstage/plugin-azure-devops-backend.md#051))

#### 0.5.1

##### Patch Changes

- [`d076ee4`](https://github.com/backstage/backstage/commit/d076ee4): Updated dependency `azure-devops-node-api` to `^12.0.0`.
- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-azure-sites` (0.1.17 → [0.1.18](../../changelogs/@backstage/plugin-azure-sites.md#0118))

#### 0.1.18

##### Patch Changes

- [`a31f688`](https://github.com/backstage/backstage/commit/a31f688): Show Azure site tags in `EntityAzureSitesOverviewWidget`.
- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-azure-sites-backend` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-azure-sites-backend.md#0119))

#### 0.1.19

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-badges` (0.2.52 → [0.2.53](../../changelogs/@backstage/plugin-badges.md#0253))

#### 0.2.53

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-badges-backend` (0.3.5 → [0.3.6](../../changelogs/@backstage/plugin-badges-backend.md#036))

#### 0.3.6

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-bazaar` (0.2.20 → [0.2.21](../../changelogs/@backstage/plugin-bazaar.md#0221))

#### 0.2.21

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-bazaar-backend` (0.3.6 → [0.3.7](../../changelogs/@backstage/plugin-bazaar-backend.md#037))

#### 0.3.7

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-bitrise` (0.1.55 → [0.1.56](../../changelogs/@backstage/plugin-bitrise.md#0156))

#### 0.1.56

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-catalog` (1.16.0 → [1.16.1](../../changelogs/@backstage/plugin-catalog.md#1161))

#### 1.16.1

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-catalog-backend` (1.16.0 → [1.16.1](../../changelogs/@backstage/plugin-catalog-backend.md#1161))

#### 1.16.1

##### Patch Changes

- [`c3249d6`](https://github.com/backstage/backstage/commit/c3249d6): Parse the URL using a different method rather than `git-url-parse` to support wildcards for URLs which are not VCS providers

### `@backstage/plugin-catalog-backend-module-aws` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#033))

#### 0.3.3

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies
- [`22e88d0`](https://github.com/backstage/backstage/commit/22e88d0): Added status and e-mail as labels to the AWS Account Resource

### `@backstage/plugin-catalog-backend-module-azure` (0.1.27 → [0.1.28](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0128))

#### 0.1.28

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#012))

#### 0.1.2

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-catalog-backend-module-bitbucket` (0.2.23 → [0.2.24](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket.md#0224))

#### 0.2.24

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-catalog-backend-module-gerrit` (0.1.24 → [0.1.25](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0125))

#### 0.1.25

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-catalog-backend-module-openapi` (0.1.25 → [0.1.26](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0126))

#### 0.1.26

##### Patch Changes

- [`4ebf99b`](https://github.com/backstage/backstage/commit/4ebf99b): Add support for the new backend system.

  A new backend module for the catalog backend
  was added and exported as `default`.

  You can use it with the new backend system like

  ```ts title="packages/backend/src/index.ts"
  backend.add(import('@backstage/plugin-catalog-backend-module-openapi'));
  ```

### `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#016))

#### 0.1.6

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-catalog-graph` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-catalog-graph.md#033))

#### 0.3.3

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-catalog-node` (1.6.0 → [1.6.1](../../changelogs/@backstage/plugin-catalog-node.md#161))

#### 1.6.1

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-catalog-react` (1.9.2 → [1.9.3](../../changelogs/@backstage/plugin-catalog-react.md#193))

#### 1.9.3

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-catalog-unprocessed-entities` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#017))

#### 0.1.7

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-circleci` (0.3.28 → [0.3.29](../../changelogs/@backstage/plugin-circleci.md#0329))

#### 0.3.29

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-cloudbuild` (0.3.28 → [0.3.29](../../changelogs/@backstage/plugin-cloudbuild.md#0329))

#### 0.3.29

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-code-climate` (0.1.28 → [0.1.29](../../changelogs/@backstage/plugin-code-climate.md#0129))

#### 0.1.29

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-code-coverage` (0.2.21 → [0.2.22](../../changelogs/@backstage/plugin-code-coverage.md#0222))

#### 0.2.22

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-code-coverage-backend` (0.2.22 → [0.2.23](../../changelogs/@backstage/plugin-code-coverage-backend.md#0223))

#### 0.2.23

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-codescene` (0.1.20 → [0.1.21](../../changelogs/@backstage/plugin-codescene.md#0121))

#### 0.1.21

##### Patch Changes

- [`d5eda61`](https://github.com/backstage/backstage/commit/d5eda61): Updated Readme document in codescene plugin
- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-config-schema` (0.1.48 → [0.1.49](../../changelogs/@backstage/plugin-config-schema.md#0149))

#### 0.1.49

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-cost-insights` (0.12.17 → [0.12.18](../../changelogs/@backstage/plugin-cost-insights.md#01218))

#### 0.12.18

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-devtools` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-devtools.md#018))

#### 0.1.8

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-devtools-backend` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-devtools-backend.md#026))

#### 0.2.6

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-dynatrace` (8.0.2 → [8.0.3](../../changelogs/@backstage/plugin-dynatrace.md#803))

#### 8.0.3

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-entity-feedback` (0.2.11 → [0.2.12](../../changelogs/@backstage/plugin-entity-feedback.md#0212))

#### 0.2.12

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-entity-feedback-backend` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-entity-feedback-backend.md#026))

#### 0.2.6

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-entity-validation` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-entity-validation.md#0114))

#### 0.1.14

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-events-backend` (0.2.17 → [0.2.18](../../changelogs/@backstage/plugin-events-backend.md#0218))

#### 0.2.18

##### Patch Changes

- [`92ea615`](https://github.com/backstage/backstage/commit/92ea615): Update `README.md`
- [`d5ddc4e`](https://github.com/backstage/backstage/commit/d5ddc4e): Add documentation on how to install the plugins with the new backend system.

### `@backstage/plugin-events-backend-module-aws-sqs` (0.2.11 → [0.2.12](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#0212))

#### 0.2.12

##### Patch Changes

- [`7b8e551`](https://github.com/backstage/backstage/commit/7b8e551): Fix errors when deleting SQS messages:

  - If zero messages were received, skip deletion to avoid `EmptyBatchRequest` error from the SQS client.
  - If zero failures were returned from the SQS client during deletion, skip error logging.

- [`d5ddc4e`](https://github.com/backstage/backstage/commit/d5ddc4e): Add documentation on how to install the plugins with the new backend system.

### `@backstage/plugin-events-backend-module-azure` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-events-backend-module-azure.md#0119))

#### 0.1.19

##### Patch Changes

- [`af76a95`](https://github.com/backstage/backstage/commit/af76a95): Add default exports for the new backend system and documentation.
- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0119))

#### 0.1.19

##### Patch Changes

- [`af76a95`](https://github.com/backstage/backstage/commit/af76a95): Add default exports for the new backend system and documentation.
- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-events-backend-module-gerrit` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0119))

#### 0.1.19

##### Patch Changes

- [`af76a95`](https://github.com/backstage/backstage/commit/af76a95): Add default exports for the new backend system and documentation.
- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-events-backend-module-github` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-events-backend-module-github.md#0119))

#### 0.1.19

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-events-backend-module-gitlab` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#0119))

#### 0.1.19

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-explore` (0.4.14 → [0.4.15](../../changelogs/@backstage/plugin-explore.md#0415))

#### 0.4.15

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-firehydrant` (0.2.12 → [0.2.13](../../changelogs/@backstage/plugin-firehydrant.md#0213))

#### 0.2.13

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-fossa` (0.2.60 → [0.2.61](../../changelogs/@backstage/plugin-fossa.md#0261))

#### 0.2.61

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-gcalendar` (0.3.21 → [0.3.22](../../changelogs/@backstage/plugin-gcalendar.md#0322))

#### 0.3.22

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-gcp-projects` (0.3.44 → [0.3.45](../../changelogs/@backstage/plugin-gcp-projects.md#0345))

#### 0.3.45

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-git-release-manager` (0.3.40 → [0.3.41](../../changelogs/@backstage/plugin-git-release-manager.md#0341))

#### 0.3.41

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-github-actions` (0.6.9 → [0.6.10](../../changelogs/@backstage/plugin-github-actions.md#0610))

#### 0.6.10

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-github-deployments` (0.1.59 → [0.1.60](../../changelogs/@backstage/plugin-github-deployments.md#0160))

#### 0.1.60

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-github-issues` (0.2.17 → [0.2.18](../../changelogs/@backstage/plugin-github-issues.md#0218))

#### 0.2.18

##### Patch Changes

- [`bf92ae3`](https://github.com/backstage/backstage/commit/bf92ae3): Updated dependency `octokit` to `^3.0.0`.
- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-github-pull-requests-board` (0.1.22 → [0.1.23](../../changelogs/@backstage/plugin-github-pull-requests-board.md#0123))

#### 0.1.23

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-gitops-profiles` (0.3.43 → [0.3.44](../../changelogs/@backstage/plugin-gitops-profiles.md#0344))

#### 0.3.44

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-gocd` (0.1.34 → [0.1.35](../../changelogs/@backstage/plugin-gocd.md#0135))

#### 0.1.35

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-graphiql` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-graphiql.md#032))

#### 0.3.2

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-graphql-voyager` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-graphql-voyager.md#0111))

#### 0.1.11

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-home` (0.6.0 → [0.6.1](../../changelogs/@backstage/plugin-home.md#061))

#### 0.6.1

##### Patch Changes

- [`98ac5ab`](https://github.com/backstage/backstage/commit/98ac5ab): Updated dependency `@rjsf/utils` to `5.15.1`.
  Updated dependency `@rjsf/core` to `5.15.1`.
  Updated dependency `@rjsf/material-ui` to `5.15.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.15.1`.
- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-home-react` (0.1.6 → [0.1.7](../../changelogs/@backstage/plugin-home-react.md#017))

#### 0.1.7

##### Patch Changes

- [`98ac5ab`](https://github.com/backstage/backstage/commit/98ac5ab): Updated dependency `@rjsf/utils` to `5.15.1`.
  Updated dependency `@rjsf/core` to `5.15.1`.
  Updated dependency `@rjsf/material-ui` to `5.15.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.15.1`.
- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-ilert` (0.2.17 → [0.2.18](../../changelogs/@backstage/plugin-ilert.md#0218))

#### 0.2.18

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-jenkins` (0.9.3 → [0.9.4](../../changelogs/@backstage/plugin-jenkins.md#094))

#### 0.9.4

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-jenkins-backend` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-jenkins-backend.md#033))

#### 0.3.3

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-kafka` (0.3.28 → [0.3.29](../../changelogs/@backstage/plugin-kafka.md#0329))

#### 0.3.29

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-kafka-backend` (0.3.6 → [0.3.7](../../changelogs/@backstage/plugin-kafka-backend.md#037))

#### 0.3.7

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-kubernetes` (0.11.3 → [0.11.4](../../changelogs/@backstage/plugin-kubernetes.md#0114))

#### 0.11.4

##### Patch Changes

- [`d5d2c67`](https://github.com/backstage/backstage/commit/d5d2c67): Add `authuser` search parameter to GKE cluster link formatter in k8s plugin

  Thanks to this, people with multiple simultaneously logged-in accounts in their GCP console will automatically view objects with the same email as the one signed in to the Google auth provider in Backstage.

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-kubernetes-common` (0.7.2 → [0.7.3](../../changelogs/@backstage/plugin-kubernetes-common.md#073))

#### 0.7.3

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-kubernetes-react` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-kubernetes-react.md#021))

#### 0.2.1

##### Patch Changes

- [`d5d2c67`](https://github.com/backstage/backstage/commit/d5d2c67): Add `authuser` search parameter to GKE cluster link formatter in k8s plugin

  Thanks to this, people with multiple simultaneously logged-in accounts in their GCP console will automatically view objects with the same email as the one signed in to the Google auth provider in Backstage.

### `@backstage/plugin-lighthouse` (0.4.13 → [0.4.14](../../changelogs/@backstage/plugin-lighthouse.md#0414))

#### 0.4.14

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-linguist` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-linguist.md#0114))

#### 0.1.14

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies
- [`4f42918`](https://github.com/backstage/backstage/commit/4f42918): Added alpha support for the New Frontend System (Declarative Integration)

### `@backstage/plugin-linguist-backend` (0.5.5 → [0.5.6](../../changelogs/@backstage/plugin-linguist-backend.md#056))

#### 0.5.6

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-microsoft-calendar` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-microsoft-calendar.md#0111))

#### 0.1.11

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-newrelic` (0.3.43 → [0.3.44](../../changelogs/@backstage/plugin-newrelic.md#0344))

#### 0.3.44

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-newrelic-dashboard` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-newrelic-dashboard.md#034))

#### 0.3.4

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-nomad` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-nomad.md#0110))

#### 0.1.10

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-nomad-backend` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-nomad-backend.md#0111))

#### 0.1.11

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-octopus-deploy` (0.2.10 → [0.2.11](../../changelogs/@backstage/plugin-octopus-deploy.md#0211))

#### 0.2.11

##### Patch Changes

- [`7d96ba8`](https://github.com/backstage/backstage/commit/7d96ba8): added install path and fixed import on plugin-octopus-deploy
- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-opencost` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-opencost.md#024))

#### 0.2.4

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-org` (0.6.18 → [0.6.19](../../changelogs/@backstage/plugin-org.md#0619))

#### 0.6.19

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-org-react` (0.1.17 → [0.1.18](../../changelogs/@backstage/plugin-org-react.md#0118))

#### 0.1.18

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-pagerduty` (0.7.0 → [0.7.1](../../changelogs/@backstage/plugin-pagerduty.md#071))

#### 0.7.1

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-periskop` (0.1.26 → [0.1.27](../../changelogs/@backstage/plugin-periskop.md#0127))

#### 0.1.27

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-periskop-backend` (0.2.6 → [0.2.7](../../changelogs/@backstage/plugin-periskop-backend.md#027))

#### 0.2.7

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-permission-backend` (0.5.31 → [0.5.32](../../changelogs/@backstage/plugin-permission-backend.md#0532))

#### 0.5.32

##### Patch Changes

- [`b1acd9b`](https://github.com/backstage/backstage/commit/b1acd9b): Updated README

### `@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#016))

#### 0.1.6

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-permission-common` (0.7.11 → [0.7.12](../../changelogs/@backstage/plugin-permission-common.md#0712))

#### 0.7.12

##### Patch Changes

- [`b1acd9b`](https://github.com/backstage/backstage/commit/b1acd9b): Updated README

### `@backstage/plugin-permission-node` (0.7.19 → [0.7.20](../../changelogs/@backstage/plugin-permission-node.md#0720))

#### 0.7.20

##### Patch Changes

- [`b1acd9b`](https://github.com/backstage/backstage/commit/b1acd9b): Updated README

### `@backstage/plugin-permission-react` (0.4.18 → [0.4.19](../../changelogs/@backstage/plugin-permission-react.md#0419))

#### 0.4.19

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies
- [`b1acd9b`](https://github.com/backstage/backstage/commit/b1acd9b): Updated README

### `@backstage/plugin-playlist` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-playlist.md#023))

#### 0.2.3

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-playlist-backend` (0.3.12 → [0.3.13](../../changelogs/@backstage/plugin-playlist-backend.md#0313))

#### 0.3.13

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-puppetdb` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-puppetdb.md#0112))

#### 0.1.12

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-rollbar` (0.4.28 → [0.4.29](../../changelogs/@backstage/plugin-rollbar.md#0429))

#### 0.4.29

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-scaffolder` (1.17.0 → [1.17.1](../../changelogs/@backstage/plugin-scaffolder.md#1171))

#### 1.17.1

##### Patch Changes

- [`98ac5ab`](https://github.com/backstage/backstage/commit/98ac5ab): Updated dependency `@rjsf/utils` to `5.15.1`.
  Updated dependency `@rjsf/core` to `5.15.1`.
  Updated dependency `@rjsf/material-ui` to `5.15.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.15.1`.
- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies
- [`df4bc9d`](https://github.com/backstage/backstage/commit/df4bc9d): Minor internal refactor

### `@backstage/plugin-scaffolder-backend-module-azure` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#011))

#### 0.1.1

##### Patch Changes

- [`d076ee4`](https://github.com/backstage/backstage/commit/d076ee4): Updated dependency `azure-devops-node-api` to `^12.0.0`.

### `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket.md#011))

#### 0.1.1

##### Patch Changes

- [`a694f71`](https://github.com/backstage/backstage/commit/a694f71): The Scaffolder builtin actions now contains an action for running pipelines from Bitbucket Cloud Rest API

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#0210))

#### 0.2.10

##### Patch Changes

- [`7acbb5a`](https://github.com/backstage/backstage/commit/7acbb5a): Removed `mock-fs` dev dependency.
- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.32 → [0.2.33](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0233))

#### 0.2.33

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-scaffolder-backend-module-github` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#011))

#### 0.1.1

##### Patch Changes

- [`5470300`](https://github.com/backstage/backstage/commit/5470300): Ensure `teamReviewers` list is unique before calling API
- [`bf92ae3`](https://github.com/backstage/backstage/commit/bf92ae3): Updated dependency `octokit` to `^3.0.0`.

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.2.11 → [0.2.12](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#0212))

#### 0.2.12

##### Patch Changes

- [`604c9dd`](https://github.com/backstage/backstage/commit/604c9dd): Add Scaffolder custom action that creates GitLab issues called `gitlab:issues:create`
- [`7c522c5`](https://github.com/backstage/backstage/commit/7c522c5): Add `gitlab:repo:push` scaffolder action to push files to arbitrary branch without creating a Merge Request

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.29 → [0.2.30](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0230))

#### 0.2.30

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-scaffolder-common` (1.4.4 → [1.4.5](../../changelogs/@backstage/plugin-scaffolder-common.md#145))

#### 1.4.5

##### Patch Changes

- [`178b8d8`](https://github.com/backstage/backstage/commit/178b8d8): Updated Template.v1beta3.schema.json, added a missing "presentation" field

### `@backstage/plugin-scaffolder-react` (1.7.0 → [1.7.1](../../changelogs/@backstage/plugin-scaffolder-react.md#171))

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

### `@backstage/plugin-search` (1.4.4 → [1.4.5](../../changelogs/@backstage/plugin-search.md#145))

#### 1.4.5

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-search-backend` (1.4.8 → [1.4.9](../../changelogs/@backstage/plugin-search-backend.md#149))

#### 1.4.9

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-search-backend-module-catalog` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#0113))

#### 0.1.13

##### Patch Changes

- [`2e6c56b`](https://github.com/backstage/backstage/commit/2e6c56b): Update wording to show that the backend system no longer is in alpha

### `@backstage/plugin-search-backend-module-explore` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-search-backend-module-explore.md#0113))

#### 0.1.13

##### Patch Changes

- [`2e6c56b`](https://github.com/backstage/backstage/commit/2e6c56b): Update wording to show that the backend system no longer is in alpha

### `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#012))

#### 0.1.2

##### Patch Changes

- [`2e6c56b`](https://github.com/backstage/backstage/commit/2e6c56b): Update wording to show that the backend system no longer is in alpha

### `@backstage/plugin-search-backend-module-techdocs` (0.1.12 → [0.1.13](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#0113))

#### 0.1.13

##### Patch Changes

- [`2e6c56b`](https://github.com/backstage/backstage/commit/2e6c56b): Update wording to show that the backend system no longer is in alpha

### `@backstage/plugin-sentry` (0.5.13 → [0.5.14](../../changelogs/@backstage/plugin-sentry.md#0514))

#### 0.5.14

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-shortcuts` (0.3.17 → [0.3.18](../../changelogs/@backstage/plugin-shortcuts.md#0318))

#### 0.3.18

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-sonarqube` (0.7.10 → [0.7.11](../../changelogs/@backstage/plugin-sonarqube.md#0711))

#### 0.7.11

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-sonarqube-backend` (0.2.10 → [0.2.11](../../changelogs/@backstage/plugin-sonarqube-backend.md#0211))

#### 0.2.11

##### Patch Changes

- [`53445cd`](https://github.com/backstage/backstage/commit/53445cd): Updated README

### `@backstage/plugin-splunk-on-call` (0.4.17 → [0.4.18](../../changelogs/@backstage/plugin-splunk-on-call.md#0418))

#### 0.4.18

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-stack-overflow` (0.1.23 → [0.1.24](../../changelogs/@backstage/plugin-stack-overflow.md#0124))

#### 0.1.24

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-stack-overflow-backend` (0.2.12 → [0.2.13](../../changelogs/@backstage/plugin-stack-overflow-backend.md#0213))

#### 0.2.13

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-stackstorm` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-stackstorm.md#0110))

#### 0.1.10

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-tech-insights` (0.3.20 → [0.3.21](../../changelogs/@backstage/plugin-tech-insights.md#0321))

#### 0.3.21

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.40 → [0.1.41](../../changelogs/@backstage/plugin-tech-insights-backend-module-jsonfc.md#0141))

#### 0.1.41

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-tech-insights-node` (0.4.14 → [0.4.15](../../changelogs/@backstage/plugin-tech-insights-node.md#0415))

#### 0.4.15

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-tech-radar` (0.6.11 → [0.6.12](../../changelogs/@backstage/plugin-tech-radar.md#0612))

#### 0.6.12

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-techdocs` (1.9.2 → [1.9.3](../../changelogs/@backstage/plugin-techdocs.md#193))

#### 1.9.3

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-techdocs-addons-test-utils` (1.0.25 → [1.0.26](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#1026))

#### 1.0.26

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-techdocs-backend` (1.9.1 → [1.9.2](../../changelogs/@backstage/plugin-techdocs-backend.md#192))

#### 1.9.2

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-techdocs-module-addons-contrib` (1.1.3 → [1.1.4](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#114))

#### 1.1.4

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-techdocs-react` (1.1.14 → [1.1.15](../../changelogs/@backstage/plugin-techdocs-react.md#1115))

#### 1.1.15

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-todo` (0.2.32 → [0.2.33](../../changelogs/@backstage/plugin-todo.md#0233))

#### 0.2.33

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-todo-backend` (0.3.6 → [0.3.7](../../changelogs/@backstage/plugin-todo-backend.md#037))

#### 0.3.7

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-user-settings-backend` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-user-settings-backend.md#028))

#### 0.2.8

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-vault` (0.1.23 → [0.1.24](../../changelogs/@backstage/plugin-vault.md#0124))

#### 0.1.24

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/plugin-xcmetrics` (0.2.46 → [0.2.47](../../changelogs/@backstage/plugin-xcmetrics.md#0247))

#### 0.2.47

##### Patch Changes

- [`4016f21`](https://github.com/backstage/backstage/commit/4016f21): Remove some unused dependencies

### `@backstage/repo-tools` (0.5.1 → [0.5.2](../../changelogs/@backstage/repo-tools.md#052))

#### 0.5.2

##### Patch Changes

- [`883782e`](https://github.com/backstage/backstage/commit/883782e): Updated the OpenAPI template to export the `TypedResponse` interface so that client code can leverage it
- [`7acbb5a`](https://github.com/backstage/backstage/commit/7acbb5a): Removed `mock-fs` dev dependency.

## Excluded dependency updates

- `@backstage/app-defaults` (1.4.6 → [1.4.7](../../changelogs/@backstage/app-defaults.md#147))
- `@backstage/backend-tasks` (0.5.13 → [0.5.14](../../changelogs/@backstage/backend-tasks.md#0514))
- `@backstage/backend-test-utils` (0.2.9 → [0.2.10](../../changelogs/@backstage/backend-test-utils.md#0210))
- `@backstage/core-app-api` (1.11.2 → [1.11.3](../../changelogs/@backstage/core-app-api.md#1113))
- `@backstage/dev-utils` (1.0.25 → [1.0.26](../../changelogs/@backstage/dev-utils.md#1026))
- `@backstage/integration-react` (1.1.22 → [1.1.23](../../changelogs/@backstage/integration-react.md#1123))
- `@backstage/plugin-adr-common` (0.2.18 → [0.2.19](../../changelogs/@backstage/plugin-adr-common.md#0219))
- `@backstage/plugin-app-node` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-app-node.md#019))
- `@backstage/plugin-auth-node` (0.4.2 → [0.4.3](../../changelogs/@backstage/plugin-auth-node.md#043))
- `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.23 → [0.1.24](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#0124))
- `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.21 → [0.1.22](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#0122))
- `@backstage/plugin-catalog-backend-module-gcp` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#019))
- `@backstage/plugin-catalog-backend-module-github` (0.4.6 → [0.4.7](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#047))
- `@backstage/plugin-catalog-backend-module-github-org` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#013))
- `@backstage/plugin-catalog-backend-module-gitlab` (0.3.5 → [0.3.6](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#036))
- `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.12 → [0.4.13](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#0413))
- `@backstage/plugin-catalog-backend-module-ldap` (0.5.23 → [0.5.24](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0524))
- `@backstage/plugin-catalog-backend-module-msgraph` (0.5.15 → [0.5.16](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#0516))
- `@backstage/plugin-catalog-backend-module-puppetdb` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0114))
- `@backstage/plugin-catalog-backend-module-unprocessed` (0.3.5 → [0.3.6](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#036))
- `@backstage/plugin-catalog-common` (1.0.19 → [1.0.20](../../changelogs/@backstage/plugin-catalog-common.md#1020))
- `@backstage/plugin-catalog-import` (0.10.4 → [0.10.5](../../changelogs/@backstage/plugin-catalog-import.md#0105))
- `@backstage/plugin-cicd-statistics` (0.1.30 → [0.1.31](../../changelogs/@backstage/plugin-cicd-statistics.md#0131))
- `@backstage/plugin-cicd-statistics-module-gitlab` (0.1.24 → [0.1.25](../../changelogs/@backstage/plugin-cicd-statistics-module-gitlab.md#0125))
- `@backstage/plugin-devtools-common` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-devtools-common.md#018))
- `@backstage/plugin-events-backend-test-utils` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0119))
- `@backstage/plugin-events-node` (0.2.17 → [0.2.18](../../changelogs/@backstage/plugin-events-node.md#0218))
- `@backstage/plugin-jenkins-common` (0.1.22 → [0.1.23](../../changelogs/@backstage/plugin-jenkins-common.md#0123))
- `@backstage/plugin-kubernetes-backend` (0.14.0 → [0.14.1](../../changelogs/@backstage/plugin-kubernetes-backend.md#0141))
- `@backstage/plugin-kubernetes-node` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-kubernetes-node.md#013))
- `@backstage/plugin-lighthouse-backend` (0.4.0 → [0.4.1](../../changelogs/@backstage/plugin-lighthouse-backend.md#041))
- `@backstage/plugin-playlist-common` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-playlist-common.md#0114))
- `@backstage/plugin-proxy-backend` (0.4.6 → [0.4.7](../../changelogs/@backstage/plugin-proxy-backend.md#047))
- `@backstage/plugin-rollbar-backend` (0.1.53 → [0.1.54](../../changelogs/@backstage/plugin-rollbar-backend.md#0154))
- `@backstage/plugin-scaffolder-backend-module-gerrit` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#011))
- `@backstage/plugin-scaffolder-backend-module-rails` (0.4.25 → [0.4.26](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0426))
- `@backstage/plugin-scaffolder-backend-module-sentry` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#0117))
- `@backstage/plugin-scaffolder-node` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-scaffolder-node.md#0210))
- `@backstage/plugin-search-backend-module-elasticsearch` (1.3.11 → [1.3.12](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#1312))
- `@backstage/plugin-search-backend-module-pg` (0.5.17 → [0.5.18](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0518))
- `@backstage/plugin-search-backend-node` (1.2.12 → [1.2.13](../../changelogs/@backstage/plugin-search-backend-node.md#1213))
- `@backstage/plugin-search-common` (1.2.9 → [1.2.10](../../changelogs/@backstage/plugin-search-common.md#1210))
- `@backstage/plugin-search-react` (1.7.4 → [1.7.5](../../changelogs/@backstage/plugin-search-react.md#175))
- `@backstage/plugin-sonarqube-react` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-sonarqube-react.md#0112))
- `@backstage/plugin-tech-insights-backend` (0.5.22 → [0.5.23](../../changelogs/@backstage/plugin-tech-insights-backend.md#0523))
- `@backstage/plugin-techdocs-node` (1.11.0 → [1.11.1](../../changelogs/@backstage/plugin-techdocs-node.md#1111))
- `@backstage/plugin-vault-backend` (0.4.1 → [0.4.2](../../changelogs/@backstage/plugin-vault-backend.md#042))
- `@backstage/plugin-vault-node` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-vault-node.md#012))
- `@backstage/test-utils` (1.4.6 → [1.4.7](../../changelogs/@backstage/test-utils.md#147))
- `@techdocs/cli` (1.8.0 → [1.8.1](../../changelogs/@techdocs/cli.md#181))
