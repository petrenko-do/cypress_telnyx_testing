/// <reference types="cypress" />


describe('Check Search System on the Integration Marketplace Page', () => {

    it('Check Search System on the Integration Marketplace Page', () => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.viewport(1920, 1080)
        cy.visit("https://marketplace.telnyx.com/")

        cy.get('.react-autosuggest__input').type('Integrately')
        cy.wait(2000)
        cy.get('#react-autowhatever-1 > ul.react-autosuggest__suggestions-list > li#react-autowhatever-1--item-0 > a.request-empty-result').click()
    })

})