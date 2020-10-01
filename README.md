<div align="center">
  <a href="https://operationcode.org" height="750" width="750">
    <img
      alt="Operation Code Hacktoberfest Banner"
      src="https://operation-code-assets.s3.us-east-2.amazonaws.com/operationcode_hacktoberfest_2020.jpg"
    >
  </a>
</div>
<br />
<br />

# 🎃 Hacktoberfest 🎃

[All the details you need](https://github.com/OperationCode/START_HERE/blob/master/README.md#-hacktoberfest-) before participating with us during Hacktoberfest.

<br />

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

## Open Source Gratitude

We appreciate the following tools/companies that are providing us a service or platform for free or a heavily discounted rate.

Sorted alphabetically:

---

### Chromatic

<a href="https://www.chromatic.com/"><img src="https://user-images.githubusercontent.com/321738/84662277-e3db4f80-af1b-11ea-88f5-91d67a5e59f6.png" width="306" height="60" alt="Chromatic" /></a>

Thanks to [Chromatic](https://www.chromatic.com/) for providing the visual testing platform that helps us review UI changes and catch visual regressions.

---

### LogRocket

<a href="https://logrocket.com/"><img src="https://logrocket-assets.io/img/logo.png" alt="LogRocket Logo" width="306" /></a>

Thanks to LogRocket for providing time-saving context on every error and insight into our user's behavior,

---

### Sentry

<a href="https://www.sentry.io/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 222 66" width="306" height="90" class="css-15xgryy e10nushx5"><title>Sentry Logo</title><path fill="#362d59" d="M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z M124.32,28.28,109.56,9.22h-3.68V34.77h3.73V15.19l15.18,19.58h3.26V9.22h-3.73ZM87.15,23.54h13.23V20.22H87.14V12.53h14.93V9.21H83.34V34.77h18.92V31.45H87.14ZM71.59,20.3h0C66.44,19.06,65,18.08,65,15.7c0-2.14,1.89-3.59,4.71-3.59a12.06,12.06,0,0,1,7.07,2.55l2-2.83a14.1,14.1,0,0,0-9-3c-5.06,0-8.59,3-8.59,7.27,0,4.6,3,6.19,8.46,7.52C74.51,24.74,76,25.78,76,28.11s-2,3.77-5.09,3.77a12.34,12.34,0,0,1-8.3-3.26l-2.25,2.69a15.94,15.94,0,0,0,10.42,3.85c5.48,0,9-2.95,9-7.51C79.75,23.79,77.47,21.72,71.59,20.3ZM195.7,9.22l-7.69,12-7.64-12h-4.46L186,24.67V34.78h3.84V24.55L200,9.22Zm-64.63,3.46h8.37v22.1h3.84V12.68h8.37V9.22H131.08ZM169.41,24.8c3.86-1.07,6-3.77,6-7.63,0-4.91-3.59-8-9.38-8H154.67V34.76h3.8V25.58h6.45l6.48,9.2h4.44l-7-9.82Zm-10.95-2.5V12.6h7.17c3.74,0,5.88,1.77,5.88,4.84s-2.29,4.86-5.84,4.86Z" transform="translate(11, 11)"></path></svg></a>

Thanks to Sentry for a wonderful experience with cataloguing and managing errors.

---

### Vercel

<a href="https://vercel.com"><svg width="306" height="90" viewBox="0 0 283 64" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Vercel Logo</title><path d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" fill="#000"/></svg></a>

Thanks to Vercel for hosting and continuous deployment of all our web applications.
