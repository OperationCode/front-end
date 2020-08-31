import { validationErrorMessages } from '../../common/constants/messages';
import existingUser from '../../test-utils/mocks/existingUser';
import mockUser from '../../test-utils/mockGenerators/mockUser';
import mockPassword from '../../test-utils/mockGenerators/mockPassword';

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
   * Test Valid User
   */
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

  /**
   * Test Invalid Entries
   */

  /**
   * E-mail & ConfrimEmail fields
   */
  it('should display required error message when blurring past email', () => {
    cy.get(inputFields.email).focus().blur();

    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.required);
  });

  it('should display required error message when email contains only spaces', () => {
    cy.get(inputFields.firstName).type('   ').blur();

    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.required);
  });

  it('should display an invalid error message with an invalid email', () => {
    cy.get(inputFields.email).type('invalidemail@.com').blur();

    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.email);
  });

  it('should display required error message when blurring past confirmEmail', () => {
    cy.get(inputFields.confirmEmail).focus().blur();

    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.required);
  });

  it('should display email mismatch error when emails do not match', () => {
    const newUser = mockUser();

    cy.get(inputFields.email).type(newUser.email);
    cy.get(inputFields.confirmEmail).type(existingUser.email).blur();

    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.emailsMatch);
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
  it('should display required error when blurring past password', () => {
    cy.get(inputFields.password).focus().blur();

    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.required);
  });

  it('should display strength error with a short password', () => {
    const newPassword = mockPassword({ hasMinimumLength: false });

    cy.get(inputFields.password).type(newPassword).blur();

    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.password);
  });

  it('should display strength error with a lengthy invalid password', () => {
    const password = mockPassword({
      hasOneLoweraseChar: false,
      hasOneUppercaseChar: false,
      hasOneNumber: false,
    });

    cy.get(inputFields.password).type(password).blur();

    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.password);
  });

  it('should display required error when blurring past confirmPassword', () => {
    cy.get(inputFields.confirmPassword).focus().blur();

    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.required);
  });

  it('should display passwordMatch error when passwords do not match', () => {
    const password = mockPassword();

    cy.get(inputFields.password).type(password);
    cy.get(inputFields.confirmPassword).type(`${password}a`).blur();

    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.passwordsMatch);
  });

  /**
   * FirstName & LastName Fields
   */
  it('should display required error message when blurring past first name', () => {
    cy.get(inputFields.firstName).focus().blur();

    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.required);
  });

  it('should display required error message when first name contains only spaces', () => {
    cy.get(inputFields.firstName).type('   ').blur();

    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.required);
  });

  it('should display required error message when blurring past last name', () => {
    cy.get(inputFields.lastName).focus().blur();

    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.required);
  });

  it('should display required error message when last name contains only spaces', () => {
    cy.get(inputFields.lastName).type('   ').blur();

    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.required);
  });

  /**
   * Zipcode field
   */
  it('should display required error when blurring past zipcode', () => {
    cy.get(inputFields.zipcode).focus().blur();

    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.required);
  });

  it('should display required error when zip code contains only spaces', () => {
    cy.get(inputFields.zipcode).type('     ').blur();

    cy.get('div[role="alert"]')
      .should('have.length', 1)
      .should('contain', validationErrorMessages.required);
  });

  /**
   * Registration without all fields
   */
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
