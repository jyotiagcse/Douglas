const { defineConfig } = require("cypress");
const { default: cucumber } = require("cypress-cucumber-preprocessor");
const fs = require("fs-extra");

module.exports = defineConfig({
 defaultCommandTimeout: 16000,
  pageLoadTimeout: 60000,
  execTimeout: 60000,
  requestTimeout: 10000,
  responseTimeout: 10000,
    retries: {
        runMode: 2,
        openMode: 1,
    },
  e2e: {
    baseUrl: 'https://www.douglas.de/',
    supportFile: "cypress/support/e2e.js",
    specPattern: "**/*.feature",

    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())

        on('after:run', (results) => {
            if (results) {
                fs.mkdirSync("cypress/reports/result", { recursive: true });
                fs.writeFile("cypress/reports/result/results.json", JSON.stringify(results));
            }
        })
    },

  }
});
