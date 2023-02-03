const spinWords = (str) => {
  return str.split(' ')
    .map((word) => {
      if (word.length >= 5) {
        return word.split('').reverse().join('');
      }
      return word;
    }).join(' ')
}

console.log(spinWords("Welcome"));
console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is another test"));
console.log(spinWords("You are almost to the last test"));
console.log(spinWords("Just kidding there is still one more"));
console.log(spinWords("Seriously this is the last one"));
