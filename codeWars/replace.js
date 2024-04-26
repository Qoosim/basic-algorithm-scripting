const replace1 = (str) => {
  let newStr = ""
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "a" || str[i].toLowerCase() === "e" || str[i].toLowerCase() === "i" || str[i].toLowerCase() === "o" || str[i].toLowerCase() === "u") {
      newStr += "!"
    } else {
      newStr += str[i]
    }
  }
  return newStr
}

console.log(replace1("Hi!"))
console.log(replace1("!Hi! Hi!"))
console.log(replace1("aeiou"))
console.log(replace1("ABCDE"))

console.log("=======Line Break============")

const replace2 = (str) => {
  return str.replace(/[aeiou]/gi, "!")
}

console.log(replace2("Hi!"))
console.log(replace2("!Hi! Hi!"))
console.log(replace2("aeiou"))
console.log(replace2("ABCDE"))
