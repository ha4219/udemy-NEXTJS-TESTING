it("display correct heading when navigating to shows route", () => {
  cy.visit("/");
  cy.findByRole("button", {
    name: /shows/i,
  }).click();
  cy.findByRole("heading", {
    name: /upcoming shows/i,
  }).should("exist");
});

it("display correct heading when navigating to bands route", () => {
  cy.visit("/");
  cy.findByRole("button", {
    name: /bands/i,
  }).click();
  cy.findByRole("heading", {
    name: /Our Illustrious Performers/i,
  }).should("exist");
});

it("displays correct band name for band route that existed at build time", () => {
  cy.task("db:reset").visit("/bands/1");
  cy.findByRole("heading", {
    name: /Shamrock Pete/i,
  }).should("exist");
});

// it("reset the db", () => {
//   cy.task("db:reset");
// });

it("displays error for band not in db", () => {
  cy.task("db:reset").visit("/bands/12345");
  cy.findByText(/error: band not found/i).should("exist");
});
