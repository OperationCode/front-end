import {
  RESOURCE_CARD,
  RESOURCE_SEARCH,
  RESOURCE_SEARCH_BUTTON,
  RESOURCE_RESET_BUTTON,
  PREV_PAGE_BUTTON,
  NEXT_PAGE_BUTTON,
  DATA_TEST_CATEGORY,
  DATA_TEST_LANGUAGES,
  DATA_TEST_IS_FREE,
  UPVOTE_BUTTON,
  DOWNVOTE_BUTTON,
  LOGIN_BUTTON,
  LOGIN_FORM,
} from 'common/constants/testIDs';
import existingUser from 'test-utils/mocks/existingUser';
import noop from 'lodash/noop';

describe('resources', () => {
  const COST_SELECT = 'By Cost';
  const LANGUAGES_SELECT = 'By Language(s)';
  const CATEGORY_SELECT = 'By Category';

  /**
   * @description Assert against the value of custom data attrs amongst a list of resource cards.
   * @param {string} dataAttribute example `'data-custom-attr'`
   * @param {string} value example `'false'`
   */
  const checkAllCardsForDataAttribute = (dataAttribute, value) => {
    cy.findAllByTestId(RESOURCE_CARD)
      .each(card => {
        cy.wrap(card).checkCustomDataAttribute(dataAttribute, value);
      })
      // .each() returns an array which ruins subsequent queries unless it is resolved
      .then(noop);
  };

  beforeEach(() => {
    cy.visitAndWaitFor('/resources/1');
    cy.get('h1').should('have.text', 'Resources');
    Cypress.Cookies.preserveOnce('token');
  });

  it('redirects on /resources to resources/1', () => {
    cy.visitAndWaitFor('/resources');
    cy.location('pathname').should('eq', '/resources/1');
  });

  it('loads many resource cards', () => {
    cy.visitAndWaitFor('/resources/1');
    cy.findAllByTestId(RESOURCE_CARD).should('have.length.greaterThan', 1);
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

    cy.location().should(({ pathname, search }) => {
      expect(pathname).to.eq('/resources/1');
      expect(search).to.eq('?q=javascript');
    });

    cy.findByTestId(NEXT_PAGE_BUTTON).click();
    cy.location().should(({ pathname, search }) => {
      expect(pathname).to.eq('/resources/2');
      expect(search).to.eq('?q=javascript');
    });

    cy.findByTestId(PREV_PAGE_BUTTON).click();
    cy.location().should(({ pathname, search }) => {
      expect(pathname).to.eq('/resources/1');
      expect(search).to.eq('?q=javascript');
    });

    cy.findByTestId('page 3').click();

    cy.location().should(({ pathname, search }) => {
      expect(pathname).to.eq('/resources/3');
      expect(search).to.eq('?q=javascript');
    });
  });

  it('will allow a user reset their search form', () => {
    cy.findByTestId(RESOURCE_SEARCH).click().type('javascript', { force: true }).type('{enter}');

    cy.location().should(({ pathname, search }) => {
      expect(pathname).to.eq('/resources/1');
      expect(search).to.eq('?q=javascript');
    });

    cy.findByTestId(NEXT_PAGE_BUTTON).click();
    cy.location().should(({ pathname, search }) => {
      expect(pathname).to.eq('/resources/2');
      expect(search).to.eq('?q=javascript');
    });

    cy.findByTestId(RESOURCE_RESET_BUTTON).click();
    cy.location().should(({ pathname, search }) => {
      expect(pathname).to.eq('/resources/1');
      expect(search).to.eq('');
    });
  });

  it('will allow a user to filter resources by category', () => {
    cy.findSelectByLabelText(CATEGORY_SELECT, { edit: true })
      .click({ force: true })
      .type('Books')
      .type('{enter}');
    cy.findByTestId(RESOURCE_SEARCH_BUTTON).click();

    cy.location().should(({ pathname, search }) => {
      expect(pathname).to.eq('/resources/1');
      expect(search).to.eq('?category=books');
    });

    checkAllCardsForDataAttribute(DATA_TEST_CATEGORY, 'Books');

    cy.findByTestId(NEXT_PAGE_BUTTON).click();
    cy.location().should(({ pathname, search }) => {
      expect(pathname).to.eq('/resources/2');
      expect(search).to.eq('?category=books');
    });

    cy.findByTestId(PREV_PAGE_BUTTON).click();
    cy.location().should(({ pathname, search }) => {
      expect(pathname).to.eq('/resources/1');
      expect(search).to.eq('?category=books');
    });

    cy.findByTestId('page 3').click();
    cy.location().should(({ pathname, search }) => {
      expect(pathname).to.eq('/resources/3');
      expect(search).to.eq('?category=books');
    });
  });

  it('will allow a user to filter resources by cost', () => {
    cy.findSelectByLabelText(COST_SELECT, { edit: true })
      .click({ force: true })
      .type('Free')
      .type('{enter}');
    cy.findByTestId(RESOURCE_SEARCH_BUTTON).click();
    cy.location().should(({ pathname, search }) => {
      expect(pathname).to.eq('/resources/1');
      expect(search).to.eq('?free=true');
    });

    checkAllCardsForDataAttribute(DATA_TEST_IS_FREE, 'true');

    cy.findSelectByLabelText(COST_SELECT, { edit: true })
      .click({ force: true })
      .type('Paid')
      .type('{enter}');
    cy.findByTestId(RESOURCE_SEARCH_BUTTON).click();
    cy.location().should(({ pathname, search }) => {
      expect(pathname).to.eq('/resources/1');
      expect(search).to.eq('?free=false');
    });

    checkAllCardsForDataAttribute(DATA_TEST_IS_FREE, 'false');

    cy.findByTestId(NEXT_PAGE_BUTTON).click();
    cy.location().should(({ pathname, search }) => {
      expect(pathname).to.eq('/resources/2');
      expect(search).to.eq('?free=false');
    });

    cy.findByTestId(PREV_PAGE_BUTTON).click();
    cy.location().should(({ pathname, search }) => {
      expect(pathname).to.eq('/resources/1');
      expect(search).to.eq('?free=false');
    });

    cy.findByTestId('page 3').click();
    cy.location().should(({ pathname, search }) => {
      expect(pathname).to.eq('/resources/3');
      expect(search).to.eq('?free=false');
    });
  });

  it('will allow a user to filter resources by a language', () => {
    cy.findSelectByLabelText(LANGUAGES_SELECT, { edit: true })
      .click({ force: true })
      .type('javascript')
      .type('{enter}')
      .type('{esc}');
    cy.findByTestId(RESOURCE_SEARCH_BUTTON).click();
    cy.location().should(({ pathname, search }) => {
      expect(pathname).to.eq('/resources/1');
      expect(search).to.eq('?languages=javascript');
    });

    cy.findByTestId(NEXT_PAGE_BUTTON).click();
    cy.location().should(({ pathname, search }) => {
      expect(pathname).to.eq('/resources/2');
      expect(search).to.eq('?languages=javascript');
    });

    cy.findByTestId(PREV_PAGE_BUTTON).click();
    cy.location().should(({ pathname, search }) => {
      expect(pathname).to.eq('/resources/1');
      expect(search).to.eq('?languages=javascript');
    });

    cy.findByTestId('page 3').click();
    cy.location().should(({ pathname, search }) => {
      expect(pathname).to.eq('/resources/3');
      expect(search).to.eq('?languages=javascript');
    });

    checkAllCardsForDataAttribute(DATA_TEST_LANGUAGES, 'JavaScript');
  });

  /** @see https://github.com/OperationCode/resources_api/issues/401 */
  // it('will allow a user to filter resources by many languages', () => {
  //   cy.findSelectByLabelText(LANGUAGES_SELECT, { edit: true })
  //     .click({ force: true })
  //     .type('javascript')
  //     .type('{enter}')
  //     .type('python')
  //     .type('{enter}')
  //     .type('{esc}');

  //   cy.findByTestId(RESOURCE_SEARCH_BUTTON).click();
  //   cy.location().should(({ pathname, search }) => {
  //     expect(pathname).to.eq('/resources/1');
  //     expect(search).to.eq('?languages=javascript&languages=python');
  //   });

  //   checkAllCardsForDataAttribute(DATA_TEST_LANGUAGES, 'JavaScript');
  //   checkAllCardsForDataAttribute(DATA_TEST_LANGUAGES, 'Python');
  // });
  it('will prompt user to login when voting without being logged in', () => {
    cy.server();
    cy.route('POST', 'auth/login/').as('postLogin');

    cy.findAllByTestId(UPVOTE_BUTTON).first().click({ force: true });
    cy.findByTestId(LOGIN_FORM).should('exist');

    cy.findByLabelText('Email*').type(existingUser.email);
    cy.findByLabelText('Password*').type(existingUser.password);
    cy.findByTestId(LOGIN_BUTTON).click();

    cy.wait('@postLogin').its('status').should('eq', 200);

    cy.findByTestId(LOGIN_FORM).should('not.exist');
  });

  it('will allow user to upvote once logged in', () => {
    cy.findAllByTestId(UPVOTE_BUTTON)
      .first()
      .children('span')
      .invoke('text')
      .as('currentUpVoteCountText');

    cy.server();
    cy.route('PUT', 'api/v1/resources/**/upvote').as('upvote');

    cy.findAllByTestId(UPVOTE_BUTTON).first().click({ force: true });
    cy.wait('@upvote');

    cy.get('@upvote').then(({ status, response }) => {
      expect(status).to.eq(200);
      cy.get('@currentUpVoteCountText').should(
        'not.eq',
        `Number of Number of upvotes:${response.body.resource.upvotes}`,
      );
    });
  });

  it('will allow user to downvote once logged in', () => {
    cy.findAllByTestId(DOWNVOTE_BUTTON)
      .first()
      .children('span')
      .invoke('text')
      .as('currentDownVoteCountText');

    cy.server();
    cy.route('PUT', 'api/v1/resources/**/downvote').as('downvote');

    cy.findAllByTestId(DOWNVOTE_BUTTON).first().click({ force: true });
    cy.wait('@downvote');

    cy.get('@downvote').then(({ status, response }) => {
      expect(status).to.eq(200);
      cy.get('@currentDownVoteCountText').should(
        'not.eq',
        `Number of Number of downvotes:${response.body.resource.upvotes}`,
      );
    });
  });
});
