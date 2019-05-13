describe('login visual regression test', () => {
  it('should match previous screenshot "login page"', () => {
    cy.visitAndWaitFor('/login');
    cy.createVisualRegressionTests();
  });
});
