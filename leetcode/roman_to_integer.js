const romanToInt = (s) => {
  const  map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length && map[s[i]] < map[s[i + 1]]) {
      result -= map[s[i]];
    } else {
      result += map[s[i]];
    }
  }

  return result;
}

console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));

const romanToInt2 = function (s) {
  let romanNum = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let strArr = s.split('');
  let numsArr = strArr.map((val) => {
      return romanNum[val];
    });
  let res = numsArr.reduceRight((acc, curr, index, arr) => {
      return arr[index + 1] > curr ? acc - curr : acc + curr;
    });
  return res;
};

console.log(romanToInt2('III'));
console.log(romanToInt2('LVIII'));
console.log(romanToInt2('MCMXCIV'));

