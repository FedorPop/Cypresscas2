/// <reference types="cypress" />
const Locators = require('../fixtures/Locators.json')
const { faker } = require('@faker-js/faker');
describe("login test", () => {

    let userData = {
        randomName: faker.name.firstName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password()
    }
    before("visit gallery page", () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
    });
it.only ("click on the login button", () => {
    console.log(userData.randomName);
    cy.get(Locators.Header.button).eq(1).click();
    cy.get(Locators.CommonElements.emailField).type(userData.randomEmail);
    cy.get(Locators.CommonElements.passwordField).type(userData.randomPassword);
    cy.get(Locators.CommonElements.submitBtn).click();
    // logout
    cy.get(Locators.Header.button).should('have.length', 4);
    cy.get(Locators.Header.button).eq(3).click();
});
});