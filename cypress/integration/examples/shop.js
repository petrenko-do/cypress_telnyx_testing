/// <reference types="cypress" />

describe('Check adding a product to the cart', () => {
    //выскакивает ошибка с капчей
    it(('Check adding a product to the cart'), () => {
        Cypress.on('uncaught:exception', (err, runnable) => {

            return false
        })
        cy.viewport(1920, 1080)
        cy.visit("https://telnyx.com");
        cy.get('#onetrust-accept-btn-handler').click();
        cy.wait(1000);

        cy.get('.c-glDvHT a[href="https://shop.telnyx.com"]').invoke('removeAttr', 'target').click()

        cy.get('#HeaderMenu-shop').click()

        // cy.get('#product-grid').contains('Telnyx Classic Hat').click()
        // cy.wait(2000)
        cy.get('#product-grid').as('products')

        cy.get('@products').find('.grid__item').each(($el, index, $list) => {

              const textProd = $el.find('a.full-unstyled-link').text()
              if (textProd.includes('Telnyx Classic Hat')) {
                cy.wrap($el).find('button.quick-add__submit').click()
              }
            })
    })

})