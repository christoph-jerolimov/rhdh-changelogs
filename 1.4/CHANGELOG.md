# RHDH Release 1.4 changelog

Changes between Backstage 1.29.2 (RHDH 1.3) and Backstage 1.32.6 (RHDH 1.4) — 5 added, 2 removed, 163 upgraded, 9 unchanged packages.

## Summary

- [Newly added packages](#newly-added-packages): 5 packages
- [Removed packages](#removed-packages): 2 packages
- [Breaking changes](#breaking-changes): 67 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 18 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 3 packages
- [0.x patch version bumps](#0x-patch-version-bumps): 39 packages
- [Other minor version bumps](#other-minor-version-bumps): 22 packages
- [Other patch version bumps](#other-patch-version-bumps): 8 packages
- [Excluded dependency updates](#excluded-dependency-updates): 6 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/frontend-defaults` (new, 0.1.1)](#backstagefrontend-defaults-new-011)
  - [`@backstage/plugin-app` (new, 0.1.1)](#backstageplugin-app-new-011)
  - [`@backstage/plugin-auth-backend-module-auth0-provider` (new, 0.1.1)](#backstageplugin-auth-backend-module-auth0-provider-new-011)
  - [`@backstage/plugin-auth-backend-module-bitbucket-server-provider` (new, 0.1.1)](#backstageplugin-auth-backend-module-bitbucket-server-provider-new-011)
  - [`@backstage/plugin-techdocs-common` (new, 0.1.0)](#backstageplugin-techdocs-common-new-010)
- [Removed packages](#removed-packages)
- [Breaking changes](#breaking-changes)
  - [`@backstage/backend-app-api` (0.8.0 → 1.0.1)](#backstagebackend-app-api-080--101)
  - [`@backstage/backend-defaults` (0.4.1 → 0.5.2)](#backstagebackend-defaults-041--052)
  - [`@backstage/backend-dynamic-feature-service` (0.2.15 → 0.4.4)](#backstagebackend-dynamic-feature-service-0215--044)
  - [`@backstage/backend-plugin-api` (0.7.0 → 1.0.1)](#backstagebackend-plugin-api-070--101)
  - [`@backstage/backend-test-utils` (0.4.4 → 1.0.2)](#backstagebackend-test-utils-044--102)
  - [`@backstage/cli` (0.26.11 → 0.28.2)](#backstagecli-02611--0282)
  - [`@backstage/core-compat-api` (0.2.7 → 0.3.1)](#backstagecore-compat-api-027--031)
  - [`@backstage/core-components` (0.14.9 → 0.15.1)](#backstagecore-components-0149--0151)
  - [`@backstage/core-plugin-api` (1.9.3 → 1.10.0)](#backstagecore-plugin-api-193--1100)
  - [`@backstage/frontend-app-api` (0.7.4 → 0.10.0)](#backstagefrontend-app-api-074--0100)
  - [`@backstage/frontend-plugin-api` (0.6.7 → 0.9.0)](#backstagefrontend-plugin-api-067--090)
  - [`@backstage/frontend-test-utils` (0.1.11 → 0.2.1)](#backstagefrontend-test-utils-0111--021)
  - [`@backstage/plugin-app-backend` (0.3.71 → 0.3.76)](#backstageplugin-app-backend-0371--0376)
  - [`@backstage/plugin-auth-backend` (0.22.9 → 0.23.1)](#backstageplugin-auth-backend-0229--0231)
  - [`@backstage/plugin-auth-backend-module-atlassian-provider` (0.2.3 → 0.3.1)](#backstageplugin-auth-backend-module-atlassian-provider-023--031)
  - [`@backstage/plugin-auth-backend-module-aws-alb-provider` (0.1.14 → 0.2.1)](#backstageplugin-auth-backend-module-aws-alb-provider-0114--021)
  - [`@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.1.5 → 0.2.1)](#backstageplugin-auth-backend-module-azure-easyauth-provider-015--021)
  - [`@backstage/plugin-auth-backend-module-bitbucket-provider` (0.1.5 → 0.2.1)](#backstageplugin-auth-backend-module-bitbucket-provider-015--021)
  - [`@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.1.5 → 0.3.1)](#backstageplugin-auth-backend-module-cloudflare-access-provider-015--031)
  - [`@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.2.17 → 0.3.1)](#backstageplugin-auth-backend-module-gcp-iap-provider-0217--031)
  - [`@backstage/plugin-auth-backend-module-github-provider` (0.1.19 → 0.2.1)](#backstageplugin-auth-backend-module-github-provider-0119--021)
  - [`@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.19 → 0.2.1)](#backstageplugin-auth-backend-module-gitlab-provider-0119--021)
  - [`@backstage/plugin-auth-backend-module-google-provider` (0.1.19 → 0.2.1)](#backstageplugin-auth-backend-module-google-provider-0119--021)
  - [`@backstage/plugin-auth-backend-module-guest-provider` (0.1.8 → 0.2.1)](#backstageplugin-auth-backend-module-guest-provider-018--021)
  - [`@backstage/plugin-auth-backend-module-microsoft-provider` (0.1.17 → 0.2.1)](#backstageplugin-auth-backend-module-microsoft-provider-0117--021)
  - [`@backstage/plugin-auth-backend-module-oauth2-provider` (0.2.3 → 0.3.1)](#backstageplugin-auth-backend-module-oauth2-provider-023--031)
  - [`@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.1.15 → 0.2.1)](#backstageplugin-auth-backend-module-oauth2-proxy-provider-0115--021)
  - [`@backstage/plugin-auth-backend-module-oidc-provider` (0.2.3 → 0.3.1)](#backstageplugin-auth-backend-module-oidc-provider-023--031)
  - [`@backstage/plugin-auth-backend-module-okta-provider` (0.0.15 → 0.1.1)](#backstageplugin-auth-backend-module-okta-provider-0015--011)
  - [`@backstage/plugin-auth-backend-module-onelogin-provider` (0.1.3 → 0.2.1)](#backstageplugin-auth-backend-module-onelogin-provider-013--021)
  - [`@backstage/plugin-auth-backend-module-pinniped-provider` (0.1.16 → 0.2.1)](#backstageplugin-auth-backend-module-pinniped-provider-0116--021)
  - [`@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.2.3 → 0.4.0)](#backstageplugin-auth-backend-module-vmware-cloud-provider-023--040)
  - [`@backstage/plugin-auth-node` (0.4.17 → 0.5.3)](#backstageplugin-auth-node-0417--053)
  - [`@backstage/plugin-catalog-backend-module-backstage-openapi` (0.2.5 → 0.4.1)](#backstageplugin-catalog-backend-module-backstage-openapi-025--041)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.2.9 → 0.4.1)](#backstageplugin-catalog-backend-module-bitbucket-cloud-029--041)
  - [`@backstage/plugin-catalog-backend-module-gcp` (0.1.23 → 0.3.1)](#backstageplugin-catalog-backend-module-gcp-0123--031)
  - [`@backstage/plugin-catalog-backend-module-github-org` (0.1.17 → 0.3.3)](#backstageplugin-catalog-backend-module-github-org-0117--033)
  - [`@backstage/plugin-catalog-backend-module-gitlab-org` (0.0.5 → 0.2.2)](#backstageplugin-catalog-backend-module-gitlab-org-005--022)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.7.0 → 0.9.1)](#backstageplugin-catalog-backend-module-ldap-070--091)
  - [`@backstage/plugin-catalog-backend-module-logs` (0.0.1 → 0.1.3)](#backstageplugin-catalog-backend-module-logs-001--013)
  - [`@backstage/plugin-catalog-backend-module-openapi` (0.1.40 → 0.2.3)](#backstageplugin-catalog-backend-module-openapi-0140--023)
  - [`@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.20 → 0.2.1)](#backstageplugin-catalog-backend-module-scaffolder-entity-model-0120--021)
  - [`@backstage/plugin-catalog-backend-module-unprocessed` (0.4.9 → 0.5.1)](#backstageplugin-catalog-backend-module-unprocessed-049--051)
  - [`@backstage/plugin-devtools-backend` (0.3.8 → 0.4.1)](#backstageplugin-devtools-backend-038--041)
  - [`@backstage/plugin-events-node` (0.3.8 → 0.4.4)](#backstageplugin-events-node-038--044)
  - [`@backstage/plugin-home` (0.7.8 → 0.8.0)](#backstageplugin-home-078--080)
  - [`@backstage/plugin-notifications-backend` (0.3.3 → 0.4.2)](#backstageplugin-notifications-backend-033--042)
  - [`@backstage/plugin-notifications-backend-module-email` (0.1.3 → 0.3.2)](#backstageplugin-notifications-backend-module-email-013--032)
  - [`@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.19 → 0.2.1)](#backstageplugin-permission-backend-module-allow-all-policy-0119--021)
  - [`@backstage/plugin-permission-node` (0.8.0 → 0.8.4)](#backstageplugin-permission-node-080--084)
  - [`@backstage/plugin-scaffolder-backend-module-azure` (0.1.14 → 0.2.2)](#backstageplugin-scaffolder-backend-module-azure-0114--022)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket` (0.2.12 → 0.3.2)](#backstageplugin-scaffolder-backend-module-bitbucket-0212--032)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.1.12 → 0.2.2)](#backstageplugin-scaffolder-backend-module-bitbucket-cloud-0112--022)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.1.12 → 0.2.2)](#backstageplugin-scaffolder-backend-module-bitbucket-server-0112--022)
  - [`@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.23 → 0.3.2)](#backstageplugin-scaffolder-backend-module-confluence-to-markdown-0223--032)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.46 → 0.3.3)](#backstageplugin-scaffolder-backend-module-cookiecutter-0246--033)
  - [`@backstage/plugin-scaffolder-backend-module-gcp` (0.1.0 → 0.2.2)](#backstageplugin-scaffolder-backend-module-gcp-010--022)
  - [`@backstage/plugin-scaffolder-backend-module-gerrit` (0.1.14 → 0.2.2)](#backstageplugin-scaffolder-backend-module-gerrit-0114--022)
  - [`@backstage/plugin-scaffolder-backend-module-gitea` (0.1.12 → 0.2.2)](#backstageplugin-scaffolder-backend-module-gitea-0112--022)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.4.0 → 0.5.2)](#backstageplugin-scaffolder-backend-module-github-040--052)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.4.4 → 0.6.1)](#backstageplugin-scaffolder-backend-module-gitlab-044--061)
  - [`@backstage/plugin-scaffolder-backend-module-notifications` (0.0.5 → 0.1.3)](#backstageplugin-scaffolder-backend-module-notifications-005--013)
  - [`@backstage/plugin-scaffolder-backend-module-rails` (0.4.39 → 0.5.2)](#backstageplugin-scaffolder-backend-module-rails-0439--052)
  - [`@backstage/plugin-scaffolder-backend-module-sentry` (0.1.30 → 0.2.2)](#backstageplugin-scaffolder-backend-module-sentry-0130--022)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.3.6 → 0.4.3)](#backstageplugin-scaffolder-backend-module-yeoman-036--043)
  - [`@backstage/plugin-search-backend-module-stack-overflow-collator` (0.1.15 → 0.3.2)](#backstageplugin-search-backend-module-stack-overflow-collator-0115--032)
  - [`@backstage/plugin-signals-backend` (0.1.8 → 0.2.2)](#backstageplugin-signals-backend-018--022)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/backend-openapi-utils` (0.1.15 → 0.2.0)](#backstagebackend-openapi-utils-0115--020)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.3.17 → 0.4.4)](#backstageplugin-catalog-backend-module-aws-0317--044)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.1.42 → 0.2.3)](#backstageplugin-catalog-backend-module-azure-0142--023)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.36 → 0.2.3)](#backstageplugin-catalog-backend-module-bitbucket-server-0136--023)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (0.1.39 → 0.2.3)](#backstageplugin-catalog-backend-module-gerrit-0139--023)
  - [`@backstage/plugin-catalog-backend-module-github` (0.6.5 → 0.7.6)](#backstageplugin-catalog-backend-module-github-065--076)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.3.21 → 0.4.4)](#backstageplugin-catalog-backend-module-gitlab-0321--044)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.27 → 0.5.6)](#backstageplugin-catalog-backend-module-incremental-ingestion-0427--056)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.5.30 → 0.6.3)](#backstageplugin-catalog-backend-module-msgraph-0530--063)
  - [`@backstage/plugin-catalog-backend-module-puppetdb` (0.1.28 → 0.2.3)](#backstageplugin-catalog-backend-module-puppetdb-0128--023)
  - [`@backstage/plugin-events-backend-module-aws-sqs` (0.3.8 → 0.4.4)](#backstageplugin-events-backend-module-aws-sqs-038--044)
  - [`@backstage/plugin-notifications` (0.2.3 → 0.3.2)](#backstageplugin-notifications-023--032)
  - [`@backstage/plugin-scaffolder-node` (0.4.8 → 0.5.1)](#backstageplugin-scaffolder-node-048--051)
  - [`@backstage/plugin-search-backend-module-catalog` (0.1.28 → 0.2.4)](#backstageplugin-search-backend-module-catalog-0128--024)
  - [`@backstage/plugin-search-backend-module-explore` (0.1.28 → 0.2.4)](#backstageplugin-search-backend-module-explore-0128--024)
  - [`@backstage/plugin-search-backend-module-techdocs` (0.1.27 → 0.3.1)](#backstageplugin-search-backend-module-techdocs-0127--031)
  - [`@backstage/repo-tools` (0.9.4 → 0.10.0)](#backstagerepo-tools-094--0100)
  - [`@backstage/theme` (0.5.6 → 0.6.0)](#backstagetheme-056--060)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-kubernetes-cluster` (0.0.13 → 0.0.17)](#backstageplugin-kubernetes-cluster-0013--0017)
  - [`@backstage/plugin-signals` (0.0.8 → 0.0.11)](#backstageplugin-signals-008--0011)
  - [`@backstage/plugin-signals-react` (0.0.4 → 0.0.6)](#backstageplugin-signals-react-004--006)
- [0.x patch version bumps](#0x-patch-version-bumps)
  - [`@backstage/backend-dev-utils` (0.1.4 → 0.1.5)](#backstagebackend-dev-utils-014--015)
  - [`@backstage/cli-node` (0.2.7 → 0.2.9)](#backstagecli-node-027--029)
  - [`@backstage/codemods` (0.1.49 → 0.1.51)](#backstagecodemods-0149--0151)
  - [`@backstage/create-app` (0.5.17 → 0.5.21)](#backstagecreate-app-0517--0521)
  - [`@backstage/eslint-plugin` (0.1.8 → 0.1.10)](#backstageeslint-plugin-018--0110)
  - [`@backstage/plugin-api-docs` (0.11.7 → 0.11.11)](#backstageplugin-api-docs-0117--01111)
  - [`@backstage/plugin-api-docs-module-protoc-gen-doc` (0.1.7 → 0.1.8)](#backstageplugin-api-docs-module-protoc-gen-doc-017--018)
  - [`@backstage/plugin-app-node` (0.1.22 → 0.1.26)](#backstageplugin-app-node-0122--0126)
  - [`@backstage/plugin-app-visualizer` (0.1.8 → 0.1.11)](#backstageplugin-app-visualizer-018--0111)
  - [`@backstage/plugin-auth-react` (0.1.4 → 0.1.7)](#backstageplugin-auth-react-014--017)
  - [`@backstage/plugin-bitbucket-cloud-common` (0.2.21 → 0.2.24)](#backstageplugin-bitbucket-cloud-common-0221--0224)
  - [`@backstage/plugin-catalog-graph` (0.4.7 → 0.4.11)](#backstageplugin-catalog-graph-047--0411)
  - [`@backstage/plugin-catalog-import` (0.12.1 → 0.12.5)](#backstageplugin-catalog-import-0121--0125)
  - [`@backstage/plugin-catalog-unprocessed-entities` (0.2.6 → 0.2.9)](#backstageplugin-catalog-unprocessed-entities-026--029)
  - [`@backstage/plugin-config-schema` (0.1.57 → 0.1.60)](#backstageplugin-config-schema-0157--0160)
  - [`@backstage/plugin-devtools` (0.1.16 → 0.1.19)](#backstageplugin-devtools-0116--0119)
  - [`@backstage/plugin-events-backend` (0.3.9 → 0.3.15)](#backstageplugin-events-backend-039--0315)
  - [`@backstage/plugin-events-backend-module-azure` (0.2.8 → 0.2.13)](#backstageplugin-events-backend-module-azure-028--0213)
  - [`@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.8 → 0.2.13)](#backstageplugin-events-backend-module-bitbucket-cloud-028--0213)
  - [`@backstage/plugin-events-backend-module-gerrit` (0.2.8 → 0.2.13)](#backstageplugin-events-backend-module-gerrit-028--0213)
  - [`@backstage/plugin-events-backend-module-github` (0.2.8 → 0.2.13)](#backstageplugin-events-backend-module-github-028--0213)
  - [`@backstage/plugin-events-backend-module-gitlab` (0.2.8 → 0.2.13)](#backstageplugin-events-backend-module-gitlab-028--0213)
  - [`@backstage/plugin-home-react` (0.1.15 → 0.1.18)](#backstageplugin-home-react-0115--0118)
  - [`@backstage/plugin-kubernetes` (0.11.12 → 0.11.16)](#backstageplugin-kubernetes-01112--01116)
  - [`@backstage/plugin-kubernetes-backend` (0.18.3 → 0.18.7)](#backstageplugin-kubernetes-backend-0183--0187)
  - [`@backstage/plugin-kubernetes-node` (0.1.16 → 0.1.20)](#backstageplugin-kubernetes-node-0116--0120)
  - [`@backstage/plugin-kubernetes-react` (0.4.1 → 0.4.4)](#backstageplugin-kubernetes-react-041--044)
  - [`@backstage/plugin-notifications-node` (0.2.3 → 0.2.8)](#backstageplugin-notifications-node-023--028)
  - [`@backstage/plugin-org` (0.6.27 → 0.6.31)](#backstageplugin-org-0627--0631)
  - [`@backstage/plugin-org-react` (0.1.26 → 0.1.30)](#backstageplugin-org-react-0126--0130)
  - [`@backstage/plugin-permission-backend` (0.5.46 → 0.5.50)](#backstageplugin-permission-backend-0546--0550)
  - [`@backstage/plugin-permission-common` (0.8.0 → 0.8.1)](#backstageplugin-permission-common-080--081)
  - [`@backstage/plugin-permission-react` (0.4.24 → 0.4.27)](#backstageplugin-permission-react-0424--0427)
  - [`@backstage/plugin-proxy-backend` (0.5.3 → 0.5.7)](#backstageplugin-proxy-backend-053--057)
  - [`@backstage/plugin-scaffolder-node-test-utils` (0.1.9 → 0.1.15)](#backstageplugin-scaffolder-node-test-utils-019--0115)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.32 → 0.5.37)](#backstageplugin-search-backend-module-pg-0532--0537)
  - [`@backstage/plugin-signals-node` (0.1.8 → 0.1.13)](#backstageplugin-signals-node-018--0113)
  - [`@backstage/plugin-user-settings` (0.8.10 → 0.8.14)](#backstageplugin-user-settings-0810--0814)
  - [`@backstage/plugin-user-settings-backend` (0.2.21 → 0.2.26)](#backstageplugin-user-settings-backend-0221--0226)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/catalog-client` (1.6.5 → 1.7.1)](#backstagecatalog-client-165--171)
  - [`@backstage/catalog-model` (1.5.0 → 1.7.0)](#backstagecatalog-model-150--170)
  - [`@backstage/config-loader` (1.8.1 → 1.9.1)](#backstageconfig-loader-181--191)
  - [`@backstage/core-app-api` (1.14.1 → 1.15.1)](#backstagecore-app-api-1141--1151)
  - [`@backstage/dev-utils` (1.0.36 → 1.1.2)](#backstagedev-utils-1036--112)
  - [`@backstage/integration` (1.13.0 → 1.15.1)](#backstageintegration-1130--1151)
  - [`@backstage/integration-react` (1.1.29 → 1.2.0)](#backstageintegration-react-1129--120)
  - [`@backstage/plugin-catalog` (1.21.1 → 1.24.0)](#backstageplugin-catalog-1211--1240)
  - [`@backstage/plugin-catalog-backend` (1.24.0 → 1.27.1)](#backstageplugin-catalog-backend-1240--1271)
  - [`@backstage/plugin-catalog-common` (1.0.25 → 1.1.0)](#backstageplugin-catalog-common-1025--110)
  - [`@backstage/plugin-catalog-node` (1.12.4 → 1.13.1)](#backstageplugin-catalog-node-1124--1131)
  - [`@backstage/plugin-catalog-react` (1.12.2 → 1.14.0)](#backstageplugin-catalog-react-1122--1140)
  - [`@backstage/plugin-scaffolder` (1.23.0 → 1.26.2)](#backstageplugin-scaffolder-1230--1262)
  - [`@backstage/plugin-scaffolder-backend` (1.23.0 → 1.26.3)](#backstageplugin-scaffolder-backend-1230--1263)
  - [`@backstage/plugin-scaffolder-react` (1.10.0 → 1.13.2)](#backstageplugin-scaffolder-react-1100--1132)
  - [`@backstage/plugin-search-backend` (1.5.14 → 1.6.1)](#backstageplugin-search-backend-1514--161)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.5.3 → 1.6.1)](#backstageplugin-search-backend-module-elasticsearch-153--161)
  - [`@backstage/plugin-search-backend-node` (1.2.27 → 1.3.4)](#backstageplugin-search-backend-node-1227--134)
  - [`@backstage/plugin-search-react` (1.7.13 → 1.8.1)](#backstageplugin-search-react-1713--181)
  - [`@backstage/plugin-techdocs` (1.10.7 → 1.11.0)](#backstageplugin-techdocs-1107--1110)
  - [`@backstage/plugin-techdocs-backend` (1.10.9 → 1.11.1)](#backstageplugin-techdocs-backend-1109--1111)
  - [`@backstage/test-utils` (1.5.9 → 1.7.0)](#backstagetest-utils-159--170)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/app-defaults` (1.5.9 → 1.5.12)](#backstageapp-defaults-159--1512)
  - [`@backstage/plugin-search` (1.4.14 → 1.4.18)](#backstageplugin-search-1414--1418)
  - [`@backstage/plugin-search-common` (1.2.13 → 1.2.14)](#backstageplugin-search-common-1213--1214)
  - [`@backstage/plugin-techdocs-addons-test-utils` (1.0.36 → 1.0.40)](#backstageplugin-techdocs-addons-test-utils-1036--1040)
  - [`@backstage/plugin-techdocs-module-addons-contrib` (1.1.12 → 1.1.16)](#backstageplugin-techdocs-module-addons-contrib-1112--1116)
  - [`@backstage/plugin-techdocs-node` (1.12.8 → 1.12.12)](#backstageplugin-techdocs-node-1128--11212)
  - [`@backstage/plugin-techdocs-react` (1.2.6 → 1.2.9)](#backstageplugin-techdocs-react-126--129)
  - [`@backstage/version-bridge` (1.0.8 → 1.0.10)](#backstageversion-bridge-108--1010)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/frontend-defaults` (new, [0.1.1](../changelogs/@backstage/frontend-defaults.md#011))

#### 0.1.0

##### Minor Changes

- [`7c80650`](https://github.com/backstage/backstage/commit/7c80650): Initial release of this package, which provides a default app setup through the `createApp` function. This replaces the existing `createApp` method from `@backstage/frontend-app-api`.

##### Patch Changes

- [`7d19cd5`](https://github.com/backstage/backstage/commit/7d19cd5): Added a new `CreateAppOptions` type for the `createApp` options.
- [`7d19cd5`](https://github.com/backstage/backstage/commit/7d19cd5): Added `createPublicSignInApp`, used to creating apps for the public entry point.
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

### `@backstage/plugin-app` (new, [0.1.1](../changelogs/@backstage/plugin-app.md#011))

#### 0.1.1

##### Patch Changes

- [`b36be7a`](https://github.com/backstage/backstage/commit/b36be7a): Added missing default `SignInPageExtension` which by default uses guest auth, missing `ApiExtensions` for `scmAuth`

#### 0.1.0

##### Minor Changes

- [`2bb9517`](https://github.com/backstage/backstage/commit/2bb9517): Introduce the `@backstage/plugin-app` package to hold all of the built-in extensions for easy consumption and overriding.

##### Patch Changes

- [`52f9c5a`](https://github.com/backstage/backstage/commit/52f9c5a): Deprecated the `namespace` option for `createExtensionBlueprint` and `createExtension`, these are no longer required and will default to the `pluginId` instead.

  You can migrate some of your extensions that use `createExtensionOverrides` to using `createFrontendModule` instead and providing a `pluginId` there.

  ```ts
  // Before
  createExtensionOverrides({
    extensions: [
      createExtension({
        name: 'my-extension',
        namespace: 'my-namespace',
        kind: 'test',
        ...
      })
    ],
  });

  // After
  createFrontendModule({
    pluginId: 'my-namespace',
    extensions: [
      createExtension({
        name: 'my-extension',
        kind: 'test',
        ...
      })
    ],
  });
  ```

- [`57bf6ae`](https://github.com/backstage/backstage/commit/57bf6ae): Fix issue with `AlertDisplay` and other components defined with `AppRootElementBlueprint` not being rendered when at the `SignInWrapper`
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

### `@backstage/plugin-auth-backend-module-auth0-provider` (new, [0.1.1](../changelogs/@backstage/plugin-auth-backend-module-auth0-provider.md#011))

#### 0.1.0

##### Minor Changes

- [`d908d8c`](https://github.com/backstage/backstage/commit/d908d8c): New module for `@backstage/plugin-auth-backend` that adds a Auth0 auth provider.

##### Patch Changes

- [`0a3a13e`](https://github.com/backstage/backstage/commit/0a3a13e): Updated dependency `supertest` to `^7.0.0`.

### `@backstage/plugin-auth-backend-module-bitbucket-server-provider` (new, [0.1.1](../changelogs/@backstage/plugin-auth-backend-module-bitbucket-server-provider.md#011))

#### 0.1.0

##### Minor Changes

- [`527d973`](https://github.com/backstage/backstage/commit/527d973): New module for `@backstage/plugin-auth-backend` that adds a `Bitbucket Server` auth provider.

##### Patch Changes

- [`0a3a13e`](https://github.com/backstage/backstage/commit/0a3a13e): Updated dependency `supertest` to `^7.0.0`.

### `@backstage/plugin-techdocs-common` (new, [0.1.0](../changelogs/@backstage/plugin-techdocs-common.md#010))

#### 0.1.0

##### Minor Changes

- [`4698e1f`](https://github.com/backstage/backstage/commit/4698e1f): Initial release of the techdocs-common package.

## Removed packages

- `@backstage/backend-common` ([0.23.3](../changelogs/@backstage/backend-common.md#0233))
- `@backstage/backend-tasks` ([0.5.27](../changelogs/@backstage/backend-tasks.md#0527))

## Breaking changes

### `@backstage/backend-app-api` (0.8.0 → [1.0.1](../changelogs/@backstage/backend-app-api.md#101))

#### 1.0.1

##### Patch Changes

- [`ffd1f4a`](https://github.com/backstage/backstage/commit/ffd1f4a): Plugin lifecycle shutdown hooks are now performed before root lifecycle shutdown hooks.
- [`fd6e6f4`](https://github.com/backstage/backstage/commit/fd6e6f4): build(deps): bump `cookie` from 0.6.0 to 0.7.0
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`04af116`](https://github.com/backstage/backstage/commit/04af116): The backend will no longer exit immediately if any plugin or modules fails to initialize. Instead, the backend will wait for all plugins and modules to either start up successfully or throw, and then shut down the backend if there were any initialization errors.

  This fixes an issue where backend initialization errors in adjacent plugins during database schema migration could cause the database migrations to be stuck in a locked state.

#### 1.0.0

##### Major Changes

- [`ec1b4be`](https://github.com/backstage/backstage/commit/ec1b4be): Release 1.0 of the new backend system! :tada:

  The backend system is finally getting promoted to 1.0.0. This means that the API is now stable and breaking changes should not occur until version 2.0.0, see our [package versioning policy](https://backstage.io/docs/overview/versioning-policy/#package-versioning-policy) for more information what this means.

  This release also marks the end of the old backend system based on `createRouter` exports. Going forward backend plugins packages will start to deprecate and later this year remove exports supporting the old backend system. If you would like to help out with this transition, see https://github.com/backstage/backstage/issues/26353 or consult the [migration guide](https://backstage.io/docs/backend-system/building-plugins-and-modules/migrating/#remove-support-for-the-old-backend-system).

##### Minor Changes

- [`19ff127`](https://github.com/backstage/backstage/commit/19ff127): **BREAKING**: The deprecated `identityServiceFactory` and `tokenManagerServiceFactory` have been removed.
- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`cd38da8`](https://github.com/backstage/backstage/commit/cd38da8): Deprecate the `featureDiscoveryServiceFactory` in favor of using `@backstage/backend-defaults#discoveryFeatureLoader` instead.
- [`8ccf784`](https://github.com/backstage/backstage/commit/8ccf784): All created backend instances now share a the same `process` exit listeners, and on exit the process will wait for all backend instances to shut down before exiting. This fixes the `EventEmitter` leak warnings in tests.
- [`6ed9264`](https://github.com/backstage/backstage/commit/6ed9264): chore(deps): bump `path-to-regexp` from 6.2.2 to 8.0.0
- [`c246372`](https://github.com/backstage/backstage/commit/c246372): Updated the error message for missing service dependencies to include the plugin and module IDs.
- [`7f779c7`](https://github.com/backstage/backstage/commit/7f779c7): `auth.externalAccess` should be optional in the config schema
- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.
- [`51a69b5`](https://github.com/backstage/backstage/commit/51a69b5): Fix feature loaders in CJS double-default nested builds
- [`0b2a402`](https://github.com/backstage/backstage/commit/0b2a402): Updates to the config schema to match reality

#### 0.9.0

##### Minor Changes

- [`da4fde5`](https://github.com/backstage/backstage/commit/da4fde5): **BREAKING**: Removed several deprecated service factories. These can instead be imported from `@backstage/backend-defaults` package.
- [`fc24d9e`](https://github.com/backstage/backstage/commit/fc24d9e): Stop using `@backstage/backend-tasks` as it will be deleted in near future.
- [`389f5a4`](https://github.com/backstage/backstage/commit/389f5a4): Remove deprecated `urlReaderServiceFactory`, please import from `@backstage/backend-defaults/urlReader` instead.

##### Patch Changes

- [`8b13183`](https://github.com/backstage/backstage/commit/8b13183): Added support for the latest version of `BackendFeature`s from `@backstage/backend-plugin-api`, including feature loaders.
- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater
- [`7c5f3b0`](https://github.com/backstage/backstage/commit/7c5f3b0): Update the `ServiceRegister` implementation to enable registering multiple service implementations for a given service ref.
- [`80a0737`](https://github.com/backstage/backstage/commit/80a0737): Added configuration for the `packages` options to config schema

### `@backstage/backend-defaults` (0.4.1 → [0.5.2](../changelogs/@backstage/backend-defaults.md#052))

#### 0.5.1

##### Patch Changes

- [`4b60e0c`](https://github.com/backstage/backstage/commit/4b60e0c): Small tweaks to API reports to make them valid
- [`321a994`](https://github.com/backstage/backstage/commit/321a994): Sensitive internal fields on `BackstageCredentials` objects are now defined as read-only properties in order to minimize risk of leakage.
- [`ffd1f4a`](https://github.com/backstage/backstage/commit/ffd1f4a): Plugin lifecycle shutdown hooks are now performed before root lifecycle shutdown hooks.
- [`ffd1f4a`](https://github.com/backstage/backstage/commit/ffd1f4a): The database manager now attempts to close any database connections in a root lifecycle shutdown hook.
- [`e36d12f`](https://github.com/backstage/backstage/commit/e36d12f): The task scheduler now attempts to abort any tasks if it detects that Backstage is being shut down.
- [`fd6e6f4`](https://github.com/backstage/backstage/commit/fd6e6f4): build(deps): bump `cookie` from 0.6.0 to 0.7.0
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`720a2f9`](https://github.com/backstage/backstage/commit/720a2f9): Updated dependency `git-url-parse` to `^15.0.0`.
- [`920004b`](https://github.com/backstage/backstage/commit/920004b): Updating error message for getProjectId when fetching Gitlab project from its url to be more accurate
- [`d7b44f0`](https://github.com/backstage/backstage/commit/d7b44f0): Fix for backend shutdown hanging during local development due to SQLite connection shutdown never resolving.
- [`8fd7deb`](https://github.com/backstage/backstage/commit/8fd7deb): The default root HTTP service implementation will now pretty-print JSON responses in development.

  If you are overriding the `rootHttpRouterServiceFactory` with a `configure` function that doesn't call `applyDefaults`, you can introduce this functionality by adding the following snippet inside `configure`:

  ```ts
  if (process.env.NODE_ENV === 'development') {
    app.set('json spaces', 2);
  }
  ```

#### 0.5.0

##### Minor Changes

- [`a4bac3c`](https://github.com/backstage/backstage/commit/a4bac3c): **BREAKING**: You can no longer supply a `basePath` option to the host discovery implementation. In the new backend system, the ability to choose this path has been removed anyway at the plugin router level.
- [`359fcd7`](https://github.com/backstage/backstage/commit/359fcd7): **BREAKING**: The backwards compatibility with plugins using legacy auth through the token manager service has been removed. This means that instead of falling back to using the old token manager, requests towards plugins that don't support the new auth system will simply fail. Please make sure that all plugins in your deployment are hosted within a backend instance from the new backend system.
- [`baeef13`](https://github.com/backstage/backstage/commit/baeef13): **BREAKING** Removed `createLifecycleMiddleware` and `LifecycleMiddlewareOptions` to clean up API surface. These exports have no external usage and do not provide value in its current form. If you were using these exports, please reach out to the maintainers to discuss your use case.
- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

- [`19ff127`](https://github.com/backstage/backstage/commit/19ff127): **BREAKING**: The default backend instance no longer provides implementations for the identity and token manager services, which have been removed from `@backstage/backend-plugin-api`.

  If you rely on plugins that still require these services, you can add them to your own backend by re-creating the service reference and factory.

  The following can be used to implement the identity service:

  ```ts
  import {
    coreServices,
    createServiceFactory,
    createServiceRef,
  } from '@backstage/backend-plugin-api';
  import {
    DefaultIdentityClient,
    IdentityApi,
  } from '@backstage/plugin-auth-node';

  backend.add(
    createServiceFactory({
      service: createServiceRef<IdentityApi>({ id: 'core.identity' }),
      deps: {
        discovery: coreServices.discovery,
      },
      async factory({ discovery }) {
        return DefaultIdentityClient.create({ discovery });
      },
    }),
  );
  ```

  The following can be used to implement the token manager service:

  ```ts
  import { ServerTokenManager, TokenManager } from '@backstage/backend-common';
  import { createBackend } from '@backstage/backend-defaults';
  import {
    coreServices,
    createServiceFactory,
    createServiceRef,
  } from '@backstage/backend-plugin-api';

  backend.add(
    createServiceFactory({
      service: createServiceRef<TokenManager>({ id: 'core.tokenManager' }),
      deps: {
        config: coreServices.rootConfig,
        logger: coreServices.rootLogger,
      },
      createRootContext({ config, logger }) {
        return ServerTokenManager.fromConfig(config, {
          logger,
          allowDisabledTokenManager: true,
        });
      },
      async factory(_deps, tokenManager) {
        return tokenManager;
      },
    }),
  );
  ```

- [`055b75b`](https://github.com/backstage/backstage/commit/055b75b): **BREAKING**: Simplifications and cleanup as part of the Backend System 1.0 work.

  For the `/database` subpath exports:

  - The deprecated `dropDatabase` function has now been removed, without replacement.
  - The deprecated `LegacyRootDatabaseService` type has now been removed.
  - The return type from `DatabaseManager.forPlugin` is now directly a `DatabaseService`, as arguably expected.
  - `DatabaseManager.forPlugin` now requires the `deps` argument, with the logger and lifecycle services.

  For the `/cache` subpath exports:

  - The `PluginCacheManager` type has been removed. You can still import it from `@backstage/backend-common`, but it's deprecated there, and you should move off of that package by migrating fully to the new backend system.
  - Accordingly, `CacheManager.forPlugin` immediately returns a `CacheService` instead of a `PluginCacheManager`. The outcome of this is that you no longer need to make the extra `.getClient()` call. The old `CacheManager` with the old behavior still exists on `@backstage/backend-common`, but the above recommendations apply.

##### Patch Changes

- [`213664e`](https://github.com/backstage/backstage/commit/213664e): Fixed an issue where the `useRedisSets` configuration for the cache service would have no effect.
- [`6ed9264`](https://github.com/backstage/backstage/commit/6ed9264): chore(deps): bump `path-to-regexp` from 6.2.2 to 8.0.0
- [`622360e`](https://github.com/backstage/backstage/commit/622360e): Move down the discovery config to be in the root
- [`7f779c7`](https://github.com/backstage/backstage/commit/7f779c7): `auth.externalAccess` should be optional in the config schema
- [`fe6fd8c`](https://github.com/backstage/backstage/commit/fe6fd8c): Accept `ConfigService` instead of `Config` in constructors/factories
- [`82539fe`](https://github.com/backstage/backstage/commit/82539fe): Updated dependency `archiver` to `^7.0.0`.
- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.
- [`5705424`](https://github.com/backstage/backstage/commit/5705424): Wrap scheduled tasks from the scheduler core service now in OpenTelemetry spans
- [`7a72ec8`](https://github.com/backstage/backstage/commit/7a72ec8): Exports the `discoveryFeatureLoader` as a replacement for the deprecated `featureDiscoveryService`.
  The `discoveryFeatureLoader` is a new backend system [feature loader](https://backstage.io/docs/backend-system/architecture/feature-loaders/) that discovers backend features from the current `package.json` and its dependencies.
  Here is an example using the `discoveryFeatureLoader` loader in a new backend instance:

  ```ts
  import { createBackend } from '@backstage/backend-defaults';
  import { discoveryFeatureLoader } from '@backstage/backend-defaults';
  //...

  const backend = createBackend();
  //...
  backend.add(discoveryFeatureLoader);
  //...
  backend.start();
  ```

- [`b2a329d`](https://github.com/backstage/backstage/commit/b2a329d): Properly indent the config schema
- [`66dbf0a`](https://github.com/backstage/backstage/commit/66dbf0a): Allow the cache service to accept the human duration format for TTL
- [`5a8fcb4`](https://github.com/backstage/backstage/commit/5a8fcb4): Added the option to skip database migrations by setting `skipMigrations: true` in config. This can be done globally in the database config or by plugin id.
- [`0b2a402`](https://github.com/backstage/backstage/commit/0b2a402): Updates to the config schema to match reality

#### 0.4.2

##### Patch Changes

- [`0d16b52`](https://github.com/backstage/backstage/commit/0d16b52): Add access restrictions to the JWKS external access method config schema
- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater
- [`3b429fb`](https://github.com/backstage/backstage/commit/3b429fb): Added deprecation warning to urge users to perform the auth service migration or implement their own token manager service.
  See https://backstage.io/docs/tutorials/auth-service-migration for more information.
- [`7681b17`](https://github.com/backstage/backstage/commit/7681b17): update the `morgan` middleware to use a custom format to prevent PII from being logged
- [`4e79d19`](https://github.com/backstage/backstage/commit/4e79d19): The `createHealthRouter` utility that allows you to create a health check router is now exported via `@backstage/backend-defaults/rootHttpRouter`.
- [`ba9abf4`](https://github.com/backstage/backstage/commit/ba9abf4): The `SchedulerService` now allows tasks with `frequency: { trigger: 'manual' }`. This means that the task will not be scheduled, but rather run only when manually triggered with `SchedulerService.triggerTask`.
- [`78c1329`](https://github.com/backstage/backstage/commit/78c1329): Updated `GitlabUrlReader.readUrl` and `GitlabUrlReader.readTree` to accept a user-provided token, supporting both bearer and private tokens.
- [`8e967da`](https://github.com/backstage/backstage/commit/8e967da): Fixed the routing of the new health check service, the health endpoints should now properly be available at `/.backstage/health/v1/readiness` and `/.backstage/health/v1/liveness`.
- [`7c5f3b0`](https://github.com/backstage/backstage/commit/7c5f3b0): Update the `UrlReader` service to depends on multiple instances of `UrlReaderFactoryProvider` service.
- [`81f930a`](https://github.com/backstage/backstage/commit/81f930a): use formatted query to prevent chance of SQL-injection
- [`1d5f298`](https://github.com/backstage/backstage/commit/1d5f298): Avoid excessive numbers of error listeners on cache clients

### `@backstage/backend-dynamic-feature-service` (0.2.15 → [0.4.4](../changelogs/@backstage/backend-dynamic-feature-service.md#044))

#### 0.4.2

##### Patch Changes

- [`d18d494`](https://github.com/backstage/backstage/commit/d18d494): Enhance and simplify the activation of the dynamic plugins feature:

  - The dynamic plugins service (which implements the `DynamicPluginsProvider`) is restored, since it is required for plugins to depend on it in order to get the details of loaded dynamic plugins (possibly with loading errors to be surfaced in some UI).
  - A new all-in-one feature loader (`dynamicPluginsFeatureLoader`) is provided that allows a 1-liner activation of both the dynamic features and additional services or plugins required to have the dynamic plugins work correctly with dynamic plugins config schemas. Previous service factories or feature loaders are deprecated.

- [`e6c0550`](https://github.com/backstage/backstage/commit/e6c0550): Enhance the API of the `DynamicPluginProvider` (available as a service) to:

  - expose the new `getScannedPackage()` method that returns the `ScannedPluginPackage` from which a given plugin has been loaded,
  - add an optional `includeFailed` argument in the plugins list retrieval methods, to include the plugins that could be successfully loaded (`false` by default).

- [`4c89e47`](https://github.com/backstage/backstage/commit/4c89e47): Allow passing an async module loader in the `DynamicPluginsFeatureLoaderOptions`.
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`2f88f88`](https://github.com/backstage/backstage/commit/2f88f88): Updated backend installation instructions.

#### 0.4.0

##### Minor Changes

- [`9080f57`](https://github.com/backstage/backstage/commit/9080f57): **BREAKING**: `dynamicPluginsServiceFactory` is no longer callable as a function. If you need to provide options to make a custom factory, use `dynamicPluginsSchemasServiceFactoryWithOptions` instead.

##### Patch Changes

- [`cd38da8`](https://github.com/backstage/backstage/commit/cd38da8): Deprecate the `dynamicPluginsServiceRef`, `dynamicPluginsServiceFactory` and `dynamicPluginsServiceFactoryWithOptions` in favor of using the `dynamicPluginsFeatureDiscoveryLoader` to discover dynamic features in a new backend system.

  See usage examples below:

  Example using the `dynamicPluginsFeatureDiscoveryLoader` loader in a backend instance:

  ```ts
  import { createBackend } from '@backstage/backend-defaults';
  import { dynamicPluginsFeatureDiscoveryLoader } from '@backstage/backend-dynamic-feature-service';
  //...

  const backend = createBackend();
  backend.add(dynamicPluginsFeatureDiscoveryLoader);
  //...
  backend.start();
  ```

  Passing options to the `dynamicPluginsFeatureDiscoveryLoader` loader in a backend instance:

  ```ts
  import { createBackend } from '@backstage/backend-defaults';
  import { dynamicPluginsFeatureDiscoveryLoader } from '@backstage/backend-dynamic-feature-service';
  import { myCustomModuleLoader } from './myCustomModuleLoader';
  //...

  const backend = createBackend();
  backend.add(
    dynamicPluginsFeatureDiscoveryLoader({
      moduleLoader: myCustomModuleLoader,
    }),
  );
  //...
  backend.start();
  ```

- [`e27f889`](https://github.com/backstage/backstage/commit/e27f889): Relax type check for a plugin's default export to also accept a BackendFeature defined as a function instead of an object
- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.

#### 0.3.0

##### Minor Changes

- [`fc24d9e`](https://github.com/backstage/backstage/commit/fc24d9e): Stop using `@backstage/backend-tasks` as it will be deleted in near future.

##### Patch Changes

- [`389f5a4`](https://github.com/backstage/backstage/commit/389f5a4): Update deprecated url-reader-related imports.
- [`b63d378`](https://github.com/backstage/backstage/commit/b63d378): Update internal imports

### `@backstage/backend-plugin-api` (0.7.0 → [1.0.1](../changelogs/@backstage/backend-plugin-api.md#101))

#### 1.0.0

##### Major Changes

- [`ec1b4be`](https://github.com/backstage/backstage/commit/ec1b4be): Release 1.0 of the new backend system! :tada:

  The backend system is finally getting promoted to 1.0.0. This means that the API is now stable and breaking changes should not occur until version 2.0.0, see our [package versioning policy](https://backstage.io/docs/overview/versioning-policy/#package-versioning-policy) for more information what this means.

  This release also marks the end of the old backend system based on `createRouter` exports. Going forward backend plugins packages will start to deprecate and later this year remove exports supporting the old backend system. If you would like to help out with this transition, see https://github.com/backstage/backstage/issues/26353 or consult the [migration guide](https://backstage.io/docs/backend-system/building-plugins-and-modules/migrating/#remove-support-for-the-old-backend-system).

##### Minor Changes

- [`19ff127`](https://github.com/backstage/backstage/commit/19ff127): **BREAKING**: The deprecated identity and token manager services have been removed. This means that `coreServices.identity` and `coreServices.tokenManager` are gone, along with related types and utilities in other packages.
- [`f687050`](https://github.com/backstage/backstage/commit/f687050): Removed the following deprecated exports

  - `BackendPluginConfig` use `CreateBackendPluginOptions`
  - `BackendModuleConfig` use `CreateBackendModuleOptions`
  - `ExtensionPointConfig` use `CreateExtensionPointOptions`

- [`4d82481`](https://github.com/backstage/backstage/commit/4d82481): Removed deprecated `ServiceFactoryOrFunction` type.
- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`cd38da8`](https://github.com/backstage/backstage/commit/cd38da8): Deprecate the `featureDiscoveryServiceRef` in favor of using the new `discoveryFeatureLoader` instead.
- [`8052b9b`](https://github.com/backstage/backstage/commit/8052b9b): Add a `toJSON` on refs so that they can appear in expectations in jest tests
- [`66dbf0a`](https://github.com/backstage/backstage/commit/66dbf0a): Allow the cache service to accept the human duration format for TTL
- [`0b2a402`](https://github.com/backstage/backstage/commit/0b2a402): Updates to the config schema to match reality

#### 0.8.0

##### Minor Changes

- [`389f5a4`](https://github.com/backstage/backstage/commit/389f5a4): **BREAKING** Deleted the following deprecated `UrlReader` exports

  - ReadUrlOptions: Use `UrlReaderServiceReadUrlOptions` instead;
  - ReadUrlResponse: Use `UrlReaderServiceReadUrlResponse` instead;
  - ReadTreeOptions: Use `UrlReaderServiceReadTreeOptions` instead;
  - ReadTreeResponse: Use `UrlReaderServiceReadTreeResponse` instead;
  - ReadTreeResponseFile: Use `UrlReaderServiceReadTreeResponseFile` instead;
  - ReadTreeResponseDirOptions: Use `UrlReaderServiceReadTreeResponseDirOptions` instead;
  - SearchOptions: Use `UrlReaderServiceSearchOptions` instead;
  - SearchResponse: Use `UrlReaderServiceSearchResponse` instead;
  - SearchResponseFile: Use `UrlReaderServiceSearchResponseFile` instead.

- [`7c5f3b0`](https://github.com/backstage/backstage/commit/7c5f3b0): The `createServiceRef` function now accepts a new boolean `multiple` option. The `multiple` option defaults to `false` and when set to `true`, it enables that multiple implementation are installed for the created service ref.

  We're looking for ways to make it possible to augment services without the need to replace the entire service.

  Typical example of that being the ability to install support for additional targets for the `UrlReader` service without replacing the service itself. This achieves that by allowing us to define services that can have multiple simultaneous implementation, allowing the `UrlReader` implementation to depend on such a service to collect all possible implementation of support for external targets:

  ```diff
  // @backstage/backend-defaults

  + export const urlReaderFactoriesServiceRef = createServiceRef<ReaderFactory>({
  +   id: 'core.urlReader.factories',
  +   scope: 'plugin',
  +   multiton: true,
  + });

  ...

  export const urlReaderServiceFactory = createServiceFactory({
    service: coreServices.urlReader,
    deps: {
      config: coreServices.rootConfig,
      logger: coreServices.logger,
  +   factories: urlReaderFactoriesServiceRef,
    },
  -  async factory({ config, logger }) {
  +  async factory({ config, logger, factories }) {
      return UrlReaders.default({
        config,
        logger,
  +     factories,
      });
    },
  });
  ```

  With that, you can then add more custom `UrlReader` factories by installing more implementations of the `urlReaderFactoriesServiceRef` in your backend instance. Something like:

  ```ts
  // packages/backend/index.ts
  import { createServiceFactory } from '@backstage/backend-plugin-api';
  import { urlReaderFactoriesServiceRef } from '@backstage/backend-defaults';
  ...

  backend.add(createServiceFactory({
    service: urlReaderFactoriesServiceRef,
    deps: {},
    async factory() {
      return CustomUrlReader.factory;
    },
  }));

  ...

  ```

- [`c99c620`](https://github.com/backstage/backstage/commit/c99c620): **BREAKING** Removed the following deprecated types:

  - `ServiceRefConfig` use `ServiceRefOptions`
  - `RootServiceFactoryConfig` use `RootServiceFactoryOptions`
  - `PluginServiceFactoryConfig` use `PluginServiceFactoryOptions`

##### Patch Changes

- [`6061061`](https://github.com/backstage/backstage/commit/6061061): Added `createBackendFeatureLoader`, which can be used to create an installable backend feature that can in turn load in additional backend features in a dynamic way.
- [`ba9abf4`](https://github.com/backstage/backstage/commit/ba9abf4): The `SchedulerService` now allows tasks with `frequency: { trigger: 'manual' }`. This means that the task will not be scheduled, but rather run only when manually triggered with `SchedulerService.triggerTask`.
- [`8b13183`](https://github.com/backstage/backstage/commit/8b13183): Added `createBackendFeatureLoader`, which can be used to programmatically select and install backend features.

  A feature loader can return an list of features to be installed, for example in the form on an `Array` or other for of iterable, which allows for the loader to be defined as a generator function. Both synchronous and asynchronous loaders are supported.

  Additionally, a loader can depend on services in its implementation, with the restriction that it can only depend on root-scoped services, and it may not override services that have already been instantiated.

  ```ts
  const searchLoader = createBackendFeatureLoader({
    deps: {
      config: coreServices.rootConfig,
    },
    *loader({ config }) {
      // Example of a custom config flag to enable search
      if (config.getOptionalString('customFeatureToggle.search')) {
        yield import('@backstage/plugin-search-backend/alpha');
        yield import('@backstage/plugin-search-backend-module-catalog/alpha');
        yield import('@backstage/plugin-search-backend-module-explore/alpha');
        yield import('@backstage/plugin-search-backend-module-techdocs/alpha');
      }
    },
  });
  ```

- [`ddde5fe`](https://github.com/backstage/backstage/commit/ddde5fe): Fixed a type issue where plugin and modules depending on multiton services would not receive the correct type.
- [`f011d1b`](https://github.com/backstage/backstage/commit/f011d1b): fix typo in `getPluginRequestToken` comments

### `@backstage/backend-test-utils` (0.4.4 → [1.0.2](../changelogs/@backstage/backend-test-utils.md#102))

#### 1.0.1

##### Patch Changes

- [`fd6e6f4`](https://github.com/backstage/backstage/commit/fd6e6f4): build(deps): bump `cookie` from 0.6.0 to 0.7.0
- [`a19ce00`](https://github.com/backstage/backstage/commit/a19ce00): The `createMockDirectory` cleanup strategy has been changed, no longer requiring it to be called outside individual tests.
- [`9cc7dd6`](https://github.com/backstage/backstage/commit/9cc7dd6): Minor doc string changes

#### 1.0.0

##### Major Changes

- [`ec1b4be`](https://github.com/backstage/backstage/commit/ec1b4be): Release 1.0 of the new backend system! :tada:

  The backend system is finally getting promoted to 1.0.0. This means that the API is now stable and breaking changes should not occur until version 2.0.0, see our [package versioning policy](https://backstage.io/docs/overview/versioning-policy/#package-versioning-policy) for more information what this means.

  This release also marks the end of the old backend system based on `createRouter` exports. Going forward backend plugins packages will start to deprecate and later this year remove exports supporting the old backend system. If you would like to help out with this transition, see https://github.com/backstage/backstage/issues/26353 or consult the [migration guide](https://backstage.io/docs/backend-system/building-plugins-and-modules/migrating/#remove-support-for-the-old-backend-system).

##### Minor Changes

- [`19ff127`](https://github.com/backstage/backstage/commit/19ff127): **BREAKING**: Removed service mocks for the identity and token manager services, which have been removed from `@backstage/backend-plugin-api`.
- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`710f621`](https://github.com/backstage/backstage/commit/710f621): Added missing service mock for `mockServices.rootConfig.mock`, and fixed the definition of `mockServices.rootHttpRouter.factory` to not have a duplicate callback.
- [`f421d2a`](https://github.com/backstage/backstage/commit/f421d2a): Make MySQL pool settings a bit more lax
- [`0363bf1`](https://github.com/backstage/backstage/commit/0363bf1): There is a new `mockErrorHandler` utility to help in mocking the error middleware in tests.
- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

#### 0.5.0

##### Minor Changes

- [`861f162`](https://github.com/backstage/backstage/commit/861f162): **BREAKING**: Removed these deprecated helpers:

  - `setupRequestMockHandlers` is removed; use `registerMswTestHooks` instead.
  - `MockDirectoryOptions` is removed; use `CreateMockDirectoryOptions` instead.

  Stopped exporting the deprecated and internal `isDockerDisabledForTests` helper.

  Removed `get` method from `ServiceFactoryTester` which is replaced by `getSubject`

##### Patch Changes

- [`8b13183`](https://github.com/backstage/backstage/commit/8b13183): Internal updates to support latest version of `BackendFeauture`s from `@backstage/backend-plugin-api`.
- [`b63d378`](https://github.com/backstage/backstage/commit/b63d378): Update internal imports
- [`7c5f3b0`](https://github.com/backstage/backstage/commit/7c5f3b0): Update the `ServiceFactoryTester` to be able to test services that enables multi implementation installation.
- [`4e79d19`](https://github.com/backstage/backstage/commit/4e79d19): The default services for `startTestBackend` and `ServiceFactoryTester` now includes the Root Health Service.

### `@backstage/cli` (0.26.11 → [0.28.2](../changelogs/@backstage/cli.md#0282))

#### 0.28.0

##### Minor Changes

- [`264058c`](https://github.com/backstage/backstage/commit/264058c): The `repo test` command will no longer default to watch mode if the `--since` flag is provided.
- [`55b8b84`](https://github.com/backstage/backstage/commit/55b8b84): **BREAKING**: The Jest configuration defined at `@backstage/cli/config/jest` no longer collects configuration defined in the `"jest"` field from all parent `package.json` files. Instead, it will only read and merge configuration from the `package.json` in the monorepo root if it exists, as well as the target package. In addition, configuration defined in the root `package.json` will now only be merged into each package configuration if it is a valid project-level configuration key.
- [`6129076`](https://github.com/backstage/backstage/commit/6129076): **BREAKING**: Removed the following deprecated commands:

  - `create`: Use `backstage-cli new` instead
  - `create-plugin`: Use `backstage-cli new` instead
  - `plugin:diff`: Use `backstage-cli fix` instead
  - `test`: Use `backstage-cli repo test` or `backstage-cli package test` instead
  - `versions:check`: Use `yarn dedupe` or `yarn-deduplicate` instead
  - `clean`: Use `backstage-cli package clean` instead

  In addition, the experimental `install` and `onboard` commands have been removed since they have not received any updates since their introduction and we're expecting usage to be low. If you where relying on these commands, please let us know by opening an issue towards the main Backstage repository.

##### Patch Changes

- [`ea16633`](https://github.com/backstage/backstage/commit/ea16633): Preserve directory structure for CommonJS build output, just like ESM. This makes the build output more stable and easier to browse, and allows for more effective tree shaking and lazy imports.
- [`520a383`](https://github.com/backstage/backstage/commit/520a383): Added functionality to the prepack script that will append the default export type for entry points to the `exports` object before publishing. This is to help with identifying the declarative integration points for plugins without needing to fetch or run the plugins first.
- [`9625a97`](https://github.com/backstage/backstage/commit/9625a97): The `scaffolder-module` template has been updated to use a more modern layout and new testing utilities for scaffolder actions.
- [`03810d2`](https://github.com/backstage/backstage/commit/03810d2): Remove unknown dependency `diff`
- [`cebee4f`](https://github.com/backstage/backstage/commit/cebee4f): Added support for a new experimental `EXPERIMENTAL_TRIM_NEXT_ENTRY` flag which removes any `./next` entry points present in packages when building and publishing.
- [`54c8aa3`](https://github.com/backstage/backstage/commit/54c8aa3): The check for `react-dom/client` will now properly always run from the target directory.
- [`b676cc9`](https://github.com/backstage/backstage/commit/b676cc9): feat: experimentally support using rspack instead under `EXPERIMENTAL_RSPACK` env flag
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`95999c5`](https://github.com/backstage/backstage/commit/95999c5): The backend plugin template for the `new` command has been updated to provide more guidance and use a more modern structure.
- [`7955f9b`](https://github.com/backstage/backstage/commit/7955f9b): Tweaked the new package feature detection to not be active when building backend packages.
- [`4bfc2ce`](https://github.com/backstage/backstage/commit/4bfc2ce): Updated the Vite implementation behind the `EXPERIMENTAL_VITE` flag to work with more recent versions of Backstage.
- [`720a2f9`](https://github.com/backstage/backstage/commit/720a2f9): Updated dependency `git-url-parse` to `^15.0.0`.
- [`8f0898b`](https://github.com/backstage/backstage/commit/8f0898b): Updated dependency `esbuild` to `^0.24.0`.
- [`2c5ecf5`](https://github.com/backstage/backstage/commit/2c5ecf5): Support `--max-warnings` flag for package linting
- [`88407c3`](https://github.com/backstage/backstage/commit/88407c3): Running `repo lint` with the `--successCache` flag now respects `.gitinore`, and it ignores projects without a `lint` script.
- [`8fe740d`](https://github.com/backstage/backstage/commit/8fe740d): Added a new `--successCache` option to the `backstage-cli repo test` and `backstage-cli repo lint` commands. The cache keeps track of successful runs and avoids re-running for individual packages if they haven't changed. This option is intended only to be used in CI.

  In addition a `--successCacheDir <path>` option has also been added to be able to override the default cache directory.

- [`55b8b84`](https://github.com/backstage/backstage/commit/55b8b84): The Jest configuration will now search for a `src/setupTests.*` file with any valid script extension, not only `.ts`.
- [`79ba5a8`](https://github.com/backstage/backstage/commit/79ba5a8): The `LEGACY_BACKEND_START` flag is now deprecated.
- [`f0514c7`](https://github.com/backstage/backstage/commit/f0514c7): Disabled parsing of input source maps in the SWC transform for Jest.

#### 0.27.1

##### Patch Changes

- [`d2d2313`](https://github.com/backstage/backstage/commit/d2d2313): Add `config.d.ts` files to the list of included file in `tsconfig.json`.

  This allows ESLint to detect issues or deprecations in those files.

- [`16ffdd6`](https://github.com/backstage/backstage/commit/16ffdd6): Remove direct `vite` dependency
- [`8069f4a`](https://github.com/backstage/backstage/commit/8069f4a): Update Scaffolder module template to add itself to the backend
- [`97422b0`](https://github.com/backstage/backstage/commit/97422b0): Update templates to not refer to backend-common
- [`0e1a817`](https://github.com/backstage/backstage/commit/0e1a817): The app build process now outputs an additional `index.html.tmpl` file. This is an non-templated version of the `index.html` file, which can be used to delay templating until runtime.

  The new `index.html.tmpl` file also sets a `backstage-public-path` meta tag to be templated at runtime. The meta tag is in turn picked up by the new `@backstage/cli/config/webpack-public-path.js` entry point script, which uses it to set the runtime public path of the Webpack bundle.

- [`1b5c264`](https://github.com/backstage/backstage/commit/1b5c264): Add `checks: 'read'` for default GitHub app permissions
- [`b4685e7`](https://github.com/backstage/backstage/commit/b4685e7): Added `watchOptions` to frontend webpack config for compatibility with Yarn PnP
- [`d29fc1b`](https://github.com/backstage/backstage/commit/d29fc1b): Updated dependency `@module-federation/enhanced` to `^0.6.0`.
- [`f865103`](https://github.com/backstage/backstage/commit/f865103): Updated dependency `esbuild` to `^0.23.0`.
- [`ab7713a`](https://github.com/backstage/backstage/commit/ab7713a): Updated dependency `eslint-plugin-jest` to `^28.0.0`.
- [`c78ff91`](https://github.com/backstage/backstage/commit/c78ff91): Updated dependency `@rollup/plugin-commonjs` to `^26.0.0`.
- [`4ebf36f`](https://github.com/backstage/backstage/commit/4ebf36f): Upgrade to `vite@v5`
- [`2d3caaf`](https://github.com/backstage/backstage/commit/2d3caaf): The build commands now support the new `backstage.inline` flag in `package.json`, which causes the contents of private packages to be inlined into the consuming package, rather than be treated as an external dependency.
- [`569c3f0`](https://github.com/backstage/backstage/commit/569c3f0): Fixed an issue where published frontend packages would end up with an invalid import structure if a single module imported both `.css` and `.svg` files.
- [`3d88455`](https://github.com/backstage/backstage/commit/3d88455): Add support for `backstage:^` version ranges to versions:bump when using the experimental yarn plugin
- [`d10f6b6`](https://github.com/backstage/backstage/commit/d10f6b6): Allow overriding minify flag with build repo command

#### 0.27.0

##### Minor Changes

- [`32a38e1`](https://github.com/backstage/backstage/commit/32a38e1): **BREAKING**: The lockfile (`yarn.lock`) dependency analysis and mutations have been removed from several commands.

  The `versions:bump` command will no longer attempt to bump and deduplicate dependencies by modifying the lockfile, it will only update `package.json` files.

  The `versions:check` command has been removed, since its only purpose was verification and mutation of the lockfile. We recommend using the `yarn dedupe` command instead, or the `yarn-deduplicate` package if you're using Yarn classic.

  The check that was built into the `package start` command has been removed, it will no longer warn about lockfile mismatches.

  The packages in the Backstage ecosystem handle package duplications much better now than when these CLI features were first introduced, so the need for these features has diminished. By removing them, we drastically reduce the integration between the Backstage CLI and Yarn, making it much easier to add support for other package managers in the future.

##### Patch Changes

- [`7eb08a6`](https://github.com/backstage/backstage/commit/7eb08a6): Add frontend-dynamic-container role to eslint config factory
- [`b2d97fd`](https://github.com/backstage/backstage/commit/b2d97fd): Fixing loading of additional config files with new `ConfigSources`
- [`fbc7819`](https://github.com/backstage/backstage/commit/fbc7819): Use ES2022 in CLI bundler
- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater
- [`6d898d8`](https://github.com/backstage/backstage/commit/6d898d8): Switched the `process` polyfill to use `require.resolve` for greater compatability.
- [`e53074f`](https://github.com/backstage/backstage/commit/e53074f): Updated default backend plugin to use `RootConfigService` instead of `Config`. This also removes the dependency on `@backstage/config` as it's no longer used.
- [`ee2b0e5`](https://github.com/backstage/backstage/commit/ee2b0e5): The experimental module federation build now has the ability to force the use of development versions of `react` and `react-dom` by setting the `FORCE_REACT_DEVELOPMENT` flag.
- [`239dffc`](https://github.com/backstage/backstage/commit/239dffc): Remove usage of deprecated functionality from @backstage/config-loader
- [`e6e7d86`](https://github.com/backstage/backstage/commit/e6e7d86): Switched the target from `'ES2022'` to `'es2022'` for better compatibility with older versions of `swc`.
- [`2ced236`](https://github.com/backstage/backstage/commit/2ced236): Updated dependency `@module-federation/enhanced` to `0.3.1`
- [`0eedec3`](https://github.com/backstage/backstage/commit/0eedec3): Add support for dynamic plugins via the EXPERIMENTAL_MODULE_FEDERATION environment variable when running `yarn start`.
- [`adabb40`](https://github.com/backstage/backstage/commit/adabb40): New command now supports setting package license
- [`dc4fb4f`](https://github.com/backstage/backstage/commit/dc4fb4f): Fix for `repo build --all` not properly detecting the experimental public entry point.

### `@backstage/core-compat-api` (0.2.7 → [0.3.1](../changelogs/@backstage/core-compat-api.md#031))

#### 0.3.1

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`4a5ba19`](https://github.com/backstage/backstage/commit/4a5ba19): Internal update to remove deprecated `BackstagePlugin` type and move to `FrontendPlugin`

#### 0.3.0

##### Minor Changes

- [`6db849e`](https://github.com/backstage/backstage/commit/6db849e): **BREAKING**: The `namespace` parameter for API's is now defaulted to the `pluginId` which was discovered. This means that if you're overriding API's by using ID's directly, they might have changed to include the plugin ID too.

##### Patch Changes

- [`fec8b57`](https://github.com/backstage/backstage/commit/fec8b57): Updated exports to use the new type parameters for extensions and extension blueprints.
- [`c816e2d`](https://github.com/backstage/backstage/commit/c816e2d): Added support for new `FrontendPlugin` and `FrontendModule` types.
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

#### 0.2.8

##### Patch Changes

- [`72754db`](https://github.com/backstage/backstage/commit/72754db): Updated usage of `useRouteRef`, which can now always return `undefined`.
- [`fe1fbb2`](https://github.com/backstage/backstage/commit/fe1fbb2): Migrating usages of the deprecated `createExtension` `v1` format to the newer `v2` format, and old `create*Extension` extension creators to blueprints.
- [`16cf96c`](https://github.com/backstage/backstage/commit/16cf96c): Both `compatWrapper` and `convertLegacyRouteRef` now support converting from the new system to the old.
- [`519b8e0`](https://github.com/backstage/backstage/commit/519b8e0): Added new utilities for converting legacy plugins and extensions to the new system. The `convertLegacyPlugin` option will convert an existing plugin to the new system, although you need to supply extensions for the plugin yourself. To help out with this, there is also a new `convertLegacyPageExtension` which converts an existing page extension to the new system.
- [`6349099`](https://github.com/backstage/backstage/commit/6349099): Added config input type to the extensions

### `@backstage/core-components` (0.14.9 → [0.15.1](../changelogs/@backstage/core-components.md#0151))

#### 0.15.1

##### Patch Changes

- [`3f76d0e`](https://github.com/backstage/backstage/commit/3f76d0e): Correct size of FavoriteToggle and inherit non-starred color from parent
- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`1ff1dbd`](https://github.com/backstage/backstage/commit/1ff1dbd): It is possible to define a custom error element to be shown when sign in fails
- [`83e2887`](https://github.com/backstage/backstage/commit/83e2887): Fixed a bug in the `SidebarSubmenu` core component that caused the nested menu to overlap with the sidebar when the user hovers over the pinned sidebar.
- [`46b5a20`](https://github.com/backstage/backstage/commit/46b5a20): `Link` component now accepts `externalLinkIcon` prop
- [`e4ad29a`](https://github.com/backstage/backstage/commit/e4ad29a): Fix authentication error handling using redirect flow via `enableExperimentalRedirectFlow` config. If an error is caught during authentication, the user is redirected back to app origin with `error` query parameter containing the error message.

#### 0.15.0

##### Minor Changes

- [`9adc552`](https://github.com/backstage/backstage/commit/9adc552): Added missing items to `overridableComponents`

  **BREAKING** Overridable component name for styling `OAuthRequestDialog` changed to `BackstageOAuthRequestDialog`. Overridable component name `BackstageMissingAnnotationEmptyState` that was previously deprecated has been removed.

##### Patch Changes

- [`c891b69`](https://github.com/backstage/backstage/commit/c891b69): Add `FavoriteToggle` in `core-components` to standardise favorite marking
- [`0944334`](https://github.com/backstage/backstage/commit/0944334): Removed default title set to Unknown page on `ContentHeaderTitle` component to support usage of component without title prop.
- [`f325258`](https://github.com/backstage/backstage/commit/f325258): Use getOptionalString for optional app.support.items[].links[].title
- [`af4c146`](https://github.com/backstage/backstage/commit/af4c146): Support menu items should not be buttons in favour of links
- [`107a147`](https://github.com/backstage/backstage/commit/107a147): Fixed `Table` width being overridden by custom `style` prop.
- [`b537bd7`](https://github.com/backstage/backstage/commit/b537bd7): Allow custom star icons to be provided via the `star` and `unstarred` icon overrides. See how to override existing icons in the [Backstage documentation](https://backstage.io/docs/getting-started/app-custom-theme/#custom-icons).
- [`06b8206`](https://github.com/backstage/backstage/commit/06b8206): Added `titleComponent` prop to `SignInPage` component to allow further customization of the title using `ReactNode`
- [`dbbd93e`](https://github.com/backstage/backstage/commit/dbbd93e): Internal update to match recent React types
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

#### 0.14.10

##### Patch Changes

- [`678971a`](https://github.com/backstage/backstage/commit/678971a): Move the `Link` component to the `RoutedTabs` instead of the `HeaderTabs` component
- [`13a9c63`](https://github.com/backstage/backstage/commit/13a9c63): Corrected the documentation for the GCP IAP auth module and updated the configuration to follow proxy configuration conventions by ignoring authEnv

### `@backstage/core-plugin-api` (1.9.3 → [1.10.0](../changelogs/@backstage/core-plugin-api.md#1100))

#### 1.10.0

##### Minor Changes

- [`bfd4bec`](https://github.com/backstage/backstage/commit/bfd4bec): **BREAKING PRODUCERS**: The `IconComponent` no longer accepts `fontSize="default"`. This has effectively been removed from Material-UI since its last two major versions, and has not worked properly for them in a long time.

  This change should not have an effect on neither users of MUI4 nor MUI5/6, since the updated interface should still let you send the respective `SvgIcon` types into interfaces where relevant (e.g. as app icons).

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`39001f4`](https://github.com/backstage/backstage/commit/39001f4): Fixing issue with types for `ParamKeys` leading to type mismatches across versions

#### 1.9.4

##### Patch Changes

- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

### `@backstage/frontend-app-api` (0.7.4 → [0.10.0](../changelogs/@backstage/frontend-app-api.md#0100))

#### 0.10.0

##### Minor Changes

- [`4a5ba19`](https://github.com/backstage/backstage/commit/4a5ba19): Removed deprecated `createApp` and `CreateAppFeatureLoader` from `@backstage/frontend-app-api`, use the same `createApp` and `CreateAppFeatureLoader` import from `@backstage/frontend-defaults` instead.

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

#### 0.9.0

##### Minor Changes

- [`7c80650`](https://github.com/backstage/backstage/commit/7c80650): **BREAKING**: The `createSpecializedApp` function now creates a bare-bones app without any of the default app structure or APIs. To re-introduce this functionality if you need to use `createSpecializedApp` you can install the `app` plugin from `@backstage/plugin-app`.

  In addition, the `createApp` and `CreateAppFeatureLoader` exports are now deprecated as they are being moved to `@backstage/frontend-defaults`, which should be used instead.

- [`62cce6c`](https://github.com/backstage/backstage/commit/62cce6c): Removed deprecated `icons` property passing to `createApp` and `createSpecializedApp`. Use `IconBundleBlueprint.make` to create extensions instead and include them in the app.

##### Patch Changes

- [`fec8b57`](https://github.com/backstage/backstage/commit/fec8b57): Updated exports to use the new type parameters for extensions and extension blueprints.
- [`2bb9517`](https://github.com/backstage/backstage/commit/2bb9517): Introduce the `@backstage/plugin-app` package to hold all of the built-in extensions for easy consumption and overriding.
- [`c816e2d`](https://github.com/backstage/backstage/commit/c816e2d): Added support for new `FrontendPlugin` and `FrontendModule` types.
- [`f3a2b91`](https://github.com/backstage/backstage/commit/f3a2b91): Moved several implementations of built-in APIs from being hardcoded in the app to instead be provided as API extensions. This moves all API-related inputs from the `app` extension to the respective API extensions. For example, extensions created with `ThemeBlueprint` are now attached to the `themes` input of `api:app-theme` rather than the `app` extension.
- [`0c70949`](https://github.com/backstage/backstage/commit/0c70949): Reverse the order of API factory initialization in order to make sure that overrides from modules take priority
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.
- [`5446061`](https://github.com/backstage/backstage/commit/5446061): Internal refactor following removal of v1 extension support. The app implementation itself still supports v1 extensions at runtime.
- [`948d431`](https://github.com/backstage/backstage/commit/948d431): Removing deprecated `namespace` parameter in favour of `pluginId` instead
- [`ddbeace`](https://github.com/backstage/backstage/commit/ddbeace): Added the ability to explicitly disable routes through the `bindRoutes` option by passing `false` as the route target. This also fixes a bug where route bindings in config were incorrectly prioritized above the ones in code in certain situations.
- [`98850de`](https://github.com/backstage/backstage/commit/98850de): Added support for defining `replaces` in `createExtensionInput` which will allow extensions to redirect missing `attachTo` points to an input of the created extension.

  ```ts
  export const AppThemeApi = ApiBlueprint.makeWithOverrides({
    name: 'app-theme',
    inputs: {
      themes: createExtensionInput([ThemeBlueprint.dataRefs.theme], {
        // attachTo: { id: 'app', input: 'themes'} will be redirected to this input instead
        replaces: [{ id: 'app', input: 'themes' }],
      }),
    },
    factory: () {
      ...
    }
  });
  ```

- [`4a66456`](https://github.com/backstage/backstage/commit/4a66456): Added the `root` extension the replace the `app` extension as the root of the app.

#### 0.8.0

##### Minor Changes

- [`fc24d9e`](https://github.com/backstage/backstage/commit/fc24d9e): Stop using `@backstage/backend-tasks` as it will be deleted in near future.

##### Patch Changes

- [`7777b5f`](https://github.com/backstage/backstage/commit/7777b5f): Support icon overriding with the new `IconBundleBlueprint` API.
- [`72754db`](https://github.com/backstage/backstage/commit/72754db): Updated usage of `useRouteRef`, which can now always return `undefined`.
- [`3be9aeb`](https://github.com/backstage/backstage/commit/3be9aeb): Added support for v2 extensions, which declare their inputs and outputs without using a data map.
- [`fe1fbb2`](https://github.com/backstage/backstage/commit/fe1fbb2): Migrating usages of the deprecated `createExtension` `v1` format to the newer `v2` format, and old `create*Extension` extension creators to blueprints.
- [`6349099`](https://github.com/backstage/backstage/commit/6349099): Added config input type to the extensions

### `@backstage/frontend-plugin-api` (0.6.7 → [0.9.0](../changelogs/@backstage/frontend-plugin-api.md#090))

#### 0.9.0

##### Minor Changes

- [`4a5ba19`](https://github.com/backstage/backstage/commit/4a5ba19): Removed deprecated `namespace` option from `createExtension` and `createExtensionBlueprint`, including `.make` and `.makeWithOverides`, it's no longer necessary and will use the `pluginId` instead.

  Removed deprecated `createExtensionOverrides` this should be replaced with `createFrontendModule` instead.

  Removed deprecated `BackstagePlugin` type, use `FrontendPlugin` type instead from this same package.

- [`bfd4bec`](https://github.com/backstage/backstage/commit/bfd4bec): **BREAKING PRODUCERS**: The `IconComponent` no longer accepts `fontSize="default"`. This has effectively been removed from Material-UI since its last two major versions, and has not worked properly for them in a long time.

  This change should not have an effect on neither users of MUI4 nor MUI5/6, since the updated interface should still let you send the respective `SvgIcon` types into interfaces where relevant (e.g. as app icons).

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`873e424`](https://github.com/backstage/backstage/commit/873e424): Internal refactor of usage of opaque types.
- [`323aae8`](https://github.com/backstage/backstage/commit/323aae8): It is now possible to override the blueprint parameters when overriding an extension created from a blueprint:

  ```ts
  const myExtension = MyBlueprint.make({
    params: {
      myParam: 'myDefault',
    },
  });

  const myOverride = myExtension.override({
    params: {
      myParam: 'myOverride',
    },
  });
  const myFactoryOverride = myExtension.override({
    factory(origFactory) {
      return origFactory({
        params: {
          myParam: 'myOverride',
        },
      });
    },
  });
  ```

  The provided parameters will be merged with the original parameters of the extension.

#### 0.8.0

##### Minor Changes

- [`5446061`](https://github.com/backstage/backstage/commit/5446061): **BREAKING**: Removed support for "v1" extensions. This means that it is no longer possible to declare inputs and outputs as objects when using `createExtension`. In addition, all extension creators except for `createComponentExtension` have been removed, use the equivalent blueprint instead. See the [1.30 migration documentation](https://backstage.io/docs/frontend-system/architecture/migrations/#130) for more information on this change.
- [`fec8b57`](https://github.com/backstage/backstage/commit/fec8b57): **BREAKING**: Updated the type parameters for `ExtensionDefinition` and `ExtensionBlueprint` to only have a single object parameter. The base type parameter is exported as `ExtensionDefinitionParameters` and `ExtensionBlueprintParameters` respectively. This is shipped as an immediate breaking change as we expect usage of these types to be rare, and it does not affect the runtime behavior of the API.

  This is a breaking change as it changes the type parameters. Existing usage can generally be updated as follows:

  - `ExtensionDefinition<any>` -> `ExtensionDefinition`
  - `ExtensionDefinition<any, any>` -> `ExtensionDefinition`
  - `ExtensionDefinition<TConfig>` -> `ExtensionDefinition<{ config: TConfig }>`
  - `ExtensionDefinition<TConfig, TConfigInput>` -> `ExtensionDefinition<{ config: TConfig, configInput: TConfigInput }>`

  If you need to infer the parameter you can use `ExtensionDefinitionParameters`, for example:

  ```ts
  import {
    ExtensionDefinition,
    ExtensionDefinitionParameters,
  } from '@backstage/frontend-plugin-api';

  function myUtility<T extends ExtensionDefinitionParameters>(
    ext: ExtensionDefinition<T>,
  ): T['config'] {
    // ...
  }
  ```

  The same patterns apply to `ExtensionBlueprint`.

  This change is made to improve the readability of API references and ability to evolve the type parameters in the future.

##### Patch Changes

- [`2bb9517`](https://github.com/backstage/backstage/commit/2bb9517): Introduce the `@backstage/plugin-app` package to hold all of the built-in extensions for easy consumption and overriding.
- [`c816e2d`](https://github.com/backstage/backstage/commit/c816e2d): Added `createFrontendModule` as a replacement for `createExtensionOverrides`, which is now deprecated.

  Deprecated the `BackstagePlugin` and `FrontendFeature` type in favor of `FrontendPlugin` and `FrontendFeature` from `@backstage/frontend-app-api` respectively.

- [`52f9c5a`](https://github.com/backstage/backstage/commit/52f9c5a): Deprecated the `namespace` option for `createExtensionBlueprint` and `createExtension`, these are no longer required and will default to the `pluginId` instead.

  You can migrate some of your extensions that use `createExtensionOverrides` to using `createFrontendModule` instead and providing a `pluginId` there.

  ```ts
  // Before
  createExtensionOverrides({
    extensions: [
      createExtension({
        name: 'my-extension',
        namespace: 'my-namespace',
        kind: 'test',
        ...
      })
    ],
  });

  // After
  createFrontendModule({
    pluginId: 'my-namespace',
    extensions: [
      createExtension({
        name: 'my-extension',
        kind: 'test',
        ...
      })
    ],
  });
  ```

- [`f3a2b91`](https://github.com/backstage/backstage/commit/f3a2b91): Moved several implementations of built-in APIs from being hardcoded in the app to instead be provided as API extensions. This moves all API-related inputs from the `app` extension to the respective API extensions. For example, extensions created with `ThemeBlueprint` are now attached to the `themes` input of `api:app-theme` rather than the `app` extension.
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.
- [`948d431`](https://github.com/backstage/backstage/commit/948d431): Removing deprecated `namespace` parameter in favour of `pluginId` instead
- [`043d7cd`](https://github.com/backstage/backstage/commit/043d7cd): Internal refactor
- [`220f4f7`](https://github.com/backstage/backstage/commit/220f4f7): Remove unnecessary config object on IconBundleBlueprint
- [`2a61422`](https://github.com/backstage/backstage/commit/2a61422): The `factory` option is no longer required when overriding an extension.
- [`98850de`](https://github.com/backstage/backstage/commit/98850de): Added support for defining `replaces` in `createExtensionInput` which will allow extensions to redirect missing `attachTo` points to an input of the created extension.

  ```ts
  export const AppThemeApi = ApiBlueprint.makeWithOverrides({
    name: 'app-theme',
    inputs: {
      themes: createExtensionInput([ThemeBlueprint.dataRefs.theme], {
        // attachTo: { id: 'app', input: 'themes'} will be redirected to this input instead
        replaces: [{ id: 'app', input: 'themes' }],
      }),
    },
    factory: () {
      ...
    }
  });
  ```

- [`4a66456`](https://github.com/backstage/backstage/commit/4a66456): A new `apis` parameter has been added to `factory` for extensions. This is a way to access utility APIs without being coupled to the React context.

#### 0.7.0

##### Minor Changes

- [`72754db`](https://github.com/backstage/backstage/commit/72754db): **BREAKING**: All types of route refs are always considered optional by `useRouteRef`, which means the caller must always handle a potential `undefined` return value. Related to this change, the `optional` option from `createExternalRouteRef` has been removed, since it is no longer necessary.

  This is released as an immediate breaking change as we expect the usage of the new route refs to be extremely low or zero, since plugins that support the new system will still use route refs and `useRouteRef` from `@backstage/core-plugin-api` in combination with `convertLegacyRouteRef` from `@backstage/core-compat-api`.

##### Patch Changes

- [`6f72c2b`](https://github.com/backstage/backstage/commit/6f72c2b): Fixing issue with extension blueprints `inputs` merging.
- [`210d066`](https://github.com/backstage/backstage/commit/210d066): Added support for using the `params` in other properties of the `createExtensionBlueprint` options by providing a callback.
- [`9b356dc`](https://github.com/backstage/backstage/commit/9b356dc): Renamed `createPlugin` to `createFrontendPlugin`. The old symbol is still exported but deprecated.
- [`a376559`](https://github.com/backstage/backstage/commit/a376559): Correct the `TConfig` type of data references to only contain config
- [`4e53ad6`](https://github.com/backstage/backstage/commit/4e53ad6): Introduce a new way to encapsulate extension kinds that replaces the extension creator pattern with `createExtensionBlueprint`

  This allows the creation of extension instances with the following pattern:

  ```tsx
  // create the extension blueprint which is used to create instances
  const EntityCardBlueprint = createExtensionBlueprint({
    kind: 'entity-card',
    attachTo: { id: 'test', input: 'default' },
    output: [coreExtensionData.reactElement],
    factory(params: { text: string }) {
      return [coreExtensionData.reactElement(<h1>{params.text}</h1>)];
    },
  });

  // create an instance of the extension blueprint with params
  const testExtension = EntityCardBlueprint.make({
    name: 'foo',
    params: {
      text: 'Hello World',
    },
  });
  ```

- [`9b89b82`](https://github.com/backstage/backstage/commit/9b89b82): The `ExtensionBoundary` now by default infers whether it's routable from whether it outputs a route path.
- [`e493020`](https://github.com/backstage/backstage/commit/e493020): Deprecated `inputs` and `configSchema` options for `createComponentExtenion`, these will be removed in a future release
- [`7777b5f`](https://github.com/backstage/backstage/commit/7777b5f): Added a new `IconBundleBlueprint` that lets you create icon bundle extensions that can be installed in an App in order to override or add new app icons.

  ```tsx
  import { IconBundleBlueprint } from '@backstage/frontend-plugin-api';

  const exampleIconBundle = IconBundleBlueprint.make({
    name: 'example-bundle',
    params: {
      icons: {
        user: MyOwnUserIcon,
      },
    },
  });
  ```

- [`99abb6b`](https://github.com/backstage/backstage/commit/99abb6b): Support overriding of plugin extensions using the new `plugin.withOverrides` method.

  ```tsx
  import homePlugin from '@backstage/plugin-home';

  export default homePlugin.withOverrides({
    extensions: [
      homePage.getExtension('page:home').override({
        *factory(originalFactory) {
          yield* originalFactory();
          yield coreExtensionData.reactElement(<h1>My custom home page</h1>);
        },
      }),
    ],
  });
  ```

- [`813cac4`](https://github.com/backstage/backstage/commit/813cac4): Add an `ExtensionBoundary.lazy` function to create properly wrapped lazy-loading enabled elements, suitable for use with `coreExtensionData.reactElement`. The page blueprint now automatically leverages this.
- [`a65cfc8`](https://github.com/backstage/backstage/commit/a65cfc8): Add support for accessing extensions definitions provided by a plugin via `plugin.getExtension(...)`. For this to work the extensions must be defined using the v2 format, typically using an extension blueprint.
- [`3be9aeb`](https://github.com/backstage/backstage/commit/3be9aeb): Extensions have been changed to be declared with an array of inputs and outputs, rather than a map of named data refs. This change was made to reduce confusion around the role of the input and output names, as well as enable more powerful APIs for overriding extensions.

  An extension that was previously declared like this:

  ```tsx
  const exampleExtension = createExtension({
    name: 'example',
    inputs: {
      items: createExtensionInput({
        element: coreExtensionData.reactElement,
      }),
    },
    output: {
      element: coreExtensionData.reactElement,
    },
    factory({ inputs }) {
      return {
        element: (
          <div>
            Example
            {inputs.items.map(item => {
              return <div>{item.output.element}</div>;
            })}
          </div>
        ),
      };
    },
  });
  ```

  Should be migrated to the following:

  ```tsx
  const exampleExtension = createExtension({
    name: 'example',
    inputs: {
      items: createExtensionInput([coreExtensionData.reactElement]),
    },
    output: [coreExtensionData.reactElement],
    factory({ inputs }) {
      return [
        coreExtensionData.reactElement(
          <div>
            Example
            {inputs.items.map(item => {
              return <div>{item.get(coreExtensionData.reactElement)}</div>;
            })}
          </div>,
        ),
      ];
    },
  });
  ```

- [`34f1b2a`](https://github.com/backstage/backstage/commit/34f1b2a): Support merging of `inputs` in extension blueprints, but stop merging `output`. In addition, the original factory in extension blueprints now returns a data container that both provides access to the returned data, but can also be forwarded as output.
- [`3fb421d`](https://github.com/backstage/backstage/commit/3fb421d): Added support to be able to define `zod` config schema in Blueprints, with built in schema merging from the Blueprint and the extension instances.
- [`2d21599`](https://github.com/backstage/backstage/commit/2d21599): Added support for being able to override extension definitions.

  ```tsx
  const TestCard = EntityCardBlueprint.make({
    ...
  });

  TestCard.override({
    // override attachment points
    attachTo: { id: 'something-else', input: 'overridden' },
    // extend the config schema
    config: {
      schema: {
        newConfig: z => z.string().optional(),
      }
    },
    // override factory
    *factory(originalFactory, { inputs, config }){
      const originalOutput = originalFactory();

      yield coreExentsionData.reactElement(
        <Wrapping>
          {originalOutput.get(coreExentsionData.reactElement)}
        </Wrapping>
      );
    }
  });

  ```

- [`31bfc44`](https://github.com/backstage/backstage/commit/31bfc44): Extension data references can now be defined in a way that encapsulates the ID string in the type, in addition to the data type itself. The old way of creating extension data references is deprecated and will be removed in a future release.

  For example, the following code:

  ```ts
  export const myExtension =
    createExtensionDataRef<MyType>('my-plugin.my-data');
  ```

  Should be updated to the following:

  ```ts
  export const myExtension = createExtensionDataRef<MyType>().with({
    id: 'my-plugin.my-data',
  });
  ```

- [`6349099`](https://github.com/backstage/backstage/commit/6349099): Added config input type to the extensions

### `@backstage/frontend-test-utils` (0.1.11 → [0.2.1](../changelogs/@backstage/frontend-test-utils.md#021))

#### 0.2.1

##### Patch Changes

- [`666d5b1`](https://github.com/backstage/backstage/commit/666d5b1): Disable the built-in `SignInPage` in `createExtensionTester` in order to not mess with existing tests
- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`873e424`](https://github.com/backstage/backstage/commit/873e424): Internal refactor of usage of opaque types.
- [`0801db6`](https://github.com/backstage/backstage/commit/0801db6): Added an `ApiMock`, analogous to `ServiceMock` from the backend test utils.
- [`9cc7dd6`](https://github.com/backstage/backstage/commit/9cc7dd6): Added a `mockApis` export, which will replace the `MockX` API implementation classes and their related types. This is analogous with the backend's `mockServices`.

  **DEPRECATED** several old helpers:

  - Deprecated `MockAnalyticsApi`, please use `mockApis.analytics` instead.
  - Deprecated `MockConfigApi`, please use `mockApis.config` instead.
  - Deprecated `MockPermissionApi`, please use `mockApis.permission` instead.
  - Deprecated `MockStorageApi`, please use `mockApis.storage` instead.
  - Deprecated `MockTranslationApi`, please use `mockApis.translation` instead.

#### 0.2.0

##### Minor Changes

- [`5446061`](https://github.com/backstage/backstage/commit/5446061): Removed support for testing "v1" extensions, where outputs are defined as an object rather than an array.
- [`e6e488c`](https://github.com/backstage/backstage/commit/e6e488c): **BREAKING**: The deprecated `.render()` method has been removed from the extension tester.

##### Patch Changes

- [`2a61422`](https://github.com/backstage/backstage/commit/2a61422): The extension tester will no longer unconditionally enable any additional extensions that have been added.
- [`fec8b57`](https://github.com/backstage/backstage/commit/fec8b57): Updated exports to use the new type parameters for extensions and extension blueprints.
- [`4a66456`](https://github.com/backstage/backstage/commit/4a66456): Internal update to add support for passing an `ApiRegistry` when creating the node tree
- [`2bb9517`](https://github.com/backstage/backstage/commit/2bb9517): Introduce the `@backstage/plugin-app` package to hold all of the built-in extensions for easy consumption and overriding.
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.
- [`948d431`](https://github.com/backstage/backstage/commit/948d431): Removing deprecated `namespace` parameter in favour of `pluginId` instead
- [`043d7cd`](https://github.com/backstage/backstage/commit/043d7cd): Internal refactor
- [`f6d1874`](https://github.com/backstage/backstage/commit/f6d1874): Added the ability to provide additional `extensions` and `features` to `renderInTestApp`

#### 0.1.12

##### Patch Changes

- [`8209449`](https://github.com/backstage/backstage/commit/8209449): Added new APIs for testing extensions
- [`72754db`](https://github.com/backstage/backstage/commit/72754db): Updated usage of `useRouteRef`, which can now always return `undefined`.
- [`3be9aeb`](https://github.com/backstage/backstage/commit/3be9aeb): Added support for v2 extensions, which declare their inputs and outputs without using a data map.
- [`fe1fbb2`](https://github.com/backstage/backstage/commit/fe1fbb2): Migrating usages of the deprecated `createExtension` `v1` format to the newer `v2` format, and old `create*Extension` extension creators to blueprints.
- [`2d21599`](https://github.com/backstage/backstage/commit/2d21599): Added support for being able to override extension definitions.

  ```tsx
  const TestCard = EntityCardBlueprint.make({
    ...
  });

  TestCard.override({
    // override attachment points
    attachTo: { id: 'something-else', input: 'overridden' },
    // extend the config schema
    config: {
      schema: {
        newConfig: z => z.string().optional(),
      }
    },
    // override factory
    *factory(originalFactory, { inputs, config }){
      const originalOutput = originalFactory();

      yield coreExentsionData.reactElement(
        <Wrapping>
          {originalOutput.get(coreExentsionData.reactElement)}
        </Wrapping>
      );
    }
  });

  ```

- [`c00e1a0`](https://github.com/backstage/backstage/commit/c00e1a0): Deprecate the `.render` method of the `createExtensionTester` in favour of using `renderInTestApp` directly.

  ```tsx
  import {
    renderInTestApp,
    createExtensionTester,
  } from '@backstage/frontend-test-utils';

  const tester = createExtensionTester(extension);

  const { getByTestId } = renderInTestApp(tester.reactElement());

  // or if you're not using `coreExtensionData.reactElement` as the output ref
  const { getByTestId } = renderInTestApp(tester.get(myComponentRef));
  ```

- [`264e10f`](https://github.com/backstage/backstage/commit/264e10f): Deprecate existing `ExtensionCreators` in favour of their new Blueprint counterparts.
- [`264e10f`](https://github.com/backstage/backstage/commit/264e10f): Refactor `.make` method on Blueprints into two different methods, `.make` and `.makeWithOverrides`.

  When using `createExtensionBlueprint` you can define parameters for the factory function, if you wish to take advantage of these parameters you should use `.make` when creating an extension instance of a Blueprint. If you wish to override more things other than the standard `attachTo`, `name`, `namespace` then you should use `.makeWithOverrides` instead.

  `.make` is reserved for simple creation of extension instances from Blueprints using higher level parameters, whereas `.makeWithOverrides` is lower level and you have more control over the final extension.

- [`6349099`](https://github.com/backstage/backstage/commit/6349099): Added config input type to the extensions

### `@backstage/plugin-app-backend` (0.3.71 → [0.3.76](../changelogs/@backstage/plugin-app-backend.md#0376))

#### 0.3.76

##### Patch Changes

- [`2c4ee26`](https://github.com/backstage/backstage/commit/2c4ee26): Fixed unexpected behaviour where configuration supplied with `APP_CONFIG_*` environment variables where not filtered by the configuration schema.
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

#### 0.3.74

##### Patch Changes

- [`72a8c7b`](https://github.com/backstage/backstage/commit/72a8c7b): Return HTTP status 400 rather than 500 when receiving an unknown POST request.
- [`d3f79d1`](https://github.com/backstage/backstage/commit/d3f79d1): Fixing dependency metadata with the new `@backstage/plugin-app` package
- [`590fb2d`](https://github.com/backstage/backstage/commit/590fb2d): **BREAKING**: The app backend now supports the new `index.html.tmpl` output from `@backstage/cli`. If available, the `index.html` will be templated at runtime with the current configuration of the app backend.

  This is marked as a breaking change because you must now supply the app build-time configuration to the backend. This change also affects the public path behavior, where it is no longer necessary to build the app with the correct public path upfront. You now only need to supply a correct `app.baseUrl` to the app backend plugin at runtime.

  An effect that this change has is that the `index.html` will now contain and present the frontend configuration in an easily readable way, which can aid in debugging. This data was always available in the frontend, but it was injected and hidden in the static bundle.

  This templating behavior is enabled by default, but it can be disabled by setting the `app.disableConfigInjection` configuration option to `true`.

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

#### 0.3.72

##### Patch Changes

- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater
- [`6bd6fda`](https://github.com/backstage/backstage/commit/6bd6fda): Deprecate `createRouter` and its options in favour of the new backend system.

### `@backstage/plugin-auth-backend` (0.22.9 → [0.23.1](../changelogs/@backstage/plugin-auth-backend.md#0231))

#### 0.23.1

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

#### 0.23.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`527d973`](https://github.com/backstage/backstage/commit/527d973): Migrated the `Bitbucket Server` auth provider to be implemented using the new `@backstage/plugin-auth-backend-module-bitbucket-server-provider` module.
- [`d908d8c`](https://github.com/backstage/backstage/commit/d908d8c): Migrated the `Auth0` auth provider to be implemented using the new `@backstage/plugin-auth-backend-module-auth0-provider` module.
- [`19ff127`](https://github.com/backstage/backstage/commit/19ff127): Internal refactor to remove dependencies on the identity and token manager services, which have been removed. Public APIs no longer require the identity service or token manager to be provided.
- [`3c2d690`](https://github.com/backstage/backstage/commit/3c2d690): Allow users without defined email to be ingested by the `msgraph` catalog plugin and add `userIdMatchingUserEntityAnnotation` sign-in resolver for the Microsoft auth provider to support sign-in for users without defined email.
- [`92118cd`](https://github.com/backstage/backstage/commit/92118cd): Updated dependency `@node-saml/passport-saml` to `^5.0.0`.
- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

#### 0.22.10

##### Patch Changes

- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater
- [`cc9a7a5`](https://github.com/backstage/backstage/commit/cc9a7a5): Deprecated `createRouter` and its router options in favour of the new backend system.

### `@backstage/plugin-auth-backend-module-atlassian-provider` (0.2.3 → [0.3.1](../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#031))

#### 0.3.1

##### Patch Changes

- [`217458a`](https://github.com/backstage/backstage/commit/217458a): Updated configuration schema to include the new `allowedDomains` option for the `emailLocalPartMatchingUserEntityName` sign-in resolver.

#### 0.3.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

#### 0.2.4

##### Patch Changes

- [`c8f1cae`](https://github.com/backstage/backstage/commit/c8f1cae): Add `signIn` to authentication provider configuration schema

### `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.1.14 → [0.2.1](../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#021))

#### 0.2.1

##### Patch Changes

- [`217458a`](https://github.com/backstage/backstage/commit/217458a): Updated configuration schema to include the new `allowedDomains` option for the `emailLocalPartMatchingUserEntityName` sign-in resolver.
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`ecbc47e`](https://github.com/backstage/backstage/commit/ecbc47e): Fix a bug where the signer was checked from the payload instead of the header
- [`8d1fb8d`](https://github.com/backstage/backstage/commit/8d1fb8d): Throw correct error when email is missing from the claims

#### 0.1.15

##### Patch Changes

- [`c8f1cae`](https://github.com/backstage/backstage/commit/c8f1cae): Add `signIn` to authentication provider configuration schema
- [`4ea354f`](https://github.com/backstage/backstage/commit/4ea354f): Added a `signer` configuration option to validate against the token claims. We strongly recommend that you set this value (typically on the format `arn:aws:elasticloadbalancing:us-east-2:123456789012:loadbalancer/app/my-load-balancer/1234567890123456`) to ensure that the auth provider can safely check the authenticity of any incoming tokens.

  Example:

  ```diff
   auth:
     providers:
       awsalb:
         # this is the URL of the IdP you configured
         issuer: 'https://example.okta.com/oauth2/default'
         # this is the ARN of your ALB instance
  +      signer: 'arn:aws:elasticloadbalancing:us-east-2:123456789012:loadbalancer/app/my-load-balancer/1234567890123456'
         # this is the region where your ALB instance resides
         region: 'us-west-2'
         signIn:
           resolvers:
             # typically you would pick one of these
             - resolver: emailMatchingUserEntityProfileEmail
             - resolver: emailLocalPartMatchingUserEntityName
  ```

- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater

### `@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.1.5 → [0.2.1](../changelogs/@backstage/plugin-auth-backend-module-azure-easyauth-provider.md#021))

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

### `@backstage/plugin-auth-backend-module-bitbucket-provider` (0.1.5 → [0.2.1](../changelogs/@backstage/plugin-auth-backend-module-bitbucket-provider.md#021))

#### 0.2.1

##### Patch Changes

- [`217458a`](https://github.com/backstage/backstage/commit/217458a): Updated configuration schema to include the new `allowedDomains` option for the `emailLocalPartMatchingUserEntityName` sign-in resolver.

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

#### 0.1.6

##### Patch Changes

- [`c8f1cae`](https://github.com/backstage/backstage/commit/c8f1cae): Add `signIn` to authentication provider configuration schema

### `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.1.5 → [0.3.1](../changelogs/@backstage/plugin-auth-backend-module-cloudflare-access-provider.md#031))

#### 0.3.1

##### Patch Changes

- [`217458a`](https://github.com/backstage/backstage/commit/217458a): Updated configuration schema to include the new `allowedDomains` option for the `emailLocalPartMatchingUserEntityName` sign-in resolver.

#### 0.3.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

#### 0.2.0

##### Minor Changes

- [`75d026a`](https://github.com/backstage/backstage/commit/75d026a): Support for Cloudflare Custom Headers and Custom Cookie Auth Name

##### Patch Changes

- [`c8f1cae`](https://github.com/backstage/backstage/commit/c8f1cae): Add `signIn` to authentication provider configuration schema
- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater

### `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.2.17 → [0.3.1](../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#031))

#### 0.3.1

##### Patch Changes

- [`217458a`](https://github.com/backstage/backstage/commit/217458a): Updated configuration schema to include the new `allowedDomains` option for the `emailLocalPartMatchingUserEntityName` sign-in resolver.

#### 0.3.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

#### 0.2.18

##### Patch Changes

- [`c8f1cae`](https://github.com/backstage/backstage/commit/c8f1cae): Add `signIn` to authentication provider configuration schema
- [`13a9c63`](https://github.com/backstage/backstage/commit/13a9c63): Corrected the documentation for the GCP IAP auth module and updated the configuration to follow proxy configuration conventions by ignoring authEnv

### `@backstage/plugin-auth-backend-module-github-provider` (0.1.19 → [0.2.1](../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#021))

#### 0.2.1

##### Patch Changes

- [`217458a`](https://github.com/backstage/backstage/commit/217458a): Updated configuration schema to include the new `allowedDomains` option for the `emailLocalPartMatchingUserEntityName` sign-in resolver.

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

#### 0.1.20

##### Patch Changes

- [`c8f1cae`](https://github.com/backstage/backstage/commit/c8f1cae): Add `signIn` to authentication provider configuration schema

### `@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.19 → [0.2.1](../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#021))

#### 0.2.1

##### Patch Changes

- [`217458a`](https://github.com/backstage/backstage/commit/217458a): Updated configuration schema to include the new `allowedDomains` option for the `emailLocalPartMatchingUserEntityName` sign-in resolver.

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

#### 0.1.20

##### Patch Changes

- [`c8f1cae`](https://github.com/backstage/backstage/commit/c8f1cae): Add `signIn` to authentication provider configuration schema

### `@backstage/plugin-auth-backend-module-google-provider` (0.1.19 → [0.2.1](../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#021))

#### 0.2.1

##### Patch Changes

- [`217458a`](https://github.com/backstage/backstage/commit/217458a): Updated configuration schema to include the new `allowedDomains` option for the `emailLocalPartMatchingUserEntityName` sign-in resolver.

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

#### 0.1.20

##### Patch Changes

- [`c8f1cae`](https://github.com/backstage/backstage/commit/c8f1cae): Add `signIn` to authentication provider configuration schema

### `@backstage/plugin-auth-backend-module-guest-provider` (0.1.8 → [0.2.1](../changelogs/@backstage/plugin-auth-backend-module-guest-provider.md#021))

#### 0.2.1

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`339c67d`](https://github.com/backstage/backstage/commit/339c67d): This provider will now reject authentication attempts rather than halt backend startup when `dangerouslyAllowOutsideDevelopment` is not set in production.

### `@backstage/plugin-auth-backend-module-microsoft-provider` (0.1.17 → [0.2.1](../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#021))

#### 0.2.1

##### Patch Changes

- [`217458a`](https://github.com/backstage/backstage/commit/217458a): Updated configuration schema to include the new `allowedDomains` option for the `emailLocalPartMatchingUserEntityName` sign-in resolver.
- [`daa02d6`](https://github.com/backstage/backstage/commit/daa02d6): Add `skipUserProfile` config flag to Microsoft authenticator

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`3c2d690`](https://github.com/backstage/backstage/commit/3c2d690): Allow users without defined email to be ingested by the `msgraph` catalog plugin and add `userIdMatchingUserEntityAnnotation` sign-in resolver for the Microsoft auth provider to support sign-in for users without defined email.
- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

#### 0.1.18

##### Patch Changes

- [`c8f1cae`](https://github.com/backstage/backstage/commit/c8f1cae): Add `signIn` to authentication provider configuration schema
- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater
- [`39f36a9`](https://github.com/backstage/backstage/commit/39f36a9): Updated the Microsoft authenticator to accurately define required scopes, but to also omit the required and additional scopes when requesting resource scopes.

### `@backstage/plugin-auth-backend-module-oauth2-provider` (0.2.3 → [0.3.1](../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#031))

#### 0.3.1

##### Patch Changes

- [`217458a`](https://github.com/backstage/backstage/commit/217458a): Updated configuration schema to include the new `allowedDomains` option for the `emailLocalPartMatchingUserEntityName` sign-in resolver.

#### 0.3.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

#### 0.2.4

##### Patch Changes

- [`c8f1cae`](https://github.com/backstage/backstage/commit/c8f1cae): Add `signIn` to authentication provider configuration schema

### `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.1.15 → [0.2.1](../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#021))

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

### `@backstage/plugin-auth-backend-module-oidc-provider` (0.2.3 → [0.3.1](../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#031))

#### 0.3.1

##### Patch Changes

- [`217458a`](https://github.com/backstage/backstage/commit/217458a): Updated configuration schema to include the new `allowedDomains` option for the `emailLocalPartMatchingUserEntityName` sign-in resolver.
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

#### 0.3.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

#### 0.2.4

##### Patch Changes

- [`c8f1cae`](https://github.com/backstage/backstage/commit/c8f1cae): Add `signIn` to authentication provider configuration schema

### `@backstage/plugin-auth-backend-module-okta-provider` (0.0.15 → [0.1.1](../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#011))

#### 0.1.1

##### Patch Changes

- [`217458a`](https://github.com/backstage/backstage/commit/217458a): Updated configuration schema to include the new `allowedDomains` option for the `emailLocalPartMatchingUserEntityName` sign-in resolver.

#### 0.1.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

#### 0.0.16

##### Patch Changes

- [`c8f1cae`](https://github.com/backstage/backstage/commit/c8f1cae): Add `signIn` to authentication provider configuration schema

### `@backstage/plugin-auth-backend-module-onelogin-provider` (0.1.3 → [0.2.1](../changelogs/@backstage/plugin-auth-backend-module-onelogin-provider.md#021))

#### 0.2.1

##### Patch Changes

- [`217458a`](https://github.com/backstage/backstage/commit/217458a): Updated configuration schema to include the new `allowedDomains` option for the `emailLocalPartMatchingUserEntityName` sign-in resolver.

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

#### 0.1.4

##### Patch Changes

- [`c8f1cae`](https://github.com/backstage/backstage/commit/c8f1cae): Add `signIn` to authentication provider configuration schema

### `@backstage/plugin-auth-backend-module-pinniped-provider` (0.1.16 → [0.2.1](../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#021))

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

### `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.2.3 → [0.4.0](../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#040))

#### 0.4.0

##### Minor Changes

- [`d0edfec`](https://github.com/backstage/backstage/commit/d0edfec): **BREAKING**: The `profileEmailMatchingUserEntityEmail` sign-in resolver has been removed as it was using an insecure fallback for resolving user identities. See https://backstage.io/docs/auth/identity-resolver#sign-in-without-users-in-the-catalog for how to create a custom sign-in resolver if needed as a replacement.

##### Patch Changes

- [`217458a`](https://github.com/backstage/backstage/commit/217458a): Updated configuration schema to include the new `allowedDomains` option for the `emailLocalPartMatchingUserEntityName` sign-in resolver.

#### 0.3.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

#### 0.2.4

##### Patch Changes

- [`c8f1cae`](https://github.com/backstage/backstage/commit/c8f1cae): Add `signIn` to authentication provider configuration schema

### `@backstage/plugin-auth-node` (0.4.17 → [0.5.3](../changelogs/@backstage/plugin-auth-node.md#053))

#### 0.5.3

##### Patch Changes

- [`217458a`](https://github.com/backstage/backstage/commit/217458a): Added a new `allowedDomains` option for the common `emailLocalPartMatchingUserEntityName` sign-in resolver.
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`e4ad29a`](https://github.com/backstage/backstage/commit/e4ad29a): Fix authentication error handling using redirect flow via `enableExperimentalRedirectFlow` config. If an error is caught during authentication, the user is redirected back to app origin with `error` query parameter containing the error message.

#### 0.5.2

##### Patch Changes

- [`c46eb0f`](https://github.com/backstage/backstage/commit/c46eb0f): Extend the "unable to resolve user identity" message
- [`d908d8c`](https://github.com/backstage/backstage/commit/d908d8c): Accepts an optional options object in the `PassportOAuthAuthenticatorHelper.authenticate` method.
- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.
- [`6f409b7`](https://github.com/backstage/backstage/commit/6f409b7): The `emailMatchingUserEntityProfileEmail` sign-in resolver will now also try matching emails with plus addressing removed.

#### 0.5.0

##### Minor Changes

- [`579afd0`](https://github.com/backstage/backstage/commit/579afd0): **BREAKING**: Sign-in resolvers configured via `.signIn.resolvers` now take precedence over sign-in resolvers passed to `signInResolver` option of `createOAuthProviderFactory`. This effectively makes sign-in resolvers passed via the `signInResolver` the default one, which you can then override through configuration.

##### Patch Changes

- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater

### `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.2.5 → [0.4.1](../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#041))

#### 0.4.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

#### 0.3.0

##### Minor Changes

- [`fc24d9e`](https://github.com/backstage/backstage/commit/fc24d9e): Stop using `@backstage/backend-tasks` as it will be deleted in near future.

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.2.9 → [0.4.1](../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#041))

#### 0.4.0

##### Minor Changes

- [`6343c8d`](https://github.com/backstage/backstage/commit/6343c8d): Fixes the event-based updates at `BitbucketCloudEntityProvider`.

  Previously, this entity provider had optional event support for legacy backends
  that could be enabled by passing `catalogApi`, `events`, and `tokenManager`.

  For the new/current backend system, the `catalogModuleBitbucketCloudEntityProvider`
  (`catalog.bitbucket-cloud-entity-provider`), event support was enabled by default.

  A recent change removed `tokenManager` as a dependency from the module as well as removed it as input.
  While this didn't break the instantiation of the module, it broke the event-based updates,
  and led to a runtime misbehavior, accompanied by an info log message.

  This change will replace the use of `tokenManager` with the use of `auth` (`AuthService`).

  Additionally, to simplify, it will make `catalogApi` and `events` required dependencies.
  For the current backend system, this change is transparent and doesn't require any action.
  For the legacy backend system, this change will require you to pass those dependencies
  if you didn't do it already.

  BREAKING CHANGES:

  _(For legacy backend users only.)_

  Previously optional `catalogApi`, and `events` are required now.
  A new required dependency `auth` was added.

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

#### 0.3.2

##### Patch Changes

- [`19ff127`](https://github.com/backstage/backstage/commit/19ff127): Internal refactor to remove dependencies on the identity and token manager services, which have been removed. Public APIs no longer require the identity service or token manager to be provided.
- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.

#### 0.3.0

##### Minor Changes

- [`fc24d9e`](https://github.com/backstage/backstage/commit/fc24d9e): Stop using `@backstage/backend-tasks` as it will be deleted in near future.

### `@backstage/plugin-catalog-backend-module-gcp` (0.1.23 → [0.3.1](../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#031))

#### 0.3.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

#### 0.2.0

##### Minor Changes

- [`fc24d9e`](https://github.com/backstage/backstage/commit/fc24d9e): Stop using `@backstage/backend-tasks` as it will be deleted in near future.

##### Patch Changes

- [`9342ac8`](https://github.com/backstage/backstage/commit/9342ac8): Removed unused dependency

### `@backstage/plugin-catalog-backend-module-github-org` (0.1.17 → [0.3.3](../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#033))

#### 0.3.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

#### 0.2.0

##### Minor Changes

- [`fc24d9e`](https://github.com/backstage/backstage/commit/fc24d9e): Stop using `@backstage/backend-tasks` as it will be deleted in near future.

##### Patch Changes

- [`9342ac8`](https://github.com/backstage/backstage/commit/9342ac8): Removed unused dependency

### `@backstage/plugin-catalog-backend-module-gitlab-org` (0.0.5 → [0.2.2](../changelogs/@backstage/plugin-catalog-backend-module-gitlab-org.md#022))

#### 0.2.1

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

#### 0.1.0

##### Minor Changes

- [`fc24d9e`](https://github.com/backstage/backstage/commit/fc24d9e): Stop using `@backstage/backend-tasks` as it will be deleted in near future.

### `@backstage/plugin-catalog-backend-module-ldap` (0.7.0 → [0.9.1](../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#091))

#### 0.9.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`b50e4a8`](https://github.com/backstage/backstage/commit/b50e4a8): Add support for optional configuration of `dnAttributeName` and `uuidAttributeName` in LDAP vendor

#### 0.8.0

##### Minor Changes

- [`fc24d9e`](https://github.com/backstage/backstage/commit/fc24d9e): Stop using `@backstage/backend-tasks` as it will be deleted in near future.

### `@backstage/plugin-catalog-backend-module-logs` (0.0.1 → [0.1.3](../changelogs/@backstage/plugin-catalog-backend-module-logs.md#013))

#### 0.1.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

### `@backstage/plugin-catalog-backend-module-openapi` (0.1.40 → [0.2.3](../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#023))

#### 0.2.2

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

#### 0.1.41

##### Patch Changes

- [`389f5a4`](https://github.com/backstage/backstage/commit/389f5a4): Update deprecated url-reader-related imports.

### `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.20 → [0.2.1](../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#021))

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.4.9 → [0.5.1](../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#051))

#### 0.5.1

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

#### 0.5.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

### `@backstage/plugin-devtools-backend` (0.3.8 → [0.4.1](../changelogs/@backstage/plugin-devtools-backend.md#041))

#### 0.4.1

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

#### 0.4.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`5d1670f`](https://github.com/backstage/backstage/commit/5d1670f): Update README installation instructions
- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

#### 0.3.9

##### Patch Changes

- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater
- [`32a38e1`](https://github.com/backstage/backstage/commit/32a38e1): Removed unused code for lockfile analysis.
- [`2886ef7`](https://github.com/backstage/backstage/commit/2886ef7): Deprecated `createRouter` and its router options in favour of the new backend system.

### `@backstage/plugin-events-node` (0.3.8 → [0.4.4](../changelogs/@backstage/plugin-events-node.md#044))

#### 0.4.1

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`2f88f88`](https://github.com/backstage/backstage/commit/2f88f88): Updated backend installation instructions.
- [`a90ce4a`](https://github.com/backstage/backstage/commit/a90ce4a): The default implementation of the `EventsService` now uses the new event bus for distributing events across multiple backend instances if the events backend plugin is installed.

#### 0.4.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

### `@backstage/plugin-home` (0.7.8 → [0.8.0](../changelogs/@backstage/plugin-home.md#080))

#### 0.8.0

##### Minor Changes

- [`9893bb5`](https://github.com/backstage/backstage/commit/9893bb5): **BREAKING** Implement usage of unused `limit` query parameter in visits API `.list()` function

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`e698470`](https://github.com/backstage/backstage/commit/e698470): Updated dependency `@rjsf/utils` to `5.21.2`.
  Updated dependency `@rjsf/core` to `5.21.2`.
  Updated dependency `@rjsf/material-ui` to `5.21.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.21.2`.

#### 0.7.10

##### Patch Changes

- [`c891b69`](https://github.com/backstage/backstage/commit/c891b69): Add `FavoriteToggle` in `core-components` to standardise favorite marking
- [`fec8b57`](https://github.com/backstage/backstage/commit/fec8b57): Updated exports to use the new type parameters for extensions and extension blueprints.
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.
- [`0a50d44`](https://github.com/backstage/backstage/commit/0a50d44): Updated dependency `@rjsf/utils` to `5.21.1`.
  Updated dependency `@rjsf/core` to `5.21.1`.
  Updated dependency `@rjsf/material-ui` to `5.21.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.21.1`.
- [`fa9d8da`](https://github.com/backstage/backstage/commit/fa9d8da): Updated dependency `@rjsf/utils` to `5.20.1`.
  Updated dependency `@rjsf/core` to `5.20.1`.
  Updated dependency `@rjsf/material-ui` to `5.20.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.20.1`.
- [`a159180`](https://github.com/backstage/backstage/commit/a159180): Added missing items to `overridableComponents`

#### 0.7.9

##### Patch Changes

- [`31bfc44`](https://github.com/backstage/backstage/commit/31bfc44): Updated alpha definitions of extension data references.
- [`fe1fbb2`](https://github.com/backstage/backstage/commit/fe1fbb2): Migrating usages of the deprecated `createExtension` `v1` format to the newer `v2` format, and old `create*Extension` extension creators to blueprints.
- [`fdcc059`](https://github.com/backstage/backstage/commit/fdcc059): Fixed a bug on the WelcomeTitle component where the welcome message wasn't correct when the language was set to Spanish

### `@backstage/plugin-notifications-backend` (0.3.3 → [0.4.2](../changelogs/@backstage/plugin-notifications-backend.md#042))

#### 0.4.1

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

#### 0.4.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`1c6f142`](https://github.com/backstage/backstage/commit/1c6f142): Internal refactor to avoid use of insecure coding patterns.
- [`4a53dd0`](https://github.com/backstage/backstage/commit/4a53dd0): Implement icon in backend and show icon in table if available.
- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.
- [`f195972`](https://github.com/backstage/backstage/commit/f195972): Validate notification link when new notification is created
- [`5edd344`](https://github.com/backstage/backstage/commit/5edd344): Refactor to use injected catalog client in the new backend system

#### 0.3.4

##### Patch Changes

- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater
- [`d55b8e3`](https://github.com/backstage/backstage/commit/d55b8e3): Avoid sending broadcast emails as a fallback in case the entity-typed notification user can not be resolved.
- [`8013044`](https://github.com/backstage/backstage/commit/8013044): fix: consider broadcast union with user
- [`7a05f50`](https://github.com/backstage/backstage/commit/7a05f50): Allow using notifications without users in the catalog

### `@backstage/plugin-notifications-backend-module-email` (0.1.3 → [0.3.2](../changelogs/@backstage/plugin-notifications-backend-module-email.md#032))

#### 0.3.1

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

#### 0.3.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`5edd344`](https://github.com/backstage/backstage/commit/5edd344): Refactor to use injected catalog client in the new backend system

#### 0.2.0

##### Minor Changes

- [`def53a7`](https://github.com/backstage/backstage/commit/def53a7): **BREAKING** Following `NotificationTemplateRenderer` methods now return a Promise and **must** be awaited: `getSubject`, `getText` and `getHtml`.

  Required changes and example usage:

  ```diff
  import { notificationsEmailTemplateExtensionPoint } from '@backstage/plugin-notifications-backend-module-email';
  import { Notification } from '@backstage/plugin-notifications-common';
  +import { getNotificationSubject, getNotificationTextContent, getNotificationHtmlContent } from 'my-notification-processing-library`
  export const notificationsModuleEmailDecorator = createBackendModule({
    pluginId: 'notifications',
    moduleId: 'email.templates',
    register(reg) {
      reg.registerInit({
        deps: {
          emailTemplates: notificationsEmailTemplateExtensionPoint,
        },
        async init({ emailTemplates }) {
          emailTemplates.setTemplateRenderer({
  -          getSubject(notification) {
  +          async getSubject(notification) {
  -            return `New notification from ${notification.source}`;
  +            const subject = await getNotificationSubject(notification);
  +            return `New notification from ${subject}`;
            },
  -          getText(notification) {
  +          async getText(notification) {
  -            return notification.content;
  +            const text = await getNotificationTextContent(notification);
  +            return text;
            },
  -          getHtml(notification) {
  +          async getHtml(notification) {
  -            return `<p>${notification.content}</p>`;
  +            const html = await getNotificationHtmlContent(notification);
  +            return html;
            },
          });
        },
      });
    },
  });
  ```

##### Patch Changes

- [`d55b8e3`](https://github.com/backstage/backstage/commit/d55b8e3): Avoid sending broadcast emails as a fallback in case the entity-typed notification user can not be resolved.
- [`cdb630d`](https://github.com/backstage/backstage/commit/cdb630d): Add support for stream transport for debugging purposes
- [`83faf24`](https://github.com/backstage/backstage/commit/83faf24): Notification email processor supports allowing or denying specific email addresses from receiving notifications

### `@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.19 → [0.2.1](../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#021))

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

### `@backstage/plugin-permission-node` (0.8.0 → [0.8.4](../changelogs/@backstage/plugin-permission-node.md#084))

#### 0.8.4

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

#### 0.8.3

##### Patch Changes

- [`19ff127`](https://github.com/backstage/backstage/commit/19ff127): Internal refactor to remove dependencies on the identity and token manager services, which have been removed. Public APIs no longer require the identity service or token manager to be provided.
- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

#### 0.8.1

##### Patch Changes

- [`df784fe`](https://github.com/backstage/backstage/commit/df784fe): The MetadataResponse type has been moved to @backstage/plugin-permission-common
  to match the recent move of MetadataResponseSerializedRule, and should be
  imported from there going forward. To avoid an immediate breaking change, this
  type is still re-exported from this package, but is marked as deprecated and
  will be removed in a future release.
- [`5cd9878`](https://github.com/backstage/backstage/commit/5cd9878): The MetadataResponseSerializedRule type has been moved to @backstage/plugin-permission-common, and should be imported from there going forward. To avoid an immediate breaking change, this type is still re-exported from this package, but is marked as deprecated and will be removed in a future release.

### `@backstage/plugin-scaffolder-backend-module-azure` (0.1.14 → [0.2.2](../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#022))

#### 0.2.1

##### Patch Changes

- [`b06aa48`](https://github.com/backstage/backstage/commit/b06aa48): Updated dependency `azure-devops-node-api` to `^14.0.0`.

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`59d8da4`](https://github.com/backstage/backstage/commit/59d8da4): Publish Azure action now uses basic authentication to authenticate to Git when Azure integration is configured to use App Registration/Service Account or Managed Identity.

#### 0.1.15

##### Patch Changes

- [`187f583`](https://github.com/backstage/backstage/commit/187f583): Added examples for publish:azure action and updated its test cases

### `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.2.12 → [0.3.2](../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket.md#032))

#### 0.3.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

#### 0.2.13

##### Patch Changes

- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater

### `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.1.12 → [0.2.2](../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#022))

#### 0.2.2

##### Patch Changes

- [`9cf827c`](https://github.com/backstage/backstage/commit/9cf827c): Fix double branch creation in `public:bitbucket{Cloud,Server}:pull-request`
  This resulted in the following error when using the actions:

  ```
  AlreadyExistsError: Failed to create branch at create-test because it already exists.
  ```

  The issue was original introduced in d103a48fa306d745599dc0c793668c9e6a479d32

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`df9ae9e`](https://github.com/backstage/backstage/commit/df9ae9e): Added scaffolder action publish:bitbucketCloud:pull-request

#### 0.1.13

##### Patch Changes

- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater
- [`3fca643`](https://github.com/backstage/backstage/commit/3fca643): Added autocompletion support for resource `branches`
- [`d57967c`](https://github.com/backstage/backstage/commit/d57967c): Add ability to set the initial commit message when initializing a repository using the scaffolder action.

### `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.1.12 → [0.2.2](../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#022))

#### 0.2.2

##### Patch Changes

- [`9cf827c`](https://github.com/backstage/backstage/commit/9cf827c): Fix double branch creation in `public:bitbucket{Cloud,Server}:pull-request`
  This resulted in the following error when using the actions:

  ```
  AlreadyExistsError: Failed to create branch at create-test because it already exists.
  ```

  The issue was original introduced in d103a48fa306d745599dc0c793668c9e6a479d32

#### 0.2.1

##### Patch Changes

- [`db54c57`](https://github.com/backstage/backstage/commit/db54c57): Add `reviewers` input parameter to `publish:bitbucketServer:pull-request`
- [`66a6b45`](https://github.com/backstage/backstage/commit/66a6b45): Use protocol from Bitbucket Server apiBaseUrl config parameter instead of hard-coded https

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

#### 0.1.13

##### Patch Changes

- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater
- [`e3b64be`](https://github.com/backstage/backstage/commit/e3b64be): Added examples for publish:bitbucketServer action and improve its test cases

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.23 → [0.3.2](../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#032))

#### 0.3.1

##### Patch Changes

- [`bc71718`](https://github.com/backstage/backstage/commit/bc71718): Updated installation instructions in README to not include `/alpha`.
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`720a2f9`](https://github.com/backstage/backstage/commit/720a2f9): Updated dependency `git-url-parse` to `^15.0.0`.

#### 0.3.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`5d1670f`](https://github.com/backstage/backstage/commit/5d1670f): Update README installation instructions

#### 0.2.24

##### Patch Changes

- [`389f5a4`](https://github.com/backstage/backstage/commit/389f5a4): Update deprecated url-reader-related imports.
- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.46 → [0.3.3](../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#033))

#### 0.3.1

##### Patch Changes

- [`bc71718`](https://github.com/backstage/backstage/commit/bc71718): Updated installation instructions in README to not include `/alpha`.
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

#### 0.3.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`5d1670f`](https://github.com/backstage/backstage/commit/5d1670f): Update README installation instructions

#### 0.2.47

##### Patch Changes

- [`389f5a4`](https://github.com/backstage/backstage/commit/389f5a4): Update deprecated url-reader-related imports.
- [`dae85df`](https://github.com/backstage/backstage/commit/dae85df): Add examples for `fetch:cookiecutter` scaffolder action & improve related tests

### `@backstage/plugin-scaffolder-backend-module-gcp` (0.1.0 → [0.2.2](../changelogs/@backstage/plugin-scaffolder-backend-module-gcp.md#022))

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

### `@backstage/plugin-scaffolder-backend-module-gerrit` (0.1.14 → [0.2.2](../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#022))

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`9e5923d`](https://github.com/backstage/backstage/commit/9e5923d): Added test cases for publish:gerrit action examples

#### 0.1.15

##### Patch Changes

- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater

### `@backstage/plugin-scaffolder-backend-module-gitea` (0.1.12 → [0.2.2](../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#022))

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

#### 0.1.13

##### Patch Changes

- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater
- [`24de005`](https://github.com/backstage/backstage/commit/24de005): Added test cases for publish:gitea examples

### `@backstage/plugin-scaffolder-backend-module-github` (0.4.0 → [0.5.2](../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#052))

#### 0.5.1

##### Patch Changes

- [`8ce0c4c`](https://github.com/backstage/backstage/commit/8ce0c4c): Add `github:branch-protection:create` scaffolder action to set branch protection on an existing repository. Example usage:

  ```yaml
  - id: set-branch-protection
    name: Set Branch Protection
    action: github:branch-protection:create
    input:
      repoUrl: 'github.com?repo=backstage&owner=backstage'
      branch: master
      enforceAdmins: true # default
      requiredApprovingReviewCount: 1 # default
      requireBranchesToBeUpToDate: true # default
      requireCodeOwnerReviews: true
      dismissStaleReviews: true
      requiredConversationResolution: true
  ```

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

#### 0.5.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`22a19e6`](https://github.com/backstage/backstage/commit/22a19e6): Added the ability for the actions `publish:github` and `github:repo:create` to take inputs for 'custom properties' for organization repositories.
- [`162cdf4`](https://github.com/backstage/backstage/commit/162cdf4): Update dependency @octokit/webhooks to 10.9.2 due to SNYK-JS-OCTOKITWEBHOOKS-6129527
- [`7976081`](https://github.com/backstage/backstage/commit/7976081): Added support for all request parameters in the Github create/update environment API in the Github environment create scaffolder action.

  Disable MultiEntityPicker when `maxItems` limit is reached defined in `JSONSchema`

#### 0.4.1

##### Patch Changes

- [`d21d307`](https://github.com/backstage/backstage/commit/d21d307): Added examples for github:environment:create action and improve its test cases
- [`6d4cb97`](https://github.com/backstage/backstage/commit/6d4cb97): Added examples for github:repo:create action and improved test cases
- [`cd203f1`](https://github.com/backstage/backstage/commit/cd203f1): Added examples for action github:pages and improved its test cases

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.4.4 → [0.6.1](../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#061))

#### 0.6.1

##### Patch Changes

- [`cdc8b4c`](https://github.com/backstage/backstage/commit/cdc8b4c): Improve error messages from Gitlab
- [`2dbdccb`](https://github.com/backstage/backstage/commit/2dbdccb): Removed circular import

#### 0.6.0

##### Minor Changes

- [`73f2ccf`](https://github.com/backstage/backstage/commit/73f2ccf): declare correct type (number) for publish:gitlab output.projectId

##### Patch Changes

- [`9adfe46`](https://github.com/backstage/backstage/commit/9adfe46): GitLab MR: introduce 'skip' commit action.
- [`bc71718`](https://github.com/backstage/backstage/commit/bc71718): Updated installation instructions in README to not include `/alpha`.
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`f2f68cf`](https://github.com/backstage/backstage/commit/f2f68cf): Updated `gitlab:group:ensureExists` action to instead use oauth client.

#### 0.5.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`5d1670f`](https://github.com/backstage/backstage/commit/5d1670f): Update README installation instructions

#### 0.4.5

##### Patch Changes

- [`da97131`](https://github.com/backstage/backstage/commit/da97131): Added test cases for gitlab:issues:create examples
- [`fad1b90`](https://github.com/backstage/backstage/commit/fad1b90): Allow the `createGitlabProjectVariableAction` to use oauth tokens
- [`aab708e`](https://github.com/backstage/backstage/commit/aab708e): Added test cases for gitlab:issue:edit examples
- [`ef742dc`](https://github.com/backstage/backstage/commit/ef742dc): Added test cases for gitlab:projectAccessToken:create example
- [`1ba4c2f`](https://github.com/backstage/backstage/commit/1ba4c2f): Added test cases for gitlab:pipeline:trigger examples
- [`a6603e4`](https://github.com/backstage/backstage/commit/a6603e4): Add custom action for merge request: **auto**

  The **Auto** action selects the committed action between _create_ and _update_.

  The **Auto** action fetches files using the **/projects/repository/tree endpoint**.
  After fetching, it checks if the file exists locally and in the repository. If it does, it chooses **update**; otherwise, it chooses **create**.

### `@backstage/plugin-scaffolder-backend-module-notifications` (0.0.5 → [0.1.3](../changelogs/@backstage/plugin-scaffolder-backend-module-notifications.md#013))

#### 0.1.3

##### Patch Changes

- [`5d74716`](https://github.com/backstage/backstage/commit/5d74716): Remove unused backend-common dependency

#### 0.1.1

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

#### 0.1.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

#### 0.0.6

##### Patch Changes

- [`6fc03c7`](https://github.com/backstage/backstage/commit/6fc03c7): Add examples for notification:send scaffolder action & improve related tests

### `@backstage/plugin-scaffolder-backend-module-rails` (0.4.39 → [0.5.2](../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#052))

#### 0.5.2

##### Patch Changes

- [`702f41d`](https://github.com/backstage/backstage/commit/702f41d): Bumped dev dependencies `@types/node`

#### 0.5.1

##### Patch Changes

- [`bc71718`](https://github.com/backstage/backstage/commit/bc71718): Updated installation instructions in README to not include `/alpha`.
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

#### 0.5.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`5d1670f`](https://github.com/backstage/backstage/commit/5d1670f): Update README installation instructions

#### 0.4.40

##### Patch Changes

- [`389f5a4`](https://github.com/backstage/backstage/commit/389f5a4): Update deprecated url-reader-related imports.
- [`449def7`](https://github.com/backstage/backstage/commit/449def7): Add examples for fetch:rails scaffolder action & improve related tests

### `@backstage/plugin-scaffolder-backend-module-sentry` (0.1.30 → [0.2.2](../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#022))

#### 0.2.1

##### Patch Changes

- [`bc71718`](https://github.com/backstage/backstage/commit/bc71718): Updated installation instructions in README to not include `/alpha`.

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`5d1670f`](https://github.com/backstage/backstage/commit/5d1670f): Update README installation instructions

#### 0.1.31

##### Patch Changes

- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater
- [`382e868`](https://github.com/backstage/backstage/commit/382e868): Added test cases for sentry:project:create examples

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.3.6 → [0.4.3](../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#043))

#### 0.4.3

##### Patch Changes

- [`5d74716`](https://github.com/backstage/backstage/commit/5d74716): Remove unused backend-common dependency

#### 0.4.1

##### Patch Changes

- [`bc71718`](https://github.com/backstage/backstage/commit/bc71718): Updated installation instructions in README to not include `/alpha`.
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

#### 0.4.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`5d1670f`](https://github.com/backstage/backstage/commit/5d1670f): Update README installation instructions

### `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.1.15 → [0.3.2](../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#032))

#### 0.3.1

##### Patch Changes

- [`bc71718`](https://github.com/backstage/backstage/commit/bc71718): Updated installation instructions in README to not include `/alpha`.
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

#### 0.3.0

##### Minor Changes

- [`479808f`](https://github.com/backstage/backstage/commit/479808f): Always set default request parameters for requests to stackoverflow while allow to overwrite them. Remove site parameter as causing the request to fail.
- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

#### 0.2.0

##### Minor Changes

- [`fc24d9e`](https://github.com/backstage/backstage/commit/fc24d9e): Stop using `@backstage/backend-tasks` as it will be deleted in near future.

##### Patch Changes

- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater

### `@backstage/plugin-signals-backend` (0.1.8 → [0.2.2](../changelogs/@backstage/plugin-signals-backend.md#022))

#### 0.2.1

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`a0f1f0d`](https://github.com/backstage/backstage/commit/a0f1f0d): Bump the `ws` library
- [`3ec5ccb`](https://github.com/backstage/backstage/commit/3ec5ccb): The `createRouter` and its related types has been marked as deprecared. This backend should instead be initialized using the new backend system.
- [`19ff127`](https://github.com/backstage/backstage/commit/19ff127): Internal refactor to remove dependencies on the identity and token manager services, which have been removed. Public APIs no longer require the identity service or token manager to be provided.
- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

#### 0.1.9

##### Patch Changes

- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater

## 0.x minor version bumps

### `@backstage/backend-openapi-utils` (0.1.15 → [0.2.0](../changelogs/@backstage/backend-openapi-utils.md#020))

#### 0.2.0

##### Minor Changes

- [`66af016`](https://github.com/backstage/backstage/commit/66af016): Improved support for OpenAPI validation during Jest tests. Now, OpenAPI validation can happen as you are writing your Jest tests - you no longer have to run `repo schema openapi test`.

#### 0.1.18

##### Patch Changes

- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

### `@backstage/plugin-catalog-backend-module-aws` (0.3.17 → [0.4.4](../changelogs/@backstage/plugin-catalog-backend-module-aws.md#044))

#### 0.4.3

##### Patch Changes

- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

#### 0.4.2

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.

#### 0.4.0

##### Minor Changes

- [`fc24d9e`](https://github.com/backstage/backstage/commit/fc24d9e): Stop using `@backstage/backend-tasks` as it will be deleted in near future.

##### Patch Changes

- [`ba8571e`](https://github.com/backstage/backstage/commit/ba8571e): Setup user agent header for AWS sdk clients, this enables users to better track API calls made from Backstage to AWS APIs through things like CloudTrail.
- [`9342ac8`](https://github.com/backstage/backstage/commit/9342ac8): Removed unused dependency
- [`389f5a4`](https://github.com/backstage/backstage/commit/389f5a4): Update deprecated url-reader-related imports.
- [`90a7340`](https://github.com/backstage/backstage/commit/90a7340): `AwsOrganizationCloudAccountProcessor` configuration field `roleArn` is deprecated in favor of new field `accountId`

### `@backstage/plugin-catalog-backend-module-azure` (0.1.42 → [0.2.3](../changelogs/@backstage/plugin-catalog-backend-module-azure.md#023))

#### 0.2.3

##### Patch Changes

- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

#### 0.2.2

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.

#### 0.2.0

##### Minor Changes

- [`fc24d9e`](https://github.com/backstage/backstage/commit/fc24d9e): Stop using `@backstage/backend-tasks` as it will be deleted in near future.

##### Patch Changes

- [`9342ac8`](https://github.com/backstage/backstage/commit/9342ac8): Removed unused dependency
- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.36 → [0.2.3](../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#023))

#### 0.2.3

##### Patch Changes

- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

#### 0.2.2

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.

#### 0.2.0

##### Minor Changes

- [`fc24d9e`](https://github.com/backstage/backstage/commit/fc24d9e): Stop using `@backstage/backend-tasks` as it will be deleted in near future.

##### Patch Changes

- [`9342ac8`](https://github.com/backstage/backstage/commit/9342ac8): Removed unused dependency
- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater

### `@backstage/plugin-catalog-backend-module-gerrit` (0.1.39 → [0.2.3](../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#023))

#### 0.2.3

##### Patch Changes

- [`5b6edf1`](https://github.com/backstage/backstage/commit/5b6edf1): Fixed an issue preventing the provider's `schedule` config from being applied."
- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

#### 0.2.2

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.

#### 0.2.0

##### Minor Changes

- [`fc24d9e`](https://github.com/backstage/backstage/commit/fc24d9e): Stop using `@backstage/backend-tasks` as it will be deleted in near future.

##### Patch Changes

- [`9342ac8`](https://github.com/backstage/backstage/commit/9342ac8): Removed unused dependency
- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater

### `@backstage/plugin-catalog-backend-module-github` (0.6.5 → [0.7.6](../changelogs/@backstage/plugin-catalog-backend-module-github.md#076))

#### 0.7.5

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.
- [`720a2f9`](https://github.com/backstage/backstage/commit/720a2f9): Updated dependency `git-url-parse` to `^15.0.0`.

#### 0.7.3

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- [`5edd344`](https://github.com/backstage/backstage/commit/5edd344): Refactor to use injected catalog client in the new backend system

#### 0.7.0

##### Minor Changes

- [`fc24d9e`](https://github.com/backstage/backstage/commit/fc24d9e): Stop using `@backstage/backend-tasks` as it will be deleted in near future.

##### Patch Changes

- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater
- [`c1eb809`](https://github.com/backstage/backstage/commit/c1eb809): Fix GitHub `repository` event support.

  - `$.repository.organization` is only provided for `push` events. Switched to `$.organization.login` instead.
  - `$.repository.url` is not always returning the expected and required value. Use `$.repository.html_url` instead.

### `@backstage/plugin-catalog-backend-module-gitlab` (0.3.21 → [0.4.4](../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#044))

#### 0.4.3

##### Patch Changes

- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

#### 0.4.2

##### Patch Changes

- [`53b24d9`](https://github.com/backstage/backstage/commit/53b24d9): Internal update to use the new cache manager
- [`0476be3`](https://github.com/backstage/backstage/commit/0476be3): Add the `relations` array to allow Backstage to mirror GitLab's membership behavior, including descendant, inherited, and shared-from-group memberships.

  The previous `allowInherited` config option will be deprecated in future versions. Use the `relations` array with the `INHERITED` option instead.

  ```yaml
  catalog:
    providers:
      gitlab:
        development:
          relations:
            - INHERITED
  ```

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- [`b446954`](https://github.com/backstage/backstage/commit/b446954): Remove dependency on backend-common
- [`06cc084`](https://github.com/backstage/backstage/commit/06cc084): Added a `includeUsersWithoutSeat` config option that allow import of users without a paid seat, e.g. for Gitlab Free on SaaS. Defaults to false

#### 0.4.0

##### Minor Changes

- [`fc24d9e`](https://github.com/backstage/backstage/commit/fc24d9e): Stop using `@backstage/backend-tasks` as it will be deleted in near future.

##### Patch Changes

- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater
- [`c7b14ed`](https://github.com/backstage/backstage/commit/c7b14ed): Adds new optional `excludeRepos` configuration option to the Gitlab catalog provider.

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.27 → [0.5.6](../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#056))

#### 0.5.5

##### Patch Changes

- [`4b60e0c`](https://github.com/backstage/backstage/commit/4b60e0c): Remove extension points from `/alpha` export, they're available from the main package already
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.
- [`2107965`](https://github.com/backstage/backstage/commit/2107965): Turn down the logging level on most "all is well" type log messages

#### 0.5.3

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- [`4b28e39`](https://github.com/backstage/backstage/commit/4b28e39): Updated the README to include documentation for the new backend support

#### 0.5.0

##### Minor Changes

- [`fc24d9e`](https://github.com/backstage/backstage/commit/fc24d9e): Stop using `@backstage/backend-tasks` as it will be deleted in near future.

##### Patch Changes

- [`389f5a4`](https://github.com/backstage/backstage/commit/389f5a4): Update deprecated url-reader-related imports.

### `@backstage/plugin-catalog-backend-module-msgraph` (0.5.30 → [0.6.3](../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#063))

#### 0.6.3

##### Patch Changes

- [`4b60e0c`](https://github.com/backstage/backstage/commit/4b60e0c): Remove extension points from `/alpha` export, they're available from the main package already
- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

#### 0.6.2

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- [`3c2d690`](https://github.com/backstage/backstage/commit/3c2d690): Allow users without defined email to be ingested by the `msgraph` catalog plugin and add `userIdMatchingUserEntityAnnotation` sign-in resolver for the Microsoft auth provider to support sign-in for users without defined email.

#### 0.6.0

##### Minor Changes

- [`fc24d9e`](https://github.com/backstage/backstage/commit/fc24d9e): Stop using `@backstage/backend-tasks` as it will be deleted in near future.

##### Patch Changes

- [`9342ac8`](https://github.com/backstage/backstage/commit/9342ac8): Removed unused dependency
- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater
- [`58dff4d`](https://github.com/backstage/backstage/commit/58dff4d): Added option to ingest groups based on their group membership in Azure Entra ID

### `@backstage/plugin-catalog-backend-module-puppetdb` (0.1.28 → [0.2.3](../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#023))

#### 0.2.3

##### Patch Changes

- [`4b60e0c`](https://github.com/backstage/backstage/commit/4b60e0c): Small tweaks to API reports to make them valid

#### 0.2.2

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.

#### 0.2.0

##### Minor Changes

- [`fc24d9e`](https://github.com/backstage/backstage/commit/fc24d9e): Stop using `@backstage/backend-tasks` as it will be deleted in near future.

##### Patch Changes

- [`9342ac8`](https://github.com/backstage/backstage/commit/9342ac8): Removed unused dependency
- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater

### `@backstage/plugin-events-backend-module-aws-sqs` (0.3.8 → [0.4.4](../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#044))

#### 0.4.3

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

#### 0.4.2

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.

#### 0.4.0

##### Minor Changes

- [`fc24d9e`](https://github.com/backstage/backstage/commit/fc24d9e): Stop using `@backstage/backend-tasks` as it will be deleted in near future.

##### Patch Changes

- [`ba8571e`](https://github.com/backstage/backstage/commit/ba8571e): Setup user agent header for AWS sdk clients, this enables users to better track API calls made from Backstage to AWS APIs through things like CloudTrail.

### `@backstage/plugin-notifications` (0.2.3 → [0.3.2](../changelogs/@backstage/plugin-notifications.md#032))

#### 0.3.2

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

#### 0.3.1

##### Patch Changes

- [`653f60b`](https://github.com/backstage/backstage/commit/653f60b): Severity filter label newly contains "Min severity" to better describe range instead of exact value.
- [`4a53dd0`](https://github.com/backstage/backstage/commit/4a53dd0): Implement icon in backend and show icon in table if available.
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

#### 0.3.0

##### Minor Changes

- [`0410fc9`](https://github.com/backstage/backstage/commit/0410fc9): By default, set notification as read when opening snackbar or web notification link

##### Patch Changes

- [`80b84f7`](https://github.com/backstage/backstage/commit/80b84f7): Fixed issue with notification reloading on page change
- [`b58e452`](https://github.com/backstage/backstage/commit/b58e452): Broadcast notifications are now decorated with an icon.

### `@backstage/plugin-scaffolder-node` (0.4.8 → [0.5.1](../changelogs/@backstage/plugin-scaffolder-node.md#051))

#### 0.5.0

##### Minor Changes

- [`3ec4e6d`](https://github.com/backstage/backstage/commit/3ec4e6d): Added pagination support for listing of tasks and the ability to filter on several users and task statuses.

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`11e0752`](https://github.com/backstage/backstage/commit/11e0752): Make it possible to manually retry the scaffolder template from the step it failed
- [`d7a736c`](https://github.com/backstage/backstage/commit/d7a736c): Use `branch` function instead of `checkout` function when creating branch

#### 0.4.9

##### Patch Changes

- [`389f5a4`](https://github.com/backstage/backstage/commit/389f5a4): Update deprecated url-reader-related imports.
- [`c544f81`](https://github.com/backstage/backstage/commit/c544f81): Add support for status filtering in scaffolder tasks endpoint

### `@backstage/plugin-search-backend-module-catalog` (0.1.28 → [0.2.4](../changelogs/@backstage/plugin-search-backend-module-catalog.md#024))

#### 0.2.3

##### Patch Changes

- [`4b60e0c`](https://github.com/backstage/backstage/commit/4b60e0c): Remove extension points from `/alpha` export, they're available from the main package already
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.
- [`2f88f88`](https://github.com/backstage/backstage/commit/2f88f88): Updated backend installation instructions.

#### 0.2.2

##### Patch Changes

- [`19ff127`](https://github.com/backstage/backstage/commit/19ff127): Internal refactor to remove dependencies on the identity and token manager services, which have been removed. Public APIs no longer require the identity service or token manager to be provided.
- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- [`5726390`](https://github.com/backstage/backstage/commit/5726390): The following collator factories are deprecated, please [migrate](https://backstage.io/docs/backend-system/building-backends/migrating) to the new backend system and follow the instructions below to install collators via module:

  - `DefaultCatalogCollatorFactory`: https://github.com/backstage/backstage/blob/nbs10/search-deprecate-create-router/plugins/search-backend-module-catalog/README.md#installation;
  - `ToolDocumentCollatorFactory`: https://github.com/backstage/backstage/blob/nbs10/search-deprecate-create-router/plugins/search-backend-module-explore/README.md#installation;
  - `DefaultTechDocsCollatorFactory`: https://github.com/backstage/backstage/blob/nbs10/search-deprecate-create-router/plugins/search-backend-module-techdocs/README.md#installation.

#### 0.2.0

##### Minor Changes

- [`fc24d9e`](https://github.com/backstage/backstage/commit/fc24d9e): Stop using `@backstage/backend-tasks` as it will be deleted in near future.

### `@backstage/plugin-search-backend-module-explore` (0.1.28 → [0.2.4](../changelogs/@backstage/plugin-search-backend-module-explore.md#024))

#### 0.2.3

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.
- [`c052931`](https://github.com/backstage/backstage/commit/c052931): Updated dependency `@backstage-community/plugin-explore-common` to `^0.0.6`.
- [`2f88f88`](https://github.com/backstage/backstage/commit/2f88f88): Updated backend installation instructions.

#### 0.2.2

##### Patch Changes

- [`19ff127`](https://github.com/backstage/backstage/commit/19ff127): Internal refactor to remove dependencies on the identity and token manager services, which have been removed. Public APIs no longer require the identity service or token manager to be provided.
- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- [`5726390`](https://github.com/backstage/backstage/commit/5726390): The following collator factories are deprecated, please [migrate](https://backstage.io/docs/backend-system/building-backends/migrating) to the new backend system and follow the instructions below to install collators via module:

  - `DefaultCatalogCollatorFactory`: https://github.com/backstage/backstage/blob/nbs10/search-deprecate-create-router/plugins/search-backend-module-catalog/README.md#installation;
  - `ToolDocumentCollatorFactory`: https://github.com/backstage/backstage/blob/nbs10/search-deprecate-create-router/plugins/search-backend-module-explore/README.md#installation;
  - `DefaultTechDocsCollatorFactory`: https://github.com/backstage/backstage/blob/nbs10/search-deprecate-create-router/plugins/search-backend-module-techdocs/README.md#installation.

- [`276f433`](https://github.com/backstage/backstage/commit/276f433): Updated dependency `@backstage-community/plugin-explore-common` to `^0.0.5`.

#### 0.2.0

##### Minor Changes

- [`fc24d9e`](https://github.com/backstage/backstage/commit/fc24d9e): Stop using `@backstage/backend-tasks` as it will be deleted in near future.

##### Patch Changes

- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater
- [`93fc1a0`](https://github.com/backstage/backstage/commit/93fc1a0): Updated dependency `@backstage-community/plugin-explore-common` to `^0.0.4`.

### `@backstage/plugin-search-backend-module-techdocs` (0.1.27 → [0.3.1](../changelogs/@backstage/plugin-search-backend-module-techdocs.md#031))

#### 0.3.0

##### Minor Changes

- [`07a7fc2`](https://github.com/backstage/backstage/commit/07a7fc2): Refactor TechDocs collator, enable clients to override the mkdocs search index transformer, so that per document properties (like tags) can be added to Backstage search index.

##### Patch Changes

- [`4b60e0c`](https://github.com/backstage/backstage/commit/4b60e0c): Remove extension points from `/alpha` export, they're available from the main package already
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.
- [`2f88f88`](https://github.com/backstage/backstage/commit/2f88f88): Updated backend installation instructions.

#### 0.2.2

##### Patch Changes

- [`19ff127`](https://github.com/backstage/backstage/commit/19ff127): Internal refactor to remove dependencies on the identity and token manager services, which have been removed. Public APIs no longer require the identity service or token manager to be provided.
- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- [`5726390`](https://github.com/backstage/backstage/commit/5726390): The following collator factories are deprecated, please [migrate](https://backstage.io/docs/backend-system/building-backends/migrating) to the new backend system and follow the instructions below to install collators via module:

  - `DefaultCatalogCollatorFactory`: https://github.com/backstage/backstage/blob/nbs10/search-deprecate-create-router/plugins/search-backend-module-catalog/README.md#installation;
  - `ToolDocumentCollatorFactory`: https://github.com/backstage/backstage/blob/nbs10/search-deprecate-create-router/plugins/search-backend-module-explore/README.md#installation;
  - `DefaultTechDocsCollatorFactory`: https://github.com/backstage/backstage/blob/nbs10/search-deprecate-create-router/plugins/search-backend-module-techdocs/README.md#installation.

#### 0.2.0

##### Minor Changes

- [`fc24d9e`](https://github.com/backstage/backstage/commit/fc24d9e): Stop using `@backstage/backend-tasks` as it will be deleted in near future.

##### Patch Changes

- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater

### `@backstage/repo-tools` (0.9.4 → [0.10.0](../changelogs/@backstage/repo-tools.md#0100))

#### 0.10.0

##### Minor Changes

- [`30c2be9`](https://github.com/backstage/backstage/commit/30c2be9): Update @microsoft/api-extractor and use their api report resolution.
  Change api report format from `api-report.md` to `report.api.md`
- [`8eb3033`](https://github.com/backstage/backstage/commit/8eb3033): Adds a new command `backstage-repo-tools peer-deps` for validating your usage of peer dependencies in your plugins. It currently supports react related peer dependencies. It also has a `--fix` mode for quickly fixing any issues that it finds.

##### Patch Changes

- [`1f6706f`](https://github.com/backstage/backstage/commit/1f6706f): Properly log instructions when APIs do not match
- [`35e735b`](https://github.com/backstage/backstage/commit/35e735b): Fix issues with warnings in API reports not being checked or reported.

  Due to the recent version bump of API Extractor you may now see a lot of `ae-undocumented` warnings,
  these can be ignored using the `-o` option, for example, `backstage-repo-tools api-reports -o ae-undocumented,ae-wrong-input-file-type`.

- [`248793e`](https://github.com/backstage/backstage/commit/248793e): Updated dependency `@useoptic/optic` to `^1.0.0`.

#### 0.9.7

##### Patch Changes

- [`5c4aa2f`](https://github.com/backstage/backstage/commit/5c4aa2f): Updated dependency `@useoptic/openapi-utilities` to `^0.55.0`.
- [`1a8837e`](https://github.com/backstage/backstage/commit/1a8837e): Avoid generating API reports for packages with `backstage.inline` set.

### `@backstage/theme` (0.5.6 → [0.6.0](../changelogs/@backstage/theme.md#060))

#### 0.6.0

##### Minor Changes

- [`e77ff3d`](https://github.com/backstage/backstage/commit/e77ff3d): Adds support for custom background colors in code blocks and inline code within TechDocs.

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

#### 0.5.7

##### Patch Changes

- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

## 0.0.x patch version bumps

### `@backstage/plugin-kubernetes-cluster` (0.0.13 → [0.0.17](../changelogs/@backstage/plugin-kubernetes-cluster.md#0017))

#### 0.0.17

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`605e0bb`](https://github.com/backstage/backstage/commit/605e0bb): Updated dependency `@kubernetes-models/base` to `^5.0.0`.
- [`276cd3d`](https://github.com/backstage/backstage/commit/276cd3d): Updated dependency `@kubernetes-models/apimachinery` to `^2.0.0`.

#### 0.0.15

##### Patch Changes

- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

### `@backstage/plugin-signals` (0.0.8 → [0.0.11](../changelogs/@backstage/plugin-signals.md#0011))

#### 0.0.11

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

#### 0.0.10

##### Patch Changes

- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.
- [`5add8e1`](https://github.com/backstage/backstage/commit/5add8e1): Added a `SignalsDisplay` extension to allows the signals plugin to be installed in an app as follows:

  ```tsx
  export default app.createRoot(
    <>
      <AlertDisplay transientTimeoutMs={2500} />
      <OAuthRequestDialog />
      <SignalsDisplay />
      <AppRouter>
        <VisitListener />
        <Root>{routes}</Root>
      </AppRouter>
    </>,
  );
  ```

  With this in place you can remove the explicit installation via the `plugins` option for `createApp`.

- [`3e9b1a4`](https://github.com/backstage/backstage/commit/3e9b1a4): Put a name on the `SignalsDisplay` component extension

### `@backstage/plugin-signals-react` (0.0.4 → [0.0.6](../changelogs/@backstage/plugin-signals-react.md#006))

#### 0.0.6

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

#### 0.0.5

##### Patch Changes

- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.
- [`0389801`](https://github.com/backstage/backstage/commit/0389801): Fix for `useSignal` returning the inverse value for `isSignalsAvailable`.

## 0.x patch version bumps

### `@backstage/backend-dev-utils` (0.1.4 → [0.1.5](../changelogs/@backstage/backend-dev-utils.md#015))

#### 0.1.5

##### Patch Changes

- [`3a35172`](https://github.com/backstage/backstage/commit/3a35172): Fix `EventEmitter` memory leak in the development utilities

### `@backstage/cli-node` (0.2.7 → [0.2.9](../changelogs/@backstage/cli-node.md#029))

#### 0.2.9

##### Patch Changes

- [`fec7278`](https://github.com/backstage/backstage/commit/fec7278): Added new `lockfile.getDependencyTreeHash(name)` utility.

#### 0.2.8

##### Patch Changes

- [`0c70f43`](https://github.com/backstage/backstage/commit/0c70f43): Add definition for the new `backstage.inline` field in `package.json`.

### `@backstage/codemods` (0.1.49 → [0.1.51](../changelogs/@backstage/codemods.md#0151))

#### 0.1.51

##### Patch Changes

- [`c06b7f1`](https://github.com/backstage/backstage/commit/c06b7f1): Updated dependency `@types/jscodeshift` to `^0.12.0`.

#### 0.1.50

##### Patch Changes

- [`0894166`](https://github.com/backstage/backstage/commit/0894166): Updated dependency `jscodeshift` to `^0.16.0`.

### `@backstage/create-app` (0.5.17 → [0.5.21](../changelogs/@backstage/create-app.md#0521))

#### 0.5.21

##### Patch Changes

- [`c42c710`](https://github.com/backstage/backstage/commit/c42c710): Bumped create-app version.
- [`56a8118`](https://github.com/backstage/backstage/commit/56a8118): Bumped create-app version.
- [`a7674d6`](https://github.com/backstage/backstage/commit/a7674d6): Fixed lack of `.yarnrc.yml` in the template.
- [`ab89e45`](https://github.com/backstage/backstage/commit/ab89e45): Remove some dependencies that aren't required anymore
- [`b452088`](https://github.com/backstage/backstage/commit/b452088): Tweak `Dockerfile` to fix deprecated syntax.

#### 0.5.19

##### Patch Changes

- [`d2d2313`](https://github.com/backstage/backstage/commit/d2d2313): Add `config.d.ts` files to the list of included file in `tsconfig.json`.

  This allows ESLint to detect issues or deprecations in those files.

- [`4975e63`](https://github.com/backstage/backstage/commit/4975e63): Yarn 4 is now the default for `create-app`. Also updated `yarn dev` script to use `yarn workspaces foreach` and removed unused Lerna and Concurrently dependencies.
- [`4735881`](https://github.com/backstage/backstage/commit/4735881): Bumped create-app version.
- [`97422b0`](https://github.com/backstage/backstage/commit/97422b0): Update templates to not refer to backend-common
- [`019d9ad`](https://github.com/backstage/backstage/commit/019d9ad): Minor dockerfile syntax update
- [`e03acd8`](https://github.com/backstage/backstage/commit/e03acd8): Updated Dockerfile base image to `node:20-bookworm-slim` from `node:18-bookworm-slim`
- [`bf370c2`](https://github.com/backstage/backstage/commit/bf370c2): Remove references to the `@backstage/backend-tasks` in versions of the `create-app` package, as it has been deprecated.

#### 0.5.18

##### Patch Changes

- [`c0a705d`](https://github.com/backstage/backstage/commit/c0a705d): Added the Kubernetes plugin to `create-app`
- [`d7a0aa3`](https://github.com/backstage/backstage/commit/d7a0aa3): Bumped create-app version.
- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater
- [`6c1081c`](https://github.com/backstage/backstage/commit/6c1081c): Updated dockerfile and `app-config.production.yaml` to make it easier to get started with example data
- [`bfeba46`](https://github.com/backstage/backstage/commit/bfeba46): Included permission config and enabled it out of the box

### `@backstage/eslint-plugin` (0.1.8 → [0.1.10](../changelogs/@backstage/eslint-plugin.md#0110))

#### 0.1.10

##### Patch Changes

- [`b1c2a2d`](https://github.com/backstage/backstage/commit/b1c2a2d): Exclude `@material-ui/data-grid`
- [`63963f6`](https://github.com/backstage/backstage/commit/63963f6): Internal refactor to deal with `estree` upgrade

#### 0.1.9

##### Patch Changes

- [`08895e3`](https://github.com/backstage/backstage/commit/08895e3): Added support for linting dependencies on workspace packages with the `backstage.inline` flag.

### `@backstage/plugin-api-docs` (0.11.7 → [0.11.11](../changelogs/@backstage/plugin-api-docs.md#01111))

#### 0.11.11

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`46b5a20`](https://github.com/backstage/backstage/commit/46b5a20): Empty states updated with external link icon for learn more links

#### 0.11.9

##### Patch Changes

- [`fec8b57`](https://github.com/backstage/backstage/commit/fec8b57): Updated exports to use the new type parameters for extensions and extension blueprints.
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.
- [`8a474f2`](https://github.com/backstage/backstage/commit/8a474f2): Updating docs to use `createFrontendModule` instead

#### 0.11.8

##### Patch Changes

- [`770ba02`](https://github.com/backstage/backstage/commit/770ba02): `ConsumingComponentsCard` and `ProvidingComponentsCard` will now optionally accept `columns` to override which table columns are displayed
- [`fe1fbb2`](https://github.com/backstage/backstage/commit/fe1fbb2): Migrating usages of the deprecated `createExtension` `v1` format to the newer `v2` format, and old `create*Extension` extension creators to blueprints.
- [`ebfeb40`](https://github.com/backstage/backstage/commit/ebfeb40): Added `resolvers` prop to `AsyncApiDefinitionWidget`. This allows to override the default http/https resolvers, for example to add authentication to requests to internal schema registries.
- [`4b6d2cb`](https://github.com/backstage/backstage/commit/4b6d2cb): Updated dependency `@graphiql/react` to `^0.23.0`.
- [`6582799`](https://github.com/backstage/backstage/commit/6582799): Add `tableOptions` to all tables and additionally `title` to API tables.

### `@backstage/plugin-api-docs-module-protoc-gen-doc` (0.1.7 → [0.1.8](../changelogs/@backstage/plugin-api-docs-module-protoc-gen-doc.md#018))

#### 0.1.8

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

### `@backstage/plugin-app-node` (0.1.22 → [0.1.26](../changelogs/@backstage/plugin-app-node.md#0126))

#### 0.1.25

##### Patch Changes

- [`d3f79d1`](https://github.com/backstage/backstage/commit/d3f79d1): Fixing dependency metadata with the new `@backstage/plugin-app` package

### `@backstage/plugin-app-visualizer` (0.1.8 → [0.1.11](../changelogs/@backstage/plugin-app-visualizer.md#0111))

#### 0.1.11

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

#### 0.1.9

##### Patch Changes

- [`72754db`](https://github.com/backstage/backstage/commit/72754db): Updated usage of `useRouteRef`, which can now always return `undefined`.
- [`c7603e8`](https://github.com/backstage/backstage/commit/c7603e8): Deprecate the old pattern of `create*Extension`, and replace it with the equivalent Blueprint implementation instead
- [`e493020`](https://github.com/backstage/backstage/commit/e493020): Fixing issue with the visualizer crashing when clicking on the detailed view because of `routeRef` parameters

### `@backstage/plugin-auth-react` (0.1.4 → [0.1.7](../changelogs/@backstage/plugin-auth-react.md#017))

#### 0.1.7

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

#### 0.1.6

##### Patch Changes

- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

#### 0.1.5

##### Patch Changes

- [`aeac3e9`](https://github.com/backstage/backstage/commit/aeac3e9): feat: Hide visibility of CookieAuthRedirect

### `@backstage/plugin-bitbucket-cloud-common` (0.2.21 → [0.2.24](../changelogs/@backstage/plugin-bitbucket-cloud-common.md#0224))

#### 0.2.22

##### Patch Changes

- [`3fca643`](https://github.com/backstage/backstage/commit/3fca643): Added method `listBranchesByRepository` to `BitbucketCloudClient`

### `@backstage/plugin-catalog-graph` (0.4.7 → [0.4.11](../changelogs/@backstage/plugin-catalog-graph.md#0411))

#### 0.4.11

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`4d9f39e`](https://github.com/backstage/backstage/commit/4d9f39e): Added InfoCard `action` attribute for CatalogGraphCard

  ```tsx
  const action = <Button title="Action Button" onClick={handleClickEvent()} />
  <CatalogGraphCard action={action} />
  ```

#### 0.4.9

##### Patch Changes

- [`fec8b57`](https://github.com/backstage/backstage/commit/fec8b57): Updated exports to use the new type parameters for extensions and extension blueprints.
- [`da91078`](https://github.com/backstage/backstage/commit/da91078): Fixed a bug in the `CatalogGraphPage` component where, after clicking on some nodes, clicking the back button would break the navigation. This issue caused the entire navigation to fail and behaved differently across various browsers.
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.
- [`8a474f2`](https://github.com/backstage/backstage/commit/8a474f2): Updating docs to use `createFrontendModule` instead
- [`a159180`](https://github.com/backstage/backstage/commit/a159180): Added missing items to `overridableComponents`

#### 0.4.8

##### Patch Changes

- [`c7603e8`](https://github.com/backstage/backstage/commit/c7603e8): Deprecate the old pattern of `create*Extension`, and replace it with the equivalent Blueprint implementation instead
- [`fba7537`](https://github.com/backstage/backstage/commit/fba7537): Memoize entity graph nodes when applying an `entityFilter` to prevent repeated redraws
- [`4a529c2`](https://github.com/backstage/backstage/commit/4a529c2): Use `entityPresentationApi` for the node title and the icon.

### `@backstage/plugin-catalog-import` (0.12.1 → [0.12.5](../changelogs/@backstage/plugin-catalog-import.md#0125))

#### 0.12.5

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`720a2f9`](https://github.com/backstage/backstage/commit/720a2f9): Updated dependency `git-url-parse` to `^15.0.0`.

#### 0.12.3

##### Patch Changes

- [`fec8b57`](https://github.com/backstage/backstage/commit/fec8b57): Updated exports to use the new type parameters for extensions and extension blueprints.
- [`f3c90da`](https://github.com/backstage/backstage/commit/f3c90da): Support button title should be contained in a single menu item
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

#### 0.12.2

##### Patch Changes

- [`c7603e8`](https://github.com/backstage/backstage/commit/c7603e8): Deprecate the old pattern of `create*Extension`, and replace it with the equivalent Blueprint implementation instead

### `@backstage/plugin-catalog-unprocessed-entities` (0.2.6 → [0.2.9](../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#029))

#### 0.2.9

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

#### 0.2.8

##### Patch Changes

- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.
- [`4f08c85`](https://github.com/backstage/backstage/commit/4f08c85): Show additional info on DevTools unprocessed entities table

  - Location path (so that it's easier to search the failed entity from the YAML URL)
  - Time info of last discovery and next refresh time so that users can be aware of it and can sort the errors based on the time.

### `@backstage/plugin-config-schema` (0.1.57 → [0.1.60](../changelogs/@backstage/plugin-config-schema.md#0160))

#### 0.1.60

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

#### 0.1.59

##### Patch Changes

- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

### `@backstage/plugin-devtools` (0.1.16 → [0.1.19](../changelogs/@backstage/plugin-devtools.md#0119))

#### 0.1.19

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

#### 0.1.18

##### Patch Changes

- [`fec8b57`](https://github.com/backstage/backstage/commit/fec8b57): Updated exports to use the new type parameters for extensions and extension blueprints.
- [`019d9ad`](https://github.com/backstage/backstage/commit/019d9ad): Minor dockerfile syntax update

#### 0.1.17

##### Patch Changes

- [`c7603e8`](https://github.com/backstage/backstage/commit/c7603e8): Deprecate the old pattern of `create*Extension`, and replace it with the equivalent Blueprint implementation instead

### `@backstage/plugin-events-backend` (0.3.9 → [0.3.15](../changelogs/@backstage/plugin-events-backend.md#0315))

#### 0.3.13

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.
- [`5c728ee`](https://github.com/backstage/backstage/commit/5c728ee): The events backend now has its own built-in event bus for distributing events across multiple backend instances. It exposes a new HTTP API under `/bus/v1/` for publishing and reading events from the bus, as well as its own storage and notification mechanism for events.

  The backing event store for the bus only supports scaled deployment if PostgreSQL is used as the DBMS. If SQLite or MySQL is used, the event bus will fall back to an in-memory store that does not support multiple backend instances.

  The default `EventsService` implementation from `@backstage/plugin-events-node` has also been updated to use the new events bus.

#### 0.3.12

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

### `@backstage/plugin-events-backend-module-azure` (0.2.8 → [0.2.13](../changelogs/@backstage/plugin-events-backend-module-azure.md#0213))

#### 0.2.12

##### Patch Changes

- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

#### 0.2.11

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.

### `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.8 → [0.2.13](../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0213))

#### 0.2.12

##### Patch Changes

- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

#### 0.2.11

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.

### `@backstage/plugin-events-backend-module-gerrit` (0.2.8 → [0.2.13](../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0213))

#### 0.2.12

##### Patch Changes

- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

#### 0.2.11

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.

### `@backstage/plugin-events-backend-module-github` (0.2.8 → [0.2.13](../changelogs/@backstage/plugin-events-backend-module-github.md#0213))

#### 0.2.12

##### Patch Changes

- [`2f88f88`](https://github.com/backstage/backstage/commit/2f88f88): Updated backend installation instructions.

#### 0.2.11

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.

### `@backstage/plugin-events-backend-module-gitlab` (0.2.8 → [0.2.13](../changelogs/@backstage/plugin-events-backend-module-gitlab.md#0213))

#### 0.2.12

##### Patch Changes

- [`2f88f88`](https://github.com/backstage/backstage/commit/2f88f88): Updated backend installation instructions.

#### 0.2.11

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.

### `@backstage/plugin-home-react` (0.1.15 → [0.1.18](../changelogs/@backstage/plugin-home-react.md#0118))

#### 0.1.18

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`e698470`](https://github.com/backstage/backstage/commit/e698470): Updated dependency `@rjsf/utils` to `5.21.2`.
  Updated dependency `@rjsf/core` to `5.21.2`.
  Updated dependency `@rjsf/material-ui` to `5.21.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.21.2`.

#### 0.1.17

##### Patch Changes

- [`0a50d44`](https://github.com/backstage/backstage/commit/0a50d44): Updated dependency `@rjsf/utils` to `5.21.1`.
  Updated dependency `@rjsf/core` to `5.21.1`.
  Updated dependency `@rjsf/material-ui` to `5.21.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.21.1`.
- [`fa9d8da`](https://github.com/backstage/backstage/commit/fa9d8da): Updated dependency `@rjsf/utils` to `5.20.1`.
  Updated dependency `@rjsf/core` to `5.20.1`.
  Updated dependency `@rjsf/material-ui` to `5.20.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.20.1`.

### `@backstage/plugin-kubernetes` (0.11.12 → [0.11.16](../changelogs/@backstage/plugin-kubernetes.md#01116))

#### 0.11.16

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`605e0bb`](https://github.com/backstage/backstage/commit/605e0bb): Updated dependency `@kubernetes-models/base` to `^5.0.0`.
- [`276cd3d`](https://github.com/backstage/backstage/commit/276cd3d): Updated dependency `@kubernetes-models/apimachinery` to `^2.0.0`.

#### 0.11.14

##### Patch Changes

- [`fec8b57`](https://github.com/backstage/backstage/commit/fec8b57): Updated exports to use the new type parameters for extensions and extension blueprints.
- [`bfc0f42`](https://github.com/backstage/backstage/commit/bfc0f42): Make k8s entity content appear on components & resources only by default in new FE system
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

#### 0.11.13

##### Patch Changes

- [`e6c15cc`](https://github.com/backstage/backstage/commit/e6c15cc): Adds support for Backstage's new frontend system, available via the `/alpha` sub-path export.
- [`fe1fbb2`](https://github.com/backstage/backstage/commit/fe1fbb2): Migrating usages of the deprecated `createExtension` `v1` format to the newer `v2` format, and old `create*Extension` extension creators to blueprints.

### `@backstage/plugin-kubernetes-backend` (0.18.3 → [0.18.7](../changelogs/@backstage/plugin-kubernetes-backend.md#0187))

#### 0.18.7

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

#### 0.18.6

##### Patch Changes

- [`a0f1f0d`](https://github.com/backstage/backstage/commit/a0f1f0d): Bump the `ws` library
- [`f55f8bf`](https://github.com/backstage/backstage/commit/f55f8bf): The `KubernetesBuilder` and its related types has been marked as deprecared. This backend should instead be initialized using the new backend system.
- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.
- [`ca96b66`](https://github.com/backstage/backstage/commit/ca96b66): Skip start without proper config

#### 0.18.4

##### Patch Changes

- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater
- [`b63d378`](https://github.com/backstage/backstage/commit/b63d378): Update internal imports
- [`8c1aa06`](https://github.com/backstage/backstage/commit/8c1aa06): Add `kubernetes.clusterLocatorMethods[].clusters[].customResources` to the configuration schema.
  This was already documented and supported by the plugin.

### `@backstage/plugin-kubernetes-node` (0.1.16 → [0.1.20](../changelogs/@backstage/plugin-kubernetes-node.md#0120))

#### 0.1.20

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

#### 0.1.19

##### Patch Changes

- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

#### 0.1.17

##### Patch Changes

- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater
- [`b63d378`](https://github.com/backstage/backstage/commit/b63d378): Update internal imports

### `@backstage/plugin-kubernetes-react` (0.4.1 → [0.4.4](../changelogs/@backstage/plugin-kubernetes-react.md#044))

#### 0.4.4

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`605e0bb`](https://github.com/backstage/backstage/commit/605e0bb): Updated dependency `@kubernetes-models/base` to `^5.0.0`.
- [`276cd3d`](https://github.com/backstage/backstage/commit/276cd3d): Updated dependency `@kubernetes-models/apimachinery` to `^2.0.0`.

#### 0.4.3

##### Patch Changes

- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

#### 0.4.2

##### Patch Changes

- [`954a593`](https://github.com/backstage/backstage/commit/954a593): `Liveness Probe` added in ContainerCard Component of PodDrawer

### `@backstage/plugin-notifications-node` (0.2.3 → [0.2.8](../changelogs/@backstage/plugin-notifications-node.md#028))

#### 0.2.7

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

#### 0.2.4

##### Patch Changes

- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater

### `@backstage/plugin-org` (0.6.27 → [0.6.31](../changelogs/@backstage/plugin-org.md#0631))

#### 0.6.31

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

#### 0.6.29

##### Patch Changes

- [`fec8b57`](https://github.com/backstage/backstage/commit/fec8b57): Updated exports to use the new type parameters for extensions and extension blueprints.
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.
- [`8a474f2`](https://github.com/backstage/backstage/commit/8a474f2): Updating docs to use `createFrontendModule` instead
- [`a159180`](https://github.com/backstage/backstage/commit/a159180): Added missing items to `overridableComponents`

#### 0.6.28

##### Patch Changes

- [`c7603e8`](https://github.com/backstage/backstage/commit/c7603e8): Deprecate the old pattern of `create*Extension`, and replace it with the equivalent Blueprint implementation instead

### `@backstage/plugin-org-react` (0.1.26 → [0.1.30](../changelogs/@backstage/plugin-org-react.md#0130))

#### 0.1.30

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

#### 0.1.28

##### Patch Changes

- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

### `@backstage/plugin-permission-backend` (0.5.46 → [0.5.50](../changelogs/@backstage/plugin-permission-backend.md#0550))

#### 0.5.50

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

#### 0.5.49

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.
- [`fcb9356`](https://github.com/backstage/backstage/commit/fcb9356): Deprecated `createRouter` and its router options in favour of the new backend system.

#### 0.5.47

##### Patch Changes

- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater

### `@backstage/plugin-permission-common` (0.8.0 → [0.8.1](../changelogs/@backstage/plugin-permission-common.md#081))

#### 0.8.1

##### Patch Changes

- [`df784fe`](https://github.com/backstage/backstage/commit/df784fe): Add the MetadataResponse type from @backstage/plugin-permission-node, since this
  type might be used in frontend code.
- [`137fa34`](https://github.com/backstage/backstage/commit/137fa34): Add the MetadataResponseSerializedRule type from @backstage/plugin-permission-node, since this type might be used in frontend code.

### `@backstage/plugin-permission-react` (0.4.24 → [0.4.27](../changelogs/@backstage/plugin-permission-react.md#0427))

#### 0.4.27

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

#### 0.4.26

##### Patch Changes

- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

### `@backstage/plugin-proxy-backend` (0.5.3 → [0.5.7](../changelogs/@backstage/plugin-proxy-backend.md#057))

#### 0.5.7

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

#### 0.5.6

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- [`d298e6e`](https://github.com/backstage/backstage/commit/d298e6e): Deprecated `createRouter` and its router options in favour of the new backend system.

#### 0.5.4

##### Patch Changes

- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater
- [`b63d378`](https://github.com/backstage/backstage/commit/b63d378): Update internal imports

### `@backstage/plugin-scaffolder-node-test-utils` (0.1.9 → [0.1.15](../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#0115))

#### 0.1.13

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

### `@backstage/plugin-search-backend-module-pg` (0.5.32 → [0.5.37](../changelogs/@backstage/plugin-search-backend-module-pg.md#0537))

#### 0.5.36

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

#### 0.5.35

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- [`5726390`](https://github.com/backstage/backstage/commit/5726390): Internal refactor to use `LoggerService` and `DatabaseService` instead of the legacy `Logger` and `PluginDatabaseManager` types.

#### 0.5.33

##### Patch Changes

- [`7251567`](https://github.com/backstage/backstage/commit/7251567): Removing `@backstage/backend-app-api` dependency

### `@backstage/plugin-signals-node` (0.1.8 → [0.1.13](../changelogs/@backstage/plugin-signals-node.md#0113))

#### 0.1.12

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

#### 0.1.11

##### Patch Changes

- [`a0f1f0d`](https://github.com/backstage/backstage/commit/a0f1f0d): Bump the `ws` library

### `@backstage/plugin-user-settings` (0.8.10 → [0.8.14](../changelogs/@backstage/plugin-user-settings.md#0814))

#### 0.8.14

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`0040632`](https://github.com/backstage/backstage/commit/0040632): `useUserProfile` will now use the user's picture stored in the catalog as a fallback if the identity provider doesn't return a picture.

#### 0.8.12

##### Patch Changes

- [`fec8b57`](https://github.com/backstage/backstage/commit/fec8b57): Updated exports to use the new type parameters for extensions and extension blueprints.
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.
- [`da86ac2`](https://github.com/backstage/backstage/commit/da86ac2): Update README to clarify location of additional tabs example

#### 0.8.11

##### Patch Changes

- [`c7603e8`](https://github.com/backstage/backstage/commit/c7603e8): Deprecate the old pattern of `create*Extension`, and replace it with the equivalent Blueprint implementation instead
- [`6349099`](https://github.com/backstage/backstage/commit/6349099): Added config input type to the extensions

### `@backstage/plugin-user-settings-backend` (0.2.21 → [0.2.26](../changelogs/@backstage/plugin-user-settings-backend.md#0226))

#### 0.2.25

##### Patch Changes

- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

#### 0.2.24

##### Patch Changes

- [`5d1670f`](https://github.com/backstage/backstage/commit/5d1670f): Update README installation instructions
- [`164ce3e`](https://github.com/backstage/backstage/commit/164ce3e): In preparation to stop supporting to the legacy backend system, the `createRouter` function is now deprecated and we strongly recommend you [migrate](https://backstage.io/docs/backend-system/building-backends/migrating) your backend to the new system.
- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- [`1b98099`](https://github.com/backstage/backstage/commit/1b98099): Replaced usage of the deprecated identity service with the new HTTP auth service for the new backend system.
- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

## Other minor version bumps

### `@backstage/catalog-client` (1.6.5 → [1.7.1](../changelogs/@backstage/catalog-client.md#171))

#### 1.7.1

##### Patch Changes

- [`0040632`](https://github.com/backstage/backstage/commit/0040632): Add missing doc string to API

#### 1.7.0

##### Minor Changes

- [`78475c3`](https://github.com/backstage/backstage/commit/78475c3): Allow offset mode paging in entity list provider
- [`29e57c7`](https://github.com/backstage/backstage/commit/29e57c7): Add catalog service mocks under the `/testUtils` subpath export.

##### Patch Changes

- [`1882cfe`](https://github.com/backstage/backstage/commit/1882cfe): Moved `getEntities` ordering to utilize database instead of having it inside catalog client

  Please note that the latest version of `@backstage/catalog-client` will not order the entities in the same way as before. This is because the ordering is now done in the database query instead of in the client. If you rely on the ordering of the entities, you may need to update your backend plugin or code to handle this change.

### `@backstage/catalog-model` (1.5.0 → [1.7.0](../changelogs/@backstage/catalog-model.md#170))

#### 1.7.0

##### Minor Changes

- [`74acf06`](https://github.com/backstage/backstage/commit/74acf06): Add `dependencyOf` prop to catalog model for Component kind to enable building relationship graphs with both directions using `dependsOn` and `dependencyOf`.

#### 1.6.0

##### Minor Changes

- [`34fa803`](https://github.com/backstage/backstage/commit/34fa803): Introduce an optional spec.type attribute on the Domain and System entity kinds

### `@backstage/config-loader` (1.8.1 → [1.9.1](../changelogs/@backstage/config-loader.md#191))

#### 1.9.1

##### Patch Changes

- [`ef3c507`](https://github.com/backstage/backstage/commit/ef3c507): Updated dependency `typescript-json-schema` to `^0.65.0`.

#### 1.9.0

##### Minor Changes

- [`274428f`](https://github.com/backstage/backstage/commit/274428f): Add configuration key to File and Remote `ConfigSource`s that enables configuration of parsing logic. Previously limited to yaml, these `ConfigSource`s now allow for a multitude of parsing options (e.g. JSON).

##### Patch Changes

- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater
- [`1edd6c2`](https://github.com/backstage/backstage/commit/1edd6c2): The `env` option of `ConfigSources.default` now correctly allows undefined members.
- [`493feac`](https://github.com/backstage/backstage/commit/493feac): Add boolean `allowMissingDefaultConfig` option to `ConfigSources.default` and
  `ConfigSources.defaultForTargets`, which results in omission of a ConfigSource
  for the default app-config.yaml configuration file if it's not present.

### `@backstage/core-app-api` (1.14.1 → [1.15.1](../changelogs/@backstage/core-app-api.md#1151))

#### 1.15.1

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

#### 1.15.0

##### Minor Changes

- [`ddbeace`](https://github.com/backstage/backstage/commit/ddbeace): Added the ability to explicitly disable routes through the `bindRoutes` option by passing `false` as the route target. This also fixes a bug where route bindings in config were incorrectly prioritized above the ones in code in certain situations.

##### Patch Changes

- [`ea69e46`](https://github.com/backstage/backstage/commit/ea69e46): The `defaultConfigLoader` now also reads configuration from scripts tags with `type="backstage.io/config"`. The tag is expected to contain a JSON-serialized array of `AppConfig` objects. If any of these script tags are present, the injected runtime configuration in the static assets will no longer be used.
- [`b537bd7`](https://github.com/backstage/backstage/commit/b537bd7): Allow custom star icons to be provided via the `star` and `unstarred` icon overrides. See how to override existing icons in the [Backstage documentation](https://backstage.io/docs/getting-started/app-custom-theme/#custom-icons).
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

#### 1.14.2

##### Patch Changes

- [`9a46a81`](https://github.com/backstage/backstage/commit/9a46a81): The request to delete the session cookie when running the app in protected mode is now done with a plain `fetch` rather than `FetchApi`. This fixes a bug where the app would immediately try to sign-in again when removing the cookie during logout.

### `@backstage/dev-utils` (1.0.36 → [1.1.2](../changelogs/@backstage/dev-utils.md#112))

#### 1.1.2

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

#### 1.1.0

##### Minor Changes

- [`10b1452`](https://github.com/backstage/backstage/commit/10b1452): Allow using translations in `createDevApp`

##### Patch Changes

- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

### `@backstage/integration` (1.13.0 → [1.15.1](../changelogs/@backstage/integration.md#1151))

#### 1.15.1

##### Patch Changes

- [`720a2f9`](https://github.com/backstage/backstage/commit/720a2f9): Updated dependency `git-url-parse` to `^15.0.0`.
- [`920004b`](https://github.com/backstage/backstage/commit/920004b): Updating error message for getProjectId when fetching Gitlab project from its url to be more accurate
- [`090e49a`](https://github.com/backstage/backstage/commit/090e49a): Updated functions parseHarnessUrl, getHarnessLatestCommitUrl, getHarnessFileContentsUrl and getHarnessArchiveUrl to fix parsing of urls

#### 1.15.0

##### Minor Changes

- [`1573014`](https://github.com/backstage/backstage/commit/1573014): The Gerrit integration can now resolve Gitiles urls that point to the following
  refs:

  - HEAD
  - A SHA
  - Tag
  - Branch

#### 1.14.0

##### Minor Changes

- [`78c1329`](https://github.com/backstage/backstage/commit/78c1329): Updated `GitlabUrlReader.readUrl` and `GitlabUrlReader.readTree` to accept a user-provided token, supporting both bearer and private tokens.

##### Patch Changes

- [`c591670`](https://github.com/backstage/backstage/commit/c591670): Updated functions for `getHarnessEditContentsUrl`, `getHarnessFileContentsUrl`, `getHarnessArchiveUrl`, `getHarnessLatestCommitUrl` and `parseHarnessUrl` to handle account and org level urls

### `@backstage/integration-react` (1.1.29 → [1.2.0](../changelogs/@backstage/integration-react.md#120))

#### 1.2.0

##### Minor Changes

- [`a11495a`](https://github.com/backstage/backstage/commit/a11495a): Added new ScmAuth method `forBitbucketServer` that uses correct OAuth scopes by default. Also updated `forBitbucket` method to allow overriding the default OAuth scopes.

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`3dbac17`](https://github.com/backstage/backstage/commit/3dbac17): Revert of change #26430

#### 1.1.31

##### Patch Changes

- [`8a9d797`](https://github.com/backstage/backstage/commit/8a9d797): Remove unnecessary broad permissions from Gitlab `SCMAuth`

  Newer versions of Gitlab (after 2019) do not require the broad api permissions to write to repos.

### `@backstage/plugin-catalog` (1.21.1 → [1.24.0](../changelogs/@backstage/plugin-catalog.md#1240))

#### 1.24.0

##### Minor Changes

- [`71f9f0c`](https://github.com/backstage/backstage/commit/71f9f0c): Updated default columns for location entities to remove description and tags from the catalog table view.
- [`cec8e8c`](https://github.com/backstage/backstage/commit/cec8e8c): Adding negation keyword for entity filtering

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`46b5a20`](https://github.com/backstage/backstage/commit/46b5a20): Empty states updated with external link icon for learn more links

#### 1.23.0

##### Minor Changes

- [`78475c3`](https://github.com/backstage/backstage/commit/78475c3): Allow offset mode paging in entity list provider

##### Patch Changes

- [`c891b69`](https://github.com/backstage/backstage/commit/c891b69): Add `FavoriteToggle` in `core-components` to standardise favorite marking
- [`fec8b57`](https://github.com/backstage/backstage/commit/fec8b57): Updated exports to use the new type parameters for extensions and extension blueprints.
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.
- [`5446061`](https://github.com/backstage/backstage/commit/5446061): The `/alpha` export no longer export extension creators for the new frontend system, existing usage should be switched to use the equivalent extension blueprint instead. For more information see the [new frontend system 1.30 migration documentation](https://backstage.io/docs/frontend-system/architecture/migrations#130).
- [`0ff53c8`](https://github.com/backstage/backstage/commit/0ff53c8): Enable loading state for paginated catalog tables by passing `isLoading` prop
- [`180a45f`](https://github.com/backstage/backstage/commit/180a45f): Entity presentation api now only fetches fields that are required to display entity title
- [`a159180`](https://github.com/backstage/backstage/commit/a159180): Added missing items to `overridableComponents`

#### 1.22.0

##### Minor Changes

- [`6925dcb`](https://github.com/backstage/backstage/commit/6925dcb): Introduces the HasSubdomainsCard component that displays the subdomains of a given domain

##### Patch Changes

- [`496b8a9`](https://github.com/backstage/backstage/commit/496b8a9): Export `RelatedEntitiesCard` presets to be reused.
- [`604a504`](https://github.com/backstage/backstage/commit/604a504): The entity relation cards available for the new frontend system via `/alpha` now have more accurate and granular default filters.
- [`7bd27e1`](https://github.com/backstage/backstage/commit/7bd27e1): Deprecate the old pattern of `create*Extension`, and replace it with the equivalent Blueprint implementation instead.
- [`c7603e8`](https://github.com/backstage/backstage/commit/c7603e8): Deprecate the old pattern of `create*Extension`, and replace it with the equivalent Blueprint implementation instead
- [`6582799`](https://github.com/backstage/backstage/commit/6582799): Add `tableOptions` to all tables and additionally `title` to API tables.
- [`6349099`](https://github.com/backstage/backstage/commit/6349099): Added config input type to the extensions

### `@backstage/plugin-catalog-backend` (1.24.0 → [1.27.1](../changelogs/@backstage/plugin-catalog-backend.md#1271))

#### 1.27.0

##### Minor Changes

- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`83a8830`](https://github.com/backstage/backstage/commit/83a8830): Added migration `20241003170511_alter_target_in_locations.js` to change the target column in the `locations` table to TEXT type.
  Added a hash for the key column in the `refresh_keys` table.
- [`62747f8`](https://github.com/backstage/backstage/commit/62747f8): Fixed a bug where the concurrency limiter for URL reading was not honored
- [`c1f9764`](https://github.com/backstage/backstage/commit/c1f9764): Add configuration parameters for deferred stitcher
- [`720a2f9`](https://github.com/backstage/backstage/commit/720a2f9): Updated dependency `git-url-parse` to `^15.0.0`.
- [`d1cf90a`](https://github.com/backstage/backstage/commit/d1cf90a): Adds the ability to disable catalog processing `catalog.processingInterval: false` in `app-config`
- [`f1cab41`](https://github.com/backstage/backstage/commit/f1cab41): Update catalog search table in transaction
- [`8206f49`](https://github.com/backstage/backstage/commit/8206f49): Fix a bug where etags were expiring too soon in the URL reader

#### 1.26.0

##### Minor Changes

- [`74acf06`](https://github.com/backstage/backstage/commit/74acf06): Add `dependencyOf` prop to catalog model for Component kind to enable building relationship graphs with both directions using `dependsOn` and `dependencyOf`.
- [`78475c3`](https://github.com/backstage/backstage/commit/78475c3): Allow offset mode paging in entity list provider
- [`bd35cdb`](https://github.com/backstage/backstage/commit/bd35cdb): The `analyze-location` endpoint is now protected by the `catalog.location.analyze` permission.
  The `validate-entity` endpoint is now protected by the `catalog.entity.validate` permission.

##### Patch Changes

- [`1882cfe`](https://github.com/backstage/backstage/commit/1882cfe): Moved `getEntities` ordering to utilize database instead of having it inside catalog client

  Please note that the latest version of `@backstage/catalog-client` will not order the entities in the same way as before. This is because the ordering is now done in the database query instead of in the client. If you rely on the ordering of the entities, you may need to update your backend plugin or code to handle this change.

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.
- [`53cce86`](https://github.com/backstage/backstage/commit/53cce86): Fixed an issue with the by-query call, where ordering by a field that does not exist on all entities led to not all results being returned

#### 1.25.0

##### Minor Changes

- [`163ba08`](https://github.com/backstage/backstage/commit/163ba08): Deprecated `RouterOptions`, `CatalogBuilder`, and `CatalogEnvironment`. Please make sure to upgrade to the new backend system.
- [`fc24d9e`](https://github.com/backstage/backstage/commit/fc24d9e): Stop using `@backstage/backend-tasks` as it will be deleted in near future.

##### Patch Changes

- [`776eb56`](https://github.com/backstage/backstage/commit/776eb56): `ProcessorOutputCollector` returns an error when receiving deferred entities that have an invalid `metadata.annotations` format.

  This allows to return an error on an actual validation issue instead of reporting that the location annotations are missing afterwards, which is misleading for the users.

- [`389f5a4`](https://github.com/backstage/backstage/commit/389f5a4): Update deprecated url-reader-related imports.
- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater
- [`a629fb2`](https://github.com/backstage/backstage/commit/a629fb2): Added setAllowedLocationTypes while introducing a new extension point called CatalogLocationsExtensionPoint
- [`51240ee`](https://github.com/backstage/backstage/commit/51240ee): Preserve default `allowedLocationTypes` when `setAllowedLocationTypes()` of `CatalogLocationsExtensionPoint` is not called.

### `@backstage/plugin-catalog-common` (1.0.25 → [1.1.0](../changelogs/@backstage/plugin-catalog-common.md#110))

#### 1.1.0

##### Minor Changes

- [`bd35cdb`](https://github.com/backstage/backstage/commit/bd35cdb): The `analyze-location` endpoint is now protected by the `catalog.location.analyze` permission.
  The `validate-entity` endpoint is now protected by the `catalog.entity.validate` permission.

### `@backstage/plugin-catalog-node` (1.12.4 → [1.13.1](../changelogs/@backstage/plugin-catalog-node.md#1131))

#### 1.13.1

##### Patch Changes

- [`0801db6`](https://github.com/backstage/backstage/commit/0801db6): Documentation for the `testUtils` named export

#### 1.13.0

##### Minor Changes

- [`bd35cdb`](https://github.com/backstage/backstage/commit/bd35cdb): The `analyze-location` endpoint is now protected by the `catalog.location.analyze` permission.
  The `validate-entity` endpoint is now protected by the `catalog.entity.validate` permission.
- [`29e57c7`](https://github.com/backstage/backstage/commit/29e57c7): Add catalog service mocks under the `/testUtils` subpath export.

#### 1.12.5

##### Patch Changes

- [`a629fb2`](https://github.com/backstage/backstage/commit/a629fb2): Added setAllowedLocationTypes while introducing a new extension point called CatalogLocationsExtensionPoint
- [`7c5f3b0`](https://github.com/backstage/backstage/commit/7c5f3b0): Explicit declare if the service ref accepts `single` or `multiple` implementations.

### `@backstage/plugin-catalog-react` (1.12.2 → [1.14.0](../changelogs/@backstage/plugin-catalog-react.md#1140))

#### 1.14.0

##### Minor Changes

- [`0801db6`](https://github.com/backstage/backstage/commit/0801db6): Add catalog service mocks under the `/testUtils` subpath export.

  You can now use e.g. `const catalog = catalogApiMock.mock()` in your test and then do assertions on `catalog.getEntities` without awkward type casting.

- [`6812980`](https://github.com/backstage/backstage/commit/6812980): Added a new prop, `disableTooltip` to the `EntityRefLink` component

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

#### 1.13.0

##### Minor Changes

- [`78475c3`](https://github.com/backstage/backstage/commit/78475c3): Allow offset mode paging in entity list provider

##### Patch Changes

- [`c891b69`](https://github.com/backstage/backstage/commit/c891b69): Add `FavoriteToggle` in `core-components` to standardise favorite marking
- [`fec8b57`](https://github.com/backstage/backstage/commit/fec8b57): Updated exports to use the new type parameters for extensions and extension blueprints.
- [`b537bd7`](https://github.com/backstage/backstage/commit/b537bd7): Allow custom star icons to be provided via the `star` and `unstarred` icon overrides. See how to override existing icons in the [Backstage documentation](https://backstage.io/docs/getting-started/app-custom-theme/#custom-icons).
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.
- [`5446061`](https://github.com/backstage/backstage/commit/5446061): The `/alpha` export no longer export extension creators for the new frontend system, existing usage should be switched to use the equivalent extension blueprint instead. For more information see the [new frontend system 1.30 migration documentation](https://backstage.io/docs/frontend-system/architecture/migrations#130).
- [`a159180`](https://github.com/backstage/backstage/commit/a159180): Added missing items to `overridableComponents`
- [`ae9b6cb`](https://github.com/backstage/backstage/commit/ae9b6cb): Small internal fix to better work with recent `lodash` versions

#### 1.12.3

##### Patch Changes

- [`7bd27e1`](https://github.com/backstage/backstage/commit/7bd27e1): Deprecate the old pattern of `create*Extension`, and replace it with the equivalent Blueprint implementation instead.
- [`31bfc44`](https://github.com/backstage/backstage/commit/31bfc44): Updated alpha definitions of extension data references.
- [`7ca331c`](https://github.com/backstage/backstage/commit/7ca331c): Correct `EntityDisplayName`'s icon alignment with the text.
- [`9b89b82`](https://github.com/backstage/backstage/commit/9b89b82): Internal refactor to remove unnecessary `routable` prop in the implementation of the `createEntityContentExtension` alpha export.
- [`bebd569`](https://github.com/backstage/backstage/commit/bebd569): Fix extra divider displayed on user list picker component
- [`519b8e0`](https://github.com/backstage/backstage/commit/519b8e0): Added utilities for converting existing entity card and content extensions to the new frontend system. This is in particular useful when used in combination with the new `convertLegacyPlugin` utility from `@backstage/core-compat-api`.
- [`d001a42`](https://github.com/backstage/backstage/commit/d001a42): Fix label related accessibility issues with `FavorityEntity`
- [`012e3eb`](https://github.com/backstage/backstage/commit/012e3eb): Entity page extensions created for the new frontend system via the `/alpha` exports will now be enabled by default.
- [`6349099`](https://github.com/backstage/backstage/commit/6349099): Added config input type to the extensions

### `@backstage/plugin-scaffolder` (1.23.0 → [1.26.2](../changelogs/@backstage/plugin-scaffolder.md#1262))

#### 1.26.0

##### Minor Changes

- [`bf6eaf3`](https://github.com/backstage/backstage/commit/bf6eaf3): Added support for `FormFieldBlueprint` to create field extensions in the Scaffolder plugin
- [`c433ae9`](https://github.com/backstage/backstage/commit/c433ae9): Improved the layout of the manage templates page (`/edit`) by adding icons and descriptions that better describe what each page is for. Updated the header menu to link back to the scaffolder create page.
- [`7bfaf23`](https://github.com/backstage/backstage/commit/7bfaf23): Text field content of the `EntityPicker` is now more readable as it uses entity title instead of entity reference.
- [`cc3f80c`](https://github.com/backstage/backstage/commit/cc3f80c): Added ability to create a new local scaffolder template to ease onboarding when creating new templates.
- [`5492eb6`](https://github.com/backstage/backstage/commit/5492eb6): Added ability to link to a specific action on the actions page

##### Patch Changes

- [`b2b2aa8`](https://github.com/backstage/backstage/commit/b2b2aa8): Fix extra divider displayed in owner list picker on list tasks page
- [`7f1f483`](https://github.com/backstage/backstage/commit/7f1f483): Create a separate route for the Scaffolder template editor and add the ability to refresh the page without closing the directory. Also, when the directory is closed, the user will stay on the editor page and can load a template folder from there.
- [`f6c15d8`](https://github.com/backstage/backstage/commit/f6c15d8): Apply `defaultValue` props in `MultiEntityPicker`
- [`7a3d622`](https://github.com/backstage/backstage/commit/7a3d622): Create a separate route for the template form editor so we refresh it without being redirected to scaffolder edit page.
- [`4698646`](https://github.com/backstage/backstage/commit/4698646): Change task list created at column to show timestamp
- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`e6bbfce`](https://github.com/backstage/backstage/commit/e6bbfce): Add tests for the `TemplateEditorToolbarTemplatesMenu` component.
- [`4130291`](https://github.com/backstage/backstage/commit/4130291): Create a separate route for the custom fields explorer so we refresh it without being redirected to scaffolder edit page.
- [`4e9702e`](https://github.com/backstage/backstage/commit/4e9702e): Add tests for the new pages header navigation.
- [`f25c9e3`](https://github.com/backstage/backstage/commit/f25c9e3): Fix behavior of scaffolder entity pickers (EntityPicker, MultiEntityPicker, MyGroupsPicker) to not auto-fill and disable the field if there is only a single value option and the field is not required.
- [`785d68f`](https://github.com/backstage/backstage/commit/785d68f): Add support for pagination in scaffolder tasks list
- [`94a7bcd`](https://github.com/backstage/backstage/commit/94a7bcd): Change "Register Existing Component" CTA to outlined as it's not a primary action on the scaffolder pages
- [`f989c47`](https://github.com/backstage/backstage/commit/f989c47): Add translation to the editor toolbar component.
- [`d4cafc8`](https://github.com/backstage/backstage/commit/d4cafc8): Standardize template editor pages desktop and mobile layouts.
- [`b1de959`](https://github.com/backstage/backstage/commit/b1de959): Scaffolder task routes require read permission to access. The tasks list option in the scaffolder page context menu only shows with permission.
- [`e698470`](https://github.com/backstage/backstage/commit/e698470): Updated dependency `@rjsf/utils` to `5.21.2`.
  Updated dependency `@rjsf/core` to `5.21.2`.
  Updated dependency `@rjsf/material-ui` to `5.21.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.21.2`.
- [`720a2f9`](https://github.com/backstage/backstage/commit/720a2f9): Updated dependency `git-url-parse` to `^15.0.0`.
- [`01ffa58`](https://github.com/backstage/backstage/commit/01ffa58): Add tests for the `useTemplateDirectory` hook.
- [`3ac4766`](https://github.com/backstage/backstage/commit/3ac4766): Add an actions filter on the list actions page and drawer.
- [`11e0752`](https://github.com/backstage/backstage/commit/11e0752): Make it possible to manually retry the scaffolder template from the step it failed
- [`09fcd95`](https://github.com/backstage/backstage/commit/09fcd95): Update the Scaffolder template editor to quickly access installed custom fields and actions when editing a template.
- [`c18d925`](https://github.com/backstage/backstage/commit/c18d925): Add tests for the `TemplateEditorToolbarFilesMenu` component.

#### 1.25.0

##### Minor Changes

- [`860ad3a`](https://github.com/backstage/backstage/commit/860ad3a): Expose styles for TemplateEditor, TemplateFormPreviewer and CustomFieldExplorer
- [`4baad34`](https://github.com/backstage/backstage/commit/4baad34): Added support for `omitExtraData` and `liveOmit` for rjsf in the scaffolder
- [`5143616`](https://github.com/backstage/backstage/commit/5143616): Added EntityOwnerPicker component to the TemplateListPage to allow filtering on owner

##### Patch Changes

- [`fec8b57`](https://github.com/backstage/backstage/commit/fec8b57): Updated exports to use the new type parameters for extensions and extension blueprints.
- [`b0a5c9f`](https://github.com/backstage/backstage/commit/b0a5c9f): The `ui:options` for `OwnedEntityPicker` field are now passed to `EntityPicker`. This allows you to use any `ui:options` which `EntityPicker` accepts in the `OwnedEntityPicker` field including `allowArbitraryValues` and `defaultNamespace`.
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.
- [`0a50d44`](https://github.com/backstage/backstage/commit/0a50d44): Updated dependency `@rjsf/utils` to `5.21.1`.
  Updated dependency `@rjsf/core` to `5.21.1`.
  Updated dependency `@rjsf/material-ui` to `5.21.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.21.1`.
- [`fa9d8da`](https://github.com/backstage/backstage/commit/fa9d8da): Updated dependency `@rjsf/utils` to `5.20.1`.
  Updated dependency `@rjsf/core` to `5.20.1`.
  Updated dependency `@rjsf/material-ui` to `5.20.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.20.1`.
- [`0944334`](https://github.com/backstage/backstage/commit/0944334): Removed duplicated titles on Scaffolder `TemplateListPage` component
- [`7976081`](https://github.com/backstage/backstage/commit/7976081): Added support for all request parameters in the Github create/update environment API in the Github environment create scaffolder action.

  Disable MultiEntityPicker when `maxItems` limit is reached defined in `JSONSchema`

#### 1.24.0

##### Minor Changes

- [`1552c33`](https://github.com/backstage/backstage/commit/1552c33): Changed the way to display entities in `MyGroupsPicker` to use `entityPresentationApi` and make it consistent across scaffolder pickers
- [`3fca643`](https://github.com/backstage/backstage/commit/3fca643): Added field extension `RepoBranchPicker` that supports autocompletion for Bitbucket

##### Patch Changes

- [`47ed51b`](https://github.com/backstage/backstage/commit/47ed51b): Add an extra bit of height to the EntityPicker dropdown to make it clear there are more options to select from, and to remove the scroll bar when there is less than 10 options
- [`46e5e55`](https://github.com/backstage/backstage/commit/46e5e55): Change scaffolder widgets to use `TextField` component for more flexibility in theme overrides.
- [`c7603e8`](https://github.com/backstage/backstage/commit/c7603e8): Deprecate the old pattern of `create*Extension`, and replace it with the equivalent Blueprint implementation instead
- [`2ae63cd`](https://github.com/backstage/backstage/commit/2ae63cd): add i18n for scaffolder
- [`d18f4eb`](https://github.com/backstage/backstage/commit/d18f4eb): Fix undefined in the title of Scaffolder Runs on the page load
- [`896a22d`](https://github.com/backstage/backstage/commit/896a22d): Fix helper text margin for scaffolder EntityNamePicker and EntityTagsPicker when using outlined text field
- [`bbd9f56`](https://github.com/backstage/backstage/commit/bbd9f56): Cleaned up codebase of RepoUrlPicker
- [`b8600fe`](https://github.com/backstage/backstage/commit/b8600fe): Fix issue with `RepoUrlPicker` not refreshing the credentials for a different host

### `@backstage/plugin-scaffolder-backend` (1.23.0 → [1.26.3](../changelogs/@backstage/plugin-scaffolder-backend.md#1263))

#### 1.26.0

##### Minor Changes

- [`3ec4e6d`](https://github.com/backstage/backstage/commit/3ec4e6d): Added pagination support for listing of tasks and the ability to filter on several users and task statuses.
- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

##### Patch Changes

- [`734c2d4`](https://github.com/backstage/backstage/commit/734c2d4): Add `fetch:template:file` scaffolder action to download a single file and template the contents. Example usage:

  ```yaml
  - id: fetch-file
    name: Fetch File
    action: fetch:template:file
    input:
      url: https://github.com/backstage/software-templates/blob/main/scaffolder-templates/create-react-app/skeleton/catalog-info.yaml
      targetPath: './target/catalog-info.yaml'
      values:
        component_id: My Component
        owner: Test
  ```

- [`f1f0076`](https://github.com/backstage/backstage/commit/f1f0076): handle step.if: false
- [`2f90932`](https://github.com/backstage/backstage/commit/2f90932): Include step name and step id to checkpoint key
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`8f0898b`](https://github.com/backstage/backstage/commit/8f0898b): Updated dependency `esbuild` to `^0.24.0`.
- [`11e0752`](https://github.com/backstage/backstage/commit/11e0752): Make it possible to manually retry the scaffolder template from the step it failed

#### 1.25.0

##### Minor Changes

- [`df9ae9e`](https://github.com/backstage/backstage/commit/df9ae9e): Added scaffolder action publish:bitbucketCloud:pull-request
- [`62898bd`](https://github.com/backstage/backstage/commit/62898bd): `createRouter` and its related types has been marked as deprecared. This backend should instead be initialized using the new backend system.

##### Patch Changes

- [`f0c6b25`](https://github.com/backstage/backstage/commit/f0c6b25): Allow listing file contents with `debug:log` scaffolder action
- [`c160951`](https://github.com/backstage/backstage/commit/c160951): Found the issue during testing the clean up of the workspace for the database implementation.
- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- [`f865103`](https://github.com/backstage/backstage/commit/f865103): Updated dependency `esbuild` to `^0.23.0`.
- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.
- [`7976081`](https://github.com/backstage/backstage/commit/7976081): Added support for all request parameters in the Github create/update environment API in the Github environment create scaffolder action.

  Disable MultiEntityPicker when `maxItems` limit is reached defined in `JSONSchema`

#### 1.24.0

##### Minor Changes

- [`fc24d9e`](https://github.com/backstage/backstage/commit/fc24d9e): Stop using `@backstage/backend-tasks` as it will be deleted in near future.
- [`dcd6a79`](https://github.com/backstage/backstage/commit/dcd6a79): Added OpenTelemetry support to Scaffolder metrics

##### Patch Changes

- [`389f5a4`](https://github.com/backstage/backstage/commit/389f5a4): Update deprecated url-reader-related imports.
- [`c544f81`](https://github.com/backstage/backstage/commit/c544f81): Add support for status filtering in scaffolder tasks endpoint
- [`b63d378`](https://github.com/backstage/backstage/commit/b63d378): Update internal imports
- [`ef87e06`](https://github.com/backstage/backstage/commit/ef87e06): Fix scaffolder action `catalog:write` to write to directories that don't already exist

### `@backstage/plugin-scaffolder-react` (1.10.0 → [1.13.2](../changelogs/@backstage/plugin-scaffolder-react.md#1132))

#### 1.13.0

##### Minor Changes

- [`bf6eaf3`](https://github.com/backstage/backstage/commit/bf6eaf3): Added support for `FormFieldBlueprint` to create field extensions in the Scaffolder plugin
- [`d851b5b`](https://github.com/backstage/backstage/commit/d851b5b): Renamed Template Editor to Manage Templates.

##### Patch Changes

- [`341e5db`](https://github.com/backstage/backstage/commit/341e5db): Add `overridableComponent` `BackstageTemplateStepperClassKey` to template stepper to enable custom styling
- [`4b60e0c`](https://github.com/backstage/backstage/commit/4b60e0c): Small tweaks to API reports to make them valid
- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`785d68f`](https://github.com/backstage/backstage/commit/785d68f): Add support for pagination in scaffolder tasks list
- [`b1de959`](https://github.com/backstage/backstage/commit/b1de959): Scaffolder task routes require read permission to access. The tasks list option in the scaffolder page context menu only shows with permission.
- [`e698470`](https://github.com/backstage/backstage/commit/e698470): Updated dependency `@rjsf/utils` to `5.21.2`.
  Updated dependency `@rjsf/core` to `5.21.2`.
  Updated dependency `@rjsf/material-ui` to `5.21.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.21.2`.
- [`11e0752`](https://github.com/backstage/backstage/commit/11e0752): Make it possible to manually retry the scaffolder template from the step it failed

#### 1.12.0

##### Minor Changes

- [`4512f71`](https://github.com/backstage/backstage/commit/4512f71): Add `ui:backstage.review.name` option for custom item names on scaffolder review page, and also add support for rendering the `title` property instead of the key name.
- [`4baad34`](https://github.com/backstage/backstage/commit/4baad34): Added support for `omitExtraData` and `liveOmit` for rjsf in the scaffolder

##### Patch Changes

- [`1f3c5aa`](https://github.com/backstage/backstage/commit/1f3c5aa): Fix scaffolder review step issue where schema options are not handled for fields on multi-step templates.
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.
- [`0a50d44`](https://github.com/backstage/backstage/commit/0a50d44): Updated dependency `@rjsf/utils` to `5.21.1`.
  Updated dependency `@rjsf/core` to `5.21.1`.
  Updated dependency `@rjsf/material-ui` to `5.21.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.21.1`.
- [`fa9d8da`](https://github.com/backstage/backstage/commit/fa9d8da): Updated dependency `@rjsf/utils` to `5.20.1`.
  Updated dependency `@rjsf/core` to `5.20.1`.
  Updated dependency `@rjsf/material-ui` to `5.20.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.20.1`.
- [`c2cbe1e`](https://github.com/backstage/backstage/commit/c2cbe1e): Updated dependency `use-immer` to `^0.10.0`.
- [`b0f0118`](https://github.com/backstage/backstage/commit/b0f0118): Remove unnecessary singleton wrapping of `scaffolderApiRef`.
- [`3ebb64f`](https://github.com/backstage/backstage/commit/3ebb64f): - Fix secret widget field not displaying as required.
  - Fix secret widget not able to be required inside nested objects.
  - Fix secret widget not able to be disabled.
  - Support `minLength` and `maxLength` properties for secret widget.
- [`8dd6ef6`](https://github.com/backstage/backstage/commit/8dd6ef6): Fix an issue where keys with duplicate final key parts are not all displayed in the `ReviewState`. Change the way the keys are formatted to include the full schema path, separated by `>`.
- [`9a0672a`](https://github.com/backstage/backstage/commit/9a0672a): Scaffolder review page shows static amount of asterisks for secret fields.

#### 1.11.0

##### Minor Changes

- [`8839381`](https://github.com/backstage/backstage/commit/8839381): Add scaffolder option to display object items in separate rows on review page

##### Patch Changes

- [`072c00c`](https://github.com/backstage/backstage/commit/072c00c): Fixed a bug in `DefaultTableOutputs` where output elements overlapped on smaller screen sizes
- [`46e5e55`](https://github.com/backstage/backstage/commit/46e5e55): Change scaffolder widgets to use `TextField` component for more flexibility in theme overrides.
- [`d0e95a7`](https://github.com/backstage/backstage/commit/d0e95a7): Add ability to customise form fields in the UI by exposing `uiSchema` and `formContext` in `FormProps`
- [`4670f06`](https://github.com/backstage/backstage/commit/4670f06): support `ajv-errors` for scaffolder validation to allow for customizing the error messages
- [`04759f2`](https://github.com/backstage/backstage/commit/04759f2): Fix null check in `isJsonObject` utility function for scaffolder review state component

### `@backstage/plugin-search-backend` (1.5.14 → [1.6.1](../changelogs/@backstage/plugin-search-backend.md#161))

#### 1.6.0

##### Minor Changes

- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

##### Patch Changes

- [`66af016`](https://github.com/backstage/backstage/commit/66af016): Fix to schema to allow arbitrary query parameters.
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

#### 1.5.17

##### Patch Changes

- [`5726390`](https://github.com/backstage/backstage/commit/5726390): Deprecate create router as the legacy backend system will no longer be supported.
- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

#### 1.5.15

##### Patch Changes

- [`3123c16`](https://github.com/backstage/backstage/commit/3123c16): Fix package metadata

### `@backstage/plugin-search-backend-module-elasticsearch` (1.5.3 → [1.6.1](../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#161))

#### 1.6.0

##### Minor Changes

- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

##### Patch Changes

- [`d78b07c`](https://github.com/backstage/backstage/commit/d78b07c): Align the configuration schema with the docs and actual behavior of the code
- [`4b60e0c`](https://github.com/backstage/backstage/commit/4b60e0c): Remove extension points from `/alpha` export, they're available from the main package already
- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

#### 1.5.6

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- [`5726390`](https://github.com/backstage/backstage/commit/5726390): Internal refactor to use `LoggerService` and `DatabaseService` instead of the legacy `Logger` and `PluginDatabaseManager` types.

### `@backstage/plugin-search-backend-node` (1.2.27 → [1.3.4](../changelogs/@backstage/plugin-search-backend-node.md#134))

#### 1.3.3

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common

#### 1.3.0

##### Minor Changes

- [`fc24d9e`](https://github.com/backstage/backstage/commit/fc24d9e): Stop using `@backstage/backend-tasks` as it will be deleted in near future.

##### Patch Changes

- [`389f5a4`](https://github.com/backstage/backstage/commit/389f5a4): Update deprecated url-reader-related imports.
- [`3123c16`](https://github.com/backstage/backstage/commit/3123c16): Fix package metadata
- [`7c5f3b0`](https://github.com/backstage/backstage/commit/7c5f3b0): Explicit declare if the service ref accepts `single` or `multiple` implementations.

### `@backstage/plugin-search-react` (1.7.13 → [1.8.1](../changelogs/@backstage/plugin-search-react.md#181))

#### 1.8.1

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

#### 1.8.0

##### Minor Changes

- [`9d66d8c`](https://github.com/backstage/backstage/commit/9d66d8c): Make use of the `useApp` hook to retrieve the specified search icon in the SearchBar

##### Patch Changes

- [`fec8b57`](https://github.com/backstage/backstage/commit/fec8b57): Updated exports to use the new type parameters for extensions and extension blueprints.
- [`f26ff99`](https://github.com/backstage/backstage/commit/f26ff99): Slight type tweak to match newer React versions better
- [`dbbd93e`](https://github.com/backstage/backstage/commit/dbbd93e): Internal update to match recent React types
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.
- [`5446061`](https://github.com/backstage/backstage/commit/5446061): The `/alpha` export no longer export extension creators for the new frontend system, existing usage should be switched to use the equivalent extension blueprint instead. For more information see the [new frontend system 1.30 migration documentation](https://backstage.io/docs/frontend-system/architecture/migrations#130).
- [`a159180`](https://github.com/backstage/backstage/commit/a159180): Added missing items to `overridableComponents`

#### 1.7.14

##### Patch Changes

- [`7bd27e1`](https://github.com/backstage/backstage/commit/7bd27e1): Deprecate the old pattern of `create*Extension`, and replace it with the equivalent Blueprint implementation instead.
- [`31bfc44`](https://github.com/backstage/backstage/commit/31bfc44): Updated alpha definitions of extension data references.
- [`3123c16`](https://github.com/backstage/backstage/commit/3123c16): Fix package metadata
- [`6349099`](https://github.com/backstage/backstage/commit/6349099): Added config input type to the extensions

### `@backstage/plugin-techdocs` (1.10.7 → [1.11.0](../changelogs/@backstage/plugin-techdocs.md#1110))

#### 1.11.0

##### Minor Changes

- [`e77ff3d`](https://github.com/backstage/backstage/commit/e77ff3d): Adds support for custom background colors in code blocks and inline code within TechDocs.

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`a77cb40`](https://github.com/backstage/backstage/commit/a77cb40): Make `emptyState` input optional on `entity-content:techdocs` extension so that
  the default empty state extension works correctly.
- [`e918061`](https://github.com/backstage/backstage/commit/e918061): Add support for mkdocs material palette conditional hashes.
- [`720a2f9`](https://github.com/backstage/backstage/commit/720a2f9): Updated dependency `git-url-parse` to `^15.0.0`.
- [`e8b4966`](https://github.com/backstage/backstage/commit/e8b4966): Use more of the available space for the navigation sidebar.

#### 1.10.9

##### Patch Changes

- [`c891b69`](https://github.com/backstage/backstage/commit/c891b69): Add `FavoriteToggle` in `core-components` to standardise favorite marking
- [`fec8b57`](https://github.com/backstage/backstage/commit/fec8b57): Updated exports to use the new type parameters for extensions and extension blueprints.
- [`fe94ad8`](https://github.com/backstage/backstage/commit/fe94ad8): Fixes left navigation positioning when using mkdocs blog plugin
- [`b0206dc`](https://github.com/backstage/backstage/commit/b0206dc): Added support for setting page status with 'new' and 'deprecated' values, allowing visual indication of page status in TechDocs. To use include the following at the top of your markdown file:

  ```markdown
  ---
  status: new
  ---
  ```

- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.
- [`c7cb4c0`](https://github.com/backstage/backstage/commit/c7cb4c0): Add `empty-state:techdocs/entity-content` extension to allow overriding the empty state for the entity page techdocs tab.
- [`97db53e`](https://github.com/backstage/backstage/commit/97db53e): Enhanced the table hover effect with a lighter color and updated the border radius to align with Backstage's theme styling

#### 1.10.8

##### Patch Changes

- [`69bd940`](https://github.com/backstage/backstage/commit/69bd940): Use annotation constants from new techdocs-common package.
- [`c7603e8`](https://github.com/backstage/backstage/commit/c7603e8): Deprecate the old pattern of `create*Extension`, and replace it with the equivalent Blueprint implementation instead
- [`27794d1`](https://github.com/backstage/backstage/commit/27794d1): Allow for more granular control of TechDocsReaderPage styling. Theme overrides can now be provided to TechDocs without affecting the theme in other areas of Backstage.
- [`4490d73`](https://github.com/backstage/backstage/commit/4490d73): Refactor TechDocs' mkdocs-redirects support.
- [`8543e72`](https://github.com/backstage/backstage/commit/8543e72): TechDocs redirect feature now includes a notification to the user before they are redirected.
- [`67e76f2`](https://github.com/backstage/backstage/commit/67e76f2): TechDocs now supports the `mkdocs-redirects` plugin. Redirects defined using the `mkdocs-redirect` plugin will be handled automatically in TechDocs. Redirecting to external urls is not supported. In the case that an external redirect url is provided, TechDocs will redirect to the current documentation site home.
- [`bdc5471`](https://github.com/backstage/backstage/commit/bdc5471): Fixed issue where header styles were incorrectly generated when themes used CSS variables to define font size.
- [`6349099`](https://github.com/backstage/backstage/commit/6349099): Added config input type to the extensions

### `@backstage/plugin-techdocs-backend` (1.10.9 → [1.11.1](../changelogs/@backstage/plugin-techdocs-backend.md#1111))

#### 1.11.0

##### Minor Changes

- [`3109c24`](https://github.com/backstage/backstage/commit/3109c24): The export for the new backend system at the `/alpha` export is now also available via the main entry point, which means that you can remove the `/alpha` suffix from the import.

##### Patch Changes

- [`094eaa3`](https://github.com/backstage/backstage/commit/094eaa3): Remove references to in-repo backend-common
- [`fbdc631`](https://github.com/backstage/backstage/commit/fbdc631): Allow to pass StorageOptions to GCS Publisher

#### 1.10.13

##### Patch Changes

- [`086c32d`](https://github.com/backstage/backstage/commit/086c32d): Dedicated token for techdocs cache sync
- [`5b679ac`](https://github.com/backstage/backstage/commit/5b679ac): The `createRouter` and its related types has been marked as deprecared. This backend should instead be initialized using the new backend system.
- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.
- [`5edd344`](https://github.com/backstage/backstage/commit/5edd344): Refactor to use injected catalog client in the new backend system

#### 1.10.10

##### Patch Changes

- [`69bd940`](https://github.com/backstage/backstage/commit/69bd940): Use annotation constants from new techdocs-common package.
- [`93095ee`](https://github.com/backstage/backstage/commit/93095ee): Make sure node-fetch is version 2.7.0 or greater
- [`b77fbf4`](https://github.com/backstage/backstage/commit/b77fbf4): Added back `type: 'local'` to TechDocs config schema for `publisher`
- [`a16632c`](https://github.com/backstage/backstage/commit/a16632c): Update configuration schema to match actual behavior

### `@backstage/test-utils` (1.5.9 → [1.7.0](../changelogs/@backstage/test-utils.md#170))

#### 1.7.0

##### Minor Changes

- [`9cc7dd6`](https://github.com/backstage/backstage/commit/9cc7dd6): Added a `mockApis` export, which will replace the `MockX` API implementation classes and their related types. This is analogous with the backend's `mockServices`.

  **DEPRECATED** several old helpers:

  - Deprecated `MockAnalyticsApi`, please use `mockApis.analytics` instead.
  - Deprecated `MockConfigApi`, please use `mockApis.config` instead.
  - Deprecated `MockPermissionApi`, please use `mockApis.permission` instead.
  - Deprecated `MockStorageApi`, please use `mockApis.storage` instead.
  - Deprecated `MockTranslationApi`, please use `mockApis.translation` instead.

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

#### 1.6.0

##### Minor Changes

- [`d47be30`](https://github.com/backstage/backstage/commit/d47be30): Added the icons option to the renderInTestApp function's TestAppOptions to be forwarded to the icons option of `createApp`.

##### Patch Changes

- [`b537bd7`](https://github.com/backstage/backstage/commit/b537bd7): Allow custom star icons to be provided via the `star` and `unstarred` icon overrides. See how to override existing icons in the [Backstage documentation](https://backstage.io/docs/getting-started/app-custom-theme/#custom-icons).
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

## Other patch version bumps

### `@backstage/app-defaults` (1.5.9 → [1.5.12](../changelogs/@backstage/app-defaults.md#1512))

#### 1.5.12

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`46b5a20`](https://github.com/backstage/backstage/commit/46b5a20): Added `externalLink` to icon defaults
- [`8c40e55`](https://github.com/backstage/backstage/commit/8c40e55): Updated the `bitbucket-server-auth` default API to set its environment based on the `auth.environment` config option instead of being hardcoded to `development`.

#### 1.5.11

##### Patch Changes

- [`b537bd7`](https://github.com/backstage/backstage/commit/b537bd7): Allow custom star icons to be provided via the `star` and `unstarred` icon overrides. See how to override existing icons in the [Backstage documentation](https://backstage.io/docs/getting-started/app-custom-theme/#custom-icons).
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

### `@backstage/plugin-search` (1.4.14 → [1.4.18](../changelogs/@backstage/plugin-search.md#1418))

#### 1.4.18

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`88d03d8`](https://github.com/backstage/backstage/commit/88d03d8): Updated the default SearchType.Accordion behavior to remain open after result type selection. This is a UX improvement to reduce the number of clicks needed when toggling result type filters.

#### 1.4.16

##### Patch Changes

- [`fec8b57`](https://github.com/backstage/backstage/commit/fec8b57): Updated exports to use the new type parameters for extensions and extension blueprints.
- [`eca03bd`](https://github.com/backstage/backstage/commit/eca03bd): Added ability to customize the search items within the SidebarSearchModal
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

#### 1.4.15

##### Patch Changes

- [`c7603e8`](https://github.com/backstage/backstage/commit/c7603e8): Deprecate the old pattern of `create*Extension`, and replace it with the equivalent Blueprint implementation instead
- [`3123c16`](https://github.com/backstage/backstage/commit/3123c16): Fix package metadata
- [`6349099`](https://github.com/backstage/backstage/commit/6349099): Added config input type to the extensions

### `@backstage/plugin-search-common` (1.2.13 → [1.2.14](../changelogs/@backstage/plugin-search-common.md#1214))

#### 1.2.14

##### Patch Changes

- [`3123c16`](https://github.com/backstage/backstage/commit/3123c16): Fix package metadata

### `@backstage/plugin-techdocs-addons-test-utils` (1.0.36 → [1.0.40](../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#1040))

#### 1.0.40

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

#### 1.0.38

##### Patch Changes

- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

### `@backstage/plugin-techdocs-module-addons-contrib` (1.1.12 → [1.1.16](../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1116))

#### 1.1.16

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.
- [`720a2f9`](https://github.com/backstage/backstage/commit/720a2f9): Updated dependency `git-url-parse` to `^15.0.0`.
- [`e8b4966`](https://github.com/backstage/backstage/commit/e8b4966): Use more of the available space for the navigation sidebar.

#### 1.1.14

##### Patch Changes

- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

### `@backstage/plugin-techdocs-node` (1.12.8 → [1.12.12](../changelogs/@backstage/plugin-techdocs-node.md#11212))

#### 1.12.12

##### Patch Changes

- [`7774828`](https://github.com/backstage/backstage/commit/7774828): Updated dependency `@smithy/node-http-handler` to `^3.0.0`.
- [`720a2f9`](https://github.com/backstage/backstage/commit/720a2f9): Updated dependency `git-url-parse` to `^15.0.0`.
- [`fbdc631`](https://github.com/backstage/backstage/commit/fbdc631): Allow to pass StorageOptions to GCS Publisher

#### 1.12.11

##### Patch Changes

- [`f715f5c`](https://github.com/backstage/backstage/commit/f715f5c): Move `TechdocsContainerRunner` from `publish` to `generate`.
- [`4417dd4`](https://github.com/backstage/backstage/commit/4417dd4): Fix typo and unify TechDocs casing in doc strings
- [`57da51f`](https://github.com/backstage/backstage/commit/57da51f): Add support for mapping custom tags in the techdocs yaml parser that validates the mkdocs.yaml file
- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.
- [`3606843`](https://github.com/backstage/backstage/commit/3606843): Internal fixes to match `testcontainers` update
- [`33ebb28`](https://github.com/backstage/backstage/commit/33ebb28): As the `@backstage/backend-common` package is deprecated, we have updated the `techdocs-node` package to stop depending on it.

#### 1.12.9

##### Patch Changes

- [`389f5a4`](https://github.com/backstage/backstage/commit/389f5a4): Update deprecated url-reader-related imports.
- [`69bd940`](https://github.com/backstage/backstage/commit/69bd940): Use annotation constants from new techdocs-common package.
- [`949083d`](https://github.com/backstage/backstage/commit/949083d): Update `patchMkdocsYmlPrebuild` to modify `repo_url` and `edit_uri` independently.
- [`5cedd9f`](https://github.com/backstage/backstage/commit/5cedd9f): Fix TechDocs Edit URL for nested docs

### `@backstage/plugin-techdocs-react` (1.2.6 → [1.2.9](../changelogs/@backstage/plugin-techdocs-react.md#129))

#### 1.2.9

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

#### 1.2.8

##### Patch Changes

- [`5ee3d27`](https://github.com/backstage/backstage/commit/5ee3d27): Fixed issue in useShadowRootElements which could lead to unlimited render loops
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

### `@backstage/version-bridge` (1.0.8 → [1.0.10](../changelogs/@backstage/version-bridge.md#1010))

#### 1.0.10

##### Patch Changes

- [`e969dc7`](https://github.com/backstage/backstage/commit/e969dc7): Move `@types/react` to a peer dependency.

#### 1.0.9

##### Patch Changes

- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

## Excluded dependency updates

- `@backstage/plugin-catalog-unprocessed-entities-common` (0.0.3 → [0.0.4](../changelogs/@backstage/plugin-catalog-unprocessed-entities-common.md#004))
- `@backstage/plugin-devtools-common` (0.1.11 → [0.1.12](../changelogs/@backstage/plugin-devtools-common.md#0112))
- `@backstage/plugin-events-backend-test-utils` (0.1.32 → [0.1.37](../changelogs/@backstage/plugin-events-backend-test-utils.md#0137))
- `@backstage/plugin-kubernetes-common` (0.8.1 → [0.8.3](../changelogs/@backstage/plugin-kubernetes-common.md#083))
- `@backstage/plugin-scaffolder-common` (1.5.4 → [1.5.6](../changelogs/@backstage/plugin-scaffolder-common.md#156))
- `@techdocs/cli` (1.8.16 → [1.8.21](../changelogs/@techdocs/cli.md#1821))
