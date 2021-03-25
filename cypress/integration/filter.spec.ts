describe("Filter", () => {
  const popularSymbol = "⌘";
  const mathSymbol = "+";

  beforeEach(() => {
    cy.visit("/");
  });

  it("Selects the popular category by default.", () => {
    cy.findByRole("button", { name: "Popular" }).should(
      "have.attr",
      "aria-current",
      "true"
    );

    cy.findByText(popularSymbol).should("exist");
  });

  it("Selects another category when clicked.", () => {
    cy.findByText(popularSymbol).should("exist");

    cy.findByRole("button", { name: "Math" }).click();

    cy.findByText(popularSymbol).should("not.exist");

    cy.findByRole("button", { name: "Math" }).should(
      "have.attr",
      "aria-current",
      "true"
    );

    cy.findByText(mathSymbol).should("exist");

    cy.findByRole("button", { name: "Popular" }).should(
      "not.have.attr",
      "aria-current",
      "true"
    );
  });

  it("Selects the Popular category when the logo is clicked.", () => {
    cy.findByRole("button", { name: "Math" }).click();

    cy.findByRole("button", { name: "Math" }).should(
      "have.attr",
      "aria-current",
      "true"
    );

    cy.findByTestId("logo").click();

    cy.findByRole("button", { name: "Popular" }).should(
      "have.attr",
      "aria-current",
      "true"
    );

    cy.findByRole("button", { name: "Math" }).should(
      "not.have.attr",
      "aria-current",
      "true"
    );
  });
});
