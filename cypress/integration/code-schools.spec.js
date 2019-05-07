describe('code schools', function() {
  beforeEach(() => {
    cy.server();
    cy.route('GET', '/api/v1/code_schools').as('codeSchools');

    cy.visitAndWaitFor('/code_schools');

    cy.get('h1').should('have.text', 'Code Schools');
  });

  it('should render many code school cards', () => {
    cy.wait('@codeSchools');

    // 40 is arbitrary, but it proves that the API is working and leading to rendered content
    cy.get('[data-testid="SchoolCard"]').should('have.length.greaterThan', 40);
  });
});
