describe("Search Symbols", () => {
  it("Shows an input.", () => {
    cy.visit("/");

    cy.findByPlaceholderText("Search Symbols").should("exist");
  });

  it("Allows user input.", () => {
    cy.visit("/");

    cy.findByPlaceholderText("Search Symbols").type("__TEXT__").should("have.value", "__TEXT__");
  });

  it("Clears the input when the clear button is clicked.", () => {
    cy.visit("/");

    cy.findByPlaceholderText("Search Symbols").type("__TEXT__");

    cy.findByRole("button", { name: "❌" }).click();

    cy.findByPlaceholderText("Search Symbols").should("have.value", "");
  });

  it("Clears the input when the logo is clicked.", () => {
    cy.visit("/");

    cy.findByPlaceholderText("Search Symbols").type("__TEXT__");

    cy.findByTestId("logo").click();

    cy.findByPlaceholderText("Search Symbols").should("have.value", "");
  });

  it("Matches symbols when searched for.", () => {
    cy.visit("/");

    cy.findByPlaceholderText("Search Symbols").type("Command");

    cy.findByText("⌘").should("exist");
  });

  it("Shows the symbol not found message when no matches are found.", () => {
    cy.visit("/");

    cy.findByPlaceholderText("Search Symbols").type("__TEXT__");

    cy.findByText("No symbols matched your search query. Please try a different word.").should("exist");
  });
});
