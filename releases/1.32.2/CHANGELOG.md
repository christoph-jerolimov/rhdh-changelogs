# Backstage Release 1.32.2 changelog

Changes between 1.32.1 and 1.32.2 — 45 changed and 0 added packages.

## Summary

- [Patch version bumps](#patch-version-bumps): 45 packages

## Table of contents

- [Patch version bumps](#patch-version-bumps)
  - [`@backstage/backend-defaults` (0.5.1 → 0.5.2)](#backstagebackend-defaults-051--052)
  - [`@backstage/backend-dynamic-feature-service` (0.4.2 → 0.4.3)](#backstagebackend-dynamic-feature-service-042--043)
  - [`@backstage/backend-test-utils` (1.0.1 → 1.0.2)](#backstagebackend-test-utils-101--102)
  - [`@backstage/plugin-catalog-backend` (1.27.0 → 1.27.1)](#backstageplugin-catalog-backend-1270--1271)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.4.3 → 0.4.4)](#backstageplugin-catalog-backend-module-aws-043--044)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.4.0 → 0.4.1)](#backstageplugin-catalog-backend-module-bitbucket-cloud-040--041)
  - [`@backstage/plugin-catalog-backend-module-github` (0.7.5 → 0.7.6)](#backstageplugin-catalog-backend-module-github-075--076)
  - [`@backstage/plugin-catalog-backend-module-github-org` (0.3.2 → 0.3.3)](#backstageplugin-catalog-backend-module-github-org-032--033)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.4.3 → 0.4.4)](#backstageplugin-catalog-backend-module-gitlab-043--044)
  - [`@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.1 → 0.2.2)](#backstageplugin-catalog-backend-module-gitlab-org-021--022)
  - [`@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.5.5 → 0.5.6)](#backstageplugin-catalog-backend-module-incremental-ingestion-055--056)
  - [`@backstage/plugin-catalog-backend-module-logs` (0.1.2 → 0.1.3)](#backstageplugin-catalog-backend-module-logs-012--013)
  - [`@backstage/plugin-catalog-backend-module-openapi` (0.2.2 → 0.2.3)](#backstageplugin-catalog-backend-module-openapi-022--023)
  - [`@backstage/plugin-events-backend` (0.3.13 → 0.3.14)](#backstageplugin-events-backend-0313--0314)
  - [`@backstage/plugin-events-backend-module-aws-sqs` (0.4.3 → 0.4.4)](#backstageplugin-events-backend-module-aws-sqs-043--044)
  - [`@backstage/plugin-events-backend-module-azure` (0.2.12 → 0.2.13)](#backstageplugin-events-backend-module-azure-0212--0213)
  - [`@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.12 → 0.2.13)](#backstageplugin-events-backend-module-bitbucket-cloud-0212--0213)
  - [`@backstage/plugin-events-backend-module-gerrit` (0.2.12 → 0.2.13)](#backstageplugin-events-backend-module-gerrit-0212--0213)
  - [`@backstage/plugin-events-backend-module-github` (0.2.12 → 0.2.13)](#backstageplugin-events-backend-module-github-0212--0213)
  - [`@backstage/plugin-events-backend-module-gitlab` (0.2.12 → 0.2.13)](#backstageplugin-events-backend-module-gitlab-0212--0213)
  - [`@backstage/plugin-events-backend-test-utils` (0.1.36 → 0.1.37)](#backstageplugin-events-backend-test-utils-0136--0137)
  - [`@backstage/plugin-events-node` (0.4.1 → 0.4.2)](#backstageplugin-events-node-041--042)
  - [`@backstage/plugin-notifications-backend` (0.4.1 → 0.4.2)](#backstageplugin-notifications-backend-041--042)
  - [`@backstage/plugin-notifications-backend-module-email` (0.3.1 → 0.3.2)](#backstageplugin-notifications-backend-module-email-031--032)
  - [`@backstage/plugin-notifications-node` (0.2.7 → 0.2.8)](#backstageplugin-notifications-node-027--028)
  - [`@backstage/plugin-scaffolder` (1.26.0 → 1.26.1)](#backstageplugin-scaffolder-1260--1261)
  - [`@backstage/plugin-scaffolder-backend` (1.26.1 → 1.26.2)](#backstageplugin-scaffolder-backend-1261--1262)
  - [`@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.1 → 0.3.2)](#backstageplugin-scaffolder-backend-module-cookiecutter-031--032)
  - [`@backstage/plugin-scaffolder-backend-module-notifications` (0.1.1 → 0.1.2)](#backstageplugin-scaffolder-backend-module-notifications-011--012)
  - [`@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.1 → 0.4.2)](#backstageplugin-scaffolder-backend-module-yeoman-041--042)
  - [`@backstage/plugin-scaffolder-node-test-utils` (0.1.13 → 0.1.14)](#backstageplugin-scaffolder-node-test-utils-0113--0114)
  - [`@backstage/plugin-scaffolder-react` (1.13.0 → 1.13.1)](#backstageplugin-scaffolder-react-1130--1131)
  - [`@backstage/plugin-search-backend` (1.6.0 → 1.6.1)](#backstageplugin-search-backend-160--161)
  - [`@backstage/plugin-search-backend-module-catalog` (0.2.3 → 0.2.4)](#backstageplugin-search-backend-module-catalog-023--024)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (1.6.0 → 1.6.1)](#backstageplugin-search-backend-module-elasticsearch-160--161)
  - [`@backstage/plugin-search-backend-module-explore` (0.2.3 → 0.2.4)](#backstageplugin-search-backend-module-explore-023--024)
  - [`@backstage/plugin-search-backend-module-pg` (0.5.36 → 0.5.37)](#backstageplugin-search-backend-module-pg-0536--0537)
  - [`@backstage/plugin-search-backend-module-stack-overflow-collator` (0.3.1 → 0.3.2)](#backstageplugin-search-backend-module-stack-overflow-collator-031--032)
  - [`@backstage/plugin-search-backend-module-techdocs` (0.3.0 → 0.3.1)](#backstageplugin-search-backend-module-techdocs-030--031)
  - [`@backstage/plugin-search-backend-node` (1.3.3 → 1.3.4)](#backstageplugin-search-backend-node-133--134)
  - [`@backstage/plugin-signals-backend` (0.2.1 → 0.2.2)](#backstageplugin-signals-backend-021--022)
  - [`@backstage/plugin-signals-node` (0.1.12 → 0.1.13)](#backstageplugin-signals-node-0112--0113)
  - [`@backstage/plugin-techdocs-backend` (1.11.0 → 1.11.1)](#backstageplugin-techdocs-backend-1110--1111)
  - [`@backstage/plugin-user-settings-backend` (0.2.25 → 0.2.26)](#backstageplugin-user-settings-backend-0225--0226)
  - [`@techdocs/cli` (1.8.20 → 1.8.21)](#techdocscli-1820--1821)

## Patch version bumps

### `@backstage/backend-defaults` (0.5.1 → 0.5.2)

_No changelog entries found._

### `@backstage/backend-dynamic-feature-service` (0.4.2 → 0.4.3)

_No changelog entries found._

### `@backstage/backend-test-utils` (1.0.1 → 1.0.2)

_No changelog entries found._

### `@backstage/plugin-catalog-backend` (1.27.0 → 1.27.1)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-aws` (0.4.3 → 0.4.4)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.4.0 → 0.4.1)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-github` (0.7.5 → 0.7.6)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-github-org` (0.3.2 → 0.3.3)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gitlab` (0.4.3 → 0.4.4)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-gitlab-org` (0.2.1 → 0.2.2)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.5.5 → 0.5.6)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-logs` (0.1.2 → 0.1.3)

_No changelog entries found._

### `@backstage/plugin-catalog-backend-module-openapi` (0.2.2 → 0.2.3)

_No changelog entries found._

### `@backstage/plugin-events-backend` (0.3.13 → 0.3.14)

_No changelog entries found._

### `@backstage/plugin-events-backend-module-aws-sqs` (0.4.3 → 0.4.4)

_No changelog entries found._

### `@backstage/plugin-events-backend-module-azure` (0.2.12 → 0.2.13)

_No changelog entries found._

### `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.12 → 0.2.13)

_No changelog entries found._

### `@backstage/plugin-events-backend-module-gerrit` (0.2.12 → 0.2.13)

_No changelog entries found._

### `@backstage/plugin-events-backend-module-github` (0.2.12 → 0.2.13)

_No changelog entries found._

### `@backstage/plugin-events-backend-module-gitlab` (0.2.12 → 0.2.13)

_No changelog entries found._

### `@backstage/plugin-events-backend-test-utils` (0.1.36 → 0.1.37)

_No changelog entries found._

### `@backstage/plugin-events-node` (0.4.1 → 0.4.2)

_No changelog entries found._

### `@backstage/plugin-notifications-backend` (0.4.1 → 0.4.2)

_No changelog entries found._

### `@backstage/plugin-notifications-backend-module-email` (0.3.1 → 0.3.2)

_No changelog entries found._

### `@backstage/plugin-notifications-node` (0.2.7 → 0.2.8)

_No changelog entries found._

### `@backstage/plugin-scaffolder` (1.26.0 → 1.26.1)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend` (1.26.1 → 1.26.2)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.3.1 → 0.3.2)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-notifications` (0.1.1 → 0.1.2)

_No changelog entries found._

### `@backstage/plugin-scaffolder-backend-module-yeoman` (0.4.1 → 0.4.2)

_No changelog entries found._

### `@backstage/plugin-scaffolder-node-test-utils` (0.1.13 → 0.1.14)

_No changelog entries found._

### `@backstage/plugin-scaffolder-react` (1.13.0 → 1.13.1)

_No changelog entries found._

### `@backstage/plugin-search-backend` (1.6.0 → 1.6.1)

_No changelog entries found._

### `@backstage/plugin-search-backend-module-catalog` (0.2.3 → 0.2.4)

_No changelog entries found._

### `@backstage/plugin-search-backend-module-elasticsearch` (1.6.0 → 1.6.1)

_No changelog entries found._

### `@backstage/plugin-search-backend-module-explore` (0.2.3 → 0.2.4)

_No changelog entries found._

### `@backstage/plugin-search-backend-module-pg` (0.5.36 → 0.5.37)

_No changelog entries found._

### `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.3.1 → 0.3.2)

_No changelog entries found._

### `@backstage/plugin-search-backend-module-techdocs` (0.3.0 → 0.3.1)

_No changelog entries found._

### `@backstage/plugin-search-backend-node` (1.3.3 → 1.3.4)

_No changelog entries found._

### `@backstage/plugin-signals-backend` (0.2.1 → 0.2.2)

_No changelog entries found._

### `@backstage/plugin-signals-node` (0.1.12 → 0.1.13)

_No changelog entries found._

### `@backstage/plugin-techdocs-backend` (1.11.0 → 1.11.1)

_No changelog entries found._

### `@backstage/plugin-user-settings-backend` (0.2.25 → 0.2.26)

_No changelog entries found._

### `@techdocs/cli` (1.8.20 → 1.8.21)

_No changelog entries found._
