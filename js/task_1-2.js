// const calculateEngravingPrice = (message = "", pricePerWord = 0) =>
//   pricePerWord;

const calculateEngravingPrice = function (message, pricePerWord) {
  pricePerWord = message.split(" ").length * pricePerWord;
  //   console.log(pricePerWord);
  return pricePerWord;
};

// calculateEngravingPrice(
//   "Proin sociis natoque et magnis parturient montes зщш",
//   10
// );

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     20
//   )
// ); // 160
