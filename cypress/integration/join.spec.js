import { validationErrorMessages } from '../../common/constants/messages';
import { minimumPasswordLength } from '../../common/constants/validations';
import existingUser from '../../test-utils/mocks/existingUser';
import mockUser from '../../test-utils/mockGenerators/mockUser';

const inputFields = {
  email: 'input#email',
  confirmEmail: 'input#confirm-email',
  password: 'input#password',
  confirmPassword: 'input#confirm-password',
  firstName: 'input#firstName',
  lastName: 'input#lastName',
  zipcode: 'input#zipcode',
};

describe('join', () => {
  beforeEach(() => {
    cy.server();
    cy.route('POST', 'auth/registration/').as('postRegister');

    cy.visitAndWaitFor('/join');

    cy.getCookies().should('have.length', 0);
    cy.get('h1').should('have.text', 'Join');
  });

  it('should be able to register with valid data', () => {
    const newUser = mockUser();

    cy.get(inputFields.email).type(newUser.email);
    cy.get(inputFields.confirmEmail).type(newUser.email);
    cy.get(inputFields.password).type(newUser.password);
    cy.get(inputFields.confirmPassword).type(newUser.password);
    cy.get(inputFields.firstName).type(newUser.firstName);
    cy.get(inputFields.lastName).type(newUser.lastName);
    cy.get(inputFields.zipcode).type(newUser.zipcode);
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

  it('should display required error message when blurring past first name', () => {
    cy.get(inputFields.firstName).focus().blur();

    // verify no cookies populated
    cy.getCookies().should('have.length', 0);

    // verify that errors rendered
    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.required);
  });

  it('should display required error message when first name contains only spaces', () => {
    cy.get(inputFields.firstName).type('   ').blur();

    // verify no cookies populated
    cy.getCookies().should('have.length', 0);

    // verify that errors rendered
    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.required);
  });

  it('should display required error message when blurring past last name', () => {
    cy.get(inputFields.lastName).focus().blur();

    // verify no cookies populated
    cy.getCookies().should('have.length', 0);

    // verify that errors rendered
    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.required);
  });

  it('should display required error message when last name contains only spaces', () => {
    cy.get(inputFields.lastName).type('   ').blur();

    // verify no cookies populated
    cy.getCookies().should('have.length', 0);

    // verify that errors rendered
    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.required);
  });

  it('should NOT be able to register with an existing email', () => {
    cy.get(inputFields.email).type(existingUser.email);
    cy.get(inputFields.confirmEmail).type(existingUser.email);
    cy.get(inputFields.password).type(existingUser.password);
    cy.get(inputFields.confirmPassword).type(existingUser.password);
    cy.get(inputFields.firstName).type(existingUser.firstName);
    cy.get(inputFields.lastName).type(existingUser.lastName);
    cy.get(inputFields.zipcode).type(existingUser.zipcode);
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

    cy.get(inputFields.email).type('notavalidemail');
    cy.get(inputFields.confirmEmail).type('notavalidemail');
    cy.get(inputFields.password).type(newUser.password);
    cy.get(inputFields.confirmPassword).type(newUser.password);
    cy.get(inputFields.firstName).type(newUser.firstName);
    cy.get(inputFields.lastName).type(newUser.lastName);
    cy.get(inputFields.zipcode).type(newUser.zipcode);
    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/join');
    cy.get('div[role="alert"]').should('contain', validationErrorMessages.email);
    cy.getCookies().should('have.length', 0);
  });

  it('should NOT be able to register without matching emails', () => {
    const newUser = mockUser();

    cy.get(inputFields.email).type(newUser.email);
    cy.get(inputFields.confirmEmail).type(existingUser.email);
    cy.get(inputFields.password).type(newUser.password);
    cy.get(inputFields.confirmPassword).type(newUser.password);
    cy.get(inputFields.firstName).type(newUser.firstName);
    cy.get(inputFields.lastName).type(newUser.lastName);
    cy.get(inputFields.zipcode).type(newUser.zipcode);
    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/join');
    cy.get('div[role="alert"]').should('contain', validationErrorMessages.emailMatch);
    cy.getCookies().should('have.length', 0);
  });

  it('should NOT be able to register with a short password', () => {
    const newUser = mockUser();

    cy.get(inputFields.email).type(newUser.email);
    cy.get(inputFields.confirmEmail).type(newUser.email);
    cy.get(inputFields.password).type('kek1');
    cy.get(inputFields.confirmPassword).type('kek1');
    cy.get(inputFields.firstName).type(newUser.firstName);
    cy.get(inputFields.lastName).type(newUser.lastName);
    cy.get(inputFields.zipcode).type(newUser.zipcode);
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

    cy.get(inputFields.email).type(newUser.email);
    cy.get(inputFields.confirmEmail).type(newUser.email);
    cy.get(inputFields.password).type('12345678');
    cy.get(inputFields.confirmPassword).type('12345678');
    cy.get(inputFields.firstName).type(newUser.firstName);
    cy.get(inputFields.lastName).type(newUser.lastName);
    cy.get(inputFields.zipcode).type(newUser.zipcode);
    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/join');
    cy.get('div[role="alert"]').should('contain', validationErrorMessages.password);
    cy.getCookies().should('have.length', 0);
  });

  it('should NOT be able to register with an invalid password match ', () => {
    const newUser = mockUser();

    cy.get(inputFields.email).type(newUser.email);
    cy.get(inputFields.confirmEmail).type(newUser.email);
    cy.get(inputFields.password).type(newUser.password);
    cy.get(inputFields.confirmPassword).type('Kekmhm123!');
    cy.get(inputFields.firstName).type(newUser.firstName);
    cy.get(inputFields.lastName).type(newUser.lastName);
    cy.get(inputFields.zipcode).type(newUser.zipcode);
    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/join');
    cy.get('div[role="alert"]').should('contain', validationErrorMessages.passwordMatch);
    cy.getCookies().should('have.length', 0);
  });

  it('should NOT be able to register with an invalid zip code', () => {
    const newUser = mockUser();

    cy.get(inputFields.email).type(newUser.email);
    cy.get(inputFields.confirmEmail).type(newUser.email);
    cy.get(inputFields.password).type(newUser.password);
    cy.get(inputFields.confirmPassword).type(newUser.password);
    cy.get(inputFields.firstName).type(newUser.firstName);
    cy.get(inputFields.lastName).type(newUser.lastName);
    cy.get(inputFields.zipcode).type('           ');
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
