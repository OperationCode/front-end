describe('contact visual regression test', () => {
  it('should match previous screenshot "contact page"', () => {
    cy.visit('/contact');
    cy.matchImageSnapshot();
  });
});
