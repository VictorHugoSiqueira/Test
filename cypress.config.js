const { defineConfig } = require('cypress');
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://front.serverest.dev',
    env: {
      nome: process.env.CYPRESS_USER,
      senha: process.env.CYPRESS_PASSWORD,
      senhaInvalida: process.env.CYPRESS_INVALID_PASSWORD
    },
    setupNodeEvents(on, config) {
    }
  }
});
