describe("display invoices", () => {
  it("fetches invoices and displays a message if there are no invoices", () => {
    cy.visit("http://localhost:3000");
    cy.contains("There is nothing here");
  });
});
