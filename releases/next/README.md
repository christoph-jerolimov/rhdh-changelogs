# RHDH Release next (Backstage 1.55.0-next.0)

## Compared to 1.54.5 (RHDH 1.11-m2)

1 added, 0 removed, 83 upgraded, 127 unchanged.

⚠️ Need extra attention: 2 0.0.x patch.

### 🆕 Added packages

| Package | Version |
| --- | --- |
| `@backstage/plugin-scaffolder-backend-module-workspace-database` | 0.1.0-next.0 |

### Version bumps

| Package | 1.54.5 | 1.55.0-next.0 | Type |
| --- | --- | --- | --- |
| `@backstage/app-defaults` | 1.7.11 | 1.7.12-next.0 | Patch |
| `@backstage/backend-dynamic-feature-service` | 0.8.6 | 0.8.7-next.0 | Patch |
| `@backstage/cli` | 0.36.5 | 0.36.6-next.0 | Patch |
| `@backstage/cli-defaults` | 0.1.5 | 0.1.6-next.0 | Patch |
| `@backstage/cli-module-build` | 0.1.7 | 0.1.8-next.0 | Patch |
| `@backstage/cli-module-new` | 0.1.6 | 0.1.7-next.0 | Patch |
| `@backstage/core-app-api` | 1.20.4 | 1.20.5-next.0 | Patch |
| `@backstage/core-compat-api` | 0.5.14 | 0.5.15-next.0 | Patch |
| `@backstage/core-components` | 0.18.13 | 0.18.14-next.0 | Patch |
| `@backstage/create-app` | 0.9.1 | 0.9.2-next.0 | Patch |
| `@backstage/dev-utils` | 1.1.26 | 1.1.27-next.0 | Patch |
| `@backstage/frontend-app-api` | 0.16.7 | 0.16.8-next.0 | Patch |
| `@backstage/frontend-defaults` | 0.5.5 | 0.5.6-next.0 | Patch |
| `@backstage/frontend-dev-utils` | 0.1.5 | 0.1.6-next.0 | Patch |
| `@backstage/frontend-test-utils` | 0.6.3 | 0.6.4-next.0 | Patch |
| `@backstage/plugin-api-docs` | 0.14.4 | 0.14.5-next.0 | Patch |
| `@backstage/plugin-app` | 0.5.2 | 0.5.3-next.0 | Patch |
| `@backstage/plugin-app-module-user-settings` | 0.1.1 | 0.1.2-next.0 | Patch |
| `@backstage/plugin-app-visualizer` | 0.2.7 | 0.2.8-next.0 | Patch |
| `@backstage/plugin-auth` | 0.1.11 | 0.1.12-next.0 | Patch |
| `@backstage/plugin-auth-backend` | 0.30.0 | 0.30.1-next.0 | Patch |
| `@backstage/plugin-auth-backend-module-aws-alb-provider` | 0.4.19 | 0.4.20-next.0 | Patch |
| `@backstage/plugin-auth-backend-module-oidc-provider` | 0.4.19 | 0.4.20-next.0 | Patch |
| `@backstage/plugin-auth-react` | 0.1.30 | 0.1.31-next.0 | Patch |
| `@backstage/plugin-catalog` | 2.0.8 | 2.0.9-next.0 | Patch |
| `@backstage/plugin-catalog-backend-module-aws` | 0.4.26 | 0.4.27-next.0 | Patch |
| `@backstage/plugin-catalog-backend-module-gcp` | 0.3.22 | 0.3.23-next.0 | Patch |
| `@backstage/plugin-catalog-backend-module-gitlab` | 0.8.6 | 0.8.7-next.0 | Patch |
| `@backstage/plugin-catalog-backend-module-gitlab-org` | 0.2.24 | 0.2.25-next.0 | Patch |
| `@backstage/plugin-catalog-backend-module-scaffolder-entity-model` | 0.2.23 | 0.2.24-next.0 | Patch |
| `@backstage/plugin-catalog-graph` | 0.6.7 | 0.6.8-next.0 | Patch |
| `@backstage/plugin-catalog-import` | 0.13.17 | 0.13.17-next.0 | Patch |
| `@backstage/plugin-catalog-react` | 3.2.2 | 3.2.2-next.0 | Patch |
| `@backstage/plugin-catalog-unprocessed-entities` | 0.2.34 | 0.2.35-next.0 | Patch |
| `@backstage/plugin-config-schema` | 0.1.83 | 0.1.84-next.0 | Patch |
| `@backstage/plugin-devtools` | 0.1.42 | 0.1.43-next.0 | Patch |
| `@backstage/plugin-home` | 0.9.9 | 0.9.10-next.0 | Patch |
| `@backstage/plugin-home-react` | 0.1.41 | 0.1.42-next.0 | Patch |
| `@backstage/plugin-kubernetes` | 0.12.22 | 0.12.23-next.0 | Patch |
| `@backstage/plugin-kubernetes-backend` | 0.21.9 | 0.21.10-next.0 | Patch |
| `@backstage/plugin-kubernetes-cluster` | 0.0.40 | 0.0.41-next.0 | Patch ⚠️ |
| `@backstage/plugin-kubernetes-common` | 0.9.12 | 0.9.13-next.0 | Patch |
| `@backstage/plugin-kubernetes-node` | 0.4.7 | 0.4.8-next.0 | Patch |
| `@backstage/plugin-kubernetes-react` | 0.5.23 | 0.5.24-next.0 | Patch |
| `@backstage/plugin-mui-to-bui` | 0.2.10 | 0.2.11-next.0 | Patch |
| `@backstage/plugin-notifications` | 0.5.20 | 0.5.21-next.0 | Patch |
| `@backstage/plugin-org` | 0.7.8 | 0.7.8-next.0 | Patch |
| `@backstage/plugin-org-react` | 0.1.53 | 0.1.54-next.0 | Patch |
| `@backstage/plugin-scaffolder` | 1.38.2 | 1.39.0-next.0 | Minor |
| `@backstage/plugin-scaffolder-backend` | 4.0.5 | 4.1.0-next.0 | Minor |
| `@backstage/plugin-scaffolder-backend-module-azure` | 0.2.24 | 0.2.25-next.0 | Patch |
| `@backstage/plugin-scaffolder-backend-module-bitbucket-cloud` | 0.3.9 | 0.3.10-next.0 | Patch |
| `@backstage/plugin-scaffolder-backend-module-bitbucket-server` | 0.2.24 | 0.2.25-next.0 | Patch |
| `@backstage/plugin-scaffolder-backend-module-confluence-to-markdown` | 0.3.24 | 0.3.25-next.0 | Patch |
| `@backstage/plugin-scaffolder-backend-module-cookiecutter` | 0.3.26 | 0.3.27-next.0 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gcp` | 0.2.24 | 0.2.25-next.0 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gerrit` | 0.2.24 | 0.2.25-next.0 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gitea` | 0.2.24 | 0.2.25-next.0 | Patch |
| `@backstage/plugin-scaffolder-backend-module-github` | 0.9.12 | 0.9.13-next.0 | Patch |
| `@backstage/plugin-scaffolder-backend-module-gitlab` | 0.11.9 | 0.11.10-next.0 | Patch |
| `@backstage/plugin-scaffolder-backend-module-notifications` | 0.1.25 | 0.1.26-next.0 | Patch |
| `@backstage/plugin-scaffolder-backend-module-rails` | 0.5.24 | 0.5.25-next.0 | Patch |
| `@backstage/plugin-scaffolder-backend-module-sentry` | 0.3.7 | 0.3.8-next.0 | Patch |
| `@backstage/plugin-scaffolder-backend-module-yeoman` | 0.4.25 | 0.4.26-next.0 | Patch |
| `@backstage/plugin-scaffolder-common` | 2.2.2 | 2.3.0-next.0 | Minor |
| `@backstage/plugin-scaffolder-node` | 0.13.6 | 0.13.7-next.0 | Patch |
| `@backstage/plugin-scaffolder-node-test-utils` | 0.3.14 | 0.3.15-next.0 | Patch |
| `@backstage/plugin-scaffolder-react` | 2.0.3 | 2.1.0-next.0 | Minor |
| `@backstage/plugin-search` | 1.7.7 | 1.7.8-next.0 | Patch |
| `@backstage/plugin-search-backend` | 2.1.6 | 2.1.7-next.0 | Patch |
| `@backstage/plugin-search-backend-module-catalog` | 0.3.18 | 0.3.19-next.0 | Patch |
| `@backstage/plugin-search-backend-module-elasticsearch` | 1.8.7 | 1.8.8-next.0 | Patch |
| `@backstage/plugin-search-backend-module-techdocs` | 0.4.17 | 0.4.18-next.0 | Patch |
| `@backstage/plugin-search-react` | 1.11.7 | 1.11.8-next.0 | Patch |
| `@backstage/plugin-signals` | 0.0.34 | 0.0.35-next.0 | Patch ⚠️ |
| `@backstage/plugin-techdocs` | 1.18.0 | 1.18.1-next.0 | Patch |
| `@backstage/plugin-techdocs-addons-test-utils` | 2.0.8 | 2.0.9-next.0 | Patch |
| `@backstage/plugin-techdocs-module-addons-contrib` | 1.1.39 | 1.1.40-next.0 | Patch |
| `@backstage/plugin-techdocs-react` | 1.3.14 | 1.3.15-next.0 | Patch |
| `@backstage/plugin-user-settings` | 0.9.6 | 0.9.7-next.0 | Patch |
| `@backstage/test-utils` | 1.7.21 | 1.7.22-next.0 | Patch |
| `@backstage/ui` | 0.17.1 | 0.17.2-next.0 | Patch |
| `@techdocs/cli` | 1.11.3 | 1.11.4-next.0 | Patch |
