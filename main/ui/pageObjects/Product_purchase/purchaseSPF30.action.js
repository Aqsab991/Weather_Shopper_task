import * as productPurchaseLocators from '../Product_purchase/productPurchase.locators.js';
import { extract_price } from '../Product_purchase/extractPrice.action.js';
export default async function SPF30Sunscreen() {

    let y = 0;
    let locators = await $$(productPurchaseLocators.PList_of_SPF30);
    y = await extract_price(locators);
    console.log("Value of y iss : " + y);
    await $("//p[contains(@class, 'top-space-10')][contains(.,'SPF-30') or contains(.,'spf-30')] /following-sibling::button[contains(@onClick,'" + y + "')]").click();

}