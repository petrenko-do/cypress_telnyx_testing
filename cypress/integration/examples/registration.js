/// <reference types="cypress" />



describe('Registration', () => {
//выскакивает ошибка с капчей
    it(('Registration of a new user'), () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // возвращаем false, чтобы предотвратить падение теста
            return false
        })
        cy.viewport(1920, 1080)
        cy.visit("https://telnyx.com")

        cy.get('#onetrust-accept-btn-handler').click()
        cy.wait(2000)
        cy.get('#header-sign-up').click()
        cy.viewport(1920, 1080)

        cy.wait(2000)

        let n = randomString(5)
        function randomString(i) {
            var rnd = '';
            while (rnd.length < i)
                rnd += Math.random().toString(36).substring(2);
            return rnd.substring(0, i);
        };
        cy.get('#email').type(n + '@gmail.com')
        cy.get('#first_name').type('test23')
        cy.get('#last_name').type('test1df')
        cy.get('#password').type('Qwertyasdfgh1.')
        cy.get('input[type="checkbox"]#terms_and_conditions').check().should('be.checked')
        cy.get('input[type="checkbox"]#subscription_opt_in').check().should('be.checked')
        cy.get('.c-ddSKil').click()
        cy.wait(2000)

    })

})