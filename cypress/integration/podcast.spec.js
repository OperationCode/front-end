describe('podcast', () => {
  describe('when server responds successfully', () => {
    beforeEach(() => {
      cy.server();
      cy.visitAndWaitFor('/podcast');
      cy.get('h1').should('have.text', 'Podcast');
    });

    it('renders many podcast cards', () => {
      cy.findAllByTestId('Podcast Card').should('have.length.greaterThan', 0);
    });
  });

  describe('when server does not respond', () => {
    // unfortunately, Cypress doesn't have the ability to stub network requests, so it's not
    // possible to test for this situation. Maybe some day!
  });
});
