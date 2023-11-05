import ThemeToggle from "./ThemeToggle";

describe("<ToggleThemeButton />", () => {
  it("displays moon icon when theme is light", () => {
    cy.mount(<ThemeToggle theme="light" setTheme={cy.stub()} />);
    cy.get("[data-cy='moonIcon']").should("exist");
    cy.get("[data-cy='sunIcon']").should("not.exist");
    cy.get("[data-cy='themeToggle']").should(
      "have.attr",
      "aria-label",
      "Change color scheme to dark",
    );
  });

  it("displays sun icon when theme is dark", () => {
    cy.mount(<ThemeToggle theme="dark" setTheme={cy.stub()} />);
    cy.get("[data-cy='sunIcon']").should("exist");
    cy.get("[data-cy='moonIcon']").should("not.exist");
    cy.get("[data-cy='themeToggle']").should(
      "have.attr",
      "aria-label",
      "Change color scheme to light",
    );
  });

  it("calls setTheme with dark when theme is light", () => {
    const setThemeStub = cy.stub().as("setTheme");
    cy.mount(<ThemeToggle theme="light" setTheme={setThemeStub} />);
    cy.get("[data-cy='themeToggle']").click();
    cy.get("@setTheme").should("be.calledWith", "dark");
  });

  it("calls setTheme with light when theme is dark", () => {
    const setThemeStub = cy.stub().as("setTheme");
    cy.mount(<ThemeToggle theme="dark" setTheme={setThemeStub} />);
    cy.get("[data-cy='themeToggle']").click();
    cy.get("@setTheme").should("be.calledWith", "light");
  });
});
