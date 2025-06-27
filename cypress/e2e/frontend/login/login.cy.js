import { LoginPage } from '../../../support/pages/loginPage';
import { CadastroPage } from '../../../support/pages/cadastroPage';

const loginPage = new LoginPage();
const cadastroPage = new CadastroPage();

let email;
const nome = 'Victor QA';
const senha = 'SenhaForte12345';
const senhaInvalida = 'senhaInvalida';

before(() => {
  email = `victor.${Date.now()}@teste.com`;
});

describe('Tela de Login', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it('Cadastro de novo usuário', () => {
    loginPage.clickRegistrar();

    cadastroPage.preencherNome(nome);
    cadastroPage.preencherEmail(email);
    cadastroPage.preencherSenha(senha);
    cadastroPage.submit();
  });

  it('Login com sucesso', () => {
    loginPage.preencherEmail(email);
    loginPage.preencherSenha(senha);
    loginPage.submit();
    loginPage.assertLogin();
  });

  it('Senha incorreta', () => {
    loginPage.preencherEmail(email);
    loginPage.preencherSenha(senhaInvalida);
    loginPage.submit();
    loginPage.assertErrorMessage('Email e/ou senha inválidos');
  });
});
