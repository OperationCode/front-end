describe('get_involved visual regression test', () => {
  it('should match previous screenshot "get_involved page"', () => {
    cy.visitAndWaitFor('/get_involved');
    cy.createVisualRegressionTests();
  });
});
