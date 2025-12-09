const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://hangers-crisbusa.web.app',
    video: true, // que SI grabe video
    setupNodeEvents(on, config) {
      // Integración con Allure
      allureWriter(on, config);
      return config;
    },
    env: {
      allure: true,
      allureAddVideoOnPass: true, // adjuntar video aunque pase
    },
  },
});