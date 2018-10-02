<div align="center">
  <br />
  <a href="https://operationcode.org">
    <img
      alt="Operation Code Hacktoberfest Banner"
      src="https://s3.amazonaws.com/operationcode-assets/operationcode-hacktoberfest-2018.png"
    >
  </a>
  <br />
  <br />
</div>

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Twitter Follow](https://img.shields.io/twitter/follow/operation_code.svg?style=social&label=Follow&style=social)](https://twitter.com/operation_code)

[![Build Status](https://travis-ci.org/OperationCode/front-end.svg?branch=master)](https://travis-ci.org/OperationCode/front-end)
[![Test Coverage](https://api.codeclimate.com/v1/badges/5010b82ce5d8e319a597/test_coverage)](https://codeclimate.com/github/OperationCode/front-end/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/5010b82ce5d8e319a597/maintainability)](https://codeclimate.com/github/OperationCode/front-end/maintainability)
[![Good First Issue](https://img.shields.io/github/issues/OperationCode/front-end/good%20first%20issue.svg)](https://github.com/OperationCode/front-end/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22)
[![Greenkeeper badge](https://badges.greenkeeper.io/OperationCode/front-end.svg)](https://greenkeeper.io/)

# Welcome!

This is incoming v2 front-end application for [OperationCode](https://operationcode.org). We highly recommend [joining our organization](https://operationcode.org/join) to receive an invite to our Slack team. From there, you'll want to join the `#oc-projects` channel. You can get help from multiple professional developers, including people who have worked on the application since day 1! Our website is currently served by code located [here](https://github.com/operationcode/operationcode_frontend), but that repository is no longer being developed.

Before contributing, please review our [Contributing Guide](CONTRIBUTING.md)

## Maintainers

For information about the maintainers of the project, check out [MAINTAINERS.md](MAINTAINERS.md).

## Quick Start

If you're unsure of how to start this app or code for it, don't worry! You're our target audience!
Please read our [Contributing Guide](CONTRIBUTING.md) to learn everything you need to be able to ask the right questions on our Slack team.

**In continuing with the quick start instructions, it is assumed that you are no stranger to React applications, the JavaScript ecosystem, and standard GitHub workflows such as forking, cloning, and branching.**

Our entire UI library is documented via [![Storybook](https://github.com/storybooks/press/blob/master/badges/storybook.svg)](http://storybook.operationcode.org)

Recommended versions of tools used within the repo:

- Node: See [.nvmrc](https://github.com/OperationCode/front-end/blob/master/.nvmrc)
- `yarn@1.7.0` or greater
- `git@2.17.1` or greater

```sh
# Install dependencies
yarn

# Run local development
yarn dev

# Use Storybook as a workbench when developing new components
yarn storybook

#Start local production build (typically unnecessary locally)
yarn start

#Run all available unit and integration tests
yarn test

#Create all the necessary files/folders for a new, reusable component
yarn create-component $ComponentName
```
