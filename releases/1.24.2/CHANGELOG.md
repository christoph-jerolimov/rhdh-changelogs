# Backstage Release 1.24.2 changelog

Changes between 1.24.1 and 1.24.2 — 224 changed and 0 added packages.

## `@backstage/app-defaults` (1.5.1 → 1.5.2)

### 1.5.2

#### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/core-app-api@1.12.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/theme@0.5.2
  - @backstage/plugin-permission-react@0.4.21

## `@backstage/backend-app-api` (0.6.0 → 0.6.1)

### 0.6.1

#### Patch Changes

- de1f45d: Temporarily revert the rate limiting
- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-auth-node@0.4.10
  - @backstage/backend-tasks@0.5.20
  - @backstage/plugin-permission-node@0.7.26
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/cli-common@0.1.13
  - @backstage/cli-node@0.2.4
  - @backstage/config@1.2.0
  - @backstage/config-loader@1.7.0
  - @backstage/errors@1.2.4
  - @backstage/types@1.1.1

## `@backstage/backend-common` (0.21.4 → 0.21.5)

### 0.21.5

#### Patch Changes

- 81a995f: Updated dependency `aws-sdk-client-mock` to `^4.0.0`.
- Updated dependencies
  - @backstage/backend-app-api@0.6.1
  - @backstage/integration-aws-node@0.1.11
  - @backstage/plugin-auth-node@0.4.10
  - @backstage/backend-dev-utils@0.1.4
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/cli-common@0.1.13
  - @backstage/config@1.2.0
  - @backstage/config-loader@1.7.0
  - @backstage/errors@1.2.4
  - @backstage/integration@1.9.1
  - @backstage/types@1.1.1

## `@backstage/backend-defaults` (0.2.14 → 0.2.15)

### 0.2.15

#### Patch Changes

- Updated dependencies
  - @backstage/backend-app-api@0.6.1
  - @backstage/backend-common@0.21.5

## `@backstage/backend-dynamic-feature-service` (0.2.5 → 0.2.6)

### 0.2.6

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-backend@1.20.0
  - @backstage/backend-app-api@0.6.1
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-auth-node@0.4.10
  - @backstage/backend-tasks@0.5.20
  - @backstage/plugin-events-backend@0.3.1
  - @backstage/plugin-events-node@0.3.1
  - @backstage/plugin-permission-node@0.7.26
  - @backstage/plugin-scaffolder-node@0.4.1
  - @backstage/plugin-search-backend-node@1.2.19
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/cli-common@0.1.13
  - @backstage/cli-node@0.2.4
  - @backstage/config@1.2.0
  - @backstage/config-loader@1.7.0
  - @backstage/errors@1.2.4
  - @backstage/types@1.1.1
  - @backstage/plugin-app-node@0.1.15
  - @backstage/plugin-permission-common@0.7.13
  - @backstage/plugin-search-common@1.2.11

## `@backstage/backend-openapi-utils` (0.1.7 → 0.1.8)

### 0.1.8

#### Patch Changes

- Updated dependencies
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/errors@1.2.4

## `@backstage/backend-plugin-api` (0.6.14 → 0.6.15)

### 0.6.15

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-auth-node@0.4.10
  - @backstage/backend-tasks@0.5.20
  - @backstage/config@1.2.0
  - @backstage/types@1.1.1
  - @backstage/plugin-permission-common@0.7.13

## `@backstage/backend-tasks` (0.5.19 → 0.5.20)

### 0.5.20

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/types@1.1.1

## `@backstage/backend-test-utils` (0.3.4 → 0.3.5)

### 0.3.5

#### Patch Changes

- Updated dependencies
  - @backstage/backend-app-api@0.6.1
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-auth-node@0.4.10
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/types@1.1.1

## `@backstage/catalog-client` (1.6.1 → 1.6.2)

### 1.6.2

#### Patch Changes

- 7e8a7c8: Added missing commas to the example of `queryEntities`
- Updated dependencies
  - @backstage/catalog-model@1.4.5
  - @backstage/errors@1.2.4

## `@backstage/cli` (0.26.0 → 0.26.1)

### 0.26.1

#### Patch Changes

- eeb226a: Updated dependency `rollup` to `^4.0.0`.
- cc371d6: Ignore transforming only on `react-use/lib`, not whole `react-use` in jest.

  ** POTENTIAL BREAKAGE **
  If your tests fail, please change to use path import from `react-use/esm/`. It is also recommended to migrate from `react-user/lib` imports to `react-use/esm`

- Updated dependencies
  - @backstage/catalog-model@1.4.5
  - @backstage/cli-common@0.1.13
  - @backstage/cli-node@0.2.4
  - @backstage/config@1.2.0
  - @backstage/config-loader@1.7.0
  - @backstage/errors@1.2.4
  - @backstage/eslint-plugin@0.1.6
  - @backstage/integration@1.9.1
  - @backstage/release-manifests@0.0.11
  - @backstage/types@1.1.1

## `@backstage/core-app-api` (1.12.1 → 1.12.2)

### 1.12.2

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-plugin-api@1.9.1
  - @backstage/config@1.2.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7

## `@backstage/core-compat-api` (0.2.1 → 0.2.2)

### 0.2.2

#### Patch Changes

- Updated dependencies
  - @backstage/core-app-api@1.12.2
  - @backstage/frontend-plugin-api@0.6.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/version-bridge@1.0.7

## `@backstage/core-components` (0.14.1 → 0.14.2)

### 0.14.2

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-plugin-api@1.9.1
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/theme@0.5.2
  - @backstage/version-bridge@1.0.7

## `@backstage/dev-utils` (1.0.28 → 1.0.29)

### 1.0.29

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/core-app-api@1.12.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/app-defaults@1.5.2
  - @backstage/integration-react@1.1.25
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/theme@0.5.2

## `@backstage/frontend-app-api` (0.6.1 → 0.6.2)

### 0.6.2

#### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/core-app-api@1.12.2
  - @backstage/frontend-plugin-api@0.6.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/theme@0.5.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7

## `@backstage/frontend-plugin-api` (0.6.1 → 0.6.2)

### 0.6.2

#### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7

## `@backstage/frontend-test-utils` (0.1.3 → 0.1.4)

### 0.1.4

#### Patch Changes

- Updated dependencies
  - @backstage/frontend-app-api@0.6.2
  - @backstage/frontend-plugin-api@0.6.2
  - @backstage/test-utils@1.5.2
  - @backstage/types@1.1.1

## `@backstage/integration-aws-node` (0.1.10 → 0.1.11)

### 0.1.11

#### Patch Changes

- 81a995f: Updated dependency `aws-sdk-client-mock` to `^4.0.0`.
- 823cf8e: Updated dependency `aws-sdk-client-mock-jest` to `^4.0.0`.
- Updated dependencies
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4

## `@backstage/plugin-adr` (0.6.14 → 0.6.15)

### 0.6.15

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/plugin-search-react@1.7.8
  - @backstage/frontend-plugin-api@0.6.2
  - @backstage/integration-react@1.1.25
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/plugin-adr-common@0.2.21
  - @backstage/plugin-search-common@1.2.11

## `@backstage/plugin-adr-backend` (0.4.11 → 0.4.12)

### 0.4.12

#### Patch Changes

- Updated dependencies
  - @backstage/catalog-client@1.6.2
  - @backstage/backend-common@0.21.5
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/integration@1.9.1
  - @backstage/plugin-adr-common@0.2.21
  - @backstage/plugin-search-common@1.2.11

## `@backstage/plugin-airbrake` (0.3.31 → 0.3.32)

### 0.3.32

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/dev-utils@1.0.29
  - @backstage/core-plugin-api@1.9.1
  - @backstage/test-utils@1.5.2
  - @backstage/catalog-model@1.4.5

## `@backstage/plugin-airbrake-backend` (0.3.11 → 0.3.12)

### 0.3.12

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0

## `@backstage/plugin-allure` (0.1.47 → 0.1.48)

### 0.1.48

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5

## `@backstage/plugin-analytics-module-ga` (0.2.1 → 0.2.2)

### 0.2.2

#### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/frontend-plugin-api@0.6.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/config@1.2.0

## `@backstage/plugin-analytics-module-ga4` (0.2.1 → 0.2.2)

### 0.2.2

#### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/frontend-plugin-api@0.6.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/config@1.2.0

## `@backstage/plugin-analytics-module-newrelic-browser` (0.1.1 → 0.1.2)

### 0.1.2

#### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/frontend-plugin-api@0.6.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/config@1.2.0

## `@backstage/plugin-apache-airflow` (0.2.21 → 0.2.22)

### 0.2.22

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/core-plugin-api@1.9.1

## `@backstage/plugin-api-docs` (0.11.1 → 0.11.2)

### 0.11.2

#### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/plugin-catalog@1.18.1
  - @backstage/frontend-plugin-api@0.6.2
  - @backstage/core-compat-api@0.2.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/plugin-catalog-common@1.0.22
  - @backstage/plugin-permission-react@0.4.21

## `@backstage/plugin-apollo-explorer` (0.1.21 → 0.1.22)

### 0.1.22

#### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/core-plugin-api@1.9.1

## `@backstage/plugin-app-backend` (0.3.62 → 0.3.63)

### 0.3.63

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0
  - @backstage/config-loader@1.7.0
  - @backstage/types@1.1.1
  - @backstage/plugin-app-node@0.1.15

## `@backstage/plugin-app-node` (0.1.14 → 0.1.15)

### 0.1.15

#### Patch Changes

- Updated dependencies
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config-loader@1.7.0

## `@backstage/plugin-app-visualizer` (0.1.2 → 0.1.3)

### 0.1.3

#### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/frontend-plugin-api@0.6.2
  - @backstage/core-plugin-api@1.9.1

## `@backstage/plugin-auth-backend` (0.22.1 → 0.22.2)

### 0.22.2

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-node@1.10.0
  - @backstage/catalog-client@1.6.2
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-auth-node@0.4.10
  - @backstage/plugin-auth-backend-module-aws-alb-provider@0.1.7
  - @backstage/plugin-auth-backend-module-oidc-provider@0.1.6
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/types@1.1.1
  - @backstage/plugin-auth-backend-module-atlassian-provider@0.1.7
  - @backstage/plugin-auth-backend-module-gcp-iap-provider@0.2.10
  - @backstage/plugin-auth-backend-module-github-provider@0.1.12
  - @backstage/plugin-auth-backend-module-gitlab-provider@0.1.12
  - @backstage/plugin-auth-backend-module-google-provider@0.1.12
  - @backstage/plugin-auth-backend-module-microsoft-provider@0.1.10
  - @backstage/plugin-auth-backend-module-oauth2-provider@0.1.12
  - @backstage/plugin-auth-backend-module-oauth2-proxy-provider@0.1.8
  - @backstage/plugin-auth-backend-module-okta-provider@0.0.8

## `@backstage/plugin-auth-backend-module-atlassian-provider` (0.1.6 → 0.1.7)

### 0.1.7

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-auth-node@0.4.10
  - @backstage/backend-plugin-api@0.6.15

## `@backstage/plugin-auth-backend-module-aws-alb-provider` (0.1.6 → 0.1.7)

### 0.1.7

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-auth-backend@0.22.2
  - @backstage/plugin-auth-node@0.4.10
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/errors@1.2.4

## `@backstage/plugin-auth-backend-module-gcp-iap-provider` (0.2.9 → 0.2.10)

### 0.2.10

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-auth-node@0.4.10
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/errors@1.2.4
  - @backstage/types@1.1.1

## `@backstage/plugin-auth-backend-module-github-provider` (0.1.11 → 0.1.12)

### 0.1.12

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-auth-node@0.4.10
  - @backstage/backend-plugin-api@0.6.15

## `@backstage/plugin-auth-backend-module-gitlab-provider` (0.1.11 → 0.1.12)

### 0.1.12

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-auth-node@0.4.10
  - @backstage/backend-plugin-api@0.6.15

## `@backstage/plugin-auth-backend-module-google-provider` (0.1.11 → 0.1.12)

### 0.1.12

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-auth-node@0.4.10
  - @backstage/backend-plugin-api@0.6.15

## `@backstage/plugin-auth-backend-module-guest-provider` (0.1.0 → 0.1.1)

### 0.1.1

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-auth-node@0.4.10
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/errors@1.2.4

## `@backstage/plugin-auth-backend-module-microsoft-provider` (0.1.9 → 0.1.10)

### 0.1.10

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-auth-node@0.4.10
  - @backstage/backend-plugin-api@0.6.15

## `@backstage/plugin-auth-backend-module-oauth2-provider` (0.1.11 → 0.1.12)

### 0.1.12

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-auth-node@0.4.10
  - @backstage/backend-plugin-api@0.6.15

## `@backstage/plugin-auth-backend-module-oauth2-proxy-provider` (0.1.7 → 0.1.8)

### 0.1.8

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-auth-node@0.4.10
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/errors@1.2.4

## `@backstage/plugin-auth-backend-module-oidc-provider` (0.1.5 → 0.1.6)

### 0.1.6

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-auth-backend@0.22.2
  - @backstage/plugin-auth-node@0.4.10
  - @backstage/backend-plugin-api@0.6.15

## `@backstage/plugin-auth-backend-module-okta-provider` (0.0.7 → 0.0.8)

### 0.0.8

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-auth-node@0.4.10
  - @backstage/backend-plugin-api@0.6.15

## `@backstage/plugin-auth-backend-module-pinniped-provider` (0.1.8 → 0.1.9)

### 0.1.9

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-auth-node@0.4.10
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0

## `@backstage/plugin-auth-backend-module-vmware-cloud-provider` (0.1.6 → 0.1.7)

### 0.1.7

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-auth-node@0.4.10
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5

## `@backstage/plugin-auth-node` (0.4.9 → 0.4.10)

### 0.4.10

#### Patch Changes

- Updated dependencies
  - @backstage/catalog-client@1.6.2
  - @backstage/backend-common@0.21.5
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/types@1.1.1

## `@backstage/plugin-auth-react` (0.0.1 → 0.0.2)

### 0.0.2

#### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/errors@1.2.4

## `@backstage/plugin-azure-devops` (0.4.0 → 0.4.1)

### 0.4.1

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/frontend-plugin-api@0.6.2
  - @backstage/core-compat-api@0.2.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/errors@1.2.4
  - @backstage/plugin-azure-devops-common@0.4.0
  - @backstage/plugin-permission-react@0.4.21

## `@backstage/plugin-azure-devops-backend` (0.6.1 → 0.6.2)

### 0.6.2

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-node@1.10.0
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-auth-node@0.4.10
  - @backstage/plugin-permission-node@0.7.26
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/integration@1.9.1
  - @backstage/plugin-azure-devops-common@0.4.0
  - @backstage/plugin-catalog-common@1.0.22
  - @backstage/plugin-permission-common@0.7.13

## `@backstage/plugin-azure-sites` (0.1.20 → 0.1.21)

### 0.1.21

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/theme@0.5.2
  - @backstage/plugin-azure-sites-common@0.1.3
  - @backstage/plugin-permission-common@0.7.13
  - @backstage/plugin-permission-react@0.4.21

## `@backstage/plugin-azure-sites-backend` (0.3.1 → 0.3.2)

### 0.3.2

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-node@1.10.0
  - @backstage/catalog-client@1.6.2
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-permission-node@0.7.26
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/plugin-azure-sites-common@0.1.3
  - @backstage/plugin-permission-common@0.7.13

## `@backstage/plugin-badges` (0.2.55 → 0.2.56)

### 0.2.56

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/errors@1.2.4

## `@backstage/plugin-badges-backend` (0.3.11 → 0.3.12)

### 0.3.12

#### Patch Changes

- Updated dependencies
  - @backstage/catalog-client@1.6.2
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-auth-node@0.4.10
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4

## `@backstage/plugin-bazaar` (0.2.23 → 0.2.24)

### 0.2.24

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/catalog-client@1.6.2
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/errors@1.2.4

## `@backstage/plugin-bazaar-backend` (0.3.12 → 0.3.13)

### 0.3.13

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-auth-node@0.4.10
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0

## `@backstage/plugin-bitrise` (0.1.58 → 0.1.59)

### 0.1.59

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5

## `@backstage/plugin-catalog` (1.18.0 → 1.18.1)

### 1.18.1

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/catalog-client@1.6.2
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/plugin-search-react@1.7.8
  - @backstage/frontend-plugin-api@0.6.2
  - @backstage/integration-react@1.1.25
  - @backstage/core-compat-api@0.2.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/errors@1.2.4
  - @backstage/types@1.1.1
  - @backstage/plugin-catalog-common@1.0.22
  - @backstage/plugin-permission-react@0.4.21
  - @backstage/plugin-scaffolder-common@1.5.1
  - @backstage/plugin-search-common@1.2.11

## `@backstage/plugin-catalog-backend` (1.19.0 → 1.20.0)

### 1.20.0

#### Minor Changes

- f3e2e86: Added the ability to inject custom permissions from modules, on `CatalogBuilder` and `CatalogPermissionExtensionPoint`

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-node@1.10.0
  - @backstage/catalog-client@1.6.2
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-search-backend-module-catalog@0.1.20
  - @backstage/backend-tasks@0.5.20
  - @backstage/plugin-events-node@0.3.1
  - @backstage/plugin-permission-node@0.7.26
  - @backstage/backend-openapi-utils@0.1.8
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/integration@1.9.1
  - @backstage/types@1.1.1
  - @backstage/plugin-catalog-common@1.0.22
  - @backstage/plugin-permission-common@0.7.13

## `@backstage/plugin-catalog-backend-module-aws` (0.3.9 → 0.3.10)

### 0.3.10

#### Patch Changes

- 81a995f: Updated dependency `aws-sdk-client-mock` to `^4.0.0`.
- 823cf8e: Updated dependency `aws-sdk-client-mock-jest` to `^4.0.0`.
- Updated dependencies
  - @backstage/plugin-catalog-node@1.10.0
  - @backstage/backend-common@0.21.5
  - @backstage/integration-aws-node@0.1.11
  - @backstage/backend-tasks@0.5.20
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/integration@1.9.1
  - @backstage/plugin-catalog-common@1.0.22
  - @backstage/plugin-kubernetes-common@0.7.5

## `@backstage/plugin-catalog-backend-module-azure` (0.1.34 → 0.1.35)

### 0.1.35

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-node@1.10.0
  - @backstage/backend-common@0.21.5
  - @backstage/backend-tasks@0.5.20
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0
  - @backstage/integration@1.9.1
  - @backstage/plugin-catalog-common@1.0.22

## `@backstage/plugin-catalog-backend-module-backstage-openapi` (0.1.8 → 0.1.9)

### 0.1.9

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-node@1.10.0
  - @backstage/backend-tasks@0.5.20
  - @backstage/backend-openapi-utils@0.1.8
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4

## `@backstage/plugin-catalog-backend-module-bitbucket-cloud` (0.2.1 → 0.2.2)

### 0.2.2

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-node@1.10.0
  - @backstage/catalog-client@1.6.2
  - @backstage/backend-common@0.21.5
  - @backstage/backend-tasks@0.5.20
  - @backstage/plugin-events-node@0.3.1
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/integration@1.9.1
  - @backstage/plugin-bitbucket-cloud-common@0.2.17
  - @backstage/plugin-catalog-common@1.0.22

## `@backstage/plugin-catalog-backend-module-bitbucket-server` (0.1.28 → 0.1.29)

### 0.1.29

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-node@1.10.0
  - @backstage/backend-common@0.21.5
  - @backstage/backend-tasks@0.5.20
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/integration@1.9.1

## `@backstage/plugin-catalog-backend-module-gcp` (0.1.15 → 0.1.16)

### 0.1.16

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-node@1.10.0
  - @backstage/backend-common@0.21.5
  - @backstage/backend-tasks@0.5.20
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/plugin-kubernetes-common@0.7.5

## `@backstage/plugin-catalog-backend-module-gerrit` (0.1.31 → 0.1.32)

### 0.1.32

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-node@1.10.0
  - @backstage/backend-common@0.21.5
  - @backstage/backend-tasks@0.5.20
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/integration@1.9.1

## `@backstage/plugin-catalog-backend-module-github` (0.5.5 → 0.5.6)

### 0.5.6

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-backend@1.20.0
  - @backstage/plugin-catalog-node@1.10.0
  - @backstage/catalog-client@1.6.2
  - @backstage/backend-common@0.21.5
  - @backstage/backend-tasks@0.5.20
  - @backstage/plugin-events-node@0.3.1
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/integration@1.9.1
  - @backstage/plugin-catalog-common@1.0.22

## `@backstage/plugin-catalog-backend-module-github-org` (0.1.9 → 0.1.10)

### 0.1.10

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-node@1.10.0
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-catalog-backend-module-github@0.5.6
  - @backstage/backend-tasks@0.5.20
  - @backstage/plugin-events-node@0.3.1
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0

## `@backstage/plugin-catalog-backend-module-gitlab` (0.3.12 → 0.3.13)

### 0.3.13

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-node@1.10.0
  - @backstage/backend-common@0.21.5
  - @backstage/backend-tasks@0.5.20
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/integration@1.9.1

## `@backstage/plugin-catalog-backend-module-incremental-ingestion` (0.4.19 → 0.4.20)

### 0.4.20

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-backend@1.20.0
  - @backstage/plugin-catalog-node@1.10.0
  - @backstage/backend-common@0.21.5
  - @backstage/backend-tasks@0.5.20
  - @backstage/plugin-events-node@0.3.1
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/plugin-permission-common@0.7.13

## `@backstage/plugin-catalog-backend-module-ldap` (0.5.30 → 0.5.31)

### 0.5.31

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-node@1.10.0
  - @backstage/backend-tasks@0.5.20
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/types@1.1.1
  - @backstage/plugin-catalog-common@1.0.22

## `@backstage/plugin-catalog-backend-module-msgraph` (0.5.22 → 0.5.23)

### 0.5.23

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-node@1.10.0
  - @backstage/backend-common@0.21.5
  - @backstage/backend-tasks@0.5.20
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/plugin-catalog-common@1.0.22

## `@backstage/plugin-catalog-backend-module-openapi` (0.1.32 → 0.1.33)

### 0.1.33

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-backend@1.20.0
  - @backstage/plugin-catalog-node@1.10.0
  - @backstage/backend-common@0.21.5
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/integration@1.9.1
  - @backstage/types@1.1.1
  - @backstage/plugin-catalog-common@1.0.22

## `@backstage/plugin-catalog-backend-module-puppetdb` (0.1.20 → 0.1.21)

### 0.1.21

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-node@1.10.0
  - @backstage/backend-common@0.21.5
  - @backstage/backend-tasks@0.5.20
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/types@1.1.1

## `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` (0.1.12 → 0.1.13)

### 0.1.13

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-node@1.10.0
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/plugin-catalog-common@1.0.22
  - @backstage/plugin-scaffolder-common@1.5.1

## `@backstage/plugin-catalog-backend-module-unprocessed` (0.4.1 → 0.4.2)

### 0.4.2

#### Patch Changes

- f3e2e86: Internal update that injects custom permissions into the catalog using its extension point
- Updated dependencies
  - @backstage/plugin-catalog-node@1.10.0
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-auth-node@0.4.10
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/errors@1.2.4
  - @backstage/plugin-catalog-unprocessed-entities-common@0.0.1
  - @backstage/plugin-permission-common@0.7.13

## `@backstage/plugin-catalog-graph` (0.4.1 → 0.4.2)

### 0.4.2

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/catalog-client@1.6.2
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/frontend-plugin-api@0.6.2
  - @backstage/core-compat-api@0.2.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/types@1.1.1

## `@backstage/plugin-catalog-import` (0.10.7 → 0.10.8)

### 0.10.8

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/catalog-client@1.6.2
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/frontend-plugin-api@0.6.2
  - @backstage/integration-react@1.1.25
  - @backstage/core-compat-api@0.2.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/integration@1.9.1
  - @backstage/plugin-catalog-common@1.0.22

## `@backstage/plugin-catalog-node` (1.9.0 → 1.10.0)

### 1.10.0

#### Minor Changes

- f3e2e86: Added the ability to inject custom permissions from modules, on `CatalogBuilder` and `CatalogPermissionExtensionPoint`

#### Patch Changes

- Updated dependencies
  - @backstage/catalog-client@1.6.2
  - @backstage/plugin-permission-node@0.7.26
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/errors@1.2.4
  - @backstage/types@1.1.1
  - @backstage/plugin-catalog-common@1.0.22
  - @backstage/plugin-permission-common@0.7.13

## `@backstage/plugin-catalog-react` (1.11.0 → 1.11.1)

### 1.11.1

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/catalog-client@1.6.2
  - @backstage/core-components@0.14.2
  - @backstage/frontend-plugin-api@0.6.2
  - @backstage/integration-react@1.1.25
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/errors@1.2.4
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-catalog-common@1.0.22
  - @backstage/plugin-permission-common@0.7.13
  - @backstage/plugin-permission-react@0.4.21

## `@backstage/plugin-catalog-unprocessed-entities` (0.2.0 → 0.2.1)

### 0.2.1

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/errors@1.2.4

## `@backstage/plugin-cicd-statistics` (0.1.33 → 0.1.34)

### 0.1.34

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5

## `@backstage/plugin-cicd-statistics-module-gitlab` (0.1.27 → 0.1.28)

### 0.1.28

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-cicd-statistics@0.1.34
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5

## `@backstage/plugin-circleci` (0.3.31 → 0.3.32)

### 0.3.32

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5

## `@backstage/plugin-cloudbuild` (0.4.1 → 0.4.2)

### 0.4.2

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5

## `@backstage/plugin-code-climate` (0.1.31 → 0.1.32)

### 0.1.32

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5

## `@backstage/plugin-code-coverage` (0.2.24 → 0.2.25)

### 0.2.25

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/errors@1.2.4

## `@backstage/plugin-code-coverage-backend` (0.2.28 → 0.2.29)

### 0.2.29

#### Patch Changes

- Updated dependencies
  - @backstage/catalog-client@1.6.2
  - @backstage/backend-common@0.21.5
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/integration@1.9.1

## `@backstage/plugin-codescene` (0.1.23 → 0.1.24)

### 0.1.24

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/theme@0.5.2

## `@backstage/plugin-config-schema` (0.1.51 → 0.1.52)

### 0.1.52

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/errors@1.2.4
  - @backstage/types@1.1.1

## `@backstage/plugin-cost-insights` (0.12.20 → 0.12.21)

### 0.12.21

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/theme@0.5.2
  - @backstage/plugin-cost-insights-common@0.1.2

## `@backstage/plugin-devtools` (0.1.10 → 0.1.11)

### 0.1.11

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/frontend-plugin-api@0.6.2
  - @backstage/core-compat-api@0.2.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/errors@1.2.4
  - @backstage/plugin-devtools-common@0.1.9
  - @backstage/plugin-permission-react@0.4.21

## `@backstage/plugin-devtools-backend` (0.3.0 → 0.3.1)

### 0.3.1

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-permission-node@0.7.26
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/cli-common@0.1.13
  - @backstage/config@1.2.0
  - @backstage/config-loader@1.7.0
  - @backstage/errors@1.2.4
  - @backstage/types@1.1.1
  - @backstage/plugin-devtools-common@0.1.9
  - @backstage/plugin-permission-common@0.7.13

## `@backstage/plugin-dynatrace` (10.0.0 → 10.0.1)

### 10.0.1

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5

## `@backstage/plugin-entity-feedback` (0.2.14 → 0.2.15)

### 0.2.15

#### Patch Changes

- 12610b4: Added ESLint rule `no-top-level-material-ui-4-imports` in the `entity-feedback` plugin to migrate the Material UI imports.
- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/errors@1.2.4
  - @backstage/plugin-entity-feedback-common@0.1.3

## `@backstage/plugin-entity-feedback-backend` (0.2.11 → 0.2.12)

### 0.2.12

#### Patch Changes

- Updated dependencies
  - @backstage/catalog-client@1.6.2
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-auth-node@0.4.10
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/plugin-entity-feedback-common@0.1.3

## `@backstage/plugin-entity-validation` (0.1.16 → 0.1.17)

### 0.1.17

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- 2ec4a8d: Added ESLint rule `no-top-level-material-ui-4-imports` in the `entity-validation` plugin to migrate the Material UI imports.
- Updated dependencies
  - @backstage/catalog-client@1.6.2
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/errors@1.2.4
  - @backstage/plugin-catalog-common@1.0.22

## `@backstage/plugin-events-backend` (0.3.0 → 0.3.1)

### 0.3.1

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-events-node@0.3.1
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0

## `@backstage/plugin-events-backend-module-aws-sqs` (0.3.0 → 0.3.1)

### 0.3.1

#### Patch Changes

- 81a995f: Updated dependency `aws-sdk-client-mock` to `^4.0.0`.
- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/backend-tasks@0.5.20
  - @backstage/plugin-events-node@0.3.1
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0
  - @backstage/types@1.1.1

## `@backstage/plugin-events-backend-module-azure` (0.2.0 → 0.2.1)

### 0.2.1

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-events-node@0.3.1
  - @backstage/backend-plugin-api@0.6.15

## `@backstage/plugin-events-backend-module-bitbucket-cloud` (0.2.0 → 0.2.1)

### 0.2.1

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-events-node@0.3.1
  - @backstage/backend-plugin-api@0.6.15

## `@backstage/plugin-events-backend-module-gerrit` (0.2.0 → 0.2.1)

### 0.2.1

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-events-node@0.3.1
  - @backstage/backend-plugin-api@0.6.15

## `@backstage/plugin-events-backend-module-github` (0.2.0 → 0.2.1)

### 0.2.1

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-events-node@0.3.1
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0

## `@backstage/plugin-events-backend-module-gitlab` (0.2.0 → 0.2.1)

### 0.2.1

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-events-node@0.3.1
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0

## `@backstage/plugin-events-backend-test-utils` (0.1.24 → 0.1.25)

### 0.1.25

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-events-node@0.3.1

## `@backstage/plugin-events-node` (0.3.0 → 0.3.1)

### 0.3.1

#### Patch Changes

- Updated dependencies
  - @backstage/backend-plugin-api@0.6.15

## `@backstage/plugin-explore` (0.4.17 → 0.4.18)

### 0.4.18

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/plugin-search-react@1.7.8
  - @backstage/frontend-plugin-api@0.6.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/errors@1.2.4
  - @backstage/plugin-explore-common@0.0.2
  - @backstage/plugin-explore-react@0.0.37
  - @backstage/plugin-search-common@1.2.11

## `@backstage/plugin-explore-backend` (0.0.24 → 0.0.25)

### 0.0.25

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-search-backend-module-explore@0.1.19
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0
  - @backstage/types@1.1.1
  - @backstage/plugin-explore-common@0.0.2

## `@backstage/plugin-firehydrant` (0.2.15 → 0.2.16)

### 0.2.16

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5

## `@backstage/plugin-fossa` (0.2.63 → 0.2.64)

### 0.2.64

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/errors@1.2.4

## `@backstage/plugin-gcalendar` (0.3.24 → 0.3.25)

### 0.3.25

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/errors@1.2.4

## `@backstage/plugin-gcp-projects` (0.3.47 → 0.3.48)

### 0.3.48

#### Patch Changes

- 7dad59c: Added ESLint rule `no-top-level-material-ui-4-imports` in the `gcp-projects` plugin to migrate the Material UI imports.
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/core-plugin-api@1.9.1

## `@backstage/plugin-git-release-manager` (0.3.43 → 0.3.44)

### 0.3.44

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/integration@1.9.1

## `@backstage/plugin-github-actions` (0.6.12 → 0.6.13)

### 0.6.13

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/integration-react@1.1.25
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/integration@1.9.1

## `@backstage/plugin-github-deployments` (0.1.62 → 0.1.63)

### 0.1.63

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- a1ddc8d: Added ESLint rule `no-top-level-material-ui-4-imports` in the `github-deployments` plugin to migrate the Material UI imports.
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/integration-react@1.1.25
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/errors@1.2.4
  - @backstage/integration@1.9.1

## `@backstage/plugin-github-issues` (0.2.20 → 0.3.0)

### 0.3.0

#### Minor Changes

- bc97524: Added ESLint rule `no-top-level-material-ui-4-imports` in the `github-issues` plugin to migrate the Material UI imports.

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/errors@1.2.4
  - @backstage/integration@1.9.1

## `@backstage/plugin-github-pull-requests-board` (0.1.25 → 0.1.26)

### 0.1.26

#### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/integration@1.9.1

## `@backstage/plugin-gitops-profiles` (0.3.46 → 0.3.47)

### 0.3.47

#### Patch Changes

- 1a22254: Added ESLint rule `no-top-level-material-ui-4-imports` in the `gitops-profiles` plugin to migrate the Material UI imports.
- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/core-plugin-api@1.9.1

## `@backstage/plugin-gocd` (0.1.37 → 0.1.38)

### 0.1.38

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- 4166b10: Added an optional ESLint rule - no-top-level-material-ui-4-imports - which has an auto fix function to migrate the imports and used it to migrate the Material UI imports.
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/errors@1.2.4

## `@backstage/plugin-graphiql` (0.3.4 → 0.3.5)

### 0.3.5

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/frontend-plugin-api@0.6.2
  - @backstage/core-compat-api@0.2.2
  - @backstage/core-plugin-api@1.9.1

## `@backstage/plugin-graphql-voyager` (0.1.13 → 0.1.14)

### 0.1.14

#### Patch Changes

- 813f99d: Added ESLint rule `no-top-level-material-ui-4-imports` in the `graphql-voyager` plugin to migrate the Material UI imports.
- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/core-plugin-api@1.9.1

## `@backstage/plugin-home` (0.7.0 → 0.7.1)

### 0.7.1

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/catalog-client@1.6.2
  - @backstage/core-components@0.14.2
  - @backstage/core-app-api@1.12.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/frontend-plugin-api@0.6.2
  - @backstage/plugin-home-react@0.1.10
  - @backstage/core-compat-api@0.2.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/theme@0.5.2

## `@backstage/plugin-home-react` (0.1.9 → 0.1.10)

### 0.1.10

#### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/core-plugin-api@1.9.1

## `@backstage/plugin-ilert` (0.2.20 → 0.2.21)

### 0.2.21

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/errors@1.2.4

## `@backstage/plugin-jenkins` (0.9.6 → 0.9.7)

### 0.9.7

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/errors@1.2.4
  - @backstage/plugin-jenkins-common@0.1.25

## `@backstage/plugin-jenkins-backend` (0.4.1 → 0.4.2)

### 0.4.2

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-node@1.10.0
  - @backstage/catalog-client@1.6.2
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-permission-node@0.7.26
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/plugin-jenkins-common@0.1.25
  - @backstage/plugin-permission-common@0.7.13

## `@backstage/plugin-kafka` (0.3.31 → 0.3.32)

### 0.3.32

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5

## `@backstage/plugin-kafka-backend` (0.3.12 → 0.3.13)

### 0.3.13

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4

## `@backstage/plugin-kubernetes` (0.11.6 → 0.11.7)

### 0.11.7

#### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-kubernetes-react@0.3.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/plugin-kubernetes-common@0.7.5

## `@backstage/plugin-kubernetes-backend` (0.16.1 → 0.16.2)

### 0.16.2

#### Patch Changes

- 9b1abac: Added a new service locator `CatalogRelationServiceLocator` that only returns clusters an entity lists in `relations.dependsOn`.
- Updated dependencies
  - @backstage/plugin-catalog-node@1.10.0
  - @backstage/catalog-client@1.6.2
  - @backstage/backend-common@0.21.5
  - @backstage/integration-aws-node@0.1.11
  - @backstage/plugin-kubernetes-node@0.1.9
  - @backstage/plugin-auth-node@0.4.10
  - @backstage/plugin-permission-node@0.7.26
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/types@1.1.1
  - @backstage/plugin-kubernetes-common@0.7.5
  - @backstage/plugin-permission-common@0.7.13

## `@backstage/plugin-kubernetes-cluster` (0.0.7 → 0.0.8)

### 0.0.8

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- 1c1140e: Added ESLint rule `no-top-level-material-ui-4-imports` in the `kubernetes-cluster` plugin to migrate the Material UI imports.
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-kubernetes-react@0.3.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/plugin-kubernetes-common@0.7.5

## `@backstage/plugin-kubernetes-node` (0.1.8 → 0.1.9)

### 0.1.9

#### Patch Changes

- Updated dependencies
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/types@1.1.1
  - @backstage/plugin-kubernetes-common@0.7.5

## `@backstage/plugin-kubernetes-react` (0.3.1 → 0.3.2)

### 0.3.2

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/errors@1.2.4
  - @backstage/types@1.1.1
  - @backstage/plugin-kubernetes-common@0.7.5

## `@backstage/plugin-lighthouse` (0.4.16 → 0.4.17)

### 0.4.17

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/plugin-lighthouse-common@0.1.5

## `@backstage/plugin-lighthouse-backend` (0.4.7 → 0.4.8)

### 0.4.8

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-node@1.10.0
  - @backstage/catalog-client@1.6.2
  - @backstage/backend-common@0.21.5
  - @backstage/backend-tasks@0.5.20
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/types@1.1.1
  - @backstage/plugin-lighthouse-common@0.1.5

## `@backstage/plugin-linguist` (0.1.16 → 0.1.17)

### 0.1.17

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/frontend-plugin-api@0.6.2
  - @backstage/core-compat-api@0.2.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/errors@1.2.4
  - @backstage/plugin-linguist-common@0.1.2

## `@backstage/plugin-linguist-backend` (0.5.12 → 0.5.13)

### 0.5.13

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-node@1.10.0
  - @backstage/catalog-client@1.6.2
  - @backstage/backend-common@0.21.5
  - @backstage/backend-tasks@0.5.20
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/types@1.1.1
  - @backstage/plugin-linguist-common@0.1.2

## `@backstage/plugin-microsoft-calendar` (0.1.13 → 0.1.14)

### 0.1.14

#### Patch Changes

- 4bba771: Added ESLint rule `no-top-level-material-ui-4-imports` in the `microsoft-calender` plugin to migrate the Material UI imports.
- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/errors@1.2.4

## `@backstage/plugin-newrelic` (0.3.46 → 0.3.47)

### 0.3.47

#### Patch Changes

- f38f7d8: Added an optional ESLint rule - no-top-level-material-ui-4-imports -in cloudbuild plugin which has an auto fix function to migrate the imports and used it to migrate the Material UI imports for plugins/newrelic.
- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/core-plugin-api@1.9.1

## `@backstage/plugin-newrelic-dashboard` (0.3.6 → 0.3.7)

### 0.3.7

#### Patch Changes

- 1d81cdd: Added an optional ESLint rule - no-top-level-material-ui-4-imports -in new relic plugin which has an auto fix function to migrate the imports and used it to migrate the Material UI imports for plugins/newrelic-dashboard
- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/errors@1.2.4

## `@backstage/plugin-nomad` (0.1.12 → 0.1.13)

### 0.1.13

#### Patch Changes

- c116096: Added an optional ESLint rule - no-top-level-material-ui-4-imports -in nomad plugin which has an auto fix function to migrate the imports and used it to migrate the Material UI imports for plugins/nomad.
- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5

## `@backstage/plugin-nomad-backend` (0.1.16 → 0.1.17)

### 0.1.17

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4

## `@backstage/plugin-notifications` (0.1.0 → 0.1.1)

### 0.1.1

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- 6a2fe4b: Added ESLint rule `no-top-level-material-ui-4-imports` in the `notifications` plugin to migrate the Material UI imports.
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/errors@1.2.4
  - @backstage/theme@0.5.2
  - @backstage/types@1.1.1
  - @backstage/plugin-notifications-common@0.0.2
  - @backstage/plugin-signals-react@0.0.2

## `@backstage/plugin-notifications-backend` (0.1.0 → 0.1.1)

### 0.1.1

#### Patch Changes

- Updated dependencies
  - @backstage/catalog-client@1.6.2
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-auth-node@0.4.10
  - @backstage/plugin-notifications-node@0.1.1
  - @backstage/plugin-events-node@0.3.1
  - @backstage/plugin-signals-node@0.1.1
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/plugin-notifications-common@0.0.2

## `@backstage/plugin-notifications-node` (0.1.0 → 0.1.1)

### 0.1.1

#### Patch Changes

- Updated dependencies
  - @backstage/catalog-client@1.6.2
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-signals-node@0.1.1
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/plugin-notifications-common@0.0.2

## `@backstage/plugin-octopus-deploy` (0.2.13 → 0.2.14)

### 0.2.14

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- 004ce71: Added ESLint rule `no-top-level-material-ui-4-imports` in the `octopus-deploy` plugin to migrate the Material UI imports.
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-scaffolder-react@1.8.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5

## `@backstage/plugin-opencost` (0.2.6 → 0.2.7)

### 0.2.7

#### Patch Changes

- f21ef8c: Added ESLint rule `no-top-level-material-ui-4-imports` in the `opencost` plugin to migrate the Material UI imports.
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/core-plugin-api@1.9.1

## `@backstage/plugin-org` (0.6.21 → 0.6.22)

### 0.6.22

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- 0df5c60: Added ESLint rule `no-top-level-material-ui-4-imports` in the `org` plugin to migrate the Material UI imports.
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/frontend-plugin-api@0.6.2
  - @backstage/core-compat-api@0.2.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/plugin-catalog-common@1.0.22

## `@backstage/plugin-org-react` (0.1.20 → 0.1.21)

### 0.1.21

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/catalog-client@1.6.2
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5

## `@backstage/plugin-pagerduty` (0.7.3 → 0.7.4)

### 0.7.4

#### Patch Changes

- 2b43144: Added ESLint rule `no-top-level-material-ui-4-imports` in the `pagerduty` plugin to migrate the Material UI imports.
- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/plugin-home-react@0.1.10
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/errors@1.2.4

## `@backstage/plugin-periskop` (0.1.29 → 0.1.30)

### 0.1.30

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/errors@1.2.4

## `@backstage/plugin-periskop-backend` (0.2.12 → 0.2.13)

### 0.2.13

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0

## `@backstage/plugin-permission-backend` (0.5.38 → 0.5.39)

### 0.5.39

#### Patch Changes

- f3e2e86: Properly forward causes of errors from upstream backends in the `PermissionIntegrationClient`
- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-auth-node@0.4.10
  - @backstage/plugin-permission-node@0.7.26
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/plugin-permission-common@0.7.13

## `@backstage/plugin-permission-backend-module-allow-all-policy` (0.1.11 → 0.1.12)

### 0.1.12

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-auth-node@0.4.10
  - @backstage/plugin-permission-node@0.7.26
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/plugin-permission-common@0.7.13

## `@backstage/plugin-permission-node` (0.7.25 → 0.7.26)

### 0.7.26

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-auth-node@0.4.10
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/plugin-permission-common@0.7.13

## `@backstage/plugin-playlist` (0.2.5 → 0.2.6)

### 0.2.6

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/plugin-search-react@1.7.8
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/errors@1.2.4
  - @backstage/plugin-catalog-common@1.0.22
  - @backstage/plugin-permission-common@0.7.13
  - @backstage/plugin-permission-react@0.4.21
  - @backstage/plugin-playlist-common@0.1.15

## `@backstage/plugin-playlist-backend` (0.3.18 → 0.3.19)

### 0.3.19

#### Patch Changes

- Updated dependencies
  - @backstage/catalog-client@1.6.2
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-auth-node@0.4.10
  - @backstage/plugin-permission-node@0.7.26
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/plugin-permission-common@0.7.13
  - @backstage/plugin-playlist-common@0.1.15

## `@backstage/plugin-proxy-backend` (0.4.12 → 0.4.13)

### 0.4.13

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0

## `@backstage/plugin-puppetdb` (0.1.14 → 0.1.15)

### 0.1.15

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- 8754b0e: Added ESLint rule `no-top-level-material-ui-4-imports` in the `puppetdb` plugin to migrate the Material UI imports.
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/errors@1.2.4

## `@backstage/plugin-rollbar` (0.4.31 → 0.4.32)

### 0.4.32

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5

## `@backstage/plugin-rollbar-backend` (0.1.59 → 0.1.60)

### 0.1.60

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/config@1.2.0

## `@backstage/plugin-scaffolder` (1.19.0 → 1.19.1)

### 1.19.1

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/catalog-client@1.6.2
  - @backstage/core-components@0.14.2
  - @backstage/plugin-scaffolder-react@1.8.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/frontend-plugin-api@0.6.2
  - @backstage/integration-react@1.1.25
  - @backstage/core-compat-api@0.2.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/errors@1.2.4
  - @backstage/integration@1.9.1
  - @backstage/types@1.1.1
  - @backstage/plugin-catalog-common@1.0.22
  - @backstage/plugin-permission-react@0.4.21
  - @backstage/plugin-scaffolder-common@1.5.1

## `@backstage/plugin-scaffolder-backend` (1.22.1 → 1.22.2)

### 1.22.2

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-node@1.10.0
  - @backstage/catalog-client@1.6.2
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-catalog-backend-module-scaffolder-entity-model@0.1.13
  - @backstage/plugin-auth-node@0.4.10
  - @backstage/plugin-scaffolder-backend-module-gitlab@0.3.1
  - @backstage/backend-tasks@0.5.20
  - @backstage/plugin-permission-node@0.7.26
  - @backstage/plugin-scaffolder-backend-module-github@0.2.5
  - @backstage/plugin-scaffolder-node@0.4.1
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/integration@1.9.1
  - @backstage/types@1.1.1
  - @backstage/plugin-permission-common@0.7.13
  - @backstage/plugin-scaffolder-backend-module-azure@0.1.7
  - @backstage/plugin-scaffolder-backend-module-bitbucket@0.2.5
  - @backstage/plugin-scaffolder-backend-module-bitbucket-cloud@0.1.5
  - @backstage/plugin-scaffolder-backend-module-bitbucket-server@0.1.5
  - @backstage/plugin-scaffolder-backend-module-gerrit@0.1.7
  - @backstage/plugin-scaffolder-backend-module-gitea@0.1.5
  - @backstage/plugin-scaffolder-common@1.5.1

## `@backstage/plugin-scaffolder-backend-module-azure` (0.1.6 → 0.1.7)

### 0.1.7

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-scaffolder-node@0.4.1
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/integration@1.9.1

## `@backstage/plugin-scaffolder-backend-module-bitbucket` (0.2.4 → 0.2.5)

### 0.2.5

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-scaffolder-node@0.4.1
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/integration@1.9.1
  - @backstage/plugin-scaffolder-backend-module-bitbucket-cloud@0.1.5
  - @backstage/plugin-scaffolder-backend-module-bitbucket-server@0.1.5

## `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` (0.1.4 → 0.1.5)

### 0.1.5

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-scaffolder-node@0.4.1
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/integration@1.9.1

## `@backstage/plugin-scaffolder-backend-module-bitbucket-server` (0.1.4 → 0.1.5)

### 0.1.5

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-scaffolder-node@0.4.1
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/integration@1.9.1

## `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` (0.2.15 → 0.2.16)

### 0.2.16

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-scaffolder-node@0.4.1
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/integration@1.9.1

## `@backstage/plugin-scaffolder-backend-module-cookiecutter` (0.2.38 → 0.2.39)

### 0.2.39

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-scaffolder-node@0.4.1
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/integration@1.9.1
  - @backstage/types@1.1.1

## `@backstage/plugin-scaffolder-backend-module-gerrit` (0.1.6 → 0.1.7)

### 0.1.7

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-scaffolder-node@0.4.1
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/integration@1.9.1

## `@backstage/plugin-scaffolder-backend-module-gitea` (0.1.4 → 0.1.5)

### 0.1.5

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-scaffolder-node@0.4.1
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/integration@1.9.1

## `@backstage/plugin-scaffolder-backend-module-github` (0.2.4 → 0.2.5)

### 0.2.5

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-scaffolder-node@0.4.1
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/integration@1.9.1

## `@backstage/plugin-scaffolder-backend-module-gitlab` (0.3.0 → 0.3.1)

### 0.3.1

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-scaffolder-node@0.4.1
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/integration@1.9.1

## `@backstage/plugin-scaffolder-backend-module-rails` (0.4.31 → 0.4.32)

### 0.4.32

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-scaffolder-node@0.4.1
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/integration@1.9.1
  - @backstage/types@1.1.1

## `@backstage/plugin-scaffolder-backend-module-sentry` (0.1.22 → 0.1.23)

### 0.1.23

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-scaffolder-node@0.4.1
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4

## `@backstage/plugin-scaffolder-backend-module-yeoman` (0.2.35 → 0.2.36)

### 0.2.36

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-scaffolder-node@0.4.1
  - @backstage/plugin-scaffolder-node-test-utils@0.1.1
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/types@1.1.1

## `@backstage/plugin-scaffolder-node` (0.4.0 → 0.4.1)

### 0.4.1

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/errors@1.2.4
  - @backstage/integration@1.9.1
  - @backstage/types@1.1.1
  - @backstage/plugin-scaffolder-common@1.5.1

## `@backstage/plugin-scaffolder-node-test-utils` (0.1.0 → 0.1.1)

### 0.1.1

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/backend-test-utils@0.3.5
  - @backstage/plugin-scaffolder-node@0.4.1
  - @backstage/types@1.1.1

## `@backstage/plugin-scaffolder-react` (1.8.1 → 1.8.2)

### 1.8.2

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/catalog-client@1.6.2
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/theme@0.5.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.5.1

## `@backstage/plugin-search` (1.4.7 → 1.4.8)

### 1.4.8

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/plugin-search-react@1.7.8
  - @backstage/frontend-plugin-api@0.6.2
  - @backstage/core-compat-api@0.2.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/errors@1.2.4
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-search-common@1.2.11

## `@backstage/plugin-search-backend` (1.5.4 → 1.5.5)

### 1.5.5

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-permission-node@0.7.26
  - @backstage/plugin-search-backend-node@1.2.19
  - @backstage/backend-openapi-utils@0.1.8
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/types@1.1.1
  - @backstage/plugin-permission-common@0.7.13
  - @backstage/plugin-search-common@1.2.11

## `@backstage/plugin-search-backend-module-catalog` (0.1.19 → 0.1.20)

### 0.1.20

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-node@1.10.0
  - @backstage/catalog-client@1.6.2
  - @backstage/backend-common@0.21.5
  - @backstage/backend-tasks@0.5.20
  - @backstage/plugin-search-backend-node@1.2.19
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/plugin-catalog-common@1.0.22
  - @backstage/plugin-permission-common@0.7.13
  - @backstage/plugin-search-common@1.2.11

## `@backstage/plugin-search-backend-module-elasticsearch` (1.3.17 → 1.3.18)

### 1.3.18

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/integration-aws-node@0.1.11
  - @backstage/plugin-search-backend-node@1.2.19
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0
  - @backstage/plugin-search-common@1.2.11

## `@backstage/plugin-search-backend-module-explore` (0.1.18 → 0.1.19)

### 0.1.19

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/backend-tasks@0.5.20
  - @backstage/plugin-search-backend-node@1.2.19
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0
  - @backstage/plugin-explore-common@0.0.2
  - @backstage/plugin-search-common@1.2.11

## `@backstage/plugin-search-backend-module-pg` (0.5.23 → 0.5.24)

### 0.5.24

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-search-backend-node@1.2.19
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0
  - @backstage/plugin-search-common@1.2.11

## `@backstage/plugin-search-backend-module-stack-overflow-collator` (0.1.7 → 0.1.8)

### 0.1.8

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/backend-tasks@0.5.20
  - @backstage/plugin-search-backend-node@1.2.19
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0
  - @backstage/plugin-search-common@1.2.11

## `@backstage/plugin-search-backend-module-techdocs` (0.1.19 → 0.1.20)

### 0.1.20

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-node@1.10.0
  - @backstage/catalog-client@1.6.2
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-techdocs-node@1.12.1
  - @backstage/backend-tasks@0.5.20
  - @backstage/plugin-search-backend-node@1.2.19
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/plugin-catalog-common@1.0.22
  - @backstage/plugin-permission-common@0.7.13
  - @backstage/plugin-search-common@1.2.11

## `@backstage/plugin-search-backend-node` (1.2.18 → 1.2.19)

### 1.2.19

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/backend-tasks@0.5.20
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/plugin-permission-common@0.7.13
  - @backstage/plugin-search-common@1.2.11

## `@backstage/plugin-search-react` (1.7.7 → 1.7.8)

### 1.7.8

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/frontend-plugin-api@0.6.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/theme@0.5.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-search-common@1.2.11

## `@backstage/plugin-sentry` (0.5.16 → 0.5.17)

### 0.5.17

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5

## `@backstage/plugin-shortcuts` (0.3.20 → 0.3.21)

### 0.3.21

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/theme@0.5.2
  - @backstage/types@1.1.1

## `@backstage/plugin-signals` (0.0.2 → 0.0.3)

### 0.0.3

#### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/theme@0.5.2
  - @backstage/types@1.1.1
  - @backstage/plugin-signals-react@0.0.2

## `@backstage/plugin-signals-backend` (0.1.0 → 0.1.1)

### 0.1.1

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-auth-node@0.4.10
  - @backstage/plugin-events-node@0.3.1
  - @backstage/plugin-signals-node@0.1.1
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0
  - @backstage/types@1.1.1

## `@backstage/plugin-signals-node` (0.1.0 → 0.1.1)

### 0.1.1

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-auth-node@0.4.10
  - @backstage/plugin-events-node@0.3.1
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0
  - @backstage/types@1.1.1

## `@backstage/plugin-sonarqube` (0.7.13 → 0.7.14)

### 0.7.14

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/plugin-sonarqube-react@0.1.14

## `@backstage/plugin-sonarqube-backend` (0.2.16 → 0.2.17)

### 0.2.17

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4

## `@backstage/plugin-splunk-on-call` (0.4.20 → 0.4.21)

### 0.4.21

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5

## `@backstage/plugin-stack-overflow` (0.1.26 → 0.1.27)

### 0.1.27

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-search-react@1.7.8
  - @backstage/frontend-plugin-api@0.6.2
  - @backstage/plugin-home-react@0.1.10
  - @backstage/core-plugin-api@1.9.1
  - @backstage/config@1.2.0
  - @backstage/plugin-search-common@1.2.11

## `@backstage/plugin-stack-overflow-backend` (0.2.18 → 0.2.19)

### 0.2.19

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-search-backend-module-stack-overflow-collator@0.1.8

## `@backstage/plugin-stackstorm` (0.1.12 → 0.1.13)

### 0.1.13

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/errors@1.2.4

## `@backstage/plugin-tech-insights` (0.3.23 → 0.3.24)

### 0.3.24

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/errors@1.2.4
  - @backstage/types@1.1.1
  - @backstage/plugin-tech-insights-common@0.2.12

## `@backstage/plugin-tech-insights-backend` (0.5.28 → 0.5.29)

### 0.5.29

#### Patch Changes

- Updated dependencies
  - @backstage/catalog-client@1.6.2
  - @backstage/backend-common@0.21.5
  - @backstage/backend-tasks@0.5.20
  - @backstage/plugin-tech-insights-node@0.5.1
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/types@1.1.1
  - @backstage/plugin-tech-insights-common@0.2.12

## `@backstage/plugin-tech-insights-backend-module-jsonfc` (0.1.46 → 0.1.47)

### 0.1.47

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-tech-insights-node@0.5.1
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/types@1.1.1
  - @backstage/plugin-tech-insights-common@0.2.12

## `@backstage/plugin-tech-insights-node` (0.5.0 → 0.5.1)

### 0.5.1

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0
  - @backstage/types@1.1.1
  - @backstage/plugin-tech-insights-common@0.2.12

## `@backstage/plugin-tech-radar` (0.7.0 → 0.7.1)

### 0.7.1

#### Patch Changes

- 89b093f: Added ESLint rule `no-top-level-material-ui-4-imports` in the `tech-radar` plugin to migrate the Material UI imports.
- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/frontend-plugin-api@0.6.2
  - @backstage/core-compat-api@0.2.2
  - @backstage/core-plugin-api@1.9.1

## `@backstage/plugin-techdocs` (1.10.1 → 1.10.2)

### 1.10.2

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-techdocs-react@1.2.1
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/plugin-search-react@1.7.8
  - @backstage/frontend-plugin-api@0.6.2
  - @backstage/integration-react@1.1.25
  - @backstage/plugin-auth-react@0.0.2
  - @backstage/core-compat-api@0.2.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/integration@1.9.1
  - @backstage/theme@0.5.2
  - @backstage/plugin-search-common@1.2.11

## `@backstage/plugin-techdocs-addons-test-utils` (1.0.28 → 1.0.29)

### 1.0.29

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-techdocs-react@1.2.1
  - @backstage/core-app-api@1.12.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/plugin-search-react@1.7.8
  - @backstage/plugin-techdocs@1.10.2
  - @backstage/plugin-catalog@1.18.1
  - @backstage/integration-react@1.1.25
  - @backstage/core-plugin-api@1.9.1
  - @backstage/test-utils@1.5.2

## `@backstage/plugin-techdocs-backend` (1.10.1 → 1.10.2)

### 1.10.2

#### Patch Changes

- Updated dependencies
  - @backstage/catalog-client@1.6.2
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-techdocs-node@1.12.1
  - @backstage/plugin-search-backend-module-techdocs@0.1.20
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/integration@1.9.1
  - @backstage/plugin-catalog-common@1.0.22
  - @backstage/plugin-permission-common@0.7.13

## `@backstage/plugin-techdocs-module-addons-contrib` (1.1.6 → 1.1.7)

### 1.1.7

#### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-techdocs-react@1.2.1
  - @backstage/integration-react@1.1.25
  - @backstage/core-plugin-api@1.9.1
  - @backstage/integration@1.9.1

## `@backstage/plugin-techdocs-node` (1.12.0 → 1.12.1)

### 1.12.1

#### Patch Changes

- 81a995f: Updated dependency `aws-sdk-client-mock` to `^4.0.0`.
- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/integration-aws-node@0.1.11
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/integration@1.9.1
  - @backstage/plugin-search-common@1.2.11

## `@backstage/plugin-techdocs-react` (1.2.0 → 1.2.1)

### 1.2.1

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/version-bridge@1.0.7

## `@backstage/plugin-todo` (0.2.35 → 0.2.36)

### 0.2.36

#### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/errors@1.2.4

## `@backstage/plugin-todo-backend` (0.3.13 → 0.3.14)

### 0.3.14

#### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-node@1.10.0
  - @backstage/catalog-client@1.6.2
  - @backstage/backend-common@0.21.5
  - @backstage/backend-openapi-utils@0.1.8
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/catalog-model@1.4.5
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/integration@1.9.1

## `@backstage/plugin-user-settings` (0.8.2 → 0.8.3)

### 0.8.3

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/core-app-api@1.12.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/frontend-plugin-api@0.6.2
  - @backstage/core-compat-api@0.2.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/errors@1.2.4
  - @backstage/theme@0.5.2
  - @backstage/types@1.1.1

## `@backstage/plugin-user-settings-backend` (0.2.13 → 0.2.14)

### 0.2.14

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-auth-node@0.4.10
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/types@1.1.1

## `@backstage/plugin-vault` (0.1.26 → 0.1.27)

### 0.1.27

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/errors@1.2.4

## `@backstage/plugin-vault-backend` (0.4.7 → 0.4.8)

### 0.4.8

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/backend-tasks@0.5.20
  - @backstage/backend-plugin-api@0.6.15
  - @backstage/config@1.2.0
  - @backstage/errors@1.2.4
  - @backstage/plugin-vault-node@0.1.8

## `@backstage/plugin-vault-node` (0.1.7 → 0.1.8)

### 0.1.8

#### Patch Changes

- Updated dependencies
  - @backstage/backend-plugin-api@0.6.15

## `@backstage/plugin-xcmetrics` (0.2.49 → 0.2.50)

### 0.2.50

#### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/core-components@0.14.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/errors@1.2.4

## `@backstage/repo-tools` (0.7.0 → 0.7.1)

### 0.7.1

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/catalog-model@1.4.5
  - @backstage/cli-common@0.1.13
  - @backstage/cli-node@0.2.4
  - @backstage/errors@1.2.4

## `@backstage/test-utils` (1.5.1 → 1.5.2)

### 1.5.2

#### Patch Changes

- Updated dependencies
  - @backstage/core-app-api@1.12.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/config@1.2.0
  - @backstage/theme@0.5.2
  - @backstage/types@1.1.1
  - @backstage/plugin-permission-common@0.7.13
  - @backstage/plugin-permission-react@0.4.21

## `@techdocs/cli` (1.8.6 → 1.8.7)

### 1.8.7

#### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.21.5
  - @backstage/plugin-techdocs-node@1.12.1
  - @backstage/catalog-model@1.4.5
  - @backstage/cli-common@0.1.13
  - @backstage/config@1.2.0
