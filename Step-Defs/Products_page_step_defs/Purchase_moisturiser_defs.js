import { Given, When, Then } from '@wdio/cucumber-framework';
import Purchase_sunscreens_action from "../../Page_objects/Purchase_sunscreens/Purchase_sunscreens_action"
Given("the browser is at the \"Moisturizers\" page", async () => {
    await browser.url("https://weathershopper.pythonanywhere.com/moisturizer");
});

When(/^the moisturizers are least expensive and contains either (.*) in the name, user adds them into the cart$/, async option => {

    let Plist_of_Aloe_moisturisers = await $$("//p[contains(@class, 'top-space-10')][contains(.,'Aloe')] /following-sibling::p");
    //  let names_of_moisturisers = await $$("div>div.top-space-50>div.text-center>p.top-space-10");
    let add_Aloemoisturisers_tocart_btn = await $$("//p[contains(@class, 'top-space-10')][contains(.,'Aloe')] /following-sibling::button");

    let Plist_of_Almond_moisturisers = await $$("//p[contains(@class, 'top-space-10')][contains(.,'Almond')] /following-sibling::p");
    // let names_of_moisturisers = await $$("div>div.top-space-50>div.text-center>p.top-space-10");
    let add_Alomndmoisturisers_tocart_btn = await $$("//p[contains(@class, 'top-space-10')][contains(.,'Almond')] /following-sibling::button");
    await Purchase_sunscreens_action(Plist_of_Aloe_moisturisers, add_Aloemoisturisers_tocart_btn);
    await Purchase_sunscreens_action(Plist_of_Almond_moisturisers, add_Alomndmoisturisers_tocart_btn);

});
Then("the value of cart should be incremented", async () => {
    let cart = await $("#cart");
    let cart_text = await $("#cart").getText();
    console.log("The value of cart is : " + cart_text);
    let keyword = "2";
    const assert = require('assert')
    assert(cart_text.includes(keyword),
        `The cart value is not incremented`);
});