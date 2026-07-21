# RHDH Release 1.10 changelog

Changes between Backstage 1.45.3 (RHDH 1.9) and Backstage 1.49.4 (RHDH 1.10) — 18 added, 1 removed, 184 upgraded, 5 unchanged packages.

## Summary

- [Newly added packages](#newly-added-packages): 18 packages
- [Removed packages](#removed-packages): 1 package
- [Breaking changes](#breaking-changes): 23 packages
- [Major version bumps](#major-version-bumps): 1 package
- [0.x minor version bumps](#0x-minor-version-bumps): 23 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 4 packages
- [0.x patch version bumps](#0x-patch-version-bumps): 89 packages
- [Other minor version bumps](#other-minor-version-bumps): 12 packages
- [Other patch version bumps](#other-patch-version-bumps): 15 packages
- [Excluded dependency updates](#excluded-dependency-updates): 17 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/cli-defaults` (new, 0.1.0)](#backstagecli-defaults-new-010)
  - [`@backstage/cli-module-actions` (new, 0.0.1)](#backstagecli-module-actions-new-001)
  - [`@backstage/cli-module-auth` (new, 0.1.0)](#backstagecli-module-auth-new-010)
  - [`@backstage/cli-module-build` (new, 0.1.0)](#backstagecli-module-build-new-010)
  - [`@backstage/cli-module-config` (new, 0.1.0)](#backstagecli-module-config-new-010)
  - [`@backstage/cli-module-github` (new, 0.1.0)](#backstagecli-module-github-new-010)
  - [`@backstage/cli-module-info` (new, 0.1.0)](#backstagecli-module-info-new-010)
  - [`@backstage/cli-module-lint` (new, 0.1.0)](#backstagecli-module-lint-new-010)
  - [`@backstage/cli-module-maintenance` (new, 0.1.0)](#backstagecli-module-maintenance-new-010)
  - [`@backstage/cli-module-migrate` (new, 0.1.0)](#backstagecli-module-migrate-new-010)
  - [`@backstage/cli-module-new` (new, 0.1.1)](#backstagecli-module-new-new-011)
  - [`@backstage/cli-module-test-jest` (new, 0.1.0)](#backstagecli-module-test-jest-new-010)
  - [`@backstage/cli-module-translations` (new, 0.1.0)](#backstagecli-module-translations-new-010)
  - [`@backstage/filter-predicates` (new, 0.1.1)](#backstagefilter-predicates-new-011)
  - [`@backstage/frontend-dev-utils` (new, 0.1.0)](#backstagefrontend-dev-utils-new-010)
  - [`@backstage/module-federation-common` (new, 0.1.2)](#backstagemodule-federation-common-new-012)
  - [`@backstage/plugin-app-react` (new, 0.2.1)](#backstageplugin-app-react-new-021)
  - [`@backstage/plugin-devtools-react` (new, 0.2.0)](#backstageplugin-devtools-react-new-020)
- [Removed packages](#removed-packages)
- [Breaking changes](#breaking-changes)
  - [`@backstage/backend-defaults` (0.13.1 → 0.16.0)](#backstagebackend-defaults-0131--0160)
  - [`@backstage/backend-plugin-api` (1.5.0 → 1.8.0)](#backstagebackend-plugin-api-150--180)
  - [`@backstage/cli` (0.34.5 → 0.36.0)](#backstagecli-0345--0360)
  - [`@backstage/create-app` (0.7.6 → 0.8.1)](#backstagecreate-app-076--081)
  - [`@backstage/frontend-app-api` (0.13.2 → 0.16.1)](#backstagefrontend-app-api-0132--0161)
  - [`@backstage/frontend-defaults` (0.3.3 → 0.5.0)](#backstagefrontend-defaults-033--050)
  - [`@backstage/frontend-plugin-api` (0.13.1 → 0.15.1)](#backstagefrontend-plugin-api-0131--0151)
  - [`@backstage/frontend-test-utils` (0.4.1 → 0.5.1)](#backstagefrontend-test-utils-041--051)
  - [`@backstage/integration` (1.18.2 → 2.0.0)](#backstageintegration-1182--200)
  - [`@backstage/plugin-app` (0.3.2 → 0.4.2)](#backstageplugin-app-032--042)
  - [`@backstage/plugin-bitbucket-cloud-common` (0.3.4 → 0.3.8)](#backstageplugin-bitbucket-cloud-common-034--038)
  - [`@backstage/plugin-catalog` (1.32.0 → 2.0.1)](#backstageplugin-catalog-1320--201)
  - [`@backstage/plugin-catalog-backend` (3.2.0 → 3.5.0)](#backstageplugin-catalog-backend-320--350)
  - [`@backstage/plugin-catalog-graph` (0.5.3 → 0.6.0)](#backstageplugin-catalog-graph-053--060)
  - [`@backstage/plugin-catalog-react` (1.21.3 → 2.1.1)](#backstageplugin-catalog-react-1213--211)
  - [`@backstage/plugin-notifications-backend-module-slack` (0.2.1 → 0.4.0)](#backstageplugin-notifications-backend-module-slack-021--040)
  - [`@backstage/plugin-org` (0.6.46 → 0.7.0)](#backstageplugin-org-0646--070)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.2.15 → 0.3.4)](#backstageplugin-scaffolder-backend-module-bitbucket-cloud-0215--034)
  - [`@backstage/plugin-scaffolder-common` (1.7.3 → 2.0.0)](#backstageplugin-scaffolder-common-173--200)
  - [`@backstage/plugin-scaffolder-node` (0.12.1 → 0.13.1)](#backstageplugin-scaffolder-node-0121--0131)
  - [`@backstage/plugin-techdocs-addons-test-utils` (1.1.2 → 2.0.3)](#backstageplugin-techdocs-addons-test-utils-112--203)
  - [`@backstage/plugin-techdocs-node` (1.13.9 → 1.14.4)](#backstageplugin-techdocs-node-1139--1144)
  - [`@backstage/ui` (0.9.1 → 0.13.2)](#backstageui-091--0132)
- [Major version bumps](#major-version-bumps)
  - [`@backstage/plugin-catalog-node` (1.20.0 → 2.1.0)](#backstageplugin-catalog-node-1200--210)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/backend-dynamic-feature-service` (0.7.6 → 0.8.0)](#backstagebackend-dynamic-feature-service-076--080)
  - [`@backstage/cli-common` (0.1.15 → 0.2.0)](#backstagecli-common-0115--020)
  - [`@backstage/cli-node` (0.2.15 → 0.3.0)](#backstagecli-node-0215--030)
  - [`@backstage/plugin-app-visualizer` (0.1.25 → 0.2.1)](#backstageplugin-app-visualizer-0125--021)
  - [`@backstage/plugin-auth-backend` (0.25.6 → 0.27.3)](#backstageplugin-auth-backend-0256--0273)
  - [`@backstage/plugin-auth-backend-module-auth0-provider` (0.2.9 → 0.3.1)](#backstageplugin-auth-backend-module-auth0-provider-029--031)
  - [`@backstage/plugin-auth-backend-module-github-provider` (0.3.9 → 0.5.1)](#backstageplugin-auth-backend-module-github-provider-039--051)
  - [`@backstage/plugin-auth-backend-module-gitlab-provider` (0.3.9 → 0.4.1)](#backstageplugin-auth-backend-module-gitlab-provider-039--041)
  - [`@backstage/plugin-catalog-backend-module-github` (0.11.2 → 0.13.0)](#backstageplugin-catalog-backend-module-github-0112--0130)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.7.5 → 0.8.1)](#backstageplugin-catalog-backend-module-gitlab-075--081)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.8.2 → 0.9.1)](#backstageplugin-catalog-backend-module-msgraph-082--091)
  - [`@backstage/plugin-events-backend` (0.5.8 → 0.6.0)](#backstageplugin-events-backend-058--060)
  - [`@backstage/plugin-events-backend-module-google-pubsub` (0.1.6 → 0.2.1)](#backstageplugin-events-backend-module-google-pubsub-016--021)
  - [`@backstage/plugin-events-backend-module-kafka` (0.1.5 → 0.3.2)](#backstageplugin-events-backend-module-kafka-015--032)
  - [`@backstage/plugin-home` (0.8.14 → 0.9.3)](#backstageplugin-home-0814--093)
  - [`@backstage/plugin-kubernetes-backend` (0.20.4 → 0.21.2)](#backstageplugin-kubernetes-backend-0204--0212)
  - [`@backstage/plugin-kubernetes-node` (0.3.6 → 0.4.2)](#backstageplugin-kubernetes-node-036--042)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.10.0 → 0.11.4)](#backstageplugin-scaffolder-backend-module-gitlab-0100--0114)
  - [`@backstage/plugin-scaffolder-backend-module-sentry` (0.2.15 → 0.3.2)](#backstageplugin-scaffolder-backend-module-sentry-0215--032)
  - [`@backstage/plugin-user-settings` (0.8.29 → 0.9.1)](#backstageplugin-user-settings-0829--091)
  - [`@backstage/plugin-user-settings-backend` (0.3.8 → 0.4.1)](#backstageplugin-user-settings-backend-038--041)
  - [`@backstage/plugin-user-settings-common` (0.0.1 → 0.1.0)](#backstageplugin-user-settings-common-001--010)
  - [`@backstage/repo-tools` (0.16.0 → 0.17.0)](#backstagerepo-tools-0160--0170)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-catalog-unprocessed-entities-common` (0.0.11 → 0.0.13)](#backstageplugin-catalog-unprocessed-entities-common-0011--0013)
  - [`@backstage/plugin-kubernetes-cluster` (0.0.31 → 0.0.35)](#backstageplugin-kubernetes-cluster-0031--0035)
  - [`@backstage/plugin-signals` (0.0.25 → 0.0.29)](#backstageplugin-signals-0025--0029)
  - [`@backstage/plugin-signals-react` (0.0.17 → 0.0.20)](#backstageplugin-signals-react-0017--0020)
- [0.x patch version bumps](#0x-patch-version-bumps)
  - [`@backstage/backend-dev-utils` (0.1.5 → 0.1.7)](#backstagebackend-dev-utils-015--017)
  - [`@backstage/backend-openapi-utils` (0.6.3 → 0.6.7)](#backstagebackend-openapi-utils-063--067)
  - [`@backstage/codemods` (0.1.52 → 0.1.55)](#backstagecodemods-0152--0155)
  - [`@backstage/core-compat-api` (0.5.4 → 0.5.9)](#backstagecore-compat-api-054--059)
  - [`@backstage/core-components` (0.18.3 → 0.18.8)](#backstagecore-components-0183--0188)
  - [`@backstage/e2e-test-utils` (0.1.1 → 0.1.2)](#backstagee2e-test-utils-011--012)
  - [`@backstage/eslint-plugin` (0.2.0 → 0.2.2)](#backstageeslint-plugin-020--022)
  - [`@backstage/frontend-dynamic-feature-loader` (0.1.7 → 0.1.10)](#backstagefrontend-dynamic-feature-loader-017--0110)
  - [`@backstage/integration-aws-node` (0.1.19 → 0.1.20)](#backstageintegration-aws-node-0119--0120)
  - [`@backstage/plugin-api-docs` (0.13.1 → 0.13.5)](#backstageplugin-api-docs-0131--0135)
  - [`@backstage/plugin-api-docs-module-protoc-gen-doc` (0.1.10 → 0.1.11)](#backstageplugin-api-docs-module-protoc-gen-doc-0110--0111)
  - [`@backstage/plugin-app-backend` (0.5.8 → 0.5.12)](#backstageplugin-app-backend-058--0512)
  - [`@backstage/plugin-app-node` (0.1.39 → 0.1.43)](#backstageplugin-app-node-0139--0143)
  - [`@backstage/plugin-auth` (0.1.2 → 0.1.6)](#backstageplugin-auth-012--016)
  - [`@backstage/plugin-auth-backend-module-atlassian-provider` (0.4.9 → 0.4.13)](#backstageplugin-auth-backend-module-atlassian-provider-049--0413)
  - [`@backstage/plugin-auth-backend-module-aws-alb-provider` (0.4.9 → 0.4.14)](#backstageplugin-auth-backend-module-aws-alb-provider-049--0414)
  - [`@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.2.14 → 0.2.18)](#backstageplugin-auth-backend-module-azure-easyauth-provider-0214--0218)
  - [`@backstage/plugin-auth-backend-module-bitbucket-provider` (0.3.9 → 0.3.13)](#backstageplugin-auth-backend-module-bitbucket-provider-039--0313)
  - [`@backstage/plugin-auth-backend-module-bitbucket-server-provider` (0.2.9 → 0.2.13)](#backstageplugin-auth-backend-module-bitbucket-server-provider-029--0213)
  - [`@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.4.9 → 0.4.13)](#backstageplugin-auth-backend-module-cloudflare-access-provider-049--0413)
  - [`@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.4.9 → 0.4.13)](#backstageplugin-auth-backend-module-gcp-iap-provider-049--0413)
  - [`@backstage/plugin-auth-backend-module-google-provider` (0.3.9 → 0.3.13)](#backstageplugin-auth-backend-module-google-provider-039--0313)
  - [`@backstage/plugin-auth-backend-module-guest-provider` (0.2.14 → 0.2.17)](#backstageplugin-auth-backend-module-guest-provider-0214--0217)
  - [`@backstage/plugin-auth-backend-module-microsoft-provider` (0.3.9 → 0.3.13)](#backstageplugin-auth-backend-module-microsoft-provider-039--0313)
  - [`@backstage/plugin-auth-backend-module-oauth2-provider` (0.4.9 → 0.4.13)](#backstageplugin-auth-backend-module-oauth2-provider-049--0413)
  - [`@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.2.14 → 0.2.18)](#backstageplugin-auth-backend-module-oauth2-proxy-provider-0214--0218)
  - [`@backstage/plugin-auth-backend-module-oidc-provider` (0.4.9 → 0.4.14)](#backstageplugin-auth-backend-module-oidc-provider-049--0414)
  - [`@backstage/plugin-auth-backend-module-okta-provider` (0.2.9 → 0.2.13)](#backstageplugin-auth-backend-module-okta-provider-029--0213)
  - [`@backstage/plugin-auth-backend-module-onelogin-provider` (0.3.9 → 0.3.13)](#backstageplugin-auth-backend-module-onelogin-provider-039--0313)
  - [`@backstage/plugin-auth-backend-module-openshift-provider` (0.1.2 → 0.1.5)](#backstageplugin-auth-backend-module-openshift-provider-012--015)
  - [`@backstage/plugin-auth-backend-module-pinniped-provider` (0.3.9 → 0.3.12)](#backstageplugin-auth-backend-module-pinniped-provider-039--0312)
  - [`@backstage/plugin-auth-node` (0.6.9 → 0.6.14)](#backstageplugin-auth-node-069--0614)
  - [`@backstage/plugin-auth-react` (0.1.21 → 0.1.25)](#backstageplugin-auth-react-0121--0125)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.4.17 → 0.4.21)](#backstageplugin-catalog-backend-module-aws-0417--0421)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.3.11 → 0.3.15)](#backstageplugin-catalog-backend-module-azure-0311--0315)
  - [`@backstage/plugin-catalog-backend-module-backstage-openapi` (0.5.8 → 0.5.12)](#backstageplugin-catalog-backend-module-backstage-openapi-058--0512)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.5.5 → 0.5.9)](#backstageplugin-catalog-backend-module-bitbucket-cloud-055--059)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.5.5 → 0.5.9)](#backstageplugin-catalog-backend-module-bitbucket-server-055--059)
  - [`@backstage/plugin-catalog-backend-module-gcp` (0.3.14 → 0.3.17)](#backstageplugin-catalog-backend-module-gcp-0314--0317)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (0.3.8 → 0.3.12)](#backstageplugin-catalog-backend-module-gerrit-038--0312)
  - [`@backstage/plugin-catalog-backend-module-gitea` (0.1.6 → 0.1.10)](#backstageplugin-catalog-backend-module-gitea-016--0110)
  - [`@backstage/plugin-catalog-backend-module-github-org` (0.3.16 → 0.3.20)](#backstageplugin-catalog-backend-module-github-org-0316--0320)
  - [`@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.15 → 0.2.19)](#backstageplugin-catalog-backend-module-gitlab-org-0215--0219)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.7.6 → 0.7.10)](#backstageplugin-catalog-backend-module-incremental-ingestion-076--0710)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.12.0 → 0.12.3)](#backstageplugin-catalog-backend-module-ldap-0120--0123)
  - [`@backstage/plugin-catalog-backend-module-openapi` (0.2.16 → 0.2.20)](#backstageplugin-catalog-backend-module-openapi-0216--0220)
  - [`@backstage/plugin-catalog-backend-module-puppetdb` (0.2.16 → 0.2.20)](#backstageplugin-catalog-backend-module-puppetdb-0216--0220)
  - [`@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.2.14 → 0.2.18)](#backstageplugin-catalog-backend-module-scaffolder-entity-model-0214--0218)
  - [`@backstage/plugin-catalog-import` (0.13.7 → 0.13.11)](#backstageplugin-catalog-import-0137--01311)
  - [`@backstage/plugin-catalog-unprocessed-entities` (0.2.23 → 0.2.28)](#backstageplugin-catalog-unprocessed-entities-0223--0228)
  - [`@backstage/plugin-config-schema` (0.1.74 → 0.1.78)](#backstageplugin-config-schema-0174--0178)
  - [`@backstage/plugin-devtools` (0.1.33 → 0.1.37)](#backstageplugin-devtools-0133--0137)
  - [`@backstage/plugin-devtools-backend` (0.5.11 → 0.5.15)](#backstageplugin-devtools-backend-0511--0515)
  - [`@backstage/plugin-devtools-common` (0.1.19 → 0.1.23)](#backstageplugin-devtools-common-0119--0123)
  - [`@backstage/plugin-events-node` (0.4.17 → 0.4.20)](#backstageplugin-events-node-0417--0420)
  - [`@backstage/plugin-home-react` (0.1.32 → 0.1.36)](#backstageplugin-home-react-0132--0136)
  - [`@backstage/plugin-kubernetes` (0.12.13 → 0.12.17)](#backstageplugin-kubernetes-01213--01217)
  - [`@backstage/plugin-kubernetes-common` (0.9.8 → 0.9.10)](#backstageplugin-kubernetes-common-098--0910)
  - [`@backstage/plugin-kubernetes-react` (0.5.13 → 0.5.17)](#backstageplugin-kubernetes-react-0513--0517)
  - [`@backstage/plugin-mcp-actions-backend` (0.1.5 → 0.1.11)](#backstageplugin-mcp-actions-backend-015--0111)
  - [`@backstage/plugin-mui-to-bui` (0.2.1 → 0.2.5)](#backstageplugin-mui-to-bui-021--025)
  - [`@backstage/plugin-notifications` (0.5.11 → 0.5.15)](#backstageplugin-notifications-0511--0515)
  - [`@backstage/plugin-notifications-backend` (0.6.0 → 0.6.3)](#backstageplugin-notifications-backend-060--063)
  - [`@backstage/plugin-notifications-backend-module-email` (0.3.16 → 0.3.19)](#backstageplugin-notifications-backend-module-email-0316--0319)
  - [`@backstage/plugin-notifications-common` (0.2.0 → 0.2.1)](#backstageplugin-notifications-common-020--021)
  - [`@backstage/plugin-org-react` (0.1.44 → 0.1.48)](#backstageplugin-org-react-0144--0148)
  - [`@backstage/plugin-permission-backend` (0.7.6 → 0.7.10)](#backstageplugin-permission-backend-076--0710)
  - [`@backstage/plugin-permission-common` (0.9.3 → 0.9.7)](#backstageplugin-permission-common-093--097)
  - [`@backstage/plugin-permission-node` (0.10.6 → 0.10.11)](#backstageplugin-permission-node-0106--01011)
  - [`@backstage/plugin-permission-react` (0.4.38 → 0.4.41)](#backstageplugin-permission-react-0438--0441)
  - [`@backstage/plugin-proxy-backend` (0.6.8 → 0.6.11)](#backstageplugin-proxy-backend-068--0611)
  - [`@backstage/plugin-scaffolder-backend-module-azure` (0.2.15 → 0.2.19)](#backstageplugin-scaffolder-backend-module-azure-0215--0219)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.15 → 0.2.19)](#backstageplugin-scaffolder-backend-module-bitbucket-server-0215--0219)
  - [`@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.15 → 0.3.19)](#backstageplugin-scaffolder-backend-module-confluence-to-markdown-0315--0319)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.17 → 0.3.21)](#backstageplugin-scaffolder-backend-module-cookiecutter-0317--0321)
  - [`@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.15 → 0.2.19)](#backstageplugin-scaffolder-backend-module-gerrit-0215--0219)
  - [`@backstage/plugin-scaffolder-backend-module-gitea` (0.2.15 → 0.2.19)](#backstageplugin-scaffolder-backend-module-gitea-0215--0219)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.9.2 → 0.9.7)](#backstageplugin-scaffolder-backend-module-github-092--097)
  - [`@backstage/plugin-scaffolder-backend-module-rails` (0.5.15 → 0.5.19)](#backstageplugin-scaffolder-backend-module-rails-0515--0519)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.16 → 0.4.20)](#backstageplugin-scaffolder-backend-module-yeoman-0416--0420)
  - [`@backstage/plugin-scaffolder-node-test-utils` (0.3.5 → 0.3.9)](#backstageplugin-scaffolder-node-test-utils-035--039)
  - [`@backstage/plugin-search-backend-module-catalog` (0.3.10 → 0.3.13)](#backstageplugin-search-backend-module-catalog-0310--0313)
  - [`@backstage/plugin-search-backend-module-explore` (0.3.9 → 0.3.12)](#backstageplugin-search-backend-module-explore-039--0312)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.50 → 0.5.53)](#backstageplugin-search-backend-module-pg-0550--0553)
  - [`@backstage/plugin-search-backend-module-stack-overflow-collator` (0.3.15 → 0.3.18)](#backstageplugin-search-backend-module-stack-overflow-collator-0315--0318)
  - [`@backstage/plugin-search-backend-module-techdocs` (0.4.8 → 0.4.12)](#backstageplugin-search-backend-module-techdocs-048--0412)
  - [`@backstage/plugin-signals-backend` (0.3.10 → 0.3.13)](#backstageplugin-signals-backend-0310--0313)
  - [`@backstage/plugin-signals-node` (0.1.26 → 0.1.29)](#backstageplugin-signals-node-0126--0129)
  - [`@backstage/theme` (0.7.0 → 0.7.2)](#backstagetheme-070--072)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/backend-app-api` (1.3.0 → 1.6.0)](#backstagebackend-app-api-130--160)
  - [`@backstage/backend-test-utils` (1.10.1 → 1.11.1)](#backstagebackend-test-utils-1101--1111)
  - [`@backstage/catalog-client` (1.12.1 → 1.14.0)](#backstagecatalog-client-1121--1140)
  - [`@backstage/plugin-scaffolder` (1.34.3 → 1.36.1)](#backstageplugin-scaffolder-1343--1361)
  - [`@backstage/plugin-scaffolder-backend` (3.0.1 → 3.3.0)](#backstageplugin-scaffolder-backend-301--330)
  - [`@backstage/plugin-scaffolder-react` (1.19.3 → 1.20.0)](#backstageplugin-scaffolder-react-1193--1200)
  - [`@backstage/plugin-search` (1.5.0 → 1.7.0)](#backstageplugin-search-150--170)
  - [`@backstage/plugin-search-backend` (2.0.8 → 2.1.0)](#backstageplugin-search-backend-208--210)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.7.8 → 1.8.1)](#backstageplugin-search-backend-module-elasticsearch-178--181)
  - [`@backstage/plugin-search-backend-node` (1.3.17 → 1.4.2)](#backstageplugin-search-backend-node-1317--142)
  - [`@backstage/plugin-search-react` (1.10.0 → 1.11.0)](#backstageplugin-search-react-1100--1110)
  - [`@backstage/plugin-techdocs` (1.16.0 → 1.17.2)](#backstageplugin-techdocs-1160--1172)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/app-defaults` (1.7.2 → 1.7.6)](#backstageapp-defaults-172--176)
  - [`@backstage/catalog-model` (1.7.6 → 1.7.7)](#backstagecatalog-model-176--177)
  - [`@backstage/config-loader` (1.10.6 → 1.10.9)](#backstageconfig-loader-1106--1109)
  - [`@backstage/core-app-api` (1.19.2 → 1.19.6)](#backstagecore-app-api-1192--1196)
  - [`@backstage/core-plugin-api` (1.12.0 → 1.12.4)](#backstagecore-plugin-api-1120--1124)
  - [`@backstage/dev-utils` (1.1.17 → 1.1.21)](#backstagedev-utils-1117--1121)
  - [`@backstage/integration-react` (1.2.12 → 1.2.16)](#backstageintegration-react-1212--1216)
  - [`@backstage/plugin-gateway-backend` (1.1.0 → 1.1.3)](#backstageplugin-gateway-backend-110--113)
  - [`@backstage/plugin-search-common` (1.2.21 → 1.2.22)](#backstageplugin-search-common-1221--1222)
  - [`@backstage/plugin-techdocs-backend` (2.1.2 → 2.1.6)](#backstageplugin-techdocs-backend-212--216)
  - [`@backstage/plugin-techdocs-module-addons-contrib` (1.1.30 → 1.1.34)](#backstageplugin-techdocs-module-addons-contrib-1130--1134)
  - [`@backstage/plugin-techdocs-react` (1.3.5 → 1.3.9)](#backstageplugin-techdocs-react-135--139)
  - [`@backstage/test-utils` (1.7.13 → 1.7.16)](#backstagetest-utils-1713--1716)
  - [`@backstage/version-bridge` (1.0.11 → 1.0.12)](#backstageversion-bridge-1011--1012)
  - [`@techdocs/cli` (1.10.2 → 1.10.6)](#techdocscli-1102--1106)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/cli-defaults` (new, [0.1.0](../changelogs/@backstage/cli-defaults.md#010))

#### 0.1.0

##### Minor Changes

- [`7781ae5`](https://github.com/backstage/backstage/commit/7781ae5): Introduced `@backstage/cli-defaults`, a convenience package that bundles all standard Backstage CLI modules. Install this single package as a `devDependency` to get the full default set of CLI commands without listing each module individually.

##### Patch Changes

- [`42960f1`](https://github.com/backstage/backstage/commit/42960f1): Added `@backstage/cli-module-actions` to the default set of CLI modules.

### `@backstage/cli-module-actions` (new, [0.0.1](../changelogs/@backstage/cli-module-actions.md#001))

#### 0.0.1

##### Patch Changes

- [`42960f1`](https://github.com/backstage/backstage/commit/42960f1): Added `actions` CLI module for listing and executing actions from the distributed actions registry. Includes `actions list`, `actions execute`, and `actions sources` commands for managing plugin sources.

### `@backstage/cli-module-auth` (new, [0.1.0](../changelogs/@backstage/cli-module-auth.md#010))

#### 0.1.0

##### Minor Changes

- [`329f394`](https://github.com/backstage/backstage/commit/329f394): Initial release of the CLI module packages. Each module provides a set of commands that can be discovered automatically by `@backstage/cli` or executed standalone.

##### Patch Changes

- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/cli-module-build` (new, [0.1.0](../changelogs/@backstage/cli-module-build.md#010))

#### 0.1.0

##### Minor Changes

- [`62d0849`](https://github.com/backstage/backstage/commit/62d0849): Added `package bundle` command to create self-contained plugin bundles for dynamic loading, to be used by the `backend-dynamic-feature-service`. Supports backend and frontend plugins, with optional `--pre-packed-dir` for batch bundling from a pre-built workspace.
- [`329f394`](https://github.com/backstage/backstage/commit/329f394): Initial release of the CLI module packages. Each module provides a set of commands that can be discovered automatically by `@backstage/cli` or executed standalone.

### `@backstage/cli-module-config` (new, [0.1.0](../changelogs/@backstage/cli-module-config.md#010))

#### 0.1.0

##### Minor Changes

- [`329f394`](https://github.com/backstage/backstage/commit/329f394): Initial release of the CLI module packages. Each module provides a set of commands that can be discovered automatically by `@backstage/cli` or executed standalone.

### `@backstage/cli-module-github` (new, [0.1.0](../changelogs/@backstage/cli-module-github.md#010))

#### 0.1.0

##### Minor Changes

- [`329f394`](https://github.com/backstage/backstage/commit/329f394): Initial release of the CLI module packages. Each module provides a set of commands that can be discovered automatically by `@backstage/cli` or executed standalone.

### `@backstage/cli-module-info` (new, [0.1.0](../changelogs/@backstage/cli-module-info.md#010))

#### 0.1.0

##### Minor Changes

- [`329f394`](https://github.com/backstage/backstage/commit/329f394): Initial release of the CLI module packages. Each module provides a set of commands that can be discovered automatically by `@backstage/cli` or executed standalone.

### `@backstage/cli-module-lint` (new, [0.1.0](../changelogs/@backstage/cli-module-lint.md#010))

#### 0.1.0

##### Minor Changes

- [`329f394`](https://github.com/backstage/backstage/commit/329f394): Initial release of the CLI module packages. Each module provides a set of commands that can be discovered automatically by `@backstage/cli` or executed standalone.

### `@backstage/cli-module-maintenance` (new, [0.1.0](../changelogs/@backstage/cli-module-maintenance.md#010))

#### 0.1.0

##### Minor Changes

- [`329f394`](https://github.com/backstage/backstage/commit/329f394): Initial release of the CLI module packages. Each module provides a set of commands that can be discovered automatically by `@backstage/cli` or executed standalone.

##### Patch Changes

- [`f189d8f`](https://github.com/backstage/backstage/commit/f189d8f): Added auto-fill of `backstage.pluginPackage` metadata for known plugins during `repo fix`.

### `@backstage/cli-module-migrate` (new, [0.1.0](../changelogs/@backstage/cli-module-migrate.md#010))

#### 0.1.0

##### Minor Changes

- [`329f394`](https://github.com/backstage/backstage/commit/329f394): Initial release of the CLI module packages. Each module provides a set of commands that can be discovered automatically by `@backstage/cli` or executed standalone.

### `@backstage/cli-module-new` (new, [0.1.1](../changelogs/@backstage/cli-module-new.md#011))

#### 0.1.0

##### Minor Changes

- [`329f394`](https://github.com/backstage/backstage/commit/329f394): Initial release of the CLI module packages. Each module provides a set of commands that can be discovered automatically by `@backstage/cli` or executed standalone.

##### Patch Changes

- [`edf2b77`](https://github.com/backstage/backstage/commit/edf2b77): Added support for the `cli-module` template role for scaffolding new CLI module packages.
- [`ea90ab0`](https://github.com/backstage/backstage/commit/ea90ab0): The built-in `yarn new` templates have been moved to this package from `@backstage/cli`. The default template references have been updated from `@backstage/cli/templates/*` to `@backstage/cli-module-new/templates/*`. Existing references to `@backstage/cli/templates/*` in your root `package.json` will continue to work through a backwards compatibility rewrite.
- [`ebeb0d4`](https://github.com/backstage/backstage/commit/ebeb0d4): Updated the new frontend plugin template to use `@backstage/frontend-dev-utils` in its `dev/` entry point instead of wiring `createApp` manually. Generated plugins now get the same dev app helper setup as the built-in examples.
- [`971cc94`](https://github.com/backstage/backstage/commit/971cc94): The `new` command now prompts for the plugin package name when creating plugin modules, in order to properly populate the `package.json` file.
- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/cli-module-test-jest` (new, [0.1.0](../changelogs/@backstage/cli-module-test-jest.md#010))

#### 0.1.0

##### Minor Changes

- [`329f394`](https://github.com/backstage/backstage/commit/329f394): Initial release of the CLI module packages. Each module provides a set of commands that can be discovered automatically by `@backstage/cli` or executed standalone.

### `@backstage/cli-module-translations` (new, [0.1.0](../changelogs/@backstage/cli-module-translations.md#010))

#### 0.1.0

##### Minor Changes

- [`329f394`](https://github.com/backstage/backstage/commit/329f394): Initial release of the CLI module packages. Each module provides a set of commands that can be discovered automatically by `@backstage/cli` or executed standalone.

### `@backstage/filter-predicates` (new, [0.1.1](../changelogs/@backstage/filter-predicates.md#011))

#### 0.1.1

##### Patch Changes

- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

#### 0.1.0

##### Minor Changes

- [`7feb83b`](https://github.com/backstage/backstage/commit/7feb83b): Introduced package, basically as the extracted predicate types from `@backstage/plugin-catalog-react/alpha`

### `@backstage/frontend-dev-utils` (new, [0.1.0](../changelogs/@backstage/frontend-dev-utils.md#010))

#### 0.1.0

##### Minor Changes

- [`c25532a`](https://github.com/backstage/backstage/commit/c25532a): Added `@backstage/frontend-dev-utils`, a new package that provides a minimal helper for wiring up a development app for frontend plugins using the new frontend system. It exports a `createDevApp` function that handles creating and rendering a development app from a `dev/` entry point. The dev app automatically bypasses the sign-in page and loads the `@backstage/ui` CSS. The options interface accepts `features` together with route bindings through `bindRoutes`.

### `@backstage/module-federation-common` (new, [0.1.2](../changelogs/@backstage/module-federation-common.md#012))

#### 0.1.2

##### Patch Changes

- [`0cb5646`](https://github.com/backstage/backstage/commit/0cb5646): Fixed the `@mui/material/styles` shared dependency key by removing a trailing slash that caused module resolution failures with MUI package exports.

#### 0.1.0

##### Minor Changes

- [`ce12dec`](https://github.com/backstage/backstage/commit/ce12dec): Added new `@backstage/module-federation-common` package that provides shared types, default configurations, and runtime utilities for module federation. It includes `loadModuleFederationHostShared` for loading shared dependencies in parallel at runtime, `defaultHostSharedDependencies` and `defaultRemoteSharedDependencies` for consistent dependency configuration, and types such as `HostSharedDependencies`, `RemoteSharedDependencies`, and `RuntimeSharedDependenciesGlobal`.

### `@backstage/plugin-app-react` (new, [0.2.1](../changelogs/@backstage/plugin-app-react.md#021))

#### 0.2.1

##### Patch Changes

- [`5f3f5d2`](https://github.com/backstage/backstage/commit/5f3f5d2): `NavContentBlueprint` nav item collections now keep previously collected `rest()` results in sync when additional items are taken later in the same render, making it easier to place items across multiple sidebar sections.
- [`2c383b5`](https://github.com/backstage/backstage/commit/2c383b5): Added `AnalyticsImplementationBlueprint` and `AnalyticsImplementationFactory`, migrated from `@backstage/frontend-plugin-api`.

#### 0.2.0

##### Minor Changes

- [`a2133be`](https://github.com/backstage/backstage/commit/a2133be): Added new `NavContentNavItem`, `NavContentNavItems`, and `navItems` prop to `NavContentComponentProps` for auto-discovering navigation items from page extensions. The new `navItems` collection supports `take(id)` and `rest()` methods for placing specific items in custom sidebar positions, as well as `withComponent(Component)` which returns a `NavContentNavItemsWithComponent` for rendering items directly as elements. The existing `items` prop is now deprecated in favor of `navItems`.

##### Patch Changes

- [`ef6916e`](https://github.com/backstage/backstage/commit/ef6916e): Added `IconElement` type as a replacement for the deprecated `IconComponent`. The `IconsApi` now has a new `icon()` method that returns `IconElement`, while the existing `getIcon()` method is deprecated. The `IconBundleBlueprint` now accepts both `IconComponent` and `IconElement` values.
- [`409af72`](https://github.com/backstage/backstage/commit/409af72): Internal refactor to move implementation of blueprints from `@backstage/frontend-plugin-api` to this package.

#### 0.1.0

##### Minor Changes

- [`9ccf84e`](https://github.com/backstage/backstage/commit/9ccf84e): Initial release of this web library for `@backstage/plugin-app`.

##### Patch Changes

- [`9ccf84e`](https://github.com/backstage/backstage/commit/9ccf84e): Moved the following blueprints from `@backstage/frontend-plugin-api`:

  - `AppRootWrapperBlueprint`
  - `IconBundleBlueprint`
  - `NavContentBlueprint`
  - `RouterBlueprint`
  - `SignInPageBlueprint`
  - `SwappableComponentBlueprint`
  - `ThemeBlueprint`
  - `TranslationBlueprint`

### `@backstage/plugin-devtools-react` (new, [0.2.0](../changelogs/@backstage/plugin-devtools-react.md#020))

#### 0.2.0

##### Minor Changes

- [`f4a1edd`](https://github.com/backstage/backstage/commit/f4a1edd): Removed the deprecated `DevToolsContentBlueprint` from `@backstage/plugin-devtools-react`. DevTools pages in the new frontend system now use `SubPageBlueprint` tabs instead, and the catalog unprocessed entities alpha extension now attaches to DevTools as a subpage.

#### 0.1.1

##### Patch Changes

- [`9fbb270`](https://github.com/backstage/backstage/commit/9fbb270): Updated dependency `@testing-library/react` to `^16.0.0`.

#### 0.1.0

##### Minor Changes

- [`be6cef5`](https://github.com/backstage/backstage/commit/be6cef5): Add support for adding `unprocessed-entities` and other tabs to `devtools` when using the New Frontend system

## Removed packages

- `@backstage/plugin-scaffolder-backend-module-bitbucket` ([0.3.16](../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket.md#0316))

## Breaking changes

### `@backstage/backend-defaults` (0.13.1 → [0.16.0](../changelogs/@backstage/backend-defaults.md#0160))

#### 0.16.0

##### Minor Changes

- [`42960f1`](https://github.com/backstage/backstage/commit/42960f1): The actions registry invoke endpoint now accepts direct user credentials in addition to service principals, enabling CLI and other direct user clients to invoke actions.
- [`0e7d8f9`](https://github.com/backstage/backstage/commit/0e7d8f9): The scheduler service now uses the metrics service to create metrics, providing plugin-scoped attribution.
- [`527cf88`](https://github.com/backstage/backstage/commit/527cf88): **BREAKING** Removed deprecated `BitbucketUrlReader`. Use the `BitbucketCloudUrlReader` or the `BitbucketServerUrlReader` instead.

##### Patch Changes

- [`cc8348e`](https://github.com/backstage/backstage/commit/cc8348e): Added permissions integration to the actions registry. Actions registered with a `visibilityPermission` field are now checked against the permissions framework when listing and invoking. Denied actions are filtered from list results, and invoking a denied action returns a `404 Not Found` as if the action does not exist. Permissions are automatically registered with the `PermissionsRegistryService` so they appear in the permission policy system.
- [`dee4283`](https://github.com/backstage/backstage/commit/dee4283): Added `pluginId` field to `ActionsServiceAction` type, populated from the registering plugin's metadata.
- [`015668c`](https://github.com/backstage/backstage/commit/015668c): Added `cancelTask` method to the `SchedulerService` interface and implementation, allowing cancellation of currently running scheduled tasks. For global tasks, the database lock is released and a periodic liveness check aborts the running task function. For local tasks, the task's abort signal is triggered directly. A new `POST /.backstage/scheduler/v1/tasks/:id/cancel` endpoint is also available.
- [`638e6c7`](https://github.com/backstage/backstage/commit/638e6c7): chore(deps): bump `yauzl` from 3.2.0 to 3.2.1
- [`6738cf0`](https://github.com/backstage/backstage/commit/6738cf0): build(deps): bump `minimatch` from 9.0.5 to 10.2.1
- [`62f0a53`](https://github.com/backstage/backstage/commit/62f0a53): Fixed error forwarding in the actions registry so that known errors like `InputError` and `NotFoundError` thrown by actions preserve their original status codes and messages instead of being wrapped in `ForwardedError` and coerced to 500.
- [`d933f62`](https://github.com/backstage/backstage/commit/d933f62): Add configurable throttling and retry mechanism for GitLab integration.
- [`b99158a`](https://github.com/backstage/backstage/commit/b99158a): Fixed `yarn backstage-cli config:check --strict --config app-config.yaml` config validation error by adding
  an optional `default` type discriminator to PostgreSQL connection configuration,
  allowing `config:check` to properly validate `default` connection configurations.
- [`1ee5b28`](https://github.com/backstage/backstage/commit/1ee5b28): Adds an alpha `MetricsService` to provide a unified interface for metrics instrumentation across Backstage plugins.
- [`5fcbef2`](https://github.com/backstage/backstage/commit/5fcbef2): Updated dependency `express-rate-limit` to `^8.0.0`.
- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

#### 0.15.2

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`44f5d04`](https://github.com/backstage/backstage/commit/44f5d04): Minor internal restructure of the postgres config loading code
- [`4fc7bf0`](https://github.com/backstage/backstage/commit/4fc7bf0): Bump to tar v7
- [`5dd683f`](https://github.com/backstage/backstage/commit/5dd683f): `createRateLimitMiddleware` is now exported from `@backstage/backend-defaults/httpRouter`
- [`8dd518a`](https://github.com/backstage/backstage/commit/8dd518a): Support `connection.type: azure` in database client to use Microsoft Entra authentication with Azure database for PostgreSQL
- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 0.15.0

##### Minor Changes

- [`6fc00e6`](https://github.com/backstage/backstage/commit/6fc00e6): Added action filtering support with glob patterns and attribute constraints.

  The `ActionsService` now supports filtering actions based on configuration. This allows controlling which actions are exposed to consumers like the MCP backend.

  Configuration example:

  ```yaml
  backend:
    actions:
      pluginSources:
        - catalog
        - scaffolder
      filter:
        include:
          - id: 'catalog:*'
            attributes:
              destructive: false
          - id: 'scaffolder:*'
        exclude:
          - id: '*:delete-*'
          - attributes:
              readOnly: false
  ```

  Filtering logic:

  - `include`: Rules for actions to include. Each rule can specify an `id` glob pattern and/or `attributes` constraints. An action must match at least one rule to be included. If no include rules are specified, all actions are included by default.
  - `exclude`: Rules for actions to exclude. Takes precedence over include rules.
  - Each rule combines `id` and `attributes` with AND logic (both must match if specified).

- [`27f9061`](https://github.com/backstage/backstage/commit/27f9061): **BREAKING**: The constructor for `FetchUrlReader` is now private. If you have to construct an instance of it, please use `FetchUrlReader.fromConfig` instead.
- [`27f9061`](https://github.com/backstage/backstage/commit/27f9061): **BREAKING**: `coreServices.urlReader` now validates that redirect chains are subject to the allow list in `reading.allow` of your app config. If you were relying on redirects that pointed to URLs that were not allowlisted, you will now have to add those to your config as well.

  Example:

  ```diff
   backend:
     reading:
       allow:
         - host: example.com
  +      - host: storage-api.example.com
  ```

##### Patch Changes

- [`3afeab4`](https://github.com/backstage/backstage/commit/3afeab4): Implementing `readTree` for `GoogleGcsReader`
- [`c641c14`](https://github.com/backstage/backstage/commit/c641c14): Wrap some of the action logic with `resolveSafeChildPath` and improve symlink handling when fetching remote and local files
- [`7126bf2`](https://github.com/backstage/backstage/commit/7126bf2): Fixed a spelling mistake in root health service shutdown response.
- [`872eb91`](https://github.com/backstage/backstage/commit/872eb91): Upgrade `zod-to-json-schema` to latest version

#### 0.14.0

##### Minor Changes

- [`fa43826`](https://github.com/backstage/backstage/commit/fa43826): Move `better-sqlite3` from dependencies to peer dependencies
- [`2bc4e02`](https://github.com/backstage/backstage/commit/2bc4e02): **BREAKING** The correct configuration options for Valkey are now being used.

  These changes are **required** to `app-config.yaml`:

  ```diff
  backend:
    cache:
      store: valkey
      connection: ...
      client:
  -     namespace: 'my-app'
  -     keyPrefixSeparator: ':'
  +     keyPrefix: 'my-app:'
  -     clearBatchSize: 1000
  -     useUnlink: false
  ```

  In comparison to Redis, Valkey requires the full `keyPrefix` including the separator to be specified instead of separate `namespace` and `keyPrefixSeparator` options. Also, Valkey does not support the `clearBatchSize` and `useUnlink` options.

##### Patch Changes

- [`37fba1d`](https://github.com/backstage/backstage/commit/37fba1d): Added support for Bitbucket Cloud OAuth. This introduces an alternative authentication method using a workspace OAuth consumer, alongside App Passwords (deprecated) and API tokens. OAuth does not require a bot or service account and avoids token expiry issues.

  **BREAKING CHANGES**

  - **@backstage/integration** (`src/bitbucketCloud/core.ts`)

    - `getBitbucketCloudRequestOptions` now returns a `Promise` and **must** be awaited.

  - **@backstage/plugin-scaffolder-backend-module-bitbucket-cloud** (`src/actions/helpers.ts`)
    - `getBitbucketClient` now returns a `Promise` and **must** be awaited.
    - `getAuthorizationHeader` now returns a `Promise` and **must** be awaited.

  **OAuth usage example**

  ```yaml
  integrations:
    bitbucketCloud:
      - clientId: client-id
        clientSecret: client-secret
  ```

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0
- [`aa79251`](https://github.com/backstage/backstage/commit/aa79251): build(deps): bump `node-forge` from 1.3.1 to 1.3.2
- [`f96edff`](https://github.com/backstage/backstage/commit/f96edff): Allow configuration of the `referrerPolicy`
- [`fb029b6`](https://github.com/backstage/backstage/commit/fb029b6): Updated luxon types
- [`d9759a1`](https://github.com/backstage/backstage/commit/d9759a1): **BREAKING ALPHA**: The old `instanceMetadataService` has been removed from alpha. Please switch over to using the stable `coreServices.rootInstanceMetadata` and related types instead, available from `@backstage/backend-plugin-api`.
- [`847a330`](https://github.com/backstage/backstage/commit/847a330): Fix for `jose` types
- [`25b560e`](https://github.com/backstage/backstage/commit/25b560e): Internal change to support new versions of the `logform` library
- [`2a0c4b0`](https://github.com/backstage/backstage/commit/2a0c4b0): Adds a new experimental `RootSystemMetadataService` for tracking the collection of Backstage instances that may be deployed at any one time. It currently offers a single API, `getInstalledPlugins` that returns a list of installed plugins based on config you have set up in `discovery.endpoints` as well as the plugins installed on the instance you're calling the API with. It does not handle wildcard values or fallback values. The intention is for this plugin to provide plugin authors with a simple interface to fetch a trustworthy list of all installed plugins.
- [`3016a79`](https://github.com/backstage/backstage/commit/3016a79): Updated dependency `@types/archiver` to `^7.0.0`.
- [`42db6a6`](https://github.com/backstage/backstage/commit/42db6a6): Don't warn when parsing `storeOptions` for `memory` cache

### `@backstage/backend-plugin-api` (1.5.0 → [1.8.0](../changelogs/@backstage/backend-plugin-api.md#180))

#### 1.8.0

##### Minor Changes

- [`cc8348e`](https://github.com/backstage/backstage/commit/cc8348e): Added optional `visibilityPermission` field to `ActionsRegistryActionOptions`, allowing actions to declare a `BasicPermission` that controls visibility and access.

  ```typescript
  import { createPermission } from '@backstage/plugin-permission-common';

  const myPermission = createPermission({
    name: 'myPlugin.myAction.use',
    attributes: {},
  });

  actionsRegistry.register({
    name: 'my-action',
    title: 'My Action',
    description: 'An action that requires permission',
    visibilityPermission: myPermission,
    schema: {
      input: z => z.object({ name: z.string() }),
      output: z => z.object({ ok: z.boolean() }),
    },
    action: async ({ input }) => {
      return { output: { ok: true } };
    },
  });
  ```

  Actions without a `visibilityPermission` field continue to work as before.

- [`015668c`](https://github.com/backstage/backstage/commit/015668c): Added `cancelTask` method to the `SchedulerService` interface and implementation, allowing cancellation of currently running scheduled tasks. For global tasks, the database lock is released and a periodic liveness check aborts the running task function. For local tasks, the task's abort signal is triggered directly. A new `POST /.backstage/scheduler/v1/tasks/:id/cancel` endpoint is also available.

##### Patch Changes

- [`dee4283`](https://github.com/backstage/backstage/commit/dee4283): Added `pluginId` field to `ActionsServiceAction` type, populated from the registering plugin's metadata.
- [`1ee5b28`](https://github.com/backstage/backstage/commit/1ee5b28): Adds an alpha `MetricsService` to provide a unified interface for metrics instrumentation across Backstage plugins.
- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

#### 1.7.0

##### Minor Changes

- [`f1d29b4`](https://github.com/backstage/backstage/commit/f1d29b4): Added support for extension point factories. This makes it possible to call `registerExtensionPoint` with a single options argument and provide a factory for the extension point rather than a direct implementation. The factory is passed a context with a `reportModuleStartupFailure` method that makes it possible for plugins to report and attribute startup errors to the module that consumed the extension point.
- [`bb9b471`](https://github.com/backstage/backstage/commit/bb9b471): Plugin IDs that do not match the standard format are deprecated (letters, digits, and dashes only, starting with a letter). Plugin IDs that do no match this format will be rejected in a future release.

  In addition, plugin IDs that don't match the legacy pattern that also allows underscores, with be rejected.

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 1.6.1

##### Patch Changes

- [`ae4dd5d`](https://github.com/backstage/backstage/commit/ae4dd5d): Move some of the symlink resolution to `isChildPath`

#### 1.6.0

##### Minor Changes

- [`2a0c4b0`](https://github.com/backstage/backstage/commit/2a0c4b0): Adds a new experimental `RootSystemMetadataService` for tracking the collection of Backstage instances that may be deployed at any one time. It currently offers a single API, `getInstalledPlugins` that returns a list of installed plugins based on config you have set up in `discovery.endpoints` as well as the plugins installed on the instance you're calling the API with. It does not handle wildcard values or fallback values. The intention is for this plugin to provide plugin authors with a simple interface to fetch a trustworthy list of all installed plugins.

##### Patch Changes

- [`d9759a1`](https://github.com/backstage/backstage/commit/d9759a1): **BREAKING ALPHA**: The old `instanceMetadataService` has been removed from alpha. Please switch over to using the stable `coreServices.rootInstanceMetadata` and related types instead, available from `@backstage/backend-plugin-api`.

### `@backstage/cli` (0.34.5 → [0.36.0](../changelogs/@backstage/cli.md#0360))

#### 0.36.0

##### Minor Changes

- [`d0f4cd2`](https://github.com/backstage/backstage/commit/d0f4cd2): Added new `auth` command group for authenticating the CLI with Backstage instances using OAuth 2.0 with a pre-registered client metadata document. Commands include `login`, `logout`, `list`, `show`, `print-token`, and `select` for managing multiple authenticated instances.
- [`d806b0c`](https://github.com/backstage/backstage/commit/d806b0c): The CLI now automatically discovers CLI modules from the project root's `dependencies` and `devDependencies`. Any installed package with the `cli-module` Backstage role will be loaded automatically without needing to be hardcoded in the CLI itself.

  If no CLI modules are found in the project dependencies, the CLI falls back to the built-in set of modules and prints a deprecation warning. This fallback will be removed in a future release. To prepare for this, add `@backstage/cli-defaults` as a `devDependency` in your root `package.json`:

  ```json
  {
    "devDependencies": {
      "@backstage/cli-defaults": "backstage:^"
    }
  }
  ```

  If you are not using the Backstage Yarn plugin, run the following instead:

  ```sh
  yarn workspace root add --dev @backstage/cli-defaults
  ```

  For fine-grained control you can instead install individual CLI modules:

  ```json
  {
    "devDependencies": {
      "@backstage/cli-module-auth": "backstage:^",
      "@backstage/cli-module-build": "backstage:^",
      "@backstage/cli-module-config": "backstage:^",
      "@backstage/cli-module-github": "backstage:^",
      "@backstage/cli-module-info": "backstage:^",
      "@backstage/cli-module-lint": "backstage:^",
      "@backstage/cli-module-maintenance": "backstage:^",
      "@backstage/cli-module-migrate": "backstage:^",
      "@backstage/cli-module-new": "backstage:^",
      "@backstage/cli-module-test-jest": "backstage:^",
      "@backstage/cli-module-translations": "backstage:^"
    }
  }
  ```

- [`08d9770`](https://github.com/backstage/backstage/commit/08d9770): **BREAKING**: The CLI templates for frontend plugins have been renamed:

  - `new-frontend-plugin` → `frontend-plugin`
  - `new-frontend-plugin-module` → `frontend-plugin-module`
  - `frontend-plugin` (legacy) → `legacy-frontend-plugin`

  To smooth out this breaking change, the CLI now auto-detects which frontend system your app uses based on the dependencies in `packages/app/package.json`. When using the default templates (no explicit `templates` configuration):

  - Apps using `@backstage/frontend-defaults` will see the new frontend system templates (`frontend-plugin`, `frontend-plugin-module`)
  - Apps using `@backstage/app-defaults` will see the legacy template (displayed as `frontend-plugin`)

  This means existing projects that haven't migrated to the new frontend system will continue to create legacy plugins by default, while new projects will get the new frontend system templates. If you have explicit template configuration in your `package.json`, it will be used as-is without any auto-detection.

- [`b36a60d`](https://github.com/backstage/backstage/commit/b36a60d): **BREAKING**: The `migrate package-exports` command has been removed. Use `repo fix` instead.

##### Patch Changes

- [`edf2b77`](https://github.com/backstage/backstage/commit/edf2b77): Added a new `cli-module` template for creating CLI module packages.
- [`246877a`](https://github.com/backstage/backstage/commit/246877a): Updated dependency `bfj` to `^9.0.2`.
- [`0d2d0f2`](https://github.com/backstage/backstage/commit/0d2d0f2): Internal refactor of CLI modularization, moving individual commands to be implemented with cleye.
- [`a4e5902`](https://github.com/backstage/backstage/commit/a4e5902): Internal refactor of the CLI command registration
- [`bba2e49`](https://github.com/backstage/backstage/commit/bba2e49): Internal refactor to use new concurrency utilities from `@backstage/cli-node`.
- [`2fcba39`](https://github.com/backstage/backstage/commit/2fcba39): Internal refactor to move shared utilities into their consuming modules, reducing cross-module dependencies.
- [`c85ac86`](https://github.com/backstage/backstage/commit/c85ac86): Internal refactor to split `loadCliConfig` into separate implementations for the build and config CLI modules, removing a cross-module dependency.
- [`94a885a`](https://github.com/backstage/backstage/commit/94a885a): Added support for the new `cli-module` package role in the build system, ESLint configuration, Jest configuration, and maintenance commands.
- [`fd50cb3`](https://github.com/backstage/backstage/commit/fd50cb3): Added `translations export` and `translations import` commands for managing translation files.

  The `translations export` command discovers all `TranslationRef` definitions across frontend plugin dependencies and exports their default messages as JSON files. The `translations import` command generates `TranslationResource` wiring code from translated JSON files, ready to be plugged into the app.

  Both commands support a `--pattern` option for controlling the message file layout, for example `--pattern '{lang}/{id}.json'` for language-based directory grouping.

- [`0be3eab`](https://github.com/backstage/backstage/commit/0be3eab): Migrated CLI plugin modules to use `createCliModule` from `@backstage/cli-node`.
- [`61cb976`](https://github.com/backstage/backstage/commit/61cb976): Migrated internal versioning utilities to use `@backstage/cli-node` instead of a local implementation.
- [`6738cf0`](https://github.com/backstage/backstage/commit/6738cf0): build(deps): bump `minimatch` from 9.0.5 to 10.2.1
- [`ff4a45a`](https://github.com/backstage/backstage/commit/ff4a45a): Migrated remaining CLI command handlers from `commander` to `cleye` for argument parsing. Several camelCase CLI flags have been deprecated in favor of their kebab-case equivalents (e.g. `--successCache` → `--success-cache`). The old camelCase forms still work but will now log a deprecation warning. Please update any scripts or CI configurations to use the kebab-case versions.
- [`70fc178`](https://github.com/backstage/backstage/commit/70fc178): Migrated from deprecated `findPaths` to `targetPaths` and `findOwnPaths` from `@backstage/cli-common`.
- [`825c81d`](https://github.com/backstage/backstage/commit/825c81d): Internal refactor of CLI command modules.
- [`ea90ab0`](https://github.com/backstage/backstage/commit/ea90ab0): The built-in `yarn new` templates have been moved to `@backstage/cli-module-new`. Existing references to `@backstage/cli/templates/*` in your root `package.json` will continue to work through a backwards compatibility rewrite in the `new` command.
- [`ebeb0d4`](https://github.com/backstage/backstage/commit/ebeb0d4): Updated the new frontend plugin template to use `@backstage/frontend-dev-utils` in its `dev/` entry point instead of wiring `createApp` manually. Generated plugins now get the same dev app helper setup as the built-in examples.
- [`971cc94`](https://github.com/backstage/backstage/commit/971cc94): The `new` command now prompts for the plugin package name when creating plugin modules, in order to properly populate the `package.json` file.
- [`de62a9d`](https://github.com/backstage/backstage/commit/de62a9d): Upgraded `commander` dependency from `^12.0.0` to `^14.0.3` across all CLI packages.
- [`092b41f`](https://github.com/backstage/backstage/commit/092b41f): Updated dependency `webpack` to `~5.105.0`.
- [`4a75544`](https://github.com/backstage/backstage/commit/4a75544): Updated dependency `react-refresh` to `^0.18.0`.
- [`a9d23c4`](https://github.com/backstage/backstage/commit/a9d23c4): Properly support `package.json` `workspaces` field

#### 0.35.4

##### Patch Changes

- [`cfd8103`](https://github.com/backstage/backstage/commit/cfd8103): Updated catalog provider module template to use stable catalog extension points from `@backstage/plugin-catalog-node` instead of alpha exports.
- [`20131c5`](https://github.com/backstage/backstage/commit/20131c5): Added support for CSS exports in package builds. When a package declares a CSS file in its `exports` field (e.g., `"./styles.css": "./src/styles.css"`), the CLI will automatically bundle it during `backstage-cli package build`, resolving any `@import` statements. The export path is rewritten from `src/` to `dist/` at publish time.

  Fixed `backstage-cli repo fix` to not add `typesVersions` entries for non-script exports like CSS files.

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`6ce4a13`](https://github.com/backstage/backstage/commit/6ce4a13): Removed `/alpha` from `scaffolderActionsExtensionPoint` import
- [`fdbd404`](https://github.com/backstage/backstage/commit/fdbd404): Removed the `EXPERIMENTAL_MODULE_FEDERATION` environment variable flag, making module federation host support always available during `package start`. The host shared dependencies are now managed through `@backstage/module-federation-common` and injected as a versioned runtime script at build time.
- [`fdbd404`](https://github.com/backstage/backstage/commit/fdbd404): Updated `@module-federation/enhanced`, `@module-federation/runtime`, and `@module-federation/sdk` dependencies from `^0.9.0` to `^0.21.6`.
- [`4fc7bf0`](https://github.com/backstage/backstage/commit/4fc7bf0): Bump to tar v7
- [`5e3ef57`](https://github.com/backstage/backstage/commit/5e3ef57): Added support for the new `peerModules` metadata field in `package.json`. This field allows plugin packages to declare modules that should be installed alongside them for cross-plugin integrations. The field is validated by `backstage-cli repo fix --publish`.
- [`122d39c`](https://github.com/backstage/backstage/commit/122d39c): Completely removed support for the deprecated `app.experimental.packages` configuration. Replace existing usage directly with `app.packages`.
- [`73351c2`](https://github.com/backstage/backstage/commit/73351c2): Updated dependency `webpack` to `~5.104.0`.
- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 0.35.2

##### Patch Changes

- [`320c6a9`](https://github.com/backstage/backstage/commit/320c6a9): Bump `@swc/core` to support `ES2023` and `ES2024`
- [`c0d7bf6`](https://github.com/backstage/backstage/commit/c0d7bf6): Added `--include` and `--format` options to `backstage-cli info` command for including additional packages via glob patterns and outputting as JSON or Text.
- [`f6a5d2f`](https://github.com/backstage/backstage/commit/f6a5d2f): Fixed CSS module class name collisions when running multiple versions of packages simultaneously by using content-based hashing for class name generation.
- [`140cbc2`](https://github.com/backstage/backstage/commit/140cbc2): Added `@backstage/backend-test-utils` to backend package templates.
- [`4eeba9e`](https://github.com/backstage/backstage/commit/4eeba9e): Upgrade `zod-validation-error` to version 4
- [`9ee5996`](https://github.com/backstage/backstage/commit/9ee5996): Bump minimum required `@swc/core` to avoid transpilation bug

#### 0.35.0

##### Minor Changes

- [`f6f22a9`](https://github.com/backstage/backstage/commit/f6f22a9): Provide `--no-node-snapshot` by default when running the `package start` or `package test`. You can disable this behavior by providing `NODE_OPTIONS='--node-snapshot'`.
- [`f8dff94`](https://github.com/backstage/backstage/commit/f8dff94): Switched the default module resolution to `bundler` and the `module` setting to `ES2020`.

  You may need to bump some dependencies as part of this change and fix imports in code. The most common source of this is that type checking will now consider the `exports` field in `package.json` when resolving imports. This in turn can break older versions of packages that had incompatible `exports` fields. Generally these issues will have already been fixed in the upstream packages.

  You might be tempted to use `--skipLibCheck` to hide issues due to this change, but it will weaken the type safety of your project. If you run into a large number of issues and want to keep the old behavior, you can reset the `moduleResolution` and `module` settings your own `tsconfig.json` file to `node` and `ESNext` respectively. But keep in mind that the `node` option will be removed in future versions of TypeScript.

  A future version of Backstage will make these new settings mandatory, as we move to rely on the `exports` field for type resolution in packages, rather than the `typesVersions` field.

- [`cd0b8a1`](https://github.com/backstage/backstage/commit/cd0b8a1): **BREAKING**: `jest` is now a peer dependency. If you run tests using Backstage CLI, you must add Jest and its environment dependencies as `devDependencies` in your project.

  You can choose to install either Jest 29 or Jest 30. The built-in Jest version before this change was Jest 29, however, we recommend that you switch to Jest 30. Upgrading will solve the `Could not parse CSS stylesheet` errors, allow you to use MSW v2 in web packages, and ensure that you remain compatible with future versions of the Backstage CLI. Support for Jest 29 is temporary, with the purpose of allowing you to upgrade at your own pace, but it will eventually be removed.

  - **Jest 29**: Install `jest@^29` and `jest-environment-jsdom@^29`. No migration needed, but you may see `Could not parse CSS stylesheet` warnings/errors when testing components from `@backstage/ui` or other packages using CSS `@layer` declarations.
  - **Jest 30**: Install `jest@^30`, `@jest/environment-jsdom-abstract@^30`, and `jsdom@^27`. Fixes the stylesheet parsing warnings/errors, but requires migration steps.

  See the [Jest 30 migration guide](https://backstage.io/docs/tutorials/jest30-migration) for detailed migration instructions.

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0
- [`e7db290`](https://github.com/backstage/backstage/commit/e7db290): Add missing peer/dev dependencies to the frontend plugin template.

  `react-dom` was not declared as a peer dependency, causing module resolution
  errors when generating plugins outside a Backstage monorepo. This adds
  `react-dom` to `peerDependencies` (for consuming apps) and `devDependencies`
  (for local development). `react-router-dom` is also added to `peerDependencies` (for consuming apps) and `devDependencies`
  to support routing during plugin development.

  Fixes:

  - Module not found: Can't resolve 'react-dom'
  - Module not found: Can't resolve 'react-router-dom'

- [`1226647`](https://github.com/backstage/backstage/commit/1226647): Updated dependency `esbuild` to `^0.27.0`.
- [`f89a074`](https://github.com/backstage/backstage/commit/f89a074): Updated dependency `@pmmmwh/react-refresh-webpack-plugin` to `^0.6.0`.
- [`2b81751`](https://github.com/backstage/backstage/commit/2b81751): Updated dependency `webpack` to `~5.103.0`.
- [`fafd9e1`](https://github.com/backstage/backstage/commit/fafd9e1): Fixed internal usage of `yargs`.
- [`c8c2329`](https://github.com/backstage/backstage/commit/c8c2329): Add proxy configuration from env-vars to create-app tasks
- [`2bae83a`](https://github.com/backstage/backstage/commit/2bae83a): Switched compilation target to ES2022 in order to match the new set of supported Node.js versions, which are 22 and 24.

  The TypeScript compilation target has been set to ES2022, because setting it to a higher target will break projects on older TypeScript versions. If you use a newer TypeScript version in your own project, you can bump `compilerOptions.target` to ES2023 or ES2024 in your own `tsconfig.json` file.

- [`7fbac5c`](https://github.com/backstage/backstage/commit/7fbac5c): Updated to use new utilities from `@backstage/cli-common`.
- [`2bae83a`](https://github.com/backstage/backstage/commit/2bae83a): Bumped dev dependencies `@types/node`

### `@backstage/create-app` (0.7.6 → [0.8.1](../changelogs/@backstage/create-app.md#081))

#### 0.8.0

##### Minor Changes

- [`a6735c3`](https://github.com/backstage/backstage/commit/a6735c3): **BREAKING**: The new frontend system is now the default template when creating a new Backstage app. The previous `--next` flag has been replaced with a `--legacy` flag that can be used to create an app using the old frontend system instead.

##### Patch Changes

- [`d806b0c`](https://github.com/backstage/backstage/commit/d806b0c): The create-app templates now include `@backstage/cli-defaults` as a `devDependency`, enabling the CLI's automatic module discovery for newly created projects.
- [`d14b6e0`](https://github.com/backstage/backstage/commit/d14b6e0): **BREAKING**: Migrated `MembersListCard`, `OwnershipCard`, and `CatalogGraphCard` to use BUI card primitives via `EntityInfoCard`.

  - `OwnershipCard`: Removed `variant` and `maxScrollHeight` props. Card height and scrolling are now controlled by the parent container — the card fills its container and the body scrolls automatically when content overflows.
  - `CatalogGraphCard`: Removed `variant` prop.
  - `MembersListCard`: Translation keys `subtitle`, `paginationLabel`, `aggregateMembersToggle.directMembers`, `aggregateMembersToggle.aggregatedMembers`, and `aggregateMembersToggle.ariaLabel` have been removed. The `title` key now includes `{{groupName}}`. New keys added: `cardLabel`, `noSearchResult`, `aggregateMembersToggle.label`.
  - `OwnershipCard`: Translation keys `aggregateRelationsToggle.directRelations`, `aggregateRelationsToggle.aggregatedRelations`, and `aggregateRelationsToggle.ariaLabel` have been removed. New key added: `aggregateRelationsToggle.label`.
  - Removed `MemberComponentClassKey` export, and `root` and `cardContent` from `MembersListCardClassKey`, `card` from `OwnershipCardClassKey`, and `card` from `CatalogGraphCardClassKey`.

  **Migration:**

  ```diff
  - <EntityOwnershipCard variant="gridItem" />
  + <EntityOwnershipCard />
  ```

  ```diff
  - <EntityCatalogGraphCard variant="gridItem" height={400} />
  + <EntityCatalogGraphCard height={400} />
  ```

- [`70fc178`](https://github.com/backstage/backstage/commit/70fc178): Migrated from deprecated `findPaths` to `targetPaths` and `findOwnPaths` from `@backstage/cli-common`.
- [`ea90ab0`](https://github.com/backstage/backstage/commit/ea90ab0): Updated the `next-app` template to reference `@backstage/cli-module-new/templates/*` instead of `@backstage/cli/templates/*` for the built-in `yarn new` templates.
- [`de62a9d`](https://github.com/backstage/backstage/commit/de62a9d): Upgraded `commander` dependency from `^12.0.0` to `^14.0.3` across all CLI packages.
- [`a9d23c4`](https://github.com/backstage/backstage/commit/a9d23c4): Properly support `package.json` `workspaces` field
- [`ebd4630`](https://github.com/backstage/backstage/commit/ebd4630): Replace deprecated `workspaces.packages` with `workspaces` in `package.json`

  This change is **not** required, but you can edit your main `package.json`, to fit the more modern & more common pattern:

  ```diff
  -  "workspaces": {
  -    "packages": [
     "workspaces": [
       "packages/*",
       "plugins/*"
  -     ]
  -   },
    ],
  ```

#### 0.7.9

##### Patch Changes

- [`40f2720`](https://github.com/backstage/backstage/commit/40f2720): Updated to include the missing core plugins in the template used with the `--next` flag. Also updated `react-router*` versions and added Jest 30-related dependencies. Finally, moved the order of `@playwright/test` so it won't trigger a file change during the creation process.
- [`1ea737c`](https://github.com/backstage/backstage/commit/1ea737c): Bumped create-app version.
- [`7c41134`](https://github.com/backstage/backstage/commit/7c41134): Bumped create-app version.
- [`65ba820`](https://github.com/backstage/backstage/commit/65ba820): Updated the app template sidebar to use the new `NavContentBlueprint` API for page-based navigation.
- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`c38b74d`](https://github.com/backstage/backstage/commit/c38b74d): Switched `next-app` template to use blueprint from `@backstage/plugin-app-react`.

#### 0.7.8

##### Patch Changes

- [`fea3e39`](https://github.com/backstage/backstage/commit/fea3e39): Bumped create-app version.
- [`9f1ee3e`](https://github.com/backstage/backstage/commit/9f1ee3e): Bumped create-app version.
- [`880310b`](https://github.com/backstage/backstage/commit/880310b): Bumped create-app version.
- [`f1fe6fe`](https://github.com/backstage/backstage/commit/f1fe6fe): Updated Dockerfile to use Node 24 and Debian Trixie

#### 0.7.7

##### Patch Changes

- [`336db00`](https://github.com/backstage/backstage/commit/336db00): Bumped create-app version.
- [`2bae83a`](https://github.com/backstage/backstage/commit/2bae83a): Updated engines to support Node 22 or 24
- [`c8c2329`](https://github.com/backstage/backstage/commit/c8c2329): Add proxy configuration from env-vars to create-app tasks
- [`2bae83a`](https://github.com/backstage/backstage/commit/2bae83a): Bumped dev dependencies `@types/node`

### `@backstage/frontend-app-api` (0.13.2 → [0.16.1](../changelogs/@backstage/frontend-app-api.md#0161))

#### 0.16.0

##### Minor Changes

- [`92af1ae`](https://github.com/backstage/backstage/commit/92af1ae): **BREAKING**: Removed the `allowUnknownExtensionConfig` option from `createSpecializedApp`. This flag had no effect and was a no-op, so no behavioral changes are expected.

##### Patch Changes

- [`d911b72`](https://github.com/backstage/backstage/commit/d911b72): Frontend apps now respect an explicit `pluginId` on `ApiRef`s when deciding which plugin owns an API factory.
- [`0452d02`](https://github.com/backstage/backstage/commit/0452d02): Add optional `description` field to plugin-level feature flags.
- [`5fd78ba`](https://github.com/backstage/backstage/commit/5fd78ba): Removed `@backstage/core-plugin-api` leakage from the public API surface. All types such as `ApiHolder` and `ConfigApi` are now imported from `@backstage/frontend-plugin-api`.
- [`dab6c46`](https://github.com/backstage/backstage/commit/dab6c46): Added the `ExtensionFactoryMiddleware` type as a public export.
- [`3f36ce1`](https://github.com/backstage/backstage/commit/3f36ce1): Clarified the `IconElement` sizing contract for the new frontend system and aligned legacy system icon rendering with the new icon API.
- [`5b160f9`](https://github.com/backstage/backstage/commit/5b160f9): Added `prepareSpecializedApp` for two-phase app wiring so apps can render a bootstrap tree before full app finalization. The bootstrap phase now supports deferred `app/root.elements`, predicate-gated APIs, reusable `sessionState`, and warnings for bootstrap-visible predicates or bootstrap code that accessed APIs that only became available after finalization. Utility APIs that are materialized during bootstrap are also frozen for the lifetime of the app instance, causing deferred overrides of those APIs to be ignored and reported as app errors.
- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

#### 0.15.0

##### Minor Changes

- [`55b2ef6`](https://github.com/backstage/backstage/commit/55b2ef6): **BREAKING**: Updated the behavior of the new API override logic to reject the override and block app startup instead of just logging a deprecation warning.

##### Patch Changes

- [`7edb810`](https://github.com/backstage/backstage/commit/7edb810): Implemented support for the `internal` extension input option.
- [`492503a`](https://github.com/backstage/backstage/commit/492503a): Updated error reporting and app tree resolution logic to attribute errors to the correct extension and allow app startup to proceed more optimistically:

  - If an attachment fails to provide the required input data, the error is now attributed to the attachment rather than the parent extension.
  - Singleton extension inputs will now only forward attachment errors if the input is required.
  - Array extension inputs will now filter out failed attachments instead of failing the entire app tree resolution.

- [`ef6916e`](https://github.com/backstage/backstage/commit/ef6916e): Added `IconElement` type as a replacement for the deprecated `IconComponent`. The `IconsApi` now has a new `icon()` method that returns `IconElement`, while the existing `getIcon()` method is deprecated. The `IconBundleBlueprint` now accepts both `IconComponent` and `IconElement` values.
- [`122d39c`](https://github.com/backstage/backstage/commit/122d39c): Completely removed support for the deprecated `app.experimental.packages` configuration. Replace existing usage directly with `app.packages`.
- [`9554c36`](https://github.com/backstage/backstage/commit/9554c36): **DEPRECATED**: Deprecated support for multiple attachment points.
- [`53b6549`](https://github.com/backstage/backstage/commit/53b6549): Plugins in the new frontend system now have a `pluginId` field rather than `id` to better align with naming conventions used throughout the frontend and backend systems. The old field is still present but marked as deprecated. All internal code has been updated to prefer `pluginId` while maintaining backward compatibility by falling back to `id` when needed.
- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.
- [`09032d7`](https://github.com/backstage/backstage/commit/09032d7): Internal update to simplify testing utility implementations.
- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 0.14.0

##### Minor Changes

- [`3bd2a1a`](https://github.com/backstage/backstage/commit/3bd2a1a): BREAKING: The ability for plugins to override APIs has been restricted to only allow overrides of APIs within the same plugin. For example, a plugin can no longer override any of the core APIs provided by the `app` plugin, this must be done with an `app` module instead.

### `@backstage/frontend-defaults` (0.3.3 → [0.5.0](../changelogs/@backstage/frontend-defaults.md#050))

#### 0.5.0

##### Minor Changes

- [`92af1ae`](https://github.com/backstage/backstage/commit/92af1ae): **BREAKING**: Removed the `allowUnknownExtensionConfig` option from `createApp`. This flag had no effect and was a no-op, so no behavioral changes are expected.
- [`33de79d`](https://github.com/backstage/backstage/commit/33de79d): **BREAKING**: Removed the deprecated `createPublicSignInApp` function. Use `createApp` from `@backstage/frontend-defaults` with `appModulePublicSignIn` from `@backstage/plugin-app/alpha` instead.

##### Patch Changes

- [`5b160f9`](https://github.com/backstage/backstage/commit/5b160f9): Updated `createApp` to use the phased `prepareSpecializedApp` flow, allowing apps to render a bootstrap tree before the full app is finalized.

#### 0.4.0

##### Minor Changes

- [`55b2ef6`](https://github.com/backstage/backstage/commit/55b2ef6): **BREAKING**: The `API_FACTORY_CONFLICT` warning is now treated as an error and will prevent the app from starting.

##### Patch Changes

- [`122d39c`](https://github.com/backstage/backstage/commit/122d39c): Completely removed support for the deprecated `app.experimental.packages` configuration. Replace existing usage directly with `app.packages`.
- [`c38b74d`](https://github.com/backstage/backstage/commit/c38b74d): Dependency update for tests.
- [`53b6549`](https://github.com/backstage/backstage/commit/53b6549): Plugins in the new frontend system now have a `pluginId` field rather than `id` to better align with naming conventions used throughout the frontend and backend systems. The old field is still present but marked as deprecated. All internal code has been updated to prefer `pluginId` while maintaining backward compatibility by falling back to `id` when needed.
- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.

### `@backstage/frontend-plugin-api` (0.13.1 → [0.15.1](../changelogs/@backstage/frontend-plugin-api.md#0151))

#### 0.15.0

##### Minor Changes

- [`5fd78ba`](https://github.com/backstage/backstage/commit/5fd78ba): Renamed `PluginOptions` to `CreateFrontendPluginOptions` and deprecated the old name. Removed `ResolvedExtensionInputs` from the main entry point; it is still available as an inline type in extension factory signatures.
- [`72991a5`](https://github.com/backstage/backstage/commit/72991a5): Removed the `ResolvedExtensionInput` and `ExtensionDataRefToValue` helper types from the public API surface to reduce top-level API clutter. These types were internal plumbing that are not needed by plugin authors. If you were relying on `ResolvedExtensionInput`, use the `ResolvedExtensionInputs` type instead, which maps a full set of inputs. If you were using `ExtensionDataRefToValue`, replace it with `ExtensionDataValue` combined with inferred types from your `ExtensionDataRef`.
- [`9508514`](https://github.com/backstage/backstage/commit/9508514): **BREAKING**: Promoted `PluginWrapperApi`, `pluginWrapperApiRef`, `PluginWrapperBlueprint`, and the new `PluginWrapperDefinition` type from `@alpha` to `@public`. These are now available from the main package entry point rather than only through `/alpha`.

  The `PluginWrapperApi` type now has a required `getRootWrapper()` method that returns a root wrapper component. The `pluginWrapperApiRef` ID changed from `core.plugin-wrapper.alpha` to `core.plugin-wrapper`.

  The `PluginWrapperBlueprint` now accepts `PluginWrapperDefinition` as the loader return type, which supports an optional `useWrapperValue` hook that allows sharing state between wrapper instances.

- [`6573901`](https://github.com/backstage/backstage/commit/6573901): **BREAKING**: Removed the deprecated `AnyExtensionDataRef` type. Use `ExtensionDataRef` without type parameters instead.
- [`a9440f0`](https://github.com/backstage/backstage/commit/a9440f0): **BREAKING**: Simplified the `ExtensionAttachTo` type to only support a single attachment target. The array form for attaching to multiple extension points has been removed. Also removed the deprecated `ExtensionAttachToSpec` type alias.

##### Patch Changes

- [`e26e3de`](https://github.com/backstage/backstage/commit/e26e3de): The `icon` field on `AuthProviderInfo` now accepts `IconElement` in addition to `IconComponent`, letting you pass `<MyIcon />` instead of `MyIcon`.
- [`eea95b8`](https://github.com/backstage/backstage/commit/eea95b8): Deprecated `AlertApi` in favor of the new `ToastApi`.

  `AlertApi` is now deprecated and will be removed in a future release. Please migrate to `ToastApi` which provides richer notification features.

  **Why migrate?**

  `ToastApi` offers enhanced capabilities over `AlertApi`:

  - **Title and Description**: Display a prominent title with optional description text
  - **Action Links**: Include clickable links within notifications
  - **Status Variants**: Support for neutral, info, success, warning, and danger statuses
  - **Per-toast Timeout**: Control auto-dismiss timing for each notification individually
  - **Programmatic Dismiss**: Close notifications via the `close()` handle returned from `post()`

  **Migration Guide**

  | AlertApi                                     | ToastApi                                   |
  | -------------------------------------------- | ------------------------------------------ |
  | `message: string`                            | `title: ReactNode`                         |
  | `severity: 'error'`                          | `status: 'danger'`                         |
  | `severity: 'success' \| 'info' \| 'warning'` | `status: 'success' \| 'info' \| 'warning'` |
  | `display: 'transient'`                       | `timeout: 5000` (or custom ms)             |
  | `display: 'permanent'`                       | omit `timeout`                             |
  | `post()` returns `void`                      | `post()` returns `{ close(): void }`       |

  **Example Migration**

  ```typescript
  // Before (AlertApi)
  import { alertApiRef, useApi } from '@backstage/core-plugin-api';

  const alertApi = useApi(alertApiRef);
  alertApi.post({
    message: 'Entity saved successfully',
    severity: 'success',
    display: 'transient',
  });

  // After (ToastApi)
  import { toastApiRef, useApi } from '@backstage/frontend-plugin-api';

  const toastApi = useApi(toastApiRef);
  const toast = toastApi.post({
    title: 'Entity saved successfully',
    status: 'success',
    timeout: 5000,
  });
  // Later: toast.close() to dismiss programmatically
  ```

  **Note**: During the migration period, both APIs work simultaneously. The `ToastDisplay` component subscribes to both `AlertApi` and `ToastApi`, so existing code continues to work while you migrate incrementally.

- [`8a3a906`](https://github.com/backstage/backstage/commit/8a3a906): Deprecated `NavItemBlueprint`. Nav items are now automatically inferred from `PageBlueprint` extensions based on their `title` and `icon` params.
- [`b15a685`](https://github.com/backstage/backstage/commit/b15a685): Deprecated `withApis`, use the `withApis` export from `@backstage/core-compat-api` instead.
- [`0452d02`](https://github.com/backstage/backstage/commit/0452d02): Add optional `description` field to plugin-level feature flags.
- [`1bec049`](https://github.com/backstage/backstage/commit/1bec049): Fixed inconsistent `JSX.Element` type reference in the `DialogApiDialog.update` method signature.
- [`9c81af9`](https://github.com/backstage/backstage/commit/9c81af9): Made the `pluginId` property optional in the `FrontendFeature` type, allowing plugins published against older versions of the framework to be used without type errors.
- [`2c383b5`](https://github.com/backstage/backstage/commit/2c383b5): Deprecated `AnalyticsImplementationBlueprint` and `AnalyticsImplementationFactory` in favor of the exports from `@backstage/plugin-app-react`.
- [`dab6c46`](https://github.com/backstage/backstage/commit/dab6c46): Deprecated the `ExtensionFactoryMiddleware` type, which has been moved to `@backstage/frontend-app-api`.
- [`aa29b50`](https://github.com/backstage/backstage/commit/aa29b50): Pages created with `PageBlueprint` now render the plugin header by default in the new frontend system.
- [`3f36ce1`](https://github.com/backstage/backstage/commit/3f36ce1): Clarified the `IconElement` sizing contract for the new frontend system and aligned legacy system icon rendering with the new icon API.
- [`cc459f7`](https://github.com/backstage/backstage/commit/cc459f7): Added a builder form for `createApiRef` in the new frontend system and deprecated the direct `createApiRef({ ... })` call in favor of `createApiRef().with({ ... })`. The builder form now also preserves literal API ref IDs in the resulting `ApiRef` type.

  The `createApiRef().with({ ... })` form can also use an explicit `pluginId` to declare API ownership without encoding the plugin ID into the API ref ID, while keeping that metadata internal to runtime handling.

- [`5b160f9`](https://github.com/backstage/backstage/commit/5b160f9): Added support for `if` predicates on `createFrontendPlugin` and `createFrontendModule`, applying shared conditions to every extension in the feature. Plugin and extension overrides can now also replace or remove existing `if` predicates.
- [`d0206c4`](https://github.com/backstage/backstage/commit/d0206c4): Removed the deprecated `defaultPath` migration helper from `PageBlueprint` params.
- [`edb872c`](https://github.com/backstage/backstage/commit/edb872c): Renamed the `PageTab` type to `PageLayoutTab`. The old `PageTab` name is now a deprecated type alias.
- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.
- [`7e743f4`](https://github.com/backstage/backstage/commit/7e743f4): Introduced a new `ToastApi` for displaying rich toast notifications in the new frontend system.

  The new `ToastApi` provides enhanced notification capabilities compared to the existing `AlertApi`:

  - **Title and Description**: Toasts support both a title and an optional description
  - **Custom Timeouts**: Each toast can specify its own timeout duration
  - **Links**: Toasts can include action links
  - **Status Variants**: Support for neutral, info, success, warning, and danger statuses
  - **Programmatic Dismiss**: Toasts can be dismissed programmatically using the `close()` handle returned from `post()`

  **Usage:**

  ```typescript
  import { toastApiRef, useApi } from '@backstage/frontend-plugin-api';

  const toastApi = useApi(toastApiRef);

  // Full-featured toast
  toastApi.post({
    title: 'Entity saved',
    description: 'Your changes have been saved successfully.',
    status: 'success',
    timeout: 5000,
    links: [{ label: 'View entity', href: '/catalog/entity' }],
  });

  // Programmatic dismiss
  const { close } = toastApi.post({ title: 'Uploading...', status: 'info' });
  // Later...
  close();
  ```

  The `ToastDisplay` component subscribes to both `ToastApi` and `AlertApi`, providing a migration path where both systems work side by side until `AlertApi` is fully deprecated.

- [`fe848e0`](https://github.com/backstage/backstage/commit/fe848e0): Changed `useApiHolder` to return an empty `ApiHolder` instead of throwing when used outside of an API context.

#### 0.14.0

##### Minor Changes

- [`ef6916e`](https://github.com/backstage/backstage/commit/ef6916e): Added `IconElement` type as a replacement for the deprecated `IconComponent`. The `IconsApi` now has a new `icon()` method that returns `IconElement`, while the existing `getIcon()` method is deprecated. The `IconBundleBlueprint` now accepts both `IconComponent` and `IconElement` values.
- [`bb9b471`](https://github.com/backstage/backstage/commit/bb9b471): Plugin IDs that do not match the standard format are deprecated (letters, digits, and dashes only, starting with a letter). Plugin IDs that do no match this format will be rejected in a future release.
- [`ef6916e`](https://github.com/backstage/backstage/commit/ef6916e): Added `SubPageBlueprint` for creating sub-page tabs, `PluginHeaderActionBlueprint` and `PluginHeaderActionsApi` for plugin-scoped header actions, and `PageLayout` as a swappable component. The `PageBlueprint` now supports sub-pages with tabbed navigation, page title, icon, and header actions. Plugins can now specify a `title` and `icon` in `createFrontendPlugin`.
- [`c38b74d`](https://github.com/backstage/backstage/commit/c38b74d): **BREAKING**: The following blueprints have been removed and are now only available from `@backstage/plugin-app-react`:

  - `IconBundleBlueprint`
  - `NavContentBlueprint`
  - `RouterBlueprint`
  - `SignInPageBlueprint`
  - `SwappableComponentBlueprint`
  - `ThemeBlueprint`
  - `TranslationBlueprint`

- [`10ebed4`](https://github.com/backstage/backstage/commit/10ebed4): **BREAKING**: Removed type support for multiple attachment points in the `ExtensionDefinitionAttachTo` type. Extensions can no longer specify an array of attachment points in the `attachTo` property.

  The runtime still supports multiple attachment points for backward compatibility with existing compiled code, but new code will receive type errors if attempting to use this pattern.

  Extensions that previously used multiple attachment points should migrate to using a Utility API pattern instead. See the [Sharing Extensions Across Multiple Locations](https://backstage.io/docs/frontend-system/architecture/27-sharing-extensions) guide for the recommended approach.

##### Patch Changes

- [`7edb810`](https://github.com/backstage/backstage/commit/7edb810): Added a new `internal` option to `createExtensionInput` that marks the input as only allowing attachments from the same plugin.
- [`9554c36`](https://github.com/backstage/backstage/commit/9554c36): **DEPRECATED**: Multiple attachment points for extensions have been deprecated. The functionality continues to work for backward compatibility, but will log a deprecation warning and be removed in a future release.

  Extensions using array attachment points should migrate to using Utility APIs instead. See the [Sharing Extensions Across Multiple Locations](https://backstage.io/docs/frontend-system/architecture/27-sharing-extensions) guide for the recommended pattern.

- [`53b6549`](https://github.com/backstage/backstage/commit/53b6549): Plugins in the new frontend system now have a `pluginId` field rather than `id` to better align with naming conventions used throughout the frontend and backend systems. The old field is still present but marked as deprecated. All internal code has been updated to prefer `pluginId` while maintaining backward compatibility by falling back to `id` when needed.
- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.
- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 0.13.3

##### Patch Changes

- [`3bd2a1a`](https://github.com/backstage/backstage/commit/3bd2a1a): Updated documentation for `createApiRef` to clarify the role of the ID in specifying the owning plugin of an API.
- [`9ccf84e`](https://github.com/backstage/backstage/commit/9ccf84e): The following blueprints are being restricted to only be used in app plugin overrides and modules. They are being moved to the `@backstage/plugin-app-react` package and have been deprecated:

  - `AppRootWrapperBlueprint`
  - `IconBundleBlueprint`
  - `NavContentBlueprint`
  - `RouterBlueprint`
  - `SignInPageBlueprint`
  - `SwappableComponentBlueprint`
  - `ThemeBlueprint`
  - `TranslationBlueprint`

- [`4554a4e`](https://github.com/backstage/backstage/commit/4554a4e): Added an alpha `PluginWrapperBlueprint` exported from `@backstage/frontend-plugin-api/alpha`, which can install components that will wrap all plugin elements.
- [`872eb91`](https://github.com/backstage/backstage/commit/872eb91): Upgrade `zod-to-json-schema` to latest version

#### 0.13.2

##### Patch Changes

- [`75683ed`](https://github.com/backstage/backstage/commit/75683ed): Added a new `errorPresentation` prop to `ExtensionBoundary` to control how errors are presented to the user. The default is `'error-display'`, which is the current behavior of showing the error in the `ErrorDisplay` component. The new option is `'error-api'`, posts errors to the `ErrorApi` and does not allow retries.

  The `AppRootElementBlueprint` now wraps its element in an `ErrorBoundary` using the new `'error-api'` presentation mode.

- [`0bc1ce9`](https://github.com/backstage/backstage/commit/0bc1ce9): Fixed a versioning conflict that could result in a `.withContext` is not a function error.
- [`f3f84f1`](https://github.com/backstage/backstage/commit/f3f84f1): Made the return type of `.withOverrides` to be simplified.
- [`97cd16f`](https://github.com/backstage/backstage/commit/97cd16f): Reversed the relationship between the old `@backstage/core-plugin-api` and the new `@backstage/frontend-plugin-api`. Previously, the a lot of API definitions and utilities where defined in the old and re-exported from the old, but this change flips that around so that they now reside in the new package and are re-exported from the old. The external API of both packages remain the same, but this is a step towards being able to add further compatibility with the new frontend system built into the old.
- [`9b8bde4`](https://github.com/backstage/backstage/commit/9b8bde4): Removed unnecessary dependencies on `@backstage/core-components`, `@backstage/config`, `@material-ui/core`, and `lodash`.

### `@backstage/frontend-test-utils` (0.4.1 → [0.5.1](../changelogs/@backstage/frontend-test-utils.md#051))

#### 0.5.1

##### Patch Changes

- [`b56f573`](https://github.com/backstage/backstage/commit/b56f573): Deprecated standalone mock API exports in favor of the `mockApis` namespace. This includes the mock classes (`MockAlertApi`, `MockAnalyticsApi`, `MockConfigApi`, `MockErrorApi`, `MockFetchApi`, `MockFeatureFlagsApi`, `MockPermissionApi`, `MockStorageApi`, `MockTranslationApi`), their option types (`MockErrorApiOptions`, `MockFeatureFlagsApiOptions`), and the `ErrorWithContext` type. `MockFetchApiOptions` is kept as a non-deprecated export. Use the `mockApis` namespace instead, for example `mockApis.alert()` or `mockApis.alert.mock()`.
- [`479282f`](https://github.com/backstage/backstage/commit/479282f): Fixed type inference of `TestApiPair` when using tuple syntax by wrapping `MockWithApiFactory` in `NoInfer`.
- [`8e09233`](https://github.com/backstage/backstage/commit/8e09233): Added a missing dependency on `@backstage/filter-predicates` to `@backstage/frontend-test-utils`. This fixes package metadata for consumers using the frontend test app helpers with predicate-based behavior.
- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.
- [`909c742`](https://github.com/backstage/backstage/commit/909c742): Switched `MockTranslationApi` and related test utility imports from `@backstage/core-plugin-api/alpha` to the stable `@backstage/frontend-plugin-api` export. The `TranslationApi` type in the API report is now sourced from a single package. This has no effect on runtime behavior.

#### 0.5.0

##### Minor Changes

- [`09a6aad`](https://github.com/backstage/backstage/commit/09a6aad): **BREAKING**: Removed the `TestApiRegistry` class, use `TestApiProvider` directly instead, storing reused APIs in a variable, e.g. `const apis = [...] as const`.
- [`d2ac2ec`](https://github.com/backstage/backstage/commit/d2ac2ec): Added `MockAlertApi` and `MockFeatureFlagsApi` implementations to the `mockApis` namespace. The mock implementations include useful testing methods like `clearAlerts()`, `waitForAlert()`, `getState()`, `setState()`, and `clearState()` for better test ergonomics.
- [`09a6aad`](https://github.com/backstage/backstage/commit/09a6aad): **BREAKING**: The `mockApis` namespace is no longer a re-export from `@backstage/test-utils`. It's now a standalone namespace with mock implementations of most core APIs. Mock API instances can be passed directly to `TestApiProvider`, `renderInTestApp`, and `renderTestApp` without needing `[apiRef, impl]` tuples. As part of this change, the `.factory()` method on some mocks has been removed, since it's now redundant.

  ```tsx
  // Before
  import { mockApis } from '@backstage/frontend-test-utils';

  renderInTestApp(<MyComponent />, {
    apis: [[identityApiRef, mockApis.identity()]],
  });

  // After - mock APIs can be passed directly
  renderInTestApp(<MyComponent />, {
    apis: [mockApis.identity()],
  });
  ```

  This change also adds `createApiMock`, a public utility for creating mock API factories, intended for plugin authors to create their own `.mock()` variants.

##### Patch Changes

- [`22864b7`](https://github.com/backstage/backstage/commit/22864b7): Added an `apis` option to `createExtensionTester`, `renderInTestApp`, and `renderTestApp` to override APIs when testing extensions. Use the `mockApis` helpers to create mock implementations:

  ```typescript
  import { identityApiRef } from '@backstage/frontend-plugin-api';
  import { mockApis } from '@backstage/frontend-test-utils';

  // Override APIs in createExtensionTester
  const tester = createExtensionTester(myExtension, {
    apis: [
      [
        identityApiRef,
        mockApis.identity({ userEntityRef: 'user:default/guest' }),
      ],
    ],
  });

  // Override APIs in renderInTestApp
  renderInTestApp(<MyComponent />, {
    apis: [
      [
        identityApiRef,
        mockApis.identity({ userEntityRef: 'user:default/guest' }),
      ],
    ],
  });

  // Override APIs in renderTestApp
  renderTestApp({
    extensions: [myExtension],
    apis: [
      [
        identityApiRef,
        mockApis.identity({ userEntityRef: 'user:default/guest' }),
      ],
    ],
  });
  ```

- [`15ed3f9`](https://github.com/backstage/backstage/commit/15ed3f9): Added `snapshot()` method to `ExtensionTester`, which returns a tree-shaped representation of the resolved extension hierarchy. Convenient to use with `toMatchInlineSnapshot()`.
- [`013ec22`](https://github.com/backstage/backstage/commit/013ec22): Added `mountedRoutes` option to `renderTestApp` for binding route refs to paths, matching the existing option in `renderInTestApp`:

  ```typescript
  renderTestApp({
    extensions: [...],
    mountedRoutes: {
      '/my-path': myRouteRef,
    },
  });
  ```

- [`d7dd5bd`](https://github.com/backstage/backstage/commit/d7dd5bd): Fixed Router deprecation warning and switched to using new `RouterBlueprint` from `@backstage/plugin-app-api`.
- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.
- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

### `@backstage/integration` (1.18.2 → [2.0.0](../changelogs/@backstage/integration.md#200))

#### 2.0.0

##### Major Changes

- [`527cf88`](https://github.com/backstage/backstage/commit/527cf88): **BREAKING** Removed deprecated Azure DevOps, Bitbucket, Gerrit and GitHub code:

  - For Azure DevOps, the long deprecated `token` string and `credential` object have been removed from the `config.d.ts`. Use the `credentials` array object instead.
  - For Bitbucket, the long deprecated `bitbucket` object has been removed from the `config.d.ts`. Use the `bitbucketCloud` or `bitbucketServer` objects instead.
  - For Gerrit, the `parseGerritGitilesUrl` function has been removed, use `parseGitilesUrlRef` instead. The `buildGerritGitilesArchiveUrl` function has also been removed, use `buildGerritGitilesArchiveUrlFromLocation` instead.
  - For GitHub, the `getGitHubRequestOptions` function has been removed.

##### Minor Changes

- [`d933f62`](https://github.com/backstage/backstage/commit/d933f62): Add configurable throttling and retry mechanism for GitLab integration.

##### Patch Changes

- [`1513a0b`](https://github.com/backstage/backstage/commit/1513a0b): Fixed a security vulnerability where path traversal sequences in SCM URLs could be used to access unintended API endpoints using server-side integration credentials.
- [`993a598`](https://github.com/backstage/backstage/commit/993a598): Fixed Azure integration config schema visibility annotations to use per-field `@visibility secret` instead of `@deepVisibility secret` on parent objects, so that non-secret fields like `clientId`, `tenantId`, `organizations`, and `managedIdentityClientId` are no longer incorrectly marked as secret.

#### 1.20.0

##### Minor Changes

- [`6999f6d`](https://github.com/backstage/backstage/commit/6999f6d): The AzureUrl class in the @backstage/integration package is now able to process BOTH git branches and git tags. Initially this class only processed git branches and threw an error when non-branch Azure URLs were passed in.

##### Patch Changes

- [`cc6206e`](https://github.com/backstage/backstage/commit/cc6206e): Added support for `{org}.visualstudio.com` domains used by Azure DevOps
- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports

#### 1.19.2

##### Patch Changes

- [`3afeab4`](https://github.com/backstage/backstage/commit/3afeab4): Implementing `ScmIntegration` for `GoogleGcs`
- [`9083273`](https://github.com/backstage/backstage/commit/9083273): Rollback the lowercase replacing in GitHub integration config

#### 1.19.0

##### Minor Changes

- [`37fba1d`](https://github.com/backstage/backstage/commit/37fba1d): Added support for Bitbucket Cloud OAuth. This introduces an alternative authentication method using a workspace OAuth consumer, alongside App Passwords (deprecated) and API tokens. OAuth does not require a bot or service account and avoids token expiry issues.

  **BREAKING CHANGES**

  - **@backstage/integration** (`src/bitbucketCloud/core.ts`)

    - `getBitbucketCloudRequestOptions` now returns a `Promise` and **must** be awaited.

  - **@backstage/plugin-scaffolder-backend-module-bitbucket-cloud** (`src/actions/helpers.ts`)
    - `getBitbucketClient` now returns a `Promise` and **must** be awaited.
    - `getAuthorizationHeader` now returns a `Promise` and **must** be awaited.

  **OAuth usage example**

  ```yaml
  integrations:
    bitbucketCloud:
      - clientId: client-id
        clientSecret: client-secret
  ```

##### Patch Changes

- [`a26a322`](https://github.com/backstage/backstage/commit/a26a322): Added support for using a GitHub App installation to generate tokens for public repository access when the `publicAccess` option is enabled. When all other authentication methods fail (e.g., the app is not installed in that organization), the provider will now use an available installation to generate a token that can be used to access public repositories as read only.
- [`fb029b6`](https://github.com/backstage/backstage/commit/fb029b6): Updated luxon types
- [`e15fdae`](https://github.com/backstage/backstage/commit/e15fdae): Made the github urls case insensitive.

### `@backstage/plugin-app` (0.3.2 → [0.4.2](../changelogs/@backstage/plugin-app.md#042))

#### 0.4.1

##### Patch Changes

- [`5f3f5d2`](https://github.com/backstage/backstage/commit/5f3f5d2): `NavContentBlueprint` nav item collections now keep previously collected `rest()` results in sync when additional items are taken later in the same render, making it easier to place items across multiple sidebar sections.
- [`aa29b50`](https://github.com/backstage/backstage/commit/aa29b50): Pages created with `PageBlueprint` now render the plugin header by default in the new frontend system.
- [`c0ab376`](https://github.com/backstage/backstage/commit/c0ab376): The app nav now falls back to `plugin.icon` for navigation items that don't have an explicit icon set.
- [`12d8afe`](https://github.com/backstage/backstage/commit/12d8afe): Added `BUIProvider` from `@backstage/ui` to the app root, enabling BUI components to fire analytics events through the Backstage analytics system.
- [`5fec07d`](https://github.com/backstage/backstage/commit/5fec07d): Updated the default app root to better support phased app preparation by allowing the app layout to be absent during bootstrap, routing bootstrap failures through the app root boundary, and avoiding installation of a guest identity in protected apps that do not provide a sign-in page.
- [`9508514`](https://github.com/backstage/backstage/commit/9508514): Updated the default `PluginWrapperApi` implementation to support the new `useWrapperValue` hook and root wrapper. The root wrapper is now rendered in the app root to manage shared hook state across plugin wrapper instances.
- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.
- [`42f8c9b`](https://github.com/backstage/backstage/commit/42f8c9b): Moved `BUIProvider` inside the app router to enable automatic client-side routing for all BUI components.
- [`909c742`](https://github.com/backstage/backstage/commit/909c742): Switched translation API imports (`translationApiRef`, `appLanguageApiRef`) from the alpha `@backstage/core-plugin-api/alpha` path to the stable `@backstage/frontend-plugin-api` export. This has no effect on runtime behavior.
- [`7e743f4`](https://github.com/backstage/backstage/commit/7e743f4): Introduced a new `ToastApi` for displaying rich toast notifications in the new frontend system.

  The new `ToastApi` provides enhanced notification capabilities compared to the existing `AlertApi`:

  - **Title and Description**: Toasts support both a title and an optional description
  - **Custom Timeouts**: Each toast can specify its own timeout duration
  - **Links**: Toasts can include action links
  - **Status Variants**: Support for neutral, info, success, warning, and danger statuses
  - **Programmatic Dismiss**: Toasts can be dismissed programmatically using the `close()` handle returned from `post()`

  **Usage:**

  ```typescript
  import { toastApiRef, useApi } from '@backstage/frontend-plugin-api';

  const toastApi = useApi(toastApiRef);

  // Full-featured toast
  toastApi.post({
    title: 'Entity saved',
    description: 'Your changes have been saved successfully.',
    status: 'success',
    timeout: 5000,
    links: [{ label: 'View entity', href: '/catalog/entity' }],
  });

  // Programmatic dismiss
  const { close } = toastApi.post({ title: 'Uploading...', status: 'info' });
  // Later...
  close();
  ```

  The `ToastDisplay` component subscribes to both `ToastApi` and `AlertApi`, providing a migration path where both systems work side by side until `AlertApi` is fully deprecated.

#### 0.4.0

##### Minor Changes

- [`ef6916e`](https://github.com/backstage/backstage/commit/ef6916e): Added `SubPageBlueprint` for creating sub-page tabs, `PluginHeaderActionBlueprint` and `PluginHeaderActionsApi` for plugin-scoped header actions, and `PageLayout` as a swappable component. The `PageBlueprint` now supports sub-pages with tabbed navigation, page title, icon, and header actions. Plugins can now specify a `title` and `icon` in `createFrontendPlugin`.
- [`7edb810`](https://github.com/backstage/backstage/commit/7edb810): **BREAKING**: Extensions created with the following blueprints must now be provided via an override or a module for the `app` plugin. Extensions from other plugins will now trigger a warning in the app and be ignored.

  - `IconBundleBlueprint`
  - `NavContentBlueprint`
  - `RouterBlueprint`
  - `SignInPageBlueprint`
  - `SwappableComponentBlueprint`
  - `ThemeBlueprint`
  - `TranslationBlueprint`

##### Patch Changes

- [`a2133be`](https://github.com/backstage/backstage/commit/a2133be): Added new `NavContentNavItem`, `NavContentNavItems`, and `navItems` prop to `NavContentComponentProps` for auto-discovering navigation items from page extensions. The new `navItems` collection supports `take(id)` and `rest()` methods for placing specific items in custom sidebar positions, as well as `withComponent(Component)` which returns a `NavContentNavItemsWithComponent` for rendering items directly as elements. The existing `items` prop is now deprecated in favor of `navItems`.
- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.
- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 0.3.4

##### Patch Changes

- [`4554a4e`](https://github.com/backstage/backstage/commit/4554a4e): Implemented support for the new `PluginWrapperBlueprint` from `@backstage/frontend-plugin-api/alpha`.
- [`9ccf84e`](https://github.com/backstage/backstage/commit/9ccf84e): The following blueprints are being restricted to only be used in app plugin overrides and modules. They will now produce a deprecation warning when used outside of the app plugin:

  - `AppRootWrapperBlueprint`
  - `IconBundleBlueprint`
  - `NavContentBlueprint`
  - `RouterBlueprint`
  - `SignInPageBlueprint`
  - `SwappableComponentBlueprint`
  - `ThemeBlueprint`
  - `TranslationBlueprint`

#### 0.3.3

##### Patch Changes

- [`f3f84f1`](https://github.com/backstage/backstage/commit/f3f84f1): Minor extension type updates after frontend API bump
- [`f7bc228`](https://github.com/backstage/backstage/commit/f7bc228): Support to set `defaultLanguage` and `availableLanguages` for the app language API in the new frontend system
- [`d02db50`](https://github.com/backstage/backstage/commit/d02db50): Remove unnecessary use of `compatWrapper` and `convertLegacyRouteRef`(s) for the new frontend system.

### `@backstage/plugin-bitbucket-cloud-common` (0.3.4 → [0.3.8](../changelogs/@backstage/plugin-bitbucket-cloud-common.md#038))

#### 0.3.7

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports

#### 0.3.5

##### Patch Changes

- [`37fba1d`](https://github.com/backstage/backstage/commit/37fba1d): Added support for Bitbucket Cloud OAuth. This introduces an alternative authentication method using a workspace OAuth consumer, alongside App Passwords (deprecated) and API tokens. OAuth does not require a bot or service account and avoids token expiry issues.

  **BREAKING CHANGES**

  - **@backstage/integration** (`src/bitbucketCloud/core.ts`)

    - `getBitbucketCloudRequestOptions` now returns a `Promise` and **must** be awaited.

  - **@backstage/plugin-scaffolder-backend-module-bitbucket-cloud** (`src/actions/helpers.ts`)
    - `getBitbucketClient` now returns a `Promise` and **must** be awaited.
    - `getAuthorizationHeader` now returns a `Promise` and **must** be awaited.

  **OAuth usage example**

  ```yaml
  integrations:
    bitbucketCloud:
      - clientId: client-id
        clientSecret: client-secret
  ```

### `@backstage/plugin-catalog` (1.32.0 → [2.0.1](../changelogs/@backstage/plugin-catalog.md#201))

#### 2.0.0

##### Major Changes

- [`5fc35bb`](https://github.com/backstage/backstage/commit/5fc35bb): Migrated `EntityAboutCard`, `EntityLinksCard`, `EntityLabelsCard`, `GroupProfileCard`, and `UserProfileCard` from MUI/InfoCard to use the new BUI card layout and BUI components where possible.

  **BREAKING**: Removed `variant` prop from EntityAboutCard, EntityUserProfileCard, EntityGroupProfileCard, EntityLabelsCard, EntityLinksCard. Removed `gridSizes` prop from `AboutField`.

  **Migration:**

  Simply delete the obsolete `variant` and `gridSizes` props, e.g:

  ```diff
  -      <EntityAboutCard variant="gridItem" />
  +      <EntityAboutCard />
  ```

  ```diff
  -      <AboutField label="Owner" gridSizes={{ xs: 12, sm: 6, lg: 4 }} />
  +      <AboutField label="Owner" />
  ```

##### Minor Changes

- [`4d58894`](https://github.com/backstage/backstage/commit/4d58894): Added support for group alias IDs and configurable content ordering on the entity page. Groups can now declare `aliases` so that content targeting an aliased group is included in the group. A new `defaultContentOrder` option (default `title`) controls how content items within each group are sorted, with support for both a page-level default and per-group overrides.
- [`c548a0f`](https://github.com/backstage/backstage/commit/c548a0f): Migrated entity table cards (`HasComponentsCard`, `HasResourcesCard`, `HasSubcomponentsCard`, `HasSubdomainsCard`, `HasSystemsCard`, `DependsOnComponentsCard`, `DependsOnResourcesCard`, `DependencyOfComponentsCard`) to use BUI when no legacy props are passed. The old `variant`, `columns`, and `tableOptions` props are deprecated but still supported — passing any of them triggers the legacy MUI-based rendering. The new `columnConfig` prop accepts `EntityColumnConfig[]` for BUI-based rendering.

  `RelatedEntitiesCard` is deprecated — use `EntityRelationCard` from `@backstage/plugin-catalog-react/alpha` instead.

- [`0be2541`](https://github.com/backstage/backstage/commit/0be2541): Promoted the plugin's translation ref to the stable package entry point. It was previously only available through the alpha entry point.

##### Patch Changes

- [`538c985`](https://github.com/backstage/backstage/commit/538c985): Updated installation documentation to use feature discovery as the default.
- [`07ba746`](https://github.com/backstage/backstage/commit/07ba746): Fixed entity page tab groups not respecting the ordering from the `groups` configuration.
- [`aa29b50`](https://github.com/backstage/backstage/commit/aa29b50): New frontend system pages now use the default plugin header together with `HeaderPage` instead of the legacy core page header pattern.
- [`3f36ce1`](https://github.com/backstage/backstage/commit/3f36ce1): Updated alpha plugin icons to follow the new frontend icon sizing rules when rendered in plugin and navigation surfaces.

#### 1.33.0

##### Minor Changes

- [`491a06c`](https://github.com/backstage/backstage/commit/491a06c): Add the ability to show icons for the tabs on the entity page (new frontend)
- [`05aac34`](https://github.com/backstage/backstage/commit/05aac34): Migrated `DeleteEntityDialog` and `EntityOrphanWarning` components to Backstage UI.

  The `deleteEntity.description` translation key no longer includes "Click here to delete" text. A new `deleteEntity.actionButtonTitle` key was added for the action button.

##### Patch Changes

- [`220d6c3`](https://github.com/backstage/backstage/commit/220d6c3): Add missing translation entries for catalog UI text.

  This change adds translation keys and updates relevant UI components to use the correct localized labels and text in the catalog plugin. It ensures that catalog screens such as entity layout, tabs, search result items, table labels, and other UI elements correctly reference the i18n system for translation.

  No functional behavior is changed aside from the improved internationalization support.

- [`8d4c48b`](https://github.com/backstage/backstage/commit/8d4c48b): Fixed vertical spacing between tags in the catalog table.
- [`7feb83b`](https://github.com/backstage/backstage/commit/7feb83b): Adjusted to use the new `@backstage/filter-predicates` types for predicate expressions.
- [`018ca87`](https://github.com/backstage/backstage/commit/018ca87): Added `title` and `icon` to the plugin definition for the new frontend system.
- [`e8258d0`](https://github.com/backstage/backstage/commit/e8258d0): The default entity content layout still supports rendering summary cards at runtime for backward compatibility, but logs a console warning when they are detected to help identify where migration is needed.
- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.
- [`75ac651`](https://github.com/backstage/backstage/commit/75ac651): Migrated `EntityRelationWarning` and `EntityProcessingErrorsPanel` components from Material UI to Backstage UI.

#### 1.32.2

##### Patch Changes

- [`7ca91e8`](https://github.com/backstage/backstage/commit/7ca91e8): Header in EntityLayout should always be shown.
  Monitoring the loading status caused flickering when the refresh() method of the Async Entity was invoked.

#### 1.32.1

##### Patch Changes

- [`f3f84f1`](https://github.com/backstage/backstage/commit/f3f84f1): Minor extension type updates after frontend API bump
- [`d02db50`](https://github.com/backstage/backstage/commit/d02db50): Remove unnecessary use of `compatWrapper` and `convertLegacyRouteRef`(s) for the new frontend system.
- [`91f5ed8`](https://github.com/backstage/backstage/commit/91f5ed8): Fixed `catalogAboutEntityCard` to filter icon links before calling useProps(), preventing side effects from hooks in filtered-out links

### `@backstage/plugin-catalog-backend` (3.2.0 → [3.5.0](../changelogs/@backstage/plugin-catalog-backend.md#350))

#### 3.5.0

##### Minor Changes

- [`a6b2819`](https://github.com/backstage/backstage/commit/a6b2819): Added `query-catalog-entities` action to the catalog backend actions registry. Supports predicate-based filtering with `$all`, `$any`, `$not`, `$exists`, `$in`, `$contains`, and `$hasPrefix` operators.
- [`972f686`](https://github.com/backstage/backstage/commit/972f686): Added support for predicate-based filtering on the `/entities/by-refs` endpoint via the `query` field in the request body. Supports `$all`, `$any`, `$not`, `$exists`, `$in`, `$contains`, and `$hasPrefix` operators.
- [`5d95e8e`](https://github.com/backstage/backstage/commit/5d95e8e): Add an `onConflict` option to location creation that can refresh an existing location instead of throwing a conflict error.
- [`56c908e`](https://github.com/backstage/backstage/commit/56c908e): Added support for predicate-based filtering on the `/entity-facets` endpoint via a new `POST` method. Supports `$all`, `$any`, `$not`, `$exists`, `$in`, `$contains`, and `$hasPrefix` operators.
- [`0fbcf23`](https://github.com/backstage/backstage/commit/0fbcf23): Migrated OpenAPI schemas to 3.1.
- [`bf71677`](https://github.com/backstage/backstage/commit/bf71677): Added opentelemetry metrics for SCM events:

  - `catalog.events.scm.messages` with attribute `eventType`: Counter for the number of SCM events actually received by the catalog backend. The `eventType` is currently either `location` or `repository`.

- [`51e23eb`](https://github.com/backstage/backstage/commit/51e23eb): Added predicate-based entity filtering via POST /entities/by-query endpoint.

  Supports `$all`, `$any`, `$not`, `$exists`, `$in`, `$hasPrefix`, and (partially) `$contains` operators for expressive entity queries. Integrated into the existing `queryEntities` flow with full cursor-based pagination, permission enforcement, and `totalItems` support.

  The catalog client's `queryEntities()` method automatically routes to the POST endpoint when a `query` predicate is provided.

##### Patch Changes

- [`a91bd1b`](https://github.com/backstage/backstage/commit/a91bd1b): Improved catalog entity deletion so parent invalidation and deferred relation restitch scheduling are coordinated more safely.
- [`6738cf0`](https://github.com/backstage/backstage/commit/6738cf0): build(deps): bump `minimatch` from 9.0.5 to 10.2.1
- [`7416e8b`](https://github.com/backstage/backstage/commit/7416e8b): Moved stitch queue concerns out of `refresh_state` and `final_entities` into a dedicated `stitch_queue` table with `entity_ref` as the primary key. The `stitch_ticket` is used for optimistic concurrency control. When a stitch completes successfully and the ticket hasn't changed, the corresponding row is deleted from the queue. The migration handles existing data and is fully reversible.
- [`fbf382f`](https://github.com/backstage/backstage/commit/fbf382f): Minor internal optimisation
- [`1ee5b28`](https://github.com/backstage/backstage/commit/1ee5b28): Migrates existing catalog metrics to use the alpha MetricsService. This release is a 1:1 migration with no breaking changes.
- [`72747b4`](https://github.com/backstage/backstage/commit/72747b4): Deprecated two processors as they have been moved to the Community Plugins repo with their own backend modules:

  - `AnnotateScmSlugEntityProcessor`: Use `@backstage-community/plugin-catalog-backend-module-annotate-scm-slug` instead
  - `CodeOwnersProcessor`: Use `@backstage-community/plugin-catalog-backend-module-codeowners` instead

- [`3644b72`](https://github.com/backstage/backstage/commit/3644b72): Make the `search` foreign key catalog migration non-blocking on large tables by using batch deletes and PostgreSQL `NOT VALID`/`VALIDATE` to reduce lock duration
- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.
- [`3181973`](https://github.com/backstage/backstage/commit/3181973): Changed the `search` table foreign key to point to `final_entities` instead of `refresh_state`

#### 3.4.0

##### Minor Changes

- [`f1d29b4`](https://github.com/backstage/backstage/commit/f1d29b4): Failures to connect catalog providers are now attributed to the module that provided the failing provider. This means that such failures will be reported as module startup failures rather than a failure to start the catalog plugin, and will therefore respect `onPluginModuleBootFailure` configuration instead.
- [`34cc520`](https://github.com/backstage/backstage/commit/34cc520): Implemented handling of events from the newly introduced alpha
  `catalogScmEventsServiceRef` service, in the builtin entity providers. This
  allows entities to get refreshed, and locations updated or removed, as a
  response to incoming events. In its first iteration, only the GitHub module
  implements such event handling however.

  This is not yet enabled by default, but this fact may change in a future
  release. To try it out, ensure that you have the latest catalog GitHub module
  installed, and set the following in your app-config:

  ```yaml
  catalog:
    scmEvents: true
  ```

  Or if you want to pick and choose from the various features:

  ```yaml
  catalog:
    scmEvents:
      # refresh (reprocess) upon events?
      refresh: true
      # automatically unregister locations based on events? (files deleted, repos archived, etc)
      unregister: true
      # automatically move locations based on events? (repo transferred, file renamed, etc)
      move: true
  ```

- [`b4e8249`](https://github.com/backstage/backstage/commit/b4e8249): Implemented the `POST /locations/by-query` endpoint which allows paginated, filtered location queries

##### Patch Changes

- [`cfd8103`](https://github.com/backstage/backstage/commit/cfd8103): Updated imports to use stable catalog extension points from `@backstage/plugin-catalog-node` instead of the deprecated alpha exports.
- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`5e3ef57`](https://github.com/backstage/backstage/commit/5e3ef57): Added `peerModules` metadata declaring recommended modules for cross-plugin integrations.
- [`08a5813`](https://github.com/backstage/backstage/commit/08a5813): Fixed O(n²) performance bottleneck in `buildEntitySearch` `traverse()` by replacing `Array.some()` linear scan with a `Set` for O(1) duplicate path key detection.
- [`1e669cc`](https://github.com/backstage/backstage/commit/1e669cc): Migrate audit events reference docs to http://backstage.io/docs.
- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 3.3.0

##### Minor Changes

- [`dce1824`](https://github.com/backstage/backstage/commit/dce1824): Added `ActionsRegistry` actions for `register-entity` and `unregister-entity`

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0
- [`8101ec1`](https://github.com/backstage/backstage/commit/8101ec1): Fixed default refresh service to go through the whole ancestry of the entity.

### `@backstage/plugin-catalog-graph` (0.5.3 → [0.6.0](../changelogs/@backstage/plugin-catalog-graph.md#060))

#### 0.6.0

##### Minor Changes

- [`d14b6e0`](https://github.com/backstage/backstage/commit/d14b6e0): **BREAKING**: Migrated `MembersListCard`, `OwnershipCard`, and `CatalogGraphCard` to use BUI card primitives via `EntityInfoCard`.

  - `OwnershipCard`: Removed `variant` and `maxScrollHeight` props. Card height and scrolling are now controlled by the parent container — the card fills its container and the body scrolls automatically when content overflows.
  - `CatalogGraphCard`: Removed `variant` prop.
  - `MembersListCard`: Translation keys `subtitle`, `paginationLabel`, `aggregateMembersToggle.directMembers`, `aggregateMembersToggle.aggregatedMembers`, and `aggregateMembersToggle.ariaLabel` have been removed. The `title` key now includes `{{groupName}}`. New keys added: `cardLabel`, `noSearchResult`, `aggregateMembersToggle.label`.
  - `OwnershipCard`: Translation keys `aggregateRelationsToggle.directRelations`, `aggregateRelationsToggle.aggregatedRelations`, and `aggregateRelationsToggle.ariaLabel` have been removed. New key added: `aggregateRelationsToggle.label`.
  - Removed `MemberComponentClassKey` export, and `root` and `cardContent` from `MembersListCardClassKey`, `card` from `OwnershipCardClassKey`, and `card` from `CatalogGraphCardClassKey`.

  **Migration:**

  ```diff
  - <EntityOwnershipCard variant="gridItem" />
  + <EntityOwnershipCard />
  ```

  ```diff
  - <EntityCatalogGraphCard variant="gridItem" height={400} />
  + <EntityCatalogGraphCard height={400} />
  ```

##### Patch Changes

- [`538c985`](https://github.com/backstage/backstage/commit/538c985): Updated installation documentation to use feature discovery as the default.
- [`0be2541`](https://github.com/backstage/backstage/commit/0be2541): Promoted the plugin's translation ref to the stable package entry point. It was previously only available through the alpha entry point.

#### 0.5.7

##### Patch Changes

- [`ac9bead`](https://github.com/backstage/backstage/commit/ac9bead): Added `@backstage/frontend-test-utils` dev dependency.
- [`8dd27c4`](https://github.com/backstage/backstage/commit/8dd27c4): Fix large icon rendering in catalog graph nodes
- [`7feb83b`](https://github.com/backstage/backstage/commit/7feb83b): Adjusted to use the new `@backstage/filter-predicates` types for predicate expressions.
- [`4183614`](https://github.com/backstage/backstage/commit/4183614): Updated usage of deprecated APIs in the new frontend system.
- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.

#### 0.5.6

##### Patch Changes

- [`5c49a00`](https://github.com/backstage/backstage/commit/5c49a00): Update for the `qs` library bump: the old array limit setting has changed to be more strict; you can no longer just give a zero to mean unlimited. So we choose an arbitrary high value, to at least go higher than the default 20.

#### 0.5.4

##### Patch Changes

- [`a67c144`](https://github.com/backstage/backstage/commit/a67c144): Fixed zoom out description (replace `&amp;` with &)
- [`f3f84f1`](https://github.com/backstage/backstage/commit/f3f84f1): Minor extension type updates after frontend API bump
- [`d02db50`](https://github.com/backstage/backstage/commit/d02db50): Remove unnecessary use of `compatWrapper` and `convertLegacyRouteRef`(s) for the new frontend system.

### `@backstage/plugin-catalog-react` (1.21.3 → [2.1.1](../changelogs/@backstage/plugin-catalog-react.md#211))

#### 2.1.0

##### Minor Changes

- [`c548a0f`](https://github.com/backstage/backstage/commit/c548a0f): Added `EntityDataTable`, `EntityRelationCard`, `entityDataTableColumns`, `entityColumnPresets`, and related types as alpha exports. These replace `EntityTable` and `RelatedEntitiesCard` (from `@backstage/plugin-catalog`) respectively, providing a unified BUI-based pattern for entity table cards.
- [`4d58894`](https://github.com/backstage/backstage/commit/4d58894): Added `aliases` and `contentOrder` fields to `EntityContentGroupDefinition`, allowing groups to declare alias IDs and control the sort order of their content items.
- [`d14b6e0`](https://github.com/backstage/backstage/commit/d14b6e0): Exported `useEntityRefLink` hook that returns a function for generating entity page URLs from entity references.
- [`0be2541`](https://github.com/backstage/backstage/commit/0be2541): Promoted the plugin's translation ref to the stable package entry point. It was previously only available through the alpha entry point.
- [`c6080eb`](https://github.com/backstage/backstage/commit/c6080eb): Added `EntityInfoCard` component to `@backstage/plugin-catalog-react` as a BUI-based card wrapper for entity page cards.

##### Patch Changes

- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

#### 2.0.0

##### Minor Changes

- [`0e9578d`](https://github.com/backstage/backstage/commit/0e9578d): Migrated `UnregisterEntityDialog` from Material UI to Backstage UI components.
- [`491a06c`](https://github.com/backstage/backstage/commit/491a06c): Add the ability to show icons for the tabs on the entity page (new frontend)
- [`b4e8249`](https://github.com/backstage/backstage/commit/b4e8249): Implemented support for the new `queryLocations` and `streamLocations` that allow paginated/streamed and filtered location queries
- [`7feb83b`](https://github.com/backstage/backstage/commit/7feb83b): **BREAKING ALPHA**: All of the predicate types and functions have been moved to the `@backstage/filter-predicates` package.

  When moving into the more general package, they were renamed as follows:

  - `EntityPredicate` -> `FilterPredicate`
  - `EntityPredicateExpression` -> `FilterPredicateExpression`
  - `EntityPredicatePrimitive` -> `FilterPredicatePrimitive`
  - `entityPredicateToFilterFunction` -> `filterPredicateToFilterFunction`
  - `EntityPredicateValue` -> `FilterPredicateValue`

- [`e8258d0`](https://github.com/backstage/backstage/commit/e8258d0): **BREAKING**: Removed the 'summary' entity card type from `EntityCardType`. Users should migrate to using 'content' or 'info' card types instead.

  TypeScript will now show errors if you try to use `type: 'summary'` when creating entity cards.

- [`ac9bead`](https://github.com/backstage/backstage/commit/ac9bead): Added `createTestEntityPage` test utility for testing entity cards and content extensions in the new frontend system. This utility creates a test page extension that provides `EntityProvider` context and accepts entity extensions through input redirects:

  ```typescript
  import { renderTestApp } from '@backstage/frontend-test-utils';
  import { createTestEntityPage } from '@backstage/plugin-catalog-react/testUtils';

  renderTestApp({
    extensions: [createTestEntityPage({ entity: myEntity }), myEntityCard],
  });
  ```

##### Patch Changes

- [`f523983`](https://github.com/backstage/backstage/commit/f523983): Fixes a bug where the `EntityListProvider` would not correctly hydrate query parameters if more than 20 were provided for the same key.
- [`09a6aad`](https://github.com/backstage/backstage/commit/09a6aad): The `catalogApiMock` test utility now returns a `MockWithApiFactory`, allowing it to be passed directly to test utilities like `renderTestApp` and `TestApiProvider` without needing the `[catalogApiRef, catalogApiMock()]` tuple.
- [`88dbd5e`](https://github.com/backstage/backstage/commit/88dbd5e): fixed bug in `UserListPicker` by getting the `kindParamater` from the `filters` rather than from the `queryParameters`
- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.
- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 1.21.4

##### Patch Changes

- [`6d39141`](https://github.com/backstage/backstage/commit/6d39141): Fixed an issue where `EntityOwnerPicker` failed to filter options when the input text contained uppercase characters.
- [`b3c0594`](https://github.com/backstage/backstage/commit/b3c0594): Use a versioned context for `useEntityList`, to better work with mixed `@backstage/plugin-catalog-react` versions.
- [`c51c901`](https://github.com/backstage/backstage/commit/c51c901): $contains may have string value in an entity filter. Typescript type and Zod parser were not the same.
- [`d02db50`](https://github.com/backstage/backstage/commit/d02db50): Remove unnecessary use of `compatWrapper` and `convertLegacyRouteRef`(s) for the new frontend system.

### `@backstage/plugin-notifications-backend-module-slack` (0.2.1 → [0.4.0](../changelogs/@backstage/plugin-notifications-backend-module-slack.md#040))

#### 0.4.0

##### Minor Changes

- [`cd62d78`](https://github.com/backstage/backstage/commit/cd62d78): **BREAKING**: Only send direct messages to user entity recipients. Notifications sent to non-user entities no longer send Slack direct messages to resolved users.
- [`749ba60`](https://github.com/backstage/backstage/commit/749ba60): Add an extension for custom Slack message layouts

##### Patch Changes

- [`e7c6c32`](https://github.com/backstage/backstage/commit/e7c6c32): The Slack notification processor now uses the `MetricsService` to create metrics, providing plugin-scoped attribution. `{message}` unit has also been added.

#### 0.3.0

##### Minor Changes

- [`f95a516`](https://github.com/backstage/backstage/commit/f95a516): Enables optional routes to Slack channels for broadcast notifications based on origin and/or topics.

##### Patch Changes

- [`b80857a`](https://github.com/backstage/backstage/commit/b80857a): Slack notification handler throttling can now be configured with the `concurrencyLimit` and `throttleInterval` options.
- [`f8230e4`](https://github.com/backstage/backstage/commit/f8230e4): Updated dependency `@faker-js/faker` to `^10.0.0`.

### `@backstage/plugin-org` (0.6.46 → [0.7.0](../changelogs/@backstage/plugin-org.md#070))

#### 0.7.0

##### Minor Changes

- [`d14b6e0`](https://github.com/backstage/backstage/commit/d14b6e0): **BREAKING**: Migrated `MembersListCard`, `OwnershipCard`, and `CatalogGraphCard` to use BUI card primitives via `EntityInfoCard`.

  - `OwnershipCard`: Removed `variant` and `maxScrollHeight` props. Card height and scrolling are now controlled by the parent container — the card fills its container and the body scrolls automatically when content overflows.
  - `CatalogGraphCard`: Removed `variant` prop.
  - `MembersListCard`: Translation keys `subtitle`, `paginationLabel`, `aggregateMembersToggle.directMembers`, `aggregateMembersToggle.aggregatedMembers`, and `aggregateMembersToggle.ariaLabel` have been removed. The `title` key now includes `{{groupName}}`. New keys added: `cardLabel`, `noSearchResult`, `aggregateMembersToggle.label`.
  - `OwnershipCard`: Translation keys `aggregateRelationsToggle.directRelations`, `aggregateRelationsToggle.aggregatedRelations`, and `aggregateRelationsToggle.ariaLabel` have been removed. New key added: `aggregateRelationsToggle.label`.
  - Removed `MemberComponentClassKey` export, and `root` and `cardContent` from `MembersListCardClassKey`, `card` from `OwnershipCardClassKey`, and `card` from `CatalogGraphCardClassKey`.

  **Migration:**

  ```diff
  - <EntityOwnershipCard variant="gridItem" />
  + <EntityOwnershipCard />
  ```

  ```diff
  - <EntityCatalogGraphCard variant="gridItem" height={400} />
  + <EntityCatalogGraphCard height={400} />
  ```

- [`5fc35bb`](https://github.com/backstage/backstage/commit/5fc35bb): Migrated `EntityAboutCard`, `EntityLinksCard`, `EntityLabelsCard`, `GroupProfileCard`, and `UserProfileCard` from MUI/InfoCard to use the new BUI card layout and BUI components where possible.

  **BREAKING**: Removed `variant` prop from EntityAboutCard, EntityUserProfileCard, EntityGroupProfileCard, EntityLabelsCard, EntityLinksCard. Removed `gridSizes` prop from `AboutField`.

  **Migration:**

  Simply delete the obsolete `variant` and `gridSizes` props, e.g:

  ```diff
  -      <EntityAboutCard variant="gridItem" />
  +      <EntityAboutCard />
  ```

  ```diff
  -      <AboutField label="Owner" gridSizes={{ xs: 12, sm: 6, lg: 4 }} />
  +      <AboutField label="Owner" />
  ```

##### Patch Changes

- [`538c985`](https://github.com/backstage/backstage/commit/538c985): Updated installation documentation to use feature discovery as the default.
- [`0be2541`](https://github.com/backstage/backstage/commit/0be2541): Promoted the plugin's translation ref to the stable package entry point. It was previously only available through the alpha entry point.

#### 0.6.49

##### Patch Changes

- [`ac9bead`](https://github.com/backstage/backstage/commit/ac9bead): Added `@backstage/frontend-test-utils` dev dependency.
- [`7feb83b`](https://github.com/backstage/backstage/commit/7feb83b): Adjusted to use the new `@backstage/filter-predicates` types for predicate expressions.
- [`4183614`](https://github.com/backstage/backstage/commit/4183614): Updated usage of deprecated APIs in the new frontend system.
- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.
- [`1dee6de`](https://github.com/backstage/backstage/commit/1dee6de): Add search functionality in MembersListCard

#### 0.6.48

##### Patch Changes

- [`db3cfd7`](https://github.com/backstage/backstage/commit/db3cfd7): Adds the Resource kind to the `useGetEntities` fallback so that Resources are included by default when no specific kinds are provided in the group ownership card.

#### 0.6.47

##### Patch Changes

- [`f3f84f1`](https://github.com/backstage/backstage/commit/f3f84f1): Minor extension type updates after frontend API bump
- [`d02db50`](https://github.com/backstage/backstage/commit/d02db50): Remove unnecessary use of `compatWrapper` and `convertLegacyRouteRef`(s) for the new frontend system.

### `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.2.15 → [0.3.4](../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#034))

#### 0.3.4

##### Patch Changes

- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

#### 0.3.3

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`14741e2`](https://github.com/backstage/backstage/commit/14741e2): Fully enable API token functionality for Bitbucket-Cloud.
- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 0.3.0

##### Minor Changes

- [`37fba1d`](https://github.com/backstage/backstage/commit/37fba1d): Added support for Bitbucket Cloud OAuth. This introduces an alternative authentication method using a workspace OAuth consumer, alongside App Passwords (deprecated) and API tokens. OAuth does not require a bot or service account and avoids token expiry issues.

  **BREAKING CHANGES**

  - **@backstage/integration** (`src/bitbucketCloud/core.ts`)

    - `getBitbucketCloudRequestOptions` now returns a `Promise` and **must** be awaited.

  - **@backstage/plugin-scaffolder-backend-module-bitbucket-cloud** (`src/actions/helpers.ts`)
    - `getBitbucketClient` now returns a `Promise` and **must** be awaited.
    - `getAuthorizationHeader` now returns a `Promise` and **must** be awaited.

  **OAuth usage example**

  ```yaml
  integrations:
    bitbucketCloud:
      - clientId: client-id
        clientSecret: client-secret
  ```

### `@backstage/plugin-scaffolder-common` (1.7.3 → [2.0.0](../changelogs/@backstage/plugin-scaffolder-common.md#200))

#### 2.0.0

##### Major Changes

- [`527cf88`](https://github.com/backstage/backstage/commit/527cf88): **BREAKING** Removed deprecated `bitbucket` integration from being registered in the `ScaffolderClient`. Use the `bitbucketCloud` or `bitbucketServer` integrations instead.

##### Minor Changes

- [`f598909`](https://github.com/backstage/backstage/commit/f598909): **BREAKING PRODUCERS**: Made `retry`, `listTasks`, `listTemplatingExtensions`, `dryRun`, and `autocomplete` required methods on the `ScaffolderApi` interface. Implementations of `ScaffolderApi` must now provide these methods.
- [`e8736ea`](https://github.com/backstage/backstage/commit/e8736ea): Added an optional `secrets` field to `TemplateEntityV1beta3` for configuring secrets validation. The schema for validating secrets is defined under `secrets.schema` as a JSON Schema object.

### `@backstage/plugin-scaffolder-node` (0.12.1 → [0.13.1](../changelogs/@backstage/plugin-scaffolder-node.md#0131))

#### 0.13.0

##### Minor Changes

- [`e27bd4e`](https://github.com/backstage/backstage/commit/e27bd4e): **BREAKING** Removed deprecated `bitbucket` integration from being used in the `parseRepoUrl` function. It will use the `bitbucketCloud` or `bitbucketServer` integrations instead.

##### Patch Changes

- [`cd0ecc5`](https://github.com/backstage/backstage/commit/cd0ecc5): Added `removeFiles` helper function for staging file removals in Git.
- [`f598909`](https://github.com/backstage/backstage/commit/f598909): Added `scaffolderServiceRef` and `ScaffolderService` interface for backend plugins that need to interact with the scaffolder API using `BackstageCredentials` instead of raw tokens.
- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

#### 0.12.5

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`4fc7bf0`](https://github.com/backstage/backstage/commit/4fc7bf0): Bump to tar v7
- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 0.12.3

##### Patch Changes

- [`c641c14`](https://github.com/backstage/backstage/commit/c641c14): Wrap some of the action logic with `resolveSafeChildPath` and improve symlink handling when fetching remote and local files
- [`27f9061`](https://github.com/backstage/backstage/commit/27f9061): REwrite]
- [`872eb91`](https://github.com/backstage/backstage/commit/872eb91): Upgrade `zod-to-json-schema` to latest version

### `@backstage/plugin-techdocs-addons-test-utils` (1.1.2 → [2.0.3](../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#203))

#### 2.0.2

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.

#### 2.0.0

##### Major Changes

- [`8d6709e`](https://github.com/backstage/backstage/commit/8d6709e): **BREAKING**: `TechDocsAddonTester.renderWithEffects()` no longer returns a screen; this means that you can no longer grab assertions such as `getByText` from its return value.

  Newer versions of `@testing-library` recommends using the `screen` export for assertions - and removing this from the addon tester contract allows us to more freely iterate on which underlying version of the testing library is being used.

  One notable effect of this, however, is that the `@testing-library` `screen` does NOT support assertions on the shadow DOM, which techdocs relies on. You will therefore want to add a dependency on [the `shadow-dom-testing-library` package](https://github.com/konnorrogers/shadow-dom-testing-library/) in your tests, and using its `screen` and its dedicated `*Shadow*` methods. As an example, if you keep doing `getByText` you will not get matches inside the shadow DOM - switch to `getByShadowText` instead.

  ```ts
  import { screen } from 'shadow-dom-testing-library';

  // ... render the addon ...
  await TechDocsAddonTester.buildAddonsInTechDocs([<AnAddon />])
    .withDom(<body>TEST_CONTENT</body>)
    .renderWithEffects();

  expect(screen.getByShadowText('TEST_CONTENT')).toBeInTheDocument();
  ```

### `@backstage/plugin-techdocs-node` (1.13.9 → [1.14.4](../changelogs/@backstage/plugin-techdocs-node.md#1144))

#### 1.14.4

##### Patch Changes

- [`cb7c6b1`](https://github.com/backstage/backstage/commit/cb7c6b1): Added `techdocs.generator.mkdocs.dangerouslyAllowAdditionalKeys` configuration option to explicitly bypass MkDocs configuration key restrictions. This enables support for additional MkDocs configuration keys beyond the default safe allow list, such as the `hooks` key which some MkDocs plugins require.
- [`e96f6d9`](https://github.com/backstage/backstage/commit/e96f6d9): Removed `INHERIT` from the `ALLOWED_MKDOCS_KEYS` set to address a security concern with MkDocs configuration inheritance.

#### 1.14.2

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`3c455d4`](https://github.com/backstage/backstage/commit/3c455d4): Some security fixes

#### 1.14.0

##### Minor Changes

- [`63c459c`](https://github.com/backstage/backstage/commit/63c459c): **BREAKING:** It's now possible to use the credentials from the `integrations.awsS3` config to authenticate with AWS S3. The new priority is:

  1. `aws.accounts`
  2. `techdocs.publisher.awsS3.credentials`
  3. `integrations.awsS3`
  4. Default credential chain

  In case of multiple `integrations.awsS3` are present, the target integration is determined by the `accessKeyId` in `techdocs.publisher.awsS3.credentials` if provided. Otherwise, the default credential chain is used.

  This means that depending on your setup, this feature may break your existing setup.
  In general:

  - if you are configuring `aws.accounts`, no action is required
  - if you are configuring `techdocs.publisher.awsS3.credentials`, no action is required
  - if you are configuring multiple integrations under `integrations.awsS3`, no action is required
  - if you are configuring a single integration under `integrations.awsS3`, make sure that the integration has access to the bucket you are using for TechDocs

##### Patch Changes

- [`f0951aa`](https://github.com/backstage/backstage/commit/f0951aa): Updated the `defaultDockerImage` to reflect the latest TechDocs Container version of v1.2.8

#### 1.13.10

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0
- [`703f8c0`](https://github.com/backstage/backstage/commit/703f8c0): There was an issue in the uploading of large size files to the AWS S3. We have modified the logic by adding retry along with multipart uploading functionality.

### `@backstage/ui` (0.9.1 → [0.13.2](../changelogs/@backstage/ui.md#0132))

#### 0.13.0

##### Minor Changes

- [`768f09d`](https://github.com/backstage/backstage/commit/768f09d): **BREAKING**: Simplified the neutral background prop API for container components. The explicit `neutral-1`, `neutral-2`, `neutral-3`, and `neutral-auto` values have been removed from `ProviderBg`. They are replaced by a single `'neutral'` value that always auto-increments from the parent context, making it impossible to skip or pin to an explicit neutral level.

  **Migration:**

  Replace any explicit `bg="neutral-1"`, `bg="neutral-2"`, `bg="neutral-3"`, or `bg="neutral-auto"` props with `bg="neutral"`. To achieve a specific neutral level in stories or tests, use nested containers — each additional `bg="neutral"` wrapper increments by one level.

  ```tsx
  // Before
  <Box bg="neutral-2">...</Box>

  // After
  <Box bg="neutral">
    <Box bg="neutral">...</Box>
  </Box>
  ```

  **Affected components:** Box, Flex, Grid, Card, Accordion, Popover, Tooltip, Dialog, Menu

- [`b42fcdc`](https://github.com/backstage/backstage/commit/b42fcdc): **BREAKING**: Removed `--bui-bg-popover` CSS token. Popover, Tooltip, Menu, and Dialog now use `--bui-bg-app` for their outer shell and `Box bg="neutral-1"` for content areas, providing better theme consistency and eliminating a redundant token.

  **Migration:**

  Replace any usage of `--bui-bg-popover` with `--bui-bg-neutral-1` (for content surfaces) or `--bui-bg-app` (for outer shells):

  ```diff
  - background: var(--bui-bg-popover);
  + background: var(--bui-bg-neutral-1);
  ```

  **Affected components:** Popover, Tooltip, Menu, Dialog

- [`bd3a76e`](https://github.com/backstage/backstage/commit/bd3a76e): **BREAKING**: Data attributes rendered by components are now always lowercase. This affects CSS selectors targeting camelCase data attributes.

  **Migration:**

  Update any custom CSS selectors that target camelCase data attributes to use lowercase instead:

  ```diff
  - [data-startCollapsed='true'] { ... }
  + [data-startcollapsed='true'] { ... }
  ```

  **Affected components:** SearchField

- [`95702ab`](https://github.com/backstage/backstage/commit/95702ab): **BREAKING**: Removed deprecated types `ComponentDefinition`, `ClassNamesMap`, `DataAttributeValues`, and `DataAttributesMap` from the public API. These were internal styling infrastructure types that have been replaced by the `defineComponent` system.

  **Migration:**

  Remove any direct usage of these types. Component definitions now use `defineComponent()` and their shapes are not part of the public API contract.

  ```diff
  - import type { ComponentDefinition, ClassNamesMap } from '@backstage/ui';
  ```

  If you were reading `definition.dataAttributes`, use `definition.propDefs` instead — props with `dataAttribute: true` in `propDefs` are the equivalent.

- [`42f8c9b`](https://github.com/backstage/backstage/commit/42f8c9b): **BREAKING**: Centralized client-side routing in `BUIProvider`. Components like Link, ButtonLink, Tabs, Menu, TagGroup, and Table now require a `BUIProvider` rendered inside a React Router context for client-side navigation to work.

  **Migration:**

  This change requires updating `@backstage/plugin-app` and `@backstage/core-app-api` alongside `@backstage/ui`. If you only upgrade `@backstage/ui`, BUI components will fall back to full-page navigation.

  If you cannot upgrade all packages together, or if you have a custom app shell, add a `BUIProvider` inside your Router:

  ```diff
  + import { BUIProvider } from '@backstage/ui';

    <BrowserRouter>
  +   <BUIProvider>
        <AppContent />
  +   </BUIProvider>
    </BrowserRouter>
  ```

  **Affected components:** Link, ButtonLink, Tabs, Menu, TagGroup, Table

- [`17d6398`](https://github.com/backstage/backstage/commit/17d6398): **BREAKING**: Renamed internal CSS classes to match the `Header` component name.

  **Migration:**: If you are targeting these classes directly in your styles, update the following:

  - `bui-HeaderPage` → `bui-Header`
  - `bui-HeaderPageContent` → `bui-HeaderContent`
  - `bui-HeaderPageBreadcrumbs` → `bui-HeaderBreadcrumbs`
  - `bui-HeaderPageTabsWrapper` → `bui-HeaderTabsWrapper`
  - `bui-HeaderPageControls` → `bui-HeaderControls`

  **Affected components:**: Header

- [`9d5f3ba`](https://github.com/backstage/backstage/commit/9d5f3ba): Removed redundant `selected` and `indeterminate` props from the `Checkbox` component. Use the `isSelected` and `isIndeterminate` props instead, which are the standard React Aria props and already handle both the checkbox behaviour and the corresponding CSS data attributes.

  **Migration:**
  Replace any usage of the `selected` and `indeterminate` props on `Checkbox` with the `isSelected` and `isIndeterminate` props. Note that the checked state and related CSS data attributes (such as `data-selected` and `data-indeterminate`) are now driven by React Aria, so any custom logic that previously inspected or set these via the old props should instead rely on the React Aria-managed state and attributes exposed through the new props.

  **Affected components:** Checkbox

##### Patch Changes

- [`04d9d8d`](https://github.com/backstage/backstage/commit/04d9d8d): Added `List` and `ListRow` components. These provide a standalone, accessible list of interactive rows built on top of React Aria's `GridList` and `GridListItem` primitives. Rows support icons, descriptions, actions, menus, and single or multiple selection modes.

  **Affected components:** List, ListRow

- [`a1f4bee`](https://github.com/backstage/backstage/commit/a1f4bee): Made Accordion a `bg` provider so nested components like Button auto-increment their background level. Updated `useDefinition` to resolve `bg` `propDef` defaults for provider components.
- [`db92751`](https://github.com/backstage/backstage/commit/db92751): Added interactive support to the `Card` component. Pass `onPress` to make the entire card surface pressable, or `href` to make it navigate to a URL. A transparent overlay handles the interaction while nested buttons and links remain independently clickable.
- [`12d8afe`](https://github.com/backstage/backstage/commit/12d8afe): Added analytics capabilities to the component library. Components with navigation behavior (Link, ButtonLink, Tab, MenuItem, Tag, Row) now fire analytics events on click when a `BUIProvider` is present.

  New exports: `BUIProvider`, `useAnalytics`, `getNodeText`, and associated types (`AnalyticsTracker`, `UseAnalyticsFn`, `BUIProviderProps`, `AnalyticsEventAttributes`).

  Components with analytics support now accept a `noTrack` prop to suppress event firing.

  **Affected components:** Link, ButtonLink, Tab, MenuItem, Tag, Row

- [`b838cc9`](https://github.com/backstage/backstage/commit/b838cc9): Added a `loading` prop and `data-loading` data attribute to `TableRoot`, allowing consumers to distinguish between stale data and initial loading states. Both `stale` and `loading` set `aria-busy` on the table.

  Affected components: TableRoot

- [`690786f`](https://github.com/backstage/backstage/commit/690786f): Improved the `Table` component loading state to show a skeleton UI with visible headers instead of plain "Loading..." text. The table now renders its full structure during loading, with animated skeleton rows in place of data. The loading state includes proper accessibility support with `aria-busy` on the table and screen reader announcements.

  Affected components: Table

- [`58224d3`](https://github.com/backstage/backstage/commit/58224d3): Fixed neutral-1 hover & pressed state in light mode.
- [`95702ab`](https://github.com/backstage/backstage/commit/95702ab): Migrated all components from `useStyles` to `useDefinition` hook. Exported `OwnProps` types for each component, enabling better type composition for consumers.

  **Affected components:** Avatar, Checkbox, Container, Dialog, FieldError, FieldLabel, Flex, FullPage, Grid, HeaderPage, Link, Menu, PasswordField, PluginHeader, Popover, RadioGroup, SearchField, Select, Skeleton, Switch, Table, TablePagination, Tabs, TagGroup, Text, TextField, ToggleButton, ToggleButtonGroup, Tooltip, VisuallyHidden

- [`430d5ed`](https://github.com/backstage/backstage/commit/430d5ed): Fixed interactive cards so that CardBody can scroll when the card has a constrained height. Previously, the overlay element blocked scroll events.

  **Affected components:** Card

- [`4c2c350`](https://github.com/backstage/backstage/commit/4c2c350): Removed the `transition` on `Container` padding to prevent an unwanted animation when the viewport is resized.

  Affected components: Container

- [`e0b7eb0`](https://github.com/backstage/backstage/commit/e0b7eb0): Fixed --bui-fg-success token in light mode to be more accessible.
- [`ad7c883`](https://github.com/backstage/backstage/commit/ad7c883): Deprecated the `HeaderPage` component name in favor of `Header`. The old `HeaderPage`, `HeaderPageProps`, `HeaderPageOwnProps`, `HeaderPageBreadcrumb`, and `HeaderPageDefinition` exports are still available as deprecated aliases.
- [`0ebde15`](https://github.com/backstage/backstage/commit/0ebde15): Added documentation for the table cell wrapper requirement to TSDoc comments for `Cell`, `CellText`, `CellProfile`, `ColumnConfig`, and `RowRenderFn`.
- [`d9d2dd6`](https://github.com/backstage/backstage/commit/d9d2dd6): Added `SearchAutocomplete` and `SearchAutocompleteItem` components for building accessible search-with-results patterns. Built on React Aria's Autocomplete with keyboard navigation and screen reader support. Designed for async/external search results with a configurable popover width.

  **Affected components:** SearchAutocomplete, SearchAutocompleteItem

- [`a6b84e1`](https://github.com/backstage/backstage/commit/a6b84e1): Made Checkbox `children` optional and added a dev warning when neither a visible label, `aria-label`, nor `aria-labelledby` is provided. The label wrapper div is no longer rendered when there are no children, removing the unnecessary gap.

  **Affected components:** Checkbox

- [`b99f6d5`](https://github.com/backstage/backstage/commit/b99f6d5): Fixed `Dialog` content overflowing when no `height` prop is set. The dialog now grows with its content and scrolls when content exceeds the viewport height.

  **Affected components**: Dialog

- [`2f581de`](https://github.com/backstage/backstage/commit/2f581de): Fixed focus ring styles to use React Aria's `[data-focus-visible]` data attribute instead of the native CSS `:focus-visible` pseudo-class. This ensures keyboard focus rings render reliably when focus is managed programmatically by React Aria (e.g. inside a GridList, Menu, or Select).

  **Affected components:** Accordion, Button, ButtonIcon, ButtonLink, Card, List, Menu, Select, ToggleButtonGroup

- [`17d6398`](https://github.com/backstage/backstage/commit/17d6398): Fixed incorrect bottom spacing caused by `Container` using `padding-bottom` for its default bottom spacing. Changed to `margin-bottom` and prevented it from applying when `Container` is used as the `Header` root element.

  **Affected components:** Container, Header

- [`2e5c651`](https://github.com/backstage/backstage/commit/2e5c651): Fixed `PluginHeader` to avoid triggering `ResizeObserver loop completed with undelivered notifications` warnings when used in layouts that react to the header height, such as pages that use `FullPage`.

  **Affected components:** PluginHeader

- [`d4fa5b4`](https://github.com/backstage/backstage/commit/d4fa5b4): Fixed tab `matchStrategy` matching to ignore query parameters and hash fragments in tab `href` values. Previously, tabs with query params in their `href` (e.g., `/page?group=foo`) would never show as active since matching compared the full `href` string against `location.pathname` which never includes query params.

  **Affected components:** Tabs, PluginHeader

- [`bc42b60`](https://github.com/backstage/backstage/commit/bc42b60): Fixed Table component to use current `--bui-bg-neutral-1` tokens instead of the removed `--bui-bg-tint` tokens, restoring row hover, selected, pressed, and disabled background colors.
- [`9314ff5`](https://github.com/backstage/backstage/commit/9314ff5): Fixed a bug in the `useTable` hook where the loading skeleton was never shown for `complete` mode when using `getData`. The initial data state was an empty array instead of `undefined`, causing the `Table` component to skip the loading state.
- [`f42f4cc`](https://github.com/backstage/backstage/commit/f42f4cc): Fixed Table column headers overflowing and wrapping when there is not enough space. Headers now truncate with ellipsis instead.

  **Affected components:** Table

- [`1f9682b`](https://github.com/backstage/backstage/commit/1f9682b): Fixed Table row hover, selected, pressed, and disabled background states to use the correct neutral token level based on the container background.

  **Affected components:** Table

- [`fbd5c5a`](https://github.com/backstage/backstage/commit/fbd5c5a): Fixed Table rows showing a pointer cursor when not interactive. Rows now only show `cursor: pointer` when they have an `href`, are selectable, or are pressable.

  **Affected components:** Table

- [`612c217`](https://github.com/backstage/backstage/commit/612c217): Fixed `Table` rows with external `href` values to open in a new tab by automatically applying `target="_blank"` and `rel="noopener noreferrer"`.

  **Affected components**: Table

- [`545129a`](https://github.com/backstage/backstage/commit/545129a): Updated Table selection checkboxes to use `aria-label` instead of empty fragment children, improving accessibility and removing the unnecessary label gap in the selection cells.

  **Affected components:** Table

- [`36987db`](https://github.com/backstage/backstage/commit/36987db): Fixed handling of the `style` prop on `Button`, `ButtonIcon`, and `ButtonLink` so that it is now correctly forwarded to the underlying element instead of being silently dropped.

  **Affected components:** Button, ButtonIcon, ButtonLink

- [`95702ab`](https://github.com/backstage/backstage/commit/95702ab): Fixed Link variant default from `'body'` to `'body-medium'` to match actual CSS selectors. The previous default did not correspond to a valid variant value.

  **Affected components:** Link

- [`9027b10`](https://github.com/backstage/backstage/commit/9027b10): Fixed scroll overflow in Menu and Select popover content when constrained by viewport height.

  **Affected components:** Menu, Select

- [`7960d54`](https://github.com/backstage/backstage/commit/7960d54): Added support for native HTML div attributes on the `Flex`, `Grid`, and `Grid.Item` components.

  **Affected components:** Flex, Grid, Grid.Item

- [`0559408`](https://github.com/backstage/backstage/commit/0559408): Added `virtualized` prop to `Table` component for virtualized rendering of large datasets. Accepts `true` for default row height, `{ rowHeight: number }` for fixed height, or `{ estimatedRowHeight: number }` for variable height rows.
- [`8909359`](https://github.com/backstage/backstage/commit/8909359): Fixed focus-visible outline styles for Menu and Select components.

  **Affected components:** Menu, Select

- [`12d8afe`](https://github.com/backstage/backstage/commit/12d8afe): Fixed MenuItem `onAction` prop ordering so user-provided `onAction` handlers are chained rather than silently overwritten.
- [`aa29b50`](https://github.com/backstage/backstage/commit/aa29b50): Pages created with `PageBlueprint` now render the plugin header by default in the new frontend system.
- [`bb66b86`](https://github.com/backstage/backstage/commit/bb66b86): The `Select` trigger now automatically adapts its background colour based on the parent background context.

  **Affected components:** Select

- [`4105a78`](https://github.com/backstage/backstage/commit/4105a78): Merged the internal `PluginHeaderToolbar` component into `PluginHeader`, removing the separate component and its associated types (`PluginHeaderToolbarOwnProps`, `PluginHeaderToolbarProps`) and definition (`PluginHeaderToolbarDefinition`). This is an internal refactor with no changes to the public API of `PluginHeader`.

  **Affected components:** PluginHeader

- [`9599697`](https://github.com/backstage/backstage/commit/9599697): Updated dependency `globals` to `^17.0.0`.
- [`0f462f8`](https://github.com/backstage/backstage/commit/0f462f8): Improved type safety in `useDefinition` by centralizing prop resolution and strengthening the `BgPropsConstraint` to require that `bg` provider components declare `children` as a required prop in their OwnProps type.
- [`8909359`](https://github.com/backstage/backstage/commit/8909359): Added proper cursor styles for RadioGroup items.

  **Affected components:** RadioGroup

- [`fcaac3b`](https://github.com/backstage/backstage/commit/fcaac3b): Fixed `Card` interactive cards not firing the `onPress` handler when clicking the card surface.

  **Affected components**: Card

- [`b303857`](https://github.com/backstage/backstage/commit/b303857): Fixed `isRequired` prop not being passed to the underlying React Aria field components in TextField, SearchField, and PasswordField. Previously, `isRequired` was consumed locally for the secondary label text but never forwarded, which meant the input elements lacked `aria-required="true"` and React Aria's built-in required validation was not activated.

  **Affected components:** TextField, SearchField, PasswordField

- [`934ac03`](https://github.com/backstage/backstage/commit/934ac03): `SearchField` and `TextField` now automatically adapt their background color based on the parent bg context, stepping up one neutral level (e.g. neutral-1 → neutral-2) when placed on a neutral background. `TextField` also gains a focus ring using the `--bui-ring` token.

  **Affected components:** SearchField, TextField

- [`cd3cb0f`](https://github.com/backstage/backstage/commit/cd3cb0f): Improved `useBreakpoint` performance by sharing a single set of `matchMedia` listeners across all component instances instead of creating independent listeners per hook call.
- [`36987db`](https://github.com/backstage/backstage/commit/36987db): Extended `AlertProps`, `ContainerProps`, `DialogBodyProps`, and `FieldLabelProps` with native div element props to allow passing attributes like `aria-*` and `data-*`.

  **Affected components:** Alert, Container, DialogBody, FieldLabel

#### 0.12.0

##### Minor Changes

- [`46a9adc`](https://github.com/backstage/backstage/commit/46a9adc): **BREAKING**: Alert no longer accepts a `surface` prop

  The Alert component's background is now driven entirely by its `status` prop. The `surface` prop has been removed.

  ```diff
  - <Alert surface="1" status="info" />
  + <Alert status="info" />
  ```

  **Affected components:** Alert

- [`b63c25b`](https://github.com/backstage/backstage/commit/b63c25b): **BREAKING**: Removed gray scale tokens and renamed background surface tokens to neutral tokens

  The `--bui-gray-1` through `--bui-gray-8` tokens have been removed. The `--bui-bg-surface-*` and `--bui-bg-neutral-on-surface-*` tokens have been replaced by a unified `--bui-bg-neutral-*` scale.

  **Migration:**

  Replace surface tokens directly:

  ```diff
  - background: var(--bui-bg-surface-0);
  + background: var(--bui-bg-neutral-0);
  ```

  Replace on-surface tokens shifted by +1:

  ```diff
  - background: var(--bui-bg-neutral-on-surface-0);
  + background: var(--bui-bg-neutral-1);
  ```

  Replace gray tokens 1-4 with neutral equivalents (`--bui-gray-5` through `--bui-gray-8` have no direct replacement):

  ```diff
  - background: var(--bui-gray-1);
  + background: var(--bui-bg-neutral-1);
  ```

- [`7898df0`](https://github.com/backstage/backstage/commit/7898df0): **BREAKING**: Replaced `Surface` / `onSurface` system with new provider/consumer background system

  The old `Surface` type (`'0'`–`'3'`, `'auto'`) and its associated props (`surface`, `onSurface`) have been replaced by a provider/consumer `bg` architecture.

  **Types:**

  - `ContainerBg` — `'neutral-1'` | `'neutral-2'` | `'neutral-3'` | `'danger'` | `'warning'` | `'success'`
  - `ProviderBg` — `ContainerBg | 'neutral-auto'`

  Consumer components (e.g. Button) inherit the parent's `bg` via `data-on-bg`, and CSS handles the visual step-up. See "Neutral level capping" below for details on how levels are bounded.

  **Hooks:**

  - `useBgProvider(bg?)` — for provider components. Returns `{ bg: undefined }` when no `bg` is given (transparent). Supports `'neutral-auto'` to auto-increment from the parent context.
  - `useBgConsumer()` — for consumer components. Returns the parent container's `bg` unchanged.

  **Component roles:**

  - **Provider-only** (Box, Flex, Grid): set `data-bg`, wrap children in `BgProvider`. **Transparent by default** — they do _not_ auto-increment; pass `bg="neutral-auto"` explicitly if you want automatic neutral stepping.
  - **Consumer-only** (Button, ButtonIcon, ButtonLink): set `data-on-bg`, inherit the parent container's `bg` unchanged.
  - **Provider + Consumer** (Card): sets both `data-bg` and `data-on-bg`, wraps children. Card passes `bg="neutral-auto"` to its inner Box, so it auto-increments from the parent context.

  **Neutral level capping:**

  Provider components cap at `neutral-3`. There is no `neutral-4` prop value. The `neutral-4` level exists only in consumer component CSS — for example, a Button sitting on a `neutral-3` surface uses `neutral-4` tokens internally via `data-on-bg`.

  **Migration:**

  Rename the `surface` prop to `bg` on provider components and update values:

  ```diff
  - <Box surface="1">
  + <Box bg="neutral-1">

  - <Card surface="2">
  + <Card bg="neutral-2">

  - <Flex surface="0">
  + <Flex bg="neutral-1">

  - <Grid.Root surface="1">
  + <Grid.Root bg="neutral-1">
  ```

  Remove `onSurface` from consumer components — they now always inherit from the parent container:

  ```diff
  - <Button onSurface="1" variant="secondary">
  + <Button variant="secondary">

  - <ButtonIcon onSurface="2" variant="secondary" />
  + <ButtonIcon variant="secondary" />

  - <ToggleButton onSurface="1">
  + <ToggleButton>
  ```

  Update type imports:

  ```diff
  - import type { Surface, LeafSurfaceProps, ContainerSurfaceProps } from '@backstage/ui';
  + import type { ContainerBg, ProviderBg } from '@backstage/ui';
  ```

  Replace hook usage in custom components:

  ```diff
  - import { useSurface, SurfaceProvider } from '@backstage/ui';
  + import { useBgProvider, useBgConsumer, BgProvider } from '@backstage/ui';

  - const { surface } = useSurface({ surface: props.surface });
  + const { bg } = useBgProvider(props.bg);

  - const { surface } = useSurface({ onSurface: props.onSurface });
  + const { bg } = useBgConsumer();
  ```

  Update CSS selectors targeting surface data attributes:

  ```diff
  - [data-surface='1'] { ... }
  + [data-bg='neutral-1'] { ... }

  - [data-on-surface='1'] { ... }
  + [data-on-bg='neutral-1'] { ... }
  ```

  Note: Provider components use `data-bg` (values: `neutral-1` through `neutral-3`, plus intent values). Consumer components use `data-on-bg`, which reflects the parent container's `bg` directly. The `neutral-4` level never appears as a prop or `data-bg` value — it is used only in consumer CSS.

  **Affected components:** Box, Button, ButtonIcon, ButtonLink, ToggleButton, Card, Flex, Grid

- [`4137a43`](https://github.com/backstage/backstage/commit/4137a43): **BREAKING:** Renamed, added, and removed CSS tokens.

  - Renamed `--bui-bg-neutral-0` to `--bui-bg-app`.
  - Renamed `--bui-border` to `--bui-border-2`.
  - Added `--bui-border-1` for subtle, low-contrast borders.
  - Added `--bui-bg-popover` for the background color of popovers, tooltips, menus, and dialogs.
  - Removed `--bui-border-hover`, `--bui-border-pressed`, and `--bui-border-disabled`.

  **Migration:**

  ```diff
  - var(--bui-bg-neutral-0)
  + var(--bui-bg-app)

  - var(--bui-border)
  + var(--bui-border-2)
  ```

  Remove any references to `--bui-border-hover`, `--bui-border-pressed`, and `--bui-border-disabled` as these tokens no longer exist.

- [`b1f723b`](https://github.com/backstage/backstage/commit/b1f723b): **BREAKING**: Changed CSS selectors for `ButtonIcon` and `ButtonLink` components. Custom styles targeting `.bui-Button` to style these components must be updated to use `.bui-ButtonIcon` or `.bui-ButtonLink` respectively.

  ```diff
  -/* This no longer styles ButtonIcon or ButtonLink */
  -.bui-Button[data-variant="primary"] { ... }
  +/* Use component-specific selectors */
  +.bui-ButtonIcon[data-variant="primary"] { ... }
  +.bui-ButtonLink[data-variant="primary"] { ... }
  ```

  Affected components: ButtonIcon, ButtonLink

- [`caeb9ad`](https://github.com/backstage/backstage/commit/caeb9ad): **BREAKING**: The `cell` and `header` properties in `ColumnConfig` now return `ReactElement` instead of `ReactNode`.

  This fixes an issue where React Aria's Collection component would inject an `id` prop into Fragment wrappers, causing "Invalid prop `id` supplied to `React.Fragment`" errors on render.

  Migration:

  ```diff
  const columns: ColumnConfig<MyItem>[] = [
    {
      id: 'name',
      label: 'Name',
  -   cell: (item) => item.name,
  +   cell: (item) => <CellText title={item.name} />,
  -   header: () => 'Name',
  +   header: () => <Column>Name</Column>,
    },
  ];
  ```

- [`0ec3c0e`](https://github.com/backstage/backstage/commit/0ec3c0e): **BREAKING**: Renamed the `Header` component to `PluginHeader` for clarity.

  The following exports have been renamed:

  - `Header` → `PluginHeader`
  - `HeaderProps` → `PluginHeaderProps`
  - `HeaderDefinition` → `PluginHeaderDefinition`

  The `HeaderTab` type is unchanged as it is shared with `HeaderPage`.

  CSS class names have been updated from `bui-Header*` to `bui-PluginHeader*`.

  **Migration:**

  ```diff
  -import { Header, HeaderDefinition } from '@backstage/ui';
  +import { PluginHeader, PluginHeaderDefinition } from '@backstage/ui';

  -<Header title="My plugin" />
  +<PluginHeader title="My plugin" />
  ```

  **Affected components:** plugin-header

- [`058ffd9`](https://github.com/backstage/backstage/commit/058ffd9): **BREAKING**: Removed `large` size variant from Button component as it was never implemented.

  **Migration:**

  ```diff
  - <Button size="large">Click me</Button>
  + <Button size="medium">Click me</Button>
  ```

  **Affected components:** Button

- [`110fec0`](https://github.com/backstage/backstage/commit/110fec0): **BREAKING**: Removed link and tint color tokens, added new status foreground tokens, and improved Link component styling

  The following color tokens have been removed:

  - `--bui-fg-link` (and all related tokens: `-hover`, `-pressed`, `-disabled`)
  - `--bui-fg-tint` (and all related tokens: `-hover`, `-pressed`, `-disabled`)
  - `--bui-bg-tint` (and all related tokens: `-hover`, `-pressed`, `-disabled`)
  - `--bui-border-tint` (and all related tokens)

  **New Status Tokens:**

  Added dedicated tokens for status colors that distinguish between usage on status backgrounds vs. standalone usage:

  - `--bui-fg-danger-on-bg` / `--bui-fg-danger`
  - `--bui-fg-warning-on-bg` / `--bui-fg-warning`
  - `--bui-fg-success-on-bg` / `--bui-fg-success`
  - `--bui-fg-info-on-bg` / `--bui-fg-info`

  The `-on-bg` variants are designed for text on colored backgrounds, while the base variants are for standalone status indicators with improved visibility and contrast.

  **Migration:**

  For link colors, migrate to one of the following alternatives:

  ```diff
  .custom-link {
  - color: var(--bui-fg-link);
  + color: var(--bui-fg-info);  /* For informational links */
  + /* or */
  + color: var(--bui-fg-primary);  /* For standard text links */
  }
  ```

  For tint colors (backgrounds, foregrounds, borders), migrate to appropriate status or neutral colors:

  ```diff
  .info-section {
  - background: var(--bui-bg-tint);
  + background: var(--bui-bg-info);  /* For informational sections */
  + /* or */
  + background: var(--bui-bg-neutral-1);  /* For neutral emphasis */
  }
  ```

  If you're using status foreground colors on colored backgrounds, update to the new `-on-bg` tokens:

  ```diff
  .error-badge {
  - color: var(--bui-fg-danger);
  + color: var(--bui-fg-danger-on-bg);
    background: var(--bui-bg-danger);
  }
  ```

  **Affected components:** Link

##### Patch Changes

- [`644e303`](https://github.com/backstage/backstage/commit/644e303): Added a new `FullPage` component that fills the remaining viewport height below the `PluginHeader`.

  ```tsx
  <PluginHeader title="My Plugin" tabs={tabs} />
  <FullPage>
    {/* content fills remaining height */}
  </FullPage>
  ```

  **Affected components:** FullPage

- [`44877e4`](https://github.com/backstage/backstage/commit/44877e4): Fixed dark theme `--bui-fg-secondary` and `--bui-fg-disabled` tokens using black-based `oklch(0% ...)` instead of white-based `oklch(100% ...)`, making secondary and disabled text visible on dark backgrounds.
- [`350c948`](https://github.com/backstage/backstage/commit/350c948): Fixed Box component to forward HTML attributes to the underlying div element.

  **Affected components:** Box

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`c8ae765`](https://github.com/backstage/backstage/commit/c8ae765): Fixed nested Accordion icon state issue where the inner accordion's arrow icon would incorrectly show as expanded when only the outer accordion was expanded. The CSS selector now uses a direct parent selector to ensure the icon only responds to its own accordion's expanded state.

  Affected components: Accordion

- [`4d1b7f4`](https://github.com/backstage/backstage/commit/4d1b7f4): Fixed CSS Module syntax to comply with Next.js 16 Turbopack validation by flattening nested dark theme selectors.

  **Affected components:** Popover, Tooltip

- [`2c219b9`](https://github.com/backstage/backstage/commit/2c219b9): Added `destructive` prop to Button for dangerous actions like delete or remove. Works with all variants (primary, secondary, tertiary).

  **Affected components:** Button

- [`5af9e14`](https://github.com/backstage/backstage/commit/5af9e14): Fixed `useDefinition` hook adding literal "undefined" class name when no className prop was passed.
- [`5c76d13`](https://github.com/backstage/backstage/commit/5c76d13): Allow `ref` as a prop on the `Tag` component

  Affected components: Tag

- [`ab25658`](https://github.com/backstage/backstage/commit/ab25658): Cleaned up `useDefinition` `ownProps` types to remove never-typed ghost properties from autocomplete.
- [`741a98d`](https://github.com/backstage/backstage/commit/741a98d): Allow data to be passed directly to the `useTable` hook using the property `data` instead of `getData()` for mode `"complete"`.

  This simplifies usage as data changes, rather than having to perform a `useEffect` when data changes, and then reloading the data. It also happens immediately, so stale data won't remain until a rerender (with an internal async state change), so less flickering.

  Affected components: Table

- [`a0fe1b2`](https://github.com/backstage/backstage/commit/a0fe1b2): Fixed changing columns after first render from crashing. It now renders the table with the new column layout as columns change.

  Affected components: Table

- [`508bd1a`](https://github.com/backstage/backstage/commit/508bd1a): Added new `Alert` component with support for status variants (info, success, warning, danger), icons, loading states, and custom actions.

  Updated status color tokens for improved contrast and consistency across light and dark themes:

  - Added new `--bui-bg-info` and `--bui-fg-info` tokens for info status
  - Updated `--bui-bg-danger`, `--bui-fg-danger` tokens
  - Updated `--bui-bg-warning`, `--bui-fg-warning` tokens
  - Updated `--bui-bg-success`, `--bui-fg-success` tokens

  **Affected components**: Alert

- [`da30862`](https://github.com/backstage/backstage/commit/da30862): Fixed client-side navigation for container components by wrapping the container (not individual items) in RouterProvider. Components now conditionally provide routing context only when children have internal links, removing the Router context requirement when not needed. This also removes the need to wrap these components in MemoryRouter during tests when they are not using the `href` prop.

  Additionally, when multiple tabs match the current URL via prefix matching, the tab with the most specific path (highest segment count) is now selected. For example, with URL `/catalog/users/john`, a tab with path `/catalog/users` is now selected over a tab with path `/catalog`.

  Affected components: Tabs, Tab, TagGroup, Tag, Menu, MenuItem, MenuAutocomplete

- [`092c453`](https://github.com/backstage/backstage/commit/092c453): Fixed an infinite render loop in Tabs when navigating to a URL that doesn't match any tab `href`.
- [`becf851`](https://github.com/backstage/backstage/commit/becf851): export PasswordField component
- [`becee36`](https://github.com/backstage/backstage/commit/becee36): Migrated Accordion components to use `useDefinition` instead of `useStyles`, and added automatic background adaptation based on parent container context.
- [`5320aa8`](https://github.com/backstage/backstage/commit/5320aa8): Fixed components to not require a Router context when rendering without internal links.

  Affected components: Link, ButtonLink, Row

- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.
- [`8c39412`](https://github.com/backstage/backstage/commit/8c39412): The Table component now wraps the react-aria-components `Table` with a `ResizableTableContainer` only if any column has a width property set. This means that column widths can adapt to the content otherwise (if no width is explicitly set).

  Affected components: Table

- [`cb090b4`](https://github.com/backstage/backstage/commit/cb090b4): Bump react-aria-components to v1.14.0
- [`c429101`](https://github.com/backstage/backstage/commit/c429101): Fixed React 17 compatibility by using `useId` from `react-aria` instead of the built-in React hook which is only available in React 18+.
- [`74c5a76`](https://github.com/backstage/backstage/commit/74c5a76): Fixed Switch component disabled state styling to show `not-allowed` cursor and disabled text color.

  **Affected components:** Switch

- [`20131c5`](https://github.com/backstage/backstage/commit/20131c5): Migrated to use the standard `backstage-cli package build` for CSS bundling instead of a custom build script.

#### 0.11.0

##### Minor Changes

- [`243e5e7`](https://github.com/backstage/backstage/commit/243e5e7): **BREAKING**: Redesigned Table component with new `useTable` hook API.

  - The `Table` component (React Aria wrapper) is renamed to `TableRoot`
  - New high-level `Table` component that handles data display, pagination, sorting, and selection
  - The `useTable` hook is completely redesigned with a new API supporting three pagination modes (complete, offset, cursor)
  - New types: `ColumnConfig`, `TableProps`, `TableItem`, `UseTableOptions`, `UseTableResult`

  New features include unified pagination modes, debounced query changes, stale data preservation during reloads, and row selection with toggle/replace behaviors.

  **Migration:**

  1. Update imports and use the new `useTable` hook:

  ```diff
  -import { Table, useTable } from '@backstage/ui';
  -const { data, paginationProps } = useTable({ data: items, pagination: {...} });
  +import { Table, useTable, type ColumnConfig } from '@backstage/ui';
  +const { tableProps } = useTable({
  +  mode: 'complete',
  +  getData: () => items,
  +});
  ```

  2. Define columns and render with the new Table API:

  ```diff
  -<Table aria-label="My table">
  -  <TableHeader>...</TableHeader>
  -  <TableBody items={data}>...</TableBody>
  -</Table>
  -<TablePagination {...paginationProps} />
  +const columns: ColumnConfig<Item>[] = [
  +  { id: 'name', label: 'Name', isRowHeader: true, cell: item => <CellText title={item.name} /> },
  +  { id: 'type', label: 'Type', cell: item => <CellText title={item.type} /> },
  +];
  +
  +<Table columnConfig={columns} {...tableProps} />
  ```

  **Affected components:** Table, TableRoot, TablePagination

- [`95246eb`](https://github.com/backstage/backstage/commit/95246eb): **BREAKING**: Updating color tokens to match the new neutral style on different surfaces.

  **Migration:**

  There's no direct replacement for the old tint tokens but you can use the new neutral set of color tokens on surface 0 or 1 as a replacement.

  - `--bui-bg-tint` can be replaced by `--bui-bg-neutral-on-surface-0`
  - `--bui-bg-tint-hover` can be replaced by `--bui-bg-neutral-on-surface-0-hover`
  - `--bui-bg-tint-pressed` can be replaced by `--bui-bg-neutral-on-surface-0-pressed`
  - `--bui-bg-tint-disabled` can be replaced by `--bui-bg-neutral-on-surface-0-disabled`

- [`ea0c6d8`](https://github.com/backstage/backstage/commit/ea0c6d8): **BREAKING**: Introduce new `ToggleButton` & `ToggleButtonGroup` components in Backstage UI

  **Affected components:** ToggleButton, ToggleButtonGroup

- [`4ea1d15`](https://github.com/backstage/backstage/commit/4ea1d15): **BREAKING**: Renamed CSS variable `--bui-bg` to `--bui-bg-surface-0` for consistency.

##### Patch Changes

- [`1880402`](https://github.com/backstage/backstage/commit/1880402): Fixes app background color on dark mode.

  **Affected components:** Box

- [`d2fdded`](https://github.com/backstage/backstage/commit/d2fdded): Added indeterminate state support to the Checkbox component for handling partial selection scenarios like table header checkboxes.

  **Affected components:** Checkbox

- [`4fb15d2`](https://github.com/backstage/backstage/commit/4fb15d2): Added missing `aria-label` attributes to `SearchField` components in `Select`, `MenuAutocomplete`, and `MenuAutocompleteListbox` to fix accessibility warnings.

  **Affected components:** Select, MenuAutocomplete, MenuAutocompleteListbox

- [`21c87cc`](https://github.com/backstage/backstage/commit/21c87cc): Fixes disabled state in primary and secondary buttons in Backstage UI.

  **Affected components:** Button

- [`9c76682`](https://github.com/backstage/backstage/commit/9c76682): build(deps-dev): bump `storybook` from 10.1.9 to 10.1.10
- [`de80336`](https://github.com/backstage/backstage/commit/de80336): Fixed disabled tertiary buttons incorrectly showing hover effects on surfaces.

  **Affected components:** Button

- [`133d5c6`](https://github.com/backstage/backstage/commit/133d5c6): Added new Popover component for Backstage UI with automatic overflow handling, and full placement support. Also introduced `--bui-shadow` token for consistent elevation styling across overlay components (Popover, Tooltip, Menu).

  **Affected components:** Popover

- [`973c839`](https://github.com/backstage/backstage/commit/973c839): Fixed Table sorting indicator not being visible when a column is actively sorted.

  **Affected components:** Table, Column

- [`df40cfc`](https://github.com/backstage/backstage/commit/df40cfc): Fixed Menu component trigger button not toggling correctly. Removed custom click-outside handler that was interfering with React Aria's built-in state management, allowing the menu to properly open and close when clicking the trigger button.

  **Affected components:** Menu

- [`b01ab96`](https://github.com/backstage/backstage/commit/b01ab96): Added support for column width configuration in Table component. Columns now accept `width`, `defaultWidth`, `minWidth`, and `maxWidth` props for responsive layout control.

  **Affected components:** Table, Column

- [`b4a4911`](https://github.com/backstage/backstage/commit/b4a4911): Fixed SearchField `startCollapsed` prop not working correctly in Backstage UI. The field now properly starts in a collapsed state, expands when clicked and focused, and collapses back when unfocused with no input. Also fixed CSS logic to work correctly in all layout contexts (flex row, flex column, and regular containers).

  **Affected components:** SearchField

- [`b3253b6`](https://github.com/backstage/backstage/commit/b3253b6): Fixed `Link` component causing hard page refreshes for internal routes. The component now properly uses React Router's navigation instead of full page reloads.
- [`fe7fe69`](https://github.com/backstage/backstage/commit/fe7fe69): Added support for custom pagination options in `useTable` hook and `Table` component. You can now configure `pageSizeOptions` to customize the page size dropdown, and hook into pagination events via `onPageSizeChange`, `onNextPage`, and `onPreviousPage` callbacks. When `pageSize` doesn't match any option, the first option is used and a warning is logged.

  **Affected components:** Table, TablePagination

- [`cfac8a4`](https://github.com/backstage/backstage/commit/cfac8a4): Fixed missing border styles on table selection cells in multi-select mode.

  **Affected components:** Table

- [`2532d2a`](https://github.com/backstage/backstage/commit/2532d2a): Added `className` and `style` props to the `Table` component.

  **Affected components:** Table

#### 0.10.0

##### Minor Changes

- [`16543fa`](https://github.com/backstage/backstage/commit/16543fa): **BREAKING**: The `Cell` component has been refactored to be a generic wrapper component that accepts `children` for custom cell content. The text-specific functionality (previously part of `Cell`) has been moved to a new `CellText` component.

  **Migration:**

  If you were using `Cell` with text-specific props (`title`, `description`, `leadingIcon`, `href`), you need to update your code to use `CellText` instead:

  **Before:**

  ```tsx
  <Cell
    title="My Title"
    description="My description"
    leadingIcon={<Icon />}
    href="/path"
  />
  ```

  **After:**

  ```tsx
  <CellText
    title="My Title"
    description="My description"
    leadingIcon={<Icon />}
    href="/path"
  />
  ```

  For custom cell content, use the new generic `Cell` component:

  ```tsx
  <Cell>{/* Your custom content */}</Cell>
  ```

##### Patch Changes

- [`50b7927`](https://github.com/backstage/backstage/commit/50b7927): Fixed Checkbox indicator showing checkmark color when unchecked.

  **Affected components:** Checkbox

- [`5bacf55`](https://github.com/backstage/backstage/commit/5bacf55): Fixed `ButtonIcon` incorrectly applying `className` to inner elements instead of only the root element.

  **Affected components:** ButtonIcon

- [`b3ad928`](https://github.com/backstage/backstage/commit/b3ad928): Fixed Table Row component to correctly handle cases where no `href` is provided, preventing unnecessary router provider wrapping and fixing the cursor incorrectly showing as a pointer despite the element not being a link.

  **Affected components:** Row

- [`a20d317`](https://github.com/backstage/backstage/commit/a20d317): Added row selection support with visual state styling for hover, selected, and pressed states. Fixed checkbox rendering to only show for multi-select toggle mode.

  **Affected components:** Table, TableHeader, Row, Column

- [`fe7c751`](https://github.com/backstage/backstage/commit/fe7c751): Fixed `useTable` hook to prioritize `providedRowCount` over data length for accurate row count in server-side pagination scenarios.
- [`c145031`](https://github.com/backstage/backstage/commit/c145031): Fixed Table column sorting indicator to show up arrow when no sort is active, correctly indicating that clicking will sort ascending.

  **Affected components:** Column

## Major version bumps

### `@backstage/plugin-catalog-node` (1.20.0 → [2.1.0](../changelogs/@backstage/plugin-catalog-node.md#210))

#### 2.1.0

##### Minor Changes

- [`bf71677`](https://github.com/backstage/backstage/commit/bf71677): Added the ability for SCM events subscribers to mark the fact that they have taken actions based on events, which produces output metrics:

  - `catalog.events.scm.actions` with attribute `action`: Counter for the number of actions actually taken by catalog internals or other subscribers, based on SCM events. The `action` is currently either `create`, `delete`, `refresh`, or `move`.

#### 2.0.0

##### Minor Changes

- [`cfd8103`](https://github.com/backstage/backstage/commit/cfd8103): Promoted stable catalog extension points from alpha to main export. The following extension points are now exported from `@backstage/plugin-catalog-node` instead of `@backstage/plugin-catalog-node/alpha`:

  - `catalogLocationsExtensionPoint` and `CatalogLocationsExtensionPoint`
  - `catalogProcessingExtensionPoint` and `CatalogProcessingExtensionPoint`
  - `catalogAnalysisExtensionPoint` and `CatalogAnalysisExtensionPoint`

  The old alpha exports for these extension points are now deprecated with `@deprecated` markers pointing to the new stable exports. Please update your imports from `@backstage/plugin-catalog-node/alpha` to `@backstage/plugin-catalog-node`.

  Note: The `catalogModelExtensionPoint`, `catalogPermissionExtensionPoint`, and related types remain in alpha.

- [`b4e8249`](https://github.com/backstage/backstage/commit/b4e8249): Implemented support for the new `queryLocations` and `streamLocations` that allow paginated/streamed and filtered location queries
- [`34cc520`](https://github.com/backstage/backstage/commit/34cc520): Introduced the `catalogScmEventsServiceRef`, along with `CatalogScmEventsService` and associated types. These allow communicating a unified set of events, that parts of the catalog can react to.

##### Patch Changes

- [`42abfb1`](https://github.com/backstage/backstage/commit/42abfb1): Updated `catalogServiceMock.mock` to use `createServiceMock` from `@backstage/backend-test-utils`, replacing the internal copy of `simpleMock`. Added `@backstage/backend-test-utils` as an optional peer dependency.
- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports

## 0.x minor version bumps

### `@backstage/backend-dynamic-feature-service` (0.7.6 → [0.8.0](../changelogs/@backstage/backend-dynamic-feature-service.md#080))

#### 0.8.0

##### Minor Changes

- [`0fbcf23`](https://github.com/backstage/backstage/commit/0fbcf23): Migrated OpenAPI schemas to 3.1.

##### Patch Changes

- [`4074a22`](https://github.com/backstage/backstage/commit/4074a22): Fixed `resolvePackagePath` resolution for bundled dynamic plugins. When a plugin bundles its own copy of `@backstage/backend-plugin-api` inside `node_modules`, the `CommonJSModuleLoader` fallback now correctly resolves the plugin's `package.json` by name. Previously the fallback only applied when the resolution originated from the host application; it now also applies when originating from a bundled dependency, which is the case for plugins produced by the `backstage-cli package bundle` command.
- [`70fc178`](https://github.com/backstage/backstage/commit/70fc178): Migrated from deprecated `findPaths` to `targetPaths` and `findOwnPaths` from `@backstage/cli-common`.

#### 0.7.9

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`fdbd404`](https://github.com/backstage/backstage/commit/fdbd404): Updated `@module-federation/enhanced`, `@module-federation/runtime`, and `@module-federation/sdk` dependencies from `^0.9.0` to `^0.21.6`.
- [`9b4c414`](https://github.com/backstage/backstage/commit/9b4c414): Updated README for backend-dynamic-feature-service

#### 0.7.7

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0

### `@backstage/cli-common` (0.1.15 → [0.2.0](../changelogs/@backstage/cli-common.md#020))

#### 0.2.0

##### Minor Changes

- [`56bd494`](https://github.com/backstage/backstage/commit/56bd494): Added `targetPaths` and `findOwnPaths` as replacements for `findPaths`, with a cleaner separation between target project paths and package-relative paths.

  To migrate existing `findPaths` usage:

  ```ts
  // Before
  import { findPaths } from '@backstage/cli-common';
  const paths = findPaths(__dirname);

  // After — for target project paths (cwd-based):
  import { targetPaths } from '@backstage/cli-common';
  // paths.targetDir    → targetPaths.dir
  // paths.targetRoot   → targetPaths.rootDir
  // paths.resolveTarget('src')      → targetPaths.resolve('src')
  // paths.resolveTargetRoot('yarn.lock') → targetPaths.resolveRoot('yarn.lock')

  // After — for package-relative paths:
  import { findOwnPaths } from '@backstage/cli-common';
  const own = findOwnPaths(__dirname);
  // paths.ownDir       → own.dir
  // paths.ownRoot      → own.rootDir
  // paths.resolveOwn('config/jest.js')    → own.resolve('config/jest.js')
  // paths.resolveOwnRoot('tsconfig.json') → own.resolveRoot('tsconfig.json')
  ```

##### Patch Changes

- [`e44b6a9`](https://github.com/backstage/backstage/commit/e44b6a9): The `findOwnRootDir` utility now searches for the monorepo root by traversing up the directory tree looking for a `package.json` with `workspaces`, instead of assuming a fixed `../..` relative path. If no workspaces root is found during this traversal, `findOwnRootDir` now throws to enforce stricter validation of the repository layout.
- [`9361965`](https://github.com/backstage/backstage/commit/9361965): Fixed `runCheck` to ignore stdio of the spawned process, preventing unwanted output from leaking to the terminal.

#### 0.1.18

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports

#### 0.1.17

##### Patch Changes

- [`ae4dd5d`](https://github.com/backstage/backstage/commit/ae4dd5d): Move some of the symlink resolution to `isChildPath`

#### 0.1.16

##### Patch Changes

- [`5cfb2a4`](https://github.com/backstage/backstage/commit/5cfb2a4): Added new `run`, `runOutput`, and `runCheck` utilities to help run child processes in a safe and portable way.
- [`c8c2329`](https://github.com/backstage/backstage/commit/c8c2329): Add proxy configuration from env-vars to create-app tasks
- [`2bae83a`](https://github.com/backstage/backstage/commit/2bae83a): Bumped dev dependencies `@types/node`

### `@backstage/cli-node` (0.2.15 → [0.3.0](../changelogs/@backstage/cli-node.md#030))

#### 0.3.0

##### Minor Changes

- [`7d055ef`](https://github.com/backstage/backstage/commit/7d055ef): Added `createCliModule` API and related types for building Backstage CLI plugins.

##### Patch Changes

- [`94a885a`](https://github.com/backstage/backstage/commit/94a885a): Added a new `cli-module` package role for packages that provide CLI plugin extensions.
- [`12fa965`](https://github.com/backstage/backstage/commit/12fa965): Added `CliAuth` class for managing CLI authentication state. This provides a class-based API with a static `create` method that resolves the currently selected (or explicitly named) auth instance, transparently refreshes expired access tokens, and exposes helpers for other CLI modules to authenticate with a Backstage backend.
- [`61cb976`](https://github.com/backstage/backstage/commit/61cb976): Added `toString()` method to `Lockfile` for serializing lockfiles back to string format.
- [`06c2015`](https://github.com/backstage/backstage/commit/06c2015): Added `runConcurrentTasks` and `runWorkerQueueThreads` utilities, moved from the `@backstage/cli` internal code.
- [`70fc178`](https://github.com/backstage/backstage/commit/70fc178): Migrated from deprecated `findPaths` to `targetPaths` and `findOwnPaths` from `@backstage/cli-common`.
- [`3c811bf`](https://github.com/backstage/backstage/commit/3c811bf): Added `hasBackstageYarnPlugin` and `SuccessCache` exports, moved from `@backstage/cli`.
- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.
- [`a9d23c4`](https://github.com/backstage/backstage/commit/a9d23c4): Properly support `package.json` `workspaces` field

#### 0.2.18

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`5e3ef57`](https://github.com/backstage/backstage/commit/5e3ef57): Added support for the new `peerModules` metadata field in `package.json`. This field allows plugin packages to declare modules that should be installed alongside them for cross-plugin integrations. The field is validated by `backstage-cli repo fix --publish`.
- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 0.2.16

##### Patch Changes

- [`4e8c726`](https://github.com/backstage/backstage/commit/4e8c726): Updated to use new utilities from `@backstage/cli-common`.

### `@backstage/plugin-app-visualizer` (0.1.25 → [0.2.1](../changelogs/@backstage/plugin-app-visualizer.md#021))

#### 0.2.1

##### Patch Changes

- [`c25532a`](https://github.com/backstage/backstage/commit/c25532a): Switched dev entry point to use `createDevApp` from `@backstage/frontend-dev-utils`.

#### 0.2.0

##### Minor Changes

- [`ef6916e`](https://github.com/backstage/backstage/commit/ef6916e): Migrated to use `SubPageBlueprint` for tabbed navigation and added a copy-tree-as-JSON plugin header action using `PluginHeaderActionBlueprint`. The plugin now specifies a `title` and `icon`.

##### Patch Changes

- [`cb090b4`](https://github.com/backstage/backstage/commit/cb090b4): Bump react-aria-components to v1.14.0
- [`c38b74d`](https://github.com/backstage/backstage/commit/c38b74d): Internal updates for blueprint moves to `@backstage/plugin-app-react`.
- [`4137a43`](https://github.com/backstage/backstage/commit/4137a43): Updated CSS token references to use renamed `--bui-border-2` token.
- [`4d50e1f`](https://github.com/backstage/backstage/commit/4d50e1f): Improved rendering performance of the details page.
- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.

#### 0.1.26

##### Patch Changes

- [`d02db50`](https://github.com/backstage/backstage/commit/d02db50): Remove unnecessary use of `compatWrapper` and `convertLegacyRouteRef`(s) for the new frontend system.

### `@backstage/plugin-auth-backend` (0.25.6 → [0.27.3](../changelogs/@backstage/plugin-auth-backend.md#0273))

#### 0.27.2

##### Patch Changes

- [`1ccad86`](https://github.com/backstage/backstage/commit/1ccad86): Added `who-am-i` action to the auth backend actions registry. Returns the catalog entity and user info for the currently authenticated user.
- [`d0f4cd2`](https://github.com/backstage/backstage/commit/d0f4cd2): Added optional client metadata document endpoint at `/.well-known/oauth-client/cli.json` relative to the auth backend base URL for CLI authentication. Enabled when `auth.experimentalClientIdMetadataDocuments.enabled` is set to `true`.
- [`6738cf0`](https://github.com/backstage/backstage/commit/6738cf0): build(deps): bump `minimatch` from 9.0.5 to 10.2.1
- [`e9b6e97`](https://github.com/backstage/backstage/commit/e9b6e97): Fixed a security vulnerability where the CIMD metadata fetch could follow HTTP redirects to internal hosts, bypassing SSRF protections.
- [`0f9d673`](https://github.com/backstage/backstage/commit/0f9d673): Improved redirect URI validation in the experimental OIDC provider to match against normalized URLs rather than raw strings.
- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.
- [`634eded`](https://github.com/backstage/backstage/commit/634eded): Fixed a foreign key constraint violation when issuing refresh tokens for CIMD clients, and
  prevented a failed refresh token issuance from failing the entire token exchange.
  Fixed AWS ALB auth provider incorrectly returning HTTP 500 instead of 401 for JWT validation failures,
  which caused retry loops and memory pressure under load.
- [`619be54`](https://github.com/backstage/backstage/commit/619be54): Update migrations to be reversible

#### 0.27.0

##### Minor Changes

- [`31de2c9`](https://github.com/backstage/backstage/commit/31de2c9): Added experimental support for Client ID Metadata Documents (CIMD).

  This allows Backstage to act as an OAuth 2.0 authorization server that supports the [IETF Client ID Metadata Document draft](https://datatracker.ietf.org/doc/draft-ietf-oauth-client-id-metadata-document/). External OAuth clients can use HTTPS URLs as their `client_id`, and Backstage will fetch metadata from those URLs to validate the client.

  **Configuration example:**

  ```yaml
  auth:
    experimentalClientIdMetadataDocuments:
      enabled: true
      # Optional: restrict which `client_id` URLs are allowed (defaults to ['*'])
      allowedClientIdPatterns:
        - 'https://example.com/*'
        - 'https://*.trusted-domain.com/*'
      # Optional: restrict which redirect URIs are allowed (defaults to ['*'])
      allowedRedirectUriPatterns:
        - 'http://localhost:*'
        - 'https://*.example.com/*'
  ```

  Clients using CIMD must host a JSON metadata document at their `client_id` URL containing at minimum:

  ```json
  {
    "client_id": "https://example.com/.well-known/oauth-client/my-app",
    "client_name": "My Application",
    "redirect_uris": ["http://localhost:8080/callback"],
    "token_endpoint_auth_method": "none"
  }
  ```

- [`d0786b9`](https://github.com/backstage/backstage/commit/d0786b9): Added experimental support for refresh tokens via the `auth.experimentalRefreshToken.enabled` configuration option. When enabled, clients can request the `offline_access` scope to receive refresh tokens that can be used to obtain new access tokens without re-authentication.

##### Patch Changes

- [`7dc3dfe`](https://github.com/backstage/backstage/commit/7dc3dfe): Removed the `auth.experimentalDynamicClientRegistration.tokenExpiration` config option. DCR tokens now use the default 1 hour expiration.

  If you need longer-lived access, use refresh tokens via the `offline_access` scope instead. DCR clients should already have the `offline_access` scope available. Enable refresh tokens by setting:

  ```yaml
  auth:
    experimentalRefreshToken:
      enabled: true
  ```

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports

#### 0.26.0

##### Minor Changes

- [`7ffc873`](https://github.com/backstage/backstage/commit/7ffc873): Fix `user_created_at` migration causing `SQLiteError` regarding use of non-constants for defaults

#### 0.25.7

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0

### `@backstage/plugin-auth-backend-module-auth0-provider` (0.2.9 → [0.3.1](../changelogs/@backstage/plugin-auth-backend-module-auth0-provider.md#031))

#### 0.3.0

##### Minor Changes

- [`36804fe`](https://github.com/backstage/backstage/commit/36804fe): feat: Added organization option to authorization params of the strategy

##### Patch Changes

- [`867c905`](https://github.com/backstage/backstage/commit/867c905): Add support for organizational invites in auth0 strategy

#### 0.2.10

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0

### `@backstage/plugin-auth-backend-module-github-provider` (0.3.9 → [0.5.1](../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#051))

#### 0.5.1

##### Patch Changes

- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

#### 0.5.0

##### Minor Changes

- [`ff07934`](https://github.com/backstage/backstage/commit/ff07934): Added the `userIdMatchingUserEntityAnnotation` sign-in resolver that matches users by their GitHub user ID.

##### Patch Changes

- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 0.4.0

##### Minor Changes

- [`b3286d5`](https://github.com/backstage/backstage/commit/b3286d5): Added the `github.com/user-id` annotation to store GitHub's user ID (immutable) in user entities. Also includes addition of the `userIdMatchingUserEntityAnnotation` sign-in resolver that matches users by the new ID.

### `@backstage/plugin-auth-backend-module-gitlab-provider` (0.3.9 → [0.4.1](../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#041))

#### 0.4.1

##### Patch Changes

- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

#### 0.4.0

##### Minor Changes

- [`ff07934`](https://github.com/backstage/backstage/commit/ff07934): Added the `{gitlab-integration-host}/user-id` annotation to store GitLab's user ID (immutable) in user entities. Also includes addition of the `userIdMatchingUserEntityAnnotation` sign-in resolver that matches users by the new ID.

##### Patch Changes

- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 0.3.10

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0

### `@backstage/plugin-catalog-backend-module-github` (0.11.2 → [0.13.0](../changelogs/@backstage/plugin-catalog-backend-module-github.md#0130))

#### 0.13.0

##### Minor Changes

- [`b11c2cd`](https://github.com/backstage/backstage/commit/b11c2cd): The default user transformer now prefers organization verified domain emails over the user's public GitHub email when populating the user entity profile. It also strips plus-addressed routing tags that GitHub adds to these emails.

  If you want to retain the old behavior, you can do so with a custom user transformer using the `githubOrgEntityProviderTransformsExtensionPoint`:

  ```ts
  import { createBackendModule } from '@backstage/backend-plugin-api';
  import { githubOrgEntityProviderTransformsExtensionPoint } from '@backstage/plugin-catalog-backend-module-github-org';
  import { defaultUserTransformer } from '@backstage/plugin-catalog-backend-module-github';

  export default createBackendModule({
    pluginId: 'catalog',
    moduleId: 'github-org-custom-transforms',
    register(env) {
      env.registerInit({
        deps: {
          transforms: githubOrgEntityProviderTransformsExtensionPoint,
        },
        async init({ transforms }) {
          transforms.setUserTransformer(async (item, ctx) => {
            const entity = await defaultUserTransformer(item, ctx);
            if (entity && item.email) {
              entity.spec.profile!.email = item.email;
            }
            return entity;
          });
        },
      });
    },
  });
  ```

##### Patch Changes

- [`6738cf0`](https://github.com/backstage/backstage/commit/6738cf0): build(deps): bump `minimatch` from 9.0.5 to 10.2.1
- [`106d1b2`](https://github.com/backstage/backstage/commit/106d1b2): Added a `defaultUserTransformer.useVerifiedEmails` config option for the `githubOrg` provider. When set to `true`, the default user transformer prefers organization verified domain emails over the user's public GitHub email. Defaults to `false`, which uses only the public GitHub email.

  This option has no effect when a custom user transformer is set via the `githubOrgEntityProviderTransformsExtensionPoint`.

  ```yaml
  catalog:
    providers:
      githubOrg:
        production:
          githubUrl: https://github.com
          orgs:
            - my-org
          defaultUserTransformer:
            useVerifiedEmails: true
  ```

#### 0.12.2

##### Patch Changes

- [`cfd8103`](https://github.com/backstage/backstage/commit/cfd8103): Updated imports to use stable catalog extension points from `@backstage/plugin-catalog-node` instead of the deprecated alpha exports.
- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`34cc520`](https://github.com/backstage/backstage/commit/34cc520): Implemented translation of webhook events into `catalogScmEventsServiceRef` events.

#### 0.12.1

##### Patch Changes

- [`cb4b907`](https://github.com/backstage/backstage/commit/cb4b907): Improved efficiency of `GithubOrgEntityProvider` membership event handling and edit team. The provider now fetches only the specific user's teams instead of all organization users when processing membership events, and uses `addEntitiesOperation` instead of `replaceEntitiesOperation` to avoid unnecessary entity deletions.

#### 0.12.0

##### Minor Changes

- [`b3286d5`](https://github.com/backstage/backstage/commit/b3286d5): Added the `github.com/user-id` annotation to store GitHub's user ID (immutable) in user entities. Also includes addition of the `userIdMatchingUserEntityAnnotation` sign-in resolver that matches users by the new ID.

##### Patch Changes

- [`ed5a7a3`](https://github.com/backstage/backstage/commit/ed5a7a3): Introduce new configuration option to exclude suspended users from GitHub Enterprise instances.

  When it’s set to true, suspended users won’t be returned when querying the organization users for GitHub Enterprise instances.
  Note that this option should be used only against GitHub Enterprise instances, the property does not exist in the github.com GraphQL schema, setting it will cause a schema validation error and the syncing of users will fail.

- [`a413977`](https://github.com/backstage/backstage/commit/a413977): Added configurable `pageSizes` option to `GithubOrgEntityProvider` for GitHub GraphQL API queries to prevent `RESOURCE_LIMITS_EXCEEDED` errors with organizations with large number of teams and members. This aligns the configuration options with `GithubMultiOrgEntityProvider`.

### `@backstage/plugin-catalog-backend-module-gitlab` (0.7.5 → [0.8.1](../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#081))

#### 0.8.1

##### Patch Changes

- [`d933f62`](https://github.com/backstage/backstage/commit/d933f62): Add configurable throttling and retry mechanism for GitLab integration.

#### 0.8.0

##### Minor Changes

- [`2f51676`](https://github.com/backstage/backstage/commit/2f51676): allow entity discoverability via gitlab search API
- [`ff07934`](https://github.com/backstage/backstage/commit/ff07934): Added the `{gitlab-integration-host}/user-id` annotation to store GitLab's user ID (immutable) in user entities. Also includes addition of the `userIdMatchingUserEntityAnnotation` sign-in resolver that matches users by the new ID.

##### Patch Changes

- [`cfd8103`](https://github.com/backstage/backstage/commit/cfd8103): Updated imports to use stable catalog extension points from `@backstage/plugin-catalog-node` instead of the deprecated alpha exports.
- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`7e6b5e5`](https://github.com/backstage/backstage/commit/7e6b5e5): Fixed GitLab search API scope parameter from `'blob'` to `'blobs'`, resolving 400 errors in discovery provider.

### `@backstage/plugin-catalog-backend-module-msgraph` (0.8.2 → [0.9.1](../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#091))

#### 0.9.1

##### Patch Changes

- [`97eaecf`](https://github.com/backstage/backstage/commit/97eaecf): Fixed scheduler task remaining stuck in running state after pod termination by propagating AbortSignal into MicrosoftGraphOrgEntityProvider.read()

#### 0.9.0

##### Minor Changes

- [`8694561`](https://github.com/backstage/backstage/commit/8694561): Log group/user count, tenant ID, execution time as separate fields

##### Patch Changes

- [`cfd8103`](https://github.com/backstage/backstage/commit/cfd8103): Updated imports to use stable catalog extension points from `@backstage/plugin-catalog-node` instead of the deprecated alpha exports.

#### 0.8.4

##### Patch Changes

- [`115b378`](https://github.com/backstage/backstage/commit/115b378): Changed the logger level from 'warning' to 'debug' when we are unable to load the user's photo.

### `@backstage/plugin-events-backend` (0.5.8 → [0.6.0](../changelogs/@backstage/plugin-events-backend.md#060))

#### 0.6.0

##### Minor Changes

- [`0fbcf23`](https://github.com/backstage/backstage/commit/0fbcf23): Migrated OpenAPI schemas to 3.1.

#### 0.5.11

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports

#### 0.5.9

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0

### `@backstage/plugin-events-backend-module-google-pubsub` (0.1.6 → [0.2.1](../changelogs/@backstage/plugin-events-backend-module-google-pubsub.md#021))

#### 0.2.0

##### Minor Changes

- [`80905b3`](https://github.com/backstage/backstage/commit/80905b3): Added an optional `filter` property to PubSub consumers/publishers

### `@backstage/plugin-events-backend-module-kafka` (0.1.5 → [0.3.2](../changelogs/@backstage/plugin-events-backend-module-kafka.md#032))

#### 0.3.0

##### Minor Changes

- [`ef5bbd8`](https://github.com/backstage/backstage/commit/ef5bbd8): Add support for Kafka offset configuration (`fromBeginning`) and `autoCommit`

#### 0.2.0

##### Minor Changes

- [`2c74ea9`](https://github.com/backstage/backstage/commit/2c74ea9): Added support for multiple named instances in `kafkaConsumingEventPublisher` configuration. The previous single configuration format is still supported for backward compatibility.
- [`2c74ea9`](https://github.com/backstage/backstage/commit/2c74ea9): Added `KafkaPublishingEventConsumer` to support sending Backstage events to Kafka topics.

  This addition enables Backstage to publish events to external Kafka systems, complementing the existing ability to receive events from Kafka. This allows for better integration with external systems that rely on Kafka for event streaming.

### `@backstage/plugin-home` (0.8.14 → [0.9.3](../changelogs/@backstage/plugin-home.md#093))

#### 0.9.3

##### Patch Changes

- [`538c985`](https://github.com/backstage/backstage/commit/538c985): Updated installation documentation to use feature discovery as the default.
- [`0be2541`](https://github.com/backstage/backstage/commit/0be2541): Promoted the plugin's translation ref to the stable package entry point. It was previously only available through the alpha entry point.
- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

#### 0.9.2

##### Patch Changes

- [`018ca87`](https://github.com/backstage/backstage/commit/018ca87): Added `title` and `icon` to the plugin definition for the new frontend system.
- [`90956a6`](https://github.com/backstage/backstage/commit/90956a6): Support new frontend system in the homepage plugin
- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.
- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 0.9.0

##### Minor Changes

- [`e091a83`](https://github.com/backstage/backstage/commit/e091a83): Widget configurations are now only saved to storage when the Save button is explicitly clicked. Added a Cancel button that allows users to discard unsaved changes and revert to the last saved state.

##### Patch Changes

- [`bdda543`](https://github.com/backstage/backstage/commit/bdda543): Updated WidgetOverlay color to use `alpha(theme.palette.background.paper, 0.93)` for better theme alignment instead of hardcoded RGBA

#### 0.8.15

##### Patch Changes

- [`d02db50`](https://github.com/backstage/backstage/commit/d02db50): Remove unnecessary use of `compatWrapper` and `convertLegacyRouteRef`(s) for the new frontend system.
- [`be21c5c`](https://github.com/backstage/backstage/commit/be21c5c): Updated dependency `@rjsf/utils` to `5.24.13`.
  Updated dependency `@rjsf/core` to `5.24.13`.
  Updated dependency `@rjsf/material-ui` to `5.24.13`.
  Updated dependency `@rjsf/validator-ajv8` to `5.24.13`.

### `@backstage/plugin-kubernetes-backend` (0.20.4 → [0.21.2](../changelogs/@backstage/plugin-kubernetes-backend.md#0212))

#### 0.21.2

##### Patch Changes

- [`6b6b5de`](https://github.com/backstage/backstage/commit/6b6b5de): Added `endpointType` config option to the GKE cluster locator, allowing use of DNS-based control plane endpoints instead of public IP endpoints. Set `endpointType: 'dns'` to use GKE DNS endpoints (e.g. `gke-<uid>.<region>.gke.goog`) which provide proper TLS certificates and IAM-based access control.

#### 0.21.1

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`ce3639c`](https://github.com/backstage/backstage/commit/ce3639c): Add PersistentVolume and PersistentVolumeClaims Rendering

#### 0.21.0

##### Minor Changes

- [`7f9846f`](https://github.com/backstage/backstage/commit/7f9846f): Add possibility to extends Kubernetes REST API. Add fetcher to parameters for custom objects provider

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0
- [`fb029b6`](https://github.com/backstage/backstage/commit/fb029b6): Updated luxon types
- [`e9589d9`](https://github.com/backstage/backstage/commit/e9589d9): Replace `@aws-sdk/signature-v4` with `@smithy/signature-v4`,
  as stated in the [package documentation](https://www.npmjs.com/package/@aws-sdk/signature-v4?activeTab=readme)
- [`8fa8d87`](https://github.com/backstage/backstage/commit/8fa8d87): Add Kubernetes Plugin Secrets Accordion with masked secret datas

### `@backstage/plugin-kubernetes-node` (0.3.6 → [0.4.2](../changelogs/@backstage/plugin-kubernetes-node.md#042))

#### 0.4.1

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`ce3639c`](https://github.com/backstage/backstage/commit/ce3639c): Add PersistentVolume and PersistentVolumeClaims Rendering

#### 0.4.0

##### Minor Changes

- [`7f9846f`](https://github.com/backstage/backstage/commit/7f9846f): Add possibility to extends Kubernetes REST API. Add fetcher to parameters for custom objects provider

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.10.0 → [0.11.4](../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#0114))

#### 0.11.4

##### Patch Changes

- [`5730c8e`](https://github.com/backstage/backstage/commit/5730c8e): Added `maskedAndHidden` option to `gitlab:projectVariable:create` and `publish:gitlab` action to support creating GitLab project variables that are both masked and hidden. Updated gitbeaker to version 43.8.0 for proper type support.
- [`0c1726a`](https://github.com/backstage/backstage/commit/0c1726a): Added new `gitlab:group:access` scaffolder action to add or remove users and groups as members of GitLab groups. The action supports specifying members via `userIds` and/or `groupIds` array parameters, configurable access levels (Guest, Reporter, Developer, Maintainer, Owner), and defaults to the 'add' action when not specified.
- [`4b8fcf0`](https://github.com/backstage/backstage/commit/4b8fcf0): Added two optional inputs to the `publish:gitlab` action:

  - `settings.name`: set a custom human-readable project title that differs from the repository slug.
  - `ownerUsername`: add a specific GitLab user as project owner (access level 50) of the newly created repository. Requires a privileged token in the integration configuration.

- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

#### 0.11.3

##### Patch Changes

- [`6b5e7d9`](https://github.com/backstage/backstage/commit/6b5e7d9): Allow setting optional description on group creation
- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`f0f9403`](https://github.com/backstage/backstage/commit/f0f9403): Changed `gitlab:group:ensureExists` action to use `Groups.show` API instead of `Groups.search` for checking if a group path exists. This is more efficient as it directly retrieves the group by path rather than searching and filtering results.
- [`32c51c0`](https://github.com/backstage/backstage/commit/32c51c0): Added new `gitlab:user:info` scaffolder action that retrieves information about a GitLab user. The action can fetch either the current authenticated user or a specific user by ID.
- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 0.11.0

##### Minor Changes

- [`f2d034b`](https://github.com/backstage/backstage/commit/f2d034b): In the `gitlabRepoPush` action, add 'auto' possibility for `commitAction` input.

### `@backstage/plugin-scaffolder-backend-module-sentry` (0.2.15 → [0.3.2](../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#032))

#### 0.3.1

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports

#### 0.3.0

##### Minor Changes

- [`ab606b2`](https://github.com/backstage/backstage/commit/ab606b2): Add ability to configure the API Base URL

### `@backstage/plugin-user-settings` (0.8.29 → [0.9.1](../changelogs/@backstage/plugin-user-settings.md#091))

#### 0.9.1

##### Patch Changes

- [`e26e3de`](https://github.com/backstage/backstage/commit/e26e3de): The `ProviderSettingsItem` `icon` prop now accepts `IconElement` in addition to `IconComponent`.
- [`538c985`](https://github.com/backstage/backstage/commit/538c985): Updated installation documentation to use feature discovery as the default.
- [`aa29b50`](https://github.com/backstage/backstage/commit/aa29b50): New frontend system pages now use the default plugin header together with `HeaderPage` instead of the legacy core page header pattern.
- [`3f36ce1`](https://github.com/backstage/backstage/commit/3f36ce1): Updated alpha plugin icons to follow the new frontend icon sizing rules when rendered in plugin and navigation surfaces.
- [`0be2541`](https://github.com/backstage/backstage/commit/0be2541): Promoted the plugin's translation ref to the stable package entry point. It was previously only available through the alpha entry point.

#### 0.9.0

##### Minor Changes

- [`104ca74`](https://github.com/backstage/backstage/commit/104ca74): User-settings will now use DataLoader to batch consecutive calls into one API call to improve performance

##### Patch Changes

- [`018ca87`](https://github.com/backstage/backstage/commit/018ca87): Added `title` and `icon` to the plugin definition for the new frontend system.
- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.

#### 0.8.30

##### Patch Changes

- [`d02db50`](https://github.com/backstage/backstage/commit/d02db50): Remove unnecessary use of `compatWrapper` and `convertLegacyRouteRef`(s) for the new frontend system.

### `@backstage/plugin-user-settings-backend` (0.3.8 → [0.4.1](../changelogs/@backstage/plugin-user-settings-backend.md#041))

#### 0.4.1

##### Patch Changes

- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

#### 0.4.0

##### Minor Changes

- [`104ca74`](https://github.com/backstage/backstage/commit/104ca74): User-settings will now use DataLoader to batch consecutive calls into one API call to improve performance

##### Patch Changes

- [`8148621`](https://github.com/backstage/backstage/commit/8148621): Moved `@backstage/backend-defaults` from `dependencies` to `devDependencies`.

#### 0.3.10

##### Patch Changes

- [`ad01e54`](https://github.com/backstage/backstage/commit/ad01e54): Resolves an issue where user setting keys containing slashes returned 404 not found.

#### 0.3.9

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0

### `@backstage/plugin-user-settings-common` (0.0.1 → [0.1.0](../changelogs/@backstage/plugin-user-settings-common.md#010))

#### 0.1.0

##### Minor Changes

- [`104ca74`](https://github.com/backstage/backstage/commit/104ca74): User-settings will now use DataLoader to batch consecutive calls into one API call to improve performance

### `@backstage/repo-tools` (0.16.0 → [0.17.0](../changelogs/@backstage/repo-tools.md#0170))

#### 0.17.0

##### Minor Changes

- [`0fbcf23`](https://github.com/backstage/backstage/commit/0fbcf23): Added support for OpenAPI 3.1 to all `schema openapi` commands. The commands now auto-detect the OpenAPI version from the spec file and use the appropriate generator, supporting both OpenAPI 3.0.x and 3.1.x specifications.

##### Patch Changes

- [`426edbe`](https://github.com/backstage/backstage/commit/426edbe): Fixed `generate-catalog-info` command failing with "too many arguments" when invoked by lint-staged via the pre-commit hook.
- [`d5779e5`](https://github.com/backstage/backstage/commit/d5779e5): Updated the CLI report parser to support cleye-style help output, and strip ANSI escape codes from captured output.
- [`6738cf0`](https://github.com/backstage/backstage/commit/6738cf0): build(deps): bump `minimatch` from 9.0.5 to 10.2.1
- [`2a51546`](https://github.com/backstage/backstage/commit/2a51546): Fixed prettier existence checks in OpenAPI commands to use `fs.pathExists` instead of checking the resolved path string, which was always truthy.
- [`70fc178`](https://github.com/backstage/backstage/commit/70fc178): Migrated from deprecated `findPaths` to `targetPaths` and `findOwnPaths` from `@backstage/cli-common`.
- [`de62a9d`](https://github.com/backstage/backstage/commit/de62a9d): Upgraded `commander` dependency from `^12.0.0` to `^14.0.3` across all CLI packages.
- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.
- [`18a946c`](https://github.com/backstage/backstage/commit/18a946c): Updated `@microsoft/api-extractor` to `7.57.3` and added tests for `getTsDocConfig`

#### 0.16.4

##### Patch Changes

- [`cd75ed0`](https://github.com/backstage/backstage/commit/cd75ed0): Add newline to OpenAPI license template files.
- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`4fc7bf0`](https://github.com/backstage/backstage/commit/4fc7bf0): Bump to tar v7
- [`6523040`](https://github.com/backstage/backstage/commit/6523040): Support Prettier v3 for api-reports
- [`be7ebad`](https://github.com/backstage/backstage/commit/be7ebad): Updated package-docs exclude list to reflect renamed example app packages.
- [`df59ee6`](https://github.com/backstage/backstage/commit/df59ee6): The `type-deps` command now follows relative imports and re-exports into declaration chunk files, and detects ambient global types such as the `jest` namespace.
- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.
- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 0.16.2

##### Patch Changes

- [`498f9dd`](https://github.com/backstage/backstage/commit/498f9dd): Fixed help text for `backstage-repo-tools package schema openapi generate` command.

#### 0.16.1

##### Patch Changes

- [`688f070`](https://github.com/backstage/backstage/commit/688f070): Updated to use new utilities from `@backstage/cli-common`.
- [`85895f9`](https://github.com/backstage/backstage/commit/85895f9): Updates OpenAPI generator templates to preserve original property names (like 'group-name', 'user-id') from OpenAPI specs when propertyNaming=original is specified. Previously, these were always converted to camelCase regardless of the propertyNaming setting.

  - Updates modelGeneric.mustache templates in both client and server generators
  - Updates modelTaggedUnion.mustache templates in both client and server generators
  - Uses {{baseName}} when available, falls back to {{name}} for backward compatibility
  - Maintains backward compatibility - no changes when propertyNaming=original is not used

- [`2bae83a`](https://github.com/backstage/backstage/commit/2bae83a): Bump `@microsoft/api-documenter` and `@microsoft/api-extractor` to latest versions.
- [`d1e38a7`](https://github.com/backstage/backstage/commit/d1e38a7): Properly create workspace in OS temporary directory for `generate-patch` command
- [`2bae83a`](https://github.com/backstage/backstage/commit/2bae83a): Bumped dev dependencies `@types/node`

## 0.0.x patch version bumps

### `@backstage/plugin-catalog-unprocessed-entities-common` (0.0.11 → [0.0.13](../changelogs/@backstage/plugin-catalog-unprocessed-entities-common.md#0013))

#### 0.0.12

##### Patch Changes

- [`df4d646`](https://github.com/backstage/backstage/commit/df4d646): Moved types, API and client to the common package, allowing both frontend and
  backend plugins to use the `CatalogUnprocessedEntitiesClient`.

  The following types, clients and interfaces have been deprecated and should be
  imported from the `@backstage/plugin-catalog-unprocessed-entities-common` instead:
  `CatalogUnprocessedEntitiesApi`, `CatalogUnprocessedEntitiesApiResponse`, `UnprocessedEntity`,
  `UnprocessedEntityCache`, `UnprocessedEntityError`, `CatalogUnprocessedEntitiesClient`.

  All those types, clients and interfaces are re-exported temporarily in the
  `@backstage/plugin-catalog-unprocessed-entities` package until cleaned up.

### `@backstage/plugin-kubernetes-cluster` (0.0.31 → [0.0.35](../changelogs/@backstage/plugin-kubernetes-cluster.md#0035))

#### 0.0.35

##### Patch Changes

- [`0be2541`](https://github.com/backstage/backstage/commit/0be2541): Promoted the plugin's translation ref to the stable package entry point. It was previously only available through the alpha entry point.

#### 0.0.34

##### Patch Changes

- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.

#### 0.0.32

##### Patch Changes

- [`2bae83a`](https://github.com/backstage/backstage/commit/2bae83a): Bumped dev dependencies `@types/node`

### `@backstage/plugin-signals` (0.0.25 → [0.0.29](../changelogs/@backstage/plugin-signals.md#0029))

#### 0.0.28

##### Patch Changes

- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.

### `@backstage/plugin-signals-react` (0.0.17 → [0.0.20](../changelogs/@backstage/plugin-signals-react.md#0020))

#### 0.0.19

##### Patch Changes

- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.

## 0.x patch version bumps

### `@backstage/backend-dev-utils` (0.1.5 → [0.1.7](../changelogs/@backstage/backend-dev-utils.md#017))

#### 0.1.7

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports

#### 0.1.6

##### Patch Changes

- [`2bae83a`](https://github.com/backstage/backstage/commit/2bae83a): Internal update for Node.js v24 support.

### `@backstage/backend-openapi-utils` (0.6.3 → [0.6.7](../changelogs/@backstage/backend-openapi-utils.md#067))

#### 0.6.6

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports

#### 0.6.5

##### Patch Changes

- [`6678b78`](https://github.com/backstage/backstage/commit/6678b78): Internal update to use native feature from our request validation library for handling base path determination.

#### 0.6.4

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0

### `@backstage/codemods` (0.1.52 → [0.1.55](../changelogs/@backstage/codemods.md#0155))

#### 0.1.55

##### Patch Changes

- [`70fc178`](https://github.com/backstage/backstage/commit/70fc178): Migrated from deprecated `findPaths` to `targetPaths` and `findOwnPaths` from `@backstage/cli-common`.
- [`de62a9d`](https://github.com/backstage/backstage/commit/de62a9d): Upgraded `commander` dependency from `^12.0.0` to `^14.0.3` across all CLI packages.

#### 0.1.54

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports

#### 0.1.53

##### Patch Changes

- [`688f070`](https://github.com/backstage/backstage/commit/688f070): Updated to use new utilities from `@backstage/cli-common`.
- [`2bae83a`](https://github.com/backstage/backstage/commit/2bae83a): Bumped dev dependencies `@types/node`

### `@backstage/core-compat-api` (0.5.4 → [0.5.9](../changelogs/@backstage/core-compat-api.md#059))

#### 0.5.9

##### Patch Changes

- [`b15a685`](https://github.com/backstage/backstage/commit/b15a685): Added `withApis`, which is a Higher-Order Component for providing APIs as props to a component via `useApiHolder`.
- [`8e09233`](https://github.com/backstage/backstage/commit/8e09233): Added a missing dependency on `@backstage/filter-predicates` to `@backstage/core-compat-api`. This fixes package metadata for consumers that use compatibility helpers relying on filter predicate support.
- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

#### 0.5.8

##### Patch Changes

- [`c38b74d`](https://github.com/backstage/backstage/commit/c38b74d): Internal updates for blueprint moves to `@backstage/plugin-app-react`.
- [`ef6916e`](https://github.com/backstage/backstage/commit/ef6916e): Added `IconElement` type as a replacement for the deprecated `IconComponent`. The `IconsApi` now has a new `icon()` method that returns `IconElement`, while the existing `getIcon()` method is deprecated. The `IconBundleBlueprint` now accepts both `IconComponent` and `IconElement` values.
- [`53b6549`](https://github.com/backstage/backstage/commit/53b6549): Plugins in the new frontend system now have a `pluginId` field rather than `id` to better align with naming conventions used throughout the frontend and backend systems. The old field is still present but marked as deprecated. All internal code has been updated to prefer `pluginId` while maintaining backward compatibility by falling back to `id` when needed.
- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.
- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

### `@backstage/core-components` (0.18.3 → [0.18.8](../changelogs/@backstage/core-components.md#0188))

#### 0.18.8

##### Patch Changes

- [`e26e3de`](https://github.com/backstage/backstage/commit/e26e3de): The login request dialog now handles auth provider icons passed as `IconElement` in addition to `IconComponent`.
- [`8e09233`](https://github.com/backstage/backstage/commit/8e09233): Fixed the shared `Progress` component to provide an accessible name for its loading indicator by default.
- [`8b1a847`](https://github.com/backstage/backstage/commit/8b1a847): Fixed Table component layout when both `filters` and `title` props are used together. The filter controls now use a dedicated CSS class (`filterControls`) instead of incorrectly reusing the root container class.
- [`3f36ce1`](https://github.com/backstage/backstage/commit/3f36ce1): Clarified the `IconElement` sizing contract for the new frontend system and aligned legacy system icon rendering with the new icon API.
- [`0be2541`](https://github.com/backstage/backstage/commit/0be2541): Promoted the plugin's translation ref to the stable package entry point. It was previously only available through the alpha entry point.
- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.
- [`470f72d`](https://github.com/backstage/backstage/commit/470f72d): The `LogViewer` component from `@backstage/core-components` now supports downloading logs if a callback is passed to `onDownloadLogs`

#### 0.18.7

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.
- [`cebfea7`](https://github.com/backstage/backstage/commit/cebfea7): Removed link styles from LinkButton to avoid styling inconsistencies related to import order.
- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 0.18.5

##### Patch Changes

- [`a723b8a`](https://github.com/backstage/backstage/commit/a723b8a): The MarkdownContent component now handles HTML content the same way as GitHub when rendering GitHub-flavored Markdown
- [`c671db9`](https://github.com/backstage/backstage/commit/c671db9): Fixed bug in Table component where the toolbar layout would break when both a title and filters were present.
- [`55a9dc2`](https://github.com/backstage/backstage/commit/55a9dc2): Update colour token again in ItemCardHeader to respect theme definition.

#### 0.18.4

##### Patch Changes

- [`9a942a4`](https://github.com/backstage/backstage/commit/9a942a4): Fixed bug in the `LogViewer` component where shift + click always opened a new window instead of just changing the selection.

  In addition, improved the `LogViewer` component by a few usability enhancements:

  - Added support for multiple selections using cmd/ctrl + click
  - Improved the generated hash that is added to the URL to also support ranges & multiple selections
  - Added an hover effect & info tooltip to the "Copy to clipboard" button to indicate its functionality
  - Added some color and a separator to the line numbers to improve readability

- [`207c3c8`](https://github.com/backstage/backstage/commit/207c3c8): long words like urls now breaks to new line on warning panels instead of overflowing the container
- [`4c00303`](https://github.com/backstage/backstage/commit/4c00303): Add `tooltipClasses` prop to `OverflowTooltip` component to allow customisation of the tooltip
- [`5d52dab`](https://github.com/backstage/backstage/commit/5d52dab): Add i18n support for LogViewer search control
- [`f6b49ce`](https://github.com/backstage/backstage/commit/f6b49ce): added support for wrapLongLines option in CodeSnippet

### `@backstage/e2e-test-utils` (0.1.1 → [0.1.2](../changelogs/@backstage/e2e-test-utils.md#012))

#### 0.1.2

##### Patch Changes

- [`b96c20e`](https://github.com/backstage/backstage/commit/b96c20e): Added optional `channel` option to `generateProjects()` to allow customizing the Playwright browser channel for testing against different browsers variants. When not provided, the function defaults to 'chrome' to maintain backward compatibility.

  Example usage:

  ```ts
  import { generateProjects } from '@backstage/e2e-test-utils';

  export default defineConfig({
    projects: generateProjects({ channel: 'msedge' }),
  });
  ```

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports

### `@backstage/eslint-plugin` (0.2.0 → [0.2.2](../changelogs/@backstage/eslint-plugin.md#022))

#### 0.2.2

##### Patch Changes

- [`6738cf0`](https://github.com/backstage/backstage/commit/6738cf0): build(deps): bump `minimatch` from 9.0.5 to 10.2.1

#### 0.2.1

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports

### `@backstage/frontend-dynamic-feature-loader` (0.1.7 → [0.1.10](../changelogs/@backstage/frontend-dynamic-feature-loader.md#0110))

#### 0.1.10

##### Patch Changes

- [`e8ba654`](https://github.com/backstage/backstage/commit/e8ba654): Update the README of the `frontend-dynamic-feature-loader` package to mention the new `backstage-cli package bundle` command.

#### 0.1.9

##### Patch Changes

- [`fdbd404`](https://github.com/backstage/backstage/commit/fdbd404): Updated module federation integration to use `@module-federation/enhanced/runtime` `createInstance` API and the new `loadModuleFederationHostShared` from `@backstage/module-federation-common` for loading shared dependencies. Also added support for passing a pre-created `ModuleFederation` instance via the `moduleFederation.instance` option.
- [`fdbd404`](https://github.com/backstage/backstage/commit/fdbd404): Updated `@module-federation/enhanced`, `@module-federation/runtime`, and `@module-federation/sdk` dependencies from `^0.9.0` to `^0.21.6`.
- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.

### `@backstage/integration-aws-node` (0.1.19 → [0.1.20](../changelogs/@backstage/integration-aws-node.md#0120))

#### 0.1.20

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports

### `@backstage/plugin-api-docs` (0.13.1 → [0.13.5](../changelogs/@backstage/plugin-api-docs.md#0135))

#### 0.13.5

##### Patch Changes

- [`9c9d425`](https://github.com/backstage/backstage/commit/9c9d425): Fixed invisible text in parameter input fields when using dark mode in OpenAPI definition pages
- [`538c985`](https://github.com/backstage/backstage/commit/538c985): Updated installation documentation to use feature discovery as the default.
- [`30e08df`](https://github.com/backstage/backstage/commit/30e08df): Added default entity content groups for the API docs entity content tabs. The API definition tab defaults to the `documentation` group and the APIs tab defaults to the `development` group.
- [`c548a0f`](https://github.com/backstage/backstage/commit/c548a0f): Migrated entity table cards (`ConsumedApisCard`, `ProvidedApisCard`, `HasApisCard`, `ConsumingComponentsCard`, `ProvidingComponentsCard`) to use BUI when no legacy props are passed. The old `variant`, `columns`, and `tableOptions` props are deprecated but still supported — passing any of them triggers the legacy MUI-based rendering. The new `columnConfig` prop accepts `EntityColumnConfig[]` for BUI-based rendering.
- [`aa29b50`](https://github.com/backstage/backstage/commit/aa29b50): New frontend system pages now use the default plugin header together with `HeaderPage` instead of the legacy core page header pattern.
- [`3f36ce1`](https://github.com/backstage/backstage/commit/3f36ce1): Updated alpha plugin icons to follow the new frontend icon sizing rules when rendered in plugin and navigation surfaces.
- [`0be2541`](https://github.com/backstage/backstage/commit/0be2541): Promoted the plugin's translation ref to the stable package entry point. It was previously only available through the alpha entry point.
- [`ca277ef`](https://github.com/backstage/backstage/commit/ca277ef): Updated dependency `graphiql` to `3.9.0` to address security vulnerability in `markdown-it` package.
  Updated dependency `@graphiql/react` to `0.29.0` to match the version used by `graphiql`.
  Moved dependency `graphql-config` to `devDependencies` as it is needed only for types.

#### 0.13.4

##### Patch Changes

- [`ac9bead`](https://github.com/backstage/backstage/commit/ac9bead): Added `@backstage/frontend-test-utils` dev dependency.
- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`7feb83b`](https://github.com/backstage/backstage/commit/7feb83b): Adjusted to use the new `@backstage/filter-predicates` types for predicate expressions.
- [`491a06c`](https://github.com/backstage/backstage/commit/491a06c): Add the ability to show icons for the tabs on the entity page (new frontend)
- [`4183614`](https://github.com/backstage/backstage/commit/4183614): Updated usage of deprecated APIs in the new frontend system.
- [`018ca87`](https://github.com/backstage/backstage/commit/018ca87): Added `title` and `icon` to the plugin definition for the new frontend system.
- [`629c3ec`](https://github.com/backstage/backstage/commit/629c3ec): Add `tableOptions` and `title` to Components cards of APIs
- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.

#### 0.13.3

##### Patch Changes

- [`0216090`](https://github.com/backstage/backstage/commit/0216090): Updated dependency `@types/swagger-ui-react` to `^5.0.0`.
- [`abeba2b`](https://github.com/backstage/backstage/commit/abeba2b): Fix types with new bumped dependency

#### 0.13.2

##### Patch Changes

- [`f3f84f1`](https://github.com/backstage/backstage/commit/f3f84f1): Minor extension type updates after frontend API bump
- [`d02db50`](https://github.com/backstage/backstage/commit/d02db50): Remove unnecessary use of `compatWrapper` and `convertLegacyRouteRef`(s) for the new frontend system.

### `@backstage/plugin-api-docs-module-protoc-gen-doc` (0.1.10 → [0.1.11](../changelogs/@backstage/plugin-api-docs-module-protoc-gen-doc.md#0111))

#### 0.1.11

##### Patch Changes

- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.

### `@backstage/plugin-app-backend` (0.5.8 → [0.5.12](../changelogs/@backstage/plugin-app-backend.md#0512))

#### 0.5.11

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports

#### 0.5.10

##### Patch Changes

- [`9ccf84e`](https://github.com/backstage/backstage/commit/9ccf84e): Updated plugin metadata.

#### 0.5.9

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0

### `@backstage/plugin-app-node` (0.1.39 → [0.1.43](../changelogs/@backstage/plugin-app-node.md#0143))

#### 0.1.42

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports

#### 0.1.41

##### Patch Changes

- [`9ccf84e`](https://github.com/backstage/backstage/commit/9ccf84e): Updated plugin metadata.

#### 0.1.40

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0

### `@backstage/plugin-auth` (0.1.2 → [0.1.6](../changelogs/@backstage/plugin-auth.md#016))

#### 0.1.6

##### Patch Changes

- [`06294aa`](https://github.com/backstage/backstage/commit/06294aa): Migrated the ConsentPage UI from Material-UI and `@backstage/core-components` to `@backstage/ui`.
- [`aa29b50`](https://github.com/backstage/backstage/commit/aa29b50): New frontend system pages now use the default plugin header together with `HeaderPage` instead of the legacy core page header pattern.

#### 0.1.5

##### Patch Changes

- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.

### `@backstage/plugin-auth-backend-module-atlassian-provider` (0.4.9 → [0.4.13](../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#0413))

#### 0.4.13

##### Patch Changes

- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

#### 0.4.12

##### Patch Changes

- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 0.4.10

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0

### `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.4.9 → [0.4.14](../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#0414))

#### 0.4.14

##### Patch Changes

- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.
- [`634eded`](https://github.com/backstage/backstage/commit/634eded): Fixed a foreign key constraint violation when issuing refresh tokens for CIMD clients, and
  prevented a failed refresh token issuance from failing the entire token exchange.
  Fixed AWS ALB auth provider incorrectly returning HTTP 500 instead of 401 for JWT validation failures,
  which caused retry loops and memory pressure under load.

#### 0.4.13

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 0.4.10

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0

### `@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.2.14 → [0.2.18](../changelogs/@backstage/plugin-auth-backend-module-azure-easyauth-provider.md#0218))

#### 0.2.18

##### Patch Changes

- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

#### 0.2.17

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 0.2.15

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0

### `@backstage/plugin-auth-backend-module-bitbucket-provider` (0.3.9 → [0.3.13](../changelogs/@backstage/plugin-auth-backend-module-bitbucket-provider.md#0313))

#### 0.3.13

##### Patch Changes

- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

#### 0.3.12

##### Patch Changes

- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 0.3.10

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0

### `@backstage/plugin-auth-backend-module-bitbucket-server-provider` (0.2.9 → [0.2.13](../changelogs/@backstage/plugin-auth-backend-module-bitbucket-server-provider.md#0213))

#### 0.2.13

##### Patch Changes

- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

#### 0.2.12

##### Patch Changes

- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

### `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.4.9 → [0.4.13](../changelogs/@backstage/plugin-auth-backend-module-cloudflare-access-provider.md#0413))

#### 0.4.13

##### Patch Changes

- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

#### 0.4.12

##### Patch Changes

- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 0.4.10

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0

### `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.4.9 → [0.4.13](../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#0413))

#### 0.4.13

##### Patch Changes

- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

#### 0.4.12

##### Patch Changes

- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 0.4.10

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0

### `@backstage/plugin-auth-backend-module-google-provider` (0.3.9 → [0.3.13](../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#0313))

#### 0.3.13

##### Patch Changes

- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

#### 0.3.12

##### Patch Changes

- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

### `@backstage/plugin-auth-backend-module-guest-provider` (0.2.14 → [0.2.17](../changelogs/@backstage/plugin-auth-backend-module-guest-provider.md#0217))

#### 0.2.15

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0

### `@backstage/plugin-auth-backend-module-microsoft-provider` (0.3.9 → [0.3.13](../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#0313))

#### 0.3.13

##### Patch Changes

- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

#### 0.3.12

##### Patch Changes

- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 0.3.10

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0

### `@backstage/plugin-auth-backend-module-oauth2-provider` (0.4.9 → [0.4.13](../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#0413))

#### 0.4.13

##### Patch Changes

- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

#### 0.4.12

##### Patch Changes

- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

### `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.2.14 → [0.2.18](../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#0218))

#### 0.2.18

##### Patch Changes

- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

#### 0.2.17

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

### `@backstage/plugin-auth-backend-module-oidc-provider` (0.4.9 → [0.4.14](../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#0414))

#### 0.4.14

##### Patch Changes

- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

#### 0.4.13

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 0.4.11

##### Patch Changes

- [`e54fcb2`](https://github.com/backstage/backstage/commit/e54fcb2): Added support for custom start URL search parameters (with the new `startUrlSearchParams` config property)

#### 0.4.10

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0

### `@backstage/plugin-auth-backend-module-okta-provider` (0.2.9 → [0.2.13](../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#0213))

#### 0.2.13

##### Patch Changes

- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

#### 0.2.12

##### Patch Changes

- [`08aea95`](https://github.com/backstage/backstage/commit/08aea95): Added a validation check that rejects `audience` configuration values that are not absolute URLs (i.e. missing `https://` or `http://` prefix).
- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 0.2.10

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0

### `@backstage/plugin-auth-backend-module-onelogin-provider` (0.3.9 → [0.3.13](../changelogs/@backstage/plugin-auth-backend-module-onelogin-provider.md#0313))

#### 0.3.13

##### Patch Changes

- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

#### 0.3.12

##### Patch Changes

- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 0.3.10

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0

### `@backstage/plugin-auth-backend-module-openshift-provider` (0.1.2 → [0.1.5](../changelogs/@backstage/plugin-auth-backend-module-openshift-provider.md#015))

#### 0.1.5

##### Patch Changes

- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

#### 0.1.3

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0

### `@backstage/plugin-auth-backend-module-pinniped-provider` (0.3.9 → [0.3.12](../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#0312))

#### 0.3.11

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports

#### 0.3.10

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0

### `@backstage/plugin-auth-node` (0.6.9 → [0.6.14](../changelogs/@backstage/plugin-auth-node.md#0614))

#### 0.6.14

##### Patch Changes

- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

#### 0.6.13

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 0.6.11

##### Patch Changes

- [`4eeba9e`](https://github.com/backstage/backstage/commit/4eeba9e): Upgrade `zod-validation-error` to version 4
- [`872eb91`](https://github.com/backstage/backstage/commit/872eb91): Upgrade `zod-to-json-schema` to latest version

#### 0.6.10

##### Patch Changes

- [`2389358`](https://github.com/backstage/backstage/commit/2389358): remove leading dot in auth cookie cleanup call
- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0
- [`b35f8b2`](https://github.com/backstage/backstage/commit/b35f8b2): Fixed chunked cookie replacing edge case in OAuthCookieManager class where some of the old chunks would not get removed if new chunked cookie would have fewer chunks.
- [`e9dd634`](https://github.com/backstage/backstage/commit/e9dd634): fix flawed cookie removal logic with chunked tokens

### `@backstage/plugin-auth-react` (0.1.21 → [0.1.25](../changelogs/@backstage/plugin-auth-react.md#0125))

#### 0.1.24

##### Patch Changes

- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.

### `@backstage/plugin-catalog-backend-module-aws` (0.4.17 → [0.4.21](../changelogs/@backstage/plugin-catalog-backend-module-aws.md#0421))

#### 0.4.20

##### Patch Changes

- [`cfd8103`](https://github.com/backstage/backstage/commit/cfd8103): Updated imports to use stable catalog extension points from `@backstage/plugin-catalog-node` instead of the deprecated alpha exports.
- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports

### `@backstage/plugin-catalog-backend-module-azure` (0.3.11 → [0.3.15](../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0315))

#### 0.3.14

##### Patch Changes

- [`cc6206e`](https://github.com/backstage/backstage/commit/cc6206e): Added support for `{org}.visualstudio.com` domains used by Azure DevOps
- [`cfd8103`](https://github.com/backstage/backstage/commit/cfd8103): Updated imports to use stable catalog extension points from `@backstage/plugin-catalog-node` instead of the deprecated alpha exports.
- [`6c8a464`](https://github.com/backstage/backstage/commit/6c8a464): Added missing `branch` field to the `azureDevOps` provider config schema.

### `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.5.8 → [0.5.12](../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#0512))

#### 0.5.11

##### Patch Changes

- [`cfd8103`](https://github.com/backstage/backstage/commit/cfd8103): Updated imports to use stable catalog extension points from `@backstage/plugin-catalog-node` instead of the deprecated alpha exports.

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.5.5 → [0.5.9](../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#059))

#### 0.5.8

##### Patch Changes

- [`cfd8103`](https://github.com/backstage/backstage/commit/cfd8103): Updated imports to use stable catalog extension points from `@backstage/plugin-catalog-node` instead of the deprecated alpha exports.

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.5.5 → [0.5.9](../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#059))

#### 0.5.8

##### Patch Changes

- [`cfd8103`](https://github.com/backstage/backstage/commit/cfd8103): Updated imports to use stable catalog extension points from `@backstage/plugin-catalog-node` instead of the deprecated alpha exports.

### `@backstage/plugin-catalog-backend-module-gcp` (0.3.14 → [0.3.17](../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#0317))

#### 0.3.16

##### Patch Changes

- [`cfd8103`](https://github.com/backstage/backstage/commit/cfd8103): Updated imports to use stable catalog extension points from `@backstage/plugin-catalog-node` instead of the deprecated alpha exports.

### `@backstage/plugin-catalog-backend-module-gerrit` (0.3.8 → [0.3.12](../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0312))

#### 0.3.11

##### Patch Changes

- [`cfd8103`](https://github.com/backstage/backstage/commit/cfd8103): Updated imports to use stable catalog extension points from `@backstage/plugin-catalog-node` instead of the deprecated alpha exports.
- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports

### `@backstage/plugin-catalog-backend-module-gitea` (0.1.6 → [0.1.10](../changelogs/@backstage/plugin-catalog-backend-module-gitea.md#0110))

#### 0.1.9

##### Patch Changes

- [`cfd8103`](https://github.com/backstage/backstage/commit/cfd8103): Updated imports to use stable catalog extension points from `@backstage/plugin-catalog-node` instead of the deprecated alpha exports.

### `@backstage/plugin-catalog-backend-module-github-org` (0.3.16 → [0.3.20](../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#0320))

#### 0.3.20

##### Patch Changes

- [`106d1b2`](https://github.com/backstage/backstage/commit/106d1b2): Added a `defaultUserTransformer.useVerifiedEmails` config option for the `githubOrg` provider. When set to `true`, the default user transformer prefers organization verified domain emails over the user's public GitHub email. Defaults to `false`, which uses only the public GitHub email.

  This option has no effect when a custom user transformer is set via the `githubOrgEntityProviderTransformsExtensionPoint`.

  ```yaml
  catalog:
    providers:
      githubOrg:
        production:
          githubUrl: https://github.com
          orgs:
            - my-org
          defaultUserTransformer:
            useVerifiedEmails: true
  ```

#### 0.3.19

##### Patch Changes

- [`cfd8103`](https://github.com/backstage/backstage/commit/cfd8103): Updated imports to use stable catalog extension points from `@backstage/plugin-catalog-node` instead of the deprecated alpha exports.

#### 0.3.17

##### Patch Changes

- [`ed5a7a3`](https://github.com/backstage/backstage/commit/ed5a7a3): Introduce new configuration option to exclude suspended users from GitHub Enterprise instances.

  When it’s set to true, suspended users won’t be returned when querying the organization users for GitHub Enterprise instances.
  Note that this option should be used only against GitHub Enterprise instances, the property does not exist in the github.com GraphQL schema, setting it will cause a schema validation error and the syncing of users will fail.

### `@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.15 → [0.2.19](../changelogs/@backstage/plugin-catalog-backend-module-gitlab-org.md#0219))

#### 0.2.18

##### Patch Changes

- [`cfd8103`](https://github.com/backstage/backstage/commit/cfd8103): Updated imports to use stable catalog extension points from `@backstage/plugin-catalog-node` instead of the deprecated alpha exports.

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.7.6 → [0.7.10](../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#0710))

#### 0.7.10

##### Patch Changes

- [`5f1e7b8`](https://github.com/backstage/backstage/commit/5f1e7b8): Migrated metrics from direct `@opentelemetry/api` usage to the alpha `MetricsService`, providing plugin-scoped metric attribution. The `@opentelemetry/api` dependency has been removed.

#### 0.7.9

##### Patch Changes

- [`cfd8103`](https://github.com/backstage/backstage/commit/cfd8103): Updated imports to use stable catalog extension points from `@backstage/plugin-catalog-node` instead of the deprecated alpha exports.
- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports

#### 0.7.7

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0
- [`fb029b6`](https://github.com/backstage/backstage/commit/fb029b6): Updated luxon types

### `@backstage/plugin-catalog-backend-module-ldap` (0.12.0 → [0.12.3](../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0123))

#### 0.12.2

##### Patch Changes

- [`cfd8103`](https://github.com/backstage/backstage/commit/cfd8103): Updated imports to use stable catalog extension points from `@backstage/plugin-catalog-node` instead of the deprecated alpha exports.
- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports

### `@backstage/plugin-catalog-backend-module-openapi` (0.2.16 → [0.2.20](../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0220))

#### 0.2.19

##### Patch Changes

- [`cfd8103`](https://github.com/backstage/backstage/commit/cfd8103): Updated imports to use stable catalog extension points from `@backstage/plugin-catalog-node` instead of the deprecated alpha exports.
- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports

### `@backstage/plugin-catalog-backend-module-puppetdb` (0.2.16 → [0.2.20](../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0220))

#### 0.2.19

##### Patch Changes

- [`cfd8103`](https://github.com/backstage/backstage/commit/cfd8103): Updated imports to use stable catalog extension points from `@backstage/plugin-catalog-node` instead of the deprecated alpha exports.

#### 0.2.18

##### Patch Changes

- [`a307700`](https://github.com/backstage/backstage/commit/a307700): Fixed crash when `latest_report_status` is undefined

### `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.2.14 → [0.2.18](../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#0218))

#### 0.2.17

##### Patch Changes

- [`cfd8103`](https://github.com/backstage/backstage/commit/cfd8103): Updated imports to use stable catalog extension points from `@backstage/plugin-catalog-node` instead of the deprecated alpha exports.

### `@backstage/plugin-catalog-import` (0.13.7 → [0.13.11](../changelogs/@backstage/plugin-catalog-import.md#01311))

#### 0.13.11

##### Patch Changes

- [`538c985`](https://github.com/backstage/backstage/commit/538c985): Updated installation documentation to use feature discovery as the default.
- [`0be2541`](https://github.com/backstage/backstage/commit/0be2541): Promoted the plugin's translation ref to the stable package entry point. It was previously only available through the alpha entry point.

#### 0.13.10

##### Patch Changes

- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.

#### 0.13.8

##### Patch Changes

- [`d02db50`](https://github.com/backstage/backstage/commit/d02db50): Remove unnecessary use of `compatWrapper` and `convertLegacyRouteRef`(s) for the new frontend system.

### `@backstage/plugin-catalog-unprocessed-entities` (0.2.23 → [0.2.28](../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#0228))

#### 0.2.27

##### Patch Changes

- [`538c985`](https://github.com/backstage/backstage/commit/538c985): Updated installation documentation to use feature discovery as the default.
- [`aa29b50`](https://github.com/backstage/backstage/commit/aa29b50): New frontend system pages now use the default plugin header together with `HeaderPage` instead of the legacy core page header pattern.
- [`3f36ce1`](https://github.com/backstage/backstage/commit/3f36ce1): Updated alpha plugin icons to follow the new frontend icon sizing rules when rendered in plugin and navigation surfaces.
- [`f4a1edd`](https://github.com/backstage/backstage/commit/f4a1edd): Removed the deprecated `DevToolsContentBlueprint` from `@backstage/plugin-devtools-react`. DevTools pages in the new frontend system now use `SubPageBlueprint` tabs instead, and the catalog unprocessed entities alpha extension now attaches to DevTools as a subpage.

#### 0.2.26

##### Patch Changes

- [`018ca87`](https://github.com/backstage/backstage/commit/018ca87): Added `title` and `icon` to the plugin definition for the new frontend system.
- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.

#### 0.2.25

##### Patch Changes

- [`be6cef5`](https://github.com/backstage/backstage/commit/be6cef5): Add support for adding `unprocessed-entities` and other tabs to `devtools` when using the New Frontend system

#### 0.2.24

##### Patch Changes

- [`d02db50`](https://github.com/backstage/backstage/commit/d02db50): Remove unnecessary use of `compatWrapper` and `convertLegacyRouteRef`(s) for the new frontend system.
- [`df4d646`](https://github.com/backstage/backstage/commit/df4d646): Moved types, API and client to the common package, allowing both frontend and
  backend plugins to use the `CatalogUnprocessedEntitiesClient`.

  The following types, clients and interfaces have been deprecated and should be
  imported from the `@backstage/plugin-catalog-unprocessed-entities-common` instead:
  `CatalogUnprocessedEntitiesApi`, `CatalogUnprocessedEntitiesApiResponse`, `UnprocessedEntity`,
  `UnprocessedEntityCache`, `UnprocessedEntityError`, `CatalogUnprocessedEntitiesClient`.

  All those types, clients and interfaces are re-exported temporarily in the
  `@backstage/plugin-catalog-unprocessed-entities` package until cleaned up.

### `@backstage/plugin-config-schema` (0.1.74 → [0.1.78](../changelogs/@backstage/plugin-config-schema.md#0178))

#### 0.1.77

##### Patch Changes

- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.

### `@backstage/plugin-devtools` (0.1.33 → [0.1.37](../changelogs/@backstage/plugin-devtools.md#0137))

#### 0.1.37

##### Patch Changes

- [`afabb37`](https://github.com/backstage/backstage/commit/afabb37): Fixed URL encoding of task IDs for the trigger feature (tasks that contained a "/" in their ID were not triggered)
- [`f80195e`](https://github.com/backstage/backstage/commit/f80195e): Added `cancelScheduledTask` to the DevTools API and a cancel button to the scheduled tasks UI.
- [`538c985`](https://github.com/backstage/backstage/commit/538c985): Updated installation documentation to use feature discovery as the default.
- [`aa29b50`](https://github.com/backstage/backstage/commit/aa29b50): New frontend system pages now use the default plugin header together with `HeaderPage` instead of the legacy core page header pattern.
- [`3f36ce1`](https://github.com/backstage/backstage/commit/3f36ce1): Updated alpha plugin icons to follow the new frontend icon sizing rules when rendered in plugin and navigation surfaces.
- [`f4a1edd`](https://github.com/backstage/backstage/commit/f4a1edd): Removed the deprecated `DevToolsContentBlueprint` from `@backstage/plugin-devtools-react`. DevTools pages in the new frontend system now use `SubPageBlueprint` tabs instead, and the catalog unprocessed entities alpha extension now attaches to DevTools as a subpage.

#### 0.1.36

##### Patch Changes

- [`018ca87`](https://github.com/backstage/backstage/commit/018ca87): Added `title` and `icon` to the plugin definition for the new frontend system.
- [`f2612c2`](https://github.com/backstage/backstage/commit/f2612c2): Fixes an issue where a user lacking permission to schedule tasks can now easily see the issue through a custom icon + tooltip.
- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.

#### 0.1.35

##### Patch Changes

- [`be6cef5`](https://github.com/backstage/backstage/commit/be6cef5): Add support for adding `unprocessed-entities` and other tabs to `devtools` when using the New Frontend system

#### 0.1.34

##### Patch Changes

- [`d02db50`](https://github.com/backstage/backstage/commit/d02db50): Remove unnecessary use of `compatWrapper` and `convertLegacyRouteRef`(s) for the new frontend system.
- [`291bf9d`](https://github.com/backstage/backstage/commit/291bf9d): Added scheduled tasks UI feature for the DevTools plugin

### `@backstage/plugin-devtools-backend` (0.5.11 → [0.5.15](../changelogs/@backstage/plugin-devtools-backend.md#0515))

#### 0.5.14

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`8148621`](https://github.com/backstage/backstage/commit/8148621): Moved `@backstage/backend-defaults` from `dependencies` to `devDependencies`.

#### 0.5.13

##### Patch Changes

- [`be6cef5`](https://github.com/backstage/backstage/commit/be6cef5): Add support for adding `unprocessed-entities` and other tabs to `devtools` when using the New Frontend system

#### 0.5.12

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0
- [`291bf9d`](https://github.com/backstage/backstage/commit/291bf9d): Added scheduled tasks UI feature for the DevTools plugin

### `@backstage/plugin-devtools-common` (0.1.19 → [0.1.23](../changelogs/@backstage/plugin-devtools-common.md#0123))

#### 0.1.23

##### Patch Changes

- [`f80195e`](https://github.com/backstage/backstage/commit/f80195e): Added `cancelScheduledTask` to the DevTools API and a cancel button to the scheduled tasks UI.

#### 0.1.21

##### Patch Changes

- [`be6cef5`](https://github.com/backstage/backstage/commit/be6cef5): Add support for adding `unprocessed-entities` and other tabs to `devtools` when using the New Frontend system

#### 0.1.20

##### Patch Changes

- [`291bf9d`](https://github.com/backstage/backstage/commit/291bf9d): Added scheduled tasks UI feature for the DevTools plugin

### `@backstage/plugin-events-node` (0.4.17 → [0.4.20](../changelogs/@backstage/plugin-events-node.md#0420))

#### 0.4.18

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0

### `@backstage/plugin-home-react` (0.1.32 → [0.1.36](../changelogs/@backstage/plugin-home-react.md#0136))

#### 0.1.36

##### Patch Changes

- [`0be2541`](https://github.com/backstage/backstage/commit/0be2541): Promoted the plugin's translation ref to the stable package entry point. It was previously only available through the alpha entry point.

#### 0.1.35

##### Patch Changes

- [`90956a6`](https://github.com/backstage/backstage/commit/90956a6): Support new frontend system in the homepage plugin
- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.

#### 0.1.33

##### Patch Changes

- [`be21c5c`](https://github.com/backstage/backstage/commit/be21c5c): Updated dependency `@rjsf/utils` to `5.24.13`.
  Updated dependency `@rjsf/core` to `5.24.13`.
  Updated dependency `@rjsf/material-ui` to `5.24.13`.
  Updated dependency `@rjsf/validator-ajv8` to `5.24.13`.

### `@backstage/plugin-kubernetes` (0.12.13 → [0.12.17](../changelogs/@backstage/plugin-kubernetes.md#01217))

#### 0.12.17

##### Patch Changes

- [`538c985`](https://github.com/backstage/backstage/commit/538c985): Updated installation documentation to use feature discovery as the default.
- [`0be2541`](https://github.com/backstage/backstage/commit/0be2541): Promoted the plugin's translation ref to the stable package entry point. It was previously only available through the alpha entry point.

#### 0.12.16

##### Patch Changes

- [`7feb83b`](https://github.com/backstage/backstage/commit/7feb83b): Adjusted to use the new `@backstage/filter-predicates` types for predicate expressions.
- [`491a06c`](https://github.com/backstage/backstage/commit/491a06c): Add the ability to show icons for the tabs on the entity page (new frontend)
- [`4183614`](https://github.com/backstage/backstage/commit/4183614): Updated usage of deprecated APIs in the new frontend system.
- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.

#### 0.12.14

##### Patch Changes

- [`f15d5f1`](https://github.com/backstage/backstage/commit/f15d5f1): add missing i18n support for kubernetes and kubernetes-react
- [`d02db50`](https://github.com/backstage/backstage/commit/d02db50): Remove unnecessary use of `compatWrapper` and `convertLegacyRouteRef`(s) for the new frontend system.

### `@backstage/plugin-kubernetes-common` (0.9.8 → [0.9.10](../changelogs/@backstage/plugin-kubernetes-common.md#0910))

#### 0.9.10

##### Patch Changes

- [`ce3639c`](https://github.com/backstage/backstage/commit/ce3639c): Add PersistentVolume and PersistentVolumeClaims Rendering

#### 0.9.9

##### Patch Changes

- [`8fa8d87`](https://github.com/backstage/backstage/commit/8fa8d87): Add Kubernetes Plugin Secrets Accordion with masked secret datas

### `@backstage/plugin-kubernetes-react` (0.5.13 → [0.5.17](../changelogs/@backstage/plugin-kubernetes-react.md#0517))

#### 0.5.17

##### Patch Changes

- [`0be2541`](https://github.com/backstage/backstage/commit/0be2541): Promoted the plugin's translation ref to the stable package entry point. It was previously only available through the alpha entry point.

#### 0.5.16

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`ce3639c`](https://github.com/backstage/backstage/commit/ce3639c): Add PersistentVolume and PersistentVolumeClaims Rendering
- [`d56542c`](https://github.com/backstage/backstage/commit/d56542c): Updated dependency `@xterm/addon-attach` to `^0.12.0`.
  Updated dependency `@xterm/addon-fit` to `^0.11.0`.
- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.

#### 0.5.14

##### Patch Changes

- [`f966a85`](https://github.com/backstage/backstage/commit/f966a85): Enabled a pod terminal at GKE
- [`8fa8d87`](https://github.com/backstage/backstage/commit/8fa8d87): Add Kubernetes Plugin Secrets Accordion with masked secret datas
- [`f15d5f1`](https://github.com/backstage/backstage/commit/f15d5f1): add missing i18n support for kubernetes and kubernetes-react

### `@backstage/plugin-mcp-actions-backend` (0.1.5 → [0.1.11](../changelogs/@backstage/plugin-mcp-actions-backend.md#0111))

#### 0.1.10

##### Patch Changes

- [`62f0a53`](https://github.com/backstage/backstage/commit/62f0a53): Fixed error forwarding in the actions registry so that known errors like `InputError` and `NotFoundError` thrown by actions preserve their original status codes and messages instead of being wrapped in `ForwardedError` and coerced to 500.
- [`dee4283`](https://github.com/backstage/backstage/commit/dee4283): Added `mcpActions.name` and `mcpActions.description` config options to customize the MCP server identity. Namespaced tool names now use dot separator to align with the MCP spec convention.
- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.
- [`c74b697`](https://github.com/backstage/backstage/commit/c74b697): Added support for splitting MCP actions into multiple servers via `mcpActions.servers` configuration. Each server gets its own endpoint at `/api/mcp-actions/v1/{key}` with actions scoped using include/exclude filter rules. Tool names are now namespaced with the plugin ID by default, configurable via `mcpActions.namespacedToolNames`. When `mcpActions.servers` is not configured, the plugin continues to serve a single server at `/api/mcp-actions/v1`.
- [`dc81af1`](https://github.com/backstage/backstage/commit/dc81af1): Adds two new metrics to track MCP server operations and sessions.

  - `mcp.server.operation.duration`: The duration taken to process an individual MCP operation
  - `mcp.server.session.duration`: The duration of the MCP session from the perspective of the server

#### 0.1.9

##### Patch Changes

- [`31de2c9`](https://github.com/backstage/backstage/commit/31de2c9): Added OAuth Protected Resource Metadata endpoint (`/.well-known/oauth-protected-resource`) per RFC 9728. This allows MCP clients to discover the authorization server for the resource.

  Also enabled OAuth well-known endpoints when CIMD (Client ID Metadata Documents) is configured, not just when DCR is enabled.

- [`8148621`](https://github.com/backstage/backstage/commit/8148621): Moved `@backstage/backend-defaults` from `dependencies` to `devDependencies`.
- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 0.1.7

##### Patch Changes

- [`4d82a35`](https://github.com/backstage/backstage/commit/4d82a35): build(deps): bump `@modelcontextprotocol/sdk` from 1.24.3 to 1.25.2

#### 0.1.6

##### Patch Changes

- [`e83e038`](https://github.com/backstage/backstage/commit/e83e038): Added `@cfworker/json-schema` as a dependency to this package part of the `@modelcontextprotocol/sdk` bump as it's required in the types
- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0
- [`79ef471`](https://github.com/backstage/backstage/commit/79ef471): Clarify error handling in readme and update handleError.ts to include all backstage/errors

### `@backstage/plugin-mui-to-bui` (0.2.1 → [0.2.5](../changelogs/@backstage/plugin-mui-to-bui.md#025))

#### 0.2.5

##### Patch Changes

- [`538c985`](https://github.com/backstage/backstage/commit/538c985): Updated installation documentation to use feature discovery as the default.
- [`ad7c883`](https://github.com/backstage/backstage/commit/ad7c883): Updated the MUI to BUI theme converter page to use the renamed `Header` component from `@backstage/ui`.

#### 0.2.4

##### Patch Changes

- [`4137a43`](https://github.com/backstage/backstage/commit/4137a43): Updated CSS token references to use renamed `--bui-bg-app` and `--bui-border-2` tokens.
- [`a88c437`](https://github.com/backstage/backstage/commit/a88c437): Updated MUI to BUI theme converter to align with latest token changes

  **Changes:**

  - Removed generation of deprecated tokens: `--bui-fg-link`, `--bui-fg-link-hover`, `--bui-fg-tint`, `--bui-fg-tint-disabled`, `--bui-bg-tint` and all its variants
  - Added generation of new `info` status tokens: `--bui-fg-info`, `--bui-fg-info-on-bg`, `--bui-bg-info`, `--bui-border-info`
  - Updated status color mapping to generate both standalone and `-on-bg` variants for danger, warning, success, and info
  - Status colors now use `.main` for standalone variants and `.dark` for `-on-bg` variants, providing better visual hierarchy

  The converter now generates tokens that match the updated BUI design system structure, with clear distinction between status colors for standalone use vs. use on colored backgrounds.

- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.

#### 0.2.3

##### Patch Changes

- [`f157f43`](https://github.com/backstage/backstage/commit/f157f43): Fix installation command
- [`e4a1180`](https://github.com/backstage/backstage/commit/e4a1180): Updated tokens from `--bui-bg` to `--bui-bg-surface-0`

### `@backstage/plugin-notifications` (0.5.11 → [0.5.15](../changelogs/@backstage/plugin-notifications.md#0515))

#### 0.5.15

##### Patch Changes

- [`aa29b50`](https://github.com/backstage/backstage/commit/aa29b50): New frontend system pages now use the default plugin header together with `HeaderPage` instead of the legacy core page header pattern.
- [`0be2541`](https://github.com/backstage/backstage/commit/0be2541): Promoted the plugin's translation ref to the stable package entry point. It was previously only available through the alpha entry point.

#### 0.5.14

##### Patch Changes

- [`8005286`](https://github.com/backstage/backstage/commit/8005286): Added `renderItem` prop to `NotificationsSidebarItem` component, allowing custom UI rendering while retaining all built-in notification logic (unread count, snackbar, signals, web notifications).
- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.

#### 0.5.13

##### Patch Changes

- [`4452d15`](https://github.com/backstage/backstage/commit/4452d15): Added i18n support.

#### 0.5.12

##### Patch Changes

- [`d02db50`](https://github.com/backstage/backstage/commit/d02db50): Remove unnecessary use of `compatWrapper` and `convertLegacyRouteRef`(s) for the new frontend system.
- [`53347cc`](https://github.com/backstage/backstage/commit/53347cc): Move long notification descriptions behind `Show more/less` button.

  This improves readability of the notifications list by preventing long descriptions from taking up too much space
  or rendering very small scrollable areas.

### `@backstage/plugin-notifications-backend` (0.6.0 → [0.6.3](../changelogs/@backstage/plugin-notifications-backend.md#063))

#### 0.6.2

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`5e3ef57`](https://github.com/backstage/backstage/commit/5e3ef57): Added `peerModules` metadata declaring recommended modules for cross-plugin integrations.
- [`e9eb400`](https://github.com/backstage/backstage/commit/e9eb400): Allow configuring included topics for email notifications.

#### 0.6.1

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0

### `@backstage/plugin-notifications-backend-module-email` (0.3.16 → [0.3.19](../changelogs/@backstage/plugin-notifications-backend-module-email.md#0319))

#### 0.3.18

##### Patch Changes

- [`e9eb400`](https://github.com/backstage/backstage/commit/e9eb400): Allow configuring included topics for email notifications.

#### 0.3.17

##### Patch Changes

- [`a5d5b3a`](https://github.com/backstage/backstage/commit/a5d5b3a): SES config for the notification email processor now supports utilizing an ARN for the SES identity when sending an email after the SES SDK V2 update.

  The `sesConfig.fromArn` will set the `fromEmailAddressIdentityArn` option for the SES `SendEmailCommand`. The `sesConfig.sourceArn` field is removed since no equivalent option is available in the send email command options. Setting `sesConfig.sourceArn` will have no effect and log a warning. Example changes:

  ```diff
  notifications:
    processors:
      email:
        transportConfig:
          transport: "ses"
          region: "us-west-2"
        sender: "sender@mycompany.com"
        replyTo: "no-reply@mycompany.com"
        sesConfig:
  -       sourceArn: "arn:aws:ses:us-west-2:123456789012:identity/example.com"
          fromArn: "arn:aws:ses:us-west-2:123456789012:identity/example.com"
  ```

- [`b267aea`](https://github.com/backstage/backstage/commit/b267aea): Updated dependency `@types/nodemailer` to `^7.0.0`.

### `@backstage/plugin-notifications-common` (0.2.0 → [0.2.1](../changelogs/@backstage/plugin-notifications-common.md#021))

#### 0.2.1

##### Patch Changes

- [`e9eb400`](https://github.com/backstage/backstage/commit/e9eb400): Allow configuring included topics for email notifications.

### `@backstage/plugin-org-react` (0.1.44 → [0.1.48](../changelogs/@backstage/plugin-org-react.md#0148))

#### 0.1.47

##### Patch Changes

- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.

### `@backstage/plugin-permission-backend` (0.7.6 → [0.7.10](../changelogs/@backstage/plugin-permission-backend.md#0710))

#### 0.7.10

##### Patch Changes

- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

#### 0.7.9

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 0.7.7

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0

### `@backstage/plugin-permission-common` (0.9.3 → [0.9.7](../changelogs/@backstage/plugin-permission-common.md#097))

#### 0.9.7

##### Patch Changes

- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

#### 0.9.6

##### Patch Changes

- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 0.9.4

##### Patch Changes

- [`872eb91`](https://github.com/backstage/backstage/commit/872eb91): Upgrade `zod-to-json-schema` to latest version

### `@backstage/plugin-permission-node` (0.10.6 → [0.10.11](../changelogs/@backstage/plugin-permission-node.md#01011))

#### 0.10.11

##### Patch Changes

- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

#### 0.10.10

##### Patch Changes

- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 0.10.8

##### Patch Changes

- [`872eb91`](https://github.com/backstage/backstage/commit/872eb91): Upgrade `zod-to-json-schema` to latest version

#### 0.10.7

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0

### `@backstage/plugin-permission-react` (0.4.38 → [0.4.41](../changelogs/@backstage/plugin-permission-react.md#0441))

#### 0.4.41

##### Patch Changes

- [`5fec07d`](https://github.com/backstage/backstage/commit/5fec07d): Permission checks made in the same tick are now batched into a single call to the permission backend.

#### 0.4.40

##### Patch Changes

- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.

### `@backstage/plugin-proxy-backend` (0.6.8 → [0.6.11](../changelogs/@backstage/plugin-proxy-backend.md#0611))

#### 0.6.10

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports

#### 0.6.9

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0

### `@backstage/plugin-scaffolder-backend-module-azure` (0.2.15 → [0.2.19](../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#0219))

#### 0.2.17

##### Patch Changes

- [`88abcc6`](https://github.com/backstage/backstage/commit/88abcc6): Improved README with clearer setup and usage guidance.

### `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.15 → [0.2.19](../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#0219))

#### 0.2.16

##### Patch Changes

- [`5a6aca2`](https://github.com/backstage/backstage/commit/5a6aca2): Improve error message when provided target branch is missing

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.15 → [0.3.19](../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#0319))

#### 0.3.18

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.17 → [0.3.21](../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0321))

#### 0.3.20

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports

### `@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.15 → [0.2.19](../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#0219))

#### 0.2.18

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports

### `@backstage/plugin-scaffolder-backend-module-gitea` (0.2.15 → [0.2.19](../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#0219))

#### 0.2.18

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports

### `@backstage/plugin-scaffolder-backend-module-github` (0.9.2 → [0.9.7](../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#097))

#### 0.9.7

##### Patch Changes

- [`a761a48`](https://github.com/backstage/backstage/commit/a761a48): Added optional `returnWorkflowRunDetails` input to `github:actions:dispatch` action. When true, exposes `workflowRunId`, `workflowRunUrl`, and `workflowRunHtmlUrl` as outputs using the GitHub API `return_run_details` parameter.
- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.
- [`b2591f6`](https://github.com/backstage/backstage/commit/b2591f6): Fixed environment `waitTime` description incorrectly asking for milliseconds instead of minutes.

#### 0.9.6

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`82ca951`](https://github.com/backstage/backstage/commit/82ca951): cleaned up repo creation to make the unique portions explicit
- [`672b972`](https://github.com/backstage/backstage/commit/672b972): Updated dependency `libsodium-wrappers` to `^0.8.0`.
  Updated dependency `@types/libsodium-wrappers` to `^0.8.0`.
- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 0.9.4

##### Patch Changes

- [`bb7088b`](https://github.com/backstage/backstage/commit/bb7088b): Added options to set [workflow access level][access-level] for repositories to `github:repo:create`

  This is useful when creating repositories for GitHub Actions to manage access
  to the workflows during creation.

  ```diff
   - action: github:repo:create
      id: create-repo
      input:
        repoUrl: github.com?owner=owner&repo=repo
        visibility: private
  +     workflowAccess: organization
  ```

  [access-level]: https://docs.github.com/en/rest/actions/permissions?apiVersion=2022-11-28#set-the-level-of-access-for-workflows-outside-of-the-repository

#### 0.9.3

##### Patch Changes

- [`dab3d3f`](https://github.com/backstage/backstage/commit/dab3d3f): Added autocompletion resource `owners` for retrieving GitHub repository owners.

### `@backstage/plugin-scaffolder-backend-module-rails` (0.5.15 → [0.5.19](../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0519))

#### 0.5.18

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports

#### 0.5.16

##### Patch Changes

- [`2bae83a`](https://github.com/backstage/backstage/commit/2bae83a): Bumped dev dependencies `@types/node`

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.16 → [0.4.20](../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0420))

#### 0.4.19

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports

### `@backstage/plugin-scaffolder-node-test-utils` (0.3.5 → [0.3.9](../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#039))

#### 0.3.8

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.

### `@backstage/plugin-search-backend-module-catalog` (0.3.10 → [0.3.13](../changelogs/@backstage/plugin-search-backend-module-catalog.md#0313))

#### 0.3.12

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports

### `@backstage/plugin-search-backend-module-explore` (0.3.9 → [0.3.12](../changelogs/@backstage/plugin-search-backend-module-explore.md#0312))

#### 0.3.11

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`df27350`](https://github.com/backstage/backstage/commit/df27350): Updated dependency `@backstage-community/plugin-explore-common` to `^0.12.0`.

#### 0.3.10

##### Patch Changes

- [`9b69262`](https://github.com/backstage/backstage/commit/9b69262): Updated dependency `@backstage-community/plugin-explore-common` to `^0.9.0`.

### `@backstage/plugin-search-backend-module-pg` (0.5.50 → [0.5.53](../changelogs/@backstage/plugin-search-backend-module-pg.md#0553))

#### 0.5.52

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`2ee354a`](https://github.com/backstage/backstage/commit/2ee354a): Return `numberOfResults` count with search query responses

### `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.3.15 → [0.3.18](../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#0318))

#### 0.3.17

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports

### `@backstage/plugin-search-backend-module-techdocs` (0.4.8 → [0.4.12](../changelogs/@backstage/plugin-search-backend-module-techdocs.md#0412))

#### 0.4.11

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports

### `@backstage/plugin-signals-backend` (0.3.10 → [0.3.13](../changelogs/@backstage/plugin-signals-backend.md#0313))

#### 0.3.12

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports

#### 0.3.11

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0

### `@backstage/plugin-signals-node` (0.1.26 → [0.1.29](../changelogs/@backstage/plugin-signals-node.md#0129))

#### 0.1.27

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0

### `@backstage/theme` (0.7.0 → [0.7.2](../changelogs/@backstage/theme.md#072))

#### 0.7.2

##### Patch Changes

- [`1c52dcc`](https://github.com/backstage/backstage/commit/1c52dcc): add square shape
- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.

#### 0.7.1

##### Patch Changes

- [`fa06f6b`](https://github.com/backstage/backstage/commit/fa06f6b): Added a `themeName` prop to `UnifiedThemeProvider`, enabling Backstage UI `data-theme-name` CSS attribute to be set based on active theme.

## Other minor version bumps

### `@backstage/backend-app-api` (1.3.0 → [1.6.0](../changelogs/@backstage/backend-app-api.md#160))

#### 1.6.0

##### Minor Changes

- [`545557a`](https://github.com/backstage/backstage/commit/545557a): Registration errors should be forwarded as BackendStartupResult

#### 1.5.0

##### Minor Changes

- [`f1d29b4`](https://github.com/backstage/backstage/commit/f1d29b4): Added support for extension point factories, along with the ability to report module startup failures via the extension point factory context.

##### Patch Changes

- [`6bb2f21`](https://github.com/backstage/backstage/commit/6bb2f21): Fixed memory leak by properly cleaning up process event listeners on backend shutdown.

#### 1.4.1

##### Patch Changes

- [`04db26b`](https://github.com/backstage/backstage/commit/04db26b): Clean up process event listeners on backend stop to prevent leaks

#### 1.4.0

##### Minor Changes

- [`5a2d538`](https://github.com/backstage/backstage/commit/5a2d538): Introduced backend startup result tracking and error handling. The `Backend.start()` method now returns a `BackendStartupResult` with detailed success/failure status and timing information for all plugins and modules. When startup fails, a `BackendStartupError` is thrown that includes the complete startup results, making it easier to diagnose which plugins or modules failed.

  This also improves the default error message when backend startup fails, and of course makes it possible to craft your own custom error reporting based on the startup results.

### `@backstage/backend-test-utils` (1.10.1 → [1.11.1](../changelogs/@backstage/backend-test-utils.md#1111))

#### 1.11.1

##### Patch Changes

- [`dee4283`](https://github.com/backstage/backstage/commit/dee4283): Added `pluginId` field to `ActionsServiceAction` type, populated from the registering plugin's metadata.
- [`164711a`](https://github.com/backstage/backstage/commit/164711a): Added `cancelTask` to `MockSchedulerService` and mock scheduler service factory.
- [`62f0a53`](https://github.com/backstage/backstage/commit/62f0a53): Fixed error forwarding in the actions registry so that known errors like `InputError` and `NotFoundError` thrown by actions preserve their original status codes and messages instead of being wrapped in `ForwardedError` and coerced to 500.
- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.
- [`1ee5b28`](https://github.com/backstage/backstage/commit/1ee5b28): Adds a new metrics service mock to be leveraged in tests

#### 1.11.0

##### Minor Changes

- [`42abfb1`](https://github.com/backstage/backstage/commit/42abfb1): Added `createServiceMock`, a public utility for creating `ServiceMock` instances for custom service refs. This allows plugin authors to define mock creators for their own services following the same pattern as the built-in `mockServices` mocks.

##### Patch Changes

- [`f1d29b4`](https://github.com/backstage/backstage/commit/f1d29b4): Updated `startTestBackend` to support factory-based extension points (v1.1 format) in addition to the existing direct implementation format.
- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`68eb322`](https://github.com/backstage/backstage/commit/68eb322): Added `@types/jest` as an optional peer dependency, since jest types are exposed in the public API surface.
- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 1.10.3

##### Patch Changes

- [`872eb91`](https://github.com/backstage/backstage/commit/872eb91): Upgrade `zod-to-json-schema` to latest version

#### 1.10.2

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0
- [`8be23a4`](https://github.com/backstage/backstage/commit/8be23a4): Switched `textextensions` dependency for `text-extensions`.
- [`5a737e1`](https://github.com/backstage/backstage/commit/5a737e1): Fix PostgreSQL 18 `TestDatabases` by pinning the data directory

### `@backstage/catalog-client` (1.12.1 → [1.14.0](../changelogs/@backstage/catalog-client.md#1140))

#### 1.14.0

##### Minor Changes

- [`972f686`](https://github.com/backstage/backstage/commit/972f686): Added support for the `query` field in `getEntitiesByRefs` requests, enabling predicate-based filtering with `$all`, `$any`, `$not`, `$exists`, `$in`, `$contains`, and `$hasPrefix` operators.
- [`5d95e8e`](https://github.com/backstage/backstage/commit/5d95e8e): Add an `onConflict` option to location creation that can refresh an existing location instead of throwing a conflict error.
- [`56c908e`](https://github.com/backstage/backstage/commit/56c908e): Added support for the `query` field in `getEntityFacets` requests, enabling predicate-based filtering with `$all`, `$any`, `$not`, `$exists`, `$in`, `$contains`, and `$hasPrefix` operators.
- [`0fbcf23`](https://github.com/backstage/backstage/commit/0fbcf23): Migrated OpenAPI schemas to 3.1.
- [`51e23eb`](https://github.com/backstage/backstage/commit/51e23eb): Added predicate-based entity filtering via POST /entities/by-query endpoint.

  Supports `$all`, `$any`, `$not`, `$exists`, `$in`, `$hasPrefix`, and (partially) `$contains` operators for expressive entity queries. Integrated into the existing `queryEntities` flow with full cursor-based pagination, permission enforcement, and `totalItems` support.

  The catalog client's `queryEntities()` method automatically routes to the POST endpoint when a `query` predicate is provided.

##### Patch Changes

- [`d2494d6`](https://github.com/backstage/backstage/commit/d2494d6): Minor update to catalog client docs

#### 1.13.0

##### Minor Changes

- [`b4e8249`](https://github.com/backstage/backstage/commit/b4e8249): Implemented support for the new `queryLocations` and `streamLocations` that allow paginated/streamed and filtered location queries

##### Patch Changes

- [`9cf6762`](https://github.com/backstage/backstage/commit/9cf6762): Improved the `InMemoryCatalogClient` test utility to support ordering, pagination, full-text search, and field projection for entity query methods. Also fixed `getEntityFacets` to correctly handle multi-valued fields.

### `@backstage/plugin-scaffolder` (1.34.3 → [1.36.1](../changelogs/@backstage/plugin-scaffolder.md#1361))

#### 1.36.0

##### Minor Changes

- [`0be2541`](https://github.com/backstage/backstage/commit/0be2541): Promoted the plugin's translation ref to the stable package entry point. It was previously only available through the alpha entry point.

##### Patch Changes

- [`e27bd4e`](https://github.com/backstage/backstage/commit/e27bd4e): Removed check for deprecated `bitbucket` integration from `repoPickerValidation` function used by the `RepoUrlPicker`, it now validates the `bitbucketServer` and `bitbucketCloud` integrations instead.
- [`538c985`](https://github.com/backstage/backstage/commit/538c985): Updated installation documentation to use feature discovery as the default.
- [`bd5b842`](https://github.com/backstage/backstage/commit/bd5b842): Added a new `ui:autoSelect` option to the EntityPicker field that controls whether an entity is automatically selected when the field loses focus. When set to `false`, the field will remain empty if the user closes it without explicitly selecting an entity, preventing unintentional selections. Defaults to `true` for backward compatibility.
- [`3f36ce1`](https://github.com/backstage/backstage/commit/3f36ce1): Updated alpha plugin icons to follow the new frontend icon sizing rules when rendered in plugin and navigation surfaces.
- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

#### 1.35.3

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`4e581a6`](https://github.com/backstage/backstage/commit/4e581a6): Updated the browser tab title on the template wizard page to display the specific template title instead of the generic "Create a new component" text.
- [`7feb83b`](https://github.com/backstage/backstage/commit/7feb83b): Adjusted to use the new `@backstage/filter-predicates` types for predicate expressions.
- [`018ca87`](https://github.com/backstage/backstage/commit/018ca87): Added `title` and `icon` to the plugin definition for the new frontend system.
- [`2eeca03`](https://github.com/backstage/backstage/commit/2eeca03): Scaffolder form fields in the new frontend system now use a Utility API pattern instead of multiple attachment points. The `FormFieldBlueprint` now uses this new approach, and while form fields created with older versions still work, they will produce a deprecation warning and will stop working in a future release.

  As part of this change, the following alpha exports were removed:

  - `formFieldsApiRef`
  - `ScaffolderFormFieldsApi`

- [`b9d90a7`](https://github.com/backstage/backstage/commit/b9d90a7): Added `@backstage/frontend-test-utils` as a dev dependency for mock API usage in tests.
- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.
- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 1.35.1

##### Patch Changes

- [`9d75495`](https://github.com/backstage/backstage/commit/9d75495): Fixed bug in RepoUrlPickerComponent component where repository names were not being autocompleted.
- [`872eb91`](https://github.com/backstage/backstage/commit/872eb91): Upgrade `zod-to-json-schema` to latest version

#### 1.35.0

##### Minor Changes

- [`dab3d3f`](https://github.com/backstage/backstage/commit/dab3d3f): Added field extension `RepoOwnerPicker` for retrieving GitHub repository owners.

##### Patch Changes

- [`d02db50`](https://github.com/backstage/backstage/commit/d02db50): Remove unnecessary use of `compatWrapper` and `convertLegacyRouteRef`(s) for the new frontend system.
- [`be21c5c`](https://github.com/backstage/backstage/commit/be21c5c): Updated dependency `@rjsf/utils` to `5.24.13`.
  Updated dependency `@rjsf/core` to `5.24.13`.
  Updated dependency `@rjsf/material-ui` to `5.24.13`.
  Updated dependency `@rjsf/validator-ajv8` to `5.24.13`.

### `@backstage/plugin-scaffolder-backend` (3.0.1 → [3.3.0](../changelogs/@backstage/plugin-scaffolder-backend.md#330))

#### 3.2.0

##### Minor Changes

- [`c9b11eb`](https://github.com/backstage/backstage/commit/c9b11eb): Added a new `list-scaffolder-tasks` action that allows querying scaffolder tasks with optional ownership filtering and pagination support
- [`1b42218`](https://github.com/backstage/backstage/commit/1b42218): Adds a new `get-scaffolder-task-logs` action to `@backstage/plugin-scaffolder-backend` that retrieves log events for a given scaffolder task, with optional support for retrieving only new events after a given event ID.
- [`0fbcf23`](https://github.com/backstage/backstage/commit/0fbcf23): Migrated OpenAPI schemas to 3.1.
- [`7695dd2`](https://github.com/backstage/backstage/commit/7695dd2): Added a new `list-scaffolder-actions` action that returns all installed scaffolder actions with their schemas and examples
- [`e8736ea`](https://github.com/backstage/backstage/commit/e8736ea): Added secrets schema validation for task creation, retry, and dry-run endpoints. When a template defines `spec.secrets.schema`, the API validates provided secrets against the schema and returns a `400` error if validation fails.

##### Patch Changes

- [`e27bd4e`](https://github.com/backstage/backstage/commit/e27bd4e): Removed `@backstage/plugin-scaffolder-backend-module-bitbucket` from `package.json` as the package itself has been deprecated and the code deleted.
- [`4f5ed06`](https://github.com/backstage/backstage/commit/4f5ed06): Fixed a security vulnerability where server-configured environment secrets were exposed through the scaffolder dry-run endpoint.
- [`30ff981`](https://github.com/backstage/backstage/commit/30ff981): Fixed a security vulnerability where secrets could bypass log redaction when transformed through Nunjucks filters in scaffolder templates.
- [`4e39e63`](https://github.com/backstage/backstage/commit/4e39e63): Removed unused dependencies
- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.
- [`ccc20cf`](https://github.com/backstage/backstage/commit/ccc20cf): create scaffolder MCP action to dry run a provided scaffolder template

#### 3.1.3

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`4fc7bf0`](https://github.com/backstage/backstage/commit/4fc7bf0): Removed unused dependency
- [`0ce78b0`](https://github.com/backstage/backstage/commit/0ce78b0): Support `if` conditions inside `each` loops for scaffolder steps
- [`5e3ef57`](https://github.com/backstage/backstage/commit/5e3ef57): Added `peerModules` metadata declaring recommended modules for cross-plugin integrations.
- [`8148621`](https://github.com/backstage/backstage/commit/8148621): Moved `@backstage/backend-defaults` from `dependencies` to `devDependencies`.
- [`1e669cc`](https://github.com/backstage/backstage/commit/1e669cc): Migrate audit events reference docs to http://backstage.io/docs.
- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 3.1.1

##### Patch Changes

- [`5012852`](https://github.com/backstage/backstage/commit/5012852): Remove unused abort controller in debug:wait action
- [`c641c14`](https://github.com/backstage/backstage/commit/c641c14): Wrap some of the action logic with `resolveSafeChildPath` and improve symlink handling when fetching remote and local files
- [`27f9061`](https://github.com/backstage/backstage/commit/27f9061): REwrite]
- [`872eb91`](https://github.com/backstage/backstage/commit/872eb91): Upgrade `zod-to-json-schema` to latest version

#### 3.1.0

##### Minor Changes

- [`a4cd405`](https://github.com/backstage/backstage/commit/a4cd405): Add `defaultEnvironment` config to scaffolder to enable more flexible and custom templates. Now it's possible enable access to default parameters and secrets in templates, improving security and reducing complexity.

##### Patch Changes

- [`be5972b`](https://github.com/backstage/backstage/commit/be5972b): Fixed a bug where config was not passed to NunjucksWorkflowRunner, causing defaultEnvironment to be undefined
- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0
- [`2bae83a`](https://github.com/backstage/backstage/commit/2bae83a): Updated `isolated-vm` to `6.0.1`
- [`25b560e`](https://github.com/backstage/backstage/commit/25b560e): Internal change to support new versions of the `logform` library
- [`8f4aded`](https://github.com/backstage/backstage/commit/8f4aded): Fixing OpenAPI definition
- [`1226647`](https://github.com/backstage/backstage/commit/1226647): Updated dependency `esbuild` to `^0.27.0`.

### `@backstage/plugin-scaffolder-react` (1.19.3 → [1.20.0](../changelogs/@backstage/plugin-scaffolder-react.md#1200))

#### 1.20.0

##### Minor Changes

- [`0be2541`](https://github.com/backstage/backstage/commit/0be2541): Promoted the plugin's translation ref to the stable package entry point. It was previously only available through the alpha entry point.
- [`470f72d`](https://github.com/backstage/backstage/commit/470f72d): The `LogViewer` component from `@backstage/core-components` now supports downloading logs if a callback is passed to `onDownloadLogs`

##### Patch Changes

- [`004b5c1`](https://github.com/backstage/backstage/commit/004b5c1): Added back `formFieldsApiRef` and `ScaffolderFormFieldsApi` as alpha exports.
- [`bd31ddd`](https://github.com/backstage/backstage/commit/bd31ddd): Updated dependency `flatted` to `3.3.4`.
- [`f598909`](https://github.com/backstage/backstage/commit/f598909): Added `scaffolderApiMock` test utility, exported from `@backstage/plugin-scaffolder-react/testUtils`.
- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

#### 1.19.7

##### Patch Changes

- [`2eeca03`](https://github.com/backstage/backstage/commit/2eeca03): Scaffolder form fields in the new frontend system now use a Utility API pattern instead of multiple attachment points. The `FormFieldBlueprint` now uses this new approach, and while form fields created with older versions still work, they will produce a deprecation warning and will stop working in a future release.

  As part of this change, the following alpha exports were removed:

  - `formFieldsApi`
  - `formFieldsApiRef`
  - `ScaffolderFormFieldsApi`

- [`b9d90a7`](https://github.com/backstage/backstage/commit/b9d90a7): Added `@backstage/frontend-test-utils` as a dev dependency for mock API usage in tests.
- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.
- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 1.19.5

##### Patch Changes

- [`872eb91`](https://github.com/backstage/backstage/commit/872eb91): Upgrade `zod-to-json-schema` to latest version

#### 1.19.4

##### Patch Changes

- [`fb029b6`](https://github.com/backstage/backstage/commit/fb029b6): Updated luxon types
- [`5ca461e`](https://github.com/backstage/backstage/commit/5ca461e): Fixed bug where custom `review.name` values were incorrectly formatted by `startCase`, preserving them exactly as written.
- [`be21c5c`](https://github.com/backstage/backstage/commit/be21c5c): Updated dependency `@rjsf/utils` to `5.24.13`.
  Updated dependency `@rjsf/core` to `5.24.13`.
  Updated dependency `@rjsf/material-ui` to `5.24.13`.
  Updated dependency `@rjsf/validator-ajv8` to `5.24.13`.
- [`9b38f22`](https://github.com/backstage/backstage/commit/9b38f22): Updated dependency `use-immer` to `^0.11.0`.

### `@backstage/plugin-search` (1.5.0 → [1.7.0](../changelogs/@backstage/plugin-search.md#170))

#### 1.7.0

##### Minor Changes

- [`0be2541`](https://github.com/backstage/backstage/commit/0be2541): Promoted the plugin's translation ref to the stable package entry point. It was previously only available through the alpha entry point.

##### Patch Changes

- [`d5eb954`](https://github.com/backstage/backstage/commit/d5eb954): Fixes the search component not registering the first search on navigate to the search page.
- [`aa29b50`](https://github.com/backstage/backstage/commit/aa29b50): New frontend system pages now use the default plugin header together with `HeaderPage` instead of the legacy core page header pattern.
- [`3f36ce1`](https://github.com/backstage/backstage/commit/3f36ce1): Updated alpha plugin icons to follow the new frontend icon sizing rules when rendered in plugin and navigation surfaces.

#### 1.6.0

##### Minor Changes

- [`feef8d9`](https://github.com/backstage/backstage/commit/feef8d9): Added support for configuring the default search type in the search page via the `search.defaultType` option in `app-config.yaml`. This applies to both the legacy and new frontend systems. If not set, the default is empty, which means searching for "all" types.

##### Patch Changes

- [`018ca87`](https://github.com/backstage/backstage/commit/018ca87): Added `title` and `icon` to the plugin definition for the new frontend system.
- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.

#### 1.5.3

##### Patch Changes

- [`5c49a00`](https://github.com/backstage/backstage/commit/5c49a00): Update for the `qs` library bump: the old array limit setting has changed to be more strict; you can no longer just give a zero to mean unlimited. So we choose an arbitrary high value, to at least go higher than the default 20.

#### 1.5.1

##### Patch Changes

- [`f3f84f1`](https://github.com/backstage/backstage/commit/f3f84f1): Minor extension type updates after frontend API bump
- [`d02db50`](https://github.com/backstage/backstage/commit/d02db50): Remove unnecessary use of `compatWrapper` and `convertLegacyRouteRef`(s) for the new frontend system.

### `@backstage/plugin-search-backend` (2.0.8 → [2.1.0](../changelogs/@backstage/plugin-search-backend.md#210))

#### 2.1.0

##### Minor Changes

- [`0fbcf23`](https://github.com/backstage/backstage/commit/0fbcf23): Migrated OpenAPI schemas to 3.1.

##### Patch Changes

- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

#### 2.0.12

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`8148621`](https://github.com/backstage/backstage/commit/8148621): Moved `@backstage/backend-defaults` from `dependencies` to `devDependencies`.
- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 2.0.9

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0

### `@backstage/plugin-search-backend-module-elasticsearch` (1.7.8 → [1.8.1](../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#181))

#### 1.8.0

##### Minor Changes

- [`583bd3a`](https://github.com/backstage/backstage/commit/583bd3a): Added `elasticsearchAuthExtensionPoint` to enable dynamic authentication mechanisms such as bearer tokens with automatic rotation.

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`7021165`](https://github.com/backstage/backstage/commit/7021165): Fixed bulk indexing to refresh only the target index instead of all indexes, improving performance in multi-index deployments.

### `@backstage/plugin-search-backend-node` (1.3.17 → [1.4.2](../changelogs/@backstage/plugin-search-backend-node.md#142))

#### 1.4.1

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports

#### 1.4.0

##### Minor Changes

- [`4d3ddb9`](https://github.com/backstage/backstage/commit/4d3ddb9): Improving method that search tokenizer breaks apart entity names

### `@backstage/plugin-search-react` (1.10.0 → [1.11.0](../changelogs/@backstage/plugin-search-react.md#1110))

#### 1.11.0

##### Minor Changes

- [`0be2541`](https://github.com/backstage/backstage/commit/0be2541): Promoted the plugin's translation ref to the stable package entry point. It was previously only available through the alpha entry point.

##### Patch Changes

- [`d5eb954`](https://github.com/backstage/backstage/commit/d5eb954): Fixes the search component not registering the first search on navigate to the search page.

#### 1.10.3

##### Patch Changes

- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.

#### 1.10.1

##### Patch Changes

- [`8947a4e`](https://github.com/backstage/backstage/commit/8947a4e): Skip the very first empty search when going to the landing page

### `@backstage/plugin-techdocs` (1.16.0 → [1.17.2](../changelogs/@backstage/plugin-techdocs.md#1172))

#### 1.17.1

##### Patch Changes

- [`9795d30`](https://github.com/backstage/backstage/commit/9795d30): chore(deps): bump `dompurify` from 3.3.1 to 3.3.2
- [`30e08df`](https://github.com/backstage/backstage/commit/30e08df): Added `documentation` as the default entity content group for the TechDocs entity content tab.
- [`3f36ce1`](https://github.com/backstage/backstage/commit/3f36ce1): Updated alpha plugin icons to follow the new frontend icon sizing rules when rendered in plugin and navigation surfaces.

#### 1.17.0

##### Minor Changes

- [`27798df`](https://github.com/backstage/backstage/commit/27798df): Add two config values to the `page:techdocs/reader` extension that configure default layout, `withoutSearch` and `withoutHeader`. Default are unchanged to `false`.

  E.g. to disable the search and header on the Techdocs Reader Page:

  ```yaml
  app:
    extensions:
      - page:techdocs/reader:
          config:
            withoutSearch: true
            withoutHeader: true
  ```

##### Patch Changes

- [`7feb83b`](https://github.com/backstage/backstage/commit/7feb83b): Adjusted to use the new `@backstage/filter-predicates` types for predicate expressions.
- [`491a06c`](https://github.com/backstage/backstage/commit/491a06c): Add the ability to show icons for the tabs on the entity page (new frontend)
- [`018ca87`](https://github.com/backstage/backstage/commit/018ca87): Added `title` and `icon` to the plugin definition for the new frontend system.
- [`9e29545`](https://github.com/backstage/backstage/commit/9e29545): Improve sidebars (nav/TOC) layout and scrolling
- [`22dce2b`](https://github.com/backstage/backstage/commit/22dce2b): TechDocs addons in the new frontend system now use a Utility API pattern instead of multiple attachment points. The `AddonBlueprint` now uses this new approach, and while addons created with older versions still work, they will produce a deprecation warning and will stop working in a future release.
- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.
- [`0a88779`](https://github.com/backstage/backstage/commit/0a88779): Added title prop to OffsetPaginatedDocsTable for proper display

#### 1.16.2

##### Patch Changes

- [`0afb8a6`](https://github.com/backstage/backstage/commit/0afb8a6): Corrected color of some elements such as Grid cards and Tables.
- [`94ff7ab`](https://github.com/backstage/backstage/commit/94ff7ab): Code block "Copy to clipboard" button was not positioned correctly for docs built with `mkdocs-material>=9.7`

#### 1.16.1

##### Patch Changes

- [`f3f84f1`](https://github.com/backstage/backstage/commit/f3f84f1): Minor extension type updates after frontend API bump
- [`5c33821`](https://github.com/backstage/backstage/commit/5c33821): Fixed schema type for additionalAllowedURIProtocols
- [`d02db50`](https://github.com/backstage/backstage/commit/d02db50): Remove unnecessary use of `compatWrapper` and `convertLegacyRouteRef`(s) for the new frontend system.
- [`592361e`](https://github.com/backstage/backstage/commit/592361e): The `techdocs` config is now marked as optional.

## Other patch version bumps

### `@backstage/app-defaults` (1.7.2 → [1.7.6](../changelogs/@backstage/app-defaults.md#176))

#### 1.7.5

##### Patch Changes

- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.

### `@backstage/catalog-model` (1.7.6 → [1.7.7](../changelogs/@backstage/catalog-model.md#177))

#### 1.7.7

##### Patch Changes

- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

### `@backstage/config-loader` (1.10.6 → [1.10.9](../changelogs/@backstage/config-loader.md#1109))

#### 1.10.9

##### Patch Changes

- [`70fc178`](https://github.com/backstage/backstage/commit/70fc178): Migrated from deprecated `findPaths` to `targetPaths` and `findOwnPaths` from `@backstage/cli-common`.

#### 1.10.8

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports

#### 1.10.7

##### Patch Changes

- [`741c47a`](https://github.com/backstage/backstage/commit/741c47a): Updated dependency `typescript-json-schema` to `^0.67.0`.

### `@backstage/core-app-api` (1.19.2 → [1.19.6](../changelogs/@backstage/core-app-api.md#1196))

#### 1.19.6

##### Patch Changes

- [`12d8afe`](https://github.com/backstage/backstage/commit/12d8afe): Added `BUIProvider` from `@backstage/ui` to the app shell provider tree, enabling BUI components to fire analytics events through the Backstage analytics system.
- [`59752a2`](https://github.com/backstage/backstage/commit/59752a2): Deprecated `AlertApiForwarder` in favor of the new `ToastApi`. The `AlertApiForwarder` now emits a console warning on first use, guiding developers to migrate to `ToastApi` from `@backstage/frontend-plugin-api`.
- [`0452d02`](https://github.com/backstage/backstage/commit/0452d02): Add optional `description` field to plugin-level feature flags.
- [`42f8c9b`](https://github.com/backstage/backstage/commit/42f8c9b): Added `BUIProvider` inside the legacy app router to enable client-side routing for all BUI components.
- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.

#### 1.19.5

##### Patch Changes

- [`5a71e7a`](https://github.com/backstage/backstage/commit/5a71e7a): Fixed memory leak caused by duplicate `AppThemeSelector` instances and missing cleanup in `AppThemeSelector` and `AppLanguageSelector`. Added `dispose()` method to both selectors for proper resource cleanup.
- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.
- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 1.19.3

##### Patch Changes

- [`75683ed`](https://github.com/backstage/backstage/commit/75683ed): Added replay functionality to `AlertApiForwarder` to buffer and replay recent alerts to new subscribers, preventing missed alerts that were posted before subscription.
- [`97cd16f`](https://github.com/backstage/backstage/commit/97cd16f): Internal update of translation imports.

### `@backstage/core-plugin-api` (1.12.0 → [1.12.4](../changelogs/@backstage/core-plugin-api.md#1124))

#### 1.12.4

##### Patch Changes

- [`d911b72`](https://github.com/backstage/backstage/commit/d911b72): Updated `createApiRef` to preserve the direct config call without deprecation warnings while staying compatible with the new frontend API ref typing.
- [`59752a2`](https://github.com/backstage/backstage/commit/59752a2): Deprecated `AlertApi`, `AlertMessage`, and `alertApiRef` in favor of the new `ToastApi` from `@backstage/frontend-plugin-api`.
- [`0452d02`](https://github.com/backstage/backstage/commit/0452d02): Add optional `description` field to plugin-level feature flags.
- [`a49a40d`](https://github.com/backstage/backstage/commit/a49a40d): Updated dependency `zod` to `^3.25.76 || ^4.0.0` & migrated to `/v3` or `/v4` imports.
- [`fe848e0`](https://github.com/backstage/backstage/commit/fe848e0): Changed `useApiHolder` to return an empty `ApiHolder` instead of throwing when used outside of an API context.

#### 1.12.3

##### Patch Changes

- [`53b6549`](https://github.com/backstage/backstage/commit/53b6549): Plugins in the new frontend system now have a `pluginId` field rather than `id` to better align with naming conventions used throughout the frontend and backend systems. The old field is still present but marked as deprecated. All internal code has been updated to prefer `pluginId` while maintaining backward compatibility by falling back to `id` when needed.
- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.
- [`69d880e`](https://github.com/backstage/backstage/commit/69d880e): Bump to latest zod to ensure it has the latest features

#### 1.12.1

##### Patch Changes

- [`358c6f7`](https://github.com/backstage/backstage/commit/358c6f7): The `useApp` and `useRouteRef` functions are now forwards compatible with the new frontend system. Along with the previous route reference changes this means that there is no longer a need to use `compatWrapper` from `@backstage/core-compat-api` to make code based on `@backstage/core-plugin-api` compatible with `@backstage/frontend-plugin-api` APIs.
- [`97cd16f`](https://github.com/backstage/backstage/commit/97cd16f): Reversed the relationship between the old `@backstage/core-plugin-api` and the new `@backstage/frontend-plugin-api`. Previously, the a lot of API definitions and utilities where defined in the old and re-exported from the old, but this change flips that around so that they now reside in the new package and are re-exported from the old. The external API of both packages remain the same, but this is a step towards being able to add further compatibility with the new frontend system built into the old.

### `@backstage/dev-utils` (1.1.17 → [1.1.21](../changelogs/@backstage/dev-utils.md#1121))

#### 1.1.20

##### Patch Changes

- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.

### `@backstage/integration-react` (1.2.12 → [1.2.16](../changelogs/@backstage/integration-react.md#1216))

#### 1.2.15

##### Patch Changes

- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.

### `@backstage/plugin-gateway-backend` (1.1.0 → [1.1.3](../changelogs/@backstage/plugin-gateway-backend.md#113))

#### 1.1.1

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0
- [`7e860dd`](https://github.com/backstage/backstage/commit/7e860dd): Updated dependency `eventsource` to `^4.0.0`.

### `@backstage/plugin-search-common` (1.2.21 → [1.2.22](../changelogs/@backstage/plugin-search-common.md#1222))

#### 1.2.22

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports

### `@backstage/plugin-techdocs-backend` (2.1.2 → [2.1.6](../changelogs/@backstage/plugin-techdocs-backend.md#216))

#### 2.1.6

##### Patch Changes

- [`cb7c6b1`](https://github.com/backstage/backstage/commit/cb7c6b1): Added `techdocs.generator.mkdocs.dangerouslyAllowAdditionalKeys` configuration option to explicitly bypass MkDocs configuration key restrictions. This enables support for additional MkDocs configuration keys beyond the default safe allow list, such as the `hooks` key which some MkDocs plugins require.

#### 2.1.5

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`5e3ef57`](https://github.com/backstage/backstage/commit/5e3ef57): Added `peerModules` metadata declaring recommended modules for cross-plugin integrations.
- [`8148621`](https://github.com/backstage/backstage/commit/8148621): Moved `@backstage/backend-defaults` from `dependencies` to `devDependencies`.

#### 2.1.4

##### Patch Changes

- [`b6ff2a5`](https://github.com/backstage/backstage/commit/b6ff2a5): Some AWS `publisher` config options such as `region`, `endpoint`, `accountId` are now marked as `@visibility backend` instead of `secret`.

#### 2.1.3

##### Patch Changes

- [`de96a60`](https://github.com/backstage/backstage/commit/de96a60): chore(deps): bump `express` from 4.21.2 to 4.22.0
- [`2bae83a`](https://github.com/backstage/backstage/commit/2bae83a): Corrected `ErrorCallback` type to work with Node 22 types
- [`592361e`](https://github.com/backstage/backstage/commit/592361e): The `techdocs` config is now marked as optional.

### `@backstage/plugin-techdocs-module-addons-contrib` (1.1.30 → [1.1.34](../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1134))

#### 1.1.34

##### Patch Changes

- [`895563a`](https://github.com/backstage/backstage/commit/895563a): Avoid enabling the TechDocs LightBox addon for images wrapped in links, so image links keep working.

#### 1.1.33

##### Patch Changes

- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.

#### 1.1.31

##### Patch Changes

- [`8d6709e`](https://github.com/backstage/backstage/commit/8d6709e): Updated tests to match test-utils change

### `@backstage/plugin-techdocs-react` (1.3.5 → [1.3.9](../changelogs/@backstage/plugin-techdocs-react.md#139))

#### 1.3.8

##### Patch Changes

- [`22dce2b`](https://github.com/backstage/backstage/commit/22dce2b): TechDocs addons in the new frontend system now use a Utility API pattern instead of multiple attachment points. The `AddonBlueprint` now uses this new approach, and while addons created with older versions still work, they will produce a deprecation warning and will stop working in a future release.

  As part of this change, the `techDocsAddonDataRef` alpha export was removed.

- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.

### `@backstage/test-utils` (1.7.13 → [1.7.16](../changelogs/@backstage/test-utils.md#1716))

#### 1.7.15

##### Patch Changes

- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.
- [`68eb322`](https://github.com/backstage/backstage/commit/68eb322): Added `@types/jest` as an optional peer dependency, since jest types are exposed in the public API surface.

#### 1.7.14

##### Patch Changes

- [`97cd16f`](https://github.com/backstage/backstage/commit/97cd16f): Internal update of translation imports.

### `@backstage/version-bridge` (1.0.11 → [1.0.12](../changelogs/@backstage/version-bridge.md#1012))

#### 1.0.12

##### Patch Changes

- [`a7e0d50`](https://github.com/backstage/backstage/commit/a7e0d50): Updated `react-router-dom` peer dependency to `^6.30.2` and explicitly disabled v7 future flags to suppress deprecation warnings.

### `@techdocs/cli` (1.10.2 → [1.10.6](../changelogs/@techdocs/cli.md#1106))

#### 1.10.6

##### Patch Changes

- [`70fc178`](https://github.com/backstage/backstage/commit/70fc178): Migrated from deprecated `findPaths` to `targetPaths` and `findOwnPaths` from `@backstage/cli-common`.
- [`de62a9d`](https://github.com/backstage/backstage/commit/de62a9d): Upgraded `commander` dependency from `^12.0.0` to `^14.0.3` across all CLI packages.

#### 1.10.5

##### Patch Changes

- [`7455dae`](https://github.com/backstage/backstage/commit/7455dae): Use node prefix on native imports
- [`27798df`](https://github.com/backstage/backstage/commit/27798df): Migrate the Techdocs CLI embedded app to the New Frontend System (NFS)
- [`508d127`](https://github.com/backstage/backstage/commit/508d127): Updated dependency `find-process` to `^2.0.0`.

#### 1.10.3

##### Patch Changes

- [`43629b1`](https://github.com/backstage/backstage/commit/43629b1): Updated to use new utilities from `@backstage/cli-common`.
- [`2bae83a`](https://github.com/backstage/backstage/commit/2bae83a): Bumped dev dependencies `@types/node`

## Excluded dependency updates

- `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.5.9 → [0.5.12](../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#0512))
- `@backstage/plugin-catalog-backend-module-logs` (0.1.16 → [0.1.20](../changelogs/@backstage/plugin-catalog-backend-module-logs.md#0120))
- `@backstage/plugin-catalog-backend-module-unprocessed` (0.6.6 → [0.6.9](../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#069))
- `@backstage/plugin-catalog-common` (1.1.7 → [1.1.8](../changelogs/@backstage/plugin-catalog-common.md#118))
- `@backstage/plugin-events-backend-module-aws-sqs` (0.4.17 → [0.4.20](../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#0420))
- `@backstage/plugin-events-backend-module-azure` (0.2.26 → [0.2.29](../changelogs/@backstage/plugin-events-backend-module-azure.md#0229))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.26 → [0.2.29](../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0229))
- `@backstage/plugin-events-backend-module-bitbucket-server` (0.1.7 → [0.1.10](../changelogs/@backstage/plugin-events-backend-module-bitbucket-server.md#0110))
- `@backstage/plugin-events-backend-module-gerrit` (0.2.26 → [0.2.29](../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0229))
- `@backstage/plugin-events-backend-module-github` (0.4.6 → [0.4.10](../changelogs/@backstage/plugin-events-backend-module-github.md#0410))
- `@backstage/plugin-events-backend-module-gitlab` (0.3.7 → [0.3.10](../changelogs/@backstage/plugin-events-backend-module-gitlab.md#0310))
- `@backstage/plugin-events-backend-test-utils` (0.1.50 → [0.1.53](../changelogs/@backstage/plugin-events-backend-test-utils.md#0153))
- `@backstage/plugin-notifications-node` (0.2.21 → [0.2.24](../changelogs/@backstage/plugin-notifications-node.md#0224))
- `@backstage/plugin-permission-backend-module-allow-all-policy` (0.2.14 → [0.2.17](../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#0217))
- `@backstage/plugin-proxy-node` (0.1.10 → [0.1.13](../changelogs/@backstage/plugin-proxy-node.md#0113))
- `@backstage/plugin-scaffolder-backend-module-gcp` (0.2.15 → [0.2.19](../changelogs/@backstage/plugin-scaffolder-backend-module-gcp.md#0219))
- `@backstage/plugin-scaffolder-backend-module-notifications` (0.1.16 → [0.1.20](../changelogs/@backstage/plugin-scaffolder-backend-module-notifications.md#0120))
