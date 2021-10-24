import { token, uid } from 'test-utils/mocks/passwordResetMock';
import existingUser from 'test-utils/mocks/existingUser';
import { validationErrorMessages } from 'common/constants/messages';
import { ALERT, CHANGE_PASSWORD_FORM_ERROR, INPUT_ERROR } from 'common/constants/testIDs';

describe('reset_password_confirm', () => {
  beforeEach(() => {
    cy.server();
    cy.route('POST', 'auth/password/reset/confirm').as('postReset');

    cy.clearCookies();
  });

  it("should show an error message if query string params aren't provided", () => {
    cy.visit('/password_reset/confirm');
    cy.get('h1').should('have.text', 'Enter new password');

    cy.findByTestId(ALERT).should(
      'have.text',
      'The provided credentials were either invalid or expired.',
    );
  });

  it('should show rest password form when provided query params', () => {
    cy.visit(`/password_reset/confirm?uid=${uid}&token=${token}`);
    cy.findByLabelText('Password*');
    cy.findByLabelText('Confirm Password*');
  });

  it('should be able to reset with valid passwords', () => {
    cy.server();
    cy.route('POST', 'auth/password/reset/confirm/', {
      detail: 'Password has been reset with the new password.',
    }).as('postResetSuccess');

    cy.visit(`/password_reset/confirm?uid=${uid}&token=${token}`);

    cy.findByLabelText('Password*').type(existingUser.password);
    cy.findByLabelText('Confirm Password*').type(existingUser.password);

    cy.findByText('Submit').click();

    cy.findByText(/You password has been reset with the new password./i);
    cy.get('a[href="/login"]').should('contain', 'Click here to Login');
  });

  it('should NOT be able to reset with mis-matched passwords', () => {
    cy.visit(`/password_reset/confirm?uid=${uid}&token=${token}`);

    cy.findByLabelText('Password*').type(existingUser.password);
    cy.findByLabelText('Confirm Password*').type(`${existingUser.password}1`);
    cy.findByText('Submit').click();

    cy.findByTestId(INPUT_ERROR).should('contain', validationErrorMessages.passwordsMatch);
  });

  it('should NOT be able to change password with expired or invalid token', () => {
    cy.visit(`/password_reset/confirm?uid=${uid}&token=${token}`);
    cy.findByLabelText('Password*').type(existingUser.password);
    cy.findByLabelText('Confirm Password*').type(existingUser.password);

    cy.findByText('Submit').click();

    cy.findByTestId(CHANGE_PASSWORD_FORM_ERROR).should(
      'have.text',
      'Could not reset password.  Reset token expired or invalid.',
    );
  });
});
