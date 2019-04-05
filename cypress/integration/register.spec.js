beforeEach(() => {
  cy.clearCookies();
  cy.visit('/join');
});

const createRandomEmail = () => {
  const listOfTLDs = ['com', 'org', 'gov.uk', 'gov.us', 'edu', 'io', 'dev', 'us', 'es', 'co'];

  const randomString1 = Math.random()
    .toString(36)
    .substring(2);

  const randomString2 = Math.random()
    .toString(36)
    .substring(2);

  const randomTLD = listOfTLDs[Math.floor(Math.random() * listOfTLDs.length)];

  return `${randomString1}@${randomString2}.${randomTLD}`;
};

describe('register', function() {
  it('should be able to register with valid data', () => {
    // Fake email generator with rare conflicts

    const newUser = {
      email: createRandomEmail(),
      password: 'Testing1',
      firstName: 'Test',
      lastName: 'User',
      zipcode: 12345,
    };

    cy.getCookies().should('have.length', 0);
    cy.get('h1').should('have.text', 'Join');
    cy.get('input#email').type(newUser.email);
    cy.get('input#confirm-email').type(newUser.email);
    cy.get('input#password').type(newUser.password);
    cy.get('input#confirm-password').type(newUser.password);
    cy.get('input#firstName').type(newUser.firstName);
    cy.get('input#lastName').type(newUser.lastName);
    cy.get('input#zipcode').type(newUser.zipcode);
    cy.get('button[type="submit"]').click();
    cy.get('h1').should('have.text', 'Profile');
    cy.get('p').contains(`Hello ${newUser.firstName}!`);
    cy.getCookies()
      .should('have.length', 4)
      .then(cookies => {
        expect(cookies[1].value).to.equal(newUser.firstName);
        expect(cookies[2].value).to.equal(newUser.lastName);
        expect(cookies[3].value).to.equal(`${newUser.zipcode}`); // number to string 🤷‍♂️
      });
  });
});
