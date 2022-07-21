Feature: Adding suncreens to the cart

  As a user, I want to be able to select two Sunscreens and add them into the cart

  Scenario: Add two Sunscreens to the cart that meet specific criteria

    Given the browser is at the "Sunscreens" page

    When the Sunscreens are least expensive and contain either SPF-50 or SPF-30 in the name, add them into the cart

    Then the sunscreens are added into the cart and value of cart should be incremented 
    
