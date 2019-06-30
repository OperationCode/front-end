describe('podcasts', () => {
  beforeEach(() => {
    cy.server();
    cy.visitAndWaitFor('/podcasts');
    cy.get('h1').should('have.text', 'Podcasts');
  });

  it('renders many podcast cards', () => {
    cy.get('[data-testid="Card"]').should('have.length.greaterThan', 30);
  });
});
