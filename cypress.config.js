const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '43jasi',
  e2e: {
    baseUrl: 'https://api.restful-api.dev',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
