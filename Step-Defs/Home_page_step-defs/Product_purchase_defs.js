import { Given, When, Then } from '@wdio/cucumber-framework';
Given("the browser is at the \"Moisturizers\" page", async () => {
    await browser.url("https://weathershopper.pythonanywhere.com/moisturizer");
});

When(/^the moisturizer is least expensive and contains "(.*)" in the name$/, async option => {

    //  let list_of_moisturisers=$$("div>div.top-space-50>div.text-center>p+p");
    let list_of_moisturisers = await $$("div>div.top-space-50>div.text-center>p+p");
    let names_of_moisturisers = await $$("div>div.top-space-50>div.text-center>p");
    let length = list_of_moisturisers.length;
    console.log("The length of an array is : " + length);
    // console.log("The length of an array is : " + JSON.stringify(list_of_moisturisers[0]));
    // let least = 0;
    /* for (i = 0; i < length; i++) {
         //   let array_text = await JSON.stringify(list_of_moisturisers[i]).getText();
         // console.log("The text of an array is : " + array_text);
     }*/
    let least = 1000;
    var price_list = [];
    let x = 0;
    /*  list_of_moisturisers.map(async (elements) => {
          let array_text = await elements.getText();
          //  let array_names = await names.getText();
          console.log("The text of an array is : " + array_text);
          //  console.log("The names in an array are : " + array_names);
          // let splited_array = array_text.split(' ');
          var n = 2;
          let splited_array = '';
          let slice = '';
          if (array_text.includes("Rs.")) {
              splited_array = array_text.split(' ');
              slice = splited_array.slice(n);
              //   console.log("splited array : " + slice);
          }
          else {
              splited_array = array_text.split(' ');
              slice = splited_array.slice(1);
  
          }
          console.log("spliteddd array : " + slice);
  
          let price = parseInt(slice);
          console.log("Price : " + price);
          price_list.push(price);
          //  let arr = '';
  
          // let x = Math.min(price);
          //     console.log("The least element : " + arr);
  
          /*  if (price < least) {
                least = price;
                console.log("The least element : " + least);
            }
    */
    /*   console.log("The price list : " + price_list);
       let sort_array = price_list.sort();
       console.log("The sorted price list : " + sort_array);
       x = Math.min(parseInt(sort_array));
       console.log("Minimum price : " + x);*/
    // if (price == x && )
    /*   names_of_moisturisers.map(async (names) => {
           let array_names = await names.getText();
           console.log("The names in an array are : " + array_names);
       })*/

    // return x;
    // min.set(0, x);

    //});
    for (let i = 0; i < length; i++) {
        let array_text = await list_of_moisturisers[i].getText();
        //  let array_names = await names.getText();
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
        let sort_array = price_list.sort();
        console.log("The sorted price list : " + sort_array);
        x = Math.min(parseInt(sort_array));

    }
    console.log("Minimum price : " + x);
    for (let j = 0; j < length; j++) {
        let name = await names_of_moisturisers[i].getText();
      //  console.log("The names are : " + name);

    }
    //   console.log("Minimum priceeeeeeee : " + min.get(x));
    // let arr = '';
    // arr += price;
    // let x = Math.min(price);
    //  console.log("The least element : " + least);

});