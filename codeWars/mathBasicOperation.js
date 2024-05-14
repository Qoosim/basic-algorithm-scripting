function basicOp1(operation, value1, value2){
  return operation === "+" ? value1 + value2 :
    operation === "-" ? value1 - value2 :
    operation === "*" ? value1 * value2 : value1 / value2
}

console.log(basicOp1("+", 4, 7))
console.log(basicOp1("-", 15, 18))
console.log(basicOp1("*", 5, 5))
console.log(basicOp1("/", 49, 7))

/*===== Second Approach =====*/
console.log("==== Second Approach ====")

function basicOp2(operation, value1, value2){
  return eval(value1 + operation + value2)
}

console.log(basicOp2("+", 7, 9))
console.log(basicOp2("-", 13, 38))
console.log(basicOp2("*", 6, 9))
console.log(basicOp2("/", 66, 6))

/*===== Third Approach =====*/
console.log("==== Third Approach ====")

function basicOp3(operation, value1, value2){
  switch(operation) {
    case "+":
      return value1 + value2
    case "-":
      return value1 - value2
    case "*":
      return value1 * value2
    case "/":
      return value1 / value2
    default:
      return 0
  }
}

console.log(basicOp3("+", 5, 5))
console.log(basicOp3("-", 11, 28))
console.log(basicOp3("*", 3, 9))
console.log(basicOp3("/", 16, 4))

/*===== Fourth Approach =====*/
console.log("==== Fourth Approach ====")

function basicOp4(operation, value1, value2){
  let cases = {
    "+": value1 + value2,
    "-": value1 - value2,
    "*": value1 * value2,
    "/": value1 / value2
  }
  return cases[operation]
}

console.log(basicOp4("+", 5, 5))
console.log(basicOp4("-", 11, 28))
console.log(basicOp4("*", 3, 9))
console.log(basicOp4("/", 16, 4))

