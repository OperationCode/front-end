describe('faq visual regression test', () => {
  it('should match previous screenshot "faq page"', () => {
    cy.visit('/faq');
    cy.matchImageSnapshot();
  });
});
