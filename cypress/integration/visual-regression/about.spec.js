describe('about visual regression test', () => {
  it('should match previous screenshot "about page"', () => {
    cy.visitAndWaitFor('/about');
    cy.createVisualRegressionTests();
  });
});
