const lengthOfLastWord = (str) => {
  let splitted = str.trim().split(' ');
  let lastWord = splitted[splitted.length - 1];
  let lastWordLength = 0;
  splitted.forEach((word) => {
    if (word === lastWord) {
      lastWordLength += word.length;
    }
  })
  return lastWordLength;
}

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));

//  return s.split(' ').reduce((acc, i) => i ? i : acc).length // One line sotution
