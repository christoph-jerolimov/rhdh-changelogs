# Backstage Release 1.49.5 changelog

Changes between 1.49.4 and 1.49.5 — 3 changed and 0 added packages.

## Summary

- [Patch version bumps](#patch-version-bumps): 3 packages

## Table of contents

- [Patch version bumps](#patch-version-bumps)
  - [`@backstage/plugin-app` (0.4.2 → 0.4.3)](#backstageplugin-app-042--043)
  - [`@backstage/plugin-app-visualizer` (0.2.1 → 0.2.2)](#backstageplugin-app-visualizer-021--022)
  - [`@backstage/ui` (0.13.2 → 0.13.3)](#backstageui-0132--0133)

## Patch version bumps

### `@backstage/plugin-app` (0.4.2 → 0.4.3)

#### 0.4.3

##### Patch Changes

- effa7bf: Migrated `AppLanguageApi` extension to use the new `configSchema` option.
- e5baa20: Added support for configuring URL redirects on the `app/routes` extension. Redirects can be configured through `app-config` as an array of `{from, to}` path pairs, which will cause navigation to the `from` path to be redirected to the `to` path.

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

- 9244b70: The default auth implementation now checks for a `logoutUrl` in the logout response body. If the auth provider returns one (e.g. Auth0 federated logout), the browser is redirected to that URL to clear the provider's session cookies. This is backward compatible — providers that return an empty response are unaffected.
- e4804ab: Updated the default `DialogApi` implementation to support the new `open` method. The dialog display layer no longer renders any dialog chrome — callers provide their own dialog component. The deprecated `show` and `showModal` methods now use `open` internally with a Material UI dialog wrapper for backward compatibility.
- d66a3ec: Updated the `PageLayout` swap to pass a clickable `titleLink` on the `PluginHeader`, resolved from the plugin's root route ref.

### `@backstage/plugin-app-visualizer` (0.2.1 → 0.2.2)

#### 0.2.2

##### Patch Changes

- e220589: Updated `PluginHeaderActionBlueprint` usage to pass params as a plain object.

### `@backstage/ui` (0.13.2 → 0.13.3)

_No changelog entries found._
