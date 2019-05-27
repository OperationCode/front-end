describe('profile/update', () => {
  beforeEach(() => {
    cy.server();
    cy.login();
    cy.route('PATCH', 'auth/profile').as('patchUser');

    cy.visitAndWaitFor('/profile/update');
    cy.get('h1').should('have.text', 'Update Profile');
  });

  it(`should show up after login`, () => {
    cy.get('h2').should('have.text', 'Professional Details');
  });
});
