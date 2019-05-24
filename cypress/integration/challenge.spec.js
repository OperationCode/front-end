describe('challenge visual regression test', () => {
  it('should match previous screenshot "challenge page"', () => {
    cy.visit('/challenge');
    cy.matchImageSnapshot();
  });
});
