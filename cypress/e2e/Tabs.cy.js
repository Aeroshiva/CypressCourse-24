
describe("Handle Tabs",()=>{

    it.skip("Approach-1",()=>{

    cy.visit("https://the-internet.herokuapp.com/windows")
    cy.get(".example>a").invoke('removeAttr','target').click();//remove attribute and click

    cy.url().should('include',"https://the-internet.herokuapp.com/windows/new") //in child yab

    cy.wait(5000)
    //Operations --> go to parent tab
    cy.go('back');
    })

    it("Approach-2",()=>{

        cy.visit("https://the-internet.herokuapp.com/windows") //Parent tab
        cy.get(".example>a").then((e)=>{

           let url =  e.prop('href'); //target URL
           cy.visit(url)
        })
        
        cy.url().should('include',"https://the-internet.herokuapp.com/windows/new") //in child yab

        cy.wait(5000)
        //Operations --> go to parent tab
        cy.go('back');

        })


})