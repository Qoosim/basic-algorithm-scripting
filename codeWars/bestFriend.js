const bestFriend = (text, before, after) => {
  for (let i = 0; i < text.length; i++) {
    if (text[i] === before && text[i + 1] !== after) return false
  }
  return true
  
  // for (const word in text) {
  //   if (text[word] === before && text[parseInt(word) + 1] !== after) return false
  // }
  // return true
}

console.log(bestFriend("zh", "z", "h"))
console.log(bestFriend("whose were heir torns tey said", "t", "h"))
console.log(bestFriend("zoo wee mama", "m", "a"))
console.log(bestFriend("i found an ounce with my hound", "o", "u"))
console.log(bestFriend("he headed to the store", "h", "e"))
console.log(bestFriend("those were their thorns they said", "t", "h"))
console.log(bestFriend("we found your dynamite", "d", "y"))


// ages = "12 25 35 47 38 15 7 20";
