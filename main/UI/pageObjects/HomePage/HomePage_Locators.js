class HomePage_Locators {
    get Page_url() {
        return "/";
    };
    get temperature() {
        return $("#temperature");
    };
    get moisturiser_btn() {
        return $("//a[@href=\"/moisturizer\"]");
    };
    get sunscreen_btn() {
        return $("//a[@href=\"/sunscreen\"]");
    };
    async selectProduct_wrt_temp() {
        let temperature = await this.temperature.getText();
        console.log("The temperature is : " + temperature);
        temperature = parseInt(temperature);
        console.log("The temperature is : " + temperature);
        if (temperature < 19) {
            await this.moisturiser_btn.click();

        }
        if (temperature > 34) {
            await this.sunscreen_btn.click();

        }
    };
    async getTemperature() {
        let temperature = await this.temperature.getText();
        console.log("The temperature is :" + temperature);
    }
    async wait(locator) {
        await locator.waitForDisplayed(8000);
    }
    async extractKeyword() {
        let url = await browser.getUrl();
        console.log("The obtained url is : " + url);
        let split_url = url.split('.com/');
        let keyword = split_url.slice(1);
        console.log("The keyword is : " + keyword);
        // const assert = require('soft-assert');
        let value = await url.includes(keyword);
        console.log("The value issssssss is : " + value);
        return value;
    }
}
module.exports = new HomePage_Locators();