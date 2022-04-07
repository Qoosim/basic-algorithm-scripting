const titleCase = (str) => {
  let splittedWord = str.toLowerCase().split(' ');
  let finalSentence = '';
  for (let i = 0; i < splittedWord.length; i++) {
    let titleCase = splittedWord[i][0].toUpperCase();
    finalSentence += titleCase + splittedWord[i].slice(1) + ' '
  }
  return finalSentence + '.';
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
