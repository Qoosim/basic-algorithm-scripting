const ageLesser = (str) => {
    return str.split(" ").filter((item) => item <= 25)
}

console.log(ageLesser("12 25 35 47 38 15 7 20"))

// ages = "12 25 35 47 38 15 7 20";
//

console.log("======================")

const bestFriendNew = (str) => {
  for (const word in str) {
      console.log(str[word])
  }
}

console.log(bestFriendNew("Those were their thorns they said"))
