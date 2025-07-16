import { clicarBotao, preencherCampo } from "../shared/sharedFormUtils";

export class CadastroPage {
  static cadastrarBtn = 'a[data-testid="cadastrar"]'
  static emailInput = 'input[data-testid="email"]'
  static nomeInput = 'input[data-testid="nome"]';
  static senhaInput = 'input[data-testid="password"]';
  static confirmarCadastroBtn = 'button[data-testid="cadastrar"]';

  static visitLoginPage() {
    cy.visit('/login');
    cy.get(CadastroPage.emailInput).should('be.visible');
    return new CadastroPage();
  }

  static cadastrarNovoUsuario(nomeUsuario, emailUsuario, senhaUsuario) {
    clicarBotao(CadastroPage.cadastrarBtn);
    preencherCampo(CadastroPage.nomeInput, nomeUsuario);
    preencherCampo(CadastroPage.emailInput, emailUsuario);
    preencherCampo(CadastroPage.senhaInput, senhaUsuario);
    clicarBotao(CadastroPage.confirmarCadastroBtn);
  }
}
