Feature: Get all brands via API

  Background:
    Given the user sends a GET request for the brands list

  @API @APITC3
  Scenario: Get brands list returns status 200 and correct response code
    Then the response status code should be 200
    And the response body should have property "responseCode" with value 200

  @API @APITC3
  Scenario: Get brands list returns correct total brand count
    Then the user should get all the brand count and should be equal to 34

  @API @APITC3
  Scenario Outline: Get list of brands and should contain at least 3 brands
    Then the response body should contain '<brand>'

    Examples:
      | brand |
      | Polo  |
      | H&M   |
      | Biba  |
