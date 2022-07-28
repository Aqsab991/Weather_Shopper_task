import * as productPurchaseLocators from '../Product_purchase/productPurchase.locators.js';
import { extract_price } from '../Product_purchase/extractPrice.action.js';
export default async function purchase_aloeMositurizer() {
    let y = 0;
    let locators = await $$(productPurchaseLocators.PlistOfAloeMoisturisers);
    y = await extract_price(locators);
    console.log("Value of y iss : " + y);
    await $("//p[contains(@class, 'top-space-10')][contains(.,'Aloe') or contains(.,'aloe')] /following-sibling::button[contains(@onClick,'" + y + "')]").click();
};