/// <reference types="cypress" />


describe('Check filtering in the dropdown menu on the "Solutions" page', () => {

    it('Check filtering in the dropdown menu on the "Solutions" page', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.viewport(1920, 1080)
        cy.visit("https://telnyx.com")
        // cy.wait(2000)
        cy.get('#onetrust-accept-btn-handler').click()

        cy.get('a[href="/solutions"]').click()
        cy.get('h1.c-PJLV').should('have.text', 'Solutions for scaling your business')
        cy.get('button#department-filter').should('be.visible').click()
        cy.contains('Marketing').click()
        cy.wait(2000)
        cy.get('button#department-filter').should('be.visible').click()
        cy.contains('Operations').click()
        cy.wait(2000)
        cy.get('button#department-filter').should('be.visible').click()
        cy.contains('Customer Support').click()
    })

})