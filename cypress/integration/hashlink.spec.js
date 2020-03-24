describe('Hash Links', () => {
  const verifyHashLink = path => {
    cy.visitAndWaitFor(path);

    cy.findAllByTestId('Hash Link').each(link => {
      const { hash } = link[0];

      cy.get(hash).scrollIntoView().click({ force: true }).url().should('include', hash);
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

    // TODO: Uncomment when https://github.com/cypress-io/cypress/issues/10 is resolved
    // describe('on large viewports', () => {
    //   it('is invisible until hovered', () => {
    //     cy.visitAndWaitFor(path);

    //     cy.findAllByTestId('Hash Link').each(link => {
    //       const { hash, id } = link[0];

    //       cy.get(hash)
    //         .scrollIntoView()
    //         .should('not.be.visible');

    //       cy.findByTestId(`Heading Content ${id}`).hover()

    //       cy.get(hash).should('be.visible');
    //     });
    //   });
    // });

    describe('on small viewports', () => {
      it('is always invisible', () => {
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
