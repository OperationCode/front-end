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

  it('should render Cincy and Tech Elevator after selecting Ohio', () => {
    cy.wait('@codeSchools');
    cy.get('input#react-select-state_select-input')
      .type('Ohio', { force: true })
      .type('{enter}');

    cy.get('[data-testid="SchoolCard"]').should('have.length', 2);
  });

  it('should render GI Bill accepted schools after hitting VA button', () => {
    cy.wait('@codeSchools');
    cy.contains('VA Approved Schools').click();

    cy.get('[data-testid="SchoolCard"]').should('have.length.greaterThan', 20);
  });

  // /Online Schools test

  it('should render no schools after selecting Alaska', () => {
    cy.wait('@codeSchools');
    cy.get('input#react-select-state_select-input')
      .type('Alaska', { force: true })
      .type('{enter}');

    cy.get('[data-testid="SchoolCard"]').should('have.length', 0);
  });
});
