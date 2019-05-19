describe('branding visual regression test', () => {
  it('should match previous screenshot "branding page"', () => {
    cy.visitAndWaitFor('/branding');
    cy.createVisualRegressionTest();
  });
});
