Cypress.Commands.add('buscarDeviceEspecifico', (device_id) => {
    cy.request({
        method: 'GET',
        url: `/objects/${device_id}`,
        failOnStatusCode: false
    }).then((retorno) => { return retorno })
})

Cypress.Commands.add('cadastrarDevice', (payload) => {
    cy.request({
        method: 'POST',
        url: '/objects',
        failOnStatusCode: false,
        body: payload
    }).then((retorno) => { return retorno })
})