import { Given, When, Then } from '@wdio/cucumber-framework';
import purchase_aloeMositurizer from '../../../main/ui/pageObjects/Product_purchase/purchaseAloeMoisturiser.action.js';
import Almondmoisturiser from '../../../main/ui/pageObjects/Product_purchase/purchaseAlmondMoisturiser.action.js';
import * as ProductPurchaseLocators from '../../../main/ui/pageObjects/Product_purchase/productPurchase.locators.js';
import * as homePageLocators from "D:/Task/Weather_Shopper_task/main/ui/pageObjects/homePage/homePage.locators.js";
import SPF50Sunscreen from '../../../main/ui/pageObjects/Product_purchase/purchaseSPF50.action.js';
import SPF30Sunscreen from '../../../main/ui/pageObjects/Product_purchase/purchaseSPF30.action.js';
import checkCarthasTwoProducts from '../../../main/ui/pageObjects/Product_purchase/checkCartValue.assertion.js';
import assert from 'soft-assert';
import waits from "D:/Task/Weather_Shopper_task/main/utils/waits.json";
Given("the user is at the \"Home\" page of app", async () => {
    await browser.url("/");
});

When(/^the Products are (.*) and meet specific criteria, add them into the cart$/, async option => {
    let Moisturiser_btn = await homePageLocators.moisturiser_btn;
    let Sunscreen_btn = await homePageLocators.sunscreen_btn;
    await Moisturiser_btn.click();
    await purchase_aloeMositurizer();
    await Almondmoisturiser();
    await browser.url("/");
    await Sunscreen_btn.click();
    await $("//div/h2[contains(.,'Sunscreens')]").waitForDisplayed({ timeout: waits.VeryLargeWait });
    await SPF50Sunscreen();
    await SPF30Sunscreen();
}
);

Then("the sunscreens are added into the cart and value of cart should be incremented", async () => {
    await checkCarthasTwoProducts();
});