describe('home', () => {

	beforeEach(() => {
		cy.visit('https://www.freerangetesters.com/')
	})
	it('hould have a title', () => {
    cy.title().should('include', 'Free Range Testers')
  })
})