const romanToInt = (roman) => {
  const romanNum = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let result = 0;
  for (let i = 0; i < roman.length; i++) {
    if (i + 1 < roman.length && romanNum[roman[i]] < romanNum[roman[i + 1]]) {
      result -= romanNum[roman[i]];
    } else {
      result += romanNum[roman[i]];
    }
  }
  return result;
}

console.log(romanToInt('XXI'));
console.log(romanToInt('I'));
console.log(romanToInt('IV'));
console.log(romanToInt('MMVIII'));
console.log(romanToInt('MDCLXVI'));
console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'))
