# Backstage Release 1.31.0 changelog

Changes between 1.30.4 and 1.31.0 — 158 changed and 4 added packages.

## Summary

- [Newly added packages](#newly-added-packages): 4 packages
- [Breaking changes](#breaking-changes): 62 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 3 packages
- [Minor version bumps](#minor-version-bumps): 15 packages
- [Other patch version bumps](#other-patch-version-bumps): 68 packages
- [Excluded dependency updates](#excluded-dependency-updates): 10 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/frontend-defaults` (new, 0.1.0)](#backstagefrontend-defaults-new-010)
  - [`@backstage/plugin-app` (new, 0.1.0)](#backstageplugin-app-new-010)
  - [`@backstage/plugin-auth-backend-module-auth0-provider` (new, 0.1.0)](#backstageplugin-auth-backend-module-auth0-provider-new-010)
  - [`@backstage/plugin-auth-backend-module-bitbucket-server-provider` (new, 0.1.0)](#backstageplugin-auth-backend-module-bitbucket-server-provider-new-010)
- [Breaking changes](#breaking-changes)
  - [`@backstage/backend-app-api` (0.9.3 → 1.0.0)](#backstagebackend-app-api-093--100)
  - [`@backstage/backend-common` (0.24.1 → 0.25.0)](#backstagebackend-common-0241--0250)
  - [`@backstage/backend-defaults` (0.4.4 → 0.5.0)](#backstagebackend-defaults-044--050)
  - [`@backstage/backend-dynamic-feature-service` (0.3.2 → 0.4.0)](#backstagebackend-dynamic-feature-service-032--040)
  - [`@backstage/backend-plugin-api` (0.8.1 → 1.0.0)](#backstagebackend-plugin-api-081--100)
  - [`@backstage/backend-test-utils` (0.5.1 → 1.0.0)](#backstagebackend-test-utils-051--100)
  - [`@backstage/core-compat-api` (0.2.8 → 0.3.0)](#backstagecore-compat-api-028--030)
  - [`@backstage/core-components` (0.14.10 → 0.15.0)](#backstagecore-components-01410--0150)
  - [`@backstage/frontend-app-api` (0.8.0 → 0.9.0)](#backstagefrontend-app-api-080--090)
  - [`@backstage/frontend-plugin-api` (0.7.0 → 0.8.0)](#backstagefrontend-plugin-api-070--080)
  - [`@backstage/frontend-test-utils` (0.1.12 → 0.2.0)](#backstagefrontend-test-utils-0112--020)
  - [`@backstage/plugin-app-backend` (0.3.73 → 0.3.74)](#backstageplugin-app-backend-0373--0374)
  - [`@backstage/plugin-auth-backend` (0.22.12 → 0.23.0)](#backstageplugin-auth-backend-02212--0230)
  - [`@backstage/plugin-auth-backend-module-atlassian-provider` (0.2.5 → 0.3.0)](#backstageplugin-auth-backend-module-atlassian-provider-025--030)
  - [`@backstage/plugin-auth-backend-module-aws-alb-provider` (0.1.17 → 0.2.0)](#backstageplugin-auth-backend-module-aws-alb-provider-0117--020)
  - [`@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.1.7 → 0.2.0)](#backstageplugin-auth-backend-module-azure-easyauth-provider-017--020)
  - [`@backstage/plugin-auth-backend-module-bitbucket-provider` (0.1.7 → 0.2.0)](#backstageplugin-auth-backend-module-bitbucket-provider-017--020)
  - [`@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.2.1 → 0.3.0)](#backstageplugin-auth-backend-module-cloudflare-access-provider-021--030)
  - [`@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.2.19 → 0.3.0)](#backstageplugin-auth-backend-module-gcp-iap-provider-0219--030)
  - [`@backstage/plugin-auth-backend-module-github-provider` (0.1.21 → 0.2.0)](#backstageplugin-auth-backend-module-github-provider-0121--020)
  - [`@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.21 → 0.2.0)](#backstageplugin-auth-backend-module-gitlab-provider-0121--020)
  - [`@backstage/plugin-auth-backend-module-google-provider` (0.1.21 → 0.2.0)](#backstageplugin-auth-backend-module-google-provider-0121--020)
  - [`@backstage/plugin-auth-backend-module-guest-provider` (0.1.10 → 0.2.0)](#backstageplugin-auth-backend-module-guest-provider-0110--020)
  - [`@backstage/plugin-auth-backend-module-microsoft-provider` (0.1.19 → 0.2.0)](#backstageplugin-auth-backend-module-microsoft-provider-0119--020)
  - [`@backstage/plugin-auth-backend-module-oauth2-provider` (0.2.5 → 0.3.0)](#backstageplugin-auth-backend-module-oauth2-provider-025--030)
  - [`@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.1.17 → 0.2.0)](#backstageplugin-auth-backend-module-oauth2-proxy-provider-0117--020)
  - [`@backstage/plugin-auth-backend-module-oidc-provider` (0.2.6 → 0.3.0)](#backstageplugin-auth-backend-module-oidc-provider-026--030)
  - [`@backstage/plugin-auth-backend-module-okta-provider` (0.0.17 → 0.1.0)](#backstageplugin-auth-backend-module-okta-provider-0017--010)
  - [`@backstage/plugin-auth-backend-module-onelogin-provider` (0.1.5 → 0.2.0)](#backstageplugin-auth-backend-module-onelogin-provider-015--020)
  - [`@backstage/plugin-auth-backend-module-pinniped-provider` (0.1.18 → 0.2.0)](#backstageplugin-auth-backend-module-pinniped-provider-0118--020)
  - [`@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.2.5 → 0.3.0)](#backstageplugin-auth-backend-module-vmware-cloud-provider-025--030)
  - [`@backstage/plugin-catalog-backend-module-backstage-openapi` (0.3.1 → 0.4.0)](#backstageplugin-catalog-backend-module-backstage-openapi-031--040)
  - [`@backstage/plugin-catalog-backend-module-gcp` (0.2.1 → 0.3.0)](#backstageplugin-catalog-backend-module-gcp-021--030)
  - [`@backstage/plugin-catalog-backend-module-github-org` (0.2.2 → 0.3.0)](#backstageplugin-catalog-backend-module-github-org-022--030)
  - [`@backstage/plugin-catalog-backend-module-gitlab-org` (0.1.1 → 0.2.0)](#backstageplugin-catalog-backend-module-gitlab-org-011--020)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.8.1 → 0.9.0)](#backstageplugin-catalog-backend-module-ldap-081--090)
  - [`@backstage/plugin-catalog-backend-module-logs` (0.0.4 → 0.1.0)](#backstageplugin-catalog-backend-module-logs-004--010)
  - [`@backstage/plugin-catalog-backend-module-openapi` (0.1.43 → 0.2.0)](#backstageplugin-catalog-backend-module-openapi-0143--020)
  - [`@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.22 → 0.2.0)](#backstageplugin-catalog-backend-module-scaffolder-entity-model-0122--020)
  - [`@backstage/plugin-catalog-backend-module-unprocessed` (0.4.11 → 0.5.0)](#backstageplugin-catalog-backend-module-unprocessed-0411--050)
  - [`@backstage/plugin-devtools-backend` (0.3.10 → 0.4.0)](#backstageplugin-devtools-backend-0310--040)
  - [`@backstage/plugin-events-node` (0.3.10 → 0.4.0)](#backstageplugin-events-node-0310--040)
  - [`@backstage/plugin-notifications-backend` (0.3.5 → 0.4.0)](#backstageplugin-notifications-backend-035--040)
  - [`@backstage/plugin-notifications-backend-module-email` (0.2.1 → 0.3.0)](#backstageplugin-notifications-backend-module-email-021--030)
  - [`@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.21 → 0.2.0)](#backstageplugin-permission-backend-module-allow-all-policy-0121--020)
  - [`@backstage/plugin-scaffolder-backend-module-azure` (0.1.16 → 0.2.0)](#backstageplugin-scaffolder-backend-module-azure-0116--020)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket` (0.2.14 → 0.3.0)](#backstageplugin-scaffolder-backend-module-bitbucket-0214--030)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.1.14 → 0.2.0)](#backstageplugin-scaffolder-backend-module-bitbucket-cloud-0114--020)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.1.14 → 0.2.0)](#backstageplugin-scaffolder-backend-module-bitbucket-server-0114--020)
  - [`@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.25 → 0.3.0)](#backstageplugin-scaffolder-backend-module-confluence-to-markdown-0225--030)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.48 → 0.3.0)](#backstageplugin-scaffolder-backend-module-cookiecutter-0248--030)
  - [`@backstage/plugin-scaffolder-backend-module-gcp` (0.1.2 → 0.2.0)](#backstageplugin-scaffolder-backend-module-gcp-012--020)
  - [`@backstage/plugin-scaffolder-backend-module-gerrit` (0.1.16 → 0.2.0)](#backstageplugin-scaffolder-backend-module-gerrit-0116--020)
  - [`@backstage/plugin-scaffolder-backend-module-gitea` (0.1.14 → 0.2.0)](#backstageplugin-scaffolder-backend-module-gitea-0114--020)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.4.2 → 0.5.0)](#backstageplugin-scaffolder-backend-module-github-042--050)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.4.6 → 0.5.0)](#backstageplugin-scaffolder-backend-module-gitlab-046--050)
  - [`@backstage/plugin-scaffolder-backend-module-notifications` (0.0.7 → 0.1.0)](#backstageplugin-scaffolder-backend-module-notifications-007--010)
  - [`@backstage/plugin-scaffolder-backend-module-rails` (0.4.41 → 0.5.0)](#backstageplugin-scaffolder-backend-module-rails-0441--050)
  - [`@backstage/plugin-scaffolder-backend-module-sentry` (0.1.32 → 0.2.0)](#backstageplugin-scaffolder-backend-module-sentry-0132--020)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.3.8 → 0.4.0)](#backstageplugin-scaffolder-backend-module-yeoman-038--040)
  - [`@backstage/plugin-search-backend-module-stack-overflow-collator` (0.2.1 → 0.3.0)](#backstageplugin-search-backend-module-stack-overflow-collator-021--030)
  - [`@backstage/plugin-signals-backend` (0.1.10 → 0.2.0)](#backstageplugin-signals-backend-0110--020)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-kubernetes-cluster` (0.0.14 → 0.0.15)](#backstageplugin-kubernetes-cluster-0014--0015)
  - [`@backstage/plugin-signals` (0.0.9 → 0.0.10)](#backstageplugin-signals-009--0010)
  - [`@backstage/plugin-signals-react` (0.0.4 → 0.0.5)](#backstageplugin-signals-react-004--005)
- [Minor version bumps](#minor-version-bumps)
  - [`@backstage/catalog-client` (1.6.6 → 1.7.0)](#backstagecatalog-client-166--170)
  - [`@backstage/catalog-model` (1.6.0 → 1.7.0)](#backstagecatalog-model-160--170)
  - [`@backstage/core-app-api` (1.14.2 → 1.15.0)](#backstagecore-app-api-1142--1150)
  - [`@backstage/dev-utils` (1.0.37 → 1.1.0)](#backstagedev-utils-1037--110)
  - [`@backstage/integration` (1.14.0 → 1.15.0)](#backstageintegration-1140--1150)
  - [`@backstage/plugin-catalog` (1.22.0 → 1.23.0)](#backstageplugin-catalog-1220--1230)
  - [`@backstage/plugin-catalog-backend` (1.25.2 → 1.26.0)](#backstageplugin-catalog-backend-1252--1260)
  - [`@backstage/plugin-catalog-common` (1.0.26 → 1.1.0)](#backstageplugin-catalog-common-1026--110)
  - [`@backstage/plugin-catalog-node` (1.12.6 → 1.13.0)](#backstageplugin-catalog-node-1126--1130)
  - [`@backstage/plugin-catalog-react` (1.12.3 → 1.13.0)](#backstageplugin-catalog-react-1123--1130)
  - [`@backstage/plugin-scaffolder` (1.24.0 → 1.25.0)](#backstageplugin-scaffolder-1240--1250)
  - [`@backstage/plugin-scaffolder-backend` (1.24.1 → 1.25.0)](#backstageplugin-scaffolder-backend-1241--1250)
  - [`@backstage/plugin-scaffolder-react` (1.11.0 → 1.12.0)](#backstageplugin-scaffolder-react-1110--1120)
  - [`@backstage/plugin-search-react` (1.7.14 → 1.8.0)](#backstageplugin-search-react-1714--180)
  - [`@backstage/test-utils` (1.5.10 → 1.6.0)](#backstagetest-utils-1510--160)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/app-defaults` (1.5.10 → 1.5.11)](#backstageapp-defaults-1510--1511)
  - [`@backstage/backend-openapi-utils` (0.1.17 → 0.1.18)](#backstagebackend-openapi-utils-0117--0118)
  - [`@backstage/cli` (0.27.0 → 0.27.1)](#backstagecli-0270--0271)
  - [`@backstage/cli-node` (0.2.7 → 0.2.8)](#backstagecli-node-027--028)
  - [`@backstage/codemods` (0.1.49 → 0.1.50)](#backstagecodemods-0149--0150)
  - [`@backstage/config-loader` (1.9.0 → 1.9.1)](#backstageconfig-loader-190--191)
  - [`@backstage/core-plugin-api` (1.9.3 → 1.9.4)](#backstagecore-plugin-api-193--194)
  - [`@backstage/create-app` (0.5.18 → 0.5.19)](#backstagecreate-app-0518--0519)
  - [`@backstage/eslint-plugin` (0.1.8 → 0.1.9)](#backstageeslint-plugin-018--019)
  - [`@backstage/integration-react` (1.1.30 → 1.1.31)](#backstageintegration-react-1130--1131)
  - [`@backstage/plugin-api-docs` (0.11.8 → 0.11.9)](#backstageplugin-api-docs-0118--0119)
  - [`@backstage/plugin-app-node` (0.1.24 → 0.1.25)](#backstageplugin-app-node-0124--0125)
  - [`@backstage/plugin-auth-node` (0.5.1 → 0.5.2)](#backstageplugin-auth-node-051--052)
  - [`@backstage/plugin-auth-react` (0.1.5 → 0.1.6)](#backstageplugin-auth-react-015--016)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.4.1 → 0.4.2)](#backstageplugin-catalog-backend-module-aws-041--042)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.2.1 → 0.2.2)](#backstageplugin-catalog-backend-module-azure-021--022)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.3.1 → 0.3.2)](#backstageplugin-catalog-backend-module-bitbucket-cloud-031--032)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.2.1 → 0.2.2)](#backstageplugin-catalog-backend-module-bitbucket-server-021--022)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (0.2.1 → 0.2.2)](#backstageplugin-catalog-backend-module-gerrit-021--022)
  - [`@backstage/plugin-catalog-backend-module-github` (0.7.2 → 0.7.3)](#backstageplugin-catalog-backend-module-github-072--073)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.4.1 → 0.4.2)](#backstageplugin-catalog-backend-module-gitlab-041--042)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.5.2 → 0.5.3)](#backstageplugin-catalog-backend-module-incremental-ingestion-052--053)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.6.1 → 0.6.2)](#backstageplugin-catalog-backend-module-msgraph-061--062)
  - [`@backstage/plugin-catalog-backend-module-puppetdb` (0.2.1 → 0.2.2)](#backstageplugin-catalog-backend-module-puppetdb-021--022)
  - [`@backstage/plugin-catalog-graph` (0.4.8 → 0.4.9)](#backstageplugin-catalog-graph-048--049)
  - [`@backstage/plugin-catalog-import` (0.12.2 → 0.12.3)](#backstageplugin-catalog-import-0122--0123)
  - [`@backstage/plugin-catalog-unprocessed-entities` (0.2.7 → 0.2.8)](#backstageplugin-catalog-unprocessed-entities-027--028)
  - [`@backstage/plugin-config-schema` (0.1.58 → 0.1.59)](#backstageplugin-config-schema-0158--0159)
  - [`@backstage/plugin-devtools` (0.1.17 → 0.1.18)](#backstageplugin-devtools-0117--0118)
  - [`@backstage/plugin-events-backend` (0.3.11 → 0.3.12)](#backstageplugin-events-backend-0311--0312)
  - [`@backstage/plugin-events-backend-module-aws-sqs` (0.4.1 → 0.4.2)](#backstageplugin-events-backend-module-aws-sqs-041--042)
  - [`@backstage/plugin-events-backend-module-azure` (0.2.10 → 0.2.11)](#backstageplugin-events-backend-module-azure-0210--0211)
  - [`@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.10 → 0.2.11)](#backstageplugin-events-backend-module-bitbucket-cloud-0210--0211)
  - [`@backstage/plugin-events-backend-module-gerrit` (0.2.10 → 0.2.11)](#backstageplugin-events-backend-module-gerrit-0210--0211)
  - [`@backstage/plugin-events-backend-module-github` (0.2.10 → 0.2.11)](#backstageplugin-events-backend-module-github-0210--0211)
  - [`@backstage/plugin-events-backend-module-gitlab` (0.2.10 → 0.2.11)](#backstageplugin-events-backend-module-gitlab-0210--0211)
  - [`@backstage/plugin-home` (0.7.9 → 0.7.10)](#backstageplugin-home-079--0710)
  - [`@backstage/plugin-home-react` (0.1.16 → 0.1.17)](#backstageplugin-home-react-0116--0117)
  - [`@backstage/plugin-kubernetes` (0.11.13 → 0.11.14)](#backstageplugin-kubernetes-01113--01114)
  - [`@backstage/plugin-kubernetes-backend` (0.18.5 → 0.18.6)](#backstageplugin-kubernetes-backend-0185--0186)
  - [`@backstage/plugin-kubernetes-node` (0.1.18 → 0.1.19)](#backstageplugin-kubernetes-node-0118--0119)
  - [`@backstage/plugin-kubernetes-react` (0.4.2 → 0.4.3)](#backstageplugin-kubernetes-react-042--043)
  - [`@backstage/plugin-notifications` (0.3.0 → 0.3.1)](#backstageplugin-notifications-030--031)
  - [`@backstage/plugin-org` (0.6.28 → 0.6.29)](#backstageplugin-org-0628--0629)
  - [`@backstage/plugin-org-react` (0.1.27 → 0.1.28)](#backstageplugin-org-react-0127--0128)
  - [`@backstage/plugin-permission-backend` (0.5.48 → 0.5.49)](#backstageplugin-permission-backend-0548--0549)
  - [`@backstage/plugin-permission-node` (0.8.2 → 0.8.3)](#backstageplugin-permission-node-082--083)
  - [`@backstage/plugin-permission-react` (0.4.25 → 0.4.26)](#backstageplugin-permission-react-0425--0426)
  - [`@backstage/plugin-proxy-backend` (0.5.5 → 0.5.6)](#backstageplugin-proxy-backend-055--056)
  - [`@backstage/plugin-search` (1.4.15 → 1.4.16)](#backstageplugin-search-1415--1416)
  - [`@backstage/plugin-search-backend` (1.5.16 → 1.5.17)](#backstageplugin-search-backend-1516--1517)
  - [`@backstage/plugin-search-backend-module-catalog` (0.2.1 → 0.2.2)](#backstageplugin-search-backend-module-catalog-021--022)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.5.5 → 1.5.6)](#backstageplugin-search-backend-module-elasticsearch-155--156)
  - [`@backstage/plugin-search-backend-module-explore` (0.2.1 → 0.2.2)](#backstageplugin-search-backend-module-explore-021--022)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.34 → 0.5.35)](#backstageplugin-search-backend-module-pg-0534--0535)
  - [`@backstage/plugin-search-backend-module-techdocs` (0.2.1 → 0.2.2)](#backstageplugin-search-backend-module-techdocs-021--022)
  - [`@backstage/plugin-signals-node` (0.1.10 → 0.1.11)](#backstageplugin-signals-node-0110--0111)
  - [`@backstage/plugin-techdocs` (1.10.8 → 1.10.9)](#backstageplugin-techdocs-1108--1109)
  - [`@backstage/plugin-techdocs-addons-test-utils` (1.0.37 → 1.0.38)](#backstageplugin-techdocs-addons-test-utils-1037--1038)
  - [`@backstage/plugin-techdocs-backend` (1.10.12 → 1.10.13)](#backstageplugin-techdocs-backend-11012--11013)
  - [`@backstage/plugin-techdocs-module-addons-contrib` (1.1.13 → 1.1.14)](#backstageplugin-techdocs-module-addons-contrib-1113--1114)
  - [`@backstage/plugin-techdocs-node` (1.12.10 → 1.12.11)](#backstageplugin-techdocs-node-11210--11211)
  - [`@backstage/plugin-techdocs-react` (1.2.7 → 1.2.8)](#backstageplugin-techdocs-react-127--128)
  - [`@backstage/plugin-user-settings` (0.8.11 → 0.8.12)](#backstageplugin-user-settings-0811--0812)
  - [`@backstage/plugin-user-settings-backend` (0.2.23 → 0.2.24)](#backstageplugin-user-settings-backend-0223--0224)
  - [`@backstage/repo-tools` (0.9.6 → 0.9.7)](#backstagerepo-tools-096--097)
  - [`@backstage/theme` (0.5.6 → 0.5.7)](#backstagetheme-056--057)
  - [`@backstage/version-bridge` (1.0.8 → 1.0.9)](#backstageversion-bridge-108--109)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/frontend-defaults` (new, [0.1.0](../../changelogs/@backstage/frontend-defaults.md#010))

#### 0.1.0

##### Minor Changes

- [`7c80650`](https://github.com/backstage/backstage/commit/7c80650): Initial release of this package, which provides a default app setup through the `createApp` function. This replaces the existing `createApp` method from `@backstage/frontend-app-api`.

##### Patch Changes

- [`7d19cd5`](https://github.com/backstage/backstage/commit/7d19cd5): Added a new `CreateAppOptions` type for the `createApp` options.
- [`7d19cd5`](https://github.com/backstage/backstage/commit/7d19cd5): Added `createPublicSignInApp`, used to creating apps for the public entry point.
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

### `@backstage/plugin-app` (new, [0.1.0](../../changelogs/@backstage/plugin-app.md#010))

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

### `@backstage/plugin-auth-backend-module-auth0-provider` (new, [0.1.0](../../changelogs/@backstage/plugin-auth-backend-module-auth0-provider.md#010))

#### 0.1.0

##### Minor Changes

- [`d908d8c`](https://github.com/backstage/backstage/commit/d908d8c): New module for `@backstage/plugin-auth-backend` that adds a Auth0 auth provider.

##### Patch Changes

- [`0a3a13e`](https://github.com/backstage/backstage/commit/0a3a13e): Updated dependency `supertest` to `^7.0.0`.

### `@backstage/plugin-auth-backend-module-bitbucket-server-provider` (new, [0.1.0](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-server-provider.md#010))

#### 0.1.0

##### Minor Changes

- [`527d973`](https://github.com/backstage/backstage/commit/527d973): New module for `@backstage/plugin-auth-backend` that adds a `Bitbucket Server` auth provider.

##### Patch Changes

- [`0a3a13e`](https://github.com/backstage/backstage/commit/0a3a13e): Updated dependency `supertest` to `^7.0.0`.

## Breaking changes

### `@backstage/backend-app-api` (0.9.3 → [1.0.0](../../changelogs/@backstage/backend-app-api.md#100))

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

### `@backstage/backend-common` (0.24.1 → [0.25.0](../../changelogs/@backstage/backend-common.md#0250))

#### 0.25.0

##### Minor Changes

- [`a4bac3c`](https://github.com/backstage/backstage/commit/a4bac3c): **BREAKING**: You can no longer supply a `basePath` option to the host discovery implementation. In the new backend system, the ability to choose this path has been removed anyway at the plugin router level.
- [`988c145`](https://github.com/backstage/backstage/commit/988c145): **BREAKING**: Simplifications and cleanup as part of the Backend System 1.0 work.

  - The deprecated `dropDatabase` function has now been removed, without replacement.

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`6ed9264`](https://github.com/backstage/backstage/commit/6ed9264): chore(deps): bump `path-to-regexp` from 6.2.2 to 8.0.0
- [`8ba77ed`](https://github.com/backstage/backstage/commit/8ba77ed): The `legacyPlugin` and `makeLegacyPlugin` helpers now provide their own shim implementation of the identity and token manager services, as these services are being removed from the new backend system.
- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- [`2e9ec14`](https://github.com/backstage/backstage/commit/2e9ec14): Add `pg-format` as a dependency
- [`82539fe`](https://github.com/backstage/backstage/commit/82539fe): Updated dependency `archiver` to `^7.0.0`.
- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.
- [`3606843`](https://github.com/backstage/backstage/commit/3606843): Internal fixes to match `testcontainers` update
- [`19ff127`](https://github.com/backstage/backstage/commit/19ff127): Internal refactor to re-declare the token manager service which was removed from `@backstage/backend-plugin-api`, but is still supported in this package for backwards compatibility.
- [`66dbf0a`](https://github.com/backstage/backstage/commit/66dbf0a): Allow the cache service to accept the human duration format for TTL
- [`0b2a402`](https://github.com/backstage/backstage/commit/0b2a402): Updates to the config schema to match reality

### `@backstage/backend-defaults` (0.4.4 → [0.5.0](../../changelogs/@backstage/backend-defaults.md#050))

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

### `@backstage/backend-dynamic-feature-service` (0.3.2 → [0.4.0](../../changelogs/@backstage/backend-dynamic-feature-service.md#040))

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

### `@backstage/backend-plugin-api` (0.8.1 → [1.0.0](../../changelogs/@backstage/backend-plugin-api.md#100))

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

### `@backstage/backend-test-utils` (0.5.1 → [1.0.0](../../changelogs/@backstage/backend-test-utils.md#100))

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

### `@backstage/core-compat-api` (0.2.8 → [0.3.0](../../changelogs/@backstage/core-compat-api.md#030))

#### 0.3.0

##### Minor Changes

- [`6db849e`](https://github.com/backstage/backstage/commit/6db849e): **BREAKING**: The `namespace` parameter for API's is now defaulted to the `pluginId` which was discovered. This means that if you're overriding API's by using ID's directly, they might have changed to include the plugin ID too.

##### Patch Changes

- [`fec8b57`](https://github.com/backstage/backstage/commit/fec8b57): Updated exports to use the new type parameters for extensions and extension blueprints.
- [`c816e2d`](https://github.com/backstage/backstage/commit/c816e2d): Added support for new `FrontendPlugin` and `FrontendModule` types.
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

### `@backstage/core-components` (0.14.10 → [0.15.0](../../changelogs/@backstage/core-components.md#0150))

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

### `@backstage/frontend-app-api` (0.8.0 → [0.9.0](../../changelogs/@backstage/frontend-app-api.md#090))

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

### `@backstage/frontend-plugin-api` (0.7.0 → [0.8.0](../../changelogs/@backstage/frontend-plugin-api.md#080))

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

### `@backstage/frontend-test-utils` (0.1.12 → [0.2.0](../../changelogs/@backstage/frontend-test-utils.md#020))

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

### `@backstage/plugin-app-backend` (0.3.73 → [0.3.74](../../changelogs/@backstage/plugin-app-backend.md#0374))

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

### `@backstage/plugin-auth-backend` (0.22.12 → [0.23.0](../../changelogs/@backstage/plugin-auth-backend.md#0230))

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

### `@backstage/plugin-auth-backend-module-atlassian-provider` (0.2.5 → [0.3.0](../../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#030))

#### 0.3.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

### `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.1.17 → [0.2.0](../../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#020))

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`ecbc47e`](https://github.com/backstage/backstage/commit/ecbc47e): Fix a bug where the signer was checked from the payload instead of the header
- [`8d1fb8d`](https://github.com/backstage/backstage/commit/8d1fb8d): Throw correct error when email is missing from the claims

### `@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.1.7 → [0.2.0](../../changelogs/@backstage/plugin-auth-backend-module-azure-easyauth-provider.md#020))

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

### `@backstage/plugin-auth-backend-module-bitbucket-provider` (0.1.7 → [0.2.0](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-provider.md#020))

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

### `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.2.1 → [0.3.0](../../changelogs/@backstage/plugin-auth-backend-module-cloudflare-access-provider.md#030))

#### 0.3.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

### `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.2.19 → [0.3.0](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#030))

#### 0.3.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

### `@backstage/plugin-auth-backend-module-github-provider` (0.1.21 → [0.2.0](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#020))

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

### `@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.21 → [0.2.0](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#020))

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

### `@backstage/plugin-auth-backend-module-google-provider` (0.1.21 → [0.2.0](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#020))

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

### `@backstage/plugin-auth-backend-module-guest-provider` (0.1.10 → [0.2.0](../../changelogs/@backstage/plugin-auth-backend-module-guest-provider.md#020))

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`339c67d`](https://github.com/backstage/backstage/commit/339c67d): This provider will now reject authentication attempts rather than halt backend startup when `dangerouslyAllowOutsideDevelopment` is not set in production.

### `@backstage/plugin-auth-backend-module-microsoft-provider` (0.1.19 → [0.2.0](../../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#020))

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`3c2d690`](https://github.com/backstage/backstage/commit/3c2d690): Allow users without defined email to be ingested by the `msgraph` catalog plugin and add `userIdMatchingUserEntityAnnotation` sign-in resolver for the Microsoft auth provider to support sign-in for users without defined email.
- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

### `@backstage/plugin-auth-backend-module-oauth2-provider` (0.2.5 → [0.3.0](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#030))

#### 0.3.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

### `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.1.17 → [0.2.0](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#020))

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

### `@backstage/plugin-auth-backend-module-oidc-provider` (0.2.6 → [0.3.0](../../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#030))

#### 0.3.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

### `@backstage/plugin-auth-backend-module-okta-provider` (0.0.17 → [0.1.0](../../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#010))

#### 0.1.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

### `@backstage/plugin-auth-backend-module-onelogin-provider` (0.1.5 → [0.2.0](../../changelogs/@backstage/plugin-auth-backend-module-onelogin-provider.md#020))

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

### `@backstage/plugin-auth-backend-module-pinniped-provider` (0.1.18 → [0.2.0](../../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#020))

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

### `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.2.5 → [0.3.0](../../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#030))

#### 0.3.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

### `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.3.1 → [0.4.0](../../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#040))

#### 0.4.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

### `@backstage/plugin-catalog-backend-module-gcp` (0.2.1 → [0.3.0](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#030))

#### 0.3.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

### `@backstage/plugin-catalog-backend-module-github-org` (0.2.2 → [0.3.0](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#030))

#### 0.3.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

### `@backstage/plugin-catalog-backend-module-gitlab-org` (0.1.1 → [0.2.0](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab-org.md#020))

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

### `@backstage/plugin-catalog-backend-module-ldap` (0.8.1 → [0.9.0](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#090))

#### 0.9.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`b50e4a8`](https://github.com/backstage/backstage/commit/b50e4a8): Add support for optional configuration of `dnAttributeName` and `uuidAttributeName` in LDAP vendor

### `@backstage/plugin-catalog-backend-module-logs` (0.0.4 → [0.1.0](../../changelogs/@backstage/plugin-catalog-backend-module-logs.md#010))

#### 0.1.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

### `@backstage/plugin-catalog-backend-module-openapi` (0.1.43 → [0.2.0](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#020))

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

### `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.22 → [0.2.0](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#020))

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.4.11 → [0.5.0](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#050))

#### 0.5.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

### `@backstage/plugin-devtools-backend` (0.3.10 → [0.4.0](../../changelogs/@backstage/plugin-devtools-backend.md#040))

#### 0.4.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`5d1670f`](https://github.com/backstage/backstage/commit/5d1670f): Update README installation instructions
- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

### `@backstage/plugin-events-node` (0.3.10 → [0.4.0](../../changelogs/@backstage/plugin-events-node.md#040))

#### 0.4.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

### `@backstage/plugin-notifications-backend` (0.3.5 → [0.4.0](../../changelogs/@backstage/plugin-notifications-backend.md#040))

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

### `@backstage/plugin-notifications-backend-module-email` (0.2.1 → [0.3.0](../../changelogs/@backstage/plugin-notifications-backend-module-email.md#030))

#### 0.3.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`5edd344`](https://github.com/backstage/backstage/commit/5edd344): Refactor to use injected catalog client in the new backend system

### `@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.21 → [0.2.0](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#020))

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

### `@backstage/plugin-scaffolder-backend-module-azure` (0.1.16 → [0.2.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#020))

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`59d8da4`](https://github.com/backstage/backstage/commit/59d8da4): Publish Azure action now uses basic authentication to authenticate to Git when Azure integration is configured to use App Registration/Service Account or Managed Identity.

### `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.2.14 → [0.3.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket.md#030))

#### 0.3.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

### `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.1.14 → [0.2.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#020))

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`df9ae9e`](https://github.com/backstage/backstage/commit/df9ae9e): Added scaffolder action publish:bitbucketCloud:pull-request

### `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.1.14 → [0.2.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#020))

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.25 → [0.3.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#030))

#### 0.3.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`5d1670f`](https://github.com/backstage/backstage/commit/5d1670f): Update README installation instructions

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.48 → [0.3.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#030))

#### 0.3.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`5d1670f`](https://github.com/backstage/backstage/commit/5d1670f): Update README installation instructions

### `@backstage/plugin-scaffolder-backend-module-gcp` (0.1.2 → [0.2.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-gcp.md#020))

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

### `@backstage/plugin-scaffolder-backend-module-gerrit` (0.1.16 → [0.2.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#020))

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`9e5923d`](https://github.com/backstage/backstage/commit/9e5923d): Added test cases for publish:gerrit action examples

### `@backstage/plugin-scaffolder-backend-module-gitea` (0.1.14 → [0.2.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#020))

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

### `@backstage/plugin-scaffolder-backend-module-github` (0.4.2 → [0.5.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#050))

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

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.4.6 → [0.5.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#050))

#### 0.5.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`5d1670f`](https://github.com/backstage/backstage/commit/5d1670f): Update README installation instructions

### `@backstage/plugin-scaffolder-backend-module-notifications` (0.0.7 → [0.1.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-notifications.md#010))

#### 0.1.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

### `@backstage/plugin-scaffolder-backend-module-rails` (0.4.41 → [0.5.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#050))

#### 0.5.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`5d1670f`](https://github.com/backstage/backstage/commit/5d1670f): Update README installation instructions

### `@backstage/plugin-scaffolder-backend-module-sentry` (0.1.32 → [0.2.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#020))

#### 0.2.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`5d1670f`](https://github.com/backstage/backstage/commit/5d1670f): Update README installation instructions

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.3.8 → [0.4.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#040))

#### 0.4.0

##### Minor Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

##### Patch Changes

- [`5d1670f`](https://github.com/backstage/backstage/commit/5d1670f): Update README installation instructions

### `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.2.1 → [0.3.0](../../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#030))

#### 0.3.0

##### Minor Changes

- [`479808f`](https://github.com/backstage/backstage/commit/479808f): Always set default request parameters for requests to stackoverflow while allow to overwrite them. Remove site parameter as causing the request to fail.
- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): **BREAKING**: The return values from `createBackendPlugin`, `createBackendModule`, and `createServiceFactory` are now simply `BackendFeature` and `ServiceFactory`, instead of the previously deprecated form of a function that returns them. For this reason, `createServiceFactory` also no longer accepts the callback form where you provide direct options to the service. This also affects all `coreServices.*` service refs.

  This may in particular affect tests; if you were effectively doing `createBackendModule({...})()` (note the parentheses), you can now remove those extra parentheses at the end. You may encounter cases of this in your `packages/backend/src/index.ts` too, where you add plugins, modules, and services. If you were using `createServiceFactory` with a function as its argument for the purpose of passing in options, this pattern has been deprecated for a while and is no longer supported. You may want to explore the new multiton patterns to achieve your goals, or moving settings to app-config.

  As part of this change, the `IdentityFactoryOptions` type was removed, and can no longer be used to tweak that service. The identity service was also deprecated some time ago, and you will want to [migrate to the new auth system](https://backstage.io/docs/tutorials/auth-service-migration) if you still rely on it.

### `@backstage/plugin-signals-backend` (0.1.10 → [0.2.0](../../changelogs/@backstage/plugin-signals-backend.md#020))

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

## 0.0.x patch version bumps

### `@backstage/plugin-kubernetes-cluster` (0.0.14 → [0.0.15](../../changelogs/@backstage/plugin-kubernetes-cluster.md#0015))

#### 0.0.15

##### Patch Changes

- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

### `@backstage/plugin-signals` (0.0.9 → [0.0.10](../../changelogs/@backstage/plugin-signals.md#0010))

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

### `@backstage/plugin-signals-react` (0.0.4 → [0.0.5](../../changelogs/@backstage/plugin-signals-react.md#005))

#### 0.0.5

##### Patch Changes

- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.
- [`0389801`](https://github.com/backstage/backstage/commit/0389801): Fix for `useSignal` returning the inverse value for `isSignalsAvailable`.

## Minor version bumps

### `@backstage/catalog-client` (1.6.6 → [1.7.0](../../changelogs/@backstage/catalog-client.md#170))

#### 1.7.0

##### Minor Changes

- [`78475c3`](https://github.com/backstage/backstage/commit/78475c3): Allow offset mode paging in entity list provider
- [`29e57c7`](https://github.com/backstage/backstage/commit/29e57c7): Add catalog service mocks under the `/testUtils` subpath export.

##### Patch Changes

- [`1882cfe`](https://github.com/backstage/backstage/commit/1882cfe): Moved `getEntities` ordering to utilize database instead of having it inside catalog client

  Please note that the latest version of `@backstage/catalog-client` will not order the entities in the same way as before. This is because the ordering is now done in the database query instead of in the client. If you rely on the ordering of the entities, you may need to update your backend plugin or code to handle this change.

### `@backstage/catalog-model` (1.6.0 → [1.7.0](../../changelogs/@backstage/catalog-model.md#170))

#### 1.7.0

##### Minor Changes

- [`74acf06`](https://github.com/backstage/backstage/commit/74acf06): Add `dependencyOf` prop to catalog model for Component kind to enable building relationship graphs with both directions using `dependsOn` and `dependencyOf`.

### `@backstage/core-app-api` (1.14.2 → [1.15.0](../../changelogs/@backstage/core-app-api.md#1150))

#### 1.15.0

##### Minor Changes

- [`ddbeace`](https://github.com/backstage/backstage/commit/ddbeace): Added the ability to explicitly disable routes through the `bindRoutes` option by passing `false` as the route target. This also fixes a bug where route bindings in config were incorrectly prioritized above the ones in code in certain situations.

##### Patch Changes

- [`ea69e46`](https://github.com/backstage/backstage/commit/ea69e46): The `defaultConfigLoader` now also reads configuration from scripts tags with `type="backstage.io/config"`. The tag is expected to contain a JSON-serialized array of `AppConfig` objects. If any of these script tags are present, the injected runtime configuration in the static assets will no longer be used.
- [`b537bd7`](https://github.com/backstage/backstage/commit/b537bd7): Allow custom star icons to be provided via the `star` and `unstarred` icon overrides. See how to override existing icons in the [Backstage documentation](https://backstage.io/docs/getting-started/app-custom-theme/#custom-icons).
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

### `@backstage/dev-utils` (1.0.37 → [1.1.0](../../changelogs/@backstage/dev-utils.md#110))

#### 1.1.0

##### Minor Changes

- [`10b1452`](https://github.com/backstage/backstage/commit/10b1452): Allow using translations in `createDevApp`

##### Patch Changes

- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

### `@backstage/integration` (1.14.0 → [1.15.0](../../changelogs/@backstage/integration.md#1150))

#### 1.15.0

##### Minor Changes

- [`1573014`](https://github.com/backstage/backstage/commit/1573014): The Gerrit integration can now resolve Gitiles urls that point to the following
  refs:

  - HEAD
  - A SHA
  - Tag
  - Branch

### `@backstage/plugin-catalog` (1.22.0 → [1.23.0](../../changelogs/@backstage/plugin-catalog.md#1230))

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

### `@backstage/plugin-catalog-backend` (1.25.2 → [1.26.0](../../changelogs/@backstage/plugin-catalog-backend.md#1260))

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

### `@backstage/plugin-catalog-common` (1.0.26 → [1.1.0](../../changelogs/@backstage/plugin-catalog-common.md#110))

#### 1.1.0

##### Minor Changes

- [`bd35cdb`](https://github.com/backstage/backstage/commit/bd35cdb): The `analyze-location` endpoint is now protected by the `catalog.location.analyze` permission.
  The `validate-entity` endpoint is now protected by the `catalog.entity.validate` permission.

### `@backstage/plugin-catalog-node` (1.12.6 → [1.13.0](../../changelogs/@backstage/plugin-catalog-node.md#1130))

#### 1.13.0

##### Minor Changes

- [`bd35cdb`](https://github.com/backstage/backstage/commit/bd35cdb): The `analyze-location` endpoint is now protected by the `catalog.location.analyze` permission.
  The `validate-entity` endpoint is now protected by the `catalog.entity.validate` permission.
- [`29e57c7`](https://github.com/backstage/backstage/commit/29e57c7): Add catalog service mocks under the `/testUtils` subpath export.

### `@backstage/plugin-catalog-react` (1.12.3 → [1.13.0](../../changelogs/@backstage/plugin-catalog-react.md#1130))

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

### `@backstage/plugin-scaffolder` (1.24.0 → [1.25.0](../../changelogs/@backstage/plugin-scaffolder.md#1250))

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

### `@backstage/plugin-scaffolder-backend` (1.24.1 → [1.25.0](../../changelogs/@backstage/plugin-scaffolder-backend.md#1250))

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

### `@backstage/plugin-scaffolder-react` (1.11.0 → [1.12.0](../../changelogs/@backstage/plugin-scaffolder-react.md#1120))

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

### `@backstage/plugin-search-react` (1.7.14 → [1.8.0](../../changelogs/@backstage/plugin-search-react.md#180))

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

### `@backstage/test-utils` (1.5.10 → [1.6.0](../../changelogs/@backstage/test-utils.md#160))

#### 1.6.0

##### Minor Changes

- [`d47be30`](https://github.com/backstage/backstage/commit/d47be30): Added the icons option to the renderInTestApp function's TestAppOptions to be forwarded to the icons option of `createApp`.

##### Patch Changes

- [`b537bd7`](https://github.com/backstage/backstage/commit/b537bd7): Allow custom star icons to be provided via the `star` and `unstarred` icon overrides. See how to override existing icons in the [Backstage documentation](https://backstage.io/docs/getting-started/app-custom-theme/#custom-icons).
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

## Other patch version bumps

### `@backstage/app-defaults` (1.5.10 → [1.5.11](../../changelogs/@backstage/app-defaults.md#1511))

#### 1.5.11

##### Patch Changes

- [`b537bd7`](https://github.com/backstage/backstage/commit/b537bd7): Allow custom star icons to be provided via the `star` and `unstarred` icon overrides. See how to override existing icons in the [Backstage documentation](https://backstage.io/docs/getting-started/app-custom-theme/#custom-icons).
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

### `@backstage/backend-openapi-utils` (0.1.17 → [0.1.18](../../changelogs/@backstage/backend-openapi-utils.md#0118))

#### 0.1.18

##### Patch Changes

- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

### `@backstage/cli` (0.27.0 → [0.27.1](../../changelogs/@backstage/cli.md#0271))

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

### `@backstage/cli-node` (0.2.7 → [0.2.8](../../changelogs/@backstage/cli-node.md#028))

#### 0.2.8

##### Patch Changes

- [`0c70f43`](https://github.com/backstage/backstage/commit/0c70f43): Add definition for the new `backstage.inline` field in `package.json`.

### `@backstage/codemods` (0.1.49 → [0.1.50](../../changelogs/@backstage/codemods.md#0150))

#### 0.1.50

##### Patch Changes

- [`0894166`](https://github.com/backstage/backstage/commit/0894166): Updated dependency `jscodeshift` to `^0.16.0`.

### `@backstage/config-loader` (1.9.0 → [1.9.1](../../changelogs/@backstage/config-loader.md#191))

#### 1.9.1

##### Patch Changes

- [`ef3c507`](https://github.com/backstage/backstage/commit/ef3c507): Updated dependency `typescript-json-schema` to `^0.65.0`.

### `@backstage/core-plugin-api` (1.9.3 → [1.9.4](../../changelogs/@backstage/core-plugin-api.md#194))

#### 1.9.4

##### Patch Changes

- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

### `@backstage/create-app` (0.5.18 → [0.5.19](../../changelogs/@backstage/create-app.md#0519))

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

### `@backstage/eslint-plugin` (0.1.8 → [0.1.9](../../changelogs/@backstage/eslint-plugin.md#019))

#### 0.1.9

##### Patch Changes

- [`08895e3`](https://github.com/backstage/backstage/commit/08895e3): Added support for linting dependencies on workspace packages with the `backstage.inline` flag.

### `@backstage/integration-react` (1.1.30 → [1.1.31](../../changelogs/@backstage/integration-react.md#1131))

#### 1.1.31

##### Patch Changes

- [`8a9d797`](https://github.com/backstage/backstage/commit/8a9d797): Remove unnecessary broad permissions from Gitlab `SCMAuth`

  Newer versions of Gitlab (after 2019) do not require the broad api permissions to write to repos.

### `@backstage/plugin-api-docs` (0.11.8 → [0.11.9](../../changelogs/@backstage/plugin-api-docs.md#0119))

#### 0.11.9

##### Patch Changes

- [`fec8b57`](https://github.com/backstage/backstage/commit/fec8b57): Updated exports to use the new type parameters for extensions and extension blueprints.
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.
- [`8a474f2`](https://github.com/backstage/backstage/commit/8a474f2): Updating docs to use `createFrontendModule` instead

### `@backstage/plugin-app-node` (0.1.24 → [0.1.25](../../changelogs/@backstage/plugin-app-node.md#0125))

#### 0.1.25

##### Patch Changes

- [`d3f79d1`](https://github.com/backstage/backstage/commit/d3f79d1): Fixing dependency metadata with the new `@backstage/plugin-app` package

### `@backstage/plugin-auth-node` (0.5.1 → [0.5.2](../../changelogs/@backstage/plugin-auth-node.md#052))

#### 0.5.2

##### Patch Changes

- [`c46eb0f`](https://github.com/backstage/backstage/commit/c46eb0f): Extend the "unable to resolve user identity" message
- [`d908d8c`](https://github.com/backstage/backstage/commit/d908d8c): Accepts an optional options object in the `PassportOAuthAuthenticatorHelper.authenticate` method.
- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.
- [`6f409b7`](https://github.com/backstage/backstage/commit/6f409b7): The `emailMatchingUserEntityProfileEmail` sign-in resolver will now also try matching emails with plus addressing removed.

### `@backstage/plugin-auth-react` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-auth-react.md#016))

#### 0.1.6

##### Patch Changes

- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

### `@backstage/plugin-catalog-backend-module-aws` (0.4.1 → [0.4.2](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#042))

#### 0.4.2

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.

### `@backstage/plugin-catalog-backend-module-azure` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#022))

#### 0.2.2

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#032))

#### 0.3.2

##### Patch Changes

- [`19ff127`](https://github.com/backstage/backstage/commit/19ff127): Internal refactor to remove dependencies on the identity and token manager services, which have been removed. Public APIs no longer require the identity service or token manager to be provided.
- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#022))

#### 0.2.2

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.

### `@backstage/plugin-catalog-backend-module-gerrit` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#022))

#### 0.2.2

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.

### `@backstage/plugin-catalog-backend-module-github` (0.7.2 → [0.7.3](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#073))

#### 0.7.3

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- [`5edd344`](https://github.com/backstage/backstage/commit/5edd344): Refactor to use injected catalog client in the new backend system

### `@backstage/plugin-catalog-backend-module-gitlab` (0.4.1 → [0.4.2](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#042))

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

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.5.2 → [0.5.3](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#053))

#### 0.5.3

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- [`4b28e39`](https://github.com/backstage/backstage/commit/4b28e39): Updated the README to include documentation for the new backend support

### `@backstage/plugin-catalog-backend-module-msgraph` (0.6.1 → [0.6.2](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#062))

#### 0.6.2

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- [`3c2d690`](https://github.com/backstage/backstage/commit/3c2d690): Allow users without defined email to be ingested by the `msgraph` catalog plugin and add `userIdMatchingUserEntityAnnotation` sign-in resolver for the Microsoft auth provider to support sign-in for users without defined email.

### `@backstage/plugin-catalog-backend-module-puppetdb` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#022))

#### 0.2.2

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.

### `@backstage/plugin-catalog-graph` (0.4.8 → [0.4.9](../../changelogs/@backstage/plugin-catalog-graph.md#049))

#### 0.4.9

##### Patch Changes

- [`fec8b57`](https://github.com/backstage/backstage/commit/fec8b57): Updated exports to use the new type parameters for extensions and extension blueprints.
- [`da91078`](https://github.com/backstage/backstage/commit/da91078): Fixed a bug in the `CatalogGraphPage` component where, after clicking on some nodes, clicking the back button would break the navigation. This issue caused the entire navigation to fail and behaved differently across various browsers.
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.
- [`8a474f2`](https://github.com/backstage/backstage/commit/8a474f2): Updating docs to use `createFrontendModule` instead
- [`a159180`](https://github.com/backstage/backstage/commit/a159180): Added missing items to `overridableComponents`

### `@backstage/plugin-catalog-import` (0.12.2 → [0.12.3](../../changelogs/@backstage/plugin-catalog-import.md#0123))

#### 0.12.3

##### Patch Changes

- [`fec8b57`](https://github.com/backstage/backstage/commit/fec8b57): Updated exports to use the new type parameters for extensions and extension blueprints.
- [`f3c90da`](https://github.com/backstage/backstage/commit/f3c90da): Support button title should be contained in a single menu item
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

### `@backstage/plugin-catalog-unprocessed-entities` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#028))

#### 0.2.8

##### Patch Changes

- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.
- [`4f08c85`](https://github.com/backstage/backstage/commit/4f08c85): Show additional info on DevTools unprocessed entities table

  - Location path (so that it's easier to search the failed entity from the YAML URL)
  - Time info of last discovery and next refresh time so that users can be aware of it and can sort the errors based on the time.

### `@backstage/plugin-config-schema` (0.1.58 → [0.1.59](../../changelogs/@backstage/plugin-config-schema.md#0159))

#### 0.1.59

##### Patch Changes

- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

### `@backstage/plugin-devtools` (0.1.17 → [0.1.18](../../changelogs/@backstage/plugin-devtools.md#0118))

#### 0.1.18

##### Patch Changes

- [`fec8b57`](https://github.com/backstage/backstage/commit/fec8b57): Updated exports to use the new type parameters for extensions and extension blueprints.
- [`019d9ad`](https://github.com/backstage/backstage/commit/019d9ad): Minor dockerfile syntax update

### `@backstage/plugin-events-backend` (0.3.11 → [0.3.12](../../changelogs/@backstage/plugin-events-backend.md#0312))

#### 0.3.12

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

### `@backstage/plugin-events-backend-module-aws-sqs` (0.4.1 → [0.4.2](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#042))

#### 0.4.2

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.

### `@backstage/plugin-events-backend-module-azure` (0.2.10 → [0.2.11](../../changelogs/@backstage/plugin-events-backend-module-azure.md#0211))

#### 0.2.11

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.

### `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.10 → [0.2.11](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0211))

#### 0.2.11

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.

### `@backstage/plugin-events-backend-module-gerrit` (0.2.10 → [0.2.11](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0211))

#### 0.2.11

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.

### `@backstage/plugin-events-backend-module-github` (0.2.10 → [0.2.11](../../changelogs/@backstage/plugin-events-backend-module-github.md#0211))

#### 0.2.11

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.

### `@backstage/plugin-events-backend-module-gitlab` (0.2.10 → [0.2.11](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#0211))

#### 0.2.11

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.

### `@backstage/plugin-home` (0.7.9 → [0.7.10](../../changelogs/@backstage/plugin-home.md#0710))

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

### `@backstage/plugin-home-react` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-home-react.md#0117))

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

### `@backstage/plugin-kubernetes` (0.11.13 → [0.11.14](../../changelogs/@backstage/plugin-kubernetes.md#01114))

#### 0.11.14

##### Patch Changes

- [`fec8b57`](https://github.com/backstage/backstage/commit/fec8b57): Updated exports to use the new type parameters for extensions and extension blueprints.
- [`bfc0f42`](https://github.com/backstage/backstage/commit/bfc0f42): Make k8s entity content appear on components & resources only by default in new FE system
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

### `@backstage/plugin-kubernetes-backend` (0.18.5 → [0.18.6](../../changelogs/@backstage/plugin-kubernetes-backend.md#0186))

#### 0.18.6

##### Patch Changes

- [`a0f1f0d`](https://github.com/backstage/backstage/commit/a0f1f0d): Bump the `ws` library
- [`f55f8bf`](https://github.com/backstage/backstage/commit/f55f8bf): The `KubernetesBuilder` and its related types has been marked as deprecared. This backend should instead be initialized using the new backend system.
- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.
- [`ca96b66`](https://github.com/backstage/backstage/commit/ca96b66): Skip start without proper config

### `@backstage/plugin-kubernetes-node` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-kubernetes-node.md#0119))

#### 0.1.19

##### Patch Changes

- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

### `@backstage/plugin-kubernetes-react` (0.4.2 → [0.4.3](../../changelogs/@backstage/plugin-kubernetes-react.md#043))

#### 0.4.3

##### Patch Changes

- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

### `@backstage/plugin-notifications` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-notifications.md#031))

#### 0.3.1

##### Patch Changes

- [`653f60b`](https://github.com/backstage/backstage/commit/653f60b): Severity filter label newly contains "Min severity" to better describe range instead of exact value.
- [`4a53dd0`](https://github.com/backstage/backstage/commit/4a53dd0): Implement icon in backend and show icon in table if available.
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

### `@backstage/plugin-org` (0.6.28 → [0.6.29](../../changelogs/@backstage/plugin-org.md#0629))

#### 0.6.29

##### Patch Changes

- [`fec8b57`](https://github.com/backstage/backstage/commit/fec8b57): Updated exports to use the new type parameters for extensions and extension blueprints.
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.
- [`8a474f2`](https://github.com/backstage/backstage/commit/8a474f2): Updating docs to use `createFrontendModule` instead
- [`a159180`](https://github.com/backstage/backstage/commit/a159180): Added missing items to `overridableComponents`

### `@backstage/plugin-org-react` (0.1.27 → [0.1.28](../../changelogs/@backstage/plugin-org-react.md#0128))

#### 0.1.28

##### Patch Changes

- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

### `@backstage/plugin-permission-backend` (0.5.48 → [0.5.49](../../changelogs/@backstage/plugin-permission-backend.md#0549))

#### 0.5.49

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.
- [`fcb9356`](https://github.com/backstage/backstage/commit/fcb9356): Deprecated `createRouter` and its router options in favour of the new backend system.

### `@backstage/plugin-permission-node` (0.8.2 → [0.8.3](../../changelogs/@backstage/plugin-permission-node.md#083))

#### 0.8.3

##### Patch Changes

- [`19ff127`](https://github.com/backstage/backstage/commit/19ff127): Internal refactor to remove dependencies on the identity and token manager services, which have been removed. Public APIs no longer require the identity service or token manager to be provided.
- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

### `@backstage/plugin-permission-react` (0.4.25 → [0.4.26](../../changelogs/@backstage/plugin-permission-react.md#0426))

#### 0.4.26

##### Patch Changes

- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

### `@backstage/plugin-proxy-backend` (0.5.5 → [0.5.6](../../changelogs/@backstage/plugin-proxy-backend.md#056))

#### 0.5.6

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- [`d298e6e`](https://github.com/backstage/backstage/commit/d298e6e): Deprecated `createRouter` and its router options in favour of the new backend system.

### `@backstage/plugin-search` (1.4.15 → [1.4.16](../../changelogs/@backstage/plugin-search.md#1416))

#### 1.4.16

##### Patch Changes

- [`fec8b57`](https://github.com/backstage/backstage/commit/fec8b57): Updated exports to use the new type parameters for extensions and extension blueprints.
- [`eca03bd`](https://github.com/backstage/backstage/commit/eca03bd): Added ability to customize the search items within the SidebarSearchModal
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

### `@backstage/plugin-search-backend` (1.5.16 → [1.5.17](../../changelogs/@backstage/plugin-search-backend.md#1517))

#### 1.5.17

##### Patch Changes

- [`5726390`](https://github.com/backstage/backstage/commit/5726390): Deprecate create router as the legacy backend system will no longer be supported.
- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

### `@backstage/plugin-search-backend-module-catalog` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#022))

#### 0.2.2

##### Patch Changes

- [`19ff127`](https://github.com/backstage/backstage/commit/19ff127): Internal refactor to remove dependencies on the identity and token manager services, which have been removed. Public APIs no longer require the identity service or token manager to be provided.
- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- [`5726390`](https://github.com/backstage/backstage/commit/5726390): The following collator factories are deprecated, please [migrate](https://backstage.io/docs/backend-system/building-backends/migrating) to the new backend system and follow the instructions below to install collators via module:

  - `DefaultCatalogCollatorFactory`: https://github.com/backstage/backstage/blob/nbs10/search-deprecate-create-router/plugins/search-backend-module-catalog/README.md#installation;
  - `ToolDocumentCollatorFactory`: https://github.com/backstage/backstage/blob/nbs10/search-deprecate-create-router/plugins/search-backend-module-explore/README.md#installation;
  - `DefaultTechDocsCollatorFactory`: https://github.com/backstage/backstage/blob/nbs10/search-deprecate-create-router/plugins/search-backend-module-techdocs/README.md#installation.

### `@backstage/plugin-search-backend-module-elasticsearch` (1.5.5 → [1.5.6](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#156))

#### 1.5.6

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- [`5726390`](https://github.com/backstage/backstage/commit/5726390): Internal refactor to use `LoggerService` and `DatabaseService` instead of the legacy `Logger` and `PluginDatabaseManager` types.

### `@backstage/plugin-search-backend-module-explore` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-search-backend-module-explore.md#022))

#### 0.2.2

##### Patch Changes

- [`19ff127`](https://github.com/backstage/backstage/commit/19ff127): Internal refactor to remove dependencies on the identity and token manager services, which have been removed. Public APIs no longer require the identity service or token manager to be provided.
- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- [`5726390`](https://github.com/backstage/backstage/commit/5726390): The following collator factories are deprecated, please [migrate](https://backstage.io/docs/backend-system/building-backends/migrating) to the new backend system and follow the instructions below to install collators via module:

  - `DefaultCatalogCollatorFactory`: https://github.com/backstage/backstage/blob/nbs10/search-deprecate-create-router/plugins/search-backend-module-catalog/README.md#installation;
  - `ToolDocumentCollatorFactory`: https://github.com/backstage/backstage/blob/nbs10/search-deprecate-create-router/plugins/search-backend-module-explore/README.md#installation;
  - `DefaultTechDocsCollatorFactory`: https://github.com/backstage/backstage/blob/nbs10/search-deprecate-create-router/plugins/search-backend-module-techdocs/README.md#installation.

- [`276f433`](https://github.com/backstage/backstage/commit/276f433): Updated dependency `@backstage-community/plugin-explore-common` to `^0.0.5`.

### `@backstage/plugin-search-backend-module-pg` (0.5.34 → [0.5.35](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0535))

#### 0.5.35

##### Patch Changes

- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- [`5726390`](https://github.com/backstage/backstage/commit/5726390): Internal refactor to use `LoggerService` and `DatabaseService` instead of the legacy `Logger` and `PluginDatabaseManager` types.

### `@backstage/plugin-search-backend-module-techdocs` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#022))

#### 0.2.2

##### Patch Changes

- [`19ff127`](https://github.com/backstage/backstage/commit/19ff127): Internal refactor to remove dependencies on the identity and token manager services, which have been removed. Public APIs no longer require the identity service or token manager to be provided.
- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- [`5726390`](https://github.com/backstage/backstage/commit/5726390): The following collator factories are deprecated, please [migrate](https://backstage.io/docs/backend-system/building-backends/migrating) to the new backend system and follow the instructions below to install collators via module:

  - `DefaultCatalogCollatorFactory`: https://github.com/backstage/backstage/blob/nbs10/search-deprecate-create-router/plugins/search-backend-module-catalog/README.md#installation;
  - `ToolDocumentCollatorFactory`: https://github.com/backstage/backstage/blob/nbs10/search-deprecate-create-router/plugins/search-backend-module-explore/README.md#installation;
  - `DefaultTechDocsCollatorFactory`: https://github.com/backstage/backstage/blob/nbs10/search-deprecate-create-router/plugins/search-backend-module-techdocs/README.md#installation.

### `@backstage/plugin-signals-node` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-signals-node.md#0111))

#### 0.1.11

##### Patch Changes

- [`a0f1f0d`](https://github.com/backstage/backstage/commit/a0f1f0d): Bump the `ws` library

### `@backstage/plugin-techdocs` (1.10.8 → [1.10.9](../../changelogs/@backstage/plugin-techdocs.md#1109))

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

### `@backstage/plugin-techdocs-addons-test-utils` (1.0.37 → [1.0.38](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#1038))

#### 1.0.38

##### Patch Changes

- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

### `@backstage/plugin-techdocs-backend` (1.10.12 → [1.10.13](../../changelogs/@backstage/plugin-techdocs-backend.md#11013))

#### 1.10.13

##### Patch Changes

- [`086c32d`](https://github.com/backstage/backstage/commit/086c32d): Dedicated token for techdocs cache sync
- [`5b679ac`](https://github.com/backstage/backstage/commit/5b679ac): The `createRouter` and its related types has been marked as deprecared. This backend should instead be initialized using the new backend system.
- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.
- [`5edd344`](https://github.com/backstage/backstage/commit/5edd344): Refactor to use injected catalog client in the new backend system

### `@backstage/plugin-techdocs-module-addons-contrib` (1.1.13 → [1.1.14](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1114))

#### 1.1.14

##### Patch Changes

- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

### `@backstage/plugin-techdocs-node` (1.12.10 → [1.12.11](../../changelogs/@backstage/plugin-techdocs-node.md#11211))

#### 1.12.11

##### Patch Changes

- [`f715f5c`](https://github.com/backstage/backstage/commit/f715f5c): Move `TechdocsContainerRunner` from `publish` to `generate`.
- [`4417dd4`](https://github.com/backstage/backstage/commit/4417dd4): Fix typo and unify TechDocs casing in doc strings
- [`57da51f`](https://github.com/backstage/backstage/commit/57da51f): Add support for mapping custom tags in the techdocs yaml parser that validates the mkdocs.yaml file
- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.
- [`3606843`](https://github.com/backstage/backstage/commit/3606843): Internal fixes to match `testcontainers` update
- [`33ebb28`](https://github.com/backstage/backstage/commit/33ebb28): As the `@backstage/backend-common` package is deprecated, we have updated the `techdocs-node` package to stop depending on it.

### `@backstage/plugin-techdocs-react` (1.2.7 → [1.2.8](../../changelogs/@backstage/plugin-techdocs-react.md#128))

#### 1.2.8

##### Patch Changes

- [`5ee3d27`](https://github.com/backstage/backstage/commit/5ee3d27): Fixed issue in useShadowRootElements which could lead to unlimited render loops
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

### `@backstage/plugin-user-settings` (0.8.11 → [0.8.12](../../changelogs/@backstage/plugin-user-settings.md#0812))

#### 0.8.12

##### Patch Changes

- [`fec8b57`](https://github.com/backstage/backstage/commit/fec8b57): Updated exports to use the new type parameters for extensions and extension blueprints.
- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.
- [`da86ac2`](https://github.com/backstage/backstage/commit/da86ac2): Update README to clarify location of additional tabs example

### `@backstage/plugin-user-settings-backend` (0.2.23 → [0.2.24](../../changelogs/@backstage/plugin-user-settings-backend.md#0224))

#### 0.2.24

##### Patch Changes

- [`5d1670f`](https://github.com/backstage/backstage/commit/5d1670f): Update README installation instructions
- [`164ce3e`](https://github.com/backstage/backstage/commit/164ce3e): In preparation to stop supporting to the legacy backend system, the `createRouter` function is now deprecated and we strongly recommend you [migrate](https://backstage.io/docs/backend-system/building-backends/migrating) your backend to the new system.
- [`d425fc4`](https://github.com/backstage/backstage/commit/d425fc4): Modules, plugins, and services are now `BackendFeature`, not a function that returns a feature.
- [`1b98099`](https://github.com/backstage/backstage/commit/1b98099): Replaced usage of the deprecated identity service with the new HTTP auth service for the new backend system.
- [`c2b63ab`](https://github.com/backstage/backstage/commit/c2b63ab): Updated dependency `supertest` to `^7.0.0`.

### `@backstage/repo-tools` (0.9.6 → [0.9.7](../../changelogs/@backstage/repo-tools.md#097))

#### 0.9.7

##### Patch Changes

- [`5c4aa2f`](https://github.com/backstage/backstage/commit/5c4aa2f): Updated dependency `@useoptic/openapi-utilities` to `^0.55.0`.
- [`1a8837e`](https://github.com/backstage/backstage/commit/1a8837e): Avoid generating API reports for packages with `backstage.inline` set.

### `@backstage/theme` (0.5.6 → [0.5.7](../../changelogs/@backstage/theme.md#057))

#### 0.5.7

##### Patch Changes

- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

### `@backstage/version-bridge` (1.0.8 → [1.0.9](../../changelogs/@backstage/version-bridge.md#109))

#### 1.0.9

##### Patch Changes

- [`836127c`](https://github.com/backstage/backstage/commit/836127c): Updated dependency `@testing-library/react` to `^16.0.0`.

## Excluded dependency updates

- `@backstage/plugin-app-visualizer` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-app-visualizer.md#0110))
- `@backstage/plugin-bitbucket-cloud-common` (0.2.22 → [0.2.23](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#0223))
- `@backstage/plugin-events-backend-test-utils` (0.1.34 → [0.1.35](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0135))
- `@backstage/plugin-kubernetes-common` (0.8.2 → [0.8.3](../../changelogs/@backstage/plugin-kubernetes-common.md#083))
- `@backstage/plugin-notifications-node` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-notifications-node.md#026))
- `@backstage/plugin-scaffolder-common` (1.5.5 → [1.5.6](../../changelogs/@backstage/plugin-scaffolder-common.md#156))
- `@backstage/plugin-scaffolder-node` (0.4.10 → [0.4.11](../../changelogs/@backstage/plugin-scaffolder-node.md#0411))
- `@backstage/plugin-scaffolder-node-test-utils` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#0112))
- `@backstage/plugin-search-backend-node` (1.3.1 → [1.3.2](../../changelogs/@backstage/plugin-search-backend-node.md#132))
- `@techdocs/cli` (1.8.18 → [1.8.19](../../changelogs/@techdocs/cli.md#1819))
