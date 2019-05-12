describe('press visual regression test', () => {
  it('should match previous screenshot "press page"', () => {
    cy.visitAndWaitFor('/press');
    cy.createVisualRegressionTests();
  });
});
