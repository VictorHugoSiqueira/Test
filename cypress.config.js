const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://front.serverest.dev', // 🔁 Troque pela URL da sua aplicação
    setupNodeEvents(on, config) {
      // Pode configurar plugins aqui se necessário
    }
  }
});
