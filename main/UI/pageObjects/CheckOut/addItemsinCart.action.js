import * as checkoutLocators from '../checkOut/checkout.locators.js';
import waits from "../../../utils/waits.json"
import * as productPurchaseLocators from '../Product_purchase/productPurchase.locators.js';
/**
 * Navigates to a URL
 
 */

export default async function addItems() {
    await $$(productPurchaseLocators.btn_spf50)[1].click();
    let productPrice = await $$(productPurchaseLocators.PList_of_SPF50)[1].getText();
    //   let array_text = await Plist[i].getText();
    var n = 2;
    let splited_text = '';
    let slice = '';
    if (productPrice.includes("Rs.")) {
        splited_text = productPrice.split(' ');
        slice = splited_text.slice(n);
        //  console.log("splited array : " + slice);
    }
    else {
        splited_text = productPrice.split(' ');
        slice = splited_text.slice(1);

    }
    console.log("The text: " + slice);
    let Pprice = parseInt(slice);
    console.log("Price : " + Pprice);
    return Pprice;

};