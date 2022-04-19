
describe("Registration",()=>{
    it("it Register",()=>{
        cy.visit("http://localhost:3000/");
        cy.get("#registerbutton").click();
        cy.get("#username").type("Fahir");
        cy.get("#mail").type("fahir@gmail.com");
        cy.get("#password").type("fahir");
        cy.get("#register").click();

    })
})