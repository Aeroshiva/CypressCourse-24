
describe('My First Test', () => 
{
    //test1
    it('Verify Tittle - positive', () => 
    {
      //steps
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.title().should('eq','OrangeHRM');

    }
    )

    //test2
    it('Verify Tittle - Negative', () => 
    {
        //steps
          cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
          cy.title().should('eq','!OrangeHRM');
  
      }
      )



}
)