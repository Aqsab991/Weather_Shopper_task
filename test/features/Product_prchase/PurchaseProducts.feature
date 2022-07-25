Feature: Adding suncreens to the cart

  As a user, I want to be able to select two Sunscreens and add them into the cart

  Scenario: Add two Sunscreens to the cart that meet specific criteria

    Given the user is at the "Home" page of app

    When the Products are least expensive and meet specific criteria, add them into the cart

    Then the sunscreens are added into the cart and value of cart should be incremented 
    
