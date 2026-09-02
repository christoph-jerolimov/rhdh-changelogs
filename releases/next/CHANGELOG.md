# RHDH Release next changelog

Changes between Backstage 1.54.6 (RHDH 1.11-m2) and Backstage 1.55.0-next.1 (RHDH next) — 2 added, 0 removed, 175 upgraded, 35 unchanged packages.

## Summary

- [Newly added packages](#newly-added-packages): 2 packages
- [Breaking changes](#breaking-changes): 1 package
- [0.x minor version bumps](#0x-minor-version-bumps): 1 package
- [0.x patch version bumps](#0x-patch-version-bumps): 43 packages
- [Other minor version bumps](#other-minor-version-bumps): 6 packages
- [Other patch version bumps](#other-patch-version-bumps): 11 packages
- [Excluded dependency updates](#excluded-dependency-updates): 113 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/cli-module-package-manager-yarn` (new, 0.1.1-next.0)](#backstagecli-module-package-manager-yarn-new-011-next0)
  - [`@backstage/plugin-scaffolder-backend-module-workspace-database` (new, 0.1.0-next.1)](#backstageplugin-scaffolder-backend-module-workspace-database-new-010-next1)
- [Breaking changes](#breaking-changes)
  - [`@backstage/ui` (0.17.1 → 0.18.0-next.1)](#backstageui-0171--0180-next1)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/plugin-catalog-backend-module-github` (0.13.5 → 0.14.0-next.0)](#backstageplugin-catalog-backend-module-github-0135--0140-next0)
- [0.x patch version bumps](#0x-patch-version-bumps)
  - [`@backstage/backend-defaults` (0.17.8 → 0.17.9-next.0)](#backstagebackend-defaults-0178--0179-next0)
  - [`@backstage/backend-openapi-utils` (0.7.1 → 0.7.2-next.0)](#backstagebackend-openapi-utils-071--072-next0)
  - [`@backstage/cli-defaults` (0.1.5 → 0.1.6-next.1)](#backstagecli-defaults-015--016-next1)
  - [`@backstage/cli-module-build` (0.1.7 → 0.1.8-next.1)](#backstagecli-module-build-017--018-next1)
  - [`@backstage/cli-module-new` (0.1.6 → 0.1.7-next.0)](#backstagecli-module-new-016--017-next0)
  - [`@backstage/core-components` (0.18.13 → 0.18.14-next.1)](#backstagecore-components-01813--01814-next1)
  - [`@backstage/create-app` (0.9.1 → 0.9.2-next.1)](#backstagecreate-app-091--092-next1)
  - [`@backstage/filter-predicates` (0.1.4 → 0.1.5-next.0)](#backstagefilter-predicates-014--015-next0)
  - [`@backstage/frontend-app-api` (0.16.7 → 0.16.8-next.1)](#backstagefrontend-app-api-0167--0168-next1)
  - [`@backstage/frontend-plugin-api` (0.18.0 → 0.18.1-next.0)](#backstagefrontend-plugin-api-0180--0181-next0)
  - [`@backstage/frontend-test-utils` (0.6.3 → 0.6.4-next.1)](#backstagefrontend-test-utils-063--064-next1)
  - [`@backstage/plugin-app` (0.5.2 → 0.5.3-next.1)](#backstageplugin-app-052--053-next1)
  - [`@backstage/plugin-app-module-user-settings` (0.1.1 → 0.1.2-next.1)](#backstageplugin-app-module-user-settings-011--012-next1)
  - [`@backstage/plugin-auth-backend` (0.30.0 → 0.30.1-next.1)](#backstageplugin-auth-backend-0300--0301-next1)
  - [`@backstage/plugin-auth-backend-module-oidc-provider` (0.4.20 → 0.4.21-next.1)](#backstageplugin-auth-backend-module-oidc-provider-0420--0421-next1)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.4.27 → 0.4.28-next.1)](#backstageplugin-catalog-backend-module-aws-0427--0428-next1)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.3.21 → 0.3.22-next.0)](#backstageplugin-catalog-backend-module-azure-0321--0322-next0)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.8.7 → 0.8.8-next.1)](#backstageplugin-catalog-backend-module-gitlab-087--088-next1)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.10.5 → 0.10.6-next.0)](#backstageplugin-catalog-backend-module-msgraph-0105--0106-next0)
  - [`@backstage/plugin-catalog-import` (0.13.17 → 0.13.18-next.1)](#backstageplugin-catalog-import-01317--01318-next1)
  - [`@backstage/plugin-catalog-unprocessed-entities` (0.2.34 → 0.2.35-next.1)](#backstageplugin-catalog-unprocessed-entities-0234--0235-next1)
  - [`@backstage/plugin-devtools` (0.1.42 → 0.1.43-next.1)](#backstageplugin-devtools-0142--0143-next1)
  - [`@backstage/plugin-home` (0.9.9 → 0.9.10-next.1)](#backstageplugin-home-099--0910-next1)
  - [`@backstage/plugin-kubernetes` (0.12.22 → 0.12.23-next.1)](#backstageplugin-kubernetes-01222--01223-next1)
  - [`@backstage/plugin-kubernetes-backend` (0.21.10 → 0.21.11-next.1)](#backstageplugin-kubernetes-backend-02110--02111-next1)
  - [`@backstage/plugin-kubernetes-common` (0.9.12 → 0.9.13-next.0)](#backstageplugin-kubernetes-common-0912--0913-next0)
  - [`@backstage/plugin-kubernetes-node` (0.4.7 → 0.4.8-next.1)](#backstageplugin-kubernetes-node-047--048-next1)
  - [`@backstage/plugin-kubernetes-react` (0.5.23 → 0.5.24-next.1)](#backstageplugin-kubernetes-react-0523--0524-next1)
  - [`@backstage/plugin-notifications` (0.5.20 → 0.5.21-next.1)](#backstageplugin-notifications-0520--0521-next1)
  - [`@backstage/plugin-notifications-backend-module-email` (0.3.24 → 0.3.25-next.0)](#backstageplugin-notifications-backend-module-email-0324--0325-next0)
  - [`@backstage/plugin-proxy-backend` (0.6.17 → 0.6.18-next.0)](#backstageplugin-proxy-backend-0617--0618-next0)
  - [`@backstage/plugin-scaffolder-backend-module-azure` (0.2.25 → 0.2.26-next.1)](#backstageplugin-scaffolder-backend-module-azure-0225--0226-next1)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.3.10 → 0.3.11-next.1)](#backstageplugin-scaffolder-backend-module-bitbucket-cloud-0310--0311-next1)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.25 → 0.2.26-next.1)](#backstageplugin-scaffolder-backend-module-bitbucket-server-0225--0226-next1)
  - [`@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.25 → 0.3.26-next.1)](#backstageplugin-scaffolder-backend-module-confluence-to-markdown-0325--0326-next1)
  - [`@backstage/plugin-scaffolder-backend-module-gcp` (0.2.24 → 0.2.25-next.1)](#backstageplugin-scaffolder-backend-module-gcp-0224--0225-next1)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.9.13 → 0.9.14-next.1)](#backstageplugin-scaffolder-backend-module-github-0913--0914-next1)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.11.10 → 0.11.11-next.1)](#backstageplugin-scaffolder-backend-module-gitlab-01110--01111-next1)
  - [`@backstage/plugin-scaffolder-node` (0.13.6 → 0.13.7-next.1)](#backstageplugin-scaffolder-node-0136--0137-next1)
  - [`@backstage/plugin-search-backend-module-catalog` (0.3.18 → 0.3.19-next.1)](#backstageplugin-search-backend-module-catalog-0318--0319-next1)
  - [`@backstage/plugin-search-backend-module-techdocs` (0.4.17 → 0.4.18-next.1)](#backstageplugin-search-backend-module-techdocs-0417--0418-next1)
  - [`@backstage/plugin-user-settings` (0.9.6 → 0.9.7-next.1)](#backstageplugin-user-settings-096--097-next1)
  - [`@backstage/repo-tools` (0.19.0 → 0.19.1-next.0)](#backstagerepo-tools-0190--0191-next0)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/plugin-scaffolder` (1.38.2 → 1.39.0-next.1)](#backstageplugin-scaffolder-1382--1390-next1)
  - [`@backstage/plugin-scaffolder-backend` (4.1.0 → 4.2.0-next.1)](#backstageplugin-scaffolder-backend-410--420-next1)
  - [`@backstage/plugin-scaffolder-common` (2.2.3 → 2.3.0-next.1)](#backstageplugin-scaffolder-common-223--230-next1)
  - [`@backstage/plugin-scaffolder-react` (2.0.3 → 2.1.0-next.1)](#backstageplugin-scaffolder-react-203--210-next1)
  - [`@backstage/plugin-techdocs-backend` (2.2.4 → 2.3.0-next.0)](#backstageplugin-techdocs-backend-224--230-next0)
  - [`@backstage/plugin-techdocs-node` (1.15.4 → 1.16.0-next.0)](#backstageplugin-techdocs-node-1154--1160-next0)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/integration` (2.1.1 → 2.1.2-next.0)](#backstageintegration-211--212-next0)
  - [`@backstage/plugin-catalog` (2.0.8 → 2.0.9-next.1)](#backstageplugin-catalog-208--209-next1)
  - [`@backstage/plugin-catalog-backend` (3.9.1 → 3.9.2-next.0)](#backstageplugin-catalog-backend-391--392-next0)
  - [`@backstage/plugin-catalog-react` (3.2.2 → 3.2.3-next.1)](#backstageplugin-catalog-react-322--323-next1)
  - [`@backstage/plugin-search` (1.7.7 → 1.7.8-next.1)](#backstageplugin-search-177--178-next1)
  - [`@backstage/plugin-search-backend` (2.1.6 → 2.1.7-next.1)](#backstageplugin-search-backend-216--217-next1)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.8.7 → 1.8.8-next.1)](#backstageplugin-search-backend-module-elasticsearch-187--188-next1)
  - [`@backstage/plugin-techdocs` (1.18.0 → 1.18.1-next.1)](#backstageplugin-techdocs-1180--1181-next1)
  - [`@backstage/plugin-techdocs-addons-test-utils` (2.0.8 → 2.0.9-next.1)](#backstageplugin-techdocs-addons-test-utils-208--209-next1)
  - [`@backstage/test-utils` (1.7.21 → 1.7.22-next.1)](#backstagetest-utils-1721--1722-next1)
  - [`@techdocs/cli` (1.11.4 → 1.11.5-next.1)](#techdocscli-1114--1115-next1)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/cli-module-package-manager-yarn` (new, [0.1.1-next.0](../../changelogs/@backstage/cli-module-package-manager-yarn.md#011-next0))

#### 0.1.1-next.0

##### Patch Changes

- [`de957f6`](https://github.com/backstage/backstage/commit/de957f6): Added `@backstage/cli-module-package-manager-yarn` with `backstage-cli pm
verify-patches` to validate Yarn patch references, local patch files,
  lockfile consistency, and patched Backstage package versions against the
  selected Backstage release. The command is included in
  `@backstage/cli-defaults`.

### `@backstage/plugin-scaffolder-backend-module-workspace-database` (new, [0.1.0-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-workspace-database.md#010-next1))

#### 0.1.0-next.0

##### Minor Changes

- [`e95b649`](https://github.com/backstage/backstage/commit/e95b649): Added task recovery feature with new `scaffolder.taskRecovery` config section. When enabled, tasks that crash or timeout are automatically recovered and resume from the last completed step, task secrets are retained until the task reaches a terminal state so recovery can continue, and completed step outputs are persisted. Enabling recovery applies to all scaffolder tasks, so actions used by those tasks should be idempotent or use checkpoints. When recovery is disabled (the default), the previous behavior is unchanged: secrets are cleared as soon as a task is claimed and retries re-run every step. The new config consolidates previous experimental flags (`EXPERIMENTAL_recoverTasks`, `EXPERIMENTAL_workspaceSerialization`, `EXPERIMENTAL_recoverTasksTimeout`) which remain supported as fallbacks. The legacy workspace provider setting continues to select a provider only when `EXPERIMENTAL_workspaceSerialization` is `true`.

  Workspace serialization for task recovery now requires installing a separate workspace provider module, including when you use the legacy configuration. For development, use `@backstage/plugin-scaffolder-backend-module-workspace-database` (50 MB limit, not recommended for production). On first startup, that module migrates existing database workspace snapshots from the legacy task storage. For production, use `@backstage/plugin-scaffolder-backend-module-gcp` or a similar external storage provider. The scaffolder rejects a configured provider that has not been installed and registered.

  Enabling crash recovery does not keep completed task event streams open; normal task completion remains terminal for event-stream clients.

## Breaking changes

### `@backstage/ui` (0.17.1 → [0.18.0-next.1](../../changelogs/@backstage/ui.md#0180-next1))

#### 0.18.0-next.1

##### Minor Changes

- [`d07e99e`](https://github.com/backstage/backstage/commit/d07e99e): Updated BUI links to use the hosting application's client-side router, including relative destinations and the application's configured router base path, while preserving native browser navigation where required.

  **BREAKING**: Anchor-based components no longer accept the React Aria `render` prop. BUI now owns the underlying anchor so routing behavior remains consistent across application and plugin package versions.

  ListRow, Tag, and table Row now retain client-side navigation when application and plugin packages load separate React Aria copies. Their existing modifier-key, target, download, and link-metadata behavior is unchanged.

  **Migration:**

  Remove `render` props from ButtonLink, ComboboxItem, Link, MenuItem, MenuListBoxItem, SearchAutocompleteItem, SelectItem, and Tab. BUI now selects and renders the appropriate anchor or router link automatically.

  **Affected components:** ButtonLink, Card, ComboboxItem, Header, Link, ListRow, MenuItem, MenuListBoxItem, Row, SearchAutocompleteItem, SelectItem, Tab, Tag

#### 0.17.2-next.0

##### Patch Changes

- [`f914343`](https://github.com/backstage/backstage/commit/f914343): Prevent BUI styles from overriding document and native control line heights while preserving BUI component typography.

## 0.x minor version bumps

### `@backstage/plugin-catalog-backend-module-github` (0.13.5 → [0.14.0-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#0140-next0))

#### 0.14.0-next.0

##### Minor Changes

- [`6ecff59`](https://github.com/backstage/backstage/commit/6ecff59): The GitHub multi-org entity provider now logs a clear warning and aborts ingestion when no GitHub App installation is found for an org, instead of failing with a confusing rate-limit or authentication error. This prevents silent deletion of existing catalog entities.

## 0.x patch version bumps

### `@backstage/backend-defaults` (0.17.8 → [0.17.9-next.0](../../changelogs/@backstage/backend-defaults.md#0179-next0))

#### 0.17.9-next.0

##### Patch Changes

- [`45d760b`](https://github.com/backstage/backstage/commit/45d760b): Improve action handling consistency.
- [`8d71644`](https://github.com/backstage/backstage/commit/8d71644): Reduced PostgreSQL connection churn during backend startup when many plugins initialize databases or schemas.
- [`416be1b`](https://github.com/backstage/backstage/commit/416be1b): Updated Harness URL reading to validate cross-origin redirect destinations
  against `backend.reading.allow`.
- [`5aac521`](https://github.com/backstage/backstage/commit/5aac521): Improved service credential handling during plugin-to-plugin delegation.
- [`61449ae`](https://github.com/backstage/backstage/commit/61449ae): Reduced PostgreSQL startup connections when multiple plugins share a database by reusing the database existence check.
- [`8b3c83e`](https://github.com/backstage/backstage/commit/8b3c83e): Improved input validation and path handling for cloud storage URL readers.
- [`61d97c0`](https://github.com/backstage/backstage/commit/61d97c0): Improved input validation for cloud storage URL readers.
- [`e895def`](https://github.com/backstage/backstage/commit/e895def): Fixed handling of GitLab URLs for instances configured with a relative base path.
- [`e13e278`](https://github.com/backstage/backstage/commit/e13e278): Updated URL reader allow list matching so configured paths match either the exact path or paths below it at a segment boundary.
- [`e3b587c`](https://github.com/backstage/backstage/commit/e3b587c): Improve authentication reliability during signing key rotation by performing budgeted JWKS reloads when a newly published key is requested during the remote key set cooldown.

### `@backstage/backend-openapi-utils` (0.7.1 → [0.7.2-next.0](../../changelogs/@backstage/backend-openapi-utils.md#072-next0))

#### 0.7.2-next.0

##### Patch Changes

- [`bf1f82d`](https://github.com/backstage/backstage/commit/bf1f82d): Added the required OpenAPI types dependency for Swagger Parser.

### `@backstage/cli-defaults` (0.1.5 → [0.1.6-next.1](../../changelogs/@backstage/cli-defaults.md#016-next1))

#### 0.1.6-next.1

##### Patch Changes

- [`de957f6`](https://github.com/backstage/backstage/commit/de957f6): Added `@backstage/cli-module-package-manager-yarn` with `backstage-cli pm
verify-patches` to validate Yarn patch references, local patch files,
  lockfile consistency, and patched Backstage package versions against the
  selected Backstage release. The command is included in
  `@backstage/cli-defaults`.

### `@backstage/cli-module-build` (0.1.7 → [0.1.8-next.1](../../changelogs/@backstage/cli-module-build.md#018-next1))

#### 0.1.8-next.1

##### Patch Changes

- [`277a125`](https://github.com/backstage/backstage/commit/277a125): Fixed declaration bundling of imports that use the `node:` built-in module prefix.

#### 0.1.8-next.0

##### Patch Changes

- [`b2b7568`](https://github.com/backstage/backstage/commit/b2b7568): Significantly improve the performance of `build-workspace` when packaging many Backstage packages.

### `@backstage/cli-module-new` (0.1.6 → [0.1.7-next.0](../../changelogs/@backstage/cli-module-new.md#017-next0))

#### 0.1.7-next.0

##### Patch Changes

- [`4cba335`](https://github.com/backstage/backstage/commit/4cba335): Fixes published entry point configurations so it can be imported reliably in Jest/Node resolution.

### `@backstage/core-components` (0.18.13 → [0.18.14-next.1](../../changelogs/@backstage/core-components.md#01814-next1))

#### 0.18.14-next.1

##### Patch Changes

- [`b80a9f3`](https://github.com/backstage/backstage/commit/b80a9f3): Added an `onCopyLog` prop to the `LogViewer` component that renders a copy button in the toolbar, allowing users to copy all log content to the clipboard.
- [`279fdf6`](https://github.com/backstage/backstage/commit/279fdf6): Declared the DOM Testing Library dependency required by React Testing Library.

### `@backstage/create-app` (0.9.1 → [0.9.2-next.1](../../changelogs/@backstage/create-app.md#092-next1))

#### 0.9.2-next.1

##### Patch Changes

- Bumped create-app version.

#### 0.9.2-next.0

##### Patch Changes

- Bumped create-app version.

### `@backstage/filter-predicates` (0.1.4 → [0.1.5-next.0](../../changelogs/@backstage/filter-predicates.md#015-next0))

#### 0.1.5-next.0

##### Patch Changes

- [`6dcb08a`](https://github.com/backstage/backstage/commit/6dcb08a): Reduced the frontend bundle size by letting bundlers tree-shake zod, which previously pulled every zod locale into the bundle. Takes effect on zod 4.5.0 and newer.

### `@backstage/frontend-app-api` (0.16.7 → [0.16.8-next.1](../../changelogs/@backstage/frontend-app-api.md#0168-next1))

#### 0.16.8-next.1

##### Patch Changes

- [`52022b9`](https://github.com/backstage/backstage/commit/52022b9): Fixed `app.extensions` shorthand and `disabled` field to accept boolean-ish strings (`'true'`/`'false'`), so environment variable substitution can be used to toggle extensions, e.g. `${CATALOG_OVERVIEW_ENABLED}`.

### `@backstage/frontend-plugin-api` (0.18.0 → [0.18.1-next.0](../../changelogs/@backstage/frontend-plugin-api.md#0181-next0))

#### 0.18.1-next.0

##### Patch Changes

- [`024c0ef`](https://github.com/backstage/backstage/commit/024c0ef): Updated internal type imports to avoid circular declaration chunks in package builds.

### `@backstage/frontend-test-utils` (0.6.3 → [0.6.4-next.1](../../changelogs/@backstage/frontend-test-utils.md#064-next1))

#### 0.6.4-next.1

##### Patch Changes

- [`279fdf6`](https://github.com/backstage/backstage/commit/279fdf6): Declared the DOM Testing Library dependency required by React Testing Library.

### `@backstage/plugin-app` (0.5.2 → [0.5.3-next.1](../../changelogs/@backstage/plugin-app.md#053-next1))

#### 0.5.3-next.1

##### Patch Changes

- [`d421187`](https://github.com/backstage/backstage/commit/d421187): Reduced the initial app bundle size by loading page and optional UI implementations only when their extensions render.

#### 0.5.3-next.0

##### Patch Changes

- [`f914343`](https://github.com/backstage/backstage/commit/f914343): Fixed toast text layout when the application does not define a global line height.

### `@backstage/plugin-app-module-user-settings` (0.1.1 → [0.1.2-next.1](../../changelogs/@backstage/plugin-app-module-user-settings.md#012-next1))

#### 0.1.2-next.0

##### Patch Changes

- [`4cba335`](https://github.com/backstage/backstage/commit/4cba335): Fixes published entry point configurations so it can be imported reliably in Jest/Node resolution.

### `@backstage/plugin-auth-backend` (0.30.0 → [0.30.1-next.1](../../changelogs/@backstage/plugin-auth-backend.md#0301-next1))

#### 0.30.1-next.0

##### Patch Changes

- [`08c5d9b`](https://github.com/backstage/backstage/commit/08c5d9b): Fixed inconsistent URL pattern matching in token revocation.

### `@backstage/plugin-auth-backend-module-oidc-provider` (0.4.20 → [0.4.21-next.1](../../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#0421-next1))

#### 0.4.21-next.1

##### Patch Changes

- [`a818233`](https://github.com/backstage/backstage/commit/a818233): Omit email addresses from the default OIDC profile unless the identity provider marks them as verified.

### `@backstage/plugin-catalog-backend-module-aws` (0.4.27 → [0.4.28-next.1](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#0428-next1))

#### 0.4.28-next.1

##### Patch Changes

- [`8b3c83e`](https://github.com/backstage/backstage/commit/8b3c83e): Improved handling of AWS S3 object keys when creating catalog locations.

### `@backstage/plugin-catalog-backend-module-azure` (0.3.21 → [0.3.22-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0322-next0))

#### 0.3.22-next.0

##### Patch Changes

- [`8b3c83e`](https://github.com/backstage/backstage/commit/8b3c83e): Improved handling of Azure Blob Storage blob names when creating catalog locations.

### `@backstage/plugin-catalog-backend-module-gitlab` (0.8.7 → [0.8.8-next.1](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#088-next1))

#### 0.8.8-next.1

##### Patch Changes

- [`b7db066`](https://github.com/backstage/backstage/commit/b7db066): Fixed a scope validation issue in GitLab organization discovery.

### `@backstage/plugin-catalog-backend-module-msgraph` (0.10.5 → [0.10.6-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#0106-next0))

#### 0.10.6-next.0

##### Patch Changes

- [`7ac10da`](https://github.com/backstage/backstage/commit/7ac10da): Fixed accumulating abort listeners on `MicrosoftGraphClient`.

### `@backstage/plugin-catalog-import` (0.13.17 → [0.13.18-next.1](../../changelogs/@backstage/plugin-catalog-import.md#01318-next1))

#### 0.13.18-next.1

##### Patch Changes

- [`d421187`](https://github.com/backstage/backstage/commit/d421187): Reduced the initial app bundle size by loading page and optional UI implementations only when their extensions render.

### `@backstage/plugin-catalog-unprocessed-entities` (0.2.34 → [0.2.35-next.1](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#0235-next1))

#### 0.2.35-next.1

##### Patch Changes

- [`d421187`](https://github.com/backstage/backstage/commit/d421187): Reduced the initial app bundle size by loading page and optional UI implementations only when their extensions render.

### `@backstage/plugin-devtools` (0.1.42 → [0.1.43-next.1](../../changelogs/@backstage/plugin-devtools.md#0143-next1))

#### 0.1.43-next.1

##### Patch Changes

- [`d421187`](https://github.com/backstage/backstage/commit/d421187): Reduced the initial app bundle size by loading page and optional UI implementations only when their extensions render.

### `@backstage/plugin-home` (0.9.9 → [0.9.10-next.1](../../changelogs/@backstage/plugin-home.md#0910-next1))

#### 0.9.10-next.1

##### Patch Changes

- [`d421187`](https://github.com/backstage/backstage/commit/d421187): Reduced the initial app bundle size by loading page and optional UI implementations only when their extensions render.

### `@backstage/plugin-kubernetes` (0.12.22 → [0.12.23-next.1](../../changelogs/@backstage/plugin-kubernetes.md#01223-next1))

#### 0.12.23-next.1

##### Patch Changes

- [`83f34f2`](https://github.com/backstage/backstage/commit/83f34f2): The Kubernetes entity content no longer loads its UI until the tab is opened, keeping it out of the initial bundle. Tab visibility is now an entity filter predicate that can be overridden through app config, and entities with an empty Kubernetes annotation now show the tab where previously it was hidden.

### `@backstage/plugin-kubernetes-backend` (0.21.10 → [0.21.11-next.1](../../changelogs/@backstage/plugin-kubernetes-backend.md#02111-next1))

#### 0.21.11-next.1

##### Patch Changes

- [`1d7b704`](https://github.com/backstage/backstage/commit/1d7b704): Reject unsupported service account authentication in catalog-provided cluster definitions.
- [`28bdf75`](https://github.com/backstage/backstage/commit/28bdf75): Improved handling of Kubernetes resource response data.

### `@backstage/plugin-kubernetes-common` (0.9.12 → [0.9.13-next.0](../../changelogs/@backstage/plugin-kubernetes-common.md#0913-next0))

#### 0.9.13-next.0

##### Patch Changes

- [`d9a57de`](https://github.com/backstage/backstage/commit/d9a57de): Add `KubernetesWatcher` interface for streaming Kubernetes resource changes via an async iterator. The watcher is separated from `KubernetesFetcher` because watching is a long-lived streaming connection that only works with server-side auth providers. Watch supports all event types (ADDED, MODIFIED, DELETED, BOOKMARK, ERROR) with errors yielded as data rather than thrown.

### `@backstage/plugin-kubernetes-node` (0.4.7 → [0.4.8-next.1](../../changelogs/@backstage/plugin-kubernetes-node.md#048-next1))

#### 0.4.8-next.0

##### Patch Changes

- [`d9a57de`](https://github.com/backstage/backstage/commit/d9a57de): Add `KubernetesWatcher` interface for streaming Kubernetes resource changes via an async iterator. The watcher is separated from `KubernetesFetcher` because watching is a long-lived streaming connection that only works with server-side auth providers. Watch supports all event types (ADDED, MODIFIED, DELETED, BOOKMARK, ERROR) with errors yielded as data rather than thrown.

### `@backstage/plugin-kubernetes-react` (0.5.23 → [0.5.24-next.1](../../changelogs/@backstage/plugin-kubernetes-react.md#0524-next1))

#### 0.5.24-next.1

##### Patch Changes

- [`83f34f2`](https://github.com/backstage/backstage/commit/83f34f2): The pod exec terminal now loads `@xterm/xterm` and its stylesheet when a terminal is opened, instead of including them in the initial bundle.

### `@backstage/plugin-notifications` (0.5.20 → [0.5.21-next.1](../../changelogs/@backstage/plugin-notifications.md#0521-next1))

#### 0.5.21-next.1

##### Patch Changes

- [`b31afcf`](https://github.com/backstage/backstage/commit/b31afcf): Fixed circular dependency warnings when building the notification settings UI.

### `@backstage/plugin-notifications-backend-module-email` (0.3.24 → [0.3.25-next.0](../../changelogs/@backstage/plugin-notifications-backend-module-email.md#0325-next0))

#### 0.3.25-next.0

##### Patch Changes

- [`2a19159`](https://github.com/backstage/backstage/commit/2a19159): Hardened notification email delivery with format validation and optional `allowedEmailDomains`. Invalid or disallowed addresses are skipped; `allowlistEmailAddresses` and `denylistEmailAddresses` match case-insensitively, allowlist still overrides the domain list, and denied addresses win last.

### `@backstage/plugin-proxy-backend` (0.6.17 → [0.6.18-next.0](../../changelogs/@backstage/plugin-proxy-backend.md#0618-next0))

#### 0.6.18-next.0

##### Patch Changes

- [`42580a2`](https://github.com/backstage/backstage/commit/42580a2): Improved request path handling in the proxy-backend.

### `@backstage/plugin-scaffolder-backend-module-azure` (0.2.25 → [0.2.26-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#0226-next1))

#### 0.2.26-next.1

##### Patch Changes

- [`bbba6b5`](https://github.com/backstage/backstage/commit/bbba6b5): Added support for requiring user-provided credentials for Azure DevOps mutation actions when `scaffolder.requireScmUserCredentials` is enabled.

### `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.3.10 → [0.3.11-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#0311-next1))

#### 0.3.11-next.1

##### Patch Changes

- [`40c64a0`](https://github.com/backstage/backstage/commit/40c64a0): Fixed a security issue in pull request workspace handling.
- [`bbba6b5`](https://github.com/backstage/backstage/commit/bbba6b5): Added support for requiring user-provided credentials for Bitbucket Cloud mutation actions when `scaffolder.requireScmUserCredentials` is enabled.

### `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.25 → [0.2.26-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#0226-next1))

#### 0.2.26-next.1

##### Patch Changes

- [`40c64a0`](https://github.com/backstage/backstage/commit/40c64a0): Fixed a security issue in pull request workspace handling.
- [`bbba6b5`](https://github.com/backstage/backstage/commit/bbba6b5): Added support for requiring user-provided credentials for Bitbucket Server mutation actions when `scaffolder.requireScmUserCredentials` is enabled.

### `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.25 → [0.3.26-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#0326-next1))

#### 0.3.26-next.1

##### Patch Changes

- [`6e11531`](https://github.com/backstage/backstage/commit/6e11531): Improve handling of imported Confluence attachments
- [`3026628`](https://github.com/backstage/backstage/commit/3026628): Validate repository file paths before transforming Confluence content.

### `@backstage/plugin-scaffolder-backend-module-gcp` (0.2.24 → [0.2.25-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-gcp.md#0225-next1))

#### 0.2.25-next.0

##### Patch Changes

- [`e95b649`](https://github.com/backstage/backstage/commit/e95b649): Added new config path `scaffolder.taskRecovery.gcsBucket.name` for GCS workspace provider. The previous `EXPERIMENTAL_workspaceSerializationGcpBucketName` config is still supported as a fallback. Workspace upload failures are now propagated so that a task does not record a completed step without its corresponding workspace.

### `@backstage/plugin-scaffolder-backend-module-github` (0.9.13 → [0.9.14-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#0914-next1))

#### 0.9.14-next.1

##### Patch Changes

- [`bbba6b5`](https://github.com/backstage/backstage/commit/bbba6b5): Added support for requiring user-provided credentials for GitHub mutation actions when `scaffolder.requireScmUserCredentials` is enabled.

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.11.10 → [0.11.11-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#01111-next1))

#### 0.11.11-next.1

##### Patch Changes

- [`bbba6b5`](https://github.com/backstage/backstage/commit/bbba6b5): Added support for requiring user-provided credentials for GitLab mutation actions when `scaffolder.requireScmUserCredentials` is enabled.
- [`cd77db3`](https://github.com/backstage/backstage/commit/cd77db3): Added an `autoMerge` boolean input to the `publish:gitlab:merge-request` scaffolder action. When set to `true`, the merge request is automatically merged once all merge checks succeed, using GitLab's auto-merge feature.

### `@backstage/plugin-scaffolder-node` (0.13.6 → [0.13.7-next.1](../../changelogs/@backstage/plugin-scaffolder-node.md#0137-next1))

#### 0.13.7-next.0

##### Patch Changes

- [`e95b649`](https://github.com/backstage/backstage/commit/e95b649): Added task recovery feature with new `scaffolder.taskRecovery` config section. When enabled, tasks that crash or timeout are automatically recovered and resume from the last completed step, task secrets are retained until the task reaches a terminal state so recovery can continue, and completed step outputs are persisted. Enabling recovery applies to all scaffolder tasks, so actions used by those tasks should be idempotent or use checkpoints. When recovery is disabled (the default), the previous behavior is unchanged: secrets are cleared as soon as a task is claimed and retries re-run every step. The new config consolidates previous experimental flags (`EXPERIMENTAL_recoverTasks`, `EXPERIMENTAL_workspaceSerialization`, `EXPERIMENTAL_recoverTasksTimeout`) which remain supported as fallbacks. The legacy workspace provider setting continues to select a provider only when `EXPERIMENTAL_workspaceSerialization` is `true`.

  Workspace serialization for task recovery now requires installing a separate workspace provider module, including when you use the legacy configuration. For development, use `@backstage/plugin-scaffolder-backend-module-workspace-database` (50 MB limit, not recommended for production). On first startup, that module migrates existing database workspace snapshots from the legacy task storage. For production, use `@backstage/plugin-scaffolder-backend-module-gcp` or a similar external storage provider. The scaffolder rejects a configured provider that has not been installed and registered.

  Enabling crash recovery does not keep completed task event streams open; normal task completion remains terminal for event-stream clients.

### `@backstage/plugin-search-backend-module-catalog` (0.3.18 → [0.3.19-next.1](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#0319-next1))

#### 0.3.19-next.0

##### Patch Changes

- [`979c255`](https://github.com/backstage/backstage/commit/979c255): Improved catalog indexing performance by using cursor pagination for TechDocs and avoiding unused total item counts in search collators.

### `@backstage/plugin-search-backend-module-techdocs` (0.4.17 → [0.4.18-next.1](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#0418-next1))

#### 0.4.18-next.0

##### Patch Changes

- [`979c255`](https://github.com/backstage/backstage/commit/979c255): Improved catalog indexing performance by using cursor pagination for TechDocs and avoiding unused total item counts in search collators.

### `@backstage/plugin-user-settings` (0.9.6 → [0.9.7-next.1](../../changelogs/@backstage/plugin-user-settings.md#097-next1))

#### 0.9.7-next.1

##### Patch Changes

- [`d421187`](https://github.com/backstage/backstage/commit/d421187): Reduced the initial app bundle size by loading page and optional UI implementations only when their extensions render.

### `@backstage/repo-tools` (0.19.0 → [0.19.1-next.0](../../changelogs/@backstage/repo-tools.md#0191-next0))

#### 0.19.1-next.0

##### Patch Changes

- [`bf1f82d`](https://github.com/backstage/backstage/commit/bf1f82d): Added the required OpenAPI types dependency for Swagger Parser.

## Other minor version bumps

### `@backstage/plugin-scaffolder` (1.38.2 → [1.39.0-next.1](../../changelogs/@backstage/plugin-scaffolder.md#1390-next1))

#### 1.39.0-next.0

##### Minor Changes

- [`5ff93bf`](https://github.com/backstage/backstage/commit/5ff93bf): Added functionality to register a Template Outputs Component in the new frontend system.

### `@backstage/plugin-scaffolder-backend` (4.1.0 → [4.2.0-next.1](../../changelogs/@backstage/plugin-scaffolder-backend.md#420-next1))

#### 4.2.0-next.1

##### Minor Changes

- [`bbba6b5`](https://github.com/backstage/backstage/commit/bbba6b5): Added the `scaffolder.requireScmUserCredentials` configuration option to require user-provided credentials for supported SCM mutation and fetch actions.

##### Patch Changes

- [`7fba55a`](https://github.com/backstage/backstage/commit/7fba55a): Removed user entity references from scaffolder task count metrics to avoid exposing user identities and creating high-cardinality metric labels.
- [`b1256aa`](https://github.com/backstage/backstage/commit/b1256aa): Respect task read permission decisions when listing scaffolder tasks.
- [`15fa029`](https://github.com/backstage/backstage/commit/15fa029): Restrict task list ordering to supported fields.
- [`be0a75a`](https://github.com/backstage/backstage/commit/be0a75a): Exclude internal task data from task responses.
- [`f389dd2`](https://github.com/backstage/backstage/commit/f389dd2): Improve denied scaffolder action error handling.
- [`2eebeb7`](https://github.com/backstage/backstage/commit/2eebeb7): Ensure task failure details use the configured log redactions.
- [`84ebbb9`](https://github.com/backstage/backstage/commit/84ebbb9): Fixed log redaction for transformed secret values used to iterate Scaffolder steps.
- [`b4172dd`](https://github.com/backstage/backstage/commit/b4172dd): Restrict task retries to terminal states.
- [`ee9c48d`](https://github.com/backstage/backstage/commit/ee9c48d): Fixed matching of action input values in scaffolder permission policies.
- [`79f0b91`](https://github.com/backstage/backstage/commit/79f0b91): Fixed the scaffolder task worker silently giving up after a transient failure. A single error while picking up a task, such as a dropped database connection, would stop the backend from running any further software templates for the rest of its lifetime. New tasks stayed queued indefinitely with no error shown to the user and no failing health check, and the only way to recover was to restart the backend. Picking up tasks is now retried instead.

### `@backstage/plugin-scaffolder-common` (2.2.3 → [2.3.0-next.1](../../changelogs/@backstage/plugin-scaffolder-common.md#230-next1))

#### 2.3.0-next.1

##### Patch Changes

- [`be0a75a`](https://github.com/backstage/backstage/commit/be0a75a): Exclude internal task data from task responses.

#### 2.3.0-next.0

##### Minor Changes

- [`1a705ca`](https://github.com/backstage/backstage/commit/1a705ca): Added `templateDryRunPermission`, which allows permission policies to control who can submit inline Software Template dry runs.

### `@backstage/plugin-scaffolder-react` (2.0.3 → [2.1.0-next.1](../../changelogs/@backstage/plugin-scaffolder-react.md#210-next1))

#### 2.1.0-next.1

##### Patch Changes

- [`7c1019c`](https://github.com/backstage/backstage/commit/7c1019c): Fixed the scaffolder wizard not scrolling to the top on step change when the app uses the new frontend system (no `<main>` element).

#### 2.1.0-next.0

##### Minor Changes

- [`5ff93bf`](https://github.com/backstage/backstage/commit/5ff93bf): Added functionality to register a Template Outputs Component in the new frontend system.

### `@backstage/plugin-techdocs-backend` (2.2.4 → [2.3.0-next.0](../../changelogs/@backstage/plugin-techdocs-backend.md#230-next0))

#### 2.3.0-next.0

##### Minor Changes

- [`ee97130`](https://github.com/backstage/backstage/commit/ee97130): Added support for `techdocs.generator.pullOptions` when pulling the TechDocs generator Docker image from private registries that require authentication.

##### Patch Changes

- [`932986c`](https://github.com/backstage/backstage/commit/932986c): Improve validation of TechDocs static content paths.
- [`1b0e277`](https://github.com/backstage/backstage/commit/1b0e277): Improved path validation for TechDocs content serving.

### `@backstage/plugin-techdocs-node` (1.15.4 → [1.16.0-next.0](../../changelogs/@backstage/plugin-techdocs-node.md#1160-next0))

#### 1.16.0-next.0

##### Minor Changes

- [`ee97130`](https://github.com/backstage/backstage/commit/ee97130): Added support for `techdocs.generator.pullOptions` when pulling the TechDocs generator Docker image from private registries that require authentication.

##### Patch Changes

- [`e58d265`](https://github.com/backstage/backstage/commit/e58d265): Updated TechDocs generation to reject source trees containing symlinks that resolve outside the source directory.
- [`d13ad29`](https://github.com/backstage/backstage/commit/d13ad29): Improved MkDocs configuration handling for additional templates.
- [`2233af2`](https://github.com/backstage/backstage/commit/2233af2): Improved MkDocs configuration sanitization to cover additional nested configuration keys and theme options.
- [`4441911`](https://github.com/backstage/backstage/commit/4441911): Improved MkDocs configuration file handling.
- [`45cbd0a`](https://github.com/backstage/backstage/commit/45cbd0a): Improved validation of MkDocs configuration values during TechDocs generation.
- [`030331b`](https://github.com/backstage/backstage/commit/030331b): Improved file validation in the local TechDocs publisher during the publish step.

## Other patch version bumps

### `@backstage/integration` (2.1.1 → [2.1.2-next.0](../../changelogs/@backstage/integration.md#212-next0))

#### 2.1.2-next.0

##### Patch Changes

- [`7150117`](https://github.com/backstage/backstage/commit/7150117): Updated internal Azure DevOps imports to avoid a circular module dependency.
- [`e895def`](https://github.com/backstage/backstage/commit/e895def): Fixed handling of GitLab URLs for instances configured with a relative base path.

### `@backstage/plugin-catalog` (2.0.8 → [2.0.9-next.1](../../changelogs/@backstage/plugin-catalog.md#209-next1))

#### 2.0.9-next.1

##### Patch Changes

- [`e3781a3`](https://github.com/backstage/backstage/commit/e3781a3): Fixed circular dependency warnings when building the catalog plugin.
- [`d421187`](https://github.com/backstage/backstage/commit/d421187): Reduced the initial app bundle size by loading page and optional UI implementations only when their extensions render.

### `@backstage/plugin-catalog-backend` (3.9.1 → [3.9.2-next.0](../../changelogs/@backstage/plugin-catalog-backend.md#392-next0))

#### 3.9.2-next.0

##### Patch Changes

- [`7761a50`](https://github.com/backstage/backstage/commit/7761a50): Improved path validation for catalog entity placeholders.
- [`fda0ef1`](https://github.com/backstage/backstage/commit/fda0ef1): Correct catalog property permission matching.
- [`e363ae2`](https://github.com/backstage/backstage/commit/e363ae2): Allowed location type restrictions are now applied consistently during catalog processing.

### `@backstage/plugin-catalog-react` (3.2.2 → [3.2.3-next.1](../../changelogs/@backstage/plugin-catalog-react.md#323-next1))

#### 3.2.3-next.1

##### Patch Changes

- [`bf7e890`](https://github.com/backstage/backstage/commit/bf7e890): Added the missing Material UI dependency used by catalog popovers.

### `@backstage/plugin-search` (1.7.7 → [1.7.8-next.1](../../changelogs/@backstage/plugin-search.md#178-next1))

#### 1.7.8-next.1

##### Patch Changes

- [`d421187`](https://github.com/backstage/backstage/commit/d421187): Reduced the initial app bundle size by loading page and optional UI implementations only when their extensions render.

### `@backstage/plugin-search-backend` (2.1.6 → [2.1.7-next.1](../../changelogs/@backstage/plugin-search-backend.md#217-next1))

#### 2.1.7-next.0

##### Patch Changes

- [`b11c9b4`](https://github.com/backstage/backstage/commit/b11c9b4): Fixed a bug where the search engine could receive an unfiltered query when no document types were permitted.

### `@backstage/plugin-search-backend-module-elasticsearch` (1.8.7 → [1.8.8-next.1](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#188-next1))

#### 1.8.8-next.0

##### Patch Changes

- [`b11c9b4`](https://github.com/backstage/backstage/commit/b11c9b4): Fixed a bug where an empty document type list could result in querying all indices instead of returning empty results.

### `@backstage/plugin-techdocs` (1.18.0 → [1.18.1-next.1](../../changelogs/@backstage/plugin-techdocs.md#1181-next1))

#### 1.18.1-next.1

##### Patch Changes

- [`d421187`](https://github.com/backstage/backstage/commit/d421187): Reduced the initial app bundle size by loading page and optional UI implementations only when their extensions render.
- [`9cb79f5`](https://github.com/backstage/backstage/commit/9cb79f5): Use the catalog presentation API for TechDocs document titles and owner labels so entity display names are consistent with the rest of Backstage.

### `@backstage/plugin-techdocs-addons-test-utils` (2.0.8 → [2.0.9-next.1](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#209-next1))

#### 2.0.9-next.1

##### Patch Changes

- [`279fdf6`](https://github.com/backstage/backstage/commit/279fdf6): Declared the DOM Testing Library dependency required by React Testing Library.

### `@backstage/test-utils` (1.7.21 → [1.7.22-next.1](../../changelogs/@backstage/test-utils.md#1722-next1))

#### 1.7.22-next.1

##### Patch Changes

- [`279fdf6`](https://github.com/backstage/backstage/commit/279fdf6): Declared the DOM Testing Library dependency required by React Testing Library.

### `@techdocs/cli` (1.11.4 → [1.11.5-next.1](../../changelogs/@techdocs/cli.md#1115-next1))

#### 1.11.5-next.1

##### Patch Changes

- [`4441911`](https://github.com/backstage/backstage/commit/4441911): Improved MkDocs configuration file handling.

## Excluded dependency updates

- `@backstage/app-defaults` (1.7.11 → [1.7.12-next.1](../../changelogs/@backstage/app-defaults.md#1712-next1))
- `@backstage/backend-app-api` (1.7.3 → [1.7.4-next.0](../../changelogs/@backstage/backend-app-api.md#174-next0))
- `@backstage/backend-dynamic-feature-service` (0.8.6 → [0.8.7-next.1](../../changelogs/@backstage/backend-dynamic-feature-service.md#087-next1))
- `@backstage/backend-plugin-api` (1.10.0 → [1.10.1-next.0](../../changelogs/@backstage/backend-plugin-api.md#1101-next0))
- `@backstage/backend-test-utils` (1.11.6 → [1.11.7-next.0](../../changelogs/@backstage/backend-test-utils.md#1117-next0))
- `@backstage/catalog-client` (1.16.1 → [1.16.2-next.0](../../changelogs/@backstage/catalog-client.md#1162-next0))
- `@backstage/cli` (0.36.5 → [0.36.6-next.0](../../changelogs/@backstage/cli.md#0366-next0))
- `@backstage/core-app-api` (1.20.4 → [1.20.5-next.1](../../changelogs/@backstage/core-app-api.md#1205-next1))
- `@backstage/core-compat-api` (0.5.14 → [0.5.15-next.1](../../changelogs/@backstage/core-compat-api.md#0515-next1))
- `@backstage/core-plugin-api` (1.12.9 → [1.12.10-next.0](../../changelogs/@backstage/core-plugin-api.md#11210-next0))
- `@backstage/dev-utils` (1.1.26 → [1.1.27-next.1](../../changelogs/@backstage/dev-utils.md#1127-next1))
- `@backstage/frontend-defaults` (0.5.5 → [0.5.6-next.1](../../changelogs/@backstage/frontend-defaults.md#056-next1))
- `@backstage/frontend-dev-utils` (0.1.5 → [0.1.6-next.1](../../changelogs/@backstage/frontend-dev-utils.md#016-next1))
- `@backstage/frontend-dynamic-feature-loader` (0.1.15 → [0.1.16-next.0](../../changelogs/@backstage/frontend-dynamic-feature-loader.md#0116-next0))
- `@backstage/integration-react` (1.2.21 → [1.2.22-next.0](../../changelogs/@backstage/integration-react.md#1222-next0))
- `@backstage/plugin-api-docs` (0.14.4 → [0.14.5-next.1](../../changelogs/@backstage/plugin-api-docs.md#0145-next1))
- `@backstage/plugin-app-backend` (0.5.17 → [0.5.18-next.0](../../changelogs/@backstage/plugin-app-backend.md#0518-next0))
- `@backstage/plugin-app-node` (0.1.48 → [0.1.49-next.0](../../changelogs/@backstage/plugin-app-node.md#0149-next0))
- `@backstage/plugin-app-react` (0.2.6 → [0.2.7-next.0](../../changelogs/@backstage/plugin-app-react.md#027-next0))
- `@backstage/plugin-app-visualizer` (0.2.7 → [0.2.8-next.1](../../changelogs/@backstage/plugin-app-visualizer.md#028-next1))
- `@backstage/plugin-auth` (0.1.11 → [0.1.12-next.1](../../changelogs/@backstage/plugin-auth.md#0112-next1))
- `@backstage/plugin-auth-backend-module-atlassian-provider` (0.4.18 → [0.4.19-next.0](../../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#0419-next0))
- `@backstage/plugin-auth-backend-module-auth0-provider` (0.4.4 → [0.4.5-next.0](../../changelogs/@backstage/plugin-auth-backend-module-auth0-provider.md#045-next0))
- `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.4.19 → [0.4.20-next.1](../../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#0420-next1))
- `@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.2.23 → [0.2.24-next.0](../../changelogs/@backstage/plugin-auth-backend-module-azure-easyauth-provider.md#0224-next0))
- `@backstage/plugin-auth-backend-module-bitbucket-provider` (0.3.18 → [0.3.19-next.0](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-provider.md#0319-next0))
- `@backstage/plugin-auth-backend-module-bitbucket-server-provider` (0.2.18 → [0.2.19-next.0](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-server-provider.md#0219-next0))
- `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.4.18 → [0.4.19-next.0](../../changelogs/@backstage/plugin-auth-backend-module-cloudflare-access-provider.md#0419-next0))
- `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.4.18 → [0.4.19-next.0](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#0419-next0))
- `@backstage/plugin-auth-backend-module-github-provider` (0.5.6 → [0.5.7-next.0](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#057-next0))
- `@backstage/plugin-auth-backend-module-gitlab-provider` (0.4.6 → [0.4.7-next.0](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#047-next0))
- `@backstage/plugin-auth-backend-module-google-provider` (0.3.18 → [0.3.19-next.0](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#0319-next0))
- `@backstage/plugin-auth-backend-module-guest-provider` (0.2.22 → [0.2.23-next.0](../../changelogs/@backstage/plugin-auth-backend-module-guest-provider.md#0223-next0))
- `@backstage/plugin-auth-backend-module-microsoft-provider` (0.3.18 → [0.3.19-next.0](../../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#0319-next0))
- `@backstage/plugin-auth-backend-module-oauth2-provider` (0.4.18 → [0.4.19-next.0](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#0419-next0))
- `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.3.2 → [0.3.3-next.0](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#033-next0))
- `@backstage/plugin-auth-backend-module-okta-provider` (0.2.18 → [0.2.19-next.0](../../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#0219-next0))
- `@backstage/plugin-auth-backend-module-onelogin-provider` (0.3.18 → [0.3.19-next.0](../../changelogs/@backstage/plugin-auth-backend-module-onelogin-provider.md#0319-next0))
- `@backstage/plugin-auth-backend-module-openshift-provider` (0.1.10 → [0.1.11-next.0](../../changelogs/@backstage/plugin-auth-backend-module-openshift-provider.md#0111-next0))
- `@backstage/plugin-auth-backend-module-pinniped-provider` (0.3.17 → [0.3.18-next.0](../../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#0318-next0))
- `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.5.17 → [0.5.18-next.0](../../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#0518-next0))
- `@backstage/plugin-auth-node` (0.7.4 → [0.7.5-next.0](../../changelogs/@backstage/plugin-auth-node.md#075-next0))
- `@backstage/plugin-auth-react` (0.1.30 → [0.1.31-next.1](../../changelogs/@backstage/plugin-auth-react.md#0131-next1))
- `@backstage/plugin-bitbucket-cloud-common` (0.3.12 → [0.3.13-next.0](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#0313-next0))
- `@backstage/plugin-catalog-backend-module-ai-model` (0.1.3 → [0.1.4-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-ai-model.md#014-next0))
- `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.5.17 → [0.5.18-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#0518-next0))
- `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.5.14 → [0.5.15-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#0515-next0))
- `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.5.14 → [0.5.15-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#0515-next0))
- `@backstage/plugin-catalog-backend-module-gcp` (0.3.22 → [0.3.23-next.1](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#0323-next1))
- `@backstage/plugin-catalog-backend-module-gerrit` (0.3.17 → [0.3.18-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0318-next0))
- `@backstage/plugin-catalog-backend-module-gitea` (0.1.15 → [0.1.16-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-gitea.md#0116-next0))
- `@backstage/plugin-catalog-backend-module-github-org` (0.3.25 → [0.3.26-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#0326-next0))
- `@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.24 → [0.2.25-next.1](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab-org.md#0225-next1))
- `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.7.15 → [0.7.16-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#0716-next0))
- `@backstage/plugin-catalog-backend-module-ldap` (0.12.8 → [0.12.9-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0129-next0))
- `@backstage/plugin-catalog-backend-module-logs` (0.1.25 → [0.1.26-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-logs.md#0126-next0))
- `@backstage/plugin-catalog-backend-module-msgraph-incremental` (0.1.3 → [0.1.4-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph-incremental.md#014-next0))
- `@backstage/plugin-catalog-backend-module-openapi` (0.2.25 → [0.2.26-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0226-next0))
- `@backstage/plugin-catalog-backend-module-puppetdb` (0.2.25 → [0.2.26-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0226-next0))
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.2.23 → [0.2.24-next.1](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#0224-next1))
- `@backstage/plugin-catalog-backend-module-unprocessed` (0.6.15 → [0.6.16-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#0616-next0))
- `@backstage/plugin-catalog-graph` (0.6.7 → [0.6.8-next.1](../../changelogs/@backstage/plugin-catalog-graph.md#068-next1))
- `@backstage/plugin-catalog-node` (2.2.4 → [2.2.5-next.0](../../changelogs/@backstage/plugin-catalog-node.md#225-next0))
- `@backstage/plugin-config-schema` (0.1.83 → [0.1.84-next.1](../../changelogs/@backstage/plugin-config-schema.md#0184-next1))
- `@backstage/plugin-devtools-backend` (0.5.20 → [0.5.21-next.0](../../changelogs/@backstage/plugin-devtools-backend.md#0521-next0))
- `@backstage/plugin-devtools-react` (0.2.5 → [0.2.6-next.0](../../changelogs/@backstage/plugin-devtools-react.md#026-next0))
- `@backstage/plugin-events-backend` (0.6.5 → [0.6.6-next.0](../../changelogs/@backstage/plugin-events-backend.md#066-next0))
- `@backstage/plugin-events-backend-module-aws-sqs` (0.4.25 → [0.4.26-next.0](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#0426-next0))
- `@backstage/plugin-events-backend-module-azure` (0.2.34 → [0.2.35-next.0](../../changelogs/@backstage/plugin-events-backend-module-azure.md#0235-next0))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.34 → [0.2.35-next.0](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0235-next0))
- `@backstage/plugin-events-backend-module-bitbucket-server` (0.1.15 → [0.1.16-next.0](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-server.md#0116-next0))
- `@backstage/plugin-events-backend-module-gerrit` (0.2.34 → [0.2.35-next.0](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0235-next0))
- `@backstage/plugin-events-backend-module-github` (0.4.15 → [0.4.16-next.0](../../changelogs/@backstage/plugin-events-backend-module-github.md#0416-next0))
- `@backstage/plugin-events-backend-module-gitlab` (0.3.15 → [0.3.16-next.0](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#0316-next0))
- `@backstage/plugin-events-backend-module-google-pubsub` (0.2.6 → [0.2.7-next.0](../../changelogs/@backstage/plugin-events-backend-module-google-pubsub.md#027-next0))
- `@backstage/plugin-events-backend-module-kafka` (0.3.7 → [0.3.8-next.0](../../changelogs/@backstage/plugin-events-backend-module-kafka.md#038-next0))
- `@backstage/plugin-events-backend-test-utils` (0.1.58 → [0.1.59-next.0](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0159-next0))
- `@backstage/plugin-events-node` (0.4.25 → [0.4.26-next.0](../../changelogs/@backstage/plugin-events-node.md#0426-next0))
- `@backstage/plugin-gateway-backend` (1.1.8 → [1.1.9-next.0](../../changelogs/@backstage/plugin-gateway-backend.md#119-next0))
- `@backstage/plugin-home-react` (0.1.41 → [0.1.42-next.1](../../changelogs/@backstage/plugin-home-react.md#0142-next1))
- `@backstage/plugin-kubernetes-cluster` (0.0.40 → [0.0.41-next.1](../../changelogs/@backstage/plugin-kubernetes-cluster.md#0041-next1))
- `@backstage/plugin-mcp-actions-backend` (0.2.1 → [0.2.2-next.0](../../changelogs/@backstage/plugin-mcp-actions-backend.md#022-next0))
- `@backstage/plugin-mui-to-bui` (0.2.10 → [0.2.11-next.1](../../changelogs/@backstage/plugin-mui-to-bui.md#0211-next1))
- `@backstage/plugin-notifications-backend` (0.6.8 → [0.6.9-next.0](../../changelogs/@backstage/plugin-notifications-backend.md#069-next0))
- `@backstage/plugin-notifications-backend-module-slack` (0.4.5 → [0.4.6-next.0](../../changelogs/@backstage/plugin-notifications-backend-module-slack.md#046-next0))
- `@backstage/plugin-notifications-node` (0.2.29 → [0.2.30-next.0](../../changelogs/@backstage/plugin-notifications-node.md#0230-next0))
- `@backstage/plugin-org` (0.7.8 → [0.7.9-next.1](../../changelogs/@backstage/plugin-org.md#079-next1))
- `@backstage/plugin-org-react` (0.1.53 → [0.1.54-next.1](../../changelogs/@backstage/plugin-org-react.md#0154-next1))
- `@backstage/plugin-permission-backend` (0.7.15 → [0.7.16-next.0](../../changelogs/@backstage/plugin-permission-backend.md#0716-next0))
- `@backstage/plugin-permission-backend-module-allow-all-policy` (0.2.22 → [0.2.23-next.0](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#0223-next0))
- `@backstage/plugin-permission-node` (0.11.3 → [0.11.4-next.0](../../changelogs/@backstage/plugin-permission-node.md#0114-next0))
- `@backstage/plugin-permission-react` (0.5.4 → [0.5.5-next.0](../../changelogs/@backstage/plugin-permission-react.md#055-next0))
- `@backstage/plugin-proxy-node` (0.1.18 → [0.1.19-next.0](../../changelogs/@backstage/plugin-proxy-node.md#0119-next0))
- `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.26 → [0.3.27-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0327-next1))
- `@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.24 → [0.2.25-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#0225-next1))
- `@backstage/plugin-scaffolder-backend-module-gitea` (0.2.24 → [0.2.25-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#0225-next1))
- `@backstage/plugin-scaffolder-backend-module-notifications` (0.1.25 → [0.1.26-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-notifications.md#0126-next1))
- `@backstage/plugin-scaffolder-backend-module-rails` (0.5.24 → [0.5.25-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0525-next1))
- `@backstage/plugin-scaffolder-backend-module-sentry` (0.3.7 → [0.3.8-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#038-next1))
- `@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.25 → [0.4.26-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0426-next1))
- `@backstage/plugin-scaffolder-node-test-utils` (0.3.14 → [0.3.15-next.1](../../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#0315-next1))
- `@backstage/plugin-search-backend-module-explore` (0.3.17 → [0.3.18-next.0](../../changelogs/@backstage/plugin-search-backend-module-explore.md#0318-next0))
- `@backstage/plugin-search-backend-module-pg` (0.5.58 → [0.5.59-next.0](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0559-next0))
- `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.3.23 → [0.3.24-next.0](../../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#0324-next0))
- `@backstage/plugin-search-backend-node` (1.4.7 → [1.4.8-next.0](../../changelogs/@backstage/plugin-search-backend-node.md#148-next0))
- `@backstage/plugin-search-react` (1.11.7 → [1.11.8-next.1](../../changelogs/@backstage/plugin-search-react.md#1118-next1))
- `@backstage/plugin-signals` (0.0.34 → [0.0.35-next.1](../../changelogs/@backstage/plugin-signals.md#0035-next1))
- `@backstage/plugin-signals-backend` (0.3.18 → [0.3.19-next.0](../../changelogs/@backstage/plugin-signals-backend.md#0319-next0))
- `@backstage/plugin-signals-node` (0.2.4 → [0.2.5-next.0](../../changelogs/@backstage/plugin-signals-node.md#025-next0))
- `@backstage/plugin-signals-react` (0.0.25 → [0.0.26-next.0](../../changelogs/@backstage/plugin-signals-react.md#0026-next0))
- `@backstage/plugin-techdocs-module-addons-contrib` (1.1.39 → [1.1.40-next.1](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1140-next1))
- `@backstage/plugin-techdocs-react` (1.3.14 → [1.3.15-next.1](../../changelogs/@backstage/plugin-techdocs-react.md#1315-next1))
- `@backstage/plugin-user-settings-backend` (0.4.6 → [0.4.7-next.0](../../changelogs/@backstage/plugin-user-settings-backend.md#047-next0))
