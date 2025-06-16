Feature: Search for a product

  @API @APITC5
  Scenario Outline: search for a product of choice
    Given user searchs for an exisitng '<item>' with a post call
    Then the response body should have property "responseCode" with value 200
    And user should see list of '<items>'

    Examples:
      | item   |
      | top    |
      | Tshirt |
      | jean   |
      | Dress  |

  @API @APITC5
  Scenario Outline: Serach for an item which does not exisit
    Given user searchs for an exisitng '<item>' with a post call
    Then the response body should have property "responseCode" with value 200
    And the product list is null

    Examples:
      | item             |
      | shoe             |
      | drill bit        |
      | bat              |
      | Multi thread Cap |

  @API @APITC6
  Scenario: Search a product without passing search parameter
    Given user request post call without item
    Then user should recieve a 'responseCode' of 400
    And a 'message' with 'Bad request, search_product parameter is missing in POST request.'
