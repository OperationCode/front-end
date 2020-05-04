import { RESOURCE_CARD, RESOURCE_SEARCH } from '../../common/constants/testIDs';

describe('resources', () => {
  // const CostSelect = 'input#react-select-cost_select-input';
  // const LanguageSelect = 'input#react-select-language_select-input';
  // const CategorySelect = 'input#react-select-category_select-input';

  beforeEach(() => {
    cy.server();
    cy.visitAndWaitFor('/resources');
    cy.get('h1').should('have.text', 'Resources');
  });

  it('redirects on /resources to resources/1', () => {
    cy.location('pathname').should('eq', '/resources/1');
  });

  /* Using the headers on the cards for the data-testid, can't seem to get it to find it on
the Accordion inside ResourceCard */
  it('loads many resource cards on resources/1', () => {
    cy.visitAndWaitFor('/resources/1');
    cy.findAllByTestId(RESOURCE_CARD).should('have.length', 20);
  });

  it('renders the second page of results when using pagination to visit page 2', () => {
    cy.findByTestId('2').click();
    cy.location('pathname').should('eq', '/resources/2');
  });

  it('renders the next page of results when using pagination to visit next page', () => {
    cy.findByTestId('rightAngle').click();
    cy.location('pathname').should('eq', '/resources/2');
  });

  it('renders the previous page of results when using pagination to visit previous page', () => {
    cy.visitAndWaitFor('/resources/2');
    cy.findByTestId('leftAngle').click();

    cy.location('pathname').should('eq', '/resources/1');
  });

  it('renders the last page of results when paginating to the last page', () => {
    cy.findByTestId('50').click();
    cy.location('pathname').should('eq', '/resources/50');
  });

  it('returns javascript related resources when a user searches for "javascript"', () => {
    cy.findByTestId(RESOURCE_SEARCH).click().type('javascript', { force: true }).type('{enter}');
    // cy.location('pathname').should('eq', '/resources/1?q=javascript');
    cy.findAllByTestId(RESOURCE_CARD).each(card => {
      expect(card).to.contain('javascript');
    });
  });
});
