// This is more efficient but not readable. we can optimize the function to have a time complexity of O(1) by dividing n by 2 and rounding down

const CountOddNumbersBelowN = (n) => {
  return Math.floor(n / 2)
}

console.log(CountOddNumbersBelowN(15))
console.log(CountOddNumbersBelowN(13))
console.log(CountOddNumbersBelowN(15023))


// This approach has time complexity of 0(n) which is inefficient
function oddCount(n){
 let count = 0
 for (let i = 1; i < n; i++) {
   if (i % 2 !== 0) {
     count++
   }
 }
  return count
}
