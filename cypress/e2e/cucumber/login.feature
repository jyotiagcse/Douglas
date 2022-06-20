Feature: User Login

  User Authentication

  @validCredentials
  Scenario: Login with valid credentials
    Given I open Login Page
    When I enter valid credentials
    Then User must be able to login

  @invalidCredentials
  Scenario Outline: Login with invalid credentials
    Given I open Login Page
    When I enter incorrect "<password>"
    Then User must get Invalid Credential Error

    Examples:
      | password |
      | 123456   |

  @invalidCredentials
  Scenario Outline: Login with invalid username
    Given I open Login Page
    When I enter invalid "<username>" "<password>"
    Then User must get Invalid Username Error

    Examples:
      |username | password |
      |username | password |

  @forgotPassword
  Scenario: Forgot Password
    Given I open Login Page
    When I clicked on forgot password
    And I entered email id
    Then Reset Password Email shall be sent