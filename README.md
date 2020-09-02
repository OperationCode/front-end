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
[![Test Coverage](https://api.codeclimate.com/v1/badges/5010b82ce5d8e319a597/test_coverage)](https://codeclimate.com/github/OperationCode/front-end/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/5010b82ce5d8e319a597/maintainability)](https://codeclimate.com/github/OperationCode/front-end/maintainability)
[![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://cypress.io)

[See unblocked, unassigned issues](https://github.com/OperationCode/front-end/issues?q=is%3Aopen+is%3Aissue+-label%3A%22Status%3A+Blocked%22+no%3Aassignee). We love our labels - feel free to filter issues to find what you want to work on.

# Welcome!

This is the front-end application for [OperationCode](https://operationcode.org). We highly recommend [joining our organization](https://operationcode.org/join) to receive an invite to our Slack team. From there, you'll want to join the `#oc-projects` channel. You can get help from multiple professional developers, including people who have worked on the application since day 1!

Before contributing, please review our [Contributing Guide](CONTRIBUTING.md)

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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://kylemh.com"><img src="https://avatars1.githubusercontent.com/u/9523719?v=4" width="100px;" alt=""/><br /><sub><b>Kyle Holmberg</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=kylemh" title="Code">💻</a> <a href="https://github.com/OperationCode/front-end/commits?author=kylemh" title="Tests">⚠️</a> <a href="#maintenance-kylemh" title="Maintenance">🚧</a> <a href="#ideas-kylemh" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/OperationCode/front-end/commits?author=kylemh" title="Documentation">📖</a> <a href="#question-kylemh" title="Answering Questions">💬</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/allen-anthes/"><img src="https://avatars1.githubusercontent.com/u/27715246?v=4" width="100px;" alt=""/><br /><sub><b>Allen Anthes</b></sub></a><br /><a href="#infra-AllenAnthes" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-AllenAnthes" title="Maintenance">🚧</a> <a href="#ideas-AllenAnthes" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/OperationCode/front-end/commits?author=AllenAnthes" title="Code">💻</a> <a href="#question-AllenAnthes" title="Answering Questions">💬</a></td>
    <td align="center"><a href="https://github.com/wimo7083"><img src="https://avatars2.githubusercontent.com/u/10781353?v=4" width="100px;" alt=""/><br /><sub><b>William Montgomery</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=wimo7083" title="Code">💻</a> <a href="https://github.com/OperationCode/front-end/pulls?q=is%3Apr+reviewed-by%3Awimo7083" title="Reviewed Pull Requests">👀</a> <a href="#ideas-wimo7083" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-wimo7083" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-wimo7083" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://juliantrueflynn.com"><img src="https://avatars2.githubusercontent.com/u/2691129?v=4" width="100px;" alt=""/><br /><sub><b>Julian True Flynn</b></sub></a><br /><a href="#maintenance-juliantrueflynn" title="Maintenance">🚧</a> <a href="#ideas-juliantrueflynn" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/OperationCode/front-end/commits?author=juliantrueflynn" title="Code">💻</a> <a href="#question-juliantrueflynn" title="Answering Questions">💬</a></td>
    <td align="center"><a href="https://github.com/jmayergit"><img src="https://avatars2.githubusercontent.com/u/8594272?v=4" width="100px;" alt=""/><br /><sub><b>Julien Mayer</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=jmayergit" title="Code">💻</a> <a href="https://github.com/OperationCode/front-end/commits?author=jmayergit" title="Tests">⚠️</a> <a href="#ideas-jmayergit" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="http://schulz.codes"><img src="https://avatars3.githubusercontent.com/u/3123354?v=4" width="100px;" alt=""/><br /><sub><b>Daniel Schulz</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=takethefake" title="Code">💻</a> <a href="#ideas-takethefake" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-takethefake" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="https://sethbergman.tech"><img src="https://avatars3.githubusercontent.com/u/8031689?v=4" width="100px;" alt=""/><br /><sub><b>Seth Bergman</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=sethbergman" title="Code">💻</a> <a href="https://github.com/OperationCode/front-end/pulls?q=is%3Apr+reviewed-by%3Asethbergman" title="Reviewed Pull Requests">👀</a> <a href="#ideas-sethbergman" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://nicyoung.io"><img src="https://avatars0.githubusercontent.com/u/1323750?v=4" width="100px;" alt=""/><br /><sub><b>Nic Young</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=nryoung" title="Code">💻</a> <a href="https://github.com/OperationCode/front-end/pulls?q=is%3Apr+reviewed-by%3Anryoung" title="Reviewed Pull Requests">👀</a> <a href="#ideas-nryoung" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/KrDimitrov"><img src="https://avatars3.githubusercontent.com/u/29924708?v=4" width="100px;" alt=""/><br /><sub><b>Kristiyan Dimitrov</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=KrDimitrov" title="Code">💻</a> <a href="#maintenance-KrDimitrov" title="Maintenance">🚧</a> <a href="https://github.com/OperationCode/front-end/commits?author=KrDimitrov" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/AshTemp"><img src="https://avatars0.githubusercontent.com/u/19790104?v=4" width="100px;" alt=""/><br /><sub><b>Ashley Templet</b></sub></a><br /><a href="#ideas-AshTemp" title="Ideas, Planning, & Feedback">🤔</a> <a href="#projectManagement-AshTemp" title="Project Management">📆</a> <a href="#business-AshTemp" title="Business development">💼</a></td>
    <td align="center"><a href="https://github.com/markchernov"><img src="https://avatars1.githubusercontent.com/u/16090885?v=4" width="100px;" alt=""/><br /><sub><b>Mark Chernov</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=markchernov" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/tigclaw"><img src="https://avatars0.githubusercontent.com/u/6943858?v=4" width="100px;" alt=""/><br /><sub><b>Angela Lin</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=tigclaw" title="Code">💻</a></td>
    <td align="center"><a href="https://chrismgonzalez.com"><img src="https://avatars3.githubusercontent.com/u/10368310?v=4" width="100px;" alt=""/><br /><sub><b>Chris Gonzalez</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=chrismgonzalez" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/clsoar"><img src="https://avatars2.githubusercontent.com/u/28604435?v=4" width="100px;" alt=""/><br /><sub><b>CL Mason</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=clsoar" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/JohnGoure"><img src="https://avatars3.githubusercontent.com/u/8660448?v=4" width="100px;" alt=""/><br /><sub><b>John Goure</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=JohnGoure" title="Code">💻</a></td>
    <td align="center"><a href="http://dirtyredz.com"><img src="https://avatars0.githubusercontent.com/u/7119499?v=4" width="100px;" alt=""/><br /><sub><b>David McClain &#124; Dirtyredz</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=dirtyredz" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/PeterEckIII"><img src="https://avatars1.githubusercontent.com/u/35156163?v=4" width="100px;" alt=""/><br /><sub><b>Peter Eck</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=PeterEckIII" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/RaevLogic"><img src="https://avatars2.githubusercontent.com/u/38801291?v=4" width="100px;" alt=""/><br /><sub><b>Roger Keith</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=RaevLogic" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/chrisgalvan"><img src="https://avatars3.githubusercontent.com/u/1694600?v=4" width="100px;" alt=""/><br /><sub><b>Chris Galvan</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=chrisgalvan" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/jfie5"><img src="https://avatars2.githubusercontent.com/u/2934166?v=4" width="100px;" alt=""/><br /><sub><b>Jacob Fielding</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=jfie5" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/dayvod"><img src="https://avatars0.githubusercontent.com/u/28246170?v=4" width="100px;" alt=""/><br /><sub><b>David</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=dayvod" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/sumitparakh"><img src="https://avatars2.githubusercontent.com/u/4236211?v=4" width="100px;" alt=""/><br /><sub><b>Sumit Parakh</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=sumitparakh" title="Code">💻</a></td>
    <td align="center"><a href="http://www.macleodwebdev.com"><img src="https://avatars0.githubusercontent.com/u/28678836?v=4" width="100px;" alt=""/><br /><sub><b>K MacLeod</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=ksmacleod99" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/marciojcoelho"><img src="https://avatars3.githubusercontent.com/u/8591171?v=4" width="100px;" alt=""/><br /><sub><b>marciojcoelho</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=marciojcoelho" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/dtmle"><img src="https://avatars2.githubusercontent.com/u/35821286?v=4" width="100px;" alt=""/><br /><sub><b>dennis</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=dtmle" title="Code">💻</a></td>
    <td align="center"><a href="http://sagarwal.xyz"><img src="https://avatars0.githubusercontent.com/u/4496335?v=4" width="100px;" alt=""/><br /><sub><b>Shobhit</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=Shobhit1" title="Code">💻</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/ryostpmp/"><img src="https://avatars3.githubusercontent.com/u/35543580?v=4" width="100px;" alt=""/><br /><sub><b>Rick</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=rlyost" title="Code">💻</a></td>
    <td align="center"><a href="http://jimulle.com"><img src="https://avatars3.githubusercontent.com/u/2433183?v=4" width="100px;" alt=""/><br /><sub><b>Jim</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=jimulle" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://soris-codes.github.io"><img src="https://avatars1.githubusercontent.com/u/37656842?v=4" width="100px;" alt=""/><br /><sub><b>Soris Cox</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=soris-codes" title="Code">💻</a></td>
    <td align="center"><a href="https://www.thedyslexicdeveloper.com/"><img src="https://avatars0.githubusercontent.com/u/495517?v=4" width="100px;" alt=""/><br /><sub><b>Chris Laughlin</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=chrislaughlin" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/ecaoile"><img src="https://avatars3.githubusercontent.com/u/34725510?v=4" width="100px;" alt=""/><br /><sub><b>Earl Jay</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=ecaoile" title="Code">💻</a></td>
    <td align="center"><a href="https://goo.gl/2ppEbW"><img src="https://avatars2.githubusercontent.com/u/16615147?v=4" width="100px;" alt=""/><br /><sub><b>Alexander Nelson</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=AlexanderNelson" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/kanitsharma"><img src="https://avatars2.githubusercontent.com/u/23506120?v=4" width="100px;" alt=""/><br /><sub><b>Kanit Sharma</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=kanitsharma" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/aasifkhan7"><img src="https://avatars0.githubusercontent.com/u/25710869?v=4" width="100px;" alt=""/><br /><sub><b>aasifkhan7</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=aasifkhan7" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/babu-thomas"><img src="https://avatars0.githubusercontent.com/u/13412867?v=4" width="100px;" alt=""/><br /><sub><b>Babu Thomas</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=babu-thomas" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/dwbledsoe"><img src="https://avatars2.githubusercontent.com/u/47822368?v=4" width="100px;" alt=""/><br /><sub><b>David Bledsoe</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=dwbledsoe" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/eharris99"><img src="https://avatars2.githubusercontent.com/u/8528157?v=4" width="100px;" alt=""/><br /><sub><b>eharris99</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=eharris99" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/iTechsTR"><img src="https://avatars1.githubusercontent.com/u/33372714?v=4" width="100px;" alt=""/><br /><sub><b>Erdem Efe Erol</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=iTechsTR" title="Code">💻</a></td>
    <td align="center"><a href="https://ivanmartinez.codes/"><img src="https://avatars2.githubusercontent.com/u/35318080?v=4" width="100px;" alt=""/><br /><sub><b>Ivan Martinez Morales</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=ivanmartinezmorales" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/joshcallahan"><img src="https://avatars2.githubusercontent.com/u/33660604?v=4" width="100px;" alt=""/><br /><sub><b>Josh Callahan</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=joshcallahan" title="Code">💻</a></td>
    <td align="center"><a href="http://www.josiahdahl.com"><img src="https://avatars1.githubusercontent.com/u/5520415?v=4" width="100px;" alt=""/><br /><sub><b>Josiah Dahl</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=josiahdahl" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/KPGunner"><img src="https://avatars0.githubusercontent.com/u/31373828?v=4" width="100px;" alt=""/><br /><sub><b>Kyle Gunn</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=KPGunner" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/rsupak"><img src="https://avatars0.githubusercontent.com/u/28311826?v=4" width="100px;" alt=""/><br /><sub><b>Richard Supak</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=rsupak" title="Code">💻</a></td>
    <td align="center"><a href="https://codepen.io/TomerBenRachel/"><img src="https://avatars2.githubusercontent.com/u/23402988?v=4" width="100px;" alt=""/><br /><sub><b>Tomer Ben-Rachel</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=TomerPacific" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/dayvodddddddddddd"><img src="https://avatars2.githubusercontent.com/u/7948164?v=4" width="100px;" alt=""/><br /><sub><b>David Yearwood</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=dayvodddddddddddd" title="Code">💻</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/timothyquirk/"><img src="https://avatars1.githubusercontent.com/u/44677020?v=4" width="100px;" alt=""/><br /><sub><b>Timothy Quirk</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=tfquirk" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/danielasannino"><img src="https://avatars2.githubusercontent.com/u/24445651?v=4" width="100px;" alt=""/><br /><sub><b>danielasannino</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=danielasannino" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/cbituin"><img src="https://avatars2.githubusercontent.com/u/38743840?v=4" width="100px;" alt=""/><br /><sub><b>Conrad Bituin</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=cbituin" title="Code">💻</a></td>
    <td align="center"><a href="http://www.linkedin.com/in/tunmise-profile"><img src="https://avatars0.githubusercontent.com/u/26048536?v=4" width="100px;" alt=""/><br /><sub><b>Tunmise Ogunniyi</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=IAMOTZ" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://wpwebdev360.wordpress.com/about/portfolio-1/"><img src="https://avatars0.githubusercontent.com/u/36063669?v=4" width="100px;" alt=""/><br /><sub><b>Calin</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=calincionca35" title="Code">💻</a></td>
    <td align="center"><a href="http://jeffreyseneff.com"><img src="https://avatars1.githubusercontent.com/u/22498613?v=4" width="100px;" alt=""/><br /><sub><b>Jeffrey Seneff</b></sub></a><br /><a href="https://github.com/OperationCode/front-end/commits?author=jeffsnff" title="Code">💻</a> <a href="#design-jeffsnff" title="Design">🎨</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
