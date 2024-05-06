const differenceInAges1 = (ages) => {
  const store = []
  const sortedArray = ages.sort((a, b) => a - b) // time complexity is 0(n log n) due to sorting operation
  let youngest = sortedArray[0]
  let oldest = sortedArray[sortedArray.length - 1]
  let differ = oldest - youngest
  store.push(youngest);
  store.push(oldest);
  store.push(differ);
  return store;
}

console.log(differenceInAges1([82, 15, 6, 38, 35])) // [6, 82, 76]
console.log(differenceInAges1([57, 99, 14, 32])) // [14, 99, 85]


// the second solution is better cos it it has time complexity of O(n) 
//because it iterates through the array only twice to find the minimum and maximum ages.
function minAge(age) {
  let min = Infinity;
  for (let i = 0; i < age.length; i++) {
    if (age[i] < min) {
      min = age[i]
    }
  }
  return min
}

function maxAge(age) {
  let max = -Infinity;
  for (let i = 0; i < age.length; i++) {
    if (age[i] > max) {
      max = age[i]
    }
  }
  return max;
}

const differenceInAges2 = (ages) => {
  return [minAge(ages), maxAge(ages), maxAge(ages) - minAge(ages)]
}

console.log(differenceInAges2([82, 15, 6, 38, 35])) // [6, 82, 76]
console.log(differenceInAges2([57, 99, 14, 32])) // [14, 99, 85]


// This solution is better
const differenceInAges3 = (ages) => {
 let youngest = ages[0]
 let oldest = ages[0]
 for (let i = 0; i < ages.length; i++) {
  if (ages[i] > oldest) {
    oldest = ages[i]
  } else if (ages[i] < youngest) {
    youngest = ages[i]
  }
 }
 return [youngest, oldest, oldest - youngest]
}

console.log(differenceInAges3([82, 15, 6, 38, 35])) // [6, 82, 76]
console.log(differenceInAges3([57, 99, 14, 32])) // [14, 99, 85]

// This solution is the best
const differenceInAges4 = (ages) => {
  let min = Math.min(...ages)
  let max = Math.max(...ages)
  return [min, max, max - min]
 }
 
 console.log(differenceInAges4([82, 15, 6, 38, 35])) // [6, 82, 76]
 console.log(differenceInAges4([57, 99, 14, 32])) // [14, 99, 85]
 



