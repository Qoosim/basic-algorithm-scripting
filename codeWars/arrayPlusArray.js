const arrayPlusArray = (arr1, arr2) => {
  const newArr = arr1.concat(arr2);
  const val = newArr.reduce((acc, num) => acc + num);
  return val;
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]));
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]));
