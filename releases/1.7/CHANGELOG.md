# RHDH Release 1.7 changelog

Changes between Backstage 1.36.1 (RHDH 1.6) and Backstage 1.39.1 (RHDH 1.7) — 6 added, 0 removed, 166 upgraded, 13 unchanged packages.

## Summary

- [Newly added packages](#newly-added-packages): 6 packages
- [Breaking changes](#breaking-changes): 36 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 8 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 3 packages
- [0.x patch version bumps](#0x-patch-version-bumps): 63 packages
- [Other minor version bumps](#other-minor-version-bumps): 11 packages
- [Other patch version bumps](#other-patch-version-bumps): 13 packages
- [Excluded dependency updates](#excluded-dependency-updates): 32 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/frontend-dynamic-feature-loader` (new, 0.1.1)](#backstagefrontend-dynamic-feature-loader-new-011)
  - [`@backstage/plugin-catalog-backend-module-gitea` (new, 0.1.0)](#backstageplugin-catalog-backend-module-gitea-new-010)
  - [`@backstage/plugin-events-backend-module-bitbucket-server` (new, 0.1.1)](#backstageplugin-events-backend-module-bitbucket-server-new-011)
  - [`@backstage/plugin-events-backend-module-google-pubsub` (new, 0.1.0)](#backstageplugin-events-backend-module-google-pubsub-new-010)
  - [`@backstage/plugin-gateway-backend` (new, 1.0.1)](#backstageplugin-gateway-backend-new-101)
  - [`@backstage/plugin-notifications-backend-module-slack` (new, 0.1.1)](#backstageplugin-notifications-backend-module-slack-new-011)
- [Breaking changes](#breaking-changes)
  - [`@backstage/app-defaults` (1.5.17 → 1.6.2)](#backstageapp-defaults-1517--162)
  - [`@backstage/backend-defaults` (0.8.1 → 0.10.0)](#backstagebackend-defaults-081--0100)
  - [`@backstage/backend-dynamic-feature-service` (0.6.0 → 0.7.0)](#backstagebackend-dynamic-feature-service-060--070)
  - [`@backstage/canon` (0.1.0 → 0.4.0)](#backstagecanon-010--040)
  - [`@backstage/cli` (0.30.0 → 0.32.1)](#backstagecli-0300--0321)
  - [`@backstage/core-compat-api` (0.3.6 → 0.4.2)](#backstagecore-compat-api-036--042)
  - [`@backstage/create-app` (0.5.25 → 0.6.2)](#backstagecreate-app-0525--062)
  - [`@backstage/frontend-app-api` (0.10.5 → 0.11.2)](#backstagefrontend-app-api-0105--0112)
  - [`@backstage/frontend-defaults` (0.1.6 → 0.2.2)](#backstagefrontend-defaults-016--022)
  - [`@backstage/frontend-plugin-api` (0.9.5 → 0.10.2)](#backstagefrontend-plugin-api-095--0102)
  - [`@backstage/frontend-test-utils` (0.2.6 → 0.3.2)](#backstagefrontend-test-utils-026--032)
  - [`@backstage/plugin-app-backend` (0.4.5 → 0.5.2)](#backstageplugin-app-backend-045--052)
  - [`@backstage/plugin-auth-backend` (0.24.3 → 0.25.0)](#backstageplugin-auth-backend-0243--0250)
  - [`@backstage/plugin-bitbucket-cloud-common` (0.2.27 → 0.3.0)](#backstageplugin-bitbucket-cloud-common-0227--030)
  - [`@backstage/plugin-catalog` (1.27.0 → 1.30.0)](#backstageplugin-catalog-1270--1300)
  - [`@backstage/plugin-catalog-backend` (1.31.0 → 2.0.0)](#backstageplugin-catalog-backend-1310--200)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (0.2.7 → 0.3.2)](#backstageplugin-catalog-backend-module-gerrit-027--032)
  - [`@backstage/plugin-catalog-backend-module-github` (0.7.10 → 0.9.0)](#backstageplugin-catalog-backend-module-github-0710--090)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.6.3 → 0.7.0)](#backstageplugin-catalog-backend-module-incremental-ingestion-063--070)
  - [`@backstage/plugin-catalog-backend-module-unprocessed` (0.5.5 → 0.6.0)](#backstageplugin-catalog-backend-module-unprocessed-055--060)
  - [`@backstage/plugin-catalog-import` (0.12.10 → 0.13.0)](#backstageplugin-catalog-import-01210--0130)
  - [`@backstage/plugin-catalog-react` (1.15.2 → 1.18.0)](#backstageplugin-catalog-react-1152--1180)
  - [`@backstage/plugin-events-backend` (0.4.3 → 0.5.2)](#backstageplugin-events-backend-043--052)
  - [`@backstage/plugin-events-backend-module-github` (0.2.17 → 0.4.0)](#backstageplugin-events-backend-module-github-0217--040)
  - [`@backstage/plugin-events-backend-module-gitlab` (0.2.17 → 0.3.1)](#backstageplugin-events-backend-module-gitlab-0217--031)
  - [`@backstage/plugin-kubernetes-node` (0.2.3 → 0.3.0)](#backstageplugin-kubernetes-node-023--030)
  - [`@backstage/plugin-permission-backend` (0.5.54 → 0.7.0)](#backstageplugin-permission-backend-0554--070)
  - [`@backstage/plugin-permission-node` (0.8.8 → 0.10.0)](#backstageplugin-permission-node-088--0100)
  - [`@backstage/plugin-proxy-backend` (0.5.11 → 0.6.2)](#backstageplugin-proxy-backend-0511--062)
  - [`@backstage/plugin-scaffolder` (1.28.0 → 1.31.0)](#backstageplugin-scaffolder-1280--1310)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.6.0 → 0.7.1)](#backstageplugin-scaffolder-backend-module-github-060--071)
  - [`@backstage/plugin-search-backend` (1.8.2 → 2.0.2)](#backstageplugin-search-backend-182--202)
  - [`@backstage/plugin-search-backend-module-explore` (0.2.8 → 0.3.2)](#backstageplugin-search-backend-module-explore-028--032)
  - [`@backstage/plugin-search-backend-module-techdocs` (0.3.6 → 0.4.2)](#backstageplugin-search-backend-module-techdocs-036--042)
  - [`@backstage/plugin-techdocs-backend` (1.11.6 → 2.0.2)](#backstageplugin-techdocs-backend-1116--202)
  - [`@backstage/plugin-user-settings-backend` (0.2.30 → 0.3.2)](#backstageplugin-user-settings-backend-0230--032)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/core-components` (0.16.4 → 0.17.2)](#backstagecore-components-0164--0172)
  - [`@backstage/plugin-catalog-backend-module-backstage-openapi` (0.4.5 → 0.5.2)](#backstageplugin-catalog-backend-module-backstage-openapi-045--052)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.3.2 → 0.4.1)](#backstageplugin-catalog-backend-module-bitbucket-server-032--041)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.6.7 → 0.7.0)](#backstageplugin-catalog-backend-module-msgraph-067--070)
  - [`@backstage/plugin-permission-common` (0.8.4 → 0.9.0)](#backstageplugin-permission-common-084--090)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.8.0 → 0.9.1)](#backstageplugin-scaffolder-backend-module-gitlab-080--091)
  - [`@backstage/plugin-scaffolder-node` (0.7.0 → 0.8.2)](#backstageplugin-scaffolder-node-070--082)
  - [`@backstage/plugin-scaffolder-node-test-utils` (0.1.19 → 0.2.2)](#backstageplugin-scaffolder-node-test-utils-0119--022)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-kubernetes-cluster` (0.0.22 → 0.0.25)](#backstageplugin-kubernetes-cluster-0022--0025)
  - [`@backstage/plugin-signals` (0.0.16 → 0.0.19)](#backstageplugin-signals-0016--0019)
  - [`@backstage/release-manifests` (0.0.12 → 0.0.13)](#backstagerelease-manifests-0012--0013)
- [0.x patch version bumps](#0x-patch-version-bumps)
  - [`@backstage/integration-aws-node` (0.1.15 → 0.1.16)](#backstageintegration-aws-node-0115--0116)
  - [`@backstage/plugin-api-docs` (0.12.4 → 0.12.7)](#backstageplugin-api-docs-0124--0127)
  - [`@backstage/plugin-api-docs-module-protoc-gen-doc` (0.1.9 → 0.1.10)](#backstageplugin-api-docs-module-protoc-gen-doc-019--0110)
  - [`@backstage/plugin-app` (0.1.6 → 0.1.9)](#backstageplugin-app-016--019)
  - [`@backstage/plugin-app-visualizer` (0.1.16 → 0.1.19)](#backstageplugin-app-visualizer-0116--0119)
  - [`@backstage/plugin-auth-backend-module-atlassian-provider` (0.4.0 → 0.4.3)](#backstageplugin-auth-backend-module-atlassian-provider-040--043)
  - [`@backstage/plugin-auth-backend-module-aws-alb-provider` (0.4.0 → 0.4.3)](#backstageplugin-auth-backend-module-aws-alb-provider-040--043)
  - [`@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.2.5 → 0.2.8)](#backstageplugin-auth-backend-module-azure-easyauth-provider-025--028)
  - [`@backstage/plugin-auth-backend-module-bitbucket-provider` (0.3.0 → 0.3.3)](#backstageplugin-auth-backend-module-bitbucket-provider-030--033)
  - [`@backstage/plugin-auth-backend-module-bitbucket-server-provider` (0.2.0 → 0.2.3)](#backstageplugin-auth-backend-module-bitbucket-server-provider-020--023)
  - [`@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.4.0 → 0.4.3)](#backstageplugin-auth-backend-module-cloudflare-access-provider-040--043)
  - [`@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.4.0 → 0.4.3)](#backstageplugin-auth-backend-module-gcp-iap-provider-040--043)
  - [`@backstage/plugin-auth-backend-module-github-provider` (0.3.0 → 0.3.3)](#backstageplugin-auth-backend-module-github-provider-030--033)
  - [`@backstage/plugin-auth-backend-module-gitlab-provider` (0.3.0 → 0.3.3)](#backstageplugin-auth-backend-module-gitlab-provider-030--033)
  - [`@backstage/plugin-auth-backend-module-google-provider` (0.3.0 → 0.3.3)](#backstageplugin-auth-backend-module-google-provider-030--033)
  - [`@backstage/plugin-auth-backend-module-microsoft-provider` (0.3.0 → 0.3.3)](#backstageplugin-auth-backend-module-microsoft-provider-030--033)
  - [`@backstage/plugin-auth-backend-module-oauth2-provider` (0.4.0 → 0.4.3)](#backstageplugin-auth-backend-module-oauth2-provider-040--043)
  - [`@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.2.5 → 0.2.8)](#backstageplugin-auth-backend-module-oauth2-proxy-provider-025--028)
  - [`@backstage/plugin-auth-backend-module-oidc-provider` (0.4.0 → 0.4.3)](#backstageplugin-auth-backend-module-oidc-provider-040--043)
  - [`@backstage/plugin-auth-backend-module-okta-provider` (0.2.0 → 0.2.3)](#backstageplugin-auth-backend-module-okta-provider-020--023)
  - [`@backstage/plugin-auth-backend-module-onelogin-provider` (0.3.0 → 0.3.3)](#backstageplugin-auth-backend-module-onelogin-provider-030--033)
  - [`@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.5.0 → 0.5.3)](#backstageplugin-auth-backend-module-vmware-cloud-provider-050--053)
  - [`@backstage/plugin-auth-node` (0.6.0 → 0.6.3)](#backstageplugin-auth-node-060--063)
  - [`@backstage/plugin-auth-react` (0.1.12 → 0.1.15)](#backstageplugin-auth-react-0112--0115)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.4.8 → 0.4.11)](#backstageplugin-catalog-backend-module-aws-048--0411)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.3.2 → 0.3.5)](#backstageplugin-catalog-backend-module-azure-032--035)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.4.5 → 0.4.8)](#backstageplugin-catalog-backend-module-bitbucket-cloud-045--048)
  - [`@backstage/plugin-catalog-backend-module-github-org` (0.3.7 → 0.3.10)](#backstageplugin-catalog-backend-module-github-org-037--0310)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.6.3 → 0.6.6)](#backstageplugin-catalog-backend-module-gitlab-063--066)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.11.2 → 0.11.5)](#backstageplugin-catalog-backend-module-ldap-0112--0115)
  - [`@backstage/plugin-catalog-backend-module-logs` (0.1.7 → 0.1.10)](#backstageplugin-catalog-backend-module-logs-017--0110)
  - [`@backstage/plugin-catalog-graph` (0.4.16 → 0.4.19)](#backstageplugin-catalog-graph-0416--0419)
  - [`@backstage/plugin-catalog-unprocessed-entities` (0.2.14 → 0.2.17)](#backstageplugin-catalog-unprocessed-entities-0214--0217)
  - [`@backstage/plugin-config-schema` (0.1.65 → 0.1.68)](#backstageplugin-config-schema-0165--0168)
  - [`@backstage/plugin-devtools` (0.1.24 → 0.1.27)](#backstageplugin-devtools-0124--0127)
  - [`@backstage/plugin-events-node` (0.4.8 → 0.4.11)](#backstageplugin-events-node-048--0411)
  - [`@backstage/plugin-home` (0.8.5 → 0.8.8)](#backstageplugin-home-085--088)
  - [`@backstage/plugin-home-react` (0.1.23 → 0.1.26)](#backstageplugin-home-react-0123--0126)
  - [`@backstage/plugin-kubernetes` (0.12.4 → 0.12.7)](#backstageplugin-kubernetes-0124--0127)
  - [`@backstage/plugin-kubernetes-backend` (0.19.3 → 0.19.6)](#backstageplugin-kubernetes-backend-0193--0196)
  - [`@backstage/plugin-kubernetes-common` (0.9.3 → 0.9.5)](#backstageplugin-kubernetes-common-093--095)
  - [`@backstage/plugin-kubernetes-react` (0.5.4 → 0.5.7)](#backstageplugin-kubernetes-react-054--057)
  - [`@backstage/plugin-notifications` (0.5.2 → 0.5.5)](#backstageplugin-notifications-052--055)
  - [`@backstage/plugin-notifications-backend` (0.5.3 → 0.5.6)](#backstageplugin-notifications-backend-053--056)
  - [`@backstage/plugin-notifications-backend-module-email` (0.3.6 → 0.3.9)](#backstageplugin-notifications-backend-module-email-036--039)
  - [`@backstage/plugin-org` (0.6.36 → 0.6.39)](#backstageplugin-org-0636--0639)
  - [`@backstage/plugin-org-react` (0.1.35 → 0.1.38)](#backstageplugin-org-react-0135--0138)
  - [`@backstage/plugin-permission-react` (0.4.31 → 0.4.34)](#backstageplugin-permission-react-0431--0434)
  - [`@backstage/plugin-scaffolder-backend-module-azure` (0.2.6 → 0.2.9)](#backstageplugin-scaffolder-backend-module-azure-026--029)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket` (0.3.7 → 0.3.10)](#backstageplugin-scaffolder-backend-module-bitbucket-037--0310)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.2.6 → 0.2.9)](#backstageplugin-scaffolder-backend-module-bitbucket-cloud-026--029)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.6 → 0.2.9)](#backstageplugin-scaffolder-backend-module-bitbucket-server-026--029)
  - [`@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.6 → 0.3.9)](#backstageplugin-scaffolder-backend-module-confluence-to-markdown-036--039)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.7 → 0.3.10)](#backstageplugin-scaffolder-backend-module-cookiecutter-037--0310)
  - [`@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.6 → 0.2.9)](#backstageplugin-scaffolder-backend-module-gerrit-026--029)
  - [`@backstage/plugin-scaffolder-backend-module-gitea` (0.2.6 → 0.2.9)](#backstageplugin-scaffolder-backend-module-gitea-026--029)
  - [`@backstage/plugin-scaffolder-backend-module-notifications` (0.1.7 → 0.1.10)](#backstageplugin-scaffolder-backend-module-notifications-017--0110)
  - [`@backstage/plugin-scaffolder-backend-module-rails` (0.5.6 → 0.5.9)](#backstageplugin-scaffolder-backend-module-rails-056--059)
  - [`@backstage/plugin-scaffolder-backend-module-sentry` (0.2.6 → 0.2.9)](#backstageplugin-scaffolder-backend-module-sentry-026--029)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.41 → 0.5.44)](#backstageplugin-search-backend-module-pg-0541--0544)
  - [`@backstage/plugin-user-settings` (0.8.19 → 0.8.22)](#backstageplugin-user-settings-0819--0822)
  - [`@backstage/repo-tools` (0.13.0 → 0.13.4)](#backstagerepo-tools-0130--0134)
  - [`@backstage/theme` (0.6.4 → 0.6.6)](#backstagetheme-064--066)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/backend-plugin-api` (1.2.0 → 1.3.1)](#backstagebackend-plugin-api-120--131)
  - [`@backstage/backend-test-utils` (1.3.0 → 1.5.0)](#backstagebackend-test-utils-130--150)
  - [`@backstage/catalog-client` (1.9.1 → 1.10.0)](#backstagecatalog-client-191--1100)
  - [`@backstage/config-loader` (1.9.6 → 1.10.1)](#backstageconfig-loader-196--1101)
  - [`@backstage/core-app-api` (1.15.5 → 1.17.0)](#backstagecore-app-api-1155--1170)
  - [`@backstage/integration` (1.16.1 → 1.17.0)](#backstageintegration-1161--1170)
  - [`@backstage/plugin-catalog-node` (1.16.0 → 1.17.0)](#backstageplugin-catalog-node-1160--1170)
  - [`@backstage/plugin-scaffolder-backend` (1.30.0 → 1.33.0)](#backstageplugin-scaffolder-backend-1300--1330)
  - [`@backstage/plugin-scaffolder-react` (1.14.5 → 1.16.0)](#backstageplugin-scaffolder-react-1145--1160)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.6.5 → 1.7.2)](#backstageplugin-search-backend-module-elasticsearch-165--172)
  - [`@backstage/plugin-search-react` (1.8.6 → 1.9.0)](#backstageplugin-search-react-186--190)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-app-api` (1.2.0 → 1.2.3)](#backstagebackend-app-api-120--123)
  - [`@backstage/catalog-model` (1.7.3 → 1.7.4)](#backstagecatalog-model-173--174)
  - [`@backstage/core-plugin-api` (1.10.4 → 1.10.7)](#backstagecore-plugin-api-1104--1107)
  - [`@backstage/dev-utils` (1.1.7 → 1.1.10)](#backstagedev-utils-117--1110)
  - [`@backstage/integration-react` (1.2.4 → 1.2.7)](#backstageintegration-react-124--127)
  - [`@backstage/plugin-scaffolder-common` (1.5.9 → 1.5.11)](#backstageplugin-scaffolder-common-159--1511)
  - [`@backstage/plugin-search` (1.4.23 → 1.4.26)](#backstageplugin-search-1423--1426)
  - [`@backstage/plugin-techdocs` (1.12.3 → 1.12.6)](#backstageplugin-techdocs-1123--1126)
  - [`@backstage/plugin-techdocs-addons-test-utils` (1.0.45 → 1.0.48)](#backstageplugin-techdocs-addons-test-utils-1045--1048)
  - [`@backstage/plugin-techdocs-module-addons-contrib` (1.1.21 → 1.1.24)](#backstageplugin-techdocs-module-addons-contrib-1121--1124)
  - [`@backstage/plugin-techdocs-node` (1.13.0 → 1.13.3)](#backstageplugin-techdocs-node-1130--1133)
  - [`@backstage/plugin-techdocs-react` (1.2.14 → 1.2.17)](#backstageplugin-techdocs-react-1214--1217)
  - [`@backstage/test-utils` (1.7.5 → 1.7.8)](#backstagetest-utils-175--178)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/frontend-dynamic-feature-loader` (new, [0.1.1](../../changelogs/@backstage/frontend-dynamic-feature-loader.md#011))

#### 0.1.0

##### Minor Changes

- [`3bee3c3`](https://github.com/backstage/backstage/commit/3bee3c3): The new package `frontend-dynamic-features-loader` provides a frontend feature loader that dynamically
  loads frontend features based on the new frontend system and exposed as module federation remotes.
  This new frontend feature loader works hand-in-hand with a new server of frontend plugin module federation
  remotes, which is added as part of backend dynamic feature service in package `@backstage/backend-dynamic-feature-service`.

### `@backstage/plugin-catalog-backend-module-gitea` (new, [0.1.0](../../changelogs/@backstage/plugin-catalog-backend-module-gitea.md#010))

#### 0.1.0

##### Minor Changes

- [`e4dabc6`](https://github.com/backstage/backstage/commit/e4dabc6): add new gitea provider module

### `@backstage/plugin-events-backend-module-bitbucket-server` (new, [0.1.1](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-server.md#011))

#### 0.1.0

##### Minor Changes

- [`7b3ed9b`](https://github.com/backstage/backstage/commit/7b3ed9b): Added the ability for the plugin to receive events coming from Bitbucket Server push webhooks. It then performs a delta mutation on the catalog.

### `@backstage/plugin-events-backend-module-google-pubsub` (new, [0.1.0](../../changelogs/@backstage/plugin-events-backend-module-google-pubsub.md#010))

#### 0.1.0

##### Minor Changes

- [`af853ef`](https://github.com/backstage/backstage/commit/af853ef): Added a module that is able to transfer messages from Google Pub/Sub subscriptions into the Backstage events system.

### `@backstage/plugin-gateway-backend` (new, [1.0.1](../../changelogs/@backstage/plugin-gateway-backend.md#101))

#### 1.0.0

##### Major Changes

- [`6b5681c`](https://github.com/backstage/backstage/commit/6b5681c): Initial release of `@backstage/plugin-gateway-backend`

### `@backstage/plugin-notifications-backend-module-slack` (new, [0.1.1](../../changelogs/@backstage/plugin-notifications-backend-module-slack.md#011))

#### 0.1.1

##### Patch Changes

- [`4f10768`](https://github.com/backstage/backstage/commit/4f10768): Fix slack notification processor to handle a notification with an empty description
- [`f6480c7`](https://github.com/backstage/backstage/commit/f6480c7): Fix dataloader caching, and use the proper catalog service ref
- [`a1c5bbb`](https://github.com/backstage/backstage/commit/a1c5bbb): Added email-based Slack User ID lookup if `metadata.annotations.slack.com/bot-notify` is missing from user entity
- [`e099d0a`](https://github.com/backstage/backstage/commit/e099d0a): Notifications which mention user entity refs are now replaced with Slack compatible mentions.

  Example: `Welcome <@user:default/billy>!` -> `Welcome <@U123456890>!`

#### 0.1.0

##### Minor Changes

- [`552170d`](https://github.com/backstage/backstage/commit/552170d): Added a new Slack NotificationProcessor for use with the notifications plugin

## Breaking changes

### `@backstage/app-defaults` (1.5.17 → [1.6.2](../../changelogs/@backstage/app-defaults.md#162))

#### 1.6.1

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

#### 1.6.0

##### Minor Changes

- [`12f8e01`](https://github.com/backstage/backstage/commit/12f8e01): **BREAKING**: The default `DiscoveryApi` implementation has been switched to use `FrontendHostDiscovery`, which adds support for the `discovery.endpoints` configuration.

  This is marked as a breaking change because it will cause any existing `discovery.endpoints` configuration to be picked up and used, which may break existing setups.

  For example, consider the following configuration:

  ```yaml
  app:
    baseUrl: https://backstage.acme.org

  backend:
    baseUrl: https://backstage.internal.acme.org

  discovery:
    endpoints:
      - target: https://catalog.internal.acme.org/api/{{pluginId}}
        plugins: [catalog]
  ```

  This will now cause requests from the frontend towards the `catalog` plugin to be routed to `https://catalog.internal.acme.org/api/catalog`, but this might not be reachable from the frontend. To fix this, you should update the `discovery.endpoints` configuration to only override the internal URL of the plugin:

  ```yaml
  discovery:
    endpoints:
      - target:
          internal: https://catalog.internal.acme.org/api/{{pluginId}}
        plugins: [catalog]
  ```

### `@backstage/backend-defaults` (0.8.1 → [0.10.0](../../changelogs/@backstage/backend-defaults.md#0100))

#### 0.10.0

##### Minor Changes

- [`d385854`](https://github.com/backstage/backstage/commit/d385854): **BREAKING**: The `DefaultSchedulerService` constructor options now requires `RootLifecycleService`, `HttpRouterService`, and `PluginMetadataService` fields.

  The scheduler will register a REST API for listing and triggering tasks. Please see [the scheduler documentation](https://backstage.io/docs/backend-system/core-services/scheduler) for more details about this API.

##### Patch Changes

- [`1e06afd`](https://github.com/backstage/backstage/commit/1e06afd): `GithubUrlReader`'s search detects glob-patterns supported by `minimatch`, instead of just detecting
  `*` and `?` characters.

  For example, this allows to search for patterns like `{C,c}atalog-info.yaml`.

- [`acea1d4`](https://github.com/backstage/backstage/commit/acea1d4): update documentation
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos
- [`c6bc67d`](https://github.com/backstage/backstage/commit/c6bc67d): Added Valkey support alongside Redis in backend-defaults cache clients, using the new Keyv Valkey package. Also extended backend-test-utils to support Valkey in tests.
- [`36f77e9`](https://github.com/backstage/backstage/commit/36f77e9): Bug fix: Pass user provided token through to gitlab url resolvers
- [`0e7a640`](https://github.com/backstage/backstage/commit/0e7a640): The `GithubUrlReader` will now use the token from `options` when fetching repo details

#### 0.9.0

##### Minor Changes

- [`1daedce`](https://github.com/backstage/backstage/commit/1daedce): Remove Throttle of Bitbucket Server API calls
- [`01edf6e`](https://github.com/backstage/backstage/commit/01edf6e): Allow pass through of redis client and cluster options to Cache core service
- [`cf4eb13`](https://github.com/backstage/backstage/commit/cf4eb13): Added `actor` property to `BackstageUserPrincipal` containing the subject of the last service (if any) who performed authentication on behalf of the user.

##### Patch Changes

- [`7c6740e`](https://github.com/backstage/backstage/commit/7c6740e): Implemented SRV lookup support in the default `HostDiscovery`. You can now specify internal URLs on the form `http+srv://some-srv-name/api/{{pluginId}}` and they will be resolved in real time.
- [`939116c`](https://github.com/backstage/backstage/commit/939116c): Added an optional `backend.trustProxy` app config value, which sets the
  corresponding [Express.js `trust proxy`](https://expressjs.com/en/guide/behind-proxies.html) setting. This lets
  you easily configure proxy trust without making a custom `configure` callback
  for the `rootHttpRouter` service.

  If you already are using a custom `configure` callback, and if that also _does not_ call `applyDefaults()`, you may want to add the following to it:

  ```ts
  const trustProxy = config.getOptional('backend.trustProxy');
  if (trustProxy !== undefined) {
    app.set('trust proxy', trustProxy);
  }
  ```

- [`175528c`](https://github.com/backstage/backstage/commit/175528c): Adds `backend.auditor.severityLogLevelMappings` to map severity levels to log levels.

#### 0.8.2

##### Patch Changes

- [`e293b66`](https://github.com/backstage/backstage/commit/e293b66): The default auditor service implementation will now log low severity events with `debug` level instead of `info`.
- [`f422984`](https://github.com/backstage/backstage/commit/f422984): Remove unused dependencies
- [`ecb9bab`](https://github.com/backstage/backstage/commit/ecb9bab): Explicitly stringify extra logger fields with `JSON.stringify` to prevent `[object Object]` errors.
- [`12f8e01`](https://github.com/backstage/backstage/commit/12f8e01): The `discovery.endpoints` configuration no longer requires both `internal` and `external` target when using the object form, instead falling back to the default.
- [`89db8b8`](https://github.com/backstage/backstage/commit/89db8b8): `GerritUrlReader` is now able to `search` files matching a given pattern URL (using `minimatch` glob patterns).

  This allows the Gerrit Discovery to find all Backstage manifests inside a repository using the `**/catalog-info.yaml` pattern.

### `@backstage/backend-dynamic-feature-service` (0.6.0 → [0.7.0](../../changelogs/@backstage/backend-dynamic-feature-service.md#070))

#### 0.7.0

##### Minor Changes

- [`10f693c`](https://github.com/backstage/backstage/commit/10f693c): **BREAKING** Removed support for the legacy backend, please migrate to the new backend system

##### Patch Changes

- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Fixed various typos.
  `FrontendRemoteResolver`'s misspelled `getAdditionaRemoteInfo` has been deprecated. Use the correct spelling `getAdditionalRemoteInfo` instead.

#### 0.6.2

##### Patch Changes

- [`3bee3c3`](https://github.com/backstage/backstage/commit/3bee3c3): The new package `frontend-dynamic-features-loader` provides a frontend feature loader that dynamically
  loads frontend features based on the new frontend system and exposed as module federation remotes.
  This new frontend feature loader works hand-in-hand with a new server of frontend plugin module federation
  remotes, which is added as part of backend dynamic feature service in package `@backstage/backend-dynamic-feature-service`.

### `@backstage/canon` (0.1.0 → [0.4.0](../../changelogs/@backstage/canon.md#040))

#### 0.4.0

##### Minor Changes

- [`ea36f74`](https://github.com/backstage/backstage/commit/ea36f74): **Breaking Change** Icons on Button and IconButton now need to be imported and placed like this: <Button iconStart={<ChevronDownIcon />} />
- [`ccb1fc6`](https://github.com/backstage/backstage/commit/ccb1fc6): We are modifying the way we treat custom render using 'useRender()' under the hood from BaseUI.
- [`04a65c6`](https://github.com/backstage/backstage/commit/04a65c6): The icon prop in TextField now accept a ReactNode instead of an icon name. We also updated the icon sizes for each input sizes.

##### Patch Changes

- [`c8f32db`](https://github.com/backstage/backstage/commit/c8f32db): Use correct colour token for TextField clear button icon, prevent layout shift whenever it is hidden or shown and properly size focus area around it. Also stop leading icon shrinking when used together with clear button.
- [`e996368`](https://github.com/backstage/backstage/commit/e996368): Fix Canon missing dependencies
- [`720033c`](https://github.com/backstage/backstage/commit/720033c): For improved a11y, clicking a Select component label now focuses the Select trigger element, and the TextField component's label is now styled to indicate it's interactive.
- [`6189bfd`](https://github.com/backstage/backstage/commit/6189bfd): Added new icon and onClear props to the TextField to make it easier to accessorize inputs.
- [`9510105`](https://github.com/backstage/backstage/commit/9510105): Add new Tabs component to Canon
- [`97b25a1`](https://github.com/backstage/backstage/commit/97b25a1): Pin version of @base-ui-components/react.
- [`206ffbe`](https://github.com/backstage/backstage/commit/206ffbe): Fixed an issue with Canon's DataTable.Pagination component showing the wrong number for the "to" count.
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos
- [`4551fb7`](https://github.com/backstage/backstage/commit/4551fb7): Update Menu component in Canon to make the UI more condensed. We are also adding a new Combobox option for nested navigation.
- [`185d3a8`](https://github.com/backstage/backstage/commit/185d3a8): Use the Field component from Base UI within the TextField.
- [`1ea1db0`](https://github.com/backstage/backstage/commit/1ea1db0): Add new truncate prop to Text and Heading components in Canon.

#### 0.3.0

##### Minor Changes

- [`df4e292`](https://github.com/backstage/backstage/commit/df4e292): Improve class name structure using data attributes instead of class names.
- [`f038613`](https://github.com/backstage/backstage/commit/f038613): Updated TextField and Select component to work with React Hook Form.
- [`1b0cf40`](https://github.com/backstage/backstage/commit/1b0cf40): Add new Select component for Canon
- [`5074d61`](https://github.com/backstage/backstage/commit/5074d61): **BREAKING**: Added a new TextField component to replace the Field and Input component. After feedback, it became clear that we needed to build a more opinionated version to avoid any problem in the future.

##### Patch Changes

- [`6af7b16`](https://github.com/backstage/backstage/commit/6af7b16): Updated styles for the Menu component in Canon.
- [`bcbc593`](https://github.com/backstage/backstage/commit/bcbc593): Fix Checkbox styles on dark theme in Canon.
- [`e7efb7d`](https://github.com/backstage/backstage/commit/e7efb7d): Add new breakpoint helpers up(), down() and current breakpoint to help you use our breakpoints in your React components.
- [`f7cb538`](https://github.com/backstage/backstage/commit/f7cb538): Internal refactor and fixes to the prop extraction logic for layout components.
- [`35b36ec`](https://github.com/backstage/backstage/commit/35b36ec): Add new Collapsible component for Canon.
- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- [`513477f`](https://github.com/backstage/backstage/commit/513477f): Add global CSS reset for anchor tags.
- [`24f0e08`](https://github.com/backstage/backstage/commit/24f0e08): Improved Container styles, changing our max-width to 120rem and improving padding on smaller screens.
- [`851779d`](https://github.com/backstage/backstage/commit/851779d): Add new Avatar component to Canon.
- [`ec5ebd1`](https://github.com/backstage/backstage/commit/ec5ebd1): Add new TableCellProfile component for Table and DataTable in Canon.
- [`5e80f0b`](https://github.com/backstage/backstage/commit/5e80f0b): Fix types on the Icon component.
- [`0e654bf`](https://github.com/backstage/backstage/commit/0e654bf): Add new DataTable component and update Table component styles.
- [`7ae28ba`](https://github.com/backstage/backstage/commit/7ae28ba): Move styles to the root of the TextField component.
- [`4fe5b08`](https://github.com/backstage/backstage/commit/4fe5b08): We added a render prop to the Link component to make sure it can work with React Router.
- [`74d463c`](https://github.com/backstage/backstage/commit/74d463c): Fix Select styles on small sizes + with long option names in Canon.
- [`f25a5be`](https://github.com/backstage/backstage/commit/f25a5be): Added a new gray scale for Canon for both light and dark theme.
- [`5ee4fc2`](https://github.com/backstage/backstage/commit/5ee4fc2): Add support for column sizing in DataTable.
- [`05a5003`](https://github.com/backstage/backstage/commit/05a5003): Fix the Icon component when the name is not found to return null instead of an empty SVG.

#### 0.2.0

##### Minor Changes

- [`5a5db29`](https://github.com/backstage/backstage/commit/5a5db29): Fix CSS imports and move CSS outputs out of the dist folder.
- [`4557beb`](https://github.com/backstage/backstage/commit/4557beb): Added a new Tooltip component to Canon.
- [`1e4dfdb`](https://github.com/backstage/backstage/commit/1e4dfdb): We added a new IconButton component with fixed sizes showcasing a single icon.
- [`e8d12f9`](https://github.com/backstage/backstage/commit/e8d12f9): Added about 40 new icons to Canon.
- [`8689010`](https://github.com/backstage/backstage/commit/8689010): We are renaming CanonProvider to IconProvider to improve clarity on how to override icons.
- [`bf319b7`](https://github.com/backstage/backstage/commit/bf319b7): Added a new Menu component to Canon.
- [`cb7e99d`](https://github.com/backstage/backstage/commit/cb7e99d): Updating styles for Text and Link components as well as global surface tokens.
- [`bd8520d`](https://github.com/backstage/backstage/commit/bd8520d): Added a new ScrollArea component for Canon.

##### Patch Changes

- [`56850ca`](https://github.com/backstage/backstage/commit/56850ca): Fix Button types that was preventing the use of native attributes like onClick.
- [`89e8686`](https://github.com/backstage/backstage/commit/89e8686): To avoid conflicts with Backstage, we removed global styles and set font-family and font-weight for each components.
- [`05e9d41`](https://github.com/backstage/backstage/commit/05e9d41): Introducing Canon to Backstage. Canon styling system is based on pure CSS. We are adding our styles.css at the top of your Backstage instance.

### `@backstage/cli` (0.30.0 → [0.32.1](../../changelogs/@backstage/cli.md#0321))

#### 0.32.1

##### Patch Changes

- [`674def9`](https://github.com/backstage/backstage/commit/674def9): fix: enable `lazyCompilation` and `refreshOptions` for rspack
- [`d649df0`](https://github.com/backstage/backstage/commit/d649df0): Internal code cleanup
- [`c2cae47`](https://github.com/backstage/backstage/commit/c2cae47): Add missing modules to the Backstage CLI alpha entrypoint.
- [`3f45861`](https://github.com/backstage/backstage/commit/3f45861): Add a warning for React 17 deprecation that triggers when frontend packages and plugins start.
- [`9aaec54`](https://github.com/backstage/backstage/commit/9aaec54): Internal refactor of opaque type handling.
- [`9285385`](https://github.com/backstage/backstage/commit/9285385): Added `info` object to the context of the alpha CLI.
- [`6cc9507`](https://github.com/backstage/backstage/commit/6cc9507): Updated dependency `@octokit/request` to `^8.0.0`.
- [`5cd3c54`](https://github.com/backstage/backstage/commit/5cd3c54): Updated dependency `react-refresh` to `^0.17.0`.
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos
- [`19a4e7c`](https://github.com/backstage/backstage/commit/19a4e7c): Internal refactor to move things closer to home

#### 0.32.0

##### Minor Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes default React imports from template files, aligning with the requirements for the upcoming React 19 migration. Introduces a new ESLint rule to disallow `import React from 'react'` and `import * as React from 'react'`.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- [`65b584c`](https://github.com/backstage/backstage/commit/65b584c): Internal update to move the `new` and `create-github-app` to their own module.
- [`c7254ae`](https://github.com/backstage/backstage/commit/c7254ae): Internal update to move the `clean`, `pre/postpack` and `fix` commands into their own separate module.

##### Patch Changes

- [`4ea76f7`](https://github.com/backstage/backstage/commit/4ea76f7): Bump @module-federation/enhanced ^0.9.0 to fix GHSA-593f-38f6-jp5m
- [`87a5cb4`](https://github.com/backstage/backstage/commit/87a5cb4): Fixed an issue causing the `repo lint` command to fail when the `--max-warnings` option was used.
- [`6969f79`](https://github.com/backstage/backstage/commit/6969f79): Avoid trailing `/*` when automatically adding imports for package with multiple entry points.
- [`98b7131`](https://github.com/backstage/backstage/commit/98b7131): Update the `to do` plugin template to stop using the deprecated catalog alpha service reference.
  If you start seeing the `should create TODO item with catalog information` test failing, you have two options to fix this:
  Update the test to mock the legacy alpha catalog service, or migrate the `TODO` plugin backend to use the new catalog service reference.
  We recommend the second option, see [this](https://github.com/backstage/backstage/pull/29450/files/267115d0436009443ca68ac84e7dcc646c9c938d#diff-47e01aeb12dd55fab9e697f810be21a8d08d39c37df1b078f6d0894f9bad5a1b) pull request for an example of how to do the migration.
- [`d5c4fed`](https://github.com/backstage/backstage/commit/d5c4fed): make certificate strings optional for Dev environments
- [`d83f3f4`](https://github.com/backstage/backstage/commit/d83f3f4): Resolved a problem where the `start` command did not correctly handle multiple `--require` flags, ensuring all specified modules are now properly loaded.
- [`d2091c6`](https://github.com/backstage/backstage/commit/d2091c6): Added a new `repo start` command to replace the existing pattern of using `yarn dev` scripts. The `repo start` command runs the app and/or backend package in the repo by default, but will also fall back to running other individual frontend or backend packages or even plugin dev entry points if the can be uniquely selected.

  The goal of this change is to reduce the number of different necessary scripts and align on `yarn start` being the only command needed for local development, similar to how `repo test` handles testing in the repo. It also opens up for more powerful options, like the `--plugin <pluginId>` flag that runs the dev entry point of the selected plugin.

  The new script is installed as follows, replacing the existing `yarn start` script:

  ```json
  {
    "scripts": {
      "start": "backstage-cli repo start"
    }
  }
  ```

  In order to help users migrate in existing projects, it is recommended to add the following scripts to the root `package.json`:

  ```json
  {
    "scripts": {
      "dev": "echo \"Use 'yarn start' instead\"",
      "start-backend": "echo \"Use 'yarn start backend' instead\""
    }
  }
  ```

  For more information, run `yarn start --help` once the new command is installed.

- [`918c883`](https://github.com/backstage/backstage/commit/918c883): Included a reference to the JSX transform guide in the warning about using the default React import.

#### 0.31.0

##### Minor Changes

- [`5b70679`](https://github.com/backstage/backstage/commit/5b70679): **BREAKING**: ESLint warnings no longer trigger system exit codes like errors do.

  Set the max number of warnings to `-1` during linting to enable the gradual adoption of new ESLint rules. To restore the previous behavior, include the `--max-warnings 0` flag in the `backstage-cli <repo|package> lint` command.

##### Patch Changes

- [`0586d4c`](https://github.com/backstage/backstage/commit/0586d4c): Internal change to move the `migrate` and `version:*` commands into a new migrate module.
- [`e0b226b`](https://github.com/backstage/backstage/commit/e0b226b): build(deps): bump `esbuild` from 0.24.2 to 0.25.0
- [`4d45498`](https://github.com/backstage/backstage/commit/4d45498): Fixed the package prepack command so that it no longer produces unnecessary `index` entries in the `typesVersions` map, which could cause `/index` to be added when automatically adding imports.
- [`485b3ba`](https://github.com/backstage/backstage/commit/485b3ba): Internal update to move `test` commands to a separate module.
- [`a76c482`](https://github.com/backstage/backstage/commit/a76c482): Internal change to migrate `lint` to the new module system.
- [`8df78bf`](https://github.com/backstage/backstage/commit/8df78bf): Internal update to move build commands to a CLI module.
- [`d0fc357`](https://github.com/backstage/backstage/commit/d0fc357): Internal update to move `info` commands to a separate module.
- [`f8bd342`](https://github.com/backstage/backstage/commit/f8bd342): Fix a bug in the translation of the deprecated `--scope` option for the `new` command that could cause plugins to have `backstage-backstage-plugin` in their name.

### `@backstage/core-compat-api` (0.3.6 → [0.4.2](../../changelogs/@backstage/core-compat-api.md#042))

#### 0.4.2

##### Patch Changes

- [`173db8f`](https://github.com/backstage/backstage/commit/173db8f): Updates to use the new `plugin` property of `AppNodeSpec`.
- [`fb58f20`](https://github.com/backstage/backstage/commit/fb58f20): Internal update to use the new `pluginId` option of `createFrontendPlugin`.
- [`6eedf46`](https://github.com/backstage/backstage/commit/6eedf46): Updated dependency `@backstage-community/plugin-puppetdb` to `^0.6.0`.
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

#### 0.4.1

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

#### 0.4.0

##### Minor Changes

- [`8250ffe`](https://github.com/backstage/backstage/commit/8250ffe): **BREAKING**: Dropped support for the removed opaque `@backstage/ExtensionOverrides` and `@backstage/BackstagePlugin` types.

##### Patch Changes

- [`cbe6177`](https://github.com/backstage/backstage/commit/cbe6177): Improved route path normalization when converting existing route elements in `converLegacyApp`, for example handling trailing `/*` in paths.
- [`d34e0e5`](https://github.com/backstage/backstage/commit/d34e0e5): Added a new `convertLegacyAppOptions` helper that converts many of the options passed to `createApp` in the old frontend system to a module with app overrides for the new system. The supported options are `apis`, `icons`, `plugins`, `components`, and `themes`.

  For example, given the following options for the old `createApp`:

  ```ts
  import { createApp } from '@backstage/app-deafults';

  const app = createApp({
    apis,
    plugins,
    icons: {
      custom: MyIcon,
    },
    components: {
      SignInPage: MySignInPage,
    },
    themes: [myTheme],
  });
  ```

  They can be converted to the new system like this:

  ```ts
  import { createApp } from '@backstage/frontend-deafults';
  import { convertLegacyAppOptions } from '@backstage/core-compat-api';

  const app = createApp({
    features: [
      convertLegacyAppOptions({
        apis,
        plugins,
        icons: {
          custom: MyIcon,
        },
        components: {
          SignInPage: MySignInPage,
        },
        themes: [myTheme],
      }),
    ],
  });
  ```

- [`e7fab55`](https://github.com/backstage/backstage/commit/e7fab55): Added the `entityPage` option to `convertLegacyApp`, which you can read more about in the [app migration docs](https://backstage.io/docs/frontend-system/building-apps/migrating#entity-pages).
- [`18faf65`](https://github.com/backstage/backstage/commit/18faf65): The `convertLegacyApp` has received the following changes:

  - `null` routes will now be ignored.
  - Converted routes no longer need to belong to a plugin, falling back to a `converted-orphan-routes` plugin instead.
  - The generate layout override extension is now properly attached to the `app/root` extension.
  - Converted root elements are now automatically wrapped with `compatWrapper`.

### `@backstage/create-app` (0.5.25 → [0.6.2](../../changelogs/@backstage/create-app.md#062))

#### 0.6.2

##### Patch Changes

- [`8448948`](https://github.com/backstage/backstage/commit/8448948): Removed `lerna-debug.log*` pattern from `.gitignore` as Lerna was removed from the package in version `@backstage/create-app@0.5.19`.
- [`ce2cf32`](https://github.com/backstage/backstage/commit/ce2cf32): Bumped create-app version.
- [`125d096`](https://github.com/backstage/backstage/commit/125d096): Bumped create-app version.
- [`1c0cb7b`](https://github.com/backstage/backstage/commit/1c0cb7b): Bumped create-app version.

#### 0.6.1

##### Patch Changes

- [`5590536`](https://github.com/backstage/backstage/commit/5590536): Bumped create-app version.
- [`2fc663a`](https://github.com/backstage/backstage/commit/2fc663a): Bumped create-app version.
- [`edabbd6`](https://github.com/backstage/backstage/commit/edabbd6): Updated the root `package.json` in the template to use the new `backstage-cli repo start` command.

  The `yarn dev` command is now redundant and has been removed from the template. We recommend existing projects to add these or similar scripts to help redirect users:

  ```json
  {
    "scripts": {
      "dev": "echo \"Use 'yarn start' instead\"",
      "start-backend": "echo \"Use 'yarn start backend' instead\""
    }
  }
  ```

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- [`c761cf5`](https://github.com/backstage/backstage/commit/c761cf5): **BREAKING** The `publish:github` scaffolder action now defaults to initializing with a branch named "main" instead of "master" when creating new repositories.

  If you or your organization have relied on all new github repositories having a default branch name of "master" you **must** set the `defaultBranch: 'master'` in your existing templates that feature the `publish:github` scaffolder action.

  To keep using the name "master" for your new github repos, these are the **required** changes:

  ```diff
      - id: publish
        name: Publish
        action: publish:github
        input:
          allowedHosts: ['github.com']
          description: This is ${{ parameters.name }}
          repoUrl: ${{ parameters.repoUrl }}
  +       defaultBranch: 'master'
  ```

#### 0.6.0

##### Minor Changes

- [`31731b0`](https://github.com/backstage/backstage/commit/31731b0): Upgraded the TypeScript version in the template to `5.8`.

##### Patch Changes

- [`7d083ce`](https://github.com/backstage/backstage/commit/7d083ce): Canon is now ready to be used in Alpha. We are adding a custom CSS file at the root of the app to make all styles available for Canon components.
- [`aed536a`](https://github.com/backstage/backstage/commit/aed536a): Bumped create-app version.
- [`f9fb465`](https://github.com/backstage/backstage/commit/f9fb465): Bumped create-app version.
- [`19e5c3f`](https://github.com/backstage/backstage/commit/19e5c3f): Added link to multi-stage Dockerfile documentation as alternative option

### `@backstage/frontend-app-api` (0.10.5 → [0.11.2](../../changelogs/@backstage/frontend-app-api.md#0112))

#### 0.11.2

##### Patch Changes

- [`173db8f`](https://github.com/backstage/backstage/commit/173db8f): Updates to use the new `plugin` property of `AppNodeSpec`.
- [`1f04491`](https://github.com/backstage/backstage/commit/1f04491): Added the ability to ignore unknown extension config by passing `{ flags: { allowUnknownExtensionConfig: true } }` to `createSpecializedApp`.
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

#### 0.11.1

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

#### 0.11.0

##### Minor Changes

- [`abcdf44`](https://github.com/backstage/backstage/commit/abcdf44): **BREAKING**: The returned object from `createSpecializedApp` no longer contains a `createRoot()` method, and it instead now contains `apis` and `tree`.

  You can replace existing usage of `app.createRoot()` with the following:

  ```ts
  const root = tree.root.instance?.getData(coreExtensionData.reactElement);
  ```

- [`8250ffe`](https://github.com/backstage/backstage/commit/8250ffe): **BREAKING**: Dropped support for the removed opaque `@backstage/ExtensionOverrides` and `@backstage/BackstagePlugin` types.

##### Patch Changes

- [`4d18b55`](https://github.com/backstage/backstage/commit/4d18b55): It's now possible to provide a middleware that wraps all extension factories by passing an `extensionFactoryMiddleware` to either `createApp()` or `createSpecializedApp()`.
- [`4823831`](https://github.com/backstage/backstage/commit/4823831): Introduced a `createFrontendFeatureLoader()` function, as well as a `FrontendFeatureLoader` interface, to gather several frontend plugins, modules or feature loaders in a single exported entrypoint and load them, possibly asynchronously. This new feature, very similar to the `createBackendFeatureLoader()` already available on the backend, supersedes the previous `CreateAppFeatureLoader` type which has been deprecated.

### `@backstage/frontend-defaults` (0.1.6 → [0.2.2](../../changelogs/@backstage/frontend-defaults.md#022))

#### 0.2.1

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- [`3bee3c3`](https://github.com/backstage/backstage/commit/3bee3c3): The new package `frontend-dynamic-features-loader` provides a frontend feature loader that dynamically
  loads frontend features based on the new frontend system and exposed as module federation remotes.
  This new frontend feature loader works hand-in-hand with a new server of frontend plugin module federation
  remotes, which is added as part of backend dynamic feature service in package `@backstage/backend-dynamic-feature-service`.

#### 0.2.0

##### Minor Changes

- [`4823831`](https://github.com/backstage/backstage/commit/4823831): Introduced a `createFrontendFeatureLoader()` function, as well as a `FrontendFeatureLoader` interface, to gather several frontend plugins, modules or feature loaders in a single exported entrypoint and load them, possibly asynchronously. This new feature, very similar to the `createBackendFeatureLoader()` already available on the backend, supersedes the previous `CreateAppFeatureLoader` type which has been deprecated.
- [`8250ffe`](https://github.com/backstage/backstage/commit/8250ffe): **BREAKING**: Dropped support for the removed opaque `@backstage/ExtensionOverrides` and `@backstage/BackstagePlugin` types.

##### Patch Changes

- [`4d18b55`](https://github.com/backstage/backstage/commit/4d18b55): It's now possible to provide a middleware that wraps all extension factories by passing an `extensionFactoryMiddleware` to either `createApp()` or `createSpecializedApp()`.
- [`abcdf44`](https://github.com/backstage/backstage/commit/abcdf44): Internal refactor to match updated `createSpecializedApp`.
- [`e3f19db`](https://github.com/backstage/backstage/commit/e3f19db): Feature discovery and resolution logic used in `createApp` is now exposed via the `discoverAvailableFeatures` and `resolveAsyncFeatures` functions respectively.

### `@backstage/frontend-plugin-api` (0.9.5 → [0.10.2](../../changelogs/@backstage/frontend-plugin-api.md#0102))

#### 0.10.2

##### Patch Changes

- [`173db8f`](https://github.com/backstage/backstage/commit/173db8f): The `source` property of `AppNodeSpec` has been renamed to `plugin`. The old property has been deprecated and will be removed in a future release.
- [`fb58f20`](https://github.com/backstage/backstage/commit/fb58f20): The `id` option of `createFrontendPlugin` has been renamed to `pluginId` in order to better align with similar APIs in the frontend and backend systems.

  The old `id` option is deprecated and will be removed in a future release.

- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

#### 0.10.1

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

#### 0.10.0

##### Minor Changes

- [`4823831`](https://github.com/backstage/backstage/commit/4823831): Introduced a `createFrontendFeatureLoader()` function, as well as a `FrontendFeatureLoader` interface, to gather several frontend plugins, modules or feature loaders in a single exported entrypoint and load them, possibly asynchronously. This new feature, very similar to the `createBackendFeatureLoader()` already available on the backend, supersedes the previous `CreateAppFeatureLoader` type which has been deprecated.
- [`8250ffe`](https://github.com/backstage/backstage/commit/8250ffe): **BREAKING**: Removed the deprecated `ExtensionOverrides` and `FrontendFeature` types.
- [`0d1a397`](https://github.com/backstage/backstage/commit/0d1a397): **BREAKING**: Removed deprecated variant of `createExtensionDataRef` where the ID is passed directly.

##### Patch Changes

- [`5aa7f2c`](https://github.com/backstage/backstage/commit/5aa7f2c): Added a new Utility API, `DialogApi`, which can be used to show dialogs in the React tree that can collect input from the user.
- [`e23f5e0`](https://github.com/backstage/backstage/commit/e23f5e0): Added new `ExtensionMiddlewareFactory` type.
- [`a6cb67d`](https://github.com/backstage/backstage/commit/a6cb67d): The extensions map for plugins created with `createFrontendPlugin` is now sorted alphabetically by ID in the TypeScript type.
- [`de72253`](https://github.com/backstage/backstage/commit/de72253): Added a new `ExtensionBoundary.lazyComponent` helper in addition to the existing `ExtensionBoundary.lazy` helper.

### `@backstage/frontend-test-utils` (0.2.6 → [0.3.2](../../changelogs/@backstage/frontend-test-utils.md#032))

#### 0.3.2

##### Patch Changes

- [`fb58f20`](https://github.com/backstage/backstage/commit/fb58f20): Internal update to use the new `pluginId` option of `createFrontendPlugin`.

#### 0.3.1

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

#### 0.3.0

##### Minor Changes

- [`bba525b`](https://github.com/backstage/backstage/commit/bba525b): **BREAKING**: Removed deprecated `setupRequestMockHandlers` which was replaced by `registerMswTestHooks`.

##### Patch Changes

- [`f861bfc`](https://github.com/backstage/backstage/commit/f861bfc): Added a `initialRouteEntries` option to `renderInTestApp`.
- [`f861bfc`](https://github.com/backstage/backstage/commit/f861bfc): The `renderInTestApp` helper now provides a default mock config with mock values for both `app.baseUrl` and `backend.baseUrl`.
- [`abcdf44`](https://github.com/backstage/backstage/commit/abcdf44): Internal refactor to match updated `createSpecializedApp`.

### `@backstage/plugin-app-backend` (0.4.5 → [0.5.2](../../changelogs/@backstage/plugin-app-backend.md#052))

#### 0.5.0

##### Minor Changes

- [`32be48c`](https://github.com/backstage/backstage/commit/32be48c): **BREAKING**: Removed support for the old backend system.

  As part of this change the plugin export from `/alpha` as been removed. If you are currently importing `@backstage/plugin-app-backend/alpha`, please update your import to `@backstage/plugin-app-backend`.

### `@backstage/plugin-auth-backend` (0.24.3 → [0.25.0](../../changelogs/@backstage/plugin-auth-backend.md#0250))

#### 0.25.0

##### Minor Changes

- [`57221d9`](https://github.com/backstage/backstage/commit/57221d9): **BREAKING**: Removed support for the old backend system, and removed all deprecated exports.

  If you were using one of the deprecated imports from this package, you will have to follow the instructions in their respective deprecation notices before upgrading. Most of the general utilities are available from `@backstage/plugin-auth-node`, and the specific auth providers are available from dedicated packages such as for example `@backstage/plugin-auth-backend-module-github-provider`. See [the auth docs](https://backstage.io/docs/auth/) for specific instructions.

##### Patch Changes

- [`0d606ac`](https://github.com/backstage/backstage/commit/0d606ac): Added the configuration flag `auth.omitIdentityTokenOwnershipClaim` that causes issued user tokens to no longer contain the `ent` claim that represents the ownership references of the user.

  The benefit of this new flag is that issued user tokens will be much smaller in
  size, but they will no longer be self-contained. This means that any consumers
  of the token that require access to the ownership claims now need to call the
  `/api/auth/v1/userinfo` endpoint instead. Within the Backstage ecosystem this is
  done automatically, as clients will still receive the full set of claims during
  authentication, while plugin backends will need to use the `UserInfoService`
  which already calls the user info endpoint if necessary.

  When enabling this flag, it is important that any custom sign-in resolvers directly return the result of the sign-in method. For example, the following would not work:

  ```ts
  const { token } = await ctx.issueToken({
    claims: { sub: entityRef, ent: [entityRef] },
  });
  return { token }; // WARNING: This will not work with the flag enabled
  ```

  Instead, the sign-in resolver should directly return the result:

  ```ts
  return ctx.issueToken({
    claims: { sub: entityRef, ent: [entityRef] },
  });
  ```

- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos
- [`ab53e6f`](https://github.com/backstage/backstage/commit/ab53e6f): Added support for the new `dangerousEntityRefFallback` option for `signInWithCatalogUser` in `AuthResolverContext`.
- [`b128ed9`](https://github.com/backstage/backstage/commit/b128ed9): The `static` key store now issues tokens with the same structure as other key stores. Tokens now include the `typ` field in the header and the `uip` (user identity proof) in the payload.

#### 0.24.5

##### Patch Changes

- [`25d05f9`](https://github.com/backstage/backstage/commit/25d05f9): Slight update to the config schema

#### 0.24.4

##### Patch Changes

- [`7956beb`](https://github.com/backstage/backstage/commit/7956beb): Marked the remaining exports related to `createRouter` and the old backend system as deprecated.

  For more information about migrating to the new backend system, see the [migration guide](https://backstage.io/docs/backend-system/building-backends/migrating#the-auth-plugin).

  Support for the old backend system will be removed in the next release of this plugin.

- [`b6702ea`](https://github.com/backstage/backstage/commit/b6702ea): Deprecated `getDefaultOwnershipEntityRefs` in favor of the new `.resolveOwnershipEntityRefs(...)` method in the `AuthResolverContext`.

  The following code in a custom sign-in resolver:

  ```ts
  import { getDefaultOwnershipEntityRefs } from '@backstage/plugin-auth-backend';

  // ...

  const ent = getDefaultOwnershipEntityRefs(entity);
  ```

  Can be replaced with the following:

  ```ts
  const { ownershipEntityRefs: ent } = await ctx.resolveOwnershipEntityRefs(
    entity,
  );
  ```

### `@backstage/plugin-bitbucket-cloud-common` (0.2.27 → [0.3.0](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#030))

#### 0.3.0

##### Minor Changes

- [`5850717`](https://github.com/backstage/backstage/commit/5850717): Update Bitbucket Cloud schema and models.

  The latest schema was fetched from Bitbucket Cloud and stored locally.
  Based on the updated schema, the models got regenerated.

  **BREAKING:**

  Due to the schema changes, the model update includes one breaking change:

  - `Account.username` was removed.

  Additionally, there were a couple of compatible changes including the addition of
  `BaseCommit.committer` and others.

##### Patch Changes

- [`57ad208`](https://github.com/backstage/backstage/commit/57ad208): Add support for `repo:updated` events as `Events.RepoUpdatedEvent`.

### `@backstage/plugin-catalog` (1.27.0 → [1.30.0](../../changelogs/@backstage/plugin-catalog.md#1300))

#### 1.30.0

##### Minor Changes

- [`970cb48`](https://github.com/backstage/backstage/commit/970cb48): Show the pagination text for the offset-paginated catalog table, and remove the pagination bar from the top of the `CatalogTable` when pagination is enabled.

##### Patch Changes

- [`fb58f20`](https://github.com/backstage/backstage/commit/fb58f20): Internal update to use the new `pluginId` option of `createFrontendPlugin`.
- [`2ddbc50`](https://github.com/backstage/backstage/commit/2ddbc50): A new `filter` parameter has been added to `EntityContextMenuItemBlueprint` to make it easier to configure which entities a menu item should appear for. The `filter` parameter is a function which accepts an entity and returns a boolean.
- [`bf85d37`](https://github.com/backstage/backstage/commit/bf85d37): Fix for missing `routeRef` when using `core-plugin-api` in a dialog context

#### 1.29.0

##### Minor Changes

- [`9454ef9`](https://github.com/backstage/backstage/commit/9454ef9): Added support of filtering based on system columns in catalog table
- [`61d350f`](https://github.com/backstage/backstage/commit/61d350f): **BREAKING ALPHA**: `CatalogFilterBlueprint`, used in the new frontend system, is now exported under plugin-catalog-react instead of plugin-catalog.

  ```diff
  + import { CatalogFilterBlueprint } from '@backstage/plugin-catalog-react/alpha';
  - import { CatalogFilterBlueprint } from '@backstage/plugin-catalog/alpha';
  ```

- [`09afd67`](https://github.com/backstage/backstage/commit/09afd67): Adds `EntityContextMenuItemBlueprint` to enable extending the entity page's context menu with user defined items.

  For example:

  ```ts
  import { EntityContextMenuItemBlueprint } from '@backstage/plugin-catalog-react/alpha';

  const myCustomHref = EntityContextMenuItemBlueprint.make({
    name: 'test-href',
    params: {
      icon: <span>Example Icon</span>,
      useProps: () => ({
        title: 'Example Href',
        href: '/example-path',
        disabled: false,
        component: 'a',
      }),
    },
  });

  const myCustomOnClick = EntityContextMenuItemBlueprint.make({
    name: 'test-click',
    params: {
      icon: <span>Test Icon</span>,
      useProps: () => ({
        title: 'Example onClick',
        onClick: () => window.alert('Hello world!'),
        disabled: false,
      }),
    },
  });
  ```

##### Patch Changes

- [`3f7e4f1`](https://github.com/backstage/backstage/commit/3f7e4f1): Fixed the layout of summary cards in the new frontend system, ensuring that the horizontal scroll grid doesn't grow too large as well as tweaked its scrolling parameters.
- [`e655f62`](https://github.com/backstage/backstage/commit/e655f62): Updated `README.md` to use `yarn start` instead of `yarn dev`.
- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- [`3f7e4f1`](https://github.com/backstage/backstage/commit/3f7e4f1): The about, links, and labels card now all have the `info` card type by default in the new frontend system.
- [`3f7e4f1`](https://github.com/backstage/backstage/commit/3f7e4f1): The overview content is now part of the overview group by default in the new frontend system.

#### 1.28.0

##### Minor Changes

- [`247a40b`](https://github.com/backstage/backstage/commit/247a40b): Now a custom entity page header can be passed as input to the default entity page.
- [`a3d93ca`](https://github.com/backstage/backstage/commit/a3d93ca): The default layout of the entity page can now optionally be customized with 3 card types: info, peek and full.

  - Cards of type `info` are rendered in a fixed area on the right;
  - Cards of type `peek` are rendered on top of the main content area;
  - Cards of type `full` and cards with undefined type are rendered as they were before, in the main content area, below the peek cards.

  If you want to keep the layout as it was before, you don't need to do anything. But if you want to experiment with the card types and see how they render, here is an example setting the about card to be rendered as an `info` card:

  ```diff
  app:
    extensions:
      # Entity page cards
  +   - entity-card:catalog/about:
  +       config:
  +         type: info # or peek or full
  ```

- [`93533bd`](https://github.com/backstage/backstage/commit/93533bd): The order in which group tabs appear on the entity page has been changed.

  ### Before

  Previously, entity contents determined the order in which groups were rendered, so a group was rendered as soon as its first entity content was detected.

  ### After

  Groups are now rendered first by default based on their order in the `app-config.yaml` file:

  ```diff
  app:
    extensions:
      - page:catalog/entity:
  +       config:
  +         groups:
  +           # this will be the first tab of the default entity page
  +           - deployment:
  +               title: Deployment
  +           # this will be the second tab of the default entiy page
  +           - documentation:
  +               title: Documentation
  ```

  If you wish to place a normal tab before a group, you must add the tab to a group and place the group in the order you wish it to appear on the entity page (groups that contains only one tab are rendered as normal tabs).

  ```diff
  app:
    extensions:
      - page:catalog/entity:
          config:
            groups:
  +            # Example placing the overview tab first
  +           - overview:
  +               title: Overview
              - deployment:
                  title: Deployment
              # this will be the second tab of the default entiy page
              - documentation:
                  title: Documentation
      - entity-content:catalog/overview:
  +       config:
  +          group: 'overview'
  ```

- [`06d1226`](https://github.com/backstage/backstage/commit/06d1226): Allow providing `kind` parameters to replace the default `Component` kind for `SubComponents` card

##### Patch Changes

- [`31731b0`](https://github.com/backstage/backstage/commit/31731b0): Internal refactor to avoid `expiry-map` dependency.
- [`ba9649a`](https://github.com/backstage/backstage/commit/ba9649a): Update the default entity page extension component to support grouping multiple entity content items in the same tab.

  Disable all default groups:

  ```diff
  # app-config.yaml
  app:
    extensions:
      # Pages
  +   - page:catalog/entity:
  +       config:
  +         groups: []
  ```

  Create a custom list of :

  ```diff
  # app-config.yaml
  app:
    extensions:
      # Pages
  +   - page:catalog/entity:
  +       config:
  +         groups:
  +           # This array of groups completely replaces the default groups
  +           - custom:
  +               title: 'Custom'
  ```

### `@backstage/plugin-catalog-backend` (1.31.0 → [2.0.0](../../changelogs/@backstage/plugin-catalog-backend.md#200))

#### 2.0.0

##### Major Changes

- [`90ab044`](https://github.com/backstage/backstage/commit/90ab044): **BREAKING**: Removed all deprecated exports, and removed support for the old backend system.

  It also removes the `CodeOwnersProcessor` from the default set of processors, because it is expensive to run and has vague semantics. You need to update your backend to add it to the `catalogProcessingExtensionPoint` if you wish to continue using it.

  The following removed exports are available from `@backstage/plugin-catalog-node`:

  - `locationSpecToMetadataName`
  - `locationSpecToLocationEntity`
  - `processingResult`
  - `EntitiesSearchFilter`
  - `EntityFilter`
  - `DeferredEntity`
  - `EntityRelationSpec`
  - `CatalogProcessor`
  - `CatalogProcessorParser`
  - `CatalogProcessorCache`
  - `CatalogProcessorEmit`
  - `CatalogProcessorLocationResult`
  - `CatalogProcessorEntityResult`
  - `CatalogProcessorRelationResult`
  - `CatalogProcessorErrorResult`
  - `CatalogProcessorRefreshKeysResult`
  - `CatalogProcessorResult`
  - `EntityProvider`
  - `EntityProviderConnection`
  - `EntityProviderMutation`
  - `AnalyzeOptions`
  - `LocationAnalyzer`
  - `ScmLocationAnalyzer`
  - `PlaceholderResolver`
  - `PlaceholderResolverParams`
  - `PlaceholderResolverRead`
  - `PlaceholderResolverResolveUrl`
  - `parseEntityYaml`

  The following removed exports are available from `@backstage/plugin-catalog-common`:

  - `LocationSpec`
  - `AnalyzeLocationRequest`
  - `AnalyzeLocationResponse`
  - `AnalyzeLocationExistingEntity`
  - `AnalyzeLocationGenerateEntity`
  - `AnalyzeLocationEntityField`

  The following removed exports are instead implemented in the new backend system by `@backstage/plugin-search-backend-module-catalog`:

  - `defaultCatalogCollatorEntityTransformer`
  - `CatalogCollatorEntityTransformer`
  - `DefaultCatalogCollator`

  The following exports are removed without a direct replacement:

  - `DefaultCatalogCollatorFactory`
  - `DefaultCatalogCollatorFactoryOptions`
  - `LocationEntityProcessor`
  - `LocationEntityProcessorOptions`
  - `CatalogBuilder`
  - `CatalogEnvironment`
  - `CatalogPermissionRuleInput`
  - `CatalogProcessingEngine`
  - `createRandomProcessingInterval`
  - `ProcessingIntervalFunction`

##### Minor Changes

- [`6c9b88e`](https://github.com/backstage/backstage/commit/6c9b88e): **BREAKING ALPHA**: You can no longer import the catalog plugin from the `/alpha` export; please use the regular root default export instead.
- [`d88b922`](https://github.com/backstage/backstage/commit/d88b922): Adds the ability to disable the default entity processors using a new boolean app config item `catalog.disableDefaultProcessors`.

##### Patch Changes

- [`0e710fc`](https://github.com/backstage/backstage/commit/0e710fc): This patch addresses an issue identified in Backstage when configured with a MySQL database. If an entity of type location
  (e..all.yaml) has more than 70 referenced entities, clicking "Refresh" does not update the referenced entities as expected. This occurs because the TEXT type in MySQL has a limit of 65,535 bytes, which is insufficient to store all the referenced entities, causing the refresh operation to fail.
- [`8e0f15f`](https://github.com/backstage/backstage/commit/8e0f15f): "Added a note clarifying that `entity-fetch` audit events are not visible by default in the logs and are only displayed when the log severity level is adjusted."

#### 1.32.1

##### Patch Changes

- [`7cc4995`](https://github.com/backstage/backstage/commit/7cc4995): Fix for duplicate results in `queryEntities` when providing an `orderField` parameter

#### 1.32.0

##### Minor Changes

- [`ca9c51b`](https://github.com/backstage/backstage/commit/ca9c51b): Added opt-in ability to evict entities from the catalog whose provider is no longer configured. See [Catalog configuration documentation](https://backstage.io/docs/features/software-catalog/configuration#clean-up-entities-from-orphaned-entity-providers)

##### Patch Changes

- [`4306303`](https://github.com/backstage/backstage/commit/4306303): Added a fix in `@backstage/plugin-catalog-backend` to prevent duplicate path keys in entity search if only casing is different.
- [`5243aa4`](https://github.com/backstage/backstage/commit/5243aa4): Fixed an issue occurred when authorizing permissions using custom rules passed via the `PermissionsRegistryService`.
- [`fbc1666`](https://github.com/backstage/backstage/commit/fbc1666): Correctly use the `catalog.useUrlReadersSearch` config.
- [`75cadc1`](https://github.com/backstage/backstage/commit/75cadc1): Minor internal tweak to `refreshByRefreshKeys`

### `@backstage/plugin-catalog-backend-module-gerrit` (0.2.7 → [0.3.2](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#032))

#### 0.3.0

##### Minor Changes

- [`89db8b8`](https://github.com/backstage/backstage/commit/89db8b8): **BREAKING** The optional `branch` configuration parameter now defaults to the default branch of the project (where `HEAD` points to).
  This parameter was previously using `master` as the default value. In most cases this change should be transparent as Gerrit defaults to using `master`.

  This change also allow to specify a custom `catalogPath` in the `catalog.providers.gerrit` configuration.
  If not set, it defaults to `catalog-info.yaml` files at the root of repositories. This default was the value before this change.

  With the changes made in the `GerritUrlReader`, `catalogPath` allows to use `minimatch`'s glob-patterns.

  ```diff
  catalog:
    providers:
      gerrit:
        all: # identifies your dataset / provider independent of config changes
          host: gerrit.company.com
          query: 'state=ACTIVE&type=CODE'
  +       # This will search for catalog manifests anywhere in the repositories
  +       catalogPath: '**/catalog-info.{yml,yaml}'
  ```

### `@backstage/plugin-catalog-backend-module-github` (0.7.10 → [0.9.0](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#090))

#### 0.9.0

##### Minor Changes

- [`ff335e5`](https://github.com/backstage/backstage/commit/ff335e5): **BREAKING** The `GithubLocationAnalyzer` now requires the `AuthService` and the `CatalogService` when being constructed and the `TokenManger` has been removed.

##### Patch Changes

- [`ee9f59f`](https://github.com/backstage/backstage/commit/ee9f59f): Added filter to include archived repositories

#### 0.8.0

##### Minor Changes

- [`f0c22eb`](https://github.com/backstage/backstage/commit/f0c22eb): **BREAKING**: Explicitly rejects branch names containing a slash character.

  The module now rejects any configuration that contains slashes in branch names. The reason for this is that the ingestion will run into downstream problems if they were let through. If you had configuration with a slash in the branch name in `filters.branch`, your application may fail to start up.

  If you are affected by this, please move over to using branches that do not have slashes in them.

##### Patch Changes

- [`16648ef`](https://github.com/backstage/backstage/commit/16648ef): Added `validateLocationsExist` to the config definition where it was missing.

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.6.3 → [0.7.0](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#070))

#### 0.7.0

##### Minor Changes

- [`10f693c`](https://github.com/backstage/backstage/commit/10f693c): **BREAKING** Removed support for the legacy backend, please [migrate to the new backend system](https://github.com/backstage/backstage/tree/v1.38.0/plugins/catalog-backend-module-incremental-ingestion#installation). Also, if you were importing from the `/alpha` export of this package, you should remove the `/alpha` part.

#### 0.6.5

##### Patch Changes

- [`27d1031`](https://github.com/backstage/backstage/commit/27d1031): fixed misleading example location annotations in docs

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.5.5 → [0.6.0](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#060))

#### 0.6.0

##### Minor Changes

- [`f453d5c`](https://github.com/backstage/backstage/commit/f453d5c): **BREAKING** Removed support for the legacy backend and removed references to `@backstage/backend-common`, please [migrate to the new backend system](https://backstage.io/docs/backend-system/building-plugins-and-modules/migrating)

### `@backstage/plugin-catalog-import` (0.12.10 → [0.13.0](../../changelogs/@backstage/plugin-catalog-import.md#0130))

#### 0.13.0

##### Minor Changes

- [`e2fd549`](https://github.com/backstage/backstage/commit/e2fd549): **BREAKING**: `generateStepper` and `defaultGenerateStepper` now require a translation argument to be passed through for supporting translations.

##### Patch Changes

- [`fb58f20`](https://github.com/backstage/backstage/commit/fb58f20): Internal update to use the new `pluginId` option of `createFrontendPlugin`.
- [`66a1140`](https://github.com/backstage/backstage/commit/66a1140): Add i18n support for `catalog-import` plugin.

#### 0.12.13

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- [`5b9514f`](https://github.com/backstage/backstage/commit/5b9514f): Expose the `UnpackNestedValue` type as it's been removed from `react-hook-form`
- [`f1d9a64`](https://github.com/backstage/backstage/commit/f1d9a64): adding translation for `Register an existing component` text

### `@backstage/plugin-catalog-react` (1.15.2 → [1.18.0](../../changelogs/@backstage/plugin-catalog-react.md#1180))

#### 1.18.0

##### Minor Changes

- [`d47aaa3`](https://github.com/backstage/backstage/commit/d47aaa3): Added EntityOrderFilter to sort entities by different fields/columns. This new filter allows users to specify the order in which entities are displayed in the catalog.

  Example usage:

  ```ts
  import {
    EntityOrderFilter,
    useEntityList,
  } from '@backstage/plugin-catalog-react';
  // ...
  const { updateFilters } = useEntityList();

  // ...
  updateFilters({
    order: new EntityOrderFilter([
      {
        field: 'metadata.name',
        order: 'desc',
      },
    ]),
  });
  ```

- [`1a003ff`](https://github.com/backstage/backstage/commit/1a003ff): Add `getLocations` method to `CatalogApi` and `CatalogClient`. This method calls the [`GET /locations`](https://backstage.io/docs/features/software-catalog/software-catalog-api/#get-locations) endpoint from the catalog backend.

##### Patch Changes

- [`2ddbc50`](https://github.com/backstage/backstage/commit/2ddbc50): A new `filter` parameter has been added to `EntityContextMenuItemBlueprint` to make it easier to configure which entities a menu item should appear for. The `filter` parameter is a function which accepts an entity and returns a boolean.
- [`6d7f0d5`](https://github.com/backstage/backstage/commit/6d7f0d5): Fixed an issue causing entities of kind user and group to be empty when an owner was selected

#### 1.17.0

##### Minor Changes

- [`0f37fa8`](https://github.com/backstage/backstage/commit/0f37fa8): `entityRouteParams` now also accepts entity refs, and can help with encoding the resulting parameters.
- [`61d350f`](https://github.com/backstage/backstage/commit/61d350f): **BREAKING ALPHA**: `CatalogFilterBlueprint`, used in the new frontend system, is now exported under plugin-catalog-react instead of plugin-catalog.

  ```diff
  + import { CatalogFilterBlueprint } from '@backstage/plugin-catalog-react/alpha';
  - import { CatalogFilterBlueprint } from '@backstage/plugin-catalog/alpha';
  ```

- [`09afd67`](https://github.com/backstage/backstage/commit/09afd67): Adds `EntityContextMenuItemBlueprint` to enable extending the entity page's context menu with user defined items.

  For example:

  ```ts
  import { EntityContextMenuItemBlueprint } from '@backstage/plugin-catalog-react/alpha';

  const myCustomHref = EntityContextMenuItemBlueprint.make({
    name: 'test-href',
    params: {
      icon: <span>Example Icon</span>,
      useProps: () => ({
        title: 'Example Href',
        href: '/example-path',
        disabled: false,
        component: 'a',
      }),
    },
  });

  const myCustomOnClick = EntityContextMenuItemBlueprint.make({
    name: 'test-click',
    params: {
      icon: <span>Test Icon</span>,
      useProps: () => ({
        title: 'Example onClick',
        onClick: () => window.alert('Hello world!'),
        disabled: false,
      }),
    },
  });
  ```

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- [`3f7e4f1`](https://github.com/backstage/backstage/commit/3f7e4f1): Added a new `overview` entity content group for the new frontend system.
- [`186d016`](https://github.com/backstage/backstage/commit/186d016): Add `operation` to alpha `defaultEntityContentGroups`.
- [`221ddba`](https://github.com/backstage/backstage/commit/221ddba): Fix offset pagination to reset when updating filters in `useEntityList`

#### 1.16.0

##### Minor Changes

- [`7f57365`](https://github.com/backstage/backstage/commit/7f57365): Add support for a new entity predicate syntax when defining `filter`s related to the blueprints exported via `/alpha` for the new frontend system. For more information, see the [entity filters documentation](https://backstage.io/docs/features/software-catalog/catalog-customization#advanced-customization#entity-filters).
- [`ba9649a`](https://github.com/backstage/backstage/commit/ba9649a): Add a new `defaultGroup` parameter to the `EntityContentBlueprint`, here are usage examples:

  Set a default group while creating the extension:

  ```diff
  const entityKubernetesContent = EntityContentBlueprint.make({
    name: 'kubernetes',
    params: {
      defaultPath: '/kubernetes',
      defaultTitle: 'Kubernetes',
  +   defaultGroup: 'deployment',
      filter: 'kind:component,resource',
      loader: () =>
        import('./KubernetesContentPage').then(m =>
          compatWrapper(<m.KubernetesContentPage />),
        ),
    },
  });
  ```

  Disassociate an entity content from a default group:

  ```diff
  # app-config.yaml
  app:
    extensions:
      # Entity page content
  -   - entity-content:kubernetes/kubernetes
  +   - entity-content:kubernetes/kubernetes:
  +       config:
  +         group: false
  ```

  Associate an entity content with a different default or custom group than the one defined in code when the extension was created:

  ```diff
  # app-config.yaml
  app:
    extensions:
      # Entity page content
  -   - entity-content:kubernetes/kubernetes
  +   - entity-content:kubernetes/kubernetes:
  +       config:
  +         group: custom # associating this extension with a custom group id, the group should have previously been created via entity page configuration

  ```

- [`247a40b`](https://github.com/backstage/backstage/commit/247a40b): Introduces a new `EntityHeaderBlueprint` that allows you to override the default entity page header.

  ```jsx
  import { EntityHeaderBlueprint } from '@backstage/plugin-catalog-react/alpha';

  EntityHeaderBlueprint.make({
    name: 'my-default-header',
    params: {
      loader: () =>
        import('./MyDefaultHeader').then(m => <m.MyDefaultHeader />),
    },
  });
  ```

- [`a3d93ca`](https://github.com/backstage/backstage/commit/a3d93ca): Introduces a new `EntityContentLayoutBlueprint` that creates custom entity content layouts.

  The layout components receive card elements and can render them as they see fit. Cards is an array of objects with the following properties:

  - element: `JSx.Element`;
  - type: `"peek" | "info" | "full" | undefined`;

  ### Usage example

  Creating a custom overview tab layout:

  ```tsx
  import {
    EntityContentLayoutProps,
    EntityContentLayoutBlueprint,
  } from '@backstage/plugin-catalog-react/alpha';
  // ...

  function StickyEntityContentOverviewLayout(props: EntityContentLayoutProps) {
    const { cards } = props;
    const classes = useStyles();
    return (
      <Grid container spacing={3}>
        <Grid
          className={classes.infoArea}
          xs={12}
          md={4}
          item
        >
          <Grid container spacing={3}>
            {cards
              .filter(card => card.type === 'info')
              .map((card, index) => (
                <Grid key={index} xs={12} item>
                  {card.element}
                </Grid>
              ))}
          </Grid>
        </Grid>
        <Grid xs={12} md={8} item>
          <Grid container spacing={3}>
            {cards
              .filter(card => card.type === 'peek')
              .map((card, index) => (
                <Grid key={index} className={classes.card} xs={12} md={6} item>
                  {card.element}
                </Grid>
              ))}
            {cards
              .filter(card => !card.type || card.type === 'full')
              .map((card, index) => (
                <Grid key={index} className={classes.card} xs={12} md={6} item>
                  {card.element}
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }

  export const customEntityContentOverviewStickyLayoutModule = createFrontendModule({
    pluginId: 'app',
    extensions: [
      EntityContentLayoutBlueprint.make({
        name: 'sticky',
        params: {
          // (optional) defaults the `() => false` filter function
          defaultFilter: 'kind:template'
          loader: async () => StickyEntityContentOverviewLayout,
        },
      }),
    ],
  ```

  Disabling the custom layout:

  ```yaml
  # app-config.yaml
  app:
    extensions:
      - entity-content-layout:app/sticky: false
  ```

  Overriding the custom layout filter:

  ```yaml
  # app-config.yaml
  app:
    extensions:
      - entity-content-layout:app/sticky:
          config:
            # This layout will be used only with component entities
            filter: 'kind:component'
  ```

- [`d78bb71`](https://github.com/backstage/backstage/commit/d78bb71): Added `hidden` prop to `EntityTagPicker`, `EntityAutocompletePicker` and `UserListPicker`.
  Added `initialFilter` prop to `EntityTagPicker` to set an initial filter for the picker.
  Added `alwaysKeepFilters` prop to `UserListPicker` to prevent filters from resetting when no entities match the initial filters.
- [`a3d93ca`](https://github.com/backstage/backstage/commit/a3d93ca): Add an optional `type` parameter to `EntityCard` extensions. A card's type determines characteristics such as its expected size and where it will be rendered by the entity content layout.

  Initially the following three types are supported:

  - `peek`: small vertical cards that provide information at a glance, for example recent builds, deployments, and service health.
  - `info`: medium size cards with high priority and frequently used information such as common actions, entity metadata, and links.
  - `full`: Large cards that are more feature rich with more information, typically used by plugins that don't quite need the full content view and want to show a card instead.

  ### Usage examples

  Defining a default type when creating a card:

  ```diff
  const myCard = EntityCardBlueprint.make({
    name: 'myCard',
    params: {
  +   type: 'info',
      loader: import('./MyCard).then(m => { default: m.MyCard }),
    },
  });
  ```

  Changing the card type via `app-config.yaml` file:

  ```diff
  app:
    extensions:
  +   - entity-card:myPlugin/myCard:
  +       config:
  +         type: info
  ```

##### Patch Changes

- [`bec1e15`](https://github.com/backstage/backstage/commit/bec1e15): update EntityAutocompletePicker selected options when filter value is changed externally
- [`75a3551`](https://github.com/backstage/backstage/commit/75a3551): Export CatalogAutocomplete so it can be used externally

### `@backstage/plugin-events-backend` (0.4.3 → [0.5.2](../../changelogs/@backstage/plugin-events-backend.md#052))

#### 0.5.0

##### Minor Changes

- [`ee519c5`](https://github.com/backstage/backstage/commit/ee519c5): **BREAKING** Removed deprecated events related code
- [`bda96a7`](https://github.com/backstage/backstage/commit/bda96a7): **BREAKING** Removed support for the legacy backend, please migrate to the new backend system. Also removed deprecated code.

##### Patch Changes

- [`2f4d3bc`](https://github.com/backstage/backstage/commit/2f4d3bc): Allow webhook content to be 5mb instead the default 100kb
- [`b95aa77`](https://github.com/backstage/backstage/commit/b95aa77): add `addHttpPostBodyParser` to events extension to allow body parse customization. This feature will enhance flexibility in handling HTTP POST requests in event-related operations.

### `@backstage/plugin-events-backend-module-github` (0.2.17 → [0.4.0](../../changelogs/@backstage/plugin-events-backend-module-github.md#040))

#### 0.4.0

##### Minor Changes

- [`ae249fc`](https://github.com/backstage/backstage/commit/ae249fc): **BREAKING**: Removed the `createGithubSignatureValidator` export.

  Added support webhook validation based on `integrations.github.[].apps.[].webhookSecret`.

##### Patch Changes

- [`c7ef81c`](https://github.com/backstage/backstage/commit/c7ef81c): Correct README installation instructions.

#### 0.3.0

##### Minor Changes

- [`317ceb7`](https://github.com/backstage/backstage/commit/317ceb7): **BREAKING ALPHA**: Modules from `events-backend-module-github` and `events-backend-module-gitlab` are now exported as `default` instead of being a named export. In addition, they have been moved from `aplha` to `public`.

##### Patch Changes

- [`735fe12`](https://github.com/backstage/backstage/commit/735fe12): Don't hard fail for not configuring `webhookSecret` for the GitHub and GitLab events backend. Instead, we don't add the ingress.

### `@backstage/plugin-events-backend-module-gitlab` (0.2.17 → [0.3.1](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#031))

#### 0.3.1

##### Patch Changes

- [`a820df1`](https://github.com/backstage/backstage/commit/a820df1): Adds support for `object_kind` field with priority over `event_name` on Gitlab webhook event types

#### 0.3.0

##### Minor Changes

- [`317ceb7`](https://github.com/backstage/backstage/commit/317ceb7): **BREAKING ALPHA**: Modules from `events-backend-module-github` and `events-backend-module-gitlab` are now exported as `default` instead of being a named export. In addition, they have been moved from `aplha` to `public`.

##### Patch Changes

- [`735fe12`](https://github.com/backstage/backstage/commit/735fe12): Don't hard fail for not configuring `webhookSecret` for the GitHub and GitLab events backend. Instead, we don't add the ingress.

### `@backstage/plugin-kubernetes-node` (0.2.3 → [0.3.0](../../changelogs/@backstage/plugin-kubernetes-node.md#030))

#### 0.3.0

##### Minor Changes

- [`9cdf001`](https://github.com/backstage/backstage/commit/9cdf001): **BREAKING**: The `PinnipedHelper` class now expects a regular `LoggerService` instance from the new backend system, instead of a Winston logger.

##### Patch Changes

- [`216c6b2`](https://github.com/backstage/backstage/commit/216c6b2): Updated dependency `@kubernetes/client-node` to `1.1.2`.
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

### `@backstage/plugin-permission-backend` (0.5.54 → [0.7.0](../../changelogs/@backstage/plugin-permission-backend.md#070))

#### 0.7.0

##### Minor Changes

- [`4da2965`](https://github.com/backstage/backstage/commit/4da2965): Fixed an issue causing the `PermissionClient` to exhaust the request body size limit too quickly when making many requests.
- [`cf8fd51`](https://github.com/backstage/backstage/commit/cf8fd51): **BREAKING** Removed support for the legacy backend system, please [migrate to the new backend system](https://backstage.io/docs/backend-system/building-backends/migrating)

#### 0.6.0

##### Minor Changes

- [`78eaa50`](https://github.com/backstage/backstage/commit/78eaa50): Improved validation for the `/authorize` endpoint when a `resourceRef` is provided alongside a basic permission. Additionally, introduced a clearer error message for cases where users attempt to directly evaluate conditional permissions.

### `@backstage/plugin-permission-node` (0.8.8 → [0.10.0](../../changelogs/@backstage/plugin-permission-node.md#0100))

#### 0.10.0

##### Minor Changes

- [`4da2965`](https://github.com/backstage/backstage/commit/4da2965): Fixed an issue causing the `PermissionClient` to exhaust the request body size limit too quickly when making many requests.

#### 0.9.0

##### Minor Changes

- [`22ace13`](https://github.com/backstage/backstage/commit/22ace13): **BREAKING** The `ServerPermissionClient` can no longer be instantiated with a `tokenManager` and must instead be instantiated with an `auth` service. If you are still on the legacy backend system, use `createLegacyAuthAdapters()` from `@backstage/backend-common` to create a compatible `auth` service.

##### Patch Changes

- [`728e3e1`](https://github.com/backstage/backstage/commit/728e3e1): Improved type inference when passing a `PermissionResourceRef` to `createPermissionRule`.
- [`876f2e1`](https://github.com/backstage/backstage/commit/876f2e1): Deprecated `createPermissionIntegrationRouter` and related types, which has been replaced by `PermissionRegistryService`. For more information, including how to migrate existing plugins, see the [service docs](https://backstage.io/docs/backend-system/core-services/permissions-registry).

### `@backstage/plugin-proxy-backend` (0.5.11 → [0.6.2](../../changelogs/@backstage/plugin-proxy-backend.md#062))

#### 0.6.1

##### Patch Changes

- [`9b5b744`](https://github.com/backstage/backstage/commit/9b5b744): Fixed handling of proxied SSE connections when the upstream server closes the connection

#### 0.6.0

##### Minor Changes

- [`2d8b0e4`](https://github.com/backstage/backstage/commit/2d8b0e4): **BREAKING**: Removed support for the old backend system.

  As part of this change the plugin export from `/alpha` as been removed. If you are currently importing `@backstage/plugin-proxy-backend/alpha`, please update your import to `@backstage/plugin-proxy-backend`.

### `@backstage/plugin-scaffolder` (1.28.0 → [1.31.0](../../changelogs/@backstage/plugin-scaffolder.md#1310))

#### 1.31.0

##### Minor Changes

- [`4235e87`](https://github.com/backstage/backstage/commit/4235e87): add templating extensions page

##### Patch Changes

- [`92c3658`](https://github.com/backstage/backstage/commit/92c3658): Full support in EntityPicker (and derivatives) for default EntityPresentationApi
- [`fb58f20`](https://github.com/backstage/backstage/commit/fb58f20): Internal update to use the new `pluginId` option of `createFrontendPlugin`.
- [`d7da01d`](https://github.com/backstage/backstage/commit/d7da01d): Fix EntityPicker field to render description as markdown, matching other form components in the system.
- [`36ae651`](https://github.com/backstage/backstage/commit/36ae651): Fixing a bug where the name for `templatingExtensions` was incorrectly set to `templateExtensions`
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos
- [`a274e0a`](https://github.com/backstage/backstage/commit/a274e0a): Migrate custom fields to new schema factory function;
  standardize field descriptions to prefer ui:description and present consistently,
  utilizing ScaffolderField component where possible.

#### 1.30.0

##### Minor Changes

- [`76681a5`](https://github.com/backstage/backstage/commit/76681a5): **BREAKING ALPHA**: Extract out schema rendering components into their own Component. This means that the translation keys have changed for `actionsPage.content.tableCell.*`. They have moved to their own root key `renderSchema.*` instead.

  ```diff
  ...
  -        tableCell: {
  -          name: 'Name',
  -          title: 'Title',
  -          description: 'Description',
  -          type: 'Type',
  -        },
  -        noRowsDescription: 'No schema defined',
  ...
  +    renderSchema: {
  +      tableCell: {
  +        name: 'Name',
  +        title: 'Title',
  +        description: 'Description',
  +        type: 'Type',
  +      },
  +      undefined: 'No schema defined',
  +    },
  ```

- [`5890016`](https://github.com/backstage/backstage/commit/5890016): add api to retrieve template extensions info from scaffolder-backend

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- [`407eba1`](https://github.com/backstage/backstage/commit/407eba1): Tweaked template editor tooltip to mention HTTPS requirement.

#### 1.29.0

##### Minor Changes

- [`9d864ff`](https://github.com/backstage/backstage/commit/9d864ff): Allowed passing `ui:disabled` for disabling the input field of all the pickers.

##### Patch Changes

- [`3db64ba`](https://github.com/backstage/backstage/commit/3db64ba): Disable the submit button on creating
- [`6a3fa48`](https://github.com/backstage/backstage/commit/6a3fa48): Fixes DryRunContext not forwarding the correct Scaffolder Secrets to the DryRun API
- [`b3b7c9c`](https://github.com/backstage/backstage/commit/b3b7c9c): Updated the alpha `page:scaffolder` extension to accept `formFields` input, matching the updated `FormFieldBlueprint`.

### `@backstage/plugin-scaffolder-backend-module-github` (0.6.0 → [0.7.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#071))

#### 0.7.1

##### Patch Changes

- [`6579c2c`](https://github.com/backstage/backstage/commit/6579c2c): Use action context logger in Octokit client
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos
- [`b2b654c`](https://github.com/backstage/backstage/commit/b2b654c): Added optional assignees parameter to `publish:github:pull-request` action

#### 0.7.0

##### Minor Changes

- [`c761cf5`](https://github.com/backstage/backstage/commit/c761cf5): **BREAKING** The `publish:github` scaffolder action now defaults to initializing with a branch named "main" instead of "master" when creating new repositories.

  If you or your organization have relied on all new github repositories having a default branch name of "master" you **must** set the `defaultBranch: 'master'` in your existing templates that feature the `publish:github` scaffolder action.

  To keep using the name "master" for your new github repos, these are the **required** changes:

  ```diff
      - id: publish
        name: Publish
        action: publish:github
        input:
          allowedHosts: ['github.com']
          description: This is ${{ parameters.name }}
          repoUrl: ${{ parameters.repoUrl }}
  +       defaultBranch: 'master'
  ```

##### Patch Changes

- [`1af427a`](https://github.com/backstage/backstage/commit/1af427a): Made "github:autolinks:create" action idempotent
- [`79dc5ac`](https://github.com/backstage/backstage/commit/79dc5ac): Made "github:deployKey:create" action idempotent
- [`411c879`](https://github.com/backstage/backstage/commit/411c879): Add support to github:repo:create to allow branch updates
- [`180ea6e`](https://github.com/backstage/backstage/commit/180ea6e): Made "github:branch-protection:create" action idempotent
- [`0be1a1e`](https://github.com/backstage/backstage/commit/0be1a1e): Made "publish:github" action idempotent
- [`a833f0f`](https://github.com/backstage/backstage/commit/a833f0f): Made "github:actions:dispatch" action idempotent

#### 0.6.1

##### Patch Changes

- [`11bc3e6`](https://github.com/backstage/backstage/commit/11bc3e6): Made "github:pages:enable" action idempotent
- [`3f45e0f`](https://github.com/backstage/backstage/commit/3f45e0f): Made "github:environment:create" action idempotent
- [`09cf038`](https://github.com/backstage/backstage/commit/09cf038): Got rid of most `@backstage/backend-common` usages
- [`8c38687`](https://github.com/backstage/backstage/commit/8c38687): Made "github:issues:label" action idempotent
- [`89948b2`](https://github.com/backstage/backstage/commit/89948b2): Made "github:repo:push" action idempotent
- [`9391f58`](https://github.com/backstage/backstage/commit/9391f58): Pass `undefined` to some parameters for `createOrUpdateEnvironment` as these values are not always supported in different plans of GitHub
- [`8182a59`](https://github.com/backstage/backstage/commit/8182a59): Made "github:webhook" action idempotent
- [`8f9c54c`](https://github.com/backstage/backstage/commit/8f9c54c): Made "github:repo:create" action idempotent
- [`0ae0c77`](https://github.com/backstage/backstage/commit/0ae0c77): Made "publish:github:pull-request" action idempotent

### `@backstage/plugin-search-backend` (1.8.2 → [2.0.2](../../changelogs/@backstage/plugin-search-backend.md#202))

#### 2.0.0

##### Major Changes

- [`d5c4a9d`](https://github.com/backstage/backstage/commit/d5c4a9d): **BREAKING** Removed support for the legacy backend system and references to `@backstage/backend-common`, please migrate to the new backend system.

### `@backstage/plugin-search-backend-module-explore` (0.2.8 → [0.3.2](../../changelogs/@backstage/plugin-search-backend-module-explore.md#032))

#### 0.3.0

##### Minor Changes

- [`d5c4a9d`](https://github.com/backstage/backstage/commit/d5c4a9d): **BREAKING** Removed support for the legacy backend system and references to `@backstage/backend-common`, please migrate to the new backend system.

### `@backstage/plugin-search-backend-module-techdocs` (0.3.6 → [0.4.2](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#042))

#### 0.4.0

##### Minor Changes

- [`d5c4a9d`](https://github.com/backstage/backstage/commit/d5c4a9d): **BREAKING** Removed support for the legacy backend system and references to `@backstage/backend-common`, please migrate to the new backend system.

##### Patch Changes

- [`d32bdc4`](https://github.com/backstage/backstage/commit/d32bdc4): Added an extension point that allows for custom entity filtering during document collation.

### `@backstage/plugin-techdocs-backend` (1.11.6 → [2.0.2](../../changelogs/@backstage/plugin-techdocs-backend.md#202))

#### 2.0.2

##### Patch Changes

- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

#### 2.0.0

##### Major Changes

- [`d5c4a9d`](https://github.com/backstage/backstage/commit/d5c4a9d): **BREAKING** Removed support for the legacy backend, please migrate to the new backend system. Also removed deprecated `DefaultTechDocsCollatorFactory`. Use the `@backstage/plugin-search-backend-module-techdocs` for this instead. Finally, deprecated `DocsBuildStrategy` and `TechDocsDocument` were removed, use the versions in `@backstage/plugin-techdocs-node` instead.

##### Patch Changes

- [`7828186`](https://github.com/backstage/backstage/commit/7828186): Minor type fix
- [`8f03776`](https://github.com/backstage/backstage/commit/8f03776): Properly clean up temporary files on build failures

### `@backstage/plugin-user-settings-backend` (0.2.30 → [0.3.2](../../changelogs/@backstage/plugin-user-settings-backend.md#032))

#### 0.3.0

##### Minor Changes

- [`e202017`](https://github.com/backstage/backstage/commit/e202017): **BREAKING**: Removed support for the old backend system.

  As part of this change the plugin export from `/alpha` as been removed. If you are currently importing `@backstage/plugin-user-settings-backend/alpha`, please update your import to `@backstage/plugin-user-settings-backend`.

## 0.x minor version bumps

### `@backstage/core-components` (0.16.4 → [0.17.2](../../changelogs/@backstage/core-components.md#0172))

#### 0.17.2

##### Patch Changes

- [`e0d1025`](https://github.com/backstage/backstage/commit/e0d1025): `LogViewer` now supports a `textWrap` prop that wraps log lines to the next line for overflowing content instead of using horizontal scroll
- [`bb84534`](https://github.com/backstage/backstage/commit/bb84534): Fix the hidden sidebar's sub-menu when the sidebar is scrollable
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

#### 0.17.1

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- [`5d7bad4`](https://github.com/backstage/backstage/commit/5d7bad4): Fixed the messaging in the `AlertDisplay` where it was claiming that there were older messages available rather than newer.

#### 0.17.0

##### Minor Changes

- [`25300cb`](https://github.com/backstage/backstage/commit/25300cb): `SimpleStepper` back button now works with `activeStep` property set higher than 0
- [`9545af2`](https://github.com/backstage/backstage/commit/9545af2): Declared CancelIcon explicitly on Chip component inside Select.tsx to disable onMouseDown event by default that creates the flaw of re-opening select component when user tries to remove a selected filter.

##### Patch Changes

- [`fffe3c0`](https://github.com/backstage/backstage/commit/fffe3c0): Added `classNames` prop to the `Page` component
- [`df3b9f0`](https://github.com/backstage/backstage/commit/df3b9f0): Fixed a bug in the SidebarSubmenuItem within the core-components package that caused the dropdown button to be misaligned in the sidebar and the button text to appear in uppercase due to the default <Button> behavior. Also added an example dropdown menu to the app for reference.
- [`48aab13`](https://github.com/backstage/backstage/commit/48aab13): Add i18n support for scaffolder-react plugin
- [`0a0ced6`](https://github.com/backstage/backstage/commit/0a0ced6): Avoid Layout Shift for `DismissableBanner` when using a `storageApi` with latency (e.g. `user-settings-backend`)

  Properly handle the `unknown` state of the `storageApi`. There's a trade-off: this may lead to some Layout Shift if the banner has not been dismissed, but once it has been dismissed, you won't have any.

### `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.4.5 → [0.5.2](../../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#052))

#### 0.5.2

##### Patch Changes

- [`d385854`](https://github.com/backstage/backstage/commit/d385854): Do not swallow errors; instead allow them to bubble up to the task scheduler for better tracking and logging.
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

#### 0.5.0

##### Minor Changes

- [`62842ee`](https://github.com/backstage/backstage/commit/62842ee): feat: Improve JSON format of OpenAPI definition, allow YAML format

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.3.2 → [0.4.1](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#041))

#### 0.4.0

##### Minor Changes

- [`1daedce`](https://github.com/backstage/backstage/commit/1daedce): Remove Throttle of Bitbucket Server API calls
- [`7b3ed9b`](https://github.com/backstage/backstage/commit/7b3ed9b): Added the ability for the plugin to receive events coming from Bitbucket Server push webhooks. It then performs a delta mutation on the catalog.

### `@backstage/plugin-catalog-backend-module-msgraph` (0.6.7 → [0.7.0](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#070))

#### 0.7.0

##### Minor Changes

- [`20c1ea7`](https://github.com/backstage/backstage/commit/20c1ea7): Add new `userGroupMember.path`, `user.path` and, `group.path` option to each query type to allow more complex msgraph queries

##### Patch Changes

- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

#### 0.6.8

##### Patch Changes

- [`612d1fd`](https://github.com/backstage/backstage/commit/612d1fd): Update `catalog.providers.microsoftGraphOrg.target` config def to be optional as this has a default value.

### `@backstage/plugin-permission-common` (0.8.4 → [0.9.0](../../changelogs/@backstage/plugin-permission-common.md#090))

#### 0.9.0

##### Minor Changes

- [`4da2965`](https://github.com/backstage/backstage/commit/4da2965): Fixed an issue causing the `PermissionClient` to exhaust the request body size limit too quickly when making many requests.

##### Patch Changes

- [`37328b1`](https://github.com/backstage/backstage/commit/37328b1): Fixed an issue causing `PermissionClient` to throw an error when authorizing basic permissions with the `permission.EXPERIMENTAL_enableBatchedRequests` config enabled.
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.8.0 → [0.9.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#091))

#### 0.9.1

##### Patch Changes

- [`d15355c`](https://github.com/backstage/backstage/commit/d15355c): If the commit action is not `create` log a more appropriate error message to the end user advising that the files they're trying to modify might not exist
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

#### 0.9.0

##### Minor Changes

- [`d86ce21`](https://github.com/backstage/backstage/commit/d86ce21): Added additional feedback in case branch is already created

##### Patch Changes

- [`003dc15`](https://github.com/backstage/backstage/commit/003dc15): Updated the path field in the `gitlab:group:ensureExists` action to support also strings with multiple segments (e.g. `group/subgroup`)
- [`19e23da`](https://github.com/backstage/backstage/commit/19e23da): Adds more context to the `gitlab:repo:push` `commitAction` property for the installed actions section in the scaffolder

#### 0.8.1

##### Patch Changes

- [`0df33ea`](https://github.com/backstage/backstage/commit/0df33ea): fix: Creating a repository in a user namespace would always lead to an error
- [`984b283`](https://github.com/backstage/backstage/commit/984b283): Made "gitlab:pipeline:trigger" action idempotent
- [`225c733`](https://github.com/backstage/backstage/commit/225c733): Made gitlab:repo:push action idempotent.
- [`a08cb20`](https://github.com/backstage/backstage/commit/a08cb20): Remove usages of `@backstage/backend-common`
- [`ac58f84`](https://github.com/backstage/backstage/commit/ac58f84): Made gitlab:issue:edit action idempotent.
- [`f6b51a8`](https://github.com/backstage/backstage/commit/f6b51a8): Made "gitlab:projectDeployToken:create" action idempotent
- [`a75e18f`](https://github.com/backstage/backstage/commit/a75e18f): Change the if statement in the catch block to match what the new version of Gitbeaker will return
- [`36af946`](https://github.com/backstage/backstage/commit/36af946): Made "gitlab:projectVariable:create" action idempotent
- [`1cea434`](https://github.com/backstage/backstage/commit/1cea434): Made "gitlab:projectAccessToken:create" action idempotent
- [`4f8b5b6`](https://github.com/backstage/backstage/commit/4f8b5b6): Allow signing git commits using configured private PGP key in scaffolder
- [`83ae330`](https://github.com/backstage/backstage/commit/83ae330): Made "gitlab:group:migrate" action idempotent

### `@backstage/plugin-scaffolder-node` (0.7.0 → [0.8.2](../../changelogs/@backstage/plugin-scaffolder-node.md#082))

#### 0.8.2

##### Patch Changes

- [`16e2e9c`](https://github.com/backstage/backstage/commit/16e2e9c): trim leading and trailing slashes from parseRepoUrl query parameters
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos
- [`ec42f8e`](https://github.com/backstage/backstage/commit/ec42f8e): Generating new tokens on each Scaffolder Task Retry

#### 0.8.1

##### Patch Changes

- [`497d47a`](https://github.com/backstage/backstage/commit/497d47a): Document the internal built-in filters, and ensure that the types are validated when using `createTemplateFilter` and `createTemplateGlobalFunction` from the `zod` schema.

#### 0.8.0

##### Minor Changes

- [`1a58846`](https://github.com/backstage/backstage/commit/1a58846): **DEPRECATION**: We've deprecated the old way of defining actions using `createTemplateAction` with raw `JSONSchema` and type parameters, as well as using `zod` through an import. You can now use the new format to define `createTemplateActions` with `zod` provided by the framework. This change also removes support for `logStream` in the `context` as well as moving the `logger` to an instance of `LoggerService`.

  Before:

  ```ts
  createTemplateAction<{ repoUrl: string }, { test: string }>({
    id: 'test',
    schema: {
      input: {
        type: 'object',
        required: ['repoUrl'],
        properties: {
          repoUrl: { type: 'string' },
        },
      },
      output: {
        type: 'object',
        required: ['test'],
        properties: {
          test: { type: 'string' },
        },
      },
    },
    handler: async ctx => {
      ctx.logStream.write('blob');
    },
  });

  // or

  createTemplateAction({
    id: 'test',
    schema: {
      input: z.object({
        repoUrl: z.string(),
      }),
      output: z.object({
        test: z.string(),
      }),
    },
    handler: async ctx => {
      ctx.logStream.write('something');
    },
  });
  ```

  After:

  ```ts
  createTemplateAction({
    id: 'test',
    schema: {
      input: {
        repoUrl: d => d.string(),
      },
      output: {
        test: d => d.string(),
      },
    },
    handler: async ctx => {
      // you can just use ctx.logger.log('...'), or if you really need a log stream you can do this:
      const logStream = new PassThrough();
      logStream.on('data', chunk => {
        ctx.logger.info(chunk.toString());
      });
    },
  });
  ```

##### Patch Changes

- [`09cf038`](https://github.com/backstage/backstage/commit/09cf038): Got rid of most `@backstage/backend-common` usages
- [`4f8b5b6`](https://github.com/backstage/backstage/commit/4f8b5b6): Allow signing git commits using configured private PGP key in scaffolder

### `@backstage/plugin-scaffolder-node-test-utils` (0.1.19 → [0.2.2](../../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#022))

#### 0.2.2

##### Patch Changes

- [`b27c48d`](https://github.com/backstage/backstage/commit/b27c48d): Include optional `user` in `createMockActionContext`

#### 0.2.0

##### Minor Changes

- [`36677bb`](https://github.com/backstage/backstage/commit/36677bb): Use update `createTemplateAction` kinds

##### Patch Changes

- [`09cf038`](https://github.com/backstage/backstage/commit/09cf038): Got rid of most `@backstage/backend-common` usages

## 0.0.x patch version bumps

### `@backstage/plugin-kubernetes-cluster` (0.0.22 → [0.0.25](../../changelogs/@backstage/plugin-kubernetes-cluster.md#0025))

#### 0.0.25

##### Patch Changes

- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

#### 0.0.24

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/plugin-signals` (0.0.16 → [0.0.19](../../changelogs/@backstage/plugin-signals.md#0019))

#### 0.0.19

##### Patch Changes

- [`fb58f20`](https://github.com/backstage/backstage/commit/fb58f20): Internal update to use the new `pluginId` option of `createFrontendPlugin`.

#### 0.0.17

##### Patch Changes

- [`ac3e8c0`](https://github.com/backstage/backstage/commit/ac3e8c0): Fixed multiple signal connection attempts when there are multiple subscriptions at the same time

### `@backstage/release-manifests` (0.0.12 → [0.0.13](../../changelogs/@backstage/release-manifests.md#0013))

#### 0.0.13

##### Patch Changes

- [`163f3da`](https://github.com/backstage/backstage/commit/163f3da): This expands the configurability of `release-manifests` to pave the road for more configuration options in the `cli`.

  Specifically it allows the specification of mirrored, proxied, or air-gapped hosts when upgrading across releases when
  working in restricted or heavily governed development environments (common in large enterprises and government
  entities).

## 0.x patch version bumps

### `@backstage/integration-aws-node` (0.1.15 → [0.1.16](../../changelogs/@backstage/integration-aws-node.md#0116))

#### 0.1.16

##### Patch Changes

- [`db4630e`](https://github.com/backstage/backstage/commit/db4630e): Fixed bug in DefaultAwsCredentialsManager where aws.mainAccount.region has no effect on the STS region used for account ID lookup during credential provider lookup when falling back to the main account, and it does not default to us-east-1

### `@backstage/plugin-api-docs` (0.12.4 → [0.12.7](../../changelogs/@backstage/plugin-api-docs.md#0127))

#### 0.12.7

##### Patch Changes

- [`fb58f20`](https://github.com/backstage/backstage/commit/fb58f20): Internal update to use the new `pluginId` option of `createFrontendPlugin`.
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

#### 0.12.6

##### Patch Changes

- [`317bc3d`](https://github.com/backstage/backstage/commit/317bc3d): api-docs plugin support i18n
- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

#### 0.12.5

##### Patch Changes

- [`74871cc`](https://github.com/backstage/backstage/commit/74871cc): Use consistent Typography in Entity HasApisCard

### `@backstage/plugin-api-docs-module-protoc-gen-doc` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-api-docs-module-protoc-gen-doc.md#0110))

#### 0.1.10

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/plugin-app` (0.1.6 → [0.1.9](../../changelogs/@backstage/plugin-app.md#019))

#### 0.1.9

##### Patch Changes

- [`fb58f20`](https://github.com/backstage/backstage/commit/fb58f20): Internal update to use the new `pluginId` option of `createFrontendPlugin`.

#### 0.1.8

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

#### 0.1.7

##### Patch Changes

- [`583fc54`](https://github.com/backstage/backstage/commit/583fc54): Fixed extra app elements not being rendered as part of apps without a sign-in page.
- [`0aa9d82`](https://github.com/backstage/backstage/commit/0aa9d82): Added implementation of the new `DialogApi`.

### `@backstage/plugin-app-visualizer` (0.1.16 → [0.1.19](../../changelogs/@backstage/plugin-app-visualizer.md#0119))

#### 0.1.19

##### Patch Changes

- [`fb58f20`](https://github.com/backstage/backstage/commit/fb58f20): Internal update to use the new `pluginId` option of `createFrontendPlugin`.

#### 0.1.18

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/plugin-auth-backend-module-atlassian-provider` (0.4.0 → [0.4.3](../../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#043))

#### 0.4.3

##### Patch Changes

- [`5cc1f7f`](https://github.com/backstage/backstage/commit/5cc1f7f): Introduce `dangerouslyAllowSignInWithoutUserInCatalog` auth resolver config.

### `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.4.0 → [0.4.3](../../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#043))

#### 0.4.3

##### Patch Changes

- [`5cc1f7f`](https://github.com/backstage/backstage/commit/5cc1f7f): Introduce `dangerouslyAllowSignInWithoutUserInCatalog` auth resolver config.

### `@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.2.5 → [0.2.8](../../changelogs/@backstage/plugin-auth-backend-module-azure-easyauth-provider.md#028))

#### 0.2.8

##### Patch Changes

- [`5cc1f7f`](https://github.com/backstage/backstage/commit/5cc1f7f): Introduce `dangerouslyAllowSignInWithoutUserInCatalog` auth resolver config.

### `@backstage/plugin-auth-backend-module-bitbucket-provider` (0.3.0 → [0.3.3](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-provider.md#033))

#### 0.3.3

##### Patch Changes

- [`5cc1f7f`](https://github.com/backstage/backstage/commit/5cc1f7f): Introduce `dangerouslyAllowSignInWithoutUserInCatalog` auth resolver config.

#### 0.3.2

##### Patch Changes

- [`5d10f99`](https://github.com/backstage/backstage/commit/5d10f99): Enabled persistency of scopes for Bitbucket Cloud.

### `@backstage/plugin-auth-backend-module-bitbucket-server-provider` (0.2.0 → [0.2.3](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-server-provider.md#023))

#### 0.2.3

##### Patch Changes

- [`5cc1f7f`](https://github.com/backstage/backstage/commit/5cc1f7f): Introduce `dangerouslyAllowSignInWithoutUserInCatalog` auth resolver config.

### `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.4.0 → [0.4.3](../../changelogs/@backstage/plugin-auth-backend-module-cloudflare-access-provider.md#043))

#### 0.4.3

##### Patch Changes

- [`5cc1f7f`](https://github.com/backstage/backstage/commit/5cc1f7f): Introduce `dangerouslyAllowSignInWithoutUserInCatalog` auth resolver config.

### `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.4.0 → [0.4.3](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#043))

#### 0.4.3

##### Patch Changes

- [`5cc1f7f`](https://github.com/backstage/backstage/commit/5cc1f7f): Introduce `dangerouslyAllowSignInWithoutUserInCatalog` auth resolver config.

### `@backstage/plugin-auth-backend-module-github-provider` (0.3.0 → [0.3.3](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#033))

#### 0.3.3

##### Patch Changes

- [`5cdfe05`](https://github.com/backstage/backstage/commit/5cdfe05): Added missing types package
- [`5cc1f7f`](https://github.com/backstage/backstage/commit/5cc1f7f): Introduce `dangerouslyAllowSignInWithoutUserInCatalog` auth resolver config.

### `@backstage/plugin-auth-backend-module-gitlab-provider` (0.3.0 → [0.3.3](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#033))

#### 0.3.3

##### Patch Changes

- [`5cc1f7f`](https://github.com/backstage/backstage/commit/5cc1f7f): Introduce `dangerouslyAllowSignInWithoutUserInCatalog` auth resolver config.

### `@backstage/plugin-auth-backend-module-google-provider` (0.3.0 → [0.3.3](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#033))

#### 0.3.3

##### Patch Changes

- [`5cc1f7f`](https://github.com/backstage/backstage/commit/5cc1f7f): Introduce `dangerouslyAllowSignInWithoutUserInCatalog` auth resolver config.

### `@backstage/plugin-auth-backend-module-microsoft-provider` (0.3.0 → [0.3.3](../../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#033))

#### 0.3.3

##### Patch Changes

- [`5cc1f7f`](https://github.com/backstage/backstage/commit/5cc1f7f): Introduce `dangerouslyAllowSignInWithoutUserInCatalog` auth resolver config.

#### 0.3.1

##### Patch Changes

- [`fa15e80`](https://github.com/backstage/backstage/commit/fa15e80): Update `auth.microsoft.signIn.resolvers` config def to include the `userIdMatchingUserEntityAnnotation` resolver.

### `@backstage/plugin-auth-backend-module-oauth2-provider` (0.4.0 → [0.4.3](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#043))

#### 0.4.3

##### Patch Changes

- [`5cc1f7f`](https://github.com/backstage/backstage/commit/5cc1f7f): Introduce `dangerouslyAllowSignInWithoutUserInCatalog` auth resolver config.

#### 0.4.1

##### Patch Changes

- [`ce15e30`](https://github.com/backstage/backstage/commit/ce15e30): Fixed repository url in `README.md`

### `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.2.5 → [0.2.8](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#028))

#### 0.2.8

##### Patch Changes

- [`5cc1f7f`](https://github.com/backstage/backstage/commit/5cc1f7f): Introduce `dangerouslyAllowSignInWithoutUserInCatalog` auth resolver config.

### `@backstage/plugin-auth-backend-module-oidc-provider` (0.4.0 → [0.4.3](../../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#043))

#### 0.4.3

##### Patch Changes

- [`5cc1f7f`](https://github.com/backstage/backstage/commit/5cc1f7f): Introduce `dangerouslyAllowSignInWithoutUserInCatalog` auth resolver config.

#### 0.4.2

##### Patch Changes

- [`7495edf`](https://github.com/backstage/backstage/commit/7495edf): Added custom timeout setting for oidc provider

  Here is an example of how to use a custom timeout with the configuration:

  ```yaml
  auth:
    oidc:
      production:
        clientId: ${AUTH_GOOGLE_CLIENT_ID}
        clientSecret: ${AUTH_GOOGLE_CLIENT_SECRET}
        timeout:
          seconds: 30
  ```

#### 0.4.1

##### Patch Changes

- [`ce15e30`](https://github.com/backstage/backstage/commit/ce15e30): Fixed repository url in `README.md`

### `@backstage/plugin-auth-backend-module-okta-provider` (0.2.0 → [0.2.3](../../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#023))

#### 0.2.3

##### Patch Changes

- [`5cc1f7f`](https://github.com/backstage/backstage/commit/5cc1f7f): Introduce `dangerouslyAllowSignInWithoutUserInCatalog` auth resolver config.

#### 0.2.1

##### Patch Changes

- [`ce15e30`](https://github.com/backstage/backstage/commit/ce15e30): Fixed repository url in `README.md`

### `@backstage/plugin-auth-backend-module-onelogin-provider` (0.3.0 → [0.3.3](../../changelogs/@backstage/plugin-auth-backend-module-onelogin-provider.md#033))

#### 0.3.3

##### Patch Changes

- [`5cc1f7f`](https://github.com/backstage/backstage/commit/5cc1f7f): Introduce `dangerouslyAllowSignInWithoutUserInCatalog` auth resolver config.

### `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.5.0 → [0.5.3](../../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#053))

#### 0.5.3

##### Patch Changes

- [`5cc1f7f`](https://github.com/backstage/backstage/commit/5cc1f7f): Introduce `dangerouslyAllowSignInWithoutUserInCatalog` auth resolver config.

### `@backstage/plugin-auth-node` (0.6.0 → [0.6.3](../../changelogs/@backstage/plugin-auth-node.md#063))

#### 0.6.3

##### Patch Changes

- [`332e934`](https://github.com/backstage/backstage/commit/332e934): Added the `identity` property to `BackstageSignInResult`.

  The `prepareBackstageIdentityResponse` function will now also forward the `identity` to the response if present in the provided sign-in result.

- [`ab53e6f`](https://github.com/backstage/backstage/commit/ab53e6f): Added a new `dangerousEntityRefFallback` option to the `signInWithCatalogUser` method in `AuthResolverContext`. The option will cause the provided entity reference to be used as a fallback in case the user is not found in the catalog. It is up to the caller to provide the fallback entity reference.

  Auth providers that include pre-defined sign-in resolvers are encouraged to define a flag named `dangerouslyAllowSignInWithoutUserInCatalog` in their config, which in turn enables use of the `dangerousEntityRefFallback` option. For example:

  ```ts
  export const usernameMatchingUserEntityName = createSignInResolverFactory({
    optionsSchema: z
      .object({
        dangerouslyAllowSignInWithoutUserInCatalog: z.boolean().optional(),
      })
      .optional(),
    create(options = {}) {
      return async (
        info: SignInInfo<OAuthAuthenticatorResult<PassportProfile>>,
        ctx,
      ) => {
        const { username } = info.result.fullProfile;
        if (!username) {
          throw new Error('User profile does not contain a username');
        }

        return ctx.signInWithCatalogUser(
          { entityRef: { name: username } },
          {
            dangerousEntityRefFallback:
              options?.dangerouslyAllowSignInWithoutUserInCatalog
                ? { entityRef: { name: username } }
                : undefined,
          },
        );
      };
    },
  });
  ```

#### 0.6.1

##### Patch Changes

- [`b6702ea`](https://github.com/backstage/backstage/commit/b6702ea): Added `AuthResolverContext.resolveOwnershipEntityRefs` as a way of accessing the default ownership resolution logic in sign-in resolvers, replacing `getDefaultOwnershipEntityRefs` from `@backstage/plugin-auth-backend`.

### `@backstage/plugin-auth-react` (0.1.12 → [0.1.15](../../changelogs/@backstage/plugin-auth-react.md#0115))

#### 0.1.15

##### Patch Changes

- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

#### 0.1.14

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/plugin-catalog-backend-module-aws` (0.4.8 → [0.4.11](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#0411))

#### 0.4.11

##### Patch Changes

- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

### `@backstage/plugin-catalog-backend-module-azure` (0.3.2 → [0.3.5](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#035))

#### 0.3.5

##### Patch Changes

- [`be82d83`](https://github.com/backstage/backstage/commit/be82d83): visualstudio.com domains are now supported along with dev.azure.com

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.4.5 → [0.4.8](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#048))

#### 0.4.8

##### Patch Changes

- [`3bce578`](https://github.com/backstage/backstage/commit/3bce578): Support Bitbucket Cloud's `repo:updated` events at `BitbucketCloudEntityProvider`.

  To make use of the new event type, you have to configure your webhook or add a new ones
  that delivers this event type to Backstage similar to `repo:push` before.

  Only `repo:updated` events that modify a repository's URL (e.g., due to a name change)
  will cause changes (removing the "old", adding the "new" repository).

#### 0.4.7

##### Patch Changes

- [`146e41b`](https://github.com/backstage/backstage/commit/146e41b): Fixed bug in event-based discovery that caused unnecessary API calls to Bitbucket Cloud

### `@backstage/plugin-catalog-backend-module-github-org` (0.3.7 → [0.3.10](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#0310))

#### 0.3.10

##### Patch Changes

- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

### `@backstage/plugin-catalog-backend-module-gitlab` (0.6.3 → [0.6.6](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#066))

#### 0.6.6

##### Patch Changes

- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

#### 0.6.5

##### Patch Changes

- [`a568cda`](https://github.com/backstage/backstage/commit/a568cda): add filter for repos by membership and topics
- [`871a8db`](https://github.com/backstage/backstage/commit/871a8db): fix: Add missing config options to config declaration file

### `@backstage/plugin-catalog-backend-module-ldap` (0.11.2 → [0.11.5](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0115))

#### 0.11.5

##### Patch Changes

- [`e253d1d`](https://github.com/backstage/backstage/commit/e253d1d): Improves error reporting for missing metadata.name in LDAP catalog provider.

#### 0.11.3

##### Patch Changes

- [`e43f41b`](https://github.com/backstage/backstage/commit/e43f41b): Fix `config.d.ts` for `ldapOrg` being incorrect. The documentation says a single
  object or an array are accepted, but the definition only allows an object.

### `@backstage/plugin-catalog-backend-module-logs` (0.1.7 → [0.1.10](../../changelogs/@backstage/plugin-catalog-backend-module-logs.md#0110))

#### 0.1.10

##### Patch Changes

- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

### `@backstage/plugin-catalog-graph` (0.4.16 → [0.4.19](../../changelogs/@backstage/plugin-catalog-graph.md#0419))

#### 0.4.19

##### Patch Changes

- [`fb58f20`](https://github.com/backstage/backstage/commit/fb58f20): Internal update to use the new `pluginId` option of `createFrontendPlugin`.
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos
- [`1307f00`](https://github.com/backstage/backstage/commit/1307f00): Fix rendering of missing relations

#### 0.4.18

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/plugin-catalog-unprocessed-entities` (0.2.14 → [0.2.17](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#0217))

#### 0.2.17

##### Patch Changes

- [`fb58f20`](https://github.com/backstage/backstage/commit/fb58f20): Internal update to use the new `pluginId` option of `createFrontendPlugin`.

#### 0.2.16

##### Patch Changes

- [`ba88bfa`](https://github.com/backstage/backstage/commit/ba88bfa): Added confirmation popup for delete entities in Catalog Unprocessed Entities plugin
- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- [`2479827`](https://github.com/backstage/backstage/commit/2479827): Fixed the `convertTimeToLocalTimezone` function in the FailedEntities component to correctly parse ISO 8601 date strings and set the timezone to the current local timezone.

### `@backstage/plugin-config-schema` (0.1.65 → [0.1.68](../../changelogs/@backstage/plugin-config-schema.md#0168))

#### 0.1.67

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/plugin-devtools` (0.1.24 → [0.1.27](../../changelogs/@backstage/plugin-devtools.md#0127))

#### 0.1.27

##### Patch Changes

- [`fb58f20`](https://github.com/backstage/backstage/commit/fb58f20): Internal update to use the new `pluginId` option of `createFrontendPlugin`.

#### 0.1.26

##### Patch Changes

- [`e655f62`](https://github.com/backstage/backstage/commit/e655f62): Updated `README.md` to use `yarn start` instead of `yarn dev`.
- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/plugin-events-node` (0.4.8 → [0.4.11](../../changelogs/@backstage/plugin-events-node.md#0411))

#### 0.4.9

##### Patch Changes

- [`b95aa77`](https://github.com/backstage/backstage/commit/b95aa77): add `addHttpPostBodyParser` to events extension to allow body parse customization. This feature will enhance flexibility in handling HTTP POST requests in event-related operations.

### `@backstage/plugin-home` (0.8.5 → [0.8.8](../../changelogs/@backstage/plugin-home.md#088))

#### 0.8.8

##### Patch Changes

- [`f7ca0fe`](https://github.com/backstage/backstage/commit/f7ca0fe): Added the Catalog presentation API to the HomePageRecentlyVisited and HomePageTopVisited components
- [`fb58f20`](https://github.com/backstage/backstage/commit/fb58f20): Internal update to use the new `pluginId` option of `createFrontendPlugin`.
- [`eddd96c`](https://github.com/backstage/backstage/commit/eddd96c): Added optional title prop to `customHomePageGrid`
- [`16eb4bf`](https://github.com/backstage/backstage/commit/16eb4bf): Export ContentModal from `@backstage/plugin-home-react` so people can use this in other scenarios.
  Renamed `CatalogReactComponentsNameToClassKey` to `PluginHomeComponentsNameToClassKey` in `overridableComponents.ts`

  Made QuickStartCard `docsLinkTitle` prop more flexible to allow for any React.JSX.Element instead of just a string.
  Added QuickStartCard prop `additionalContent` which can eventually replace the prop `video`.

- [`2c1761f`](https://github.com/backstage/backstage/commit/2c1761f): Added a `variant` prop to the `WelcomeTitle` component making it work with the Customizable Home page feature. Adding it like this `<WelcomeTitle variant='h1' />` to the list of items under `CustomHomepageGrid` will allow it to render with a size that works well.
- [`195323f`](https://github.com/backstage/backstage/commit/195323f): Export root page route from the home plugin to enable adding links/nav to it from outside the plugin
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos
- [`d710d74`](https://github.com/backstage/backstage/commit/d710d74): docs: Update default for `preventCollision` prop

#### 0.8.7

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

#### 0.8.6

##### Patch Changes

- [`2d11521`](https://github.com/backstage/backstage/commit/2d11521): The starred entities component uses the entity title or display name if it exists

### `@backstage/plugin-home-react` (0.1.23 → [0.1.26](../../changelogs/@backstage/plugin-home-react.md#0126))

#### 0.1.26

##### Patch Changes

- [`16eb4bf`](https://github.com/backstage/backstage/commit/16eb4bf): Export ContentModal from `@backstage/plugin-home-react` so people can use this in other scenarios.
  Renamed `CatalogReactComponentsNameToClassKey` to `PluginHomeComponentsNameToClassKey` in `overridableComponents.ts`

  Made QuickStartCard `docsLinkTitle` prop more flexible to allow for any React.JSX.Element instead of just a string.
  Added QuickStartCard prop `additionalContent` which can eventually replace the prop `video`.

#### 0.1.25

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- [`2e4cb15`](https://github.com/backstage/backstage/commit/2e4cb15): Fixes auto-hiding of content divider when title not specified

#### 0.1.24

##### Patch Changes

- [`c5a82fc`](https://github.com/backstage/backstage/commit/c5a82fc): Don't render header divider on homepage cards if no title was specified.

### `@backstage/plugin-kubernetes` (0.12.4 → [0.12.7](../../changelogs/@backstage/plugin-kubernetes.md#0127))

#### 0.12.7

##### Patch Changes

- [`fb58f20`](https://github.com/backstage/backstage/commit/fb58f20): Internal update to use the new `pluginId` option of `createFrontendPlugin`.
- [`216c6b2`](https://github.com/backstage/backstage/commit/216c6b2): Updated dependency `@kubernetes/client-node` to `1.1.2`.
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

#### 0.12.6

##### Patch Changes

- [`b877e46`](https://github.com/backstage/backstage/commit/b877e46): Added New Frontend System filter for the Kubernetes tab to use `isKubernetesAvailable` to control its visibility
- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

#### 0.12.5

##### Patch Changes

- [`d517d13`](https://github.com/backstage/backstage/commit/d517d13): refactor: use `KUBERNETES_ANNOTATION` and `KUBERNETES_LABEL_SELECTOR_QUERY_ANNOTATION` annotations from `kubernetes-common`
- [`ba9649a`](https://github.com/backstage/backstage/commit/ba9649a): Set deployment as the default group of Kubernetes entity content. It is just an example and shouldn't cause any visual difference since entity page tabs with just one entity content appear as normal tabs.

### `@backstage/plugin-kubernetes-backend` (0.19.3 → [0.19.6](../../changelogs/@backstage/plugin-kubernetes-backend.md#0196))

#### 0.19.6

##### Patch Changes

- [`f6f692c`](https://github.com/backstage/backstage/commit/f6f692c): Changed logging of cluster details to debug to minimise log clutter.
- [`216c6b2`](https://github.com/backstage/backstage/commit/216c6b2): Updated dependency `@kubernetes/client-node` to `1.1.2`.
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

#### 0.19.4

##### Patch Changes

- [`d517d13`](https://github.com/backstage/backstage/commit/d517d13): refactor: use `KUBERNETES_ANNOTATION` and `KUBERNETES_LABEL_SELECTOR_QUERY_ANNOTATION` annotations from `kubernetes-common`

### `@backstage/plugin-kubernetes-common` (0.9.3 → [0.9.5](../../changelogs/@backstage/plugin-kubernetes-common.md#095))

#### 0.9.5

##### Patch Changes

- [`216c6b2`](https://github.com/backstage/backstage/commit/216c6b2): Updated dependency `@kubernetes/client-node` to `1.1.2`.
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

#### 0.9.4

##### Patch Changes

- [`d517d13`](https://github.com/backstage/backstage/commit/d517d13): Export `backstage.io/kubernetes-id` and `backstage.io/kubernetes-label-selector` annotations as constants

### `@backstage/plugin-kubernetes-react` (0.5.4 → [0.5.7](../../changelogs/@backstage/plugin-kubernetes-react.md#057))

#### 0.5.7

##### Patch Changes

- [`599c89e`](https://github.com/backstage/backstage/commit/599c89e): Add headlamp formatter
- [`216c6b2`](https://github.com/backstage/backstage/commit/216c6b2): Updated dependency `@kubernetes/client-node` to `1.1.2`.
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

#### 0.5.6

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/plugin-notifications` (0.5.2 → [0.5.5](../../changelogs/@backstage/plugin-notifications.md#055))

#### 0.5.5

##### Patch Changes

- [`fb58f20`](https://github.com/backstage/backstage/commit/fb58f20): Internal update to use the new `pluginId` option of `createFrontendPlugin`.

#### 0.5.4

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/plugin-notifications-backend` (0.5.3 → [0.5.6](../../changelogs/@backstage/plugin-notifications-backend.md#056))

#### 0.5.5

##### Patch Changes

- [`9a6080e`](https://github.com/backstage/backstage/commit/9a6080e): Allow throttling notification sending not to block the system with huge amount of receiving users

#### 0.5.4

##### Patch Changes

- [`20e8d12`](https://github.com/backstage/backstage/commit/20e8d12): Fix null topics being returned from notification API
- [`425a61d`](https://github.com/backstage/backstage/commit/425a61d): Improved notifications router tests
- [`d4c22b7`](https://github.com/backstage/backstage/commit/d4c22b7): Make sure to post process broadcast notifications even without signals support

### `@backstage/plugin-notifications-backend-module-email` (0.3.6 → [0.3.9](../../changelogs/@backstage/plugin-notifications-backend-module-email.md#039))

#### 0.3.9

##### Patch Changes

- [`aa3a63a`](https://github.com/backstage/backstage/commit/aa3a63a): Enable the ability to configure the endpoint for the SES connection used in the notifications email module. This enables the configuration of alternate endpoints as required, for example for local testing or alternative stacks.

### `@backstage/plugin-org` (0.6.36 → [0.6.39](../../changelogs/@backstage/plugin-org.md#0639))

#### 0.6.39

##### Patch Changes

- [`fb58f20`](https://github.com/backstage/backstage/commit/fb58f20): Internal update to use the new `pluginId` option of `createFrontendPlugin`.
- [`02e8af1`](https://github.com/backstage/backstage/commit/02e8af1): Enhance user profile card configuration:

  - Added a new optional `maxRelations` numerical configuration that controls over how many user groups are shown directly on the profile card:
    - If the setting is omitted, all relations will be shown.
    - If `maxRelations` is set to `0`, the list of user groups is not displayed.
    - If `maxRelations` is set to a positive number, up to that many groups are displayed.
    - If the user belongs to more groups than the specified limit, a clickable link appears that opens a dialog showing all associated user groups.
  - A complementary boolean configuration, `hideIcons`, was added to optionally hide the visual icons associated with each group in the displayed list.
  - Usage example:
    ```yaml
    # Example in app-config.yaml
    app:
      extensions:
        - entity-card:org/user-profile:
            config:
              maxRelations: 5 # (optional) Show up to 5 groups on the card
              hideIcons: true # (optional) Hide the group icons
    ```

- [`08ba448`](https://github.com/backstage/backstage/commit/08ba448): display entity-ref in GroupProfileCard so groups can easily determine their Group ID
- [`18e84c9`](https://github.com/backstage/backstage/commit/18e84c9): Fixed missing spec.profile field on MyGroupsSidebarItem.tsx so the group spec.profile.displayName is shown on the sidebar"
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

#### 0.6.38

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/plugin-org-react` (0.1.35 → [0.1.38](../../changelogs/@backstage/plugin-org-react.md#0138))

#### 0.1.37

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/plugin-permission-react` (0.4.31 → [0.4.34](../../changelogs/@backstage/plugin-permission-react.md#0434))

#### 0.4.33

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/plugin-scaffolder-backend-module-azure` (0.2.6 → [0.2.9](../../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#029))

#### 0.2.8

##### Patch Changes

- [`2bd41ce`](https://github.com/backstage/backstage/commit/2bd41ce): Made "publish:azure" action idempotent

#### 0.2.7

##### Patch Changes

- [`4f8b5b6`](https://github.com/backstage/backstage/commit/4f8b5b6): Allow signing git commits using configured private PGP key in scaffolder

### `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.3.7 → [0.3.10](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket.md#0310))

#### 0.3.10

##### Patch Changes

- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

#### 0.3.9

##### Patch Changes

- [`adfceee`](https://github.com/backstage/backstage/commit/adfceee): Made "publish:bitbucket" action idempotent

#### 0.3.8

##### Patch Changes

- [`4f8b5b6`](https://github.com/backstage/backstage/commit/4f8b5b6): Allow signing git commits using configured private PGP key in scaffolder

### `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.2.6 → [0.2.9](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#029))

#### 0.2.9

##### Patch Changes

- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

#### 0.2.8

##### Patch Changes

- [`5266f1c`](https://github.com/backstage/backstage/commit/5266f1c): Made "publish:bitbucketCloud" action idempotent

#### 0.2.7

##### Patch Changes

- [`c56a279`](https://github.com/backstage/backstage/commit/c56a279): Added `bitbucketCloud:branchRestriction:create` to allow users to create bitbucket cloud branch restrictions in templates
- [`4f8b5b6`](https://github.com/backstage/backstage/commit/4f8b5b6): Allow signing git commits using configured private PGP key in scaffolder
- [`e279c30`](https://github.com/backstage/backstage/commit/e279c30): Fixing spelling mistake in `jsonschema`

### `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.6 → [0.2.9](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#029))

#### 0.2.9

##### Patch Changes

- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

#### 0.2.7

##### Patch Changes

- [`4f8b5b6`](https://github.com/backstage/backstage/commit/4f8b5b6): Allow signing git commits using configured private PGP key in scaffolder

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.6 → [0.3.9](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#039))

#### 0.3.7

##### Patch Changes

- [`09cf038`](https://github.com/backstage/backstage/commit/09cf038): Got rid of most `@backstage/backend-common` usages

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.7 → [0.3.10](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0310))

#### 0.3.8

##### Patch Changes

- [`09cf038`](https://github.com/backstage/backstage/commit/09cf038): Got rid of most `@backstage/backend-common` usages

### `@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.6 → [0.2.9](../../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#029))

#### 0.2.9

##### Patch Changes

- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

#### 0.2.7

##### Patch Changes

- [`4f8b5b6`](https://github.com/backstage/backstage/commit/4f8b5b6): Allow signing git commits using configured private PGP key in scaffolder

### `@backstage/plugin-scaffolder-backend-module-gitea` (0.2.6 → [0.2.9](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#029))

#### 0.2.7

##### Patch Changes

- [`4f8b5b6`](https://github.com/backstage/backstage/commit/4f8b5b6): Allow signing git commits using configured private PGP key in scaffolder

### `@backstage/plugin-scaffolder-backend-module-notifications` (0.1.7 → [0.1.10](../../changelogs/@backstage/plugin-scaffolder-backend-module-notifications.md#0110))

#### 0.1.10

##### Patch Changes

- [`b60253d`](https://github.com/backstage/backstage/commit/b60253d): Change notification send scaffolder action to use native zod schemas

#### 0.1.9

##### Patch Changes

- [`25a7675`](https://github.com/backstage/backstage/commit/25a7675): Made "notification:send" action idempotent

### `@backstage/plugin-scaffolder-backend-module-rails` (0.5.6 → [0.5.9](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#059))

#### 0.5.7

##### Patch Changes

- [`09cf038`](https://github.com/backstage/backstage/commit/09cf038): Got rid of most `@backstage/backend-common` usages

### `@backstage/plugin-scaffolder-backend-module-sentry` (0.2.6 → [0.2.9](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#029))

#### 0.2.8

##### Patch Changes

- [`dcda66a`](https://github.com/backstage/backstage/commit/dcda66a): Made "sentry:project:create" action idempotent

### `@backstage/plugin-search-backend-module-pg` (0.5.41 → [0.5.44](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0544))

#### 0.5.42

##### Patch Changes

- [`8155b04`](https://github.com/backstage/backstage/commit/8155b04): Enable normalization in postgres query to change the behavior of the search.

### `@backstage/plugin-user-settings` (0.8.19 → [0.8.22](../../changelogs/@backstage/plugin-user-settings.md#0822))

#### 0.8.22

##### Patch Changes

- [`a7bfdb6`](https://github.com/backstage/backstage/commit/a7bfdb6): plugin-user-settingsgs support i18n
- [`fb58f20`](https://github.com/backstage/backstage/commit/fb58f20): Internal update to use the new `pluginId` option of `createFrontendPlugin`.
- [`5b04b14`](https://github.com/backstage/backstage/commit/5b04b14): Uppercase language name in language select

#### 0.8.21

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/repo-tools` (0.13.0 → [0.13.4](../../changelogs/@backstage/repo-tools.md#0134))

#### 0.13.3

##### Patch Changes

- [`b229476`](https://github.com/backstage/backstage/commit/b229476): Support passing additional properties to OpenAPI server generator
- [`659f2ce`](https://github.com/backstage/backstage/commit/659f2ce): Updated dependency `typedoc` to `^0.28.0`.
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

#### 0.13.2

##### Patch Changes

- [`18ce51c`](https://github.com/backstage/backstage/commit/18ce51c): Checking up the files where `createRouter` has been declared and check if `@deprecated` tag exists. If it does not exist then only the message will appear.

#### 0.13.1

##### Patch Changes

- [`c7a58b2`](https://github.com/backstage/backstage/commit/c7a58b2): Fix issue where generate-patch incorrectly encodes the locator not aligning with result of yarn patch

### `@backstage/theme` (0.6.4 → [0.6.6](../../changelogs/@backstage/theme.md#066))

#### 0.6.6

##### Patch Changes

- [`1b14572`](https://github.com/backstage/backstage/commit/1b14572): Show arrow when MuiTableSortLabel receives focus

#### 0.6.5

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

## Other minor version bumps

### `@backstage/backend-plugin-api` (1.2.0 → [1.3.1](../../changelogs/@backstage/backend-plugin-api.md#131))

#### 1.3.1

##### Patch Changes

- [`acea1d4`](https://github.com/backstage/backstage/commit/acea1d4): update documentation
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos
- [`d385854`](https://github.com/backstage/backstage/commit/d385854): Minor doc comment update

#### 1.3.0

##### Minor Changes

- [`cf4eb13`](https://github.com/backstage/backstage/commit/cf4eb13): Added `actor` property to `BackstageUserPrincipal` containing the subject of the last service (if any) who performed authentication on behalf of the user.

### `@backstage/backend-test-utils` (1.3.0 → [1.5.0](../../changelogs/@backstage/backend-test-utils.md#150))

#### 1.5.0

##### Minor Changes

- [`b3832d1`](https://github.com/backstage/backstage/commit/b3832d1): Add a functional `mockServices.events()`
- [`c6bc67d`](https://github.com/backstage/backstage/commit/c6bc67d): Added Valkey support alongside Redis in backend-defaults cache clients, using the new Keyv Valkey package. Also extended backend-test-utils to support Valkey in tests.

#### 1.4.0

##### Minor Changes

- [`cf4eb13`](https://github.com/backstage/backstage/commit/cf4eb13): Added `actor` property to `BackstageUserPrincipal` containing the subject of the last service (if any) who performed authentication on behalf of the user.

#### 1.3.1

##### Patch Changes

- [`c3a91d5`](https://github.com/backstage/backstage/commit/c3a91d5): Added support for PostgreSQL version 17
- [`37c6510`](https://github.com/backstage/backstage/commit/37c6510): Moved `@types/jest` to `devDependencies`.

### `@backstage/catalog-client` (1.9.1 → [1.10.0](../../changelogs/@backstage/catalog-client.md#1100))

#### 1.10.0

##### Minor Changes

- [`1a003ff`](https://github.com/backstage/backstage/commit/1a003ff): Add `getLocations` method to `CatalogApi` and `CatalogClient`. This method calls the [`GET /locations`](https://backstage.io/docs/features/software-catalog/software-catalog-api/#get-locations) endpoint from the catalog backend.

### `@backstage/config-loader` (1.9.6 → [1.10.1](../../changelogs/@backstage/config-loader.md#1101))

#### 1.10.1

##### Patch Changes

- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

#### 1.10.0

##### Minor Changes

- [`2fd73aa`](https://github.com/backstage/backstage/commit/2fd73aa): The include transforms applied during config loading will now only apply to the known keys `$file`, `$env`, and `$include`. Any other key that begins with a `# @backstage/config-loader will now be passed through as is.

##### Patch Changes

- [`f422984`](https://github.com/backstage/backstage/commit/f422984): Added `@types/minimist` to `devDependencies`

### `@backstage/core-app-api` (1.15.5 → [1.17.0](../../changelogs/@backstage/core-app-api.md#1170))

#### 1.17.0

##### Minor Changes

- [`1e0230e`](https://github.com/backstage/backstage/commit/1e0230e): Support custom `AuthConnector` for `OAuth2`.

  A user can pass their own `AuthConnector` implementation in `OAuth2` constructor.
  In which case the session manager will use that instead of the `DefaultAuthConnector` to interact with the
  authentication provider.

  A custom `AuthConnector` may call the authentication provider from the front-end, store and retrieve tokens
  in the session storage, for example, and otherwise send custom requests to the authentication provider and
  handle its responses.

  Note, that if the custom `AuthConnector` transforms scopes returned from the authentication provider,
  the transformation must be the same as `OAuth2CreateOptions#scopeTransform` passed to `OAuth2` constructor.
  See creating `DefaultAuthConnector` in `OAuth2#create(...)` for an example.

##### Patch Changes

- [`73f6cc3`](https://github.com/backstage/backstage/commit/73f6cc3): Updated `I18nextTranslationApi` to support interpolation of JSX elements.
- [`cc119b2`](https://github.com/backstage/backstage/commit/cc119b2): Fixed an issue causing `OAuthRequestDialog` to re-render on mount.

#### 1.16.1

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

#### 1.16.0

##### Minor Changes

- [`9262001`](https://github.com/backstage/backstage/commit/9262001): The default auth injection middleware for the `FetchApi` will now also take configuration under `discovery.endpoints` into consideration when deciding whether to include credentials or not.
- [`12f8e01`](https://github.com/backstage/backstage/commit/12f8e01): The `discovery.endpoints` configuration no longer requires both `internal` and `external` target when using the object form, instead falling back to the default.

### `@backstage/integration` (1.16.1 → [1.17.0](../../changelogs/@backstage/integration.md#1170))

#### 1.17.0

##### Minor Changes

- [`d945206`](https://github.com/backstage/backstage/commit/d945206): Added support for federated credentials using managed identities in the Azure DevOps integration. Federated credentials are only available for Azure DevOps organizations that have been configured to use Entra ID for authentication.

  ```diff
  integrations:
    azure:
      - host: dev.azure.com
        credentials:
  +       - clientId: ${APP_REGISTRATION_CLIENT_ID}
  +         managedIdentityClientId: system-assigned
  +         tenantId: ${AZURE_TENANT_ID}
  ```

  This also adds support for automatically using the system-assigned managed identity of an Azure resource by specifying `system-assigned` as the client ID of the managed identity.

  ```diff
  integrations:
    azure:
      - host: dev.azure.com
        credentials:
  -       - clientId: ${AZURE_CLIENT_ID}
  +       - clientId: system-assigned
  ```

- [`f134cea`](https://github.com/backstage/backstage/commit/f134cea): Implement Edit URL feature for Gerrit 3.9+.

  It's possible to disable the edit url by adding the `disableEditUrl: true` config in the Gerrit integration.

##### Patch Changes

- [`f3381d3`](https://github.com/backstage/backstage/commit/f3381d3): Added missing `organizations` property to `azure` section in `config.d.ts` file
- [`acea1d4`](https://github.com/backstage/backstage/commit/acea1d4): update documentation

#### 1.16.3

##### Patch Changes

- [`9768992`](https://github.com/backstage/backstage/commit/9768992): Mark GitHub `webhookSecret` config property as optional. A `webhookSecret` is not required when creating a GitHub App.

#### 1.16.2

##### Patch Changes

- [`89db8b8`](https://github.com/backstage/backstage/commit/89db8b8): Gerrit integration now exports `getGitilesAuthenticationUrl`. This enables its usage by the `GerritUrlReader`.
- [`4f8b5b6`](https://github.com/backstage/backstage/commit/4f8b5b6): Allow signing git commits using configured private PGP key in scaffolder

### `@backstage/plugin-catalog-node` (1.16.0 → [1.17.0](../../changelogs/@backstage/plugin-catalog-node.md#1170))

#### 1.17.0

##### Minor Changes

- [`a459f17`](https://github.com/backstage/backstage/commit/a459f17): Added `parseEntityYaml` from `@backstage/plugin-catalog-backend`, to make it more easily usable by custom plugins and modules
- [`1a003ff`](https://github.com/backstage/backstage/commit/1a003ff): Add `getLocations` method to `CatalogApi` and `CatalogClient`. This method calls the [`GET /locations`](https://backstage.io/docs/features/software-catalog/software-catalog-api/#get-locations) endpoint from the catalog backend.

#### 1.16.3

##### Patch Changes

- [`2c5598c`](https://github.com/backstage/backstage/commit/2c5598c): Adds documentation for the CatalogProcessingExtensionPoint functions.
- [`98b7131`](https://github.com/backstage/backstage/commit/98b7131): Use a different ID for the deprecated alpha version of the catalog service, as it has a different type definition and cannot be used interchangeably with the non-alpha version.

### `@backstage/plugin-scaffolder-backend` (1.30.0 → [1.33.0](../../changelogs/@backstage/plugin-scaffolder-backend.md#1330))

#### 1.33.0

##### Minor Changes

- [`587cb05`](https://github.com/backstage/backstage/commit/587cb05): Added `workspace:template` and `workspace:template:file` actions to complement respective `fetch:*` actions

##### Patch Changes

- [`eb39388`](https://github.com/backstage/backstage/commit/eb39388): Fixed bug in fs:delete that prevented wildcard patterns from matching paths starting with "."
- [`36ae651`](https://github.com/backstage/backstage/commit/36ae651): Fixing a bug where the name for `templatingExtensions` was incorrectly set to `templateExtensions`
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos
- [`ec42f8e`](https://github.com/backstage/backstage/commit/ec42f8e): Generating new tokens on each Scaffolder Task Retry

#### 1.32.0

##### Minor Changes

- [`75e4db4`](https://github.com/backstage/backstage/commit/75e4db4): add template-extensions scaffolder service endpoint

##### Patch Changes

- [`8685cab`](https://github.com/backstage/backstage/commit/8685cab): Added `template` and `step` labels for scaffolder histogram metrics: `scaffolder_task_duration` and `scaffolder_step_duration`
- [`497d47a`](https://github.com/backstage/backstage/commit/497d47a): Document the internal built-in filters, and ensure that the types are validated when using `createTemplateFilter` and `createTemplateGlobalFunction` from the `zod` schema.

#### 1.31.0

##### Minor Changes

- [`36677bb`](https://github.com/backstage/backstage/commit/36677bb): Support new `createTemplateAction` type, and convert `catalog:fetch` action to new way of defining actions.
- [`2b1e50d`](https://github.com/backstage/backstage/commit/2b1e50d): use CreatedTemplate[Filter|Global*] as canonical template extensions in scaffolder plugin

##### Patch Changes

- [`e0b226b`](https://github.com/backstage/backstage/commit/e0b226b): build(deps): bump `esbuild` from 0.24.2 to 0.25.0
- [`09cf038`](https://github.com/backstage/backstage/commit/09cf038): Got rid of most `@backstage/backend-common` usages
- [`4f8b5b6`](https://github.com/backstage/backstage/commit/4f8b5b6): Allow signing git commits using configured private PGP key in scaffolder
- [`59dcf37`](https://github.com/backstage/backstage/commit/59dcf37): Fixed bug in fs:delete causing no files to be deleted on windows machines

### `@backstage/plugin-scaffolder-react` (1.14.5 → [1.16.0](../../changelogs/@backstage/plugin-scaffolder-react.md#1160))

#### 1.16.0

##### Minor Changes

- [`4235e87`](https://github.com/backstage/backstage/commit/4235e87): add templating extensions page

##### Patch Changes

- [`36ae651`](https://github.com/backstage/backstage/commit/36ae651): Fixing a bug where the name for `templatingExtensions` was incorrectly set to `templateExtensions`
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

#### 1.15.0

##### Minor Changes

- [`5890016`](https://github.com/backstage/backstage/commit/5890016): add api to retrieve template extensions info from scaffolder-backend

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- [`6ed42b7`](https://github.com/backstage/backstage/commit/6ed42b7): Scaffolding - Template card - button to show template entity detail
- [`7ae9996`](https://github.com/backstage/backstage/commit/7ae9996): Fixes the detail icon in light theme to be visible in proper color (same as favorite star).

#### 1.14.6

##### Patch Changes

- [`4d26652`](https://github.com/backstage/backstage/commit/4d26652): Fix field extension validation not working when field is in dependencies in an array field
- [`b3b7c9c`](https://github.com/backstage/backstage/commit/b3b7c9c): Deprecated the alpha `ScaffolderFormFieldsApi` and `formFieldsApiRef` as these are being replaced with a different solution.
- [`48aab13`](https://github.com/backstage/backstage/commit/48aab13): Add i18n support for scaffolder-react plugin
- [`3db64ba`](https://github.com/backstage/backstage/commit/3db64ba): Disable the submit button on creating
- [`34ea3f5`](https://github.com/backstage/backstage/commit/34ea3f5): Updated dependency `flatted` to `3.3.3`.

### `@backstage/plugin-search-backend-module-elasticsearch` (1.6.5 → [1.7.2](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#172))

#### 1.7.2

##### Patch Changes

- [`01f772c`](https://github.com/backstage/backstage/commit/01f772c): Fixed an issue where the `search.elasticsearch.queryOptions` config were not picked up by the `ElasticSearchSearchEngine`.
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

#### 1.7.0

##### Minor Changes

- [`5f66007`](https://github.com/backstage/backstage/commit/5f66007): Add the option to configure the fuzziness of the elasticsearch results by defining the fuzziness and `prefix_length` property.

##### Patch Changes

- [`37e5386`](https://github.com/backstage/backstage/commit/37e5386): Allow `indexPrefix` configuration through the `app-config.yaml`

### `@backstage/plugin-search-react` (1.8.6 → [1.9.0](../../changelogs/@backstage/plugin-search-react.md#190))

#### 1.9.0

##### Minor Changes

- [`611c941`](https://github.com/backstage/backstage/commit/611c941): Allow search filters to provide labels and values separately, and not only values

##### Patch Changes

- [`2c76614`](https://github.com/backstage/backstage/commit/2c76614): Fix memoization of `filterValue` in `SearchFilter.Autocomplete` to prevent unintended resets
- [`fa48594`](https://github.com/backstage/backstage/commit/fa48594): search plugin support i18n

#### 1.8.8

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

#### 1.8.7

##### Patch Changes

- [`c37e480`](https://github.com/backstage/backstage/commit/c37e480): Capture the number of search results in the search analytics event that correspond to the term entered.

## Other patch version bumps

### `@backstage/backend-app-api` (1.2.0 → [1.2.3](../../changelogs/@backstage/backend-app-api.md#123))

#### 1.2.3

##### Patch Changes

- [`729a7d6`](https://github.com/backstage/backstage/commit/729a7d6): Added a configuration to permit backend plugin module failures on startup:

  ```yaml
  backend:
    ...
    startup:
      plugins:
        plugin-x:
          modules:
            module-y:
              onPluginModuleBootFailure: continue
  ```

  This configuration permits `plugin-x` with `module-y` to fail on startup. Omitting the
  `onPluginModuleBootFailure` configuration matches the previous behavior, wherein any
  individual plugin module failure is forwarded to the plugin and aborts backend startup.

  The default can also be changed, so that continuing on failure is the default
  unless otherwise specified:

  ```yaml
  backend:
    startup:
      default:
        onPluginModuleBootFailure: continue
      plugins:
        catalog:
          modules:
            github:
              onPluginModuleBootFailure: abort
  ```

- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

#### 1.2.1

##### Patch Changes

- [`f422984`](https://github.com/backstage/backstage/commit/f422984): Remove unused dependencies

### `@backstage/catalog-model` (1.7.3 → [1.7.4](../../changelogs/@backstage/catalog-model.md#174))

#### 1.7.4

##### Patch Changes

- [`ed4e625`](https://github.com/backstage/backstage/commit/ed4e625): Added support for icons containing colons

### `@backstage/core-plugin-api` (1.10.4 → [1.10.7](../../changelogs/@backstage/core-plugin-api.md#1107))

#### 1.10.7

##### Patch Changes

- [`73f6cc3`](https://github.com/backstage/backstage/commit/73f6cc3): The `TranslationApi` now supports interpolation of JSX elements by passing them directly as values to the translation function. If any of the provided interpolation values are JSX elements, the translation function will return a JSX element instead of a string.

#### 1.10.6

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

#### 1.10.5

##### Patch Changes

- [`327d21e`](https://github.com/backstage/backstage/commit/327d21e): Failure to lazy load an extension will now always result in an error being thrown to be forwarded to error boundaries, rather than being rendered using the `BootErrorPage` app component.

### `@backstage/dev-utils` (1.1.7 → [1.1.10](../../changelogs/@backstage/dev-utils.md#1110))

#### 1.1.9

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/integration-react` (1.2.4 → [1.2.7](../../changelogs/@backstage/integration-react.md#127))

#### 1.2.6

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- [`5d10f99`](https://github.com/backstage/backstage/commit/5d10f99): Added scope `project` for Bitbucket Cloud.

### `@backstage/plugin-scaffolder-common` (1.5.9 → [1.5.11](../../changelogs/@backstage/plugin-scaffolder-common.md#1511))

#### 1.5.10

##### Patch Changes

- [`09cf038`](https://github.com/backstage/backstage/commit/09cf038): Got rid of most `@backstage/backend-common` usages
- [`321b93e`](https://github.com/backstage/backstage/commit/321b93e): Add optional `lifecycle` property to the spec field of Template entities.

### `@backstage/plugin-search` (1.4.23 → [1.4.26](../../changelogs/@backstage/plugin-search.md#1426))

#### 1.4.26

##### Patch Changes

- [`fb58f20`](https://github.com/backstage/backstage/commit/fb58f20): Internal update to use the new `pluginId` option of `createFrontendPlugin`.
- [`fa48594`](https://github.com/backstage/backstage/commit/fa48594): search plugin support i18n

#### 1.4.25

##### Patch Changes

- [`e655f62`](https://github.com/backstage/backstage/commit/e655f62): Updated `README.md` to use `yarn start` instead of `yarn dev`.
- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

#### 1.4.24

##### Patch Changes

- [`49684fe`](https://github.com/backstage/backstage/commit/49684fe): Expand the default kind filter to include all kinds from the System Model.

### `@backstage/plugin-techdocs` (1.12.3 → [1.12.6](../../changelogs/@backstage/plugin-techdocs.md#1126))

#### 1.12.6

##### Patch Changes

- [`fb58f20`](https://github.com/backstage/backstage/commit/fb58f20): Internal update to use the new `pluginId` option of `createFrontendPlugin`.
- [`7d445da`](https://github.com/backstage/backstage/commit/7d445da): Update keyboard focus on when clicking hash links. This fixes the issue where the "skip to content" link rendered by Material MkDocs isn't focused when used.
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos
- [`2ffd273`](https://github.com/backstage/backstage/commit/2ffd273): Add hover and focus styling to the "copy to clipboard" button within codeblocks in techdocs. Also added an aria-label to the button for accessibility.

#### 1.12.5

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

#### 1.12.4

##### Patch Changes

- [`fffe3c0`](https://github.com/backstage/backstage/commit/fffe3c0): Fixed double scrollbar issue that would appear on the Entity TechDocs view page that would stop the page from full scrolling to the top when navigating to a new page
- [`065e6b9`](https://github.com/backstage/backstage/commit/065e6b9): Excludes SVG styling from sanitization
- [`b5a8208`](https://github.com/backstage/backstage/commit/b5a8208): Added `TechDocsAddonsBlueprint` extension to allow adding of techdocs addons.
- [`ed1cb3e`](https://github.com/backstage/backstage/commit/ed1cb3e): Adds the page name of techdocs to the document's title.
- [`fe4abb8`](https://github.com/backstage/backstage/commit/fe4abb8): Updates logic to check for SVG sources when inlining them.

### `@backstage/plugin-techdocs-addons-test-utils` (1.0.45 → [1.0.48](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#1048))

#### 1.0.47

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

### `@backstage/plugin-techdocs-module-addons-contrib` (1.1.21 → [1.1.24](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1124))

#### 1.1.23

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- [`9c12a76`](https://github.com/backstage/backstage/commit/9c12a76): Fixed rendering issues in `ReportIssue` addon for unsupported repository types and improved shadow DOM event handling. The addon now properly prevents initialization when encountering unsupported repository types and correctly handles selection events within the shadow DOM.

#### 1.1.22

##### Patch Changes

- [`b5a8208`](https://github.com/backstage/backstage/commit/b5a8208): Added `TechDocsAddonsBlueprint` extension to allow adding of techdocs addons.

### `@backstage/plugin-techdocs-node` (1.13.0 → [1.13.3](../../changelogs/@backstage/plugin-techdocs-node.md#1133))

#### 1.13.3

##### Patch Changes

- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

#### 1.13.2

##### Patch Changes

- [`304a422`](https://github.com/backstage/backstage/commit/304a422): Update AWS file retrieval logic from storing file in buffer array to piping to res for better memory efficiency.
- [`2d7a3b8`](https://github.com/backstage/backstage/commit/2d7a3b8): Update Azure file retrieval logic from storing file in buffer array to piping to res for better memory efficiency.

#### 1.13.1

##### Patch Changes

- [`052a10a`](https://github.com/backstage/backstage/commit/052a10a): Bumps the version of the techdocs generator container used.

### `@backstage/plugin-techdocs-react` (1.2.14 → [1.2.17](../../changelogs/@backstage/plugin-techdocs-react.md#1217))

#### 1.2.17

##### Patch Changes

- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

#### 1.2.16

##### Patch Changes

- [`0e9f7fe`](https://github.com/backstage/backstage/commit/0e9f7fe): Fix catalog entity docs page not loading due to multiple addons data attachment in the New Frontend System.
- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

#### 1.2.15

##### Patch Changes

- [`b5a8208`](https://github.com/backstage/backstage/commit/b5a8208): Added `TechDocsAddonsBlueprint` extension to allow adding of techdocs addons.

### `@backstage/test-utils` (1.7.5 → [1.7.8](../../changelogs/@backstage/test-utils.md#178))

#### 1.7.8

##### Patch Changes

- [`b573341`](https://github.com/backstage/backstage/commit/b573341): Added support for interpolating JSX elements with the `MockTranslationApi`.

#### 1.7.7

##### Patch Changes

- [`a47fd39`](https://github.com/backstage/backstage/commit/a47fd39): Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

#### 1.7.6

##### Patch Changes

- [`37c6510`](https://github.com/backstage/backstage/commit/37c6510): Moved `@types/jest` to `devDependencies`.

## Excluded dependency updates

- `@backstage/backend-openapi-utils` (0.5.0 → [0.5.3](../../changelogs/@backstage/backend-openapi-utils.md#053))
- `@backstage/plugin-app-node` (0.1.30 → [0.1.33](../../changelogs/@backstage/plugin-app-node.md#0133))
- `@backstage/plugin-auth-backend-module-auth0-provider` (0.2.0 → [0.2.3](../../changelogs/@backstage/plugin-auth-backend-module-auth0-provider.md#023))
- `@backstage/plugin-auth-backend-module-guest-provider` (0.2.5 → [0.2.8](../../changelogs/@backstage/plugin-auth-backend-module-guest-provider.md#028))
- `@backstage/plugin-auth-backend-module-pinniped-provider` (0.3.0 → [0.3.3](../../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#033))
- `@backstage/plugin-catalog-backend-module-gcp` (0.3.5 → [0.3.8](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#038))
- `@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.6 → [0.2.9](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab-org.md#029))
- `@backstage/plugin-catalog-backend-module-openapi` (0.2.7 → [0.2.10](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0210))
- `@backstage/plugin-catalog-backend-module-puppetdb` (0.2.7 → [0.2.10](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0210))
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.2.5 → [0.2.8](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#028))
- `@backstage/plugin-catalog-common` (1.1.3 → [1.1.4](../../changelogs/@backstage/plugin-catalog-common.md#114))
- `@backstage/plugin-catalog-unprocessed-entities-common` (0.0.7 → [0.0.8](../../changelogs/@backstage/plugin-catalog-unprocessed-entities-common.md#008))
- `@backstage/plugin-devtools-backend` (0.5.2 → [0.5.5](../../changelogs/@backstage/plugin-devtools-backend.md#055))
- `@backstage/plugin-devtools-common` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-devtools-common.md#0116))
- `@backstage/plugin-events-backend-module-aws-sqs` (0.4.8 → [0.4.11](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#0411))
- `@backstage/plugin-events-backend-module-azure` (0.2.17 → [0.2.20](../../changelogs/@backstage/plugin-events-backend-module-azure.md#0220))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.17 → [0.2.20](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0220))
- `@backstage/plugin-events-backend-module-gerrit` (0.2.17 → [0.2.20](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0220))
- `@backstage/plugin-events-backend-test-utils` (0.1.41 → [0.1.44](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0144))
- `@backstage/plugin-notifications-node` (0.2.12 → [0.2.15](../../changelogs/@backstage/plugin-notifications-node.md#0215))
- `@backstage/plugin-permission-backend-module-allow-all-policy` (0.2.5 → [0.2.8](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#028))
- `@backstage/plugin-proxy-node` (0.1.1 → [0.1.4](../../changelogs/@backstage/plugin-proxy-node.md#014))
- `@backstage/plugin-scaffolder-backend-module-gcp` (0.2.6 → [0.2.9](../../changelogs/@backstage/plugin-scaffolder-backend-module-gcp.md#029))
- `@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.7 → [0.4.10](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0410))
- `@backstage/plugin-search-backend-module-catalog` (0.3.1 → [0.3.4](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#034))
- `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.3.6 → [0.3.9](../../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#039))
- `@backstage/plugin-search-backend-node` (1.3.8 → [1.3.11](../../changelogs/@backstage/plugin-search-backend-node.md#1311))
- `@backstage/plugin-search-common` (1.2.17 → [1.2.18](../../changelogs/@backstage/plugin-search-common.md#1218))
- `@backstage/plugin-signals-backend` (0.3.1 → [0.3.4](../../changelogs/@backstage/plugin-signals-backend.md#034))
- `@backstage/plugin-signals-node` (0.1.17 → [0.1.20](../../changelogs/@backstage/plugin-signals-node.md#0120))
- `@backstage/plugin-signals-react` (0.0.10 → [0.0.13](../../changelogs/@backstage/plugin-signals-react.md#0013))
- `@techdocs/cli` (1.9.0 → [1.9.3](../../changelogs/@techdocs/cli.md#193))
