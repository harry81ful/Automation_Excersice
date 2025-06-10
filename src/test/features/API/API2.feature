Feature: Post all product list

  @API @APITC2
  Scenario: POST request to all products should not be supported
    When the user sends a POST request to the all products endpoint
    Then the response status code should be 200
    And the response body should have a property "responseCode" with value 405
    And the response body should have a "message" property with value "This request method is not supported."
