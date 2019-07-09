describe('podcasts', () => {
  beforeEach(() => {
    cy.server();
    cy.visitAndWaitFor('/podcasts');
    cy.get('h1').should('have.text', 'Podcasts');
  });

  it('renders many podcast cards', () => {
    cy.get('[data-testid="Card"]').should('have.length.greaterThan', 30);
  });

  it('renders "Podcast Episodes" after filtering for Card', () => {
    cy.get('[data-testid="Card"]')
      .type('podcast-card', { force: true })
      .type('{enter}');

    cy.get('[data-testid="Card" podcast-card]').should('exist');
  });

  it('checks if audio is playing after play button is clicked', () => {
    cy.contains('podcast-episode')
      .click()
      .audio('episode.source')
      .should('be.playing', true);
  });

  it('checks if play button is clicked', () => {
    cy.get('button')
      .click('controls')
      .should('be.clicked', true);
  });
});
