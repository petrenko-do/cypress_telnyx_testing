/// <reference types="cypress" />



describe('Check the search bar in the Blog tab', () => {
    //выскакивает ошибка с капчей
    it(('Check the search bar in the Blog tab'), () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // возвращаем false, чтобы предотвратить падение теста
            return false
        })
        cy.viewport(1920, 1080)
        // cy.visit(Cypress.env('url'))
        cy.visit("https://telnyx.com")

        cy.get('#onetrust-accept-btn-handler').click()
        cy.wait(3000)

       
        

        // cy.get('button[id="radix-\\:r7\\:"]').trigger('click');

        // cy.get('button[id="radix-\\:r7\\:"]').trigger('mouseover');
        // cy.wait(1000); 
        // cy.scrollTo('top',{ ensureScrollable: false })
        // cy.get('button[id="radix-\\:r7\\:"]').click({ force: true });
        
        // cy.get('button[id="radix-\\:r7\\:"]').click()

        // cy.get('#radix-\:r7\: > .c-ewUecD > .c-khZXrc > .c-PJLV').click()
        // cy.get('.c-dcBjqe a[href="/resources"]').should('be.visible')
        cy.wait(3000)


    })

})