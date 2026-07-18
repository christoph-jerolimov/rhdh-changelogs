# Backstage Release 1.1.0 changelog

Changes between 1.0.3 and 1.1.0 — 124 changed and 5 added packages.

## Summary

- [Newly added packages](#newly-added-packages): 5 packages
- [Breaking changes](#breaking-changes): 13 packages
- [0.x minor version bumps](#0x-minor-version-bumps): 4 packages
- [0.0.x patch version bumps](#00x-patch-version-bumps): 1 package
- [Other minor version bumps](#other-minor-version-bumps): 9 packages
- [Other patch version bumps](#other-patch-version-bumps): 76 packages
- [Excluded dependency updates](#excluded-dependency-updates): 21 packages

## Table of contents

- [Newly added packages](#newly-added-packages)
  - [`@backstage/plugin-cicd-statistics-module-gitlab` (new, 0.1.0)](#backstageplugin-cicd-statistics-module-gitlab-new-010)
  - [`@backstage/plugin-search-react` (new, 0.1.0)](#backstageplugin-search-react-new-010)
  - [`@backstage/plugin-stack-overflow` (new, 0.1.0)](#backstageplugin-stack-overflow-new-010)
  - [`@backstage/plugin-stack-overflow-backend` (new, 0.1.0)](#backstageplugin-stack-overflow-backend-new-010)
  - [`@backstage/plugin-techdocs-react` (new, 0.1.0)](#backstageplugin-techdocs-react-new-010)
- [Breaking changes](#breaking-changes)
  - [`@backstage/cli` (0.16.0 → 0.17.0)](#backstagecli-0160--0170)
  - [`@backstage/create-app` (0.4.25 → 0.4.26)](#backstagecreate-app-0425--0426)
  - [`@backstage/plugin-auth-backend` (0.12.3 → 0.13.0)](#backstageplugin-auth-backend-0123--0130)
  - [`@backstage/plugin-auth-node` (0.1.6 → 0.2.0)](#backstageplugin-auth-node-016--020)
  - [`@backstage/plugin-catalog-backend` (1.0.0 → 1.1.0)](#backstageplugin-catalog-backend-100--110)
  - [`@backstage/plugin-kubernetes-backend` (0.4.13 → 0.5.0)](#backstageplugin-kubernetes-backend-0413--050)
  - [`@backstage/plugin-permission-common` (0.5.3 → 0.6.0)](#backstageplugin-permission-common-053--060)
  - [`@backstage/plugin-permission-node` (0.5.5 → 0.6.0)](#backstageplugin-permission-node-055--060)
  - [`@backstage/plugin-permission-react` (0.3.4 → 0.4.0)](#backstageplugin-permission-react-034--040)
  - [`@backstage/plugin-search-backend` (0.4.8 → 0.5.0)](#backstageplugin-search-backend-048--050)
  - [`@backstage/plugin-search-backend-node` (0.5.2 → 0.6.0)](#backstageplugin-search-backend-node-052--060)
  - [`@backstage/plugin-search-common` (0.3.2 → 0.3.3)](#backstageplugin-search-common-032--033)
  - [`@backstage/plugin-tech-insights-backend` (0.2.10 → 0.3.0)](#backstageplugin-tech-insights-backend-0210--030)
- [0.x minor version bumps](#0x-minor-version-bumps)
  - [`@backstage/backend-tasks` (0.2.1 → 0.3.0)](#backstagebackend-tasks-021--030)
  - [`@backstage/plugin-gcalendar` (0.2.0 → 0.3.0)](#backstageplugin-gcalendar-020--030)
  - [`@backstage/plugin-search` (0.7.4 → 0.8.0)](#backstageplugin-search-074--080)
  - [`@backstage/plugin-tech-insights` (0.1.13 → 0.2.0)](#backstageplugin-tech-insights-0113--020)
- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-explore-react` (0.0.15 → 0.0.16)](#backstageplugin-explore-react-0015--0016)
- [Other minor version bumps](#other-minor-version-bumps)
  - [`@backstage/config-loader` (1.0.0 → 1.1.0)](#backstageconfig-loader-100--110)
  - [`@backstage/integration` (1.0.0 → 1.1.0)](#backstageintegration-100--110)
  - [`@backstage/plugin-catalog` (1.0.0 → 1.1.0)](#backstageplugin-catalog-100--110)
  - [`@backstage/plugin-scaffolder` (1.0.1 → 1.1.0)](#backstageplugin-scaffolder-101--110)
  - [`@backstage/plugin-scaffolder-backend` (1.0.0 → 1.1.0)](#backstageplugin-scaffolder-backend-100--110)
  - [`@backstage/plugin-techdocs` (1.0.1 → 1.1.0)](#backstageplugin-techdocs-101--110)
  - [`@backstage/plugin-techdocs-backend` (1.0.0 → 1.1.0)](#backstageplugin-techdocs-backend-100--110)
  - [`@backstage/plugin-techdocs-node` (1.0.0 → 1.1.0)](#backstageplugin-techdocs-node-100--110)
  - [`@techdocs/cli` (1.0.0 → 1.1.0)](#techdocscli-100--110)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/app-defaults` (1.0.0 → 1.0.1)](#backstageapp-defaults-100--101)
  - [`@backstage/backend-common` (0.13.1 → 0.13.2)](#backstagebackend-common-0131--0132)
  - [`@backstage/backend-test-utils` (0.1.22 → 0.1.23)](#backstagebackend-test-utils-0122--0123)
  - [`@backstage/catalog-model` (1.0.0 → 1.0.1)](#backstagecatalog-model-100--101)
  - [`@backstage/codemods` (0.1.36 → 0.1.37)](#backstagecodemods-0136--0137)
  - [`@backstage/core-app-api` (1.0.0 → 1.0.1)](#backstagecore-app-api-100--101)
  - [`@backstage/core-components` (0.9.2 → 0.9.3)](#backstagecore-components-092--093)
  - [`@backstage/core-plugin-api` (1.0.0 → 1.0.1)](#backstagecore-plugin-api-100--101)
  - [`@backstage/dev-utils` (1.0.0 → 1.0.1)](#backstagedev-utils-100--101)
  - [`@backstage/integration-react` (1.0.0 → 1.0.1)](#backstageintegration-react-100--101)
  - [`@backstage/plugin-airbrake` (0.3.3 → 0.3.4)](#backstageplugin-airbrake-033--034)
  - [`@backstage/plugin-allure` (0.1.19 → 0.1.20)](#backstageplugin-allure-0119--0120)
  - [`@backstage/plugin-analytics-module-ga` (0.1.14 → 0.1.15)](#backstageplugin-analytics-module-ga-0114--0115)
  - [`@backstage/plugin-apache-airflow` (0.1.11 → 0.1.12)](#backstageplugin-apache-airflow-0111--0112)
  - [`@backstage/plugin-api-docs` (0.8.3 → 0.8.4)](#backstageplugin-api-docs-083--084)
  - [`@backstage/plugin-azure-devops` (0.1.19 → 0.1.20)](#backstageplugin-azure-devops-0119--0120)
  - [`@backstage/plugin-azure-devops-backend` (0.3.9 → 0.3.10)](#backstageplugin-azure-devops-backend-039--0310)
  - [`@backstage/plugin-badges` (0.2.27 → 0.2.28)](#backstageplugin-badges-0227--0228)
  - [`@backstage/plugin-badges-backend` (0.1.24 → 0.1.25)](#backstageplugin-badges-backend-0124--0125)
  - [`@backstage/plugin-bazaar` (0.1.18 → 0.1.19)](#backstageplugin-bazaar-0118--0119)
  - [`@backstage/plugin-bitrise` (0.1.30 → 0.1.31)](#backstageplugin-bitrise-0130--0131)
  - [`@backstage/plugin-catalog-backend-module-aws` (0.1.3 → 0.1.4)](#backstageplugin-catalog-backend-module-aws-013--014)
  - [`@backstage/plugin-catalog-backend-module-bitbucket` (0.1.1 → 0.1.2)](#backstageplugin-catalog-backend-module-bitbucket-011--012)
  - [`@backstage/plugin-catalog-backend-module-ldap` (0.4.1 → 0.4.2)](#backstageplugin-catalog-backend-module-ldap-041--042)
  - [`@backstage/plugin-catalog-backend-module-msgraph` (0.3.0 → 0.3.1)](#backstageplugin-catalog-backend-module-msgraph-030--031)
  - [`@backstage/plugin-catalog-common` (1.0.0 → 1.0.1)](#backstageplugin-catalog-common-100--101)
  - [`@backstage/plugin-catalog-graph` (0.2.15 → 0.2.16)](#backstageplugin-catalog-graph-0215--0216)
  - [`@backstage/plugin-catalog-import` (0.8.6 → 0.8.7)](#backstageplugin-catalog-import-086--087)
  - [`@backstage/plugin-catalog-react` (1.0.0 → 1.0.1)](#backstageplugin-catalog-react-100--101)
  - [`@backstage/plugin-circleci` (0.3.3 → 0.3.4)](#backstageplugin-circleci-033--034)
  - [`@backstage/plugin-cloudbuild` (0.3.3 → 0.3.4)](#backstageplugin-cloudbuild-033--034)
  - [`@backstage/plugin-code-climate` (0.1.3 → 0.1.4)](#backstageplugin-code-climate-013--014)
  - [`@backstage/plugin-code-coverage` (0.1.30 → 0.1.31)](#backstageplugin-code-coverage-0130--0131)
  - [`@backstage/plugin-config-schema` (0.1.26 → 0.1.27)](#backstageplugin-config-schema-0126--0127)
  - [`@backstage/plugin-cost-insights` (0.11.25 → 0.11.26)](#backstageplugin-cost-insights-01125--01126)
  - [`@backstage/plugin-explore` (0.3.34 → 0.3.35)](#backstageplugin-explore-0334--0335)
  - [`@backstage/plugin-firehydrant` (0.1.20 → 0.1.21)](#backstageplugin-firehydrant-0120--0121)
  - [`@backstage/plugin-fossa` (0.2.35 → 0.2.36)](#backstageplugin-fossa-0235--0236)
  - [`@backstage/plugin-gcp-projects` (0.3.22 → 0.3.23)](#backstageplugin-gcp-projects-0322--0323)
  - [`@backstage/plugin-git-release-manager` (0.3.16 → 0.3.17)](#backstageplugin-git-release-manager-0316--0317)
  - [`@backstage/plugin-github-actions` (0.5.3 → 0.5.4)](#backstageplugin-github-actions-053--054)
  - [`@backstage/plugin-github-deployments` (0.1.34 → 0.1.35)](#backstageplugin-github-deployments-0134--0135)
  - [`@backstage/plugin-gitops-profiles` (0.3.21 → 0.3.22)](#backstageplugin-gitops-profiles-0321--0322)
  - [`@backstage/plugin-gocd` (0.1.9 → 0.1.10)](#backstageplugin-gocd-019--0110)
  - [`@backstage/plugin-graphiql` (0.2.35 → 0.2.36)](#backstageplugin-graphiql-0235--0236)
  - [`@backstage/plugin-home` (0.4.19 → 0.4.20)](#backstageplugin-home-0419--0420)
  - [`@backstage/plugin-ilert` (0.1.29 → 0.1.30)](#backstageplugin-ilert-0129--0130)
  - [`@backstage/plugin-jenkins` (0.7.2 → 0.7.3)](#backstageplugin-jenkins-072--073)
  - [`@backstage/plugin-jenkins-backend` (0.1.19 → 0.1.20)](#backstageplugin-jenkins-backend-0119--0120)
  - [`@backstage/plugin-jenkins-common` (0.1.2 → 0.1.3)](#backstageplugin-jenkins-common-012--013)
  - [`@backstage/plugin-kafka` (0.3.3 → 0.3.4)](#backstageplugin-kafka-033--034)
  - [`@backstage/plugin-kafka-backend` (0.2.23 → 0.2.24)](#backstageplugin-kafka-backend-0223--0224)
  - [`@backstage/plugin-kubernetes` (0.6.3 → 0.6.4)](#backstageplugin-kubernetes-063--064)
  - [`@backstage/plugin-lighthouse` (0.3.3 → 0.3.4)](#backstageplugin-lighthouse-033--034)
  - [`@backstage/plugin-newrelic` (0.3.21 → 0.3.22)](#backstageplugin-newrelic-0321--0322)
  - [`@backstage/plugin-org` (0.5.3 → 0.5.4)](#backstageplugin-org-053--054)
  - [`@backstage/plugin-pagerduty` (0.3.30 → 0.3.31)](#backstageplugin-pagerduty-0330--0331)
  - [`@backstage/plugin-periskop` (0.1.1 → 0.1.2)](#backstageplugin-periskop-011--012)
  - [`@backstage/plugin-permission-backend` (0.5.5 → 0.5.6)](#backstageplugin-permission-backend-055--056)
  - [`@backstage/plugin-rollbar` (0.4.3 → 0.4.4)](#backstageplugin-rollbar-043--044)
  - [`@backstage/plugin-scaffolder-backend-module-rails` (0.3.5 → 0.3.6)](#backstageplugin-scaffolder-backend-module-rails-035--036)
  - [`@backstage/plugin-search-backend-module-elasticsearch` (0.1.2 → 0.1.3)](#backstageplugin-search-backend-module-elasticsearch-012--013)
  - [`@backstage/plugin-search-backend-module-pg` (0.3.1 → 0.3.2)](#backstageplugin-search-backend-module-pg-031--032)
  - [`@backstage/plugin-sentry` (0.3.41 → 0.3.42)](#backstageplugin-sentry-0341--0342)
  - [`@backstage/plugin-shortcuts` (0.2.4 → 0.2.5)](#backstageplugin-shortcuts-024--025)
  - [`@backstage/plugin-sonarqube` (0.3.3 → 0.3.4)](#backstageplugin-sonarqube-033--034)
  - [`@backstage/plugin-splunk-on-call` (0.3.27 → 0.3.28)](#backstageplugin-splunk-on-call-0327--0328)
  - [`@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.14 → 0.1.15)](#backstageplugin-tech-insights-backend-module-jsonfc-0114--0115)
  - [`@backstage/plugin-tech-insights-node` (0.2.8 → 0.2.9)](#backstageplugin-tech-insights-node-028--029)
  - [`@backstage/plugin-tech-radar` (0.5.10 → 0.5.11)](#backstageplugin-tech-radar-0510--0511)
  - [`@backstage/plugin-todo` (0.2.5 → 0.2.6)](#backstageplugin-todo-025--026)
  - [`@backstage/plugin-todo-backend` (0.1.27 → 0.1.28)](#backstageplugin-todo-backend-0127--0128)
  - [`@backstage/plugin-user-settings` (0.4.2 → 0.4.3)](#backstageplugin-user-settings-042--043)
  - [`@backstage/plugin-xcmetrics` (0.2.23 → 0.2.24)](#backstageplugin-xcmetrics-0223--0224)
  - [`@backstage/test-utils` (1.0.0 → 1.0.1)](#backstagetest-utils-100--101)
  - [`@backstage/version-bridge` (1.0.0 → 1.0.1)](#backstageversion-bridge-100--101)
- [Excluded dependency updates](#excluded-dependency-updates)

## Newly added packages

### `@backstage/plugin-cicd-statistics-module-gitlab` (new, [0.1.0](../../changelogs/@backstage/plugin-cicd-statistics-module-gitlab.md#010))

#### 0.1.0

##### Minor Changes

- [`d3af30b47d`](https://github.com/backstage/backstage/commit/d3af30b47d): Created a module to extract the CI/CD statistics from a Gitlab repository.
  Read the `README.md` in the `cicd-statistics-module-gitlab` plugin folder on how to set it up.

### `@backstage/plugin-search-react` (new, [0.1.0](../../changelogs/@backstage/plugin-search-react.md#010))

#### 0.1.0

##### Minor Changes

- [`ab230a433f`](https://github.com/backstage/backstage/commit/ab230a433f): New search package to hold things the search plugin itself and other frontend plugins (e.g. techdocs, home) depend on.

##### Patch Changes

- [`7c7919777e`](https://github.com/backstage/backstage/commit/7c7919777e): build(deps-dev): bump `@testing-library/react-hooks` from 7.0.2 to 8.0.0
- [`076b091113`](https://github.com/backstage/backstage/commit/076b091113): api-report clean up - the package now exports following additional types:

  `SearchContextProviderProps`
  `SearchContextValue`
  `SearchContextProviderForStorybookProps`
  `SearchApiProviderForStorybookProps`

- [`e1de8526aa`](https://github.com/backstage/backstage/commit/e1de8526aa): Versioned search context managed through version-bridge

### `@backstage/plugin-stack-overflow` (new, [0.1.0](../../changelogs/@backstage/plugin-stack-overflow.md#010))

#### 0.1.0

##### Minor Changes

- [`ac323de4ad`](https://github.com/backstage/backstage/commit/ac323de4ad): Add stack overflow plugin

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-stack-overflow-backend` (new, [0.1.0](../../changelogs/@backstage/plugin-stack-overflow-backend.md#010))

#### 0.1.0

##### Minor Changes

- [`ac323de4ad`](https://github.com/backstage/backstage/commit/ac323de4ad): Add stack overflow backend plugin

### `@backstage/plugin-techdocs-react` (new, [0.1.0](../../changelogs/@backstage/plugin-techdocs-react.md#010))

#### 0.1.0

##### Minor Changes

- [`ff1cc8bced`](https://github.com/backstage/backstage/commit/ff1cc8bced): This package will house frontend utilities related to TechDocs to be shared across other frontend Backstage packages.

  In this release, it introduces a framework that can be used create TechDocs addons.

  Note: this package is not necessarily stable yet. After iteration on this package, its stability will be signaled by a major-version bump.

##### Patch Changes

- [`7c7919777e`](https://github.com/backstage/backstage/commit/7c7919777e): build(deps-dev): bump `@testing-library/react-hooks` from 7.0.2 to 8.0.0

## Breaking changes

### `@backstage/cli` (0.16.0 → [0.17.0](../../changelogs/@backstage/cli.md#0170))

#### 0.17.0

##### Minor Changes

- [`1f7d4763ab`](https://github.com/backstage/backstage/commit/1f7d4763ab): **BREAKING**: Bump the version range of `jest` from `^26.0.1` to `^27.5.1`. You can find the complete list of breaking changes [here](https://github.com/facebook/jest/releases/tag/v27.0.0).

  We strongly recommend to have completed the [package role migration](https://backstage.io/docs/tutorials/package-role-migration) before upgrading to this version, as the package roles are used to automatically determine the testing environment for each package. If you instead want to set an explicit test environment for each package, you can do so for example in the `"jest"` section in `package.json`. The default test environment for all packages is now `node`, which is also the new Jest default.

  Note that one of the breaking changes of Jest 27 is that the `jsdom` environment no longer includes `setImmediate` and `clearImmediate`, which means you might need to update some of your frontend packages. Another notable change is that `jest.useFakeTimers` now defaults to the `'modern'` implementation, which also mocks microtasks.

##### Patch Changes

- [`e80ecad93c`](https://github.com/backstage/backstage/commit/e80ecad93c): Bump the `rushstack` api generator libraries to their latest versions
- [`c54ce828bd`](https://github.com/backstage/backstage/commit/c54ce828bd): build(deps): bump `eslint-plugin-jest` from 25.3.4 to 26.1.2
- [`f151dfee5a`](https://github.com/backstage/backstage/commit/f151dfee5a): build(deps): bump `eslint-webpack-plugin` from 2.6.0 to 3.1.1
- [`7e7ba704be`](https://github.com/backstage/backstage/commit/7e7ba704be): build(deps): bump `@spotify/eslint-config-base` from 12.0.0 to 13.0.0
- [`ecd72391fb`](https://github.com/backstage/backstage/commit/ecd72391fb): build(deps): bump `@spotify/eslint-config-typescript`
- [`6a341b2d87`](https://github.com/backstage/backstage/commit/6a341b2d87): build(deps): bump `@spotify/eslint-config-react` from 12.0.0 to 13.0.0
- [`3c26b2edb5`](https://github.com/backstage/backstage/commit/3c26b2edb5): build(deps): bump `npm-packlist` from 3.0.0 to 5.0.0
- [`ed3551b7be`](https://github.com/backstage/backstage/commit/ed3551b7be): Introduced a new experimental test configuration with a number of changes. It switches the coverage provider from `v8` to the default Babel provider, along with always enabling source maps in the Sucrase transform. It also adds a custom module loader that caches both file transforms and VM script objects across all projects in a test run, which provides a big performance boost when running tests from the project root, increasing speed and reducing memory usage.

  This new configuration is not enabled by default. It is enabled by setting the environment variable `BACKSTAGE_NEXT_TESTS` to a non-empty value.

- [`6ad0c45648`](https://github.com/backstage/backstage/commit/6ad0c45648): Added an experimental `package fix` command which applies automated fixes to the target package. The initial fix that is available is to add missing monorepo dependencies to the target package.
- [`5b3079694e`](https://github.com/backstage/backstage/commit/5b3079694e): Stop logging "Stopped watcher" when shutting down the development backend.
- [`f512554910`](https://github.com/backstage/backstage/commit/f512554910): Updated the plugin template to install version 14 of `@testing-library/user-event`.

  To apply this change to your own project, update the `devDependencies` section in your `package.json` files:

  ```diff
   "devDependencies": {
     ... omitted dev dependencies ...
  -   "@testing-library/user-event": "^13.1.8",
  +   "@testing-library/user-event": "^14.0.0",
      ... omitted dev dependencies ...
   }
  ```

- [`df7862cfa6`](https://github.com/backstage/backstage/commit/df7862cfa6): Fixed a bug were the `react-hot-loader` transform was being applied to backend development builds.
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16
- [`c47509e1a0`](https://github.com/backstage/backstage/commit/c47509e1a0): Implemented changes suggested by Deepsource.io including multiple double non-null assertion operators and unexpected awaits for non-promise values.
- [`948a56f401`](https://github.com/backstage/backstage/commit/948a56f401): Added a new experimental `repo list-deprecations` command, which scans the entire project for usage of deprecated APIs.
- [`4782f9e925`](https://github.com/backstage/backstage/commit/4782f9e925): Fixed misleading log message during frontend plugin creation.
- [`0383cd0228`](https://github.com/backstage/backstage/commit/0383cd0228): The `versions:*` commands no longer warns about duplicate plugin libraries, such as `@backstage/plugin-catalog-common`.

### `@backstage/create-app` (0.4.25 → [0.4.26](../../changelogs/@backstage/create-app.md#0426))

#### 0.4.26

##### Patch Changes

- [`1691c6c5c2`](https://github.com/backstage/backstage/commit/1691c6c5c2): Made `User` and `Group` entity kinds not permitted by the default
  `catalog.rules` config.

  The effect of this is that after creating a new Backstage repository, its
  catalog no longer permits regular users to register `User` or `Group` entities
  using the Backstage interface. Additionally, if you have config locations that
  result in `User` or `Group` entities, you need to add those kinds to its own
  specific rules:

  ```yaml
  catalog:
    locations:
      # This applies for example to url type locations
      - type: url
        target: https://example.com/org.yaml
        rules:
          - allow: [User, Group]
      # But also note that this applies to ALL org location types!
      - type: github-org
        target: https://github.com/my-org-name
        rules:
          - allow: [User, Group]
  ```

  This rule change does NOT affect entity providers, only things that are emitted
  by entity processors.

  We recommend that this change is applied to your own Backstage repository, since
  it makes it impossible for regular end users to affect your org data through
  e.g. YAML files. To do so, remove the two kinds from the default rules in your config:

  ```diff
   catalog:
     rules:
  -    - allow: [Component, System, API, Group, User, Resource, Location]
  +    - allow: [Component, System, API, Resource, Location]
  ```

  And for any location that in any way results in org data being ingested, add the corresponding rule to it:

  ```diff
   catalog:
     locations:
       - type: github-org
         target: https://github.com/my-org-name
  +      rules:
  +        - allow: [User, Group]
  ```

- [`0e911394d2`](https://github.com/backstage/backstage/commit/0e911394d2): Remove the `knex` package that is installed in the `packages/backend` as it's provided by the `@backstage/*` packages for you automatically. You can make the following change in your `packages/backend/package.json` if you wish to apply this change.

  ```diff
      "lint": "backstage-cli package lint",
      "test": "backstage-cli package test",
      "clean": "backstage-cli package clean",
  -   "migrate:create": "knex migrate:make -x ts"
  ```

  ```diff
      "express": "^4.17.1",
      "express-promise-router": "^4.1.0",
  -   "knex": "^0.21.6",
      "pg": "^8.3.0",
  ```

- [`520e21aaea`](https://github.com/backstage/backstage/commit/520e21aaea): imports `useSearch` hook from new `@backstage/plugin-search-react` package.

  To upgrade existing Apps:

  1. Change the import to the following:

  `packages/app/src/components/search/SearchPage.tsx`

  ```diff
  import {
  ...
  SearchType,
  - useSearch,
  } from '@backstage/plugin-search';
  +import { useSearch } from '@backstage/plugin-search-react';
  ```

  2. Add `@backstage/plugin-search-react` as a dependency to the app.

- [`43759dd789`](https://github.com/backstage/backstage/commit/43759dd789): Removed `@octokit/rest` and `@gitbeaker/node` from backend dependencies as these are unused in the default app.

  To apply these changes to your existing app, remove the following lines from the `dependencies` section of `packages/backend/package.json`

  ```diff
       "@backstage/plugin-techdocs-backend": "^1.0.0",
  -    "@gitbeaker/node": "^34.6.0",
  -    "@octokit/rest": "^18.5.3",
  ```

- [`e838a7060a`](https://github.com/backstage/backstage/commit/e838a7060a): Add type resolutions for `@types/react` and `types/react-dom`.

  The reason for this is the usage of `"@types/react": "*"` as a dependency which is very common practice in react packages. This recently resolves to react 18 which introduces several breaking changes in both internal and external packages.

  To apply these changes to your existing installation, add a resolutions block to your `package.json`

  ```json
    "resolutions": {
      "@types/react": "^17",
      "@types/react-dom": "^17"
    },
  ```

  If your existing app depends on react 16, use this resolution block instead.

  ```json
    "resolutions": {
      "@types/react": "^16",
      "@types/react-dom": "^16"
    },
  ```

- [`0a63e99a26`](https://github.com/backstage/backstage/commit/0a63e99a26): **BREAKING**: `IndexBuilder.addCollator()` now requires a `schedule` parameter (replacing `defaultRefreshIntervalSeconds`) which is expected to be a `TaskRunner` that is configured with the desired search indexing schedule for the given collator.

  `Scheduler.addToSchedule()` now takes a new parameter object (`ScheduleTaskParameters`) with two new options `id` and `scheduledRunner` in addition to the migrated `task` argument.

  NOTE: The search backend plugin now creates a dedicated database for coordinating indexing tasks.

  To make this change to an existing app, make the following changes to `packages/backend/src/plugins/search.ts`:

  ```diff
  +import { Duration } from 'luxon';

  /* ... */

  +  const schedule = env.scheduler.createScheduledTaskRunner({
  +    frequency: Duration.fromObject({ minutes: 10 }),
  +    timeout: Duration.fromObject({ minutes: 15 }),
  +    initialDelay: Duration.fromObject({ seconds: 3 }),
  +  });

     indexBuilder.addCollator({
  -    defaultRefreshIntervalSeconds: 600,
  +    schedule,
       factory: DefaultCatalogCollatorFactory.fromConfig(env.config, {
        discovery: env.discovery,
        tokenManager: env.tokenManager,
       }),
     });

     indexBuilder.addCollator({
  -    defaultRefreshIntervalSeconds: 600,
  +    schedule,
       factory: DefaultTechDocsCollatorFactory.fromConfig(env.config, {
        discovery: env.discovery,
        tokenManager: env.tokenManager,
       }),
     });

     const { scheduler } = await indexBuilder.build();
  -  setTimeout(() => scheduler.start(), 3000);
  +  scheduler.start();
  /* ... */
  ```

  NOTE: For scenarios where the `lunr` search engine is used in a multi-node configuration, a non-distributed `TaskRunner` like the following should be implemented to ensure consistency across nodes (alternatively, you can configure
  the search plugin to use a non-distributed DB such as [SQLite](https://backstage.io/docs/tutorials/configuring-plugin-databases#postgresql-and-sqlite-3)):

  ```diff
  +import { TaskInvocationDefinition, TaskRunner } from '@backstage/backend-tasks';

  /* ... */

  +  const schedule: TaskRunner = {
  +    run: async (task: TaskInvocationDefinition) => {
  +      const startRefresh = async () => {
  +        while (!task.signal?.aborted) {
  +          try {
  +            await task.fn(task.signal);
  +          } catch {
  +            // ignore intentionally
  +          }
  +
  +          await new Promise(resolve => setTimeout(resolve, 600 * 1000));
  +        }
  +      };
  +      startRefresh();
  +    },
  +  };

     indexBuilder.addCollator({
  -    defaultRefreshIntervalSeconds: 600,
  +    schedule,
       factory: DefaultCatalogCollatorFactory.fromConfig(env.config, {
        discovery: env.discovery,
        tokenManager: env.tokenManager,
       }),
     });

  /* ... */
  ```

- [`c07d9f9e1c`](https://github.com/backstage/backstage/commit/c07d9f9e1c): Add helpful README.md files in the original `packages` and `plugins` folders
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16
- [`1882dbda2b`](https://github.com/backstage/backstage/commit/1882dbda2b): Accept `PermissionEvaluator` instead of the deprecated `PermissionAuthorizer`.

  Apply the following to `packages/backend/src/types.ts`:

  ```diff
  - import { PermissionAuthorizer } from '@backstage/plugin-permission-common';
  + import { PermissionEvaluator } from '@backstage/plugin-permission-common';

    export type PluginEnvironment = {
      ...
      discovery: PluginEndpointDiscovery;
      tokenManager: TokenManager;
      scheduler: PluginTaskScheduler;
  -   permissions: PermissionAuthorizer;
  +   permissions: PermissionEvaluator;
    };
  ```

- [`e80cca164d`](https://github.com/backstage/backstage/commit/e80cca164d): Tweaked `.eslintrc.js` files in the template to avoid having them apply during development. This change does not affect create apps.

### `@backstage/plugin-auth-backend` (0.12.3 → [0.13.0](../../changelogs/@backstage/plugin-auth-backend.md#0130))

#### 0.13.0

##### Minor Changes

- [`15d3a3c39a`](https://github.com/backstage/backstage/commit/15d3a3c39a): **BREAKING**: All sign-in resolvers must now return a `token` in their sign-in result. Returning an `id` is no longer supported.
- [`c5aeaf339d`](https://github.com/backstage/backstage/commit/c5aeaf339d): **BREAKING**: All auth providers have had their default sign-in resolvers removed. This means that if you want to use a particular provider for sign-in, you must provide an explicit sign-in resolver. For more information on how to configure sign-in resolvers, see the [sign-in resolver documentation](https://backstage.io/docs/auth/identity-resolver).

##### Patch Changes

- [`c5aeaf339d`](https://github.com/backstage/backstage/commit/c5aeaf339d): **DEPRECATION**: The `AuthProviderFactoryOptions` type has been deprecated, as the options are now instead inlined in the `AuthProviderFactory` type. This will make it possible to more easily introduce new options in the future without a possibly breaking change.
- [`794f7542b6`](https://github.com/backstage/backstage/commit/794f7542b6): Updated openid-client from 4.1.2 to 5.1.3
- [`c5aeaf339d`](https://github.com/backstage/backstage/commit/c5aeaf339d): **DEPRECATION**: The `getEntityClaims` helper has been deprecated, with `getDefaultOwnershipEntityRefs` being added to replace it.
- [`de231e5b06`](https://github.com/backstage/backstage/commit/de231e5b06): Declare oauth2 `clientSecret` with visibility secret
- [`c5aeaf339d`](https://github.com/backstage/backstage/commit/c5aeaf339d): **DEPRECATION**: All `create<Provider>Provider` and `<provider>*SignInResolver` have been deprecated. Instead, a single `providers` object is exported which contains all built-in auth providers.

  If you have a setup that currently looks for example like this:

  ```ts
  import {
    createRouter,
    defaultAuthProviderFactories,
    createGoogleProvider,
    googleEmailSignInResolver,
  } from '@backstage/plugin-auth-backend';
  import { Router } from 'express';
  import { PluginEnvironment } from '../types';

  export default async function createPlugin(
    env: PluginEnvironment,
  ): Promise<Router> {
    return await createRouter({
      ...env,
      providerFactories: {
        ...defaultAuthProviderFactories,
        google: createGoogleProvider({
          signIn: {
            resolver: googleEmailSignInResolver,
          },
        }),
      },
    });
  }
  ```

  You would migrate it to something like this:

  ```ts
  import {
    createRouter,
    providers,
    defaultAuthProviderFactories,
  } from '@backstage/plugin-auth-backend';
  import { Router } from 'express';
  import { PluginEnvironment } from '../types';

  export default async function createPlugin(
    env: PluginEnvironment,
  ): Promise<Router> {
    return await createRouter({
      ...env,
      providerFactories: {
        ...defaultAuthProviderFactories,
        google: providers.google.create({
          signIn: {
            resolver:
              providers.google.resolvers.emailMatchingUserEntityAnnotation(),
          },
        }),
      },
    });
  }
  ```

- [`2cc1d1b235`](https://github.com/backstage/backstage/commit/2cc1d1b235): Applied the fix from version 0.12.3 of this package, which is part of the v1.0.1 release of Backstage.
- [`c5aeaf339d`](https://github.com/backstage/backstage/commit/c5aeaf339d): **DEPRECATION** The `AuthResolverContext` has received a number of changes, which is the context used by auth handlers and sign-in resolvers.

  The following fields deprecated: `logger`, `tokenIssuer`, `catalogIdentityClient`. If you need to access the `logger`, you can do so through a closure instead. The `tokenIssuer` has been replaced with an `issueToken` method, which is available directory on the context. The `catalogIdentityClient` has been replaced by the `signInWithCatalogUser` method, as well as the lower level `findCatalogUser` method and `getDefaultOwnershipEntityRefs` helper.

  It should be possible to migrate most sign-in resolvers to more or less only use `signInWithCatalogUser`, for example an email lookup resolver like this one:

  ```ts
  async ({ profile }, ctx) => {
    if (!profile.email) {
      throw new Error('Profile contained no email');
    }

    const entity = await ctx.catalogIdentityClient.findUser({
      annotations: {
        'acme.org/email': profile.email,
      },
    });

    const claims = getEntityClaims(entity);
    const token = await ctx.tokenIssuer.issueToken({ claims });

    return { id: entity.metadata.name, entity, token };
  };
  ```

  can be migrated to the following:

  ```ts
  async ({ profile }, ctx) => {
    if (!profile.email) {
      throw new Error('Profile contained no email');
    }

    return ctx.signInWithCatalogUser({
      annotations: {
        'acme.org/email': profile.email,
      },
    });
  };
  ```

  While a direct entity name lookup using a user ID might look like this:

  ```ts
  async ({ result: { fullProfile } }, ctx) => {
    return ctx.signInWithCatalogUser({
      entityRef: {
        name: fullProfile.userId,
      },
    });
  };
  ```

  If you want more control over the way that users are looked up, ownership is assigned, or tokens are issued, you can use a combination of the `findCatalogUser`, `getDefaultOwnershipEntityRefs`, and `issueToken` instead.

- [`f4cdf4cac1`](https://github.com/backstage/backstage/commit/f4cdf4cac1): Defensively encode URL parameters when fetching ELB keys
- [`6ee04078e1`](https://github.com/backstage/backstage/commit/6ee04078e1): **DEPRECATION**: The `tokenIssuer` option for `OAuthAdapter` is no longer needed and has been deprecated.
- [`a45bce06e3`](https://github.com/backstage/backstage/commit/a45bce06e3): Handle trailing slashes on GitHub `enterpriseInstanceUrl` settings
- [`45f7a261c7`](https://github.com/backstage/backstage/commit/45f7a261c7): Bumped passport-microsoft to resolve CVE-2021-41580
- [`c5aeaf339d`](https://github.com/backstage/backstage/commit/c5aeaf339d): Added exports of the following types: `AuthProviderConfig`, `StateEncoder`, `TokenParams`, `AwsAlbResult`.

### `@backstage/plugin-auth-node` (0.1.6 → [0.2.0](../../changelogs/@backstage/plugin-auth-node.md#020))

#### 0.2.0

##### Minor Changes

- [`15d3a3c39a`](https://github.com/backstage/backstage/commit/15d3a3c39a): **BREAKING**: Removed the deprecated `id` and `entity` fields from `BackstageSignInResult`.

### `@backstage/plugin-catalog-backend` (1.0.0 → [1.1.0](../../changelogs/@backstage/plugin-catalog-backend.md#110))

#### 1.1.0

##### Minor Changes

- [`8012ac46a0`](https://github.com/backstage/backstage/commit/8012ac46a0): **BREAKING (alpha api):** Replace `createCatalogPolicyDecision` export with `createCatalogConditionalDecision`, which accepts a permission parameter of type `ResourcePermission<'catalog-entity'>` along with conditions. The permission passed is expected to be the handled permission in `PermissionPolicy#handle`, whose type must first be narrowed using methods like `isPermission` and `isResourcePermission`:

  ```typescript
  class TestPermissionPolicy implements PermissionPolicy {
    async handle(
      request: PolicyQuery<Permission>,
      _user?: BackstageIdentityResponse,
    ): Promise<PolicyDecision> {
      if (
        // Narrow type of `request.permission` to `ResourcePermission<'catalog-entity'>
        isResourcePermission(request.permission, RESOURCE_TYPE_CATALOG_ENTITY)
      ) {
        return createCatalogConditionalDecision(
          request.permission,
          catalogConditions.isEntityOwner(
            _user?.identity.ownershipEntityRefs ?? [],
          ),
        );
      }

      return {
        result: AuthorizeResult.ALLOW,
      };
  ```

- [`8012ac46a0`](https://github.com/backstage/backstage/commit/8012ac46a0): **BREAKING:** Mark CatalogBuilder#addPermissionRules as @alpha.
- [`fb02d2d94d`](https://github.com/backstage/backstage/commit/fb02d2d94d): export `locationSpecToLocationEntity`
- [`bf82edf4c9`](https://github.com/backstage/backstage/commit/bf82edf4c9): Added `/validate-entity` endpoint

##### Patch Changes

- [`ada4446733`](https://github.com/backstage/backstage/commit/ada4446733): Specify type of `visibilityPermission` property on collators and collator factories.
- [`1691c6c5c2`](https://github.com/backstage/backstage/commit/1691c6c5c2): Clarify that config locations that emit User and Group kinds now need to declare so in the `catalog.locations.[].rules`
- [`8592cacfd3`](https://github.com/backstage/backstage/commit/8592cacfd3): Fixed an issue where sometimes entities would have stale relations "stuck" and
  not getting removed as expected, after the other end of the relation had stopped
  referring to them.
- [`23646e51a5`](https://github.com/backstage/backstage/commit/23646e51a5): Use new `PermissionEvaluator#authorizeConditional` method when retrieving permission conditions.
- [`9fe24b0fc8`](https://github.com/backstage/backstage/commit/9fe24b0fc8): Adjust the error messages when entities fail validation, to clearly state what entity that failed it
- [`48405ed232`](https://github.com/backstage/backstage/commit/48405ed232): Added `spec.profile.displayName` to search index for Group kinds
- [`95408dbe99`](https://github.com/backstage/backstage/commit/95408dbe99): Enable internal batching of very large deletions, to not run into SQL binding limits
- [`8012ac46a0`](https://github.com/backstage/backstage/commit/8012ac46a0): Handle changes to @alpha permission-related types.

  - All exported permission rules and conditions now have a `resourceType`.
  - `createCatalogConditionalDecision` now expects supplied conditions to have the appropriate `resourceType`.
  - `createCatalogPermissionRule` now expects `resourceType` as part of the supplied rule object.
  - Introduce new `CatalogPermissionRule` convenience type.

- [`ffec894ed0`](https://github.com/backstage/backstage/commit/ffec894ed0): add gitlab to AnnotateScmSlugEntityProcessor

### `@backstage/plugin-kubernetes-backend` (0.4.13 → [0.5.0](../../changelogs/@backstage/plugin-kubernetes-backend.md#050))

#### 0.5.0

##### Minor Changes

- [`3d45427666`](https://github.com/backstage/backstage/commit/3d45427666): **BREAKING** Custom cluster suppliers need to cache their getClusters result

  To allow custom `KubernetesClustersSupplier` instances to refresh the list of clusters
  the `getClusters` method is now called whenever the list of clusters is needed.

  Existing `KubernetesClustersSupplier` implementations will need to ensure that `getClusters`
  can be called frequently and should return a cached result from `getClusters` instead.

  For example, here's a simple example of a custom supplier in `packages/backend/src/plugins/kubernetes.ts`:

  ```diff
  -import { KubernetesBuilder } from '@backstage/plugin-kubernetes-backend';
  +import {
  +  ClusterDetails,
  +  KubernetesBuilder,
  +  KubernetesClustersSupplier,
  +} from '@backstage/plugin-kubernetes-backend';
   import { Router } from 'express';
   import { PluginEnvironment } from '../types';
  +import { Duration } from 'luxon';
  +
  +export class CustomClustersSupplier implements KubernetesClustersSupplier {
  +  constructor(private clusterDetails: ClusterDetails[] = []) {}
  +
  +  static create(refreshInterval: Duration) {
  +    const clusterSupplier = new CustomClustersSupplier();
  +    // setup refresh, e.g. using a copy of https://github.com/backstage/backstage/blob/master/plugins/search-backend-node/src/runPeriodically.ts
  +    runPeriodically(
  +      () => clusterSupplier.refreshClusters(),
  +      refreshInterval.toMillis(),
  +    );
  +    return clusterSupplier;
  +  }
  +
  +  async refreshClusters(): Promise<void> {
  +    this.clusterDetails = []; // fetch from somewhere
  +  }
  +
  +  async getClusters(): Promise<ClusterDetails[]> {
  +    return this.clusterDetails;
  +  }
  +}

   export default async function createPlugin(
     env: PluginEnvironment,
   ): Promise<Router> {
  -  const { router } = await KubernetesBuilder.createBuilder({
  +  const builder = await KubernetesBuilder.createBuilder({
       logger: env.logger,
       config: env.config,
  -  }).build();
  +  });
  +  builder.setClusterSupplier(
  +    CustomClustersSupplier.create(Duration.fromObject({ minutes: 60 })),
  +  );
  +  const { router } = await builder.build();
  ```

##### Patch Changes

- [`753a20c89e`](https://github.com/backstage/backstage/commit/753a20c89e): Add kubernetes namespace annotation `backstage.io/kubernetes-namespace` to allow namespaced Kubernetes resources fetches

### `@backstage/plugin-permission-common` (0.5.3 → [0.6.0](../../changelogs/@backstage/plugin-permission-common.md#060))

#### 0.6.0

##### Minor Changes

- [`8012ac46a0`](https://github.com/backstage/backstage/commit/8012ac46a0): Add `resourceType` property to `PermissionCondition` type to allow matching them with `ResourcePermission` instances.
- [`c98d271466`](https://github.com/backstage/backstage/commit/c98d271466): Refactor api types into more specific, decoupled names.

  - **BREAKING:**
    - Renamed `AuthorizeDecision` to `EvaluatePermissionResponse`
    - Renamed `AuthorizeQuery` to `EvaluatePermissionRequest`
    - Renamed `AuthorizeRequest` to `EvaluatePermissionRequestBatch`
    - Renamed `AuthorizeResponse` to `EvaluatePermissionResponseBatch`
    - Renamed `Identified` to `IdentifiedPermissionMessage`
  - Add `PermissionMessageBatch` helper type
  - Add `ConditionalPolicyDecision`, `DefinitivePolicyDecision`, and `PolicyDecision` types from `@backstage/plugin-permission-node`

##### Patch Changes

- [`90754d4fa9`](https://github.com/backstage/backstage/commit/90754d4fa9): Removed [strict](https://github.com/colinhacks/zod#strict) validation from `PermissionCriteria` schemas to support backward-compatible changes.
- [`2b07063d77`](https://github.com/backstage/backstage/commit/2b07063d77): Added `PermissionEvaluator`, which will replace the existing `PermissionAuthorizer` interface. This new interface provides stronger type safety and validation by splitting `PermissionAuthorizer.authorize()` into two methods:

  - `authorize()`: Used when the caller requires a definitive decision.
  - `authorizeConditional()`: Used when the caller can optimize the evaluation of any conditional decisions. For example, a plugin backend may want to use conditions in a database query instead of evaluating each resource in memory.

- [`8012ac46a0`](https://github.com/backstage/backstage/commit/8012ac46a0): Add `isPermission` helper method.
- [`95284162d6`](https://github.com/backstage/backstage/commit/95284162d6): - Add more specific `Permission` types.
  - Add `createPermission` helper to infer the appropriate type for some permission input.
  - Add `isResourcePermission` helper to refine Permissions to ResourcePermissions.

### `@backstage/plugin-permission-node` (0.5.5 → [0.6.0](../../changelogs/@backstage/plugin-permission-node.md#060))

#### 0.6.0

##### Minor Changes

- [`8012ac46a0`](https://github.com/backstage/backstage/commit/8012ac46a0): **BREAKING**: Stronger typing in `PermissionPolicy` 🎉.

  Previously, it was entirely the responsibility of the `PermissionPolicy` author to only return `CONDITIONAL` decisions for permissions that are associated with a resource, and to return the correct kind of `PermissionCondition` instances inside the decision. Now, the policy authoring helpers provided in this package now ensure that the decision and permission match.

  **For policy authors**: rename and adjust api of `createConditionExports`. Previously, the function returned a factory for creating conditional decisions named `createPolicyDecision`, which had a couple of drawbacks:

  1. The function always creates a _conditional_ policy decision, but this was not reflected in the name.
  2. Conditional decisions should only ever be returned from `PermissionPolicy#handle` for resource permissions, but there was nothing in the API that encoded this constraint.

  This change addresses the drawbacks above by making the following changes for policy authors:

  - The `createPolicyDecision` method has been renamed to `createConditionalDecision`.
  - Along with conditions, the method now accepts a permission, which must be a `ResourcePermission`. This is expected to be the handled permission in `PermissionPolicy#handle`, whose type must first be narrowed using methods like `isPermission` and `isResourcePermission`:

  ```typescript
  class TestPermissionPolicy implements PermissionPolicy {
    async handle(
      request: PolicyQuery<Permission>,
      _user?: BackstageIdentityResponse,
    ): Promise<PolicyDecision> {
      if (
        // Narrow type of `request.permission` to `ResourcePermission<'catalog-entity'>
        isResourcePermission(request.permission, RESOURCE_TYPE_CATALOG_ENTITY)
      ) {
        return createCatalogConditionalDecision(
          request.permission,
          catalogConditions.isEntityOwner(
            _user?.identity.ownershipEntityRefs ?? [],
          ),
        );
      }

      return {
        result: AuthorizeResult.ALLOW,
      };
  ```

  **BREAKING**: when creating `PermissionRule`s, provide a `resourceType`.

  ```diff
  export const isEntityOwner = createCatalogPermissionRule({
    name: 'IS_ENTITY_OWNER',
    description: 'Allow entities owned by the current user',
  +  resourceType: RESOURCE_TYPE_CATALOG_ENTITY,
    apply: (resource: Entity, claims: string[]) => {
      if (!resource.relations) {
        return false;
      }

      return resource.relations
        .filter(relation => relation.type === RELATION_OWNED_BY)
        .some(relation => claims.includes(relation.targetRef));
    },
    toQuery: (claims: string[]) => ({
      key: 'relations.ownedBy',
      values: claims,
    }),
  });
  ```

- [`c98d271466`](https://github.com/backstage/backstage/commit/c98d271466): **BREAKING:**

  - Rename `PolicyAuthorizeQuery` to `PolicyQuery`
  - Remove `PolicyDecision`, `DefinitivePolicyDecision`, and `ConditionalPolicyDecision`. These types are now exported from `@backstage/plugin-permission-common`

- [`322b69e46a`](https://github.com/backstage/backstage/commit/322b69e46a): **BREAKING:** `ServerPermissionClient` now implements `PermissionEvaluator`, which moves out the capabilities for evaluating conditional decisions from `authorize()` to `authorizeConditional()` method.

##### Patch Changes

- [`90754d4fa9`](https://github.com/backstage/backstage/commit/90754d4fa9): Removed [strict](https://github.com/colinhacks/zod#strict) validation from `PermissionCriteria` schemas to support backward-compatible changes.
- [`8012ac46a0`](https://github.com/backstage/backstage/commit/8012ac46a0): Fix signature of permission rule in test suites

### `@backstage/plugin-permission-react` (0.3.4 → [0.4.0](../../changelogs/@backstage/plugin-permission-react.md#040))

#### 0.4.0

##### Minor Changes

- [`5bdcb8c45d`](https://github.com/backstage/backstage/commit/5bdcb8c45d): **BREAKING**: More restrictive typing for `usePermission` hook and `PermissionedRoute` component. It's no longer possible to pass a `resourceRef` unless the permission is of type `ResourcePermission`.

##### Patch Changes

- [`c98d271466`](https://github.com/backstage/backstage/commit/c98d271466): Use updated types from `@backstage/plugin-permission-common`
- [`322b69e46a`](https://github.com/backstage/backstage/commit/322b69e46a): **BREAKING:** Make `IdentityPermissionApi#authorize` typing more strict, using `AuthorizePermissionRequest` and `AuthorizePermissionResponse`.

### `@backstage/plugin-search-backend` (0.4.8 → [0.5.0](../../changelogs/@backstage/plugin-search-backend.md#050))

#### 0.5.0

##### Minor Changes

- [`94ccd772d4`](https://github.com/backstage/backstage/commit/94ccd772d4): **BREAKING**: The `authorization` property is no longer returned on search results when queried. Note: this will only result in a breaking change if you have custom code in your frontend that relies on the `authorization.resourceRef` property on documents.

##### Patch Changes

- [`30f9884359`](https://github.com/backstage/backstage/commit/30f9884359): Check for non-resource permissions when authorizing result-by-result in AuthorizedSearchEngine.
- [`3c8cfaaa80`](https://github.com/backstage/backstage/commit/3c8cfaaa80): Use `PermissionEvaluator` instead of `PermissionAuthorizer`, which is now deprecated.
- [`62ee65422c`](https://github.com/backstage/backstage/commit/62ee65422c): Use new `IndexableResultSet` type as return type of query method in `SearchEngine` implementation.
- [`c98d271466`](https://github.com/backstage/backstage/commit/c98d271466): Use updated types from `@backstage/plugin-permission-common`

### `@backstage/plugin-search-backend-node` (0.5.2 → [0.6.0](../../changelogs/@backstage/plugin-search-backend-node.md#060))

#### 0.6.0

##### Minor Changes

- [`0a63e99a26`](https://github.com/backstage/backstage/commit/0a63e99a26): **BREAKING**: `IndexBuilder.addCollator()` now requires a `schedule` parameter (replacing `defaultRefreshIntervalSeconds`) which is expected to be a `TaskRunner` that is configured with the desired search indexing schedule for the given collator.

  `Scheduler.addToSchedule()` now takes a new parameter object (`ScheduleTaskParameters`) with two new options `id` and `scheduledRunner` in addition to the migrated `task` argument.

  NOTE: The search backend plugin now creates a dedicated database for coordinating indexing tasks.

  To make this change to an existing app, make the following changes to `packages/backend/src/plugins/search.ts`:

  ```diff
  +import { Duration } from 'luxon';

  /* ... */

  +  const schedule = env.scheduler.createScheduledTaskRunner({
  +    frequency: Duration.fromObject({ minutes: 10 }),
  +    timeout: Duration.fromObject({ minutes: 15 }),
  +    initialDelay: Duration.fromObject({ seconds: 3 }),
  +  });

     indexBuilder.addCollator({
  -    defaultRefreshIntervalSeconds: 600,
  +    schedule,
       factory: DefaultCatalogCollatorFactory.fromConfig(env.config, {
        discovery: env.discovery,
        tokenManager: env.tokenManager,
       }),
     });

     indexBuilder.addCollator({
  -    defaultRefreshIntervalSeconds: 600,
  +    schedule,
       factory: DefaultTechDocsCollatorFactory.fromConfig(env.config, {
        discovery: env.discovery,
        tokenManager: env.tokenManager,
       }),
     });

     const { scheduler } = await indexBuilder.build();
  -  setTimeout(() => scheduler.start(), 3000);
  +  scheduler.start();
  /* ... */
  ```

  NOTE: For scenarios where the `lunr` search engine is used in a multi-node configuration, a non-distributed `TaskRunner` like the following should be implemented to ensure consistency across nodes (alternatively, you can configure
  the search plugin to use a non-distributed DB such as [SQLite](https://backstage.io/docs/tutorials/configuring-plugin-databases#postgresql-and-sqlite-3)):

  ```diff
  +import { TaskInvocationDefinition, TaskRunner } from '@backstage/backend-tasks';

  /* ... */

  +  const schedule: TaskRunner = {
  +    run: async (task: TaskInvocationDefinition) => {
  +      const startRefresh = async () => {
  +        while (!task.signal?.aborted) {
  +          try {
  +            await task.fn(task.signal);
  +          } catch {
  +            // ignore intentionally
  +          }
  +
  +          await new Promise(resolve => setTimeout(resolve, 600 * 1000));
  +        }
  +      };
  +      startRefresh();
  +    },
  +  };

     indexBuilder.addCollator({
  -    defaultRefreshIntervalSeconds: 600,
  +    schedule,
       factory: DefaultCatalogCollatorFactory.fromConfig(env.config, {
        discovery: env.discovery,
        tokenManager: env.tokenManager,
       }),
     });

  /* ... */
  ```

##### Patch Changes

- [`62ee65422c`](https://github.com/backstage/backstage/commit/62ee65422c): Use new `IndexableResultSet` type as return type of query method in `SearchEngine` implementation.
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-search-common` (0.3.2 → [0.3.3](../../changelogs/@backstage/plugin-search-common.md#033))

#### 0.3.3

##### Patch Changes

- [`c8b295f2fb`](https://github.com/backstage/backstage/commit/c8b295f2fb): - Introduce `SearchDocument` type. This type contains the subset of `IndexableDocument` properties relevant to the frontend, and is intended to be used for documents returned to the frontend from the search API.
  - `SearchResultSet` is now a wrapper for documents of type `SearchDocument`, and is intended to be used in the frontend. This isn't a breaking change, since `IndexableDocument`s are valid `SearchDocument`s, so the old and new types are compatible.
  - Introduce `IndexableResultSet` type, which wraps `IndexableDocument` instances in the same way as `SearchResultSet`.

### `@backstage/plugin-tech-insights-backend` (0.2.10 → [0.3.0](../../changelogs/@backstage/plugin-tech-insights-backend.md#030))

#### 0.3.0

##### Minor Changes

- [`231fee736b`](https://github.com/backstage/backstage/commit/231fee736b): This backend now uses the `@backstage/backend-tasks` package facilities for scheduling fact retrievers.

  **BREAKING**: The `buildTechInsightsContext` function now takes an additional field in its options argument: `scheduler`. This is an instance of `PluginTaskScheduler`, which can be found in your backend initialization code's `env`.

  ```diff
   const builder = buildTechInsightsContext({
     logger: env.logger,
     config: env.config,
     database: env.database,
     discovery: env.discovery,
  +  scheduler: env.scheduler,
     factRetrievers: [ /* ... */ ],
   });
  ```

##### Patch Changes

- [`21de525ce9`](https://github.com/backstage/backstage/commit/21de525ce9): Updated README.md with better install instructions
- [`c47509e1a0`](https://github.com/backstage/backstage/commit/c47509e1a0): Implemented changes suggested by Deepsource.io including multiple double non-null assertion operators and unexpected awaits for non-promise values.
- [`2fe58c7285`](https://github.com/backstage/backstage/commit/2fe58c7285): Improved the Tech-Insights documentation:

  - `lifecycle` examples used `ttl` when it should be `timeToLive`
  - Added list of included FactRetrievers
  - Added full backend example using all included FactRetrievers
  - Added boolean scorecard example image showing results of backend example

## 0.x minor version bumps

### `@backstage/backend-tasks` (0.2.1 → [0.3.0](../../changelogs/@backstage/backend-tasks.md#030))

#### 0.3.0

##### Minor Changes

- [`ab008a0988`](https://github.com/backstage/backstage/commit/ab008a0988): Adds the ability to manually trigger tasks which are registered

##### Patch Changes

- [`bdd2773202`](https://github.com/backstage/backstage/commit/bdd2773202): Refactored the internal `TaskWorker` class to make it easier to test.
- [`a83babdd63`](https://github.com/backstage/backstage/commit/a83babdd63): Fixed the `initialDelay` parameter of tasks to properly make task workers
  _always_ wait before the first invocations on startup, not just the very first
  time that the task is ever created. This behavior is more in line with
  expectations. Callers to not need to update their code.

  Also clarified in the doc comment for the field that this wait applies only on
  an individual worker level. That is, if you have a cluster of workers then each
  individual machine may postpone its first task invocation by the given amount of
  time to leave room for the service to settle, but _other_ workers may still
  continue to invoke the task on the regular cadence in the meantime.

### `@backstage/plugin-gcalendar` (0.2.0 → [0.3.0](../../changelogs/@backstage/plugin-gcalendar.md#030))

#### 0.3.0

##### Minor Changes

- [`c6616e6fc9`](https://github.com/backstage/backstage/commit/c6616e6fc9): Fixed issue when not all calendars were fetched for some accounts

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-search` (0.7.4 → [0.8.0](../../changelogs/@backstage/plugin-search.md#080))

#### 0.8.0

##### Minor Changes

- [`520e21aaea`](https://github.com/backstage/backstage/commit/520e21aaea): The following exports has now been fully deleted from this package and can be import from `@backstage/plugin-search-react` instead.

  `SearchApi` interface.
  `searchApiRef`
  `SearchContextProvider`
  `useSearch`

  `SearchContext` has now been fully deleted from this package and is no longer exported publicly. Use `SearchContextProvider` when access to the context is needed.

##### Patch Changes

- [`7c7919777e`](https://github.com/backstage/backstage/commit/7c7919777e): build(deps-dev): bump `@testing-library/react-hooks` from 7.0.2 to 8.0.0
- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`5c062f275e`](https://github.com/backstage/backstage/commit/5c062f275e): Support customizing the content of the `SidebarSearchModal`
- [`38e01f2f70`](https://github.com/backstage/backstage/commit/38e01f2f70): Switch to `SearchDocument` type in `DefaultResultListItem` props
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16
- [`ab230a433f`](https://github.com/backstage/backstage/commit/ab230a433f): The following exports has been moved to `@backstage/plugin-search-react` and will be removed in the next release. import from `@backstage/plugin-search-react` instead.

  - `SearchApi` interface.
  - `searchApiRef`
  - `SearchContext`
  - `SearchContextProvider`
  - `useSearch`

### `@backstage/plugin-tech-insights` (0.1.13 → [0.2.0](../../changelogs/@backstage/plugin-tech-insights.md#020))

#### 0.2.0

##### Minor Changes

- [`567b13a84a`](https://github.com/backstage/backstage/commit/567b13a84a): Add checksId option to EntityTechInsightsScorecardContent component

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16
- [`2fe58c7285`](https://github.com/backstage/backstage/commit/2fe58c7285): Improved the Tech-Insights documentation:

  - `lifecycle` examples used `ttl` when it should be `timeToLive`
  - Added list of included FactRetrievers
  - Added full backend example using all included FactRetrievers
  - Added boolean scorecard example image showing results of backend example

## 0.0.x patch version bumps

### `@backstage/plugin-explore-react` (0.0.15 → [0.0.16](../../changelogs/@backstage/plugin-explore-react.md#0016))

#### 0.0.16

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

## Other minor version bumps

### `@backstage/config-loader` (1.0.0 → [1.1.0](../../changelogs/@backstage/config-loader.md#110))

#### 1.1.0

##### Minor Changes

- [`19f6c6c32a`](https://github.com/backstage/backstage/commit/19f6c6c32a): Added `ignoreSchemaErrors` to `schema.process`.

##### Patch Changes

- [`e0a51384ac`](https://github.com/backstage/backstage/commit/e0a51384ac): build(deps): bump `ajv` from 7.0.3 to 8.10.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16
- [`c47509e1a0`](https://github.com/backstage/backstage/commit/c47509e1a0): Implemented changes suggested by Deepsource.io including multiple double non-null assertion operators and unexpected awaits for non-promise values.

### `@backstage/integration` (1.0.0 → [1.1.0](../../changelogs/@backstage/integration.md#110))

#### 1.1.0

##### Minor Changes

- [`b7436743cb`](https://github.com/backstage/backstage/commit/b7436743cb): Gerrit integration: Added an optional configuration to set the Gitiles base url.

##### Patch Changes

- [`1691c6c5c2`](https://github.com/backstage/backstage/commit/1691c6c5c2): Clarify that config locations that emit User and Group kinds now need to declare so in the `catalog.locations.[].rules`
- [`3ef123bbf0`](https://github.com/backstage/backstage/commit/3ef123bbf0): Support external ID when assuming roles in S3 integration

  In order to assume a role created by a 3rd party as external
  ID is needed. This change adds an optional field to the s3
  integration configuration and consumes that in the AwsS3UrlReader.

- [`d26e1b0146`](https://github.com/backstage/backstage/commit/d26e1b0146): Exported `replaceGitLabUrlType` from package

### `@backstage/plugin-catalog` (1.0.0 → [1.1.0](../../changelogs/@backstage/plugin-catalog.md#110))

#### 1.1.0

##### Minor Changes

- [`bdc61b4002`](https://github.com/backstage/backstage/commit/bdc61b4002): Expose 'initalFilter' through initialKind prop on Catalog Page.

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`2a3cac4c60`](https://github.com/backstage/backstage/commit/2a3cac4c60): Corrected replacements for depreciated FilteredEntityLayout items
- [`f6d2694092`](https://github.com/backstage/backstage/commit/f6d2694092): Added tableOptions property to CatalogTable and DefaultCatalogPage to support customization of the Catalog Table. Related issue #10453
- [`5d5fdbe541`](https://github.com/backstage/backstage/commit/5d5fdbe541): Columns in CatalogTable now change depending on the entity kind, ensuring only relevant columns are displayed.

### `@backstage/plugin-scaffolder` (1.0.1 → [1.1.0](../../changelogs/@backstage/plugin-scaffolder.md#110))

#### 1.1.0

##### Minor Changes

- [`6331ec1ebc`](https://github.com/backstage/backstage/commit/6331ec1ebc): Added a context menu to the scaffolder page that provides links to the template editor and actions reference. These links and the presence of the context menu can be toggled through the `contextMenu` prop of the scaffolder page.
- [`8fad3b6ef5`](https://github.com/backstage/backstage/commit/8fad3b6ef5): The Template Preview page has been renamed to Template Editor, and is not available at the `/edit` path instead. There is a redirect in place from `/preview`.

##### Patch Changes

- [`7c7919777e`](https://github.com/backstage/backstage/commit/7c7919777e): build(deps-dev): bump `@testing-library/react-hooks` from 7.0.2 to 8.0.0
- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`946af407db`](https://github.com/backstage/backstage/commit/946af407db): Changed input label for owner field in GitlabRepoPicker
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16
- [`d34900af81`](https://github.com/backstage/backstage/commit/d34900af81): Added a new `NextScaffolderRouter` which will eventually replace the exiting router
- [`9975ff9852`](https://github.com/backstage/backstage/commit/9975ff9852): Applied the fix from version 1.0.1 of this package, which is part of the v1.0.2 release of Backstage.
- [`4431873583`](https://github.com/backstage/backstage/commit/4431873583): Update `usePermission` usage.

### `@backstage/plugin-scaffolder-backend` (1.0.0 → [1.1.0](../../changelogs/@backstage/plugin-scaffolder-backend.md#110))

#### 1.1.0

##### Minor Changes

- [`2a7d52ca2c`](https://github.com/backstage/backstage/commit/2a7d52ca2c): Override default commit message and author details in GitLab action
- [`f5f921dafb`](https://github.com/backstage/backstage/commit/f5f921dafb): Add new `draft` option to the `publish:github:pull-request` action.

##### Patch Changes

- [`64d9a031a8`](https://github.com/backstage/backstage/commit/64d9a031a8): build(deps): bump `isbinaryfile` from 4.0.8 to 5.0.0
- [`2f3d3a1eae`](https://github.com/backstage/backstage/commit/2f3d3a1eae): build(deps): bump `@gitbeaker/core` from 34.6.0 to 35.6.0

### `@backstage/plugin-techdocs` (1.0.1 → [1.1.0](../../changelogs/@backstage/plugin-techdocs.md#110))

#### 1.1.0

##### Minor Changes

- [`ace749b785`](https://github.com/backstage/backstage/commit/ace749b785): TechDocs supports a new, experimental method of customization: addons!

  To customize the standalone TechDocs reader page experience, update your `/packages/app/src/App.tsx` in the following way:

  ```diff
  import { TechDocsIndexPage, TechDocsReaderPage } from '@backstage/plugin-techdocs';
  + import { TechDocsAddons } from '@backstage/plugin-techdocs-react';
  + import { SomeAddon } from '@backstage/plugin-some-plugin';

  // ...

      <Route path="/docs" element={<TechDocsIndexPage />} />
      <Route
        path="/docs/:namespace/:kind/:name/*"
        element={<TechDocsReaderPage />}
      >
  +      <TechDocsAddons>
  +        <SomeAddon />
  +      </TechDocsAddons>
      </Route>

  // ...
  ```

  To customize the TechDocs reader experience on the Catalog entity page, update your `packages/app/src/components/catalog/EntityPage.tsx` in the following way:

  ```diff
  import { EntityTechdocsContent } from '@backstage/plugin-techdocs';
  + import { TechDocsAddons } from '@backstage/plugin-techdocs-react';
  + import { SomeAddon } from '@backstage/plugin-some-plugin';

  // ...

    <EntityLayoutWrapper>
      <EntityLayout.Route path="/" title="Overview">
        {overviewContent}
      </EntityLayout.Route>

      <EntityLayout.Route path="/docs" title="Docs">
  -      <EntityTechDocsContent />
  +      <EntityTechdocsContent>
  +        <TechDocsAddons>
  +          <SomeAddon />
  +        </TechDocsAddons>
  +      </EntityTechdocsContent>
      </EntityLayout.Route>
    </EntityLayoutWrapper>

  // ...
  ```

  If you do not wish to customize your TechDocs reader experience in this way at this time, no changes are necessary!

##### Patch Changes

- [`ab230a433f`](https://github.com/backstage/backstage/commit/ab230a433f): imports from `@backstage/plugin-search-react` instead of `@backstage/plugin-search`
- [`7c7919777e`](https://github.com/backstage/backstage/commit/7c7919777e): build(deps-dev): bump `@testing-library/react-hooks` from 7.0.2 to 8.0.0
- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16
- [`f0fb9153b7`](https://github.com/backstage/backstage/commit/f0fb9153b7): Fix broken query selectors on techdocs
- [`9975ff9852`](https://github.com/backstage/backstage/commit/9975ff9852): Applied the fix from version 1.0.1 of this package, which is part of the v1.0.2 release of Backstage.
- [`3ba256c389`](https://github.com/backstage/backstage/commit/3ba256c389): Fixed a bug preventing custom TechDocs reader page implementations from rendering without being double-wrapped in the `<TechDocsReaderPage />` component.
- [`fe53fe97d7`](https://github.com/backstage/backstage/commit/fe53fe97d7): Fix permalink scrolling for anchors where the id starts with a number.
- [`0152c0de22`](https://github.com/backstage/backstage/commit/0152c0de22): Some documentation layout tweaks:

  - drawer toggle margins
  - code block margins
  - sidebar drawer width
  - inner content width
  - footer link width
  - sidebar table of contents scroll

- [`3ba256c389`](https://github.com/backstage/backstage/commit/3ba256c389): Fixed a bug that caused addons in the `Subheader` location to break the default TechDocs reader page layout.

### `@backstage/plugin-techdocs-backend` (1.0.0 → [1.1.0](../../changelogs/@backstage/plugin-techdocs-backend.md#110))

#### 1.1.0

##### Minor Changes

- [`733187987b`](https://github.com/backstage/backstage/commit/733187987b): Removed an undocumented, broken behavior where `README.md` files would be copied to `index.md` if it did not exist, leading to broken links in the TechDocs UI.

  **WARNING**: If you notice 404s in TechDocs after updating, check to make sure that all markdown files referenced in your `mkdocs.yml`s' `nav` sections exist. The following configuration may be used to temporarily revert to the broken behavior.

  ```yaml
  techdocs:
    generator:
      mkdocs:
        legacyCopyReadmeMdToIndexMd: true
  ```

##### Patch Changes

- [`ada4446733`](https://github.com/backstage/backstage/commit/ada4446733): Specify type of `visibilityPermission` property on collators and collator factories.
- [`7762d54200`](https://github.com/backstage/backstage/commit/7762d54200): Fixed a bug affecting those with cache enabled that would result in empty content being cached if the first attempt to load a static asset from storage were made via a `HEAD` request, rather than a `GET` request.

### `@backstage/plugin-techdocs-node` (1.0.0 → [1.1.0](../../changelogs/@backstage/plugin-techdocs-node.md#110))

#### 1.1.0

##### Minor Changes

- [`bcf1a2496c`](https://github.com/backstage/backstage/commit/bcf1a2496c): Removed an undocumented, broken behavior where `README.md` files would be copied to `index.md` if it did not exist, leading to broken links in the TechDocs UI.

##### Patch Changes

- [`9fa68705bf`](https://github.com/backstage/backstage/commit/9fa68705bf): The default container version used to generate TechDocs content is now `v1.0.2`.

### `@techdocs/cli` (1.0.0 → [1.1.0](../../changelogs/@techdocs/cli.md#110))

#### 1.1.0

##### Minor Changes

- [`733187987b`](https://github.com/backstage/backstage/commit/733187987b): Removed an undocumented, broken behavior where `README.md` files would be copied to `index.md` if it did not exist, leading to broken links in the TechDocs UI.

  **WARNING**: If you notice 404s in TechDocs after updating, check to make sure that all markdown files referenced in your `mkdocs.yml`s' `nav` sections exist. The following flag may be passed to the `generate` command to temporarily revert to the broken behavior.

  ```sh
  techdocs-cli generate --legacyCopyReadmeMdToIndexMd
  ```

##### Patch Changes

- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16
- [`eb470ea54c`](https://github.com/backstage/backstage/commit/eb470ea54c): Adds a new flag to override the entrypoint when using a custom docker image. It could be used to reuse existing images with different entrypoints.

## Other patch version bumps

### `@backstage/app-defaults` (1.0.0 → [1.0.1](../../changelogs/@backstage/app-defaults.md#101))

#### 1.0.1

##### Patch Changes

- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/backend-common` (0.13.1 → [0.13.2](../../changelogs/@backstage/backend-common.md#0132))

#### 0.13.2

##### Patch Changes

- [`19f6c6c32a`](https://github.com/backstage/backstage/commit/19f6c6c32a): The backend will no longer fail to start up when configured secrets do not match the configuration schema.
- [`b7436743cb`](https://github.com/backstage/backstage/commit/b7436743cb): Added the GerritUrlReader that implements "readUrl".
- [`3ef123bbf0`](https://github.com/backstage/backstage/commit/3ef123bbf0): Support external ID when assuming roles in S3 integration

  In order to assume a role created by a 3rd party as external
  ID is needed. This change adds an optional field to the s3
  integration configuration and consumes that in the AwsS3UrlReader.

- [`bae9359032`](https://github.com/backstage/backstage/commit/bae9359032): The logger returned from `getVoidLogger` is now uses a silenced console transport instead.
- [`3ff0e79654`](https://github.com/backstage/backstage/commit/3ff0e79654): Tweaked the `UrlReader` multiplexer so that it uses the more helpful `NotAllowedError` messaging for all methods.
- [`12608f8ba8`](https://github.com/backstage/backstage/commit/12608f8ba8): Add `@types/webpack-env` to dependencies.
- [`f9f512559b`](https://github.com/backstage/backstage/commit/f9f512559b): Updated the visibility of database connection fields in config to be secret

### `@backstage/backend-test-utils` (0.1.22 → [0.1.23](../../changelogs/@backstage/backend-test-utils.md#0123))

#### 0.1.23

##### Patch Changes

- [`0654c87cf2`](https://github.com/backstage/backstage/commit/0654c87cf2): `TestDatabases.create` will no longer set up an `afterAll` test handler if no databases are supported.

### `@backstage/catalog-model` (1.0.0 → [1.0.1](../../changelogs/@backstage/catalog-model.md#101))

#### 1.0.1

##### Patch Changes

- [`e0a51384ac`](https://github.com/backstage/backstage/commit/e0a51384ac): build(deps): bump `ajv` from 7.0.3 to 8.10.0
- [`c12f8374d1`](https://github.com/backstage/backstage/commit/c12f8374d1): Added a connection between www-artist and artist-lookup components

  <details>
   <summary>Screenshots</summary>

  ![www-artist component](https://user-images.githubusercontent.com/74687/161088772-bc1df84e-28c1-4b08-b914-109cd6d04521.jpg)

  ![artist-lookup component](https://user-images.githubusercontent.com/74687/161088775-120c5610-f094-4cd1-bb2d-3ab9623a6c72.jpg)

  </details>

### `@backstage/codemods` (0.1.36 → [0.1.37](../../changelogs/@backstage/codemods.md#0137))

#### 0.1.37

##### Patch Changes

- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/core-app-api` (1.0.0 → [1.0.1](../../changelogs/@backstage/core-app-api.md#101))

#### 1.0.1

##### Patch Changes

- [`7c7919777e`](https://github.com/backstage/backstage/commit/7c7919777e): build(deps-dev): bump `@testing-library/react-hooks` from 7.0.2 to 8.0.0
- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`3ff2bfb66e`](https://github.com/backstage/backstage/commit/3ff2bfb66e): Refactored the route collection logic to prepare for future changes and avoid duplicate element tree traversal for the analytics context.
- [`a7bb762dab`](https://github.com/backstage/backstage/commit/a7bb762dab): fixed empty body issue for POST requests using FetchAPI with 'plugin://' prefix
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16
- [`c47509e1a0`](https://github.com/backstage/backstage/commit/c47509e1a0): Implemented changes suggested by Deepsource.io including multiple double non-null assertion operators and unexpected awaits for non-promise values.

### `@backstage/core-components` (0.9.2 → [0.9.3](../../changelogs/@backstage/core-components.md#093))

#### 0.9.3

##### Patch Changes

- [`7c7919777e`](https://github.com/backstage/backstage/commit/7c7919777e): build(deps-dev): bump `@testing-library/react-hooks` from 7.0.2 to 8.0.0
- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`25b8e8d5b5`](https://github.com/backstage/backstage/commit/25b8e8d5b5): Add BackstageTab to overridableComponents so can override styles in a theme
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16
- [`41fd107189`](https://github.com/backstage/backstage/commit/41fd107189): Exported `IdentityProviders` type.
- [`a13604b8f7`](https://github.com/backstage/backstage/commit/a13604b8f7): Adding a name to the core-components Tab styles so can customise in the theme settings
- [`19648d5cf5`](https://github.com/backstage/backstage/commit/19648d5cf5): fix support config ref to use backstage/backstage
- [`d505e43ffc`](https://github.com/backstage/backstage/commit/d505e43ffc): Fix highlighting of active sidebar items.
- [`72f3dfd05a`](https://github.com/backstage/backstage/commit/72f3dfd05a): Updated ProxiedSignInPageProps docs
- [`7741e47eae`](https://github.com/backstage/backstage/commit/7741e47eae): `<Sidebar />` now accepts additional props `sidebarOptions` and `submenuOptions` to allow further customization

### `@backstage/core-plugin-api` (1.0.0 → [1.0.1](../../changelogs/@backstage/core-plugin-api.md#101))

#### 1.0.1

##### Patch Changes

- [`7c7919777e`](https://github.com/backstage/backstage/commit/7c7919777e): build(deps-dev): bump `@testing-library/react-hooks` from 7.0.2 to 8.0.0
- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/dev-utils` (1.0.0 → [1.0.1](../../changelogs/@backstage/dev-utils.md#101))

#### 1.0.1

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0

### `@backstage/integration-react` (1.0.0 → [1.0.1](../../changelogs/@backstage/integration-react.md#101))

#### 1.0.1

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-airbrake` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-airbrake.md#034))

#### 0.3.4

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-allure` (0.1.19 → [0.1.20](../../changelogs/@backstage/plugin-allure.md#0120))

#### 0.1.20

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-analytics-module-ga` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-analytics-module-ga.md#0115))

#### 0.1.15

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-apache-airflow` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-apache-airflow.md#0112))

#### 0.1.12

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-api-docs` (0.8.3 → [0.8.4](../../changelogs/@backstage/plugin-api-docs.md#084))

#### 0.8.4

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`ae321bd414`](https://github.com/backstage/backstage/commit/ae321bd414): build(deps): bump `@asyncapi/react-component`
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16
- [`1c8ebf7af2`](https://github.com/backstage/backstage/commit/1c8ebf7af2): Add dedicated gRPC api definition widget

### `@backstage/plugin-azure-devops` (0.1.19 → [0.1.20](../../changelogs/@backstage/plugin-azure-devops.md#0120))

#### 0.1.20

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-azure-devops-backend` (0.3.9 → [0.3.10](../../changelogs/@backstage/plugin-azure-devops-backend.md#0310))

#### 0.3.10

##### Patch Changes

- [`236245d9f8`](https://github.com/backstage/backstage/commit/236245d9f8): Stop loading all teams when plugin is initialized

### `@backstage/plugin-badges` (0.2.27 → [0.2.28](../../changelogs/@backstage/plugin-badges.md#0228))

#### 0.2.28

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-badges-backend` (0.1.24 → [0.1.25](../../changelogs/@backstage/plugin-badges-backend.md#0125))

#### 0.1.25

##### Patch Changes

- [`4c93fd36ee`](https://github.com/backstage/backstage/commit/4c93fd36ee): allow overriding `DefaultBadgeBuilder.getMarkdownCode`

### `@backstage/plugin-bazaar` (0.1.18 → [0.1.19](../../changelogs/@backstage/plugin-bazaar.md#0119))

#### 0.1.19

##### Patch Changes

- [`69738379c7`](https://github.com/backstage/backstage/commit/69738379c7): Pass authorization header with Backstage token to backend requests.

### `@backstage/plugin-bitrise` (0.1.30 → [0.1.31](../../changelogs/@backstage/plugin-bitrise.md#0131))

#### 0.1.31

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-catalog-backend-module-aws` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-catalog-backend-module-aws.md#014))

#### 0.1.4

##### Patch Changes

- [`5969c4b65c`](https://github.com/backstage/backstage/commit/5969c4b65c): Add a new provider `AwsS3EntityProvider` as replacement for `AwsS3DiscoveryProcessor`.

  In order to migrate from the `AwsS3DiscoveryProcessor` you need to apply
  the following changes:

  **Before:**

  ```yaml
  # app-config.yaml

  catalog:
    locations:
      - type: s3-discovery
        target: https://sample-bucket.s3.us-east-2.amazonaws.com/prefix/
  ```

  ```ts
  /* packages/backend/src/plugins/catalog.ts */

  import { AwsS3DiscoveryProcessor } from '@backstage/plugin-catalog-backend-module-aws';

  const builder = await CatalogBuilder.create(env);
  /** ... other processors ... */
  builder.addProcessor(new AwsS3DiscoveryProcessor(env.reader));
  ```

  **After:**

  ```yaml
  # app-config.yaml

  catalog:
    providers:
      awsS3:
        yourProviderId: # identifies your dataset / provider independent of config changes
          bucketName: sample-bucket
          prefix: prefix/ # optional
          region: us-east-2 # optional, uses the default region otherwise
  ```

  ```ts
  /* packages/backend/src/plugins/catalog.ts */

  import { AwsS3EntityProvider } from '@backstage/plugin-catalog-backend-module-aws';

  const builder = await CatalogBuilder.create(env);
  /** ... other processors and/or providers ... */
  builder.addEntityProvider(
    ...AwsS3EntityProvider.fromConfig(env.config, {
      logger: env.logger,
      schedule: env.scheduler.createScheduledTaskRunner({
        frequency: Duration.fromObject({ minutes: 30 }),
        timeout: Duration.fromObject({ minutes: 3 }),
      }),
    }),
  );
  ```

  For simple setups, you can omit the provider ID at the config
  which has the same effect as using `default` for it.

  ```yaml
  # app-config.yaml

  catalog:
    providers:
      awsS3:
        # uses "default" as provider ID
        bucketName: sample-bucket
        prefix: prefix/ # optional
        region: us-east-2 # optional, uses the default region otherwise
  ```

- [`776a91ea3a`](https://github.com/backstage/backstage/commit/776a91ea3a): Corrected title and URL to setup documentation in README

### `@backstage/plugin-catalog-backend-module-bitbucket` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-catalog-backend-module-bitbucket.md#012))

#### 0.1.2

##### Patch Changes

- [`c47509e1a0`](https://github.com/backstage/backstage/commit/c47509e1a0): Implemented changes suggested by Deepsource.io including multiple double non-null assertion operators and unexpected awaits for non-promise values.
- [`9fed130139`](https://github.com/backstage/backstage/commit/9fed130139): split BitbucketClient into BitbucketCloudClient, BitbucketServerClient

### `@backstage/plugin-catalog-backend-module-ldap` (0.4.1 → [0.4.2](../../changelogs/@backstage/plugin-catalog-backend-module-ldap.md#042))

#### 0.4.2

##### Patch Changes

- [`ebc0aef2c6`](https://github.com/backstage/backstage/commit/ebc0aef2c6): Changed relationship creation in LDAP data processor to leverage entityRefs instead of metadata.name

### `@backstage/plugin-catalog-backend-module-msgraph` (0.3.0 → [0.3.1](../../changelogs/@backstage/plugin-catalog-backend-module-msgraph.md#031))

#### 0.3.1

##### Patch Changes

- [`1691c6c5c2`](https://github.com/backstage/backstage/commit/1691c6c5c2): Clarify that config locations that emit User and Group kinds now need to declare so in the `catalog.locations.[].rules`
- [`85fc53df95`](https://github.com/backstage/backstage/commit/85fc53df95): Now plugin configuration accept a new optional parameter `groupSelect` which allow the client to fetch defined fields from the ms-graph api.

### `@backstage/plugin-catalog-common` (1.0.0 → [1.0.1](../../changelogs/@backstage/plugin-catalog-common.md#101))

#### 1.0.1

##### Patch Changes

- [`ada4446733`](https://github.com/backstage/backstage/commit/ada4446733): Use `createPermission` helper when creating permissions.
- [`8c8bee47f4`](https://github.com/backstage/backstage/commit/8c8bee47f4): Add `@alpha` `CatalogEntityPermission` convenience type, available for import from `@backstage/plugin-catalog-common/alpha`.

### `@backstage/plugin-catalog-graph` (0.2.15 → [0.2.16](../../changelogs/@backstage/plugin-catalog-graph.md#0216))

#### 0.2.16

##### Patch Changes

- [`7c7919777e`](https://github.com/backstage/backstage/commit/7c7919777e): build(deps-dev): bump `@testing-library/react-hooks` from 7.0.2 to 8.0.0
- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`77800a32dd`](https://github.com/backstage/backstage/commit/77800a32dd): Added renderNode and renderLabel property to EntityRelationsGraph to support customization using CustomNode and CustomLabel components
- [`99063c39ae`](https://github.com/backstage/backstage/commit/99063c39ae): Minor API report cleanup

### `@backstage/plugin-catalog-import` (0.8.6 → [0.8.7](../../changelogs/@backstage/plugin-catalog-import.md#087))

#### 0.8.7

##### Patch Changes

- [`7c7919777e`](https://github.com/backstage/backstage/commit/7c7919777e): build(deps-dev): bump `@testing-library/react-hooks` from 7.0.2 to 8.0.0
- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0

### `@backstage/plugin-catalog-react` (1.0.0 → [1.0.1](../../changelogs/@backstage/plugin-catalog-react.md#101))

#### 1.0.1

##### Patch Changes

- [`0ffd88a90e`](https://github.com/backstage/backstage/commit/0ffd88a90e): Prevent permissions with types other than `ResourcePermission<'catalog-entity'>` from being used with the `useEntityPermission` hook.
- [`7c7919777e`](https://github.com/backstage/backstage/commit/7c7919777e): build(deps-dev): bump `@testing-library/react-hooks` from 7.0.2 to 8.0.0
- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`4af82967f4`](https://github.com/backstage/backstage/commit/4af82967f4): Decouple tags picker from backend entities

  `EntityTagPicker` fetches all the tags independently and it doesn't require all the entities to be available client side.

- [`4be0d1e777`](https://github.com/backstage/backstage/commit/4be0d1e777): Changed catalog filter components to only pay attention to query parameters relevant to the component.
- [`5d5fdbe541`](https://github.com/backstage/backstage/commit/5d5fdbe541): Columns in CatalogTable now change depending on the entity kind, ensuring only relevant columns are displayed.
- [`863e7bcb7b`](https://github.com/backstage/backstage/commit/863e7bcb7b): Updated the "unregister location" behavior in `UnregisterEntityDialog`. Removed unnecessary entity deletion requests that were sent after successfully deleting a location.
- [`37b04b5a5e`](https://github.com/backstage/backstage/commit/37b04b5a5e): Removed broken link from Labels section of entity inspector.
- [`a496cee4d1`](https://github.com/backstage/backstage/commit/a496cee4d1): Add support for string refs to the `EntityRefLinks` component
- [`d34900af81`](https://github.com/backstage/backstage/commit/d34900af81): Added a new `NextScaffolderRouter` which will eventually replace the exiting router
- [`99063c39ae`](https://github.com/backstage/backstage/commit/99063c39ae): Minor API report cleanup
- [`4431873583`](https://github.com/backstage/backstage/commit/4431873583): Update `usePermission` usage.

### `@backstage/plugin-circleci` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-circleci.md#034))

#### 0.3.4

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-cloudbuild` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-cloudbuild.md#034))

#### 0.3.4

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-code-climate` (0.1.3 → [0.1.4](../../changelogs/@backstage/plugin-code-climate.md#014))

#### 0.1.4

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-code-coverage` (0.1.30 → [0.1.31](../../changelogs/@backstage/plugin-code-coverage.md#0131))

#### 0.1.31

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-config-schema` (0.1.26 → [0.1.27](../../changelogs/@backstage/plugin-config-schema.md#0127))

#### 0.1.27

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-cost-insights` (0.11.25 → [0.11.26](../../changelogs/@backstage/plugin-cost-insights.md#01126))

#### 0.11.26

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-explore` (0.3.34 → [0.3.35](../../changelogs/@backstage/plugin-explore.md#0335))

#### 0.3.35

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-firehydrant` (0.1.20 → [0.1.21](../../changelogs/@backstage/plugin-firehydrant.md#0121))

#### 0.1.21

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-fossa` (0.2.35 → [0.2.36](../../changelogs/@backstage/plugin-fossa.md#0236))

#### 0.2.36

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-gcp-projects` (0.3.22 → [0.3.23](../../changelogs/@backstage/plugin-gcp-projects.md#0323))

#### 0.3.23

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-git-release-manager` (0.3.16 → [0.3.17](../../changelogs/@backstage/plugin-git-release-manager.md#0317))

#### 0.3.17

##### Patch Changes

- [`7c7919777e`](https://github.com/backstage/backstage/commit/7c7919777e): build(deps-dev): bump `@testing-library/react-hooks` from 7.0.2 to 8.0.0
- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-github-actions` (0.5.3 → [0.5.4](../../changelogs/@backstage/plugin-github-actions.md#054))

#### 0.5.4

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-github-deployments` (0.1.34 → [0.1.35](../../changelogs/@backstage/plugin-github-deployments.md#0135))

#### 0.1.35

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-gitops-profiles` (0.3.21 → [0.3.22](../../changelogs/@backstage/plugin-gitops-profiles.md#0322))

#### 0.3.22

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-gocd` (0.1.9 → [0.1.10](../../changelogs/@backstage/plugin-gocd.md#0110))

#### 0.1.10

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16
- [`2677db7c15`](https://github.com/backstage/backstage/commit/2677db7c15): Add pagination controls to GoCD build table
- [`4c6c2b2918`](https://github.com/backstage/backstage/commit/4c6c2b2918): Add DORA metrics insights to GoCD builds page

### `@backstage/plugin-graphiql` (0.2.35 → [0.2.36](../../changelogs/@backstage/plugin-graphiql.md#0236))

#### 0.2.36

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16
- [`99063c39ae`](https://github.com/backstage/backstage/commit/99063c39ae): Minor API report cleanup

### `@backstage/plugin-home` (0.4.19 → [0.4.20](../../changelogs/@backstage/plugin-home.md#0420))

#### 0.4.20

##### Patch Changes

- [`ab230a433f`](https://github.com/backstage/backstage/commit/ab230a433f): Export template logos `TemplateBackstageLogo` and `TemplateBackstageLogoIcon` from package.
- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`ac323de4ad`](https://github.com/backstage/backstage/commit/ac323de4ad): - Adds new `HomePageStackOverflowQuestions` component which renders a list of stack overflow questions on your homepage.

  - Exports `ComponentRenderer` type.

- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16
- [`9b58775849`](https://github.com/backstage/backstage/commit/9b58775849): Updated the dependency on `@backstage/config` to `^1.0.0`.
- [`99063c39ae`](https://github.com/backstage/backstage/commit/99063c39ae): Minor API report cleanup

### `@backstage/plugin-ilert` (0.1.29 → [0.1.30](../../changelogs/@backstage/plugin-ilert.md#0130))

#### 0.1.30

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-jenkins` (0.7.2 → [0.7.3](../../changelogs/@backstage/plugin-jenkins.md#073))

#### 0.7.3

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-jenkins-backend` (0.1.19 → [0.1.20](../../changelogs/@backstage/plugin-jenkins-backend.md#0120))

#### 0.1.20

##### Patch Changes

- [`1917923ab8`](https://github.com/backstage/backstage/commit/1917923ab8): Use `PermissionEvaluator` instead of `PermissionAuthorizer`, which is now deprecated.
- [`b013de3f50`](https://github.com/backstage/backstage/commit/b013de3f50): feature: provide access token to JenkinsInstanceConfig. It can be passed to other backend calls if authentication enabled. DefaultJenkinsInfoProvider sends always this token to catalog api if access token exists.
- [`ca91107110`](https://github.com/backstage/backstage/commit/ca91107110): Fixed possible type error if jenkins response contains null values
- [`71f8708f00`](https://github.com/backstage/backstage/commit/71f8708f00): Make `resourceRef` required in `JenkinsApi` to match usage.

### `@backstage/plugin-jenkins-common` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-jenkins-common.md#013))

#### 0.1.3

##### Patch Changes

- [`ada4446733`](https://github.com/backstage/backstage/commit/ada4446733): Use `createPermission` helper when creating permissions.

### `@backstage/plugin-kafka` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-kafka.md#034))

#### 0.3.4

##### Patch Changes

- [`7c7919777e`](https://github.com/backstage/backstage/commit/7c7919777e): build(deps-dev): bump `@testing-library/react-hooks` from 7.0.2 to 8.0.0
- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-kafka-backend` (0.2.23 → [0.2.24](../../changelogs/@backstage/plugin-kafka-backend.md#0224))

#### 0.2.24

##### Patch Changes

- [`f26cf63878`](https://github.com/backstage/backstage/commit/f26cf63878): build(deps-dev): bump `@types/jest-when` from 2.7.2 to 3.5.0

### `@backstage/plugin-kubernetes` (0.6.3 → [0.6.4](../../changelogs/@backstage/plugin-kubernetes.md#064))

#### 0.6.4

##### Patch Changes

- [`82e2ae6ff6`](https://github.com/backstage/backstage/commit/82e2ae6ff6): build(deps): bump `cronstrue` from 1.125.0 to 2.2.0
- [`7c7919777e`](https://github.com/backstage/backstage/commit/7c7919777e): build(deps-dev): bump `@testing-library/react-hooks` from 7.0.2 to 8.0.0
- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`1023ee6353`](https://github.com/backstage/backstage/commit/1023ee6353): export kubernetes components
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16
- [`f616d99f6f`](https://github.com/backstage/backstage/commit/f616d99f6f): Fix division by zero in currentToDeclaredResourceToPerc when pod resources weren't set

### `@backstage/plugin-lighthouse` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-lighthouse.md#034))

#### 0.3.4

##### Patch Changes

- [`7c7919777e`](https://github.com/backstage/backstage/commit/7c7919777e): build(deps-dev): bump `@testing-library/react-hooks` from 7.0.2 to 8.0.0
- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-newrelic` (0.3.21 → [0.3.22](../../changelogs/@backstage/plugin-newrelic.md#0322))

#### 0.3.22

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-org` (0.5.3 → [0.5.4](../../changelogs/@backstage/plugin-org.md#054))

#### 0.5.4

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`cb592bfce7`](https://github.com/backstage/backstage/commit/cb592bfce7): Provides the ability to hide the relations toggle on the `OwnershipCard` as well as setting a default relation type.

  To hide the toggle simply include the `hideRelationsToggle` prop like this:

  ```tsx
  <EntityOwnershipCard
    variant="gridItem"
    entityFilterKind={customEntityFilterKind}
    hideRelationsToggle
  />
  ```

  To set the default relation type, add the `relationsType` prop with a value of direct or aggregated, the default if not provided is direct. Here is an example:

  ```tsx
  <EntityOwnershipCard
    variant="gridItem"
    entityFilterKind={customEntityFilterKind}
    relationsType="aggregated"
  />
  ```

- [`d014fe2cb4`](https://github.com/backstage/backstage/commit/d014fe2cb4): Introduced a new MyGroupsSidebarItem SidebarItem that links to one or more groups based on the logged in user's membership.

  To use MyGroupsSidebarItem you'll need to add it to your `Root.tsx` like this:

  ```diff
  // app/src/components/Root/Root.tsx
  + import { MyGroupsSidebarItem } from '@backstage/plugin-org';
  + import GroupIcon from '@material-ui/icons/People';

  <SidebarPage>
      <Sidebar>
        //...
        <SidebarGroup label="Menu" icon={<MenuIcon />}>
          {/* Global nav, not org-specific */}
          //...
          <SidebarItem icon={HomeIcon} to="catalog" text="Home" />
  +       <MyGroupsSidebarItem
  +         singularTitle="My Squad"
  +         pluralTitle="My Squads"
  +         icon={GroupIcon}
  +       />
         //...
        </SidebarGroup>
      </ Sidebar>
  </SidebarPage>
  ```

- [`111995470d`](https://github.com/backstage/backstage/commit/111995470d): add aggregated ownership type for kind group in OwnershipCard
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16
- [`0bada4fc4d`](https://github.com/backstage/backstage/commit/0bada4fc4d): Added the `metadata.description` to the bottom of each member on the MembersListCard
- [`99063c39ae`](https://github.com/backstage/backstage/commit/99063c39ae): Minor API report cleanup

### `@backstage/plugin-pagerduty` (0.3.30 → [0.3.31](../../changelogs/@backstage/plugin-pagerduty.md#0331))

#### 0.3.31

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-periskop` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-periskop.md#012))

#### 0.1.2

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-permission-backend` (0.5.5 → [0.5.6](../../changelogs/@backstage/plugin-permission-backend.md#056))

#### 0.5.6

##### Patch Changes

- [`c98d271466`](https://github.com/backstage/backstage/commit/c98d271466): Use updated types from `@backstage/plugin-permission-common`
- [`95284162d6`](https://github.com/backstage/backstage/commit/95284162d6): - Add more specific check for policies which return conditional decisions for non-resource permissions.
  - Refine permission validation in authorize endpoint to differentiate between `BasicPermission` and `ResourcePermission` instances.

### `@backstage/plugin-rollbar` (0.4.3 → [0.4.4](../../changelogs/@backstage/plugin-rollbar.md#044))

#### 0.4.4

##### Patch Changes

- [`7c7919777e`](https://github.com/backstage/backstage/commit/7c7919777e): build(deps-dev): bump `@testing-library/react-hooks` from 7.0.2 to 8.0.0
- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-scaffolder-backend-module-rails` (0.3.5 → [0.3.6](../../changelogs/@backstage/plugin-scaffolder-backend-module-rails.md#036))

#### 0.3.6

##### Patch Changes

- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-search-backend-module-elasticsearch` (0.1.2 → [0.1.3](../../changelogs/@backstage/plugin-search-backend-module-elasticsearch.md#013))

#### 0.1.3

##### Patch Changes

- [`62ee65422c`](https://github.com/backstage/backstage/commit/62ee65422c): Use new `IndexableResultSet` type as return type of query method in `SearchEngine` implementation.

### `@backstage/plugin-search-backend-module-pg` (0.3.1 → [0.3.2](../../changelogs/@backstage/plugin-search-backend-module-pg.md#032))

#### 0.3.2

##### Patch Changes

- [`62ee65422c`](https://github.com/backstage/backstage/commit/62ee65422c): Use new `IndexableResultSet` type as return type of query method in `SearchEngine` implementation.

### `@backstage/plugin-sentry` (0.3.41 → [0.3.42](../../changelogs/@backstage/plugin-sentry.md#0342))

#### 0.3.42

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`68bb66102d`](https://github.com/backstage/backstage/commit/68bb66102d): Exposed options for the material table
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-shortcuts` (0.2.4 → [0.2.5](../../changelogs/@backstage/plugin-shortcuts.md#025))

#### 0.2.5

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-sonarqube` (0.3.3 → [0.3.4](../../changelogs/@backstage/plugin-sonarqube.md#034))

#### 0.3.4

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-splunk-on-call` (0.3.27 → [0.3.28](../../changelogs/@backstage/plugin-splunk-on-call.md#0328))

#### 0.3.28

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-tech-insights-backend-module-jsonfc.md#0115))

#### 0.1.15

##### Patch Changes

- [`e0a51384ac`](https://github.com/backstage/backstage/commit/e0a51384ac): build(deps): bump `ajv` from 7.0.3 to 8.10.0
- [`ab008a0988`](https://github.com/backstage/backstage/commit/ab008a0988): Removes node-cron from tech-insights to utilize backend-tasks

### `@backstage/plugin-tech-insights-node` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-tech-insights-node.md#029))

#### 0.2.9

##### Patch Changes

- [`231fee736b`](https://github.com/backstage/backstage/commit/231fee736b): Adds an optional timeout to fact retriever registrations to stop a task if it runs too long.

### `@backstage/plugin-tech-radar` (0.5.10 → [0.5.11](../../changelogs/@backstage/plugin-tech-radar.md#0511))

#### 0.5.11

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16
- [`f69789330a`](https://github.com/backstage/backstage/commit/f69789330a): Fix an issue where the Radar is not updated when switching between different radars

### `@backstage/plugin-todo` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-todo.md#026))

#### 0.2.6

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/plugin-todo-backend` (0.1.27 → [0.1.28](../../changelogs/@backstage/plugin-todo-backend.md#0128))

#### 0.1.28

##### Patch Changes

- [`5da036264b`](https://github.com/backstage/backstage/commit/5da036264b): Fix method to get source-location.

### `@backstage/plugin-user-settings` (0.4.2 → [0.4.3](../../changelogs/@backstage/plugin-user-settings.md#043))

#### 0.4.3

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`cf647f6a72`](https://github.com/backstage/backstage/commit/cf647f6a72): Wired up the OneLogin provider to be visible in the Settings UI when configured correctly.

  Previously it wasn't visible at all.

- [`af508a895e`](https://github.com/backstage/backstage/commit/af508a895e): Dynamically layout User Settings theme toggle container
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16
- [`016c574b51`](https://github.com/backstage/backstage/commit/016c574b51): Added the ability to render extra setting tabs

### `@backstage/plugin-xcmetrics` (0.2.23 → [0.2.24](../../changelogs/@backstage/plugin-xcmetrics.md#0224))

#### 0.2.24

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/test-utils` (1.0.0 → [1.0.1](../../changelogs/@backstage/test-utils.md#101))

#### 1.0.1

##### Patch Changes

- [`24254fd433`](https://github.com/backstage/backstage/commit/24254fd433): build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- [`c98d271466`](https://github.com/backstage/backstage/commit/c98d271466): Use updated types from `@backstage/plugin-permission-common`
- [`230ad0826f`](https://github.com/backstage/backstage/commit/230ad0826f): Bump to using `@types/node` v16

### `@backstage/version-bridge` (1.0.0 → [1.0.1](../../changelogs/@backstage/version-bridge.md#101))

#### 1.0.1

##### Patch Changes

- [`7c7919777e`](https://github.com/backstage/backstage/commit/7c7919777e): build(deps-dev): bump `@testing-library/react-hooks` from 7.0.2 to 8.0.0

## Excluded dependency updates

- `@backstage/catalog-client` (1.0.0 → [1.0.1](../../changelogs/@backstage/catalog-client.md#101))
- `@backstage/plugin-airbrake-backend` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-airbrake-backend.md#024))
- `@backstage/plugin-app-backend` (0.3.30 → [0.3.31](../../changelogs/@backstage/plugin-app-backend.md#0331))
- `@backstage/plugin-bazaar-backend` (0.1.14 → [0.1.15](../../changelogs/@backstage/plugin-bazaar-backend.md#0115))
- `@backstage/plugin-catalog-backend-module-azure` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-catalog-backend-module-azure.md#012))
- `@backstage/plugin-catalog-backend-module-github` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-catalog-backend-module-github.md#012))
- `@backstage/plugin-catalog-backend-module-gitlab` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-catalog-backend-module-gitlab.md#012))
- `@backstage/plugin-catalog-graphql` (0.3.7 → [0.3.8](../../changelogs/@backstage/plugin-catalog-graphql.md#038))
- `@backstage/plugin-cicd-statistics` (0.1.5 → [0.1.6](../../changelogs/@backstage/plugin-cicd-statistics.md#016))
- `@backstage/plugin-code-coverage-backend` (0.1.28 → [0.1.29](../../changelogs/@backstage/plugin-code-coverage-backend.md#0129))
- `@backstage/plugin-graphql-backend` (0.1.20 → [0.1.21](../../changelogs/@backstage/plugin-graphql-backend.md#0121))
- `@backstage/plugin-kubernetes-common` (0.2.8 → [0.2.9](../../changelogs/@backstage/plugin-kubernetes-common.md#029))
- `@backstage/plugin-newrelic-dashboard` (0.1.11 → [0.1.12](../../changelogs/@backstage/plugin-newrelic-dashboard.md#0112))
- `@backstage/plugin-periskop-backend` (0.1.1 → [0.1.2](../../changelogs/@backstage/plugin-periskop-backend.md#012))
- `@backstage/plugin-proxy-backend` (0.2.24 → [0.2.25](../../changelogs/@backstage/plugin-proxy-backend.md#0225))
- `@backstage/plugin-rollbar-backend` (0.1.27 → [0.1.28](../../changelogs/@backstage/plugin-rollbar-backend.md#0128))
- `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.5 → [0.2.6](../../changelogs/@backstage/plugin-scaffolder-backend-module-cookiecutter.md#026))
- `@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.3 → [0.2.4](../../changelogs/@backstage/plugin-scaffolder-backend-module-yeoman.md#024))
- `@backstage/plugin-scaffolder-common` (1.0.0 → [1.0.1](../../changelogs/@backstage/plugin-scaffolder-common.md#101))
- `@backstage/search-common` (0.3.2 → [0.3.3](../../changelogs/@backstage/search-common.md#033))
- `@backstage/techdocs-common` (0.11.13 → [0.11.14](../../changelogs/@backstage/techdocs-common.md#01114))
