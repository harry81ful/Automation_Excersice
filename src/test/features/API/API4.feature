Feature: Send put request to all brands list

  @API @APITC4
  Scenario: PUT request to brands list should not be allowed
    When the user sends a PUT request to the brands list API endpoint
    Then the response body should have property "responseCode" with value 405
    And the response body should have property "message" with value "This request method is not supported."
