class CheckOut_locators {
    get url() {
        return browser.url("https://weathershopper.pythonanywhere.com/sunscreen");
    };
    get PList_of_SPF50() {
        return $$("//p[contains(@class, 'top-space-10')][contains(.,'SPF-50')] /following-sibling::p");
    };
    get PList_of_SPF30() {
        return $$("//p[contains(@class, 'top-space-10')][contains(.,'SPF-30')] /following-sibling::p");
    };
    get btn_spf50() {
        return $$("//p[contains(@class, 'top-space-10')][contains(.,'SPF-50')] /following-sibling::button");
    };
    get btn_spf30() {
        return $$("//p[contains(@class, 'top-space-10')][contains(.,'SPF-30')] /following-sibling::button");
    };
    get CartText() {
        return $("#cart");
    };
    get CartBtn() {
        return $(".nav-link");
    };


    async checkingCartItems() {
        let cart_text = await this.CartText.getText();
        let cart_btn = this.CartBtn;
        let timeout = await browser.getTimeouts();

        console.log("The time is : " +
            JSON.stringify(timeout));
        console.log("Text inside cart is : " + cart_text)
        var n = 2;
        let splited_array = '';
        let slice = '';

        splited_array = cart_text.split(' ');
        slice = splited_array.slice(0);
        //  console.log("splited array : " + slice);
        console.log("spliteddd array : " + slice);
        let no_of_items = parseInt(slice);
        console.log("Price : " + no_of_items);
        if (no_of_items > 0) {

            await cart_btn.click();
        }
        else {
            console.log("No items in the cart !");
        }

    };
    get UserEmail() {
        return $("#email");
    }
    get CardNo() {
        return $('#card_number');
    };
    get cardExpiry() {
        return $("#cc-exp");
    };
    get CVVno() {
        return $('#cc-csc');

    };
    get Zipcode() {
        return $('#billing-zip');
    };
    get paymentBtn() {
        return $('#submitButton');
    };
    async addPaymentDetails() {
        console.log("Inside payment details method");
        let submit_button = this.paymentBtn;
        await this.UserEmail.waitForDisplayed({ timeout: 50000 });
        let email = await this.UserEmail;
        await email.setValue('TestUser@gmail.com');
        await this.CardNo.setValue('4242');
        for (let i = 0; i < 3; i++) {
            await this.CardNo.addValue('4242');
        }
        await this.cardExpiry.setValue('12');
        await this.cardExpiry.addValue('2048');
        await this.CVVno.setValue('424');
        // 4242424242424242
        await this.Zipcode.setValue('12345');
        //    let submit_btn = await $('#submitButton');
        await submit_button.click();
        await browser.pause(5000);
    }

}
module.exports = new CheckOut_locators();