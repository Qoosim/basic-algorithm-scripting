const mergeSortedArray = (arr1, m, arr2, n) => {
  let cnt = 0;
  for (let i = m; i < arr1.length; i++) {
    arr1[i] = arr2[cnt];
    cnt++;
  }
  return arr1.sort((a, b) => a - b);
}

console.log(mergeSortedArray([1, 2, 3, 0, 0, 0,], [3], [2, 4, 5], [3]));
