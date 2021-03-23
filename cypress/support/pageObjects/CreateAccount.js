class CreateAccount
{

getEmailBox()
{
    return cy.get('#create_account_email')
}

getFirstName()
{
    return cy.get('.-left > .ui > input')

}
getLastName()
{
  return  cy.get(':nth-child(2) > .ui > input')
}

setPassword()
{
   return cy.get('.password-input-container > .input-container > .ui > input')
}
confirmPassword()
{
    return  cy.get('.password-confirm-input > .ui > input')
}

getNumber()
{
    return  cy.get(':nth-child(7) > .ui > input')
}

checkInv()
{
    return  cy.get(':nth-child(2) > ._radio_e1a40')
}

agreeTerms()
{
    return  cy.get(':nth-child(1) > ._field_1fb41 > ._check_1fb41')
}

understandTerm()
{
    return  cy.get(':nth-child(2) > ._field_1fb41 > ._check_1fb41')
}

}

export default CreateAccount;