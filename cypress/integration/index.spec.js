describe('index visual regression test', () => {
  it('should match previous screenshot "index page"', () => {
    cy.visit('/index');
    cy.matchImageSnapshot();
  });
});
