/// <reference types="cypress" />


describe('Verify Sidebar Expandable Lists and Item Selection', () => {

    it('Verify Sidebar Expandable Lists and Item Selection', () => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.viewport(1920, 1080)
        cy.visit("https://developers.telnyx.com")

        cy.get('.navbar__items a[href="/docs/development"]').click()

        cy.get('.menu__list .menu__list-item').contains('Identity').click({ force: true })

        cy.get('.menu__list .menu__list-item').contains('Number lookup').click()
        cy.get('.menu__list .menu__list-item').contains('Tutorials').click()
        cy.get('.menu__list .menu__list-item').contains('Number Lookup using Telnyx API').click()
        cy.get('h1.heading_j_c1').should('have.text', 'Quickstart for Number Lookup')
    })

})