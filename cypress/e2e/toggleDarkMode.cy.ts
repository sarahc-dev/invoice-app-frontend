describe("toggle dark mode", () => {
  it("sets the html class to the system theme", () => {
    cy.visit("http://localhost:3000");
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const theme = isDarkMode ? "dark" : "light";
    cy.get("html").should("have.class", theme);
  });

  it("sets the html class to dark when system is set to dark mode", () => {
    cy.visit("http://localhost:3000", {
      onBeforeLoad(win) {
        cy.stub(win, "matchMedia")
          .withArgs("(prefers-color-scheme: dark)")
          .returns({
            matches: true,
          });
      },
    });
    cy.get("html").should("have.class", "dark");
  });

  it("sets the html class to light when theme is set to light", () => {
    cy.visit("http://localhost:3000", {
      onBeforeLoad(win) {
        win.localStorage.setItem("theme", "light");
      },
    });
    cy.get("html").should("have.class", "light");
  });

  it("sets the html class to dark when theme is set to dark", () => {
    cy.visit("http://localhost:3000", {
      onBeforeLoad(win) {
        win.localStorage.setItem("theme", "dark");
      },
    });
    cy.get("html").should("have.class", "dark");
  });

  it("toggles to dark mode", () => {
    cy.visit("http://localhost:3000", {
      onBeforeLoad(win) {
        win.localStorage.setItem("theme", "light");
      },
    });
    cy.get("html").should("have.class", "light");
    cy.get("[data-cy='themeToggle']").click();
    cy.get("html").should("have.class", "dark");
    cy.get("[data-cy='sunIcon']").should("exist");
    cy.get("[data-cy='themeToggle']").should(
      "have.attr",
      "aria-label",
      "Change color scheme to light",
    );
  });

  it("toggles back to light mode when clicked twice", () => {
    cy.visit("http://localhost:3000", {
      onBeforeLoad(win) {
        win.localStorage.setItem("theme", "light");
      },
    });
    cy.get("html").should("have.class", "light");
    cy.get("[data-cy='themeToggle']").click();
    cy.get("html").should("have.class", "dark");
    cy.get("[data-cy='themeToggle']").click();
    cy.get("html").should("have.class", "light");
    cy.get("[data-cy='moonIcon']").should("exist");
    cy.get("[data-cy='themeToggle']").should(
      "have.attr",
      "aria-label",
      "Change color scheme to dark",
    );
  });
});
