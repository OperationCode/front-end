import { networkErrorMessages } from 'common/constants/messages';
import {
  MULTI_STEP_STEP_BUTTON,
  MULTI_STEP_PREVIOUS_BUTTON,
  MULTI_STEP_SUBMIT_BUTTON,
  ALERT,
  INPUT_ERROR,
  PROFILE_GREETING,
} from 'common/constants/testIDs';

const goToNextStep = stepName => {
  cy.findByTestId(MULTI_STEP_STEP_BUTTON).click();
  cy.wait('@patchUser');
  cy.get('h3').should('have.text', stepName);
};

const goToPreviousStep = stepName => {
  cy.findByTestId(MULTI_STEP_PREVIOUS_BUTTON).click();
  cy.get('h3').should('have.text', stepName);
};

const firstStepName = 'Professional Details';
const secondStepName = 'Military Status';
const thirdStepName = 'Military Details';

describe(`profile/update (unauthorized)`, () => {
  it(`should redirect to login if not authorized`, () => {
    // assert that route can't be reached without being authorized
    cy.visit('/profile/update');
    cy.url().should('contain', '/login');
    cy.url().should('not.contain', '/profile/update');
    cy.get('h1').should('have.text', 'Login'); // redirect confirmed
  });
});

describe(`profile/update (from login)`, () => {
  beforeEach(() => {
    cy.server();
    cy.login();
    cy.route('PATCH', 'auth/profile/').as('patchUser');

    cy.visitAndWaitFor('/profile/update');
    cy.get('h1').should('have.text', 'Update Profile');
    cy.get('h3').should('have.text', firstStepName);
  });

  after(() => cy.clearCookies());

  it(`should route to profile after completing entire profile update (happy path)`, () => {
    goToNextStep(secondStepName);
    goToNextStep('Military Details');
    goToNextStep('Technology');
    cy.findByTestId(MULTI_STEP_SUBMIT_BUTTON).click();
    cy.findByTestId(PROFILE_GREETING).should('be.visible');
    cy.url().should('contain', '/profile');
    cy.url().should('not.contain', '/profile/update');
  });

  it(`should see initial values populated when going to profile update from login`, () => {
    cy.findSelectByLabelText('Employment Status*').should('have.value', 'fulltime');
    cy.findByLabelText('Company Name').should('have.value', 'Googles');
    cy.findByLabelText('Company Role').should('have.value', 'CEO');

    goToNextStep(secondStepName);

    cy.findSelectByLabelText('Military Status*').should('have.value', 'veteran');

    goToNextStep('Military Details');

    cy.findSelectByLabelText('Branch Of Service*').should('have.value', 'army');
    cy.findByLabelText('Years Of Service*').should('have.value', '3');
    cy.findByLabelText('Pay Grade*').should('have.value', 'E20');

    goToNextStep('Technology');

    cy.findSelectByLabelText('Programming Languages That Interest You').should('have.value', '');
    cy.findSelectByLabelText('Disciplines That Interest You').should('have.value', '');
  });

  it(`should be able to navigate back and forth`, () => {
    goToNextStep(secondStepName);

    goToPreviousStep(firstStepName);
  });

  it(`should not allow step submissions if cookie becomes invalid during some step`, () => {
    goToNextStep(secondStepName);

    cy.clearCookies();

    cy.findByTestId(MULTI_STEP_STEP_BUTTON).click();
    cy.findByTestId(ALERT).should('have.text', 'Authentication credentials were not provided.');
    cy.get('h3').should('have.text', secondStepName);
  });

  it(`should not show military step if military status is non-military`, () => {
    goToNextStep(secondStepName);

    cy.findSelectByLabelText('Military Status*', { edit: true })
      .type('Not Applicable', { force: true })
      .type('{enter}');

    // confirms that the next step is NOT military details
    goToNextStep('Technology');
    goToPreviousStep('Military Status');

    cy.findSelectByLabelText('Military Status*', { edit: true })
      .type('Veteran', { force: true })
      .type('{enter}');

    // confirms that next step IS military details
    goToNextStep('Military Details');
  });

  it(`should not allow negative in the years of service input`, () => {
    goToNextStep(secondStepName);
    goToNextStep(thirdStepName);

    cy.findByLabelText('Years Of Service*').clear().type('-1');

    cy.findByTestId(MULTI_STEP_STEP_BUTTON).click();

    cy.findByTestId(INPUT_ERROR).first().should('have.text', 'Enter a number between 1 and 40.');
  });

  it(`should not allow numbers greater than 40 in the years of service input`, () => {
    goToNextStep(secondStepName);
    goToNextStep(thirdStepName);

    cy.findByLabelText('Years Of Service*').clear().type('41');

    cy.findByTestId(MULTI_STEP_STEP_BUTTON).click();

    cy.findByTestId(INPUT_ERROR).first().should('have.text', 'Enter a number between 1 and 40.');
  });
});

describe(`profile/update (from login) [server errors]`, () => {
  beforeEach(() => {
    cy.server({ method: 'PATCH', status: 500, response: {} });
    cy.login();
  });

  after(() => cy.clearCookies());

  it('should render an uncaught server error', () => {
    const ErrorAPICall = 'PATCH_USER_FAIL_UNCAUGHT';

    cy.route({ url: 'auth/profile/' }).as(ErrorAPICall);

    cy.visitAndWaitFor('/profile/update');

    cy.findByTestId(MULTI_STEP_STEP_BUTTON).click();

    cy.findByTestId(ALERT).should('have.text', networkErrorMessages.serverDown);
  });

  // TODO: Get this working!
  // @see https://github.com/cypress-io/cypress/issues/5840
  // it('should render a caught server error', () => {
  //   const ErrorAPICall = 'PATCH_USER_FAIL_CAUGHT';

  //   const error = 'Fix this shit.';

  //   cy.route({
  //     method: 'PATCH',
  //     url: 'auth/profile/',
  //     status: 500,
  //     response: {
  //       data: {
  //         error,
  //       },
  //     },
  //   }).as(ErrorAPICall);

  //   cy.findByTestId(SubmitButtonID).click();
  //   cy.wait(`@${ErrorAPICall}`);

  //   cy.findByTestId(ALERT).should('have.text', error);
  // });
});
