# Backstage Release 1.24.1 changelog

Changes between 1.24.0 and 1.24.1 — 35 changed and 0 added packages.

## Summary

- [Minor version bumps](#minor-version-bumps): 2 packages
- [Patch version bumps](#patch-version-bumps): 2 packages
- [Excluded dependency updates](#excluded-dependency-updates): 31 packages

## Table of contents

- [Minor version bumps](#minor-version-bumps)
  - [`@backstage/plugin-catalog-backend` (1.18.0 → 1.19.0)](#backstageplugin-catalog-backend-1180--1190)
  - [`@backstage/plugin-catalog-node` (1.8.0 → 1.9.0)](#backstageplugin-catalog-node-180--190)
- [Patch version bumps](#patch-version-bumps)
  - [`@backstage/plugin-catalog-backend-module-unprocessed` (0.4.0 → 0.4.1)](#backstageplugin-catalog-backend-module-unprocessed-040--041)
  - [`@backstage/plugin-permission-backend` (0.5.37 → 0.5.38)](#backstageplugin-permission-backend-0537--0538)
- [Excluded dependency updates](#excluded-dependency-updates)

## Minor version bumps

### `@backstage/plugin-catalog-backend` (1.18.0 → [1.19.0](../../changelogs/@backstage/plugin-catalog-backend.md#1190))

#### 1.19.0

##### Minor Changes

- [`9c7fb30`](https://github.com/backstage/backstage/commit/9c7fb30): Added the ability to inject custom permissions from modules, on `CatalogBuilder` and `CatalogPermissionExtensionPoint`

### `@backstage/plugin-catalog-node` (1.8.0 → [1.9.0](../../changelogs/@backstage/plugin-catalog-node.md#190))

#### 1.9.0

##### Minor Changes

- [`9c7fb30`](https://github.com/backstage/backstage/commit/9c7fb30): Added the ability to inject custom permissions from modules, on `CatalogBuilder` and `CatalogPermissionExtensionPoint`

## Patch version bumps

### `@backstage/plugin-catalog-backend-module-unprocessed` (0.4.0 → [0.4.1](../../changelogs/@backstage/plugin-catalog-backend-module-unprocessed.md#041))

#### 0.4.1

##### Patch Changes

- [`9c7fb30`](https://github.com/backstage/backstage/commit/9c7fb30): Internal update that injects custom permissions into the catalog using its extension point

### `@backstage/plugin-permission-backend` (0.5.37 → [0.5.38](../../changelogs/@backstage/plugin-permission-backend.md#0538))

#### 0.5.38

##### Patch Changes

- [`9c7fb30`](https://github.com/backstage/backstage/commit/9c7fb30): Properly forward causes of errors from upstream backends in the `PermissionIntegrationClient`

## Excluded dependency updates

- `@backstage/backend-dynamic-feature-service` (0.2.4 → [0.2.5](../../changelogs/@backstage/backend-dynamic-feature-service.md#025))
- `@backstage/plugin-auth-backend` (0.22.0 → [0.22.1](../../changelogs/@backstage/plugin-auth-backend.md#0221))
- `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-auth-backend-module-aws-alb-provider.md#016))
- `@backstage/plugin-auth-backend-module-oidc-provider` (0.1.4 → [0.1.5](../../changelogs/@backstage/plugin-auth-backend-module-oidc-provider.md#015))
- `@backstage/plugin-azure-devops-backend` (0.6.0 → [0.6.1](../../changelogs/@backstage/plugin-azure-devops-backend.md#061))
- `@backstage/plugin-azure-sites-backend` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-azure-sites-backend.md#031))
- `@backstage/plugin-catalog-backend-module-aws` (0.3.8 → [0.3.9](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#039))
- `@backstage/plugin-catalog-backend-module-azure` (0.1.33 → [0.1.34](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#0134))
- `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.1.7 → [0.1.8](../../changelogs/@backstage/plugin-catalog-backend-module-backstage-openapi.md#018))
- `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.2.0 → [0.2.1](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-cloud.md#021))
- `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.27 → [0.1.28](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket-server.md#0128))
- `@backstage/plugin-catalog-backend-module-gcp` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-catalog-backend-module-gcp.md#0115))
- `@backstage/plugin-catalog-backend-module-gerrit` (0.1.30 → [0.1.31](../../changelogs/@backstage/plugin-catalog-backend-module-gerrit.md#0131))
- `@backstage/plugin-catalog-backend-module-github` (0.5.4 → [0.5.5](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#055))
- `@backstage/plugin-catalog-backend-module-github-org` (0.1.8 → [0.1.9](../../changelogs/@backstage/plugin-catalog-backend-module-github-org.md#019))
- `@backstage/plugin-catalog-backend-module-gitlab` (0.3.11 → [0.3.12](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#0312))
- `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.18 → [0.4.19](../../changelogs/@backstage/plugin-catalog-backend-module-incremental-ingestion.md#0419))
- `@backstage/plugin-catalog-backend-module-ldap` (0.5.29 → [0.5.30](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#0530))
- `@backstage/plugin-catalog-backend-module-msgraph` (0.5.21 → [0.5.22](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#0522))
- `@backstage/plugin-catalog-backend-module-openapi` (0.1.31 → [0.1.32](../../changelogs/@backstage/plugin-catalog-backend-module-openapi.md#0132))
- `@backstage/plugin-catalog-backend-module-puppetdb` (0.1.19 → [0.1.20](../../changelogs/@backstage/plugin-catalog-backend-module-puppetdb.md#0120))
- `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-catalog-backend-module-scaffolder-entity-model.md#0112))
- `@backstage/plugin-jenkins-backend` (0.4.0 → [0.4.1](../../changelogs/@backstage/plugin-jenkins-backend.md#041))
- `@backstage/plugin-kubernetes-backend` (0.16.0 → [0.16.1](../../changelogs/@backstage/plugin-kubernetes-backend.md#0161))
- `@backstage/plugin-lighthouse-backend` (0.4.6 → [0.4.7](../../changelogs/@backstage/plugin-lighthouse-backend.md#047))
- `@backstage/plugin-linguist-backend` (0.5.11 → [0.5.12](../../changelogs/@backstage/plugin-linguist-backend.md#0512))
- `@backstage/plugin-scaffolder-backend` (1.22.0 → [1.22.1](../../changelogs/@backstage/plugin-scaffolder-backend.md#1221))
- `@backstage/plugin-search-backend-module-catalog` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-search-backend-module-catalog.md#0119))
- `@backstage/plugin-search-backend-module-techdocs` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-search-backend-module-techdocs.md#0119))
- `@backstage/plugin-techdocs-backend` (1.10.0 → [1.10.1](../../changelogs/@backstage/plugin-techdocs-backend.md#1101))
- `@backstage/plugin-todo-backend` (0.3.12 → [0.3.13](../../changelogs/@backstage/plugin-todo-backend.md#0313))
