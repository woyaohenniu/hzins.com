describe('service entrance',() =>{
	it('service entrance1',() =>{
		cy.visit("https://cps.qixin18.com/v3/m/tz1053102/entrance")
		cy.get('.input-phoneNumber').type('19108205582')
		cy.wait(9000)
		cy.get('.customer-get-code').click()
	})
})