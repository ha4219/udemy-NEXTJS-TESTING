it("runs auth flow for successful login to protected reservations page", () => {
  // visit reservations page for the first show (id = 0)
  cy.task("db:reset").visit("/reservations/0");

  cy.findByRole("heading", { name: /Sign in to your account/i }).should(
    "exist"
  );

  cy.findByRole("button", { name: /purchase/i }).should("not.exist");

  cy.findByLabelText(/email address/i)
    .clear()
    .type(Cypress.env("TEST_USER_EMAIL"));

  cy.findByLabelText(/password/i)
    .clear()
    .type(Cypress.env("TEST_PASSWORD"));

  cy.findByRole("main").within(() => {
    cy.findByRole("button", {
      name: /sign in/i,
    }).click();
  });

  cy.findByRole("button", { name: /purchase/i }).should("exist");
  cy.findByRole("heading", { name: /the wandering bunnies/i }).should("exist");

  cy.findByRole("button", { name: Cypress.env("TEST_USER_EMAIL") }).should(
    "exist"
  );
  cy.findByRole("button", { name: /sign out/i }).should("exist");

  cy.findByRole("button", { name: /sign in/i }).should("not.exist");
});
