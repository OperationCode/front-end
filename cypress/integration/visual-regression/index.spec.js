describe('index visual regression test', () => {
  it('should match previous screenshot "index page"', () => {
    cy.visitAndWaitFor('/index');
    cy.createVisualRegressionTest();
  });
});
