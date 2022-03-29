function factorialize(num) {
  let fact = 1;
  while(num > 0) {
    fact *= num;
    num--;
  }
  return fact;
}

console.log(factorialize(5));
console.log(factorialize(6));
console.log(factorialize(9));

