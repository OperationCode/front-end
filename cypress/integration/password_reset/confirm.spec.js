import { token, uid } from '../../../test-utils/mocks/passwordResetMock';
import existingUser from '../../../test-utils/mocks/existingUser';
import { validationErrorMessages } from '../../../common/constants/messages';

describe('reset_password_confirm', () => {
  beforeEach(() => {
    cy.server();
    cy.route('POST', 'auth/password/reset/confirm').as('postReset');

    cy.clearCookies();
  });

  it("should show an error message if query string params aren't provided", () => {
    cy.visit('/password_reset/confirm');
    cy.get('h1').should('have.text', 'Enter new password');

    cy.get('div[role="alert"]').should(
      'have.text',
      'The provided credentials were either invalid or expired.',
    );
  });

  it('should show rest password form when provided query params', () => {
    cy.visit(`/password_reset/confirm?uid=${uid}&token=${token}`);
    cy.get('#newPassword1');
    cy.get('#newPassword2');
  });

  it('should be able to reset with valid passwords', () => {
    cy.server();
    cy.route('POST', 'auth/password/reset/confirm/', {
      detail: 'Password has been reset with the new password.',
    }).as('postResetSuccess');

    cy.visit(`/password_reset/confirm?uid=${uid}&token=${token}`);

    cy.get('#newPassword1').type(existingUser.password);
    cy.get('#newPassword2').type(existingUser.password);

    cy.get('button[type="submit"]').click();

    cy.wait('@postResetSuccess');

    cy.contains(/You password has been reset with the new password./i);
    cy.get('a[href="/login"]').should('contain', 'Click here to Login');
  });

  it('should NOT be able to reset with mis-matched passwords', () => {
    cy.visit(`/password_reset/confirm?uid=${uid}&token=${token}`);

    cy.get('#newPassword1').type(existingUser.password);
    cy.get('#newPassword2').type(`${existingUser.password}1`);
    cy.get('button[type="submit"]').click();

    cy.get('div[role="alert"]').should('contain', validationErrorMessages.passwordsMatch);
  });

  it('should NOT be able to change password with expired or invalid token ', () => {
    cy.visit(`/password_reset/confirm?uid=${uid}&token=${token}`);
    cy.get('#newPassword1').type(existingUser.password);
    cy.get('#newPassword2').type(existingUser.password);

    cy.get('button[type="submit"]').click();

    cy.wait('@postReset');

    cy.get('div[role="alert"]').should(
      'have.text',
      'Could not reset password.  Reset token expired or invalid.',
    );
  });
});
