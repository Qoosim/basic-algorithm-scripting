const cubeWithPaint = (cuts) => {
  return cuts === 0 ? 1 : (6 * cuts * cuts) + 2;
}

console.log(cubeWithPaint(5));  // 152
console.log(cubeWithPaint(16)); // 1538
console.log(cubeWithPaint(23)); // 3176
