export class CadastroPage {
  elements = {
    nameInput: () => cy.get('input[data-testid="nome"]'),
    emailInput: () => cy.get('input[data-testid="email"]'),
    passwordInput: () => cy.get('input[data-testid="password"]'),
    confirmarCadastroBtn: () => cy.get('button[data-testid="cadastrar"]')
  };

  preencherNome(name) {
    this.elements.nameInput().type(name);
  }

  preencherEmail(email) {
    this.elements.emailInput().type(email);
  }

  preencherSenha(password) {
    this.elements.passwordInput().type(password);
  }

  submit() {
    this.elements.confirmarCadastroBtn().click();
    cy.wait(3000)
  }
}
