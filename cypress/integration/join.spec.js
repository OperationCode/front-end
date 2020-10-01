import jwt_decode from 'jwt-decode'; // eslint-disable-line camelcase
import { validationErrorMessages } from 'common/constants/messages';
import existingUser from 'test-utils/mocks/existingUser';
import mockUser from 'test-utils/mockGenerators/mockUser';

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

const assertError = ({
  numberOfErrors = 1,
  errorMessage = validationErrorMessages.required,
} = {}) => {
  cy.get('div[role="alert"]').should('have.length', numberOfErrors).should('contain', errorMessage);
};

const assertFailedLogin = ({
  numberOfErrors = 1,
  errorMessage = validationErrorMessages.required,
  shouldWait = false,
  routeToWaitFor = '@postRegister',
} = {}) => {
  cy.get('button[type="submit"]').click();

  if (shouldWait) {
    cy.wait(routeToWaitFor);
  }

  cy.url().should('contain', '/join');

  assertError({ numberOfErrors, errorMessage });

  cy.getCookies().should('have.length', 0);
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
    assertError();

    cy.get(inputFields.confirmEmail).type(validUser.email);
    cy.get(inputFields.password).type(validUser.password);
    cy.get(inputFields.confirmPassword).type(validUser.password);
    cy.get(inputFields.firstName).type(validUser.firstName);
    cy.get(inputFields.lastName).type(validUser.lastName);
    cy.get(inputFields.zipcode).type(validUser.zipcode);

    assertFailedLogin({ numberOfErrors: 2 });
  });

  it('should NOT be able to register when email contains only spaces', () => {
    cy.get(inputFields.email).type('   ').blur();
    assertError();

    cy.get(inputFields.confirmEmail).type(validUser.email);
    cy.get(inputFields.password).type(validUser.password);
    cy.get(inputFields.confirmPassword).type(validUser.password);
    cy.get(inputFields.firstName).type(validUser.firstName);
    cy.get(inputFields.lastName).type(validUser.lastName);
    cy.get(inputFields.zipcode).type(validUser.zipcode);

    assertFailedLogin({ numberOfErrors: 2 });
  });

  it('should NOT be able to register with an invalid email', () => {
    const invalidUser = mockUser({
      desiredEmail: 'invalidemail@.com',
    });

    cy.get(inputFields.email).type(invalidUser.email).blur();
    assertError({ errorMessage: validationErrorMessages.email });

    cy.get(inputFields.confirmEmail).type(invalidUser.email);
    cy.get(inputFields.password).type(invalidUser.password);
    cy.get(inputFields.confirmPassword).type(invalidUser.password);
    cy.get(inputFields.firstName).type(invalidUser.firstName);
    cy.get(inputFields.lastName).type(invalidUser.lastName);
    cy.get(inputFields.zipcode).type(invalidUser.zipcode);

    assertFailedLogin({ errorMessage: validationErrorMessages.email });
  });

  it('should NOT be able to register when blurring past confirmEmail', () => {
    cy.get(inputFields.email).type(validUser.email);

    cy.get(inputFields.confirmEmail).focus().blur();
    assertError();

    cy.get(inputFields.password).type(validUser.password);
    cy.get(inputFields.confirmPassword).type(validUser.password);
    cy.get(inputFields.firstName).type(validUser.firstName);
    cy.get(inputFields.lastName).type(validUser.lastName);
    cy.get(inputFields.zipcode).type(validUser.zipcode);

    assertFailedLogin();
  });

  it('should NOT be able to register when emails do not match', () => {
    cy.get(inputFields.email).type(validUser.email);

    cy.get(inputFields.confirmEmail).type(existingUser.email).blur();
    assertError({ errorMessage: validationErrorMessages.emailsMatch });

    cy.get(inputFields.password).type(validUser.password);
    cy.get(inputFields.confirmPassword).type(validUser.password);
    cy.get(inputFields.firstName).type(validUser.firstName);
    cy.get(inputFields.lastName).type(validUser.lastName);
    cy.get(inputFields.zipcode).type(validUser.zipcode);

    assertFailedLogin({ errorMessage: validationErrorMessages.emailsMatch });
  });

  it('should NOT be able to register with an existing email', () => {
    cy.get(inputFields.email).type(existingUser.email);
    cy.get(inputFields.confirmEmail).type(existingUser.email);
    cy.get(inputFields.password).type(existingUser.password);
    cy.get(inputFields.confirmPassword).type(existingUser.password);
    cy.get(inputFields.firstName).type(existingUser.firstName);
    cy.get(inputFields.lastName).type(existingUser.lastName);
    cy.get(inputFields.zipcode).type(existingUser.zipcode);

    assertFailedLogin({ errorMessage: validationErrorMessages.emailExists, shouldWait: true });
  });

  /**
   * Password & ConfirmPassword fields
   */
  it('should NOT be able to register when blurring past password', () => {
    cy.get(inputFields.email).type(validUser.email);
    cy.get(inputFields.confirmEmail).type(validUser.email);

    cy.get(inputFields.password).focus().blur();
    assertError();

    cy.get(inputFields.confirmPassword).type(validUser.password);
    cy.get(inputFields.firstName).type(validUser.firstName);
    cy.get(inputFields.lastName).type(validUser.lastName);
    cy.get(inputFields.zipcode).type(validUser.zipcode);

    assertFailedLogin({ numberOfErrors: 2 });
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
    assertError({ errorMessage: validationErrorMessages.password });

    cy.get(inputFields.confirmPassword).type(invalidUser.password);
    cy.get(inputFields.firstName).type(invalidUser.firstName);
    cy.get(inputFields.lastName).type(invalidUser.lastName);
    cy.get(inputFields.zipcode).type(invalidUser.zipcode);

    assertFailedLogin({ errorMessage: validationErrorMessages.password });
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
    assertError({ errorMessage: validationErrorMessages.password });

    cy.get(inputFields.confirmPassword).type(invalidUser.password);
    cy.get(inputFields.firstName).type(invalidUser.firstName);
    cy.get(inputFields.lastName).type(invalidUser.lastName);
    cy.get(inputFields.zipcode).type(invalidUser.zipcode);

    assertFailedLogin({ errorMessage: validationErrorMessages.password });
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
    assertError({ errorMessage: validationErrorMessages.password });

    cy.get(inputFields.confirmPassword).type(invalidUser.password);
    cy.get(inputFields.firstName).type(invalidUser.firstName);
    cy.get(inputFields.lastName).type(invalidUser.lastName);
    cy.get(inputFields.zipcode).type(invalidUser.zipcode);

    assertFailedLogin({ errorMessage: validationErrorMessages.password });
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
    assertError({ errorMessage: validationErrorMessages.password });

    cy.get(inputFields.confirmPassword).type(invalidUser.password);
    cy.get(inputFields.firstName).type(invalidUser.firstName);
    cy.get(inputFields.lastName).type(invalidUser.lastName);
    cy.get(inputFields.zipcode).type(invalidUser.zipcode);

    assertFailedLogin({ errorMessage: validationErrorMessages.password });
  });

  it('should NOT be able to register when blurring past confirmPassword', () => {
    cy.get(inputFields.email).type(validUser.email);
    cy.get(inputFields.confirmEmail).type(validUser.email);
    cy.get(inputFields.password).type(validUser.password);

    cy.get(inputFields.confirmPassword).focus().blur();
    assertError();

    cy.get(inputFields.firstName).type(validUser.firstName);
    cy.get(inputFields.lastName).type(validUser.lastName);
    cy.get(inputFields.zipcode).type(validUser.zipcode);

    assertFailedLogin();
  });

  it('should NOT be able to register when passwords do not match', () => {
    cy.get(inputFields.email).type(validUser.email);
    cy.get(inputFields.confirmEmail).type(validUser.email);
    cy.get(inputFields.password).type(validUser.password);

    cy.get(inputFields.confirmPassword).type(existingUser.password).blur();
    assertError({ errorMessage: validationErrorMessages.passwordsMatch });

    cy.get(inputFields.firstName).type(validUser.firstName);
    cy.get(inputFields.lastName).type(validUser.lastName);
    cy.get(inputFields.zipcode).type(validUser.zipcode);

    assertFailedLogin({ errorMessage: validationErrorMessages.passwordsMatch });
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
    assertError();

    cy.get(inputFields.lastName).type(validUser.lastName);
    cy.get(inputFields.zipcode).type(validUser.zipcode);

    assertFailedLogin();
  });

  it('should NOT be able to register when firstName contains only spaces', () => {
    cy.get(inputFields.email).type(validUser.email);
    cy.get(inputFields.confirmEmail).type(validUser.email);
    cy.get(inputFields.password).type(validUser.password);
    cy.get(inputFields.confirmPassword).type(validUser.password);

    cy.get(inputFields.firstName).type('     ').blur();
    assertError();

    cy.get(inputFields.lastName).type(validUser.lastName);
    cy.get(inputFields.zipcode).type(validUser.zipcode);

    assertFailedLogin();
  });

  it('should NOT be able to register when blurring past lastName', () => {
    cy.get(inputFields.email).type(validUser.email);
    cy.get(inputFields.confirmEmail).type(validUser.email);
    cy.get(inputFields.password).type(validUser.password);
    cy.get(inputFields.confirmPassword).type(validUser.password);
    cy.get(inputFields.firstName).type(validUser.firstName);

    cy.get(inputFields.lastName).focus().blur();
    assertError();

    cy.get(inputFields.zipcode).type(validUser.zipcode);

    assertFailedLogin();
  });

  it('should NOT be able to register when lastName contains only spaces', () => {
    cy.get(inputFields.email).type(validUser.email);
    cy.get(inputFields.confirmEmail).type(validUser.email);
    cy.get(inputFields.password).type(validUser.password);
    cy.get(inputFields.confirmPassword).type(validUser.password);
    cy.get(inputFields.firstName).type(validUser.firstName);

    cy.get(inputFields.lastName).type('     ').blur();
    assertError();

    cy.get(inputFields.zipcode).type(validUser.zipcode);

    assertFailedLogin();
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
    assertError();

    assertFailedLogin();
  });

  it('should NOT be able to register when zipcode contains only spaces', () => {
    cy.get(inputFields.email).type(validUser.email);
    cy.get(inputFields.confirmEmail).type(validUser.email);
    cy.get(inputFields.password).type(validUser.password);
    cy.get(inputFields.confirmPassword).type(validUser.password);
    cy.get(inputFields.firstName).type(validUser.firstName);
    cy.get(inputFields.lastName).type(validUser.lastName);

    cy.get(inputFields.zipcode).type('     ').blur();
    assertError();

    assertFailedLogin();
  });

  /**
   * Registration without all fields
   */
  it('should NOT be able to register without filling all required fields', () => {
    assertFailedLogin({ numberOfErrors: 7 });
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

    cy.getCookies().then(([tokenCookie]) => {
      const jwt = jwt_decode(tokenCookie.value);

      expect(jwt.firstName).to.exist;
      expect(jwt.lastName).to.exist;
      expect(jwt.zipcode).to.exist;
    });

    cy.findByTestId('Nav Item Login').should('not.exist');
    cy.findByTestId('Nav Item Logout').should('exist');
  });
});
