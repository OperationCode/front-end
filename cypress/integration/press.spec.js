describe('press visual regression test', () => {
  it('should match previous screenshot "press page"', () => {
    cy.visit('/press');
    cy.matchImageSnapshot();
  });
});
