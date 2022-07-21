import { Given, When, Then } from '@wdio/cucumber-framework';
import Purchase_sunscreens_action from "../../Page_objects/Purchase_sunscreens/Purchase_sunscreens_action"
Given("the browser is at the \"Sunscreens\" page", async () => {
    await browser.url("https://weathershopper.pythonanywhere.com/sunscreen");
});

When(/^the Sunscreens are least expensive and contain either (.*) in the name, add them into the cart$/, async option => {

    let Plist_of_SPF50_sunscreen = await $$("//p[contains(@class, 'top-space-10')][contains(.,'SPF-50')] /following-sibling::p");

    let add_SPF50_tocart_btn = await $$("//p[contains(@class, 'top-space-10')][contains(.,'SPF-50')] /following-sibling::button");

    let Plist_of_SPF30_sunscreen = await $$("//p[contains(@class, 'top-space-10')][contains(.,'SPF-30')] /following-sibling::p");

    let add_SPF30_tocart_btn = await $$("//p[contains(@class, 'top-space-10')][contains(.,'SPF-30')] /following-sibling::button");


    await Purchase_sunscreens_action(Plist_of_SPF50_sunscreen, add_SPF50_tocart_btn);
    await Purchase_sunscreens_action(Plist_of_SPF30_sunscreen, add_SPF30_tocart_btn);
}
);

Then("the sunscreens are added into the cart and value of cart should be incremented", async () => {
    let cart = await $("#cart");
    let cart_text = await $("#cart").getText();
    console.log("The value of cart is : " + cart_text);
    let keyword = "2";
    const assert = require('assert')
    assert(cart_text.includes(keyword),
        `The cart value is not incremented`);
});