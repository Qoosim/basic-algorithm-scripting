const drawStairs = n => {
  return [...Array(n)].map((_, i) => " ".repeat(i) + "I").join("\n");
}

console.log(drawStairs(1))
console.log(drawStairs(3))
console.log(drawStairs(5))
console.log(drawStairs(7))


