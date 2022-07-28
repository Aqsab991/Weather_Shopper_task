import * as homePageLocators from "../HomePage/homePage.locators.js";
import assert from 'soft-assert';
import { extractKeyword } from '../homePage/extractKeyword.action.js';
export default async function thenAssertion() {
    let values = await extractKeyword();
    console.log("The newwwww value issssssss : " + values);
    await assert.softTrue(values, `Link Text does not includes`);
    await assert.softAssertAll();
};