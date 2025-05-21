Feature: Login User with correct email and password

Background:
  Given user is at home page
  And User clicks on login button
  Then user is at login page
@TC2 @UI
Scenario: Login with correct email and password
  When user enters valid email and password
    And presses on login button
    Then user should be redirected to home page with logged in as message