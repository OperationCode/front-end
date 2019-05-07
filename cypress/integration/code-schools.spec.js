describe('code schools', function() {
  beforeEach(() => {
    cy.server();
    cy.route('GET', '/api/v1/code_schools').as('codeSchools');
    cy.visitAndWaitFor('/code_schools');
    cy.get('h1').should('have.text', 'Code Schools');
    cy.wait('@codeSchools');
  });

  it('should render many code school cards', () => {
    // 40 is arbitrary, but it proves that the API is working and leading to rendered content
    cy.get('[data-testid="SchoolCard"]').should('have.length.greaterThan', 40);
  });

  it('should render Cincy and Tech Elevator after selecting Ohio', () => {
    cy.get('input#react-select-state_select-input')
      .type('Ohio', { force: true })
      .type('{enter}');

    cy.get('[data-testid="SchoolCard"]')
      .should('contain', 'Cincy Code IT Bootcamps')
      .and('exist')
      .should('contain', 'Tech Elevator')
      .and('exist');
  });

  it('should only renders GI Bill accepted schools after clicking on VA Approved Schools', () => {
    cy.contains('VA Approved Schools').click();

    cy.get('[data-testid="SchoolCard"]').each(card => {
      cy.wrap(card)
        .find('[data-testid="GI Bill Ribbon"]')
        .should('exist');
    });
  });

  // /Online Schools test

  it('should render no schools after selecting Alaska', () => {
    cy.get('input#react-select-state_select-input')
      .type('Alaska', { force: true })
      .type('{enter}');

    cy.get('[data-testid="SchoolCard"]').should('have.length', 0);
  });
});
