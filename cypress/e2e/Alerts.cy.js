describe("Alerts",()=>{

    //JavaScript Alert: It will have some text and an OK button
    it.skip("JS Alerts",()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
       
        cy.get("button[onclick='jsAlert()']").click()

            cy.on('window:alert',(t)=>{
                expect(t).to.contain("I am a JS Alert")
            })
        cy.get('#result').should("have.text","You successfully clicked an alert")
    })
    
    //JavaScript Confirmation Alert: It will have some text and an OK & CANCEL button
   
    it.skip("JS Confirmation Alerts with Ok btn",()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
       
        cy.get("button[onclick='jsConfirm()']").click()

            cy.on('window:confirm',(t)=>{
                expect(t).to.contain("I am a JS Confirm")
            })
            cy.get('#result').should("have.text","You clicked: Ok")
           
    })

    it.skip("JS Confirmation Alerts with Cancel",()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
       
        cy.get("button[onclick='jsConfirm()']").click()

            cy.on('window:confirm',(t)=>{
                expect(t).to.contain("I am a JS Confirm")
            })
            cy.on('window:confirm',(t)=>false)
            cy.get('#result').should("have.text","You clicked: Cancel")
    })

    //JavaScript Prompt Alert: It will have some text with text box for user input along with OK button
    it("JS Prompt Alert",()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
       
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome');
        })
        cy.get("button[onclick='jsPrompt()']").click()
        cy.get('#result').should("have.text","You entered: welcome")

           
    })


    //Authenticated Alert
    it.only("JS Authenticated Alert",()=>{

       /* cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:
                                                                    {username:"admin",
                                                                    password:"admin"
                                                                    }
                                                                });

        cy.get('p').should('have.contain',"Congratulations")              
        */

       cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
       cy.get('p').should('have.contain',"Congratulations") 

           
    })
})