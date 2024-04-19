const cockroachSpeed = (speed) => {
  // 1km = 100000
  // 1hr = 3,600
  const speedCmPerSecond = 3600
  const speedKmPerHour = 100000
  return Math.floor((speed * speedKmPerHour) / speedCmPerSecond);
}

console.log(cockroachSpeed(1.08))
console.log(cockroachSpeed(1.09))
console.log(cockroachSpeed(0))
