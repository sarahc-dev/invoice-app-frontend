import InvoiceCountStatus from "./InvoiceCountStatus";

describe("<InvoiceCountStatus />", () => {
  context("when there is no filter and no invoices", () => {
    it("displays no invoices", () => {
      cy.mount(<InvoiceCountStatus count={0} filter="None" />);
      cy.contains("No invoices");
    });
  });

  context("when there is 1 invoice", () => {
    it("displays total invoices", () => {
      cy.mount(<InvoiceCountStatus count={1} filter="None" />);
      cy.contains("There is 1 total invoice");
      cy.get("p span").should("have.class", "max-md:sr-only");
    });

    it("displays paid invoices", () => {
      cy.mount(<InvoiceCountStatus count={1} filter="Paid" />);
      cy.contains("There is 1 paid invoice");
      cy.get("p span").should("have.class", "max-md:sr-only");
    });

    it("displays pending invoices", () => {
      cy.mount(<InvoiceCountStatus count={1} filter="Pending" />);
      cy.contains("There is 1 pending invoice");
      cy.get("p span").should("have.class", "max-md:sr-only");
    });

    it("displays draft invoices", () => {
      cy.mount(<InvoiceCountStatus count={1} filter="Draft" />);
      cy.contains("There is 1 draft invoice");
      cy.get("p span").should("have.class", "max-md:sr-only");
    });
  });

  context("when there is more than 1 invoice", () => {
    it("displays total invoices", () => {
      cy.mount(<InvoiceCountStatus count={5} filter="None" />);
      cy.contains("There are 5 total invoices");
      cy.get("p span").should("have.class", "max-md:sr-only");
    });

    it("displays paid invoices", () => {
      cy.mount(<InvoiceCountStatus count={5} filter="Paid" />);
      cy.contains("There are 5 paid invoices");
      cy.get("p span").should("have.class", "max-md:sr-only");
    });

    it("displays pending invoices", () => {
      cy.mount(<InvoiceCountStatus count={5} filter="Pending" />);
      cy.contains("There are 5 pending invoices");
      cy.get("p span").should("have.class", "max-md:sr-only");
    });

    it("displays draft invoices", () => {
      cy.mount(<InvoiceCountStatus count={5} filter="Draft" />);
      cy.contains("There are 5 draft invoices");
      cy.get("p span").should("have.class", "max-md:sr-only");
    });
  });
});
