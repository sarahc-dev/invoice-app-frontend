import InvoiceContainer from "./InvoiceContainer";
import invoicesData from "../../cypress/fixtures/invoices.json";
import { Invoice } from "@/types";

const invoices = invoicesData as Invoice[];

describe("<InvoiceContainer />", () => {
  context("when there are no invoices", () => {
    it("displays no invoices", () => {
      cy.mount(<InvoiceContainer invoices={[]} />);
      cy.contains("There is nothing here");
    });
  });

  context("when there are invoices", () => {
    it("displays a list of invoices", () => {
      cy.mount(<InvoiceContainer invoices={invoices} />);
      cy.get("ul").should("exist");
      cy.get('[data-cy="invoiceList"]').children().should("have.length", 7);
    });
  });
});
