import ProductPurchase_locators from './ProductPurchase_locators';
import CheckOut_locators from 'D:/Task/Weather_Shopper_task/main/UI/pageObjects/CheckOut/CheckOut_locators.js';
/**
 * Navigates to a URL
 * @param {Array.Object} Plist_of_sunscreen WebdriverIO list
 * * @param {Object} add_sunscreen_tocart WebdriverIO button
 */
export default async () => {

    await ProductPurchase_locators.SPF50Sunscreen();

}; 