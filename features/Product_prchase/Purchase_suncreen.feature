Feature: Adding suncreen to the cart

  As a user, I want to be able to select two Sunscreens and add them into the cart

  Scenario Outline: Add two Sunscreens to the cart that meet specific criteria

    Given the browser is at the "Sunscreens" page

    When the Sunscreens is least expensive and contains "<type>" in the name
    And the user clicks on "Add"

    Then the value of cart should be incremented
    
    Examples:

      | type      | 

      | SPF-50    | 

      | SPF-30    | 
