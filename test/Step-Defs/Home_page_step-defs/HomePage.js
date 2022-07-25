import { Given, When, Then } from '@wdio/cucumber-framework';
import click_product_btns from 'D:/Task/Weather_Shopper_task/main/UI/pageObjects/HomePage/HomePage_Actions.js';
import HomePage_Locators, { wait } from 'D:/Task/Weather_Shopper_task/main/UI/pageObjects/HomePage/HomePage_Locators.js';
Given("A web browser is at the home page", async () => {
    await browser.url("/");

    await HomePage_Locators.wait(HomePage_Locators.temperature);
    await HomePage_Locators.getTemperature;

});

When(/^the user clicks on (.*) product buttons$/, async option => {
    await click_product_btns();
    //  await LoginPage.login(username, password)
    /*  let temperature = await $("#temperature").getText();
      console.log("The temperature is : " + temperature);
      temperature = parseInt(temperature);
      console.log("The temperature is : " + temperature);
      if (temperature < 19) {
          await $("//a[@href=\"/moisturizer\"]").click();
  
      }
      if (temperature > 34) {
          await $("//a[@href=\"/sunscreen\"]").click();
  
      }*/
});
Then("the title of the page should be according to the product", async () => {
    let url = await browser.getUrl();
    console.log("The obtained url is : " + url);
    let split_url = url.split('.com/');
    let keyword = split_url.slice(1);
    console.log("The keyword is : " + keyword);

    const assert = require('assert')
    assert(url.includes(keyword),
        `Link Text does not includes ${keyword}`);

});

/*
When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});
*/
/*
import { Given } from '@wdio/cucumber-framework';
Given(/^A web browser is at the Google home page$/, async () => {
    await browser.url('http://weathershopper.pythonanywhere.com/');
    //  await $("#temperature").waitForDisplayed(15000);
    // let temperature = $("#temperature").innerHTML;
    //  console.log("The temperature is :" + temperature);
    //  if (temperature < 19) {
    //       (await $("//a[@href=/" / moisturizer / "]")).click();
    //   }


});*/