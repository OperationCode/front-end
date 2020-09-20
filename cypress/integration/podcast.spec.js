describe('podcast', () => {
  beforeEach(() => {
    cy.server();
    cy.visitAndWaitFor('/podcast');
    cy.get('h1').should('have.text', 'Podcast');
  });

  it('renders many podcast cards', () => {
    cy.findAllByTestId('Podcast Card').should('have.length.greaterThan', 0);
  });
});
