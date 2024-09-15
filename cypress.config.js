const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // baseUrl: 'http://localhost:3000',
  // reporter: 'cypress-cloud',
  projectId: "xz383j",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    specPattern: './cypress/integration/'
  },

  // env: {
  //   url: "https://telnyx.com",
  // },

});