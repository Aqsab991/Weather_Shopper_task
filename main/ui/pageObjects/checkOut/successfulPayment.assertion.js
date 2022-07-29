
import assert from 'soft-assert';
/**
 * Navigates to a URL
 
 */

export default async function paymentSuccess() {
    let url = await browser.getUrl();
    let keyword = "confirmation";
    // const assert = require('assert')
    let value = url.includes(keyword);
    await assert.softTrue(value, `User is not on payment screen !`);
    await assert.softAssertAll();
};