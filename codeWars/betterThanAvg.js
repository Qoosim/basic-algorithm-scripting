const betterThanAvg = (classPoints, yourPoints) => {
  let avgPoints = 0;
  for (let i = 0; i < classPoints.length; i++) {
    avgPoints += classPoints[i];
  }
  avgPoints = avgPoints / classPoints.length;
  return yourPoints > avgPoints;
}

console.log(betterThanAvg([2, 3], 5))
console.log(betterThanAvg([100, 40, 34, 57, 29, 72, 57, 88], 75))
console.log(betterThanAvg([12, 23, 34, 45, 56, 67, 78, 89, 90], 69))
console.log(betterThanAvg([41, 75, 72, 56, 80, 82, 81, 33], 50))
console.log(betterThanAvg([29, 55, 74, 60, 11, 90, 67, 28], 21))
console.log(betterThanAvg(4,94,4,54,62,55,15,42,84,66,7,2,18,11,76,80,32,87,47,9,73,14,97,16,99,59,0,31,18,68,63,11,92,48,80,50,82,28,53,76,74,16,24,21,22,44,68,75,73,97, 77))
console.log(betterThanAvg(61,18,51,29,24,45,19,39,27,64,55,46,59,54,53,94,41,20,6,6,74,60,27,87,85,91,33,26,50,35,75,5,74,83,84,39,27,27,43,17,82,77,66,35,0,91,59,81,73,39, 40))
