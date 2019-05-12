describe('about visual regression test', () => {
  it('should match previous screenshot "about page"', () => {
    cy.visit('/about');
    cy.matchImageSnapshot();
  });
});
