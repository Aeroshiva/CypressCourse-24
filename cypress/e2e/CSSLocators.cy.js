describe('CSSLocators', () =>{

    it("csslocators", ()=>{
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.get("[name='search_query']").type("T-Shirts"); //search
        //cy.get(".search_query").type("T-Shirts"); //search
        //cy.get("#search_query_top").type("T-Shirts"); //search
        cy.get("[name='submit_search']").click(); //Search
        cy.get(".lighter").contains("T-Shirts"); //Assertion

    })
})