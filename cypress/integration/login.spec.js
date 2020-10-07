import jwt_decode from 'jwt-decode'; // eslint-disable-line camelcase
import { networkErrorMessages } from 'common/constants/messages';
import existingUser from 'test-utils/mocks/existingUser';
import mockPassword from 'test-utils/mockGenerators/mockPassword';
import mockUser from 'test-utils/mockGenerators/mockUser';
import { PROFILE_GREETING, LOGIN_BUTTON } from 'common/constants/testIDs';

describe('login', () => {
  beforeEach(() => {
    cy.server();
    cy.route('POST', 'auth/login/').as('postLogin');

    cy.clearCookies();
    cy.visitAndWaitFor('/login');
    cy.getCookies().should('have.length', 0);
    cy.get('h1').should('have.text', 'Login');
  });

  it('should be able to login with valid credentials', () => {
    cy.findByLabelText('Email*').type(existingUser.email);
    cy.findByLabelText('Password*').type(existingUser.password);
    cy.findByTestId(LOGIN_BUTTON).click();

    cy.url().should('contain', '/profile');
    cy.get('h1').should('have.text', 'Profile');
    cy.findByTestId(PROFILE_GREETING).contains('Hello Kyle Holmberg!');

    cy.getCookies().then(([tokenCookie]) => {
      const jwt = jwt_decode(tokenCookie.value);

      expect(jwt.firstName).to.exist;
      expect(jwt.lastName).to.exist;
      expect(jwt.zipcode).to.exist;
    });
  });

  it('should NOT be able to login with valid, but non-existent credentials', () => {
    const fakeUser = mockUser({ desiredEmail: 'nonexistinguser@someemail.com' });

    cy.findByLabelText('Email*').type(fakeUser.email);
    cy.findByLabelText('Password*').type(fakeUser.password);
    cy.findByTestId(LOGIN_BUTTON).click();

    cy.wait('@postLogin').its('status').should('eq', 400);

    cy.url().should('contain', '/login');
    cy.findByRole('alert').should('have.text', 'The email or password you entered is incorrect!');
    cy.getCookies().should('have.length', 0);
  });

  it('should NOT be able to login when password for existing user is incorrect', () => {
    const randomValidPassword = mockPassword();

    cy.findByLabelText('Email*').type(existingUser.email);
    cy.findByLabelText('Password*').type(randomValidPassword);

    cy.findByTestId(LOGIN_BUTTON).click();

    cy.wait('@postLogin').its('status').should('eq', 400);

    cy.url().should('contain', '/login');
    cy.findByRole('alert').should('have.text', 'The email or password you entered is incorrect!');
    cy.getCookies().should('have.length', 0);
  });

  it('should NOT be able to login to existing user when the server is unreachable', () => {
    cy.route({
      method: 'POST',
      url: 'auth/login/',
      status: 502,
      response: [],
    }).as('postLogin');

    cy.findByLabelText('Email*').type(existingUser.email);
    cy.findByLabelText('Password*').type(existingUser.password);
    cy.findByTestId(LOGIN_BUTTON).click();

    cy.url().should('contain', '/login');
    cy.findByRole('alert').should('have.text', networkErrorMessages.serverDown);
    cy.getCookies().should('have.length', 0);
  });
});

describe('login?loggedOut=True', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.getCookies().should('have.length', 0);
    cy.visit('/login?loggedOut=True');
  });

  it('should display logged out alert if routed via logout button', () => {
    cy.findByRole('alert').should('have.text', 'Logged out successfully.');
  });

  it('should should not display logged out alert after re-render', () => {
    cy.findByRole('alert').should('have.text', 'Logged out successfully.');

    cy.reload();

    cy.findByRole('alert').should('not.exist');
  });

  it('should not display logged out alert after invalid login attempt', () => {
    const fakeUser = mockUser({ desiredEmail: 'nonexistinguser@someemail.com' });

    cy.findByRole('alert').should('have.text', 'Logged out successfully.');

    cy.findByLabelText('Email*').type(fakeUser.email);
    cy.findByLabelText('Password*').type(fakeUser.password);
    cy.findByTestId(LOGIN_BUTTON).click();

    cy.findByRole('alert').should('not.have.text', 'Logged out successfully.');
  });
});
