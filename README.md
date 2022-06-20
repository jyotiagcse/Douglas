# cypress-cucumber

Official documentation: [Cypress](https://docs.cypress.io)
To know about recent Cypress feature click [here](https://www.cypress.io/features/)

## Pre-requisite:

Minimum configuration for optimal usage:
[NPM](https://www.npmjs.com) -  6.14.14
[Node](https://nodejs.org/en/download/) - 14.17.4

Note:
- Node installation will automatically intall NPM from the above link
- You can validate the version installed via
```bash 
npm --version
node --version
```

**IDE Installation:** [Visual Studio code / VS code](https://code.visualstudio.com)
Extensions suggested for optimal Cypress usage: https://docs.cypress.io/guides/tooling/IDE-integration#Visual-Studio-Code
Extensions for icon theme: https://marketplace.visualstudio.com/search?term=icon&target=VSCode&category=All%20categories&sortBy=Relevance

## Gettings started:

Clone the project from github
Open the project in your editor
Open Terminal at bottom right corner and do the below:
```bash 
npm install --save-dev
```
To ensure Cypress installation type the below in your terminal:
```bash 
npx cypress open
```
Verify if the [Test Runner](https://docs.cypress.io/guides/core-concepts/test-runner#Overview) is launched

In the test runner, select E2E Testing and the desired browser from the dropdown and visualize the test execution

To run the tests via CLI on a headless mode
```bash 
npx cypress run
```

To run the tests via CLI with an env config
```bash 
npx cypress run --browser chrome
```

To generate a execution report after execution
```bash 
node custom-reporter.js
```
