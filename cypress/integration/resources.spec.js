import {
  RESOURCE_CARD,
  RESOURCE_SEARCH,
  RESOURCE_SEARCH_BUTTON,
  RESOURCE_RESET_BUTTON,
  RESOURCE_TITLE,
  PREV_PAGE_BUTTON,
  NEXT_PAGE_BUTTON,
  DATA_TEST_CATEGORY,
  DATA_TEST_LANGUAGES,
  DATA_TEST_COST,
} from 'common/constants/testIDs';

describe('resources', () => {
  const COST_SELECT = 'By Cost';
  const LANGUAGES_SELECT = 'By Language(s)';
  const CATEGORY_SELECT = 'By Category';

  const compareResourceNames = ({ shouldBeEqual = false }) => {
    const assertion = shouldBeEqual ? 'eq' : 'not.eq';

    cy.findAllByTestId(RESOURCE_TITLE)
      .invoke('text')
      .then(currentResourceNames => {
        cy.get('@previousResourceNames').should(assertion, currentResourceNames);
      });
  };

  const assertThatListHasDifferentItems = () => compareResourceNames({ shouldBeEqual: false });
  const assertThatListHasSameItems = () => compareResourceNames({ shouldBeEqual: true });

  beforeEach(() => {
    cy.visitAndWaitFor('/resources/1');
    cy.get('h1').should('have.text', 'Resources');
    cy.findAllByTestId(RESOURCE_TITLE).invoke('text').as('previousResourceNames');
  });

  it('redirects on /resources to resources/1', () => {
    cy.visitAndWaitFor('/resources');
    cy.location('pathname').should('eq', '/resources/1');
  });

  it('loads many resource cards', () => {
    cy.visitAndWaitFor('/resources/1');
    cy.findAllByTestId(RESOURCE_CARD).should('have.length', 20);
  });

  it('loads the next page of results when using pagination to visit next page', () => {
    cy.findByTestId(NEXT_PAGE_BUTTON).click();
    cy.location('pathname').should('eq', '/resources/2');
  });

  it('loads the previous page of results when using pagination to visit previous page', () => {
    cy.visitAndWaitFor('/resources/2');
    cy.findByTestId(PREV_PAGE_BUTTON).click();
    cy.location('pathname').should('eq', '/resources/1');
  });

  it('loads the second page of results when using pagination to visit page 2', () => {
    cy.findByTestId('page 3').click();
    cy.location('pathname').should('eq', '/resources/3');
  });

  it('will allow a user to search matching resources by input', () => {
    cy.findByTestId(RESOURCE_SEARCH).click().type('javascript', { force: true }).type('{enter}');

    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/resources/1');
      expect(loc.search).to.eq('?q=javascript');
    });

    assertThatListHasDifferentItems();

    cy.findByTestId(NEXT_PAGE_BUTTON).click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/resources/2');
      expect(loc.search).to.eq('?q=javascript');
    });

    cy.findByTestId(PREV_PAGE_BUTTON).click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/resources/1');
      expect(loc.search).to.eq('?q=javascript');
    });

    cy.findByTestId('page 3').click();

    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/resources/3');
      expect(loc.search).to.eq('?q=javascript');
    });

    cy.findByTestId(RESOURCE_RESET_BUTTON).click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/resources/1');
      expect(loc.search).to.eq('');
    });
  });

  it('will allow a user to filter resources by category', () => {
    cy.findSelectByLabelText(CATEGORY_SELECT, { edit: true })
      .click({ force: true })
      .type('Books')
      .type('{enter}');
    cy.findByTestId(RESOURCE_SEARCH_BUTTON).click();

    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/resources/1');
      expect(loc.search).to.eq('?category=books');
    });

    cy.findAllByTestId(RESOURCE_CARD).each(card => {
      cy.wrap(card).checkCustomDataAttribute(DATA_TEST_CATEGORY, 'Books');
    });

    cy.findSelectByLabelText(CATEGORY_SELECT, { edit: true })
      .click({ force: true })
      .type('Getting Started')
      .type('{enter}');
    cy.findByTestId(RESOURCE_SEARCH_BUTTON).click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/resources/1');
      expect(loc.search).to.eq('?category=getting+started');
    });

    // Starting page
    assertThatListHasSameItems();

    cy.findByTestId(NEXT_PAGE_BUTTON).click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/resources/2');
      expect(loc.search).to.eq('?category=getting+started');
    });

    cy.findByTestId(PREV_PAGE_BUTTON).click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/resources/1');
      expect(loc.search).to.eq('?category=getting+started');
    });

    cy.findByTestId('page 3').click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/resources/3');
      expect(loc.search).to.eq('?category=getting+started');
    });

    cy.findByTestId(RESOURCE_RESET_BUTTON).click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/resources/1');
      expect(loc.search).to.eq('');
    });
  });

  it('will allow a user to filter resources by cost', () => {
    cy.findSelectByLabelText(COST_SELECT, { edit: true })
      .click({ force: true })
      .type('Free')
      .type('{enter}');
    cy.findByTestId(RESOURCE_SEARCH_BUTTON).click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/resources/1');
      expect(loc.search).to.eq('?paid=false');
    });

    cy.findAllByTestId(RESOURCE_CARD).each(card => {
      cy.wrap(card).checkCustomDataAttribute(DATA_TEST_COST, 'false');
    });

    cy.findSelectByLabelText(COST_SELECT, { edit: true })
      .click({ force: true })
      .type('Paid')
      .type('{enter}');
    cy.findByTestId(RESOURCE_SEARCH_BUTTON).click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/resources/1');
      expect(loc.search).to.eq('?paid=true');
    });

    assertThatListHasDifferentItems();

    cy.findByTestId(NEXT_PAGE_BUTTON).click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/resources/2');
      expect(loc.search).to.eq('?paid=true');
    });

    cy.findByTestId(PREV_PAGE_BUTTON).click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/resources/1');
      expect(loc.search).to.eq('?paid=true');
    });

    cy.findByTestId('page 3').click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/resources/3');
      expect(loc.search).to.eq('?paid=true');
    });

    cy.findByTestId(RESOURCE_RESET_BUTTON).click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/resources/1');
      expect(loc.search).to.eq('');
    });
  });

  it('will allow a user to filter resources by language(s)', () => {
    cy.findSelectByLabelText(LANGUAGES_SELECT, { edit: true })
      .click({ force: true })
      .type('javascript')
      .type('{enter}');
    cy.findByTestId(RESOURCE_SEARCH_BUTTON).click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/resources/1');
      expect(loc.search).to.eq('?languages=javascript');
    });

    cy.findByTestId(NEXT_PAGE_BUTTON).click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/resources/2');
      expect(loc.search).to.eq('?languages=javascript');
    });

    cy.findByTestId(PREV_PAGE_BUTTON).click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/resources/1');
      expect(loc.search).to.eq('?languages=javascript');
    });

    cy.findByTestId('page 3').click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/resources/3');
      expect(loc.search).to.eq('?languages=javascript');
    });

    assertThatListHasDifferentItems();

    cy.findAllByTestId(RESOURCE_CARD).each(card => {
      cy.wrap(card).checkCustomDataAttribute(DATA_TEST_LANGUAGES, 'JavaScript');
    });

    cy.findSelectByLabelText(LANGUAGES_SELECT, { edit: true })
      .click({ force: true })
      .type('python')
      .type('{enter}');
    cy.findByTestId(RESOURCE_SEARCH_BUTTON).click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/resources/1');
      expect(loc.search).to.eq('?languages=javascript&languages=python');
    });

    cy.findByTestId(RESOURCE_RESET_BUTTON).click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/resources/1');
      expect(loc.search).to.eq('');
    });
  });
});
