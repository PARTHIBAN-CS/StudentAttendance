describe("LoginForm",()=>{
    it("Login",()=>{
        cy.visit("http://localhost:3000/");
        cy.get("#mail").type("x");
        cy.get("#password").type("x");
        cy.get("#login").click();
    })
})