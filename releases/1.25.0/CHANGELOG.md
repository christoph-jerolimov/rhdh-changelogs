# Backstage Release 1.25.0 changelog

Changes between 1.24.2 and 1.25.0 — 225 changed and 0 added packages.

## `@backstage/backend-app-api` (0.6.1 → 0.6.2)

### 0.6.2

#### Patch Changes

- e848644: Temporarily revert the rate limiting

## `@backstage/backend-common` (0.21.5 → 0.21.6)

### 0.21.6

#### Patch Changes

- 81a995f: Updated dependency `aws-sdk-client-mock` to `^4.0.0`.

## `@backstage/catalog-client` (1.6.2 → 1.6.3)

### 1.6.3

#### Patch Changes

- 7e8a7c8: Added missing commas to the example of `queryEntities`

## `@backstage/cli` (0.26.1 → 0.26.2)

### 0.26.2

#### Patch Changes

- eeb226a: Updated dependency `rollup` to `^4.0.0`.
- 91192f4: Updated backend plugin template to work better with new backend system
- cc371d6: Ignore transforming only on `react-use/lib`, not whole `react-use` in jest.

  ** POTENTIAL BREAKAGE **
  If your tests fail, please change to use path import from `react-use/esm/`. It is also recommended to migrate from `react-user/lib` imports to `react-use/esm`

## `@backstage/core-app-api` (1.12.2 → 1.12.3)

### 1.12.3

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/core-components` (0.14.2 → 0.14.3)

### 0.14.3

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/create-app` (0.5.12 → 0.5.13)

### 0.5.13

#### Patch Changes

- Bumped create-app version.

## `@backstage/dev-utils` (1.0.29 → 1.0.30)

### 1.0.30

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/integration-aws-node` (0.1.11 → 0.1.12)

### 0.1.12

#### Patch Changes

- 81a995f: Updated dependency `aws-sdk-client-mock` to `^4.0.0`.
- 823cf8e: Updated dependency `aws-sdk-client-mock-jest` to `^4.0.0`.

## `@backstage/plugin-adr` (0.6.15 → 0.6.16)

### 0.6.16

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-airbrake` (0.3.32 → 0.3.33)

### 0.3.33

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-allure` (0.1.48 → 0.1.49)

### 0.1.49

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-apache-airflow` (0.2.22 → 0.2.23)

### 0.2.23

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-auth-backend` (0.22.2 → 0.22.3)

### 0.22.3

#### Patch Changes

- 038b2e6: Only consider entities of kind `User` when using `findCatalogUser` with a filter query, unless an explicit `kind` filter is provided.

## `@backstage/plugin-auth-backend-module-guest-provider` (0.1.1 → 0.1.2)

### 0.1.2

#### Patch Changes

- 4cc8279: Add installation instructions

## `@backstage/plugin-auth-node` (0.4.10 → 0.4.11)

### 0.4.11

#### Patch Changes

- 038b2e6: Only consider entities of kind `User` when using `findCatalogUser` with a filter query, unless an explicit `kind` filter is provided.

## `@backstage/plugin-azure-devops` (0.4.1 → 0.4.2)

### 0.4.2

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-azure-sites` (0.1.21 → 0.1.22)

### 0.1.22

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-badges` (0.2.56 → 0.2.57)

### 0.2.57

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-bazaar` (0.2.24 → 0.2.25)

### 0.2.25

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-bitrise` (0.1.59 → 0.1.60)

### 0.1.60

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-catalog` (1.18.1 → 1.18.2)

### 1.18.2

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- bbbd510: `CatalogIndexPage` now uses `EntitySearchBar` for text-based filtering of entities, saving the search text in the query parameters and debouncing the server requests.

## `@backstage/plugin-catalog-backend` (1.20.0 → 1.21.0)

### 1.21.0

#### Minor Changes

- f3e2e86: Added the ability to inject custom permissions from modules, on `CatalogBuilder` and `CatalogPermissionExtensionPoint`

## `@backstage/plugin-catalog-backend-module-aws` (0.3.10 → 0.3.11)

### 0.3.11

#### Patch Changes

- 81a995f: Updated dependency `aws-sdk-client-mock` to `^4.0.0`.
- 823cf8e: Updated dependency `aws-sdk-client-mock-jest` to `^4.0.0`.

## `@backstage/plugin-catalog-backend-module-unprocessed` (0.4.2 → 0.4.3)

### 0.4.3

#### Patch Changes

- f3e2e86: Internal update that injects custom permissions into the catalog using its extension point

## `@backstage/plugin-catalog-graph` (0.4.2 → 0.4.3)

### 0.4.3

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-catalog-import` (0.10.8 → 0.10.9)

### 0.10.9

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-catalog-node` (1.10.0 → 1.11.0)

### 1.11.0

#### Minor Changes

- f3e2e86: Added the ability to inject custom permissions from modules, on `CatalogBuilder` and `CatalogPermissionExtensionPoint`

## `@backstage/plugin-catalog-react` (1.11.1 → 1.11.2)

### 1.11.2

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- b5cbbb6: `EntitySearchBar` and `EntityTextFilter` have been updated accordingly to persist the status as query params, following the same pattern as the other server side

## `@backstage/plugin-catalog-unprocessed-entities` (0.2.1 → 0.2.2)

### 0.2.2

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-cicd-statistics` (0.1.34 → 0.1.35)

### 0.1.35

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-circleci` (0.3.32 → 0.3.33)

### 0.3.33

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-cloudbuild` (0.4.2 → 0.5.0)

### 0.5.0

#### Minor Changes

- 5a78b73: Added a new column to `EntityCloudbuildContent` displaying the trigger name for each build.

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-code-climate` (0.1.32 → 0.1.33)

### 0.1.33

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-code-coverage` (0.2.25 → 0.2.26)

### 0.2.26

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-codescene` (0.1.24 → 0.1.25)

### 0.1.25

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-config-schema` (0.1.52 → 0.1.53)

### 0.1.53

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-cost-insights` (0.12.21 → 0.12.22)

### 0.12.22

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-devtools` (0.1.11 → 0.1.12)

### 0.1.12

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-dynatrace` (10.0.1 → 10.0.2)

### 10.0.2

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-entity-feedback` (0.2.15 → 0.2.16)

### 0.2.16

#### Patch Changes

- 12610b4: Added ESLint rule `no-top-level-material-ui-4-imports` in the `entity-feedback` plugin to migrate the Material UI imports.
- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-entity-validation` (0.1.17 → 0.1.18)

### 0.1.18

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- 2ec4a8d: Added ESLint rule `no-top-level-material-ui-4-imports` in the `entity-validation` plugin to migrate the Material UI imports.

## `@backstage/plugin-events-backend-module-aws-sqs` (0.3.1 → 0.3.2)

### 0.3.2

#### Patch Changes

- 81a995f: Updated dependency `aws-sdk-client-mock` to `^4.0.0`.

## `@backstage/plugin-explore` (0.4.18 → 0.4.19)

### 0.4.19

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-firehydrant` (0.2.16 → 0.2.17)

### 0.2.17

#### Patch Changes

- 157c7ae: Added ESLint rule `no-top-level-material-ui-4-imports` in the `firehydrant` plugin to migrate the Material UI imports.
- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-fossa` (0.2.64 → 0.2.65)

### 0.2.65

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-gcalendar` (0.3.25 → 0.3.26)

### 0.3.26

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-gcp-projects` (0.3.48 → 0.3.49)

### 0.3.49

#### Patch Changes

- 7dad59c: Added ESLint rule `no-top-level-material-ui-4-imports` in the `gcp-projects` plugin to migrate the Material UI imports.

## `@backstage/plugin-git-release-manager` (0.3.44 → 0.3.45)

### 0.3.45

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-github-actions` (0.6.13 → 0.6.14)

### 0.6.14

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-github-deployments` (0.1.63 → 0.1.64)

### 0.1.64

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- a1ddc8d: Added ESLint rule `no-top-level-material-ui-4-imports` in the `github-deployments` plugin to migrate the Material UI imports.

## `@backstage/plugin-github-issues` (0.3.0 → 0.4.0)

### 0.4.0

#### Minor Changes

- bc97524: Added ESLint rule `no-top-level-material-ui-4-imports` in the `github-issues` plugin to migrate the Material UI imports.

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-gitops-profiles` (0.3.47 → 0.3.48)

### 0.3.48

#### Patch Changes

- 1a22254: Added ESLint rule `no-top-level-material-ui-4-imports` in the `gitops-profiles` plugin to migrate the Material UI imports.
- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-gocd` (0.1.38 → 0.1.39)

### 0.1.39

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- 4166b10: Added an optional ESLint rule - no-top-level-material-ui-4-imports - which has an auto fix function to migrate the imports and used it to migrate the Material UI imports.

## `@backstage/plugin-graphiql` (0.3.5 → 0.3.6)

### 0.3.6

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-graphql-voyager` (0.1.14 → 0.1.15)

### 0.1.15

#### Patch Changes

- 813f99d: Added ESLint rule `no-top-level-material-ui-4-imports` in the `graphql-voyager` plugin to migrate the Material UI imports.
- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-home` (0.7.1 → 0.7.2)

### 0.7.2

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-ilert` (0.2.21 → 0.2.22)

### 0.2.22

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-jenkins` (0.9.7 → 0.9.8)

### 0.9.8

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-jenkins-backend` (0.4.2 → 0.4.3)

### 0.4.3

#### Patch Changes

- 836247c: Fixed an issue where the `httpAuth` service turned out to be undefined

## `@backstage/plugin-kafka` (0.3.32 → 0.3.33)

### 0.3.33

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-kubernetes-backend` (0.16.2 → 0.16.3)

### 0.16.3

#### Patch Changes

- 9b1abac: Added a new service locator `CatalogRelationServiceLocator` that only returns clusters an entity lists in `relations.dependsOn`.

## `@backstage/plugin-kubernetes-cluster` (0.0.8 → 0.0.9)

### 0.0.9

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- 1c1140e: Added ESLint rule `no-top-level-material-ui-4-imports` in the `kubernetes-cluster` plugin to migrate the Material UI imports.

## `@backstage/plugin-kubernetes-react` (0.3.2 → 0.3.3)

### 0.3.3

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-lighthouse` (0.4.17 → 0.4.18)

### 0.4.18

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-linguist` (0.1.17 → 0.1.18)

### 0.1.18

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-microsoft-calendar` (0.1.14 → 0.1.15)

### 0.1.15

#### Patch Changes

- 4bba771: Added ESLint rule `no-top-level-material-ui-4-imports` in the `microsoft-calender` plugin to migrate the Material UI imports.
- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-newrelic` (0.3.47 → 0.3.48)

### 0.3.48

#### Patch Changes

- f38f7d8: Added an optional ESLint rule - no-top-level-material-ui-4-imports -in cloudbuild plugin which has an auto fix function to migrate the imports and used it to migrate the Material UI imports for plugins/newrelic.
- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-newrelic-dashboard` (0.3.7 → 0.3.8)

### 0.3.8

#### Patch Changes

- 1d81cdd: Added an optional ESLint rule - no-top-level-material-ui-4-imports -in new relic plugin which has an auto fix function to migrate the imports and used it to migrate the Material UI imports for plugins/newrelic-dashboard
- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-nomad` (0.1.13 → 0.1.14)

### 0.1.14

#### Patch Changes

- c116096: Added an optional ESLint rule - no-top-level-material-ui-4-imports -in nomad plugin which has an auto fix function to migrate the imports and used it to migrate the Material UI imports for plugins/nomad.
- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-notifications` (0.1.1 → 0.1.2)

### 0.1.2

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- 6a2fe4b: Added ESLint rule `no-top-level-material-ui-4-imports` in the `notifications` plugin to migrate the Material UI imports.

## `@backstage/plugin-octopus-deploy` (0.2.14 → 0.2.15)

### 0.2.15

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- 004ce71: Added ESLint rule `no-top-level-material-ui-4-imports` in the `octopus-deploy` plugin to migrate the Material UI imports.

## `@backstage/plugin-opencost` (0.2.7 → 0.2.8)

### 0.2.8

#### Patch Changes

- f21ef8c: Added ESLint rule `no-top-level-material-ui-4-imports` in the `opencost` plugin to migrate the Material UI imports.

## `@backstage/plugin-org` (0.6.22 → 0.6.23)

### 0.6.23

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- 0df5c60: Added ESLint rule `no-top-level-material-ui-4-imports` in the `org` plugin to migrate the Material UI imports.

## `@backstage/plugin-org-react` (0.1.21 → 0.1.22)

### 0.1.22

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-pagerduty` (0.7.4 → 0.7.5)

### 0.7.5

#### Patch Changes

- 2b43144: Added ESLint rule `no-top-level-material-ui-4-imports` in the `pagerduty` plugin to migrate the Material UI imports.
- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-periskop` (0.1.30 → 0.1.31)

### 0.1.31

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-permission-backend` (0.5.39 → 0.5.40)

### 0.5.40

#### Patch Changes

- f3e2e86: Properly forward causes of errors from upstream backends in the `PermissionIntegrationClient`

## `@backstage/plugin-playlist` (0.2.6 → 0.2.7)

### 0.2.7

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-proxy-backend` (0.4.13 → 0.4.14)

### 0.4.14

#### Patch Changes

- eae097c: Allow unauthenticated requests.

## `@backstage/plugin-puppetdb` (0.1.15 → 0.1.16)

### 0.1.16

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- 8754b0e: Added ESLint rule `no-top-level-material-ui-4-imports` in the `puppetdb` plugin to migrate the Material UI imports.

## `@backstage/plugin-rollbar` (0.4.32 → 0.4.33)

### 0.4.33

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-scaffolder` (1.19.1 → 1.19.2)

### 1.19.2

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-scaffolder-backend` (1.22.2 → 1.22.3)

### 1.22.3

#### Patch Changes

- c74c2de: Fixed an issue causing actions to fail when retrieving auth credentials

## `@backstage/plugin-scaffolder-react` (1.8.2 → 1.8.3)

### 1.8.3

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-search` (1.4.8 → 1.4.9)

### 1.4.9

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-search-react` (1.7.8 → 1.7.9)

### 1.7.9

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-sentry` (0.5.17 → 0.5.18)

### 0.5.18

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-shortcuts` (0.3.21 → 0.3.22)

### 0.3.22

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-sonarqube` (0.7.14 → 0.7.15)

### 0.7.15

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-splunk-on-call` (0.4.21 → 0.4.22)

### 0.4.22

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-stack-overflow` (0.1.27 → 0.1.28)

### 0.1.28

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-stackstorm` (0.1.13 → 0.1.14)

### 0.1.14

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-tech-insights` (0.3.24 → 0.3.25)

### 0.3.25

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-tech-radar` (0.7.1 → 0.7.2)

### 0.7.2

#### Patch Changes

- 89b093f: Added ESLint rule `no-top-level-material-ui-4-imports` in the `tech-radar` plugin to migrate the Material UI imports.
- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-techdocs` (1.10.2 → 1.10.3)

### 1.10.3

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-techdocs-node` (1.12.1 → 1.12.2)

### 1.12.2

#### Patch Changes

- 81a995f: Updated dependency `aws-sdk-client-mock` to `^4.0.0`.

## `@backstage/plugin-techdocs-react` (1.2.1 → 1.2.2)

### 1.2.2

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-user-settings` (0.8.3 → 0.8.4)

### 0.8.4

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-vault` (0.1.27 → 0.1.28)

### 0.1.28

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@backstage/plugin-xcmetrics` (0.2.50 → 0.2.51)

### 0.2.51

#### Patch Changes

- e8f026a: Use ESM exports of react-use library

## `@techdocs/cli` (1.8.7 → 1.8.8)

### 1.8.8

#### Patch Changes

- 8caf2f7: Fix how the cli server mocks the new auth cookie endpoint.

_Excluded dependency updates for packages: `@backstage/app-defaults`, `@backstage/backend-defaults`, `@backstage/backend-dynamic-feature-service`, `@backstage/backend-openapi-utils`, `@backstage/backend-plugin-api`, `@backstage/backend-tasks`, `@backstage/backend-test-utils`, `@backstage/core-compat-api`, `@backstage/frontend-app-api`, `@backstage/frontend-plugin-api`, `@backstage/frontend-test-utils`, `@backstage/plugin-adr-backend`, `@backstage/plugin-airbrake-backend`, `@backstage/plugin-analytics-module-ga`, `@backstage/plugin-analytics-module-ga4`, `@backstage/plugin-analytics-module-newrelic-browser`, `@backstage/plugin-api-docs`, `@backstage/plugin-apollo-explorer`, `@backstage/plugin-app-backend`, `@backstage/plugin-app-node`, `@backstage/plugin-app-visualizer`, `@backstage/plugin-auth-backend-module-atlassian-provider`, `@backstage/plugin-auth-backend-module-aws-alb-provider`, `@backstage/plugin-auth-backend-module-gcp-iap-provider`, `@backstage/plugin-auth-backend-module-github-provider`, `@backstage/plugin-auth-backend-module-gitlab-provider`, `@backstage/plugin-auth-backend-module-google-provider`, `@backstage/plugin-auth-backend-module-microsoft-provider`, `@backstage/plugin-auth-backend-module-oauth2-provider`, `@backstage/plugin-auth-backend-module-oauth2-proxy-provider`, `@backstage/plugin-auth-backend-module-oidc-provider`, `@backstage/plugin-auth-backend-module-okta-provider`, `@backstage/plugin-auth-backend-module-pinniped-provider`, `@backstage/plugin-auth-backend-module-vmware-cloud-provider`, `@backstage/plugin-auth-react`, `@backstage/plugin-azure-devops-backend`, `@backstage/plugin-azure-sites-backend`, `@backstage/plugin-badges-backend`, `@backstage/plugin-bazaar-backend`, `@backstage/plugin-catalog-backend-module-azure`, `@backstage/plugin-catalog-backend-module-backstage-openapi`, `@backstage/plugin-catalog-backend-module-bitbucket-cloud`, `@backstage/plugin-catalog-backend-module-bitbucket-server`, `@backstage/plugin-catalog-backend-module-gcp`, `@backstage/plugin-catalog-backend-module-gerrit`, `@backstage/plugin-catalog-backend-module-github`, `@backstage/plugin-catalog-backend-module-github-org`, `@backstage/plugin-catalog-backend-module-gitlab`, `@backstage/plugin-catalog-backend-module-incremental-ingestion`, `@backstage/plugin-catalog-backend-module-ldap`, `@backstage/plugin-catalog-backend-module-msgraph`, `@backstage/plugin-catalog-backend-module-openapi`, `@backstage/plugin-catalog-backend-module-puppetdb`, `@backstage/plugin-catalog-backend-module-scaffolder-entity-model`, `@backstage/plugin-cicd-statistics-module-gitlab`, `@backstage/plugin-code-coverage-backend`, `@backstage/plugin-devtools-backend`, `@backstage/plugin-entity-feedback-backend`, `@backstage/plugin-events-backend`, `@backstage/plugin-events-backend-module-azure`, `@backstage/plugin-events-backend-module-bitbucket-cloud`, `@backstage/plugin-events-backend-module-gerrit`, `@backstage/plugin-events-backend-module-github`, `@backstage/plugin-events-backend-module-gitlab`, `@backstage/plugin-events-backend-test-utils`, `@backstage/plugin-events-node`, `@backstage/plugin-explore-backend`, `@backstage/plugin-github-pull-requests-board`, `@backstage/plugin-home-react`, `@backstage/plugin-kafka-backend`, `@backstage/plugin-kubernetes`, `@backstage/plugin-kubernetes-node`, `@backstage/plugin-lighthouse-backend`, `@backstage/plugin-linguist-backend`, `@backstage/plugin-nomad-backend`, `@backstage/plugin-notifications-backend`, `@backstage/plugin-notifications-node`, `@backstage/plugin-periskop-backend`, `@backstage/plugin-permission-backend-module-allow-all-policy`, `@backstage/plugin-permission-node`, `@backstage/plugin-playlist-backend`, `@backstage/plugin-rollbar-backend`, `@backstage/plugin-scaffolder-backend-module-azure`, `@backstage/plugin-scaffolder-backend-module-bitbucket`, `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud`, `@backstage/plugin-scaffolder-backend-module-bitbucket-server`, `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown`, `@backstage/plugin-scaffolder-backend-module-cookiecutter`, `@backstage/plugin-scaffolder-backend-module-gerrit`, `@backstage/plugin-scaffolder-backend-module-gitea`, `@backstage/plugin-scaffolder-backend-module-github`, `@backstage/plugin-scaffolder-backend-module-gitlab`, `@backstage/plugin-scaffolder-backend-module-rails`, `@backstage/plugin-scaffolder-backend-module-sentry`, `@backstage/plugin-scaffolder-backend-module-yeoman`, `@backstage/plugin-scaffolder-node`, `@backstage/plugin-scaffolder-node-test-utils`, `@backstage/plugin-search-backend`, `@backstage/plugin-search-backend-module-catalog`, `@backstage/plugin-search-backend-module-elasticsearch`, `@backstage/plugin-search-backend-module-explore`, `@backstage/plugin-search-backend-module-pg`, `@backstage/plugin-search-backend-module-stack-overflow-collator`, `@backstage/plugin-search-backend-module-techdocs`, `@backstage/plugin-search-backend-node`, `@backstage/plugin-signals`, `@backstage/plugin-signals-backend`, `@backstage/plugin-signals-node`, `@backstage/plugin-sonarqube-backend`, `@backstage/plugin-stack-overflow-backend`, `@backstage/plugin-tech-insights-backend`, `@backstage/plugin-tech-insights-backend-module-jsonfc`, `@backstage/plugin-tech-insights-node`, `@backstage/plugin-techdocs-addons-test-utils`, `@backstage/plugin-techdocs-backend`, `@backstage/plugin-techdocs-module-addons-contrib`, `@backstage/plugin-todo`, `@backstage/plugin-todo-backend`, `@backstage/plugin-user-settings-backend`, `@backstage/plugin-vault-backend`, `@backstage/plugin-vault-node`, `@backstage/repo-tools`, `@backstage/test-utils`._
