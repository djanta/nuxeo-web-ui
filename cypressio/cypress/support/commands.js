// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("login", (nuxeoUrl, username, password) => {
  cy.visit(nuxeoUrl)
  cy.get('#username')
    .click()
    .type(username)
  cy.get('#password')
    .click()
    .type(password)
  cy.get('.login_button')
    .click()
});
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("shadowDomElement", {prevSubject: true},
function(subject, selectors) {
      var currentElement = subject[0];
      for (var i = 0; i < selectors.length; i++) {
        currentElement = currentElement.shadowRoot;
        currentElement = currentElement.querySelector(selectors[i]);
        if (!currentElement) {
          break;
        }
      }

      return currentElement;
});