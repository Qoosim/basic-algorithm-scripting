const largestOfFour = (arr) => {
  let finalResult = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (largestNumber < arr[i][j]) {
        largestNumber = arr[i][j];
      }
      finalResult[i] = largestNumber;
    }
  }
  return finalResult;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
