import Button from "./Button";

describe("<Button />", () => {
  it("displays the correct text", () => {
    cy.mount(
      <Button style="bg-blue-200" onClick={cy.stub()}>
        Test
      </Button>,
    );
    cy.contains("Test");
  });

  it("calls the onClick function when clicked", () => {
    const onClickStub = cy.stub().as("onClick");
    cy.mount(
      <Button style="bg-blue-200" onClick={onClickStub}>
        Test
      </Button>,
    );
    cy.get("[data-cy='button']").click();
    cy.get("@onClick").should("have.been.calledOnce");
  });
});
