const frankenSplice = (arr1, arr2, n) => {
  let newArr = arr2.slice();
  let result = newArr.splice(n, 0, ...arr1);
  return (newArr);
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

//expected output: [4, 1, 2, 3, 5, 6]
