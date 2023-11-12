import InvoiceItem from "./Invoice";
import invoicesData from "../../cypress/fixtures/invoices.json";
import { Invoice } from "@/types";

const invoices = invoicesData as Invoice[];

describe("<Invoice />", () => {
  it("displays an invoice summary", () => {
    cy.mount(<InvoiceItem invoice={invoices[0]} />);
    cy.contains("RT3080");
    cy.contains("Due 19 Aug 2021");
    cy.contains("Jensen Huang");
    cy.contains("£ 1,800.90");
    cy.contains("Paid");
  });

  it("is a link to the invoice page", () => {
    cy.mount(<InvoiceItem invoice={invoices[0]} />);
    cy.get("a").should("have.attr", "href").and("include", "/rt3080");
  });
});
