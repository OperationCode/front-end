describe('login', function() {
  it('should be able to login with valid credentials', () => {
    cy.clearCookies();
    cy.visitAndWaitFor('/login');

    cy.getCookies().should('have.length', 0);
    cy.get('h1').should('have.text', 'Login');
    cy.get('input#email').type('kylemh.email12@gmail.com');
    cy.get('input#password').type('Testing1');
    cy.get('button[type="submit"]').click();

    cy.url().should('contain', '/profile');
    cy.get('h1').should('have.text', 'Profile');
    cy.get('p').contains('Hello Kyle!');
    cy.getCookies()
      .should('have.length', 4)
      .then(cookies => {
        expect(cookies[0].value).to.contain('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9');
        expect(cookies[1].value).to.equal('Kyle');
        expect(cookies[2].value).to.equal('Holmberg');
        expect(cookies[3].value).to.equal('90630');
      });
  });
});
