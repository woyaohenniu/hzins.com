import './support'

describe('回溯系统',()=>{
    beforeEach(()=>{
        cy.huntian_login()
        Cypress.Cookies.preserveOnce('token','HUNTIANSID')
        cy.visit('https://merak.hzins.com/sale-track')
    })

    it('查询保单', () => {
        cy.get('#insureNum').type('123456')
    });
})
