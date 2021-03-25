describe("Copy", () => {
  const copyrightButtonText = "© Copyright";
  const copiedNotificationText = "Copied";

  beforeEach(() => {
    cy.visit("/");
  });

  before(() => {
    Cypress.on("window:before:load", (window) => {
      cy.spy(window.navigator.clipboard, "writeText").as("writeText");
    });
  });

  it("Does not show the copied notification before it is clicked.", () => {
    cy.findByRole("button", { name: copyrightButtonText })
      .parent()
      .within(() =>
        cy.findByText(copiedNotificationText).should("not.be.visible")
      );
  });

  it("Copies a symbol to the clipboard when clicked.", () => {
    cy.findByRole("button", { name: copyrightButtonText }).click();

    cy.get("@writeText").should("have.been.calledOnceWith", "©");
  });

  it("Shows the copied notification after it is clicked.", () => {
    cy.findByRole("button", { name: copyrightButtonText }).click();

    cy.findByRole("button", { name: copyrightButtonText })
      .parent()
      .within(() => cy.findByText(copiedNotificationText).should("be.visible"));
  });
});
