/// <reference types="cypress" />


describe('User authorization', () => {

    it('User authorization', () => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.viewport(1920, 1080)
        cy.visit("https://telnyx.com")
        cy.wait(2000)
        cy.get('#onetrust-accept-btn-handler').click()

        cy.get('.c-glDvHT a[href="https://portal.telnyx.com/"]').invoke('removeAttr', 'target').click()
        cy.get('h1.frontend-customer-portal-1wrcdnh').should('have.text', 'Log in')
        cy.get('input[name="email"]').type('testfortest9090@gmail.com')
        cy.get('input[name="password"]').type('Qwertyasdfgh1.')
        cy.get('input[type="checkbox"].PrivateSwitchBase-input').check().should('be.checked')
        cy.get('[aria-label="loginForm"] > .MuiButton-root').click()
        cy.get('[data-testid="login.signin.title"]').should('have.text', 'Log in')
    })

})