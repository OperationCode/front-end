## Explanations

### What is the front-end?

When you visit our website you're interacting with two systems, a front-end application and a back-end API. The front-end application is responsible for displaying the "User Interface" - images, text, animations... everything you interact with visually or physically on our web page. Front-end applications are usually written using a combination of HTML, CSS, and JavaScript and utilize one or more frameworks such as [Angular](https://angular.io/), [Vue](https://vuejs.org/), and [React](https://reactjs.org/). We use React.

> "front-end" is synonymous with client, client-side, "the view", and "the UI".

### What is the back-end?

The back-end is responsible for providing data for the front-end to display. This sometimes involves processing the data entered into the front-end, and running various jobs like inviting new users to Slack, or signing them up for our newsletter. Our back-end is written in Rails and it's sourcecode can be viewed [here](https://github.com/OperationCode/operationcode_backend). It acts primarily as a REST API.

> "back-end" is synonymous with server, server-side, and "models & controllers"

### What is REST? What's an API?

[What is REST?](https://www.codecademy.com/articles/what-is-rest)
[What is an API?](https://medium.freecodecamp.org/what-is-an-api-in-english-please-b880a3214a82)

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

## Development workflow with explanations

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
