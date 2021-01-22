import './support'

describe('回溯系统',()=>{
    it('toubao', () => {
        cy.insure_qixin()
        cy.get('.table-1 > tbody > :nth-child(2) > :nth-child(1)')
    });
})