/// <reference types="cypress" />


describe('Check the functionality of the "Solutions" link in the header', () => {

    it('Check the functionality of the "Solutions" link in the header', () => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.viewport(1920, 1080)
        cy.visit("https://telnyx.com")
        // cy.wait(2000)
        cy.get('#onetrust-accept-btn-handler').click()

        cy.get('a[href="/solutions"]').click()
        cy.get('h1.c-PJLV').should('have.text', 'Solutions for scaling your business')
    })

})