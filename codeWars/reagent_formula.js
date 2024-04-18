const isValid = (formula) => {
  //check material1 and material2
  if (formula.includes(1) && formula.includes(2)) return false
  // check material3 and material4
  if (formula.includes(3) && formula.includes(4)) return false
  // check material5 and material6
  if ((formula.includes(5) !== formula.includes(6))) return false 
  // check material7 or material8
  if (formula.includes(7) || formula.includes(8)) {
    return true
  } else {
    return false
  }
  return true
}

console.log(isValid([1,3,7]))
console.log(isValid([7,1,2,3]))
console.log(isValid([1,3,5,7]))
console.log(isValid([1,5,6,7,3]))
console.log(isValid([5,6,7]))
console.log(isValid([5,6,7,8]))
console.log(isValid([6,7,8]))
console.log(isValid([7,8]))

