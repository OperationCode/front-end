import existingUser from 'test-utils/mocks/existingUser';
import { mockUser } from 'test-utils/mockGenerators/mockUser';
import { validationErrorMessages } from 'common/constants/messages';
import { SUCCESS_PAGE_MESSAGE } from 'common/constants/testIDs';

const getValidUser = () => mockUser();
const inputFields = {
  email: 'Email*',
  confirmEmail: 'Confirm Email*',
  firstName: 'First Name*',
  lastName: 'Last Name*',
  zipcode: 'Zipcode*',
  codeOfConduct: /Code of Conduct/,
  slackGuidelines: /Slack Community Guidelines/,
};

const assertError = ({
  numberOfErrors = 1,
  errorMessage = validationErrorMessages.required,
} = {}) => {
  cy.get('#__next') // // avoid rest of UI because next announcer exists
    .findAllByRole('alert')
    .should('have.length', numberOfErrors)
    .should('contain', errorMessage);
};

const assertFailedLogin = ({
  numberOfErrors = 1,
  errorMessage = validationErrorMessages.required,
} = {}) => {
  cy.findByText('Submit').click();
  cy.url().should('contain', '/join');
  assertError({ numberOfErrors, errorMessage });
  cy.getCookies().should('have.length', 0);
};

describe('join', () => {
  beforeEach(() => {
    cy.server();
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
    const validUser = getValidUser();
    cy.findByLabelText(inputFields.email).focus();
    cy.findByLabelText(inputFields.email).blur();
    assertError();

    cy.findByLabelText(inputFields.confirmEmail).type(validUser.email);
    cy.findByLabelText(inputFields.firstName).type(validUser.firstName);
    cy.findByLabelText(inputFields.lastName).type(validUser.lastName);
    cy.findByLabelText(inputFields.zipcode).type(validUser.zipcode);
    cy.findByLabelText(inputFields.codeOfConduct).type(validUser.codeOfConduct);
    cy.findByLabelText(inputFields.slackGuidelines).type(validUser.slackGuidelines);

    assertFailedLogin({ numberOfErrors: 2 });
  });

  it('should NOT be able to register when email contains only spaces', () => {
    const validUser = getValidUser();
    cy.findByLabelText(inputFields.email).type('   ');
    cy.findByLabelText(inputFields.email).blur();
    assertError();

    cy.findByLabelText(inputFields.confirmEmail).type(validUser.email);
    cy.findByLabelText(inputFields.firstName).type(validUser.firstName);
    cy.findByLabelText(inputFields.lastName).type(validUser.lastName);
    cy.findByLabelText(inputFields.zipcode).type(validUser.zipcode);
    cy.findByLabelText(inputFields.codeOfConduct).type(validUser.codeOfConduct);
    cy.findByLabelText(inputFields.slackGuidelines).type(validUser.slackGuidelines);

    assertFailedLogin({ numberOfErrors: 2 });
  });

  it('should NOT be able to register with an invalid email', () => {
    const validUser = getValidUser();
    const invalidUser = mockUser('invalidemail@.com');

    cy.findByLabelText(inputFields.email).type(invalidUser.email);
    cy.findByLabelText(inputFields.email).blur();
    assertError({ errorMessage: validationErrorMessages.email });

    cy.findByLabelText(inputFields.confirmEmail).type(invalidUser.email);
    cy.findByLabelText(inputFields.firstName).type(invalidUser.firstName);
    cy.findByLabelText(inputFields.lastName).type(invalidUser.lastName);
    cy.findByLabelText(inputFields.zipcode).type(invalidUser.zipcode);
    cy.findByLabelText(inputFields.codeOfConduct).type(validUser.codeOfConduct);
    cy.findByLabelText(inputFields.slackGuidelines).type(validUser.slackGuidelines);

    assertFailedLogin({ errorMessage: validationErrorMessages.email });
  });

  it('should NOT be able to register when blurring past confirmEmail', () => {
    const validUser = getValidUser();
    cy.findByLabelText(inputFields.email).type(validUser.email);

    cy.findByLabelText(inputFields.confirmEmail).focus();
    cy.findByLabelText(inputFields.confirmEmail).blur();
    assertError();

    cy.findByLabelText(inputFields.firstName).type(validUser.firstName);
    cy.findByLabelText(inputFields.lastName).type(validUser.lastName);
    cy.findByLabelText(inputFields.zipcode).type(validUser.zipcode);
    cy.findByLabelText(inputFields.codeOfConduct).type(validUser.codeOfConduct);
    cy.findByLabelText(inputFields.slackGuidelines).type(validUser.slackGuidelines);

    assertFailedLogin();
  });

  it('should NOT be able to register when emails do not match', () => {
    const validUser = getValidUser();
    cy.findByLabelText(inputFields.email).type(validUser.email);
    cy.findByLabelText(inputFields.confirmEmail).type(existingUser.email);

    // Need to do next input too so we blur off the email fields allowing errors to render
    cy.findByLabelText(inputFields.firstName).type(validUser.firstName);

    assertError({ errorMessage: validationErrorMessages.emailsMatch });

    cy.findByLabelText(inputFields.lastName).type(validUser.lastName);
    cy.findByLabelText(inputFields.zipcode).type(validUser.zipcode);
    cy.findByLabelText(inputFields.codeOfConduct).type(validUser.codeOfConduct);
    cy.findByLabelText(inputFields.slackGuidelines).type(validUser.slackGuidelines);

    assertFailedLogin({ errorMessage: validationErrorMessages.emailsMatch });
  });

  it('should NOT be able to register with an existing email', () => {
    const validUser = getValidUser();
    cy.findByLabelText(inputFields.email).type(existingUser.email);
    cy.findByLabelText(inputFields.confirmEmail).type(existingUser.email);
    cy.findByLabelText(inputFields.firstName).type(existingUser.firstName);
    cy.findByLabelText(inputFields.lastName).type(existingUser.lastName);
    cy.findByLabelText(inputFields.zipcode).type(existingUser.zipcode);
    cy.findByLabelText(inputFields.codeOfConduct).type(validUser.codeOfConduct);
    cy.findByLabelText(inputFields.slackGuidelines).type(validUser.slackGuidelines);

    assertFailedLogin({ errorMessage: validationErrorMessages.emailExists });
  });

  /**
   * FirstName & LastName Fields
   */
  it('should NOT be able to register when blurring past firstName', () => {
    const validUser = getValidUser();
    cy.findByLabelText(inputFields.email).type(validUser.email);
    cy.findByLabelText(inputFields.confirmEmail).type(validUser.email);

    cy.findByLabelText(inputFields.firstName).focus();
    cy.findByLabelText(inputFields.firstName).blur();
    assertError();

    cy.findByLabelText(inputFields.lastName).type(validUser.lastName);
    cy.findByLabelText(inputFields.zipcode).type(validUser.zipcode);
    cy.findByLabelText(inputFields.codeOfConduct).type(validUser.codeOfConduct);
    cy.findByLabelText(inputFields.slackGuidelines).type(validUser.slackGuidelines);

    assertFailedLogin();
  });

  it('should NOT be able to register when firstName contains only spaces', () => {
    const validUser = getValidUser();
    cy.findByLabelText(inputFields.email).type(validUser.email);
    cy.findByLabelText(inputFields.confirmEmail).type(validUser.email);

    cy.findByLabelText(inputFields.firstName).type('     ');
    cy.findByLabelText(inputFields.firstName).blur();
    assertError();

    cy.findByLabelText(inputFields.lastName).type(validUser.lastName);
    cy.findByLabelText(inputFields.zipcode).type(validUser.zipcode);
    cy.findByLabelText(inputFields.codeOfConduct).type(validUser.codeOfConduct);
    cy.findByLabelText(inputFields.slackGuidelines).type(validUser.slackGuidelines);

    assertFailedLogin();
  });

  it('should NOT be able to register when blurring past lastName', () => {
    const validUser = getValidUser();
    cy.findByLabelText(inputFields.email).type(validUser.email);
    cy.findByLabelText(inputFields.confirmEmail).type(validUser.email);
    cy.findByLabelText(inputFields.firstName).type(validUser.firstName);

    cy.findByLabelText(inputFields.lastName).focus();
    cy.findByLabelText(inputFields.lastName).blur();
    assertError();

    cy.findByLabelText(inputFields.zipcode).type(validUser.zipcode);
    cy.findByLabelText(inputFields.codeOfConduct).type(validUser.codeOfConduct);
    cy.findByLabelText(inputFields.slackGuidelines).type(validUser.slackGuidelines);

    assertFailedLogin();
  });

  it('should NOT be able to register when lastName contains only spaces', () => {
    const validUser = getValidUser();
    cy.findByLabelText(inputFields.email).type(validUser.email);
    cy.findByLabelText(inputFields.confirmEmail).type(validUser.email);
    cy.findByLabelText(inputFields.firstName).type(validUser.firstName);

    cy.findByLabelText(inputFields.lastName).type('     ');
    cy.findByLabelText(inputFields.lastName).blur();
    assertError();

    cy.findByLabelText(inputFields.zipcode).type(validUser.zipcode);
    cy.findByLabelText(inputFields.codeOfConduct).type(validUser.codeOfConduct);
    cy.findByLabelText(inputFields.slackGuidelines).type(validUser.slackGuidelines);

    assertFailedLogin();
  });

  /**
   * Zipcode field
   */
  it('should NOT be able to register when blurring past zipcode', () => {
    const validUser = getValidUser();
    cy.findByLabelText(inputFields.email).type(validUser.email);
    cy.findByLabelText(inputFields.confirmEmail).type(validUser.email);
    cy.findByLabelText(inputFields.firstName).type(validUser.firstName);
    cy.findByLabelText(inputFields.lastName).type(validUser.lastName);

    cy.findByLabelText(inputFields.zipcode).focus();
    cy.findByLabelText(inputFields.zipcode).blur();
    assertError();

    cy.findByLabelText(inputFields.codeOfConduct).type(validUser.codeOfConduct);
    cy.findByLabelText(inputFields.slackGuidelines).type(validUser.slackGuidelines);

    assertFailedLogin();
  });

  it('should NOT be able to register when zipcode contains only spaces', () => {
    const validUser = getValidUser();
    cy.findByLabelText(inputFields.email).type(validUser.email);
    cy.findByLabelText(inputFields.confirmEmail).type(validUser.email);
    cy.findByLabelText(inputFields.firstName).type(validUser.firstName);
    cy.findByLabelText(inputFields.lastName).type(validUser.lastName);

    cy.findByLabelText(inputFields.zipcode).type('     ');
    cy.findByLabelText(inputFields.zipcode).blur();
    assertError();

    cy.findByLabelText(inputFields.codeOfConduct).type(validUser.codeOfConduct);
    cy.findByLabelText(inputFields.slackGuidelines).type(validUser.slackGuidelines);

    assertFailedLogin();
  });

  it('should NOT be able to register when Code of Conduct is not agreed to', () => {
    const validUser = getValidUser();
    cy.findByLabelText(inputFields.email).type(validUser.email);
    cy.findByLabelText(inputFields.confirmEmail).type(validUser.email);
    cy.findByLabelText(inputFields.firstName).type(validUser.firstName);
    cy.findByLabelText(inputFields.lastName).type(validUser.lastName);
    cy.findByLabelText(inputFields.zipcode).type(validUser.zipcode);

    cy.findByLabelText(inputFields.codeOfConduct).focus();
    cy.findByLabelText(inputFields.codeOfConduct).blur();
    cy.findByLabelText(inputFields.slackGuidelines).type(validUser.slackGuidelines);

    assertError({ numberOfErrors: 1, errorMessage: validationErrorMessages.codeOfConduct });
    assertFailedLogin({ numberOfErrors: 1, errorMessage: validationErrorMessages.codeOfConduct });
  });

  it('should NOT be able to register when Slack Community Guidelines is not agreed to', () => {
    const validUser = getValidUser();
    cy.findByLabelText(inputFields.email).type(validUser.email);
    cy.findByLabelText(inputFields.confirmEmail).type(validUser.email);
    cy.findByLabelText(inputFields.firstName).type(validUser.firstName);
    cy.findByLabelText(inputFields.lastName).type(validUser.lastName);
    cy.findByLabelText(inputFields.zipcode).type(validUser.zipcode);
    cy.findByLabelText(inputFields.codeOfConduct).type(validUser.codeOfConduct);

    cy.findByLabelText(inputFields.slackGuidelines).focus();
    cy.findByLabelText(inputFields.slackGuidelines).blur();

    assertError({ numberOfErrors: 1, errorMessage: validationErrorMessages.slackGuidelines });
    assertFailedLogin({ numberOfErrors: 1, errorMessage: validationErrorMessages.slackGuidelines });
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
    const validUser = getValidUser();
    cy.findByLabelText(inputFields.email).type(validUser.email);
    cy.findByLabelText(inputFields.confirmEmail).type(validUser.email);
    cy.findByLabelText(inputFields.firstName).type(validUser.firstName);
    cy.findByLabelText(inputFields.lastName).type(validUser.lastName);
    cy.findByLabelText(inputFields.zipcode).type(validUser.zipcode);
    cy.findByLabelText(inputFields.codeOfConduct).type(validUser.codeOfConduct);
    cy.findByLabelText(inputFields.slackGuidelines).type(validUser.slackGuidelines);
    cy.findByText('Submit').click();

    cy.url({ timeout: 20000 }).should('contain', '/join/form');
    cy.get('h1').should('have.text', 'Update Profile');

    // Professional Details
    cy.findByLabelText('Employment Status*')
      .should('exist')
      .type('Full-Time{enter}', { force: true });
    cy.findByLabelText('Company Name').should('exist').type('Test Company');
    cy.findByLabelText('Company Role').should('exist').type('Test Title');
    cy.get('form').submit();

    // Military Status
    cy.findByLabelText('Military Affiliation*').should('exist').type('Non{enter}', { force: true });
    cy.get('form').submit();

    // Assert that we see Personal Details (not Military Details)
    cy.get('form').findByText('Personal Details').should('exist');

    // Go back
    cy.get('form').findAllByRole('button').filter('[type="button"]').click();

    // Military Status
    cy.findByLabelText('Military Affiliation*')
      .should('exist')
      .type('Active{enter}', { force: true });
    cy.get('form').submit();

    // Military Details
    cy.findByLabelText('Branch Of Service*').should('exist').type('Army{enter}', { force: true });
    cy.findByLabelText('Pay Grade*').should('exist').type('E1-E5{enter}', { force: true });
    cy.get('form').submit();

    // Personal Details
    cy.findByLabelText('Join Reason*')
      .should('exist')
      .type('I’d like access to jobs{enter}', { force: true });
    cy.findByLabelText('Join Reason*').type('I’d like access to re{enter}', { force: true });
    cy.findByLabelText('Gender*').should('exist').type('Male{enter}', { force: true });
    cy.findByLabelText('Ethnicity*').should('exist').type('Caucasian{enter}', { force: true });
    cy.findByLabelText('Ethnicity*').type('Hispanic{enter}', { force: true });
    cy.findByLabelText('Education Level*')
      .should('exist')
      .type('High school{enter}', { force: true });
    cy.get('form').submit();

    // Success UI
    cy.findByTestId(SUCCESS_PAGE_MESSAGE).should('exist');
  });
});
