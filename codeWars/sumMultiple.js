const sumMul = (n,m) => {
  if ( n < 1 || m < 1) return 'INVALID';
  let sum = 0;
  for (let i = n; i < m; i+=n) {
    sum += i;
  }
  return sum;
}

console.log(sumMul(2, 9));
console.log(sumMul(0,0));

/*
console.log(sumMul(0,0)); //"INVALID"));
console.log(sumMul(2, 9)); // ==> 2 + 4 + 6 + 8 = 20
console.log(sumMul(3, 13));  //==> 3 + 6 + 9 + 12 = 30
console.log(sumMul(4, 123)); // ==> 4 + 8 + 12 + ... = 1860
console.log(sumMul(4, -7)); // ==> "INVALID"
*/
