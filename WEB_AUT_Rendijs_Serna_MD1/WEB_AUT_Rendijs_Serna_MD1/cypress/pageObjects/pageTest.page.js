class Testpage{
static gridLogIn(){
    cy.get('#demo-tab-grid').click()
}
static ClickNumberLogIn(temp){
    cy.contains(temp).click()
}
static VerifyClickedNumberLogIn(temp){
    cy.contains(temp).should('have.class', 'active')
}
static VerifyNotClickedNumberLogIn(temp){
    cy.contains(temp).should('not.have.class', 'active')
}
}
export default Testpage;