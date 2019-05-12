describe('terms visual regression test', () => {
  it('should match previous screenshot "terms page"', () => {
    cy.visit('/terms');
    cy.matchImageSnapshot();
  });
});
