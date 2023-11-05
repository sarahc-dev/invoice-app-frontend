import NewButton from "./NewButton";

describe("<NewButton />", () => {
  it("displays displays the correct text in an accessible manner using sr-only", () => {
    cy.mount(<NewButton onClick={cy.stub()} />);
    cy.get("[data-cy='newButton']").contains("New Invoice");
    cy.get("[data-cy='newButtonContent'] span").should(
      "have.class",
      "max-md:sr-only",
    );
  });

  it("calls the onClick function when clicked", () => {
    const onClickStub = cy.stub().as("onClick");
    cy.mount(<NewButton onClick={onClickStub} />);
    cy.get("[data-cy='newButton']").click();
    cy.get("@onClick").should("have.been.calledOnce");
  });
});
