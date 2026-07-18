# Backstage Release 1.20.3 changelog

Changes between 1.20.2 and 1.20.3 — 62 changed and 0 added packages.

## Summary

- [0.0.x patch version bumps](#00x-patch-version-bumps): 1 package
- [Other patch version bumps](#other-patch-version-bumps): 61 packages

## Table of contents

- [0.0.x patch version bumps](#00x-patch-version-bumps)
  - [`@backstage/plugin-kubernetes-cluster` (0.0.2 → 0.0.3)](#backstageplugin-kubernetes-cluster-002--003)
- [Other patch version bumps](#other-patch-version-bumps)
  - [`@backstage/dev-utils` (1.0.23 → 1.0.24)](#backstagedev-utils-1023--1024)
  - [`@backstage/plugin-adr` (0.6.9 → 0.6.10)](#backstageplugin-adr-069--0610)
  - [`@backstage/plugin-airbrake` (0.3.26 → 0.3.27)](#backstageplugin-airbrake-0326--0327)
  - [`@backstage/plugin-allure` (0.1.42 → 0.1.43)](#backstageplugin-allure-0142--0143)
  - [`@backstage/plugin-api-docs` (0.10.0 → 0.10.1)](#backstageplugin-api-docs-0100--0101)
  - [`@backstage/plugin-azure-devops` (0.3.8 → 0.3.9)](#backstageplugin-azure-devops-038--039)
  - [`@backstage/plugin-azure-sites` (0.1.15 → 0.1.16)](#backstageplugin-azure-sites-0115--0116)
  - [`@backstage/plugin-badges` (0.2.50 → 0.2.51)](#backstageplugin-badges-0250--0251)
  - [`@backstage/plugin-bazaar` (0.2.18 → 0.2.19)](#backstageplugin-bazaar-0218--0219)
  - [`@backstage/plugin-bitrise` (0.1.53 → 0.1.54)](#backstageplugin-bitrise-0153--0154)
  - [`@backstage/plugin-catalog` (1.15.0 → 1.15.1)](#backstageplugin-catalog-1150--1151)
  - [`@backstage/plugin-catalog-graph` (0.3.0 → 0.3.1)](#backstageplugin-catalog-graph-030--031)
  - [`@backstage/plugin-catalog-import` (0.10.2 → 0.10.3)](#backstageplugin-catalog-import-0102--0103)
  - [`@backstage/plugin-catalog-react` (1.9.0 → 1.9.1)](#backstageplugin-catalog-react-190--191)
  - [`@backstage/plugin-cicd-statistics` (0.1.28 → 0.1.29)](#backstageplugin-cicd-statistics-0128--0129)
  - [`@backstage/plugin-cicd-statistics-module-gitlab` (0.1.22 → 0.1.23)](#backstageplugin-cicd-statistics-module-gitlab-0122--0123)
  - [`@backstage/plugin-circleci` (0.3.26 → 0.3.27)](#backstageplugin-circleci-0326--0327)
  - [`@backstage/plugin-cloudbuild` (0.3.26 → 0.3.27)](#backstageplugin-cloudbuild-0326--0327)
  - [`@backstage/plugin-code-climate` (0.1.26 → 0.1.27)](#backstageplugin-code-climate-0126--0127)
  - [`@backstage/plugin-code-coverage` (0.2.19 → 0.2.20)](#backstageplugin-code-coverage-0219--0220)
  - [`@backstage/plugin-cost-insights` (0.12.15 → 0.12.16)](#backstageplugin-cost-insights-01215--01216)
  - [`@backstage/plugin-dynatrace` (8.0.0 → 8.0.1)](#backstageplugin-dynatrace-800--801)
  - [`@backstage/plugin-entity-feedback` (0.2.9 → 0.2.10)](#backstageplugin-entity-feedback-029--0210)
  - [`@backstage/plugin-entity-validation` (0.1.11 → 0.1.12)](#backstageplugin-entity-validation-0111--0112)
  - [`@backstage/plugin-explore` (0.4.12 → 0.4.13)](#backstageplugin-explore-0412--0413)
  - [`@backstage/plugin-firehydrant` (0.2.10 → 0.2.11)](#backstageplugin-firehydrant-0210--0211)
  - [`@backstage/plugin-fossa` (0.2.58 → 0.2.59)](#backstageplugin-fossa-0258--0259)
  - [`@backstage/plugin-github-actions` (0.6.7 → 0.6.8)](#backstageplugin-github-actions-067--068)
  - [`@backstage/plugin-github-deployments` (0.1.57 → 0.1.58)](#backstageplugin-github-deployments-0157--0158)
  - [`@backstage/plugin-github-issues` (0.2.15 → 0.2.16)](#backstageplugin-github-issues-0215--0216)
  - [`@backstage/plugin-github-pull-requests-board` (0.1.20 → 0.1.21)](#backstageplugin-github-pull-requests-board-0120--0121)
  - [`@backstage/plugin-gocd` (0.1.32 → 0.1.33)](#backstageplugin-gocd-0132--0133)
  - [`@backstage/plugin-home` (0.5.10 → 0.5.11)](#backstageplugin-home-0510--0511)
  - [`@backstage/plugin-ilert` (0.2.15 → 0.2.16)](#backstageplugin-ilert-0215--0216)
  - [`@backstage/plugin-jenkins` (0.9.1 → 0.9.2)](#backstageplugin-jenkins-091--092)
  - [`@backstage/plugin-kafka` (0.3.26 → 0.3.27)](#backstageplugin-kafka-0326--0327)
  - [`@backstage/plugin-kubernetes` (0.11.1 → 0.11.2)](#backstageplugin-kubernetes-0111--0112)
  - [`@backstage/plugin-lighthouse` (0.4.11 → 0.4.12)](#backstageplugin-lighthouse-0411--0412)
  - [`@backstage/plugin-linguist` (0.1.11 → 0.1.12)](#backstageplugin-linguist-0111--0112)
  - [`@backstage/plugin-newrelic-dashboard` (0.3.1 → 0.3.2)](#backstageplugin-newrelic-dashboard-031--032)
  - [`@backstage/plugin-nomad` (0.1.7 → 0.1.8)](#backstageplugin-nomad-017--018)
  - [`@backstage/plugin-octopus-deploy` (0.2.8 → 0.2.9)](#backstageplugin-octopus-deploy-028--029)
  - [`@backstage/plugin-org` (0.6.16 → 0.6.17)](#backstageplugin-org-0616--0617)
  - [`@backstage/plugin-org-react` (0.1.15 → 0.1.16)](#backstageplugin-org-react-0115--0116)
  - [`@backstage/plugin-pagerduty` (0.6.7 → 0.6.8)](#backstageplugin-pagerduty-067--068)
  - [`@backstage/plugin-periskop` (0.1.24 → 0.1.25)](#backstageplugin-periskop-0124--0125)
  - [`@backstage/plugin-playlist` (0.2.0 → 0.2.1)](#backstageplugin-playlist-020--021)
  - [`@backstage/plugin-puppetdb` (0.1.9 → 0.1.10)](#backstageplugin-puppetdb-019--0110)
  - [`@backstage/plugin-rollbar` (0.4.26 → 0.4.27)](#backstageplugin-rollbar-0426--0427)
  - [`@backstage/plugin-scaffolder` (1.16.0 → 1.16.1)](#backstageplugin-scaffolder-1160--1161)
  - [`@backstage/plugin-scaffolder-react` (1.6.0 → 1.6.1)](#backstageplugin-scaffolder-react-160--161)
  - [`@backstage/plugin-search` (1.4.2 → 1.4.3)](#backstageplugin-search-142--143)
  - [`@backstage/plugin-sentry` (0.5.11 → 0.5.12)](#backstageplugin-sentry-0511--0512)
  - [`@backstage/plugin-sonarqube` (0.7.8 → 0.7.9)](#backstageplugin-sonarqube-078--079)
  - [`@backstage/plugin-splunk-on-call` (0.4.15 → 0.4.16)](#backstageplugin-splunk-on-call-0415--0416)
  - [`@backstage/plugin-tech-insights` (0.3.18 → 0.3.19)](#backstageplugin-tech-insights-0318--0319)
  - [`@backstage/plugin-techdocs` (1.9.0 → 1.9.1)](#backstageplugin-techdocs-190--191)
  - [`@backstage/plugin-techdocs-addons-test-utils` (1.0.23 → 1.0.24)](#backstageplugin-techdocs-addons-test-utils-1023--1024)
  - [`@backstage/plugin-todo` (0.2.30 → 0.2.31)](#backstageplugin-todo-0230--0231)
  - [`@backstage/plugin-user-settings` (0.7.12 → 0.7.13)](#backstageplugin-user-settings-0712--0713)
  - [`@backstage/plugin-vault` (0.1.21 → 0.1.22)](#backstageplugin-vault-0121--0122)

## 0.0.x patch version bumps

### `@backstage/plugin-kubernetes-cluster` (0.0.2 → 0.0.3)

_No changelog entries found._

## Other patch version bumps

### `@backstage/dev-utils` (1.0.23 → 1.0.24)

_No changelog entries found._

### `@backstage/plugin-adr` (0.6.9 → 0.6.10)

_No changelog entries found._

### `@backstage/plugin-airbrake` (0.3.26 → 0.3.27)

_No changelog entries found._

### `@backstage/plugin-allure` (0.1.42 → 0.1.43)

_No changelog entries found._

### `@backstage/plugin-api-docs` (0.10.0 → 0.10.1)

_No changelog entries found._

### `@backstage/plugin-azure-devops` (0.3.8 → 0.3.9)

_No changelog entries found._

### `@backstage/plugin-azure-sites` (0.1.15 → 0.1.16)

_No changelog entries found._

### `@backstage/plugin-badges` (0.2.50 → 0.2.51)

_No changelog entries found._

### `@backstage/plugin-bazaar` (0.2.18 → 0.2.19)

_No changelog entries found._

### `@backstage/plugin-bitrise` (0.1.53 → 0.1.54)

_No changelog entries found._

### `@backstage/plugin-catalog` (1.15.0 → 1.15.1)

_No changelog entries found._

### `@backstage/plugin-catalog-graph` (0.3.0 → 0.3.1)

_No changelog entries found._

### `@backstage/plugin-catalog-import` (0.10.2 → 0.10.3)

_No changelog entries found._

### `@backstage/plugin-catalog-react` (1.9.0 → 1.9.1)

_No changelog entries found._

### `@backstage/plugin-cicd-statistics` (0.1.28 → 0.1.29)

_No changelog entries found._

### `@backstage/plugin-cicd-statistics-module-gitlab` (0.1.22 → 0.1.23)

_No changelog entries found._

### `@backstage/plugin-circleci` (0.3.26 → 0.3.27)

_No changelog entries found._

### `@backstage/plugin-cloudbuild` (0.3.26 → 0.3.27)

_No changelog entries found._

### `@backstage/plugin-code-climate` (0.1.26 → 0.1.27)

_No changelog entries found._

### `@backstage/plugin-code-coverage` (0.2.19 → 0.2.20)

_No changelog entries found._

### `@backstage/plugin-cost-insights` (0.12.15 → 0.12.16)

_No changelog entries found._

### `@backstage/plugin-dynatrace` (8.0.0 → 8.0.1)

_No changelog entries found._

### `@backstage/plugin-entity-feedback` (0.2.9 → 0.2.10)

_No changelog entries found._

### `@backstage/plugin-entity-validation` (0.1.11 → 0.1.12)

_No changelog entries found._

### `@backstage/plugin-explore` (0.4.12 → 0.4.13)

_No changelog entries found._

### `@backstage/plugin-firehydrant` (0.2.10 → 0.2.11)

_No changelog entries found._

### `@backstage/plugin-fossa` (0.2.58 → 0.2.59)

_No changelog entries found._

### `@backstage/plugin-github-actions` (0.6.7 → 0.6.8)

_No changelog entries found._

### `@backstage/plugin-github-deployments` (0.1.57 → 0.1.58)

_No changelog entries found._

### `@backstage/plugin-github-issues` (0.2.15 → 0.2.16)

_No changelog entries found._

### `@backstage/plugin-github-pull-requests-board` (0.1.20 → 0.1.21)

_No changelog entries found._

### `@backstage/plugin-gocd` (0.1.32 → 0.1.33)

_No changelog entries found._

### `@backstage/plugin-home` (0.5.10 → 0.5.11)

_No changelog entries found._

### `@backstage/plugin-ilert` (0.2.15 → 0.2.16)

_No changelog entries found._

### `@backstage/plugin-jenkins` (0.9.1 → 0.9.2)

_No changelog entries found._

### `@backstage/plugin-kafka` (0.3.26 → 0.3.27)

_No changelog entries found._

### `@backstage/plugin-kubernetes` (0.11.1 → 0.11.2)

_No changelog entries found._

### `@backstage/plugin-lighthouse` (0.4.11 → 0.4.12)

_No changelog entries found._

### `@backstage/plugin-linguist` (0.1.11 → 0.1.12)

_No changelog entries found._

### `@backstage/plugin-newrelic-dashboard` (0.3.1 → 0.3.2)

_No changelog entries found._

### `@backstage/plugin-nomad` (0.1.7 → 0.1.8)

_No changelog entries found._

### `@backstage/plugin-octopus-deploy` (0.2.8 → 0.2.9)

_No changelog entries found._

### `@backstage/plugin-org` (0.6.16 → 0.6.17)

_No changelog entries found._

### `@backstage/plugin-org-react` (0.1.15 → 0.1.16)

_No changelog entries found._

### `@backstage/plugin-pagerduty` (0.6.7 → 0.6.8)

_No changelog entries found._

### `@backstage/plugin-periskop` (0.1.24 → 0.1.25)

_No changelog entries found._

### `@backstage/plugin-playlist` (0.2.0 → 0.2.1)

_No changelog entries found._

### `@backstage/plugin-puppetdb` (0.1.9 → 0.1.10)

_No changelog entries found._

### `@backstage/plugin-rollbar` (0.4.26 → 0.4.27)

_No changelog entries found._

### `@backstage/plugin-scaffolder` (1.16.0 → 1.16.1)

_No changelog entries found._

### `@backstage/plugin-scaffolder-react` (1.6.0 → 1.6.1)

_No changelog entries found._

### `@backstage/plugin-search` (1.4.2 → 1.4.3)

_No changelog entries found._

### `@backstage/plugin-sentry` (0.5.11 → 0.5.12)

_No changelog entries found._

### `@backstage/plugin-sonarqube` (0.7.8 → 0.7.9)

_No changelog entries found._

### `@backstage/plugin-splunk-on-call` (0.4.15 → 0.4.16)

_No changelog entries found._

### `@backstage/plugin-tech-insights` (0.3.18 → 0.3.19)

_No changelog entries found._

### `@backstage/plugin-techdocs` (1.9.0 → 1.9.1)

_No changelog entries found._

### `@backstage/plugin-techdocs-addons-test-utils` (1.0.23 → 1.0.24)

_No changelog entries found._

### `@backstage/plugin-todo` (0.2.30 → 0.2.31)

_No changelog entries found._

### `@backstage/plugin-user-settings` (0.7.12 → 0.7.13)

_No changelog entries found._

### `@backstage/plugin-vault` (0.1.21 → 0.1.22)

_No changelog entries found._
