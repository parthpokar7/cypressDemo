/// <reference types="cypress" />

describe('Create case as a login user', () => {
  
    it('I want to create a case as a logged in user', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

        cy.visit('/signin')
        cy.loginuser("palak.turakhia@blobstation.com", "P@ssw0rd")

        // Checking the URL to determine if the correct page is opened 
        cy.url().should('include', '/home/company')

        // clicking on the sidebar menu
        cy.get('.sideMenu #sidebar-cases').click()

        // Checking the URL to determine if the correct page is opened 
        cy.url().should('include', '/home/cases')
        cy.get('p').contains('Cases').should('exist')

        // Clicking on the create case button
        cy.get('#create-case').contains('Create Case').click()

        // Checking the URL to determine if the correct page is opened 
        cy.url().should('include', '/home/cases')
        cy.get('p').contains('Create Case').should('exist')

        // filling form 
        cy.get('#name').type('Camera07052024')
        cy.get('#start_date').type('01-08-2024 {enter}', {force: true})
        cy.get('#end_date').type('08-08-2024 {enter}', {force: true})
        cy.get('#due_date').type('10-08-2024 {enter}', {force: true})

        cy.get('#select-execution-type').click()
        cy.get('div.ant-select-item-option-content').contains('Activities').click()

        cy.get('.add').contains('+').click()
        cy.get('#form-submit-button span').contains('Submit').click()

        cy.url().should('include', '/home/cases')
        // Checkin success message
        cy.get('span').contains('Your case successfully created').should('exist')

    })
  
})
  