describe('Retrying Cypress tests', () => {
  let tryCount = 0;

  it('retries a test up to 2 times in case it fails', () => {
    tryCount += 1;
    cy.expect(tryCount === 3).to.be.true;
  });
});
