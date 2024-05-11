const pointOfReflection = (p, q) => {
  return [2*q[0] - p[0], 2*q[1] - p[1]]
}

console.log(pointOfReflection([0,0], [1,1]))
console.log(pointOfReflection([2, 6], [-2, -6]))
console.log(pointOfReflection([10, -10], [-10, 10]))
console.log(pointOfReflection([1, -35], [-12, 1]))
console.log(pointOfReflection([1000, 15], [-7, -214]))
console.log(pointOfReflection([0, 0], [0, 0]))
