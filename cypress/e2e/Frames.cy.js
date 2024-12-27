import 'cypress-iframe'

describe("Handling iFrame",()=>{

    it.skip("Approach-1",()=>{
    
        cy.visit("https://the-internet.herokuapp.com/iframe")

        const iFrame = cy.get("#mce_0_ifr")
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap)

        iFrame.clear().type("Welcome {cmd+a}")

        cy.get("[aria-label='Bold']").click();

    })

    //by using custom command

    it.skip("Approach-2",()=>{
    
        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.getIframe('#mce_0_ifr').clear().type("Welcome {cmd+a}")

        cy.get("[aria-label='Bold']").click();

    })

    //By Using Cypress iFrame Plugin

    it("Approach-3",()=>{
    
        cy.visit("https://the-internet.herokuapp.com/iframe")

       cy.frameLoaded("#mce_0_ifr")
       cy.getIframe('#mce_0_ifr').clear().type("Welcome {cmd+a}")

       cy.get("[aria-label='Bold']").click();

    })
   

})