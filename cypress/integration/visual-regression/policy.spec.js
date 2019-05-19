describe('policy visual regression test', () => {
  it('should match previous screenshot "policy page"', () => {
    cy.visitAndWaitFor('/policy');
    cy.createVisualRegressionTest();
  });
});
