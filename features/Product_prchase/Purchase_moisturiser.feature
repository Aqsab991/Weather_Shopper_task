Feature: Adding moisturisers to the cart

  As a user, I want to be able to select two Moisturizers and add them into the cart

  Scenario: Add two moisturizers to the cart that meet specific criteria

    Given the browser is at the "Moisturizers" page

    When the moisturizer is least expensive and contains "Aloe" in the name
    And the user clicks on "Add"

    Then the value of cart should be incremented
    

