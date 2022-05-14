const mySqrt = (x) => {
  // return Math.floor(Math.pow(num, 0.5)); // solved with the built-in method. But not allowed by the leetcode platform

  if (x < 0) return x;
  if (x === 1) return x;
  let max = x;
  let min;

  function findSquare(num) {
    let mid = Math.floor(num / 2);
    let square = mid * mid;

    if (square === x) {
      return mid;
    } else if (max - min === 1) {
      return min;
    } else if (square > x) {
      max = mid;
      return findSquare(mid);
    } else if (square < x) {
      min = mid
      return findSquare(max + min);
    }
  }
  return findSquare(x);
}

console.log(mySqrt(4));
console.log(mySqrt(8));
console.log(mySqrt(6));
console.log(mySqrt(-1));
