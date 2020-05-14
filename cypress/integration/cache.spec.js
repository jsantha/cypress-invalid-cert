/// <reference types="cypress" />
describe('page', () => {
  it('should have http caching working', () => {
    cy.visit('https://www.cypress.io');
  });
});
