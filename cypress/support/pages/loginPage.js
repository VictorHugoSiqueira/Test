import { clicarBotao, elementoVisivel, preencherCampo } from '../shared/sharedFormUtils';

export class LoginPage {

  static nameInput = 'input[data-testid="nome"]';
  static emailInput = 'input[data-testid="email"]';
  static senhaInput = 'input[data-testid="senha"]';
  static entrarBtn = 'button[data-testid="entrar"]';
  static confirmarCadastroBtn = 'button[data-testid="cadastrar"]';
  static adicionarListaBtn = 'button[data-testid="adicionarNaLista"]';
  static errorMsg = 'button[class="close btn-close-error-alert"]';

  static visitLoginPage() {
    cy.visit('/login');
    elementoVisivel(LoginPage.emailInput);
    return new LoginPage();
  }

  static efetuarLogin(emailUsuario, senhaUsuario) {
    preencherCampo(LoginPage.emailInput, emailUsuario);
    preencherCampo(LoginPage.senhaInput, senhaUsuario);
    clicarBotao(LoginPage.entrarBtn);
  }

  static assertLoggedIn() {
    elementoVisivel(LoginPage.adicionarListaBtn);
  }

  static assertErrorMessage() {
    elementoVisivel(LoginPage.errorMsg);
  }
}
