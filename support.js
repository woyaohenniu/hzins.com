Cypress.Commands.add('huntian_login',()=>{
    cy.request(
        {
            url:'https://huntian.hzins.com/login',
            method:'POST',
            form:true,
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            },
            body: {
                "username": "hz19104595",
                "password": "oaBmftgG",
                "jcaptcha": "111111",
            }
        }
    )
})

Cypress.Commands.add('insure_qixin',()=>{
    cy.visit('https://cps.qixin18.com/apps/cps/ht1001011/product/detail?prodId=121384&planId=122669&from=spks&tenantId=-1')
    cy.wait(2000)
    cy.scrollTo('bottom')
    cy.wait(2000)
    cy.get('#submit-by').click()
    cy.wait(2000)
    cy.get('.btn-agree').click()
    cy.wait(3000)
    cy.get('.f16').click()
    cy.get('#insurantType > .input-select > .input-select-text').click()
    cy.get('.hz-select-option[value="20"]').click()
    cy.get('#insuranceDate_102').click()
    cy.get('.calendar-today+td').click()
    cy.wait(1000)
    cy.get(':nth-child(3) > .input-text').type('桃吖子')
    cy.get(':nth-child(4) > .input-text').type('taozi')
    cy.get(':nth-child(6) > .input-text').type('310101199003075856')
    // cy.get(':nth-child(8) > .input-text').type('15712300001')
    // cy.get('[style="position: relative;"] > .input-text').type('1234568@qq.com')
    // cy.get('.protocol-list > .hz-check-item > .hz-check-icon').click()
    // cy.get('.f16').click()
})
