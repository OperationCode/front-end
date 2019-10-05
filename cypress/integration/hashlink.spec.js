describe('pagesWithHashLink', () => {
  const paths = [
    { pathName: 'index', pathValue: '/' },
    { pathName: 'about', pathValue: '/about' },
    { pathName: 'faq', pathValue: '/faq' },
    { pathName: 'podcast', pathValue: '/podcast' },
    { pathName: 'who_we_serve', pathValue: '/who_we_serve' },
    { pathName: 'events', pathValue: '/events' },
    { pathName: 'get_involved', pathValue: '/get_involved' },
    { pathName: 'sponsorship', pathValue: '/sponsorship' },
    { pathName: 'leadership_circle', pathValue: '/leadership_circle' },
    { pathName: 'code_schools', pathValue: '/code_schools' },
    { pathName: 'jobs', pathValue: '/jobs' },
    { pathName: 'press', pathValue: '/press' },
    { pathName: 'branding', pathValue: '/branding' },
    { pathName: 'team', pathValue: '/team' },
  ];

  paths.forEach(path => {
    it(`checks hashlinks on ${path.pathName} page`, () => {
      verifyHashLink(path.pathValue);
    });
  });
});

const verifyHashLink = path => {
  cy.visitAndWaitFor(path);
  cy.get('[data-testid="Hash Link"]').each(link => {
    const { hash } = link[0];

    cy.get(hash)
      .siblings('div')
      .children('a')
      .scrollIntoView()
      .click({ force: true })
      .url()
      .should('include', hash);
  });
};
