import { Given, When, Then } from '@wdio/cucumber-framework';
import checkingIfCartEmpty from 'D:/Task/Weather_Shopper_task/main/UI/pageObjects/CheckOut/CheckingCart.js';
import addingCheckoutDetails from 'D:/Task/Weather_Shopper_task/main/UI/pageObjects/CheckOut/addingDetails.js';
import CheckOut_locators from 'D:/Task/Weather_Shopper_task/main/UI/pageObjects/CheckOut/CheckOut_locators.js';
import ProductSPF50 from 'D:/Task/Weather_Shopper_task/main/UI/pageObjects/Product_purchase/ProductSPF50.action.js';
import ProductSPF30 from 'D:/Task/Weather_Shopper_task/main/UI/pageObjects/Product_purchase/ProductSPF30.action.js';
import switchingIframe from 'D:/Task/Weather_Shopper_task/main/UI/pageObjects/CheckOut/switchingIframe.actions.js';
import ProductPurchase_locators from '../../../main/UI/pageObjects/Product_purchase/ProductPurchase_locators'; 'D:/Task/Weather_Shopper_task/main/UI/pageObjects/Product_purchase/ProductPurchase_locators.js';
import assert from 'soft-assert';
let y;
Given("there are items in the cart", async () => {
    await CheckOut_locators.url;

    y = await ProductPurchase_locators.add_item();

    // await ProductSPF30();
});
When("the user enter payment details and makes payment", async () => {

    await checkingIfCartEmpty();
    /* let cart_text = await $("#cart").getText();
     let cart_btn = await $(".nav-link");
     let timeout = await browser.getTimeouts();
 
     console.log("The time is : " +
         JSON.stringify(timeout));
 
     console.log("Text inside cart is : " + cart_text)
     var n = 2;
     let splited_array = '';
     let slice = '';
 
     splited_array = cart_text.split(' ');
     slice = splited_array.slice(0);
     //  console.log("splited array : " + slice);
     console.log("spliteddd array : " + slice);
     let no_of_items = parseInt(slice);
     console.log("Price : " + no_of_items);
     if (no_of_items > 0) {
 
         await cart_btn.click();
     }
     else {
         console.log("No items in the cart !");
     }
 */
    /* await $(".stripe-button-el>span").waitForDisplayed({ timeout: 50000 });
     let pay_by_card_btn = await $("//button[@class='stripe-button-el']");
     await pay_by_card_btn.click();
     //browser.pause(3000);
     //  $('.stripe_checkout_app').isDisplayed();
     // const iframe = $(".stripe_checkout_app");
     /* const variable named as iframe is created and
                                     iframe id is assigned to iframe
                                  */
    //   iframe.scrollIntoView();
    /*
        await $(".stripe_checkout_app").waitForDisplayed({ timeout: 30000 });
        let isDisplayed = await $(".stripe_checkout_app").isDisplayed();
        console.log("butonnnnnnn displayyyeddd ?" + isDisplayed);
        await browser.switchToFrame(await $(".stripe_checkout_app"));
        await browser.pause(2000);*/
    /* await setTimeout(async function () {
         console.log("Switched Frame")
     }, 20000);*/
    let total_price = await $('//tr/td/following-sibling::td').getText();
    console.log("The y is : " + y);
    console.log("Total Price :" + total_price);
    if (total_price.includes(y)) {
        await switchingIframe();
        await browser.saveScreenshot("./screenshots/screenshots.png");
        console.log("Prices are equal !!");
    }
    else {
        console.log("Can't switch to iframe as prices not equal !!");
    }

    await addingCheckoutDetails();
    //  await CheckOut_locators.addPaymentDetails();
    /*  let user_email = await $("#email");
      let card_no = await $('#card_number');
      let expiry = await $("#cc-exp");
      let cvv_no = await $('#cc-csc');
      let submit_btn = await $('#submitButton');
      let zip_code = await $('#billing-zip');
  
      await user_email.setValue('TestUser@gmail.com');
      await card_no.setValue('4242');
      for (let i = 0; i < 3; i++) {
          await card_no.addValue('4242');
      }
      await expiry.setValue('12');
      await expiry.addValue('2048');
      await cvv_no.setValue('424');
      // 4242424242424242
      await zip_code.setValue('12345');
      await submit_btn.click();
      await browser.pause(5000);*/
    //  await expiry.setValue('102028');
    // await browser.pause(2000);


    // await $("#email").waitForDisplayed({ timeout: 50000 });
    // await browser.switchToFrame("stripe_checkout_app");
    //   await $("#email").waitForDisplayed({ timeout: 50000 });
    //button[@class='stripe-button-el']
    //  let add_SPF30_tocart_btn = await $$("//p[contains(@class, 'top-space-10')][contains(.,'SPF-30')] /following-sibling::button");
    //  let isDisplayed = await pay_by_card_btn.isDisplayed();
    //  console.log("butonnnnnnn displayyyeddd ?" + isDisplayed)

    // await browser.waitUntil(pay_by_card_btn.isDisplayed(), { timeout: 10000, timeoutMsg: 'expected text to be different after 5s' });

}
);


Then("the payment success screen will be given to user", async () => {
    let url = await browser.getUrl();
    let keyword = "confirmation";
    // const assert = require('assert')
    let value = url.includes(keyword);


    await assert.softTrue(value, `User is not on payment screen !`);
    await assert.softAssertAll();
});