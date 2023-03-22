const spinWords = (str) => {
  return str.split(' ')
    .map((item) => {
      if (item.length >= 5) {
        return item.split('').reverse().join('')
      } else {
        return item
      }
    }).join(' ')
}

console.log(spinWords( "Hey fellow warriors")) // "Hey wollef sroirraw"
console.log(spinWords( "This is a test")) // "This is a test"
console.log(spinWords( "This is another test")) // "This is rehtona test"
