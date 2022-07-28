
import * as checkoutLocators from '../checkOut/checkout.locators.js';
import { sendKeys } from 'D:/Task/Weather_Shopper_task/main/utils/browser.actions.utils.js';
export default async function addingCheckoutDetails() {
    console.log("Inside payment details method");
    let submit_button = checkoutLocators.paymentBtn;
    let value = 'TestUser@gmail.com';
    let email = await checkoutLocators.UserEmail;
    await sendKeys(email, value);
    // await checkoutLocators.UserEmail.waitForDisplayed({ timeout: waits.veryLargeWait });
    // let email = await checkoutLocators.UserEmail;
    //  await email.setValue('TestUser@gmail.com');
    await checkoutLocators.CardNo.setValue('4242');
    for (let i = 0; i < 3; i++) {
        await checkoutLocators.CardNo.addValue('4242');
    }
    await checkoutLocators.cardExpiry.setValue('12');
    await checkoutLocators.cardExpiry.addValue('2048');
    await checkoutLocators.CVVno.setValue('424');
    // 4242424242424242
    await checkoutLocators.Zipcode.setValue('12345');
    //    let submit_btn = await $('#submitButton');
    await submit_button.click();
    await browser.pause(5000);

}