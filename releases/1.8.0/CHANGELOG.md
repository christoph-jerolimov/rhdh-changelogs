# Backstage Release 1.8.0 changelog

Changes between 1.7.2 and 1.8.0 — 158 changed and 13 added packages.

## Summary

- [Newly added packages](#newly-added-packages): 13 packages
- [Breaking changes](#breaking-changes): 7 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 6 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 1 package
- [Other minor version bumps](#other-minor-version-bumps): 6 packages
- [Other patch version bumps](#other-patch-version-bumps): 60 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/plugin-azure-sites` (new, 0.1.0)](#backstageplugin-azure-sites-new-010)
  - [`@backstage/plugin-azure-sites-backend` (new, 0.1.0)](#backstageplugin-azure-sites-backend-new-010)
  - [`@backstage/plugin-azure-sites-common` (new, 0.1.0)](#backstageplugin-azure-sites-common-new-010)
  - [`@backstage/plugin-events-backend` (new, 0.1.0)](#backstageplugin-events-backend-new-010)
  - [`@backstage/plugin-events-backend-module-aws-sqs` (new, 0.1.0)](#backstageplugin-events-backend-module-aws-sqs-new-010)
  - [`@backstage/plugin-events-backend-module-azure` (new, 0.1.0)](#backstageplugin-events-backend-module-azure-new-010)
  - [`@backstage/plugin-events-backend-module-bitbucket-cloud` (new, 0.1.0)](#backstageplugin-events-backend-module-bitbucket-cloud-new-010)
  - [`@backstage/plugin-events-backend-module-gerrit` (new, 0.1.0)](#backstageplugin-events-backend-module-gerrit-new-010)
  - [`@backstage/plugin-events-backend-module-github` (new, 0.1.0)](#backstageplugin-events-backend-module-github-new-010)
  - [`@backstage/plugin-events-backend-module-gitlab` (new, 0.1.0)](#backstageplugin-events-backend-module-gitlab-new-010)
  - [`@backstage/plugin-events-backend-test-utils` (new, 0.1.0)](#backstageplugin-events-backend-test-utils-new-010)
  - [`@backstage/plugin-events-node` (new, 0.1.0)](#backstageplugin-events-node-new-010)
  - [`@backstage/plugin-org-react` (new, 0.1.0)](#backstageplugin-org-react-new-010)
- [Breaking changes](#breaking-changes)
  - [`@backstage/backend-common` (0.15.2 → 0.16.0)](#backstagebackend-common-0152--0160)
  - [`@backstage/core-components` (0.11.2 → 0.12.0)](#backstagecore-components-0112--0120)
  - [`@backstage/plugin-catalog-backend-module-github` (0.1.8 → 0.2.0)](#backstageplugin-catalog-backend-module-github-018--020)
  - [`@backstage/plugin-github-issues` (0.1.2 → 0.2.0)](#backstageplugin-github-issues-012--020)
  - [`@backstage/plugin-kubernetes-backend` (0.7.3 → 0.8.0)](#backstageplugin-kubernetes-backend-073--080)
  - [`@backstage/plugin-kubernetes-common` (0.4.3 → 0.4.4)](#backstageplugin-kubernetes-common-043--044)
  - [`@backstage/plugin-splunk-on-call` (0.3.34 → 0.4.0)](#backstageplugin-splunk-on-call-0334--040)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/cli` (0.20.0 → 0.21.0)](#backstagecli-0200--0210)
  - [`@backstage/plugin-bazaar` (0.1.25 → 0.2.0)](#backstageplugin-bazaar-0125--020)
  - [`@backstage/plugin-cost-insights` (0.11.32 → 0.12.0)](#backstageplugin-cost-insights-01132--0120)
  - [`@backstage/plugin-ilert` (0.1.36 → 0.2.0)](#backstageplugin-ilert-0136--020)
  - [`@backstage/plugin-org` (0.5.10 → 0.6.0)](#backstageplugin-org-0510--060)
  - [`@backstage/plugin-sonarqube` (0.4.2 → 0.5.0)](#backstageplugin-sonarqube-042--050)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/release-manifests` (0.0.6 → 0.0.7)](#backstagerelease-manifests-006--007)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/core-app-api` (1.1.1 → 1.2.0)](#backstagecore-app-api-111--120)
  - [`@backstage/core-plugin-api` (1.0.7 → 1.1.0)](#backstagecore-plugin-api-107--110)
  - [`@backstage/integration` (1.3.2 → 1.4.0)](#backstageintegration-132--140)
  - [`@backstage/plugin-scaffolder` (1.7.0 → 1.8.0)](#backstageplugin-scaffolder-170--180)
  - [`@backstage/plugin-scaffolder-backend` (1.7.0 → 1.8.0)](#backstageplugin-scaffolder-backend-170--180)
  - [`@backstage/plugin-techdocs` (1.3.3 → 1.4.0)](#backstageplugin-techdocs-133--140)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/backend-tasks` (0.3.6 → 0.3.7)](#backstagebackend-tasks-036--037)
  - [`@backstage/backend-test-utils` (0.1.29 → 0.1.30)](#backstagebackend-test-utils-0129--0130)
  - [`@backstage/catalog-model` (1.1.2 → 1.1.3)](#backstagecatalog-model-112--113)
  - [`@backstage/codemods` (0.1.40 → 0.1.41)](#backstagecodemods-0140--0141)
  - [`@backstage/create-app` (0.4.33 → 0.4.34)](#backstagecreate-app-0433--0434)
  - [`@backstage/plugin-apache-airflow` (0.2.3 → 0.2.4)](#backstageplugin-apache-airflow-023--024)
  - [`@backstage/plugin-api-docs` (0.8.10 → 0.8.11)](#backstageplugin-api-docs-0810--0811)
  - [`@backstage/plugin-auth-backend` (0.17.0 → 0.17.1)](#backstageplugin-auth-backend-0170--0171)
  - [`@backstage/plugin-auth-node` (0.2.6 → 0.2.7)](#backstageplugin-auth-node-026--027)
  - [`@backstage/plugin-azure-devops-backend` (0.3.16 → 0.3.17)](#backstageplugin-azure-devops-backend-0316--0317)
  - [`@backstage/plugin-bitbucket-cloud-common` (0.2.0 → 0.2.1)](#backstageplugin-bitbucket-cloud-common-020--021)
  - [`@backstage/plugin-bitrise` (0.1.37 → 0.1.38)](#backstageplugin-bitrise-0137--0138)
  - [`@backstage/plugin-catalog` (1.6.0 → 1.6.1)](#backstageplugin-catalog-160--161)
  - [`@backstage/plugin-catalog-backend` (1.5.0 → 1.5.1)](#backstageplugin-catalog-backend-150--151)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.1.10 → 0.1.11)](#backstageplugin-catalog-backend-module-aws-0110--0111)
  - [`@backstage/plugin-catalog-backend-module-azure` (0.1.8 → 0.1.9)](#backstageplugin-catalog-backend-module-azure-018--019)
  - [`@backstage/plugin-catalog-backend-module-bitbucket` (0.2.4 → 0.2.5)](#backstageplugin-catalog-backend-module-bitbucket-024--025)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.4 → 0.1.5)](#backstageplugin-catalog-backend-module-bitbucket-cloud-014--015)
  - [`@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.2 → 0.1.3)](#backstageplugin-catalog-backend-module-bitbucket-server-012--013)
  - [`@backstage/plugin-catalog-backend-module-gerrit` (0.1.5 → 0.1.6)](#backstageplugin-catalog-backend-module-gerrit-015--016)
  - [`@backstage/plugin-catalog-backend-module-gitlab` (0.1.8 → 0.1.9)](#backstageplugin-catalog-backend-module-gitlab-018--019)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.4.3 → 0.4.4)](#backstageplugin-catalog-backend-module-msgraph-043--044)
  - [`@backstage/plugin-catalog-backend-module-openapi` (0.1.3 → 0.1.4)](#backstageplugin-catalog-backend-module-openapi-013--014)
  - [`@backstage/plugin-catalog-graph` (0.2.22 → 0.2.23)](#backstageplugin-catalog-graph-0222--0223)
  - [`@backstage/plugin-catalog-import` (0.9.0 → 0.9.1)](#backstageplugin-catalog-import-090--091)
  - [`@backstage/plugin-catalog-react` (1.2.0 → 1.2.1)](#backstageplugin-catalog-react-120--121)
  - [`@backstage/plugin-circleci` (0.3.10 → 0.3.11)](#backstageplugin-circleci-0310--0311)
  - [`@backstage/plugin-cloudbuild` (0.3.10 → 0.3.11)](#backstageplugin-cloudbuild-0310--0311)
  - [`@backstage/plugin-code-coverage` (0.2.3 → 0.2.4)](#backstageplugin-code-coverage-023--024)
  - [`@backstage/plugin-code-coverage-backend` (0.2.3 → 0.2.4)](#backstageplugin-code-coverage-backend-023--024)
  - [`@backstage/plugin-dynatrace` (1.0.0 → 1.0.1)](#backstageplugin-dynatrace-100--101)
  - [`@backstage/plugin-explore` (0.3.41 → 0.3.42)](#backstageplugin-explore-0341--0342)
  - [`@backstage/plugin-gcalendar` (0.3.6 → 0.3.7)](#backstageplugin-gcalendar-036--037)
  - [`@backstage/plugin-git-release-manager` (0.3.23 → 0.3.24)](#backstageplugin-git-release-manager-0323--0324)
  - [`@backstage/plugin-github-actions` (0.5.10 → 0.5.11)](#backstageplugin-github-actions-0510--0511)
  - [`@backstage/plugin-github-pull-requests-board` (0.1.4 → 0.1.5)](#backstageplugin-github-pull-requests-board-014--015)
  - [`@backstage/plugin-gitops-profiles` (0.3.28 → 0.3.29)](#backstageplugin-gitops-profiles-0328--0329)
  - [`@backstage/plugin-jenkins` (0.7.9 → 0.7.10)](#backstageplugin-jenkins-079--0710)
  - [`@backstage/plugin-kafka` (0.3.10 → 0.3.11)](#backstageplugin-kafka-0310--0311)
  - [`@backstage/plugin-kubernetes` (0.7.3 → 0.7.4)](#backstageplugin-kubernetes-073--074)
  - [`@backstage/plugin-pagerduty` (0.5.3 → 0.5.4)](#backstageplugin-pagerduty-053--054)
  - [`@backstage/plugin-periskop` (0.1.8 → 0.1.9)](#backstageplugin-periskop-018--019)
  - [`@backstage/plugin-permission-common` (0.7.0 → 0.7.1)](#backstageplugin-permission-common-070--071)
  - [`@backstage/plugin-playlist` (0.1.1 → 0.1.2)](#backstageplugin-playlist-011--012)
  - [`@backstage/plugin-playlist-backend` (0.2.0 → 0.2.1)](#backstageplugin-playlist-backend-020--021)
  - [`@backstage/plugin-rollbar` (0.4.10 → 0.4.11)](#backstageplugin-rollbar-0410--0411)
  - [`@backstage/plugin-stack-overflow` (0.1.6 → 0.1.7)](#backstageplugin-stack-overflow-016--017)
  - [`@backstage/plugin-stack-overflow-backend` (0.1.6 → 0.1.7)](#backstageplugin-stack-overflow-backend-016--017)
  - [`@backstage/plugin-tech-insights` (0.3.2 → 0.3.3)](#backstageplugin-tech-insights-032--033)
  - [`@backstage/plugin-tech-insights-backend` (0.5.3 → 0.5.4)](#backstageplugin-tech-insights-backend-053--054)
  - [`@backstage/plugin-tech-insights-node` (0.3.5 → 0.3.6)](#backstageplugin-tech-insights-node-035--036)
  - [`@backstage/plugin-tech-radar` (0.5.17 → 0.5.18)](#backstageplugin-tech-radar-0517--0518)
  - [`@backstage/plugin-techdocs-backend` (1.4.0 → 1.4.1)](#backstageplugin-techdocs-backend-140--141)
  - [`@backstage/plugin-techdocs-module-addons-contrib` (1.0.5 → 1.0.6)](#backstageplugin-techdocs-module-addons-contrib-105--106)
  - [`@backstage/plugin-techdocs-node` (1.4.1 → 1.4.2)](#backstageplugin-techdocs-node-141--142)
  - [`@backstage/plugin-techdocs-react` (1.0.5 → 1.0.6)](#backstageplugin-techdocs-react-105--106)
  - [`@backstage/plugin-vault-backend` (0.2.3 → 0.2.4)](#backstageplugin-vault-backend-023--024)
  - [`@backstage/plugin-xcmetrics` (0.2.30 → 0.2.31)](#backstageplugin-xcmetrics-0230--0231)
  - [`@backstage/types` (1.0.0 → 1.0.1)](#backstagetypes-100--101)
  - [`@backstage/version-bridge` (1.0.1 → 1.0.2)](#backstageversion-bridge-101--102)

## Newly added packages

### `@backstage/plugin-azure-sites` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- 4a75ce761c: Azure Sites (Apps & Functions) support for a given entity. View the current status of the site, quickly jump to site's Overview page, or Log Stream page.

##### Patch Changes

- f905853ad6: Prefer using `Link` from `@backstage/core-components` rather than material-UI.

### `@backstage/plugin-azure-sites-backend` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- 4a75ce761c: Azure Sites (Apps & Functions) support for a given entity. View the current status of the site, quickly jump to site's Overview page, or Log Stream page.

### `@backstage/plugin-azure-sites-common` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- 4a75ce761c: Azure Sites (Apps & Functions) support for a given entity. View the current status of the site, quickly jump to site's Overview page, or Log Stream page.

### `@backstage/plugin-events-backend` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- dc9da28abd: Support events received via HTTP endpoints at plugin-events-backend.

  The plugin provides an event publisher `HttpPostIngressEventPublisher`
  which will allow you to receive events via
  HTTP endpoints `POST /api/events/http/{topic}`
  and will publish these to the used event broker.

  Using a provided custom validator, you can participate in the decision
  which events are accepted, e.g. by verifying the source of the request.

  Please find more information at
  https://github.com/backstage/backstage/tree/master/plugins/events-backend/README.md.

- 7bbd2403a1: Adds a new backend plugin plugin-events-backend for managing events.

  plugin-events-node exposes interfaces which can be used by modules.

  plugin-events-backend-test-utils provides utilities which can be used while writing tests e.g. for modules.

  Please find more information at
  https://github.com/backstage/backstage/tree/master/plugins/events-backend/README.md.

### `@backstage/plugin-events-backend-module-aws-sqs` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- d3ecb2382d: Adds a new module `aws-sqs` for plugin-events-backend.

  The module provides an event publisher `AwsSqsConsumingEventPublisher`
  which will allow you to receive events from
  an AWS SQS queue and will publish these to the used event broker.

  Please find more information at
  https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-aws-sqs/README.md.

### `@backstage/plugin-events-backend-module-azure` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- 12cd94b7e9: Adds a new module `azure` to plugin-events-backend.

  The module adds a new event router `AzureDevOpsEventRouter`.

  The event router will re-publish events received at topic `azureDevOps`
  under a more specific topic depending on their `$.eventType` value
  (e.g., `azureDevOps.git.push`).

  Please find more information at
  https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-azure/README.md.

### `@backstage/plugin-events-backend-module-bitbucket-cloud` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- 6bc121bf0d: Adds a new module `bitbucket-cloud` to plugin-events-backend.

  The module adds a new event router `BitbucketCloudEventRouter`.

  The event router will re-publish events received at topic `bitbucketCloud`
  under a more specific topic depending on their `x-event-key` value
  (e.g., `bitbucketCloud.repo:push`).

  Please find more information at
  https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-bitbucket-cloud/README.md.

### `@backstage/plugin-events-backend-module-gerrit` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- 25f6d7bddb: Adds a new module `gerrit` to plugin-events-backend.

  The module adds a new event router `GerritEventRouter`.

  The event router will re-publish events received at topic `gerrit`
  under a more specific topic depending on their `$.type` value
  (e.g., `gerrit.change-merged`).

  Please find more information at
  https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-gerrit/README.md.

### `@backstage/plugin-events-backend-module-github` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- b3a4edb885: Adds a new module `github` to plugin-events-backend.

  The module adds a new event router `GithubEventRouter`.

  The event router will re-publish events received at topic `github`
  under a more specific topic depending on their `x-github-event` value
  (e.g., `github.push`).

  Please find more information at
  https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-github/README.md.

### `@backstage/plugin-events-backend-module-gitlab` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- 63f7983398: Adds a new module `gitlab` to plugin-events-backend.

  The module adds a new event router `GitlabEventRouter`.

  The event router will re-publish events received at topic `gitlab`
  under a more specific topic depending on their `$.event_name` value
  (e.g., `gitlab.push`).

  Please find more information at
  https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-gitlab/README.md.

### `@backstage/plugin-events-backend-test-utils` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- 7bbd2403a1: Adds a new backend plugin plugin-events-backend for managing events.

  plugin-events-node exposes interfaces which can be used by modules.

  plugin-events-backend-test-utils provides utilities which can be used while writing tests e.g. for modules.

  Please find more information at
  https://github.com/backstage/backstage/tree/master/plugins/events-backend/README.md.

### `@backstage/plugin-events-node` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- dc9da28abd: Support events received via HTTP endpoints at plugin-events-backend.

  The plugin provides an event publisher `HttpPostIngressEventPublisher`
  which will allow you to receive events via
  HTTP endpoints `POST /api/events/http/{topic}`
  and will publish these to the used event broker.

  Using a provided custom validator, you can participate in the decision
  which events are accepted, e.g. by verifying the source of the request.

  Please find more information at
  https://github.com/backstage/backstage/tree/master/plugins/events-backend/README.md.

- 7bbd2403a1: Adds a new backend plugin plugin-events-backend for managing events.

  plugin-events-node exposes interfaces which can be used by modules.

  plugin-events-backend-test-utils provides utilities which can be used while writing tests e.g. for modules.

  Please find more information at
  https://github.com/backstage/backstage/tree/master/plugins/events-backend/README.md.

### `@backstage/plugin-org-react` (new, 0.1.0)

#### 0.1.0

##### Minor Changes

- e96274f1fe: Implemented the org-react plugin, with it's first component being: a `GroupListPicker` component that will give the user the ability to choose a group

## Breaking changes

### `@backstage/backend-common` (0.15.2 → 0.16.0)

#### 0.16.0

##### Minor Changes

- a7607b5413: **BREAKING CHANGE**: The `UrlReader` interface has been updated to require that `readUrl` is implemented. `readUrl` has previously been optional to implement but a warning has been logged when calling its predecessor `read`.
  The `read` method is now deprecated and will be removed in a future release.

##### Patch Changes

- 88f99b8b13: Bumped `tar` dependency to `^6.1.12` in order to ensure Node.js v18 compatibility.
- 55227712dd: Generated development HTTPS backend certificate is now checked for expiration date instead of file age.
- d05e1841ce: This patch adds GiteaURLReader to the available classes. It currently only reads single files via gitea's public repos api
- e6ced2446a: Change to using `@keyv/memcache` now that `keyv-memcache` is deprecated
- 210a3b5668: Small update to fix compatibility with newer versions of the `keyv` library
- cfb30b700c: Pin `@kubernetes/client-node` version to `0.17.0`.
- c1784a4980: Replaces in-code uses of `GitHub` with `Github` and deprecates old versions.

### `@backstage/core-components` (0.11.2 → 0.12.0)

#### 0.12.0

##### Minor Changes

- fb3733e446: **BREAKING**: Removed the `HomepageTimer` as it has been replaced by the `HeaderWorldClock` in the Home plugin and was deprecated over a year ago.

##### Patch Changes

- 5f695c219a: Set the `searchTooltip` to "Filter" to follow how the `searchPlaceholder` is set making this more consistent
- f36127f5fe: Add optional step to SimpleStepper
- b4fb5c8ecc: MissingAnnotationEmptyState now accepts either a string or an array of strings to support multiple missing annotations.
- 7573b65232: Internal refactor of imports to avoid circular dependencies
- 858986f6b6: Disable base path workaround in `Link` component when React Router v6 stable is used.
- f905853ad6: Prefer using `Link` from `@backstage/core-components` rather than material-UI.

### `@backstage/plugin-catalog-backend-module-github` (0.1.8 → 0.2.0)

#### 0.2.0

##### Minor Changes

- 67fe5bc9a9: BREAKING: Support authenticated backends by including a server token for catalog requests. The constructor of `GithubLocationAnalyzer` now requires an instance of `TokenManager` to be supplied:

  ```diff
  ...
    builder.addLocationAnalyzers(
      new GitHubLocationAnalyzer({
        discovery: env.discovery,
        config: env.config,
  +     tokenManager: env.tokenManager,
      }),
    );
  ...
  ```

- f64d66a45c: Added the ability for the GitHub discovery provider to validate that catalog files exist before emitting them.

  Users can now set the `validateLocationsExist` property to `true` in their GitHub discovery configuration to opt in to this feature.
  This feature only works with `catalogPath`s that do not contain wildcards.

  When `validateLocationsExist` is set to `true`, the GitHub discovery provider will retrieve the object from the
  repository at the provided `catalogPath`.
  If this file exists and is non-empty, then it will be emitted as a location for further processing.
  If this file does not exist or is empty, then it will not be emitted.
  Not emitting locations that do not exist allows for far fewer calls to the GitHub API to validate locations that do not exist.

##### Patch Changes

- 67fe5bc9a9: Properly derive Github credentials when making requests in `GithubLocationAnalyzer` to support Github App authentication
- bef063dc8d: - Make it possible to inject custom user and team transformers when configuring the `GithubOrgEntityProvider`
- 4c9f7847e4: Updated dependency `msw` to `^0.48.0` while moving it to be a dev dependency.
- c1784a4980: Replaces in-code uses of `GitHub` with `Github` and deprecates old versions.

### `@backstage/plugin-github-issues` (0.1.2 → 0.2.0)

#### 0.2.0

##### Minor Changes

- ead285b9e4: **BREAKING**: Changed the casing of all exported types to have a lowercase "h" in "github". E.g. "GitHubIssuesPage" was renamed to "GithubIssuesPage". Please rename your imports where necessary.

##### Patch Changes

- c8dd2a8c87: Stripping specific issues URL already present to target base issues URL.
- c1784a4980: Replaces in-code uses of `GitHub` with `Github` and deprecates old versions.
- f905853ad6: Prefer using `Link` from `@backstage/core-components` rather than material-UI.

### `@backstage/plugin-kubernetes-backend` (0.7.3 → 0.8.0)

#### 0.8.0

##### Minor Changes

- cbf5d11fdf: The Kubernetes errors when fetching pod metrics are now captured and returned to the frontend.

  - **BREAKING** The method `fetchPodMetricsByNamespace` in the interface `KubernetesFetcher` is changed to `fetchPodMetricsByNamespaces`. It now accepts a set of namespace strings and returns `Promise<FetchResponseWrapper>`.
  - Add the `PodStatusFetchResponse` to the `FetchResponse` union type.
  - Add `NOT_FOUND` to the `KubernetesErrorTypes` union type, the HTTP error with status code 404 will be mapped to this error.

##### Patch Changes

- cfb30b700c: Pin `@kubernetes/client-node` version to `0.17.0`.

### `@backstage/plugin-kubernetes-common` (0.4.3 → 0.4.4)

#### 0.4.4

##### Patch Changes

- cfb30b700c: Pin `@kubernetes/client-node` version to `0.17.0`.
- cbf5d11fdf: The Kubernetes errors when fetching pod metrics are now captured and returned to the frontend.

  - **BREAKING** The method `fetchPodMetricsByNamespace` in the interface `KubernetesFetcher` is changed to `fetchPodMetricsByNamespaces`. It now accepts a set of namespace strings and returns `Promise<FetchResponseWrapper>`.
  - Add the `PodStatusFetchResponse` to the `FetchResponse` union type.
  - Add `NOT_FOUND` to the `KubernetesErrorTypes` union type, the HTTP error with status code 404 will be mapped to this error.

### `@backstage/plugin-splunk-on-call` (0.3.34 → 0.4.0)

#### 0.4.0

##### Minor Changes

- 34b772ef31: Use the routing key if it's available instead of team name when triggering incidents.

  BREAKING CHANGE:
  Before, the team name was used even if the routing key (with or without team) was used.
  Now, the routing key defined for the component will be used instead of the team name.

## 0.x minor version bumps

### `@backstage/cli` (0.20.0 → 0.21.0)

#### 0.21.0

##### Minor Changes

- 7539b36748: Added a new ESLint rule that restricts imports of Link from @material-ui

  The rule can be can be overridden in the following way:

  ```diff
  module.exports = require('@backstage/cli/config/eslint-factory')(__dirname, {
  +  restrictedImports: [
  +    { name: '@material-ui/core', importNames: [] },
  +    { name: '@material-ui/core/Link', importNames: [] },
  +  ],
  });
  ```

- 384eaa2307: Switched `tsconfig.json` to target and support `ES2021`, in line with the bump to Node.js 16 & 18.

##### Patch Changes

- e52d6ad861: Updated the `backstage-cli` so that the `list-deprecations` command is visible and also removed the "[EXPERIMENTAL]" tag.
- 88f99b8b13: Bumped `tar` dependency to `^6.1.12` in order to ensure Node.js v18 compatibility.
- df21bbd4ad: Removed googleAnalyticsTrackingId configSchema.
- 286d474675: Minor update to the `index.html` template that updates the comment at the end to be more accurate.
- 4c16213e7d: The built-in Jest configuration now always uses the Jest environments that are bundled with the CLI by default. This avoids a situation where Jest potentially picks up an incompatible version of the environment package from a different dependency in the project.
- 4091c73e68: Updated `@swc/core` to version 1.3.9 which fixes a `.tsx` parser bug
- 969a8444ea: Updated dependency `esbuild` to `^0.15.0`.
- 9c767e8f45: Updated dependency `@svgr/plugin-jsx` to `6.5.x`.
  Updated dependency `@svgr/plugin-svgo` to `6.5.x`.
  Updated dependency `@svgr/rollup` to `6.5.x`.
  Updated dependency `@svgr/webpack` to `6.5.x`.

### `@backstage/plugin-bazaar` (0.1.25 → 0.2.0)

#### 0.2.0

##### Minor Changes

- 28b39e0e0e: The limit prop of BazaarOverviewCard has been removed entirely, and instead replaced with a new optional boolean prop `fullWidth`. The BazaarOverviewCard now always use full height without fixed width. Also fixed problem with link to Bazaar.

### `@backstage/plugin-cost-insights` (0.11.32 → 0.12.0)

#### 0.12.0

##### Minor Changes

- 43afded227: Updated recharts to v2.0.0 and fixed typing issues

##### Patch Changes

- e92aa15f01: Bumped `canvas` dependency to the latest version, which has better Node.js v18 support.
- cbe11d1e23: Tweak README
- 745e0e2228: Added support for displaying entity cost insights by implementing the new `getCatalogEntityDailyCost` that's part of the `CostInsightsApi`.

### `@backstage/plugin-ilert` (0.1.36 → 0.2.0)

#### 0.2.0

##### Minor Changes

- 0697af30da: Added support for multiple responders in alert list, added new tab with list to support iLert resource 'service', added new tab with list to support iLert resource 'status page'

### `@backstage/plugin-org` (0.5.10 → 0.6.0)

#### 0.6.0

##### Minor Changes

- 0b11500151: Updates the User and Group Profile cards to add the links from the UserEntity or the GroupEntity

##### Patch Changes

- 38dd29ea95: Add entity kind to the Ownership Cards. Fix the query parameters for the links of the Ownership Cards so that the catalog page actually selects the right entity kind.

### `@backstage/plugin-sonarqube` (0.4.2 → 0.5.0)

#### 0.5.0

##### Minor Changes

- 786117e98a: Fix sonarqube annotation parsing. Add content page for Sonarqube.
  Removed the deprecated `plugin` export; please use `sonarQubePlugin` instead.

## 0.0.x patch version bumps

### `@backstage/release-manifests` (0.0.6 → 0.0.7)

#### 0.0.7

##### Patch Changes

- a4496131fa: Added a fallback that fetches manifests from `https://raw.githubusercontent.com` if `https://versions.backstage.io` is unavailable.

## Other minor version bumps

### `@backstage/core-app-api` (1.1.1 → 1.2.0)

#### 1.2.0

##### Minor Changes

- 9b737e5f2e: Updated the React Router wiring to make use of the new `basename` property of the router components in React Router v6 stable. To implement this, a new optional `basename` property has been added to the `Router` app component, which can be forwarded to the concrete router implementation in order to support this new behavior. This is done by default in any app that does not have a `Router` component override.
- 127fcad26d: Deprecated the `homepage` config as the component that used it - `HomepageTimer` - has been removed and replaced by the `HeaderWorldClock` in the home plugin

### `@backstage/core-plugin-api` (1.0.7 → 1.1.0)

#### 1.1.0

##### Minor Changes

- a228f113d0: The app `Router` component now accepts an optional `basename` property.

### `@backstage/integration` (1.3.2 → 1.4.0)

#### 1.4.0

##### Minor Changes

- d05e1841ce: This patch brings Gitea as a valid integration: target, via the ScmIntegration interface. It adds gitea to the relevant static properties (get integration by name, get integration by type) for plugins to be able to reference the same Gitea server.
- c1784a4980: Replaces in-code uses of `GitHub` with `Github` and deprecates old versions.

  Deprecates:

  - `getGitHubFileFetchUrl` replaced by `getGithubFileFetchUrl`
  - `GitHubIntegrationConfig` replaced by `GithubIntegrationConfig`
  - `GitHubIntegration` replaced by `GithubIntegration`
  - `readGitHubIntegrationConfig` replaced by `readGithubIntegrationConfig`
  - `readGitHubIntegrationConfigs` replaced by `readGithubIntegrationConfigs`
  - `replaceGitHubUrlType` replaced by `replaceGithubUrlType`

##### Patch Changes

- 7573b65232: Internal refactor of imports to avoid circular dependencies
- a6d779d58a: Remove explicit default visibility at `config.d.ts` files.

  ```ts
  /**
   * @visibility backend
   */
  ```

### `@backstage/plugin-scaffolder` (1.7.0 → 1.8.0)

#### 1.8.0

##### Minor Changes

- edae17309e: Added props to override default Scaffolder page title, subtitle and pageTitleOverride.
  Routes like `rootRouteRef`, `selectedTemplateRouteRef`, `nextRouteRef`, `nextSelectedTemplateRouteRef` were made public and can be used in your app (e.g. in custom TemplateCard component).

##### Patch Changes

- 580285787d: The `create` and `click` analytics events are now also captured on the "next" version of the component creation page.
- 4830a3569f: Basic analytics instrumentation is now in place:

  - As users make their way through template steps, a `click` event is fired, including the step number.
  - After a user clicks "Create" a `create` event is fired, including the name of the software that was just created. The template used at creation is set on the `entityRef` context key.

- 94b7ca9c6d: Updated to use `@rjsf` packages of version `^5.0.0-beta.12`
- 87840c8c6c: Fixed tiny grammar error in EntityNamePicker. The first letter of the description is now capitalized.
- 3b3fc3cc3c: Fix `formData` not being present in the `next` version
- b2bb48a6f4: Fix the return type for the `createNextScaffodlerFieldExtension` type as before it wasn't a component type for the extension
- f905853ad6: Prefer using `Link` from `@backstage/core-components` rather than material-UI.

### `@backstage/plugin-scaffolder-backend` (1.7.0 → 1.8.0)

#### 1.8.0

##### Minor Changes

- ea14eb62a2: Added a set of default Prometheus metrics around scaffolding. See below for a list of metrics and an explanation of their labels:

  - `scaffolder_task_count`: Tracks successful task runs.

    Labels:

    - `template`: The entity ref of the scaffolded template
    - `user`: The entity ref of the user that invoked the template run
    - `result`: A string describing whether the task ran successfully, failed, or was skipped

  - `scaffolder_task_duration`: a histogram which tracks the duration of a task run

    Labels:

    - `template`: The entity ref of the scaffolded template
    - `result`: A boolean describing whether the task ran successfully

  - `scaffolder_step_count`: a count that tracks each step run

    Labels:

    - `template`: The entity ref of the scaffolded template
    - `step`: The name of the step that was run
    - `result`: A string describing whether the task ran successfully, failed, or was skipped

  - `scaffolder_step_duration`: a histogram which tracks the duration of each step run

    Labels:

    - `template`: The entity ref of the scaffolded template
    - `step`: The name of the step that was run
    - `result`: A string describing whether the task ran successfully, failed, or was skipped

  You can find a guide for running Prometheus metrics here: https://github.com/backstage/backstage/blob/384b7bac2e/contrib/docs/tutorials/prometheus-metrics.md

- 5921b5ce49: - The GitLab Project ID for the `publish:gitlab:merge-request` action is now passed through the query parameter `project` in the `repoUrl`. It still allows people to not use the `projectid` and use the `repoUrl` with the `owner` and `repo` query parameters instead. This makes it easier to publish to repositories instead of writing the full path to the project.
- 5025d2e8b6: Adds the ability to pass (an optional) array of strings that will be applied to the newly scaffolded repository as topic labels.

##### Patch Changes

- 7573b65232: Internal refactor of imports to avoid circular dependencies
- 969a8444ea: Updated dependency `esbuild` to `^0.15.0`.
- 9ff4ff3745: Implement "Branch protection rules" support for "publish:github" action

### `@backstage/plugin-techdocs` (1.3.3 → 1.4.0)

#### 1.4.0

##### Minor Changes

- 5691baea69: Add ability to configure filters when using EntityListDocsGrid

  The following example will render two sections of cards grid:

  - One section for documentations tagged as `recommended`
  - One section for documentations tagged as `runbook`

  ```js
  <EntityListDocsGrid groups={{[
    {
      title: "Recommended Documentation",
      filterPredicate: entity =>
        entity?.metadata?.tags?.includes('recommended') ?? false,
    },
    {
      title: "RunBooks Documentation",
      filterPredicate: entity =>
        entity?.metadata?.tags?.includes('runbook') ?? false,
    }
  ]}} />
  ```

- 63705e73d9: Hide document description if not provided
- 847fc588a6: Updated TechDocs header to include label for source code icon and updated label to reflect Kind name

##### Patch Changes

- 9e4d8e6198: Fix logic bug that broke techdocs-cli-embedded-app
- e92aa15f01: Bumped `canvas` dependency to the latest version, which has better Node.js v18 support.
- cbe11d1e23: Tweak README
- 7573b65232: Internal refactor of imports to avoid circular dependencies
- c1784a4980: Replaces in-code uses of `GitHub` with `Github` and deprecates old versions.
- 3a1a999b7b: Include query parameters when navigating to relative links in documents
- bd2aab4726: An analytics event matching the semantics of the `click` action is now captured when users click links within a TechDocs document.

## Other patch version bumps

### `@backstage/backend-tasks` (0.3.6 → 0.3.7)

#### 0.3.7

##### Patch Changes

- 30e43717c7: Deprecated the `HumanDuration` type, which should now instead be imported from `@backstage/types`.

### `@backstage/backend-test-utils` (0.1.29 → 0.1.30)

#### 0.1.30

##### Patch Changes

- e13cd3feaf: Updated dependency `msw` to `^0.48.0`.

### `@backstage/catalog-model` (1.1.2 → 1.1.3)

#### 1.1.3

##### Patch Changes

- 7573b65232: Internal refactor of imports to avoid circular dependencies

### `@backstage/codemods` (0.1.40 → 0.1.41)

#### 0.1.41

##### Patch Changes

- 58502ec285: Updated dependency `jscodeshift` to `^0.14.0`.

### `@backstage/create-app` (0.4.33 → 0.4.34)

#### 0.4.34

##### Patch Changes

- f1c3cdfb2d: Bumped create-app version.
- df21bbd4ad: The [Analytics API](https://backstage.io/docs/plugins/analytics) is the recommended way to track usage in Backstage; an optionally installable [Google Analytics module](https://github.com/backstage/community-plugins/tree/main/workspaces/analytics/plugins/analytics-module-ga#installation) has superseded the old app.googleAnalyticsTrackingId config and its corresponding script tags in packages/app/public/index.html.

  For an existing installation where you want to remove the redundant app.googleAnalyticsTrackingId, you should make the following adjustment to `packages/app/public/index.html`:

  ```diff
      <title><%= config.getString('app.title') %></title>
  -   <% if (config.has('app.googleAnalyticsTrackingId')) { %>
  -   <script
  -       async
  -       src="https://www.googletagmanager.com/gtag/js?id=<%= config.getString('app.googleAnalyticsTrackingId') %>"
  -   ></script>
  -   <script>
  -       window.dataLayer = window.dataLayer || [];
  -       function gtag() {
  -       dataLayer.push(arguments);
  -       }
  -       gtag('js', new Date());
  -       gtag(
  -       'config',
  -       '<%= config.getString("app.googleAnalyticsTrackingId") %>',
  -       );
  -   </script>
  -   <% } %>
  </head>
  ```

  Additionally, you should make the following adjustment to `app-config.yaml`:

  ```diff
  app:
    title: Backstage Example App
    baseUrl: http://localhost:3000
  - googleAnalyticsTrackingId: # UA-000000-0
  ```

- 4091c73e68: Updated `@swc/core` to `v1.3.9` which fixes a `.tsx` parser bug. You may want to run `yarn backstage-cli versions:bump` to get on latest version including the CLI itself.
- 80bfac5266: Updated the create-app command to no longer require Git to be installed and configured. A git repository will only be initialized if possible and if not already in an git repository.
- 286d474675: The `build` script in the root `package.json` has been split into two separate scripts, `build:backend` and `build:all`. This is to more accurately reflect what is being built, to avoid confusion.

  If you want to build the project for a production deployment, you will want to use `build:backend`, as this builds both the frontend and backend package. If you are not using the `app-backend` plugin you will want to add your own `build:frontend` script, to which you can pass additional configuration parameters if needed.

  The `build:all` script is useful if you simply want to check that it is possible to build all packages in the project. This might be useful as a CI check, but is generally unnecessary.

  If you want to publish the packages in your repository you can add a `build:packages` script that calls `backstage-cli repo build`. This will skip the frontend and backend packages builds, as those are quite time consuming.

  To apply these changes to an existing project, make the following change to the root `package.json` file:

  ```diff
  -    "build": "backstage-cli repo build --all",
  +    "build:backend": "yarn workspace backend build",
  +    "build:all": "backstage-cli repo build --all",
  ```

  There are also a couple of places where documentation has been updated, see the [upgrade helper](https://backstage.github.io/upgrade-helper/?to=1.8.0) for a full list of changes.

- 384eaa2307: Switched Node.js version to support version 16 & 18, rather than 14 & 16. To switch the Node.js version in your own project, apply the following change to the root `package.json`:

  ```diff
     "engines": {
  -    "node": "14 || 16"
  +    "node": "16 || 18"
     },
  ```

  As well as the following change to `packages/app/package.json`:

  ```diff
  -    "@types/node": "^14.14.32",
  +    "@types/node": "^16.11.26",
  ```

- f905853ad6: Prefer using `Link` from `@backstage/core-components` rather than material-UI.
- 864c876e57: Fixed incorrect comments in the templated `app-config.yaml` and `app-config.production.yaml`. The `backend.listen` directive is not in fact needed to override the `backend.baseUrl`, the backend listens to all interfaces by default. The configuration has also been updated to listen to all interfaces, rather than just IPv4 ones, as this is required for Node.js v18. The production configuration now also shows the option to specify `backend.listen` as a single string.

  To apply this changes to an existing app, make the following change to `app-config.yaml`:

  ```diff
  -    # Uncomment the following host directive to bind to all IPv4 interfaces and
  -    # not just the baseUrl hostname.
  -    # host: 0.0.0.0
  +    # Uncomment the following host directive to bind to specific interfaces
  +    # host: 127.0.0.1
  ```

  And the following change to `app-config.production.yaml`:

  ```diff
  -  listen:
  -    port: 7007
  -    # The following host directive binds to all IPv4 interfaces when its value
  -    # is "0.0.0.0". This is the most permissive setting. The right value depends
  -    # on your specific deployment. If you remove the host line entirely, the
  -    # backend will bind on the interface that corresponds to the backend.baseUrl
  -    # hostname.
  -    host: 0.0.0.0
  +  # The listener can also be expressed as a single <host>:<port> string. In this case we bind to
  +  # all interfaces, the most permissive setting. The right value depends on your specific deployment.
  +  listen: ':7007'
  ```

### `@backstage/plugin-apache-airflow` (0.2.3 → 0.2.4)

#### 0.2.4

##### Patch Changes

- 989731cabf: 1. Added a new column in the table to quickly view the latest DAG runs, plus a link to it if you want to have a deeper look. 2. Table columns are togglable 3. Set hidden columns 4. Fixed bug with turning on/off the DAGs

### `@backstage/plugin-api-docs` (0.8.10 → 0.8.11)

#### 0.8.11

##### Patch Changes

- 4db78c2296: Updated dependency `@asyncapi/react-component` to `1.0.0-next.44`.

### `@backstage/plugin-auth-backend` (0.17.0 → 0.17.1)

#### 0.17.1

##### Patch Changes

- 0d6837ca4e: Fix wrong GitHub callback URL documentation
- cbe11d1e23: Tweak README
- 89d705e806: Add support for custom JWT header name in GCP IAP auth.
- abaed9770e: Improve logging
- d80833fe0c: Inject optional `CatalogApi` into auth-backend `createRouter` function. This will enable developers to use customized `CatalogApi` when creating the router.

### `@backstage/plugin-auth-node` (0.2.6 → 0.2.7)

#### 0.2.7

##### Patch Changes

- 7573b65232: Internal refactor of imports to avoid circular dependencies

### `@backstage/plugin-azure-devops-backend` (0.3.16 → 0.3.17)

#### 0.3.17

##### Patch Changes

- 62f284e394: - Adjusted the asset parser to accept case sensitive
  - Fixed fetching data that was using the deprecated function

### `@backstage/plugin-bitbucket-cloud-common` (0.2.0 → 0.2.1)

#### 0.2.1

##### Patch Changes

- d089fbe7dc: Add interfaces for Bitbucket Cloud (webhook) events.

### `@backstage/plugin-bitrise` (0.1.37 → 0.1.38)

#### 0.1.38

##### Patch Changes

- 43afded227: Updated recharts to v2.0.0 and fixed typing issues

### `@backstage/plugin-catalog` (1.6.0 → 1.6.1)

#### 1.6.1

##### Patch Changes

- f905853ad6: Prefer using `Link` from `@backstage/core-components` rather than material-UI.

### `@backstage/plugin-catalog-backend` (1.5.0 → 1.5.1)

#### 1.5.1

##### Patch Changes

- c1a4addda3: Improve processing error logging.

  Adds `location` and `owner` to the logging meta if they are available.

- a7607b5413: Replace usage of deprecataed `UrlReader.read` with `UrlReader.readUrl`.

### `@backstage/plugin-catalog-backend-module-aws` (0.1.10 → 0.1.11)

#### 0.1.11

##### Patch Changes

- bae3617be5: `AwsS3EntityProvider`: Add option to configure schedule via `app-config.yaml` instead of in code.

  Please find how to configure the schedule at the config at
  https://backstage.io/docs/integrations/aws-s3/discovery

- defb389ecd: Add `awsS3EntityProviderCatalogModule` (new backend-plugin-api, alpha).
- a6d779d58a: Remove explicit default visibility at `config.d.ts` files.

  ```ts
  /**
   * @visibility backend
   */
  ```

### `@backstage/plugin-catalog-backend-module-azure` (0.1.8 → 0.1.9)

#### 0.1.9

##### Patch Changes

- 87ff05892d: `AzureDevOpsEntityProvider`: Add option to configure schedule via `app-config.yaml` instead of in code.

  Please find how to configure the schedule at the config at
  https://backstage.io/docs/integrations/azure/discovery

- 0ca399b31b: Add `azureDevOpsEntityProviderCatalogModule` (new backend-plugin-api, alpha).
- 4c9f7847e4: Updated dependency `msw` to `^0.48.0` while moving it to be a dev dependency.

### `@backstage/plugin-catalog-backend-module-bitbucket` (0.2.4 → 0.2.5)

#### 0.2.5

##### Patch Changes

- 4c9f7847e4: Updated dependency `msw` to `^0.48.0` while moving it to be a dev dependency.

### `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.1.4 → 0.1.5)

#### 0.1.5

##### Patch Changes

- d089fbe7dc: Handle Bitbucket Cloud `repo:push` events at the `BitbucketCloudEntityProvider`
  by subscribing to the topic `bitbucketCloud.repo:push.`

  Implements `EventSubscriber` to receive events for the topic `bitbucketCloud.repo:push`.

  On `repo:push`, the affected repository will be refreshed.
  This includes adding new Location entities, refreshing existing ones,
  and removing obsolete ones.

  To support this, a new annotation `bitbucket.org/repo-url` was added
  to Location entities.

  A full refresh will require 1 API call to Bitbucket Cloud to discover all catalog files.
  When we handle one `repo:push` event, we also need 1 API call in order to know
  which catalog files exist.
  This may lead to more discovery-related API calls (code search).
  The main cause for hitting the rate limits are Locations refresh-related operations.

  A reduction of total API calls to reduce the rate limit issues can only be achieved in
  combination with

  1. reducing the full refresh frequency (e.g., to monthly)
  2. reducing the frequency of general Location refresh operations by the processing loop

  For (2.), it is not possible to reduce the frequency only for Bitbucket Cloud-related
  Locations though.

  Further optimizations might be required to resolve the rate limit issue.

  **Installation and Migration**

  Please find more information at
  https://backstage.io/docs/integrations/bitbucketCloud/discovery,
  in particular the section about "_Installation with Events Support_".

  In case of the new backend-plugin-api _(alpha)_ the module will take care of
  registering itself at both.

### `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.2 → 0.1.3)

#### 0.1.3

##### Patch Changes

- 68f7f5a857: `BitbucketServerEntityProvider`: Add option to configure schedule via `app-config.yaml` instead of in code.

  Please find how to configure the schedule at the config at
  https://backstage.io/docs/integrations/bitbucketServer/discovery

- cd48ed8370: Add `bitbucketServerEntityProviderCatalogModule` (new backend-plugin-api, alpha).

### `@backstage/plugin-catalog-backend-module-gerrit` (0.1.5 → 0.1.6)

#### 0.1.6

##### Patch Changes

- 4fba50f5d4: Add `gerritEntityProviderCatalogModule` (new backend-plugin-api, alpha).
- 4c9f7847e4: Updated dependency `msw` to `^0.48.0` while moving it to be a dev dependency.
- 134b69f478: `GerritEntityProvider`: Add option to configure schedule via `app-config.yaml` instead of in code.

  Please find how to configure the schedule at the config at
  https://backstage.io/docs/integrations/gerrit/discovery

- a6d779d58a: Remove explicit default visibility at `config.d.ts` files.

  ```ts
  /**
   * @visibility backend
   */
  ```

### `@backstage/plugin-catalog-backend-module-gitlab` (0.1.8 → 0.1.9)

#### 0.1.9

##### Patch Changes

- 6bb046bcbe: Add `gitlabDiscoveryEntityProviderCatalogModule` (new backend-plugin-api, alpha).
- 81cedb5033: `GitlabDiscoveryEntityProvider`: Add option to configure schedule via `app-config.yaml` instead of in code.

  Please find how to configure the schedule at the config at
  <https://backstage.io/docs/integrations/gitlab/discovery>

- 4c9f7847e4: Updated dependency `msw` to `^0.48.0` while moving it to be a dev dependency.

### `@backstage/plugin-catalog-backend-module-msgraph` (0.4.3 → 0.4.4)

#### 0.4.4

##### Patch Changes

- 0e37858f22: Added cause information to logged warnings
- 8d1a5e08ca: `MicrosoftGraphOrgEntityProvider`: Add option to configure schedule via `app-config.yaml` instead of in code.

  Please find how to configure the schedule at the config at
  https://github.com/backstage/backstage/tree/master/plugins/catalog-backend-module-msgraph#readme

- 384f99c276: Add `microsoftGraphOrgEntityProviderCatalogModule` (new backend-plugin-api, alpha).

### `@backstage/plugin-catalog-backend-module-openapi` (0.1.3 → 0.1.4)

#### 0.1.4

##### Patch Changes

- 4ce887400d: Added support to use the `UrlReaders` when `$ref` pointing to a URL.

### `@backstage/plugin-catalog-graph` (0.2.22 → 0.2.23)

#### 0.2.23

##### Patch Changes

- da0bf25d1a: Preserve graph options and increment `maxDepth` by 1.

  The change will preserve options used at the `CatalogGraphCard`
  (displayed at the entity page) and additionally, increments the
  `maxDepth` option by 1 to increase the scope slightly compared to
  the graph already seen by the users.

  The default for `maxDepth` at `CatalogGraphCard` is 1.

- 21d84ef332: feat: Enable theme overrides for components in catalog-graph plugin

### `@backstage/plugin-catalog-import` (0.9.0 → 0.9.1)

#### 0.9.1

##### Patch Changes

- 1e7b640518: Get rid of `this-is-undefined-in-esm` warning
- c1784a4980: Replaces in-code uses of `GitHub` with `Github` and deprecates old versions.

### `@backstage/plugin-catalog-react` (1.2.0 → 1.2.1)

#### 1.2.1

##### Patch Changes

- a889314692: Both `EntityProvider` and `AsyncEntityProvider` contexts now wrap all children with an `AnalyticsContext` containing the corresponding `entityRef`; this opens up the possibility for all events underneath these contexts to be associated with and aggregated by the corresponding entity.
- e47f466f80: Removed forced capitalization for Entity types in the catalog sidebar.

### `@backstage/plugin-circleci` (0.3.10 → 0.3.11)

#### 0.3.11

##### Patch Changes

- 383574c49b: Update screenshots in documentation to match latest CircleCI plugin
- f905853ad6: Prefer using `Link` from `@backstage/core-components` rather than material-UI.

### `@backstage/plugin-cloudbuild` (0.3.10 → 0.3.11)

#### 0.3.11

##### Patch Changes

- f905853ad6: Prefer using `Link` from `@backstage/core-components` rather than material-UI.

### `@backstage/plugin-code-coverage` (0.2.3 → 0.2.4)

#### 0.2.4

##### Patch Changes

- fcab2579a0: Adds installation instructions
- 43afded227: Updated recharts to v2.0.0 and fixed typing issues

### `@backstage/plugin-code-coverage-backend` (0.2.3 → 0.2.4)

#### 0.2.4

##### Patch Changes

- fcab2579a0: Adds installation instructions

### `@backstage/plugin-dynatrace` (1.0.0 → 1.0.1)

#### 1.0.1

##### Patch Changes

- cbe11d1e23: Tweak README
- f905853ad6: Prefer using `Link` from `@backstage/core-components` rather than material-UI.

### `@backstage/plugin-explore` (0.3.41 → 0.3.42)

#### 0.3.42

##### Patch Changes

- 5c25ce6d9e: Added a section to explore plugin README that describes the customization of explore tools content.

### `@backstage/plugin-gcalendar` (0.3.6 → 0.3.7)

#### 0.3.7

##### Patch Changes

- 7573b65232: Internal refactor of imports to avoid circular dependencies
- f905853ad6: Prefer using `Link` from `@backstage/core-components` rather than material-UI.

### `@backstage/plugin-git-release-manager` (0.3.23 → 0.3.24)

#### 0.3.24

##### Patch Changes

- 43afded227: Updated recharts to v2.0.0 and fixed typing issues
- c1784a4980: Replaces in-code uses of `GitHub` with `Github` and deprecates old versions.

### `@backstage/plugin-github-actions` (0.5.10 → 0.5.11)

#### 0.5.11

##### Patch Changes

- ed438a3ba5: Add error panel when the plugin fails.
- 0d6837ca4e: Fix wrong GitHub callback URL documentation
- c1784a4980: Replaces in-code uses of `GitHub` with `Github` and deprecates old versions.
- f905853ad6: Prefer using `Link` from `@backstage/core-components` rather than material-UI.

### `@backstage/plugin-github-pull-requests-board` (0.1.4 → 0.1.5)

#### 0.1.5

##### Patch Changes

- cc8bfc56c3: Add a new "Team" Filter Options to the Github Pull Requests Dashboard.

  When toggling this option on, the dashboard will displays all of the PRs opened
  by the members of that team on any repositories of the organization.

- c1784a4980: Replaces in-code uses of `GitHub` with `Github` and deprecates old versions.

### `@backstage/plugin-gitops-profiles` (0.3.28 → 0.3.29)

#### 0.3.29

##### Patch Changes

- f905853ad6: Prefer using `Link` from `@backstage/core-components` rather than material-UI.

### `@backstage/plugin-jenkins` (0.7.9 → 0.7.10)

#### 0.7.10

##### Patch Changes

- f905853ad6: Prefer using `Link` from `@backstage/core-components` rather than material-UI.

### `@backstage/plugin-kafka` (0.3.10 → 0.3.11)

#### 0.3.11

##### Patch Changes

- f905853ad6: Prefer using `Link` from `@backstage/core-components` rather than material-UI.

### `@backstage/plugin-kubernetes` (0.7.3 → 0.7.4)

#### 0.7.4

##### Patch Changes

- cfb30b700c: Pin `@kubernetes/client-node` version to `0.17.0`.

### `@backstage/plugin-pagerduty` (0.5.3 → 0.5.4)

#### 0.5.4

##### Patch Changes

- f905853ad6: Prefer using `Link` from `@backstage/core-components` rather than material-UI.

### `@backstage/plugin-periskop` (0.1.8 → 0.1.9)

#### 0.1.9

##### Patch Changes

- 7573b65232: Internal refactor of imports to avoid circular dependencies

### `@backstage/plugin-permission-common` (0.7.0 → 0.7.1)

#### 0.7.1

##### Patch Changes

- 7573b65232: Internal refactor of imports to avoid circular dependencies
- 64848c963c: Properly handle rules that have no parameters in `PermissionClient`

### `@backstage/plugin-playlist` (0.1.1 → 0.1.2)

#### 0.1.2

##### Patch Changes

- 605f269f0d: Updated Playlist plugin docs:

  - Updated `playlist` plugin README to include note about installing backend plugin and added images for the various features
  - Updated `playlist-backend` plugin README to remove `IdentityClient` import in example as it is not used and made minor change to headings

### `@backstage/plugin-playlist-backend` (0.2.0 → 0.2.1)

#### 0.2.1

##### Patch Changes

- 605f269f0d: Updated Playlist plugin docs:

  - Updated `playlist` plugin README to include note about installing backend plugin and added images for the various features
  - Updated `playlist-backend` plugin README to remove `IdentityClient` import in example as it is not used and made minor change to headings

### `@backstage/plugin-rollbar` (0.4.10 → 0.4.11)

#### 0.4.11

##### Patch Changes

- f905853ad6: Prefer using `Link` from `@backstage/core-components` rather than material-UI.

### `@backstage/plugin-stack-overflow` (0.1.6 → 0.1.7)

#### 0.1.7

##### Patch Changes

- e32d5643e3: `StackOverflowSearchResultListItem` now accept optional rank property to be able to capture rank analytics data.

### `@backstage/plugin-stack-overflow-backend` (0.1.6 → 0.1.7)

#### 0.1.7

##### Patch Changes

- cbe11d1e23: Tweak README
- a6d779d58a: Remove explicit default visibility at `config.d.ts` files.

  ```ts
  /**
   * @visibility backend
   */
  ```

### `@backstage/plugin-tech-insights` (0.3.2 → 0.3.3)

#### 0.3.3

##### Patch Changes

- 7095e8bc03: Fixed bug when sending data by Post in `runChecks` and `runBulkChecks` functions of the `TechInsightsClient` class, the default `Content-Type` used was `plain/text`

### `@backstage/plugin-tech-insights-backend` (0.5.3 → 0.5.4)

#### 0.5.4

##### Patch Changes

- f12e9e5b8c: Add Documentation on 404 Errors
- 06cf8f1cf2: Add a default delay to the fact retrievers to prevent cold-start errors
- 30e43717c7: Use `HumanDuration` from `@backstage/types`

### `@backstage/plugin-tech-insights-node` (0.3.5 → 0.3.6)

#### 0.3.6

##### Patch Changes

- 06cf8f1cf2: Add a default delay to the fact retrievers to prevent cold-start errors
- 30e43717c7: Use `HumanDuration` from `@backstage/types`

### `@backstage/plugin-tech-radar` (0.5.17 → 0.5.18)

#### 0.5.18

##### Patch Changes

- 1f888af5f6: Fixed bug in Tech Radar where, on hover, the tech list quadrant would rerender and scroll top

### `@backstage/plugin-techdocs-backend` (1.4.0 → 1.4.1)

#### 1.4.1

##### Patch Changes

- a7607b5413: Replace usage of deprecataed `UrlReader.read` with `UrlReader.readUrl`.
- a6d779d58a: Remove explicit default visibility at `config.d.ts` files.

  ```ts
  /**
   * @visibility backend
   */
  ```

### `@backstage/plugin-techdocs-module-addons-contrib` (1.0.5 → 1.0.6)

#### 1.0.6

##### Patch Changes

- c1784a4980: Replaces in-code uses of `GitHub` with `Github` and deprecates old versions.

### `@backstage/plugin-techdocs-node` (1.4.1 → 1.4.2)

#### 1.4.2

##### Patch Changes

- a7607b5413: Replace usage of deprecataed `UrlReader.read` with `UrlReader.readUrl`.

### `@backstage/plugin-techdocs-react` (1.0.5 → 1.0.6)

#### 1.0.6

##### Patch Changes

- 7d1352d459: Analytics events captured within the `<TechDocsReaderPageProvider>` now include the conventional `entityRef` context value, associating those events with their corresponding entity.

### `@backstage/plugin-vault-backend` (0.2.3 → 0.2.4)

#### 0.2.4

##### Patch Changes

- 687237da4c: Added `errorHandler()` middleware to `router` to prevent crashes caused by fatal errors in plugin backend

### `@backstage/plugin-xcmetrics` (0.2.30 → 0.2.31)

#### 0.2.31

##### Patch Changes

- 7573b65232: Internal refactor of imports to avoid circular dependencies
- 43afded227: Updated recharts to v2.0.0 and fixed typing issues
- dcf9e728de: Removed an unused and hidden build details route.

### `@backstage/types` (1.0.0 → 1.0.1)

#### 1.0.1

##### Patch Changes

- 30e43717c7: Added the `HumanDuration` type, moved here from `@backstage/backend-tasks`. This type matches the `Duration.fromObject` form of `luxon`.

### `@backstage/version-bridge` (1.0.1 → 1.0.2)

#### 1.0.2

##### Patch Changes

- e70984325d: Updated the value created by `createVersionedValueMap` to give it an extra hidden property that makes it easier to inspect during debugging.

_Excluded dependency updates for packages: `@backstage/app-defaults`, `@backstage/backend-app-api`, `@backstage/backend-defaults`, `@backstage/backend-plugin-api`, `@backstage/catalog-client`, `@backstage/config`, `@backstage/config-loader`, `@backstage/dev-utils`, `@backstage/errors`, `@backstage/integration-react`, `@backstage/plugin-adr`, `@backstage/plugin-adr-backend`, `@backstage/plugin-adr-common`, `@backstage/plugin-airbrake`, `@backstage/plugin-airbrake-backend`, `@backstage/plugin-allure`, `@backstage/plugin-analytics-module-ga`, `@backstage/plugin-apollo-explorer`, `@backstage/plugin-app-backend`, `@backstage/plugin-azure-devops`, `@backstage/plugin-badges`, `@backstage/plugin-badges-backend`, `@backstage/plugin-bazaar-backend`, `@backstage/plugin-catalog-backend-module-ldap`, `@backstage/plugin-catalog-common`, `@backstage/plugin-catalog-graphql`, `@backstage/plugin-catalog-node`, `@backstage/plugin-cicd-statistics`, `@backstage/plugin-cicd-statistics-module-gitlab`, `@backstage/plugin-code-climate`, `@backstage/plugin-codescene`, `@backstage/plugin-config-schema`, `@backstage/plugin-explore-react`, `@backstage/plugin-firehydrant`, `@backstage/plugin-fossa`, `@backstage/plugin-gcp-projects`, `@backstage/plugin-github-deployments`, `@backstage/plugin-gocd`, `@backstage/plugin-graphiql`, `@backstage/plugin-graphql-backend`, `@backstage/plugin-home`, `@backstage/plugin-jenkins-backend`, `@backstage/plugin-jenkins-common`, `@backstage/plugin-kafka-backend`, `@backstage/plugin-lighthouse`, `@backstage/plugin-newrelic`, `@backstage/plugin-newrelic-dashboard`, `@backstage/plugin-periskop-backend`, `@backstage/plugin-permission-backend`, `@backstage/plugin-permission-node`, `@backstage/plugin-permission-react`, `@backstage/plugin-playlist-common`, `@backstage/plugin-proxy-backend`, `@backstage/plugin-rollbar-backend`, `@backstage/plugin-scaffolder-backend-module-cookiecutter`, `@backstage/plugin-scaffolder-backend-module-rails`, `@backstage/plugin-scaffolder-backend-module-yeoman`, `@backstage/plugin-scaffolder-common`, `@backstage/plugin-search`, `@backstage/plugin-search-backend`, `@backstage/plugin-search-backend-module-elasticsearch`, `@backstage/plugin-search-backend-module-pg`, `@backstage/plugin-search-backend-node`, `@backstage/plugin-search-common`, `@backstage/plugin-search-react`, `@backstage/plugin-sentry`, `@backstage/plugin-shortcuts`, `@backstage/plugin-sonarqube-backend`, `@backstage/plugin-tech-insights-backend-module-jsonfc`, `@backstage/plugin-tech-insights-common`, `@backstage/plugin-techdocs-addons-test-utils`, `@backstage/plugin-todo`, `@backstage/plugin-todo-backend`, `@backstage/plugin-user-settings`, `@backstage/plugin-user-settings-backend`, `@backstage/plugin-vault`, `@backstage/test-utils`, `@techdocs/cli`._
