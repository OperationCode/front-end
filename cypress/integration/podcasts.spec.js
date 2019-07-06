describe('podcasts', () => {
  beforeEach(() => {
    cy.server();
    cy.visitAndWaitFor('/podcasts');
    cy.get('h1').should('have.text', 'Podcasts');
  });

  it('renders many podcast cards', () => {
    cy.get('[data-testid="podcast-card"]').should('have.length.greaterThan', 30);
  });

  it('checks if audio is playing', () => {
    cy.audio('episode.source').should('be.playing', true);
  });

  it('checks if play button is clicked', () => {
    cy.click('controls').should('be.clicked', true);
  });
});
