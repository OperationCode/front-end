// Assert that when the user navigates to the page, the code schools are all rendered on the page
describe('visit page', () => {
  it('visits /code-schools page', () => {
    cy.visit('/code_schools');
  });
});

describe('render code school cards', () => {
  it('should render code school cards', () => {
    cy.get('div.code_schools_schoolCardsWrapper__SXWXI');
  });
});
