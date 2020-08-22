function formatString(string, maxLength = 40) {
  if (string.split("").length <= maxLength) {
    // console.log(string);
    return string;
  } else {
    string = string.slice(0, maxLength) + "...";
    return string;
  }
}

// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // 'Curabitur ligula sapien, tincidunt non.'

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // 'Vestibulum facilisis, purus nec pulvinar...'

// console.log(
//   formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
// );
// 'Vestibulum facilisis, purus ne...'
