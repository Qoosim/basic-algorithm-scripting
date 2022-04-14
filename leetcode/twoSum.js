const twoSum = (arr, target) => {
  let theSum = [];
  let firstElem = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (firstElem + arr[i + 1] === target) {
      theSum.push(i, i + 1);
    }
    firstElem = arr[i + 1];
  }
  return theSum;
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([3, 2,  3], 6));
