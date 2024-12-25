describe("Assertions Demo", ()=>{

    /* it("Implicit Assertions", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
        //Implicit Assertions for URL-- should & and
            cy.url().should('include','orangehrmlive');
            cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
            cy.url().should('contain','orangehrmlive');
           cy.url().should('include','orangehrmlive')
            .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .should('contain','orangehrmlive');
            
            cy.url().should('include','orangehrmlive')
            .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .and('contain','orangehrmlive');

            //for negative assertions
            cy.url().should('include','orangehrmlive')
            .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .and('not.contain','orangehrmlive!');

        //Implicit Assertions for title-- should & and

            cy.title().should('include','Orange')
            .and('eq','OrangeHRM')
            .and('contain','HRM');

        //Implicit Assertions for elements-- should & and
            cy.get('.orangehrm-login-branding > img').should('be.visible')  //logo visibility check
            .and('exist')  //logo visibility check

        //capturing all the links
            cy.get('a').should('have.length','5') //check num of links

        //passing values in text filed
            cy.get("input[placeholder='Username']").type('Admin')
            cy.get("input[placeholder='Username']").should('have.value','Admin') //checking provided value 

        
    }) */

            it("Explicit Assertions", ()=>{
                cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
                
               cy.get("input[placeholder='Username']").type("Admin")
               cy.get("input[placeholder='Password']").type("admin123")
               cy.get("button[type='submit']").click()

               //Explicit Assertions -- need javascript assertions
                let exp_name = 'Maryam Alfaifi';

                cy.get(".oxd-userdropdown-name").then( (x)=>{
                        let act_name = x.text()

                        //BDD Style
                        expect(act_name).to.equal(exp_name)
                        expect(act_name).to.not.equal(exp_name)

                        //TDD Style
                        assert.equal(act_name,exp_name)
                        assert.notEqual(act_name,exp_name)
                })
                
        
                
            })



})