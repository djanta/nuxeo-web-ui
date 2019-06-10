/// <reference types="Cypress" />

describe('Log in', function() {
  it('Logs into Nuxeo', function() {
    cy.visit('https://nightly-rainforest.nuxeo.com')
    cy.get('#username')
      .click()
      .type('Administrator')
    cy.get('#password')
      .click()
      .type('Administrator')
    cy.get('.login_button')
      .click()
    cy.shadowGet('nuxeo-page')
  })
})

describe('View Dashboard', function() {
  it('Displays Dashboard', function() {
    cy.login('https://nightly-rainforest.nuxeo.com', 'Administrator', 'Administrator')
    cy.shadowGet('h3.header')
      .shadowContains('Recently Edited')
    cy.shadowGet('h3.header')
      .shadowContains('Tasks')
    cy.shadowGet('h3.header')
      .shadowContains('Recently Viewed')
    cy.shadowGet('h3.header')
      .shadowContains('Favorite Items')
  })
})