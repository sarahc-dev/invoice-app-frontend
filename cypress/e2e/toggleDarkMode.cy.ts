describe("toggle dark mode", () => {
  it("should set the html class to light by default", () => {
    cy.visit("http://localhost:3000");
    cy.get("html").should("have.class", "light");
  });

  it("toggles to dark mode", () => {
    cy.visit("http://localhost:3000", {
      onBeforeLoad(win) {
        win.localStorage.setItem("theme", "light");
      },
    });
    cy.get("[data-cy='themeToggle']").click();
    cy.get("html").should("have.class", "dark");
    cy.get("[data-cy='themeToggle'] img").should(($img) => {
      const src = $img.attr("src");
      expect(src).to.include("icon-sun");
    });
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
    cy.get("[data-cy='themeToggle']").click();
    cy.get("html").should("have.class", "dark");
    cy.get("[data-cy='themeToggle']").click();
    cy.get("html").should("have.class", "light");
    cy.get("[data-cy='themeToggle'] img").should(($img) => {
      const src = $img.attr("src");
      expect(src).to.include("icon-moon");
    });
    cy.get("[data-cy='themeToggle']").should(
      "have.attr",
      "aria-label",
      "Change color scheme to dark",
    );
  });
});
