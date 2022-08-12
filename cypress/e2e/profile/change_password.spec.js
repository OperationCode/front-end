import existingUser from 'test-utils/mocks/existingUser';
import { networkErrorMessages, validationErrorMessages } from 'common/constants/messages';
import { CHANGE_PASSWORD_FORM_ERROR, INPUT_ERROR } from 'common/constants/testIDs';

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

    cy.visit('/profile');
    cy.findAllByLabelText('Email*').type(existingUser.email);
    cy.findAllByLabelText('Password*').type(existingUser.password);

    cy.findAllByTestId('LOGIN_BUTTON').click();
    cy.findByText('Change Password').click();
    cy.get('h1').should('have.text', 'Enter new password');
  });

  it('should be able to change with valid passwords', () => {
    cy.findByLabelText('Password*').type(existingUser.password);
    cy.findByLabelText('Confirm Password*').type(existingUser.password);

    cy.findByText('Submit').click();

    cy.findByText(/You password has been changed to the new password/i);
    cy.get('a[href="/profile"]').should('contain', 'Click here to return to Profile');
  });

  it('should NOT be able to change with mis-matched passwords', () => {
    cy.findByLabelText('Password*').type(existingUser.password);
    cy.findByLabelText('Confirm Password*').type(`${existingUser.password}1`);
    cy.findByText('Submit').click();

    cy.findByTestId(INPUT_ERROR).should('contain', validationErrorMessages.passwordsMatch);
  });

  it('should NOT be able to change password when server is unreachable', () => {
    cy.route({
      method: 'POST',
      url: 'auth/password/change/',
      status: 502,
      response: [],
    }).as('postChange');

    cy.findByLabelText('Password*').type(existingUser.password);
    cy.findByLabelText('Confirm Password*').type(existingUser.password);
    cy.findByText('Submit').click();

    cy.findByTestId(CHANGE_PASSWORD_FORM_ERROR).should(
      'have.text',
      networkErrorMessages.serverDown,
    );
  });
});
