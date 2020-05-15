/// <reference types="cypress" />
describe('page', () => {
  for (let i = 0; i < 5; i ++) {
    it('request made to http server is cached', () => {
      cy.visit('http://localhost:3001');
      cy.wait(1000);
    });
  }

  for (let i = 0; i < 5; i ++) {
    it('request made to https server is not cached', () => {
      cy.visit('https://localhost:3000');
      cy.wait(1000);
    });
  }
});
