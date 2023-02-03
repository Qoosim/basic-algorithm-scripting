const digitalRoot = (n) =>  {
  if (n < 10) return n;
  const arr = String(n).split('');
  return digitalRoot(arr.reduce((acc, val) => {
    return acc + +val
  }, 0));
}

console.log(digitalRoot(16)); // 7
console.log(digitalRoot(456)) //  6

// Seconde Approach
const sumOfDigits = (n) => {
  //if (n < 10) return n;
  let sum = 0;
  while (n) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum > 9 ? sumOfDigits(sum) : sum;
}

console.log(sumOfDigits(12349)); // 1
console.log(sumOfDigits(84765)); // 3
console.log('=====================') //  6
console.log(sumOfDigits(16)); // 7
console.log(sumOfDigits(456)) //  6
