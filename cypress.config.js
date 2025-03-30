const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  e2e: {
    specPattern: '**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'https://qauto.forstudy.space/'
  },
});
