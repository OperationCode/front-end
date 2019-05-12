import { networkErrorMessages } from '../../common/constants/messages';
import existingUser from '../../test-utils/mocks/existingUser';
import mockPassword from '../../test-utils/mockGenerators/mockPassword';
import mockUser from '../../test-utils/mockGenerators/mockUser';

describe('login', () => {
  beforeEach(() => {
    cy.server();
    cy.route('POST', '/api/v1/sessions').as('postLogin');

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
      expect(
        cookies.some(({ value }) => value.includes('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9')),
      ).to.equal(true);
      expect(cookies.some(({ value }) => value === 'Kyle')).to.be.true;
      expect(cookies.some(({ value }) => value === 'Holmberg')).to.be.true;
      expect(cookies.some(({ value }) => value === '97214')).to.be.true;
    });
  });

  it('should NOT be able to login with valid, but non-existent credentials', () => {
    const fakeUser = mockUser('nonexistinguser@someemail.com');

    cy.get('input#email').type(fakeUser.email);
    cy.get('input#password').type(fakeUser.password);
    cy.get('button[type="submit"]').click();

    cy.wait('@postLogin')
      .its('status')
      .should('eq', 401);

    cy.url().should('contain', '/login');
    cy.get('div[role="alert"]').should('have.text', 'Invalid Email or password.');
    cy.getCookies().should('have.length', 0);
  });

  it('should NOT be able to login when password for existing user is incorrect', () => {
    const randomValidPassword = mockPassword();

    cy.get('input#email').type(existingUser.email);
    cy.get('input#password').type(randomValidPassword);

    cy.get('button[type="submit"]').click();

    cy.wait('@postLogin')
      .its('status')
      .should('eq', 401);

    cy.url().should('contain', '/login');
    cy.get('div[role="alert"]').should('have.text', 'Invalid Email or password.');
    cy.getCookies().should('have.length', 0);
  });

  it('should NOT be able to login to existing user when the server is unreachable', () => {
    cy.route({
      method: 'POST',
      url: '/api/v1/sessions',
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
