describe("Search", () => {
  const searchLabelText = "Search Symbols";

  beforeEach(() => {
    cy.visit("/");
  });

  it("Shows an input.", () => {
    cy.findByLabelText(searchLabelText).should("exist");
  });

  it("Is not disabled.", () => {
    cy.findByLabelText(searchLabelText).should("not.be.disabled");
  });

  it("Allows user input.", () => {
    cy.findByLabelText(searchLabelText).should("not.be.disabled");

    cy.findByLabelText(searchLabelText)
      .type("__TEXT__")
      .should("have.value", "__TEXT__");
  });

  it("Clears the input when the clear button is clicked.", () => {
    cy.findByLabelText(searchLabelText).type("__TEXT__");

    cy.findByLabelText("Clear Search").click();

    cy.findByLabelText(searchLabelText).should("have.value", "");
  });

  it("Clears the input when the logo is clicked.", () => {
    cy.findByLabelText(searchLabelText).type("__TEXT__");

    cy.findByTestId("logo").click();

    cy.findByLabelText(searchLabelText).should("have.value", "");
  });

  it("Matches symbols when searched.", () => {
    cy.findByLabelText(searchLabelText).type("Command");

    cy.findByText("⌘").should("exist");
  });

  it("Shows the symbol not found message when no symbols are found.", () => {
    cy.findByLabelText(searchLabelText).type("__TEXT__");

    cy.findByText(
      "No symbols matched your search query. Please try a different word."
    ).should("exist");
  });
});
