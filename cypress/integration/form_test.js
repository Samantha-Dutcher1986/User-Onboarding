describe('Does the URL work properly', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001')
    })
    it('Ensure routes to correct page', () => {
        cy.url().should('include', 'localhost')
        cy.url().should('include', 3001)
    })
})

describe('Ensure all inputs work', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001')
    })
    it('Ensure name input is present and displays correctly', () => {
        cy.get('#name').should('have.value', '').type('Jane Doe')
        cy.get('[type="email"]').should('have.value', '').type('janedoe@email.com')
        cy.get('[type="password"]').should('have.value', '').type('password1234')
        cy.get('[type="checkbox"]').check()
    })
})

describe('Ensure submit button works', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001')
    })
    it('ensure submit button works properly', () => {
        cy.get('#name').should('have.value', '').type('Jane Doe')
        cy.get('[type="email"]').should('have.value', '').type('janedoe@email.com')
        cy.get('[type=password]').should('have.value', '').type('password1234')
        cy.get('[type="checkbox"]').check()
        cy.get('[type=submit]').click()
    })
})

describe('Ensure submit button remains disabled if all fields are not filled', () => {
    beforeEach(() => {
        cy.visit('http://localhost"3001')
    })
    it('ensure name input is present and works properly', () => {
        cy.get('#name').should('have.value', '').type('Jane Doe')
        cy.get('[type="email"]').should('have.value', '').type('janedoe@email.com')
        cy.get('[type="checkbox"]').check()
        cy.get('[type=submit]').should('be.disabled')
    })
})

describe('Ensure submit button remains disabled if terms button is not checked', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001')
    })
    it('ensure name input is present and works properly', () => {
        cy.get('#name').should('have.value', '').type('Jane Doe')
        cy.get('[type="email"]').should('have.value', '').type('janedoe@email.com')
        cy.get('[type="password"]').should('have.value', '').type('password1234')
        cy.get('[type="submit"]').should('be.disabled')
    })
})