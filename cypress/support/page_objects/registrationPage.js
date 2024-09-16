class RegistrationPage {
    visit() {
      return cy.visit(Cypress.env('url'));
    }
    acceptCookies() {
      return cy.get('#onetrust-accept-btn-handler').click(); 
    }
    clickSignUp() {
      return cy.get('#header-sign-up').click(); 
    }
    enterEmail(email) {
      return cy.get('#email').type(email); 
    }
    enterFirstName(firstName) {
      return cy.get('#first_name').type(firstName); 
    }
    enterLastName(lastName) {
      return cy.get('#last_name').type(lastName); 
    }
    enterPassword(password) {
      return cy.get('#password').type(password); 
    }
    acceptTermsAndConditions() {
      return cy.get('input[type="checkbox"]#terms_and_conditions').check().should('be.checked'); 
    }
    acceptSubscription() {
      return cy.get('input[type="checkbox"]#subscription_opt_in').check().should('be.checked'); 
    }
    submitRegistration() {
      return cy.get('.c-ddSKil').click(); 
    }
  }
  export default RegistrationPage;
  