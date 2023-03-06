const firstArray = [2,3,5,7,11];
const secondArray = [true, "Hello World", false, "Lorem Ipsum", 6, Math.PI];

const findElementIndex = (arr, elem) => {
  //for (let i = 0; i < arr.length; i++) {
    //if (arr[i] === elem) return i;
  //}
  //return 'Not found';
  return arr.map((item, index) => item === elem ? index : item !== elem ? 'Not found' : '');
}

console.log(findElementIndex(firstArray, 5)) // 2;
console.log(findElementIndex(firstArray, 11)) // 4;
console.log(findElementIndex(firstArray, 3)) // 1;
console.log(findElementIndex(firstArray, 2)) // 0;
console.log(findElementIndex(firstArray, 7)) // 3;
console.log(findElementIndex(firstArray, 1)) // "Not found"
console.log(findElementIndex(firstArray, 8)) // "Not found"

// Second Array test
console.log(findElementIndex(secondArray, 'Hello World')) // 1 
console.log(findElementIndex(secondArray, 'lorem ipsum')) // "Not found" 
console.log(findElementIndex(secondArray, 'Lorem Ipsum')) // 3 
console.log(findElementIndex(secondArray, false)) // 2 
console.log(findElementIndex(secondArray, true)) // 0 
console.log(findElementIndex(secondArray, Math.PI)) // 5 
console.log(findElementIndex(secondArray, 3.14)) // 'Not found' 
console.log(findElementIndex(secondArray, 6)) // 4
