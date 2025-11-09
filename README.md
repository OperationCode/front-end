![](https://operation-code-assets.s3.us-east-2.amazonaws.com/branding/logos/large-blue-logo.png)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Twitter Follow](https://img.shields.io/twitter/follow/operation_code.svg?style=social&label=Follow&style=social)](https://twitter.com/operation_code)

[See unblocked, unassigned issues](https://github.com/OperationCode/front-end/issues?q=is%3Aopen+is%3Aissue+-label%3A%22Status%3A+Blocked%22+no%3Aassignee). We love our labels - feel free to filter issues to find what you want to work on.

# Welcome!

This is the front-end application for [OperationCode](https://operationcode.org). We highly recommend [joining our organization](https://operationcode.org/join) to receive an invite to our Slack team. After registering, you'll receive a Slack invite via email and will want to join the `#oc-projects` channel. You can get help from multiple professional developers, including people who have worked on the application since day 1!

Before contributing, please review our [Contributing Guide](CONTRIBUTING.md).
<br />
Designers, please review our [Contributing Guide for Designers](CONTRIBUTING_TO_DESIGN.md)

## Quick Start

If you're unsure of how to start this app or code for it, don't worry! You're our target audience!
Please read our [Contributing Guide](CONTRIBUTING.md) to learn everything you need to be able to ask the right questions on our Slack team.

**In continuing with the quick start instructions, it is assumed that you are no stranger to React applications, the JavaScript ecosystem, and standard GitHub workflows such as forking, cloning, and branching.**

Our entire UI library is documented via [![Storybook](https://github.com/storybookjs/brand/blob/8d28584c89959d7075c237e9345955c895048977/badge/badge-storybook.svg)](http://storybook.operationcode.org)

Required versions of tools used within the repo:

- Node: See [.nvmrc](https://github.com/OperationCode/front-end/blob/main/.nvmrc)
- `pnpm@10`
- `git@2.17.1` or greater

```sh
# Install dependencies
pnpm install

# Run local development
pnpm dev

# Use Storybook as a workbench when developing new components
pnpm storybook

# Run all unit tests
pnpm test

# Run all Cypress tests (make sure your dev server is running)
pnpm test:e2e

# Create all the necessary files/folders for a new, reusable component
pnpm create-component $ComponentName

# Create the necessary file with a small boilerplate for a new page
pnpm create-page $PageName
```

## Open Source Gratitude

We appreciate the following tools/companies that are providing us a service or platform for free or a heavily discounted rate.

Sorted alphabetically:

---

### Chromatic

<a href="https://www.chromatic.com/"><img src="https://user-images.githubusercontent.com/321738/84662277-e3db4f80-af1b-11ea-88f5-91d67a5e59f6.png" width="306" height="60" alt="Chromatic" /></a>

Thanks to [Chromatic](https://www.chromatic.com/) for providing the visual testing platform that helps us review UI changes and catch visual regressions.

---

### LogRocket

<a href="https://logrocket.com/"><img src="https://raw.githubusercontent.com/OperationCode/front-end/main/public/static/images/logrocket.svg" alt="LogRocket" width="306" /></a>

Thanks to [LogRocket](https://logrocket.com/) for providing time-saving context on every error and insight into our user's behavior,

---

### Sentry

<a href="https://www.sentry.io/"><img src="https://raw.githubusercontent.com/OperationCode/front-end/main/public/static/images/sentry.svg" width="306" height="90" alt="Sentry" /></a>

Thanks to [Sentry](https://getsentry.io) for a wonderful experience with cataloguing and managing errors.

---

### Vercel

<a href="https://vercel.com"><img src="https://raw.githubusercontent.com/OperationCode/front-end/main/public/static/images/vercel.svg" width="306" height="90" alt="Vercel" /></svg></a>

Thanks to [Vercel](https://vercel.com) for hosting and continuous deployment of all our web applications.
