describe("Weather app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Default city is SOfia", () => {
    cy.get('[data-cy="city"]').should("include.text", "Sofia");
  });

  it("Should update header with searched city", () => {
    const MOCK_CITY = "Varna";
    cy.get('[data-cy="search-form"] input')
      .type(MOCK_CITY)
      .get('[data-cy="search-form"]')
      .submit()
      .get('[data-cy="city"]')
      .should("include.text", MOCK_CITY);
  });

  it("Should show toast message on unknonw city", () => {
    const UNKNOWN_CITY = "V";
    cy.get('[data-cy="search-form"] input')
      .type(UNKNOWN_CITY)
      .get('[data-cy="search-form"]')
      .submit()
      .get('[data-cy="toast"]')
      .should("be.visible");
  });

  it("Should display forecast data for 6 days", () => {
    const MOCK_CITY = "Vraca";
    cy.get('[data-cy="search-form"] input')
      .type(`${MOCK_CITY}{enter}`)
      .get('[data-cy="forecast"]')
      .should("have.length", 6);
  });
});

export {};
