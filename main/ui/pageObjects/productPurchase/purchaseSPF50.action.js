import * as productPurchaseLocators from '../productPurchase/productPurchase.locators.js';
import { extract_price } from '../productPurchase/extractPrice.action.js';
export default async function SPF50Sunscreen() {

    let y = 0;
    let locators = await $$(productPurchaseLocators.PList_of_SPF50);
    y = await extract_price(locators);
    console.log("Value of y iss : " + y);
    await $("//p[contains(@class, 'top-space-10')][contains(.,'SPF-50') or contains(.,'spf-50')] /following-sibling::button[contains(@onClick,'" + y + "')]").click();
    //p[contains(@class, 'top-space-10')][contains(.,'SPF-30') or contains(.,'spf-30')] /following-sibling::button[contains(@onClick,'289')]
}