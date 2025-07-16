import { CadastroPage } from '../../../support/pages/cadastroPage';
import { LoginPage } from '../../../support/pages/loginPage';

const nome = Cypress.env('user').CYPRESS_USER;
const senha = Cypress.env('user').CYPRESS_PASSWORD;
const senhaInvalida = Cypress.env('user').CYPRESS_INVALID_PASSWORD;

beforeEach(() => {
  cy.window().then((win) => {
    win.localStorage.clear();
  });
});

const email = `victor.${Date.now()}@teste.com`;

describe('Cadastro de novo Usuario e Efetuar Login', () => {
  it('Cadastro de novo usuário', () => {
    CadastroPage.visitLoginPage();
    CadastroPage.cadastrarNovoUsuario(nome, email, senha);
    cy.wait(4000);
  });

  it('Login com sucesso', () => {
    LoginPage.visitLoginPage()
    LoginPage.efetuarLogin(email, senha);
    LoginPage.assertLoggedIn();
  });

  it('Senha incorreta', () => {
    LoginPage.visitLoginPage();
    LoginPage.efetuarLogin(email, senhaInvalida);
    LoginPage.assertErrorMessage('Email e/ou senha inválidos');
  });
});
