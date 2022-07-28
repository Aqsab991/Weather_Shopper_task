export async function extractKeyword() {
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