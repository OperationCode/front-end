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
import '@testing-library/cypress/add-commands';
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
import existingUser from '../../test-utils/mocks/existingUser';
import { apiUrl } from '../../common/config/environment';

Cypress.Commands.add('visitAndWaitFor', path => {
  cy.visit(path);
  cy.findByTestId('Desktop Nav').should('exist');
  cy.findByTestId('Desktop Nav').should('be.visible');
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
  }).then(({ body: { token } }) => {
    cy.setCookie('token', token);
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

Cypress.Commands.add('checkCustomDataAttribute', (attribute, value) => {
  const attributeWithoutBrackets = attribute.replace(/[[\]]/g, '');

  cy.get(attribute).invoke('attr', attributeWithoutBrackets).should('contain', value);
});

Cypress.Commands.add('findSelectByLabelText', (label, options = {}) => {
  cy.findByText(label)
    .invoke('attr', 'for')
    .then(name => {
      if (options.edit) {
        cy.get(`input#react-select-${name}-input`);
      } else {
        cy.get(`input[name="${name}"]`);
      }
    });
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
