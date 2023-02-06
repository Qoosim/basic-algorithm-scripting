/*
  ===== Problem =====
 Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
*/

const splitStrings = (str) => {
  let splitStr = [];
  for (let i = 0; i < str.length; i += 2) {
    if (str.slice(i, i + 2).length % 2 !== 1) {
      splitStr.push(str.slice(i, i + 2));
    } else {
      splitStr.push(str.slice(i, i + 2) + "_");
    }
  }
  return splitStr;
}

console.log(splitStrings("abcdef"))
console.log(splitStrings("abcdefg"))
console.log(splitStrings(""))
