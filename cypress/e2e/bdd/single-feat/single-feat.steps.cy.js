const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");
import { user } from "../../../fixtures/data";

Given("I visit the saucedemo site", () => {
  cy.launchSite();
});

When("I enter the {string} username", (userType) => {
  cy.enterUserName(userType);
});

When("I enter the password", () => {
  cy.enterPassword(user.password);
});

When("I click on the login button", () => {
  cy.clickButton();
});

Then("I should see the {string}", (experience) => {
  switch (experience) {
    case "products page":
      cy.verifyProductsPage();
      break;
    case "delayed products page":
      cy.verifyProductsPage();
      break;
    case "duplicate product images":
      cy.verifyProductImages();
  }
});
