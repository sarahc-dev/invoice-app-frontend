import InvoiceContainer from "./InvoiceContainer";

describe("<InvoiceContainer />", () => {
  context("when there are no invoices", () => {
    it("displays no invoices", () => {
      cy.mount(<InvoiceContainer invoices={[]} />);
      cy.contains("There is nothing here");
    });
  });
});
