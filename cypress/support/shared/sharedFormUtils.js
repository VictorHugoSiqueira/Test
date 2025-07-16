export function preencherCampo(element, valor) {
  cy.get(element).type(valor);
}

export function clicarBotao(botao) {
  cy.get(botao).click();
}

export function elementoVisivel(element) {
    cy.get(element).should('be.visible');
}

export function sendText(element, text) {
  cy.get(element).type(text);
}
