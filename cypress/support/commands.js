// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
import existingUser from '../../test-utils/mocks/existingUser';
import { apiUrl } from '../../common/config/environment';
import { userInfoCookieNames } from '../../common/utils/cookie-utils';

Cypress.Commands.add('visitAndWaitFor', path => {
  cy.visit(path);
  cy.wait(3000); // eslint-disable-line cypress/no-unnecessary-waiting
  cy.url().should('contain', path);
});

// Use `cy.login()` to quickly login for testing authenticated routes
Cypress.Commands.add('login', () => {
  cy.request({
    method: 'POST',
    url: `${apiUrl}/auth/login/`,
    body: {
      ...existingUser,
    },
  }).then(({ body: { token, user } }) => {
    cy.setCookie('token', token);
    userInfoCookieNames.forEach(cookieName => cy.setCookie(cookieName, `${user[cookieName]}`));
  });
});

addMatchImageSnapshotCommand({
  failureThreshold: 0.03,
  failureThresholdType: 'percent',
  customDiffConfig: { threshold: 0.1 },
  capture: 'viewport',
});

Cypress.Commands.add('setResolution', size => {
  if (Cypress._.isArray(size)) {
    cy.viewport(size[0], size[1]);
  } else {
    cy.viewport(size);
  }
});

//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
