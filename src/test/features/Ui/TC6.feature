Feature: Contact form

  Background:
    Given the user is on navigates to home page
    Then the home page is visible

  @UI @TC6
  Scenario: Navitagate to contact form and submit a message
    When user navigates to contact us page
    Then users should see Get In Touch on the page
    When user enters all the details required
    And clicks on submit button and accepts the popup alerts
    Then user should see 'Success! Your details have been submitted successfully.' message
    And user navigaes back to home page and verify
