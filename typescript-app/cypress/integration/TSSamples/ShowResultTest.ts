describe("MarkList",()=>{
    it("it shows marklist",()=>{
        cy.visit("http://localhost:3000/ShowResults");
        cy.get("#result").click();
       
    })
})