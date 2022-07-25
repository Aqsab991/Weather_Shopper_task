Feature: Product Selection

  As a user, I want to be able to select either a moisturiser or suncreen on the basis of temperature

  Scenario Outline: User will Shop for moisturizers if the weather is below 19 degrees while Shops for suncreens if the weather is above 34 degrees.

    Given A web browser is at the home page

    When the user clicks on respective product buttons

    Then the title of the page should be according to the product

