describe("New User Registration",()=>{
    it("it Register",()=>{
        cy.visit("http://localhost:3000/");
        cy.get("#registerbutton").click();
        cy.get("#username").type("kavitha");
        cy.get("#mail").type("kavitha@gmail.com");
        cy.get("#password").type("kavitha");
        cy.get("#register").click();
    })
})