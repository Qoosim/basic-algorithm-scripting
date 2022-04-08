const getIndexToInsert = (arr, value) => {
  const sortedArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] >= value) {
      return i;
    }
  }
  return sortedArr.length;
}

console.log(getIndexToInsert([1,2,3,4], 1.5));
console.log(getIndexToInsert([20,3,5], 19));
console.log(getIndexToInsert([40, 60], 50));
console.log(getIndexToInsert([10, 20, 30, 40, 50], 30));
