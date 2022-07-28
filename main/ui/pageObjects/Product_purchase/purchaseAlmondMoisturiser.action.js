import * as productPurchaseLocators from '../Product_purchase/productPurchase.locators.js';
import { extract_price } from '../Product_purchase/extractPrice.action.js';
export default async function Almondmoisturiser() {

    let y = 0;
    let locators = await $$(productPurchaseLocators.PlistOfAlmondMoisturisers);
    y = await extract_price(locators);
    console.log("Value of y iss : " + y);
    await $("//p[contains(@class, 'top-space-10')][contains(.,'Almond') or contains(.,'almond')] /following-sibling::button[contains(@onClick,'" + y + "')]").click();

}