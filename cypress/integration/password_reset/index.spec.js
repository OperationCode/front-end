import existingUser from 'test-utils/mocks/existingUser';
import { validationErrorMessages } from 'common/constants/messages';
import { ALERT } from 'common/constants/testIDs';

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
    cy.findByLabelText('Email*').type(existingUser.email);
    cy.findByText('Submit').click();

    cy.findByTestId(ALERT).should(
      'have.text',
      'A confirmation has been sent to the provided email address.',
    );
  });

  it('should show the same message for an invalid email', () => {
    cy.findByLabelText('Email*').type('fake@test.test');
    cy.findByText('Submit').click();

    cy.findByTestId(ALERT).should(
      'have.text',
      'A confirmation has been sent to the provided email address.',
    );
  });

  it('should NOT submit a request with an invalid email', () => {
    cy.findByLabelText('Email*').type('notEmail');
    cy.findByText('Submit').click();
    cy.findByTestId(ALERT).should('contain', validationErrorMessages.email);
  });
});
