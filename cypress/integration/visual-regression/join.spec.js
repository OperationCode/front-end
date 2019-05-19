describe('join visual regression test', () => {
  it('should match previous screenshot "join page"', () => {
    cy.visitAndWaitFor('/join');
    cy.createVisualRegressionTest();
  });
});
