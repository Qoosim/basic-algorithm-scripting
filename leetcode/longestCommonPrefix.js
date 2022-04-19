const longestCommonPrefix = (strs) => {
  let firstChar = strs[0]
  let remainingStr = strs.splice(1);
  let prefix = "";
  remainingStr.forEach((str) => {
    for (let i = 0; i < firstChar.length; i++) {
      if (str[i] === firstChar[i]) {
        prefix += firstChar[i];
      } else break;
    }
    firstChar = prefix;
    prefix = '';
  })
  return firstChar;
}

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
