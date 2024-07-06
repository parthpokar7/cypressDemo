Cypress.Commands.add('loginuser', (email, pwd) => {
    cy.get('#basic_email').type(email)
    cy.get('#basic_password').type(pwd)
    cy.get('#login').contains('Login').click()
})
