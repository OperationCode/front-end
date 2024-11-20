/// <reference types="cypress" />
import '@testing-library/cypress/add-commands';
import existingUser from '../../test-utils/mocks/existingUser';
import { apiUrl } from '../../common/config/environment';

Cypress.Commands.add('visitAndWaitFor', path => {
  cy.visit(path);
  cy.findByTestId('Desktop Nav').should('exist').and('be.visible');
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

/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace Cypress {
    interface Chainable {
      /** Visit a page safely by validating the URL only after a layout-specific test ID has been found. */
      visitAndWaitFor(path: string): void;

      /** Login with a predefined user */
      login(): void;

      /** Check a custom data attribute */
      checkCustomDataAttribute(attribute: string, value: string): void;

      /** Find a select input by its label */
      findSelectByLabelText(label: string, options?: { edit?: boolean }): void;
    }
  }
}
