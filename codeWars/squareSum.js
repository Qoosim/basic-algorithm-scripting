const squareSum1 = (numbers) => {
  return numbers.map((num) => num ** 2).reduce((acc, current) => acc + current, 0)
}

console.log(squareSum1([1,2]))
console.log(squareSum1([0, 3, 4, 5]))
console.log(squareSum1([]))

// 
const squareSum2 = (numbers) => {
  return numbers.reduce((sum, num) => sum + (num ** 2), 0)
}

console.log(squareSum2([1,2, 2]))
console.log(squareSum2([0, 3, 4, 5, 2]))
console.log(squareSum2([]))

