describe('服务入口登陆',() =>{
	it('服务入口登陆',() =>{
		cy.visit('https://cps.qixin18.com/v3/m/tzl1001610/entrance');
		cy.get('.input-phoneNumber').click();
		cy.get('.input-phoneNumber').click();
		cy.get('.input-phoneNumber').type('13300000020').should('hava.value','13300000020');
		cy.get('.customer-get-code').click();
		cy.get('.input-verifyCode').click();
		cy.get('.input-verifyCode').type('111111');
		cy.get('.customer-select-circle').click();
		cy.get('.customer-login-btn').click();
		cy.url().should('contains', 'https://cps.qixin18.com/v3/m/tzl1001610/entrance');
		cy.get(':nth-child(1) > .iconfont').click();
	})
})


