Feature: Get all products lists
    @API
    Scenario: Get all products lists
        Given the user sends a GET request 
        Then the response status code should be 200
        And the response should contain a list of products
        And the response should contain product details such as name, price, and description