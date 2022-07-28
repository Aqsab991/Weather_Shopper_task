Feature: Checkout

  As a user, I want to be able to checkout successfully after adding the items

  Scenario: User wants to perform checkout 
    Given there are items in the cart
    When the user enter payment details and makes payment
    Then the payment success screen will be given to user

    