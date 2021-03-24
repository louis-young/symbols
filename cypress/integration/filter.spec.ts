const selectedCategoryClasses = "text-blue-700 dark:text-white bg-blue-50 dark:bg-gray-700";

describe("Filter", () => {
  it("Selects the popular category by default.", () => {
    cy.visit("/");

    cy.findByRole("button", { name: "Popular" }).should("have.class", selectedCategoryClasses);

    cy.findByText("⌘").should("exist");
  });

  it("Selects another category when clicked.", () => {
    cy.visit("/");

    cy.findByText("⌘").should("exist");

    cy.findByRole("button", { name: "Math" }).click();

    cy.findByText("⌘").should("not.exist");

    cy.findByRole("button", { name: "Math" }).should("have.class", selectedCategoryClasses);

    cy.findByText("+").should("exist");

    cy.findByRole("button", { name: "Popular" }).should("not.have.class", selectedCategoryClasses);
  });

  it("Selects the Popular category when the logo is clicked.", () => {
    cy.visit("/");

    cy.findByRole("button", { name: "Math" }).click();

    cy.findByRole("button", { name: "Math" }).should("have.class", selectedCategoryClasses);

    cy.findByTestId("logo").click();

    cy.findByRole("button", { name: "Popular" }).should("have.class", selectedCategoryClasses);

    cy.findByRole("button", { name: "Math" }).should("not.have.class", selectedCategoryClasses);
  });
});
