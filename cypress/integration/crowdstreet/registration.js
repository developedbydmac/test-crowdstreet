/// <reference types="Cypress" />
import CreateAccount from '../../support/pageObjects/CreateAccount'

describe('Register New Account', () => {

  //Use the cy.fixture() method to pull data from fixture file
  before(function () {
    cy.fixture('example').then((data) => {
      this.data = data;
    })
  })
    
    it('Register A New User', () => {
        const createAccount=new CreateAccount()

    
    cy.visit(Cypress.env('url'))//   cy.visit('test.crowdstreet.com')
    cy.get(':nth-child(3) > ._primary_d2f0c').click()
    cy.url().should('include', '/invexp/accounts/create-account/')
    cy.get('#create_account_email').type('developedbydmac@gmail.com').should('have.value', 'developedbydmac@gmail.com')
    //   createAccount.getEmailBox.type(this.data.email).should('have.value', 'developedbydmac@gmail.com')
    cy.get('.-left > .ui > input').type('Daquan').should('have.value', 'Daquan')
    //   createAccount.getFirstName.type(this.data.firstname).should('have.value', 'Daquan')
    cy.get(':nth-child(2) > .ui > input').type('McDaniel').should('have.value', 'McDaniel')
    //   createAccount.getLastName.type(this.data.lastname).should('have.value', 'McDaniel')
    cy.get('.password-input-container > .input-container > .ui > input').type('Testing21!', {log: false})
    //   createAccount.setPassword.type(this.data.password)
    cy.get('.password-confirm-input > .ui > input').type('Testing21!', {log: false})
    //   createAccount.confirmPassword.type(this.data.password)
    cy.get(':nth-child(7) > .ui > input').type('9196008927').should('have.value', '9196008927')
    //   createAccount.getNumber.type(this.data.number).should('have.value', '9196008927')
    cy.get(':nth-child(2) > ._radio_e1a40').click()
    //   createAccount.checkInv.click()
    cy.get(':nth-child(1) > ._field_1fb41 > ._check_1fb41').click()
    //   createAccount.agreeTerms.click()
    cy.get(':nth-child(2) > ._field_1fb41 > ._check_1fb41').click()
    //   createAccount.understandTerm.click()


    //this click will not work because of the I'm not a robot checkbox
    //   cy.get('.account-creation-form-container > ._flat_d2f0c').click()
    })
  })
