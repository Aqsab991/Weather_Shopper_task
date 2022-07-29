
export async function extract_price(Plist) {
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