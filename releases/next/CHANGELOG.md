# RHDH Release next changelog

Changes between Backstage 1.53.0 (RHDH 1.11-m2) and Backstage 1.54.0-next.0 (RHDH next) — 0 added, 0 removed, 158 upgraded, 53 unchanged packages.

## Summary

- [Breaking changes](#breaking-changes): 2 packages
- [0.x patch version bumps](#0x-patch-version-bumps): 10 packages
- [Minor version bumps](#minor-version-bumps): 2 packages
- [Other patch version bumps](#other-patch-version-bumps): 4 packages
- [Excluded dependency updates](#excluded-dependency-updates): 140 packages

## Table of contents

- [Breaking changes](#breaking-changes)
  - [`@backstage/connections` (0.2.0 → 0.3.0-next.0)](#backstageconnections-020--030-next0)
  - [`@backstage/plugin-auth-backend` (0.29.2 → 0.30.0-next.0)](#backstageplugin-auth-backend-0292--0300-next0)
- [0.x patch version bumps](#0x-patch-version-bumps)
  - [`@backstage/backend-defaults` (0.17.5 → 0.17.6-next.0)](#backstagebackend-defaults-0175--0176-next0)
  - [`@backstage/core-components` (0.18.12 → 0.18.13-next.0)](#backstagecore-components-01812--01813-next0)
  - [`@backstage/create-app` (0.9.0 → 0.9.1-next.0)](#backstagecreate-app-090--091-next0)
  - [`@backstage/plugin-auth-node` (0.7.3 → 0.7.4-next.0)](#backstageplugin-auth-node-073--074-next0)
  - [`@backstage/plugin-catalog-backend-module-backstage-openapi` (0.5.16 → 0.5.17-next.0)](#backstageplugin-catalog-backend-module-backstage-openapi-0516--0517-next0)
  - [`@backstage/plugin-kubernetes-backend` (0.21.6 → 0.21.7-next.0)](#backstageplugin-kubernetes-backend-0216--0217-next0)
  - [`@backstage/plugin-kubernetes-react` (0.5.22 → 0.5.23-next.0)](#backstageplugin-kubernetes-react-0522--0523-next0)
  - [`@backstage/plugin-mcp-actions-backend` (0.2.0 → 0.2.1-next.0)](#backstageplugin-mcp-actions-backend-020--021-next0)
  - [`@backstage/repo-tools` (0.18.0 → 0.18.1-next.0)](#backstagerepo-tools-0180--0181-next0)
  - [`@backstage/ui` (0.17.0 → 0.17.1-next.0)](#backstageui-0170--0171-next0)
- [Minor version bumps](#minor-version-bumps)
  - [`@backstage/backend-plugin-api` (1.9.3 → 1.10.0-next.0)](#backstagebackend-plugin-api-193--1100-next0)
  - [`@backstage/plugin-techdocs` (1.17.8 → 1.18.0-next.0)](#backstageplugin-techdocs-1178--1180-next0)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-app-api` (1.7.2 → 1.7.3-next.0)](#backstagebackend-app-api-172--173-next0)
  - [`@backstage/backend-test-utils` (1.11.5 → 1.11.6-next.0)](#backstagebackend-test-utils-1115--1116-next0)
  - [`@backstage/plugin-scaffolder-backend` (4.0.2 → 4.0.3-next.0)](#backstageplugin-scaffolder-backend-402--403-next0)
  - [`@backstage/plugin-techdocs-node` (1.15.2 → 1.15.3-next.0)](#backstageplugin-techdocs-node-1152--1153-next0)
- [Excluded dependency updates](#excluded-dependency-updates)

## Breaking changes

### `@backstage/connections` (0.2.0 → [0.3.0-next.0](../../changelogs/@backstage/connections.md#030-next0))

#### 0.3.0-next.0

##### Minor Changes

- [`64cea29`](https://github.com/backstage/backstage/commit/64cea29): **BREAKING**: Changed `@backstage/connections` into a common library so its connection types, schemas, and service contract can be used by isomorphic packages. The Node.js service implementation is now internal. Backend-only APIs and configuration types, including `connectionsServiceRef`, `connectionsServiceFactory`, `DefaultConnectionsService`, `declareConnection`, `RootConnection`, and `AnyRootConnection`, are no longer exported from this package.
- [`1bfed76`](https://github.com/backstage/backstage/commit/1bfed76): **BREAKING**: Changed connection types to use portable configuration schemas as the source of root connection types, with JSON Schema generation and strongly typed parsing that do not expose the underlying Zod schemas.

##### Patch Changes

- [`f60a23a`](https://github.com/backstage/backstage/commit/f60a23a): Require every connection to configure at least one auth method. Use the `none` auth method for unauthenticated connections.
- [`c0f9a7d`](https://github.com/backstage/backstage/commit/c0f9a7d): Removed the unsupported unauthenticated AWS CodeCommit auth option. AWS CodeCommit connections now only expose access key or assume role authentication.

### `@backstage/plugin-auth-backend` (0.29.2 → [0.30.0-next.0](../../changelogs/@backstage/plugin-auth-backend.md#0300-next0))

#### 0.30.0-next.0

##### Minor Changes

- [`274acc5`](https://github.com/backstage/backstage/commit/274acc5): **BREAKING**: The OAuth redirect URI and client ID metadata document allowlists now match patterns against each URL component separately instead of against the full URL string. Wildcards no longer match across the host and path boundary, patterns must include an explicit protocol and are otherwise rejected as invalid configuration instead of being silently ignored, and redirect URIs that contain embedded credentials are always rejected.

  A wildcard port also no longer implicitly matches every path: a pattern such as `http://localhost:*` now only matches the root path. Use `http://localhost:*/*` to allow any port and any path. The built-in loopback defaults have been updated accordingly, so this only affects explicitly configured patterns.

## 0.x patch version bumps

### `@backstage/backend-defaults` (0.17.5 → [0.17.6-next.0](../../changelogs/@backstage/backend-defaults.md#0176-next0))

#### 0.17.6-next.0

##### Patch Changes

- [`79c1d58`](https://github.com/backstage/backstage/commit/79c1d58): Fixed a bug in the Azure DevOps URL reader where the abort signal was not forwarded to the commits API fetch, causing the fetch to hang indefinitely when a build timeout or cancellation was triggered.
- [`74d8cbf`](https://github.com/backstage/backstage/commit/74d8cbf): Added a new public `@backstage/backend-defaults/rootSystemMetadata` entrypoint, exporting `rootSystemMetadataServiceFactory` and `DefaultRootSystemMetadataService`. The system metadata service is now registered automatically as a default service, so backends no longer need to add it manually.

### `@backstage/core-components` (0.18.12 → [0.18.13-next.0](../../changelogs/@backstage/core-components.md#01813-next0))

#### 0.18.13-next.0

##### Patch Changes

- [`226817d`](https://github.com/backstage/backstage/commit/226817d): chore(deps): bump `js-yaml` from 4.2.0 to 4.3.0

### `@backstage/create-app` (0.9.0 → [0.9.1-next.0](../../changelogs/@backstage/create-app.md#091-next0))

#### 0.9.1-next.0

##### Patch Changes

- [`0b8573f`](https://github.com/backstage/backstage/commit/0b8573f): Clarified that the host build steps must use the same Node version as the Docker base image in the Dockerfile.

### `@backstage/plugin-auth-node` (0.7.3 → [0.7.4-next.0](../../changelogs/@backstage/plugin-auth-node.md#074-next0))

#### 0.7.4-next.0

##### Patch Changes

- [`7ca2955`](https://github.com/backstage/backstage/commit/7ca2955): Fix OAuth start handler crashing with a 500 error on malformed origins, now returns a 400 error.

### `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.5.16 → [0.5.17-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#0517-next0))

#### 0.5.17-next.0

##### Patch Changes

- [`74d8cbf`](https://github.com/backstage/backstage/commit/74d8cbf): The internal OpenAPI documentation provider now automatically discovers installed plugins via the system metadata service. The `catalog.providers.backstageOpenapi.plugins` configuration option is now optional and deprecated; when omitted, all installed plugins are discovered dynamically.

### `@backstage/plugin-kubernetes-backend` (0.21.6 → [0.21.7-next.0](../../changelogs/@backstage/plugin-kubernetes-backend.md#0217-next0))

#### 0.21.7-next.0

##### Patch Changes

- [`684c9b9`](https://github.com/backstage/backstage/commit/684c9b9): Fixed `AwsIamStrategy` to resolve account-specific AWS credentials when an assume role ARN is configured, enabling support for `webIdentityTokenFile` and `accountDefaults` in environments without default AWS credentials.
- [`f0834bd`](https://github.com/backstage/backstage/commit/f0834bd): Added a `kubernetes.clusterLocatorContinueOnError` configuration option. When set to `true`, a failing cluster locator no longer causes the entire cluster list request to fail — errors are logged and clusters from the remaining successful locators are still returned. The default is `false`, preserving the existing behavior.

### `@backstage/plugin-kubernetes-react` (0.5.22 → [0.5.23-next.0](../../changelogs/@backstage/plugin-kubernetes-react.md#0523-next0))

#### 0.5.23-next.0

##### Patch Changes

- [`226817d`](https://github.com/backstage/backstage/commit/226817d): chore(deps): bump `js-yaml` from 4.2.0 to 4.3.0

### `@backstage/plugin-mcp-actions-backend` (0.2.0 → [0.2.1-next.0](../../changelogs/@backstage/plugin-mcp-actions-backend.md#021-next0))

#### 0.2.1-next.0

##### Patch Changes

- [`ec2b90f`](https://github.com/backstage/backstage/commit/ec2b90f): Added support for configuring MCP server instructions for both default and named servers.
- [`e4983fd`](https://github.com/backstage/backstage/commit/e4983fd): Added audit logging for MCP server operations using the Backstage Auditor Service. The plugin now emits `connection`, `tool-discovery`, and `tool-execution` audit events, allowing adopters to monitor and audit MCP server activity.

### `@backstage/repo-tools` (0.18.0 → [0.18.1-next.0](../../changelogs/@backstage/repo-tools.md#0181-next0))

#### 0.18.1-next.0

##### Patch Changes

- [`226817d`](https://github.com/backstage/backstage/commit/226817d): chore(deps): bump `js-yaml` from 4.2.0 to 4.3.0

### `@backstage/ui` (0.17.0 → [0.17.1-next.0](../../changelogs/@backstage/ui.md#0171-next0))

#### 0.17.1-next.0

##### Patch Changes

- [`52a58be`](https://github.com/backstage/backstage/commit/52a58be): Fixed Table not filling container width in Firefox when using `TableRoot` directly inside `ResizableTableContainer`. Changed `overflow: hidden` to `overflow: auto` on the resizable container so it handles scrolling for direct `TableRoot` usages.

## Minor version bumps

### `@backstage/backend-plugin-api` (1.9.3 → [1.10.0-next.0](../../changelogs/@backstage/backend-plugin-api.md#1100-next0))

#### 1.10.0-next.0

##### Minor Changes

- [`74d8cbf`](https://github.com/backstage/backstage/commit/74d8cbf): Added `coreServices.rootSystemMetadata`, a new stable public service for reading metadata about the running Backstage system, including a list of installed plugins. Previously only available as an alpha API, it is now part of the standard `coreServices` namespace.

### `@backstage/plugin-techdocs` (1.17.8 → [1.18.0-next.0](../../changelogs/@backstage/plugin-techdocs.md#1180-next0))

#### 1.18.0-next.0

##### Minor Changes

- [`4f9ce5e`](https://github.com/backstage/backstage/commit/4f9ce5e): Add `initialFilter` config for `page:techdocs`. Valid options are `all`, `owned` and `starred`. Defaults to `owned`.

## Other patch version bumps

### `@backstage/backend-app-api` (1.7.2 → [1.7.3-next.0](../../changelogs/@backstage/backend-app-api.md#173-next0))

#### 1.7.3-next.0

##### Patch Changes

- [`64cea29`](https://github.com/backstage/backstage/commit/64cea29): Updated the backend runtime to use the internal connection service implementation after the shared connection contract moved into `@backstage/connections`.

### `@backstage/backend-test-utils` (1.11.5 → [1.11.6-next.0](../../changelogs/@backstage/backend-test-utils.md#1116-next0))

#### 1.11.6-next.0

##### Patch Changes

- [`5ae46fc`](https://github.com/backstage/backstage/commit/5ae46fc): Added `mockServices.rootSystemMetadata` mock implementation to support the new stable `coreServices.rootSystemMetadata` service in tests.

### `@backstage/plugin-scaffolder-backend` (4.0.2 → [4.0.3-next.0](../../changelogs/@backstage/plugin-scaffolder-backend.md#403-next0))

#### 4.0.3-next.0

##### Patch Changes

- [`4bbc088`](https://github.com/backstage/backstage/commit/4bbc088): Fixed the stale task janitor not being set up by passing the scheduler service to the router.

### `@backstage/plugin-techdocs-node` (1.15.2 → [1.15.3-next.0](../../changelogs/@backstage/plugin-techdocs-node.md#1153-next0))

#### 1.15.3-next.0

##### Patch Changes

- [`226817d`](https://github.com/backstage/backstage/commit/226817d): chore(deps): bump `js-yaml` from 4.2.0 to 4.3.0

## Excluded dependency updates

- `@backstage/app-defaults` (1.7.10 → [1.7.11-next.0](../../changelogs/@backstage/app-defaults.md#1711-next0))
- `@backstage/backend-dynamic-feature-service` (0.8.4 → [0.8.5-next.0](../../changelogs/@backstage/backend-dynamic-feature-service.md#085-next0))
- `@backstage/backend-openapi-utils` (0.7.0 → [0.7.1-next.0](../../changelogs/@backstage/backend-openapi-utils.md#071-next0))
- `@backstage/core-app-api` (1.20.3 → [1.20.4-next.0](../../changelogs/@backstage/core-app-api.md#1204-next0))
- `@backstage/core-compat-api` (0.5.13 → [0.5.14-next.0](../../changelogs/@backstage/core-compat-api.md#0514-next0))
- `@backstage/dev-utils` (1.1.25 → [1.1.26-next.0](../../changelogs/@backstage/dev-utils.md#1126-next0))
- `@backstage/frontend-app-api` (0.16.6 → [0.16.7-next.0](../../changelogs/@backstage/frontend-app-api.md#0167-next0))
- `@backstage/frontend-defaults` (0.5.4 → [0.5.5-next.0](../../changelogs/@backstage/frontend-defaults.md#055-next0))
- `@backstage/frontend-dev-utils` (0.1.4 → [0.1.5-next.0](../../changelogs/@backstage/frontend-dev-utils.md#015-next0))
- `@backstage/frontend-test-utils` (0.6.2 → [0.6.3-next.0](../../changelogs/@backstage/frontend-test-utils.md#063-next0))
- `@backstage/plugin-api-docs` (0.14.3 → [0.14.4-next.0](../../changelogs/@backstage/plugin-api-docs.md#0144-next0))
- `@backstage/plugin-app` (0.5.1 → [0.5.2-next.0](../../changelogs/@backstage/plugin-app.md#052-next0))
- `@backstage/plugin-app-backend` (0.5.16 → [0.5.17-next.0](../../changelogs/@backstage/plugin-app-backend.md#0517-next0))
- `@backstage/plugin-app-module-user-settings` (0.1.0 → [0.1.1-next.0](../../changelogs/@backstage/plugin-app-module-user-settings.md#011-next0))
- `@backstage/plugin-app-node` (0.1.47 → [0.1.48-next.0](../../changelogs/@backstage/plugin-app-node.md#0148-next0))
- `@backstage/plugin-app-visualizer` (0.2.6 → [0.2.7-next.0](../../changelogs/@backstage/plugin-app-visualizer.md#027-next0))
- `@backstage/plugin-auth` (0.1.10 → [0.1.11-next.0](../../changelogs/@backstage/plugin-auth.md#0111-next0))
- `@backstage/plugin-auth-backend-module-atlassian-provider` (0.4.17 → [0.4.18-next.0](../../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#0418-next0))
- `@backstage/plugin-auth-backend-module-auth0-provider` (0.4.3 → [0.4.4-next.0](../../changelogs/@backstage/plugin-auth-backend-module-auth0-provider.md#044-next0))
- `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.4.18 → [0.4.19-next.0](../../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#0419-next0))
- `@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.2.22 → [0.2.23-next.0](../../changelogs/@backstage/plugin-auth-backend-module-azure-easyauth-provider.md#0223-next0))
- `@backstage/plugin-auth-backend-module-bitbucket-provider` (0.3.17 → [0.3.18-next.0](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-provider.md#0318-next0))
- `@backstage/plugin-auth-backend-module-bitbucket-server-provider` (0.2.17 → [0.2.18-next.0](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-server-provider.md#0218-next0))
- `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.4.17 → [0.4.18-next.0](../../changelogs/@backstage/plugin-auth-backend-module-cloudflare-access-provider.md#0418-next0))
- `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.4.17 → [0.4.18-next.0](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#0418-next0))
- `@backstage/plugin-auth-backend-module-github-provider` (0.5.5 → [0.5.6-next.0](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#056-next0))
- `@backstage/plugin-auth-backend-module-gitlab-provider` (0.4.5 → [0.4.6-next.0](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#046-next0))
- `@backstage/plugin-auth-backend-module-google-provider` (0.3.17 → [0.3.18-next.0](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#0318-next0))
- `@backstage/plugin-auth-backend-module-guest-provider` (0.2.21 → [0.2.22-next.0](../../changelogs/@backstage/plugin-auth-backend-module-guest-provider.md#0222-next0))
- `@backstage/plugin-auth-backend-module-microsoft-provider` (0.3.17 → [0.3.18-next.0](../../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#0318-next0))
- `@backstage/plugin-auth-backend-module-oauth2-provider` (0.4.17 → [0.4.18-next.0](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#0418-next0))
- `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.3.1 → [0.3.2-next.0](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#032-next0))
- `@backstage/plugin-auth-backend-module-oidc-provider` (0.4.18 → [0.4.19-next.0](../../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#0419-next0))
- `@backstage/plugin-auth-backend-module-okta-provider` (0.2.17 → [0.2.18-next.0](../../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#0218-next0))
- `@backstage/plugin-auth-backend-module-onelogin-provider` (0.3.17 → [0.3.18-next.0](../../changelogs/@backstage/plugin-auth-backend-module-onelogin-provider.md#0318-next0))
- `@backstage/plugin-auth-backend-module-openshift-provider` (0.1.9 → [0.1.10-next.0](../../changelogs/@backstage/plugin-auth-backend-module-openshift-provider.md#0110-next0))
- `@backstage/plugin-auth-backend-module-pinniped-provider` (0.3.16 → [0.3.17-next.0](../../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#0317-next0))
- `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.5.16 → [0.5.17-next.0](../../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#0517-next0))
- `@backstage/plugin-auth-react` (0.1.29 → [0.1.30-next.0](../../changelogs/@backstage/plugin-auth-react.md#0130-next0))
- `@backstage/plugin-catalog` (2.0.7 → [2.0.8-next.0](../../changelogs/@backstage/plugin-catalog.md#208-next0))
- `@backstage/plugin-catalog-backend` (3.8.1 → [3.8.2-next.0](../../changelogs/@backstage/plugin-catalog-backend.md#382-next0))
- `@backstage/plugin-catalog-backend-module-ai-model` (0.1.2 → [0.1.3-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-ai-model.md#013-next0))
- `@backstage/plugin-catalog-backend-module-aws` (0.4.25 → [0.4.26-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#0426-next0))
- `@backstage/plugin-catalog-backend-module-azure` (0.3.19 → [0.3.20-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0320-next0))
- `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.5.13 → [0.5.14-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#0514-next0))
- `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.5.13 → [0.5.14-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#0514-next0))
- `@backstage/plugin-catalog-backend-module-gcp` (0.3.21 → [0.3.22-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#0322-next0))
- `@backstage/plugin-catalog-backend-module-gerrit` (0.3.16 → [0.3.17-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0317-next0))
- `@backstage/plugin-catalog-backend-module-gitea` (0.1.14 → [0.1.15-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-gitea.md#0115-next0))
- `@backstage/plugin-catalog-backend-module-github` (0.13.4 → [0.13.5-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#0135-next0))
- `@backstage/plugin-catalog-backend-module-github-org` (0.3.24 → [0.3.25-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#0325-next0))
- `@backstage/plugin-catalog-backend-module-gitlab` (0.8.5 → [0.8.6-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#086-next0))
- `@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.23 → [0.2.24-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab-org.md#0224-next0))
- `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.7.14 → [0.7.15-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#0715-next0))
- `@backstage/plugin-catalog-backend-module-ldap` (0.12.7 → [0.12.8-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0128-next0))
- `@backstage/plugin-catalog-backend-module-logs` (0.1.24 → [0.1.25-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-logs.md#0125-next0))
- `@backstage/plugin-catalog-backend-module-msgraph` (0.10.4 → [0.10.5-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#0105-next0))
- `@backstage/plugin-catalog-backend-module-msgraph-incremental` (0.1.2 → [0.1.3-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph-incremental.md#013-next0))
- `@backstage/plugin-catalog-backend-module-openapi` (0.2.24 → [0.2.25-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0225-next0))
- `@backstage/plugin-catalog-backend-module-puppetdb` (0.2.24 → [0.2.25-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0225-next0))
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.2.22 → [0.2.23-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#0223-next0))
- `@backstage/plugin-catalog-backend-module-unprocessed` (0.6.14 → [0.6.15-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#0615-next0))
- `@backstage/plugin-catalog-graph` (0.6.6 → [0.6.7-next.0](../../changelogs/@backstage/plugin-catalog-graph.md#067-next0))
- `@backstage/plugin-catalog-import` (0.13.15 → [0.13.16-next.0](../../changelogs/@backstage/plugin-catalog-import.md#01316-next0))
- `@backstage/plugin-catalog-node` (2.2.3 → [2.2.4-next.0](../../changelogs/@backstage/plugin-catalog-node.md#224-next0))
- `@backstage/plugin-catalog-react` (3.2.0 → [3.2.1-next.0](../../changelogs/@backstage/plugin-catalog-react.md#321-next0))
- `@backstage/plugin-catalog-unprocessed-entities` (0.2.33 → [0.2.34-next.0](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#0234-next0))
- `@backstage/plugin-config-schema` (0.1.82 → [0.1.83-next.0](../../changelogs/@backstage/plugin-config-schema.md#0183-next0))
- `@backstage/plugin-devtools` (0.1.41 → [0.1.42-next.0](../../changelogs/@backstage/plugin-devtools.md#0142-next0))
- `@backstage/plugin-devtools-backend` (0.5.19 → [0.5.20-next.0](../../changelogs/@backstage/plugin-devtools-backend.md#0520-next0))
- `@backstage/plugin-events-backend` (0.6.4 → [0.6.5-next.0](../../changelogs/@backstage/plugin-events-backend.md#065-next0))
- `@backstage/plugin-events-backend-module-aws-sqs` (0.4.24 → [0.4.25-next.0](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#0425-next0))
- `@backstage/plugin-events-backend-module-azure` (0.2.33 → [0.2.34-next.0](../../changelogs/@backstage/plugin-events-backend-module-azure.md#0234-next0))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.33 → [0.2.34-next.0](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0234-next0))
- `@backstage/plugin-events-backend-module-bitbucket-server` (0.1.14 → [0.1.15-next.0](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-server.md#0115-next0))
- `@backstage/plugin-events-backend-module-gerrit` (0.2.33 → [0.2.34-next.0](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0234-next0))
- `@backstage/plugin-events-backend-module-github` (0.4.14 → [0.4.15-next.0](../../changelogs/@backstage/plugin-events-backend-module-github.md#0415-next0))
- `@backstage/plugin-events-backend-module-gitlab` (0.3.14 → [0.3.15-next.0](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#0315-next0))
- `@backstage/plugin-events-backend-module-google-pubsub` (0.2.5 → [0.2.6-next.0](../../changelogs/@backstage/plugin-events-backend-module-google-pubsub.md#026-next0))
- `@backstage/plugin-events-backend-module-kafka` (0.3.6 → [0.3.7-next.0](../../changelogs/@backstage/plugin-events-backend-module-kafka.md#037-next0))
- `@backstage/plugin-events-backend-test-utils` (0.1.57 → [0.1.58-next.0](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0158-next0))
- `@backstage/plugin-events-node` (0.4.24 → [0.4.25-next.0](../../changelogs/@backstage/plugin-events-node.md#0425-next0))
- `@backstage/plugin-gateway-backend` (1.1.7 → [1.1.8-next.0](../../changelogs/@backstage/plugin-gateway-backend.md#118-next0))
- `@backstage/plugin-home` (0.9.8 → [0.9.9-next.0](../../changelogs/@backstage/plugin-home.md#099-next0))
- `@backstage/plugin-home-react` (0.1.40 → [0.1.41-next.0](../../changelogs/@backstage/plugin-home-react.md#0141-next0))
- `@backstage/plugin-kubernetes` (0.12.21 → [0.12.22-next.0](../../changelogs/@backstage/plugin-kubernetes.md#01222-next0))
- `@backstage/plugin-kubernetes-cluster` (0.0.39 → [0.0.40-next.0](../../changelogs/@backstage/plugin-kubernetes-cluster.md#0040-next0))
- `@backstage/plugin-kubernetes-node` (0.4.6 → [0.4.7-next.0](../../changelogs/@backstage/plugin-kubernetes-node.md#047-next0))
- `@backstage/plugin-mui-to-bui` (0.2.9 → [0.2.10-next.0](../../changelogs/@backstage/plugin-mui-to-bui.md#0210-next0))
- `@backstage/plugin-notifications` (0.5.19 → [0.5.20-next.0](../../changelogs/@backstage/plugin-notifications.md#0520-next0))
- `@backstage/plugin-notifications-backend` (0.6.7 → [0.6.8-next.0](../../changelogs/@backstage/plugin-notifications-backend.md#068-next0))
- `@backstage/plugin-notifications-backend-module-email` (0.3.23 → [0.3.24-next.0](../../changelogs/@backstage/plugin-notifications-backend-module-email.md#0324-next0))
- `@backstage/plugin-notifications-backend-module-slack` (0.4.4 → [0.4.5-next.0](../../changelogs/@backstage/plugin-notifications-backend-module-slack.md#045-next0))
- `@backstage/plugin-notifications-node` (0.2.28 → [0.2.29-next.0](../../changelogs/@backstage/plugin-notifications-node.md#0229-next0))
- `@backstage/plugin-org` (0.7.6 → [0.7.7-next.0](../../changelogs/@backstage/plugin-org.md#077-next0))
- `@backstage/plugin-org-react` (0.1.52 → [0.1.53-next.0](../../changelogs/@backstage/plugin-org-react.md#0153-next0))
- `@backstage/plugin-permission-backend` (0.7.14 → [0.7.15-next.0](../../changelogs/@backstage/plugin-permission-backend.md#0715-next0))
- `@backstage/plugin-permission-backend-module-allow-all-policy` (0.2.21 → [0.2.22-next.0](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#0222-next0))
- `@backstage/plugin-permission-node` (0.11.2 → [0.11.3-next.0](../../changelogs/@backstage/plugin-permission-node.md#0113-next0))
- `@backstage/plugin-proxy-backend` (0.6.15 → [0.6.16-next.0](../../changelogs/@backstage/plugin-proxy-backend.md#0616-next0))
- `@backstage/plugin-proxy-node` (0.1.17 → [0.1.18-next.0](../../changelogs/@backstage/plugin-proxy-node.md#0118-next0))
- `@backstage/plugin-scaffolder` (1.38.1 → [1.38.2-next.0](../../changelogs/@backstage/plugin-scaffolder.md#1382-next0))
- `@backstage/plugin-scaffolder-backend-module-azure` (0.2.23 → [0.2.24-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#0224-next0))
- `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.3.8 → [0.3.9-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#039-next0))
- `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.23 → [0.2.24-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#0224-next0))
- `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.23 → [0.3.24-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#0324-next0))
- `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.25 → [0.3.26-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0326-next0))
- `@backstage/plugin-scaffolder-backend-module-gcp` (0.2.23 → [0.2.24-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-gcp.md#0224-next0))
- `@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.23 → [0.2.24-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#0224-next0))
- `@backstage/plugin-scaffolder-backend-module-gitea` (0.2.23 → [0.2.24-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#0224-next0))
- `@backstage/plugin-scaffolder-backend-module-github` (0.9.11 → [0.9.12-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#0912-next0))
- `@backstage/plugin-scaffolder-backend-module-gitlab` (0.11.8 → [0.11.9-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#0119-next0))
- `@backstage/plugin-scaffolder-backend-module-notifications` (0.1.24 → [0.1.25-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-notifications.md#0125-next0))
- `@backstage/plugin-scaffolder-backend-module-rails` (0.5.23 → [0.5.24-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0524-next0))
- `@backstage/plugin-scaffolder-backend-module-sentry` (0.3.6 → [0.3.7-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#037-next0))
- `@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.24 → [0.4.25-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0425-next0))
- `@backstage/plugin-scaffolder-node` (0.13.5 → [0.13.6-next.0](../../changelogs/@backstage/plugin-scaffolder-node.md#0136-next0))
- `@backstage/plugin-scaffolder-node-test-utils` (0.3.13 → [0.3.14-next.0](../../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#0314-next0))
- `@backstage/plugin-scaffolder-react` (2.0.2 → [2.0.3-next.0](../../changelogs/@backstage/plugin-scaffolder-react.md#203-next0))
- `@backstage/plugin-search` (1.7.6 → [1.7.7-next.0](../../changelogs/@backstage/plugin-search.md#177-next0))
- `@backstage/plugin-search-backend` (2.1.4 → [2.1.5-next.0](../../changelogs/@backstage/plugin-search-backend.md#215-next0))
- `@backstage/plugin-search-backend-module-catalog` (0.3.17 → [0.3.18-next.0](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#0318-next0))
- `@backstage/plugin-search-backend-module-elasticsearch` (1.8.5 → [1.8.6-next.0](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#186-next0))
- `@backstage/plugin-search-backend-module-explore` (0.3.16 → [0.3.17-next.0](../../changelogs/@backstage/plugin-search-backend-module-explore.md#0317-next0))
- `@backstage/plugin-search-backend-module-pg` (0.5.57 → [0.5.58-next.0](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0558-next0))
- `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.3.22 → [0.3.23-next.0](../../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#0323-next0))
- `@backstage/plugin-search-backend-module-techdocs` (0.4.16 → [0.4.17-next.0](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#0417-next0))
- `@backstage/plugin-search-backend-node` (1.4.6 → [1.4.7-next.0](../../changelogs/@backstage/plugin-search-backend-node.md#147-next0))
- `@backstage/plugin-search-react` (1.11.6 → [1.11.7-next.0](../../changelogs/@backstage/plugin-search-react.md#1117-next0))
- `@backstage/plugin-signals` (0.0.33 → [0.0.34-next.0](../../changelogs/@backstage/plugin-signals.md#0034-next0))
- `@backstage/plugin-signals-backend` (0.3.17 → [0.3.18-next.0](../../changelogs/@backstage/plugin-signals-backend.md#0318-next0))
- `@backstage/plugin-signals-node` (0.2.3 → [0.2.4-next.0](../../changelogs/@backstage/plugin-signals-node.md#024-next0))
- `@backstage/plugin-techdocs-addons-test-utils` (2.0.7 → [2.0.8-next.0](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#208-next0))
- `@backstage/plugin-techdocs-backend` (2.2.2 → [2.2.3-next.0](../../changelogs/@backstage/plugin-techdocs-backend.md#223-next0))
- `@backstage/plugin-techdocs-module-addons-contrib` (1.1.38 → [1.1.39-next.0](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1139-next0))
- `@backstage/plugin-techdocs-react` (1.3.13 → [1.3.14-next.0](../../changelogs/@backstage/plugin-techdocs-react.md#1314-next0))
- `@backstage/plugin-user-settings` (0.9.5 → [0.9.6-next.0](../../changelogs/@backstage/plugin-user-settings.md#096-next0))
- `@backstage/plugin-user-settings-backend` (0.4.5 → [0.4.6-next.0](../../changelogs/@backstage/plugin-user-settings-backend.md#046-next0))
- `@backstage/test-utils` (1.7.20 → [1.7.21-next.0](../../changelogs/@backstage/test-utils.md#1721-next0))
- `@techdocs/cli` (1.11.2 → [1.11.3-next.0](../../changelogs/@techdocs/cli.md#1113-next0))
