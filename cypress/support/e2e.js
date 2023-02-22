
// Import  using ES2015 syntax:
import './commands'
import './login.actions'


// Alternatively you can use CommonJS syntax:
require("@badeball/cypress-cucumber-preprocessor")

// Catch uncaught errors
Cypress.on('uncaught:exception',()=>{
    return false
})

