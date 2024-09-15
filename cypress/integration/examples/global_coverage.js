/// <reference types="cypress" />


describe('Verify Sidebar Expandable Lists and Item Selection', () => {

    it('Verify Sidebar Expandable Lists and Item Selection', () => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.viewport(1920, 1080)
        cy.visit("https://telnyx.com/global-coverage")

        cy.get('button[aria-haspopup="menu"].c-hvmQSv').eq(0).click();  

        cy.contains('span', 'Poland').parent().find('input[type="checkbox"]').then(($checkbox) => {
                if ($checkbox.is(':visible')) {
                    cy.wrap($checkbox).check();
                } else {
                    cy.wrap($checkbox).check({ force: true });
                }
            });

        cy.contains('span', 'Ukraine').parent().find('input[type="checkbox"]').then(($checkbox) => {
                if ($checkbox.is(':visible')) {
                    cy.wrap($checkbox).check();
                } else {
                    cy.wrap($checkbox).check({ force: true });
                }
            });

        cy.contains('span', 'Canada').parent().find('input[type="checkbox"]').then(($checkbox) => {
                if ($checkbox.is(':visible')) {
                    cy.wrap($checkbox).check();
                } else {
                    cy.wrap($checkbox).check({ force: true });
                }
            });

        cy.contains('span', 'Egypt').parent().find('input[type="checkbox"]').then(($checkbox) => {
                if ($checkbox.is(':visible')) {
                    cy.wrap($checkbox).check();
                } else {
                    cy.wrap($checkbox).check({ force: true });
                }
            });
        cy.get('button[aria-haspopup="menu"].c-hvmQSv').eq(0).click();

        cy.get('button[aria-haspopup="menu"].c-hvmQSv').eq(1).click();
        cy.contains('span', 'Mobile').parent().find('input[type="checkbox"]').then(($checkbox) => {
                if ($checkbox.is(':visible')) {
                    cy.wrap($checkbox).check();
                } else {
                    cy.wrap($checkbox).check({ force: true });
                }
            });
        cy.contains('span', 'Fax support').parent().find('input[type="checkbox"]').then(($checkbox) => {
                if ($checkbox.is(':visible')) {
                                       cy.wrap($checkbox).check();
                } else {
                                        cy.wrap($checkbox).check({ force: true });
                }
            });
        cy.get('button[aria-haspopup="menu"].c-hvmQSv').eq(1).click();

        cy.wait(2000)
        cy.get('button.c-ewUecD').click()
    })

})