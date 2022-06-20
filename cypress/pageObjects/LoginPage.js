class LoginPage {

    //*******************************************************************
    //*** Locators
    //*******************************************************************

    getLoginFormLocator(){
        return '#loginForm'
    }

    getEmailLocator(){
        return '[name=email]'
    }

    getPasswordLocator(){
        return '[name=password]'
    }

    getSubmitButtonLocator(){
        return '[type=submit]'
    }

    getAlertErrorLocator(){
        return 'div[class$="alert--error"]'
    }

    getForgotPasswordFormLocator(){
        return '#forgotPasswordForm'
    }

    getForgotPasswordEmailLocator(){
        return '[name=forgotPasswordEmail]'
    }

    getConfirmationEmailLocator(){
        return '.forgot-password__confirmation-email'
    }

    getCloseButtonLocator(){
        return 'button[class$="forgot-password__button"]'
    }

    getCookieOverlayLocator(){
        return '.uc-overlay__buttons'
    }

    getAcceptButtonLocator(){
        return 'button[class$="button__primary"]'
    }

    //*******************************************************************
    //*** Methods
    //*******************************************************************

    enterUsernameAndPassword(emailId,password){
        cy.get(this.getLoginFormLocator()).then(LoginForm => {
            cy.wrap(LoginForm).find(this.getEmailLocator()).type(emailId)
            cy.wrap(LoginForm).find(this.getPasswordLocator()).type(password, { log: false })
            cy.wrap(LoginForm).find(this.getSubmitButtonLocator()).click()
        })
        cy.log("Entered Username and Password Successfully")
    }

    verifyLoggedInSuccessfully(){
        cy.location('pathname')
            .should('contain', '/account')
        cy.log("User able to login as expected")
    }

    verifyWrongCredentialError(){
        cy.get(this.getAlertErrorLocator()).should('be.visible')
        cy.contains(Cypress.env('invalid_password'))
        cy.log("Invalid Credentials Error message displayed as expected")
    }

    clickOnForgetPassword(){
        cy.get(this.getLoginFormLocator()).then(LoginForm => {
            cy.wrap(LoginForm).contains(Cypress.env('forgot_password')).click()
        })
        cy.log("Clicked On Forgot Password Successfully")
    }

    enterEmailForResetPassword(emailId){
        cy.get(this.getForgotPasswordFormLocator()).then(forgotPasswordForm => {
            cy.wrap(forgotPasswordForm).find(this.getForgotPasswordEmailLocator()).type(emailId)
            cy.wrap(forgotPasswordForm).find(this.getSubmitButtonLocator()).click()
        })
        cy.log("Entered detail on Forgot Password Form Successfully")
    }

    verifyResetPasswordEmailSent(emailId){
        cy.get(this.getConfirmationEmailLocator()).should('have.text',emailId)
        cy.get(this.getCloseButtonLocator()).click()
    }

    clickOnAcceptCookies(){
        cy.get(this.getCookieOverlayLocator()).find(this.getAcceptButtonLocator()).click()
    }

    verifyInvalidUserNameError(){
        cy.get(this.getAlertErrorLocator()).should('be.visible')
        cy.contains(Cypress.env('invalid_username'))
        cy.log("Invalid Username Error message displayed as expected")
    }
}


export const loginPage = new LoginPage()