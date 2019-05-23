describe('reset_password visual regression test', () => {
  it('should match previous screenshot "reset_password page"', () => {
    cy.visit('/password_reset');
    cy.matchImageSnapshot();
  });
});
