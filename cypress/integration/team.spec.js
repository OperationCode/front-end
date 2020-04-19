describe('team', () => {
  beforeEach(() => {
    cy.server();
    cy.visitAndWaitFor('/team');
    cy.get('h1').should('have.text', 'The Team');
  });

  it('renders many board members', () => {
    // 5 is arbitrary, but it confirms that the API is working
    cy.get('article').should('have.length.greaterThan', 5);
  });

  it('renders board members with their image on display', () => {
    cy.get('article').each(boardMemberCard => {
      cy.wrap(boardMemberCard).find('img').should('exist').should('have.attr', 'alt');
    });
  });
});
