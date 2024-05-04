const collinearity = (x1,y1, x2,y2) => {
  // handle cases where x2 or y2 are zero to avoid division by zero error
  if ((x1 === 0 && x2 === 0) || (y1 === 0 && y2 === 0)) {
    return true // Both vectors are (0,0), so they're collinear
  } else if ((x1 === 0 && x2 !== 0) || (y1 === 0 && y2 !== 0)) {
    return false // One vector is (0,0), but the other is not, so they are not collinear
  }

  // check if vectors are parallel
  return x1 / x2 === y1 / y2
}

console.log(collinearity( 1,1, 1,1 )) // true
console.log(collinearity( 1,2, 2,4 )) // true
console.log(collinearity( 1,2, -1,-2 )) // true
console.log(collinearity( 1,1, 6,1 )) // false
console.log(collinearity( 1,2, 1,-2 )) // false
console.log(collinearity( 4,0, 11,0 )) // true
console.log(collinearity( 0,1, 6,0 )) // false
console.log(collinearity( 4,4, 0,4 )) // false
