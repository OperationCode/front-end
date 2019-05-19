describe('leadership_circle visual regression test', () => {
  it('should match previous screenshot "leadership_circle page"', () => {
    cy.visitAndWaitFor('/leadership_circle');
    cy.createVisualRegressionTest();
  });
});
