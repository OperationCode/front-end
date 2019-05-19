describe('reset_password visual regression test', () => {
  it('should match previous screenshot "reset_password page"', () => {
    cy.visitAndWaitFor('/reset_password');
    cy.createVisualRegressionTest();
  });
});
