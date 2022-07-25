
Feature: Product Selection

  As a user, I want to be able to select either a moisturiser or suncreen on the basis of temperature

  Scenario Outline: User will Shop for moisturizers if the weather is below 19 degrees while Shops for suncreens if the weather is above 34 degrees.

    Given I am on the login page
    And the value of temperature is <temperatureOptions>

    When the user clicks on <buyButton>
    Then the title of the page should be <product>
    Examples:

      | temperatureOptions        | buyButton           | product         |

      | less than 19 degrees      | Buy moisturizers    | Moisturizers    |

      | greater than 34 degrees   | Buy sunscreens      | Sunscreens      |
