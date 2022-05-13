const addBinary = (a, b) => {
  // return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2)
  let sum = 0;
  let carryBit = 0;
  let result = ''
  let lastIndexOfa = a.length - 1;
  let lastIndexOfb = b.length - 1;
  console.log(lastIndexOfa, lastIndexOfb);
  while(lastIndexOfa >= 0 || lastIndexOfb >=0) {
    sum = carryBit;
    sum += a[lastIndexOfa] ? parseInt(a[lastIndexOfa]) : 0;
    sum += b[lastIndexOfb] ? parseInt(b[lastIndexOfb]) : 0;

    result = Math.floor( sum % 2 ) + result;
    carryBit = parseInt( sum / 2);

    lastIndexOfa--;
    lastIndexOfb--
  }

  if (carryBit === 1) return carryBit + result;
  return result;
}

console.log(addBinary('11', '1'));
console.log(addBinary('1010', '1011'));
