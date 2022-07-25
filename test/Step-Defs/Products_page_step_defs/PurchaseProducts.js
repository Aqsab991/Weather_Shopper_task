import { Given, When, Then } from '@wdio/cucumber-framework';
import Product_AloeMoisturiser from 'D:/Task/Weather_Shopper_task/main/UI/pageObjects/Product_purchase/Product_AloeMoisturiser.js';
import ProductAlmondMoisturiser from 'D:/Task/Weather_Shopper_task/main/UI/pageObjects/Product_purchase/ProductAlmondMoisturiser.action.js';
import CheckOut_locators from 'D:/Task/Weather_Shopper_task/main/UI/pageObjects/CheckOut/CheckOut_locators.js';
import ProductPurchase_locators from 'D:/Task/Weather_Shopper_task/main/UI/pageObjects/Product_purchase/ProductPurchase_locators.js';
import HomePage_Locators from 'D:/Task/Weather_Shopper_task/main/UI/pageObjects/HomePage/HomePage_Locators.js';
import ProductSPF50 from 'D:/Task/Weather_Shopper_task/main/UI/pageObjects/Product_purchase/ProductSPF50.action.js';
import ProductSPF30 from 'D:/Task/Weather_Shopper_task/main/UI/pageObjects/Product_purchase/ProductSPF30.action.js';
import assert from 'soft-assert';
Given("the user is at the \"Home\" page of app", async () => {
    await browser.url("/");
});

When(/^the Products are (.*) and meet specific criteria, add them into the cart$/, async option => {
    let Moisturiser_btn = await HomePage_Locators.moisturiser_btn;
    let Sunscreen_btn = await HomePage_Locators.sunscreen_btn;
    await Moisturiser_btn.click();
    await Product_AloeMoisturiser();
    await ProductAlmondMoisturiser();
    await browser.url("/");
    await Sunscreen_btn.click();
    await $("//div/h2[contains(.,'Sunscreens')]").waitForDisplayed({ timeout: 50000 });
    await ProductSPF50();
    await ProductSPF30();
    /*
        let Plist_of_Aloe_moisturisers = await ProductPurchase_locators.PlistOfAloeMoisturisers;
        //  let names_of_moisturisers = await $$("div>div.top-space-50>div.text-center>p.top-space-10");
        let add_Aloemoisturisers_tocart_btn = await ProductPurchase_locators.addAloeMoisturiser_btn;
    
        let Plist_of_Almond_moisturisers = await ProductPurchase_locators.PlistOfAlmondMoisturisers;
        // let names_of_moisturisers = await $$("div>div.top-space-50>div.text-center>p.top-space-10");
        let add_Alomndmoisturisers_tocart_btn = await ProductPurchase_locators.addAlmondMoisturisers_btn;
    
        await Product_AloeMoisturiser();
          await Product_purchase_action(Plist_of_Almond_moisturisers, add_Alomndmoisturisers_tocart_btn);
      
          await browser.url("/");
      */
    // await Sunscreen_btn.click();/*
    //  await $("//div/h2[contains(.,'Sunscreens')]").waitForDisplayed({ timeout: 50000 });

    //let Plist_of_SPF50_sunscreen = await CheckOut_locators.PList_of_SPF50;

    //let add_SPF50_tocart_btn = await CheckOut_locators.btn_spf50;*/

    // let Plist_of_SPF30_sunscreen = await CheckOut_locators.PList_of_SPF30;
    //let add_SPF30_tocart_btn = await CheckOut_locators.btn_spf30;


    //  await Product_purchase_action(Plist_of_SPF50_sunscreen, add_SPF50_tocart_btn);
    // await Product_purchase_action(Plist_of_SPF30_sunscreen, add_SPF30_tocart_btn);
    //  browser.pause(5000);
}
);

Then("the sunscreens are added into the cart and value of cart should be incremented", async () => {
    let cartt = await CheckOut_locators.CartText;
    let cart_text = await cartt.getText();
    console.log("The value of cart is : " + cart_text);
    let keyword = "2";
    //   const assert = require('assert')
    let value = await cart_text.includes(keyword);

    assert.softTrue(value, `Cart does not contains ${keyword}`);
    assert.softAssertAll();
});