describe('chapter_leader visual regression test', () => {
  it('should match previous screenshot "chapter_leader page"', () => {
    cy.visit('/chapter_leader');
    cy.matchImageSnapshot();
  });
});
