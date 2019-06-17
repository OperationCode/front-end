import { networkErrorMessages } from '../../common/constants/messages';
import existingUser from '../../test-utils/mocks/existingUser';
import mockPassword from '../../test-utils/mockGenerators/mockPassword';
import mockUser from '../../test-utils/mockGenerators/mockUser';

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
    cy.get('input#email').type(existingUser.email);
    cy.get('input#password').type(existingUser.password);
    cy.get('button[type="submit"]').click();

    cy.wait('@postLogin');

    cy.url().should('contain', '/profile');
    cy.get('h1').should('have.text', 'Profile');
    cy.get('p').contains('Hello Kyle Holmberg!');

    cy.getCookies().then(cookies => {
      expect(cookies.some(({ value }) => value === existingUser.firstName)).to.be.true;
      expect(cookies.some(({ value }) => value === existingUser.lastName)).to.be.true;
      expect(cookies.some(({ value }) => value === existingUser.zipcode)).to.be.true;
    });
  });

  it('should NOT be able to login with valid, but non-existent credentials', () => {
    const fakeUser = mockUser('nonexistinguser@someemail.com');

    cy.get('input#email').type(fakeUser.email);
    cy.get('input#password').type(fakeUser.password);
    cy.get('button[type="submit"]').click();

    cy.wait('@postLogin')
      .its('status')
      .should('eq', 400);

    cy.url().should('contain', '/login');
    cy.get('div[role="alert"]').should(
      'have.text',
      'The email or password you entered is incorrect!',
    );
    cy.getCookies().should('have.length', 0);
  });

  it('should NOT be able to login when password for existing user is incorrect', () => {
    const randomValidPassword = mockPassword();

    cy.get('input#email').type(existingUser.email);
    cy.get('input#password').type(randomValidPassword);

    cy.get('button[type="submit"]').click();

    cy.wait('@postLogin')
      .its('status')
      .should('eq', 400);

    cy.url().should('contain', '/login');
    cy.get('div[role="alert"]').should(
      'have.text',
      'The email or password you entered is incorrect!',
    );
    cy.getCookies().should('have.length', 0);
  });

  it('should NOT be able to login to existing user when the server is unreachable', () => {
    cy.route({
      method: 'POST',
      url: 'auth/login/',
      status: 502,
      response: [],
    }).as('postLogin');

    cy.get('input#email').type(existingUser.email);
    cy.get('input#password').type(existingUser.password);
    cy.get('button[type="submit"]').click();

    cy.wait('@postLogin');

    cy.url().should('contain', '/login');
    cy.get('div[role="alert"]').should('have.text', networkErrorMessages.serverDown);
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
    cy.get('div[role="alert"]').should('have.text', 'Logged out successfully.');
  });

  it('should should not display logged out alert after re-render', () => {
    cy.get('div[role="alert"]').should('have.text', 'Logged out successfully.');

    cy.reload();

    cy.get('div[role="alert"]').should('not.contain.text', 'Logged out successfully.');
  });

  it('should not display logged out alert after invalid login attempt', () => {
    const fakeUser = mockUser('nonexistinguser@someemail.com');

    cy.get('div[role="alert"]').should('have.text', 'Logged out successfully.');

    cy.get('input#email').type(fakeUser.email);
    cy.get('input#password').type(fakeUser.password);
    cy.get('button[type="submit"]').click();

    cy.get('div[role="alert"]').should('not.have.text', 'Logged out successfully.');
  });
});
