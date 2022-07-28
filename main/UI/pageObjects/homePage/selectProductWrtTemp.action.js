import * as homePageLocators from "../homePage/homePage.locators.js";
export default async function selectProduct_wrt_temp() {
    let temperature = await homePageLocators.temperature.getText();
    console.log("The temperature is : " + temperature);
    temperature = parseInt(temperature);
    console.log("The temperature is : " + temperature);
    if (temperature < 19) {
        await homePageLocators.moisturiser_btn.click();

    }
    if (temperature > 34) {
        await homePageLocators.sunscreen_btn.click();

    }
};