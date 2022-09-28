const longestCommonPrefix = function(strs) {
  let firstElem = strs[0];
  let leftStrs = strs.splice(1);
  let result = '';
  leftStrs.forEach((str) => {
    for (let i = 0; i < firstElem.length; i++) {
      if (str[i] === firstElem[i]) {
        result += firstElem[i];
      } else break;
    }
    firstElem = result;
    result = '';
  })
  return firstElem;
}

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
