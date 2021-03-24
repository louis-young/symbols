const visibleCopyNotificationClasses = "opacity-100 z-20";

describe("Copy", () => {
  it.skip("Copies a symbol to the clipboard when clicked.", () => {
    cy.visit("/");

    cy.spy(navigator.clipboard, "writeText");

    cy.findByText("Copyright").click();

    cy.findByText("Copyright").within(() =>
      cy.findByText("Copied").should("have.class", visibleCopyNotificationClasses)
    );

    cy.then(() => {
      expect(navigator.clipboard.writeText).to.be.calledOnce;
    });
  });
});
