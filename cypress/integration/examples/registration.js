/// <reference types="cypress" />
import RegistrationPage from '../../support/page_objects/registrationPage.js'
describe('Registration', () => {
    before(function () {
        cy.fixture('user').then((data) => {
            this.data = data;
        });
    });
    it(('should register a new user successfully'), function () {
        const registrationPage = new RegistrationPage()
        registrationPage.visit()
        registrationPage.acceptCookies()
        registrationPage.clickSignUp()
        registrationPage.enterEmail(this.data.email)
        registrationPage.enterFirstName(this.data.firstName)
        registrationPage.enterLastName(this.data.lastName)
        registrationPage.enterPassword(this.data.password)
        cy.get('input[type="checkbox"]#terms_and_conditions').should('not.be.checked');
        registrationPage.acceptTermsAndConditions()
        cy.get('input[type="checkbox"]#subscription_opt_in').should('not.be.checked');
        registrationPage.acceptSubscription()
        registrationPage.submitRegistration()
        cy.get('#email').should('have.value', this.data.email)
        cy.get('#password').invoke('val').should('have.length.greaterThan', 12)
        cy.get('input[type="checkbox"]#terms_and_conditions').check().should('be.checked'); 
        cy.get('input[type="checkbox"]#subscription_opt_in').check().should('be.checked');  
    })
})