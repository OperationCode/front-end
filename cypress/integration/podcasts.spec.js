describe('podcasts', () => {
  beforeEach(() => {
    cy.server();
    cy.visitAndWaitFor('/podcasts');
    cy.get('h1').should('have.text', 'Podcasts');
  });

  it('renders many podcast cards', () => {
    cy.get('[data-testid="Card"]').should('have.length.greaterThan', 0);
  });

  it('renders "Episodes" after filtering for Card', () => {
    cy.get('[data-testid="podcast-card"]')
      .type('podcast-card', { force: true })
      .type('{enter}');

    cy.get('[data-testid="podcast-card"]').should('exist');
  });

  it('checks if audio is playing after play button is clicked', () => {
    cy.contains('episode.source')
      .click()
      .audio()
      .should('be.playing', true);
  });

  it('checks if play button is clicked', () => {
    cy.get('button')
      .click('controls')
      .should('be.clicked', true);
  });
});
