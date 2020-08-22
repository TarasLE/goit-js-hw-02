function findLongestWord(string = "") {
  //   let stringToArray = string.split(" ");
  let maxLength = 0;
  let longestWord = "";
  for (const element of string.split(" ")) {
    if (element.split("").length > maxLength) {
      maxLength = element.split("").length;
      longestWord = element;
      //     }
      //   for (let i = 0; i < stringToArray.length; i++) {
      //     let currentWord = stringToArray[i].split("").length;
      //     if (currentWord > maxLength) {
      //       maxLength = currentWord;
      //       longestWord = stringToArray[i];
      //     }
    }
  }
  console.log(longestWord);
  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
("jumped");

console.log(findLongestWord("Google do a roll"));
// 'Google'

console.log(findLongestWord("May the force be with you"));
// 'force'
