function repeatStringNumTimes(str, num) {
  let newStr = '';
  while(num > 0) {
    newStr += str;
    num--;
  }
  return newStr;
}

console.log(repeatStringNumTimes('abc', 3));
