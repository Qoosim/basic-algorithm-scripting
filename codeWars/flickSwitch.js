const flickSwitch = (arr) => {
  let result = true
  return arr.map((item) => {
    if (item === "flick") {
      result = !result
    }
    return result
  })
}

console.log(flickSwitch(["codewars", "flick", "code", "wars"]))
console.log(flickSwitch(["flick", "chocolate", "adventure", "sunshine"]))
console.log(flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]))
console.log(flickSwitch(["flick", "flick", "flick", "flick", "flick"]))
console.log(flickSwitch(["john, smith, susan", "flick"]))
console.log(flickSwitch(["bicycle"]))
console.log(flickSwitch(["flick"]))
console.log(flickSwitch([]))
