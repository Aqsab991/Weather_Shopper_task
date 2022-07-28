import { Given, When, Then } from '@wdio/cucumber-framework';
import assertion from 'assert';
import selectProduct_wrt_temp from '../../../main/ui/pageObjects/homePage/selectProductwrttemp.action.js';
import thenAssertion from '../../../main/ui/pageObjects/homePage/assertion.action.js';
import assert from 'soft-assert';
import * as homePageLocators from "../../../main/ui/pageObjects/homePage/homePage.locators.js";
import waits from "D:/Task/Weather_Shopper_task/main/utils/waits.json";

Given("A web browser is at the home page", async () => {
    await browser.url("/");
    await homePageLocators.temperature.waitForDisplayed({ timeout: waits.largeWait });

    //   await checkoutLocators.paymentbtnSpan.waitForDisplayed({ timeout: waits.largeWait });
});

When(/^the user clicks on (.*) product buttons$/, async option => {
    await selectProduct_wrt_temp();
});
Then("the title of the page should be according to the product", async () => {
    await thenAssertion();
});