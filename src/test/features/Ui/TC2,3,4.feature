Feature: Login User with correct email and password

  Background:
    Given the user is on navigates to home page
    And clicks on Signup Login button
    Then user should see New User Signup text

  @TC2 @UI @Login
  Scenario: Login with correct email and password
    When user enters valid email and password
    And presses on login button
    Then user should be redirected to home page with logged in as message

  @TC3 @UI @invalidLogin
  Scenario Outline: Login with incorrect <email> and <password>
    When user enters wrong "<email>" and "<password>"
    And presses on login button
    Then user should see error message

    Examples:
      | email                  | password        |
      | invalidemail@          | invalidpassword |
      | invalidemail@gmail.com | invalidpassword |
      | valid@gmai.Con         | invalidpassword |
