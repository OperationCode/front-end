describe('team visual regression test', () => {
  it('should match previous screenshot "team page"', () => {
    cy.visit('/team');
    cy.matchImageSnapshot();
  });
});
