///<reference types="Cypress" />
describe("Suite", ()=>{
    // before(() => {
    //     cy.wait(3000)
    //     console.stdlog = console.log.bind(console);
    //     console.logs = [];
    //     console.log = function(){
    //         console.logs.push(Array.from(arguments));
    //         console.stdlog.apply(console, arguments);
    //     }
    // })
    it("Test",()=>{
        
        cy.visit("/")
        cy.wait(3000)
        cy.get(".asset-list").find(".asset").eq(2).click()
        cy.wait(5000)
        cy.get("video").first().click()
        cy.get("[class='pp-ui-bar-range-thumb pp-ui-bar-range-thumb-foreground']").should("be.visible")
        cy.get("[class='pp-ui-bar-range-thumb pp-ui-bar-range-thumb-foreground']").then(function($input){
         $input[0].setAttribute('style', 'left: 70%;')
          }).should('have.attr', 'style', 'left: 70%;')

          cy.get("[class='pp-ui-button-22 pp-ui-button pp-ui-button-options']").click()
          cy.get("[class='pp-ui-clickable']").eq(3).then(videobutton=>{
          cy.wrap(videobutton).click()
          cy.wrap(videobutton).find("span").should("contain","960x540 @ 2.48 Mbps" )
          })
    }) 
})
/*
     it.only("Hello", ()=>{

     
        console.log("Hello World")
        
        console.stdlog = console.log.bind(console);
            console.logs = [];
            console.log = function(){
                console.logs.push(Array.from(arguments));
                console.stdlog.apply(console, arguments);
                console.log(console.logs[0]) 
            }
           
            
            

        })
      */
    
        
        
      //  cy.get("[class='pp-ui-options-subtitle']").should("contain ","(960x540 @ 2.48 Mbps)")
        //  cy.wait(3000)
        //   cy.window().then((win) => {
        //     cy.spy(win.console, "log").as("log")
        //   })
        //   Cypress.on("window:load", (win)=> {
        //     cy.spy(win.console, "log").as("log")
        //   })
        //cy.wait(10000)
        // let spy;
        // Cypress.on('window:before:load', (win) => {
        //     cy.spy(win.console, 'log').as("loger");
        // });
        // cy.get("@loger").include("PAUSED") 
      //  cy.wait(60000)
    
       
        // let spy;
        // Cypress.on('window:before:load', (win) => {
        //   spy = cy.spy(win.console, 'log');
        // });
        
        //          // console.log('hello', 'world')
        
        // cy.then(() => {
        //   const calls = spy.getCalls();
        //   expect(calls.length).to.eq(11)
        //   calls.forEach(element => console.log(element.args))
          
          //expect(calls[10].args).to.deep.eq(['Player state change:' , 'PLAYING'])
        //})
          //expect(win.console.log).to.have.callCount(0);

   // expect(calls.length).to.eq(3)
    //expect(calls[1].args).to.deep.eq(['Player state change'])
  
       
        
      ///  cy.get("@log").should("have.been.calledWith", "Player state change:")
          


       //cy.get("video").first().trigger('mouseover')
        // cy.get(".dashboard").click()
        // cy.get("button").contains(" Sign in with Google").click()
        // cy.wait(1000)
        // cy.origin("https://accounts.google.com/",()=>{
        //    // cy.visit("/o/oauth2/v2/auth")
        //     cy.get("#identifierId").click().type("Bajwa")
        // })
