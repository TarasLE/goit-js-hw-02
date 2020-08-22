function checkForSpam(str) {
  "use strict";
  let spamArray = ["spam", "sale"];
  let result = false;
  let checkArray = str.split(" ");
  for (let j = 0; j < checkArray.length; j++) {
    for (let i = 0; i < spamArray.length; i++) {
      if (checkArray[j].toLowerCase().includes(spamArray[i])) {
        result = checkArray[j].toLowerCase().includes(spamArray[i]);
      }
    }
  }
  return result;
}

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
