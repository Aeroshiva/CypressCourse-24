describe("Check UI Elements", ()=> {

    /* it("Checking Radio buttons",()=>{
        
        cy.visit("https://testautomationpractice.blogspot.com/")

        cy.get('#male').should('be.visible') //assertion to check element is visible

        cy.get('#female').should('be.visible') //assertion to check element is visible

        //select radio btn
        cy.get('#male').check().should('be.checked')
        cy.get('#female').should('not.be.checked')

        cy.get('#female').check().should('be.checked')
        cy.get('#male').should('not.be.checked')
        
    
    }) */

        it("Checking check boxes",()=>{
        
            cy.visit("https://testautomationpractice.blogspot.com/")
    
           /*  //visibility of element
            cy.get('#sunday').should('be.visible')
            
            //selecting single check-box - monday
            cy.get('#monday').check().should('be.checked')     
            
            //Unselecting single check-box - monday
              cy.get('#monday').uncheck().should('not.be.checked')   
         */
            //selecting All checkBoxes
               // cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
            //  cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

            //select first checkbox
            cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
            cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')


        })
})