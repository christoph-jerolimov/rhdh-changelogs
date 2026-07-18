# Backstage Release 1.29.0 changelog

Changes between 1.28.4 and 1.29.0 — 153 changed and 2 added packages.

## Summary

- [Newly added packages](#newly-added-packages): 2 packages
- [Breaking changes](#breaking-changes): 6 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 1 package
- [0.0.x patch version bumps](#00x-patch-version-bumps): 1 package
- [Other minor version bumps](#other-minor-version-bumps): 6 packages
- [Other patch version bumps](#other-patch-version-bumps): 47 packages
- [Excluded dependency updates](#excluded-dependency-updates): 92 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/plugin-catalog-backend-module-logs` (new, 0.0.1)](#backstageplugin-catalog-backend-module-logs-new-001)
  - [`@backstage/plugin-scaffolder-backend-module-gcp` (new, 0.1.0)](#backstageplugin-scaffolder-backend-module-gcp-new-010)
- [Breaking changes](#breaking-changes)
  - [`@backstage/backend-app-api` (0.7.9 → 0.8.0)](#backstagebackend-app-api-079--080)
  - [`@backstage/backend-defaults` (0.3.3 → 0.4.0)](#backstagebackend-defaults-033--040)
  - [`@backstage/backend-plugin-api` (0.6.21 → 0.7.0)](#backstagebackend-plugin-api-0621--070)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.6.2 → 0.7.0)](#backstageplugin-catalog-backend-module-ldap-062--070)
  - [`@backstage/plugin-permission-common` (0.7.14 → 0.8.0)](#backstageplugin-permission-common-0714--080)
  - [`@backstage/plugin-permission-node` (0.7.32 → 0.8.0)](#backstageplugin-permission-node-0732--080)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/plugin-scaffolder-backend-module-github` (0.3.2 → 0.4.0)](#backstageplugin-scaffolder-backend-module-github-032--040)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-notifications-common` (0.0.4 → 0.0.5)](#backstageplugin-notifications-common-004--005)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/core-app-api` (1.13.0 → 1.14.0)](#backstagecore-app-api-1130--1140)
  - [`@backstage/integration` (1.12.0 → 1.13.0)](#backstageintegration-1120--1130)
  - [`@backstage/plugin-catalog-backend` (1.23.2 → 1.24.0)](#backstageplugin-catalog-backend-1232--1240)
  - [`@backstage/plugin-scaffolder` (1.22.0 → 1.23.0)](#backstageplugin-scaffolder-1220--1230)
  - [`@backstage/plugin-scaffolder-backend` (1.22.11 → 1.23.0)](#backstageplugin-scaffolder-backend-12211--1230)
  - [`@backstage/plugin-scaffolder-react` (1.9.0 → 1.10.0)](#backstageplugin-scaffolder-react-190--1100)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-common` (0.23.2 → 0.23.3)](#backstagebackend-common-0232--0233)
  - [`@backstage/backend-dynamic-feature-service` (0.2.14 → 0.2.15)](#backstagebackend-dynamic-feature-service-0214--0215)
  - [`@backstage/backend-tasks` (0.5.26 → 0.5.27)](#backstagebackend-tasks-0526--0527)
  - [`@backstage/backend-test-utils` (0.4.3 → 0.4.4)](#backstagebackend-test-utils-043--044)
  - [`@backstage/cli` (0.26.10 → 0.26.11)](#backstagecli-02610--02611)
  - [`@backstage/cli-node` (0.2.6 → 0.2.7)](#backstagecli-node-026--027)
  - [`@backstage/core-components` (0.14.8 → 0.14.9)](#backstagecore-components-0148--0149)
  - [`@backstage/create-app` (0.5.16 → 0.5.17)](#backstagecreate-app-0516--0517)
  - [`@backstage/frontend-app-api` (0.7.2 → 0.7.3)](#backstagefrontend-app-api-072--073)
  - [`@backstage/frontend-test-utils` (0.1.9 → 0.1.10)](#backstagefrontend-test-utils-019--0110)
  - [`@backstage/plugin-auth-backend-module-atlassian-provider` (0.2.2 → 0.2.3)](#backstageplugin-auth-backend-module-atlassian-provider-022--023)
  - [`@backstage/plugin-auth-node` (0.4.16 → 0.4.17)](#backstageplugin-auth-node-0416--0417)
  - [`@backstage/plugin-bitbucket-cloud-common` (0.2.20 → 0.2.21)](#backstageplugin-bitbucket-cloud-common-0220--0221)
  - [`@backstage/plugin-catalog` (1.21.0 → 1.21.1)](#backstageplugin-catalog-1210--1211)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.3.16 → 0.3.17)](#backstageplugin-catalog-backend-module-aws-0316--0317)
  - [`@backstage/plugin-catalog-backend-module-github` (0.6.4 → 0.6.5)](#backstageplugin-catalog-backend-module-github-064--065)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.3.20 → 0.3.21)](#backstageplugin-catalog-backend-module-gitlab-0320--0321)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.5.29 → 0.5.30)](#backstageplugin-catalog-backend-module-msgraph-0529--0530)
  - [`@backstage/plugin-catalog-react` (1.12.1 → 1.12.2)](#backstageplugin-catalog-react-1121--1122)
  - [`@backstage/plugin-events-node` (0.3.7 → 0.3.8)](#backstageplugin-events-node-037--038)
  - [`@backstage/plugin-home` (0.7.6 → 0.7.7)](#backstageplugin-home-076--077)
  - [`@backstage/plugin-home-react` (0.1.14 → 0.1.15)](#backstageplugin-home-react-0114--0115)
  - [`@backstage/plugin-kubernetes-react` (0.4.0 → 0.4.1)](#backstageplugin-kubernetes-react-040--041)
  - [`@backstage/plugin-notifications` (0.2.2 → 0.2.3)](#backstageplugin-notifications-022--023)
  - [`@backstage/plugin-notifications-backend` (0.3.2 → 0.3.3)](#backstageplugin-notifications-backend-032--033)
  - [`@backstage/plugin-notifications-backend-module-email` (0.1.2 → 0.1.3)](#backstageplugin-notifications-backend-module-email-012--013)
  - [`@backstage/plugin-notifications-node` (0.2.2 → 0.2.3)](#backstageplugin-notifications-node-022--023)
  - [`@backstage/plugin-org` (0.6.26 → 0.6.27)](#backstageplugin-org-0626--0627)
  - [`@backstage/plugin-permission-backend` (0.5.45 → 0.5.46)](#backstageplugin-permission-backend-0545--0546)
  - [`@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.18 → 0.1.19)](#backstageplugin-permission-backend-module-allow-all-policy-0118--0119)
  - [`@backstage/plugin-permission-react` (0.4.23 → 0.4.24)](#backstageplugin-permission-react-0423--0424)
  - [`@backstage/plugin-scaffolder-backend-module-azure` (0.1.13 → 0.1.14)](#backstageplugin-scaffolder-backend-module-azure-0113--0114)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.1.11 → 0.1.12)](#backstageplugin-scaffolder-backend-module-bitbucket-cloud-0111--0112)
  - [`@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.1.11 → 0.1.12)](#backstageplugin-scaffolder-backend-module-bitbucket-server-0111--0112)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.45 → 0.2.46)](#backstageplugin-scaffolder-backend-module-cookiecutter-0245--0246)
  - [`@backstage/plugin-scaffolder-backend-module-gitlab` (0.4.3 → 0.4.4)](#backstageplugin-scaffolder-backend-module-gitlab-043--044)
  - [`@backstage/plugin-scaffolder-backend-module-rails` (0.4.38 → 0.4.39)](#backstageplugin-scaffolder-backend-module-rails-0438--0439)
  - [`@backstage/plugin-scaffolder-node` (0.4.7 → 0.4.8)](#backstageplugin-scaffolder-node-047--048)
  - [`@backstage/plugin-scaffolder-node-test-utils` (0.1.8 → 0.1.9)](#backstageplugin-scaffolder-node-test-utils-018--019)
  - [`@backstage/plugin-search` (1.4.13 → 1.4.14)](#backstageplugin-search-1413--1414)
  - [`@backstage/plugin-search-backend` (1.5.13 → 1.5.14)](#backstageplugin-search-backend-1513--1514)
  - [`@backstage/plugin-techdocs` (1.10.6 → 1.10.7)](#backstageplugin-techdocs-1106--1107)
  - [`@backstage/plugin-techdocs-backend` (1.10.8 → 1.10.9)](#backstageplugin-techdocs-backend-1108--1109)
  - [`@backstage/plugin-techdocs-node` (1.12.7 → 1.12.8)](#backstageplugin-techdocs-node-1127--1128)
  - [`@backstage/plugin-techdocs-react` (1.2.5 → 1.2.6)](#backstageplugin-techdocs-react-125--126)
  - [`@backstage/test-utils` (1.5.7 → 1.5.8)](#backstagetest-utils-157--158)
  - [`@techdocs/cli` (1.8.15 → 1.8.16)](#techdocscli-1815--1816)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/plugin-catalog-backend-module-logs` (new, [0.0.1](../../changelogs/@backstage/plugin-catalog-backend-module-logs.md#001))

#### 0.0.1

##### Patch Changes

- [`97caf55`](https://github.com/backstage/backstage/commit/97caf55): Creates a new module to make logging catalog errors simple. This module subscribes to catalog events and logs them.

  See [Backstage documentation](https://backstage.io/docs/features/software-catalog/configuration#subscribing-to-catalog-errors) for details on how to install
  and configure the plugin.

### `@backstage/plugin-scaffolder-backend-module-gcp` (new, [0.1.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-gcp.md#010))

#### 0.1.0

##### Minor Changes

- [`0b52438`](https://github.com/backstage/backstage/commit/0b52438): Serialization of the scaffolder workspace into GCP bucket

## Breaking changes

### `@backstage/backend-app-api` (0.7.9 → [0.8.0](../../changelogs/@backstage/backend-app-api.md#080))

#### 0.8.0

##### Minor Changes

- [`1cb84d7`](https://github.com/backstage/backstage/commit/1cb84d7): **BREAKING**: Removed the depreacted `getPath` option from `httpRouterServiceFactory`, as well as the `HttpRouterFactoryOptions` type.
- [`f691c9b`](https://github.com/backstage/backstage/commit/f691c9b): **BREAKING**: Removed the ability to pass callback-form service factories through the `defaultServiceFactories` option of `createSpecializedBackend`. This is an immediate breaking change as usage of this function is expected to be very rare.

##### Patch Changes

- [`2f99178`](https://github.com/backstage/backstage/commit/2f99178): The `ServiceFactoryTest.get` method was deprecated and the `ServiceFactoryTest.getSubject` should be used instead. The `getSubject` method has the same behavior, but has a better method name to indicate that the service instance returned is the subject currently being tested.
- [`b05e1e1`](https://github.com/backstage/backstage/commit/b05e1e1): Service factories exported by this package have been updated to use the new service factory format that doesn't use a callback.
- [`617a7d2`](https://github.com/backstage/backstage/commit/617a7d2): Internal refactor that avoids the use of service factory options.
- [`b60db08`](https://github.com/backstage/backstage/commit/b60db08): Fixing exporting of classes properly from new packages
- [`18b96b1`](https://github.com/backstage/backstage/commit/18b96b1): The ability to install backend features in callback form (`() => BackendFeature`) has been deprecated. This typically means that you need to update the installed features to use the latest version of `@backstage/backend-plugin-api`. If the feature is from a third-party package, please reach out to the package maintainer to update it.
- [`a63c4b6`](https://github.com/backstage/backstage/commit/a63c4b6): Fixing issue with `MiddlewareFactory` deprecation wrapping

### `@backstage/backend-defaults` (0.3.3 → [0.4.0](../../changelogs/@backstage/backend-defaults.md#040))

#### 0.4.0

##### Minor Changes

- [`1cb84d7`](https://github.com/backstage/backstage/commit/1cb84d7): **BREAKING**: Removed the depreacted `getPath` option from `httpRouterServiceFactory`, as well as the `HttpRouterFactoryOptions` type.

##### Patch Changes

- [`53ced70`](https://github.com/backstage/backstage/commit/53ced70): Added a new Root Health Service which adds new endpoints for health checks.
- [`2f99178`](https://github.com/backstage/backstage/commit/2f99178): The `ServiceFactoryTest.get` method was deprecated and the `ServiceFactoryTest.getSubject` should be used instead. The `getSubject` method has the same behavior, but has a better method name to indicate that the service instance returned is the subject currently being tested.
- [`083eaf9`](https://github.com/backstage/backstage/commit/083eaf9): Fix bug where ISO durations could no longer be used for schedules
- [`b05e1e1`](https://github.com/backstage/backstage/commit/b05e1e1): Service factories exported by this package have been updated to use the new service factory format that doesn't use a callback.
- [`419f387`](https://github.com/backstage/backstage/commit/419f387): Refactor of `rootHttpRouterServiceFactory` to allow it to be constructed with options, but without declaring options via `createServiceFactory`.
- [`cb14a05`](https://github.com/backstage/backstage/commit/cb14a05): Repack the package to fix issues with typescript with named exports
- [`b9ed1bb`](https://github.com/backstage/backstage/commit/b9ed1bb): bumped better-sqlite3 from ^9.0.0 to ^11.0.0
- [`e28af58`](https://github.com/backstage/backstage/commit/e28af58): Refactor of `rootConfigServiceFactory` to allow it to be constructed with options, but without declaring options via `createServiceFactory`.

### `@backstage/backend-plugin-api` (0.6.21 → [0.7.0](../../changelogs/@backstage/backend-plugin-api.md#070))

#### 0.7.0

##### Minor Changes

- [`36f91e8`](https://github.com/backstage/backstage/commit/36f91e8): **BREAKING**: The `PermissionsService` no longer supports passing the deprecated `token` option, and the request options are now required.

##### Patch Changes

- [`53ced70`](https://github.com/backstage/backstage/commit/53ced70): Added a new Root Health Service which adds new endpoints for health checks.
- [`083eaf9`](https://github.com/backstage/backstage/commit/083eaf9): Fix bug where ISO durations could no longer be used for schedules
- [`062c01c`](https://github.com/backstage/backstage/commit/062c01c): Deprecated the ability to define options for service factories through `createServiceFactory`. In the future all service factories will return a plain `ServiceFactory` object, rather than allowing users to pass options to the factory. To allow for customization of a service implementation one can instead export one or a few building blocks that allows for simple re-implementation of the service instead.

  For example, instead of:

  ```ts
  export const fooServiceFactory = createServiceFactory<FooService>(
    (options?: { bar: string }) => ({
      service: fooServiceRef,
      deps: { logger: coreServices.logger },
      factory({ logger }) {
        return {
          // Implementation of the foo service using the `bar` option.
        };
      },
    }),
  );
  ```

  We instead encourage service implementations to provide an easy to use API for re-implementing the service for advanced use-cases:

  ```ts
  /** @public */
  export class DefaultFooService implements FooService {
    static create(options: { bar: string; logger: LoggerService }) {
      return new DefaultFooService(options.logger, options.bar ?? 'default');
    }

    private constructor(
      private readonly logger: string,
      private readonly bar: string,
    ) {}

    // The rest of the implementation
  }
  ```

  A user that wishes to customize the service can then easily do so by defining their own factory:

  ```ts
  export const customFooServiceFactory = createServiceFactory<FooService>({
    service: fooServiceRef,
    deps: { logger: coreServices.logger },
    factory({ logger }) {
      return DefaultFooService.create({ logger, bar: 'baz' });
    },
  });
  ```

  This is of course more verbose than the previous solution where the factory could be customized through `fooServiceFactory({ bar: 'baz' })`, but this is a simplified which in practice should be using static configuration instead.

  In cases where the old options patterns significantly improves the usability of the service factory, the old pattern can still be implemented like this:

  ```ts
  const fooServiceFactoryWithOptions = (options?: { bar: string }) =>
    createServiceFactory<FooService>({
      service: fooServiceRef,
      deps: { logger: coreServices.logger },
      factory({ logger }) {
        return {
          // Implementation of the foo service using the `bar` option.
        };
      },
    });

  export const fooServiceFactory = Object.assign(
    fooServiceFactoryWithOptions,
    fooServiceFactoryWithOptions(),
  );
  ```

  This change is being made because the ability to define an options callback encourages bad design of services factories. When possible, a service should be configurable through static configuration, and the existence of options may discourage that. More importantly though, the existing options do not work well with the dependency injection system of services, which is a problem for callbacks an other more advanced options. This lead to a bad pattern where only a few explicit dependencies where made available in callbacks, rather than providing an API that allowed simple re-implementation of the service with full access to dependency injection.

  A separate benefit of this change is that it simplifies the TypeScript types in a way that allows TypeScript to provide a much better error message when a service factory doesn't properly implement the service interface.

- [`fe47a3e`](https://github.com/backstage/backstage/commit/fe47a3e): All service config types were renamed to option types in order to standardize frontend and backend `create*` function signatures:

  - The `ServiceRefConfig` type was renamed to`ServiceRefOptions`;
  - The `RootServiceFactoryConfig` type was renamed to `RootServiceFactoryOptions`;
  - The `PluginServiceFactoryConfig` type was renamed to `PluginServiceFactoryOptions`

### `@backstage/plugin-catalog-backend-module-ldap` (0.6.2 → [0.7.0](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#070))

#### 0.7.0

##### Minor Changes

- [`cb32ca7`](https://github.com/backstage/backstage/commit/cb32ca7): **BREAKING**: `readLdapOrg` and the `LdapProviderConfig` type now always accept arrays of user and group configs, not just single items.

  Added support for single ldap catalog provider to provide list and undefined user and group bindings next to standard single one.

##### Patch Changes

- [`083eaf9`](https://github.com/backstage/backstage/commit/083eaf9): Fix bug where ISO durations could no longer be used for schedules

### `@backstage/plugin-permission-common` (0.7.14 → [0.8.0](../../changelogs/@backstage/plugin-permission-common.md#080))

#### 0.8.0

##### Minor Changes

- [`f4085b8`](https://github.com/backstage/backstage/commit/f4085b8): **BREAKING**: Removed the deprecated and unused `token` option from `EvaluatorRequestOptions`. The `PermissionsClient` now has its own `PermissionClientRequestOptions` type that declares the `token` option instead.

### `@backstage/plugin-permission-node` (0.7.32 → [0.8.0](../../changelogs/@backstage/plugin-permission-node.md#080))

#### 0.8.0

##### Minor Changes

- [`36f91e8`](https://github.com/backstage/backstage/commit/36f91e8): **BREAKING**: Updated the `ServerPermissionClient` to match the new `PermissionsService` interface, where the deprecated `token` option has been removed and the options are now required.

##### Patch Changes

- [`ed10fd2`](https://github.com/backstage/backstage/commit/ed10fd2): The `PermissionPolicy` interface has been updated to align with the recent changes to the Backstage auth system. The second argument to the `handle` method is now of the new `PolicyQueryUser` type. This type maintains the old fields from the `BackstageIdentityResponse`, which are now all deprecated. Instead, two new fields have been added, which allows access to the same information:

  - `credentials` - A `BackstageCredentials` object, which is useful for making requests to other services on behalf of the user as part of evaluating the policy. This replaces the deprecated `token` field. See the [Auth Service documentation](https://backstage.io/docs/backend-system/core-services/auth#creating-request-tokens) for information about how to create a token using these credentials.
  - `info` - A `BackstageUserInfo` object, which contains the same information as the deprecated `identity`, except for the `type` field that was redundant.

  Most existing policies can be updated by replacing the `BackstageIdentityResponse` type with `PolicyQueryUser`, which is exported from `@backstage/plugin-permission-node`, as well as replacing any occurrences of `user?.identity` with `user?.info`.

- [`28b2cfb`](https://github.com/backstage/backstage/commit/28b2cfb): Fix invalid cross-reference in API Reference docs

## 0.x minor version bumps

### `@backstage/plugin-scaffolder-backend-module-github` (0.3.2 → [0.4.0](../../changelogs/@backstage/plugin-scaffolder-backend-module-github.md#040))

#### 0.4.0

##### Minor Changes

- [`70c4b36`](https://github.com/backstage/backstage/commit/70c4b36): Adds support for custom tag policies when creating GitHub environments.

##### Patch Changes

- [`ccfc9d1`](https://github.com/backstage/backstage/commit/ccfc9d1): Fixed bug resulting from missing required owner and repo arguments in `getEnvironmentPublicKey` in action `github:environment:create`.

  Adding environment secrets now works as expected.

- [`141f366`](https://github.com/backstage/backstage/commit/141f366): Added action to enable GitHub Pages on a repo
- [`4410fed`](https://github.com/backstage/backstage/commit/4410fed): Fixed issue with octokit call missing owner and repo when creating environment variables and secrets using github:environment:create action
- [`dfaa28d`](https://github.com/backstage/backstage/commit/dfaa28d): Adds `requireLastPushApproval` input property to configure Branch Protection Settings in `github:publish` action

  Adds `requireLastPushApproval` input property to configure Branch Protection Settings in `github:repo:push` action

## 0.0.x patch version bumps

### `@backstage/plugin-notifications-common` (0.0.4 → [0.0.5](../../changelogs/@backstage/plugin-notifications-common.md#005))

#### 0.0.5

##### Patch Changes

- [`4e4ef2b`](https://github.com/backstage/backstage/commit/4e4ef2b): Move notification processor filter parsing to common package

## Other minor version bumps

### `@backstage/core-app-api` (1.13.0 → [1.14.0](../../changelogs/@backstage/core-app-api.md#1140))

#### 1.14.0

##### Minor Changes

- [`d3c39fc`](https://github.com/backstage/backstage/commit/d3c39fc): Allow for the disabling of external routes through config, which was rendered impossible after the introduction of default targets.

  ```yaml
  app:
    routes:
      bindings:
        # This has the effect of removing the button for registering new
        # catalog entities in the scaffolder template list view
        scaffolder.registerComponent: false
  ```

##### Patch Changes

- [`db2e2d5`](https://github.com/backstage/backstage/commit/db2e2d5): Updated config schema to support app.routes.bindings

### `@backstage/integration` (1.12.0 → [1.13.0](../../changelogs/@backstage/integration.md#1130))

#### 1.13.0

##### Minor Changes

- [`b5deed0`](https://github.com/backstage/backstage/commit/b5deed0): Add support for `token` for `bitbucketCloud` integration

### `@backstage/plugin-catalog-backend` (1.23.2 → [1.24.0](../../changelogs/@backstage/plugin-catalog-backend.md#1240))

#### 1.24.0

##### Minor Changes

- [`b9ed1bb`](https://github.com/backstage/backstage/commit/b9ed1bb): bumped better-sqlite3 from ^9.0.0 to ^11.0.0

### `@backstage/plugin-scaffolder` (1.22.0 → [1.23.0](../../changelogs/@backstage/plugin-scaffolder.md#1230))

#### 1.23.0

##### Minor Changes

- [`52b6db0`](https://github.com/backstage/backstage/commit/52b6db0): Use virtualization with `EntityPicker` as done earlier with `MultiEntityPicker` to fix performance issues with large data sets. `VirtualizedListbox` extracted into reusable component.
- [`3583ce5`](https://github.com/backstage/backstage/commit/3583ce5): Use virtualization with `MultiEntityPicker`. Fixes performance issues with large data sets.
- [`b5deed0`](https://github.com/backstage/backstage/commit/b5deed0): Add support for `bitbucketCloud` autocomplete in `RepoUrlPicker`

##### Patch Changes

- [`4d7e11f`](https://github.com/backstage/backstage/commit/4d7e11f): enable resizing of the task log stream viewer
- [`661b354`](https://github.com/backstage/backstage/commit/661b354): Fixed a bug where the `RepoUrlPicker` would still require the `owner` field for `azure`
- [`cc81579`](https://github.com/backstage/backstage/commit/cc81579): Updated dependency `@rjsf/utils` to `5.18.5`.
  Updated dependency `@rjsf/core` to `5.18.5`.
  Updated dependency `@rjsf/material-ui` to `5.18.5`.
  Updated dependency `@rjsf/validator-ajv8` to `5.18.5`.
- [`89c44b3`](https://github.com/backstage/backstage/commit/89c44b3): Support `catalogFilter` array on `OwnedEntityPicker`

### `@backstage/plugin-scaffolder-backend` (1.22.11 → [1.23.0](../../changelogs/@backstage/plugin-scaffolder-backend.md#1230))

#### 1.23.0

##### Minor Changes

- [`b5deed0`](https://github.com/backstage/backstage/commit/b5deed0): Add support for `autocomplete` extension point to provide additional `autocomplete` handlers
- [`0b52438`](https://github.com/backstage/backstage/commit/0b52438): Serialization of the scaffolder workspace into GCP bucket

##### Patch Changes

- [`b9451dd`](https://github.com/backstage/backstage/commit/b9451dd): Updated `catalog:write` scaffolder action to show correct file path location in log message
- [`ff1bb4c`](https://github.com/backstage/backstage/commit/ff1bb4c): Added a documentation how to use checkpoints
- [`da90cce`](https://github.com/backstage/backstage/commit/da90cce): Updated dependency `esbuild` to `^0.21.0`.
- [`62d1fe3`](https://github.com/backstage/backstage/commit/62d1fe3): Fix user entity not being fetched for scaffolder dry runner

### `@backstage/plugin-scaffolder-react` (1.9.0 → [1.10.0](../../changelogs/@backstage/plugin-scaffolder-react.md#1100))

#### 1.10.0

##### Minor Changes

- [`354e68c`](https://github.com/backstage/backstage/commit/354e68c): Improve validation error display text in scaffolder
- [`b5deed0`](https://github.com/backstage/backstage/commit/b5deed0): Add support for `bitbucketCloud` autocomplete in `RepoUrlPicker`

##### Patch Changes

- [`cc81579`](https://github.com/backstage/backstage/commit/cc81579): Updated dependency `@rjsf/utils` to `5.18.5`.
  Updated dependency `@rjsf/core` to `5.18.5`.
  Updated dependency `@rjsf/material-ui` to `5.18.5`.
  Updated dependency `@rjsf/validator-ajv8` to `5.18.5`.
- [`4d7e11f`](https://github.com/backstage/backstage/commit/4d7e11f): disables rendering of output box if no output is returned

## Other patch version bumps

### `@backstage/backend-common` (0.23.2 → [0.23.3](../../changelogs/@backstage/backend-common.md#0233))

#### 0.23.3

##### Patch Changes

- [`8c09c97`](https://github.com/backstage/backstage/commit/8c09c97): Deprecate legacy status check factory, handler and types.
- [`d228862`](https://github.com/backstage/backstage/commit/d228862): Update default backend plugin created by the cli to use non-deprecated error handling middleware
- [`c964a3d`](https://github.com/backstage/backstage/commit/c964a3d): Add dependencies that are needed by cross-imports from backend-defaults
- [`b60db08`](https://github.com/backstage/backstage/commit/b60db08): Fixing exporting of classes properly from new packages
- [`b9ed1bb`](https://github.com/backstage/backstage/commit/b9ed1bb): bumped better-sqlite3 from ^9.0.0 to ^11.0.0

### `@backstage/backend-dynamic-feature-service` (0.2.14 → [0.2.15](../../changelogs/@backstage/backend-dynamic-feature-service.md#0215))

#### 0.2.15

##### Patch Changes

- [`b05e1e1`](https://github.com/backstage/backstage/commit/b05e1e1): Service factories exported by this package have been updated to use the new service factory format that doesn't use a callback.

### `@backstage/backend-tasks` (0.5.26 → [0.5.27](../../changelogs/@backstage/backend-tasks.md#0527))

#### 0.5.27

##### Patch Changes

- [`083eaf9`](https://github.com/backstage/backstage/commit/083eaf9): Fix bug where ISO durations could no longer be used for schedules

### `@backstage/backend-test-utils` (0.4.3 → [0.4.4](../../changelogs/@backstage/backend-test-utils.md#044))

#### 0.4.4

##### Patch Changes

- [`2f99178`](https://github.com/backstage/backstage/commit/2f99178): The `ServiceFactoryTest.get` method was deprecated and the `ServiceFactoryTest.getSubject` should be used instead. The `getSubject` method has the same behavior, but has a better method name to indicate that the service instance returned is the subject currently being tested.
- [`edf5cc3`](https://github.com/backstage/backstage/commit/edf5cc3): The function `isDockerDisabledForTests` is deprecated and will no longer be exported in the near future as it should only be used internally.
- [`b05e1e1`](https://github.com/backstage/backstage/commit/b05e1e1): Service factories exported by this package have been updated to use the new service factory format that doesn't use a callback.
- [`fce7887`](https://github.com/backstage/backstage/commit/fce7887): Added mock for the Root Health Service in `mockServices`.
- [`906c817`](https://github.com/backstage/backstage/commit/906c817): Updated `startTestBackend` and `ServiceFactoryTester` to only accept plain service factory or backend feature objects, no longer supporting the callback form. This lines up with the changes to `@backstage/backend-plugin-api` and should not require any code changes.
- [`95a3a0b`](https://github.com/backstage/backstage/commit/95a3a0b): Rename frontend and backend `setupRequestMockHandlers` methods to `registerMswTestHooks`.
- [`b9ed1bb`](https://github.com/backstage/backstage/commit/b9ed1bb): bumped better-sqlite3 from ^9.0.0 to ^11.0.0
- [`98ccf00`](https://github.com/backstage/backstage/commit/98ccf00): Internal refactor of `mockServices.httpAuth.factory` to allow it to still be constructed with options, but without declaring options via `createServiceFactory`.

### `@backstage/cli` (0.26.10 → [0.26.11](../../changelogs/@backstage/cli.md#02611))

#### 0.26.11

##### Patch Changes

- [`133464c`](https://github.com/backstage/backstage/commit/133464c): Added experimental support for dynamic frontend plugin builds, enabled via setting `EXPERIMENTAL_MODULE_FEDERATION` for the app build, and using the `frontend-dynamic-container` package role to create a container. Both of these are experimental and will change in the future.
- [`e2e320c`](https://github.com/backstage/backstage/commit/e2e320c): - remove unused dependencies `winston` and `yn` from the template of backend plugins;
  - update `msw` to version `2.3.1` in the template of backend plugins;
    starting with v1 and switching later to v2 is tedious and not straight forward; it's easier to start with v2;
- [`0540c5a`](https://github.com/backstage/backstage/commit/0540c5a): Updated the scaffolding output message for `plugin-common` in `backstage-cli`. Now, when executing `backstage-cli new` to create a new `plugin-common` package, the output message accurately reflects the action by displaying `Creating common plugin package...` instead of the previous, less accurate `Creating backend plugin...`.
- [`7652db4`](https://github.com/backstage/backstage/commit/7652db4): Only bootstrap global-agent if it's actually being used
- [`f0c0039`](https://github.com/backstage/backstage/commit/f0c0039): Fix issue with CLI that was preventing upgrading from 1.28
- [`d228862`](https://github.com/backstage/backstage/commit/d228862): Update default backend plugin created by the cli to use non-deprecated error handling middleware
- [`da90cce`](https://github.com/backstage/backstage/commit/da90cce): Updated dependency `esbuild` to `^0.21.0`.
- [`a60d73b`](https://github.com/backstage/backstage/commit/a60d73b): Fix a few minor issues with the backend template that were causing failing linting checks in the main repo.
- [`0510d98`](https://github.com/backstage/backstage/commit/0510d98): Subpath export `package.json` should be of a unique name to avoid typescript resolution issues
- [`4baac0c`](https://github.com/backstage/backstage/commit/4baac0c): The `backendPlugin` and `backendModule` factory now includes a step for automatically adding the new backend plugin/module to the `index.ts` file of the backend.

### `@backstage/cli-node` (0.2.6 → [0.2.7](../../changelogs/@backstage/cli-node.md#027))

#### 0.2.7

##### Patch Changes

- [`133464c`](https://github.com/backstage/backstage/commit/133464c): Added internal metadata for the new experimental `frontend-dynamic-container` role.

### `@backstage/core-components` (0.14.8 → [0.14.9](../../changelogs/@backstage/core-components.md#0149))

#### 0.14.9

##### Patch Changes

- [`d4ffdbb`](https://github.com/backstage/backstage/commit/d4ffdbb): Fixed bug where `<Select>` component with empty string as placeholder gave an error
- [`99d672d`](https://github.com/backstage/backstage/commit/99d672d): Modified the `Select` component to take in a `data-testid` parameter ensuring backwards compatibility with default value corresponding to previously hardcoded `data-testid` of "select".

### `@backstage/create-app` (0.5.16 → [0.5.17](../../changelogs/@backstage/create-app.md#0517))

#### 0.5.17

##### Patch Changes

- [`780d994`](https://github.com/backstage/backstage/commit/780d994): Added `MyGroupsSidebarItem` to the sidebar in the `create-app` template
- [`f03d12a`](https://github.com/backstage/backstage/commit/f03d12a): Bumped create-app version.
- [`e90a2cd`](https://github.com/backstage/backstage/commit/e90a2cd): Added the Catalog logs module to the `create-app` template
- [`3ac2a6a`](https://github.com/backstage/backstage/commit/3ac2a6a): Added the Postgres Search Engine to the `create-app` template

### `@backstage/frontend-app-api` (0.7.2 → [0.7.3](../../changelogs/@backstage/frontend-app-api.md#073))

#### 0.7.3

##### Patch Changes

- [`d3c39fc`](https://github.com/backstage/backstage/commit/d3c39fc): Allow for the disabling of external routes through config, which was rendered impossible after the introduction of default targets.

  ```yaml
  app:
    routes:
      bindings:
        # This has the effect of removing the button for registering new
        # catalog entities in the scaffolder template list view
        scaffolder.registerComponent: false
  ```

### `@backstage/frontend-test-utils` (0.1.9 → [0.1.10](../../changelogs/@backstage/frontend-test-utils.md#0110))

#### 0.1.10

##### Patch Changes

- [`95a3a0b`](https://github.com/backstage/backstage/commit/95a3a0b): Rename frontend and backend `setupRequestMockHandlers` methods to `registerMswTestHooks`.

### `@backstage/plugin-auth-backend-module-atlassian-provider` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-auth-backend-module-atlassian-provider.md#023))

#### 0.2.3

##### Patch Changes

- [`b9832ae`](https://github.com/backstage/backstage/commit/b9832ae): Fix several issues with the Atlassian auth provider (type definition, profile url, profile transformation, scopes)

### `@backstage/plugin-auth-node` (0.4.16 → [0.4.17](../../changelogs/@backstage/plugin-auth-node.md#0417))

#### 0.4.17

##### Patch Changes

- [`55c1a72`](https://github.com/backstage/backstage/commit/55c1a72): Fix issues with Atlassian OAuth provider: retrieve the email and photo that were not in arrays but rather in single props.

### `@backstage/plugin-bitbucket-cloud-common` (0.2.20 → [0.2.21](../../changelogs/@backstage/plugin-bitbucket-cloud-common.md#0221))

#### 0.2.21

##### Patch Changes

- [`b5deed0`](https://github.com/backstage/backstage/commit/b5deed0): Add support for `autocomplete` handler to provide autocomplete options for `RepoUrlPicker`

### `@backstage/plugin-catalog` (1.21.0 → [1.21.1](../../changelogs/@backstage/plugin-catalog.md#1211))

#### 1.21.1

##### Patch Changes

- [`06c0956`](https://github.com/backstage/backstage/commit/06c0956): Support i18n for catalog and catalog-react plugins
- [`d133eaa`](https://github.com/backstage/backstage/commit/d133eaa): Added small notes to AboutCard to discourage customizability PRs

### `@backstage/plugin-catalog-backend-module-aws` (0.3.16 → [0.3.17](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#0317))

#### 0.3.17

##### Patch Changes

- [`4afa050`](https://github.com/backstage/backstage/commit/4afa050): Export `defaultEksClusterEntityTransformer` to allow library consumers to layer additional changes on top of the default transformer.

### `@backstage/plugin-catalog-backend-module-github` (0.6.4 → [0.6.5](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#065))

#### 0.6.5

##### Patch Changes

- [`9112efc`](https://github.com/backstage/backstage/commit/9112efc): Adds support for `repository` events.

  The provider adds a subscription to the topic `github.repository`.

  Hereby, it supports events of type `repository` with actions

  - `archived`
  - `deleted`
  - `edited`
  - `renamed`
  - `transferred`
  - `unarchived`

  Actions skipped as they don't require entity changes:

  - `created`
  - `privatized`
  - `publicized`

  If the config option `validateLocationsExist` is enabled, an API request
  is necessary and will be executed.
  This affects the actions `renamed`, `transferred`, and `unarchive`
  of event type `repository`.

  Catalog entities related to the `GithubEntityProvider` instance will be adjusted
  according to action and its meaning for them.

### `@backstage/plugin-catalog-backend-module-gitlab` (0.3.20 → [0.3.21](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#0321))

#### 0.3.21

##### Patch Changes

- [`8db30ad`](https://github.com/backstage/backstage/commit/8db30ad): The Gitlab configuration supports an additional optional boolean key `catalog.providers.gitlab.<your-org>.restrictUsersToGroup`. Setting this to `true` will make Backstage only import users from the group defined in the `group` key, instead of all users in the organisation (self-hosted) or of the root group (SaaS). It will default to false, keeping the original implementation intact, when not explicitly set.

### `@backstage/plugin-catalog-backend-module-msgraph` (0.5.29 → [0.5.30](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#0530))

#### 0.5.30

##### Patch Changes

- [`f7bdcea`](https://github.com/backstage/backstage/commit/f7bdcea): Adds a dynamic provider for the plugin-catalog-backend-module-msgraph. Configuration is now runtime configurable through the ProviderConfigTransformer.

### `@backstage/plugin-catalog-react` (1.12.1 → [1.12.2](../../changelogs/@backstage/plugin-catalog-react.md#1122))

#### 1.12.2

##### Patch Changes

- [`06c0956`](https://github.com/backstage/backstage/commit/06c0956): Support i18n for catalog and catalog-react plugins
- [`2030962`](https://github.com/backstage/backstage/commit/2030962): Make EntityOwnerPicker display metadata.title or spec.profile.displayName for mode=only-owners instead of metadata.name

### `@backstage/plugin-events-node` (0.3.7 → [0.3.8](../../changelogs/@backstage/plugin-events-node.md#038))

#### 0.3.8

##### Patch Changes

- [`b05e1e1`](https://github.com/backstage/backstage/commit/b05e1e1): Service factories exported by this package have been updated to use the new service factory format that doesn't use a callback.

### `@backstage/plugin-home` (0.7.6 → [0.7.7](../../changelogs/@backstage/plugin-home.md#077))

#### 0.7.7

##### Patch Changes

- [`cc81579`](https://github.com/backstage/backstage/commit/cc81579): Updated dependency `@rjsf/utils` to `5.18.5`.
  Updated dependency `@rjsf/core` to `5.18.5`.
  Updated dependency `@rjsf/material-ui` to `5.18.5`.
  Updated dependency `@rjsf/validator-ajv8` to `5.18.5`.

### `@backstage/plugin-home-react` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-home-react.md#0115))

#### 0.1.15

##### Patch Changes

- [`cc81579`](https://github.com/backstage/backstage/commit/cc81579): Updated dependency `@rjsf/utils` to `5.18.5`.
  Updated dependency `@rjsf/core` to `5.18.5`.
  Updated dependency `@rjsf/material-ui` to `5.18.5`.
  Updated dependency `@rjsf/validator-ajv8` to `5.18.5`.

### `@backstage/plugin-kubernetes-react` (0.4.0 → [0.4.1](../../changelogs/@backstage/plugin-kubernetes-react.md#041))

#### 0.4.1

##### Patch Changes

- [`e3cb6ab`](https://github.com/backstage/backstage/commit/e3cb6ab): Add a namespace label to RolloutDrawer
- [`2414d86`](https://github.com/backstage/backstage/commit/2414d86): Fix the `HTML` markup of the `FixDialog` component, `ul` and `li` are not allowed inside a `p` tag.

### `@backstage/plugin-notifications` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-notifications.md#023))

#### 0.2.3

##### Patch Changes

- [`3bf0697`](https://github.com/backstage/backstage/commit/3bf0697): The toolbar on the Notifications page is hidden when there are no listed notifications.

### `@backstage/plugin-notifications-backend` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-notifications-backend.md#033))

#### 0.3.3

##### Patch Changes

- [`d7b8ca5`](https://github.com/backstage/backstage/commit/d7b8ca5): Added an option to filter notifications by topic

### `@backstage/plugin-notifications-backend-module-email` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-notifications-backend-module-email.md#013))

#### 0.1.3

##### Patch Changes

- [`4e4ef2b`](https://github.com/backstage/backstage/commit/4e4ef2b): Move notification processor filter parsing to common package

### `@backstage/plugin-notifications-node` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-notifications-node.md#023))

#### 0.2.3

##### Patch Changes

- [`4e4ef2b`](https://github.com/backstage/backstage/commit/4e4ef2b): Move notification processor filter parsing to common package

### `@backstage/plugin-org` (0.6.26 → [0.6.27](../../changelogs/@backstage/plugin-org.md#0627))

#### 0.6.27

##### Patch Changes

- [`5132d28`](https://github.com/backstage/backstage/commit/5132d28): The `useGetEntities` hook could result in requests to `/api/catalog/entities` where the headers exceed the default maximum Node.js header size of 16KB. The hook logic has been adjusted to batch the requests.
- [`c307ef4`](https://github.com/backstage/backstage/commit/c307ef4): Added `relationType` property to EntityMembersListCard component that allows for display users related to a group via some other relationship aside from `memberOf`.

  Also, as a side effect, the `relationsType` property has been deprecated in favor of a more accurately named `relationAggregation` property.

### `@backstage/plugin-permission-backend` (0.5.45 → [0.5.46](../../changelogs/@backstage/plugin-permission-backend.md#0546))

#### 0.5.46

##### Patch Changes

- [`ed10fd2`](https://github.com/backstage/backstage/commit/ed10fd2): The `PermissionPolicy` interface has been updated to align with the recent changes to the Backstage auth system. The second argument to the `handle` method is now of the new `PolicyQueryUser` type. This type maintains the old fields from the `BackstageIdentityResponse`, which are now all deprecated. Instead, two new fields have been added, which allows access to the same information:

  - `credentials` - A `BackstageCredentials` object, which is useful for making requests to other services on behalf of the user as part of evaluating the policy. This replaces the deprecated `token` field. See the [Auth Service documentation](https://backstage.io/docs/backend-system/core-services/auth#creating-request-tokens) for information about how to create a token using these credentials.
  - `info` - A `BackstageUserInfo` object, which contains the same information as the deprecated `identity`, except for the `type` field that was redundant.

  Most existing policies can be updated by replacing the `BackstageIdentityResponse` type with `PolicyQueryUser`, which is exported from `@backstage/plugin-permission-node`, as well as replacing any occurrences of `user?.identity` with `user?.info`.

### `@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-permission-backend-module-allow-all-policy.md#0119))

#### 0.1.19

##### Patch Changes

- [`ed10fd2`](https://github.com/backstage/backstage/commit/ed10fd2): Internal refactor to use new `PolicyQueryUser` type.

### `@backstage/plugin-permission-react` (0.4.23 → [0.4.24](../../changelogs/@backstage/plugin-permission-react.md#0424))

#### 0.4.24

##### Patch Changes

- [`28b2cfb`](https://github.com/backstage/backstage/commit/28b2cfb): Improve API Reference documentation

### `@backstage/plugin-scaffolder-backend-module-azure` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-scaffolder-backend-module-azure.md#0114))

#### 0.1.14

##### Patch Changes

- [`661b354`](https://github.com/backstage/backstage/commit/661b354): Fixed a bug where the `RepoUrlPicker` would still require the `owner` field for `azure`

### `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-cloud.md#0112))

#### 0.1.12

##### Patch Changes

- [`b5deed0`](https://github.com/backstage/backstage/commit/b5deed0): Add support for `autocomplete` handler to provide autocomplete options for `RepoUrlPicker`

### `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket-server.md#0112))

#### 0.1.12

##### Patch Changes

- [`6a4ad4e`](https://github.com/backstage/backstage/commit/6a4ad4e): Instead of using hardcoded `targetBranch` now fetch the default branch from Bitbucket repository.
  This prevents from errors when no `targetBranch` is provided and the default repository branch is different from `master`, for example: `main`.

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.45 → [0.2.46](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#0246))

#### 0.2.46

##### Patch Changes

- [`0ac124b`](https://github.com/backstage/backstage/commit/0ac124b): Updated configuration instructions

### `@backstage/plugin-scaffolder-backend-module-gitlab` (0.4.3 → [0.4.4](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitlab.md#044))

#### 0.4.4

##### Patch Changes

- [`0ac124b`](https://github.com/backstage/backstage/commit/0ac124b): Updated configuration instructions
- [`2fb0eb8`](https://github.com/backstage/backstage/commit/2fb0eb8): Added support for passing `variables` to `gitlab:pipeline:trigger`

### `@backstage/plugin-scaffolder-backend-module-rails` (0.4.38 → [0.4.39](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#0439))

#### 0.4.39

##### Patch Changes

- [`0ac124b`](https://github.com/backstage/backstage/commit/0ac124b): Updated configuration instructions

### `@backstage/plugin-scaffolder-node` (0.4.7 → [0.4.8](../../changelogs/@backstage/plugin-scaffolder-node.md#048))

#### 0.4.8

##### Patch Changes

- [`661b354`](https://github.com/backstage/backstage/commit/661b354): Fixed a bug where the `RepoUrlPicker` would still require the `owner` field for `azure`
- [`b5deed0`](https://github.com/backstage/backstage/commit/b5deed0): Add support for `autocomplete` extension point to provide additional `autocomplete` handlers
- [`0b52438`](https://github.com/backstage/backstage/commit/0b52438): Serialization of the scaffolder workspace into GCP bucket

### `@backstage/plugin-scaffolder-node-test-utils` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-scaffolder-node-test-utils.md#019))

#### 0.1.9

##### Patch Changes

- [`54429b5`](https://github.com/backstage/backstage/commit/54429b5): Filename and imports correction for mockActionContext.ts

### `@backstage/plugin-search` (1.4.13 → [1.4.14](../../changelogs/@backstage/plugin-search.md#1414))

#### 1.4.14

##### Patch Changes

- [`1117aba`](https://github.com/backstage/backstage/commit/1117aba): Update deps in search api extension to include fetch api

### `@backstage/plugin-search-backend` (1.5.13 → [1.5.14](../../changelogs/@backstage/plugin-search-backend.md#1514))

#### 1.5.14

##### Patch Changes

- [`343f656`](https://github.com/backstage/backstage/commit/343f656): The `AuthorizedSearchEngine` will now ignore the deprecated `token` option, and treat it as an unauthorized request. This will not have any effect in practice, since credentials are always provided by the router.

### `@backstage/plugin-techdocs` (1.10.6 → [1.10.7](../../changelogs/@backstage/plugin-techdocs.md#1107))

#### 1.10.7

##### Patch Changes

- [`8fc2622`](https://github.com/backstage/backstage/commit/8fc2622): Fixed an issue that was causing techdocs pages unnecessarily re-render on navigate.
- [`6fa652c`](https://github.com/backstage/backstage/commit/6fa652c): Improve default sorting of docs table
- [`605b691`](https://github.com/backstage/backstage/commit/605b691): Allow for searching TechDocs by entity title
- [`60caa92`](https://github.com/backstage/backstage/commit/60caa92): Fix double scrollbar bug in reader

### `@backstage/plugin-techdocs-backend` (1.10.8 → [1.10.9](../../changelogs/@backstage/plugin-techdocs-backend.md#1109))

#### 1.10.9

##### Patch Changes

- [`9ecf5fd`](https://github.com/backstage/backstage/commit/9ecf5fd): Adds extension point for publishers to the techdocs backend

### `@backstage/plugin-techdocs-node` (1.12.7 → [1.12.8](../../changelogs/@backstage/plugin-techdocs-node.md#1128))

#### 1.12.8

##### Patch Changes

- [`9ecf5fd`](https://github.com/backstage/backstage/commit/9ecf5fd): Adds extension point for publishers to the techdocs backend
- [`4c4d077`](https://github.com/backstage/backstage/commit/4c4d077): Bumps default version of techdocs docker image to latest

### `@backstage/plugin-techdocs-react` (1.2.5 → [1.2.6](../../changelogs/@backstage/plugin-techdocs-react.md#126))

#### 1.2.6

##### Patch Changes

- [`8ac9ce5`](https://github.com/backstage/backstage/commit/8ac9ce5): Resolved the issue where changes in TechDoc add-ons, including the TextSize add-on, were not reapplying during navigation

### `@backstage/test-utils` (1.5.7 → [1.5.8](../../changelogs/@backstage/test-utils.md#158))

#### 1.5.8

##### Patch Changes

- [`95a3a0b`](https://github.com/backstage/backstage/commit/95a3a0b): Rename frontend and backend `setupRequestMockHandlers` methods to `registerMswTestHooks`.

### `@techdocs/cli` (1.8.15 → [1.8.16](../../changelogs/@techdocs/cli.md#1816))

#### 1.8.16

##### Patch Changes

- [`c964a3d`](https://github.com/backstage/backstage/commit/c964a3d): Import discovery from backend-defaults instead of backend-common

## Excluded dependency updates

- `@backstage/app-defaults` (1.5.7 → [1.5.8](../../changelogs/@backstage/app-defaults.md#158))
- `@backstage/backend-openapi-utils` (0.1.14 → [0.1.15](../../changelogs/@backstage/backend-openapi-utils.md#0115))
- `@backstage/core-compat-api` (0.2.6 → [0.2.7](../../changelogs/@backstage/core-compat-api.md#027))
- `@backstage/dev-utils` (1.0.34 → [1.0.35](../../changelogs/@backstage/dev-utils.md#1035))
- `@backstage/frontend-plugin-api` (0.6.6 → [0.6.7](../../changelogs/@backstage/frontend-plugin-api.md#067))
- `@backstage/integration-react` (1.1.28 → [1.1.29](../../changelogs/@backstage/integration-react.md#1129))
- `@backstage/plugin-api-docs` (0.11.6 → [0.11.7](../../changelogs/@backstage/plugin-api-docs.md#0117))
- `@backstage/plugin-app-backend` (0.3.70 → [0.3.71](../../changelogs/@backstage/plugin-app-backend.md#0371))
- `@backstage/plugin-app-node` (0.1.21 → [0.1.22](../../changelogs/@backstage/plugin-app-node.md#0122))
- `@backstage/plugin-app-visualizer` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-app-visualizer.md#018))
- `@backstage/plugin-auth-backend` (0.22.8 → [0.22.9](../../changelogs/@backstage/plugin-auth-backend.md#0229))
- `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#0114))
- `@backstage/plugin-auth-backend-module-azure-easyauth-provider` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-auth-backend-module-azure-easyauth-provider.md#015))
- `@backstage/plugin-auth-backend-module-bitbucket-provider` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-auth-backend-module-bitbucket-provider.md#015))
- `@backstage/plugin-auth-backend-module-cloudflare-access-provider` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-auth-backend-module-cloudflare-access-provider.md#015))
- `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.2.16 → [0.2.17](../../changelogs/@backstage/plugin-auth-backend-module-gcp-iap-provider.md#0217))
- `@backstage/plugin-auth-backend-module-github-provider` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-auth-backend-module-github-provider.md#0119))
- `@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-auth-backend-module-gitlab-provider.md#0119))
- `@backstage/plugin-auth-backend-module-google-provider` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-auth-backend-module-google-provider.md#0119))
- `@backstage/plugin-auth-backend-module-guest-provider` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-auth-backend-module-guest-provider.md#018))
- `@backstage/plugin-auth-backend-module-microsoft-provider` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-auth-backend-module-microsoft-provider.md#0117))
- `@backstage/plugin-auth-backend-module-oauth2-provider` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-provider.md#023))
- `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-auth-backend-module-oauth2-proxy-provider.md#0115))
- `@backstage/plugin-auth-backend-module-oidc-provider` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#023))
- `@backstage/plugin-auth-backend-module-okta-provider` (0.0.14 → [0.0.15](../../changelogs/@backstage/plugin-auth-backend-module-okta-provider.md#0015))
- `@backstage/plugin-auth-backend-module-onelogin-provider` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-auth-backend-module-onelogin-provider.md#013))
- `@backstage/plugin-auth-backend-module-pinniped-provider` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-auth-backend-module-pinniped-provider.md#0116))
- `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.2.2 → [0.2.3](../../changelogs/@backstage/plugin-auth-backend-module-vmware-cloud-provider.md#023))
- `@backstage/plugin-auth-react` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-auth-react.md#014))
- `@backstage/plugin-catalog-backend-module-azure` (0.1.41 → [0.1.42](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0142))
- `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#025))
- `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#029))
- `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.35 → [0.1.36](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#0136))
- `@backstage/plugin-catalog-backend-module-gcp` (0.1.22 → [0.1.23](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#0123))
- `@backstage/plugin-catalog-backend-module-gerrit` (0.1.38 → [0.1.39](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0139))
- `@backstage/plugin-catalog-backend-module-github-org` (0.1.16 → [0.1.17](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#0117))
- `@backstage/plugin-catalog-backend-module-gitlab-org` (0.0.4 → [0.0.5](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab-org.md#005))
- `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.26 → [0.4.27](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#0427))
- `@backstage/plugin-catalog-backend-module-openapi` (0.1.39 → [0.1.40](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0140))
- `@backstage/plugin-catalog-backend-module-puppetdb` (0.1.27 → [0.1.28](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0128))
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.19 → [0.1.20](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#0120))
- `@backstage/plugin-catalog-backend-module-unprocessed` (0.4.8 → [0.4.9](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#049))
- `@backstage/plugin-catalog-common` (1.0.24 → [1.0.25](../../changelogs/@backstage/plugin-catalog-common.md#1025))
- `@backstage/plugin-catalog-graph` (0.4.6 → [0.4.7](../../changelogs/@backstage/plugin-catalog-graph.md#047))
- `@backstage/plugin-catalog-import` (0.12.0 → [0.12.1](../../changelogs/@backstage/plugin-catalog-import.md#0121))
- `@backstage/plugin-catalog-node` (1.12.3 → [1.12.4](../../changelogs/@backstage/plugin-catalog-node.md#1124))
- `@backstage/plugin-catalog-unprocessed-entities` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-catalog-unprocessed-entities.md#026))
- `@backstage/plugin-catalog-unprocessed-entities-common` (0.0.2 → [0.0.3](../../changelogs/@backstage/plugin-catalog-unprocessed-entities-common.md#003))
- `@backstage/plugin-config-schema` (0.1.56 → [0.1.57](../../changelogs/@backstage/plugin-config-schema.md#0157))
- `@backstage/plugin-devtools` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-devtools.md#0116))
- `@backstage/plugin-devtools-backend` (0.3.7 → [0.3.8](../../changelogs/@backstage/plugin-devtools-backend.md#038))
- `@backstage/plugin-devtools-common` (0.1.10 → [0.1.11](../../changelogs/@backstage/plugin-devtools-common.md#0111))
- `@backstage/plugin-events-backend` (0.3.8 → [0.3.9](../../changelogs/@backstage/plugin-events-backend.md#039))
- `@backstage/plugin-events-backend-module-aws-sqs` (0.3.7 → [0.3.8](../../changelogs/@backstage/plugin-events-backend-module-aws-sqs.md#038))
- `@backstage/plugin-events-backend-module-azure` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-events-backend-module-azure.md#028))
- `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-events-backend-module-bitbucket-cloud.md#028))
- `@backstage/plugin-events-backend-module-gerrit` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-events-backend-module-gerrit.md#028))
- `@backstage/plugin-events-backend-module-github` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-events-backend-module-github.md#028))
- `@backstage/plugin-events-backend-module-gitlab` (0.2.7 → [0.2.8](../../changelogs/@backstage/plugin-events-backend-module-gitlab.md#028))
- `@backstage/plugin-events-backend-test-utils` (0.1.31 → [0.1.32](../../changelogs/@backstage/plugin-events-backend-test-utils.md#0132))
- `@backstage/plugin-kubernetes` (0.11.11 → [0.11.12](../../changelogs/@backstage/plugin-kubernetes.md#01112))
- `@backstage/plugin-kubernetes-backend` (0.18.2 → [0.18.3](../../changelogs/@backstage/plugin-kubernetes-backend.md#0183))
- `@backstage/plugin-kubernetes-cluster` (0.0.12 → [0.0.13](../../changelogs/@backstage/plugin-kubernetes-cluster.md#0013))
- `@backstage/plugin-kubernetes-common` (0.8.0 → [0.8.1](../../changelogs/@backstage/plugin-kubernetes-common.md#081))
- `@backstage/plugin-kubernetes-node` (0.1.15 → [0.1.16](../../changelogs/@backstage/plugin-kubernetes-node.md#0116))
- `@backstage/plugin-org-react` (0.1.25 → [0.1.26](../../changelogs/@backstage/plugin-org-react.md#0126))
- `@backstage/plugin-proxy-backend` (0.5.2 → [0.5.3](../../changelogs/@backstage/plugin-proxy-backend.md#053))
- `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.2.11 → [0.2.12](../../changelogs/@backstage/plugin-scaffolder-backend-module-bitbucket.md#0212))
- `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.22 → [0.2.23](../../changelogs/@backstage/plugin-scaffolder-backend-module-confluence-to-markdown.md#0223))
- `@backstage/plugin-scaffolder-backend-module-gerrit` (0.1.13 → [0.1.14](../../changelogs/@backstage/plugin-scaffolder-backend-module-gerrit.md#0114))
- `@backstage/plugin-scaffolder-backend-module-gitea` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-scaffolder-backend-module-gitea.md#0112))
- `@backstage/plugin-scaffolder-backend-module-notifications` (0.0.4 → [0.0.5](../../changelogs/@backstage/plugin-scaffolder-backend-module-notifications.md#005))
- `@backstage/plugin-scaffolder-backend-module-sentry` (0.1.29 → [0.1.30](../../changelogs/@backstage/plugin-scaffolder-backend-module-sentry.md#0130))
- `@backstage/plugin-scaffolder-backend-module-yeoman` (0.3.5 → [0.3.6](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#036))
- `@backstage/plugin-scaffolder-common` (1.5.3 → [1.5.4](../../changelogs/@backstage/plugin-scaffolder-common.md#154))
- `@backstage/plugin-search-backend-module-catalog` (0.1.27 → [0.1.28](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#0128))
- `@backstage/plugin-search-backend-module-elasticsearch` (1.5.2 → [1.5.3](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#153))
- `@backstage/plugin-search-backend-module-explore` (0.1.27 → [0.1.28](../../changelogs/@backstage/plugin-search-backend-module-explore.md#0128))
- `@backstage/plugin-search-backend-module-pg` (0.5.31 → [0.5.32](../../changelogs/@backstage/plugin-search-backend-module-pg.md#0532))
- `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-search-backend-module-stack-overflow-collator.md#0115))
- `@backstage/plugin-search-backend-module-techdocs` (0.1.26 → [0.1.27](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#0127))
- `@backstage/plugin-search-backend-node` (1.2.26 → [1.2.27](../../changelogs/@backstage/plugin-search-backend-node.md#1227))
- `@backstage/plugin-search-common` (1.2.12 → [1.2.13](../../changelogs/@backstage/plugin-search-common.md#1213))
- `@backstage/plugin-search-react` (1.7.12 → [1.7.13](../../changelogs/@backstage/plugin-search-react.md#1713))
- `@backstage/plugin-signals` (0.0.7 → [0.0.8](../../changelogs/@backstage/plugin-signals.md#008))
- `@backstage/plugin-signals-backend` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-signals-backend.md#018))
- `@backstage/plugin-signals-node` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-signals-node.md#018))
- `@backstage/plugin-techdocs-addons-test-utils` (1.0.34 → [1.0.35](../../changelogs/@backstage/plugin-techdocs-addons-test-utils.md#1035))
- `@backstage/plugin-techdocs-module-addons-contrib` (1.1.11 → [1.1.12](../../changelogs/@backstage/plugin-techdocs-module-addons-contrib.md#1112))
- `@backstage/plugin-user-settings` (0.8.8 → [0.8.9](../../changelogs/@backstage/plugin-user-settings.md#089))
- `@backstage/plugin-user-settings-backend` (0.2.20 → [0.2.21](../../changelogs/@backstage/plugin-user-settings-backend.md#0221))
- `@backstage/repo-tools` (0.9.3 → [0.9.4](../../changelogs/@backstage/repo-tools.md#094))
