describe('policy visual regression test', () => {
  it('should match previous screenshot "policy page"', () => {
    cy.visit('/policy');
    cy.matchImageSnapshot();
  });
});
