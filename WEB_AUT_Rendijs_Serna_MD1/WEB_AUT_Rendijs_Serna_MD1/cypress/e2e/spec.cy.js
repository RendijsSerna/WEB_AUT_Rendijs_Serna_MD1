import Testpage from "../pageObjects/pageTest.page"

describe('test1', () => {
  it('passes', () => {
    cy.visit(' https://demoqa.com/selectable')
    
    Testpage.gridLogIn()
    Testpage.ClickNumberLogIn("Two")
    Testpage.ClickNumberLogIn("Four")
    Testpage.ClickNumberLogIn("Six")
    Testpage.ClickNumberLogIn("Eight")
    
    Testpage.VerifyClickedNumberLogIn("Two")
    Testpage.VerifyClickedNumberLogIn("Four")
    Testpage.VerifyClickedNumberLogIn("Six")
    Testpage.VerifyClickedNumberLogIn("Eight")

    Testpage.VerifyNotClickedNumberLogIn("One")
    Testpage.VerifyNotClickedNumberLogIn("Three")
    Testpage.VerifyNotClickedNumberLogIn("Five")
    Testpage.VerifyNotClickedNumberLogIn("Seven")
    Testpage.VerifyNotClickedNumberLogIn("Nine")
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
      });
  })
})