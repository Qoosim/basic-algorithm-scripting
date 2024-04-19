const sumArray = (arr) => {
  return arr.reduce((acc, current) => acc + current, 0)
}

console.log(sumArray([1, 5.2, 4, 0, -1]))
console.log(sumArray([]))

