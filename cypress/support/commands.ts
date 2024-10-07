/// <reference types="cypress" />

Cypress.Commands.add("getByData", (selector) => {
    return cy.get(`[data-test=${selector}]`)
  })


// cypress/support/index.d.ts
declare namespace Cypress {
    interface Chainable {
      getByData(selector: string): Chainable<JQuery<HTMLElement>>;
    }
  }
  