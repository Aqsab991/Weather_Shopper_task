
import * as checkoutLocators from '../checkOut/checkout.locators.js';
import waits from "../../../utils/waits.json"
import { customClick } from '../../../utils/browser.actions.utils.js';
/**
 * Navigates to a URL
 
 */

export default async function switchToIframe() {
    let pay_by_card_btn = await checkoutLocators.paymentbyCardbtn;
    await customClick(pay_by_card_btn);
    await checkoutLocators.Iframe.waitForDisplayed({ timeout: waits.largeWait });
    let isDisplayed = await checkoutLocators.Iframe.isDisplayed();
    console.log("butonnnnnnn displayyyeddd ?" + isDisplayed);
    await browser.switchToFrame(await checkoutLocators.Iframe);
    await browser.pause(2000);

}