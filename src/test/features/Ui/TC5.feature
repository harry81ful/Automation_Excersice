Feature: Login User with correct email and password

  Background:
    Given the user is on navigates to home page
    And clicks on Signup Login button
    Then user should see New User Signup text

  @TC5
  Scenario: Register with existing email
    Given the user enters a exisiting name and email
    And clicks on Signup button
    Then user should see error message indicating email already exists
