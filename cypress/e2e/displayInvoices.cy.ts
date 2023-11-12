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
    cy.get('[data-cy="invoiceList"]').children().should("have.length", 7);
    cy.get('[data-cy="invoiceList"]')
      .first()
      .should("contain.text", "#RT3080")
      .and("contain.text", "Due 19 Aug 2021")
      .and("contain.text", "Jensen Huang")
      .and("contain.text", "£ 1,800.90")
      .and("contain.text", "Paid");
    cy.get('[data-cy="invoiceList"]')
      .last()
      .should("contain.text", "#FV2353")
      .and("contain.text", "Due 12 Nov 2021")
      .and("contain.text", "Anita Wainwright")
      .and("contain.text", "£ 3,102.04")
      .and("contain.text", "Draft");
  });
});
