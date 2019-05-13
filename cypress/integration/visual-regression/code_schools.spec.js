describe('code_schools visual regression test', () => {
  it('should match previous screenshot "code_schools page"', () => {
    cy.visitAndWaitFor('/code_schools');

    // we would have snapshots break on us whenever code schools get added
    // make it so no code schools render
    cy.get('input#react-select-state_select-input')
      .type('Alaska', { force: true })
      .type('{enter}');

    cy.get('[data-testid="SchoolCard"]').should('have.length', 0);

    cy.createVisualRegressionTests();
  });
});
