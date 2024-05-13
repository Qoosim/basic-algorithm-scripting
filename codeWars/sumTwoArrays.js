const sumTwoArrays1 = (arr1, arr2) => {
  const expectedValue = [...arr1, ...arr2].reduce((acc, current) => acc + current, 0)
  return expectedValue
}

console.log(sumTwoArrays1([1, 2, 3], [4, 5, 6]))
console.log(sumTwoArrays1([-1, -2, -3], [-4, -5, -6]))
console.log(sumTwoArrays1([0, 0, 0], [4, 5, 6]))
console.log(sumTwoArrays1([100, 200, 300], [400, 500, 600]))

const sumTwoArrays2 = (arr1, arr2) => {
  return arr1.concat(arr2).reduce((acc, current) => acc + current)
}

console.log(sumTwoArrays2([1, 2, 3], [4, 5, 6]))
console.log(sumTwoArrays2([-1, -2, -3], [-4, -5, -6]))
console.log(sumTwoArrays2([0, 0, 0], [4, 5, 6]))
console.log(sumTwoArrays2([100, 200, 300], [400, 500, 600]))

