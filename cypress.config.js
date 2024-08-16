const path = require('path');
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: path.resolve(__dirname, 'cypress/reports'),
    overwrite: true,
    html: true,
    json: false,
    debug: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    testIsolation: false,
    screenshotOnRunFailure: true,
    video: false,
    retries: {
      runMode: 10,
      openMode: 1,
    },
  },
});
