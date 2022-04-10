import {
  CLOSE_BUTTON,
  MODAL_CONTENT,
  MODAL_OVERLAY,
  SCHOOL_CARD_LOCATION_LIST_MODAL_BUTTON,
} from 'common/constants/testIDs';

describe('when the server responds successfully', () => {
  beforeEach(() => {
    cy.visitAndWaitFor('/code_schools');
    cy.get('h1').should('have.text', 'Code Schools');
  });

  it('hides the rest of the app for accessibility purposes', () => {
    cy.get('#__next').should('not.have.attr', 'aria-hide');
    cy.findAllByTestId(SCHOOL_CARD_LOCATION_LIST_MODAL_BUTTON).first().click();
    cy.get('#__next').should('have.attr', 'aria-hidden', 'true');
  });

  it('closes the modal when the x button is clicked', () => {
    cy.findAllByTestId(SCHOOL_CARD_LOCATION_LIST_MODAL_BUTTON).first().click();
    cy.findByTestId(MODAL_CONTENT).should('exist').and('be.visible');
    cy.findByTestId(CLOSE_BUTTON).click();
    cy.findByTestId(MODAL_CONTENT).should('not.exist');
  });

  it('closes the modal when the overlay is clicked', () => {
    cy.findAllByTestId(SCHOOL_CARD_LOCATION_LIST_MODAL_BUTTON).first().click();
    cy.findByTestId(MODAL_CONTENT).should('exist').and('be.visible');
    cy.findByTestId(MODAL_OVERLAY).click({ force: true });
    cy.findByTestId(MODAL_CONTENT).should('not.exist');
  });
});
