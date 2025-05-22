Feature: Register a new user

Background:
  Given the user is on navigates to home page
  And clicks on Signup Login button
  Then user should see New User Signup text
  @TC1 @UI
  Scenario: Register a new user with valid details
    Given the user enters a valid name and email
    And clicks on Signup button
    Then user should see Enter Account Information text
    And user fills in the required details with checkboxes
    And User clicks on create account button
    Then user should see Account Created text
    And user clicks on Continue button
    Then user should see Logged in as username text
    And user clicks on Delete Account button
    Then user should see Account Deleted text
    