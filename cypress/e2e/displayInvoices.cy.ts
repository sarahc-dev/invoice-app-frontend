const dataFilePath = "/data.json";

describe("display invoices", () => {
  it("fetches invoices and displays a message if there are no invoices", () => {
    cy.intercept("GET", dataFilePath, []).as("data");
    cy.visit("http://localhost:3000");
    cy.contains("There is nothing here");
  });

  it("fetches invoices and displays them as a list", () => {
    cy.fixture("invoices").then((json) => {
      cy.intercept("GET", dataFilePath, json);
    });
    cy.visit("http://localhost:3000");
    cy.contains("7 total invoices");
  });
});
