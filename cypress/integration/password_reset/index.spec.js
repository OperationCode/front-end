import existingUser from 'test-utils/mocks/existingUser';
import { validationErrorMessages } from 'common/constants/messages';

describe('reset_password', () => {
  beforeEach(() => {
    cy.server();
    cy.route('POST', 'auth/password/reset/').as('postReset');
    cy.clearCookies();
    cy.visit('/password_reset');
    cy.getCookies().should('have.length', 0);
    cy.get('h1').should('have.text', 'Reset Password');
  });

  it('should be able to submit a request with a valid email', () => {
    cy.get('input#email').type(existingUser.email);
    cy.get('button[type="submit"]').click();

    cy.wait('@postReset');

    cy.get('div[role="alert"]').should(
      'have.text',
      'A confirmation has been sent to the provided email address.',
    );
  });

  it('should show the same message for an invalid email', () => {
    cy.get('input#email').type('fake@test.test');
    cy.get('button[type="submit"]').click();

    cy.wait('@postReset');

    cy.get('div[role="alert"]').should(
      'have.text',
      'A confirmation has been sent to the provided email address.',
    );
  });

  it('should NOT submit a request with an invalid email', () => {
    cy.get('input#email').type('notEmail');
    cy.get('button[type="submit"]').click();
    cy.get('div[role="alert"]').should('contain', validationErrorMessages.email);
  });
});
