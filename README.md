# ✨ :us: OperationCode front-end :us: ✨

---

<!-- [![Build Status](https://travis-ci.org/OperationCode/operationcode_front-end.svg?branch=master)](https://travis-ci.org/OperationCode/operationcode_front-end)
[![PRs Welcome][prs-badge]][prs] -->

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Twitter Follow](https://img.shields.io/twitter/follow/operation_code.svg?style=social&label=Follow&style=social)](https://twitter.com/operation_code)

# Temporary Note

  Changes are made on a daily basis to documentation and files. Documentation may not be accurate due to the rapid changes that are occuring. In its current state, this repo is not ready for deployment.

# Welcome!

This is incoming v2 front-end application for [OperationCode](https://operationcode.org). We highly recommend [joining our organization](https://operationcode.org/join) to receive an invite to our Slack team. From there, you'll want to join the `#oc-projects` channel. You can get help from multiple professional developers, including people who have worked on the application since day 1!

Before contributing, please review our [Contributing Guide](CONTRIBUTING.md)

# Maintainers

For information about the maintainers of the project, check out [MAINTAINERS.md](MAINTAINERS.md).

# Quick Start
If you're unsure of how to start this app or code for it, don't worry! You're our target audience!
Please read our [Contributing Guide](CONTRIBUTING.md) to learn everything you need to be able to ask the right questions on our Slack team.

If you're no stranger to React applications and the JavaScript ecosystem:

Recommended Versions of tools used within the repo:
Node @ 8.11.3 LTS
Yarn@1.7.0 or greater
Git @2.17.1 or greater

## Github workflow

Fork a copy to your Github profile

```sh
# Clone your fork of the repo
git clone https://git@github.com/yourusername/front-end.git

#set upstream to receive all the latest commits and keep your local repo in sync

git remote add upstream https://github.com/OperationCode/front-end.git

#checkout a branch with the name of the issue
git checkout -b "name-of-branch-relevant-to-issue"

```
When finished, [create a PR on GitHub](https://help.github.com/articles/creating-a-pull-request/)

## Development workflow

```sh
# Install dependencies
yarn

# Run local development on localhost:3000
yarn dev

# Use Storybook when developing new common components or to see what lego blocks you have available
yarn storybook
# open localhost:9001

#Create a static bundle of our Storybook instance that can be easily deployed.
yarn build-storybook

#Create a static bundle of our main application that can be easily deployed.
yarn build

#Check for linting errors. Used in our continuous integration to ensure that code meets our linting standards.

yarn lint

#Used in a precommit hook to ensure that code you’re committing is up to our linting and formatting standards.

yarn format

#Start the main application server or to serve up a production build locally.

yarn start

#Run all available unit and integration tests

yarn test
```