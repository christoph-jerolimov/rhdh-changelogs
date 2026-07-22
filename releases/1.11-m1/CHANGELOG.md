# RHDH Release 1.11-m1 changelog

Changes between Backstage 1.49.4 (RHDH 1.10) and Backstage 1.52.1 (RHDH 1.11-m1) — 3 added, 0 removed, 199 upgraded, 8 unchanged packages.

## Summary

- [Newly added packages](#newly-added-packages): 3 packages
- [Breaking changes](#breaking-changes): 13 packages
- [Major version bumps](#major-version-bumps): 3 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 7 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 2 packages
- [0.x patch version bumps](#0x-patch-version-bumps): 84 packages
- [Other minor version bumps](#other-minor-version-bumps): 10 packages
- [Other patch version bumps](#other-patch-version-bumps): 15 packages
- [Excluded dependency updates](#excluded-dependency-updates): 65 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/connections` (new, 0.1.0)](#backstageconnections-new-010)
  - [`@backstage/plugin-catalog-backend-module-ai-model` (new, 0.1.1)](#backstageplugin-catalog-backend-module-ai-model-new-011)
  - [`@backstage/plugin-catalog-backend-module-msgraph-incremental` (new, 0.1.1)](#backstageplugin-catalog-backend-module-msgraph-incremental-new-011)
- [Breaking changes](#breaking-changes)
  - [`@backstage/catalog-client` (1.14.0 → 1.16.0)](#backstagecatalog-client-1140--1160)
  - [`@backstage/frontend-plugin-api` (0.15.1 → 0.17.2)](#backstagefrontend-plugin-api-0151--0172)
  - [`@backstage/frontend-test-utils` (0.5.1 → 0.6.1)](#backstagefrontend-test-utils-051--061)
  - [`@backstage/plugin-app` (0.4.2 → 0.5.0)](#backstageplugin-app-042--050)
  - [`@backstage/plugin-auth-backend` (0.27.3 → 0.29.1)](#backstageplugin-auth-backend-0273--0291)
  - [`@backstage/plugin-auth-node` (0.6.14 → 0.7.2)](#backstageplugin-auth-node-0614--072)
  - [`@backstage/plugin-catalog-backend` (3.5.0 → 3.8.0)](#backstageplugin-catalog-backend-350--380)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.9.1 → 0.10.3)](#backstageplugin-catalog-backend-module-msgraph-091--0103)
  - [`@backstage/plugin-catalog-node` (2.1.0 → 2.2.2)](#backstageplugin-catalog-node-210--222)
  - [`@backstage/plugin-permission-node` (0.10.11 → 0.11.1)](#backstageplugin-permission-node-01011--0111)
  - [`@backstage/plugin-permission-react` (0.4.41 → 0.5.2)](#backstageplugin-permission-react-0441--052)
  - [`@backstage/plugin-signals-node` (0.1.29 → 0.2.2)](#backstageplugin-signals-node-0129--022)
  - [`@backstage/ui` (0.13.2 → 0.16.0)](#backstageui-0132--0160)
- [Major version bumps](#major-version-bumps)
  - [`@backstage/plugin-catalog-react` (2.1.1 → 3.1.0)](#backstageplugin-catalog-react-211--310)
  - [`@backstage/plugin-scaffolder-backend` (3.3.0 → 4.0.1)](#backstageplugin-scaffolder-backend-330--401)
  - [`@backstage/plugin-scaffolder-react` (1.20.0 → 2.0.1)](#backstageplugin-scaffolder-react-1200--201)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/backend-defaults` (0.16.0 → 0.17.4)](#backstagebackend-defaults-0160--0174)
  - [`@backstage/cli-module-actions` (0.0.1 → 0.1.2)](#backstagecli-module-actions-001--012)
  - [`@backstage/eslint-plugin` (0.2.2 → 0.3.1)](#backstageeslint-plugin-022--031)
  - [`@backstage/integration-aws-node` (0.1.20 → 0.2.0)](#backstageintegration-aws-node-0120--020)
  - [`@backstage/plugin-api-docs` (0.13.5 → 0.14.2)](#backstageplugin-api-docs-0135--0142)
  - [`@backstage/plugin-auth-backend-module-auth0-provider` (0.3.1 → 0.4.2)](#backstageplugin-auth-backend-module-auth0-provider-031--042)
  - [`@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.2.18 → 0.3.0)](#backstageplugin-auth-backend-module-oauth2-proxy-provider-0218--030)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-catalog-unprocessed-entities-common` (0.0.13 → 0.0.16)](#backstageplugin-catalog-unprocessed-entities-common-0013--0016)
  - [`@backstage/plugin-signals` (0.0.29 → 0.0.32)](#backstageplugin-signals-0029--0032)
- [0.x patch version bumps](#0x-patch-version-bumps)
  - [`@backstage/backend-dynamic-feature-service` (0.8.0 → 0.8.3)](#backstagebackend-dynamic-feature-service-080--083)
  - [`@backstage/backend-openapi-utils` (0.6.7 → 0.6.10)](#backstagebackend-openapi-utils-067--0610)
  - [`@backstage/cli` (0.36.0 → 0.36.3)](#backstagecli-0360--0363)
  - [`@backstage/cli-common` (0.2.0 → 0.2.2)](#backstagecli-common-020--022)
  - [`@backstage/cli-module-auth` (0.1.0 → 0.1.3)](#backstagecli-module-auth-010--013)
  - [`@backstage/cli-module-build` (0.1.0 → 0.1.4)](#backstagecli-module-build-010--014)
  - [`@backstage/cli-module-config` (0.1.0 → 0.1.3)](#backstagecli-module-config-010--013)
  - [`@backstage/cli-module-github` (0.1.0 → 0.1.3)](#backstagecli-module-github-010--013)
  - [`@backstage/cli-module-info` (0.1.0 → 0.1.3)](#backstagecli-module-info-010--013)
  - [`@backstage/cli-module-lint` (0.1.0 → 0.1.3)](#backstagecli-module-lint-010--013)
  - [`@backstage/cli-module-maintenance` (0.1.0 → 0.1.3)](#backstagecli-module-maintenance-010--013)
  - [`@backstage/cli-module-migrate` (0.1.0 → 0.1.3)](#backstagecli-module-migrate-010--013)
  - [`@backstage/cli-module-new` (0.1.1 → 0.1.4)](#backstagecli-module-new-011--014)
  - [`@backstage/cli-module-test-jest` (0.1.0 → 0.1.3)](#backstagecli-module-test-jest-010--013)
  - [`@backstage/cli-module-translations` (0.1.0 → 0.1.3)](#backstagecli-module-translations-010--013)
  - [`@backstage/cli-node` (0.3.0 → 0.3.3)](#backstagecli-node-030--033)
  - [`@backstage/core-compat-api` (0.5.9 → 0.5.12)](#backstagecore-compat-api-059--0512)
  - [`@backstage/core-components` (0.18.8 → 0.18.11)](#backstagecore-components-0188--01811)
  - [`@backstage/create-app` (0.8.1 → 0.8.4)](#backstagecreate-app-081--084)
  - [`@backstage/filter-predicates` (0.1.1 → 0.1.3)](#backstagefilter-predicates-011--013)
  - [`@backstage/frontend-app-api` (0.16.1 → 0.16.5)](#backstagefrontend-app-api-0161--0165)
  - [`@backstage/frontend-defaults` (0.5.0 → 0.5.3)](#backstagefrontend-defaults-050--053)
  - [`@backstage/frontend-dynamic-feature-loader` (0.1.10 → 0.1.13)](#backstagefrontend-dynamic-feature-loader-0110--0113)
  - [`@backstage/module-federation-common` (0.1.2 → 0.1.4)](#backstagemodule-federation-common-012--014)
  - [`@backstage/plugin-app-backend` (0.5.12 → 0.5.15)](#backstageplugin-app-backend-0512--0515)
  - [`@backstage/plugin-app-visualizer` (0.2.1 → 0.2.5)](#backstageplugin-app-visualizer-021--025)
  - [`@backstage/plugin-auth` (0.1.6 → 0.1.9)](#backstageplugin-auth-016--019)
  - [`@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.4.13 → 0.4.16)](#backstageplugin-auth-backend-module-cloudflare-access-provider-0413--0416)
  - [`@backstage/plugin-auth-backend-module-oidc-provider` (0.4.14 → 0.4.17)](#backstageplugin-auth-backend-module-oidc-provider-0414--0417)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.4.21 → 0.4.24)](#backstageplugin-catalog-backend-module-aws-0421--0424)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.3.15 → 0.3.18)](#backstageplugin-catalog-backend-module-azure-0315--0318)
  - [`@backstage/plugin-catalog-backend-module-backstage-openapi` (0.5.12 → 0.5.15)](#backstageplugin-catalog-backend-module-backstage-openapi-0512--0515)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.5.9 → 0.5.12)](#backstageplugin-catalog-backend-module-bitbucket-cloud-059--0512)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.5.9 → 0.5.12)](#backstageplugin-catalog-backend-module-bitbucket-server-059--0512)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (0.3.12 → 0.3.15)](#backstageplugin-catalog-backend-module-gerrit-0312--0315)
  - [`@backstage/plugin-catalog-backend-module-gitea` (0.1.10 → 0.1.13)](#backstageplugin-catalog-backend-module-gitea-0110--0113)
  - [`@backstage/plugin-catalog-backend-module-github` (0.13.0 → 0.13.3)](#backstageplugin-catalog-backend-module-github-0130--0133)
  - [`@backstage/plugin-catalog-backend-module-github-org` (0.3.20 → 0.3.23)](#backstageplugin-catalog-backend-module-github-org-0320--0323)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.8.1 → 0.8.4)](#backstageplugin-catalog-backend-module-gitlab-081--084)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.7.10 → 0.7.13)](#backstageplugin-catalog-backend-module-incremental-ingestion-0710--0713)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.12.3 → 0.12.6)](#backstageplugin-catalog-backend-module-ldap-0123--0126)
  - [`@backstage/plugin-catalog-backend-module-openapi` (0.2.20 → 0.2.23)](#backstageplugin-catalog-backend-module-openapi-0220--0223)
  - [`@backstage/plugin-catalog-backend-module-puppetdb` (0.2.20 → 0.2.23)](#backstageplugin-catalog-backend-module-puppetdb-0220--0223)
  - [`@backstage/plugin-catalog-backend-module-unprocessed` (0.6.9 → 0.6.13)](#backstageplugin-catalog-backend-module-unprocessed-069--0613)
  - [`@backstage/plugin-catalog-graph` (0.6.0 → 0.6.5)](#backstageplugin-catalog-graph-060--065)
  - [`@backstage/plugin-catalog-import` (0.13.11 → 0.13.14)](#backstageplugin-catalog-import-01311--01314)
  - [`@backstage/plugin-catalog-unprocessed-entities` (0.2.28 → 0.2.32)](#backstageplugin-catalog-unprocessed-entities-0228--0232)
  - [`@backstage/plugin-devtools` (0.1.37 → 0.1.40)](#backstageplugin-devtools-0137--0140)
  - [`@backstage/plugin-devtools-backend` (0.5.15 → 0.5.18)](#backstageplugin-devtools-backend-0515--0518)
  - [`@backstage/plugin-events-backend` (0.6.0 → 0.6.3)](#backstageplugin-events-backend-060--063)
  - [`@backstage/plugin-events-backend-module-google-pubsub` (0.2.1 → 0.2.4)](#backstageplugin-events-backend-module-google-pubsub-021--024)
  - [`@backstage/plugin-home` (0.9.3 → 0.9.7)](#backstageplugin-home-093--097)
  - [`@backstage/plugin-kubernetes` (0.12.17 → 0.12.20)](#backstageplugin-kubernetes-01217--01220)
  - [`@backstage/plugin-kubernetes-backend` (0.21.2 → 0.21.5)](#backstageplugin-kubernetes-backend-0212--0215)
  - [`@backstage/plugin-kubernetes-common` (0.9.10 → 0.9.12)](#backstageplugin-kubernetes-common-0910--0912)
  - [`@backstage/plugin-kubernetes-node` (0.4.2 → 0.4.5)](#backstageplugin-kubernetes-node-042--045)
  - [`@backstage/plugin-kubernetes-react` (0.5.17 → 0.5.21)](#backstageplugin-kubernetes-react-0517--0521)
  - [`@backstage/plugin-mcp-actions-backend` (0.1.11 → 0.1.14)](#backstageplugin-mcp-actions-backend-0111--0114)
  - [`@backstage/plugin-notifications` (0.5.15 → 0.5.18)](#backstageplugin-notifications-0515--0518)
  - [`@backstage/plugin-notifications-backend` (0.6.3 → 0.6.6)](#backstageplugin-notifications-backend-063--066)
  - [`@backstage/plugin-notifications-backend-module-email` (0.3.19 → 0.3.22)](#backstageplugin-notifications-backend-module-email-0319--0322)
  - [`@backstage/plugin-notifications-backend-module-slack` (0.4.0 → 0.4.3)](#backstageplugin-notifications-backend-module-slack-040--043)
  - [`@backstage/plugin-notifications-common` (0.2.1 → 0.2.3)](#backstageplugin-notifications-common-021--023)
  - [`@backstage/plugin-notifications-node` (0.2.24 → 0.2.27)](#backstageplugin-notifications-node-0224--0227)
  - [`@backstage/plugin-org` (0.7.0 → 0.7.5)](#backstageplugin-org-070--075)
  - [`@backstage/plugin-org-react` (0.1.48 → 0.1.51)](#backstageplugin-org-react-0148--0151)
  - [`@backstage/plugin-permission-backend` (0.7.10 → 0.7.13)](#backstageplugin-permission-backend-0710--0713)
  - [`@backstage/plugin-permission-common` (0.9.7 → 0.9.9)](#backstageplugin-permission-common-097--099)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.3.4 → 0.3.7)](#backstageplugin-scaffolder-backend-module-bitbucket-cloud-034--037)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.19 → 0.2.22)](#backstageplugin-scaffolder-backend-module-bitbucket-server-0219--0222)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.21 → 0.3.24)](#backstageplugin-scaffolder-backend-module-cookiecutter-0321--0324)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.9.7 → 0.9.10)](#backstageplugin-scaffolder-backend-module-github-097--0910)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.11.4 → 0.11.7)](#backstageplugin-scaffolder-backend-module-gitlab-0114--0117)
  - [`@backstage/plugin-scaffolder-backend-module-rails` (0.5.19 → 0.5.22)](#backstageplugin-scaffolder-backend-module-rails-0519--0522)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.20 → 0.4.23)](#backstageplugin-scaffolder-backend-module-yeoman-0420--0423)
  - [`@backstage/plugin-scaffolder-node` (0.13.1 → 0.13.4)](#backstageplugin-scaffolder-node-0131--0134)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.53 → 0.5.56)](#backstageplugin-search-backend-module-pg-0553--0556)
  - [`@backstage/plugin-search-backend-module-stack-overflow-collator` (0.3.18 → 0.3.21)](#backstageplugin-search-backend-module-stack-overflow-collator-0318--0321)
  - [`@backstage/plugin-search-backend-module-techdocs` (0.4.12 → 0.4.15)](#backstageplugin-search-backend-module-techdocs-0412--0415)
  - [`@backstage/plugin-signals-backend` (0.3.13 → 0.3.16)](#backstageplugin-signals-backend-0313--0316)
  - [`@backstage/plugin-user-settings` (0.9.1 → 0.9.4)](#backstageplugin-user-settings-091--094)
  - [`@backstage/plugin-user-settings-backend` (0.4.1 → 0.4.4)](#backstageplugin-user-settings-backend-041--044)
  - [`@backstage/repo-tools` (0.17.0 → 0.17.3)](#backstagerepo-tools-0170--0173)
  - [`@backstage/theme` (0.7.2 → 0.7.3)](#backstagetheme-072--073)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/backend-app-api` (1.6.0 → 1.7.1)](#backstagebackend-app-api-160--171)
  - [`@backstage/backend-plugin-api` (1.8.0 → 1.9.2)](#backstagebackend-plugin-api-180--192)
  - [`@backstage/catalog-model` (1.7.7 → 1.9.0)](#backstagecatalog-model-177--190)
  - [`@backstage/core-app-api` (1.19.6 → 1.20.2)](#backstagecore-app-api-1196--1202)
  - [`@backstage/errors` (1.2.7 → 1.3.1)](#backstageerrors-127--131)
  - [`@backstage/plugin-scaffolder` (1.36.1 → 1.38.0)](#backstageplugin-scaffolder-1361--1380)
  - [`@backstage/plugin-scaffolder-common` (2.0.0 → 2.2.1)](#backstageplugin-scaffolder-common-200--221)
  - [`@backstage/plugin-techdocs-backend` (2.1.6 → 2.2.1)](#backstageplugin-techdocs-backend-216--221)
  - [`@backstage/plugin-techdocs-node` (1.14.4 → 1.15.1)](#backstageplugin-techdocs-node-1144--1151)
  - [`@techdocs/cli` (1.10.6 → 1.11.1)](#techdocscli-1106--1111)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/app-defaults` (1.7.6 → 1.7.9)](#backstageapp-defaults-176--179)
  - [`@backstage/backend-test-utils` (1.11.1 → 1.11.4)](#backstagebackend-test-utils-1111--1114)
  - [`@backstage/config-loader` (1.10.9 → 1.10.12)](#backstageconfig-loader-1109--11012)
  - [`@backstage/core-plugin-api` (1.12.4 → 1.12.7)](#backstagecore-plugin-api-1124--1127)
  - [`@backstage/integration` (2.0.0 → 2.0.3)](#backstageintegration-200--203)
  - [`@backstage/plugin-catalog` (2.0.1 → 2.0.6)](#backstageplugin-catalog-201--206)
  - [`@backstage/plugin-gateway-backend` (1.1.3 → 1.1.6)](#backstageplugin-gateway-backend-113--116)
  - [`@backstage/plugin-search` (1.7.0 → 1.7.5)](#backstageplugin-search-170--175)
  - [`@backstage/plugin-search-backend` (2.1.0 → 2.1.3)](#backstageplugin-search-backend-210--213)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.8.1 → 1.8.4)](#backstageplugin-search-backend-module-elasticsearch-181--184)
  - [`@backstage/plugin-search-backend-node` (1.4.2 → 1.4.5)](#backstageplugin-search-backend-node-142--145)
  - [`@backstage/plugin-search-react` (1.11.0 → 1.11.5)](#backstageplugin-search-react-1110--1115)
  - [`@backstage/plugin-techdocs` (1.17.2 → 1.17.7)](#backstageplugin-techdocs-1172--1177)
  - [`@backstage/plugin-techdocs-module-addons-contrib` (1.1.34 → 1.1.37)](#backstageplugin-techdocs-module-addons-contrib-1134--1137)
  - [`@backstage/plugin-techdocs-react` (1.3.9 → 1.3.12)](#backstageplugin-techdocs-react-139--1312)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/connections` (new, [0.1.0](../../changelogs/@backstage/connections.md#010))

#### 0.1.0

##### Minor Changes

- [`b1e3037`](https://github.com/backstage/backstage/commit/b1e3037): Added the connections package as experimental. A connection is a piece of configuration storing an external host and the credentials required to authenticate with that host. A single connections can be consumed by many plugins, reducing the amount of repeated configuration needed. Connections can have many auth methods which can be restricted to plugins/modules.

##### Patch Changes

- [`95688f6`](https://github.com/backstage/backstage/commit/95688f6): Added a `title` field to connections, providing a human-readable display name for each connection. When not explicitly configured, the title defaults to the provider name (e.g. "GitHub") or includes the host when multiple connections share a type (e.g. "GitHub (ghe.acme.com)").

### `@backstage/plugin-catalog-backend-module-ai-model` (new, [0.1.1](../../changelogs/@backstage/plugin-catalog-backend-module-ai-model.md#011))

#### 0.1.0

##### Minor Changes

- [`3664148`](https://github.com/backstage/backstage/commit/3664148): Introduced the `AiResource` catalog entity kind. Entity types, validators, type guards, and the model layer are exported from `@backstage/catalog-model/alpha`. Install `@backstage/plugin-catalog-backend-module-ai-model` in your backend to register the kind with the catalog.

### `@backstage/plugin-catalog-backend-module-msgraph-incremental` (new, [0.1.1](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph-incremental.md#011))

#### 0.1.0

##### Minor Changes

- [`2bd0450`](https://github.com/backstage/backstage/commit/2bd0450): **BREAKING**: Disabled user accounts are now filtered out by default. The provider automatically applies an `accountEnabled eq true` filter, combining it with any custom `user.filter` you provide. If you previously included `accountEnabled eq true` in your user filter, it is safe to remove it, but leaving it in will not cause any issues.
- [`f1279ea`](https://github.com/backstage/backstage/commit/f1279ea): Introduces a cursor-based incremental ingestion provider for Microsoft Graph that processes users and groups one page at a time. Unlike `MicrosoftGraphOrgEntityProvider`, this module never holds the full dataset in memory — each burst processes a single page (up to 999 users or 100 groups). The `@odata.nextLink` cursor is persisted so a pod restart resumes from the last completed page rather than starting over.

## Breaking changes

### `@backstage/catalog-client` (1.14.0 → [1.16.0](../../changelogs/@backstage/catalog-client.md#1160))

#### 1.16.0

##### Minor Changes

- [`8f20cc2`](https://github.com/backstage/backstage/commit/8f20cc2): `CatalogApi.queryEntities` now accepts a `totalItems` option (`'include'` or `'exclude'`, default `'include'`) on initial requests. Pass `'exclude'` to skip the `totalItems` count when the caller doesn't need it.

##### Patch Changes

- [`378784e`](https://github.com/backstage/backstage/commit/378784e): Moved dependencies that are re-exported in the public API from `devDependencies` to `dependencies`. These were incorrectly demoted in #33936 because the source code only uses type imports, but the types still appear in the published API surface and need to be resolvable by consumers at build time.

#### 1.15.0

##### Minor Changes

- [`c384fff`](https://github.com/backstage/backstage/commit/c384fff): **BREAKING PRODUCERS**: Added required `entityRef` field to the `Location` type, exposing the stable entity reference for each registered location. Any code that produces `Location` objects must now include this field. Added `updateLocation` method to `CatalogApi` for updating the type and target of an existing location.

### `@backstage/frontend-plugin-api` (0.15.1 → [0.17.2](../../changelogs/@backstage/frontend-plugin-api.md#0172))

#### 0.17.2

##### Patch Changes

- [`378784e`](https://github.com/backstage/backstage/commit/378784e): Moved dependencies that are re-exported in the public API from `devDependencies` to `dependencies`. These were incorrectly demoted in #33936 because the source code only uses type imports, but the types still appear in the published API surface and need to be resolvable by consumers at build time.

#### 0.17.0

##### Minor Changes

- [`44d77e9`](https://github.com/backstage/backstage/commit/44d77e9): **BREAKING**: Removed the deprecated `NavItemBlueprint`. Navigation items are now discovered from `PageBlueprint` extensions based on their `title` and `icon` params.

  If you were still using `NavItemBlueprint`, migrate by moving `title` and `icon` to your `PageBlueprint` instead:

  ```diff
  -const navItem = NavItemBlueprint.make({
  -  params: { title: 'Example', icon: ExampleIcon, routeRef },
  -});
   const page = PageBlueprint.make({
     params: {
  +    title: 'Example',
  +    icon: <ExampleIcon fontSize="inherit" />,
       routeRef,
       path: '/example',
       loader: () => import('./Page').then(m => <m.Page />),
     },
   });
  ```

  `PageBlueprint` expects an `IconElement` rather than a Material UI `IconComponent`, so this is also a good time to switch to [Remix Icon](https://remixicon.com/) if you were using Material UI icons only for the nav item:

  ```diff
  -import ExampleIcon from '@material-ui/icons/Extension';
  +import { RiPuzzleLine } from '@remixicon/react';
   ...
  -    icon: ExampleIcon,
  +    icon: <RiPuzzleLine />,
  ```

- [`8738203`](https://github.com/backstage/backstage/commit/8738203): **BREAKING**: Removed the deprecated property form of `PortableSchema.schema`. The `schema` member is now a plain method that must be called as `schema()` — direct property access like `schema.type` or `schema.properties` is no longer supported.

##### Patch Changes

- [`ab1cdbb`](https://github.com/backstage/backstage/commit/ab1cdbb): Removed a handful of internal imports that referenced the package by its own name. Value imports were switched to relative paths, and type-only imports to `import type`. These self-referential imports could trigger circular initialization errors in bundled ESM and when the package was loaded via `jest.requireActual` — most visibly `Cannot access '_AppRootElementBlueprintesm' before initialization` from `@backstage/frontend-plugin-api`. There are no user-facing API changes.
- [`cad156e`](https://github.com/backstage/backstage/commit/cad156e): Replaced old config schema values from existing extensions and blueprints.
- [`72a552f`](https://github.com/backstage/backstage/commit/72a552f): Updated error messages and deprecation warnings to clarify that the `zod/v4` subpath export from the Zod v3 package is not supported by `configSchema`, since it does not include JSON Schema conversion. The `zod` dependency has been bumped to `^4.0.0`.

#### 0.16.0

##### Minor Changes

- [`fa55078`](https://github.com/backstage/backstage/commit/fa55078): **BREAKING**: Removed the deprecated `createSchemaFromZod` helper. Use the new `configSchema` option instead. See the [1.50 migration documentation](https://backstage.io/docs/frontend-system/architecture/migrations#150) for more information.
- [`49397c1`](https://github.com/backstage/backstage/commit/49397c1): Simplified the type signature of `createRouteRef` by replacing the dual `TParams`/`TParamKeys` type parameters with a single `TParamKey` parameter. This is a breaking change for callers that explicitly provided type arguments, but most usage that relies on inference is unaffected.

##### Patch Changes

- [`4c09967`](https://github.com/backstage/backstage/commit/4c09967): Fixed the duplicate extension error message in `createFrontendModule` to correctly say "Module" instead of "Plugin".
- [`e4804ab`](https://github.com/backstage/backstage/commit/e4804ab): Added `open` method to `DialogApi` that renders dialogs without any built-in dialog chrome, giving the caller full control over the dialog presentation. This avoids focus trap conflicts that occur when mixing components from different design libraries. The existing `show` and `showModal` methods are now deprecated in favor of `open`.
- [`ddc5247`](https://github.com/backstage/backstage/commit/ddc5247): Fixed `FlattenedMessages` type to avoid excessive type instantiation depth in TypeScript 6 when using `createTranslationRef` with the `translations` option.
- [`a2a6c3b`](https://github.com/backstage/backstage/commit/a2a6c3b): Added a new `configSchema` option for `createExtension` and `createExtensionBlueprint` that accepts direct schema values from any [Standard Schema](https://github.com/standard-schema/standard-schema) compatible library with JSON Schema support, such as zod v4 (`zod@^4.0.0`). The old `config.schema` option is now deprecated. Note that Zod v3 is not supported by the new `configSchema` option, including the `zod/v4` subpath export which does not include JSON Schema conversion support. You must upgrade to the `zod` v4 package. See the [1.50 migration documentation](https://backstage.io/docs/frontend-system/architecture/migrations#150) for more information.
- [`d66a3ec`](https://github.com/backstage/backstage/commit/d66a3ec): Added `titleLink` prop to `PageLayoutProps` so the plugin header title can link back to the plugin root.
- [`e220589`](https://github.com/backstage/backstage/commit/e220589): Removed the unnecessary need to use `defineParams` callback from `PluginHeaderActionBlueprint`. It still works, but is no longer required.

### `@backstage/frontend-test-utils` (0.5.1 → [0.6.1](../../changelogs/@backstage/frontend-test-utils.md#061))

#### 0.6.1

##### Patch Changes

- [`62dd4fc`](https://github.com/backstage/backstage/commit/62dd4fc): Added a `mountPath` option to `renderInTestApp` that controls the route path pattern the test element is rendered at. When set, the element is wrapped in a `<Route>` with the given path, enabling `useParams()` to extract route parameters from the URL. Use together with `initialRouteEntries` to set a concrete URL that matches the pattern. This is useful for testing page components that depend on URL parameters, such as entity pages that use `useRouteRefParams`.

#### 0.6.0

##### Minor Changes

- [`44d77e9`](https://github.com/backstage/backstage/commit/44d77e9): **BREAKING**: `renderInTestApp` no longer renders a sidebar or legacy `nav-item` extensions. The app nav extension is now disabled in the minimal test app shell, along with the layout and routes extensions.

  If your tests passed `features` containing `nav-item` extensions and asserted on links or labels in that stub sidebar, switch to `renderTestApp` instead — it uses the real app shell and discovers nav items from page extensions.

  If you only use `renderInTestApp` to mount a component with APIs or route refs, there is no change.

##### Patch Changes

- [`0c298f7`](https://github.com/backstage/backstage/commit/0c298f7): Removed internal `mockWithApiFactory` helper in favor of using `attachMockApiFactory` directly.
- [`fa363f9`](https://github.com/backstage/backstage/commit/fa363f9): Added support for `ExternalRouteRef` in the `mountedRoutes` option of `renderInTestApp` and `renderTestApp`.
- [`9279ea8`](https://github.com/backstage/backstage/commit/9279ea8): Added explicit type annotations to `.map()` callback parameters in `renderInTestApp` to avoid implicit `any` errors with newer TypeScript versions.

### `@backstage/plugin-app` (0.4.2 → [0.5.0](../../changelogs/@backstage/plugin-app.md#050))

#### 0.5.0

##### Minor Changes

- [`6e5fca3`](https://github.com/backstage/backstage/commit/6e5fca3): **BREAKING** Changed the default discovery API implementation to use `FrontendHostDiscovery`, which supports the `discovery.endpoints` configuration for per-plugin endpoint overrides. Note that this will start honoring `discovery.endpoints` (including string `target` values), so if you currently use internal-only targets there, update them to the object form and move the internal URL to `target.internal`, omitting `target.external` (or setting it to a browser-reachable URL) to avoid routing the frontend to internal URLs.

##### Patch Changes

- [`33d03ed`](https://github.com/backstage/backstage/commit/33d03ed): fix: make Toast text content selectable

#### 0.4.6

##### Patch Changes

- [`a345820`](https://github.com/backstage/backstage/commit/a345820): The `app/routes` redirect config now supports path parameter substitution in the `to` target. Named params (`:userId`) and splat params (`*`) captured by the `from` path are replaced in the `to` string before navigating, making it possible to express redirects like:

  ```yaml
  app:
    extensions:
      - app/routes:
          config:
            redirects:
              - from: /users/:userId
                to: /profile/:userId
              - from: /old-docs
                to: /docs/*
  ```

- [`d1be10c`](https://github.com/backstage/backstage/commit/d1be10c): Migrated React Aria imports from individual packages (`@react-aria/toast`, `@react-aria/button`, `@react-stately/toast`) to the monopackages (`react-aria`, `react-stately`).
- [`e2d9831`](https://github.com/backstage/backstage/commit/e2d9831): Tightened React Aria dependency version ranges from `^` to `~` to prevent unintended minor version upgrades.
- [`f635139`](https://github.com/backstage/backstage/commit/f635139): Limited `@remixicon/react` dependency to versions below 4.9.0 due to a license change in that release.
- [`2ba8c10`](https://github.com/backstage/backstage/commit/2ba8c10): Following the removal of `NavItemBlueprint` in `@backstage/frontend-plugin-api`, the built-in app nav was updated to keep accepting legacy `nav-item` extensions so older plugins continue to work until they migrate.
- [`cad156e`](https://github.com/backstage/backstage/commit/cad156e): Replaced old config schema values from existing extensions and blueprints.
- [`085133f`](https://github.com/backstage/backstage/commit/085133f): The `zod` dependency has been bumped from `^3.25.76 || ^4.0.0` to `^4.0.0`, since `configSchema` requires the full Zod v4 package for JSON Schema support.

#### 0.4.3

##### Patch Changes

- [`effa7bf`](https://github.com/backstage/backstage/commit/effa7bf): Migrated `AppLanguageApi` extension to use the new `configSchema` option.
- [`e5baa20`](https://github.com/backstage/backstage/commit/e5baa20): Added support for configuring URL redirects on the `app/routes` extension. Redirects can be configured through `app-config` as an array of `{from, to}` path pairs, which will cause navigation to the `from` path to be redirected to the `to` path.

  For example:

  ```yaml
  app:
    extensions:
      - app/routes:
          config:
            redirects:
              - from: /old-path
                to: /new-path
  ```

- [`9244b70`](https://github.com/backstage/backstage/commit/9244b70): The default auth implementation now checks for a `logoutUrl` in the logout response body. If the auth provider returns one (e.g. Auth0 federated logout), the browser is redirected to that URL to clear the provider's session cookies. This is backward compatible — providers that return an empty response are unaffected.
- [`e4804ab`](https://github.com/backstage/backstage/commit/e4804ab): Updated the default `DialogApi` implementation to support the new `open` method. The dialog display layer no longer renders any dialog chrome — callers provide their own dialog component. The deprecated `show` and `showModal` methods now use `open` internally with a Material UI dialog wrapper for backward compatibility.
- [`d66a3ec`](https://github.com/backstage/backstage/commit/d66a3ec): Updated the `PageLayout` swap to pass a clickable `titleLink` on the `PluginHeader`, resolved from the plugin's root route ref.

### `@backstage/plugin-auth-backend` (0.27.3 → [0.29.1](../../changelogs/@backstage/plugin-auth-backend.md#0291))

#### 0.29.0

##### Minor Changes

- [`29d398b`](https://github.com/backstage/backstage/commit/29d398b): **BREAKING**: Hardened the default allowed patterns for CIMD and DCR to replace the previous permissive `['*']` wildcards with specific defaults for known MCP clients. If you previously relied on the default `['*']` patterns, you will need to explicitly configure the patterns you need in your `app-config.yaml`.

  **CIMD (`experimentalClientIdMetadataDocuments`):**

  - `allowedClientIdPatterns` now defaults to Claude, VS Code, and the built-in Backstage CLI instead of `['*']`
  - `allowedRedirectUriPatterns` now defaults to loopback addresses (localhost, 127.0.0.1, [::1]) instead of `['*']`

  **DCR (`experimentalDynamicClientRegistration`):**

  - `allowedRedirectUriPatterns` now defaults to Cursor and loopback addresses instead of `['*']`

  If you need to allow additional clients or redirect URIs, you can override these defaults in your `app-config.yaml`:

  ```yaml
  auth:
    experimentalClientIdMetadataDocuments:
      enabled: true
      allowedClientIdPatterns:
        - 'https://claude.ai/*'
        - 'https://vscode.dev/*'
        - 'https://my-custom-client.example.com/*'
      allowedRedirectUriPatterns:
        - 'http://localhost:*'
        - 'http://127.0.0.1:*'
        - 'https://my-app.example.com/callback'
    experimentalDynamicClientRegistration:
      enabled: true
      allowedRedirectUriPatterns:
        - 'cursor://*'
        - 'http://localhost:*'
        - 'http://127.0.0.1:*'
        - 'myapp://*'
  ```

##### Patch Changes

- [`9f269d7`](https://github.com/backstage/backstage/commit/9f269d7): Limit the size of fetched client ID metadata documents to prevent oversized responses from being accepted.
- [`3f5e7ec`](https://github.com/backstage/backstage/commit/3f5e7ec): Improved OIDC error messages to include the rejected redirect URI or client ID, making it easier to debug client registration failures.
- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.
- [`27f24a9`](https://github.com/backstage/backstage/commit/27f24a9): Refresh token usage now verifies that the user's catalog entity still exists before issuing a new access token. If the user has been removed from the catalog, the refresh is rejected and the session is revoked. Transient catalog errors reject the refresh but preserve the session for retry. This check can be disabled by setting `auth.experimentalRefreshToken.dangerouslyDisableCatalogPresenceCheck` to `true`.
- [`4f62755`](https://github.com/backstage/backstage/commit/4f62755): Improved the OAuth consent dialog for MCP authorization by showing more client details, including the client metadata host for CIMD clients, the metadata URL, callback URL, and requested scopes.

#### 0.28.0

##### Minor Changes

- [`d7c67cd`](https://github.com/backstage/backstage/commit/d7c67cd): **BREAKING**: The setting `auth.omitIdentityTokenOwnershipClaim` has had its default value switched to `true`.

  With this setting Backstage user tokens issued by the `auth` backend will no longer contain an `ent` claim - the one with the user's ownership entity refs. This means that tokens issued in large orgs no longer risk hitting HTTP header size limits.

  To get ownership info for the current user, code should use the `userInfo` core service. In practice code will typically already conform to this since the `ent` claim has not been readily exposed in any other way for quite some time. But code which explicitly decodes Backstage tokens - which is strongly discouraged - may be affected by this change.

  The setting will remain for some time to allow it to be set back to `false` if need be, but it will be removed entirely in a future release.

##### Patch Changes

- [`482ceed`](https://github.com/backstage/backstage/commit/482ceed): Migrated from `assertError` to `toError` for error handling.
- [`dc87ac1`](https://github.com/backstage/backstage/commit/dc87ac1): Fixed CIMD redirect URI matching to allow any port for localhost addresses per RFC 8252 Section 7.3. Native CLI clients use ephemeral ports for OAuth callbacks, which are now accepted when the registered redirect URI uses a localhost address.

### `@backstage/plugin-auth-node` (0.6.14 → [0.7.2](../../changelogs/@backstage/plugin-auth-node.md#072))

#### 0.7.1

##### Patch Changes

- [`744fa1f`](https://github.com/backstage/backstage/commit/744fa1f): Removed duplicated entries that appeared in both `dependencies` and `devDependencies`.
- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

#### 0.7.0

##### Minor Changes

- [`fa55078`](https://github.com/backstage/backstage/commit/fa55078): **BREAKING**: Refactored `SignInResolverFactoryOptions` to use a schema-first generic pattern, following Zod's [recommended approach](https://zod.dev/library-authors?id=how-to-accept-user-defined-schemas#how-to-accept-user-defined-schemas) for writing generic functions. The type parameters changed from `<TAuthResult, TOptionsOutput, TOptionsInput>` to `<TAuthResult, TSchema extends ZodType>`.

  This fixes "Type instantiation is excessively deep and possibly infinite" errors that occurred when the Zod version in a user's project did not align with the one in Backstage core.

  If you use `createSignInResolverFactory` without explicit type parameters (the typical usage), no changes are needed:

  ```ts
  // This usage is unchanged
  createSignInResolverFactory({
    optionsSchema: z.object({ domain: z.string() }).optional(),
    create(options = {}) {
      /* ... */
    },
  });
  ```

  If you reference `SignInResolverFactoryOptions` with explicit type parameters, update as follows:

  ```diff
  - SignInResolverFactoryOptions<MyAuthResult, MyOutput, MyInput>
  + SignInResolverFactoryOptions<MyAuthResult, typeof mySchema>
  ```

##### Patch Changes

- [`9244b70`](https://github.com/backstage/backstage/commit/9244b70): Added `OAuthAuthenticatorLogoutResult` type. The `logout` method on `OAuthAuthenticator` can now optionally return `{ logoutUrl }` to trigger a browser redirect after sign-out. This allows providers like Auth0 to clear their session cookies by redirecting to their logout endpoint.

### `@backstage/plugin-catalog-backend` (3.5.0 → [3.8.0](../../changelogs/@backstage/plugin-catalog-backend.md#380))

#### 3.8.0

##### Minor Changes

- [`8f20cc2`](https://github.com/backstage/backstage/commit/8f20cc2): `/entities/by-query` now accepts a `totalItems` parameter (`'include'` or `'exclude'`, default `'include'`) that controls whether the response's `totalItems` count is computed. Pass `'exclude'` to skip the count entirely when the caller doesn't need it — useful for cursor-paginated user interfaces that only display the count cosmetically. The accepted values list is forward-compatible: future modes (e.g. approximate counts) can be added without breaking existing callers.

  The internal `QueryEntitiesInitialRequest.skipTotalItems` option has been replaced by `totalItems: 'include' | 'exclude'`. Note that `skipTotalItems` was never exposed as a REST API parameter, so this is only a TypeScript-level change affecting direct callers of `EntitiesCatalog.queryEntities`.

  Sort field keys are now lowercased before comparing against `search.key`, fixing silent mismatches for camelCase field names. The `NULLS LAST` ordering clause has been removed since NULL sort values are already excluded by the `WHERE` clause.

- [`dc7678c`](https://github.com/backstage/backstage/commit/dc7678c): Removed the immediate mode stitching strategy. All stitching now uses the deferred mode, which processes entities asynchronously via a worker queue. If your configuration includes `catalog.stitchingStrategy.mode: 'immediate'`, it will be ignored with a deprecation warning. The `pollingInterval` and `stitchTimeout` settings continue to work as before.

##### Patch Changes

- [`9698738`](https://github.com/backstage/backstage/commit/9698738): Dropped the legacy `search_entity_id_idx` index which is now redundant with the covering unique index on `(entity_id, key, value)`. The old index caused the query planner to choose an inefficient scan pattern for catalog list queries with multiple sort fields, leading to severely degraded performance on large catalogs.
- [`ccfa4f1`](https://github.com/backstage/backstage/commit/ccfa4f1): Optimized `entitiesBatch` on PostgreSQL to use `= ANY(array)` instead of `WHERE IN ($1, $2, ...)`. This produces a single stable query plan regardless of batch size, instead of up to 200 different plans that pollute the query plan cache. On PostgreSQL, batching is no longer needed so all entity refs are fetched in a single query.
- [`750b310`](https://github.com/backstage/backstage/commit/750b310): `HAS_LABEL` and `HAS_ANNOTATION` permission rules are now case insensitive.
- [`24775dc`](https://github.com/backstage/backstage/commit/24775dc): Added a migration that tunes PostgreSQL automatic vacuum thresholds on the `search`, `final_entities`, `relations`, and `refresh_state_references` tables, and fixes column statistics for `entity_id` in the `search` table. This prevents the query planner from falling back to sequential scans when table maintenance falls behind, keeping catalog queries fast on large installations.
- [`39c5fbb`](https://github.com/backstage/backstage/commit/39c5fbb): Added extended multi-column statistics on `(key, value)` in the `search` table (PostgreSQL only). This tells the query planner about the correlation between the `key` and `value` columns, fixing severe row count estimation errors on compound filter queries. Without this, the planner could choose to materialize and sort thousands of rows instead of using the LIMIT short-circuit index scan — causing 10-40x slower catalog list views when multiple filters are active.
- [`4829e89`](https://github.com/backstage/backstage/commit/4829e89): Split the `queryEntities` list and count into separate queries instead of a multi-reference CTE. When the `filtered` CTE was referenced twice (once for the count, once for the data), PostgreSQL refused to inline it, forcing full materialization of the filtered set before applying `LIMIT`. By running the count as a standalone query, the list CTE is only referenced once, allowing the planner to short-circuit on `LIMIT` and return the first page in milliseconds instead of waiting for the full filtered set to materialize.

  The standalone count query also fixes a pre-existing bug where `totalItems` was inflated for entities with multi-valued sort fields (e.g. tags). The old CTE-based count counted search rows, so an entity with 3 tags would be counted 3 times. The new count uses `EXISTS` to count distinct entities, aligning `totalItems` with the number of entities actually reachable through cursor pagination.

- [`774d698`](https://github.com/backstage/backstage/commit/774d698): Fixed a race condition in the stitch queue and entity processing claim logic where `SELECT FOR UPDATE SKIP LOCKED` row locks were released before the subsequent timestamp bump, allowing multiple workers to claim the same rows. Both the select and update now run inside a single transaction for MySQL and PostgreSQL.
- [`0b8b677`](https://github.com/backstage/backstage/commit/0b8b677): Improved stitch queue semantics to prevent overlapping stitches for the same entity. New stitch requests that arrive while a stitch is in progress now only update the ticket (not the timestamp), so the in-progress worker is not interrupted. When the worker completes and detects a pending re-stitch, the queue entry becomes immediately eligible for pickup instead of waiting for the timeout period.

#### 3.7.0

##### Minor Changes

- [`c2de113`](https://github.com/backstage/backstage/commit/c2de113): **BREAKING**: When paginating entities with an order field via `/entities/by-query`, entities that lack the order field are now excluded from both the result set and the `totalItems` count. Previously these entities appeared at the end of the sorted result via `NULLS LAST`, but cursor-based pagination could not actually reach them past the first page — the count over-reported the number of navigable entities. The new behavior aligns the count with what is actually returned.

  This also removes the `DISTINCT` deduplication from the sort-field CTE, which is a prerequisite for the planner to use the `(key, value, entity_id)` index in sort order and short-circuit on `LIMIT`. Installations with duplicate search rows should land the search-table deduplication migration before adopting this change.

##### Patch Changes

- [`3f5e7ec`](https://github.com/backstage/backstage/commit/3f5e7ec): Added `catalog.actions.experimentalCatalogLayersDescriptions.enabled` config option. When enabled, the `query-catalog-entities` action description references `get-catalog-model-description` for field information instead of embedding a static model description.
- [`ccbad9d`](https://github.com/backstage/backstage/commit/ccbad9d): Improved the performance of the `catalog_entities_count` metric.

  The legacy Prometheus and OpenTelemetry observable gauges previously each ran their own copy of the per-kind count query against the `search` table on every metrics scrape. On large catalogs this could pile up faster than the queries completed, contending for buffers and stalling the database.

  The two callbacks now share a single query result with a short in-process TTL cache, and the underlying query reads from `final_entities` instead of `search`, avoiding the bitmap heap scans that dominated the previous form. The emitted labels and values are unchanged.

- [`17a9550`](https://github.com/backstage/backstage/commit/17a9550): Deprecated immediate mode stitching (`catalog.stitchingStrategy.mode: 'immediate'`). A warning is now logged on startup when immediate mode is configured. Immediate mode will be removed in the next Backstage release. Migrate to deferred mode (the default) by removing the `stitchingStrategy` configuration or setting `mode: 'deferred'`.
- [`add5d1a`](https://github.com/backstage/backstage/commit/add5d1a): Restructured the entity listing endpoint so that, when a sort field is specified, the search-by-key index drives the query rather than being side-joined onto `final_entities`. This lets PostgreSQL walk the `(key, value, entity_id)` index in already-sorted order and short-circuit on `LIMIT`, reducing typical broad-filter paginated list times from seconds to milliseconds. Entities that lack the sort field still appear at the end of sorted results (NULLS LAST semantics preserved), ordered by `entity_id`.
- [`387ea7d`](https://github.com/backstage/backstage/commit/387ea7d): Simplified the entity facets aggregation from `COUNT(DISTINCT entity_id)` to `COUNT(*)`. The unique constraint on `(entity_id, key, value)` guarantees each entity appears at most once per search row group, making the `DISTINCT` unnecessary. This allows the database to use a simpler aggregation plan.
- [`3f55b73`](https://github.com/backstage/backstage/commit/3f55b73): Improved the performance of the entity facets endpoint when filters are applied. The filtered entity set is now combined with the search table through an inner join rather than a `WHERE entity_id IN (subquery)`. Results are unchanged; on large catalogs the query planner is able to choose dramatically cheaper plans, with measured improvements ranging from roughly 1.2× on already-fast cases to 7× or more on high-cardinality facets.
- [`b33f845`](https://github.com/backstage/backstage/commit/b33f845): Fixed several database migration `down` functions that were not properly reversible, causing the SQL report to show warnings:

  - `20241003170511_alter_target_in_locations.js`: both `up` and `down` now include `.notNullable()` when altering the `locations.target` column, preventing the `NOT NULL` constraint from being accidentally dropped when widening the column type from `varchar(255)` to `text`.
  - `20220116144621_remove_legacy.js`: the `down` function now properly recreates the three dropped legacy tables (`entities`, `entities_search`, `entities_relations`) with correct columns and indices.
  - `20210302150147_refresh_state.js`: the `down` function now drops dependent tables in the correct order (avoiding a FK constraint violation) and fixes a typo where the table was referred to as `references` instead of `refresh_state_references`.
  - `20201005122705_add_entity_full_name.js`: the `down` function now drops the `full_name` column from `entities` (not `entities_search`), and restores the `entities_unique_name` index with the correct column order `(kind, name, namespace)`.
  - `20200702153613_entities.js`: the `down` function now uses `table.integer('generation')` instead of `table.string('generation')`, restoring the correct column type.

- [`cde3643`](https://github.com/backstage/backstage/commit/cde3643): Added missing description to the `type` parameter on the `unregister-entity` MCP action.
- [`cf195de`](https://github.com/backstage/backstage/commit/cf195de): Fixed a performance regression in the `/entity-facets` endpoint when filters or permission conditions are applied, by routing the EXISTS-based filter through `final_entities` instead of correlating against the much larger `search` table.
- [`07ec25d`](https://github.com/backstage/backstage/commit/07ec25d): Moved `generateStableHash` out of shared utility file to avoid pulling `node:crypto` into browser bundles
- [`bc32c13`](https://github.com/backstage/backstage/commit/bc32c13): Added a missing index on `relations.target_entity_ref`. Several query paths (orphan deletion, entity ancestry, eager pruning) join or filter on this column, but no index existed — causing full sequential scans of the relations table on every invocation. On a production catalog with ~3.5M relation rows, individual lookups were taking ~122ms (full table scan) instead of <1ms (index scan).
- [`744fa1f`](https://github.com/backstage/backstage/commit/744fa1f): Removed duplicated entries that appeared in both `dependencies` and `devDependencies`.
- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.
- [`7445f0f`](https://github.com/backstage/backstage/commit/7445f0f): Added a migration that removes duplicate rows from the `search` table, creates covering indices for improved query performance, and adds a `UNIQUE` constraint on `(entity_id, key, value)`.

  This is a long-running migration on large catalogs. On PostgreSQL with millions of search rows, the index creation may take 5-15 minutes per index. During this time, other pods running the previous version will continue to serve traffic normally — the index creation does not block reads or writes. However, if a Kubernetes liveness probe kills the pod before the index build completes, the build is lost and the next startup will start over. On large tables this can repeat indefinitely.

  **For large installations**, it is recommended to run the following SQL commands against your PostgreSQL database **before deploying** this version. Each index build takes a few minutes but does not block reads or writes. If these have already completed, the migration will detect the existing indices and skip all work — startup will be instant.

  ```sql
  -- Step 1: Remove duplicate search rows
  WITH cte AS (
    SELECT ctid, row_number() OVER (PARTITION BY entity_id, key, value) AS rn
    FROM search
  )
  DELETE FROM search USING cte WHERE search.ctid = cte.ctid AND cte.rn > 1;

  -- Step 2: Create new indices (run each separately)
  CREATE UNIQUE INDEX CONCURRENTLY IF NOT EXISTS
    search_entity_key_value_idx ON search (entity_id, key, value);
  CREATE INDEX CONCURRENTLY IF NOT EXISTS
    search_key_value_entity_idx ON search (key, value, entity_id);
  CREATE INDEX CONCURRENTLY IF NOT EXISTS
    search_facets_covering_idx ON search (key, original_value, entity_id)
    WHERE original_value IS NOT NULL;

  -- Step 3: Drop old indices that are no longer needed
  DROP INDEX CONCURRENTLY IF EXISTS search_key_value_idx;
  DROP INDEX CONCURRENTLY IF EXISTS search_key_original_value_idx;
  ```

  Also fixed `buildEntitySearch` to remove duplicate output for entities with duplicate array values, and added `ON CONFLICT DO UPDATE` to `syncSearchRows` so that concurrent stitching races are handled gracefully.

#### 3.6.0

##### Minor Changes

- [`d16311f`](https://github.com/backstage/backstage/commit/d16311f): Added a `location_entity_ref` column to the `locations` database table that stores the full entity ref of the corresponding `kind: Location` catalog entity for each registered location row. The value is pre-computed and persisted so that it no longer needs to be recomputed from the location's type and target on every read.
- [`e5fcfcb`](https://github.com/backstage/backstage/commit/e5fcfcb): Added `ModelProcessor` that validates catalog entities against the compiled catalog model schemas, and integrated it into the `CatalogBuilder` and `CatalogPlugin`. This processor is only activated if you explicitly add catalog model sources to your backend; there is no functional change for regular catalog usage.
- [`c384fff`](https://github.com/backstage/backstage/commit/c384fff): Location responses now include an `entityRef` field with the stable entity reference for each location. The `entityRef` field is also filterable via `POST /locations/by-query`. Added `PUT /locations/:id` endpoint for updating the type and target of an existing location.

##### Patch Changes

- [`2e5c5f8`](https://github.com/backstage/backstage/commit/2e5c5f8): Bumped `glob` dependency from v7/v8/v11 to v13 to address security vulnerabilities in older versions. Bumped `rollup` from v4.27 to v4.59+ to fix a high severity path traversal vulnerability (GHSA-mw96-cpmx-2vgc).
- [`7e63730`](https://github.com/backstage/backstage/commit/7e63730): Removed deprecated `PermissionAuthorizer` support and the `createPermissionIntegrationRouter` fallback path from `CatalogBuilder`. The `permissionsRegistry` service is now required, and `permissions` is always a `PermissionsService`.
- [`056e18e`](https://github.com/backstage/backstage/commit/056e18e): Removed the internal `addPermissions` and `addPermissionRules` methods from `CatalogBuilder`, and removed the `catalogPermissionExtensionPoint` wiring from `CatalogPlugin`. Custom permission rules and permissions should be registered via `coreServices.permissionsRegistry` directly.
- [`6884814`](https://github.com/backstage/backstage/commit/6884814): Improved catalog entity filter query performance by switching from `IN (subquery)` to `EXISTS (correlated subquery)` patterns. This enables PostgreSQL semi-join optimizations and fixes `NOT IN` NULL-semantics pitfalls by using `NOT EXISTS` instead.
- [`9da73bf`](https://github.com/backstage/backstage/commit/9da73bf): Reduced search table write churn during stitching by syncing only changed rows instead of doing a full delete and re-insert. On Postgres this uses a single writable CTE, on MySQL a temporary table merge with deadlock retry, and on SQLite the previous bulk replace.
- [`482ceed`](https://github.com/backstage/backstage/commit/482ceed): Migrated from `assertError` to `toError` for error handling.
- [`375b546`](https://github.com/backstage/backstage/commit/375b546): Fixed a deadlock in the catalog processing loop that occurred when running multiple replicas. The `getProcessableEntities` method used `SELECT ... FOR UPDATE SKIP LOCKED` to prevent concurrent processors from claiming the same rows, but the call was not wrapped in a transaction, so the row locks were released before the subsequent `UPDATE` executed. This allowed multiple replicas to select and update overlapping rows, causing PostgreSQL deadlock errors (code 40P01).
- [`79453c0`](https://github.com/backstage/backstage/commit/79453c0): Updated dependency `wait-for-expect` to `^4.0.0`.

### `@backstage/plugin-catalog-backend-module-msgraph` (0.9.1 → [0.10.3](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#0103))

#### 0.10.3

##### Patch Changes

- [`e0889a3`](https://github.com/backstage/backstage/commit/e0889a3): chore(deps): bump `qs` from 6.15.1 to 6.15.2
- [`e6493b9`](https://github.com/backstage/backstage/commit/e6493b9): Fixed a bug where setting `user.select` to an empty array would cause all users to be dropped from the catalog instead of using the default set of fields.
- [`8930d77`](https://github.com/backstage/backstage/commit/8930d77): Reverted the server-side `accountEnabled eq true` base filter that was added in v1.51.0, which broke the `userGroupMember` path because the group members endpoint doesn't support `$filter` on that property. Disabled users (`accountEnabled === false`) are now filtered client-side in both the `/users` and group members paths. The mutual exclusivity checks between `userFilter` and `userGroupMemberFilter`/`userGroupMemberSearch` have been restored.

#### 0.10.0

##### Minor Changes

- [`2bd0450`](https://github.com/backstage/backstage/commit/2bd0450): **BREAKING**: Disabled user accounts are now filtered out by default. The provider automatically applies an `accountEnabled eq true` filter, combining it with any custom `user.filter` you provide. If you previously included `accountEnabled eq true` in your user filter, it is safe to remove it, but leaving it in will not cause any issues.

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

### `@backstage/plugin-catalog-node` (2.1.0 → [2.2.2](../../changelogs/@backstage/plugin-catalog-node.md#222))

#### 2.2.1

##### Patch Changes

- [`ab1cdbb`](https://github.com/backstage/backstage/commit/ab1cdbb): Removed a handful of internal imports that referenced the package by its own name. Value imports were switched to relative paths, and type-only imports to `import type`. These self-referential imports could trigger circular initialization errors in bundled ESM and when the package was loaded via `jest.requireActual` — most visibly `Cannot access '_AppRootElementBlueprintesm' before initialization` from `@backstage/frontend-plugin-api`. There are no user-facing API changes.

#### 2.2.0

##### Minor Changes

- [`e5fcfcb`](https://github.com/backstage/backstage/commit/e5fcfcb): Added `provideStaticCatalogModel` that helps provide a static catalog model at startup.
- [`056e18e`](https://github.com/backstage/backstage/commit/056e18e): **BREAKING ALPHA**: Removed the deprecated `CatalogPermissionRuleInput`, `CatalogPermissionExtensionPoint`, and `catalogPermissionExtensionPoint` exports. Use `coreServices.permissionsRegistry` directly to register catalog entity permission rules and permissions.
- [`c384fff`](https://github.com/backstage/backstage/commit/c384fff): **BREAKING PRODUCERS**: Added `updateLocation` method to `CatalogService` for updating the type and target of an existing location. Any code that implements `CatalogService` must now provide this method.
- [`7a03196`](https://github.com/backstage/backstage/commit/7a03196): **BREAKING ALPHA**: Removed the following deprecated exports from `@backstage/plugin-catalog-node/alpha`:

  - `catalogServiceRef` — use `catalogServiceRef` from `@backstage/plugin-catalog-node` instead
  - `CatalogLocationsExtensionPoint` / `catalogLocationsExtensionPoint` — use the non-alpha equivalents from `@backstage/plugin-catalog-node` instead
  - `CatalogProcessingExtensionPoint` / `catalogProcessingExtensionPoint` — use the non-alpha equivalents from `@backstage/plugin-catalog-node` instead
  - `CatalogAnalysisExtensionPoint` / `catalogAnalysisExtensionPoint` — use the non-alpha equivalents from `@backstage/plugin-catalog-node` instead

### `@backstage/plugin-permission-node` (0.10.11 → [0.11.1](../../changelogs/@backstage/plugin-permission-node.md#0111))

#### 0.11.0

##### Minor Changes

- [`2f0519c`](https://github.com/backstage/backstage/commit/2f0519c): **BREAKING**: Cleaned up the `PolicyQueryUser` type:

  - `token` — **Removed.** Was previously deprecated in favor of `credentials` with `coreServices.auth`.
  - `expiresInSeconds` — **Removed.** Was previously deprecated.
  - `identity` — **Removed.** Was previously deprecated in favor of `info`.
  - `info` — **Deprecated.** Still required and populated for now; will be made optional and then removed in a future release.
  - `credentials` — Unchanged.

### `@backstage/plugin-permission-react` (0.4.41 → [0.5.2](../../changelogs/@backstage/plugin-permission-react.md#052))

#### 0.5.0

##### Minor Changes

- [`53954e1`](https://github.com/backstage/backstage/commit/53954e1): **BREAKING**: Removed the deprecated `PermissionedRoute` component. Use `RequirePermission` instead.

### `@backstage/plugin-signals-node` (0.1.29 → [0.2.2](../../changelogs/@backstage/plugin-signals-node.md#022))

#### 0.2.1

##### Patch Changes

- [`0c5e41f`](https://github.com/backstage/backstage/commit/0c5e41f): Removed unused dependencies that had no imports in source code.

#### 0.2.0

##### Minor Changes

- [`8397a9c`](https://github.com/backstage/backstage/commit/8397a9c): **BREAKING**: Removed the deprecated `SignalService` and `DefaultSignalService` exports. Use `SignalsService` and `DefaultSignalsService` instead.

### `@backstage/ui` (0.13.2 → [0.16.0](../../changelogs/@backstage/ui.md#0160))

#### 0.16.0

##### Minor Changes

- [`fc4e624`](https://github.com/backstage/backstage/commit/fc4e624): `Combobox` now supports async collections, incremental loading, client and server search, and rich or custom item rendering. Loading placeholders expose `.bui-ComboboxLoading` and `.bui-ComboboxLoadingRow`, and stale visible results expose `data-stale` on `.bui-ComboboxList`.

  **BREAKING**: The public `ComboboxProps` interface is now a union type.

  **Migration:**

  **Required on upgrade:**

  Replace interfaces that extend `ComboboxProps` with type intersections.

  ```diff
  - interface MyComboboxProps extends ComboboxProps {
  -   trackingId: string;
  - }
  + type MyComboboxProps = ComboboxProps & {
  +   trackingId: string;
  + };
  ```

  **Optional migration away from deprecated APIs:**

  Prefer `id` instead of `value` for plain options. Existing array-valued options using `value` remain supported as a deprecated compatibility path, but new option content fields and async option sources require `id`.

  Move input state and custom filtering into the nested `search` configuration:

  ```diff
  - <Combobox inputValue={query} onInputChange={setQuery} />
  + <Combobox search={{ inputValue: query, onInputChange: setQuery }} />
  ```

  The existing top-level input state props remain supported as a deprecated compatibility path for plain-array `options`.

  **Affected components:** Combobox

- [`fc4e624`](https://github.com/backstage/backstage/commit/fc4e624): `Select` now supports async collections, incremental loading, client and server search, and rich or custom item rendering. Loading placeholders expose `.bui-SelectLoading` and `.bui-SelectLoadingRow`, and stale retained results expose `data-stale` on `.bui-SelectList`.

  **BREAKING**: The public `SelectProps` interface is now a union type, and Select popover list content is no longer a direct child of `.bui-SelectPopover`.

  **Migration:**

  **Required on upgrade:**

  Replace interfaces that extend `SelectProps` with type intersections.

  ```diff
  - interface MySelectProps extends SelectProps {
  -   trackingId: string;
  - }
  + type MySelectProps = SelectProps & {
  +   trackingId: string;
  + };
  ```

  Update CSS selectors that rely on list content being a direct child of `.bui-SelectPopover`. Select popovers now use the standard BUI Popover content structure, with contents wrapped in `.bui-Box.bui-PopoverContent`. The existing `.bui-Popover.bui-SelectPopover` root classes are unchanged.

  **Optional migration away from deprecated APIs:**

  Prefer `id` instead of `value` for plain options. Existing array-valued options using `value` remain supported as a deprecated compatibility path, but new option content fields and async option sources require `id`.

  Replace `searchable` and `searchPlaceholder` with nested `search` configuration:

  ```diff
  - <Select searchable searchPlaceholder="Search owners" />
  + <Select search={{ placeholder: 'Search owners' }} />
  ```

  **Affected components:** Select

##### Patch Changes

- [`3d6c2e4`](https://github.com/backstage/backstage/commit/3d6c2e4): Updated the dark theme neutral background tokens to provide clearer contrast between neutral surfaces.
- [`c86efcd`](https://github.com/backstage/backstage/commit/c86efcd): Fixed the Table component not filling its container width in Firefox. The `overflow` style is now applied to a wrapper element instead of the `<table>` element directly, which avoids a Firefox behavior where non-visible overflow on tables causes them to shrink-wrap to content size.
- [`adf94f5`](https://github.com/backstage/backstage/commit/adf94f5): Make Skeleton component background aware, automatically adjusting its color to maintain visible contrast against neutral parent surfaces.

  **Affected components:** Skeleton

- [`b06b3c7`](https://github.com/backstage/backstage/commit/b06b3c7): Fixed header tab links to respect the configured router `basename`.

  **Affected components:** Header

- [`14a101f`](https://github.com/backstage/backstage/commit/14a101f): Switch now adapts its track and thumb colors based on the background context of its parent container, and uses the accent token family when selected.

  **Affected components:** Switch

- [`66c4e55`](https://github.com/backstage/backstage/commit/66c4e55): Fixed tab indicator not updating position when tab content changes width dynamically.
- [`b33bb24`](https://github.com/backstage/backstage/commit/b33bb24): Added a new `NumberField` component for numeric input with support for min, max, step, and keyboard increment/decrement.

  **Affected components:** NumberField

- [`350407d`](https://github.com/backstage/backstage/commit/350407d): Fixed async pagination in `Combobox` and `Select` popovers so additional pages load as users scroll instead of loading every page immediately. `Combobox` now uses `.bui-PopoverContent` as its scroll container, while all `Select` variants use the new `.bui-SelectResults` results container.

  Searchable `Select` keeps its search field fixed while results scroll. The new public classes `.bui-SelectContent` and `.bui-SelectResults` expose this layout for theme customization.

  **Affected components:** Combobox, Select

- [`e989f95`](https://github.com/backstage/backstage/commit/e989f95): Fixed `Combobox` client search crashing when used with plain options.

  **Affected components:** Combobox

- [`1f709a3`](https://github.com/backstage/backstage/commit/1f709a3): Fixed Header breadcrumb typography so it remains consistent when component styles are loaded in different orders.

  **Affected components:** Header

- [`5d80f77`](https://github.com/backstage/backstage/commit/5d80f77): Introduces a new set of semantic color token families — Accent, Announcement, Warning, Negative, and Positive — each providing a consistent set of background, foreground, and border tokens for both light and dark themes. A gray scale (`--bui-gray-1` through `--bui-gray-11`) and updated foreground tokens are also included.

  The previous tokens remain in place for backward compatibility but are now deprecated and will be removed in a future release.

  **Migration:**

  **Neutral backgrounds**

  The neutral background tokens keep their existing names (`--bui-bg-app`, `--bui-bg-neutral-1` through `--bui-bg-neutral-4`) but are updated with new solid-color values for both light and dark themes. No token renaming is required. The `-hover`, `-pressed`, and `-disabled` interaction variants of these tokens are deprecated and should be removed.

  **Foreground**

  | Deprecated         | Replacement             |
  | ------------------ | ----------------------- |
  | `--bui-fg-danger`  | `--bui-fg-negative`     |
  | `--bui-fg-success` | `--bui-fg-positive`     |
  | `--bui-fg-info`    | `--bui-fg-announcement` |

  **Accent**

  | Deprecated                | Replacement                |
  | ------------------------- | -------------------------- |
  | `--bui-bg-solid`          | `--bui-accent-bg`          |
  | `--bui-bg-solid-hover`    | `--bui-accent-bg-hover`    |
  | `--bui-bg-solid-disabled` | `--bui-accent-bg-disabled` |
  | `--bui-fg-solid`          | `--bui-accent-fg`          |
  | `--bui-fg-solid-disabled` | `--bui-accent-fg-disabled` |

  **Positive**

  | Deprecated               | Replacement                 |
  | ------------------------ | --------------------------- |
  | `--bui-bg-success`       | `--bui-positive-bg-subdued` |
  | `--bui-fg-success-on-bg` | `--bui-positive-fg-subdued` |
  | `--bui-border-success`   | `--bui-positive-border`     |

  **Negative**

  | Deprecated              | Replacement                 |
  | ----------------------- | --------------------------- |
  | `--bui-bg-danger`       | `--bui-negative-bg-subdued` |
  | `--bui-fg-danger-on-bg` | `--bui-negative-fg-subdued` |
  | `--bui-border-danger`   | `--bui-negative-border`     |

  **Warning**

  | Deprecated               | Replacement                |
  | ------------------------ | -------------------------- |
  | `--bui-bg-warning`       | `--bui-warning-bg-subdued` |
  | `--bui-fg-warning-on-bg` | `--bui-warning-fg-subdued` |
  | `--bui-border-warning`   | `--bui-warning-border`     |

  **Announcement**

  | Deprecated            | Replacement                     |
  | --------------------- | ------------------------------- |
  | `--bui-bg-info`       | `--bui-announcement-bg-subdued` |
  | `--bui-fg-info-on-bg` | `--bui-announcement-fg-subdued` |
  | `--bui-border-info`   | `--bui-announcement-border`     |

#### 0.15.0

##### Minor Changes

- [`a281469`](https://github.com/backstage/backstage/commit/a281469): Add support for flex item props (`grow`, `shrink`, and `basis`) to `Box`, `Card`, `Grid`, and `Flex` itself.

  **Affected components:** Box, Card, Grid, Flex

- [`5351d8a`](https://github.com/backstage/backstage/commit/5351d8a): Added a `sticky` prop to the `Header` component. When `true`, the title-and-actions bar stays fixed to the top of its scroll container while the rest of the header (tags, description, metadata) scrolls away. The sticky bar background color automatically matches the container surface using the bg-consumer system.

  **BREAKING**: Removed the main header class from the `Header` component. Custom styles that target this class should be updated to target the component sections that remain.

  **Affected components:** Header

##### Patch Changes

- [`3846774`](https://github.com/backstage/backstage/commit/3846774): Added missing dependencies that were previously only available transitively.
- [`e8a1a35`](https://github.com/backstage/backstage/commit/e8a1a35): Added `isPending` prop to Alert, Button, ButtonIcon, Table, and TableRoot as a replacement for the `loading` prop, aligning with React Aria naming conventions. The `loading` prop is now deprecated but still supported as an alias. CSS selectors now use `data-ispending` instead of `data-loading` for styling pending states; `data-loading` is still emitted for backward compatibility but will be removed alongside the `loading` prop.

  **Affected components:** Alert, Button, ButtonIcon, Table, TableRoot

- [`37535b2`](https://github.com/backstage/backstage/commit/37535b2): Added a public `--bui-bg-inherit` CSS variable that resolves to the background
  color of the nearest enclosing bg provider (`Box`, `Flex`, `Grid`, `Card`,
  `Accordion`, or any element with a `data-bg` attribute), falling back to
  `--bui-bg-app`. Use it from CSS for sticky or fixed elements that need to match
  their surrounding surface without hardcoding a specific level.

  ```css
  .searchBarContainer {
    position: sticky;
    top: 0;
    background-color: var(--bui-bg-inherit);
  }
  ```

  As part of this change, the `data-bg` painting rules previously duplicated in
  `Box`, `Flex`, `Grid`, `Accordion`, and `Card` have been centralized into a
  single source in `core.css`. Painting and component behavior are unchanged for
  all existing usages, with one minor expansion: any element with a `data-bg`
  attribute (including provider elements and any element that sets it directly)
  is now painted, not only `Box`/`Flex`/`Grid`/`Card`/`Accordion` elements.

- [`e2d9831`](https://github.com/backstage/backstage/commit/e2d9831): Tightened React Aria dependency version ranges from `^` to `~` to prevent unintended minor version upgrades.
- [`e7fc79f`](https://github.com/backstage/backstage/commit/e7fc79f): Added support for grouping options into sections in the Select component. You can now pass section objects with a `title` and a nested `options` array alongside (or instead of) regular options to render grouped dropdowns with section headers.

  **Affected components:** Select

- [`76635ae`](https://github.com/backstage/backstage/commit/76635ae): Disabled `Card` scroll shadow in browsers that don't support `animation-timeline: scroll()`. Prevents the shadow from being always visible over the `CardBody` when there's nothing to scroll or the body is not scrolled.

  **Affected components:** Card

- [`de75f7c`](https://github.com/backstage/backstage/commit/de75f7c): Fixed `CardBody` showing an unwanted scrollbar when constrained below the scroll shadow height.

  **Affected components:** Card

- [`a42766e`](https://github.com/backstage/backstage/commit/a42766e): Fixed dark mode background for Dialog component by correcting the theme attribute selector from `data-theme` to `data-theme-mode`.

  **Affected components:** Dialog

- [`c6fc76f`](https://github.com/backstage/backstage/commit/c6fc76f): Fixed an issue where the active tab indicator would disappear shortly after page load for uncontrolled Tabs.

  **Affected components:** Tabs

- [`5520e07`](https://github.com/backstage/backstage/commit/5520e07): Updated field components to grow within flex layouts instead of forcing their width to remain fixed.
- [`11699ac`](https://github.com/backstage/backstage/commit/11699ac): Updated `PasswordField` to visually match `TextField`, including consistent focus rings, error states, disabled appearance, and background colour behaviour.

  **Affected components:** PasswordField

- [`d1be10c`](https://github.com/backstage/backstage/commit/d1be10c): Updated React Aria dependencies to v1.17.0 and migrated imports from individual `@react-aria/*` and `@react-stately/*` packages to the monopackages (`react-aria`, `react-stately`). This fixes a type resolution error for `@react-types/table` that occurred in new app installations.
- [`c96e2b3`](https://github.com/backstage/backstage/commit/c96e2b3): Added `description`, `tags`, and `metadata` props to the `Header` component. The `description` prop accepts a markdown string with support for inline links. The `tags` prop renders a row of text or link items above the title. The `metadata` prop renders key-value pairs below the description. The `breadcrumbs` prop has been deprecated and will be removed in a future release.

  **Affected components:** Header

- [`4bb649d`](https://github.com/backstage/backstage/commit/4bb649d): Fixed Table with row selection creating phantom scroll height on ancestor elements by establishing a containing block for visually-hidden checkbox inputs.

  **Affected components:** Table, TableRoot

- [`f635139`](https://github.com/backstage/backstage/commit/f635139): Limited `@remixicon/react` dependency to versions below 4.9.0 due to a license change in that release.
- [`5b85902`](https://github.com/backstage/backstage/commit/5b85902): Fix `Card href=...` not showing a focus indicator on keyboard navigation. `Link` now composes `useFocusRing`, emits `data-focus-visible`, and renders a `--bui-ring` outline when keyboard-focused. The Card's existing focus-ring CSS matches when the trigger is focused.

  _Affected components_: Card, Link

- [`23ee789`](https://github.com/backstage/backstage/commit/23ee789): Added invalid-state styling for Checkbox and corresponding Storybook variants for verification.

  **Affected components:** Checkbox, CheckboxGroup

- [`38bb056`](https://github.com/backstage/backstage/commit/38bb056): Adjusted PluginHeader spacing and borders so headers with and without tabs align more consistently with surrounding page content, including when paired with page headers.

  **Affected components:** PluginHeader, Header

- [`df705bb`](https://github.com/backstage/backstage/commit/df705bb): Fixed external URLs in BUI link components being rewritten as in-app paths when the app is served under a non-root base path. Absolute URLs (`http://`, `https://`, `//`, `mailto:`, `tel:`) are now passed through unchanged. Internal `href` values are resolved against the current `basename` exactly once, which also fixes a latent issue where internal link clicks under a non-root base path could navigate to a URL with the `basename` prefix doubled.

  **Affected components:** ButtonLink, Card, Link, Menu, Tab, Table, Tag

- [`3e0ff6c`](https://github.com/backstage/backstage/commit/3e0ff6c): Added container alignment to `Header` sections so tags, title actions, descriptions, metadata, and tabs use the same width as surrounding page content.

  **Affected components:** Header

- [`b67a862`](https://github.com/backstage/backstage/commit/b67a862): Updated Storybook development tooling for `@backstage/ui` to version 10.4.
- [`d726bcd`](https://github.com/backstage/backstage/commit/d726bcd): Added new `DatePicker` component — combines a date field and a calendar popover for selecting a date, built on React Aria with full keyboard and screen reader accessibility. Uses BUI design tokens throughout, including auto-incremented backgrounds via the bg consumer pattern.

  **Affected components:** DatePicker

- [`401916d`](https://github.com/backstage/backstage/commit/401916d): Added new `DateRangePicker` component — combines two date fields and a calendar popover for selecting a date range, built on React Aria with full keyboard and screen reader accessibility. Uses BUI design tokens throughout, including auto-incremented backgrounds via the bg consumer pattern.
- [`25909ba`](https://github.com/backstage/backstage/commit/25909ba): Added `searchDebounceMs` and `filterDebounceMs` options to `useTable` in `complete` mode. Both default to `0` (no debounce, no observable change for existing consumers); set them to defer the client-side filter/search/sort pipeline on large datasets without reimplementing input-layer debouncing. The controlled `search` / `onSearchChange` and `filter` / `onFilterChange` callbacks continue to fire on every change.

  **Affected components:** Table

- [`ddca41f`](https://github.com/backstage/backstage/commit/ddca41f): Added a new `Combobox` component. It pairs a text input with a filterable dropdown of options and supports single selection, sectioned options, icons, sizes, and custom typed values via `allowsCustomValue`.

  **Affected components:** Combobox

#### 0.14.0

##### Minor Changes

- [`8659f33`](https://github.com/backstage/backstage/commit/8659f33): **BREAKING**: The `Header` component's `tabs` prop now uses `HeaderNavTabItem[]` instead of `HeaderTab[]`. Tabs render as a `<nav>` element with links and optional dropdown menus instead of `role="tablist"`. A new `activeTabId` prop controls which tab is highlighted.

  **Migration:**

  ```diff
  - import { Header, type HeaderTab } from '@backstage/ui';
  + import { Header, type HeaderNavTabItem } from '@backstage/ui';

    // Tabs no longer support matchStrategy — active state is controlled via activeTabId
  - const tabs: HeaderTab[] = [
  -   { id: 'overview', label: 'Overview', href: '/overview', matchStrategy: 'prefix' },
  + const tabs: HeaderNavTabItem[] = [
  +   { id: 'overview', label: 'Overview', href: '/overview' },
    ];

  - <Header title="My Page" tabs={tabs} />
  + <Header title="My Page" tabs={tabs} activeTabId="overview" />
  ```

  **Affected components:** Header

- [`bed3307`](https://github.com/backstage/backstage/commit/bed3307): **BREAKING**: Dropped support for React 17. The minimum supported React version is now 18.
- [`b4a1875`](https://github.com/backstage/backstage/commit/b4a1875): **BREAKING**: Tab `href` values in the Header component are now resolved through the router context instead of being passed raw to the `<a>` tag. This means relative `href` values (e.g. `sub3`, `./sub4`, `../catalog`) are now resolved against the current route, and absolute `href` values may be affected by the router's `basename` configuration.

  **Migration:**

  Tab navigation should work the same for absolute `href` values in most setups. If you use relative `href` values in tabs, verify they resolve as expected. If your app configures a router `basename`, check that absolute tab `href` values still navigate correctly.

  **Affected components:** Header

- [`49ffe8a`](https://github.com/backstage/backstage/commit/49ffe8a): **BREAKING**: Removed the `toolbarWrapper` element from `PluginHeader` and dropped `toolbarWrapper` from `PluginHeaderDefinition.classNames`. Toolbar layout styles now live on `toolbar` (`.bui-PluginHeaderToolbar`).

  **Migration:** Update custom CSS that targeted `.bui-PluginHeaderToolbarWrapper` to use `.bui-PluginHeaderToolbar` instead.

  **Affected components:** PluginHeader

##### Patch Changes

- [`4032ad7`](https://github.com/backstage/backstage/commit/4032ad7): Added new `Badge` component for non-interactive labeling and categorization of content. It shares the visual appearance of `Tag` but renders as a plain DOM element with no interactive states.

  **Affected components:** Badge

- [`2e5c5f8`](https://github.com/backstage/backstage/commit/2e5c5f8): Bumped `glob` dependency from v7/v8/v11 to v13 to address security vulnerabilities in older versions. Bumped `rollup` from v4.27 to v4.59+ to fix a high severity path traversal vulnerability (GHSA-mw96-cpmx-2vgc).
- [`2840476`](https://github.com/backstage/backstage/commit/2840476): Resolved route-relative `href` props to absolute paths by default in all components, removing the need for the `resolveHref` option in component definitions.
- [`b4a1875`](https://github.com/backstage/backstage/commit/b4a1875): Added automatic active tab detection to the Header component. When `activeTabId` is omitted, the active tab is now auto-detected from the current route using `matchRoutes`. Pass an explicit `activeTabId` to override, or `null` for no active tab.

  **Affected components:** Header

- [`8d79835`](https://github.com/backstage/backstage/commit/8d79835): Added RangeSlider component for selecting numeric ranges.

  **Affected components:** Slider

- [`bcbb6eb`](https://github.com/backstage/backstage/commit/bcbb6eb): Made `SearchAutocomplete` background-aware. The input now adapts its background color based on its parent container's background level.

  **Affected components:** SearchAutocomplete

- [`f73876a`](https://github.com/backstage/backstage/commit/f73876a): Exported the `TableBodySkeleton` component as a public API for use outside of the built-in `Table` component. The component now accepts any column array whose items have an `id` property, making it compatible with custom column types.
- [`5081bcc`](https://github.com/backstage/backstage/commit/5081bcc): Fixed `Avatar` becoming elliptical in flex layouts by preventing it from shrinking.

  **Affected components:** Avatar

- [`d840ba9`](https://github.com/backstage/backstage/commit/d840ba9): Fixed relative `href` resolution for BUI link components. Relative paths like `../other` are now correctly turned into absolute paths before reaching the React Aria layer, ensuring client-side navigation goes to the right place.

  **Affected components:** ButtonLink, Card, CellProfile, CellText, Link, ListRow, MenuItem, MenuListBoxItem, Row, SearchAutocompleteItem, Tab, Tag

- [`8c2e24e`](https://github.com/backstage/backstage/commit/8c2e24e): Added `aria-hidden` to the `PluginHeader` icon to prevent screen readers from announcing decorative plugin icons.

  **Affected components:** PluginHeader

- [`3bc23a5`](https://github.com/backstage/backstage/commit/3bc23a5): Added support for disabling pagination in `useTable` complete mode by setting `paginationOptions: { type: 'none' }`. This skips data slicing and produces `pagination: { type: 'none' }` in `tableProps`, removing the need for consumers to manually override the pagination prop on `Table`. Also fixed complete mode not reacting to dynamic changes in `paginationOptions.pageSize`.

  **Affected components:** `useTable`

- [`67b8881`](https://github.com/backstage/backstage/commit/67b8881): Added `ModalOverlay` to `Dialog` so overlay styles are applied to the actual overlay rather than the modal content, and fixed dismissing via outside click in the process.

  **Affected components:** Dialog

- [`aa47a37`](https://github.com/backstage/backstage/commit/aa47a37): Add an initial CheckboxGroup component implementation and docs coverage.
- [`3d67aeb`](https://github.com/backstage/backstage/commit/3d67aeb): Added `prefers-reduced-motion` support to Tab indicator animations. Users with reduced motion preferences will no longer see sliding transitions on the active and hover indicators.

  **Affected components:** Tabs

- [`c368cf3`](https://github.com/backstage/backstage/commit/c368cf3): Updated dependency `@types/use-sync-external-store` to `^1.0.0`.
- [`d0f055f`](https://github.com/backstage/backstage/commit/d0f055f): Added `showPaginationLabel` prop to `TablePagination` and `useTable` pagination options. When set to `false`, the pagination label (e.g., "1 - 20 of 150") is hidden while navigation controls remain visible. Defaults to `true`.

  **Affected components:** `TablePagination`, `useTable`

- [`17eb8e0`](https://github.com/backstage/backstage/commit/17eb8e0): Fixed form field descriptions not being connected to inputs via `aria-describedby`, making them accessible to screen readers. Added a `descriptionSlot` prop to `FieldLabel` that uses React Aria's slot mechanism to automatically wire up the connection.

  **Affected components:** FieldLabel, TextField, PasswordField, SearchField, Select, RadioGroup, CheckboxGroup

- [`cc4a682`](https://github.com/backstage/backstage/commit/cc4a682): Fixed the ButtonIcon's loading spinner animation

  **Affected components:** ButtonIcon

- [`386972f`](https://github.com/backstage/backstage/commit/386972f): Fixed the Tabs active indicator not hiding when no tab matches the current route.

  **Affected components:** Tabs

- [`adcdd2f`](https://github.com/backstage/backstage/commit/adcdd2f): Simplified the `Menu` component's item structure by removing the inner wrapper element and applying styles directly to the menu item, improving DOM clarity.

  **Affected components:** Menu

- [`0257ada`](https://github.com/backstage/backstage/commit/0257ada): Added `react-aria`, `react-stately`, `@react-aria/interactions`, `@react-stately/layout`, and `@react-stately/overlays` as dependencies.
- [`feaf3d1`](https://github.com/backstage/backstage/commit/feaf3d1): Fixed HeaderNav hover indicator covering tab text when theme uses opaque background colors. Also fixed an incorrect CSS variable reference (`--bui-font-family` → `--bui-font-regular`).

  **Affected components:** Header

## Major version bumps

### `@backstage/plugin-catalog-react` (2.1.1 → [3.1.0](../../changelogs/@backstage/plugin-catalog-react.md#310))

#### 3.1.0

##### Minor Changes

- [`b6d6551`](https://github.com/backstage/backstage/commit/b6d6551): Added optional `getOptionLabel` and `renderOption` props to `EntityAutocompletePicker`, allowing consumers to customize how option labels and option rendering are displayed in the autocomplete dropdown.
- [`5dd532d`](https://github.com/backstage/backstage/commit/5dd532d): Added a `refresh` function to the `useEntityList` hook.
- [`4212b78`](https://github.com/backstage/backstage/commit/4212b78): Allow full text searching of Location target URLs in catalog tables

##### Patch Changes

- [`d8757b1`](https://github.com/backstage/backstage/commit/d8757b1): The entity list provider now fetches the entity list and the total count as two separate parallel requests when using cursor or offset pagination. The list query skips the expensive count computation (using `totalItems: 'exclude'`), so the table populates immediately. The count arrives asynchronously and updates the title. A new `totalItemsLoading` field is exposed on `EntityListContextProps` so consumers can distinguish a stale count from a fresh one.

  The catalog table now keeps stale rows visible during filter changes and page navigation instead of replacing the entire table body with a spinner. The full-table spinner is only shown on the very first load when no data exists yet. The entity count in the title is dimmed while the count is refreshing, and a small spinner appears next to the title while rows are loading.

- [`e0889a3`](https://github.com/backstage/backstage/commit/e0889a3): chore(deps): bump `qs` from 6.15.1 to 6.15.2
- [`7c20545`](https://github.com/backstage/backstage/commit/7c20545): Fixed redundant API calls during entity list initialization. Filter components that register their initial state in quick succession (e.g. `EntityKindPicker`, `UserListPicker`, `EntityTagPicker`) no longer trigger multiple identical fetches. Frontend-only filter changes such as toggling the user list are now applied synchronously without a network round-trip.

#### 3.0.0

##### Patch Changes

- [`f635139`](https://github.com/backstage/backstage/commit/f635139): Limited `@remixicon/react` dependency to versions below 4.9.0 due to a license change in that release.
- [`744fa1f`](https://github.com/backstage/backstage/commit/744fa1f): Removed duplicated entries that appeared in both `dependencies` and `devDependencies`.
- [`cad156e`](https://github.com/backstage/backstage/commit/cad156e): Replaced old config schema values from existing extensions and blueprints.
- [`085133f`](https://github.com/backstage/backstage/commit/085133f): The `zod` dependency has been bumped from `^3.25.76 || ^4.0.0` to `^4.0.0`, since `configSchema` requires the full Zod v4 package for JSON Schema support.

#### 2.1.2

##### Patch Changes

- [`540a031`](https://github.com/backstage/backstage/commit/540a031): Migrated alpha entity blueprints to use the new `configSchema` option with zod v4 schema values.
- [`482ceed`](https://github.com/backstage/backstage/commit/482ceed): Migrated from `assertError` to `toError` for error handling.
- [`51aacae`](https://github.com/backstage/backstage/commit/51aacae): Fixed a UI flicker in the catalog entity list where changing a filter would briefly flash stale data before showing the new results.
- [`eba2f61`](https://github.com/backstage/backstage/commit/eba2f61): Fixed `EntityInfoCard` header overflowing on narrow screens.
- [`7308885`](https://github.com/backstage/backstage/commit/7308885): Updated `catalogApiMock` to include the new `updateLocation` method stub, keeping it in sync with the `CatalogApi` interface.
- [`5f9a531`](https://github.com/backstage/backstage/commit/5f9a531): Deprecated `humanizeEntityRef` and `humanizeEntity` in favor of the Catalog Presentation API. Use `useEntityPresentation`, `EntityDisplayName`, or `entityPresentationApiRef` instead.
- [`0416216`](https://github.com/backstage/backstage/commit/0416216): Fixed entity relation cards (e.g., "Has components") only showing one entity at a time by using `paginationOptions: { type: 'none' }` instead of deriving page size from data length.
- [`fa232da`](https://github.com/backstage/backstage/commit/fa232da): Migrated `InspectEntityDialog` from Material UI to Backstage UI components. Added new translation keys: `inspectEntityDialog.overviewPage.copyAriaLabel`, `inspectEntityDialog.overviewPage.copiedStatus`, `inspectEntityDialog.overviewPage.helpLinkAriaLabel`, and `inspectEntityDialog.colocatedPage.entityListAriaLabel`.

### `@backstage/plugin-scaffolder-backend` (3.3.0 → [4.0.1](../../changelogs/@backstage/plugin-scaffolder-backend.md#401))

#### 4.0.1

##### Patch Changes

- [`063fc34`](https://github.com/backstage/backstage/commit/063fc34): Restored user-supplied task secrets in scaffolder dry-run executions. The previous security fix that stripped secrets from dry-run also removed task secrets passed in the dry-run request body, which broke integration test setups that rely on user-supplied secrets. Environment secrets (server-configured) remain stripped during dry-run; only task secrets supplied by the caller are now forwarded to actions.

#### 4.0.0

##### Minor Changes

- [`77bee9f`](https://github.com/backstage/backstage/commit/77bee9f): Updated the `list-scaffolder-tasks` action to support the new "status" filter parameter, allowing the action to return tasks matching a specific status.
- [`07e08be`](https://github.com/backstage/backstage/commit/07e08be): Added `always()` and `failure()` status check functions for scaffolder steps. These functions can be used in the if field of a step to control execution after failures. `always()` ensures a step runs regardless of previous step outcomes, while `failure()` runs a step only when a previous step has failed.
- [`8006acf`](https://github.com/backstage/backstage/commit/8006acf): The template parameter schema response now exposes a `formDecorators` field
  instead of `EXPERIMENTAL_formDecorators`. Templates that still declare
  `spec.EXPERIMENTAL_formDecorators` are read transparently and surfaced under
  the new field.

##### Patch Changes

- [`c78b3b6`](https://github.com/backstage/backstage/commit/c78b3b6): Add explicit memory management to SecureTemplater usage
- [`1ecc3ca`](https://github.com/backstage/backstage/commit/1ecc3ca): Fixed spelling mistakes in internal code
- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

#### 3.4.0

##### Minor Changes

- [`309b712`](https://github.com/backstage/backstage/commit/309b712): Added a new `execute-template` actions registry action that executes a scaffolder template with provided input values and returns a task ID for tracking progress.
- [`5af48e7`](https://github.com/backstage/backstage/commit/5af48e7): Migrated permission registration to use the `PermissionsRegistryService` instead of the deprecated `createPermissionIntegrationRouter`. This fixes an issue where scaffolder permissions were not visible to RBAC plugins because the `actionsRegistryServiceRef` dependency caused an empty permissions metadata router to shadow the scaffolder's actual permission metadata. The old `createPermissionIntegrationRouter` path is retained as a fallback for standalone `createRouter` usage.

##### Patch Changes

- [`482ceed`](https://github.com/backstage/backstage/commit/482ceed): Migrated from `assertError` to `toError` for error handling.
- [`961e274`](https://github.com/backstage/backstage/commit/961e274): Migrated OpenTelemetry metrics to use the `MetricsService` from `@backstage/backend-plugin-api/alpha` instead of the raw `@opentelemetry/api` meter.
- [`8a42f77`](https://github.com/backstage/backstage/commit/8a42f77): Fix handling of `after=0` in task events endpoint
- [`4559806`](https://github.com/backstage/backstage/commit/4559806): Removed unnecessary empty `examples` array from actions bridged via the actions registry.
- [`79453c0`](https://github.com/backstage/backstage/commit/79453c0): Updated dependency `wait-for-expect` to `^4.0.0`.
- [`3ef6078`](https://github.com/backstage/backstage/commit/3ef6078): Added support for conditional `if` filtering on output `links` and `text` items. Items where the `if` condition evaluates to false are now excluded from the task output.

### `@backstage/plugin-scaffolder-react` (1.20.0 → [2.0.1](../../changelogs/@backstage/plugin-scaffolder-react.md#201))

#### 2.0.1

##### Patch Changes

- [`e0889a3`](https://github.com/backstage/backstage/commit/e0889a3): chore(deps): bump `qs` from 6.15.1 to 6.15.2
- [`02c4e8a`](https://github.com/backstage/backstage/commit/02c4e8a): Removed unused `json-schema` runtime dependency. The package was only used for TypeScript types from `@types/json-schema`; affected imports have been converted to `import type` to allow safe removal.

#### 2.0.0

##### Minor Changes

- [`dbeb7aa`](https://github.com/backstage/backstage/commit/dbeb7aa): Added experimental BUI (Backstage UI) form theme for scaffolder forms. All default field extensions render BUI variants when enabled.

  **Extension config:**

  ```yaml
  app:
    extensions:
      - sub-page:scaffolder/templates:
          config:
            enableBackstageUi: true
  ```

  **JSX props:**

  ```tsx
  <ScaffolderPage formProps={{ EXPERIMENTAL_theme: 'bui' }} />
  ```

- [`8006acf`](https://github.com/backstage/backstage/commit/8006acf): Promoted `FormDecoratorBlueprint` and `ScaffolderFormDecorator` from `@alpha`
  to `@public`.
- [`d09c21c`](https://github.com/backstage/backstage/commit/d09c21c): The `TemplateCard` component is now a swappable component. Apps using the new
  frontend system can replace it by registering a `SwappableComponentBlueprint`
  that targets `TemplateCard`. Components used as the swappable implementation
  receive `TemplateCardComponentProps`, where `onSelected` is a zero-argument
  callback bound to the rendered template. Existing usage continues to work
  unchanged.

#### 1.20.1

##### Patch Changes

- [`bdbbf00`](https://github.com/backstage/backstage/commit/bdbbf00): build(deps): bump `flatted` from 3.4.1 to 3.4.2

## 0.x minor version bumps

### `@backstage/backend-defaults` (0.16.0 → [0.17.4](../../changelogs/@backstage/backend-defaults.md#0174))

#### 0.17.3

##### Patch Changes

- [`4f4bcf5`](https://github.com/backstage/backstage/commit/4f4bcf5): Upgraded `infinispan` from `^0.12.0` to `^0.13.0` to address known vulnerabilities.
- [`a07e6a3`](https://github.com/backstage/backstage/commit/a07e6a3): Updated `AzureBlobStorageUrlReader` to reference the correctly-named `AzureBlobStorageIntegration` type from `@backstage/integration`. The previously-used `AzureBlobStorageIntergation` is now an alias for the new type and remains a valid argument to the constructor.
- [`b75158b`](https://github.com/backstage/backstage/commit/b75158b): Adapted Azure-related tests for the Azure SDK upgrade to ESM-style exports. The `AzureBlobStorageUrlReader` now accepts an optional `createContainerClient` dependency for testability without needing to mock the `@azure/storage-blob` module.
- [`89a95ca`](https://github.com/backstage/backstage/commit/89a95ca): Fixed the task worker retry loop to respect the abort signal. Previously, when a task worker encountered an unexpected error, the retry loop would continue indefinitely even after the worker was signaled to stop. The retry loop now checks the abort signal before retrying and passes it to the retry delay, allowing the worker to shut down gracefully.
- [`def82d4`](https://github.com/backstage/backstage/commit/def82d4): Fixed the built-in rate limiter throwing a validation error and refusing to start when `backend.rateLimit` is enabled. Requests are now keyed using the address normalization helper from `express-rate-limit`, which is required by newer versions of that library and ensures IPv6 clients are grouped by their address block rather than by individual address.
- [`0211390`](https://github.com/backstage/backstage/commit/0211390): Added a new `v2` invoke endpoint (`/.backstage/actions/v2/actions/:id/invoke`) that accepts a wrapped body format `{ input, secrets }` with secrets validation. The existing `v1` invoke endpoint remains unchanged for backward compatibility. Updated `DefaultActionsService` to use the `v2` endpoint. Updated `DefaultActionsRegistryService` to expose secrets schema in the actions list response and validate secrets on invocation.
- [`34f21c3`](https://github.com/backstage/backstage/commit/34f21c3): Fix gitlabUrlReader issue with retrieving the repository archive tree

#### 0.17.1

##### Patch Changes

- [`90b572e`](https://github.com/backstage/backstage/commit/90b572e): Adds an alpha `TracingService` to provide a unified interface for emitting trace spans across Backstage plugins.
- [`97d3bd4`](https://github.com/backstage/backstage/commit/97d3bd4): Fixed a race condition in `CachedUserInfoService` where a failed request could incorrectly evict a newer cache entry for the same token. The error handler now verifies the map entry is still the same promise before deleting it.
- [`3595c97`](https://github.com/backstage/backstage/commit/3595c97): Exported `defaultServiceFactories` to allow use with `createSpecializedBackend` for advanced configuration like `extensionPointFactoryMiddleware`.
- [`89d3248`](https://github.com/backstage/backstage/commit/89d3248): Fixed scheduler `sleep` firing immediately for durations longer than ~24.8 days, caused by Node.js `setTimeout` overflowing its 32-bit millisecond limit.
- [`d00a44b`](https://github.com/backstage/backstage/commit/d00a44b): Fixed Valkey cluster mode to use `iovalkey`'s `Cluster` class instead of
  `createCluster` from `@keyv/redis`. The previous implementation passed a
  `@redis/client` `RedisCluster` instance to `@keyv/valkey`, which expects an
  `iovalkey` `Cluster` instance. This caused the cluster client to not be
  recognized correctly, as the two libraries have incompatible object models.
- [`2f0519c`](https://github.com/backstage/backstage/commit/2f0519c): Added a new `CachedUserInfoService` decorator that wraps `DefaultUserInfoService` with a 5-second TTL cache and in-flight request coalescing. The decorator is wired in via `userInfoServiceFactory` using a shared root-level cache. Repeated `getUserInfo()` calls for the same user token within the TTL window return the cached result without making an HTTP call to the auth backend. Note that custom `UserInfoService` implementations registered via their own factory will not benefit from this cache automatically.
- [`744fa1f`](https://github.com/backstage/backstage/commit/744fa1f): Removed duplicated entries that appeared in both `dependencies` and `devDependencies`.
- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.
- [`6209065`](https://github.com/backstage/backstage/commit/6209065): Added `context` and `propagation` to the alpha `TracingService`. Plugins can bridge OpenTelemetry context across async boundaries via `tracing.propagation.extract(tracing.context.active(), carrier)` followed by `tracing.context.with(ctx, fn)`, and read propagated baggage via `tracing.propagation.getActiveBaggage()` or `tracing.propagation.getBaggage(ctx)`.

#### 0.17.0

##### Minor Changes

- [`c69e03c`](https://github.com/backstage/backstage/commit/c69e03c): Added support for AWS RDS IAM authentication for PostgreSQL connections. Set `connection.type: rds` along with `host`, `user`, and `region` to use short-lived IAM tokens instead of a static password. Requires the `@aws-sdk/rds-signer` package and an IAM role with `rds-db:connect` permission.

##### Patch Changes

- [`4559806`](https://github.com/backstage/backstage/commit/4559806): Added support for typed `examples` on actions registered via the actions registry. Action authors can now provide examples with compile-time-checked `input` and `output` values that match their schema definitions.
- [`5cd814f`](https://github.com/backstage/backstage/commit/5cd814f): Refactored auditor severity log level mappings to use `zod/v4` with schema-driven defaults and type inference.
- [`482ceed`](https://github.com/backstage/backstage/commit/482ceed): Migrated from `assertError` to `toError` for error handling.
- [`6e2aaab`](https://github.com/backstage/backstage/commit/6e2aaab): Fixed `AwsS3UrlReader` failing to read files from S3 buckets configured with custom endpoint hosts. When an integration was configured with a specific endpoint like `https://bucket-1.s3.eu-central-1.amazonaws.com`, the URL parser incorrectly fell through to the non-AWS code path, always defaulting the region to `us-east-1` instead of extracting it from the hostname.
- [`308c672`](https://github.com/backstage/backstage/commit/308c672): `HostDiscovery` now logs a warning when `backend.baseUrl` is set to a localhost address while `NODE_ENV` is `production`, and when `backend.baseUrl` is not a valid URL.
- [`85c5a46`](https://github.com/backstage/backstage/commit/85c5a46): DefaultActionsRegistryService: add json middleware to /.backstage/actions/ routes only
- [`547258f`](https://github.com/backstage/backstage/commit/547258f): Refactored the database creation retry loop to avoid an unnecessary delay after the final failed attempt.
- [`79453c0`](https://github.com/backstage/backstage/commit/79453c0): Updated dependency `wait-for-expect` to `^4.0.0`.
- [`f14df56`](https://github.com/backstage/backstage/commit/f14df56): Added experimental support for using `embedded-postgres` as the database for local development. Set `backend.database.client` to `embedded-postgres` in your app config to enable this. The `embedded-postgres` package must be installed as an explicit dependency in your project.

### `@backstage/cli-module-actions` (0.0.1 → [0.1.2](../../changelogs/@backstage/cli-module-actions.md#012))

#### 0.1.2

##### Patch Changes

- [`696c78c`](https://github.com/backstage/backstage/commit/696c78c): The `--help` output for commands now shows a generated usage line that lists the available flags and any positional arguments the command accepts.
- [`2e6ffe6`](https://github.com/backstage/backstage/commit/2e6ffe6): Updated the standalone CLI executable to use the new CLI module runner.

#### 0.1.0

##### Minor Changes

- [`c705d44`](https://github.com/backstage/backstage/commit/c705d44): Added improved CLI output formatting and UX for the actions module. The `list` command now groups actions by plugin source with colored headers and action titles. The `execute --help` command renders full action details including markdown descriptions. Complex schema types like objects, arrays, and union types are now accepted as JSON flags. Error messages from the server are now surfaced directly. The `sources add` and `sources remove` commands accept multiple plugin IDs at once.

### `@backstage/eslint-plugin` (0.2.2 → [0.3.1](../../changelogs/@backstage/eslint-plugin.md#031))

#### 0.3.1

##### Patch Changes

- [`5d80f77`](https://github.com/backstage/backstage/commit/5d80f77): Adds a new `@backstage/no-deprecated-bui-tokens` lint rule that warns when a deprecated `@backstage/ui` CSS token is referenced in a JavaScript or TypeScript file (including CSS-in-JS patterns and template literals). The rule is included in the `recommended` config, so plugin authors using `plugin:@backstage/recommended` will receive warnings automatically when using tokens that have been superseded by the new semantic color families. Note that plain CSS and CSS module files are outside ESLint's scope and are not covered by this rule.

#### 0.3.0

##### Minor Changes

- [`ab1cdbb`](https://github.com/backstage/backstage/commit/ab1cdbb): Added a new `no-self-package-imports` lint rule, enabled as `error` in the recommended config, that reports when a package imports itself by its own name instead of using a relative path. This pattern causes circular initialization errors in bundled ESM and with `jest.requireActual`.

#### 0.2.3

##### Patch Changes

- [`df43b0e`](https://github.com/backstage/backstage/commit/df43b0e): Fixed `no-mixed-plugin-imports` rule to return `null` from non-fixable suggestion handlers and added an explicit `SuggestionReportDescriptor[]` type annotation, matching the stricter type checking in TypeScript 6.0.

### `@backstage/integration-aws-node` (0.1.20 → [0.2.0](../../changelogs/@backstage/integration-aws-node.md#020))

#### 0.2.0

##### Minor Changes

- [`8df06ec`](https://github.com/backstage/backstage/commit/8df06ec): Added `webIdentityTokenFile` to `AwsIntegrationAccountConfig` and
  `AwsIntegrationDefaultAccountConfig`. When set along with a `roleName`,
  `DefaultAwsCredentialsManager` retrieves credentials by calling
  `AssumeRoleWithWebIdentity` (via `fromTokenFile`) using the file's
  contents as the web identity token. The file is re-read on each
  credential refresh.

  The validator rejects combining `webIdentityTokenFile` with
  `accessKeyId`/`secretAccessKey`, `profile`, or `externalId`, and
  rejects setting it without a `roleName`.

### `@backstage/plugin-api-docs` (0.13.5 → [0.14.2](../../changelogs/@backstage/plugin-api-docs.md#0142))

#### 0.14.1

##### Patch Changes

- [`f635139`](https://github.com/backstage/backstage/commit/f635139): Limited `@remixicon/react` dependency to versions below 4.9.0 due to a license change in that release.
- [`44d77e9`](https://github.com/backstage/backstage/commit/44d77e9): Removed separate nav item extensions. Sidebar entries are now provided via `title` and `icon` on each plugin's page extension.

#### 0.14.0

##### Minor Changes

- [`b871d4e`](https://github.com/backstage/backstage/commit/b871d4e): Use Entity Presentation API for entity display in api-docs plugin

##### Patch Changes

- [`da17844`](https://github.com/backstage/backstage/commit/da17844): Update readme to add instructions for custom api base URL

### `@backstage/plugin-auth-backend-module-auth0-provider` (0.3.1 → [0.4.2](../../changelogs/@backstage/plugin-auth-backend-module-auth0-provider.md#042))

#### 0.4.0

##### Minor Changes

- [`9244b70`](https://github.com/backstage/backstage/commit/9244b70): Sign-out now redirects the browser to Auth0's `/v2/logout` endpoint, clearing the Auth0 session cookie so that the next sign-in creates a new Auth0 session. Previously, only the Backstage session was cleared, allowing users to sign back in without going through Auth0 logout first.

  Set `federatedLogout: true` in the Auth0 provider config to additionally clear the upstream IdP session (e.g. Okta, Google). This is what guarantees a full re-login across the entire SSO chain and may require users to re-enter credentials.

##### Patch Changes

- [`b3bbd42`](https://github.com/backstage/backstage/commit/b3bbd42): Added `createAuth0Authenticator` factory function that accepts a `CacheService` to cache Auth0 profile API responses for 1 minute during token refreshes. This avoids hitting Auth0 rate limits on repeated page refreshes. The module now uses the cached variant by default. The existing `auth0Authenticator` export remains available for use without caching.

### `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.2.18 → [0.3.0](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#030))

#### 0.3.0

##### Minor Changes

- [`9822a2a`](https://github.com/backstage/backstage/commit/9822a2a): Added forwardedPreferredUsernameMatchingUserEntityName sign-in resolver

## 0.0.x patch version bumps

### `@backstage/plugin-catalog-unprocessed-entities-common` (0.0.13 → [0.0.16](../../changelogs/@backstage/plugin-catalog-unprocessed-entities-common.md#0016))

#### 0.0.16

##### Patch Changes

- [`fa06df6`](https://github.com/backstage/backstage/commit/fa06df6): Added `unprocessedEntitiesReadPermission` for authorizing read access to unprocessed entity endpoints.

### `@backstage/plugin-signals` (0.0.29 → [0.0.32](../../changelogs/@backstage/plugin-signals.md#0032))

#### 0.0.31

##### Patch Changes

- [`f635139`](https://github.com/backstage/backstage/commit/f635139): Limited `@remixicon/react` dependency to versions below 4.9.0 due to a license change in that release.
- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

#### 0.0.30

##### Patch Changes

- [`79453c0`](https://github.com/backstage/backstage/commit/79453c0): Updated dependency `wait-for-expect` to `^4.0.0`.
- [`d156cf4`](https://github.com/backstage/backstage/commit/d156cf4): Added `title` and `icon` to the new frontend system plugin definition.

## 0.x patch version bumps

### `@backstage/backend-dynamic-feature-service` (0.8.0 → [0.8.3](../../changelogs/@backstage/backend-dynamic-feature-service.md#083))

#### 0.8.3

##### Patch Changes

- [`7005478`](https://github.com/backstage/backstage/commit/7005478): Fixed dynamic backend plugin loading to fall back to the main package export when an alpha `package.json` is present but does not provide a plugin entrypoint. Previously, plugins whose alpha export only exposed supplementary APIs (such as permissions) could fail to load even though the main export was valid. The loader now tries the alpha entry first and uses the main export when the alpha module does not export a `BackendFeature`, `BackendFeatureFactory`, or `dynamicPluginInstaller`.

#### 0.8.2

##### Patch Changes

- [`41070b8`](https://github.com/backstage/backstage/commit/41070b8): Upgraded `@module-federation/enhanced`, `@module-federation/runtime`, and `@module-federation/sdk` from `^0.21.6` to `^2.3.3` to address known vulnerabilities.

#### 0.8.1

##### Patch Changes

- [`79453c0`](https://github.com/backstage/backstage/commit/79453c0): Updated dependency `wait-for-expect` to `^4.0.0`.

### `@backstage/backend-openapi-utils` (0.6.7 → [0.6.10](../../changelogs/@backstage/backend-openapi-utils.md#0610))

#### 0.6.8

##### Patch Changes

- [`59dd9b9`](https://github.com/backstage/backstage/commit/59dd9b9): Fixes a memory leak during `wrapServer` where stopped servers weren't removed from the clean up list.

### `@backstage/cli` (0.36.0 → [0.36.3](../../changelogs/@backstage/cli.md#0363))

#### 0.36.3

##### Patch Changes

- [`b521571`](https://github.com/backstage/backstage/commit/b521571): Improved validation of conflicting CLI module commands, including conflicts between parent and nested command paths.

#### 0.36.2

##### Patch Changes

- [`744fa1f`](https://github.com/backstage/backstage/commit/744fa1f): Removed duplicated entries that appeared in both `dependencies` and `devDependencies`.

#### 0.36.1

##### Patch Changes

- [`2e5c5f8`](https://github.com/backstage/backstage/commit/2e5c5f8): Bumped `glob` dependency from v7/v8/v11 to v13 to address security vulnerabilities in older versions. Bumped `rollup` from v4.27 to v4.59+ to fix a high severity path traversal vulnerability (GHSA-mw96-cpmx-2vgc).
- [`482ceed`](https://github.com/backstage/backstage/commit/482ceed): Migrated from `assertError` to `toError` for error handling.
- [`a2f0c72`](https://github.com/backstage/backstage/commit/a2f0c72): Removed the unused `isDev` export from the internal version module.
- [`a7a14b7`](https://github.com/backstage/backstage/commit/a7a14b7): Added `DOM.AsyncIterable` to the default `lib` in the shared TypeScript configuration, enabling standard async iteration support for DOM APIs such as `FileSystemDirectoryHandle`. This aligns behavior with [TypeScript 6.0](https://devblogs.microsoft.com/typescript/announcing-typescript-6-0/#the-dom-lib-now-contains-domiterable-and-domasynciterable), where this lib is included in `DOM` by default.

### `@backstage/cli-common` (0.2.0 → [0.2.2](../../changelogs/@backstage/cli-common.md#022))

#### 0.2.1

##### Patch Changes

- [`482ceed`](https://github.com/backstage/backstage/commit/482ceed): Migrated from `assertError` to `toError` for error handling.
- [`e928e73`](https://github.com/backstage/backstage/commit/e928e73): chore(deps): bump `undici` from 7.22.0 to 7.24.0
- [`46ff470`](https://github.com/backstage/backstage/commit/46ff470): Deprecated `bootstrapEnvProxyAgents()` in favor of Node.js built-in proxy support. Set `NODE_USE_ENV_PROXY=1` alongside your `HTTP_PROXY`/`HTTPS_PROXY` environment variables instead. See the [corporate proxy guide](https://backstage.io/docs/tutorials/corporate-proxy/) for details. This function will be removed in a future release.

### `@backstage/cli-module-auth` (0.1.0 → [0.1.3](../../changelogs/@backstage/cli-module-auth.md#013))

#### 0.1.3

##### Patch Changes

- [`696c78c`](https://github.com/backstage/backstage/commit/696c78c): The `--help` output for commands now shows a generated usage line that lists the available flags and any positional arguments the command accepts.
- [`2e6ffe6`](https://github.com/backstage/backstage/commit/2e6ffe6): Updated the standalone CLI executable to use the new CLI module runner.

#### 0.1.1

##### Patch Changes

- [`2e5c5f8`](https://github.com/backstage/backstage/commit/2e5c5f8): Bumped `glob` dependency from v7/v8/v11 to v13 to address security vulnerabilities in older versions. Bumped `rollup` from v4.27 to v4.59+ to fix a high severity path traversal vulnerability (GHSA-mw96-cpmx-2vgc).
- [`c705d44`](https://github.com/backstage/backstage/commit/c705d44): Fixed `auth login` clearing previously configured action sources and other instance metadata when re-authenticating.

### `@backstage/cli-module-build` (0.1.0 → [0.1.4](../../changelogs/@backstage/cli-module-build.md#014))

#### 0.1.4

##### Patch Changes

- [`696c78c`](https://github.com/backstage/backstage/commit/696c78c): The `--help` output for commands now shows a generated usage line that lists the available flags and any positional arguments the command accepts.
- [`2e6ffe6`](https://github.com/backstage/backstage/commit/2e6ffe6): Updated the standalone CLI executable to use the new CLI module runner.
- [`a1971ea`](https://github.com/backstage/backstage/commit/a1971ea): Suppress false-positive `@protobufjs/inquire` "Critical dependency" warning in the bundler. Since `protobufjs` 7.5.9, the dynamic require path in inquire is no longer exercised, but webpack/rspack still flags it during static analysis.
- [`8007b58`](https://github.com/backstage/backstage/commit/8007b58): Updated dependency `embedded-postgres` to `18.3.0-beta.17`.

#### 0.1.3

##### Patch Changes

- [`ed4ee6f`](https://github.com/backstage/backstage/commit/ed4ee6f): Fixed config path resolution for the embedded-postgres database client detection to resolve paths relative to the target package directory rather than the workspace root.
- [`be7e4eb`](https://github.com/backstage/backstage/commit/be7e4eb): The embedded Postgres database used during local development now respects user-provided connection configuration. If you configure `host`, `port`, `user`, or `password` under `backend.database.connection` alongside the `embedded-postgres` database client, those values will be forwarded to the embedded Postgres instance. Only values that you have not configured will be filled in with defaults. This makes it possible to run the embedded database on a specific host and port, for example to connect to it externally with `psql`.
- [`41070b8`](https://github.com/backstage/backstage/commit/41070b8): Upgraded `@module-federation/enhanced`, `@module-federation/runtime`, and `@module-federation/sdk` from `^0.21.6` to `^2.3.3` to address known vulnerabilities.

#### 0.1.1

##### Patch Changes

- [`2e5c5f8`](https://github.com/backstage/backstage/commit/2e5c5f8): Bumped `glob` dependency from v7/v8/v11 to v13 to address security vulnerabilities in older versions. Bumped `rollup` from v4.27 to v4.59+ to fix a high severity path traversal vulnerability (GHSA-mw96-cpmx-2vgc).
- [`f1b493f`](https://github.com/backstage/backstage/commit/f1b493f): Fixed the embedded-postgres PID file being written before database initialization, which prevented the database from initializing successfully.
- [`f52a296`](https://github.com/backstage/backstage/commit/f52a296): Suppressed false-positive Module Federation warning for shared dependencies that use secondary entry points (e.g. `@mui/material/styles`). These sub-path `package.json` files lack a `version` field, causing the bundler to emit "No version specified" warnings that fail CI builds.
- [`c16c508`](https://github.com/backstage/backstage/commit/c16c508): When building dist-workspaces with --always-pack, batch `yarn pack` operations to avoid packing packages and their dependencies simultaneously.
- [`f14df56`](https://github.com/backstage/backstage/commit/f14df56): Added experimental support for using `embedded-postgres` as the database for local development. Set `backend.database.client` to `embedded-postgres` in your app config to enable this. The `embedded-postgres` package must be installed as an explicit dependency in your project.

### `@backstage/cli-module-config` (0.1.0 → [0.1.3](../../changelogs/@backstage/cli-module-config.md#013))

#### 0.1.3

##### Patch Changes

- [`696c78c`](https://github.com/backstage/backstage/commit/696c78c): The `--help` output for commands now shows a generated usage line that lists the available flags and any positional arguments the command accepts.
- [`2e6ffe6`](https://github.com/backstage/backstage/commit/2e6ffe6): Updated the standalone CLI executable to use the new CLI module runner.
- [`02c4e8a`](https://github.com/backstage/backstage/commit/02c4e8a): Removed unused `json-schema` runtime dependency. The package was only used for TypeScript types from `@types/json-schema`; affected imports have been converted to `import type` to allow safe removal.

### `@backstage/cli-module-github` (0.1.0 → [0.1.3](../../changelogs/@backstage/cli-module-github.md#013))

#### 0.1.3

##### Patch Changes

- [`696c78c`](https://github.com/backstage/backstage/commit/696c78c): The `--help` output for commands now shows a generated usage line that lists the available flags and any positional arguments the command accepts.
- [`2e6ffe6`](https://github.com/backstage/backstage/commit/2e6ffe6): Updated the standalone CLI executable to use the new CLI module runner.

### `@backstage/cli-module-info` (0.1.0 → [0.1.3](../../changelogs/@backstage/cli-module-info.md#013))

#### 0.1.3

##### Patch Changes

- [`696c78c`](https://github.com/backstage/backstage/commit/696c78c): The `--help` output for commands now shows a generated usage line that lists the available flags and any positional arguments the command accepts.
- [`2e6ffe6`](https://github.com/backstage/backstage/commit/2e6ffe6): Updated the standalone CLI executable to use the new CLI module runner.

### `@backstage/cli-module-lint` (0.1.0 → [0.1.3](../../changelogs/@backstage/cli-module-lint.md#013))

#### 0.1.3

##### Patch Changes

- [`696c78c`](https://github.com/backstage/backstage/commit/696c78c): The `--help` output for commands now shows a generated usage line that lists the available flags and any positional arguments the command accepts.
- [`2e6ffe6`](https://github.com/backstage/backstage/commit/2e6ffe6): Updated the standalone CLI executable to use the new CLI module runner.

### `@backstage/cli-module-maintenance` (0.1.0 → [0.1.3](../../changelogs/@backstage/cli-module-maintenance.md#013))

#### 0.1.3

##### Patch Changes

- [`696c78c`](https://github.com/backstage/backstage/commit/696c78c): The `--help` output for commands now shows a generated usage line that lists the available flags and any positional arguments the command accepts.
- [`2e6ffe6`](https://github.com/backstage/backstage/commit/2e6ffe6): Updated the standalone CLI executable to use the new CLI module runner.

### `@backstage/cli-module-migrate` (0.1.0 → [0.1.3](../../changelogs/@backstage/cli-module-migrate.md#013))

#### 0.1.3

##### Patch Changes

- [`696c78c`](https://github.com/backstage/backstage/commit/696c78c): The `--help` output for commands now shows a generated usage line that lists the available flags and any positional arguments the command accepts.
- [`2e6ffe6`](https://github.com/backstage/backstage/commit/2e6ffe6): Updated the standalone CLI executable to use the new CLI module runner.

#### 0.1.1

##### Patch Changes

- [`482ceed`](https://github.com/backstage/backstage/commit/482ceed): Migrated from `assertError` to `toError` for error handling.

### `@backstage/cli-module-new` (0.1.1 → [0.1.4](../../changelogs/@backstage/cli-module-new.md#014))

#### 0.1.4

##### Patch Changes

- [`4014819`](https://github.com/backstage/backstage/commit/4014819): Added a new `scaffolder-field-extension-module` template for scaffolding custom Scaffolder form field extensions via `backstage-cli new`.
- [`696c78c`](https://github.com/backstage/backstage/commit/696c78c): The `--help` output for commands now shows a generated usage line that lists the available flags and any positional arguments the command accepts.
- [`2e6ffe6`](https://github.com/backstage/backstage/commit/2e6ffe6): Updated the standalone CLI executable to use the new CLI module runner.

#### 0.1.3

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

#### 0.1.2

##### Patch Changes

- [`64a91d0`](https://github.com/backstage/backstage/commit/64a91d0): Rename the legacy `frontend-plugin` to `frontend-plugin-legacy`
- [`482ceed`](https://github.com/backstage/backstage/commit/482ceed): Migrated from `assertError` to `toError` for error handling.
- [`2b4f97a`](https://github.com/backstage/backstage/commit/2b4f97a): Updated frontend-plugin template to provide a todo list visualization compatible with the backend plugin.

### `@backstage/cli-module-test-jest` (0.1.0 → [0.1.3](../../changelogs/@backstage/cli-module-test-jest.md#013))

#### 0.1.3

##### Patch Changes

- [`696c78c`](https://github.com/backstage/backstage/commit/696c78c): The `--help` output for commands now shows a generated usage line that lists the available flags and any positional arguments the command accepts.
- [`2e6ffe6`](https://github.com/backstage/backstage/commit/2e6ffe6): Updated the standalone CLI executable to use the new CLI module runner.

#### 0.1.1

##### Patch Changes

- [`2e5c5f8`](https://github.com/backstage/backstage/commit/2e5c5f8): Bumped `glob` dependency from v7/v8/v11 to v13 to address security vulnerabilities in older versions. Bumped `rollup` from v4.27 to v4.59+ to fix a high severity path traversal vulnerability (GHSA-mw96-cpmx-2vgc).
- [`6cc4811`](https://github.com/backstage/backstage/commit/6cc4811): Minor error message update

### `@backstage/cli-module-translations` (0.1.0 → [0.1.3](../../changelogs/@backstage/cli-module-translations.md#013))

#### 0.1.3

##### Patch Changes

- [`696c78c`](https://github.com/backstage/backstage/commit/696c78c): The `--help` output for commands now shows a generated usage line that lists the available flags and any positional arguments the command accepts.
- [`2e6ffe6`](https://github.com/backstage/backstage/commit/2e6ffe6): Updated the standalone CLI executable to use the new CLI module runner.

### `@backstage/cli-node` (0.3.0 → [0.3.3](../../changelogs/@backstage/cli-node.md#033))

#### 0.3.3

##### Patch Changes

- [`b521571`](https://github.com/backstage/backstage/commit/b521571): Added `runCli` for creating executable CLI packages from a fixed collection of directly imported CLI modules, with validation for conflicting command paths. The single-module `runCliModule` helper is now deprecated.

#### 0.3.2

##### Patch Changes

- [`357d639`](https://github.com/backstage/backstage/commit/357d639): Fixed a bug in `PackageGraph.listChangedPackages` where removed dependencies were not detected during lockfile analysis. The dependency graph from the previous lockfile was not being merged, causing transitive dependency removals to be missed.

#### 0.3.1

##### Patch Changes

- [`482ceed`](https://github.com/backstage/backstage/commit/482ceed): Migrated from `assertError` to `toError` for error handling.

### `@backstage/core-compat-api` (0.5.9 → [0.5.12](../../changelogs/@backstage/core-compat-api.md#0512))

#### 0.5.11

##### Patch Changes

- [`744fa1f`](https://github.com/backstage/backstage/commit/744fa1f): Removed duplicated entries that appeared in both `dependencies` and `devDependencies`.

#### 0.5.10

##### Patch Changes

- [`77ab7d5`](https://github.com/backstage/backstage/commit/77ab7d5): Hide the default page header for pages created through the compatibility wrappers, since legacy plugins already render their own headers.
- [`49397c1`](https://github.com/backstage/backstage/commit/49397c1): Removed unnecessary type argument from internal `createRouteRef` call.

### `@backstage/core-components` (0.18.8 → [0.18.11](../../changelogs/@backstage/core-components.md#01811))

#### 0.18.11

##### Patch Changes

- [`e0889a3`](https://github.com/backstage/backstage/commit/e0889a3): chore(deps): bump `qs` from 6.15.1 to 6.15.2
- [`a07e6a3`](https://github.com/backstage/backstage/commit/a07e6a3): Added the correctly-spelled `'header'` literal to the `TableFiltersClassKey` union type and deprecated the previous typoed `'heder'` literal. The generated CSS class with the old key is preserved for backwards compatibility; switch to `'header'` to avoid future removal.
- [`c161e1c`](https://github.com/backstage/backstage/commit/c161e1c): Lazy-load `react-syntax-highlighter` and `@dagrejs/dagre` so they are no longer pulled in eagerly through the barrel export. This reduces the upfront module cost of importing from `@backstage/core-components` by roughly 10 MB. The public API is unchanged.
- [`dbe93a7`](https://github.com/backstage/backstage/commit/dbe93a7): Fix autologout not working correctly when closing all tabs
- [`8add9b9`](https://github.com/backstage/backstage/commit/8add9b9): Fixed the proxy-based sign-in page failing to read the session token when the proxy issues a token whose payload is encoded using the URL-safe base64 alphabet. Such tokens are now decoded correctly so sign-in no longer breaks.
- [`f35372d`](https://github.com/backstage/backstage/commit/f35372d): Fixed text clipping in SidebarSubmenuItem by correcting line-height from 1 to 1.5

#### 0.18.10

##### Patch Changes

- [`3846774`](https://github.com/backstage/backstage/commit/3846774): Added missing dependencies that were previously only available transitively.
- [`021b368`](https://github.com/backstage/backstage/commit/021b368): Added stable DOM markers to the legacy Page and Header so adjacent layout components can coordinate spacing without relying on generated class names.
- [`0c5e41f`](https://github.com/backstage/backstage/commit/0c5e41f): Removed unused dependencies that had no imports in source code.

#### 0.18.9

##### Patch Changes

- [`482ceed`](https://github.com/backstage/backstage/commit/482ceed): Migrated from `assertError` to `toError` for error handling.
- [`320eed3`](https://github.com/backstage/backstage/commit/320eed3): Resolved DOM nesting warning in OAuthRequestDialog by rendering secondary text as block-level spans.
- [`58b9f3f`](https://github.com/backstage/backstage/commit/58b9f3f): Use Backstage Link component for markdown anchor rendering to ensure consistent internal and external link behavior.

### `@backstage/create-app` (0.8.1 → [0.8.4](../../changelogs/@backstage/create-app.md#084))

#### 0.8.4

##### Patch Changes

- [`68db890`](https://github.com/backstage/backstage/commit/68db890): Bumped create-app version.
- [`e7e4ef0`](https://github.com/backstage/backstage/commit/e7e4ef0): Bumped create-app version.
- [`6344c54`](https://github.com/backstage/backstage/commit/6344c54): Newly scaffolded apps now use Yarn 4.13.0 (up from 4.4.1) and enable Yarn's `npmMinimalAgeGate: 3d` setting, which refuses to install npm packages published less than three days ago as a defense against supply-chain attacks. Backstage's own packages are exempted via `npmPreapprovedPackages: ['@backstage/*']` so newly released Backstage versions remain installable without delay.

  Existing apps are unaffected. To opt in, add the `npmMinimalAgeGate` and `npmPreapprovedPackages` settings to your own `.yarnrc.yml` and upgrade Yarn to 4.13 or later.

#### 0.8.3

##### Patch Changes

- [`7295193`](https://github.com/backstage/backstage/commit/7295193): Bumped create-app version.
- [`b0bc1e5`](https://github.com/backstage/backstage/commit/b0bc1e5): Bumped create-app version.
- [`14e2056`](https://github.com/backstage/backstage/commit/14e2056): Pinned the Jest version range in app templates to `~30.2.0` to prevent automatic upgrades to Jest 30.4.x, which requires Node.js v24.9+ and breaks tests on Node 22.
- [`927c003`](https://github.com/backstage/backstage/commit/927c003): Replaced internal error utilities with shared ones from `@backstage/cli-common`.

#### 0.8.2

##### Patch Changes

- [`a2cb332`](https://github.com/backstage/backstage/commit/a2cb332): Bumped create-app version.
- [`6c10d88`](https://github.com/backstage/backstage/commit/6c10d88): Bumped create-app version.
- [`e8ffac1`](https://github.com/backstage/backstage/commit/e8ffac1): Various fixes for the `create-app` template: reorganizing sidebar items, removing redundant config and code, and adding a documentation example.
- [`72a493a`](https://github.com/backstage/backstage/commit/72a493a): Added the `mcp-actions-backend` and `plugin-auth` plugins
- [`4cf9f3a`](https://github.com/backstage/backstage/commit/4cf9f3a): Removed the unnecessary `@backstage/cli-module-new` dependency from the `next-app` template, since it is already included through `@backstage/cli-defaults`.
- [`2541837`](https://github.com/backstage/backstage/commit/2541837): Renamed the built-in template directories from `next-app` to `default-app` and `default-app` to `legacy-app`.

### `@backstage/filter-predicates` (0.1.1 → [0.1.3](../../changelogs/@backstage/filter-predicates.md#013))

#### 0.1.3

##### Patch Changes

- [`691da8d`](https://github.com/backstage/backstage/commit/691da8d): Filter predicates that mix operator keys (`$all`, `$any`, `$not`) with other keys are now rejected. Previously, a predicate like `{ kind: 'API', $not: { 'spec.type': 'dataset' } }` would silently drop the `kind` check. The correct form wraps conditions in `$all`.

#### 0.1.2

##### Patch Changes

- [`8923d6d`](https://github.com/backstage/backstage/commit/8923d6d): Added `createZodV4FilterPredicateSchema` as a zod v4 counterpart to `createZodV3FilterPredicateSchema`.

### `@backstage/frontend-app-api` (0.16.1 → [0.16.5](../../changelogs/@backstage/frontend-app-api.md#0165))

#### 0.16.3

##### Patch Changes

- [`f79eaf2`](https://github.com/backstage/backstage/commit/f79eaf2): Internal cleanup of routing utilities.
- [`b6ca666`](https://github.com/backstage/backstage/commit/b6ca666): Invalid feature flag declarations no longer crash the app during bootstrap. They are now reported through the error collector and skipped, letting the rest of the app load normally.

#### 0.16.2

##### Patch Changes

- [`400aa23`](https://github.com/backstage/backstage/commit/400aa23): Wrapped extension permission authorization in a try/catch to surface errors as `ForwardedError` with a clear message.
- [`364d4fe`](https://github.com/backstage/backstage/commit/364d4fe): Added `apis` to `BootstrapSpecializedApp` and `FinalizedSpecializedApp` types.

### `@backstage/frontend-defaults` (0.5.0 → [0.5.3](../../changelogs/@backstage/frontend-defaults.md#053))

#### 0.5.2

##### Patch Changes

- [`482cc59`](https://github.com/backstage/backstage/commit/482cc59): Invalid feature flag declarations are now treated as warnings rather than errors, letting the app load normally.

### `@backstage/frontend-dynamic-feature-loader` (0.1.10 → [0.1.13](../../changelogs/@backstage/frontend-dynamic-feature-loader.md#0113))

#### 0.1.12

##### Patch Changes

- [`41070b8`](https://github.com/backstage/backstage/commit/41070b8): Upgraded `@module-federation/enhanced`, `@module-federation/runtime`, and `@module-federation/sdk` from `^0.21.6` to `^2.3.3` to address known vulnerabilities.

### `@backstage/module-federation-common` (0.1.2 → [0.1.4](../../changelogs/@backstage/module-federation-common.md#014))

#### 0.1.4

##### Patch Changes

- [`41070b8`](https://github.com/backstage/backstage/commit/41070b8): Upgraded `@module-federation/enhanced`, `@module-federation/runtime`, and `@module-federation/sdk` from `^0.21.6` to `^2.3.3` to address known vulnerabilities.

### `@backstage/plugin-app-backend` (0.5.12 → [0.5.15](../../changelogs/@backstage/plugin-app-backend.md#0515))

#### 0.5.15

##### Patch Changes

- [`ca450be`](https://github.com/backstage/backstage/commit/ca450be): Added a new `app.disablePublicEntryPoint` config option that allows you to opt out of the automatic public sign-in entry point. When set to `true`, the app backend will skip serving the public entry point to unauthenticated users, even if the app was bundled with an `index-public-experimental` entry point.

#### 0.5.14

##### Patch Changes

- [`744fa1f`](https://github.com/backstage/backstage/commit/744fa1f): Removed duplicated entries that appeared in both `dependencies` and `devDependencies`.
- [`0c5e41f`](https://github.com/backstage/backstage/commit/0c5e41f): Removed unused dependencies that had no imports in source code.

### `@backstage/plugin-app-visualizer` (0.2.1 → [0.2.5](../../changelogs/@backstage/plugin-app-visualizer.md#025))

#### 0.2.4

##### Patch Changes

- [`e2d9831`](https://github.com/backstage/backstage/commit/e2d9831): Tightened React Aria dependency version ranges from `^` to `~` to prevent unintended minor version upgrades.
- [`f635139`](https://github.com/backstage/backstage/commit/f635139): Limited `@remixicon/react` dependency to versions below 4.9.0 due to a license change in that release.
- [`44d77e9`](https://github.com/backstage/backstage/commit/44d77e9): Removed separate nav item extensions. Sidebar entries are now provided via `title` and `icon` on each plugin's page extension.

#### 0.2.2

##### Patch Changes

- [`e220589`](https://github.com/backstage/backstage/commit/e220589): Updated `PluginHeaderActionBlueprint` usage to pass params as a plain object.

### `@backstage/plugin-auth` (0.1.6 → [0.1.9](../../changelogs/@backstage/plugin-auth.md#019))

#### 0.1.8

##### Patch Changes

- [`f635139`](https://github.com/backstage/backstage/commit/f635139): Limited `@remixicon/react` dependency to versions below 4.9.0 due to a license change in that release.
- [`4f62755`](https://github.com/backstage/backstage/commit/4f62755): Improved the OAuth consent dialog for MCP authorization by showing more client details, including the client metadata host for CIMD clients, the metadata URL, callback URL, and requested scopes.

#### 0.1.7

##### Patch Changes

- [`482ceed`](https://github.com/backstage/backstage/commit/482ceed): Migrated from `assertError` to `toError` for error handling.

### `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.4.13 → [0.4.16](../../changelogs/@backstage/plugin-auth-backend-module-cloudflare-access-provider.md#0416))

#### 0.4.15

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

### `@backstage/plugin-auth-backend-module-oidc-provider` (0.4.14 → [0.4.17](../../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#0417))

#### 0.4.16

##### Patch Changes

- [`744fa1f`](https://github.com/backstage/backstage/commit/744fa1f): Removed duplicated entries that appeared in both `dependencies` and `devDependencies`.

### `@backstage/plugin-catalog-backend-module-aws` (0.4.21 → [0.4.24](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#0424))

#### 0.4.23

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

### `@backstage/plugin-catalog-backend-module-azure` (0.3.15 → [0.3.18](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0318))

#### 0.3.18

##### Patch Changes

- [`a07e6a3`](https://github.com/backstage/backstage/commit/a07e6a3): Updated internal usage of `AzureBlobStorageIntegration` (previously misspelled as `AzureBlobStorageIntergation`) following the rename in `@backstage/integration`.

#### 0.3.17

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

#### 0.3.16

##### Patch Changes

- [`39d27ee`](https://github.com/backstage/backstage/commit/39d27ee): Add Azure DevOps SCM event translation layer for instant catalog reprocessing.

### `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.5.12 → [0.5.15](../../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#0515))

#### 0.5.14

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.5.9 → [0.5.12](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#0512))

#### 0.5.11

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

#### 0.5.10

##### Patch Changes

- [`f215863`](https://github.com/backstage/backstage/commit/f215863): Added Bitbucket Cloud SCM event translation layer for the catalog backend module. The module now subscribes to Bitbucket Cloud webhook events and translates them into generic catalog SCM events, enabling instant catalog reprocessing when repositories are pushed to, renamed, transferred, or deleted. The `analyzeBitbucketCloudWebhookEvent` function is exported from the alpha entry point for custom integrations.

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.5.9 → [0.5.12](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#0512))

#### 0.5.12

##### Patch Changes

- [`9e2ff8c`](https://github.com/backstage/backstage/commit/9e2ff8c): Added a Bitbucket Server SCM event translation layer to the catalog backend module. The module now subscribes to Bitbucket Server webhook events and translates them into generic catalog SCM events, enabling instant catalog reprocessing when repositories are pushed to or renamed. The `analyzeBitbucketServerWebhookEvent` function is exported from the alpha entry point for custom integrations.

#### 0.5.11

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

### `@backstage/plugin-catalog-backend-module-gerrit` (0.3.12 → [0.3.15](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0315))

#### 0.3.14

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

### `@backstage/plugin-catalog-backend-module-gitea` (0.1.10 → [0.1.13](../../changelogs/@backstage/plugin-catalog-backend-module-gitea.md#0113))

#### 0.1.12

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

### `@backstage/plugin-catalog-backend-module-github` (0.13.0 → [0.13.3](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#0133))

#### 0.13.2

##### Patch Changes

- [`d745f1c`](https://github.com/backstage/backstage/commit/d745f1c): Added experimental support for checking suspended users via the GitHub REST API instead of the GraphQL `suspendedAt` field. Enable by setting both `excludeSuspendedUsers: true` and `experimental_checkForSuspendedUsersWithRest: true` in the provider config. When enabled, responses are cached using conditional HTTP requests to minimize REST API rate limit usage.
- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.
- [`aa313f0`](https://github.com/backstage/backstage/commit/aa313f0): The `GithubMultiOrgEntityProvider` now emits entities in a stable order during full mutations. Entities are sorted by entity ref, with the location annotation as a tiebreaker for entities that share the same ref. This prevents entity data from flickering between different GitHub orgs across refresh cycles when `alwaysUseDefaultNamespace` is enabled and teams with identical slugs exist in multiple orgs.

#### 0.13.1

##### Patch Changes

- [`b11e338`](https://github.com/backstage/backstage/commit/b11e338): Fixed a bug where `GithubEntityProvider` with `validateLocationsExist: true` and `filters.branch` configured would always check for the catalog file on the repository's default branch (`HEAD`) instead of the configured branch. This caused repositories to be filtered out when the catalog file only existed on the non-default branch.
- [`edf465f`](https://github.com/backstage/backstage/commit/edf465f): Removed the `type-fest` dev dependency, replacing its `PartialDeep` import with a local helper type in tests.
- [`cca9fc2`](https://github.com/backstage/backstage/commit/cca9fc2): Added automatic retry on temporary errors (like 5XX) to the shared GitHub GraphQL client used by `GithubOrgEntityProvider` and replaced the GraphQL client in `GithubEntityProvider` by this one as well, improving resilience against intermittent GitHub API failures.

### `@backstage/plugin-catalog-backend-module-github-org` (0.3.20 → [0.3.23](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#0323))

#### 0.3.22

##### Patch Changes

- [`d745f1c`](https://github.com/backstage/backstage/commit/d745f1c): Added experimental support for checking suspended users via the GitHub REST API instead of the GraphQL `suspendedAt` field. Enable by setting both `excludeSuspendedUsers: true` and `experimental_checkForSuspendedUsersWithRest: true` in the provider config. When enabled, responses are cached using conditional HTTP requests to minimize REST API rate limit usage.

### `@backstage/plugin-catalog-backend-module-gitlab` (0.8.1 → [0.8.4](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#084))

#### 0.8.3

##### Patch Changes

- [`1ecc3ca`](https://github.com/backstage/backstage/commit/1ecc3ca): Fixed spelling mistakes in internal code
- [`0c5e41f`](https://github.com/backstage/backstage/commit/0c5e41f): Removed unused dependencies that had no imports in source code.
- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

#### 0.8.2

##### Patch Changes

- [`8df0796`](https://github.com/backstage/backstage/commit/8df0796): Fixed GitLab project topic filtering by using correct API parameter 'topic' instead of 'topics'
- [`54a8300`](https://github.com/backstage/backstage/commit/54a8300): Add GitLab SCM event translation layer for instant catalog reprocessing.

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.7.10 → [0.7.13](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#0713))

#### 0.7.13

##### Patch Changes

- [`e846874`](https://github.com/backstage/backstage/commit/e846874): Alter column type for `ingestions.last_error` to remove the 255-character restriction.

#### 0.7.12

##### Patch Changes

- [`32f0dfe`](https://github.com/backstage/backstage/commit/32f0dfe): On PostgreSQL, `WHERE ref IN ($1, $2, ..., $N)` queries on the `ingestion_mark_entities` table now use `= ANY($1)` with a single array parameter instead. This reduces prepared statement bloat in the query plan cache when the number of entity refs varies between calls.
- [`0c5e41f`](https://github.com/backstage/backstage/commit/0c5e41f): Removed unused dependencies that had no imports in source code.
- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

#### 0.7.11

##### Patch Changes

- [`482ceed`](https://github.com/backstage/backstage/commit/482ceed): Migrated from `assertError` to `toError` for error handling.

### `@backstage/plugin-catalog-backend-module-ldap` (0.12.3 → [0.12.6](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0126))

#### 0.12.5

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

### `@backstage/plugin-catalog-backend-module-openapi` (0.2.20 → [0.2.23](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0223))

#### 0.2.23

##### Patch Changes

- [`cf4b34b`](https://github.com/backstage/backstage/commit/cf4b34b): Fixed resolution of relative `$ref` paths in OpenAPI and AsyncAPI specs by using the original reference string and parent document URL from the ref parser, instead of computing paths relative to the process working directory. This fixes a regression where cross-directory refs like `./../../common/specs/common.yaml` and nested refs at depth > 1 would resolve incorrectly.

### `@backstage/plugin-catalog-backend-module-puppetdb` (0.2.20 → [0.2.23](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0223))

#### 0.2.22

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.6.9 → [0.6.13](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#0613))

#### 0.6.12

##### Patch Changes

- [`fa06df6`](https://github.com/backstage/backstage/commit/fa06df6): Added permission authorization checks to the unprocessed entities read endpoints for pending and failed entities.

### `@backstage/plugin-catalog-graph` (0.6.0 → [0.6.5](../../changelogs/@backstage/plugin-catalog-graph.md#065))

#### 0.6.5

##### Patch Changes

- [`e0889a3`](https://github.com/backstage/backstage/commit/e0889a3): chore(deps): bump `qs` from 6.15.1 to 6.15.2

#### 0.6.4

##### Patch Changes

- [`f635139`](https://github.com/backstage/backstage/commit/f635139): Limited `@remixicon/react` dependency to versions below 4.9.0 due to a license change in that release.
- [`0c5e41f`](https://github.com/backstage/backstage/commit/0c5e41f): Removed unused dependencies that had no imports in source code.
- [`cad156e`](https://github.com/backstage/backstage/commit/cad156e): Replaced old config schema values from existing extensions and blueprints.
- [`085133f`](https://github.com/backstage/backstage/commit/085133f): The `zod` dependency has been bumped from `^3.25.76 || ^4.0.0` to `^4.0.0`, since `configSchema` requires the full Zod v4 package for JSON Schema support.

#### 0.6.1

##### Patch Changes

- [`effa7bf`](https://github.com/backstage/backstage/commit/effa7bf): Updated `README-alpha.md` extension examples to use current APIs.
- [`0e147e8`](https://github.com/backstage/backstage/commit/0e147e8): Added `title` and `icon` to the new frontend system plugin definition.
- [`416ad45`](https://github.com/backstage/backstage/commit/416ad45): Replaced `humanizeEntityRef` with the Catalog Presentation API in `CatalogGraphCard` and `CatalogGraphPage` components for consistent entity display.
- [`d5899c2`](https://github.com/backstage/backstage/commit/d5899c2): Support configuring `showArrowHeads` on `page:catalog-graph` and `entity-card:catalog-graph/relations`.

### `@backstage/plugin-catalog-import` (0.13.11 → [0.13.14](../../changelogs/@backstage/plugin-catalog-import.md#01314))

#### 0.13.13

##### Patch Changes

- [`f635139`](https://github.com/backstage/backstage/commit/f635139): Limited `@remixicon/react` dependency to versions below 4.9.0 due to a license change in that release.
- [`39eb61b`](https://github.com/backstage/backstage/commit/39eb61b): Internal refactor

#### 0.13.12

##### Patch Changes

- [`fa0593e`](https://github.com/backstage/backstage/commit/fa0593e): Added `title` and `icon` to the new frontend system plugin definition.
- [`482ceed`](https://github.com/backstage/backstage/commit/482ceed): Migrated from `assertError` to `toError` for error handling.
- [`e5af44c`](https://github.com/backstage/backstage/commit/e5af44c): Replaced deprecated `humanizeEntityRef` usage with the Catalog Presentation API.

### `@backstage/plugin-catalog-unprocessed-entities` (0.2.28 → [0.2.32](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#0232))

#### 0.2.32

##### Patch Changes

- [`80b4370`](https://github.com/backstage/backstage/commit/80b4370): Updated instructions for enabling the `catalog-unprocessed-entities` page

#### 0.2.31

##### Patch Changes

- [`44d77e9`](https://github.com/backstage/backstage/commit/44d77e9): Removed separate nav item extensions. Sidebar entries are now provided via `title` and `icon` on each plugin's page extension.

#### 0.2.29

##### Patch Changes

- [`482ceed`](https://github.com/backstage/backstage/commit/482ceed): Migrated from `assertError` to `toError` for error handling.
- [`b6f1fae`](https://github.com/backstage/backstage/commit/b6f1fae): The unprocessed entities view is now primarily intended for use as a tab within the DevTools plugin. The standalone page is still available but disabled by default. To re-enable it, add the following to your `app-config.yaml`:

  ```yaml
  app:
    extensions:
      - page:catalog-unprocessed-entities
  ```

### `@backstage/plugin-devtools` (0.1.37 → [0.1.40](../../changelogs/@backstage/plugin-devtools.md#0140))

#### 0.1.39

##### Patch Changes

- [`b15ef55`](https://github.com/backstage/backstage/commit/b15ef55): Scheduled Tasks page now refreshes its table automatically after a task is triggered or cancelled, so the updated status is visible without reloading the browser.
- [`08c922e`](https://github.com/backstage/backstage/commit/08c922e): Migrated `ConfigContent` component from Material UI to Backstage UI (BUI).
- [`44d77e9`](https://github.com/backstage/backstage/commit/44d77e9): Removed separate nav item extensions. Sidebar entries are now provided via `title` and `icon` on each plugin's page extension.

### `@backstage/plugin-devtools-backend` (0.5.15 → [0.5.18](../../changelogs/@backstage/plugin-devtools-backend.md#0518))

#### 0.5.17

##### Patch Changes

- [`0c5e41f`](https://github.com/backstage/backstage/commit/0c5e41f): Removed unused dependencies that had no imports in source code.

#### 0.5.16

##### Patch Changes

- [`482ceed`](https://github.com/backstage/backstage/commit/482ceed): Migrated from `assertError` to `toError` for error handling.

### `@backstage/plugin-events-backend` (0.6.0 → [0.6.3](../../changelogs/@backstage/plugin-events-backend.md#063))

#### 0.6.3

##### Patch Changes

- [`f4342b9`](https://github.com/backstage/backstage/commit/f4342b9): Increased the events bus request body limit to 5mb to allow larger event payloads.

### `@backstage/plugin-events-backend-module-google-pubsub` (0.2.1 → [0.2.4](../../changelogs/@backstage/plugin-events-backend-module-google-pubsub.md#024))

#### 0.2.2

##### Patch Changes

- [`eacf362`](https://github.com/backstage/backstage/commit/eacf362): Migrated internal metrics in `GooglePubSubConsumingEventPublisher` and `EventConsumingGooglePubSubPublisher` to use the new alpha `MetricsService`
- [`79453c0`](https://github.com/backstage/backstage/commit/79453c0): Updated dependency `wait-for-expect` to `^4.0.0`.

### `@backstage/plugin-home` (0.9.3 → [0.9.7](../../changelogs/@backstage/plugin-home.md#097))

#### 0.9.7

##### Patch Changes

- [`a07e6a3`](https://github.com/backstage/backstage/commit/a07e6a3): Added the correctly-spelled `'widgetSettingsOverlay.editSettingsTooltip'` translation key in `homeTranslationRef` and deprecated the previous typoed `'widgetSettingsOverlay.editSettingsTooptip'` key. Existing references to the old key continue to work; switch to the new key to avoid future removal.

#### 0.9.6

##### Patch Changes

- [`419141e`](https://github.com/backstage/backstage/commit/419141e): Fixed widgets not being movable or resizable after saved edits. Previously, entering edit mode didn't restore `isDraggable` and `isResizable`.
- [`44d77e9`](https://github.com/backstage/backstage/commit/44d77e9): Removed separate nav item extensions. Sidebar entries are now provided via `title` and `icon` on each plugin's page extension.

### `@backstage/plugin-kubernetes` (0.12.17 → [0.12.20](../../changelogs/@backstage/plugin-kubernetes.md#01220))

#### 0.12.20

##### Patch Changes

- [`07bd0b4`](https://github.com/backstage/backstage/commit/07bd0b4): Removed the default Kubernetes standalone page that was registered at `/kubernetes`. This page was added by mistake and is not intended to be part of the plugin.

#### 0.12.18

##### Patch Changes

- [`d156cf4`](https://github.com/backstage/backstage/commit/d156cf4): Added `title` and `icon` to the new frontend system plugin definition.

### `@backstage/plugin-kubernetes-backend` (0.21.2 → [0.21.5](../../changelogs/@backstage/plugin-kubernetes-backend.md#0215))

#### 0.21.5

##### Patch Changes

- [`998664c`](https://github.com/backstage/backstage/commit/998664c): chore(deps): Bump `ws` from 8.20.0 to 8.20.1
- [`c4f935b`](https://github.com/backstage/backstage/commit/c4f935b): pool HTTPS agents per cluster in KubernetesFetcher

#### 0.21.4

##### Patch Changes

- [`1ecc3ca`](https://github.com/backstage/backstage/commit/1ecc3ca): Fixed spelling mistakes in internal code

#### 0.21.3

##### Patch Changes

- [`ed6b53c`](https://github.com/backstage/backstage/commit/ed6b53c): Removed bare catch-and-rethrow blocks that served no purpose.

### `@backstage/plugin-kubernetes-common` (0.9.10 → [0.9.12](../../changelogs/@backstage/plugin-kubernetes-common.md#0912))

#### 0.9.12

##### Patch Changes

- [`ab1cdbb`](https://github.com/backstage/backstage/commit/ab1cdbb): Removed a handful of internal imports that referenced the package by its own name. Value imports were switched to relative paths, and type-only imports to `import type`. These self-referential imports could trigger circular initialization errors in bundled ESM and when the package was loaded via `jest.requireActual` — most visibly `Cannot access '_AppRootElementBlueprintesm' before initialization` from `@backstage/frontend-plugin-api`. There are no user-facing API changes.

### `@backstage/plugin-kubernetes-node` (0.4.2 → [0.4.5](../../changelogs/@backstage/plugin-kubernetes-node.md#045))

#### 0.4.4

##### Patch Changes

- [`ab1cdbb`](https://github.com/backstage/backstage/commit/ab1cdbb): Removed a handful of internal imports that referenced the package by its own name. Value imports were switched to relative paths, and type-only imports to `import type`. These self-referential imports could trigger circular initialization errors in bundled ESM and when the package was loaded via `jest.requireActual` — most visibly `Cannot access '_AppRootElementBlueprintesm' before initialization` from `@backstage/frontend-plugin-api`. There are no user-facing API changes.
- [`0c5e41f`](https://github.com/backstage/backstage/commit/0c5e41f): Removed unused dependencies that had no imports in source code.

### `@backstage/plugin-kubernetes-react` (0.5.17 → [0.5.21](../../changelogs/@backstage/plugin-kubernetes-react.md#0521))

#### 0.5.19

##### Patch Changes

- [`e68cb8a`](https://github.com/backstage/backstage/commit/e68cb8a): Added optional clustersCacheTtlMs option to KubernetesBackendClient that caches getClusters() responses for the specified duration, avoiding repeated /clusters requests when multiple proxy calls resolve cluster auth in quick succession.

### `@backstage/plugin-mcp-actions-backend` (0.1.11 → [0.1.14](../../changelogs/@backstage/plugin-mcp-actions-backend.md#0114))

#### 0.1.14

##### Patch Changes

- [`ed1be73`](https://github.com/backstage/backstage/commit/ed1be73): Validate each action against the MCP tool schema when responding to `tools/list`, and skip any action that doesn't conform instead of failing the entire response. A single misbehaving action with a malformed input schema will now be logged as a warning and omitted from the tool list, letting the remaining actions continue to be served.

#### 0.1.13

##### Patch Changes

- [`ca8951a`](https://github.com/backstage/backstage/commit/ca8951a): Fixed an issue where actions returned Markdown-formatted JSON instead of plain JSON and a `structuredContent` field for model context protocol responses.
- [`8916f83`](https://github.com/backstage/backstage/commit/8916f83): Trace spans are now emitted for MCP `tools/call` invocations, following OpenTelemetry server-side MCP semantic conventions.

#### 0.1.12

##### Patch Changes

- [`282c114`](https://github.com/backstage/backstage/commit/282c114): Fix OAuth 2.0 Protected Resource Metadata endpoint returning internal plugin URL, preventing some MCP clients like Claude Code from authenticating
- [`482ceed`](https://github.com/backstage/backstage/commit/482ceed): Migrated from `assertError` to `toError` for error handling.
- [`c6abc52`](https://github.com/backstage/backstage/commit/c6abc52): Fixed the `.well-known/oauth-protected-resource` resource URL to comply with
  [RFC 9728 Section 7.3](https://datatracker.ietf.org/doc/html/rfc9728#name-impersonation-attacks). Enabling dynamic resource paths.

### `@backstage/plugin-notifications` (0.5.15 → [0.5.18](../../changelogs/@backstage/plugin-notifications.md#0518))

#### 0.5.17

##### Patch Changes

- [`3846774`](https://github.com/backstage/backstage/commit/3846774): Added missing dependencies that were previously only available transitively.
- [`e2d9831`](https://github.com/backstage/backstage/commit/e2d9831): Tightened React Aria dependency version ranges from `^` to `~` to prevent unintended minor version upgrades.
- [`f635139`](https://github.com/backstage/backstage/commit/f635139): Limited `@remixicon/react` dependency to versions below 4.9.0 due to a license change in that release.
- [`03311e3`](https://github.com/backstage/backstage/commit/03311e3): The notification description used in the notifications table is now a swappable component, so that apps can replace its rendering with a custom implementation.

#### 0.5.16

##### Patch Changes

- [`19a2a03`](https://github.com/backstage/backstage/commit/19a2a03): Migrated notifications plugin to use backstage UI
- [`d156cf4`](https://github.com/backstage/backstage/commit/d156cf4): Added `title` and `icon` to the new frontend system plugin definition.

### `@backstage/plugin-notifications-backend` (0.6.3 → [0.6.6](../../changelogs/@backstage/plugin-notifications-backend.md#066))

#### 0.6.6

##### Patch Changes

- [`ac410b1`](https://github.com/backstage/backstage/commit/ac410b1): Migrated the internal router to be generated from the plugin's OpenAPI specification. The HTTP API is unchanged.

#### 0.6.5

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

#### 0.6.4

##### Patch Changes

- [`4c1fd43`](https://github.com/backstage/backstage/commit/4c1fd43): Added an action to get a user's notifications
- [`070af42`](https://github.com/backstage/backstage/commit/070af42): Fix handling of `limit=0` in `getNotifications` query to return empty results instead of all notifications

### `@backstage/plugin-notifications-backend-module-email` (0.3.19 → [0.3.22](../../changelogs/@backstage/plugin-notifications-backend-module-email.md#0322))

#### 0.3.20

##### Patch Changes

- [`19ef9fb`](https://github.com/backstage/backstage/commit/19ef9fb): build(deps): bump `nodemailer` from 7.0.13 to 8.0.4

### `@backstage/plugin-notifications-backend-module-slack` (0.4.0 → [0.4.3](../../changelogs/@backstage/plugin-notifications-backend-module-slack.md#043))

#### 0.4.2

##### Patch Changes

- [`744fa1f`](https://github.com/backstage/backstage/commit/744fa1f): Removed duplicated entries that appeared in both `dependencies` and `devDependencies`.
- [`f399a7a`](https://github.com/backstage/backstage/commit/f399a7a): Added scope-based message update support. When a notification is re-sent with the same `scope` and `notification.updated` is set, the processor now calls `chat.update()` on the existing Slack message instead of sending a duplicate via `chat.postMessage()`. Message timestamps are persisted in a new `slack_message_timestamps` database table with automatic daily cleanup. The processor gracefully degrades to the previous behavior when no database is provided.

#### 0.4.1

##### Patch Changes

- [`482ceed`](https://github.com/backstage/backstage/commit/482ceed): Migrated from `assertError` to `toError` for error handling.

### `@backstage/plugin-notifications-common` (0.2.1 → [0.2.3](../../changelogs/@backstage/plugin-notifications-common.md#023))

#### 0.2.3

##### Patch Changes

- [`0c5e41f`](https://github.com/backstage/backstage/commit/0c5e41f): Removed unused dependencies that had no imports in source code.

### `@backstage/plugin-notifications-node` (0.2.24 → [0.2.27](../../changelogs/@backstage/plugin-notifications-node.md#0227))

#### 0.2.26

##### Patch Changes

- [`0c5e41f`](https://github.com/backstage/backstage/commit/0c5e41f): Removed unused dependencies that had no imports in source code.

### `@backstage/plugin-org` (0.7.0 → [0.7.5](../../changelogs/@backstage/plugin-org.md#075))

#### 0.7.5

##### Patch Changes

- [`e0889a3`](https://github.com/backstage/backstage/commit/e0889a3): chore(deps): bump `qs` from 6.15.1 to 6.15.2

#### 0.7.4

##### Patch Changes

- [`f635139`](https://github.com/backstage/backstage/commit/f635139): Limited `@remixicon/react` dependency to versions below 4.9.0 due to a license change in that release.
- [`cad156e`](https://github.com/backstage/backstage/commit/cad156e): Replaced old config schema values from existing extensions and blueprints.
- [`085133f`](https://github.com/backstage/backstage/commit/085133f): The `zod` dependency has been bumped from `^3.25.76 || ^4.0.0` to `^4.0.0`, since `configSchema` requires the full Zod v4 package for JSON Schema support.

#### 0.7.1

##### Patch Changes

- [`64c9a20`](https://github.com/backstage/backstage/commit/64c9a20): The `MembersListCard` now prefers `metadata.title` over `metadata.name` when displaying the group membership card, similarly to the rest of the group profile cards
- [`87eb31c`](https://github.com/backstage/backstage/commit/87eb31c): Fixed `GroupProfileCard` and `UserProfileCard` content overflowing on narrow screens.
- [`d156cf4`](https://github.com/backstage/backstage/commit/d156cf4): Added `title` and `icon` to the new frontend system plugin definition.
- [`f1f59b1`](https://github.com/backstage/backstage/commit/f1f59b1): Replaced deprecated `humanizeEntityRef` usage with the Catalog Presentation API.

### `@backstage/plugin-org-react` (0.1.48 → [0.1.51](../../changelogs/@backstage/plugin-org-react.md#0151))

#### 0.1.49

##### Patch Changes

- [`e5af44c`](https://github.com/backstage/backstage/commit/e5af44c): Replaced deprecated `humanizeEntityRef` usage with the Catalog Presentation API.

### `@backstage/plugin-permission-backend` (0.7.10 → [0.7.13](../../changelogs/@backstage/plugin-permission-backend.md#0713))

#### 0.7.12

##### Patch Changes

- [`2f0519c`](https://github.com/backstage/backstage/commit/2f0519c): The permission backend no longer populates the removed `token` and `identity` fields on `PolicyQueryUser`, and no longer calls `auth.getPluginRequestToken()` during policy evaluation. This removes one internal round-trip per authorize request.
- [`0c5e41f`](https://github.com/backstage/backstage/commit/0c5e41f): Removed unused dependencies that had no imports in source code.

### `@backstage/plugin-permission-common` (0.9.7 → [0.9.9](../../changelogs/@backstage/plugin-permission-common.md#099))

#### 0.9.9

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

### `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.3.4 → [0.3.7](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#037))

#### 0.3.5

##### Patch Changes

- [`ed6b53c`](https://github.com/backstage/backstage/commit/ed6b53c): Removed bare catch-and-rethrow blocks that served no purpose.

### `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.19 → [0.2.22](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#0222))

#### 0.2.20

##### Patch Changes

- [`ed6b53c`](https://github.com/backstage/backstage/commit/ed6b53c): Removed bare catch-and-rethrow blocks that served no purpose.

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.21 → [0.3.24](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0324))

#### 0.3.23

##### Patch Changes

- [`0c5e41f`](https://github.com/backstage/backstage/commit/0c5e41f): Removed unused dependencies that had no imports in source code.

### `@backstage/plugin-scaffolder-backend-module-github` (0.9.7 → [0.9.10](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#0910))

#### 0.9.10

##### Patch Changes

- [`464ebc2`](https://github.com/backstage/backstage/commit/464ebc2): Added a fallback for `publish:github` and `github:repo:push` actions that retries via the GitHub GraphQL API when the git push fails with a connection-level error (`ECONNRESET` or `ECONNREFUSED`, checked on both `error.code` and `error.cause.code`). The git smart HTTP protocol sends binary pack data in a POST request which can be blocked by network proxies that perform deep packet inspection. The GraphQL fallback uses standard JSON requests which are not affected.

#### 0.9.9

##### Patch Changes

- [`3846774`](https://github.com/backstage/backstage/commit/3846774): Added missing dependencies that were previously only available transitively.
- [`a2ee960`](https://github.com/backstage/backstage/commit/a2ee960): Improved Octokit client creation to support retries via @octokit/plugin-retry

#### 0.9.8

##### Patch Changes

- [`482ceed`](https://github.com/backstage/backstage/commit/482ceed): Migrated from `assertError` to `toError` for error handling.

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.11.4 → [0.11.7](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#0117))

#### 0.11.6

##### Patch Changes

- [`8474da5`](https://github.com/backstage/backstage/commit/8474da5): Added `allowEmpty` input option to the `gitlab:repo:push` action, allowing empty commits. Required from GitLab 18.8 or later.

### `@backstage/plugin-scaffolder-backend-module-rails` (0.5.19 → [0.5.22](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0522))

#### 0.5.20

##### Patch Changes

- [`2905c59`](https://github.com/backstage/backstage/commit/2905c59): Removed unused `jest-when` dev dependency.

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.20 → [0.4.23](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0423))

#### 0.4.22

##### Patch Changes

- [`0c5e41f`](https://github.com/backstage/backstage/commit/0c5e41f): Removed unused dependencies that had no imports in source code.

### `@backstage/plugin-scaffolder-node` (0.13.1 → [0.13.4](../../changelogs/@backstage/plugin-scaffolder-node.md#0134))

#### 0.13.4

##### Patch Changes

- [`3d0ba59`](https://github.com/backstage/backstage/commit/3d0ba59): Added retry with exponential back off to `Git.push()`. Scaffolder template actions that create a repository and immediately push to it (e.g., `publish:github`) can encounter transient failures when the repository is not yet fully provisioned. The push is now retried up to 5 times with increasing delays before failing. Authentication and permission errors (401, 403) fail immediately without retrying.

#### 0.13.3

##### Patch Changes

- [`77bee9f`](https://github.com/backstage/backstage/commit/77bee9f): Added optional `status` filter to `ScaffolderService.listTasks`, allowing callers to retrieve tasks matching a specific status.

#### 0.13.2

##### Patch Changes

- [`5af48e7`](https://github.com/backstage/backstage/commit/5af48e7): Added `PermissionResourceRef` definitions for scaffolder resource types: `scaffolderTemplatePermissionResourceRef`, `scaffolderActionPermissionResourceRef`, and `scaffolderTaskPermissionResourceRef`. These are exported from `@backstage/plugin-scaffolder-node/alpha`.

### `@backstage/plugin-search-backend-module-pg` (0.5.53 → [0.5.56](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0556))

#### 0.5.55

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

#### 0.5.54

##### Patch Changes

- [`aa08b7f`](https://github.com/backstage/backstage/commit/aa08b7f): Fix a bug in large document indexing logic by using sub-transaction rollbacks

### `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.3.18 → [0.3.21](../../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#0321))

#### 0.3.21

##### Patch Changes

- [`e0889a3`](https://github.com/backstage/backstage/commit/e0889a3): chore(deps): bump `qs` from 6.15.1 to 6.15.2

### `@backstage/plugin-search-backend-module-techdocs` (0.4.12 → [0.4.15](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#0415))

#### 0.4.13

##### Patch Changes

- [`5e32f77`](https://github.com/backstage/backstage/commit/5e32f77): Migrated internal usage of the deprecated `catalogServiceRef` from `@backstage/plugin-catalog-node/alpha` to the stable `catalogServiceRef` from `@backstage/plugin-catalog-node`.

### `@backstage/plugin-signals-backend` (0.3.13 → [0.3.16](../../changelogs/@backstage/plugin-signals-backend.md#0316))

#### 0.3.16

##### Patch Changes

- [`998664c`](https://github.com/backstage/backstage/commit/998664c): chore(deps): Bump `ws` from 8.20.0 to 8.20.1

#### 0.3.15

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

### `@backstage/plugin-user-settings` (0.9.1 → [0.9.4](../../changelogs/@backstage/plugin-user-settings.md#094))

#### 0.9.3

##### Patch Changes

- [`876c99e`](https://github.com/backstage/backstage/commit/876c99e): Prioritize i18n translation over `theme.title` for built-in light/dark theme names in `UserSettingsThemeToggle`, so that translation overrides are no longer silently ignored.
- [`44d77e9`](https://github.com/backstage/backstage/commit/44d77e9): Removed separate nav item extensions. Sidebar entries are now provided via `title` and `icon` on each plugin's page extension.

### `@backstage/plugin-user-settings-backend` (0.4.1 → [0.4.4](../../changelogs/@backstage/plugin-user-settings-backend.md#044))

#### 0.4.3

##### Patch Changes

- [`0c5e41f`](https://github.com/backstage/backstage/commit/0c5e41f): Removed unused dependencies that had no imports in source code.

### `@backstage/repo-tools` (0.17.0 → [0.17.3](../../changelogs/@backstage/repo-tools.md#0173))

#### 0.17.2

##### Patch Changes

- [`927c003`](https://github.com/backstage/backstage/commit/927c003): Replaced internal error utilities with shared ones from `@backstage/cli-common`.

#### 0.17.1

##### Patch Changes

- [`2e5c5f8`](https://github.com/backstage/backstage/commit/2e5c5f8): Bumped `glob` dependency from v7/v8/v11 to v13 to address security vulnerabilities in older versions. Bumped `rollup` from v4.27 to v4.59+ to fix a high severity path traversal vulnerability (GHSA-mw96-cpmx-2vgc).
- [`482ceed`](https://github.com/backstage/backstage/commit/482ceed): Migrated from `assertError` to `toError` for error handling.
- [`377de36`](https://github.com/backstage/backstage/commit/377de36): Fixed the `peer-deps` command to only require peer dependencies that are actually referenced by each package, rather than requiring all tracked peer dependencies for every package with any React dependency.
- [`8e9679b`](https://github.com/backstage/backstage/commit/8e9679b): Parallelized CLI report generation, reducing wall-clock time by ~4x.
- [`ca2dc15`](https://github.com/backstage/backstage/commit/ca2dc15): Internal code cleanup.
- [`270efef`](https://github.com/backstage/backstage/commit/270efef): Added support for packages that only support React 18+ in the `peer-deps` command.

### `@backstage/theme` (0.7.2 → [0.7.3](../../changelogs/@backstage/theme.md#073))

#### 0.7.3

##### Patch Changes

- [`a0100d4`](https://github.com/backstage/backstage/commit/a0100d4): Fixes occasional duplication of v5 class name prefix for MUI 5 components.

  Documentation added to explain how to resolve missing v5 prefix in class names when using MUI 5 components in main app.

## Other minor version bumps

### `@backstage/backend-app-api` (1.6.0 → [1.7.1](../../changelogs/@backstage/backend-app-api.md#171))

#### 1.7.1

##### Patch Changes

- [`2e895ea`](https://github.com/backstage/backstage/commit/2e895ea): Internal refactor.

#### 1.7.0

##### Minor Changes

- [`3595c97`](https://github.com/backstage/backstage/commit/3595c97): Added `ExtensionPointFactoryMiddleware` type and `createExtensionPointFactoryMiddleware` helper to reimplement extension point outputs at backend creation time.

#### 1.6.1

##### Patch Changes

- [`482ceed`](https://github.com/backstage/backstage/commit/482ceed): Migrated from `assertError` to `toError` for error handling.

### `@backstage/backend-plugin-api` (1.8.0 → [1.9.2](../../changelogs/@backstage/backend-plugin-api.md#192))

#### 1.9.2

##### Patch Changes

- [`02c4e8a`](https://github.com/backstage/backstage/commit/02c4e8a): Removed unused `json-schema` runtime dependency. The package was only used for TypeScript types from `@types/json-schema`; affected imports have been converted to `import type` to allow safe removal.
- [`0211390`](https://github.com/backstage/backstage/commit/0211390): Added optional `secrets` schema support to `ActionsRegistryActionOptions` and `ActionsRegistryActionContext`. Actions can now declare a Zod secrets schema separate from the input schema, enabling surfaces to collect sensitive credentials independently from tool arguments. Added optional `secrets` field to `ActionsServiceAction` metadata and `ActionsService.invoke()` parameters.

#### 1.9.1

##### Patch Changes

- [`90b572e`](https://github.com/backstage/backstage/commit/90b572e): Adds an alpha `TracingService` to provide a unified interface for emitting trace spans across Backstage plugins.
- [`6209065`](https://github.com/backstage/backstage/commit/6209065): Added `context` and `propagation` to the alpha `TracingService`. Plugins can bridge OpenTelemetry context across async boundaries via `tracing.propagation.extract(tracing.context.active(), carrier)` followed by `tracing.context.with(ctx, fn)`, and read propagated baggage via `tracing.propagation.getActiveBaggage()` or `tracing.propagation.getBaggage(ctx)`.

#### 1.9.0

##### Minor Changes

- [`4559806`](https://github.com/backstage/backstage/commit/4559806): Added support for typed `examples` on actions registered via the actions registry. Action authors can now provide examples with compile-time-checked `input` and `output` values that match their schema definitions.

##### Patch Changes

- [`213ebe7`](https://github.com/backstage/backstage/commit/213ebe7): Aligned `.T` behavior between `ExtensionPoint` and `ServiceRef` to consistently return `null` instead of throwing.
- [`68c557b`](https://github.com/backstage/backstage/commit/68c557b): Added stricter type checks in `isDatabaseConflictError`.

### `@backstage/catalog-model` (1.7.7 → [1.9.0](../../changelogs/@backstage/catalog-model.md#190))

#### 1.9.0

##### Minor Changes

- [`3664148`](https://github.com/backstage/backstage/commit/3664148): Introduced the `AiResource` catalog entity kind. Entity types, validators, type guards, and the model layer are exported from `@backstage/catalog-model/alpha`. Install `@backstage/plugin-catalog-backend-module-ai-model` in your backend to register the kind with the catalog.
- [`be71476`](https://github.com/backstage/backstage/commit/be71476): Added `spec.type: 'mcp-server'` as a structured subtype of the `API` kind under `v1alpha1`/`v1beta1`. MCP server entities carry a `spec.remotes` list instead of a string `definition`, for representing Model Context Protocol servers in the catalog. See RFC [#32062](https://github.com/backstage/backstage/issues/32062). New public exports: `McpServerApiEntity`, `McpServerRemote`, `mcpServerApiEntityValidator`, and `isMcpServerApiEntity`. Also adds `addKindVersion` to `CatalogModelLayerBuilder` (alpha) so layers can add new versions or spec types to existing kinds.

##### Patch Changes

- [`ab1cdbb`](https://github.com/backstage/backstage/commit/ab1cdbb): Removed a handful of internal imports that referenced the package by its own name. Value imports were switched to relative paths, and type-only imports to `import type`. These self-referential imports could trigger circular initialization errors in bundled ESM and when the package was loaded via `jest.requireActual` — most visibly `Cannot access '_AppRootElementBlueprintesm' before initialization` from `@backstage/frontend-plugin-api`. There are no user-facing API changes.

#### 1.8.0

##### Minor Changes

- [`e5fcfcb`](https://github.com/backstage/backstage/commit/e5fcfcb): Added a new catalog model layer system that allows plugins to declare and extend catalog entity kinds, annotations, labels, tags, and relations using JSON Schema. The new `createCatalogModelLayer` API provides a builder for composing model definitions, and a `compileCatalogModel` function validates and merges them into a unified model. Built-in entity kinds now include model layer definitions.

### `@backstage/core-app-api` (1.19.6 → [1.20.2](../../changelogs/@backstage/core-app-api.md#1202))

#### 1.20.0

##### Minor Changes

- [`400aa23`](https://github.com/backstage/backstage/commit/400aa23): Added `FetchMiddlewares.clarifyFailures()` which replaces the uninformative "TypeError: Failed to fetch" with a message that includes the request method and URL.

##### Patch Changes

- [`9244b70`](https://github.com/backstage/backstage/commit/9244b70): The default auth implementation now checks for a `logoutUrl` in the logout response body. If the auth provider returns one (e.g. Auth0 federated logout), the browser is redirected to that URL to clear the provider's session cookies. This is backward compatible — providers that return an empty response are unaffected.

### `@backstage/errors` (1.2.7 → [1.3.1](../../changelogs/@backstage/errors.md#131))

#### 1.3.1

##### Patch Changes

- [`8741e5a`](https://github.com/backstage/backstage/commit/8741e5a): Added explicit `name` property to `ServiceUnavailableError` for consistency with all other error classes, making it resilient to minification.

#### 1.3.0

##### Minor Changes

- [`b2319ff`](https://github.com/backstage/backstage/commit/b2319ff): A new `toError` utility function is now available for converting unknown values to `ErrorLike` objects. If the value is already error-like it is returned as-is, strings are used directly as the error message, and all other values are wrapped as `unknown error '<stringified>'`. Non-error causes passed to `CustomErrorBase` are now converted and stored using `toError` rather than discarded.

##### Patch Changes

- [`608c1e5`](https://github.com/backstage/backstage/commit/608c1e5): Simplified `assertError` to delegate to `isError` instead of duplicating the same checks.

### `@backstage/plugin-scaffolder` (1.36.1 → [1.38.0](../../changelogs/@backstage/plugin-scaffolder.md#1380))

#### 1.38.0

##### Minor Changes

- [`3e5acb5`](https://github.com/backstage/backstage/commit/3e5acb5): Extended the `RepoOwnerPicker` implementation with a custom variant for GitLab.

##### Patch Changes

- [`e0889a3`](https://github.com/backstage/backstage/commit/e0889a3): chore(deps): bump `qs` from 6.15.1 to 6.15.2
- [`02c4e8a`](https://github.com/backstage/backstage/commit/02c4e8a): Removed unused `json-schema` runtime dependency. The package was only used for TypeScript types from `@types/json-schema`; affected imports have been converted to `import type` to allow safe removal.

#### 1.37.0

##### Minor Changes

- [`dbeb7aa`](https://github.com/backstage/backstage/commit/dbeb7aa): Added experimental BUI (Backstage UI) form theme for scaffolder forms. All default field extensions render BUI variants when enabled.

  **Extension config:**

  ```yaml
  app:
    extensions:
      - sub-page:scaffolder/templates:
          config:
            enableBackstageUi: true
  ```

  **JSX props:**

  ```tsx
  <ScaffolderPage formProps={{ EXPERIMENTAL_theme: 'bui' }} />
  ```

- [`8006acf`](https://github.com/backstage/backstage/commit/8006acf): Promoted `formDecoratorsApiRef`, `ScaffolderFormDecoratorsApi`,
  `DefaultScaffolderFormDecoratorsApi`, and `formDecoratorsApi` from `@alpha`
  to `@public`.
- [`d09c21c`](https://github.com/backstage/backstage/commit/d09c21c): The `sub-page:scaffolder/templates` extension now accepts a `groups` config
  field that lets you define template groups on the template list page. Each group
  has a `title` and a `filter` predicate. Templates not matched by any
  configured group fall into an automatically appended "Other Templates" group.
  With no groups configured, the page renders a single "Templates" group as
  before.

  Example:

  ```yaml
  app:
    extensions:
      - sub-page:scaffolder/templates:
          config:
            groups:
              - title: Recommended Services
                filter:
                  spec.type: service
              - title: Documentation
                filter:
                  spec.type: documentation
  ```

##### Patch Changes

- [`1ecc3ca`](https://github.com/backstage/backstage/commit/1ecc3ca): Fixed spelling mistakes in internal code
- [`f635139`](https://github.com/backstage/backstage/commit/f635139): Limited `@remixicon/react` dependency to versions below 4.9.0 due to a license change in that release.
- [`415e30b`](https://github.com/backstage/backstage/commit/415e30b): Simplified the `OwnerEntityColumn` in the task list to rely on `EntityRefLink` and the entity presentation API instead of manually fetching entities from the catalog.
- [`44d77e9`](https://github.com/backstage/backstage/commit/44d77e9): Removed separate nav item extensions. Sidebar entries are now provided via `title` and `icon` on each plugin's page extension.
- [`8006acf`](https://github.com/backstage/backstage/commit/8006acf): Form decorator input is now parsed against the zod schema configured on the
  decorator before the decorator runs, so defaults declared via `.default()`
  are applied and invalid input is reported through the error API instead of
  silently passing through.
- [`8006acf`](https://github.com/backstage/backstage/commit/8006acf): The template wizard now reads form decorators from the new
  `spec.formDecorators` field on a template, falling back to the deprecated
  `spec.EXPERIMENTAL_formDecorators` for templates that have not been migrated.

#### 1.36.2

##### Patch Changes

- [`297302e`](https://github.com/backstage/backstage/commit/297302e): Fixed the NFS custom field explorer so loaded form fields render field options and previews correctly.
- [`864a799`](https://github.com/backstage/backstage/commit/864a799): Fix the display of the description in `GitlabRepoPicker`:

  - Move `owner.description` helper text outside the `allowedOwners` conditional so it renders for both `Select` and `Autocomplete` modes.
  - Update the `Autocomplete` label to use `fields.gitlabRepoPicker.owner.inputTitle` instead of `fields.gitlabRepoPicker.owner.title`.

- [`e5af44c`](https://github.com/backstage/backstage/commit/e5af44c): Replaced deprecated `humanizeEntityRef` usage with the Catalog Presentation API.
- [`5d8112e`](https://github.com/backstage/backstage/commit/5d8112e): Migrated the actions page to use `@backstage/ui` list and search components. Actions are now presented in a sidebar list with a separate detail panel for the selected action, along with built-in search filtering. The selected action is also reflected in the URL hash, allowing deep-linking to a specific action.
- [`4cc9af2`](https://github.com/backstage/backstage/commit/4cc9af2): Fixed the layout of the scaffolder plugin in the new frontend system to use the new page layout.
- [`a7a14b7`](https://github.com/backstage/backstage/commit/a7a14b7): Removed custom `IterableDirectoryHandle` and `WritableFileHandle` types in favor of the standard DOM `FileSystemDirectoryHandle` and `FileSystemFileHandle` types, which are now available through the `DOM.AsyncIterable` lib added to the shared TypeScript configuration.

### `@backstage/plugin-scaffolder-common` (2.0.0 → [2.2.1](../../changelogs/@backstage/plugin-scaffolder-common.md#221))

#### 2.2.1

##### Patch Changes

- [`02c4e8a`](https://github.com/backstage/backstage/commit/02c4e8a): Removed unused `json-schema` runtime dependency. The package was only used for TypeScript types from `@types/json-schema`; affected imports have been converted to `import type` to allow safe removal.

#### 2.2.0

##### Minor Changes

- [`8006acf`](https://github.com/backstage/backstage/commit/8006acf): Promote the `formDecorators` field on the `Template` spec out of experimental.
  The previous `EXPERIMENTAL_formDecorators` field continues to work and is
  kept as a deprecated alias.

#### 2.1.0

##### Minor Changes

- [`e5fcfcb`](https://github.com/backstage/backstage/commit/e5fcfcb): Added `scaffolderCatalogModelLayer`, a Template kind model layer with JSON Schema definition, serving as an example of how plugins can declare their own catalog entity kinds.

##### Patch Changes

- [`3ef6078`](https://github.com/backstage/backstage/commit/3ef6078): Added optional `if` property to `ScaffolderOutputLink` and `ScaffolderOutputText` types, allowing template authors to conditionally include output links and text items.

### `@backstage/plugin-techdocs-backend` (2.1.6 → [2.2.1](../../changelogs/@backstage/plugin-techdocs-backend.md#221))

#### 2.2.0

##### Minor Changes

- [`5ef8d16`](https://github.com/backstage/backstage/commit/5ef8d16): Add support for disabling external font downloads via app-config option `techdocs.generator.mkdocs.disableExternalFonts`, useful for air-gapped Backstage instances.

#### 2.1.7

##### Patch Changes

- [`482ceed`](https://github.com/backstage/backstage/commit/482ceed): Migrated from `assertError` to `toError` for error handling.
- [`5e32f77`](https://github.com/backstage/backstage/commit/5e32f77): Migrated internal usage of the deprecated `catalogServiceRef` from `@backstage/plugin-catalog-node/alpha` to the stable `catalogServiceRef` from `@backstage/plugin-catalog-node`.

### `@backstage/plugin-techdocs-node` (1.14.4 → [1.15.1](../../changelogs/@backstage/plugin-techdocs-node.md#1151))

#### 1.15.0

##### Minor Changes

- [`5ef8d16`](https://github.com/backstage/backstage/commit/5ef8d16): Add support for disabling external font downloads via app-config option `techdocs.generator.mkdocs.disableExternalFonts`, useful for air-gapped Backstage instances.

##### Patch Changes

- [`6ce8462`](https://github.com/backstage/backstage/commit/6ce8462): Fixed bug causing `--legacyCopyReadmeMdToIndexMd` option to fail if docs directory is not present

#### 1.14.5

##### Patch Changes

- [`482ceed`](https://github.com/backstage/backstage/commit/482ceed): Migrated from `assertError` to `toError` for error handling.

### `@techdocs/cli` (1.10.6 → [1.11.1](../../changelogs/@techdocs/cli.md#1111))

#### 1.11.0

##### Minor Changes

- [`329f592`](https://github.com/backstage/backstage/commit/329f592): Add support for disabling external font downloads via techdocs-cli `techdocs-cli generate --disableExternalFonts`, useful for air-gapped Backstage instances.

##### Patch Changes

- [`0c5e41f`](https://github.com/backstage/backstage/commit/0c5e41f): Removed unused dependencies that had no imports in source code.

#### 1.10.7

##### Patch Changes

- [`980b7f5`](https://github.com/backstage/backstage/commit/980b7f5): Updated proxy documentation to recommend Node.js built-in proxy support via `NODE_USE_ENV_PROXY` instead of `global-agent`.

## Other patch version bumps

### `@backstage/app-defaults` (1.7.6 → [1.7.9](../../changelogs/@backstage/app-defaults.md#179))

#### 1.7.9

##### Patch Changes

- [`74ed625`](https://github.com/backstage/backstage/commit/74ed625): Provide toastApi for old frontend system

  Fixes 'No implementation available for apiRef{core.toast}' on old frontend system.

#### 1.7.7

##### Patch Changes

- [`400aa23`](https://github.com/backstage/backstage/commit/400aa23): Added `FetchMiddlewares.clarifyFailures()` to the default fetch API middleware stack.

### `@backstage/backend-test-utils` (1.11.1 → [1.11.4](../../changelogs/@backstage/backend-test-utils.md#1114))

#### 1.11.4

##### Patch Changes

- [`2e895ea`](https://github.com/backstage/backstage/commit/2e895ea): Internal refactor.
- [`2d181c0`](https://github.com/backstage/backstage/commit/2d181c0): Increased MySQL connection and pool timeouts to reduce flaky `connect ETIMEDOUT` failures in CI. The test MySQL container now also uses `mysql_native_password` for cheaper connection handshakes and disables binary logging.
- [`06a2035`](https://github.com/backstage/backstage/commit/06a2035): Updated `MockActionsRegistry` to support the new secrets schema. The mock now validates secrets against the declared schema, rejects missing secrets for actions that require them, and forwards secrets to the action handler.

#### 1.11.3

##### Patch Changes

- [`7fb12b8`](https://github.com/backstage/backstage/commit/7fb12b8): Added a new tracing service mock to be leveraged in tests
- [`ada7df7`](https://github.com/backstage/backstage/commit/ada7df7): Fixed `mockCredentials` to include the internal `version: 'v1'` field on all credential objects (`none()`, `user()`, `limitedUser()`, `service()`), and fixed `user()` to encode the user entity ref into the token (matching `user.token(ref)` behavior). This makes mock credentials compatible with `toInternalBackstageCredentials()`, which validates the version field, and ensures that credentials for different users produce different tokens.
- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.
- [`6209065`](https://github.com/backstage/backstage/commit/6209065): Added `context` and `propagation` to the alpha `TracingService`. Plugins can bridge OpenTelemetry context across async boundaries via `tracing.propagation.extract(tracing.context.active(), carrier)` followed by `tracing.context.with(ctx, fn)`, and read propagated baggage via `tracing.propagation.getActiveBaggage()` or `tracing.propagation.getBaggage(ctx)`.

#### 1.11.2

##### Patch Changes

- [`4559806`](https://github.com/backstage/backstage/commit/4559806): Added support for typed `examples` on actions registered via the actions registry. Action authors can now provide examples with compile-time-checked `input` and `output` values that match their schema definitions.
- [`f44c6bd`](https://github.com/backstage/backstage/commit/f44c6bd): Deduplicated internal readiness-polling helpers used by the database and cache test infrastructure.

### `@backstage/config-loader` (1.10.9 → [1.10.12](../../changelogs/@backstage/config-loader.md#11012))

#### 1.10.12

##### Patch Changes

- [`02c4e8a`](https://github.com/backstage/backstage/commit/02c4e8a): Removed unused `json-schema` runtime dependency. The package was only used for TypeScript types from `@types/json-schema`; affected imports have been converted to `import type` to allow safe removal.

#### 1.10.10

##### Patch Changes

- [`482ceed`](https://github.com/backstage/backstage/commit/482ceed): Migrated from `assertError` to `toError` for error handling.

### `@backstage/core-plugin-api` (1.12.4 → [1.12.7](../../changelogs/@backstage/core-plugin-api.md#1127))

#### 1.12.6

##### Patch Changes

- [`ab1cdbb`](https://github.com/backstage/backstage/commit/ab1cdbb): Removed a handful of internal imports that referenced the package by its own name. Value imports were switched to relative paths, and type-only imports to `import type`. These self-referential imports could trigger circular initialization errors in bundled ESM and when the package was loaded via `jest.requireActual` — most visibly `Cannot access '_AppRootElementBlueprintesm' before initialization` from `@backstage/frontend-plugin-api`. There are no user-facing API changes.

### `@backstage/integration` (2.0.0 → [2.0.3](../../changelogs/@backstage/integration.md#203))

#### 2.0.3

##### Patch Changes

- [`a07e6a3`](https://github.com/backstage/backstage/commit/a07e6a3): Added the correctly-spelled `AzureBlobStorageIntegration` class export and deprecated the previous typoed `AzureBlobStorageIntergation` export. Existing usage of `AzureBlobStorageIntergation` continues to work; switch to `AzureBlobStorageIntegration` to avoid future removal.
- [`b75158b`](https://github.com/backstage/backstage/commit/b75158b): Adapted Azure-related tests for the Azure SDK upgrade to ESM-style exports. The `AzureBlobStorageUrlReader` now accepts an optional `createContainerClient` dependency for testability without needing to mock the `@azure/storage-blob` module.
- [`241d359`](https://github.com/backstage/backstage/commit/241d359): Changed visibility of Bitbucket username as it is not a secret.

#### 2.0.2

##### Patch Changes

- [`6b112d3`](https://github.com/backstage/backstage/commit/6b112d3): Fixed two issues in the GitLab integration's fetch behavior:

  - The internal fetch wrapper was passing `mode: 'same-origin'` on every request. This had no practical effect server-side, but would have caused cross-origin requests to be rejected when the integration is used from a browser. Requests now use the default fetch mode and work correctly in both browser and Node environments.
  - When retries are configured, transient network errors (such as dropped connections or DNS hiccups) are now retried using the same `maxRetries` and exponential delay as retryable HTTP status codes. Previously, a thrown fetch error would propagate immediately on the first failure regardless of the retry configuration. Caller-initiated aborts continue to surface immediately without being retried.

- [`b62781f`](https://github.com/backstage/backstage/commit/b62781f): Moved `registerMswTestHooks` to test files.

#### 2.0.1

##### Patch Changes

- [`d112499`](https://github.com/backstage/backstage/commit/d112499): Fixed `SingleInstanceGithubCredentialsProvider` to return app credentials when `getCredentials` is called with a bare host URL (e.g. `https://github.com`) instead of falling back to a personal access token.

### `@backstage/plugin-catalog` (2.0.1 → [2.0.6](../../changelogs/@backstage/plugin-catalog.md#206))

#### 2.0.6

##### Patch Changes

- [`7172386`](https://github.com/backstage/backstage/commit/7172386): Updated the new frontend system Catalog index page to use the current Backstage UI page header and content container.
- [`d8757b1`](https://github.com/backstage/backstage/commit/d8757b1): The entity list provider now fetches the entity list and the total count as two separate parallel requests when using cursor or offset pagination. The list query skips the expensive count computation (using `totalItems: 'exclude'`), so the table populates immediately. The count arrives asynchronously and updates the title. A new `totalItemsLoading` field is exposed on `EntityListContextProps` so consumers can distinguish a stale count from a fresh one.

  The catalog table now keeps stale rows visible during filter changes and page navigation instead of replacing the entire table body with a spinner. The full-table spinner is only shown on the very first load when no data exists yet. The entity count in the title is dimmed while the count is refreshing, and a small spinner appears next to the title while rows are loading.

- [`82cf16f`](https://github.com/backstage/backstage/commit/82cf16f): Added `CatalogExportButton`, which adds CSV and JSON export support to the `CatalogIndexPage`.
- [`d7c1dcf`](https://github.com/backstage/backstage/commit/d7c1dcf): Fixed a missing React key warning for context menu items on the entity page.
- [`a07e6a3`](https://github.com/backstage/backstage/commit/a07e6a3): Added the correctly-spelled `RelatedEntitiesCard.domainEntityColumns` static property and deprecated the previous typoed `RelatedEntitiesCard.domainEntityColums` property. Existing references to the old property continue to work; switch to `domainEntityColumns` to avoid future removal.

#### 2.0.5

##### Patch Changes

- [`728629c`](https://github.com/backstage/backstage/commit/728629c): Fixed an issue where navigating to an unknown sub-path on an entity page (for example `/catalog/default/component/foo/blob`) would silently render the first available route. Unknown paths now show the standard not-found page instead.
- [`44d77e9`](https://github.com/backstage/backstage/commit/44d77e9): Removed separate nav item extensions. Sidebar entries are now provided via `title` and `icon` on each plugin's page extension.
- [`0c5e41f`](https://github.com/backstage/backstage/commit/0c5e41f): Removed unused dependencies that had no imports in source code.
- [`cad156e`](https://github.com/backstage/backstage/commit/cad156e): Replaced old config schema values from existing extensions and blueprints.
- [`085133f`](https://github.com/backstage/backstage/commit/085133f): The `zod` dependency has been bumped from `^3.25.76 || ^4.0.0` to `^4.0.0`, since `configSchema` requires the full Zod v4 package for JSON Schema support.

#### 2.0.2

##### Patch Changes

- [`e4804ab`](https://github.com/backstage/backstage/commit/e4804ab): Migrated the unregister entity context menu item from the deprecated `DialogApi.showModal` to the new `DialogApi.open` method.
- [`d7b6077`](https://github.com/backstage/backstage/commit/d7b6077): Disabled the default page layout header for the catalog entity page in the new frontend system. The entity page already renders its own header through the `EntityHeader` extension, so the page layout header was redundant.
- [`ee1531d`](https://github.com/backstage/backstage/commit/ee1531d): Exported the NFS variant of the catalog index page as `CatalogIndexPage` from the `./alpha` entry point, along with supporting types `CatalogIndexPageProps`, `CatalogTableRow`, and `CatalogTableColumnsFunc`. This allows adopters to use and customize the catalog index page within a `PageBlueprint` in the new frontend system.
- [`482ceed`](https://github.com/backstage/backstage/commit/482ceed): Migrated from `assertError` to `toError` for error handling.
- [`744f904`](https://github.com/backstage/backstage/commit/744f904): Fixed the catalog table briefly showing an empty loading state when changing filters. The table now keeps displaying stale results until new data arrives.
- [`c193ef1`](https://github.com/backstage/backstage/commit/c193ef1): Added Kind field to the About Card. Tags moved before Type and Lifecycle, Kind placed after them. A new `aboutCard.kindField.label` translation key was added.
- [`e5af44c`](https://github.com/backstage/backstage/commit/e5af44c): Replaced deprecated `humanizeEntityRef` usage with the Catalog Presentation API.

### `@backstage/plugin-gateway-backend` (1.1.3 → [1.1.6](../../changelogs/@backstage/plugin-gateway-backend.md#116))

#### 1.1.4

##### Patch Changes

- [`79453c0`](https://github.com/backstage/backstage/commit/79453c0): Updated dependency `wait-for-expect` to `^4.0.0`.

### `@backstage/plugin-search` (1.7.0 → [1.7.5](../../changelogs/@backstage/plugin-search.md#175))

#### 1.7.5

##### Patch Changes

- [`e0889a3`](https://github.com/backstage/backstage/commit/e0889a3): chore(deps): bump `qs` from 6.15.1 to 6.15.2

#### 1.7.4

##### Patch Changes

- [`44d77e9`](https://github.com/backstage/backstage/commit/44d77e9): Removed separate nav item extensions. Sidebar entries are now provided via `title` and `icon` on each plugin's page extension.
- [`cad156e`](https://github.com/backstage/backstage/commit/cad156e): Replaced old config schema values from existing extensions and blueprints.
- [`085133f`](https://github.com/backstage/backstage/commit/085133f): The `zod` dependency has been bumped from `^3.25.76 || ^4.0.0` to `^4.0.0`, since `configSchema` requires the full Zod v4 package for JSON Schema support.

#### 1.7.1

##### Patch Changes

- [`34aebcc`](https://github.com/backstage/backstage/commit/34aebcc): Fixed the `SearchModal` leaving the page in a broken state by not restoring body overflow and aria-hidden attributes when closing.

### `@backstage/plugin-search-backend` (2.1.0 → [2.1.3](../../changelogs/@backstage/plugin-search-backend.md#213))

#### 2.1.3

##### Patch Changes

- [`e0889a3`](https://github.com/backstage/backstage/commit/e0889a3): chore(deps): bump `qs` from 6.15.1 to 6.15.2

#### 2.1.2

##### Patch Changes

- [`303954b`](https://github.com/backstage/backstage/commit/303954b): Added action for search backend to query search engine using the actions registry
- [`0c5e41f`](https://github.com/backstage/backstage/commit/0c5e41f): Removed unused dependencies that had no imports in source code.

### `@backstage/plugin-search-backend-module-elasticsearch` (1.8.1 → [1.8.4](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#184))

#### 1.8.3

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

### `@backstage/plugin-search-backend-node` (1.4.2 → [1.4.5](../../changelogs/@backstage/plugin-search-backend-node.md#145))

#### 1.4.4

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.

#### 1.4.3

##### Patch Changes

- [`482ceed`](https://github.com/backstage/backstage/commit/482ceed): Migrated from `assertError` to `toError` for error handling.

### `@backstage/plugin-search-react` (1.11.0 → [1.11.5](../../changelogs/@backstage/plugin-search-react.md#1115))

#### 1.11.5

##### Patch Changes

- [`e0889a3`](https://github.com/backstage/backstage/commit/e0889a3): chore(deps): bump `qs` from 6.15.1 to 6.15.2

#### 1.11.4

##### Patch Changes

- [`e9b78e9`](https://github.com/backstage/backstage/commit/e9b78e9): Removed the `uuid` dependency and replaced usage with the built-in `crypto.randomUUID()`.
- [`cad156e`](https://github.com/backstage/backstage/commit/cad156e): Replaced old config schema values from existing extensions and blueprints.
- [`085133f`](https://github.com/backstage/backstage/commit/085133f): The `zod` dependency has been bumped from `^3.25.76 || ^4.0.0` to `^4.0.0`, since `configSchema` requires the full Zod v4 package for JSON Schema support.

### `@backstage/plugin-techdocs` (1.17.2 → [1.17.7](../../changelogs/@backstage/plugin-techdocs.md#1177))

#### 1.17.7

##### Patch Changes

- [`460c597`](https://github.com/backstage/backstage/commit/460c597): Added missing i18n support for TechDocs plugin components including:

  - Search components (placeholder text, no results message)
  - Table components (column headers, pagination, toolbar, actions, empty states)
  - Home page components (support button, page wrapper title/subtitle)
  - Reader components (build logs, not found errors, state indicators, settings)
  - Error messages and navigation labels

  Also exported `techdocsTranslationRef` from the alpha entrypoint for external use.

#### 1.17.6

##### Patch Changes

- [`8d1e093`](https://github.com/backstage/backstage/commit/8d1e093): Made the TechDocs sidebar positioning at tablet breakpoints configurable via CSS custom properties, allowing apps with custom sidebar widths to override the defaults. The available properties are `--techdocs-sidebar-closed-offset-pinned`, `--techdocs-sidebar-closed-offset-collapsed`, and `--techdocs-sidebar-open-translate`.
- [`f635139`](https://github.com/backstage/backstage/commit/f635139): Limited `@remixicon/react` dependency to versions below 4.9.0 due to a license change in that release.
- [`44d77e9`](https://github.com/backstage/backstage/commit/44d77e9): Removed separate nav item extensions. Sidebar entries are now provided via `title` and `icon` on each plugin's page extension.
- [`cad156e`](https://github.com/backstage/backstage/commit/cad156e): Replaced old config schema values from existing extensions and blueprints.
- [`085133f`](https://github.com/backstage/backstage/commit/085133f): The `zod` dependency has been bumped from `^3.25.76 || ^4.0.0` to `^4.0.0`, since `configSchema` requires the full Zod v4 package for JSON Schema support.

#### 1.17.3

##### Patch Changes

- [`dc3cc87`](https://github.com/backstage/backstage/commit/dc3cc87): Migrated the TechDocs alpha plugin pages to use BUI components. The index page and reader page now use BUI `Header` and `Container` instead of legacy `Page`/`Content`/`ContentHeader` wrappers. Added a `SupportButton` as a plugin header action. Changed plugin title to "Documentation" and icon to `RiArticleLine`.
- [`e5af44c`](https://github.com/backstage/backstage/commit/e5af44c): Replaced deprecated `humanizeEntityRef` usage with the Catalog Presentation API.

### `@backstage/plugin-techdocs-module-addons-contrib` (1.1.34 → [1.1.37](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1137))

#### 1.1.37

##### Patch Changes

- [`9095f69`](https://github.com/backstage/backstage/commit/9095f69): Added a default export to the `/alpha` entrypoint that bundles all contributed TechDocs addon modules using `createFrontendFeatureLoader`. This allows the package to be loaded as a single feature in setups that discover frontend modules through their default export, such as dynamic plugin loaders.

### `@backstage/plugin-techdocs-react` (1.3.9 → [1.3.12](../../changelogs/@backstage/plugin-techdocs-react.md#1312))

#### 1.3.11

##### Patch Changes

- [`0c5e41f`](https://github.com/backstage/backstage/commit/0c5e41f): Removed unused dependencies that had no imports in source code.

## Excluded dependency updates

- `@backstage/cli-defaults` (0.1.0 → [0.1.3](../../changelogs/@backstage/cli-defaults.md#013))
- `@backstage/codemods` (0.1.55 → [0.1.57](../../changelogs/@backstage/codemods.md#0157))
- `@backstage/config` (1.3.6 → [1.3.8](../../changelogs/@backstage/config.md#138))
- `@backstage/dev-utils` (1.1.21 → [1.1.24](../../changelogs/@backstage/dev-utils.md#1124))
- `@backstage/frontend-dev-utils` (0.1.0 → [0.1.3](../../changelogs/@backstage/frontend-dev-utils.md#013))
- `@backstage/integration-react` (1.2.16 → [1.2.19](../../changelogs/@backstage/integration-react.md#1219))
- `@backstage/plugin-app-node` (0.1.43 → [0.1.46](../../changelogs/@backstage/plugin-app-node.md#0146))
- `@backstage/plugin-app-react` (0.2.1 → [0.2.4](../../changelogs/@backstage/plugin-app-react.md#024))
- `@backstage/plugin-auth-backend-module-atlassian-provider` (0.4.13 → [0.4.16](../../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#0416))
- `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.4.14 → [0.4.17](../../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#0417))
- `@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.2.18 → [0.2.21](../../changelogs/@backstage/plugin-auth-backend-module-azure-easyauth-provider.md#0221))
- `@backstage/plugin-auth-backend-module-bitbucket-provider` (0.3.13 → [0.3.16](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-provider.md#0316))
- `@backstage/plugin-auth-backend-module-bitbucket-server-provider` (0.2.13 → [0.2.16](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-server-provider.md#0216))
- `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.4.13 → [0.4.16](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#0416))
- `@backstage/plugin-auth-backend-module-github-provider` (0.5.1 → [0.5.4](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#054))
- `@backstage/plugin-auth-backend-module-gitlab-provider` (0.4.1 → [0.4.4](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#044))
- `@backstage/plugin-auth-backend-module-google-provider` (0.3.13 → [0.3.16](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#0316))
- `@backstage/plugin-auth-backend-module-guest-provider` (0.2.17 → [0.2.20](../../changelogs/@backstage/plugin-auth-backend-module-guest-provider.md#0220))
- `@backstage/plugin-auth-backend-module-microsoft-provider` (0.3.13 → [0.3.16](../../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#0316))
- `@backstage/plugin-auth-backend-module-oauth2-provider` (0.4.13 → [0.4.16](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#0416))
- `@backstage/plugin-auth-backend-module-okta-provider` (0.2.13 → [0.2.16](../../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#0216))
- `@backstage/plugin-auth-backend-module-onelogin-provider` (0.3.13 → [0.3.16](../../changelogs/@backstage/plugin-auth-backend-module-onelogin-provider.md#0316))
- `@backstage/plugin-auth-backend-module-openshift-provider` (0.1.5 → [0.1.8](../../changelogs/@backstage/plugin-auth-backend-module-openshift-provider.md#018))
- `@backstage/plugin-auth-backend-module-pinniped-provider` (0.3.12 → [0.3.15](../../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#0315))
- `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.5.12 → [0.5.15](../../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#0515))
- `@backstage/plugin-auth-react` (0.1.25 → [0.1.28](../../changelogs/@backstage/plugin-auth-react.md#0128))
- `@backstage/plugin-bitbucket-cloud-common` (0.3.8 → [0.3.11](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#0311))
- `@backstage/plugin-catalog-backend-module-gcp` (0.3.17 → [0.3.20](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#0320))
- `@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.19 → [0.2.22](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab-org.md#0222))
- `@backstage/plugin-catalog-backend-module-logs` (0.1.20 → [0.1.23](../../changelogs/@backstage/plugin-catalog-backend-module-logs.md#0123))
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.2.18 → [0.2.21](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#0221))
- `@backstage/plugin-catalog-common` (1.1.8 → [1.1.10](../../changelogs/@backstage/plugin-catalog-common.md#1110))
- `@backstage/plugin-config-schema` (0.1.78 → [0.1.81](../../changelogs/@backstage/plugin-config-schema.md#0181))
- `@backstage/plugin-devtools-common` (0.1.23 → [0.1.25](../../changelogs/@backstage/plugin-devtools-common.md#0125))
- `@backstage/plugin-devtools-react` (0.2.0 → [0.2.3](../../changelogs/@backstage/plugin-devtools-react.md#023))
- `@backstage/plugin-events-backend-module-aws-sqs` (0.4.20 → [0.4.23](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#0423))
- `@backstage/plugin-events-backend-module-azure` (0.2.29 → [0.2.32](../../changelogs/@backstage/plugin-events-backend-module-azure.md#0232))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.29 → [0.2.32](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0232))
- `@backstage/plugin-events-backend-module-bitbucket-server` (0.1.10 → [0.1.13](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-server.md#0113))
- `@backstage/plugin-events-backend-module-gerrit` (0.2.29 → [0.2.32](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0232))
- `@backstage/plugin-events-backend-module-github` (0.4.10 → [0.4.13](../../changelogs/@backstage/plugin-events-backend-module-github.md#0413))
- `@backstage/plugin-events-backend-module-gitlab` (0.3.10 → [0.3.13](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#0313))
- `@backstage/plugin-events-backend-module-kafka` (0.3.2 → [0.3.5](../../changelogs/@backstage/plugin-events-backend-module-kafka.md#035))
- `@backstage/plugin-events-backend-test-utils` (0.1.53 → [0.1.56](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0156))
- `@backstage/plugin-events-node` (0.4.20 → [0.4.23](../../changelogs/@backstage/plugin-events-node.md#0423))
- `@backstage/plugin-home-react` (0.1.36 → [0.1.39](../../changelogs/@backstage/plugin-home-react.md#0139))
- `@backstage/plugin-kubernetes-cluster` (0.0.35 → [0.0.38](../../changelogs/@backstage/plugin-kubernetes-cluster.md#0038))
- `@backstage/plugin-mui-to-bui` (0.2.5 → [0.2.8](../../changelogs/@backstage/plugin-mui-to-bui.md#028))
- `@backstage/plugin-permission-backend-module-allow-all-policy` (0.2.17 → [0.2.20](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#0220))
- `@backstage/plugin-proxy-backend` (0.6.11 → [0.6.14](../../changelogs/@backstage/plugin-proxy-backend.md#0614))
- `@backstage/plugin-proxy-node` (0.1.13 → [0.1.16](../../changelogs/@backstage/plugin-proxy-node.md#0116))
- `@backstage/plugin-scaffolder-backend-module-azure` (0.2.19 → [0.2.22](../../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#0222))
- `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.19 → [0.3.22](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#0322))
- `@backstage/plugin-scaffolder-backend-module-gcp` (0.2.19 → [0.2.22](../../changelogs/@backstage/plugin-scaffolder-backend-module-gcp.md#0222))
- `@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.19 → [0.2.22](../../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#0222))
- `@backstage/plugin-scaffolder-backend-module-gitea` (0.2.19 → [0.2.22](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#0222))
- `@backstage/plugin-scaffolder-backend-module-notifications` (0.1.20 → [0.1.23](../../changelogs/@backstage/plugin-scaffolder-backend-module-notifications.md#0123))
- `@backstage/plugin-scaffolder-backend-module-sentry` (0.3.2 → [0.3.5](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#035))
- `@backstage/plugin-scaffolder-node-test-utils` (0.3.9 → [0.3.12](../../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#0312))
- `@backstage/plugin-search-backend-module-catalog` (0.3.13 → [0.3.16](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#0316))
- `@backstage/plugin-search-backend-module-explore` (0.3.12 → [0.3.15](../../changelogs/@backstage/plugin-search-backend-module-explore.md#0315))
- `@backstage/plugin-search-common` (1.2.22 → [1.2.24](../../changelogs/@backstage/plugin-search-common.md#1224))
- `@backstage/plugin-signals-react` (0.0.20 → [0.0.23](../../changelogs/@backstage/plugin-signals-react.md#0023))
- `@backstage/plugin-techdocs-addons-test-utils` (2.0.3 → [2.0.6](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#206))
- `@backstage/test-utils` (1.7.16 → [1.7.19](../../changelogs/@backstage/test-utils.md#1719))
