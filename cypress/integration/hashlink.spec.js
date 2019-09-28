describe('hashlink', () => {
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
  ];

  paths.forEach(path => {
    const test = `checks hashlinks on ${path.pathName} page`;

    it(test, () => {
      cy.verifyHashLink(path.pathValue);
    });
  });
});
