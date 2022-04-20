describe('team', () => {
  beforeEach(() => {
    cy.server();
    cy.visitAndWaitFor('/team');
    cy.get('h1').should('have.text', 'The Team');
  });

  it('renders many board members', () => {
    // 3 is arbitrary, but it confirms that the API is working
    cy.get('article').should('have.length.greaterThan', 3);
  });
});
