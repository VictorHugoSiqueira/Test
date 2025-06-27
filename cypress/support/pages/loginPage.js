export class LoginPage {

    elements = {
    emailInput: () => cy.get('input[data-testid="email"]'),
    senhaInput: () => cy.get('input[data-testid="senha"]'),
    entrarBtn: () => cy.get('button[data-testid="entrar"]'),
    cadastrarBtn: () => cy.get('a[data-testid="cadastrar"]'),
    errorMessage: () => cy.get('.alert') 
  };

  visit() {
    cy.visit('/login');
  }

  preencherEmail(email) {
    this.elements.emailInput().type(email);
  }

  preencherSenha(password) {
    this.elements.senhaInput().type(password);
  }

  submit() {
    this.elements.entrarBtn().click();
  }

  clickRegistrar() {
    this.elements.cadastrarBtn().click();
  }

  assertErrorMessage(message) {
    this.elements.errorMessage().should('contain', message);
  }

  assertLogin() {
    cy.url().should('include', '/home');
  }
}
