

describe('Presta 1.6', function () {

  it('TC#1: E-Commerce - Sign Up', function () {
   
  //  cy.visit("http://accounts.lambdatest.com/dashboard")
  //  cy.get("[href='/login/google']").click()
  cy.visit("https://console.internetcomputerservices.com/#/login")
  cy.contains(" Sign in with Google").click()
    cy.origin("https://accounts.google.com/", ()=>{
        cy.get("#identifierId").type("muneebrana63@gmail.com")
        cy.get("span").contains("Next").click()
        cy.wait(10000)
        Cypress.on('uncaught:exception', (err) => !err.message.includes('ResizeObserver loop limit exceeded'))
        cy.get("[name='password']").type("mun123,./")
        cy.get("span").contains("Next").click()
        cy.wait(10000)
  
    })
   // cy.visit("http://accounts.lambdatest.com/dashboard")
  
})
})


