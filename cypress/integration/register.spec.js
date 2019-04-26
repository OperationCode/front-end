import { minPasswordCharNum } from '../../common/constants/validations';

const faker = require('faker');

describe('register', function() {
  const newUser = {
    email: faker.internet.email(),

    existingEmail: 'kylemh.email12@gmail.com',
    // ensure password passes strength requirement
    password: `${faker.internet.password(minPasswordCharNum)}!1Aa`,

    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    zipcode: faker.address.zipCode(),
  };

  beforeEach(() => {
    cy.server();
    cy.route('POST', '/api/v1/users').as('postRegister');

    cy.clearCookies();
    cy.visitAndWaitFor('/join');

    cy.getCookies().should('have.length', 0);
    cy.get('h1').should('have.text', 'Join');
  });

  it('should be able to register with valid data', () => {
    cy.get('input#email').type(newUser.email);
    cy.get('input#confirm-email').type(newUser.email);
    cy.get('input#password').type(newUser.password);
    cy.get('input#confirm-password').type(newUser.password);
    cy.get('input#firstName').type(newUser.firstName);
    cy.get('input#lastName').type(newUser.lastName);
    cy.get('input#zipcode').type(newUser.zipcode);
    cy.get('button[type="submit"]').click();

    cy.wait('@postRegister');

    cy.url().should('contain', '/profile');
    cy.get('h1').should('have.text', 'Profile');
    cy.get('p').contains(`Hello ${newUser.firstName} ${newUser.lastName}!`);

    cy.getCookies().then(cookies => {
      expect(cookies.some(({ value }) => value === newUser.firstName)).to.be.true;
      expect(cookies.some(({ value }) => value === newUser.lastName)).to.be.true;
      expect(cookies.some(({ value }) => value === newUser.zipcode.toString())).to.be.true;
    });
  });

  it('should NOT be able to register with an existing email', () => {
    cy.get('input#email').type(newUser.existingEmail);
    cy.get('input#confirm-email').type(newUser.existingEmail);
    cy.get('input#password').type(newUser.password);
    cy.get('input#confirm-password').type(newUser.password);
    cy.get('input#firstName').type(newUser.firstName);
    cy.get('input#lastName').type(newUser.lastName);
    cy.get('input#zipcode').type(newUser.zipcode);
    cy.get('button[type="submit"]').click();

    cy.wait('@postRegister');

    cy.url().should('contain', '/join');
    cy.get('div[role="alert"]').should('contain', 'Email has already been taken.');
    cy.getCookies().should('have.length', 0);
  });

  it('should NOT be able to register witn an invalid email', () => {
    cy.get('input#email').type('notavalidemail');
    cy.get('input#confirm-email').type('notavalidemail');
    cy.get('input#password').type(newUser.password);
    cy.get('input#confirm-password').type(newUser.password);
    cy.get('input#firstName').type(newUser.firstName);
    cy.get('input#lastName').type(newUser.lastName);
    cy.get('input#zipcode').type(newUser.zipcode);
    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/join');
    cy.get('div[role="alert"]').should('contain', 'Must be a valid email');
    cy.getCookies().should('have.length', 0);
  });

  it('should NOT be able to register with an invalid email match', () => {
    cy.get('input#email').type(newUser.email);
    cy.get('input#confirm-email').type(newUser.existingEmail);
    cy.get('input#password').type(newUser.password);
    cy.get('input#confirm-password').type(newUser.password);
    cy.get('input#firstName').type(newUser.firstName);
    cy.get('input#lastName').type(newUser.lastName);
    cy.get('input#zipcode').type(newUser.zipcode);
    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/join');
    cy.get('div[role="alert"]').should('contain', 'Emails must match');
    cy.getCookies().should('have.length', 0);
  });

  it('should NOT be able to register with a short password', () => {
    cy.get('input#email').type(newUser.email);
    cy.get('input#confirm-email').type(newUser.email);
    cy.get('input#password').type('kek1');
    cy.get('input#confirm-password').type('kek1');
    cy.get('input#firstName').type(newUser.firstName);
    cy.get('input#lastName').type(newUser.lastName);
    cy.get('input#zipcode').type(newUser.zipcode);
    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/join');
    cy.get('div[role="alert"]').should('contain', 'Must be at least 8 characters');
    cy.getCookies().should('have.length', 0);
  });

  it('should NOT be able to register with a weak password', () => {
    cy.get('input#email').type(newUser.email);
    cy.get('input#confirm-email').type(newUser.email);
    cy.get('input#password').type('12345678');
    cy.get('input#confirm-password').type('12345678');
    cy.get('input#firstName').type(newUser.firstName);
    cy.get('input#lastName').type(newUser.lastName);
    cy.get('input#zipcode').type(newUser.zipcode);
    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/join');
    cy.get('div[role="alert"]').should(
      'contain',
      'Must include the following: lowercase letter, uppercase letter, number',
    );
    cy.getCookies().should('have.length', 0);
  });

  it('should NOT be able to register with an invalid password match ', () => {
    cy.get('input#email').type(newUser.email);
    cy.get('input#confirm-email').type(newUser.email);
    cy.get('input#password').type(newUser.password);
    cy.get('input#confirm-password').type('Kekmhm123');
    cy.get('input#firstName').type(newUser.firstName);
    cy.get('input#lastName').type(newUser.lastName);
    cy.get('input#zipcode').type(newUser.zipcode);
    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/join');
    cy.get('div[role="alert"]').should('contain', 'Passwords must match');
    cy.getCookies().should('have.length', 0);
  });

  it('should NOT be able to register with an invalid zip code', () => {
    cy.get('input#email').type(newUser.email);
    cy.get('input#confirm-email').type(newUser.email);
    cy.get('input#password').type(newUser.password);
    cy.get('input#confirm-password').type(newUser.password);
    cy.get('input#firstName').type(newUser.firstName);
    cy.get('input#lastName').type(newUser.lastName);
    cy.get('input#zipcode').type('00010');
    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/join');
    cy.get('div[role="alert"]').should('contain', 'Invalid zipcode');
    cy.getCookies().should('have.length', 0);
  });
});
