import * as productPurchaseLocators from '../Product_purchase/productPurchase.locators.js';
import assert from 'soft-assert';
export default async function checkCarthasTwoProducts() {
    let cartt = await productPurchaseLocators.ShoppingCart;
    let cart_text = await cartt.getText();
    console.log("The value of cart is : " + cart_text);
    let keyword = "2";
    //   const assert = require('assert')
    let value = await cart_text.includes(keyword);

    assert.softTrue(value, `Cart does not contains ${keyword}`);
    assert.softAssertAll();
};