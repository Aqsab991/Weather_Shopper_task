class ProductPurchase_locators {
    get PlistOfAloeMoisturisers() {
        return $$("//p[contains(@class, 'top-space-10')][contains(.,'Aloe') or contains(.,'aloe')] /following-sibling::p");
    };
    get addAloeMoisturiser_btn() {
        return $$("//p[contains(@class, 'top-space-10')][contains(.,'Aloe') or contains(.,'aloe')] /following-sibling::button");
    };
    get PlistOfAlmondMoisturisers() {
        return $$("//p[contains(@class, 'top-space-10')][contains(.,'Almond') or contains(.,'almond')] /following-sibling::p");
    };
    get addAlmondMoisturisers_btn() {
        return $$("//p[contains(@class, 'top-space-10')][contains(.,'Almond') or contains(.,'almond')] /following-sibling::button");
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
    get ShoppingCart() {
        return $("#cart");
    }
    async Aloemoisturiser() {

        let y = 0;
        let locators = await this.PlistOfAloeMoisturisers;
        y = await this.extract_price(locators);
        console.log("Value of y iss : " + y);
        await $("//p[contains(@class, 'top-space-10')][contains(.,'Aloe') or contains(.,'aloe')] /following-sibling::button[contains(@onClick,'" + y + "')]").click();
        /*  let sort_array = [];
           let x = 0;
           var price_list = [];
           let length = await this.PlistOfAloeMoisturisers.length;
   
           for (let i = 0; i < length; i++) {
               let arr_text = await this.PlistOfAloeMoisturisers[i].getText();
               let pprice = await this.extract_price(arr_text);
               price_list.push(pprice);
               console.log("The price list : " + price_list);
   
               sort_array = price_list.sort();
               console.log("The sorted price list : " + sort_array);
               //    sorted_array = await this.extract_price(arr_text);
           }
           // console.log("The sorteddddddddddd price list : " + sorted_array);
           x = Math.min(parseInt(sort_array));
           console.log("Minimum price : " + x);*/
    }
    async Almondmoisturiser() {

        let y = 0;
        let locators = await this.PlistOfAlmondMoisturisers;
        y = await this.extract_price(locators);
        console.log("Value of y iss : " + y);
        await $("//p[contains(@class, 'top-space-10')][contains(.,'Almond') or contains(.,'almond')] /following-sibling::button[contains(@onClick,'" + y + "')]").click();

    }
    async SPF50Sunscreen() {

        let y = 0;
        let locators = await this.PList_of_SPF50;
        y = await this.extract_price(locators);
        console.log("Value of y iss : " + y);
        await $("//p[contains(@class, 'top-space-10')][contains(.,'SPF-50') or contains(.,'spf-50')] /following-sibling::button[contains(@onClick,'" + y + "')]").click();
        //p[contains(@class, 'top-space-10')][contains(.,'SPF-30') or contains(.,'spf-30')] /following-sibling::button[contains(@onClick,'289')]
    }
    async SPF30Sunscreen() {

        let y = 0;
        let locators = await this.PList_of_SPF30;
        y = await this.extract_price(locators);
        console.log("Value of y iss : " + y);
        await $("//p[contains(@class, 'top-space-10')][contains(.,'SPF-30') or contains(.,'spf-30')] /following-sibling::button[contains(@onClick,'" + y + "')]").click();

    }
    async extract_price(Plist) {
        var price_list = [];
        let sort_array = [];
        let x = 0;
        let length = await Plist.length;
        for (let i = 0; i < length; i++) {
            let array_text = await Plist[i].getText();
            console.log("The text of an array is : " + array_text);
            //    let splited_array = array_text[i].split(' ');

            var n = 2;
            let splited_array = '';
            let slice = '';
            if (array_text.includes("Rs.")) {
                splited_array = array_text.split(' ');
                slice = splited_array.slice(n);
                //  console.log("splited array : " + slice);
            }
            else {
                splited_array = array_text.split(' ');
                slice = splited_array.slice(1);

            }
            console.log("spliteddd array : " + slice);
            let price = parseInt(slice);
            console.log("Price : " + price);
            price_list.push(price);
            console.log("The price list : " + price_list);

            sort_array = price_list.sort();
            console.log("The sorted price list : " + sort_array);
        }
        //  return sort_array;

        // console.log("The sorted array is :" + sorted_array);
        x = Math.min(parseInt(sort_array));
        console.log("Minimum price : " + x);
        return x;
    }
}
module.exports = new ProductPurchase_locators();