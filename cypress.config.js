const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {createEsbuildPlugin} = require("@badeball/cypress-cucumber-preprocessor/esbuild");


module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
    baseUrl: "https://www.saucedemo.com",
    chromeWebSecurity: false,
    specPattern: "cypress/e2e/**/*.{feature,features}",
    watchForFileChanges: false,
  },
});
