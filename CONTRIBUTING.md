# Guide To Contribution

Firstly, thank you for considering contributing to our project! It's people like you that make Operation Code such a great community.

The team at Operation Code wants to reiterate that joining our Slack team is the ultimate way to set yourself up for success when contributing to our repository (repo). You can get an invite to our Slack channel by [requesting to join Operation Code](https://operationcode.org/join). Once in our Slack team, simply type: `/open #oc-projects` and then click enter. Feel free to ask for help; everyone is a beginner at first :smile_cat:!

## For Everybody

**Regardless of your experience level**, reading about our [technology choices](#technology) and our [development workflow](development-workflow) will prove beneficial.

## For Developers With Less Experience

We're so excited your want to contribute! Most of this guideline is for newer developers, developers who are unfamiliar with the quick start instructions, and developers who are unfamiliar with React. This guide assumes that you are a little bit familiar with HTML, CSS, and JavaScript.

Reading this entire guide not only helps you contribute successfully into our codebase, it also helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue, assessing changes, and helping you finalize your pull requests.

We're an open source project and we love to receive contributions from our community — you! There are many ways to contribute, from writing tutorials or blog posts, improving the documentation, submitting bug reports and feature requests or writing code which can be incorporated into the website itself.

Being an open source project involving contributors of varying levels of experience, it's difficult to create a perfect guide. Please note: most of the following instructions are not relevant to many Windows users - you'll need to research the equivalent of each command knowing what terminal you use on your Windows platform.

**Lastly, If an instruction begins with "Run ...", that means to type the text in place of ... within your command line interface.**

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [Git and GitHub](#git-and-github)
  - [Git](#git)
  - [GitHub Workflow](#github-workflow)
- [Explanations](#explanations)
  - [What Is The Front-End?](#what-is-the-front-end)
  - [What Is The Back-End?](#what-is-the-back-end)
  - [What is REST? What is an API?](#what-is-rest-what-is-an-api)
- [Technologies](#technologies)
  - [PostCSS](#postcss)
- [Development Workflow](#development-workflow)
  - [Installing Dependencies](#installing-dependencies)
  - [Run The Development Server](#run-the-development-server)
  - [Returning To Work After A Break](#returning-to-work-after-a-break)
  - [Knowing The Tools At Your Disposal](#knowing-the-tools-at-your-disposal)
  - [File Structure](#file-structure)
  - [npm Scripts With Explanations](#npm-scripts-with-explanations)
- [Mocking Back-end Server API](#mocking-back-end-server-api)
- [Resources](#resources)
- [Navigating Operating System Differences](#navigating-operating-system-differences)
  - [MacOS](#macos)
    - [Update Your Mac](#update-your-mac)
    - [Xcode Command Line Tools](#xcode-command-line-tools)
    - [Homebrew](#homebrew)
    - [Git](#git)
    - [NodeJS](#nodejs)
  - [Windows](#windows)
    - [Git](#git)
    - [NodeJS](#nodejs)

## Git and GitHub

### Git

There are many resources in the wild to learn about all forms of version control, including git. If none of the available resources have helped you, please join the `#git` channel on our Slack team for assistance.

### GitHub Workflow

1. Before working on an issue, post a comment on the issue asking to claim it. One of our maintainers will assign themselves as a placeholder on the issue, at which point you are good to start working on it. We don't like competition in open source, nor do we enjoy closing pull requests resolving the same issue... Please only ask to claim unassigned issues!
2. Once you've claimed an issue, feel free to [fork the repo](https://help.github.com/articles/fork-a-repo/).
3. If you follow all of the instructions in the help article above, you'll be able to create a branch. That's `git checkout -b YOUR_BRANCH_NAME` Note that some companies and organizations have branch-naming conventions - we do not.
4. Once you make a branch, you're free to open your preferred text editor and code. If you don't have a preferred text editor, Operation Code recommends [Visual Studio Code](https://code.visualstudio.com/) (more commonly referred to as "VS Code" and not to be confused with Visual Studio). You'll want to follow along with [Development Workflow](#development-workflow) to see how you should go about coding in the repo.
5. When your changes are complete, commit your changes. If you use `git commit` often, you'll notice your commit is taking longer than usual! That's because we have a "pre-commit hook". This hook is [linting](https://stackoverflow.com/questions/8503559/what-is-linting), formatting (example: changing tabs to spaces), and testing all of your changes. If a test fails, so does the commit. If your code had changes after formatting, you'll need to re-stage those file(s) and use `git commit --amend` to add the linted/formatted code to your original commit.
6. After committing, push your branch to your forked repo. `git push -u origin YOUR_BRANCH_NAME` should do the trick.
7. Create a pull request within two weeks of claiming the issue, [using that branch on your fork](https://help.github.com/articles/creating-a-pull-request-from-a-fork/). You are at risk of being unassigned from the issue otherwise. While we like reserving issues out for others, this is necessary to prevent bogarting.

## Explanations

### What Is The Front-End?

When you visit our website you're interacting with two systems, a front-end application and a back-end API. The front-end application is responsible for displaying the "User Interface" - images, text, animations... everything you interact with visually or physically on our web page. Front-end applications are usually written using a combination of HTML, CSS, and JavaScript and utilize one or more frameworks such as [Angular](https://angular.io/), [Vue](https://vuejs.org/), and [React](https://reactjs.org/). We use React.

> "front-end" is synonymous with client, client-side, "the view", and "the UI".

### What Is The Back-End?

_Quick Note_: Our back-end API is not currently connected to this repo.

The back-end is responsible for providing data for the front-end to display. This sometimes involves processing the data entered into the front-end, and running various jobs like inviting new users to Slack, or signing them up for our newsletter. Our back-end is written in Rails and it's source code can be viewed [here](https://github.com/OperationCode/operationcode_backend). It acts primarily as a "REST API".

> "back-end" is synonymous with server, server-side, and "models & controllers".

### What is REST? What is an API?

[What is REST?](https://www.codecademy.com/articles/what-is-rest)

[What is an API?](https://medium.freecodecamp.org/what-is-an-api-in-english-please-b880a3214a82)

## Technologies

Here is an list of technologies this project leverages:

- [Babel](https://babeljs.io/) - JavaScript compiler to unify all the different versions of JS that may have been used or will be used in the future. [Here's a blog post from Scotch.io on why JavaScript utilizes "transpiling" with Babel](https://scotch.io/tutorials/javascript-transpilers-what-they-are-why-we-need-them).
- [CSS Modules](https://github.com/css-modules/css-modules) - CSS Modules allow us to encapsulate CSS within components. Instead of HTML/CSS - our project structure is basically JSX/CSS.
- [Jest](https://jestjs.io/) - A JavaScript testing framework from Facebook. We use it for all of our unit and some of our integration/regression tests.
- [Next.js](https://nextjs.org/) - Next is a framework for creating ["server-side rendered"](https://medium.freecodecamp.org/demystifying-reacts-server-side-render-de335d408fe4) React applications with a lot of performance and [search engine optimizations](https://searchengineland.com/guide/what-is-seo) out-of-the-box.
- [Node.js](https://www.nodejs.org/) - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. React utilizes a tiny Node/Express server for it's development environment.
- [React.js](https://facebook.github.io/react/) - Facebook's popular JavaScript front-end framework.
- [Storybook](https://storybook.js.org) - Storybook acts as a "component workbench" and source for component documentation. You can learn more about Storybook on your own [here](https://www.learnstorybook.com/). You can see our Storybook here: [![Storybook](https://github.com/storybooks/brand/blob/master/badge/badge-storybook.svg)](http://storybook.operationcode.org)
- [Webpack](https://webpack.js.org/) - The premier module bundler for JavaScript. Read [this article](https://survivejs.com/webpack/what-is-webpack/) for more information.
- [Yarn](https://yarnpkg.com/) - Facebook's open source JavaScript package manager. It has very subtle differences from npm, but essentially does the same thing.
- [PostCSS](#PostCSS) - Extensive documentation listed below...
- [Cypress](https://cypress.io/) - Hand-picked resources [here](https://github.com/OperationCode/front-end/tree/master/cypress/README.md).

### PostCSS

In our repo, we use PostCSS plug-ins to help simplify how we write our CSS. PostCSS is included in our webpack configuration, so there are no additional steps necessary to leverage these plug-ins.

#### What is PostCSS?

"PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more." - [PostCSS Repo](https://github.com/postcss/postcss)

#### PostCSS Plug-ins in Use

- [Autoprefixer](https://github.com/postcss/autoprefixer): used to parse vendor prefixes for certain CSS property values
  ([What is a vendor prefix?](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix)). In our repo, you will not have to include vendor prefixes when you create a non-standard CSS selector.

**Example:**
During development, we would write:

```
.someClass {
  disply: flex;
}
```

Which will output the following once compiled:

```
.someClass {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
```

- [PostCSS Media Variables](https://github.com/WolfgangKluge/postcss-media-variables): This plugin allows us to set 'default' breakpoints, and manipulate those values as needed without changing the defaults. Our defaults are defined in `common/styles/variables.css`

**Example:**
During development, we would write:

```
:root {
    --largeViewportWidth: 992px;
}
@media (min-width: var(--largeViewportWidth)) {}
```

Which will output the following when deployed:

```
@media (min-width: 992px){}
```

- [PostCSS CSS Variables](https://github.com/MadLittleMods/postcss-css-variables): This plug-in allows us to use [CSS3 variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) across older browsers. On run-time, this plug-in extracts and translates our custom variables into 'vanilla' CSS.

**Example:**
During development, we would write:

```
:root {
  --some-color: red;
  /*here we have defined the property `--some-color` as red*/
}

.foo {
  color: --some-color;
/*the element with class selector `.foo` will be red */
}

```

Which will output the following when deployed:

```
.foo {
  color: red;
}
```

- [PostCSS Export Custom Variables](https://github.com/jonathantneal/postcss-export-custom-variables): We use this plug-in simply to export our collection of CSS variables to [common/styles/themeMap.js](https://github.com/OperationCode/front-end/blob/master/common/styles/themeMap.js) so that they're leveragable within any JavaScript context.

- [PostCSS Import](https://github.com/postcss/postcss-import): This plug-in essentially tries to emulate the existing [CSS Import spec](https://developer.mozilla.org/en-US/docs/Web/CSS/@import) allowing for modularization and concatenation of CSS files.

## Development Workflow

### Installing Dependencies

VERY IMPORTANT: Required versions of tools used within the repo are described [here](https://github.com/OperationCode/front-end#quick-start). We do not use `npm`.

_You can check to see your versions like so:_

- Run `node -v`. You can download the latest LTS release of node at [nodejs.org](https://nodejs.org) or you can use [nvm](https://github.com/creationix/nvm) to be able to switch between node versions easily for many projects. If you use Windows, you will need to use [nvm-windows](https://github.com/coreybutler/nvm-windows) instead.
- Run `npm -v`. If you do not have version 4 or greater, run `npm install -g npm`
- Run `yarn --version`. If you do not have version 1.12.1 or greater, run `npm install --global yarn`.
- Once you have all the required tooling, you should be able to run `yarn` at the root level of your forked repo. You should see a bunch of emojis and progress bars - that is how you will know it is working!

### Run The Development Server

Now that you've installed your dependencies and your new branch in your fork, you can launch the "dev server" with `yarn dev`.

**Note:** The dev server should be running on http://localhost:3000/ shortly after you run `yarn dev`

<center>⚠️ Warning ⚠️ </center>
<aside>Unfortunately, you may need to refresh a page on navigation in development to have all styles be applied. This is the result of a bug within NextCSS plugin. It's being worked on!</aside>

### Returning To Work After A Break

Some issues take awhile to code a solution for. It is very normal to take a large amount of time to turn in well-written work that resolves an issue! In the meantime, there could be many other people contributing to the code base. Since we use Git, you'll want to keep you project up-to-date with the `master` branch so there are no [merge conflicts](https://help.github.com/articles/about-merge-conflicts/) to resolve when you make your pull request.

1. [Keep your fork in sync with Operation Code's master branch.](https://help.github.com/articles/syncing-a-fork/)
2. Run `yarn` to install any updated dependencies
3. Run `yarn dev` to restart local development environment

### Knowing The Tools At Your Disposal

You can see interactive documentation on all of our components via [![Storybook](https://github.com/storybooks/brand/blob/master/badge/badge-storybook.svg)](http://storybook.operationcode.org)

### File Structure

```
├── common
|   ├── config  # This is just a folder for configuration shared by more than one tool.
|   ├── constants  # This is a folder that contain simple, but unpreventable uniform data.
|   ├── styles  # Contains global styles, CSS variables, and a JS export of those CSS variables (used in Storybook)
|   └── utils
|
├── components
|   ├── ReusableSections  # These sections get used many times throughout our pages, but are not necessarily composable or reusable.
|   ├── *  # Most components act as reusable lego blocks that form the foundation of many components. One-off use components may also exist simply to modularize the codebase (not put everything in one big file).
|   ├── head.js  # Next.js-specific component to handle a page's meta info (and the rest of it's <head> tag) dynamically
|   └── nav.js
|
├── cypress
|   └── * # Houses all e2e/integration tests and configuration of cypress.
|
├── decorators
|   └── * # This is filled with higher-order components that wrap components to add little bits of functionality.
|
├── pages
|   ├── styles
|   ├── _app.js  # Next.js-specific file used to customize the client-side routing of the application.
|   ├── _document.js  # Next.js-specific file used to customize the initial rendering of the application.
|   ├── _error.js  # Next.js-specific file used to override/customize the traditional error code views (such as 404 and 503)
|   ├── index.js  # Landing page
|   └── *.js  # All the other pages
|
├── scripts
|   └── createComponent
|
├── static
|   ├── fonts
|   └── images
|       └── icons  # SVG icons only
|
├── test-utils
|   ├── mocks  # Contains commonly mocked components, functions, and classes for testing purposes
|   ├── createComponentInstance.js
|   ├── createShallowSnapshotTest.js
|   ├── createSnapshotTest.js
|   └── setupTests.js
|
├── internationalized-documentation
|    └ * # Folders per language plus an English-only README to describe how to contribute translations of documentation.
|
* - Root-level files are configuration and documentation.
```

### npm Scripts With Explanations

```sh
# Install dependencies defined in `package.json`
yarn

# Run local development server accessible in the browser via http://localhost:3000
yarn dev

# Run Storybook development server. Used as a workbench when developing new common components. Accessible in the browser via http://localhost:9001
yarn storybook

# Create a static bundle of our Storybook instance that can be easily deployed.
yarn storybook:build

# Create a bundle of our main application that can be easily deployed by a server or as a static export.
yarn build

# Run build, but expose local instances of bundle visualizations to see what code we ship to users' browsers.
yarn build:analyze

# Fix/reveal linting errors. Used in the precommit hook and on every build to ensure that code meets our linting standards.
yarn lint

# Start the main application server or to serve up a production build locally.
yarn start

# Run all available unit and integration tests.
yarn test

# Update all snapshot tests
yarn test -u OR yarn test:update-snaps

# Only run tests for files changed from master branch
yarn test:changes

# Start a test runner for files changed from master branch
yarn test:changes:watch

# Start a test runner for all tests
yarn test:watch

# You can use the name of the file at the end of any non-e2e test command to run it against a single file
yarn test $fileName

# Opens up a Cypress browser with which you can check e2e tests locally. Be sure the local dev server is running before this command!
yarn test:e2e

#Create all the necessary files/folders for a new, reusable component. Please make `ComponentName` TitleCase.
yarn create-component $ComponentName

#Create a new page in the pages directory.
yarn create-page $pageName
```

## Mocking Back-end Server API

We are using [Apiary.io](http://docs.operationcodeapi.apiary.io) for documentation. It also includes a Mocking Server so you don't have to stand up the whole back-end. You just need to hit the Mock API endpoints for whatever it is you're testing.

To use, navigate to http://docs.operationcodeapi.apiary.io.

Example use:

- You want to gather all CodeSchool Members. Click on `CodeSchool | Collection` on the left-hand side.
- Select `List All CodeSchool Members`. A form will populate.
- You can switch to an Example Code in the language of your choosing. More than likely it will be JavaScript on the front-end.
- In the drop-down menu, select `Mock Server` and click on `Try`. You will see a `GET` request with the mock endpoint url.
- You can now copy and paste that into your front-end to test your code.
- Don't forget to remove the mock endpoint url when committing your changes for production. Reset your values and select `Production` to get the correct endpoint url.

## Resources

- [Operation Code Backend API Endpoints](http://docs.operationcodeapi.apiary.io/#)
- [Getting started with Next.js](https://nextjs.org/learn)
- [Next.js docs](https://nextjs.org/docs#setup)
- [Storybook.js website](https://storybook.js.org)
- [Quickstart to writing Storybook Stories](https://storybook.js.org/basics/writing-stories)
- [Learn all about testing with Jest](https://jestjs.io/docs/en/getting-started)
- [React Lifecycle Methods - How And When To Use Them](https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1)
- [What Is Webpack?](https://survivejs.com/webpack/what-is-webpack/)
- [Routed React with Express.js and Docker](https://medium.com/@patriciolpezjuri/using-create-react-app-with-react-router-express-js-8fa658bf892d)
- [An introduction to Git: what it is, and how to use it](https://medium.freecodecamp.org/what-is-git-and-how-to-use-it-c341b049ae61)
- [How to use Git efficiently – freeCodeCamp.org](https://medium.freecodecamp.org/how-to-use-git-efficiently-54320a236369?source=linkShare-e41cd5edcdac-1535829065)
- [Our Best Practices for Writing React Components – Code == Life](https://engineering.musefind.com/our-best-practices-for-writing-react-components-dec3eb5c3fc8)

## Navigating Operating System Differences

### MacOS

<details>

#### Update Your Mac

If possible, we highly recommend updating to the latest version of MacOS.

- [Apple instructions to Upgrade MacOS](http://www.apple.com/macos/how-to-upgrade/)

If your machine has limitations on the operating system it can run, know that our development has been tested and works on **MacOSX Yosemite v10.10.5**. If you are utilizing an older version of MacOSX, we ask that you continue to progress through the tutorials and let us know if everything works out okay for you. We're interested in finding the oldest Mac Operating System required to develop on this project, but it is difficult to test.

Please file an issue to update this README.md if you use an older OS and were able to navigate installation instructions.

#### Xcode Command Line Tools

If you have xcode installed ensure that it is updated to the latest version through the app store. The full xcode package is not required for the command line tools.

Running the following in your terminal window should prompt you to install the xcode command line tools if you don't already have it installed.

```
gcc
```

You can verify installation with the command below, you should see similar output:

```
gcc --version
Configured with: --prefix=/Library/Developer/CommandLineTools/usr --with-gxx-include-dir=/usr/include/c++/4.2.1
Apple LLVM version 6.0 (clang-600.0.54) (based on LLVM 3.5svn)
Target: x86_64-apple-darwin14.0.0
Thread model: posix
```

- [A guide to installing xcode command line tools](http://railsapps.github.io/xcode-command-line-tools.html)

#### Homebrew

- [Homebrew website](https://brew.sh/)
- Paste the code below into a terminal window to install homebrew.

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

#### Git

The easiest way to install git is with homebrew.

```
brew install git
```

You can also install Github Desktop for the Graphical interface into github. There is no need to install the Command Line tools if you installed git with homebrew.

- [Github Desktop](https://desktop.github.com/)

#### NodeJS

You can install NodeJS a few different ways. The most sensible way to install Node would be with [Node Version Manager](https://github.com/creationix/nvm)(nvm), as you will likely work within multiple different projects that each run on varying versions of Node.

n is another project that manages node versions with possibly an easier install and less maintenance. -[n](https://github.com/tj/n)

The other option is to install the nodejs package from the official website. Simply select the latest LTS.

- [Nodejs Download Page](https://nodejs.org/en/download/)
  </details>

### Windows

<details>

#### Git

- Install the full version of [CMDER](http://cmder.net/). This is a versatile terminal that wraps bash-like commands around Command Prompt by using Git for Windows. You have many options for getting Git on Windows. We recommend using Git for Windows as it gives you a bash shell which can be very powerful and help you start to learn linux commands.

Install the LTS version [Node.js](https://nodejs.org/en/download/).

Follow the steps found in the [Quick Start Guide](https://github.com/OperationCode/operationcode_frontend/blob/master/CONTRIBUTING.md#quick-start-guide)

If you have any errors, make sure Node, npm, and Yarn is in your environment path by typing `PATH` in CMDER.
Look for any path like the ones listed below. `{USER}` is your username you used to login into the computer.

- `C:\Program Files\nodejs\`
- `C:\Program Files (x86)\Yarn\bin`
- `C:\Users\{USER}\AppData\Roaming\npm`
- `C:\Users\{USER}\AppData\Local\Yarn\bin`
- `C:\Program Files\Git\usr\bin`

To add them in your path, you can go to your Control Panel by clicking on the `Start` > type in: `Control Panel` > click on `System and Security` > click on `System` > on the left hand side, click on `Advanced System Settings` > near the bottom of the window, click on the `Environment Variables` and then under the `User variables for {USER}` click on the `Path` table and click on `Edit..`.

Now add those paths one at a time that are listed above into your user environment path if they are not already there. This is assuming you are installing in the default folders during the installation of the programs used on the front-end.

You can also install Github Desktop for a GUI Interface to Github. If you do this you don't want to install the Command Line tools, as CMDER and Git For Windows are more recent versions.

- [Github for Desktop](https://desktop.github.com/)

#### NodeJS

There are many ways and guides to install NodeJS on Windows. We recommend using [nvm-windows](https://github.com/coreybutler/nvm-windows).

The resources below are from Microsoft.

- [NodeJS On Windows Guidelines](https://github.com/Microsoft/nodejs-guidelines)
- [Configuring your Windows development environment for NodeJS](https://github.com/Microsoft/nodejs-guidelines/blob/master/windows-environment.md#configuring-your-windows-development-environment)

One way to install NodeJS for windows is to simply download and execute the MSI Package from the official downloads page.

- [Nodejs Download Page](https://nodejs.org/en/download/)

To test the installation open up a Command Prompt or Git Bash and enter the following commands:

```console
node --version
npm --version
```

If your installation was successful you will get the versions of node and npm that were installed.

</details>
