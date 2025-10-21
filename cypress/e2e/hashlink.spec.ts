import { HERO_BANNER_H1 } from 'common/constants/testIDs';

describe('Hash Links', () => {
  const verifyHashLink = (title, path) => {
    cy.visitAndWaitFor(path);

    cy.findAllByTestId(HERO_BANNER_H1).should('be.visible');

    cy.findAllByTestId('Hash Link').each(link => {
      const { hash } = link[0];

      cy.get(hash).scrollIntoView();

      // The literal scrolling sometimes prevents the hash link from being visible in the viewport
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(200);

      cy.get(hash).click({ force: true });

      // once encountered a failure because the hash link was not yet in the URL
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(100);

      cy.get(hash).url().should('include', hash);
    });
  };

  const someRandomPagesWithHashLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Corporate Sponsorship', path: '/sponsorship' },
  ];

  someRandomPagesWithHashLinks.forEach(({ title, path }) => {
    describe(`on ${title} page`, () => {
      it(`will change route when clicked`, () => {
        verifyHashLink(title, path);
      });
    });

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
  });
});
