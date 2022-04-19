
describe("Student Registration",()=>{
    it("it Register students",()=>{
        cy.visit("http://localhost:3000/RegistrationForm");
        //cy.get("#registerbutton").click();
        cy.get("#firstname").type("Kash");
        cy.get("#lastname").type("k");
        cy.get("#gender").select("male");
        cy.fixture('Bird.jpg').then(fileContent => {
            cy.get('input[type="file"]').attachFile({
                fileContent: fileContent.toString(),
                fileName: 'Bird.jpg',
                mimeType: 'image/jpg'
            });
        });
        cy.get("#phoneno").type("98787675");
        cy.get("#submit").click();


    })
})