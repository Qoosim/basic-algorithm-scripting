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
