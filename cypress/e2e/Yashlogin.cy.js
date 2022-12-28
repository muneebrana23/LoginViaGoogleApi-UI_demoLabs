///<reference types="Cypress"/>
describe("",()=>{
    before(() => {
        cy.visit("https://console.internetcomputerservices.com/#/login", {
        onBeforeLoad(win) {
        win.localStorage.setItem(
        "token",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTA0OSwib2F1dGhfcHJvdmlkZXIiOiJHT09HTEUiLCJpYXQiOjE2Njg3NDAzMzl9.qvJRA81vp5rsPElKXonQ3vnVUtgHjMYJXzz6SSHEXt4"
        );
        },
        });
        });
        it.only("should be able to run test 1",  () => {
        cy.contains("div", "Create DApp").should("be.visible")

        });
        });
