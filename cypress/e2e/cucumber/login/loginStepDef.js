/// <reference types="Cypress" />

import {loginPage} from "../../../pageObjects/LoginPage";
import { Given,When,Then } from "cypress-cucumber-preprocessor/steps"

Given(/^I open Login Page$/, ()=>
{
    cy.visit('/login')
    loginPage.clickOnAcceptCookies()
})

When(/^I enter valid credentials$/, () => {
    loginPage.enterUsernameAndPassword(Cypress.env('emailId'),atob(Cypress.env('password')))
})

Then(/^User must be able to login$/, () => {
    loginPage.verifyLoggedInSuccessfully()
})


When(/^I enter invalid "([^"]*)" "([^"]*)"$/, (username,password) => {
    loginPage.enterUsernameAndPassword(username,password)
})

When(/^I clicked on forgot password$/,  () => {
    loginPage.clickOnForgetPassword()
})

When(/^I entered email id$/,  () => {
    loginPage.enterEmailForResetPassword(Cypress.env('emailId'))
})

Then(/^Reset Password Email shall be sent$/,  () => {
    loginPage.verifyResetPasswordEmailSent(Cypress.env('emailId'))
})

When(/^I enter incorrect "([^"]*)"$/,  (password) => {
    loginPage.enterUsernameAndPassword(Cypress.env('emailId'),password)
})

Then(/^User must get Invalid Credential Error$/,  () => {
    loginPage.verifyWrongCredentialError()
})

Then(/^User must get Invalid Username Error$/,  () => {
    loginPage.verifyInvalidUserNameError()
})