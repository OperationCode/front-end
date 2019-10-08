import { validationErrorMessages } from '../../common/constants/messages';
import { minimumPasswordLength } from '../../common/constants/validations';
import existingUser from '../../test-utils/mocks/existingUser';
import mockUser from '../../test-utils/mockGenerators/mockUser';

describe('join', () => {
  beforeEach(() => {
    cy.server();
    cy.route('POST', 'auth/registration/').as('postRegister');

    cy.clearCookies();
    cy.visitAndWaitFor('/join');

    cy.getCookies().should('have.length', 0);
    cy.get('h1').should('have.text', 'Join');
  });

  it('should be able to register with valid data', () => {
    const newUser = mockUser();

    cy.get('input#email').type(newUser.email);
    cy.get('input#confirm-email').type(newUser.email);
    cy.get('input#password').type(newUser.password);
    cy.get('input#confirm-password').type(newUser.password);
    cy.get('input#firstName').type(newUser.firstName);
    cy.get('input#lastName').type(newUser.lastName);
    cy.get('input#zipcode').type(newUser.zipcode);
    cy.get('button[type="submit"]').click();

    cy.wait('@postRegister');

    cy.url({ timeout: 10000 }).should('contain', '/profile/update');
    cy.get('h1').should('have.text', 'Update Profile');

    cy.getCookies().then(cookies => {
      expect(cookies.some(({ value }) => value === newUser.firstName)).to.be.true;
      expect(cookies.some(({ value }) => value === newUser.lastName)).to.be.true;
      expect(cookies.some(({ value }) => value === newUser.zipcode)).to.be.true;
    });

    cy.findByTestId('Nav Item Login').should('not.exist');
    cy.findByTestId('Nav Item Logout').should('exist');
  });

  it('should NOT be able to register with an existing email', () => {
    cy.get('input#email').type(existingUser.email);
    cy.get('input#confirm-email').type(existingUser.email);
    cy.get('input#password').type(existingUser.password);
    cy.get('input#confirm-password').type(existingUser.password);
    cy.get('input#firstName').type(existingUser.firstName);
    cy.get('input#lastName').type(existingUser.lastName);
    cy.get('input#zipcode').type(existingUser.zipcode);
    cy.get('button[type="submit"]').click();

    cy.wait('@postRegister');

    cy.url().should('contain', '/join');
    cy.get('div[role="alert"]').should(
      'contain',
      'A user is already registered with this e-mail address',
    );
    cy.getCookies().should('have.length', 0);
  });

  it('should NOT be able to register with an invalid email', () => {
    const newUser = mockUser();

    cy.get('input#email').type('notavalidemail');
    cy.get('input#confirm-email').type('notavalidemail');
    cy.get('input#password').type(newUser.password);
    cy.get('input#confirm-password').type(newUser.password);
    cy.get('input#firstName').type(newUser.firstName);
    cy.get('input#lastName').type(newUser.lastName);
    cy.get('input#zipcode').type(newUser.zipcode);
    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/join');
    cy.get('div[role="alert"]').should('contain', validationErrorMessages.email);
    cy.getCookies().should('have.length', 0);
  });

  it('should NOT be able to register without matching emails', () => {
    const newUser = mockUser();

    cy.get('input#email').type(newUser.email);
    cy.get('input#confirm-email').type(existingUser.email);
    cy.get('input#password').type(newUser.password);
    cy.get('input#confirm-password').type(newUser.password);
    cy.get('input#firstName').type(newUser.firstName);
    cy.get('input#lastName').type(newUser.lastName);
    cy.get('input#zipcode').type(newUser.zipcode);
    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/join');
    cy.get('div[role="alert"]').should('contain', validationErrorMessages.emailMatch);
    cy.getCookies().should('have.length', 0);
  });

  it('should NOT be able to register with a short password', () => {
    const newUser = mockUser();

    cy.get('input#email').type(newUser.email);
    cy.get('input#confirm-email').type(newUser.email);
    cy.get('input#password').type('kek1');
    cy.get('input#confirm-password').type('kek1');
    cy.get('input#firstName').type(newUser.firstName);
    cy.get('input#lastName').type(newUser.lastName);
    cy.get('input#zipcode').type(newUser.zipcode);
    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/join');
    cy.get('div[role="alert"]').should(
      'contain',
      validationErrorMessages.length(minimumPasswordLength),
    );
    cy.getCookies().should('have.length', 0);
  });

  it('should NOT be able to register with a weak password', () => {
    const newUser = mockUser();

    cy.get('input#email').type(newUser.email);
    cy.get('input#confirm-email').type(newUser.email);
    cy.get('input#password').type('12345678');
    cy.get('input#confirm-password').type('12345678');
    cy.get('input#firstName').type(newUser.firstName);
    cy.get('input#lastName').type(newUser.lastName);
    cy.get('input#zipcode').type(newUser.zipcode);
    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/join');
    cy.get('div[role="alert"]').should('contain', validationErrorMessages.password);
    cy.getCookies().should('have.length', 0);
  });

  it('should NOT be able to register with an invalid password match ', () => {
    const newUser = mockUser();

    cy.get('input#email').type(newUser.email);
    cy.get('input#confirm-email').type(newUser.email);
    cy.get('input#password').type(newUser.password);
    cy.get('input#confirm-password').type('Kekmhm123!');
    cy.get('input#firstName').type(newUser.firstName);
    cy.get('input#lastName').type(newUser.lastName);
    cy.get('input#zipcode').type(newUser.zipcode);
    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/join');
    cy.get('div[role="alert"]').should('contain', validationErrorMessages.passwordMatch);
    cy.getCookies().should('have.length', 0);
  });

  it('should NOT be able to register with an invalid zip code', () => {
    const newUser = mockUser();

    cy.get('input#email').type(newUser.email);
    cy.get('input#confirm-email').type(newUser.email);
    cy.get('input#password').type(newUser.password);
    cy.get('input#confirm-password').type(newUser.password);
    cy.get('input#firstName').type(newUser.firstName);
    cy.get('input#lastName').type(newUser.lastName);
    cy.get('input#zipcode').type('           ');
    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/join');
    cy.get('div[role="alert"]').should('contain', validationErrorMessages.zipcode);
    cy.getCookies().should('have.length', 0);
  });

  it('should NOT be able to register without filling all required fields', () => {
    cy.get('button[type="submit"]').click();

    // verify route didn't change
    cy.url().should('contain', '/join');

    // verify no cookies populated
    cy.getCookies().should('have.length', 0);

    // verify that errors rendered
    const numberOfInputs = 7;
    cy.get('input').should('have.length', numberOfInputs);
    cy.get('div[role="alert"]')
      .should('have.length', numberOfInputs)
      .should('contain', validationErrorMessages.required);
  });
});
