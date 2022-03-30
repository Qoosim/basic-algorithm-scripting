function repeatStringNumTimes(str, num) {
  let newStr = '';
  while(num > 0) {
    newStr += str;
    num--;
  }
  return newStr;
}

console.log(repeatStringNumTimes('abc', 3));

function repeatStringNumTimes2(str, num) {
  let repeatStr = '';
  for (let i = 0; i < num; i++) {
    repeatStr += str;
  }
  return repeatStr;
}

console.log(repeatStringNumTimes2('bad', 3));

function repeatStringNumTimes3(str, num) {
  return str.repeat(num);
}

console.log(repeatStringNumTimes3('good', 4));
