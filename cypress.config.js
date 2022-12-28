const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://demo.castlabs.com",
    //chromeWebSecurity: false ,
    experimentalSessionAndOrigin:true,
    setTimeout:40000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
