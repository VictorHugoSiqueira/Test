describe('Testes da API de Produtos', () => {
    const baseUrl = 'https://serverest.dev';
    let token;

    const novoProduto = {
        nome: 'Mouse Gamer',
        preco: 199.90,
        descricao: 'Mouse com RGB e 7 botões',
        quantidade: 10
    };

    before(() => {
        cy.request('POST', `${baseUrl}/login`, {
            email: 'fulano@qa.com',
            password: 'teste'
        }).then((response) => {
            expect(response.status).to.eq(200);
            token = response.body.authorization;
        });
    });

    it('Deve listar produtos com sucesso', () => {
        cy.request(`${baseUrl}/produtos?_id=BeeJh5lz3k6kSIzA`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.quantidade).to.eq(1);
            expect(response.body.produtos[0].nome).to.eq('Logitech MX Vertical');
            expect(response.body.produtos[0].preco).to.eq(470);
        });
    });

    it('Listar carrinhos por Id', () => {
        cy.request(`${baseUrl}/carrinhos/qbMqntef4iTOwWfg`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.quantidadeTotal).to.eq(3);
        });
    });

    it('Listar carrinhos cadastrados', () => {
        cy.request(`${baseUrl}/carrinhos?_id=ZtpWT89eDJpp0K6z`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.quantidade).to.eq(0);
        });
    });
});
