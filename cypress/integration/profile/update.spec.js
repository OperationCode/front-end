const goToNextStep = stepName => {
  cy.get('button[data-testid="Submit Step Button"]').click();
  cy.wait('@patchUser');
  cy.get('h3').should('have.text', stepName);
};

const goToPreviousStep = stepName => {
  cy.get('button[data-testid="Previous Step Button"]').click();
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
    cy.get('button[data-testid="Submit Multi-Step Form"]').click();
    cy.wait('@patchUser');
    cy.url().should('contain', '/profile');
    cy.url().should('not.contain', '/profile/update');
  });

  it(`should see initial values populated when going to profile update from login`, () => {
    cy.get('input[name="employmentStatus"]').should('have.value', 'fulltime');
    cy.get('input[name="companyName"]').should('have.value', 'Googles');
    cy.get('input[name="companyRole"]').should('have.value', 'CEO');

    goToNextStep(secondStepName);

    cy.get('input[name="militaryStatus"]').should('have.value', 'veteran');

    goToNextStep('Military Details');

    cy.get('input[name="branchOfService"]').should('have.value', 'army');
    cy.get('input[name="yearsOfService"]').should('have.value', '3');
    cy.get('input[name="payGrade"]').should('have.value', 'E20');

    goToNextStep('Technology');

    cy.get('input[name="programmingLanguages"]').should('have.value', '');
    cy.get('input[name="disciplines"]').should('have.value', '');
  });

  it(`should be able to navigate back and forth`, () => {
    goToNextStep(secondStepName);

    goToPreviousStep(firstStepName);
  });

  it(`should not allow step submissions if cookie becomes invalid during some step`, () => {
    goToNextStep(secondStepName);

    cy.clearCookies();

    cy.get('button[data-testid="Submit Step Button"]').click();
    cy.get('div[role="alert"]').should('have.text', 'Request failed with status code 401');
    cy.get('h3').should('have.text', secondStepName);
  });

  it(`should not show military step if military status is non-military`, () => {
    goToNextStep(secondStepName);

    cy.get('input#react-select-militaryStatus-input')
      .type('Not Applicable', { force: true })
      .type('{enter}');

    // confirms that the next step is NOT military details
    goToNextStep('Technology');
    goToPreviousStep('Military Status');

    cy.get('input#react-select-militaryStatus-input')
      .type('Veteran', { force: true })
      .type('{enter}');

    // confirms that next step IS military details
    goToNextStep('Military Details');
  });

  it(`should not allow negative in the years of service input`, () => {
    goToNextStep(secondStepName);
    goToNextStep(thirdStepName);

    cy.get('input[name="yearsOfService"]')
      .clear()
      .type('-1');

    cy.get('button[data-testid="Submit Step Button"]').click();

    cy.get('div[role="alert"]').should('have.text', 'Enter a number between 1 and 40.');
  });

  it(`should not allow numbers greater than 40 in the years of service input`, () => {
    goToNextStep(secondStepName);
    goToNextStep(thirdStepName);

    cy.get('input[name="yearsOfService"]')
      .clear()
      .type('41');

    cy.get('button[data-testid="Submit Step Button"]').click();

    cy.get('div[role="alert"]').should('have.text', 'Enter a number between 1 and 40.');
  });
});
