// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// The name of the cookie holding whether the user has accepted
// the cookie policy
const COOKIE_NAME = "douglas.de-consentReference";
// The value meaning that user has accepted the cookie policy
const COOKIE_VALUE = "fd707c4c-dc10-4c36-859e-e68cc0f913ed";

Cypress.on("window:before:load", window => {
    window.document.cookie = `${COOKIE_NAME}=${COOKIE_VALUE}`;
});