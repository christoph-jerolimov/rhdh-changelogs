# RHDH Release next changelog

Changes between Backstage 1.53.1 (RHDH 1.11-m2) and Backstage 1.54.0-next.3 (RHDH next) — 0 added, 0 removed, 178 upgraded, 33 unchanged packages.

## Summary

- [Breaking changes](#breaking-changes): 3 packages
- [0.x patch version bumps](#0x-patch-version-bumps): 34 packages
- [Minor version bumps](#minor-version-bumps): 4 packages
- [Other patch version bumps](#other-patch-version-bumps): 11 packages
- [Excluded dependency updates](#excluded-dependency-updates): 126 packages

## Table of contents

- [Breaking changes](#breaking-changes)
  - [`@backstage/connections` (0.2.0 → 0.3.0-next.2)](#backstageconnections-020--030-next2)
  - [`@backstage/frontend-plugin-api` (0.17.3 → 0.18.0-next.0)](#backstagefrontend-plugin-api-0173--0180-next0)
  - [`@backstage/plugin-auth-backend` (0.29.2 → 0.30.0-next.1)](#backstageplugin-auth-backend-0292--0300-next1)
- [0.x patch version bumps](#0x-patch-version-bumps)
  - [`@backstage/backend-defaults` (0.17.6 → 0.17.7-next.2)](#backstagebackend-defaults-0176--0177-next2)
  - [`@backstage/backend-dynamic-feature-service` (0.8.5 → 0.8.6-next.1)](#backstagebackend-dynamic-feature-service-085--086-next1)
  - [`@backstage/cli-module-build` (0.1.6 → 0.1.7-next.0)](#backstagecli-module-build-016--017-next0)
  - [`@backstage/cli-module-config` (0.1.5 → 0.1.6-next.0)](#backstagecli-module-config-015--016-next0)
  - [`@backstage/cli-module-lint` (0.1.4 → 0.1.5-next.0)](#backstagecli-module-lint-014--015-next0)
  - [`@backstage/cli-module-new` (0.1.5 → 0.1.6-next.0)](#backstagecli-module-new-015--016-next0)
  - [`@backstage/cli-module-test-jest` (0.1.4 → 0.1.5-next.0)](#backstagecli-module-test-jest-014--015-next0)
  - [`@backstage/core-components` (0.18.12 → 0.18.13-next.2)](#backstagecore-components-01812--01813-next2)
  - [`@backstage/create-app` (0.9.0 → 0.9.1-next.3)](#backstagecreate-app-090--091-next3)
  - [`@backstage/eslint-plugin` (0.3.1 → 0.3.2-next.0)](#backstageeslint-plugin-031--032-next0)
  - [`@backstage/frontend-app-api` (0.16.6 → 0.16.7-next.1)](#backstagefrontend-app-api-0166--0167-next1)
  - [`@backstage/frontend-dynamic-feature-loader` (0.1.14 → 0.1.15-next.1)](#backstagefrontend-dynamic-feature-loader-0114--0115-next1)
  - [`@backstage/plugin-api-docs` (0.14.3 → 0.14.4-next.2)](#backstageplugin-api-docs-0143--0144-next2)
  - [`@backstage/plugin-app` (0.5.1 → 0.5.2-next.2)](#backstageplugin-app-051--052-next2)
  - [`@backstage/plugin-app-react` (0.2.5 → 0.2.6-next.0)](#backstageplugin-app-react-025--026-next0)
  - [`@backstage/plugin-auth-backend-module-microsoft-provider` (0.3.17 → 0.3.18-next.1)](#backstageplugin-auth-backend-module-microsoft-provider-0317--0318-next1)
  - [`@backstage/plugin-auth-node` (0.7.3 → 0.7.4-next.0)](#backstageplugin-auth-node-073--074-next0)
  - [`@backstage/plugin-catalog-backend-module-backstage-openapi` (0.5.16 → 0.5.17-next.0)](#backstageplugin-catalog-backend-module-backstage-openapi-0516--0517-next0)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.7.14 → 0.7.15-next.2)](#backstageplugin-catalog-backend-module-incremental-ingestion-0714--0715-next2)
  - [`@backstage/plugin-catalog-graph` (0.6.6 → 0.6.7-next.2)](#backstageplugin-catalog-graph-066--067-next2)
  - [`@backstage/plugin-catalog-import` (0.13.15 → 0.13.16-next.2)](#backstageplugin-catalog-import-01315--01316-next2)
  - [`@backstage/plugin-catalog-unprocessed-entities` (0.2.33 → 0.2.34-next.1)](#backstageplugin-catalog-unprocessed-entities-0233--0234-next1)
  - [`@backstage/plugin-home` (0.9.8 → 0.9.9-next.2)](#backstageplugin-home-098--099-next2)
  - [`@backstage/plugin-home-react` (0.1.40 → 0.1.41-next.2)](#backstageplugin-home-react-0140--0141-next2)
  - [`@backstage/plugin-kubernetes-backend` (0.21.6 → 0.21.7-next.1)](#backstageplugin-kubernetes-backend-0216--0217-next1)
  - [`@backstage/plugin-kubernetes-react` (0.5.22 → 0.5.23-next.1)](#backstageplugin-kubernetes-react-0522--0523-next1)
  - [`@backstage/plugin-mcp-actions-backend` (0.2.0 → 0.2.1-next.2)](#backstageplugin-mcp-actions-backend-020--021-next2)
  - [`@backstage/plugin-notifications-backend` (0.6.7 → 0.6.8-next.1)](#backstageplugin-notifications-backend-067--068-next1)
  - [`@backstage/plugin-notifications-backend-module-email` (0.3.23 → 0.3.24-next.1)](#backstageplugin-notifications-backend-module-email-0323--0324-next1)
  - [`@backstage/plugin-notifications-backend-module-slack` (0.4.4 → 0.4.5-next.1)](#backstageplugin-notifications-backend-module-slack-044--045-next1)
  - [`@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.23 → 0.2.24-next.1)](#backstageplugin-scaffolder-backend-module-gerrit-0223--0224-next1)
  - [`@backstage/plugin-scaffolder-node` (0.13.5 → 0.13.6-next.2)](#backstageplugin-scaffolder-node-0135--0136-next2)
  - [`@backstage/repo-tools` (0.18.0 → 0.18.1-next.1)](#backstagerepo-tools-0180--0181-next1)
  - [`@backstage/ui` (0.17.0 → 0.17.1-next.0)](#backstageui-0170--0171-next0)
- [Minor version bumps](#minor-version-bumps)
  - [`@backstage/backend-plugin-api` (1.9.3 → 1.10.0-next.1)](#backstagebackend-plugin-api-193--1100-next1)
  - [`@backstage/integration` (2.0.3 → 2.1.0-next.1)](#backstageintegration-203--210-next1)
  - [`@backstage/plugin-catalog-backend` (3.8.1 → 3.9.0-next.2)](#backstageplugin-catalog-backend-381--390-next2)
  - [`@backstage/plugin-techdocs` (1.17.8 → 1.18.0-next.2)](#backstageplugin-techdocs-1178--1180-next2)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-app-api` (1.7.2 → 1.7.3-next.1)](#backstagebackend-app-api-172--173-next1)
  - [`@backstage/backend-test-utils` (1.11.5 → 1.11.6-next.1)](#backstagebackend-test-utils-1115--1116-next1)
  - [`@backstage/config-loader` (1.11.1 → 1.11.2-next.0)](#backstageconfig-loader-1111--1112-next0)
  - [`@backstage/core-plugin-api` (1.12.8 → 1.12.9-next.1)](#backstagecore-plugin-api-1128--1129-next1)
  - [`@backstage/plugin-catalog` (2.0.7 → 2.0.8-next.3)](#backstageplugin-catalog-207--208-next3)
  - [`@backstage/plugin-catalog-react` (3.2.0 → 3.2.1-next.3)](#backstageplugin-catalog-react-320--321-next3)
  - [`@backstage/plugin-gateway-backend` (1.1.7 → 1.1.8-next.1)](#backstageplugin-gateway-backend-117--118-next1)
  - [`@backstage/plugin-scaffolder` (1.38.1 → 1.38.2-next.3)](#backstageplugin-scaffolder-1381--1382-next3)
  - [`@backstage/plugin-scaffolder-backend` (4.0.2 → 4.0.3-next.2)](#backstageplugin-scaffolder-backend-402--403-next2)
  - [`@backstage/plugin-search` (1.7.6 → 1.7.7-next.2)](#backstageplugin-search-176--177-next2)
  - [`@backstage/plugin-techdocs-node` (1.15.2 → 1.15.3-next.1)](#backstageplugin-techdocs-node-1152--1153-next1)
- [Excluded dependency updates](#excluded-dependency-updates)

## Breaking changes

### `@backstage/connections` (0.2.0 → [0.3.0-next.2](../../changelogs/@backstage/connections.md#030-next2))

#### 0.3.0-next.2

##### Minor Changes

- [`dba1eed`](https://github.com/backstage/backstage/commit/dba1eed): **BREAKING**: Connection lookups now take a `query` object instead of a `url`. Every connection type declares which query it accepts, so types that are not identified by a URL can be looked up by other identifiers. All built-in connection types are still matched by URL, so existing lookups just move the URL into the query:

  ```ts
  const connection = await connections.find({
    type: 'github',
    query: { url },
    authMethods: ['app', 'token'],
  });
  ```

  Connections returned from a lookup now also include their `type`.

#### 0.3.0-next.1

##### Patch Changes

- [`b9e11d2`](https://github.com/backstage/backstage/commit/b9e11d2): Updated GitHub authentication selection to prefer an organization-specific App, then an unrestricted App, and finally the only configured App before falling back to token or anonymous authentication.

#### 0.3.0-next.0

##### Minor Changes

- [`64cea29`](https://github.com/backstage/backstage/commit/64cea29): **BREAKING**: Changed `@backstage/connections` into a common library so its connection types, schemas, and service contract can be used by isomorphic packages. The Node.js service implementation is now internal. Backend-only APIs and configuration types, including `connectionsServiceRef`, `connectionsServiceFactory`, `DefaultConnectionsService`, `declareConnection`, `RootConnection`, and `AnyRootConnection`, are no longer exported from this package.
- [`1bfed76`](https://github.com/backstage/backstage/commit/1bfed76): **BREAKING**: Changed connection types to use portable configuration schemas as the source of root connection types, with JSON Schema generation and strongly typed parsing that do not expose the underlying Zod schemas.

##### Patch Changes

- [`f60a23a`](https://github.com/backstage/backstage/commit/f60a23a): Require every connection to configure at least one auth method. Use the `none` auth method for unauthenticated connections.
- [`c0f9a7d`](https://github.com/backstage/backstage/commit/c0f9a7d): Removed the unsupported unauthenticated AWS CodeCommit auth option. AWS CodeCommit connections now only expose access key or assume role authentication.

### `@backstage/frontend-plugin-api` (0.17.3 → [0.18.0-next.0](../../changelogs/@backstage/frontend-plugin-api.md#0180-next0))

#### 0.18.0-next.0

##### Minor Changes

- [`907793c`](https://github.com/backstage/backstage/commit/907793c): **BREAKING**: Removed the deprecated `config.schema` option for extensions and extension blueprints. Use the top-level `configSchema` option with Standard Schema-compatible schema values, such as Zod v4.

### `@backstage/plugin-auth-backend` (0.29.2 → [0.30.0-next.1](../../changelogs/@backstage/plugin-auth-backend.md#0300-next1))

#### 0.30.0-next.1

##### Patch Changes

- [`4e884d2`](https://github.com/backstage/backstage/commit/4e884d2): Skip SSRF protection for CIMD metadata fetches when the `client_id` matches an exact (non-wildcard) entry in `allowedClientIdPatterns`. Exact patterns mean the administrator explicitly listed a specific URL, so the DNS resolution is trusted. Wildcard patterns still enforce the SSRF check to protect against attacker-controlled subdomains resolving to internal addresses.
- [`827989d`](https://github.com/backstage/backstage/commit/827989d): Fixed the built-in CLI client being rejected when `allowedClientIdPatterns` is configured for Client ID Metadata Documents.

#### 0.30.0-next.0

##### Minor Changes

- [`274acc5`](https://github.com/backstage/backstage/commit/274acc5): **BREAKING**: The OAuth redirect URI and client ID metadata document allowlists now match patterns against each URL component separately instead of against the full URL string. Wildcards no longer match across the host and path boundary, patterns must include an explicit protocol and are otherwise rejected as invalid configuration instead of being silently ignored, and redirect URIs that contain embedded credentials are always rejected.

  A wildcard port also no longer implicitly matches every path: a pattern such as `http://localhost:*` now only matches the root path. Use `http://localhost:*/*` to allow any port and any path. The built-in loopback defaults have been updated accordingly, so this only affects explicitly configured patterns.

## 0.x patch version bumps

### `@backstage/backend-defaults` (0.17.6 → [0.17.7-next.2](../../changelogs/@backstage/backend-defaults.md#0177-next2))

#### 0.17.7-next.2

##### Patch Changes

- [`b1b6c80`](https://github.com/backstage/backstage/commit/b1b6c80): Read-only actions now default to non-destructive when the destructive attribute is omitted.
- [`78bf918`](https://github.com/backstage/backstage/commit/78bf918): chore(deps): bump `tar` from 7.5.15 to 7.5.21
- [`bb98419`](https://github.com/backstage/backstage/commit/bb98419): TypeScript configuration schema warnings discovered while setting up secret redaction are now reported through the Backstage logger.

### `@backstage/backend-dynamic-feature-service` (0.8.5 → [0.8.6-next.1](../../changelogs/@backstage/backend-dynamic-feature-service.md#086-next1))

#### 0.8.6-next.1

##### Patch Changes

- [`bb98419`](https://github.com/backstage/backstage/commit/bb98419): TypeScript configuration schema warnings discovered while setting up secret redaction are now reported through the Backstage logger.

### `@backstage/cli-module-build` (0.1.6 → [0.1.7-next.0](../../changelogs/@backstage/cli-module-build.md#017-next0))

#### 0.1.7-next.0

##### Patch Changes

- [`943687f`](https://github.com/backstage/backstage/commit/943687f): Stopped disabling the Node.js snapshot by default when starting backends or running tests.
- [`4d7b153`](https://github.com/backstage/backstage/commit/4d7b153): chore(deps): bump `shell-quote` from 1.8.4 to 1.9.0
- [`78bf918`](https://github.com/backstage/backstage/commit/78bf918): chore(deps): bump `tar` from 7.5.15 to 7.5.21
- [`bb98419`](https://github.com/backstage/backstage/commit/bb98419): Package preparation for publishing validates TypeScript configuration schemas strictly, preventing invalid schemas from being published. Other build and bundle paths report schema errors as warnings.

### `@backstage/cli-module-config` (0.1.5 → [0.1.6-next.0](../../changelogs/@backstage/cli-module-config.md#016-next0))

#### 0.1.6-next.0

##### Patch Changes

- [`bb98419`](https://github.com/backstage/backstage/commit/bb98419): The `--strict` flag for `config:check` now treats TypeScript configuration schema errors as fatal. The same flag is now also available for `config:schema`.

### `@backstage/cli-module-lint` (0.1.4 → [0.1.5-next.0](../../changelogs/@backstage/cli-module-lint.md#015-next0))

#### 0.1.5-next.0

##### Patch Changes

- [`4d7b153`](https://github.com/backstage/backstage/commit/4d7b153): chore(deps): bump `shell-quote` from 1.8.4 to 1.9.0

### `@backstage/cli-module-new` (0.1.5 → [0.1.6-next.0](../../changelogs/@backstage/cli-module-new.md#016-next0))

#### 0.1.6-next.0

##### Patch Changes

- [`90ef477`](https://github.com/backstage/backstage/commit/90ef477): Added a new `permission-policy-module` template for scaffolding custom permission policies via `backstage-cli new`. The template generates a backend module that wires a `PermissionPolicy` implementation into the permission backend using the `policyExtensionPoint`, along with a test example.
- [`88b2bbf`](https://github.com/backstage/backstage/commit/88b2bbf): Added a `search-collator-module` template for scaffolding new search collator modules via `backstage-cli new`.
- [`2c7cc55`](https://github.com/backstage/backstage/commit/2c7cc55): Added a new `catalog-processor-module` template for scaffolding catalog processor modules via `backstage-cli new`.
- [`0e6007f`](https://github.com/backstage/backstage/commit/0e6007f): Updated the `plugin-web-library` template to use `toastApiRef` from `@backstage/frontend-plugin-api` instead of the deprecated `alertApiRef` from `@backstage/core-plugin-api`.
- [`90bbc2e`](https://github.com/backstage/backstage/commit/90bbc2e): Added `UserInfoService` to the `permission-policy-module` template so that scaffolded permission policies have the service already wired up for ownership lookups.
- [`10887f4`](https://github.com/backstage/backstage/commit/10887f4): Fixed generated frontend plugin tables to identify their row header, and added the associated backend plugin package as a development dependency of generated backend plugin modules.

### `@backstage/cli-module-test-jest` (0.1.4 → [0.1.5-next.0](../../changelogs/@backstage/cli-module-test-jest.md#015-next0))

#### 0.1.5-next.0

##### Patch Changes

- [`943687f`](https://github.com/backstage/backstage/commit/943687f): Stopped disabling the Node.js snapshot by default when starting backends or running tests.

### `@backstage/core-components` (0.18.12 → [0.18.13-next.2](../../changelogs/@backstage/core-components.md#01813-next2))

#### 0.18.13-next.1

##### Patch Changes

- [`96cd953`](https://github.com/backstage/backstage/commit/96cd953): Fixed the `DependencyGraph` component to avoid a jarring initial render where nodes briefly pile up at overlapping positions before animating into place. The graph content is now hidden until node measurements are complete and the layout has fully settled, then revealed at the correct positions with transitions suppressed for the first frame.

  Also fixed a `containerRef` recreation chain where every graph dimension change caused the container measurement callback to be recreated and re-triggered, producing unnecessary re-renders during initial layout.

#### 0.18.13-next.0

##### Patch Changes

- [`226817d`](https://github.com/backstage/backstage/commit/226817d): chore(deps): bump `js-yaml` from 4.2.0 to 4.3.0

### `@backstage/create-app` (0.9.0 → [0.9.1-next.3](../../changelogs/@backstage/create-app.md#091-next3))

#### 0.9.1-next.3

##### Patch Changes

- [`a178067`](https://github.com/backstage/backstage/commit/a178067): Added a pre-configured Home page with a customizable widget grid to the default create-app template.
- [`ee4a9f6`](https://github.com/backstage/backstage/commit/ee4a9f6): Fixed the example scaffolder template so the component name field validates against the allowed entity-name format, preventing names with spaces that would fail catalog registration.

#### 0.9.1-next.2

##### Patch Changes

- [`943687f`](https://github.com/backstage/backstage/commit/943687f): Generated backend Dockerfiles no longer disable the Node.js snapshot or install native build dependencies for the Scaffolder.
- [`9138f34`](https://github.com/backstage/backstage/commit/9138f34): Added a GitHub Actions CI workflow to the default app template. New Backstage instances created with `create-app` now include a `.github/workflows/ci.yml` that runs lint, type checking, tests, configuration validation, and a Docker image build on every pull request.
- [`2828e31`](https://github.com/backstage/backstage/commit/2828e31): Added a prerequisites check when creating a new app that validates Node.js LTS version and Yarn availability before proceeding, and warns if Python is not found.

#### 0.9.1-next.1

##### Patch Changes

- Bumped create-app version.

#### 0.9.1-next.0

##### Patch Changes

- [`0b8573f`](https://github.com/backstage/backstage/commit/0b8573f): Clarified that the host build steps must use the same Node version as the Docker base image in the Dockerfile.

### `@backstage/eslint-plugin` (0.3.1 → [0.3.2-next.0](../../changelogs/@backstage/eslint-plugin.md#032-next0))

#### 0.3.2-next.0

##### Patch Changes

- [`1d026b0`](https://github.com/backstage/backstage/commit/1d026b0): Fixed `visitImports` to return an empty object instead of `undefined` for forward-compatibility with TypeScript 7's stricter return type checking.

### `@backstage/frontend-app-api` (0.16.6 → [0.16.7-next.1](../../changelogs/@backstage/frontend-app-api.md#0167-next1))

#### 0.16.7-next.1

##### Patch Changes

- [`6497d0f`](https://github.com/backstage/backstage/commit/6497d0f): Respect explicit API reference plugin ownership when resolving conflicting API factories.
- [`a8b5ba6`](https://github.com/backstage/backstage/commit/a8b5ba6): Updated dependencies.

### `@backstage/frontend-dynamic-feature-loader` (0.1.14 → [0.1.15-next.1](../../changelogs/@backstage/frontend-dynamic-feature-loader.md#0115-next1))

#### 0.1.15-next.0

##### Patch Changes

- [`6ea4a2d`](https://github.com/backstage/backstage/commit/6ea4a2d): Updated documentation link to point to the new per-module CLI command pages.

### `@backstage/plugin-api-docs` (0.14.3 → [0.14.4-next.2](../../changelogs/@backstage/plugin-api-docs.md#0144-next2))

#### 0.14.4-next.2

##### Patch Changes

- [`b7085d1`](https://github.com/backstage/backstage/commit/b7085d1): Fixed deep linking in OpenAPI definition widget.

#### 0.14.4-next.1

##### Patch Changes

- [`a8b5ba6`](https://github.com/backstage/backstage/commit/a8b5ba6): Updated dependencies.

### `@backstage/plugin-app` (0.5.1 → [0.5.2-next.2](../../changelogs/@backstage/plugin-app.md#052-next2))

#### 0.5.2-next.2

##### Patch Changes

- [`2dd51e6`](https://github.com/backstage/backstage/commit/2dd51e6): Fixed config-driven route redirects to preserve the query string and fragment from the original URL. Previously, redirects declared under `app.extensions[].app/routes.config.redirects` silently dropped everything after `?` or `#` in the incoming URL.

### `@backstage/plugin-app-react` (0.2.5 → [0.2.6-next.0](../../changelogs/@backstage/plugin-app-react.md#026-next0))

#### 0.2.6-next.0

##### Patch Changes

- [`a8b5ba6`](https://github.com/backstage/backstage/commit/a8b5ba6): Updated dependencies.

### `@backstage/plugin-auth-backend-module-microsoft-provider` (0.3.17 → [0.3.18-next.1](../../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#0318-next1))

#### 0.3.18-next.1

##### Patch Changes

- [`7ccaf9d`](https://github.com/backstage/backstage/commit/7ccaf9d): Fixed an issue where acquiring tokens with non-Graph scopes (such as Azure Management API) would crash the sign-in resolver because the user profile was unavailable. This affected both the initial sign-in and later token refreshes. The Microsoft authenticator now makes a separate Graph API call to fetch the profile when the primary token targets a different resource. Setting the `skipUserProfile` configuration option to true disables this extra call.

### `@backstage/plugin-auth-node` (0.7.3 → [0.7.4-next.0](../../changelogs/@backstage/plugin-auth-node.md#074-next0))

#### 0.7.4-next.0

##### Patch Changes

- [`7ca2955`](https://github.com/backstage/backstage/commit/7ca2955): Fix OAuth start handler crashing with a 500 error on malformed origins, now returns a 400 error.

### `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.5.16 → [0.5.17-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#0517-next0))

#### 0.5.17-next.0

##### Patch Changes

- [`74d8cbf`](https://github.com/backstage/backstage/commit/74d8cbf): The internal OpenAPI documentation provider now automatically discovers installed plugins via the system metadata service. The `catalog.providers.backstageOpenapi.plugins` configuration option is now optional and deprecated; when omitted, all installed plugins are discovered dynamically.

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.7.14 → [0.7.15-next.2](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#0715-next2))

#### 0.7.15-next.2

##### Patch Changes

- [`870acb3`](https://github.com/backstage/backstage/commit/870acb3): Moved detailed documentation from the README to the Backstage docs site. The README now contains installation instructions and links to the full documentation.

### `@backstage/plugin-catalog-graph` (0.6.6 → [0.6.7-next.2](../../changelogs/@backstage/plugin-catalog-graph.md#067-next2))

#### 0.6.7-next.2

##### Patch Changes

- [`8babce3`](https://github.com/backstage/backstage/commit/8babce3): Fixed the catalog graph page so configured filter and graph defaults are applied when the page opens.

### `@backstage/plugin-catalog-import` (0.13.15 → [0.13.16-next.2](../../changelogs/@backstage/plugin-catalog-import.md#01316-next2))

#### 0.13.16-next.2

##### Patch Changes

- [`74fb85d`](https://github.com/backstage/backstage/commit/74fb85d): Remove obsolete location import error handling in StepReviewLocation.

### `@backstage/plugin-catalog-unprocessed-entities` (0.2.33 → [0.2.34-next.1](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#0234-next1))

#### 0.2.34-next.1

##### Patch Changes

- [`531495a`](https://github.com/backstage/backstage/commit/531495a): Migrated the Unprocessed Entities UI to the Backstage UI component library. The page, dialogs, and action buttons now use the new design system, and the raw entity definition and delete confirmation dialogs have an updated look and feel. The pending entities tab now also has a search box, matching the failed entities tab.

### `@backstage/plugin-home` (0.9.8 → [0.9.9-next.2](../../changelogs/@backstage/plugin-home.md#099-next2))

#### 0.9.9-next.2

##### Patch Changes

- [`a178067`](https://github.com/backstage/backstage/commit/a178067): Added new frontend system widget blueprints for Most Visited, Recently Visited, World Clocks, and a configurable Toolkit. The home page now supports a `defaultConfig` for defining the initial grid layout via app-config.

### `@backstage/plugin-home-react` (0.1.40 → [0.1.41-next.2](../../changelogs/@backstage/plugin-home-react.md#0141-next2))

#### 0.1.41-next.2

##### Patch Changes

- [`a178067`](https://github.com/backstage/backstage/commit/a178067): Added `HomePageDefaultConfigItem` type and optional `defaultConfig` prop to `HomePageLayoutProps`.

### `@backstage/plugin-kubernetes-backend` (0.21.6 → [0.21.7-next.1](../../changelogs/@backstage/plugin-kubernetes-backend.md#0217-next1))

#### 0.21.7-next.0

##### Patch Changes

- [`684c9b9`](https://github.com/backstage/backstage/commit/684c9b9): Fixed `AwsIamStrategy` to resolve account-specific AWS credentials when an assume role ARN is configured, enabling support for `webIdentityTokenFile` and `accountDefaults` in environments without default AWS credentials.
- [`f0834bd`](https://github.com/backstage/backstage/commit/f0834bd): Added a `kubernetes.clusterLocatorContinueOnError` configuration option. When set to `true`, a failing cluster locator no longer causes the entire cluster list request to fail — errors are logged and clusters from the remaining successful locators are still returned. The default is `false`, preserving the existing behavior.

### `@backstage/plugin-kubernetes-react` (0.5.22 → [0.5.23-next.1](../../changelogs/@backstage/plugin-kubernetes-react.md#0523-next1))

#### 0.5.23-next.0

##### Patch Changes

- [`226817d`](https://github.com/backstage/backstage/commit/226817d): chore(deps): bump `js-yaml` from 4.2.0 to 4.3.0

### `@backstage/plugin-mcp-actions-backend` (0.2.0 → [0.2.1-next.2](../../changelogs/@backstage/plugin-mcp-actions-backend.md#021-next2))

#### 0.2.1-next.2

##### Patch Changes

- [`9937a99`](https://github.com/backstage/backstage/commit/9937a99): Added `scopes_supported` to the OAuth 2.0 Protected Resource Metadata (RFC 9728) response. Without this field, RFC-compliant MCP clients did not know which scope to request and never received a refresh token, causing sessions to expire with the short-lived access token. The field now includes `openid`, and also `offline_access` when `auth.experimentalRefreshToken` is enabled.

#### 0.2.1-next.1

##### Patch Changes

- [`d7d03d9`](https://github.com/backstage/backstage/commit/d7d03d9): Replaced duplicated documentation in the README with a link to the full docs on `backstage.io`.

#### 0.2.1-next.0

##### Patch Changes

- [`ec2b90f`](https://github.com/backstage/backstage/commit/ec2b90f): Added support for configuring MCP server instructions for both default and named servers.
- [`e4983fd`](https://github.com/backstage/backstage/commit/e4983fd): Added audit logging for MCP server operations using the Backstage Auditor Service. The plugin now emits `connection`, `tool-discovery`, and `tool-execution` audit events, allowing adopters to monitor and audit MCP server activity.

### `@backstage/plugin-notifications-backend` (0.6.7 → [0.6.8-next.1](../../changelogs/@backstage/plugin-notifications-backend.md#068-next1))

#### 0.6.8-next.1

##### Patch Changes

- [`3222945`](https://github.com/backstage/backstage/commit/3222945): Fixed notification recipient resolution to safely handle cyclic group relationships during group traversal, preventing endless recursion.

### `@backstage/plugin-notifications-backend-module-email` (0.3.23 → [0.3.24-next.1](../../changelogs/@backstage/plugin-notifications-backend-module-email.md#0324-next1))

#### 0.3.24-next.1

##### Patch Changes

- [`a4e7831`](https://github.com/backstage/backstage/commit/a4e7831): Updated `nodemailer` from v8 to v9. The new major version validates TLS certificates by default when fetching remote content such as attachments or OAuth2 tokens. If your SMTP relay or OAuth2 endpoint uses a self-signed or otherwise untrusted certificate, email delivery may start failing. You can opt out per transport by setting `tls: { rejectUnauthorized: false }` in your nodemailer transport options.

### `@backstage/plugin-notifications-backend-module-slack` (0.4.4 → [0.4.5-next.1](../../changelogs/@backstage/plugin-notifications-backend-module-slack.md#045-next1))

#### 0.4.5-next.1

##### Patch Changes

- [`4956d7f`](https://github.com/backstage/backstage/commit/4956d7f): Added support for routing notifications to a specific Slack channel via `payload.metadata.slackChannel`, with the existing entity annotation lookup as a fallback.

### `@backstage/plugin-scaffolder-backend-module-gerrit` (0.2.23 → [0.2.24-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#0224-next1))

#### 0.2.24-next.1

##### Patch Changes

- [`f83a652`](https://github.com/backstage/backstage/commit/f83a652): Made `description` parameter optional in `publish:gerrit` action.

### `@backstage/plugin-scaffolder-node` (0.13.5 → [0.13.6-next.2](../../changelogs/@backstage/plugin-scaffolder-node.md#0136-next2))

#### 0.13.6-next.2

##### Patch Changes

- [`78bf918`](https://github.com/backstage/backstage/commit/78bf918): chore(deps): bump `tar` from 7.5.15 to 7.5.21

### `@backstage/repo-tools` (0.18.0 → [0.18.1-next.1](../../changelogs/@backstage/repo-tools.md#0181-next1))

#### 0.18.1-next.1

##### Patch Changes

- [`78bf918`](https://github.com/backstage/backstage/commit/78bf918): chore(deps): bump `tar` from 7.5.15 to 7.5.21

#### 0.18.1-next.0

##### Patch Changes

- [`226817d`](https://github.com/backstage/backstage/commit/226817d): chore(deps): bump `js-yaml` from 4.2.0 to 4.3.0

### `@backstage/ui` (0.17.0 → [0.17.1-next.0](../../changelogs/@backstage/ui.md#0171-next0))

#### 0.17.1-next.0

##### Patch Changes

- [`52a58be`](https://github.com/backstage/backstage/commit/52a58be): Fixed Table not filling container width in Firefox when using `TableRoot` directly inside `ResizableTableContainer`. Changed `overflow: hidden` to `overflow: auto` on the resizable container so it handles scrolling for direct `TableRoot` usages.

## Minor version bumps

### `@backstage/backend-plugin-api` (1.9.3 → [1.10.0-next.1](../../changelogs/@backstage/backend-plugin-api.md#1100-next1))

#### 1.10.0-next.1

##### Patch Changes

- [`b1b6c80`](https://github.com/backstage/backstage/commit/b1b6c80): Documented the default destructive and read-only action attribute values.

#### 1.10.0-next.0

##### Minor Changes

- [`74d8cbf`](https://github.com/backstage/backstage/commit/74d8cbf): Added `coreServices.rootSystemMetadata`, a new stable public service for reading metadata about the running Backstage system, including a list of installed plugins. Previously only available as an alpha API, it is now part of the standard `coreServices` namespace.

### `@backstage/integration` (2.0.3 → [2.1.0-next.1](../../changelogs/@backstage/integration.md#210-next1))

#### 2.1.0-next.1

##### Patch Changes

- [`87bfe22`](https://github.com/backstage/backstage/commit/87bfe22): GitHub integrations now cache the list of app installations for a short period, avoiding a full `GET /app/installations` pagination on every token fetch. This significantly reduces API usage against the 15k/hour GitHub App rate limit for organizations with many installations or frequent credential refreshes.

  The cache is refreshed on a 10-minute TTL, and is additionally invalidated when a lookup for a previously-unseen owner occurs (throttled to once per minute) or when GitHub reports that a cached installation is no longer available, so newly added or removed installations are still picked up promptly.

#### 2.1.0-next.0

##### Minor Changes

- [`dc951d4`](https://github.com/backstage/backstage/commit/dc951d4): Added support for creating a GitHub credentials provider backed by the connections service.

### `@backstage/plugin-catalog-backend` (3.8.1 → [3.9.0-next.2](../../changelogs/@backstage/plugin-catalog-backend.md#390-next2))

#### 3.9.0-next.2

##### Minor Changes

- [`c7c0ec3`](https://github.com/backstage/backstage/commit/c7c0ec3): Added a `refresh-catalog-entity` action so agents and MCP clients can re-queue a single entity for processing after creating or updating it — useful for reading back fresh data immediately after a scaffolder run without waiting for the next scheduled processing loop.

##### Patch Changes

- [`aa318d0`](https://github.com/backstage/backstage/commit/aa318d0): Migrated internal query filter handling from `EntityFilter` to `FilterPredicate`, simplifying the filter parsing and query application pipeline.
- [`10f0713`](https://github.com/backstage/backstage/commit/10f0713): Replaced the delete-all and reinsert pattern for the `relations` table with a diff-based sync that only touches rows that actually changed. In steady state (the common case), zero writes occur, eliminating write churn, dead tuples, and WAL traffic from the processing path. Stitching is now also skipped for relation neighbors that did not change.
- [`eb6dff2`](https://github.com/backstage/backstage/commit/eb6dff2): Fixed an issue where PostgreSQL deadlock errors during entity provider mutations were silently swallowed, causing entities to be dropped until the next full refresh. Transactions are now automatically retried on deadlock with exponential back-off.
- [`dd562f0`](https://github.com/backstage/backstage/commit/dd562f0): Fixed a potential MySQL deadlock during concurrent entity processing by retrying the `updateProcessedEntity` transaction on deadlock errors.
- [`b031a48`](https://github.com/backstage/backstage/commit/b031a48): Fixed an issue where SCM `location.moved` events would generate new locations in the database for files that were not actively tracked.

#### 3.8.2-next.1

##### Patch Changes

- [`ee40136`](https://github.com/backstage/backstage/commit/ee40136): Fixed a missing promise return in a database migration rollback function.
- [`b7650ad`](https://github.com/backstage/backstage/commit/b7650ad): Simplified internal router setup by removing unnecessary conditional guards around route registrations.

### `@backstage/plugin-techdocs` (1.17.8 → [1.18.0-next.2](../../changelogs/@backstage/plugin-techdocs.md#1180-next2))

#### 1.18.0-next.1

##### Patch Changes

- [`e06a951`](https://github.com/backstage/backstage/commit/e06a951): chore(deps): bump `dompurify` from 3.4.11 to 3.4.12

#### 1.18.0-next.0

##### Minor Changes

- [`4f9ce5e`](https://github.com/backstage/backstage/commit/4f9ce5e): Add `initialFilter` config for `page:techdocs`. Valid options are `all`, `owned` and `starred`. Defaults to `owned`.

## Other patch version bumps

### `@backstage/backend-app-api` (1.7.2 → [1.7.3-next.1](../../changelogs/@backstage/backend-app-api.md#173-next1))

#### 1.7.3-next.1

##### Patch Changes

- [`03133fc`](https://github.com/backstage/backstage/commit/03133fc): Hardened backend startup against malformed installed backend features, with contextual input errors and configured boot-failure handling when invalid registrations can be attributed to a plugin or module.

#### 1.7.3-next.0

##### Patch Changes

- [`64cea29`](https://github.com/backstage/backstage/commit/64cea29): Updated the backend runtime to use the internal connection service implementation after the shared connection contract moved into `@backstage/connections`.

### `@backstage/backend-test-utils` (1.11.5 → [1.11.6-next.1](../../changelogs/@backstage/backend-test-utils.md#1116-next1))

#### 1.11.6-next.1

##### Patch Changes

- [`b1b6c80`](https://github.com/backstage/backstage/commit/b1b6c80): Aligned mocked action attributes so read-only actions default to non-destructive.

#### 1.11.6-next.0

##### Patch Changes

- [`5ae46fc`](https://github.com/backstage/backstage/commit/5ae46fc): Added `mockServices.rootSystemMetadata` mock implementation to support the new stable `coreServices.rootSystemMetadata` service in tests.

### `@backstage/config-loader` (1.11.1 → [1.11.2-next.0](../../changelogs/@backstage/config-loader.md#1112-next0))

#### 1.11.2-next.0

##### Patch Changes

- [`0c67dbc`](https://github.com/backstage/backstage/commit/0c67dbc): Fix issue where `backstage-cli config:check --strict` would incorrectly reject valid configuration for open-ended object schemas, such as plain objects or map-like structures.
- [`bb98419`](https://github.com/backstage/backstage/commit/bb98419): Added an `onSchemaError` callback that allows callers to report TypeScript configuration schema errors and continue loading. The callback receives a `ConfigSchemaError` containing the source package and underlying cause. Without a handler, schema errors are thrown.

### `@backstage/core-plugin-api` (1.12.8 → [1.12.9-next.1](../../changelogs/@backstage/core-plugin-api.md#1129-next1))

#### 1.12.9-next.1

##### Patch Changes

- [`9fcfbc9`](https://github.com/backstage/backstage/commit/9fcfbc9): Fixed a performance issue where all components using analytics, including every link, would rerender unnecessarily whenever a surrounding analytics context rendered again without its attributes having changed, for example when a URL query parameter changed on an entity page.

### `@backstage/plugin-catalog` (2.0.7 → [2.0.8-next.3](../../changelogs/@backstage/plugin-catalog.md#208-next3))

#### 2.0.8-next.3

##### Patch Changes

- [`05aed2e`](https://github.com/backstage/backstage/commit/05aed2e): Fixed a brief "Entity not found" flash when navigating between catalog entity pages.

#### 2.0.8-next.2

##### Patch Changes

- [`80b37b3`](https://github.com/backstage/backstage/commit/80b37b3): Fixed the `AboutField` label in the About card using `variant="inherit"` instead of `variant="h2"` to prevent theme typography overrides from changing the intended 10px label size.

#### 2.0.8-next.1

##### Patch Changes

- [`1d026b0`](https://github.com/backstage/backstage/commit/1d026b0): Added explicit type annotations to `FilterContainer` and `EntityListContainer` re-exports for forward-compatibility with TypeScript 7.

### `@backstage/plugin-catalog-react` (3.2.0 → [3.2.1-next.3](../../changelogs/@backstage/plugin-catalog-react.md#321-next3))

#### 3.2.1-next.3

##### Patch Changes

- [`9fcfbc9`](https://github.com/backstage/backstage/commit/9fcfbc9): Fixed a performance issue where all components reading the entity context on an entity page would rerender unnecessarily whenever the page rendered again without the entity data having changed, for example when a URL query parameter changed. This was particularly noticeable when switching tabs in the entity inspector dialog, which caused the entire underlying page to rerender.

#### 3.2.1-next.2

##### Patch Changes

- [`e766061`](https://github.com/backstage/backstage/commit/e766061): Fixed an issue where the "Owned" count in `UserListPicker` would display the total number of catalog entities instead of 0 when the logged-in user has no ownership entity refs. The empty `relations.ownedBy` filter was being silently dropped by the catalog client, causing the backend to return all entities with no ownership filter applied.

  This was a regression introduced in #22131, which removed an explicit `ownershipEntityRefs?.length === 0` guard that had been present since #20339.

#### 3.2.1-next.1

##### Patch Changes

- [`ed462ad`](https://github.com/backstage/backstage/commit/ed462ad): Fixed `EntityOwnerPicker` in `owners-only` mode to display human-readable entity titles (from `metadata.title` or `spec.profile.displayName`) instead of opaque internal names, both in the dropdown list and in the selected owner chips. The owner list is now virtualized, keeping the picker responsive for catalogs with large numbers of owner entities.

### `@backstage/plugin-gateway-backend` (1.1.7 → [1.1.8-next.1](../../changelogs/@backstage/plugin-gateway-backend.md#118-next1))

#### 1.1.8-next.1

##### Patch Changes

- [`fa72461`](https://github.com/backstage/backstage/commit/fa72461): Updated dependency `@opentelemetry/core` to `^2.0.0`.
- [`9da01b6`](https://github.com/backstage/backstage/commit/9da01b6): chore(deps): bump `http-proxy-middleware` from 3.0.5 to 3.0.7

### `@backstage/plugin-scaffolder` (1.38.1 → [1.38.2-next.3](../../changelogs/@backstage/plugin-scaffolder.md#1382-next3))

#### 1.38.2-next.3

##### Patch Changes

- [`9e773ee`](https://github.com/backstage/backstage/commit/9e773ee): Improves scaffolder entity pickers by using the catalog POST endpoint so large template filters are sent in the request body instead of the URL, helping avoid 431 errors and empty option lists.

### `@backstage/plugin-scaffolder-backend` (4.0.2 → [4.0.3-next.2](../../changelogs/@backstage/plugin-scaffolder-backend.md#403-next2))

#### 4.0.3-next.2

##### Patch Changes

- [`943687f`](https://github.com/backstage/backstage/commit/943687f): Removed the native addon requirement from scaffolder template rendering. Templates now run through a TypeScript interpreter, and the backend no longer needs the `--no-node-snapshot` Node.js option.

#### 4.0.3-next.0

##### Patch Changes

- [`4bbc088`](https://github.com/backstage/backstage/commit/4bbc088): Fixed the stale task janitor not being set up by passing the scheduler service to the router.

### `@backstage/plugin-search` (1.7.6 → [1.7.7-next.2](../../changelogs/@backstage/plugin-search.md#177-next2))

#### 1.7.7-next.2

##### Patch Changes

- [`a178067`](https://github.com/backstage/backstage/commit/a178067): Added a Home page search bar widget blueprint for the new frontend system.

### `@backstage/plugin-techdocs-node` (1.15.2 → [1.15.3-next.1](../../changelogs/@backstage/plugin-techdocs-node.md#1153-next1))

#### 1.15.3-next.0

##### Patch Changes

- [`226817d`](https://github.com/backstage/backstage/commit/226817d): chore(deps): bump `js-yaml` from 4.2.0 to 4.3.0

## Excluded dependency updates

- `@backstage/app-defaults` (1.7.10 → [1.7.11-next.1](../../changelogs/@backstage/app-defaults.md#1711-next1))
- `@backstage/backend-openapi-utils` (0.7.0 → [0.7.1-next.0](../../changelogs/@backstage/backend-openapi-utils.md#071-next0))
- `@backstage/cli` (0.36.4 → [0.36.5-next.1](../../changelogs/@backstage/cli.md#0365-next1))
- `@backstage/cli-defaults` (0.1.4 → [0.1.5-next.0](../../changelogs/@backstage/cli-defaults.md#015-next0))
- `@backstage/core-app-api` (1.20.3 → [1.20.4-next.1](../../changelogs/@backstage/core-app-api.md#1204-next1))
- `@backstage/core-compat-api` (0.5.13 → [0.5.14-next.1](../../changelogs/@backstage/core-compat-api.md#0514-next1))
- `@backstage/dev-utils` (1.1.25 → [1.1.26-next.2](../../changelogs/@backstage/dev-utils.md#1126-next2))
- `@backstage/frontend-defaults` (0.5.4 → [0.5.5-next.1](../../changelogs/@backstage/frontend-defaults.md#055-next1))
- `@backstage/frontend-dev-utils` (0.1.4 → [0.1.5-next.1](../../changelogs/@backstage/frontend-dev-utils.md#015-next1))
- `@backstage/frontend-test-utils` (0.6.2 → [0.6.3-next.1](../../changelogs/@backstage/frontend-test-utils.md#063-next1))
- `@backstage/integration-react` (1.2.20 → [1.2.21-next.1](../../changelogs/@backstage/integration-react.md#1221-next1))
- `@backstage/plugin-app-backend` (0.5.16 → [0.5.17-next.1](../../changelogs/@backstage/plugin-app-backend.md#0517-next1))
- `@backstage/plugin-app-module-user-settings` (0.1.0 → [0.1.1-next.1](../../changelogs/@backstage/plugin-app-module-user-settings.md#011-next1))
- `@backstage/plugin-app-node` (0.1.47 → [0.1.48-next.1](../../changelogs/@backstage/plugin-app-node.md#0148-next1))
- `@backstage/plugin-app-visualizer` (0.2.6 → [0.2.7-next.1](../../changelogs/@backstage/plugin-app-visualizer.md#027-next1))
- `@backstage/plugin-auth` (0.1.10 → [0.1.11-next.1](../../changelogs/@backstage/plugin-auth.md#0111-next1))
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
- `@backstage/plugin-auth-backend-module-oauth2-provider` (0.4.17 → [0.4.18-next.0](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#0418-next0))
- `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.3.1 → [0.3.2-next.0](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#032-next0))
- `@backstage/plugin-auth-backend-module-oidc-provider` (0.4.18 → [0.4.19-next.0](../../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#0419-next0))
- `@backstage/plugin-auth-backend-module-okta-provider` (0.2.17 → [0.2.18-next.0](../../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#0218-next0))
- `@backstage/plugin-auth-backend-module-onelogin-provider` (0.3.17 → [0.3.18-next.0](../../changelogs/@backstage/plugin-auth-backend-module-onelogin-provider.md#0318-next0))
- `@backstage/plugin-auth-backend-module-openshift-provider` (0.1.9 → [0.1.10-next.0](../../changelogs/@backstage/plugin-auth-backend-module-openshift-provider.md#0110-next0))
- `@backstage/plugin-auth-backend-module-pinniped-provider` (0.3.16 → [0.3.17-next.0](../../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#0317-next0))
- `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.5.16 → [0.5.17-next.0](../../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#0517-next0))
- `@backstage/plugin-auth-react` (0.1.29 → [0.1.30-next.1](../../changelogs/@backstage/plugin-auth-react.md#0130-next1))
- `@backstage/plugin-bitbucket-cloud-common` (0.3.11 → [0.3.12-next.0](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#0312-next0))
- `@backstage/plugin-catalog-backend-module-ai-model` (0.1.2 → [0.1.3-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-ai-model.md#013-next0))
- `@backstage/plugin-catalog-backend-module-aws` (0.4.25 → [0.4.26-next.1](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#0426-next1))
- `@backstage/plugin-catalog-backend-module-azure` (0.3.19 → [0.3.20-next.1](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0320-next1))
- `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.5.13 → [0.5.14-next.1](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#0514-next1))
- `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.5.13 → [0.5.14-next.1](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#0514-next1))
- `@backstage/plugin-catalog-backend-module-gcp` (0.3.21 → [0.3.22-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#0322-next0))
- `@backstage/plugin-catalog-backend-module-gerrit` (0.3.16 → [0.3.17-next.1](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0317-next1))
- `@backstage/plugin-catalog-backend-module-gitea` (0.1.14 → [0.1.15-next.1](../../changelogs/@backstage/plugin-catalog-backend-module-gitea.md#0115-next1))
- `@backstage/plugin-catalog-backend-module-github` (0.13.4 → [0.13.5-next.1](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#0135-next1))
- `@backstage/plugin-catalog-backend-module-github-org` (0.3.24 → [0.3.25-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#0325-next0))
- `@backstage/plugin-catalog-backend-module-gitlab` (0.8.5 → [0.8.6-next.1](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#086-next1))
- `@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.23 → [0.2.24-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab-org.md#0224-next0))
- `@backstage/plugin-catalog-backend-module-ldap` (0.12.7 → [0.12.8-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0128-next0))
- `@backstage/plugin-catalog-backend-module-logs` (0.1.24 → [0.1.25-next.1](../../changelogs/@backstage/plugin-catalog-backend-module-logs.md#0125-next1))
- `@backstage/plugin-catalog-backend-module-msgraph` (0.10.4 → [0.10.5-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#0105-next0))
- `@backstage/plugin-catalog-backend-module-msgraph-incremental` (0.1.2 → [0.1.3-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph-incremental.md#013-next0))
- `@backstage/plugin-catalog-backend-module-openapi` (0.2.24 → [0.2.25-next.1](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0225-next1))
- `@backstage/plugin-catalog-backend-module-puppetdb` (0.2.24 → [0.2.25-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0225-next0))
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.2.22 → [0.2.23-next.1](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#0223-next1))
- `@backstage/plugin-catalog-backend-module-unprocessed` (0.6.14 → [0.6.15-next.0](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#0615-next0))
- `@backstage/plugin-catalog-node` (2.2.3 → [2.2.4-next.0](../../changelogs/@backstage/plugin-catalog-node.md#224-next0))
- `@backstage/plugin-config-schema` (0.1.82 → [0.1.83-next.1](../../changelogs/@backstage/plugin-config-schema.md#0183-next1))
- `@backstage/plugin-devtools` (0.1.41 → [0.1.42-next.1](../../changelogs/@backstage/plugin-devtools.md#0142-next1))
- `@backstage/plugin-devtools-backend` (0.5.19 → [0.5.20-next.1](../../changelogs/@backstage/plugin-devtools-backend.md#0520-next1))
- `@backstage/plugin-devtools-react` (0.2.4 → [0.2.5-next.0](../../changelogs/@backstage/plugin-devtools-react.md#025-next0))
- `@backstage/plugin-events-backend` (0.6.4 → [0.6.5-next.0](../../changelogs/@backstage/plugin-events-backend.md#065-next0))
- `@backstage/plugin-events-backend-module-aws-sqs` (0.4.24 → [0.4.25-next.0](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#0425-next0))
- `@backstage/plugin-events-backend-module-azure` (0.2.33 → [0.2.34-next.0](../../changelogs/@backstage/plugin-events-backend-module-azure.md#0234-next0))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.33 → [0.2.34-next.0](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#0234-next0))
- `@backstage/plugin-events-backend-module-bitbucket-server` (0.1.14 → [0.1.15-next.0](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-server.md#0115-next0))
- `@backstage/plugin-events-backend-module-gerrit` (0.2.33 → [0.2.34-next.0](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#0234-next0))
- `@backstage/plugin-events-backend-module-github` (0.4.14 → [0.4.15-next.1](../../changelogs/@backstage/plugin-events-backend-module-github.md#0415-next1))
- `@backstage/plugin-events-backend-module-gitlab` (0.3.14 → [0.3.15-next.0](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#0315-next0))
- `@backstage/plugin-events-backend-module-google-pubsub` (0.2.5 → [0.2.6-next.0](../../changelogs/@backstage/plugin-events-backend-module-google-pubsub.md#026-next0))
- `@backstage/plugin-events-backend-module-kafka` (0.3.6 → [0.3.7-next.0](../../changelogs/@backstage/plugin-events-backend-module-kafka.md#037-next0))
- `@backstage/plugin-events-backend-test-utils` (0.1.57 → [0.1.58-next.0](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0158-next0))
- `@backstage/plugin-events-node` (0.4.24 → [0.4.25-next.0](../../changelogs/@backstage/plugin-events-node.md#0425-next0))
- `@backstage/plugin-kubernetes` (0.12.21 → [0.12.22-next.1](../../changelogs/@backstage/plugin-kubernetes.md#01222-next1))
- `@backstage/plugin-kubernetes-cluster` (0.0.39 → [0.0.40-next.1](../../changelogs/@backstage/plugin-kubernetes-cluster.md#0040-next1))
- `@backstage/plugin-kubernetes-node` (0.4.6 → [0.4.7-next.0](../../changelogs/@backstage/plugin-kubernetes-node.md#047-next0))
- `@backstage/plugin-mui-to-bui` (0.2.9 → [0.2.10-next.1](../../changelogs/@backstage/plugin-mui-to-bui.md#0210-next1))
- `@backstage/plugin-notifications` (0.5.19 → [0.5.20-next.1](../../changelogs/@backstage/plugin-notifications.md#0520-next1))
- `@backstage/plugin-notifications-node` (0.2.28 → [0.2.29-next.0](../../changelogs/@backstage/plugin-notifications-node.md#0229-next0))
- `@backstage/plugin-org` (0.7.6 → [0.7.7-next.1](../../changelogs/@backstage/plugin-org.md#077-next1))
- `@backstage/plugin-org-react` (0.1.52 → [0.1.53-next.1](../../changelogs/@backstage/plugin-org-react.md#0153-next1))
- `@backstage/plugin-permission-backend` (0.7.14 → [0.7.15-next.0](../../changelogs/@backstage/plugin-permission-backend.md#0715-next0))
- `@backstage/plugin-permission-backend-module-allow-all-policy` (0.2.21 → [0.2.22-next.0](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#0222-next0))
- `@backstage/plugin-permission-node` (0.11.2 → [0.11.3-next.0](../../changelogs/@backstage/plugin-permission-node.md#0113-next0))
- `@backstage/plugin-permission-react` (0.5.3 → [0.5.4-next.0](../../changelogs/@backstage/plugin-permission-react.md#054-next0))
- `@backstage/plugin-proxy-backend` (0.6.15 → [0.6.16-next.0](../../changelogs/@backstage/plugin-proxy-backend.md#0616-next0))
- `@backstage/plugin-proxy-node` (0.1.17 → [0.1.18-next.0](../../changelogs/@backstage/plugin-proxy-node.md#0118-next0))
- `@backstage/plugin-scaffolder-backend-module-azure` (0.2.23 → [0.2.24-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#0224-next1))
- `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.3.8 → [0.3.9-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#039-next1))
- `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.2.23 → [0.2.24-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#0224-next1))
- `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.3.23 → [0.3.24-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#0324-next1))
- `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.25 → [0.3.26-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0326-next1))
- `@backstage/plugin-scaffolder-backend-module-gcp` (0.2.23 → [0.2.24-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-gcp.md#0224-next1))
- `@backstage/plugin-scaffolder-backend-module-gitea` (0.2.23 → [0.2.24-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#0224-next1))
- `@backstage/plugin-scaffolder-backend-module-github` (0.9.11 → [0.9.12-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#0912-next1))
- `@backstage/plugin-scaffolder-backend-module-gitlab` (0.11.8 → [0.11.9-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#0119-next1))
- `@backstage/plugin-scaffolder-backend-module-notifications` (0.1.24 → [0.1.25-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-notifications.md#0125-next0))
- `@backstage/plugin-scaffolder-backend-module-rails` (0.5.23 → [0.5.24-next.1](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0524-next1))
- `@backstage/plugin-scaffolder-backend-module-sentry` (0.3.6 → [0.3.7-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#037-next0))
- `@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.24 → [0.4.25-next.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#0425-next0))
- `@backstage/plugin-scaffolder-common` (2.2.1 → [2.2.2-next.0](../../changelogs/@backstage/plugin-scaffolder-common.md#222-next0))
- `@backstage/plugin-scaffolder-node-test-utils` (0.3.13 → [0.3.14-next.0](../../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#0314-next0))
- `@backstage/plugin-scaffolder-react` (2.0.2 → [2.0.3-next.2](../../changelogs/@backstage/plugin-scaffolder-react.md#203-next2))
- `@backstage/plugin-search-backend` (2.1.4 → [2.1.5-next.0](../../changelogs/@backstage/plugin-search-backend.md#215-next0))
- `@backstage/plugin-search-backend-module-catalog` (0.3.17 → [0.3.18-next.0](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#0318-next0))
- `@backstage/plugin-search-backend-module-elasticsearch` (1.8.5 → [1.8.6-next.0](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#186-next0))
- `@backstage/plugin-search-backend-module-explore` (0.3.16 → [0.3.17-next.0](../../changelogs/@backstage/plugin-search-backend-module-explore.md#0317-next0))
- `@backstage/plugin-search-backend-module-pg` (0.5.57 → [0.5.58-next.0](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0558-next0))
- `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.3.22 → [0.3.23-next.0](../../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#0323-next0))
- `@backstage/plugin-search-backend-module-techdocs` (0.4.16 → [0.4.17-next.0](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#0417-next0))
- `@backstage/plugin-search-backend-node` (1.4.6 → [1.4.7-next.0](../../changelogs/@backstage/plugin-search-backend-node.md#147-next0))
- `@backstage/plugin-search-react` (1.11.6 → [1.11.7-next.1](../../changelogs/@backstage/plugin-search-react.md#1117-next1))
- `@backstage/plugin-signals` (0.0.33 → [0.0.34-next.1](../../changelogs/@backstage/plugin-signals.md#0034-next1))
- `@backstage/plugin-signals-backend` (0.3.17 → [0.3.18-next.0](../../changelogs/@backstage/plugin-signals-backend.md#0318-next0))
- `@backstage/plugin-signals-node` (0.2.3 → [0.2.4-next.0](../../changelogs/@backstage/plugin-signals-node.md#024-next0))
- `@backstage/plugin-signals-react` (0.0.24 → [0.0.25-next.0](../../changelogs/@backstage/plugin-signals-react.md#0025-next0))
- `@backstage/plugin-techdocs-addons-test-utils` (2.0.7 → [2.0.8-next.2](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#208-next2))
- `@backstage/plugin-techdocs-backend` (2.2.2 → [2.2.3-next.1](../../changelogs/@backstage/plugin-techdocs-backend.md#223-next1))
- `@backstage/plugin-techdocs-module-addons-contrib` (1.1.38 → [1.1.39-next.2](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1139-next2))
- `@backstage/plugin-techdocs-react` (1.3.13 → [1.3.14-next.1](../../changelogs/@backstage/plugin-techdocs-react.md#1314-next1))
- `@backstage/plugin-user-settings` (0.9.5 → [0.9.6-next.1](../../changelogs/@backstage/plugin-user-settings.md#096-next1))
- `@backstage/plugin-user-settings-backend` (0.4.5 → [0.4.6-next.0](../../changelogs/@backstage/plugin-user-settings-backend.md#046-next0))
- `@backstage/test-utils` (1.7.20 → [1.7.21-next.1](../../changelogs/@backstage/test-utils.md#1721-next1))
- `@techdocs/cli` (1.11.2 → [1.11.3-next.0](../../changelogs/@techdocs/cli.md#1113-next0))
