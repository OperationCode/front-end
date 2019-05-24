describe('branding visual regression test', () => {
  it('should match previous screenshot "branding page"', () => {
    cy.visit('/branding');
    cy.matchImageSnapshot();
  });
});
