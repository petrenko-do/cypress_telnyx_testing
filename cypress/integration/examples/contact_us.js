/// <reference types="cypress" />



describe('Contact us', () => {

    it('Check "Contact us" form', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.viewport(1920, 1080)
        cy.visit("https://telnyx.com")
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('.c-JLFPY a[href="/contact-us"]').click()
        cy.get('h1.c-PJLV').should('contain.text', "Talk to an expert");

        cy.get('select#Reason_for_Contact__c').select('Support').should('have.value', 'Support')
        cy.get('#FirstName').type('test')
        cy.get('#LastName').type('test1')

        let n = randomString(5)
        function randomString(i) {
            var rnd = '';
            while (rnd.length < i)
                rnd += Math.random().toString(36).substring(2);
            return rnd.substring(0, i);
        };
        cy.get('#Email').type(n + '@gmail.com')

        cy.get('select#Phone_Number_Extension__c').select('United States (+1)').should('have.value', '+1')
        cy.get('#Phone_Number_Base__c').type('1234567')
        cy.get('#Website').type('google.com')
        cy.get('#Form_Additional_Information__c').type('Support')
        cy.get('#How_did_you_hear_about_Telnyx_Open__c').type('Internet')
        cy.get('input[type="checkbox"]#mktoCheckbox_15155_0').check().should('be.checked')
        cy.get('button.mktoButton').click()
        cy.get('h1.c-PJLV').should('have.text', 'Thank you.')
    })

    



})