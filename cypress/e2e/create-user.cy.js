describe("Usuario incorrecto", () => {
  it("Muestra un error si los datos son incorrectos", () => {
    cy.visit("http://localhost:3000/users/new");
    cy.get('input[name="username"]').type("us");
    cy.get('input[name="email"]').type("email@gmail.com");
    cy.get('button[type="submit"]').click();
    cy.contains("Mínimo 5 caracteres").should("be.visible");
  });
});
