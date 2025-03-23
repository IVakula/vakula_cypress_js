const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 2000,
    specPattern: "**/*.cy.{js,jsx,ts,tsx}"
  },
});
