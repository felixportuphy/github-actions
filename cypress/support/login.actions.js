Cypress.Commands.add("launchSite", () => {
  cy.visit("/");
});

Cypress.Commands.add("enterUserName", (username) => {
  cy.get('[data-test="username"]').type(username);
});

Cypress.Commands.add("enterPassword", (password) => {
  cy.get('[data-test="password"]').type(password);
});

Cypress.Commands.add("clickButton", () => {
  cy.get('[data-test="login-button"]').click();
});

Cypress.Commands.add("verifyProductsPage", () => {
  cy.get(".title").should("exist").and("have.text", "Products");
});

Cypress.Commands.add("verifyProductImages", () => {
  cy.get(".inventory_item_img").should("exist").and("have.length.gt", 1);
});
