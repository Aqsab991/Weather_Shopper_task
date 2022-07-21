Feature: Adding two moisturisers to the cart

  As a user, I want to be able to select two Moisturizers and add them into the cart

  Scenario: Add two moisturizers to the cart that meet specific criteria

    Given the browser is at the "Moisturizers" page

    When the moisturizers are least expensive and contains either Aloe or Almond in the name, user adds them into the cart
    
    Then the value of cart should be incremented
    

