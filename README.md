<div align="center">
  <br>
  <a href="https://operationcode.org">
    <img
      alt="Operation Code Logo"
      src="https://operation-code-assets.s3.us-east-2.amazonaws.com/branding/logos/large-blue-logo.png"
    >
  </a>
  <br>
  <br>
</div>

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Twitter Follow](https://img.shields.io/twitter/follow/operation_code.svg?style=social&label=Follow&style=social)](https://twitter.com/operation_code)

[![CircleCI](https://circleci.com/gh/OperationCode/front-end/tree/main.svg?style=svg)](https://circleci.com/gh/OperationCode/front-end/tree/main)
[![Maintainability](https://api.codeclimate.com/v1/badges/5010b82ce5d8e319a597/maintainability)](https://codeclimate.com/github/OperationCode/front-end/maintainability)
[![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://cypress.io)

[See unblocked, unassigned issues](https://github.com/OperationCode/front-end/issues?q=is%3Aopen+is%3Aissue+-label%3A%22Status%3A+Blocked%22+no%3Aassignee). We love our labels - feel free to filter issues to find what you want to work on.

# Welcome!

This is the front-end application for [OperationCode](https://operationcode.org). We highly recommend [joining our organization](https://operationcode.org/join) to receive an invite to our Slack team. After registering, you'll receive a Slack invite via email and will want to join the `#oc-projects` channel. You can get help from multiple professional developers, including people who have worked on the application since day 1!

Before contributing, please review our [Contributing Guide](CONTRIBUTING.md).
<br />
Designers, please review our [Contributing Guide for Designers](CONTRIBUTING_TO_DESIGN.md)

## Maintainers

For information about the maintainers of the project, check out [MAINTAINERS.md](MAINTAINERS.md).

## Quick Start

If you're unsure of how to start this app or code for it, don't worry! You're our target audience!
Please read our [Contributing Guide](CONTRIBUTING.md) to learn everything you need to be able to ask the right questions on our Slack team.

**In continuing with the quick start instructions, it is assumed that you are no stranger to React applications, the JavaScript ecosystem, and standard GitHub workflows such as forking, cloning, and branching.**

Our entire UI library is documented via [![Storybook](https://github.com/storybookjs/brand/blob/8d28584c89959d7075c237e9345955c895048977/badge/badge-storybook.svg)](http://storybook.operationcode.org)

Required versions of tools used within the repo:

- Node: See [.nvmrc](https://github.com/OperationCode/front-end/blob/main/.nvmrc)
- `yarn@1`
- `git@2.17.1` or greater

```sh
# Install dependencies
yarn

# Run local development
yarn dev

# Use Storybook as a workbench when developing new components
yarn storybook

# Run all unit tests
yarn test

# Run all Cypress tests (make sure your dev server is running)
yarn test:e2e

# Create all the necessary files/folders for a new, reusable component
yarn create-component $ComponentName

# Create the necessary file with a small boilerplate for a new page
yarn create-page $PageName
```
