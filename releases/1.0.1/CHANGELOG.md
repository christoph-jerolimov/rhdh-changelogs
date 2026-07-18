# Backstage Release 1.0.1 changelog

Changes between 1.0.0 and 1.0.1 — 1 changed and 0 added packages.

## Summary

- [Patch version bumps](#patch-version-bumps): 1 package

## Table of contents

- [Patch version bumps](#patch-version-bumps)
  - [`@backstage/plugin-auth-backend` (0.12.2 → 0.12.3)](#backstageplugin-auth-backend-0122--0123)

## Patch version bumps

### `@backstage/plugin-auth-backend` (0.12.2 → 0.12.3)

#### 0.12.3

##### Patch Changes

- Fix migrations to do the right thing on sqlite databases, and reapply the column type fix for those who are _not_ on sqlite databases.

  Reconstruction of #10317 in the form of a patch release instead.
