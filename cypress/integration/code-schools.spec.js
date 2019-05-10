describe('code schools', function() {
  const ReactSelectSelector = 'input#react-select-state_select-input';

  beforeEach(() => {
    cy.server();
    cy.visitAndWaitFor('/code_schools');
    cy.get('h1').should('have.text', 'Code Schools');
  });

  it('renders many code school cards', () => {
    // 40 is arbitrary, but it proves that the API is working and leading to rendered content
    cy.get('[data-testid="SchoolCard"]').should('have.length.greaterThan', 40);
  });

  it('renders "Cincy Code IT Bootcamps" and "Tech Elevator" after filtering for Ohio', () => {
    cy.get(ReactSelectSelector)
      .type('Ohio', { force: true })
      .type('{enter}');

    cy.get('[data-testid="SchoolCard Name: Cincy Code IT Bootcamps"]').should('exist');
    cy.get('[data-testid="SchoolCard Name: Tech Elevator"]').should('exist');
  });

  it('only renders schools that accept GI Bill after clicking on "VA Approved Schools"', () => {
    cy.contains('VA Approved Schools').click();

    cy.get('[data-testid="SchoolCard"]').each(card => {
      cy.wrap(card)
        .find('[data-testid="GI Bill Ribbon"]')
        .should('exist');
    });
  });

  it('only renders code schools with an online option after clicking "Online Schools"', () => {
    cy.contains('Online Schools').click();

    cy.get('[data-testid="SchoolCard"]').each(card => {
      cy.wrap(card)
        .get('[data-testid="School has online"]')
        .should('exist');
    });
  });

  it('renders no code school cards after filtering for Alaska', () => {
    cy.get(ReactSelectSelector)
      .type('Alaska', { force: true })
      .type('{enter}');

    cy.get('[data-testid="SchoolCard"]').should('have.length', 0);
  });

  it('renders no school cards after filtering for Alaska then all after selecting all', () => {
    cy.get(ReactSelectSelector)
      .type('Alaska', { force: true })
      .type('{enter}');

    cy.get('[data-testid="SchoolCard"]').should('have.length', 0);

    cy.contains('All Schools').click();
    cy.get('[data-testid="SchoolCard"]').should('have.length.greaterThan', 40);
  });
});
