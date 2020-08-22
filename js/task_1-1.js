const getItemsString = function (array) {
  "use strict";
  let result = "";
  for (let i = 0; i < array.length; i++) {
    let element = `${i + 1} - ${array[i]}\n`;
    result += element;
    // console.log(element);
  }
  console.log(result);
  return result;
};

getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
