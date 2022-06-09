const mergeSortedArray = (arr1, m, arr2, n) => {
  return [...arr1,...arr2]
  return [...arr1].concat(...arr2);
}

console.log(mergeSortedArray([1, 2, 3, 0, 0, 0,], [3], [2, 4, 5], [3]));
