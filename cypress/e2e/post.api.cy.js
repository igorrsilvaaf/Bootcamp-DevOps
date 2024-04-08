/// <reference types="cypress"/>

describe('Cadastro de dispositivos', () => {

    const payload_cadastro_device = require('../fixtures/cadastrar_device_sucesso.json')

    it('Cadastrar um dispositivo', () => {

        const dataAtual = new Date().toISOString().slice(0, 16)

        cy.cadastrarDevice(payload_cadastro_device)
            .then((response) => {
                expect(response.status).equal(200)
                expect(response.body.id).not.empty
                expect(response.body.createdAt).not.empty
                expect(response.body.createdAt.slice(0, 16)).equal(dataAtual)
                expect(response.body.name).equal("Celular da QAZANDO")

            })
    })

    it('Cadastrar um dispositivo sem mandar dados', () => {

        cy.cadastrarDevice('')
            .then((response) => {
                expect(response.status).to.be.oneOf([400, 404])

                if (response.status === 400) {
                    expect(Response.body.error).to.equal("400 Bad Request")
                } else if(response.status === 404) { 
                    expect(Response.body.error).to.equal("404 Page not found")
                }
            })
    })
})