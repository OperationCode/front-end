describe('code schools', function() {
  beforeEach(() => {
    cy.server();
    cy.route('GET', '/api/v1/code_schools').as('codeSchools');

    cy.visitAndWaitFor('/code_schools');

    cy.get('h1').should('have.text', 'Code Schools');
  });

  describe('render code school cards', () => {
    it('should render code school cards', () => {
      cy.get('div.code_schools_schoolCardsWrapper__SXWXI');
    });
  });
});
