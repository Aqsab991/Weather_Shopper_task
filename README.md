# Weather_Shopper_task
1. Created three test scenarios to automate three features of web app.
2. First Scenario : Selection of product category on basis of temperature (Home Page)
   - User lands on home page.
   - User identifies temperature selector and extracts temperature's value.
   - If temperature is < 19 he selects moisturiser.In case temperature is greater than 34 he selects sunscreens.
   - Then if user is on respective product category page, the scenario is passed.
3. Second Scenario : Adding cheap products that fulfill specific criteria into the cart
   - User lands on home page and selects moisturisers.
   - User identifies the list of products of particular type by creating a selector for it.
   - User extracts the price of each product from list of products and finds minimun price.
   - Then user finds the product from the list of products whose price matches the minimum price.
   - Once the product is determined user adds that product to the cart.
4. Third Scenario: Checkout
   - Users adds products to the cart.
   - Then goes to checkout screen.
   - There user needs to select pay by card button.Consequently, the iFrame will be displayed.
   - User will switch to iframe via its selector to access elements of iframe.
   - Then user will add values into the fields.
   - And click on payment button.
   - It passes if payment gets successfull.
 5. Page objects have been created:
   - Locators => contain locators of page and functions.
   - Actions => contain actions that are performed during and scenario.
 6. Reports:
    Two reports have been added.
    - Allure Reports.(Folder name => Reports)
    - Cucumber Html Report.(Folder name => HtmlReport)
 7. Screen Shot of each step is added in the reportt folder
