import ProductPurchase_locators from './ProductPurchase_locators';
import CheckOut_locators from 'D:/Task/Weather_Shopper_task/main/UI/pageObjects/CheckOut/CheckOut_locators.js';
/**
 * Navigates to a URL
 * @param {Array.Object} Plist_of_sunscreen WebdriverIO list
 * * @param {Object} add_sunscreen_tocart WebdriverIO button
 */
export default async () => {

    /* for (let i = 0; i < length; i++) {
         let array_text = await Plist_of_sunscreen[i].getText();
         //  let array_names = await names.getText();
         console.log("The text of an array is : " + array_text);
         //    let splited_array = array_text[i].split(' ');*/
    await ProductPurchase_locators.Aloemoisturiser();
    /*    var n = 2;
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
 
        let sort_array = price_list.sort();
        console.log("The sorted price list : " + sort_array);
        //  x = Math.min(parseInt(sort_array));*/

    //}
    //  console.log("The sorted array is :" + sorted_array);
    // x = Math.min(parseInt(sorted_array));
    // console.log("Minimum price : " + x);
    // await $("//p[contains(@class, 'top-space-10')][contains(.,'Aloe') or contains(.,'aloe')] /following-sibling::button[contains(@onClick,'" + x + "')]").click();
    //browser.pause(5000);
    /*   for (let j = 0; j < length; j++) {
           let array_text_price = await Plist_of_sunscreen[j].getText();
           //  let array_names = await names.getText();
           console.log("The text of an array is : " + array_text_price);
           console.log("The value of x is : " + x);
           if (array_text_price.includes(x)) {
               console.log("The smallest price element" + x);
               add_sunscreen_tocart[j].click();
               //      console.log("The button : " + await add_tocart_moisturisers_btn[j].getText());
           }
       }*/
}; 