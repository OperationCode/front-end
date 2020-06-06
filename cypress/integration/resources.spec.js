import {
  RESOURCE_CARD,
  RESOURCE_SEARCH,
  RESOURCE_SEARCH_BUTTON,
  RESOURCE_RESET_BUTTON,
  PREV_PAGE_BUTTON,
  NEXT_PAGE_BUTTON,
} from '../../common/constants/testIDs';

describe('resources', () => {
  const CostSelect = 'input#react-select-paid-input';
  const LanguageSelect = 'input#react-select-languages-input';
  const CategorySelect = 'input#react-select-category-input';

  beforeEach(() => {
    cy.visitAndWaitFor('/resources/1');
    cy.get('h1').should('have.text', 'Resources');
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

  it('loads the last page of results when paginating to the last page', () => {
    let pageValue;
    cy.get('ol')
      .find('li')
      .eq(-2)
      .click()
      .then($li => {
        pageValue = $li.text().match(/[0-9]+/);
      });
    cy.location().should(loc => {
      expect(loc.pathname).to.eq(`/resources/${pageValue}`);
      expect(loc.search).to.eq('');
    });
  });

  it('will allow a user to search matching resources by input', () => {
    cy.findByTestId(RESOURCE_SEARCH).click().type('javascript', { force: true }).type('{enter}');

    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/resources/1');
      expect(loc.search).to.eq('?q=javascript');
    });

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
    cy.get(CategorySelect).click({ force: true }).type('Books').type('{enter}');
    cy.findByTestId(RESOURCE_SEARCH_BUTTON).click();

    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/resources/1');
      expect(loc.search).to.eq('?category=books');
    });

    cy.findAllByTestId(RESOURCE_CARD).each(card => {
      cy.wrap(card)
        .get('[data-test-category]')
        .invoke('attr', 'data-test-category')
        .should('eq', 'Books');
    });

    cy.get(CategorySelect).click({ force: true }).type('Getting Started').type('{enter}');
    cy.findByTestId(RESOURCE_SEARCH_BUTTON).click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/resources/1');
      expect(loc.search).to.eq('?category=getting%20started');
    });

    cy.findByTestId(NEXT_PAGE_BUTTON).click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/resources/2');
      expect(loc.search).to.eq('?category=getting%20started');
    });

    cy.findByTestId(PREV_PAGE_BUTTON).click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/resources/1');
      expect(loc.search).to.eq('?category=getting%20started');
    });

    cy.findByTestId('page 3').click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/resources/3');
      expect(loc.search).to.eq('?category=getting%20started');
    });

    cy.findByTestId(RESOURCE_RESET_BUTTON).click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/resources/1');
      expect(loc.search).to.eq('');
    });
  });

  it('will allow a user to filter resources by cost', () => {
    cy.get(CostSelect).click({ force: true }).type('Free').type('{enter}');
    cy.findByTestId(RESOURCE_SEARCH_BUTTON).click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/resources/1');
      expect(loc.search).to.eq('?paid=false');
    });

    cy.findAllByTestId(RESOURCE_CARD).each(card => {
      cy.wrap(card)
        .get('[data-test-isPaid]')
        .invoke('attr', 'data-test-isPaid')
        .should('eq', 'false');
    });

    cy.get(CostSelect).click({ force: true }).type('Paid').type('{enter}');
    cy.findByTestId(RESOURCE_SEARCH_BUTTON).click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/resources/1');
      expect(loc.search).to.eq('?paid=true');
    });

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
    cy.get(LanguageSelect).click({ force: true }).type('javascript').type('{enter}');
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

    cy.findAllByTestId(RESOURCE_CARD).each(card => {
      cy.wrap(card)
        .get('[data-test-languages]')
        .invoke('attr', 'data-test-languages')
        .should('contain', 'JavaScript');
    });

    cy.get(LanguageSelect).click({ force: true }).type('python').type('{enter}');
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
