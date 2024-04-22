const powerOfTwo = (n) => {
    const powers = []
   for (let i = 0; i <= n; i++) {
    powers.push(Math.pow(2, i))
   }
   return powers
}

console.log(powerOfTwo(0))
console.log(powerOfTwo(1))
console.log(powerOfTwo(2))
console.log(powerOfTwo(4))