describe("MarkList",()=>{
    it("it shows marklist",()=>{
        cy.visit("http://localhost:3000/Marklist");
        //cy.get("#search").type("mayil");
        cy.get("#selectroll").select("46");
        cy.get("#add").click();
        cy.get("#mark1").type("10");
        cy.get("#mark2").type("20");
        cy.get("#mark3").type("30");
        cy.get("#save").click();
    })
})