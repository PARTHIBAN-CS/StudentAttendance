describe("Details",()=>{
    it("it shows details",()=>{
        cy.visit("http://localhost:3000/Details");
        cy.get("#search").type("mayil");
        //cy.get("#edit").click();
        //cy.get("#delete").click();
    })
})