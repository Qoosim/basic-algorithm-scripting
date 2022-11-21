const reverseStr = (str) => {
  // use let to declare a variable and assign it to ''

  let reverseStr = '';

  // iterate over the str from the last index to the first index and add to the variable declared ealier on
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  //
  // return the variable
  return reverseStr;
}

console.log(reverseStr('Hello world'));
console.log(reverseStr('Love'));
console.log(reverseStr('JavaScript'));
