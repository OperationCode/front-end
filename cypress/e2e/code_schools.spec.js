import {
  MODAL_CONTENT,
  CLOSE_BUTTON,
  SCHOOL_CARD_LOCATION_LIST_MODAL_BUTTON,
  SCHOOL_LOCATION_LIST_ITEM,
} from 'common/constants/testIDs';

describe('code schools', () => {
  const ReactSelectSelector = 'input#react-select-state_select-input';

  describe('when the server responds successfully', () => {
    beforeEach(() => {
      cy.server();
      cy.visitAndWaitFor('/code_schools');
      cy.get('h1').should('have.text', 'Code Schools');
    });

    it('renders many code school cards', () => {
      // Arbitrary value, but it proves that the API is working and leading to rendered content
      cy.findAllByTestId('SchoolCard').should('have.length.greaterThan', 30);
    });

    it('renders "Cincy Code IT Bootcamps" and "Tech Elevator" after filtering for Ohio', () => {
      cy.get(ReactSelectSelector).type('Ohio', { force: true }).type('{enter}');

      cy.findByTestId('SchoolCard Name: Cincy Code IT Bootcamps').should('exist');
      cy.findByTestId('SchoolCard Name: Tech Elevator').should('exist');
    });

    it('only renders relevant schools after clicking on "Schools Accepting GI Bill"', () => {
      cy.findByText('Schools Accepting GI Bill').click();

      cy.findAllByTestId('SchoolCard').each(card => {
        cy.wrap(card).findAllByTestId('GI Bill Ribbon').should('exist');
      });
    });

    it('only renders code schools with an online option after clicking "Online Schools"', () => {
      cy.findByText('Online Schools').click();

      cy.findAllByTestId('SchoolCard').each(card => {
        cy.wrap(card).findAllByTestId('School has online').should('exist');
      });
    });

    it('renders no code school cards after filtering for Alaska', () => {
      cy.get(ReactSelectSelector).type('Alaska', { force: true }).type('{enter}');

      cy.findByTestId('SchoolCard').should('have.length', 0);
    });

    it('renders no school cards after filtering for Alaska then all after selecting all', () => {
      cy.get(ReactSelectSelector).type('Alaska', { force: true }).type('{enter}');

      cy.findByTestId('SchoolCard').should('have.length', 0);

      cy.findByText('All Schools').click();
      cy.findAllByTestId('SchoolCard').should('have.length.greaterThan', 30);
    });

    it('renders all cards after un-filtering Alaska', () => {
      cy.get(ReactSelectSelector)
        .type('Alaska', { force: true })
        .type('{enter}')
        .type('{backspace}');

      cy.findAllByTestId('SchoolCard').should('have.length.greaterThan', 30);
    });

    it('renders all locations when opening the "view all" modal', () => {
      cy.findAllByTestId(SCHOOL_CARD_LOCATION_LIST_MODAL_BUTTON).first().click();
      cy.findByTestId(MODAL_CONTENT).should('exist').and('be.visible');
      cy.findAllByTestId(SCHOOL_LOCATION_LIST_ITEM).should('have.length.greaterThan', 1);
      cy.findByTestId(CLOSE_BUTTON).click({ force: true });
      cy.findByTestId(MODAL_CONTENT).should('not.exist');
    });
  });
});
