# Backstage Release 1.18.0 changelog

Changes between 1.17.5 and 1.18.0 — 217 changed and 10 added packages.

Newly added: `@backstage/frontend-app-api`, `@backstage/frontend-plugin-api`, `@backstage/plugin-auth-backend-module-gcp-iap-provider`, `@backstage/plugin-auth-backend-module-github-provider`, `@backstage/plugin-auth-backend-module-gitlab-provider`, `@backstage/plugin-auth-backend-module-google-provider`, `@backstage/plugin-auth-backend-module-oauth2-provider`, `@backstage/plugin-catalog-backend-module-scaffolder-entity-model`, `@backstage/plugin-opencost`, `@backstage/plugin-permission-backend-module-allow-all-policy`.

## `@backstage/frontend-app-api` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- 628ca7e458e4: Initial release

## `@backstage/frontend-plugin-api` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- 628ca7e458e4: Initial release

## `@backstage/plugin-auth-backend-module-gcp-iap-provider` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- 8513cd7d00e3: New module for `@backstage/plugin-auth-backend` that adds a GCP IAP auth provider.

#### Patch Changes

- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

## `@backstage/plugin-auth-backend-module-github-provider` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- 23af27f5ce79: New module for `@backstage/plugin-auth-backend` that adds a GitHub auth provider.

#### Patch Changes

- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

## `@backstage/plugin-auth-backend-module-gitlab-provider` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- 080cc7794700: New module for `@backstage/plugin-auth-backend` that adds a GitLab auth provider.

#### Patch Changes

- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

## `@backstage/plugin-auth-backend-module-google-provider` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- 8513cd7d00e3: New module for `@backstage/plugin-auth-backend` that adds a Google auth provider.

#### Patch Changes

- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

## `@backstage/plugin-auth-backend-module-oauth2-provider` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- 101cf1d13b04: New module for `@backstage/plugin-auth-backend` that adds a `oauth2` auth provider.

## `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- d5313ede3529: Added a dedicated module to collect the `ScaffolderEntitiesProcessor` and `catalogModuleTemplateKind`.

## `@backstage/plugin-opencost` (new, 0.2.0)

### 0.2.0

#### Minor Changes

- 1380a689ab56: New OpenCost plugin provides an port of the latest OpenCost UI to Backstage with updated dependencies. The plugin's README covers installation and configuration

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.

## `@backstage/plugin-permission-backend-module-allow-all-policy` (new, 0.1.0)

### 0.1.0

#### Minor Changes

- 5f7b2153526b: Created package with policy `permissionModuleAllowAllPolicy`

#### Patch Changes

- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

## `@backstage/app-defaults` (1.4.2 → 1.4.3)

### 1.4.3

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/backend-app-api` (0.5.2 → 0.5.3)

### 0.5.3

#### Patch Changes

- 154632d8753b: Add support for discovering additional service factories during startup.
- 37a20c7f14aa: Adds include and exclude configuration to feature discovery of backend packages
  Adds alpha modules to feature discovery
- cb7fc410ed99: The experimental backend feature discovery now only considers default exports from packages. It no longer filters packages to include based on the package role, except that `'cli'` packages are ignored. However, the `"backstage"` field is still required in `package.json`.
- 3fc64b9e2f8f: Extension points are now tracked via their ID rather than reference, in order to support package duplication.
- 3b30b179cb38: Add support for installing features as package imports, for example `backend.add(import('my-plugin'))`.
- b219d097b3f4: Backend startup will now fail if any circular service dependencies are detected.

## `@backstage/backend-common` (0.19.4 → 0.19.5)

### 0.19.5

#### Patch Changes

- 6847cd6225d6: Avoid starting database keepalive loop in tests.
- fd3fdd0e3338: The root logger is now initialized lazily, fixing a circular dependency issue with `@backstage/backend-app-api` that would result in `Cannot read properties of undefined (reading 'redacter')`.
- 5f1a92b9f19f: Use `DefaultAzureDevOpsCredentialsProvider` to retrieve credentials for Azure DevOps.
- 19a140418cc8: Added retries for initial database creation, as well as set minimum connection pool size for the database creation client to 0 and lowered the connection acquisition timeout.
- 05508a9757d2: Minor internal refactor
- cfc3ca6ce060: Changes needed to support MySQL

## `@backstage/backend-plugin-api` (0.6.2 → 0.6.3)

### 0.6.3

#### Patch Changes

- ba4506076e2d: Ensure that root scoped services cannot accept (at a type level) plugin scoped deps
- 474b792d6a43: Service factory functions are now marked as feature factories that can be installed in the backend.

## `@backstage/backend-tasks` (0.5.7 → 0.5.8)

### 0.5.8

#### Patch Changes

- 8fd91547cd0b: When starting a task that existed before, with a faster schedule than it
  previously had, the task will now correctly obey the faster schedule
  immediately. Before this fix, the new schedule was only obeyed after the next
  pending (according to the old schedule) run had completed.
- 62f448edb0b5: Use `readDurationFromConfig` from the config package
- 74604806aae8: Avoid starting task janitor in tests.
- cfc3ca6ce060: Changes needed to support MySQL
- 814feeed7343: Update to handle invalid luxon values

## `@backstage/backend-test-utils` (0.2.2 → 0.2.3)

### 0.2.3

#### Patch Changes

- 58cb5e5cea7b: Introduced a new utility for testing service factories, `ServiceFactoryTester`.
- 202e52c5e361: Add support for installing backend features via module imports, for example `startTestBackend({ features: [import('my-plugin')] })`.
- 9fb3b5373c45: Extended `mockService` to also include mocked variants, for example `mockServices.lifecycle.mock()`. The returned mocked implementation will have a `factory` property which is a service factory for itself. You can also pass a partial implementation of the service to the mock function to use a mock implementation of specific methods.
- eb1594da5812: Serialize test database shutdown, and add logging

## `@backstage/catalog-client` (1.4.3 → 1.4.4)

### 1.4.4

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.

## `@backstage/catalog-model` (1.4.1 → 1.4.2)

### 1.4.2

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.

## `@backstage/cli` (0.22.12 → 0.22.13)

### 0.22.13

#### Patch Changes

- 04eabd21bee4: Added the ability to specify the listen address for the `--inspect` and `--inspect-brk` command. You can now set the `ip` and port of the `inspect` and `inspectBrk` by adding for example `--inspect=0.0.0.0:9229`
- 278d9326eb40: Added the ability to create a plain backend module with the `new` command.
- 4d5eeec52d80: Add ESM loader for the experimental backend start command.
- 3494c502aba7: Added a new `repo fix` command that fixes auto-fixable problems in all packages. Initially the command fixes package export declarations, as well as marks all non-bundled frontend packages as side-effect free. Marking packages as free of side-effects can drastically reduce the Webpack bundle size.
- f36113ca2305: Add experimental support for frontend package discovery.
- a23fce763c6a: Fixed a bug where package exports entry points could not be `.tsx` files.
- 8cec7664e146: Removed `@types/node` dependency
- ea779492ad88: Updated dependency `run-script-webpack-plugin` to `^0.2.0`.
- 4af4defcc114: When running `version:bump` it will now log duplicates instead of throwing an error
- 71d4368ae5cc: Added support for the `dev/index` entry point for backend plugins and modules.
- 956d226eeeee: Add `"sideEffects": false` to `package.json` in frontend package templates. This can be added to existing packages using the new `yarn fix` command.
- cd7331587eb3: Removed the experimental `package fix` command that was used to automatically add dependencies to `package.json`, but has since been replaced by the `no-undeclared-imports` rule from `@backstage/eslint-plugin`.
- 219b46ae1a50: Include default alpha export during package detection

## `@backstage/config` (1.0.8 → 1.1.0)

### 1.1.0

#### Minor Changes

- 62f448edb0b5: Added a `readDurationFromConfig` function

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/config-loader` (1.4.0 → 1.5.0)

### 1.5.0

#### Minor Changes

- 9606ba0939e6: Deep visibility now also applies to values that are not covered by the configuration schema.

  For example, given the following configuration schema:

  ```ts
  // plugins/a/config.schema.ts
  export interface Config {
    /** @deepVisibility frontend */
    a?: unknown;
  }

  // plugins/a/config.schema.ts
  export interface Config {
    a?: {
      b?: string;
    };
  }
  ```

  All values under `a` are now visible to the frontend, while previously only `a` and `a/b` would've been visible.

#### Patch Changes

- 8cec7664e146: Removed `@types/node` dependency
- f9657b891b00: Do not unnecessarily notify subscribers when no-op updates to config happen

## `@backstage/core-app-api` (1.9.1 → 1.10.0)

### 1.10.0

#### Minor Changes

- 18619f793c94: Fixed two bugs in how the `OAuth2Session` type represents the underlying data. The `expiresAt` and `backstageIdentity` are now both optional, since that's what they are in practice. This is not considered a breaking change since it was effectively a bug in the modelling of the state that this type represents, and the type was not used in any other external contract.
- 18619f793c94: The `OAuth` class which is used by all OAuth providers will now consider both the session expiration of both the Backstage identity as well as the upstream identity provider, and refresh the session with either of them is about to expire.
- 6e30769cc627: Introduced experimental support for internationalization.

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 9fe827b380e1: Internal refactor
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/core-components` (0.13.4 → 0.13.5)

### 0.13.5

#### Patch Changes

- 0c9907645aab: Fixed an issue causing `StructuredMetadataTable` to crash in case metadata contained `null` values.
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 9b74166d11a1: Added `<AutoLogout>` component which introduces an optional automatic logout mechanism on user inactivity
- 117027636b10: Minor internal tweak to handle `classnames` update
- 8cec7664e146: Removed `@types/node` dependency
- db92d1244897: Updated dependency `rc-progress` to `3.5.1`.
- 47782f4bfa5b: Add loading indicator to Table
- 3d63e60f3c36: Internal restructure to avoid circular imports

## `@backstage/core-plugin-api` (1.5.3 → 1.6.0)

### 1.6.0

#### Minor Changes

- 18619f793c94: Added the optional `expiresAt` field that may now be part of a `BackstageIdentityResponse`.
- 6e30769cc627: Introduced experimental support for internationalization.

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/create-app` (0.5.4 → 0.5.5)

### 0.5.5

#### Patch Changes

- 05508a9757d2: Updated the backend template to no longer create duplicate connection pools to plugins that use the task scheduler.

  To apply this change in your own repository, perform the following small update:

  ```diff
  // in packages/backend/src/index.ts
  -  const taskScheduler = TaskScheduler.fromConfig(config);
  +  const taskScheduler = TaskScheduler.fromConfig(config, { databaseManager });
  ```

- a4c08241ad92: Switched the template to use TypeScript 5.2 by default.
- f8c8e8de37b6: Bumped create-app version.
- fc1a38bc5723: Bumped create-app version.
- 4606e005df5d: Added a `fix` scripts that calls the new `backstage-cli repo fix` command.

  To apply this change to an existing app, make the following change to your root `package.json`:

  ```diff
       "test": "backstage-cli repo test",
       "test:all": "backstage-cli repo test --coverage",
  +    "fix": "backstage-cli repo fix",
       "lint": "backstage-cli repo lint --since origin/master",
  ```

- 612594022245: Add a notification when `yarn install` is taking a long time.
- 8db70ecbb325: Updated Dockerfile to include `apt-get update` when installing the SQLite dependency
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/dev-utils` (1.0.20 → 1.0.21)

### 1.0.21

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/errors` (1.2.1 → 1.2.2)

### 1.2.2

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.

## `@backstage/integration` (1.6.2 → 1.7.0)

### 1.7.0

#### Minor Changes

- 5f1a92b9f19f: Added `AzureDevOpsCredentialsProvider` to support multiple Azure DevOps organizations and **deprecated** `AzureIntegrationConfig.credential` and `AzureIntegrationConfig.token` in favour of `AzureIntegrationConfig.credentials`. You can now use specific credentials for different Azure DevOps (Server) organizations by specifying the `organizations` field on a credential:

  ```yaml
  integrations:
    azure:
      - host: dev.azure.com
        credentials:
          - organizations:
              - my-org
              - my-other-org
            clientId: ${AZURE_CLIENT_ID}
            clientSecret: ${AZURE_CLIENT_SECRET}
            tenantId: ${AZURE_TENANT_ID}
          - organizations:
              - yet-another-org
            personalAccessToken: ${PERSONAL_ACCESS_TOKEN}
  ```

  See the [Azure integration documentation](https://backstage.io/docs/integrations/azure/locations) for more information.

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 2d2fc9d20ebb: Additional fix for Gitiles auth links
- cb2e19d82d95: Gitiles: Fixed auth prefix issue

## `@backstage/integration-react` (1.1.18 → 1.1.19)

### 1.1.19

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-adr` (0.6.6 → 0.6.7)

### 0.6.7

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- aa844e704a32: support for i18n feature
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-adr-backend` (0.3.8 → 0.4.0)

### 0.4.0

#### Minor Changes

- 71114ac50e02: **BREAKING**: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

## `@backstage/plugin-adr-common` (0.2.14 → 0.2.15)

### 0.2.15

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.

## `@backstage/plugin-airbrake` (0.3.23 → 0.3.24)

### 0.3.24

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-airbrake-backend` (0.2.23 → 0.3.0)

### 0.3.0

#### Minor Changes

- 71114ac50e02: **BREAKING**: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

## `@backstage/plugin-allure` (0.1.39 → 0.1.40)

### 0.1.40

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-analytics-module-ga` (0.1.32 → 0.1.33)

### 0.1.33

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-analytics-module-ga4` (0.1.3 → 0.1.4)

### 0.1.4

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-analytics-module-newrelic-browser` (0.0.1 → 0.0.2)

### 0.0.2

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-apache-airflow` (0.2.14 → 0.2.15)

### 0.2.15

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-api-docs` (0.9.10 → 0.9.11)

### 0.9.11

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-api-docs-module-protoc-gen-doc` (0.1.2 → 0.1.3)

### 0.1.3

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.

## `@backstage/plugin-apollo-explorer` (0.1.14 → 0.1.15)

### 0.1.15

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-app-backend` (0.3.50 → 0.3.51)

### 0.3.51

#### Patch Changes

- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

- cfc3ca6ce060: Changes needed to support MySQL

## `@backstage/plugin-auth-backend` (0.18.8 → 0.19.0)

### 0.19.0

#### Minor Changes

- 71114ac50e02: **BREAKING**: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

#### Patch Changes

- 080cc7794700: Migrated the GitLab auth provider to be implemented using the new `@backstage/plugin-auth-backend-module-gitlab-provider` module.
- 7944d43f4790: Added `authPlugin` export for the new backend system. The plugin does not include any built-in auth providers, they must instead be added by installing additional modules, for example `authModuleGoogleProvider` from `@backstage/plugin-auth-backend-module-google-provider`.
- 8513cd7d00e3: Deprecated several exports that are now available from `@backstage/plugin-auth-node` instead.
- 7944d43f4790: Added the ability to disable the built-in auth providers by passing `disableDefaultProviderFactories` to `createRouter`.
- 7944d43f4790: The algorithm used when generating Backstage tokens can be configured via `auth.identityTokenAlgorithm`.

## `@backstage/plugin-auth-node` (0.2.19 → 0.3.0)

### 0.3.0

#### Minor Changes

- 8513cd7d00e3: Introduced a new system for building auth providers for `@backstage/plugin-auth-backend`, which both increases the amount of code re-use across providers, and also works better with the new backend system.

  Many existing types have been moved from `@backstage/plugin-auth-backend` in order to avoid a direct dependency on the plugin from modules.

  Auth provider integrations are now primarily implemented through a pattern of creating "authenticators", which are in turn specific to each kind of integrations. Initially there are two types: `createOAuthAuthenticator` and `createProxyAuthenticator`. These come paired with functions that let you create the corresponding route handlers, `createOAuthRouteHandlers` and `createProxyAuthRouteHandlers`, as well as provider factories, `createOAuthProviderFactory` and `createProxyAuthProviderFactory`. This new authenticator pattern allows the sign-in logic to be separated from the auth integration logic, allowing it to be completely re-used across all providers of the same kind.

  The new provider factories also implement a new declarative way to configure sign-in resolvers, rather than configuration through code. Sign-in resolvers can now be configured through the `resolvers` configuration key, where the first resolver that provides an identity will be used, for example:

  ```yaml
  auth:
    providers:
      google:
        development:
          clientId: ...
          clientSecret: ...
          signIn:
            resolvers:
              - resolver: emailMatchingUserEntityAnnotation
              - resolver: emailLocalPartMatchingUserEntityName
  ```

  These configurable resolvers are created with a new `createSignInResolverFactory` function, which creates a sign-in resolver factory, optionally with an options schema that will be used both when configuring the sign-in resolver through configuration and code.

  The internal helpers from `@backstage/plugin-auth-backend` that were used to implement auth providers using passport strategies have now also been made available as public API, through `PassportHelpers` and `PassportOAuthAuthenticatorHelper`.

#### Patch Changes

- 18619f793c94: The `BackstageIdentityResponse` interface now has an optional `expiresInSeconds` field that can be used to signal session expiration. The `prepareBackstageIdentityResponse` utility will now also read the expiration from the provided token, and include it in the response.

## `@backstage/plugin-azure-devops` (0.3.5 → 0.3.6)

### 0.3.6

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-azure-devops-backend` (0.3.29 → 0.4.0)

### 0.4.0

#### Minor Changes

- 71114ac50e02: **BREAKING**: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

## `@backstage/plugin-azure-devops-common` (0.3.0 → 0.3.1)

### 0.3.1

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.

## `@backstage/plugin-azure-sites` (0.1.12 → 0.1.13)

### 0.1.13

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-azure-sites-common` (0.1.0 → 0.1.1)

### 0.1.1

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.

## `@backstage/plugin-badges` (0.2.47 → 0.2.48)

### 0.2.48

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-badges-backend` (0.2.5 → 0.3.0)

### 0.3.0

#### Minor Changes

- 71114ac50e02: **BREAKING**: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

#### Patch Changes

- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-bazaar` (0.2.15 → 0.2.16)

### 0.2.16

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.

## `@backstage/plugin-bazaar-backend` (0.2.13 → 0.3.0)

### 0.3.0

#### Minor Changes

- 71114ac50e02: **BREAKING**: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

#### Patch Changes

- cfc3ca6ce060: Changes needed to support MySQL

## `@backstage/plugin-bitbucket-cloud-common` (0.2.11 → 0.2.12)

### 0.2.12

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.

## `@backstage/plugin-bitrise` (0.1.50 → 0.1.51)

### 0.1.51

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-catalog` (1.12.4 → 1.13.0)

### 1.13.0

#### Minor Changes

- e44f45ac4515: This change allows a new annotation of `backstage.io/techdocs-entity` this ref allows you to reference another entity for its TechDocs. This allows you have a single TechDoc for all items in a system, for example you might have a frontend and a backend in the same repo. This would allow you to have TechDocs build under a `System` entity while referencing the system e.g.: `backstage.io/techdocs-entity: system:default/example` that will show the systems docs in both the TechDocs button and the TechDocs tab without needing to do duplicate builds and filling the TechDocs page with garbage.

#### Patch Changes

- 832eef72485b: Added title to props for `Has<kind>Cards`.
- 163a41035e42: Fixed an issue where `EntitySwitch` was preventing the display of entity errors.
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.

## `@backstage/plugin-catalog-backend` (1.12.4 → 1.13.0)

### 1.13.0

#### Minor Changes

- 62f448edb0b5: Allow configuring the processing interval in your app-config, under the `catalog.processingInterval` key.
- 09cfc3cf467d: set azure annotation `dev.azure.com/project-repo` in `AnnotateScmSlugEntityProcessor` to find the project and repo information for the repos that contains `dev.azure.com` in the url

#### Patch Changes

- 149361e81622: Fix to the `limit` parameter on entity queries.
- 1fd2109739c1: Changed the processing loop task pipeline implementation from recursive to iterative
- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

- 0f8a97777489: Update OpenAPI schema to relax the encoding validation of all request parameters.
- 0198aa596fd9: Fixed a link to the frontend Backstage plugin that had pointed to itself.
- 2d32d8a611e3: Fixed validation of the `fullTextFilterFields` query parameter.
- acffa17027b6: Added some examples to the catalog OpenAPI definition
- 45947d3b2759: Fixes an issue where `order` was not a recognized parameter for the `/entities` endpoint.
- 41d1b2d628ea: Fix OpenAPI schema for the facets endpoint
- 618257f3e413: Fix issue with `catalogFileName` not being a required property for `/analyze-location`
- cfc3ca6ce060: Changes needed to support MySQL
- 814feeed7343: Update to handle invalid luxon values

## `@backstage/plugin-catalog-backend-module-aws` (0.2.5 → 0.2.6)

### 0.2.6

#### Patch Changes

- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

## `@backstage/plugin-catalog-backend-module-azure` (0.1.21 → 0.1.22)

### 0.1.22

#### Patch Changes

- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

- 94f96508491d: Improve consistency of results from the `AzureDevOpsEntityProvider`.
- 5f1a92b9f19f: Use `DefaultAzureDevOpsCredentialsProvider` to retrieve credentials for Azure DevOps.
- 044b4f2fb1e3: Remove duplications from Azure search before committing the new locations to the catalog.

## `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.17 → 0.1.18)

### 0.1.18

#### Patch Changes

- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

## `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.15 → 0.1.16)

### 0.1.16

#### Patch Changes

- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

## `@backstage/plugin-catalog-backend-module-gcp` (0.1.2 → 0.1.3)

### 0.1.3

#### Patch Changes

- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

- 201f07c27f1e: Fix GKE endpoint parsing

  Endpoint is an IP, not url. It is always https on default (443) port
  ref: https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters#Cluster

## `@backstage/plugin-catalog-backend-module-gerrit` (0.1.18 → 0.1.19)

### 0.1.19

#### Patch Changes

- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

## `@backstage/plugin-catalog-backend-module-github` (0.3.7 → 0.4.0)

### 0.4.0

#### Minor Changes

- fa7004d9722c: Added a `catalogModuleGithubOrgEntityProvider` for the new backend system

#### Patch Changes

- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

- 3d63e60f3c36: Internal restructure to avoid circular imports
- 96353bb7cb4a: Properly support custom `userTransformer` returning `undefined` in `GithubMultiOrgEntityProvider`
- 3c44761b9191: Allow github user and team transforms to return any Entity

## `@backstage/plugin-catalog-backend-module-gitlab` (0.2.6 → 0.3.0)

### 0.3.0

#### Minor Changes

- 3d73bafd85c9: Fix Gitlab.com user ingestion by scoping GitlabOrgDiscoveryEntityProvider to a group.

  **BREAKING** The `group` parameter is now required Gitlab.com Org Data integrations and the backend will fail to start without this option configured.

  ```diff
  catalog:
    providers:
      gitlab:
        yourProviderId:
          host: gitlab.com
          orgEnabled: true
  +       group: org/teams
  ```

#### Patch Changes

- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

## `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.5 → 0.4.6)

### 0.4.6

#### Patch Changes

- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

## `@backstage/plugin-catalog-backend-module-msgraph` (0.5.9 → 0.5.10)

### 0.5.10

#### Patch Changes

- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

## `@backstage/plugin-catalog-backend-module-puppetdb` (0.1.7 → 0.1.8)

### 0.1.8

#### Patch Changes

- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

## `@backstage/plugin-catalog-backend-module-unprocessed` (0.2.2 → 0.3.0)

### 0.3.0

#### Minor Changes

- 71114ac50e02: **BREAKING**: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

## `@backstage/plugin-catalog-common` (1.0.15 → 1.0.16)

### 1.0.16

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.

## `@backstage/plugin-catalog-graph` (0.2.35 → 0.2.36)

### 0.2.36

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.

## `@backstage/plugin-catalog-import` (0.9.13 → 0.10.0)

### 0.10.0

#### Minor Changes

- c3c1fd3a1765: Slight change to the `PreparePullRequestFormProps`, because of an update to `react-hook-form`.

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.

## `@backstage/plugin-catalog-react` (1.8.3 → 1.8.4)

### 1.8.4

#### Patch Changes

- bd817209ddd7: Export the `EntityAutocompletePicker` component.
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 7029ba1ce0af: Added delete alert popup when user delete the entity

## `@backstage/plugin-catalog-unprocessed-entities` (0.1.2 → 0.1.3)

### 0.1.3

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-cicd-statistics` (0.1.25 → 0.1.26)

### 0.1.26

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.

## `@backstage/plugin-cicd-statistics-module-gitlab` (0.1.19 → 0.1.20)

### 0.1.20

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.

## `@backstage/plugin-circleci` (0.3.23 → 0.3.24)

### 0.3.24

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-cloudbuild` (0.3.23 → 0.3.24)

### 0.3.24

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency
- 814feeed7343: Update to handle invalid luxon values

## `@backstage/plugin-code-climate` (0.1.23 → 0.1.24)

### 0.1.24

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-code-coverage` (0.2.16 → 0.2.17)

### 0.2.17

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 1d8f4f0a7486: Use fetchApi to ensure authorization is used when fetching code-coverage data
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-code-coverage-backend` (0.2.16 → 0.2.17)

### 0.2.17

#### Patch Changes

- 3f1367b956c6: Added support for LCOV coverage reports
- df005d9932fb: Add text body parser for LCOV reports
- 91ccb56fb418: Replace `express-xml-bodyparser` with `body-parser-xml`.

  `express-xml-bodyparser` was last updated 8 years ago
  and currently depends on a version of `xml2js` which
  contains a vulnerability.

  This change will swap it out in favor of `body-parser-xml`
  which is more maintained and depends on a more recent `xml2js`
  version without the vulnerability.

- 33e606a797ef: Include auth token when fetching entity
- d409ed988aed: Correct the line hits calculation for Cobertura reports
- cfc3ca6ce060: Changes needed to support MySQL

## `@backstage/plugin-codescene` (0.1.16 → 0.1.17)

### 0.1.17

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency
- db92d1244897: Updated dependency `rc-progress` to `3.5.1`.

## `@backstage/plugin-config-schema` (0.1.44 → 0.1.45)

### 0.1.45

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-cost-insights` (0.12.12 → 0.12.13)

### 0.12.13

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency
- a54cd411639e: Updated dependency `@types/pluralize` to `^0.0.30`.

## `@backstage/plugin-cost-insights-common` (0.1.1 → 0.1.2)

### 0.1.2

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.

## `@backstage/plugin-devtools` (0.1.3 → 0.1.4)

### 0.1.4

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 12e644aa4eef: Show resource utilization in `DevTools` plugin
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-devtools-backend` (0.1.5 → 0.2.0)

### 0.2.0

#### Minor Changes

- 71114ac50e02: **BREAKING**: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

#### Patch Changes

- 12e644aa4eef: Show resource utilization in `DevTools` plugin

## `@backstage/plugin-devtools-common` (0.1.3 → 0.1.4)

### 0.1.4

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 12e644aa4eef: Show resource utilization in `DevTools` plugin

## `@backstage/plugin-dynatrace` (7.0.3 → 7.0.4)

### 7.0.4

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-entity-feedback` (0.2.6 → 0.2.7)

### 0.2.7

#### Patch Changes

- 5e2e06db747a: Improve README to note that Backstage identity is required to be configured
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-entity-feedback-backend` (0.1.8 → 0.2.0)

### 0.2.0

#### Minor Changes

- 71114ac50e02: **BREAKING**: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

#### Patch Changes

- 740155e8e976: Improve backend logging if method calls fail

## `@backstage/plugin-entity-feedback-common` (0.1.2 → 0.1.3)

### 0.1.3

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.

## `@backstage/plugin-entity-validation` (0.1.8 → 0.1.9)

### 0.1.9

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-events-backend` (0.2.11 → 0.2.12)

### 0.2.12

#### Patch Changes

- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

## `@backstage/plugin-events-backend-module-aws-sqs` (0.2.5 → 0.2.6)

### 0.2.6

#### Patch Changes

- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

## `@backstage/plugin-explore` (0.4.9 → 0.4.10)

### 0.4.10

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-explore-common` (0.0.1 → 0.0.2)

### 0.0.2

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.

## `@backstage/plugin-explore-react` (0.0.30 → 0.0.31)

### 0.0.31

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-firehydrant` (0.2.7 → 0.2.8)

### 0.2.8

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-fossa` (0.2.55 → 0.2.56)

### 0.2.56

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-gcalendar` (0.3.17 → 0.3.18)

### 0.3.18

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency
- 814feeed7343: Update to handle invalid luxon values

## `@backstage/plugin-gcp-projects` (0.3.40 → 0.3.41)

### 0.3.41

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-git-release-manager` (0.3.36 → 0.3.37)

### 0.3.37

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-github-actions` (0.6.4 → 0.6.5)

### 0.6.5

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-github-deployments` (0.1.54 → 0.1.55)

### 0.1.55

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-github-issues` (0.2.12 → 0.2.13)

### 0.2.13

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-github-pull-requests-board` (0.1.17 → 0.1.18)

### 0.1.18

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-gitops-profiles` (0.3.39 → 0.3.40)

### 0.3.40

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-gocd` (0.1.29 → 0.1.30)

### 0.1.30

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-graphiql` (0.2.53 → 0.2.54)

### 0.2.54

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- b2fbeed5403b: Add support for using the FetchApi
- cf950c3b6eab: Added experimental exports for the new frontend system under `/alpha`.
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-graphql-voyager` (0.1.6 → 0.1.7)

### 0.1.7

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-home` (0.5.7 → 0.5.8)

### 0.5.8

#### Patch Changes

- 2bc96ce69eea: Fixed a bug where customizable home page cards would render missing their normal borders.
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 98bb77c1f0b8: Align zod dependency to align with other packages.
- 8cec7664e146: Removed `@types/node` dependency
- b16c341ced45: Updated dependency `@rjsf/utils` to `5.13.0`.
  Updated dependency `@rjsf/core-v5` to `npm:@rjsf/core@5.13.0`.
  Updated dependency `@rjsf/material-ui-v5` to `npm:@rjsf/material-ui@5.13.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.13.0`.
- 1853ffa09b50: Allow specifying static widgets to custom home page

## `@backstage/plugin-home-react` (0.1.2 → 0.1.3)

### 0.1.3

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency
- b16c341ced45: Updated dependency `@rjsf/utils` to `5.13.0`.
  Updated dependency `@rjsf/core-v5` to `npm:@rjsf/core@5.13.0`.
  Updated dependency `@rjsf/material-ui-v5` to `npm:@rjsf/material-ui@5.13.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.13.0`.

## `@backstage/plugin-ilert` (0.2.12 → 0.2.13)

### 0.2.13

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency
- 814feeed7343: Update to handle invalid luxon values

## `@backstage/plugin-jenkins` (0.8.5 → 0.8.6)

### 0.8.6

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-jenkins-common` (0.1.18 → 0.1.19)

### 0.1.19

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.

## `@backstage/plugin-kafka` (0.3.23 → 0.3.24)

### 0.3.24

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-kafka-backend` (0.2.43 → 0.3.0)

### 0.3.0

#### Minor Changes

- 71114ac50e02: **BREAKING**: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

## `@backstage/plugin-kubernetes` (0.10.2 → 0.10.3)

### 0.10.3

#### Patch Changes

- 0ad36158d980: Loosened the type of the `auth` field in the body of requests to the `retrieveObjectsByServiceId` endpoint. Now any JSON object is allowed, which should make it easier for integrators to write their own custom auth strategies for Kubernetes.
- 7032c214f3b4: Add pod exec terminal to Container Card
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 6ddeade58b4c: Avoid eager use of `TextEncoder` in order not to break tests.
- 6a5e04e20e6e: fix logs dialog min height
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-kubernetes-backend` (0.11.5 → 0.12.0)

### 0.12.0

#### Minor Changes

- 0ad36158d980: Integrators can now bring their own auth strategies through the use of the `addAuthStrategy` method on `KubernetesBuilder`.

  **BREAKING** the `ClusterDetails` interface has been refactored to add an `authMetadata` field, and the`authProvider`, `serviceAccountToken`, `assumeRole`, and `externalID` fields have all been removed -- they appear within `authMetadata` using the same keys as those read by the `catalog` cluster locator. This means that if you are using a custom cluster supplier, your code will need to be updated -- as an example, instead of returning a `ClusterDetails` like `{authProvider: 'aws'}`, you will need to return one like `{authMetadata: {['kubernetes.io/auth-provider']: 'aws'}`.

  **BREAKING** on the slight chance you were using the `setAuthTranslatorMap` method on `KubernetesBuilder`, it has been removed along with the entire `KubernetesAuthTranslator` interface. This notion has been replaced with the more focused concept of an `AuthenticationStrategy`. Converting a translator to a strategy should not be especially difficult.

#### Patch Changes

- ccf00accb408: Add AWS Annotations to Kubernetes Cluster Resource
- 72390ab2670d: Handle Proxy WS upgrade manually for WS handshakes
- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

- 024b2b66a332: Fixed a bug where requests to the proxy endpoint would fail for clusters with `caFile` configured
- a8a614ba0d07: Minor `package.json` update.
- 47ea122590f5: fix "undefined" kind for custom resources

## `@backstage/plugin-kubernetes-common` (0.6.5 → 0.6.6)

### 0.6.6

#### Patch Changes

- 0ad36158d980: Loosened the type of the `auth` field in the body of requests to the `retrieveObjectsByServiceId` endpoint. Now any JSON object is allowed, which should make it easier for integrators to write their own custom auth strategies for Kubernetes.
- ccf00accb408: Add AWS Annotations to Kubernetes Cluster Resource
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.

## `@backstage/plugin-lighthouse` (0.4.8 → 0.4.9)

### 0.4.9

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-lighthouse-backend` (0.2.6 → 0.3.0)

### 0.3.0

#### Minor Changes

- 71114ac50e02: **BREAKING**: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

## `@backstage/plugin-lighthouse-common` (0.1.2 → 0.1.3)

### 0.1.3

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.

## `@backstage/plugin-linguist` (0.1.8 → 0.1.9)

### 0.1.9

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-linguist-backend` (0.4.2 → 0.5.0)

### 0.5.0

#### Minor Changes

- 71114ac50e02: **BREAKING**: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

#### Patch Changes

- b2de501bda31: When creating the router using `createRouterFromConfig` or using the plugin for the new backend system the `linguist.useSourceLocation` configuration is now optional.
- cfc3ca6ce060: Changes needed to support MySQL

## `@backstage/plugin-linguist-common` (0.1.1 → 0.1.2)

### 0.1.2

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.

## `@backstage/plugin-microsoft-calendar` (0.1.6 → 0.1.7)

### 0.1.7

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency
- 814feeed7343: Update to handle invalid luxon values

## `@backstage/plugin-newrelic` (0.3.39 → 0.3.40)

### 0.3.40

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 55cb7061e072: Fixed bug in NewRelicComponent component where table would not sort correctly for numerical values.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-newrelic-dashboard` (0.2.16 → 0.2.17)

### 0.2.17

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.

## `@backstage/plugin-nomad` (0.1.4 → 0.1.5)

### 0.1.5

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-octopus-deploy` (0.2.5 → 0.2.6)

### 0.2.6

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-org` (0.6.13 → 0.6.14)

### 0.6.14

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 43a2137bb829: Ensure direct relations are shown for User entities while keeping support for aggregating closest parent group ownership
- dd9329caea1c: Entity relations toggle should by default be aggregated for User entities
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-org-react` (0.1.12 → 0.1.13)

### 0.1.13

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-pagerduty` (0.6.4 → 0.6.5)

### 0.6.5

#### Patch Changes

- 3b41afed4d0c: Minor internal tweaks to improve tests
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-periskop` (0.1.21 → 0.1.22)

### 0.1.22

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-periskop-backend` (0.1.21 → 0.2.0)

### 0.2.0

#### Minor Changes

- 71114ac50e02: **BREAKING**: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

## `@backstage/plugin-permission-backend` (0.5.25 → 0.5.26)

### 0.5.26

#### Patch Changes

- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

- a8a614ba0d07: Minor `package.json` update.
- 84ad6fccd4d5: Moved `permissionModuleAllowAllPolicy` to `@backstage/plugin-permission-backend-module-allow-all-policy`

## `@backstage/plugin-permission-common` (0.7.7 → 0.7.8)

### 0.7.8

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.

## `@backstage/plugin-permission-node` (0.7.13 → 0.7.14)

### 0.7.14

#### Patch Changes

- a8a614ba0d07: Minor `package.json` update.

## `@backstage/plugin-permission-react` (0.4.14 → 0.4.15)

### 0.4.15

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.

## `@backstage/plugin-playlist` (0.1.15 → 0.1.16)

### 0.1.16

#### Patch Changes

- 79847cb73ed7: Updated latest playlist screen in readme document
- ec4b0f8cd957: change color of delete icon to secondary in playlist table
- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 2f3215bbbffe: Fix a bug that led to errors being thrown in guest mode
- 8cec7664e146: Removed `@types/node` dependency
- b5ba33a92750: Limit the use of the same playlist name when adding a playlist
- 3d63e60f3c36: Internal restructure to avoid circular imports
- fdbf215a8d8e: Fix the Ui style of the search bar

## `@backstage/plugin-playlist-common` (0.1.9 → 0.1.10)

### 0.1.10

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.

## `@backstage/plugin-proxy-backend` (0.3.2 → 0.4.0)

### 0.4.0

#### Minor Changes

- 71114ac50e02: **BREAKING**: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

#### Patch Changes

- 02ba0a2efd2a: Add the route name to an error message that appears when the backend
  proxy wasn't well configured. This will help users to understand the
  issue and fix the right configuration.
- 03691f0f3270: Add back the legacy proxy config, to get secret redaction

## `@backstage/plugin-puppetdb` (0.1.6 → 0.1.7)

### 0.1.7

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-rollbar` (0.4.23 → 0.4.24)

### 0.4.24

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-scaffolder` (1.14.4 → 1.15.0)

### 1.15.0

#### Minor Changes

- 0119c326394a: adding a .zip download to dry run results page, including zip.js as dependency

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 6e69c11a3535: Restored functionality to `OwnedEntityPicker` by converting deprecated `ui:options` input to `catalogFilter`.
- 8cec7664e146: Removed `@types/node` dependency
- b16c341ced45: Updated dependency `@rjsf/utils` to `5.13.0`.
  Updated dependency `@rjsf/core-v5` to `npm:@rjsf/core@5.13.0`.
  Updated dependency `@rjsf/material-ui-v5` to `npm:@rjsf/material-ui@5.13.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.13.0`.

## `@backstage/plugin-scaffolder-backend` (1.16.5 → 1.17.0)

### 1.17.0

#### Minor Changes

- b5f239b50bcf: Improved the `parseEntityRef` Scaffolder filter by introducing the ability for users to provide default kind and/or namespace values. The filter now takes
  2 arguments, similarly to the original [parseEntityRef](https://github.com/backstage/backstage/blob/v1.17.2/packages/catalog-model/src/entity/ref.ts#L77).
- d5313ede3529: **DEPRECATION**: Deprecated `ScaffolderEntitiesProcessor`, which should now instead be imported from `@backstage/plugin-catalog-backend-module-scaffolder-entity-model`.

  `catalogModuleTemplateKind` was also moved to that package and renamed to `catalogModuleScaffolderEntityModel`, without any deprecation since it was an alpha export.

#### Patch Changes

- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

- a4989552d828: Add examples for `publish:github` and `publish:gitlab` scaffolder actions.
- ded27b83ead2: Add examples for `publish:bitbucket` scaffolder actions.
- 5f1a92b9f19f: Use `DefaultAzureDevOpsCredentialsProvider` to retrieve credentials for Azure DevOps.
- fb57a4694fc6: Fixed the plugin and module ID of the alpha `catalogModuleTemplateKind` export.
- f3c0b95e3ef1: Add examples for `github:actions:dispatch` scaffolder actions.
- cfc3ca6ce060: Changes needed to support MySQL
- 814feeed7343: Update to handle invalid luxon values

## `@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.23 → 0.2.24)

### 0.2.24

#### Patch Changes

- 4fa1c74cbadc: Enables dry-run functionality for the run:yeoman scaffolder action

## `@backstage/plugin-scaffolder-common` (1.4.0 → 1.4.1)

### 1.4.1

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.

## `@backstage/plugin-scaffolder-react` (1.5.4 → 1.5.5)

### 1.5.5

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- b16c341ced45: Updated dependency `@rjsf/utils` to `5.13.0`.
  Updated dependency `@rjsf/core-v5` to `npm:@rjsf/core@5.13.0`.
  Updated dependency `@rjsf/material-ui-v5` to `npm:@rjsf/material-ui@5.13.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.13.0`.
- 27fef07f9229: Updated dependency `use-immer` to `^0.9.0`.

## `@backstage/plugin-search` (1.3.6 → 1.4.0)

### 1.4.0

#### Minor Changes

- b78f570f44d3: The SearchPage component can now be configured via app-config.yaml with default query parameters to define how it behaves when it is first loaded or reset. Check out the following example:

  ```yaml
  search:
    query:
      pageLimit: 50
  ```

  Acceptable values for `pageLimit` are `10`, `25`, `50` or `100`.

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-search-backend` (1.4.2 → 1.4.3)

### 1.4.3

#### Patch Changes

- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

## `@backstage/plugin-search-backend-module-catalog` (0.1.6 → 0.1.7)

### 0.1.7

#### Patch Changes

- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

## `@backstage/plugin-search-backend-module-elasticsearch` (1.3.5 → 1.3.6)

### 1.3.6

#### Patch Changes

- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

## `@backstage/plugin-search-backend-module-explore` (0.1.6 → 0.1.7)

### 0.1.7

#### Patch Changes

- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

## `@backstage/plugin-search-backend-module-pg` (0.5.11 → 0.5.12)

### 0.5.12

#### Patch Changes

- 4ccf9204bc95: Added `indexerBatchSize` option to be able to control the size of the batches being indexed. Also added a debug log entry to list out all the entities in the batch
- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

## `@backstage/plugin-search-backend-module-techdocs` (0.1.6 → 0.1.7)

### 0.1.7

#### Patch Changes

- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

## `@backstage/plugin-search-common` (1.2.5 → 1.2.6)

### 1.2.6

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.

## `@backstage/plugin-search-react` (1.6.4 → 1.7.0)

### 1.7.0

#### Minor Changes

- b78f570f44d3: The SearchPage component can now be configured via app-config.yaml with default query parameters to define how it behaves when it is first loaded or reset. Check out the following example:

  ```yaml
  search:
    query:
      pageLimit: 50
  ```

  Acceptable values for `pageLimit` are `10`, `25`, `50` or `100`.

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 45f8a95e1068: Optionally initializes the search context with default settings for search queries only when the config is defined, rather than always overriding it.
- 3d63e60f3c36: Internal restructure to avoid circular imports

## `@backstage/plugin-sentry` (0.5.8 → 0.5.9)

### 0.5.9

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-shortcuts` (0.3.13 → 0.3.14)

### 0.3.14

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-sonarqube` (0.7.4 → 0.7.5)

### 0.7.5

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency
- db92d1244897: Updated dependency `rc-progress` to `3.5.1`.

## `@backstage/plugin-sonarqube-react` (0.1.7 → 0.1.8)

### 0.1.8

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.

## `@backstage/plugin-splunk-on-call` (0.4.12 → 0.4.13)

### 0.4.13

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-stack-overflow` (0.1.19 → 0.1.20)

### 0.1.20

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-stackstorm` (0.1.5 → 0.1.6)

### 0.1.6

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-tech-insights` (0.3.15 → 0.3.16)

### 0.3.16

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-tech-insights-backend` (0.5.16 → 0.5.17)

### 0.5.17

#### Patch Changes

- cfc3ca6ce060: Changes needed to support MySQL
- 814feeed7343: Update to handle invalid luxon values

## `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.34 → 0.1.35)

### 0.1.35

#### Patch Changes

- 51b801f743b2: Handle extracting facts from 'not' conditions too

## `@backstage/plugin-tech-insights-common` (0.2.11 → 0.2.12)

### 0.2.12

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.

## `@backstage/plugin-tech-radar` (0.6.7 → 0.6.8)

### 0.6.8

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- b45d0ac68191: Add names to blip entry links in the radar to improve accessibility
- 80b4d0b34f14: Fixed the width of the tech radar dialog so that the content fits
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 6d35e9ea2afa: Add description property for Rings which will be shown in the footer.
- 8cec7664e146: Removed `@types/node` dependency
- c357f62052af: Fixed `RadarTimeline` text formatting.

## `@backstage/plugin-techdocs` (1.6.8 → 1.7.0)

### 1.7.0

#### Minor Changes

- e44f45ac4515: This change allows a new annotation of `backstage.io/techdocs-entity` this ref allows you to reference another entity for its TechDocs. This allows you have a single TechDoc for all items in a system, for example you might have a frontend and a backend in the same repo. This would allow you to have TechDocs build under a `System` entity while referencing the system e.g.: `backstage.io/techdocs-entity: system:default/example` that will show the systems docs in both the TechDocs button and the TechDocs tab without needing to do duplicate builds and filling the TechDocs page with garbage.

#### Patch Changes

- 88c9525a36f3: Fixed bug in styles that caused next and previous links in footer to overlap page content.
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-techdocs-addons-test-utils` (1.0.20 → 1.0.21)

### 1.0.21

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-techdocs-backend` (1.6.7 → 1.7.0)

### 1.7.0

#### Minor Changes

- 5985d458ee30: Add a `techdocs.publisher.azureBlobStorage.connectionString` app-config setting, which can be leveraged for improved Azurite support.
- 10a86bd4ae12: Add optional config and cli option for techdocs to specify default mkdocs plugins.

#### Patch Changes

- 60af8017dd84: Expand techdocs.publisher.type with `googleGcs`,`awsS3`,`azureBlobStorage` and `openStackSwift`
- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

- a8a614ba0d07: Minor `package.json` update.

## `@backstage/plugin-techdocs-module-addons-contrib` (1.0.18 → 1.1.0)

### 1.1.0

#### Minor Changes

- 86c19906fe4b: Enable zoom icon for techdocs images inside lightbox

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/plugin-techdocs-node` (1.7.6 → 1.8.0)

### 1.8.0

#### Minor Changes

- 5985d458ee30: Add a `techdocs.publisher.azureBlobStorage.connectionString` app-config setting, which can be leveraged for improved Azurite support.
- 10a86bd4ae12: Add optional config and cli option for techdocs to specify default mkdocs plugins.

## `@backstage/plugin-techdocs-react` (1.1.9 → 1.1.11)

### 1.1.11

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.

### 1.1.10

Skipped due to publishing issues.

## `@backstage/plugin-todo` (0.2.25 → 0.2.27)

### 0.2.27

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

### 0.2.26

Skipped due to publishing issues.

## `@backstage/plugin-todo-backend` (0.2.2 → 0.3.1)

### 0.3.1

#### Minor Changes

- 71114ac50e02: **BREAKING**: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

### 0.3.0

Skipped due to publishing issues.

## `@backstage/plugin-user-settings` (0.7.8 → 0.7.10)

### 0.7.10

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- ce77b23423cb: conditionally rendering the user email in user profile card
- e03f3ee2be94: changed auto theme tooltip title to camel case
- 8cec7664e146: Removed `@types/node` dependency
- 6e30769cc627: Introduced experimental support for internationalization.

### 0.7.9

Skipped due to publishing issues.

## `@backstage/plugin-user-settings-backend` (0.1.14 → 0.2.1)

### 0.2.1

#### Minor Changes

- 71114ac50e02: **BREAKING**: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@backstage/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@backstage/plugin-example-backend'));
  ```

### 0.2.0

Skipped due to publishing issues.

## `@backstage/plugin-vault` (0.1.17 → 0.1.19)

### 0.1.19

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency
- 858a18800870: Added ability to override vault secret engine value on catalog entity level using annotation `vault.io/secrets-engine`

### 0.1.18

Skipped due to publishing issues.

## `@backstage/plugin-vault-backend` (0.3.6 → 0.3.8)

### 0.3.8

#### Patch Changes

- 858a18800870: Added ability to override vault secret engine value on catalog entity level using annotation `vault.io/secrets-engine`

### 0.3.7

Skipped due to publishing issues.

## `@backstage/plugin-xcmetrics` (0.2.41 → 0.2.43)

### 0.2.43

#### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency
- 814feeed7343: Update to handle invalid luxon values

### 0.2.42

Skipped due to publishing issues.

## `@backstage/release-manifests` (0.0.9 → 0.0.10)

### 0.0.10

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency

## `@backstage/repo-tools` (0.3.3 → 0.3.4)

### 0.3.4

#### Patch Changes

- 0109d3f11159: The `generate-catalog-info` command now uses the first listed `CODEOWNER` as Component owner when initially
  creating the `catalog-info.yaml` file. It continues to allow any one listed `CODEOWNER` when updating
  entity metadata.
- 6f874cdb04eb: Fixed a bug with the `generate-catalog-info` command that could cause `metadata.description` values to be overwritten by `package.json` description values only because unrelated attributes were being changed.
- ec13d3e86028: Fixed a bug with the `generate-catalog-info` command that could cause the `--dry-run` flag to indicate changes to files when no changes would actually be made if the command were run without the flag.
- db60a16e0a54: Added a `--ci` flag to the `generate-catalog-info` command. This flag behaves similarly to the same flag on `api-reports`: if `catalog-info.yaml` files would have been added or modified, then the process exits with status code `1`, and instructions are printed.

## `@backstage/test-utils` (1.4.2 → 1.4.3)

### 1.4.3

#### Patch Changes

- 7032c214f3b4: Add pod exec terminal to Container Card
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency
- b5fbddc15dca: Add a new `MockTranslationApi` as an `/alpha` export.
- 9ceb6195275a: Add support for React Testing Library 13+, and thus React 18.

  We're exposing an additional option to the `render*` methods to enable the [`legacyRoot`](https://testing-library.com/docs/react-testing-library/api/#legacyroot) flow.

## `@backstage/theme` (0.4.1 → 0.4.2)

### 0.4.2

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.

## `@backstage/types` (1.1.0 → 1.1.1)

### 1.1.1

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.

## `@backstage/version-bridge` (1.0.4 → 1.0.5)

### 1.0.5

#### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.

## `@techdocs/cli` (1.4.7 → 1.5.0)

### 1.5.0

#### Minor Changes

- 10a86bd4ae12: Add optional config and cli option for techdocs to specify default mkdocs plugins.

_Excluded dependency updates for packages: `@backstage/backend-defaults`, `@backstage/backend-openapi-utils`, `@backstage/cli-node`, `@backstage/integration-aws-node`, `@backstage/plugin-app-node`, `@backstage/plugin-azure-sites-backend`, `@backstage/plugin-catalog-backend-module-bitbucket`, `@backstage/plugin-catalog-backend-module-ldap`, `@backstage/plugin-catalog-backend-module-openapi`, `@backstage/plugin-catalog-graphql`, `@backstage/plugin-catalog-node`, `@backstage/plugin-events-backend-module-azure`, `@backstage/plugin-events-backend-module-bitbucket-cloud`, `@backstage/plugin-events-backend-module-gerrit`, `@backstage/plugin-events-backend-module-github`, `@backstage/plugin-events-backend-module-gitlab`, `@backstage/plugin-events-backend-test-utils`, `@backstage/plugin-events-node`, `@backstage/plugin-explore-backend`, `@backstage/plugin-graphql-backend`, `@backstage/plugin-jenkins-backend`, `@backstage/plugin-nomad-backend`, `@backstage/plugin-playlist-backend`, `@backstage/plugin-rollbar-backend`, `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown`, `@backstage/plugin-scaffolder-backend-module-cookiecutter`, `@backstage/plugin-scaffolder-backend-module-gitlab`, `@backstage/plugin-scaffolder-backend-module-rails`, `@backstage/plugin-scaffolder-backend-module-sentry`, `@backstage/plugin-scaffolder-node`, `@backstage/plugin-search-backend-node`, `@backstage/plugin-sonarqube-backend`, `@backstage/plugin-stack-overflow-backend`, `@backstage/plugin-tech-insights-node`._
