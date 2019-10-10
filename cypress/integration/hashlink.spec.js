describe('Hash Links', () => {
  const verifyHashLink = path => {
    cy.visitAndWaitFor(path);

    cy.findAllByTestId('Hash Link').each(link => {
      const { hash } = link[0];

      cy.get(hash)
        .scrollIntoView()
        .click({ force: true })
        .url()
        .should('include', hash);
    });
  };

  const someRandomPagesWithHashLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Who We Serve', path: '/who_we_serve' },
  ];

  someRandomPagesWithHashLinks.forEach(({ title, path }) => {
    describe(`on ${title} page`, () => {
      it(`will change route when clicked`, () => {
        verifyHashLink(path);
      });
    });

    describe('on small viewports', () => {
      it('renders the anchors invisibly', () => {
        cy.visitAndWaitFor(path);
        cy.viewport('iphone-6');

        cy.findAllByTestId('Hash Link').each(link => {
          const { hash } = link[0];

          cy.get(hash).should('not.be.visible');
        });
      });
    });
  });
});
