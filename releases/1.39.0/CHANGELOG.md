# Backstage Release 1.39.0 changelog

Changes between 1.38.1 and 1.39.0 — 169 changed and 2 added packages.

## Summary

- [Newly added packages](#newly-added-packages): 2 packages
- [Breaking changes](#breaking-changes): 13 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 3 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 3 packages
- [Other minor version bumps](#other-minor-version-bumps): 11 packages
- [Other patch version bumps](#other-patch-version-bumps): 76 packages
- [Excluded dependency updates](#excluded-dependency-updates): 63 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/plugin-catalog-backend-module-gitea` (new, 0.1.0)](#backstageplugin-catalog-backend-module-gitea-new-010)
  - [`@backstage/plugin-events-backend-module-google-pubsub` (new, 0.1.0)](#backstageplugin-events-backend-module-google-pubsub-new-010)
- [Breaking changes](#breaking-changes)
  - [`@backstage/backend-defaults` (0.9.0 → 0.10.0)](#backstagebackend-defaults-090--0100)
  - [`@backstage/backend-dynamic-feature-service` (0.6.2 → 0.7.0)](#backstagebackend-dynamic-feature-service-062--070)
  - [`@backstage/canon` (0.3.1 → 0.4.0)](#backstagecanon-031--040)
  - [`@backstage/plugin-auth-backend` (0.24.5 → 0.25.0)](#backstageplugin-auth-backend-0245--0250)
  - [`@backstage/plugin-bitbucket-cloud-common` (0.2.29 → 0.3.0)](#backstageplugin-bitbucket-cloud-common-0229--030)
  - [`@backstage/plugin-catalog-backend` (1.32.1 → 2.0.0)](#backstageplugin-catalog-backend-1321--200)
  - [`@backstage/plugin-catalog-backend-module-github` (0.8.0 → 0.9.0)](#backstageplugin-catalog-backend-module-github-080--090)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.6.5 → 0.7.0)](#backstageplugin-catalog-backend-module-incremental-ingestion-065--070)
  - [`@backstage/plugin-catalog-backend-module-unprocessed` (0.5.7 → 0.6.0)](#backstageplugin-catalog-backend-module-unprocessed-057--060)
  - [`@backstage/plugin-catalog-import` (0.12.13 → 0.13.0)](#backstageplugin-catalog-import-01213--0130)
  - [`@backstage/plugin-events-backend-module-github` (0.3.0 → 0.4.0)](#backstageplugin-events-backend-module-github-030--040)
  - [`@backstage/plugin-kubernetes-node` (0.2.5 → 0.3.0)](#backstageplugin-kubernetes-node-025--030)
  - [`@backstage/plugin-permission-backend` (0.6.0 → 0.7.0)](#backstageplugin-permission-backend-060--070)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.6.9 → 0.7.0)](#backstageplugin-catalog-backend-module-msgraph-069--070)
  - [`@backstage/plugin-permission-common` (0.8.4 → 0.9.0)](#backstageplugin-permission-common-084--090)
  - [`@backstage/plugin-permission-node` (0.9.1 → 0.10.0)](#backstageplugin-permission-node-091--0100)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-kubernetes-cluster` (0.0.24 → 0.0.25)](#backstageplugin-kubernetes-cluster-0024--0025)
  - [`@backstage/plugin-signals` (0.0.18 → 0.0.19)](#backstageplugin-signals-0018--0019)
  - [`@backstage/release-manifests` (0.0.12 → 0.0.13)](#backstagerelease-manifests-0012--0013)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/backend-test-utils` (1.4.0 → 1.5.0)](#backstagebackend-test-utils-140--150)
  - [`@backstage/catalog-client` (1.9.1 → 1.10.0)](#backstagecatalog-client-191--1100)
  - [`@backstage/core-app-api` (1.16.1 → 1.17.0)](#backstagecore-app-api-1161--1170)
  - [`@backstage/integration` (1.16.3 → 1.17.0)](#backstageintegration-1163--1170)
  - [`@backstage/plugin-catalog` (1.29.0 → 1.30.0)](#backstageplugin-catalog-1290--1300)
  - [`@backstage/plugin-catalog-node` (1.16.3 → 1.17.0)](#backstageplugin-catalog-node-1163--1170)
  - [`@backstage/plugin-catalog-react` (1.17.0 → 1.18.0)](#backstageplugin-catalog-react-1170--1180)
  - [`@backstage/plugin-scaffolder` (1.30.1 → 1.31.0)](#backstageplugin-scaffolder-1301--1310)
  - [`@backstage/plugin-scaffolder-backend` (1.32.1 → 1.33.0)](#backstageplugin-scaffolder-backend-1321--1330)
  - [`@backstage/plugin-scaffolder-react` (1.15.1 → 1.16.0)](#backstageplugin-scaffolder-react-1151--1160)
  - [`@backstage/plugin-search-react` (1.8.8 → 1.9.0)](#backstageplugin-search-react-188--190)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-app-api` (1.2.2 → 1.2.3)](#backstagebackend-app-api-122--123)
  - [`@backstage/backend-plugin-api` (1.3.0 → 1.3.1)](#backstagebackend-plugin-api-130--131)
  - [`@backstage/catalog-model` (1.7.3 → 1.7.4)](#backstagecatalog-model-173--174)
  - [`@backstage/cli` (0.32.0 → 0.32.1)](#backstagecli-0320--0321)
  - [`@backstage/config-loader` (1.10.0 → 1.10.1)](#backstageconfig-loader-1100--1101)
  - [`@backstage/core-compat-api` (0.4.1 → 0.4.2)](#backstagecore-compat-api-041--042)
  - [`@backstage/core-components` (0.17.1 → 0.17.2)](#backstagecore-components-0171--0172)
  - [`@backstage/core-plugin-api` (1.10.6 → 1.10.7)](#backstagecore-plugin-api-1106--1107)
  - [`@backstage/create-app` (0.6.1 → 0.6.2)](#backstagecreate-app-061--062)
  - [`@backstage/frontend-app-api` (0.11.1 → 0.11.2)](#backstagefrontend-app-api-0111--0112)
  - [`@backstage/frontend-plugin-api` (0.10.1 → 0.10.2)](#backstagefrontend-plugin-api-0101--0102)
  - [`@backstage/frontend-test-utils` (0.3.1 → 0.3.2)](#backstagefrontend-test-utils-031--032)
  - [`@backstage/integration-aws-node` (0.1.15 → 0.1.16)](#backstageintegration-aws-node-0115--0116)
  - [`@backstage/plugin-api-docs` (0.12.6 → 0.12.7)](#backstageplugin-api-docs-0126--0127)
  - [`@backstage/plugin-app` (0.1.8 → 0.1.9)](#backstageplugin-app-018--019)
  - [`@backstage/plugin-app-visualizer` (0.1.18 → 0.1.19)](#backstageplugin-app-visualizer-0118--0119)
  - [`@backstage/plugin-auth-backend-module-atlassian-provider` (0.4.2 → 0.4.3)](#backstageplugin-auth-backend-module-atlassian-provider-042--043)
  - [`@backstage/plugin-auth-backend-module-aws-alb-provider` (0.4.2 → 0.4.3)](#backstageplugin-auth-backend-module-aws-alb-provider-042--043)
  - [`@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.2.7 → 0.2.8)](#backstageplugin-auth-backend-module-azure-easyauth-provider-027--028)
  - [`@backstage/plugin-auth-backend-module-bitbucket-provider` (0.3.2 → 0.3.3)](#backstageplugin-auth-backend-module-bitbucket-provider-032--033)
  - [`@backstage/plugin-auth-backend-module-bitbucket-server-provider` (0.2.2 → 0.2.3)](#backstageplugin-auth-backend-module-bitbucket-server-provider-022--023)
  - [`@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.4.2 → 0.4.3)](#backstageplugin-auth-backend-module-cloudflare-access-provider-042--043)
  - [`@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.4.2 → 0.4.3)](#backstageplugin-auth-backend-module-gcp-iap-provider-042--043)
  - [`@backstage/plugin-auth-backend-module-github-provider` (0.3.2 → 0.3.3)](#backstageplugin-auth-backend-module-github-provider-032--033)
  - [`@backstage/plugin-auth-backend-module-gitlab-provider` (0.3.2 → 0.3.3)](#backstageplugin-auth-backend-module-gitlab-provider-032--033)
  - [`@backstage/plugin-auth-backend-module-google-provider` (0.3.2 → 0.3.3)](#backstageplugin-auth-backend-module-google-provider-032--033)
  - [`@backstage/plugin-auth-backend-module-microsoft-provider` (0.3.2 → 0.3.3)](#backstageplugin-auth-backend-module-microsoft-provider-032--033)
  - [`@backstage/plugin-auth-backend-module-oauth2-provider` (0.4.2 → 0.4.3)](#backstageplugin-auth-backend-module-oauth2-provider-042--043)
  - [`@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.2.7 → 0.2.8)](#backstageplugin-auth-backend-module-oauth2-proxy-provider-027--028)
  - [`@backstage/plugin-auth-backend-module-oidc-provider` (0.4.2 → 0.4.3)](#backstageplugin-auth-backend-module-oidc-provider-042--043)
  - [`@backstage/plugin-auth-backend-module-okta-provider` (0.2.2 → 0.2.3)](#backstageplugin-auth-backend-module-okta-provider-022--023)
  - [`@backstage/plugin-auth-backend-module-onelogin-provider` (0.3.2 → 0.3.3)](#backstageplugin-auth-backend-module-onelogin-provider-032--033)
  - [`@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.5.2 → 0.5.3)](#backstageplugin-auth-backend-module-vmware-cloud-provider-052--053)
  - [`@backstage/plugin-auth-node` (0.6.2 → 0.6.3)](#backstageplugin-auth-node-062--063)
  - [`@backstage/plugin-auth-react` (0.1.14 → 0.1.15)](#backstageplugin-auth-react-0114--0115)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.4.10 → 0.4.11)](#backstageplugin-catalog-backend-module-aws-0410--0411)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.3.4 → 0.3.5)](#backstageplugin-catalog-backend-module-azure-034--035)
  - [`@backstage/plugin-catalog-backend-module-backstage-openapi` (0.5.1 → 0.5.2)](#backstageplugin-catalog-backend-module-backstage-openapi-051--052)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.4.7 → 0.4.8)](#backstageplugin-catalog-backend-module-bitbucket-cloud-047--048)
  - [`@backstage/plugin-catalog-backend-module-github-org` (0.3.9 → 0.3.10)](#backstageplugin-catalog-backend-module-github-org-039--0310)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.6.5 → 0.6.6)](#backstageplugin-catalog-backend-module-gitlab-065--066)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.11.4 → 0.11.5)](#backstageplugin-catalog-backend-module-ldap-0114--0115)
  - [`@backstage/plugin-catalog-backend-module-logs` (0.1.9 → 0.1.10)](#backstageplugin-catalog-backend-module-logs-019--0110)
  - [`@backstage/plugin-catalog-graph` (0.4.18 → 0.4.19)](#backstageplugin-catalog-graph-0418--0419)
  - [`@backstage/plugin-catalog-unprocessed-entities` (0.2.16 → 0.2.17)](#backstageplugin-catalog-unprocessed-entities-0216--0217)
  - [`@backstage/plugin-devtools` (0.1.26 → 0.1.27)](#backstageplugin-devtools-0126--0127)
  - [`@backstage/plugin-events-backend-module-gitlab` (0.3.0 → 0.3.1)](#backstageplugin-events-backend-module-gitlab-030--031)
  - [`@backstage/plugin-home` (0.8.7 → 0.8.8)](#backstageplugin-home-087--088)
  - [`@backstage/plugin-home-react` (0.1.25 → 0.1.26)](#backstageplugin-home-react-0125--0126)
  - [`@backstage/plugin-kubernetes` (0.12.6 → 0.12.7)](#backstageplugin-kubernetes-0126--0127)
  - [`@backstage/plugin-kubernetes-backend` (0.19.5 → 0.19.6)](#backstageplugin-kubernetes-backend-0195--0196)
  - [`@backstage/plugin-kubernetes-common` (0.9.4 → 0.9.5)](#backstageplugin-kubernetes-common-094--095)
  - [`@backstage/plugin-kubernetes-react` (0.5.6 → 0.5.7)](#backstageplugin-kubernetes-react-056--057)
  - [`@backstage/plugin-notifications` (0.5.4 → 0.5.5)](#backstageplugin-notifications-054--055)
  - [`@backstage/plugin-notifications-backend-module-email` (0.3.8 → 0.3.9)](#backstageplugin-notifications-backend-module-email-038--039)
  - [`@backstage/plugin-notifications-backend-module-slack` (0.1.0 → 0.1.1)](#backstageplugin-notifications-backend-module-slack-010--011)
  - [`@backstage/plugin-org` (0.6.38 → 0.6.39)](#backstageplugin-org-0638--0639)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket` (0.3.9 → 0.3.10)](#backstageplugin-scaffolder-backend-module-bitbucket-039--0310)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.2.8 → 0.2.9)](#backstageplugin-scaffolder-backend-module-bitbucket-cloud-028--029)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.8 → 0.2.9)](#backstageplugin-scaffolder-backend-module-bitbucket-server-028--029)
  - [`@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.8 → 0.2.9)](#backstageplugin-scaffolder-backend-module-gerrit-028--029)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.7.0 → 0.7.1)](#backstageplugin-scaffolder-backend-module-github-070--071)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.9.0 → 0.9.1)](#backstageplugin-scaffolder-backend-module-gitlab-090--091)
  - [`@backstage/plugin-scaffolder-backend-module-notifications` (0.1.9 → 0.1.10)](#backstageplugin-scaffolder-backend-module-notifications-019--0110)
  - [`@backstage/plugin-scaffolder-node` (0.8.1 → 0.8.2)](#backstageplugin-scaffolder-node-081--082)
  - [`@backstage/plugin-scaffolder-node-test-utils` (0.2.1 → 0.2.2)](#backstageplugin-scaffolder-node-test-utils-021--022)
  - [`@backstage/plugin-search` (1.4.25 → 1.4.26)](#backstageplugin-search-1425--1426)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.7.1 → 1.7.2)](#backstageplugin-search-backend-module-elasticsearch-171--172)
  - [`@backstage/plugin-techdocs` (1.12.5 → 1.12.6)](#backstageplugin-techdocs-1125--1126)
  - [`@backstage/plugin-techdocs-backend` (2.0.1 → 2.0.2)](#backstageplugin-techdocs-backend-201--202)
  - [`@backstage/plugin-techdocs-node` (1.13.2 → 1.13.3)](#backstageplugin-techdocs-node-1132--1133)
  - [`@backstage/plugin-techdocs-react` (1.2.16 → 1.2.17)](#backstageplugin-techdocs-react-1216--1217)
  - [`@backstage/plugin-user-settings` (0.8.21 → 0.8.22)](#backstageplugin-user-settings-0821--0822)
  - [`@backstage/repo-tools` (0.13.2 → 0.13.3)](#backstagerepo-tools-0132--0133)
  - [`@backstage/test-utils` (1.7.7 → 1.7.8)](#backstagetest-utils-177--178)
  - [`@backstage/theme` (0.6.5 → 0.6.6)](#backstagetheme-065--066)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/plugin-catalog-backend-module-gitea` (new, [0.1.0](../../changelogs/@backstage/plugin-catalog-backend-module-gitea.md#010))

#### 0.1.0

##### Minor Changes

- [`e4dabc6`](https://github.com/backstage/backstage/commit/e4dabc6): add new gitea provider module

### `@backstage/plugin-events-backend-module-google-pubsub` (new, [0.1.0](../../changelogs/@backstage/plugin-events-backend-module-google-pubsub.md#010))

#### 0.1.0

##### Minor Changes

- [`af853ef`](https://github.com/backstage/backstage/commit/af853ef): Added a module that is able to transfer messages from Google Pub/Sub subscriptions into the Backstage events system.

## Breaking changes

### `@backstage/backend-defaults` (0.9.0 → [0.10.0](../../changelogs/@backstage/backend-defaults.md#0100))

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

### `@backstage/backend-dynamic-feature-service` (0.6.2 → [0.7.0](../../changelogs/@backstage/backend-dynamic-feature-service.md#070))

#### 0.7.0

##### Minor Changes

- [`10f693c`](https://github.com/backstage/backstage/commit/10f693c): **BREAKING** Removed support for the legacy backend, please migrate to the new backend system

##### Patch Changes

- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Fixed various typos.
  `FrontendRemoteResolver`'s misspelled `getAdditionaRemoteInfo` has been deprecated. Use the correct spelling `getAdditionalRemoteInfo` instead.

### `@backstage/canon` (0.3.1 → [0.4.0](../../changelogs/@backstage/canon.md#040))

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

### `@backstage/plugin-auth-backend` (0.24.5 → [0.25.0](../../changelogs/@backstage/plugin-auth-backend.md#0250))

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

### `@backstage/plugin-bitbucket-cloud-common` (0.2.29 → [0.3.0](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#030))

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

### `@backstage/plugin-catalog-backend` (1.32.1 → [2.0.0](../../changelogs/@backstage/plugin-catalog-backend.md#200))

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

### `@backstage/plugin-catalog-backend-module-github` (0.8.0 → [0.9.0](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#090))

#### 0.9.0

##### Minor Changes

- [`ff335e5`](https://github.com/backstage/backstage/commit/ff335e5): **BREAKING** The `GithubLocationAnalyzer` now requires the `AuthService` and the `CatalogService` when being constructed and the `TokenManger` has been removed.

##### Patch Changes

- [`ee9f59f`](https://github.com/backstage/backstage/commit/ee9f59f): Added filter to include archived repositories

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.6.5 → [0.7.0](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#070))

#### 0.7.0

##### Minor Changes

- [`10f693c`](https://github.com/backstage/backstage/commit/10f693c): **BREAKING** Removed support for the legacy backend, please [migrate to the new backend system](https://github.com/backstage/backstage/tree/v1.38.0/plugins/catalog-backend-module-incremental-ingestion#installation). Also, if you were importing from the `/alpha` export of this package, you should remove the `/alpha` part.

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.5.7 → [0.6.0](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#060))

#### 0.6.0

##### Minor Changes

- [`f453d5c`](https://github.com/backstage/backstage/commit/f453d5c): **BREAKING** Removed support for the legacy backend and removed references to `@backstage/backend-common`, please [migrate to the new backend system](https://backstage.io/docs/backend-system/building-plugins-and-modules/migrating)

### `@backstage/plugin-catalog-import` (0.12.13 → [0.13.0](../../changelogs/@backstage/plugin-catalog-import.md#0130))

#### 0.13.0

##### Minor Changes

- [`e2fd549`](https://github.com/backstage/backstage/commit/e2fd549): **BREAKING**: `generateStepper` and `defaultGenerateStepper` now require a translation argument to be passed through for supporting translations.

##### Patch Changes

- [`fb58f20`](https://github.com/backstage/backstage/commit/fb58f20): Internal update to use the new `pluginId` option of `createFrontendPlugin`.
- [`66a1140`](https://github.com/backstage/backstage/commit/66a1140): Add i18n support for `catalog-import` plugin.

### `@backstage/plugin-events-backend-module-github` (0.3.0 → [0.4.0](../../changelogs/@backstage/plugin-events-backend-module-github.md#040))

#### 0.4.0

##### Minor Changes

- [`ae249fc`](https://github.com/backstage/backstage/commit/ae249fc): **BREAKING**: Removed the `createGithubSignatureValidator` export.

  Added support webhook validation based on `integrations.github.[].apps.[].webhookSecret`.

##### Patch Changes

- [`c7ef81c`](https://github.com/backstage/backstage/commit/c7ef81c): Correct README installation instructions.

### `@backstage/plugin-kubernetes-node` (0.2.5 → [0.3.0](../../changelogs/@backstage/plugin-kubernetes-node.md#030))

#### 0.3.0

##### Minor Changes

- [`9cdf001`](https://github.com/backstage/backstage/commit/9cdf001): **BREAKING**: The `PinnipedHelper` class now expects a regular `LoggerService` instance from the new backend system, instead of a Winston logger.

##### Patch Changes

- [`216c6b2`](https://github.com/backstage/backstage/commit/216c6b2): Updated dependency `@kubernetes/client-node` to `1.1.2`.
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

### `@backstage/plugin-permission-backend` (0.6.0 → [0.7.0](../../changelogs/@backstage/plugin-permission-backend.md#070))

#### 0.7.0

##### Minor Changes

- [`4da2965`](https://github.com/backstage/backstage/commit/4da2965): Fixed an issue causing the `PermissionClient` to exhaust the request body size limit too quickly when making many requests.
- [`cf8fd51`](https://github.com/backstage/backstage/commit/cf8fd51): **BREAKING** Removed support for the legacy backend system, please [migrate to the new backend system](https://backstage.io/docs/backend-system/building-backends/migrating)

## 0.x minor version bumps

### `@backstage/plugin-catalog-backend-module-msgraph` (0.6.9 → [0.7.0](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#070))

#### 0.7.0

##### Minor Changes

- [`20c1ea7`](https://github.com/backstage/backstage/commit/20c1ea7): Add new `userGroupMember.path`, `user.path` and, `group.path` option to each query type to allow more complex msgraph queries

##### Patch Changes

- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

### `@backstage/plugin-permission-common` (0.8.4 → [0.9.0](../../changelogs/@backstage/plugin-permission-common.md#090))

#### 0.9.0

##### Minor Changes

- [`4da2965`](https://github.com/backstage/backstage/commit/4da2965): Fixed an issue causing the `PermissionClient` to exhaust the request body size limit too quickly when making many requests.

##### Patch Changes

- [`37328b1`](https://github.com/backstage/backstage/commit/37328b1): Fixed an issue causing `PermissionClient` to throw an error when authorizing basic permissions with the `permission.EXPERIMENTAL_enableBatchedRequests` config enabled.
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

### `@backstage/plugin-permission-node` (0.9.1 → [0.10.0](../../changelogs/@backstage/plugin-permission-node.md#0100))

#### 0.10.0

##### Minor Changes

- [`4da2965`](https://github.com/backstage/backstage/commit/4da2965): Fixed an issue causing the `PermissionClient` to exhaust the request body size limit too quickly when making many requests.

## 0.0.x patch version bumps

### `@backstage/plugin-kubernetes-cluster` (0.0.24 → [0.0.25](../../changelogs/@backstage/plugin-kubernetes-cluster.md#0025))

#### 0.0.25

##### Patch Changes

- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

### `@backstage/plugin-signals` (0.0.18 → [0.0.19](../../changelogs/@backstage/plugin-signals.md#0019))

#### 0.0.19

##### Patch Changes

- [`fb58f20`](https://github.com/backstage/backstage/commit/fb58f20): Internal update to use the new `pluginId` option of `createFrontendPlugin`.

### `@backstage/release-manifests` (0.0.12 → [0.0.13](../../changelogs/@backstage/release-manifests.md#0013))

#### 0.0.13

##### Patch Changes

- [`163f3da`](https://github.com/backstage/backstage/commit/163f3da): This expands the configurability of `release-manifests` to pave the road for more configuration options in the `cli`.

  Specifically it allows the specification of mirrored, proxied, or air-gapped hosts when upgrading across releases when
  working in restricted or heavily governed development environments (common in large enterprises and government
  entities).

## Other minor version bumps

### `@backstage/backend-test-utils` (1.4.0 → [1.5.0](../../changelogs/@backstage/backend-test-utils.md#150))

#### 1.5.0

##### Minor Changes

- [`b3832d1`](https://github.com/backstage/backstage/commit/b3832d1): Add a functional `mockServices.events()`
- [`c6bc67d`](https://github.com/backstage/backstage/commit/c6bc67d): Added Valkey support alongside Redis in backend-defaults cache clients, using the new Keyv Valkey package. Also extended backend-test-utils to support Valkey in tests.

### `@backstage/catalog-client` (1.9.1 → [1.10.0](../../changelogs/@backstage/catalog-client.md#1100))

#### 1.10.0

##### Minor Changes

- [`1a003ff`](https://github.com/backstage/backstage/commit/1a003ff): Add `getLocations` method to `CatalogApi` and `CatalogClient`. This method calls the [`GET /locations`](https://backstage.io/docs/features/software-catalog/software-catalog-api/#get-locations) endpoint from the catalog backend.

### `@backstage/core-app-api` (1.16.1 → [1.17.0](../../changelogs/@backstage/core-app-api.md#1170))

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

### `@backstage/integration` (1.16.3 → [1.17.0](../../changelogs/@backstage/integration.md#1170))

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

### `@backstage/plugin-catalog` (1.29.0 → [1.30.0](../../changelogs/@backstage/plugin-catalog.md#1300))

#### 1.30.0

##### Minor Changes

- [`970cb48`](https://github.com/backstage/backstage/commit/970cb48): Show the pagination text for the offset-paginated catalog table, and remove the pagination bar from the top of the `CatalogTable` when pagination is enabled.

##### Patch Changes

- [`fb58f20`](https://github.com/backstage/backstage/commit/fb58f20): Internal update to use the new `pluginId` option of `createFrontendPlugin`.
- [`2ddbc50`](https://github.com/backstage/backstage/commit/2ddbc50): A new `filter` parameter has been added to `EntityContextMenuItemBlueprint` to make it easier to configure which entities a menu item should appear for. The `filter` parameter is a function which accepts an entity and returns a boolean.
- [`bf85d37`](https://github.com/backstage/backstage/commit/bf85d37): Fix for missing `routeRef` when using `core-plugin-api` in a dialog context

### `@backstage/plugin-catalog-node` (1.16.3 → [1.17.0](../../changelogs/@backstage/plugin-catalog-node.md#1170))

#### 1.17.0

##### Minor Changes

- [`a459f17`](https://github.com/backstage/backstage/commit/a459f17): Added `parseEntityYaml` from `@backstage/plugin-catalog-backend`, to make it more easily usable by custom plugins and modules
- [`1a003ff`](https://github.com/backstage/backstage/commit/1a003ff): Add `getLocations` method to `CatalogApi` and `CatalogClient`. This method calls the [`GET /locations`](https://backstage.io/docs/features/software-catalog/software-catalog-api/#get-locations) endpoint from the catalog backend.

### `@backstage/plugin-catalog-react` (1.17.0 → [1.18.0](../../changelogs/@backstage/plugin-catalog-react.md#1180))

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

### `@backstage/plugin-scaffolder` (1.30.1 → [1.31.0](../../changelogs/@backstage/plugin-scaffolder.md#1310))

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

### `@backstage/plugin-scaffolder-backend` (1.32.1 → [1.33.0](../../changelogs/@backstage/plugin-scaffolder-backend.md#1330))

#### 1.33.0

##### Minor Changes

- [`587cb05`](https://github.com/backstage/backstage/commit/587cb05): Added `workspace:template` and `workspace:template:file` actions to complement respective `fetch:*` actions

##### Patch Changes

- [`eb39388`](https://github.com/backstage/backstage/commit/eb39388): Fixed bug in fs:delete that prevented wildcard patterns from matching paths starting with "."
- [`36ae651`](https://github.com/backstage/backstage/commit/36ae651): Fixing a bug where the name for `templatingExtensions` was incorrectly set to `templateExtensions`
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos
- [`ec42f8e`](https://github.com/backstage/backstage/commit/ec42f8e): Generating new tokens on each Scaffolder Task Retry

### `@backstage/plugin-scaffolder-react` (1.15.1 → [1.16.0](../../changelogs/@backstage/plugin-scaffolder-react.md#1160))

#### 1.16.0

##### Minor Changes

- [`4235e87`](https://github.com/backstage/backstage/commit/4235e87): add templating extensions page

##### Patch Changes

- [`36ae651`](https://github.com/backstage/backstage/commit/36ae651): Fixing a bug where the name for `templatingExtensions` was incorrectly set to `templateExtensions`
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

### `@backstage/plugin-search-react` (1.8.8 → [1.9.0](../../changelogs/@backstage/plugin-search-react.md#190))

#### 1.9.0

##### Minor Changes

- [`611c941`](https://github.com/backstage/backstage/commit/611c941): Allow search filters to provide labels and values separately, and not only values

##### Patch Changes

- [`2c76614`](https://github.com/backstage/backstage/commit/2c76614): Fix memoization of `filterValue` in `SearchFilter.Autocomplete` to prevent unintended resets
- [`fa48594`](https://github.com/backstage/backstage/commit/fa48594): search plugin support i18n

## Other patch version bumps

### `@backstage/backend-app-api` (1.2.2 → [1.2.3](../../changelogs/@backstage/backend-app-api.md#123))

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

### `@backstage/backend-plugin-api` (1.3.0 → [1.3.1](../../changelogs/@backstage/backend-plugin-api.md#131))

#### 1.3.1

##### Patch Changes

- [`acea1d4`](https://github.com/backstage/backstage/commit/acea1d4): update documentation
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos
- [`d385854`](https://github.com/backstage/backstage/commit/d385854): Minor doc comment update

### `@backstage/catalog-model` (1.7.3 → [1.7.4](../../changelogs/@backstage/catalog-model.md#174))

#### 1.7.4

##### Patch Changes

- [`ed4e625`](https://github.com/backstage/backstage/commit/ed4e625): Added support for icons containing colons

### `@backstage/cli` (0.32.0 → [0.32.1](../../changelogs/@backstage/cli.md#0321))

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

### `@backstage/config-loader` (1.10.0 → [1.10.1](../../changelogs/@backstage/config-loader.md#1101))

#### 1.10.1

##### Patch Changes

- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

### `@backstage/core-compat-api` (0.4.1 → [0.4.2](../../changelogs/@backstage/core-compat-api.md#042))

#### 0.4.2

##### Patch Changes

- [`173db8f`](https://github.com/backstage/backstage/commit/173db8f): Updates to use the new `plugin` property of `AppNodeSpec`.
- [`fb58f20`](https://github.com/backstage/backstage/commit/fb58f20): Internal update to use the new `pluginId` option of `createFrontendPlugin`.
- [`6eedf46`](https://github.com/backstage/backstage/commit/6eedf46): Updated dependency `@backstage-community/plugin-puppetdb` to `^0.6.0`.
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

### `@backstage/core-components` (0.17.1 → [0.17.2](../../changelogs/@backstage/core-components.md#0172))

#### 0.17.2

##### Patch Changes

- [`e0d1025`](https://github.com/backstage/backstage/commit/e0d1025): `LogViewer` now supports a `textWrap` prop that wraps log lines to the next line for overflowing content instead of using horizontal scroll
- [`bb84534`](https://github.com/backstage/backstage/commit/bb84534): Fix the hidden sidebar's sub-menu when the sidebar is scrollable
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

### `@backstage/core-plugin-api` (1.10.6 → [1.10.7](../../changelogs/@backstage/core-plugin-api.md#1107))

#### 1.10.7

##### Patch Changes

- [`73f6cc3`](https://github.com/backstage/backstage/commit/73f6cc3): The `TranslationApi` now supports interpolation of JSX elements by passing them directly as values to the translation function. If any of the provided interpolation values are JSX elements, the translation function will return a JSX element instead of a string.

### `@backstage/create-app` (0.6.1 → [0.6.2](../../changelogs/@backstage/create-app.md#062))

#### 0.6.2

##### Patch Changes

- [`8448948`](https://github.com/backstage/backstage/commit/8448948): Removed `lerna-debug.log*` pattern from `.gitignore` as Lerna was removed from the package in version `@backstage/create-app@0.5.19`.
- [`ce2cf32`](https://github.com/backstage/backstage/commit/ce2cf32): Bumped create-app version.
- [`125d096`](https://github.com/backstage/backstage/commit/125d096): Bumped create-app version.
- [`1c0cb7b`](https://github.com/backstage/backstage/commit/1c0cb7b): Bumped create-app version.

### `@backstage/frontend-app-api` (0.11.1 → [0.11.2](../../changelogs/@backstage/frontend-app-api.md#0112))

#### 0.11.2

##### Patch Changes

- [`173db8f`](https://github.com/backstage/backstage/commit/173db8f): Updates to use the new `plugin` property of `AppNodeSpec`.
- [`1f04491`](https://github.com/backstage/backstage/commit/1f04491): Added the ability to ignore unknown extension config by passing `{ flags: { allowUnknownExtensionConfig: true } }` to `createSpecializedApp`.
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

### `@backstage/frontend-plugin-api` (0.10.1 → [0.10.2](../../changelogs/@backstage/frontend-plugin-api.md#0102))

#### 0.10.2

##### Patch Changes

- [`173db8f`](https://github.com/backstage/backstage/commit/173db8f): The `source` property of `AppNodeSpec` has been renamed to `plugin`. The old property has been deprecated and will be removed in a future release.
- [`fb58f20`](https://github.com/backstage/backstage/commit/fb58f20): The `id` option of `createFrontendPlugin` has been renamed to `pluginId` in order to better align with similar APIs in the frontend and backend systems.

  The old `id` option is deprecated and will be removed in a future release.

- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

### `@backstage/frontend-test-utils` (0.3.1 → [0.3.2](../../changelogs/@backstage/frontend-test-utils.md#032))

#### 0.3.2

##### Patch Changes

- [`fb58f20`](https://github.com/backstage/backstage/commit/fb58f20): Internal update to use the new `pluginId` option of `createFrontendPlugin`.

### `@backstage/integration-aws-node` (0.1.15 → [0.1.16](../../changelogs/@backstage/integration-aws-node.md#0116))

#### 0.1.16

##### Patch Changes

- [`db4630e`](https://github.com/backstage/backstage/commit/db4630e): Fixed bug in DefaultAwsCredentialsManager where aws.mainAccount.region has no effect on the STS region used for account ID lookup during credential provider lookup when falling back to the main account, and it does not default to us-east-1

### `@backstage/plugin-api-docs` (0.12.6 → [0.12.7](../../changelogs/@backstage/plugin-api-docs.md#0127))

#### 0.12.7

##### Patch Changes

- [`fb58f20`](https://github.com/backstage/backstage/commit/fb58f20): Internal update to use the new `pluginId` option of `createFrontendPlugin`.
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

### `@backstage/plugin-app` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-app.md#019))

#### 0.1.9

##### Patch Changes

- [`fb58f20`](https://github.com/backstage/backstage/commit/fb58f20): Internal update to use the new `pluginId` option of `createFrontendPlugin`.

### `@backstage/plugin-app-visualizer` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-app-visualizer.md#0119))

#### 0.1.19

##### Patch Changes

- [`fb58f20`](https://github.com/backstage/backstage/commit/fb58f20): Internal update to use the new `pluginId` option of `createFrontendPlugin`.

### `@backstage/plugin-auth-backend-module-atlassian-provider` (0.4.2 → [0.4.3](../../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#043))

#### 0.4.3

##### Patch Changes

- [`5cc1f7f`](https://github.com/backstage/backstage/commit/5cc1f7f): Introduce `dangerouslyAllowSignInWithoutUserInCatalog` auth resolver config.

### `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.4.2 → [0.4.3](../../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#043))

#### 0.4.3

##### Patch Changes

- [`5cc1f7f`](https://github.com/backstage/backstage/commit/5cc1f7f): Introduce `dangerouslyAllowSignInWithoutUserInCatalog` auth resolver config.

### `@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-auth-backend-module-azure-easyauth-provider.md#028))

#### 0.2.8

##### Patch Changes

- [`5cc1f7f`](https://github.com/backstage/backstage/commit/5cc1f7f): Introduce `dangerouslyAllowSignInWithoutUserInCatalog` auth resolver config.

### `@backstage/plugin-auth-backend-module-bitbucket-provider` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-provider.md#033))

#### 0.3.3

##### Patch Changes

- [`5cc1f7f`](https://github.com/backstage/backstage/commit/5cc1f7f): Introduce `dangerouslyAllowSignInWithoutUserInCatalog` auth resolver config.

### `@backstage/plugin-auth-backend-module-bitbucket-server-provider` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-server-provider.md#023))

#### 0.2.3

##### Patch Changes

- [`5cc1f7f`](https://github.com/backstage/backstage/commit/5cc1f7f): Introduce `dangerouslyAllowSignInWithoutUserInCatalog` auth resolver config.

### `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.4.2 → [0.4.3](../../changelogs/@backstage/plugin-auth-backend-module-cloudflare-access-provider.md#043))

#### 0.4.3

##### Patch Changes

- [`5cc1f7f`](https://github.com/backstage/backstage/commit/5cc1f7f): Introduce `dangerouslyAllowSignInWithoutUserInCatalog` auth resolver config.

### `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.4.2 → [0.4.3](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#043))

#### 0.4.3

##### Patch Changes

- [`5cc1f7f`](https://github.com/backstage/backstage/commit/5cc1f7f): Introduce `dangerouslyAllowSignInWithoutUserInCatalog` auth resolver config.

### `@backstage/plugin-auth-backend-module-github-provider` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#033))

#### 0.3.3

##### Patch Changes

- [`5cdfe05`](https://github.com/backstage/backstage/commit/5cdfe05): Added missing types package
- [`5cc1f7f`](https://github.com/backstage/backstage/commit/5cc1f7f): Introduce `dangerouslyAllowSignInWithoutUserInCatalog` auth resolver config.

### `@backstage/plugin-auth-backend-module-gitlab-provider` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#033))

#### 0.3.3

##### Patch Changes

- [`5cc1f7f`](https://github.com/backstage/backstage/commit/5cc1f7f): Introduce `dangerouslyAllowSignInWithoutUserInCatalog` auth resolver config.

### `@backstage/plugin-auth-backend-module-google-provider` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#033))

#### 0.3.3

##### Patch Changes

- [`5cc1f7f`](https://github.com/backstage/backstage/commit/5cc1f7f): Introduce `dangerouslyAllowSignInWithoutUserInCatalog` auth resolver config.

### `@backstage/plugin-auth-backend-module-microsoft-provider` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#033))

#### 0.3.3

##### Patch Changes

- [`5cc1f7f`](https://github.com/backstage/backstage/commit/5cc1f7f): Introduce `dangerouslyAllowSignInWithoutUserInCatalog` auth resolver config.

### `@backstage/plugin-auth-backend-module-oauth2-provider` (0.4.2 → [0.4.3](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#043))

#### 0.4.3

##### Patch Changes

- [`5cc1f7f`](https://github.com/backstage/backstage/commit/5cc1f7f): Introduce `dangerouslyAllowSignInWithoutUserInCatalog` auth resolver config.

### `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#028))

#### 0.2.8

##### Patch Changes

- [`5cc1f7f`](https://github.com/backstage/backstage/commit/5cc1f7f): Introduce `dangerouslyAllowSignInWithoutUserInCatalog` auth resolver config.

### `@backstage/plugin-auth-backend-module-oidc-provider` (0.4.2 → [0.4.3](../../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#043))

#### 0.4.3

##### Patch Changes

- [`5cc1f7f`](https://github.com/backstage/backstage/commit/5cc1f7f): Introduce `dangerouslyAllowSignInWithoutUserInCatalog` auth resolver config.

### `@backstage/plugin-auth-backend-module-okta-provider` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#023))

#### 0.2.3

##### Patch Changes

- [`5cc1f7f`](https://github.com/backstage/backstage/commit/5cc1f7f): Introduce `dangerouslyAllowSignInWithoutUserInCatalog` auth resolver config.

### `@backstage/plugin-auth-backend-module-onelogin-provider` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-auth-backend-module-onelogin-provider.md#033))

#### 0.3.3

##### Patch Changes

- [`5cc1f7f`](https://github.com/backstage/backstage/commit/5cc1f7f): Introduce `dangerouslyAllowSignInWithoutUserInCatalog` auth resolver config.

### `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.5.2 → [0.5.3](../../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#053))

#### 0.5.3

##### Patch Changes

- [`5cc1f7f`](https://github.com/backstage/backstage/commit/5cc1f7f): Introduce `dangerouslyAllowSignInWithoutUserInCatalog` auth resolver config.

### `@backstage/plugin-auth-node` (0.6.2 → [0.6.3](../../changelogs/@backstage/plugin-auth-node.md#063))

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

### `@backstage/plugin-auth-react` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-auth-react.md#0115))

#### 0.1.15

##### Patch Changes

- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

### `@backstage/plugin-catalog-backend-module-aws` (0.4.10 → [0.4.11](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#0411))

#### 0.4.11

##### Patch Changes

- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

### `@backstage/plugin-catalog-backend-module-azure` (0.3.4 → [0.3.5](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#035))

#### 0.3.5

##### Patch Changes

- [`be82d83`](https://github.com/backstage/backstage/commit/be82d83): visualstudio.com domains are now supported along with dev.azure.com

### `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.5.1 → [0.5.2](../../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#052))

#### 0.5.2

##### Patch Changes

- [`d385854`](https://github.com/backstage/backstage/commit/d385854): Do not swallow errors; instead allow them to bubble up to the task scheduler for better tracking and logging.
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.4.7 → [0.4.8](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#048))

#### 0.4.8

##### Patch Changes

- [`3bce578`](https://github.com/backstage/backstage/commit/3bce578): Support Bitbucket Cloud's `repo:updated` events at `BitbucketCloudEntityProvider`.

  To make use of the new event type, you have to configure your webhook or add a new ones
  that delivers this event type to Backstage similar to `repo:push` before.

  Only `repo:updated` events that modify a repository's URL (e.g., due to a name change)
  will cause changes (removing the "old", adding the "new" repository).

### `@backstage/plugin-catalog-backend-module-github-org` (0.3.9 → [0.3.10](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#0310))

#### 0.3.10

##### Patch Changes

- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

### `@backstage/plugin-catalog-backend-module-gitlab` (0.6.5 → [0.6.6](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#066))

#### 0.6.6

##### Patch Changes

- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

### `@backstage/plugin-catalog-backend-module-ldap` (0.11.4 → [0.11.5](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0115))

#### 0.11.5

##### Patch Changes

- [`e253d1d`](https://github.com/backstage/backstage/commit/e253d1d): Improves error reporting for missing metadata.name in LDAP catalog provider.

### `@backstage/plugin-catalog-backend-module-logs` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-catalog-backend-module-logs.md#0110))

#### 0.1.10

##### Patch Changes

- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

### `@backstage/plugin-catalog-graph` (0.4.18 → [0.4.19](../../changelogs/@backstage/plugin-catalog-graph.md#0419))

#### 0.4.19

##### Patch Changes

- [`fb58f20`](https://github.com/backstage/backstage/commit/fb58f20): Internal update to use the new `pluginId` option of `createFrontendPlugin`.
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos
- [`1307f00`](https://github.com/backstage/backstage/commit/1307f00): Fix rendering of missing relations

### `@backstage/plugin-catalog-unprocessed-entities` (0.2.16 → [0.2.17](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#0217))

#### 0.2.17

##### Patch Changes

- [`fb58f20`](https://github.com/backstage/backstage/commit/fb58f20): Internal update to use the new `pluginId` option of `createFrontendPlugin`.

### `@backstage/plugin-devtools` (0.1.26 → [0.1.27](../../changelogs/@backstage/plugin-devtools.md#0127))

#### 0.1.27

##### Patch Changes

- [`fb58f20`](https://github.com/backstage/backstage/commit/fb58f20): Internal update to use the new `pluginId` option of `createFrontendPlugin`.

### `@backstage/plugin-events-backend-module-gitlab` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#031))

#### 0.3.1

##### Patch Changes

- [`a820df1`](https://github.com/backstage/backstage/commit/a820df1): Adds support for `object_kind` field with priority over `event_name` on Gitlab webhook event types

### `@backstage/plugin-home` (0.8.7 → [0.8.8](../../changelogs/@backstage/plugin-home.md#088))

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

### `@backstage/plugin-home-react` (0.1.25 → [0.1.26](../../changelogs/@backstage/plugin-home-react.md#0126))

#### 0.1.26

##### Patch Changes

- [`16eb4bf`](https://github.com/backstage/backstage/commit/16eb4bf): Export ContentModal from `@backstage/plugin-home-react` so people can use this in other scenarios.
  Renamed `CatalogReactComponentsNameToClassKey` to `PluginHomeComponentsNameToClassKey` in `overridableComponents.ts`

  Made QuickStartCard `docsLinkTitle` prop more flexible to allow for any React.JSX.Element instead of just a string.
  Added QuickStartCard prop `additionalContent` which can eventually replace the prop `video`.

### `@backstage/plugin-kubernetes` (0.12.6 → [0.12.7](../../changelogs/@backstage/plugin-kubernetes.md#0127))

#### 0.12.7

##### Patch Changes

- [`fb58f20`](https://github.com/backstage/backstage/commit/fb58f20): Internal update to use the new `pluginId` option of `createFrontendPlugin`.
- [`216c6b2`](https://github.com/backstage/backstage/commit/216c6b2): Updated dependency `@kubernetes/client-node` to `1.1.2`.
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

### `@backstage/plugin-kubernetes-backend` (0.19.5 → [0.19.6](../../changelogs/@backstage/plugin-kubernetes-backend.md#0196))

#### 0.19.6

##### Patch Changes

- [`f6f692c`](https://github.com/backstage/backstage/commit/f6f692c): Changed logging of cluster details to debug to minimise log clutter.
- [`216c6b2`](https://github.com/backstage/backstage/commit/216c6b2): Updated dependency `@kubernetes/client-node` to `1.1.2`.
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

### `@backstage/plugin-kubernetes-common` (0.9.4 → [0.9.5](../../changelogs/@backstage/plugin-kubernetes-common.md#095))

#### 0.9.5

##### Patch Changes

- [`216c6b2`](https://github.com/backstage/backstage/commit/216c6b2): Updated dependency `@kubernetes/client-node` to `1.1.2`.
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

### `@backstage/plugin-kubernetes-react` (0.5.6 → [0.5.7](../../changelogs/@backstage/plugin-kubernetes-react.md#057))

#### 0.5.7

##### Patch Changes

- [`599c89e`](https://github.com/backstage/backstage/commit/599c89e): Add headlamp formatter
- [`216c6b2`](https://github.com/backstage/backstage/commit/216c6b2): Updated dependency `@kubernetes/client-node` to `1.1.2`.
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

### `@backstage/plugin-notifications` (0.5.4 → [0.5.5](../../changelogs/@backstage/plugin-notifications.md#055))

#### 0.5.5

##### Patch Changes

- [`fb58f20`](https://github.com/backstage/backstage/commit/fb58f20): Internal update to use the new `pluginId` option of `createFrontendPlugin`.

### `@backstage/plugin-notifications-backend-module-email` (0.3.8 → [0.3.9](../../changelogs/@backstage/plugin-notifications-backend-module-email.md#039))

#### 0.3.9

##### Patch Changes

- [`aa3a63a`](https://github.com/backstage/backstage/commit/aa3a63a): Enable the ability to configure the endpoint for the SES connection used in the notifications email module. This enables the configuration of alternate endpoints as required, for example for local testing or alternative stacks.

### `@backstage/plugin-notifications-backend-module-slack` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-notifications-backend-module-slack.md#011))

#### 0.1.1

##### Patch Changes

- [`4f10768`](https://github.com/backstage/backstage/commit/4f10768): Fix slack notification processor to handle a notification with an empty description
- [`f6480c7`](https://github.com/backstage/backstage/commit/f6480c7): Fix dataloader caching, and use the proper catalog service ref
- [`a1c5bbb`](https://github.com/backstage/backstage/commit/a1c5bbb): Added email-based Slack User ID lookup if `metadata.annotations.slack.com/bot-notify` is missing from user entity
- [`e099d0a`](https://github.com/backstage/backstage/commit/e099d0a): Notifications which mention user entity refs are now replaced with Slack compatible mentions.

  Example: `Welcome <@user:default/billy>!` -> `Welcome <@U123456890>!`

### `@backstage/plugin-org` (0.6.38 → [0.6.39](../../changelogs/@backstage/plugin-org.md#0639))

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

### `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.3.9 → [0.3.10](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket.md#0310))

#### 0.3.10

##### Patch Changes

- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

### `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#029))

#### 0.2.9

##### Patch Changes

- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

### `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#029))

#### 0.2.9

##### Patch Changes

- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

### `@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#029))

#### 0.2.9

##### Patch Changes

- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

### `@backstage/plugin-scaffolder-backend-module-github` (0.7.0 → [0.7.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#071))

#### 0.7.1

##### Patch Changes

- [`6579c2c`](https://github.com/backstage/backstage/commit/6579c2c): Use action context logger in Octokit client
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos
- [`b2b654c`](https://github.com/backstage/backstage/commit/b2b654c): Added optional assignees parameter to `publish:github:pull-request` action

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.9.0 → [0.9.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#091))

#### 0.9.1

##### Patch Changes

- [`d15355c`](https://github.com/backstage/backstage/commit/d15355c): If the commit action is not `create` log a more appropriate error message to the end user advising that the files they're trying to modify might not exist
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

### `@backstage/plugin-scaffolder-backend-module-notifications` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-scaffolder-backend-module-notifications.md#0110))

#### 0.1.10

##### Patch Changes

- [`b60253d`](https://github.com/backstage/backstage/commit/b60253d): Change notification send scaffolder action to use native zod schemas

### `@backstage/plugin-scaffolder-node` (0.8.1 → [0.8.2](../../changelogs/@backstage/plugin-scaffolder-node.md#082))

#### 0.8.2

##### Patch Changes

- [`16e2e9c`](https://github.com/backstage/backstage/commit/16e2e9c): trim leading and trailing slashes from parseRepoUrl query parameters
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos
- [`ec42f8e`](https://github.com/backstage/backstage/commit/ec42f8e): Generating new tokens on each Scaffolder Task Retry

### `@backstage/plugin-scaffolder-node-test-utils` (0.2.1 → [0.2.2](../../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#022))

#### 0.2.2

##### Patch Changes

- [`b27c48d`](https://github.com/backstage/backstage/commit/b27c48d): Include optional `user` in `createMockActionContext`

### `@backstage/plugin-search` (1.4.25 → [1.4.26](../../changelogs/@backstage/plugin-search.md#1426))

#### 1.4.26

##### Patch Changes

- [`fb58f20`](https://github.com/backstage/backstage/commit/fb58f20): Internal update to use the new `pluginId` option of `createFrontendPlugin`.
- [`fa48594`](https://github.com/backstage/backstage/commit/fa48594): search plugin support i18n

### `@backstage/plugin-search-backend-module-elasticsearch` (1.7.1 → [1.7.2](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#172))

#### 1.7.2

##### Patch Changes

- [`01f772c`](https://github.com/backstage/backstage/commit/01f772c): Fixed an issue where the `search.elasticsearch.queryOptions` config were not picked up by the `ElasticSearchSearchEngine`.
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

### `@backstage/plugin-techdocs` (1.12.5 → [1.12.6](../../changelogs/@backstage/plugin-techdocs.md#1126))

#### 1.12.6

##### Patch Changes

- [`fb58f20`](https://github.com/backstage/backstage/commit/fb58f20): Internal update to use the new `pluginId` option of `createFrontendPlugin`.
- [`7d445da`](https://github.com/backstage/backstage/commit/7d445da): Update keyboard focus on when clicking hash links. This fixes the issue where the "skip to content" link rendered by Material MkDocs isn't focused when used.
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos
- [`2ffd273`](https://github.com/backstage/backstage/commit/2ffd273): Add hover and focus styling to the "copy to clipboard" button within codeblocks in techdocs. Also added an aria-label to the button for accessibility.

### `@backstage/plugin-techdocs-backend` (2.0.1 → [2.0.2](../../changelogs/@backstage/plugin-techdocs-backend.md#202))

#### 2.0.2

##### Patch Changes

- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

### `@backstage/plugin-techdocs-node` (1.13.2 → [1.13.3](../../changelogs/@backstage/plugin-techdocs-node.md#1133))

#### 1.13.3

##### Patch Changes

- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

### `@backstage/plugin-techdocs-react` (1.2.16 → [1.2.17](../../changelogs/@backstage/plugin-techdocs-react.md#1217))

#### 1.2.17

##### Patch Changes

- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

### `@backstage/plugin-user-settings` (0.8.21 → [0.8.22](../../changelogs/@backstage/plugin-user-settings.md#0822))

#### 0.8.22

##### Patch Changes

- [`a7bfdb6`](https://github.com/backstage/backstage/commit/a7bfdb6): plugin-user-settingsgs support i18n
- [`fb58f20`](https://github.com/backstage/backstage/commit/fb58f20): Internal update to use the new `pluginId` option of `createFrontendPlugin`.
- [`5b04b14`](https://github.com/backstage/backstage/commit/5b04b14): Uppercase language name in language select

### `@backstage/repo-tools` (0.13.2 → [0.13.3](../../changelogs/@backstage/repo-tools.md#0133))

#### 0.13.3

##### Patch Changes

- [`b229476`](https://github.com/backstage/backstage/commit/b229476): Support passing additional properties to OpenAPI server generator
- [`659f2ce`](https://github.com/backstage/backstage/commit/659f2ce): Updated dependency `typedoc` to `^0.28.0`.
- [`72d019d`](https://github.com/backstage/backstage/commit/72d019d): Removed various typos

### `@backstage/test-utils` (1.7.7 → [1.7.8](../../changelogs/@backstage/test-utils.md#178))

#### 1.7.8

##### Patch Changes

- [`b573341`](https://github.com/backstage/backstage/commit/b573341): Added support for interpolating JSX elements with the `MockTranslationApi`.

### `@backstage/theme` (0.6.5 → [0.6.6](../../changelogs/@backstage/theme.md#066))

#### 0.6.6

##### Patch Changes

- [`1b14572`](https://github.com/backstage/backstage/commit/1b14572): Show arrow when MuiTableSortLabel receives focus

## Excluded dependency updates

- `@backstage/app-defaults` (1.6.1 → [1.6.2](../../changelogs/@backstage/app-defaults.md#162))
- `@backstage/backend-openapi-utils` (0.5.2 → [0.5.3](../../changelogs/@backstage/backend-openapi-utils.md#053))
- `@backstage/dev-utils` (1.1.9 → [1.1.10](../../changelogs/@backstage/dev-utils.md#1110))
- `@backstage/frontend-defaults` (0.2.1 → [0.2.2](../../changelogs/@backstage/frontend-defaults.md#022))
- `@backstage/frontend-dynamic-feature-loader` (0.1.0 → [0.1.1](../../changelogs/@backstage/frontend-dynamic-feature-loader.md#011))
- `@backstage/integration-react` (1.2.6 → [1.2.7](../../changelogs/@backstage/integration-react.md#127))
- `@backstage/plugin-app-backend` (0.5.1 → [0.5.2](../../changelogs/@backstage/plugin-app-backend.md#052))
- `@backstage/plugin-app-node` (0.1.32 → [0.1.33](../../changelogs/@backstage/plugin-app-node.md#0133))
- `@backstage/plugin-auth-backend-module-auth0-provider` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-auth-backend-module-auth0-provider.md#023))
- `@backstage/plugin-auth-backend-module-guest-provider` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-auth-backend-module-guest-provider.md#028))
- `@backstage/plugin-auth-backend-module-pinniped-provider` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#033))
- `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.4.0 → [0.4.1](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#041))
- `@backstage/plugin-catalog-backend-module-gcp` (0.3.7 → [0.3.8](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#038))
- `@backstage/plugin-catalog-backend-module-gerrit` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#032))
- `@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab-org.md#029))
- `@backstage/plugin-catalog-backend-module-openapi` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0210))
- `@backstage/plugin-catalog-backend-module-puppetdb` (0.2.9 → [0.2.10](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0210))
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#028))
- `@backstage/plugin-catalog-common` (1.1.3 → [1.1.4](../../changelogs/@backstage/plugin-catalog-common.md#114))
- `@backstage/plugin-catalog-unprocessed-entities-common` (0.0.7 → [0.0.8](../../changelogs/@backstage/plugin-catalog-unprocessed-entities-common.md#008))
- `@backstage/plugin-config-schema` (0.1.67 → [0.1.68](../../changelogs/@backstage/plugin-config-schema.md#0168))
- `@backstage/plugin-devtools-backend` (0.5.4 → [0.5.5](../../changelogs/@backstage/plugin-devtools-backend.md#055))
- `@backstage/plugin-devtools-common` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-devtools-common.md#0116))
- `@backstage/plugin-events-backend` (0.5.1 → [0.5.2](../../changelogs/@backstage/plugin-events-backend.md#052))
- `@backstage/plugin-events-backend-module-aws-sqs` (0.4.10 → [0.4.11](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#0411))
- `@backstage/plugin-events-backend-module-azure` (0.2.19 → [0.2.20](../../changelogs/@backstage/plugin-events-backend-module-azure.md#0220))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.19 → [0.2.20](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0220))
- `@backstage/plugin-events-backend-module-bitbucket-server` (0.1.0 → [0.1.1](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-server.md#011))
- `@backstage/plugin-events-backend-module-gerrit` (0.2.19 → [0.2.20](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0220))
- `@backstage/plugin-events-backend-test-utils` (0.1.43 → [0.1.44](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0144))
- `@backstage/plugin-events-node` (0.4.10 → [0.4.11](../../changelogs/@backstage/plugin-events-node.md#0411))
- `@backstage/plugin-gateway-backend` (1.0.0 → [1.0.1](../../changelogs/@backstage/plugin-gateway-backend.md#101))
- `@backstage/plugin-notifications-backend` (0.5.5 → [0.5.6](../../changelogs/@backstage/plugin-notifications-backend.md#056))
- `@backstage/plugin-notifications-node` (0.2.14 → [0.2.15](../../changelogs/@backstage/plugin-notifications-node.md#0215))
- `@backstage/plugin-org-react` (0.1.37 → [0.1.38](../../changelogs/@backstage/plugin-org-react.md#0138))
- `@backstage/plugin-permission-backend-module-allow-all-policy` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#028))
- `@backstage/plugin-permission-react` (0.4.33 → [0.4.34](../../changelogs/@backstage/plugin-permission-react.md#0434))
- `@backstage/plugin-proxy-backend` (0.6.1 → [0.6.2](../../changelogs/@backstage/plugin-proxy-backend.md#062))
- `@backstage/plugin-proxy-node` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-proxy-node.md#014))
- `@backstage/plugin-scaffolder-backend-module-azure` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#029))
- `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.8 → [0.3.9](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#039))
- `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.9 → [0.3.10](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0310))
- `@backstage/plugin-scaffolder-backend-module-gcp` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-scaffolder-backend-module-gcp.md#029))
- `@backstage/plugin-scaffolder-backend-module-gitea` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#029))
- `@backstage/plugin-scaffolder-backend-module-rails` (0.5.8 → [0.5.9](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#059))
- `@backstage/plugin-scaffolder-backend-module-sentry` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#029))
- `@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.9 → [0.4.10](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0410))
- `@backstage/plugin-scaffolder-common` (1.5.10 → [1.5.11](../../changelogs/@backstage/plugin-scaffolder-common.md#1511))
- `@backstage/plugin-search-backend` (2.0.1 → [2.0.2](../../changelogs/@backstage/plugin-search-backend.md#202))
- `@backstage/plugin-search-backend-module-catalog` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#034))
- `@backstage/plugin-search-backend-module-explore` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-search-backend-module-explore.md#032))
- `@backstage/plugin-search-backend-module-pg` (0.5.43 → [0.5.44](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0544))
- `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.3.8 → [0.3.9](../../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#039))
- `@backstage/plugin-search-backend-module-techdocs` (0.4.1 → [0.4.2](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#042))
- `@backstage/plugin-search-backend-node` (1.3.10 → [1.3.11](../../changelogs/@backstage/plugin-search-backend-node.md#1311))
- `@backstage/plugin-search-common` (1.2.17 → [1.2.18](../../changelogs/@backstage/plugin-search-common.md#1218))
- `@backstage/plugin-signals-backend` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-signals-backend.md#034))
- `@backstage/plugin-signals-node` (0.1.19 → [0.1.20](../../changelogs/@backstage/plugin-signals-node.md#0120))
- `@backstage/plugin-signals-react` (0.0.12 → [0.0.13](../../changelogs/@backstage/plugin-signals-react.md#0013))
- `@backstage/plugin-techdocs-addons-test-utils` (1.0.47 → [1.0.48](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#1048))
- `@backstage/plugin-techdocs-module-addons-contrib` (1.1.23 → [1.1.24](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1124))
- `@backstage/plugin-user-settings-backend` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-user-settings-backend.md#032))
- `@techdocs/cli` (1.9.2 → [1.9.3](../../changelogs/@techdocs/cli.md#193))
