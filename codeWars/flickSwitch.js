// First solution
const flickSwitch1 = (arr) => {
  let result = true
  return arr.map((item) => {
    if (item === "flick") {
      result = !result
    }
    return result
  })
}

console.log(flickSwitch1(["codewars", "flick", "code", "wars"]))
console.log(flickSwitch1(["flick", "chocolate", "adventure", "sunshine"]))
console.log(flickSwitch1(["bicycle", "jarmony", "flick", "sheep", "flick"]))
console.log(flickSwitch1(["flick", "flick", "flick", "flick", "flick"]))
console.log(flickSwitch1(["john, smith, susan", "flick"]))
console.log(flickSwitch1(["bicycle"]))
console.log(flickSwitch1(["flick"]))
console.log(flickSwitch1([]))


// Second solution
const flickSwitch2 = (arr) => {
  const result = []
  let temp = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "flick") {
      temp = !temp
    }
    result.push(temp)
  }
  return result
}

console.log(flickSwitch2(["codewars", "flick", "code", "wars"]))
console.log(flickSwitch2(["flick", "chocolate", "adventure", "sunshine"]))
console.log(flickSwitch2(["bicycle", "jarmony", "flick", "sheep", "flick"]))
console.log(flickSwitch2(["flick", "flick", "flick", "flick", "flick"]))
console.log(flickSwitch2(["john, smith, susan", "flick"]))
console.log(flickSwitch2(["bicycle"]))
console.log(flickSwitch2(["flick"]))
console.log(flickSwitch2([]))
