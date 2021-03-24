const DARK_MODE_LOCAL_STORAGE_KEY = "darkMode";

describe("Dark Mode", () => {
  it("Shows the dark mode toggle.", () => {
    cy.visit("/");

    cy.findByTestId("dark-mode-toggle").should("exist");

    cy.findByTestId("light-mode-toggle").should("not.exist");
  });

  it("Light mode is activated by default.", () => {
    cy.visit("/");

    cy.findByTestId("dark-mode-toggle").should("exist");

    cy.findByTestId("application-wrapper").should("not.have.class", "dark");
  });

  it("Dark mode is activated if persisted in browser storage.", () => {
    cy.visit("/");

    localStorage.setItem(DARK_MODE_LOCAL_STORAGE_KEY, "true");

    cy.findByTestId("light-mode-toggle").should("exist");

    cy.findByTestId("application-wrapper").should("have.class", "dark");
  });

  it("Activates dark mode when the dark mode toggle is clicked.", () => {
    cy.visit("/");

    localStorage.setItem(DARK_MODE_LOCAL_STORAGE_KEY, "false");

    cy.findByTestId("dark-mode-toggle").click();

    cy.findByTestId("dark-mode-toggle").should("not.exist");

    cy.findByTestId("light-mode-toggle").should("exist");

    cy.findByTestId("application-wrapper").should("have.class", "dark");
  });

  it("Activates light mode when the light mode toggle is clicked.", () => {
    cy.visit("/");

    localStorage.setItem(DARK_MODE_LOCAL_STORAGE_KEY, "true");

    cy.findByTestId("light-mode-toggle").click();

    cy.findByTestId("light-mode-toggle").should("not.exist");

    cy.findByTestId("dark-mode-toggle").should("exist");

    cy.findByTestId("application-wrapper").should("not.have.class", "dark");
  });
});
