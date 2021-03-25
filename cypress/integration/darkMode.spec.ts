describe("Dark Mode", () => {
  const DARK_MODE_LOCAL_STORAGE_KEY = "darkMode";

  const activateDarkModeText = "Activate Dark Mode";
  const activateLightModeText = "Activate Light Mode";

  before(() => {
    Cypress.on("window:before:load", (window) => {
      cy.spy(window.localStorage, "setItem").as("setItem");
    });
  });

  it("Shows the dark mode toggle.", () => {
    cy.visit("/");

    cy.findByLabelText(activateDarkModeText).should("exist");

    cy.findByLabelText(activateLightModeText).should("not.exist");
  });

  it("Light mode is activated by default.", () => {
    cy.visit("/");

    cy.findByLabelText(activateDarkModeText).should("exist");

    cy.findByLabelText(activateLightModeText).should("not.exist");

    cy.findByTestId("application").should("not.have.class", "dark");
  });

  it("Dark mode is activated if persisted in browser storage.", () => {
    cy.visit("/");

    localStorage.setItem(DARK_MODE_LOCAL_STORAGE_KEY, "true");

    cy.findByLabelText(activateLightModeText).should("exist");

    cy.findByLabelText(activateDarkModeText).should("not.exist");

    cy.findByTestId("application").should("have.class", "dark");
  });

  it("Activates dark mode when the dark mode toggle is clicked.", () => {
    cy.visit("/");

    cy.findByLabelText(activateDarkModeText).click();

    cy.get("@setItem").should(
      "have.been.calledWith",
      DARK_MODE_LOCAL_STORAGE_KEY,
      "true"
    );

    cy.findByLabelText(activateDarkModeText).should("not.exist");

    cy.findByLabelText(activateLightModeText).should("exist");

    cy.findByTestId("application").should("have.class", "dark");
  });

  it("Activates light mode when the light mode toggle is clicked.", () => {
    cy.visit("/");

    localStorage.setItem(DARK_MODE_LOCAL_STORAGE_KEY, "true");

    cy.findByLabelText(activateLightModeText).click();

    cy.get("@setItem").should(
      "have.been.calledWith",
      DARK_MODE_LOCAL_STORAGE_KEY,
      "false"
    );

    cy.findByLabelText(activateLightModeText).should("not.exist");

    cy.findByLabelText(activateDarkModeText).should("exist");

    cy.findByTestId("application").should("not.have.class", "dark");
  });
});
