
import * as checkoutLocators from '../checkOut/checkout.locators.js';
/**
 * Navigates to a URL

 */
export default async function checkingIfCartEmpty() {
    let cart_text = await checkoutLocators.CartText.getText();
    let cart_btn = checkoutLocators.CartBtn;
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

}