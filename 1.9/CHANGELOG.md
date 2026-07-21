# RHDH Release 1.9 changelog

Changes between Backstage 1.42.5 (RHDH 1.8) and Backstage 1.45.3 (RHDH 1.9) — 3 added, 0 removed, 177 upgraded, 10 unchanged packages.

## Summary

- [Newly added packages](#newly-added-packages): 3 packages
- [Breaking changes](#breaking-changes): 10 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 15 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 2 packages
- [0.x patch version bumps](#0x-patch-version-bumps): 67 packages
- [Other minor version bumps](#other-minor-version-bumps): 18 packages
- [Other patch version bumps](#other-patch-version-bumps): 12 packages
- [Excluded dependency updates](#excluded-dependency-updates): 53 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/plugin-auth` (new, 0.1.2)](#backstageplugin-auth-new-012)
  - [`@backstage/plugin-auth-backend-module-openshift-provider` (new, 0.1.2)](#backstageplugin-auth-backend-module-openshift-provider-new-012)
  - [`@backstage/plugin-mui-to-bui` (new, 0.2.1)](#backstageplugin-mui-to-bui-new-021)
- [Breaking changes](#breaking-changes)
  - [`@backstage/frontend-test-utils` (0.3.5 → 0.4.1)](#backstagefrontend-test-utils-035--041)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.11.8 → 0.12.0)](#backstageplugin-catalog-backend-module-ldap-0118--0120)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.7.3 → 0.8.2)](#backstageplugin-catalog-backend-module-msgraph-073--082)
  - [`@backstage/plugin-catalog-backend-module-puppetdb` (0.2.13 → 0.2.16)](#backstageplugin-catalog-backend-module-puppetdb-0213--0216)
  - [`@backstage/plugin-catalog-react` (1.20.1 → 1.21.3)](#backstageplugin-catalog-react-1201--1213)
  - [`@backstage/plugin-scaffolder-backend` (2.2.0 → 3.0.1)](#backstageplugin-scaffolder-backend-220--301)
  - [`@backstage/plugin-scaffolder-node` (0.11.0 → 0.12.1)](#backstageplugin-scaffolder-node-0110--0121)
  - [`@backstage/plugin-techdocs-module-addons-contrib` (1.1.27 → 1.1.30)](#backstageplugin-techdocs-module-addons-contrib-1127--1130)
  - [`@backstage/theme` (0.6.8 → 0.7.0)](#backstagetheme-068--070)
  - [`@backstage/ui` (0.7.0 → 0.9.1)](#backstageui-070--091)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/backend-defaults` (0.12.0 → 0.13.1)](#backstagebackend-defaults-0120--0131)
  - [`@backstage/core-components` (0.17.5 → 0.18.3)](#backstagecore-components-0175--0183)
  - [`@backstage/eslint-plugin` (0.1.11 → 0.2.0)](#backstageeslint-plugin-0111--020)
  - [`@backstage/frontend-app-api` (0.12.0 → 0.13.2)](#backstagefrontend-app-api-0120--0132)
  - [`@backstage/frontend-plugin-api` (0.11.0 → 0.13.1)](#backstagefrontend-plugin-api-0110--0131)
  - [`@backstage/plugin-api-docs` (0.12.10 → 0.13.1)](#backstageplugin-api-docs-01210--0131)
  - [`@backstage/plugin-app` (0.2.0 → 0.3.2)](#backstageplugin-app-020--032)
  - [`@backstage/plugin-catalog-backend-module-github` (0.10.2 → 0.11.2)](#backstageplugin-catalog-backend-module-github-0102--0112)
  - [`@backstage/plugin-catalog-graph` (0.4.22 → 0.5.3)](#backstageplugin-catalog-graph-0422--053)
  - [`@backstage/plugin-notifications-backend` (0.5.9 → 0.6.0)](#backstageplugin-notifications-backend-059--060)
  - [`@backstage/plugin-notifications-backend-module-slack` (0.1.4 → 0.2.1)](#backstageplugin-notifications-backend-module-slack-014--021)
  - [`@backstage/plugin-notifications-common` (0.1.0 → 0.2.0)](#backstageplugin-notifications-common-010--020)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.8.2 → 0.9.2)](#backstageplugin-scaffolder-backend-module-github-082--092)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.9.4 → 0.10.0)](#backstageplugin-scaffolder-backend-module-gitlab-094--0100)
  - [`@backstage/repo-tools` (0.15.1 → 0.16.0)](#backstagerepo-tools-0151--0160)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-kubernetes-cluster` (0.0.28 → 0.0.31)](#backstageplugin-kubernetes-cluster-0028--0031)
  - [`@backstage/plugin-signals` (0.0.22 → 0.0.25)](#backstageplugin-signals-0022--0025)
- [0.x patch version bumps](#0x-patch-version-bumps)
  - [`@backstage/backend-dynamic-feature-service` (0.7.3 → 0.7.6)](#backstagebackend-dynamic-feature-service-073--076)
  - [`@backstage/cli` (0.34.1 → 0.34.5)](#backstagecli-0341--0345)
  - [`@backstage/cli-node` (0.2.14 → 0.2.15)](#backstagecli-node-0214--0215)
  - [`@backstage/core-compat-api` (0.5.1 → 0.5.4)](#backstagecore-compat-api-051--054)
  - [`@backstage/create-app` (0.7.3 → 0.7.6)](#backstagecreate-app-073--076)
  - [`@backstage/frontend-defaults` (0.3.0 → 0.3.3)](#backstagefrontend-defaults-030--033)
  - [`@backstage/integration-aws-node` (0.1.17 → 0.1.19)](#backstageintegration-aws-node-0117--0119)
  - [`@backstage/plugin-app-backend` (0.5.5 → 0.5.8)](#backstageplugin-app-backend-055--058)
  - [`@backstage/plugin-app-visualizer` (0.1.22 → 0.1.25)](#backstageplugin-app-visualizer-0122--0125)
  - [`@backstage/plugin-auth-backend` (0.25.3 → 0.25.6)](#backstageplugin-auth-backend-0253--0256)
  - [`@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.4.6 → 0.4.9)](#backstageplugin-auth-backend-module-cloudflare-access-provider-046--049)
  - [`@backstage/plugin-auth-node` (0.6.6 → 0.6.9)](#backstageplugin-auth-node-066--069)
  - [`@backstage/plugin-auth-react` (0.1.18 → 0.1.21)](#backstageplugin-auth-react-0118--0121)
  - [`@backstage/plugin-bitbucket-cloud-common` (0.3.1 → 0.3.4)](#backstageplugin-bitbucket-cloud-common-031--034)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.4.14 → 0.4.17)](#backstageplugin-catalog-backend-module-aws-0414--0417)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.3.8 → 0.3.11)](#backstageplugin-catalog-backend-module-azure-038--0311)
  - [`@backstage/plugin-catalog-backend-module-backstage-openapi` (0.5.5 → 0.5.8)](#backstageplugin-catalog-backend-module-backstage-openapi-055--058)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.5.2 → 0.5.5)](#backstageplugin-catalog-backend-module-bitbucket-cloud-052--055)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.5.2 → 0.5.5)](#backstageplugin-catalog-backend-module-bitbucket-server-052--055)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (0.3.5 → 0.3.8)](#backstageplugin-catalog-backend-module-gerrit-035--038)
  - [`@backstage/plugin-catalog-backend-module-github-org` (0.3.13 → 0.3.16)](#backstageplugin-catalog-backend-module-github-org-0313--0316)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.7.2 → 0.7.5)](#backstageplugin-catalog-backend-module-gitlab-072--075)
  - [`@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.12 → 0.2.15)](#backstageplugin-catalog-backend-module-gitlab-org-0212--0215)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.7.3 → 0.7.6)](#backstageplugin-catalog-backend-module-incremental-ingestion-073--076)
  - [`@backstage/plugin-catalog-backend-module-openapi` (0.2.13 → 0.2.16)](#backstageplugin-catalog-backend-module-openapi-0213--0216)
  - [`@backstage/plugin-catalog-backend-module-unprocessed` (0.6.3 → 0.6.6)](#backstageplugin-catalog-backend-module-unprocessed-063--066)
  - [`@backstage/plugin-catalog-import` (0.13.4 → 0.13.7)](#backstageplugin-catalog-import-0134--0137)
  - [`@backstage/plugin-catalog-unprocessed-entities` (0.2.20 → 0.2.23)](#backstageplugin-catalog-unprocessed-entities-0220--0223)
  - [`@backstage/plugin-devtools-backend` (0.5.8 → 0.5.11)](#backstageplugin-devtools-backend-058--0511)
  - [`@backstage/plugin-devtools-common` (0.1.17 → 0.1.19)](#backstageplugin-devtools-common-0117--0119)
  - [`@backstage/plugin-events-backend` (0.5.5 → 0.5.8)](#backstageplugin-events-backend-055--058)
  - [`@backstage/plugin-events-backend-module-aws-sqs` (0.4.14 → 0.4.17)](#backstageplugin-events-backend-module-aws-sqs-0414--0417)
  - [`@backstage/plugin-events-backend-module-kafka` (0.1.2 → 0.1.5)](#backstageplugin-events-backend-module-kafka-012--015)
  - [`@backstage/plugin-events-node` (0.4.14 → 0.4.17)](#backstageplugin-events-node-0414--0417)
  - [`@backstage/plugin-home` (0.8.11 → 0.8.14)](#backstageplugin-home-0811--0814)
  - [`@backstage/plugin-kubernetes` (0.12.10 → 0.12.13)](#backstageplugin-kubernetes-01210--01213)
  - [`@backstage/plugin-kubernetes-backend` (0.20.1 → 0.20.4)](#backstageplugin-kubernetes-backend-0201--0204)
  - [`@backstage/plugin-kubernetes-common` (0.9.6 → 0.9.8)](#backstageplugin-kubernetes-common-096--098)
  - [`@backstage/plugin-kubernetes-node` (0.3.3 → 0.3.6)](#backstageplugin-kubernetes-node-033--036)
  - [`@backstage/plugin-kubernetes-react` (0.5.10 → 0.5.13)](#backstageplugin-kubernetes-react-0510--0513)
  - [`@backstage/plugin-mcp-actions-backend` (0.1.2 → 0.1.5)](#backstageplugin-mcp-actions-backend-012--015)
  - [`@backstage/plugin-notifications` (0.5.8 → 0.5.11)](#backstageplugin-notifications-058--0511)
  - [`@backstage/plugin-notifications-backend-module-email` (0.3.12 → 0.3.16)](#backstageplugin-notifications-backend-module-email-0312--0316)
  - [`@backstage/plugin-notifications-node` (0.2.18 → 0.2.21)](#backstageplugin-notifications-node-0218--0221)
  - [`@backstage/plugin-org` (0.6.43 → 0.6.46)](#backstageplugin-org-0643--0646)
  - [`@backstage/plugin-permission-backend` (0.7.3 → 0.7.6)](#backstageplugin-permission-backend-073--076)
  - [`@backstage/plugin-permission-common` (0.9.1 → 0.9.3)](#backstageplugin-permission-common-091--093)
  - [`@backstage/plugin-permission-react` (0.4.36 → 0.4.38)](#backstageplugin-permission-react-0436--0438)
  - [`@backstage/plugin-scaffolder-backend-module-azure` (0.2.12 → 0.2.15)](#backstageplugin-scaffolder-backend-module-azure-0212--0215)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket` (0.3.13 → 0.3.16)](#backstageplugin-scaffolder-backend-module-bitbucket-0313--0316)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.2.12 → 0.2.15)](#backstageplugin-scaffolder-backend-module-bitbucket-cloud-0212--0215)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.12 → 0.2.15)](#backstageplugin-scaffolder-backend-module-bitbucket-server-0212--0215)
  - [`@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.12 → 0.3.15)](#backstageplugin-scaffolder-backend-module-confluence-to-markdown-0312--0315)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.14 → 0.3.17)](#backstageplugin-scaffolder-backend-module-cookiecutter-0314--0317)
  - [`@backstage/plugin-scaffolder-backend-module-gcp` (0.2.12 → 0.2.15)](#backstageplugin-scaffolder-backend-module-gcp-0212--0215)
  - [`@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.12 → 0.2.15)](#backstageplugin-scaffolder-backend-module-gerrit-0212--0215)
  - [`@backstage/plugin-scaffolder-backend-module-gitea` (0.2.12 → 0.2.15)](#backstageplugin-scaffolder-backend-module-gitea-0212--0215)
  - [`@backstage/plugin-scaffolder-backend-module-notifications` (0.1.13 → 0.1.16)](#backstageplugin-scaffolder-backend-module-notifications-0113--0116)
  - [`@backstage/plugin-scaffolder-backend-module-rails` (0.5.12 → 0.5.15)](#backstageplugin-scaffolder-backend-module-rails-0512--0515)
  - [`@backstage/plugin-scaffolder-backend-module-sentry` (0.2.12 → 0.2.15)](#backstageplugin-scaffolder-backend-module-sentry-0212--0215)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.13 → 0.4.16)](#backstageplugin-scaffolder-backend-module-yeoman-0413--0416)
  - [`@backstage/plugin-scaffolder-node-test-utils` (0.3.2 → 0.3.5)](#backstageplugin-scaffolder-node-test-utils-032--035)
  - [`@backstage/plugin-search-backend-module-explore` (0.3.6 → 0.3.9)](#backstageplugin-search-backend-module-explore-036--039)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.47 → 0.5.50)](#backstageplugin-search-backend-module-pg-0547--0550)
  - [`@backstage/plugin-signals-backend` (0.3.7 → 0.3.10)](#backstageplugin-signals-backend-037--0310)
  - [`@backstage/plugin-user-settings` (0.8.25 → 0.8.29)](#backstageplugin-user-settings-0825--0829)
  - [`@backstage/plugin-user-settings-backend` (0.3.5 → 0.3.8)](#backstageplugin-user-settings-backend-035--038)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/app-defaults` (1.6.5 → 1.7.2)](#backstageapp-defaults-165--172)
  - [`@backstage/backend-app-api` (1.2.6 → 1.3.0)](#backstagebackend-app-api-126--130)
  - [`@backstage/backend-plugin-api` (1.4.2 → 1.5.0)](#backstagebackend-plugin-api-142--150)
  - [`@backstage/backend-test-utils` (1.8.0 → 1.10.1)](#backstagebackend-test-utils-180--1101)
  - [`@backstage/catalog-client` (1.11.0 → 1.12.1)](#backstagecatalog-client-1110--1121)
  - [`@backstage/core-app-api` (1.18.0 → 1.19.2)](#backstagecore-app-api-1180--1192)
  - [`@backstage/core-plugin-api` (1.10.9 → 1.12.0)](#backstagecore-plugin-api-1109--1120)
  - [`@backstage/integration` (1.17.1 → 1.18.2)](#backstageintegration-1171--1182)
  - [`@backstage/plugin-catalog` (1.31.2 → 1.32.0)](#backstageplugin-catalog-1312--1320)
  - [`@backstage/plugin-catalog-backend` (3.0.1 → 3.2.0)](#backstageplugin-catalog-backend-301--320)
  - [`@backstage/plugin-catalog-node` (1.18.0 → 1.20.0)](#backstageplugin-catalog-node-1180--1200)
  - [`@backstage/plugin-gateway-backend` (1.0.4 → 1.1.0)](#backstageplugin-gateway-backend-104--110)
  - [`@backstage/plugin-search` (1.4.29 → 1.5.0)](#backstageplugin-search-1429--150)
  - [`@backstage/plugin-search-react` (1.9.3 → 1.10.0)](#backstageplugin-search-react-193--1100)
  - [`@backstage/plugin-techdocs` (1.14.1 → 1.16.0)](#backstageplugin-techdocs-1141--1160)
  - [`@backstage/plugin-techdocs-addons-test-utils` (1.0.52 → 1.1.2)](#backstageplugin-techdocs-addons-test-utils-1052--112)
  - [`@backstage/plugin-techdocs-backend` (2.0.5 → 2.1.2)](#backstageplugin-techdocs-backend-205--212)
  - [`@techdocs/cli` (1.9.7 → 1.10.2)](#techdocscli-197--1102)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/catalog-model` (1.7.5 → 1.7.6)](#backstagecatalog-model-175--176)
  - [`@backstage/config` (1.3.3 → 1.3.6)](#backstageconfig-133--136)
  - [`@backstage/config-loader` (1.10.2 → 1.10.6)](#backstageconfig-loader-1102--1106)
  - [`@backstage/dev-utils` (1.1.13 → 1.1.17)](#backstagedev-utils-1113--1117)
  - [`@backstage/plugin-scaffolder` (1.34.0 → 1.34.3)](#backstageplugin-scaffolder-1340--1343)
  - [`@backstage/plugin-scaffolder-react` (1.19.0 → 1.19.3)](#backstageplugin-scaffolder-react-1190--1193)
  - [`@backstage/plugin-search-backend` (2.0.5 → 2.0.8)](#backstageplugin-search-backend-205--208)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.7.5 → 1.7.8)](#backstageplugin-search-backend-module-elasticsearch-175--178)
  - [`@backstage/plugin-search-backend-node` (1.3.14 → 1.3.17)](#backstageplugin-search-backend-node-1314--1317)
  - [`@backstage/plugin-techdocs-node` (1.13.6 → 1.13.9)](#backstageplugin-techdocs-node-1136--1139)
  - [`@backstage/plugin-techdocs-react` (1.3.2 → 1.3.5)](#backstageplugin-techdocs-react-132--135)
  - [`@backstage/types` (1.2.1 → 1.2.2)](#backstagetypes-121--122)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/plugin-auth` (new, [0.1.2](../changelogs/@backstage/plugin-auth.md#012))

#### 0.1.2

##### Patch Changes

- [`1609e79`](https://github.com/backstage/backstage/commit/1609e79): Authentication content screen now uses application title.

#### 0.1.0

##### Minor Changes

- [`54ddfef`](https://github.com/backstage/backstage/commit/54ddfef): Initial publish of the `auth` frontend package

### `@backstage/plugin-auth-backend-module-openshift-provider` (new, [0.1.2](../changelogs/@backstage/plugin-auth-backend-module-openshift-provider.md#012))

#### 0.1.0

##### Minor Changes

- [`5a84253`](https://github.com/backstage/backstage/commit/5a84253): Add new `auth-backend-module-openshift-provider`. This authentication provider enables Backstage to sign in with OpenShift.

### `@backstage/plugin-mui-to-bui` (new, [0.2.1](../changelogs/@backstage/plugin-mui-to-bui.md#021))

#### 0.2.1

##### Patch Changes

- [`5c614ff`](https://github.com/backstage/backstage/commit/5c614ff): Updated BUI checkbox preview example to align with new component API.

#### 0.2.0

##### Minor Changes

- [`d5cbdba`](https://github.com/backstage/backstage/commit/d5cbdba): This is the first release of the Material UI to Backstage UI migration helper plugin. It adds a new page at `/mui-to-bui` that converts an existing MUI v5 theme into Backstage UI (BUI) CSS variables, with live preview and copy/download.

##### Patch Changes

- [`28ee81c`](https://github.com/backstage/backstage/commit/28ee81c): Fix invalid conversion for `--bui-bg` variable

## Breaking changes

### `@backstage/frontend-test-utils` (0.3.5 → [0.4.1](../changelogs/@backstage/frontend-test-utils.md#041))

#### 0.4.0

##### Minor Changes

- [`c41dd80`](https://github.com/backstage/backstage/commit/c41dd80): **BREAKING**: Removed the `extensions` option from `renderInTestApp`. If you need to pass extensions to the test app, use the new `renderTestApp` utility instead.

#### 0.3.6

##### Patch Changes

- [`6516c3d`](https://github.com/backstage/backstage/commit/6516c3d): Internal update to use and throw app errors.

### `@backstage/plugin-catalog-backend-module-ldap` (0.11.8 → [0.12.0](../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0120))

#### 0.12.0

##### Minor Changes

- [`980f240`](https://github.com/backstage/backstage/commit/980f240): Moved from `ldapjs` dependency to `ldapts`

  ### Breaking Changes

  **Type Migration**

  Custom transformers must now accept `Entry` from `ldapts` instead of `SearchEntry`
  from `ldapjs` The Entry type provides direct property access without need for
  `.object()` or `.raw()` methods.

  If you have custom user or group transformers, update the signature from:

  ```typescript
  (vendor: LdapVendor, config: UserConfig, entry: SearchEntry) =>
    Promise<UserEntity | undefined>;
  ```

  to

  ```typescript
  (vendor: LdapVendor, config: UserConfig, entry: Entry) =>
    Promise<UserEntity | undefined>;
  ```

  **Search Options**

  Updated LDAP search configuration `typesOnly: false` → `attributeValues: true`
  This inverts the boolean logic: `ldapjs` used negative form while `ldapts` uses
  positive form. Both achieve the same result: retrieving attribute values rather
  than just attribute names.

  Update LDAP search options in configuration from

  ```yaml
  options:
    typesOnly: false
  ```

  to

  ```yaml
  options:
    attributeValues: true
  ```

  **API Changes** Removed `LdapClient.searchStreaming()` method. Users should
  migrate to `LdapClient.search()` instead

  If you're using `searchStreaming` directly:

  ```typescript
  // Before
  await client.searchStreaming(dn, options, async entry => {
    // process each entry
  });

  // After
  const entries = await client.search(dn, options);
  for (const entry of entries) {
    // process each entry
  }
  ```

  > **_NOTE:_**: Both methods have always loaded all entries into memory. The
  > `searchStreaming` method was only needed internally to handle `ldapjs`'s
  > event-based API.

##### Patch Changes

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

### `@backstage/plugin-catalog-backend-module-msgraph` (0.7.3 → [0.8.2](../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#082))

#### 0.8.2

##### Patch Changes

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

#### 0.8.1

##### Patch Changes

- [`99fcf98`](https://github.com/backstage/backstage/commit/99fcf98): Removed unused dependencies

#### 0.8.0

##### Minor Changes

- [`577f0ed`](https://github.com/backstage/backstage/commit/577f0ed): **BREAKING**: Encode query filters for requests made to msgraph. If you currently have manually encoded characters in a filter, this is a breaking change and must be updated to avoid requests being double encoded.

  ```diff
  user:
  -    filter: department in('MARKETING', 'RESEARCH %26 DEVELOPMENT')
  +    filter: department in('MARKETING', 'RESEARCH & DEVELOPMENT')
  ```

##### Patch Changes

- [`7597781`](https://github.com/backstage/backstage/commit/7597781): Ensure that msgraph parent group stays same in case the group has multiple parents

### `@backstage/plugin-catalog-backend-module-puppetdb` (0.2.13 → [0.2.16](../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0216))

#### 0.2.15

##### Patch Changes

- [`99fcf98`](https://github.com/backstage/backstage/commit/99fcf98): Removed unused dependencies

#### 0.2.14

##### Patch Changes

- [`afd368e`](https://github.com/backstage/backstage/commit/afd368e): **BREAKING ALPHA**: The module has been moved from the `/alpha` export to the root of the package.

### `@backstage/plugin-catalog-react` (1.20.1 → [1.21.3](../changelogs/@backstage/plugin-catalog-react.md#1213))

#### 1.21.3

##### Patch Changes

- [`36d7582`](https://github.com/backstage/backstage/commit/36d7582): Added missing i18n
- [`2b7924b`](https://github.com/backstage/backstage/commit/2b7924b): Apply default ordering of templates
- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.
- [`904d136`](https://github.com/backstage/backstage/commit/904d136): Fixed catalog filter "all" not appearing as selected when set as the initially selected filter.

#### 1.21.2

##### Patch Changes

- [`2a3704d`](https://github.com/backstage/backstage/commit/2a3704d): Correct translation key from "type" to "owner" for owner column in entity table to ensure the right translation is loaded.
- [`ace202e`](https://github.com/backstage/backstage/commit/ace202e): Update `material-ui-popup-state` to latest available version.

#### 1.21.0

##### Minor Changes

- [`0e9ec44`](https://github.com/backstage/backstage/commit/0e9ec44): Introduced new `streamEntities` async generator method for the catalog.

  Catalog API and Catalog Service now includes a `streamEntities` method that allows for streaming entities from the catalog.
  This method is designed to handle large datasets efficiently by processing entities in a stream rather than loading them
  all into memory at once. This is useful when you need to fetch a large number of entities but do not want to use pagination
  or fetch all entities at once.

  Example usage:

  ```ts
  const pageStream = catalogClient.streamEntities({ pageSize: 100 }, { token });
  for await (const page of pageStream) {
    // Handle page of entities
    for (const entity of page) {
      console.log(entity);
    }
  }
  ```

##### Patch Changes

- [`0174799`](https://github.com/backstage/backstage/commit/0174799): Fix a potential race condition in EntityListProvider when selecting filters
- [`4316c11`](https://github.com/backstage/backstage/commit/4316c11): Catalog table columns support i18n
- [`79ff318`](https://github.com/backstage/backstage/commit/79ff318): Removed the deprecation warning when not passing an explicit type to `EntityCardBlueprint`. Omitting the type is now intended, allowing the layout to pick the default type instead, typically `content`.
- [`ad0f58d`](https://github.com/backstage/backstage/commit/ad0f58d): Support `default*` for older packages as this package is in range for breaking `/alpha` changes

### `@backstage/plugin-scaffolder-backend` (2.2.0 → [3.0.1](../changelogs/@backstage/plugin-scaffolder-backend.md#301))

#### 3.0.1

##### Patch Changes

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

#### 3.0.0

##### Major Changes

- [`9b81a90`](https://github.com/backstage/backstage/commit/9b81a90): **BREAKING** - Removing the deprecated types and interfaces, there's no replacement for these types, and hopefully not currently used as they offer no value with the plugin being on the new backend system and no way to consume them.

  Affected types: `CreateWorkerOptions`, `CurrentClaimedTask`, `DatabaseTaskStore`, `DatabaseTaskStoreOptions`, `TaskManager`, `TaskStore`, `TaskStoreCreateTaskOptions`, `TaskStoreCreateTaskResult`, `TaskStoreEmitOptions`, `TaskStoreListEventsOptions`, `TaskStoreRecoverTaskOptions`, `TaskStoreShutDownTaskOptions`, `TaskWorker` and `TemplateActionRegistry`.

##### Patch Changes

- [`f222a2e`](https://github.com/backstage/backstage/commit/f222a2e): Fixed distributed actions not being visible in the scaffolder template actions.

  Depending on the plugin startup order, some of the distributed actions were not being registered correctly,
  causing them to be invisible in the scaffolder template actions list.

#### 2.2.1

##### Patch Changes

- [`a57185f`](https://github.com/backstage/backstage/commit/a57185f): Added support for executing actions from the `ActionsRegistry` in the `scaffolder-backend`
- [`c3405db`](https://github.com/backstage/backstage/commit/c3405db): Fixed a regression that prevented uploads greater than 100KB. Uploads up to 10MB are supported again.

### `@backstage/plugin-scaffolder-node` (0.11.0 → [0.12.1](../changelogs/@backstage/plugin-scaffolder-node.md#0121))

#### 0.12.1

##### Patch Changes

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

#### 0.12.0

##### Minor Changes

- [`9b81a90`](https://github.com/backstage/backstage/commit/9b81a90): **BREAKING** - Marking optional fields as required in the `TaskBroker`, these can be fixed with a no-op `() => void` if you don't want to implement the functions.

  - `cancel`, `recoverTasks` and `retry` are the required methods on the `TaskBroker` interface.

  **NOTE**: If you're affected by this breaking change, please reach out to us in an issue as we're thinking about completely removing the `TaskBroker` extension point soon and would like to hear your use cases for the upcoming re-architecture of the `scaffolder-backend` plugin.

##### Patch Changes

- [`c8aa210`](https://github.com/backstage/backstage/commit/c8aa210): **BREAKING ALPHA**: We've moved the `scaffolderActionsExtensionPoint` from `/alpha` to the main export.

  ```tsx
  // before
  import { scaffolderActionsExtensionPoint } from '@backstage/plugin-scaffolder-node/alpha';

  // after
  import { scaffolderActionsExtensionPoint } from '@backstage/plugin-scaffolder-node';
  ```

- [`6e2bda7`](https://github.com/backstage/backstage/commit/6e2bda7): **DEPRECATION**: We're going to be working on refactoring a lot of the internals of the Scaffolder backend plugin, and with that comes a lot of deprecations and removals for public types that are making these things hard.

  If you're using these types, please reach out to us either on Discord or a GitHub issue with your use cases.

  - `SerializedTask`, `SerializedTaskEvent`, `TaskBroker`, `TaskContext`, `TaskBrokerDispatchOptions`, `TaskBrokerDispatchResult`, `TaskCompletionState`, `TaskEventType`, `TaskFilter`, `TaskFilters`, `TaskStatus` are the types that have now been marked as deprecated, and will be removed in a future release.

### `@backstage/plugin-techdocs-module-addons-contrib` (1.1.27 → [1.1.30](../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1130))

#### 1.1.30

##### Patch Changes

- [`6929480`](https://github.com/backstage/backstage/commit/6929480): ExpandableCollapse Techdocs Addon was breaking native sidebar collapse on Firefox

### `@backstage/theme` (0.6.8 → [0.7.0](../changelogs/@backstage/theme.md#070))

#### 0.7.0

##### Minor Changes

- [`865bce8`](https://github.com/backstage/backstage/commit/865bce8): **BREAKING**: Removed the built-in `CssBaseline` from `UnifiedThemeProvider`. If your Backstage instance looks broken after this update, you likely forgot to add our new Backstage UI global CSS. To do that, please import `@backstage/ui/css/styles.css` in `packages/app/src/index.tsx`:

  ```tsx
  import '@backstage/ui/css/styles.css';
  ```

  This change also removes the `noCssBaseline` prop, which became redundant.

##### Patch Changes

- [`d5cbdba`](https://github.com/backstage/backstage/commit/d5cbdba): The `UnifiedThemeProvider` now coordinates theme attributes on the document `body` in case multiple theme providers are rendered.

### `@backstage/ui` (0.7.0 → [0.9.1](../changelogs/@backstage/ui.md#091))

#### 0.9.0

##### Minor Changes

- [`539cf26`](https://github.com/backstage/backstage/commit/539cf26): **BREAKING**: Migrated Avatar component from Base UI to custom implementation with size changes:

  - Base UI-specific props are no longer supported
  - Size values have been updated:
    - New `x-small` size added (1.25rem / 20px)
    - `small` size unchanged (1.5rem / 24px)
    - `medium` size unchanged (2rem / 32px, default)
    - `large` size **changed from 3rem to 2.5rem** (40px)
    - New `x-large` size added (3rem / 48px)

  **Migration:**

  ```diff
  # Remove Base UI-specific props
  - <Avatar src="..." name="..." render={...} />
  + <Avatar src="..." name="..." />

  # Update large size usage to x-large for same visual size
  - <Avatar src="..." name="..." size="large" />
  + <Avatar src="..." name="..." size="x-large" />
  ```

  Added `purpose` prop for accessibility control (`'informative'` or `'decoration'`).

  **Affected components:** Avatar

- [`5c614ff`](https://github.com/backstage/backstage/commit/5c614ff): **BREAKING**: Migrated Checkbox component from Base UI to React Aria Components.

  API changes required:

  - `checked` → `isSelected`
  - `defaultChecked` → `defaultSelected`
  - `disabled` → `isDisabled`
  - `required` → `isRequired`
  - `label` prop removed - use `children` instead
  - CSS: `bui-CheckboxLabel` class removed
  - Data attribute: `data-checked` → `data-selected`
  - Use without label is no longer supported

  **Migration:**

  Before:

  ```tsx
  <Checkbox label="Accept terms" checked={agreed} onChange={setAgreed} />
  ```

  After:

  ```tsx
  <Checkbox isSelected={agreed} onChange={setAgreed}>
    Accept terms
  </Checkbox>
  ```

  Before:

  ```tsx
  <Checkbox label="Option" disabled />
  ```

  After:

  ```tsx
  <Checkbox isDisabled>Option</Checkbox>
  ```

  Before:

  ```tsx
  <Checkbox />
  ```

  After:

  ```tsx
  <Checkbox>
    <VisuallyHidden>Accessible label</VisuallyHidden>
  </Checkbox>
  ```

- [`134151f`](https://github.com/backstage/backstage/commit/134151f): **BREAKING**: Fixing styles on SearchField in Backstage UI after migration to CSS modules. `SearchField` has now its own set of class names. We previously used class names from `TextField` but this approach was creating some confusion so going forward in your theme you'll be able to theme `TextField` and `SearchField` separately.
- [`a67670d`](https://github.com/backstage/backstage/commit/a67670d): **BREAKING**: Removed central `componentDefinitions` object and related type utilities (`ComponentDefinitionName`, `ComponentClassNames`).

  Component definitions are primarily intended for documenting the CSS class API for theming purposes, not for programmatic use in JavaScript/TypeScript.

  **Migration:**

  If you were using component definitions or class names to build custom components, we recommend migrating to either:

  - Use Backstage UI components directly as building blocks, or
  - Duplicate the component CSS in your own stylesheets instead of relying on internal class names

- [`b78fc45`](https://github.com/backstage/backstage/commit/b78fc45): **BREAKING**: Changed className prop behavior to augment default styles instead of being ignored or overriding them.

  If you were passing custom className values to any of these components that relied on the previous behavior, you may need to adjust your styles to account for the default classes now being applied alongside your custom classes.

  **Affected components:** Menu, MenuListBox, MenuAutocomplete, MenuAutocompleteListbox, MenuItem, MenuListBoxItem, MenuSection, MenuSeparator, Switch, Skeleton, FieldLabel, Header, HeaderToolbar, HeaderPage, Tabs, TabList, Tab, TabPanel

- [`83c100e`](https://github.com/backstage/backstage/commit/83c100e): **BREAKING**: Removed `Collapsible` component. Migrate to `Accordion` or use React Aria `Disclosure`.

  **Migration:**

  **Path 1: Accordion (Opinionated Styled Component)**

  Accordion provides preset styling with a similar component structure.

  ```diff
  - import { Collapsible } from '@backstage/ui';
  + import { Accordion, AccordionTrigger, AccordionPanel } from '@backstage/ui';

  - <Collapsible.Root>
  -   <Collapsible.Trigger render={(props) => <Button {...props}>Toggle</Button>} />
  -   <Collapsible.Panel>Content</Collapsible.Panel>
  - </Collapsible.Root>

  + <Accordion>
  +   <AccordionTrigger title="Toggle" />
  +   <AccordionPanel>Content</AccordionPanel>
  + </Accordion>
  ```

  CSS classes: `.bui-CollapsibleRoot` → `.bui-Accordion`, `.bui-CollapsibleTrigger` → `.bui-AccordionTrigger` (now on heading element), `.bui-CollapsiblePanel` → `.bui-AccordionPanel`

  **Path 2: React Aria Disclosure (Full Customization)**

  For custom styling without preset styles:

  ```tsx
  import { Disclosure, Button, DisclosurePanel } from 'react-aria-components';

  <Disclosure>
    <Button slot="trigger">Toggle</Button>
    <DisclosurePanel>Content</DisclosurePanel>
  </Disclosure>;
  ```

- [`816af0f`](https://github.com/backstage/backstage/commit/816af0f): **BREAKING**: The `SelectProps` interface now accepts a generic type parameter for selection mode.

  Added searchable and multiple selection support to Select component. The component now accepts `searchable`, `selectionMode`, and `searchPlaceholder` props to enable filtering and multi-selection modes.

  **Migration:**

  If you're using `SelectProps` type directly, update from `SelectProps` to `SelectProps<'single' | 'multiple'>`. Component usage remains backward compatible.

  **Affected components:** Select

##### Patch Changes

- [`d01de00`](https://github.com/backstage/backstage/commit/d01de00): Fix broken external links in Backstage UI Header component.

  **Affected components:** Header

- [`35a3614`](https://github.com/backstage/backstage/commit/35a3614): Fixed CSS issues in Select component including popover width constraints, focus outline behavior, and overflow handling.

  **Affected components:** Select

- [`01476f0`](https://github.com/backstage/backstage/commit/01476f0): Improved visual consistency of PasswordField, SearchField, and MenuAutocomplete components.

  **Affected components:** PasswordField, SearchField, MenuAutocomplete

- [`26c6a78`](https://github.com/backstage/backstage/commit/26c6a78): Fix default text color in Backstage UI

  **Affected components:** Text

- [`deaa427`](https://github.com/backstage/backstage/commit/deaa427): Fixed Text component to prevent `truncate` prop from being spread to the underlying DOM element.

  **Affected components:** Text

- [`1059f95`](https://github.com/backstage/backstage/commit/1059f95): Improved the Link component structure in Backstage UI.

  **Affected components:** Link

- [`836b0c7`](https://github.com/backstage/backstage/commit/836b0c7): Fixed dialog backdrop appearance in dark mode.

  **Affected components:** Dialog

- [`6874094`](https://github.com/backstage/backstage/commit/6874094): Migrated CellProfile component from Base UI Avatar to Backstage UI Avatar component.

  **Affected components:** Avatar

- [`719d772`](https://github.com/backstage/backstage/commit/719d772): Avatar components in x-small and small sizes now display only one initial instead of two, improving readability at smaller dimensions.

  **Affected components:** Avatar

- [`6d35a6b`](https://github.com/backstage/backstage/commit/6d35a6b): Removed `@base-ui-components/react` dependency as all components now use React Aria Components.
- [`dac851f`](https://github.com/backstage/backstage/commit/dac851f): Fix the default font size in Backstage UI.
- [`3c0ea67`](https://github.com/backstage/backstage/commit/3c0ea67): Fix CSS layer ordering in Backstage UI to make sure component styles are loaded after tokens and base declarations.
- [`3b18d80`](https://github.com/backstage/backstage/commit/3b18d80): Fixed RadioGroup radio button ellipse distortion by preventing flex shrink and grow.

  **Affected components:** RadioGroup

- [`4eb455c`](https://github.com/backstage/backstage/commit/4eb455c): Fix font smoothing as default in Backstage UI.
- [`ff9f0c3`](https://github.com/backstage/backstage/commit/ff9f0c3): Enable tree-shaking of imports other than `*.css`.
- [`7839e7b`](https://github.com/backstage/backstage/commit/7839e7b): Added `loading` prop to Button and ButtonIcon components for displaying spinner during async operations.

  **Affected components:** Button, ButtonIcon

- [`a00fb88`](https://github.com/backstage/backstage/commit/a00fb88): Fixed Table Row component to properly support opening links in new tabs via right-click or Cmd+Click when using the `href` prop.

  **Affected components:** Table

- [`e16ece5`](https://github.com/backstage/backstage/commit/e16ece5): Set the color-scheme property depending on theme
- [`1ef3ca4`](https://github.com/backstage/backstage/commit/1ef3ca4): Added new VisuallyHidden component for hiding content visually while keeping it accessible to screen readers.

  **Affected components:** VisuallyHidden

- [`00bfb83`](https://github.com/backstage/backstage/commit/00bfb83): Fix default font weight and font family in Backstage UI.

#### 0.8.0

##### Minor Changes

- [`9acc1d6`](https://github.com/backstage/backstage/commit/9acc1d6): **BREAKING**: Added a new `PasswordField` component. As part of this change, the `password` and `search` types have been removed from `TextField`.
- [`b0d11b5`](https://github.com/backstage/backstage/commit/b0d11b5): **BREAKING** Restructure Backstage UI component styling to use CSS Modules instead of pure CSS. We don't expect this to be an issue in practice but it is important to call out that all styles are now loaded through CSS modules with generated class names. We are still providing fixed class names for all components to allow anyone to style their Backstage instance.
- [`0c53517`](https://github.com/backstage/backstage/commit/0c53517): **BREAKING** The ScrollArea component has been removed from Backstage UI because it did not meet our accessibility standards.
- [`7b319c5`](https://github.com/backstage/backstage/commit/7b319c5): **BREAKING** Remove Icon component in Backstage UI. This component was creating issue for tree-shaking. It is recommended to use icons from @remixicon/react until we found a better alternative in Backstage UI.

##### Patch Changes

- [`2591b42`](https://github.com/backstage/backstage/commit/2591b42): Adding a new Dialog component to Backstage UI.
- [`827340f`](https://github.com/backstage/backstage/commit/827340f): remove default selection of tab
- [`5dc17cc`](https://github.com/backstage/backstage/commit/5dc17cc): Fix margin utility classes in Backstage UI.
- [`85faee0`](https://github.com/backstage/backstage/commit/85faee0): Fix scroll jumping when opening menu in Backstage UI.
- [`3c921c5`](https://github.com/backstage/backstage/commit/3c921c5): Making href mandatory in tabs that are part of a Header component
- [`df7d2cf`](https://github.com/backstage/backstage/commit/df7d2cf): Update react-aria-components to version 1.13.0
- [`507ee55`](https://github.com/backstage/backstage/commit/507ee55): Fix table sorting icon position in Backstage UI.
- [`8b7c3c9`](https://github.com/backstage/backstage/commit/8b7c3c9): Add new `virtualized`, `maxWidth` and `maxHeight` props to `Menu`, `MenuListBox`, `MenuAutocomplete` and `MenuAutocompleteListBox` to allow for virtalization of long lists inside menus.
- [`b940062`](https://github.com/backstage/backstage/commit/b940062): Added support for data attributes in `<Box />`, `<Container />`, `<Flex />`, and `<Grid />` components, ensuring they are correctly applied to the rendered elements.
- [`206c801`](https://github.com/backstage/backstage/commit/206c801): Cleaning up Backstage UI props definitions as well as removing ScrollArea in Card to improve accessibility.
- [`5c21e45`](https://github.com/backstage/backstage/commit/5c21e45): Add react router for internal routing for ButtonLinks
- [`865bce8`](https://github.com/backstage/backstage/commit/865bce8): Added a background color default on the body
- [`af4d9b4`](https://github.com/backstage/backstage/commit/af4d9b4): We are restructuring our CSS to have a better layer structure.
- [`9a47125`](https://github.com/backstage/backstage/commit/9a47125): Improved SearchField component flex layout and animations. Fixed SearchField behavior in Header components by switching from width-based transitions to flex-basis transitions for better responsive behavior. Added new Storybook stories to test SearchField integration with Header component.
- [`9781815`](https://github.com/backstage/backstage/commit/9781815): Remove auto selection of tabs for tabs that all have href defined
- [`4adbb03`](https://github.com/backstage/backstage/commit/4adbb03): Avoid overriding onChange when spreading props
- [`f6dff5b`](https://github.com/backstage/backstage/commit/f6dff5b): Using react router for internal links in the Menu component

#### 0.7.1

##### Patch Changes

- [`7307930`](https://github.com/backstage/backstage/commit/7307930): Add missing class for flex: baseline
- [`89da341`](https://github.com/backstage/backstage/commit/89da341): Fix Select component to properly attach aria-label and aria-labelledby props to the rendered element for improved accessibility.
- [`0ffa4c7`](https://github.com/backstage/backstage/commit/0ffa4c7): Removed the need to mock `window.matchMedia` in tests, falling back to default breakpoint values instead.

## 0.x minor version bumps

### `@backstage/backend-defaults` (0.12.0 → [0.13.1](../changelogs/@backstage/backend-defaults.md#0131))

#### 0.13.1

##### Patch Changes

- [`9bcfa77`](https://github.com/backstage/backstage/commit/9bcfa77): Adjusted the log line wording of task worker starting
- [`91ab2eb`](https://github.com/backstage/backstage/commit/91ab2eb): Fix a bug in the Gitlab URL reader where `search` did not handle multiple globs
- [`fa255f5`](https://github.com/backstage/backstage/commit/fa255f5): Support for Bitbucket Cloud's API token was added as `appPassword` is deprecated (no new creation from September 9, 2025) and will be removed on June 9, 2026.

  API token usage example:

  ```yaml
  integrations:
    bitbucketCloud:
      - username: user@domain.com
        token: my-token
  ```

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.
- [`b2f6a5a`](https://github.com/backstage/backstage/commit/b2f6a5a): Fix #31348 issue where BitbucketUrlReader ignored provided token and instead always used integration credentials

#### 0.13.0

##### Minor Changes

- [`2d3e2b2`](https://github.com/backstage/backstage/commit/2d3e2b2): implement support for direct url for AzureBlobStorageUrlReader search function
- [`8b91238`](https://github.com/backstage/backstage/commit/8b91238): Adds support for configuring server-level HTTP options through the
  `app-config.yaml` file under the `backend.server` key. Supported options
  include `headersTimeout`, `keepAliveTimeout`, `requestTimeout`, `timeout`,
  `maxHeadersCount`, and `maxRequestsPerSocket`.

  These are passed directly to the underlying Node.js HTTP server.
  If omitted, Node.js defaults are used.

- [`8495b18`](https://github.com/backstage/backstage/commit/8495b18): Add a new `externalTokenHandlersServiceRef` to allow custom external token validations

#### 0.12.1

##### Patch Changes

- [`33bd4d0`](https://github.com/backstage/backstage/commit/33bd4d0): Deduplicate discovered features discovered with discoveryFeatureLoader
- [`4eda590`](https://github.com/backstage/backstage/commit/4eda590): Fixed cache namespace and key prefix separator configuration to properly use configured values instead of hardcoded plugin ID. The cache manager now correctly combines the configured namespace with plugin IDs using the configured separator for Redis and Valkey. Memcache and memory store continue to use plugin ID as namespace.
- [`f244e61`](https://github.com/backstage/backstage/commit/f244e61): Add `backend.logger` config options to configure the `RootLoggerService`.

  Read more about the new configuration options in the
  [Root Logger Service](https://backstage.io/docs/backend-system/core-services/root-logger/)
  documentation.

### `@backstage/core-components` (0.17.5 → [0.18.3](../changelogs/@backstage/core-components.md#0183))

#### 0.18.3

##### Patch Changes

- [`1c7e1ce`](https://github.com/backstage/backstage/commit/1c7e1ce): - Revert `viewbox` back to old values.
  - Added `fullScreen` prop to `EntityCatalogGraphCard`
- [`96ad674`](https://github.com/backstage/backstage/commit/96ad674): Line numbers in LogViewer will not be selectable in UI anymore
- [`b2bef92`](https://github.com/backstage/backstage/commit/b2bef92): Convert all enums to erasable-syntax compliant patterns
- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

#### 0.18.2

##### Patch Changes

- [`d493126`](https://github.com/backstage/backstage/commit/d493126): Swap base token for semantic token in ItemCardHeader to ensure readability in light mode.
- [`431130c`](https://github.com/backstage/backstage/commit/431130c): Added `renderEdge` prop to `<DependencyGraph />` component in `@backstage/core-components` to allow custom rendering of graph edges.
- [`6981ae6`](https://github.com/backstage/backstage/commit/6981ae6): Fixed DependencyGraph `svg` size not adapting to the container size
- [`95935fb`](https://github.com/backstage/backstage/commit/95935fb): Fixed dependency graph automatically scrolling forever

#### 0.18.0

##### Minor Changes

- [`b9a87f4`](https://github.com/backstage/backstage/commit/b9a87f4): Add optional `distance` property to `DependencyEdge` to reflect the distance to a root.

##### Patch Changes

- [`1ad3d94`](https://github.com/backstage/backstage/commit/1ad3d94): Dependency graph can now be opened in full screen mode
- [`e409bec`](https://github.com/backstage/backstage/commit/e409bec): Fixes for rendering initials in the avatar component.
- [`ae7d426`](https://github.com/backstage/backstage/commit/ae7d426): update about card links style for pretty display with other language

### `@backstage/eslint-plugin` (0.1.11 → [0.2.0](../changelogs/@backstage/eslint-plugin.md#020))

#### 0.2.0

##### Minor Changes

- [`926389b`](https://github.com/backstage/backstage/commit/926389b): Added `@backstage/no-ui-css-imports-in-non-frontend` rule, which ensures that CSS from `@backstage/ui` is not imported outside of the frontend app.

#### 0.1.12

##### Patch Changes

- [`5e98e61`](https://github.com/backstage/backstage/commit/5e98e61): Minor doc updates
- [`a1dae71`](https://github.com/backstage/backstage/commit/a1dae71): Allow frontend plugin to import from another frontend plugin with same plugin id.

  This prevents the ESLint rule from incorrectly flagging these imports in the new frontend system
  where plugin override requires cross-plugin imports.

### `@backstage/frontend-app-api` (0.12.0 → [0.13.2](../changelogs/@backstage/frontend-app-api.md#0132))

#### 0.13.2

##### Patch Changes

- [`4d03f08`](https://github.com/backstage/backstage/commit/4d03f08): Internal refactor of route reference implementations with minor updates to the `toString` implementations.
- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

#### 0.13.0

##### Minor Changes

- [`6516c3d`](https://github.com/backstage/backstage/commit/6516c3d): The `createSpecializedApp` no longer throws when encountering many common errors when starting up the app. It will instead return them through the `errors` property so that they can be handled more gracefully in the app.

### `@backstage/frontend-plugin-api` (0.11.0 → [0.13.1](../changelogs/@backstage/frontend-plugin-api.md#0131))

#### 0.13.0

##### Minor Changes

- [`7d87b4f`](https://github.com/backstage/backstage/commit/7d87b4f): Renamed `ExtensionDefinition` to `OverridableExtensionDefinition` and introduced a slimmer `ExtensionDefinition` type that does not include override methods. The overridable type is generally used as an output type, while plain `ExtensionDefinition`s are used for input. This reduces type conflicts across different of `@backstage/frontend-plugin-api`, improving long-term compatibility.

##### Patch Changes

- [`4d03f08`](https://github.com/backstage/backstage/commit/4d03f08): Internal refactor of route reference implementations with minor updates to the `toString` implementations.
- [`7c6a66d`](https://github.com/backstage/backstage/commit/7c6a66d): Added support for plugin-relative `attachTo` declarations for extension definitions. This allows for the creation of extension and extension blueprints that attach to other extensions of a particular `kind` in the same plugin, rather than needing to provide the exact extension ID. This is particularly useful when wanting to provide extension blueprints with a built-in hierarchy where the extensions created from one blueprint attach to extensions created from the other blueprint, for example:

  ```ts
  // kind: 'tabbed-page'
  const parentPage = TabbedPageBlueprint.make({
    params: {....}
  })
  // attachTo: { kind: 'tabbed-page', input: 'tabs' }
  const child1 = TabContentBlueprint.make({
    name: 'tab1',
    params: {....}
  })
  ```

- [`878c251`](https://github.com/backstage/backstage/commit/878c251): Updated to `ExtensionInput` to make all type parameters optional.
- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

#### 0.12.1

##### Patch Changes

- [`8ed53eb`](https://github.com/backstage/backstage/commit/8ed53eb): Added `coreExtensionData.title`, especially useful for creating extensible layout with tabbed pages, but available for use for other cases too.

#### 0.12.0

##### Minor Changes

- [`894d514`](https://github.com/backstage/backstage/commit/894d514): Make `openshiftApiRef` available to the new frontend system.

##### Patch Changes

- [`2fb8b04`](https://github.com/backstage/backstage/commit/2fb8b04): Improved the types of `createFrontendPlugin` and `createFrontendModule` so that errors due to incompatible options are indicated more clearly.

### `@backstage/plugin-api-docs` (0.12.10 → [0.13.1](../changelogs/@backstage/plugin-api-docs.md#0131))

#### 0.13.1

##### Patch Changes

- [`7c281a5`](https://github.com/backstage/backstage/commit/7c281a5): Add i18n support for Raw tab title and an error message

#### 0.13.0

##### Minor Changes

- [`b8a381e`](https://github.com/backstage/backstage/commit/b8a381e): Remove explicit dependency on `isomorphic-form-data`.

  This explicit dependency was added to address [an issue](https://github.com/swagger-api/swagger-ui/issues/7436) in the
  dependency `swagger-ui-react`. That [issue has since been resolved](https://github.com/swagger-api/swagger-ui/issues/7436#issuecomment-889792304),
  and `isomorphic-form-data` no longer needs to be declared.

  Additionally, this changeset updates the `swagger-ui-react` dependency to version `5.19.0` or higher, which includes
  [compatibility](https://github.com/swagger-api/swagger-ui?tab=readme-ov-file#compatibility) with the latest versions of
  the OpenAPI specification.

### `@backstage/plugin-app` (0.2.0 → [0.3.2](../changelogs/@backstage/plugin-app.md#032))

#### 0.3.1

##### Patch Changes

- [`ae1dad0`](https://github.com/backstage/backstage/commit/ae1dad0): Fixed an issue that caused the `NotFound` page to not render correctly when a Page was mounted at `/`.

#### 0.3.0

##### Minor Changes

- [`99790db`](https://github.com/backstage/backstage/commit/99790db): Add implementation of OpenShift authentication provider.

### `@backstage/plugin-catalog-backend-module-github` (0.10.2 → [0.11.2](../changelogs/@backstage/plugin-catalog-backend-module-github.md#0112))

#### 0.11.2

##### Patch Changes

- [`999d1c1`](https://github.com/backstage/backstage/commit/999d1c1): Added configurable `pageSizes` for GitHub GraphQL API queries to prevent `RESOURCE_LIMITS_EXCEEDED` errors with organizations with large number of repositories. Please see the [GitHub Discovery documentation](https://backstage.io/docs/integrations/github/discovery#configuration) for new configuration options.

#### 0.11.1

##### Patch Changes

- [`99fcf98`](https://github.com/backstage/backstage/commit/99fcf98): Removed unused dependencies

#### 0.11.0

##### Minor Changes

- [`03bdc68`](https://github.com/backstage/backstage/commit/03bdc68): Added support for discovery by app

### `@backstage/plugin-catalog-graph` (0.4.22 → [0.5.3](../changelogs/@backstage/plugin-catalog-graph.md#053))

#### 0.5.3

##### Patch Changes

- [`a2d7ae7`](https://github.com/backstage/backstage/commit/a2d7ae7): Ensure the catalog graph entity card respects the height prop so the visualization scales down properly on wide screens.
- [`1c7e1ce`](https://github.com/backstage/backstage/commit/1c7e1ce): - Revert `viewbox` back to old values.
  - Added `fullScreen` prop to `EntityCatalogGraphCard`
- [`b2bef92`](https://github.com/backstage/backstage/commit/b2bef92): Convert all enums to erasable-syntax compliant patterns

#### 0.5.2

##### Patch Changes

- [`87b5e6e`](https://github.com/backstage/backstage/commit/87b5e6e): Add missing API implementation for catalog graph plugin in NFS apps.
- [`431130c`](https://github.com/backstage/backstage/commit/431130c): Added `renderEdge` prop to `<DependencyGraph />` component in `@backstage/core-components` to allow custom rendering of graph edges.
- [`6981ae6`](https://github.com/backstage/backstage/commit/6981ae6): Fixed DependencyGraph `svg` size not adapting to the container size

#### 0.5.0

##### Minor Changes

- [`ae6b606`](https://github.com/backstage/backstage/commit/ae6b606): Support custom relations by using an API to define known relations and which to show by default
  Fixes "simplified" bug (#30121) which caused graphs not to be simplified

### `@backstage/plugin-notifications-backend` (0.5.9 → [0.6.0](../changelogs/@backstage/plugin-notifications-backend.md#060))

#### 0.6.0

##### Minor Changes

- [`87e597c`](https://github.com/backstage/backstage/commit/87e597c): Adds support for default configuration for an entire notification channel.
  This setting will also be inherited down to origins and topics while still respecting the users individual choices.

  This will be handy if you want to use a "opt-in" strategy.

##### Patch Changes

- [`15fb764`](https://github.com/backstage/backstage/commit/15fb764): Show default settings for notifications even before receiving first notification.

  Previously, it was not possible for the users to see or modify their notification settings until they had received at
  least one notification from specific origin or topic.
  This update ensures that default settings are displayed from the outset,
  allowing users to customize their preferences immediately.

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

#### 0.5.11

##### Patch Changes

- [`f5e0963`](https://github.com/backstage/backstage/commit/f5e0963): Removed unused dependencies
- [`3b8e156`](https://github.com/backstage/backstage/commit/3b8e156): Fixed exclude entity reference not working in notification sending

#### 0.5.10

##### Patch Changes

- [`a95cebd`](https://github.com/backstage/backstage/commit/a95cebd): Internal refactoring for better type support
- [`7e7ed57`](https://github.com/backstage/backstage/commit/7e7ed57): A new extension point was added that can be used to modify how the users receiving notifications
  are resolved. The interface passed to the extension point should only return complete user entity references
  based on the notification target references and the excluded entity references. Note that the inputs are lists
  of entity references that can be any entity kind, not just user entities.

  Using this extension point will override the default behavior of resolving users with the
  `DefaultNotificationRecipientResolver`.

### `@backstage/plugin-notifications-backend-module-slack` (0.1.4 → [0.2.1](../changelogs/@backstage/plugin-notifications-backend-module-slack.md#021))

#### 0.2.1

##### Patch Changes

- [`d959bec`](https://github.com/backstage/backstage/commit/d959bec): When an error message is logged due to inability to send a message with the Slack SDK, include the Slack Channel ID in the message to aid debugging.

#### 0.2.0

##### Minor Changes

- [`3d09bb2`](https://github.com/backstage/backstage/commit/3d09bb2): Adds username as optional config in order to send Slack notifications with a specific username in the case when using one Slack App for more than just Backstage.

#### 0.1.5

##### Patch Changes

- [`a95cebd`](https://github.com/backstage/backstage/commit/a95cebd): Internal refactoring for better type support

### `@backstage/plugin-notifications-common` (0.1.0 → [0.2.0](../changelogs/@backstage/plugin-notifications-common.md#020))

#### 0.2.0

##### Minor Changes

- [`87e597c`](https://github.com/backstage/backstage/commit/87e597c): Adds support for default configuration for an entire notification channel.
  This setting will also be inherited down to origins and topics while still respecting the users individual choices.

  This will be handy if you want to use a "opt-in" strategy.

### `@backstage/plugin-scaffolder-backend-module-github` (0.8.2 → [0.9.2](../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#092))

#### 0.9.1

##### Patch Changes

- [`c8aa210`](https://github.com/backstage/backstage/commit/c8aa210): Updating import for the `scaffolderActionsExtensionPoint` to be the main export

#### 0.9.0

##### Minor Changes

- [`f0f06b4`](https://github.com/backstage/backstage/commit/f0f06b4): Adding a new scaffolder action `github:issues:create` following the reference of `github:issues:label` with `dryRun` testing possibility

  It can be used like this

  ```
    steps:
      - id: create-simple-issue
        name: Create Simple Issue
        action: github:issues:create
        input:
          repoUrl: ${{ parameters.repoUrl }}
          title: "[${{ parameters.projectName }}] Simple Bug Report"
          body: |
            ## Bug Description
            This is a simple bug report created by the scaffolder template.

            ### Steps to Reproduce
            1. Run the application
            2. Navigate to the main page
            3. Click on the problematic button

            ### Expected Behavior
            The button should work correctly.

            ### Actual Behavior
            The button does not respond to clicks.
    output:
      links:
        - title: Simple Issue
          url: ${{ steps['create-simple-issue'].output.issueUrl }}
  ```

##### Patch Changes

- [`aee107b`](https://github.com/backstage/backstage/commit/aee107b): Add `auto_init` option to `github:repo:create` action to create repository with an initial commit containing a README.md file

  This initial commit is created by GitHub itself and the commit is signed, so the repository will not be empty after creation.

  ```diff
    - action: github:repo:create
      id: init-new-repo
      input:
        repoUrl: 'github.com?repo=repo&owner=owner'
        description: This is the description
        visibility: private
  +     autoInit: true

  ```

- [`6393b78`](https://github.com/backstage/backstage/commit/6393b78): Add block creations field in github branch protection scaffolder actions

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.9.4 → [0.10.0](../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#0100))

#### 0.10.0

##### Minor Changes

- [`ff96d7e`](https://github.com/backstage/backstage/commit/ff96d7e): fix scaffolder action createDeployToken to allow usage of oauth tokens

##### Patch Changes

- [`b2bef92`](https://github.com/backstage/backstage/commit/b2bef92): Convert all enums to erasable-syntax compliant patterns

#### 0.9.6

##### Patch Changes

- [`c8aa210`](https://github.com/backstage/backstage/commit/c8aa210): Updating import for the `scaffolderActionsExtensionPoint` to be the main export
- [`f5e0963`](https://github.com/backstage/backstage/commit/f5e0963): Removed unused dependencies

#### 0.9.5

##### Patch Changes

- [`a84ddea`](https://github.com/backstage/backstage/commit/a84ddea): The log message now indicates that the pipeline trigger token was deleted and not pipeline itself.

### `@backstage/repo-tools` (0.15.1 → [0.16.0](../changelogs/@backstage/repo-tools.md#0160))

#### 0.16.0

##### Minor Changes

- [`11c61f2`](https://github.com/backstage/backstage/commit/11c61f2): The `package-docs` command will now automatically use a `typedoc.json` file if one exists at the root of your project.

##### Patch Changes

- [`8f56eae`](https://github.com/backstage/backstage/commit/8f56eae): Updated knip-reports to detect dependencies in dev/alpha pattern
- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

#### 0.15.3

##### Patch Changes

- [`1359279`](https://github.com/backstage/backstage/commit/1359279): Fixed an issue with the OpenAPI generated client and server where import/export statements were duplicated.

#### 0.15.2

##### Patch Changes

- [`133ac7a`](https://github.com/backstage/backstage/commit/133ac7a): Fixed knip-reports command failing when workspace path contains spaces and process termination issues by replacing `execFile` with `spawn` and removing `shell` option.

## 0.0.x patch version bumps

### `@backstage/plugin-kubernetes-cluster` (0.0.28 → [0.0.31](../changelogs/@backstage/plugin-kubernetes-cluster.md#0031))

#### 0.0.30

##### Patch Changes

- [`99fcf98`](https://github.com/backstage/backstage/commit/99fcf98): Removed unused dependencies

### `@backstage/plugin-signals` (0.0.22 → [0.0.25](../changelogs/@backstage/plugin-signals.md#0025))

#### 0.0.25

##### Patch Changes

- [`71c22f3`](https://github.com/backstage/backstage/commit/71c22f3): Removed/moved unused dependencies
- [`f0f006e`](https://github.com/backstage/backstage/commit/f0f006e): Fixes a bug where the `SignalClient` would try to subscribe to the same channel twice after an error, instead of just once.
- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

#### 0.0.24

##### Patch Changes

- [`7b41d9d`](https://github.com/backstage/backstage/commit/7b41d9d): Remove `app-root-element:signals/signals-display` which was not doing anything useful

## 0.x patch version bumps

### `@backstage/backend-dynamic-feature-service` (0.7.3 → [0.7.6](../changelogs/@backstage/backend-dynamic-feature-service.md#076))

#### 0.7.6

##### Patch Changes

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

### `@backstage/cli` (0.34.1 → [0.34.5](../changelogs/@backstage/cli.md#0345))

#### 0.34.5

##### Patch Changes

- [`fc7cbfc`](https://github.com/backstage/backstage/commit/fc7cbfc): The templates executed with the `yarn new` command now supports templating filenames.
- [`da19cb5`](https://github.com/backstage/backstage/commit/da19cb5): Fix inconsistent behavior in the `new` command for the `@internal` scope: it now consistently defaults to the `backstage-plugin-` infix whether the `--scope` option is not set or it's set to `internal`.
- [`fc7cbfc`](https://github.com/backstage/backstage/commit/fc7cbfc): Added a template for the `yarn new` command to create an catalog entity provider. To add this template to an explicit list in the root `package.json`, use `@backstage/cli/templates/catalog-provider-module`.
- [`b2bef92`](https://github.com/backstage/backstage/commit/b2bef92): Convert all enums to erasable-syntax compliant patterns
- [`279279c`](https://github.com/backstage/backstage/commit/279279c): Fixes an issue where using the `backstage-cli new --scope` command with a scope that already includes the `@` symbol (e.g., `@backstage-community`) would result in a double `@@` prefix in the generated package name, causing invalid `package.json` files.
- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

#### 0.34.4

##### Patch Changes

- [`f2cf564`](https://github.com/backstage/backstage/commit/f2cf564): Removed the script transform cache from the default Jest configuration. The script cache provided a moderate performance boost, but it is incompatible with Jest 30.
- [`33faad2`](https://github.com/backstage/backstage/commit/33faad2): Allow using custom manifest location in the yarn plugin and version bump.

  The Backstage yarn plugin and version bump allows two new environment variables to configure custom manifest location:

  - `BACKSTAGE_VERSIONS_BASE_URL`: The base URL for fetching the Backstage version
    manifest. Defaults to `https://versions.backstage.io/v1/releases/VERSION/manifest.json`.
    Useful for running the plugin in environment without direct access to the internet,
    for example by using a mirror of the versions API or a proxy.
    Note that the environment variable is just the host name, and the path is appended by
    the plugin. If you are using the yarn plugin, bump version command will also try
    to fetch the new version of the yarn plugin from the same base URL (defaults to
    `https://versions.backstage.io/v1/releases/RELEASE/yarn-plugin`)
  - `BACKSTAGE_MANIFEST_FILE`: Path to a local manifest file. If set, the plugin
    will not attempt to fetch the manifest from the network. Useful for running
    the plugin in environment without internet access and without mirror of the
    versions API.

- [`6ebc1ea`](https://github.com/backstage/backstage/commit/6ebc1ea): Fixed module federation config by only setting `import: false` on shared libraries for remote.
- [`ab96bb7`](https://github.com/backstage/backstage/commit/ab96bb7): Added a new `--entrypoint` option to the `package start` command, which allows you to specify a custom entry directory/file for development applications. This is particularly useful when maintaining separate dev apps for different versions of your plugin (e.g., stable and alpha).

  **Example usage:**

  Consider the following plugin dev folder structure:

  ```
  dev/
    index.tsx
    alpha/
      index.ts
  ```

  - The default `yarn package start` command uses the `dev/` folder as the entry point and executes `dev/index.tsx` file;
  - Running `yarn package start --entrypoint dev/alpha` will instead use `dev/alpha/` as the entry point and execute `dev/alpha/index.ts` file.

- [`024645e`](https://github.com/backstage/backstage/commit/024645e): Remove unused @octokit modules from cli package

  - @octokit/graphql
  - @octokit/graphql-schema
  - @octokit/oauth-app

- [`d14ef24`](https://github.com/backstage/backstage/commit/d14ef24): Added automatic detection and support for the Backstage Yarn plugin when generating new packages with `yarn new`. When the plugin is installed, new packages will automatically use `backstage:^` ranges for `@backstage/*` dependencies.

#### 0.34.2

##### Patch Changes

- [`e6f45dc`](https://github.com/backstage/backstage/commit/e6f45dc): Updated the WebPack configuration to use `contenthash`. This fixes an issue were builds would sometimes generate output files with the same name but different content across builds, leading to breakages when loading the frontend app.
- [`fffd434`](https://github.com/backstage/backstage/commit/fffd434): Disallow import fallback of critical shared dependencies in module federation.
- [`080f252`](https://github.com/backstage/backstage/commit/080f252): Fixed the `new-frontend-plugin` template that was incorrectly passing `id` instead of `pluginId` to `createFrontendPlugin` and unnecessarily importing `React`.
- [`e0db9b8`](https://github.com/backstage/backstage/commit/e0db9b8): Modify the `backstage.json` also for custom patterns if it extends the default pattern.

  Examples:

  - `@backstage/*` (default pattern)
  - `@{backstage,backstage-community}/*`
  - `@{extra1,backstage,extra2}/*`

- [`275bda8`](https://github.com/backstage/backstage/commit/275bda8): Fixed an issue that could cause conflicts of detected modules in workspaces with multiple apps.
- [`e1adce4`](https://github.com/backstage/backstage/commit/e1adce4): Updated the backend plugin template to use a new pattern for the `TodoListService` that reduces boilerplate.

### `@backstage/cli-node` (0.2.14 → [0.2.15](../changelogs/@backstage/cli-node.md#0215))

#### 0.2.15

##### Patch Changes

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

### `@backstage/core-compat-api` (0.5.1 → [0.5.4](../changelogs/@backstage/core-compat-api.md#054))

#### 0.5.4

##### Patch Changes

- [`4d03f08`](https://github.com/backstage/backstage/commit/4d03f08): Internal refactor of route reference implementations with minor updates to the `toString` implementations.

#### 0.5.2

##### Patch Changes

- [`dc01d6f`](https://github.com/backstage/backstage/commit/dc01d6f): Fix for `compatWrapper` creating many wrapping `Providers` when they should not

### `@backstage/create-app` (0.7.3 → [0.7.6](../changelogs/@backstage/create-app.md#076))

#### 0.7.6

##### Patch Changes

- [`2c1fe37`](https://github.com/backstage/backstage/commit/2c1fe37): Bumped create-app version.
- [`20fae88`](https://github.com/backstage/backstage/commit/20fae88): Bumped create-app version.
- [`9f939a6`](https://github.com/backstage/backstage/commit/9f939a6): Added `@backstage/plugin-app-visualizer` to the app in the `--next` template.
- [`fc7cbfc`](https://github.com/backstage/backstage/commit/fc7cbfc): Added the new `@backstage/cli/templates/catalog-provider-module` template to the explicit template configuration for the `next-app` template.

#### 0.7.5

##### Patch Changes

- [`c73bfa4`](https://github.com/backstage/backstage/commit/c73bfa4): Bumped create-app version.
- [`c2c6054`](https://github.com/backstage/backstage/commit/c2c6054): Bumped create-app version.
- [`ffb5b44`](https://github.com/backstage/backstage/commit/ffb5b44): Bumped create-app version.
- [`316d077`](https://github.com/backstage/backstage/commit/316d077): Bumped create-app version.
- [`7dcedff`](https://github.com/backstage/backstage/commit/7dcedff): Bump `better-sqlite3` to the latest version

#### 0.7.4

##### Patch Changes

- [`b2d9fc1`](https://github.com/backstage/backstage/commit/b2d9fc1): Creates a plugin that redirects from the Home page to the Catalog index page to avoid seeing a not found page error when starting the app.
- [`020d484`](https://github.com/backstage/backstage/commit/020d484): Bumped create-app version.
- [`02dbe8e`](https://github.com/backstage/backstage/commit/02dbe8e): Add missing dependency to `@backstage/cli`, `@backstage/core-plugin-api` and `@backstage/integration-react`

### `@backstage/frontend-defaults` (0.3.0 → [0.3.3](../changelogs/@backstage/frontend-defaults.md#033))

#### 0.3.1

##### Patch Changes

- [`6516c3d`](https://github.com/backstage/backstage/commit/6516c3d): The default app now leverages the new error reporting functionality from `@backstage/frontend-app-api`. If there are critical errors during startup, an error screen that shows a summary of all errors will now be shown, rather than leaving the screen blank. Other errors will be logged as warnings in the console.

### `@backstage/integration-aws-node` (0.1.17 → [0.1.19](../changelogs/@backstage/integration-aws-node.md#0119))

#### 0.1.19

##### Patch Changes

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

### `@backstage/plugin-app-backend` (0.5.5 → [0.5.8](../changelogs/@backstage/plugin-app-backend.md#058))

#### 0.5.6

##### Patch Changes

- [`afd368e`](https://github.com/backstage/backstage/commit/afd368e): Internal update to not expose the old `createRouter`.

### `@backstage/plugin-app-visualizer` (0.1.22 → [0.1.25](../changelogs/@backstage/plugin-app-visualizer.md#0125))

#### 0.1.25

##### Patch Changes

- [`e81b3f0`](https://github.com/backstage/backstage/commit/e81b3f0): Improve tree visualizer to use a horizontal layout and fill the content space.
- [`722e2df`](https://github.com/backstage/backstage/commit/722e2df): Migrated to use `@backstage/ui`.

#### 0.1.24

##### Patch Changes

- [`4406144`](https://github.com/backstage/backstage/commit/4406144): Ensure that the text rendering has react keys for all elements

### `@backstage/plugin-auth-backend` (0.25.3 → [0.25.6](../changelogs/@backstage/plugin-auth-backend.md#0256))

#### 0.25.6

##### Patch Changes

- [`a9315d0`](https://github.com/backstage/backstage/commit/a9315d0): Change internal `state` column to `text` to support state of over 255 characters
- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.
- [`51ff7d8`](https://github.com/backstage/backstage/commit/51ff7d8): Allow configuring dynamic client registration token expiration with config `auth.experimentalDynamicClientRegistration.tokenExpiration`.

  Maximum expiration for the DCR token is 24 hours. Default expiration is 1 hour.

#### 0.25.4

##### Patch Changes

- [`1d47bf3`](https://github.com/backstage/backstage/commit/1d47bf3): Implementing Dynamic Client Registration with the OIDC server. You can enable this by setting `auth.experimentalDynamicClientRegistration.enabled` in `app-config.yaml`. This is highly experimental, but feedback welcome.
- [`54ddfef`](https://github.com/backstage/backstage/commit/54ddfef): Updating plugin metadata

### `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.4.6 → [0.4.9](../changelogs/@backstage/plugin-auth-backend-module-cloudflare-access-provider.md#049))

#### 0.4.9

##### Patch Changes

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

### `@backstage/plugin-auth-node` (0.6.6 → [0.6.9](../changelogs/@backstage/plugin-auth-node.md#069))

#### 0.6.9

##### Patch Changes

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

#### 0.6.7

##### Patch Changes

- [`54ddfef`](https://github.com/backstage/backstage/commit/54ddfef): Updating plugin metadata
- [`3aff9e1`](https://github.com/backstage/backstage/commit/3aff9e1): Changes OAuth cookies from domain-scoped to host-only by avoid setting the domain attribute in the default cookie configurer.

### `@backstage/plugin-auth-react` (0.1.18 → [0.1.21](../changelogs/@backstage/plugin-auth-react.md#0121))

#### 0.1.19

##### Patch Changes

- [`54ddfef`](https://github.com/backstage/backstage/commit/54ddfef): Updating plugin metadata

### `@backstage/plugin-bitbucket-cloud-common` (0.3.1 → [0.3.4](../changelogs/@backstage/plugin-bitbucket-cloud-common.md#034))

#### 0.3.4

##### Patch Changes

- [`fa255f5`](https://github.com/backstage/backstage/commit/fa255f5): Support for Bitbucket Cloud's API token was added as `appPassword` is deprecated (no new creation from September 9, 2025) and will be removed on June 9, 2026.

  API token usage example:

  ```yaml
  integrations:
    bitbucketCloud:
      - username: user@domain.com
        token: my-token
  ```

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

#### 0.3.3

##### Patch Changes

- [`2aded73`](https://github.com/backstage/backstage/commit/2aded73): Allow for passing a `pagelen` parameter to configure the `pagelength` property of the `BitbucketCloudEntityProvider` `searchCode` pagination to resolve [bug](https://jira.atlassian.com/browse/BCLOUD-23644) pertaining to duplicate results being returned.

### `@backstage/plugin-catalog-backend-module-aws` (0.4.14 → [0.4.17](../changelogs/@backstage/plugin-catalog-backend-module-aws.md#0417))

#### 0.4.17

##### Patch Changes

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

#### 0.4.16

##### Patch Changes

- [`99fcf98`](https://github.com/backstage/backstage/commit/99fcf98): Removed unused dependencies

### `@backstage/plugin-catalog-backend-module-azure` (0.3.8 → [0.3.11](../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0311))

#### 0.3.11

##### Patch Changes

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

#### 0.3.10

##### Patch Changes

- [`84443f1`](https://github.com/backstage/backstage/commit/84443f1): Adds config definitions for Azure Blob Storage.
- [`99fcf98`](https://github.com/backstage/backstage/commit/99fcf98): Removed unused dependencies

### `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.5.5 → [0.5.8](../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#058))

#### 0.5.8

##### Patch Changes

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.5.2 → [0.5.5](../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#055))

#### 0.5.4

##### Patch Changes

- [`2aded73`](https://github.com/backstage/backstage/commit/2aded73): Allow for passing a `pagelen` parameter to configure the `pagelength` property of the `BitbucketCloudEntityProvider` `searchCode` pagination to resolve [bug](https://jira.atlassian.com/browse/BCLOUD-23644) pertaining to duplicate results being returned.
- [`99fcf98`](https://github.com/backstage/backstage/commit/99fcf98): Removed unused dependencies

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.5.2 → [0.5.5](../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#055))

#### 0.5.4

##### Patch Changes

- [`99fcf98`](https://github.com/backstage/backstage/commit/99fcf98): Removed unused dependencies

### `@backstage/plugin-catalog-backend-module-gerrit` (0.3.5 → [0.3.8](../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#038))

#### 0.3.7

##### Patch Changes

- [`99fcf98`](https://github.com/backstage/backstage/commit/99fcf98): Removed unused dependencies

### `@backstage/plugin-catalog-backend-module-github-org` (0.3.13 → [0.3.16](../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#0316))

#### 0.3.16

##### Patch Changes

- [`999d1c1`](https://github.com/backstage/backstage/commit/999d1c1): Added configurable `pageSizes` for GitHub GraphQL API queries to prevent `RESOURCE_LIMITS_EXCEEDED` errors with organizations with large number of teams and members. Please see the [GitHub Org Data documentation](https://backstage.io/docs/integrations/github/org#configuration-details) for new configuration options.

#### 0.3.15

##### Patch Changes

- [`99fcf98`](https://github.com/backstage/backstage/commit/99fcf98): Removed unused dependencies

### `@backstage/plugin-catalog-backend-module-gitlab` (0.7.2 → [0.7.5](../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#075))

#### 0.7.4

##### Patch Changes

- [`0443119`](https://github.com/backstage/backstage/commit/0443119): Fixed an issue in `GitlabDiscoveryEntityProvider` where entity fetching could fail for projects with special characters or that had been renamed or moved.
- [`99fcf98`](https://github.com/backstage/backstage/commit/99fcf98): Removed unused dependencies

#### 0.7.3

##### Patch Changes

- [`ea80e76`](https://github.com/backstage/backstage/commit/ea80e76): When possible, requests a more limited set of results from the Gitlab projects API, which can reduce the amount of network traffic required to sync with Gitlab.

### `@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.12 → [0.2.15](../changelogs/@backstage/plugin-catalog-backend-module-gitlab-org.md#0215))

#### 0.2.14

##### Patch Changes

- [`99fcf98`](https://github.com/backstage/backstage/commit/99fcf98): Removed unused dependencies

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.7.3 → [0.7.6](../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#076))

#### 0.7.6

##### Patch Changes

- [`70745c5`](https://github.com/backstage/backstage/commit/70745c5): Correctly handle entity removal computation when DB count query returns string

### `@backstage/plugin-catalog-backend-module-openapi` (0.2.13 → [0.2.16](../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0216))

#### 0.2.16

##### Patch Changes

- [`a5bcb2a`](https://github.com/backstage/backstage/commit/a5bcb2a): fix wrong dereferencing for AsyncApi 3 documents

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.6.3 → [0.6.6](../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#066))

#### 0.6.6

##### Patch Changes

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

### `@backstage/plugin-catalog-import` (0.13.4 → [0.13.7](../changelogs/@backstage/plugin-catalog-import.md#0137))

#### 0.13.7

##### Patch Changes

- [`f987bfd`](https://github.com/backstage/backstage/commit/f987bfd): Fixed missing `catalog.entity.create` permission authorization in the default page extension.
- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

### `@backstage/plugin-catalog-unprocessed-entities` (0.2.20 → [0.2.23](../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#0223))

#### 0.2.23

##### Patch Changes

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

### `@backstage/plugin-devtools-backend` (0.5.8 → [0.5.11](../changelogs/@backstage/plugin-devtools-backend.md#0511))

#### 0.5.11

##### Patch Changes

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

### `@backstage/plugin-devtools-common` (0.1.17 → [0.1.19](../changelogs/@backstage/plugin-devtools-common.md#0119))

#### 0.1.19

##### Patch Changes

- [`b2bef92`](https://github.com/backstage/backstage/commit/b2bef92): Convert all enums to erasable-syntax compliant patterns

### `@backstage/plugin-events-backend` (0.5.5 → [0.5.8](../changelogs/@backstage/plugin-events-backend.md#058))

#### 0.5.8

##### Patch Changes

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

#### 0.5.6

##### Patch Changes

- [`0efcc97`](https://github.com/backstage/backstage/commit/0efcc97): Updated generated schemas

### `@backstage/plugin-events-backend-module-aws-sqs` (0.4.14 → [0.4.17](../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#0417))

#### 0.4.17

##### Patch Changes

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

### `@backstage/plugin-events-backend-module-kafka` (0.1.2 → [0.1.5](../changelogs/@backstage/plugin-events-backend-module-kafka.md#015))

#### 0.1.5

##### Patch Changes

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

### `@backstage/plugin-events-node` (0.4.14 → [0.4.17](../changelogs/@backstage/plugin-events-node.md#0417))

#### 0.4.17

##### Patch Changes

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

#### 0.4.15

##### Patch Changes

- [`0efcc97`](https://github.com/backstage/backstage/commit/0efcc97): Updated generated schemas

### `@backstage/plugin-home` (0.8.11 → [0.8.14](../changelogs/@backstage/plugin-home.md#0814))

#### 0.8.14

##### Patch Changes

- [`2ac5d29`](https://github.com/backstage/backstage/commit/2ac5d29): Allow customization of `VisitList` by adding optional `enrichVisit`, `transformPathname`, `canSave` functions to `VisitsStorageApi`, along with `VisitDisplayProvider` for colors, labels

#### 0.8.13

##### Patch Changes

- [`e7d59d3`](https://github.com/backstage/backstage/commit/e7d59d3): fix(home): correct `clearAll` logic to properly handle `deletable` flag

#### 0.8.12

##### Patch Changes

- [`929c55a`](https://github.com/backstage/backstage/commit/929c55a): Fixed race condition in CustomHomepageGrid by waiting for storage to load before rendering custom layout to prevent
  rendering of the default content.

### `@backstage/plugin-kubernetes` (0.12.10 → [0.12.13](../changelogs/@backstage/plugin-kubernetes.md#01213))

#### 0.12.12

##### Patch Changes

- [`99fcf98`](https://github.com/backstage/backstage/commit/99fcf98): Removed unused dependencies

### `@backstage/plugin-kubernetes-backend` (0.20.1 → [0.20.4](../changelogs/@backstage/plugin-kubernetes-backend.md#0204))

#### 0.20.4

##### Patch Changes

- [`71c22f3`](https://github.com/backstage/backstage/commit/71c22f3): Removed/moved unused dependencies
- [`1906d37`](https://github.com/backstage/backstage/commit/1906d37): Updated dependency `@kubernetes/client-node` to `1.4.0`.
- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

#### 0.20.2

##### Patch Changes

- [`dd7b6d2`](https://github.com/backstage/backstage/commit/dd7b6d2): Fix a bug where `getDefault` in the `kubernetesFetcherExtensionPoint` had the wrong `this` value
- [`80cf8c9`](https://github.com/backstage/backstage/commit/80cf8c9): Fix issue with default objects not being loaded properly

### `@backstage/plugin-kubernetes-common` (0.9.6 → [0.9.8](../changelogs/@backstage/plugin-kubernetes-common.md#098))

#### 0.9.8

##### Patch Changes

- [`1906d37`](https://github.com/backstage/backstage/commit/1906d37): Updated dependency `@kubernetes/client-node` to `1.4.0`.

#### 0.9.7

##### Patch Changes

- [`bdd7f95`](https://github.com/backstage/backstage/commit/bdd7f95): Make SERVICEACCOUNT_CA_PATH public so it can be imported by external modules.

### `@backstage/plugin-kubernetes-node` (0.3.3 → [0.3.6](../changelogs/@backstage/plugin-kubernetes-node.md#036))

#### 0.3.6

##### Patch Changes

- [`1906d37`](https://github.com/backstage/backstage/commit/1906d37): Updated dependency `@kubernetes/client-node` to `1.4.0`.
- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

### `@backstage/plugin-kubernetes-react` (0.5.10 → [0.5.13](../changelogs/@backstage/plugin-kubernetes-react.md#0513))

#### 0.5.13

##### Patch Changes

- [`1906d37`](https://github.com/backstage/backstage/commit/1906d37): Updated dependency `@kubernetes/client-node` to `1.4.0`.
- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

#### 0.5.12

##### Patch Changes

- [`ac405f2`](https://github.com/backstage/backstage/commit/ac405f2): The configmaps added to be rendered
- [`f7a4144`](https://github.com/backstage/backstage/commit/f7a4144): Fixes calculation of CPU utilization in the PodTable

### `@backstage/plugin-mcp-actions-backend` (0.1.2 → [0.1.5](../changelogs/@backstage/plugin-mcp-actions-backend.md#015))

#### 0.1.5

##### Patch Changes

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

#### 0.1.3

##### Patch Changes

- [`1d47bf3`](https://github.com/backstage/backstage/commit/1d47bf3): Proxy `/.well-known/oauth-authorization-server` to `/.well-known/openid-configuration` on `auth-backend` when `auth.experimentalDynamicClientRegistration.enabled` is enabled.
- [`7f2a4a0`](https://github.com/backstage/backstage/commit/7f2a4a0): Updating docs
- [`d08b0c9`](https://github.com/backstage/backstage/commit/d08b0c9): The MCP backend will now convert known Backstage errors into textual responses with `isError: true`.
  The error message can be useful for an LLM to understand and maybe give back to the user.
  Previously all errors where thrown out to `@modelcontextprotocol/sdk` which causes a generic 500.

### `@backstage/plugin-notifications` (0.5.8 → [0.5.11](../changelogs/@backstage/plugin-notifications.md#0511))

#### 0.5.10

##### Patch Changes

- [`f5e0963`](https://github.com/backstage/backstage/commit/f5e0963): Removed unused dependencies

#### 0.5.9

##### Patch Changes

- [`4815b12`](https://github.com/backstage/backstage/commit/4815b12): Fixed missing app context when rendering the notifications view

### `@backstage/plugin-notifications-backend-module-email` (0.3.12 → [0.3.16](../changelogs/@backstage/plugin-notifications-backend-module-email.md#0316))

#### 0.3.16

##### Patch Changes

- [`22a5362`](https://github.com/backstage/backstage/commit/22a5362): Updated `AWS SES` client to version 2 to support `nodemailer` version 7.
- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

#### 0.3.14

##### Patch Changes

- [`b8cf31a`](https://github.com/backstage/backstage/commit/b8cf31a): chore(deps): bump `nodemailer` from 6.9.16 to 7.0.7
- [`f5e0963`](https://github.com/backstage/backstage/commit/f5e0963): Removed unused dependencies

### `@backstage/plugin-notifications-node` (0.2.18 → [0.2.21](../changelogs/@backstage/plugin-notifications-node.md#0221))

#### 0.2.21

##### Patch Changes

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

#### 0.2.19

##### Patch Changes

- [`7e7ed57`](https://github.com/backstage/backstage/commit/7e7ed57): A new extension point was added that can be used to modify how the users receiving notifications
  are resolved. The interface passed to the extension point should only return complete user entity references
  based on the notification target references and the excluded entity references. Note that the inputs are lists
  of entity references that can be any entity kind, not just user entities.

  Using this extension point will override the default behavior of resolving users with the
  `DefaultNotificationRecipientResolver`.

### `@backstage/plugin-org` (0.6.43 → [0.6.46](../changelogs/@backstage/plugin-org.md#0646))

#### 0.6.46

##### Patch Changes

- [`6db9e7e`](https://github.com/backstage/backstage/commit/6db9e7e): Improved responsiveness of GroupProfileCard component

#### 0.6.45

##### Patch Changes

- [`8b7351f`](https://github.com/backstage/backstage/commit/8b7351f): Add `initialRelationAggregation` and `showAggregateMembersToggle` options to `EntityMembersListCard` as well to `EntityOwnershipCard`

#### 0.6.44

##### Patch Changes

- [`22b69f2`](https://github.com/backstage/backstage/commit/22b69f2): Fixing issue with extra slash in the routing

### `@backstage/plugin-permission-backend` (0.7.3 → [0.7.6](../changelogs/@backstage/plugin-permission-backend.md#076))

#### 0.7.6

##### Patch Changes

- [`b2bef92`](https://github.com/backstage/backstage/commit/b2bef92): Convert all enums to erasable-syntax compliant patterns

### `@backstage/plugin-permission-common` (0.9.1 → [0.9.3](../changelogs/@backstage/plugin-permission-common.md#093))

#### 0.9.3

##### Patch Changes

- [`b2bef92`](https://github.com/backstage/backstage/commit/b2bef92): Convert all enums to erasable-syntax compliant patterns

### `@backstage/plugin-permission-react` (0.4.36 → [0.4.38](../changelogs/@backstage/plugin-permission-react.md#0438))

#### 0.4.38

##### Patch Changes

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

### `@backstage/plugin-scaffolder-backend-module-azure` (0.2.12 → [0.2.15](../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#0215))

#### 0.2.14

##### Patch Changes

- [`c8aa210`](https://github.com/backstage/backstage/commit/c8aa210): Updating import for the `scaffolderActionsExtensionPoint` to be the main export

### `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.3.13 → [0.3.16](../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket.md#0316))

#### 0.3.16

##### Patch Changes

- [`fa255f5`](https://github.com/backstage/backstage/commit/fa255f5): Support for Bitbucket Cloud's API token was added as `appPassword` is deprecated (no new creation from September 9, 2025) and will be removed on June 9, 2026.

  API token usage example:

  ```yaml
  integrations:
    bitbucketCloud:
      - username: user@domain.com
        token: my-token
  ```

#### 0.3.15

##### Patch Changes

- [`c8aa210`](https://github.com/backstage/backstage/commit/c8aa210): Updating import for the `scaffolderActionsExtensionPoint` to be the main export

### `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.2.12 → [0.2.15](../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#0215))

#### 0.2.15

##### Patch Changes

- [`fa255f5`](https://github.com/backstage/backstage/commit/fa255f5): Support for Bitbucket Cloud's API token was added as `appPassword` is deprecated (no new creation from September 9, 2025) and will be removed on June 9, 2026.

  API token usage example:

  ```yaml
  integrations:
    bitbucketCloud:
      - username: user@domain.com
        token: my-token
  ```

#### 0.2.14

##### Patch Changes

- [`c8aa210`](https://github.com/backstage/backstage/commit/c8aa210): Updating import for the `scaffolderActionsExtensionPoint` to be the main export

### `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.12 → [0.2.15](../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#0215))

#### 0.2.14

##### Patch Changes

- [`c8aa210`](https://github.com/backstage/backstage/commit/c8aa210): Updating import for the `scaffolderActionsExtensionPoint` to be the main export
- [`f5e0963`](https://github.com/backstage/backstage/commit/f5e0963): Removed unused dependencies

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.12 → [0.3.15](../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#0315))

#### 0.3.14

##### Patch Changes

- [`c8aa210`](https://github.com/backstage/backstage/commit/c8aa210): Updating import for the `scaffolderActionsExtensionPoint` to be the main export

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.14 → [0.3.17](../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0317))

#### 0.3.16

##### Patch Changes

- [`c8aa210`](https://github.com/backstage/backstage/commit/c8aa210): Updating import for the `scaffolderActionsExtensionPoint` to be the main export

### `@backstage/plugin-scaffolder-backend-module-gcp` (0.2.12 → [0.2.15](../changelogs/@backstage/plugin-scaffolder-backend-module-gcp.md#0215))

#### 0.2.15

##### Patch Changes

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

#### 0.2.14

##### Patch Changes

- [`baf1cab`](https://github.com/backstage/backstage/commit/baf1cab): Fix documentation strings to mention GCP instead of Azure

### `@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.12 → [0.2.15](../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#0215))

#### 0.2.14

##### Patch Changes

- [`c8aa210`](https://github.com/backstage/backstage/commit/c8aa210): Updating import for the `scaffolderActionsExtensionPoint` to be the main export

### `@backstage/plugin-scaffolder-backend-module-gitea` (0.2.12 → [0.2.15](../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#0215))

#### 0.2.14

##### Patch Changes

- [`c8aa210`](https://github.com/backstage/backstage/commit/c8aa210): Updating import for the `scaffolderActionsExtensionPoint` to be the main export

### `@backstage/plugin-scaffolder-backend-module-notifications` (0.1.13 → [0.1.16](../changelogs/@backstage/plugin-scaffolder-backend-module-notifications.md#0116))

#### 0.1.15

##### Patch Changes

- [`c8aa210`](https://github.com/backstage/backstage/commit/c8aa210): Updating import for the `scaffolderActionsExtensionPoint` to be the main export

### `@backstage/plugin-scaffolder-backend-module-rails` (0.5.12 → [0.5.15](../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0515))

#### 0.5.15

##### Patch Changes

- [`b2bef92`](https://github.com/backstage/backstage/commit/b2bef92): Convert all enums to erasable-syntax compliant patterns

#### 0.5.14

##### Patch Changes

- [`c8aa210`](https://github.com/backstage/backstage/commit/c8aa210): Updating import for the `scaffolderActionsExtensionPoint` to be the main export

### `@backstage/plugin-scaffolder-backend-module-sentry` (0.2.12 → [0.2.15](../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#0215))

#### 0.2.14

##### Patch Changes

- [`c8aa210`](https://github.com/backstage/backstage/commit/c8aa210): Updating import for the `scaffolderActionsExtensionPoint` to be the main export
- [`eea5360`](https://github.com/backstage/backstage/commit/eea5360): Add sentry:fetch:dsn action to retrieve a Sentry project's DSN

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.13 → [0.4.16](../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0416))

#### 0.4.15

##### Patch Changes

- [`c8aa210`](https://github.com/backstage/backstage/commit/c8aa210): Updating import for the `scaffolderActionsExtensionPoint` to be the main export

### `@backstage/plugin-scaffolder-node-test-utils` (0.3.2 → [0.3.5](../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#035))

#### 0.3.5

##### Patch Changes

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

### `@backstage/plugin-search-backend-module-explore` (0.3.6 → [0.3.9](../changelogs/@backstage/plugin-search-backend-module-explore.md#039))

#### 0.3.7

##### Patch Changes

- [`9a93520`](https://github.com/backstage/backstage/commit/9a93520): Deprecate and mark explore collator as moved

### `@backstage/plugin-search-backend-module-pg` (0.5.47 → [0.5.50](../changelogs/@backstage/plugin-search-backend-module-pg.md#0550))

#### 0.5.50

##### Patch Changes

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

#### 0.5.49

##### Patch Changes

- [`a919ca3`](https://github.com/backstage/backstage/commit/a919ca3): Truncate long docs to fit PG index size limit
- [`8d15a51`](https://github.com/backstage/backstage/commit/8d15a51): Added the < character to the query filter regexp

### `@backstage/plugin-signals-backend` (0.3.7 → [0.3.10](../changelogs/@backstage/plugin-signals-backend.md#0310))

#### 0.3.10

##### Patch Changes

- [`71c22f3`](https://github.com/backstage/backstage/commit/71c22f3): Removed/moved unused dependencies

### `@backstage/plugin-user-settings` (0.8.25 → [0.8.29](../changelogs/@backstage/plugin-user-settings.md#0829))

#### 0.8.29

##### Patch Changes

- [`2b6fda3`](https://github.com/backstage/backstage/commit/2b6fda3): Revert `storageApiRef` implementation
- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

#### 0.8.27

##### Patch Changes

- [`52fa068`](https://github.com/backstage/backstage/commit/52fa068): Added user settings storage API blueprint

#### 0.8.26

##### Patch Changes

- [`320a9ac`](https://github.com/backstage/backstage/commit/320a9ac): Add the OpenShift authenticator provider to the default `user-settings` providers page.
- [`b713b54`](https://github.com/backstage/backstage/commit/b713b54): Tool-tip text correction for the Theme selection in settings page

### `@backstage/plugin-user-settings-backend` (0.3.5 → [0.3.8](../changelogs/@backstage/plugin-user-settings-backend.md#038))

#### 0.3.8

##### Patch Changes

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

## Other minor version bumps

### `@backstage/app-defaults` (1.6.5 → [1.7.2](../changelogs/@backstage/app-defaults.md#172))

#### 1.7.0

##### Minor Changes

- [`9956704`](https://github.com/backstage/backstage/commit/9956704): Add and configure the OpenShift authentication provider to the default APIs.

### `@backstage/backend-app-api` (1.2.6 → [1.3.0](../changelogs/@backstage/backend-app-api.md#130))

#### 1.3.0

##### Minor Changes

- [`a17d9df`](https://github.com/backstage/backstage/commit/a17d9df): Updates API for `instanceMetadata` service to return a list of plugins not features.

##### Patch Changes

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

#### 1.2.8

##### Patch Changes

- [`dd69cf6`](https://github.com/backstage/backstage/commit/dd69cf6): Moved up registration of unhandled rejections and errors listeners to be done as early as possible, avoiding flakiness in backend startups and instead always logging these failures rather than sometimes crashing the process.

### `@backstage/backend-plugin-api` (1.4.2 → [1.5.0](../changelogs/@backstage/backend-plugin-api.md#150))

#### 1.5.0

##### Minor Changes

- [`a17d9df`](https://github.com/backstage/backstage/commit/a17d9df): Promote `instanceMetadata` service to main entrypoint.
- [`62fc2de`](https://github.com/backstage/backstage/commit/62fc2de): Explicitly mark `coreServices.rootInstanceMetadata` as a root service.

### `@backstage/backend-test-utils` (1.8.0 → [1.10.1](../changelogs/@backstage/backend-test-utils.md#1101))

#### 1.10.0

##### Minor Changes

- [`d57b13b`](https://github.com/backstage/backstage/commit/d57b13b): Added support for Postgres 18 to the available `TestDatabases`.

  Note that the set of _default_ databases to test against for users of the `TestDatabases` class was also updated to include Postgres 14 and 18, instead of 13 and 17. If you need to override this, you can pass in an explicit `ids` argument, for example `ids: ['POSTGRES_17', 'POSTGRES_13', 'SQLITE_3']`.

##### Patch Changes

- [`f3001fd`](https://github.com/backstage/backstage/commit/f3001fd): Tweak some of the mock services to have more precise types
- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

#### 1.9.0

##### Minor Changes

- [`4e2c237`](https://github.com/backstage/backstage/commit/4e2c237): The `mockServices.rootConfig()` instance now has an `update` method that can be used to test configuration subscriptions and updates.

### `@backstage/catalog-client` (1.11.0 → [1.12.1](../changelogs/@backstage/catalog-client.md#1121))

#### 1.12.0

##### Minor Changes

- [`0e9ec44`](https://github.com/backstage/backstage/commit/0e9ec44): Introduced new `streamEntities` async generator method for the catalog.

  Catalog API and Catalog Service now includes a `streamEntities` method that allows for streaming entities from the catalog.
  This method is designed to handle large datasets efficiently by processing entities in a stream rather than loading them
  all into memory at once. This is useful when you need to fetch a large number of entities but do not want to use pagination
  or fetch all entities at once.

  Example usage:

  ```ts
  const pageStream = catalogClient.streamEntities({ pageSize: 100 }, { token });
  for await (const page of pageStream) {
    // Handle page of entities
    for (const entity of page) {
      console.log(entity);
    }
  }
  ```

##### Patch Changes

- [`0efcc97`](https://github.com/backstage/backstage/commit/0efcc97): Updated generated schemas

### `@backstage/core-app-api` (1.18.0 → [1.19.2](../changelogs/@backstage/core-app-api.md#1192))

#### 1.19.2

##### Patch Changes

- [`b2bef92`](https://github.com/backstage/backstage/commit/b2bef92): Convert all enums to erasable-syntax compliant patterns
- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

#### 1.19.0

##### Minor Changes

- [`3fca906`](https://github.com/backstage/backstage/commit/3fca906): Add `OpenShiftAuth` helper to create default OAuth flow for OpenShift.

##### Patch Changes

- [`5ae6d9d`](https://github.com/backstage/backstage/commit/5ae6d9d): feat: support no en languages

### `@backstage/core-plugin-api` (1.10.9 → [1.12.0](../changelogs/@backstage/core-plugin-api.md#1120))

#### 1.12.0

##### Minor Changes

- [`83439b1`](https://github.com/backstage/backstage/commit/83439b1): All route references are now forwards compatible with the new frontend system, i.e. `@backstage/frontend-plugin-api`. This means they no longer need to be converted with `convertLegacyRouteRef` or `convertLegacyRouteRefs` from `@backstage/core-compat-api`.

##### Patch Changes

- [`b2bef92`](https://github.com/backstage/backstage/commit/b2bef92): Convert all enums to erasable-syntax compliant patterns
- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

#### 1.11.0

##### Minor Changes

- [`5114627`](https://github.com/backstage/backstage/commit/5114627): Make `openshiftAuthApiRef` available in `@backstage/core-plugin-api`.

### `@backstage/integration` (1.17.1 → [1.18.2](../changelogs/@backstage/integration.md#1182))

#### 1.18.2

##### Patch Changes

- [`fa255f5`](https://github.com/backstage/backstage/commit/fa255f5): Support for Bitbucket Cloud's API token was added as `appPassword` is deprecated (no new creation from September 9, 2025) and will be removed on June 9, 2026.

  API token usage example:

  ```yaml
  integrations:
    bitbucketCloud:
      - username: user@domain.com
        token: my-token
  ```

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

#### 1.18.1

##### Patch Changes

- [`d772b51`](https://github.com/backstage/backstage/commit/d772b51): remove host from azure blob storage integration type
- [`84443f1`](https://github.com/backstage/backstage/commit/84443f1): Adds config definitions for Azure Blob Storage.

#### 1.18.0

##### Minor Changes

- [`03bdc68`](https://github.com/backstage/backstage/commit/03bdc68): Added support for limiting GithubAppCredentialsMux to specific apps

##### Patch Changes

- [`56897d7`](https://github.com/backstage/backstage/commit/56897d7): Fixes issue with Github credentials provider which fails to match organization name if using allowedInstallationOwners

### `@backstage/plugin-catalog` (1.31.2 → [1.32.0](../changelogs/@backstage/plugin-catalog.md#1320))

#### 1.32.0

##### Minor Changes

- [`a521911`](https://github.com/backstage/backstage/commit/a521911): Add support for customizable icons in `SearchResultListItemBlueprint` and related components

##### Patch Changes

- [`b500bcc`](https://github.com/backstage/backstage/commit/b500bcc): Fix React warnings for elements not having stable keys.
- [`a87c0a5`](https://github.com/backstage/backstage/commit/a87c0a5): Fixed responsiveness issues with catalog entity content layout using the new frontend system.
- [`aff04d3`](https://github.com/backstage/backstage/commit/aff04d3): Fixed missing margins for entity warning content area on catalog entity page in NFS.

#### 1.31.3

##### Patch Changes

- [`4316c11`](https://github.com/backstage/backstage/commit/4316c11): Catalog table columns support i18n
- [`ce1239e`](https://github.com/backstage/backstage/commit/ce1239e): Auto-focus the first menu item in `EntityContextMenu`, and do not render a divider if an empty array is passed to `UNSTABLE_extraContextMenuItems`.
- [`85c5e04`](https://github.com/backstage/backstage/commit/85c5e04): Fix incorrect `defaultTarget` on `createComponentRouteRef`.

### `@backstage/plugin-catalog-backend` (3.0.1 → [3.2.0](../changelogs/@backstage/plugin-catalog-backend.md#320))

#### 3.2.0

##### Minor Changes

- [`2d229b2`](https://github.com/backstage/backstage/commit/2d229b2): Enable YAML merge keys in yamlPlaceholderResolver
- [`9d3ec06`](https://github.com/backstage/backstage/commit/9d3ec06): Make YAML merge (<<:) support configurable in the Backstage Catalog instead of always being enabled
- [`8c26af4`](https://github.com/backstage/backstage/commit/8c26af4): Enable YAML merge keys in yamlPlaceholderResolver

##### Patch Changes

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

#### 3.1.2

##### Patch Changes

- [`9890488`](https://github.com/backstage/backstage/commit/9890488): Internal refactor to remove remnants of the old backend system
- [`6493c98`](https://github.com/backstage/backstage/commit/6493c98): Log before provider-orphaning eviction happens
- [`2aaf01a`](https://github.com/backstage/backstage/commit/2aaf01a): Fix for duplicate search results in entity-facets API call
- [`e489661`](https://github.com/backstage/backstage/commit/e489661): Moved catalog processor and provider disabling and priorities under own config objects.

  This is due to issue with some existing providers, such as GitHub, using array syntax for the provider configuration.

  The new config format is not backwards compatible, so users will need to update their config files. The new format
  is as follows:

  ```yaml
  catalog:
    providerOptions:
      providerA:
        disabled: false
      providerB:
        disabled: true
    processorOptions:
      processorA:
        disabled: false
        priority: 10
      processorB:
        disabled: true
  ```

- [`77516c5`](https://github.com/backstage/backstage/commit/77516c5): Added new `catalog:validate-entity` action to actions registry.

  This action can be used to validate entities against the software catalog.
  This is useful for validating `catalog-info.yaml` file changes locally using the
  Backstage MCP server.

#### 3.1.0

##### Minor Changes

- [`9b40a55`](https://github.com/backstage/backstage/commit/9b40a55): Add support for specifying an entity `spec.type` in `catalog.rules` and `catalog.locations.rules` within the catalog configuration.

  For example, this enables allowing all `Template` entities with the type `website`:

  ```diff
    catalog:
      rules:
        - allow:
            - Component
            - API
            - Resource
            - System
            - Domain
            - Location
  +     - allow:
  +         - kind: Template
  +           spec.type: website
          locations:
            - type: url
              pattern: https://github.com/org/*\/blob/master/*.yaml
  ```

##### Patch Changes

- [`37b4eaf`](https://github.com/backstage/backstage/commit/37b4eaf): The 'get-catalog-entity' action now throws a ConflictError instead of generic Error if multiple entities are found, so MCP call doesn't fail with 500.
- [`2bbd24f`](https://github.com/backstage/backstage/commit/2bbd24f): Order catalog processors by priority.

  This change enables the ordering of catalog processors by their priority,
  allowing for more control over the catalog processing sequence.
  The default priority is set to 20, and processors can be assigned a custom
  priority to influence their execution order. Lower number indicates higher priority.
  The priority can be set by implementing the `getPriority` method in the processor class
  or by adding a `catalog.processors.<processorName>.priority` configuration
  in the `app-config.yaml` file. The configuration takes precedence over the method.

- [`e934a27`](https://github.com/backstage/backstage/commit/e934a27): Updating `catalog:get-catalog-entity` action to be `readOnly` and non destructive
- [`0efcc97`](https://github.com/backstage/backstage/commit/0efcc97): Updated generated schemas
- [`2204f5b`](https://github.com/backstage/backstage/commit/2204f5b): Prevent deadlock in catalog deferred stitching
- [`58874c4`](https://github.com/backstage/backstage/commit/58874c4): Add support to disable catalog providers and processors via configuration
- [`a4c82ad`](https://github.com/backstage/backstage/commit/a4c82ad): Only run provider orphan cleanup if the engine is started in the first place

### `@backstage/plugin-catalog-node` (1.18.0 → [1.20.0](../changelogs/@backstage/plugin-catalog-node.md#1200))

#### 1.20.0

##### Minor Changes

- [`9d3ec06`](https://github.com/backstage/backstage/commit/9d3ec06): Make YAML merge (<<:) support configurable in the Backstage Catalog instead of always being enabled
- [`8c26af4`](https://github.com/backstage/backstage/commit/8c26af4): Enable YAML merge keys in yamlPlaceholderResolver

#### 1.19.0

##### Minor Changes

- [`0e9ec44`](https://github.com/backstage/backstage/commit/0e9ec44): Introduced new `streamEntities` async generator method for the catalog.

  Catalog API and Catalog Service now includes a `streamEntities` method that allows for streaming entities from the catalog.
  This method is designed to handle large datasets efficiently by processing entities in a stream rather than loading them
  all into memory at once. This is useful when you need to fetch a large number of entities but do not want to use pagination
  or fetch all entities at once.

  Example usage:

  ```ts
  const pageStream = catalogClient.streamEntities({ pageSize: 100 }, { token });
  for await (const page of pageStream) {
    // Handle page of entities
    for (const entity of page) {
      console.log(entity);
    }
  }
  ```

##### Patch Changes

- [`2bbd24f`](https://github.com/backstage/backstage/commit/2bbd24f): Order catalog processors by priority.

  This change enables the ordering of catalog processors by their priority,
  allowing for more control over the catalog processing sequence.
  The default priority is set to 20, and processors can be assigned a custom
  priority to influence their execution order. Lower number indicates higher priority.
  The priority can be set by implementing the `getPriority` method in the processor class
  or by adding a `catalog.processors.<processorName>.priority` configuration
  in the `app-config.yaml` file. The configuration takes precedence over the method.

### `@backstage/plugin-gateway-backend` (1.0.4 → [1.1.0](../changelogs/@backstage/plugin-gateway-backend.md#110))

#### 1.1.0

##### Minor Changes

- [`229f63e`](https://github.com/backstage/backstage/commit/229f63e): Added hop count tracking to prevent proxy loops. The gateway now tracks the number of proxy hops using the `backstage-gateway-hops` header and rejects requests that exceed 3 hops with a 508 Loop Detected error.
- [`a17d9df`](https://github.com/backstage/backstage/commit/a17d9df): Update usage of the `instanceMetadata` service.

### `@backstage/plugin-search` (1.4.29 → [1.5.0](../changelogs/@backstage/plugin-search.md#150))

#### 1.5.0

##### Minor Changes

- [`a521911`](https://github.com/backstage/backstage/commit/a521911): Add support for customizable icons in `SearchResultListItemBlueprint` and related components

#### 1.4.31

##### Patch Changes

- [`67a3e1a`](https://github.com/backstage/backstage/commit/67a3e1a): Implemented AbortController request cancellation for overlapping search requests. This change ensures that when users type quickly, previous search requests are properly canceled before new ones start.

### `@backstage/plugin-search-react` (1.9.3 → [1.10.0](../changelogs/@backstage/plugin-search-react.md#1100))

#### 1.10.0

##### Minor Changes

- [`a521911`](https://github.com/backstage/backstage/commit/a521911): Add support for customizable icons in `SearchResultListItemBlueprint` and related components

##### Patch Changes

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

#### 1.9.5

##### Patch Changes

- [`67a3e1a`](https://github.com/backstage/backstage/commit/67a3e1a): Implemented AbortController request cancellation for overlapping search requests. This change ensures that when users type quickly, previous search requests are properly canceled before new ones start.

### `@backstage/plugin-techdocs` (1.14.1 → [1.16.0](../changelogs/@backstage/plugin-techdocs.md#1160))

#### 1.16.0

##### Minor Changes

- [`a521911`](https://github.com/backstage/backstage/commit/a521911): Add support for customizable icons in `SearchResultListItemBlueprint` and related components

##### Patch Changes

- [`71c22f3`](https://github.com/backstage/backstage/commit/71c22f3): Removed/moved unused dependencies
- [`a4d4a70`](https://github.com/backstage/backstage/commit/a4d4a70): Fixed an issue where the entire TechDocs page would re-render when navigating between pages within the same entity's documentation.

#### 1.15.0

##### Minor Changes

- [`a0b604c`](https://github.com/backstage/backstage/commit/a0b604c): Adding redirect handling for TechDocs URLs that reference entities that now reference an external entity for TechDocs. Including tests and documentation.

##### Patch Changes

- [`313cec7`](https://github.com/backstage/backstage/commit/313cec7): Updated dependency `dompurify` to `^3.2.4`.
- [`8d18d23`](https://github.com/backstage/backstage/commit/8d18d23): TechDocs page titles have been improved, especially for deeply nested pages.
- [`1dfee19`](https://github.com/backstage/backstage/commit/1dfee19): Reverts a change in CSS layout that shifted the content of the Techdocs too far to the left.
- [`4ce5831`](https://github.com/backstage/backstage/commit/4ce5831): Support Techdocs redirect with dompurify 3.2.6+

### `@backstage/plugin-techdocs-addons-test-utils` (1.0.52 → [1.1.2](../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#112))

#### 1.1.0

##### Minor Changes

- [`72543e9`](https://github.com/backstage/backstage/commit/72543e9): Adding catalogApiRef to test-utils to support catalog API usage by TechDocs reader page.

### `@backstage/plugin-techdocs-backend` (2.0.5 → [2.1.2](../changelogs/@backstage/plugin-techdocs-backend.md#212))

#### 2.1.2

##### Patch Changes

- [`71c22f3`](https://github.com/backstage/backstage/commit/71c22f3): Removed/moved unused dependencies

#### 2.1.0

##### Minor Changes

- [`063cdc5`](https://github.com/backstage/backstage/commit/063cdc5): Techdocs: support HumanDuration for cache TTL and timeout configuration
- [`a0b604c`](https://github.com/backstage/backstage/commit/a0b604c): Adding new entity that specifies an external entity in the techdocs-entity annotation and updates to documentation regarding TechDocs redirects.

### `@techdocs/cli` (1.9.7 → [1.10.2](../changelogs/@techdocs/cli.md#1102))

#### 1.10.2

##### Patch Changes

- [`c2a2017`](https://github.com/backstage/backstage/commit/c2a2017): Fix for missing styles due to move to BUI.

#### 1.10.0

##### Minor Changes

- [`43afbe5`](https://github.com/backstage/backstage/commit/43afbe5): Techdocs CLI serve supports automatic refresh, relying on `mkdocs` `watch` feature.

#### 1.9.8

##### Patch Changes

- [`db63208`](https://github.com/backstage/backstage/commit/db63208): Fixed an issue where `@techdocs/cli serve` command did not pick up the latest changes to TechDocs.

## Other patch version bumps

### `@backstage/catalog-model` (1.7.5 → [1.7.6](../changelogs/@backstage/catalog-model.md#176))

#### 1.7.6

##### Patch Changes

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

### `@backstage/config` (1.3.3 → [1.3.6](../changelogs/@backstage/config.md#136))

#### 1.3.6

##### Patch Changes

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

#### 1.3.5

##### Patch Changes

- [`b45b094`](https://github.com/backstage/backstage/commit/b45b094): Allow colon to be used as config key.

### `@backstage/config-loader` (1.10.2 → [1.10.6](../changelogs/@backstage/config-loader.md#1106))

#### 1.10.6

##### Patch Changes

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

#### 1.10.5

##### Patch Changes

- [`b45b094`](https://github.com/backstage/backstage/commit/b45b094): Allow colon to be used as config key.

#### 1.10.3

##### Patch Changes

- [`a73f495`](https://github.com/backstage/backstage/commit/a73f495): Allow using `BACKSTAGE_ENV` for loading environment specific config files

### `@backstage/dev-utils` (1.1.13 → [1.1.17](../changelogs/@backstage/dev-utils.md#1117))

#### 1.1.17

##### Patch Changes

- [`b29a856`](https://github.com/backstage/backstage/commit/b29a856): Fixed styling of the dev app by adding a lazy import of `@backstage/ui/css/styles.css`.

### `@backstage/plugin-scaffolder` (1.34.0 → [1.34.3](../changelogs/@backstage/plugin-scaffolder.md#1343))

#### 1.34.3

##### Patch Changes

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

#### 1.34.2

##### Patch Changes

- [`e0ffe84`](https://github.com/backstage/backstage/commit/e0ffe84): Add missing `templatingExtensions` option to RouterProps.contextMenu to allow global control across scaffolder pages
- [`d9aed74`](https://github.com/backstage/backstage/commit/d9aed74): Forward `ui:disabled` in `OwnedEntityPicker` to allow disabling it
- [`075e064`](https://github.com/backstage/backstage/commit/075e064): Added missing form fields for the new frontend system.

#### 1.34.1

##### Patch Changes

- [`0d415ae`](https://github.com/backstage/backstage/commit/0d415ae): Render a TechDocs link on the Scaffolder Template List page when templates include either `backstage.io/techdocs-ref` or `backstage.io/techdocs-entity` annotations, using the shared `buildTechDocsURL` helper. Also adds tests to verify both annotations and optional `backstage.io/techdocs-entity-path` are respected.
- [`7151260`](https://github.com/backstage/backstage/commit/7151260): Prevent the MultiEntityPicker from removing options present in form state when new options are selected

### `@backstage/plugin-scaffolder-react` (1.19.0 → [1.19.3](../changelogs/@backstage/plugin-scaffolder-react.md#1193))

#### 1.19.3

##### Patch Changes

- [`886a8a1`](https://github.com/backstage/backstage/commit/886a8a1): Fixed a bug in the Scaffolder's template parsing in the `useTemplateSchema` hook by removing the title instead of setting it to `undefined`
- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

#### 1.19.2

##### Patch Changes

- [`e61f89e`](https://github.com/backstage/backstage/commit/e61f89e): Don't change loading to false until we've actually got some log state

#### 1.19.1

##### Patch Changes

- [`58fc108`](https://github.com/backstage/backstage/commit/58fc108): Fix scaffolder task log stream not having a minimum height

### `@backstage/plugin-search-backend` (2.0.5 → [2.0.8](../changelogs/@backstage/plugin-search-backend.md#208))

#### 2.0.8

##### Patch Changes

- [`b2bef92`](https://github.com/backstage/backstage/commit/b2bef92): Convert all enums to erasable-syntax compliant patterns
- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

#### 2.0.6

##### Patch Changes

- [`0efcc97`](https://github.com/backstage/backstage/commit/0efcc97): Updated generated schemas

### `@backstage/plugin-search-backend-module-elasticsearch` (1.7.5 → [1.7.8](../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#178))

#### 1.7.8

##### Patch Changes

- [`71c22f3`](https://github.com/backstage/backstage/commit/71c22f3): Removed/moved unused dependencies
- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

#### 1.7.6

##### Patch Changes

- [`cde70ca`](https://github.com/backstage/backstage/commit/cde70ca): Added support for batchKeyField in the Elasticsearch indexer to allow consistent document IDs during bulk uploads.

### `@backstage/plugin-search-backend-node` (1.3.14 → [1.3.17](../changelogs/@backstage/plugin-search-backend-node.md#1317))

#### 1.3.17

##### Patch Changes

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

### `@backstage/plugin-techdocs-node` (1.13.6 → [1.13.9](../changelogs/@backstage/plugin-techdocs-node.md#1139))

#### 1.13.9

##### Patch Changes

- [`05f60e1`](https://github.com/backstage/backstage/commit/05f60e1): Refactored constructor parameter properties to explicit property declarations for compatibility with TypeScript's `erasableSyntaxOnly` setting. This internal refactoring maintains all existing functionality while ensuring TypeScript compilation compatibility.

### `@backstage/plugin-techdocs-react` (1.3.2 → [1.3.5](../changelogs/@backstage/plugin-techdocs-react.md#135))

#### 1.3.3

##### Patch Changes

- [`a0b604c`](https://github.com/backstage/backstage/commit/a0b604c): Update to documentation regarding TechDocs redirects.

### `@backstage/types` (1.2.1 → [1.2.2](../changelogs/@backstage/types.md#122))

#### 1.2.2

##### Patch Changes

- [`a95cebd`](https://github.com/backstage/backstage/commit/a95cebd): Internal refactoring for better type support

## Excluded dependency updates

- `@backstage/backend-openapi-utils` (0.6.0 → [0.6.3](../changelogs/@backstage/backend-openapi-utils.md#063))
- `@backstage/frontend-dynamic-feature-loader` (0.1.4 → [0.1.7](../changelogs/@backstage/frontend-dynamic-feature-loader.md#017))
- `@backstage/integration-react` (1.2.9 → [1.2.12](../changelogs/@backstage/integration-react.md#1212))
- `@backstage/plugin-app-node` (0.1.36 → [0.1.39](../changelogs/@backstage/plugin-app-node.md#0139))
- `@backstage/plugin-auth-backend-module-atlassian-provider` (0.4.6 → [0.4.9](../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#049))
- `@backstage/plugin-auth-backend-module-auth0-provider` (0.2.6 → [0.2.9](../changelogs/@backstage/plugin-auth-backend-module-auth0-provider.md#029))
- `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.4.6 → [0.4.9](../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#049))
- `@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.2.11 → [0.2.14](../changelogs/@backstage/plugin-auth-backend-module-azure-easyauth-provider.md#0214))
- `@backstage/plugin-auth-backend-module-bitbucket-provider` (0.3.6 → [0.3.9](../changelogs/@backstage/plugin-auth-backend-module-bitbucket-provider.md#039))
- `@backstage/plugin-auth-backend-module-bitbucket-server-provider` (0.2.6 → [0.2.9](../changelogs/@backstage/plugin-auth-backend-module-bitbucket-server-provider.md#029))
- `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.4.6 → [0.4.9](../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#049))
- `@backstage/plugin-auth-backend-module-github-provider` (0.3.6 → [0.3.9](../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#039))
- `@backstage/plugin-auth-backend-module-gitlab-provider` (0.3.6 → [0.3.9](../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#039))
- `@backstage/plugin-auth-backend-module-google-provider` (0.3.6 → [0.3.9](../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#039))
- `@backstage/plugin-auth-backend-module-guest-provider` (0.2.11 → [0.2.14](../changelogs/@backstage/plugin-auth-backend-module-guest-provider.md#0214))
- `@backstage/plugin-auth-backend-module-microsoft-provider` (0.3.6 → [0.3.9](../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#039))
- `@backstage/plugin-auth-backend-module-oauth2-provider` (0.4.6 → [0.4.9](../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#049))
- `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.2.11 → [0.2.14](../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#0214))
- `@backstage/plugin-auth-backend-module-oidc-provider` (0.4.6 → [0.4.9](../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#049))
- `@backstage/plugin-auth-backend-module-okta-provider` (0.2.6 → [0.2.9](../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#029))
- `@backstage/plugin-auth-backend-module-onelogin-provider` (0.3.6 → [0.3.9](../changelogs/@backstage/plugin-auth-backend-module-onelogin-provider.md#039))
- `@backstage/plugin-auth-backend-module-pinniped-provider` (0.3.6 → [0.3.9](../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#039))
- `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.5.6 → [0.5.9](../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#059))
- `@backstage/plugin-catalog-backend-module-gcp` (0.3.11 → [0.3.14](../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#0314))
- `@backstage/plugin-catalog-backend-module-gitea` (0.1.3 → [0.1.6](../changelogs/@backstage/plugin-catalog-backend-module-gitea.md#016))
- `@backstage/plugin-catalog-backend-module-logs` (0.1.13 → [0.1.16](../changelogs/@backstage/plugin-catalog-backend-module-logs.md#0116))
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.2.11 → [0.2.14](../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#0214))
- `@backstage/plugin-catalog-common` (1.1.5 → [1.1.7](../changelogs/@backstage/plugin-catalog-common.md#117))
- `@backstage/plugin-catalog-unprocessed-entities-common` (0.0.9 → [0.0.11](../changelogs/@backstage/plugin-catalog-unprocessed-entities-common.md#0011))
- `@backstage/plugin-config-schema` (0.1.71 → [0.1.74](../changelogs/@backstage/plugin-config-schema.md#0174))
- `@backstage/plugin-devtools` (0.1.30 → [0.1.33](../changelogs/@backstage/plugin-devtools.md#0133))
- `@backstage/plugin-events-backend-module-azure` (0.2.23 → [0.2.26](../changelogs/@backstage/plugin-events-backend-module-azure.md#0226))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.23 → [0.2.26](../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0226))
- `@backstage/plugin-events-backend-module-bitbucket-server` (0.1.4 → [0.1.7](../changelogs/@backstage/plugin-events-backend-module-bitbucket-server.md#017))
- `@backstage/plugin-events-backend-module-gerrit` (0.2.23 → [0.2.26](../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0226))
- `@backstage/plugin-events-backend-module-github` (0.4.3 → [0.4.6](../changelogs/@backstage/plugin-events-backend-module-github.md#046))
- `@backstage/plugin-events-backend-module-gitlab` (0.3.4 → [0.3.7](../changelogs/@backstage/plugin-events-backend-module-gitlab.md#037))
- `@backstage/plugin-events-backend-module-google-pubsub` (0.1.3 → [0.1.6](../changelogs/@backstage/plugin-events-backend-module-google-pubsub.md#016))
- `@backstage/plugin-events-backend-test-utils` (0.1.47 → [0.1.50](../changelogs/@backstage/plugin-events-backend-test-utils.md#0150))
- `@backstage/plugin-home-react` (0.1.29 → [0.1.32](../changelogs/@backstage/plugin-home-react.md#0132))
- `@backstage/plugin-org-react` (0.1.41 → [0.1.44](../changelogs/@backstage/plugin-org-react.md#0144))
- `@backstage/plugin-permission-backend-module-allow-all-policy` (0.2.11 → [0.2.14](../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#0214))
- `@backstage/plugin-permission-node` (0.10.3 → [0.10.6](../changelogs/@backstage/plugin-permission-node.md#0106))
- `@backstage/plugin-proxy-backend` (0.6.5 → [0.6.8](../changelogs/@backstage/plugin-proxy-backend.md#068))
- `@backstage/plugin-proxy-node` (0.1.7 → [0.1.10](../changelogs/@backstage/plugin-proxy-node.md#0110))
- `@backstage/plugin-scaffolder-common` (1.7.0 → [1.7.3](../changelogs/@backstage/plugin-scaffolder-common.md#173))
- `@backstage/plugin-search-backend-module-catalog` (0.3.7 → [0.3.10](../changelogs/@backstage/plugin-search-backend-module-catalog.md#0310))
- `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.3.12 → [0.3.15](../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#0315))
- `@backstage/plugin-search-backend-module-techdocs` (0.4.5 → [0.4.8](../changelogs/@backstage/plugin-search-backend-module-techdocs.md#048))
- `@backstage/plugin-search-common` (1.2.19 → [1.2.21](../changelogs/@backstage/plugin-search-common.md#1221))
- `@backstage/plugin-signals-node` (0.1.23 → [0.1.26](../changelogs/@backstage/plugin-signals-node.md#0126))
- `@backstage/plugin-signals-react` (0.0.15 → [0.0.17](../changelogs/@backstage/plugin-signals-react.md#0017))
- `@backstage/test-utils` (1.7.11 → [1.7.13](../changelogs/@backstage/test-utils.md#1713))
