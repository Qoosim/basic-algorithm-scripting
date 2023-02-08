/*
 Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
 Leave punctuation marks untouched.
*/

const simplePigLatin = (str) => {
  const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  return str.split(' ')
    .map((string) => {
      if (punctuation.indexOf(string) === -1) {
        return string = string.slice(1) + string[0] + "ay"
      } else {
        return string
      }
    }).join(' ')
}

console.log(simplePigLatin('Pig latin is cool')) // 'igPay atinlay siay oolcay'
console.log(simplePigLatin('This is my string')) // 'hisTay siay ymay tringsay'
console.log(simplePigLatin('Hello world !')) // elloHay orldway !
console.log(simplePigLatin('Quis custodiet ipsos custodes ?')) 

const pigIt = (str) => {
  //const regex = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  return str.replace(/\w+/g, (word) => {
    return word.slice(1) + word.charAt(0) + 'ay';
  })
}

console.log(pigIt('This is my second approach'));
console.log(pigIt('Second method to test it !'));
console.log(pigIt('Be the best at your professional !'));
