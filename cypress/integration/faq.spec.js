import { ACCORDION_CONTENT, ACCORDION_TOGGLE_BUTTON } from '../../common/constants/testIDs';

describe('faq', () => {
  beforeEach(() => {
    cy.visitAndWaitFor('/faq');
    cy.get('h1').should('have.text', 'Frequently Asked Questions');
  });

  it('reveals text after clicking "SHOW"', () => {
    cy.findByTestId(ACCORDION_CONTENT).should('not.be.visible');
    cy.findAllByTestId(ACCORDION_TOGGLE_BUTTON).then(([firstButton]) => firstButton.click());
    cy.findAllByTestId(ACCORDION_CONTENT).should('be.visible');
  });

  // TODO: Enable when native keyboard events are supported by Cypress
  // it('should be keyboard navigable', () => {
  //   cy.get('article')
  //     .first()
  //     .find('[data-testid="Accordion Content"]')
  //     .should('not.be.visible');

  //   cy.get('article')
  //     .first()
  //     .click('{tab}{enter}'); // tab isnt supported yet 😭

  //   cy.get('article')
  //     .first()
  //     .find('[data-testid="Accordion Content"]')
  //     .should('be.visible');
  // });
});
