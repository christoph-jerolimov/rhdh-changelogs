# RHDH Release 1.3 changelog

Changes between Backstage 1.26.5 (RHDH 1.2) and Backstage 1.29.2 (RHDH 1.3) — 7 added, 103 removed, 159 upgraded, 8 unchanged packages.

## Summary

- [Newly added packages](#newly-added-packages): 7 packages
- [Removed packages](#removed-packages): 103 packages
- [Breaking changes](#breaking-changes): 17 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 10 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 6 packages
- [0.x patch version bumps](#0x-patch-version-bumps): 94 packages
- [Other minor version bumps](#other-minor-version-bumps): 8 packages
- [Other patch version bumps](#other-patch-version-bumps): 17 packages
- [Excluded dependency updates](#excluded-dependency-updates): 7 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/plugin-auth-backend-module-onelogin-provider` (new, 0.1.3)](#backstageplugin-auth-backend-module-onelogin-provider-new-013)
  - [`@backstage/plugin-catalog-backend-module-gitlab-org` (new, 0.0.5)](#backstageplugin-catalog-backend-module-gitlab-org-new-005)
  - [`@backstage/plugin-catalog-backend-module-logs` (new, 0.0.1)](#backstageplugin-catalog-backend-module-logs-new-001)
  - [`@backstage/plugin-notifications-backend-module-email` (new, 0.1.3)](#backstageplugin-notifications-backend-module-email-new-013)
  - [`@backstage/plugin-scaffolder-backend-module-gcp` (new, 0.1.0)](#backstageplugin-scaffolder-backend-module-gcp-new-010)
  - [`@backstage/plugin-scaffolder-backend-module-notifications` (new, 0.0.5)](#backstageplugin-scaffolder-backend-module-notifications-new-005)
  - [`@backstage/plugin-user-settings-common` (new, 0.0.1)](#backstageplugin-user-settings-common-new-001)
- [Removed packages](#removed-packages)
- [Breaking changes](#breaking-changes)
  - [`@backstage/backend-app-api` (0.7.2 → 0.8.0)](#backstagebackend-app-api-072--080)
  - [`@backstage/backend-common` (0.21.7 → 0.23.3)](#backstagebackend-common-0217--0233)
  - [`@backstage/backend-defaults` (0.2.17 → 0.4.1)](#backstagebackend-defaults-0217--041)
  - [`@backstage/backend-plugin-api` (0.6.17 → 0.7.0)](#backstagebackend-plugin-api-0617--070)
  - [`@backstage/integration` (1.10.0 → 1.13.0)](#backstageintegration-1100--1130)
  - [`@backstage/plugin-auth-backend-module-atlassian-provider` (0.1.9 → 0.2.3)](#backstageplugin-auth-backend-module-atlassian-provider-019--023)
  - [`@backstage/plugin-auth-backend-module-oauth2-provider` (0.1.14 → 0.2.3)](#backstageplugin-auth-backend-module-oauth2-provider-0114--023)
  - [`@backstage/plugin-auth-backend-module-oidc-provider` (0.1.8 → 0.2.3)](#backstageplugin-auth-backend-module-oidc-provider-018--023)
  - [`@backstage/plugin-auth-backend-module-pinniped-provider` (0.1.11 → 0.1.16)](#backstageplugin-auth-backend-module-pinniped-provider-0111--0116)
  - [`@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.1.9 → 0.2.3)](#backstageplugin-auth-backend-module-vmware-cloud-provider-019--023)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.5.33 → 0.7.0)](#backstageplugin-catalog-backend-module-ldap-0533--070)
  - [`@backstage/plugin-catalog-node` (1.11.1 → 1.12.4)](#backstageplugin-catalog-node-1111--1124)
  - [`@backstage/plugin-permission-common` (0.7.13 → 0.8.0)](#backstageplugin-permission-common-0713--080)
  - [`@backstage/plugin-permission-node` (0.7.28 → 0.8.0)](#backstageplugin-permission-node-0728--080)
  - [`@backstage/plugin-proxy-backend` (0.4.15 → 0.5.3)](#backstageplugin-proxy-backend-0415--053)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.4.0 → 1.5.3)](#backstageplugin-search-backend-module-elasticsearch-140--153)
  - [`@backstage/repo-tools` (0.8.0 → 0.9.4)](#backstagerepo-tools-080--094)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/backend-test-utils` (0.3.7 → 0.4.4)](#backstagebackend-test-utils-037--044)
  - [`@backstage/frontend-app-api` (0.6.4 → 0.7.4)](#backstagefrontend-app-api-064--074)
  - [`@backstage/plugin-catalog-import` (0.10.10 → 0.12.1)](#backstageplugin-catalog-import-01010--0121)
  - [`@backstage/plugin-kubernetes-backend` (0.17.0 → 0.18.3)](#backstageplugin-kubernetes-backend-0170--0183)
  - [`@backstage/plugin-kubernetes-common` (0.7.5 → 0.8.1)](#backstageplugin-kubernetes-common-075--081)
  - [`@backstage/plugin-kubernetes-react` (0.3.4 → 0.4.1)](#backstageplugin-kubernetes-react-034--041)
  - [`@backstage/plugin-notifications-backend` (0.2.0 → 0.3.3)](#backstageplugin-notifications-backend-020--033)
  - [`@backstage/plugin-notifications-node` (0.1.3 → 0.2.3)](#backstageplugin-notifications-node-013--023)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.2.7 → 0.4.0)](#backstageplugin-scaffolder-backend-module-github-027--040)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.3.3 → 0.4.4)](#backstageplugin-scaffolder-backend-module-gitlab-033--044)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-auth-backend-module-okta-provider` (0.0.10 → 0.0.15)](#backstageplugin-auth-backend-module-okta-provider-0010--0015)
  - [`@backstage/plugin-catalog-unprocessed-entities-common` (0.0.1 → 0.0.3)](#backstageplugin-catalog-unprocessed-entities-common-001--003)
  - [`@backstage/plugin-kubernetes-cluster` (0.0.10 → 0.0.13)](#backstageplugin-kubernetes-cluster-0010--0013)
  - [`@backstage/plugin-notifications-common` (0.0.3 → 0.0.5)](#backstageplugin-notifications-common-003--005)
  - [`@backstage/plugin-signals` (0.0.5 → 0.0.8)](#backstageplugin-signals-005--008)
  - [`@backstage/plugin-signals-react` (0.0.3 → 0.0.4)](#backstageplugin-signals-react-003--004)
- [0.x patch version bumps](#0x-patch-version-bumps)
  - [`@backstage/backend-dynamic-feature-service` (0.2.9 → 0.2.15)](#backstagebackend-dynamic-feature-service-029--0215)
  - [`@backstage/backend-tasks` (0.5.22 → 0.5.27)](#backstagebackend-tasks-0522--0527)
  - [`@backstage/cli` (0.26.4 → 0.26.11)](#backstagecli-0264--02611)
  - [`@backstage/cli-common` (0.1.13 → 0.1.14)](#backstagecli-common-0113--0114)
  - [`@backstage/cli-node` (0.2.5 → 0.2.7)](#backstagecli-node-025--027)
  - [`@backstage/core-compat-api` (0.2.4 → 0.2.7)](#backstagecore-compat-api-024--027)
  - [`@backstage/core-components` (0.14.6 → 0.14.9)](#backstagecore-components-0146--0149)
  - [`@backstage/create-app` (0.5.14 → 0.5.17)](#backstagecreate-app-0514--0517)
  - [`@backstage/eslint-plugin` (0.1.7 → 0.1.8)](#backstageeslint-plugin-017--018)
  - [`@backstage/frontend-test-utils` (0.1.6 → 0.1.11)](#backstagefrontend-test-utils-016--0111)
  - [`@backstage/plugin-api-docs` (0.11.4 → 0.11.7)](#backstageplugin-api-docs-0114--0117)
  - [`@backstage/plugin-api-docs-module-protoc-gen-doc` (0.1.6 → 0.1.7)](#backstageplugin-api-docs-module-protoc-gen-doc-016--017)
  - [`@backstage/plugin-app-backend` (0.3.65 → 0.3.71)](#backstageplugin-app-backend-0365--0371)
  - [`@backstage/plugin-app-node` (0.1.17 → 0.1.22)](#backstageplugin-app-node-0117--0122)
  - [`@backstage/plugin-app-visualizer` (0.1.5 → 0.1.8)](#backstageplugin-app-visualizer-015--018)
  - [`@backstage/plugin-auth-backend` (0.22.4 → 0.22.9)](#backstageplugin-auth-backend-0224--0229)
  - [`@backstage/plugin-auth-backend-module-aws-alb-provider` (0.1.9 → 0.1.14)](#backstageplugin-auth-backend-module-aws-alb-provider-019--0114)
  - [`@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.1.0 → 0.1.5)](#backstageplugin-auth-backend-module-azure-easyauth-provider-010--015)
  - [`@backstage/plugin-auth-backend-module-bitbucket-provider` (0.1.0 → 0.1.5)](#backstageplugin-auth-backend-module-bitbucket-provider-010--015)
  - [`@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.1.0 → 0.1.5)](#backstageplugin-auth-backend-module-cloudflare-access-provider-010--015)
  - [`@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.2.12 → 0.2.17)](#backstageplugin-auth-backend-module-gcp-iap-provider-0212--0217)
  - [`@backstage/plugin-auth-backend-module-github-provider` (0.1.14 → 0.1.19)](#backstageplugin-auth-backend-module-github-provider-0114--0119)
  - [`@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.14 → 0.1.19)](#backstageplugin-auth-backend-module-gitlab-provider-0114--0119)
  - [`@backstage/plugin-auth-backend-module-google-provider` (0.1.14 → 0.1.19)](#backstageplugin-auth-backend-module-google-provider-0114--0119)
  - [`@backstage/plugin-auth-backend-module-guest-provider` (0.1.3 → 0.1.8)](#backstageplugin-auth-backend-module-guest-provider-013--018)
  - [`@backstage/plugin-auth-backend-module-microsoft-provider` (0.1.12 → 0.1.17)](#backstageplugin-auth-backend-module-microsoft-provider-0112--0117)
  - [`@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.1.10 → 0.1.15)](#backstageplugin-auth-backend-module-oauth2-proxy-provider-0110--0115)
  - [`@backstage/plugin-auth-node` (0.4.12 → 0.4.17)](#backstageplugin-auth-node-0412--0417)
  - [`@backstage/plugin-auth-react` (0.1.1 → 0.1.4)](#backstageplugin-auth-react-011--014)
  - [`@backstage/plugin-bitbucket-cloud-common` (0.2.18 → 0.2.21)](#backstageplugin-bitbucket-cloud-common-0218--0221)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.3.12 → 0.3.17)](#backstageplugin-catalog-backend-module-aws-0312--0317)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.1.37 → 0.1.42)](#backstageplugin-catalog-backend-module-azure-0137--0142)
  - [`@backstage/plugin-catalog-backend-module-backstage-openapi` (0.2.0 → 0.2.5)](#backstageplugin-catalog-backend-module-backstage-openapi-020--025)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.2.4 → 0.2.9)](#backstageplugin-catalog-backend-module-bitbucket-cloud-024--029)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.31 → 0.1.36)](#backstageplugin-catalog-backend-module-bitbucket-server-0131--0136)
  - [`@backstage/plugin-catalog-backend-module-gcp` (0.1.18 → 0.1.23)](#backstageplugin-catalog-backend-module-gcp-0118--0123)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (0.1.34 → 0.1.39)](#backstageplugin-catalog-backend-module-gerrit-0134--0139)
  - [`@backstage/plugin-catalog-backend-module-github` (0.6.0 → 0.6.5)](#backstageplugin-catalog-backend-module-github-060--065)
  - [`@backstage/plugin-catalog-backend-module-github-org` (0.1.12 → 0.1.17)](#backstageplugin-catalog-backend-module-github-org-0112--0117)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.3.15 → 0.3.21)](#backstageplugin-catalog-backend-module-gitlab-0315--0321)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.22 → 0.4.27)](#backstageplugin-catalog-backend-module-incremental-ingestion-0422--0427)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.5.25 → 0.5.30)](#backstageplugin-catalog-backend-module-msgraph-0525--0530)
  - [`@backstage/plugin-catalog-backend-module-openapi` (0.1.35 → 0.1.40)](#backstageplugin-catalog-backend-module-openapi-0135--0140)
  - [`@backstage/plugin-catalog-backend-module-puppetdb` (0.1.23 → 0.1.28)](#backstageplugin-catalog-backend-module-puppetdb-0123--0128)
  - [`@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.15 → 0.1.20)](#backstageplugin-catalog-backend-module-scaffolder-entity-model-0115--0120)
  - [`@backstage/plugin-catalog-backend-module-unprocessed` (0.4.4 → 0.4.9)](#backstageplugin-catalog-backend-module-unprocessed-044--049)
  - [`@backstage/plugin-catalog-graph` (0.4.4 → 0.4.7)](#backstageplugin-catalog-graph-044--047)
  - [`@backstage/plugin-catalog-unprocessed-entities` (0.2.3 → 0.2.6)](#backstageplugin-catalog-unprocessed-entities-023--026)
  - [`@backstage/plugin-config-schema` (0.1.54 → 0.1.57)](#backstageplugin-config-schema-0154--0157)
  - [`@backstage/plugin-devtools` (0.1.13 → 0.1.16)](#backstageplugin-devtools-0113--0116)
  - [`@backstage/plugin-devtools-backend` (0.3.3 → 0.3.8)](#backstageplugin-devtools-backend-033--038)
  - [`@backstage/plugin-devtools-common` (0.1.9 → 0.1.11)](#backstageplugin-devtools-common-019--0111)
  - [`@backstage/plugin-events-backend` (0.3.4 → 0.3.9)](#backstageplugin-events-backend-034--039)
  - [`@backstage/plugin-events-backend-module-aws-sqs` (0.3.3 → 0.3.8)](#backstageplugin-events-backend-module-aws-sqs-033--038)
  - [`@backstage/plugin-events-backend-module-azure` (0.2.3 → 0.2.8)](#backstageplugin-events-backend-module-azure-023--028)
  - [`@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.3 → 0.2.8)](#backstageplugin-events-backend-module-bitbucket-cloud-023--028)
  - [`@backstage/plugin-events-backend-module-gerrit` (0.2.3 → 0.2.8)](#backstageplugin-events-backend-module-gerrit-023--028)
  - [`@backstage/plugin-events-backend-module-github` (0.2.3 → 0.2.8)](#backstageplugin-events-backend-module-github-023--028)
  - [`@backstage/plugin-events-backend-module-gitlab` (0.2.3 → 0.2.8)](#backstageplugin-events-backend-module-gitlab-023--028)
  - [`@backstage/plugin-events-backend-test-utils` (0.1.27 → 0.1.32)](#backstageplugin-events-backend-test-utils-0127--0132)
  - [`@backstage/plugin-events-node` (0.3.3 → 0.3.8)](#backstageplugin-events-node-033--038)
  - [`@backstage/plugin-home` (0.7.3 → 0.7.8)](#backstageplugin-home-073--078)
  - [`@backstage/plugin-home-react` (0.1.12 → 0.1.15)](#backstageplugin-home-react-0112--0115)
  - [`@backstage/plugin-kubernetes` (0.11.9 → 0.11.12)](#backstageplugin-kubernetes-0119--01112)
  - [`@backstage/plugin-kubernetes-node` (0.1.11 → 0.1.16)](#backstageplugin-kubernetes-node-0111--0116)
  - [`@backstage/plugin-notifications` (0.2.0 → 0.2.3)](#backstageplugin-notifications-020--023)
  - [`@backstage/plugin-org` (0.6.24 → 0.6.27)](#backstageplugin-org-0624--0627)
  - [`@backstage/plugin-org-react` (0.1.23 → 0.1.26)](#backstageplugin-org-react-0123--0126)
  - [`@backstage/plugin-permission-backend` (0.5.41 → 0.5.46)](#backstageplugin-permission-backend-0541--0546)
  - [`@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.14 → 0.1.19)](#backstageplugin-permission-backend-module-allow-all-policy-0114--0119)
  - [`@backstage/plugin-permission-react` (0.4.22 → 0.4.24)](#backstageplugin-permission-react-0422--0424)
  - [`@backstage/plugin-scaffolder-backend-module-azure` (0.1.9 → 0.1.14)](#backstageplugin-scaffolder-backend-module-azure-019--0114)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket` (0.2.7 → 0.2.12)](#backstageplugin-scaffolder-backend-module-bitbucket-027--0212)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.1.7 → 0.1.12)](#backstageplugin-scaffolder-backend-module-bitbucket-cloud-017--0112)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.1.7 → 0.1.12)](#backstageplugin-scaffolder-backend-module-bitbucket-server-017--0112)
  - [`@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.18 → 0.2.23)](#backstageplugin-scaffolder-backend-module-confluence-to-markdown-0218--0223)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.41 → 0.2.46)](#backstageplugin-scaffolder-backend-module-cookiecutter-0241--0246)
  - [`@backstage/plugin-scaffolder-backend-module-gerrit` (0.1.9 → 0.1.14)](#backstageplugin-scaffolder-backend-module-gerrit-019--0114)
  - [`@backstage/plugin-scaffolder-backend-module-gitea` (0.1.7 → 0.1.12)](#backstageplugin-scaffolder-backend-module-gitea-017--0112)
  - [`@backstage/plugin-scaffolder-backend-module-rails` (0.4.34 → 0.4.39)](#backstageplugin-scaffolder-backend-module-rails-0434--0439)
  - [`@backstage/plugin-scaffolder-backend-module-sentry` (0.1.25 → 0.1.30)](#backstageplugin-scaffolder-backend-module-sentry-0125--0130)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.3.0 → 0.3.6)](#backstageplugin-scaffolder-backend-module-yeoman-030--036)
  - [`@backstage/plugin-scaffolder-node` (0.4.3 → 0.4.8)](#backstageplugin-scaffolder-node-043--048)
  - [`@backstage/plugin-scaffolder-node-test-utils` (0.1.3 → 0.1.9)](#backstageplugin-scaffolder-node-test-utils-013--019)
  - [`@backstage/plugin-search-backend-module-catalog` (0.1.23 → 0.1.28)](#backstageplugin-search-backend-module-catalog-0123--0128)
  - [`@backstage/plugin-search-backend-module-explore` (0.1.23 → 0.1.28)](#backstageplugin-search-backend-module-explore-0123--0128)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.26 → 0.5.32)](#backstageplugin-search-backend-module-pg-0526--0532)
  - [`@backstage/plugin-search-backend-module-stack-overflow-collator` (0.1.10 → 0.1.15)](#backstageplugin-search-backend-module-stack-overflow-collator-0110--0115)
  - [`@backstage/plugin-search-backend-module-techdocs` (0.1.22 → 0.1.27)](#backstageplugin-search-backend-module-techdocs-0122--0127)
  - [`@backstage/plugin-signals-backend` (0.1.3 → 0.1.8)](#backstageplugin-signals-backend-013--018)
  - [`@backstage/plugin-signals-node` (0.1.3 → 0.1.8)](#backstageplugin-signals-node-013--018)
  - [`@backstage/plugin-user-settings` (0.8.5 → 0.8.10)](#backstageplugin-user-settings-085--0810)
  - [`@backstage/plugin-user-settings-backend` (0.2.16 → 0.2.21)](#backstageplugin-user-settings-backend-0216--0221)
  - [`@backstage/theme` (0.5.3 → 0.5.6)](#backstagetheme-053--056)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/catalog-model` (1.4.5 → 1.5.0)](#backstagecatalog-model-145--150)
  - [`@backstage/core-app-api` (1.12.4 → 1.14.1)](#backstagecore-app-api-1124--1141)
  - [`@backstage/plugin-catalog` (1.19.0 → 1.21.1)](#backstageplugin-catalog-1190--1211)
  - [`@backstage/plugin-catalog-backend` (1.21.1 → 1.24.0)](#backstageplugin-catalog-backend-1211--1240)
  - [`@backstage/plugin-catalog-react` (1.11.3 → 1.12.2)](#backstageplugin-catalog-react-1113--1122)
  - [`@backstage/plugin-scaffolder` (1.19.3 → 1.23.0)](#backstageplugin-scaffolder-1193--1230)
  - [`@backstage/plugin-scaffolder-backend` (1.22.5 → 1.23.0)](#backstageplugin-scaffolder-backend-1225--1230)
  - [`@backstage/plugin-scaffolder-react` (1.8.4 → 1.10.0)](#backstageplugin-scaffolder-react-184--1100)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/core-plugin-api` (1.9.2 → 1.9.3)](#backstagecore-plugin-api-192--193)
  - [`@backstage/integration-react` (1.1.26 → 1.1.29)](#backstageintegration-react-1126--1129)
  - [`@backstage/plugin-catalog-common` (1.0.22 → 1.0.25)](#backstageplugin-catalog-common-1022--1025)
  - [`@backstage/plugin-scaffolder-common` (1.5.1 → 1.5.4)](#backstageplugin-scaffolder-common-151--154)
  - [`@backstage/plugin-search` (1.4.10 → 1.4.14)](#backstageplugin-search-1410--1414)
  - [`@backstage/plugin-search-backend` (1.5.7 → 1.5.14)](#backstageplugin-search-backend-157--1514)
  - [`@backstage/plugin-search-backend-node` (1.2.21 → 1.2.27)](#backstageplugin-search-backend-node-1221--1227)
  - [`@backstage/plugin-search-common` (1.2.11 → 1.2.13)](#backstageplugin-search-common-1211--1213)
  - [`@backstage/plugin-search-react` (1.7.10 → 1.7.13)](#backstageplugin-search-react-1710--1713)
  - [`@backstage/plugin-techdocs` (1.10.4 → 1.10.7)](#backstageplugin-techdocs-1104--1107)
  - [`@backstage/plugin-techdocs-addons-test-utils` (1.0.31 → 1.0.36)](#backstageplugin-techdocs-addons-test-utils-1031--1036)
  - [`@backstage/plugin-techdocs-backend` (1.10.4 → 1.10.9)](#backstageplugin-techdocs-backend-1104--1109)
  - [`@backstage/plugin-techdocs-module-addons-contrib` (1.1.9 → 1.1.12)](#backstageplugin-techdocs-module-addons-contrib-119--1112)
  - [`@backstage/plugin-techdocs-node` (1.12.3 → 1.12.8)](#backstageplugin-techdocs-node-1123--1128)
  - [`@backstage/plugin-techdocs-react` (1.2.3 → 1.2.6)](#backstageplugin-techdocs-react-123--126)
  - [`@backstage/test-utils` (1.5.4 → 1.5.9)](#backstagetest-utils-154--159)
  - [`@techdocs/cli` (1.8.10 → 1.8.16)](#techdocscli-1810--1816)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/plugin-auth-backend-module-onelogin-provider` (new, [0.1.3](../changelogs/@backstage/plugin-auth-backend-module-onelogin-provider.md#013))

#### 0.1.0

##### Minor Changes

- [`566d7cb`](https://github.com/backstage/backstage/commit/566d7cb): Separate out the OneLogin provider into its own module

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-catalog-backend-module-gitlab-org` (new, [0.0.5](../changelogs/@backstage/plugin-catalog-backend-module-gitlab-org.md#005))

#### 0.0.2

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

#### 0.0.1

##### Patch Changes

- [`a70377d`](https://github.com/backstage/backstage/commit/a70377d): Added a new `catalog-backend-module-gitlab-org` module which adds the `GitlabOrgDiscoveryEntityProvider` to the catalog's providers using the new backend system.

### `@backstage/plugin-catalog-backend-module-logs` (new, [0.0.1](../changelogs/@backstage/plugin-catalog-backend-module-logs.md#001))

#### 0.0.1

##### Patch Changes

- [`97caf55`](https://github.com/backstage/backstage/commit/97caf55): Creates a new module to make logging catalog errors simple. This module subscribes to catalog events and logs them.

  See [Backstage documentation](https://backstage.io/docs/features/software-catalog/configuration#subscribing-to-catalog-errors) for details on how to install
  and configure the plugin.

### `@backstage/plugin-notifications-backend-module-email` (new, [0.1.3](../changelogs/@backstage/plugin-notifications-backend-module-email.md#013))

#### 0.1.3

##### Patch Changes

- [`4e4ef2b`](https://github.com/backstage/backstage/commit/4e4ef2b): Move notification processor filter parsing to common package

#### 0.1.0

##### Minor Changes

- [`07a789b`](https://github.com/backstage/backstage/commit/07a789b): add notification filters

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

#### 0.0.1

##### Patch Changes

- [`d541ff6`](https://github.com/backstage/backstage/commit/d541ff6): Fixed email processor `esm` issue and config reading
- [`e538b10`](https://github.com/backstage/backstage/commit/e538b10): Support relative links in notifications sent via email
- [`dbf2696`](https://github.com/backstage/backstage/commit/dbf2696): Allow sending notifications by email with the new notifications module

### `@backstage/plugin-scaffolder-backend-module-gcp` (new, [0.1.0](../changelogs/@backstage/plugin-scaffolder-backend-module-gcp.md#010))

#### 0.1.0

##### Minor Changes

- [`0b52438`](https://github.com/backstage/backstage/commit/0b52438): Serialization of the scaffolder workspace into GCP bucket

### `@backstage/plugin-scaffolder-backend-module-notifications` (new, [0.0.5](../changelogs/@backstage/plugin-scaffolder-backend-module-notifications.md#005))

#### 0.0.2

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

#### 0.0.1

##### Patch Changes

- [`503d769`](https://github.com/backstage/backstage/commit/503d769): Add a new scaffolder action to allow sending notifications from templates

### `@backstage/plugin-user-settings-common` (new, [0.0.1](../changelogs/@backstage/plugin-user-settings-common.md#001))

#### 0.0.1

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.
- [`e6ec179`](https://github.com/backstage/backstage/commit/e6ec179): Use signals to update user settings across sessions

## Removed packages

- `@backstage/plugin-adr` ([0.6.18](../changelogs/@backstage/plugin-adr.md#0618))
- `@backstage/plugin-adr-backend` ([0.4.15](../changelogs/@backstage/plugin-adr-backend.md#0415))
- `@backstage/plugin-adr-common` ([0.2.23](../changelogs/@backstage/plugin-adr-common.md#0223))
- `@backstage/plugin-airbrake` ([0.3.35](../changelogs/@backstage/plugin-airbrake.md#0335))
- `@backstage/plugin-airbrake-backend` ([0.3.15](../changelogs/@backstage/plugin-airbrake-backend.md#0315))
- `@backstage/plugin-allure` ([0.1.51](../changelogs/@backstage/plugin-allure.md#0151))
- `@backstage/plugin-analytics-module-ga` ([0.2.5](../changelogs/@backstage/plugin-analytics-module-ga.md#025))
- `@backstage/plugin-analytics-module-ga4` ([0.2.5](../changelogs/@backstage/plugin-analytics-module-ga4.md#025))
- `@backstage/plugin-analytics-module-newrelic-browser` ([0.1.5](../changelogs/@backstage/plugin-analytics-module-newrelic-browser.md#015))
- `@backstage/plugin-apache-airflow` ([0.2.25](../changelogs/@backstage/plugin-apache-airflow.md#0225))
- `@backstage/plugin-apollo-explorer` ([0.2.1](../changelogs/@backstage/plugin-apollo-explorer.md#021))
- `@backstage/plugin-azure-devops` ([0.4.4](../changelogs/@backstage/plugin-azure-devops.md#044))
- `@backstage/plugin-azure-devops-backend` ([0.6.5](../changelogs/@backstage/plugin-azure-devops-backend.md#065))
- `@backstage/plugin-azure-devops-common` ([0.4.2](../changelogs/@backstage/plugin-azure-devops-common.md#042))
- `@backstage/plugin-azure-sites` ([0.1.24](../changelogs/@backstage/plugin-azure-sites.md#0124))
- `@backstage/plugin-azure-sites-backend` ([0.3.5](../changelogs/@backstage/plugin-azure-sites-backend.md#035))
- `@backstage/plugin-azure-sites-common` ([0.1.4](../changelogs/@backstage/plugin-azure-sites-common.md#014))
- `@backstage/plugin-badges` ([0.2.59](../changelogs/@backstage/plugin-badges.md#0259))
- `@backstage/plugin-badges-backend` ([0.4.1](../changelogs/@backstage/plugin-badges-backend.md#041))
- `@backstage/plugin-bazaar` ([0.2.27](../changelogs/@backstage/plugin-bazaar.md#0227))
- `@backstage/plugin-bazaar-backend` ([0.3.16](../changelogs/@backstage/plugin-bazaar-backend.md#0316))
- `@backstage/plugin-bitrise` ([0.1.62](../changelogs/@backstage/plugin-bitrise.md#0162))
- `@backstage/plugin-cicd-statistics` ([0.1.37](../changelogs/@backstage/plugin-cicd-statistics.md#0137))
- `@backstage/plugin-cicd-statistics-module-gitlab` ([0.1.31](../changelogs/@backstage/plugin-cicd-statistics-module-gitlab.md#0131))
- `@backstage/plugin-circleci` ([0.3.35](../changelogs/@backstage/plugin-circleci.md#0335))
- `@backstage/plugin-cloudbuild` ([0.5.2](../changelogs/@backstage/plugin-cloudbuild.md#052))
- `@backstage/plugin-code-climate` ([0.1.35](../changelogs/@backstage/plugin-code-climate.md#0135))
- `@backstage/plugin-code-coverage` ([0.2.28](../changelogs/@backstage/plugin-code-coverage.md#0228))
- `@backstage/plugin-code-coverage-backend` ([0.2.32](../changelogs/@backstage/plugin-code-coverage-backend.md#0232))
- `@backstage/plugin-codescene` ([0.1.27](../changelogs/@backstage/plugin-codescene.md#0127))
- `@backstage/plugin-cost-insights` ([0.12.24](../changelogs/@backstage/plugin-cost-insights.md#01224))
- `@backstage/plugin-cost-insights-common` ([0.1.3](../changelogs/@backstage/plugin-cost-insights-common.md#013))
- `@backstage/plugin-dynatrace` ([10.0.4](../changelogs/@backstage/plugin-dynatrace.md#1004))
- `@backstage/plugin-entity-feedback` ([0.2.18](../changelogs/@backstage/plugin-entity-feedback.md#0218))
- `@backstage/plugin-entity-feedback-backend` ([0.2.15](../changelogs/@backstage/plugin-entity-feedback-backend.md#0215))
- `@backstage/plugin-entity-feedback-common` ([0.1.4](../changelogs/@backstage/plugin-entity-feedback-common.md#014))
- `@backstage/plugin-entity-validation` ([0.1.20](../changelogs/@backstage/plugin-entity-validation.md#0120))
- `@backstage/plugin-explore` ([0.4.21](../changelogs/@backstage/plugin-explore.md#0421))
- `@backstage/plugin-explore-backend` ([0.0.28](../changelogs/@backstage/plugin-explore-backend.md#0028))
- `@backstage/plugin-explore-common` ([0.0.3](../changelogs/@backstage/plugin-explore-common.md#003))
- `@backstage/plugin-explore-react` ([0.0.39](../changelogs/@backstage/plugin-explore-react.md#0039))
- `@backstage/plugin-firehydrant` ([0.2.19](../changelogs/@backstage/plugin-firehydrant.md#0219))
- `@backstage/plugin-fossa` ([0.2.67](../changelogs/@backstage/plugin-fossa.md#0267))
- `@backstage/plugin-gcalendar` ([0.3.28](../changelogs/@backstage/plugin-gcalendar.md#0328))
- `@backstage/plugin-gcp-projects` ([0.3.51](../changelogs/@backstage/plugin-gcp-projects.md#0351))
- `@backstage/plugin-git-release-manager` ([0.3.47](../changelogs/@backstage/plugin-git-release-manager.md#0347))
- `@backstage/plugin-github-actions` ([0.6.16](../changelogs/@backstage/plugin-github-actions.md#0616))
- `@backstage/plugin-github-deployments` ([0.1.66](../changelogs/@backstage/plugin-github-deployments.md#0166))
- `@backstage/plugin-github-issues` ([0.4.2](../changelogs/@backstage/plugin-github-issues.md#042))
- `@backstage/plugin-github-pull-requests-board` ([0.2.1](../changelogs/@backstage/plugin-github-pull-requests-board.md#021))
- `@backstage/plugin-gitops-profiles` ([0.3.50](../changelogs/@backstage/plugin-gitops-profiles.md#0350))
- `@backstage/plugin-gocd` ([0.1.41](../changelogs/@backstage/plugin-gocd.md#0141))
- `@backstage/plugin-graphiql` ([0.3.8](../changelogs/@backstage/plugin-graphiql.md#038))
- `@backstage/plugin-graphql-voyager` ([0.1.17](../changelogs/@backstage/plugin-graphql-voyager.md#0117))
- `@backstage/plugin-ilert` ([0.2.24](../changelogs/@backstage/plugin-ilert.md#0224))
- `@backstage/plugin-jenkins` ([0.9.10](../changelogs/@backstage/plugin-jenkins.md#0910))
- `@backstage/plugin-jenkins-backend` ([0.4.5](../changelogs/@backstage/plugin-jenkins-backend.md#045))
- `@backstage/plugin-jenkins-common` ([0.1.26](../changelogs/@backstage/plugin-jenkins-common.md#0126))
- `@backstage/plugin-kafka` ([0.3.35](../changelogs/@backstage/plugin-kafka.md#0335))
- `@backstage/plugin-kafka-backend` ([0.3.16](../changelogs/@backstage/plugin-kafka-backend.md#0316))
- `@backstage/plugin-lighthouse` ([0.4.20](../changelogs/@backstage/plugin-lighthouse.md#0420))
- `@backstage/plugin-lighthouse-backend` ([0.4.11](../changelogs/@backstage/plugin-lighthouse-backend.md#0411))
- `@backstage/plugin-lighthouse-common` ([0.1.6](../changelogs/@backstage/plugin-lighthouse-common.md#016))
- `@backstage/plugin-linguist` ([0.1.20](../changelogs/@backstage/plugin-linguist.md#0120))
- `@backstage/plugin-linguist-backend` ([0.5.16](../changelogs/@backstage/plugin-linguist-backend.md#0516))
- `@backstage/plugin-linguist-common` ([0.1.3](../changelogs/@backstage/plugin-linguist-common.md#013))
- `@backstage/plugin-microsoft-calendar` ([0.1.17](../changelogs/@backstage/plugin-microsoft-calendar.md#0117))
- `@backstage/plugin-newrelic` ([0.3.50](../changelogs/@backstage/plugin-newrelic.md#0350))
- `@backstage/plugin-newrelic-dashboard` ([0.3.10](../changelogs/@backstage/plugin-newrelic-dashboard.md#0310))
- `@backstage/plugin-nomad` ([0.1.16](../changelogs/@backstage/plugin-nomad.md#0116))
- `@backstage/plugin-nomad-backend` ([0.1.20](../changelogs/@backstage/plugin-nomad-backend.md#0120))
- `@backstage/plugin-octopus-deploy` ([0.2.17](../changelogs/@backstage/plugin-octopus-deploy.md#0217))
- `@backstage/plugin-opencost` ([0.2.10](../changelogs/@backstage/plugin-opencost.md#0210))
- `@backstage/plugin-pagerduty` ([0.7.7](../changelogs/@backstage/plugin-pagerduty.md#077))
- `@backstage/plugin-periskop` ([0.1.33](../changelogs/@backstage/plugin-periskop.md#0133))
- `@backstage/plugin-periskop-backend` ([0.2.16](../changelogs/@backstage/plugin-periskop-backend.md#0216))
- `@backstage/plugin-playlist` ([0.2.9](../changelogs/@backstage/plugin-playlist.md#029))
- `@backstage/plugin-playlist-backend` ([0.3.22](../changelogs/@backstage/plugin-playlist-backend.md#0322))
- `@backstage/plugin-playlist-common` ([0.1.16](../changelogs/@backstage/plugin-playlist-common.md#0116))
- `@backstage/plugin-puppetdb` ([0.1.18](../changelogs/@backstage/plugin-puppetdb.md#0118))
- `@backstage/plugin-rollbar` ([0.4.35](../changelogs/@backstage/plugin-rollbar.md#0435))
- `@backstage/plugin-rollbar-backend` ([0.1.63](../changelogs/@backstage/plugin-rollbar-backend.md#0163))
- `@backstage/plugin-sentry` ([0.5.20](../changelogs/@backstage/plugin-sentry.md#0520))
- `@backstage/plugin-shortcuts` ([0.3.24](../changelogs/@backstage/plugin-shortcuts.md#0324))
- `@backstage/plugin-sonarqube` ([0.7.17](../changelogs/@backstage/plugin-sonarqube.md#0717))
- `@backstage/plugin-sonarqube-backend` ([0.2.20](../changelogs/@backstage/plugin-sonarqube-backend.md#0220))
- `@backstage/plugin-sonarqube-react` ([0.1.16](../changelogs/@backstage/plugin-sonarqube-react.md#0116))
- `@backstage/plugin-splunk-on-call` ([0.4.24](../changelogs/@backstage/plugin-splunk-on-call.md#0424))
- `@backstage/plugin-stack-overflow` ([0.1.30](../changelogs/@backstage/plugin-stack-overflow.md#0130))
- `@backstage/plugin-stack-overflow-backend` ([0.2.22](../changelogs/@backstage/plugin-stack-overflow-backend.md#0222))
- `@backstage/plugin-stackstorm` ([0.1.16](../changelogs/@backstage/plugin-stackstorm.md#0116))
- `@backstage/plugin-tech-insights` ([0.3.27](../changelogs/@backstage/plugin-tech-insights.md#0327))
- `@backstage/plugin-tech-insights-backend` ([0.5.32](../changelogs/@backstage/plugin-tech-insights-backend.md#0532))
- `@backstage/plugin-tech-insights-backend-module-jsonfc` ([0.1.50](../changelogs/@backstage/plugin-tech-insights-backend-module-jsonfc.md#0150))
- `@backstage/plugin-tech-insights-common` ([0.2.13](../changelogs/@backstage/plugin-tech-insights-common.md#0213))
- `@backstage/plugin-tech-insights-node` ([0.6.1](../changelogs/@backstage/plugin-tech-insights-node.md#061))
- `@backstage/plugin-tech-radar` ([0.7.4](../changelogs/@backstage/plugin-tech-radar.md#074))
- `@backstage/plugin-todo` ([0.2.39](../changelogs/@backstage/plugin-todo.md#0239))
- `@backstage/plugin-todo-backend` ([0.3.17](../changelogs/@backstage/plugin-todo-backend.md#0317))
- `@backstage/plugin-vault` ([0.1.30](../changelogs/@backstage/plugin-vault.md#0130))
- `@backstage/plugin-vault-backend` ([0.4.11](../changelogs/@backstage/plugin-vault-backend.md#0411))
- `@backstage/plugin-vault-node` ([0.1.11](../changelogs/@backstage/plugin-vault-node.md#0111))
- `@backstage/plugin-xcmetrics` ([0.2.53](../changelogs/@backstage/plugin-xcmetrics.md#0253))

## Breaking changes

### `@backstage/backend-app-api` (0.7.2 → [0.8.0](../changelogs/@backstage/backend-app-api.md#080))

#### 0.8.0

##### Minor Changes

- [`1cb84d7`](https://github.com/backstage/backstage/commit/1cb84d7): **BREAKING**: Removed the depreacted `getPath` option from `httpRouterServiceFactory`, as well as the `HttpRouterFactoryOptions` type.
- [`f691c9b`](https://github.com/backstage/backstage/commit/f691c9b): **BREAKING**: Removed the ability to pass callback-form service factories through the `defaultServiceFactories` option of `createSpecializedBackend`. This is an immediate breaking change as usage of this function is expected to be very rare.

##### Patch Changes

- [`2f99178`](https://github.com/backstage/backstage/commit/2f99178): The `ServiceFactoryTest.get` method was deprecated and the `ServiceFactoryTest.getSubject` should be used instead. The `getSubject` method has the same behavior, but has a better method name to indicate that the service instance returned is the subject currently being tested.
- [`b05e1e1`](https://github.com/backstage/backstage/commit/b05e1e1): Service factories exported by this package have been updated to use the new service factory format that doesn't use a callback.
- [`617a7d2`](https://github.com/backstage/backstage/commit/617a7d2): Internal refactor that avoids the use of service factory options.
- [`b60db08`](https://github.com/backstage/backstage/commit/b60db08): Fixing exporting of classes properly from new packages
- [`18b96b1`](https://github.com/backstage/backstage/commit/18b96b1): The ability to install backend features in callback form (`() => BackendFeature`) has been deprecated. This typically means that you need to update the installed features to use the latest version of `@backstage/backend-plugin-api`. If the feature is from a third-party package, please reach out to the package maintainer to update it.
- [`a63c4b6`](https://github.com/backstage/backstage/commit/a63c4b6): Fixing issue with `MiddlewareFactory` deprecation wrapping

#### 0.7.6

##### Patch Changes

- [`b7de623`](https://github.com/backstage/backstage/commit/b7de623): Fixed a potential crash when passing an object with a `null` prototype as log meta.
- [`9539a0b`](https://github.com/backstage/backstage/commit/9539a0b): Deprecated `authServiceFactory`, `httpAuthServiceFactory`, and `userInfoServiceFactory`. Please import them from `@backstage/backend-defaults/auth`, `@backstage/backend-defaults/httpAuth`, and `@backstage/backend-defaults/userInfo` respectively instead.
- [`3e823d3`](https://github.com/backstage/backstage/commit/3e823d3): Limited user tokens will no longer include the `ent` field in its payload. Ownership claims will now be fetched from the user info service.

  NOTE: Limited tokens issued prior to this change will no longer be valid. Users may have to clear their browser cookies in order to refresh their auth tokens.

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`398b82a`](https://github.com/backstage/backstage/commit/398b82a): Add support for JWKS tokens in ExternalTokenHandler.
- [`9e63318`](https://github.com/backstage/backstage/commit/9e63318): Added an optional `accessRestrictions` to external access service tokens and service principals in general, such that you can limit their access to certain plugins or permissions.
- [`e25e467`](https://github.com/backstage/backstage/commit/e25e467): Added a new static key based method for plugin-to-plugin auth. This is useful for example if you are running readonly service nodes that cannot use a database for the default public-key signature scheme outlined in [BEP-0003](https://github.com/backstage/backstage/tree/master/beps/0003-auth-architecture-evolution). Most users should want to stay on the more secure zero-config database signature scheme.

  You can generate a public and private key pair using `openssl`.

  - First generate a private key using the ES256 algorithm

    ```sh
    openssl ecparam -name prime256v1 -genkey -out private.ec.key
    ```

  - Convert it to PKCS#8 format

    ```sh
    openssl pkcs8 -topk8 -inform PEM -outform PEM -nocrypt -in private.ec.key -out private.key
    ```

  - Extract the public key

    ```sh
    openssl ec -inform PEM -outform PEM -pubout -in private.key -out public.key
    ```

  After this you have the files `private.key` and `public.key`. Put them in a place where you know their absolute paths, and then set up your app-config accordingly:

  ```yaml
  backend:
    auth:
      keyStore:
        type: static
        static:
          keys:
            - publicKeyFile: /absolute/path/to/public.key
              privateKeyFile: /absolute/path/to/private.key
              keyId: some-custom-id
  ```

- [`7d30d95`](https://github.com/backstage/backstage/commit/7d30d95): Fixing issue with log meta fields possibly being circular refs
- [`6a576dc`](https://github.com/backstage/backstage/commit/6a576dc): Stop using `getVoidLogger` in tests to reduce the dependency on the soon-to-deprecate `backstage-common` package.
- [`6551b3d`](https://github.com/backstage/backstage/commit/6551b3d): Deprecated core service factories and implementations and moved them over to
  subpath exports on `@backstage/backend-defaults` instead. E.g.
  `@backstage/backend-defaults/scheduler` is where the service factory and default
  implementation of `coreServices.scheduler` now lives.
- [`d617103`](https://github.com/backstage/backstage/commit/d617103): Updating the logger redaction message to something less dramatic

#### 0.7.3

##### Patch Changes

- [`4cd5ff0`](https://github.com/backstage/backstage/commit/4cd5ff0): Add ability to configure the Node.js HTTP Server when configuring the root HTTP Router service
- [`e8199b1`](https://github.com/backstage/backstage/commit/e8199b1): Move the JWKS registration outside of the lifecycle middleware
- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.
- [`dc8c5dd`](https://github.com/backstage/backstage/commit/dc8c5dd): The default `TokenManager` implementation no longer requires keys to be configured in production, but it will throw an errors when generating or authenticating tokens. The default `AuthService` implementation will now also provide additional context if such an error is throw when falling back to using the `TokenManager` service to generate tokens for outgoing requests.
- [`025641b`](https://github.com/backstage/backstage/commit/025641b): Redact `meta` fields too with the logger
- [`09f8988`](https://github.com/backstage/backstage/commit/09f8988): Remove explicit `alg` check for user tokens in `verifyToken`
- [`5863e02`](https://github.com/backstage/backstage/commit/5863e02): Internal refactor to only create one external token handler
- [`a1dc547`](https://github.com/backstage/backstage/commit/a1dc547): Added support for camel case CSP directives in app-config. For example:

  ```yaml
  backend:
    csp:
      upgradeInsecureRequests: false
  ```

- [`329cc34`](https://github.com/backstage/backstage/commit/329cc34): Added logging of all plugins being initialized, periodic status, and completion.

### `@backstage/backend-common` (0.21.7 → [0.23.3](../changelogs/@backstage/backend-common.md#0233))

#### 0.23.3

##### Patch Changes

- [`8c09c97`](https://github.com/backstage/backstage/commit/8c09c97): Deprecate legacy status check factory, handler and types.
- [`d228862`](https://github.com/backstage/backstage/commit/d228862): Update default backend plugin created by the cli to use non-deprecated error handling middleware
- [`c964a3d`](https://github.com/backstage/backstage/commit/c964a3d): Add dependencies that are needed by cross-imports from backend-defaults
- [`b60db08`](https://github.com/backstage/backstage/commit/b60db08): Fixing exporting of classes properly from new packages
- [`b9ed1bb`](https://github.com/backstage/backstage/commit/b9ed1bb): bumped better-sqlite3 from ^9.0.0 to ^11.0.0

#### 0.23.0

##### Minor Changes

- [`395b973`](https://github.com/backstage/backstage/commit/395b973): Implemented `readTree` for Harness provider to support TechDocs functionality
- [`02103be`](https://github.com/backstage/backstage/commit/02103be): Deprecated and moved over core services to `@backstage/backend-defaults`

##### Patch Changes

- [`9539a0b`](https://github.com/backstage/backstage/commit/9539a0b): Import utility functions from `backend-defaults` instead of `backend-app-api`
- [`b2c4607`](https://github.com/backstage/backstage/commit/b2c4607): Removed accents on deprecation note
- [`c6c0919`](https://github.com/backstage/backstage/commit/c6c0919): Updated configuration schema to include the `useRedisSets` cache config option.
- [`ed3074e`](https://github.com/backstage/backstage/commit/ed3074e): The `database` types, helpers and implementations were moved to the package `@backstage/backend-defaults` and deprecated from the package `@backstage/backend-commons`.
- [`9cca724`](https://github.com/backstage/backstage/commit/9cca724): The `TokenManager` has been deprecated in preparation for the [stable release of the New Backend System](https://github.com/backstage/backstage/issues/24493). Please [migrate](https://backstage.io/docs/tutorials/auth-service-migration) to the new `coreServices.auth`, `coreServices.httpAuth`, and `coreServices.userInfo` services as needed instead.
- [`1779188`](https://github.com/backstage/backstage/commit/1779188): In preparation to the new backend system stable release, the `isDatabaseConflictError` helper have been moved to the `@backstage/backend-plugin-api` package and deprecated from `@backstage/backend-common`.
- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`e171620`](https://github.com/backstage/backstage/commit/e171620): Move `cache` implementation and types to the `@backstage/backend-defaults` package.
- [`1a6f38a`](https://github.com/backstage/backstage/commit/1a6f38a): `ContainerRunner`, `DockerContainerRunner` and `KubernetesContainerRunner` are now deprecated
- [`8869b8e`](https://github.com/backstage/backstage/commit/8869b8e): We are deprecating the legacy `createServiceBuilder` factory, so if you are still using it, please checkout the migration guide and [migrate](https://backstage.io/docs/backend-system/building-plugins-and-modules/migrating) your plugin to use the new backend system.
- [`0634fdc`](https://github.com/backstage/backstage/commit/0634fdc): Deprecated `dropDatabase`
- [`b2ee7f3`](https://github.com/backstage/backstage/commit/b2ee7f3): Moved over all URL reader functionality from `@backstage/backend-common` to `@backstage/backend-defaults/urlReader`. Please update your imports.
- [`d94a477`](https://github.com/backstage/backstage/commit/d94a477): Removed the circular dependency on `@backstage/backend-app-api`
- [`3bd04bb`](https://github.com/backstage/backstage/commit/3bd04bb): We are deprecating the legacy router handlers and contexts in preparation for the new backend system stable release.
- [`23ee9ab`](https://github.com/backstage/backstage/commit/23ee9ab): Fix AWS CodeCommit integration by allowing to change the host
- [`e9a03c9`](https://github.com/backstage/backstage/commit/e9a03c9): Finalizes the deprecation of legacy backend utilities. Deprecated utilities include the `ServiceBuilder` type, `notFoundHandler` and `redactWintonLogLine` functions.
- [`6a576dc`](https://github.com/backstage/backstage/commit/6a576dc): Deprecate legacy service logger helpers and stop using `getVoidLogger` in tests.
- [`032a7a6`](https://github.com/backstage/backstage/commit/032a7a6): Deprecate the legacy error and request logging handler types, respectively: `ErrorHandlerOptions` and `RequestLoggingHandlerFactory`.

#### 0.22.0

##### Minor Changes

- [`ed83f85`](https://github.com/backstage/backstage/commit/ed83f85): Internal refactor of the database code.

  **BREAKING**: The helper functions `createDatabaseClient` and `ensureDatabaseExists` have been removed from the public interface, since they have no usage within the repository and never were suitable for calling from the outside. Please consider using `coreServices.database` or `DatabaseManager` directly wherever possible instead.

##### Patch Changes

- [`2cc750d`](https://github.com/backstage/backstage/commit/2cc750d): Added `HarnessURLReader` with `readUrl` support.
- [`57f692e`](https://github.com/backstage/backstage/commit/57f692e): Preparing for a stable new backend system release, we are deprecating utilities in the `backend-common` that are not used by the core framework, such as the isomorphic `Git` class. As we will no longer support the isomorphic `Git` utility in the framework packages, we recommend plugins that start maintaining their own implementation of this class.
- [`0ec0796`](https://github.com/backstage/backstage/commit/0ec0796): Plugins created through the `legacyPlugin` helper are now able to authenticate requests from plugins that are fully implemented using the new backend system. This fixes the `Key for the ES256 algorithm must be one of type KeyObject or CryptoKey. Received an instance of Uint8Array` error.
- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.
- [`ccc8851`](https://github.com/backstage/backstage/commit/ccc8851): Added config prop `ensureSchemaExists` to support postgres instances where user can create schemas but not databases.
- [`f66bbb4`](https://github.com/backstage/backstage/commit/f66bbb4): Only create a single actual connection to memcache/redis, even in cases where many `CacheService` instances are made
- [`ba0b8b4`](https://github.com/backstage/backstage/commit/ba0b8b4): Added option to `ServerTokenManager.fromConfig` that allows it to be instantiated in production without any configured keys.

### `@backstage/backend-defaults` (0.2.17 → [0.4.1](../changelogs/@backstage/backend-defaults.md#041))

#### 0.4.0

##### Minor Changes

- [`1cb84d7`](https://github.com/backstage/backstage/commit/1cb84d7): **BREAKING**: Removed the depreacted `getPath` option from `httpRouterServiceFactory`, as well as the `HttpRouterFactoryOptions` type.

##### Patch Changes

- [`53ced70`](https://github.com/backstage/backstage/commit/53ced70): Added a new Root Health Service which adds new endpoints for health checks.
- [`2f99178`](https://github.com/backstage/backstage/commit/2f99178): The `ServiceFactoryTest.get` method was deprecated and the `ServiceFactoryTest.getSubject` should be used instead. The `getSubject` method has the same behavior, but has a better method name to indicate that the service instance returned is the subject currently being tested.
- [`083eaf9`](https://github.com/backstage/backstage/commit/083eaf9): Fix bug where ISO durations could no longer be used for schedules
- [`b05e1e1`](https://github.com/backstage/backstage/commit/b05e1e1): Service factories exported by this package have been updated to use the new service factory format that doesn't use a callback.
- [`419f387`](https://github.com/backstage/backstage/commit/419f387): Refactor of `rootHttpRouterServiceFactory` to allow it to be constructed with options, but without declaring options via `createServiceFactory`.
- [`cb14a05`](https://github.com/backstage/backstage/commit/cb14a05): Repack the package to fix issues with typescript with named exports
- [`b9ed1bb`](https://github.com/backstage/backstage/commit/b9ed1bb): bumped better-sqlite3 from ^9.0.0 to ^11.0.0
- [`e28af58`](https://github.com/backstage/backstage/commit/e28af58): Refactor of `rootConfigServiceFactory` to allow it to be constructed with options, but without declaring options via `createServiceFactory`.

#### 0.3.0

##### Minor Changes

- [`662dce8`](https://github.com/backstage/backstage/commit/662dce8): **BREAKING**: The `workdir` argument have been removed from The `GerritUrlReader` constructor.

  **BREAKING**: The Gerrit `readTree` implementation will now only use the Gitiles api. Support
  for using git to clone the repo has been removed.

- [`02103be`](https://github.com/backstage/backstage/commit/02103be): Deprecated and moved over core services to `@backstage/backend-defaults`

##### Patch Changes

- [`1897169`](https://github.com/backstage/backstage/commit/1897169): Exposed `DefaultSchedulerService`
- [`b5bc997`](https://github.com/backstage/backstage/commit/b5bc997): Refactor cache manager inline types.
- [`e171620`](https://github.com/backstage/backstage/commit/e171620): Remove dependency with `@backstage/backend-commons` package.
- [`6551b3d`](https://github.com/backstage/backstage/commit/6551b3d): Added core service factories and implementations from
  `@backstage/backend-app-api`. They are now available as subpath exports, e.g.
  `@backstage/backend-defaults/scheduler` is where the service factory and default
  implementation of `coreServices.scheduler` now lives. They have been marked as
  deprecated in their old locations.
- [`8aab451`](https://github.com/backstage/backstage/commit/8aab451): Internal minor refactors of the database connectors
- [`0634fdc`](https://github.com/backstage/backstage/commit/0634fdc): Deprecated `dropDatabase`
- [`b2ee7f3`](https://github.com/backstage/backstage/commit/b2ee7f3): Moved over all URL reader functionality from `@backstage/backend-common` to `@backstage/backend-defaults/urlReader`. Please update your imports.
- [`9539a0b`](https://github.com/backstage/backstage/commit/9539a0b): Added `@backstage/backend-defaults/auth`, `@backstage/backend-defaults/httpAuth`, and `@backstage/backend-defaults/userInfo` to house their respective backend service factories. You should now import these services from those new locations, instead of `@backstage/backend-app-api`.

#### 0.2.18

##### Patch Changes

- [`7e5a50d`](https://github.com/backstage/backstage/commit/7e5a50d): added `eventsServiceFactory` to `defaultServiceFactories` to resolve issue where different instances of the EventsServices could be used

### `@backstage/backend-plugin-api` (0.6.17 → [0.7.0](../changelogs/@backstage/backend-plugin-api.md#070))

#### 0.7.0

##### Minor Changes

- [`36f91e8`](https://github.com/backstage/backstage/commit/36f91e8): **BREAKING**: The `PermissionsService` no longer supports passing the deprecated `token` option, and the request options are now required.

##### Patch Changes

- [`53ced70`](https://github.com/backstage/backstage/commit/53ced70): Added a new Root Health Service which adds new endpoints for health checks.
- [`083eaf9`](https://github.com/backstage/backstage/commit/083eaf9): Fix bug where ISO durations could no longer be used for schedules
- [`062c01c`](https://github.com/backstage/backstage/commit/062c01c): Deprecated the ability to define options for service factories through `createServiceFactory`. In the future all service factories will return a plain `ServiceFactory` object, rather than allowing users to pass options to the factory. To allow for customization of a service implementation one can instead export one or a few building blocks that allows for simple re-implementation of the service instead.

  For example, instead of:

  ```ts
  export const fooServiceFactory = createServiceFactory<FooService>(
    (options?: { bar: string }) => ({
      service: fooServiceRef,
      deps: { logger: coreServices.logger },
      factory({ logger }) {
        return {
          // Implementation of the foo service using the `bar` option.
        };
      },
    }),
  );
  ```

  We instead encourage service implementations to provide an easy to use API for re-implementing the service for advanced use-cases:

  ```ts
  /** @public */
  export class DefaultFooService implements FooService {
    static create(options: { bar: string; logger: LoggerService }) {
      return new DefaultFooService(options.logger, options.bar ?? 'default');
    }

    private constructor(
      private readonly logger: string,
      private readonly bar: string,
    ) {}

    // The rest of the implementation
  }
  ```

  A user that wishes to customize the service can then easily do so by defining their own factory:

  ```ts
  export const customFooServiceFactory = createServiceFactory<FooService>({
    service: fooServiceRef,
    deps: { logger: coreServices.logger },
    factory({ logger }) {
      return DefaultFooService.create({ logger, bar: 'baz' });
    },
  });
  ```

  This is of course more verbose than the previous solution where the factory could be customized through `fooServiceFactory({ bar: 'baz' })`, but this is a simplified which in practice should be using static configuration instead.

  In cases where the old options patterns significantly improves the usability of the service factory, the old pattern can still be implemented like this:

  ```ts
  const fooServiceFactoryWithOptions = (options?: { bar: string }) =>
    createServiceFactory<FooService>({
      service: fooServiceRef,
      deps: { logger: coreServices.logger },
      factory({ logger }) {
        return {
          // Implementation of the foo service using the `bar` option.
        };
      },
    });

  export const fooServiceFactory = Object.assign(
    fooServiceFactoryWithOptions,
    fooServiceFactoryWithOptions(),
  );
  ```

  This change is being made because the ability to define an options callback encourages bad design of services factories. When possible, a service should be configurable through static configuration, and the existence of options may discourage that. More importantly though, the existing options do not work well with the dependency injection system of services, which is a problem for callbacks an other more advanced options. This lead to a bad pattern where only a few explicit dependencies where made available in callbacks, rather than providing an API that allowed simple re-implementation of the service with full access to dependency injection.

  A separate benefit of this change is that it simplifies the TypeScript types in a way that allows TypeScript to provide a much better error message when a service factory doesn't properly implement the service interface.

- [`fe47a3e`](https://github.com/backstage/backstage/commit/fe47a3e): All service config types were renamed to option types in order to standardize frontend and backend `create*` function signatures:

  - The `ServiceRefConfig` type was renamed to`ServiceRefOptions`;
  - The `RootServiceFactoryConfig` type was renamed to `RootServiceFactoryOptions`;
  - The `PluginServiceFactoryConfig` type was renamed to `PluginServiceFactoryOptions`

#### 0.6.19

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): **DEPRECATION**: You should no longer do a function call on backend features when adding them to backends. The support for doing that is deprecated, and you should remove all trailing `()` parentheses after plugins and modules where you add them to your backend or test backends (e.g. when using `startTestBackend`).

  The background for this is that `createBackendPlugin` and `createBackendModule` function now effectively return a `BackendFeature` rather than a `() => BackendFeature`. This is part of the cleanup efforts for New Backend System 1.0. In the short run this is non-breaking because the feature type has been given a callback signature that returns itself. But we strongly recommend that you remove all now-redundant calls made to feature objects, because that callback signature will be removed in a future release.

  Service factories are still callbacks at this point.

  Example change:

  ```diff
   await startTestBackend({
     features: [
       eventsServiceFactory(), // service - stays unchanged
  -    catalogModuleBitbucketCloudEntityProvider(), // module - remove parentheses
  +    catalogModuleBitbucketCloudEntityProvider,
  ```

- [`9bdc3e8`](https://github.com/backstage/backstage/commit/9bdc3e8): In tests, return `null` rather than throwing an error when trying to get the `ExtensionPoint.T` property, so that tests asserting the property are not easily broken.
- [`9e63318`](https://github.com/backstage/backstage/commit/9e63318): Added an optional `accessRestrictions` to external access service tokens and service principals in general, such that you can limit their access to certain plugins or permissions.
- [`3aa3fc7`](https://github.com/backstage/backstage/commit/3aa3fc7): Marked the `TokenManagerService` and `IdentityService` types as deprecated
- [`b2ee7f3`](https://github.com/backstage/backstage/commit/b2ee7f3): Deprecated all of the `UrlReader` related type names and replaced them with prefixed versions. Please update your imports.

  - `ReadTreeOptions` was renamed to `UrlReaderServiceReadTreeOptions`
  - `ReadTreeResponse` was renamed to `UrlReaderServiceReadTreeResponse`
  - `ReadTreeResponseDirOptions` was renamed to `UrlReaderServiceReadTreeResponseDirOptions`
  - `ReadTreeResponseFile` was renamed to `UrlReaderServiceReadTreeResponseFile`
  - `ReadUrlResponse` was renamed to `UrlReaderServiceReadUrlResponse`
  - `ReadUrlOptions` was renamed to `UrlReaderServiceReadUrlOptions`
  - `SearchOptions` was renamed to `UrlReaderServiceSearchOptions`
  - `SearchResponse` was renamed to `UrlReaderServiceSearchResponse`
  - `SearchResponseFile` was renamed to `UrlReaderServiceSearchResponseFile`

- [`9539a0b`](https://github.com/backstage/backstage/commit/9539a0b): Improved `coreServices` doc comments
- [`6551b3d`](https://github.com/backstage/backstage/commit/6551b3d): Moved the declaration of the `SchedulerService` here, along with prefixed versions of all of the types it depends on, from `@backstage/backend-tasks`
- [`0665b7e`](https://github.com/backstage/backstage/commit/0665b7e): Renamed `BackendPluginConfig`, `BackendModuleConfig`, and `ExtensionPointConfig` respectively to `CreateBackendPluginOptions`, `CreateBackendModuleOptions`, and `CreateExtensionPointOptions` to standardize frontend and backend factories signatures.
- [`1779188`](https://github.com/backstage/backstage/commit/1779188): Start using the `isDatabaseConflictError` helper from the `@backstage/backend-plugin-api` package in order to avoid dependency with the soon to deprecate `@backstage/backend-common` package.

#### 0.6.18

##### Patch Changes

- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.
- [`1fedf0c`](https://github.com/backstage/backstage/commit/1fedf0c): Removed explicit `toString()` method from `ServiceRef` type.

### `@backstage/integration` (1.10.0 → [1.13.0](../changelogs/@backstage/integration.md#1130))

#### 1.13.0

##### Minor Changes

- [`b5deed0`](https://github.com/backstage/backstage/commit/b5deed0): Add support for `token` for `bitbucketCloud` integration

#### 1.12.0

##### Minor Changes

- [`be1014d`](https://github.com/backstage/backstage/commit/be1014d): **BREAKING** Removed deprecated code from when casing was changed from `GitHub` to `Github` nearly two years ago. The following items have been removed:

  - `getGitHubFileFetchUrl` (use `getGithubFileFetchUrl` instead)
  - `GitHubIntegrationConfig` (use `GithubIntegrationConfig` instead)
  - `GitHubIntegration` (use `GithubIntegration` instead)
  - `readGitHubIntegrationConfig` (use `readGithubIntegrationConfig` instead)
  - `readGitHubIntegrationConfigs` (use `readGithubIntegrationConfigs` instead)
  - `replaceGitHubUrlType` (use `replaceGithubUrlType` instead)

- [`395b973`](https://github.com/backstage/backstage/commit/395b973): Implemented `readTree` for Harness provider to support TechDocs functionality
- [`662dce8`](https://github.com/backstage/backstage/commit/662dce8): **BREAKING**: `gitilesBaseUrl` is now mandatory for the Gerrit integration. The
  ability to override this requirement using the `DISABLE_GERRIT_GITILES_REQUIREMENT`
  environment variable has been removed.

##### Patch Changes

- [`509e08c`](https://github.com/backstage/backstage/commit/509e08c): Updated function for getHarnessEditContentsUrl
- [`23ee9ab`](https://github.com/backstage/backstage/commit/23ee9ab): Fix AWS CodeCommit integration by allowing to change the host

#### 1.11.0

##### Minor Changes

- [`2cc750d`](https://github.com/backstage/backstage/commit/2cc750d): Added `HarnessIntegration` via the `ScmIntegrations` interface.

### `@backstage/plugin-auth-backend-module-atlassian-provider` (0.1.9 → [0.2.3](../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#023))

#### 0.2.3

##### Patch Changes

- [`b9832ae`](https://github.com/backstage/backstage/commit/b9832ae): Fix several issues with the Atlassian auth provider (type definition, profile url, profile transformation, scopes)

#### 0.2.0

##### Minor Changes

- [`8efc6cf`](https://github.com/backstage/backstage/commit/8efc6cf): **BREAKING**: The `scope` and `scopes` config options have been removed and replaced by the standard `additionalScopes` config. In addition, the `offline_access`, `read:jira-work`, and `read:jira-user` scopes have been set to required and will always be present.

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-auth-backend-module-oauth2-provider` (0.1.14 → [0.2.3](../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#023))

#### 0.2.0

##### Minor Changes

- [`8efc6cf`](https://github.com/backstage/backstage/commit/8efc6cf): **BREAKING**: The `scope` config option have been removed and replaced by the standard `additionalScopes` config.

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-auth-backend-module-oidc-provider` (0.1.8 → [0.2.3](../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#023))

#### 0.2.0

##### Minor Changes

- [`8efc6cf`](https://github.com/backstage/backstage/commit/8efc6cf): **BREAKING**: The `scope` config option have been removed and replaced by the standard `additionalScopes` config. In addition, `openid`, `profile`, and `email` scopes have been set to required and will always be present.

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.
- [`4f21993`](https://github.com/backstage/backstage/commit/4f21993): if oidc server do not provide revocation_endpoint，we should not call revoke function

#### 0.1.9

##### Patch Changes

- [`dd53bf3`](https://github.com/backstage/backstage/commit/dd53bf3): Add nonce to authorize request to be added in ID token

### `@backstage/plugin-auth-backend-module-pinniped-provider` (0.1.11 → [0.1.16](../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#0116))

#### 0.1.13

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`8efc6cf`](https://github.com/backstage/backstage/commit/8efc6cf): **BREAKING**: The `scope` config option have been removed and replaced by the standard `additionalScopes` config. In addition, the `openid`, `pinniped:request-audience`, `username`, and `offline_access` scopes have been set to required and will always be present.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.1.9 → [0.2.3](../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#023))

#### 0.2.0

##### Minor Changes

- [`8efc6cf`](https://github.com/backstage/backstage/commit/8efc6cf): **BREAKING**: The `scope` config option have been removed and replaced by the standard `additionalScopes` config. In addition, `openid`, and `offline_access` scopes have been set to required and will always be present.

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-catalog-backend-module-ldap` (0.5.33 → [0.7.0](../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#070))

#### 0.7.0

##### Minor Changes

- [`cb32ca7`](https://github.com/backstage/backstage/commit/cb32ca7): **BREAKING**: `readLdapOrg` and the `LdapProviderConfig` type now always accept arrays of user and group configs, not just single items.

  Added support for single ldap catalog provider to provide list and undefined user and group bindings next to standard single one.

##### Patch Changes

- [`083eaf9`](https://github.com/backstage/backstage/commit/083eaf9): Fix bug where ISO durations could no longer be used for schedules

#### 0.6.0

##### Minor Changes

- [`debcc8c`](https://github.com/backstage/backstage/commit/debcc8c): Migrate LDAP catalog module to the new backend system.

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

#### 0.5.34

##### Patch Changes

- [`7699967`](https://github.com/backstage/backstage/commit/7699967): Remove dependency to Winston Logger and use Backstage LoggerService instead

### `@backstage/plugin-catalog-node` (1.11.1 → [1.12.4](../changelogs/@backstage/plugin-catalog-node.md#1124))

#### 1.12.1

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

#### 1.12.0

##### Minor Changes

- [`f2a2a83`](https://github.com/backstage/backstage/commit/f2a2a83): Added `LocationAnalyzer` type, moved from `@backstage/plugin-catalog-backend`.
- [`f2a2a83`](https://github.com/backstage/backstage/commit/f2a2a83): Breaking change to `/alpha` API where the `catalogAnalysisExtensionPoint` has been reworked. The `addLocationAnalyzer` method has been renamed to `addScmLocationAnalyzer`, and a new `setLocationAnalyzer` method has been added which allows the full `LocationAnalyzer` implementation to be overridden.

### `@backstage/plugin-permission-common` (0.7.13 → [0.8.0](../changelogs/@backstage/plugin-permission-common.md#080))

#### 0.8.0

##### Minor Changes

- [`f4085b8`](https://github.com/backstage/backstage/commit/f4085b8): **BREAKING**: Removed the deprecated and unused `token` option from `EvaluatorRequestOptions`. The `PermissionsClient` now has its own `PermissionClientRequestOptions` type that declares the `token` option instead.

#### 0.7.14

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-permission-node` (0.7.28 → [0.8.0](../changelogs/@backstage/plugin-permission-node.md#080))

#### 0.8.0

##### Minor Changes

- [`36f91e8`](https://github.com/backstage/backstage/commit/36f91e8): **BREAKING**: Updated the `ServerPermissionClient` to match the new `PermissionsService` interface, where the deprecated `token` option has been removed and the options are now required.

##### Patch Changes

- [`ed10fd2`](https://github.com/backstage/backstage/commit/ed10fd2): The `PermissionPolicy` interface has been updated to align with the recent changes to the Backstage auth system. The second argument to the `handle` method is now of the new `PolicyQueryUser` type. This type maintains the old fields from the `BackstageIdentityResponse`, which are now all deprecated. Instead, two new fields have been added, which allows access to the same information:

  - `credentials` - A `BackstageCredentials` object, which is useful for making requests to other services on behalf of the user as part of evaluating the policy. This replaces the deprecated `token` field. See the [Auth Service documentation](https://backstage.io/docs/backend-system/core-services/auth#creating-request-tokens) for information about how to create a token using these credentials.
  - `info` - A `BackstageUserInfo` object, which contains the same information as the deprecated `identity`, except for the `type` field that was redundant.

  Most existing policies can be updated by replacing the `BackstageIdentityResponse` type with `PolicyQueryUser`, which is exported from `@backstage/plugin-permission-node`, as well as replacing any occurrences of `user?.identity` with `user?.info`.

- [`28b2cfb`](https://github.com/backstage/backstage/commit/28b2cfb): Fix invalid cross-reference in API Reference docs

#### 0.7.30

##### Patch Changes

- [`9e63318`](https://github.com/backstage/backstage/commit/9e63318): Ensure that service token access restrictions, when present, are taken into account
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.
- [`c7b0dd1`](https://github.com/backstage/backstage/commit/c7b0dd1): Import `tokenManager` definition from `@backstage/backend-plugin-api`

### `@backstage/plugin-proxy-backend` (0.4.15 → [0.5.3](../changelogs/@backstage/plugin-proxy-backend.md#053))

#### 0.5.0

##### Minor Changes

- [`88480e4`](https://github.com/backstage/backstage/commit/88480e4): **BREAKING**: The proxy backend plugin is now protected by Backstage auth, by
  default. Unless specifically configured (see below), all proxy endpoints will
  reject requests immediately unless a valid Backstage user or service token is
  passed along with the request. This aligns the proxy with how other Backstage
  backends behave out of the box, and serves to protect your upstreams from
  unauthorized access.

  A proxy configuration section can now look as follows:

  ```yaml
  proxy:
    endpoints:
      '/pagerduty':
        target: https://api.pagerduty.com
        credentials: require # NEW!
        headers:
          Authorization: Token token=${PAGERDUTY_TOKEN}
  ```

  There are three possible `credentials` settings at this point:

  - `require`: Callers must provide Backstage user or service credentials with
    each request. The credentials are not forwarded to the proxy target.
  - `forward`: Callers must provide Backstage user or service credentials with
    each request, and those credentials are forwarded to the proxy target.
  - `dangerously-allow-unauthenticated`: No Backstage credentials are required to
    access this proxy target. The target can still apply its own credentials
    checks, but the proxy will not help block non-Backstage-blessed callers. If
    you also add `allowedHeaders: ['Authorization']` to an endpoint configuration,
    then the Backstage token (if provided) WILL be forwarded.

  The value `dangerously-allow-unauthenticated` was the old default.

  The value `require` is the new default, so requests that were previously
  permitted may now start resulting in `401 Unauthorized` responses. If you have
  `backend.auth.dangerouslyDisableDefaultAuthPolicy` set to `true`, this does not
  apply; the proxy will behave as if all endpoints were set to
  `dangerously-allow-unauthenticated`.

  If you have proxy endpoints that require unauthenticated access still, please
  add `credentials: dangerously-allow-unauthenticated` to their declarations in
  your app-config.

##### Patch Changes

- [`8869b8e`](https://github.com/backstage/backstage/commit/8869b8e): Updated local development setup.
- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-search-backend-module-elasticsearch` (1.4.0 → [1.5.3](../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#153))

#### 1.5.0

##### Minor Changes

- [`b186701`](https://github.com/backstage/backstage/commit/b186701): **BREAKING**: The ElasticSearch indexer will now delete stale indices matching the indexer's pattern.
  The method `getAliases` of `ElasticSearchClientWrapper` has been deprecated and might be removed in future releases.

  An indexer using the `some-type-index__*` pattern will remove indices matching this pattern after indexation
  to prevent stale indices leading to shards exhaustion.

  Before upgrading ensure that the index pattern doesn't match indices that are not managed by Backstage
  and thus shouldn't be deleted.

  Note: The ElasticSearch indexer already uses wildcards patterns to remove aliases on these indices.

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`6a576dc`](https://github.com/backstage/backstage/commit/6a576dc): Replace the usage of `getVoidLogger` with `mockServices.logger.mock` in order to remove the dependency with the soon-to-be-deprecated `backend-common` package.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

#### 1.4.1

##### Patch Changes

- [`5252ee1`](https://github.com/backstage/backstage/commit/5252ee1): Fix never resolved indexer promise.

### `@backstage/repo-tools` (0.8.0 → [0.9.4](../changelogs/@backstage/repo-tools.md#094))

#### 0.9.1

##### Patch Changes

- [`8721a02`](https://github.com/backstage/backstage/commit/8721a02): Add `--client-additional-properties` option to `openapi generate` command

#### 0.9.0

##### Minor Changes

- [`683870a`](https://github.com/backstage/backstage/commit/683870a): Adds 2 new commands `repo schema openapi diff` and `package schema openapi diff`. `repo schema openapi diff` is intended to power a new breaking changes check on pull requests and the package level command allows plugin developers to quickly see new API breaking changes. They're intended to be used in complement with the existing `repo schema openapi verify` command to validate your OpenAPI spec against a variety of things.

##### Patch Changes

- [`9ae9bb2`](https://github.com/backstage/backstage/commit/9ae9bb2): Update the paths logic in the api reports command to support complex subpaths
- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.

## 0.x minor version bumps

### `@backstage/backend-test-utils` (0.3.7 → [0.4.4](../changelogs/@backstage/backend-test-utils.md#044))

#### 0.4.4

##### Patch Changes

- [`2f99178`](https://github.com/backstage/backstage/commit/2f99178): The `ServiceFactoryTest.get` method was deprecated and the `ServiceFactoryTest.getSubject` should be used instead. The `getSubject` method has the same behavior, but has a better method name to indicate that the service instance returned is the subject currently being tested.
- [`edf5cc3`](https://github.com/backstage/backstage/commit/edf5cc3): The function `isDockerDisabledForTests` is deprecated and will no longer be exported in the near future as it should only be used internally.
- [`b05e1e1`](https://github.com/backstage/backstage/commit/b05e1e1): Service factories exported by this package have been updated to use the new service factory format that doesn't use a callback.
- [`fce7887`](https://github.com/backstage/backstage/commit/fce7887): Added mock for the Root Health Service in `mockServices`.
- [`906c817`](https://github.com/backstage/backstage/commit/906c817): Updated `startTestBackend` and `ServiceFactoryTester` to only accept plain service factory or backend feature objects, no longer supporting the callback form. This lines up with the changes to `@backstage/backend-plugin-api` and should not require any code changes.
- [`95a3a0b`](https://github.com/backstage/backstage/commit/95a3a0b): Rename frontend and backend `setupRequestMockHandlers` methods to `registerMswTestHooks`.
- [`b9ed1bb`](https://github.com/backstage/backstage/commit/b9ed1bb): bumped better-sqlite3 from ^9.0.0 to ^11.0.0
- [`98ccf00`](https://github.com/backstage/backstage/commit/98ccf00): Internal refactor of `mockServices.httpAuth.factory` to allow it to still be constructed with options, but without declaring options via `createServiceFactory`.

#### 0.4.0

##### Minor Changes

- [`805cbe7`](https://github.com/backstage/backstage/commit/805cbe7): Added `TestCaches` that functions just like `TestDatabases`

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`9e63318`](https://github.com/backstage/backstage/commit/9e63318): Made it possible to give access restrictions to `mockCredentials.service`
- [`006b3e8`](https://github.com/backstage/backstage/commit/006b3e8): The type `MockDirectoryOptions` was renamed to `CreateMockDirectoryOptions` so that it's clear these options are exclusive to the mock directory factory.
- [`0634fdc`](https://github.com/backstage/backstage/commit/0634fdc): Refactored `TestDatabases` to no longer depend on `backend-common`
- [`6a576dc`](https://github.com/backstage/backstage/commit/6a576dc): Fix the logger service mock to prevent returning `undefined` from the `child` method.
- [`6c11f6e`](https://github.com/backstage/backstage/commit/6c11f6e): Use imports from backend-defaults instead of the deprecated ones from backend-app-api

#### 0.3.8

##### Patch Changes

- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.
- [`7e5a50d`](https://github.com/backstage/backstage/commit/7e5a50d): added `eventsServiceFactory` to `defaultServiceFactories` to resolve issue where different instances of the EventsServices could be used

### `@backstage/frontend-app-api` (0.6.4 → [0.7.4](../changelogs/@backstage/frontend-app-api.md#074))

#### 0.7.3

##### Patch Changes

- [`d3c39fc`](https://github.com/backstage/backstage/commit/d3c39fc): Allow for the disabling of external routes through config, which was rendered impossible after the introduction of default targets.

  ```yaml
  app:
    routes:
      bindings:
        # This has the effect of removing the button for registering new
        # catalog entities in the scaffolder template list view
        scaffolder.registerComponent: false
  ```

#### 0.7.0

##### Minor Changes

- [`ddddecb`](https://github.com/backstage/backstage/commit/ddddecb): Extensions in app-config now always affect ordering. Previously, only when enabling disabled extensions did they rise to the top.

### `@backstage/plugin-catalog-import` (0.10.10 → [0.12.1](../changelogs/@backstage/plugin-catalog-import.md#0121))

#### 0.12.0

##### Minor Changes

- [`4f92394`](https://github.com/backstage/backstage/commit/4f92394): Migrate from identityApi to fetchApi in frontend plugins.

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.
- [`3daad61`](https://github.com/backstage/backstage/commit/3daad61): Integrated Azure DevOps as a catalog import source. This enables Backstage to create Pull Requests to Azure DevOps repositories as it does with GitHub repositories

#### 0.11.0

##### Minor Changes

- [`e1174b0`](https://github.com/backstage/backstage/commit/e1174b0): `EntityListComponent` uses `entityPresentationApi` instead of `humanizeEntityRef` to display Entity

### `@backstage/plugin-kubernetes-backend` (0.17.0 → [0.18.3](../changelogs/@backstage/plugin-kubernetes-backend.md#0183))

#### 0.18.0

##### Minor Changes

- [`0177f75`](https://github.com/backstage/backstage/commit/0177f75): Update kubernetes plugins to use autoscaling/v2

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-kubernetes-common` (0.7.5 → [0.8.1](../changelogs/@backstage/plugin-kubernetes-common.md#081))

#### 0.8.0

##### Minor Changes

- [`0177f75`](https://github.com/backstage/backstage/commit/0177f75): Update kubernetes plugins to use autoscaling/v2

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-kubernetes-react` (0.3.4 → [0.4.1](../changelogs/@backstage/plugin-kubernetes-react.md#041))

#### 0.4.1

##### Patch Changes

- [`e3cb6ab`](https://github.com/backstage/backstage/commit/e3cb6ab): Add a namespace label to RolloutDrawer
- [`2414d86`](https://github.com/backstage/backstage/commit/2414d86): Fix the `HTML` markup of the `FixDialog` component, `ul` and `li` are not allowed inside a `p` tag.

#### 0.4.0

##### Minor Changes

- [`4f92394`](https://github.com/backstage/backstage/commit/4f92394): Migrate from identityApi to fetchApi in frontend plugins.
- [`0177f75`](https://github.com/backstage/backstage/commit/0177f75): Update kubernetes plugins to use autoscaling/v2

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

#### 0.3.5

##### Patch Changes

- [`3102a99`](https://github.com/backstage/backstage/commit/3102a99): add the namespace label to CronJobDrawer & IngressDrawer.

### `@backstage/plugin-notifications-backend` (0.2.0 → [0.3.3](../changelogs/@backstage/plugin-notifications-backend.md#033))

#### 0.3.3

##### Patch Changes

- [`d7b8ca5`](https://github.com/backstage/backstage/commit/d7b8ca5): Added an option to filter notifications by topic

#### 0.3.0

##### Minor Changes

- [`07a789b`](https://github.com/backstage/backstage/commit/07a789b): adding filtering of notifications by processors

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

#### 0.2.1

##### Patch Changes

- [`d541ff6`](https://github.com/backstage/backstage/commit/d541ff6): Fixed email processor `esm` issue and config reading
- [`295c05d`](https://github.com/backstage/backstage/commit/295c05d): Support for filtering entities from notification recipients after resolving them from the recipients
- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.
- [`cba628a`](https://github.com/backstage/backstage/commit/cba628a): Add possibility to generate random notifications on the fly in local development
- [`ee09dfc`](https://github.com/backstage/backstage/commit/ee09dfc): Updated documentation for sending messages by external services.

### `@backstage/plugin-notifications-node` (0.1.3 → [0.2.3](../changelogs/@backstage/plugin-notifications-node.md#023))

#### 0.2.3

##### Patch Changes

- [`4e4ef2b`](https://github.com/backstage/backstage/commit/4e4ef2b): Move notification processor filter parsing to common package

#### 0.2.0

##### Minor Changes

- [`07a789b`](https://github.com/backstage/backstage/commit/07a789b): add notifications filtering by processors

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.
- [`1354d81`](https://github.com/backstage/backstage/commit/1354d81): Use `node-fetch` instead of native fetch, as per https://backstage.io/docs/architecture-decisions/adrs-adr013

#### 0.1.4

##### Patch Changes

- [`295c05d`](https://github.com/backstage/backstage/commit/295c05d): Support for filtering entities from notification recipients after resolving them from the recipients

### `@backstage/plugin-scaffolder-backend-module-github` (0.2.7 → [0.4.0](../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#040))

#### 0.4.0

##### Minor Changes

- [`70c4b36`](https://github.com/backstage/backstage/commit/70c4b36): Adds support for custom tag policies when creating GitHub environments.

##### Patch Changes

- [`ccfc9d1`](https://github.com/backstage/backstage/commit/ccfc9d1): Fixed bug resulting from missing required owner and repo arguments in `getEnvironmentPublicKey` in action `github:environment:create`.

  Adding environment secrets now works as expected.

- [`141f366`](https://github.com/backstage/backstage/commit/141f366): Added action to enable GitHub Pages on a repo
- [`4410fed`](https://github.com/backstage/backstage/commit/4410fed): Fixed issue with octokit call missing owner and repo when creating environment variables and secrets using github:environment:create action
- [`dfaa28d`](https://github.com/backstage/backstage/commit/dfaa28d): Adds `requireLastPushApproval` input property to configure Branch Protection Settings in `github:publish` action

  Adds `requireLastPushApproval` input property to configure Branch Protection Settings in `github:repo:push` action

#### 0.3.0

##### Minor Changes

- [`403394a`](https://github.com/backstage/backstage/commit/403394a): Allow empty author info in createPullRequest action for Github

##### Patch Changes

- [`f145a04`](https://github.com/backstage/backstage/commit/f145a04): Added handling for dry run to githubPullRequest and githubWebhook and added tests for this functionality
- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

#### 0.2.8

##### Patch Changes

- [`5d99272`](https://github.com/backstage/backstage/commit/5d99272): Update local development dependencies.
- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.
- [`52ab241`](https://github.com/backstage/backstage/commit/52ab241): Adding support to change the default commit author for `publish:github:pull-request`

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.3.3 → [0.4.4](../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#044))

#### 0.4.4

##### Patch Changes

- [`0ac124b`](https://github.com/backstage/backstage/commit/0ac124b): Updated configuration instructions
- [`2fb0eb8`](https://github.com/backstage/backstage/commit/2fb0eb8): Added support for passing `variables` to `gitlab:pipeline:trigger`

#### 0.4.1

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`cf96041`](https://github.com/backstage/backstage/commit/cf96041): Added `gitlab:issue:edit` action to edit existing GitLab issues
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.
- [`829e0ec`](https://github.com/backstage/backstage/commit/829e0ec): Add new `gitlab:pipeline:trigger` action to trigger GitLab pipelines.

#### 0.4.0

##### Minor Changes

- [`18f736f`](https://github.com/backstage/backstage/commit/18f736f): Add examples for `gitlab:projectVariable:create` scaffolder action & improve related tests

##### Patch Changes

- [`8fa8a00`](https://github.com/backstage/backstage/commit/8fa8a00): Add merge method and squash option for project creation
- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.
- [`ffc73ec`](https://github.com/backstage/backstage/commit/ffc73ec): Add examples for `gitlab:repo:push` scaffolder action & improve related tests

## 0.0.x patch version bumps

### `@backstage/plugin-auth-backend-module-okta-provider` (0.0.10 → [0.0.15](../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#0015))

#### 0.0.12

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`8efc6cf`](https://github.com/backstage/backstage/commit/8efc6cf): Added support for the new shared `additionalScopes` configuration, which means it can now also be specified as an array. In addition, the `openid`, `email`, `profile`, and `offline_access` scopes have been set to required and will always be present.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-catalog-unprocessed-entities-common` (0.0.1 → [0.0.3](../changelogs/@backstage/plugin-catalog-unprocessed-entities-common.md#003))

#### 0.0.2

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-kubernetes-cluster` (0.0.10 → [0.0.13](../changelogs/@backstage/plugin-kubernetes-cluster.md#0013))

#### 0.0.12

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-notifications-common` (0.0.3 → [0.0.5](../changelogs/@backstage/plugin-notifications-common.md#005))

#### 0.0.5

##### Patch Changes

- [`4e4ef2b`](https://github.com/backstage/backstage/commit/4e4ef2b): Move notification processor filter parsing to common package

#### 0.0.4

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-signals` (0.0.5 → [0.0.8](../changelogs/@backstage/plugin-signals.md#008))

#### 0.0.7

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-signals-react` (0.0.3 → [0.0.4](../changelogs/@backstage/plugin-signals-react.md#004))

#### 0.0.4

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

## 0.x patch version bumps

### `@backstage/backend-dynamic-feature-service` (0.2.9 → [0.2.15](../changelogs/@backstage/backend-dynamic-feature-service.md#0215))

#### 0.2.15

##### Patch Changes

- [`b05e1e1`](https://github.com/backstage/backstage/commit/b05e1e1): Service factories exported by this package have been updated to use the new service factory format that doesn't use a callback.

#### 0.2.11

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.

#### 0.2.10

##### Patch Changes

- [`b192752`](https://github.com/backstage/backstage/commit/b192752): Updated `README.md` to point to `packages/backend` instead of `packages/backend-next`.
- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.
- [`b611fd0`](https://github.com/backstage/backstage/commit/b611fd0): Updates the `scanRoot` method in the `PluginScanner` class to specifically ignore the `lost+found` directory, which is a system-generated directory used for file recovery on Unix-like systems. Skipping this directory avoids unnecessary errors.

### `@backstage/backend-tasks` (0.5.22 → [0.5.27](../changelogs/@backstage/backend-tasks.md#0527))

#### 0.5.27

##### Patch Changes

- [`083eaf9`](https://github.com/backstage/backstage/commit/083eaf9): Fix bug where ISO durations could no longer be used for schedules

#### 0.5.24

##### Patch Changes

- [`736bc3c`](https://github.com/backstage/backstage/commit/736bc3c): Marked all exports as deprecated and pointed at `@backstage/backend-plugin-api` and `@backstage/backend-defaults`
- [`ed473cd`](https://github.com/backstage/backstage/commit/ed473cd): Updated the `TaskScheduleDefinitionConfig` deprecated comment to point to `SchedulerServiceTaskScheduleDefinitionConfig`
- [`6a576dc`](https://github.com/backstage/backstage/commit/6a576dc): Deprecate the legacy `TaskScheduler.fromConfig` method and stop using the `getVoidlogger` in tests files to reduce the dependency on the soon-to-deprecate `backstage-common` package.
- [`1897169`](https://github.com/backstage/backstage/commit/1897169): More detailed deprecation messages

#### 0.5.23

##### Patch Changes

- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.

### `@backstage/cli` (0.26.4 → [0.26.11](../changelogs/@backstage/cli.md#02611))

#### 0.26.11

##### Patch Changes

- [`133464c`](https://github.com/backstage/backstage/commit/133464c): Added experimental support for dynamic frontend plugin builds, enabled via setting `EXPERIMENTAL_MODULE_FEDERATION` for the app build, and using the `frontend-dynamic-container` package role to create a container. Both of these are experimental and will change in the future.
- [`e2e320c`](https://github.com/backstage/backstage/commit/e2e320c): - remove unused dependencies `winston` and `yn` from the template of backend plugins;
  - update `msw` to version `2.3.1` in the template of backend plugins;
    starting with v1 and switching later to v2 is tedious and not straight forward; it's easier to start with v2;
- [`0540c5a`](https://github.com/backstage/backstage/commit/0540c5a): Updated the scaffolding output message for `plugin-common` in `backstage-cli`. Now, when executing `backstage-cli new` to create a new `plugin-common` package, the output message accurately reflects the action by displaying `Creating common plugin package...` instead of the previous, less accurate `Creating backend plugin...`.
- [`7652db4`](https://github.com/backstage/backstage/commit/7652db4): Only bootstrap global-agent if it's actually being used
- [`f0c0039`](https://github.com/backstage/backstage/commit/f0c0039): Fix issue with CLI that was preventing upgrading from 1.28
- [`d228862`](https://github.com/backstage/backstage/commit/d228862): Update default backend plugin created by the cli to use non-deprecated error handling middleware
- [`da90cce`](https://github.com/backstage/backstage/commit/da90cce): Updated dependency `esbuild` to `^0.21.0`.
- [`a60d73b`](https://github.com/backstage/backstage/commit/a60d73b): Fix a few minor issues with the backend template that were causing failing linting checks in the main repo.
- [`0510d98`](https://github.com/backstage/backstage/commit/0510d98): Subpath export `package.json` should be of a unique name to avoid typescript resolution issues
- [`4baac0c`](https://github.com/backstage/backstage/commit/4baac0c): The `backendPlugin` and `backendModule` factory now includes a step for automatically adding the new backend plugin/module to the `index.ts` file of the backend.

#### 0.26.7

##### Patch Changes

- [`788eca7`](https://github.com/backstage/backstage/commit/788eca7): Fix readme for new plugins created using cli
- [`90c5268`](https://github.com/backstage/backstage/commit/90c5268): Add `peerDependencies` to `devDependencies` in `package.json.hbs` templates.
- [`c00f7ee`](https://github.com/backstage/backstage/commit/c00f7ee): Fix issue with `esm` loaded dependencies being different from the `cjs` import for Vite dependencies
- [`b0f66e9`](https://github.com/backstage/backstage/commit/b0f66e9): Updated dependency `vite-plugin-node-polyfills` to `^0.22.0`.
- [`c328131`](https://github.com/backstage/backstage/commit/c328131): Added a new `--publish` flag to the `repo fix` command. This command will validate and if possible generate the metadata required for publishing packages with the Backstage CLI. In addition, a check has been added that the `backstage.pluginId` and `backstage.pluginPackage(s)` fields are present when packing a package for publishing.
- [`5afbe1d`](https://github.com/backstage/backstage/commit/5afbe1d): Export default module for `scaffolder-action` cli template
- [`009da47`](https://github.com/backstage/backstage/commit/009da47): Fix `versions:check --fix` when `yarn.lock` has multiple joint versions in the same section
- [`9ee948a`](https://github.com/backstage/backstage/commit/9ee948a): Bump `esbuild` target for package builds to `ES2022`.

#### 0.26.5

##### Patch Changes

- [`b8f1fc2`](https://github.com/backstage/backstage/commit/b8f1fc2): The `build-workspace` command no longer manually runs `yarn postpack`, relying instead on the fact that running `yarn pack` will automatically invoke the `postpack` script. No action is necessary if you are running the latest version of yarn 1, 3, or 4.
- [`fcd3462`](https://github.com/backstage/backstage/commit/fcd3462): Both the target and types library have been bumped from ES2021 to ES2022 in `@backstage/cli/config/tsconfig.json`.
- [`0cc5ed3`](https://github.com/backstage/backstage/commit/0cc5ed3): Add support for `versions:migrate` to do code changes. Can be skipped with `--no-code-changes`
- [`f97ad04`](https://github.com/backstage/backstage/commit/f97ad04): Add preserveModules to rollup, which allows better async loading and tree-shaking in webpack
- [`2a6f10d`](https://github.com/backstage/backstage/commit/2a6f10d): The `versions:bump` command will no longer exit with a non-zero status if the version bump fails due to forbidden duplicate package installations. It will now also provide more information about how to troubleshoot such an error. The set of forbidden duplicates has also been expanded to include all `@backstage/*-app-api` packages.
- [`c5d7b40`](https://github.com/backstage/backstage/commit/c5d7b40): Allow passing a `--require` argument through to the Node process during `package start`
- [`cc3c518`](https://github.com/backstage/backstage/commit/cc3c518): Fixed an issue causing the `repo fix` command to set an incorrect `workspace` property using Windows
- [`812dff0`](https://github.com/backstage/backstage/commit/812dff0): Add previously-missing semicolon in file templated by `backstage-cli new --select plugin`.
- [`f185603`](https://github.com/backstage/backstage/commit/f185603): Fixed the dynamic import of vite.

### `@backstage/cli-common` (0.1.13 → [0.1.14](../changelogs/@backstage/cli-common.md#0114))

#### 0.1.14

##### Patch Changes

- [`142abb0`](https://github.com/backstage/backstage/commit/142abb0): The monorepo root check in `findPaths` will now accept a shorthand `workspaces` config in `package.json`, no longer requiring `workspaces.packages`.

### `@backstage/cli-node` (0.2.5 → [0.2.7](../changelogs/@backstage/cli-node.md#027))

#### 0.2.7

##### Patch Changes

- [`133464c`](https://github.com/backstage/backstage/commit/133464c): Added internal metadata for the new experimental `frontend-dynamic-container` role.

#### 0.2.6

##### Patch Changes

- [`a1ae9cc`](https://github.com/backstage/backstage/commit/a1ae9cc): Updated doc link.
- [`c328131`](https://github.com/backstage/backstage/commit/c328131): Added new plugin metadata fields to `BackstagePackageJson` type.
- [`93be042`](https://github.com/backstage/backstage/commit/93be042): Upgraded @yarnpkg/parsers to stable 3.0

### `@backstage/core-compat-api` (0.2.4 → [0.2.7](../changelogs/@backstage/core-compat-api.md#027))

#### 0.2.6

##### Patch Changes

- [`35fbe09`](https://github.com/backstage/backstage/commit/35fbe09): Add support for forwarding default target from legacy external route refs.

#### 0.2.5

##### Patch Changes

- [`5d99272`](https://github.com/backstage/backstage/commit/5d99272): Update local development dependencies.

### `@backstage/core-components` (0.14.6 → [0.14.9](../changelogs/@backstage/core-components.md#0149))

#### 0.14.9

##### Patch Changes

- [`d4ffdbb`](https://github.com/backstage/backstage/commit/d4ffdbb): Fixed bug where `<Select>` component with empty string as placeholder gave an error
- [`99d672d`](https://github.com/backstage/backstage/commit/99d672d): Modified the `Select` component to take in a `data-testid` parameter ensuring backwards compatibility with default value corresponding to previously hardcoded `data-testid` of "select".

#### 0.14.8

##### Patch Changes

- [`a0b46f6`](https://github.com/backstage/backstage/commit/a0b46f6): Having tooltip inherit font size for consistency in catalog table columns
- [`59cee81`](https://github.com/backstage/backstage/commit/59cee81): Use `inherit` variant on OverflowTooltip underlying Typography component.
- [`eae0e4d`](https://github.com/backstage/backstage/commit/eae0e4d): Fixed an issue causing `SidebarSubmenu` text to not follow the theme color
- [`e4811ec`](https://github.com/backstage/backstage/commit/e4811ec): Make number of decimal digits in Gauge configurable via the `decimalDigits` property
- [`83c4251`](https://github.com/backstage/backstage/commit/83c4251): Adds icons to status component
- [`3e175c8`](https://github.com/backstage/backstage/commit/3e175c8): Removed max width from `Select` component.
- [`57d7582`](https://github.com/backstage/backstage/commit/57d7582): Fixed a bug in `SupportButton` where the title was rendered with the characteristics of a button.

#### 0.14.7

##### Patch Changes

- [`e42779e`](https://github.com/backstage/backstage/commit/e42779e): Properly log the `errorInfo` in `ErrorBoundary`
- [`5223c4c`](https://github.com/backstage/backstage/commit/5223c4c): Fixed an internal circular import that broke Jest mocks.
- [`71e4229`](https://github.com/backstage/backstage/commit/71e4229): Added optional `initialShowDropDown` prop to `SidebarSubmenuItem` to internally manage the initial display state of the dropdown items.
- [`a2ee4df`](https://github.com/backstage/backstage/commit/a2ee4df): Add `alignGauge` prop to the `GaugeCard`, and a small size version. When `alignGauge` is `'bottom'` the gauge will vertically align the gauge in the cards, even when the card titles span across multiple lines.
  Add `alignContent` prop to the `InfoCard`, defaulting to `'normal'` with the option of `'bottom'` which vertically aligns the content to the bottom of the card.
- [`5b7b49b`](https://github.com/backstage/backstage/commit/5b7b49b): The `SignInPage` guest provider will now fall back to legacy guest auth if the backend request fails, allowing guest auth without a running backend.
- [`359376a`](https://github.com/backstage/backstage/commit/359376a): Removing react-text-truncate with css styles.

### `@backstage/create-app` (0.5.14 → [0.5.17](../changelogs/@backstage/create-app.md#0517))

#### 0.5.17

##### Patch Changes

- [`780d994`](https://github.com/backstage/backstage/commit/780d994): Added `MyGroupsSidebarItem` to the sidebar in the `create-app` template
- [`f03d12a`](https://github.com/backstage/backstage/commit/f03d12a): Bumped create-app version.
- [`e90a2cd`](https://github.com/backstage/backstage/commit/e90a2cd): Added the Catalog logs module to the `create-app` template
- [`3ac2a6a`](https://github.com/backstage/backstage/commit/3ac2a6a): Added the Postgres Search Engine to the `create-app` template

#### 0.5.16

##### Patch Changes

- [`cce0495`](https://github.com/backstage/backstage/commit/cce0495): Bumped create-app version.
- [`77da22e`](https://github.com/backstage/backstage/commit/77da22e): Bumped create-app version.
- [`2110d76`](https://github.com/backstage/backstage/commit/2110d76): Removed `dockerode` dependency.
- [`34daaea`](https://github.com/backstage/backstage/commit/34daaea): Fixed a broken link to the node-postgres documentation
- [`78363f6`](https://github.com/backstage/backstage/commit/78363f6): Bumped TypeScript to version `5.4`.
- [`1a212f9`](https://github.com/backstage/backstage/commit/1a212f9): Remove Tech Radar menu item from sidebar of scaffolded app to align with removal of tech-radar plugin from backend
- [`81507c8`](https://github.com/backstage/backstage/commit/81507c8): Updated `node-gyp` to v10

#### 0.5.15

##### Patch Changes

- [`c066c88`](https://github.com/backstage/backstage/commit/c066c88): Removed `packages/backend/src/types.ts` from the template as it is unused. It was mistakenly left in after moving the template to the new backend system.
- [`5d99272`](https://github.com/backstage/backstage/commit/5d99272): Update local development dependencies.
- [`0478509`](https://github.com/backstage/backstage/commit/0478509): Bumped create-app version.
- [`d85dd88`](https://github.com/backstage/backstage/commit/d85dd88): Bumped create-app version.
- [`8105aad`](https://github.com/backstage/backstage/commit/8105aad): Removed the Tech Radar and GitHub Actions plugins from the template, which have been moved to the community plugins repository.

### `@backstage/eslint-plugin` (0.1.7 → [0.1.8](../changelogs/@backstage/eslint-plugin.md#018))

#### 0.1.8

##### Patch Changes

- [`65ec043`](https://github.com/backstage/backstage/commit/65ec043): add some `pickers` fixes

### `@backstage/frontend-test-utils` (0.1.6 → [0.1.11](../changelogs/@backstage/frontend-test-utils.md#0111))

#### 0.1.10

##### Patch Changes

- [`95a3a0b`](https://github.com/backstage/backstage/commit/95a3a0b): Rename frontend and backend `setupRequestMockHandlers` methods to `registerMswTestHooks`.

### `@backstage/plugin-api-docs` (0.11.4 → [0.11.7](../changelogs/@backstage/plugin-api-docs.md#0117))

#### 0.11.6

##### Patch Changes

- [`7f84039`](https://github.com/backstage/backstage/commit/7f84039): The `registerComponent` external route will now by default bind to the catalog import page if it is available.
- [`9cdc651`](https://github.com/backstage/backstage/commit/9cdc651): Make sure that the toggle button state is properly reflected in API cards
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.
- [`96cd13e`](https://github.com/backstage/backstage/commit/96cd13e): `DefaultApiExplorerPage` now accepts an optional `ownerPickerMode` for toggling the behavior of the `EntityOwnerPicker`, exposing a new mode `<DefaultApiExplorerPage ownerPickerMode="all" />` particularly suitable for larger catalogs. In this new mode, `EntityOwnerPicker` will display all the users and groups present in the catalog.

#### 0.11.5

##### Patch Changes

- [`5d99272`](https://github.com/backstage/backstage/commit/5d99272): Update local development dependencies.
- [`725ff0b`](https://github.com/backstage/backstage/commit/725ff0b): Fix dark mode text color inside tables in `description:` from OpenAPI definitions

### `@backstage/plugin-api-docs-module-protoc-gen-doc` (0.1.6 → [0.1.7](../changelogs/@backstage/plugin-api-docs-module-protoc-gen-doc.md#017))

#### 0.1.7

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-app-backend` (0.3.65 → [0.3.71](../changelogs/@backstage/plugin-app-backend.md#0371))

#### 0.3.68

##### Patch Changes

- [`8869b8e`](https://github.com/backstage/backstage/commit/8869b8e): Updated local development setup.
- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`82c2b90`](https://github.com/backstage/backstage/commit/82c2b90): Restore the support of external config schema in the router of the `app-backend` plugin, which was broken in release `1.26.0`.
  This support is critical for dynamic frontend plugins to have access to their config values.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

#### 0.3.66

##### Patch Changes

- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.

### `@backstage/plugin-app-node` (0.1.17 → [0.1.22](../changelogs/@backstage/plugin-app-node.md#0122))

#### 0.1.19

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-app-visualizer` (0.1.5 → [0.1.8](../changelogs/@backstage/plugin-app-visualizer.md#018))

#### 0.1.7

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-auth-backend` (0.22.4 → [0.22.9](../changelogs/@backstage/plugin-auth-backend.md#0229))

#### 0.22.6

##### Patch Changes

- [`3e823d3`](https://github.com/backstage/backstage/commit/3e823d3): Limited user tokens will no longer include the `ent` field in its payload. Ownership claims will now be fetched from the user info service.

  NOTE: Limited tokens issued prior to this change will no longer be valid. Users may have to clear their browser cookies in order to refresh their auth tokens.

- [`8869b8e`](https://github.com/backstage/backstage/commit/8869b8e): Updated local development setup.
- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.
- [`3e1bb15`](https://github.com/backstage/backstage/commit/3e1bb15): Updated to use the new `@backstage/plugin-auth-backend-module-onelogin-provider` implementation

#### 0.22.5

##### Patch Changes

- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.
- [`4a0577e`](https://github.com/backstage/backstage/commit/4a0577e): fix: Move config declarations to appropriate auth backend modules
- [`ea9262b`](https://github.com/backstage/backstage/commit/ea9262b): Allow overriding default ownership resolving with the new `AuthOwnershipResolutionExtensionPoint`

### `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.1.9 → [0.1.14](../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#0114))

#### 0.1.11

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

#### 0.1.10

##### Patch Changes

- [`4a0577e`](https://github.com/backstage/backstage/commit/4a0577e): fix: Move config declarations to appropriate auth backend modules

### `@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.1.0 → [0.1.5](../changelogs/@backstage/plugin-auth-backend-module-azure-easyauth-provider.md#015))

#### 0.1.2

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-auth-backend-module-bitbucket-provider` (0.1.0 → [0.1.5](../changelogs/@backstage/plugin-auth-backend-module-bitbucket-provider.md#015))

#### 0.1.2

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`8efc6cf`](https://github.com/backstage/backstage/commit/8efc6cf): Added support for the new shared `additionalScopes` configuration. In addition, the `account` scope has been set to required and will always be present.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.1.0 → [0.1.5](../changelogs/@backstage/plugin-auth-backend-module-cloudflare-access-provider.md#015))

#### 0.1.2

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.
- [`1354d81`](https://github.com/backstage/backstage/commit/1354d81): Use `node-fetch` instead of native fetch, as per https://backstage.io/docs/architecture-decisions/adrs-adr013

### `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.2.12 → [0.2.17](../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#0217))

#### 0.2.14

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-auth-backend-module-github-provider` (0.1.14 → [0.1.19](../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#0119))

#### 0.1.16

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`8efc6cf`](https://github.com/backstage/backstage/commit/8efc6cf): Added support for the new shared `additionalScopes` configuration. In addition, the `read:user` scope has been set to required and will always be present.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

#### 0.1.15

##### Patch Changes

- [`4a0577e`](https://github.com/backstage/backstage/commit/4a0577e): fix: Move config declarations to appropriate auth backend modules

### `@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.14 → [0.1.19](../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#0119))

#### 0.1.16

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`8efc6cf`](https://github.com/backstage/backstage/commit/8efc6cf): Added support for the new shared `additionalScopes` configuration. In addition, the `read_user` scope has been set to required and will always be present.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-auth-backend-module-google-provider` (0.1.14 → [0.1.19](../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#0119))

#### 0.1.16

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`8efc6cf`](https://github.com/backstage/backstage/commit/8efc6cf): Added support for the new shared `additionalScopes` configuration. In addition, the `openid`, `userinfo.email`, and `userinfo.profile` scopes have been set to required and will always be present.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-auth-backend-module-guest-provider` (0.1.3 → [0.1.8](../changelogs/@backstage/plugin-auth-backend-module-guest-provider.md#018))

#### 0.1.5

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

#### 0.1.4

##### Patch Changes

- [`07d8cca`](https://github.com/backstage/backstage/commit/07d8cca): Error if used outside of a development environment without explicit allowance

### `@backstage/plugin-auth-backend-module-microsoft-provider` (0.1.12 → [0.1.17](../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#0117))

#### 0.1.14

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`8efc6cf`](https://github.com/backstage/backstage/commit/8efc6cf): Added support for the new shared `additionalScopes` configuration.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.
- [`c187a9c`](https://github.com/backstage/backstage/commit/c187a9c): Minor internal type updates

### `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.1.10 → [0.1.15](../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#0115))

#### 0.1.12

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-auth-node` (0.4.12 → [0.4.17](../changelogs/@backstage/plugin-auth-node.md#0417))

#### 0.4.17

##### Patch Changes

- [`55c1a72`](https://github.com/backstage/backstage/commit/55c1a72): Fix issues with Atlassian OAuth provider: retrieve the email and photo that were not in arrays but rather in single props.

#### 0.4.14

##### Patch Changes

- [`798ec37`](https://github.com/backstage/backstage/commit/798ec37): Updated scope management for OAuth providers, where the `createOAuthAuthenticator` now accepts a new collection of `scopes` options:

  - `scopes.persist` - Whether scopes should be persisted, replaces the `shouldPersistScopes` option.
  - `scopes.required` - A list of required scopes that will always be requested.
  - `scopes.transform` - A function that can be used to transform the scopes before they are requested.

  The `createOAuthProviderFactory` has also received a new `additionalScopes` option, and will also read `additionalScopes` from the auth provider configuration. Both of these can be used to add additional scopes that should always be requested.

  A significant change under the hood that this new scope management brings is that providers that persist scopes will now always merge the already granted scopes with the requested ones. The previous behavior was that the full authorization flow would not include existing scopes, while the refresh flow would only include the existing scopes.

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

#### 0.4.13

##### Patch Changes

- [`ea9262b`](https://github.com/backstage/backstage/commit/ea9262b): Allow overriding default ownership resolving with the new `AuthOwnershipResolutionExtensionPoint`

### `@backstage/plugin-auth-react` (0.1.1 → [0.1.4](../changelogs/@backstage/plugin-auth-react.md#014))

#### 0.1.3

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

#### 0.1.2

##### Patch Changes

- [`c297afd`](https://github.com/backstage/backstage/commit/c297afd): When using `CookieAuthRefreshProvider` or `useCookieAuthRefresh`, a 404 response from the cookie endpoint will now be treated as if cookie auth is disabled and is not needed.

### `@backstage/plugin-bitbucket-cloud-common` (0.2.18 → [0.2.21](../changelogs/@backstage/plugin-bitbucket-cloud-common.md#0221))

#### 0.2.21

##### Patch Changes

- [`b5deed0`](https://github.com/backstage/backstage/commit/b5deed0): Add support for `autocomplete` handler to provide autocomplete options for `RepoUrlPicker`

#### 0.2.20

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

#### 0.2.19

##### Patch Changes

- [`d76cb29`](https://github.com/backstage/backstage/commit/d76cb29): Updated dependency `ts-morph` to `^22.0.0`.

### `@backstage/plugin-catalog-backend-module-aws` (0.3.12 → [0.3.17](../changelogs/@backstage/plugin-catalog-backend-module-aws.md#0317))

#### 0.3.17

##### Patch Changes

- [`4afa050`](https://github.com/backstage/backstage/commit/4afa050): Export `defaultEksClusterEntityTransformer` to allow library consumers to layer additional changes on top of the default transformer.

#### 0.3.14

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-catalog-backend-module-azure` (0.1.37 → [0.1.42](../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0142))

#### 0.1.39

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.2.0 → [0.2.5](../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#025))

#### 0.2.2

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

#### 0.2.1

##### Patch Changes

- [`f3f0281`](https://github.com/backstage/backstage/commit/f3f0281): Fix incorrect dependency import.

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.2.4 → [0.2.9](../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#029))

#### 0.2.6

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`6a576dc`](https://github.com/backstage/backstage/commit/6a576dc): Replace the usage of `getVoidLogger` with `mockServices.logger.mock` in order to remove the dependency with the soon-to-be-deprecated `backend-common` package.
- [`b51e823`](https://github.com/backstage/backstage/commit/b51e823): Remove debug console logging statement
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.31 → [0.1.36](../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#0136))

#### 0.1.33

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

#### 0.1.32

##### Patch Changes

- [`062ffb1`](https://github.com/backstage/backstage/commit/062ffb1): Allow skipping archived repositories (`skipArchivedRepos` flag) on Bitbucket.

### `@backstage/plugin-catalog-backend-module-gcp` (0.1.18 → [0.1.23](../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#0123))

#### 0.1.20

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-catalog-backend-module-gerrit` (0.1.34 → [0.1.39](../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0139))

#### 0.1.36

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-catalog-backend-module-github` (0.6.0 → [0.6.5](../changelogs/@backstage/plugin-catalog-backend-module-github.md#065))

#### 0.6.5

##### Patch Changes

- [`9112efc`](https://github.com/backstage/backstage/commit/9112efc): Adds support for `repository` events.

  The provider adds a subscription to the topic `github.repository`.

  Hereby, it supports events of type `repository` with actions

  - `archived`
  - `deleted`
  - `edited`
  - `renamed`
  - `transferred`
  - `unarchived`

  Actions skipped as they don't require entity changes:

  - `created`
  - `privatized`
  - `publicized`

  If the config option `validateLocationsExist` is enabled, an API request
  is necessary and will be executed.
  This affects the actions `renamed`, `transferred`, and `unarchive`
  of event type `repository`.

  Catalog entities related to the `GithubEntityProvider` instance will be adjusted
  according to action and its meaning for them.

#### 0.6.2

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.
- [`67d0530`](https://github.com/backstage/backstage/commit/67d0530): Fix bug in root repo import where catalog-info.yaml.hcl file is found by search and breaks the import

#### 0.6.1

##### Patch Changes

- [`0b50143`](https://github.com/backstage/backstage/commit/0b50143): GitHub push events now schedule a refresh on entities that have a `refresh_key` matching the `catalogPath` config itself.
  This allows to support a `catalogPath` configuration that uses glob patterns.
- [`f2a2a83`](https://github.com/backstage/backstage/commit/f2a2a83): Updated to use the new `catalogAnalysisExtensionPoint` API.
- [`5bdeaa7`](https://github.com/backstage/backstage/commit/5bdeaa7): Added `alwaysUseDefaultNamespace` option to `GithubMultiOrgEntityProvider`.

  If set to true, the provider will use `default` as the namespace for all group entities. Groups with the same name across different orgs will be considered the same group.

### `@backstage/plugin-catalog-backend-module-github-org` (0.1.12 → [0.1.17](../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#0117))

#### 0.1.14

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

#### 0.1.13

##### Patch Changes

- [`5bdeaa7`](https://github.com/backstage/backstage/commit/5bdeaa7): Fixed an issue where the `catalog-backend-module-github-org` would not correctly create groups using `default` as namespace in case a single organization was configured.

### `@backstage/plugin-catalog-backend-module-gitlab` (0.3.15 → [0.3.21](../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#0321))

#### 0.3.21

##### Patch Changes

- [`8db30ad`](https://github.com/backstage/backstage/commit/8db30ad): The Gitlab configuration supports an additional optional boolean key `catalog.providers.gitlab.<your-org>.restrictUsersToGroup`. Setting this to `true` will make Backstage only import users from the group defined in the `group` key, instead of all users in the organisation (self-hosted) or of the root group (SaaS). It will default to false, keeping the original implementation intact, when not explicitly set.

#### 0.3.18

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.
- [`150fc77`](https://github.com/backstage/backstage/commit/150fc77): Fixed an issue in `GitlabOrgDiscoveryEntityProvider` where a missing `orgEnabled` config key was throwing an error.
- [`f271164`](https://github.com/backstage/backstage/commit/f271164): Fixed an issue in `GitlabDiscoveryEntityProvider` where the fallback branch was taking precedence over the GitLab default branch.

#### 0.3.16

##### Patch Changes

- [`a70377d`](https://github.com/backstage/backstage/commit/a70377d): Added events support for `GitlabDiscoveryEntityProvider` and `GitlabOrgDiscoveryEntityProvider`.

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.22 → [0.4.27](../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#0427))

#### 0.4.24

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

#### 0.4.23

##### Patch Changes

- [`8c1ab9e`](https://github.com/backstage/backstage/commit/8c1ab9e): Fix plugin/incremental-ingestion 'Maximum call stack size exceeded' error when ingest large entities.
- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.

### `@backstage/plugin-catalog-backend-module-msgraph` (0.5.25 → [0.5.30](../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#0530))

#### 0.5.30

##### Patch Changes

- [`f7bdcea`](https://github.com/backstage/backstage/commit/f7bdcea): Adds a dynamic provider for the plugin-catalog-backend-module-msgraph. Configuration is now runtime configurable through the ProviderConfigTransformer.

#### 0.5.27

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`f7be17a`](https://github.com/backstage/backstage/commit/f7be17a): Added missing `userSelect` property in `readMicrosoftGraphOrg` method
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

#### 0.5.26

##### Patch Changes

- [`49eab29`](https://github.com/backstage/backstage/commit/49eab29): Fixed disabling of user photo fetching. Previously, the config value wasn't propagated properly, so user photos was still being fetched despite disabled by config.
- [`6e370e6`](https://github.com/backstage/backstage/commit/6e370e6): Handle fetching huge amounts of users from Azure without crashing

### `@backstage/plugin-catalog-backend-module-openapi` (0.1.35 → [0.1.40](../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0140))

#### 0.1.37

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-catalog-backend-module-puppetdb` (0.1.23 → [0.1.28](../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0128))

#### 0.1.25

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.15 → [0.1.20](../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#0120))

#### 0.1.17

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.4.4 → [0.4.9](../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#049))

#### 0.4.6

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

#### 0.4.5

##### Patch Changes

- [`b192752`](https://github.com/backstage/backstage/commit/b192752): Updated `README.md` to point to `packages/backend` instead of `packages/backend-next`.
- [`6f5a3a3`](https://github.com/backstage/backstage/commit/6f5a3a3): Correctly convert owner to string in case owner has not been provided

### `@backstage/plugin-catalog-graph` (0.4.4 → [0.4.7](../changelogs/@backstage/plugin-catalog-graph.md#047))

#### 0.4.6

##### Patch Changes

- [`8d474d3`](https://github.com/backstage/backstage/commit/8d474d3): Add function to `EntityRelationsGraph` filter that excludes entities from graph
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.
- [`cd6aeea`](https://github.com/backstage/backstage/commit/cd6aeea): The `catalogEntity` external route will now by default bind to the catalog entity page if it is available.

#### 0.4.5

##### Patch Changes

- [`39564b3`](https://github.com/backstage/backstage/commit/39564b3): Allow multiple edges with different type (e.g. `ownedBy` and `applicationOwnerBy`) to have the same source and target node.

### `@backstage/plugin-catalog-unprocessed-entities` (0.2.3 → [0.2.6](../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#026))

#### 0.2.5

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-config-schema` (0.1.54 → [0.1.57](../changelogs/@backstage/plugin-config-schema.md#0157))

#### 0.1.56

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-devtools` (0.1.13 → [0.1.16](../changelogs/@backstage/plugin-devtools.md#0116))

#### 0.1.15

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-devtools-backend` (0.3.3 → [0.3.8](../changelogs/@backstage/plugin-devtools-backend.md#038))

#### 0.3.5

##### Patch Changes

- [`8869b8e`](https://github.com/backstage/backstage/commit/8869b8e): Updated local development setup.
- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

#### 0.3.4

##### Patch Changes

- [`036feca`](https://github.com/backstage/backstage/commit/036feca): Added discovery property to the readme documentation to ensure that it will build when setting it up as new to a Backstage instance

### `@backstage/plugin-devtools-common` (0.1.9 → [0.1.11](../changelogs/@backstage/plugin-devtools-common.md#0111))

#### 0.1.10

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-events-backend` (0.3.4 → [0.3.9](../changelogs/@backstage/plugin-events-backend.md#039))

#### 0.3.6

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-events-backend-module-aws-sqs` (0.3.3 → [0.3.8](../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#038))

#### 0.3.5

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-events-backend-module-azure` (0.2.3 → [0.2.8](../changelogs/@backstage/plugin-events-backend-module-azure.md#028))

#### 0.2.5

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.3 → [0.2.8](../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#028))

#### 0.2.5

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-events-backend-module-gerrit` (0.2.3 → [0.2.8](../changelogs/@backstage/plugin-events-backend-module-gerrit.md#028))

#### 0.2.5

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-events-backend-module-github` (0.2.3 → [0.2.8](../changelogs/@backstage/plugin-events-backend-module-github.md#028))

#### 0.2.5

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-events-backend-module-gitlab` (0.2.3 → [0.2.8](../changelogs/@backstage/plugin-events-backend-module-gitlab.md#028))

#### 0.2.5

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-events-backend-test-utils` (0.1.27 → [0.1.32](../changelogs/@backstage/plugin-events-backend-test-utils.md#0132))

#### 0.1.29

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-events-node` (0.3.3 → [0.3.8](../changelogs/@backstage/plugin-events-node.md#038))

#### 0.3.8

##### Patch Changes

- [`b05e1e1`](https://github.com/backstage/backstage/commit/b05e1e1): Service factories exported by this package have been updated to use the new service factory format that doesn't use a callback.

#### 0.3.5

##### Patch Changes

- [`6a576dc`](https://github.com/backstage/backstage/commit/6a576dc): Replace the usage of `getVoidLogger` with `mockServices.logger.mock` in order to remove the dependency with the soon-to-be-deprecated `backend-common` package.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

#### 0.3.4

##### Patch Changes

- [`7e5a50d`](https://github.com/backstage/backstage/commit/7e5a50d): added `eventsServiceFactory` to `defaultServiceFactories` to resolve issue where different instances of the EventsServices could be used

### `@backstage/plugin-home` (0.7.3 → [0.7.8](../changelogs/@backstage/plugin-home.md#078))

#### 0.7.7

##### Patch Changes

- [`cc81579`](https://github.com/backstage/backstage/commit/cc81579): Updated dependency `@rjsf/utils` to `5.18.5`.
  Updated dependency `@rjsf/core` to `5.18.5`.
  Updated dependency `@rjsf/material-ui` to `5.18.5`.
  Updated dependency `@rjsf/validator-ajv8` to `5.18.5`.

#### 0.7.5

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.
- [`6cb4886`](https://github.com/backstage/backstage/commit/6cb4886): Updated dependency `@rjsf/utils` to `5.18.4`.
  Updated dependency `@rjsf/core` to `5.18.4`.
  Updated dependency `@rjsf/material-ui` to `5.18.4`.
  Updated dependency `@rjsf/validator-ajv8` to `5.18.4`.

#### 0.7.4

##### Patch Changes

- [`2196d3e`](https://github.com/backstage/backstage/commit/2196d3e): Use relative time when displaying visits from the same day
- [`0040ec2`](https://github.com/backstage/backstage/commit/0040ec2): Updated dependency `@rjsf/utils` to `5.18.2`.
  Updated dependency `@rjsf/core` to `5.18.2`.
  Updated dependency `@rjsf/material-ui` to `5.18.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.18.2`.

### `@backstage/plugin-home-react` (0.1.12 → [0.1.15](../changelogs/@backstage/plugin-home-react.md#0115))

#### 0.1.15

##### Patch Changes

- [`cc81579`](https://github.com/backstage/backstage/commit/cc81579): Updated dependency `@rjsf/utils` to `5.18.5`.
  Updated dependency `@rjsf/core` to `5.18.5`.
  Updated dependency `@rjsf/material-ui` to `5.18.5`.
  Updated dependency `@rjsf/validator-ajv8` to `5.18.5`.

#### 0.1.14

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.
- [`6cb4886`](https://github.com/backstage/backstage/commit/6cb4886): Updated dependency `@rjsf/utils` to `5.18.4`.
  Updated dependency `@rjsf/core` to `5.18.4`.
  Updated dependency `@rjsf/material-ui` to `5.18.4`.
  Updated dependency `@rjsf/validator-ajv8` to `5.18.4`.

#### 0.1.13

##### Patch Changes

- [`0040ec2`](https://github.com/backstage/backstage/commit/0040ec2): Updated dependency `@rjsf/utils` to `5.18.2`.
  Updated dependency `@rjsf/core` to `5.18.2`.
  Updated dependency `@rjsf/material-ui` to `5.18.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.18.2`.

### `@backstage/plugin-kubernetes` (0.11.9 → [0.11.12](../changelogs/@backstage/plugin-kubernetes.md#01112))

#### 0.11.11

##### Patch Changes

- [`4f92394`](https://github.com/backstage/backstage/commit/4f92394): Migrate from identityApi to fetchApi in frontend plugins.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-kubernetes-node` (0.1.11 → [0.1.16](../changelogs/@backstage/plugin-kubernetes-node.md#0116))

#### 0.1.13

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-notifications` (0.2.0 → [0.2.3](../changelogs/@backstage/plugin-notifications.md#023))

#### 0.2.3

##### Patch Changes

- [`3bf0697`](https://github.com/backstage/backstage/commit/3bf0697): The toolbar on the Notifications page is hidden when there are no listed notifications.

#### 0.2.2

##### Patch Changes

- [`7f02684`](https://github.com/backstage/backstage/commit/7f02684): Do not always show scrollbars in notification description
- [`6d196b4`](https://github.com/backstage/backstage/commit/6d196b4): Fixes performance issue with Notifications title counter.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

#### 0.2.1

##### Patch Changes

- [`e6bf85f`](https://github.com/backstage/backstage/commit/e6bf85f): Allow overriding `NotificationsPage` page properties
- [`f730c0b`](https://github.com/backstage/backstage/commit/f730c0b): The user can newly mark all unread messages as read at one click.
- [`bfcb2f1`](https://github.com/backstage/backstage/commit/bfcb2f1): Allow showing notifications as snackbars in the UI
- [`e49a810`](https://github.com/backstage/backstage/commit/e49a810): Show all notifications by default to match the sidebar item status
- [`42eaf63`](https://github.com/backstage/backstage/commit/42eaf63): Increase default and allow modifying notification snackbar auto hide duration
- [`a42a19b`](https://github.com/backstage/backstage/commit/a42a19b): Empty descriptions are not rendered to improve the look&feel.
- [`1bc3b86`](https://github.com/backstage/backstage/commit/1bc3b86): Fix to show web notifications even when browser is on foreground. Fix duplicate notifications with multiple tabs.
- [`f793112`](https://github.com/backstage/backstage/commit/f793112): Allow defining `className` and additional properties for `NotificationsSideBarItem`
- [`e1c7d6e`](https://github.com/backstage/backstage/commit/e1c7d6e): Fix infinite loop in the notification title counter
- [`fcda449`](https://github.com/backstage/backstage/commit/fcda449): The rendered size of a notification is limited for very long descriptions.
- [`f6633ca`](https://github.com/backstage/backstage/commit/f6633ca): Add option to set the notification as read automatically when the notification link is opened

### `@backstage/plugin-org` (0.6.24 → [0.6.27](../changelogs/@backstage/plugin-org.md#0627))

#### 0.6.27

##### Patch Changes

- [`5132d28`](https://github.com/backstage/backstage/commit/5132d28): The `useGetEntities` hook could result in requests to `/api/catalog/entities` where the headers exceed the default maximum Node.js header size of 16KB. The hook logic has been adjusted to batch the requests.
- [`c307ef4`](https://github.com/backstage/backstage/commit/c307ef4): Added `relationType` property to EntityMembersListCard component that allows for display users related to a group via some other relationship aside from `memberOf`.

  Also, as a side effect, the `relationsType` property has been deprecated in favor of a more accurately named `relationAggregation` property.

#### 0.6.26

##### Patch Changes

- [`d8e2f53`](https://github.com/backstage/backstage/commit/d8e2f53): The `catalogIndex` external route is now optional and will by default bind to the catalog index page if it is available.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

#### 0.6.25

##### Patch Changes

- [`99e6105`](https://github.com/backstage/backstage/commit/99e6105): Fix ownership card sometimes locking up for complex org structures

### `@backstage/plugin-org-react` (0.1.23 → [0.1.26](../changelogs/@backstage/plugin-org-react.md#0126))

#### 0.1.25

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-permission-backend` (0.5.41 → [0.5.46](../changelogs/@backstage/plugin-permission-backend.md#0546))

#### 0.5.46

##### Patch Changes

- [`ed10fd2`](https://github.com/backstage/backstage/commit/ed10fd2): The `PermissionPolicy` interface has been updated to align with the recent changes to the Backstage auth system. The second argument to the `handle` method is now of the new `PolicyQueryUser` type. This type maintains the old fields from the `BackstageIdentityResponse`, which are now all deprecated. Instead, two new fields have been added, which allows access to the same information:

  - `credentials` - A `BackstageCredentials` object, which is useful for making requests to other services on behalf of the user as part of evaluating the policy. This replaces the deprecated `token` field. See the [Auth Service documentation](https://backstage.io/docs/backend-system/core-services/auth#creating-request-tokens) for information about how to create a token using these credentials.
  - `info` - A `BackstageUserInfo` object, which contains the same information as the deprecated `identity`, except for the `type` field that was redundant.

  Most existing policies can be updated by replacing the `BackstageIdentityResponse` type with `PolicyQueryUser`, which is exported from `@backstage/plugin-permission-node`, as well as replacing any occurrences of `user?.identity` with `user?.info`.

#### 0.5.43

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.14 → [0.1.19](../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#0119))

#### 0.1.19

##### Patch Changes

- [`ed10fd2`](https://github.com/backstage/backstage/commit/ed10fd2): Internal refactor to use new `PolicyQueryUser` type.

#### 0.1.16

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-permission-react` (0.4.22 → [0.4.24](../changelogs/@backstage/plugin-permission-react.md#0424))

#### 0.4.24

##### Patch Changes

- [`28b2cfb`](https://github.com/backstage/backstage/commit/28b2cfb): Improve API Reference documentation

#### 0.4.23

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-scaffolder-backend-module-azure` (0.1.9 → [0.1.14](../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#0114))

#### 0.1.14

##### Patch Changes

- [`661b354`](https://github.com/backstage/backstage/commit/661b354): Fixed a bug where the `RepoUrlPicker` would still require the `owner` field for `azure`

#### 0.1.11

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`b4169ee`](https://github.com/backstage/backstage/commit/b4169ee): Use `GitRepository.webUrl` instead of `GitRepository.remoteUrl` to set the value of `repoContentsUrl` as `remoteUrl` can sometimes return an URL with the wrong format (e.g. `https://<organization>@dev.azure.com/<organization>/<project>/\_git/<repository>`).
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.2.7 → [0.2.12](../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket.md#0212))

#### 0.2.9

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.1.7 → [0.1.12](../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#0112))

#### 0.1.12

##### Patch Changes

- [`b5deed0`](https://github.com/backstage/backstage/commit/b5deed0): Add support for `autocomplete` handler to provide autocomplete options for `RepoUrlPicker`

#### 0.1.9

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.1.7 → [0.1.12](../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#0112))

#### 0.1.12

##### Patch Changes

- [`6a4ad4e`](https://github.com/backstage/backstage/commit/6a4ad4e): Instead of using hardcoded `targetBranch` now fetch the default branch from Bitbucket repository.
  This prevents from errors when no `targetBranch` is provided and the default repository branch is different from `master`, for example: `main`.

#### 0.1.9

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

#### 0.1.8

##### Patch Changes

- [`24dd655`](https://github.com/backstage/backstage/commit/24dd655): Add examples for `publish:bitbucketServer:pull-request` scaffolder action & improve related tests

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.18 → [0.2.23](../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#0223))

#### 0.2.20

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.41 → [0.2.46](../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0246))

#### 0.2.46

##### Patch Changes

- [`0ac124b`](https://github.com/backstage/backstage/commit/0ac124b): Updated configuration instructions

#### 0.2.43

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

#### 0.2.42

##### Patch Changes

- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.

### `@backstage/plugin-scaffolder-backend-module-gerrit` (0.1.9 → [0.1.14](../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#0114))

#### 0.1.11

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-scaffolder-backend-module-gitea` (0.1.7 → [0.1.12](../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#0112))

#### 0.1.9

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.
- [`1354d81`](https://github.com/backstage/backstage/commit/1354d81): Use `node-fetch` instead of native fetch, as per https://backstage.io/docs/architecture-decisions/adrs-adr013

#### 0.1.8

##### Patch Changes

- [`554af73`](https://github.com/backstage/backstage/commit/554af73): Allow defining `repoVisibility` field for the action `publish:gitea`

### `@backstage/plugin-scaffolder-backend-module-rails` (0.4.34 → [0.4.39](../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0439))

#### 0.4.39

##### Patch Changes

- [`0ac124b`](https://github.com/backstage/backstage/commit/0ac124b): Updated configuration instructions

#### 0.4.36

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-scaffolder-backend-module-sentry` (0.1.25 → [0.1.30](../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#0130))

#### 0.1.27

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.
- [`1354d81`](https://github.com/backstage/backstage/commit/1354d81): Use `node-fetch` instead of native fetch, as per https://backstage.io/docs/architecture-decisions/adrs-adr013

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.3.0 → [0.3.6](../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#036))

#### 0.3.2

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-scaffolder-node` (0.4.3 → [0.4.8](../changelogs/@backstage/plugin-scaffolder-node.md#048))

#### 0.4.8

##### Patch Changes

- [`661b354`](https://github.com/backstage/backstage/commit/661b354): Fixed a bug where the `RepoUrlPicker` would still require the `owner` field for `azure`
- [`b5deed0`](https://github.com/backstage/backstage/commit/b5deed0): Add support for `autocomplete` extension point to provide additional `autocomplete` handlers
- [`0b52438`](https://github.com/backstage/backstage/commit/0b52438): Serialization of the scaffolder workspace into GCP bucket

#### 0.4.5

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

#### 0.4.4

##### Patch Changes

- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.
- [`e4b50ab`](https://github.com/backstage/backstage/commit/e4b50ab): Scaffolder workspace serialization
- [`f633efa`](https://github.com/backstage/backstage/commit/f633efa): To remove the dependency on the soon-to-be-deprecated `backend-common` package, this package now maintains its own isomorphic Git class implementation.

### `@backstage/plugin-scaffolder-node-test-utils` (0.1.3 → [0.1.9](../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#019))

#### 0.1.9

##### Patch Changes

- [`54429b5`](https://github.com/backstage/backstage/commit/54429b5): Filename and imports correction for mockActionContext.ts

#### 0.1.5

##### Patch Changes

- [`6a576dc`](https://github.com/backstage/backstage/commit/6a576dc): Replace the usage of `getVoidLogger` with `mockServices.logger.mock` in order to remove the dependency with the soon-to-be-deprecated `backend-common` package.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-search-backend-module-catalog` (0.1.23 → [0.1.28](../changelogs/@backstage/plugin-search-backend-module-catalog.md#0128))

#### 0.1.25

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

#### 0.1.24

##### Patch Changes

- [`b192752`](https://github.com/backstage/backstage/commit/b192752): Updated `README.md` to point to `packages/backend` instead of `packages/backend-next`.
- [`d5fff66`](https://github.com/backstage/backstage/commit/d5fff66): Fix wiring of the module exported at the `/alpha` path, which was causing authentication failures.
- [`5dc5f4f`](https://github.com/backstage/backstage/commit/5dc5f4f): Allow the `tokenManager` parameter to be optional when instantiating collator

### `@backstage/plugin-search-backend-module-explore` (0.1.23 → [0.1.28](../changelogs/@backstage/plugin-search-backend-module-explore.md#0128))

#### 0.1.25

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

#### 0.1.24

##### Patch Changes

- [`ca6e2e0`](https://github.com/backstage/backstage/commit/ca6e2e0): Migrate search collator to use the new auth services.
- [`5d99272`](https://github.com/backstage/backstage/commit/5d99272): Update README.md to point to explore plugin in community-plugins repository.

### `@backstage/plugin-search-backend-module-pg` (0.5.26 → [0.5.32](../changelogs/@backstage/plugin-search-backend-module-pg.md#0532))

#### 0.5.28

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`6a576dc`](https://github.com/backstage/backstage/commit/6a576dc): Replace the usage of `getVoidLogger` with `mockServices.logger.mock` in order to remove the dependency with the soon-to-be-deprecated `backend-common` package.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

#### 0.5.27

##### Patch Changes

- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.

### `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.1.10 → [0.1.15](../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#0115))

#### 0.1.12

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-search-backend-module-techdocs` (0.1.22 → [0.1.27](../changelogs/@backstage/plugin-search-backend-module-techdocs.md#0127))

#### 0.1.24

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

#### 0.1.23

##### Patch Changes

- [`5dc5f4f`](https://github.com/backstage/backstage/commit/5dc5f4f): Allow the `tokenManager` parameter to be optional when instantiating collator

### `@backstage/plugin-signals-backend` (0.1.3 → [0.1.8](../changelogs/@backstage/plugin-signals-backend.md#018))

#### 0.1.5

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`6a576dc`](https://github.com/backstage/backstage/commit/6a576dc): Replace the usage of `getVoidLogger` with `mockServices.logger.mock` in order to remove the dependency with the soon-to-be-deprecated `backend-common` package.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

#### 0.1.4

##### Patch Changes

- [`845d56a`](https://github.com/backstage/backstage/commit/845d56a): Improved signal lifecycle management and added server side pinging of connections

### `@backstage/plugin-signals-node` (0.1.3 → [0.1.8](../changelogs/@backstage/plugin-signals-node.md#018))

#### 0.1.5

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-user-settings` (0.8.5 → [0.8.10](../changelogs/@backstage/plugin-user-settings.md#0810))

#### 0.8.7

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.
- [`e6ec179`](https://github.com/backstage/backstage/commit/e6ec179): Use signals to update user settings across sessions

#### 0.8.6

##### Patch Changes

- [`131e5cb`](https://github.com/backstage/backstage/commit/131e5cb): Fix broken links in README.

### `@backstage/plugin-user-settings-backend` (0.2.16 → [0.2.21](../changelogs/@backstage/plugin-user-settings-backend.md#0221))

#### 0.2.18

##### Patch Changes

- [`8869b8e`](https://github.com/backstage/backstage/commit/8869b8e): Updated local development setup.
- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.
- [`e6ec179`](https://github.com/backstage/backstage/commit/e6ec179): Use signals to update user settings across sessions

#### 0.2.17

##### Patch Changes

- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.

### `@backstage/theme` (0.5.3 → [0.5.6](../changelogs/@backstage/theme.md#056))

#### 0.5.6

##### Patch Changes

- [`702fa7d`](https://github.com/backstage/backstage/commit/702fa7d): Internal refactor to fix an issue where the MUI 5 `v5-` class prefixing gets removed by tree shaking.

#### 0.5.4

##### Patch Changes

- [`f1462df`](https://github.com/backstage/backstage/commit/f1462df): Fixed bug where scrollbars don't pick up the theme when in dark mode

## Other minor version bumps

### `@backstage/catalog-model` (1.4.5 → [1.5.0](../changelogs/@backstage/catalog-model.md#150))

#### 1.5.0

##### Minor Changes

- [`79025f3`](https://github.com/backstage/backstage/commit/79025f3): Introduce a domain attribute to the domain entity to allow a hierarchy of domains to exist.

### `@backstage/core-app-api` (1.12.4 → [1.14.1](../changelogs/@backstage/core-app-api.md#1141))

#### 1.14.0

##### Minor Changes

- [`d3c39fc`](https://github.com/backstage/backstage/commit/d3c39fc): Allow for the disabling of external routes through config, which was rendered impossible after the introduction of default targets.

  ```yaml
  app:
    routes:
      bindings:
        # This has the effect of removing the button for registering new
        # catalog entities in the scaffolder template list view
        scaffolder.registerComponent: false
  ```

##### Patch Changes

- [`db2e2d5`](https://github.com/backstage/backstage/commit/db2e2d5): Updated config schema to support app.routes.bindings

#### 1.12.6

##### Patch Changes

- [`35fbe09`](https://github.com/backstage/backstage/commit/35fbe09): Added support for configuration of route bindings through static configuration, and default targets for external route refs.

  In addition to configuring route bindings through code, it is now also possible to configure route bindings under the `app.routes.bindings` key, for example:

  ```yaml
  app:
    routes:
      bindings:
        catalog.createComponent: catalog-import.importPage
  ```

  Each key in the route binding object is of the form `<plugin-id>.<externalRouteName>`, where the route name is key used in the `externalRoutes` object passed to `createPlugin`. The value is of the same form, but with the name taken from the plugin `routes` option instead.

  The equivalent of the above configuration in code is the following:

  ```ts
  const app = createApp({
    // ...
    bindRoutes({ bind }) {
      bind(catalogPlugin.externalRoutes, {
        createComponent: catalogImportPlugin.routes.importPage,
      });
    },
  });
  ```

#### 1.12.5

##### Patch Changes

- [`1bed9a3`](https://github.com/backstage/backstage/commit/1bed9a3): The Backstage identity session expiration check will no longer fall back to using the provider expiration. This was introduced to smooth out the rollout of Backstage release 1.18, and is no longer needed.

### `@backstage/plugin-catalog` (1.19.0 → [1.21.1](../changelogs/@backstage/plugin-catalog.md#1211))

#### 1.21.1

##### Patch Changes

- [`06c0956`](https://github.com/backstage/backstage/commit/06c0956): Support i18n for catalog and catalog-react plugins
- [`d133eaa`](https://github.com/backstage/backstage/commit/d133eaa): Added small notes to AboutCard to discourage customizability PRs

#### 1.21.0

##### Minor Changes

- [`863a800`](https://github.com/backstage/backstage/commit/863a800): Added the following default targets for external routes:

  - `createComponent` binds to the Scaffolder page.
  - `viewTechDoc` binds to the TechDocs entity documentation page.
  - `createFromTemplate` binds to the Scaffolder selected template page.

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.
- [`e04e57d`](https://github.com/backstage/backstage/commit/e04e57d): Fix bug with missing Actions column after adding "pagination" prop to catalog table
- [`a2d2649`](https://github.com/backstage/backstage/commit/a2d2649): Export `catalogTranslationRef` under `/alpha`
- [`bcec60f`](https://github.com/backstage/backstage/commit/bcec60f): updated the ContextMenu, ActionsPage, OngoingTask and TemplateCard frontend components to support the new scaffolder permissions:

  - `scaffolder.task.create`
  - `scaffolder.task.cancel`
  - `scaffolder.task.read`

#### 1.20.0

##### Minor Changes

- [`8834daf`](https://github.com/backstage/backstage/commit/8834daf): Updated the presentation API to return a promise, in addition to the snapshot and observable that were there before. This makes it much easier to consume the API in a non-React context.

##### Patch Changes

- [`131e5cb`](https://github.com/backstage/backstage/commit/131e5cb): Fix broken links in README.
- [`5d99272`](https://github.com/backstage/backstage/commit/5d99272): Update local development dependencies.
- [`4118530`](https://github.com/backstage/backstage/commit/4118530): Avoiding pre-loading display total count undefined for table counts

### `@backstage/plugin-catalog-backend` (1.21.1 → [1.24.0](../changelogs/@backstage/plugin-catalog-backend.md#1240))

#### 1.24.0

##### Minor Changes

- [`b9ed1bb`](https://github.com/backstage/backstage/commit/b9ed1bb): bumped better-sqlite3 from ^9.0.0 to ^11.0.0

#### 1.23.0

##### Minor Changes

- [`c7528b0`](https://github.com/backstage/backstage/commit/c7528b0): Pass through `EventsService` too in the new backend system

##### Patch Changes

- [`8869b8e`](https://github.com/backstage/backstage/commit/8869b8e): Updated local development setup.
- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.
- [`d779e3b`](https://github.com/backstage/backstage/commit/d779e3b): Added a regex test to check commit hash. If url is from git commit branch ignore the edit url.
- [`6c5cab1`](https://github.com/backstage/backstage/commit/6c5cab1): Fix bug in `getLocationByEntity`
- [`0f55f5c`](https://github.com/backstage/backstage/commit/0f55f5c): Ensure name and title are both indexed by the DefaultCatalogCollator
- [`1779188`](https://github.com/backstage/backstage/commit/1779188): Start using the `isDatabaseConflictError` helper from the `@backstage/backend-plugin-api` package in order to avoid dependency with the soon to deprecate `@backstage/backend-common` package.

#### 1.22.0

##### Minor Changes

- [`f2a2a83`](https://github.com/backstage/backstage/commit/f2a2a83): Deprecated the `LocationAnalyzer` type, which has been moved to `@backstage/plugin-catalog-node`.
- [`f2a2a83`](https://github.com/backstage/backstage/commit/f2a2a83): The `/alpha` plugin export has had its implementation of the `catalogAnalysisExtensionPoint` updated to reflect the new API.
- [`8d14475`](https://github.com/backstage/backstage/commit/8d14475): Emit well known relationships for the Domain entity kind.

##### Patch Changes

- [`131e5cb`](https://github.com/backstage/backstage/commit/131e5cb): Fix broken links in README.
- [`c6cb568`](https://github.com/backstage/backstage/commit/c6cb568): Add lifecycle monitoring for the catalog processing
- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.
- [`8479a0b`](https://github.com/backstage/backstage/commit/8479a0b): Fixed bug in stitching queue gauge that included entities that are scheduled in the future.

### `@backstage/plugin-catalog-react` (1.11.3 → [1.12.2](../changelogs/@backstage/plugin-catalog-react.md#1122))

#### 1.12.2

##### Patch Changes

- [`06c0956`](https://github.com/backstage/backstage/commit/06c0956): Support i18n for catalog and catalog-react plugins
- [`2030962`](https://github.com/backstage/backstage/commit/2030962): Make EntityOwnerPicker display metadata.title or spec.profile.displayName for mode=only-owners instead of metadata.name

#### 1.12.1

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.
- [`fa8560e`](https://github.com/backstage/backstage/commit/fa8560e): Prevents Autocomplete dropdown from overlapping sidebar on hovering it

#### 1.12.0

##### Minor Changes

- [`8834daf`](https://github.com/backstage/backstage/commit/8834daf): Updated the presentation API to return a promise, in addition to the snapshot and observable that were there before. This makes it much easier to consume the API in a non-React context.

### `@backstage/plugin-scaffolder` (1.19.3 → [1.23.0](../changelogs/@backstage/plugin-scaffolder.md#1230))

#### 1.23.0

##### Minor Changes

- [`52b6db0`](https://github.com/backstage/backstage/commit/52b6db0): Use virtualization with `EntityPicker` as done earlier with `MultiEntityPicker` to fix performance issues with large data sets. `VirtualizedListbox` extracted into reusable component.
- [`3583ce5`](https://github.com/backstage/backstage/commit/3583ce5): Use virtualization with `MultiEntityPicker`. Fixes performance issues with large data sets.
- [`b5deed0`](https://github.com/backstage/backstage/commit/b5deed0): Add support for `bitbucketCloud` autocomplete in `RepoUrlPicker`

##### Patch Changes

- [`4d7e11f`](https://github.com/backstage/backstage/commit/4d7e11f): enable resizing of the task log stream viewer
- [`661b354`](https://github.com/backstage/backstage/commit/661b354): Fixed a bug where the `RepoUrlPicker` would still require the `owner` field for `azure`
- [`cc81579`](https://github.com/backstage/backstage/commit/cc81579): Updated dependency `@rjsf/utils` to `5.18.5`.
  Updated dependency `@rjsf/core` to `5.18.5`.
  Updated dependency `@rjsf/material-ui` to `5.18.5`.
  Updated dependency `@rjsf/validator-ajv8` to `5.18.5`.
- [`89c44b3`](https://github.com/backstage/backstage/commit/89c44b3): Support `catalogFilter` array on `OwnedEntityPicker`

#### 1.21.0

##### Minor Changes

- [`d57ebbc`](https://github.com/backstage/backstage/commit/d57ebbc): Changed the way to display entities in EntityPicker to use entityPresentationApi instead of humanizeEntityRef
- [`62bd9eb`](https://github.com/backstage/backstage/commit/62bd9eb): Replace `ui:widget: password` with the a warning message stating that it's not secure and to use the build in `SecretField`.

  You can do this by updating your `template.yaml` files that have the reference `ui:widget: password` to `ui:field: Secret` instead.

  ```diff
  apiVersion: backstage.io/v1alpha1
  kind: Template
  metadata:
    ...

  spec:
    parameters:
      - title: collect some information
        schema:
          type: object
          properties:
            password:
              title: Password
              type: string
  -            ui:widget: password
  +            ui:field: Secret
    steps:
      - id: collect-info
        name: Collect some information
        action: acme:do:something
        input:
  -        password: ${{ parameters.password }}
  +        password: ${{ secrets.password }}
  ```

- [`60085dd`](https://github.com/backstage/backstage/commit/60085dd): Added the following default targets for external routes:

  - `registerComponent` binds to the catalog import page.
  - `viewTechDoc` binds to the TechDocs entity documentation page.

##### Patch Changes

- [`cbebad1`](https://github.com/backstage/backstage/commit/cbebad1): Internal updates to allow reusing Backstage's `fetchApi` implementation for event source requests. This allows you to for example, override the `Authorization` header.
- [`1ea7679`](https://github.com/backstage/backstage/commit/1ea7679): Removed waiting for the workspace and repository fields to be filled in before requesting user credentials
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.
- [`6cb4886`](https://github.com/backstage/backstage/commit/6cb4886): Updated dependency `@rjsf/utils` to `5.18.4`.
  Updated dependency `@rjsf/core` to `5.18.4`.
  Updated dependency `@rjsf/material-ui` to `5.18.4`.
  Updated dependency `@rjsf/validator-ajv8` to `5.18.4`.
- [`75dcd7e`](https://github.com/backstage/backstage/commit/75dcd7e): Fixing bug in `formData` type as it should be `optional` as it's possibly undefined
- [`bcec60f`](https://github.com/backstage/backstage/commit/bcec60f): updated the ContextMenu, ActionsPage, OngoingTask and TemplateCard frontend components to support the new scaffolder permissions:

  - `scaffolder.task.create`
  - `scaffolder.task.cancel`
  - `scaffolder.task.read`

- [`612a453`](https://github.com/backstage/backstage/commit/612a453): Change owner to project for azure host

#### 1.20.0

##### Minor Changes

- [`4268696`](https://github.com/backstage/backstage/commit/4268696): `MultiEntityPicker` uses `EntityDisplayName` instead of `humanizeEntityRef` to display entity.

##### Patch Changes

- [`9156654`](https://github.com/backstage/backstage/commit/9156654): Capturing more event clicks for scaffolder
- [`131e5cb`](https://github.com/backstage/backstage/commit/131e5cb): Fix broken links in README.
- [`0040ec2`](https://github.com/backstage/backstage/commit/0040ec2): Updated dependency `@rjsf/utils` to `5.18.2`.
  Updated dependency `@rjsf/core` to `5.18.2`.
  Updated dependency `@rjsf/material-ui` to `5.18.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.18.2`.
- [`762141c`](https://github.com/backstage/backstage/commit/762141c): Fixed a bug where the `MultiEntityPicker` was not able to be set as required

### `@backstage/plugin-scaffolder-backend` (1.22.5 → [1.23.0](../changelogs/@backstage/plugin-scaffolder-backend.md#1230))

#### 1.23.0

##### Minor Changes

- [`b5deed0`](https://github.com/backstage/backstage/commit/b5deed0): Add support for `autocomplete` extension point to provide additional `autocomplete` handlers
- [`0b52438`](https://github.com/backstage/backstage/commit/0b52438): Serialization of the scaffolder workspace into GCP bucket

##### Patch Changes

- [`b9451dd`](https://github.com/backstage/backstage/commit/b9451dd): Updated `catalog:write` scaffolder action to show correct file path location in log message
- [`ff1bb4c`](https://github.com/backstage/backstage/commit/ff1bb4c): Added a documentation how to use checkpoints
- [`da90cce`](https://github.com/backstage/backstage/commit/da90cce): Updated dependency `esbuild` to `^0.21.0`.
- [`62d1fe3`](https://github.com/backstage/backstage/commit/62d1fe3): Fix user entity not being fetched for scaffolder dry runner

#### 1.22.9

##### Patch Changes

- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`5c65785`](https://github.com/backstage/backstage/commit/5c65785): Fixing issues with log redaction in the scaffolder logs
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.
- [`7d30d95`](https://github.com/backstage/backstage/commit/7d30d95): Fixing issue with log meta fields possibly being circular refs
- [`d617103`](https://github.com/backstage/backstage/commit/d617103): Updating the logger redaction message to something less dramatic
- [`f4c8486`](https://github.com/backstage/backstage/commit/f4c8486): Increase max wait time in debug:wait action to 10 minutes
- [`bcec60f`](https://github.com/backstage/backstage/commit/bcec60f): added the following new permissions to the scaffolder backend endpoints:

  - `scaffolder.task.create`
  - `scaffolder.task.cancel`
  - `scaffolder.task.read`

#### 1.22.6

##### Patch Changes

- [`131e5cb`](https://github.com/backstage/backstage/commit/131e5cb): Fix broken links in README.
- [`025641b`](https://github.com/backstage/backstage/commit/025641b): Fix issue with the log format not being respected when logging from actions
- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.
- [`e4b50ab`](https://github.com/backstage/backstage/commit/e4b50ab): Scaffolder workspace serialization
- [`025641b`](https://github.com/backstage/backstage/commit/025641b): Redact `meta` fields too with the logger

### `@backstage/plugin-scaffolder-react` (1.8.4 → [1.10.0](../changelogs/@backstage/plugin-scaffolder-react.md#1100))

#### 1.10.0

##### Minor Changes

- [`354e68c`](https://github.com/backstage/backstage/commit/354e68c): Improve validation error display text in scaffolder
- [`b5deed0`](https://github.com/backstage/backstage/commit/b5deed0): Add support for `bitbucketCloud` autocomplete in `RepoUrlPicker`

##### Patch Changes

- [`cc81579`](https://github.com/backstage/backstage/commit/cc81579): Updated dependency `@rjsf/utils` to `5.18.5`.
  Updated dependency `@rjsf/core` to `5.18.5`.
  Updated dependency `@rjsf/material-ui` to `5.18.5`.
  Updated dependency `@rjsf/validator-ajv8` to `5.18.5`.
- [`4d7e11f`](https://github.com/backstage/backstage/commit/4d7e11f): disables rendering of output box if no output is returned

#### 1.9.0

##### Minor Changes

- [`62bd9eb`](https://github.com/backstage/backstage/commit/62bd9eb): Replace `ui:widget: password` with the a warning message stating that it's not secure and to use the build in `SecretField`.

  You can do this by updating your `template.yaml` files that have the reference `ui:widget: password` to `ui:field: Secret` instead.

  ```diff
  apiVersion: backstage.io/v1alpha1
  kind: Template
  metadata:
    ...

  spec:
    parameters:
      - title: collect some information
        schema:
          type: object
          properties:
            password:
              title: Password
              type: string
  -            ui:widget: password
  +            ui:field: Secret
    steps:
      - id: collect-info
        name: Collect some information
        action: acme:do:something
        input:
  -        password: ${{ parameters.password }}
  +        password: ${{ secrets.password }}
  ```

##### Patch Changes

- [`86dc29d`](https://github.com/backstage/backstage/commit/86dc29d): Links that are rendered in the markdown in the `ScaffolderField` component are now opened in new tabs.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.
- [`fa8560e`](https://github.com/backstage/backstage/commit/fa8560e): Prevents Autocomplete dropdown from overlapping sidebar on hovering it
- [`6cb4886`](https://github.com/backstage/backstage/commit/6cb4886): Updated dependency `@rjsf/utils` to `5.18.4`.
  Updated dependency `@rjsf/core` to `5.18.4`.
  Updated dependency `@rjsf/material-ui` to `5.18.4`.
  Updated dependency `@rjsf/validator-ajv8` to `5.18.4`.
- [`75dcd7e`](https://github.com/backstage/backstage/commit/75dcd7e): Fixing bug in `formData` type as it should be `optional` as it's possibly undefined
- [`928cfa0`](https://github.com/backstage/backstage/commit/928cfa0): Fixed a typo '

#### 1.8.5

##### Patch Changes

- [`9156654`](https://github.com/backstage/backstage/commit/9156654): Capturing more event clicks for scaffolder
- [`0040ec2`](https://github.com/backstage/backstage/commit/0040ec2): Updated dependency `@rjsf/utils` to `5.18.2`.
  Updated dependency `@rjsf/core` to `5.18.2`.
  Updated dependency `@rjsf/material-ui` to `5.18.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.18.2`.

## Other patch version bumps

### `@backstage/core-plugin-api` (1.9.2 → [1.9.3](../changelogs/@backstage/core-plugin-api.md#193))

#### 1.9.3

##### Patch Changes

- [`35fbe09`](https://github.com/backstage/backstage/commit/35fbe09): A new `defaultTarget` option has been added to `createExternalRouteRef`. This allows one to specify a default target of the route by name, for example `'catalog.catalogIndex'`, which will be used if the target route is present in the app and there is no explicit route binding.

### `@backstage/integration-react` (1.1.26 → [1.1.29](../changelogs/@backstage/integration-react.md#1129))

#### 1.1.28

##### Patch Changes

- [`23ee9ab`](https://github.com/backstage/backstage/commit/23ee9ab): Fix AWS CodeCommit integration by allowing to change the host

### `@backstage/plugin-catalog-common` (1.0.22 → [1.0.25](../changelogs/@backstage/plugin-catalog-common.md#1025))

#### 1.0.24

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-scaffolder-common` (1.5.1 → [1.5.4](../changelogs/@backstage/plugin-scaffolder-common.md#154))

#### 1.5.3

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.
- [`bcec60f`](https://github.com/backstage/backstage/commit/bcec60f): added the following new permissions to the scaffolder backend endpoints:

  - `scaffolder.task.create`
  - `scaffolder.task.cancel`
  - `scaffolder.task.read`

#### 1.5.2

##### Patch Changes

- [`9156654`](https://github.com/backstage/backstage/commit/9156654): Capturing more event clicks for scaffolder

### `@backstage/plugin-search` (1.4.10 → [1.4.14](../changelogs/@backstage/plugin-search.md#1414))

#### 1.4.14

##### Patch Changes

- [`1117aba`](https://github.com/backstage/backstage/commit/1117aba): Update deps in search api extension to include fetch api

#### 1.4.12

##### Patch Changes

- [`4f92394`](https://github.com/backstage/backstage/commit/4f92394): Migrate from identityApi to fetchApi in frontend plugins.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

#### 1.4.11

##### Patch Changes

- [`0501243`](https://github.com/backstage/backstage/commit/0501243): Added `aria-label` attribute to DialogTitle element and set `aria-modal` attribute to `true` for improved accessibility in the search modal.

### `@backstage/plugin-search-backend` (1.5.7 → [1.5.14](../changelogs/@backstage/plugin-search-backend.md#1514))

#### 1.5.14

##### Patch Changes

- [`343f656`](https://github.com/backstage/backstage/commit/343f656): The `AuthorizedSearchEngine` will now ignore the deprecated `token` option, and treat it as an unauthorized request. This will not have any effect in practice, since credentials are always provided by the router.

#### 1.5.10

##### Patch Changes

- [`8869b8e`](https://github.com/backstage/backstage/commit/8869b8e): Updated local development setup.
- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.
- [`5b6f979`](https://github.com/backstage/backstage/commit/5b6f979): Split backend search plugin startup into "init" and "start" stages to ensure necessary initialization has happened before startup
- [`34dc47d`](https://github.com/backstage/backstage/commit/34dc47d): Move @backstage/repo-tools to devDependencies

#### 1.5.8

##### Patch Changes

- [`c6cb568`](https://github.com/backstage/backstage/commit/c6cb568): Add lifecycle monitoring for the search index registry

### `@backstage/plugin-search-backend-node` (1.2.21 → [1.2.27](../changelogs/@backstage/plugin-search-backend-node.md#1227))

#### 1.2.24

##### Patch Changes

- [`6a576dc`](https://github.com/backstage/backstage/commit/6a576dc): Replace the usage of `getVoidLogger` with `mockServices.logger.mock` in order to remove the dependency with the soon-to-be-deprecated `backend-common` package.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.
- [`5b6f979`](https://github.com/backstage/backstage/commit/5b6f979): Split backend search plugin startup into "init" and "start" stages to ensure necessary initialization has happened before startup

#### 1.2.22

##### Patch Changes

- [`c6cb568`](https://github.com/backstage/backstage/commit/c6cb568): Add lifecycle monitoring for the search index registry

### `@backstage/plugin-search-common` (1.2.11 → [1.2.13](../changelogs/@backstage/plugin-search-common.md#1213))

#### 1.2.12

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-search-react` (1.7.10 → [1.7.13](../changelogs/@backstage/plugin-search-react.md#1713))

#### 1.7.12

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-techdocs` (1.10.4 → [1.10.7](../changelogs/@backstage/plugin-techdocs.md#1107))

#### 1.10.7

##### Patch Changes

- [`8fc2622`](https://github.com/backstage/backstage/commit/8fc2622): Fixed an issue that was causing techdocs pages unnecessarily re-render on navigate.
- [`6fa652c`](https://github.com/backstage/backstage/commit/6fa652c): Improve default sorting of docs table
- [`605b691`](https://github.com/backstage/backstage/commit/605b691): Allow for searching TechDocs by entity title
- [`60caa92`](https://github.com/backstage/backstage/commit/60caa92): Fix double scrollbar bug in reader

#### 1.10.6

##### Patch Changes

- [`654af4a`](https://github.com/backstage/backstage/commit/654af4a): mkdocs-material have updated their CSS variable template, and a few are unset in Backstage. This patch adds the missing variables to ensure coverage.
- [`cbebad1`](https://github.com/backstage/backstage/commit/cbebad1): Internal updates to allow reusing Backstage's `fetchApi` implementation for event source requests. This allows you to for example, override the `Authorization` header.
- [`96cd13e`](https://github.com/backstage/backstage/commit/96cd13e): `TechDocsIndexPage` now accepts an optional `ownerPickerMode` for toggling the behavior of the `EntityOwnerPicker`, exposing a new mode `<TechDocsIndexPage ownerPickerMode="all" />` particularly suitable for larger catalogs. In this new mode, `EntityOwnerPicker` will display all the users and groups present in the catalog.
- [`e40bd9a`](https://github.com/backstage/backstage/commit/e40bd9a): Fixed bug in `CopyToClipboardButton` component where positioning of the "Copy to clipboard" button in techdocs code snippets was broken in some cases.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.
- [`1256d88`](https://github.com/backstage/backstage/commit/1256d88): Fixed an issue preventing the `TechDocsSearchBar` component from opening when clicking on the arrow icon.

#### 1.10.5

##### Patch Changes

- [`d2cc139`](https://github.com/backstage/backstage/commit/d2cc139): Update path in Readme for Plugin Techdocs to show the correct setup information.
- [`5863cf7`](https://github.com/backstage/backstage/commit/5863cf7): The `techdocs.builder` config is now optional and it will default to `local`.

### `@backstage/plugin-techdocs-addons-test-utils` (1.0.31 → [1.0.36](../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#1036))

#### 1.0.33

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

#### 1.0.32

##### Patch Changes

- [`2f13862`](https://github.com/backstage/backstage/commit/2f13862): Fix bug in TechDocsAddonTester when jest.resetAllMocks is called between tests

### `@backstage/plugin-techdocs-backend` (1.10.4 → [1.10.9](../changelogs/@backstage/plugin-techdocs-backend.md#1109))

#### 1.10.9

##### Patch Changes

- [`9ecf5fd`](https://github.com/backstage/backstage/commit/9ecf5fd): Adds extension point for publishers to the techdocs backend

#### 1.10.6

##### Patch Changes

- [`e64bfb2`](https://github.com/backstage/backstage/commit/e64bfb2): Allow defining custom build log transport for techdocs builder
- [`8869b8e`](https://github.com/backstage/backstage/commit/8869b8e): Updated local development setup.
- [`78a0b08`](https://github.com/backstage/backstage/commit/78a0b08): Internal refactor to handle `BackendFeature` contract change.
- [`2110d76`](https://github.com/backstage/backstage/commit/2110d76): Removed `dockerode` dependency.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

#### 1.10.5

##### Patch Changes

- [`5863cf7`](https://github.com/backstage/backstage/commit/5863cf7): The `techdocs.builder` config is now optional and it will default to `local`.

### `@backstage/plugin-techdocs-module-addons-contrib` (1.1.9 → [1.1.12](../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1112))

#### 1.1.11

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/plugin-techdocs-node` (1.12.3 → [1.12.8](../changelogs/@backstage/plugin-techdocs-node.md#1128))

#### 1.12.8

##### Patch Changes

- [`9ecf5fd`](https://github.com/backstage/backstage/commit/9ecf5fd): Adds extension point for publishers to the techdocs backend
- [`4c4d077`](https://github.com/backstage/backstage/commit/4c4d077): Bumps default version of techdocs docker image to latest

#### 1.12.5

##### Patch Changes

- [`e64bfb2`](https://github.com/backstage/backstage/commit/e64bfb2): Allow defining custom build log transport for techdocs builder
- [`48c38f0`](https://github.com/backstage/backstage/commit/48c38f0): `TechdocsGenerator` won't require a `containerRunner` option anymore for generating TechDocs in docker.
- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.
- [`5db7536`](https://github.com/backstage/backstage/commit/5db7536): Updated `getRepoUrlFromLocationAnnotation` to check for Harness SCM integration

#### 1.12.4

##### Patch Changes

- [`d229dc4`](https://github.com/backstage/backstage/commit/d229dc4): Move path utilities from `backend-common` to the `backend-plugin-api` package.

### `@backstage/plugin-techdocs-react` (1.2.3 → [1.2.6](../changelogs/@backstage/plugin-techdocs-react.md#126))

#### 1.2.6

##### Patch Changes

- [`8ac9ce5`](https://github.com/backstage/backstage/commit/8ac9ce5): Resolved the issue where changes in TechDoc add-ons, including the TextSize add-on, were not reapplying during navigation

#### 1.2.5

##### Patch Changes

- [`d44a20a`](https://github.com/backstage/backstage/commit/d44a20a): Added additional plugin metadata to `package.json`.

### `@backstage/test-utils` (1.5.4 → [1.5.9](../changelogs/@backstage/test-utils.md#159))

#### 1.5.8

##### Patch Changes

- [`95a3a0b`](https://github.com/backstage/backstage/commit/95a3a0b): Rename frontend and backend `setupRequestMockHandlers` methods to `registerMswTestHooks`.

### `@techdocs/cli` (1.8.10 → [1.8.16](../changelogs/@techdocs/cli.md#1816))

#### 1.8.16

##### Patch Changes

- [`c964a3d`](https://github.com/backstage/backstage/commit/c964a3d): Import discovery from backend-defaults instead of backend-common

#### 1.8.12

##### Patch Changes

- [`2110d76`](https://github.com/backstage/backstage/commit/2110d76): Removed `dockerode` dependency.

#### 1.8.11

##### Patch Changes

- [`1a0e009`](https://github.com/backstage/backstage/commit/1a0e009): Fix cookie endpoint mock for `serve`

## Excluded dependency updates

- `@backstage/app-defaults` (1.5.4 → [1.5.9](../changelogs/@backstage/app-defaults.md#159))
- `@backstage/backend-openapi-utils` (0.1.10 → [0.1.15](../changelogs/@backstage/backend-openapi-utils.md#0115))
- `@backstage/catalog-client` (1.6.4 → [1.6.5](../changelogs/@backstage/catalog-client.md#165))
- `@backstage/codemods` (0.1.48 → [0.1.49](../changelogs/@backstage/codemods.md#0149))
- `@backstage/config-loader` (1.8.0 → [1.8.1](../changelogs/@backstage/config-loader.md#181))
- `@backstage/dev-utils` (1.0.31 → [1.0.36](../changelogs/@backstage/dev-utils.md#1036))
- `@backstage/frontend-plugin-api` (0.6.4 → [0.6.7](../changelogs/@backstage/frontend-plugin-api.md#067))
