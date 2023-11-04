import Header from "./Header";
import "@/app/globals.css";

describe("<Header />", () => {
  it("displays header", () => {
    cy.mount(<Header />);
    cy.contains("Header");
  });
});
