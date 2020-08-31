import existingUser from '../../../test-utils/mocks/existingUser';
import { networkErrorMessages, validationErrorMessages } from '../../../common/constants/messages';

describe(`profile/change_password (unauthorized)`, () => {
  it(`should redirect to login if not authorized`, () => {
    // assert that route can't be reached without being authorized
    cy.visit('/profile/change_password');
    cy.url().should('contain', '/login');
    cy.url().should('not.contain', '/profile/update');
    cy.get('h1').should('have.text', 'Login'); // redirect confirmed
  });
});

describe('change_password', () => {
  beforeEach(() => {
    cy.clearCookies();

    cy.server();
    cy.route('POST', 'auth/password/change/').as('postChange');

    cy.login();
    cy.visit('/profile/change_password');
    cy.get('h1').should('have.text', 'Enter new password');
  });

  it('should be able to change with valid passwords', () => {
    cy.get('#newPassword1').type(existingUser.password);
    cy.get('#newPassword2').type(existingUser.password);

    cy.get('button[type="submit"]').click();

    cy.wait('@postChange');

    cy.contains(/You password has been changed to the new password/i);
    cy.get('a[href="/profile"]').should('contain', 'Click here to return to Profile');
  });

  it('should NOT be able to change with mis-matched passwords', () => {
    cy.get('#newPassword1').type(existingUser.password);
    cy.get('#newPassword2').type(`${existingUser.password}1`);
    cy.get('button[type="submit"]').click();

    cy.get('div[role="alert"]').should('contain', validationErrorMessages.passwordsMatch);
  });

  it('should NOT be able to change password when server is unreachable', () => {
    cy.route({
      method: 'POST',
      url: 'auth/password/change/',
      status: 502,
      response: [],
    }).as('postChange');

    cy.get('#newPassword1').type(existingUser.password);
    cy.get('#newPassword2').type(existingUser.password);
    cy.get('button[type="submit"]').click();

    cy.wait('@postChange');

    cy.get('div[role="alert"]').should('have.text', networkErrorMessages.serverDown);
  });
});
