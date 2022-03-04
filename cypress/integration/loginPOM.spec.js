/// <reference types="cypress" />

import LoginPage, { loginPage } from '../page_objects/loginPOM';

describe("login test POM", () => {

    before("visit gallery page", () => {
        cy.visit("https://gallery-app.vivifyideas.com/Login");
    });
it.only ("click on the login button", () => {
    loginPage.login('zxcv@zxcv.com', 'zxcvzxcvzxcv123')
    //cy.get(Locators.Header.button).eq(1).click();
    //cy.get(Locators.CommonElements.emailField).type(userData.randomEmail);
    //cy.get(Locators.CommonElements.passwordField).type(userData.randomPassword);
   // cy.get(Locators.CommonElements.submitBtn).click();
});
    it("logout", () => {
        loginPage.logoutBtn.should("have.length", 4);
        loginPage.logoutBtn.eq(3).click();
    });
});