const simpleChangeMachine1 = (moneyIn) => {
  if (moneyIn === "£5") {
    return Array(25).fill("20p").join(" ")
  } else if (moneyIn === "£2") {
    return Array(10).fill("20p").join(" ")
  } else if (moneyIn === "£1") {
    return Array(5).fill("20p").join(" ")
  } else if (moneyIn === "50p") {
    return "20p 20p 10p"
  } else if (moneyIn === "20p") {
    return "10p 10p"
  } else {
    return moneyIn
  }
}


console.log(simpleChangeMachine1("£5"))
console.log(simpleChangeMachine1("£2"))
console.log(simpleChangeMachine1("£1"))
console.log(simpleChangeMachine1("50p"))
console.log(simpleChangeMachine1("20p"))
console.log(simpleChangeMachine1("Money"))
console.log(simpleChangeMachine1("1p"))


const simpleChangeMachine2 = (moneyIn) => {
  switch(moneyIn) {
    case "£5":
      return Array(25).fill("20p").join(" ")
      break
    case "£2":
      return Array(10).fill("20p").join(" ")
      break
    case "£1":
      return Array(5).fill("20p").join(" ")
      break
    case "50p":
      return "20p 20p 10p"
      break
    case "20p":
      return "10p 10"
      break
    default:
      return moneyIn
  }
}


console.log(simpleChangeMachine2("£5"))
console.log(simpleChangeMachine2("£2"))
console.log(simpleChangeMachine2("£1"))
console.log(simpleChangeMachine2("50p"))
console.log(simpleChangeMachine2("20p"))
console.log(simpleChangeMachine2("Money"))
console.log(simpleChangeMachine2("1p"))

