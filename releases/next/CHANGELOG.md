# RHDH Release next changelog

Changes between Backstage 1.54.5 (RHDH 1.11-m2) and Backstage 1.55.0-next.0 (RHDH next) — 1 added, 0 removed, 83 upgraded, 127 unchanged packages.

## Summary

- [Newly added packages](#newly-added-packages): 1 package
- [0.x patch version bumps](#0x-patch-version-bumps): 18 packages
- [Minor version bumps](#minor-version-bumps): 4 packages
- [Other patch version bumps](#other-patch-version-bumps): 4 packages
- [Excluded dependency updates](#excluded-dependency-updates): 57 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/plugin-scaffolder-backend-module-workspace-database` (new, 0.1.0-next.0)](#backstageplugin-scaffolder-backend-module-workspace-database-new-010-next0)
- [0.x patch version bumps](#0x-patch-version-bumps)
  - [`@backstage/cli-module-build` (0.1.7 → 0.1.8-next.0)](#backstagecli-module-build-017--018-next0)
  - [`@backstage/cli-module-new` (0.1.6 → 0.1.7-next.0)](#backstagecli-module-new-016--017-next0)
  - [`@backstage/create-app` (0.9.1 → 0.9.2-next.0)](#backstagecreate-app-091--092-next0)
  - [`@backstage/plugin-app` (0.5.2 → 0.5.3-next.0)](#backstageplugin-app-052--053-next0)
  - [`@backstage/plugin-app-module-user-settings` (0.1.1 → 0.1.2-next.0)](#backstageplugin-app-module-user-settings-011--012-next0)
  - [`@backstage/plugin-auth-backend` (0.30.0 → 0.30.1-next.0)](#backstageplugin-auth-backend-0300--0301-next0)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.8.6 → 0.8.7-next.0)](#backstageplugin-catalog-backend-module-gitlab-086--087-next0)
  - [`@backstage/plugin-catalog-import` (0.13.17 → 0.13.17-next.0)](#backstageplugin-catalog-import-01317--01317-next0)
  - [`@backstage/plugin-kubernetes-backend` (0.21.9 → 0.21.10-next.0)](#backstageplugin-kubernetes-backend-0219--02110-next0)
  - [`@backstage/plugin-kubernetes-common` (0.9.12 → 0.9.13-next.0)](#backstageplugin-kubernetes-common-0912--0913-next0)
  - [`@backstage/plugin-kubernetes-node` (0.4.7 → 0.4.8-next.0)](#backstageplugin-kubernetes-node-047--048-next0)
  - [`@backstage/plugin-org` (0.7.8 → 0.7.8-next.0)](#backstageplugin-org-078--078-next0)
  - [`@backstage/plugin-scaffolder-backend-module-gcp` (0.2.24 → 0.2.25-next.0)](#backstageplugin-scaffolder-backend-module-gcp-0224--0225-next0)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.11.9 → 0.11.10-next.0)](#backstageplugin-scaffolder-backend-module-gitlab-0119--01110-next0)
  - [`@backstage/plugin-scaffolder-node` (0.13.6 → 0.13.7-next.0)](#backstageplugin-scaffolder-node-0136--0137-next0)
  - [`@backstage/plugin-search-backend-module-catalog` (0.3.18 → 0.3.19-next.0)](#backstageplugin-search-backend-module-catalog-0318--0319-next0)
  - [`@backstage/plugin-search-backend-module-techdocs` (0.4.17 → 0.4.18-next.0)](#backstageplugin-search-backend-module-techdocs-0417--0418-next0)
  - [`@backstage/ui` (0.17.1 → 0.17.2-next.0)](#backstageui-0171--0172-next0)
- [Minor version bumps](#minor-version-bumps)
  - [`@backstage/plugin-scaffolder` (1.38.2 → 1.39.0-next.0)](#backstageplugin-scaffolder-1382--1390-next0)
  - [`@backstage/plugin-scaffolder-backend` (4.0.5 → 4.1.0-next.0)](#backstageplugin-scaffolder-backend-405--410-next0)
  - [`@backstage/plugin-scaffolder-common` (2.2.2 → 2.3.0-next.0)](#backstageplugin-scaffolder-common-222--230-next0)
  - [`@backstage/plugin-scaffolder-react` (2.0.3 → 2.1.0-next.0)](#backstageplugin-scaffolder-react-203--210-next0)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/plugin-catalog-react` (3.2.2 → 3.2.2-next.0)](#backstageplugin-catalog-react-322--322-next0)
  - [`@backstage/plugin-search-backend` (2.1.6 → 2.1.7-next.0)](#backstageplugin-search-backend-216--217-next0)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.8.7 → 1.8.8-next.0)](#backstageplugin-search-backend-module-elasticsearch-187--188-next0)
  - [`@techdocs/cli` (1.11.3 → 1.11.4-next.0)](#techdocscli-1113--1114-next0)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/plugin-scaffolder-backend-module-workspace-database` (new, [0.1.0-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-workspace-database.md#010-next0))

#### 0.1.0-next.0

##### Minor Changes

- [`e95b649`](https://github.com/backstage/backstage/commit/e95b649): Added task recovery feature with new `scaffolder.taskRecovery` config section. When enabled, tasks that crash or timeout are automatically recovered and resume from the last completed step, task secrets are retained until the task reaches a terminal state so recovery can continue, and completed step outputs are persisted. Enabling recovery applies to all scaffolder tasks, so actions used by those tasks should be idempotent or use checkpoints. When recovery is disabled (the default), the previous behavior is unchanged: secrets are cleared as soon as a task is claimed and retries re-run every step. The new config consolidates previous experimental flags (`EXPERIMENTAL_recoverTasks`, `EXPERIMENTAL_workspaceSerialization`, `EXPERIMENTAL_recoverTasksTimeout`) which remain supported as fallbacks. The legacy workspace provider setting continues to select a provider only when `EXPERIMENTAL_workspaceSerialization` is `true`.

  Workspace serialization for task recovery now requires installing a separate workspace provider module, including when you use the legacy configuration. For development, use `@backstage/plugin-scaffolder-backend-module-workspace-database` (50 MB limit, not recommended for production). On first startup, that module migrates existing database workspace snapshots from the legacy task storage. For production, use `@backstage/plugin-scaffolder-backend-module-gcp` or a similar external storage provider. The scaffolder rejects a configured provider that has not been installed and registered.

  Enabling crash recovery does not keep completed task event streams open; normal task completion remains terminal for event-stream clients.

## 0.x patch version bumps

### `@backstage/cli-module-build` (0.1.7 → [0.1.8-next.0](../../changelogs/@backstage/cli-module-build.md#018-next0))

#### 0.1.8-next.0

##### Patch Changes

- [`b2b7568`](https://github.com/backstage/backstage/commit/b2b7568): Significantly improve the performance of `build-workspace` when packaging many Backstage packages.

### `@backstage/cli-module-new` (0.1.6 → [0.1.7-next.0](../../changelogs/@backstage/cli-module-new.md#017-next0))

#### 0.1.7-next.0

##### Patch Changes

- [`4cba335`](https://github.com/backstage/backstage/commit/4cba335): Fixes published entry point configurations so it can be imported reliably in Jest/Node resolution.

### `@backstage/create-app` (0.9.1 → [0.9.2-next.0](../../changelogs/@backstage/create-app.md#092-next0))

#### 0.9.2-next.0

##### Patch Changes

- Bumped create-app version.

### `@backstage/plugin-app` (0.5.2 → [0.5.3-next.0](../../changelogs/@backstage/plugin-app.md#053-next0))

#### 0.5.3-next.0

##### Patch Changes

- [`f914343`](https://github.com/backstage/backstage/commit/f914343): Fixed toast text layout when the application does not define a global line height.

### `@backstage/plugin-app-module-user-settings` (0.1.1 → [0.1.2-next.0](../../changelogs/@backstage/plugin-app-module-user-settings.md#012-next0))

#### 0.1.2-next.0

##### Patch Changes

- [`4cba335`](https://github.com/backstage/backstage/commit/4cba335): Fixes published entry point configurations so it can be imported reliably in Jest/Node resolution.

### `@backstage/plugin-auth-backend` (0.30.0 → [0.30.1-next.0](../../changelogs/@backstage/plugin-auth-backend.md#0301-next0))

#### 0.30.1-next.0

##### Patch Changes

- [`08c5d9b`](https://github.com/backstage/backstage/commit/08c5d9b): Fixed inconsistent URL pattern matching in token revocation.

### `@backstage/plugin-catalog-backend-module-gitlab` (0.8.6 → [0.8.7-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#087-next0))

#### 0.8.7-next.0

##### Patch Changes

- [`348bea1`](https://github.com/backstage/backstage/commit/348bea1): Fixed `GitlabDiscoveryEntityProvider` to only process push events targeting the configured branch.

### `@backstage/plugin-catalog-import` (0.13.17 → [0.13.17-next.0](../../changelogs/@backstage/plugin-catalog-import.md#01317-next0))

_No changelog entries found._

### `@backstage/plugin-kubernetes-backend` (0.21.9 → [0.21.10-next.0](../../changelogs/@backstage/plugin-kubernetes-backend.md#02110-next0))

#### 0.21.10-next.0

##### Patch Changes

- [`b11c9b4`](https://github.com/backstage/backstage/commit/b11c9b4): Improved entity resolution on the deprecated services endpoint.
- [`d9a57de`](https://github.com/backstage/backstage/commit/d9a57de): Add `KubernetesWatcher` interface for streaming Kubernetes resource changes via an async iterator. The watcher is separated from `KubernetesFetcher` because watching is a long-lived streaming connection that only works with server-side auth providers. Watch supports all event types (ADDED, MODIFIED, DELETED, BOOKMARK, ERROR) with errors yielded as data rather than thrown.

### `@backstage/plugin-kubernetes-common` (0.9.12 → [0.9.13-next.0](../../changelogs/@backstage/plugin-kubernetes-common.md#0913-next0))

#### 0.9.13-next.0

##### Patch Changes

- [`d9a57de`](https://github.com/backstage/backstage/commit/d9a57de): Add `KubernetesWatcher` interface for streaming Kubernetes resource changes via an async iterator. The watcher is separated from `KubernetesFetcher` because watching is a long-lived streaming connection that only works with server-side auth providers. Watch supports all event types (ADDED, MODIFIED, DELETED, BOOKMARK, ERROR) with errors yielded as data rather than thrown.

### `@backstage/plugin-kubernetes-node` (0.4.7 → [0.4.8-next.0](../../changelogs/@backstage/plugin-kubernetes-node.md#048-next0))

#### 0.4.8-next.0

##### Patch Changes

- [`d9a57de`](https://github.com/backstage/backstage/commit/d9a57de): Add `KubernetesWatcher` interface for streaming Kubernetes resource changes via an async iterator. The watcher is separated from `KubernetesFetcher` because watching is a long-lived streaming connection that only works with server-side auth providers. Watch supports all event types (ADDED, MODIFIED, DELETED, BOOKMARK, ERROR) with errors yielded as data rather than thrown.

### `@backstage/plugin-org` (0.7.8 → [0.7.8-next.0](../../changelogs/@backstage/plugin-org.md#078-next0))

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-gcp` (0.2.24 → [0.2.25-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-gcp.md#0225-next0))

#### 0.2.25-next.0

##### Patch Changes

- [`e95b649`](https://github.com/backstage/backstage/commit/e95b649): Added new config path `scaffolder.taskRecovery.gcsBucket.name` for GCS workspace provider. The previous `EXPERIMENTAL_workspaceSerializationGcpBucketName` config is still supported as a fallback. Workspace upload failures are now propagated so that a task does not record a completed step without its corresponding workspace.

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.11.9 → [0.11.10-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#01110-next0))

#### 0.11.10-next.0

##### Patch Changes

- [`3c7c082`](https://github.com/backstage/backstage/commit/3c7c082): Fixed `gitlab:repo:push` failing with `400 Bad request - Provide at least one action` when the workspace has no file changes to commit (e.g. re-running a template against an already up-to-date branch). The action now detects an empty action list, skips the commit API call, and logs a warning whenever `allowEmpty` is not true (covering both the default of unset and an explicit `false`). The `commitHash` output is omitted in this no-op case and is now declared optional. Pass `allowEmpty: true` to retain the previous behavior of forwarding an empty commit to GitLab.

### `@backstage/plugin-scaffolder-node` (0.13.6 → [0.13.7-next.0](../../changelogs/@backstage/plugin-scaffolder-node.md#0137-next0))

#### 0.13.7-next.0

##### Patch Changes

- [`e95b649`](https://github.com/backstage/backstage/commit/e95b649): Added task recovery feature with new `scaffolder.taskRecovery` config section. When enabled, tasks that crash or timeout are automatically recovered and resume from the last completed step, task secrets are retained until the task reaches a terminal state so recovery can continue, and completed step outputs are persisted. Enabling recovery applies to all scaffolder tasks, so actions used by those tasks should be idempotent or use checkpoints. When recovery is disabled (the default), the previous behavior is unchanged: secrets are cleared as soon as a task is claimed and retries re-run every step. The new config consolidates previous experimental flags (`EXPERIMENTAL_recoverTasks`, `EXPERIMENTAL_workspaceSerialization`, `EXPERIMENTAL_recoverTasksTimeout`) which remain supported as fallbacks. The legacy workspace provider setting continues to select a provider only when `EXPERIMENTAL_workspaceSerialization` is `true`.

  Workspace serialization for task recovery now requires installing a separate workspace provider module, including when you use the legacy configuration. For development, use `@backstage/plugin-scaffolder-backend-module-workspace-database` (50 MB limit, not recommended for production). On first startup, that module migrates existing database workspace snapshots from the legacy task storage. For production, use `@backstage/plugin-scaffolder-backend-module-gcp` or a similar external storage provider. The scaffolder rejects a configured provider that has not been installed and registered.

  Enabling crash recovery does not keep completed task event streams open; normal task completion remains terminal for event-stream clients.

### `@backstage/plugin-search-backend-module-catalog` (0.3.18 → [0.3.19-next.0](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#0319-next0))

#### 0.3.19-next.0

##### Patch Changes

- [`979c255`](https://github.com/backstage/backstage/commit/979c255): Improved catalog indexing performance by using cursor pagination for TechDocs and avoiding unused total item counts in search collators.

### `@backstage/plugin-search-backend-module-techdocs` (0.4.17 → [0.4.18-next.0](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#0418-next0))

#### 0.4.18-next.0

##### Patch Changes

- [`979c255`](https://github.com/backstage/backstage/commit/979c255): Improved catalog indexing performance by using cursor pagination for TechDocs and avoiding unused total item counts in search collators.

### `@backstage/ui` (0.17.1 → [0.17.2-next.0](../../changelogs/@backstage/ui.md#0172-next0))

#### 0.17.2-next.0

##### Patch Changes

- [`f914343`](https://github.com/backstage/backstage/commit/f914343): Prevent BUI styles from overriding document and native control line heights while preserving BUI component typography.

## Minor version bumps

### `@backstage/plugin-scaffolder` (1.38.2 → [1.39.0-next.0](../../changelogs/@backstage/plugin-scaffolder.md#1390-next0))

#### 1.39.0-next.0

##### Minor Changes

- [`5ff93bf`](https://github.com/backstage/backstage/commit/5ff93bf): Added functionality to register a Template Outputs Component in the new frontend system.

### `@backstage/plugin-scaffolder-backend` (4.0.5 → [4.1.0-next.0](../../changelogs/@backstage/plugin-scaffolder-backend.md#410-next0))

#### 4.1.0-next.0

##### Minor Changes

- [`1a705ca`](https://github.com/backstage/backstage/commit/1a705ca): Applied `templateDryRunPermission` to inline Software Template dry runs and the corresponding backend action. Permission policies that deny unknown permissions must explicitly allow `scaffolder.template.dry-run` to retain existing dry-run access.
- [`e95b649`](https://github.com/backstage/backstage/commit/e95b649): Added task recovery feature with new `scaffolder.taskRecovery` config section. When enabled, tasks that crash or timeout are automatically recovered and resume from the last completed step, task secrets are retained until the task reaches a terminal state so recovery can continue, and completed step outputs are persisted. Enabling recovery applies to all scaffolder tasks, so actions used by those tasks should be idempotent or use checkpoints. When recovery is disabled (the default), the previous behavior is unchanged: secrets are cleared as soon as a task is claimed and retries re-run every step. The new config consolidates previous experimental flags (`EXPERIMENTAL_recoverTasks`, `EXPERIMENTAL_workspaceSerialization`, `EXPERIMENTAL_recoverTasksTimeout`) which remain supported as fallbacks. The legacy workspace provider setting continues to select a provider only when `EXPERIMENTAL_workspaceSerialization` is `true`.

  Workspace serialization for task recovery now requires installing a separate workspace provider module, including when you use the legacy configuration. For development, use `@backstage/plugin-scaffolder-backend-module-workspace-database` (50 MB limit, not recommended for production). On first startup, that module migrates existing database workspace snapshots from the legacy task storage. For production, use `@backstage/plugin-scaffolder-backend-module-gcp` or a similar external storage provider. The scaffolder rejects a configured provider that has not been installed and registered.

  Enabling crash recovery does not keep completed task event streams open; normal task completion remains terminal for event-stream clients.

##### Patch Changes

- [`2bf1392`](https://github.com/backstage/backstage/commit/2bf1392): Software template inline conditionals without an `else` branch now render an empty string when their condition is false, matching Nunjucks behavior.
- [`beaa3db`](https://github.com/backstage/backstage/commit/beaa3db): Reject Scaffolder steps where `each` resolves to a primitive value instead of an array or object.
- [`c1a30ef`](https://github.com/backstage/backstage/commit/c1a30ef): Restored support for intrinsic string, number, array, `Map`, and `Set` methods in software templates.

### `@backstage/plugin-scaffolder-common` (2.2.2 → [2.3.0-next.0](../../changelogs/@backstage/plugin-scaffolder-common.md#230-next0))

#### 2.3.0-next.0

##### Minor Changes

- [`1a705ca`](https://github.com/backstage/backstage/commit/1a705ca): Added `templateDryRunPermission`, which allows permission policies to control who can submit inline Software Template dry runs.

### `@backstage/plugin-scaffolder-react` (2.0.3 → [2.1.0-next.0](../../changelogs/@backstage/plugin-scaffolder-react.md#210-next0))

#### 2.1.0-next.0

##### Minor Changes

- [`5ff93bf`](https://github.com/backstage/backstage/commit/5ff93bf): Added functionality to register a Template Outputs Component in the new frontend system.

## Other patch version bumps

### `@backstage/plugin-catalog-react` (3.2.2 → [3.2.2-next.0](../../changelogs/@backstage/plugin-catalog-react.md#322-next0))

_No changelog entries found._

### `@backstage/plugin-search-backend` (2.1.6 → [2.1.7-next.0](../../changelogs/@backstage/plugin-search-backend.md#217-next0))

#### 2.1.7-next.0

##### Patch Changes

- [`b11c9b4`](https://github.com/backstage/backstage/commit/b11c9b4): Fixed a bug where the search engine could receive an unfiltered query when no document types were permitted.

### `@backstage/plugin-search-backend-module-elasticsearch` (1.8.7 → [1.8.8-next.0](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#188-next0))

#### 1.8.8-next.0

##### Patch Changes

- [`b11c9b4`](https://github.com/backstage/backstage/commit/b11c9b4): Fixed a bug where an empty document type list could result in querying all indices instead of returning empty results.

### `@techdocs/cli` (1.11.3 → [1.11.4-next.0](../../changelogs/@techdocs/cli.md#1114-next0))

#### 1.11.4-next.0

##### Patch Changes

- [`de92fae`](https://github.com/backstage/backstage/commit/de92fae): Fixed an issue where `techdocs-cli serve` would silently stop detecting documentation changes and no longer refresh the browser when the Python environment (TechDocs container image or local) contains `click` 8.3.x. The CLI now explicitly enables MkDocs live reload when serving.

## Excluded dependency updates

- `@backstage/app-defaults` (1.7.11 → [1.7.12-next.0](../../changelogs/@backstage/app-defaults.md#1712-next0))
- `@backstage/backend-dynamic-feature-service` (0.8.6 → [0.8.7-next.0](../../changelogs/@backstage/backend-dynamic-feature-service.md#087-next0))
- `@backstage/cli` (0.36.5 → [0.36.6-next.0](../../changelogs/@backstage/cli.md#0366-next0))
- `@backstage/cli-defaults` (0.1.5 → [0.1.6-next.0](../../changelogs/@backstage/cli-defaults.md#016-next0))
- `@backstage/core-app-api` (1.20.4 → [1.20.5-next.0](../../changelogs/@backstage/core-app-api.md#1205-next0))
- `@backstage/core-compat-api` (0.5.14 → [0.5.15-next.0](../../changelogs/@backstage/core-compat-api.md#0515-next0))
- `@backstage/core-components` (0.18.13 → [0.18.14-next.0](../../changelogs/@backstage/core-components.md#01814-next0))
- `@backstage/dev-utils` (1.1.26 → [1.1.27-next.0](../../changelogs/@backstage/dev-utils.md#1127-next0))
- `@backstage/frontend-app-api` (0.16.7 → [0.16.8-next.0](../../changelogs/@backstage/frontend-app-api.md#0168-next0))
- `@backstage/frontend-defaults` (0.5.5 → [0.5.6-next.0](../../changelogs/@backstage/frontend-defaults.md#056-next0))
- `@backstage/frontend-dev-utils` (0.1.5 → [0.1.6-next.0](../../changelogs/@backstage/frontend-dev-utils.md#016-next0))
- `@backstage/frontend-test-utils` (0.6.3 → [0.6.4-next.0](../../changelogs/@backstage/frontend-test-utils.md#064-next0))
- `@backstage/plugin-api-docs` (0.14.4 → [0.14.5-next.0](../../changelogs/@backstage/plugin-api-docs.md#0145-next0))
- `@backstage/plugin-app-visualizer` (0.2.7 → [0.2.8-next.0](../../changelogs/@backstage/plugin-app-visualizer.md#028-next0))
- `@backstage/plugin-auth` (0.1.11 → [0.1.12-next.0](../../changelogs/@backstage/plugin-auth.md#0112-next0))
- `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.4.19 → [0.4.20-next.0](../../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#0420-next0))
- `@backstage/plugin-auth-backend-module-oidc-provider` (0.4.19 → [0.4.20-next.0](../../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#0420-next0))
- `@backstage/plugin-auth-react` (0.1.30 → [0.1.31-next.0](../../changelogs/@backstage/plugin-auth-react.md#0131-next0))
- `@backstage/plugin-catalog` (2.0.8 → [2.0.9-next.0](../../changelogs/@backstage/plugin-catalog.md#209-next0))
- `@backstage/plugin-catalog-backend-module-aws` (0.4.26 → [0.4.27-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#0427-next0))
- `@backstage/plugin-catalog-backend-module-gcp` (0.3.22 → [0.3.23-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#0323-next0))
- `@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.24 → [0.2.25-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab-org.md#0225-next0))
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.2.23 → [0.2.24-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#0224-next0))
- `@backstage/plugin-catalog-graph` (0.6.7 → [0.6.8-next.0](../../changelogs/@backstage/plugin-catalog-graph.md#068-next0))
- `@backstage/plugin-catalog-unprocessed-entities` (0.2.34 → [0.2.35-next.0](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#0235-next0))
- `@backstage/plugin-config-schema` (0.1.83 → [0.1.84-next.0](../../changelogs/@backstage/plugin-config-schema.md#0184-next0))
- `@backstage/plugin-devtools` (0.1.42 → [0.1.43-next.0](../../changelogs/@backstage/plugin-devtools.md#0143-next0))
- `@backstage/plugin-home` (0.9.9 → [0.9.10-next.0](../../changelogs/@backstage/plugin-home.md#0910-next0))
- `@backstage/plugin-home-react` (0.1.41 → [0.1.42-next.0](../../changelogs/@backstage/plugin-home-react.md#0142-next0))
- `@backstage/plugin-kubernetes` (0.12.22 → [0.12.23-next.0](../../changelogs/@backstage/plugin-kubernetes.md#01223-next0))
- `@backstage/plugin-kubernetes-cluster` (0.0.40 → [0.0.41-next.0](../../changelogs/@backstage/plugin-kubernetes-cluster.md#0041-next0))
- `@backstage/plugin-kubernetes-react` (0.5.23 → [0.5.24-next.0](../../changelogs/@backstage/plugin-kubernetes-react.md#0524-next0))
- `@backstage/plugin-mui-to-bui` (0.2.10 → [0.2.11-next.0](../../changelogs/@backstage/plugin-mui-to-bui.md#0211-next0))
- `@backstage/plugin-notifications` (0.5.20 → [0.5.21-next.0](../../changelogs/@backstage/plugin-notifications.md#0521-next0))
- `@backstage/plugin-org-react` (0.1.53 → [0.1.54-next.0](../../changelogs/@backstage/plugin-org-react.md#0154-next0))
- `@backstage/plugin-scaffolder-backend-module-azure` (0.2.24 → [0.2.25-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#0225-next0))
- `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.3.9 → [0.3.10-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#0310-next0))
- `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.24 → [0.2.25-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#0225-next0))
- `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.24 → [0.3.25-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#0325-next0))
- `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.26 → [0.3.27-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0327-next0))
- `@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.24 → [0.2.25-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#0225-next0))
- `@backstage/plugin-scaffolder-backend-module-gitea` (0.2.24 → [0.2.25-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#0225-next0))
- `@backstage/plugin-scaffolder-backend-module-github` (0.9.12 → [0.9.13-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#0913-next0))
- `@backstage/plugin-scaffolder-backend-module-notifications` (0.1.25 → [0.1.26-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-notifications.md#0126-next0))
- `@backstage/plugin-scaffolder-backend-module-rails` (0.5.24 → [0.5.25-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0525-next0))
- `@backstage/plugin-scaffolder-backend-module-sentry` (0.3.7 → [0.3.8-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#038-next0))
- `@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.25 → [0.4.26-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0426-next0))
- `@backstage/plugin-scaffolder-node-test-utils` (0.3.14 → [0.3.15-next.0](../../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#0315-next0))
- `@backstage/plugin-search` (1.7.7 → [1.7.8-next.0](../../changelogs/@backstage/plugin-search.md#178-next0))
- `@backstage/plugin-search-react` (1.11.7 → [1.11.8-next.0](../../changelogs/@backstage/plugin-search-react.md#1118-next0))
- `@backstage/plugin-signals` (0.0.34 → [0.0.35-next.0](../../changelogs/@backstage/plugin-signals.md#0035-next0))
- `@backstage/plugin-techdocs` (1.18.0 → [1.18.1-next.0](../../changelogs/@backstage/plugin-techdocs.md#1181-next0))
- `@backstage/plugin-techdocs-addons-test-utils` (2.0.8 → [2.0.9-next.0](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#209-next0))
- `@backstage/plugin-techdocs-module-addons-contrib` (1.1.39 → [1.1.40-next.0](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1140-next0))
- `@backstage/plugin-techdocs-react` (1.3.14 → [1.3.15-next.0](../../changelogs/@backstage/plugin-techdocs-react.md#1315-next0))
- `@backstage/plugin-user-settings` (0.9.6 → [0.9.7-next.0](../../changelogs/@backstage/plugin-user-settings.md#097-next0))
- `@backstage/test-utils` (1.7.21 → [1.7.22-next.0](../../changelogs/@backstage/test-utils.md#1722-next0))
