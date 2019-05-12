describe('who_we_serve visual regression test', () => {
  it('should match previous screenshot "who_we_serve page"', () => {
    cy.visit('/who_we_serve');
    cy.matchImageSnapshot();
  });
});
