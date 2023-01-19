const longestComPref = (arr) => {
  let firstElem = arr[0];
  const elemRemain = arr.splice(1);
  let prefix = '';
  elemRemain.forEach((item) => {
    for (let i = 0; i < firstElem.length; i++) {
      if (item[i] === firstElem[i]) {
        prefix += firstElem[i]
      } else break;
    }
    firstElem = prefix;
    prefix = '';
  })
  return firstElem;
}

console.log(longestComPref(["flower","flow","flight"]));
console.log(longestComPref(["dog","racecar","car"]));
