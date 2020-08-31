import { validationErrorMessages } from '../../common/constants/messages';
import existingUser from '../../test-utils/mocks/existingUser';
import mockUser from '../../test-utils/mockGenerators/mockUser';

const validUser = mockUser();
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

  /**
   * Test Invalid Entries
   */

  /**
   * E-mail & ConfrimEmail fields
   */
  it('should NOT be able to register when blurring past email', () => {
    cy.get(inputFields.email).focus().blur();
    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.required);

    cy.get(inputFields.confirmEmail).type(validUser.email);
    cy.get(inputFields.password).type(validUser.password);
    cy.get(inputFields.confirmPassword).type(validUser.password);
    cy.get(inputFields.firstName).type(validUser.firstName);
    cy.get(inputFields.lastName).type(validUser.lastName);
    cy.get(inputFields.zipcode).type(validUser.zipcode);
    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/join');

    cy.get('div[role="alert"]').should($alerts => {
      expect($alerts).to.have.length(2);
      expect($alerts.eq(0)).to.contain(validationErrorMessages.required);
    });

    cy.getCookies().should('have.length', 0);
  });

  it('should NOT be able to register when email contains only spaces', () => {
    cy.get(inputFields.email).type('   ').blur();
    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.required);

    cy.get(inputFields.confirmEmail).type(validUser.email);
    cy.get(inputFields.password).type(validUser.password);
    cy.get(inputFields.confirmPassword).type(validUser.password);
    cy.get(inputFields.firstName).type(validUser.firstName);
    cy.get(inputFields.lastName).type(validUser.lastName);
    cy.get(inputFields.zipcode).type(validUser.zipcode);
    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/join');

    cy.get('div[role="alert"]').should($alerts => {
      expect($alerts).to.have.length(2);
      expect($alerts.eq(0)).to.contain(validationErrorMessages.required);
    });

    cy.getCookies().should('have.length', 0);
  });

  it('should NOT be able to register with an invalid email', () => {
    const invalidUser = mockUser({
      desiredEmail: 'invalidemail@.com',
    });

    cy.get(inputFields.email).type(invalidUser.email).blur();
    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.email);

    cy.get(inputFields.confirmEmail).type(invalidUser.email);
    cy.get(inputFields.password).type(invalidUser.password);
    cy.get(inputFields.confirmPassword).type(invalidUser.password);
    cy.get(inputFields.firstName).type(invalidUser.firstName);
    cy.get(inputFields.lastName).type(invalidUser.lastName);
    cy.get(inputFields.zipcode).type(invalidUser.zipcode);
    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/join');

    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.email);

    cy.getCookies().should('have.length', 0);
  });

  it('should NOT be able to register when blurring past confirmEmail', () => {
    cy.get(inputFields.email).type(validUser.email);

    cy.get(inputFields.confirmEmail).focus().blur();
    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.required);

    cy.get(inputFields.password).type(validUser.password);
    cy.get(inputFields.confirmPassword).type(validUser.password);
    cy.get(inputFields.firstName).type(validUser.firstName);
    cy.get(inputFields.lastName).type(validUser.lastName);
    cy.get(inputFields.zipcode).type(validUser.zipcode);
    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/join');

    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.required);

    cy.getCookies().should('have.length', 0);
  });

  it('should NOT be able to register when emails do not match', () => {
    cy.get(inputFields.email).type(validUser.email);

    cy.get(inputFields.confirmEmail).type(existingUser.email).blur();
    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.emailsMatch);

    cy.get(inputFields.password).type(validUser.password);
    cy.get(inputFields.confirmPassword).type(validUser.password);
    cy.get(inputFields.firstName).type(validUser.firstName);
    cy.get(inputFields.lastName).type(validUser.lastName);
    cy.get(inputFields.zipcode).type(validUser.zipcode);
    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/join');

    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.emailsMatch);

    cy.getCookies().should('have.length', 0);
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

    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.emailExists);

    cy.getCookies().should('have.length', 0);
  });

  /**
   * Password & ConfirmPassword fields
   */
  it('should NOT be able to register when blurring past password', () => {
    cy.get(inputFields.email).type(validUser.email);
    cy.get(inputFields.confirmEmail).type(validUser.email);

    cy.get(inputFields.password).focus().blur();
    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.required);

    cy.get(inputFields.confirmPassword).type(validUser.password);
    cy.get(inputFields.firstName).type(validUser.firstName);
    cy.get(inputFields.lastName).type(validUser.lastName);
    cy.get(inputFields.zipcode).type(validUser.zipcode);
    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/join');

    cy.get('div[role="alert"]').should($alerts => {
      expect($alerts).to.have.length(2);
      expect($alerts.eq(0)).to.contain(validationErrorMessages.required);
    });

    cy.getCookies().should('have.length', 0);
  });

  it('should NOT be able to register with short password', () => {
    const invalidUser = mockUser({
      passwordOptions: {
        hasMinimumLength: false,
      },
    });

    cy.get(inputFields.email).type(invalidUser.email);
    cy.get(inputFields.confirmEmail).type(invalidUser.email);

    cy.get(inputFields.password).type(invalidUser.password).blur();
    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.password);

    cy.get(inputFields.confirmPassword).type(invalidUser.password);
    cy.get(inputFields.firstName).type(invalidUser.firstName);
    cy.get(inputFields.lastName).type(invalidUser.lastName);
    cy.get(inputFields.zipcode).type(invalidUser.zipcode);
    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/join');

    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.password);

    cy.getCookies().should('have.length', 0);
  });

  it('should NOT be able to register with password missing lowercase', () => {
    const invalidUser = mockUser({
      passwordOptions: {
        hasOneLowercaseChar: false,
      },
    });

    cy.get(inputFields.email).type(invalidUser.email);
    cy.get(inputFields.confirmEmail).type(invalidUser.email);

    cy.get(inputFields.password).type(invalidUser.password).blur();
    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.password);

    cy.get(inputFields.confirmPassword).type(invalidUser.password);
    cy.get(inputFields.firstName).type(invalidUser.firstName);
    cy.get(inputFields.lastName).type(invalidUser.lastName);
    cy.get(inputFields.zipcode).type(invalidUser.zipcode);
    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/join');

    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.password);

    cy.getCookies().should('have.length', 0);
  });

  it('should NOT be able to register with password missing uppercase', () => {
    const invalidUser = mockUser({
      passwordOptions: {
        hasOneUppercaseChar: false,
      },
    });

    cy.get(inputFields.email).type(invalidUser.email);
    cy.get(inputFields.confirmEmail).type(invalidUser.email);

    cy.get(inputFields.password).type(invalidUser.password).blur();
    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.password);

    cy.get(inputFields.confirmPassword).type(invalidUser.password);
    cy.get(inputFields.firstName).type(invalidUser.firstName);
    cy.get(inputFields.lastName).type(invalidUser.lastName);
    cy.get(inputFields.zipcode).type(invalidUser.zipcode);
    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/join');

    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.password);

    cy.getCookies().should('have.length', 0);
  });

  it('should NOT be able to register with password missing number', () => {
    const invalidUser = mockUser({
      passwordOptions: {
        hasOneNumber: false,
      },
    });

    cy.get(inputFields.email).type(invalidUser.email);
    cy.get(inputFields.confirmEmail).type(invalidUser.email);

    cy.get(inputFields.password).type(invalidUser.password).blur();
    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.password);

    cy.get(inputFields.confirmPassword).type(invalidUser.password);
    cy.get(inputFields.firstName).type(invalidUser.firstName);
    cy.get(inputFields.lastName).type(invalidUser.lastName);
    cy.get(inputFields.zipcode).type(invalidUser.zipcode);
    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/join');

    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.password);

    cy.getCookies().should('have.length', 0);
  });

  it('should NOT be able to register when blurring past confirmPassword', () => {
    cy.get(inputFields.email).type(validUser.email);
    cy.get(inputFields.confirmEmail).type(validUser.email);
    cy.get(inputFields.password).type(validUser.password);

    cy.get(inputFields.confirmPassword).focus().blur();
    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.required);

    cy.get(inputFields.firstName).type(validUser.firstName);
    cy.get(inputFields.lastName).type(validUser.lastName);
    cy.get(inputFields.zipcode).type(validUser.zipcode);
    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/join');

    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.required);

    cy.getCookies().should('have.length', 0);
  });

  it('should NOT be able to register when passwords do not match', () => {
    cy.get(inputFields.email).type(validUser.email);
    cy.get(inputFields.confirmEmail).type(validUser.email);
    cy.get(inputFields.password).type(validUser.password);

    cy.get(inputFields.confirmPassword).type(existingUser.password).blur();
    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.passwordsMatch);

    cy.get(inputFields.firstName).type(validUser.firstName);
    cy.get(inputFields.lastName).type(validUser.lastName);
    cy.get(inputFields.zipcode).type(validUser.zipcode);
    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/join');

    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.passwordsMatch);

    cy.getCookies().should('have.length', 0);
  });

  /**
   * FirstName & LastName Fields
   */
  it('should NOT be able to register when blurring past firstName', () => {
    cy.get(inputFields.email).type(validUser.email);
    cy.get(inputFields.confirmEmail).type(validUser.email);
    cy.get(inputFields.password).type(validUser.password);
    cy.get(inputFields.confirmPassword).type(validUser.password);

    cy.get(inputFields.firstName).focus().blur();
    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.required);

    cy.get(inputFields.lastName).type(validUser.lastName);
    cy.get(inputFields.zipcode).type(validUser.zipcode);
    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/join');

    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.required);

    cy.getCookies().should('have.length', 0);
  });

  it('should NOT be able to register when firstName contains only spaces', () => {
    cy.get(inputFields.email).type(validUser.email);
    cy.get(inputFields.confirmEmail).type(validUser.email);
    cy.get(inputFields.password).type(validUser.password);
    cy.get(inputFields.confirmPassword).type(validUser.password);

    cy.get(inputFields.firstName).type('     ').blur();
    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.required);

    cy.get(inputFields.lastName).type(validUser.lastName);
    cy.get(inputFields.zipcode).type(validUser.zipcode);
    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/join');

    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.required);

    cy.getCookies().should('have.length', 0);
  });

  it('should NOT be able to register when blurring past lastName', () => {
    cy.get(inputFields.email).type(validUser.email);
    cy.get(inputFields.confirmEmail).type(validUser.email);
    cy.get(inputFields.password).type(validUser.password);
    cy.get(inputFields.confirmPassword).type(validUser.password);
    cy.get(inputFields.firstName).type(validUser.firstName);

    cy.get(inputFields.lastName).focus().blur();
    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.required);

    cy.get(inputFields.zipcode).type(validUser.zipcode);
    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/join');

    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.required);

    cy.getCookies().should('have.length', 0);
  });

  it('should NOT be able to register when lastName contains only spaces', () => {
    cy.get(inputFields.email).type(validUser.email);
    cy.get(inputFields.confirmEmail).type(validUser.email);
    cy.get(inputFields.password).type(validUser.password);
    cy.get(inputFields.confirmPassword).type(validUser.password);
    cy.get(inputFields.firstName).type(validUser.firstName);

    cy.get(inputFields.lastName).type('     ').blur();
    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.required);

    cy.get(inputFields.zipcode).type(validUser.zipcode);
    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/join');

    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.required);

    cy.getCookies().should('have.length', 0);
  });

  /**
   * Zipcode field
   */
  it('should NOT be able to register when blurring past zipcode', () => {
    cy.get(inputFields.email).type(validUser.email);
    cy.get(inputFields.confirmEmail).type(validUser.email);
    cy.get(inputFields.password).type(validUser.password);
    cy.get(inputFields.confirmPassword).type(validUser.password);
    cy.get(inputFields.firstName).type(validUser.firstName);
    cy.get(inputFields.lastName).type(validUser.lastName);

    cy.get(inputFields.zipcode).focus().blur();
    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.required);

    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/join');

    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.required);

    cy.getCookies().should('have.length', 0);
  });

  it('should NOT be able to register when zipcode contains only spaces', () => {
    cy.get(inputFields.email).type(validUser.email);
    cy.get(inputFields.confirmEmail).type(validUser.email);
    cy.get(inputFields.password).type(validUser.password);
    cy.get(inputFields.confirmPassword).type(validUser.password);
    cy.get(inputFields.firstName).type(validUser.firstName);
    cy.get(inputFields.lastName).type(validUser.lastName);

    cy.get(inputFields.zipcode).type('     ').blur();
    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.required);

    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/join');

    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.required);

    cy.getCookies().should('have.length', 0);
  });

  /**
   * Registration without all fields
   */
  it('should NOT be able to register without filling all required fields', () => {
    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/join');

    cy.getCookies().should('have.length', 0);

    const numberOfInputs = 7;
    cy.get('input').should('have.length', numberOfInputs);
    cy.get('div[role="alert"]')
      .should('have.length', numberOfInputs)
      .should('contain', validationErrorMessages.required);
  });

  /**
   * Test Valid User
   */
  it('should be able to register with valid data', () => {
    cy.get(inputFields.email).type(validUser.email);
    cy.get(inputFields.confirmEmail).type(validUser.email);
    cy.get(inputFields.password).type(validUser.password);
    cy.get(inputFields.confirmPassword).type(validUser.password);
    cy.get(inputFields.firstName).type(validUser.firstName);
    cy.get(inputFields.lastName).type(validUser.lastName);
    cy.get(inputFields.zipcode).type(validUser.zipcode);
    cy.get('button[type="submit"]').click();

    cy.wait('@postRegister');

    cy.url({ timeout: 10000 }).should('contain', '/profile/update');
    cy.get('h1').should('have.text', 'Update Profile');

    cy.getCookies().then(cookies => {
      expect(cookies.some(({ value }) => value === validUser.firstName)).to.be.true;
      expect(cookies.some(({ value }) => value === validUser.lastName)).to.be.true;
      expect(cookies.some(({ value }) => value === validUser.zipcode)).to.be.true;
    });

    cy.findByTestId('Nav Item Login').should('not.exist');
    cy.findByTestId('Nav Item Logout').should('exist');
  });
});
