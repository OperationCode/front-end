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

Cypress.Commands.add('visitAndWaitFor', path => {
  cy.visit(path);
  cy.wait(3000); // eslint-disable-line cypress/no-unnecessary-waiting
  cy.url().should('contain', path);
});

addMatchImageSnapshotCommand({
  failureThreshold: 0.03,
  failureThresholdType: 'percent',
  customDiffConfig: { threshold: 0.1 },
  capture: 'fullPage',
});

Cypress.Commands.add('setResolution', size => {
  if (Cypress._.isArray(size)) {
    cy.viewport(size[0], size[1]);
  } else {
    cy.viewport(size);
  }
});

Cypress.Commands.add('createVisualRegressionTests', () => {
  cy.get('[data-testid="Not Mobile Nav"'); // wait for resize listener
  cy.matchImageSnapshot('desktop');

  cy.viewport('iphone-6');
  cy.get('[data-testid="Mobile Nav"'); // wait for resize listener to respond to viewport change
  cy.matchImageSnapshot('mobile');

  // Match these up with config in cypress.json
  cy.viewport(1600, 1200);
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
