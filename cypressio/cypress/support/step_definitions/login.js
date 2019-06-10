import {
  When,
  Then
} from 'cypress-cucumber-preprocessor/steps';

When(`I login as {string}`, (username) => {
  cy.login(username)
})

Then(`I am logged in as {string}`, (username) => {
  cy.shadowGet('nuxeo-menu-icon[name="profile"]')
    .shadowClick()
  cy.shadowGet('iron-pages#drawer-pages')
    .shadowFind('div.header')
    .shadowContains(username)
})