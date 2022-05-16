const climbStairs = (n) => {
  /**
   first method: if (n === 1) return 1;
  if (n === 2) return 2;
  let f1 = 1;
  let f2 = 2;
  for (let i = 3; i <= n; i++) {
    let temp = f1 + f2;
    f1 = f2;
    f2 = temp;
  }
  return f2;
  */
  if (n <= 1) return 1;
  return climbStairs(n - 1) + climbStairs(n - 2);
}

console.log(climbStairs(2));
console.log(climbStairs(3));

