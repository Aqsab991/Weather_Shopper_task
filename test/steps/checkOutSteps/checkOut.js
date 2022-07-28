import { Given, When, Then } from '@wdio/cucumber-framework';
import checkingIfCartEmpty from '../../../main/ui/pageObjects/CheckOut/CheckingCart.action.js';
import addingCheckoutDetails from '../../../main/ui/pageObjects/CheckOut/addingDetails.action.js';
import addItems from '../../../main/ui/pageObjects/CheckOut/addItemsinCart.action.js';
import * as CheckOut_locators from '../../../main/ui/pageObjects/checkOut/checkout.locators.js';
import switchToIframe from '../../../main/ui/pageObjects/CheckOut/switchingIframe.actions.js';
import * as ProductPurchase_locators from '../../../main/ui/pageObjects/Product_purchase/productPurchase.locators.js';
import paymentSuccess from '../../../main/ui/pageObjects/CheckOut/successfulPayment.assertion.js';
import assert from 'soft-assert';
import waits from "D:/Task/Weather_Shopper_task/main/utils/waits.json";
let y = 0;
Given("there are items in the cart", async () => {
    await CheckOut_locators.url;
    y = await addItems();
});
When("the user enter payment details and makes payment", async () => {

    await checkingIfCartEmpty();
    await browser.saveScreenshot('./screenshots/ss.png');
    browser.pause(5000);
    // await $('#total').waitForDisplayed(10000);
    let total_price = await $('#total').getText();
    console.log("The y is : " + y);
    console.log("Total Price :" + total_price);
    if (total_price.includes(y)) {
        await switchToIframe();
        await browser.saveScreenshot("./screenshots/screenshots.png");
        console.log("Prices are equal !!");
    }
    else {
        console.log("Can't switch to iframe as prices not equal !!");
    }

    await addingCheckoutDetails();
}
);


Then("the payment success screen will be given to user", async () => {
    await paymentSuccess();
});