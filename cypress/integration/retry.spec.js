describe('retry', () => {
  let retry = 0;
  it('retries a test up to 3 times in case it fails', () => {
    retry += 1;
    cy.expect(retry === 3).to.be.true;
  });
});
