describe('login', function() {
  it('should be able to login with valid credentials', () => {
    cy.server();
    cy.route('POST', '/api/v1/sessions').as('postLogin');

    cy.clearCookies();
    cy.visitAndWaitFor('/login');

    cy.getCookies().should('have.length', 0);
    cy.get('h1').should('have.text', 'Login');
    cy.get('input#email').type('kylemh.email12@gmail.com');
    cy.get('input#password').type('Testing1');
    cy.get('button[type="submit"]').click();

    cy.wait('@postLogin');

    cy.url().should('contain', '/profile');
    cy.get('h1').should('have.text', 'Profile');
    cy.get('p').contains('Hello Kyle Holmberg!');

    cy.getCookies().then(cookies => {
      expect(
        cookies.some(({ value }) => value.includes('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9')),
      ).to.equal(true);
      expect(cookies.some(({ value }) => value === 'Kyle')).to.be.true;
      expect(cookies.some(({ value }) => value === 'Holmberg')).to.be.true;
      expect(cookies.some(({ value }) => value === '97214')).to.be.true;
    });
  });
});
