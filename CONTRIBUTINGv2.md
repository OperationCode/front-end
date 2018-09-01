# OperationCode Frontend
This is OperationCode.org's repository for their new front-end implementation using React.js

Before contributing, please review our [GitHub Workflow](#github-workflow).

## Table Of Contents
- [Quick-Start Guide](#quick-start-guide)
- [Technologies](#technologies)
  - [Yarn](#resources)
  - [Next.js](#resources)
  - [Storybook](#resources)
  - [Jest](resources)
- [Getting Started (For Newbies)](#getting-started)
  - [Brush up on Development Tools](#brush-up-on-development-tools)
    - [Git and basic Command Line](#git-and-basic-command-line)
    - [NodeJS](#nodejs)
  - [Development Environment](#development-environment)
  - [MacOS](#macos)
    - [Update your mac](#update-your-mac)
    - [Xcode Command Line Tools](#xcode-command-line-tools)
    - [Homebrew](#homebrew)
    - [Git](#git)
    - [NodeJS](#nodejs-1)
  - [Windows](#windows)
    - [Git](#git-1)
    - [NodeJS](#nodejs-2)
  - [Developing Operation Code Frontend](#developing-operation-code-frontend)
    - [File Structure](#file-structure)
    - Kyle needs to suggest what to add with regards to Storybook since he is the master
      - [Components](#components)
    - [Running the development Environment](#running-the-development-environment)
      - [Development Workflow with Explanations](#development-workflow-with-explanations)
  - [Production Builds](#production-builds)
    - [Static Site](#static-site)
    - [Docker Container](#docker-container)
- [Resources](#resources)
- [Contribute](#contribute)
- [License](#license)

## Quick Start Guide

First off, thank you for considering contributing to our project! It's people like you that make Operation Code such a great community.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue, assessing changes, and helping you finalize your pull requests.

We're an open source project and we love to receive contributions from our community — you! There are many ways to contribute, from writing tutorials or blog posts, improving the documentation, submitting bug reports and feature requests or writing code which can be incorporated into the website itself.

With an open source project involving contributors of varying levels of experience, it's difficult to create a one-size-fits-all guide. However, if if you feel confident with navigating your command line interface (CLI), please follow these step-by-step instructions. Please note: most of the following instructions are not relevant to many Windows users - you'll need to research the equivalent of each command knowing what terminal you use on your Windows platform.

If you're unfamiliar with any of the instructions, you can navigate the [rest of this guide](#technologies) to figure out the relevant technology and potential environment issues. <b>If an instruction begins with "Run ...", that means to type the text in place of ... within your CLI.</b>

Lastly, if you run into any problems with the following instructions, please try to communicate with us on Slack. You can get an invite to our Slack channel by [requesting to join Operation Code](https://operationcode.org/join). Once in our Slack team, simply type: `/open #oc-projects` and then click enter. Feel free to ask for help; everyone is a beginner at first :smile_cat:

### GitHub Workflow

1. Before working on an issue, post a comment on the issue asking to claim it.  One of our maintainers will assign themselves as a placeholder on the issue, at which point you are good to start working on it.

2. Fork the Operation Code Frontend repo. Create a feature branch on your forked repo for the issue you are working on, and commit your work to that branch.
3. Submit a pull request within two weeks of claiming the issue.
4. Please do not ask to claim an issue or submit pull requests for an issue that someone else is currently assigned to.

#### Forking and Cloning this repository

1. Click on the 'Fork' button on the top right corner of the page. You'll have your own copy of the repository available on your Github account.
2. Go to the forked repository page on your Github account.
3. Click on the green 'Clone or download' button and copy the link.
Your link will look like `https://github.com/<your_username>/front-end.git`.
(Use the HTTPS link. Click [here](https://help.github.com/articles/which-remote-url-should-i-use/) for more info).
4. Open a terminal on your system and move to the directory wherein you would like to clone the repository
5. Run `git clone https://github.com/<your_username>/front-end.git`. You'll now have a local copy of the repository.
6. `cd` into to the repository.
7. Run `git remote add upstream https://github.com/OperationCode/front-end.git`.
**Note:** You may replace 'upstream' with any nickname you'd like to give to the original repository.
Run `git remote -v` to check if both the repositories are listed.

If added correctly your terminal window should resemble the code block below:

```sh
origin https://github.com/<yourusername>/front-end.git (fetch)
origin https://github.com/<yourusername>/front-end.git (push)

upstream https://github.com/OperationCode/front-end.git (fetch)
upstream https://github.com/OperationCode/front-end.git (push)

```

#### Initial Install

Recommended versions of tools used within the repo:

- `node@8.11.3`
- `yarn@1.7.0` or greater
- `git@2.17.1` or greater

1. Run `node -v`. If you do not have version 6 or greater, go to [nodejs.org](https://nodejs.org) and install the latest stable build.  We recommend using the LTS version as it currently stands at `8.11.3`
2. Run `npm -v`. If you do not have version 4 or greater, run `npm install -g npm`
3. Run `yarn --version`. If you do not have version 1.7.0 or greater, run `npm install --global yarn`.
4. [Fork and clone](#forking-and-cloning-this-repository) the repository.
5. Move into the repository
6. Run `yarn` to install all necessary packages and dependencies

#### Addressing An Issue

Every time you want to resolve an issue, you'll need to create a branch, code there, and then submit a pull request (PR) for review. Assuming you're already in the /front-end directory...

1. Run `git checkout -b "Name-of-branch-relevant-to-issue"`
2. Run `yarn start` and now your development environment will load. Happy coding!

When finished, [create a PR on GitHub](https://help.github.com/articles/creating-a-pull-request/).

#### Returning To Work After A Break
Some issues take awhile to code a solution for. Just because you're working on an issue doesn't mean everybody puts their work on hold for you! You'll want to continually rebase your branch to ensure that your PR will have a seamless merge. Assuming you're ready to code again and you're already in the /operationcode_frontend directory...

1. [Keep your fork in sync with Operation Code's master branch.](https://help.github.com/articles/syncing-a-fork/)
2. Run `yarn` to install any updated dependencies
3. Run `yarn dev` to start local development environment

## Technologies
Here is a breakdown and summary of the main technologies our project utilizes:

- [NodeJS](https://www.nodejs.org/) - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. React utilizes a tiny Node/Express server for it's development environment.
- [React.js](https://facebook.github.io/react/) - Facebook's popular JavaScript front-end framework.
- [Storybook]() - info about storybook here
- [Next.js]() - info about Next.js here
- [Create-React-App](https://github.com/facebookincubator/create-react-app) - Create React App was initially used to handle boilerplate. We have since ejected and customized some of the scripts. //deprecated info????
- [Babel](https://babeljs.io/) - JavaScript compiler to unify all the different versions of JS that may have been used or will be used in the future. [Here's a blog post from Scotch.io on why JavaScript utilizes "transpiling" with Babel](https://scotch.io/tutorials/javascript-transpilers-what-they-are-why-we-need-them).
- [Yarn](https://yarnpkg.com/) - Facebook's open source JavaScript package manager. When NPM updated to version 5, it cut down on many its differences. Yarn is virtually identical to NPM, but it's still faster in installing dependencies - so we still recommend its usage.
- [CSS Modules](https://css-tricks.com/css-modules-part-1-need/) - CSS Modules allow us to encapsulate CSS within components. Instead of HTML/CSS - our project structure is basically JSX/CSS.


## Getting Started

### Brush up on Development Tools

#### Git and basic Command Line
You will be working with Git and Github to manage source code.  Understanding the basics and how to set things up will be helpful.
- [Learn about Git and Github](https://help.github.com/articles/git-and-github-learning-resources/)
- [Github for windows](https://mva.microsoft.com/en-US/training-courses/github-for-windows-users-16749?l=KTNeW39wC_6006218965)
- [Github Command Line Training](https://services.github.com/on-demand/github-cli)

Getting comfortable with the Bash Shell will be helpful for both Windows and Mac.  You may also want to learn about the Windows Command Prompt if you are using Windows.

- For Mac or Linux - [Learn console commands](https://learnpythonthehardway.org/book/appendixa.html)
- For Windows - [Learn Windows Command Prompt](https://www.youtube.com/watch?v=MBBWVgE0ewk)

#### NodeJS
The OperationCode front end runs on NodeJS.  Learning the basics of NodeJS will be helpful.

- [NodeJS Tutorial](https://www.tutorialspoint.com/nodejs/)

### Development Environment

You will need a few technologies installed in order to build and run this application.  The installation of these is not always straightforward, but we will do our best to guide you through the process.

The installation will depend on which operating system you are running.

### MacOS
#### Update your Mac
If possible, we highly recommend updating to the latest version of MacOS.
- [Apple instructions to Upgrade MacOS](http://www.apple.com/macos/how-to-upgrade/)

If your machine has limitations on the operating system it can run, know that our development has been tested and works on <b>MacOSX Yosemite v10.10.5</b>. If you are utilizing an older version of MacOSX, we ask that you continue to progress through the tutorials and let us know if everything works out okay for you. We're interested in finding the oldest Mac Operating System required to develop on this project, but it is difficult to test.

Please file an issue to update this README.md if you use an older OS and were able to navigate installation instructions.

#### Xcode Command Line Tools
If you have xcode installed ensure that it is updated to the latest version through the app store.  The full xcode package is not required for the command line tools.

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

You can also install Github Desktop for the Graphical interface into github.  There is no need to install the Command Line tools if you installed git with homebrew.
- [Github Desktop](https://desktop.github.com/)

#### NodeJS
You can install NodeJS a few different ways.  Again, the easiest way to install it is with homebrew. We're going to install version 8 which is the latest, stable build at the time of typing these instructions:
```
brew install node@8
```

Another option is to install Node Version Manager, this is helpful if you need to use multiple versions of node for different projects.
- [Node Version Manager](https://github.com/creationix/nvm)

n is another project that manages node versions with possibly an easier install and less maintenance.
-[n](https://github.com/tj/n)

The other option is to install the nodejs package from the official website
- [Nodejs Download Page](https://nodejs.org/en/download/)

### Windows
#### Git
- Install the full version of [CMDER](http://cmder.net/). This is a versatile terminal that wraps bash-like commands around Command Prompt by using Git for Windows. You have many options for getting Git on Windows.  We recommend using Git for Windows as it gives you a bash shell which can be very powerful and help you start to learn linux commands.

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

You can also install Github Desktop for a GUI Interface to Github.  If you do this you don't want to install the Command Line tools, as CMDER and Git For Windows are more recent versions.

- [Github for Desktop](https://desktop.github.com/)

#### NodeJS
There are many ways and guides to install NodeJS on Windows.  The resources below are from Microsoft.
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

### Developing Operation Code Frontend
#### File Structure

```
├── common
|   |-- components
|   |-- config
|   |-- constants
|   |-- styles
|   |-- utils
├── components
|   |-- ErrorDisplay
|   |-- ReusableSections
|   |-- Single-Purpose
|   |-- SocialLogin
|   |-- SocialMedia
|   |-- head.js
|   |-- nav.js
├── pages
|   |-- styles
|   |-- _app.js
|   |-- _document.js
|   |-- _error.js
|   |-- about.js
|   |-- index.js
├── static
|   |-- fonts
|   |-- images
├── test-utils
|   |-- mocks
|   |-- createComponentInstance.js
|   |-- createShallowSnapshotTest.js
|   |-- createSnapshotTest.js
|   |-- setupTests.js
|-- CODE_OF_CONDUCT
|-- CONTRIBUTING.MD
|-- Dockerfile
|-- LICENSE
|-- MAINTAINERS.MD
|-- README.MD
|-- jest.config.js
|-- jest.setup.js
|-- jsconfig.json
|-- next.config.js
|-- now.json
|-- now.master.json
|-- package.json
|-- postcss.config.js
└── yarn.lock
```

#### Running the development environment
Now that you understand the technology and project structure, feel free to direct yourself to the [Quick-Start Guide](#quick-start-guide).

#### Development workflow with explanations

```sh
# Install dependencies
yarn

# Run local development on localhost:3000
yarn dev

# Use Storybook when developing new common components or to see what lego blocks you have available, open on localhost:9001
yarn storybook

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


#### Docker Container //deprecated??
- `docker-compose up -d --build` - Builds and starts the Docker Container listening port 80.

## Resources
- [Storybook.js website](https://storybook.js.org)
- [Quickstart to writing Storybook Stories](https://storybook.js.org/basics/writing-stories)
- [Getting started with Next.js](https://nextjs.org/learn)
- [Next.js docs](https://nextjs.org/docs#setup)
- [Learn all about testing with Jest](https://jestjs.io/docs/en/getting-started)
- [Operation Code Backend API Endpoints](http://docs.operationcodeapi.apiary.io/#)
- [What Is Webpack?](https://survivejs.com/webpack/what-is-webpack/)
- [Routed React with Express.js and Docker](https://medium.com/@patriciolpezjuri/using-create-react-app-with-react-router-express-js-8fa658bf892d)
- [React Lifecycle Methods - How And When To Use Them](https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1)

## Contribute
[Operation Code Contribution Guide](https://github.com/OperationCode/START_HERE)

## License
[MIT](LICENSE) © OperationCode

