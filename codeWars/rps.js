const rps = (p1, p2) => {
//  const firstPlayer = prompt("Player 1: ")
 // const secondPlayer = prompt("Player 2: ")
  let result = "";

  if ((p1 === "rock" && p2 === "scissors") ||
     (p1 === "scissors" && p2 === "paper") ||
     (p1 === "paper" && p2 === "rock")) {
    result = "Player 1 won!";
  } else if ((p1 === "scissors" && p2 === "rock") ||
            (p1 === "paper" && p2 === "scissors") ||
            (p1 === "rock" && p2 === "paper")) {
    result = "Player 2 won!";
  } else if (p1 === p2) {
    result = "Draw!"
  } else {
    result = "Invalid input. Please, try again"
  }

  return result;
}

console.log(rps("rock", "rock"))
