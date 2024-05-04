const reverseString = (str) => {
  return str.split(" ").map((item) => {
    return item.split("").reverse().join("")
  }).reverse().join(" ")
}

console.log(reverseString("This is what I want"));
console.log(reverseString("Open space celebration!"));
console.log(reverseString("Suffering and smiling"));

console.log("=======Refactor=======")

const reverseStringRefactor = (str) => {
  return str.split("").reverse().join("")
}


console.log(reverseStringRefactor("This is what I want"));
console.log(reverseStringRefactor("Open space celebration!"));
console.log(reverseStringRefactor("Suffering and smiling"));
