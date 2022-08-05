import jwt_decode from 'jwt-decode'; // eslint-disable-line camelcase
import { validationErrorMessages } from 'common/constants/messages';
import existingUser from 'test-utils/mocks/existingUser';
import mockUser from 'test-utils/mockGenerators/mockUser';

const validUser = mockUser();
const inputFields = {
  email: 'Email*',
  confirmEmail: 'Confirm Email*',
  password: 'Password*',
  confirmPassword: 'Confirm Password*',
  firstName: 'First Name*',
  lastName: 'Last Name*',
  zipcode: 'Zipcode*',
  codeOfConduct: /I have read and agree to/,
};

const assertError = ({
  numberOfErrors = 1,
  errorMessage = validationErrorMessages.required,
} = {}) => {
  cy.findAllByRole('alert')
    .should('have.length', numberOfErrors + 1) // +1 because next announcer exists
    .should('contain', errorMessage);
};

const assertFailedLogin = ({
  numberOfErrors = 1,
  errorMessage = validationErrorMessages.required,
  shouldWait = false,
  routeToWaitFor = '@postRegister',
} = {}) => {
  cy.findByText('Submit').click();

  if (shouldWait) {
    cy.wait(routeToWaitFor || '@postRegister');
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
    cy.findByLabelText(inputFields.email).focus().blur();
    assertError();

    cy.findByLabelText(inputFields.confirmEmail).type(validUser.email);
    cy.findByLabelText(inputFields.password).type(validUser.password);
    cy.findByLabelText(inputFields.confirmPassword).type(validUser.password);
    cy.findByLabelText(inputFields.firstName).type(validUser.firstName);
    cy.findByLabelText(inputFields.lastName).type(validUser.lastName);
    cy.findByLabelText(inputFields.zipcode).type(validUser.zipcode);
    cy.findByLabelText(inputFields.codeOfConduct).type(validUser.codeOfConduct);

    assertFailedLogin({ numberOfErrors: 2 });
  });

  it('should NOT be able to register when email contains only spaces', () => {
    cy.findByLabelText(inputFields.email).type('   ').blur();
    assertError();

    cy.findByLabelText(inputFields.confirmEmail).type(validUser.email);
    cy.findByLabelText(inputFields.password).type(validUser.password);
    cy.findByLabelText(inputFields.confirmPassword).type(validUser.password);
    cy.findByLabelText(inputFields.firstName).type(validUser.firstName);
    cy.findByLabelText(inputFields.lastName).type(validUser.lastName);
    cy.findByLabelText(inputFields.zipcode).type(validUser.zipcode);
    cy.findByLabelText(inputFields.codeOfConduct).type(validUser.codeOfConduct);

    assertFailedLogin({ numberOfErrors: 2 });
  });

  it('should NOT be able to register with an invalid email', () => {
    const invalidUser = mockUser({
      desiredEmail: 'invalidemail@.com',
    });

    cy.findByLabelText(inputFields.email).type(invalidUser.email).blur();
    assertError({ errorMessage: validationErrorMessages.email });

    cy.findByLabelText(inputFields.confirmEmail).type(invalidUser.email);
    cy.findByLabelText(inputFields.password).type(invalidUser.password);
    cy.findByLabelText(inputFields.confirmPassword).type(invalidUser.password);
    cy.findByLabelText(inputFields.firstName).type(invalidUser.firstName);
    cy.findByLabelText(inputFields.lastName).type(invalidUser.lastName);
    cy.findByLabelText(inputFields.zipcode).type(invalidUser.zipcode);
    cy.findByLabelText(inputFields.codeOfConduct).type(validUser.codeOfConduct);

    assertFailedLogin({ errorMessage: validationErrorMessages.email });
  });

  it('should NOT be able to register when blurring past confirmEmail', () => {
    cy.findByLabelText(inputFields.email).type(validUser.email);

    cy.findByLabelText(inputFields.confirmEmail).focus().blur();
    assertError();

    cy.findByLabelText(inputFields.password).type(validUser.password);
    cy.findByLabelText(inputFields.confirmPassword).type(validUser.password);
    cy.findByLabelText(inputFields.firstName).type(validUser.firstName);
    cy.findByLabelText(inputFields.lastName).type(validUser.lastName);
    cy.findByLabelText(inputFields.zipcode).type(validUser.zipcode);
    cy.findByLabelText(inputFields.codeOfConduct).type(validUser.codeOfConduct);

    assertFailedLogin();
  });

  it('should NOT be able to register when emails do not match', () => {
    cy.findByLabelText(inputFields.email).type(validUser.email);

    cy.findByLabelText(inputFields.confirmEmail).type(existingUser.email).blur();
    assertError({ errorMessage: validationErrorMessages.emailsMatch });

    cy.findByLabelText(inputFields.password).type(validUser.password);
    cy.findByLabelText(inputFields.confirmPassword).type(validUser.password);
    cy.findByLabelText(inputFields.firstName).type(validUser.firstName);
    cy.findByLabelText(inputFields.lastName).type(validUser.lastName);
    cy.findByLabelText(inputFields.zipcode).type(validUser.zipcode);
    cy.findByLabelText(inputFields.codeOfConduct).type(validUser.codeOfConduct);

    assertFailedLogin({ errorMessage: validationErrorMessages.emailsMatch });
  });

  it('should NOT be able to register with an existing email', () => {
    cy.findByLabelText(inputFields.email).type(existingUser.email);
    cy.findByLabelText(inputFields.confirmEmail).type(existingUser.email);
    cy.findByLabelText(inputFields.password).type(existingUser.password);
    cy.findByLabelText(inputFields.confirmPassword).type(existingUser.password);
    cy.findByLabelText(inputFields.firstName).type(existingUser.firstName);
    cy.findByLabelText(inputFields.lastName).type(existingUser.lastName);
    cy.findByLabelText(inputFields.zipcode).type(existingUser.zipcode);
    cy.findByLabelText(inputFields.codeOfConduct).type(validUser.codeOfConduct);

    assertFailedLogin({ errorMessage: validationErrorMessages.emailExists, shouldWait: true });
  });

  /**
   * Password & ConfirmPassword fields
   */
  it('should NOT be able to register when blurring past password', () => {
    cy.findByLabelText(inputFields.email).type(validUser.email);
    cy.findByLabelText(inputFields.confirmEmail).type(validUser.email);

    cy.findByLabelText(inputFields.password).focus().blur();
    assertError();

    cy.findByLabelText(inputFields.confirmPassword).type(validUser.password);
    cy.findByLabelText(inputFields.firstName).type(validUser.firstName);
    cy.findByLabelText(inputFields.lastName).type(validUser.lastName);
    cy.findByLabelText(inputFields.zipcode).type(validUser.zipcode);
    cy.findByLabelText(inputFields.codeOfConduct).type(validUser.codeOfConduct);

    assertFailedLogin({ numberOfErrors: 2 });
  });

  it('should NOT be able to register with short password', () => {
    const invalidUser = mockUser({
      passwordOptions: {
        hasMinimumLength: false,
      },
    });

    cy.findByLabelText(inputFields.email).type(invalidUser.email);
    cy.findByLabelText(inputFields.confirmEmail).type(invalidUser.email);

    cy.findByLabelText(inputFields.password).type(invalidUser.password).blur();
    assertError({ errorMessage: validationErrorMessages.password });

    cy.findByLabelText(inputFields.confirmPassword).type(invalidUser.password);
    cy.findByLabelText(inputFields.firstName).type(invalidUser.firstName);
    cy.findByLabelText(inputFields.lastName).type(invalidUser.lastName);
    cy.findByLabelText(inputFields.zipcode).type(invalidUser.zipcode);
    cy.findByLabelText(inputFields.codeOfConduct).type(validUser.codeOfConduct);

    assertFailedLogin({ errorMessage: validationErrorMessages.password });
  });

  it('should NOT be able to register with password missing lowercase', () => {
    const invalidUser = mockUser({
      passwordOptions: {
        hasOneLowercaseChar: false,
      },
    });

    cy.findByLabelText(inputFields.email).type(invalidUser.email);
    cy.findByLabelText(inputFields.confirmEmail).type(invalidUser.email);

    cy.findByLabelText(inputFields.password).type(invalidUser.password).blur();
    assertError({ errorMessage: validationErrorMessages.password });

    cy.findByLabelText(inputFields.confirmPassword).type(invalidUser.password);
    cy.findByLabelText(inputFields.firstName).type(invalidUser.firstName);
    cy.findByLabelText(inputFields.lastName).type(invalidUser.lastName);
    cy.findByLabelText(inputFields.zipcode).type(invalidUser.zipcode);
    cy.findByLabelText(inputFields.codeOfConduct).type(validUser.codeOfConduct);

    assertFailedLogin({ errorMessage: validationErrorMessages.password });
  });

  it('should NOT be able to register with password missing uppercase', () => {
    const invalidUser = mockUser({
      passwordOptions: {
        hasOneUppercaseChar: false,
      },
    });

    cy.findByLabelText(inputFields.email).type(invalidUser.email);
    cy.findByLabelText(inputFields.confirmEmail).type(invalidUser.email);

    cy.findByLabelText(inputFields.password).type(invalidUser.password).blur();
    assertError({ errorMessage: validationErrorMessages.password });

    cy.findByLabelText(inputFields.confirmPassword).type(invalidUser.password);
    cy.findByLabelText(inputFields.firstName).type(invalidUser.firstName);
    cy.findByLabelText(inputFields.lastName).type(invalidUser.lastName);
    cy.findByLabelText(inputFields.zipcode).type(invalidUser.zipcode);
    cy.findByLabelText(inputFields.codeOfConduct).type(validUser.codeOfConduct);

    assertFailedLogin({ errorMessage: validationErrorMessages.password });
  });

  it('should NOT be able to register with password missing number', () => {
    const invalidUser = mockUser({
      passwordOptions: {
        hasOneNumber: false,
      },
    });

    cy.findByLabelText(inputFields.email).type(invalidUser.email);
    cy.findByLabelText(inputFields.confirmEmail).type(invalidUser.email);

    cy.findByLabelText(inputFields.password).type(invalidUser.password).blur();
    assertError({ errorMessage: validationErrorMessages.password });

    cy.findByLabelText(inputFields.confirmPassword).type(invalidUser.password);
    cy.findByLabelText(inputFields.firstName).type(invalidUser.firstName);
    cy.findByLabelText(inputFields.lastName).type(invalidUser.lastName);
    cy.findByLabelText(inputFields.zipcode).type(invalidUser.zipcode);
    cy.findByLabelText(inputFields.codeOfConduct).type(validUser.codeOfConduct);

    assertFailedLogin({ errorMessage: validationErrorMessages.password });
  });

  it('should NOT be able to register when blurring past confirmPassword', () => {
    cy.findByLabelText(inputFields.email).type(validUser.email);
    cy.findByLabelText(inputFields.confirmEmail).type(validUser.email);
    cy.findByLabelText(inputFields.password).type(validUser.password);

    cy.findByLabelText(inputFields.confirmPassword).focus().blur();
    assertError();

    cy.findByLabelText(inputFields.firstName).type(validUser.firstName);
    cy.findByLabelText(inputFields.lastName).type(validUser.lastName);
    cy.findByLabelText(inputFields.zipcode).type(validUser.zipcode);
    cy.findByLabelText(inputFields.codeOfConduct).type(validUser.codeOfConduct);

    assertFailedLogin();
  });

  it('should NOT be able to register when passwords do not match', () => {
    cy.findByLabelText(inputFields.email).type(validUser.email);
    cy.findByLabelText(inputFields.confirmEmail).type(validUser.email);
    cy.findByLabelText(inputFields.password).type(validUser.password);

    cy.findByLabelText(inputFields.confirmPassword).type(existingUser.password).blur();
    assertError({ errorMessage: validationErrorMessages.passwordsMatch });

    cy.findByLabelText(inputFields.firstName).type(validUser.firstName);
    cy.findByLabelText(inputFields.lastName).type(validUser.lastName);
    cy.findByLabelText(inputFields.zipcode).type(validUser.zipcode);
    cy.findByLabelText(inputFields.codeOfConduct).type(validUser.codeOfConduct);

    assertFailedLogin({ errorMessage: validationErrorMessages.passwordsMatch });
  });

  /**
   * FirstName & LastName Fields
   */
  it('should NOT be able to register when blurring past firstName', () => {
    cy.findByLabelText(inputFields.email).type(validUser.email);
    cy.findByLabelText(inputFields.confirmEmail).type(validUser.email);
    cy.findByLabelText(inputFields.password).type(validUser.password);
    cy.findByLabelText(inputFields.confirmPassword).type(validUser.password);

    cy.findByLabelText(inputFields.firstName).focus().blur();
    assertError();

    cy.findByLabelText(inputFields.lastName).type(validUser.lastName);
    cy.findByLabelText(inputFields.zipcode).type(validUser.zipcode);
    cy.findByLabelText(inputFields.codeOfConduct).type(validUser.codeOfConduct);

    assertFailedLogin();
  });

  it('should NOT be able to register when firstName contains only spaces', () => {
    cy.findByLabelText(inputFields.email).type(validUser.email);
    cy.findByLabelText(inputFields.confirmEmail).type(validUser.email);
    cy.findByLabelText(inputFields.password).type(validUser.password);
    cy.findByLabelText(inputFields.confirmPassword).type(validUser.password);

    cy.findByLabelText(inputFields.firstName).type('     ').blur();
    assertError();

    cy.findByLabelText(inputFields.lastName).type(validUser.lastName);
    cy.findByLabelText(inputFields.zipcode).type(validUser.zipcode);
    cy.findByLabelText(inputFields.codeOfConduct).type(validUser.codeOfConduct);

    assertFailedLogin();
  });

  it('should NOT be able to register when blurring past lastName', () => {
    cy.findByLabelText(inputFields.email).type(validUser.email);
    cy.findByLabelText(inputFields.confirmEmail).type(validUser.email);
    cy.findByLabelText(inputFields.password).type(validUser.password);
    cy.findByLabelText(inputFields.confirmPassword).type(validUser.password);
    cy.findByLabelText(inputFields.firstName).type(validUser.firstName);

    cy.findByLabelText(inputFields.lastName).focus().blur();
    assertError();

    cy.findByLabelText(inputFields.zipcode).type(validUser.zipcode);
    cy.findByLabelText(inputFields.codeOfConduct).type(validUser.codeOfConduct);

    assertFailedLogin();
  });

  it('should NOT be able to register when lastName contains only spaces', () => {
    cy.findByLabelText(inputFields.email).type(validUser.email);
    cy.findByLabelText(inputFields.confirmEmail).type(validUser.email);
    cy.findByLabelText(inputFields.password).type(validUser.password);
    cy.findByLabelText(inputFields.confirmPassword).type(validUser.password);
    cy.findByLabelText(inputFields.firstName).type(validUser.firstName);

    cy.findByLabelText(inputFields.lastName).type('     ').blur();
    assertError();

    cy.findByLabelText(inputFields.zipcode).type(validUser.zipcode);
    cy.findByLabelText(inputFields.codeOfConduct).type(validUser.codeOfConduct);

    assertFailedLogin();
  });

  /**
   * Zipcode field
   */
  it('should NOT be able to register when blurring past zipcode', () => {
    cy.findByLabelText(inputFields.email).type(validUser.email);
    cy.findByLabelText(inputFields.confirmEmail).type(validUser.email);
    cy.findByLabelText(inputFields.password).type(validUser.password);
    cy.findByLabelText(inputFields.confirmPassword).type(validUser.password);
    cy.findByLabelText(inputFields.firstName).type(validUser.firstName);
    cy.findByLabelText(inputFields.lastName).type(validUser.lastName);

    cy.findByLabelText(inputFields.zipcode).focus().blur();
    assertError();

    cy.findByLabelText(inputFields.codeOfConduct).type(validUser.codeOfConduct);

    assertFailedLogin();
  });

  it('should NOT be able to register when zipcode contains only spaces', () => {
    cy.findByLabelText(inputFields.email).type(validUser.email);
    cy.findByLabelText(inputFields.confirmEmail).type(validUser.email);
    cy.findByLabelText(inputFields.password).type(validUser.password);
    cy.findByLabelText(inputFields.confirmPassword).type(validUser.password);
    cy.findByLabelText(inputFields.firstName).type(validUser.firstName);
    cy.findByLabelText(inputFields.lastName).type(validUser.lastName);

    cy.findByLabelText(inputFields.zipcode).type('     ').blur();
    assertError();

    cy.findByLabelText(inputFields.codeOfConduct).type(validUser.codeOfConduct);

    assertFailedLogin();
  });

  it('should NOT be able to register when Code of Conduct is not agreed to', () => {
    cy.findByLabelText(inputFields.email).type(validUser.email);
    cy.findByLabelText(inputFields.confirmEmail).type(validUser.email);
    cy.findByLabelText(inputFields.password).type(validUser.password);
    cy.findByLabelText(inputFields.confirmPassword).type(validUser.password);
    cy.findByLabelText(inputFields.firstName).type(validUser.firstName);
    cy.findByLabelText(inputFields.lastName).type(validUser.lastName);
    cy.findByLabelText(inputFields.zipcode).type(validUser.zipcode);

    cy.findByLabelText(inputFields.codeOfConduct).focus().blur();
    assertError({ numberOfErrors: 1, errorMessage: validationErrorMessages.codeOfConduct });
    assertFailedLogin({ numberOfErrors: 1, errorMessage: validationErrorMessages.codeOfConduct });
  });

  /**
   * Registration without all fields
   */
  it('should NOT be able to register without filling all required fields', () => {
    assertFailedLogin({ numberOfErrors: 8 });
  });

  /**
   * Test Valid User
   */
  it('should be able to register with valid data', () => {
    cy.findByLabelText(inputFields.email).type(validUser.email);
    cy.findByLabelText(inputFields.confirmEmail).type(validUser.email);
    cy.findByLabelText(inputFields.password).type(validUser.password);
    cy.findByLabelText(inputFields.confirmPassword).type(validUser.password);
    cy.findByLabelText(inputFields.firstName).type(validUser.firstName);
    cy.findByLabelText(inputFields.lastName).type(validUser.lastName);
    cy.findByLabelText(inputFields.zipcode).type(validUser.zipcode);
    cy.findByLabelText(inputFields.codeOfConduct).type(validUser.codeOfConduct);
    cy.findByText('Submit').click();

    cy.url({ timeout: 20000 }).should('contain', '/profile/update');
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
