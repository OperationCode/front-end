describe('events visual regression test', () => {
  it('should match previous screenshot "events page"', () => {
    cy.visitAndWaitFor('/events');
    cy.createVisualRegressionTest();
  });
});
